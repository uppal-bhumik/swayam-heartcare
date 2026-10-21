/**
 * Rewrites the built asset URLs from absolute (/assets/…) to relative.
 *
 * Only needed for hosts that do not serve the site at a domain root — the
 * claude.ai artifact deploy being the one in use. Netlify and Vercel both
 * serve at the root, where Astro's absolute paths are already correct, so
 * those use plain `npm run build` and must NOT run this.
 *
 * index.html sits at the root, so  /assets/x  ->  assets/x
 * the stylesheet sits inside assets/, so  /assets/x  ->  x
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const assets = join(dist, 'assets');

const htmlPath = join(dist, 'index.html');
let html = readFileSync(htmlPath, 'utf8');
const htmlRefs = (html.match(/\/assets\//g) || []).length;
html = html.split('/assets/').join('assets/').split('"/favicon.svg"').join('"favicon.svg"');
writeFileSync(htmlPath, html);

let cssRefs = 0;
for (const file of readdirSync(assets).filter((f) => f.endsWith('.css'))) {
  const path = join(assets, file);
  let css = readFileSync(path, 'utf8');
  cssRefs += (css.match(/\/assets\//g) || []).length;
  css = css.split('/assets/').join('');
  writeFileSync(path, css);
}

const leftover = (readFileSync(htmlPath, 'utf8').match(/"\/(assets|favicon)/g) || []).length;
if (leftover) {
  console.error(`relativise-assets: ${leftover} absolute reference(s) remain in index.html`);
  process.exit(1);
}

console.log(`relativise-assets: rewrote ${htmlRefs} html and ${cssRefs} css references`);
