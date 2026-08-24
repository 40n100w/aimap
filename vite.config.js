import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

// Preserve the same standalone asset paths in the GitHub Pages artifact that
// index.html uses when it is opened directly from disk.
function includeStandaloneAssets() {
  return {
    name: 'include-standalone-assets',
    generateBundle() {
      for (const name of ['ai-atlas.js', 'ai-atlas.css']) {
        this.emitFile({
          type: 'asset',
          fileName: `public/standalone/${name}`,
          source: readFileSync(new URL(`./public/standalone/${name}`, import.meta.url))
        });
      }
    }
  };
}

export default defineConfig({
  base: './',
  publicDir: false,
  plugins: [includeStandaloneAssets()],
  server: { host: '127.0.0.1', port: 5173 },
  build: { target: 'es2020', sourcemap: true }
});
