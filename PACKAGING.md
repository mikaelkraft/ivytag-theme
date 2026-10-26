# Packaging and Publishing Guide for Ivytag Theme

## Package Status ✅

The extension packages cleanly into a lightweight VSIX bundle:

- **Package:** `ivytag-theme-0.7.0.vsix`
- **Engine Requirement:** VS Code `^1.85.0`
- **Optimized Assets:** High-DPI icon compressed to ~41 KB (under Marketplace recommended threshold)

## What's Included in the Package

The VSIX package contains only production essentials:
- `LICENSE.txt` - MIT license
- `CHANGELOG.md` - Complete release notes
- `package.json` - Extension manifest & metadata
- `README.md` - Marketplace documentation
- `images/icon.png` - Optimized 256x256 extension icon
- `themes/Ivytag-color-theme.json` - Enhanced color theme specification

Development tooling, validation scripts (`scripts/**`), raw assets (`images/icon-original.png`), and lockfiles are excluded via `.vscodeignore`.

## Building and Validating

### Run Automated Validation
```bash
npm test
# or
npm run validate
```

### Build VSIX Package
```bash
npm run package
# or
npx vsce package --no-git-tag-version
```

## How to Install and Test Locally

### Option 1: Install from .vsix file in VS Code UI
1. Open VS Code
2. Open the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Click the `...` (Views and More Actions) menu in the top right
4. Select **Install from VSIX...**
5. Select `ivytag-theme-0.7.0.vsix`
6. Switch theme: `Preferences: Color Theme` -> `Ivytag color theme`

### Option 2: Install via Command Line
```bash
code --install-extension ivytag-theme-0.7.0.vsix
```

## How to Publish to VS Code Marketplace

### Prerequisites
1. Create a publisher account at [Marketplace Management Portal](https://marketplace.visualstudio.com/manage)
2. Generate a Personal Access Token (PAT) with `Marketplace (Manage)` permissions from [Azure DevOps](https://dev.azure.com/)

### Publish Using vsce CLI

```bash
# Login to your publisher account (one-time setup)
npx vsce login MikaelKraft

# Publish the current packaged version
npx vsce publish --packagePath ivytag-theme-0.7.0.vsix
```

### Publish Manually via Web Portal
1. Navigate to https://marketplace.visualstudio.com/manage/publishers/MikaelKraft
2. Click **New extension** > **Visual Studio Code**
3. Upload `ivytag-theme-0.7.0.vsix`
4. The extension will verify and publish in minutes

## Updating the Extension

1. Make theme adjustments in `themes/Ivytag-color-theme.json`
2. Run validation: `npm test`
3. Update version in `package.json` and document additions in `CHANGELOG.md`
4. Rebuild package: `npm run package`
5. Publish updated VSIX

## Resources

- [VS Code Publishing Extensions Guide](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [VS Code Color Theme Guide](https://code.visualstudio.com/api/extension-guides/color-theme)
- [vsce Documentation](https://github.com/microsoft/vscode-vsce)
