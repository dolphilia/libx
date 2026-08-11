import assert from 'node:assert/strict';
import test from 'node:test';
import { remarkCallouts } from '../../scripts/plugins/remark-callouts.js';

const createCalloutTransformer = remarkCallouts as unknown as () => (
  tree: ReturnType<typeof treeWithMarker>,
  file: { fail: (message: string) => unknown }
) => void;
const transformCallouts = createCalloutTransformer();

function treeWithMarker(marker: string) {
  return {
    type: 'root',
    children: [
      {
        type: 'blockquote',
        children: [
          { type: 'paragraph', children: [{ type: 'text', value: marker }] },
          { type: 'paragraph', children: [{ type: 'text', value: 'Body' }] },
        ],
      },
    ],
  };
}

test('callout marker becomes semantic, no-JS blockquote markup', () => {
  const tree = treeWithMarker('[!WARNING] 警告\nBody');
  transformCallouts(tree, { fail: assert.fail });
  const blockquote = tree.children[0] as (typeof tree.children)[number] & {
    data: { hProperties: Record<string, unknown> };
  };

  assert.deepEqual(blockquote.data.hProperties.className, [
    'docs-callout',
    'docs-callout--warning',
  ]);
  assert.equal(blockquote.data.hProperties['data-callout'], 'warning');
  assert.deepEqual(blockquote.children[0], {
    type: 'paragraph',
    data: { hProperties: { className: ['docs-callout__title'] } },
    children: [{ type: 'strong', children: [{ type: 'text', value: '警告' }] }],
  });
  assert.deepEqual(blockquote.children[1], {
    type: 'paragraph',
    children: [{ type: 'text', value: 'Body' }],
  });
});

test('unknown callout marker fails the build', () => {
  const tree = treeWithMarker('[!UNKNOWN] Unknown');
  assert.throws(
    () =>
      transformCallouts(tree, {
        fail(message: string) {
          throw new Error(message);
        },
      }),
    /Unknown or malformed callout type: UNKNOWN/
  );
});

test('callout label is required so each language supplies its own visible text', () => {
  const tree = treeWithMarker('[!WARNING]');
  assert.throws(
    () =>
      transformCallouts(tree, {
        fail(message: string) {
          throw new Error(message);
        },
      }),
    /Unknown or malformed callout type: WARNING/
  );
});

test('ordinary quotations remain untouched', () => {
  const tree = treeWithMarker('A normal quotation');
  const before = structuredClone(tree);
  transformCallouts(tree, { fail: assert.fail });
  assert.deepEqual(tree, before);
});
