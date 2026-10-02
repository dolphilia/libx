import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { parseFragment } from 'parse5';
import { mapReference } from './import-uthash-2.4.0.mjs';
import { remarkSourceHeadingIds } from '../plugins/remark-uthash-source-heading-ids.js';
import { remarkCallouts } from '../plugins/remark-callouts.js';
import { rehypeTaskListA11y } from '../plugins/rehype-task-list-a11y.js';
import { rehypeDocumentEnhancements } from '../plugins/rehype-document-enhancements.js';
import { hashFile } from './safe-import-output.js';
const repository = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const require = createRequire(path.join(repository, 'templates/docs-site/package.json'));
const astroRequire = createRequire(require.resolve('astro'));
const { createMarkdownProcessor } = await import(astroRequire.resolve('@astrojs/markdown-remark'));
const processor = await createMarkdownProcessor({
  smartypants: false,
  remarkPlugins: [remarkCallouts, remarkSourceHeadingIds],
  rehypePlugins: [rehypeTaskListA11y, rehypeDocumentEnhancements],
});
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value;
const walk = (n, f) => {
  f(n);
  for (const c of n.childNodes ?? []) walk(c, f);
};
const text = (n) => (n.nodeName === '#text' ? n.value : (n.childNodes ?? []).map(text).join(''));
const norm = (s) => s.replace(/\s+/g, ' ').trim();
function metrics(n) {
  const m = { prose: '', codes: [], anchors: [], links: [], images: [], tables: [], headings: [] };
  walk(n, (x) => {
    for (let p = x; p; p = p.parentNode)
      if (p.tagName === 'script' || attr(p, 'class')?.split(' ').includes('docs-code-toolbar'))
        return;
    if (x.nodeName === '#text') {
      let code = false;
      for (let p = x.parentNode; p; p = p.parentNode) if (p.tagName === 'pre') code = true;
      if (!code) m.prose += ' ' + x.value;
    }
    if (x.tagName === 'pre') m.codes.push(text(x));
    if (attr(x, 'id')) m.anchors.push(attr(x, 'id'));
    if (x.tagName === 'a' && attr(x, 'href')) m.links.push(attr(x, 'href'));
    if (x.tagName === 'img') m.images.push({ src: attr(x, 'src'), alt: attr(x, 'alt') ?? '' });
    if (x.tagName === 'table') {
      const cells = [];
      walk(x, (z) => {
        if (['td', 'th'].includes(z.tagName))
          cells.push({
            tag: z.tagName,
            text: norm(text(z)),
            colspan: attr(z, 'colspan') ?? '1',
            rowspan: attr(z, 'rowspan') ?? '1',
          });
      });
      m.tables.push(cells);
    }
    if (/^h[1-6]$/.test(x.tagName ?? '')) m.headings.push(norm(text(x)));
  });
  m.prose = norm(m.prose);
  return m;
}
export async function checkCanonical() {
  const base = path.join(repository, 'docs/notes/document-import/uthash/v2-4-0');
  const map = JSON.parse(fs.readFileSync(path.join(base, 'CONTENT_MAP.json'), 'utf8'));
  const pages = [];
  for (const p of map.pages) {
    const file = path.join(base, 'generated/canonical', p.id),
      md = fs.readFileSync(file, 'utf8');
    assert.ok(md.startsWith('---\n'));
    const end = md.indexOf('\n---\n', 4);
    assert.ok(end > 4);
    const metadata = Object.fromEntries(
      md
        .slice(4, end)
        .split('\n')
        .map((l) => {
          const i = l.indexOf(': ');
          return [l.slice(0, i), JSON.parse(l.slice(i + 2))];
        })
    );
    assert.equal(metadata.title, p.title);
    assert.deepEqual(metadata.upstreamAuthors, p.authors);
    assert.equal(metadata.sourceURL, p.sourceURL);
    assert.equal(metadata.licenseSource, p.licenseSource);
    assert.equal(metadata.upstreamVersionHeader, p.sourceVersionHeader ?? null);
    const body = md.slice(end + 5).trimStart(),
      rendered = await processor.render(body),
      dom = parseFragment(rendered.code);
    if (p.id.startsWith('02-license')) {
      const m = metrics(dom),
        notice = fs.readFileSync(path.join(repository, p.source.path), 'utf8');
      assert.deepEqual(m.codes, [notice]);
      pages.push({
        id: p.id,
        status: 'passed',
        sha256: hashFile(file),
        originalNoticeLiteral: true,
        metadataPreserved: true,
      });
      continue;
    }
    const original = parseFragment(
      fs.readFileSync(
        path.join(base, 'generated/source-fragments', p.id.replace(/\.md$/, '.html')),
        'utf8'
      )
    );
    const expected = metrics(original),
      actual = metrics(dom);
    expected.links = expected.links.map((h) => mapReference(h, map));
    expected.images = expected.images.map((i) => ({ ...i, src: mapReference(i.src, map) }));
    const checks = {};
    for (const k of ['prose', 'codes', 'links', 'images', 'tables', 'headings'])
      checks[k] = JSON.stringify(expected[k]) === JSON.stringify(actual[k]);
    checks.sourceIds =
      JSON.stringify(expected.anchors) ===
      JSON.stringify(actual.anchors.filter((a) => expected.anchors.includes(a)));
    checks.uniqueIds = new Set(actual.anchors).size === actual.anchors.length;
    const headings = [];
    walk(original, (n) => {
      if (/^h[1-6]$/.test(n.tagName ?? ''))
        headings.push({ slug: attr(n, 'id'), text: norm(text(n)) });
    });
    checks.nativeToc =
      JSON.stringify(headings) ===
      JSON.stringify(rendered.metadata.headings.map((h) => ({ slug: h.slug, text: norm(h.text) })));
    pages.push({
      id: p.id,
      status: Object.values(checks).every(Boolean) ? 'passed' : 'failed',
      sha256: hashFile(file),
      checks,
      counts: {
        codeBlocks: expected.codes.length,
        tables: expected.tables.length,
        sourceIds: expected.anchors.length,
        headings: expected.headings.length,
        links: expected.links.length,
        images: expected.images.length,
      },
      metadataPreserved: true,
    });
  }
  return {
    schemaVersion: 1,
    checkedAt: new Date().toISOString(),
    status: pages.every((p) => p.status === 'passed') ? 'passed' : 'failed',
    scope:
      'All7 AsciiDoc #content fragments vs rendered canonical; original notice exact. Prose whitespace normalized; code exact; table cell kind/span/text, source IDs/native TOC, mapped href/src and metadata checked.',
    renderer:
      'Astro markdown-remark6.3.1 + current isolated repository plugins, source-ID remark, smartypantsfalse',
    limitations: [
      'Mechanical preservation only; full semantic content review, full Astro app build/search, JA translation and publication remain pending.',
    ],
    pages,
  };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  assert.ok(args.length === 1 && args[0].startsWith('--report='), '--report=absolutePath required');
  const result = await checkCanonical();
  fs.writeFileSync(args[0].slice(9), JSON.stringify(result, null, 2) + '\n', { flag: 'wx' });
  console.log(
    JSON.stringify({
      status: result.status,
      pages: result.pages.map((p) => ({ id: p.id, status: p.status, checks: p.checks })),
    })
  );
  if (result.status !== 'passed') process.exitCode = 1;
}
