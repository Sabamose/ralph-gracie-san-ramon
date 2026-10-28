// Renders src/pages/*.mjs into static HTML in public/, copies static/, writes sitemap + robots.
import { readdirSync, mkdirSync, writeFileSync, rmSync, cpSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { page } from './src/layout.mjs';
import { site } from './src/site.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'public');

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(root, 'static'), out, { recursive: true });

const pagesDir = join(root, 'src/pages');
const pages = [];
for (const file of readdirSync(pagesDir).filter((f) => f.endsWith('.mjs'))) {
  const mod = (await import(pathToFileURL(join(pagesDir, file)))).default;
  const target = mod.file || (mod.path === '/' ? 'index.html' : `${mod.path.slice(1)}.html`);
  writeFileSync(join(out, target), page(mod));
  if (!mod.file) pages.push(mod.path);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .sort()
  .map((p) => `  <url><loc>${site.url}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`,
);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(`Built ${pages.length} pages + 404 into public/`);
