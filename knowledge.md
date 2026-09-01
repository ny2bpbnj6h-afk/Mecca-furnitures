# Project knowledge

## What this is
- **mecca-furnitures-frontend** — a React frontend (intended as a furniture store UI) built with Vite.
- Currently just the default Vite + React starter template: no router, no state library, no API layer, no tests yet.
- Plain JavaScript with JSX (`.jsx`), **not** TypeScript.

## Key locations
- `src/main.jsx` — entry point; mounts `App` into `#root` under `<StrictMode>`.
- `src/App.jsx` — the single app component (starter demo content to be replaced).
- `src/App.css` / `src/index.css` — global styles; App.css uses CSS nesting; theme via CSS custom properties in `index.css` (`--accent`, `--border`, etc.).
- `src/assets/` — static assets (logos, hero image).
- `index.html` — HTML shell; loads `/src/main.jsx`; references `/favicon.svg` and `/icons.svg` from `public/`.
- `eslint.config.js` — ESLint flat config (no `.eslintrc`).

## Commands (npm — package-lock.json present, so use npm)
- Install: `npm install`
- Dev server: `npm run dev` (Vite with HMR)
- Build: `npm run build`
- Preview production build: `npm run preview`
- Lint: `npm run lint` (ESLint with react-hooks + react-refresh plugins)
- **No test script and no typecheck configured.** Add one before relying on tests.

## Conventions & gotchas
- ESM everywhere (`"type": "module"` in package.json); use `import`/`export`, not CommonJS.
- Files use `.jsx` extension for components.
- `App.jsx` uses `export default App`; `main.jsx` imports it as `./App.jsx` (explicit extension required by Vite's ESM resolution).
- ESLint config follows the Vite React template: `react-refresh/only-export-components` is active, so components should be defined in their own files.
- Vite 8 + React 19; keep plugin versions aligned with the Vite template (`@vitejs/plugin-react`).
- `dist/` is gitignored; no other build output is committed.
-Do not visually verify in browser (dev server + browser-user), it is not necessary

## coding practice
-we are using jsk and module.css in this repo
-Each component should live in src/components folder and it should self contain its own jsx and css codes
-each of the pages should go into the src/pages folder
-No jsx file should have more than 50 lines of code, if such should happen, create a component out of it into another folder
-all components in src/components should be grouped by the page they appear on them by their name
-while naming files and folders, never start with a capital letter