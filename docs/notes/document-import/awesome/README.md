# Awesome import status

次の作業: フェーズ7として英語定本を一ページずつ日本語へ翻訳し、最大10ページのバッチごとに構造検査を行う。固定ライセンス本文を確認できた英語定本365ページは単一`apps/awesome`へ統合済みだが、定本レビューと日本語翻訳の完了を意味しない。人手による内容レビューは途中工程では行わず、全生成・翻訳・機械検査・Preview検証後の最終フェーズ10で実施する。

| フェーズ | 状態 | 状態変更日 | 根拠成果物 | 次の一手 |
| --- | --- | --- | --- | --- |
| 0 判定規則 | completed | 2026-08-20 | `SOURCES.lock.json`、`SOURCE_MANIFEST.md`、ADR-0011、`awesome:validate-records` | 完了 |
| 1 発見 | completed | 2026-08-20 | `DISCOVERY_CLOSURE_REPORT.json`、`ADMIN_DECISION.json` | 完了 |
| 2 縦断パイロット | completed | 2026-08-20 | `PILOT_SELECTION.md`、単一アプリの機械検査結果 | 人手内容レビューはフェーズ10へ延期 |
| 3 サイト・予算 | completed | 2026-08-20 | `SINGLE_APP_ARCHITECTURE.md`、`SITE_BUDGET_DECISION.md`、`CONTENT_PARTITIONS.json`、`URL_MIGRATIONS.json`、`awesome:validate-assets` | 完了 |
| 4 全固定・法務 | completed | 2026-08-20 | `LOCK_CLOSURE_REPORT.json`、`SOURCES.lock.json`、`LICENSE_DECISIONS.json`、`awesome:finalize-lock` | 完了 |
| 5 英語定本 | completed | 2026-08-20 | `apps/awesome/src/awesome-content/`、`CONTENT_MAP.json`、`EXTERNAL_LINK_REPORT.json`、`awesome:validate-canonical`、`awesome:publish --check` | 完了 |
| 6 翻訳準備 | completed | 2026-08-20 | `MANUAL_TRANSLATION_PLAN.md`、`TRANSLATION_GUIDE.md`、`TRANSLATION_TERMS.json`、`TRANSLATION_REVIEW_LOG.json`、`awesome:validate-translation-pilots` | 完了 |
| 7 日本語翻訳 | in_progress | 2026-08-20 | `BATCH_STATUS.json`、`awesome:validate-translation`、`awesome:validate-pipeline-status` | 全365ページを`translation-validated`へ進める |
| 8 全体機械検査 | pending | - | - | - |
| 9 Preview・運用準備 | pending | - | - | - |
| 10 最終人手内容レビュー・公開 | pending | - | `REVIEW_CHECKLIST.md` | 全機械ゲート合格後にのみ開始する |

機械可読な進捗の正本は状態JSON、ロックファイル、生成済みページ、検査結果である。ここには集計値を手入力しない。
