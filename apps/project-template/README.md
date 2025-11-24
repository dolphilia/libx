# Project Template

このディレクトリは `pnpm create:project` / `node scripts/create-project.js` で新規ドキュメントサイトを発行する際にコピーされるテンプレートです。`apps/project-template/package.json` が参照している `@docs/config`, `@docs/ui`, `@docs/project-config` などの共有パッケージを利用し、i18n 対応済みの Astro プロジェクトを最小構成で提供します。

## 主な特徴

- `src/content/docs/v1/<lang>/<category>/<file>.mdx` という **version-first** なディレクトリ構造を採用し、複数言語・複数バージョンに即対応（`apps/project-template/src/content/docs/v1`）。
- Astro ルーティング（`src/pages/index.astro` と `src/pages/[version]/[lang]/*`）は共有ユーティリティを使ってサイドバー生成・ページネーション・TOC を自動化（`apps/project-template/src/pages/[version]/[lang]/[...slug].astro`）。
- `src/config/project.config.jsonc` に言語・バージョン・ライセンスを JSONC で定義し、`@docs/project-config` から自動読み込み（`apps/project-template/src/config/project.config.jsonc`）。
- 共有 UI とテーマ（`@docs/ui`, `@docs/theme`）を利用するため、`src/components` や `src/utils` を個別に持たずに一貫したデザインを適用（`apps/project-template/package.json`）。
- `public/sidebar/` 以下にサイドバー JSON（圧縮版含む）を配置し、`scripts/build-sidebar*.js` で再生成できる構成を定義済み（`apps/project-template/public/sidebar`）。

## ディレクトリ構造

```text
project-template/
├── astro.config.mjs         # プロジェクト固有の baseUrl / siteUrl を自動適用
├── package.json             # 共有パッケージの依存関係・npm scripts
├── tsconfig.json            # 共通 TS 設定
├── public/
│   ├── favicon.svg
│   ├── sw.js
│   └── sidebar/             # サイドバーデータ（build-sidebar系で再生成）
└── src/
    ├── config/
    │   └── project.config.jsonc
    ├── content/
    │   └── docs/
    │       └── v1/
    │           ├── en/01-guide/01-getting-started.mdx
    │           └── ja/01-guide/01-getting-started.mdx
    ├── layouts/             # MainLayout / DocLayout
    ├── pages/
    │   ├── index.astro
    │   └── [version]/[lang]/(...)
    └── styles/global.css
```

## プロジェクトの作成方法

### 推奨: 自動スクリプト

```bash
# 対話式（推奨）
pnpm create:project

# 直接指定
node scripts/create-project.js my-docs "My Documentation" "私のドキュメント"

# 詳細オプション（説明・アイコン・タグ・テンプレートなど）
node scripts/create-project.js api-docs "API Documentation" "API文書" \
  --description-en="Comprehensive API documentation" \
  --description-ja="包括的なAPI文書" \
  --icon=code \
  --tags=api,reference \
  --template=project-template \
  --skip-test
```

- スクリプトは `apps/project-template` をコピーし、`package.json` / `astro.config.mjs` / `src/config/project.config.jsonc` を更新し、必要に応じて `sites/landing/src/config/projects.config.jsonc` へカスタム装飾を追記します（`scripts/create-project.js`）。
- コピー後に `pnpm install` とビルドテストを自動実行し、`apps/<project>` ディレクトリの初期動作を検証します。

### 手動コピー（参考）

自動スクリプトが使えない場合のみ、`cp -R apps/project-template apps/<project>` で複製し、上記3つの設定ファイルとランディング設定を手動で調整してください。

## 作成直後に行うこと

1. **テンプレートコンテンツの削除**: `apps/<project>/src/content/docs/v1/{en,ja}/01-guide/01-getting-started.mdx` を削除または置き換える。
2. **`project.config.jsonc` の更新**: `paths.projectSlug`, `paths.siteUrl`, `language.supported`, `translations.*.categories`, `versioning.versions`, `licensing.sources` をプロジェクトに合わせて調整する（`apps/project-template/src/config/project.config.jsonc` を参考）。
3. **ランディング設定の確認**: カスタムアイコンやタグを利用する場合は `sites/landing/src/config/projects.config.jsonc` の `projectDecorations` を見直し、`isNew` フラグの更新タイミングを決める。
4. **スタイル/レイアウトの微調整**: `src/styles/global.css` や `src/layouts/*.astro` でテーマ固有の調整を行う。
5. **動作確認**: `pnpm --filter=apps-<project> dev` でローカルテスト、`pnpm build:selective --projects=<project>` で選択ビルドを行う。

## ドキュメントとバージョンの追加

### ドキュメント追加

```bash
# 非対話
node scripts/create-document.js my-docs ja v1 guide "新しいページタイトル"

# 推奨: 対話モード
node scripts/create-document.js my-docs en v1 --interactive
```

`scripts/create-document.js` はカテゴリ構造を解析し、番号付きディレクトリやファイル名の整合性、翻訳カテゴリの同期 (`syncCategoryTranslations`) まで自動化します（`scripts/create-document.js`）。

### バージョン追加

```bash
# 既存内容をコピーして追加
node scripts/create-version.js my-docs v2

# 空のディレクトリで追加
node scripts/create-version.js my-docs v2 --no-copy

# 対話モード
node scripts/create-version.js my-docs v2 --interactive
```

`scripts/create-version.js` は `project.config.jsonc` の `versioning.versions` を更新し、言語別ディレクトリを自動生成し、必要なら既存バージョンからコンテンツをコピーします。

## 開発・ビルドコマンド

| コマンド | 用途 |
| --- | --- |
| `pnpm install` | プロジェクト配下で依存関係をインストール |
| `pnpm --filter=apps-<project> dev` / `pnpm dev` | 開発サーバー（`http://localhost:4321/docs/<project>`） |
| `pnpm --filter=apps-<project> build` | プロジェクト単体ビルド |
| `pnpm build:selective --projects=<project>` | サイト統合環境で対象プロジェクトのみビルド（`scripts/build-selective.js`） |
| `pnpm preview` | ビルド結果をローカルで確認 |

## サイドバー/検索データの再生成

- すべてのプロジェクトを再生成: `pnpm build:sidebar`（`scripts/build-sidebar.js` が `public/sidebar/` に JSON / gz を出力）。
- 対象プロジェクトのみ: `node scripts/build-sidebar-selective.js --projects=my-docs`。テンプレート自身は除外されますが、動作確認目的で指定することも可能です（`scripts/build-sidebar-selective.js`）。

## 注意事項

- **テンプレートとしての一貫性を保つ**: このディレクトリを直接編集する際は、新規プロジェクトにそのまま反映される点に留意し、変更後は `pnpm create:project` で検証してください。
- **実プロジェクト作業はコピー先で行う**: テンプレートを直接改変して運用しないようにしてください。
- **共有パッケージを優先利用**: `@docs/*` で提供される UI / i18n / versioning を利用することで、全プロジェクトの UX を揃えられます。
