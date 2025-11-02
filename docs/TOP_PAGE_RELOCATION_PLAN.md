# トップページ分離計画（sites/landing への移行）

## 目的
- `apps/` 配下をドキュメント専用にして命名の一貫性を高める。
- トップページを独立したサイト群（`sites/`）として扱い、将来的な追加ポータルの拡張余地を確保する。
- 特例処理に依存しているスクリプト類を整理し、保守コストを削減する。

## 対応方針
1. 既存の `apps/top-page` を `sites/landing` に移設し、パッケージ名を `sites-landing` に変更。
2. `pnpm-workspace.yaml` に `sites/*` を追加し、`apps/` をドキュメント群、`sites/` をポータル群として明示。
3. トップページ関連スクリプト・ドキュメント内のパスを新ディレクトリ構造に合わせて更新。
4. `apps/` スキャン処理からトップページの除外条件を削除し、`sites/` 配下を別ルートとして扱う。

## 作業ステップ
1. **ディレクトリ再配置**
   - `sites/landing` ディレクトリを作成し、`apps/top-page` の内容を移動。
   - `package.json` の `name` を `sites-landing` に変更し、新パスを基準にビルドが通るか確認。
   - `.gitignore` などでパスに依存する項目がないか確認。
2. **ワークスペース設定更新**
   - `pnpm-workspace.yaml` へ `sites/*` を追加。
   - 既存のフィルタ利用箇所（例: `pnpm --filter=top-page`）を `pnpm --filter=sites-landing` に更新。
3. **自動検出系ユーティリティの改修**
   - `sites/landing/src/utils/project-auto-detector.ts`（旧 `apps/top-page/...`）で `scanAppsDirectory` の `top-page` 特例を削除。
   - 必要に応じてルート解決ロジックを調整し、`sites/` 配下からでも `apps/` を正しく参照できることを検証。
4. **統合ビルド系スクリプトの改修**
   - `scripts/build-integrated.js` で `sites/landing` を個別に読み込み、`apps/` からはドキュメントのみを処理するよう更新。
   - `scripts/build-selective.js`／`scripts/build-sidebar.js`／`scripts/build-sidebar-selective.js` の除外リストを整理し、`sites` 系を別処理に分岐。
   - `destDir`／`pathPrefix` の決定処理から `top-page` 条件分岐を削除し、`sites` 専用ハンドリングへ移行。
5. **自動化スクリプトの改修**
   - `scripts/create-project.js` のトップページ設定更新パスを `sites/landing/src/config/projects.config.json` へ変更。
   - `scripts/add-language.js` のトップページ設定更新処理も同様に更新。
6. **ドキュメント更新**
   - `README.md`、`docs/*GUIDE.md`、`CLAUDE.md` などで `apps/top-page` と記載されている箇所を `sites/landing` に更新。
   - `pnpm --filter` 例やファイル構造図を新構成に合わせて更新。
   - `apps/top-page/README.md` を新パスに合わせて `sites/landing/README.md` として更新。
7. **検証**
   - `pnpm install`（必要な場合）後、`pnpm --filter=sites-landing build` と `pnpm build` を実行し、統合ビルドが新構成で成功することを確認。
   - サイドバー生成スクリプトと新規プロジェクト作成スクリプトを試験し、トップページ設定が正しく更新されるかを確認。

## リスクとフォローアップ
- **スクリプトのパスハードコーディング**: 参照漏れでビルドが失敗する可能性があるため、関連スクリプトの Jest ないし手動実行で検証する。
- **CI/CD 設定**: Cloudflare Pages 等のデプロイ設定で `apps/top-page` を前提としている場合、デプロイパイプラインの更新が必要。
- **ドキュメントの整合性**: ガイドライン更新漏れがあるとコントリビューターが古いパスを参照する恐れがあるため、レビュー時にチェックリストを作成。

## 完了条件
- `apps/` 配下からトップページが完全に除去され、`sites/landing` へ移行済み。
- 自動検出および統合ビルドスクリプトで特例なしにドキュメントとポータルが区別できる。
- 新規プロジェクト追加・言語追加の自動化スクリプトが新パスで正常に動作する。
- 主要ドキュメントが新構成を案内している。
