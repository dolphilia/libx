# AGENTS.md

libxで作業するAIエージェント向けの共通指針。

## 応答と判断

- ユーザーへの応答は必ず日本語とし、変更点・確認結果・残件を根拠付きで簡潔に伝える。
- 最新のユーザー指示を優先し、対象作業の計画・設定・台帳を確認する。履歴や実験記録を現行方針として扱わない。
- 既存の承認は引き継ぎ、判断に必要な情報が不足する場合に確認する。未実施の確認を合格として報告しない。

## 構成

Astroとpnpmのモノレポ。実行環境・コマンドは [package.json](package.json)、ワークスペースは [pnpm-workspace.yaml](pnpm-workspace.yaml) を正本とする。

- `apps/`: 通常の文書サイトと `apps/<group>/<project>/` 形式の子サイト。
- `sites/`: ランディングなどのサイト。
- `packages/`: 共有UI・テーマ・設定・文書処理など。
- `templates/`: 新規サイト生成用の正規テンプレート。通常の配信対象には含めない。
- `scripts/`: 生成・検査・ビルド・運用の処理。`tests/` はテスト、`docs/` はガイド・計画・記録。

## 作業の進め方

1. 対象ファイル、関連実装、Git差分を確認する。ユーザーや他作業の変更を上書きせず、必要なら作業場所を分離する。
2. 既存の生成器・共有実装を使い、変更を対象範囲に絞る。新規サイトは正規テンプレートと作成器を使用し、依存関係はpnpmで管理する。
3. 関連する変更をまとめて検証する。本文やアプリは対象ビルド・内容検査、構造や命名の変更は関連する生成・整合性検査を行う。ガイド等の文章だけの変更はリンク・記載内容を確認する。
4. 共有実装は関連テストと複数アプリで確認し、テンプレート変更はテンプレートもビルドする。入力・依存・検査実装が同じ合格証拠を再利用し、変更や失敗に応じて確認範囲を広げる。
5. 変更点、実施した検証、未解決事項、必要な次の操作を報告する。案件の進捗は該当台帳へ記録し、本書へ追記しない。

## 主なコマンド

リポジトリルートで実行する。`<package-name>` は対象のpackage.jsonのname、`<project-id>` はappsからの相対パス（階層化されたサイトでは `group/project`）に置き換える。

| 用途 | コマンド |
| --- | --- |
| 依存関係 | `pnpm install` |
| 対象の開発サーバー | `pnpm --filter='<package-name>' dev` |
| 対象の統合ビルド | `pnpm build:selective --projects='<project-id>'` |
| 対象のサイドバー生成 | `pnpm build:sidebar-selective --projects='<project-id>'` |
| テンプレートの検証 | `pnpm build:template` |
| 全体の統合ビルド | `pnpm build -- --confirm` |
| 統合成果物のローカル確認 | `pnpm preview`（ビルド済みの `dist/` が必要） |

`pnpm dev` はapps配下が対象で、sites・templatesは含まない。`pnpm preview` は統合出力用のローカルサーバーであり、個別アプリのAstro previewとは別。サイドバー等の生成処理はファイルを更新するため、対象を絞って差分を確認する。

## 公開と継続運用

- 本番・外部プレビューは統合Cloudflare Pagesを使用する。Cloudflare Workersは開発・検証にも使用しない。ローカルはAstroの開発・プレビューまたは上記の統合プレビューを使う。ブラウザー内のService Workerはこの制限の対象外。
- 公開候補には対象の検証済み変更だけを含める。pushで外部プレビューが起動し得るため、[配信workflow](.github/workflows/cloudflare-pages-deploy.yml)と対象差分を確認する。
- 文書は原文コピーと翻訳をLibxで読める範囲で提供する。原文自体の完全性や元サイトの機能再現を要求せず、制限は注記・原典リンクで補う。Libxによる意味の欠落・誤訳と閲覧上の破損を確認する。
- 公式文書の追加・更新は[継続計画](docs/plans/CONTINUOUS_DOCUMENT_PROJECT_EXPANSION_PLAN.md)と[運用設定](docs/notes/project-expansion/POLICY.json)に従う。公開条件を満たした案件は、都度承認なしで公開デプロイ・公開後確認まで進める。この承認を無関係な変更へ拡張しない。
- 明示的な作業・公開停止指示を優先する。定期実行の設定は別途指示がある場合のみ行う。

詳細は [README.md](README.md)、[docsの索引](docs/README.md)、[テンプレート案内](templates/README.md)を必要に応じて参照する。[CLAUDE.md](CLAUDE.md)は補足資料とし、実装上の挙動は現行コード・設定で確認する。
