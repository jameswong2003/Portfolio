# Repository guide

This is an unejected Create React App portfolio built with React Router. Keep the implementation small and maintain the existing page structure.

## Commands

- `npm start` — start the development server.
- `npm test -- --watchAll=false` — run the CRA/Jest test runner once.
- `npm run build` — create the production build in `build/`.
- `npm run eject` — irreversible CRA eject; do not run unless explicitly requested.

## App structure

- `src/App.js` sets up `BrowserRouter` and renders `src/Pages/PortfolioSite.js`.
- `PortfolioSite.js` contains the shared header/footer, routes, page content, and live GitHub activity panel.
- `src/Pages/components/timelineElements.js` holds the experience entries used on the About page.
- `src/Pages/PortfolioSite.css` contains site styles; `src/index.css` contains only the global reset.
- Images and the resume PDF used by the current site live in `src/assets/`.

The GitHub panel requests recent public events from `api.github.com` and contribution data from `github-contributions-api.jogruber.de`. It enriches recent commits with GitHub commit details and caches results in session storage. Both services are public and can apply rate limits.

## Deployment

Firebase Hosting serves the production `build/` directory. Hosting configuration and CI workflows are in `firebase.json` and `.github/workflows/`.
