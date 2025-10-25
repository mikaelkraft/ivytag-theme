# Packaging and Publishing Guide for Ivytag Theme by Mikael Kraft

## Package Created ✅

Your extension has been successfully packaged:

**File:** `ivytag-theme-0.3.0.vsix`
**Size:** 320 KB
**Location:** `/home/runner/work/ivytag-theme/ivytag-theme/ivytag-theme-0.3.0.vsix`

## What's Included in the Package

The VSIX package contains:
- LICENSE.txt (1.05 KB)
- CHANGELOG.md
- package.json (1.08 KB)
- README.md
- images/icon.png (346.51 KB)
- themes/Ivytag-color-theme.json (50.45 KB)

## How to Install and Test Locally

### Option 1: Install from .vsix file in VS Code
1. Open VS Code
2. Go to Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Click the `...` menu at the top of the Extensions view
4. Select "Install from VSIX..."
5. Browse to `ivytag-theme-0.3.0.vsix` and select it
6. Reload VS Code when prompted
7. Go to `File > Preferences > Color Theme > Ivytag color theme`

### Option 2: Install via command line
```bash
code --install-extension ivytag-theme-0.3.0.vsix
```

## How to Publish to VS Code Marketplace

### Prerequisites
1. Create a publisher account at https://marketplace.visualstudio.com/manage
2. Create a Personal Access Token (PAT) from https://dev.azure.com/

### Publish Using vsce

```bash
# Login to your publisher account (one-time setup)
vsce login MikaelKraft

# Publish the extension
vsce publish

# Or publish a specific version
vsce publish 0.3.0

# Or publish from the .vsix file directly
vsce publish --packagePath ivytag-theme-0.3.0.vsix
```

### Publish Manually via Web

1. Go to https://marketplace.visualstudio.com/manage/publishers/MikaelKraft
2. Click "New extension" > "Visual Studio Code"
3. Upload `ivytag-theme-0.3.0.vsix`
4. The extension will be published and available in the marketplace

## Updating the Extension

To publish updates in the future:

1. Make your changes to the theme
2. Update the version in `package.json`
3. Update `CHANGELOG.md` with the changes
4. Package the extension: `vsce package`
5. Publish: `vsce publish` or upload the new .vsix file

## Version Management

You can also use vsce to automatically bump versions:

```bash
vsce publish patch  # 0.3.0 -> 0.3.1
vsce publish minor  # 0.3.0 -> 0.4.0
vsce publish major  # 0.3.0 -> 1.0.0
```

## Troubleshooting

### "Publisher not found" error
Make sure you're logged in with the correct publisher name: `vsce login MikaelKraft`

### Icon too large warning
The icon.png is 346KB. Consider optimizing it to reduce package size if needed.

### Missing dependencies
If you get errors about missing dependencies, run: `npm install -g @vscode/vsce`

## Resources

- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Extension Marketplace](https://marketplace.visualstudio.com/)
- [vsce Documentation](https://github.com/microsoft/vscode-vsce)

---

**Your extension is ready to publish!** 🎉
