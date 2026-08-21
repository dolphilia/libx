import assert from 'node:assert/strict';
import test from 'node:test';
import {
  buildTableOfContents,
  countTableOfContentsItems,
} from '../../packages/content-utils/src/table-of-contents.js';

const headings = [
  { depth: 2, text: '手順', slug: 'steps' },
  { depth: 3, text: '準備', slug: 'prepare' },
  { depth: 3, text: '実行', slug: 'run' },
  { depth: 2, text: 'まとめ', slug: 'summary' },
];

test('H3を直前のH2の子項目として構築する', () => {
  const toc = buildTableOfContents(headings);

  assert.deepEqual(
    toc.map((item) => item.text),
    ['手順', 'まとめ']
  );
  assert.deepEqual(
    toc[0].children.map((item) => item.text),
    ['準備', '実行']
  );
  assert.equal(countTableOfContentsItems(toc), 4);
});

test('先頭の下位見出しと、見出しレベルの飛びを安全に扱う', () => {
  const toc = buildTableOfContents(
    [
      { depth: 3, text: '単独のH3', slug: 'orphan' },
      { depth: 2, text: 'H2', slug: 'parent' },
      { depth: 4, text: 'H4', slug: 'deep-child' },
    ],
    { maxLevel: 4 }
  );

  assert.equal(toc[0].text, '単独のH3');
  assert.equal(toc[1].text, 'H2');
  assert.equal(toc[1].children[0].text, 'H4');
});

test('見出し範囲と項目数上限をツリー化前の文書順へ適用する', () => {
  const toc = buildTableOfContents(headings, { minLevel: 2, maxLevel: 3, maxItems: 3 });

  assert.equal(countTableOfContentsItems(toc), 3);
  assert.deepEqual(
    toc[0].children.map((item) => item.text),
    ['準備', '実行']
  );
  assert.equal(
    toc.some((item) => item.text === 'まとめ'),
    false
  );
});
