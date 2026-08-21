import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  getCategoryId,
  humanizeCategoryId,
  resolveCategoryLabel,
} from '../../packages/content-utils/src/category-navigation.js';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');

function readSidebar(project, lang, version) {
  const sidebarPath = path.join(
    rootDir,
    'apps',
    project,
    'public',
    'sidebar',
    `sidebar-${lang}-${version}.json`
  );
  return JSON.parse(fs.readFileSync(sidebarPath, 'utf8'));
}

test('カテゴリIDと表示名の解決規則を共有する', () => {
  const translations = {
    en: { 'getting-started': 'Getting started' },
    ja: { 'getting-started': 'はじめに' },
  };
  assert.equal(getCategoryId('02-getting-started'), 'getting-started');
  assert.equal(
    resolveCategoryLabel({
      categoryId: '02-getting-started',
      lang: 'ja',
      defaultLang: 'en',
      translations,
    }),
    'はじめに'
  );
  assert.equal(
    resolveCategoryLabel({
      categoryId: 'getting-started',
      lang: 'ar',
      defaultLang: 'en',
      translations,
    }),
    'Getting started'
  );
  assert.equal(humanizeCategoryId('migration-and-history'), 'Migration and history');
});

test('GLFWのカテゴリ見出しが日本語設定から生成される', () => {
  const sidebar = readSidebar('glfw', 'ja', 'v3-5-1');
  const titles = sidebar.map((group) => group.title);
  assert.deepEqual(titles, ['概要', 'はじめに', 'ガイド', 'API リファレンス', '移行と履歴']);
  assert.deepEqual(
    sidebar[1].items.map((item) => item.title),
    ['はじめに', 'GLFWをコンパイルする', 'アプリケーションをビルドする']
  );
});

test('Luaのカテゴリ見出しが日本語設定から生成される', () => {
  const titles = readSidebar('lua', 'ja', 'v5-5-1').map((group) => group.title);
  assert.deepEqual(titles, [
    '概要',
    '言語',
    'C API',
    '補助ライブラリ',
    '標準ライブラリ',
    'ツール',
    '移行と既知の問題',
  ]);
});
