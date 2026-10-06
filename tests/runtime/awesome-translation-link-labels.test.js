import test from 'node:test';
import assert from 'node:assert/strict';
import { maskMarkdownLinkLabels } from '../../scripts/importers/awesome/translation-link-labels.mjs';

const urls = (text) => [...maskMarkdownLinkLabels(text, { maskInlineCodeDelimiters: true }).matchAll(/https?:\/\/[^\s)>]+/g)].map(m => m[0]);

test('URL表示名を訳してもリンク先の順序・重複を保持して比較する', () => {
  const en = '- [https://example.com/](https://example.com/) [site](https://example.com/)';
  const ja = '- [サイト](https://example.com/) [サイト](https://example.com/)';
  assert.deepEqual(urls(en), urls(ja));
  assert.deepEqual(urls(en), ['https://example.com/', 'https://example.com/']);
  assert.notDeepEqual(urls(en), urls(ja.replace('(https://example.com/)', '(https://other.test/)')));
  assert.notDeepEqual(urls(en), urls('- [サイト](https://example.com/)'));
});

test('自動リンク・参照定義・本文URL・コード内URLは検査に残し、改行と位置を変えない', () => {
  const input = '[**https://label.test/**][ref]\n\n[ref]: https://target.test/\n\n' +
    '<https://auto.test/>\nhttps://plain.test/\n`https://code.test/`\n' +
    '```md\n[https://literal.test/](https://code-target.test/)\n```';
  const masked = maskMarkdownLinkLabels(input);
  assert.equal(masked.length, input.length);
  assert.deepEqual(masked.split('\n').map(x => x.length), input.split('\n').map(x => x.length));
  assert.ok(!urls(input).some(x => x.includes('label.test')));
  for (const domain of ['target', 'auto', 'plain', 'code', 'literal', 'code-target'])
    assert.ok(urls(input).some(x => x.includes(domain + '.test/')));
});

test('リンク内の画像も別のリンク先として保持する', () => {
  assert.deepEqual(urls('[![badge](https://image.test/badge.svg)](https://license.test/)'),
    ['https://image.test/badge.svg', 'https://license.test/']);
});

test('インラインURL直後の日本語をURLへ含めず、複数URLの変更・欠落・順序違いを検出する', () => {
  const en = '`https://example.com/blog/` to `https://example.com/blog`';
  const ja = '`https://example.com/blog/`を`https://example.com/blog`へ変換します。';
  const expected = ['https://example.com/blog/', 'https://example.com/blog'];
  assert.deepEqual(urls(en), expected);
  assert.deepEqual(urls(ja), expected);
  assert.notDeepEqual(urls(en), urls(ja.replace('blog/`', 'other/`')));
  assert.notDeepEqual(urls(en), urls('`https://example.com/blog/`だけ。'));
  assert.notDeepEqual(urls(en), urls('`https://example.com/blog`から`https://example.com/blog/`へ。'));
  assert.deepEqual(urls('``https://example.com/blog/``を使います。'), [expected[0]]);
  assert.equal(maskMarkdownLinkLabels(ja).length, ja.length);
});

test('URL抽出用の区切り処理をリスト構造検査へ適用しない', () => {
  const input = '*`--silent`オプションを使います。*\n*`https://example.com/`を参照。*';
  assert.equal(maskMarkdownLinkLabels(input), input);
  assert.equal([...maskMarkdownLinkLabels(input).matchAll(/^([ \t]*)([-*+]|\d+\.)\s+(.+)$/gm)].length, 0);
  assert.deepEqual(urls(input), ['https://example.com/']);
});
