#!/usr/bin/env node

/**
 * Validation script for Ivytag Theme VS Code extension.
 * Ensures package.json, theme JSON, tokens, colors, and assets comply with
 * VS Code extension requirements and quality standards.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
let errors = 0;
let warnings = 0;

function logPass(msg) {
  console.log(`\x1b[32m✔ PASS:\x1b[0m ${msg}`);
}

function logFail(msg) {
  console.error(`\x1b[31m✖ FAIL:\x1b[0m ${msg}`);
  errors++;
}

function logWarn(msg) {
  console.warn(`\x1b[33m⚠ WARN:\x1b[0m ${msg}`);
  warnings++;
}

console.log('\n--- Validating Ivytag Theme Package ---\n');

// 1. Validate package.json
const pkgPath = path.join(rootDir, 'package.json');
if (!fs.existsSync(pkgPath)) {
  logFail('package.json not found!');
  process.exit(1);
}

let pkg;
try {
  pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  logPass('package.json is valid JSON');
} catch (e) {
  logFail(`package.json JSON parse error: ${e.message}`);
  process.exit(1);
}

const requiredFields = ['name', 'displayName', 'version', 'publisher', 'engines', 'categories', 'contributes', 'license'];
for (const field of requiredFields) {
  if (!pkg[field]) {
    logFail(`Missing required package.json field: "${field}"`);
  } else {
    logPass(`package.json field "${field}" is present (${typeof pkg[field] === 'object' ? JSON.stringify(pkg[field]) : pkg[field]})`);
  }
}

if (!pkg.engines || !pkg.engines.vscode) {
  logFail('package.json missing "engines.vscode"');
} else {
  logPass(`VS Code engine specified: ${pkg.engines.vscode}`);
}

if (!pkg.contributes || !Array.isArray(pkg.contributes.themes) || pkg.contributes.themes.length === 0) {
  logFail('package.json missing "contributes.themes" entry');
} else {
  logPass(`Contributes ${pkg.contributes.themes.length} theme(s)`);
}

// 2. Validate Icon
if (pkg.icon) {
  const iconPath = path.join(rootDir, pkg.icon);
  if (!fs.existsSync(iconPath)) {
    logFail(`Configured icon does not exist: ${pkg.icon}`);
  } else {
    const iconStats = fs.statSync(iconPath);
    const sizeKB = (iconStats.size / 1024).toFixed(1);
    if (iconStats.size > 100 * 1024) {
      logWarn(`Icon size is ${sizeKB} KB (marketplace recommends < 100 KB)`);
    } else {
      logPass(`Icon is optimal: ${sizeKB} KB (${pkg.icon})`);
    }
  }
} else {
  logWarn('No icon specified in package.json');
}

// 3. Validate Theme Files
for (const themeEntry of pkg.contributes.themes || []) {
  console.log(`\nValidating theme: "${themeEntry.label}" (${themeEntry.path})...`);
  const fullThemePath = path.join(rootDir, themeEntry.path);
  if (!fs.existsSync(fullThemePath)) {
    logFail(`Theme file not found: ${themeEntry.path}`);
    continue;
  }

  let themeData;
  try {
    themeData = JSON.parse(fs.readFileSync(fullThemePath, 'utf8'));
    logPass(`${themeEntry.path} is valid JSON`);
  } catch (e) {
    logFail(`${themeEntry.path} failed to parse: ${e.message}`);
    continue;
  }

  if (themeData.type !== 'dark' && themeData.type !== 'light') {
    logWarn(`Theme type is "${themeData.type}", usually expected to be "dark" or "light"`);
  }

  // Validate colors
  const colors = themeData.colors || {};
  const colorKeys = Object.keys(colors);
  logPass(`Workbench colors defined: ${colorKeys.length}`);

  const hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
  let invalidColors = 0;
  for (const [key, val] of Object.entries(colors)) {
    if (typeof val !== 'string' || !hexRegex.test(val)) {
      logFail(`Invalid color value at "${key}": "${val}"`);
      invalidColors++;
    }
  }
  if (invalidColors === 0) {
    logPass('All workbench colors are valid HEX / RGBA values');
  }

  // Check critical state colors
  const criticalStateKeys = [
    'focusBorder',
    'selection.background',
    'list.activeSelectionBackground',
    'list.hoverBackground',
    'list.focusBackground',
    'editor.lineHighlightBackground',
    'editor.selectionBackground',
    'editor.findMatchBackground',
    'editorError.foreground',
    'editorWarning.foreground',
    'editorInfo.foreground',
    'editorHint.foreground',
    'gitDecoration.addedResourceForeground',
    'gitDecoration.modifiedResourceForeground',
    'gitDecoration.deletedResourceForeground',
    'statusBar.background',
    'tab.activeBackground',
    'activityBar.background'
  ];

  let missingCritical = 0;
  for (const k of criticalStateKeys) {
    if (!colors[k]) {
      logWarn(`Recommended state color missing: "${k}"`);
      missingCritical++;
    }
  }
  if (missingCritical === 0) {
    logPass('All critical UI state colors are fully defined');
  }

  // Validate tokenColors
  const tokenColors = themeData.tokenColors || [];
  logPass(`Syntax token color rules defined: ${tokenColors.length}`);

  let tokenErrors = 0;
  tokenColors.forEach((rule, idx) => {
    if (!rule.settings) {
      logFail(`Token rule #${idx} (${rule.name || 'unnamed'}) is missing settings object`);
      tokenErrors++;
    }
  });
  if (tokenErrors === 0) {
    logPass('All syntax token rules have valid settings');
  }

  // Validate semanticTokenColors
  const semanticColors = themeData.semanticTokenColors || {};
  const semanticKeys = Object.keys(semanticColors);
  logPass(`Semantic token colors defined: ${semanticKeys.length}`);
}

// 4. Validate .vscodeignore
const ignorePath = path.join(rootDir, '.vscodeignore');
if (fs.existsSync(ignorePath)) {
  const ignoreContent = fs.readFileSync(ignorePath, 'utf8');
  if (ignoreContent.includes('scripts/**')) {
    logPass('.vscodeignore excludes scripts directory');
  } else {
    logWarn('.vscodeignore should exclude "scripts/**"');
  }
  if (ignoreContent.includes('*.vsix')) {
    logPass('.vscodeignore excludes VSIX artifacts');
  } else {
    logWarn('.vscodeignore should exclude "*.vsix"');
  }
}

console.log('\n--- Validation Summary ---');
console.log(`Errors:   ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) {
  console.error('\x1b[31mValidation failed with errors.\x1b[0m\n');
  process.exit(1);
} else {
  console.log('\x1b[32mAll checks passed successfully!\x1b[0m\n');
  process.exit(0);
}
