# 統合Pagesの本番公開・復旧手順

2026-09-05。利用者の本番デプロイ指示に基づく準備記録。実行結果は別途追記する。

## 公開方式

入れ子appの標準配信は、検証済みの統合成果物を既存Pages project `libx` の `main` branchへ配置する。Awesomeの公開パスは `/docs/awesome/` を維持する。独立Workerは実験用プレビューのままで、本番の入口に接続しない。

GitHub Actions `Deploy to Cloudflare Pages` を候補commitのrefに対して手動実行し、`deploy_target=production` を選ぶ。品質検査・全体ビルド・smokeに成功した同じrunのartifact IDを本番jobへ渡す。全ファイルのSHA-256・commit・容量を再検査し、次の順で切り替える。

1. Cloudflare APIでproject・production branch・成功済み現行deploymentを確認し、`before.json` に復旧先ID・URL・commit・domainを記録する。環境変数やAPI tokenは記録しない。
2. `pages-production-before-<run>-<attempt>` artifactを90日保存する。保存に失敗すれば公開しない。
3. 現行deployment IDが変わっていないことを読み直し、Wranglerで検証済み成果物を配置する。
4. APIの本番canonical deploymentのcommitを候補と照合し、`after.json` を保存する。公開後は配信URLの本文・資産・HEAD・別名・404を確認する。

CIはproduction実行同士を直列化する。ただし外部の手動更新に対する原子的な比較更新ではない。API読取と配置の間に管理画面や別のワークフローで本番を更新しない。公開結果が不明な場合は再配置せず、まずAPI・runログ・状態artifactを確認する。

## 復旧

不具合が見つかった場合、当該runの `pages-production-before-<run>-<attempt>` から `before.json` を取得する。Cloudflare管理画面の `libx` → Deploymentsで記録したIDの成功済みproduction deploymentを選び、Rollbackを実行する。実行前に現行IDが今回の `after.json` と一致することを確認し、別の公開を上書きしない。

APIの場合は `POST /accounts/{account_id}/pages/projects/libx/deployments/{before.deployment.id}/rollback` を使用する。復旧先は成功済みproduction deploymentに限られる。[Cloudflare公式API](https://developers.cloudflare.com/api/resources/pages/subresources/projects/subresources/deployments/methods/rollback/)

復旧後はcanonical deployment ID、公開入口・Awesome本文・資産・検索・ナビを確認する。デプロイ履歴と状態artifactを削除しない。90日を超えて保持する必要があればartifactを別途保管する。ローカルの移行前バックアップは、ここで記録する直前の本番deploymentとは別物である。

## 設定と準備検証

- GitHub `production` 環境を作成し、プレビューで実配信を確認したCloudflare account IDを環境secretへ登録した。API tokenは既存repository secretを使用する。
- コミット6031543の通常品質CI run 33963903690は成功。
- 本番状態取得のテストで誤branch、失敗deployment、commit不一致、準備後の本番変更、認証APIのredirect拒否、環境変数の非記録を確認した。
