# ドキュメントディレクトリの目次

`docs/` 以下にはプロジェクト運用やドキュメント作成の指針をまとめた Markdown ファイルが置かれており、各サブディレクトリが担当するテーマごとに分類されています。作業を始める前にこの目次を一読し、該当するディレクトリへ移動してください。

## ガイド (`docs/guides`)
- `BACKUP_OPERATIONS_GUIDE.md` – バックアップと復旧に関する運用手順
- `BUILD_AND_DEPLOYMENT_GUIDE.md` – ビルド／デプロイのフローと注意点
- `DOCUMENT_ADDITION_GUIDE.md` – 新しいドキュメントを追加する際のルール
- `LANGUAGE_ADDITION_GUIDE.md` – 新しい言語を追加するための手順
- `NEW_PROJECT_CREATION_GUIDE.md` – 新規ドキュメントプロジェクトの作成方法
- `VERSION_ADDITION_GUIDE.md` – バージョンを追加するプロセス
- `PERFORMANCE_MEASUREMENT_GUIDE.md` – 読者性能・管理者性能の測定条件と予算運用
- `UPSTREAM_DOCUMENT_IMPORT_AND_TRANSLATION_GUIDE.md` – 外部公式文書の取得・定本化・翻訳・検証手順

## ノート (`docs/notes`)
- `LIBX_CONCEPT_AND_DIRECTION_RESEARCH.md` – libx のコンセプト・方針・方向性に関する調査と推論
- `PROJECT_PRINCIPLES_COMPLIANCE_AUDIT.md` – 正式原則を基準にしたリポジトリ全体の準拠状況と改善点の再調査
- `PROJECT_PRINCIPLES_COMPLIANCE_IMPLEMENTATION_LOG.md` – 正式原則準拠改善計画の実施内容と検証結果
- `LIBX_USABILITY_AND_MARKDOWN_IMPROVEMENT_IMPLEMENTATION.md` – 使いやすさ、閲覧性、Markdown／MDX改善の実施内容と検証結果
- `PERFORMANCE_BASELINE_2026-08-11.md` – 正式原則準拠改善後の性能基準値
- `DEPLOYMENT_FILE_COUNT_SCALING_RESEARCH.md` – デプロイ先のファイル数制限、Pages／Workers／R2と将来の分割方針の調査
- `document-import/` – 外部公式文書の取得・整形・定本化・翻訳パイロットの逐次記録

## ADR (`docs/adr`)
- `README.md` – ADRの対象、命名、ステータス、承認手順
- `0000-template.md` – 新しいADRを作成するためのテンプレート
- `0001-adopt-project-principles.md` – libxの正式原則を採用した決定記録
- `0002-separate-documentation-template.md` – 正規テンプレートを配信アプリから分離した決定記録
- `0003-canonical-project-configuration.md` – プロジェクト設定と既定値の正本
- `0004-generated-artifact-policy.md` – サイドバーとService Workerの生成物方針
- `0005-package-boundaries-and-performance-budgets.md` – 公開境界、Astro依存、性能予算
- `0006-deployment-asset-budget-and-edge-compression.md` – デプロイ成果物予算と配信基盤による圧縮
- `0007-portable-semantic-markdown.md` – 移植可能な意味的Markdown表現
- `0008-site-scoped-static-search.md` – サイト・版・言語別の遅延読込静的検索
- `0009-synchronize-doc-site-layouts.md` – 正規テンプレートからのレイアウト同期

## 計画 (`docs/plans`)
- `CODE_QUALITY_IMPROVEMENT_PLAN.md` – コード品質改善の実施計画と受け入れ基準
- `PROJECT_PRINCIPLES_COMPLIANCE_IMPROVEMENT_PLAN.md` – 正式原則準拠監査で確認した課題の優先度付き改善計画
- `RTL_SUPPORT_PLAN.md` – ドキュメントサイトとランディングのRTL対応計画
- `TOP_PAGE_RELOCATION_PLAN.md` – トップページ移設に向けた計画案
- `DEPLOYMENT_FILE_COUNT_SCALING_PLAN.md` – ファイル数監視、不要成果物削減、将来のサイト分割計画
- `UPSTREAM_DOCUMENT_IMPORT_TRANSLATION_PILOT_PLAN.md` – GLFWを起点とする外部公式文書の取得・整形・定本化・翻訳パイロット計画
- `LUA_DOCUMENT_IMPORT_TRANSLATION_PILOT_PLAN.md` – Lua 5.5公式文書を対象とする二例目の取得・定本化・翻訳パイロット計画
- `LIBX_USABILITY_AND_MARKDOWN_IMPROVEMENT_PLAN.md` – Luaパイロット後の使いやすさ、閲覧性、Markdown／MDX改善の実装計画

## 仕様 (`docs/spec`)
- `PROJECT_PRINCIPLES.md` – libx のコンセプト・方針・方向性・開発原則
- `LICENSE_GUIDELINES.md` – ライセンスに関するガイドライン

ドキュメントの追加や更新を行った際は目次にある該当セクションも併せて確認し、必要であればリンクや説明を補完してください。
