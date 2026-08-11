import test from 'node:test';
import assert from 'node:assert/strict';
import { getLocaleFromPathname, translate } from '../../packages/i18n/src/utils/index.js';

test('URLからドキュメント言語を解決する', () => {
  assert.equal(getLocaleFromPathname('/docs/lua/v5-5-1/ja/02-language/'), 'ja');
  assert.equal(getLocaleFromPathname('/docs/sample-docs/v2/ar/01-guide/'), 'ar');
  assert.equal(getLocaleFromPathname('/docs/lua/v5-5-1/unknown/'), 'en');
});

test('共通UIのvisible labelとaccessible labelをページ言語で取得できる', () => {
  assert.equal(translate('common.warning', 'en'), 'Warning');
  assert.equal(translate('common.warning', 'ja'), '警告');
  assert.equal(translate('common.warning', 'ar'), 'تحذير');
  assert.equal(translate('accessibility.sectionLink', 'en'), 'Link to this section');
  assert.equal(translate('accessibility.sectionLink', 'ja'), 'このセクションへのリンク');
  assert.equal(translate('accessibility.sectionLink', 'ar'), 'رابط إلى هذا القسم');
});
