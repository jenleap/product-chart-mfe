import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  root: 'src',
  server: {
    port: 3002
  },
  plugins: [
    // …
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
    }),
    federation({
        name: 'container',
        remotes: {
          'component-lib':'http://localhost:3001/assets/remoteEntry.js',
        },
        shared: ['react', 'react-dom', 'highcharts-react-official', 'highcharts'],
   }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
});