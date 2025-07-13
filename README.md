# AI-Powered Vue.js App

A minimalist, modern Vue 3 application showcasing AI-powered search with a clean, professional interface. Built with Vue.js and Tailwind CSS, it provides a smooth, responsive search experience with intelligent suggestions.

## Features

- 🎯 **Minimal & Clean**: Distraction-free interface focused on search functionality
- 🔍 **Smart Search**: Real-time, AI-powered search suggestions
- ⚡ **Performance**: Optimized with debounced input and smooth transitions
- 🎨 **Modern Design**: Professional UI with light/dark mode support
- 🛠️ **Tech Stack**: Vue 3 + Vite + Tailwind CSS
- 📱 **Responsive**: Works seamlessly on all screen sizes

## Demo

![Screenshot of AI-powered search UI](./public/screenshot.png)

## Tutorial

Check out my [step-by-step tutorial on Medium]() where I explain how to build this project from scratch, including:

- Setting up Vue.js with Vite
- Implementing the search interface
- Adding animations and transitions
- Styling with Tailwind CSS
- Adding dark mode support

[//]: # 'TODO: Add your Medium blog link here'

## Getting Started

### Quick Start

1. **Prerequisites**

   ```bash
   # Required: Node.js v18+
   node -v
   ```

2. **Installation**

   ```bash
   # Using npm
   npm install

   # Using pnpm
   pnpm install
   ```

3. **Development**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Build**
   ```bash
   npm run build
   # or
   pnpm build
   ```

Visit `http://localhost:5173` to see the app in action.

## Project Structure

```
src/
├── components/
│   └── SmartSearch.vue     # Main search component
├── composables/
│   └── useAISearch.js      # Search logic and AI integration
├── config/
│   └── ai.js              # AI configuration
└── assets/
    └── base.css           # Global styles
```

## Key Features

1. **Clean Interface**
   - Minimalist design
   - Focus on content and functionality
   - Smooth transitions and animations

2. **Search Experience**
   - Real-time suggestions
   - Debounced input (400ms)
   - Keyboard navigation support

3. **Technical Details**
   - Vue 3 Composition API
   - Tailwind CSS for styling
   - Dark mode support
   - Responsive design

## Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest features
- Submit pull requests

## Author

[Md. Saddam Hossain](https://github.com/saddamhr)

## License

MIT License. See [LICENSE](./LICENSE) for details.
