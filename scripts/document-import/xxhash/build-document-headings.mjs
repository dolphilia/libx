import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const require = createRequire(root + '/package.json');
const { parse } = require('parse5');
const map = JSON.parse(
  fs.readFileSync(root + '/docs/notes/document-import/xxhash/v0-8-4/CONTENT_MAP.json')
);
const walk = (n) => [n, ...(n.childNodes ?? []).flatMap(walk)];
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value;
const text = (n) => n.value ?? (n.childNodes ?? []).map(text).join('');
const result = {};
for (const item of map.items.filter((i) => i.sourcePath.startsWith('doxygen/'))) {
  for (const [role, lang] of [
    ['canonical', 'en'],
    ['translation', 'ja'],
  ]) {
    const contents = walk(parse(fs.readFileSync(root + '/' + item[role], 'utf8'))).find((n) =>
      (attr(n, 'class') ?? '').split(/\s+/).includes('contents')
    );
    assert.ok(contents, item.slug + ' ' + lang);
    const nodes = walk(contents),
      ids = new Set(nodes.map((n) => attr(n, 'id')).filter(Boolean));
    const headings = nodes
      .filter((n) => /^h[1-6]$/.test(n.tagName ?? ''))
      .map((n) => {
        const slug =
          attr(n, 'id') ??
          walk(n)
            .map((x) => attr(x, 'id'))
            .find(Boolean) ??
          walk(n)
            .map((x) => attr(x, 'href'))
            .find((h) => h?.startsWith('#'))
            ?.slice(1);
        assert.ok(slug && ids.has(slug), item.slug + ' heading anchor');
        return {
          depth: Number(n.tagName.slice(1)),
          slug,
          text: text(n)
            .replace(/^\s*◆\s*/, '')
            .replace(/\s+/g, ' ')
            .trim(),
        };
      });
    assert.equal(new Set(headings.map((h) => h.slug)).size, headings.length);
    result['v0-8-4/' + lang + '/' + item.slug] = headings;
  }
  const identity = (hs) => hs.map(({ depth, slug }) => ({ depth, slug }));
  assert.deepEqual(
    identity(result['v0-8-4/en/' + item.slug]),
    identity(result['v0-8-4/ja/' + item.slug])
  );
}
for (const lang of ['en', 'ja'])
  assert.equal(
    Object.entries(result)
      .filter(([k]) => k.startsWith('v0-8-4/' + lang + '/'))
      .reduce((n, [, hs]) => n + hs.length, 0),
    250
  );
const output = JSON.stringify(result, null, 2) + '\n';
const target = root + '/apps/xxhash/src/data/document-headings.json';
if (process.argv.includes('--check'))
  assert.equal(fs.readFileSync(target, 'utf8'), output, 'Raw heading metadata differs');
else fs.writeFileSync(target, output);
console.log('Preserved raw-HTML headings: 250 English + 250 Japanese; IDs/depths matched.');
