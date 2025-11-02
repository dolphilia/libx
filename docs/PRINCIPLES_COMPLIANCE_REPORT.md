# libx PROJECT_PRINCIPLES 準拠統合レポート

- 調査日: 2025-02-14
- 調査対象: libx モノレポ全体（`apps/`, `packages/`, `scripts/`, `docs/`）
- 参照資料: `docs/PROJECT_PRINCIPLES.md`, `docs/PRINCIPLES_COMPLIANCE_REPORT_A.md`, `docs/PRINCIPLES_COMPLIANCE_RERPOT_B.md`
- 補足: チームBレポートは空ファイルだったため（`docs/PRINCIPLES_COMPLIANCE_RERPOT_B.md`）、原則文書と実装を再確認して一次情報で補完した。

## 1. 総括
- モノレポ構成・共有パッケージ活用・MDXファーストの方針は原則通り維持されており、作者体験向上のための自動化も機能している。
- 一方で、安全性と整合性を担保する仕組みが一部未整備であり、dry-run 不在や翻訳構造の非対称が「安全性 ≥ 直感性」「一元化 ≥ 個別最適」の原則に抵触しかねない。
- 自動化スクリプトは著作権・翻訳・バージョン運用を支援するが、成果物の同期や検証を補うワークフローの明文化が不足している。

## 2. 原則遵守が確認できた主なポイント
- **モノレポと共有資産の一元化**  
  ワークスペース定義とアプリケーションのエイリアスにより、共有 UI / テーマ / i18n / バージョニングが再利用されている（pnpm-workspace.yaml:1、apps/sample-docs/astro.config.mjs:37）。
- **ファイルベース管理と命名規則**  
  ドキュメントは `NN-slug` 規則と最小 Frontmatter で揃えられており、MDX ファイルだけで基本執筆が完結する（apps/sample-docs/src/content/docs/v2/en/02-components/02-icons.mdx:1）。
- **作者体験重視の自動化フロー**  
  ドキュメント追加ガイドが自動化スクリプトの利用を前提に整理され、対話的にカテゴリ分析や採番を行う CLI が整備されている（docs/DOCUMENT_ADDITION_GUIDE.md:3、scripts/create-document.js:69）。
- **著作権・多言語対応の共有レイヤー**  
  ライセンス表記は共通コンポーネントで自動生成され、i18n テンプレートと連携して抜け漏れを防いでいる（packages/ui/src/components/LicenseAttribution.astro:43）。
- **意思決定のガイドラインを支えるメッセージ設計**  
  CLI 出力が統一された日本語ラベルで整備され、非エンジニアの操作を支援する方針が徹底されている（scripts/logger.js:1）。

## 3. 原則逸脱・リスク領域（重大度順）
- **High: 破壊的操作の安全装置不足**  
  主要スクリプトが `--dry-run` や明示的確認なく書き込み・削除を行っており、想定外の副作用が即時反映される（scripts/create-project.js:226、scripts/document-utils.js:42、scripts/build-integrated.js:198）。安全性優先の原則に反する。
- **High: カテゴリ翻訳の不整合**  
  多言語カテゴリのキーが言語間でズレており、並列構造維持の原則を破っている（apps/sample-docs/src/config/project.config.json:18）。この状態で自動生成を走らせると整合性が崩れる。
- **Medium: 新規カテゴリ追加時の翻訳同期不足**  
  `apps/test-verification` の `02-api-reference` など新ディレクトリが設定ファイルで解決されず、作者にスラッグが露出する恐れがある（apps/test-verification/src/content/docs/v2/en/02-api-reference/01-api-overview.mdx:1、apps/test-verification/src/config/project.config.json:18）。
- **Medium: サイドバー生成がバージョン固有の言語差異を考慮しない**  
  言語検出が常に最初のバージョンを参照しており、多言語構成がバージョン間で異なるケースで 404 や欠落が発生し得る（scripts/build-sidebar.js:123）。
- **Low: バックアップ出力の運用ガイド不足**  
  言語追加スクリプトが `.backups/` に成果物を保存するが、ユーザー向けドキュメントに取り扱い手順が記載されていない（scripts/add-language.js:126）。整理されないとストレージ肥大・復元手順の属人化を招く。
- **Process: コンプライアンスレポートの引き継ぎ不備**  
  チームBのレポートが空で共有され、レビューの継続性が失われている（docs/PRINCIPLES_COMPLIANCE_RERPOT_B.md）。結果として改善提案の重複や抜け漏れリスクが高まる。

## 4. 推奨アクション
1. **安全装置の追加**  
   生成・同期系スクリプトに `--dry-run` / `--confirm` を実装し、削除前バックアップとロールバック導線を提供する（scripts/create-project.js:226、scripts/build-integrated.js:198）。  
   - 進捗: ✅ 完了。`scripts/safety-utils.js:1` を新設し、`scripts/create-project.js:22`・`scripts/build-integrated.js:25`・`scripts/document-utils.js:43` へ導入して dry-run／確認フローとバックアップ作成を実装済み。
2. **カテゴリ構造の正規化**  
   `supportedLangs` 全言語でカテゴリキーが一致するよう検証スクリプトを追加し、既存差分を是正する（apps/sample-docs/src/config/project.config.json:18）。
3. **設定ファイルの自動同期**  
   ドキュメント作成・コピー時に `project.config.json` のカテゴリ翻訳を更新する仕組みを CLI に組み込み、スラッグ露出を防止する（scripts/create-document.js:69、apps/test-verification/src/config/project.config.json:18）。
4. **サイドバー生成ロジックの改善**  
   バージョンごとに対応言語を再検出し、足りない言語は警告を出してスキップするなどフェイルセーフを実装する（scripts/build-sidebar.js:123）。
5. **バックアップ運用ガイドの整備**  
   `.backups/` ディレクトリの用途・削除タイミング・復元手順を作者向けドキュメントに追記し、ストレージ管理を標準化する（scripts/add-language.js:126、docs/DOCUMENT_ADDITION_GUIDE.md:3）。
6. **レビュープロセスの可視化**  
   コンプライアンスレポート提出フォーマットとチェックリストを定義し、空レポート対策と改善事項のトレーサビリティを担保する（docs/PRINCIPLES_COMPLIANCE_RERPOT_B.md）。

## 5. 今後のモニタリング指標
- `scripts/` 配下の主要 CLI に dry-run とバリデーションが実装・テストされているか。
- カテゴリキー差分検出ジョブ（CI もしくは pre-commit）が導入され、全プロジェクトでゼロ差分を維持できているか。
- サイドバー生成が言語／バージョン差異に追従し、404 監視に異常が出ていないか。
- バックアップフォルダの肥大化や未削除状態が継続していないか。
- コンプライアンスレポートの更新履歴が連続し、未記入ファイルが発生していないか。

---
本レポートは既存調査結果を踏まえつつ、PROJECT_PRINCIPLES の各条項を最新版実装に照らして再検証したものです。上記アクションを優先度順に対応することで、「安全で直感的な作者体験」と「一元化された自動化基盤」の実効性をさらに高められます。
