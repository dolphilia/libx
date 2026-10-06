// Reproducible, limited presentation check; this does not perform a content review.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';

const root = process.cwd();
const builds = process.argv[2];
assert.ok(builds, 'Specify the isolated build workspace');
const require = createRequire(path.join(root, 'package.json'));
const { parse } = require('parse5');
const matter = require('gray-matter');
const hash = (value) => crypto.createHash('sha256').update(value).digest('hex');
const auditDir = 'docs/notes/document-context-2026-10-04';
const migration = JSON.parse(fs.readFileSync(`${auditDir}/MIGRATION.json`));
const baseline = JSON.parse(fs.readFileSync(`${auditDir}/BASELINE.json`));
const walk = (n) => [n, ...(n.childNodes ?? []).flatMap(walk)];
const attr = (n, key) => n.attrs?.find(a => a.name === key)?.value;
const issues = [];
let sourceLinks = 0, sectionLinks = 0;
for (const record of migration.records) {
  const current = fs.readFileSync(record.path, 'utf8');
  assert.equal(hash(current), record.after, record.path);
  const body = current.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '');
  assert.equal(hash(body), record.bodyAfter, record.path);
  let restored = body;
  // Offsets are JavaScript UTF-16 code-unit offsets, not byte offsets.
  for (const note of record.notes) restored = restored.slice(0, note.start) + note.original + restored.slice(note.start);
  assert.equal(hash(restored), record.bodyBefore, `Original body reconstruction: ${record.path}`);
  const app = record.path.split('/')[1];
  const slug = record.path.split('/src/content/docs/')[1].replace(/\.mdx?$/, '');
  const htmlPath = path.join(builds, 'apps', app, 'dist', slug, 'index.html');
  const nodes = walk(parse(fs.readFileSync(htmlPath, 'utf8')));
  const footer = nodes.find(n => n.tagName === 'footer' && attr(n, 'class') === 'document-context-footer');
  assert.ok(footer, record.path);
  const article = nodes.find(n => n.tagName === 'article');
  assert.ok(nodes.indexOf(footer) > nodes.indexOf(article), record.path);
  const footerNodes = walk(footer);
  const notes = footerNodes.filter(n => attr(n, 'data-context-kind'));
  const { data } = matter(current);
  assert.equal(notes.length, data.documentContext.length, record.path);
  assert.equal(walk(article).filter(n => attr(n, 'data-context-kind')).length, 0, record.path);
  for (const note of data.documentContext) {
    if (note.context) {
      sectionLinks++;
      assert.ok(nodes.some(n => attr(n, 'id') === note.context.anchor), `${record.path} #${note.context.anchor}`);
    }
  }
  const localUrl = new URL(`/docs/${app}/${slug}/`, 'https://libx.dev');
  for (const link of footerNodes.filter(n => n.tagName === 'a')) {
    const href = attr(link, 'href');
    if (!href) continue;
    sourceLinks++;
    const url = new URL(href, localUrl);
    if (url.origin !== localUrl.origin || !url.pathname.startsWith('/docs/')) continue;
    const [, , linkedApp, ...segments] = url.pathname.split('/');
    const linkedRoot = path.join(builds, 'apps', linkedApp, 'dist');
    const relative = decodeURIComponent(segments.join('/'));
    const target = path.join(linkedRoot, relative.endsWith('/') ? relative + 'index.html' : relative);
    const resolved = fs.existsSync(target) && fs.statSync(target).isFile() ? target : path.join(target, 'index.html');
    if (!fs.existsSync(resolved)) { issues.push({ page: record.path, href, issue: 'missing-local-target' }); continue; }
    if (url.hash) {
      const linkedNodes = walk(parse(fs.readFileSync(resolved, 'utf8')));
      const anchor = decodeURIComponent(url.hash.slice(1));
      if (!linkedNodes.some(n => attr(n, 'id') === anchor || attr(n, 'name') === anchor)) issues.push({ page: record.path, href, issue: 'missing-anchor' });
    }
  }
}
for (const [file, sha256] of Object.entries(baseline.awesome)) assert.equal(hash(fs.readFileSync(file)), sha256, `Awesome changed: ${file}`);
const result = { reviewScope: 'footer placement, policy wording, preservation and local links; no full content re-review', checkedPages: migration.files, reconstructedBodies: migration.files, sectionLinks, footerLinks: sourceLinks, awesomeFilesUnchanged: Object.keys(baseline.awesome).length, issues };
fs.writeFileSync(`${auditDir}/VALIDATION.json`, JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result));
assert.equal(issues.length, 0, 'Footer links need correction');
