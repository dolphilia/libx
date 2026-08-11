import assert from 'node:assert/strict';
import test from 'node:test';
import { docsSchema } from '../../packages/content-utils/src/content-schema.js';

test('shared content schema accepts bounded table-of-contents settings', () => {
  assert.equal(
    docsSchema.parse({ title: 'Page', toc: { minLevel: 2, maxLevel: 4, maxItems: 30 } }).toc
      ?.maxItems,
    30
  );
});

test('shared content schema rejects inverted table-of-contents levels', () => {
  assert.throws(
    () => docsSchema.parse({ title: 'Page', toc: { minLevel: 5, maxLevel: 2 } }),
    /toc.minLevel must be less than or equal to toc.maxLevel/
  );
});
