# ドキュメントサイト標準テンプレート

このディレクトリは、新しい libx ドキュメントサイトを生成するための正規テンプレートです。配信対象のアプリではないため `apps/` から分離してあります。削除・移動・必須構造の破損は自動テストで検出されます。

## 用途

- `pnpm create:project <name> <英語名> <日本語名>` のコピー元
- 共有パッケージ、ルーティング、i18n、バージョン管理を組み合わせた最小実装
- 共有機能を変更した際のテンプレート互換性確認

## 主な構造

```text
templates/docs-site/
├── astro.config.mjs
├── package.json
├── public/
│   ├── favicon.svg
│   ├── sw.js
│   └── sidebar/
└── src/
    ├── config/project.config.jsonc
    ├── content/docs/v1/{en,ja}/01-guide/01-getting-started.mdx
    ├── layouts/
    ├── pages/
    └── styles/global.css
```

## 検証

```bash
# テンプレート自身のサイドバー生成とビルド
pnpm build:template

# 必須構造と新規アプリへの複製・設定変換を検査
pnpm test:runtime

# リポジトリ全体の品質確認（上記を含む）
pnpm check
```

テンプレートを変更した場合は `pnpm build:template` を必ず実行してください。通常の `pnpm build`、`pnpm build:separate`、`pnpm build:selective` は `apps/` の配信対象だけを扱います。

## 新規サイトの作成

```bash
pnpm create:project my-docs "My Documentation" "私のドキュメント"
```

生成スクリプトはこのディレクトリを `apps/my-docs` へコピーし、`package.json`、`astro.config.mjs`、`src/config/project.config.jsonc` をサイト用に更新します。別テンプレートを追加した場合は `--template=<templates直下の名前>` で指定できます。

手動コピーが必要な場合は、生成物や依存関係を含めないよう注意してください。

```bash
cp -R templates/docs-site apps/my-docs
```

コピー後は少なくともパッケージ名、`paths.projectSlug`、表示名、説明、ライセンス情報を更新してください。通常は自動生成スクリプトを使用します。

## 保守ルール

- このディレクトリは生成元であり、実サイト固有の内容を追加しません。
- `node_modules`、`dist`、`.astro` などの生成物はコピー対象外です。
- 共通機能は可能な限り `@docs/*` パッケージへ置き、テンプレート内の重複を避けます。
- 必須ファイルを変更する場合は `tests/runtime/docs-site-template.test.js` も更新します。
