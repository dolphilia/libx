---
title: "Awesome Deno"
description: "Denoのモジュール、開発ツール、デプロイ連携、アプリケーション例、文書、講演、多言語の資料。"
licenseSource: "github-denolib-awesome-deno-readme-md"
---

# Awesome Deno

DenoはRustで実装され、V8を使うJavaScript・TypeScriptランタイムです。モジュール、開発ツール、デプロイ連携、アプリケーション例、文書、記事、講演や各言語の資料を探せます。

プロジェクトの状況、互換性、レジストリーの説明は固定原文の記述に基づきます。現在の保守・提供状況は確認していません。

## 文書 <a id="docs"></a>

### 公式文書 <a id="official-docs"></a>

- [Deno APIリファレンス](https://docs.deno.com/api)
- [Denoマニュアル](https://docs.deno.com)
- [Deno標準ライブラリ](https://jsr.io/@std)
- [公式サイト](https://deno.com)

### 外部文書 <a id="external-docs"></a>

- [Deno向けV8文書](https://denolib.github.io/v8-docs/)

## モジュール <a id="modules"></a>

### 自動化 <a id="automation"></a>
- [swissknife](https://github.com/fakoua/SwissKnife) - Denoを使うWindows向けのSwissKnifeツール群。
- [zuke](https://github.com/zuke-build/zuke) - ビルドをTypeScriptクラスで定義する、コード中心で強い型付けを備えたビルド自動化システム。

### CLIユーティリティ <a id="cli-utils"></a>
- [cac](https://github.com/cacjs/cac) - コマンドラインアプリケーション構築用のフレームワーク。
- [charmd](https://github.com/littletof/charmd) - ターミナル向けのシンプルで拡張可能なMarkdownレンダラー。
- [cli-spinner](https://github.com/ameerthehacker/deno-cli-spinners) - 長時間のタスク実行中にターミナルへスピナーを表示。
- [cliffy](https://github.com/c4spar/cliffy) - 対話型コマンドラインインターフェースを構築するツール群。
- [clite](https://github.com/jersou/clite-parser) - クラスからCLIを自動生成。
- [commit-sage-cli](https://github.com/AhmedOsman101/commit-sage-cli) - Gitリポジトリの変更に基づき、AIでConventional Commits形式のメッセージを生成。
- [tui](https://github.com/Im-Beast/deno_tui) - ターミナルユーザーインターフェースを作成するモジュール。
- [yargs](https://github.com/yargs/yargs) - 海賊をテーマにしたoptimistの後継ツール。

### クラウドAPI <a id="cloud-apis"></a>
- [aws-api](https://aws-api.deno.dev/) - Deno向けに一から構築された、TypeScript製のAWS APIクライアント。

### データベース <a id="database"></a>
- [@iuioiua/redis](https://jsr.io/@iuioiua/redis) - Web Streams APIを基盤とする、高速で軽量なRedisクライアント。
- [aloedb](https://github.com/Kirlovon/aloedb) - 依存関係のない、Deno向けの軽量で組み込み可能なNoSQLデータベース。
- [deno_mongo](https://github.com/denodrivers/mongo) - MongoDBデータベースドライバー。
- [deno_mysql](https://github.com/denodrivers/mysql) - MySQLデータベースドライバー。
- [denodb](https://github.com/eveningkid/denodb) - Deno向けのMySQL、SQLite、MariaDB、PostgreSQL、MongoDB用ORM。
- [dongoose](https://github.com/roonie007/dongoose) - Deno KV向けのシンプルで使いやすいORM。
- [maxminddb](https://github.com/josh-hemphill/maxminddb-wasm) - MaxmindDBのGeoIPデータベースファイルを利用するためのライブラリ。
- [nessie](https://github.com/halvardssm/deno-nessie) - PostgreSQL、MySQL、SQLite向けマイグレーションの作成・適用・ロールバック。
- [postgres](https://github.com/denodrivers/postgres) - PostgreSQLデータベースドライバー。
- [redis](https://github.com/denodrivers/redis) - Deno向けRedisクライアントの実験的な実装。
- [yongo](https://github.com/yooneskh/yongo) - populateなど、Mongoose APIの一部をDenoで提供。Mongoose全体を複製するものではない。

### エディターフレームワーク <a id="editor-framework"></a>

- [Denops](https://github.com/vim-denops/denops.vim) - DenoでVim/Neovimプラグインを書くためのエコシステム。

### フロントエンドフレームワーク <a id="frontend-framework"></a>
- [fresh](https://github.com/denoland/fresh) - Webフレームワーク。
- [packup](https://github.com/kt3k/packup) - Deno向けの設定不要なWebアプリケーションパッケージャー。
- [ultra](https://github.com/exhibitionist-digital/ultra) - Deno向けのストリーミングReactフレームワーク。

### ゲームエンジン <a id="game-engine"></a>
- [caviar](https://github.com/load1n9/caviar) - Denoとブラウザー向けの、WebGPUを使うゲームエンジン。
- [sdl2](https://github.com/littledivy/deno_sdl2) - Deno向けSDL2モジュール。

### 画像 <a id="image"></a>
- [ImageScript](https://github.com/matmen/ImageScript) - 性能向上にWebAssemblyを利用する、JavaScriptでの画像処理。
- [monke](https://github.com/retraigo/monke) - ぼかし・反転などの画像フィルターも備える、減色とディザリングのライブラリ。

### ロギング <a id="logging"></a>
- [LogTape](https://github.com/dahlia/logtape) - Deno/Node.js/Bun/ブラウザー向けの、依存関係のないシンプルなロギングライブラリ。

### 機械学習 <a id="machine-learning"></a>
- [appraisal](https://github.com/retraigo/appraisal) - 特徴抽出と変換。
- [classy-lala](https://github.com/retraigo/la-classy) - 教師あり学習タスク向けの単層パーセプトロン。
- [netsaur](https://github.com/denosaurs/netsaur) - WebGPUで高速化する機械学習。

### メール <a id="mail"></a>
- [deno-smtp](https://github.com/manyuanrong/deno-smtp) - Deno向けのSMTPメール送信ツール。

### Markdown
- [LiteMarkup](https://github.com/tuures/LiteMarkup) - AST中心のパーサー。gzip圧縮後3 KB未満で、依存関係なし。

### 数学 <a id="math"></a>
- [neo](https://github.com/denosaurs/neo/) - WebGPUで高速化する、行列演算などの数学処理。

### 静的サイト生成器 <a id="static-site-generator"></a>
- [lume](https://github.com/lumeland/lume) - JekyllやEleventyに似た、複数のファイル形式に対応する静的サイト生成器。
- [pagic](https://github.com/xcatliu/pagic) - Denoを使い、Markdownから静的HTMLページを生成。

### 文字列ユーティリティ <a id="string-utils"></a>
- [written](https://github.com/vixalien/written) - 単純な文字列操作よりも、タイポグラフィーに重点を置いたテキストユーティリティ。

### ソーシャルプラットフォームAPI <a id="social-platform-apis"></a>
- [discordeno](https://github.com/discordeno/discordeno) - Deno向けDiscord APIライブラリ。
- [grammY](https://github.com/grammyjs/grammY) - Deno向けTelegram Bot APIフレームワーク。
- [MTKruto](https://github.com/MTKruto/MTKruto) - Denoを主対象とし、複数ランタイムに対応するTelegram MTProto APIクライアントライブラリ。


### テンプレートエンジン <a id="template-engine"></a>
- [dejs](https://github.com/syumai/dejs) - Deno向けEjsテンプレートエンジン。
- [eta](https://github.com/bgub/eta) - 高速・軽量で設定可能な、埋め込み型テンプレートエンジン。
- [handlebars](https://github.com/alosaur/handlebars) - Deno向けHandlebarsテンプレートエンジン。

### テスト <a id="testing"></a>
- [deno-puppeteer](https://github.com/lucacasonato/deno-puppeteer) - DevTools Protocol経由でChromiumまたはChromeを制御する高レベルAPIを提供するライブラリ。
- [qunitx](https://github.com/izelnakri/qunitx) - 依存関係がなく、全面的にカスタマイズ可能な、成熟した汎用テストAPI。標準のランタイムテストランナーを使い、Node.js・Deno・ブラウザーで相互に切り替えて実行可能。
- [rhum](https://github.com/drashland/rhum) - Deno向けの軽量テストフレームワーク。
- [superdeno](https://github.com/cmorten/superdeno) - Super-agentを使ってDeno HTTPサーバーをテストするライブラリ。
- [superoak](https://github.com/cmorten/superoak) - SuperDenoを使う、Oak向けHTTPアサーション。
- [tepi](https://deno.land/x/tepi) - .httpテストランナー。
- [unexpected](https://github.com/unexpectedjs/unexpected) - 拡張可能なBDDアサーションツールキット。

### ユーティリティ <a id="utils"></a>
- [buckets](https://github.com/jacoborus/deno-buckets) - アセットとスクリプトを単一の実行可能ファイルへまとめる。
- [colors](https://github.com/retraigo/colors) - TypeScriptでの色変換・操作。
- [computed_types](https://github.com/neuledge/computed-types) - TypeScriptとDeno向けの、Joiに似たバリデーター。
- [croner](https://github.com/Hexagon/croner) - 高度なスケジュール機能と十分なAPI文書を備える、依存関係のないCronライブラリ。
- [csv-pipe](https://github.com/martsinlabs/csv-pipe) - 各ランタイム向けの、型付けを備えた依存関係のないCSVパーサー・エンコーダー。
- [deno-config](https://github.com/yooneskh/deno-unified-config) - CLI、.env、JSONファイルを通じてDenoアプリケーションの設定管理を効率化するユーティリティ。
- [deno_kv_fs](https://github.com/hviana/deno_kv_fs) - Deno Deployと互換性があり、Web Streams APIを利用するDeno KVファイルシステム。
- [denon](https://github.com/denosaurs/denon/blob/master/mod.ts) - for-awaitジェネレーターを備えるファイル監視ツール。
- [dinoenv](https://deno.land/x/dinoenv) - Denoで環境変数を管理する小さなライブラリ。
- [durationjs](https://github.com/retraigo/duration.js) - タイムスタンプや人が読める文字列から、書式付きの期間を取得。
- [envapt](https://github.com/materwelonDhruv/envapt) - 組み込みの変換器とStandard Schema検証を備え、環境変数を型付きの値として読み取る。依存関係なし。
- [esm-itter](https://github.com/tillsanders/esm-itter) - ECMAScriptモジュール構文、TypeScript、現代的なツールに重点を置いた、EventEmitter3の強い型付けを備えるフォーク。
- [evt](https://github.com/garronej/evt) - EventEmitterの型安全な代替。
- [fastest-validator](https://github.com/icebob/fastest-validator) - あらゆるJavaScriptプラットフォーム向けのスキーマバリデーター。
- [fortuna](https://github.com/retraigo/fortuna) - 重み付きガチャシステム。
- [garn-validator](https://github.com/jupegarnica/garn-validator) - 検証処理を作成するツール。
- [locale-kit](https://deno.land/x/localekit) ([GitHub](https://github.com/locale-kit/locale-kit)) - Fresh用ラッパーを備え、複数形と動的な置換に対応する、国際化・ローカライズ・翻訳（i18n/l10n/t9n）ライブラリ。
- [optionals](https://github.com/OliverBrotchie/optionals) - 網羅的なパターンマッチングを使う、Rustに似たエラー処理とオプション。
- [PLS](https://github.com/xorgram/pls) - 2行でlocalStorageを任意のデータベースへ永続化。MongoDB、PostgreSQL、Redisなどに対応。
- [qrcode](https://github.com/denorg/qrcode) - Deno向けQRコード画像生成器。
- [rubico](https://github.com/a-synchronous/rubico) - 非同期・同期の関数合成。
- [solc](https://github.com/deno-web3/solc) - Deno向けSolidityバインディング。
- [switcher4deno](https://github.com/switcherapi/switcher-client-deno) - Switcher-API用の機能フラグDeno SDKクライアント。
- [wu-diff-js](https://github.com/bokuweb/wu-diff-js) - WuのO(NP)アルゴリズムで2つのスライスの差分を計算するライブラリ。

### 検証 <a id="validation"></a>

- [zod](https://github.com/colinhacks/zod) - 静的な型推論を備える、TypeScriptを主対象としたスキーマ検証。

### Webフレームワーク <a id="web-framework"></a>
- [alosaur](https://github.com/alosaur/alosaur) - 多くのESデコレーターを備えるDeno Webフレームワーク。
- [aqua](https://github.com/predetermined/aqua) - Deno向けの最小限で高速なWebフレームワーク。
- [danet](https://github.com/Savory/Danet) - [Nest.js](https://nestjs.com)の影響を強く受けた、Deno向けWebフレームワーク。
- [drash](https://github.com/drashland/drash) - 依存関係のない、Deno HTTPサーバー向けRESTマイクロフレームワーク。
- [faster](https://github.com/hviana/faster) - 便利なミドルウェア群を備える、高速で最適化されたミドルウェアサーバー。
- [faster_react](https://github.com/hviana/faster_react) - ReactとFasterを使うフルスタックWebフレームワーク。Deno Deployと完全互換。
- [hono](https://github.com/honojs/hono) - Cloudflare Workers、Deno、Bun向けWebフレームワーク。
- [oak](https://github.com/oakserver/oak) - Denoのnetサーバー向けミドルウェアフレームワーク。
  - [oak-http-proxy](https://github.com/cmorten/oak-http-proxy) - Deno Oak HTTPサーバー向けプロキシミドルウェア。
  - [oak-routing-ctrl](https://github.com/Thesephi/oak-routing-ctrl) - OakフレームワークでAPIサービスのひな型を作るためのTypeScriptデコレーター。
- [opine](https://github.com/cmorten/opine) - ExpressJSから移植された、高速で最小限のWebフレームワーク。
  - [opine-http-proxy](https://github.com/cmorten/opine-http-proxy) - Deno Opine HTTPサーバー向けプロキシミドルウェア。

### WebSocket
- [dropper](https://github.com/denyncrawford/dropper-deno) - Denoでリアルタイムアプリケーションを構築する、カスタムイベントベースのWebSocketsフレームワーク。
- [wocket](https://github.com/drashland/wocket) - Deno向けWebSocketライブラリ。

### Webユーティリティ <a id="web-utils"></a>
- [djwt](https://github.com/Zaubrik/djwt) - JWTおよびJWS仕様に基づき、DenoでJSON Web Token（JWT）を作成。
- [forwarded](https://github.com/deno-libs/forwarded) - `forwarded`ライブラリのDeno移植版。
- [fresh_chart](https://github.com/denoland/fresh_charts) - Fresh向けの、サーバーサイドで描画するグラフライブラリ。
- [gentleRpc](https://github.com/timonson/gentle_rpc) - Denoとブラウザー向けJSON-RPC 2.0 TypeScriptライブラリ。
- [gql](https://github.com/deno-libs/gql) - 汎用GraphQL HTTPミドルウェア。
- [graphql-tag](https://github.com/deno-libs/graphql_tag) - テンプレートリテラルからGraphQLスキーマのASTを生成。
- [nats](https://github.com/nats-io/nats.deno) - [NATSメッセージングシステム](https://nats.io/)向けDenoクライアント。
- [obsidian](https://github.com/open-source-labs/obsidian) - ネイティブなGraphQLキャッシュ用クライアント・サーバーモジュール。
- [router](https://github.com/zhmushan/router) - どこでも動作する高性能の基本ルーター。
- [rpc](https://github.com/deno-libs/rpc) - Deno向けJSONRPCサーバー実装。
- [ts-prometheus](https://github.com/marcopacini/ts_prometheus) - Prometheusクライアント。

### Webview
- [webview](https://github.com/webview/webview_deno) - WebベースのデスクトップGUIを作る小さなライブラリwebviewのDenoバインディング。

### XML
- [sax-ts](https://github.com/Maxim-Mazurok/sax-ts) - [sax-js](https://github.com/isaacs/sax-js)から移植されたSAX形式のXMLパーサー。

## レジストリー <a id="registries"></a>

- [deno.land/x/](https://deno.land/x/) - 公式のサードパーティーモジュールレジストリー。
- [nest.land](https://nest.land) - ブロックチェーンを利用する、変更不能なDenoパッケージレジストリー。

## 活用例 <a id="showcases"></a>

- [Chobble Tickets](https://github.com/chobbledotcom/tickets) - 参加者データの暗号化とStripe・Square・SumUpによる決済を備える、オープンソースのチケット販売システム。
- [Deno Rest](https://github.com/Prolifode/deno_rest) - Deno RESTful API用のボイラープレート。
- [Edrys](https://github.com/edrys-org/edrys) - 遠隔教育ソフトウェア。
- [GitHub Profile Trophy](https://github.com/ryo-ma/github-profile-trophy) - READMEに動的に生成したGitHubトロフィーを追加。
- [ShopSavvy Deno Deploy](https://github.com/shopsavvy/deno-deploy-shopsavvy) - 製品検索、リアルタイムの価格、価格履歴に対応する、Honoを使ったDeno Deployルーター。
- [公式の活用例](https://deno.land/showcase) - Deno公式の活用例。

## ツール <a id="tools"></a>

- [clone](https://github.com/ekaragodin/clone) - クローン操作を便利にするシンプルなユーティリティ。
- [denoflow](https://github.com/denoflow/denoflow) - 設定をコードとして扱い、YAMLでDeno上の自動ワークフローを記述。任意のDenoモジュールやTypeScript/JavaScriptコードを利用可能。
- [denoify](https://github.com/garronej/denoify) - 移植版を書いて保守することなくDenoに対応したいnpmモジュール作者向けのツール。
- [denoliver](https://github.com/joakimunge/denoliver) - ライブリロードを備える、依存関係のないシンプルなファイルサーバー。
- [denomander](https://github.com/siokas/denomander) - commander.jsを参考にしたDenoコマンドラインインターフェース。
- [denon](https://github.com/denosaurs/denon) - nodemonに似たデーモン型スクリプトランナー。Denoで実装され、Deno向けに設計。
- [denopendabot](https://github.com/apps/denopendabot) - Denoプロジェクト向けDependabot。
- [denopkg](https://github.com/egoist-labs/denopkg.com) - DenoプロジェクトでGitHub上のコードを利用するためのツール。
- [Deno Dig](https://github.com/theGEBIRGE/DenoDig) - 単独のDeno実行可能ファイルから、アプリケーションコードとnpmパッケージを抽出。
- [deno_docker](https://github.com/denoland/deno_docker) - Deno向けのDockerfileとイメージ。Alpine、CentOS、Debian、Ubuntuに対応。
- [dmm](https://github.com/drashland/dmm) - 軽量Denoモジュールマネージャー。
- [dnt](https://github.com/denoland/dnt) - Denoからnpmパッケージへのビルドツール。
- [dpm](https://github.com/dpmland/dpm) - npm・Yarnに似た操作感をDenoに提供する、Denoパッケージマネージャー。
- dvm（Denoバージョン管理）
  - [asdf-community/asdf-deno](https://github.com/asdf-community/asdf-deno) - [asdf](https://asdf-vm.com/)用Denoプラグイン。
  - [justjavac/dvm](https://github.com/justjavac/dvm) - 複数の有効なDenoバージョンを管理するDenoバージョンマネージャー。
  - [axetroy/dvm](https://github.com/axetroy/dvm) - ランタイム依存関係のないDenoバージョンマネージャー。
  - [ghosind/dvm](https://github.com/ghosind/dvm) - Linux/macOS向けの軽量Denoバージョンマネージャー。
- [entype](https://github.com/bcheidemann/entype) - シリアライズされたデータから型定義を生成するCLIツール。原文ではJSONからRustとTypeScriptへの変換に対応。
- [kopo-cli](https://github.com/littletof/kopo-cli) - ターミナルで使うDenoレジストリーブラウザー。
- [make-deno-edition](https://github.com/bevry/make-deno-edition) - npmパッケージやNode.jsモジュールなどのpackage.jsonプロジェクトを、自動的にDenoと互換にする。
- [pup](https://github.com/Hexagon/pup) - Deno向けの高度なプロセスマネージャー。自動再起動、ファイルシステム監視、Cronによる起動、プロセステレメトリー、IPC、クラスタリング、負荷分散などに対応。
- [studio-pack-generator](https://github.com/jersou/studio-pack-generator) - フォルダーまたはRSS URLを、Luniiデバイス向けStudioパックへ変換。
- [trex](https://github.com/crewdevio/Trex) - Deno向けのnpmに似たパッケージ管理。
- [udd](https://github.com/hayd/deno-udd) - Denoの依存関係を更新。import文を各依存先の最新公開版へ変更。
- [vscode-deno](https://github.com/denoland/vscode_deno) - `TypeScript Deno language service plugin`を使ってDenoに対応するVS Code拡張。

## 外部サービス・開発ツール連携 <a id="integrations"></a>

- [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview/) - Netlifyプラットフォームとワークフローを接続するEdge Functions。
- [Slack Custom Functions](https://api.slack.com/future/functions/custom) - DenoでカスタムのRun On Slack関数を構築。
- [Smallweb](https://www.smallweb.run/) - 単一ディレクトリーに収まるパーソナルクラウド。Denoでサーバーの動作をカスタマイズ可能。
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions) - エッジへグローバルに分散配置する、サーバーサイドTypeScript関数。
- [Astro](https://docs.astro.build/en/guides/deploy/deno/) - サーバーサイドで描画するAstroサイトをDeno Deployへデプロイ。

## ブログ・ニュースレター <a id="blogsnewsletters"></a>
- [Deno Blog](https://deno.com/blog) - Deno Companyの公式ブログ。
- [Deno News](https://deno.news) - Denoの記事・ニュース・プロジェクトを扱うニュースレター。

## 記事 <a id="articles"></a>

- [Develop with Deno and Visual Studio Code](https://medium.com/@kitsonk/develop-with-deno-and-visual-studio-code-225ce7c5b1ba)
- [First thoughts on Deno, the JavaScript/TypeScript run-time](https://43081j.com/2019/01/first-look-at-deno)
- [Getting started with Deno](https://dev.to/wuz/getting-started-with-deno-e1m)
- [What's Deno, and how is it different from Node.js?](https://dev.to/bnevilleoneill/what-s-deno-and-how-is-it-different-from-node-js-366g)
- [Write a small API using Deno](https://dev.to/kryz/write-a-small-api-using-deno-1cl0)
- [Deno on Cloud Run](https://medium.com/google-cloud/deno-on-cloud-run-89ae64d1664d)
- [Learn Deno: Chat app](https://aralroca.com/blog/learn-deno-chat-app)
- [From Node to Deno](https://dev.to/aralroca/from-node-to-deno-5gpn)
- [Create a simple Note-taking app with Deno](https://dev.to/jeferson_sb/create-a-simple-note-taking-app-with-deno-3k7g)
- [Building API's using Deno, Oak and MYSQL](https://codeforgeek.com/building-api-server-using-deno-and-mysql/)
- [Create your first News CLI app using Deno](https://medium.com/javascript-in-plain-english/creating-your-first-news-cli-app-using-deno-e1470398c627)
- [Continuous Integration with Deno](https://semaphoreci.com/blog/continuous-integration-with-deno)
- [The Hidden Superpower of Deno: xeval](https://stefanbuck.com/blog/hidden-superpower-deno-xeval)
- Oakを使うDeno REST APIチュートリアルシリーズ [0](https://www.robinwieruch.de/deno-tutorial), [1](https://www.robinwieruch.de/deno-oak), [2](https://www.robinwieruch.de/deno-oak-rest-api)
- [Getting Started with Deno](https://sabe.io/tutorials/getting-started-with-deno)
- [How to deploy a Deno app using Docker](https://sabe.io/tutorials/how-to-deploy-deno-app-docker)

## 講演 <a id="presentations"></a>

- [10 Things I Regret About Node.js - Ryan Dahl - JSConf EU 2018](https://www.youtube.com/watch?v=M3BM9TB-8yA)
  - [スライド](https://tinyclouds.org/jsconf2018.pdf)
- [JSDC 2018#A01 - Deno, A New Server-Side Runtime By Ryan Dahl](https://www.youtube.com/watch?v=FlTG0UXRAkE)
- [Ryan Dahl. Deno, a new way to JavaScript. JS Fest 2019 Spring](https://www.youtube.com/watch?v=z6JRlx5NC9E)
  - [スライド](https://www.slideshare.net/JSFestUA/js-fest-2019-ryan-dahl-deno-a-new-way-to-javascript)
- [Rafał Pocztarski — From Node.js to Deno - JavaScript/TypeScript runtime built with V8 and Rust [EN]](https://www.youtube.com/watch?v=Aib1OZLy0_c)
- [Ryan Dahl: A secure runtime for JavaScript and TypeScript | js.la April 2019](https://www.youtube.com/watch?v=RAmqgbv247s)
  - [スライド](https://docs.google.com/presentation/d/1CSQVTeH5tFzE4AZVXIpx9Xwew5YS-gxJZ03eRFtNeIc/edit)
- [Ryan Dahl: Deno, a new way to JavaScript - HolyJS 2019 Piter](https://www.youtube.com/watch?v=HjdJzNoT_qg)
  - [スライド](https://docs.google.com/presentation/d/1BjvZx5S8noVfFINptH4jfKfqh9jB9nXlFC0I3oIDtg4/edit)
- [Rafał Pocztarski - What is Deno? A new runtime for modern JavaScript and TypeScript backends for 2020s - Deno Warsaw](https://www.youtube.com/watch?v=aI5A9zvYSjk)
- [Michał Sabiniarz - How to contribute to Deno? - Deno Warsaw](https://www.youtube.com/watch?v=LAtjnKLbPpw)
- [Bartek Iwańczuk - Deno internals, how modern runtime is built - Deno Warsaw](https://www.youtube.com/watch?v=qt7fbmypAFk)
  - [スライド](https://docs.google.com/presentation/d/1LYNGpyjx9PemL-P__7hVC8mSqkX-jL8VQLMhCRehy00/edit?usp=sharing)
- [Ryan Dahl & Kitson Kelly: Deno is a New Way to JavaScript - TSConf 2019](https://www.youtube.com/watch?v=1gIiZfSbEAE)
- [Bert Belder - Deno - dotJS 2019](https://www.youtube.com/watch?v=puXyo1jGQys)
- [Kitson P. Kelly - Deno, and The Future of JavaScript Runtimes - CityJS Conf 2020](https://www.youtube.com/watch?v=2eRyZpX4qvI)
- [Matías Insaurralde - Deno: an experimental approach on V8 interoperability [EN subtitles] - NodeConf Argentina 2019](https://www.youtube.com/watch?v=N0BRE-0n2cU)
  - [スライド](https://speakerdeck.com/matiasinsaurralde/deno-an-experimental-approach-on-v8-interoperability)

## 資料 <a id="resources"></a>

### 書籍 <a id="books"></a>
- [Modern Web Development with Deno](https://bpbonline.com/products/modern-web-development-with-deno)

## その他の言語の資料 <a id="resources-in-other-languages"></a>

### 中国語 <a id="chinese"></a>

- [Deno 并不是下一代 Node.js](https://juejin.im/post/5b14a390e51d4506c1300bbc)
- [玩 Deno 遇到问题的解决方案](https://juejin.im/post/5b1245b3f265da6e4c6cf249)
- [让我们一起来学习别人学不动的 Deno](https://segmentfault.com/a/1190000015151287)
- [Design Mistakes in Node zh-CN](https://zhuanlan.zhihu.com/p/37637923)
- [Node之父ry：Node中的设计错误](https://mp.weixin.qq.com/s/7XAiYw18c8YZc-fXk0-wrw)
- [Node之父 - Deno，一个新的JS运行时](https://www.bilibili.com/video/av52038617)

### ヘブライ語 <a id="hebrew"></a>

- [ヘブライ語によるDeno入門（スライドは英語）](https://www.youtube.com/watch?v=9tJ_LkI6_qw)

### インドネシア語 <a id="indonesian"></a>

- [Berkenalan dengan Deno](https://medium.com/@redhajuanda/berkenalan-dengan-dengan-deno-c48cdf3aa31e)
- [Perkenalan Deno dan Instalasi](https://youtu.be/V_kpUTJSd9c)
- [Deno Land IndonesiaのTelegramグループ](https://t.me/deno_id)

### イタリア語 <a id="italian"></a>

- [Deno - L'anagramma di Node](https://www.slideshare.net/FrancescoSciuti/deno-lanagramma-di-node)

### 日本語 <a id="japanese"></a>

- [Node.js における設計ミス By Ryan Dahl](https://yosuke-furukawa.hatenablog.com/entry/2018/06/07/080335)
- [mizchi/deno_code_reading.md](https://gist.github.com/mizchi/31e5628751330b624a0e8ada9e739b1e)
- [Design Mistakes in Node & Deno #kng5 / deno](https://speakerdeck.com/masashi/deno)
- [Dive into Deno：プロセス起動からTypeScriptが実行されるまで](https://blog.leko.jp/post/code-reading-of-deno-boot-process/)

### ロシア語 <a id="russian"></a>

- [Telegramチャンネル](https://t.me/denoland_ru)
- [Telegramチャット](https://t.me/denoland)

### スペイン語 <a id="spanish"></a>

- [Hola Deno!](https://medium.com/javascript-espa%C3%B1ol/hola-deno-f31f9f6f2c84)
- [Así puedes crear tu primera API REST con Deno](https://medium.com/@mpampols/as%C3%AD-puedes-crear-tu-primera-api-rest-con-deno-a9094ee5c0b2)
- [Primeros pasos con Deno: El sucesor de NodeJS desarrollado con Rust y TypeScript](https://medium.com/@manurua/primeros-pasos-con-deno-el-nuevo-nodejs-desarrollado-con-rust-y-typescript-b9ac14f7d0c7)
- [Primer vistazo con deno](https://dev.to/buttercubz/first-look-with-deno-spanish-30dh)

### ダリジャ <a id="darija"></a>

- [A first look at Deno | BlaBlaConf 2021](https://www.youtube.com/watch?v=Y_etUvzAa4s)

### クルド語（中央クルド語） <a id="kurdish-central"></a>

- [A short introduction to Deno](https://devs.krd/about-deno)
