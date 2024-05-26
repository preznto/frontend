import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import styleX from 'vite-plugin-stylex';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import { dirname, resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [
    react(),
    styleX({
      aliases: {
        '@/*': [resolve(dirname(import.meta.url), 'src', '*')],
      },
    }),
    TanStackRouterVite(),
  ],
});
