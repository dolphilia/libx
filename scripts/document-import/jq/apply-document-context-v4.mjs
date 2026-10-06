// Deterministic display overlay. Frozen canonical files and AI review are immutable.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
const argument = (name) => process.argv[process.argv.indexOf(name) + 1];
const app = path.resolve(argument('--app'));
const packet = path.resolve(argument('--packet'));
const sha = (value) => crypto.createHash('sha256').update(value).digest('hex');
const renderer = process.env.LIBX_MARKDOWN_RENDERER;
assert(renderer, 'Specify the installed Astro Markdown renderer');
const { createMarkdownProcessor } = await import(pathToFileURL(renderer).href);
const processor = await createMarkdownProcessor({ syntaxHighlight: false, smartypants: false });
const reviewBytes = fs.readFileSync(path.join(packet, 'CONTENT_REVIEW.json'));
const review = JSON.parse(reviewBytes);
assert.equal(review.pages.length, 18);
const records = [];
for (const page of review.pages)
  for (const [language, role] of [
    ['en', 'canonical'],
    ['ja', 'translation'],
  ]) {
    const input = fs.readFileSync(path.join(packet, page[role].path), 'utf8');
    assert.equal(sha(input), page[role].sha256);
    const match = input.match(/^---\n[\s\S]*?\n---\n/);
    assert(match);
    const frontmatter = match[0],
      body = input.slice(frontmatter.length);
    let remaining = body,
      removed = '',
      side = null;
    if (page.id.startsWith('01-guide/')) {
      const marker = language === 'en' ? '## Source and notices\n\n' : '## 出典と通知\n\n';
      const start = body.lastIndexOf(marker);
      assert(start >= 0, page.id);
      remaining = body.slice(0, start);
      removed = body.slice(start);
      side = 'suffix';
    } else if (language === 'ja') {
      const start = body.indexOf('```text\n');
      assert(start >= 0, page.id);
      removed = body.slice(0, start);
      assert(removed.trim());
      remaining = body.slice(start);
      side = 'prefix';
    }
    const context = removed
      ? [
          {
            kind: 'source',
            html: (
              await processor.render(
                side === 'prefix' ? removed.replace(/^(\s*)以下は/, '$1本文は') : removed
              )
            ).code,
          },
        ]
      : null;
    const output = context
      ? frontmatter.slice(0, -4) +
        'documentContext: ' +
        JSON.stringify(context) +
        '\n---\n' +
        remaining
      : input;
    const relative = 'src/content/docs/v1-8-2/' + language + '/' + page.id;
    const file = path.join(app, relative),
      current = fs.readFileSync(file, 'utf8');
    assert(current === input || current === output, 'Unexpected app modification: ' + relative);
    if (current !== output) fs.writeFileSync(file, output);
    records.push({
      path: relative,
      reviewPath: page[role].path,
      language,
      id: page.id,
      before: sha(input),
      after: sha(output),
      frontmatterBefore: frontmatter,
      bodyBefore: sha(body),
      bodyAfter: sha(remaining),
      removed,
      side,
      context,
      contextSha256: context ? sha(JSON.stringify(context)) : null,
    });
  }
assert.equal(records.length, 36);
const manifest = {
  schemaVersion: 1,
  kind: 'jq-document-context-display-overlay',
  reviewManifestSHA256: sha(reviewBytes),
  records,
  changedPages: records.filter((record) => record.context).length,
  originalNoticesPreserved: true,
  semanticReviewPerformed: false,
};
const output = path.join(app, 'meta/document-context-v4.json');
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(manifest, null, 2) + '\n');
console.log(
  JSON.stringify({
    pages: records.length,
    changedPages: manifest.changedPages,
    manifestSHA256: sha(fs.readFileSync(output)),
    semanticReviewPerformed: false,
  })
);
