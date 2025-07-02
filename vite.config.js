import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/resumecv/', // Use '/' for custom domain or '/repo-name/' for GitHub Pages subdirectory
  server: {
    port: 3000,
    host: true
  }
}) 