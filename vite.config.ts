import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@config': path.resolve(__dirname, 'src/config'),
    },
  },
});
