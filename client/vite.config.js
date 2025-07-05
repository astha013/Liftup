import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    global: 'window', // 👈 fixes Buffer + process issues
    'process.env': {}, // 👈 prevents 'process is not defined'
  },
  resolve: {
    alias: {
      process: 'process/browser',
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['@cometchat-pro/chat', 'buffer', 'process'],
  },
});
