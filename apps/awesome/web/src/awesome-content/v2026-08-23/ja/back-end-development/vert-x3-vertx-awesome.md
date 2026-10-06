---
title: "Awesome Vert.x"
description: "Vert.xのライブラリ、データベース・メッセージングクライアント、リアクティブ処理、クラスター管理、サンプル、学習資料。"
licenseSource: "github-vert-x3-vertx-awesome-readme-md"
---

# Awesome Vert.x

JVM上の[Vert.x](https://github.com/eclipse/vert.x)で使うWebフレームワーク、データベースアクセス、メッセージング、イベントバスクライアント、クラスター管理、リアクティブ処理のライブラリやツールをまとめています。対応言語、テスト、デプロイ、ユーティリティ、サンプル、書籍、チュートリアルも探せます。[プロジェクトサイト](http://vertx.io)が導入の入口になります。

このスナップショットで「公式スタック」と記した項目は、原文で[Vert.xの公式スタック](https://vertx.io/docs/)に含まれるとされているものです。リストの管理者は、それ以外の項目の安定性や本番環境への適性を保証していません。

## 書籍 <a id="books"></a>

* [Building Reactive Microservices in Java](https://www.oreilly.com/library/view/building-reactive-microservices/9781491986295/) — Clément Escoffier 著
* [Vert.x in Action](https://www.manning.com/books/vertx-in-action) — Julien Ponge 著

## ビルドツール <a id="build-tools"></a>

* [Vert.x Maven plugin](https://github.com/reactiverse/vertx-maven-plugin)
* [Vert.x Gradle plugin](https://plugins.gradle.org/plugin/io.vertx.vertx-plugin)
* [Vert.x Codegen Gradle plugin](https://github.com/bulivlad/vertx-codegen-plugin) - Vert.xのJavaプロジェクトでコード生成を使いやすくするGradleプラグイン。

## ウェブフレームワーク <a id="web-frameworks"></a>

* [Vert.x Web](https://github.com/vert-x3/vertx-web) (公式スタック) - Vert.x向けの多機能なWebツールキット。
* [Vert.x Jersey](https://github.com/englishtown/vertx-jersey) - Vert.xでJAX-RSの[Jersey](https://eclipse-ee4j.github.io/jersey/)リソースを作成。
* [Kovert](https://github.com/kohesive/kovert) - KotlinとVert.x Web向けの、フレームワークの存在を意識させないRESTフレームワーク。
* [Handlers](https://github.com/spriet2000/vertx-handlers-http) - Vert.x向けのオープンなWebフレームワーク。
* [QBit](https://github.com/advantageous/qbit) - RESTとWebSocketのメソッド呼び出しのマーシャリング、およびリアクティブ処理のライブラリ。
* [vertx-rest-storage](https://github.com/swisspush/vertx-rest-storage) - RESTリソースをファイルシステムまたはRedisデータベースに永続化。
* [Jubilee](https://github.com/isaiah/jubilee) - Vert.x 3を基盤とするRack互換のRuby HTTPサーバー。
* [Knot.x](https://github.com/Cognifide/knotx) - Vert.x 3を基盤とする、モダンなWebサイト向けの効率的で高性能な統合プラットフォーム。
* [Irked](https://github.com/GreenfieldTech/irked) - Vert.x Webのアノテーションによる設定。コントローラーフレームワークと、REST向けの表現力のあるAPIを提供。
* [REST.VertX](https://github.com/zandero/rest.vertx) - Vert.xのverticle向けの、JAX-RS (RestEasy) 形式の軽量なアノテーションプロセッサー。
* [Atmosphere Vert.x](https://github.com/Atmosphere/atmosphere-vertx) - JVM向けのリアルタイムなクライアント／サーバーフレームワーク。WebSocketとServer-Sent Eventsに対応し、ブラウザー間の差異を吸収するフォールバックを提供。
* [Vert.x Vaadin](https://github.com/mcollovati/vertx-vaadin) - Vert.x上でVaadinアプリケーションを実行。
* [Serverx](https://github.com/lukehutch/serverx) - ルートハンドラーのアノテーションだけで、Vert.xを使うサーバーを簡単に素早く構築。
* [Cloudopt Next](https://github.com/cloudoptlab/cloudopt-next) - モジュール化され、テストしやすいアプリケーション向けの軽量なJVMベースのフルスタックKotlinフレームワーク。JavaとKotlinに対応し、Javaのライブラリと標準を基盤とする。
* [Donkey](https://github.com/AppsFlyer/donkey) - 使いやすさと性能を重視した、モダンなClojure HTTPサーバーとクライアント。
* [SCX](https://github.com/scx567888/scx) - 多くの機能がアノテーションに基づく、オープンで使いやすいWebフレームワーク。
* [vertx-rest](https://github.com/dream11/vertx-rest) - resteasy-vertxを抽象化し、JAX-RSアノテーションに基づくVert.x RESTアプリケーションの作成を簡略化。

## 認証・認可 <a id="authentication-authorisation"></a>

* [Vert.x Auth SQL](https://github.com/eclipse-vertx/vertx-auth) (公式スタック) - Vert.x SQLクライアントとリレーショナルデータベースに基づく、Vert.xの認証・認可。
* [Vert.x Auth JWT](https://github.com/eclipse-vertx/vertx-auth/tree/master/vertx-auth-jwt) (公式スタック) - JSON Web Tokenに基づくVert.xの認可。
* [Vert.x Auth htdigest](https://github.com/eclipse-vertx/vertx-auth/tree/master/vertx-auth-htdigest) (公式スタック) - [Apache htdigest](https://httpd.apache.org/docs/2.4/programs/htdigest.html)に基づくVert.xの認可・認証。
* [Vert.x Auth Mongo](https://github.com/vert-x3/vertx-auth/tree/master/vertx-auth-mongo) (公式スタック) - [MongoDB](https://www.mongodb.com/)に基づくVert.xの認可・認証。
* [Vert.x Auth OAuth2](https://github.com/eclipse-vertx/vertx-auth/tree/master/vertx-auth-oauth2) (公式スタック) - [OAuth 2](https://oauth.net/2/)に基づくVert.xの認可・認証。
* [Vert.x Auth htpasswd](https://github.com/eclipse-vertx/vertx-auth/tree/master/vertx-auth-htpasswd) (公式スタック) - [htpasswd](https://httpd.apache.org/docs/2.4/programs/htpasswd.html)に基づくVert.xの認可・認証。

* [Vert.x-Pac4j](https://github.com/pac4j/vertx-pac4j) - [pac4j](http://www.pac4j.org/)を使って実装したVert.xの認証・認可。

## データベースクライアント <a id="database-clients"></a>

データベースに接続するクライアント。

* リレーショナルデータベース
  * [Reactive SQL Client](https://github.com/eclipse-vertx/vertx-sql-client) (公式スタック) - 高性能なリアクティブSQLクライアント。
  * [JDBC](https://github.com/vert-x3/vertx-jdbc-client) (公式スタック) - JDBCデータソースを非同期で操作するインターフェース。
  * [MySQL / PostgreSQL](https://github.com/vert-x3/vertx-mysql-postgresql-client) (公式スタック) - MySQL／PostgreSQL向けの非同期クライアント。
  * [PostgreSQL](https://github.com/vietj/reactive-pg-client) - リアクティブなPostgreSQLクライアント。
  * [database](https://github.com/susom/database) - 安全性、正確性、使いやすさを重視したOracle、PostgreSQL、SQL Server、HyperSQLなどのクライアント。
  * [jOOQ](https://github.com/jklingsporn/vertx-jooq) - jOOQを使う型安全な非同期SQL操作とコード生成。
  * [jOOQx](https://github.com/zero88/jooqx) - `jOOQ DSL`の型安全なSQLと、Vert.xのリアクティブでノンブロッキングなSQLドライバーを利用。
  * [Exposed Vert.x SQL Client](https://github.com/huanshankeji/exposed-vertx-sql-client) - Kotlinの[Exposed](https://github.com/JetBrains/Exposed)を[Vert.x Reactive SQL Client](https://github.com/eclipse-vertx/vertx-sql-client)上で利用。

* NoSQLデータベース
  * [MongoDB](https://github.com/vert-x3/vertx-mongo-client) (公式スタック) - MongoDBデータベースを操作する非同期クライアント。
  * [Redis](https://github.com/vert-x3/vertx-redis-client) (公式スタック) - Redisを操作する非同期API。
  * [Cassandra](https://github.com/vert-x3/vertx-cassandra-client) (公式スタック) - アプリケーションからCassandraサービスを操作するVert.xクライアント。
  * [Cassandra](https://github.com/englishtown/vertx-cassandra) - CassandraとCassandra Mappingを操作する非同期API。
  * [Neo4j Java Driver Vert.x](https://github.com/romanbsd/neo4j-java-driver-vertx) - Neo4j Java DriverのVert.xラッパー。
  * [OrientDB](https://github.com/cstamas/vertx-orientdb) - ノンブロッキングなOrientDBサーバー連携。
  * [Bitsy](https://github.com/cstamas/vertx-bitsy) - ノンブロッキングなBitsy Graphサーバー連携。
  * [MarkLogic](https://github.com/etourdot/vertx-marklogic) - Marklogic Database Server向けの非同期クライアント。
  * [SirixDB](https://github.com/sirixdb/sirix/tree/master/bundles/sirix-rest-api) - ノンブロッキングなSirixDB HTTPサーバー。
  * [DGraph](https://github.com/aesteve/vertx-dgraph-client) - gRPCに準拠するVert.xクライアントを作成する例。[dgraph](https://docs.dgraph.io)を対象とする。
  * [RxFirestore](https://github.com/pjgg/rxfirestore) - リアクティブな方式で実装された、ノンブロッキングなFirestore SDK。
  * [MongoDB](https://github.com/imrafaelmerino/vertx-mongo-effect) - [Vert.x Effect](https://github.com/imrafaelmerino/vertx-mongo-effect)を基盤とする、純粋関数型でリアクティブなMongoDBクライアント。リトライ、フォールバック、復旧操作を全面的にサポート。
  * [Aerospike](https://github.com/dream11/vertx-aerospike-client) - Aerospikeサーバーを操作する非同期・ノンブロッキングAPI。内部で[AerospikeClient](https://github.com/aerospike/aerospike-client-java)の非同期コマンドを使い、Vert.x Context上で結果を処理。

* [vertx-pojo-mapper](https://github.com/BraintagsGmbH/vertx-pojo-mapper) - MySQLとMongoDB向けのノンブロッキングなPOJOマッピング。
* [vertx-mysql-binlog-client](https://github.com/guoyu511/vertx-mysql-binlog-client) - MySQLのレプリケーションストリームを取得するVert.xクライアント。

## 外部連携 <a id="integration"></a>

* Server-Sent Events
  * [jEaSSE](https://github.com/mariomac/jeasse) - Java Easy SSE。シンプルで軽量なSSE実装。
  * [vertx-sse](https://github.com/aesteve/vertx-sse) - Vert.xのSSE実装と、イベントバスのSSEブリッジ。

* メール
  * [SMTP](https://github.com/vert-x3/vertx-mail-client) (公式スタック) - 非同期SMTPクライアント。

* REST
  * [Retrofit adapter for Vert.x](https://github.com/vietj/retrofit-vertx) - Vert.xを使う、拡張性の高いRetrofitアダプター。
  * [openapi4j adapter for Vert.x](https://github.com/openapi4j/openapi4j/tree/master/openapi-operation-adapters/openapi-operation-vertx) - OpenAPI 3のリクエスト検証とルーターファクトリーの代替実装。
  * [Vert.x Effect HTTP client](https://github.com/imrafaelmerino/vertx-effect) - [Vert.x Effect](https://github.com/imrafaelmerino/vertx-effect)を使う、純粋関数型でリアクティブなHTTPクライアント。OAuthと、リトライ、フォールバック、復旧操作に対応。

* ファイルサーバー
  * [Vert.x TFTP Client](https://github.com/OneManCrew/vertx-tftp-client) - ファイルのダウンロードとアップロードに対応したVert.x向けTFTPクライアント。
* メッセージング
  * [AMQP 1.0](https://github.com/vert-x3/vertx-amqp-bridge) (公式スタック) - Vert.xのProducer APIとConsumer APIを使ってAMQP 1.0サーバーと通信。
  * [MQTT](https://github.com/vert-x3/vertx-mqtt) (公式スタック) - 2つのコンポーネントを提供。クライアントとのMQTT通信とメッセージ交換を処理するMQTTサーバー、およびMQTTブローカーとメッセージを送受信するMQTTクライアント。
  * [RabbitMQ](https://github.com/vert-x3/vertx-rabbitmq-client) (公式スタック) - RabbitMQクライアント (AMQP 0.9.1)。
  * [Kafka Client](https://github.com/vert-x3/vertx-kafka-client) (公式スタック) - Kafkaクライアント。
  * [kafka](https://github.com/cyngn/vertx-kafka) - メッセージを受信・送信するKafkaクライアント。
  * [STOMP](https://github.com/vert-x3/vertx-stomp) (公式スタック) - STOMPクライアントとサーバー。
  * [ZeroMQ](https://github.com/dano/vertx-zeromq) - ZeroMQのイベントバスブリッジ。
  * [Azure ServiceBus](https://github.com/TextBack/vertx-azure-servicebus) - Azure [ServiceBus](https://azure.microsoft.com/en-us/products/service-bus/)のプロデューサーとコンシューマー。完全に非同期で動作し、Microsoft Azure SDKを使用しない。
  * [AMQP 1.0 - Kafka bridge](https://github.com/rhiot/amqp-kafka-bridge) - AMQP 1.0プロトコルでApache Kafkaとメッセージを送受信するブリッジ。
  * [Vert.x Kafka Client](https://github.com/vert-x3/vertx-kafka-client) (公式スタック) - Apache Kafkaクラスターとのメッセージの読み取り・送信を行うApache Kafkaクライアント。
  * [The White Rabbit](https://github.com/viartemev/the-white-rabbit) - Kotlinコルーチンを基盤とする非同期RabbitMQ (AMQP) クライアント。
  * [WAMP Broker](https://github.com/i22-digitalagentur/vertx-wamp) - Vert.xアプリケーションに組み込めるWAMPブローカー。

* JavaEE
  * [JCA adaptor](https://github.com/vert-x3/vertx-jca) (公式スタック) - Vert.xのイベントバス向けのJava Connector Architectureアダプター。
  * [Weld](https://github.com/weld/weld-vertx) - CDIのプログラミングモデルをVert.xで利用。CDIオブザーバーメソッドをVert.xのメッセージコンシューマーとして登録する機能、CDIを使うverticle、宣言的なルート定義などを提供。

* Meteor
  * [Meteor](https://github.com/jmusacchio/vertxbus/) - Vert.xのイベントバスを通じたMeteor連携。

* メトリクス
  * [Hawkular metrics](https://github.com/tsegismont/vertx-monitor) - Vert.x Metrics SPIの[Hawkular](http://www.hawkular.org/)実装。
  * [DropWizard metrics](https://github.com/vert-x3/vertx-dropwizard-metrics) (公式スタック) - DropWizard metricsを使うメトリクス実装。
  * [Micrometer metrics](https://github.com/vert-x3/vertx-micrometer-metrics) (公式スタック) - Micrometer metricsを使うメトリクス実装。
  * [OpenTsDb Metrics](https://github.com/cyngn/vertx-opentsdb) - Vert.x向けの[OpenTsDb](http://opentsdb.net/)メトリクスクライアント。
  * [Bosun Monitoring](https://github.com/cyngn/vertx-bosun) - Vert.x向けの[Bosun](https://bosun.org/)クライアントライブラリ。

* Netflix - Hystrix
  * [Hystrix Metrics Stream](https://github.com/kennedyoliveira/hystrix-vertx-metrics-stream.git) - [Hystrix](https://github.com/Netflix/Hystrix)を使うVert.xアプリケーションから、Hystrix Dashboard向けのメトリクスを出力。

* Dart
  * [Vert.x Dart SockJS](https://github.com/wem/vertx-dart-sockjs) - [Dart](https://www.dartlang.org/)をdart:jsで[Vert.x SockJS bridge](http://vertx.io/docs/vertx-web/java/#_sockjs_event_bus_bridge)および通常のSockJSと連携させる。

* プッシュ通知
  * [Onesignal](https://github.com/jklingsporn/vertx-push-onesignal) - Vert.xアプリケーションから、[OneSignal](https://onesignal.com/)を使ってモバイル／Webアプリにプッシュ通知を送信。

* CNCF CloudEvents
  * [CloudEvents.io Java SDK](https://github.com/cloudevents/sdk-java) - [CloudEvents](https://cloudevents.io/)を、CloudEvents向けの[Vert.x HTTP Transport](https://github.com/cloudevents/sdk-java/blob/master/http/vertx/README.md)で送受信。

## ミドルウェア <a id="middleware"></a>

* [Apache Camel](https://camel.apache.org/components/vertx-component.html) - CamelとVert.xのイベントバスをつなぐ[Apache Camel](http://camel.apache.org/)コンポーネント。
* [Gateleen](https://github.com/swisspush/gateleen) - 高度なJSON／REST通信サーバーを構築するための、Vert.xベースのミドルウェアライブラリ。
* [Gravitee.io](https://gravitee.io) - Vert.x Core、Vert.x Webなどを基盤とするOSSのAPIプラットフォーム。APIゲートウェイとOAuth2／OIDC認可サーバーを含む。
* [API Framework](https://github.com/vinscom/api-framework) - 同じサービスのコードを単独サーバーまたはサーバーレスアプリケーションとして実行できる、Vert.xとGlueベースのマイクロサービスフレームワーク。

## 言語サポート <a id="language-support"></a>

Vert.xの対応プログラミング言語。

* [Ceylon](https://github.com/vert-x3/vertx-lang-ceylon) (公式スタック) - Ceylonに対応。
* [Groovy](https://github.com/vert-x3/vertx-lang-groovy) (公式スタック) - Groovyに対応。
* [Java](https://github.com/eclipse/vert.x) (公式スタック) - Vert.xの主要リポジトリ。Java APIを含む。
* [JavaScript](https://github.com/vert-x3/vertx-lang-js) (公式スタック) - JavaScriptに対応。
* [Python](https://github.com/vert-x3/vertx-lang-python) - Pythonに対応。
* [Ruby](https://github.com/vert-x3/vertx-lang-ruby) (公式スタック) - Rubyに対応。
* [Scala](https://github.com/vert-x3/vertx-lang-scala) (公式スタック) - Scalaに対応。
* [Kotlin](https://github.com/vert-x3/vertx-lang-kotlin) (公式スタック) - Kotlinに対応。
* [EcmaScript](https://github.com/reactiverse/es4x) - EcmaScript >=6 (JavaScript) に対応。
* [Php](https://github.com/vert-x-cn/vertx-lang-jphp) - Phpに対応。

言語拡張。

* [Grooveex](https://github.com/aesteve/grooveex) - [vertx-lang-groovy](https://github.com/vert-x3/vertx-lang-groovy)を基盤とする糖衣構文とユーティリティ。DSLビルダーなどを提供。

## リアクティブプログラミング <a id="reactive"></a>

* [Reactive Streams](https://github.com/vert-x3/vertx-reactive-streams) (公式スタック) - Vert.xのReactive Streams。
* [Vert.x Rx](https://github.com/vert-x3/vertx-rx) (公式スタック) - Vert.xのReactive Extensions。
* [Vert.x Sync](https://github.com/vert-x3/vertx-sync) (公式スタック) - Vert.xのファイバーに対応。
* [Kotlin coroutines](https://github.com/vert-x3/vertx-lang-kotlin/tree/master/vertx-lang-kotlin-coroutines) (公式スタック) - Vert.xのKotlinコルーチンに対応。
* [vertx-util](https://github.com/cyngn/vertx-util) - Vert.x向けの軽量なPromiseとラッチ。
* [QBit](https://github.com/advantageous/qbit) - Vert.xの非同期コールバック内で動作する、アクターに似た型付きの非同期ライブラリ。コールバック管理を提供。
* [VxRifa](https://nsforth.github.io/vxrifa) - イベントバス通信で強い型付けのインターフェースを使えるVert.xユーティリティライブラリ。
* [Vert.x Effect](https://github.com/imrafaelmerino/vertx-effect) - 複雑な処理フローを実装する、IOモナドに基づく純粋関数型でリアクティブなライブラリ。リトライ、フォールバック、復旧操作を全面的にサポート。
* [SmallRye Mutiny](https://smallrye.io/smallrye-mutiny/) - [Vert.xバインディング](https://smallrye.io/smallrye-mutiny-vertx-bindings/)を備えた、Java向けの直感的なイベント駆動型リアクティブプログラミングライブラリ。

## OSスレッドをブロックしない同期verticle <a id="sync-thread-non-block"></a> <a id="synchronous-verticles-without-blocking-os-threads"></a>

* [Sync](https://github.com/vert-x3/vertx-sync) - 同期的に動作しながらOSスレッドをブロックしないverticle。

## Vert.xイベントバスクライアント <a id="vertx-event-bus-clients"></a>

アプリケーションをVert.xのイベントバスに接続するクライアント。

* [C++11](https://github.com/julien3/vertxbuspp) - C++11のイベントバスクライアント。
* [Java](https://github.com/saffron-technology/vertx-eventbusbridge) - vertxbus.jsのJava実装。
* [Java](https://github.com/abdlquadri/vertx-eventbus-java) - JavaとAndroidのイベントバスクライアント。
* [Java](https://github.com/danielstieger/javaxbus) - 通常のTCPソケットI/Oを使う、シンプルなJavaイベントバスクライアント。
* [CLI](https://github.com/cinterloper/vxc) - Vert.xイベントバス向けのコマンドラインのバイナリークライアント。パイプからJSONを入力し、JSONを出力。
* [Swift](https://github.com/tobias/vertx-swift-eventbus) - [AppleのSwift](https://swift.org)向けのイベントバスクライアント。[TCPベースのプロトコル](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)を使用。
* [Python](https://github.com/jaymine/TCP-eventbus-client-Python) - [TCPベースのプロトコル](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)を使うPython向けイベントバスクライアント。
* [C#](https://github.com/jaymine/TCP-eventbus-client-C-Sharp) - [TCPベースのプロトコル](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)を使うC#向けイベントバスクライアント。
* [C](https://github.com/jaymine/TCP-eventbus-client-C) - [TCPベースのプロトコル](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)を使うC99向けイベントバスクライアント。
* [Go](https://github.com/jponge/vertx-go-tcp-eventbus-bridge) - [TCPベースのプロトコル](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)を使うGo向けイベントバスクライアント。
* [Smalltalk](https://github.com/mumez/VerStix) - [Pharo Smalltalk](http://pharo.org/)向けのイベントバスクライアント。[TCPベースのプロトコル](https://github.com/vert-x3/vertx-tcp-eventbus-bridge)を使用。
* [Java](https://github.com/nielsbaloe/vertxui/tree/master/vertxui-core/src/main/java/live/connector/vertxui/client/transport) - Javaコードを通じてJavaScriptでイベントバスを利用。
* [Elixir](https://github.com/PharosProduction/ExVertx) - TCPソケットを使い、Elixirアプリケーションでイベントバスを利用。
* [Rust](https://github.com/aesteve/vertx-eventbus-client-rs) - TCPを通じたRustアプリケーション向けイベントバスクライアント。

## Vert.xイベントバス拡張 <a id="vertx-event-bus-extensions"></a>

* [Eventbus Service](https://github.com/wowselim/eventbus-service) - シンプルなKotlinインターフェースを介して型安全なイベントバス通信を行うためのコードジェネレーター。

## クラスター管理 <a id="cluster-managers"></a>

Vert.xのクラスター管理SPIの実装。

* [Hazelcast Cluster Manager](https://github.com/vert-x3/vertx-hazelcast) (公式スタック) - Hazelcastクラスター管理。
* [Ignite Cluster Manager](https://github.com/vert-x3/vertx-ignite) (公式スタック) - Igniteクラスター管理。
* [JGroups Cluster Manager](https://github.com/vert-x3/vertx-jgroups) - JGroupsクラスター管理。
* [Zookeeper Cluster Manager](https://github.com/vert-x3/vertx-zookeeper) (公式スタック) - Zookeeperクラスター管理。
* [Infinispan Cluster Manager](https://github.com/vert-x3/vertx-infinispan) (公式スタック) - Infinispanクラスター管理。
* [Consul Cluster Manager](https://github.com/reactiverse/consul-cluster-manager) - Consulクラスター管理。

## クラウド対応 <a id="cloud-support"></a>

* [OpenShift DIY cartridge](https://github.com/vert-x3/vertx-openshift-diy-quickstart) (公式スタック) - Vert.xを使うOpenShift DIYカートリッジ。
* [OpenShift Vert.x cartridge](https://github.com/vert-x3/vertx-openshift-cartridge) (公式スタック) - Vert.xを使うOpenShift Vert.xカートリッジ。
* [AWS SDK](https://github.com/reactiverse/aws-sdk) - 非同期のAWS Java SDK v2をVert.xで利用。

## マイクロサービス <a id="microservices"></a>

* [Service Discovery](https://github.com/vert-x3/vertx-service-discovery) (公式スタック) - Vert.xのサービスディスカバリー。
* [Circuit Breaker](https://github.com/vert-x3/vertx-circuit-breaker) (公式スタック) - Vert.xのサーキットブレーカー。
* [Service Discovery - Consul](https://github.com/vert-x3/vertx-service-discovery) (公式スタック) - Vert.x Service Discoveryの[Consul](https://www.consul.io/)拡張。
* [Service Discovery - Docker links](https://github.com/vert-x3/vertx-service-discovery) (公式スタック) - Vert.x Service Discoveryの[Docker](https://www.docker.com/)拡張。
* [Service Discovery - Kubernetes](https://github.com/vert-x3/vertx-service-discovery) (公式スタック) - Vert.x Service Discoveryの[Kubernetes](http://kubernetes.io/)拡張。
* [Service Discovery - Redis backend](https://github.com/vert-x3/vertx-service-discovery) (公式スタック) - Vert.x Service Discoveryの[Redis](http://redis.io/)ストレージバックエンド。
* [Vert.x GraphQL Service Discovery](https://github.com/engagingspaces/vertx-graphql-service-discovery) - Vert.xマイクロサービス向けの[GraphQL](http://graphql.org/)サービスディスカバリーとクエリ。
* [Resilience4j](https://github.com/resilience4j/resilience4j) - Java 8と関数型プログラミング向けの耐障害性ライブラリ。サーキットブレーカー、レート制限、障害分離、自動リトライ、レスポンスキャッシュ、メトリクス収集のモジュールを提供。
* [Failsafe](https://failsafe.dev/) - Java 8+で障害を処理する、軽量で依存関係のないライブラリ。簡潔なAPIを備え、AkkaやVert.xなど、非同期実行用の独自スケジューラーを持つライブラリと連携。[Vert.xの例](https://github.com/failsafe-lib/failsafe/blob/master/examples/src/main/java/dev/failsafe/examples/VertxExample.java)。
* [Autonomous Services](https://github.com/mikand13/autonomous-services) - Vert.xとnannoq-toolsを使う、自律型サービス向けのツールキット。イベント駆動のリアクティブな構成で、通信にもデータにも中央集約型のコンポーネントを使わない。原文では、構成全体のスケーラビリティが理論上線形とされる。
* [Apache ServiceComb Java Chassis](https://github.com/apache/servicecomb-java-chassis) - Javaマイクロサービスを素早く開発するSDK。サービス登録、サービスディスカバリー、動的ルーティング、サービス管理を提供。
* [SmallRye Fault Tolerance](https://github.com/smallrye/smallrye-fault-tolerance) - Eclipse MicroProfile Fault Toleranceの実装。仕様にない追加機能を備え、[Vert.x](https://smallrye.io/docs/smallrye-fault-tolerance/6.2.6/integration/event-loop.html)と[Mutiny](https://smallrye.io/docs/smallrye-fault-tolerance/6.2.6/reference/asynchronous.html#async-types)をネイティブにサポート。
* [GuicedEE](https://guicedee.com) - GuiceとVert.x 5を基盤に、JPMSを重視したJavaプラットフォーム。モジュール化されたリアクティブな企業向けアプリケーションを対象とし、MicroProfile Config、Health、Metrics、OpenAPI、REST、永続化などを標準で提供。

## ゲーム開発 <a id="game-development"></a>

* [Orbital](https://github.com/tfkfan/orbital) - Vert.xベースのリアクティブな分散ゲームサーバーと、バトルロイヤル形式のマルチプレイヤーゲーム開発用ツールキット。基本的で拡張可能なマッチメーカー、ゲームとルームの管理、WebSocket連携、ゲームのライフサイクル管理を提供。原文ではColyseusゲームエンジンに最も近い競合とされる。[ドキュメント](https://tfkfan.github.io/orbital)。

## 検索エンジン <a id="search-engines"></a>

* [Vert.x Elasticsearch Service](https://github.com/englishtown/vertx-elasticsearch-service) - イベントバスのプロキシ機能を備えた、Vert.x 3の[Elasticsearch](https://www.elastic.co/)サービス。
* [Vert.x Solr Service](https://github.com/englishtown/vertx-solr-service) - イベントバスのプロキシ機能を備えた、Vert.x 3のSolrサービス。

## サービスファクトリー <a id="service-factory"></a>

* [Service Factory](https://github.com/vert-x3/vertx-service-factory) (公式スタック) - Vert.xのサービスファクトリー。
* [Maven Service Factory](https://github.com/vert-x3/vertx-maven-service-factory) (公式スタック) - MavenのVert.xサービスファクトリー。
* [HTTP Service Factory](https://github.com/vert-x3/vertx-http-service-factory) (公式スタック) - Vert.xのHTTPサービスファクトリー。
* [Node.js Service Factory](https://github.com/mellster2012/vertx-nodejs-service-factory) - Vert.xのNode.jsサービスファクトリー。
* [Eclipse SISU Service Factories](https://github.com/cstamas/vertx-sisu) - [Eclipse SISU](https://www.eclipse.org/sisu/)のDIコンテナーとVert.xの連携。`vertx-service-factory`と`vertx-maven-service-factory`の代替を提供。

## 設定 <a id="config"></a>

* [Vert.x Config AWS SSM Store](https://github.com/Finovertech/vertx-config-aws-ssm) - [設定ストア](http://vertx.io/docs/vertx-config/java/)の実装。[AWS EC2 SSM Parameter Store](https://aws.amazon.com/ec2/systems-manager/parameter-store/)から設定値を取得。
* [Vert.x Boot](https://github.com/jponge/vertx-boot) - HOCON設定からverticleをデプロイ。

## 依存性注入 <a id="dependency-injection"></a>

* [Vert.x Guice](https://github.com/englishtown/vertx-guice) - Guiceの依存性注入を使うVert.xのverticleファクトリー。
* [Vert.x HK2](https://github.com/englishtown/vertx-hk2) - HK2の依存性注入を使うVert.xのverticleファクトリー。
* [Spring Vert.x Extension](https://github.com/amoAHCP/spring-vertx-ext) - Springの依存性注入を使うVert.xのverticleファクトリー。
* [Vert.x Beans](https://github.com/rworsnop/vertx-beans) - SpringアプリケーションにVert.xオブジェクトをBeanとして注入。
* [QBit](https://github.com/advantageous/qbit) - QBitはSpring DI、Spring Boot、Vert.xと連携。同じアプリケーションでQBit、Vert.x、Spring DI、Spring Bootを併用可能。
* [Vert.x Eclipse SISU](https://github.com/cstamas/vertx-sisu) - [Eclipse SISU](https://www.eclipse.org/sisu/)のDIコンテナーとVert.xの連携。
* [Vert.x Spring Verticle Factory](https://github.com/juanavelez/vertx-spring-verticle-factory) - Springを使ってverticleの取得と設定を行うVert.xのverticleファクトリー。
* [Glue](https://github.com/vinscom/glue) - JavaとVert.xアプリケーション向けの、実績があり設計方針の明確なプログラミング・設定モデル。ATG Nucleusに着想を得て、シンプルなpropertiesファイルで階層的な設定管理を提供。

## テスト <a id="testing"></a>

* [Vert.x Unit](https://github.com/vert-x3/vertx-unit) (公式スタック) - Vert.x向けの非同期・多言語ユニットテスト。
* [Vert.x JUnit5](https://github.com/vert-x3/vertx-junit5) (公式スタック) - JUnit 5を使うVert.x向け非同期ユニットテスト。
* [Vert.x WireMongo](https://github.com/noenv/vertx-wiremongo) - Vert.x向けの軽量なMongoDBモック。

## 開発ツール <a id="development-tools"></a>

* [Vert.x shell](https://github.com/vert-x3/vertx-shell) (公式スタック) - コマンドラインからVert.xを操作。
* [Vert.x health check](https://github.com/vert-x3/vertx-health-check) - Vert.xプロジェクトのヘルスチェックを遠隔で実行。
* [Vert.x Hot](https://github.com/dazraf/vertx-hot) - MavenのVert.xプロジェクトをホットデプロイするMavenプラグイン。
* [Vert.x for Visual Studio Code](https://github.com/pmlopes/VertxSnippet) - Vert.x向けの多言語対応Visual Studio Codeプラグイン。[Marketplace](https://marketplace.visualstudio.com/items?itemName=pmlopes.vertxsnippet)からも入手可能。
* [Vert.x Starter](http://www.jetdrone.xyz/vertx-starter/) - ブラウザーで使えるVert.xアプリケーションのプロジェクト生成ツールとテンプレート。
* [Vert.x LiveReload](https://github.com/ybonnel/vertx-livereload) - Vert.xアプリケーション向けのシンプルなライブリロードサーバー。
* [openapi-generator](https://github.com/OpenAPITools/openapi-generator) - OpenAPI仕様 (v2、v3) から、APIクライアントライブラリ (SDK)、サーバースタブ、ドキュメント、設定を自動生成。

## その他 <a id="miscellaneous"></a>

* [Vert.x Child Process](https://github.com/vietj/vertx-childprocess) - Vert.xから子プロセスを起動。
* [vertx-redisques](https://github.com/swisspush/vertx-redisques) - Redisに永続化する、拡張性の高いVert.x向けキューシステム。
* [Simple File Server](https://github.com/pitchpoint-solutions/sfs) - Vert.xで実装された、OpenStack Swift互換の分散オブジェクトストレージサーバー。最小限のリソースで、大きいファイルと小さいファイルを数十億件配信し、安全に保存可能。
* [Vert.x Boot](https://github.com/jponge/vertx-boot) - HOCON設定からverticleをデプロイ。
* [GDH](https://github.com/maxamel/GDH) - Vert.xを基盤とする、一般化Diffie-Hellman鍵交換のJavaライブラリ。
* [vertx-values](https://github.com/imrafaelmerino/vertx-values) - [json-values](https://github.com/imrafaelmerino/json-values)の不変なJSONを、永続データ構造としてイベントバスで送信。

## ディストリビューション <a id="distribution"></a>

* [Vert.x Stack](https://github.com/vert-x3/vertx-stack) (公式スタック) - Vert.xと推奨モジュール。

## サンプル <a id="examples"></a>

* [Vert.x blueprint - Microservice application](https://github.com/sczyh30/vertx-blueprint-microservice) (公式スタック) - 複雑なマイクロサービスアプリケーションの構築方法を示す、公式Vert.xブループリント。
* [Vert.x blueprint - Job Queue](https://github.com/sczyh30/vertx-blueprint-job-queue) (公式スタック) - 分散ジョブ処理アプリケーションの構築方法を示す、公式Vert.xブループリント。
* [Vert.x blueprint - TODO backend](https://github.com/sczyh30/vertx-blueprint-todo-backend) (公式スタック) - TODOアプリケーションのバックエンドの構築方法を示す、公式Vert.xブループリント。
* [Vert.x examples](https://github.com/vert-x3/vertx-examples) (公式スタック) - Webの例や、公式データベースクライアントの使い方などを含む公式Vert.xサンプル。
* [Vert.x feeds](https://github.com/aesteve/vertx-feeds) - Vert.x、Gradle、MongoDB、Redis、Handlebarsテンプレート、AngularJS、イベントバス、SockJSを使うRSSアグリゲーターの例。
* [Vert.x Markdown service](https://github.com/aesteve/vertx-markdown-service) - Gradleで[service-proxy](https://github.com/vert-x3/vertx-service-proxy)を使う例。
* [イベントバスとサービスプロキシでVert.xとNodeを接続する例](https://github.com/advantageous/vertx-node-ec2-eventbus-example) - イベントバスとサービスプロキシでVert.xとNodeを接続する手順の例。Wikiでの説明を含む。
* [Vert.x Todo-Backend implementation](https://github.com/aesteve/todo-backend-vertx) - Java 8だけで実装したTodo MVCバックエンド。ストレージにVert.x LocalMapを使用。
* [Kotlin Todo-Backend implementation](https://github.com/aesteve/vertx-kotlin-todomvc) - Todo MVCバックエンドのKotlin実装。
* [Scala Todo-Backend implementation](https://github.com/aesteve/vertx-scala-todomvc) - Todo MVCバックエンドのScala実装。
* [Grooveex Todo-Backend implementation](https://github.com/aesteve/todo-backend-grooveex) - Vert.x、Groovy、糖衣構文、DSLルーティング機能を使うTodo MVCバックエンド実装。
* [Vert.x Gradle Starter](https://github.com/yyunikov/vertx-gradle-starter) - Java 8のスターターアプリケーション。Gradleビルドシステム、プロファイル設定、SLF4JをVert.xで使う例を含む。
* [Vert.x Gentics Mesh Example](https://github.com/gentics/mesh-vertx-example) - Gentics MeshとHandlebarsを使って、テンプレートベースのWebサーバーを構築する例。
* [HTTP/2 showcase](https://github.com/aesteve/http2-showcase) - 遅延が大きい状況で、HTTP/2がユーザー体験を大幅に改善できることを示すシンプルなデモ。
* [Vert.x Music Store](https://github.com/tsegismont/vertx-musicstore) - RxJavaでVert.xアプリケーションを構築するサンプルアプリケーション。
* [Crabzilla](https://github.com/crabzilla/crabzilla) - イベントソーシングの実験。Vert.xでイベントソーシング／CQRSアプリケーションを開発する方法を探るプロジェクト。
* [Vert.x PostgreSQL Starter](https://github.com/BillyYccc/vertx-postgresql-starter) - Vert.xスタックとPostgreSQLで、モノリシックなCRUD RESTful Webサービスを構築するスターター。
* [Cloud Foundry](https://github.com/amdelamar/vertx-cloudfoundry) - [Cloud Foundry](https://www.cloudfoundry.org/)のサービスプロバイダーにVert.xをデプロイする例。
* [Knative](https://github.com/knative/docs/tree/main/code-samples/community/serving/helloworld-vertx) - [Reactive Extensions Vert.x](https://github.com/vert-x3/vertx-rx)を[Knative](https://github.com/knative)で使うサンプルアプリケーション。
* [Starter Single Verticle API](https://github.com/jgarciasm/ssv-api) - デプロイ可能なREST APIスターターとプロジェクトテンプレート。基盤コード、サンプル、ドキュメントを備え、セットアップの手間を減らし、Vert.xの予備知識が少ない開発者でもAPIを構築できることを目指す。
* [Vert.xとPMMLによるAIモデル出力API](https://github.com/immusen/vertx-pmml) - Vert.xベースの高性能なPMML評価API。JSONによる複数PMMLモデルの動的ルーティング設定に対応。

## デプロイ <a id="deployment"></a>

* [Vert.x Deploy Application](https://github.com/msoute/vertx-deploy-tools) - AWS上のVert.xアプリケーションクラスターへのシームレスなデプロイ。

## ユーティリティ <a id="utilities"></a>

* [Chime](https://github.com/LisiLisenok/Chime) - Vert.xのイベントバスで動作するスケジューラー。cron形式と一定間隔のタイマーでスケジュールを設定。
* [Vert.x Cron](https://github.com/diabolicallabs/vertx-cron) - cronの指定でイベントをスケジュール。イベントバス版とObservable版を提供。
* [Vert.x CronUtils](https://github.com/NoEnv/vertx-cronutils) - Vert.xスケジューラー向けのcron-utilsの抽象化。Unix、Cron4j、Quartz形式の式に対応。
* [Vert.x Scheduler](https://github.com/zero88/vertx-scheduler) - 外部ライブラリを使わず、Vert.x Coreだけで動作する軽量な差し替え可能なスケジューラー。cron形式と一定間隔のタイマー、および同期・非同期タスクの詳細な監視機能を提供。
* [Vert.x POJO config](https://github.com/aesteve/vertx-pojo-config) - 標準的なJSON設定と型安全な設定用Java Beanを相互にマッピング。設定用BeanをJSR 303で検証することも可能。
* [Vert.x Async](https://github.com/gchauvet/vertx-async) - caolan/asyncのNode.jsモジュールをVert.xに移植。一般的な非同期処理パターン用のヘルパーメソッドを提供。
* [Vert.x JOLT](https://github.com/lusoalex/vertx-jolt) - bazaarvoiceのJOLTプロジェクトに基づくJSON間の変換ツール。異なるJSON構造を、必要なJSON形式に変換。
* [Vert.x Dependent Verticle Deployer](https://github.com/juanavelez/vertx-dependent-verticle-deployer) - verticleとそれに依存するverticleをデプロイするVert.xのverticle。
* [Vert.x Dataloader](https://github.com/engagingspaces/vertx-dataloader) - Facebook DataloaderのVert.x向けJava移植版。データ層の効率的なバッチ処理とキャッシュを提供。
* [Vert.x Util](https://github.com/juanavelez/vertx-util) - Vert.xのユーティリティメソッド集。
* [Vert.x Web Accesslog](https://github.com/romanpierson/vertx-web-accesslog) - Vert.x Webでアクセスログを生成するシンプルなハンドラー。
* [Vert.x GraphQL Utils](http://github.com/tibor-kocsis/vertx-graphql-utils) - Vert.xとVert.x WebでGraphQLクエリを処理するルートハンドラーと、Vert.x互換のインターフェース。
* [Nannoq-Tools](https://noriginmedia.github.io/nannoq-tools/) - Vert.xを使い、堅牢で拡張性のある分散アプリケーションを構築するツールキット。認証、クラスター管理、Firebase Cloud Messaging、DynamoDB、汎用的なクエリ、RESTなどのモジュールを含む。
* [Contextual logging](https://github.com/reactiverse/reactiverse-contextual-logging) - Vert.xのイベントループモデルで動作するMapped Diagnostic Context (MDC)。
* [Vert.x JsonPath](https://github.com/NoEnv/vertx-jsonpath) - Vert.xのJsonObjectとJsonArrayを使う、基本的なJsonPath実装。それらのgetX、containsKey、put、removeメソッドを模倣。

## プレゼンテーション <a id="presentations"></a>

* [Vert.xのYouTubeチャンネル](https://www.youtube.com/channel/UCGN6L3tRhs92Uer3c6VxOSA)

## コミュニティ <a id="community"></a>

* [利用者グループ](https://groups.google.com/forum/?fromgroups#!forum/vertx) - Vert.xの利用に関する、利用者のさまざまな問題を議論。
* [開発者グループ](https://groups.google.com/forum/?fromgroups#!forum/vertx-dev) - Vert.x Coreの開発者と貢献者向けのグループ。
* [Discordサーバー](https://discord.gg/KzEMwP2) - Vert.xに関する話題をチャットで議論。
* [課題](https://github.com/vert-x3/issues/issues) - Vert.x Coreの課題トラッカー。
* [Wiki](https://github.com/vert-x3/wiki/wiki) - Vert.xに関する有用な情報を掲載。
* [ブログ](http://vertx.io/blog/) - 多くのチュートリアルや情報を掲載したVert.xの公式ブログ。

## 記事 <a id="articles"></a>

* [Embracing Reactive Applications on JVM: a Deep Dive into Modern I/O Models and Vert.x](https://www.infoq.com/articles/reactive-java-vertx-deep-dive/)
* [Going reactive with Eclipse Vert.x and RX Java](https://blogs.oracle.com/javamagazine/post/going-reactive-with-eclipse-vertx-and-rxjava)
* [Vert.x 3.3.0 Features Enhanced Networking Microservices, Testing and More](https://www.infoq.com/news/2016/06/Vert.x-3.3.0-release-features)
* [Interview with Tim Fox About Vert.x 3, the Original Reactive, Microservice Toolkit for the JVM](http://www.infoq.com/articles/vertx-3-tim-fox)

## チュートリアル <a id="tutorials"></a>

* [Vert.x入門](https://vertx.io/get-started/)

## フロントエンド <a id="front-end"></a>

* [VertxUI](https://github.com/nielsbaloe/vertxui) - Javaだけで実装されたフロントエンド用ツールキット。モデルを記述的なfluent APIで表示するビュー、POJOのやり取り、仮想DOM上のJUnitテスト、または実DOM上の複数言語によるテストを提供。
