import { defineConfig } from "@marp-team/marp-cli"

export default defineConfig({
  // Engine options
  options: {
    markdown: {
      breaks: false,
    },
    minifyCSS: false,
  },

  // HTML template
  template: "bespoke",

  // Enable HTML tags
  html: true,

  // Theme configuration
  themeSet: "./themes",

  // PDF configuration
  pdfNotes: true,
  pdfOutlines: {
    pages: true,
    headings: true,
  },

  // Browser settings
  browserTimeout: 30,

  // Image settings
  imageScale: 2,

  // Metadata
  title: "Agentic Coding Tools & Agent Mode",
  description: "A comprehensive presentation about AI-powered coding agents",
  author: "Your Name",
  keywords: ["AI", "Coding", "Agent Mode", "Copilot", "Development"],
})
