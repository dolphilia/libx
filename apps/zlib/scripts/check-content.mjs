import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { parse, parseFragment } from 'parse5';

const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = new Set(process.argv.slice(2));
const errors = [],
  pending = [];
const hash = (s) => createHash('sha256').update(s).digest('hex');
const expected = JSON.parse(fs.readFileSync(path.join(app, 'meta/expected-blocks.json')));
const mapping = JSON.parse(fs.readFileSync(path.join(app, 'meta/canonical-map.json')));
const plans = JSON.parse(fs.readFileSync(path.join(app, 'meta/page-plan.json'))).pages;
const walk = (n, predicate) => [
  ...(predicate(n) ? [n] : []),
  ...(n.childNodes ?? []).flatMap((c) => walk(c, predicate)),
];
const attr = (n, k) => n.attrs?.find((a) => a.name === k)?.value;
const text = (n) =>
  n.nodeName === 'button' && attr(n, 'class')?.split(' ').includes('docs-code-copy')
    ? ''
    : n.nodeName === '#text'
      ? n.value
      : (n.childNodes ?? []).map(text).join('');
const route = (file) => file.replace(/\.md$/, '') + '/';
const allFiles = (root) =>
  fs.existsSync(root)
    ? fs
        .readdirSync(root, { withFileTypes: true })
        .flatMap((e) =>
          e.isDirectory() ? allFiles(path.join(root, e.name)) : [path.join(root, e.name)]
        )
    : [];
const canonical = path.join(app, 'src/content/docs/v1-3-2/en');
const generated = spawnSync('python3', [path.join(app, 'scripts/import-canonical.py'), '--check'], {
  encoding: 'utf8',
});
if (generated.status !== 0)
  errors.push({ kind: 'regeneration', stdout: generated.stdout, stderr: generated.stderr });
const files = allFiles(canonical)
  .map((f) => path.relative(canonical, f))
  .sort();
if (JSON.stringify(files) !== JSON.stringify(plans.map((p) => p.page).sort()))
  errors.push({ kind: 'canonical file set', files });
const documents = new Map(),
  results = [];
for (const p of plans) {
  const file = path.join(canonical, p.page);
  if (!fs.existsSync(file)) {
    errors.push({ kind: 'missing canonical', page: p.page });
    continue;
  }
  const md = fs.readFileSync(file, 'utf8');
  if (hash(md) !== mapping.pages.find((x) => x.page === p.page)?.sha256)
    errors.push({ kind: 'canonical hash', page: p.page });
  const body = md.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  const actualFile = args.has('--rendered')
    ? path.join(app, 'dist/v1-3-2/en', route(p.page), 'index.html')
    : file;
  if (!fs.existsSync(actualFile)) {
    errors.push({ kind: 'missing rendered page', page: p.page });
    continue;
  }
  const doc = args.has('--rendered')
    ? parse(fs.readFileSync(actualFile, 'utf8'))
    : parseFragment(body);
  const ids = walk(doc, (n) => !!attr(n, 'id')).map((n) => attr(n, 'id'));
  for (const id of new Set(ids))
    if (ids.filter((x) => x === id).length !== 1)
      errors.push({ kind: 'duplicate id', page: p.page, id });
  const blocks = walk(doc, (n) => attr(n, 'data-zlib-block') !== undefined).map(text);
  if (JSON.stringify(blocks) !== JSON.stringify(expected[p.page]))
    errors.push({
      kind: 'source block mismatch',
      page: p.page,
      expected: expected[p.page].length,
      actual: blocks.length,
    });
  documents.set(route(p.page), { doc, ids, page: p.page });
  results.push({
    page: p.page,
    file: actualFile,
    sha256: hash(fs.readFileSync(actualFile)),
    blocks: blocks.length,
  });
}
let internalLinks = 0,
  externalLinks = 0;
const externalUrls = new Set();
for (const [urlPath, { doc, page }] of documents) {
  const roots = walk(
    doc,
    (n) =>
      attr(n, 'class')?.split(' ').includes('zlib-document') ||
      ['provenance', 'license', 'source-note'].includes(attr(n, 'data-editorial'))
  );
  for (const root of roots)
    for (const a of walk(root, (n) => n.nodeName === 'a' && !!attr(n, 'href'))) {
      const href = attr(a, 'href'),
        url = new URL(href, 'https://libx.dev/docs/zlib/v1-3-2/en/' + urlPath);
      if (url.origin !== 'https://libx.dev') {
        externalLinks++;
        externalUrls.add(url.href);
        continue;
      }
      const target = documents.get(url.pathname.replace('/docs/zlib/v1-3-2/en/', ''));
      if (!target || (url.hash && !target.ids.includes(decodeURIComponent(url.hash.slice(1)))))
        errors.push({ kind: 'internal link', page, href });
      else internalLinks++;
    }
}
for (const [name, target] of Object.entries(mapping.anchors))
  if (!documents.get(route(target.page))?.ids.includes(name))
    errors.push({ kind: 'missing API/type anchor', name, target });
const faq = documents.get('02-appendix/03-faq/');
if (
  faq &&
  walk(faq.doc, (n) => n.nodeName === 'h2' && attr(n, 'data-source-role') === 'question').length !==
    44
)
  errors.push({ kind: 'FAQ44 headings' });
const jaRoot = path.join(app, 'src/content/docs/v1-3-2/ja');
const missingJapanese = plans
  .filter((p) => !fs.existsSync(path.join(jaRoot, p.page)))
  .map((p) => p.page);
if (missingJapanese.length)
  (args.has('--canonical-only') ? pending : errors).push({
    kind: 'missing Japanese pages',
    pages: missingJapanese,
  });
pending.push(
  {
    kind: 'separate full content review and native display validation',
    status: 'not proved by machine equality',
  },
  { kind: 'external URL reachability', urls: [...externalUrls].sort(), status: 'not checked here' }
);
let japanese = null;
if (!args.has('--canonical-only')) {
  const checked = spawnSync(
    process.execPath,
    [
      path.join(app, 'scripts/check-japanese.mjs'),
      ...(args.has('--rendered') ? [] : ['--source-only']),
    ],
    { encoding: 'utf8' }
  );
  if (checked.status !== 0)
    errors.push({
      kind: 'Japanese whole machine validation',
      stdout: checked.stdout,
      stderr: checked.stderr,
    });
  else japanese = JSON.parse(checked.stdout);
}
const result = {
  status: errors.length
    ? 'failed'
    : args.has('--canonical-only')
      ? 'passed-for-canonical-machine-scope'
      : 'passed-for-english-japanese-machine-scope',
  scope: args.has('--rendered')
    ? 'all fourteen actual Astro pages, original block text, IDs and all source/provenance links'
    : 'all fourteen canonical sources, regeneration, original blocks, IDs and all source/provenance links',
  pages: results,
  blocks: results.reduce((s, p) => s + p.blocks, 0),
  anchors: Object.keys(mapping.anchors).length,
  internalLinks,
  externalLinks,
  japanese,
  errors,
  pending,
};
console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exitCode = 1;
