---
title: Awesome Cloudflare
description: CloudflareのDNSツール、開発者向け資料、Appsの連携、Workersのリファレンス・実装例、コミュニティとサービス情報。
licenseSource: github-irazasyed-awesome-cloudflare-readme-md
documentContext:
  - kind: source
    html: >-
      <p>法律で認められる範囲で、<a href="https://github.com/irazasyed">Irfaq
      Syed</a>はこの作品に関するすべての著作権および関連する権利または隣接する権利を放棄しています。</p><p>CloudflareはCloudflare,
      Inc.の登録商標です。</p>
---
# Awesome Cloudflare<a id="目次"></a><a id="寄稿"></a><a id="ライセンス"></a>

[Cloudflare](https://www.cloudflare.com)はCDN、DDoS対策、インターネットセキュリティ、分散DNSのサービスを提供し、訪問者とサイトのホスティング事業者の間でリバースプロキシとして動作します。DNSツール、開発者向け資料、Appsの連携、Workersのリファレンス・実装例、コミュニティとサービス情報を探せます。製品名、機能、提供状況は固定原文当時の記載です。

## コミュニティ <a id="community"></a>

- [フォーラム](https://community.cloudflare.com)
- [Reddit](https://www.reddit.com/r/CloudFlare)
- [Twitterの`@Cloudflare`](https://twitter.com/cloudflare)
- [Facebook](https://www.facebook.com/Cloudflare)
- [YouTube](https://www.youtube.com/cloudflare-)
- [GitHub](https://github.com/cloudflare)
- [GitHubのCloudflareトピック](https://github.com/topics/cloudflare)
- [Stack Exchange](https://stackexchange.com/search?q=cloudflare)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/cloudflare)
- [Server Fault](https://serverfault.com/questions/tagged/cloudflare)

## ブログ <a id="blog"></a>

- [公式ブログ](https://blog.cloudflare.com)

## DNS

- [DNSゾーンファイル](https://github.com/irazasyed/dns-zone-files) - 各種サービスの設定に使える、インポート可能な一般的なDNSゾーン設定ファイル。
- [Lexicon](https://github.com/AnalogJ/lexicon) - さまざまなDNSプロバイダー上のDNSレコードを標準化された方法で操作するCLIツール。
- [Th3inspector](https://github.com/Moham3dRiahi/Th3inspector) - 情報収集向けオールインワンCLIツール。
- [パートナー向けパネル](https://github.com/ZE3kr/Cloudflare-CNAME-Setup) - ホスティングパートナーが顧客へDNS管理パネルを提供するためのツール。
- [CFPMP](https://github.com/Netrvin/CFPMP) - パートナー管理パネル。
- [Flares](https://github.com/lfaoro/flares) - DNSバックアップツール。
- [Block Bad Bot Ruleset](https://github.com/SukkaW/cloudflare-block-bad-bot-ruleset) - ファイアウォールルールで悪意あるクローラーをブロックするルールセット集。
- [Docker DDNS](https://github.com/oznu/docker-cloudflare-ddns) - 無料DNSサービスを動的DNSプロバイダーとして使うDockerイメージ。
- [Synology向けDDNSスクリプト](https://github.com/joshuaavalon/SynologyCloudflareDDNS) - Synology NAS向けDDNSスクリプト。
- [Bashによる動的DNS更新](https://github.com/yulewang/cloudflare-api-v4-ddns) - bashスクリプトによる動的DNSアップデーター。
- [PHPによる動的DNS更新](https://github.com/lyoshenka/cloudflare-ddns) - PHPによる動的DNSアップデーター。
- [Pythonによる動的DNS更新](https://github.com/adrienbrignon/cloudflare-ddns) - Pythonによる動的DNSアップデーター。
- [複数プロバイダー対応DDNSスクリプト](https://github.com/phuslu/ddns) - 外部依存を必要としない、複数プロバイダー対応のDDNSスクリプト。
- [Argo Tunnelクライアント](https://github.com/cloudflare/cloudflared) - Argo Tunnel用のCLIクライアント。任意のローカルウェブサーバーをCloudflareネットワーク経由でプロキシするトンネリングデーモン。
- [Upper](https://github.com/ostark/upper) - ウェブサーバーの前段にキャッシュプロキシを置き、craftを大幅に高速化すると原文が紹介するツール。
- [Cloud Buster](https://github.com/SageHack/cloud-buster) - サイトのオリジンIP漏えいを検査する総合的なペネトレーションテストツール。
- [CLIツール](https://github.com/danielpigott/cloudflare-cli) - Cloudflareを操作するCLIツール。
- [Cloudflareの利用検出](https://github.com/k4m4/cloudflare-detect) - サイトがCloudflareの背後で動作しているかを検出する。
- [Scrape](https://github.com/Anorov/cloudflare-scrape) - アンチボットページをバイパスするPythonモジュール。
- [CloudFlair](https://github.com/christophetd/CloudFlair) - Cloudflareで保護されたウェブサイトについて、公開されているオリジンサーバーを探すツール。

## 開発者向け資料 <a id="開発者"></a> <a id="developers"></a>

- [開発者向けハブ](https://developers.cloudflare.com) - 全製品のAPIリファレンス、記事、サンプルコードを含む開発者文書。
- [オープンソース](https://cloudflare.github.io) - 公式オープンソースプロジェクト。
- [API文書](https://api.cloudflare.com) - APIドキュメント。
- [統合用リソース](https://www.cloudflare.com/integrations) - コンテンツ管理システム、コントロールパネル、クラウドプロバイダー、Eコマースプラットフォームなど向けプラグイン。
- [技術資料](https://www.cloudflare.com/technical-resources) - 技術ツールと資料。
- [The Serverlist Newsletter](https://blog.cloudflare.com/serverlist) - サーバーレス全般を扱い、Cloudflareが編集・選定するニュースレター。

## Apps

原文は、[Cloudflare Apps](https://www.cloudflare.com/apps/developers)を数百万のサイトへツールやサービスを届ける仕組みと紹介し、Cloudflareの顧客なら誰でも数秒で自分のサイト上のコードをプレビュー・インストールできると説明しています。

- [Appsディレクトリ](https://www.cloudflare.com/apps)
- [文書](https://www.cloudflare.com/apps/developer/docs/getting-started)
- [開発者向けファンド](https://www.cloudflare.com/fund)
- [アプリのアイデア](https://github.com/cloudflare-apps/ideas)

### オープンソース <a id="open-source"></a>

- [公式オープンソースアプリ](https://github.com/cloudflare-apps) - 公式アプリのコレクション。
- [Logflare](https://github.com/Logflare/cloudflare-app) - ログ管理・イベント分析。
- [OpWork.dev](https://github.com/hisorange/opwork) - セルフホスト型CloudFlare Workers管理プラットフォーム。

## Workers

[Cloudflare Workers](https://www.cloudflare.com/products/cloudflare-workers)は、インフラの設定・保守なしに、新しいアプリケーションを作成したり既存のものを拡張したりできるサーバーレス実行環境です。

### リファレンス <a id="reference"></a>

- [文書](https://workers.cloudflare.com/docs)
- [チュートリアル](https://workers.cloudflare.com/docs/tutorials)
- [ランタイム](https://workers.cloudflare.com/docs/reference/runtime)
- [Workers KV](https://workers.cloudflare.com/docs/reference/storage)

### ツール <a id="tools"></a>

- [Wrangler](https://github.com/cloudflare/wrangler) - `wrangler`はCloudflare Workersを使いたい人向けに設計されたCLIツール。
- [Playground](https://www.cloudflareworkers.com) - 任意のサイトに対して、ブラウザー内で直接コードをすぐにプレビュー・テストするためのツール。
- [Serverlessプラグイン](https://workers.cloudflare.com/docs/reference/tooling/serverless) - [serverless framework](https://github.com/serverless/serverless)を使い、Workersでサーバーレスアプリケーションを開発・デプロイするプラグイン。
- [Worker App Kit](https://github.com/postlight/cloudflare-worker-app-kit) - Workerアプリの作成・開発・テスト・デプロイ用のツール集。
- [GitHubアクション](https://github.com/cpilsworth/cloudflare-worker-action) - masterブランチへのプッシュ時にWorkerをデプロイする。
- [Workers KVビューアー](https://github.com/jroyal/cloudflare-workers-kv-viewer) - Workers KVストレージ向けCLIベースの対話型ビューアー。
- [リダイレクト管理](https://forwarding.app) - リダイレクトWorkerを生成する。

### 実装例 <a id="レシピ"></a> <a id="recipes"></a>

- [実装例集](https://github.com/cloudflare/worker-examples) - 実装例のコレクション。
- [Hello World JSボイラープレート](https://github.com/cloudflare/worker-template) - JSでWorkerプロジェクトを始めるためのテンプレート。
- [Hello World Rustボイラープレート](https://github.com/cloudflare/rustwasm-worker-template) - wasm-packを使うWorkerプロジェクト開始用テンプレート。
- [ルーター](https://github.com/cloudflare/worker-template-router) - REST APIやアプリで基本的なルーティング処理に使えるルーター。
- [静的ページ](https://github.com/cloudflare/worker-template-static) - Workersスクリプト内の生文字列から静的HTML・JSONページを生成する。
- [Fetch](https://github.com/cloudflare/worker-template-fetch) - fetchリクエスト・JSON POSTリクエスト生成の例。
- [受信リクエスト](https://github.com/ashleygwilliams/worker-template-requests) - JSON・form-data型POSTリクエスト本文を読み込む例。
- [リダイレクト](https://github.com/cloudflare/worker-template-redirect) - Workerスクリプトから単一・一括リダイレクトを送信する例。
- [Img-Color](https://github.com/xtuc/img-color-worker) - PNG・JPEG画像の代表色を取得する。
- [Binast](https://github.com/xtuc/binast-cf-worker-template) - Worker経由でbinastを提供する。
- [Pwnage Protection](https://github.com/detroitenglish/pw-pwnage-cfworker) - 安全なパスワード評価と、ユーザーのパスワード漏えいへの対策を行うAPI。[使用法](https://community.cloudflare.com/t/estimate-strength-of-users-new-password-input-with-zxcvbn-and-query-haveibeenpwned-for-matches-against-known-hacked-accounts/26378)。
- [キャッシュ削除プロキシ](https://gist.github.com/vdbelt/20f116236d2ebffa92f131e679c0551a) - キャッシュ削除リクエストをプロキシする。[使用法](https://community.cloudflare.com/t/worker-recipe-cache-purge-proxy/29978)。
- [URLルーター](https://github.com/berstend/service-worker-router) - 高速URLルーター。[使用法](https://community.cloudflare.com/t/open-source-fast-url-router-for-workers-js-typescript/33406)。
- [エッジプロキシ](https://github.com/DigitalOptimizationGroup/cloudflare-edge-proxy) - A/Bテスト、カナリアリリース、アクセス制御、SEOのA/B/Nテストを行える。
- [ブルー／グリーンデプロイ](https://github.com/DigitalOptimizationGroup/blue-green-cloudflare-workers) - カナリアリリースを伴うブルー／グリーンデプロイメントの動作例。
- [Preact PWA](https://github.com/DigitalOptimizationGroup/cloudflare-worker-preact-pwa) - PreactプログレッシブWebアプリ。
- [CURLインターセプター](https://github.com/Gaafar/curl-worker) - `curl`コマンドからのリクエストを捕捉し、異なる応答を返す。
- [ルーターを内蔵するWorker](https://github.com/anderly/cloudflare-worker-routing) - Workerロジックを異なる関数・コントローラーへ分離できる。
- [Google Storageへの接続](https://community.cloudflare.com/t/connecting-to-google-storage/32350) - Googleのクラウドストレージからファイルを取得する。
- [CSRF保護](https://gist.github.com/simonerni/3501b8de6320ac37398d08d9d2d08561) - Origin/Refererヘッダーを検証し、任意のオリジンをCSRFから保護する。
- [URLクエリー文字列パーサー](https://community.cloudflare.com/t/parse-url-query-strings-with-cloudflare-workers/90286) - URLクエリー文字列を解析する。
- [正規表現による置換と挿入](https://community.cloudflare.com/t/perform-regex-replacements-and-inject-css-javascript-with-cloudflare-workers/90279) - 正規表現で置換し、CSS・JavaScriptを挿入する。
- [Webpackボイラープレート](https://github.com/detroitenglish/cloudflare-workers-webpack-boilerplate) - webpackでWorkerをビルド、バンドル、デプロイするボイラープレート。
- [Basic認証](https://github.com/dommmel/cloudflare-workers-basic-auth) - Basic認証による保護。
- [Logdnaへのログ送信](https://github.com/boynet/cf-logdna-worker) - logdnaへログを送るシンプルなレシピ。
- [IP検索サービス](https://github.com/matthewgall/beta.ipinfo.in) - Workersを使うIP検索サービス。
- [Airtableプロキシ](https://github.com/portable-cto/airtable-proxy-worker) - フロントエンドからAirtable APIへ安全なリクエストを行える。
- [TypeScript Workers](https://github.com/udacity/cloudflare-typescript-workers) - テストを備えたTypeScript Workerを作るための型とモック。
- [Proxies](https://github.com/GitbookIO/proxies-on-cloudflare) - よくある用途に対応する高水準のプロキシ処理部品を提供し、Workerの構築を容易にする。
- [静的サイト用Worker](https://github.com/manatarms/static-worker) - 静的ウェブサイトのホスティングを容易にする関数を提供する。
- [Bannero](https://github.com/nondanee/bannero) - simpledesktops用のBannero画像API。
- [Hasura](https://github.com/nathanwaters/hasura-cloudflare-worker) - Facebookを使う認可と、HasuraによるGraphQLプロキシクエリーの例。
- [IPに基づくリダイレクト](https://community.cloudflare.com/t/ip-redirects/18285) - IPアドレスに基づきユーザーをリダイレクトする。
- [画像のWebPへの切替](https://github.com/vidaxl-com/cloudflare_webworkers/blob/master/examples/webp.js) - 対応している場合に、画像の取得先をWebPへ切り替える。
- [地理的ルーティングと負荷分散](https://community.cloudflare.com/t/geographic-routing-and-load-balancing-with-cloudflare-workers/21900) - Workersによる地理的ルーティング・ロードバランシング。
- [UTMタグの除去](https://community.cloudflare.com/t/strip-utm-query-string/47941) - クエリー文字列内のUTMタグを削除する。
- [短縮URLのリダイレクト](https://community.cloudflare.com/t/short-url-using-workers/39877) - 短縮リンクをリダイレクトする。
- [Repo Hunt](https://github.com/signalnerve/repo-hunt) - 注目のオープンソースプロジェクトを毎日探すサービスとして原文が紹介する。
- [性能を最適化するWorkers](https://github.com/pmeenan/cf-workers) - 主に性能の最適化を扱うWorkerスクリプト集。
- [Google reCAPTCHAの検証](https://github.com/HR/recaptcha-worker) - reCAPTCHAフォームのサーバー側検証を処理する。
- [Cloudflare Workers Starter Kit](https://github.com/kriasoft/cloudflare-starter-kit) - 複数のCF Workers、`*.env`ファイル、ローカルテストを備えるTypeScriptテンプレート。

### AI

- [Moltworker](https://github.com/cloudflare/moltworker) - Cloudflare Workers上でMoltbot（旧Clawdbot）を動かす。

## その他 <a id="other"></a>

- [サポート](https://support.cloudflare.com)
- [稼働状況](https://www.cloudflarestatus.com)
- [ネットワーク地図](https://www.cloudflare.com/network)
