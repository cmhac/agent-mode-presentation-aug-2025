# Marp Installation & Setup Guide

## What We've Set Up

Your Marp presentation environment is now fully configured with:

### ✅ **Core Installation**

- **Marp CLI** installed as a development dependency
- **Custom theme** `agentic-coding` optimized for tech presentations
- **VS Code integration** for live preview and editing
- **Build scripts** for multiple output formats

### ✅ **Project Structure**

```
├── slides.md                 # 📝 Main presentation file
├── themes/
│   └── agentic-coding.css    # 🎨 Custom dark theme
├── dist/                     # 📦 Built output files
├── img/                      # 🖼️ Images and assets
├── .vscode/settings.json     # ⚙️ VS Code configuration
└── package.json              # 📋 Scripts and dependencies
```

### ✅ **Available Commands**

```bash
npm run dev        # 🔍 Live preview with auto-reload
npm run build:html # 🌐 Build HTML presentation
npm run build      # 📄 Build PDF presentation
npm run build:pptx # 📊 Build PowerPoint file
npm run build:all  # 🎯 Build all formats
npm run watch      # 👀 Auto-rebuild on changes
npm run server     # 🌐 Start local server
```

## 🚀 Quick Start

1. **Edit your presentation**: Open `slides.md` in VS Code
2. **Preview live**: Run `npm run dev`
3. **Build for sharing**: Run `npm run build:all`

## 📝 Editing Your Presentation

Your presentation is in `slides.md` and uses:

- **Custom theme**: Dark mode with syntax highlighting
- **Marp syntax**: Standard Markdown with Marp extensions
- **Live preview**: Changes update automatically
- **Rich features**: Math, code blocks, transitions, tables

### Key Marp Syntax

```markdown
---
marp: true
theme: agentic-coding
---

# Slide Title

Content goes here

---

# Next Slide

More content
```

### Custom Classes Available

- `<!-- _class: lead -->` - Centered title slides
- `<!-- _class: invert -->` - Light background variant
- `<!-- _class: warning -->` - Warning/caution styling
- `<!-- _class: success -->` - Success/positive styling

## 🎨 Theme Features

The **agentic-coding** theme includes:

- **Dark background** perfect for code presentations
- **Syntax highlighting** for code blocks
- **Tech color scheme** (blues, greens, oranges)
- **Readable typography** optimized for presentations
- **Responsive design** scales well on different screens

## 📤 Output Formats

Your presentation can be exported to:

- **HTML**: Interactive web presentation with navigation
- **PDF**: Print-ready slides for sharing
- **PPTX**: Editable PowerPoint format
- **PNG/JPEG**: Individual slide images

## 🔧 VS Code Integration

With the Marp extension installed, you can:

- **Live preview** in VS Code (Cmd+Shift+V)
- **Syntax highlighting** for Marp features
- **Theme recognition** (configured in `.vscode/settings.json`)
- **Auto-completion** for Marp directives

## 🎯 Next Steps

1. **Customize content**: Edit `slides.md` with your content
2. **Add images**: Place in `img/` folder and reference them
3. **Adjust theme**: Modify `themes/agentic-coding.css` if needed
4. **Test builds**: Run `npm run build:all` before presenting
5. **Practice**: Use `npm run dev` for rehearsals

## 💡 Tips for Great Presentations

- **Keep slides simple** - one concept per slide
- **Use code blocks** - great syntax highlighting
- **Add images** - visual examples work well
- **Test exports** - ensure PDF/HTML work correctly
- **Practice navigation** - learn the keyboard shortcuts

## 🆘 Troubleshooting

### Preview not working?

```bash
# Make sure dependencies are installed
npm install

# Try running preview again
npm run dev
```

### Build failing?

```bash
# Check if you have a compatible browser
npm run build:html

# For PDF, ensure Chrome/Edge is installed
npm run build
```

### Theme not loading?

- Check that `themes/agentic-coding.css` exists
- Restart VS Code if using the extension
- Verify `.vscode/settings.json` is correct

## 📚 Learn More

- [Marp Documentation](https://marp.app/)
- [Markdown Guide](https://www.markdownguide.org/)
- [VS Code Marp Extension](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)

---

**Your Marp environment is ready!** 🎉

Start editing `slides.md` and run `npm run dev` to see your presentation come to life.
