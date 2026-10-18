import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';

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
await cp(new URL('data/', root), new URL('data/', outputDirectory), { recursive: true });

const licensesDirectory = new URL('licenses/', outputDirectory);
await mkdir(licensesDirectory, { recursive: true });
for (const name of ['Manrope', 'DM-Mono']) {
  await cp(new URL(`src/assets/fonts/${name}-LICENSE.txt`, root), new URL(`${name}-LICENSE.txt`, licensesDirectory));
}
await cp(new URL('src/assets/World-Atlas-LICENSE.txt', root), new URL('World-Atlas-LICENSE.txt', licensesDirectory));
await cp(new URL('src/assets/README.md', root), new URL('asset-notices.md', licensesDirectory));
