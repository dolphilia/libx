import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parseFragment, parse } from 'parse5';

const app = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const root = path.resolve(app, '../..');
const notes = path.join(root, 'docs/notes/document-import/spdlog/v1-17-0');
const content = path.join(app, 'src/content/docs/v1-17-0');
const rendered = process.argv.includes('--rendered');
const read = file => fs.readFileSync(file, 'utf8');
const hash = file => createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const binding = JSON.parse(read(path.join(app, 'meta/reviewed-content.json')));
const sources = JSON.parse(read(path.join(notes, 'SOURCE_MANIFEST.json')));
const walk = node => [node, ...(node.childNodes ?? []).flatMap(walk)];
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
const files = folder => fs.readdirSync(folder, {withFileTypes:true}).flatMap(item =>
  item.isDirectory() ? files(path.join(folder, item.name)) : [path.join(folder, item.name)]);
const checked = [];
assert.equal(binding.fullContentReview, 'passed');
assert.equal(binding.pages.length, 27);
assert.equal(new Set(binding.scope).size, 27);
assert.deepEqual(binding.pages.map(page => page.id).sort(), [...binding.scope].sort());
for (const source of sources.files) {
  assert.equal(hash(path.join(root, source.path)), source.sha256, 'Locked source changed: ' + source.path);
}
const regeneration = spawnSync(process.execPath, [path.join(app, 'scripts/import-canonical.mjs'), root, '--check'], {encoding:'utf8'});
assert.equal(regeneration.status, 0, 'Canonical regeneration: ' + regeneration.stderr);
const fences = markdown => [...markdown.matchAll(/^```[^`\n]*\n[\s\S]*?^```[ \t]*(?=\n|$)/gm)]
  .map(match => match[0].replace(/^```[^\n]*\n/, '').replace(/^```[ \t]*$/m, '').replace(/\r\n/g, '\n').replace(/\n+$/, ''));
for (const language of ['en', 'ja']) {
  assert.deepEqual(files(path.join(content, language)).map(file => path.relative(path.join(content, language), file)).sort(), [...binding.scope].sort(), 'Document set ' + language);
  for (const page of binding.pages) {
    const file = path.join(content, language, page.id);
    assert.equal(hash(file), page[language + 'SHA256'], 'Content changed since whole review: ' + language + '/' + page.id);
    const markdown = read(file);
    assert.match(markdown, /^---\ntitle: /);
    assert.match(markdown, /licenseSource: spdlog-(readme|wiki|license)/);
    if (page.id.startsWith('01-guide/')) {
      assert.match(markdown, /data-editorial="provenance"/);
      assert.match(markdown, new RegExp('/docs/spdlog/v1-17-0/' + language + '/02-reference/01-license/'));
      assert.equal((markdown.match(/data-spdlog-source-body=/g) ?? []).length, 1);
      assert.equal((markdown.match(/^<\/div>$/gm) ?? []).length, 1);
      if (language === 'ja') assert.deepEqual(fences(markdown), fences(read(path.join(content, 'en', page.id))), 'Translated code differs: ' + page.id);
    }
    checked.push({language, page:page.id, sha256:hash(file)});
  }
  const noticeFile = path.join(content, language, '02-reference/01-license.md');
  const noticeDocument = rendered ? parse(read(path.join(app, 'dist/v1-17-0', language, '02-reference/01-license/index.html'))) : parseFragment(read(noticeFile));
  const notices = walk(noticeDocument).filter(node => node.tagName === 'pre' && attr(node, 'data-original-notice'));
  assert.equal(notices.length, 3);
  for (const node of notices) {
    const original = path.join(notes, 'sources', attr(node, 'data-original-notice'));
    assert.equal(text(node), read(original).replace(/\r\n/g, '\n'), 'Original notice differs');
  }
  const sidebar = read(path.join(app, 'public/sidebar/sidebar-' + language + '-v1-17-0.json'));
  for (const page of binding.pages) assert(sidebar.includes(path.basename(page.id, '.md')), 'Sidebar missing ' + page.id);
}
if (rendered) {
  const verification = spawnSync(process.execPath, [path.join(app, 'scripts/check-rendered.mjs')], {encoding:'utf8',maxBuffer:8*1024*1024});
  assert.equal(verification.status, 0, 'Rendered fidelity failed: ' + verification.stderr);
  console.log(verification.stdout);
}
console.log(JSON.stringify({status:'passed',readOnly:true,sourceFiles:sources.files.length,canonicalRegenerationPages:27,reviewedContentPages:checked.length,codeFidelity:'EN/JA exact; CRLF and terminal newline normalized',originalNoticesPerLanguage:3,rendered,limitations:'Not native display, software execution, integrated build or publication verification',checked},null,2));
