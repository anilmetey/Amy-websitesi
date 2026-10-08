import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Localde (dev) '/' kullanarak localhost:5173 beyaz ekranını engeller.
  // Canlı build alındığında GitHub Pages için '/Amy-websitesi/' kullanır.
  base: command === 'build' ? '/Amy-websitesi/' : '/',
}));
