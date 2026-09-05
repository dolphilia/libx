---
title: "Awesome Relay"
description: "Relayを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-expede-awesome-relay-readme-md"
---

# Awesome Relay

Relayを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

# 目次 <a id="table-of-contents"></a>
- [学習資料](#learning-resources)
  - [ドキュメント](#documentation)
  - [FAQ](#faqs)
  - [チュートリアル](#tutorials)
  - [概要](#overviews)
  - [実装例](#example-implementations)
  - [リスト集](#lists-of-lists)
- [エコシステム](#ecosystem)
  - [ライブラリとパッケージ](#libraries--packages)
  - [ツール](#tooling)
  - [スターターキット](#starter-kits)
- [Relay固有のサーバー対応](#relay-specific-server-support)
  - [Go](#go)
  - [JavaScript](#javascript)
  - [Python](#python)
  - [Ruby](#ruby)
    - [Rails](#rails)
  - [Scala](#scala)
- [テスト](#testing)

# 学習資料 <a id="learning-resources"></a>
## ドキュメント <a id="documentation"></a>
- [公式ドキュメント](https://facebook.github.io/relay/docs/getting-started.html#content) - Relayの公式ドキュメント。

## FAQ <a id="faqs"></a>
- [非公式Relay FAQ](https://gist.github.com/wincent/598fa75e22bdfa44cf47) - よくある質問への回答。現時点ではRelayの資料が少ないため、行き詰まったときにとても役立ちます。

## チュートリアル <a id="tutorials"></a>
- [Getting Started with Relay](https://auth0.com/blog/2015/10/06/getting-started-with-relay/) - Relayを実際に扱う数少ない詳細なウォークスルーの一つ。
- [Relay 101: Building A Hacker News Client](https://medium.com/@clayallsopp/relay-101-building-a-hacker-news-client-bb8b2bdc76e6#.1i64q1pf9) - 完全に動作する実例。
  - [Relay 102: Mutations](https://medium.com/@clayallsopp/relay-102-mutations-d8b471a4730e#.i9vuv3vxl) - mutationに焦点を当てた「Relay 101」の続編。
- [Facebook Relay talk - Lunch and Learn session](https://www.youtube.com/watch?v=sP3n-nht0Xo) - シンプルなアプリを構築する手順と[GraphiQL](https://github.com/graphql/graphiql)のデモ。
- [A Beginner's Guide to Relay Mutations](http://blog.pathgather.com/blog/a-beginners-guide-to-relay-mutations) - mutationを詳しく解説。
- [Learn Relay](https://learnrelay.org/) - クライアント側のコードに集中できる個人用クラウドGraphQLバックエンドを提供し、ポケモンを題材にしたCRUDアプリの作り方を説明します。

## 概要 <a id="overviews"></a>
- [React Data Fetching with Relay](http://www.sitepoint.com/react-data-fetching-with-relay/) - Relayを構成する各要素と仕組みを明快に説明する概念的な概要。
- [Joseph Savona - Relay: An Application Framework For React](https://www.youtube.com/watch?v=IrgHurBjQbg) - FacebookチームによるRelayの概念的な概要。
- [F8 2015 - React Native & Relay: Bringing Modern Web Techniques to Mobile](https://www.youtube.com/watch?v=X6YbAKiLCLU) - Relayの概要と、その思想の一部を紹介。
- [Relay - Daniel Dembach - Hamburg React.js Meetup](https://www.youtube.com/watch?v=dvWTxy1eY6s) - Relayの全般的な概要と代替手段の議論。最後の質疑応答ではよくある質問も扱います。
- [Facebook Relay talk - Lunch and Learn session](https://www.youtube.com/watch?v=sP3n-nht0Xo) - シンプルなアプリを構築する手順と[GraphiQL](https://github.com/graphql/graphiql)のデモ。
- [React with Relay and GraphQL with Andrew Smith](https://www.youtube.com/watch?v=Cfna8gwt9h8) - RelayとGraphQLの高水準な概要に加え、参加者による有用な議論や、ほかのフロントエンドフレームワークの話題も含みます。
- [Relay for Visual Learners](http://sgwilym.github.io/relay-visual-learners/) - Relayの各要素がどのように関係するかを明快な図で示します。
- [Relay: Seamless Syncing For React](http://www.slideshare.net/BrooklynZelenka/relay-seamless-syncing-for-react-vanjs) - Relayとは何かを概説し、プロダクションで使用した経験も取り上げます。
- Cartoon Intro to Facebook's Relay - イラスト付きでRelayの動作を説明する概要。
  - [Part 1: Saying what data you need with GraphQL](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-1-3ec1a127bca5)
  - [Part 2: Fetching data from the server](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-2-d4a2435aee59)
  - [Part 3: Syncing changes back up to the server](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-3-9d8fcf8db670)
  - [Part 4: How it all fits together](https://code-cartoons.com/a-cartoon-intro-to-facebook-s-relay-part-4-aef7d819a8ed)

## 実装例 <a id="example-implementations"></a>
- [Relay TODO MVC](https://github.com/taion/relay-todomvc) - Relayで書かれた定番のTODOサンプルアプリ。
- [`relay-chat`](https://github.com/transedward/relay-chat) - ルーティングとページネーションを備えたRelay。
- [`koa-graphql-relay-example`](https://github.com/chentsulin/koa-graphql-relay-example) - [`koa-graphql`](https://github.com/chentsulin/koa-graphql)と`relay`を使ったTODOアプリ。
- [`todomvc-relay-go`](https://github.com/sogko/todomvc-relay-go) - GolangのGraphQLバックエンドで動くRelay TodoMVCアプリ。

## リスト集 <a id="lists-of-lists"></a>
- [Relay and GraphQL Introduction Materials](https://quip.com/oLxzA1gTsJsE)

# エコシステム <a id="ecosystem"></a>
## ライブラリとパッケージ <a id="libraries--packages"></a>
- [`graphql-relay-js`](https://github.com/graphql/graphql-relay-js) - `react-relay`向けのJavaScript GraphQLサーバー作成を簡単にします。
- [Babel Relay Plugin](https://www.npmjs.com/package/babel-relay-plugin) - Relayで最新のES6+構文を使用できます。
- [`react-router-relay`](https://github.com/relay-tools/react-router-relay) - Relay向けの`react-router`バインディング。ローカル状態を扱う多数のUIユースケースを大幅に簡素化します。
  - [Relay and Routing](https://medium.com/@cpojer/relay-and-routing-36b5439bad9#.h91614i65) - `react-router-relay`と、それが解決する問題を明快に説明するウォークスルー。
  - [`relay-nested-routes`](https://www.npmjs.com/package/relay-nested-routes) - ネストしたデータを反映するネストルートを生成します。深いデータの管理に役立ちます。
  - [`isomorphic-relay-router`](https://github.com/denvned/isomorphic-relay-router) - `react-router-relay`のサーバーサイドレンダリング対応。
- [`relay-decorator`](https://github.com/4Catalyzer/relay-decorators) - ES7デコレーター（`@`構文）によるRelayコンテナ用の簡潔な構文。
- [`recompose-relay`](https://www.npmjs.com/package/recompose-relay) - カリー化してコンテナの後にコンポーネントを渡すことで、Relayコンテナの合成を容易にします。
- [`relay-local-schema`](https://github.com/relay-tools/relay-local-schema) - ローカルスキーマを利用し、リモートGraphQLサーバーを不要にします。
- [`react-native-relay`](https://github.com/lenaten/react-native-relay) - React NativeでRelayを利用できます。
  - 将来は[標準機能](https://github.com/facebook/relay/issues/26)として対応する可能性があります。
- [`relay-sink`](https://github.com/acdlite/relay-sink) - Reactコンポーネントの外部でRelayを使ってデータを取得・保存します。
- [`babel-plugin-flow-relay-query`](https://github.com/guymers/babel-plugin-flow-relay-query) - [Flow](http://flowtype.org)の型をRelay fragmentへ変換します。
- [`sequelize-relay`](https://github.com/MattMcFarland/sequelize-relay) - Relayを[`sequelize`](https://github.com/sequelize/sequelize)と互換にします。
- [`relay-mongodb-connection`](https://github.com/mikberg/relay-mongodb-connection) - MongoDBカーソルからRelay connectionを作成します。
- [`relay-composite-network-layer`](https://github.com/eyston/relay-composite-network-layer) - それぞれ独自のスキーマを持つ複数のNetwork LayerからRelay Network Layerを合成します。
- [`react-relay-network-layer`](https://github.com/nodkz/react-relay-network-layer) - クエリのバッチ処理とミドルウェアへ対応するNetwork Layer。認証やログなどの便利なミドルウェアも提供します。

## ツール <a id="tooling"></a>
- [GraphiQL](https://github.com/graphql/graphiql) - GraphQLのイントロスペクションと、query・mutationのテストに使うライブラリ。
  - [GraphiQL App](https://github.com/skevy/graphiql-app) - GraphQL、イントロスペクション文書の閲覧、query・mutationのテストに使えるスタンドアロンアプリ。Relayアプリのデバッグに非常に有用です。
- [`relay-local-schema`](https://github.com/relay-tools/relay-local-schema) - ローカルスキーマを利用し、リモートGraphQLサーバーを不要にします。
- [Babel Relay Plugin](https://www.npmjs.com/package/babel-relay-plugin) - Relayで最新のES6+構文を使用できます。

## スターターキット <a id="starter-kits"></a>
- [Relay Skeleton](https://github.com/fortruce/relay-skeleton) - Relayプロジェクトのスケルトン。
- [Relay Starter Kit](https://github.com/relayjs/relay-starter-kit) - 基本設定が済んだアプリ。cloneして用途に合わせて変更するだけです。
- [Node.js API Starter Kit](https://github.com/kriasoft/nodejs-api-starter) - Node.js、GraphQL、RelayでデータAPIを構築するためのボイラープレートとツール。
- [Simple Relay Starter](https://github.com/mhart/simple-relay-starter) - [Relay Starter Kit](https://github.com/relayjs/relay-starter-kit)のBrowserify版。
- [UniversalRelayBoilerplate](https://github.com/codefoundries/UniversalRelayBoilerplate)
React Native（iOS、Android）、React（isomorphic、Material-UI）、Relay、GraphQL、JWT、Node.js、Apache Cassandra向けのボイラープレートとサンプル。
- [Relay on Rails Starter Kit](https://github.com/nethsix/relay-on-rails) - Railsサーバー上のRelayアプリケーション向け最小構成スターターキット。cloneして調整するだけです。
- [Relay Fullstack](https://github.com/lvarayut/relay-fullstack) - Relay、Express、Webpack、Babel、Material Design Lite、PostCSSを統合したRelay Starter Kit。

# Relay固有のサーバー対応 <a id="relay-specific-server-support"></a>
## Go <a id="go"></a>
- [Go Relay](https://github.com/graphql-go/relay) - react-relay対応のgraphql-goサーバー構築を支援するGo／Golangライブラリ。
- [`todomvc-relay-go`](https://github.com/sogko/todomvc-relay-go) - GolangのGraphQLバックエンドで動くReact／Relay TodoMVCアプリ。

## JavaScript <a id="javascript"></a>
- [`graphql-relay-js`](https://github.com/graphql/graphql-relay-js) - `react-relay`向けのJavaScript GraphQLサーバー作成を簡単にします。

## Python <a id="python"></a>
- [`graphql-relay-py`](https://github.com/graphql-python/graphql-relay-py) - `graphql-py`で`react-relay`対応サーバーを構築するのを支援するライブラリ。

## Ruby <a id="ruby"></a>
- [`graphql-relay-ruby`](https://github.com/rmosolgo/graphql-relay-ruby) - GraphQLとRuby向けのRelayヘルパー。

### Rails <a id="rails"></a>
- [GraphQL and Relay on Rails — First relay powered react component](https://medium.com/@gauravtiwari/graphql-and-relay-on-rails-first-relay-powered-react-component-cb3f9ee95eca#.c88zcoftn) - clone可能なコードを含む、シンプルなRelayセットアップの完全なウォークスルー。
- [Relay/GraphQL On Rails](https://medium.com/@khor/relay-facebook-on-rails-8b4af2057152#.5hjih9wms) - 理解を助ける複数の図を備えた、RailsでRelayを使う簡潔な実例。
- [Relay on Rails Starter Kit](https://github.com/nethsix/relay-on-rails) - Railsサーバー上のRelayアプリケーション向け最小構成スターターキット。cloneして調整するだけです。

## Scala <a id="scala"></a>
- [`sangria-relay`](https://github.com/sangria-graphql/sangria-relay) - [Sangria](http://sangria-graphql.org)のRelay対応。

# テスト <a id="testing"></a>
- [Writing Simple Unit Tests with Relay](https://medium.com/@mikaelberg/writing-simple-unit-tests-with-relay-707f19e90129) - Relayのテストを扱った初期の入門記事。
