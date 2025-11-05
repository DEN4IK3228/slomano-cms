import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // build: { outDir: 'dist' } // можно явно указать, но по умолчанию и так dist
})
