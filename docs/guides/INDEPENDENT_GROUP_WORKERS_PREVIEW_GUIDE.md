# 独立アプリグループのWorkerプレビュー

この機能は実験用。通常の配信方式は統合Cloudflare Pagesを維持する。外部Workerでの更新・障害・復旧の受け入れ検証はまだ完了していない。[計画](../plans/NESTED_APP_GROUPS_IMPLEMENTATION_PLAN.md)と[試作の検証記録](../notes/nested-app-migration/INDEPENDENT_DELIVERY_PROTOTYPE.md)を参照する。

## CIの入口

既存の `Deploy to Cloudflare Pages` workflowを手動実行し、次の `deploy_target` を選ぶ。独立配信処理は再利用workflow `group-workers-preview.yml` に分離している。pushやpull requestからWorker公開は起動しない。

| deploy_target | 動作 |
| --- | --- |
| `workers-prepare` | 品質検査、選択グループのビルド、検証用梱包をartifact化。Cloudflareへ接続しない |
| `workers-publish` | 同じ準備を行い、確認済み梱包SHAと一致した場合に公開 |
| `workers-rollback` | 復旧対象の本文・コードと現在世代の保持資産から梱包し、確認済みSHAと一致した場合に復旧 |
| `workers-reconcile` | 直前の梱包と未確定記録を引き継ぎ、配置先で候補版の稼働を照合。公開操作を再送しない |

| 入力 | 内容 |
| --- | --- |
| `worker_group` | group ID。初期値は `awesome` |
| `worker_expected_deployment` | 確認済みの現在の入口deployment ID。初回は `none` |
| `worker_package_sha` | 準備runで確認した `release-info.json` の `packageSha256`。公開・復旧に必須 |
| `worker_previous_run` | 直前の独立Worker公開または照合run ID。梱包と配置記録の引継ぎ元 |
| `worker_rollback_run` | 復旧対象の梱包を保存したrun ID。復旧準備・復旧操作で使用 |

同じgroupの準備から公開までを呼出元workflowのconcurrencyで直列化する。これはこのworkflowを通る操作の制御であり、管理画面や別のCIからの同時書換えを防ぐ仕組みではない。基点が変わった要求は拒否する。

## 初回公開と更新

1. 対象コミットを含むrefで `workers-prepare` を実行する。更新準備では `worker_previous_run` に直前の公開runを指定し、旧資産を引き継ぐ。
2. `worker-package-<group>` artifactの `release-info.json` と `package/release.json` を確認する。所属、公開パス、生成Worker名、本文・資産、外部SHAを確認する。
3. 同じref・前回run・基点を使い、確認したSHAを `worker_package_sha` に指定して `workers-publish` を実行する。再生成結果が違えばCloudflareへ配置する前に停止する。
4. 成功時の `worker-state-<group>` artifactにある `ci-result.json` のactive deployment IDを記録する。次の操作ではこのrunを引継ぎ元にする。`workers-prepare` だけのrunには公開状態artifactがないため、直前の公開runの代わりに指定しない。

Cloudflare認証は `preview` environmentの `CLOUDFLARE_ACCOUNT_ID` と `CLOUDFLARE_API_TOKEN` を用いる。Workerの版操作と状態読取に必要な権限が必要で、既存のPages用tokenにその権限があるとは限らない。権限不足を不存在と誤認せず停止する。

## 復旧

まず `workers-prepare` に現在の公開runと `worker_rollback_run` を指定する。この場合は本文を再ビルドせず、保存した旧梱包から復旧用梱包を作る。そのSHA・対象世代・保持資産を確認し、同じ入力と確認済みSHAで `workers-rollback` を実行する。

旧本文・ナビ・Workerコード・設定を戻し、開いたままの新HTMLが使うJS等を保持する。保持分も新しい復旧リリース目録に固定する。旧版IDを直接指定して入口だけ戻す操作とは異なる。

## 失敗と未確定記録

子の配置や検査に失敗した場合、既存入口を維持する。配置済み単位は次回に検査して再利用する。失敗したrunでも状態artifactが保存されている場合は、そのrunを引継ぎ元として使い、途中で得た配置記録を捨てない。

入口切替後の応答が失われた場合は未確定記録が残り、次の公開を拒否する。失敗runを指定して `workers-reconcile` を実行する。候補版が稼働していると確認できれば解消する。旧版が見えただけで自動再送はしない。

状態artifactは30日保持。配置記録・復旧用梱包はこの期限より長く運用するなら別途保管する。期限切れ・欠損・未知の既存Workerを自動的に採用しない。操作コピーとWranglerログは状態artifactから除外し、配置記録・未確定記録を引き継ぐ。記録を手で作り直して検査を回避しない。

## ローカルの操作

```bash
node scripts/experimental/group-workers.js --help
node scripts/experimental/group-workers.js package --group=awesome --source=.tmp/group-outputs/awesome --destination=.tmp/awesome-worker-package --preview
```

`verify`、`status`、`publish`、`rollback-package`、`reconcile` は同CLIのヘルプに示す。梱包ハッシュは生成時の出力から別途保存する。Cloudflareへの操作前に配信範囲の指示を確認する。Pagesプレビューへの承認は独立Workerへの配信承認として流用しない。


## 初回CIで認証設定により停止した場合

このCLIはaccount IDを明示してAPIを読む。Pages用Wranglerがaccount IDなしで動いていても、独立Worker CLIの設定完了とはみなせない。GitHubのpreview環境に `CLOUDFLARE_ACCOUNT_ID` が渡っていることを確認する。初回run 33959850978のattempt 1は空値でAPI初期化前に停止し、設定を補ったattempt 2は入口deployments読取のHTTP 403で停止した。いずれもWorker作成には進んでいない。

403の場合はtokenの対象アカウントと権限を確認する。公式APIの[配置読取](https://developers.cloudflare.com/api/resources/workers/subresources/scripts/subresources/deployments/methods/get/)はWorkers Scripts ReadまたはWrite等、[配置作成](https://developers.cloudflare.com/api/python/resources/workers/subresources/scripts/subresources/deployments/methods/create/)はWorkers Scripts Writeを要求する。今回の公開には読取だけでは不足する。既存Pages配信とtokenを共有する場合、Pages用権限を維持する。トークン値はチャットや検証メモに保存せず、必要な場合はGitHub secretへ設定する。

初期API読取より前またはその読取で停止し、外部変更なしとログ・コードから確認できた場合は、設定修正後に同じrunの失敗jobを再実行できる。アップロードや切替を開始した後の失敗はこの手順に流用せず、配置記録・未確定状態の引継ぎ手順を使う。

公開jobはNode.js 24を使用する。固定Wrangler 4.129.0はNode.js 22以上が必要で、アプリ準備ビルドのNode.js 20と同じ環境では起動できない。公開前のWrangler版確認stepでCLI起動を検査する。


## 初回Worker作成

未作成Workerへの `versions upload` はCLIが拒否する。初回だけ、同じWorker名へ本文・資産・bindingなしの503応答版を `deploy` し、作成版とコード・設定の識別情報を照合してbootstrap記録へ保存する。入口のworkers.devはこの段階では503を返す。本来の本文は通常の版アップロード・全件照合を通してから有効化する。既存公開がある更新では初期版へ戻さない。

初期作成の応答が失われて記録を保存できなかった場合は、未知の既存Workerとして停止する。作成記録のない版を手作業で正規の記録へ偽装しない。APIの実状態を確認して復旧方法を判断する。
