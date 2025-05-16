import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // must match your repo name on GitHub Pages:
  base: '/vivacitycms/',
  plugins: [react()],
})
