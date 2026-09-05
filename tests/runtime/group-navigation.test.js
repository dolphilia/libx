import test from 'node:test';
import assert from 'node:assert/strict';
import { validateGroupNavigation } from '../../packages/ui/src/components/group-navigation.js';

const context = { baseUrl: '/docs/example', version: 'v1', lang: 'ja' };
const payload = (href) => ({
  schemaVersion: 1,
  version: 'v1',
  lang: 'ja',
  items: [{ title: 'カテゴリ', items: [{ title: '文書', href }] }],
});

test('group navigation accepts the matching locale/version and rejects unsafe or stale data', () => {
  const valid = payload('/docs/example/v1/ja/guide/page/');
  assert.equal(validateGroupNavigation(valid, context), valid);
  assert.equal(
    validateGroupNavigation({ ...valid, revision: 'current' }, { ...context, revision: 'current' })
      .revision,
    'current'
  );
  assert.throws(() =>
    validateGroupNavigation({ ...valid, revision: 'old' }, { ...context, revision: 'current' })
  );
  for (const href of [
    'https://evil.invalid/',
    '//evil.invalid/',
    '/docs/example/v1/en/guide/page/',
    '/docs/example/v1/ja/../../other/',
    '/docs/example/v1/ja/%2e%2e/other/',
    '/docs/example/v1/ja/a%2fb/',
    '/docs/example/v1/ja/a?query',
    '/docs/example/v1/ja/a\\b/',
  ]) {
    assert.throws(() => validateGroupNavigation(payload(href), context), href);
  }
  assert.throws(() => validateGroupNavigation({ ...valid, schemaVersion: 2 }, context));
  assert.throws(() => validateGroupNavigation({ ...valid, lang: 'en' }, context));
  assert.throws(() =>
    validateGroupNavigation({ ...valid, items: [...valid.items, ...valid.items] }, context)
  );
});
