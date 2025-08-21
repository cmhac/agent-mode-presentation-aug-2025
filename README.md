# Agentic Coding Tools Presentation

A presentation about AI-powered coding agents and Agent Mode, built with [Marp](https://marp.app/).

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
npm run build:pdf

# Build HTML (for web viewing)
npm run build:html

# Build PowerPoint
npm run build:pptx

# Build HTML with assets for GitHub Pages
npm run build:pages

# Build all formats
npm run build:all-formats
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
theme: uncover
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

- **PDF**: Best for sharing and printing (`npm run build:pdf`)
- **HTML**: Interactive web presentation (`npm run build:html`)
- **PPTX**: Editable PowerPoint format (`npm run build:pptx`)
- **PNG/JPEG**: Individual slide images

## 🚀 GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. Push changes to the main branch to trigger deployment
5. The workflow will automatically build and deploy your presentation

The presentation will be available at: `https://[username].github.io/[repository-name]/`
