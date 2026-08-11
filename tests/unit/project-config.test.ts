import test from 'node:test';
import assert from 'node:assert/strict';
import {
  convertProjectConfigJSONToRuntime,
  getProjectConfigValidationErrors,
  validateProjectConfigJSON,
} from '../../packages/project-config/src/config-schema.js';
import { stripJsonComments } from '../../packages/project-config/src/jsonc.js';

const validConfig = {
  paths: { baseUrlPrefix: '/docs', projectSlug: 'test' },
  language: {
    supported: ['en', 'ja'],
    default: 'en',
    displayNames: { en: 'English', ja: '日本語' },
  },
  translations: {
    en: {
      displayName: 'Docs',
      displayDescription: 'Documentation',
      categories: { guide: 'Guide' },
    },
    ja: {
      displayName: '文書',
      displayDescription: '文書です',
      categories: { guide: 'ガイド' },
    },
  },
  versioning: {
    versions: [
      {
        id: 'v1',
        name: 'Version 1',
        date: '2026-01-01T00:00:00.000Z',
        isLatest: true,
      },
    ],
  },
  licensing: {
    sources: [
      {
        id: 'original',
        name: 'Documentation',
        author: 'Maintainer',
        license: 'MIT',
        licenseUrl: 'https://opensource.org/licenses/MIT',
        sourceUrl: 'https://example.com/docs',
      },
    ],
    defaultSource: 'original',
    showAttribution: true,
    sourceLanguage: 'en',
  },
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
    language: { ...validConfig.language, supported: ['ja'], default: 'en' },
  };
  assert.equal(validateProjectConfigJSON(invalidLanguage), false);
  assert.match(getProjectConfigValidationErrors(invalidLanguage)[0], /language\.default/);
  assert.equal(
    validateProjectConfigJSON({
      ...validConfig,
      versioning: { versions: [{ id: 'v1', name: 'Version 1', date: 'invalid' }] },
    }),
    false
  );
});

test('project config validation rejects IDs that Astro would normalize or collide', () => {
  const dottedVersion = {
    ...validConfig,
    versioning: {
      versions: [
        {
          ...validConfig.versioning.versions[0],
          id: 'v3.5.1',
        },
      ],
    },
  };
  assert.equal(validateProjectConfigJSON(dottedVersion), false);
  assert.match(getProjectConfigValidationErrors(dottedVersion)[0], /v3-5-1/);

  const collidingVersion = {
    ...validConfig,
    translations: {
      ...validConfig.translations,
      en: { ...validConfig.translations.en, categories: { v1: 'Collision' } },
    },
  };
  assert.equal(validateProjectConfigJSON(collidingVersion), false);
  assert.match(getProjectConfigValidationErrors(collidingVersion)[0], /collide/);
});

test('stripJsonComments preserves comment-like content inside strings', () => {
  const parsed = JSON.parse(
    stripJsonComments('{ // comment\n "url": "https://example.com/a//b" /* block */ }')
  );
  assert.equal(parsed.url, 'https://example.com/a//b');
});
