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
