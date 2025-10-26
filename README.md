# Ivytag Theme

[![Version](https://img.shields.io/visual-studio-marketplace/v/MikaelKraft.ivytag-theme?style=flat-square&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=MikaelKraft.ivytag-theme)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/MikaelKraft.ivytag-theme?style=flat-square&label=Downloads)](https://marketplace.visualstudio.com/items?itemName=MikaelKraft.ivytag-theme)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/MikaelKraft.ivytag-theme?style=flat-square&label=Rating)](https://marketplace.visualstudio.com/items?itemName=MikaelKraft.ivytag-theme)
[![License](https://img.shields.io/github/license/mikaelkraft/ivytag-theme?style=flat-square)](LICENSE.txt)

# Meet my Awesome theme!

A well-crafted dark theme with vibrant touches of dark greens and blues for an immersive coding experience.

## Features

- 🌲 **Dark Theme** - Easy on the eyes with deep, rich colors
- 💚 **Green & Blue Accents** - Vibrant color scheme that makes code pop
- 🎨 **Comprehensive Syntax Support** - Carefully crafted colors for multiple languages including:
  - JavaScript/TypeScript
  - Python
  - Java
  - C/C++
  - PHP
  - Go
  - Rust
  - CSS/SCSS/LESS
  - HTML
  - Markdown
  - And many more...
- ✨ **Semantic Highlighting** - Enhanced code understanding with semantic token colors
- 🔧 **Complete UI Theming** - Consistent dark theme across the entire VS Code interface

## Installation

### Via VS Code Marketplace

1. Open **Extensions** sidebar in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac)
2. Search for `ivytag theme`
3. Click **Install**
4. Click **Reload** to reload your editor
5. Go to `File > Preferences > Color Theme > Ivytag color theme`

### Via Command Line

```bash
ext install MikaelKraft.ivytag-theme
```

### Manual Installation

1. Copy the extension folder to your VS Code extensions directory:
   - **Windows**: `%USERPROFILE%\.vscode\extensions`
   - **macOS/Linux**: `~/.vscode/extensions`
2. Restart VS Code
3. Go to `File > Preferences > Color Theme > Ivytag color theme`

## Customization

You can customize the theme colors by adding settings to your `settings.json`:

```json
{
  "workbench.colorCustomizations": {
    "[Ivytag color theme]": {
      "editor.background": "#000000",
      "editor.foreground": "#ffffff"
    }
  },
  "editor.tokenColorCustomizations": {
    "[Ivytag color theme]": {
      "comments": "#55565a"
    }
  }
}
```

### Development

To customize and test the theme locally:

1. Press `F5` to open a new window with your extension loaded
2. Open `File > Preferences > Color Themes` and pick your color theme
3. Make changes to the theme file - changes are automatically applied to the Extension Development Host window
4. To examine token scopes, use `Developer: Inspect Editor Tokens and Scopes` command (`Ctrl+Shift+P` or `Cmd+Shift+P`)

For more information on theme development, check out the [VS Code Color Theme Guide](https://code.visualstudio.com/api/extension-guides/color-theme).

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

[MIT License](LICENSE.txt) - Copyright © 2023-2025 Michael Kraft

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes.

---

**Enjoy coding with Ivytag Theme!** 🌲✨
