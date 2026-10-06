#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import { importFmt, repairDeclarationHTML, PAGE_MAP, NOTES, VERSION } from './import-fmt-12.2.0.mjs';
import { hashFile } from './safe-import-output.js';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const walk = n => [n, ...(n.childNodes ?? []).flatMap(walk)];
const a = (n, k) => n.attrs?.find(x => x.name === k)?.value;
const t = n => n.value ?? (n.childNodes ?? []).map(t).join('');
const normalized = n => {
  if (n.tagName === 'script') return '';
  if (a(n, 'class') === 'docs-code-toolbar') {
    const buttons = walk(n).filter(c => c.tagName === 'button');
    assert.equal(buttons.length, 1); assert.equal(a(buttons[0], 'class'), 'docs-code-copy');
    return '';
  }
  return (n.value ?? (n.childNodes ?? []).map(normalized).join('')) + (['td', 'th'].includes(n.tagName) ? ' ' : '');
};
const prose = n => normalized(n).replace(/\s+/g, ' ').trim();
const regen = importFmt({ check: true });
assert.ok(regen.every(x => x.matches), '定本/配信本文/アセットが再生成結果と一致しません');
const results = [];
if (process.argv.includes('--rendered')) {
  const maps = JSON.parse(fs.readFileSync(path.join(root, NOTES, 'REPAIR_MAP.json'))).mappings;
  const bodyPages = PAGE_MAP.filter(p => p.key !== 'license');
  const built = new Map();
  for (const page of bodyPages) {
    const file = path.join(root, 'apps/fmt/dist', VERSION, 'en', page.id.replace(/\.md$/, ''), 'index.html');
    const article = walk(parse(fs.readFileSync(file, 'utf8'))).find(n => n.tagName === 'article' && a(n, 'class')?.includes('sl-markdown-content'));
    assert.ok(article, file);
    const generated = article.childNodes.filter(n => ['navigation-container', 'document-provenance'].includes(a(n, 'class')));
    assert.equal(generated.length, 2, 'テンプレート生成要素を正確に限定してください');
    article.childNodes = article.childNodes.filter(n => !generated.includes(n));
    built.set(page.key, { article, file });
  }
  const relocate = (href, page) => {
    href = maps.find(m => m.page === page.key && m.kind === 'href' && m.from === href)?.to ?? href;
    if (href.startsWith('#')) return href;
    const u = new URL(href, 'https://fmt.local/' + (page.key === 'index' ? '' : page.key + '/'));
    if (u.hostname !== 'fmt.local') return href;
    const key = u.pathname === '/' ? 'index' : u.pathname.replace(/^\//, '').replace(/\/$/, '');
    const dest = PAGE_MAP.find(p => p.key === key); assert.ok(dest, href);
    return `/docs/fmt/${VERSION}/en/${dest.id.replace(/\.md$/, '')}/${u.hash}`;
  };
  for (const page of bodyPages) {
    const originalHTML = fs.readFileSync(path.join(root, NOTES, 'generated-source', page.key + '.html'), 'utf8');
    const approvedHTML = page.key === 'api' ? repairDeclarationHTML(originalHTML, path.join(root, NOTES)) : originalHTML;
    const source = walk(parse(approvedHTML)).find(n => n.tagName === 'article' && a(n, 'class')?.includes('md-content__inner'));
    assert.ok(source);
    const original = walk(source), actual = walk(built.get(page.key).article);
    if (page.key === 'api') {
      const declarations = actual.filter(n => n.tagName === 'code' && a(n, 'class') === 'language-cpp decl');
      assert.equal(declarations.length, 84);
      for (const declaration of declarations) assert.ok(walk(declaration).every(n => !n.tagName || ['code', 'div'].includes(n.tagName)), 'Unknown HTML element inside API declaration: ' + t(declaration));
    }
    assert.equal(prose(built.get(page.key).article), prose(source), page.key + ' full prose');
    for (const tag of ['pre', 'code', 'em', 'strong', 'b', 'i', 'ul', 'ol', 'li', 'table']) {
      const values = ns => ns.filter(n => n.tagName === tag).map(n => ['pre', 'code', 'em', 'strong', 'b', 'i'].includes(tag) ? t(n) : prose(n));
      assert.deepEqual(values(actual), values(original), page.key + ' ' + tag);
    }
    // Preserve table cell roles, not only concatenated prose: an empty header
    // followed by a body row with the labels must not pass as the original th.
    const tableRows = ns => ns.filter(n => n.tagName === 'table').map(table =>
      walk(table).filter(n => n.tagName === 'tr').map(row =>
        (row.childNodes ?? []).filter(n => ['th', 'td'].includes(n.tagName))
          .map(cell => ({ role: cell.tagName, text: prose(cell) }))));
    assert.deepEqual(tableRows(actual), tableRows(original), page.key + ' table cell roles');
    const getLinks = ns => ns.filter(n => n.tagName === 'a' && a(n, 'href')).map(n => ({ href: a(n, 'href'), text: t(n).replace(/\s+/g, ' ').trim() }));
    assert.deepEqual(getLinks(actual), getLinks(original).map(x => ({ ...x, href: relocate(x.href, page) })), page.key + ' links');
    const images = ns => ns.filter(n => n.tagName === 'img').map(n => ({ src: a(n, 'src'), alt: a(n, 'alt') }));
    assert.deepEqual(images(actual), images(original).map(x => ({ ...x, src: x.src === 'perf.svg' ? '/docs/fmt/assets/perf.svg' : x.src })), page.key + ' images');
    const queue = maps.filter(m => m.page === page.key && m.kind === 'id'), seen = new Set();
    const ids = original.filter(n => a(n, 'id')).map(n => {
      const id = a(n, 'id');
      if (id === 'operator' || seen.has(id)) { const i = queue.findIndex(m => m.from === id); assert.ok(i >= 0); const to = queue.splice(i, 1)[0].to; seen.add(to); return to; }
      seen.add(id); return id;
    });
    assert.equal(queue.length, 0);
    assert.deepEqual(actual.filter(n => a(n, 'id')).map(n => a(n, 'id')), ids, page.key + ' IDs');
    assert.equal(new Set(ids).size, ids.length);
    for (const link of getLinks(actual)) {
      const u = new URL(link.href, `https://libx.dev/docs/fmt/${VERSION}/en/${page.id.replace(/\.md$/, '')}/`);
      if (u.origin !== 'https://libx.dev') continue;
      const dest = bodyPages.find(p => u.pathname === `/docs/fmt/${VERSION}/en/${p.id.replace(/\.md$/, '')}/`);
      assert.ok(dest, link.href);
      if (u.hash) assert.ok(walk(built.get(dest.key).article).some(n => a(n, 'id') === decodeURIComponent(u.hash.slice(1))), link.href);
    }
    results.push({ page: page.key, sha256: hashFile(built.get(page.key).file), pre: actual.filter(n => n.tagName === 'pre').length, tables: actual.filter(n => n.tagName === 'table').length, ids: ids.length, originalTextCodeLinksAndImages: 'passed' });
  }
  assert.equal(results.reduce((s, p) => s + p.pre, 0), 174);
  assert.equal(results.reduce((s, p) => s + p.tables, 0), 10);
  assert.equal(results.reduce((s, p) => s + p.ids, 0), 138);
  const licenseFile = path.join(root, 'apps/fmt/dist', VERSION, 'en/02-license/01-license/index.html');
  const license = walk(parse(fs.readFileSync(licenseFile, 'utf8'))).find(n => n.tagName === 'pre'); assert.ok(license);
  // Astro fenced-code rendering removes exactly the final LF; the downloadable original is byte-exact.
  assert.equal(t(license) + '\n', fs.readFileSync(path.join(root, NOTES, 'source/LICENSE'), 'utf8'));
  assert.equal(hashFile(path.join(root, 'apps/fmt/dist/assets/fmt-LICENSE.txt')), hashFile(path.join(root, NOTES, 'source/LICENSE')));
  assert.equal(hashFile(path.join(root, 'apps/fmt/dist/assets/perf.svg')), hashFile(path.join(root, NOTES, 'source/doc/perf.svg')));
}
console.log(JSON.stringify({ status: 'passed', regeneration: 'all5pages+2assets', approvedDeclarationReturnTypeRepairs: 11, rendered: process.argv.includes('--rendered') ? results : 'not-requested', semanticContentReview: 'not-performed' }));
