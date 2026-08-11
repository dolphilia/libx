import assert from 'node:assert/strict';
import test from 'node:test';
import { findLayoutDifferences } from '../../scripts/sync-docs-layouts.js';

test('all distributed documentation layouts match the canonical template', () => {
  assert.deepEqual(findLayoutDifferences(), []);
});
