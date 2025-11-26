# RTL 対応計画

## 背景と目的
- `libx` はアラビア語など右から左に読む言語を `packages/i18n` のロケールとして既に収録しているが、UI/テーマ/レイアウトが LTR 前提のため表示が崩れる。
- 目標は **ランディング (`sites/landing`) と apps/ 配下の各ドキュメントサイト** が RTL ロケールでも自然な左右配置・ナビゲーションになるようにすること。
- 対応を共通パッケージ (`@docs/theme`, `@docs/ui`, `@docs/project-config`, `@docs/i18n`) に寄せ、プロジェクト個別の調整を最小限にする。

## スコープ
1. 方向情報の提供元追加：`packages/i18n`, `@docs/project-config`
2. レイアウト層 (`apps/*/src/layouts`, `sites/landing/src/layouts`) での `dir` 伝播
3. テーマ CSS（`packages/theme`）の論理プロパティ化
4. 主要 UI コンポーネント（`@docs/ui`, `@docs/versioning`）の RTL 対応
5. ランディング・ドキュメント両方での実装確認とスモークテスト

## 実施ステップ

### 1. RTL メタデータの基盤整備
1. `packages/i18n/src/locales/index.ts`
   - `export const rtlLocales: LocaleKey[] = ['ar', 'he', ...]`（まずは `['ar']`）を追加。
   - `export function getLocaleDirection(lang: LocaleKey): 'ltr' | 'rtl'` を実装。
2. `packages/i18n/src/index.ts` から `getLocaleDirection`/`isRtlLocale` を再エクスポート。
3. `packages/project-config/src/config-loader.ts` に `resolveLocaleDirection(lang)` を追加し、設定から `lang` を扱う箇所で利用できるようにする。

### 2. レイアウトでの `dir` 伝播
1. `apps/project-template/src/layouts/MainLayout.astro`
   - `const dir = getLocaleDirection(lang);`
   - `<html lang={lang} dir={dir} data-dir={dir}>` とし、`LanguageSelector`/`ThemeToggle`/`Footer` へ `dir` を渡せるよう Props に追加。
2. `apps/project-template/src/layouts/DocLayout.astro`
   - `dir` を計算して `Sidebar`, `TableOfContents`, `Pagination` (slot) に渡す。
   - `<article>` / `.content-panel` にも `dir` 属性を設定。
3. `sites/landing/src/layouts/MainLayout.astro`
   - 上記と同様に `dir` を付与し、`LanguageSelector` + ページ内 `slot` に `dir` を伝搬。
4. `sites/landing/src/pages/[lang]/index.astro`
   - 最上位の `<section>` などに `dir` を渡し、`ProjectCard` へ `dir` または `class:list` を供給。

### 3. テーマ CSS の論理プロパティ化
1. `packages/theme/src/css/base.css` と `starlight-overrides.css`
   - `padding-left`/`margin-left`/`border-left`/`text-align: left` をそれぞれ `padding-inline-start`/`margin-inline-start`/`border-inline-start`/`text-align: start` に変更。
   - どうしても左側固定が必要な箇所は `:root[dir='rtl']` などで `*-end` に切り替える。
2. `packages/theme/src/css/layouts/*.css`
   - `.sidebar-column` や `.toc-column` の sticky 位置を `inset-inline-start`/`inset-inline-end` へ置換。
   - グリッドや Flex の `gap`/`justify-content` を `dir` に依存させる必要がある箇所には `[dir='rtl']` 条件付きルールを追加。
3. `sites/landing/src/styles/global.css`
   - `hero-section`、`project-grid` などに `text-align: start` を適用し、左右マージンを論理プロパティへ変更。

### 4. UI コンポーネントの RTL サポート
1. `@docs/ui/components/Pagination.astro`
   - `dir` を必須 prop にし、矢印アイコンと `flex-direction`、`text-align` を `dir` に応じて切り替え。
   - `.pagination-links` に `[dir='rtl']` で `grid-template-areas` を反転させる。
2. `@docs/ui/components/Sidebar.astro`
   - `padding-left` 等を論理プロパティ化。
   - `[dir='rtl']` のときに `.sidebar.mobile-overlay` の開始位置を `inset-inline-start: auto; inset-inline-end: 0;` にする。
3. `@docs/ui/components/LanguageSelector.astro`
   - `Dropdown` へ渡す `align` を `dir === 'rtl' ? 'left' : 'right'` に。
   - ラベルやフッターリンクのテキスト揃えを `text-align: start` に変更。
4. `@docs/ui/components/Dropdown/*.astro`
   - ボタン/メニューの `margin-left` 等を論理プロパティに置換。
   - `data-align` が `left`/`right` のとき `dir` を考慮した配置になるよう `:host([dir='rtl'])` を追加。
5. `@docs/versioning/components/VersionSelector.astro`
   - `Dropdown` と同じく `dir` を受け取り `align` を切り替え。
   - `.version-dropdown-*` で `margin-inline-start`, `text-align: start` へ置換。
6. その他左右を使っているコンポーネント（`Alert`, `Banner`, `Button`, `AnchorHeading`, `ProjectCard`, `TableOfContents`）も同様に論理プロパティ化し、`dir` プロップを必要に応じ追加。

### 5. テストページと検証
1. `apps/project-template/src/content/docs/v1/ar/01-guide` に既存英語ページをコピーし、`title`/`description` を簡易翻訳して `dir='rtl'` のレンダリング確認用データを用意。
2. `pnpm --filter=apps-project-template dev` で `http://localhost:4321/docs/project-template/v1/ar/...` を確認。
3. ランディングは `pnpm --filter=sites-landing dev` で `http://localhost:4321/ar/` を確認。
4. `pnpm build:selective --projects=project-template` および `pnpm --filter=sites-landing build` を実行し、ビルド時に `dir` による差分がないか確認。
5. 手動チェックリスト
   - サイドバー展開/折りたたみ時のアイコン回転方向
   - ページネーションの Prev/Next が視覚・機能ともに逆転している
   - ドロップダウンが画面外にはみ出さない
   - テーブルやコードブロック、ブロック引用の装飾線
   - ランディングの hero/ProjectCard の整列

### 6. ドキュメントとフォローアップ
1. `docs/notes` もしくは `README.md` に「RTL 対応の方針と `dir` の扱い」を追記。
2. 将来 RTL ロケールを追加する手順：`rtlLocales` に追加 → コンテンツを追加 → `pnpm build` で確認、をテンプレート化。
3. 回帰防止として Playwright 等で `dir='rtl'` ページのスモークテストを検討（次フェーズの課題として記載）。

## 依存関係・リスク
- 既存 LTR レイアウトが論理プロパティ化で崩れる可能性 → 大きめの差分でもコミットを段階化し、Storybook/ローカルで逐次確認。
- `dir` 伝播漏れ → TypeScript 型や Prop を可能な限り必須にしてエラーで気づけるようにする。
- ランディングと apps のビルド設定差異 → 双方で `pnpm build` を必ず実行し、CI で検知できるよう `package.json` の scripts を活用。

## 成果物
- 共通パッケージの RTL 対応コード
- `apps/project-template` での検証用アラビア語ページ
- `docs` 配下の更新（本計画書＋手順メモ）
- 検証ログ（テスト結果を `docs/notes` へ記録予定）

