import assert from 'node:assert/strict';
import test from 'node:test';
import {
  validateProjectConfigData,
  validateRepositoryIntegrity,
} from '../../scripts/validate-repository-integrity.js';

test('repository project, content, landing, and licensing references are consistent', async () => {
  assert.deepEqual(await validateRepositoryIntegrity(), []);
});

test('invalid version and licensing references are rejected', () => {
  const errors = validateProjectConfigData(
    {
      paths: { projectSlug: 'wrong' },
      language: { supported: ['en'], default: 'ja', displayNames: {} },
      translations: {},
      versioning: {
        versions: [
          { id: 'v1', isLatest: true },
          { id: 'v1', isLatest: true },
        ],
      },
      licensing: {
        sources: [],
        defaultSource: 'missing',
        sourceLanguage: 'ja',
      },
    },
    {
      appId: 'demo',
      contentCoordinates: [{ version: 'v2', locale: 'ar' }],
      licenseReferences: [{ file: 'page.mdx', source: 'missing' }],
    }
  );

  assert.ok(errors.length >= 9);
});

test('unsafe version IDs and configured-directory mismatches are rejected', () => {
  const errors = validateProjectConfigData(
    {
      paths: { projectSlug: 'demo' },
      language: { supported: ['en'], default: 'en', displayNames: { en: 'English' } },
      translations: {
        en: { displayName: 'Demo', displayDescription: '', categories: { guide: 'Guide' } },
      },
      versioning: { versions: [{ id: 'v3.5.1', isLatest: true }] },
      licensing: {
        sources: [
          {
            id: 'source',
            name: 'Source',
            author: 'Author',
            license: 'MIT',
            licenseUrl: 'https://example.com/license',
            sourceUrl: 'https://example.com/source',
          },
        ],
        defaultSource: 'source',
        sourceLanguage: 'en',
      },
    },
    {
      appId: 'demo',
      contentCoordinates: [{ version: 'v3-5-1', locale: 'en' }],
      licenseReferences: [],
    }
  );

  assert.ok(errors.some((error) => error.includes('v3-5-1')));
  assert.ok(errors.some((error) => error.includes('unknown version')));
});
