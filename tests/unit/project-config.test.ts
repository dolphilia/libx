import test from 'node:test';
import assert from 'node:assert/strict';
import {
  convertProjectConfigJSONToRuntime,
  getProjectConfigValidationErrors,
  validateProjectConfigJSON
} from '../../packages/project-config/src/config-schema.js';
import { stripJsonComments } from '../../packages/project-config/src/jsonc.js';

const validConfig = {
  language: { supported: ['en', 'ja'], default: 'en' },
  translations: {
    en: {
      displayName: 'Docs',
      displayDescription: 'Documentation',
      categories: { guide: 'Guide' }
    }
  },
  versioning: {
    versions: [
      {
        id: 'v1',
        name: 'Version 1',
        date: '2026-01-01T00:00:00.000Z',
        isLatest: true
      }
    ]
  }
};

test('project config validation accepts a valid config and converts dates', () => {
  assert.equal(validateProjectConfigJSON(validConfig), true);
  if (!validateProjectConfigJSON(validConfig)) return;
  assert.equal(
    convertProjectConfigJSONToRuntime(validConfig).versioning.versions[0].date.toISOString(),
    '2026-01-01T00:00:00.000Z'
  );
});

test('project config validation rejects malformed languages and dates', () => {
  const invalidLanguage = {
    ...validConfig,
    language: { supported: ['ja'], default: 'en' }
  };
  assert.equal(validateProjectConfigJSON(invalidLanguage), false);
  assert.match(getProjectConfigValidationErrors(invalidLanguage)[0], /language\.default/);
  assert.equal(
    validateProjectConfigJSON({
      ...validConfig,
      versioning: { versions: [{ id: 'v1', name: 'Version 1', date: 'invalid' }] }
    }),
    false
  );
});

test('stripJsonComments preserves comment-like content inside strings', () => {
  const parsed = JSON.parse(
    stripJsonComments('{ // comment\n "url": "https://example.com/a//b" /* block */ }')
  );
  assert.equal(parsed.url, 'https://example.com/a//b');
});
