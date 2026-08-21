#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { rootDir } from './common.mjs';

const draftPath = path.join(
  rootDir,
  '.tmp/document-import/awesome/04-translation/AllThingsSmitty-jquery-tips-everyone-should-know.ja.md'
);
const targetPath = path.join(
  rootDir,
  'apps/awesome/src/awesome-content/v2026-08-20/ja/front-end-development/AllThingsSmitty-jquery-tips-everyone-should-know.md'
);
const tipOrder = [
  '`noConflict()`を使う',
  'jQueryが読み込まれたか確認する',
  '要素が存在するか確認する',
  '`.click()`ではなく`.on()`バインディングを使う',
  'ページ先頭へ戻るボタン',
  '画像をプリロードする',
  '画像が読み込まれたか確認する',
  '壊れた画像を自動的に修正する',
  'AJAXでフォームを送信する',
  'ホバー時にクラスを切り替える',
  '入力フィールドを無効化する',
  'リンクの読み込みを止める',
  'jQueryセレクターをキャッシュする',
  'フェード／スライドを切り替える',
  'シンプルなアコーディオン',
  '二つのDivを同じ高さにする',
  '外部リンクを新しいタブ／ウィンドウで開く',
  'テキストで要素を見つける',
  '可視性の変更時にトリガーする',
  'AJAX呼出しのエラー処理',
  'プラグイン呼出しを連鎖する',
  'リスト項目をアルファベット順に並べ替える',
  '右クリックを無効化する',
];

const draft = fs.readFileSync(draftPath, 'utf8');
const start = draft.indexOf('### `noConflict()`を使う');
if (start < 0) throw new Error('jQuery草稿の最初のヒントが見つかりません');
const prefix = draft.slice(0, start);
const sections = new Map();
for (const match of draft
  .slice(start)
  .matchAll(/^### (.+?)\n([\s\S]*?)(?=^### |^## |(?![\s\S]))/gm)) {
  sections.set(match[1], `### ${match[1]}\n${match[2]}`);
}
const missing = tipOrder.filter((title) => !sections.has(title));
if (missing.length) throw new Error(`jQuery草稿のヒントが欠落しています: ${missing.join(', ')}`);
const supportStart = draft.indexOf('## サポート\n');
const translationsStart = draft.indexOf('## 翻訳\n');
const support =
  supportStart < 0 || translationsStart < 0
    ? null
    : draft.slice(supportStart + '## サポート\n'.length, translationsStart);
const translations =
  translationsStart < 0
    ? null
    : draft.slice(
        translationsStart + '## 翻訳\n'.length,
        draft.indexOf('\n### ', translationsStart)
      );
if (!support || !translations) throw new Error('jQuery草稿の補助節が欠落しています');

const output = `${prefix}${tipOrder.map((title) => sections.get(title)).join('')}## サポート\n${support}## 翻訳\n${translations}`;
fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, output);
console.log(`Reordered jQuery translation: ${targetPath}`);
