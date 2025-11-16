# トップページ分離の記録と現状（sites/landingがルート）

## ステータス概要
- `apps/` はドキュメントプロジェクト専用、`sites/landing` がトップページ（ルート `/`）を担う構成が適用済みです。
- `apps/top-page` は存在せず、`sites/landing` はパッケージ `sites-landing` としてビルド・デプロイされています。
- この文書は移行時の対応内容と検証ポイントをまとめ、今後の保守担当に現状把握の起点を提供するための記録です。

## 現在のアーキテクチャ・設定
### ワークスペース
- `pnpm-workspace.yaml` に `sites/*` を含め、`apps/*`（ドキュメント）と `sites/*`（ポータル）を並列に管理しています。

### ビルド処理
1. `scripts/build-integrated.js` は `apps/*` から各ドキュメントを `dist/docs/{project}` に集約し、`sites/landing` 出力を `dist/` のルート（`pathPrefix: ''`）として組み込んでいます。`project-template` はスキップされます。
2. `scripts/build-selective.js` も `apps/` と `sites/` の両方をスキャンし、`landing` を対象に入れた場合は `dist/index.html` を再生成します。`sites/landing` 以外のサイトは `dist/{site}` に配置されます。
3. サイドバー生成（`scripts/build-sidebar.js` / `build-sidebar-selective.js`）は `apps/*` のコンテンツのみを処理し、`sites/landing` 側を含めないため、トップページ側の構造が破綻する心配はありません。

### 自動化スクリプトとランディング設定
- `scripts/create-project.js` / `scripts/add-language.js` は新しいプロジェクトや言語登録時に `sites/landing/src/config/projects.config.json` を更新し、トップページ側の表示情報（アイコン・タグ・`supportedLangs`）と整合性を保ちます。
- `sites/landing/src/utils/project-auto-detector.ts` が `apps/` ディレクトリをスキャンして `project.config.json` から表示名・説明・URL・フォールバックURLを生成し、トップページのカード一覧を動的に構築します。
- `sites/landing/src/config/projects.config.json` がトップページのカスタマイズポイントです。手動で `icon`/`tags`/`isNew` や `supportedLangs` を追加したら、`pnpm --filter=sites-landing dev` や `pnpm build` で反映確認してください。

### デプロイと `dist` 構造
- ビルド後、`dist/index.html` は `sites/landing` の出力、`dist/docs/{project}` はそれぞれのドキュメント出力です。ランディングページを Cloudflare Pages で公開する際はこの `dist` を `wrangler pages deploy dist --project-name libx` でアップロードします。
- `sites/landing` をトップページとすることで、`apps/` と `sites/` を明確に切り分け、小規模なトップページ更新がドキュメントのビルドプロセスを乱さないようになっています。

## 維持・検証チェックリスト
1. `pnpm --filter=sites-landing dev` でトップページが `http://localhost:4321/` に表示されるか確認する。
2. `pnpm build` 後に `dist/index.html`（landing）と `dist/docs/{project}` が揃っていることを確認し、`dist/docs` 以下に予期せぬファイルが混ざっていないか点検する。
3. `pnpm build:selective --projects=landing` を使い、トップページのみ再ビルドした際に `dist/index.html` が更新され、他の `dist/docs` 配下に影響が出ないことを確認する。
4. `scripts/create-project.js` / `scripts/add-language.js` により `sites/landing/src/config/projects.config.json` を手動・自動で更新したら、デプロイ前にファイル内容と `pnpm --filter=sites-landing dev` の表示を合わせて確認する。
5. トップページの自動検出は `sites/landing/src/utils/project-auto-detector.ts` の `scanAppsDirectory()` により `apps/` を走査しているため、新規 `apps/{project}` を追加したら `project.config.json` の `basic.baseUrl` などを整えた上で `pnpm build:sidebar` → `pnpm build` を実行し、landing 側が新規カードを拾えているか確認する。
6. `wrangler pages deploy dist --project-name libx` を実行する前に `dist` を `ls dist` などで確認し、ランディング（`index.html`）とドキュメント（`docs/` 以下）が期待通りの構成になっているかチェックする。

## 今後の対応指針
- 新しいポータルを追加する際は `sites/{site}` に配置し、ビルドスクリプト内 `destDir`/`pathPrefix` のロジックをコピーして該当サイトを扱うように調整してください。
- `sites/landing` 側のコードが `apps/top-page` のようなハードコーディングに戻らないよう、`apps/` を解決するユーティリティや `project-auto-detector` の再利用を心がけること。
- ドキュメントや README にトップページへの参照を追加する場合は必ず `sites/landing` を記載し、`apps/` 側から統合的なトップページ説明を削除・移行しておいてください。
