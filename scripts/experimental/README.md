# 独立Workers実験の終了

2026-09-06の利用者方針: 本番・外部プレビューは統合Cloudflare Pagesで運用し、開発・検証を含めCloudflare Workersを使用しない。ローカル開発はAstroの開発／プレビューサーバーを使う。ブラウザー内のService Worker（sw.js）はこの制限の対象外。

`group-workers.js` と `group-workers-ci.js` のCLI入口は停止済み。実験用コードと模擬テストは過去の設計・検証根拠として保持する。これらを使ったWorkerの再作成・公開は行わない。保存済みのstate・receiptは削除前の履歴であり、現在の外部状態ではない。
