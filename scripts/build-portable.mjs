import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const [html, javascript, css] = await Promise.all([
  readFile(new URL('index.html', root), 'utf8'),
  readFile(new URL('public/standalone/ai-atlas.js', root), 'utf8'),
  readFile(new URL('public/standalone/ai-atlas.css', root), 'utf8')
]);

const portableHtml = html
  .replace(
    '<link rel="stylesheet" href="./public/standalone/ai-atlas.css">',
    () => `<style>${css.replaceAll('</style', '<\\/style')}</style>`
  )
  .replace(
    '<script defer src="./public/standalone/ai-atlas.js"></script>',
    () => `<script>${javascript.replaceAll('</script', '<\\/script')}</script>`
  );

const outputDirectory = new URL('dist/', root);
await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await writeFile(new URL('index.html', outputDirectory), portableHtml);
