# 統合Pagesの本番公開・復旧手順

2026-09-05。利用者の本番デプロイ指示に基づく公開手順と実行記録。

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

## 本番公開結果

[run 33966491244](https://github.com/dolphilia/libx/actions/runs/33966491244)が成功し、コミット `472bc7f969b57f571a4e6587a90f0e6b12f9bda7` を公開した。本番は [libx.dev](https://libx.dev/docs/awesome/)、固定URLは [9b0b5454.libx.pages.dev](https://9b0b5454.libx.pages.dev/docs/awesome/) 。APIで本番canonical deploymentと候補commitの一致を確認した。

- 公開deployment: `9b0b5454-7424-4665-897d-b956fbc20afd`
- 直前の復旧先: `14e20cca-afbc-45f7-9243-c7029c6b7080`、commit `f150c2d61d230e9a79d41ed8eb9d797f14e17ba7`
- 成果物: 2,526ファイル、194,378,646 bytes（185.37 MiB）、artifact `9969723976`
- 品質job: 581秒。unit 27件・runtime 211件、コンテンツ検査・全12appビルド・smoke・容量検査が成功。今回は全appを再ビルドし、ビルド再利用は0件。
- 公開job: 55秒。CLIのアップロードは4件、既存2,522件、アップロード処理1.19秒。送信byte数はログにない。全体ビルドや公開全体が1.19秒だったという意味ではない。
- 状態artifact: `9969740103`。公開前に別途保存した復旧先artifact: `9969737413`。

[配信記録](./pages-production-deployment.json)にAPI状態、artifactハッシュ、各stepの時間を保存した。[ブラウザー記録](./pages-production-browser.json)で既存タブの再読込・検索・本文・言語切替・モバイル表示を確認した。

公開は品質ブランチのcommitを指定した手動実行であり、Gitの `main` へのマージは行っていない。後続の記録更新だけで本番を再配置する必要はない。独立Workerの更新・部分失敗・競合・キャッシュ・旧資産保持・復旧の受け入れ検証は引き続き別項目として残る。

## 配信内容の照合結果

[照合結果](./pages-production-validation.json)に対象と判定方法を記録した。`libx.dev` の全2,526ファイルを取得し、2,020件はCI成果物のSHA-256と完全一致。残る506件も固定デプロイURLでは原文のSHA-256と一致した。本番ドメイン側では442件がHTTP→HTTPSの書き換えだけ、64件がメール保護表現（HTTPS書き換えを含む場合あり）だけだった。保護表現を復元し、元のHTTP箇所のHTTPS化だけを許容すると、それ以外の全バイトが一致した。説明できない差分は0件。

これはCloudflareの[自動HTTPS書き換え](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/automatic-https-rewrites/)と[メールアドレス保護](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/)の仕様に一致する観測である。管理画面のzone設定値は読み取っておらず、保護設定を変更してはいない。生ハッシュ不一致を消して成功と見せないため、[初回照合](./pages-production-http.json)、[HTTPS差分照合](./pages-production-transformations.json)、[メール保護差分照合](./pages-production-email-transformations.json)を別々に保存した。

固定デプロイとPagesエイリアスの代表経路は各39件成功。本番ドメインの代表経路で生ハッシュが異なった1件も、上記のHTTPS書き換えだけと確認した。HEAD、別名308とクエリ保持、404本文、Awesomeの各配信単位、英日両版、他app、検索・ナビ用データを対象にした。照合時間は公開時間とは別で、単一時点・単一接続元の結果である。

## 今後の運用改善候補

前回プレビューartifactとの比較ではファイルの追加・削除はなく、GLFW/Luaの英日一覧4ファイルで並び順の差を検出した。各一覧のカード集合は同じだった。通常appの一覧は `order` が同値の場合のslug比較がなく、カテゴリ生成もcollectionの列挙順に依存している（例: `apps/glfw/src/pages/[version]/[lang]/index.astro`、Luaも同形）。通常appと正規テンプレートのカテゴリ順・同順位の文書順を明示すれば、本文を変えない再ビルドでの不要な差分・アップロードをさらに減らせる。今回の公開内容の欠損ではなく、次の共通改善候補として残す。
