# Contributing to Ivytag Theme

Thank you for your interest in contributing to Ivytag Theme! This document provides guidelines for contributing to this project.

## How to Contribute

### Reporting Issues

If you encounter any bugs or have suggestions for improvements:

1. Check if the issue already exists in the [issue tracker](https://github.com/mikaelkraft/ivytag-theme/issues)
2. If not, create a new issue with a clear title and description of the problem.
3. Include screenshots if applicable
4. Describe the steps to reproduce the issue

### Suggesting Color Changes

When suggesting color changes:

1. Provide screenshots showing the current state
2. Explain what you'd like to change and why
3. Include the scope/token name if suggesting syntax color changes
4. Consider accessibility and contrast ratios

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Test your changes thoroughly
5. Commit your changes with clear, descriptive commit messages
6. Push to your fork
7. Submit a pull request with a clear description of your changes

## Development Setup

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/) (for using vsce if publishing)

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/mikaelkraft/ivytag-theme.git
   cd ivytag-theme
   ```

2. Open the project in VS Code:
   ```bash
   code .
   ```

3. Press `F5` to open a new VS Code window with the theme loaded

4. Make changes to `themes/Ivytag-color-theme.json`

5. Changes are automatically applied to the Extension Development Host window

### Testing Your Changes

1. Test the theme with multiple file types:
   - JavaScript/TypeScript
   - Python
   - Java
   - HTML/CSS
   - Markdown
   - Any other languages you use

2. Check both syntax highlighting and UI colors

3. Use `Developer: Inspect Editor Tokens and Scopes` to verify token scopes

4. Test in different contexts:
   - Editor
   - Sidebar
   - Terminal
   - Diff view
   - Debug console

### Theme File Structure

The theme is defined in `themes/Ivytag-color-theme.json`:

- `colors`: UI colors (sidebar, editor, terminal, etc.)
- `tokenColors`: Syntax highlighting rules with scopes
- `semanticHighlighting`: Semantic token colors
- `semanticTokenColors`: Specific semantic token overrides

## Coding Guidelines

### Color Consistency

- Maintain the green and blue color scheme
- Ensure sufficient contrast (WCAG AA minimum)
- Use consistent color variables where possible

### Scope Naming

- Follow TextMate grammar conventions
- Be specific with scope selectors
- Test scopes with multiple languages

### Documentation

- Update README.md if adding significant features
- Update CHANGELOG.md following [Keep a Changelog](https://keepachangelog.com/) format
- Add comments for complex color decisions

## Publishing Process

For maintainers:

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Commit changes
4. Create a git tag: `git tag v0.x.x`
5. Push changes and tags: `git push && git push --tags`
6. Package the extension: `vsce package`
7. Publish: `vsce publish`

## Questions?

If you have questions, feel free to:

- Open an issue for discussion
- Check existing issues and pull requests
- Review the [VS Code Theme Documentation](https://code.visualstudio.com/api/extension-guides/color-theme)

## License

By contributing to Ivytag Theme, you agree that your contributions will be licensed under the MIT License.
