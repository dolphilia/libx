---
title: "Awesome Vert.x"
description: "Vert.xを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-vert-x3-vertx-awesome-readme-md"
---

# Awesome Vert.x

Vert.xを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

* [Books](#books)
* [Build tools](#build-tools)
* [Web Frameworks](#web-frameworks)
* [Authentication Authorisation](#authentication-authorisation)
* [Database Clients](#database-clients)
* [Integration](#integration)
* [Middleware](#middleware)
* [Language Support](#language-support)
* [Reactive](#reactive)
* [Sync Thread Non Block](#sync-thread-non-block)
* [Vert.x Event Bus Clients](#vertx-event-bus-clients)
* [Vert.x Event Bus Extensions](#vertx-event-bus-extensions)
* [Cluster Managers](#cluster-managers)
* [Cloud Support](#cloud-support)
* [Microservices](#microservices)
* [Game development](#game-development)
* [Search Engines](#search-engines)
* [Service Factory](#service-factory)
* [Config](#config)
* [Dependency Injection](#dependency-injection)
* [Testing](#testing)
* [Development Tools](#development-tools)
* [Miscellaneous](#miscellaneous)
* [Distribution](#distribution)
* [Examples](#examples)
* [Deployment](#deployment)
* [Utilities](#utilities)
* [Articles](#articles)
* [Front-End](#front-end)

<a id="books"></a>
## 書籍

* [Building Reactive Microservices in Java](https://www.oreilly.com/library/view/building-reactive-microservices/9781491986295/) クレメン・エスコフィエによって作成
* [Vert.x in Action](https://www.manning.com/books/vertx-in-action) ジュリアン・ポンジェによって作成

<a id="build-tools"></a>
## ビルドツール

* [Vert.x Maven plugin](https://github.com/reactiverse/vertx-maven-plugin)
* [Vert.x Gradle plugin](https://plugins.gradle.org/plugin/io.vertx.vertx-plugin)
* [Vert.x Codegen Gradle plugin](https://github.com/bulivlad/vertx-codegen-plugin) - Vert.x Javaプロジェクト向けにコード生成の利用を容易にするGradleプラグイン

<a id="web-frameworks"></a>
## ウェブフレームワーク

* [Vert.x Web](https://github.com/vert-x3/vertx-web)  <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.x向けフル機能ウェブツールキット
* [Vert.x Jersey](https://github.com/englishtown/vertx-jersey) - Vert.xでJAX-RS リソースを作成 [Jersey](https://eclipse-ee4j.github.io/jersey/)
* [Kovert](https://github.com/kohesive/kovert) - Kotlin + Vert.x Web向けの見えないRESTフレームワーク
* [Handlers](https://github.com/spriet2000/vertx-handlers-http) - Vert.x向けオープンウェブフレームワーク
* [QBit](https://github.com/advantageous/qbit) - RESTおよびWebSocketメソッド呼び出しのマーシャリングと反応型ライブラリ
* [vertx-rest-storage](https://github.com/swisspush/vertx-rest-storage) - ファイルシステムまたはRedisデータベースにRESTリソースの永続化
* [Jubilee](https://github.com/isaiah/jubilee) - Vert.x 3に基づくRuby HTTPサーバー。Rackと互換性がある
* [Knot.x](https://github.com/Cognifide/knotx) - Vert.x 3をベースにした現代ウェブサイト向けの効率的かつ高性能な統合プラットフォーム
* [Irked](https://github.com/GreenfieldTech/irked) - Vert.x Web向けのアノテーションベースの設定、コントローラーフレームワークとREST向けの表現力のあるAPI
* [REST.VertX](https://github.com/zandero/rest.vertx) - Vert.x垂直アプリケーション向けの軽量JAX-RS（RestEasy）風アノテーションプロセッサ
* [Atmosphere Vert.x](https://github.com/Atmosphere/atmosphere-vertx) - JVM向けリアルタイムクライアントサーバーフレームワーク。WebSocketsおよびサーバー送信イベントをサポートし、クロスブラウザフォールバックを提供
* [Vert.x Vaadin](https://github.com/mcollovati/vertx-vaadin) - VaadinアプリケーションをVert.x上で実行
* [Serverx](https://github.com/lukehutch/serverx) - ルートハンドラアノテーションのみで、Vert.xを活用したサーバーの迅速かつ簡単な設定を可能にする
* [Cloudopt Next](https://github.com/cloudoptlab/cloudopt-next) - Cloudopt Nextは、非常に軽量で現代的な、JVMベースのフルスタックKotlinフレームワークであり、Java、Kotlin言語をサポートし、優れたJavaライブラリと標準を採用して、モジュール化されやすくテストしやすいJVMアプリケーションの開発を可能にする
* [Donkey](https://github.com/AppsFlyer/donkey) - 使いやすさとパフォーマンスを重視した現代的なClojure HTTPサーバーとクライアント
* [SCX](https://github.com/scx567888/scx) - オープンで使いやすいウェブフレームワーク。ほとんどの機能はアノテーションに基づく
* [vertx-rest](https://github.com/dream11/vertx-rest) - resteasy-vertxへの抽象化により、JAX-RSアノテーションに基づいたVert.x RESTアプリケーションの作成を簡略化

## Authentication Authorisation

* [Vert.x Auth SQL](https://github.com/eclipse-vertx/vertx-auth)  <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.xの認証／認可がVert.x SQLクライアントと関係データベースに基づくもの
* [Vert.x Auth JWT](https://github.com/eclipse-vertx/vertx-auth/tree/master/vertx-auth-jwt)  <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - JSON Web Tokensに基づくVert.xの認可
* [Vert.x Auth htdigest](https://github.com/eclipse-vertx/vertx-auth/tree/master/vertx-auth-htdigest)  <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - [Apache htdigest](https://httpd.apache.org/docs/2.4/programs/htdigest.html)に基づくVert.xの認可／認証
* [Vert.x Auth Mongo](https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-mongo)  <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - [MongoDB](https://www.mongodb.com/)に基づくVert.xの認可／認証
* [Vert.x Auth OAuth2](https://github.com/eclipse-vertx/vertx-auth/tree/master/vertx-auth-oauth2) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - [OAuth 2](https://oauth.net/2/)に基づくVert.xの認可／認証
* [Vert.x Auth htpasswd](https://github.com/eclipse-vertx/vertx-auth/tree/master/vertx-auth-htpasswd) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - [htpasswd](https://httpd.apache.org/docs/2.4/programs/htpasswd.html)に基づくVert.xの認可／認証

* [Vert.x-Pac4j](https://github.com/pac4j/vertx-pac4j) - Vert.xの認証／認可は[pac4j](http://www.pac4j.org/)を使用して実装

<a id="database-clients"></a>
## データベースクライアント

データベースに接続するためのクライアント

* Relational Databases
  * [Reactive SQL Client](https://github.com/eclipse-vertx/vertx-sql-client) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - 高性能な反応型SQLクライアント
  * [JDBC](https://github.com/vert-x3/vertx-jdbc-client) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - JDBCデータソースに対する非同期インターフェース
  * [MySQL / PostgreSQL](https://github.com/vert-x3/vertx-mysql-postgresql-client) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - MySQL／PostgreSQL向けの非同期クライアント
  * [PostgreSQL](https://github.com/vietj/reactive-pg-client) - 反応型PostgreSQLクライアント
  * [database](https://github.com/susom/database) - Oracle、PostgreSQL、SQL Server、HyperSQLなどに向けたセキュリティ、正確性、使いやすさを重視したクライアント
  * [jOOQ](https://github.com/jklingsporn/vertx-jooq) - タイプセーフかつ非同期のSQLを実行し、jOOQを使用してコードを生成
  * [jOOQx](https://github.com/zero88/jooqx) - `jOOQ DSL`のタイプセーフSQLの力を活かし、Vert.xの反応型およびブロッキングフリーSQLドライバーを使用
  * [Exposed Vert.x SQL Client](https://github.com/huanshankeji/exposed-vertx-sql-client) - Kotlinの[Exposed](https://github.com/JetBrains/Exposed)を[Vert.x Reactive SQL Client](https://github.com/eclipse-vertx/vertx-sql-client)の上に構築

* NoSQL Databases
  * [MongoDB](https://github.com/vert-x3/vertx-mongo-client) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - MongoDBデータベースとの相互作用に用いる非同期クライアント
  * [Redis](https://github.com/vert-x3/vertx-redis-client) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Redisとの相互作用に用いる非同期API
  * [Cassandra](https://github.com/vert-x3/vertx-cassandra-client) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - アプリケーションがCassandraサービスと相互作用できるVert.xクライアント
  * [Cassandra](https://github.com/englishtown/vertx-cassandra) - CassandraおよびCassandraマッピングとの相互作用に用いる非同期API
  * [Neo4j Java Driver Vert.x](https://github.com/romanbsd/neo4j-java-driver-vertx) - Neo4j Java Driverに対するVert.xのラッパー
  * [OrientDB](https://github.com/cstamas/vertx-orientdb) - ノンブロッキング OrientDB サーバー統合
  * [Bitsy](https://github.com/cstamas/vertx-bitsy) - ノンブロッキング Bitsy Graph サーバー統合
  * [MarkLogic](https://github.com/etourdot/vertx-marklogic) - Marklogic データベースサーバー用非同期クライアント
  * [SirixDB](https://github.com/sirixdb/sirix/tree/master/bundles/sirix-rest-api) - ノンブロッキング SirixDB HTTPサーバー
  * [DGraph](https://github.com/aesteve/vertx-dgraph-client) - Vert.x gRPC に準拠したクライアントの例。ここでは [dgraph](https://docs.dgraph.io) をターゲットとしている
  * [RxFirestore](https://github.com/pjgg/rxfirestore) - ノンブロッキング Firestore SDK で反応的に記述されたもの
  * [MongoDB](https://github.com/imrafaelmerino/vertx-mongo-effect) - pure functional かつ reactive MongoDB クライアント（[Vert.x Effect](https://github.com/imrafaelmerino/vertx-mongo-effect) 上に構築）。リトライ、フェイルオーバー、回復操作の完全なサポート
  * [Aerospike](https://github.com/dream11/vertx-aerospike-client) - Aerospike サーバーとの非同期かつノンブロッキング API。内部で [AerospikeClient's](https://github.com/aerospike/aerospike-client-java) の非同期コマンドを使用し、結果を Vert.x コンテキストで処理

* [vertx-pojo-mapper](https://github.com/BraintagsGmbH/vertx-pojo-mapper) - MySQL および MongoDB 用のノンブロッキング POJO マッピング
* [vertx-mysql-binlog-client](https://github.com/guoyu511/vertx-mysql-binlog-client) - MySQL のレプリケーションストリームにアクセスするための Vert.x クライアント

## Integration

* Server-Sent Events
  * [jEaSSE](https://github.com/mariomac/jeasse) - Java Easy SSE。シンプルで軽量の SSE 実装
  * [vertx-sse](https://github.com/aesteve/vertx-sse) - Vert.x SSE 実装 + イベントバス SSE ブリッジ

* Mail
  * [SMTP](https://github.com/vert-x3/vertx-mail-client) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - 非同期 SMTP クライアント

* REST
  * [Retrofit adapter for Vert.x](https://github.com/vietj/retrofit-vertx) - Retrofit 用の高スケーラビリティアダプタ（Vert.x で構築）
  * [openapi4j adapter for Vert.x](https://github.com/openapi4j/openapi4j/tree/master/openapi-operation-adapters/openapi-operation-vertx) - OpenAPI 3 リクエストバリデーターおよびルーターファクトリの代替
  * [Vert.x Effect HTTP client](https://github.com/imrafaelmerino/vertx-effect) - pure functional かつ reactive HTTP クライアント（[Vert.x Effect](https://github.com/imrafaelmerino/vertx-effect) を使用）で OAuth サポートおよびリトライ、フェイルオーバー、回復操作を提供

* File Server
  * [Vert.x TFTP Client](https://github.com/OneManCrew/vertx-tftp-client) - Vert.x 用の TFTP クライアント（ファイルのダウンロード／アップロードをサポート）
* Messaging
  * [AMQP 1.0](https://github.com/vert-x3/vertx-amqp-bridge) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.x プロダクタおよびコンシューマー API を使って AMQP 1.0 サーバーとインタラクション
  * [MQTT](https://github.com/vert-x3/vertx-mqtt) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - 2つのコンポーネントを提供：クライアントとの MQTT コミュニケーションおよびメッセージ交換を扱う MQTT サーバーと、MQTT ブローカーに対してメッセージを送受信する MQTT クライアント
  * [RabbitMQ](https://github.com/vert-x3/vertx-rabbitmq-client) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - RabbitMQ クライアント（AMQP 0.9.1）
  * [Kafka Client](https://github.com/vert-x3/vertx-kafka-client) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Kafkaクライアント。
  * [kafka](https://github.com/cyngn/vertx-kafka) - キーワード：メッセージの消費と生成を行うKafkaクライアント.
  * [STOMP](https://github.com/vert-x3/vertx-stomp) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Kafkaのクライアントおよびサーバー
  * [ZeroMQ](https://github.com/dano/vertx-zeromq) - ゼロ・ゼロ・エム・イベント・バス・ブリッジ。
  * [Azure ServiceBus](https://github.com/TextBack/vertx-azure-servicebus) - Azure [ServiceBus](https://azure.microsoft.com/en-us/products/service-bus/) プロダクタとコンシューマ（完全に非同期、Microsoft Azure SDKを使用しない）.
  * [AMQP 1.0 - Kafka bridge](https://github.com/rhiot/amqp-kafka-bridge) - AMQP 1.0プロトコルを使ってApache Kafkaにメッセージを送受信するためのブリッジ.
  * [Vert.x Kafka Client](https://github.com/vert-x3/vertx-kafka-client) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Apache KafkaクライアントでApache Kafkaクラスタからのメッセージの読み取りと送信を行う.
  * [The White Rabbit](https://github.com/viartemev/the-white-rabbit) - Kotlinコルーチンに基づく非同期RabbitMQ（AMQP）クライアント.
  * [WAMP Broker](https://github.com/i22-digitalagentur/vertx-wamp) - Vert.xアプリケーションに埋め込むことができるWAMPブローカー.

* JavaEE
  * [JCA adaptor](https://github.com/vert-x3/vertx-jca) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.xイベントバス用のJavaコンネクタアーキテクチャアダプタ。
  * [Weld](https://github.com/weld/weld-vertx) - Vert.xエコシステムにCDIプログラミングモデルを導入（CDI観察メソッドをVert.xメッセージコンシューマとして登録、CDIを活用したVerticle、宣言的にルートを定義など）.

* Meteor
  * [Meteor](https://github.com/jmusacchio/vertxbus/) - Vert.x Event Busを介したMeteorの統合サポート.

* Metrics
  * [Hawkular metrics](https://github.com/tsegismont/vertx-monitor) - [Hawkular](http://www.hawkular.org/)によるVert.x Metrics SPIの実装.
  * [DropWizard metrics](https://github.com/vert-x3/vertx-dropwizard-metrics) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - DropWizard metricsを使用したメトリクス実装.
  * [Micrometer metrics](https://github.com/vert-x3/vertx-micrometer-metrics) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Micrometer metricsを使用したメトリクス実装.
  * [OpenTsDb Metrics](https://github.com/cyngn/vertx-opentsdb) - Vert.x用の[OpenTsDb](http://opentsdb.net/)メトリクスクライアント.
  * [Bosun Monitoring](https://github.com/cyngn/vertx-bosun) - Vert.x用の[Bosun](https://bosun.org/)クライアントライブラリ.

* Netflix - Hystrix
  * [Hystrix Metrics Stream](https://github.com/kennedyoliveira/hystrix-vertx-metrics-stream.git) - Vert.xアプリケーションからHystrix Dashboardにメトリクスを送信する[Hystrix](https://github.com/Netflix/Hystrix)の実装.

* Dart
  * [Vert.x Dart SockJS](https://github.com/wem/vertx-dart-sockjs) - [Dart](https://www.dartlang.org/)による[Vert.x SockJS bridge](http://vertx.io/docs/vertx-web/java/#_sockjs_event_bus_bridge)およびシンプルなSockJSの統合（dart:jsを使用）.

* Push Notifications
  * [Onesignal](https://github.com/jklingsporn/vertx-push-onesignal) - Vert.xアプリケーションから（モバイル/ウェブ）アプリにプッシュ通知を送信する[OneSignal](https://onesignal.com/)

* CNCF CloudEvents
  * [CloudEvents.io Java SDK](https://github.com/cloudevents/sdk-java) - [CloudEvents](https://cloudevents.io/)を用いてCloudEventsの送受信を行う [Vert.x HTTP Transport](https://github.com/cloudevents/sdk-java/blob/master/http/vertx/README.md)

## Middleware

* [Apache Camel](https://camel.apache.org/components/vertx-component.html) - camelとvert.xイベントバスの間を橋渡しする[Apache Camel](http://camel.apache.org/)コンポーネント
* [Gateleen](https://github.com/swisspush/gateleen) - Vert.xをベースとしたミドルウェアライブラリで高度なJSON/REST通信サーバーを構築
* [Gravitee.io](https://gravitee.io) - Vert.x Core / Vert.x Webおよびその他のモジュールをベースにしたオープンソースAPIプラットフォーム（APIゲートウェイおよびOAuth2 / OIDC認証サーバーを含む）
* [API Framework](https://github.com/vinscom/api-framework) - Vert.xとGlueを用いたマイクロサービスフレームワーク。スタンドアローンアプリとサーバレスアプリの区別をなくす。すべてのサービスはスタンドアローンサーバー上で実行可能だが、必要に応じて同じコードベースでサーバレスアプリとしても実行できる

<a id="language-support"></a>
## 言語サポート

Vert.xへのプログラミング言語のサポート

* [Ceylon](https://github.com/vert-x3/vertx-lang-ceylon) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Ceylon対応
* [Groovy](https://github.com/vert-x3/vertx-lang-groovy) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Groovy対応
* [Java](https://github.com/eclipse/vert.x) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.xメインリポジトリ（Java APIを含む）
* [JavaScript](https://github.com/vert-x3/vertx-lang-js) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - JavaScript対応
* [Python](https://github.com/vert-x3/vertx-lang-python) - Python対応
* [Ruby](https://github.com/vert-x3/vertx-lang-ruby) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Ruby対応
* [Scala](https://github.com/vert-x3/vertx-lang-scala) - <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Scala対応
* [Kotlin](https://github.com/vert-x3/vertx-lang-kotlin) - <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Kotlin対応
* [EcmaScript](https://github.com/reactiverse/es4x) - EcmaScript >=6（JavaScript）対応
* [Php](https://github.com/vert-x-cn/vertx-lang-jphp) - Php対応

言語拡張

* [Grooveex](https://github.com/aesteve/grooveex) - [vertx-lang-groovy](https://github.com/vert-x3/vertx-lang-groovy)上に構築された構文糖およびユーティリティ（DSLビルダーなど）

## Reactive

* [Reactive Streams](https://github.com/vert-x3/vertx-reactive-streams) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - バージョンスタック
* [Vert.x Rx](https://github.com/vert-x3/vertx-rx) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.x リアクティブ拡張
* [Vert.x Sync](https://github.com/vert-x3/vertx-sync) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.x fiber対応
* [Kotlin coroutines](https://github.com/vert-x3/vertx-lang-kotlin/tree/master/vertx-lang-kotlin-coroutines) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Kotlin coroutines対応
* [vertx-util](https://github.com/cyngn/vertx-util) - ライトウェイトのプロミスとラッチをVert.x向けに提供。
* [QBit](https://github.com/advantageous/qbit) - アシンクな型付きアクターのようなライブラリで、Vert.xのアシンクコールバックで簡単に実行可能。コールバック管理。
* [VxRifa](https://nsforth.github.io/vxrifa) - Vert.X用のユーティリティライブラリで、EventBusを介した通信において強型インターフェースを使用可能にする。
* [Vert.x Effect](https://github.com/imrafaelmerino/vertx-effect) - IO Monadに基づく純粋な関数型かつ反応型のライブラリで、いかなる複雑なフローも実装可能です。リトライ、フェイルオーバー、回復操作について完全なサポートがあります。
* [SmallRye Mutiny](https://smallrye.io/smallrye-mutiny/) - Java向け直感的なイベント駆動型反応プログラミングライブラリで、[bindings for Vert.x](https://smallrye.io/smallrye-mutiny-vertx-bindings/)。

## Sync Thread Non Block

* [Sync](https://github.com/vert-x3/vertx-sync) - 同期処理だがOSスレッドをブロッキングしないverticles。

## Vert.x Event Bus Clients

アプリケーションがVert.xイベントバスに接続するためのクライアント

* [C++11](https://github.com/julien3/vertxbuspp) - C++11イベントバスクライアント。
* [Java](https://github.com/saffron-technology/vertx-eventbusbridge) - vertxbus.jsのJava実装。
* [Java](https://github.com/abdlquadri/vertx-eventbus-java) - JavaとAndroidのイベントバスクライアント。
* [Java](https://github.com/danielstieger/javaxbus) - シンプルなJavaイベントバスクライアント（標準TCPソケットI/Oを使用）
* [CLI](https://github.com/cinterloper/vxc) - Vert.xイベントバス向けコマンドラインバイナリクライアント - JSONをパイプに取り込み、JSONを発行。
* [Swift](https://github.com/tobias/vertx-swift-eventbus) - [Apple's Swift](https://swift.org)用のイベントバスクライアントを用意しています。 [TCP-based protocol](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)
* [Python](https://github.com/jaymine/TCP-eventbus-client-Python) - Pythonで使用するイベントバスクライアントの。 [TCP-based protocol](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)
* [C#](https://github.com/jaymine/TCP-eventbus-client-C-Sharp) - C#用のイベントバスクライアント、[TCP-based protocol](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)を用いる。
* [C](https://github.com/jaymine/TCP-eventbus-client-C) - C99で使用するイベントバスクライアントの[TCP-based protocol](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)。
* [Go](https://github.com/jponge/vertx-go-tcp-eventbus-bridge)- Go言語用のイベントバスクライアント、[TCP-based protocol](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)を用いる。
* [Smalltalk](https://github.com/mumez/VerStix)- [Pharo Smalltalk](http://pharo.org/)用のイベントバスクライアントをで実装。 [TCP-based protocol](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)
* [Java](https://github.com/nielsbaloe/vertxui/tree/master/vertxui-core/src/main/java/live/connector/vertxui/client/transport) - JavaコードでJavaScriptにおけるイベントバスのサポート
* [Elixir](https://github.com/PharosProduction/ExVertx) - Elixirアプリ向けのTCPソケットを使用したイベントバスサポート。
* [Rust](https://github.com/aesteve/vertx-eventbus-client-rs) - Rustアプリケーション向けのTCPを用いたイベントバスクライアント。

## Vert.x Event Bus Extensions

* [Eventbus Service](https://github.com/wowselim/eventbus-service) - 型安全なイベントバス通信をシンプルなKotlinインターフェースで生成するコードジェネレーター

## Cluster Managers

vert.xクラスタマネージャーSPIの実装

* [Hazelcast Cluster Manager](https://github.com/vert-x3/vertx-hazelcast) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Hazelcastクラスタマネージャ
* [Ignite Cluster Manager](https://github.com/vert-x3/vertx-ignite) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Igniteクラスタマネージャ
* [JGroups Cluster Manager](https://github.com/vert-x3/vertx-jgroups) - JGroupsクラスタマネージャ
* [Zookeeper Cluster Manager](https://github.com/vert-x3/vertx-zookeeper) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Zookeeperクラスタマネージャ
* [Infinispan Cluster Manager](https://github.com/vert-x3/vertx-infinispan) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Infinispanクラスタマネージャ
* [Consul Cluster Manager](https://github.com/reactiverse/consul-cluster-manager) - Consulクラスタマネージャ

<a id="cloud-support"></a>
## クラウド対応

* [OpenShift DIY cartridge](https://github.com/vert-x3/vertx-openshift-diy-quickstart) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - OpenShift DIY Cartridge（Vert.xを使用）
* [OpenShift Vert.x cartridge](https://github.com/vert-x3/vertx-openshift-cartridge) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - OpenShift Vert.x Cartridge（Vert.xを使用）
* [AWS SDK](https://github.com/reactiverse/aws-sdk) - AWS Java SDK v2（async）とVert.xの使用

## Microservices

* [Service Discovery](https://github.com/vert-x3/vertx-service-discovery) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Service Discovery" height="16px"> - Vert.x Service Discovery.
* [Circuit Breaker](https://github.com/vert-x3/vertx-circuit-breaker) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Circuit Breaker" height="16px"> - Vert.x サイクルブレーカー。
* [Service Discovery - Consul](https://github.com/vert-x3/vertx-service-discovery) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Service Discovery - Consul" height="16px"> - [Consul](https://www.consul.io/)がVert.x Service Discoveryに追加
* [Service Discovery - Docker links](https://github.com/vert-x3/vertx-service-discovery) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Service Discovery - Docker Links" height="16px"> - [Docker](https://www.docker.com/)がVert.x Service Discoveryに追加
* [Service Discovery - Kubernetes](https://github.com/vert-x3/vertx-service-discovery) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Service Discovery - Kubernetes" height="16px"> - [Kubernetes](http://kubernetes.io/)がVert.x Service Discoveryに追加
* [Service Discovery - Redis backend](https://github.com/vert-x3/vertx-service-discovery) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Service Discovery - Redis backend" height="16px"> - [Redis](http://redis.io/)がVert.x Service Discoveryのストレージバックエンド
* [Vert.x GraphQL Service Discovery](https://github.com/engagingspaces/vertx-graphql-service-discovery) - [GraphQL](http://graphql.org/)によるVert.xマイクロサービスのサービス発見とクエリ
* [Resilience4j](https://github.com/resilience4j/resilience4j) - Resilience4jはJava8および関数型プログラミング向けの障害耐性ライブラリです。Resilience4jは、回路ブレイク、レート制限、バッチング、自動リトライ、応答キャッシュ、メトリクス測定といったモジュールを提供します
* [Failsafe](https://failsafe.dev/) - FailsafeはJava 8+向けの軽量で*ゼロ依存*の失敗処理ライブラリです。簡潔なAPI。AkkaやVert.xなど、自社スケジューラを使用するライブラリとの統合、[Vert.x example](https://github.com/failsafe-lib/failsafe/blob/master/examples/src/main/java/dev/failsafe/examples/VertxExample.java)
* [Autonomous Services](https://github.com/mikand13/autonomous-services) - 自律サービスを作成するためのツールキット。Vert.xとnannoq-toolsを活用したイベントベースの反応アーキテクチャを提供し、通信やデータのための中央コンポーネントを一切不要にし、アーキテクチャ全体の理論的に線形なスケーラビリティを実現します。
* [Apache ServiceComb Java Chassis](https://github.com/apache/servicecomb-java-chassis) - ServiceComb Java Chassisは、Javaでマイクロサービスを高速開発できるためのソフトウェア開発キット（SDK）であり、サービス登録、サービス発見、動的ルーティング、サービス管理機能を提供する。
* [SmallRye Fault Tolerance](https://github.com/smallrye/smallrye-fault-tolerance) - SmallRye Fault ToleranceはEclipse MicroProfile Fault Toleranceの実装であり、規格で定義されていない追加機能を提供。Nativeサポートの[Vert.x](https://smallrye.io/docs/smallrye-fault-tolerance/6.2.6/integration/event-loop.html)および[Mutiny](https://smallrye.io/docs/smallrye-fault-tolerance/6.2.6/reference/asynchronous.html#async-types)。
* [GuicedEE](https://guicedee.com) - GuiceおよびVert.x 5をベースにした、モジュール化・反応型・企業向けアプリケーションを構築するJPMS-first Javaプラットフォーム。MicroProfile Config、Health、Metrics、OpenAPI、REST、永続化など、本体で提供。

<a id="game-development"></a>
## ゲーム開発

* [Orbital](https://github.com/tfkfan/orbital) - Vert.xベースの反応型分散ゲームサーバーおよびバトルロイヤルマルチプレイヤー開発ツール。Orbitalには基本的な拡張可能なマッチメーカー、ゲーム／ゲームルーム管理、WebSocket統合およびゲームライフサイクル管理機能を提供。Colyseusゲームエンジンの競合に最も近い。[Docs](https://tfkfan.github.io/orbital)。

<a id="search-engines"></a>
## 検索エンジン

* [Vert.x Elasticsearch Service](https://github.com/englishtown/vertx-elasticsearch-service) - Vert.x 3 [Elasticsearch](https://www.elastic.co/)サービスでイベントバスプロキシを提供。
* [Vert.x Solr Service](https://github.com/englishtown/vertx-solr-service) - Vert.x 3 Solrサービスでイベントバスプロキシを提供。

## Service Factory

* [Service Factory](https://github.com/vert-x3/vertx-service-factory) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.xサービスファクトリ。
* [Maven Service Factory](https://github.com/vert-x3/vertx-maven-service-factory) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Maven Vert.x Service Factory.
* [HTTP Service Factory](https://github.com/vert-x3/vertx-http-service-factory) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.x HTTP Service Factory.
* [Node.js Service Factory](https://github.com/mellster2012/vertx-nodejs-service-factory) - Vert.x Node.js Service Factory。
* [Eclipse SISU Service Factories](https://github.com/cstamas/vertx-sisu) - Vert.xが[Eclipse SISU](https://www.eclipse.org/sisu/)DIコンテナと統合され、`vertx-service-factory`および`vertx-maven-service-factory`に対する代替案を提供。

## Config

* [Vert.x Config AWS SSM Store](https://github.com/Finovertech/vertx-config-aws-ssm) - [config store](http://vertx.io/docs/vertx-config/java/)から[AWS EC2 SSM Parameter Store](https://aws.amazon.com/ec2/systems-manager/parameter-store/)に配置された設定値を取得するための実装。
* [Vert.x Boot](https://github.com/jponge/vertx-boot) - HOCON設定からVert.xのVerticleをデプロイする。

<a id="dependency-injection"></a>
## 依存性注入

* [Vert.x Guice](https://github.com/englishtown/vertx-guice) - Guiceの依存性注入用のVert.xのverticleファクトリ
* [Vert.x HK2](https://github.com/englishtown/vertx-hk2) - HK2依存性注入用のVert.xのverticleファクトリ。
* [Spring Vert.x Extension](https://github.com/amoAHCP/spring-vertx-ext) - Spring DI注入用のVert.x verticleファクトリ。
* [Vert.x Beans](https://github.com/rworsnop/vertx-beans) - SpringアプリケーションにVert.xオブジェクトをビーンとして注入。
* [QBit](https://github.com/advantageous/qbit) - QBitはSpring DIおよびSpring Boot（もちろんVert.x）と連携。QBit、Vert.x、Spring DIおよびSpring Bootを同じアプリケーション内で使用できる。
* [Vert.x Eclipse SISU](https://github.com/cstamas/vertx-sisu) - Vert.xが[Eclipse SISU](https://www.eclipse.org/sisu/)DIコンテナと統合。
* [Vert.x Spring Verticle Factory](https://github.com/juanavelez/vertx-spring-verticle-factory) - Springを用いてVerticleを取得・構成するVert.x Verticle Factory。
* [Glue](https://github.com/vinscom/glue) - JavaおよびVert.xベースのアプリケーション向けに、確実で意見のあるプログラミングおよび設定モデル。ATG Nucleusをインスピレーションとして、シンプルなプロパティファイルを使って強力なレイヤーベースの設定管理を提供する。

<a id="testing"></a>
## テスト

* [Vert.x Unit](https://github.com/vert-x3/vertx-unit) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.x向けの非同期多言語ユニットテスト。
* [Vert.x JUnit5](https://github.com/vert-x3/vertx-junit5) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - JUnit5を使ったVert.x向けの非同期ユニットテスト。
* [Vert.x WireMongo](https://github.com/noenv/vertx-wiremongo) - Vert.x向けの軽量MongoDBのモック。

<a id="development-tools"></a>
## 開発ツール

* [Vert.x shell](https://github.com/vert-x3/vertx-shell)  <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - コマンドラインからVert.xとのインタラクションを可能にする。
* [Vert.x health check](https://github.com/vert-x3/vertx-health-check) - Vert.xプロジェクト向けのリモートヘルスチェックを可能にする。
* [Vert.x Hot](https://github.com/dazraf/vertx-hot) - Maven向けのVert.xプロジェクトのホットデプロイプラグイン。
* [Vert.x for Visual Studio Code](https://github.com/pmlopes/VertxSnippet) - Visual Studio Code（多言語対応）プラグイン。また、[Marketplace](https://marketplace.visualstudio.com/items?itemName=pmlopes.vertxsnippet)からも入手可能。
* [Vert.x Starter](http://www.jetdrone.xyz/vertx-starter/) - Vert.xアプリケーション向けのブラウザベースのプロジェクトスタートアップおよびテンプレート。
* [Vert.x LiveReload](https://github.com/ybonnel/vertx-livereload) - Vert.xアプリケーション向けのシンプルなライブリロードサーバー。
* [openapi-generator](https://github.com/OpenAPITools/openapi-generator) - OpenAPI Generatorは、OpenAPI Spec（v2、v3）をもとにAPIクライアントライブラリ（SDK生成）、サーバースタブ、ドキュメントおよび設定を自動生成する。

## Miscellaneous

* [Vert.x Child Process](https://github.com/vietj/vertx-childprocess) - Vert.xから子プロセスを生成する。
* [vertx-redisques](https://github.com/swisspush/vertx-redisques) - Vert.x上で実装された、非常にスケーラブルなRedisベースの永続キューングシステム。
* [Simple File Server](https://github.com/pitchpoint-solutions/sfs) - OpenStack Swiftと互換性のある分散オブジェクトストレージサーバー。このサーバーは、極小なリソースで、数十億の大きなおよび小さなファイルを安全にサーバーし、保存できる。
* [Vert.x Boot](https://github.com/jponge/vertx-boot) - HOCON設定からVert.xのVerticleをデプロイする。
* [GDH](https://github.com/maxamel/GDH) - Vert.xをベースに構築された、一般化されたDiffie-Hellman鍵交換Javaライブラリ。
* [vertx-values](https://github.com/imrafaelmerino/vertx-values) - immutableかつ永続的なJSONを[json-values](https://github.com/imrafaelmerino/json-values)からイベントバスに送信する。

## Distribution

* [Vert.x Stack](https://github.com/vert-x3/vertx-stack) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.x + エンダースドモジュール。

<a id="examples"></a>
## サンプル

* [Vert.x blueprint - Microservice application](https://github.com/sczyh30/vertx-blueprint-microservice) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - 実際のVert.xブループリント。複雑なマイクロサービスアプリケーションの構築方法を示す。
* [Vert.x blueprint - Job Queue](https://github.com/sczyh30/vertx-blueprint-job-queue) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - 実際のVert.xブループリント。分散ジョブ処理アプリケーションの構築方法を示す。
* [Vert.x blueprint - TODO backend](https://github.com/sczyh30/vertx-blueprint-todo-backend) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.xの公式ガイドラインで、TODOアプリケーションのバックエンドを構築する方法を示している.
* [Vert.x examples](https://github.com/vert-x3/vertx-examples) <img src="https://raw.githubusercontent.com/vert-x3/vertx-awesome/6978ef828da5cec96fad20e0f146b06ad35d45d9/vertx-favicon.svg" alt="(stack)" title="Vert.x Stack" height="16px"> - Vert.xの公式サンプルで、ウェブサンプル、公式データベースクライアントの使い方などについて記載している.
* [Vert.x feeds](https://github.com/aesteve/vertx-feeds) - Vert.x、Gradle、MongoDB、Redis、Handlebarsテンプレート、AngularJS、イベントバス、SockJSを使用して構築されたRSSアグレゲーターの例.
* [Vert.x Markdown service](https://github.com/aesteve/vertx-markdown-service) - [service-proxy](https://github.com/vert-x3/vertx-service-proxy)とGradleを使用する方法の例.
* [Example using event bus and service proxies to connect vertx and node](https://github.com/advantageous/vertx-node-ec2-eventbus-example) - イベントバスとサービスプロキシを使ってVert.xとNodeを接続する方法を、ステップごとに説明したWiki記述付きの例.
* [Vert.x Todo-Backend implementation](https://github.com/aesteve/todo-backend-vertx) - Java 8のみで構成されたTodo MVCのバックエンド。ストレージにはVert.xのLocalMapを使用している.
* [Kotlin Todo-Backend implementation](https://github.com/aesteve/vertx-kotlin-todomvc) - Kotlinで構成されたTodo MVCのバックエンド.
* [Scala Todo-Backend implementation](https://github.com/aesteve/vertx-scala-todomvc) - Scalaで構成されたTodo MVCのバックエンド.
* [Grooveex Todo-Backend implementation](https://github.com/aesteve/todo-backend-grooveex) - Vert.x + Groovy + 構文糖およびDSLルーティング機能を用いたTodo MVCのバックエンド実装.
* [Vert.x Gradle Starter](https://github.com/yyunikov/vertx-gradle-starter) - Java 8のスタートアップアプリで、Vert.xとGradleビルドシステム、プロファイル設定、SLF4Jの使用例を示している.
* [Vert.x Gentics Mesh Example](https://github.com/gentics/mesh-vertx-example) - Gentics MeshとHandlebarsを使ってテンプレートベースのWebサーバーを構築する方法の例.
* [HTTP/2 showcase](https://github.com/aesteve/http2-showcase) - HTTP/2が、大きな遅延が関わる場合にユーザー体験を大きく改善できるというシンプルなデモ.
* [Vert.x Music Store](https://github.com/tsegismont/vertx-musicstore) - RxJavaを使ってVert.xアプリケーションを構築する方法の例.
* [Crabzilla](https://github.com/crabzilla/crabzilla) - もう一つのイベントソース実験。Vert.xを使ってイベントソース／CQRSアプリケーションを開発するプロジェクトを探索している.
* [Vert.x PostgreSQL Starter](https://github.com/BillyYccc/vertx-postgresql-starter) - Vert.xスタックとPostgreSQLを使って、モノリスックなCRUD RESTful Webサービスを構築するためのスタートアップ例.
* [Cloud Foundry](https://github.com/amdelamar/vertx-cloudfoundry) - Vert.xを用いて、 [Cloud Foundry](https://www.cloudfoundry.org/)サービスプロバイダーにデプロイするための例アプリケーション.
* [Knative](https://github.com/knative/docs/tree/main/code-samples/community/serving/helloworld-vertx) - [Reactive Extensions Vert.x](https://github.com/vert-x3/vertx-rx)と[Knative](https://github.com/knative)を使って、アプリケーションを構築する方法の例.
* [Starter Single Verticle API](https://github.com/jgarciasm/ssv-api) - REST APIスタートアップとプロジェクトテンプレート。多くのインフラコード、例、ドキュメントが用意されており、Vert.xの知識がほとんどなくとも、短時間でAPIを開発できるようになっている.
* [AI model output API based on PMML with Vert.x](https://github.com/immusen/vertx-pmml) - Vert.xに基づく高性能PMML評価API。JSONを用いて複数のPMMLモデルに対して動的ルーティング設定をサポートしている.

<a id="deployment"></a>
## デプロイ

* [Vert.x Deploy Application](https://github.com/msoute/vertx-deploy-tools) - (スムーズに) AWSベースのVert.xアプリケーションクラスタにデプロイする

<a id="utilities"></a>
## ユーティリティ

* [Chime](https://github.com/LisiLisenok/Chime) - タイムスケジューラーがVert.xイベントバス上で動作し、*cronスタイル*および*インターバル*タイマーによるスケジューリングを可能にする。
* [Vert.x Cron](https://github.com/diabolicallabs/vertx-cron) - cron仕様でイベントをスケジュール可能。イベントバスおよびObservableバージョンを提供。
* [Vert.x CronUtils](https://github.com/NoEnv/vertx-cronutils) - Vert.xスケジューラー向けのcron-utilsの抽象化。Unix、Cron4jおよびQuartzスタイルの表現がサポートされている。
* [Vert.x Scheduler](https://github.com/zero88/vertx-scheduler) - *cronスタイル*および*インターバル*タイマーによるスケジューリングに用いる、外部ライブラリなしのシンプルなプラグイン型スケジューラー。同期および非同期タスクの詳細な*モニタリング*が可能。
* [Vert.x POJO config](https://github.com/aesteve/vertx-pojo-config) - 標準JSON設定と（型安全）設定Javaビーンの間のマッピングを可能にする。また、JSR 303による設定ビーンの検証も可能。
* [Vert.x Async](https://github.com/gchauvet/vertx-async) - caolan/async Node.jsモジュールをVert.xフレームワークに移植したもの。一般的な非同期パターンに必要なヘルパーメソッドを提供。
* [Vert.x JOLT](https://github.com/lusoalex/vertx-jolt) - 元のbazaarvoice JOLTプロジェクトに基づくJSONからJSONへの変換ツール。異なるJSON構造を期待されるJSONフォーマットに変換するのに役立つ。
* [Vert.x Dependent Verticle Deployer](https://github.com/juanavelez/vertx-dependent-verticle-deployer) - Vert.xのVerticleとして、Verticleおよびその依存VerticleをデプロイするためのVerticle。
* [Vert.x Dataloader](https://github.com/engagingspaces/vertx-dataloader) - Facebook DataloaderのJava版（Vert.x向け）。データレイヤーにおける効率的なバッチ処理およびキャッシュ。
* [Vert.x Util](https://github.com/juanavelez/vertx-util) - Vert.xユーティリティメソッドのコレクション。
* [Vert.x Web Accesslog](https://github.com/romanpierson/vertx-web-accesslog) - Vert.x Webでアクセスログを生成するために使用するシンプルなハンドラー。
* [Vert.x GraphQL Utils](http://github.com/tibor-kocsis/vertx-graphql-utils) - GraphQLクエリをVert.xおよびVertix Webで処理するためのルートハンドラーおよびVert.x互換インターフェース。
* [Nannoq-Tools](https://noriginmedia.github.io/nannoq-tools/) - Nannoq-Toolsは、Vert.xを活用した堅牢でスケーラブルかつ分散型アプリケーションを構築するためのツールキット。認証、クラスタ管理、Firebase Cloud Messaging、DynamoDB、完全に一般化されたクエリ、RESTなど、多くのモジュールを提供。
* [Contextual logging](https://github.com/reactiverse/reactiverse-contextual-logging) - Vert.xイベントループモデルと連携するマップされた診断コンテキスト（MDC）。
* [Vert.x JsonPath](https://github.com/NoEnv/vertx-jsonpath) - Vert.xのJsonObjectおよびJsonArrayを用いたJsonPathの非常に基本的な実装。getX、containsKey、putおよびremoveメソッドを模倣。

<a id="presentations"></a>
## プレゼンテーション

* [Vert.x Youtube channel](https://www.youtube.com/channel/UCGN6L3tRhs92Uer3c6VxOSA)

<a id="community"></a>
## コミュニティ

* [User Group](https://groups.google.com/forum/?fromgroups#!forum/vertx) - Vert.xを使用する際のすべてのユーザーの問題について議論。
* [Developer Group](https://groups.google.com/forum/?fromgroups#!forum/vertx-dev) - Vert.xコアの*開発者*および*貢献者*のグループ。
* [Discord Server](https://discord.gg/KzEMwP2) - Vert.xに関連するあらゆるトピックについてチャット。
* [Issues](https://github.com/vert-x3/issues/issues) - Vert.xコアの問題トラッカー。
* [Wiki](https://github.com/vert-x3/wiki/wiki) - Vert.xに関する有用な情報が含まれている。
* [Blog](http://vertx.io/blog/) - オフィシャル Vert.x ブログ。多くのチュートリアルやその他の情報が掲載されています。

<a id="articles"></a>
## 記事

* [Embracing Reactive Applications on JVM: a Deep Dive into Modern I/O Models and Vert.x](https://www.infoq.com/articles/reactive-java-vertx-deep-dive/)
* [Going reactive with Eclipse Vert.x and RX Java](https://blogs.oracle.com/javamagazine/post/going-reactive-with-eclipse-vertx-and-rxjava)
* [Vert.x 3.3.0 Features Enhanced Networking Microservices, Testing and More](https://www.infoq.com/news/2016/06/Vert.x-3.3.0-release-features)
* [Interview with Tim Fox About Vert.x 3, the Original Reactive, Microservice Toolkit for the JVM](http://www.infoq.com/articles/vertx-3-tim-fox)

<a id="tutorials"></a>
## チュートリアル

* [Introduction to Vert.x](https://vertx.io/get-started/)

## Front-End

* [VertxUI](https://github.com/nielsbaloe/vertxui) - 純粋な Java フロントエンドツールキット。モデルに対する説明的なフリュイドなビュー、POJO によるトラフィック、仮想 DOM または実際の DOM における混合言語によるテストなどがあります。

<a id="contribute"></a>
## コントリビューション

ご貢献をお待ちしております！まず[contribution guidelines](https://github.com/vert-x3/vertx-awesome/blob/6978ef828da5cec96fad20e0f146b06ad35d45d9/CONTRIBUTING.md)を読んでください。
