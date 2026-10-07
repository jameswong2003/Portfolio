# James Wong Portfolio

A React portfolio with Home, About, Projects, and Resume pages. The home and projects pages show live public GitHub activity alongside selected work.

## Run locally

- `npm install` installs dependencies.
- `npm start` starts the development server at http://localhost:3000.
- `npm test -- --watchAll=false` runs the available tests once.
- `npm run build` creates the production build in `build/`.

## GitHub activity

Recent public commits are loaded from the GitHub Events API. The contribution calendar uses the public `github-contributions-api.jogruber.de` endpoint. Results are cached in session storage for 15 minutes; activity can be unavailable when either public API is rate limited or unreachable.
