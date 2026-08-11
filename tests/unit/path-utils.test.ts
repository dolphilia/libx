import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildAvailableLanguagePaths,
  buildDocumentPath,
  collectAvailableVersionIds,
  selectLatestVersionId,
} from '../../packages/content-utils/src/path-utils.js';

test('buildDocumentPath builds version-first paths by default', () => {
  assert.equal(
    buildDocumentPath('v2', 'ja', ['/01-guide/', '01-getting-started']),
    '/v2/ja/01-guide/01-getting-started'
  );
});

test('version IDs expose only exact page counterparts', () => {
  const documents = [
    'v1/en/guide/page',
    'v2/en/guide/page',
    'v2/en/guide/new-page',
    'v2/ja/guide/page',
  ];
  assert.deepEqual(
    [...collectAvailableVersionIds({ documentSlugs: documents, language: 'en', relativeSlug: '' })],
    ['v1', 'v2']
  );
  assert.deepEqual(
    [
      ...collectAvailableVersionIds({
        documentSlugs: documents,
        language: 'en',
        relativeSlug: 'guide/new-page',
      }),
    ],
    ['v2']
  );
  assert.deepEqual(
    [
      ...collectAvailableVersionIds({
        documentSlugs: documents,
        language: 'ja',
        relativeSlug: 'guide/new-page',
      }),
    ],
    []
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

test('language paths expose only exact counterparts for zero, partial, and complete translations', () => {
  const base = {
    supportedLanguages: ['en', 'ja'],
    displayNames: { en: 'English', ja: '日本語' },
    baseUrl: '/docs/demo',
    version: 'v1',
    currentLanguage: 'en',
    relativeSlug: 'guide/page',
  };

  assert.deepEqual(
    buildAvailableLanguagePaths({
      ...base,
      documentSlugs: ['v1/en/guide/page'],
    }).map((item) => item.lang),
    ['en']
  );
  assert.deepEqual(
    buildAvailableLanguagePaths({
      ...base,
      documentSlugs: ['v1/en/guide/page', 'v1/ja/guide/other'],
    }).map((item) => item.lang),
    ['en']
  );
  assert.deepEqual(
    buildAvailableLanguagePaths({
      ...base,
      documentSlugs: ['v1/en/guide/page', 'v1/ja/guide/page'],
    }).map((item) => item.lang),
    ['en', 'ja']
  );
});
