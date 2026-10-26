# Changelog

All notable changes to the "Ivytag Theme" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.7.0] - 2026-10-26

### Added
- Comprehensive UI state color coverage across 300+ workbench tokens
- Full modern VS Code UI token support:
  - Command Center (search bar) styling with custom focus and borders
  - Editor Sticky Scroll states and hover treatments
  - Inlay Hints for parameters, types, and values with dedicated muted tones
  - Keybinding label styling and border accents
- Expanded semantic highlighting token coverage for TypeScript, Python, Rust, Go, C++, and Java (parameter, property, readonly variables, classes, types, interfaces, methods, macros)
- Interactive state indicators: list focus outlines, active selection icons, and matching search query highlights
- Automated theme validation suite (`scripts/validate.js`) with `npm test` and `npm run validate`
- `npm run package` script leveraging `@vscode/vsce`

### Changed
- **State Colors & Contrast**:
  - Re-engineered focus, selection, and hover states with cohesive ivy emerald (`#38ef7d`, `#00b894`) and deep spruce (`#0d3a35`)
  - Transformed editor line numbers from harsh neon lime (`#bbff00`) to calm moss green (`#3a614d`), with active line number highlighted in vibrant emerald (`#38ef7d`)
  - Harmonized non-matching purple/magenta elements (`editorGroup.border`, `sideBarTitle.foreground`, `editorIndentGuide.background`, `editorLineNumber.activeForeground`) into unified ivy and teal tones
  - Overhauled diagnostic states: crisp error coral (`#f87171`), warning amber (`#fbbf24`), info sky-blue (`#38bdf8`), and mint hints (`#34d399`)
  - Refined status bar from default blue into deep ivy spruce (`#031e17`) with distinct debugging and remote states
  - Enhanced Diff Editor with clean, distraction-free green/red insertions and deletions
- **Performance & Package Optimization**:
  - Re-encoded extension icon to 256x256 high-DPI PNG and compressed with OptiPNG, reducing icon size by ~88% (from 354 KB down to 41 KB) and eliminating Marketplace packaging warnings
  - Optimized `.vscodeignore` to strip development scripts, original image assets, and lockfiles from published VSIX archives
  - Synchronized `package.json` and `package-lock.json` with updated metadata, modern engine targets, and clean devDependencies

## [0.6.0] - 2025-10-25

### Changed
- Badge color background color scheme from Auburn to light army green
- Latest improvements 

## [0.5.0] - 2025-9-25

### Updated
- bumped version for logo update
- marketplace last version

## [0.3.0] - 2025-10-24

### Added
- Keywords for better marketplace discoverability
- Author, bugs, and homepage fields in package.json
- Comprehensive README with badges, features section, and better documentation
- CONTRIBUTING.md with development guidelines
- .editorconfig for consistent code formatting
- MIT License field in package.json

### Changed
- Updated VS Code engine requirement from ^1.74.0 to ^1.85.0
- Improved README structure with installation methods, customization guide, and features
- Updated LICENSE copyright year to 2023-2025
- Version bumped to 0.3.0

### Fixed
- Removed invalid `node` dependency from package.json
- Fixed README.md encoding corruption at end of file
- Improved .vscodeignore to optimize package size

## [0.2.0] - 2023

### Changed
- Enhanced theme with refined color palette
- Improved semantic highlighting support
- Updated UI theme colors for better contrast

## [0.1.0] - 2023

### Changed
- Images now display accurately in the README file

## [0.0.1] - 2023

### Added
- Initial release of Ivytag Theme
- Dark theme with green and blue accents
- Comprehensive syntax highlighting for multiple languages
- Semantic token color support
- Complete UI theming

[0.7.0]: https://github.com/mikaelkraft/ivytag-theme/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/mikaelkraft/ivytag-theme/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/mikaelkraft/ivytag-theme/compare/v0.3.0...v0.5.0
[0.3.0]: https://github.com/mikaelkraft/ivytag-theme/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/mikaelkraft/ivytag-theme/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/mikaelkraft/ivytag-theme/compare/v0.0.1...v0.1.0
[0.0.1]: https://github.com/mikaelkraft/ivytag-theme/releases/tag/v0.0.1
