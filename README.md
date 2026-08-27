# Portfolio — Jakub Lazový

Static React/Vite site for the AI automation & monitoring consulting practice.
Slice A1 of the lead-gen system (portfolio + booking).

## Local dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Edit content

All copy lives in `src/data/content.ts` — offer, services, case study, Calendly URL.
No need to touch components to change wording.

## Deploy to GitHub Pages

Two options depending on the repo:

**User site** — repo named `ZenNinja-Dev.github.io`
Served at `https://zenninja-dev.github.io`. Leave `BASE_PATH` unset.

**Project site** — any other repo name, e.g. `portfolio`
Served at `https://zenninja-dev.github.io/portfolio/`.
In repo Settings → Secrets and variables → Actions → Variables, add:
`BASE_PATH = /portfolio/`

Then: Settings → Pages → Source = **GitHub Actions**.
Push to `main` and the workflow in `.github/workflows/deploy.yml` builds and deploys.

## Next (Slice A2)

Add real portfolio projects as they mature: Incident Copilot (public repo),
Monitoring Hub. Slot links/cards into the Work section.
