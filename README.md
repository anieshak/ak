# Aniesh Kumar — Portfolio

Professional single-page portfolio built with Vite, React + TypeScript and Tailwind CSS. It showcases a compact profile card, social/relevant links and a responsive layout suitable for desktop and mobile.

Live site: https://aniesh.com

## Highlights

- Minimal, accessible design
- Responsive layout (desktop uses fixed-centered layout; mobile allows scrolling)
- Built with modern frontend tooling: Vite, React, TypeScript and Tailwind CSS
- Assets and favicon are stored in `public/` and `src/assets/`

## Tech stack

- Vite
- React (TSX)
- TypeScript
- Tailwind CSS
- Plain CSS for site-level styles (`src/index.css`)

## Prerequisites

- Node.js (recommended >= 16.x)
- npm (or yarn/pnpm as you prefer)

## Local development

Open a terminal (PowerShell on Windows) in the project root and run:

```powershell
npm install
npm run dev
```

The dev server (Vite) will start and usually be available at `http://localhost:5173`.

## Build & Preview

To build a production bundle:

```powershell
npm run build
```

Preview the production build locally:

```powershell
npm run preview
```

## Project structure

Key files and folders:

- `index.html` — app entry and head meta (favicon, fonts)
- `src/main.tsx` — React entry
- `src/index.css` — global styles (Tailwind + site overrides)
- `src/App.tsx` — main app layout
- `src/components/` — small reusable components (ProfileCard, Background, SocialLinks, RelevantLinks)
- `src/assets/` — images used by the site
- `public/` — static files served as-is (e.g. `Aniesh-logo.png`, Bg Video)

## Contributing

This is a personal portfolio. If you'd like to suggest improvements, open an issue or send a PR with small, focused changes (styling fixes, accessibility improvements, minor content updates).

## Contact

Owner: Aniesh Kumar
