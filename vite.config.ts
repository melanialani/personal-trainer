import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Served from https://melanialani.github.io/personal-trainer/
  base: '/personal-trainer/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts'],
        },
      },
    },
  },
  server: {
    // Fixed port per global dev-server port convention.
    host: 'localhost',
    port: 4007,
    strictPort: true,
  },
});
