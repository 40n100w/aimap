import {build} from 'esbuild';
import {readFile,writeFile} from 'node:fs/promises';
const here=new URL('./',import.meta.url);
const bundle=await build({entryPoints:[new URL('app.js',here).pathname],bundle:true,format:'iife',minify:true,write:false,target:'es2022'});
let css=await readFile(new URL('styles.css',here),'utf8');
for(const [token,file] of Object.entries({FONT_MANROPE_SEMIBOLD:'manrope-latin-600-normal.woff2',FONT_MANROPE:'manrope-latin-400-normal.woff2',FONT_MONO:'dm-mono-latin-400-normal.woff2'})){
  const font=await readFile(new URL(`../../src/assets/fonts/${file}`,here));
  css=css.replaceAll(token,`data:font/woff2;base64,${font.toString('base64')}`);
}
const template=await readFile(new URL('index.html',here),'utf8');
await writeFile(new URL('concept.html',here),template.replace('<!-- CONCEPT_STYLES -->',`<style>${css}</style>`).replace('<!-- CONCEPT_SCRIPT -->',()=>`<script>${bundle.outputFiles[0].text.replaceAll('</script','<\/script')}</script>`));
console.log('Built standalone design concept: design/update-review/concept.html');
