---
title: "benallfree/awesome-pocketbase"
description: "benallfree/awesome-pocketbaseの正規スナップショット"
licenseSource: "github-benallfree-awesome-pocketbase-readme-md"
---

# Awesome PocketBase [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

![GitHub forks](https://img.shields.io/github/stars/benallfree/awesome-pocketbase?style=flat) ![GitHub forks](https://img.shields.io/github/forks/benallfree/awesome-pocketbase?style=flat) ![GitHub forks](https://img.shields.io/github/contributors/benallfree/awesome-pocketbase?style=flat)

> 優れた[PocketBase](https://pocketbase.io)リソースを集めたリストです。

PocketBaseは、組み込みデータベース（SQLite）、リアルタイム購読、組み込み認証管理、便利なダッシュボードUI、シンプルなREST風APIから成るオープンソースバックエンドです。

## 目次

- [公式パッケージ](#official-packages)
- [主要なPocketBase専用プロジェクト（スター100超）](#top-pocketbase-specific-projects-100-stars)
- [主要なコミュニティプロジェクト](#major-community-projects)
- [JSVMプラグイン](#jsvm-plugins)
- [Goプラグイン](#go-plugins)
- [React](#react)
- [Svelte](#svelte)
- [Vue](#vue)
- [Solid](#solid)
- [Dart/Flutter](#dartflutter)
- [C#](#c)
- [D](#d)
- [Node.js](#nodejs)
- [非公式PocketBaseクライアント（SDK）](#unofficial-pocketbase-clients-sdks)
- [セルフホスティング](#self-hosting)
- [TypeScriptツール](#typescript-tools)
- [SQLiteツール](#sqlite-tools)
- [その他のツール](#other-tools)
- [ショーケース](#showcases)
- [PocketPortsパッケージ](#pocketports-packages)

## 公式パッケージ

- [Golang Server](https://github.com/pocketbase/pocketbase/releases/) - メインのPocketBaseサーバー。![GitHub Repo stars](https://img.shields.io/github/stars/pocketbase/pocketbase)

- [JavaScript SDK](https://github.com/pocketbase/js-sdk) - PocketBase APIとやり取りするためのブラウザーおよびNode.js向けSDK。![GitHub Repo stars](https://img.shields.io/github/stars/pocketbase/js-sdk)
- [Dart SDK](https://github.com/pocketbase/dart-sdk) - PocketBase Web APIとやり取りするマルチプラットフォームSDK。![GitHub Repo stars](https://img.shields.io/github/stars/pocketbase/dart-sdk)

## 主要なPocketBase専用プロジェクト（スター100超）

- [pockethost.io](https://pockethost.io) - プロ向けPocketBaseホスティング。![GitHub Repo stars](https://img.shields.io/github/stars/pockethost/pockethost)
- [PocketBase Typegen](https://github.com/patmood/pocketbase-typegen) - SQLite DBファイルからTypeScript型を生成します。![GitHub Repo stars](https://img.shields.io/github/stars/patmood/pocketbase-typegen)
- [PocketBase Docker](https://github.com/muchobien/pocketbase-docker) - 複数アーキテクチャをサポートし、PocketBaseリリースで自動更新されるDockerセットアップ。![GitHub Repo stars](https://img.shields.io/github/stars/muchobien/pocketbase-docker)
- [PocketBase+Stripe](https://github.com/mrwyndham/pocketbase-stripe) - Stripeサブスクリプション統合用にGoで拡張したPocketBase。![GitHub Repo stars](https://img.shields.io/github/stars/mrwyndham/pocketbase-stripe)
- [PocketBase+Lemonsqueezy](https://github.com/mrwyndham/pocketbase-lemonsqueezy) - Lemonsqueezyサブスクリプション統合用にGoで拡張したPocketBase。![GitHub Repo stars](https://img.shields.io/github/stars/mrwyndham/pocketbase-lemonsqueezy)
- [SvelteKit Starter](https://github.com/spinspire/pocketbase-sveltekit-starter) - カスタマイズしたPocketBaseをSvelteKitフロントエンドのバックエンドとして使う方法を示すスターターキット。![GitHub Repo stars](https://img.shields.io/github/stars/spinspire/pocketbase-sveltekit-starter)
- [SvelteKit Auth](https://github.com/danawoodman/sveltekit-auth-example) - SvelteKitで認証を設定するための実装参照サンプル。![GitHub Repo stars](https://img.shields.io/github/stars/danawoodman/sveltekit-auth-example)
- [SvelteKit PocketBase Auth](https://github.com/jianyuan/pocketbase-sveltekit-auth) - 例を備えたデモ用ログイン・登録ページ。![GitHub Repo stars](https://img.shields.io/github/stars/jianyuan/pocketbase-sveltekit-auth)

## 主要なコミュニティプロジェクト

- [pocketpages.dev](https://pocketpages.dev) - PocketBase向けのサーバーサイドJSページとホスティング。![GitHub Repo stars](https://img.shields.io/github/stars/benallfree/pocketpages)
- PocketPorts - PocketBase JSVMへ移植したNPM/Node.jsパッケージ。公式リストはこのawesome-pocketbaseで公開されています。

## JSVMプラグイン

- [pocketbase-otp](https://github.com/benallfree/pocketbase-otp) - <=v0.22.\*向けワンタイムパスワード。![GitHub Repo stars](https://img.shields.io/github/stars/benallfree/pocketbase-otp)
- [pocketpages](https://github.com/benallfree/pocketpages) - PocketBase向けサーバーサイドEJSページ。![GitHub Repo stars](https://img.shields.io/github/stars/benallfree/pocketpages)
- [pocketbase-presigned-urls](https://github.com/benallfree/pocketbase-presigned-urls) - 署名付きS3 URLからファイルアップロードを配信します。![GitHub Repo stars](https://img.shields.io/github/stars/benallfree/pocketbase-presigned-urls)

## Goプラグイン

- [Telegram auth](https://github.com/iamelevich/pocketbase-plugin-telegram-auth) - Telegram認証（ウィジェットボタンとWebApp）を追加します。![GitHub Repo stars](https://img.shields.io/github/stars/iamelevich/pocketbase-plugin-telegram-auth)
- [Ngrok](https://github.com/iamelevich/pocketbase-plugin-ngrok) - ngrokを使ってローカルのPocketBaseをインターネットへ公開します。![GitHub Repo stars](https://img.shields.io/github/stars/iamelevich/pocketbase-plugin-ngrok)
- [Proxy](https://github.com/iamelevich/pocketbase-plugin-proxy) - リクエストを別のホストへ転送します。Next.jsのようにフロントエンドに別サーバーを使いつつ、すべてを同じポートで提供したい場合に役立ちます。![GitHub Repo stars](https://img.shields.io/github/stars/iamelevich/pocketbase-plugin-proxy)
- [Webhooks](https://gist.github.com/cugu/9e74f75dcad3df74370c71ff3c02085a) - 選択したコレクションの`create`、`update`、`delete`イベントをPOSTリクエストで他システムへ送るWebhookサポートを管理UIに追加します。
- [TypeScript Generator](https://github.com/Vogeslu/pocketbase-ts-generator) - 自動生成フックまたはコマンドを備え、TypeScript型を生成するスタンドアロンツールまたはライブラリ。![GitHub Repo stars](https://img.shields.io/github/stars/Vogeslu/pocketbase-ts-generator)
- [pocketbase-gogen](https://github.com/Snonky/pocketbase-gogen) - PocketBaseスキーマからデータモデル構造体を生成します。![GitHub Repo stars](https://img.shields.io/github/stars/Snonky/pocketbase-gogen)
- [pb-ext](https://github.com/magooney-loon/pb-ext) - 監視、ロギング、APIドキュメントを備えた拡張PocketBaseサーバー。![GitHub Repo stars](https://img.shields.io/github/stars/magooney-loon/pb-ext)

## React

- [PocketBase React](https://github.com/tobicrain/pocketbase-react) - PocketBase JavaScript SDKとやり取りする非公式React SDK（React、React Native、Expo）。![GitHub Repo stars](https://img.shields.io/github/stars/tobicrain/pocketbase-react)
- [PocketBase Next.js App Template](https://github.com/tsensei/nextjs-pocketbase-starter-template) - Cookieを使うサーバー・ブラウザークライアントを備えたPocketBase Next.jsテンプレート。![GitHub Repo stars](https://img.shields.io/github/stars/tsensei/nextjs-pocketbase-starter-template)
- [Next.js PocketBase Auth](https://github.com/jianyuan/pocketbase-nextjs-auth) - PocketBase統合、型付きクライアント、サーバー・クライアントサイドレンダリング技法、サーバーアクションを備えるNext.js 15サンプルアプリケーション。![GitHub Repo stars](https://img.shields.io/github/stars/jianyuan/pocketbase-nextjs-auth)
- [next-pocketbase-auth](https://github.com/g12i/next-pocketbase-auth) - クライアント・サーバー両コンポーネントでユーザーセッションを扱いやすくする、Next.jsアプリケーション向け軽量認証ラッパー。![GitHub Repo stars](https://img.shields.io/github/stars/g12i/next-pocketbase-auth)
- [pbtsdb](https://github.com/nathanstitt/pbtsdb) - リアルタイム購読を用いたLiveQueriesを容易に作成できる、型安全なTanStack DBアダプター。![GitHub Repo stars](https://img.shields.io/github/stars/nathanstitt/pbtsdb)

## Svelte

- [svelte-query-pocketbase](https://github.com/goknsh/svelte-query-pocketbase) - クエリキャッシュをリアルタイム更新する、Svelte／SvelteKit向けPocketBase TanStack Queryラッパー。![GitHub Repo stars](https://img.shields.io/github/stars/goknsh/svelte-query-pocketbase)
- [pocketbase-sveltekit-starter](https://github.com/spinspire/pocketbase-sveltekit-starter) - カスタマイズした（Go/JS）PocketBaseをSvelteKitフロントエンドのバックエンドとして使う方法を示すスターターキット。![GitHub Repo stars](https://img.shields.io/github/stars/spinspire/pocketbase-sveltekit-starter)
- [pocketbase-sveltekit-static](https://github.com/Egor-S/pocketbase-sveltekit-static) - デプロイ用の単一Dockerイメージ（55 MBから）を特徴とする、認可設定済みの最小テンプレート。![GitHub Repo stars](https://img.shields.io/github/stars/Egor-S/pocketbase-sveltekit-static)

## Vue

- [Vue 3 + Vite starter kit](https://github.com/StefanVDWeide/pocketbase-vue) - Vue 3 + Vite + PocketBase向けスターターキット。![GitHub Repo stars](https://img.shields.io/github/stars/StefanVDWeide/pocketbase-vue)
- [Tutorial](https://studioterabyte.nl/en/blog/pocketbase-vue-3) - Vue 3チュートリアル。
- [Quasar starter kit](https://github.com/aaronblondeau/pocketbase_quasar_starter) - Quasarと組み合わせたPocketBase。![GitHub Repo stars](https://img.shields.io/github/stars/aaronblondeau/pocketbase_quasar_starter)
- [PocketNuxt](https://github.com/j-wil/pocket-nuxt) - 単一バイナリにビルドできるNuxt3 PocketBaseスターター。![GitHub Repo stars](https://img.shields.io/github/stars/j-wil/pocket-nuxt)

## Solid

- [Solid-pocketbase-hooks](https://github.com/kirill-dev-pro/solid-pocketbase-hooks) - Solid.js向けPocketBaseフック。![GitHub Repo stars](https://img.shields.io/github/stars/kirill-dev-pro/solid-pocketbase-hooks)

## Dart/Flutter

- [PocketBase Drift](https://github.com/rodydavis/pocketbase_drift) - DriftでキャッシュするPocketBaseクライアント。![GitHub Repo stars](https://img.shields.io/github/stars/rodydavis/pocketbase_drift)
- [Dart Generator](https://github.com/rodydavis/pocketbase_dart_generator) - ローカルSQLite、JSON、GraphQLリゾルバーで使う型安全なクライアントSDKを生成します。![GitHub Repo stars](https://img.shields.io/github/stars/rodydavis/pocketbase_dart_generator)
- [PocketBase Server Flutter](https://github.com/rohitsangwan01/pocketbase_server_flutter) - Android/iOSからPocketBaseサーバーを直接実行するFlutterプラグイン。![GitHub Repo stars](https://img.shields.io/github/stars/rohitsangwan01/pocketbase_server_flutter)

## C#

- [ORM and code generator](https://github.com/iluvadev/PocketBaseClient-csharp) - PocketBaseアプリケーションを管理するORM。![GitHub Repo stars](https://img.shields.io/github/stars/iluvadev/PocketBaseClient-csharp)
- [PocketBaseSharp](https://github.com/PSCourtney/PocketBaseSharp) - PocketBase向けC# SDKとデモBlazor WebAssemblyウェブアプリ。![GitHub Repo stars](https://img.shields.io/github/stars/PSCourtney/PocketBaseSharp)

## D

- [libpb](https://github.com/Hax-io/libpb) - JSONとの自動シリアライズ・デシリアライズを備えるD向けPocketBaseクライアントラッパー。![GitHub Repo stars](https://img.shields.io/github/stars/Hax-io/libpb)

## Node.js

- [gobot](https://github.com/benallfree/gobot) - npmパッケージとしてのPocketBase。CLIとAPIを提供します。![GitHub Repo stars](https://img.shields.io/github/stars/benallfree/gobot)

## 非公式PocketBaseクライアント（SDK）

- [Go](https://github.com/pluja/pocketbase) - Go言語のPocketBaseクライアント。![GitHub Repo stars](https://img.shields.io/github/stars/pluja/pocketbase)
- [Kotlin](https://github.com/agrevster/pocketbase-kotlin) - KotlinのPocketBaseクライアント。![GitHub Repo stars](https://img.shields.io/github/stars/agrevster/pocketbase-kotlin)
- [Kotlin (Multiplatform)](https://github.com/IdanAizikNissim/pocketbase-kt) - KotlinのPocketBaseクライアント。![GitHub Repo stars](https://img.shields.io/github/stars/IdanAizikNissim/pocketbase-kt)
- [Python (Sync)](https://github.com/vaphes/pocketbase) - PythonのPocketBaseクライアント。![GitHub Repo stars](https://img.shields.io/github/stars/vaphes/pocketbase)
- [Python (Async)](https://github.com/thijsmie/pocketbase) - PythonのPocketBaseクライアント。![GitHub Repo stars](https://img.shields.io/github/stars/thijsmie/pocketbase)
- [C#](https://github.com/PRCV1/pocketbase-csharp-sdk) - C#のPocketBaseクライアント。![GitHub Repo stars](https://img.shields.io/github/stars/PRCV1/pocketbase-csharp-sdk)
- [Rust](https://github.com/sreedevk/pocketbase-sdk-rust) - RustのPocketBaseクライアント。![GitHub Repo stars](https://img.shields.io/github/stars/sreedevk/pocketbase-sdk-rust)
- [Unity (Multiplatform)](https://github.com/Sov3rain/pocketbase-unity) - Unity 3Dゲームエンジン向けPocketBaseクライアント。![GitHub Repo stars](https://img.shields.io/github/stars/Sov3rain/pocketbase-unity)

## セルフホスティング

- [DigitalOcean](https://github.com/pocketbase/pocketbase/discussions/512) - Dropletへデプロイするガイド。
- [Fly.io](https://github.com/pocketbase/pocketbase/discussions/537) - Fly.ioへ無料でデプロイするガイド。
- [Railway](https://github.com/metruzanca/pocketbase_railway) - Railwayへデプロイするガイド。
- [AWS Lightsail](https://github.com/boustanihani/pocketbase-lightsail-hosting) - AWS Lightsailへデプロイするガイド。
- [LocalXpose](https://localxpose.io/docs/tutorials/expose-pocketbase-backend) - localhostインスタンスへのパブリックアクセスを許可します。
- [PocketBase Docker](https://github.com/kdpuvvadi/pocketbase) - 複数アーキテクチャをサポートし、最新PocketBaseリリースで更新されるDockerイメージ。![GitHub Repo stars](https://img.shields.io/github/stars/kdpuvvadi/pocketbase)
- [PocketBase on Dokku](https://github.com/blockshiftnetwork/dokku-pocketbase) - DokkuへPocketBaseインスタンスを手軽にデプロイします。![GitHub Repo stars](https://img.shields.io/github/stars/blockshiftnetwork/dokku-pocketbase)
- [PBLauncher](https://github.com/user0608/pb_launcher) - 高速・軽量・オープンソースのPocketBaseインスタンス管理ツール。![GitHub Repo stars](https://img.shields.io/github/stars/user0608/pb_launcher)
- [pb-deployer](https://github.com/magooney-loon/pb-deployer) - PocketBaseアプリを本番環境へデプロイするライフサイクルを自動化します。![GitHub Repo stars](https://img.shields.io/github/stars/magooney-loon/pb-deployer)

## TypeScriptツール

- [pocketbase-jsvm](https://github.com/benallfree/pocketbase-jsvm) - JSVM型定義。![GitHub Repo stars](https://img.shields.io/github/stars/benallfree/pocketbase-jsvm)
- [pb_hooks starter kit](https://github.com/benallfree/ts-pb-hooks-starter) - TypeScriptを使ってPocketBase JavaScriptフックを構築します。![GitHub Repo stars](https://img.shields.io/github/stars/benallfree/ts-pb-hooks-starter)
- [typed-pocketbase](https://github.com/david-plugge/typed-pocketbase) - PocketBaseインスタンスから型を生成し、完全に型安全なクエリを実現します。![GitHub Repo stars](https://img.shields.io/github/stars/david-plugge/typed-pocketbase)
- [pocketbase-ts](https://github.com/satohshi/pocketbase-ts) - より読みやすい`options`構文と完全な型安全性を備えるSDKラッパー。![GitHub Repo stars](https://img.shields.io/github/stars/satohshi/pocketbase-ts)
- [pocketbase-query](https://github.com/emresandikci/pocketbase-query) - PocketBase用の複雑なフィルタークエリを生成するTypeScriptベースのクエリビルダー。流暢で連鎖可能なAPIを維持しつつ、各種演算子でクエリを容易に構築できます。![GitHub Repo stars](https://img.shields.io/github/stars/emresandikci/pocketbase-query)
- [pocketbase-schema-generator](https://github.com/satohshi/pocketbase-schema-generator) - スキーマファイルを自動生成するJSフック。（Zod/TSインターフェース）![GitHub Repo stars](https://img.shields.io/github/stars/satohshi/pocketbase-schema-generator)
- [pb-query](https://github.com/sergio9929/pb-query) - 問い合わせを単純化する便利なヘルパー、例、ドキュメント、スキーマに基づくIDE内の完全な自動補完を備えた、柔軟で強く型付けされたクエリビルダー。![GitHub Repo stars](https://img.shields.io/github/stars/sergio9929/pb-query)
- [pbkit](https://github.com/Karnak19/pbkit) - PocketBaseコード生成ツールキット。コレクションをイントロスペクトし、TanStack Query、Zod、リアルタイム用プラグインを備えた完全型付きTypeScript SDKを生成します。![GitHub Repo stars](https://img.shields.io/github/stars/Karnak19/pbkit)

## SQLiteツール

- [Marmot](https://github.com/maxpert/marmot) - 分散SQLiteレプリケーター（[PocketBaseチュートリアル付き](https://www.youtube.com/watch?v=Zapupe_FREc)）。![GitHub Repo stars](https://img.shields.io/github/stars/maxpert/marmot)
- [Litestream](https://litestream.io/) - ストリーミングSQLiteレプリケーション。![GitHub Repo stars](https://img.shields.io/github/stars/benbjohnson/litestream)
- [PocketBase+Litestream example](https://github.com/TylerSustare/pocketbase-framework-litestream) - PocketBaseとLitestreamを実行する方法を示すテンプレート。![GitHub Repo stars](https://img.shields.io/github/stars/TylerSustare/pocketbase-framework-litestream)
- [PocketBase with Litestream](https://github.com/bscott/pocketbase-litestream/) - Litestreamから保存・復元するPocketBaseのDocker例。![GitHub Repo stars](https://img.shields.io/github/stars/bscott/pocketbase-litestream)
- [pb-import](https://github.com/burggraf/pb-import) - SQLiteデータベース、CSV、TSVファイルからデータをインポートします。![GitHub Repo stars](https://img.shields.io/github/stars/burggraf/pb-import)

## その他のツール

- [PocketBaseUML](https://pocketbase-uml.github.io/) - PocketBaseデータベースに基づいてUML図を生成する、無料のオープンソースウェブアプリケーション。![GitHub Repo stars](https://img.shields.io/github/stars/bscott/pocketbase-litestream)
- [PocketBaseMobile](https://github.com/rohitsangwan01/pocketbase_mobile) - モバイルからPocketBaseを実行するAndroid／iOSフレームワーク。![GitHub Repo stars](https://img.shields.io/github/stars/rohitsangwan01/pocketbase_mobile)
- [pbf](https://github.com/nedpals/pbf) - PocketBaseフィルター構文をシリアライズ・デシリアライズするライブラリ。![GitHub Repo stars](https://img.shields.io/github/stars/nedpals/pbf)
- [PocketBase Templates](https://github.com/Pocket-Space/pocketbase-templates) - すばやく開始できるPocketBaseスキーマのオープンソースコレクション。![GitHub Repo stars](https://img.shields.io/github/stars/Pocket-Space/pocketbase-templates)
- [pocketbase-queue](https://github.com/joseferben/pocketbase-queue) - PocketBaseを使うバックグラウンドタスク向けの型安全なキュー。![GitHub Repo stars](https://img.shields.io/github/stars/joseferben/pocketbase-queue)
- [PocketBase GPT](https://chat.openai.com/g/g-Owo2FBp4K-pocketbase-gpt) - PocketBaseの全ドキュメントを取り込み、より正確で最新の回答を提供するGPT。
- [PocketBase API Rule Builder](https://pocketbase-api-rule-builder.vercel.app) - PocketBaseコレクションのAPIルールを視覚的に簡単に生成できる、無料のオープンソースウェブアプリケーション。![GitHub Repo stars](https://img.shields.io/github/stars/kerimovok/pocketbase-api-rule-builder)
- [pb-llm](https://github.com/magooney-loon/pb-llm) - PocketBase LLMドキュメントスクレイパー。![GitHub Repo stars](https://img.shields.io/github/stars/magooney-loon/pb-llm)
- [pocketbase-security-skill](https://github.com/Perufitlife/pocketbase-security-skill) - 寛容な既定ルールのワイルドカード、匿名レコード一覧の露出、管理API設定ミスを匿名で検査するオープンソースMIT監査ツール。コピー＆ペースト可能な修正スニペットを含むHTMLレポートを出力します。![GitHub Repo stars](https://img.shields.io/github/stars/Perufitlife/pocketbase-security-skill)

## ショーケース

- [Vimsnake](https://github.com/patmood/vim_snake) - Vimコマンドをコントローラー入力として使うリアルタイムWebAssemblyゲーム。![GitHub Repo stars](https://img.shields.io/github/stars/patmood/vim_snake)
- [ToDo](https://github.com/rajesh6161/pocketbaseTodo) - ReactベースのTo-Doデモアプリ。![GitHub Repo stars](https://img.shields.io/github/stars/rajesh6161/pocketbaseTodo)
- [Realtime Blog](https://github.com/rajesh6161/pbRealtimeBlog) - Reactベースのリアルタイムブログデモ。![GitHub Repo stars](https://img.shields.io/github/stars/rajesh6161/pbRealtimeBlog)
- [oAuth](https://github.com/rajesh6161/pocketbase-oauth-demo) - ReactベースのoAuthデモ。![GitHub Repo stars](https://img.shields.io/github/stars/rajesh6161/pocketbase-oauth-demo)
- [Flutter Chat App](https://github.com/rohitsangwan01/flutter_pocketbase_chat) - FlutterでPocketBaseを使うチャットアプリ。![GitHub Repo stars](https://img.shields.io/github/stars/rohitsangwan01/flutter_pocketbase_chat)
- [JustJot](https://justjot.app) - キーボードファーストのメモ作成用フル機能Progressive Web App。[フロントエンドリポジトリ](https://github.com/JunoNgx/justjot-frontend)／[バックエンドリポジトリ](https://github.com/JunoNgx/justjot-backend) ![GitHub Repo stars](https://img.shields.io/github/stars/JunoNgx/justjot-backend)
- [Cookie auth demo](https://github.com/davidbarton/pocketbase-cookie-auth-demo) - PocketBase用Cookieベース認証フローのデモ。![GitHub Repo stars](https://img.shields.io/github/stars/davidbarton/pocketbase-cookie-auth-demo)
- [Adnexos](https://github.com/tametsi/adnexos) - ウェブ上でセルフホストできる支出割り勘ツール。![GitHub Repo stars](https://img.shields.io/github/stars/tametsi/adnexos)
- [pocketbase-libsql](https://github.com/cobeo2004/pocketbase-libsql) - LibSQLとsqldによってPocketBaseをスケールさせる概念実証。![GitHub Repo stars](https://img.shields.io/github/stars/cobeo2004/pocketbase-libsql)
- [PocketChat](https://github.com/PocketTogether/pocket-chat) - PocketBaseとVue3で構築したリアルタイムチャットプラットフォーム。OAuth、通知、PWA、ファイル・画像共有、権限などをサポートします。![GitHub Repo stars](https://img.shields.io/github/stars/PocketTogether/pocket-chat)
- [TinyCld](https://github.com/tinycld) - メール、カレンダー、ドライブ、テキスト、計算パッケージを備えるフル機能ワークスペース。リアルタイムDBとファイルストレージにはReact NativeでPocketBaseを使用し、imap/smtp/caldav/webdav用GoサービスでPocketBaseサーバーを拡張します。

## PocketPortsパッケージ

PocketBase JSVMへ移植したNPM/Node.jsパッケージです。

| 元パッケージ                                    | 移植パッケージ                                                   | 説明                                                           |                                                                                      |
| ---------------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [Node.js](https://nodejs.org/docs/latest/api/) | [pocketbase-node](https://github.com/benallfree/pocketbase-node) | Node.jsコアパッケージ（`fs`、`process`など）                   | ![GitHub Repo stars](https://img.shields.io/github/stars/benallfree/pocketbase-node) |
| [ejs](https://github.com/mde/ejs)              | [pocketbase-ejs](https://github.com/benallfree/pocketbase-ejs)   | 埋め込みJavaScriptテンプレート - [http://ejs.co](http://ejs.co) | ![GitHub Repo stars](https://img.shields.io/github/stars/benallfree/pocketbase-ejs)  |
| [marked](https://github.com/markedjs/marked)   | 変更なしで動作                                                   | 高速性を重視したMarkdownパーサー・コンパイラー。               | ![GitHub Repo stars](https://img.shields.io/github/stars/markedjs/marked)            |
