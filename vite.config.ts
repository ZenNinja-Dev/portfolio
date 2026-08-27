import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base path.
// - User/organization site (ZenNinja-Dev.github.io): keep '/'
// - Project site (ZenNinja-Dev.github.io/<repo>/): set BASE_PATH='/<repo>/'
//   e.g. BASE_PATH=/portfolio/ npm run build
const base = process.env.BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
})
