import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isSupportedLocale,
  isValidLanguageTag,
  validateSupportedLocale,
} from '../../scripts/locale-utils.js';
import { rewriteBasePathInHtml } from '../../scripts/html-url-rewriter.js';

test('共有ロケール検証はBCP 47形式の登録済みロケールを扱う', () => {
  for (const locale of ['en', 'ar', 'zh-Hans', 'zh-Hant', 'pt-BR']) {
    assert.equal(isValidLanguageTag(locale), true, locale);
    assert.equal(isSupportedLocale(locale), true, locale);
    assert.deepEqual(validateSupportedLocale(locale), [], locale);
  }

  assert.equal(isValidLanguageTag('pt_BR'), false);
  assert.equal(isSupportedLocale('xx-YY'), false);
  assert.match(validateSupportedLocale('xx-YY')[0], /言語レジストリ/);
});

test('HTML URL補正はハイフン付きロケールと小数バージョンを保持する', () => {
  const source = [
    '<meta http-equiv="refresh" content="0;url=/libx/v2.1/zh-Hans/">',
    '<a href="/libx/v2.1/zh-Hans/">redirect</a>',
    '<link rel="canonical" href="https://libx.dev/libx/v2.1/pt-BR/">',
    'Redirecting from <code>/libx</code> to <code>/libx/v2.1/zh-Hans/</code>',
  ].join('');

  const result = rewriteBasePathInHtml(source, {
    oldBasePath: '/libx',
    newBasePath: '/libx/docs/sample-docs',
    isIndex: true,
  });

  assert.match(result, /url=\/libx\/docs\/sample-docs\/v2\.1\/zh-Hans\//);
  assert.match(result, /href="\/libx\/docs\/sample-docs\/v2\.1\/zh-Hans\//);
  assert.match(result, /https:\/\/libx\.dev\/libx\/docs\/sample-docs\/v2\.1\/pt-BR\//);
  assert.match(result, /<code>\/libx\/docs\/sample-docs\/v2\.1\/zh-Hans\/<\/code>/);
});
