import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { parseFragment } from 'parse5';
import { remarkSourceHeadingIds } from '../plugins/remark-uthash-source-heading-ids.js';
import { remarkCallouts } from '../plugins/remark-callouts.js';
import { rehypeTaskListA11y } from '../plugins/rehype-task-list-a11y.js';
import { rehypeDocumentEnhancements } from '../plugins/rehype-document-enhancements.js';
import { hashFile } from './safe-import-output.js';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const require = createRequire(path.join(root, 'templates/docs-site/package.json'));
const astroRequire = createRequire(require.resolve('astro'));
const { createMarkdownProcessor } = await import(astroRequire.resolve('@astrojs/markdown-remark'));
const processor = await createMarkdownProcessor({
  smartypants: false,
  remarkPlugins: [remarkCallouts, remarkSourceHeadingIds],
  rehypePlugins: [rehypeTaskListA11y, rehypeDocumentEnhancements],
});
const base = 'docs/notes/document-import/uthash/v2-4-0',
  map = JSON.parse(fs.readFileSync(path.join(root, base, 'CONTENT_MAP.json'), 'utf8'));
const walk = (n, f) => {
  f(n);
  for (const c of n.childNodes ?? []) walk(c, f);
};
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value;
const pages = [];
for (const p of map.pages) {
  const file = path.join(root, base, 'generated/canonical', p.id),
    md = fs.readFileSync(file, 'utf8'),
    end = md.indexOf('\n---\n', 4);
  assert.ok(end > 4);
  const rendered = await processor.render(md.slice(end + 5)),
    dom = parseFragment(rendered.code),
    ids = [],
    links = [];
  walk(dom, (n) => {
    if (attr(n, 'id')) ids.push(attr(n, 'id'));
    for (const name of ['href', 'src'])
      if (attr(n, name)) links.push({ attribute: name, value: attr(n, name) });
  });
  assert.equal(new Set(ids).size, ids.length);
  pages.push({
    id: p.id,
    route: '/docs/uthash/v2-4-0/en/' + p.id.replace(/\.md$/, '') + '/',
    sha256: hashFile(file),
    ids,
    links,
  });
}
const references = [];
for (const p of pages)
  for (const link of p.links) {
    const url = new URL(link.value, 'https://libx.dev' + p.route);
    if (url.origin !== 'https://libx.dev') {
      references.push({ from: p.id, ...link, kind: 'external-preserved-not-network-tested' });
      continue;
    }
    if (url.pathname === map.assets[0].target) {
      assert.equal(
        hashFile(path.join(root, base, 'generated/assets/rss.png')),
        map.assets[0].sha256
      );
      references.push({ from: p.id, ...link, kind: 'fixed-asset', status: 'passed' });
      continue;
    }
    const target = pages.find((t) => t.route === url.pathname);
    assert.ok(target, `unknown canonical target: ${p.id} ${link.value}`);
    if (url.hash)
      assert.ok(
        target.ids.includes(decodeURIComponent(url.hash.slice(1))),
        `missing canonical fragment: ${p.id} ${link.value}`
      );
    references.push({
      from: p.id,
      ...link,
      kind: url.hash ? 'rendered-fragment' : 'canonical-page',
      target: target.id,
      status: 'passed',
    });
  }
const result = {
  schemaVersion: 1,
  checkedAt: new Date().toISOString(),
  status: 'passed',
  scope:
    'All8 formal canonical pages rendered with actual source-ID remark. Every local href/src resolves to canonical route/source ID or fixed RSS asset.',
  pages: pages.map(({ links, ...p }) => p),
  references,
  limitations: [
    'No formal app created or built; published routes/search/provenance display still pending.',
    'External source links retained; historical PDF404 documented separately, no claim of all external availability.',
  ],
};
const args = process.argv.slice(2);
assert.ok(args.length === 1 && args[0].startsWith('--report='));
fs.writeFileSync(args[0].slice(9), JSON.stringify(result, null, 2) + '\n', { flag: 'wx' });
console.log(
  JSON.stringify({
    status: result.status,
    pages: pages.length,
    references: references.length,
    internal: references.filter((r) => r.status === 'passed').length,
  })
);
