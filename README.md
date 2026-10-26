# Ivytag Theme

[![Version](https://img.shields.io/visual-studio-marketplace/v/MikaelKraft.ivytag-theme?style=flat-square&label=VS%20Marketplace&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=MikaelKraft.ivytag-theme)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/MikaelKraft.ivytag-theme?style=flat-square&label=Downloads)](https://marketplace.visualstudio.com/items?itemName=MikaelKraft.ivytag-theme)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/MikaelKraft.ivytag-theme?style=flat-square&label=Rating)](https://marketplace.visualstudio.com/items?itemName=MikaelKraft.ivytag-theme)
[![License](https://img.shields.io/github/license/mikaelkraft/ivytag-theme?style=flat-square)](LICENSE.txt)

# Meet my Awesome theme!

A well-crafted dark theme with rich dark greens and vibrant blue accents for an immersive, distraction-free coding experience.

## Available on:
- VS Code Marketplace
- Google Cloud Shell CLI
- Eclipse IDE

## Features

- 🌲 **Deep Dark Palette** - Pure black editor canvas paired with deep spruce and slate-teal surfaces for zero eye strain
- 💚 **Vibrant Ivy & Blue Accents** - Electric emerald (`#38ef7d`), cyan (`#79fff9`), and sky blue (`#38bdf8`) accents make code and UI state pop
- 🌿 **Harmonized State Colors** - Thoughtfully tuned focus borders, selection backgrounds, and interactive hover states across the entire workbench
- 👁 **Ergonomic Line Numbers** - Calm moss green (`#3a614d`) inactive line numbers with an unmistakable vibrant active line indicator
- 🎯 **Crystal-Clear Diagnostics** - Cohesive coral red errors, amber warnings, sky-blue info markers, and mint hints
- 🔍 **Modern VS Code UI Support** - Dedicated styling for Command Center, Sticky Scroll, Inlay Hints, and Peek View
- 🎨 **Comprehensive Syntax & Semantic Highlighting** - High-contrast coverage for:
  - TypeScript / JavaScript
  - Python
  - Rust & Go
  - C / C++ / C#
  - Java / Kotlin
  - HTML, CSS / SCSS
  - Markdown, JSON, YAML
- ⚡ **Lean & Fast** - High-DPI icon optimized to 41 KB with sub-second theme loading and clean packaging

## Installation

### Via VS Code Marketplace

1. Open **Extensions** sidebar in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS)
2. Search for `ivytag theme`
3. Click **Install**
4. Set theme: `File > Preferences > Color Theme > Ivytag color theme` (or `Cmd+K Cmd+T`)

### Via Command Line

```bash
code --install-extension MikaelKraft.ivytag-theme
```

### Manual Installation (.vsix)

1. Download or package `ivytag-theme-0.7.0.vsix`
2. Run:
```bash
code --install-extension ivytag-theme-0.7.0.vsix
```

## Customization

You can fine-tune any theme color in your personal `settings.json`:

```json
{
  "workbench.colorCustomizations": {
    "[Ivytag color theme]": {
      "editor.background": "#000000",
      "statusBar.background": "#031e17"
    }
  },
  "editor.tokenColorCustomizations": {
    "[Ivytag color theme]": {
      "comments": "#55565a"
    }
  }
}
```

### Development & Testing

1. Clone repository:
```bash
git clone https://github.com/mikaelkraft/ivytag-theme.git
cd ivytag-theme
```
2. Validate theme integrity:
```bash
npm test
```
3. Press `F5` in VS Code to launch an Extension Development Host window.
4. Package the VSIX:
```bash
npm run package
```

## Contributing

Contributions and feedback are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

[MIT License](LICENSE.txt) - Copyright © 2023-2026 [Michael Kraft](https://github.com/mikaelkraft)

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for full version history.

---

**Enjoy coding with Ivytag Theme!** 🌲✨
