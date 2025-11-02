# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリのコードを操作する際のガイダンスを提供します。

**重要**: Claude Codeは、このリポジトリでの作業時には**必ず日本語で応答してください**。ユーザーとのすべてのコミュニケーションは日本語で行う必要があります。

## 概要

libxは、共有UIコンポーネントとテーマを使用して複数のドキュメントサイトを管理するためのAstroベースのモノレポです。主に英語の技術文書の日本語翻訳をホストし、複数の言語とバージョンをサポートしています。

## 開発コマンド

### 基本コマンド

```bash
# 依存関係のインストール
pnpm install

# すべての開発サーバーを起動
pnpm dev

# 特定のプロジェクトを起動
pnpm --filter=sample-docs dev
pnpm --filter=top-page dev

# すべてのプロジェクトをビルド（本番環境）
pnpm build

# ローカル開発用にビルド（ベースパスなし）
pnpm build:local

# 特定のプロジェクトのみをビルド（インクリメンタル変更に推奨）
pnpm build:selective --projects=sample-docs
pnpm build:selective --projects=sample-docs,test-verification
pnpm build:selective:local --projects=sample-docs

# 個別のアプリを別々にビルド（統合なし）
pnpm build:separate

# サイドバーJSONファイルを生成
pnpm build:sidebar

# 特定のプロジェクトのみのサイドバーを生成
pnpm build:sidebar-selective --projects=sample-docs

# 完全なビルドとデプロイパイプライン
pnpm build:deploy  # Sidebar → Build
pnpm build:deploy-selective --projects=sample-docs  # 特定のプロジェクト用

# ビルドしたサイトをプレビュー
pnpm preview

# リントとフォーマット
pnpm lint
pnpm format
```

### ローカルでのビルドテスト

```bash
# ローカルテスト用にビルド
pnpm build:local

# ローカルサーバーを起動（ポート8080）
bash scripts/dev/start_server.sh
```

### デプロイ

```bash
# Cloudflare Pagesにデプロイ
pnpm deploy:pages

# 1つのコマンドでビルドとデプロイ
pnpm deploy
```

## プロジェクト管理

### 新しいプロジェクトの作成

```bash
# 自動プロジェクト作成（推奨）
pnpm create:project project-name "English Name" "日本語名"

# オプション付き
pnpm create:project api-docs "API Documentation" "API文書" \
  --description-en="Comprehensive API documentation" \
  --description-ja="包括的なAPI文書" \
  --icon="code" \
  --tags="api,reference"

# テストをスキップして高速作成
pnpm create:project quick-project "Quick Project" "クイックプロジェクト" --skip-test
```

利用可能なアイコン: `file-text`, `book`, `code`, `settings`, `database`, `globe`, `layers`, `package`

### バージョンの追加

```bash
# 新しいバージョンを作成
node scripts/create-version.js sample-docs v3

# インタラクティブモード（推奨）
node scripts/create-version.js sample-docs v3 --interactive

# 前のバージョンのコンテンツをコピーせずに作成
node scripts/create-version.js sample-docs v3 --no-copy
```

### 言語の追加

```bash
# プロジェクトに新しい言語を追加
node scripts/add-language.js sample-docs de

# カスタム表示名と説明付き
node scripts/add-language.js sample-docs de "Deutsch" "Deutsche Dokumentation"

# 特定の言語をテンプレートソースとして使用
node scripts/add-language.js sample-docs ko --template-lang=ja --skip-test
```

サポートされている言語: `en`, `ja`, `zh-Hans`, `zh-Hant`, `es`, `pt-BR`, `ko`, `de`, `fr`, `ru`, `ar`, `id`, `tr`, `hi`, `vi`

### ドキュメントの追加

```bash
# 新しいドキュメントを作成
node scripts/create-document.js sample-docs en v2 guide "Getting Started"

# インタラクティブモード（推奨）
node scripts/create-document.js sample-docs ja v2 --interactive
```

## アーキテクチャ

### モノレポ構造

- **`apps/`** - 個別のAstroドキュメントプロジェクト
  - `project-template/` - 新しいプロジェクトを作成するためのテンプレート
  - `top-page/` - ランディングページ（ルート `/` にデプロイ）
  - `sample-docs/`, `test-verification/`など - ドキュメントプロジェクト
- **`packages/`** - 共有ワークスペースパッケージ
  - `@docs/ui` - 共通UIコンポーネント
  - `@docs/theme` - 共有テーマとスタイリング
  - `@docs/i18n` - 国際化ユーティリティ
  - `@docs/versioning` - バージョン管理機能
- **`scripts/`** - 自動化とビルドスクリプト
- **`config/`** - 共有開発ツール設定（ESLint、TypeScript）
- **`docs/`** - プロジェクトのドキュメントとガイド

### コンテンツ構成

各プロジェクトは次の構造に従います：

```text
apps/{project}/src/content/docs/
  ├── v1/                    # バージョンディレクトリ
  │   ├── en/                # 言語ディレクトリ（ISOコード）
  │   │   ├── 01-guide/      # カテゴリ（NN-slug形式）
  │   │   │   ├── 01-getting-started.mdx   # ドキュメント（NN-slug.mdx）
  │   │   │   └── 02-installation.mdx
  │   │   └── 02-reference/
  │   └── ja/
  │       ├── 01-guide/
  │       └── 02-reference/
  └── v2/
```

**命名規則（自動化に重要）：**

- バージョン: `v1`, `v2`など（`project.config.json`と一致する必要があります）
- 言語: ISOコード（`en`, `ja`, `zh-Hans`）
- カテゴリ: `NN-slug`形式（例：`01-guide`, `02-components`）
- ドキュメント: `NN-slug.mdx`形式（例：`01-getting-started.mdx`）
- 番号はゼロパディングされ、表示順序を決定します
- すべての言語バージョンは同一の構造を維持する必要があります

### 設定ファイル

**プロジェクトごとの設定：**

- `apps/{project}/astro.config.mjs` - ベースパス付きのAstro設定
- `apps/{project}/src/config/project.config.json` - プロジェクトメタデータ、バージョン、言語、ライセンス

**トップページの設定：**

- `apps/top-page/src/config/projects.config.json` - プロジェクトの装飾（アイコン、タグ）

### ビルドシステム

統合ビルドシステム：

1. **`build-sidebar.js`** - MDXフロントマターからサイドバーJSONを生成
2. **`build-integrated.js`** - 各アプリをビルドして統一された`dist/`に統合
3. **`build-selective.js`** - 指定されたプロジェクトのみをビルド（単一プロジェクトの場合70-80%高速）

ビルド出力構造：

```text
dist/
  ├── index.html           # top-page（ルート）
  ├── assets/              # 共有アセット
  └── docs/
      ├── sample-docs/     # /docs/{project}/配下の各プロジェクト
      │   ├── v2/ja/
      │   └── sidebar/     # サイドバーJSONファイル
      └── test-verification/
```

**ベースパスの処理：**

- 本番環境: Cloudflare Pages用の`/libx`プレフィックス
- ローカル: プレフィックスなし（`pnpm build:local`を使用）
- 各プロジェクト: `/docs/{project-name}/`

### 自動化スクリプト

`scripts/`内の主要な自動化スクリプト：

- **`create-project.js`** - テンプレートからの自動プロジェクトスキャフォールディング
- **`create-version.js`** - 新しいバージョンディレクトリを追加
- **`add-language.js`** - 適切なディレクトリ構造で言語サポートを追加
- **`create-document.js`** - テンプレート付きの新しいドキュメントファイルを作成

### ビルドプラグインとユーティリティ

`scripts/`内の補助的なツール：

- **`plugins/`** - カスタムビルドプラグイン
  - `remark-link-transformer.js` - MDX内のリンクをベースパスに対応させる変換プラグイン
- **`document-utils.js`** - ドキュメント管理スクリプトで共有されるユーティリティ関数
- **`utils.js`** - ビルドスクリプト用の汎用ユーティリティ

### 共有パッケージ

すべてのアプリはワークスペースパッケージに依存します：

```json
{
  "dependencies": {
    "@docs/ui": "workspace:*",
    "@docs/theme": "workspace:*",
    "@docs/i18n": "workspace:*",
    "@docs/versioning": "workspace:*"
  }
}
```

これらは`astro.config.mjs`でVite経由でエイリアスされます：

```javascript
alias: {
  '@docs/ui': path.resolve(__dirname, '../../packages/ui/src'),
  '@docs/theme': path.resolve(__dirname, '../../packages/theme/src'),
  '@docs/i18n': path.resolve(__dirname, '../../packages/i18n/src'),
  '@docs/versioning': path.resolve(__dirname, '../../packages/versioning/src'),
}
```

## 重要な開発原則

### ファイルベースの自動化

- ビルドシステムはファイル構造と命名規則に大きく依存しています
- サイドバー生成、ナビゲーション、ルーティングはすべてディレクトリ構造に基づいて自動化されています
- 構造の変更（バージョン、言語、プロジェクト）には**常に自動化スクリプトを使用してください**
- ディレクトリ構造への手動変更は自動化を壊す可能性があります - 変更後は`pnpm build:sidebar`で検証してください

### 一貫性の要件

- ドキュメントのすべての言語バージョンは同一のファイル構造を持つ必要があります
- カテゴリ番号とドキュメント番号は言語間で一致する必要があります
- フロントマターフィールド（`title`, `description`）はすべてのMDXファイルで必須です
- 共有パッケージへの変更はすべてのプロジェクトに影響します - 徹底的にテストしてください

### ワークフローのベストプラクティス

1. **新機能/プロジェクトの場合**: 自動化スクリプト（`create-project.js`など）を使用
2. **コンテンツの変更の場合**:
   - ライブプレビューには`pnpm dev`を使用
   - サイドバー生成の検証には`pnpm build:sidebar`を使用
   - ローカルテストには`pnpm build:local`を使用
3. **選択的ビルドの場合**: 特定のプロジェクトで作業する際は`build:selective`と`build:sidebar-selective`を使用
4. **デプロイ前に**:
   - `pnpm lint`と`pnpm format`を実行
   - `pnpm build:deploy`（または選択版）でテスト
   - `dist/`出力構造を確認
5. **共有パッケージの変更の場合**: コミット前に複数のアプリでテスト

### 変更のテスト

```bash
# 特定のプロジェクトのビルドをテスト
cd apps/sample-docs
pnpm build

# 完全な統合をテスト
pnpm build:deploy

# 選択的ビルドをテスト（高速）
pnpm build:deploy-selective --projects=sample-docs

# サイドバー生成を検証
pnpm build:sidebar

# 生成されたファイルを確認
ls -la apps/sample-docs/public/sidebar/
```

## よくある落とし穴

1. **サイドバーが更新されない**: ドキュメントの追加/移動後に`pnpm build:sidebar`を実行
2. **ベースパスの問題**: ローカルテストには`pnpm build:local`を使用、本番環境には`pnpm build`を使用
3. **共有パッケージの変更が反映されない**: パッケージ変更後は開発サーバーを再起動
4. **ビルドが失敗する**: MDXフロントマターが有効で、すべての必須フィールドが存在することを確認
5. **プロジェクトが検出されない**: プロジェクト内に`src/content/docs`ディレクトリが存在することを確認
6. **カテゴリの順序が間違っている**: ディレクトリ名の番号を確認（01-guide, 02-referenceなど）
7. **ビルド時間が長すぎる**: インクリメンタル変更には選択的ビルド（`build:selective --projects=...`）を使用

## ドキュメント参照

詳細なガイドについては`docs/`を参照してください：

- `PROJECT_PRINCIPLES.md` - 開発原則と哲学
- `BUILD_AND_DEPLOYMENT_GUIDE.md` - 包括的なビルド/デプロイドキュメント
- `NEW_PROJECT_CREATION_GUIDE.md` - 手動プロジェクト作成手順
- `VERSION_ADDITION_GUIDE.md` - バージョン管理の詳細
- `LANGUAGE_ADDITION_GUIDE.md` - 言語サポートの実装
- `DOCUMENT_ADDITION_GUIDE.md` - ドキュメント作成ガイドライン
- `LICENSE_GUIDELINES.md` - 翻訳のライセンスコンプライアンス
