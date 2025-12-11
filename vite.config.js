import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
  css: {
    devSourcemap: true
  }
});