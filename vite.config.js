import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/HiNEST-Care/', // Use your repository name here
  plugins: [react()],
})