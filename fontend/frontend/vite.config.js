import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  base: '/bookingpage/',
  plugins: [tailwindcss(),react()],
  build: {
    outDir: '../../docs',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/app-v3.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
