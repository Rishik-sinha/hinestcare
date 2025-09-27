import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/HiNEST-Care/', // This line is crucial
  plugins: [react()],
})