import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  root: 'src',
  server: {
    port: 3001
  },
  plugins: [
    // …
    react({
      // Use React plugin in all *.jsx and *.tsx files
      include: '**/*.{jsx,tsx}',
    }),
    federation({
        name: 'component-lib',
        filename: 'remoteEntry.js',
        exposes: {
            "./BarChart": "./src/components/BarChart",
            "./Filter": "./src/components/Filter",
            "./TableContainer": "./src/components/TableContainer",
        },
        shared: ['react', 'react-dom', 'highcharts-react-official', 'highcharts'],
   }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
});