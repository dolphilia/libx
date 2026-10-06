// Machine evidence validation only. This does not perform or replace full content review.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { collectAnchors } from '../../check-markdown-links.js';
import { generate } from './import.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const require = createRequire(root + '/package.json');
const { parseFragment } = require('parse5');
const { unified } = require('unified'),
  remarkParse = require('remark-parse').default,
  remarkGfm = require('remark-gfm').default;
const matter = require('gray-matter');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const json = (p) => JSON.parse(read(p));
const sha = (p) =>
  createHash('sha256')
    .update(fs.readFileSync(path.join(root, p)))
    .digest('hex');
const note = 'docs/notes/document-import/xxhash/v0-8-4';
const app = 'apps/xxhash';
const map = json(note + '/CONTENT_MAP.json'),
  tm = json(note + '/TRANSLATION_REVIEW_MANIFEST.json'),
  binding = json(app + '/meta/reviewed-content.json');
const walk = (n) => [n, ...(n.childNodes ?? n.children ?? []).flatMap(walk)];
const attr = (n, k) => n.attrs?.find((x) => x.name === k)?.value;
const files = (d) =>
  fs
    .readdirSync(path.join(root, d), { withFileTypes: true })
    .flatMap((x) => (x.isDirectory() ? files(d + '/' + x.name) : [d + '/' + x.name]));
assert.equal(map.items.length, 56);
assert.equal(binding.completedPages, 56);
assert.equal(binding.unreviewedPages, 0);
assert.equal(tm.remaining.length, 0);
assert.deepEqual(
  binding.pages.map((x) => x.id).sort(),
  map.items.map((x) => x.slug + '.md').sort()
);
assert.equal(new Set(map.items.map((x) => x.slug)).size, 56);
// Regenerate entirely in memory and compare, including fixed public downloads and metadata.
generate({ check: true });
const headings = spawnSync(
  process.execPath,
  [root + '/scripts/document-import/xxhash/build-document-headings.mjs', '--check'],
  { encoding: 'utf8' }
);
assert.equal(headings.status, 0, headings.stderr);
const canonical = spawnSync(
  process.execPath,
  [root + '/scripts/document-import/xxhash/check-canonical.mjs'],
  { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 }
);
assert.equal(canonical.status, 0, canonical.stderr);
const config = JSON.parse(
  read(app + '/src/config/project.config.jsonc').replace(/^\s*\/\/.*$/gm, '')
);
const licenses = new Set(config.licensing.sources.map((x) => x.id));
const docs = new Map(),
  anchors = new Map();
let noticePages = 0,
  checkedLinks = 0;
for (const lang of ['en', 'ja']) {
  const dir = app + '/src/content/docs/v0-8-4/' + lang;
  assert.deepEqual(
    files(dir)
      .map((x) => x.slice(dir.length + 1))
      .sort(),
    map.items.map((x) => x.slug + '.md').sort(),
    'Page collection ' + lang
  );
  for (const item of map.items) {
    const p = dir + '/' + item.slug + '.md',
      record = tm.records.find((x) => x.slug === item.slug),
      reviewed = binding.pages.find((x) => x.id === item.slug + '.md');
    assert(
      record && reviewed && reviewed.status === 'passed' && reviewed.separateReviewPass,
      'Separate full review binding ' + p
    );
    const role = lang === 'en' ? 'canonical' : 'translation';
    assert.equal(sha(p), record[role].sha256, 'Translation manifest stale ' + p);
    assert.equal(sha(p), reviewed[role].sha256, 'Whole-review binding stale ' + p);
    assert.equal(sha(item.source.path), reviewed.source.sha256, 'Original source stale ' + p);
    const md = read(p),
      parsed = matter(md),
      nodes = walk(unified().use(remarkParse).use(remarkGfm).parse(parsed.content));
    assert.equal(typeof parsed.data.title, 'string');
    assert(parsed.data.title.trim());
    assert(licenses.has(parsed.data.licenseSource), 'Unregistered licenseSource ' + p);
    if (item.role === 'whole-original-notice') {
      assert(
        md.includes('```text\n' + read(item.source.path) + '\n```'),
        'Original notice differs ' + p
      );
      noticePages++;
    } else {
      assert(
        md.includes('c87183a77d67f7d37e3d2d1b7eaac5e7c695e4f0'),
        'Fixed source notice missing ' + p
      );
      assert(md.includes('/03-notices/'), 'License notice link missing ' + p);
    }
    docs.set('/docs/xxhash/v0-8-4/' + lang + '/' + item.slug, { p, nodes });
    const ids = collectAnchors(path.join(root, p)),
      occurrences = new Map();
    for (const heading of nodes.filter((x) => x.type === 'heading')) {
      const label = walk(heading)
        .filter((x) => ['text', 'inlineCode'].includes(x.type))
        .map((x) => x.value)
        .join('');
      const slug = label
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s_-]/gu, '')
        .trim()
        .replace(/\s+/g, '-');
      const count = occurrences.get(slug) ?? 0;
      occurrences.set(slug, count + 1);
      ids.add(count ? slug + '-' + count : slug);
    }
    anchors.set(p, ids);
  }
}
for (const [route, { p, nodes }] of docs) {
  const links = nodes
    .filter((x) => ['link', 'image', 'definition'].includes(x.type))
    .map((x) => x.url);
  for (const n of nodes.filter((x) => x.type === 'html'))
    for (const h of walk(parseFragment(n.value))) {
      for (const k of ['href', 'src']) if (attr(h, k)) links.push(attr(h, k));
    }
  for (const link of links.filter(Boolean)) {
    if (/^(?:https?:|mailto:|data:)/i.test(link)) continue;
    const u = new URL(link, 'https://libx.dev' + route + '/');
    if (u.pathname.startsWith('/docs/xxhash/source/')) {
      const file = app + '/public/' + decodeURIComponent(u.pathname.slice('/docs/xxhash/'.length));
      assert(fs.existsSync(path.join(root, file)), 'Missing source asset ' + link);
      checkedLinks++;
      continue;
    }
    const target = docs.get(decodeURIComponent(u.pathname).replace(/\/$/, ''));
    assert(target, 'Missing internal document ' + link + ' in ' + p);
    if (u.hash)
      assert(
        anchors.get(target.p).has(decodeURIComponent(u.hash.slice(1))),
        'Missing internal anchor ' + link + ' in ' + p
      );
    checkedLinks++;
  }
}
console.log(
  JSON.stringify(
    {
      status: 'passed-machine-evidence-not-content-review',
      readOnly: true,
      canonicalRegenerationPages: 56,
      reviewBoundPages: 112,
      originalNoticePages: noticePages,
      internalLinks: checkedLinks,
      rawHeadings: 500,
    },
    null,
    2
  )
);
