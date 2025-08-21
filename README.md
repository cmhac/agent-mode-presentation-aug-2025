# Agentic Coding Tools Presentation

A comprehensive presentation about AI-powered coding agents and Agent Mode, built with [Marp](https://marp.app/).

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+)
- A modern browser (Chrome, Edge, Firefox)

### Setup

```bash
# Install dependencies
npm install

# Start development server with live preview
npm run dev

# Watch for changes (auto-rebuild)
npm run watch

# Start local server
npm run server
```

### Building Output

```bash
# Build PDF
npm run build

# Build HTML
npm run build:html

# Build PowerPoint
npm run build:pptx
```

## 📁 Project Structure

```
├── slides.md              # Main presentation file
├── themes/
│   └── agentic-coding.css # Custom Marp theme
├── img/                   # Images and assets
├── dist/                  # Built output files
├── marp.config.mjs        # Marp configuration
└── package.json           # Project configuration
```

## 🎨 Theme Features

The custom **agentic-coding** theme includes:

- Dark mode optimized for code presentations
- Syntax highlighting for code blocks
- Custom color scheme for AI/tech topics
- Responsive typography
- Transition animations

## 🔧 Configuration

### Marp CLI Configuration

See `marp.config.mjs` for:

- Output settings
- PDF/HTML options
- Theme configuration
- Browser settings

### VS Code Integration

The `.vscode/settings.json` configures:

- Marp theme recognition
- HTML support
- Math typesetting with KaTeX

## 📝 Editing the Presentation

### Basic Marp Syntax

```markdown
---
marp: true
theme: agentic-coding
---

# Slide Title

Content goes here

---

# Next Slide
```

### Custom Classes

- `<!-- _class: lead -->` - Centered title slides
- `<!-- _class: invert -->` - Light background
- `<!-- _class: warning -->` - Warning/caution styling
- `<!-- _class: success -->` - Success/positive styling

### Features Used

- **Transitions**: Smooth fade between slides
- **Math**: KaTeX support for formulas
- **Code highlighting**: Automatic syntax highlighting
- **Tables**: Comparison tables
- **Images**: Auto-scaling with captions
- **Pagination**: Page numbers

## 🖼️ Adding Images

Place images in the `img/` directory and reference them:

```markdown
![Description](img/your-image.png)
![Sized image w:800](img/your-image.png)
```

## 📤 Export Options

The presentation can be exported to multiple formats:

- **PDF**: Best for sharing and printing
- **HTML**: Interactive web presentation
- **PPTX**: Editable PowerPoint format
- **PNG/JPEG**: Individual slide images

## 🎯 Presentation Tips

1. **Use the preview**: `npm run dev` for live editing
2. **Test exports**: Verify PDF/HTML output before presenting
3. **Check images**: Ensure all images load correctly
4. **Practice navigation**: Learn keyboard shortcuts for presentation mode

## 🎮 Presentation Controls

When presenting (HTML/preview mode):

- **Arrow keys**: Navigate slides
- **F/F11**: Toggle fullscreen
- **P**: Open presenter view (external window)
- **Esc**: Exit fullscreen

## 🔍 Troubleshooting

### PDF Export Issues

If PDF export fails:

```bash
# Check browser installation
npm run build -- --browser-path /path/to/browser

# Allow local files (if needed)
npm run build -- --allow-local-files
```

### Theme Not Loading

- Ensure `themes/agentic-coding.css` exists
- Check `.vscode/settings.json` configuration
- Restart VS Code if using the extension

### Image Issues

- Use relative paths from project root
- Supported formats: PNG, JPEG, SVG, GIF
- Keep file sizes reasonable for PDF export

## 📚 Resources

- [Marp Documentation](https://marp.app/)
- [Marp CLI Guide](https://github.com/marp-team/marp-cli)
- [Markdown Syntax](https://www.markdownguide.org/)
- [KaTeX Math](https://katex.org/)

## 🤝 Contributing

Feel free to:

- Improve the theme
- Add more content
- Fix typos or formatting
- Suggest better examples

## 📄 License

This presentation is open source. Feel free to adapt and reuse for your own presentations about AI coding tools.
