// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-app/', // ez kell a GitHub Pages URL-edhez
  plugins: [react()]
})
