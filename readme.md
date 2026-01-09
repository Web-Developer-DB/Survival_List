# Survival List — Quick Guide

Lightweight overview of the project for contributors who want a short, English summary.

## What it is
- React + Vite app that keeps a 10-day emergency supply list, meal plan, and tips fully offline.
- Focus on mobile-first shopping with print and scroll shortcuts for quick access.

## Getting started
```bash
npm install
npm run dev      # start dev server (http://localhost:5173 by default)
npm run build    # production build
npm run preview  # preview the production build
```

## Offline / PWA
- For a realistic PWA run: `npm run build && npm run preview`, then open the preview URL once online to warm the cache.
- Install prompts are enabled where supported (button “App installieren” appears in the header); service worker caches pages/assets after first load for offline use.
- Fonts come from Google on first visit and stay cached afterward.

## Testing
```bash
npm run lint       # ESLint across src
npm run test       # Vitest in jsdom
npm run test:watch # Vitest watch mode
```

## Key structure
- `src/App.jsx`: page layout and section orchestration.
- `src/sections/`: content blocks for hero, supplies, recipes, plan, and tips.
- `src/components/`: reusable UI parts like header, footer, buttons, quick actions.
- `src/data/`: static data for checklist, inventory, recipes, meal plan, and info cards.
- `src/styles/global.css`: shared styling for light/dark themes, responsive, and print.

## Notable features
- Offline-friendly data: no external APIs or cookies; all content ships with the bundle (Google Fonts are fetched once if online).
- PWA-ready: manifest + service worker for install prompts; assets and pages cache after first load for offline use.
- Shopping helpers: print-ready view and quick-scroll controls.
- Theme toggle: light/dark switch persists via `localStorage`.
- Scalable plan: meal quantities adapt to people counts; recipes emphasize fuel and water saving.
