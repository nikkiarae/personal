import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: "/personal/", 
  define: {
    VITE_MAPBOX_TOKEN: process.env.VITE_MAPBOX_TOKEN,
  },
  build: {
      outDir: 'dist',
      assetsDir: 'assets',
      emptyOutDir: true,
  },
  server: {
      host: true,
      port: 3000,
      watch: {
          usePolling: true
      }
  },
  esbuild: {
      loader: 'tsx',
      include: /src\/.*\.[tj]sx?$/,
      exclude: [],
  },
  optimizeDeps: {},
  plugins: [
    react(),
    tsconfigPaths()
  ],
})
