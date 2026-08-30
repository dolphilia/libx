# Awesome import status

計画状態: 全フェーズ完了。次回は`OPERATIONS.md`に従い、新しいsnapshot IDで上流差分を取り込む。

| フェーズ | 状態 | 状態変更日 | 根拠成果物 | 次の一手 |
| --- | --- | --- | --- | --- |
| 0 判定規則 | completed | 2026-08-20 | `SOURCES.lock.json`、`SOURCE_MANIFEST.md`、ADR-0011、`awesome:validate-records` | 完了 |
| 1 発見 | completed | 2026-08-20 | `DISCOVERY_CLOSURE_REPORT.json`、`ADMIN_DECISION.json` | 完了 |
| 2 縦断パイロット | completed | 2026-08-20 | `PILOT_SELECTION.md`、単一アプリの機械検査結果 | 人手内容レビューはフェーズ10へ延期 |
| 3 サイト・予算 | completed | 2026-08-20 | `SINGLE_APP_ARCHITECTURE.md`、`SITE_BUDGET_DECISION.md`、`CONTENT_PARTITIONS.json`、`URL_MIGRATIONS.json`、`awesome:validate-assets` | 完了 |
| 4 全固定・法務 | completed | 2026-08-20 | `LOCK_CLOSURE_REPORT.json`、`SOURCES.lock.json`、`LICENSE_DECISIONS.json`、`awesome:finalize-lock` | 完了 |
| 5 英語定本 | completed | 2026-08-20 | `apps/awesome/src/awesome-content/`、`CONTENT_MAP.json`、`EXTERNAL_LINK_REPORT.json`、`awesome:validate-canonical`、`awesome:publish --check` | 完了 |
| 6 翻訳準備 | completed | 2026-08-20 | `MANUAL_TRANSLATION_PLAN.md`、`TRANSLATION_GUIDE.md`、`TRANSLATION_TERMS.json`、`TRANSLATION_REVIEW_LOG.json`、`awesome:validate-translation-pilots` | 完了 |
| 7 日本語翻訳 | completed | 2026-08-22 | `BATCH_STATUS.json`、`awesome:validate-translation --require-complete`、`awesome:validate-pipeline-status` | 完了 |
| 8 全体機械検査 | completed | 2026-08-22 | `MACHINE_AUDIT.json`、`FINAL_REVIEW_QUEUE.json`、`awesome:audit-machine --check`、英日365/365、735ページビルド | 完了 |
| 9 Preview・運用準備 | completed | 2026-08-22 | Cloudflare Pages Preview `0d8fa21f-221b-46a5-b2fe-581aac92212b`、統合成果物2,059ファイル・228.94 MiB・最大5.80 MiB、外部HTTP・実ブラウザ合格、`OPERATIONS.md`、`PREVIEW_VERIFICATION.md` | 完了 |
| 10 最終人手内容レビュー・公開 | completed | 2026-08-22 | `FINAL_REVIEW_RESULTS.json`（416/416包括合格）、全37バッチ`human-reviewed`、Production `01c0fffb-b509-4dfd-a187-6297c78e980a`、`PRODUCTION_VERIFICATION.md` | 完了 |

機械可読な進捗の正本は状態JSON、ロックファイル、生成済みページ、検査結果である。ここには集計値を手入力しない。
