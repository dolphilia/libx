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

test('shared content schema rejects category overrides because directories own navigation', () => {
  assert.throws(() => docsSchema.parse({ title: 'Page', category: 'guide' }), /Unrecognized key/);
});

test('document IDs are optional stable metadata and cannot be blank or multiline', () => {
  assert.equal(
    docsSchema.parse({ title: 'Page', documentId: 'guide:start' }).documentId,
    'guide:start'
  );
  for (const documentId of ['', '  ', 'first\nsecond']) {
    assert.throws(() => docsSchema.parse({ title: 'Page', documentId }));
  }
});
