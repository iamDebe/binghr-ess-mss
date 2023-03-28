import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

console.log('__dirname:', __dirname);

export default defineConfig({
  plugins: [svgr(), react()],
  build: {
    outDir: 'builds'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
