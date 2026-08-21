---
title: "irazasyed/awesome-cloudflare"
description: "irazasyed/awesome-cloudflare の定本スナップショット"
licenseSource: "github-irazasyed-awesome-cloudflare-readme-md"
---

# Awesome Cloudflare [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re) [<img src="media/cf-logo.svg" width="250" align="right" alt="Cloudflare">](https://www.cloudflare.com)

> 優れた[Cloudflare](https://www.cloudflare.com) Workerレシピ、オープンソースプロジェクト、ガイド、ブログ、その他のリソースの厳選リスト。

Cloudflareは、コンテンツ配信ネットワーク（CDN）サービス、DDoS軽減、インターネットセキュリティ、分散ドメインネームサーバー（DNS）サービスを提供し、訪問者とCloudflareユーザーのホスティングプロバイダーの間に位置して、Webサイトのリバースプロキシとして機能します。

## 目次

- [コミュニティ](#community)
- [ブログ](#blog)
- [DNS](#dns)
- [開発者](#developers)
- [Apps](#apps)
  - [オープンソース](#open-source)
- [Workers](#workers)
  - [リファレンス](#reference)
  - [ツール](#tools)
  - [レシピ](#recipes)
  - [AI](#ai)
- [その他](#other)

## コミュニティ

- [Forum](https://community.cloudflare.com)
- [Reddit](https://www.reddit.com/r/CloudFlare)
- [`@Cloudflare` on Twitter](https://twitter.com/cloudflare)
- [Facebook](https://www.facebook.com/Cloudflare)
- [YouTube](https://www.youtube.com/cloudflare-)
- [GitHub](https://github.com/cloudflare)
- [GitHub Topic](https://github.com/topics/cloudflare)
- [Stack Exchange](https://stackexchange.com/search?q=cloudflare)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/cloudflare)
- [Server Fault](https://serverfault.com/questions/tagged/cloudflare)

## ブログ

- [Official Blog](https://blog.cloudflare.com)

## DNS

- [DNS Zone Files](https://github.com/irazasyed/dns-zone-files) - さまざまなサービスを容易に設定するため、すぐインポートできる一般的な設定ゾーンファイル。
- [Lexicon](https://github.com/AnalogJ/lexicon) - さまざまなDNSプロバイダー上のDNSレコードを標準化された方法で操作するCLIツール。
- [Th3inspector](https://github.com/Moham3dRiahi/Th3inspector) - 情報収集向けオールインワンCLIツール。
- [Partner Panel](https://github.com/ZE3kr/Cloudflare-CNAME-Setup) - ホスティングパートナーが顧客へDNS管理パネルを提供するためのツール。
- [CFPMP](https://github.com/Netrvin/CFPMP) - パートナー管理パネル。
- [Flares](https://github.com/lfaoro/flares) - DNSバックアップツール。
- [Block Bad Bot Ruleset](https://github.com/SukkaW/cloudflare-block-bad-bot-ruleset) - ファイアウォールルールで悪意あるクローラーをブロックするルールセットコレクション。
- [Docker DDNS](https://github.com/oznu/docker-cloudflare-ddns) - 無料DNSサービスを動的DNSプロバイダーとして使うDockerイメージ。
- [DDNS script for Synology](https://github.com/joshuaavalon/SynologyCloudflareDDNS) - Synology NAS向けDDNSスクリプト。
- [Dynamic DNS Bash](https://github.com/yulewang/cloudflare-api-v4-ddns) - bashスクリプトによる動的DNSアップデーター。
- [Dynamic DNS PHP](https://github.com/lyoshenka/cloudflare-ddns) - PHPによる動的DNSアップデーター。
- [Dynamic DNS Python](https://github.com/adrienbrignon/cloudflare-ddns) - Pythonによる動的DNSアップデーター。
- [Multi-Provider DDNS Script](https://github.com/phuslu/ddns) - 依存関係なしの複数プロバイダーDDNSスクリプト。
- [Argo Tunnel Client](https://github.com/cloudflare/cloudflared) - 任意のローカルWebサーバーをCloudflareネットワーク経由でプロキシするトンネリングデーモン、Argo tunnel向けCLIクライアント。
- [Upper](https://github.com/ostark/upper) - Webサーバー前方のキャッシュプロキシでcraftを劇的に高速化する。
- [Cloud Buster](https://github.com/SageHack/cloud-buster) - オリジンIP漏えいについてサイトを検査する包括的なペンテストツール。
- [CLI Tool](https://github.com/danielpigott/cloudflare-cli) - Cloudflareと対話するCLIツール。
- [Detector](https://github.com/k4m4/cloudflare-detect) - サイトがCloudflare背後で動作しているか検出する。
- [Scrape](https://github.com/Anorov/cloudflare-scrape) - アンチボットページをバイパスするPythonモジュール。
- [CloudFlair](https://github.com/christophetd/CloudFlair) - 公開露出しているCloudFlare保護Webサイトのオリジンサーバーを発見するツール。

## 開発者

- [Developers Hub](https://developers.cloudflare.com) - 全製品のAPIリファレンス、記事、サンプルコードを含む開発者ドキュメント。
- [Open Source](https://cloudflare.github.io) - 公式オープンソースプロジェクト。
- [API Docs](https://api.cloudflare.com) - APIドキュメント。
- [Integration Resources](https://www.cloudflare.com/integrations) - コンテンツ管理システム、コントロールパネル、クラウドプロバイダー、Eコマースプラットフォームなど向けプラグイン。
- [Technical Resources](https://www.cloudflare.com/technical-resources) - 技術ツール・リソース。
- [The Serverlist Newsletter](https://blog.cloudflare.com/serverlist) - サーバーレスに関するCloudflare厳選ニュースレター。

## Apps

> [Cloudflare Apps](https://www.cloudflare.com/apps/developers)を使うと、ツール・サービスを数百万のサイトへ提供できます。Cloudflare顧客は数秒でサイト上のコードをプレビュー・インストールできます。

- [Apps Directory](https://www.cloudflare.com/apps)
- [Documentation](https://www.cloudflare.com/apps/developer/docs/getting-started)
- [Developer Fund](https://www.cloudflare.com/fund)
- [App Ideas](https://github.com/cloudflare-apps/ideas)

### オープンソース

- [Official OSS Apps](https://github.com/cloudflare-apps) - 公式アプリのコレクション。
- [Logflare](https://github.com/Logflare/cloudflare-app) - ログ管理・イベント分析。
- [OpWork.dev](https://github.com/hisorange/opwork) - セルフホスト型CloudFlare Workers管理プラットフォーム。

## Workers

> [Cloudflare Workers](https://www.cloudflare.com/products/cloudflare-workers)は、インフラを構成・保守せずに、まったく新しいアプリケーションを作成したり既存アプリケーションを拡張したりできるサーバーレス実行環境を提供します。

### リファレンス

- [Documentation](https://workers.cloudflare.com/docs)
- [Tutorials](https://workers.cloudflare.com/docs/tutorials)
- [Runtime](https://workers.cloudflare.com/docs/reference/runtime)
- [Workers KV](https://workers.cloudflare.com/docs/reference/storage)

### ツール

- [Wrangler](https://github.com/cloudflare/wrangler) - `wrangler`はCloudflare Workersを使いたい人向けに設計されたCLIツール。
- [Playground](https://www.cloudflareworkers.com) - 任意のサイトに対し、ブラウザー内で直接コードをプレビュー・テストするシンプルで即時的な方法。
- [Serverless Plugin](https://workers.cloudflare.com/docs/reference/tooling/serverless) - [serverless framework](https://github.com/serverless/serverless)を使い、Workersでサーバーレスアプリケーションを開発・デプロイするプラグイン。
- [Worker App Kit](https://github.com/postlight/cloudflare-worker-app-kit) - Workerアプリを作成、開発、テスト、デプロイするための便利なツールセット。
- [GitHub Action](https://github.com/cpilsworth/cloudflare-worker-action) - masterブランチへのプッシュ時にWorkerをデプロイする。
- [Workers KV Viewer](https://github.com/jroyal/cloudflare-workers-kv-viewer) - Workers KVストレージ向けCLIベースの対話型ビューアー。
- [Redirect Management](https://forwarding.app) - リダイレクトWorkerを生成する。

### レシピ

- [Examples Collection](https://github.com/cloudflare/worker-examples) - レシピのコレクション。
- [Hello World JS Boilerplate](https://github.com/cloudflare/worker-template) - JSでWorkerプロジェクトを始めるためのテンプレート。
- [Hello World Rust Boilerplate](https://github.com/cloudflare/rustwasm-worker-template) - wasm-packを使うWorkerプロジェクト開始用テンプレート。
- [Router](https://github.com/cloudflare/worker-template-router) - 基本ルーティングロジックのため、REST API・アプリと使えるルーター。
- [Static](https://github.com/cloudflare/worker-template-static) - Workersスクリプト内の生文字列から静的HTML・JSONページを生成する。
- [Fetch](https://github.com/cloudflare/worker-template-fetch) - fetchリクエスト・JSON POSTリクエスト生成の例。
- [Incoming Request](https://github.com/ashleygwilliams/worker-template-requests) - JSON・form-data型POSTリクエスト本文を読み込む例。
- [Redirect](https://github.com/cloudflare/worker-template-redirect) - Workerスクリプトから単一・一括リダイレクトを送信する例。
- [Img-Color](https://github.com/xtuc/img-color-worker) - png・jpeg画像の主要色を取得する。
- [Binast](https://github.com/xtuc/binast-cf-worker-template) - Worker経由でbinastを提供する。
- [Pwnage Protection](https://github.com/detroitenglish/pw-pwnage-cfworker) - 安全なパスワードスコアリング・ユーザーpwnage保護API。[使用法](https://community.cloudflare.com/t/estimate-strength-of-users-new-password-input-with-zxcvbn-and-query-haveibeenpwned-for-matches-against-known-hacked-accounts/26378)。
- [Cache Purger Proxy](https://gist.github.com/vdbelt/20f116236d2ebffa92f131e679c0551a) - キャッシュ削除リクエストをプロキシする。[使用法](https://community.cloudflare.com/t/worker-recipe-cache-purge-proxy/29978)。
- [URL Router](https://github.com/berstend/service-worker-router) - 高速URLルーター。[使用法](https://community.cloudflare.com/t/open-source-fast-url-router-for-workers-js-typescript/33406)。
- [Edge Proxy](https://github.com/DigitalOptimizationGroup/cloudflare-edge-proxy) - A/Bテスト、カナリアリリース、ゲートキーピング、SEO A/B/Nテストを有効にする。
- [Blue / Green Deployments](https://github.com/DigitalOptimizationGroup/blue-green-cloudflare-workers) - カナリアリリースを伴うブルー／グリーンデプロイメントの動作例。
- [Preact PWA](https://github.com/DigitalOptimizationGroup/cloudflare-worker-preact-pwa) - PreactプログレッシブWebアプリ。
- [CURL Interceptor](https://github.com/Gaafar/curl-worker) - `curl`コマンドからのリクエストをインターセプトし、別の何かを返す。
- [Worker with built-in Router](https://github.com/anderly/cloudflare-worker-routing) - Workerロジックを異なる関数・コントローラーへ分離できる。
- [Connecting to Google Storage](https://community.cloudflare.com/t/connecting-to-google-storage/32350) - Googleのクラウドストレージからファイルを取得する。
- [CSRF Protection](https://gist.github.com/simonerni/3501b8de6320ac37398d08d9d2d08561) - origin/refererヘッダーを検証して任意のオリジンをCSRFから保護する。
- [URL Query Strings Parser](https://community.cloudflare.com/t/parse-url-query-strings-with-cloudflare-workers/90286) - URLクエリー文字列を解析する。
- [Regrex Replacement and Injection](https://community.cloudflare.com/t/perform-regex-replacements-and-inject-css-javascript-with-cloudflare-workers/90279) - regex置換を実行し、CSS/JSを注入する。
- [Webpack Boilerplate](https://github.com/detroitenglish/cloudflare-workers-webpack-boilerplate) - webpackでWorkerをビルド、バンドル、デプロイするボイラープレート。
- [Basic Auth](https://github.com/dommmel/cloudflare-workers-basic-auth) - 基本認証を使う保護。
- [Send Logs to Logdna](https://github.com/boynet/cf-logdna-worker) - logdnaへログを送るシンプルなレシピ。
- [IP lookup service](https://github.com/matthewgall/beta.ipinfo.in) - Workersを使うIP検索サービス。
- [Airtable Proxy](https://github.com/portable-cto/airtable-proxy-worker) - フロントエンドからAirtable APIへ安全なリクエストを行える。
- [TypeScript Workers](https://github.com/udacity/cloudflare-typescript-workers) - テスト済みTypeScript Workerを構築するための型・モック。
- [Proxies](https://github.com/GitbookIO/proxies-on-cloudflare) - 一般的なニーズに対応する高水準プロキシプリミティブを提供し、Worker構築を容易にする。
- [Static Worker](https://github.com/manatarms/static-worker) - 静的Webサイトのホスティングを容易にする関数を提供する。
- [Bannero](https://github.com/nondanee/bannero) - simpledesktops向けBannero画像API。
- [Hasura](https://github.com/nathanwaters/hasura-cloudflare-worker) - Facebookベース認証・hasuraによるgraphqlプロキシクエリーを使う例。
- [IP Redirects](https://community.cloudflare.com/t/ip-redirects/18285) - IPアドレスに基づきユーザーをリダイレクトする。
- [Switch Image to WebP](https://github.com/vidaxl-com/cloudflare_webworkers/blob/master/examples/webp.js) - 対応時に画像をWebPへルーティングする。
- [Geographic Routing and Load Balancer](https://community.cloudflare.com/t/geographic-routing-and-load-balancing-with-cloudflare-workers/21900) - Workersによる地理的ルーティング・ロードバランシング。
- [UTM Tag Stripper](https://community.cloudflare.com/t/strip-utm-query-string/47941) - クエリー文字列内のUTMタグを削除する。
- [Short URL Redirector](https://community.cloudflare.com/t/short-url-using-workers/39877) - 短縮リンクをリダイレクトする。
- [Repo Hunt](https://github.com/signalnerve/repo-hunt) - 優れたオープンソースプロジェクトを毎日発見する。
- [Performance Optimized Workers](https://github.com/pmeenan/cf-workers) - 一般的にパフォーマンス最適化に焦点を置くWorkerスクリプトコレクション。
- [Google reCAPTCHA verification](https://github.com/HR/recaptcha-worker) - reCAPTCHAフォームのサーバー側検証を処理する。
- [Cloudflare Workers Starter Kit](https://github.com/kriasoft/cloudflare-starter-kit) - 複数のCF Workers、`*.env`ファイル、ローカルテストを備えるTypeScriptテンプレート。

### AI

- [Moltworker](https://github.com/cloudflare/moltworker) - Cloudflare Workers上でMoltbot（旧Clawdbot）を動かす。

## その他

- [Support](https://support.cloudflare.com)
- [System Status](https://www.cloudflarestatus.com)
- [Network Map](https://www.cloudflare.com/network)

## 寄稿

寄稿を歓迎します！まず[寄稿ガイドライン](https://github.com/irazasyed/awesome-cloudflare/blob/8e40024c2063cc87c35fcde453a7f119b1dd2613/contributing.md)を読んでください。

## ライセンス

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

法律で可能な限り、[Irfaq Syed](https://github.com/irazasyed)はこの作品に対するすべての著作権および関連・近接権を放棄しています。

> CloudflareはCloudflare, Inc.の登録商標です。
