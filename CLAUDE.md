# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A personal portfolio site (Create React App, unejected) with a single hidden secondary page. Deployed to Firebase Hosting.

## Commands

- `npm start` — run dev server at http://localhost:3000 (hot reload)
- `npm run build` — production build into `build/` (this is what Firebase deploys)
- `npm test` — CRA/Jest test runner in interactive watch mode; `npm test -- --watchAll=false` for a single non-watch run; `npm test -- -t "test name"` to filter by test name
- `npm run eject` — irreversible CRA eject; do not run unless explicitly asked

There is no lint script; ESLint runs implicitly via `react-scripts` (config: `eslintConfig` in `package.json`, extends `react-app`).

## Architecture

- Routing lives in `src/App.js` (`react-router-dom`), with two routes: `/` → `Home`, `/josephine` → `Josephine` (an unlisted personal page unrelated to the portfolio content — don't treat it as needing consistency with the rest of the site).
- `src/Pages/Home.js` composes the entire landing page by stacking section components in order: `Navbar`, `Intro`, `Experience`, `Project`, `Contact` (all in `src/Pages/components/`). There's no shared layout wrapper — page order is defined purely by this stack.
- Content is data-driven inline within components rather than pulled from a CMS/API:
  - `src/Pages/components/Project.js` — projects are a hardcoded array (`projects`) at the top of the file; each entry defines `name`, `image` (or `gradient` fallback when no screenshot exists), `description`, `tech`, `link`. Add new projects by extending this array.
  - `src/Pages/components/timelineElements.js` — work experience timeline data (`timelineElements` array, feeds `react-vertical-timeline-component` in `Experience.js`), each entry has `title`, `company`, `date`, `bullets`, `icon`.
- Static assets (resume PDF, company logos, project screenshots, tech icons) live in `src/assets/`.
- No backend/API layer, no state management library, no CSS framework — plain CSS files (`App.css`, `index.css`) plus inline styles for dynamic backgrounds (e.g. project card gradients/images in `Project.js`).

## Deployment

- Firebase Hosting project: `portfolio-45b19` (see `.firebaserc`, `firebase.json`). Hosting root is `build/`, with a SPA rewrite (`**` → `/index.html`).
- GitHub Actions (`.github/workflows/`) auto-deploy: pushes to `main` deploy live (`firebase-hosting-merge.yml`); PRs get preview channel deploys (`firebase-hosting-pull-request.yml`). Both just run `npm ci && npm run build` then hand the `build/` output to `FirebaseExtended/action-hosting-deploy`. No manual `firebase deploy` step is needed for normal changes on `main`.
