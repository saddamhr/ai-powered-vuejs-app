# AI-Powered Vue.js App

An elegant, modern Vue 3 application that provides smart, AI-powered search suggestions using Ollama and Llama 3.2. The app features a beautiful, responsive UI and a seamless user experience, making it easy to integrate AI-driven search into any project.

## Features

- 🔍 **Smart Search**: Get intelligent, context-aware suggestions as you type.
- ⚡ **Debounced Input**: Suggestions only appear after you pause typing, for a smooth experience.
- 🎨 **Modern UI**: Clean, responsive, and accessible design with smooth animations.
- 🦙 **Ollama + Llama 3.2**: Powered by open-source LLMs for privacy and flexibility.
- 🛠️ **Easy Customization**: Built with Vue 3 + Vite for fast development and easy theming.

## Demo

![Screenshot of AI-powered search UI](./public/screenshot.png)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)
- [Ollama](https://ollama.com/) running locally with the Llama 3.2 model

### Installation

```sh
pnpm install
# or
npm install
```

### Development

```sh
pnpm dev
# or
npm run dev
```

### Production Build

```sh
pnpm build
# or
npm run build
```

## Usage

1. Start your Ollama server and ensure the Llama 3.2 model is available.
2. Run the app locally (`pnpm dev`).
3. Type in the search bar to get smart suggestions powered by AI.

## Project Structure

- `src/components/SmartSearch.vue` — Main smart search UI component
- `src/composables/useAISearch.js` — Composable for AI-powered suggestions
- `src/config/ai.js` — Model and AI config
- `src/assets/` — Global and component styles

## Customization

- Edit `src/components/SmartSearch.vue` for UI tweaks.
- Adjust debounce timing or prompt in `useAISearch.js`.
- Change model in `src/config/ai.js` as needed.

## Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

## License

MIT License. See [LICENSE](./LICENSE) for details.
