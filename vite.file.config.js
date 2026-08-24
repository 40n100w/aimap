import { defineConfig } from 'vite';

// An IIFE bundle avoids the file:// module restrictions imposed by browsers.
// This makes index.html genuinely standalone while still allowing static hosting.
export default defineConfig({
  publicDir: false,
  build: {
    outDir: 'public/standalone',
    emptyOutDir: true,
    target: 'es2020',
    cssCodeSplit: false,
    lib: {
      entry: 'src/main.js',
      name: 'AIEcosystemAtlas',
      formats: ['iife'],
      fileName: () => 'ai-atlas.js'
    },
    rollupOptions: {
      output: { assetFileNames: 'ai-atlas.css' }
    }
  }
});
