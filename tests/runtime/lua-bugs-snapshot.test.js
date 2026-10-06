import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { createRequire } from 'node:module';
import { parseFragment } from 'parse5';
import { renderHtmlFragmentForTest } from '../../scripts/importers/import-lua-5.5.1.mjs';
import {
  LUA_BUGS_PAGE,
  LUA_BUGS_SOURCE,
  generateSnapshot,
  writeSnapshot,
  checkSnapshot,
} from '../../scripts/importers/lua-bugs-2026-10-02.mjs';

const root = path.resolve(import.meta.dirname, '../..');
const visit = (n) => [n, ...(n.childNodes ?? []).flatMap(visit)];
const text = (n) => n.value ?? (n.childNodes ?? []).map(text).join('');
const prose = (n) =>
  n.tagName === 'pre' ? ' ' : (n.value ?? (n.childNodes ?? []).map(prose).join(''));
function fixture() {
  const dir = fs.mkdtempSync(path.join(fs.realpathSync(os.tmpdir()), 'libx-lua-bugs-test-'));
  fs.mkdirSync(path.dirname(path.join(dir, LUA_BUGS_SOURCE)), { recursive: true });
  fs.cpSync(path.join(root, LUA_BUGS_SOURCE), path.join(dir, LUA_BUGS_SOURCE), { recursive: true });
  return dir;
}

test('固定4入力から全説明/報告者/修正先/再現コード/原MITを実Astroで保全する', async () => {
  const require = createRequire(import.meta.url);
  const astro = createRequire(require.resolve('astro/package.json'));
  const { createMarkdownProcessor } = await import(astro.resolve('@astrojs/markdown-remark'));
  const processor = await createMarkdownProcessor({ smartypants: false });
  const generated = generateSnapshot(root, renderHtmlFragmentForTest);
  const fragment = generated.content
    .slice(generated.content.indexOf('# <a id="5.5.1"'))
    .split('\n\n## Libx license annotation')[0];
  const rendered = visit(parseFragment((await processor.render(fragment)).code));
  assert.equal(
    prose(parseFragment((await processor.render(fragment)).code))
      .replace(/\s+/g, ' ')
      .trim(),
    prose(parseFragment(generated.inputs['known-issues-5.5.1.html'])).replace(/\s+/g, ' ').trim()
  );
  assert.equal(text(rendered.find((n) => n.tagName === 'pre')), generated.sourceCode);
  const html = visit(
    parseFragment(
      (await processor.render(generated.content.split('---').slice(2).join('---'))).code
    )
  );
  assert.deepEqual(html.filter((n) => n.tagName === 'pre').map(text), [
    generated.sourceCode,
    generated.inputs['SOFTWARE-LICENSE.txt'].trimEnd(),
  ]);
  assert.ok(html.some((n) => n.attrs?.some((a) => a.name === 'href' && a.value === '#5.5.1-1')));
  assert.ok(
    html.some((n) =>
      n.attrs?.some(
        (a) => a.name === 'href' && a.value.endsWith('0b29f408433e92953cc72b1d3e06c7ac8139e439')
      )
    )
  );
});

test('追加1ページだけを再生成し、旧ページと日本語を保持する', () => {
  const dir = fixture();
  try {
    const docs = path.join(dir, 'apps/lua/src/content/docs/v5-5-1');
    fs.mkdirSync(path.join(docs, 'en/07-migration-and-known-issues'), { recursive: true });
    fs.mkdirSync(path.join(docs, 'ja'), { recursive: true });
    fs.writeFileSync(
      path.join(docs, 'en/07-migration-and-known-issues/03-known-issues.md'),
      '旧取得版'
    );
    fs.writeFileSync(path.join(docs, 'ja/translation.md'), '訳文');
    writeSnapshot(dir, renderHtmlFragmentForTest);
    const expected = checkSnapshot(dir, renderHtmlFragmentForTest).content;
    writeSnapshot(dir, renderHtmlFragmentForTest);
    assert.equal(fs.readFileSync(path.join(docs, 'en', LUA_BUGS_PAGE), 'utf8'), expected);
    assert.equal(
      fs.readFileSync(
        path.join(docs, 'en/07-migration-and-known-issues/03-known-issues.md'),
        'utf8'
      ),
      '旧取得版'
    );
    assert.equal(fs.readFileSync(path.join(docs, 'ja/translation.md'), 'utf8'), '訳文');
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('改変原資料・symlinkを拒否し、確定失敗でも既存定本を戻す', () => {
  const dir = fixture();
  try {
    writeSnapshot(dir, renderHtmlFragmentForTest);
    const file = path.join(dir, 'apps/lua/src/content/docs/v5-5-1/en', LUA_BUGS_PAGE);
    const before = fs.readFileSync(file);
    assert.throws(
      () =>
        writeSnapshot(dir, renderHtmlFragmentForTest, {
          beforeCommit() {
            throw Error('simulated failure');
          },
        }),
      /simulated/
    );
    assert.deepEqual(fs.readFileSync(file), before);
    const source = path.join(dir, LUA_BUGS_SOURCE, 'source/known-issues-5.5.1.html');
    fs.appendFileSync(source, 'changed');
    assert.throws(() => writeSnapshot(dir, renderHtmlFragmentForTest), /固定入力SHA/);
    assert.deepEqual(fs.readFileSync(file), before);
    fs.rmSync(source);
    fs.symlinkSync(path.join(root, LUA_BUGS_SOURCE, 'source/known-issues-5.5.1.html'), source);
    assert.throws(() => generateSnapshot(dir, renderHtmlFragmentForTest), /symlink/);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
