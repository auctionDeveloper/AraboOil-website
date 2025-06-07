import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600, // Optional: show warning only after 600KB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor'
            if (id.includes('react-router-dom')) return 'router-vendor'
            if (id.includes('react-helmet')) return 'helmet-vendor'
            return 'vendor'
          }
        }
      }
    }
  }
})
