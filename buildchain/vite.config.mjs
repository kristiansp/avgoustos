import { defineConfig } from 'vite';

import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import viteCompression from 'vite-plugin-compression';

// Critical CSS
import critical from 'rollup-plugin-critical';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../web/dist/',
    rollupOptions: {
      input: {
        app: './src/js/app.js',
      }
    },
  },
  plugins: [
    critical({
      criticalUrl: 'https://augoustos.ddev.site/',
      criticalBase: '../web/dist/criticalcss/',
      criticalPages: [
        { uri: '', template: 'index' },
      ],
      criticalConfig: {}
    }),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    ViteRestart({
      reload: [
          '../templates/**/*',
      ],
    }),
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i
    }),
  ],
  server: {
    fs: {
      strict: false
    },
    host: '0.0.0.0',
    origin: 'http://localhost:3001',
    port: 3001,
    https: false,
    strictPort: true,
/*
    hmr: {
      host: 'ilkino-ddev.ddev.site',
      port: 3000,
      path: '/',
      protocol: 'wss'
    }
*/    
  }
}));
