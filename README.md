# Jakub Lazový — Portfolio

Personal site for my AI automation & monitoring consulting work.
Built with React + Vite + Tailwind CSS, deployed on GitHub Pages.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Content

All page copy lives in `src/data/content.ts` (English + Czech).

## Deploy

GitHub Actions builds and publishes to GitHub Pages on every push to `main`
(`.github/workflows/deploy.yml`).
