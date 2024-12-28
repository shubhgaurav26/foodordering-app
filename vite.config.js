import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // You can specify a custom port here
    proxy: {
      '/api': {
        target: 'https://www.swiggy.com', // The target API domain
        changeOrigin: true, // Ensures the host header matches the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove `/api` prefix when forwarding
      },
    },
  },
});
