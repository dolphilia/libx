---
title: "Awesome Angular"
description: "Angularを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-PatrickJS-awesome-angular-readme-md"
---

# Awesome Angular

Angularを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

* [Angular](#angular)
  * [公式資料](#official-resources)
  * [ビルダー](#builders)
  * [CLIツール](#cli-tools)
  * [デプロイ](#deployment)
  * [デスクトップアプリ](#desktop-applications)
  * [Angularの更新](#updating-angular)
* [Angularの動向](#angular-pulse)
  * [コミュニティ](#community)
  * [ニュースレター](#newsletters)
  * [ポッドキャスト](#podcasts)
  * [Bluesky](#bluesky)
  * [X上のAngularチーム](#angular-team-on-x)
  * [X上のAngular専門家](#angular-experts-on-x)
  * [X上のGoogle Developer Expert](#google-developer-experts-on-x)
* [学習資料](#learning-resources)
  * [ブログ](#blogs)
  * [書籍](#books)
  * [認定プログラム](#certification-programs)
  * [チートシート](#cheat-sheets)
  * [演習](#exercises)
  * [トレーニング](#training)
  * [スタイルガイド](#style-guides)
  * [YouTubeチャンネル](#youtube-channels)
* [アーキテクチャと高度なトピック](#architecture-and-advanced-topics)
  * [機能フラグ](#feature-flags)
  * [GraphQL](#graphql)
  * [HTTP](#http)
  * [マイクロフロントエンド](#micro-frontends)
  * [Module Federation](#module-federation)
  * [モノレポ](#monorepos)
  * [サーバーサイドレンダリング](#server-side-rendering)
* [開発ユーティリティ](#development-utilities)
  * [アクセシビリティ](#accessibility)
  * [AI](#ai)
  * [分析](#analytics)
  * [コード解析](#code-analysis)
  * [デバッグ](#debugging)
  * [ドキュメントツール](#documentation-tools)
  * [IDE拡張](#ide-extensions)
  * [ジェネレーターとスキャフォールディング](#generators-and-scaffolding)
  * [国際化](#internationalization)
  * [Lint](#linting)
  * [ネットワーク](#networking)
  * [性能](#performance)
  * [ランタイム](#runtime)
  * [SEO](#seo)
  * [スタイリング](#styling)
* [セキュリティと認証](#security-and-authentication)
  * [認証](#authentication)
  * [決済](#payments)
  * [ロールベースアクセス制御](#role-based-access-control)
  * [セキュリティのベストプラクティス](#security-best-practices)
* [状態管理](#state-management)
  * [NgRx](#ngrx)
  * [NGXS](#ngxs)
  * [その他の状態管理ライブラリ](#other-state-libraries)
* [テスト](#testing)
  * [E2E](#e2e)
  * [コンポーネント](#component)
  * [ヘルパー](#helpers)
* [サイトテンプレート](#site-templates)
  * [無料テンプレート](#free-templates)
  * [有料テンプレート](#paid-templates)
* [サードパーティ製コンポーネント](#third-party-components)
  * [アニメーション](#animations)
  * [カレンダー](#calendars)
  * [CAPTCHA](#captcha)
  * [カルーセル](#carousels)
  * [チャート](#charts)
  * [Cookie](#cookies)
  * [CSV](#csv)
  * [データグリッド](#data-grids)
  * [日付](#dates)
  * [ディレクティブ](#directives)
  * [DOM](#dom)
  * [ドラッグ＆ドロップ](#drag-and-drop)
  * [エディター](#editors)
  * [ファイルアップロード](#file-upload)
  * [フォーム](#forms)
  * [フォームコントロール](#form-controls)
  * [JSONフォーム](#json-forms)
  * [フォーム検証](#form-validation)
  * [アイコン](#icons)
  * [画像](#images)
  * [キーボード・マウス](#keyboard-mouse)
  * [レイアウト](#layout)
  * [ローダー](#loaders)
  * [ロガー](#loggers)
  * [地図](#maps)
  * [Markdown](#markdown)
  * [メディア](#media)
  * [複合ユーティリティ](#mixed-utilities)
  * [モーダル](#modals)
  * [通知](#notifications)
  * [オンボーディングと製品ツアー](#onboarding-and-product-tours)
  * [PDF](#pdf)
  * [パイプ](#pipes)
  * [印刷](#printing)
  * [QRコード](#qr-codes)
  * [ルーター](#router)
  * [スクロール](#scroll)
  * [ストレージ](#storage)
  * [ツールチップ](#tooltips)
  * [UIライブラリ](#ui-libraries)
  * [BootstrapベースのUIライブラリ](#ui-libraries-built-on-bootstrap)
  * [MaterialベースのUIライブラリ](#ui-libraries-built-on-material)
  * [Tailwind CSSベースのUIライブラリ](#ui-libraries-built-on-tailwind-css)
  * [UIライブラリ／フレームワークIonic](#ui-library-and-framework-ionic)
  * [UIプリミティブ](#ui-primitives)
  * [ビューアー](#viewers)
  * [視覚効果](#visual-effects)
* [基盤技術](#underlying-technologies)
  * [RxJS](#rxjs)
  * [TypeScript](#typescript)
* [フレームワーク相互運用](#framework-interoperability)
  * [フレームワーク横断統合](#cross-framework-integration)
  * [外部統合](#external-integration)
  * [ラッパー](#wrappers)
* [Angularに着想を得たソリューション](#angular-inspired-solutions)
* [外部リスト](#external-lists)

## Angular <a id="angular"></a>

> Angularは、開発者が高速で信頼性が高く、利用者に好まれるアプリケーションを構築するためのWebフレームワークです。

### 公式資料 <a id="official-resources"></a>

* [Site](https://angular.dev)
* [Blog](https://blog.angular.dev/)
* [Documentation](https://angular.dev/overview)
* [Getting Started Tutorial](https://angular.dev/tutorials/learn-angular)
* [GitHub Repo](https://github.com/angular/angular)
* [Past Documentation Site](https://v17.angular.io/docs)

### ビルダー <a id="builders"></a>

* [Webpack](https://webpack.js.org)
* [esbuild](https://esbuild.github.io/)
* [Angular Builders](https://github.com/just-jeb/angular-builders) - このリポジトリは、Angularのビルドファサードに必要なコミュニティ開発者（ES Build、Webpack、Jest、Bazel、およびTimestamp）を統合しています。
* [Jest Builder](https://github.com/just-jeb/angular-builders/tree/master/packages/jest)
* [Custom Webpack](https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack)
* [Custom esbuild](https://github.com/just-jeb/angular-builders/tree/master/packages/custom-esbuild)
* [Bazel](https://github.com/just-jeb/angular-builders/tree/master/packages/bazel) - ng build、ng testなどに反応してBazelを実行できるAngular CLIビルダーを提供します。
* [Timestamp](https://github.com/just-jeb/angular-builders/tree/master/packages/timestamp) - これはこの [article](https://medium.com/angular-in-depth/angular-cli-under-the-hood-builders-demystified-v2-e73ee0f2d811) に説明されています.
* [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus) - Angular Elementsなど、Angular CLIのデフォルトビルド行動を拡張できるように、eject（脱出）せずに設定できます。
* [ngx-electronify](https://github.com/bampakoa/ngx-electronify) - Electronを使用してデスクトップ上でアプリケーションを実行するAngular CLIビルダーです。
* [dotenv-run](https://github.com/chihab/dotenv-run) - 環境変数をスムーズに読み込みます。CLI、esbuild、Rollup、Vite、Webpack、Angular、ESMおよびMonoreposに対応しています。
* [ng-packagr](https://github.com/ng-packagr/ng-packagr) - Angularパッケージフォーマット（APF）でAngularライブラリをコンパイル・パッケージ化します。
* [angular-env-builder](https://github.com/igorissen/angular-env-builder) - 環境変数に基づいて `src/environments/environment.ts` ファイルを生成するビルダー.
* [angular-rspack](https://github.com/nrwl/nx/tree/HEAD/packages/angular-rspack) - Angular アプリケーション向けの [Rspack](https://github.com/web-infra-dev/rspack) プラグインとツールセット.
* [ngx-devkit-builders](https://github.com/Celtian/ngx-devkit-builders) - このパッケージには、Angularアプリケーションおよびライブラリのビルドとテストに使用されるアーキテクチャビルダーが含まれています。
* [angular-static-assets-hash](https://github.com/sitelint/angular-static-assets-hash) - Angularの静的アセットの一覧を作成し、各ファイルに対してハッシュを生成します。
* [ngx-schematic-builder](https://github.com/kstepien3/ngx-schematic-builder) - Angularスケミックプロジェクトのビルドツールです。カスタムスケミックをコンパイル・パッケージ化し、公開および使用に備えます。
* [ng-builder-typescript](https://github.com/da-mkay/ng-builder-typescript) - Angular CLI 用のビルダーで、TypeScript コンパイラ `tsc` を使用して Node.js アプリケーションをビルドします（Webpack またはその他のバンドラーは使用しません）.

### CLIツール <a id="cli-tools"></a>

* [Official website](https://angular.dev/tools/cli)
* [Official GitHub repository](https://github.com/angular/angular-cli)
* [alterforge](https://github.com/themodulardev/alterforge) - ReactまたはAngularのフロントエンドをオプションとして含むモジュラリーマイクロサービスアーキテクチャをスケルトン化・管理するCLIツールです。
* [@MohamedBouattour/angular-clean-architecture](https://github.com/MohamedBouattour/angular-clean-architecture) - 明確で保守性の高いレイヤーを持つ、プロダクション対応のAngular機能を、Clean Architectureに基づいて生成するCLIツールです。
* [angular-cli-diff](https://github.com/cexbrayat/angular-cli-diff) - Angular CLIアプリケーションを簡単にバージョンアップできます（🚀）。
* [angular-cli-ssr-diff](https://github.com/cexbrayat/angular-cli-ssr-diff) - Angular CLI SSRアプリケーションを簡単にバージョンアップできます（🚀）。
* [angular-parallel-test-runner](https://github.com/mahdi-hajian/angular-parallel-test-runner) - 複数のプロジェクトで並列にAngularテストを実行するCLI。利用可能なCPUコアを活用します。
* [angular-web-cli](https://github.com/qodalis-solutions/angular-web-cli) - 開発者向けにワークフローを簡素化し、タスクを自動化し、カスタマイズ可能なユーティリティを提供する柔軟なCLIツールです。
* [Better-Fullstack](https://github.com/Marve10s/Better-Fullstack) - 数秒でプロダクション対応のフルスタックアプリケーションをスケルトン化できます。425の選択肢からスタックを選択し、CLIがすべてを接続します。
* [dotairc](https://github.com/elecash/dotairc) - AIアシスタントがあなたのコードベースと協働する際の一貫性のある指示を作成するためのツールです。
* [firebase-framework-tools](https://github.com/FirebaseExtended/firebase-framework-tools) - 実験的な [Firebase CLI](https://github.com/firebase/firebase-tools/) エクステンションでウェブフレームワークのサポートを追加します.
* [i18n-fixer](https://github.com/zfurkandurum/i18n-fixer) - フレームワークに依存しないCLIツールで、ハードコードされた文字列、i18nキーの欠落、未使用の翻訳を検出します。
* [js-stack](https://github.com/vipinyadav01/js-stack) - プロダクション対応のJavaScriptフルスタックプロジェクトをスケルトン化するための現代的なCLI。カスタマイズとベストプラクティスプレセットを提供します。
* [kqgen](https://github.com/KilloconQ/kqgen) - Angularコンポーネントやサービスを高速かつ柔軟に生成するCLI。テーブル、フィルター、REST/GraphQLサービス用のプレセットを含みます。
* [lin](https://github.com/yuo-app/lin) - Lazy I18N は、LLMs を使ってロケール JSON を翻訳する CLI ツールです。
* [mcp-angular-cli](https://github.com/talzach/mcp-angular-cli) - Angular CLI およびワークスペース自動化を提供するサーバーで、LLMs およびエージェントがコンポーネントを生成し、パッケージを追加し、ワークスペースを作成し、カスタムアーキテクトターゲットを実行できるようにします。
* [nest-schematics](https://github.com/lcasass3/nest-schematics) - NestJS における CQRS（Command Query Responsibility Segregation）モジュールを、ヘキサゴナルアーキテクチャで生成する Angular CLI のスケミックです。
* [ng-chrome-extension](https://github.com/larscom/ng-chrome-extension) - 簡単に Angular Chrome エクステンション（manifest v3）を作成できます。
* [ng-create-with-config](https://github.com/tranvo-dev/ng-create-with-config) - Prettier、ESLint、Husky および Lint-staged を事前設定した Angular プロジェクトを初期化するための最小限のツールです。
* [ngTooLazy](https://github.com/Iram0598/ng-toolazy) - 現代的なコンベンション、意見に基づいたアーキテクチャ、スタートブレーカー（ガード、インターセプタ、レイアウト）を備えた Angular アプリケーションをスケルトン化する Node.js CLI です。
* [ns-gc](https://github.com/th3n00bc0d3r/ns-gc) - 軽量なコマンドラインツールで、独自の構造と設定なしで、NativeScript Angular コンポーネントおよびAngularサービスを生成します。
* [ngx-i18n-scan](https://github.com/pratiksonone/ngx-i18n-scan) - Angularコードをスキャンして、i18n翻訳キーを抽出・更新するCLIツールで、翻訳ファイルを清潔に保ちます。
* [ngx-stats](https://github.com/tomer953/ngx-stats) - Angularプロジェクトを分析し、モジュール、コンポーネント、ディレクティブ、パイプ、サービスの数を定量化して、アーキテクチャの洞察を明確に提供するCLIツールです。
* [ngx-ws](https://github.com/art-ws/ngx-ws) - 大きな `angular.json` を [JSON References](https://www.npmjs.com/package/@apidevtools/json-schema-ref-parser) の力でモジュール化し、プロジェクトローカルファイルに分割できるようにし、 [YAML](https://yaml.org/) および [JSON5](https://json5.org/) フォーマットの利便性を活かします.
* [prepare-angular-json](https://github.com/ackheron/prepare-angular-json) - コメント付き からクリーンな ファイルを生成する軽量 CLI ツール. `angular.json` `angular.jsonc`
* [rafacli](https://github.com/rafa00716/rafacli) - NestJSおよびAngular向けに認証とCRUDモジュールを生成し、ブレーカーを自動化して開発をスムーズにし、一貫性を確保するCLIツールです。
* [ngx-crafter](https://github.com/ErwanHeschung/ngx-crafter) - 事前設定されたフォルダ構成と必須パッケージを備えたAngularプロジェクトを作成するための強力なCLIツールです。
* [ng new command generator](https://ng.gridatek.com/) - 最適化された `ng new` コマンドを生成します.
* [svger-cli](https://github.com/faezemohades/svger-cli) - SVGを最適化されたAngularコンポーネンツに変換する、依存関係のない軽量CLIツールです。
* [tailwind-init-cli](https://github.com/ImLeoNova/tailwind-init-cli) - Tailwind CSSをAngular、React、Next.jsプロジェクトにワンコマンドでセットアップするツールです。
* [fanstack](https://github.com/PrestomediaLLC/fanstack) - Firebase関数を自動的に監視し、厳密に型付けされたAngularサービスを生成する軽量CLIとアーキテクチャです。

### デプロイ <a id="deployment"></a>

* [AWS Amplify](https://docs.amplify.aws/angular/)
* [Vercel](https://vercel.com/solutions/angular)
* [Firebase Hosting](https://firebase.google.com/docs/app-hosting/get-started)
* [Netlify](https://docs.netlify.com/frameworks/angular/) - Netlify での Angular アプリケーションは、 [Angular Runtime](https://github.com/netlify/angular-runtime) プラグインによって自動的にフレームワーク検出とリダイレクトを実現します.
* [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) - SSRは動作しませんが、一部の制約はあります。ただし、AngularプロジェクトをGitHub Pagesにホストできます。
* [analog-publish-gh-pages](https://github.com/k9n-dev/analog-publish-gh-pages) - GitHub Pages への `Analog.js` アプリケーションのデプロイ用の GitHub Action.
* [Genezio](https://github.com/Genez-io/genezio) - サーバレスアプリケーションを書く・ホストする最も簡単な方法です。
* [Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-angular-site/#create-a-new-project-using-the-create-cloudflare-cli-c3)
* [Zerops](https://zerops.io/) - Analog アプリケーションのデプロイと実行、 [server side rendered](https://github.com/zeropsio/recipe-analog-nodejs) および [static](https://github.com/zeropsio/recipe-analog-static) いずれも、非常に簡単になります.
* [SST](https://sst.dev/) - 現代的なフルスタックアプリケーションの構築と自動化を容易にするフレームワークです。
* [ngx-config-orchestrator](https://github.com/xhani-manolis-trungu/ngx-config-orchestrator) - 外部JSONを介して実行時設定を行うAngularライブラリで、「一度ビルド、どこでもデプロイ」を実現します。
* [deploy-with-git](https://github.com/RunOnFlux/deploy-with-git/tree/master/deploy-angular) - Git リポジトリから Angular アプリケーションを直接 [Flux Network](https://runonflux.com/) にデプロイできます.
* [@railwayapp-templates/angular-starter](https://github.com/railwayapp-templates/angular-starter) - ワンクリックでデフォルトのAngular TSスタートを設定。Caddyでサーバーを提供！
* [angular-deploy-bunny](https://github.com/lostium/angular-deploy-bunny) - Angular Architect ビルダー（`ng deploy`）は、SHA256 インクリメンタルディフを用いてビルドを Bunny.net CDN ストレージゾーンに同期し、対応するプルゾーンを削除します.
* [ngx-ssh-deploy](https://bitbucket.org/dkhang97/ngx-ssh-deploy/src/master/) - SSHを使ってAngularプロジェクトをデプロイします。
* [front-ready](https://github.com/czfabrics/front-ready) - Angularのビルド設定を検出し、プロジェクトをコンパイルして、AWS S3に最適化されたキャッシュヘッダーを使用してアップロードする1つのコマンドで完了します
* [oSStack Deploy](https://github.com/sanketpadhyal/oSStack-Deploy) - Vercelにインスパイアされた高性能デプロイメントプラットフォーム。ゼロ設定デプロイ、自動フレームワーク検出、リアルタイムビルドストリーミングを備えています

### デスクトップアプリ <a id="desktop-applications"></a>

* [electron](https://github.com/electron/electron) - JavaScript、HTML、CSSを使用してクロスプラットフォームのデスクトップアプリを構築できます
* [angular-electron](https://github.com/maximegris/angular-electron) - AngularとElectronを使った超高速起動
* [neutralinojs](https://github.com/neutralinojs/neutralinojs) - Linux、macOS、Windows、Web、Chromeで動作するJavaScript、HTML、CSSを用いた軽量でポータブルなフレームワークです
* [nw.js](https://github.com/nwjs/nw.js) - HTML、JavaScript、直接のNode.js統合を使用したネイティブアプリ向けのChromium + Node.jsランタイム
* [nw-angular-example](https://github.com/nwutils/nw-angular-example) - AngularとNW.jsを統合する例
* [tauri](https://v2.tauri.app/) - 小さな、高速で安全なクロスプラットドアプリケーションを作成できます
* [angular-tauri](https://github.com/maximegris/angular-tauri) - AngularとTauriを使った超高速起動
* [create-tauri-app](https://github.com/tauri-apps/create-tauri-app) - 新しいTauriアプリプロジェクトを迅速にスケルトン化できます
* [wails](https://github.com/wailsapp/wails) - Go とウェブ技術を使ってデスクトップアプリケーションを構築します。其中包括 [Angular](https://wails.io/docs/guides/angular/).
* [MōBrowser](https://teamdev.com/mobrowser) - TypeScript、HTML、CSSを使用してデスクトップアプリを構築するフレームワークで、ソースコード保護が内蔵されています

### Angularの更新 <a id="updating-angular"></a>

* [Official website](https://angular.dev/update-guide) - Angularのバージョン間移行を支援するインタラクティブガイド
* [Official update reference](https://angular.dev/cli/update) - CLI を使ってプロジェクトを更新するか、新しい Angular フィーチャーを試すために `--next` フラグを追加できます.
* [Official migrations reference](https://angular.dev/reference/migrations) - Angularのスキームがプロジェクトの更新を可能にし、スタンドアローンコンポーネントへの変換、新しいコントロールフロー構文などに対応します
* [ng-morph](https://github.com/taiga-family/ng-morph) - プロジェクトやスキームにおけるコード変更は、これまで以上に簡単になりました
* [ngx-libs](https://github.com/eneajaho/ngx-libs) - Angular Libraries Supportは、各Angularバージョンにコミュニティライブラリのサポートをリストアップしています
* [@fast-facts/ng-update](https://github.com/fast-facts/ng-update) - Angular CLI プロジェクトを自動化された PR によって `ng update` に基づいて最新に保つ GitHub Action.
* [npx-app-updater](https://github.com/DSI-HUG/ngx-app-updater) - 新しいバージョンがデプロイされた際に、ユーザーにアップデートの可用性を通知します
* [ngx-update-app](https://github.com/Celtian/ngx-update-app) - アプリをサービスワーカーで更新するためのAngularディレクティブ
* [Angular Caniuse](https://www.angular.courses/caniuse/features) - Angularの機能をプレビューからスタビリティ段階まで追跡できます
* [Depfixer](https://depfixer.com/sample-report/angular) - JS/TSプロジェクト向けのスマート依存関係分析；互換性の衝突を検出し、ステップバイステップの修正を提供します
* [migration-planificator](https://github.com/silvestv/migration-planificator-documentation) - Angularの移行を正確に計画し、負荷見積もりを計算し、インタラクティブなHTMLダッシュボードを生成します
* [NgReady](https://www.ngready.dev/) - Angularのアップグレードに無駄な時間を費やさないでください。

## Angularの動向 <a id="angular-pulse"></a>

### コミュニティ <a id="community"></a>

* [Angular Discord Channel](https://discord.com/invite/angular)
* [Angular Hashtag](https://x.com/hashtag/angular) - X で `#angular` ハッシュタグを使用します.
* [Gitter Channel](https://gitter.im/angular/angular)
* [Angular Stack Overflow](https://stackoverflow.com/questions/tagged/angular)
* [@Angular on X](https://x.com/angular)
* [/r/Angular Subreddit](https://www.reddit.com/r/Angular/)
* [Angular Buddies Slack Channel](https://angularbuddies.slack.com/)
* [angular-logos](https://github.com/maartentibau/angular-logos) - Repoは、Angularのさまざまなバッジとロゴをすべて収集する専門の場です。
* [Made with Angular](https://github.com/madewithangular/madewithangular.github.io) - Angularで構築されたウェブアプリの展示。
* [Angular Hub](https://github.com/angular-sanctuary/angular-hub) - Angularのイベントとコミュニティを厳選したリスト。
* [Angular Space](https://www.angularspace.com/) - Angular開発者としての学習と成長を支えるあなたのハブ。
* [builtwith trends](https://trends.builtwith.com/framework/Angular) - Angularの使用統計。
* [Angular: The Documentary | An origin story](https://www.youtube.com/watch?v=cRC9DlH45lA)
* [Angular Talents](https://www.angulartalents.com/) - 独立開発者は、今後のプロジェクトに参加可能な状態を明確に示すことで、求人サイトを無限にスクロールする必要を排除できます。
* [Map of GitHub](https://anvaka.github.io/map-of-github/#9.14/-21.9624/9.8143) - NgSphereを探索して、スターを共有しているリポジトリを発見してください。
* [Good First Issues](https://www.dolmen.tools/en/angular/good-first-issues/explorer) - 初心者にもやさしいイシューを発見し、Angularのオープンソースプロジェクトに貢献を開始してください。
* [Angular Popularity Analysis](https://github.com/ProjectBay/angular-popularity-analysis) - AI時代におけるAngularの人気に関する標準化された統計分析。
* [Jobs in JS](https://jobsinjs.com/angular-developer-jobs/) - アメリカ、カナダ、イギリスにおけるAngular開発者向けの求人。毎日更新。

### ニュースレター <a id="newsletters"></a>

* [Angular Addicts](https://www.angularaddicts.com/)
* [Angular Digest](https://geromegrignon.substack.com/)
* [ultimate courses](https://ultimatecourses.com/newsletter)
* [Weekly Angular](https://prodigious-knitter-4508.kit.com/subscribe)

### ポッドキャスト <a id="podcasts"></a>

* [Angular Air](https://angularair.com/)
* [Angular Master Podcast](https://www.youtube.com/playlist?list=PLYJFRoKhU5SNcu5GBjIn4X3oVpy4fP1wV)
* [Angular Plus Show](https://open.spotify.com/show/1PrLErQHBqBhZsRV1KHhGM)
* [Angularidades](https://podcasts.apple.com/us/podcast/angularidades/id1702444448) - スペイン語での説明.

### Bluesky <a id="bluesky"></a>

* [Angular Starter Pack by @brandonroberts.dev](https://bsky.app/starter-pack/brandonroberts.dev/3l7lzgkwkqu2n)

### X上のAngularチーム <a id="angular-team-on-x"></a>

* [Minko Gechev](https://x.com/mgechev)
* [Alan Agius](https://x.com/AlanAgius4)
* [Matthieu Riegler](https://x.com/jean__meche)
* [Alex Rickabaugh](https://x.com/synalx)
* [Kristiyan Kostadinov](https://x.com/_crisbeto)
* [Paul Gschwendtner](https://x.com/devversion)
* [Joost Koehoorn](https://x.com/devjoost)
* [Simona Cotin](https://x.com/simona_cotin)
* [Jessica Janiuk](https://mastodon.social/@jessicajaniuk)
* [Doug Parker](https://mastodon.social/@develwithoutacause@techhub.social)
* [Emma Twersky](https://x.com/twerske)
* [Mark Thompson](https://x.com/marktechson)
* [Pawel Kozlowski](https://x.com/pkozlowski_os)
* [Dylan Hunn](https://x.com/dylhunn)

### X上のAngular専門家 <a id="angular-experts-on-x"></a>

* [@PatrickJS](https://x.com/PatrickJS)
* [@eggheadio](https://x.com/eggheadio)
* [@hirez_io](https://x.com/hirez_io)
* [@cedric_exbrayat](https://x.com/cedric_exbrayat)
* [@victorsavkin](https://x.com/victorsavkin)
* [@jeffbcross](https://x.com/jeffbcross)
* [@marsibarsi](https://x.com/marsibarsi)
* [@maciejtreder](https://x.com/maciejtreder)
* [@maartentibau](https://x.com/maartentibau)

### X上のGoogle Developer Expert <a id="google-developer-experts-on-x"></a>

* [Jack Franklin](https://x.com/jack_franklin)
* [Thierry Chatel](https://x.com/ThierryChatel)
* [Uri Shaked](https://x.com/urishaked)
* [Gonzalo Ruiz de Villa Suárez](https://x.com/gruizdevilla)
* [Sharon DiOrio](https://x.com/sharondio)
* [John Papa](https://x.com/John_Papa)
* [Dan Wahlin](https://x.com/danwahlin)
* [Christian Weyer](https://x.com/christianweyer)
* [Todd Motto](https://x.com/toddmotto)
* [Tim Ruffles](https://x.com/timruffles)
* [Wassim Chegham](https://x.com/manekinekko)
* [Aaron Frost](https://x.com/js_dev)
* [Wilson Mendes](https://x.com/willmendesneto)
* [Jared Williams](https://x.com/jaredwilli)
* [Gerard Sans](https://x.com/gerardsans)
* [Pascal Precht](https://x.com/PascalPrecht)
* [Jeff Whelpley](https://x.com/jeffwhelpley/)
* [Raúl Jiménez](https://x.com/elecash/)
* [Maxim Salnikov](https://x.com/webmaxru)
* [Deborah Kurata](https://x.com/deborahkurata)
* [Shai Reznik](https://x.com/shai_reznik)
* [Manfred Steyer](https://x.com/manfredsteyer)
* [Juri Strumpflohner](https://x.com/juristr)
* [William Grasel](https://x.com/willgmbr)
* [Alyssa Nicoll](https://x.com/AlyssaNicoll)
* [Nir kaufman](https://x.com/nirkaufman)
* [Dmitriy Shekhovtsov](https://x.com/valorkin)
* [Jeff Delaney](https://x.com/jeffdelaney23)
* [Nishu Goel](https://x.com/TheNishuGoel)
* [Alex Inkin](https://x.com/waterplea)
* [Santosh Yadav](https://x.com/SantoshYadavDev)
* [Ankit](https://x.com/ankitsharma_007)
* [Siddharth Ajmera](https://x.com/SiddAjmera)
* [Muhammad Ahsan Ayaz](https://x.com/codewith_ahsan)
* [Dmytro Mezhenskyi](https://x.com/DecodedFrontend)
* [Michael Hladky](https://x.com/Michael_Hladky)
* [Fabio Biondi](https://x.com/biondifabio)
* [Thomas Laforge](https://x.com/laforge_toma)

## 学習資料 <a id="learning-resources"></a>

### ブログ <a id="blogs"></a>

* [Angular Experts](https://angularexperts.io/blog) - Angular、NgRx、RxJS、NXについて学び、ガイドや詳細なコンテンツ、実行可能なヒントとコツでスキルを高めましょう！
* [angular-university](https://blog.angular-university.io/) - Angularエコシステムについて学び、常に最新の情報を追いついてください。
* [simplified courses](https://blog.simplified.courses/) - 愛を込めてあなたのために書かれたブログ記事！
* [Just Angular](https://justangular.com/) - Angularの最新かつ重要なアップデート、そして役立つヒントとコツを共有しています。
* [Angular Love](https://angular.love/) - (ポーランド語) Angularに優れた最新情報リソース。
* [Angular Minds](https://www.angularminds.com/blog)
* [Angular Architects](https://www.angulararchitects.io/en/blog/)
* [House of Angular](https://houseofangular.io/blog/)
* [thisdot labs](https://www.thisdot.co/blog?tags=angular)
* [halodoc](https://blogs.halodoc.io/tag/angular-2-2/)
* [ninja-squad](https://blog.ninja-squad.com/)
* [marmicode](https://marmicode.io/learn/everything)
* [Tim Deschryver](https://timdeschryver.dev/)
* [Chau Tran](https://nartc.me/)
* [Minko Gechev](https://blog.mgechev.com/)
* [Matthieu Riegler](https://riegler.fr/)
* [Thomas Laforge](https://medium.com/@thomas.laforge)
* [Rainer Hahnekamp](https://medium.com/@rainer-hahnekamp)
* [Evgeniy Oz](https://medium.com/@eugeniyoz)
* [Tomas Trajan](https://tomastrajan.medium.com/)
* [Tomasz Ducin](https://ducin.dev/blog)
* [This is Angular](https://dev.to/this-is-angular)
* [daily.dev](https://app.daily.dev/tags/angular)
* [Angular Philosophies](https://github.com/tomavic/angular-philosophies)
* [Angular Material Dev](https://angular-material.dev/home) - AngularにおけるMaterial Designに関連するすべての情報が一元的に集まる場所。
* [Angular Tips](https://ngtips.com/) - Angularで複雑で大規模かつ維持可能なアプリケーションを構築するためのベストプラクティスと推奨事項。
* [Practical Angular Guide](https://practical-angular.donaldmurillo.com/) - [Donald Murillo](https://github.com/DonaldMurillo) による Angular 開発者向けの現実的なソリューション.

### 書籍 <a id="books"></a>

* [Packt Publishing](https://www.packtpub.com/en-us/search?query=angular&sort=best-selling) - 最新のプログラミング書の多様な選択肢を一括で見つけるための最良のオプション。
* [GumRoad](https://gumroad.com/software-development/web-development/javascript?tags=angular) - さまざまな無料および有料のAngular電子書籍。
* [LeanPub](https://leanpub.com/bookstore?type=all&search=angular) - LeanPubの柔軟な価格モデルにより、自らの条件で著者をサポート。あなたが支払う金額を自由に選べるようになります。
* [Manning](https://www.manning.com/) - マニングのpBookをどこでも購入すれば、eBookが無料で提供されます。
* [Become a ninja with Angular](https://books.ninja-squad.com/angular) - `Ninja Squad`
* [Angular-Buch (German)](https://angular-buch.com/) - `dpunkt.verlag`.
* [Code with Ahsan](https://www.codewithahsan.dev/books)
* [Angular University Ebooks](https://angular-university.io/my-ebooks) - 個別に購入可能またはサブスクリプションに含まれる場合があります。
* [Angular Enterprise Architecture](https://angularexperts.io/products/ebook-angular-enterprise-architecture) - `Tomas Trajan`.
* [Testing Angular](https://testing-angular.com) - Robust Angularアプリケーションへのガイド **無料**。
* [Modern Angular](https://www.angulararchitects.io/en/ebooks/modern-angular/?book) - `Manfred Steyer` **FREE**.
* [TutorialSearch](https://tutorialsearch.io/browse/programming-languages/angular-interview) - Udemy、Skillshare、Plurals及他の主要学習プラットフォームの45以上のカテゴリにわたる5万件以上のチュートリアルを、クロスプラットフォームで検索可能に。
* [Ultimate Guide to Angular Evolution](https://houseofangular.io/the-ultimate-guide-to-angular-evolution/) - `House of Angular` **無料**.
* [Micro Frontends and Moduliths with Angular](https://www.angulararchitects.io/en/ebooks/micro-frontends-and-moduliths-with-angular/) - `Manfred Steyer` **FREE**.
* [Angular Mastery](https://christianlydemann.com/angular-mastery-book/) - `CHRISTIAN LÜDEMANN` **FREE**.
* [Enterprise Monorepo Angular Patterns](https://go.nx.dev/angular-patterns-ebook) - `Nx Core Team` **FREE**.

### 認定プログラム <a id="certification-programs"></a>

* [Certificates.dev](https://certificates.dev/angular) - Angular開発者としての能力証明書を取得できます。
* [Angular Academy CA](https://www.angularacademy.ca/angular-certification) - カナダにおける実践的かつ講師指導型のAngularトレーニング。
* [Hackerrank](https://www.hackerrank.com/skills-verification/angular_basic) - Angular（基本）スキル認定試験。
* [Koenig](https://www.koenig-solutions.com/angularjs-training-certification-courses) - さまざまなコースがAngularを個別にまたはフルスタックとしてカバーしています。
* [Simplilearn](https://www.simplilearn.com/angular-certification-training-course) - Angular認定トレーニングコース。

### チートシート <a id="cheat-sheets"></a>

* [Official Angular Version 17 Cheatsheet](https://v17.angular.io/guide/cheatsheet)
* [List of 100 Angular Interview questions and answers](https://github.com/sudheerj/angular-interview-questions)
* [Angular Developer Roadmap](https://roadmap.sh/angular)
* [Framework Field Guide](https://playfulprogramming.com/collections/framework-field-guide) - Angular、React、Vueを同時に学べる無料かつ実用的な方法。
* [Marmicode Cookbook](https://cookbook.marmicode.io/) - おいしいアプリケーションを調理するための材料とレシピ。
* [angular-interview-questions](https://github.com/Devinterview-io/angular-interview-questions) - Angularに関するインタビュー問題と解答を、次の技術面のインタビュー準備に活用できます。
* [dotnet_angular_cli_cheatsheet](https://github.com/shashinvision/dotnet_angular_cli_cheatsheet) - .NETとAngularを使用するフルスタック開発者向けの包括的なガイド。
* [Signals in Angular](https://slicker.me/angular/signals.html) - Signalsを用いた基礎から高度なパターンまで。
* [TMS Outsource Angular Cheat Sheet](https://tms-outsource.com/cs/angular-cheat-sheet/) - すべてのデコレーター、ブロック、オペレーター、CLIフラグが記憶に残るよう、検索可能・フィルタ可能・コピー可能。

### 演習 <a id="exercises"></a>

* [angular-fundamental-lessons](https://github.com/MarkTechson/angular-fundamentals-lessons)
* [Angular Challenges](https://angular-challenges.vercel.app/) - 60以上のAngular、Nx、RxJS、NgRx、TypeScriptの課題が収録されたリポジトリ。実際のスキルを磨くために設計されています。
* [Codelabs](https://codelabs.developers.google.com/?text=angular) - Google開発者Codelabsは、アプリケーションの開発や新機能の追加に向けた、ガイド付き実践チュートリアルを提供します。
* [rxjs-fruits](https://www.rxjs-fruits.com/subscribe) - RxJSのさまざまなオペレーターをカバーするインタラクティブな講義。
* [modern-angular-exercises](https://github.com/kobi-hari-courses/modern-angular-exercises) - さまざまなAngularテーマに関する演習問題、解答および解答動画を含みます。

### トレーニング <a id="training"></a>

* [Angular Academy](https://www.angularacademy.ca/) - 世界クラスのインストラクターが指導するライブオンラインAngularコース！
* [Angular Boot Camp](https://angularbootcamp.com)
* [Angular Start](https://angularstart.com/) - 現代的なベストプラクティスを用いて、新しい機能を使ってプロフェッショナルなAngularアプリケーションを構築する方法を学びましょう。
* [Angular Training](https://www.angulartraining.com/) - あなたが求めているAngularのコーチ。
* [Angular UI](https://angular-ui.com/) - インタラクティブなコースと演習を使って、次に構築するウェブアプリケーションを準備しましょう。
* [Angular University](https://angular-university.io/) - Angularエコシステムを学び、常に最新の状態を維持しましょう。
* [Angular.Schule (in Germany)](https://angular.schule/)
* [Angular.DE (Germany)](https://angular.de/schulungen/angular-intensiv/)
* [learnbydo.ing](https://www.learnbydo.ing/) - [Fabio Biondi](https://www.fabiobiondi.dev/) でコース、書籍、練習問題からウェブプログラミングを学べます。コンテンツはイタリア語または英語で提供されています。
* [liveloveapp](https://liveloveapp.com/) - Cypress、NgRx、RxJS、AG Gridおよびウェブパフォーマンスに関するワークショップが提供されています。
* [Marmicode](https://www.eventbrite.fr/o/younes-jaaidi-marmicode-29329031085)
* [ng.guide](https://ng.guide/) - 現実世界のアプリケーションを構築しながらAngularを学びましょう。
* [Tech OS](https://tech-os.org/) - -demanding developersおよびambitious teams向けに設計された、高度なAngularトレーニングを提供。
* [Udemy: Angular - The Complete Guide](https://www.udemy.com/course/the-complete-guide-to-angular-2)
* [Ultimate Courses](https://ultimatecourses.com/courses/angular) - Angularの専門家になるために必要なすべての内容。
* [Workshops.DE (Germany)](https://workshops.de/seminare-schulungen-kurse/angular-typescript/)

### スタイルガイド <a id="style-guides"></a>

* [Official Angular style guide](https://angular.dev/style-guide)
* [Infinum](https://infinum.com/handbook/frontend/angular/introduction)
* [TypeScript style guide](https://mkosir.github.io/typescript-style-guide/)

### YouTubeチャンネル <a id="youtube-channels"></a>

* [Angular](https://www.youtube.com/@Angular)
* [NG CONF](https://www.youtube.com/@ngconfonline)
* [Procademy](https://www.youtube.com/@procademy)
* [Monsterlessons Academy](https://www.youtube.com/@MonsterlessonsAcademy)
* [Joshua Morony](https://www.youtube.com/@JoshuaMorony)
* [Nihira Techiees](https://www.youtube.com/@NihiraTechiees)
* [Angular University](https://www.youtube.com/@AngularUniversity)
* [Rainer Hahnekamp](https://www.youtube.com/@RainerHahnekamp)
* [Code Shots With Profanis](https://www.youtube.com/@CodeShotsWithProfanis)
* [Deborah Kurata](https://www.youtube.com/@deborah_kurata)
* [BrandonRobertsDev](https://www.youtube.com/@BrandonRobertsDev)
* [Decoded Frontend](https://www.youtube.com/@DecodedFrontend)
* [Zoaib Khan](https://www.youtube.com/@ZoaibKhan)
* [NivekDev](https://www.youtube.com/@nivekDev)
* [WebTechTalk](https://www.youtube.com/@WebTechTalk)
* [Babatunde Lamidi](https://www.youtube.com/@babatundelmd)
* [TechStackNation](https://www.youtube.com/@techstacknation)
* [Angular Love](https://www.youtube.com/@angularlove)
* [NG NEWS](https://www.youtube.com/@ng-news)
* [Learning Partner](https://www.youtube.com/@LearningPartnerDigital)
* [Igor Sedov](https://www.youtube.com/@theigorsedov)
* [Brian Treese](https://www.youtube.com/@briantreese)
* [Kobi Hari](https://www.youtube.com/@kobihari)
* [Programming Practicals](https://www.youtube.com/@programmingpracticals)
* [Daniil Rabizo](https://www.youtube.com/@daniilrabizo)
* [Loiane Groner](https://www.youtube.com/@loianegroner)
* [StartupAngular](https://www.youtube.com/@StartupAngular) - 日本語で。
* [Code with Keys](https://www.youtube.com/@codewithkeys) - ペルシャ語で。

## アーキテクチャと高度なトピック <a id="architecture-and-advanced-topics"></a>

### 機能フラグ <a id="feature-flags"></a>

* [OpenFeature Angular SDK](https://openfeature.dev/docs/reference/technologies/client/web/angular) - 機能フラグのためのベンダーに依存しない、コミュニティが運営するAPI仕様。
* [@devcycle/openfeature-angular-provider](https://www.npmjs.com/package/@devcycle/openfeature-angular-provider) - [DevCycle](https://docs.devcycle.com/sdk/client-side-sdks/angular/) は OpenFeature Angular SDK をサポートしています。
* [@openfeature/go-feature-flag-web-provider](https://www.npmjs.com/package/@openfeature/go-feature-flag-web-provider) - [GO Feature Flag](https://gofeatureflag.org/) プロバイダーは、あなたの GO Feature Flag インスタンスに [connect](https://gofeatureflag.org/docs/sdk/client_providers/openfeature_angular) を接続するための機能を提供します。 `@openfeature/web-sdk`
* [Flagsmith](https://www.flagsmith.com/) - 機能フラグ管理により、リリースを速く出し、コントロールしましょう。
* [@statsig/angular-bindings](https://www.npmjs.com/package/@statsig/angular-bindings) - [Statsig](https://www.statsig.com/) Angular バインディングパッケージは、コンポーネントに注入できる `StatsigService` を提供します。詳細は [Statsig docs](https://docs.statsig.com/client/javascript-sdk/Angular/) をご確認ください。
* [@configcat/js-sdk](https://github.com/configcat/js-sdk) - JavaScript 用の ConfigCat SDK は、アプリケーションに [ConfigCat](https://configcat.com/) を簡単に統合できます。
* [@configcat-labs/feature-flags-in-angular-sample-app](https://github.com/configcat-labs/feature-flags-in-angular-sample-app) - ConfigCatを使用する例アプリ。
* [featurit-sdk-angular](https://github.com/featurit/featurit-sdk-angular) - [FeaturIT](https://featurit.com/) フีチャーフラグ管理プラットフォーム向けの JavaScript クライアントの Angular ワッパー。
* [ngx-feature-proxy](https://github.com/zenkiet/ngx-feature-proxy) - Unleashと組み合わせたAngular機能フラグライブラリ：最小の設定で反応型かつ型安全なフラグ管理を実現。
* [ngx-feature-flags](https://github.com/pavan-98/ngx-feature-flags) - Angularを第一に設計された、企業向けの機能フラグ層で、Angularアプリケーション間でフラグの解決、保護、レンダリング方法を標準化。
* [ngx-feature-flags-toggly](https://www.npmjs.com/package/@ops-ai/ngx-feature-flags-toggly) - [Toggly](https://toggly.io/) フィーチャーフラグ向けの Angular SDK。
* [ngx-circuit](https://github.com/pjlamb12/ngx-circuit) - booleanフラグやパーセンテージロールアウトなどの柔軟なオプションを用いて、機能トグル管理を簡素化。
* [ngx-feature-toggle](https://github.com/willmendesneto/ngx-feature-toggle) - このAngularディレクティブにより、機能トグルの管理を簡素化。
* [@rollgate/sdk-angular](https://github.com/rollgate/sdks/tree/main/packages/sdk-angular) - [Rollgate](https://rollgate.io) フィーチャーフラグプラットフォーム向けの Angular SDK。このプラットフォームはスケジュールされたリリースと段階的な展開をサポートしています。

### GraphQL <a id="graphql"></a>

* [apollo-angular](https://github.com/kamilkisiela/apollo-angular) - AngularおよびすべてのGraphQLサーバー向けの、完全に機能備えされた、生産環境対応のキャッシュ付きGraphQLクライアント。
* [apollo-dynamic-angular](https://github.com/giuliano-marinelli/apollo-dynamic-angular) - クエリ、ミューテーションおよびサブスクリプションに対して、デコレートされたスキーマを用いて動的選択セットを許容するApollo Angularのバリエーション。
* [apollo-orbit](https://github.com/wassim-k/apollo-orbit) - Angularにおける完全なGraphQLクライアントで、モジュラリーステート管理を備えている。
* [buoy](https://github.com/buoy-graphql/buoy) - Apolloをベースに構築されたAngular用のGraphQLクライアント。
* [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) - GraphQLスキーマと操作に関するコードジェネレーターで、フレキシブルなプラグインサポートを備えている。
* [ngx-graphql-client](https://github.com/Alevettih/ngx-graphql-client) - Angularアプリケーション向けに型付けされたGraphQLクライアントで、完全なTypeScriptサポートを備えている。
* [takeshape](https://www.takeshape.io/) - TakeShape を使って GraphQL API を構築するのは簡単です。Angular との統合に必要な手順はこの [guide](https://app.takeshape.io/docs/get-started/client/angular) をご確認ください。

### HTTP <a id="http"></a>

* [ng-http-caching](https://github.com/nigrosimone/ng-http-caching) - AngularアプリケーションにおけるHTTPリクエストのキャッシュ。
* [@ngify/http](https://github.com/ngify/ngify/tree/main/packages/http) - 型付けされた反応型HTTPクライアントで、簡易化されたエラー処理とリクエスト/レスポンスのインターセプションを提供。
* [ng-http-loader](https://github.com/mpalourdio/ng-http-loader) - スマートなAngular HTTPインターセプター - HTTPリクエストを自動的にインターセプトし、スピンキットスパナー／ローダー／進行バーを表示。
* [angular-odata](https://github.com/diegomvh/angular-odata) - AngularでODataリソースをクエリ、作成、更新、削除するためのフロントエンドAPI。
* [ng-memento](https://github.com/terzurumluoglu/ng-memento) - Angularプロジェクト内で同じHTTPリクエ及を再度呼び出すのを防ぎ、アプリケーションのパフォーマンスを向上させる。
* [ngx-suspense-of](https://github.com/Celtian/ngx-suspense-of) - アプリケーションにサスペンド（待ち状態）を追加するAngularディレクティブ。
* [ngx-pwa](https://github.com/Service-Soft/ngx-pwa) - Angular PWAに関する追加機能を提供。特にPOST/PATCH/DELETEリクエストのキャッシュと同期を可能にする。
* [ngx-repository](https://github.com/paddls/ngx-repository) - Angularプロジェクト内で、強力な型付けデータクライアント（HTTP RESTまたはFirestore）を簡単に作成できる。
* [ng-rest-client](https://github.com/gizm0bill/gzm/tree/master/libs/ng-rest-client) - 開発者がメソッドデコレーターを使ってRESTful APIクライアントを定義することで、HTTPリクエストを簡易化するライブラリ。
* [ngx-sse-client](https://github.com/marcospds/ngx-sse-client) - Angular アプリケーション向けのシンプルな **SSE** (サーバー送信イベント) クライアント。`EventSource` の使用を置き換えます。
* [@connectrpc/connect-web](https://github.com/connectrpc/connect-es/tree/main/packages/connect-web) - [Connect](https://connectrpc.com/) はプラットフォームを越えた API ライブラリを提供しています。[@connectrpc/connect](https://www.npmjs.com/package/@connectrpc/connect) は TypeScript での型安全な Protobuf API を提供し、[@connectrpc/connect-web](https://www.npmjs.com/package/@connectrpc/connect-web) はブラウザ対応を追加します。詳細は [Angular example](https://github.com/connectrpc/examples-es/tree/main/angular) をご確認ください。
* [ng-httpclient-easy-network-stub](https://github.com/NGneers/ng-httpclient-easy-network-stub) - Angular HttpClientから多くのネットワークリクエストをモックできる簡単なクラス。
* [simply-direct](https://github.com/fvilli/simply-direct) - AngularとNestJSをリアルタイム、両方向通信で接続するフルスタック通信ライブラリ（WebSocketsで実現）。
* [ng-error-handling](https://github.com/ressurectit/ng-error-handling) - AngularでHTTP APIエラーレスポンスを管理するためのモジュール。
* [active-connect](https://github.com/HiptJo/active-connect) - Node.js、Angular、WebSockets向けの接続フレームワークで、デコレーターとユーティリティを用いてリアルタイムクライアントサーバー通信を簡易化。
* [ngx-signal-pagination](https://github.com/JPtenBerge/ngx-signal-pagination) - Angularでシグナルを用いたページネーション。
* [ngx-http](https://github.com/OGS-GmbH/ngx-http) - 軽量なAngularライブラリで、型、静的値、ユーティリティ関数を提供することでHTTP機能を強化。
* [ng-speed-test](https://github.com/jrquick17/ng-speed-test) - インターネット接続速度をチェックする軽量なAngularライブラリ。
* [ngx-interceptors](https://github.com/SebaRenner/ngx-interceptors) - Angularアプリケーション向けの共通HTTPインターセプタを備えたライブラリ
* [ngx-hal](https://github.com/infinum/ngx-hal) - [HAL-formatted](http://stateless.co/hal_specification.html) HTTP リクエストの処理をサポートするデータストアライブラリ。
* [trpc-angular](https://github.com/heddendorp/trpc-angular) - このリポジトリは、tRPCベースのAngularパッケージを2つ提供しています：`@heddendorp/trpc-link-angular` は HttpClient 用、`@heddendorp/tanstack-angular-query` は反応型データ取得用です。
* [my-http-resource](https://github.com/consoleLogMyAss/my-http-resource/tree/main/projects/my-http-resource) - 状態、URLパラメータ、設定を管理することでリクエストを簡素化する反応型Angular HttpClientラッパー
* [luminara](https://github.com/miller-28/luminara) - native fetchに基づく現代的で汎用的なHTTPクライアント。信頼性・スケーラビリティ・明確なアーキテクチャを実現。
* [ngx-cachr](https://github.com/nulzo/ngx-cachr) - Angular向けの軽量かつシグナルベースのキャッシュライブラリ
* [ngx-data-polling](https://github.com/antonio-spinelli/ngx-data-polling) - Angular向けに宣言型かつ型安全にデータポーリングを扱うユーティリティを備えたライブラリ
* [ngx-soap](https://github.com/seyfer/ngx-soap) - アンガルのシグナル、スタンドアローンコンポーネント、現代機能に完全に適合する、軽量なSOAPクライアントを [node‑soap](https://github.com/vpulim/node-soap) に構築したもの
* [ngx-http-fetch-tracking](https://github.com/pegasusheavy/ngx-http-fetch-tracking) - Fetch APIバックエンド向けのアップロード進行状況を追跡するAngularライブラリ
* [fetchquack](https://github.com/adrian-bueno/fetchquack) - RxJS Observableラッパーとインジェクションコンテキストを備えたAngular用HTTPクライアント。軽量なFetchベースのストリーミング、SSE、アップロード・ダウンロード進行状況の処理を提供。
* [ziflux](https://github.com/neogenz/ziflux) - Angular 21+向けのゼロ依存、シグナルネイティブなキャッシュレイヤー。resource()にstale-while-revalidateを適用。即時ナビゲーション、バックグラウンドリフレッシュ、スピン表示なし。
* [ng-signal-query](https://github.com/Ali7040/ng-signal-query) - シグナルに基づく型安全なAngularクエリライブラリ。サーバー状態、無限クエリ、変更、キャッシュを高パフォーマンスで簡素化。
* [api-caller](https://forge.deejayy.hu/angular-packages/api-caller) - Angular向けのシンプルなAPI呼び出しライブラン。
* [ngx-lite-cache](https://github.com/Suleeyman/ngx-lite-cache) - HttpClientインターセプタを用いてHTTPレスポンスをキャッシュするAngularライブラリ。冗長なリクエストを削減しパフォーマンスを向上。
* [ng-qubee](https://github.com/AndreaAlhena/ng-qubee) - 反応型URI（RxJS + Signals）、型付きページネーション、495以上テスト、マルチドライバー対応を備えたAngularクエリビルダー
* [ngx-trpc-client](https://github.com/BeGj/ngx-trpc-client) - アナログの [TRPC package](https://github.com/analogjs/analog/tree/beta/packages/trpc) のリワークされたフォーク
* [zx-angular-lazy-resource](https://github.com/zxnc/zx-angular-lazy-resource) - アンガルのシグナルベースの `resource()` に用いるラズイヘルパー — 最初のアクセスまで読み込みを遅延し、最初に解決された値をプロミスとして待機
* [@stitchapi/angular](https://github.com/rejifald/StitchAPI/tree/main/packages/angular) - ストリーミングを最優先としたStitchAPIのバインディング： `injectStitch` / `injectStitchStream` は、AngularのシグナルおよびRxJSのオブザーバブルとしてタイプとバリデーションされた呼び出しを提供し、レスポンスのデルタが到着するたびにリレンダー
* [angular-fetcher](https://github.com/aliomnt/angular-fetcher) - 現代的でシグナルベースのAngularライブラリ。型安全なリモートAPIデータ管理をスムーズに実現。取得、変更、エラー追跡を反応的に処理。
* [@some-angular-utils/paginator](https://github.com/some-angular-utils/paginator) - シンプルで信頼性の高いページネーション。スライディングウィンドウ、ジャンプボタン、無効エッジ、CSS変数テーマの2つの入力。
* [ngx-request-lock](https://github.com/SalvatoreDiGenua/ngx-request-lock-docs) - HTTPリクエストのライフサイクルにUIフローをバインドするAngularライブラリ。
* [ngx-api-client](https://github.com/ismailza/ngx-api-client) - この設定可能な `ApiService` は、ベースURL、エラー、リトライ、ロード状態の処理に用いる一時的な `HttpClient` ロジックを抽出し、標準化
* [ngx-task](https://github.com/MahmoudAdelJR/ngx-task-suite) - キャンセル、ライフサイクルクリーンアップ、明示的な並列ポリシーを備えたAngular向けシグナル第一の非同期アクション。
* [ngx-smart-interceptor](https://github.com/ErickG123/ngx-smart-interceptor) - 現代的なAngularアプリケーション向けの企業レベルの信頼性・耐性・知能を備えたHTTPインターセプタ。

### マイクロフロントエンド <a id="micro-frontends"></a>

* [angular-microfrontend-demo](https://github.com/gioboa/angular-microfrontend-demo) - Module Federation Vite + Angularは現在可能。
* [backbase-micro-frontends](https://github.com/Backbase/backbase-micro-frontends) - モジュールファジデーションを用いて、古くないアプリ（ウィジェット）と新しいアプリ（ジャーニー）が協働するプロトタイプ。
* [micro-frontends-mindmaps](https://github.com/santoshshinde2012/micro-frontends-mindmaps) - マイクロフロントエンド概念を要約したマインドマップ。
* [ngx-mfe](https://github.com/dkhrunov/ngx-mfe) - Webpack 5 および plugin ModuleFederation でマイクロフロントエンドを扱うためのAngularライブラリ

### Module Federation <a id="module-federation"></a>

* [@module-federation/core](https://github.com/module-federation/core) - Module Federationは、複数のJavaScriptアプリケーション間でコードやリソースを共有できる概念です
* [ng-dynamic-mf](https://github.com/LoaderB0T/ng-dynamic-mf) - Module Federationによる実行時動的モジュール
* [module-federation-plugin](https://github.com/angular-architects/module-federation-plugin) - Angular CLI と Module Federation を統合したプラグインでマイクロフロントエンドやプラグインを読み込む
* [webpack-module-federation-with-angular](https://github.com/edumserrano/webpack-module-federation-with-angular) - Webpack Module Federationについて学ぶためのガイドと複数のAngularコードデモ
* [Vite-module-federation-angular-test](https://github.com/Seifenn/vite-module-federation-angular-test) - AngularおよびAnalogJS（ を介して）での のテスト；AnalogJSホストでのSSRの検証（プラグインSSRサポートは変動する可能性あり） [Module Federation Vite](https://github.com/module-federation/vite) [@brandonroberts/angular-vite](https://github.com/brandonroberts/angular-vite)
* [mfe-crossframework](https://github.com/igorhms/mfe-crossframework) - Angularホスト、クロスフレームワークリモート、NxなしのModule Federationプロジェクト
* [npm-mfe-live-reload](https://www.npmjs.com/package/npm-mfe-live-reload) - リモートマイクロフロントエンドが変更された際に開発モードでシェルを自動再読み込みするツール

### モノレポ <a id="monorepos"></a>

* [Moon](https://moonrepo.dev/docs/guides/examples/angular) - ウェブ向けのRustベースのビルドおよびモノリスリポジトリ管理ツール
* [Nx](https://github.com/nrwl/nx) - ローカルおよびCI環境でモノリスリポジトリを維持・拡張するための、統合ツールと高度なCI機能を備えたビルドシステム
* [Turbo](https://github.com/vercel/turbo) - JavaScriptおよびTypeScript向けのTurbopack（Rustビンダー）とTurborepo（ビルドシステム/モノリスリポジトリツール）

### サーバーサイドレンダリング <a id="server-side-rendering"></a>

* [Official website](https://angular.dev/guide/ssr#enable-server-side-rendering) - フレームワークに内蔵された新しいSSRパッケージのドキュメンテーション
* [angular-prerender](https://github.com/chrisguttandin/angular-prerender) - Angularアプリケーションをプリレンダリングするためのコマンドラインツール
* [analogjs](https://analogjs.org/) - フルスタックAngularメタフレームワークは、Angularアプリケーションのサーバーサイドレンダリング（SSR）および静的サイト生成（SSG）をサポート
* [analog-tools](https://github.com/MrBacony/analog-tools) - AnalogJSに追加・拡張するためのユーティリティやライブラリのコレクション
* [bot-ssr](https://github.com/patrikx3/bot-ssr) - ボット向けのSSR、ユーザー向けの即時CSR — 大規模なクロールツールに高速でクリーンなプリレンダリングされたHTMLを提供、 [isbot](https://github.com/omrilotan/isbot) がその力を支える
* [ngx-sitemaps](https://github.com/json-derulo/ngx-sitemaps) - Angularプリレンダリングされたルートからサイトマップを生成する
* [ngx-bun](https://github.com/pegasusheavy/ngx-bun) - Bunのビルトインサーバーを使用したAngular 19以降向けの高性能SSR/SSGアダプタ
* [ng-ssr-caching](https://github.com/nigrosimone/ng-ssr-caching) - Angular SSRにおけるサーバー側レンダリングページのキャッシュ

## 開発ユーティリティ <a id="development-utilities"></a>

### アクセシビリティ <a id="accessibility"></a>

* [Official Angular ARIA](https://angular.dev/guide/aria/overview) - 一般的なWAI-ARIAパターンを実装するヘッドレスかつアクセシブルなディレクティブのコレクション
* [digital.gov](https://digital.gov/guides/accessibility-for-teams/) - アメリカ政府によるチーム向けアクセシビリティガイド
* [WAI](https://www.w3.org/WAI/) - W3C Web Accessibility Initiative（WAI）は、アクセシビリティを理解し実装するための基準およびサポート資料を開発しています
* [webaim](https://webaim.org/) - ウェブアクセシビリティを意識した設計
* [WAVE](https://wave.webaim.org/) - ウェブアクセシビリティ評価ツール
* [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter) - HTML、Angular、React、Markdown、Vue、React Native向けのアクセシビリティチェック
* [Angular Material CDK - a11y](https://material.angular.io/cdk/a11y/overview) - a11yパッケージは、アクセシビリティを向上させるためのさまざまなツールを提供します
* [PrimeNG Accessibility Guide](https://primeng.dev/guides/accessibility) - PrimeNGのアクセシビリティガイド
* [astral-accessibility](https://github.com/verto-health/astral-accessibility) - Angularで書かれたオープンソースアクセシビリティウィジェット
* [angular-vlibras](https://github.com/angular-a11y/angular-vlibras) - VLibrasを統合したAngularライブラリで、コンテンツをブラジルの手話（Libras）に自動翻訳します
* [a11y-libraries](https://github.com/LDV2k3/a11y-libraries) - Angular向けの多様なアクセシビリティソリューション
* [a11yguard](https://github.com/shamaz332/a11yguard) - EAA / EN 301 549にマッピングされた実行時診断を含む、ゼロ依存のアクセシビリティツールキットを提供
* [ulam](https://github.com/mikeyil/ulam) - 現代ウェブ向けのアクセシビリティユーティリティ。ヴァンillaベースで、React、Remix、Vue、Angularのオプションアダプターを提供
* [aria-reach](https://github.com/manichandra/aria-reach) - 共有コンポーネントライブラリ向けのARIAアクセシビリティ反パターン分析ツール

### AI <a id="ai"></a>

* [Official AI docs](https://angular.dev/ai)
* [Official Angular CLI MCP Server Setup](https://angular.dev/ai/mcp)
* [Official Angular Examples Repo](https://github.com/angular/examples) - [GenKit](https://firebase.google.com/docs/genkit) を使用したアンガルの例
* [Official Angular Skills](https://github.com/angular/skills)
* [Official llms.txt file](https://angular.dev/llms.txt)
* [Official llms-full.txt file](https://angular.dev/assets/context/llms-full.txt)
* [abbi-ng-ai-image-descriptor](https://github.com/slsfi/abbi-ng-ai-image-descriptor) - AI生成画像の説明を提供するAngular用ウェブアプリ。OpenAI APIキーが必要です
* [AGENT.md](https://ampcode.com/AGENT.md#tool-integration) - ユニバーサルエージェント設定ファイル
* [agentbridge](https://github.com/ayoubachak/agentbridge) - AIエージェントがアプリケーションコンポーネントを発見・相互作用・制御する方法を標準化するフレームワーク
* [agent-rules-kit](https://github.com/tecnomanu/agent-rules-kit) - AI用のCLIツールで、技術スタックのベストプラクティスをガイドするルールをインストール・設定します
* [agentskit](https://github.com/AgentsKit-io/agentskit) - AngularでAIエージェントを構築するための、組み立て可能なツールキットとヘッドレスチャットコンポーネント。ストリーミング、ツール、メモリ、RAGをサポート
* [ago-sdk](https://github.com/useago/ago-sdk) - AIエージェドをフロントエンドスタックに直接埋め込みることで、AGOはレスポンスをストリーミングし、ワークフローをトリガーし、UIをインタラクティブに操作します
* [aitools.fyi](https://aitools.fyi/technology/angular) - Angularで構築されたAIツール
* [Angular code editor rules](https://promptgenius.net/cursorrules/frameworks/frontend/angular) - Angularコードと作業する際の効果的なAIインタラクションパターンガイド
* [Angularize](https://beta.angularize.dev/) - VibeでAngularアプリを、隣にいる人間の開発者がコードを書くようにします
* [angular-nest-ai-kit](https://github.com/eusouwilson/angular-nest-ai-kit) - Nx で構成された Angular + PrimeNG（フロントエンド）と NestJS + Prisma（バックエンド）のモノリスリポジトリ向けのスキルとAIエージェント
* [@full-stack-skills/angular-skills](https://github.com/full-stack-skills/angular-skills) - AIコード生成エージェント向けのAngularフレームワーク開発スキル
* [@Kobolden/angular-skills](https://github.com/Kobolden/angular-skills) - Angular開発をAI支援コードスキルで強化。バージョン20以降の最新パターン、ベストプラクティス、例を含む。
* [angular-vibe-kit](https://github.com/vuanhtung10/angular-vibe-kit) - 任意のアンガルプロジェクトに、 `CLAUDE.md`、プロジェクトドキュメント、そしてあなたのアンガルバージョンに合わせたClaude Codeのスラッシュコマンドを組み込むことで、Vibeコーディングワークフローを開始
* [augment code](https://www.augmentcode.com/) - プロフェッショナルなソフトウェアエンジニアと大規模コードベース向けに開発された最初のAIコードアシスタント
* [CodingFleet](https://codingfleet.com/code-generator/angular/) - あなたの指示を効率的なAngularコードに変換する革新的なAIツール
* [context7](https://github.com/upstash/context7) - LLMおよびAIコードエディタ向けの最新コードドキュメンテーションを備えたMCPサーバー
* [cursor.directory](https://cursor.directory/?q=angular) - Cursor愛好家にとってのホームページ
* [deep-chat](https://github.com/OvidijusParsiunas/deep-chat) - あなたのウェブサイトに完全にカスタマイズ可能なAIチャットボットコンポーネント
* [Feature Search Agent - Angular PR Scout](https://github.com/dnlrbz/feature_search_agent) - Googleのエージェント開発キット（ADK）で構築されたAIエージェントが、AngularのGitHubプルリクエストを自動検索・分析し、新機能を発見
* [gitingest](https://gitingest.com/) - 任意のGitリポジトリをコードベースのシンプルなテキスト要約に変換。これはLLMにコードベースをフィードする際に有用。
* [glama](https://glama.ai/mcp/servers?query=angular) - Angular関連のエントリをフィルタリングしたMCPサーバーのディレクトリ
* [hashbrown](https://github.com/liveloveapp/hashbrown) - [Hashbrown](https://hashbrown.dev/) フレームワークは、楽しいAI駆動ユーザー体験の構築に用いられる
* [mushi-mushi](https://github.com/kensaurus/mushi-mushi) - AIで作成されたアプリを、編集画面内で英語の診断と即時使える修正で即座に修正
* [ngAutoPilot](https://github.com/janpereira-dev/ngAutoPilot) - Angular、TypeScript、JavaScript、RxJS、テスト、コード品質、アーキテクチャ、バージョン管理、品質ガバナンスワークフロー向けのエージェントに依存しないマイクロスキルカタログ
* [ng-mocks-testing-skill](https://github.com/mintarasss/ng-mocks-testing-skill) - Jestと `ng-mocks` を使って、高品質なアンガルユニットテストを書くためのClaude Codeスキルのコレクション
* [ng-pr-review](https://richa-29.github.io/angular-pr-reviewer/) - AIによるコードレビューが実際にAngularを理解する
* [ngx-agents-md](https://github.com/pr4san/ngx-agents-md) - プロジェクトにAngularドキュメンテーションを追加して、AIコードエージェント（Claude Code、Cursorなど）に提供
* [ngx-ai](https://github.com/Arul1998/ngx-ai) - OpenAI対応のチャットAPI（OpenAI、xAI Grok、または自作プロキシ）に適合した、RxJS対応のAngularクライアント。優先的にストリーミングをサポート。
* [ngx-ai-devtools](https://github.com/ahmedkhan1/ngx-ai-devtools) - アプリが消費するすべてのプロンプト、レスポンス、トークン、ドルをブラウザタブを離さずに確認
* [ngx-bob](https://github.com/scottstraughan/ngx-bob) - メッセージ、ローカル履歴、エラーハンドリング、コマンド、検索を備えたAngularチャットウィジェット
* [ngx-gen-ui](https://github.com/alessiopelliccione/ngx-gen-ui) - Firebase AIを介して生成UIコンテンツをストリーミングするための軽量Angularディレクティブとサービス
* [ngx-prompt-kit](https://github.com/PianoNic/ngx-prompt-kit) - Spartan UIをベースにしたAIチャットインターフェース向けのAngularコンポーネント
* [ngx-quill-ink](https://github.com/AhsanAyaz/ngx-quill-ink) - TypeScriptエンジンとAngularのラッパーが、手書きのようにテキストストリームをアニメーションし、ビジョンLLMにペンストロークをキャプチャする
* [ngx-testbox-agent-skill](https://github.com/kirill-kolomin/ngx-testbox-agent-skill) - `ngx-testbox` テストパッケージ向けのAIエージェントスキル
* [point-grab](https://github.com/Nacho-Labs-LLC/point-grab) - ウェブアプリの要素にポイントを当てることで、その全コンテキスト（HTML、コンポーネント名、ソースファイル、および親要素）を即座にMCPを介してAIエージェントに送信
* [PureCode AI](https://purecode.ai/components/angular/application-ui) - PureCode AIでAngularアプリケーションUIを50%速く構築
* [reangular](https://github.com/AleksanderBodurri/reangular) - Reactライブラリを現代的なAngularライブラリに変換するコードエージェントスキル。完全な機能対応、自動ブラウザ検証、並列比較レビューを備える
* [repomix](https://github.com/yamadashy/repomix) - あなたのすべてのリポジトリを1つのAI対応ファイルに圧縮するツール
* [rxjs-mcp-server](https://github.com/shuji-bonji/rxjs-mcp-server) - AIアシスタント（例：Claude）から直接RxJSストリームを実行、デバッグ、可視化
* [senior-angular-architect](https://github.com/itsdishant/senior-angular-architect) - 上級レベルのAngularアーキテクチャに関する専門AIスキル
* [superconnect](https://github.com/bitovi/superconnect) - Figmaファイルをスキャンし、ReactまたはAngularリポジトリを探索し、 `.figma.tsx` または `.figma.ts` マッピングを生成し、FigmaのCLIを介してそれを公開するAIツール
* [Threadplane](https://github.com/cacheplane/angular-agent-framework) - AngularネイティブのエージェントUIフレームワーク：ストリーミングチャット、持続可能なスレッド、中断、サブエージェント、計画、記憶、LangGraphおよびAG-UIバックエンド向けの生成UI
* [UI2CODE](https://ui2code.ai/) - AIで秒単位でUIをコードに変換
* [web-codegen-scorer](https://github.com/angular/web-codegen-scorer) - 大規模言語モデル（LLM）が生成したウェブコードの品質を評価するツール
* [Workik](https://workik.com/angular-code-generator) - 無料AI搭載Angularコードジェネレーター｜あなたのコンテキスト駆動AIパートナー！
* [Yes Chat AI](https://www.yeschat.ai/gpts-ZxX35UdX-Angular-Ninja-%F0%9F%A5%B7) - Angular Ninja - Angular開発アシスタント
* [Zipy](https://www.zipy.ai/online-tools/ai-angular-code-generator) - AI搭載Angularコードジェネレド

### 分析 <a id="analytics"></a>

* [@blue-cardinal/ngx-google-analytics](https://github.com/blue-cardinal/ngx-google-analytics) - Google AnalyticsスクリプトをインジェクトするAngularモジュール。開発環境での使用を防ぐためのセーフガードを備える
* [clickstream-analytics-on-aws-web-sdk](https://github.com/aws-solutions/clickstream-analytics-on-aws-web-sdk) - 提供されたデータパイプラインを介し、ブラウザのクリックストリームデータをAWSに収集する
* [Heap](https://help.heap.io/hc/en-us/articles/37271957075345-Using-Heap-With-Popular-Web-Frameworks-Libraries) - 顧客の行動経路、変換、維持率を追跡するプロダクト分析
* [kitbase](https://docs.kitbase.dev/sdks/angular) - プロダクト分析および機能管理向けの開発プラットフォーム
* [litlyx](https://github.com/Litlyx/litlyx) - オープンソースの分析ツール — 1行のコードでセットアップ
* [@luzmo/ngx-embed](https://www.npmjs.com/package/@luzmo/ngx-embed) - アンガルアプリケーションに [Luzmo](https://www.luzmo.com/) ダッシュボードを埋め込むためのライブラリ
* [ngx-gtm](https://github.com/jerkovicl/ngx-gtm) - Googleタグマネージャー（GTM）を使用するための必須スクリプトタグを自動的にインジェクトするAngularライブラリ
* [ngx-material-tracking](https://github.com/Service-Soft/ngx-material-tracking) - Angularサイト向けにGDPR対応のトラッキングを提供。内蔵Googleアナリティクス、Metaピクセル、カスタムオプションを備える
* [ngx-matomo-client](https://github.com/EmmanuelRoux/ngx-matomo-client) - Matomoアナリティクスクライアント（Angularアプリケーション用）
* [ngx-meta-pixel](https://github.com/Szymonexis/ngx-meta-pixel) - このパッケージにより、アンガルアプリケーションに [Meta Pixel](https://www.facebook.com/business/tools/meta-pixel) をセットアップできる
* [ngx-piwik-pro](https://github.com/PiwikPRO/ngx-piwik-pro) - タグマネージャーとトラッキングを実装するための専用 [Piwik PRO](https://piwik.pro/) アンガルライブラリ
* [oculr-ngx](https://github.com/Progressive-Insurance/oculr-ngx) - Angularアプリケーションにおけるデータ収集を簡単に行えるアナリティクスライブラリ
* [plausible](https://github.com/plausible/analytics) - 軽量でオープンソースであり、プライバシーに配慮した分析ツール（SPA対応）— [SPA support](https://plausible.io/docs/spa-support) を参照
* [rybbit](https://github.com/rybbit-io/rybbit) - Google Analyticsのプライバシーに配慮した代替ツール；アンガル統合については [guide](https://www.rybbit.io/docs/guides/angular) を参照
* [gizmo](https://gizmoanalytics.io/) - GoogleアナリティクスへのAIネイティブな代替ツールで、競合他社に比べて無料プランが豊富
* [ngx-segment-community](https://github.com/behdi/ngx-segment-community) - [ngx-segment-analytics](https://github.com/opendecide/ngx-segment-analytics) のコミュニティが維持する継承プロジェクト
* [swetrix](https://github.com/Swetrix/swetrix) - ページビューの追跡、エラーのモニタリング、カスタムイベントのキャプチャ — すべてプライバシーに配慮し、GDPRに適合する [Integrate Swetrix with your Angular application](https://swetrix.com/docs/angular-integration) で実現
* [@grandgular/logrocket-angular](https://github.com/Grandgular/logrocket) - LogRocket Web SDKをラップしたツール。DI対応の初期化、遅延読み込み、型付きオプション、プライバシー補助関数、データプライベート／データパブリック用DOMディレクティブを備えている
* [ngx-umami](https://github.com/mitsuru17/ngx-umami) - [Umami Analytics](https://umami.is/)をAngularへ統合する、軽量でプライバシー重視のトラッキングソリューション。
* [takt-angular](https://github.com/vskstudio/takt-angular) - idiomatic Angular用の-wrapper for [Takt](https://github.com/vskstudio/takt-core) プライバシーに配慮した分析.
* [inspect-ng-collector](https://github.com/oneteme/inspect-ng-collector) - Angularアプリケーション向けの包括的なフロントエンドテレメトリおよびモニタリングライブラリ
* [ngx-piano](https://gitlab.com/SNCF/ngx-piano) - [Piano Analytics](https://www.piano.io/)をAngularアプリケーションへ統合するライブラリ。

### コード解析 <a id="code-analysis"></a>

* [angular-compiler-output](https://github.com/JeanMeche/angular-compiler-output) - 指定されたAngularテンプレートのAngularコンパイラ出力（JavaScript）を確認
* [angular-doctor](https://github.com/antonygiomarxdev/angular-doctor) - プロジェクト内のAngular固有のlint問題や不要コードをスキャンし、0～100のヘルススコアと実行可能な診断情報を生成
* [angular-mermaider](https://github.com/earthdmitriy/angular-mermaider) - メルマードデータフロー図を生成する静的コード分析ツール
* [compuse](https://github.com/jakub-hajduk/compuse) - コードベース内のAngularコンポーネント使用状況を統合的に分析するAPI
* [modulens](https://github.com/sinanyilmaz0/modulens) - フロントエンドワークスペース向けのアーキテクチャ、構造、品質分析ツールのセット
* [ngcompass](https://github.com/RoadmapDevelop/ngcompass) - アーキテクチャ、パフォーマンス、SSR、セキュリティ、コード品質に対するAngularに適した静的分析ツール
* [ng-di-graph](https://github.com/m-yoshiro/ng-di-graph) - Angular TypeScriptコードベースを分析し、デプロイインジェクション関係を抽出するコマンドラインツール
* [ng-lens](https://github.com/MerrittMelker/ng-lens) - Node.jsツールで `ts-morph` を使ってAngularコンポーネントを分析し、どのAPIライブラリからサービスの使用パターンを検出します.
* [ng-loom](https://github.com/xonaib/ng-loom) - Angularプロジェクトをスキャンし、アプリケーションのアーキテクチャ（コンポーネント、ディレクティブ、パイプ、サービス、ラッパー、インポート、インジェクション）を共有可能な、自己包含型の静的HTMLレポートとして出力するCLIツール
* [ng-parsel](https://github.com/angular-experts-io/ng-parsel) - AngularコードベースをJSON抽象構造にパース - APIや分析の表示に最適
* [ng-vitals](https://github.com/TechSpiritSS/ng-vitals) - ヘルス、アーキテクチャ、維持性、現代化準備度を評価する静的分析ツール
* [ngx-genie](https://github.com/SparrowVic/ngx-genie) - デプロイインジェクションツリーの可視化、サービス状態の分析、コンポーネント間の関係の追跡、メモリやアーキテクチャ上の問題の特定を行うツール
* [ngx-html-bridge](https://github.com/nagashimam/ngx-html-bridge) - Angularテンプレートを静的HTMLに変換し、標準的なHTMLツールで信頼性の高い検証やlintを可能にする
* [ngx-locator](https://github.com/Ea-st-ring/ngx-locator) - Angular開発用ユーティリティで、ブラウザからコンポーネントとテンプレートを開きます。like [LocatorJS](https://www.locatorjs.com/).
* [oxc-angular-compiler](https://github.com/voidzero-dev/oxc-angular-compiler) - Rustで書かれた高性能Angularテンプレートコンパイラで、 [Oxc](https://github.com/oxc-project/oxc) インフラを活用して高速コンパイルを実現.
* [ts-analyzer](https://github.com/amir-valizadeh/ts-analyzer) - タイプセーフ、コードの複雑さ、品質に関する詳細なメトリクスを提供する、包括的なTypeScriptコードベース分析ツール

### デバッグ <a id="debugging"></a>

* [Bugfender](https://bugfender.com/platforms/angular-logging/) - リアルタイムでログとAngularエラーを収集するクラウドサービス
* [ngx-debug-console](https://github.com/andrerds/ngx-debug-console) - Angular 14以降アプリケーション向けのフローティングデバッグコンソールオーバーレイ
* [ngrx-devtool](https://github.com/AmadeusITGroup/ngrx-devtool) - NgRxのステート管理を可視化・デバッグするための開発ツール
* [ngx-dev-toolbar](https://github.com/alfredoperez/ngx-dev-toolbar) - Angularアプリケーション向けにブラウザ内での開発者プロダクティビティを高める強力な開発ツールバー
* [omelet-angular-debug-panel](https://github.com/maycuatroi1/omelet-angular-debug-panel) - SQL活動、サーバータイミング、認証デバッグに関する可視化を提供するAngularデバッグダッシュボード
* [angular-scan](https://github.com/husseinAbdElaziz/angular-scan) - Angularコンポーネントが再レンダリングされていることを自動検出・強調
* [angular-render-scan](https://github.com/edisonaugusthy/angular-render-scan) - Angularの変更検知に向けた可視化デバッグオーバーレイ
* [rxjs-leak-finder](https://github.com/FlorinCiocirlan/rxjs-leak-finder) - Angularアプリケーション内で漏れてしまったRxJSサブスクリプションを検出する開発モードツール
* [form-lens-angular](https://github.com/hebertdelima13/form-lens-angular) - 開発中にアプリ内に直接、フォーム構造、コントロール状態、バリデーションエラー、ネストされたフォームツリーを確認
* [allstak-angular](https://github.com/AllStak/allstak-angular) - 未キャッチ例外、構造化ログ、ナビゲーションスパン、外部HTTPリクエスト、コンポーネントレンダリングタイミングをキャプチャ — スタンドアロンおよびNgModuleベースアプリケーションに第一クラスのサポートを提供

### ドキュメントツール <a id="documentation-tools"></a>

* [Storybook](https://github.com/storybooks/storybook) - 使いやすいUI開発環境
* [Compodoc](https://github.com/compodoc/compodoc) - Angularアプリケーションに欠けているドキュメントツール
* [ng-doc](https://github.com/ng-doc/ng-doc) - Angularプロジェクト向けドキュメントエンジン
* [docgeni](https://github.com/docgeni/docgeni) - Angularコンポーネントライブラリおよびマーカードキュメント向けの現代的・強力で即時使えるドキュメントジェネレーター
* [ng-component-hierarchy-visualizer](https://github.com/timonkrebs/ng-component-hierarchy-visualizer) - ルート設定からAngularコンポーネドの階層をMermaid図として生成する、非侵襲的なツール
* [easy-template-x-angular-expressions](https://github.com/alonrbar/easy-template-x-angular-expressions) - Angular表現のサポート for [easy-template-x](https://github.com/alonrbar/easy-template-x).
* [story-ui](https://github.com/southleft/story-ui) - AIによる会話でStorybookストーリーを生成し、コンポーネントドキュメントを自動化。多数のLLMプロバイダーと互換性あり
* [envguards](https://github.com/princeofv/envguards) - フレームワークに依存しない環境変数検証、ドキュメント生成、および `.env.example` 作成.
* [ngmd](https://github.com/erkamyaman/ngmd) - Angularドキュメントスタートアップ。マーカードファイルをドロップし、ルートを取得
* [storybook-addon-angular-manifest](https://github.com/anrouxel/storybook-addon-angular-manifest) - Storybook拡張機能で、ストーリーとCompodocドキュメントからAngularコンポーネントマニフェストを構築

### IDE拡張 <a id="ide-extensions"></a>

* [AngularCliPlus](https://github.com/danisss9/AngularCliPlus) - VS Code向けのAngular CLIコマンド、スキームジェネレーター、プロジェクトツール
* [angular-code-quality-toolkit](https://github.com/Arul1998/angular-code-quality-toolkit) - [VS Code extension](https://marketplace.visualstudio.com/items?itemName=arul1998.angular-code-quality-toolkit) でAngularコード品質ツール（depcheck, ts-prune, ESLint）を実行し、使われていないコードや依存関係をクリーンにします.
* [Angular Dev Tools](https://angular.dev/tools/devtools) - Angularアプリケーションのデバッグおよびプロファイリングを行うためのブラウザ拡張
* [Angular Extension Pack](https://marketplace.visualstudio.com/items?itemName=loiane.angular-extension-pack) - この拡張パッケージは、最も人気のあるVS Code Angular拡張の一部をパッケージ化しています
* [Angular File Generator](https://marketplace.visualstudio.com/items?itemName=imgildev.vscode-angular-generator) - 直感的かつ高速なファイル生成でAngular開発を強化
* [Angular Schematics Pro](https://cyrilletuzi.gumroad.com/l/schematicspro) - Visual Studio CodeにおけるAngularの最高レベルコード生成
* [Angular Schematics](https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics) - Visual Studio Codeにおける最高レベルコード生成
* [GraphLens](https://github.com/GraphLens/graphlens) - Angularプロジェクト用のインタラクティブなアーキテクチャ可視化ツール
* [Ionic VS Code Extension](https://ionicframework.com/docs/intro/vscode-extension) - Ionicアプリ開発に必要なさまざまな機能を、VS Codeウィンドウから離れていない状態で実行
* [mini-typescript-hero](https://github.com/angular-schule/mini-typescript-hero) - 軽量で現代的なVSCode拡張機能。自動的にインポート宣言を管理します
* [ngx-html-syntax](https://github.com/princemaple/ngx-html-syntax) - Angular HTML構文 for [Sublime Text](https://www.sublimetext.com/).
* [ngx-translatorex](https://github.com/MarcinKurylo/ngx-translatorex) - VS Code拡張機能で、Angularテンプレートとコンポーネント内のハードコーディングされた文字列を `ngx-translate` i18nキーに抽出します.
* [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) - コマンドライン引数を調べる時間を減らし、素晴らしい製品を迅速にリリースできるようになります
* [Redux DevTools](https://github.com/reduxjs/redux-devtools/) - `@ngrx/store-devtools` と組み合わせて、あなたのNgRxアプリの状態を確認できます.
* [vscode-angulartools](https://github.com/CoderAllan/vscode-angulartools) - [AngularTools](https://marketplace.visualstudio.com/items?itemName=coderAllan.vscode-angulartools) を使ってAngularプロジェクトを探索し、ドキュメントを強化し、コードを逆工程し、リファクタリングを行えます.
* [VS Code Angular HTML](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html) - Angular HTMLテンプレートファイルに対するシンタックスハイライト
* [vscode-angular-auto-import](https://github.com/ngx-rock/vscode-angular-auto-import) - テンプレート内で使用されたセレクタに基づき、欠落しているAngularコンポーネントインポートを自動的に提案・挿入
* [zed-angular](https://github.com/nathansbradshaw/zed-angular) - この拡張機能はAngular Language Serviceを [Zed](https://zed.dev/) に統合します.

### ジェネレーターとスキャフォールディング <a id="generators-and-scaffolding"></a>

* [angular-openapi-gen](https://github.com/constantant/angular-openapi-gen) - ツリーシェイク可能で、シグナルネイティブAPIクライアント生成ツール
* [angular-scaffold](https://github.com/EPAM-JS-Competency-center/angular-scaffold) - 生産用プロジェクトに必要なすべてのツールを備えたAngularプロジェクトのスケルトン生成
* [ngx-schematics-utilities](https://github.com/DSI-HUG/ngx-schematics-utilities) - Angular Schematics向けの便利なユーティリティ
* [abp](https://github.com/abpframework/abp) - 企業向けアプリケーション向けのオープンソースASP.NET Coreフレームワーク（意見に基づくアーキテクチャ）
* [LymeStack](https://www.lymestack.com/) - 小さなチームが迅速にアプリケーションを構築・改善できるためのフルスタックWebアプリテンプレートとツールセット
* [spiderly](https://github.com/filiptrivan/spiderly) - (C#) 生成ツールで、あなたのEF Coreモデルをカスタマイズ可能な およびAngularアプリに変換します. `.NET` `.NET`
* [generator-jhipster-ionic](https://github.com/jhipster/generator-jhipster-ionic) - JHipsterバックエンドと通信するIonicアプリを生成できる
* [Node Initializr](https://start.nodeinit.dev/) - アプリケーションの依存関係を迅速に収集し、初期設定の大部分を自動的に処理します
* [nx](https://nx.dev/nx-api/angular) - このプラグインはアプリケーションとライブラリの管理に必要なエグゼクタ、ジェネレータ、ユーティリティを提供します
* [skulljs](https://skulljs.github.io/) - 人気のJavaScriptおよびTypeScriptフレームワークを使用してウェブアプリケーションを構築するための標準化されたファイル構成を提供します
* [teleport-code-generators](https://github.com/teleporthq/teleport-code-generators) - 現代的なJavaScriptアプリケーション向けのコード生成ツールのコレクション
* [Bootify.io](https://bootify.io) - カスタムデータベース、Angularフロントエンド、CRUD機能を備えたSpring Bootアプリを生成
* [jangular-cli](https://github.com/nathangtg/jangular-cli) - JWT認証、Flywayマイグレーション、ルート保護、CLI設定を備えたSpring Boot + Angularのスタートキット
* [enterprise-java-saas-starter-kit](https://github.com/zukovlabs/enterprise-java-saas-starter-kit) - Java 21、Spring Boot 3.4、Angular 21（スタンドアローン＋シグナル）、MSSQL、JWT認証、Docker Composeを備えた、生産環境向けSaaSスタートアップ。
* [SaaS Starter](https://github.com/sayahweb2-png/saas-starter-lite) - JWT/OAuth/2FA認証、Stripe決済、マルチテナント、RBAC、BullMQ、Docker、Terraform、55以上テストを備えた、生産環境向けNestJS＋Angular 21のSaaSテンプレート。
* [JHipster](https://www.jhipster.tech) - Spring BootとAngular向けのオープンソースアプリジェネレーター。
* [ng-openapi](https://github.com/ng-openapi/ng-openapi) - Angular OpenAPIクライアントジェネレーター。
* [tmf](https://github.com/tripsnek/tmf) - Node.js、Java、Angular/Reactにわたるモデル駆動型かつ型安全なデータモデルを実現する、Eclipse Modeling Framework（EMF）の軽量TypeScript版。
* [polyfront-scaffold](https://github.com/NirmalSamaranayaka/polyfront-scaffold) - 幅広い設定オプションを提供し、柔軟かつスケーラブルなAngularアプリを構築できるジェネレーター。
* [orval](https://github.com/orval-labs/orval) - OpenAPI仕様に基づき、フロントエンドアプリケーション内で生成・検証・キャッシュ・モックを行う。
* [angular-sitemap-generator](https://github.com/borisonekenobi/angular-sitemap-generator) - Angularプロジェクト用の`sitemap.xml`ファイルを生成するツール。
* [AutoFormsBuilderFilesGenerator](https://github.com/XHAlawa/AutoFormsBuilderFilesGenerator) - OpenAPI/SwaggerからAngularフォームを生成する `ng-openapi-gen` で、型強化、バリデーション、UIヘルパーを備えています.
* [ngx-autogen](https://github.com/barcidev/ngx-autogen) - Angular開発ワークフローを最適化し、ベストプラクティスコードを生成・反復的な設定作業を減らすためのスケミクスのセット。
* [angular-momentum](https://github.com/TheGameKnave/angular-momentum) - 最小の設定で、モノリスリポジトリ内にAngularプロジェクトを迅速に立ち上げる。
* [swaggular](https://github.com/AlexMA2/swaggular) - Swagger/OpenAPI仕様からAngularサービスとモデルを生成するツール。
* [prism](https://github.com/arclight-digital/prism) - Litウェブコンポーネントから、React、Vue、Svelte、Angular、Solid、PreactのフレームワークラッパーおよびHTML/CSSの例を自動生成。
* [momentum-cms](https://github.com/DonaldMurillo/momentum-cms) - AngularベースのヘッドレスCMS。TypeScriptでコレクションを定義し、自動的にAdmin UI、REST API、データベーススキーマを生成。
* [ng-openapi-signals](https://github.com/ynnckrkn/ng-openapi-signals) - Signal-first OpenAPIクライアント生成ツール for Angular using `resource()` and `fetch()`.
* [NGX View Builder](https://ngxviewbuilder.io/) - ドラッグ＆ドロップによる低コードビルダーで、JSONでネイティブにレンダリングされるページ、ダッシュボード、フォームを視覚的に設計。

### 国際化 <a id="internationalization"></a>

* [angular-ecmascript-intl](https://github.com/json-derulo/angular-ecmascript-intl) - 国際化データをIntl.*ブラウザAPIで変換するためのパイプを含む。
* [angular-i18next](https://github.com/Romanchuk/angular-i18next) - [i18next](https://www.i18next.com/)をAngularへ統合するライブラリ。
* [angular-intlayer](https://www.npmjs.com/package/angular-intlayer) - Angularアプリケーションを国際化する[intlayer](https://github.com/aymericzip/intlayer)パッケージ。Angular国際化用のコンテキストプロバイダーとフックを提供する。
* [angular-locale-chain](https://github.com/i18n-agent/angular-locale-chain) - AngularおよびTransloco向けのスマートロケールフォールバックチェーン。
* [angular-translation-checker](https://github.com/ricardoferreirades/angular-translation-checker) - 向けのツールで、使われていないまたは欠落したキーを検出し、i18nファイルをクリーンに保つ。 `ngx-translate`
* [Angular Translation Extractor](https://github.com/devremoto/angular-translation-extractor) - [VS Code extension](https://marketplace.visualstudio.com/items?itemName=AdilsondeAlmeidaPedro.angular-translation-extractor) がテンプレートとTypeScriptからハードコーディングされた文字列を抽出し、`ngx-translate` キーに変換し、ロケールJSONを生成・自動翻訳し、ローダーと言語選択機能を接続します
* [Crowdin](https://crowdin.com/) - AIを活用したローカライゼーションソフトウェア。600以上のアプリと[integrations](https://store.crowdin.com/search?query=angular)を自動翻訳します
* [doloc](https://doloc.io/) - あなたの[Angular](https://doloc.io/getting-started/frameworks/angular/)ワークフローにおける即時翻訳
* [I18N](https://github.com/soluling/I18N) - Soluingが`.NET`、AngularおよびDelphi向けに開発した国際化（I18N）APIのコレクション
* [i18n-egy](https://github.com/abdelfattahqandil21-oss/i18n-egy) - Signalsを活用した、現代的で軽量かつTree-shakableなAngular国際化ライブラリ。サーバーサイドレンダリングにも安全。
* [i18n-keygen](https://github.com/gagle/i18n-keygen) - すべてのビルドツールに型安全なi18nキーを提供。1つのパッケージ、ゼロのロックイン。
* [i18n-scanner-toolkit](https://github.com/58bcbedf47bd91439c/i18n-scanner-toolkit) - CSVインポート／エクスポートにより、翻訳の欠落を検出し、多言語コンテンツを抽出・管理。
* [intl-tel-input-ng](https://github.com/mpalourdio/intl-tel-input-ng) - Angularコンポーネントで簡単に[intl-tel-input](https://github.com/jackocnr/intl-tel-input)を統合
* [langsync](https://github.com/mariokreitz/langsync) - TypeScriptプロジェクトにおけるローカライズワークフロー向けのCLIツール。
* [localess](https://github.com/Lessify/localess) - AngularとFirebaseを使用して構築された強力な翻訳管理ツールおよびコンテンツ管理システム
* [localive](https://github.com/Arigatouz/localive) - React、Vue、Angular、またはSvelteアプリケーション内で実行中のアプリに直接テキストを更新し、JSONキーを検索せずに直ちにローカルファイルに変更を保存
* [ng-extract-i18n-merge](https://github.com/daniel-sc/ng-extract-i18n-merge) - Angularプロジェクト用のi18n xliff翻訳ファイルの抽出およびマージ
* [ng-linguo](https://github.com/jmwierzbicki/linguo) - SignalStoreに基づく現代的なAngular 18+ i18nツールキット — `@ngx‑translate/core`およびTranslocoへの完全な反応型、ゼロRxJSの代替ツール
* [ngx-atomic-i18n](https://github.com/viacharles/ngx-atomic-i18n) - AngularのLazy Loadingをサポートする翻訳ライブラリ
* [ngx-bidi](https://github.com/ystolyarchuk/ngx-bidi) - Angularライブラリで、LTR/RTLのテキスト方向を自動または手動で制御するためのディレクティブ、`NgxBidiService`、SCSSミックスイン、モジュール/スタンドアローンサポート
* [ngx-directo](https://github.com/ahmaed0hakam/ngx-directo) - Angular 18以降のSignalsベースライブラリによるRTL/LTR方向性、アラビア語ローカライズ、Google Fontの統合
* [ngx-easy-i18n-js](https://github.com/gabrie-allaigre/ngx-easy-i18n-js) - Angular向けの簡単な国際化(i18n)ライブラリ
* [ngx-g11n](https://github.com/DSI-HUG/ngx-g11n) - アプリケーションの国際化およびローカライズを支援するAngularのヘルパー
* [ngx-i18n-extract-regex-cli](https://github.com/Celtian/ngx-i18n-extract-regex-cli) - Angularアプリから翻訳を抽出するための正規表現ベースのツール
* [ngx-i18n-tools](https://github.com/Ascor8522/ngx-i18n-tools) - Angularアプリケーションの翻訳ツール、Excel/XLIFFコンバーターを含む—[ngx-xlf-xlsx](https://github.com/Ascor8522/ngx-i18n-tools/tree/master/ngx-xlf-xlsx)
* [ngx-localized-router](https://github.com/odomanskyi/ngx-localized-router) - 軽量なAngularライブラリで、URLに言語セグメントを追加することでアプリケーションのルートをローカライズできる
* [ngx-runtime-i18n](https://github.com/AshwinSathian/ngx-runtime-i18n) - Angular向けの実行時国際化 — シグナルベース、SSR安全、フレームワークに依存しないコア
* [ngx-signal-translate](https://github.com/adamcsk1/ngx-signal-translate) - シグナル駆動の翻訳サービス
* [ngx-tolgee](https://github.com/tolgee/tolgee-js/tree/main/packages/ngx/projects/ngx-tolgee) - 開発中のAngularアプリ内で直接翻訳できるウェブベースのローカライズツール
* [ngx-translate](https://github.com/ngx-translate/core) - Angular用の国際化（i18n）ライブラリ
* [@OGS-GmbH/ngx-translate](https://github.com/OGS-GmbH/ngx-translate) - 軽量なAngular i18nライブラリで、RESTベースの設定、動的言語切り替え、柔軟な翻訳管理を提供
* [ngx-translate-cut](https://github.com/bartholomej/ngx-translate-cut) - Angularパイプによる翻訳の切り取り✂️ 🌍（`@ngx-translate`向けプラグイン）
* [ngx-translate-lint](https://github.com/romanrostislavovich/ngx-translate-lint) - シンプルなCLIツールで `ngx-translate` キーをチェック
* [ngx-translate-messageformat-compiler](https://github.com/lephyrus/ngx-translate-messageformat-compiler) - `ngx-translate`のコンパイラで、ICU構文を使用して複数形と性別を処理する翻訳をコンパイル [messageformat.js](https://github.com/messageformat/messageformat)
* [ngx-translate-module-loader](https://github.com/larscom/ngx-translate-module-loader) - 高度にカスタマイズ可能で柔軟な `@ngx-translate/core` 用の翻訳ローダー
* [ngx-translate-multi-http-loader](https://github.com/rbalet/ngx-translate-multi-http-loader) - ngx-translate用のローダーで、HTTP呼び出しにより翻訳をロード
* [ngx-translate-phraseapp](https://github.com/phrase/ngx-translate-phraseapp) - Angularアプリケーションにおける[Phrase Strings In-Context Editor](https://support.phrase.com/hc/articles/5784095916188-In-Context-Editor-Strings)と`ngx-translate`の統合を実現する公式ライブラリ
* [ngx-translate-routes](https://github.com/darioegb/ngx-translate-routes) - このサービスはタイトルとルートパスを翻訳する
* [ngx-translate-toolkit](https://github.com/robmanganelly/ngx-translate-toolkit) - 大規模プロジェクトにおける翻訳管理プロセスを拡張し、簡便化するためのAngularライブラリ `@ngx-translate/core`
* [ngx-translate-version](https://github.com/Celtian/ngx-translate-version) - 言語ファイルにバージョン情報を提供するAngularモジュール
* [ruci](https://github.com/njirolu/ruci) - Angularプロジェクトにおけるi18n検証を `ngx-translate` で簡略化するCLIツールで、正確かつ高品質な翻訳を確保します
* [runtime-localizer](https://forge.deejayy.hu/angular-packages/runtime-localizer) - Angular用の実行時ローカライザ
* [rust-ngx-translate-lint](https://github.com/hafnerpw/rust-ngx-translate-lint) - パフォーマンス向上を目的とした`ngx-translate-lint`のRust版
* [signal-translate](https://github.com/NGneers/signal-translate) - シグナルを核心として利用する翻訳サービス
* [Transifex](https://github.com/transifex/transifex-javascript/tree/master/packages/angular/projects/tx-native-angular-sdk) - Angularコンポーネントを簡単にローカライズできる[Transifex library extension](https://www.npmjs.com/package/@transifex/angular)。このライブラリは[Transifex Native JavaScript SDK](https://developers.transifex.com/docs/javascript-sdk)の機能を拡張しています
* [TransLatte](https://github.com/Marbulinek/TransLatte) - Lingva APIを使用して翻訳JSONファイルを生成するCLIツール
* [transloco](https://github.com/jsverse/transloco) - Angular用の国際化（i18n）ライブラリ
* [transloco-keys-manager](https://github.com/jsverse/transloco/tree/master/libs/transloco-keys-manager) - Translocoを使用するプロジェクトから翻訳可能なキーを抽出します
* [xlf-sync](https://github.com/atheodosiou/xlf-sync) - Angular XLIFF（1.2 & 2.0）ロケールファイルを同期するためのCLIツール

### Lint <a id="linting"></a>

* [@ni/javascript-styleguide](https://github.com/ni/javascript-styleguide) - ESLint用のNIのJavaScriptおよびTypeScriptのリントルール
* [@yoo-digital/eslint-plugin-angular](https://github.com/yoo-digital/eslint-plugin-angular) - Angular用のカスタムリントルール
* [angular-eslint](https://github.com/angular-eslint/angular-eslint) - すべてのツールを統合したmonorepoで、ESLintがAngularプロジェクトをリントできるようにします
* [eslint-config-angular-strict](https://github.com/Jbz797/eslint-config-angular-strict) - Angular開発用の厳格なルールを備えた現代的なESLint設定
* [eslint-config-spartan](https://github.com/glitch452/eslint-config-spartan) - さまざまなESLintプラグイン向けに別々の設定（ミックスインと呼ばれる）を持つ意見のあるESLint設定
* [eslint-plugin-angular-modern](https://github.com/cyrilletuzi/eslint-plugin-angular-modern) - 現代的で安全なAngular向けESLintルール
* [eslint-plugin-ng-module-sort](https://github.com/ducktordanny/eslint-plugin-ng-module-sort) - AngularおよびNestJSのモジュール配列を自動ソートし、モジュールを清潔かつ整理された状態に保ちます
* [ngx-html-bridge-markuplint](https://github.com/nagashimam/ngx-html-bridge-markuplint) - このライブラリは、Angularテンプレートを逆コンパイルしてHTMLに変換することでMarkuplintをリンクし、正確なリントと適切なソースマップ報告を可能にします
* [eslint-config-neon](https://github.com/iCrawl/eslint-config-neon) - 包括的な共有可能なESLint設定
* [eslint-config-angular](https://github.com/noneforge/eslint-config-angular) - TypeScript対応、コンポーネント/テンプレートルール、アクセシビリティ、CSSリントを含む包括的なAngular ESLint設定
* [linters](https://github.com/developer239/linters) - ESLint / StyleLintおよびその他のコード品質ツール向けの非常に厳格な設定のコレクション
* [eslint-plugin-angular-class-ordering](https://github.com/Leritas/eslint-plugin-angular-class-ordering) - Angularクラスメンバー（フィールドおよびメソッド）を一貫した順序に保ち、自動修正機能を備えたESLintプラグイン
* [lint-a-lot](https://github.com/JanKru/lint-a-lot) - 現代的なFlat Configを使用するAngularプロジェクト向けの意見のあるESLintおよびStylelint設定
* [neighbor](https://github.com/a11yfred/neighbor) - マークアップ、CSS、コピーに存在するアクセシビリティの問題を、リリース前に検出する

### ネットワーク <a id="networking"></a>

* [angular-http-server](https://github.com/simonh1000/angular-http-server) - シングルページアプリ（SPAs）向けのシンプルなhttpサーバー
* [ngx-device-detector](https://github.com/AhsanAyaz/ngx-device-detector) - Angular v7以降向けのデバイス、OS、ブラウザの詳細を検出するライブラリ
* [ngx-offline-indicator](https://github.com/thdang1009/ngx-offline-indicator) - Angularアプリケーション内でユーザーのインターネット接続状態をシンプルかつカスタマイズ可能に通知する方法

### 性能 <a id="performance"></a>

* [angular-rust-compiler](https://github.com/truonglvos/angular-rust-compiler) - Rustで書かれた高性能なAngular AOTコンパイラ。Angularコンポーネントとディレクティブの完全な静的コンパイルを提供
* [detective](https://github.com/angular-architects/detective) - アーキテクチャレベルでのフォレインコード分析により、コードベース内の隠れたパターンを明らかにする
* [esbuild Bundle Size Analyzer](https://esbuild.github.io/analyze/) - esbuildバンドルの中身を可視化する
* [hawkeye](https://github.com/angular-experts-io/hawkeye) - JavaScriptバンドルを可視化・最適化するツール。モジュール、依存関係、パフォーマンスに影響を与えるアセットを明らかにする
* [microwave](https://github.com/jscutlery/devkit/tree/main/packages/microwave) - Angularの変更検知を簡単に最適化する
* [ng-event-plugins](https://github.com/taiga-family/ng-event-plugins) - パフォーマンスに敏感なイベントに対して変更検知サイクルを最適化するための小さなライブラリ
* [ng-queuex](https://github.com/dagnygus/ng-queuex) - Reactのようなスケジューラとシグナル駆動のディレクティブを備えた実験的なAngularエコシステム
* [ng-reactive-lint](https://github.com/Shrinivassab/ng-reactive-lint) - SignalsとRxJSを用いて最適な反応パターンを強制するAngular専用のリーダー
* [ngx-idle-monitor](https://github.com/giorgi1441/ngx-idle-monitor) - ユーザー活動を追跡し、セッションタイムアウトを管理し、タブ間でアイドル状態を同期するための軽量Angularサービス
* [ngx-network-monitor](https://github.com/MadeByRaymond/ngx-network-monitor) - ネットワーク状態（オンライン／オフライン、接続品質（2G／3G／4G／5-5G）、ping遅延）をモニタリングするための軽量Angularサービス
* [ngx-performance-diagnostics](https://github.com/maciekv/ngx-performance-diagnostics) - 設定なしでAngularアプリケーション内のパフォーマンスボトルネック、過剰な変更検知サイクル、メモリリークを検出する
* [ngx-script-optimizer](https://github.com/Mohid123/ngx-script-optimizer) - 第三者スクリプトの処理を高速化するための軽量Angularライブラリ
* [ngx-unused](https://github.com/wgrabowski/ngx-unused) - コードベースに宣言されているが使用されていないAngularクラスを検出する
* [ngx-worker-bridge](https://github.com/yashwantyashu/worker-bridge) - AngularとReactの間の軽量でボイラープレートのない反応ブリッジ。Web Worker（専用および共有）を通常のメソッド呼び出しのように簡単にする
* [rere-benchmark](https://github.com/NullVoxPopuli/rere-benchmark) - フロントエンドフレームワーク間の反応性とレンダリングのパフォーマンスを評価するベンチマーク
* [sonda](https://github.com/filipsobol/sonda) - JavaScriptおよびCSSのユニバーサルな可視化ツールと分析ツール

### ランタイム <a id="runtime"></a>

* [angular-compile](https://github.com/patrikx3/angular-compile) - Angularの動的コンパイル。文字列をAngularコンポーネントに変換。
* [deepequalspure](https://github.com/puckowski/deepequalspure) - Angularプロジェクト向けのJavaScriptオブジェクトの深層等価サービス。
* [lbx-change-sets](https://github.com/Service-Soft/lbx-change-sets) - 拡張可能なベースリポジトリを使用して、エンティティの変更を自動的に追跡。
* [ng-noop](https://github.com/joeskeen/ng-noop) - カスタムランタイム、CLIs、サーバー、実験的なレンダラー向けの最小限のDOMなしAngularプラットフォーム。
* [ngx-api-mimic](https://github.com/mateuszbilicz/ngx-api-mimic) - このライブラリは、AngularのHTTPインターセプターを使ってデータをモックし、仮のAPIをシミュレートできます。
* [ngx-compare-object](https://github.com/RzoDev/ngx-compare-object) - Angularでオリジナルオブジェクトと変更後のオブジェクトを比較するユーティリティ。
* [ngx-json-reader](https://github.com/Verbalman/ngx-json-reader) - Angular 17以降のJSONリーダー/エディタで、複数URLの比較と差分を提供。
* [runtime-config-loader](https://github.com/pjlamb12/runtime-config-loader) - Angularが実行時設定に必要な構成JSONファイルを簡単に読み込むためのライブラリ。
* [worker-bridge](https://github.com/hardcopycortex461/worker-bridge/tree/master) - AngularとReactをウェブワーカーで橋渡しするシンプルな反応メソッドとボイラープレートなし。

### SEO <a id="seo"></a>

* [@davidlj95/ngx-meta](https://ngx-meta.dev) - SSR対応で、Angularサイトのメタタグ、Open Graph、Xカード、JSON-LDを迅速に設定。
* [ngx-seo](https://github.com/samvloeberghs/kwerri-oss/tree/main) - Kwerri OSS: samvloeberghs.be + ngx-seo.
* [Angular React SEO](https://github.com/ganatan/angular-react-seo) - Angular & React Examples SEO（検索エンジン最適化）。
* [unhead](https://www.npmjs.com/package/@unhead/angular) - Angularアプリケーション向けのフルスタック`<head>`管理

### スタイリング <a id="styling"></a>

* [Angular-Material-Tailwind-Integration](https://github.com/adandedjanstephane-git/Angular-Material-Tailwind-Integration) - マテリアルデザインシステムのトークンをTailwind CSSユーティリティクラスにマッピングする、安定したテーマ可能なCSSカスタムプロパティセット。
* [element-identifier](https://github.com/jooherrera/element-identifier) - 信頼性の高い、一意なCSSセレクタを作成してDOM要素をターゲットにし、視覚的に確認・選択できるウェブコンポーネントを活用。
* [Material Theme Builder](https://www.materialthemebuilder.com/) - アプリケーション向けのリアルタイムAngular Materialテーマ。
* [ngx-angora-css](https://github.com/LynxPardelle/ngx-angora-css) - ページ読み込み時にスタイルを動的に生成するJavaScriptベースのCSSフレームワーク。
* [ngx-classed](https://github.com/lukonik/ngx-classed) - 状態に基づいてクラスを動的に追加または削除できるライブラリ。
* [ngx-css](https://github.com/squidit/ngx-css) - [Squid CSS](https://github.com/squidit/css)のAngularアブストラクション
* [ngx-mq](https://github.com/martsinlabs/ngx-mq) - シグナルとネイティブの[matchMedia API](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)を用いてメディアクエリを管理する宣言型ライブラリ。Tailwind、Bootstrap、Angular Materialの組み込みブレークポイントプリセットを備えています
* [ngx-responsive-signals](https://github.com/irvrodflo/ngx-responsive-signals) - Angular向けのシグナルベースのレスポンスブレークポイント。
* [ngx-theme-stack](https://github.com/WanderleeDev/ngx-theme-stack) - 現代的な、SSR対応のAngularライブラリで、Angularシグナルを使ってダークモード、ライトモード、カスタムテーマを管理。
* [panda](https://github.com/chakra-ui/panda) - Panda、CSS-in-JSフレームワークをAngularで簡単に使用できる、その専用の[integration](https://panda-css.com/docs/docs/installation/angular)
* [prime-ng-theme-fe](https://github.com/mkccl/prime-ng-theme-fe) - PrimeNG向けの視覚テーマデザイナー。
* [Super JSS](https://github.com/rsantoyo-dev/super-jss-workspace) - スーパージャバスクリプト・スタイルシートは、ブレークポイントとテーマをサポートする原子的なCSSを生成する、小さなAngularランタイムライブラリです。
* [Theme-Kit](https://github.com/M1tsumi/Theme-Kit) - React、Vue、Angular、または任意のJavaScriptプロジェクトで一貫した使用を可能にする、デザイントークンを中央管理する統一されたデザイントークンSDKです。
* [tokiforge](https://github.com/TokiForge/tokiforge) - React、Vue、Angular、Svelteおよびvanilla JS向けのフレームワークに依存しないデザイントークンエンジンです。
* [ukit-css](https://github.com/vcalderondev/ukit-css) - JITによるユーティリティファーストCSSエンジン — 任意のフロントエンドスタック（React、Vue、Angular、Svelte、Next.js、Astro、プレーンHTML）向けのTailwindスタイルのオンデマンドクラス生成です。

## セキュリティと認証 <a id="security-and-authentication"></a>

### 認証 <a id="authentication"></a>

* [angular-auth-oidc-client](https://github.com/damienbod/angular-auth-oidc-client) - OpenID Connect、OAuthコードフロー（PKCE）、リフレッシュトークン、およびインプレースフローをサポートするNPMパッケージです。
* [angular-oauth2-oidc](https://github.com/manfredsteyer/angular-oauth2-oidc) - AngularにおけるOAuth 2およびOpenId Connect（OIDC）のサポートです。
* [angular-authentication](https://github.com/nikosanif/angular-authentication) - ユーザー認証および認可フローに関するベストプラクティスを示すAngularアプリケーションです。
* [angularfire](https://github.com/angular/angularfire) - Angular + Firebase。
* [angularx-social-login](https://github.com/abacritt/angularx-social-login) - Angular 17向けのソーシャルログインおよび認証モジュールです。
* [angular2-jwt](https://github.com/auth0/angular2-jwt) - AngularアプリケーションにおけるJWTの処理を支援するヘルパーライブラリです。
* [appwrite](https://github.com/appwrite/appwrite) - あなたの[Angular app](https://appwrite.io/docs/quick-starts/angular)を[Appwrite](https://appwrite.io/)で認証、データベース、ストレージ、関数などに統合
* [auth0-angular](https://github.com/auth0/auth0-angular) - Auth0 SDK for Angularのシングルページアプリケーション。
* [authon-sdk](https://github.com/mikusnuz/authon-sdk/tree/main/packages/angular) - [Authon](https://authon.dev/)のAngular SDK — サービス、ガード、インタセプター
* [authress-angular](https://github.com/mikepattyn/authress-angular) - このパッケージは、[Authress](https://authress.io/) LoginClientの簡単な設定と登録用のモジュールのみを含んでいます
* [@badisi/ngx-auth](https://github.com/Badisi/auth-js/tree/main/libs/ngx-auth) - Angularベースのデスクトップおよびモバイルアプリケーションにおける認証および認可サポートです。
* [corbado](https://www.corbado.com/#signup-init) - [Integrate](https://docs.corbado.com/corbado-complete/frontend-integration/angular) Corbado で Angular を使用してパスキーで認証を行う.
* [fingerprint](https://dev.fingerprint.com/docs/angular) - Fingerprint Angular SDKは、FingerprintをAngularアプリケーションに簡単に統合するための方法です。
* [frontegg-angular](https://github.com/frontegg/frontegg-angular) - Angular 用のホストされたログイン SDK；詳しくは [quickstart](https://developers.frontegg.com/ciam/sdks/frontend/angular/hosted-login) を参照してください.
* [FusionAuth Angular SDK](https://fusionauth.io/docs/sdks/angular-sdk) - ログイン/登録、ログアウト、リフレッシュトークン処理をサポートするAngular SDKです。
* [hanko](https://github.com/teamhanko/hanko) - 次の [quickstart](https://docs.hanko.io/quickstarts/frontend/angular) をフォローして、オープンソースの認証およびユーザー管理ソリューション [Hanko](https://www.hanko.io/) を Angular アプリに統合してください.
* [keycloak-angular](https://github.com/mauriciovigolo/keycloak-angular) - Angularアプリケーション向けのKeycloakの簡単な設定です。
* [lbx-jwt](https://github.com/Service-Soft/lbx-jwt) - ループバックアプリケーション向けのJWT認証を提供。トークン内にロールを格納し、リフレッシュ処理を実行。内部で再利用検出を実装しています。
* [Logto](https://logto.io/) - オープンソースの Auth0 代替品（OIDC/OAuth2/SAML）．Angular [quickstart](https://docs.logto.io/quick-starts/angular#prerequisites)．
* [Melody Auth](https://github.com/ValueMelody/melody-auth) - その [SDK](https://www.npmjs.com/package/@melody-auth/angular) は、状態やリダイレクト、トークン処理を自動化するため、Angular と melody の認証統合をスムーズに実現します.
* [MojoAuth](https://mojoauth.com/) - パスキーを使用する最も簡単な方法： [integrate](https://docs.mojoauth.com/guides/angular)．
* [msal-angular](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-angular) - MSAL for Angular は、Angular アプリが 、Microsoft アカウント、およびソーシャルプロバイダーを介してユーザーの認証を行い、Microsoft サービス（例： ）のトークンを取得できるようにします． [Azure AD](https://docs.microsoft.com/azure/active-directory/develop/v2-overview) [Azure AD B2C](https://docs.microsoft.com/azure/active-directory-b2c/active-directory-b2c-overview#identity-providers) [Graph](https://graph.microsoft.io)
* [ng-awesome-node-auth](https://github.com/nik2208/ng-awesome-node-auth) - Angular の Interceptor および Guards 用の [awesome-node-auth](https://github.com/nik2208/awesome-node-auth)．
* [ngx-auth-client](https://github.com/ismailza/ngx-auth-client) - Angularによる認証レイヤーで、シグナルベースの状態管理、関数型ルート保護、Keycloak統合を提供します。
* [ngx-better-auth](https://github.com/thomasorgeval/ngx-better-auth) - Angular 20 以降向けの [Better Auth](https://github.com/better-auth/better-auth) のラッパー．反応型セッション処理をシグナルで提供し、観測可能な DI プロバイダー設定と現代的なガードを実現します．
* [ngx-cognito-auth](https://github.com/SamsonGross/ngx-cognito-auth) - OAuth 2.0認可コードフロー（PKCE）を使用したAWS Cognito認証を提供するAngular 21以降のライブラリです。
* [ngxfire](https://github.com/teve-no/ngxfire) - Zoneless AngularFireの代替です。
* [ngx-oauth](https://github.com/Fl0r14n/ngx-oauth) - Angular 22向けのZoneless、シグナルベースのOAuth 2.1ライブラリです。
* [ngx-webauthn](https://github.com/JonnyHeavey/ngx-webauthn) - AngularにおけるWebAuthn APIの型安全かつ簡潔な抽象化を提供するライブラリで、標準型に加え、一般的な使用ケース向けのオプションプレセットを内蔵しています。
* [omni-auth](https://github.com/ngx-addons/omni-auth) - Angular用の認証ライブラリで、認証フロー、ガード、エラーハンドリングの基本機能を提供します。
* [otp-angular](https://github.com/subha-patra/otp-angular) - Angular 20以降のアプリケーション向けに、軽量かつ高度にカスタマイズ可能で、依存関係を必要としないワンタイムパスワード（OTP）入力コンポーネントです。
* [passlock](https://github.com/passlock-dev/passlock) - Angularおよびその他のフレームワーク向けの摩擦のないパスキー認証。
* [@serhiisol/ngx-auth](https://github.com/serhiisol/ngx-auth) - Angular 20以降用の認証モジュール。
* [Supabase](https://supabase.com/docs/guides/getting-started/tutorials/with-angular) - Angularでユーザー管理アプリケーションを構築する。
* [SuperTokens](https://supertokens.com) - あなたの [Angular](https://supertokens.com/docs/quickstart/frontend-setup) アプリケーションを SuperTokens で認証するように設定してください．
* [witspry-auth-ng-client](https://github.com/satya-jugran/witspry-auth-ng-client) - OAuth2認証をサポートし、PKCE（Proof Key for Code Exchange）を提供する、包括的なAngularライブラリ。
* [zenuxs-oauth](https://github.com/developer-rs5/zenuxs-oauth) - 現代アプリケーション向けのユニバーサルOAuth 2.0 + PKCEクライアント。
* [zitadel](https://zitadel.com/docs/examples/login/angular) - アプリケーションの安全な認証管理。成長に応じてカスタマイズ可能で、簡単なAPIとプログラマブルなワークフローを備えています。成長に集中し、ログインは安心です。

### 決済 <a id="payments"></a>

* [adyen-angular-online-payments](https://github.com/adyen-examples/adyen-angular-online-payments) - Angular/Expressベースのウェブサイトで、カード、ウォレット、および地元の支払い方法を用いて決済を受け付ける。
* [angular-spotflow-checkout](https://github.com/Spotflow-One/angular-spotflow-checkout) - [Spotflow](https://www.spotflow.one/) Angular SDK により、ユーザーはスムーズなチェックアウト体験で支払いを行うことができます．
* [google-pay-button](https://github.com/google-pay/google-pay-button) - Google Payボタン - React、Angular、カスタムエレメント。
* [ngx-hyperpay](https://github.com/MagdyAbouelnasr/ngx-hyperpay) - [HyperPay](https://www.hyperpay.com/) パイプゲートウェイの簡単な統合用の Angular ライブラリ．
* [ngx-mp-payments](https://github.com/JosemaCeballos/ngx-mp-payments) - [Mercado Pago](https://www.mercadopago.com.ar/) との統合用の Angular ライブラリ．
* [ngx-stripe](https://github.com/richnologies/ngx-stripe) - StripeJS および [Stripe Elements](https://stripe.com/docs/stripe-js) との Angular バインディング．
* [ngx-supabase-stripe](https://github.com/dotted-labs/ngx-supabase-stripe) - Supabase + Stripeの支払い・サブスクリプション向けの、事前準備済みのAngularコンポーネント。
* [solidgate](https://github.com/solidgate-tech/angular-sdk) - Angular SDKにより、Solidgate支払いフォームを追加できます。

### ロールベースアクセス制御 <a id="role-based-access-control"></a>

* [casl-angular](https://github.com/stalniy/casl/tree/master/packages/casl-angular) - 同士の権限管理ライブラリ [CASL](https://github.com/stalniy/casl) を Angular に統合するモジュール．
* [nblocks](https://www.nblocks.dev/) - 認証、支払い、サブスクリプション、機能、ロール管理を一元的に管理できるコントロールセンター。
* [ngx-can-i](https://github.com/kopy011/ngx-can-i) - Angular開発者向けの権限管理を支援するパッケージ。
* [ngx-permissions](https://github.com/AlexKhymenko/ngx-permissions) - Angularアプリケーション（AOT、lazyモジュール対応）向けの、権限とロールに基づくアクセス制御。
* [ngx-role-accessor](https://github.com/IroshanRathnayake/ngx-role-accessor) - エンタープライズレベルのAngularベースのロールベースアクセス制御（RBAC）ライブラリ。
* [ngx-signal-permissions](https://github.com/levart/ngx-signal-permissions) - TypeScriptを完全にサポートし、現代的なシグナルベースのAngularライブラリで、権限とロールの管理を実現。
* [ngx-smart-permissions](https://github.com/rami-sheikha-dev/ngx-smart-permissions) - 軽量で開発者フレンドリーなAngularライブラリで、スタンドアローンコンポーネントおよびNgModulesをサポートし、ロールと権限に基づくアクセス制御を提供。
* [ngxsmk-gatekeeper](https://github.com/NGXSMK/ngxsmk-gatekeeper) - Angular向けの軽量で開発者フレンドリーなミドルウェアエンジンで、ルートとHTTPリクエストのセキュリティを一つのコンポジブル設定で実現。
* [permit](https://www.permit.io/) - [Angular](https://www.permit.io/blog/how-to-implement-role-based-access-control-rbac-in-angular) との利用可能な認可-as-a-service ソリューション．
* [ng-ability](https://github.com/topaxi/ng-ability) - Angularにおけるアクセス制御リストを定義する
* [urbac](https://github.com/kasoir/urbac) - 完全で、生産環境に適したテンプレートを提供し、数分で安全で複数レベルのアクセス制御システムを構築できる
* [rulegate](https://github.com/fotbiler-lab/rulegate) - ローカル第一、プロバイダーに依存しない認可：`.NET` および Angular 用．

### セキュリティのベストプラクティス <a id="security-best-practices"></a>

* [Official Angular Security](https://angular.dev/best-practices/security) - ベストプラクティス
* [Aikido](https://www.aikido.dev/) - コード、クラウド、実行環境を1つの中央システムで保護し、脆弱性を自動検出・修正できる
* [GitHub Code Scanning](https://docs.github.com/en/code-security/concepts/code-scanning) - GitHubのコードスキャン機能の基本概念を学ぶ
* [GitHub Skills](https://skills.github.com/) - コードセキュリティおよび分析に関するガイド付きインタラクティブチュートリアルが提供されている
* [HackTricks](https://book.hacktricks.xyz/network-services-pentesting/pentesting-web/angular) - Angularセキュリティチェックリスト
* [SafeDep](https://safedep.io/) - オープンソースコードに存在する脆弱性やマルウェアを継続的にスキャンし、セキュリティエンジニアチームが継承されたOSSリスクを事前に対応できるよう支援
* [Snyk](https://snyk.io/) - 開発ツール、ワークフロー、自動化パイプラインに直接統合された開発者向けセキュリティプラットフォーム
* [Socket](https://socket.dev/) - 開発者中心のセキュリンプラットフォームで、脆弱なおよび悪意ある依存関係からコードを保護
* [supply-chain-inspector](https://github.com/DenysVuika/supply-chain-inspector) - npm依存関係の供給チェーンセキュリティ分析に用いる、独立したゼロ依存のNode.jsスクリプト
* [Vulert](https://vulert.com) - オープンソース依存関係内の脆弱性を検出することでソフトウェアを保護—コードにアクセスせず、JavaScript、PHP、Java、Pythonなどに対応

## 状態管理 <a id="state-management"></a>

### NgRx <a id="ngrx"></a>

* [Official website](https://ngrx.io/)
* [Official GitHub repository](https://github.com/ngrx/platform) - Angularにおける反応型状態
* [ngrx-course](https://github.com/angular-university/ngrx-course) - Angular大学完全ガイド
* [ngrx-store-localstorage](https://github.com/btroncone/ngrx-store-localstorage) - `@ngrx/store`とローカルストレージの間のシンプルな同期
* [ngrx-toolkit](https://github.com/angular-architects/ngrx-toolkit) - NgRx Signal Storeへのさまざまな拡張機能
* [ngrx-traits](https://github.com/gabrielguerrero/ngrx-traits) - NgRx Traitsは、アプリケーション全体でNGRXアクション、セレクタ、エフェクト、リダクタのセットを構成・再利用できるようにするライブラリ
* [ngrx-addons](https://github.com/Michsior14/ngrx-addons) - NgRxのアドオンを収録したコレクション、其中包括、状態の永続化
* [ngrx-store-storagesync](https://github.com/larscom/ngrx-store-storagesync) - localStorage/sessionStorageと`@ngrx/store`間の高度にカスタマイズ可能な状態同期ライブラリ
* [ngrx-wieder](https://github.com/nilsmehlhorn/ngrx-wieder) - NgRxとImmer.jsを用いたAngularにおける軽量の取り消し・再実行機能
* [ngrx-immer](https://github.com/timdeschryver/ngrx-immer) - NgRxのメソッドであるcreateReducer、on、ComponentStoreに常にラッパーが存在する
* [ngrx-rtk-query](https://github.com/SaulMoro/ngrx-rtk-query) - Hooksを使ったRTK QueryがAngularアプリケーションで動作するようになる
* [angular-ngrx-nx-realworld-example-app](https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app) - Angular 21、NgRx 2、Nx 22で構築された実世界のアプリケーション
* [ngx-view-state](https://github.com/yurakhomitsky/ngx-view-state) - NgRxでロード/成功/エラーの処理を行うためのライブラリ
* [store-service](https://github.com/ngxp/store-service) - AngularコンポーネントとNgRxストアの間にある抽象化層／ファサードを提供
* [ngx-signal-store-query](https://github.com/k3nsei/ngx-signal-store-query) - シグナルストア機能が [Angular Query](https://tanstack.com/query/latest/docs/framework/angular/overview) と連携する機能．
* [SmartNgRX](https://github.com/DaveMBush/SmartNgRX) - NgRxを抽象化することでCRUD操作を簡易化するライブラリであり、既存のNgRxコードを活用・サポートする
* [ngrx-hateoas](https://github.com/angular-architects/ngrx-hateoas) - HATEOASアプローチに基づき、NgRx Signal StoreにHypermedia JSONを導入するライブラリ
* [ngrx-http-tracking](https://github.com/acandylevey/ngrx-http-tracking) - 既存のストアと統合することで、ボイラープレートを削減し、HTTPリクエストの状態（ロード、成功、エラー）を簡易に扱えるようにする
* [ngrx-set](https://github.com/parloti/ngrx-set) - 非同期リクエストのアクションを作成し、成功、失敗、中止のいずれかを扱うことを簡易化する
* [easy-ngrx-distinct-selector](https://github.com/NGneers/easy-ngrx-distinct-selector) - 引数と結果値に対して同等の関数を提供する、簡単に `@ngrx/store` セレクタを作成できる関数を提供
* [ngrx-store-wrapper](https://github.com/himanshuarora111/ngrx-store-wrapper) - AngularでNgRxの状態管理を行うライブラリで、セッションとローカルストレージを内蔵しており、手動のアクションやリダクタは不要
* [ngx-rehydrate](https://github.com/solidexpert-ltd/ngx-rehydrate) - Angular SSRアプリケーション向けのNgRx状態再読み込みライブラリ
* [ngrx-offline](https://github.com/poodlelab/ngrx-offline) - NgRxを使用するAngularアプリケーションで、持続的、最適化された、オフライン変更を処理する
* [ngrx-graph](https://github.com/ammarnajjar/ngrx-graph) - JSONおよびDOT/SVG依存関係図を生成するCLIスキャナー

### NGXS <a id="ngxs"></a>

* [Official website](https://www.ngxs.io/)
* [Official GitHub repository](https://github.com/ngxs/store) - NGXSは、最小限のボイラープレートとメンテナンスで状態管理を簡易化する
* [action-lifecycle-hooks](https://github.com/ngxs-labs/action-lifecycle-hooks) - アクションの結果（成功またはエラー）に基づいてコードをトリガーするのを簡単にする—手動のアクション接続を必要としない
* [actions-executing](https://github.com/ngxs-labs/actions-executing) - このプラグインにより、アクションが実行中かどうかを簡単に確認でき、UI要素やコードの制御フローを制御できる
* [emitter](https://github.com/ngxs-labs/emitter) - アクションに依存しない新しいパターンを提供し、アクションから自由に感じられるようになる
* [firestore-plugin](https://github.com/ngxs-labs/firestore-plugin) - NGXS用のFirestoreプラグイン
* [ngxs-postmessage-plugin](https://github.com/nelsongraa8/ngxs-postmessage-plugin) - ウィンドウ間またはマイクロフロントエンド間の状態同期を `postMessage` で実現する NGXS プラグイン．
* [ngxs-synchronizers](https://github.com/lVlyke/ngxs-synchronizers) - NGXSベースのアプリケーションの状態を外部データソースと同期するのを簡易化する

### その他の状態管理ライブラリ <a id="other-state-libraries"></a>

* [ng-simple-state](https://github.com/nigrosimone/ng-simple-state) - AngularにおけるサービスとRxJSのみで構成されたシンプルな状態管理
* [exome](https://github.com/Marcisbee/exome) - 深くネストされた状態に対応するプロキシベースのシンプルな状態マネージャー。Angular SignalsとRxJSと互換性あり。
* [TanStack Query](https://github.com/TanStack/query) - ウェブ向けの強力な非同期状態管理、サーバー状態ユーティリティ、データ取得
* [state-adapt](https://github.com/state-adapt/state-adapt) - 宣言的かつインクリメンタルな状態管理ライブラリ
* [mini-rx-store](https://github.com/spierala/mini-rx-store) - 反応型状態管理プラットフォーム
* [ngx-collection](https://github.com/e-oz/ngx-collection) - Angular用のコレクション状態管理サービス
* [xstate](https://github.com/statelyai/xstate) - 複雑なアプリロジック向けアクターベースの状態管理とオーケストレーション
* [signalstory](https://github.com/zuriscript/signalstory) - Angular Signalsに基づいた状態管理ライブラリ。シンプルなリポジトリ、解離されたコマンド、副作用、イベント駆動アーキテクチャによるストア間通信をサポート。
* [ngx-sherlock](https://github.com/politie/ngx-sherlock) - [@politie/sherlock](https://github.com/politie/sherlock) ディストリビュートされた反応型状態管理ライブラリと連携する Angular ツールキットライブラリ．
* [tansu](https://github.com/AmadeusITGroup/tansu) - 軽量で、プッシュベースの状態管理ライブラリ。 [the Angular ecosystem](https://amadeusitgroup.github.io/tansu/#md:tansu-works-well-with-the-angular-ecosystem) とよく働き合う。
* [@tethys/store](https://github.com/worktile/store) - Angular向けのミニサイズながらも強力な状態管理ライブラリ
* [ngx-crud](https://github.com/henryruhs/ngx-crud) - AngularにおけるCRUDサービス。中断、キャッシュ、観察を簡単に実現。
* [@ng-state/store](https://github.com/ng-state/store) - NgRxにインスパイアされたAngularアプリケーション向け、RxJSとImmer（またはImmutableJs）を活用したネスト状態管理
* [ng-simple-state-management](https://github.com/LionMarc/ng-simple-state-management) - Angularアプリケーション向けのシンプルな状態管理実装
* [ngx-statewise](https://github.com/Pierre-MarieMarchio/ngx-statewise) - NgRxまたはNGXSへのシンプルな代替としての状態管理ライブラリ
* [signaltree](https://github.com/JBorgia/signaltree) - Angularアプリケーション向けの強力で型安全かつモジュラーなシグナルベース状態管理ソリューション
* [ngx-simple-signal-store](https://github.com/adamcsk1/ngx-simple-signal-store) - 読み取り専用インターフェースを持つシグナルストアのシンプルな作成方法
* [angulator](https://github.com/angulator-dev/angulator) - 軽量な Angular [mediator](https://refactoring.guru/design-patterns/mediator) ライブラリで、アプリケーションのさまざまな部分間の通信を、リクエスト/レスポンスおよび通知/ハンドラーパターンで簡易化する。
* [ngx-query](https://github.com/CoreSyncHub/ngx-query) - バックエンドとUI間のサーバー状態、キャッシュ、同期を管理する軽量な可観測ベースのクエリライブラリ
* [@tanstack/angular-db](https://github.com/TanStack/db/tree/main/packages/angular-db) - TanStack DB用のAngularフック。反応型クライアントストアにより、バックエンドに依存しないリアルタイムデータ層を活用した高速かつ同期駆動アプリケーションの構築を可能にする。
* [usm](https://github.com/unadlib/usm) - Angularと互換性のあるモジュラー状態管理ライブラリ
* [ngx-mxstore](https://github.com/MaxxtonGroup/ngx-mxstore) - 論理を純粋かつテスト可能なメソッドに移し、コンポーネントをデコレータでストアに接続することで、状態管理を簡略化。
* [ngx-stashr](https://github.com/nulzo/ngx-stashr) - Angular 21向けの軽量なシグナル駆動状態管理ライブラリで、Reactの [Zustand](https://github.com/pmndrs/zustand) をインスピレーションとしている。
* [ngx-event-bus-lib](https://github.com/orelnatan/ngx-event-bus-lib) - アプリケーションのどこかで強制型タイプのイベントをブロードキャストし、宣言的に反応できるようにする — サービス、DI、プロバイダー、RxJS、シグナル、または緊密な結合なし。
* [rs-x](https://github.com/robert-sanders-software-ontwikkeling/rs-x) - 反応型エンジンで、同期と非同期データを1つの透過的なモデルに統合し、Angularにおける細かい自動変更検出を実現。非同期処理を手動で行わずに、Angularで高精度な変更検出を提供。
* [stateloom](https://github.com/sujeet-pro/stateloom) - 信号駆動型の反応性コアを備えたユニバーサルなステートマネジメントSDK。Store、Atom、ProxyなどのパラダイムアダプターやReact、Angularなどへのフレームワークアダプターを備えている。
* [ngx-state-crafter](https://github.com/irvrodflo/ngx-state-crafter) - Angular向けに軽量で、信号駆動型のステートライブラリ。シンプルで、ボイラープレートを一切必要としないAPIを提供。
* [coaction](https://github.com/coactionjs/coaction) - 高パフォーマンスかつマルチスレッドを実現するウェブアプリケーション向けの効率的で柔軟なステートマネジメントライブラリ。
* [flurryx](https://github.com/fmflurry/flurryx) - RxJSストリームを構造化されたキャッシュ対応ストアに変換する、信号中心の反応型ステートツールキット。
* [ngStato](https://github.com/becher/ngStato) - Angular向けに、RxJSではなくasync/awaitを使用したステートマネジン。
* [ng-eagleeye.js](https://github.com/webKrafters/ng-eagleeye.js) - フレームワークに依存しない、ネイティブJavaScriptの不変ステートマネージャー。変更ストリームを備え、どこでもデプロイ可能。
* [ngx-deep-signals](https://github.com/simplesoftsoul/ngx-deep-signals) - 深層反応型で、ゼロボイラープレートのネストステート。任意のオブジェクトを信号グラフに変換可能。呼び出し、セッター、ボイラープレートなし。
* [editate](https://github.com/inokawa/editate) - 実験的で型安全かつフレームワークに依存しない、小型（5kB+）のcontenteditableステートマネージャー。
* [sdux-vault](https://github.com/sdux-vault/vault) - フレームワークに依存しない、決定論的なステートマネジメントシステム。
* [ngx-tosijs](https://github.com/tonioloewald/ngx-tosijs) - 驚くほどシンプルなAngular向けステートマネジメント。そしてAngularから離脱するための選択肢。
* [ngx-zero](https://github.com/ivan-anchev/ngx-zero) - シグナルを優先し、ゾーンなし対応可能な Angular バインディング。 [Rocicorp Zero](https://zero.rocicorp.dev/)、一般用途の同期解決策をサポート。
* [ng-craft](https://github.com/ng-angular-stack/ng-craft) - 信号ベースのAngularツールキット。ステート、非同期処理、サービス、フォーム、依存注入、ルートを明示的な依存関係と強力なTypeScript推論でモデル化。

## テスト <a id="testing"></a>

### E2E <a id="e2e"></a>

* [Cypress](https://www.cypress.io/) - Angular向けのエンドツーエンドおよびコンポーネントテスト。
* [cypress-harness](https://github.com/jscutlery/devkit/tree/main/packages/cypress-harness) - このライブラリは、コンポーネントテストハーネスにCypressのサポートを提供。
* [cypress-angular-commands](https://github.com/MohamedSci/cypress-angular-commands) - 現代的なAngularエンタープライズおよびERPアプリケーション向けに、再利用可能なCypressカスタムコマンドのコレクション。
* [lib-e2e-cypress-for-dummys](https://github.com/GonzaloCarmenado/lib-e2e-cypress-for-dummys) - ユーザーに親しみやすいエンドツーエンドテストソリューション。
* [testcafe](https://testcafe.io/) - Node.js向けの次世代ブラウザおよびモバイル自動化テストフレームワーク。
* [webdriverio](https://github.com/webdriverio/webdriverio) - Playwrightのe2eテストをAngularワークスペースで実行するためのツール。
* [Puppeteer Angular Schematic](https://pptr.dev/guides/ng-schematics) - Angularプロジェクトへ[Puppeteerベース](https://github.com/puppeteer/puppeteer)のE2Eテストを追加する。
* [ngx-playwright](https://github.com/bgotink/ngx-playwright) - Angular向けのSchematicsパッケージで、プロダクション用のPlaywright E2Eテストアーキテクチャの自動設定を実現。
* [ngx-playwright-schematics](https://github.com/raknjarasoa/ngx-playwright-schematics) - Angularのスケマティクスパッケージで、生産用のPlaywright E2Eテストアーキテクチャの設定を自動化します。
* [playwright-ng-schematics](https://github.com/jfgreffier/playwright-ng-schematics) - AngularプロジェクトにPlaywright Testを追加します
* [playwright-coverage](https://github.com/bgotink/playwright-coverage) - v8のカバレッジを使用してPlaywrightテストのカバレッジを報告します。インストルメンテーションを必要としません
* [Cypress to Playwright](https://www.cy2pw.com/) - CypressからPlaywrightにテストセットを移行するのに役立つリソースのコレクション
* [Playwright Chrome Recorder](https://chromewebstore.google.com/detail/playwright-chrome-recorde/bfnbgoehgplaehdceponclakmhlgjlpd) - ChromiumレコーダーのタブデータをPlaywrightテストにエクスポートします。これにより、現代的なPlaywrightに調整できる良いスタート地点を提供します
* [playwright-mcp](https://github.com/microsoft/playwright-mcp) - Playwrightを使用してブラウザ自動化を提供するモデルコンテキストプロトコル（MCP）サーバー
* [twd](https://github.com/BRIKEV/twd) - インブラウザテストランナーで即時フィードバック、Testing Libraryサポート、Viteの発見、および組み込みAPIモックを提供—フレームワークに依存せず、Angularで簡単に使用できます

### コンポーネント <a id="component"></a>

* [Angular Testing Library](https://testing-library.com/docs/angular-testing-library/intro/) - DOM Testing Libraryを拡張し、Angularコンポーネント向けに特化したAPIを導入します
* [@jscutlery/playwright-ct-angular](https://github.com/jscutlery/devkit/tree/main/packages/playwright-ct-angular) - Playwright Angularコンポーネントテスト
* [ngx-speculoos](https://github.com/Ninja-Squad/ngx-speculoos) - よりシンプルでクリーンなAngularユニットテスト
* [Meticulous AI](https://www.meticulous.ai/) - アプリケーションの1000以上のエッジケースをカバー—1つのテストを書くことや維持することなく。
* [Jasmine](https://jasmine.github.io/) - シンプルなJavaScriptテスト
* [docker-ng-cli-karma](https://github.com/trion-development/docker-ng-cli-karma) - ChromeでKarmaを実行できるAngular Dockerイメージ
* [Jest](https://jestjs.io/) - シンプルさに焦点を当てた魅力的なJavaScriptテストフレームワーク
* [jest-preset-angular](https://github.com/thymikee/jest-preset-angular) - Angularプロジェクト用のJest設定プリセット
* [jest-preview](https://github.com/nvh95/jest-preview) - Jestテストをデバッグ。簡単に。
* [jest-marbles](https://github.com/just-jeb/jest-marbles) - Jestでマーボールテストを行うためのヘルパーライブラリ
* [jest-codemods](https://github.com/skovhus/jest-codemods) - Jestに移行するためのCodemod
* [ts-jest](https://github.com/kulshekhar/ts-jest) - TypeScriptで書かれたプロジェクトをテストできるJestトランスフォーマー（ソースマップ対応）
* [Vitest](https://vitest.dev/) - Viteネイティブのテストフレームワーク
* [Early AI](https://www.startearly.ai/) - Earlyの自動生成・検証・検証されたユニットテストにより、時間を節約し、コードカバレッジを高め、品質を確保します。JestおよびVitestと互換です。
* [swc-angular](https://github.com/jscutlery/devkit/tree/main/packages/swc-angular) - これは、JestまたはVitestとSWC（Speedy Web Compiler）を使用するためのAngularのプリセットセットです
* [swc-angular-plugin](https://github.com/jscutlery/devkit/tree/main/packages/swc-angular-plugin) - SWC（Speedy Web-Compiler）は非常に高速なJavaScript/TypeScriptコンパイラですが、Angularをサポートしていないため、このプラグインが必要です
* [vitest-browser-angular](https://github.com/vitest-community/vitest-browser-angular) - このコミュニティパッケージは、Angularコンポーネントを [Vitest Browser Mode](https://vitest.dev/guide/browser) でレンダリングする。
* [@MRinaldi9/vitest-browser-angular](https://github.com/MRinaldi9/vitest-browser-angular) - 公式の `vitest-browser-angular` ライブラリの独立したフォークで、オリジナルプロジェクトとは共有されない隔離実装を備えている。
* [wdio-harness](https://github.com/badisi/wdio-harness) - WebdriverIOによるAngularコンポーネントテストハーネスのサポート
* [testronaut](https://github.com/testronaut/testronaut) - モックや推測を除去することで、 [Testronaut](https://testronaut.github.io/testronaut/) は開発者が出力の可視化とPlaywrightの強力なAPIを使って正確なテストを書けるようにする。

### ヘルパー <a id="helpers"></a>

* [Official Angular Material CDK Testing](https://material.angular.dev/cdk/testing/overview) - `@angular/cdk/testing` はAngularコンポーネントのテストを支援するインフラを提供する。
* [ng-mocks](https://github.com/help-me-mom/ng-mocks) - Angular用のテストライブラリで、コンポーネント、ディレクティブ、パイプ、サービスをモックし、TestBedの設定を支援します
* [ng-mocks-sandbox](https://github.com/help-me-mom/ng-mocks-sandbox) - ng-mocksを使用したAngularアプリケーションにおけるユニットテストのガイドと例を提供するリポジトリ
* [spectacular](https://github.com/ngworker/ngworker/tree/main/packages/spectacular) - Angularアプリケーションおよびライブラリ向けのテストハーネスを提供します
* [ngx-page-object-model](https://github.com/FrancescoBorzi/ngx-page-object-model) - このライブラリは、ページオブジェクトモデル（POM）を用いてAngular UIコンポーネントのテストを簡便にし、テストロジックとDOM操作を分離することで、より良い抽象化を実現します
* [ngtx](https://github.com/Centigrade/ngtx) - A**ng**ular **T**esting E**x**tensionsは、Angularコンポーネントのテストを簡単にするための小さな関数セットです
* [ngx-testing-tools](https://github.com/remscodes/ngx-testing-tools) - Angularアプリケーションのテストに高レベルのユーティリティを提供し、テストのボイラープレートを削減します
* [stryker-js](https://github.com/stryker-mutator/stryker-js) - JavaScriptおよびその他の言語向けのミュテーションテスト
* [msw](https://github.com/mswjs/msw) - ブラウザおよびNode.js向けのREST/GraphQL APIモック用のシームレスなライブラリ
* [msw-lens](https://github.com/hypertheory-labs/msw-lens) - AIが読み取れるプロジェクト状態のスナップショットを生成するツールで、モックAPI、アクティブなシナリオ、コンテキストを、手動説明なしでどのモデルも理解できます
* [shallow-render](https://github.com/getsaf/shallow-render) - 浅いレンダリングと簡単なモックにより、Angularのテストを簡単に行えます
* [ngx-testbox](https://github.com/kirill-kolomin/ngx-testbox) - Angularアプリケーション向けの包括的なテストユーティリティライブラリで、テストの作成を簡素化し、テストの信頼性を向上させます。ユニットテスト、統合テスト、E2Eテストにこのライブラリが役立ちます
* [ng-automocks](https://github.com/MillerSvt/ng-automocks) - Jestを使用して、コンポーネント、ディレクティブ、パイプ、モジュール、サービスの自動モックを生成することで、Angularのテストを簡素化し、手動のスタブを削除します
* [jest-angular-test-verifier](https://github.com/Neizan93/jest-angular-test-verifier) - Angularコンポーネント、サービス、ディレクティブ、その他ファイルタイプがテストファイルを持っているかを確認するJestレポート
* [ngx-api-mocks-interceptor](https://github.com/MaloPolese/ngx-api-mocks-interceptor) - 強力なAngular HTTPインターセプターで、APIレスポンスをモックし、動的データ生成、パスマッチング、レスポンス遅延、シミュレートされたファイル操作をサポートします
* [testing-library-queries](https://github.com/thomasmikava/testing-library-queries) - DOMクエリをスムーズに実行するための、合成可能で連鎖可能なAPI、TypeScript対応、CSSセレクタヘルパー、簡潔な構文、再利用可能なクエリロジック、フレームワークに依存しない互換性を提供します
* [ArchUnitTS](https://github.com/LukasNiessen/ArchUnitTS) - JS/TSプロジェクトでアーキテクチャルールを強制し、循環依存を検出し、コード標準を検証するツール。簡単な設定とシームレスなテストフレームワーク統合を提供します
* [qc-auto-package](https://github.com/KareemMostafa77/qc-auto-package) - Angular向けの手軽で信頼性の高いテストID — テスターが管理し、コードに依存せず
* [ng-magic-test-bed](https://github.com/peejay-solutions/ng-magic-test-bed) - Angularのテストベッドワッパーで、スペックファイルに多くの不要なコードを削除できる.
* [schmock](https://github.com/khalic-lab/schmock) - OpenAPI仕様または手作りルートから、プラグインパイプラインとフレームワークアダプタを使って呼び出し可能なモックAPIを作成できる.
* [vitest-auto-spy](https://github.com/ASDAlexey/vitest-auto-spy) - [jest-auto-spies](https://github.com/hirezio/auto-spies) のドロップイン置き換え。

## サイトテンプレート <a id="site-templates"></a>

### 無料テンプレート <a id="free-templates"></a>

* [ng-matero](https://github.com/ng-matero/ng-matero) - Angular Materialの管理ダッシュボードテンプレート.
* [coreui-free-angular-admin-template](https://github.com/coreui/coreui-free-angular-admin-template) - CoreUI Angularは、Bootstrap 5に基づく無料のAngular管理テンプレート.
* [devextreme-angular-template](https://github.com/DevExpress/devextreme-angular-template) - DevExtreme Angularコンポーネントに基づくレスポンシブアプリケーションレイアウトテンプレート.
* [QuickApp](https://github.com/emonney/QuickApp) - ASP.NET Core / Angularのスタートアッププロジェクトテンプレートで、完全なログイン、ユーザーおよびロール管理を提供。さらに、クイックアプリ開発に必要なその他のユーティリティサービスも備えている.
* [material-pro-angular-lite](https://github.com/wrappixel/material-pro-angular-lite) - MaterialPro Angular Liteは、WrapPixelから提供される高品質な無料Angular Materialテンプレート／テーマです。個人プロジェクトおよび商業プロジェクトのダウンロードと使用が可能です.
* [spike-angular-free](https://github.com/wrappixel/spike-angular-free) - Spikeは、Material Angularに基づく最も強力で包括的な無料Angular管理テンプレートです.
* [Flexy-admin-angular-lite](https://github.com/wrappixel/Flexy-admin-angular-lite) - Flexyは、Material Angularに基づく最も強力で包括的な無料Angular管理テンプレートです.
* [angular-quickstart](https://github.com/netlify-templates/angular-quickstart) - Netlifyへの迅速なデプロイを可能にする、極めてシンプルなAngularテンプレート.
* [template-angular](https://github.com/phaserjs/template-angular) - Phaser 3 TypeScriptプロジェクトテンプレートで、AngularフレームワークとViteを使用してバンドルを行う.
* [angular-ngrx-frontend](https://github.com/tarlepp/angular-ngrx-frontend) - Symfony（または類似）バックエンドに合わせたAngular NgRxを活用したフロントエンドテンプレート.
* [zen](https://github.com/ZenSoftware/zen) - Nest + Prisma + Apollo + AngularのフルスタックGraphQLスタートアップキット.
* [Colorlib](https://colorlib.com/wp/free-angular-templates/)
* [HTMLrev](https://htmlrev.com/free-angular-templates.html)
* [tailkit-starter-kit-angular](https://github.com/pixelcave/tailkit-starter-kit-angular) - `Tailkit UI` コンポーネントをプロジェクト内で即座に使用できるAngularスタートアップキット。
* [angular-tailwind](https://github.com/lannodev/angular-tailwind) - AngularとTailwind CSSを用いた管理ダッシュボードスタートアップキット.
* [angular-starter-kit](https://github.com/svierk/angular-starter-kit) - Prettier、リーダー、Git-Hooks、VS Code設定が事前設定されたAngularプロジェクトテンプレート.
* [fractal-boilerplate-lua-angular](https://github.com/FRACTAL-GAME-STUDIOS/fractal_boilerplate_lua_angular) - 基本的なAngularとLua - FiveMのブレーカー：ホットビルドとユーティリティスクリプトを備えたウェブおよびゲーム内開発用の簡易スタートアップキット.
* [angular-sample-app](https://github.com/descope-sample-apps/angular-sample-app) - [Descope](https://www.descope.com) をログイン、ユーザーダッシュボード、動的ナビゲーションで統合したサンプルAngularアプリ。
* [berry-free-angular-admin-template](https://github.com/codedthemes/berry-free-angular-admin-template) - Berryは、カスタマイズ可能で機能豊富なページを備えた無料Angular + Bootstrap 5の管理ダッシュボードです。
* [gradient-able-free-admin-template](https://github.com/codedthemes/gradient-able-free-admin-template) - Gradientable無料Bootstrap、Angular、React管理テンプレート.
* [mantis-free-angular-admin-template](https://github.com/codedthemes/mantis-free-angular-admin-template)
* [datta-able-free-angular-admin-template](https://github.com/codedthemes/datta-able-free-angular-admin-template)
* [sanity-template-angular-clean](https://github.com/sanity-io/sanity-template-angular-clean) - [Sanity](https://www.sanity.io/) からコンテンツを取得するシンプルなAngular SPA。
* [angular-templates](https://github.com/hawkgs/angular-templates) - 一般的なウェブアプリ向けのAngularテンプレートのセット.
* [LightNap](https://github.com/SharpLogic/LightNap) - `ASP.NET` Core Identity、JWT管理、管理者認証機能を備えたフルスタックSPAスタートアップキット。
* [Angspire](https://github.com/tbarracha/Angspire) - Angular + `.NET` のモノリソープテンプレートで、内蔵された認証、テーマ、スケーラブルな基礎を備え、開発を速くする。
* [keycloakify-starter-angular-vite](https://github.com/keycloakify/keycloakify-starter-angular-vite) - AngularとViteのスタートアップテンプレート（ [Keycloakify 11](https://www.keycloakify.dev/) 用）。
* [extreme-angular](https://github.com/joematthews/extreme-angular) - クリーンで維持性・アクセシビリティの高いウェブアプリ開発に必要なベストプラクティスを強制する、事前設定された開発ツールを備えたスタートアップテンプレート。
* [@wlucha/angular-starter](https://github.com/wlucha/angular-starter) - Angular 19 Starter に Storybook、Transloco、Jest、Cypress、Docker、ESLint、Material、Prettier を組み合わせたもの
* [dataclouder-template-angular](https://github.com/dataclouder-dev/dataclouder-template-angular) - Firebase 認証統合を備えた即時使用可能な Angular/Ionic テンプレート
* [signal-admin](https://github.com/codebangla/signal-admin) - Angular 20 の管理パネル（Material + Tailwind）でレスポンシブレイアウト、サイドバー、ユーザー管理、UI コンポーネントを備えたもの
* [ngXpress](https://github.com/angularcafe/ngXpress) - フルスタック Angular スターター（SSR、Zoneless、Express 5、Prisma、better-auth、Tailwind CSS 4）
* [spartan-stack-starter](https://github.com/thatsamsonkid/spartan-stack-starter) - Spartan Stack を使用した意見の一致したテンプレートプロジェクトスターター
* [jet](https://github.com/karmasakshi/jet) - 品質の高いウェブアプリを高速に構築できる Angular スターター・キット
* [free-angular-tailwind-dashboard](https://github.com/TailAdmin/free-angular-tailwind-dashboard) - 無料でオープンソースの Angular + Tailwind CSS 管理パネルで、必須の UI コンポーネントと事前作成されたページを備え、スムーズで現代的なインターフェースを実現
* [hanko-angular-express-starter](https://github.com/teamhanko/hanko-angular-express-starter) - Hanko 認証を Angular と Express に統合したスターター
* [ng-ultimate-base](https://github.com/Beszt/ng-ultimate-base) - Angular 20 テンプレート（Angular Material UI、Tailwind CSS、i18n、ESLint、Prettier、Husky、CI/CD）
* [angular-dev-enhanced](https://github.com/nelsongraa8/angular-dev-enhanced) - Vite、Vitest、ESLint、Prettier を備えた即時使用可能な Angular スターター—クリーンで現代的な開発に最適
* [angular-realworld-example-app](https://github.com/gothinkster/angular-realworld-example-app) - [RealWorld](https://github.com/gothinkster/realworld) スペックおよびAPIに従った現実世界の例（CRUD、認証、高度なパターンなど）を含むAngularソースコード。
* [angular.ng](https://github.com/desoga10/angular.ng) - Angular と Supabase を使用したオープンソースの生産性ダッシュボード
* [angluar-crm](https://github.com/minhpham-mew/angluar-crm) - コンタクト管理、取引トラッキング、分析を備えた Angular CRM テンプレート
* [ngx-admin-v20](https://github.com/sebbegamer2222/ngx-admin-v20) - この管理パネルで、現代的な Bootstrap 5 UI と SASS カスタマイズ、再利用可能なコンポーネント、スリーマテリアルテーマを楽しめます
* [nestjs-angular-starter](https://github.com/tivanov/nestjs-angular-starter) - ネストJS バックエンドと Angular フロントエンドを備えたフルスタックスターターテンプレート。認証、ユーザー管理、共通インフラパターンを含む
* [AngularTemplate](https://github.com/EmmanuelLefevre/AngularTemplate) - この Angular テンプレートは、構造化されたアーキテクチャ、ツール、テスト、CI/CD、スタイル、スケミクス、明確なルールドキュメントを備えた生産環境用プロジェクトセットアップを提供します
* [free-tailwind-admin-dashboard-template](https://github.com/Tailwind-Admin/free-tailwind-admin-dashboard-template) - 無料でオープンソースの Tailwind CSS 管理パネルテンプレート。現代的なウェブ開発者向けに構築されています
* [ngx-blog](https://github.com/pegasusheavy/ngx-blog) - 現代的な Angular ベースのブログ CMS で、テーマサポートと SEO 最適化を備えています
* [radixweb](https://radixweb.com/starter-kits/enterprise-microservices-boilerplate) - 完全に生産環境に整備されたマイクロサービスのベースラインです
* [base-angular-monorepo](https://github.com/myvictorlife/base-angular-monorepo) - スケーラブルな Angular アプリケーション開発に適した生産環境用ベースプロジェクト（Nx、NgRx、Tailwind CSS、Jest、ESLint、Prettier）
* [nx-ng-starter](https://github.com/rfprod/nx-ng-starter) - Nx、Angular、Angular Elements、Electron、Node、Nest、Firebase を使用したモノリススターター。ワークフロー自動化を備えています
* [elements-template](https://github.com/giacomo/elements-template) - Angular 21、Tailwind CSS v4、Vitest で構築されたカスタムWebコンポーネントを構築するための現代的で意見のあるスタートキット
* [realworld-angular](https://github.com/realworld-angular/realworld-angular) - Angularライブラリが実際にどのように機能するかを示すRealWorld Angular例アプリケーション
* [spartan-admin-dashboard](https://github.com/Oussemasahbeni/spartan-admin-dashboard) - Spartan UIコンポーネントとTailwind CSSで構築された、プロダクション用のAngular管理ダッシュボードテンプレート
* [elite-angular-zen](https://github.com/saiyan666-4Wk/elite-angular-zen) - 2026年Angular 17プロ管理テンプレート（クリーンでミニマムなデザイン）
* [spike-angular-pro-starter](https://github.com/juwairiyah09/spike-angular-pro-starter) - Spike Angular 2026：現代ダッシュボード向けの最高品質無料マテリアル管理テンプレート
* [appblink](https://github.com/workern/appblink-workspace) - Web、モバイル、バックエンドを1リポジトリで統合した、プロダクション用Angular＋Flutter＋Firebaseのモノリススタートキット

### 有料テンプレート <a id="paid-templates"></a>

* [Admin Mart](https://adminmart.com/templates/angular-dashboard/)
* [CozyDevKit](https://cozydevkit.com/) - Angular 21向けのインタラクティブツール、アーキテクチャパターン、クイックリファレンス、およびDevOpsサービス
* [devkitly](https://www.devkitly.io/) - 認証、請求、監査ログ、機能フラグ、SSRを備えた、プロダクション用Angular 21スタートキット
* [draftNG](https://www.draftng.xyz/) - Angular 22+向けのミニマリズムかつ高性能なプラットフォームテンプレート
* [NgStarter](https://ngstarter.com/) - Angular UIコンポーネントおよび管理テンプレート
* [Nzoni](https://nzoni.app/) - AngularでSaaSを数日で立ち上げる
* [Theme Forest](https://themeforest.net/search/angular)
* [Vortex](https://template.giacomobellazzi.com/) - AngularとJavaで構築された、ユーザー体験のスムーズさと強力なバックエンドソリューションを提供するハイパフォーマンスウェブアプリケーションテンプレート
* [Wrap Pixel](https://www.wrappixel.com/templates/category/angular-templates/)

## サードパーティ製コンポーネント <a id="third-party-components"></a>

### アニメーション <a id="animations"></a>

* [ngx-confetti-explosion](https://github.com/ChellappanRajan/ngx-confetti-explosion) - AngularでのConfetti実装
* [ngx-lottie](https://github.com/ngx-lottie/ngx-lottie) - Angular 9以降対必の、After Effectsアニメーションをレンダリングする完全カスタマイズ可能なAngularコンポーネント
* [angular-animations-explorer](https://github.com/williamjuan027/angular-animations-explorer) - Angularで実現可能なさまざまなアニメーションを紹介するリソース
* [ngx-count-animation](https://github.com/hm21/ngx-count-animation) - 数値の変化を美しくアニメーションし、一つの値から別の値へと視覚的に魅力的な遷移を実現する、数値カウンター効果のパッケージ
* [ng-auto-animate](https://github.com/ajitzero/ng-auto-animate) - FormKitの [Auto Animate](https://auto-animate.formkit.com) 用のAngularディレクティブ（ライブラリ）。
* [layout-projection](https://github.com/Char2sGu/layout-projection) - ウェブをより美しくする、レイアウトアニメーション
* [ngx-easy-view-transitions](https://github.com/DerStimmler/ngx-easy-view-transitions) - View Transitions APIの使いやすさを提供するAngularライブラリ
* [ngx-typed-writer](https://github.com/SkyZeroZx/ngx-typed-writer) - ネイティブAngular 2+のタイピングアニメーションライブラリ（Angular SSRおよびAngular Universal対応）
* [ngx-number-ticker](https://github.com/omnedia/ngx-number-ticker) - 数値カウンターをアニメーションするシンプルな数値タイッカー効果
* [ngx-word-rotation](https://github.com/omnedia/ngx-word-rotation) - Angularでワードローテーションアニメーションを実現するためのライブラリ
* [ngx-word-morph](https://github.com/omnedia/ngx-word-morph) - Angularでワードモーフィングアニメーションを実現するためのライブラリ
* [ngx-cryptic-text](https://github.com/omnedia/ngx-cryptic-text) - 暗号テキストアニメーション効果を提供するAngularライブラリ。コンポーネントは、正しい文字が現れるまでランダムに文字を切り替えてアニメーションを行う。
* [ngx-word-pullup](https://github.com/omnedia/ngx-word-pullup) - Angularでワードにスムーズなプルアップアニメーション効果を提供するライブラリ。このコンポーネントは、カスタマイズ可能な遅延で順次上に引き上げてワードを表示する。
* [ngx-typewriter](https://github.com/omnedia/ngx-typewriter) - タイピング効果を作成するための軽量かつ使いやすいライブラリ。RxJSを使用してタイピング効果を管理し、スムーズかつカスタマイズ可能なアニメーションを実現。
* [ngx-gradient-text](https://github.com/omnedia/ngx-gradient-text) - Angularでスムーズなアニメーション付きテキストグラデーションを提供するライブラリ。色の遷移をカスタマイズ可能。
* [ngx-shiny-text](https://github.com/omnedia/ngx-shiny-text) - Angularできらめき効果をもつテキストアニメーションを提供するライブラリ。
* [ngx-ripple](https://github.com/omnedia/ngx-ripple) - インタラクティブで魅力的な背景やコンテナに適用可能なカスタマイズ可能なリップル効果コンポーネント。
* [ngx-shine-border](https://github.com/omnedia/ngx-shine-border) - Angularコンポーネントに動的にカスタマイズ可能なアニメーション付きボーダー効果を提供するライブラリ。
* [ngx-border-beam](https://github.com/omnedia/ngx-border-beam) - このコンポーネントは、色、ボーダーラジアス、アニメーション期間などをカスタマイズできる光り輝くアニメーションボーダーを作成可能。
* [ngx-dotpattern](https://github.com/omnedia/ngx-dotpattern) - Angularコンポーネントにカスタマイズ可能なドットパターン背景効果を提供するライブラリ。
* [ngx-meteors](https://github.com/omnedia/ngx-meteors) - Angularコンポーネントに魅了するメテオーシューバーアニメーション効果を追加するライブラリ。
* [ngx-background-beams](https://github.com/omnedia/ngx-background-beams) - 動的にアニメーションされた背景ビームを生成するAngularコンポーネント。グレデントと動きの経路をカスタマイズ可能。
* [ngx-aurora](https://github.com/omnedia/ngx-aurora) - カスタマイズ可能なアニメーション付きオーロラ背景（グレデント効果と2つのアニメーションスタイル）を提供するAngularライブラリ。
* [ngx-particles](https://github.com/omnedia/ngx-particles) - マウスの動きに反応するインタラクティブな粒子アニメーションを提供するAngularライブラリ。カスタマイズ可能な背景を生成。
* [ngx-spotlight](https://github.com/omnedia/ngx-spotlight) - SVGのスポットライト効果を提供するAngularライブラリ。ページセクションをカスタマイズ可能な色とアニメーションで強調。
* [ngx-starry-sky](https://github.com/omnedia/ngx-starry-sky) - 美しい星空背景を生成し、オプションで流星を表示するAngularライブラリ。
* [ngx-connection-beam](https://github.com/omnedia/ngx-connection-beam) - 2つの要素間の動的アニメーション接続線を生成するAngularコンポーネント。
* [ngx-countUp](https://github.com/inorganik/ngx-countUp) - 数値をカウントアップしてアニメーションする。
* [ngx-gsap](https://github.com/marcos-velasquez/ngx-gsap) - 軽量でカスタマイズ可能なAngularアニメーションライブラリ。GSAPを用いて宣言的で使いやすい。
* [ngx-animations](https://github.com/bananalasmari/ngx-animations) - Angular向けGSAPをインスピレーションとしたアニメーションライブラリ。高パフォーマンスのディレクティブ、コンポーネント、タイムラインサービスを提供し、完全なRTL対応を実現。
* [ngx-spring](https://github.com/angular-threejs/ngx-spring) - スプリング物理を用いて、時間経過と補正曲線の代わりに自然で流れるアニメーションを作成。
* [ngx-unicode-spinners](https://github.com/neogenz/ngx-unicode-spinners) - Angular向け18のブレインベースUnicodeスピナーアニメーション。実行時依存関係なし。
* [ng-motion](https://github.com/ScriptType/ng-motion) - [motion-dom](https://github.com/motiondivision/motion) をベースにしたAngularアニメーションライブラリ。
* [ngx-digit-flow](https://github.com/ayangabryl/ngx-digit-flow) - Angular向け個別桁アニメーション。各桁には縦方向のリール（0-9）があり、数値が変更された際に新しい値へスクロール。スロットマシン／オドメーター風。
* [angular-movement](https://github.com/Andersseen/angular-movement) - 再利用可能なアニメーションディレクティブライブラリとデモ・ドキュメンテーションサイトを統合したAngular用アニメーションエコシステム。
* [ngx-transition-content](https://github.com/ciriousjoker/ngx-transition-content) - ダイアログコンテンツのスムーズな遷移を実現するAngularライブラリ。古いコンテンツをフェードアウトし、新しいサイズにアニメーションし、新しいコンテンツをフェードインする。

### カレンダー <a id="calendars"></a>

* [angular-calendar](https://github.com/mattlewis92/angular-calendar) - Angular 15以降向けの柔軟なカレンダーコンポーネント。月、週、日ビューでイベントを表示可能。
* [@pyas/connect-angular](https://www.npmjs.com/package/@pyas/connect-angular) - [Pyas Connect](https://github.com/brutforce-tech/pyas-connect) ワンダーコンポーネントのプラグインラッパーで、PyasConnectを第一クラスのAngularコンポーネントとして公開。
* [cyrus-calendar](https://github.com/mhmfofa/cyrus-calendar) - グレゴリオ、シャムシ（ジャラリ／ペルシャ）、インペリアルカレンダーをサポートする軽量かつマルチカレンダーのAngular日付選択器。
* [daypilot-lite-angular](https://www.npmjs.com/package/@daypilot/daypilot-lite-angular) - JavaScript/HTML5イベントカレンダー／スケジューラコンポーネントのAngular版。日／週／月カレンダービューを表示可能。
* [fullcalendar-angular](https://github.com/fullcalendar/fullcalendar-angular) - FullCalendarの公式Angularコンポーネのライブラリ。
* [ngx-calendario](https://github.com/roquemacia/ngx-calendario) - イベントサポートを備えたカレンダーをカスタマイズ可能に表示するAngularライブラリ。
* [ngx-calendar-view](https://github.com/charlesschaefer/ngx-calendar-view/tree/main/projects/ngx-calendar-view) - レスポンシブなAngularカレンダーコンポーネントライブラリ。日／週／月ビュー、イベントのドラッグ＆ドロップ、モバイルスワイプ対応、内蔵されたダークモードを備える。
* [ngx-calendar-widget](https://github.com/giacomo/ngx-calendar-widget) - 軽量かつカスタマイズ可能で機能豊富なカレンダーウィジェット。Angularアプリケーション内のイベント管理とスケジューリングを簡易化。
* [ngx-datepicker-calendar](https://github.com/mumair4462/ngx-datepicker-calendar) - シグナルとスタンドアローンコンポーネントを用いた高速かつアクセシブルなAngular日付選択器ライブラリ。
* [ngx-resource-scheduler](https://github.com/rmpt/ngx-resource-scheduler) - 軽量かつ柔軟なリソーススケジューラ。Angular向け。
* [ngx-strip-calendar](https://github.com/codingchefss/ngx-strip-calendar) - Angular 17以降向けのストリップカレンダーコンポーネント。
* [schedule-x](https://github.com/schedule-x/schedule-x) - マテリアルデザインイベントカレンダー。
* [timegrid-angular](https://www.npmjs.com/package/@hexaflexa/timegrid-angular) - Angularにおける[HexaFlexa](https://hexaflexa.com/) Timegridウェブコンポーネントのラッパー
* [CalendarJS](https://github.com/componade/calendarjs) - オープンソースJavaScriptカレンダーおよびスケジューリングコンポーネント。Angularプロジェクトに統合可能。
* [hss-calendar](https://github.com/HawkerSoftwares/hss-calendar) - Angular 19以降向けのプレミアム、軽量かつ完全にカスタマイズ可能なカレンダーライブラリ。
* [datelane](https://github.com/devendramilmile121/datelane) - カスタマイズ可能で依存関係のないAngularカレンダー。12ビューと複数の日付レイヤーを備える。
* [ngx-modern-calendar](https://github.com/angx-libs/ngx-modern-calendar) - Angular向け小型でテーマ設定可能かつ多言語対応のカレンダーコンポーネント

### CAPTCHA <a id="captcha"></a>

* [altcha](https://github.com/altcha-org/altcha) - GDPR、WCAG 2.2 AA、EAAに準拠した、自前ホスティング可能なCAPTCHA代替ツール。PoWメカニズムと高度なスパムフィルタを備えています
* [go-captcha-angular](https://github.com/wenlng/go-captcha-angular) - テキスト／グラフィッククリック、スライド／ドラッグ、回転といった各種モードを実装した、シンプルで使いやすく、インタラクティブかつ安全な行動確認コード
* [ng-cloudflare-turnstile](https://github.com/pangz-lab/ng-cloudflare-turnstile) - 直感的で軽量であり、Angularに簡単に統合できる[Cloudflare turnstile](https://developers.cloudflare.com/turnstile/)コンポーネント
* [ng-hcaptcha](https://github.com/leNicDev/ng-hcaptcha) - [hCaptcha](https://hcaptcha.com/)を簡単に使えるコンポーネントを提供
* [ng-recaptcha-2](https://github.com/LakhveerChahal/ng-recaptcha-2) - Angular 18版の[ng-recaptcha](https://github.com/DethAriel/ng-recaptcha)。あるいは、この[article](https://ben-5.azurewebsites.net/2024/9/5/google-recaptcha-v3-with-angular/#google_vignette)を活用して、独自のサービスを作成し、GoogleのreCAPTCHAを実装します
* [ngx-captcha-kit](https://github.com/edward124689/ngx-captcha-kit) - このキットは、CAPTCHAの実装を1つのコンポーネントとサービスで簡略化し、Angular 20以降の機能（シグナル、ゾーンレス変更検知）との互換性を確保します
* [ngx-dice-captcha](https://github.com/Easy-Cloud-in/ngx-dice-captcha) - Three.jsとCannon-esを活用した、ダイナミックな3D CAPTCHAライブラリ。ダイスベースのインタラクションとリアルな物理を備えています
* [ngx-easy-captcha](https://github.com/angx-libs/ngx-easy-captcha) - Google RecaptchaおよびCloudflare Turnstileの両方に対応した、簡単なCAPTCHA実装方法
* [ngx-numeric-captcha](https://github.com/ShreyashThorat-17/ngx-numeric-captcha) - 現代的で軽量なAngular CAPTCHAライブラリ。複数の確認チャレンジを提供しています
* [ngx-turnstile](https://github.com/verto-health/ngx-turnstile) - Angular向けCloudflare Turnstile
* [recaptcha-angular](https://github.com/Souhailmakni/recaptcha-angular) - Google reCAPTCHA v2（チェックボックス）およびv3（スコアベース）に対応し、完全なTypeScriptサポート、スタンドアローンAPI、および`ControlValueAccessor`統合を備えたAngularコンポーネント
* [trustcaptcha-angular](https://www.npmjs.com/package/@trustcomponent/trustcaptcha-angular) - このライブラリは、あなたがAngularのフロントエンドアプリケーションに[integrate](https://docs.trustcaptcha.com/en/frontend/integration?frontend=angular) [Trustcaptcha](https://www.trustcaptcha.com/en)を統合することを支援します
* [yandex-smart-captcha](https://github.com/ngx-rock/yandex-smart-captcha) - 標準/非表示キャプチャ、反応型フォーム、現代的なシグナル/エフェクトに対応したAngularによる[Yandex SmartCaptcha](https://yandex.cloud/en/services/smartcaptcha)統合用のライブラリ

### カルーセル <a id="carousels"></a>

* [@daelmaak/ngx-gallery](https://github.com/daelmaak/ngx-gallery) - Angular 8以降向け、小型でパフォーマンスに優れ、レスポンシブかつ依存関係なし、使いやすいギャラリー
* [@MurhafSousli/ngx-gallery](https://github.com/MurhafSousli/ngx-gallery/tree/release/13.0.0) - ウェブおよびモバイルデバイス向けに美しい画像ギャラリーの作成プロセスを簡略化します
* [@vinlos/ngx-gallery](https://github.com/vinlos/ngx-gallery) - Angular向けシンプルなネイティブギャラリーコンポーネント
* [ngu-carousel](https://github.com/uiuniversal/ngu-carousel) - Angular Universalカーソル
* [ngx-slider](https://github.com/angular-slider/ngx-slider) - Angularベースの、モバイル対応のスライダーコンポーネント（[angularjs-slider](https://github.com/angular-slider/angularjs-slider)に基づく）
* [ngx-slick-carousel](https://github.com/leo6104/ngx-slick-carousel) - Angular 17以降向けのslickプラグインのラッパー
* [ngx-owl-carousel-o](https://github.com/vitalii-andriiovskyi/ngx-owl-carousel-o) - Angular >=6向けの`owl-carousel`
* [angular2-image-gallery](https://github.com/BenjaminBrandmeier/angular2-image-gallery) - Angular 17+、Node.js、GraphicsMagickを用いた画像ギャラリー
* [egjs-flicking](https://naver.github.io/egjs-flicking/docs/quick-start) - Flicking Angularのクイックスタート
* [ngx-drag-scroll](https://github.com/bfwg/ngx-drag-scroll) - 軽量でレスポンシブなAngularカーソルライブラリ
* [ngx-darkbox-gallery-library](https://github.com/failed-successfully/ngx-darkbox-gallery-library) - Ivyエンジン（Angular 15以降）を用いた、高度にカスタマイズ可能なライトボックステーマのギャラリーライブラリ
* [ngx-stories](https://github.com/Gauravdarkslayer/ngx-stories) - Instagram風ストーリーを表示するAngularコンポーネンツ
* [carousel-library](https://github.com/GreenFlag31/carousel-library) - 豊富な機能を備え、シンプルかつパフォーマンスの高いカーソルコンポーネントを提供する、多様なAngularライブラリ
* [ngx-simple-gallery](https://github.com/zolcsi/ngx-simple-gallery) - Angular 18向け軽量ギャラリーライブラリ。すべての画像をスムーズなサムネイルとして表示し、クリックまたはタップでフルサイズに拡大します
* [embla-carousel-angular](https://github.com/donaldxdonald/embla-carousel-angular) - Angularにおける[Embla Carousel](https://github.com/davidjerleke/embla-carousel)のラッパー
* [ngx-cdk-lightbox](https://github.com/miskith/ngx-cdk-lightbox/tree/master/projects/ngx-cdk-lightbox) - Angularで画像ギャラリーをLightbox機能付きでレンダリングするためのカスタマイズ可能なCDKベースのソリューション
* [rm-image-slider](https://github.com/malikrajat/rm-image-slider) - YouTubeやMP4をサポートする、スタンドアローンのAngular画像スライダー（Lightbox、遅延読み込み、動画サポート）
* [ngx-carousel-modern](https://github.com/Aizaz-ul-haq/ngx-carousel-modern) - Angular 16以降向けの現代的かつカスタマイズ可能なカーソルコンポーネント（スタンドアローンおよびNgModuleベースアプリケーションに対応）
* [fslightbox-angular](https://github.com/banthagroup/fslightbox-angular) - [Fullscreen Lightbox](https://fslightbox.com/)のAngular版
* [whirli-ng](https://github.com/babbage42/whirli-ng) - ドラッグ、ループ、仮想スライド、コンテンツ投影、サムネイル、SSR対応のレスポンシブレイアウト、外部コントロール、豊富なイベントAPIを備えたAngularカーソル

### チャート <a id="charts"></a>

* [@cubejs-client/ngx](https://www.npmjs.com/package/@cubejs-client/ngx) - [@cubejs-client/core](https://www.npmjs.com/package/@cubejs-client/core)とともに、AngularにCube.jsを導入できます [integrate](https://cube.dev/docs/product/apis-integrations/javascript-sdk/angular)
* [ngx-charts](https://github.com/swimlane/ngx-charts) - Angular2以降向けの宣言型チャートフレームワーク！
* [ag-charts](https://github.com/ag-grid/ag-charts/tree/latest/packages/ag-charts-angular) - 完全に機能ありで高度にカスタマイズ可能なJavaScriptチャートライブラリ
* [amcharts5](https://github.com/amcharts/amcharts5) - JavaScriptおよびTypeScriptアプリ向けのチャートライブラリ。[Angular integration guide](https://www.amcharts.com/docs/v5/getting-started/integrations/angular/)を確認してください
* [angular-chrts](https://github.com/dennisadriaans/angular-chrts) - 現代的なAngularアプリケーション向けの高性能で開発者フレンドリーなデータ可視化ライブラリ
* [angular-gantt](https://github.com/ErlonRr/angular-gantt) - Zoneless、SignalベースのAngular 20以降のGanttチャート
* [angular-google-charts](https://github.com/FERNman/angular-google-charts) - Google ChartsライブラリをAngularで書かれたラッパー
* [carbon-charts](https://github.com/carbon-design-system/carbon-charts/tree/master/packages/angular) - Carbon Charts Angularは、vanilla JavaScriptの@carbon/chartsコンポーネントライブラリを薄いAngularラッパーとして提供
* [Foblex Flow](https://github.com/Foblex/f-flow) - ノードエディタ、ワークフロービルダー、インタラクティブなダイアグラム向けのAngularネイティブライブラリ：ドラッグ＆ドロップノードと接続、ミニマップ、自動レイアウト、仮想化、キーボードアクセシビリティ層
* [highcharts-angular](https://github.com/highcharts/highcharts-angular) - Angular向けの公式最小限の[Highcharts](https://www.highcharts.com/)統合
* [michi-vz-mono](https://github.com/beany-vu/michi-vz-mono) - 1つのエンジンが17のインタラクティブかつアクセシブルなチャートタイプを駆動し、Angularおよびそれ以外にも完全にサポートされ、レポート、ダッシュボード、AI機能向けにLLM対応データを発行
* [ng-apexcharts](https://github.com/apexcharts/ng-apexcharts) - ApexChartsをAngularでラップしたインタラクティブ可視化の構築用ライブラリ
* [ng-chartist](https://github.com/willsoto/ng-chartist) - Angular用の[Chartist.js](https://github.com/chartist-js/chartist)コンポーネント
* [ng-charts](https://github.com/AleksanderBodurri/ng-charts) - `recharts`のReangular版
* [ng-diagram](https://github.com/synergycodes/ng-diagram) - インタラクティブでカスタマイズ可能なダイアグラム、ノードベースエディタ、可視化ワークフローを構築するためのAngularライブラリ
* [ng-draw-flow](https://github.com/taiga-family/ng-draw-flow) - データをノードとして表示するインターフェースを作成するためのライブラリ
* [ng-flowchart](https://github.com/joel-wenzel/ng-flowchart) - 軽量なAngularライブラリでドラッグ＆ドロップフローチャートを構築
* [ngx-circle-chart](https://github.com/angx-libs/ngx-circle-chart) - Angular向けの美しい自動スケーリング円（ドーナツ）プログレスチャート
* [ngx-echarts](https://github.com/xieziyu/ngx-echarts) - Angular向けの[Apache ECharts](https://github.com/apache/incubator-echarts)ディレクティブ
* [ngx-flexmonster](https://github.com/flexmonster/ngx-flexmonster) - ウェブレポートおよびデータ可視化向けの強力で完全にカスタマイズ可能なJavaScriptコンポーネント
* [ngx-gantt](https://github.com/worktile/ngx-gantt) - 現代的で強力なAngular向けGanttチャートコンポーネのためのコンポーネント
* [ngx-graph](https://github.com/swimlane/ngx-graph) - Angular向けのグラフ可視化ライブラリ
* [ngx-interactive-org-chart](https://github.com/zeyadelshaf3y/ngx-interactive-org-chart) - 現代的なAngular組織図コンポーネントで、インタラクティブなズームとパン機能を備えています。
* [ngx-recharts](https://github.com/wook95/ngx-recharts) - [Recharts](https://recharts.github.io/)と同じAPIを使用して、Angularコンポーネントでコンポジブルなチャートを構築
* [ngx-simple-charts](https://github.com/Angular2Guy/ngx-simple-charts) - D3ベースの線、棒、ドーナツ、日付/タイムラインチャートに対応したAngular 17以降のライブラリ。複数のエントリポイントを提供し、トークン処理用のカスタマイズ可能なサービスも備えています。
* [org-chart](https://github.com/bumbeishvili/org-chart) - 高度にカスタマイズ可能な組織図。Angular、React、Vueへの統合が可能です。
* [pioneer-charts](https://github.com/PioneerCode/pioneer-charts) - D3.jsを使用してレスポンシブかつカスタマイズ可能なチャートを作成できるAngularライブラリ。棒、線、ピースなどに対応しています。
* [sequential-workflow-designer](https://github.com/nocode-js/sequential-workflow-designer) - フローベースのプログラミングアプリケーションやワークフロー自動化のためのカスタマイズ可能なノコードコンポーネント。外部依存関係なし。
* [schedula-core-angular](https://github.com/RGabGH/schedula-core/tree/main/integrations/packages/angular) - 公式なAngularラッパー（[SchedulaCore](https://www.npmjs.com/package/schedula-core)）—高速かつ軽量のGanttチャートおよびリソーススケジューラコンポーネント
* [systelab-charts](https://github.com/systelab/systelab-charts) - Systelab Angular Chartサービス。
* [unovis](https://github.com/f5/unovis) - React、Angular、Svelte、Vue、およびvanilla TypeScriptまたはJavaScript向けのモジュラーデータ可視化フレームワーク。

### Cookie <a id="cookies"></a>

* [ngx-cookie-service](https://github.com/stevermeister/ngx-cookie-service) - Angular向けのクッキー用サービス。元々は[ng2-cookies](https://github.com/BCJTI/ng2-cookies)ライブラリに基づいています
* [cookieconsent](https://github.com/orestbida/cookieconsent) - シンプルなクロスブラウザのCookie同意プラグイン。vanilla JSで構成されており、[Angular](https://cookieconsent.orestbida.com/essential/getting-started.html#angular)に追加可能。
* [ngx-cookie-ssr](https://github.com/Ask-786/ngx-cookie-ssr) - Angular 19アプリケーション向けのシンプルなクッキーサービス。ngx-cookie-serviceを参考にしています。
* [ngx-gdpr-cookie-consent](https://github.com/KoblerS/ngx-gdpr-cookie-consent) - 美しいクッキーリンクライブラリ。使いやすいです。
* [smallest-cookie-banner](https://github.com/DreadfulCode/smallest-cookie-banner) - 最小限のフレームワークに依存しないクッキーリンクバナー。
* [ngrithms-cookie-consent](https://github.com/aboudbadra/ngrithms-cookie-consent) - 現代的なAngularのCookie同意機能 — スタンドアローンコンポーネント、シグナルベースの状態、`provideCookieConsent()`での機能設定、SSR対応、ゼロランタイム依存。

### CSV <a id="csv"></a>

* [impler](https://github.com/implerhq/impler.io) - [Angular package](https://www.npmjs.com/package/@impler/angular)を使用してCSV Excelインポート機能をアプリに埋め込みます。
* [ng2csv](https://github.com/rars/ng2csv) - AngularでデータをCSVファイルに保存するためのサービス。
* [ngx-export-as](https://github.com/wnabil/ngx-export-as) - Angular 2+ / Ionic 2+ のHTML/テーブ-ル要素をJSON、XML、PNG、CSV、TXT、MS-ワード、Ms-エクセル、PDFにエクスポートできる。
* [rm-ng-export-to-csv](https://github.com/malikrajat/rm-ng-export-to-csv) - 軽量かつカスタマイズ可能なAngularライブラリ。JSONデータをCSVファイルにエクスポートし、自動ダウンロードをサポート。チャート、テーブル、レポート、ダッシュボードなどに最適です。

### データグリッド <a id="data-grids"></a>

* [ag-grid](https://www.ag-grid.com/) - 企業向けアプリケーション開発に最適なJavaScriptデータテーブル。React、Angular、Vue、および純粋JavaScriptに対応。
* [ignite-ui-angular's grid](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid) - `Ignite UI`内のデータグリッド、ツリーグリッド、階層グリッドは、Excelスタイルのフィルタ、リアルタイムデータ、ソート、ドラッグ可能な行、その他ツールバーを提供。
* [sheetjs](https://docs.sheetjs.com/docs/demos/frontend/angular) - スプレッドシートからのデータ読み書きを行うJavaScriptライブラリ。
* [active-table](https://github.com/OvidijusParsiunas/active-table) - 編集可能なデータ体験を提供するフレームワークに依存しないテーブルコンポーネント。
* [jsgrids](https://github.com/statico/jsgrids) - JavaScriptデータグリッドおよびスプレッドシートライブラリを比較するツール。このリポジトリからさらに多くのライブラリを検索できます。
* [handsontable](https://handsontable.com/docs/javascript-data-grid/angular-installation/) - アプリケーションにスプレッドシートのよく知られた見た目と体験をもたらす人気のあるJavaScriptデータグリッドコンポーネント。
* [slickgrid-universal](https://github.com/ghiscoding/slickgrid-universal) - すべてのエディタ、フィルタ、拡張機能、サービスが含まれるフレームワークに依存しない [SlickGrid](https://github.com/6pac/SlickGrid)の使用に関するモノリスリポジトリ。
* [revogrid](https://github.com/revolist/revogrid) - 強力な仮想データグリッドSmartsheet。高度なカスタマイズが可能。Excelの優れた機能を備え、驚異的なパフォーマンスを実現。
* [ZingGrid](https://github.com/ZingGrid/zinggrid) - JavaScriptのウェブコンポーネントライブラリで、開発者はウェブアプリケーションにインタラクティブなデータテーブルを埋め込むことができます。このライブラリは [Angular](https://www.zinggrid.com/docs/integrations/js-frameworks-&-libs/angular)および多くのフレームワークで使用可能です。
* [ngx-panemu-table](https://github.com/panemu/ngx-panemu-table) - Angular用のテーブルコンポーネント。使いやすさを設計しており、ほとんどがTypeScriptファイルに記述され、HTMLファイルは非常にシンプルな `panemu-table`タグを持つだけで済みます。
* [@guiexpert/angular-table](https://github.com/guiexperttable/angular-19-table) - フレームワークに依存しないテーブルライブラリで、主要フレームワーク（含む [Angular](https://gui.expert/getstarted/angular/)）とのシームレスな統合を実現。
* [ngx-tabulator-tables](https://github.com/knackstedt/ngx-tabulator-tables) - [Tabulator](https://tabulator.info/)テーブルライブラリのAngularラッパー。
* [activereportsjs/angular-reporting-tool](https://developer.mescius.com/activereportsjs/angular-reporting-tool) - データ可視化およびレポート用のAngularコンポーネント。レポートを [ActiveReportsJS](https://developer.mescius.com/activereportsjs)で埋め込みます。
* [mat-datatable](https://github.com/BePo65/mat-datatable) - Angular Materialを使用したシンプルなデータテーブル。仮想スクロール機能を備えています。
* [@Trixwell/data-grid](https://github.com/Trixwell/data-grid) - Angularによるデータテーブルコンポーネント。フィルタ、ソート、ページネーション、CSVエクスポート、サブグリッド、Material統合機能を備えている。
* [ngx-multi-sort-table](https://github.com/Maxl94/ngx-multi-sort-table) - このライブラリは、Angular Materialデザインに基づく複数ソート可能なテーブルを提供し、サーバー側で読み込み・ソートされたデータに焦点を当てている。
* [angular2-smart-table](https://github.com/dj-fiorex/angular2-smart-table) - Angular Smart Data Tableコンポーネント。
* [ngx-editable-material-table](https://github.com/valentinstn/ngx-editable-material-table) - Angular Materialに基づく編集可能なテーブル。Angular本体にネイティブに対応している。
* [ngx-flamegraph](https://github.com/mgechev/ngx-flamegraph) - Angularで書かれたスタックトレース可視化用のフレイムグラフ。
* [ng-virtual-grid](https://github.com/DjonnyX/ng-virtual-grid) - 極めて大きなグリッドにおいても最高のパフォーマンスを実現。
* [ngx-simple-datatables](https://github.com/rinturaj/ngx-simple-datatables) - 軽量かつ高パフォーマンスのAngularデータテーブルコンポーネンツ。バーチャルスクロール、列のフリーズ、カスタマイズ可能なテンプレートなどの機能を備えている。
* [ngx-list-manager](https://github.com/RzoDev/ngx-list-manager) - Angular用のリスト管理を効率的に行うためのサービスツール。
* [cerious-grid](https://github.com/ryoucerious/cerious-widgets) - 開発者がコントロール、柔軟性、パフォーマンスを求める場合に、非常に強力なAngularグリッド。
* [ngxsmk-datatable](https://github.com/toozuuu/ngxsmk-datatable) - Angular 17以降の現代的なデータテーブル。パフォーマンス、カスタマイズ、開発者体験に焦点を当てている。
* [ngx-column-filter](https://github.com/kakarotx10/ngx-column-filter) - 複数のフィールドタイプに対応し、高度なフィルタルール、カスタマイズ可能なマッチモードをサポートする強力で再利用可能なAngular列フィルタコンポーネント。
* [@witqq/spreadsheet](https://github.com/witqq/spreadsheet) - Canvasベースのスプレッドシート／データグリッドエンジン。依存関係ゼロ、10万行以上を60fpsで表示、完全な編集、リアルタイムコラボレーション。詳しくは [website](https://spreadsheet.witqq.dev/)を確認。
* [Jspreadsheet CE](https://github.com/jspreadsheet/ce) - オープンソースJavaScriptのスプレッドシートおよびデータグリッドコンポーネント。Angularアプリケーション内でAngularエレメントをラップまたは消費することで使用可能。
* [TabularJS](https://github.com/jspreadsheet/tabularjs) - Angularにおける高度なテーブル機能を提供する軽量JavaScriptテーブルおよびデータグリッドライブラリ。
* [uni-table](https://github.com/Unify-India/uni-table) - シグナルに基づくAngularデータグリッド。遅延ゼロのパフォーマンスを実現し、高度なサーバー側機能と簡潔な設定APIを組み合わせている。
* [ogrid](https://github.com/alaarab/ogrid) - 軽量かつマルチフレームワーク対応のデータグリッド。エンタープライズ機能を備え、エンタープライズコストゼロ。
* [angular-datatables.net](https://github.com/Vinccool96/angular-datatables.net) - アンガルプラス [DataTables](https://datatables.net/)。
* [uiGrid](https://github.com/orneryd/uiGrid) - オープンソース、マルチプラットフォームデータグリッド。オリジナルの [ui‑grid](https://github.com/angular-ui/ui-grid)を再構築し、同じAPIと現代的なAngularシグナルを採用。Angular、ウェブコンポーネント、React、Rustに対応。
* [ngx-datawindow](https://github.com/sugitter/ngx-datawindow) - クラシックなDataWindowを現代的に刷新したテーブルコンポーネント。ゼロ設定のCRUD、計算列、マルチバッファーステート、オフライン同期、細かい変更追跡を提供。
* [simple-table](https://github.com/petera2c/simple-table) - フレームワークに依存しないデータグリッドおよびテーブルコンポーネント。現代的でスケーラブルなアプリケーションの構築に最適。
* [toolbox](https://github.com/OysteinAmundsen/toolbox) - データ量が多いアプリケーション向けの高パフォーマンス、フレームワークに依存しないウェブコンポーネント。
* [gp-grid](https://github.com/GioPat/gp-grid) - モジュラリティを備えたデータグリッドライブラリ。コアロジックとフレームワーク統合を明確に分離し、数百万行のデータを効率的に処理できる。
* [ngx-powerful-tree](https://github.com/raknjarasoa/ngx-powerful-tree) - HTML5ドラッグアンドドロップ、高速検索、ロックされたサブツリー、ファイルセレクトモードを備えたバーチャルツリー。10万行以上でのスムーズなパフォーマンスを実現するために `@angular/cdk/scrolling`をベースに構築。
* [agrid](https://github.com/thkl/agrid) - スプレッドシートのような編集、バーチャルスクロール、フィルタ、ソート、グループ化、クリップボードワークフロー、行操作、ページネーション、カスタムセルレンダラーを備えたAngularデータグリッド。
* [ngx-datatables-net](https://github.com/ascentspark/ngx-datatables-net) - Angular 20以降対応の `DataTables.net`のAngularラッパー。
* [angular-advanced-table](https://github.com/VaggelisKa/angular-advanced-table) - Angularのモノリスリポジトリで、シグナルを第一に設計したアクセシブルデータテーブルライブラリ `ng-advanced-table`およびそのドキュメンテーションサイトを提供。
* [angular-tree](https://github.com/h-k-dev/angular-tree) - 高パフォーマンス、ゾーンレス、シグナル駆動、完全バーチャル化されたヘッドレスツリーコンポーネント。その唯一のランタイム依存は `@angular/cdk`。
* [@some-angular-utils/table](https://github.com/some-angular-utils/table) - リモートまたはローカルデータ、ページネーション、フィルタ、レスポンシブレイアウト、完全なテンプレート制御 — すべて1つの宣言型 `<sau-table>`要素に統合。
* [DataGrid](https://github.com/Laczynski/DataGrid) - NET および Angular 用のサーバー駆動のページネーション、フィルタリング、ソート — スタンドアローンかつ再利用可能なライブラリ。
* [fastgrid-angular](https://github.com/coqsoft/fastgrid-frameworks/tree/main/fastgrid-angular) - 公式のAngularラッパー [FastGrid](https://www.treegrid.com/FDoc/FastGridAngular.html)およびCOQsoftのFastSheet。

### 日付 <a id="dates"></a>

* [ngx-date-fns](https://github.com/joanllenas/ngx-date-fns) - Angular向けの[Date-fns](https://date-fns.org/)パイプ。
* [ngx-mat-timepicker](https://github.com/tonysamperi/ngx-mat-timepicker) - 本物のマテリアルタイムピッカー。
* [mat-datetimepicker](https://github.com/kuhnroyal/mat-datetimepicker) - `@angular/material` 用のデイタイムピッカー
* [ngx-multiple-dates](https://github.com/lekhmanrus/ngx-multiple-dates) - Angular Material をベースにした複数日付ピッカー。
* [ng-datetime](https://github.com/ressurectit/ng-datetime) - datetime を扱うためのコンポーネントを含む Angular ライブラリ。
* [time2blocks-ngx](https://github.com/antonioconselheiro/time2blocks-ngx) - 過去のブロックチェーンブロックに紐づく時間の特定（およびフォーマット）を行う Angular ライブラリ。
* [@dhutaryan/ngx-mat-timepicker](https://github.com/dhutaryan/ngx-mat-timepicker) - マテリアルデザインに基づくタイムピッカー。
* [ngx-timeline](https://github.com/omnedia/ngx-timeline) - アニメーション付きタイムラインビューを追加できるシンプルなコンポーネントライブラリ。
* [frxjs-Ngx-Timeline](https://github.com/emanuelefricano93/frxjs-Ngx-Timeline) - このライブラリにより、Angular アプリにタイムラインを統合できます。
* [ngx-daterangepicker-pro](https://github.com/Abhinavgaur01/ngx-daterangepicker-pro-demo) - Angular 17+ と [Day.js](https://github.com/iamkun/dayjs) を使って構築された、強力でカスタマイズ可能なAngular日付範囲ピッカー
* [ngx-custom-daterangepicker](https://github.com/nedpuganti/ngx-custom-daterangepicker) - 設定可能なオプションを備えた Angular Material デートレンジピッカー。高度な機能をサポートし、簡単な統合が可能です。
* [angular-material-jalali-datepicker-adapter](https://github.com/aliqb/angular-material-jalali-datepicker-adapter) - Angular Material デートピッカーに Jalali（ペルシャ／ソーラーヒジャリ／シャムシ）日付アダプタを提供する、包括的な Angular ライブラリ。
* [date-interceptors](https://github.com/AdaskoTheBeAsT/date-interceptors) - このライブラリは、JSON パイロードから日付および期間文字列を、それぞれネイティブの Date オブジェクトおよび Duration オブジェクトに変換するための強力なソリューションを提供します。
* [ngx-vertical-timeline](https://github.com/callyafiune/ngx-vertical-timeline) - レスポンシブな垂直タイムラインを作成できる Angular コンポーネント。
* [ngx-timeago](https://github.com/ihym/ngx-timeago) - Angular での動的タイムスタンプのレンダリング。
* [ngx-chronica](https://github.com/klajdm/ngx-chronica) - Angular に必要な日付および時刻ピッカーの6つの専門コンポーネントを提供し、Angularエコシステムにおける重要なギャップを埋める包括的な Angular ライブラリ。
* [ngx-mat-multi-date-picker](https://github.com/ali79heidari/ngx-mat-multi-date-picker) - グレゴリアン、Jalali（ペルシャ）、Hijri（イスラム）の高品質な日付ピッカーを提供する、包括かつスタンドアローンの Angular ライブラリ。
* [date-time-picker](https://github.com/danielmoncada/date-time-picker) - Angular 日時ピッカー。
* [date-time-picker-moment-adapter](https://github.com/danielmoncada/date-time-picker-moment-adapter) - `@danielmoncada/date-time-picker` 用の Moment.js アダプタ
* [hijri-date-time-picker](https://github.com/hanygamal72/hijri-date-time-picker) - Umm Al-Qura カレンダーを使用した、Angular でのグレゴリアン／ヒジャリのダブル日時ピッカー。
* [ng-laydate](https://github.com/lanxuexing/ng-laydate) - Angular 18 以降向けのシンプルかつ堅牢な日時ピッカー。
* [lifecycle-timeline](https://github.com/ericreboisson/lifecycle-timeline) - 製品ライフサイクルの段階を可視化するインタラクティブな Vanilla JS コンポーネント。Angular 統合ガイドを併記。
* [weekly-availability-picker](https://github.com/squareetlabs/weekly-availability-picker) - ドラッグ＆リサイズをサポートするスタンドアローンの Angular 週間利用可否ピッカー。
* [ng-date-hour-range-selector](https://github.com/deciosfernandes/ng-date-hour-range-selector) - Angularに構築された柔軟な日付／日時範囲選択器（Angular CDK Overlayベース）

### ディレクティブ <a id="directives"></a>

* [ng-click-outside](https://github.com/Kr0san89/ng-click-outside) - 要素外のクリックイベントを処理するAngularディレクティブ
* [ng-for-track-by-property](https://github.com/nigrosimone/ng-for-track-by-property) - Angular 全域の `trackBy` プロパティディレクティブ（厳密な型チェックあり）
* [ng-let](https://github.com/nigrosimone/ng-let) - HTMLコンポーネントテンプレートにローカル変数としてデータを共有する構造ディレクティブ
* [ngx-app-version](https://github.com/Celtian/ngx-app-version) - DOMにバージョン情報を記述するAngularディレクティブ
* [ngx-clamp](https://github.com/Chitova263/ngx-clamp) - legacyブラウザ対応のマルチラインまたは高さベースのテキスト切り取りを実現するAngularディレクティブ
* [ngx-copypaste](https://github.com/JsDaddy/ngx-copypaste) - Angular用のシンプルで素晴らしいコピー＆ペーストディレクティブ
* [ngx-copy-to-clipboard](https://github.com/andreasnicolaou/ngx-copy-to-clipboard) - 1クリックでクリップボードにテキストをコピーできるAngularディレクティブ。カスタマイズ可能な成功／エラーメッセージをサポートし、コピー操作時にイベントをトリガーできる。
* [ngx-cut](https://github.com/Celtian/ngx-cut) - レスポンシブオプションを備えたテキストの切り取りを実現するAngularディレクティブ
* [ngx-fixed-footer](https://github.com/Celtian/ngx-fixed-footer) - オーバーラップなしで固定フッターを追加するディレクティブ
* [ngx-if-platform](https://github.com/Celtian/ngx-if-platform) - プラットフォームに基づく条件表示を実現するディレクティブ
* [ngx-memoize](https://github.com/ali79heidari/ngx-memoize) - 軽量で依存関係のないデコレータ。Angularクラスメソッドをメモ化し、テンプレート呼び出しの繰り返しを削減し、パフォーマンスを向上させる。
* [ngx-nullable](https://github.com/Celtian/ngx-nullable) - このライブラリはAngularテンプレートにおけるプロパティのnull化を可能にする。
* [ngx-overflow-reveal](https://github.com/hosembafer/ngx-overflow-reveal) - テキストが切り詰められた状態をhover時に美しく表示するAngularディレクティブ
* [ngx-repeat](https://github.com/Celtian/ngx-repeat) - カウントに基づいてHTML要素を繰り返すAngularディレクティブ
* [ngx-speech-button](https://github.com/JayChase/ngx-speech-button) - Web Speech APIに簡単なセットアップでvoice input機能を提供する使いやすいラッパーを提供するAngularディレクティブ
* [ngxsmk-button-spinner](https://github.com/toozuuu/ngxsmk-button-spinner) - Angular 17以降で、任意のボタンにインラインまたは中央にローディングスピナーを表示するディレクティブ
* [ngxture](https://github.com/gianpierreVelasquez/ngxture) - 軽量かつモジュラリティの高いAngularライブラリ。即時使用可能なアニメーションとジェスチャディレクティブを提供。
* [@maxime1jacquet/npm-directives](https://github.com/maxime1jacquet/npm-directives) - Angular ディレクティブ（[ngx-cursor](https://www.npmjs.com/package/ngx-cursor) および [ngx-simple-countdown](https://www.npmjs.com/package/ngx-simple-countdown) を含む）
* [ngx-mat-menu-hover](https://github.com/Gamekohl/ngx-mat-menu-hover) - hoverメニューの挙動を処理するAngularディレク連。マウスをホバーしたときにメニューを開き、マウスが離れたときに閉じる。
* [ngx-highlight](https://github.com/SynTronic/ngx-highlight) - テキスト内の検索マッチをハイライトするための Angular ディレクティブ（[CSS Custom Highlight API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Custom_Highlight_API) をベースに構築）
* [ngx-liquid-glass](https://github.com/anushsharma27/ngx-liquid-glass) - Apple風の液体ガラス効果を実現するAngularディレクティブ。DOMベースの屈折と設定可能なエッジをサポート。
* [ngx-digits-only](https://github.com/Sepehr-Aghdasi/ngx-digits-only/tree/master/projects/digits-only) - スマートな数値入力用の Angular ディレクティブ — デジットフィルタ、フォーマット、バリデーションを実現し、全マスクライブラリ（例：`ngx-mask`）をインストールせずに済む

### DOM <a id="dom"></a>

* [ngx-resize-observer](https://github.com/fidian/ngx-resize-observer) - Angular 8以降で要素のサイズ変更を検知するモジュール
* [ngx-mutation-observer](https://github.com/fidian/ngx-mutation-observer) - DOMに要素が変更されたときにAngular 8+でイベントを発火します
* [ngx-visibility](https://github.com/fidian/ngx-visibility) - DOM内の要素が表示されたときに検知するAngularモジュール。IntersectionObserverを使用します
* [ngx-fade](https://github.com/omnedia/ngx-fade) - Intersection Observer APIを用いて、視覚的にスムーズなフェードとスライドによるビューポート遷移を行うAngularコンポーネント
* [ngx-dynamic-hooks](https://github.com/MTobisch/ngx-dynamic-hooks) - 動的に変化する文字列にライブAngularコンポーネントを自動的に挿入し、DOMに結果をレンダリングします
* [ngx-highlightjs](https://github.com/MurhafSousli/ngx-highlightjs) - 即時コードハイライト、言語自動検出、使いやすさ抜群！
* [ngx-sharebuttons](https://github.com/MurhafSousli/ngx-sharebuttons) - Angularの共有ボタン
* [ng-helpers](https://github.com/Jaspero/ng-helpers) - Angular向けに便利なコンポーネント、ディレクティブ、パイプのコレクション
* [ngx-ellipsis](https://github.com/lentschi/ngx-ellipsis) - Angular 9+向けに、エラプス付きのマルチラインテキスト
* [ng-gd](https://github.com/luisalejandrofigueredo/ng-gd) - マウスまたはタブレットイベントに対応したキャンバス要素を簡単に管理する方法
* [ngx-annotate-text](https://github.com/philenius/ngx-annotate-text) - 名前付きエンティティ認識や品詞タグ付けなどのタスクに最適な、テキストの可視化と注釈を行うAngularライブラリ
* [ng-dynamic-component](https://github.com/gund/ng-dynamic-component) - Angular向けに、入力と出力のフルライフサイクルをサポートする動的コンポーネント
* [ngx-optimus](https://github.com/Bilal-Abubakari/ngx-optimus) - データフォーマットを簡素化し、コンポーネントの論理をよりクリーンに保つためのカスタムパイプを提供するAngularライブラリ
* [ng-lock](https://github.com/nigrosimone/ng-lock) - タスクが実行中には関数とユーザーインターフェースをロックするAngularデコレータ
* [angular-paginator](https://github.com/sibiraj-s/angular-paginator) - Angularアプリケーション向けのページネーションコンポーネンツ
* [ngx-signal-combinators](https://github.com/alessiopelliccione/ngx-signal-combinators) - Angularシグナル向けに組み立て可能なブールヘルパー、よりクリーンな反応テンプレート論理を可能にします
* [viewport-truth](https://github.com/AntonVoronezh/viewport-truth) - 正確なCSSピクセルサイズを検出し、仮想キーボードに対応し、リサイズ／スクロールのジャイアントを減らし、フレームワーク間でSSRに対応する、極めて小さなVisualViewport中心のストア
* [angular-inport](https://github.com/ajaysinghj8/angular-inport) - Angular In-Viewport Detector

### ドラッグ＆ドロップ <a id="drag-and-drop"></a>

* [Official Angular Docs](https://angular.dev/guide/drag-drop)
* [ngx-drag-drop](https://github.com/reppners/ngx-drag-drop) - ネイティブHTMLのドラッグアンドドロップAPIを使用するAngularディレクティブ
* [@hackingharold/ngx-dropzone](https://github.com/hackingharold/ngx-dropzone) - Angular Material向けに欠けているファイル入力コンポーネント
* [ng-dnd](https://github.com/ng-dnd/ng-dnd) - Angular向けのドラッグアンドドロップ
* [angular-drag-drop-layout](https://github.com/skutam/angular-drag-drop-layout) - 軽量で依存関係のないAngularライブラリ。高度にカスタマイズ可能でレスポンシブなグリッドレイアウトを、ドラッグ＆ドロップ機能付きで作成できる。
* [ngx-swapy](https://github.com/omnedia/ngx-swapy) - [Swapy](https://github.com/TahaSh/swapy) を活用した、シンプルなドラッグ＆ドロップ DOM を提供するコンポーネントライブラリ
* [ngx-draggable-dom](https://github.com/bmartinson/ngx-draggable-dom) - Angularの属性ディレクティブで、任意の要素をドラッグ可能な要素に変換する。
* [ngx-drag-resize](https://github.com/dmytro-parfenov/ngx-drag-resize) - このAngularライブラリは、HTML要素にドラッグおよびリサイズ機能を追加するディレクティブを提供する。
* [ng-keyboard-sort](https://github.com/johnhwhite/ng-keyboard-sort) - CDKのドラッグ＆ドロップソートを使用する要素に、キーボードコマンドを追加するためのライブラリ。
* [angular-mixed-cdk-drag-drop](https://github.com/rosejoe47/angular-mixed-cdk-drag-drop) - Angular CDKを用いた混合方向のドラッグ＆ドロップをサポートするAngularディレクティブ。
* [cdk-drag-snap-to-point](https://github.com/shhdharmen/cdk-drag-snap-to-point) - cdkDrag機能を特定のポイントでのドロップのみに実現するデモ。
* [ngx-puzzle](https://github.com/zhongmiao-org/ngx-puzzle) - Angularアプリケーション向けのドラッグ＆ドロップダッシュボードビルダー。
* [ngx-drag-drop-kit](https://github.com/mr-samani/ngx-drag-drop-kit) - 高性能なAngularドラッグ＆ドロップツールキット。グリッドレイアウト、ソート、リサイズ、ネストなど、多数の機能を備えている。
* [ngx-dashboard](https://github.com/TobyBackstrom/ngx-dashboard) - リサイズ可能なセルとカスタマイズ可能なウィジェットを持つ、現代的なAngularワークスペースでドラッグ＆ドロップグリッドダッシュボードを構築できる。
* [ngx-dropzone-next](https://github.com/arturovt/ngx-dropzone-next) - `@peterfreeman/ngx-dropzone` のメンテナンスされたフォーク（バグ修正および新しいAngularバージョンとの互換性を提供）

### エディター <a id="editors"></a>

* [Angular-JSON-Tree-Editor-Component](https://github.com/stefonalfaro/Angular-JSON-Tree-Editor-Component) - 実際に動作するAngular JSON Tree Editorコンポーネント。
* [@acrodata/code-editor](https://github.com/acrodata/code-editor) - Angular用のCodeMirror 6のラッパー。
* [angular2-froala-wysiwyg](https://github.com/froala/angular-froala-wysiwyg) - Angular用のFroala WYSIWYG HTMLエディタのラッパー。
* [ckeditor](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/frameworks/angular.html) - Angular向けのプラグイン。
* [domternal](https://github.com/domternal/domternal) - 軽量で拡張性の高い富テキストエディタツールキット。ネイティブなAngularコンポーネント（シグナル、OnPush、スタンドアローン）、内蔵されたツールバーとテーマ、完全なテーブルサポートを備えている。
* [ngx-aztreya-editor](https://github.com/aztreya/ngx-aztreya-editor) - 軽量でカスタマイズ可能なAngular富テキドットエディタコンポーネント。内蔵ツールバー、見出し、テキストフォーマット、配置オプションを備えている。
* [ngx-simple-text-editor](https://github.com/Raiper34/ngx-simple-text-editor) - Ngx Simple Text editor（STエディタ）は、Angular 9以降向けのシンプルなネイティブテキストエディタコンポーネント。
* [ngx-quill](https://github.com/KillerCodeMonkey/ngx-quill) - Quill富テキストエディタ向けのAngularコンポーネント。
* [@sibiraj-s/ngx-editor](https://github.com/sibiraj-s/ngx-editor) - ProseMirrorを使用したAngular富テキストエディタ。
* [@bobbyquantum/ngx-editor](https://github.com/bobbyquantum/ngx-editor) - Angular 21+ 用の `sibiraj-s/ngx-editor` のフォーク
* [ngx-wig](https://github.com/stevermeister/ngx-wig) - Angular用のWYSIWYG HTML富テキストエディタ。
* [ngx-property-editor](https://github.com/heinerwalter/ngx-property-editor) - シンプルな入力コンポーネントとプロパティエディタコンポーネントを含むAngularライブラリ。これにより、任意のオブジェクトのすべてのプロパティを編集するためのフォームが自動的に構築される。
* [ngx-tiptap](https://github.com/sibiraj-s/ngx-tiptap) - [tiptap v2](https://tiptap.dev/) 用の Angular バインディング
* [tinymce-angular](https://github.com/tinymce/tinymce-angular) - 公式 [TinyMCE](https://www.tiny.cloud/) Angular コンポーネント
* [slate-angular](https://github.com/worktile/slate-angular) - [Slate](https://github.com/ianstormtaylor/slate) 用の Angular ビュー層
* [ngx-jodit](https://github.com/julianpoemp/ngx-jodit/) - [Jodit](https://github.com/xdan/jodit) WYSIWYG エディタ用の Angular ワッパー
* [ngx-tinymce](https://github.com/cipchk/ngx-tinymce) - を使って構築された コンポーネント `TinyMCE`
* [MagnetarQuill](https://github.com/scherenhaenden/MagnetarQuill) - 拡張可能なAngular WYSIWYGエディタ。豊かなテキスト、メディア、テーブルをサポートし、プラグインアーキテクチャを採用。
* [ngx-editorjs2](https://github.com/Ba5ik7/ngx-editorjs2) - [Editor.js](https://editorjs.io/) をインスピレーションとして設計された拡張可能なブロックエディタ（カスタマイズ可能なブロックとAngular反応機能を備えている）．[ngx-editor-js2-blocks](https://github.com/Ba5ik7/ngx-editor-js2-blocks) により、カスタムコンテンツタイプのサポートが追加される
* [ngx-traak](https://github.com/mouhamadalmounayar/ngx-traak) - プロセスミラーに基づくWYSIWYG Angularエディタライブラリ。独立したコンポーネントを対象にし、プラグインで高度にカスタマイズ可能。
* [ngx-summernote](https://github.com/lula/ngx-summernote) - Angular 用の [Summernote](https://github.com/summernote/summernote) エディタ
* [angular-rich-text-editor](https://github.com/manishpatidar028/angular-rich-text-editor) - [RichTextEditor](https://richtexteditor.com/) 用の Angular ワッパー（ライセンスキー対応および `ControlValueAccessor` を含む）
* [armor-editor](https://github.com/technicults/armor-editor) - 安全で軽量な豊かなテキストエディタ。プレミアム機能を備え、Angularアプリケーションへの統合をスムーズに。
* [ngx-workflow](https://github.com/abdulkyume/ngx-workflow) - 強力で高度にカスタマイズ可能なAngularライブラリ。インタラクティブなノードベースエディタ、フローチャート、図面の構築に最適。
* [contentful-rich-text-angular-renderer](https://github.com/flowup/contentful-rich-text-angular-renderer) - Contentfulの豊かなテキストのAngularレンダラー。Angularテンプレートを用いて、ノードおよびマーカーのカスタマイズレンダリングを提供。
* [Monaco Pattern Editor](https://github.com/KhlifiIsmail/Editor) - モンコエディタを美しいテーマとコーディングインタビュー準備機能でラップしたプレミアムAngularライブラリ。
* [angular-editor](https://github.com/kolkov/angular-editor) - Angular用のシンプルなネイティブWYSIWTエディタコンポーネント。
* [ngx-json-editor](https://github.com/RonnyValdivieso/ngx-json-editor) - Angular用の最小限でテーマを適用可能なJSONエディタ。
* [ngx-ace-signal](https://github.com/WebArtWork/ngx-ace-signal) - アシストの現代的なAngularのシグナルベースのAceエディタのラッパー。
* [ngx-rwriter](https://github.com/ReiAg/ngx-rwriter) - Angular 21以降向けの現代的な豊かなテキストエディタコンポーネント。画像、配置、リスト、色選択、翻訳に対応。
* [ngx-pro-editor](https://github.com/ChauhanShubham8758/ngx-pro-editor) - 豊富な機能を備えたWYSIWYGエディタ。自動保存、特別文字、高度なフォーマットを提供。
* [dragble-angular-editor](https://github.com/Dragble/dragble-angular-editor) - デザイナーに親しみやすい視覚エディタとAI駆動の会話インターフェースを融合した2モードAngularコンポーネント。
* [ngx-email-studio](https://github.com/edward124689/ngx-email-studio) - Angular 21向けのフロントエンドメールビルダー。メールテンプレートの作成、インポート、編集、プレビュー、エクスポートをサポート。
* [qalma](https://github.com/cdskill/qalma) - プロセスミラーに基づくAngular中心のヘッドレス豊かなテキストエディタツールキット。
* [ngx-mermaid-canvas](https://github.com/Nigelli/ngx-mermaid-canvas) - Angular用の視覚的なフローチャートエディタ。Mermaid構文を出力。
* [@bloklabs/angular](https://github.com/JackUait/blok) - [Blok](https://blokeditor.com) 用の Angular アダプタ（ヘッドレスブロックベースの豊富なテキストエディタで、HTMLではなくJSONを出力）
* [angular-tiptap-editor](https://github.com/FloGeez/angular-tiptap-editor) - 現代的でカスタマイズ可能なAngular豊かなテキストエディタ。Tiptapで構築。
* [ngx-richtext](https://github.com/eliranbar/ng-rich-text-editor) - プロフェッショナルな豊かなテキストエディタ。無料とプレミアム機能の2階層を提供。
* [ngx-image-editor](https://github.com/eliranbar/ngx-edit-images) - プロフェッショナルな画像エディタ。無料で永続的に利用可能で、オフラインEd25519ライセンスのプレミアムツールを備える。
* [Scryb](https://scryb.dev/) - 月額39ドルの固定料金のTypeScript WYSIWYGエディタ。Tiptapをベースにし、無制限のロード、ユーザー、ドキュメントを提供。
* [nge-ide](https://github.com/cisstech/nge-ide) - 1つの `<ide-root />` コンポーネントを用いて、NGE IDEはAngularアプリケーションにフルデスクトップエディタシェルを埋め込む

### ファイルアップロード <a id="file-upload"></a>

* [ng2-file-upload](https://github.com/valor-software/ng2-file-upload) - 使いやすいファイルアップロードディレクティブ。
* [ngx-flow](https://github.com/flowjs/ngx-flow) - Angular7+向けの [flow.js](https://github.com/flowjs/flow.js) のラッパーでファイルアップロードを実現
* [ngx-uploadx](https://github.com/kukhariev/ngx-uploadx) - アンガルのリスケジュールアップロードモジュール
* [file-upload](https://github.com/pIvan/file-upload) - ファイルアップロード用のアンガルモジュール
* [@georgipeltekov/ngx-file-drop](https://github.com/georgipeltekov/ngx-file-drop) - シンプルなデスクトップファイルおよびフォルダのドラッグアンドドロップ用のアンガルモジュール。このライブラリはrxjs-compatを必要としない。
* [Uppy](https://github.com/transloadit/uppy) - スリムでモジュラリティの高いJavaScriptファイルアップローダー [integrates seamlessly with Angular](https://uppy.io/docs/angular/)
* [ngx-custom-material-file-input](https://github.com/daemons88/ngx-custom-material-file-input) - アンガルマテリアル向けのファイル入力管理
* [ngx-file-preview](https://github.com/wh131462/ngx-file-preview) - 多くのファイルタイプに対応した強力なプレビューツール
* [ngx-file-helpers](https://github.com/fvilers/ngx-file-helpers) - アンガルファイルヘルパー（ファイルピッカーおよびドロップゾーンを含む）
* [ngx-file-uploader](https://github.com/uniprank/ngx-file-uploader) - アンガルアップロードコンポーネントとディレクティブに内蔵されたファイルプレビュー
* [file-uploader](https://github.com/uploadcare/file-uploader) - React、Next.js、Vue、アンガル、Svelteなど、すべてのJavaScriptフレームワークと互換性のあるWeb Componentsベースのファイルアップロードウィジェット。アダプタなしで動作。
* [ngx-accessible-dropzone](https://github.com/mahmoudQq2023/ngx-accessible-dropzone) - キーボードおよびスクリーンリーダー対応の、ゼロ依存性の小さなアンガルドラッグアンドドロップファイルアップロードコンポーネント
* [@h-k-dev/angular-file-drop](https://github.com/h-k-dev/angular-file-drop) - スタイルシートなし、XHRなし、DOM変更なしの軽量アンガルドラッグアンドドロップディレクティブ（ファイルおよびフォルダ対応、ナビゲーション、フィルタリング、クリックで選択）
* [upup](https://github.com/DevinoSolutions/upup) - 六つの主要なフロントエンドフレームワーク向けのUIパッケージがバイト完全に一致するヘッドレスアップロードエンジン。サーバーモード、クラウドドライブ、マルチソースメディアインポートに対応。

### フォーム <a id="forms"></a>

* [ngx-mask](https://github.com/JsDaddy/ngx-mask) - アンガルフォームフィールドおよびHTML要素にマスクを適用するプラグイン
* [maskito](https://github.com/taiga-family/maskito) - ユーザーが定義されたフォーマットに従って値を入力できるようにする、入力マスクを構成するライブラリのコレクション
* [ng-signal-forms](https://github.com/timdeschryver/ng-signal-forms) - シグナルを駆使したアンガルフォーム
* [ngx-sub-form](https://github.com/cloudnc/ngx-sub-form) - アンガルフォームを複数コンポーネントに分割するためのユーティリティライブラリ
* [ngx-currency-v2](https://github.com/gabriel-hawerroth/ngx-currency-v2) - 最新のAngularバージョンにアップデートされた [ngx-currency](https://github.com/nbfontana/ngx-currency) のフォーク
* [ngx-enhancy-forms](https://github.com/klippa-app/ngx-enhancy-forms) - 華やかな強化されたアンガルフォーム
* [ngx-focus-entities](https://github.com/klee-contrib/ngx-focus-entities) - [TopModel](https://github.com/klee-contrib/topmodel) で生成されたFocus4表現から反応型Angularフォームを生成するためのライブラリ
* [@TanStack/form](https://github.com/TanStack/form) - TypeScript対応、ヘッドレスUI、フレームワークに依存しない設計により、クロスフレームワークフォーム処理を簡素化。
* [@luistabotelho/angular-signal-forms](https://github.com/luistabotelho/angular-signal-forms) - シグナルを用いたシンプルなアンガルフォーム実装ライブラリ
* [ngx-form-object](https://github.com/infinum/ngx-form-object) - アンガル反応フォームの抽象化。モデルからフォームを生成し、ネストされた関係を管理。
* [pro-form](https://github.com/ProAngular/pro-form) - アンガルマテリアルに基づく、反応型かつ再利用可能なフォーム入力コンポーネントの事前定義セット
* [ngx-forms](https://github.com/nncl/ngx-forms) - Angularフォーム関数のコレクションで、アプリケーションの開発を支援します。
* [ngxAccessor](https://github.com/Zarlex/ngxAccessor) - このライブラリは、既存のメソッドにシグナルを統合し、柔軟性を備えた新たなAngularフォームアプローチを追加します。
* [angular-template-signal-forms](https://github.com/chocosd/angular-template-signal-forms) - シグナルをベースに構築された現代的なAngularフォームライブラリ。柔軟で型安全かつ完全にテーマ化可能。
* [ngx-formidable](https://github.com/Cynthion/ngx-formidable) - 豊かなバリデーションを備えた、強力なAngularコンポーネントライブラリです。
* [piying-view](https://github.com/piying-org/piying-view) - 強型のフロントエンドフォームソリューション； `ngx-formly` およびAngularの公式フォームフレームワークとの代替
* [ngx-form-m3](https://github.com/webilix/ngx-form-m3) - AngularおよびMaterial 3向けのペルシャ語フォームライブラリ。
* [lite-form](https://github.com/liangk/lite-form) - 軽量なAngularライブラリで、バリデーション、スタイル、アニメーションを備えたカスタマイズ可能なフォームコンポーネントを提供します。
* [cc-form-engine](https://github.com/ChristianCruzArango/cc-form-engine) - 反応型フォームの生成と管理に特化した高度なAngularライブラリ。動的バリデーション、変更追跡、カスタマイズ可能なエラーメッセージをサポート。
* [ngx-vest-forms](https://github.com/ngx-vest-forms/ngx-vest-forms) - 軽量かつ型安全なアダプタ。Angularのテンプレート駆動フォームと [Vest.js](https://vestjs.dev/) を接続し、複雑かつ非同期なバリデーションを実現
* [ngx-autosave-forms](https://github.com/zinetnorf/ngx-autosave-forms) - Angularにおけるテンプレートフォームまたは反応型フォームで、localStorageにフォーム値を自動保存します。
* [ngx-better-forms](https://github.com/Bioroxx/ngx-better-forms) - 簡潔で維持性の高い反応型フォームユーティリティ。
* [ngx-query-builder](https://github.com/solidexpert-ltd/ngx-query-builder) - Angularのスタンドアローンコンポーネントを備えたクエリビルダー。妥当なデフォルト設定、テンプレートハック、ドメイン特定エディタ向けの完全なフォームサポート。
* [ngx-mat-form](https://github.com/Salromag/ngx-mat-form) - Angularの反応型フォームとAngular Materialを活用し、スキーマから動的に構成可能なフォームを生成するライブラリ。
* [ng-forge](https://github.com/ng-forge/ng-forge) - Angularのシグナルベースフォームに特化した型安全で動的なフォームライブラリ。
* [zignal](https://github.com/biyonik/zignal) - シグナルとZodバリデーションを使用した型安全なAngularフォームライブラリ。ペルシャ語特化のバリデーションとマルチ言語対応を備えています。
* [ngx-form-stepper](https://github.com/rayaneriahi/ngx-form-stepper) - 最小設定で開発中に無効な状態を防ぐ、強型のAngularライブラリで、堅牢な多段階フォームを構築します。
* [ngx-form-rules](https://github.com/bulbul5391/ngx-form-rules) - 軽量なAngularライブランリで、シンプルな宣言型ルールを使って、反応型フォームフィールドの有効・無効・制御を容易に実現します。
* [ngx-reactive-forms-utils](https://github.com/pjlamb12/ngx-reactive-forms-utils) - 反応型Angularフォームの使用を支援するユーティリティ。
* [ngx-entity-forms](https://github.com/irvrodflo/ngx-entity-form) - エンティティインターフェースから完全に型付けされたAngular FormGroupsを生成し、自動補完、バリデーション、エラーメッセージを提供します。
* [ngx-form-draft](https://github.com/neokyuubi/ngx-form-draft) - ゼロ依存のAngularフォームドラフトの自動保存と復元。
* [ngx-signal-forms](https://github.com/lorenzomusche/ngx-signal-forms) - 実験的なシグナルフォームAPIをベースにし、現代的なM3スタイルを採用したシグナル駆動型、型安全なAngularフォームライブラリ。
* [formsync](https://github.com/sudhucodes/formsync) - 開発者に親切なAngular対応フォームバックエンドで、サーバーサイドコードなしで提出データを収集・管理できます。
* [@neutro-web/form](https://github.com/neutro-web/form) - 高性能・依存関数なし・フレームワークに依存しない反応型フォームエンジン
* [forge-form](https://github.com/mspas/forge-form) - TypeScriptの1つのオブジェクトから反応型、シグナルベースのフォーム、バリデーション、条件付きフィールドを生成
* [NgSimplicityForms](https://github.com/BryanGWalsh/NgSimplicityForms) - 共用可能なAngular動的フォームフレームワーク。BootstrapおよびAngular Material向けの共通コアAPIとレンダラーパッケージを提供
* [ng-modular-forms](https://github.com/ronbodnar/ng-modular-forms) - 軽量なアーキテクチャ層で、モジュラリティを実現するAngular反応型フォーム用の組み込みコンポーネント
* [ngx-form-signals](https://github.com/xonaib/ngx-form-signals) - Angular向けヘッドレス・シグナルネイティブフォームコアライブラリ。コンポーネント、CSS、レイアウト、アダプタを強制しないでフィールド状態と跨フィールドルールを管理

### フォームコントロール <a id="form-controls"></a>

* [ngx-color-picker](https://github.com/zefoy/ngx-color-picker) - 色選択ウィジェット
* [angular-colorful](https://github.com/ngx-eco/angular-colorful) - 現代的なAngularアプリ向けの小さな色選択コンポーネント
* [ng-select](https://github.com/ng-select/ng-select) - すべてを統合したUI選択、マルチ選択、自動補完
* [file-input-accessor](https://github.com/jwelker110/file-input-accessor) - Angularフォームにファイル入力機能を提供するAngularディレクティブ
* [ngx-filesaver](https://github.com/cipchk/ngx-filesaver) - [FileSaver.js](https://github.com/eligrey/FileSaver.js) を使用したシンプルなファイル保存
* [ngx-bar-rating](https://github.com/MurhafSousli/ngx-bar-rating) - Angularバー評価コンポーネント
* [angular-code-input](https://github.com/AlexMiniApps/angular-code-input) - Angular 7–16+向けの強固な入力コンポーネント（数字／文字）およびIonic 4–7、モバイル、クリップボードサポート
* [angular-iban](https://github.com/fundsaccess/angular-iban) - Angular向けIBANディレクティブとパイプ
* [ngx-autosize-input](https://github.com/joshuawwright/ngx-autosize-input) - 入力要素の幅を自動調整するAngularディレクティブ。幅を縮小および拡大する
* [angular-cc-library](https://github.com/timofei-iatsenko/angular-cc-library) - クレジットカード入力マスクおよびバリデーションをサポートするライブラリ
* [ngx-ui-switch](https://github.com/webcat12345/ngx-ui-switch) - iOS 7スタイルのシンプルスイッチコンポーネント
* [ngx-otp-input](https://github.com/pkovzz/ngx-otp-input) - Angular向けワンタイムパスワード入力ライブラリ
* [ngx-show-hide-password](https://github.com/osahner/ngx-show-hide-password) - パスワードまたはテキスト入力にスプリット入力ボタンを追加。入力タイプを「text」と「password」の間で切り替え
* [ngx-phone-field](https://github.com/alex-mirankov/ngx-phone-field) - 国際電話番号入力用のAngularディレクティブ。フラグドロップダウンをサポートし、反応型およびテンプレート駆動フォームに対応
* [ngx-mat-birthday-input](https://github.com/rbalet/ngx-mat-birthday-input) - 誕生日入力用のAngularマテリアルライブラリ
* [ngx-countries-dropdown](https://github.com/kapilkumar0037/ngx-countries-dropdown) - カスタマイズ可能な国リストドロップダウンコンポーネのAngularライブラリ。フラグ、ダイアルコード、言語、通貨詳細を含む
* [ngx-mat-split-button](https://github.com/feature23/ngx-mat-split-button) - Angular Materialの分割ボタンで、主要アクションとセカンダリオプションのドロップダウンを提供
* [ng-select2](https://github.com/Harvest-Dev/ng-select2) - [select2-component](https://github.com/plantain-00/select2-component) のアップデートされたフォーク
* [ngx-super-select](https://github.com/HesamKashefi/ngx-super-select) - Angular用のマルチセレクト入力コンポーネント
* [ngx-super-select-tree](https://github.com/HesamKashefi/ngx-super-select-tree) - Angular用の単一または複数選択ドロップダウンツリー
* [ngx-mat-table-multi-sort](https://github.com/pgerke/ngx-mat-table-multi-sort) - Angular Materialテーブルにマルチソート機能を追加
* [ng-country-select](https://github.com/wlucha/ng-country-select) - フラグとコードを含むスマートで多言語対応の国検索
* [ngx-cron](https://github.com/swimlane/ngx-cron) - ユーザーに親しみやすいクロントレード入力
* [@amirsavand/ngx-input](https://www.npmjs.com/package/@amirsavand/ngx-input) - 入力とフォーム処理に最適な、すべてを網羅したAngularパッケージ
* [ng-otp-input](https://github.com/code-farmz/ng-otp-input) - Web向けの完全カスタマイズ可能なワンタイムパスワード（OTP）入力コンポーネント（Angularで構築）
* [rm-ng-star-rating](https://github.com/malikrajat/rm-ng-star-rating) - 高度な星評価に精度とレスポンシブデザインを備えた、完全にカスタマイズ可能なAngularスタンドアローンコンポーネント
* [ngx-animated-paginator](https://github.com/eladbh-stanley/ngx-animated-paginator) - Angular向けの を介してテンプレート駆動フォームおよび反応型フォームにスムーズに統合された のラッパー [animated-paginator-web-component](https://www.npmjs.com/package/animated-paginator-web-component) `ControlValueAccessor`
* [ngx-input-color](https://github.com/mr-samani/ngx-input-color) - `ngx-input-gradient` と `ngx-input-color` は、プレビューとフォーム統合を備えた、カスタマイズ可能なAngularコンポーネントで、色/グラデーション選択を実現
* [ngx-morse](https://github.com/monkeyscript/ngx-morse) - Angular用のシンプルなモルス符号エンコーダーとデコーダー
* [ngxsmk-tel-input](https://github.com/toozuuu/ngxsmk-tel-input) - 国ドロップダウン、フラグ、強力なバリデーション／フォーマットを備えたAngular電話入力コンポーネント
* [gradient-picker](https://github.com/acrodata/gradient-picker) - 強力で美しいグラデーション選択器
* [ngxsmk-datepicker](https://github.com/toozuuu/ngxsmk-datepicker) - 現代的で高度にカスタマイズ可能なAngular日付範囲選択コンポーネンツ
* [ngx-country-selector](https://github.com/evicio1/ngx-country-selector) - スリムでカスタマイズ可能なAngular Material国選択コンポーネント。フラグ、コード、ローカル名など、アクセシブルなドロップダウンを提供
* [@nsnayp1/angular-datepicker2](https://github.com/nsnayp13/angular-datepicker2) - 軽量でAngular 16+対応の日付選択コンポーネント。スタンドアローン対応、範囲選択、複数日選択、カスタマイズ可能なテンプレートを備え、外部依存なし
* [ngx-phone](https://github.com/manishpatidar028/ngx-phone) - 自動国検出、リアルタイムフォーマット、バリデーション、完全なフォームサポートを備えたAngular電話入力コンポーネント
* [ngx-phone-country-input](https://github.com/mostafaM212/ngx-phone-country-input) - 反応型フォーム対応の電話入力と国選択を網羅した、総合的なAngularライブラリ
* [ngx-mat-period-picker](https://github.com/felixdulfer/ngx-mat-period-picker) - スタンドアローンコンポーネントで構築された、現代的なAngular Material期間選択コンポーネント
* [touchspin-angular](https://github.com/istvan-ujjmeszaros/touchspin-angular) - [TouchSpin](https://github.com/istvan-ujjmeszaros/touchspin) の数値入力コンポーネント向けのAngularアダプタで、レンダラーごとにサポート
* [ngx-cron-editor](https://github.com/haavardj/ngx-cron-editor) - 反応型フォーム統合とMaterial Designスタイルを備えた、グラフィカルなAngular 15+クロントレードビルダー
* [ngx-otp-code-input](https://github.com/Swaraj55/otp-input) - 詳細なカスタマイズオプション（マスク、数字のみ入力、自動フォーカス）を備えたAngular OTP入力コンポーネント
* [smart-date-input](https://github.com/ngxpert/smart-date-input) - 自然言語の日付をパースするためのスマートな日付入力ディレクティブ。
* [color-picker](https://github.com/acrodata/color-picker) - もう一つの美しい色選択器。
* [ngx-pattern-lock](https://github.com/nicotole/ngx-pattern-lock) - 軽量で、完全にレスポンシブであり、カスタマイズ可能なAndroid風パターンロックコンポーネント（Angular用）。
* [smt-select](https://github.com/sametacar/smt-select) - 高性能で軽量かつカスタマイズ可能なAngularセレクトコンポーネント。内部に仮想スクロールと検索機能を備えている。
* [ngx-mat-searchable-select](https://github.com/khalilElmouedene/ngx-mat-searchable-select) - 無限スクロール、デバウンス検索、「アイテムなし」というフィードバック、静的／モックデータ対応を備えた再利用可能なAngular Materialセレクトコンポーネント。
* [mat-password-meter](https://github.com/ngx-zen/mat-password-meter) - Angular パスワード強度メーター ([zxcvbn](https://github.com/dropbox/zxcvbn), NIST準拠、カスタマイズ可能)
* [nicematic-emoji-picker](https://github.com/myposty/nicematic-emoji-picker) - 929個のエモジをサポートし、自動テーマ、i18n、レスポンシブデザインを備えたAngular 17以降向けの高性能・ゼロ依存エモジ選択器。
* [ngx-starflow](https://github.com/ahmadfakher/ngx-starflow) - 高精度で分数星評価を表示する軽量Angularコンポーネ及。
* [combobox](https://github.com/ng-matero/combobox) - マルチセレクトと自動補完機能を内蔵した、すべてを網羅したAngularセレクトソリューション。
* [BlossomColorPicker](https://github.com/dayflow-js/BlossomColorPicker) - Web向けに提供される、洗練された花咲く色選択器。Angular、React、Vue、Svelte向けに軽量ラッパーを備えたスタンドアローンJSライブラリ。
* [ngx-intl-phone-input](https://github.com/JoaoHenriqueAlmeida/ngx-intl-phone-input) - アクセシブルでヘッドレスのAngular国際電話入力。CDKを活用した国選択機能を備えている。
* [ngx-colors2](https://github.com/DominicWrege/ngx-colors) - Angular 20+向けにアップデートされた、マテリアルスタイルのAngular色選択器。シグナルを使用し、アニメーション依存なし。
* [ngx-signal-datetimepicker](https://github.com/dominikmodrzejewski99/ngx-signal-datetimepicker) - シグナルフォームに基づいたAngular日時選択器 — 日付と時刻を1つのコントロールで、ゼロ依存、WCAG 2.2 AAAを標準で備える。
* [ngx-multi-field-dropdown](https://github.com/luismtapiab/ngx-multi-field-dropdown) - マルチフィールド検索をサポートするカスタマイズ可能なAngular検索可能なドロップダウンコンポーネント。
* [angular-multiselect-dropdown](https://github.com/alexandroit/angular-multiselect-dropdown) - テンプレート駆動および反応型フォームに最適化された、メンテナンスされたAngularマルチセレクトドロップダウン。
* [@koenz/angular-datepicker](https://github.com/koenz/angular-datepicker) - Angular 21+向けのアニメーション付き日付選択器。
* [ngx-dual-rangepicker](https://github.com/olivierpetitjean/ngx-dual-rangepicker) - Angular 20+およびAngular Material M3向けのダブルカレンダー日付範囲選択器。
* [ngx-libs-workspace](https://github.com/dineeek/ngx-libs-workspace) - 小さな反応型フォームコントロールファミリー—シグナルフォームに基づき構築され、CSSカスタムプロパティでカスタマイズ可能で、Angular Material、Angular CDK、 `ControlValueAccessor` を使用しない
* [@some-angular-utils/date-range-picker](https://github.com/some-angular-utils/date-range-picker) - 反応型フォームに直接統合される日付範囲選択器。

### JSONフォーム <a id="json-forms"></a>

* [ngx-formly](https://github.com/ngx-formly/ngx-formly) - Angular向けのJSON駆動型動的フォーム。
* [formio](https://github.com/formio/angular) - Angular向けのJSON駆動フォーム。
* [fluent-form](https://github.com/fluent-form/fluent-form) - Fluent APIまたはJSONを使ってAngularで動的フォームを構築する。
* [jsonforms](https://github.com/eclipsesource/jsonforms) - React、AngularおよびVueに対応したカスタマイズ可能なJSONスキーマベースのフォーム
* [jsonforms-angular-seed](https://github.com/eclipsesource/jsonforms-angular-seed) - AngularベースのJSONフォームのサンプルアプリ
* [ng-formworks](https://github.com/zahmo/ng-formworks) - Angular [JSON Schema](https://json-schema.org/) フォームビルダー。 [Angular Schema Form](http://schemaform.io/examples/bootstrap-example.html)、 [React JSON Schema Form](https://rjsf-team.github.io/react-jsonschema-form/)、 [JSON Form](https://ulion.github.io/jsonform/playground/) と類似であり、ほぼAPI互換
* [DynamicAngularForm](https://github.com/Brrake/DynamicAngularForm) - 関連する値を含むJSONを渡すことで動的フォームを作成
* [dynamic-forms](https://github.com/dynamic-forms/dynamic-forms) - JSONに基づく動的フォームを実現するAngularプロジェクト
* [json-forms-zorro-wrapper](https://github.com/wojtek1150/json-forms-zorro-wrapper) - Ng Zorro向けのJSONフォームライブラリのラッパー
* [ngx-formwork](https://github.com/TheNordicOne/ngx-formwork) - JSONまたはTypeScript構成から構築されたAngularの反応フォームフレームワーク
* [ngx-formbar](https://github.com/TheNordicOne/ngx-formbar) - 宣言型反応フォームを生成する非常に柔軟なフレームワーク
* [formitiva](https://github.com/formitiva/formitiva-monorepo) - JSONスキーマからフォームを構築するためのフレームワークに依存しないランタイムエンジン
* [filter](https://github.com/some-angular-utils/filter) - フィールドを一度定義することで、すべての検索時に使用可能なJSONオブジェクトとURLクエリ文字列を取得
* [ngx-json-forms](https://github.com/Raghav-Pal-dev/ngx-json-forms) - 40以上のフィールドタイプ、高度なバリデーション、条件付き論理、ウィザード、リピーターを備えたテンプレートなし、JSON駆動のAngularフォームエンジン

### フォーム検証 <a id="form-validation"></a>

* [ngx-valdemort](https://github.com/Ninja-Squad/ngx-valdemort) - シンプルでクリーンなAngularバリデーションエラーメッセージ
* [validointi](https://github.com/validointi/validointi) - テンプレート駆動フォームのバリデーションを支援するライブラリ
* [angular-reactive-validation](https://github.com/davidwalschots/angular-reactive-validation) - HTMLを大量に書く必要のないことで、反応フォームのバリデーションを簡略化するライブラリ
* [ngx-formcontrol-errors](https://github.com/dgonzalez870/ngx-formcontrol-errors) - Angularフォームコントロールにおけるエラーを表示するためのディレクティブ
* [ngx-validator-pack](https://github.com/dynimorius/ngx-validator-pack) - 使用を簡素化し、迅速にカスタマイズ可能なバリデーションのコレクション
* [ngx-reactive-form-class-validator](https://github.com/abarghoud/ngx-reactive-form-class-validator) - [class-validator](https://github.com/typestack/class-validator) ライブラリを使用してAngular反応型フォームを動的にバリデーションするための軽量ライブラリ
* [ng-error-tooltips](https://github.com/mkeller1992/ng-error-tooltips) - ユーザーに親しみやすいバリデーションメッセージを表示するAngular反応フォームライブラド
* [ng-reactive-form-validate](https://github.com/vbnr/ng-reactive-form-validate) - カスタマイズ可能なメッセージ、Transloco統合、スタイル化されたエラーラベルを備えたフォームバリデーションを簡素化するAngularライブラリ
* [angular-password-checker](https://github.com/akehir/angular-password-checker) - ハッキングされたパスワードを再利用するユーザーを防ぐためのシンプルなAngularディレクティブ
* [translation-validation](https://github.com/RiskChallenger/translation-validation) - Angularフォームにおける任意の言語での自動バリデーションメッセージ
* [polish-validators](https://github.com/joker876/polish-validators) - ポーランド向けフォーマットに特化したバリデーションライブラリ。Angular向けラッパーとして [ngx-polish-validators](https://www.npmjs.com/package/ngx-polish-validators) で提供
* [ngx-mat-errors](https://github.com/Totati/ngx-mat-errors) - `MatFormField` 内でのエラーメッセージの表示にシンプルかつ柔軟なアプローチを提供
* [oop-validator](https://github.com/visaruruqi/oop-validator) - Vue、React、Angularなど、あらゆるUIフレームワークに適用可能な強力で柔軟なバリデーションライブラリ、完全なフロントエンドバリデーション
* [ngx-cross-field-validation](https://github.com/soc221b/ngx-cross-field-validation) - フォームコントロールに対して条件付き、等値、不等値、および順序ベースのバリデーションを提供するAngularライブラリ
* [validauth](https://github.com/adiksuu/validauth) - JavaScriptアプリケーション向けの軽量かつ強力な認証バリデーション
* [ngx-validation-messages](https://github.com/lagoshny/ngx-validation-messages) - このモジュールは、1つのコンポーネントを使用することでフォームバリデーションメッセージの表示を簡略化します
* [ngx-validx](https://github.com/EngYouniss/ngx-validx-package) - 軽量で高パフォーマンスであり、自動的にフォームバリデーションエラーを処理するAngularライブラリ
* [kits-ngx-validation-package](https://github.com/EngYouniss/kits-ngx-validation-package/tree/main/projects/kits-ngx-validation) - 状態管理、メッセージ、可視性戦略、ローカライズ、再利用可能なフォームフィールドを含む中央集約型バリデーションシステムを提供

### アイコン <a id="icons"></a>

* [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome) - Font Awesome 5+の公式Angularコンポーネント
* [ng-icons](https://github.com/ng-icons/ng-icons) - Angular向けの究極のアイコンライブラリ
* [angular-svg-icon](https://github.com/czeckd/angular-svg-icon) - SVGをインラインに表示できるAngularコンポーネ及サービス。CSSで簡単にスタイル設定が可能
* [ng-hero-icons](https://github.com/dimaslz/ng-heroicons) - Angularアプリケーションに [Heroicons](https://heroicons.com) を使用してください
* [ngx-fluent-ui](https://github.com/bennymeg/ngx-fluent-ui) - Microsoft Fluent UIアイコン向けのAngularおよびオンラインライブラリ
* [angular-line-awesome](https://github.com/marco-martins/angular-line-awesome) - Angular Line Awesomeは、 [Line Awesome](https://icons8.com/line-awesome) イコンを管理するAngularコンポーネント
* [angular-techs-logos](https://github.com/criar-art/angular-techs-logos) - 技術関連のアイコンを収録したライブラリ
* [ngx-x-browser-svg-mask](https://github.com/bmartinson/ngx-x-browser-svg-mask) - SVGマスクを作成する際に、クロスブラウザ互換性を容易に達成するためのディレクティブ
* [Semantic Icons](https://github.com/khalilou88/semantic-icons) - Angularプロジェクト向けの無料オープンソースアイコンコレクション（コンポーネントセレクタとSVGタグを使用）
* [coolshapes](https://github.com/ngxpert/coolshapes) - [coolshapes](https://coolshap.es/) から派生した、見た目がカッコよく、細かいグラデーションを含む抽象的な形状を、開発者が簡単に使用できるAngularライブラリ
* [lucide](https://github.com/lucide-icons/lucide) - オープンソースのアイコンライブラリで1000以上のSVGが含まれており、簡単に統合できる [official Angular package](https://lucide.dev/guide/packages/lucide-angular) を備えています.
* [@ngverse/icons](https://github.com/ngverse/icons) - 人気のオープンソースアイコンを通常のコンポーネントとして使用できるAngularライブラリ
* [ngxi](https://github.com/adrian-ub/ngxi) - Angular向けに包括的なSVGアイコンセット。数千の人気アイコンをスムーズに統合しています
* [animated-icons](https://github.com/ajitzero/animated-icons) - Angular向けのアニメーションアイコン（ [moving icons](https://www.movingicons.dev/) に基づく）.
* [@hugeicons/angular](https://github.com/hugeicons/hugeicons/tree/main/packages/angular) - 5,400以上の無料MITライセンス付きのストローク丸いアイコン（Angular用）
* [@quikturn-sdk/logos-angular](https://github.com/quikturn-sdk/Company-Logos) - TypeScript SDK（ [Quikturn Logos API](https://getquikturn.io/) ）—ドメイン名から任意の企業のロゴを取得できます.
* [GeoIcons](https://geoicons.io) - すべての国、領土、世界地域に対して地図アイコンを提供。Tree-shakable Angularスタンドアローンコンポーネント
* [ngx-iconify-stack](https://github.com/WanderleeDev/ngx-iconify-stack) - 軽量でSSR対応可能なAngular用の [Iconify](https://iconify.design/) のラッパー.
* [vadivam](https://github.com/praveenjuge/vadivam) - SVG、React、React Native、Vue、Svelte、Solid、Angular、Astro、Preactに適合するピクセル正確な24pxアウトラインアイコン
* [ycon.cc](https://ycon.cc) - 300,000以上のIconifyアイコンを検索し、React、Vue、Symfony、Next.js、Astro、Svelte、Angular、Laravelなどに即用可能なコードをコピーできます

### 画像 <a id="images"></a>

* [cloudinary](https://cloudinary.com/documentation/angular_integration) - CloudinaryのAngular SDK
* [ng-cropper](https://github.com/DanielGabbay/ng-cropper) - Angular用の画像カッター（ `CropperJS` をベースに構築）で、カスタマイズ可能なインターフェースとオプションのツールバーを備え、スムーズなカットが可能になります.
* [ngx-advanced-img](https://github.com/bmartinson/ngx-advanced-img) - HTML img機能を拡張するさまざまな属性ディレクティブを提供するAngularディレクティブセット
* [ngx-avatars](https://github.com/Heatmanofurioso/ngx-avatars) - [ngx-avatar](https://github.com/HaithemMosbahi/ngx-avatar) の精神的継承者です.
* [ngx-broken-img](https://github.com/andreagrossetti/ngx-broken-img) - 画像のURLが404エラーを返した場合、プレースホルダーを画像のsrcに適用するAngularディレクティブ
* [ngx-image-compression](https://github.com/ShreyashThorat-17/ngx-image-compression) - Angular用の軽量画像圧縮および変換ライブラリ
* [ngx-image-cropper](https://github.com/Mawi137/ngx-image-cropper) - Angular用の画像カッター
* [ngx-image-magnifier](https://github.com/SeriousSez/ngx-image-magnifier) - キーボード操作をサポートし、スマートな配置、モバイル最適化、スムーズなGPU加速アニメーションを備えたAngular画像拡大ディレクティブ
* [ngx-img-cropper](https://github.com/web-dave/ngx-img-cropper) - Angular用の画像カッターツール
* [@jjmhalew/ngx-lightbox](https://github.com/jjmhalew/ngx-lightbox) - Angular >= 18（zoneless）で使用できる [lightbox2](https://github.com/lokesh/lightbox2) の実装を移植したものです.
* [@necraidan/ngx-lightbox](https://github.com/necraidan/ngx-lightbox) - ゼロ依存で、ズーム、パン、ピンチズーム、キーボードナビゲーションをサポートする軽量かつアクセシブルなAngular 21+用のライトボックス
* [ngx-pinch-zoom](https://github.com/medDV-GmbH/ngx-pinch-zoom) - タッチスクリーンジェスチャーを用いて画像のズームと配置を可能にするモジュール
* [ngx-smart-cropper](https://github.com/kurti-vdb/ngx-smart-cropper) - カット、サイズ変更、ドラッグ＆リサイズ、グリッドオーバーレイ、アスペクト比サポートを備えたAngularのスタンドアローン画像アップローダー
* [unpic](https://unpic.pics/img/angular/) - 自動srcset、サイズ設定、CDN/CMS URL検出をサポートする、レスポンシブかつ高性能な画像を扱うAngularディレクティブ
* [ngx-image-fallback](https://github.com/joyblanks/ngx-image-fallback) - Angular用の画像フォールバックディレクティブ
* [ng-image-optimizer](https://github.com/Hasan-Kakeh/ng-image-optimizer) - 高パフォーマンスのAngular SSR画像最適化ツールで、 [Sharp](https://sharp.pixelplumbing.com/) を使用してNext.js風の体験を提供します.
* [ngx-ratio-image](https://github.com/gerd-siebert/ngx-ratio-image) - 固定アスペクト比のコンテナ内に可変アスペクト比の画像を表示するためのAngularライブラリ
* [ngx-image-forge](https://github.com/HoplaGeiss/ngx-image-forge) - アスペクト比の調整、回転、反転、エクスポートをサポートするゼロ依存のAngular画像編集ライブラリ。Signals-native
* [ng-smart-images](https://github.com/yadimon/ng-smart-images) - ハッシュ化されたアセット、ランタイムマニフェスト、オプションのAngularヘルパーを備えたCLI中心の画像最適化

### キーボード・マウス <a id="keyboard-mouse"></a>

* [angular-touch-keyboard](https://github.com/mohsen77sk/angular-touch-keyboard) - Angularアプリケーション向けの仮想キーボード
* [ngx-contextmenu](https://github.com/PerfectMemory/ngx-contextmenu) - Angular用のコンテキストメニューコンポーネント
* [ngx-keys](https://github.com/mrivasperez/ngx-keys) - キーボードショートカットを管理する反応型Angularライブラリ（SignalsベースUI統合）
* [focusly](https://github.com/mad-vx/focusly) - ウェブアプリケーションに直感的でキーボード駆動のナビゲーションを提供する軽量Angularライブラリ
* [ngx-arrow-state](https://github.com/jaychase/ngx-arrow-state) - 矢印キーでターミナル/シェルのような入力履歴ナビゲーションを提供し、テキストエリアにはCtrl+Enterによるフォーム送信をサポートするAngularライブラリ
* [angular-onscreen-material-keyboard](https://github.com/eFaps/angular-onscreen-material-keyboard) - Angular Materialを使用したAngularアプリケーション向けの画面上の仮想キーボード
* [@TanStack/hotkeys](https://github.com/TanStack/hotkeys) - 型安全なキーボードショートカットライブラリ（素晴らしい開発ツール付き）
* [ngx-keyboard-shortcuts](https://github.com/phalgunv/ngx-keyboard-shortcuts) - アーカイブされた [ngx-keyboard-shortcuts](https://github.com/milestechnologies/ngx-keyboard-shortcuts) パッケージの積極的に維持されているフォークで、Angular 16以降のサポートと現代的なツールを追加しています.
* [ngx-command-palette](https://github.com/theryansmee/ngx-command-palette) - ゼロ設定でキーボード操作可能なAngularコマンドパレット。自動登録ルート、カスタムコマンド、非同期検索、文脈に応じた表示をサポート。

### レイアウト <a id="layout"></a>

* [angular-split](https://github.com/bertrandg/angular-split) - Angularのスプリットコンポーネント。
* [ngx-layout](https://github.com/ngbracket/ngx-layout) - Angular FlexLayoutのクローン。
* [ng-sortgrid](https://github.com/kreuzerk/ng-sortgrid) - すべてのアイテムをドラッグ＆ドロップで並べ替え可能なグリッド。
* [angular-gridster2](https://github.com/tiberiuzuld/angular-gridster2) - Angular gridster 2.
* [angular-grid-layout](https://github.com/katoid/angular-grid-layout) - レスポンシブグリッド。Angularアプリケーション向けにドラッグ可能かつリサイズ可能なアイテムを提供。
* [gridstack](https://github.com/gridstack/gridstack.js/tree/master/angular/) - モバイル対応のTypeScriptライブラリ。Angular対応のドラッグ＆ドロップ、マルチカラムレスポンシブダッシュボードを提供。
* [ngx-flickering-grid](https://github.com/omnedia/ngx-flickering-grid) - アニメーションされたグリッドパターン背景を持つコンテナを作成するためのシンプルなコンポーネントライブラリ。
* [ngx-gridpattern](https://github.com/omnedia/ngx-gridpattern) - パターン背景を持つコンテナを作成するためのシンプルなコンポーネントライブラリ。
* [ngx-retro-grid](https://github.com/omnedia/ngx-retro-grid) - カスタマイズ可能な色、回転、スムーズアニメーションを備えた3Dパースペクティブグリッドコンポーネント。 nostalgicsやフェューチャリストな効果に適した。
* [ngx-bottom-sheet](https://github.com/ArslanAmeer/ngx-bottom-sheet) - 高度にカスタマイズ可能で軽量なAngularサービス。モバイル対応のボトムシートコンポーネントを提供。
* [ngx-swipe-menu](https://github.com/charlesschaefer/ngx-swipe-menu) - 「左にスワイプでアクション」体験を作成するためのコンポーネント。
* [berg-layout](https://github.com/blidblid/berg-layout) - このモノリポジトリには、 [Berg Layout for Angular](https://www.npmjs.com/package/@berg-layout/angular) 、React、およびWeb Componentsのバージョンが含まれています.
* [static-columns](https://github.com/darekf77/static-columns) - AngularとFlexBoxで静的幅を持つカラムを定義。
* [ngx-flex-layout](https://github.com/jtc10005/ngx-flex-layout) - EOL後のサポートを提供する [Angular Flex Layout](https://github.com/angular/flex-layout) の移植です.
* [ng-polymorpheus](https://github.com/taiga-family/ng-polymorpheus) - Angularにおけるポリモーフィックテンプレート用の小さなライブラリ。
* [gui](https://github.com/acrodata/gui) - 設定可能なパネル用のJSON駆動GUI。
* [ngx-zoomable](https://github.com/json-k/ngx-zoomable) - 拡大・スクロール可能なコンテナコンポーネ及。Angularアプリケーション向け。
* [ngx-material-drawer](https://github.com/ansarisufiyan777/ngx-material-drawer) - カスタマイズ可能なAngular Materialのドロワーとツールバー。
* [@marxlnfcs/ngx-grid](https://github.com/marxlnfcs/ngx-grid) - 現代的なグリッドレイアウトを実現するシンプルなAngularグリッドモジュール。
* [lightweight-grid-layout](https://github.com/liketiger/lightweight-grid-layout) - フレームワークや非対応でも動作する、依存関係のないヘッドレスグリッドレイアウトライブラリ。JavaScript/TypeScriptで構成。レンダリングとスタイル設定はユーザーに任せる。
* [ng-flex-layout](https://github.com/alessiobianchini/ng-flex-layout) - Flexboxとメディアクエリのオブザーバブルをベースにした、レスポンシブで柔軟なレイアウトAPIを提供するAngularライブラリ。
* [dockview-angular](https://www.npmjs.com/package/dockview-angular) - タブ、グループ、グリッド、スプリットビューをサポートするゼロ依存レイアウトマネージャー
* [ngx-compactable-row](https://github.com/MikeVensel/ngx-compactable-row) - スペースが限られている場合、余分なボタンをメニューに移動するレスポンシブボタン行を提供
* [ng-cmdk](https://github.com/wadie/ng-cmdk) - Angular向けの高速で組み合わせ可能な未スタイルコマンドメニュー — [cmdk](https://github.com/pacocoursey/cmdk) の移植です.
* [ngx-dock-layout](https://github.com/mickael-pezzoni/ngx-dock-layout) - IDE風にリサイズ可能なパネルレイアウトを作成するAngularライブラリ
* [layn](https://github.com/laynjs/layn) - フレームワークに依存しないレイアウトエンジン。バーチャル化された、SSR決定性のマゾンリーおよび正当化されたパッキングレイアウトを備えている

### ローダー <a id="loaders"></a>

* [angular-busy](https://github.com/tiberiuzuld/angular-busy) - プロミス／オブザーバブル中の任意の要素にバッシ／ロードインジケータを表示
* [angular-smart-skeleton](https://github.com/Nikmakwana94/angular-smart-skeleton) - 動的な行、列、カード、リスト、テーブル、カスタムレイアウトに対応する柔軟で再利用可能なAngularのスケルトンローダー
* [angular-svg-round-progressbar](https://github.com/crisbeto/angular-svg-round-progressbar) - SVGを使用して円形プログレスバーを作成するAngularモジュール
* [boneyard](https://github.com/0xGF/boneyard) - React、Preact、Vue、Svelte、Angular、React Nativeに対応する自動生成スケルトンローダーフレームワーク
* [groupix-spinner-library](https://github.com/ArshdeepGrover/groupix-spinner-library) - スムーズなロードアニメーションを実現する軽量Angularスピナーライブラリ
* [loaderx-arun](https://github.com/Arun44764/loaderx-arun) - 500以上の次世代アニメーションUIローダー
* [loadingTrace](https://github.com/lucapiciollo/loadingTrace) - ゼロテンプレート、76のアニメーション、自動追跡、名前付きオーバーレイ、確定プログレス、実行時設定、シグナルを備えたAngularロードオーバーレイ
* [ng-overlay-skeleton-loader](https://github.com/ebrahim-salehipanah/ng-overlay-skeleton-loader) - カスタマイズ可能なスケルトンロード状態をコンポーネントに追加する軽量Angularディレクティブ
* [ngx-fastboot](https://github.com/KernelPanic92/ngx-fastboot) - スタートアップパフォーマンスを向上させる動的Angular設定ローダー（設定を別チャンクでコンパイル）
* [ngx-loader](https://github.com/nisicadmir/ngx-loader) - 状態管理用サービスを備えた基本的なローダー
* [ngx-loader-indicator](https://github.com/jsdaddy/ngx-loader-indicator) - Angularアプリケーション向けに素晴らしいローダー。ラッパーなし、ただあなたの要素だけ。
* [ngx-loading-bar](https://github.com/aitboudad/ngx-loading-bar) - Angular向けの自動ページロード／進行バー
* [ngx-loading-buttons](https://github.com/dkreider/ngx-loading-buttons) - Angular Materialボタンにロードスピナーを追加する軽量Angularライブラリ
* [ngx-loading-overlay](https://github.com/shaman-apprentice/ngx-loading-overlay) - HTMLにロードオーバーレイを追加するAngularディレクティブ
* [ngx-progressbar](https://github.com/MurhafSousli/ngx-progressbar) - リアルな滴下アニメーションを備えたナノスケールプログレスバー
* [ngx-promise-buttons](https://github.com/meysamsahragard/ngx-promise-buttons) - Angular向けの冷却されたロードボタン
* [ngx-signal-loading-bar](https://github.com/KennySchl/ngx-signal-loading-bar) - Angular用の軽量で、シグナルベースのゾーンレスロードバー
* [ngx-skeleton-loader](https://github.com/willmendesneto/ngx-skeleton-loader) - Angularアプリケーションに自動的に適応する、美しいアニメーション付きロードスケルトンを作成します
* [ngx-source](https://github.com/mehrabisajad/ngx-source) - アプリケーション実行中にJavaScriptおよびCSSを動的にロードします
* [ngx-spinner](https://github.com/napster2210/ngx-spinner) - Angular用のロードスピナー用のライブラリ
* [ngx-spinner-loading](https://github.com/thalsi/ngx-spinner-loading) - グローバル、セクション、インラインローダー、HTTPインターセプタ、シグナルベースの状態を備えた軽量かつカスタマイズ可能なAngularスピナー
* [ngxsmk-skeleton-loader](https://github.com/Cholki2025/ngxsmk-skeleton-loader) - SCSSアニメーションと簡単なテーマ設定を備えた軽量スケルトンローダー
* [ngx-ui-loader](https://github.com/t-ho/ngx-ui-loader) - フォアグラウンド／バックグラウンドモード、進行バー、マルチローダーをサポートする柔軟なAngularローダー／スピナー
* [phantom-ui](https://github.com/Aejkatappaja/phantom-ui) - 構造を認識するスケルトンローダー。1つのWebコンポーネント。すべてのフレームワークに対応。
* [shimmer-from-structure](https://github.com/darula-hpp/shimmer-from-structure) - React、Vue、Svelte、およびAngular用のシャイマー／スケルトンライブラリ。コンポーネントの実行構造に自動的に適応します
* [skedapt](https://github.com/z4k7/skedapt) - Angular用のゼロ設定アダプティブスケルトンローダー。ホスト要素に装飾され、スケルトンがコンテナの自然なレイアウトに自動的に適合します
* [skeletonizer](https://github.com/lukaVarga/skeletonizer) - VueおよびAngularアダプタを備えた、軽量かつカスタマイズ可能なスケルトンビュー生成パッケージ
* [skeleton-styler](https://github.com/HoaiNam071001/skeleton-styler) - カスタマイズ可能なスタイルとアニメーションを備えた、フレームワークに依存しない軽量スケルーンロードUI生成ライブラリ

### ロガー <a id="loggers"></a>

* [lumberjack](https://github.com/ngworker/lumberjack) - 柔軟なAngularログライブラリ。内蔵ドライバーとカスタムログドライバーへの簡単なカスタマイズをサポート。
* [log4ngx](https://github.com/secondbounce/log4ngx) - Log4j、Log4netなどに使われるコンセプトに基づいたAngularプロジェクト用のTypeScriptログフレームワーク
* [candy-logger](https://github.com/shehari007/candy-logger) - JavaScript／TypeScript用の軽量ログライブラリ。ブラウザではポップアップUI、Nodeでは強化されたターミナル出力に対応。
* [@pubfunc/ngx-common-log](https://github.com/pubfunc/ngx-libs/tree/master/packages/common/log) - 複数のトランスポート、ログレベル、名前空間、依存性注入をサポートする柔軟なAngularアプリケーション用ログライブラリ

### 地図 <a id="maps"></a>

* [cesium-angular-example](https://github.com/Developer-Plexscape/cesium-angular-example) - LATESTバージョンのAngularとの統合を示すシンプルなウェブアプリケーションです. [Cesium](https://cesium.com)
* [ngx-mapbox-gl](https://github.com/Wykks/ngx-mapbox-gl) - Angularとのバインディング（ `mapbox-gl-js` ）.
* [ngx-leaflet](https://github.com/bluehalo/ngx-leaflet) - Angular用のLeafletのコアパッケージ
* [ngx-leaflet-markercluster](https://github.com/bluehalo/ngx-leaflet-markercluster) - Angularプロジェクトへの [leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) の統合を提供します.
* [ngx-maplibre-gl](https://github.com/maplibre/ngx-maplibre-gl) - maplibre-glのAngularバインディング
* [ng-azure-maps](https://github.com/arnaudleclerc/ng-azure-maps) - azure-maps-controlsのAngular用HTML駆動ラッパー。Angularアプリケーションへの簡単な統合を可能にします
* [ngx-gaia-gis](https://github.com/Olympus-Analytics/ngx-gaia-gis) - 強力な [OpenLayers](https://openlayers.org/) ライブラリを使用して地図の作成とインタラクションを簡易化するAngularサービスです.
* [ngx-google-maps-places](https://github.com/lekhmanrus/ngx-google-maps-places) - Google Maps Places APIのAngular用ラッパー。Google Placesの統合を簡略化します
* [angular-yandex-maps](https://github.com/ddubrava/angular-yandex-maps) - Yandex.Maps Angular コンポーネント。Yandex.Maps JavaScript API を実装したもの。
* [workletjs](https://github.com/workletjs/workletjs) - OpenLayers とのシームレスな統合を可能にする Angular マップ コンポーネント ライブラリ。開発者がインタラクティブかつカスタマイズ可能なマップを作成できるようにする。
* [ng-simple-maps](https://github.com/hanafnafs/ng-simple-maps) - Angular アプリケーション向けの美しい、軽量な SVG ワールドマップ。

### Markdown <a id="markdown"></a>

* [angular-markdown-editor](https://github.com/ghiscoding/angular-markdown-editor) - Angular マークダウン エディタ。すべてを一括で提供するマーカード編集とプレビュー機能。
* [markular](https://github.com/larswaechter/markular) - Angular 用の軽量マーカードエディタ。
* [mdbook-angular](https://github.com/bgotink/mdbook-angular) - [mdbook](https://rust-lang.github.io/mdBook/index.html) のレンダラーで、Angularコードサンプルを実行可能なAngularアプリケーションに変換します.
* [md-juice](https://github.com/aruidev/md-juice) - マーカード HTML 出力用の軽量、トークン化された CSS テーマ。
* [ngx-markdown](https://github.com/jfcere/ngx-markdown) - Marked、Prism.js、Emoji-Toolkit、KaTeX、Mermaid および Clipboard.js を組み合わせた Angular ライブラリ。
* [ngx-markdown-pages](https://github.com/jamesmandrews/ngx-markdown-pages) - マーカードファイルをルート可能なページとしてレンダリングする Angular ライブラリ。
* [ngx-md-editable](https://codeberg.org/tomaszatoo/ngx-md-editable) - 軽量な Angular コンポーネントでマーカードを編集し、表現力のある HTML コンテンツをレンダリング。
* [ngx-md-slides](https://github.com/ngx-md-slides/ngx-md-slides) - マルチ言語プレゼンテーションを作成する際、マーカード、HTML、およびライブ例を提供する Angular コンポーネントを使用。
* [ngx-remark](https://github.com/ericleib/ngx-remark) - カスタム Angular テンプレートでマーカードをレンダリング。
* [ngx-streamdown](https://github.com/dina-kar/ngx-streamdown) - AI駆動アプリケーション向けに最適化されたストリーミングMarkdownレンダラーである [Streamdown](https://streamdown.ai/) のAngular版です.
* [mark-down](https://github.com/mzebley/mark-down) - フレームワークに依存しないスニペットエンジンで、Angular アダプタがビルド時にマーカードをインデックス化し、実行時にHTMLをレンダリング（オプションでセイフティ処理）。
* [m-render](https://github.com/Foblex/m-render) - Angular コンポーネンツおよびコードスニペットに拡張されたサポートを備えたマーカードレンダリングライブラリ。
* [markstream](https://github.com/Simon-He95/markstream-vue) - マーカードがストリーミング中にもレンダリング。
* [streamdown-angular](https://github.com/XurshidJurayev1/streamdown-angular) - AIチャットUI向けに構築されたストリームセーフなMarkdownレンダリング（ [Vercel Streamdown](https://github.com/vercel/streamdown) のAngular版）.

### メディア <a id="media"></a>

* [angular-audio-context](https://github.com/chrisguttandin/angular-audio-context) - Web Audio API の AudioContext を Angular でラップしたもの。
* [silicon-audio-wave](https://github.com/joldibaev/silicon-audio-wave) - Silicon から提供される非常にシンプルなオーディオ波形システム。
* [Vidstack](https://github.com/vidstack/player) - カスタムウェブメディアプレイヤー向けのUIコンポーネントを備えたフレームワーク、さらにカスタマイズ可能なデフォルトレイアウトを提供します。See [installation guide](https://www.vidstack.io/docs/player/getting-started/installation/angular?styling=default-layout&provider=video).
* [@dytesdk/web-core](https://www.npmjs.com/package/@dytesdk/web-core) - AngularアプリケーションへDyteのLivestream SDKを追加する方法を示す[クイックスタート](https://docs.dyte.io/guides/livestream/client-setup/angular)。
* [voicecapture-angular](https://github.com/angular-a11y/voicecapture-angular) - 声入力とトランスクリプションの処理にカスタマイズ可能なオプションを提供し、ユーザーインターフェースの強化に柔軟なソリューションを提供。
* [ngx-cam-shoot](https://github.com/RzoDev/ngx-cam-shoot) - デバイスのカメラを使用する際の簡易な Angular コンポーネント。画像のキャプチャと保存を加速する。
* [cometchat-uikit-angular](https://github.com/cometchat/cometchat-uikit-angular) - [CometChat](https://www.cometchat.com/) Angular UI Kit は、迅速かつ信頼性の高い、完全に機能するチャット統合用の事前構築されたUIを提供しています.
* [ngx-user-camera](https://codeberg.org/tomaszatoo/ngx-user-camera) - 現代的な Angular 20+ カメラコンポーネント。前後カメラの切り替え、オプションのキャンバスレンダリング、ゾーンレス反応シグナルを備える。
* [ngx-rumbletalk](https://github.com/RumbleTalk/ngx-rumbletalk) - An Angularライブラリによる [Rumbletalk](https://rumbletalk.com/) グループチャットの実装.
* [ng-three-model-cropper](https://github.com/AlexRynas/ng-three-model-cropper) - An Angular `Three.js` ライブラリで、GLB/FBX対応の3Dモデルカットと三角形除去エクスポートを可能にします.
* [@ngx-core/media-optimizer](https://github.com/barbozaa/media-optimizer-workspace) - プロフェッショナルなフレームワークに依存しない画像最適化、変換、圧縮ライブラリ。
* [ngx-streaming-player](https://github.com/jhonsferg/ngx-streaming-player) - HLS、DASH、MP4、YouTubeを1つのAPIで扱える統合型プラグアンドプレイ型ビデオプレイヤーコンポーネント
* [ngx-pro-media-player](https://github.com/kamal-dev1/ngx-pro-media-player) - Angularによるメディアプレイヤー。音声、動画、キュー、クロスフェード、歌詞、右から左への表示対応をサポート
* [MediaSFU-Angular](https://github.com/MediaSFU/MediaSFU-Angular) - AngularによるWebRTCによるビデオ会議、ウェビナー、ライブストリーム、チャット、スクリーン共有、録画、ブレイクアウトルーム、ホワイトボード、ポール、リアルタイム字幕、翻訳をサポートするSDK
* [ngx-sync-videos](https://github.com/goodbaguette/ngx-sync-videos) - 複数の動画を同時に再生し、同期・オフセットを実現するAngularディレクティブ

### 複合ユーティリティ <a id="mixed-utilities"></a>

* [Official Angular Components repository](https://github.com/angular/components) - Angular向けのコンポーネントインフラとMaterial Designコンポーネント
* [rx-angular](https://github.com/rx-angular/rx-angular) - パフォーマンス、テンプレートレンダリング、開発体験に焦点を当てた完全に反応型アプリ向けのRxAngularツールキット
* [ng-web-apis](https://github.com/taiga-family/ng-web-apis) - AngularでWebAPIを消費するための共通ユーティリティセット
* [daffodil](https://github.com/graycoreio/daffodil) - Angular Ecommerce PWAフレームワーク
* [ngworker](https://github.com/ngworker/ngworker) - @ngworker NPM組織のモノリスリポジトリ。Angularアプリケーションおよびテスト用パッケージ
* [jscutlery devkit](https://github.com/jscutlery/devkit) - Angular開発者にとって便利なツールセット
* [lithium-angular](https://github.com/lVlyke/lithium-angular) - Lithiumは、スムーズな反応型状態とイベントの相互作用を実現するユーティリティでAngularを簡略化
* [rxweb](https://github.com/rxweb/rxweb) - Angular、Vue、Reactプロジェクト向けに豊富な機能を備えたパッケージが多数存在
* [ngspot](https://github.com/DmitryEfimenko/ngspot) - 素晴らしいAngularライブラリのコレクション
* [ts-cacheable](https://github.com/angelnikolov/ts-cacheable) - プラットフォームに依存しないキャッシュライブラリとして人気がある
* [ngxtension-platform](https://github.com/ngxtension/ngxtension-platform) - Angular向けのユーティリティ
* [spartan](https://github.com/goetzrobin/spartan) - Angularフルスタック開発を支える最先端ツール
* [ngify](https://github.com/ngify/ngify) - Angularの機能をAngular以外の場面でも利用可能
* [angular-ru-sdk](https://github.com/Angular-RU/angular-ru-sdk) - 一般的なインタラクションパターン向けのツールチェーンセット。Angularの核心機能を抽象化し、プレゼンテーションバイアスを排除
* [dfts-common](https://github.com/Dafnik/dfts-common) - TypeScriptライブラリ（アイコンやその他のユーティリティ）のコレクション
* [dfx-common](https://github.com/Dafnik/dfx-common) - Angularライブラリのコレクションで、`dfx-qrcode` を含むものがあります.
* [sba-angular](https://github.com/sinequa/sba-angular) - [Sinequa's](https://www.sinequa.com/) によるAngularベースの検索ベースアプリケーション（SBA）フレームワーク.
* [ng-as](https://github.com/nigrosimone/ng-as) - テンプレート変数の型変換に用いるAngularのパイプとディレクティブ
* [angular-toolbox](https://github.com/pechemann/angular-toolbox) - Angularアプリ開発に役立つユーティリティを提供するライブラリ
* [ngx-lift](https://github.com/wghglory/ngx-lift) - `clr-lift` と `ngx-lift` は、Angularにユーティリティ、オペレーター、コンポーネントを追加し、開発を簡略化します.
* [firestitch](https://github.com/orgs/Firestitch/repositories) - 多くのオープンソースAngularソリューションが [Firestitch](https://firestitch.com/) から提供されています.
* [@studiohyperdrive/ngx-tools](https://github.com/studiohyperdrive/hyperdrive-opensource) - [Studio Hyperdrive](https://studiohyperdrive.be/) チームが開発・維持しているAngularベースのパッケージを複数提供する一元リポジトリです.
* [ngx-utility](https://github.com/OPI-PIB/ngx-utility) - フォーム、ゾーン、DOM操作、HTTPリクエストなどへのさまざまなヘルパー
* [ssv.ngx](https://github.com/sketch7/ssv.ngx) - [sketch7](https://github.com/sketch7) から提供されるライブラリの一元リポジトリ。 [ngx.command](https://github.com/sketch7/ssv.ngx/tree/master/libs/ngx.command#readme) はAngular向けのコマンドパターン実装であり、 [ngx.ux](https://github.com/sketch7/ssv.ngx/blob/master/libs/ngx.ux/README.md) はアプリ開発に必要なUXエッセンスとユーティリティを提供します.
* [ng-kit](https://github.com/js-smart/ng-kit) - Angular MaterialとBootstrap 5.xを使用して構築された再利用可能なAngularコンポーネント、日付、フォーム、文字列操作用のユーティリティクラス／関数
* [nxt-components](https://github.com/Liquid-JS/nxt-components) - さまざまなAngularコンポーネントを集めたコレクション
* [ngx-signal-plus](https://github.com/milad-hub/ngx-signal-plus) - Angular Signals向けの包括的なユーティリティライブラリで、拡張機能、オペレーター、ユーティリティを提供
* [ngx-nuts-and-bolts](https://github.com/infinum/ngx-nuts-and-bolts) - [Infinum](https://infinum.com/) が使用している、よく使われるAngular関連コードのコレクションです.
* [ngx-signals-plus](https://github.com/dszendrei/ngx-signals-plus) - 開発者の体験を向上させる追加のSignals
* [ng-tool-collection](https://github.com/domideimel/ng-tool-collection) - Angularで書かれた有用なツール
* [yaagoub](https://yaagoub.org/) - デコレーター、ディレクティブ、アイコン、サービス、OAuth 2.0を用いて開発を加速
* [@everllence/ngx-tools](https://github.com/everllence/ngx-tools) - このリポジトリには、Angular開発体験を高めるためのライブラリのコレクションが含まれています
* [ngx-oneforall](https://github.com/love1024/ngx-oneforall) - 再利用可能なパイプ、ディレクティブ、サービス、デコレーター、定数、エnumなどを持つAngularライブラリ
* [angular-signal-generators](https://github.com/DDtMM/angular-signal-generators) - Angular Signalsジェネレータは、Signalsとユーティリティを活用して、より高速でクリーンなコードを実現します
* [mmstack](https://github.com/mihajm/mmstack) - mmstackライブラリのためのモノリスリポジトリ
* [@shanieMoonlight/moonlight-repo](https://github.com/shanieMoonlight/moonlight-repo) - SpiderBabyのオープンソースAngularライブラリ、ユーティリティ、デモアプリケーションのモノリスリポジトリ
* [@jchpro/ng](https://github.com/jchpro/ng) - Angular向けのさまざまなライブラリの一元リポジトリ。 [example page](https://ng.jchpro.pl/) へアクセスして詳細を確認してください.
* [rxap](https://gitlab.com/rxap/packages) - ウェブおよびクラウドアプリ開発の負担を軽減するモジュールとツールのコレク類
* [ng-util](https://github.com/ng-util/ng-util) - Angular用のユーティリティセット
* [reactive-kit](https://github.com/max-scopp/reactive-kit) - 反応型Angularアプリケーション向けの軽量ユーティリティで、ボイラープレートを削減し、 `ngxtension` と良好に組み合わせます.
* [fireng](https://github.com/BhanukaDev/fireng) - Signalsを用いてレスポンシブ開発を簡素化するためのAngularライブラリのコレクション
* [xprng](https://github.com/ziv/xprng) - Angular向けのシンプルでスマートなコンポーネントのマイクロパッケージ
* [ngx-primeng-toolkit](https://github.com/md-redwan-hossain/ngx-primeng-toolkit) - TypeScriptによるAngularの状態管理用の包括的なユーティリティ、PrimeNGヘルパー、 `ng-select`、ストレージ、NgRxキャッシュを含むもの.
* [@ibenvandeveire opensource](https://github.com/IbenTesara/opensource) - [Iben Van de Veire](https://github.com/IbenTesara) チームが開発・維持している、Angularおよび非Angularのパッケージを複数提供する一元リポジトリです.
* [@farfadev/ngx-lib](https://github.com/farfadev/ngx-lib) - [Farfadev](https://github.com/farfadev) から提供されるAngularライブラリのリポジトリで、どのアプリケーションにも利用可能です.
* [ngx-security](https://github.com/xbranch/ngx-security) - 認証、ロール、権限管理用のモジュラリーライブラリ
* [ng-catbee](https://github.com/catbee-technologies/ng-catbee) - [Catbee](https://catbee.in/docs/@ng-catbee/) チームが開発・維持しているAngularライブラリのコレクションです.
* [ngx-persian](https://github.com/alihoseiny/ngx-persian) - ペルシャアプリケーション向けの完全機能ツールセット
* [acontplus-libs](https://github.com/acontplus/acontplus-libs) - ドメインドリブンデザイン（DDD）アーキテクチャ、コアユーティリティ、エンタープライズアプリケーション向けAngular Material UIコンポーネントを提供するNxモノリスリポジトリ
* [Angular Directive Workspace](https://github.com/sergeydus/ng-tailwind-workspace) - Angularの一元リポジトリで、独自のディレクティブおよびユーティリティライブラリを多数提供しており、 [ng-signals-utils](https://www.npmjs.com/package/@sergeydus/ng-signals-utils) を含みます.
* [angular-cool](https://github.com/Hacklone/angular-cool) - Angularの開発者に優しいユーティリティが詰まった単一リポジトリで、UI、ストレージ、ネットワーキング、パフォーマンス機能を簡単に導入してアプリを強化します
* [dasch-ng](https://github.com/DaSchTour/dasch-ng) - 現代のウェブ開発に必要な再利用可能なAngularライブラリとTypeScriptユーティリティのコレクション
* [ngx-schema-tools](https://github.com/Expeed-Software/ngx-schema-tools) - JSONスキーマ編集、視覚データマッピング、動的フォームレンダリングに向けたAngularライブラリを含む単一リポジトリ
* [angular-3d](https://github.com/Hive-Academy/angular-3d) - 素晴らしい3Dグラフィックスとスクロールアニメーションを構築するための現代的なAngularライブラリ
* [npm-ntk-cms-angular](https://github.com/akaravi/npm-ntk-cms-angular) - この単一リポジトリには、現代のCMSアプリケーション開発に最適な9つの再利用可能なAngularライブラリが収録されています
* [ngx-vertex](https://github.com/pjlamb12/ngx-vertex) - Angularアプリケーション内で有向無サイクルグラフモデルを作成・管理するための設計されています
* [telperion](https://github.com/telperiontech/telperion) - 現代ウェブ開発向けの高品質でフレームワークに依存しないユーティリティとツールのコレクションで、 [ng-pack](https://github.com/telperiontech/telperion/tree/main/libs/ng-pack) を含みます.
* [signality](https://github.com/signalityjs/signality) - Angularで反応型コンポジションを構築するための原子的なユーティリティのコレクション
* [@alvaromarinho/libs](https://github.com/alvaromarinho/libs) - Angular 14以降の互換性を保つ、一般的なUIニーズに応じたAngularライブラリのコレクション
* [angular-helpers](https://github.com/Gaspar1992/angular-helpers) - セキュアでブラウザに統合されたアプリケーションを構築するための、クリーンな開発体験を提供するAngularライブラリのセット
* [ngneat-archive](https://github.com/ngneat-archive) - [ngneat](https://github.com/ngneat) リポジトリの読み取り専用保存アーカイブです。
* [Indice.Angular](https://github.com/indice-co/Indice.Angular) - Angular v20以降のアプリケーション向けに、認証、設定、再利用可能なコンポーネントを提供するAngularライブラリのコレクション
* [trt-web-utils](https://github.com/therightthings/trt-web/tree/dev) - `@trt-web` パッケージのモノリスリポジトリで、Firebase admin ヘルパー ライブラリを含む。
* [dgkit](https://github.com/grynyk/dgkit) - 成長中のオープンソースフロントエンドに依存せず、Angularライブラリ、開発ツール、フロントエンドユーティリティのコレクション

### モーダル <a id="modals"></a>

* [ngx-dialog](https://github.com/soc221b/ngx-dialog) - Angular 16以降向けの型安全なAngularダイアログディレクティブ
* [ng-modal-service](https://github.com/nhusby/ng-modal-service) - シンプルなAngularモーダルサービス
* [strictly-typed-mat-dialog](https://github.com/JustSolve-self-serve/strictly-typed-mat-dialog) - matダイアログ周りの型安全を高めるためのAngularマテリアルライブラリ
* [angular-confirmation-capture](https://github.com/lazycuh/angular-confirmation-capture) - ユーザーの同意を取得するために、プログラム的に確認ボックスを表示する、シングルトンのグローバルAngularサービス
* [angular-anchored-floating-box](https://github.com/lazycuh/angular-anchored-floating-box) - `TemplateRef` またはコンポーネントコンテンツにアンカーを置く浮遊ボックスをレンダリングする、Angular のシングルトンサービス。
* [ngx-side-page](https://github.com/strikerh/ngx-side-page) - サイドパネルのスライドアウトを実現する、スムーズでサービスベースのアニメーションを備えたAngularライブラリ（例：サイドページのMaterialダイアログ）
* [async-modal-ngx](https://github.com/antonioconselheiro/async-modal-ngx) - このライブラリは、データフローを柔軟に制御しながら、すべてのスタイルとモーダルホストのデザインは開発者が責任を持つように設計されています
* [rnd-dialog](https://github.com/acrodata/rnd-dialog) - CDKダイアログをベースにした、リサイズ可能かつドラッグ可能なダイアログ
* [prettier-modals](https://github.com/antuuanyf/prettier-modals) - Prettier モーダルのための Angular ディレクティブとインジェクタブルサービス — GSAP Flip によって駆動された、本質的な `<dialog>` 要素への開閉アニメーション。
* [ngx-call](https://github.com/hebus/ngx-call) - Angular 用の命令型、型安全かつプロミスベースのダイアログ。 [React Call](https://github.com/desko27/react-call) の `createCallable` にインスパイアされたもの。
* [ngx-dialog-forge](https://github.com/HoplaGeiss/ngx-dialog-forge) - ネイティブダイアログ要素に基づいた、宣言型かつシグナルネイティブなAngularダイアログライブラリ
* [ngx-modalieur](https://github.com/kazepis/ngx-modalieur) - Angular CDK Dialogを用いて構築された、Bootstrapスタイルのモーダル
* [ngx-minimal-modal](https://github.com/ThePipeFox/ngx-minimal-modal) - 小さな、意見のないライブラリで、Angularアプリ内でモーダル（ポップアップ）を扱うためのシンプルな方法を提供しています。

### 通知 <a id="notifications"></a>

* [alert-bar-library](https://github.com/npm-lahsiv/alert-bar-library) - 成功、情報、警告、エラーといった文脈に応じたメッセージを、現代のウェブアプリと一致するクリーンでアクセシブルなスタイルで表示します。
* [angular-bootstrap-toast-service](https://github.com/svierk/angular-bootstrap-toast-service) - Bootstrapに基づいたトースト通知を送信するAngularプロジェクトに、Vercelでのデプロイを含んでいます。
* [angular-notification](https://github.com/lazycuh/angular-notification) - プログラム的に通知を表示する、シングルトンのグローバルAngularサービスです。
* [angular-toaster](https://github.com/damingerdai/angular-toaster) - [Angular2-Toaster](https://github.com/Stabzs/Angular2-Toaster) のアップデートされたフォーク。
* [grand-notifications](https://github.com/rishi-rj-s/grand-notifications) - 美しくカスタマイズ可能なトースト通知と芸術的なアニメーションを提供します。
* [hot-toast](https://github.com/ngxpert/hot-toast) - Angular向けに非常にパワフルなトースト通知です。
* [makki-toast-package](https://github.com/DanielJimenezC/makki-toast-package) - カスタマイズ可能なトーストコンポーネントで、カスタマイズされたアラートの作成と管理を簡素化します。
* [mk-magic-messages-library](https://github.com/mkeller1992/mk-magic-messages-library) - Angular 20以降のアプリケーションで、アニメーション付きの成功、情報、警告、エラーアラートを簡単に表示できます。
* [ngx-advanced-toast](https://github.com/Hamed-kshiem/ngx-advanced-toast) - ナチュラルな `<dialog>` 要素に基づく高度な Angular ツールチップ通知 — シグナルファースト、RxJS なし、CSS によるアニメーション、完全にアクセシブル。
* [ngx-alertifying](https://github.com/Salromag/ngx-alertifying) - デバイスや文脈に応じてスタイリッシュでアクセシブルなフィードバックを提供する、カスタマイズ可能でレスポンシブなAngularアラートコンポーネントです。
* [ngx-cozy-popup](https://github.com/Mohantech123/CozyAlert) - 現代のウェブアプリケーション向けにフレームワークに依存しないポップアップとトーストライブラリです。
* [ngx-french-toast](https://github.com/thiagopg84/ngx-french-toast) - 軽量でカスタマイズ可能なAngular 14以降のトース及ライブラリで、情報メッセージやフィードバック、動的コンポーネントサポートを提供します。
* [ngx-modern-alerts](https://github.com/jonaaix/ngx-modern-alerts) - フロントエンドのバナーとフローティングアラートに柔軟なAngularシステムを提供し、ハブ、タイムアウト、カスタムアクションなどもサポートします。
* [@klausbrandner/ngx-notifications](https://github.com/klausbrandner/ngx-notifications) - シンプルで軽量なAngular向けトースト通知です。
* [ngx-notifier](https://github.com/sibiraj-s/ngx-notifier) - Angularアプリケーション向けのシンプルな通知サービスです。
* [ngx-popify](https://github.com/fgilmet/ngx-popify) - Angular 16以降で反応的なシグナルを使用して構築されたトースト通知で、ビューコンポーネントを介して簡単に統合できます。
* [ngx-signal-toast](https://github.com/white-devil1/ngx-signal-toast-workspace) - Angular 21以降向けのシグナル中心のトースト通知ライブラリで、ゾーンレス対応、ゼロ依存、SSR安全、強力なテーマサポートを提供します。
* [ngx-snotifire](https://github.com/ccpatrut/ngx-snotifire) - 複数の通知タイプ、同時位置、豊かな設定、完全なカスタムスタイル、内蔵テーマ、コールバック、カスタムHTMLサポートを提供する柔軟なトーストライブラリです。
* [ngx-sonner](https://github.com/tutkli/ngx-sonner) - Angular向けに意見のあるトーストコンポーネントです。@emilkowalskiのsonnerのポートです。
* [ngx-sweetalert2](https://github.com/sweetalert2/ngx-sweetalert2) - Angular向けに宣言的、反応的、テンプレート駆動のSweetAlert2統合です。
* [ngx-toast](https://github.com/aminekun90/ngx-toast) - 軽量で高パフォーマンスでゾーンレス対応可能なAngular 21以降およびReact 18以降向けトースト通知ライブラリです。
* [@IQXLimited/ngx-toastr](https://github.com/IQXLimited/ngx-toastr) - `ngx-toastr`のフォークで、追加機能、改善点、カスタマイズを提供するもの
* [ngx-toastr-notifier](https://github.com/Mazen-Embaby/ngx-toastr-notifier) - 軽量でカスタマイズ可能な Angular 20+ ツールチップ通知、Material デザインと柔軟なAPIを備え、 `toastr` を置き換える。
* [Notiflow](https://github.com/schimmer123/Notiflow) - Angular 用の現代的なツールチップ/通知ライブラリ — シグナルベース、スタンドアローン、ゾーンフリー、 `@angular/animations` を使用せずに構築。
* [notifyx](https://github.com/awalhadi/notifyx) - JavaScript/TypeScript用のシンプルでカスタマイズ可能なトーストライブラリ（依存関係なし）
* [OneSignal](https://documentation.onesignal.com/docs/angular-setup) - OneSignal を Angular アプリに統合するための [onesignal-ngx](https://github.com/OneSignal/onesignal-ngx)。プッシュおよびアプリ内メッセージをサポート。
* [toastify](https://github.com/andreasnicolaou/toastify) - ウェブアプリケーション向けに軽量かつカスタマイズ可能なトースト通知
* [web-notifier](https://github.com/andreasnicolaou/web-notifier) - 軽量で柔軟なウェブ通知ライブラリ。ブラウザ通知に簡単なRxJSベースAPIを提供
* [ngx-dynamic-toast](https://github.com/ederjavs/ngx-dynamic-toast) - 美しい、液体のように滑らかなツールチップ通知ライブラリ。 [Sileo](https://github.com/hiaaryan/sileo) プロジェクトに強くインスパイアされたもの。
* [flexi-toast](https://github.com/FlexiUI-labs/flexi-toast) - Angular用のトースト通知コンポーネント。タイトル、メッセージ、アイコンタイプ、自動閉じ、手動閉じ、アニメーション、テーマ、配置をサポート
* [ngx-notitia](https://github.com/klajdm/ngx-notitia) - `ngx-toastr`のアップデートされたフォーク。Angular 21以降向けに追加機能、修正、現代化を加えたもの
* [ngx-herald](https://github.com/HoplaGeiss/ngx-herald) - 軽量で現代的なAngularトースト通知ライブラリ。シグナル優先、ゾーンフリー対応、実行時依存関係なし、ngx-toastrの代替として使いやすい
* [ngx-gooey-toast](https://github.com/juanvieiraprado99/ngx-gooey-toast) - React の [gooey‑toast](https://goey-toast.vercel.app/) を Angular に移植した、変形するpill-to-blob ツールチップコンポーネント。
* [ngx-yet-another-toast-library](https://github.com/Zeeraa/ngx-yet-another-toast-library) - 軽量でシグナルベースのAngularトースト通知ライブラリ。Bootstrap 5の色パレットをサポート
* [ngx-mat-toast](https://github.com/Robin-Bley/ngx-mat-toast) - Angular マテリアル `MatSnackBar` をベースにした Angular ツールチップ通知ライブラリ。
* [ngx-retoast](https://github.com/EliasVal/ngx-retoast) - アーカイブされた`ngx-toastr`ライブラリのリライト。現代的なAngularアプリケーション向けに設計

### オンボーディングと製品ツアー <a id="onboarding-and-product-tours"></a>

* [angular-shepherd](https://github.com/shepherd-pro/angular-shepherd) - サイトツアーライブラリ [Shepherd](https://github.com/shepherd-pro/shepherd) をラップした Angular サービス。
* [skyux](https://github.com/blackbaud/skyux) - Angular用のSKY UXコンポーネント
* [ngx-ui-tour](https://github.com/hakimio/ngx-ui-tour) - [angular-ui-tour](https://github.com/benmarch/angular-ui-tour) にインスパイアされた UI ターミナルライブラリ。
* [ngx-onboarding](https://github.com/rosen-group/ngx-onboarding) - スムーズなAngularチュートリアルをサポートするオンボーディングライブラリ。ユーザーがアプリを迅速に学習し、ナビゲートできるように支援
* [ngx-web-tour](https://github.com/abbas-mgz/ngx-web-tour) - アニメーションとプロフェッショナルなUIをサポートするAngularアプリケーション向けカスタマイズ可能な製品ツアーライブラリ
* [ngx-intro](https://github.com/andresciceri/ngx-intro) - [Intro.js](https://introjs.com/) のシンプルな統合を提供する Angular ライブラリ。インタラクティブなガイドやステップバイステップチュートリアルを作成可能。
* [ngx-custom-tour](https://github.com/miraxes/ngx-custom-tour) - Angular 15以降向けの簡単なステップバイステップツアー／オンボーディング
* [ng-beacon](https://github.com/HomelessCoder/ng-beacon) - Angular 19以降向けの軽量ガイドツアーライブラリ。シグナルとゾーンフリー対応のレンダリングをサポート
* [ngx-guided-tour-lite](https://github.com/pantarey-io/ngx-guided-tour-lite) - Angular向けの軽量かつ依存関係のないガイドツアーライブラリ

### PDF <a id="pdf"></a>

* [Angular Image & PDF Viewer](https://github.com/NiranjanKushwaha/imgPdfViewer_library_Angular) - Mozilla の [pdf.js](https://github.com/mozilla/pdf.js) エンジンを使用してPDFおよび画像を表示するためのカスタマイズ可能なライブラリ。スムーズなプレビューを実現。
* [ng-pdf-renderer](https://github.com/askinjohn/ng-pdf-renderer) - 現代的で設定不要のPDF閲覧器。Angularアプリケーション向け。知能付き自動サイズ調整、テキスト選択、レスポンシブデザインを提供
* [ng2-pdfjs-viewer](https://github.com/intbot/ng2-pdfjs-viewer) - PDFJSおよびViewerJS用のAngularコンポーネント（すべてのAngularバージョンに対応）
* [ngx-document-signer](https://github.com/YaseenAlMufti/ngx-document-signer) - PDFフォーム作成者およびPDF署名機能を提供する再利用可能なパッケージ
* [ngx-extended-pdf-viewer](https://github.com/stephanrauh/ngx-extended-pdf-viewer) - Angular 16以降向けの完全なPDF閲覧器
* [ngx-pdf-viewer](https://github.com/subedigaurav/ngx-pdf-viewer) - Angularアプリケーション向けの軽量PDF閲覧ライブラリ
* [pdf-viewer-kit](https://github.com/AmanKrr/pdf-viewer-kit) - `pdf.js` をベースにした、現代的で高パフォーマンス、フレームワークに依存しない、軽量なPDF閲覧と注釈ライブラリ。
* [rm-ng-pdf-export](https://github.com/malikrajat/rm-ng-pdf-export) - HTMLコンテンツからスマートなページ分割と高精細なレンダリングで超高品質PDFを生成・エクスポートするAngularライブラリ

### パイプ <a id="pipes"></a>

* [ng-generic-pipe](https://github.com/nigrosimone/ng-generic-pipe) - Angularアプリケーション向けの汎用パイプ
* [ng-dompurify](https://github.com/taiga-family/ng-dompurify) - [DOMPurify](https://github.com/cure53/DOMPurify) を使用した Angular サニタイザー／パイプ。完全な設定サポートを提供。
* [ngx-signal-pipes](https://github.com/wassim-k/ngx-signal-pipes) - Angularのシグナルを関数パイプで変換
* [ngx-pipe-lib](https://github.com/mofirojean/ngx-pipe-lib) - 日常業務に必要なAngularパイプの例
* [memoize-pipe](https://github.com/ngx-rock/memoize-pipe) - Angularテンプレート内で計算をメモ化するための汎用パイプ
* [ngx-highlight-text](https://github.com/ultrasonicsoft/ngx-highlight-text) - HTMLマーカー内の選択された単語を強調するAngularパイプ
* [ngx-smart-pipes](https://github.com/Kavshree/-bjkavyashree-ngx-smart-pipes) - 実用的な実際のケースに最適化された、軽量でTree-shaking対応のスタンドアローンAngularパイプのコレクション
* [ngx-dynamic-search](https://github.com/mustafaer/ngx-dynamic-search) - 複雑なネストされたオブジェクトと配列間の動的・深層検索フィルタリングに最適化されたAngularパイプ
* [ngx-name-capitalize](https://github.com/gabo2151/ngx-name-capitalize) - 複合姓、言語的粒子、ハイフン、アポストロフィ、Unicode文字を正しくフォーマットする名前をカプセル化するAngularパイプ
* [ngx-transforms](https://github.com/mofirojean/ngx-transforms) - 文字列、数値、日付、配列、オブジェクトなど90以上のスタンドアローンでTree-shaking対応パイプ
* [@unirate/angular](https://github.com/UniRate-API/angular-unirate) - Angular ピプ（`currencyRate`、`currencyConvert`）および `UniRateService`（オブザーバブルベース）によるリアルタイム通貨交換率。 [UniRate](https://unirateapi.com) API から取得。Angular 16–22 に対応。 `UniRateModule.forRoot()` または `provideUniRate()` を使用。

### 印刷 <a id="printing"></a>

* [ngx-pos-print](https://github.com/gmetenou7/NGX-POS-PRINT) - AngularアプリからPOS熱いプリンタでレシートを印刷
* [ngx-print](https://github.com/selemxmn/ngx-print) - すぐに使えるAngularライブラリで、あなたのコンテンツを印刷
* [ngx-printer-demo](https://github.com/plaetzchen79/ngx-printer-demo) - Angularアプリでウィンドウ、ウィンドウの一部（div）、画像、HTMLElement、Angularオブジェクトを印刷するシンプルなサービス

### QRコード <a id="qr-codes"></a>

* [ng-qrcode](https://github.com/mnahkies/ng-qrcode) - Angularプロジェクト向けにAOT対応のシンプルなQRコード生成器
* [angularx-qrcode](https://github.com/cordobo/angularx-qrcode) - IonicおよびAngular向けに高速かつ使いやすいIvy対応のQRコード生成ライブラリ
* [dfts-qrcode](https://github.com/Dafnik/dfts-common/tree/main/libs/dfts-qrcode) - 小さなサイズでシンプルに使えるJavaScript/TypeScriptのQRコード生成ライブラリ。完全に型安全でESモジュール対応
* [ngx-scanner](https://github.com/zxing-js/ngx-scanner) - ZXingを使用したAngularのQRコード、バーコード、データマトリクススキャナーコンポーネント
* [ng-qrcode-svg](https://github.com/larscom/ng-qrcode-svg) - Angular向けのSVGのみのシンプルQRコード生成器
* [Angular-html5qrcode](https://github.com/mohamedfakhreldin/Angular-html5qrcode) - [html5-qrcode](https://github.com/mebjas/html5-qrcode)のAngularラッパー。QRコードとバーコードのスキャン機能をアプリケーションへ容易に統合できる。
* [ngx-kjua](https://github.com/werthdavid/ngx-kjua) - AngularによるQRコード生成コンポーネント（[kjua](https://github.com/lrsjng/kjua)を用いた）
* [ngx-qrcode](https://github.com/GNURub/ngx-qrcode) - Angular 18以降向けのシンプルなQRコード生成コンポーネント。[react-native-qrcode-skia](https://github.com/enzomanuelmangano/react-native-qrcode-skia)ライブラリをベースにしたもの。
* [qrcode-angular](https://github.com/selfxyz/self/tree/main/sdk/qrcode-angular) - [Self.xyz](https://self.xyz/)向けに簡易化されたAngularライブラリ。検証用QRコードを生成。
* [qr-code-layout-generate-tool](https://github.com/shashi089/qr-code-layout-generate-tool) - React、Angular、Vue、Svelte、Node.jsに共通のQRコードラベルおよびバッジ設計ツール

### ルーター <a id="router"></a>

* [ngx-route-breadcrumbs](https://github.com/alevettih/ngx-route-breadcrumbs) - ルーティングURLとパラメータに基づいてbreadcrumbを作成するためのAngularライブラリ
* [xng-breadcrumb](https://github.com/udayvunnam/xng-breadcrumb) - ゼロ設定、軽量、カスタマイズ可能、反応型のAngular 6+用のbreadcrumb
* [angular-router-menus](https://github.com/muuvmuuv/angular-router-menus) - タイプ安全かつカスタマイズ可能な、ルートベースのAngularメニュー。複数ナビゲーション、ネストされたドロップダウン、インジェクショントークンアクセスをサポート
* [ngx-back-button](https://github.com/rbalet/ngx-back-button) - Angularにおける適切なバックボタン機能を扱うためのライブラリ
* [ngx-foresight](https://github.com/akshykhade/ngx-foresight) - ユーザーの意図に基づくスマートルーターの事前読み込みを実現する[ForesightJS](https://foresightjs.com/)のAngular統合。
* [ngx-href](https://github.com/rbalet/ngx-href) - hrefがAngularのルーターを理解できるようにするディレクティブであり、デフォルト機能を維持
* [ngx-multi-level-push-menu](https://github.com/ramiz4/ngx-multi-level-push-menu) - レスポンシブマルチレベルプッシュメニューをサポートする、現代的かつアクセシブルなAngularコンポーネント。高度なカスタマイズオプションを提供
* [ngx-quicklink](https://github.com/mgechev/ngx-quicklink) - Angularルーター向けのクイックリンクプレフィッチング戦略
* [ngx-route-manager](https://github.com/perez247/ngx-route-manager) - アプリケーション内で使用されるすべてのルートURLを保存するシンプルなライブラリ
* [ngx-speculation-rules](https://github.com/SkyZeroZx/ngx-speculation-rules) - SSRおよびゾーンレス対応の高速ナビゲーションを実現する、[Speculation Rules API](https://developer.mozilla.org/en-US/docs/Web/API/Speculation_Rules_API)を活用したAngularライブラリ。
* [ui-router](https://github.com/ui-router/angular) - Angularにおける状態ベースルーティングは、[UI-Router for Angular](https://ui-router.github.io)によって実現される。
* [ngx-url-params](https://github.com/shlomog12/ngx-url-params) - 軽量なAngularサービスで、URLクエリパラメータを管理・同期し、簡潔で反応型APIを提供
* [ngx-history](https://github.com/lumentut/ngx-history) - 現代的なAngularナビゲーション履歴サービスで、反応型プログラミングをサポート
* [angular-typed-router](https://github.com/dominicbachmann/angular-typed-router) - タイプ安全なAngularナビゲーション（1つのRoutes配列から）で、推論されたパスユニオンとタイプ付きナビゲートタプルを生成。コードジェネレーションや実行時コストなし

### スクロール <a id="scroll"></a>

* [ngx-ui-scroll](https://github.com/dhilt/ngx-ui-scroll) - Angular向けの仮想/無限スクロール
* [ngx-page-scroll](https://github.com/Nolanus/ngx-page-scroll) - 純粋TypeScriptで記述されたAngular用のアニメーションスクロール機能
* [lithium-ngx-virtual-scroll](https://github.com/lVlyke/lithium-ngx-virtual-scroll) - Angular向けの高速かつ軽量な仮想スクロールソリューション。単列リスト、グリッドリスト、ビューキャッシュをサポート
* [angular-fullpage](https://github.com/alvarotrigo/angular-fullpage) - fullPage.jsの公式コンポーネント。フルスクリーンスクロールライブラリ
* [ngx-scrolltop](https://github.com/bartholomej/ngx-scrolltop) - 軽量で、マテリアルデザインをインスピレーションとしたページトップスクロールボタン。依存関係なし
* [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) - カスタムスタイル可能なオーバーレイスクロールバーを提供するJavaScriptプラグイン。ネイティブ機能を隠しつつ、機能を維持
* [ngx-scrollbar](https://github.com/MurhafSousli/ngx-scrollbar) - ネイティブスクロール機構を備えたカスタムオーバーレイスクロールバー
* [ngx-tracing-beam](https://github.com/omnedia/ngx-tracing-beam) - あなたの垂直スクロールにアニメーション付きトレースビームを追加するためのシンプルなコンポーネンツライブラリ
* [ngx-marquee](https://github.com/omnedia/ngx-marquee) - コンテンツをもとに無限スクロールマーチャンを生成するためのシンプルなコンポーネンツライブラリ
* [@omnedia/ngx-scrollbar](https://github.com/omnedia/ngx-scrollbar) - スムーズスクロールと完全なスタイル制御を備えたカスタムスクロールバー
* [ngx-virtual-dnd-list](https://github.com/mfuu/ngx-virtual-dnd-list) - ドラッグで並べ替え可能な、仮想スクロールリストコンポーネント。
* [ngx-scroll-top](https://github.com/ProAngular/ngx-scroll-top) - Angularプロジェクト向けにカスタマイズ可能で軽量の「トップに戻る」ボタン。
* [ng-mat-select-infinite-scroll](https://github.com/HaidarZ/ng-mat-select-infinite-scroll) - Angular Materialのセレクトコンポーネントに適用可能な無限スクロールディレクティブ。
* [simplebar](https://github.com/Grsmto/simplebar) - ナチュラルスクロールを実現する、カスタムスクロールバーのvanilla JavaScriptライブラリ。シンプルで軽量であり、ブラウザ間で使いやすい。
* [ngx-responsive-virtual-scroll](https://github.com/dcbeck/ngx-responsive-virtual-scroll) - 高速かつ軽量のAngular仮想スクロール。1列リスト、レスポンシブグリッド、ビューキャッシュに最適。
* [ngx-virtual-scroller-flexible](https://github.com/onexip/ngx-virtual-scroller-flexible) - 極めて高速で柔軟な仮想スクロールレンダリング。高さが異なるアイテムを無制限にスムーズに表示。
* [ngx-perfect-scrollbar-portable](https://github.com/brakmic/ngx-perfect-scrollbar-portable) - Perfect Scrollbar用のAngularラッパーライブラリ。
* [ng-virtual-list](https://github.com/djonnyx/ng-virtual-list) - 極めて大きなリストにも最適なパフォーマンス。
* [ngx-horizontal-menu-scroll](https://github.com/isahohieku/ngx-horizontal-menu-scroll) - 軽量かつカスタマイズ可能なAngularライブラリ。スムーズなナビゲーションコントロールを備えた美しい水平スクロールメニューを作成可能。
* [usal](https://github.com/italoalmeida0/usal) - フレームワークに依存しない最高水準のスクロールアニメーションライブラリ。
* [ar-virtual-scroll](https://github.com/artomenwork/ar-virtual-scroll) - 自動動的高さを備えた軽量Angular仮想スクロド。チャット、フィード、可変リストに最適。
* [angular-infinity-scroller](https://github.com/Jayant061/angular-infinity-scroller) - 現代のAngularおよびSSR環境とシームレスに動作する、軽量かつ高パフォーマンスの無限スクロールディレクティブ。
* [ngx-zoneless-scrollbar](https://github.com/Legalfina/ngx-zoneless-scrollbar) - ゾーンレスモード向けに設計された軽量Angularスクロールバー。ナチュラルスクロールとCSSスタイルを組み合わせたもの。
* [ngx-scrollbar-ultimate](https://github.com/andrew-dev283/ngx-scrollbar-ultimate) - 垂直スクロールに特化した軽量ライブラリ。
* [ngx-scrollspy](https://github.com/uniprank/ngx-scrollspy) - Angular用スクロール監視サービス（イベント付き）。
* [ngx-virtual-grid](https://github.com/theryansmee/ngx-virtual-grid) - レスポンシブかつ仮想スクロールを実現したAngularグリッド。無限読み込みをサポートし、CSSグリッドを使用し、アイテムサイズを自動測定し、表示領域のみをレンダリング。
* [ngx-cerious-scroll](https://github.com/ceriousdevtech/ngx-cerious-scroll) - 高性能な仮想スクロール実装[Cerious Scroll](https://github.com/ceriousdevtech/cerious-scroll)へのAngularバインディング。

### ストレージ <a id="storage"></a>

* [rxdb](https://rxdb.info/) - [IndexedDB](https://rxdb.info/articles/angular-indexeddb.html)の抽象化層。
* [ngx-reactive-storage](https://github.com/e-oz/ngx-reactive-storage) - IndexedDB/localStorageをラップした、プロミスベースAPIを備えたライブラリ。Angular SignalsおよびRxJS Observablesに対応。
* [ng2-webstorage](https://github.com/PillowPillow/ng2-webstorage) - LocalStorageおよびSessionStorageマネージャー。
* [ngx-indexed-db](https://github.com/assuncaocharles/ngx-indexed-db) - IndexedDBをAngularサービスにラップ。
* [angular-async-local-storage](https://github.com/cyrilletuzi/angular-async-local-storage) - Angular向けの効率的なクライアントサイドストレージ：シンプルなAPI＋パフォーマンス＋Observables＋バリデーション。
* [signaldb](https://github.com/maxnowack/signaldb) - ローカルJavaScriptデータベース。MongoDB風インターフェース、TypeScript、シグナルベースの反応性、スキーマなし設計、高速クエリ。
* [dexie](https://github.com/dexie/Dexie.js) - IndexedDB向けのミニマリズムなラッパー。
* [angular-web-storage](https://github.com/cipchk/angular-web-storage) - AngularのデコレータでHTML5のローカルストレージとセッションストレージの保存・復元を行う。
* [ng-storage](https://github.com/edisonaugusthy/ng-storage) - AES-GCM暗号化、TTL、変更通知、Apolloスタイルプロバイダーを備えた、現代的な反応性Angularサービス。
* [convex-angular](https://github.com/azhukau-dev/convex-angular) - Convex向けのAngularクライアント。
* [secure-client-store](https://github.com/msaadart/secure-client-store) - AES-25及GCMを用いたクライアントサイド暗号化（ブラウザおよびNode.jsで動作）のユニバーサルTypeScriptライブラリ。
* [ngx-persist](https://github.com/khvedela/ngx-persist) - Angular向けの型安全かつシグナルベースの持続的な状態ユーティリティ。localStorage、sessionStorage、IndexedDB、またはカスタムバックエンドと同期。
* [ngx-webstore](https://github.com/saurabh-vaish/ngx-webstore) - TypeScript対応の、包括的なAngularライブラリ。ブラウザストレージ管理、反応性API、暗号化、TTLなどを提供。
* [@moltendb-web/angular](https://github.com/maximilian27/moltendb-web) - Rust/WebAssemblyベースのローカルファーストDB。Angularでシグナル、OPFS、GraphQL風クエリ、Web Workersをサポート。
* [ngx-secure-storage](https://github.com/MadeByRaymond/ngx-secure-storage) - SSR対応のAngularサービス。AES暗号化を用いてlocalStorageおよびsessionStorageに暗号化されたデータを安全に保存・取得・管理。
* [ngx-local-vault](https://github.com/ysndmr/ngx-local-vault) - シグナルベースの反応性かつ暗号化されたブラウザストレージ。Angular向け。圧縮後2KB未満で、実行時依存なし。

### ツールチップ <a id="tooltips"></a>

* [popover](https://github.com/ncstate-sat/popover) - Angularのポップオーバーコンポーネント。
* [ngx-tooltip-directives](https://github.com/mkeller1992/ngx-tooltip-directives) - 3つのツールチップディレクティブ（文字列、HTML、テンプレート）を備えたライブラリ。[ng2-tooltip-directive](https://github.com/drozhzhin-n-e/ng2-tooltip-directive)をインスピレーションとしている。
* [@babybeet/angular-tooltip](https://github.com/babybeet/angular-tooltip) - Angularでツールチップをプログラム的にもしくは宣言的に簡単に表示できる。
* [ngx-tippy-wrapper](https://github.com/farengeyt451/ngx-tippy-wrapper) - [Tippy.js](https://github.com/atomiks/tippyjs)のAngularラッパー。
* [@lazycuh/angular-tooltip](https://github.com/lazycuh/angular-tooltip) - Angularでツールチップをプログラム的にもしくは宣言的に簡単に表示できる。
* [ngx-overlay](https://github.com/bastienmoulia/ngx-overlay) - 現代的なCSS/HTMLオーバーレイ（モーダル、ツールチップ、ポップアップ）向け軽量Angularライブラリ。ブラウザ対応で美しく簡潔。
* [ngx-smart-tooltip](https://github.com/techasif/ngx-smart-tooltip) - Angular 18向けの軽量かつカスタマイズ可能なツールチップライブラリ。シグナル、Web Animations API、OnPush変更検知を使用。
* [angular-tooltips](https://github.com/h-k-dev/angular-tooltips) - 単一CSSアンカー要素を用いた現代的かつ軽量なAngularツールチップ。オーバーレイなし、スクロールリスナーなし、トリガーごとのDOMなし。

### UIライブラリ <a id="ui-libraries"></a>

* [Dev Extreme](https://js.devexpress.com/Overview/Angular/) - 65以上の機能を備えたAngularコンポーネントセット。
* [Zyra UI](https://zyraui.dev/) - 現代的なAngularコンポーネントライブラリ。デザイントークン、シグナル、ダークモード優先テーマ、WCAG 2.1 AAアクセシビリティを備える。
* [Syncfusion](https://www.syncfusion.com/angular-components) - その[Essential UI Kit for Angular](https://github.com/syncfusion/essential-ui-kit-for-angular)はTailwind CSSおよびBootstrapとも互換性を持つ。
* [ej2-angular-ui-components](https://github.com/syncfusion/ej2-angular-ui-components) - Syncfusion Angular UIライブラリ。70以上の軽量、レスポンシブ、モジュール化、タッチ対応コンポーネントを提供。
* [Nebular](https://github.com/akveo/nebular) - Eva Design System に基づくカスタマイズ可能な Angular UI ライブラリ
* [NG-ZORRO](https://github.com/NG-ZORRO/ng-zorro-antd) - Ant Design および Angular をベースにしたエンタープライズクラス UI コンポーネント
* [NG-ALAIN](https://github.com/ng-alain/ng-alain/) - NG-ZORRO アドミンパネルのフロントエンドフレームワーク
* [zardui](https://github.com/zard-ui/zardui) - [shadcn-ui](https://github.com/shadcn-ui/ui)およびNG‑ZORROをベースにした、美しいかつアクセシブルなAngularコンポーネントのコレクション。完全にオープンソースで無料。
* [ngx-ui](https://github.com/swimlane/ngx-ui) - Angular2 以降向けのスタイルとコンポーネントライブラリ
* [optimus-ui](https://github.com/openng-org/optimus-ui) - [PrimeNG](https://github.com/primefaces/primeng)のフォーク。
* [Wijmo 5](http://wijmo.com/products/wijmo-5/) - Angular2 用のUIコンポーネントセット
* [Taiga UI](https://taiga-ui.dev/) - Angular向けの強力なオープンソースコンポーネントセット
* [AgnosUI](https://amadeusitgroup.github.io/AgnosUI/latest/) - 高度にカスタマイズ可能な、フレームワークに依存しないヘッドレスフレームワークのコンポーネントライブラリ
* [ng-aquila](https://github.com/allianz/ng-aquila) - Aquila、Allianz GDFのオープンソースコンポーネントライブラリを、ここではホワイトラベル変体として提供
* [oblique](https://github.com/oblique-bit/oblique) - スイスの企業デザインに基づくAngularフレームワークおよび、ブランド化されたビジネスアプリ向けの即時使用可能なコンポーネント
* [fundamental-ngx](https://github.com/SAP/fundamental-ngx) - SAP Design SystemのAngularコンポーネ及ライブラリ
* [designsystem](https://github.com/kirbydesign/designsystem) - Kirby Design Systemは、Kirbyデザイン哲学を実装したUXコンポーネントライブラリ
* [sbb-angular](https://github.com/sbb-design-systems/sbb-angular) - SBB向けのAngularライブラリ
* [ui](https://github.com/alauda/ui) - Alauda Frontend TeamによるエンタープライズレベルのAngular UIフレームワーク
* [ngx-tethys](https://github.com/atinc/ngx-tethys) - 高速かつ信頼性の高いTethys Designコンポーネント（Angular用）
* [antwerp-ui_angular](https://github.com/digipolisantwerp/antwerp-ui_angular) - Antwerp UIは、ユーザーインターフェースとレスポンシブウェブアプリの構築に用いるコンポーネントインターフェースライブラリ
* [ng-clarity](https://github.com/vmware-clarity/ng-clarity) - Clarity Angularは、Angular向けに設計されたスケーラブルでアクセシブルでカスタマイズ可能なオープンソースデザインシステム
* [ngx-float-ui](https://github.com/tonysamperi/ngx-float-ui) - [Floating UI](https://floating-ui.com/)ライブラリ向けのAngularラッパー。
* [carbon-components-angular](https://github.com/carbon-design-system/carbon-components-angular) - IBMのCarbon Design SystemをAngularで実装したもの
* [dyte-io/ui-kit](https://github.com/dyte-io/ui-kit/tree/staging/packages/angular-library) - Dyte UI Kit：アプリやウェブサイトに即時的に動画および音声通話機能を統合するための事前構築済みコンポーネント
* [ng-zen](https://github.com/kstepien3/ng-zen) - プロジェクト内で、カスタマイズ可能かつ生産性の高いAngular UIコンポーネントをシームレスに作成
* [ngwr](https://github.com/thekhegay/ngwr) - スタイリッシュなAngularアプリケーションを構築するためのAngular UIキット
* [Windmillcode-Angular-CDK](https://github.com/WindMillCode/Windmillcode-Angular-CDK) - 再利用可能なUIコンポーネントのコレクションを提供。各コンポーネントは細部まで考慮し、パフォーマンスに配慮して設計されています。
* [ng-vcl](https://github.com/vcl/ng-vcl) - VCL CSSエコシステムに基づくAngularコンポーネントライブラリ。
* [ngx-ui](https://ngxui.com/docs) - NGXUI（[Omnedia](https://github.com/omnedia)）：ランディングページおよびマーケティング資料向けのスタンドアローンAngularコンポーネント、ブロック、テンプレート。
* [po-angular](https://github.com/po-ui/po-angular) - Angularに基づくコンポーネントライブラリ。ポルトガル語のドキュメンテーションを提供。
* [ngx-nighthawk](https://github.com/evenuxjs/ngx-nighthawk) - Bootstrapで開発された、生産用で企業向けのプロジェクト。広範なカスタム機能を提供。
* [@ng-verse/ui](https://github.com/ngverse/ui) - コピー＆ペースト可能な生産用Angularコンポーネント。
* [bryntum](https://bryntum.com/) - カレンダー、ゲンツチャート、カンバンボード、スケジューリング向けの世界レベルのウェブコンポーネント。
* [flexi-ui](https://github.com/TanerSaydam/flexi-ui) - [Flexi UI](https://flexi-ui.ecnorow.com/)：現代的で視覚的に魅力的なフロントエンドアプリケーション向けの再利用可能でカスタマイズ可能なオープンソースUIコンポーネント。
* [@koobiq/angular-components](https://github.com/koobiq/angular-components) - セキュリティに焦点を当てた製品向けのオープンソースデザインシステム。UIパターン、コンポーネント、ツール、リソース、ガイドラインを提供。
* [Vega](https://vega.hlprd.com/) - あなたの好むフレームワークに合わせた再利用可能なコンポーネ及スタイルを活用し、機能開発を加速。
* [Blueprint UI](https://blueprintui.dev/) - 柔軟なUIコンポーネントとツールを活用し、どこでも動作する開発を加速。
* [mantic-ui](https://github.com/KY-Programming/mantic-ui) - [Semantic UI](https://semantic-ui.com/)および[Fomantic UI](https://fomantic-ui.com/)向けのAngularコンポーネント。
* [kage-ui](https://github.com/sanjib-kumar-mandal/kage-ui) - 軽量で柔軟なAngularライブラリ。スケーラブルで一貫したUIを実現する、ボーダー・ファーストデザインシステムにインスパイアされた再利用可能なコンポーネントを提供。
* [quix-quang](https://github.com/quix-it/quix-quang) - [Quix Srl](https://www.quixconsulting.com/)が開発したAngularコンポーネントおよびユーティリティライブラリ。
* [ngx-vflow](https://github.com/artem-mangilev/ngx-vflow) - AngularでノードベースのUIを構築するためのオープンソースライブラリ。
* [ship-ui](https://github.com/shipuicom/core) - Angular向けの現代的、シグナルベース、ゾーンレス対応UIライブラリ。詳細およびドキュメントは、その[official website](https://www.shipui.com)サイトで確認可能。
* [slateui](https://github.com/angularcafe/slateui) - Angularプリミティブ、Tailwind CSS、シグナルに基づくディレクティブベースのコンポーネントを提供する、現代的なアクセシブルUIコンポーネントライブラリ。
* [@nexcraft/forge](https://github.com/dev-ignis/forge) - フレームワークに依存しないウェブコンポーネントUIライブラリ。Angularではカスタムエレメントを介して動作。
* [ngx-nova-ui](https://github.com/lebocow/ngx-nova-ui) - シグナル、スタンドアローンコンポーネント、CSSファーストテーマアプローチに基づく、現代的なAngular 20 UIコンポーネントライブラリ。
* [MaxterDev NGX Components](https://github.com/MatoMakuch/maxterdev/tree/main/projects/ngx-components) - 高度に柔軟でSCSSカスタマイズ可能なAngular用コンポーネントライブラリ。
* [gcds-components](https://github.com/cds-snc/gcds-components/tree/main/packages/angular) - `gcds-components-angular`パッケージにより、[GC Design System](https://design-system.alpha.canada.ca/)ウェブコンポーネントがAngularに簡単に統合可能になる。
* [particle-ng](https://github.com/entake-org/particle-ng) - 軽量でテーマ可能なコンポーネントライブラリ。Angular MaterialおよびPrimeNGへの柔軟かつ高制御の代替案を提供。
* [ngx-kit-ui](https://github.com/OpenKit-Labs/ngx-kit-ui) - モバイルおよびウェブ向けの現代的なAngular UIライブラリ。
* [TecnualNG](https://github.com/tecnual/tecnualng) - 再利用可能でカスタマイズ可能かつアクセシブルなコンポーネントを提供する、プロフェッショナルなウェブアプリケーション開発向けの現代的なAngular UIライブラリ。
* [takeoff-ui](https://github.com/turkishtechnology/takeoff-ui) - フレームワークに依存しないウェブコンポーネントをStencel.jsで開発した、包括的なデザインシステム。
* [mozek](https://github.com/thecodemeor/mozek-package) - 軽量なSCSSツールキットとUIライブラリ。シンプルで、過剰設計を避け、一貫したスペース、色、タイプグラフィックを提供。
* [Magma](https://github.com/ikilote/Magma) - 幅広いコンポーネント、サービス、パイプ、ディレクティブ、ユーティリティが、そのエコシステムを支え、誰でも使用または拡張可能に提供されている
* [ngx-aespartal-ui](https://github.com/Aespartal/ngx-aespartal-ui) - プロフェッショナルで軽量かつカスタマイズ可能な、アトミックデザイン原則に基づいたAngularコンポーネントライブラリ
* [JSuites](https://github.com/jsuites/jsuites) - Angularにカスタムワッパーまたはディレクティブを用いて統合可能なUIコンポーネントとユーティリティ（フォーム、モーダル、入力）のコレクション
* [ngx-support-chat](https://github.com/avs2001/ngx-support-chat) - 純粋なプレゼンテーション型のAngularコンポーネ及ライブラリ（顧客サポートチャットインターフェース用）
* [luma-ui](https://github.com/lumaui/luma-ui) - Angularアプリケーション向けのネオ・ミナリマルデザインシステム
* [Mundane UI](https://github.com/waga97/Mundane-UI) - フレームワークに依存せず、ゼロデプロイ、軽量なUIコンポーネントライブラリ
* [eagami](https://github.com/mwiraszka/eagami) - CSSカスタムプロパティに基づいた軽量かつアクセシブルなAngular UIコンポーネントライブラリ
* [angular-liquid-glass](https://github.com/thiagopac/angular-liquid-glass) - 独立したAngularコンポーネントライブラリ（液体ガラスおよびガラスモルフィズムインターフェース用）
* [ngx-pk-ui](https://github.com/superpck/ngx-pk-ui) - Angular 21向けのUIコンポーネントとCSSユーティリティを提供するコンポーネントライブラリ
* [magary](https://github.com/JhoanGon/magary) - 現代的でスタンドアローンを重視したAngular UIライブラリのモノリス（一括管理）
* [ngx-core-components](https://github.com/prajaktadube/ngx-core-components) - Angular 19以降向けのコンポーネントライブラリ — 信号（signals）、OnPush変更検知、ゼロランタイム依存で構築された、生産環境対応UIコンポーネント
* [ngx-cupertino](https://github.com/gacc94/ngx-cupertino) - AppleのiOS 26 / macOS Tahoe 26デザインシステムを実装したAngularコンポーネント
* [kanso-protocol](https://github.com/GregNBlack/kanso-protocol) - W3C DTCGトークン、Webコンポーネント、AI対応MCPサーバーを備えたオープンソース・クロスフレームワークデザインシステム — kanso（簡素）という原則に基づいて構築されている
* [frame-ui](https://github.com/Gamekohl/frame-ui) - 現代的なプリミティブに基づいたカスタマイズ可能なAngularコンポーネントライブラリ
* [coss-ui-angular](https://github.com/lordsarcastic/coss-ui-angular) - 公開された [COSS UI catalogue](https://www.coss.com/ui/docs) にインスパイアされたアクセス可能な Angular コンポーネント.
* [OpenMFP Web Components Library](https://github.com/openmfp/webcomponents) - 最新のシグナルベースAPIを用いて宣言型UIコンポーネントを実装した、現代的なAngular 21のWebコンポーネントライブラリ
* [ngxsmk-ui-kit](https://github.com/NGXSMK/ngxsmk-ui-kit) - 200以上の無料Angularコンポーネント。シグナルネイティブ。ゾーンレス。トークンテーマ。ダークモードが内蔵されている
* [NgBracket](https://ngbracket.com) - アクセシビリティを最優先としたAngularコンポーネントパック（フォーム、データテーブル、スケジューラ、チャートなど）— v22以降はシグナルネイティブ（Signal Forms）で構築。WCAG AA、キーボードおよびスクリーンリーダーによる手動テスト済み

### BootstrapベースのUIライブラリ <a id="ui-libraries-built-on-bootstrap"></a>

* [angular-bootstrap-md](https://mdbootstrap.com/docs/angular/) - Bootstrap 5およびAngular 17向けのMaterial Design
* [ng-bootstrap](https://ng-bootstrap.github.io) - Bootstrap 5のCSSおよびAPIを用いて構築された、Angularエコシステムに最適化されたAngularウィジェット
* [ng-bootstrap-addons](https://github.com/mikaelbotassi/ng-bootstrap-addons) - `ng-bootstrap` に存在しない UI コンポーネント（例：入力/フォームコントロール）を追加します.
* [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap) - 高速かつ信頼性の高いBootstrapウィジェット（Ivyエンジン対応）
* [design-angular-kit](https://github.com/italia/design-angular-kit) - BootstrapベースのUIライブラリに関するAngularライブラリ、ツール、または資料です。
for the creation of web applications developed with Angular.
* [yoozsoft](https://www.yoozsoft.com/ys-ng/home) - Bootstrap 5、CSS、およびNG Bootstrap 17を使用して構築されたウィジェット。Angularエコシステム向けのAPIを提供。
* [ngx-gccb](https://www.npmjs.com/package/ngx-gccb) - Angular 19以降向けの、使いやすい共有コンポーネント、ディレクティブ、パイプ、サービスを備えたライブラリ。コードサンプルについては [showcase](https://ngx-gccb.netlify.app/) を参照してください.
* [cute-widgets](https://github.com/cute-widgets/base) - オープンソースのAngular UIライブラリ。Bootstrap 5以降のユーティリティとデザインクラスを用いて、ネイティブディレクティブベースのコンポーネントを提供。

### MaterialベースのUIライブラリ <a id="ui-libraries-built-on-material"></a>

* [angular-ui-plusify](https://github.com/RockyCott/angular-ui-plusify) - デイタイムピッカーとマーカードエディタを内包。今後、完全なAngular UIツールキットへ拡張予定。
* [MDBootstrap](https://github.com/mdbootstrap/mdb-angular-ui-kit) - Bootstrap 5 & Angular 17 UI KIT - 700以上のコンポーネント、MITライセンス、簡単なインストール。
* [Angular Material](https://material.angular.dev/) - Angular向けのMaterial Designコンポーネド。
* [Covalent](https://github.com/Teradata/covalent/) - Teradata UI Platform（Angular Materialをベースに構築）。
* [IgniteUI Angular](https://github.com/IgniteUI/igniteui-angular) - Ignite UI for Angularは、AngularネイティブかつMaterialベースのAngular UIコンポーネントを完全に提供するライブラリで、最速のグリッドやチャートなどを備えている。
* [angular-jqwidgets](https://www.jqwidgets.com/angular/) - Material Designを用いた高度なAngularコンポーネント。
* [@ng-matero/extensions](https://github.com/ng-matero/extensions) - Angular Material用の拡張ライブラリ。
* [angular-material-css-vars](https://github.com/johannesjo/angular-material-css-vars) - Angular MaterialとCSS変数を組み合わせるための小さなライブラリ。
* [ngx-components](https://github.com/DSI-HUG/ngx-components) - Angular向けの便利なコンポーネントとユーティリティ関数。
* [ngx-material-auth](https://github.com/Service-Soft/ngx-material-auth) - Angularにおいて認証および認可のフロントエンド部分に関わる機能を提供するライブラリ。
* [ngx-material-navigation](https://github.com/Service-Soft/ngx-material-navigation) - ナビゲーション要素（ナビバーとサイドナビの組み合わせやフッターなど）をMaterialで作成し、ブレークポイントに応じてアイテムを自動的に移動させる。
* [ngx-material-entity](https://github.com/Service-Soft/ngx-material-entity) - `NgxMaterialEntity` では、エンティティを定義し、そのプロパティ上で表示方法を直接設定できます。さらに、完全で高度にカスタマイズ可能な CRUD テーブルを生成できます.
* [c3-components](https://github.com/c3ulnta0rk/c3-components) - `@angular/material` ライブラリを拡張したオープンソースコンポーネントライブラリ.
* [simplematcomponents](https://github.com/wobkenh/simplematcomponents) - Angular Materialデザインに適合する、あるいはAngular Materialデザインを使用するAngularコンポーネントのセット。
* [Angular Material Dev UI](https://ui.angular-material.dev/home) - Angular MaterialおよびTailwind CSSベースのアプリケーション向けに、開発者がコンポーネントとブロックを探索できる1つの場所。
* [nmce](https://github.com/zijianhuang/nmce) - 複雑でデータが豊富なビジネスアプリケーション向けに、再利用可能なコードとUI強化を備えたAngular Material拡張ライブラリセット。
* [NgxMatFacetToolkit](https://github.com/drsutphin/NgxMatFacetToolkit) - Angularスタンドアローンのフェイスフィルタツールキット（Material UIベース）。
* [ngx-dynamic-stepper](https://github.com/yingyu-projects/ngx-dynamic-stepper) - Angular Materialのステッパーをベースにした、ダイナミックなウィザード風ステッパーを構築するための強力で柔軟なAngularライブラリ。
* [BuilderKit](https://builderkit.dev/) - Angular Materialをベースにした完全なUIツールキットと現代的なデザインシステム。ブロック、テンプレート、Angularアプリケーション開発のための堅固な基礎を提供。
* [angular-material-extended](https://github.com/reisi007/angular-material-extended) - Angular Materialのコミュニティ拡張（スタンドアローン、シグナル、ゾーンレス、SSR、M3テーマ設定）。
* [mat-exp](https://github.com/Angular-Material-Dev/mat-exp) - Angular Material 用のコンポーネントとスタイルのライブラリ。最新のMaterial Design 3 Expressive Design Systemに基づいて構築されている。
* [angular-material-components](https://github.com/fbf-prog64/angular-material-components) - Angular Materialプロジェクト向けに、日時選択、時間選択、色選択など、追加のコンポーネントを提供する。

### Tailwind CSSベースのUIライブラリ <a id="ui-libraries-built-on-tailwind-css"></a>

* [angular-superui](https://github.com/bhaimicrosoft/angular-superui) - Tailwind CSS v4、TypeScript、Angular 17+ Signalsに基づいて構築された、50以上あるプロダクション対応コンポーネントを備えた包括的なAngular UIライブラリ。
* [angular-tailwind-ui](https://github.com/quedicesebas/angular-tailwind-ui) - 使いやすく、シンプルなコンポーネント、ディレクティブ、サービス。Angular 19とTailwind CSS 3を使用。
* [bpdm/ng](https://github.com/bpdm-hq/bpdm-ui) - Angular CDKおよびTailwind CSSで構築された、アクセシブルでテーマ化可能なAngularコンポーネントライブラリ。共有されたデザイントークンセットに基づき、ネイティブReactバージョンも提供。
* [elbe-ui](https://github.com/marcjulian/elbe-ui) - Tailwind CSSとSpartan UIを用いて構築されたAngular UIコンポーネント。
* [Flowbite](https://flowbite.com/docs/getting-started/angular/) - Tailwind CSSで構築されたオープンソースUIコンポーネの、Angular対応バージョン。
* [FlyonUI](https://github.com/themeselection/flyonui) - [Integrate](https://flyonui.com/framework-integrations/angular/) FlyonUI を Angular と Tailwind CSS で構築し、現代的でレスポンシブな UI を作成し、開発プロセスを効率的にスムーズにします.
* [Galaxy UI](https://github.com/buikevin/galaxy-design) - Angular向けのユニバーサルコンポーネントライブラリで、美しい、アクセシブルなコンポーネントを提供。
* [koala-ui](https://github.com/igordrangel/koala-ui) - 現代的でアクセシブルなコンポーネントライブラリ。インターフェース開発を加速するため設計されている。
* [ng-brutalism](https://github.com/khangtrannn/ng-brutalism) - Neo-brutalistなAngular UIライブラリ。Signals、Zoneless、Tailwind CSS v4を採用。強調されたボーダー、オフセットシャドウ、意見をもつ美学を端まで貫いている。
* [Metronic](https://keenthemes.com/metronic/tailwind/docs/getting-started/integration/angular) - Tailwind CSSを用いた、現代的でスケーラブルなウェブアプリケーションを効率的に構築するための包括的なUIツールキット。
* [ngx-lite-suite](https://github.com/michaelsch72/ngx-lite-suite) - Glassmorphism、グラデーション、フローアニメーションを備えた「Lite Suite」デザインシステムに基づくAngular UIライブラリ。
* [ngx-tailwindcss](https://github.com/pegasusheavy/ngx-tailwindcss) - Tailwind CSS 4+に対応したカスタマイズ可能なAngular UIライブラリ。アクセシブルで美しく設計されたコンポーネントを提供し、完全なスタイル制御を可能にする。
* [ngx-tw](https://github.com/bugMaker-237/ngx-tw) - Tailwind CSSで構築された包括的なコンポーネントライブラリ。現代的でカスタマイズ可能なUIコンポーネントをAngularアプリケーションに提供。
* [nicacoder-ng](https://ng.nicacoder.com/) - カスタマイズ可能なコンポーネントを中央集約したAngularライブラリ。開発を加速し、プロジェクトの一貫性を確保する。
* [Preline UI](https://preline.co/docs/frameworks-angular.html#docs-on-this-page-sidebar) - [Preline](https://github.com/htmlstreamofficial/preline) は、ユーティリティファーストの Tailwind CSS フレームワークに基づく、事前構築された UI コンポーネントのオープンソースセットです.
* [PrimeBlocks](https://primeblocks.org/) - 急速なアプリケーション開発に最適化されたプロフェッショナルなUIブロック。
* [seacotools](https://github.com/Seacotec/seacotools) - 現代的なAngularアプリケーション向けに設計されたライブラリ。Tailwind CSSと互換性のある再利用可能なUIコンポーネントとサービスを提供。
* [semantic-components](https://github.com/gridatek/semantic-components) - Semantic HTML、完全なアクセシビリティ、軽量な柔軟性を備えたモジュラリティを持つAngular CDKとTailwind UI要素。
* [simui](https://github.com/dofu-lab/simui) - Tailwind CSSとSpartanを用いて構築された美しいAngular UIコンポーネント。
* [starting-point-ui](https://github.com/gufodotdev/starting-point-ui) - shadcn/uiにインスパイアされた、フレームワークに依存しないTailwind CSSコンポーネント。Angularと完全に互換。
* [synerity-ui](https://github.com/synerity-ai/synerity-ui) - エンタープライズ級のAngular 20以降向けライブラリ。現代アプリ向けに90以上、アクセシブルかつパフォーマンスの高いTailwindスタイルのコンポーネントを提供。
* [Tailkit UI](https://tailkit.com/) - 細心の注意を払い、カスタマイズ可能で完全にレスポンシブなTailwind CSSコンポーネント、テンプレート、ツールをプロジェクトに適用。
* [tailng](https://github.com/tociva/tailng) - Tailwindでスタイルを適用したAngularコンポーネントにより、マテリアル風のUIを実現。
* [volt-ui](https://github.com/Andersseen/volt-ui) - シグナル、Tailwind CSS v4、CVA、および `ng-primitives` を使用して構築された、完全にアクセス可能でテーマ化可能な Angular コンポーネント.
* [zapui](https://github.com/zapuilib/zapui) - Tailwind CSS をベースにした設計システムから、スケーラブルな Angular アプリケーションを構築できます。 [zap:ui](https://zapui.togethercreative.co.uk/)

### UIライブラリ／フレームワークIonic <a id="ui-library-and-framework-ionic"></a>

* [Official website](https://ionicframework.com)
* [Official GitHub repository](https://github.com/ionic-team/ionic-framework)
* [Ionic Academy](https://ionicacademy.com/) - Ionicを学ぶための最も効率的な方法。
* [Elite Ionic](https://eliteionic.com/) - Angular開発者向けの高度なトレーニング。NEXT LEVELのネイティブWebアプリケーションを作成するための学習。
* [Ionic Start](https://ionicstart.com/) - Angularを学びながら、Ionicでウェブアプリとネイティブモバイルアプリを構築。現代的な反応型開発を学ぶ。
* [awesome-cordova-plugins](https://github.com/danielsogl/awesome-cordova-plugins) - Cordova/PhoneGapで構築されたモバイルアプリに搭載されたネイティブ機能とオープンウェブ技術。TypeScript対応も含む。
* [ionic-angular-library](https://github.com/rdlabo-team/ionic-angular-library) - Ionic Angularアプリ開発に役立つコンポーネントとサービスのコレクション。
* [ionic-angular-collect-icons](https://github.com/rdlabo-team/ionic-angular-collect-icons) - ionIconsをグループ化し、自動でエクスポートファイルを生成するライブラリ。小さなプロジェクトでのaddIcons()管理を簡略化。
* [IDEA-Ionic8-extra](https://github.com/iter-idea/IDEA-Ionic8-extra) - Ionic 8 に基づいた [IDEA's](https://www.iter-idea.com/) の追加コンポーネントとサービス。それぞれが異なる NPM パッケージで配布されています.
* [ionic-component-snippets](https://github.com/LennonReid/ionic-component-snippets) - 公式ではないIonicのデモやライブラリのリポジトリ。開発者やアプリに依然として価値を提供。
* [ionic-header-parallax](https://github.com/RaschidJFR/ionic-header-parallax) - このディレクティブは、`ion-header` 要素にパラレル効果を適用し、ページ上部にカバー写真を表示し、スクロールダウン時に通常のツールバーに切り替えることができます.
* [ionic-state](https://github.com/godenji/ionic-state) - Ionicアプリにおけるステート処理に必要なユーティリティを提供。
* [ionx-search-select](https://github.com/kisimediaDE/ionx-search-select) - 現代的な Angular/Ionic 検索・選択機能。スタンドアローンコンポーネント、シグナル、および完全な `ControlValueAccessor` サポートを備えています.
* [ionic-insta-api-wrapper](https://github.com/appit-online/ionic-insta-api-wrapper) - Instagramコンテンツ（ストーリー、リール、投稿、プロフィール）をログインとクッキー対応で取得する軽量Ionic/Cordovaライブラリ。
* [ionic-adv-tooltip](https://github.com/PhaZRic/ionic-adv-tooltip) - Ionic Angular向けに、テンプレート、画像、動画、ライブプレビューをホスト上でレンダリングするメディア豊かなツールチップとポップオーバー。
* [PushApp-Capacitor](https://github.com/mehery-soccom/PushApp-Capacitor) - Ionic/Angular/Capacitorアプリでのプッシュ通知、アプリ内メッセージ、イベントトラッキング、セッション管理用のCapacitorプラグイン。

### UIプリミティブ <a id="ui-primitives"></a>

* [ng-primitives](https://github.com/ng-primitives/ng-primitives) - アクセシビリティ、カスタマイズ性、開発者体験に重点を置いた低レベルUIコンポーネントライブラリ。
* [primitives](https://github.com/radix-ng/primitives) - [Radix UI](https://www.radix-ui.com/) のプリミティブを Angular に移植したものです。アクセス可能でカスタマイズ可能です。
* [vacui-ui](https://github.com/DanielAlcaraz/vacui-ui) - ヘッドレスAngularライブラリ。最初の要素として、ユーティリティファーストのプリミティブと低レベルディレクティブを提供。
* [ngx-headless](https://github.com/fawadtariq/ngx-headless) - [Headless UI](https://headlessui.com) および [FormKit](https://formkit.com) にインスパイアされた、スタンドアローンでアクセス可能な Angular プリミティブのコレクション。
* [Clean Architecture Frontend](https://github.com/ialiaslani/caf) - クリーンアーキテクチャで構築されるフロントエンドアプリ開発に必要なドメインに依存しないプリミティブ。React、Vue、Angular、または将来のフレームワークと互換。
* [@luminacn/ui](https://github.com/luminacn/ui) - Angular向けのシグナルファーストのヘッドレスUIプリミティブ。
* [Bloc UI](https://github.com/debasish1996/BLOC-UI) - デザインの意見を一切持たない軽量かつアクセシブルなAngularコンポーネント。自社スタイルを使用するか、オプションのテーマパッケージを使用。
* [angular-primitives](https://github.com/snatuva/angular-primitives) - スケーラブルでアクセシブルなUIシステム構築に必要な、Angular向けのシグナルファーストのプリミティブ。

### ビューアー <a id="viewers"></a>

* [file-viewer](https://github.com/ameyb88/file-viewer) - Angularアプリケーション向けにPDF、画像、ドキュメント、スプレッドシートなど、多数のファイル形式をサポートする強力で汎用的なファイルプレビュー用ライブラリ
* [json-diff](https://github.com/mufasa-dev/Json-diff) - JSONオブジェクトの2つを迅速に比較し、違いをハイライト表示できるAngular開発用ツール
* [ngx-diff](https://github.com/rars/ngx-diff) - テキストの差分を表示するAngularコンポーネントライブラリ
* [ngx-gist](https://github.com/ProAngular/ngx-gist) - GitHub gistやローカルコードスニペットをAngular Materialとhighlightjsスタイルで表示するディスプレイボックス
* [ngx-json-diff-viewer](https://www.npmjs.com/package/ngx-json-diff-viewer) - 2つのJSONオブジェクト間の差分を視覚的に表示するAngularコンポーネント
* [ngx-json-schema-viewer](https://github.com/jy95/ngx-json-schema-viewer) - Angularで動作するJSONスキーマ閲覧ツール
* [ngx-json-treeview](https://github.com/MichaelDoyle/ngx-json-treeview) - Angular向けに折りたたみ可能なJSONツリービュー
* [ngx-omniview](https://github.com/binapani-edu/ngx-omniview) - 単一コンポーネントで、プレーンテキスト、HTML、マーカード、LaTeX、MathJax、JSONなど、すべての原始文字列入力をスムーズに表示する、すべてのコンテンツを一括表示するAngular用コンテンツ閲覧ツール
* [ngx-profile-comparison](https://github.com/singharsh0/ngx-profile-comparison) - ユーザーのプロフィール2つを視覚的に比較し、類似点と違いをハイライト表示する、高品質でプロダクション対応のAngularコンポーネのライブラリ
* [ngx-serial-console](https://github.com/binuud/ngx-serial-console) - シリアルデバイスからの出力情報をモニタリングするAngularコンポーネントとサービス
* [ngx-universal-viewer](https://github.com/Imishu29/ngx-universal-viewer) - PDF、Word、Excel、PowerPointファイルを連続スクロールまたはページごとに表示するAngularコンポーネント
* [ngx-voyage](https://github.com/mschn/ngx-voyage) - AngularおよびPrimeNG向けのファイルエクスプローラ
* [ngx-file-peek](https://github.com/valtonngara/ngx-file-peek) - 任意のURLまたはストレージソースから実際のファイルコンテンツをスライドとして表示する、Angularのスタンドアローンコンポーネントライブラリ
* [ngx-json-explorer](https://github.com/Swaraj55/ngx-json-explorer) - インライン編集、検索、オプションベースの設定を含む、インタラクティブかつ完全にカスタマイズ可能なAngular JSONツリーコンポーネント
* [ngx-superlite-img-viewer](https://github.com/david-marquez-44/ngx-superlite-img-viewer) - 画像ギャラリーを高速かつ直感的に表示する、超軽量のAngularライブラリ

### 視覚効果 <a id="visual-effects"></a>

* [angular-tag-cloud-module](https://github.com/d-koppenhagen/angular-tag-cloud-module) - このモジュールにより、ワードクラウド／タグクラウドを生成できます
* [levita](https://github.com/Jeromearsene/levita) - 軽量な3Dの傾きとパラレル効果、加速度センサー対応
* [ng-snowfall](https://github.com/Leksip/ng-snowfall) - マウスの動きに反応し、風の効果をリアルに再現する、インタラクティブなAngularの雪の降り方コンポーネント
* [ng-whiteboard](https://github.com/mostafazke/ng-whiteboard) - 軽量なAngularの白板コンポーネント
* [@craftedcode-dev/ngx-analog-clock](https://github.com/craftedcode-dev/ngx-analog-clock) - タイムゾーン対応、カスタムテーマ、豊富なスタイルオプションを備えたAngularアプリケーション向けアナログ時計コンポーネント
* [@DerStimmler/ngx-analog-clock](https://github.com/DerStimmler/ngx-analog-clock) - Angularアプリ向けカスタマイズ可能なアナログ時計
* [ngx-color-scheme](https://github.com/rbalet/ngx-color-scheme) - Angularアプリに暗黒モードを簡単に追加
* [ngx-countdown](https://github.com/cipchk/ngx-countdown) - シンプルで使いやすく、パフォーマンスの高いカウントダウン
* [ngx-fancy](https://github.com/ineam/ngx-fancy) - テンプレート要素の間の華やかな分離線
* [ngx-font-picker](https://github.com/zefoy/ngx-font-picker) - Angular向けGoogleフォントのフォント選択ウィジェット
* [ngx-gauge](https://github.com/ashish-chopra/ngx-gauge) - Angularアプリおよびダッシュボード向けに高度にカスタマイズ可能なゲージコンポーネント
* [ngx-glassy-effect](https://github.com/anassmdi/ngx-glassy-effect) - AngularのディレクティブでHTML要素にガラス効果を適用
* [ngx-globe](https://github.com/omnedia/ngx-globe) - アニメーションされた地球を含むコンテナを作成するためのシンプルなコンポーネントライブラリ
* [ngx-gooey](https://github.com/wadie/ngx-gooey) - Angular向けのゴーイ効果、形状のブロブ／メタボールに使用
* [ngx-lamp](https://github.com/omnedia/ngx-lamp) - シンプルなコンポーネリブラリでランプを作成
* [ngx-neon-underline](https://github.com/omnedia/ngx-neon-underline) - Angularでコンポーネントに光り輝くネオン下線効果を提供するライブラリ
* [ngx-parallax-stars](https://github.com/DerStimmler/ngx-parallax-stars) - パラレル効果を持つ美しい星を生成するAngularライブラリ
* [ngx-waterbox](https://github.com/vwochnik/ngx-waterbox) - 異方性の水箱コンポーネント

## 基盤技術 <a id="underlying-technologies"></a>

### RxJS <a id="rxjs"></a>

* [Official website](https://rxjs.dev/) - JavaScript向けの反応性拡張ライブラリ
* [eslint-plugin-rxjs-x](https://github.com/JasonWeinzierl/eslint-plugin-rxjs-x) - [eslint-plugin-rxjs](https://github.com/cartant/eslint-plugin-rxjs) のフォークで、ESLint flat config のサポートを追加し、変更と改善を含むもの。
* [learn-rxjs](https://github.com/btroncone/learn-rxjs) - RxJSに関する明確な例、説明、リソース
* [ng-event-bus](https://github.com/cristiammercado/ng-event-bus) - Angular向けのRxJSベースのメッセージバスサービス
* [ngx-device-permission](https://github.com/PhilipSh/ngx-device-permission) - Angularでデバイス許可（カメラ、マイク、地理位置など）を反応的に扱うためのライブラリ
* [ngx-operators](https://github.com/nilsmehlhorn/ngx-operators) - Angular向けのRxJS演算子
* [operators](https://github.com/jscutlery/devkit/tree/main/packages/operators) - このパッケージは、いくつかのよく使われるパターンを簡略化するためのRxJS演算子をまとめています
* [reactive-event-source](https://github.com/andreasnicolaou/reactive-event-source) - 軽量なRxJSベースのEventSourceラッパーで、自動再接続、漏れ防止、反応型状態管理を提供
* [redux-observable](https://github.com/redux-observable/redux-observable) - Reduxにおけるアクションの副作用を"Epics"を使って処理するRxJSのミドルウェア
* [rx-computed](https://github.com/jscutlery/devkit/tree/main/packages/rx-computed) - シグナルの `computed()` の、Async RxJSベースのバージョン。
* [@mrOranger/RxJs](https://github.com/mrOranger/RxJs) - Reactive Programmingの理論と例を、RxJSライブラリを使って解説
* [rxjs-broker](https://github.com/chrisguttandin/rxjs-broker) - WebRTC DataChannelsとWebSockets向けのRxJSメッセージブローカー
* [rxjs-challenge](https://github.com/AngularWave/rxjs-challenge) - Observableスキルを練習するための小さなRxJSパズル一覧
* [rxjs-collection](https://github.com/henryruhs/rxjs-collection) - RxJSによる配列、マップ、WeakMap、セット、WeakSetの拡張
* [rxjs-common](https://github.com/paddls/rxjs-common) - 便利なRxJSオペレーターを集めたコレクション
* [rxjs-conduit](https://github.com/Fasteroid/rxjs-conduit) - RxJSのReplaySubjectsに追加機能を追加し、反応型プログラミングをより簡単にする
* [rxjs-course](https://github.com/angular-university/rxjs-course) - Angular UniversityによるRxJSコース
* [subscribable-things](https://github.com/chrisguttandin/subscribable-things) - さまざまなブラウザAPI向けの反応型ラッパーを一覧にしたコレクション
* [subsiphon](https://github.com/shobeiry/subsiphon) - 複数のRxJSサブスクリプションを管理するための軽量ユーティリティ。インデックスまたは名前付きキーとシンプルなクリーンアップメソッドを提供
* [web-serial-rxjs](https://github.com/gurezo/web-serial-rxjs) - TypeScriptによるWeb Serial API向けの反応型RxJSラッパーを提供するライブラリ。ウェブアプリケーションにおけるシリアルポート通信を簡単に行えるようにする

### TypeScript <a id="typescript"></a>

* [Official website](https://www.typescriptlang.org/)
* [Official TypeScript REPL](https://www.typescriptlang.org/play/)
* [Official GitHub repository](https://github.com/Microsoft/TypeScript)
* [DefinitelyTyped GitHub repository](https://github.com/DefinitelyTyped/DefinitelyTyped) - 高品質なTypeScript型定義を提供するリポジトリ
* [guardz](https://github.com/thiennp/guardz) - 軽量で、依存関係のないTypeScript型ガード。実行時検証と構造化されたエラー処理を可能にする
* [mutates](https://github.com/IKatsuba/mutates) - 強力な TypeScript AST モディファイションツールセット。`ng-morph` からフォークされたもので、Angular を超えるプロジェクト全体の変換を可能にします。
* [quicktype](https://github.com/glideapps/quicktype) - JSON、Schema、GraphQLから型と変換を生成
* [Sheriff](https://github.com/softarc-consulting/sheriff) - TypeScriptプロジェクト向けの軽量モジュール化
* [Total TypeScript Book](https://github.com/total-typescript/total-typescript-book) - 来年のTotal TypeScript書籍の補助リポジトリ
* [transform.tools](https://transform.tools/json-to-typescript) - APIレスポンスの入力をタイプする時間を大幅に節約できるJSONからTypeScriptへの変換ツール
* [trpc](https://github.com/trpc/trpc) - 高速に開発し、何も壊さない。端末から端末まで型安全なAPIを簡単に実現
* [ts-essentials](https://github.com/ts-essentials/ts-essentials) - すべての必須TypeScript型を一つの場所に集約
* [ts-pattern](https://github.com/gvergnaud/ts-pattern) - TypeScript向けの包括的なパターンマッチングライブラリ。スマートな型推論を提供
* [ts-serializer](https://github.com/paddls/ts-serializer) - モデルを強制型のTypeScriptクラスにシリアライズする
* [tsconfig](https://github.com/smartrecruiters/tsconfig) - SmartRecruitersのtsconfigにはすべての厳密なルールが含まれており、プロジェクトの型安全性を向上させる
* [typebox](https://github.com/sinclairzx81/typebox) - TypeScript向けのJSONスキーマ型ビルダーで、静的型解決を提供
* [type-challenges](https://github.com/type-challenges/type-challenges) - オンラインジャッジ付きのTypeScript型チャレンジのコレクション
* [type-fest](https://github.com/sindresorhus/type-fest) - 必須なTypeScript型のコレクション。パッケージを依存関係として追加するか、必要な型をコピー＆ペーストするかのいずれか。
* [typehero](https://github.com/typehero/typehero) - TypeScript開発者たちのコミュニティとつながり、協力し、成長する
* [typescript-book](https://github.com/gibbok/typescript-book) - TypeScriptでの効果的な開発に必要な簡潔なガイド
* [valibot](https://github.com/fabian-hiller/valibot) - 構造データの検証に用いる、モジュール化されたかつ型安全なスキーマライブラリ
* [zod](https://github.com/colinhacks/zod) - TypeScriptを第一に設計されたスキーマ検証と静的型推論

## フレームワーク相互運用 <a id="framework-interoperability"></a>

### フレームワーク横断統合 <a id="cross-framework-integration"></a>

* [detector](https://github.com/kitium-ai/detector) - 依存関係なし、TypeScriptを第一に設計したライブラリで、プラットフォーム、フレームワーク、ブラウザ、機能の高速かつユニバーサルな検出を実現
* [@oguimbal/ngx-react](https://github.com/oguimbal/ngx-react) - ReactとAngularのコンポーネントのスムーズな統合を可能にし、両者間の無駄な移行を容易にする
* [ngx-reactify](https://github.com/knackstedt/ngx-reactify) - AngularとReactアプリケーションを一緒に実行できるようにするライブラリ
* [ng-react-bridge](https://github.com/john310897/ng-react-bridge) - 軽量なAngularパッケージで、開発者がディレクティブを使用して、ReactコンポーネントをAngularコンポーネント内にスムーズにレンダリングできるようになる
* [gong](https://github.com/fullstack-lang/gong) - Go（Gin、Gorm、純粋なSQLite）バックエンドとAngular Materialフロントエンドを備えたフルスタックフレームワーク
* [@retejs/angular-plugin](https://github.com/retejs/angular-plugin) - node、接続、ソケット、コントロールコンポーネントを含むクラシック設定を備えた Angular プラグイン。[Rete.js](https://retejs.org/) に基づいて構築されています。
* [Stencil](https://stenciljs.com/docs/angular) - あなたのウェブコンポーネントに対してAngularコンポーネ的ラッパーを生成する
* [AnQst](https://github.com/DusteDdk/AnQst) - 共有DSLからAngularサービスとネイティブQtウィジェットを生成し、AnQst CLIおよびホストライブラリを介してAngularアプリケーションがQWidgetベースのC++UIにコンパイルできるようにする
* [rozie.js](https://github.com/One-Learning-Community/rozie.js) - Vue/Alpine風のコンポーネントファイルを、実行時オーバーヘッドやラッパーのボイラープレートなしで、ネイティブなAngularコードに変換する、フレームワークを越えたコンパイラ

### 外部統合 <a id="external-integration"></a>

* [Sentry](https://docs.sentry.io/platforms/javascript/guides/angular/configuration/integrations/) - 開発者中心のエラートラッキングとパフォーマンスモニタリングプラットフォーム
* [DataDog](https://docs.datadoghq.com/integrations/rum_angular/) - Datadog Angular統合により、パフォーマンス問題を迅速に解決できる
* [Elastic](https://www.elastic.co/guide/en/apm/agent/rum-js/current/angular-integration.html) - Angularアプリケーション向けのリアルユーザーモニタリングJavaScriptエージェント
* [@elastic/apm-rum-angular](https://www.npmjs.com/package/@elastic/apm-rum-angular) - Elastic APMによるAngularアプリケーションのリアルユーザー監視
* [Partytown](https://partytown.qwik.dev/angular/) - リソース消費の多い第三者スクリプトをメインスレッドからWeb Workerに移動
* [Pega](https://community.pega.com/marketplace/component/angular-sdk) - Angular SDKはConstellationJSエンジンとAngularベースのデザインシステムを接続するブリッジおよびDXコンポーネントを含む
* [Postcat](https://github.com/Postcatlab/postcat) - AngularとElectronをベースにした軽量かつ拡張可能なAPIツール
* [NativeScript](https://docs.nativescript.org) - JavaScriptランタイム（強制型）にプラットフォームAPIを直接提供し、豊かなTypeScript開発体験を実現
* [Strich](https://docs.strich.io/angular-integration-guide.html) - ウェブブラウザ内でのリアルタイム、複数フォーマットのバーコードスキャン用JavaScriptライブラリ
* [stream-chat-angular](https://github.com/GetStream/stream-chat-angular) - Angular Chat SDK ➜ Stream Chat。簡単なチャットアプリの構築
* [foblex2D](https://github.com/siarheihuzarevich/foblex2D) - `Foblex Flow` で使用される、2D幾何学のユーティリティ（ポイント、線、ベクトル、形状、変換）を備えた Angular ライブラリ。
* [Bloomreach Angular SDK](https://github.com/bloomreach/spa-sdk/blob/main/packages/ng-sdk/README.md) - Angularベースアプリケーションとの簡易なヘッドレス統合を提供する [Bloomreach Content](https://www.bloomreach.com/en/products/content) との統合。
* [ngx-notion-cms](https://github.com/borjamrd/ngx-notion-cms) - NotionのコンテンツをAngularアプリケーションを通じてCMSとしてレンダリング
* [Otter](https://github.com/AmadeusITGroup/otter) - ローカライズ、テスト、カスタマイズ、CMS駆動の動的設定に特化した高度にモジュラリズムを持つAngularフレームワーク
* [HyperFormula](https://hyperformula.handsontable.com/guide/integration-with-angular.html#demo) - TypeScriptによるフォーマル解析/評価用ヘッドレススプレッドシートエンジン、Angular統合デモ付き
* [fusio-sdk-javascript-angular](https://github.com/apioo/fusio-sdk-javascript-angular) - このSDKは、Angularアプリケーションが [Fusio](https://www.fusio-project.org/) と統合できるようにするもので、 [backend](https://github.com/apioo/fusio-apps-backend) および [developer](https://github.com/apioo/fusio-apps-developer) などのプロジェクトで使用されているものである.
* [limitless-angular](https://github.com/limitless-angular/limitless-angular) - 強力なAngularライブラリのコレクションで、Angularエコシステムを強化し、 `Sanity.io` の統合に注目したアプリケーション開発を支援する.
* [Bit](https://bit.dev/docs/angular-introduction/) - Bitを活用して、組み立て可能なソフトウェアを構築
* [angular-twitter-timeline](https://github.com/mustafaer/angular-twitter-timeline) - Angular公開Twitterタイムラインウィジェット
* [ngx-signalr-websocket](https://github.com/yurivoronin/ngx-signalr-websocket) - Angular用の軽量ASP.NET SignalRクライアント
* [Keploy](https://keploy.io/docs/quickstart/openhospital/) - Angular UIとのインタラクションによりテストケースとモックを記録し、Keployでテストを行う
* [alterior](https://github.com/alterior-mvc/alterior) - モジュラリズムを備えたサービス構築用同士の同士のTypeScriptフレームワーク、Angular統合がスムーズ
* [23blocks SDK](https://github.com/23blocks-OS/frontend-sdk) - モジュラリズのバックエンドブロックを活用し、フルスタックアプリを10倍速く構築
* [ngx-unity](https://github.com/jjmhalew/ngx-unity) - Unity WebGL/WebGPUとAngular間の両方向通信を安全に実現する型安全なブリッジ
* [ngx-wp-shortcode](https://codeberg.org/tomaszatoo/ngx-wp-shortcode.git) - AngularアプリケーションがWordPressショートコードをネイティブなAngularコンポーネントとしてレンダリングできるライブラリ
* [ngx-iobroker](https://github.com/pottio/ngx-iobroker) - このライブラリは、Angularアプリケーションに [ioBroker](https://www.iobroker.net/) サーバーを迅速かつ簡単に統合できるようにする.
* [AngularDart](https://github.com/flutterdocteur/angulardart) - テンプレート言語とコンポーネントモデルを明確に分離したウェブフレームワークで、複雑で維持性の高いウェブアプリケーションの構築が容易

### ラッパー <a id="wrappers"></a>

* [angular-calendly](https://github.com/tolutronics/angular-calendly) - 現代的なAngularライブラリで、 [Calendly](https://calendly.com/) サイケイングウィジェットを埋め込むためのスタンドアローンコンポーネントを提供する.
* [angular-email-editor](https://github.com/unlayer/angular-email-editor) - [Unlayer](https://unlayer.com/embed) のドラッグ＆ドロップメールエディタをAngularのラッパーコンポーネントとして提供.
* [angular-three](https://github.com/angular-threejs/angular-three) - [THREE.js](https://github.com/mrdoob/three.js) 用のAngular Renderer.
* [atlas-editor](https://github.com/sumanthnagireddi/atlas-editor) - ReactベースのAtlaskitエディタおよびサイドナビゲーションウェブコンポーネントを動的にロードするAngularのラッパー
* [chat-widget-adapters](https://github.com/livechat/chat-widget-adapters) - [LiveChat](https://developers.livechat.com/) チャットウィジェット（JavaScript API）のAngularラッパー.
* [ckeditor5-angular](https://github.com/ckeditor/ckeditor5-angular) - Angular 2+ 用の公式 CKEditor 5 リッチテキストエディタ コンポーネント
* [cytoscape-angular](https://github.com/michaelbushe/cytoscape-angular) - 生産性を確保したAngularライブラリで、 [Cytoscape.js](https://js.cytoscape.org/) を使用して高度なグラフ可視化機能を提供する.
* [d3-cloud-angular](https://github.com/maitrungduc1410/d3-cloud-angular) - D3 Cloudコンポーネント（Angular用）で、 [d3-cloud](https://github.com/jasondavies/d3-cloud) をベースに構築したもの.
* [flowchart-sequence-designer-angular](https://github.com/ag-gr-hub/flowchart-sequence-designer-angular) - [flowchart-sequence-designer](https://github.com/ag-gr-hub/flowchart-sequence-designer) のAngularラッパー.
* [gojs-angular](https://github.com/NorthwoodsSoftware/gojs-angular) - [GoJS](https://gojs.net/latest/index.html) ダイアグラム、パレット、オーバービューを管理するためのAngularコンポーネントのセット.
* [@foisit/angular-wrapper](https://github.com/boluwatifee4/foisit/tree/main/libs/angular-wrapper) - Angular アプリケーション向けの AI を活用した会話型アシスタント
* [lyne-angular](https://github.com/sbb-design-systems/lyne-angular) - [Lyne Web Components](https://github.com/sbb-design-systems/lyne-components) のAngularラッパー.
* [@interopio/ng](https://www.npmjs.com/package/@interopio/ng) - のIO Connectライブラリをプロジェクト内で初期化および使用する際に簡易化するための Angularラッパー. [IO Connect](https://interop.io/)
* [ng-elementum](https://github.com/MillerSvt/ng-elementum) - 現代的な `@angular/elements` のフォークで、AngularコンポーネントとWeb Components標準の統合を強化する.
* [ngfire](https://github.com/qarapace/ngfire) - Firebase JS SDK への最小限の Angular ワッパー
* [ng-number-flow](https://github.com/phalla-doll/ng-number-flow) - [number-flow](https://github.com/barvian/number-flow) — アクセシブルかつアニメーション付き数字コンポーネント — のAngularラッパー.
* [ngx-apexgantt](https://github.com/apexcharts/ngx-apexgantt) - [ApexGantt](https://github.com/apexcharts/apexgantt) を使用してSVGベースでGanttダイアグラムを作成するJavaScriptライブラリのAngularラッパー.
* [ngx-apexsankey](https://github.com/apexcharts/ngx-apexsankey) - [ApexSankey](https://github.com/apexcharts/apexsankey) — サンキーダイアグラムを作成するJavaScriptライブラリ — のAngularラッパー.
* [ngx-apextree](https://github.com/apexcharts/ngx-apextree) - [ApexTree](https://github.com/apexcharts/apextree) — オーガナイズおよび階層構造のチャートを作成するJavaScriptライブラリ — のAngularラッパー.
* [ngx-barcode6](https://github.com/efgiese/ngx-barcode6) - Angular 9以降向けの1次元バーコードを作成するためのAngularコンポーネント（ [JsBarcode](https://github.com/lindell/JsBarcode) をベースに）.
* [ngx-boomerangjs](https://github.com/mcvendrell/ngx-boomerangjs) - Angular 21以降向けの [boomerangjs](https://github.com/akamai/boomerang) のラッパーで、自動スクリプトロードおよびAngularの依存関係注入システムによるリアルユーザー監視（RUM）サポートを提供する。
* [ngx-chessground](https://github.com/topce/ngx-chessground) - Angular向けの[chessground](https://github.com/ornicar/chessground)のラッパー.
* [ngx-d3](https://github.com/simonegosetto/ngx-d3) - [D3](https://d3js.org/)をAngularアプリケーションに導入するためのラッパーサービス。[d3-ng2-service](https://github.com/tomwanzek/d3-ng2-service)を参考にした.
* [ngx-fabric-wrapper](https://github.com/zefoy/ngx-fabric-wrapper) - Angular向けの[Fabric](http://fabricjs.com/)のラッパーライブラリ.
* [ngx-filesize](https://github.com/amitdahan/ngx-filesize) - Angular向けの[filesize.js](https://filesizejs.com/)のラッパー.
* [ngx-grapesjs](https://github.com/Developer-Plexscape/ngx-grapesjs) - Angular向けの[GrapesJS](https://grapesjs.com)のラッパーライブラリ.
* [ngx-highlight-js](https://github.com/cipchk/ngx-highlight-js) - [highlight.js](https://highlightjs.org/)のシンタックスハイライト用のAngularラッパー.
* [ngx-kel-agent](https://github.com/k0swe/ngx-kel-agent) - Angularアプリケーションに[kel-agent](https://github.com/k0swe/kel-agent)を統合するためのクライアントライブラリ.
* [ngx-linkifyjs](https://github.com/code-name-jack/ngx-linkifyjs) - Angular向けの[Linkify](https://github.com/nfrasser/linkifyjs)ラッパーで、URL、メールアドレス、ハッシュタグ、メンションを自動検出し、HTMLリンクに変換する.
* [ngx-neoline](https://github.com/smartargs/ngx-neoline) - Angular向けの[NeoLine](https://tutorial.neoline.io/) N3 dAPIラッパー。プロバイダーを検出、READYを待機し、型付きメソッドを公開する.
* [ngx-open-web-ui-chat](https://github.com/JealousyM/ngx-open-web-ui-chat) - Socket.IOストリーミング、会話履歴、マークダウン対応を備えた[Open WebUI](https://openwebui.com/)チャットを埋め込むためのAngularコンポーネントライブラリ.
* [ngx-pendo](https://github.com/yociduo/ngx-pendo) - Angular で Pendo を読み込むためのシンプルなワッパー
* [ngx-pixel-code](https://github.com/Dev-AlienX/ngx-pixel-code/tree/main/ngx-pixel-code) - 動的テーマロードとカスタムスタイルを備えたスタンドアローンAngular `highlight.js`ラッパー.
* [ngx-sentry](https://github.com/DSI-HUG/ngx-sentry) - Angular向けの[Sentry JavaScript SDK](https://github.com/getsentry/sentry-javascript)のラッパー.
* [ngx-serializer](https://github.com/paddls/ngx-serializer) - Angular向けの`@paddls/ts-serializer`ライブラリのラッパー.
* [ngx-simple-text-diff](https://github.com/jjtortosa/ngx-simple-text-diff) - テキストの差分を表示するためのAngularライブラリ。[diff](https://www.npmjs.com/package/diff)ライブラリを使用する.
* [ngx-socket-io](https://github.com/rodgc/ngx-socket-io) - Angular向けの[Socket.IO](https://socket.io/)モジュール.
* [ngx-tagify](https://github.com/Brakebein/ngx-tagify) - Angular向けの[Tagify](https://github.com/yaireo/tagify/)をラッパーしたライブラリ.
* [ngx-three](https://github.com/demike/ngx-three) - Angularプロジェクトで[Three.js](https://threejs.org)を宣言的に使用する方法.
* [ngx-three-globe](https://github.com/omnedia/ngx-three-globe) - `Three.js`を用いて構築されたインタラクティブな3Dグローバルビジュアライゼーションを提供するAngularライブラリ.
* [ngx-virtual-select](https://github.com/zinetnorf/ngx-virtual-select) - Angularに[Virtual Select](https://github.com/sa-si-dev/virtual-select)を統合するためのコンポーネント.
* [ngx-vis](https://github.com/visjs/ngx-vis) - Angular向けの[vis.js](https://visjs.org/)のラッパー。
* [ngx-viz](https://github.com/vedph/ngx-viz) - シンプルな Angular [viz.js](https://viz-js.com/) ワッパーで [DOT graphs](https://graphviz.org/doc/info/lang.html) をレンダリングします。
* [ngx-webdatarocks](https://github.com/WebDataRocks/ngx-webdatarocks) - [WebDataRocks](https://www.webdatarocks.com/)のAngularラッパー。[実装例](https://github.com/WebDataRocks/pivot-angular)を参照してWebレポートツールを統合できる。
* [ngx-xyflow](https://github.com/knackstedt/ngx-xyflow) - [xyflow](https://github.com/xyflow/xyflow) の Angular ワッパーです。
* [rive-angular](https://github.com/Grandgular/rive) - 現代的な Angular ワッパーで、反応型状態管理を備え、Angular signals と zoneless アーキテクチャで構築された [Rive](https://rive.app/) アニメーションに対応します。
* [seatsio-angular](https://github.com/seatsio/seatsio-angular) - Angular ワッパーで [Seats.io](https://www.seats.io/) セッティングチャートをレンダリングします。
* [simplyfire](https://github.com/coturiv/simplyfire) - Firebase クラウド関数および Angular 用の軽量 Firestore API
* [zag-angular](https://github.com/makuko/zag-angular) - [zag](https://github.com/chakra-ui/zag)のAngularラッパー。

## Angularに着想を得たソリューション <a id="angular-inspired-solutions"></a>

* [angular-style-injector](https://github.com/emmat-york/angular-style-injector) - Angular の Injector にインスパイアされた軽量な依存関係注入コンテナ
* [di](https://github.com/kaokei/di) - このライブラリは、[InversifyJS](https://github.com/inversify/InversifyJS) および [typedi](https://github.com/typestack/typedi) に類似する軽量な依存関係注入ライブラリです。
* [flexdi](https://github.com/AndreyShashlovDev/flexdi) - NestJS および Angular をインスパイアした、React、React Native、Vue3 用の柔軟かつ軽量な DI ライブラリ
* [gapi](https://github.com/Stradivario/gapi) - Angular をインスパイアし、複雑な Node.js GraphQL バックエンドアプリケーションを最小限の労力で提供するもの
* [GTPL](https://github.com/garag-lib/GTPL) - Vue、Angular AOT、JSX をインスパイアし、Direct DOM と Proxy を使用した反応型テンプレート用の TypeScript ライブラリ。9KB のコンパクトなパッケージ。
* [illuma](https://github.com/git-illuma/core) - TypeScript 用の Angular 風の依存関係注入
* [indulgent](https://github.com/frodi-karlsson/indulgent) - 外部依存なしで、実行時パフォーマンスを最適化したウェブ開発用の TypeScript ユーティリティセット
* [injection-js](https://github.com/mgechev/injection-js) - 高速かつよくテストされた JavaScript/TypeScript 依存関係注入ライブラリ。Angular の `ReflectiveInjector` から抽出されたものです。
* [ioc](https://github.com/Isqanderm/ioc) - Angular および NestJS をインスパイアした、TypeScript アプリケーション向けの強力で柔軟な逆制御（IoC）コンテナ
* [knifecycle](https://github.com/nfroidure/knifecycle) - Angular にインスパイアされた非侵襲的な依存関度注入を用いて、Node.js プロセスのライフサイクルを自動的に管理
* [Lua-Generate](https://github.com/Gabriel-c0Nsp/Lua-Generate) - Angular の ng ツールをインスパイアした、ブレードコードを生成する CLI ツール
* [named-slots](https://github.com/maybebot/named-slots) - React コンポーネント向けの宣言的な「ホール」。Vue、Svelte、Angular、WebComponents の slots をインスパイア。
* [needle-di](https://github.com/needle-di/needle-di) - JavaScript および TypeScript プロジェクト向けの軽量かつ型安全な依存関係注入（DI）ライブラリ
* [npm-clang-format-node](https://github.com/lumirlumir/npm-clang-format-node) - LLVM Clang の clang-format および git-clang-format のネイティブバイナリ向けの Node ワッパー。[clang-format](https://github.com/angular/clang-format) にインスパイアされています。
* [ozean](https://github.com/ozeanjs/ozean) - Bun ランタイムに基づく現代的、シンプルで高パフォーマンスなウェブフレームワーク。Angular ユーザーが馴染みのある開発体験とアーキテクチャを提供。
* [react-di-lite](https://github.com/zobla-kv/react-di-lite) - Angular のサービスをインスパイアした、React 用の軽量かつ階層的な依存関係注入
* [@joanpablo/reactive_forms](https://github.com/joanpablo/reactive_forms) - Angular の反応型フォームをインスパイアした、モデル駆動型のフォームとバリデーション用の Dart ライブラリ
* [reaktiv](https://github.com/buiapp/reaktiv) - Angular の反応性モデルをインスパイアした、Python 用の反応型シグナル（first-class async サポートあり）
* [rgenex](https://github.com/asengar14/rgenex) - React向けのAngular‑CLI風ジェネレータ。コンポーネント、훅、ページを即座にスケルトン化。
* [rxor](https://github.com/nsevendev/rxor) - React に反応型シグナルを導入。Angular Signals、Vue 3 の `ref/computed`、および SolidJS にインスパイアされています。
* [Signals](https://github.com/dmytrodemchenko/Signals) - TypeScriptおよびJavaScript向けのゼロ依存、グリッチフリーな反応信号。最適化されたAngular風プッシュ/プルアーキテクチャを採用。
* [sio](https://github.com/silicia-apps/sio) - シルキアフレームワーク：Ionicをベースにした新規アプローチ。ハイブリッドアプリケーションおよびウェブサイトの開発を簡素化する。
* [UnReact.js](https://github.com/arnvjshi/unreactpjs) - AngularとReactの長所を融合した現代的なフレームワーク。コンポーネント間の通信を強化。
* [use-vue-service](https://github.com/kaokei/use-vue-service) - 軽量なVue 3の状態管理。Angularサービスにインスパイアされたデプロイインジェクションを採用。
* [weave](https://github.com/weave-framework/weave) - 細かい反応性とシグナルネイティブなUIフレームワーク。

## 外部リスト <a id="external-lists"></a>

* [awesome-utils-dev](https://github.com/pegaltier/awesome-utils-dev/blob/master/utils-coding/utils-angular-list.md) - 完全な Angular リソース—必要であれば、その他の情報の最終的な選択肢です。
* [awesome-angular](https://github.com/DaanDeSmedt/awesome-angular)
* [Angular Enterprise](https://angular-enterprise.com/en/ngcategory/resources/)
* [framework.dev](https://angular.framework.dev/)
