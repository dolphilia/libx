import assert from 'node:assert/strict';
import test from 'node:test';
import { enhanceDocumentTree } from '../../scripts/plugins/rehype-document-enhancements.js';

test('code and table enhancements preserve semantic elements', () => {
  const tree = {
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'pre',
        properties: { 'data-language': 'js' },
        children: [{ type: 'element', tagName: 'code', properties: {}, children: [] }],
      },
      { type: 'element', tagName: 'table', properties: {}, children: [] },
    ],
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const enhanced = enhanceDocumentTree(tree, '/docs/v1/ja/page.md') as any;

  assert.equal(enhanced.children[0].properties.className[0], 'docs-code-frame');
  assert.equal(enhanced.children[0].children[1].tagName, 'pre');
  assert.equal(enhanced.children[0].children[0].children[1].properties.ariaLabel, 'コードをコピー');
  assert.equal(enhanced.children[1].properties.className[0], 'docs-table-scroll');
  assert.equal(enhanced.children[1].children[0].tagName, 'table');
  assert.equal(enhanced.children.at(-1).tagName, 'script');
});

test('Japanese Awesome footnotes retain reference targets and localize generated labels', () => {
  const tree = {
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'h2',
        properties: {},
        children: [{ type: 'text', value: 'Footnotes' }],
      },
      {
        type: 'element',
        tagName: 'section',
        properties: { dataFootnotes: true },
        children: [
          {
            type: 'element',
            tagName: 'h2',
            properties: { id: 'footnote-label' },
            children: [{ type: 'text', value: 'Footnotes' }],
          },
          {
            type: 'element',
            tagName: 'a',
            properties: {
              dataFootnoteBackref: '',
              href: '#user-content-fnref-1-2',
              ariaLabel: 'Back to reference 1-2',
            },
            children: [{ type: 'text', value: '↩' }],
          },
        ],
      },
      {
        type: 'element',
        tagName: 'pre',
        properties: {},
        children: [{ type: 'element', tagName: 'code', properties: {}, children: [] }],
      },
    ],
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const enhanced = enhanceDocumentTree(
    tree,
    'C:\\repo\\apps\\awesome\\systems\\src\\awesome-content\\v1\\ja\\page.md'
  ) as any;
  assert.equal(enhanced.children[0].children[0].value, 'Footnotes');
  assert.equal(enhanced.children[1].children[0].children[0].value, '脚注');
  assert.equal(enhanced.children[1].children[0].properties.id, 'footnote-label');
  assert.equal(enhanced.children[1].children[1].properties.href, '#user-content-fnref-1-2');
  assert.equal(enhanced.children[1].children[1].properties.ariaLabel, '脚注参照1-2へ戻る');
  assert.equal(enhanced.children[2].children[0].children[0].properties.ariaLabel, 'コードをコピー');
});

test('English footnotes and custom Japanese labels are preserved', () => {
  const makeTree = (label: string) => ({
    type: 'root',
    children: [
      {
        type: 'element',
        tagName: 'section',
        properties: { dataFootnotes: true },
        children: [
          {
            type: 'element',
            tagName: 'h2',
            properties: { id: 'footnote-label' },
            children: [{ type: 'text', value: label }],
          },
        ],
      },
    ],
  });
  const english = makeTree('Footnotes');
  const custom = makeTree('参考注');
  enhanceDocumentTree(english, '/repo/src/awesome-content/v1/en/page.md');
  enhanceDocumentTree(custom, '/repo/src/docs/v1/ja/page.md');
  assert.equal(english.children[0].children[0].children[0].value, 'Footnotes');
  assert.equal(custom.children[0].children[0].children[0].value, '参考注');
});

test('wide Japanese tables preserve prose, links and existing classes while reserving reading width', () => {
  const text = '社会的な課題に取り組む事業の実例を紹介し、その活動と運営方法を説明する書籍。';
  const element = (tagName: string, children: unknown[] = [], properties: Record<string, unknown> = {}) =>
    ({ type: 'element', tagName, properties, children });
  const longCell = () => element('td', [
    { type: 'text', value: text },
    element('a', [{ type: 'text', value: '参考資料' }], { href: 'https://example.com/book' }),
  ], { className: ['existing'] });
  const proseCell = longCell();
  const shortCell = element('td', [{ type: 'text', value: '短い説明' }]);
  const codeCell = element('td', [element('code', [{ type: 'text', value: text }])]);
  const latinCell = element('td', [{ type: 'text', value: 'A long English description that can wrap at ordinary word spaces.' }]);
  const table = element('table', [element('tbody', [element('tr', [proseCell, shortCell, codeCell, latinCell])])]);
  const originalChildren = JSON.stringify(proseCell.children);
  enhanceDocumentTree({ type: 'root', children: [table] }, '/src/awesome-content/v1/ja/page.md');
  assert.deepEqual(proseCell.properties.className, ['existing', 'docs-table-prose']);
  assert.equal(JSON.stringify(proseCell.children), originalChildren);
  assert.deepEqual(shortCell.properties, {});
  assert.deepEqual(codeCell.properties, {});
  assert.deepEqual(latinCell.properties, {});

  const narrowCell = longCell();
  const narrow = element('table', [element('tr', [narrowCell, shortCell, latinCell])]);
  enhanceDocumentTree({ type: 'root', children: [narrow] }, '/src/docs/v1/ja/page.md');
  assert.deepEqual(narrowCell.properties.className, ['existing']);
  const englishCell = longCell();
  const english = element('table', [element('tr', [englishCell, shortCell, codeCell, latinCell])]);
  enhanceDocumentTree({ type: 'root', children: [english] }, '/src/docs/v1/en/page.md');
  assert.deepEqual(englishCell.properties.className, ['existing']);
});
