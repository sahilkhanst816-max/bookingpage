import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
const isVercel = process.env.VERCEL === '1'

export default defineConfig({
  base: isVercel ? '/' : '/bookingpage/',
  plugins: [tailwindcss(),react()],
  build: {
    outDir: isVercel ? 'dist' : '../../docs',
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
