import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildDocumentPath,
  selectLatestVersionId,
} from '../../packages/content-utils/src/path-utils.js';

test('buildDocumentPath builds version-first paths by default', () => {
  assert.equal(
    buildDocumentPath('v2', 'ja', ['/01-guide/', '01-getting-started']),
    '/v2/ja/01-guide/01-getting-started'
  );
});

test('selectLatestVersionId prefers available content, then the configured latest version', () => {
  assert.equal(selectLatestVersionId(['v1', 'v3', 'v2']), 'v3');
  assert.equal(selectLatestVersionId([], [{ id: 'v1' }, { id: 'v2', isLatest: true }]), 'v2');
});

test('buildDocumentPath supports locale-first paths and normalizes slashes', () => {
  assert.equal(
    buildDocumentPath('v2', 'ar', '//guide///getting-started//', 'locale-first'),
    '/ar/v2/guide/getting-started'
  );
});
