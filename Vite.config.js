// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // outras configurações...
  build: {
    rollupOptions: {
      input: 'index.html',
    }
  }
});
