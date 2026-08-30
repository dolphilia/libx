---
title: "Awesome graphql GitHub Actions Workflow"
description: "graphql GitHub Actions Workflowを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-chentsulin-awesome-graphql-readme-md"
---

# Awesome graphql GitHub Actions Workflow

graphql GitHub Actions Workflowを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 {#table-of-contents}



- [awesome-graphql  ](#awesome-graphql--)
  - [Table of Contents](#table-of-contents)
  - [Specifications](#specifications)
  - [Foundations](#foundations)
  - [Communities](#communities)
  - [Meetups](#meetups)
  - [Implementations](#implementations)
    - [JavaScript/TypeScript](#javascripttypescript)
      - [Clients](#clients)
        - [Frontend Framework Integrations](#frontend-framework-integrations)
          - [React](#react)
      - [Servers](#servers)
        - [Databases \& ORMs](#databases--orms)
        - [PubSub](#pubsub)
      - [Custom Scalars](#custom-scalars)
      - [Type](#type)
      - [Miscellaneous](#miscellaneous)
      - [JavaScript Examples](#javascript-examples)
      - [TypeScript Examples](#typescript-examples)
    - [Ruby](#ruby)
      - [Ruby Examples](#ruby-examples)
    - [PHP](#php)
      - [PHP Examples](#php-examples)
    - [Python](#python)
      - [Python Examples](#python-examples)
    - [Java](#java)
      - [Custom Scalars](#custom-scalars-1)
      - [Java Examples](#java-examples)
    - [Kotlin](#kotlin)
      - [Kotlin Examples](#kotlin-examples)
    - [C/C++](#cc)
    - [Go](#go)
      - [Go Examples](#go-examples)
    - [Scala](#scala)
      - [Scala Examples](#scala-examples)
    - [.NET](#net)
      - [.NET Examples](#net-examples)
    - [Elixir](#elixir)
      - [Elixir Examples](#elixir-examples)
    - [Haskell](#haskell)
    - [SQL](#sql)
    - [Lua](#lua)
    - [Elm](#elm)
    - [Clojure](#clojure)
      - [Clojure Examples](#clojure-examples)
    - [Swift](#swift)
    - [OCaml](#ocaml)
    - [Android](#android)
      - [Android Examples](#android-examples)
    - [iOS](#ios)
      - [iOS Examples](#ios-examples)
    - [ClojureScript](#clojurescript)
    - [ReasonML](#reasonml)
    - [Dart](#dart)
    - [Rust](#rust)
      - [Rust Examples](#rust-examples)
    - [D (dlang)](#d-dlang)
    - [R (Rstat)](#r-rstat)
    - [Julia](#julia)
    - [Crystal](#crystal)
    - [Ballerina](#ballerina)
      - [Ballerina Samples](#ballerina-samples)
  - [Tools](#tools)
    - [Tools - Editors \& IDEs \& Explorers](#tools---editors--ides--explorers)
    - [Tools - Testing, Prototyping \& Mocking](#tools---testing-prototyping--mocking)
    - [Tools - Security](#tools---security)
    - [Tools - Browser Extensions](#tools---browser-extensions)
    - [Tools - Docs](#tools---docs)
    - [Tools - Editor Plugins](#tools---editor-plugins)
    - [Tools - Miscellaneous](#tools---miscellaneous)
  - [Databases](#databases)
  - [Services](#services)
    - [CDN](#cdn)
    - [CMS](#cms)
  - [Books](#books)
  - [Videos](#videos)
  - [Podcasts](#podcasts)
  - [Style Guides](#style-guides)
  - [Blogs](#blogs)
    - [Blogs - Security](#blogs---security)
  - [Posts](#posts)
  - [Tutorials](#tutorials)
  - [License](#license)



<a name="spec" />

## 仕様 {#specifications}

- [GraphQL](https://github.com/graphql/graphql-spec) - GraphQLの仕様書の作業版
- [GraphQL over HTTP](https://github.com/graphql/graphql-over-http) - HTTP上のGraphQL仕様書の作業版
- [GraphQL Relay](https://relay.dev/docs/guides/graphql-server-specification/) - Relayに準拠したGraphQLサーバー仕様書
- [OpenCRUD](https://github.com/opencrud/opencrud) - OpenCRUDはデータベース向けのGraphQL CRUD API仕様書です
- [Apollo Federation](https://www.apollographql.com/docs/federation/federation-spec/) - Apollo Federation仕様書
- [GraphQXL](https://gabotechs.github.io/graphqxl/) - GraphQXLはGraphQL言語に追加機能を提供し、大規模かつスケーラブルなサーバー側スキーマの作成を支援する拡張です
- [GraphQL Scalars](https://www.graphql-scalars.com/) - @specifiedByを使用したコミュニティが定義したカスタムスカラー仕様のホスト

<a name="foundation" />

## 財団 {#foundations}

- [GraphQL Foundation](https://graphql.org/foundation/) - Linuxフンドエーション下のGraphQLフォウンドレイション

<a name="community" />

## コミュニティ {#communities}

- [Discord - GraphQL](https://discord.graphql.org/) - GraphQL.orgの公式Discordチャンネル
- [GraphQL Weekly](https://www.graphqlweekly.com/) - GraphQLコミュニティのリソースやニュースを週に1回紹介するニュースレター
- [Apollo GraphQL Community](https://community.apollographql.com/) - 他の開発者と交流し、Apollo GraphQLプラットフォームのすべての部分について知識を共有できます
- [Discord - Reactiflux](http://join.reactiflux.com/) - Reactiflux Discordサーバーに `#help-graphql` に参加できます
- [Facebook](https://www.facebook.com/groups/795330550572866/) - ディスカッション、記事、知識共有を行うグループ
- [X](https://x.com/search?q=%23GraphQL) - ハッシュタグ `#graphql` を使用してください
- [StackOverflow](https://stackoverflow.com/questions/tagged/graphql) - 質問と回答。タグ `graphql` を使用してください
- [GraphQL APIs](https://github.com/APIs-guru/graphql-apis) - 公開されているGraphQL APIの総合リスト
- [/r/GraphQL](https://www.reddit.com/r/graphql/) - 興味深い情報やディスカッションを共有するGraphQL向けのSubreddit

<a name="meetup" />

## ミートアップ {#meetups}

- [Relay Meetup](https://relaymeetup.com/) - Relay（GraphQLクライアント）に関するグローバルなオンラインミーティング
- [Amsterdam](https://www.meetup.com/Amsterdam-GraphQL-Meetup/)
- [Bangalore](https://www.meetup.com/graphql-bangalore/)
- [Berlin](https://www.meetup.com/graphql-berlin/)
- [Buenos Aires](https://www.meetup.com/es-ES/GraphQL-BA/)
- [Copenhagen](https://www.meetup.com/Copenhagen-GraphQL-Meetup-Group/)
- [Dallas-Fort Worth](https://www.meetup.com/DFW-GraphQL-Meetup/)
- [Hamburg](https://www.meetup.com/GraphQL-Hamburg/)
- [London](https://www.meetup.com/GraphQL-London/)
- [Melbourne](https://www.meetup.com/GraphQL-Melbourne/)
- [Munich](https://www.meetup.com/GraphQL-Munich/)
- [New York City](https://www.meetup.com/GraphQL-NYC/)
- [San Francisco](https://www.meetup.com/GraphQL-SF/)
- [Seattle](https://www.meetup.com/Seattle-GraphQL/)
- [Sydney](https://www.meetup.com/GraphQL-Sydney/)
- [Tel Aviv](https://www.meetup.com/GraphQL-TLV/)
- [Wrocław](https://www.meetup.com/GraphQL-Wroclaw/)
- [Singapore](https://www.meetup.com/GraphQL-SG/)
- [Zurich](https://www.meetup.com/GraphQL-Zurich/)

<a name="impl" />

## 実装 {#implementations}

<a name="js" />

### JavaScript/TypeScript

- [graphql-js](https://github.com/graphql/graphql-js) - JavaScript用のGraphQLの実装例
- [graphql-jit](https://github.com/zalando-incubator/graphql-jit) - JITコンパイラを使用したGraphQLの実行
- [Gra*fast*](https://grafast.org) - GraphQL向けの最先端の計画および実行エンジン

#### クライアント {#clients}

- [apollo-client](https://github.com/apollographql/apollo-client) - すべてのUIフレームワークおよびGraphQLサーバー向けに、完全に機能するプロダクション用キャッシュGraphQLクライアント
- [graphql-request](https://github.com/prisma-labs/graphql-request) - Nodeおよびブラウザ向けの最小構成GraphQLクライアント
- [typescript-graphql-request](https://graphql-code-generator.com/docs/plugins/typescript-graphql-request) - GraphQL Requestを完全に型付けされたSDKとして使用
- [graphql-zeus](https://github.com/graphql-editor/graphql-zeus) - GraphQL Zeusは、または向けに自動補完機能を備えたクライアントライブラリを生成します。これは強制型クエリに対して自動補完を提供します。 `JavaScript` `TypeScript`
- [graphqurl](https://github.com/hasura/graphqurl) - 自動補完、サブスクリプション、GraphiQLを備えたGraphQL用curl。また、シンプルなユニバーサルJavaScriptのGraphQLクライアントも提供。
- [aws-amplify](https://github.com/aws-amplify/amplify-js) - アマゾンが開発したキャッシュ、分析などを含むクライアントライブラリで、GraphQLクエリを取得する方法が含まれています。
- [gqty](https://github.com/gqty-dev/gqty) - TypeScript向けのNo GraphQLクライアント
- [genql](https://github.com/remorses/genql) - 任意のGraphQL API向けの型安全なTypeScriptクライアント

##### フロントエンドフレームワーク統合 {#frontend-framework-integrations}

- [vue-apollo](https://github.com/vuejs/vue-apollo) - VueJSにおけるApollo/GraphQL統合。
- [apollo-angular](https://github.com/kamilkisiela/apollo-angular) - AngularおよびすべてのGraphQLサーバー向けの、完全に機能備えされた、生産環境対応のキャッシュ付きGraphQLクライアント。
- [svelte-apollo](https://github.com/timhall/svelte-apollo) - Apollo GraphQLとのSvelte統合
- [ember-apollo-client](https://github.com/ember-graphql/ember-apollo-client) - Apollo ClientおよびGraphQL向けのEmber CLI拡張機能
- [apollo-elements](https://github.com/apollo-elements/apollo-elements) - どのフロントエンドフレームワークでも動作するGraphQLウェブコンポーネント
- [sveltekit-kitql](https://github.com/jycouet/kitql) - SvelteKitとGraphQLを使って効率的なアプリケーションを高速に構築するためのツールセット

###### React

- [react-apollo](https://www.apollographql.com/docs/react/) - @apollo/clientの核心ライブラリは、Reactとの組み込み統合を提供しています。
- [relay](https://github.com/facebook/relay) - Relayはデータ駆動型Reactアプリケーションを構築するためのJavaScriptフレームワークです。
- [urql](https://github.com/FormidableLabs/urql) - React向けのシンプルなキャッシュGraphQLクライアント
- [graphql-hooks](https://github.com/nearform/graphql-hooks) - キャッシュとサーバー側レンダリングをサポートする、ミニマムなHooks中心のGraphQLクライアント
- [mst-gql](https://github.com/mobxjs/mst-gql) - mobx-state-treeとGraphQLとのバインディング
- [micro-graphql-react](https://github.com/arackaf/micro-graphql-react) - ReactコンポーネントにGraphQLを追加するための軽量ユーティリティ。シンプルなキャッシュを含み、GETリクエストを使用しており、サービスワーカーを通じてさらにキャッシュ可能。
- [@gqty/react](https://github.com/gqty-dev/gqty) - TypeScript向けのNo GraphQLクライアント

#### サーバー {#servers}

- [apollo-server](https://github.com/apollographql/apollo-server) - スキーマファーストで開発できる、規格準拠かつ生産用のJavaScript GraphQLサーバー。Express、Connect、Hapi、Koaなどに構築されています。
- [hapi-graphql](https://github.com/SimonDegraeve/hapi-graphql) - HapiでGraphQL HTTPサーバーを作成。
- [hapi-plugin-graphiql](https://github.com/rse/hapi-plugin-graphiql) - GraphiQLとの統合用のHapiプラグイン。
- [graphql-api-koa](https://github.com/jaydenseric/graphql-api-koa) - GraphQL.jsをゼロから実装し、ネイティブESMをサポートするGraphQL Koaミドルウェア。
- [koa-graphql](https://github.com/chentsulin/koa-graphql) - GraphQL Koaミドルウェア。
- [graphql-koa-scripts](https://github.com/ryanhs/graphql-koa-scripts) - GraphQL Koa 1ファイルで簡略化。テストに便利。
- [gql](https://github.com/deno-libs/gql) - Deno用のユニバーサルGraphQL HTTPミドルウェア。
- [mercurius](https://github.com/mercurius-js/mercurius) - Fastify用のGraphQLプラグイン。
- [graphql-yoga](https://github.com/prisma-labs/graphql-yoga) - 簡単なセットアップ、パフォーマンス、開発者体験に重点を置いた完全機能のGraphQLサーバー。
- [graphitejs](https://github.com/graphitejs/server) - GraphQL用のNodeJSフレームワーク。
- [graphql-helix](https://github.com/contrawork/graphql-helix) - 高度に進化したGraphQL HTTPサーバー。
- [pylon](https://github.com/getcronit/pylon) - 関数だけでフル機能APIを書ける。ボイラープレートコードやセットアップが不要。関数を書くだけでデプロイできる。
- [modus](https://github.com/hypermodeinc/modus) - WebAssemblyベースのサーバレスランタイムで自動生成されたGraphQL APIを提供。

##### データベース・ORM {#databases--orms}

- [graphql-sequelize](https://github.com/mickhansen/graphql-sequelize) - Sequelize用のGraphQLヘルパー。
- [graphql-bookshelf](https://github.com/brysgo/graphql-bookshelf) - BookshelfJSモデルに基づいてGraphQLスキーマを定義するための補助。
- [join-monster](https://github.com/acarl005/join-monster) - バッチデータフェッチ用のGraphQLからSQLへのクエリ実行レイヤー。

##### PubSub

- [graphql-ably-pubsub](https://github.com/ably-labs/graphql-ably-pubsub) - Ably PubSubによるGraphQLでの変更通知の発行と、サブスクリプションクエリで結果を取得。

#### カスタムスカラー {#custom-scalars}

- [graphql-scalars](https://github.com/Urigo/graphql-scalars) - 正確で型安全なGraphQLスキーマを作成するためのカスタムGraphQLスケーラーのライブラリ。

#### 型 {#type}

- [type-graphql](https://github.com/19majkel94/type-graphql) - TypeScriptを使ってクラスとデコレーターを用いてGraphQLスキーマとリゾルバーを作成！
- [graphql-nexus](https://github.com/graphql-nexus/nexus) - コードファースト、型安全なGraphQLスキーマ構築。
- [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator): タイプスクリプト（フロントエンドおよびバックエンド）やReact Hooks、resolverの署名など、カスタムプラグインおよびテンプレートに対応する柔軟なサポートを持つGraphQLコードジェネレーター
- [pothos](https://github.com/hayes/pothos) - Pothosは、タイプスクリプトで使用するGraphQLスキーマビルダーのプラグインベースのツールです。タイプスクリプトでGraphQLスキーマを構築する際の手軽さ、スピード、楽しさを実現します
- [garph](https://github.com/stepci/garph) - Garphは、タイプセーフなGraphQL APIをタイプスクリプトで構築するためのフルスタックフレームワークです
- [gqloom](https://github.com/modevol-com/gqloom) - GQLoomは、タイプスクリプト／JavaScriptで使用するGraphQLウェーバーであり、[Valibot](https://github.com/fabian-hiller/valibot)、[Zod](https://github.com/colinhacks/zod)、または[Yup](https://github.com/jquense/yup)を使用してGraphQLスキーマとresolverを織りなします
- [fast-graphql](https://github.com/idurar/fast-graphql) - Node.js、Next.JsおよびGraphQL Apolloサーバー向けにスキーマを構造化し、resolverを組み合わせ、スキーマ定義をマージするGraphQLツール
- [graphql-to-type](https://github.com/lkster/graphql-to-type) - TypeScriptの型システムで完全に記述されたGraphQLクエリパーサー。提供されたクエリに基づいてインターフェースを作成
- [gql.tada](https://github.com/0no-co/gql.tada) - GraphQLドキュメント作成ライブラリ。GraphQLクエリおよびフラグメントの結果と変数の型をタイプスクリプトの型システムで推論

#### その他 {#miscellaneous}

- [graphql-tools](https://github.com/apollographql/graphql-tools) - GraphQL-JSサーバーの構築および維持に用いるツールライブラリ
- [graphql-tag](https://github.com/apollographql/graphql-tag) - JavaScriptテンプレートリテラルタグでGraphQLクエリをパース
- [load-gql](https://github.com/KunalSin9h/load-gql) - ファイルおよびフォルダから読み込む、極小で依存関係のないGraphQLスキーマローダー
- [graphql-compose](https://github.com/graphql-compose/graphql-compose) - プラグインを介して異なるデータソースから柔軟なGraphQLスキーマを構築できるツール
- [graphql-modules](https://github.com/Urigo/graphql-modules) - モジュールまたは機能ごとにGraphQLサーバーを分割し、小さな再利用可能な部分に分ける
- [graphql-shield](https://github.com/maticzav/graphql-shield) - GraphQL APIの権限層を作成するためのライブラリ
- [graphql-shield-generator](https://github.com/omar-dulaimi/graphql-shield-generator) - あなたのGraphQLスキーマからGraphQL Shieldを発行します
- [graphqlgate](https://github.com/oslabs-beta/GraphQL-Gate) - Node.js向けのGraphQLクエリ複雑度分析を含むクエリ制限ライブラリ
- [graphql-let](https://github.com/piglovesyou/graphql-let) - GraphQLドキュメントからタイプ保護されたコードジェネレーション結果を直接インポートできるWebpackローダー
- [graphql-config](https://github.com/kamilkisiela/graphql-config) - すべてのGraphQLツールに共通の設定（ほとんどのツール、エディタおよびIDEでサポート）
- [graphql-cli](https://github.com/urigo/graphql-cli) - 一般的なGraphQL開発ワークフローに必要なコマンドラインツール
- [graphql-toolkit](https://github.com/ardatan/graphql-toolkit) - GraphQLツールの開発を加速するユーティリティセット（スキーマおよびドキュメントの読み込み、スキーマのマージなど）
- [graphql-mesh](https://github.com/urigo/graphql-mesh) - GraphQLクエリ言語を使用して、GraphQLを実行していないリモートAPI（およびGraphQLを実行しているAPI）からデータを取得する
- [sofa](https://github.com/Urigo/sofa) - あなたのGraphQL APIからREST APIを生成します。
- [graphback](https://github.com/aerogear/graphback) - データモデルを使用して、GraphQLサーバーにGraphQLCRUD API層を追加するためのフレームワークとCLI。
- [graphql-middleware](https://github.com/maticzav/graphql-middleware) - あなたのGraphQLリゾルバーをミドルウェア関数に分割します。
- [graphql-relay-js](https://github.com/graphql/graphql-relay-js) - React-Relayをサポートするgraphql-jsサーバーを構築するためのライブラリ。
- [graphql-normalizr](https://github.com/monojack/graphql-normalizr) - GraphQLレスポンスを標準化し、クライアントのキャッシュ／状態に保存します。
- [babel-plugin-graphql](https://github.com/ooflorent/babel-plugin-graphql) - GraphQLタグテンプレート文字列をコンパイルするBabelプラグイン。
- [eslint-plugin-graphql](https://github.com/apollographql/eslint-plugin-graphql) - あなたのGraphQL文字列がスキーマと一致しているかをチェックするESLintプラグイン。
- [graphql-ws](https://github.com/enisdenjo/graphql-ws) - 一貫性があり、依存関係がゼロで、遅延読み込み、シンプルなGraphQLをWebSocketプロトコルに準拠したサーバーとクライアント。
- [graphql-live-query](https://github.com/n1ru4l/graphql-live-query) - JavaScriptでリアルタイムGraphQLライブクエリ。
- [GraphVinci](https://github.com/Comcast/graphvinci) - GraphQL APIのインタラクティブなスキーマ可視化ツール。
- [supertest-graphql](https://github.com/alexstrat/supertest-graphql) - を拡張して、GraphQLエンドポイントを簡単にテストできます。 [supertest](https://github.com/visionmedia/supertest)
- [schemathesis](https://github.com/schemathesis/schemathesis) - GraphQLスキーマに一致する任意のクエリを実行してサーバーのエラーを検出します。
- [microfiber](https://github.com/anvilco/graphql-introspection-tools) - GraphQL インターリーブの結果を、有用な方法でクエリおよび操作できます
- [graphql-armor](https://github.com/Escape-Technologies/graphql-armor) - 生産環境のGraphQLエンドポイントに即時的なセキュリティ層を提供します。
- [goctopus](https://github.com/Escape-Technologies/goctopus) - 非常に高速なGraphQLの発見およびフィンガープリントツールボックス。
- [GraphQL Constraint Directive](https://github.com/confuser/graphql-constraint-directive) - @constraintをディレクティブとして使用して、入力データを検証できるようにします。Constraints Directives RFCおよびOpenAPIにインスパイアされています。
- [Validator.js Wrapper Directive](https://github.com/ktutnik/graphql-directive/tree/master/packages/validator) - バリデーションディレクティブのラップを提供する、バリデーション機能の総合的なリスト（Validator.js機能）。
- [WunderGraph Cosmo](https://github.com/wundergraph/cosmo) - （フェデレート）GraphQLのオープンソースフェデレーションソリューションで、ライフサイクルAPI管理を提供し、スキーマレジストリ、コンポジションチェック、分析、メトリクス、トレース、ルーティングを含む。
- [graphql-go-tools](https://github.com/wundergraph/graphql-go-tools) - Golangで構築されたGraphQLルーター／APIゲートウェイフレームワーク。正確性、拡張性、高性能を重視。Federation v1 & v2、サブスクリプションなどに対応。
- [graphql-sunset](https://github.com/sophiabits/graphql-sunset) - あなたのGraphQLサーバーに、将来的なバージョン変更をより正確に伝達するために、ヘッダーのサポートを迅速かつ簡単に追加できます。 `Sunset`
- [Schemato](https://www.schemato.top/graphql-to-typescript) - ブラウザ向けのみのGraphQL SDLコンバーターでTypeScript、Zod、Pydantic、Go、Rust、その他型付きモデルを生成する

<a name="js-example" />

#### JavaScriptの例 {#javascript-examples}

- [React Starter Kit](https://github.com/kriasoft/react-starter-kit) - React、Relay、GraphQL、JAMスタックアーキテクチャを用いたフロントエンドスタートキット
- [SWAPI GraphQL Wrapper](https://github.com/graphql/swapi-graphql) - SWAPIをラップしたGraphQLスキーマとサーバー
- [Relay TodoMVC](https://github.com/taion/relay-todomvc) - Relay TodoMVCにルーティングを追加
- [Apollo Client documentation](https://www.apollographql.com/docs/react) - Apollo Clientを使用したGraphQLアプリの構築に関するドキュメントと例
- [Apollo Server tools documentation](https://www.apollographql.com/docs/apollo-server/) - GraphQLサーバーの構築方法およびSQL、MongoDB、RESTエンドポイントへの接続に関するドキュメント、チュートリアル、例
- [F8 App 2017](https://github.com/fbsamples/f8app) - 2016年の公式F8アプリのソースコード。React Nativeおよびその他のFacebookオープンソースプロジェクトで構成
- [Apollo React example for Github GraphQL API](https://github.com/katopz/react-apollo-graphql-github-example) - create-react-appを使用したGitHub GraphQL APIとApollo Reactの使用例
- [Next.js TypeScript and GraphQL Example](https://github.com/zeit/next.js/tree/canary/examples/with-typescript-graphql) - Next.jsで動作するタイプ保護されたGraphQL例（内部で を使用） [graphql-codegen](https://graphql-code-generator.com/)
- [GraphQL StackBlitz Starter](https://stackblitz.com/fork/graphql) – 約2秒後にブラウザ内で実行される、編集可能なライブデモ
- [NAPERG](https://github.com/alan345/naperg) - フルスタックBoilerplate GraphQL。ReactとPrismaで構成されたもので、認証とロール機能を備えている
- [VulcanJS](http://vulcanjs.org) - フルスタックReact+GraphQLフレームワーク
- [RAN Toolkit](https://github.com/sly777/ran) - 生産環境向けツールキット/ボイラープレート。GraphQL、SSR、ホットリロード、CSS-in-JS、キャッシュなどに対応

<a name="ts-example" />

#### TypeScriptの例 {#typescript-examples}

- [Node.js API Starter](https://github.com/kriasoft/nodejs-api-starter) - Yarn v2ベースのモノレポテンプレート（コードファーストGraphQL API、PostgreSQL、PnP、ゼロインストール、サーバレス）
- [Next.js Apollo TypeScript Starter](https://github.com/borisowsky/nextjs-apollo-ts-starter) - 開発者体験を重視したNext.jsスタートプロジェクト
- [GraphQL Starter](https://github.com/cerino-ligutom/GraphQL-Starter) - TypeScript + Node Express + Apollo GraphQL APIを用いたボイラープレート
- [Mocked Managed Federation - Apollo Server 3](https://github.com/setchy/apollo-server-3-mocked-federation) - Apollo Server 3.xを使用した管理されたフェデレーションSupgraphのモック例
- [Mocked Managed Federation - Apollo Server 4](https://github.com/setchy/apollo-server-4-mocked-federation) - Apollo Server 4.xを使用した管理されたフェデレーションSupgraphのモック例
- [Next.js Advanced Graphql Crud MongoDB Starter](https://github.com/idurar/starter-advanced-graphql-crud-next-js-mongodb) - TypeScriptを用いたNext.jsとMongoDBを用いた高度なApollo GraphQLサーバーを備えたジェネリックCRUDの例

<a name="rb" />

### Ruby

- [graphql-ruby](https://github.com/rmosolgo/graphql-ruby) - FacebookのGraphQLのRuby実装
- [graphql-batch](https://github.com/Shopify/graphql-batch) - graphql gem 用のクエリバッチ実行者
- [graphql-auth](https://github.com/o2web/graphql-auth) - devise と連携する JWT 認証ラッパー
- [agoo](https://github.com/ohler55/agoo) - Facebook の GraphQL を実装した Ruby ワークサーバー
- [GQLi](https://github.com/contentful-labs/gqli.rb) - GraphQL クライアントと DSL。ネイティブ Ruby でクエリを書けるようにする。

<a name="rb-example" />

#### Rubyの例 {#ruby-examples}

- [graphql-ruby-demo](https://github.com/rmosolgo/graphql-ruby-demo) - graphql-ruby を使って Rails アプリを公開する。
- [github-graphql-rails-example](https://github.com/github/github-graphql-rails-example) - GitHub の GraphQL API を使った Rails アプリの例。
- [relay-on-rails](https://github.com/nethsix/relay-on-rails) - Relay アプリ用のシンプルなスタートキット（Rails GraphQL サーバー付き）。
- [relay-rails-blog](https://github.com/gauravtiwari/relay-rails-blog) - GraphQL、Relay、標準 Rails アプリを駆使したデモブログ。
- [to_eat_app](https://github.com/jcdavison/to_eat_app) - GraphQL/Rails/Relay アプリのサンプルと関連する3編の記事シリーズ。
- [agoo-demo](https://github.com/ohler55/agoo/tree/develop/example/graphql) - Agoo サーバーを使ってシンプルな GraphQL アプリをデモンストレーション。
- [rails-devise-graphql](https://github.com/zauberware/rails-devise-graphql) - devise、graphql および JWT 認証を備えた Rails 6 のボイラープレート。

<a name="php" />

### PHP

- [graphql-php](https://github.com/webonyx/graphql-php) - GraphQL リファレンス実装の PHP ポート。
- [graphql-relay-php](https://github.com/ivome/graphql-relay-php) - webonyx/graphql-php の GraphQL 実装に用いる Relay ヘルパー。
- [lighthouse](https://github.com/nuwave/lighthouse) - Laravel アプリから GraphQL エンドポイントを提供できる PHP パッケージ。
- [graphql-laravel](https://github.com/rebing/graphql-laravel) - Facebook の GraphQL をラップした Laravel ラッパー。
- [overblog/graphql-bundle](https://github.com/overblog/GraphQLBundle) - このバンドルは、Symfony アプリ内で完全な GraphQL サーバーを構築するためのツールを提供。React-Relay をサポート。
- [wp-graphql](https://github.com/wp-graphql/wp-graphql) - WordPress 用の GraphQL API。
- [graphqlite](https://github.com/thecodingmachine/graphqlite) - PHP クラスにアノテーションを適用することで GraphQL サーバーを書けるフレームワークに依存しないライブラリ。
- [siler](https://github.com/leocavalcante/siler) - サブスクリプションをサポートする GraphQL サーバー用のシンプルな関数群。
- [graphql-request-builder](https://github.com/dpauli/php-graphql-request-builder) - GraphQL構造でリクエストパラメータを構築する。
- [drupal/graphql](https://www.drupal.org/project/graphql) - ドリープラス9および10用のGraphQLスキーマを構築し、公開する。
- [jerowork/graphql-schema-builder](https://github.com/jerowork/graphql-attribute-schema) - PHP属性を使って、大きな設定配列を使わずに、webonyx/graphql-phpでGraphQLスキーマを簡単に構築する。

<a name="php-example" />

#### PHPの例 {#php-examples}

- [siler-graphgl](https://github.com/leocavalcante/siler/tree/main/examples/graphql) - Silerで書かれた例のGraphQLサーバー。

<a name="py" />

### Python

- [graphql-parser](https://github.com/tryolabs/graphql-parser) - Python用のGraphQLパーサー。
- [graphql-core](https://github.com/graphql-python/graphql-core) - GraphQL.js v16.3.0のリファレンス実装に基づいたPython用のGraphQL実装。
- [graphql-relay-py](https://github.com/graphql-python/graphql-relay-py) - React-Relayをサポートするgraphql-pyサーバーを構築するためのライブラリ。
- [graphql-parser-python](https://github.com/tallstreet/graphql-parser-python) - libgraphqlparserに対するPythonのラッパー。
- [graphene](https://github.com/graphql-python/graphene) - Python的な簡単な方法でGraphQLスキーマ／タイプを作成できるパッケージ。
- [graphene-gae](https://github.com/graphql-python/graphene-gae) - Google AppEngine (GAE)にGraphQLサポートを追加する。
- [django-graphiql](https://github.com/GraphQL-python-archive/django-graphiql) - DjangoプロジェクトにGraphiQLを簡単に統合する。
- [flask-graphql](https://github.com/graphql-python/flask-graphql) - FlaskアプリケーションにGraphQLサポートを追加する。
- [python-graphql-client](https://github.com/prisma/python-graphql-client) - Python 2.7以降向けのシンプルなGraphQLクライアント。
- [python-graphjoiner](https://github.com/healx/python-graphjoiner) - JOIN、SQL、またはその他の方法を使ってGraphQL APIを作成する。
- [graphene-django](https://github.com/graphql-python/graphene-django) - GrapheneのDjango統合。
- [Flask-GraphQL-Auth](https://github.com/callsign-viper/Flask-GraphQL-Auth) - Flaskにインスパイアされた認証ライブラリ（flask-jwt-extendedに基づく）。
- [tartiflette](https://github.com/dailymotion/tartiflette) - Python 3.6+ / asyncio向けのSDL第一のGraphQL実装。
- [tartiflette-aiohttp](https://github.com/dailymotion/tartiflette-aiohttp) - Tartifletteのラッパーで、aiohttp / 3.6+ / asyncioに基づいたHTTP上のGraphQL APIを公開する、[official tutorial available on tartiflette.io](https://tartiflette.io/docs/tutorial/getting-started)。
- [Ariadne](https://github.com/mirumee/ariadne) - スキーマ第一アプローチでGraphQLサーバーを実装するためのライブラリ。非同期クエリ実行、ASGI、WSGIおよび人気ウェブフレームワーク向けの標準機能がすべて備わっている、[fully documented](https://ariadnegraphql.org)。
- [django-graphql-auth](https://github.com/PedroBern/django-graphql-auth) - Djangoでの登録と認証をGraphQLで実現する。
- [strawberry](https://github.com/strawberry-graphql/strawberry) - Python向けの新しいGraphQLライブラリ。
- [turms](https://github.com/jhnnsrs/turms) - graphql-coreとpydanticをベースにした、パイソン風のGraphQLコードジェネレーター
- [rath](https://github.com/jhnnsrs/rath) - アポロのようなGraphQLクライアントで、非同期および同期インターフェースを提供
- [sgqlc](https://github.com/profusion/sgqlc) - シンプルなGraphQLクライアントにより、PythonでGraphQL APIのレスポンスを扱うのが簡単になります.

<a name="py-example" />

#### Pythonの例 {#python-examples}

- [swapi-graphene](https://github.com/graphql-python/swapi-graphene) - [Graphene](https://graphene-python.org)を用いたGraphQLスキーマとサーバー.
- [Python Backend Tutorial](https://hasura.io/learn/graphql/backend-stack/languages/python/) - [Strawberry](https://strawberry.rocks/)を用いてGraphQLサーバーを作成するチュートリアルと、[Qlient](https://qlient-org.github.io/python-qlient/site/)を用いたクライアントを作成するチュートリアル.

<a name="java" />

### Java

- [graphql-java](https://github.com/graphql-java/graphql-java) - GraphQL Java実装.
- [DGS Framework](https://github.com/Netflix/dgs-framework) - Netflixが開発したSpring Boot用のGraphQLサーバーフレームワーク.
- [graphql-java-generator](https://github.com/graphql-java-generator) - [Maven plugin](https://github.com/graphql-java-generator/graphql-maven-plugin-project)と[Gradle plugin](https://github.com/graphql-java-generator/graphql-gradle-plugin-project)を用いて、**クライアント**と**サーバー**（POJOおよびユーティリティクラス）を生成できる。サーバー部分はgraphql-javaに基づいており、すべてのボイラープレートコードを隠しています.
- [gaphql-java-type-generator](https://github.com/graphql-java/graphql-java-type-generator) - GraphQL Java用の型自動生成
- [schemagen-graphql](https://github.com/bpatters/schemagen-graphql) - POJOをGraphQL Javaのクエリ可能なオブジェクトセットに変換するスキーマ生成および実行パッケージ。これにより、任意のサービスをGraphQLサービスとして公開できるようになります.
- [graphql-java-annotations](https://github.com/Enigmatis/graphql-java-annotations) - GraphQL Javaでのスキーマ定義に、アノテーションベースの構文を提供します.
- [graphql-java-tools](https://github.com/graphql-java-kickstart/graphql-java-tools) - JSの[graphql-tools](https://github.com/apollographql/graphql-tools)をインスピレーションとして、データリゾルバーを自作しやすいスキーマファーストのGraphQL Javaの補助ライブラリ.
- [graphql-java-codegen-maven-plugin](https://github.com/kobylynskyi/graphql-java-codegen-maven-plugin) - graphql-java-toolsとよく連携し、Javaの型とリゾルバーインターフェースを生成する、スキーマファーストのMavenプラグイン。[swagger-codegen-maven-plugin](https://github.com/swagger-api/swagger-codegen/tree/master/modules/swagger-codegen-maven-plugin)をインスピレーションとしています.
- [graphql-java-codegen-gradle-plugin](https://github.com/kobylynskyi/graphql-java-codegen-gradle-plugin) - graphql-java-toolsとよく連携し、Javaの型とリゾルバーインターフェースを生成する、スキーマファーストのGradleプラグイン。[gradle-swagger-generator-plugin](https://github.com/int128/gradle-swagger-generator-plugin)をインスピレーションとしています.
- [graphql-java-servlet](https://github.com/graphql-java-kickstart/graphql-java-servlet) - graphql-javaのクエリエンドポイントをGET、POST、マルチパートアップロードで公開する、フレームワークに依存しないJavaのスリーツ（servlet）.
- [manifold-graphql](https://github.com/manifold-systems/manifold/tree/master/manifold-deps-parent/manifold-graphql) - 包括的な GraphQL クライアントの使用。スキーマファースト。型安全な GraphQL タイプ、クエリ、結果。コードジェネレーター、POJO、アノテーションなし。IntelliJ IDEA および Android Studio との優れた 。以下に を参照してください。 [IDE support](http://manifold.systems/images/graphql.mp4) [Java example](#example-java)
- [spring-graphql-common](https://github.com/oembedler/spring-graphql-common) - Spring FrameworkのGraphQLライブラリ.
- [graphql-spring-boot](https://github.com/graphql-java-kickstart/graphql-spring-boot) - GraphQLおよびGraphiQLのSpring Framework Bootスタートアップパッケージ.
- [vertx-graphql-service-discovery](https://github.com/engagingspaces/vertx-graphql-service-discovery) - マイクロサービス向けの非同期GraphQLサービスの発見とクエリリング.
- [vertx-dataloader](https://github.com/engagingspaces/vertx-dataloader) - FacebookのDataLoaderのポート。クラスタ環境における効率的かつ非同期のバッチ処理とキャッシュを実現します。
- [graphql-spqr](https://github.com/leangen/GraphQL-SPQR) - Java 8以降のAPIでGraphQLサービスの迅速開発を可能にする
- [Light Java GraphQL](https://github.com/networknt/light-graphql-4j): 軽量かつ高速なマイクロサービスフレームワークで、横断的な懸念事項が解決され、GraphQLスキーマに即座に接続可能
- [Elide](https://elide.io): JPAアノテーションされたデータモデルを、任意の関係データベース上でGraphQLサービスとして公開できるJavaライブラリ
- [federation-jvm](https://github.com/apollographql/federation-jvm) - JVM上で動作するApollo Federation
- [graphql-orchestrator-java](https://github.com/graph-quilt/graphql-orchestrator-java) GraphQL Orchestrator/Gatewayライブラリで、スキーマスタイッチングとApollo Federationディレクティブをサポートし、複数のGraphQLマイクロサービスのスキーマを1つの統合スキーマに結合
- [graphql-java-extended-validation](https://github.com/graphql-java/graphql-java-extended-validation) - graphql-javaでのフィールドおよびフィールド引数の拡張検証を提供
- [dgs-extended-formatters](https://github.com/setchy/dgs-extended-formatters) - 一般的なフォーマット用途に向けたDGSディレクティブの実験的セット

#### カスタムスカラー {#custom-scalars-1}

- [graphql-java-datetime](https://github.com/donbeave/graphql-java-datetime) - GraphQL ISO Dateは、graphql-javaと利用可能なRFC 3339準拠の日時スケーラーのセット
- [graphql-java-extended-scalars](https://github.com/graphql-java/graphql-java-extended-scalars) - graphql-java向けの拡張スケーラー

<a name="java-example" />

#### Javaの例 {#java-examples}

- [light-java-graphql examples](https://github.com/networknt/light-example-4j/tree/master/graphql) - Light Java GraphQLの例とチュートリアル
- [graphql-spqr-samples](https://github.com/leangen/graphql-spqr-samples) - Spring MVCとGraphQL-SPQRを使用したGraphQLサーバーの例
- [manifold-graphql sample](https://github.com/manifold-systems/manifold-sample-graphql-app) - Manifold GraphQLライブラリを用いたシンプルなクライアントとサーバーのアプリケーションの例
- [graphql-java-kickstart_samples](https://github.com/graphql-java-kickstart/samples) - GraphQL Java Kickstartプロジェクトの使用例
- [graphql-java-kickstart-federation-example](https://github.com/setchy/graphql-java-kickstart-federation-example) - GraphQL Java Kickstartのフェデレーション例
- [dgs-federation-example](https://github.com/Netflix/dgs-federation-example) - Netflix DGSのフェデレーション例
- [Spring Boot backend tutorial](https://hasura.io/learn/graphql/backend-stack/languages/java/) - Spring BootとNetflix DGSを使用したGraphQLサーバーとクライアントのチュート及

<a name="kotlin" />

### Kotlin

- [graphql-kotlin](https://github.com/ExpediaGroup/graphql-kotlin) - GraphQL Kotlin実装
- [manifold-graphql](https://github.com/manifold-systems/manifold/tree/master/manifold-deps-parent/manifold-graphql) - 包括的なGraphQLクライアント利用。スキーマファースト。型安全なGraphQL型、クエリ、結果。コードジェネレーター、POJO、アノテーションなし。IntelliJ IDEAおよびAndroid Studioとの優れた [IDE support](http://manifold.systems/images/graphql.mp4)。以下に [Kotlin example](#example-kotlin) を参照してください。
- [KGraphQL](https://github.com/aPureBase/KGraphQL): 純粋なKotlin実装によるGraphQLサーバーの設定
- [Kobby](https://github.com/ermadmi78/kobby) - GraphQLスキーマに基づくKotlin DSLクライアントのコードジェネレーター。生成されたDSLは、Kotlinでの複雑なGraphQLクエリ、ミューテーション、サブスクリプションの実行をサポートし、ネイティブGraphQL構文に類似する構文を持つ。
- [Graphkt](https://github.com/cufyorg/graphkt) - kotlinで構築されたGraphQLサーバーライブラリ。graphql-javaでバックエンドを構成。

<a name="kotlin-example" />

#### Kotlinの例 {#kotlin-examples}

- [manifold-graphql sample](https://github.com/manifold-systems/manifold-sample-kotlin-app) - kotlinで構築されたシンプルなGraphQLアプリケーション。クライアントとサーバーを含み、Manifold GraphQLライブラリを示す。

<a name="c" />

### C/C++

- [libgraphqlparser](https://github.com/graphql/libgraphqlparser) - C++で構築されたGraphQLクエリパーサー。CおよびC++のAPIを提供。
- [agoo-c](https://github.com/ohler55/agoo-c) - Cで構築された高性能GraphQLサーバー。 [benchmarks](https://github.com/the-benchmarker/graphql-benchmarks)
- [cppgraphqlgen](https://github.com/Microsoft/cppgraphqlgen) - C++で構築されたGraphQLスキーマサービス生成ツール。
- [CaffQL](https://github.com/caffeinetv/CaffQL) - GraphQLのイントラスペクションクエリからC++のクライアント型とリクエスト/レスポンスシリアライゼーションを生成。

<a name="go" />

### Go

- [graphql](https://github.com/graphql-go/graphql) - Goで構築されたGraphQLの実装。graphql-jsを参考に。
- [graphql-go](https://github.com/graph-gophers/graphql-go) - 使いやすさに焦点を当てたGraphQLサーバー
- [gql](https://github.com/kadirpekel/gql) - コードファースGraphQL（graphql-go/graphql）スキーマビルダー。
- [gqlgen](https://github.com/99designs/gqlgen) - GoベースのGraphQLサーバーライブラリ。
- [graphql-relay-go](https://github.com/graphql-go/relay) - React-RelayをサポートするGo/Golangサーバーを構築するためのライブラリ。
- [graphjin](https://github.com/dosco/graphjin): GraphQLでAPIを5分で構築。GraphQLからSQLへのコンパイラ。
- [graphql-go-tools](https://github.com/wundergraph/graphql-go-tools) - Golangで構築されたGraphQLルーター／APIゲートウェイフレームワーク。正確性、拡張性、高性能を重視。Federation v1 & v2、サブスクリプションなどに対応。
- [Thunder](https://github.com/Raezil/Thunder) - Go、gRPC-Gateway、Prisma、Kubernetesを活用したスケーラブルなマイクロサービスフレームワーク。REST、gRPC、GraphQLを公開。
- [grpc-graphql-gateway](https://github.com/ysugimoto/grpc-graphql-gateway) - Protocol BuffersからGraphQL実行コードを生成するプロトコルプラグイン。
<a name="go-example" />

#### Goの例 {#go-examples}

- [golang-relay-starter-kit](https://github.com/sogko/golang-relay-starter-kit) - GolangのGraphQLサーバーを用いたRelayアプリケーションの基本的な開始点。
- [todomvc-relay-go](https://github.com/sogko/todomvc-relay-go) - React/RelayのTodoMVCアプリのGoのGraphQLバックエンドによる移植。
- [go-graphql-subscription-example](https://github.com/ccamel/go-graphql-subscription-example) - WebSocket上でGraphQLを消費するためのGraphQLスキーマとサーバー。 [subscriptions](https://github.com/apollographql/subscriptions-transport-ws/blob/v0.9.4/PROTOCOL.md) (WebSocketメッセージの消費を示す)。 [Apache Kafka](https://kafka.apache.org/)
- [Go Backend Tutorial](https://hasura.io/learn/graphql/backend-stack/languages/go/) - コード生成を使ってGoのGraphQLサーバーとクライアントを作成するチュートリアル。

<a name="scala" />

### Scala

- [sangria](https://github.com/sangria-graphql/sangria) - Scalaで構築されたGraphQLサーバー実装。
- [sangria-relay](https://github.com/sangria-graphql/sangria-relay) - SangriaのRelayサポート。
- [caliban](https://github.com/ghostdogpr/caliban) - CalibanはScalaでGraphQLバックエンドを作成するための純粋に機能的なライブラリです

<a name="scala-example" />

#### Scalaの例 {#scala-examples}

- [sangria-akka-http-example](https://github.com/sangria-graphql/sangria-akka-http-example) - akka-httpと[sangria](https://sangria-graphql.github.io/)を用いたGraphQLサーバーの例
- [sangria-playground](https://github.com/sangria-graphql/sangria-playground) - Playとsangriaを用いたGraphQLサーバーの例

<a name="dotnet" />

### .NET

- [graphql-dotnet](https://github.com/graphql-dotnet/graphql-dotnet) - .NET向けのGraphQL
- [graphql-net](https://github.com/ckimes89/graphql-net) - .NET向けのGraphQLとIQueryableの変換
- [Hot Chocolate](https://github.com/ChilliCream/hotchocolate) - .Net Coreおよび.NET Framework向けのGraphQLサーバー
- [Snowflaqe](https://github.com/Zaid-Ajaj/Snowflaqe) - F#および[Fable](https://github.com/fable-compiler/Fable)向けの型安全なGraphQLコードジェネレーター
- [EntityGraphQL](https://github.com/EntityGraphQL/EntityGraphQL) - データモデルに基づいてGraphQLAPIを構築するためのライブラリで、複数のデータソースを1つのGraphQLスキーマに統合できる拡張性を備えています
- [ZeroQL](https://github.com/byme8/ZeroQL) - C#向けのLINQのようなインターフェースを備えた型安全なGraphQLクライアント

<a name="net-example" />

#### .NETの例 {#net-examples}

- [.NET backend tutorial](https://hasura.io/learn/graphql/backend-stack/languages/dotnet/) - .NETでGraphQLサーバーとクライアントを作成するチュートリアル

<a name="elixir" />

### Elixir

- [absinthe-graphql](https://github.com/absinthe-graphql/absinthe) - 完全に機能するElixirのGraphQLライブラリ
- [graphql-elixir](https://github.com/graphql-elixir/graphql) - GraphQL Elixir。（メンテナンスが終了）
- [plug_graphql](https://github.com/graphql-elixir/plug_graphql) - GraphQL Elixir向けのPlug統合
- [graphql_relay](https://github.com/graphql-elixir/graphql_relay) - GraphQL Elixir向けのRelayヘルパー
- [graphql_parser](https://github.com/graphql-elixir/graphql_parser) - [libgraphqlparser](https://github.com/graphql/libgraphqlparser)向けのElixirバインディング
- [graphql](https://github.com/asonge/graphql) - Elixir向けのGraphQLパーサー
- [plot](https://github.com/peburrows/plot) - Elixir向けのGraphQLパーサーと解決子

<a name="elixir-example" />

#### Elixirの例 {#elixir-examples}

- [hello_graphql_phoenix](https://github.com/graphql-elixir/hello_graphql_phoenix) - PhoenixにマウントされたGraphQL Elixir Plugエンドポイントの例

<a name="haskell" />

### Haskell

- [graphql-haskell](https://github.com/jdnavarro/graphql-haskell) - Haskell向けのGraphQL ASTとパーサー
- [morpheus-graphql](https://github.com/morpheusgraphql/morpheus-graphql) - Haskell向けのGraphQL API、クライアントおよびツール

<a name="sql" />

### SQL

- [GraphpostgresQL](https://github.com/solidsnack/GraphpostgresQL) - Postgres 用の GraphQL
- [sql-to-graphql](https://github.com/rexxars/sql-to-graphql) - SQL データベース構造に基づいて GraphQL API を生成
- [PostGraphile](https://github.com/graphile/postgraphile) - PostgreSQL 用の高速 GraphQL API：高度にカスタマイズ可能；プラグインで拡張可能；リアルタイム対応
- [Hasura](https://github.com/hasura/graphql-engine) - Hasura は PostgreSQL に即時リアルタイム GraphQL API を提供。既存のデータベースにも対応
- [subZero](https://subzero.cloud/) - データベース用の GraphQL および REST API

<a name="lua" />

### Lua

- [graphql-lua](https://github.com/bjornbytes/graphql-lua) - Lua 用の GraphQL

<a name="elm" />

### Elm

- [elm-graphql](https://github.com/dillonkearns/elm-graphql) - Elm 用の GraphQL

<a name="clojure" />

### Clojure

- [graphql-clj](https://github.com/tendant/graphql-clj) - Clojure で GraphQL の実装を提供するライブラリ
- [Lacinia](https://github.com/walmartlabs/lacinia) - 純 Clojure による GraphQL 実装
- [graphql-query](https://github.com/district0x/graphql-query) - Clojure(Script)でのGraphQLクエリ生成。

<a name="clojure-example" />

#### Clojureの例 {#clojure-examples}

- [Clojure Game Geek](https://github.com/walmartlabs/clojure-game-geek) - Lacinia GraphQL フレームワークチュートリアル用の例コード

<a name="swift" />

### Swift

- [GraphQL](https://github.com/GraphQLSwift/GraphQL) - GraphQL 用の Swift 実装

<a name="ocaml" />

### OCaml

- [ocaml-graphql-server](https://github.com/andreas/ocaml-graphql-server) - OCaml での GraphQL サーバー

<a name="android" />

### Android

- [apollo-android](https://github.com/apollographql/apollo-android) - 📟 Java で書かれた強型、キャッシュ機能付き Android 用 GraphQL クライアント
- [manifold-graphql](https://github.com/manifold-systems/manifold/tree/master/manifold-deps-parent/manifold-graphql) - 包括的な GraphQL クライアントの使用。スキーマファースト。型安全な GraphQL タイプ、クエリ、結果。コードジェネレーター、POJO、アノテーションなし。IntelliJ IDEA および Android Studio との優れた 。以下に を参照してください。 [IDE support](http://manifold.systems/images/graphql.mp4) [Java example](#example-java)

<a name="android-example" />

#### Androidの例 {#android-examples}

- [apollo-frontpage-android-app](https://github.com/rnitame/apollo-frontpage-android-app) - 📄 Apollo "hello world" アプリ、Android 用

<a name="ios" />

### iOS

- [apollo-ios](https://github.com/apollographql/apollo-ios) - 📱 Swift で書かれた強型、キャッシュ機能付き iOS 用 GraphQL クライアント
- [ApolloDeveloperKit](https://github.com/manicmaniac/ApolloDeveloperKit) - [Apollo iOS] 用の Apollo Client Devtools ブリッジ
- [Graphaello](https://github.com/nerdsupremacist/Graphaello) - SwiftUI から直接型安全な GraphQL

<a name="ios-example" />

#### iOSの例 {#ios-examples}

- [frontpage-ios-app](https://github.com/apollographql/frontpage-ios-app) - 📄 Apollo "hello world" アプリ、iOS 用

<a name="clojurescript" />

### ClojureScript

- [re-graph](https://github.com/oliyh/re-graph) - ClojureScript用のGraphQLクライアント。re-frameアプリケーション向けのバインディングを提供。
- [graphql-query](https://github.com/district0x/graphql-query) - Clojure(Script)でのGraphQLクエリ生成。

<a name="reasonml" />

### ReasonML

- [reason-apollo](https://github.com/apollographql/reason-apollo) - ReasonML向けのApollo Clientのバインディング。
- [ReasonQL](https://github.com/sainthkh/reasonql) - ReasonML開発者向けに型安全かつシンプルなGraphQLクライアント。
- [reason-urql](https://github.com/FormidableLabs/reason-urql) - ReasonML向けのurql Clientのバインディング。

<a name="dart" />

### Dart

- [graphql-flutter](https://github.com/zino-app/graphql-flutter) - Flutter用のGraphQLクライアント。
- [Artemis](https://github.com/comigor/artemis) - Dart/Flutter用のGraphQL型とクエリ生成ツール。

<a name="rust" />

### Rust

- [async-graphql](https://github.com/async-graphql/async-graphql) - すべてのGraphQL仕様をサポートする高性能のサーバーサイドライブラリ。
- [juniper](https://github.com/graphql-rust/juniper) - Rust用のGraphQLサーバーライブラリ。
- [graphql-client](https://github.com/tomhoule/graphql-client) - Rust用のGraphQLクライアントライブラリ（WebAssembly(wasm)対応）。
- [graphql-parser](https://github.com/graphql-rust/graphql-parser) - RustでGraphQLクエリとスキーマ定義言語のパーサー、フォーマッタ、ASTを提供。
- [tailcall](https://github.com/tailcallhq/tailcall) - 高性能GraphQLバックエンドを構築するためのプラットフォーム。

<a name="rust-example" />

#### Rustの例 {#rust-examples}

- [Warp GraphQL Juniper](https://graphql-rust.github.io/)
- [Tailcall](https://tailcall.run/docs/)

<a name="d" />

### D (dlang)

- [graphqld](https://github.com/burner/graphqld) - D用のGraphQLサーバーライブラリ。

<a name="r" />

### R (Rstat)

- [ghql](https://github.com/ropensci/ghql) - 一般用途のGraphQL Rクライアント。
- [graphql](https://github.com/ropensci/graphql) - 'libgraphqlparser' C++ライブラリへのバインディング。GraphQL構文をパースし、ASTをJSON形式でエクスポート。
- [gqlr](https://github.com/schloerke/gqlr) - R用のGraphQL実装。

<a name="julia" />

### Julia

- [Diana.jl](https://github.com/codeneomatrix/Diana.jl) - Julia用のGraphQLクライアント/サーバー実装。
- [GraphQLClient.jl](https://github.com/DeloitteDigitalAPAC/GraphQLClient.jl) - サーバーとのシームレスな統合を可能にするJulia用のGraphQLクライア的実装。

<a name="crystal" />

### Crystal

- [graphql](https://github.com/graphql-crystal/graphql) - GraphQLサーバーライブラリ。
- [graphql-crystal](https://github.com/ziprandom/graphql-crystal) - [graphql-ruby](https://github.com/rmosolgo/graphql-ruby) & [go-graphql](https://github.com/playlyfe/go-graphql) & [graphql-parser](https://github.com/graphql-dotnet/parser)をインスピレーションとして作られたライブラリ。
- [crystal-gql](https://github.com/itsezc/crystal-gql) - GraphQLクライアントシェード。Apolloクライアントにインスパイアされたもの。
- [graphql.cr](https://github.com/garymardell/graphql.cr) - GraphQLシェード。

### Ballerina

- [graphql](https://github.com/ballerina-platform/module-ballerina-graphql) - Ballerina標準ライブラリのGraphQL版。このライブラリはGraphQLクライアントおよびサーバーの実装を提供し、GraphQLサブスクリプションに対しても組み込みサポートを提供する。
- [graphql CLI](https://github.com/ballerina-platform/graphql-tools) - GraphQLスキーマからBallerinaコードを生成し、Baller及コードからGraphQLスキーマを生成するCLIツール。また、GraphQLスキーマおよびドキュメントを用いて、使用状況に応じたGraphQLクライアントを生成する機能を提供する。

#### Ballerinaの例 {#ballerina-samples}

- [Ballerina GraphQL Examples](https://github.com/ballerina-platform/module-ballerina-graphql/tree/master/examples)
- [Convert Weather REST API to GraphQL API](https://github.com/ThisaruGuruge/weather-rest-api-to-graphql)

<a name="tools" />

## ツール {#tools}

### エディター・IDE・エクスプローラー {#tools---editors--ides--explorers}

- [GraphiQL](https://github.com/graphql/graphiql) - ブラウザ上でGraphQLを探索できるIDE。
- [GraphQL Editor](https://github.com/graphql-editor/graphql-editor) - ビジュアルエディタ＆GraphQL IDE。
- [GraphQL Voyager](https://github.com/APIs-guru/graphql-voyager) - 任意のGraphQL APIをインタラクティブなグラフとして表現。
- [Altair GraphQL Client](https://github.com/altair-graphql/altair) - すべてのプラットフォーム向けに、美しく豊富な機能を備えたGraphQLクライアント。
- [Brangr](https://github.com/networkimprov/brangr) - 任意のGraphQLサービス向けに、使いやすく、結果のレイアウトが魅力的なデータブラウザ／ビュー。
- [Insomnia](https://insomnia.rest/) - 完全機能を備えたAPIクライアントで、第一-party GraphQLクエリエディタを提供。
- [Postman](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/) - GraphQLクエリの編集をサポートするHTTPクライアント。
- [Bruno](https://github.com/usebruno/bruno) - 高速かつオープンソースのAPIクライアント。コレクションは、Gitに優しいプレーンテキストマーカップ言語でオフラインのみに保存される。
- [Escape GraphMan](https://github.com/Escape-Technologies/graphman) - GraphQLエンドポイントから完全なPostmanコレクションを生成。
- [Apollo Sandbox](https://sandbox.apollo.dev/) - GraphQLエンドポイントをナビゲートしテストする最も速い方法。
- [GraphQL Birdseye](https://github.com/Novvum/graphql-birdseye) – 任意のGraphQLスキーマを動的にインタラクティブなグラフとして表示。
- [AST Explorer](https://astexplorer.net/) - トップに「GraphQL」を選択し、クエリ内でクリックしてGraphQL ASTを探索し、異なる部分をハイライトする。
- [Firecamp - GraphQL Playground](https://firecamp.io/graphql) - 最も速い協働型GraphQLプレイグランド。
- [CraftQL](https://github.com/yamafaktory/craftql) - GraphQLスキーマを可視化し、グラフデータ構造をグラフビズ形式(.dot)で出力するCLIツール。
- [gqt](https://github.com/eerimoq/gqt) - ターミナル上でGraphQLクエリを構築・実行。
- [Hackolade](https://studio.hackolade.com/) - GraphQLスキーマエディタ。GraphQL構文の知識なしでスキーマ定義言語ファイルを生成。既存エンドポイントの可視化およびドキュメント化も可能。追加情報および指示 [here](https://hackolade.com/help/GraphQL.html)
- [Smart Formatter - GraphQL Query Formatter](https://smartformatter.com/tools/graphql-query-formatter) - クライアントサイド、ブラウザ専用のツールで、GraphQLクエリとスキーマを即座にフォーマット・美しく整形・検証できる
- [Mongrel](https://www.visorcraft.com/) - マルチデータベースGUI内にGraphQLクライアント、HTTP、WebSocket、gRPCを備えたデスクトップワークベンチ


<a name="tool-testing" />

### テスト・プロトタイピング・モック {#tools---testing-prototyping--mocking}

- [Beeceptor](https://beeceptor.com/graphql-mock-server/) - スキーマ（SDL）からルールや状態管理、ミュテーション／サブスクリプションを含むAI駆動の**GraphQLモックサーバー**をノーコードで作成できるプラットフォームで、開発と統合テストを加速
- [graphql-to-karate](https://github.com/wbaldoumas/graphql-to-karate) - **Karate APIテスト**をGraphQLスキーマから生成
- [GraphQL Faker](https://github.com/APIs-guru/graphql-faker) - 🎲 フェイクデータでGraphQLAPIをモックまたは拡張。コーディング不要
- [GraphQL Inspector](https://the-guild.dev/graphql/inspector) - スキーマの検証、スキーマ変更の比較、破壊変更の検出、スキーマとのドキュメントカバレッジの確認を行うツール
- [Microcks](https://microcks.io/) - オープンソース（[CNCF](https://www.cncf.io/projects/microcks/)プロジェクト）であり、クラウドネイティブな**APIモック**とテストツール（[GraphQL support](https://microcks.io/blog/graphql-features-what-to-expect/) 🎥 [GraphQL conf 2023](https://youtu.be/UjDnrrTp7uI?si=M6S4l_Bukp9CEYl4)）
- [mockd](https://github.com/getmockd/mockd) - GraphQLスキーマモック、リゾルバー設定、クエリ検証をサポートするマルチプロトコルモックサーバー。またHTTP、gRPC、WebSocket、MQTT、SOAPもサポート
- [Keploy](https://keploy.io/) - リアルAPIトラフィックを記録して自動的にテストケースと**データモック**を生成するオープンソースAI駆動APIテストツール。GraphQL、REST、gRPCをサポート
- [Step CI](https://stepci.com) - オープンソースの**APIテストとモニタリング**（GraphQL対応）

<a name="tool-security" />

### セキュリティツール {#tools---security}

- [GraphCrawler - The all-in-one GraphQL Security toolkit](https://github.com/gsmith257-cyber/GraphCrawler) - Pythonで書かれた、GraphQL用のすべての自動化されたパネルテストツール
- [Escape - The GraphQL Security Scanner](https://graphql.security/) - GraphQLエンドポイントのワンクリックセキュリティスキャン。無料で、ログイン不要
- [Escape Graphinder - GraphQL Subdomain Enumeration](https://github.com/Escape-Technologies/graphinder) – サブドメイン探索、スクリプト分析、ブートストラップによる高速GraphQLエンドポイント検索
- [StackHawk - GraphQL Vulnerability Scanner](https://www.stackhawk.com/blog/automated-graphql-security-testing) - [StackHawk](https://www.stackhawk.com)
- [InQL Scanner](https://github.com/doyensec/inql) - GraphQLセキュリティテスト用のBurp拡張
- [GraphQL Raider](https://portswigger.net/bappstore/4841f0d78a554ca381c65b26d48207e6) [BurpSuite](https://portswigger.net/burp)
- [WAF for graphQL](https://lab.wallarm.com/api-security-solution/) - GraphQLAPI用のウェブアプリケーションファイアウォール
- [GraphQL Intruder](https://github.com/davinerd/gql_intruder) - GraphQL脆弱性評価を行うプラグインベースのPythonスクリプト
- [GraphQL Cop](https://github.com/dolevf/graphql-cop) - GraphQL用のセキュリティ診断ツール
- [GraphQLer](https://github.com/omar2535/GraphQLer) - デプロイ環境に依存する動的GraphQLテストツール
- [Vulert](https://vulert.com) - Vulert は、オープンソースの依存関係に存在する脆弱性を検出することでソフトウェアを保護—コードにアクセスすることなく。JavaScript、PHP、Java、Pythonなどに対応

### ブラウザー拡張 {#tools---browser-extensions}

- [Apollo Client Developer Tools](https://github.com/apollographql/apollo-client-devtools) - Apollo Client 用の Chrome デベロッパーコンソールにおける GraphQL デバッグツール
- [GraphQL Network Inspector](https://chrome.google.com/webstore/detail/graphql-network-inspector/ndlbedplllcgconngcnfmkadhokfaaln) - GraphQL ネットワークの確認に使えるシンプルで洗練された Chrome デベロッパーツール拡張機能

### ドキュメントツール {#tools---docs}

- [graphdoc](https://github.com/2fd/graphdoc) - GraphQL スキーマをドキュメント化するための静的ページジェネレーター
- [gqldoc](https://github.com/Code-Hex/gqldoc) - GraphQL 用のAPIドキュメントを作成する最も簡単な方法
- [spectaql](https://github.com/anvilco/spectaql) - GraphQLの静的APIドキュメントを自動生成
- [graphql-markdown](https://graphql-markdown.github.io/) - Docusaurusで提供されるGraphQLを駆使した柔軟なドキュメント
- [xyd](https://xyd.dev) - GraphQL APIドキュメントを生成

### エディタープラグイン {#tools---editor-plugins}

- [Apollo GraphQL VSCode Extension](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) - Apolloプラットフォームとシームレスに統合されたGraphQLクライアントおよびサーバー開発用の豊かなエディタサポート
- [js-graphql-intellij-plugin](https://github.com/jimkyndemeyer/js-graphql-intellij-plugin/) - IntelliJ IDEAおよびWebStormにおけるGraphQL言語サポート、JavaScriptおよびTypeScriptにおけるRelay.QLタグテンプレートを含む
- [vim-graphql](https://github.com/jparise/vim-graphql) - VimプラグインでGraphQLファイルの検出とシンタックスハイライトを提供
- [graphql-autocomplete](https://github.com/orionsoft/atom-graphql-autocomplete) - AtomでGraphQLエンドポイントから自動補完およびLintを実行

### その他のツール {#tools---miscellaneous}

- [graphql-code-generator](https://github.com/dotansimha/graphql-code-generator) - スキーマとドキュメントに基づいたGraphQLコードジェネレーター
- [swagger-to-graphql](https://github.com/yarax/swagger-to-graphql) - Swaggerで記述されたREST APIに基づくGraphQLタイプビルダー。5分でRESTからGraphQLへ移行可能
- [ts-graphql-plugin](https://github.com/Quramy/ts-graphql-plugin) - TypeScriptテンプレート文字列内でGraphQLクエリを完全に検証・確認する言語サービスプラグイン
- [apollo-tracing](https://github.com/apollographql/apollo-tracing) - GraphQLレスポンスに含まれるリゾルバーレベルのパフォーマンス情報を簡単に取得できるGraphQL拡張機能
- [json-graphql-server](https://github.com/marmelab/json-graphql-server) - JSONデータファイルに基づき、30秒以内にゼロコードで完全なフィクションのGraphQL APIを取得
- [Prisma](https://github.com/prisma/prisma) - データベースをGraphQL APIに変換。Prismaはデータモデル設計を行い、数分でプロダクション用のGraphQL APIをオンラインに提供可能
- [Typetta](https://github.com/twinlogix/typetta) - TypeScriptで書かれたNode.js ORM。Type loversにとって最適なORM。GraphQL + NodeJS + TypeScriptスタックに最適。
- [tuql](https://github.com/bradleyboy/tuql) - 任意のsqliteデータベースから自動的にGraphQLサーバーを作成
- [Bit](https://github.com/teambit/bit) - GraphQL API をコンポーネントとして構成し、NPM で消費または任意のプロジェクトから変更できるようにする（） [example-explanation](https://hackernoon.com/make-your-graphql-api-easier-to-adopt-through-components-74b022f195c1)
- [openapi-to-graphql](https://github.com/ibm/openapi-to-graphql) - OpenAPI Specification（OAS）または Swagger から GraphQL インターフェースを生成する — 2分の動画とリソース [here](https://developer.ibm.com/open/projects/openapi-to-graphql/)
- [Retool](https://retool.com/) – あなたの GraphQL API に上位に構築された内部ツールビルダーと、スキーマエクスプローラを備えた GraphQL IDE
- [dataloader-codegen](https://github.com/Yelp/dataloader-codegen) - 自動的に予測可能で型安全なデータローダーを、リソースセット（例：HTTP エンドポイント）上で生成する、意見のある JavaScript ライブラリ
- [raphql-inspector](https://github.com/kamilkisiela/graphql-inspector): スキーマの検証、スキーマ変更通知、操作の検証、破壊的変更の検出、類似型の検索、スキーマカバレッジの確認
- [amplication](https://github.com/amplication/amplication): Amplication はオープンソースの低コード開発ツールであり、CRUD と関係、ソート、フィルタ、ページネーションをサポートする REST API および GraphQL を使ってデータベースアプリケーションを構築します
- [Blendbase](https://github.com/blendbase/blendbase): CRM とあなたの SaaS を接続する1つのオープンソース GraphQL API。Salesforce、Hubspot など、すべての顧客CRMシステムを、SaaS アプリから1つのAPIクエリで問い合わせ可能です
- [microfiber](https://github.com/anvilco/graphql-introspection-tools) - GraphQL インターリーブの結果を、有用な方法でクエリおよび操作できます
- [DronaHQ](https://www.dronahq.com/) - GraphQL データに基づいた内部ツール、ダッシュボード、管理パネルを数分で構築できます
- [Dynaboard](https://dynaboard.com) - AI を使って、任意の GraphQL API から低コードウェブアプリを生成できます
- [gqlhash](https://github.com/romshark/gqlhash) - フォーマットの差異やコメントを無視し、複数のハッシュ関数をサポートする高速クエリハッシュ器
- [Apollo APQ Debugger](https://github.com/rookieInTraining/apq-debugger) - Apollo APQ ハッシュの背後にある完全な GraphQL クエリを明らかにし、フィールドバックフローを確認し、開発ツールで自動保存クエリをデバッグできます。<a name="databases" />


## データベース {#databases}

- [Cube](https://cube.dev) - を使って SQL、REST、 でデータアプリケーションを構築。任意のデータベースまたはデータウェアハウスに接続し、その上にサブ秒の遅延で GraphQL API を即座に取得できます。- [Headless BI](https://cube.dev/blog/headless-bi) [GraphQL API](https://cube.dev/docs/backend/graphql) [Source Code](https://github.com/cube-js/cube.js)
- [Dgraph](https://dgraph.io/) - スケーラブルで分散型、低遅延、高スループットのグラフデータベースで、GraphQL をクエリ言語として採用
- [EdgeDB](https://edgedb.com/) - 次世代のオブジェクト-リレーションデータベースで、ネイティブに GraphQL をサポート
- [ArangoDB](https://arangodb.com/) - ネイティブなマルチモデルデータベースで、 を、組み込みの を使って実現 [GraphQL integration](https://www.arangodb.com/docs/3.4/foxx-reference-modules-graph-ql.html) [Foxx Microservices Framework](https://www.arangodb.com/docs/stable/foxx.html)
- [Weaviate](https://github.com/semi-technologies/weaviate) - Weaviate は、クラウドネイティブでモジュラリティがあり、リアルタイムのベクトル検索エンジンであり、 を備え、機械学習モデルをスケーリングできます [GraphQL interface](https://weaviate.io/developers/weaviate/api/graphql)

<a name="services" />

## サービス {#services}

- [AWS AppSync](https://aws.amazon.com/appsync/) - スケーラブルな管理型 GraphQL サービスで、リアルタイムおよびオフライン優先アプリケーションを構築するためのサブスクリプションを提供

- [Moesif API Analytics](https://www.moesif.com/features/graphql-analytics) - 機能およびパフォーマンスの問題を特定するための GraphQL アナリティクスとモニタリングサービス
- [Booster framework](https://booster.cloud/) - インフラストラクチャにまったく気を配らず、ビジネスロジックに集中できるオープンソースフレームワーク。モデルに対して自動的に GraphQL API を生成し、ミューテーション、クエリ、サブスクリプションをサポート
- [Nhost](https://nhost.io/) - オープンソースのFirebaseの代替品でGraphQLをサポート
- [Saleor](https://github.com/mirumee/saleor/) - GraphQLを中心としたヘッドレスEコマースプラットフォーム
- [Stargate](https://stargate.io/docs/latest/quickstart/qs-graphql-cql-first.html) - 現在Apache Cassandra&reg;およびDataStax Enterpriseをサポートするオープンソースデータゲートウェイ
- [Vedika](https://vedika.io) - ヴィedicアストロロジーAIAPIで、ホロスコープ、生まれたチャート、クンドリマッチング、108以上のエンドポイントをサポート
- [Grafbase](https://grafbase.com) - 任意のデータソースに対して即時的にGraphQLAPIを提供

### CDN

- [GraphCDN](https://graphcdn.io/) - GraphQLAPIをキャッシュするGraphQLCDN

### CMS

- [DatoCMS](https://www.datocms.com/) - CDNベースのGraphQLを用いたヘッドレスコンテンツマネジメントシステム
- [Apito](https://apito.io/) - CDN、Webhook、チーム協働、コンテンツ修正、クラウド関数を備えたクラウドベースのヘッドレスCMS。
- [Hygraph](https://hygraph.com/) - スケーラブルなコンテンツ体験を構築
- [Cosmic](https://www.cosmicjs.com/) - GraphQLを活用したヘッドレスCMSおよびAPIツールキット
- [Graphweaver](https://graphweaver.com/) - 複数のデータソースを1つのGraphQLAPIに統合

<a name="book" />

## 書籍 {#books}

- [The GraphQL Guide](https://graphql.guide) ジョン・レスィグとロレン・サンズ・ラムシャーが開発
- [Craft GraphQL APIs in Elixir with Absinthe](https://pragprog.com/book/wwgraphql/craft-graphql-apis-in-elixir-with-absinthe) ブルース・ウィリアムズとベン・ウィルソンが開発
- [The Road to GraphQL](https://www.roadtographql.com/)
- [Practical GraphQL](https://leanpub.com/book-graphql) ダニエル・シュミッツが開発
- [Production Ready GraphQL](https://book.productionreadygraphql.com) マール・アンデル・ギルロウが開発
- [Full Stack GraphQL Applications](https://www.manning.com/books/fullstack-graphql-applications) ウィリアム・ライオンが開発

<a name="video" />

## 動画 {#videos}

- [GraphQL: The Documentary](https://www.youtube.com/watch?v=783ccP__No8)
- [Zero to GraphQL in 30 Minutes](https://www.youtube.com/embed/UBGzsb2UkeY)
- [Data fetching for React applications at Facebook](https://www.youtube.com/watch?v=9sc8Pyc51uU)
- [React Native & Relay: Bringing Modern Web Techniques to Mobile](https://www.youtube.com/watch?v=X6YbAKiLCLU)
- [Exploring GraphQL](https://www.youtube.com/watch?v=WQLzZf34FJ8)
- [Creating a GraphQL Server](https://www.youtube.com/watch?v=gY48GW87Feo)
- [GraphQL at The Financial Times](https://www.youtube.com/watch?v=S0s935RKKB4)
- [Relay: An Application Framework For React](https://www.youtube.com/watch?v=IrgHurBjQbg)
- [Building and Deploying Relay with Facebook](https://www.youtube.com/watch?t=643&v=Pxdgu2XIAAg)
- [Introduction to GraphQL](https://vimeo.com/144817545)
- [Exploring GraphQL@Scale](https://www.youtube.com/watch?v=_9RgHXqH8J0)
- [What's Next for Phoenix by Chris McCord](https://www.youtube.com/watch?v=IMUpYOc9z3c&feature=youtu.be)
- [GraphQL with Nick Schrock](https://www.youtube.com/watch?v=Ed6oJXKt3-M)
- [Build a GraphQL server for Node.js using PostgreSQL/MySQL](https://www.youtube.com/watch?v=DNPVqK_woRQ)
- [GraphQL server tutorial for Node.js with SQL, MongoDB and REST](https://www.youtube.com/watch?v=PHabPhgRUuU)
- [JavaScript Air Episode 023: Transitioning from REST to GraphQL](https://www.youtube.com/watch?v=ENqDNIp1Nd8)
- [GraphQL Future at react-europe 2016](https://www.youtube.com/watch?v=ViXL0YQnioU)
- [GraphQL at Facebook at react-europe 2016](https://www.youtube.com/watch?v=etax3aEe2dA)
- [Building native mobile apps with GraphQL at react-europe 2016](https://www.youtube.com/watch?v=z5rz3saDPJ8)
- [Build a GraphQL Server](https://www.youtube.com/watch?v=PEcJxkylcRM&list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68)
- [GraphQL Tutorial](https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f)
- [Five years of GraphQL](https://www.youtube.com/watch?v=s8meG38iZAM)
- [GraphQL is for Everyone by Moon Highway](https://moonhighway.teachable.com/p/graphql-is-for-everyone)

<a name="podcast" />

## ポッドキャスト {#podcasts}

- [GraphQL.FM](https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zNjE5NmViMC9wb2RjYXN0L3Jzcw==) マール・アンデル・ギルロウとトニー・ギタが開発

<a name="style-guide" />

## スタイルガイド {#style-guides}

- [Shopify GraphQL Design Tutorial](https://github.com/Shopify/graphql-design-tutorial) - このチュートリアルは元々Shopifyが内部用途のために作成されたもので、Shopifyで3年以上にわたってプロダクションスケーマを作成・進化してきた経験に基づいています
- [GitLab GraphQL API Style Guide](https://docs.gitlab.com/ee/development/api_graphql_styleguide.html) - このドキュメントはGitLab GraphQL APIのスタイルガイドを示しています
- [Yelp GraphQL Guidelines](https://yelp.github.io/graphql-guidelines/) - このリポジトリには、Yelpにおける標準化されたかつほぼ合理的なGraphQLアプローチに関するドキュメンテーションとガイドラインが含まれています
- [Principled GraphQL](https://principledgraphql.com/) - Apolloの10のGraphQL原則を、3つのカテゴリに分けて、Twelve Factor Appの形式にインスパイアされた構成で示しています

<a name="blogs" />

## ブログ {#blogs}

- [Official GraphQL blog](https://graphql.org/blog/)
- [Building Apollo](https://blog.apollographql.com/)
- [The Guild blog](https://medium.com/the-guild)
- [Production Ready GraphQL blog](https://productionreadygraphql.com)

<a name="security-blog" />

### セキュリティブログ {#blogs---security}

- [Escape - The GraphQL Security Blog](https://escape.tech/blog) - GraphQLのセキュリティ、パフォーマンス、テスト、および生産環境向けAPIの構築に関する、最新のツールとベストプラクティスを学ぶ。
- [9 GraphQL Security Best Practices](https://escape.tech/blog/9-graphql-security-best-practices/)
- [Discovering GraphQL Endpoints and SQLi Vulnerabilities](https://medium.com/@localh0t/discovering-graphql-endpoints-and-sqli-vulnerabilities-5d39f26cea2e)
- [Securing GraphQL API](https://lab.wallarm.com/securing-graphql-api/)
- [Security Points to Consider Before Implementing GraphQL](https://nordicapis.com/security-points-to-consider-before-implementing-graphql/)
- [Authorization Patterns in GraphQL](https://www.osohq.com/post/graphql-authorization)

<a name="post" />

## 記事 {#posts}

- [GraphQL federation example with Apollo Federation and Apollo GraphOS](https://cube.dev/blog/graphql-federation-example-with-apollo-federation-and-apollo-graphos)
- [GraphQL federation with Hasura GraphQL Engine and Cube](https://cube.dev/blog/graphql-federation-with-hasura-graphql-engine)
- [Using DataLoader to batch GraphQL requests](https://medium.com/@gajus/using-dataloader-to-batch-requests-c345f4b23433)
- [Introducing Relay and GraphQL](https://reactjs.org/blog/2015/02/20/introducing-relay-and-graphql.html)
- [GraphQL Introduction](https://reactjs.org/blog/2015/05/01/graphql-introduction.html)
- [Unofficial Relay FAQ](https://gist.github.com/wincent/598fa75e22bdfa44cf47)
- [Your First GraphQL Server](https://medium.com/the-graphqlhub/your-first-graphql-server-3c766ab4f0a2)
- [GraphQL Overview - Getting Started with GraphQL and Node.js](https://blog.risingstack.com/graphql-overview-getting-started-with-graphql-and-nodejs/)
- [4 Reasons you should try out GraphQL](https://medium.freecodecamp.org/introduction-to-graphql-1d8011b80159)
- [Moving from REST to GraphQL](https://medium.com/@frikille/moving-from-rest-to-graphql-e3650b6f5247)
- [Writing a Basic API with GraphQL](http://davidandsuzi.com/writing-a-basic-api-with-graphql/)
- [Building a GraphQL Server with Node.js and SQL](https://www.reindex.io/blog/building-a-graphql-server-with-node-js-and-sql/)
- [GraphQL at The Financial Times](https://www.slideshare.net/LondonReact/graph-ql)
- [Implementing GraphQL RBAC Authorization: A Practical Guide](https://www.permit.io/blog/implementing-graphql-authorization)
- [From REST to GraphQL](https://jacobwgillespie.com/2015-10-09-from-rest-to-graphql)
- [GraphQL: A data query language](https://graphql.org/blog/graphql-a-query-language/)
- [Subscriptions in GraphQL and Relay](https://graphql.org/blog/subscriptions-in-graphql-and-relay/)
- [Relay 101: Building A Hacker News Client](https://medium.com/@clayallsopp/relay-101-building-a-hacker-news-client-bb8b2bdc76e6)
- [GraphQL Schema Reference](https://graphql.org/learn/schema/) - GraphQLスキーマ定義言語およびショートハンド記法についての公式ドキュメンテーション。
- [The GitHub GraphQL API](https://githubengineering.com/the-github-graphql-api/)
- [Github GraphQL API React Example](https://medium.com/@katopz/github-graphql-api-react-example-eace824d7b61)
- [Testing a GraphQL Server using Jest](https://medium.com/entria/testing-a-graphql-server-using-jest-4e00d0e4980e)
- [How to implement viewerCanSee in GraphQL](https://medium.com/entria/how-to-implement-viewercansee-in-graphql-78cc48de7464)
- [Preventing traversal attacks on your GraphQL API](https://blog.morethancode.dev/preventing-traversal-attacks-in-your-graphql-api/)
- [Mock your GraphQL server realistically with faker.js](https://dev.to/yvonnickfrin/mock-your-graphql-server-realistically-with-faker-js-25oo)
- [Create an infinite loading list with React and GraphQL](https://dev.to/yvonnickfrin/create-an-infinite-loading-list-with-react-and-graphql-19hh)
- [REST vs GraphQL](https://www.moesif.com/blog/technical/graphql/REST-vs-GraphQL-APIs-the-good-the-bad-the-ugly/)
- [Authentication and Authorization for GraphQL APIs](https://www.moesif.com/blog/technical/api-design/Steps-to-Building-Authentication-and-Authorization-For-GraphQL-APIs/)
- [Build a GraphQL API with Siler on top of Swoole](https://www.swoole.co.uk/article/Build-a-GraphQL-API-on-top-of-Swoole)
- [Fluent GraphQL clients: how to write queries like a boss](https://hasura.io/blog/fluent-graphql-clients-how-to-write-queries-like-a-boss/)
- [Level up your serverless game with a GraphQL data-as-a-service layer](https://hasura.io/blog/level-up-your-serverless-game-with-a-graphql-data-as-a-service-layer/)
- [A deep-dive into Relay, the friendly & opinionated GraphQL client](https://hasura.io/blog/deep-dive-into-relay-graphql-client/)
- [make your graphql api easier to adopt through components](https://hackernoon.com/make-your-graphql-api-easier-to-adopt-through-components-74b022f195c1)
- [Undocumented: keeping parts of your GraphQL schema hidden from introspection](https://www.useanvil.com/blog/engineering/undocumented-directive/)
- [GraphQL Subscriptions with Apache Kafka in Ballerina](https://medium.com/ballerina-techblog/graphql-subscriptions-with-apache-kafka-in-ballerina-b3c296d333cd)
- [How to Test your GraphQL Endpoints](https://escape.tech/blog/8-most-common-graphql-vulnerabilities/)
- [Why Automatic Persisted Queries Don't Scale](https://blog.tailcall.run/the-truth-about-scaling-automatic-persisted-queries/)

<a name="tutorials" />

## チュートリアル {#tutorials}

- [How to GraphQL](https://www.howtographql.com) - React、Apollo、Relay、JavaScript、Ruby、Java、Elixirなど主要フレームワークと言語をカバーするフルスタックチュートリアルサイト。
- [Apollo Odyssey](https://odyssey.apollographql.com/) - Apolloの無料インタラクティブ学習プラットフォーム。
- [learning-graphql](https://github.com/mugli/learning-graphql) - GraphQLを学ぶための試み。
- [GraphQL Roadmap](https://roadmap.sh/graphql) - GraphQLをステップバイステップで学ぶガイド。
- [OWASP GraphQL Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Security_Cheat_Sheet.html) - GraphQLエンドポイントのセキュリティ確保および脆弱性防止に関する包括的なガイド。

## ライセンス {#license}

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

可能な限り法に従って、[Chen-Tsu Lin](https://github.com/chentsulin)はこの作品に関するすべての著作権および関連または隣接する権利を放棄しました。
