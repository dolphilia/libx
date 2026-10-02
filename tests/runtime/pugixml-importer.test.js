import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { parseFragment } from 'parse5';
import {
  importCanonical,
  readLockedSources,
  generateCanonicalPages,
  validatePreservation,
  preservationMetrics,
} from '../../scripts/importers/import-pugixml-1.16.mjs';
import { describePath } from '../../scripts/importers/safe-import-output.js';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const sourceRoot = path.join(root, 'docs/notes/document-import/pugixml/v1-16/source');
function fixture() {
  const directory = fs.mkdtempSync(path.join(fs.realpathSync(os.tmpdir()), 'libx-pugixml-test-'));
  const allowedRoot = path.join(directory, 'app/src/content/docs');
  return {
    directory,
    allowedRoot,
    sourceRoot,
    outputRoot: path.join(allowedRoot, 'v1-16/en'),
    assetRoot: path.join(directory, 'app/public/assets/pugixml-v1-16'),
  };
}
test('12ページ/43アセットを再生成しても変化せず、日本語訳を保持する', () => {
  const options = fixture();
  try {
    const translation = path.join(options.allowedRoot, 'v1-16/ja/draft.md');
    fs.mkdirSync(path.dirname(translation), { recursive: true });
    fs.writeFileSync(translation, '既存の日本語訳\n');
    const first = importCanonical(options);
    assert.equal(first.pages.length, 12);
    assert.equal(first.assets.length, 43);
    assert.deepEqual(importCanonical(options), first);
    assert.equal(importCanonical({ ...options, check: true }).matches, true);
    assert.equal(fs.readFileSync(translation, 'utf8'), '既存の日本語訳\n');
  } finally {
    fs.rmSync(options.directory, { recursive: true, force: true });
  }
});
test('改変入力・日本語や範囲外出力を拒否し、既存の本文とアセットを保持する', () => {
  const options = fixture();
  try {
    importCanonical(options);
    const docs = describePath(options.outputRoot),
      assets = describePath(options.assetRoot);
    const input = path.join(options.directory, 'input');
    fs.cpSync(sourceRoot, input, { recursive: true });
    fs.appendFileSync(path.join(input, 'docs/manual.html'), 'unverified source modification');
    assert.throws(
      () => importCanonical({ ...options, sourceRoot: input }),
      /固定入力SHA-256不一致/
    );
    assert.throws(
      () => importCanonical({ ...options, outputRoot: path.join(options.allowedRoot, 'v1-16/ja') }),
      /定本言語/
    );
    assert.throws(
      () => importCanonical({ ...options, outputRoot: path.join(options.directory, 'en') }),
      /許可ルート/
    );
    assert.deepEqual(describePath(options.outputRoot), docs);
    assert.deepEqual(describePath(options.assetRoot), assets);
  } finally {
    fs.rmSync(options.directory, { recursive: true, force: true });
  }
});
test('2対象目の確定が失敗しても、本文とアセットを両方戻す', () => {
  const options = fixture();
  try {
    importCanonical(options);
    const docs = describePath(options.outputRoot),
      assets = describePath(options.assetRoot);
    assert.throws(
      () =>
        importCanonical({
          ...options,
          commitOptions: {
            beforeCommit(_record, index) {
              if (index === 1) throw new Error('simulated second-target failure');
            },
          },
        }),
      /simulated/
    );
    assert.deepEqual(describePath(options.outputRoot), docs);
    assert.deepEqual(describePath(options.assetRoot), assets);
  } finally {
    fs.rmSync(options.directory, { recursive: true, force: true });
  }
});
test('通常と壊れたsymlinkを入力/出力/参照アセットに使わない', () => {
  const options = fixture();
  try {
    const input = path.join(options.directory, 'input');
    fs.cpSync(sourceRoot, input, { recursive: true });
    fs.rmSync(path.join(input, 'docs/manual.html'));
    fs.symlinkSync(path.join(sourceRoot, 'docs/manual.html'), path.join(input, 'docs/manual.html'));
    assert.throws(() => readLockedSources(input), /symlink/);
    fs.mkdirSync(path.dirname(options.outputRoot), { recursive: true });
    fs.symlinkSync(path.join(options.directory, 'missing'), options.outputRoot);
    assert.throws(() => importCanonical(options), /symlink/);
    fs.rmSync(options.outputRoot);
    fs.mkdirSync(path.dirname(options.assetRoot), { recursive: true });
    fs.symlinkSync(sourceRoot, options.assetRoot);
    assert.throws(() => importCanonical(options), /symlink/);
  } finally {
    fs.rmSync(options.directory, { recursive: true, force: true });
  }
});
test('実際のAstro Markdownで全文/158コード/32表/9画像/全元ID/APIリンク/脚注を保全する', async () => {
  const require = createRequire(import.meta.url),
    astroRequire = createRequire(require.resolve('astro/package.json'));
  const { createMarkdownProcessor } = await import(
    astroRequire.resolve('@astrojs/markdown-remark')
  );
  const { rehypeDocumentEnhancements } = await import(
    '../../scripts/plugins/rehype-document-enhancements.js'
  );
  const processor = await createMarkdownProcessor({
    smartypants: false,
    rehypePlugins: [rehypeDocumentEnhancements],
  });
  const generated = generateCanonicalPages(readLockedSources(sourceRoot));
  const metrics = [],
    rendered = new Map();
  for (const page of generated.pages) {
    const body = page.content.slice(page.content.indexOf('---', 4) + 3).trimStart();
    const html = (await processor.render(body)).code;
    metrics.push(validatePreservation(page, html, generated.maps));
    rendered.set(page.output, preservationMetrics(parseFragment(html).childNodes));
  }
  assert.equal(metrics.filter((p) => p.preservationPassed).length, 11);
  assert.equal(
    metrics.reduce((n, p) => n + (p.codeBlocks ?? 0), 0),
    158
  );
  assert.equal(
    metrics.reduce((n, p) => n + (p.tables ?? 0), 0),
    32
  );
  assert.equal(
    metrics.reduce((n, p) => n + (p.images ?? 0), 0),
    9
  );
  for (const [file, record] of rendered)
    for (const href of record.links) {
      if (href.startsWith('#'))
        assert.ok(record.anchors.includes(href.slice(1)), `${file}: ${href}`);
      else if (href.startsWith('/docs/pugixml/v1-16/en/')) {
        const [url, anchor] = href.split('#'),
          target = url.replace('/docs/pugixml/v1-16/en/', '').replace(/\/$/, '') + '.md';
        assert.ok(rendered.has(target), target);
        if (anchor) assert.ok(rendered.get(target).anchors.includes(anchor), `${file}: ${href}`);
      }
    }
});
