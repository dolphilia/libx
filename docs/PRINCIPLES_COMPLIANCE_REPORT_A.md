# libx PROJECT_PRINCIPLES 準拠レポート

**調査日**: 2025-11-02  
**対象**: libx モノレポ全体  
**目的**: `docs/PROJECT_PRINCIPLES.md` に掲げられた原則の遵守状況を評価し、改善余地を明確化する。

---

## 1. 原則の要点
- モノレポ構成で共有 UI / テーマ / i18n / バージョニングを一元管理する。
- 非エンジニアでも扱えるファイルベース運用と MDX ファーストを最優先とし、必要な設定は最小限に抑える。
- 意思決定は「安全性 ≥ 直感性」「作者体験 ≥ 実装者都合」「自動化 ≥ 手作業」を軸に行う。
- ディレクトリと命名規則 (`NN-` 連番) によりバージョン・言語・カテゴリを表現し、サイドバー生成や路線は自動化する。
- 著作権・ライセンス表記や翻訳差分、バージョン差分は共有レイヤーで半自動化し、失敗時には行動可能なメッセージを返す。

---

## 2. 遵守が確認できたポイント
- **モノレポ設計と共有資産の一元化**  
  `pnpm-workspace.yaml:1` と `package.json:5` で apps / packages をワークスペース管理し、各アプリは `apps/sample-docs/astro.config.mjs:37` のエイリアス設定を通じて共有 UI・テーマ・i18n・バージョニングを活用している。
- **ファイルベース管理と命名規則の徹底**  
  テンプレートと実プロジェクト双方で `apps/project-template/src/content/docs/v1/en/01-guide/01-getting-started.mdx:1` や `apps/sample-docs/src/content/docs/v2/en/02-components/02-icons.mdx:6` のように `NN-slug` 形式を守り、Frontmatter も最小限に保たれている。
- **作者体験を支える自動化ガイドと CLI**  
  `docs/DOCUMENT_ADDITION_GUIDE.md:5` では自動化スクリプトの利用を推奨し、`scripts/create-document.js:24` などの CLI がインタラクティブな質問や構造解析を提供して作者体験を最適化している。
- **ライセンス・翻訳の共有レイヤー**  
  `packages/ui/src/components/LicenseAttribution.astro:52` と `packages/i18n/src/index.ts:7` によりライセンス表記と文言翻訳が共通化され、手作業のばらつき抑制とアクセシビリティ確保が図られている。

---

## 3. 改善が必要なリスクと課題
- **生成／同期スクリプトに dry-run が存在せず安全装置が不十分**  
  `scripts/create-project.js:35`・`scripts/add-language.js:170`・`scripts/create-version.js:27` では主要オプションに dry-run がなく、`scripts/build-integrated.js:198` は既存 `dist/` を即時削除する。原則の「安全性 ≥ 直感性」「自動化 ≥ 手作業」に対して、検証前に副作用が発生するリスクが残る。
- **カテゴリ定義が言語間で不整合**  
  `apps/sample-docs/src/config/project.config.json:19` の英語カテゴリと `apps/sample-docs/src/config/project.config.json:29` の日本語カテゴリでキー差異 (`api` / `examples`) があり、全言語で同一構造とする原則に反している。翻訳漏れ検出が必要。
- **新規カテゴリ追加時の翻訳同期不足**  
  `apps/test-verification/src/content/docs/v2/en/02-api-reference/01-api-overview.mdx:1` に対し `apps/test-verification/src/config/project.config.json:21` では `02-api-reference` の表示名が未定義で、作者体験上 slug が露出する恐れがある。
- **サイドバー生成がバージョンごとの言語差異を考慮していない**  
  `scripts/build-sidebar.js:123` で最初のバージョンから検出した言語を全バージョンに適用しており、バージョンごとに対応言語が異なるケースで 404 が発生しうる。

---

## 4. 推奨アクション
1. 主要スクリプトに `--dry-run` や削除前確認、バックアップリストア手順を追加し、安全第一の実行フローを提供する（対象: `scripts/create-project.js:35`、`scripts/add-language.js:170`、`scripts/create-version.js:27`、`scripts/build-integrated.js:198`）。
2. カテゴリ構造と翻訳キーの整合性を検証するユーティリティを導入し、`apps/sample-docs/src/config/project.config.json:19` と `apps/sample-docs/src/config/project.config.json:29` の差分を解消する。
3. カテゴリや言語追加時に `project.config.json` を自動更新するロジックを補強し、`apps/test-verification/src/config/project.config.json:21` のような翻訳漏れを防ぐ。
4. サイドバー生成時にバージョン単位で言語を再検出し、差異がある場合は警告やスキップを実施する（`scripts/build-sidebar.js:123`）。

---

## 5. 追加で検討したい改善
- バックアップディレクトリ `.backups/` の運用方法を README などで明文化し、`scripts/add-language.js:125` が生成する成果物の取り扱いを作者に通知する。
- 一覧装飾設定に存在しないプロジェクト `libx-docs` が残っており、トップページの同期手順が誤解される恐れがある（`apps/top-page/src/config/projects.config.json:95`）。
- 作者向けドキュメント内のタイポを修正し、非エンジニアにも負担のない文章品質を担保する（`docs/DOCUMENT_ADDITION_GUIDE.md:37`）。

---

本レポートで挙げた改善を実施することで、PROJECT_PRINCIPLES.md が掲げる「安全で直感的な作者体験」と「自動化による再現性」をさらに強固にできる見込みである。
