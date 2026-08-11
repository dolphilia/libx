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
