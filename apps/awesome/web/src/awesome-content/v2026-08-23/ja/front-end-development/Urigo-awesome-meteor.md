---
title: "Awesome Meteor"
description: "Meteorのパッケージ、開発ツール、アプリの例、書籍、講座、コミュニティ資料。非推奨資料は別の節に掲載。"
licenseSource: "github-Urigo-awesome-meteor-readme-md"
---

# Awesome Meteor

Meteorのコレクション、認証、ファイル、デプロイ、テストなどに使うパッケージと開発ツールを探せます。アプリの例、書籍、講座、コミュニティ資料も含み、固定版の上流リストで非推奨とされた資料を別の節にまとめています。

[Meteorの公式資料一覧](https://www.meteor.com/tools/resources)。

## はじめに

導入のための資料。

- [Meteorの公式チュートリアル](https://www.meteor.com/tutorials/react/creating-an-app)
- [公式ガイド](http://guide.meteor.com/)

## コレクション

コレクション用のヘルパーと拡張。

- [simple-schema](https://github.com/aldeed/simple-schema-js) - MongoDBの更新修飾オブジェクトを直接検証できるJavaScriptのスキーマ検証パッケージ。
- [aldeed:collection2](https://github.com/aldeed/meteor-collection2/) - クライアントとサーバーで挿入・更新操作を自動検証。
- [dburles:collection-helpers](https://github.com/dburles/meteor-collection-helpers/) - 独自に定義したヘルパーでコレクションを変換。
- [matb33:collection-hooks](https://github.com/Meteor-Community-Packages/meteor-collection-hooks) - Mongo.Collectionを拡張し、insert/update/remove/find/findOneの前後に実行するフックを提供。
- [reywood:publish-composite](https://github.com/Meteor-Community-Packages/meteor-publish-composite) - リアクティブな結合を使い、複数のコレクションから関連文書の集合を配信。
- [jagi:astronomy](https://github.com/jagi/meteor-astronomy/) - Meteorのモデル層。
- [cultofcoders:grapher](https://github.com/cult-of-coders/grapher) - Meteorコレクションの結合と、GraphQLに似たリアクティブなクエリ。
- [sakulstra:aggregate](https://github.com/sakulstra/meteor-aggregate) - Meteorに集約処理の対応を追加。
- [quave:collections](https://github.com/quavedev/collections) - 標準的な方法でコレクションを作成。

## REST

MeteorのREST対応。

- [maka:rest](https://atmospherejs.com/maka/rest) - MeteorアプリをHTTPとDDPの両方から自動でアクセス可能にする。
- [vatfree:restivus](https://github.com/vatfree/meteor-restivus) - MeteorアプリのRESTエンドポイントを作成。

## フォームとテンプレート

テンプレート用ヘルパー。

- [uniforms](https://github.com/vazco/uniforms) - フォームの生成・検証用Reactコンポーネントとヘルパー。[`simpl-schema`との統合](https://uniforms.tools/docs/installation)。
- [aldeed:autoform](https://github.com/aldeed/meteor-autoform) - 基本的なフォーム用UIコンポーネントとヘルパー。挿入・更新イベントとリアクティブな検証を自動で行う。
- [ostrio:templatehelpers](https://github.com/VeliovGroup/Meteor-Template-helpers) - Blazeテンプレート用のユーティリティヘルパー。
- [aldeed:template-extension](https://github.com/aldeed/meteor-template-extension) - 既存テンプレートの置換と、他のテンプレートからのヘルパー・イベントの継承に対応するMeteorパッケージ。
- [kadira:blaze-layout](https://github.com/TeamGrid/blaze-layout) - Blazeのレイアウト管理。Meteor FlowRouterと組み合わせて使える。

## ユーザーと認証

ユーザーと認証を扱うツール。

- [accounts-js](https://github.com/accounts-js/accounts) - 柔軟な認証・アカウント管理をアプリに組み込むためのパッケージ群。
- [alanning:roles](https://github.com/Meteor-Community-Packages/meteor-roles) - 組み込みのアカウントパッケージにロール機能を追加。
- [meteor-user-status](https://github.com/Meteor-Community-Packages/meteor-user-status) - ユーザーとそのメタデータを追跡。
- [accounts-ui](https://github.com/e-Potek/accounts-ui/) - Meteor 1.3以降で使うReact用アカウントUI。

## 管理

Meteorアプリを管理するツール。

- [Meteor Candy](https://www.meteorcandy.com/) - アプリに管理画面を追加。
- [yogiben:admin](https://github.com/yogiben/meteor-admin) - 管理用ダッシュボード。
- [houston:admin](https://github.com/gterrono/houston) - 設定不要の、Django Adminに似たMeteor用管理画面。
- [zodern:pure-admin](https://github.com/zodern/meteor-pure-admin) - 分離されており、カスタマイズできるMeteor用管理画面。

## 監視

Meteorアプリを監視するツール。

- [kschingiz:meteor-elastic-apm](https://github.com/kschingiz/meteor-elastic-apm) - Elastic APMに基づくMeteorのパフォーマンス監視。
- [monti-apm-agent](https://github.com/monti-apm/monti-apm-agent) - Meteorのパフォーマンス監視。
- [lmachens:kadira](https://github.com/lmachens/kadira) - Meteorのパフォーマンス監視。

## パフォーマンス

Meteorアプリのパフォーマンスを改善するツール。

- [cultofcoders:redis-oplog](https://github.com/cult-of-coders/redis-oplog) - MeteorのMongoDB Oplogを完全に置き換えるRedis Oplogの実装。
- [staringatlights:fast-render](https://github.com/abecks/meteor-fast-render) - fast-renderのフォーク。固定版の上流リストでは活発にメンテナンスされていると記載されている。
- [epotek:method-cache](https://github.com/e-Potek/method-cache) - DataLoaderを使うMeteorメソッドのキャッシュ。
- [maestroqadev:pub-sub-lite](https://github.com/adtribute/pub-sub-lite) - 配信を非リアクティブに変更。
- [artillery-engine-meteor](https://github.com/kschingiz/artillery-engine-meteor) - MeteorJSアプリ向けのArtillery負荷テスト。

## デプロイ

Meteorアプリをデプロイ・保守するツール。

- [meteor-up](https://github.com/zodern/meteor-up) - Meteorのデプロイ。
- [meteor-google-cloud](https://github.com/EducationLink/meteor-google-cloud) - Google Cloud App Engine FlexibleへのMeteorのデプロイを自動化。
- [mup-aws-beanstalk](https://github.com/zodern/mup-aws-beanstalk) - Meteor Upを使ってMeteorアプリをAWS Elastic Beanstalkへデプロイ。
- [meteor-azure](https://github.com/fractal-code/meteor-azure) - Azure App ServiceへのMeteorのデプロイを自動化。
- [pm2-meteor](https://github.com/andruschka/pm2-meteor) - PM2を使ってMeteorアプリをデプロイ・スケール・実行。
- [meteor-hero](https://github.com/jkrup/meteor-hero) - 1つのコマンドでMeteorJSアプリをHerokuへデプロイ。固定版の上流リストでは無料と説明されている。
- [meteor-kubernetes-guide](https://github.com/Gregivy/meteor-kubernetes-guide) - KubernetesでMeteorアプリをデプロイ。
- [meteorhacks:cluster](https://github.com/lmachens/cluster) - 負荷分散とサービス検出に対応するMeteorのクラスタリング。
- [demeteorizer](https://github.com/onmodulus/demeteorizer) - Meteorアプリを「標準的な」Node.jsアプリに変換。
- [percolate:migrations](https://github.com/percolatestudio/meteor-migrations) - Meteorのシンプルなマイグレーションシステム。
- [yamup](https://github.com/bordalix/yamup) - Dockerを使わず、自分のUbuntuサーバー（EC2など）へMeteorアプリをデプロイ。
- [waveshosting](https://github.com/nicolaslopezj/waveshosting) - Meteorのデプロイを管理するWebアプリ。

### Docker イメージ

- [meteor-docker](https://github.com/zodern/meteor-docker)
- [meteor-base](https://github.com/disney/meteor-base)
- [docker-meteor](https://github.com/tozd/docker-meteor)

## ルーター

Blaze用のルーター。

- [ostrio:flow-router-extra](https://github.com/VeliovGroup/flow-router) - `flow-router`の拡張。固定版の上流リストでは、当時の最新Meteorリリースに対応する最新状態のパッケージと説明されている。
- [msavin:parrot](https://github.com/msavin/Parrot) - MeteorでSPAを構築するために設計されたWebルーター。
- [meteorhacks:picker](https://github.com/meteorhacks/picker) - Meteorのサーバー側ルーター。
- [iron:router](https://github.com/iron-meteor/iron-router) - Meteor向けに設計され、サーバーとブラウザーの両方で動作するルーター。

## オフライン

Meteorのオフライン対応ツール。

- [ground:db](https://github.com/GroundMeteor/db) - Meteorのオフラインデータベースとメソッドを提供する薄い層、GroundDB。
- [npdev:collections](https://github.com/CaptainN/npdev-collections) - MeteorでSSRに対応したオフラインコレクションを作成。
- [meteor-service-worker](https://github.com/NitroBAY/meteor-service-worker) - Meteor固有のService Worker実装。
- [quave:pwa](https://github.com/quavedev/pwa) - PWAを設定できるMeteorパッケージ。

## テスト

テストツール。

- [meteortesting:mocha](https://github.com/meteortesting/meteor-mocha) - MeteorのMochaテストドライバー。
- [lmieulet:meteor-coverage](https://github.com/serut/meteor-coverage) - Meteorのテストカバレッジ。
- [hubroedu:mocha](https://github.com/hubroedu/meteor-mocha/) - cultofcoders:mochaのDecaffed版フォーク。
- [antwaremx:meteorman](https://github.com/antwaremx/meteorman) - Meteorのメソッドと配信をテストするGUI付きDDPクライアント、Meteorman。Postmanに似た用途。

## SEO

検索エンジン最適化ツール。

- [ostrio:spiderable-middleware](https://github.com/VeliovGroup/spiderable-middleware/) - ES6（ECMAScript2015）対応のプリレンダリング（Spiderableとも呼ばれる）。検索エンジンがMeteorアプリをクロールできるようにする。

## ファイル

Meteorでのファイル処理。

- [ostrio:files](https://github.com/VeliovGroup/Meteor-Files) - DDP、HTTP、WebRTC/DCによるファイルアップロード。Meteorサーバーのファイルシステム、AWS、GridFS、DropBox、Google Driveに対応。
- [@reactioncommerce/file-collections](https://github.com/reactioncommerce/reaction-file-collections) - Node、Meteorアプリ、ブラウザーのJavaScriptで、ファイルのアップロード・保存・ダウンロードに対応するNPMパッケージ群、Reaction FileCollections。
- [netanelgilad:excel](https://github.com/netanelgilad/meteor-excel) - Excelファイル（xlsx、xls）の解析と生成。
- [mikkelking:slingshot](https://github.com/Back2bikes/meteor-slingshot) - MeteorからAWS S3、Google Cloud Storageなどへファイルを直接アップロード。

## 検索・並べ替え・ページネーション

検索、並べ替え、ページネーション用のツール。

- [percolate:find-from-publication](https://github.com/versolearning/find-from-publication) - 指定した配信から公開されたすべての文書を検索できるようにする。
- [meteor-publish-join](https://github.com/nlhuykhang/meteor-publish-join#readme) - 非リアクティブな値や集約値を配信するNPMパッケージ。
- [tmeasday:publish-counts](https://github.com/percolatestudio/publish-counts) - カーソルの件数をリアルタイムで配信。
- [meteorhacks:search-source](https://github.com/meteorhacks/search-source) - 検索用のリアクティブなデータソース。
- [matteodem:easy-search](https://github.com/matteodem/meteor-easy-search) - BlazeコンポーネントとElastic Searchに対応する検索。
- [alethes:pages](https://github.com/alethes/meteor-pages) - Meteorのページネーション。

## モバイル

モバイル開発。

- [meteor-react-native](https://github.com/TheRealNate/meteor-react-native) - Meteor仕様に準拠したReact Native用Meteorクライアント。
- [meteor-push](https://github.com/activitree/meteor-push) - Cordova（iOS、Android）とブラウザー（Chrome、Safari、Firefox）のプッシュ通知。
- [quave:universal-links](https://github.com/quavedev/universal-links) - Universal Linksを有効にするために、ネイティブのiOS設定を公開できるMeteorパッケージ。
- [meteoric:ionic](https://github.com/meteoric/meteor-ionic) - Meteor用のIonicコンポーネント。
- [driftyco:ionic](https://github.com/driftyco/ionic) - Meteorの公式Ionic対応。
- [martijnwalraven:meteor-ios](https://github.com/martijnwalraven/meteor-ios) - DDPを通じてネイティブiOSアプリをMeteorプラットフォームに統合。
- [delight-im/Android-DDP](https://github.com/delight-im/Android-DDP) - Androidのクライアント向けDDP。
- [okland:accounts-phone](https://github.com/okland/accounts-phone) - 携帯電話番号に基づくMeteorのログインサービス。
- [okland:camera-ui](https://github.com/okland/camera-ui) - デスクトップとモバイルで、1回の関数呼び出しによりUIから写真を撮影できるMeteorパッケージ。モバイルではカメラと写真ライブラリを選べる。
- [percolatestudio/cordova-plugin-safe-reload](https://github.com/percolatestudio/cordova-plugin-safe-reload) - MeteorのHot Code Pushが壊れた際に監視・復旧を行うCordovaプラグイン。

## データ可視化

チャート、地図、表など、Meteorでのデータ可視化。

- [aldeed:tabular](https://github.com/aldeed/meteor-tabular) - 大小のデータセットに対応するリアクティブなデータテーブル。
- [aslagle:reactive-table](https://github.com/aslagle/reactive-table/) - Blazeを使うMeteorのリアクティブなテーブル。
- [luixal:blaze-paginated-custom-list](https://github.com/luixal/meteor-blaze-paginated-custom-list) - リアクティブでページネーションに対応した項目リスト。
- [luixal:meteor-apexcharts](https://github.com/luixal/meteor-apexcharts) - Meteor向けにパッケージ化したリアクティブなApexChartsライブラリ。

## 分析

アクセス解析ツール。

- [okgrow:analytics](https://github.com/okgrow/analytics/) - MeteorへのGoogle Analytics、Mixpanel、KISSmetricsなどの統合。
- [quave:analytics](https://github.com/quavedev/analytics) - ページビューなどをGoogle Analyticsへ送信できるMeteorパッケージ。

## Cron ジョブ

MeteorのCronジョブ。

- [msavin:sjobs](https://github.com/msavin/stevejobs/) - Meteorを中心に設計されたジョブキュー・タスクスケジューラー。
- [percolate:synced-cron](https://github.com/percolatestudio/meteor-synced-cron) - 複数プロセス間でジョブを同期できるMeteorのCronシステム。
- [ostrio:cron-jobs](https://github.com/VeliovGroup/Meteor-CRON-jobs) - ネイティブの`setTimeout`や`setInterval`と似たAPIを持ち、実行中のすべてのMeteor（NodeJS）インスタンス間で同期するパッケージ。

## デバッグツール

デバッグツール。

- [meteor-devtools-evolved](https://github.com/leonardoventurini/meteor-devtools-evolved) - Chrome拡張機能。
- [msavin:mongol](https://github.com/msavin/Mongol/) - MeteorのMongoDBコレクションを視覚的に編集するツール。
- [msavin:jetsetter](https://github.com/msavin/JetSetter) - Meteorのセッション変数を視覚的に取得・設定するツール。
- [babrahams:constellation](https://github.com/JackAdams/constellation-distro/) - 拡張可能なMeteor開発用コンソール。

## エディタープラグイン

- [meteor-api](https://atom.io/packages/meteor-api) - Atom用のMeteorアドオン。
- [meteor-zsh](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins#meteor) - meteorコマンドの補完。

## スキャフォールディング

ひな型生成ツール。

- [Meteor Kitchen](http://www.meteorkitchen.com/) - Meteorのコード生成ツール。
- [iron-cli](https://github.com/iron-meteor/iron-cli) - Meteorアプリのひな型を生成するコマンドラインツール。
- [maka-cli](https://github.com/maka-io/maka-cli) - Webアプリのファイル構造を整理し、さまざまなアプリケーションフレームワークの日常的なパッケージインストール作業を自動化するコマンドラインツール、Maka-CLI。

## ツール

- [ESLint-plugin-Meteor](https://github.com/dferber90/eslint-plugin-meteor/) - Meteor用のESLintプラグイン。

## ボイラープレート

- [CaptainN - meteor-react-starter](https://github.com/CaptainN/meteor-react-starter) - MeteorとReactによるスタータープロジェクト。
- [Pup](https://github.com/cleverbeagle/pup)
- [matteodem - meteor-boilerplate](https://github.com/matteodem/meteor-boilerplate)
- [Webpackを使うReactとMeteorバックエンド](http://julian.io/react-with-webpack-meteor-as-a-backend/)

## オープンソースアプリ

- [Rocket.Chat](https://rocket.chat/) - Meteorで構築したリアルタイムチャットアプリ。
- [Wekan](https://github.com/wekan/wekan) - オープンソースのTrello風カンバン。
- [Unchained Shop](https://github.com/unchainedshop/unchained) - Meteorで開発したオープンソースのコマースプラットフォーム。
- [VulcanJS](https://github.com/VulcanJS/Vulcan) - React、GraphQL、Meteorでアプリを素早く構築するためのツールキット。
- [Nosqlclient](https://github.com/nosqlclient/nosqlclient) - MongoDBの管理ツール。
- [radgrad2](https://github.com/radgrad/radgrad2) - Meteorを使った教育管理システム。
- [coauthor](https://github.com/edemaine/coauthor) - 共同作業・議論フォーラム、Coauthor。

## 国際化

- [Meteor-Internationalization](https://github.com/veliovgroup/Meteor-Internationalization) - プレースホルダーに対応するMeteor用のアイソモーフィックなi18nドライバー。
- [meteor-accounts-t9n](https://github.com/softwarerero/meteor-accounts-t9n/) - Meteorアカウントのエラーメッセージの翻訳。
- [meteor-universe-i18n](https://github.com/vazco/meteor-universe-i18n) - ReactとMeteor用の国際化パッケージ。

## フロントエンドフレームワーク

フロントエンドでBlazeの代わりに使う選択肢。

- [React](http://react-in-meteor.readthedocs.org/en/latest/) - ReactとMeteorを組み合わせるための資料。
- [Vue](https://github.com/meteor-vue) - VueとMeteorの組み合わせ。単一ファイルコンポーネントとApolloにも対応。
- [Svelte](https://github.com/zodern/melte) - MeteorとSvelteによるWebアプリの構築。
- [Angular 2](https://github.com/Urigo/angular2-meteor) - Angular 2とMeteorの組み合わせ。
- [Angular](https://github.com/Urigo/angular-meteor) - AngularとMeteorの組み合わせ。
- [Famo.us](https://github.com/gadicc/meteor-famous-views/) - Famo.usとMeteorの組み合わせ。
- [frozeman:build-client](https://github.com/frozeman/meteor-build-client) - Meteorアプリのクライアント部分をバンドルするツール。
- [Asteroid](https://github.com/mondora/asteroid) - Meteorバックエンド用の代替クライアント。
- [ddp.js](https://github.com/mondora/ddp.js) - アイソモーフィックなJavaScriptのDDPクライアント。
- [elm](https://github.com/ni-ko-o-kin/meteor-elm-example) - Meteorを使うプロジェクトのビュー層としてのelm。

## 代替データベース

MongoDBの代替となるデータベース。

- [vlasky:mysql](https://github.com/vlasky/meteor-mysql) - Meteor用のリアクティブなMySQL。
- [meteor-pg](https://github.com/Richie765/meteor-pg) - MeteorのPostgreSQL対応。
- [ostrio:neo4jdriver](https://github.com/VeliovGroup/ostrio-neo4jdriver/) - GrapheneDBに対応するMeteorのNeo4jドライバー。
- [numtel:pg](https://github.com/numtel/meteor-pg) - Meteor用のリアクティブなPostgreSQL。
- [simple:rethink](https://github.com/Slava/meteor-rethinkdb) - MeteorへのRethinkDB統合。

## リソース

Meteorの書籍、講座、チュートリアル、Webサイト、コミュニティ資料。

## 書籍

- [Meteor Explained](https://gumroad.com/l/meteor-explained) - Meteorを解説する書籍。
- [Secure Meteor](https://www.securemeteor.com/) - Meteorのセキュリティを扱う書籍。
- [meteor-tuts](https://www.meteor-tuts.com/) - 無料。
- [Meteor Tips](http://meteortips.com/) - Meteorのヒントを扱う無料の書籍。
- [Pro Meteor](https://pdfslide.net/documents/pro-meteor-book.html) - 無料の書籍。
- [Meteor Cookbook](https://github.com/awatson1978/meteor-cookbook) - Meteorのクックブック。

## コース

### 無料 <a id="free"></a>

- [How to Create an App](https://www.youtube.com/c/Howtocreateanappdev/videos) - 固定版の上流リストで、最も新しい状態の資料と紹介されている。
- [EventedMind](https://learn-meteor.netlify.app/) - 古い資料だが、Meteorの内部の仕組みを詳しく解説。

### 有料 <a id="paid"></a>

- [Udemy - Learn React and Meteor in 2021: Build a multiplayer game](https://www.udemy.com/course/modern-web-development-with-react-and-meteor-2021/) - ReactとMeteorでマルチプレイヤーゲームを作る2021年の講座。
- [Udemy - Realtime Applications with Meteor and Vue](https://www.udemy.com/course/meteor-vue) - MeteorとVueによるリアルタイムアプリを扱うスペイン語の講座。
- [leveluptutorials](https://www.leveluptutorials.com/) - 一部に無料のチュートリアルを含み、主にMeteor 1.xを扱う。

## チュートリアル

- [Phusion Passenger: Meteor tutorial](https://github.com/phusion/passenger/wiki/Phusion-Passenger:-Meteor-tutorial) - Phusion PassengerのMeteorチュートリアル。
- [When a Meteor finally hits production](https://medium.com/@davidyahalomi/when-a-meteor-finally-hits-production-6c37b81f795b) - Meteorアプリのデプロイについてのブログ記事。
- [Transform any Meteor App into a PWA](https://dev.to/jankapunkt/transform-any-meteor-app-into-a-pwa-4k44) - MeteorアプリをPWAにする方法。

## ブログ

- [Meteorの公式ブログ](http://blog.meteor.com)
- [Meteorのポッドキャスト](http://podcast.crater.io)

## Web サイト

- [公式サイト](https://www.meteor.com/)
- [公式ドキュメント](http://docs.meteor.com/)
- [公式ガイド](http://guide.meteor.com/)
- [Atmosphere](https://atmospherejs.com/) - Meteorのパッケージ、資料、ツールのカタログ。
- [Packosphere](https://packosphere.com/) - [Kelly Copley](https://github.com/copleykj)が構築した、Meteorパッケージシステムの代替フロントエンド。
- [Discover Meteor](https://book.discovermeteor.com/) - Meteorを扱う書籍。
- [Meteorpedia](http://www.meteorpedia.com) - 固定版の上流リストでは[更新頻度が低い](http://www.meteorpedia.com/special/RecentChanges/)と説明されている。
- [ミートアップ](http://meteor.meetup.com/)
- [Reddit](https://www.reddit.com/r/meteor)
- [YouTube](https://www.youtube.com/channel/UC3fBiJrFFMhKlsWM46AsAYw) - 世界各地のミートアップの動画。
- [Meteorの非公式FAQ](https://github.com/oortcloud/unofficial-meteor-faq)
- [The Meteor Chef](https://themeteorchef.com)

### Q&A

- [Stack Overflow](http://stackoverflow.com/questions/tagged/meteor?sort=newest&pagesize=15)
- [Meteorフォーラム](https://forums.meteor.com/)

### コミュニティニュースレター

- [zodern](https://zodern.me/newsletter.html)
- [StorytellerCZ](https://forums.meteor.com/t/meteor-community-newsletter/50598)

## ソーシャル

- [公式Twitterアカウント](https://twitter.com/meteorjs)
- [Meteor Community OrganizationのSlackチャンネル](https://github.com/Meteor-Community-Packages/organization#slack)

## 求人情報

- [Awesome Meteor Jobs](https://github.com/harryadel/awesome-meteor-jobs)
- [We work Meteor](https://www.weworkmeteor.com/)
- [公式求人掲示板](https://jobs.meteor.com/)

## 関連

- [Awesome Meteor Developers](https://github.com/harryadelb/awesome-meteor-developers)
- [Awesome Blaze](https://github.com/arggh/awesome-blaze)

## Meteor で構築

固定版の上流リストで、Meteorを使った商用レベルのアプリとして紹介されているものです。

- [Qualia](https://www.qualia.com/) - 不動産分野のスタートアップ。
- [Code Signal](https://codesignal.com/) - スキルに基づく評価プラットフォーム。
- [Pathable](https://github.com/Urigo/awesome-meteor/blob/070dad0cb587e98ad40d252a9659d8bdcab68772/Pathable) - イベント管理ツール群。
- [MaestroQA](https://www.maestroqa.com/) - 品質保証ソフトウェア。

## 非推奨

固定版の上流リストでは、以下の資料は当時のMeteorの現行バージョンとの互換性がなくなったと説明されています。

- [Meteor 1.4 + React For Everyone Tutorials](https://www.leveluptutorials.com/tutorials/meteor-1-4-react-for-everyone-tutorials) - Meteor 1.4とReactのチュートリアル。
- [Meteor 1.4 For Everyone](https://www.leveluptutorials.com/tutorials/meteor-1-4-for-everyone) - Meteor 1.4の教材。
- [Intermediate Meteor](https://www.leveluptutorials.com/tutorials/intermediate-meteor) - Meteorの中級教材。
- [Meteor For Everyone Tutorials](https://www.leveluptutorials.com/tutorials/meteor-for-everyone-tutorials) - Meteorのチュートリアル。
- [tuts+ - Single Page Web Apps with Meteor](http://code.tutsplus.com/courses/single-page-web-apps-with-meteor) - MeteorによるシングルページWebアプリの講座。
- [Building a CMS-powered blog in Meteor](https://buttercms.com/blog/meteor-cms-blog-tutorial) - CMSを使うMeteorブログの構築方法。
- [scotch.io - Building a Slack Clone in Meteor](https://scotch.io/tutorials/building-a-slack-clone-in-meteor-js-getting-started) - MeteorによるSlackクローンの構築方法。
