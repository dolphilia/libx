---
title: "Awesome Dropwizard"
description: "Dropwizardの拡張機能、Eclipse用ツール、チュートリアル、実践的なガイド、コミュニティ、サービスアーキテクチャの動画。"
licenseSource: "github-stve-awesome-dropwizard-readme-md"
---

# Awesome Dropwizard

[Dropwizard](http://www.dropwizard.io)の認証、データストア、メトリクス、ロギング、ジョブのスケジュール実行、デプロイに使う拡張機能と、Eclipse用ツールをまとめています。チュートリアル、実践的なガイド、コミュニティ、サービスアーキテクチャの動画も探せます。

## エディター対応 <a id="editor-support"></a>

### Eclipse

* [dropwizard-tools](https://github.com/Tasktop/dropwizard-tools) - Dropwizard用のEclipseツール。

## オープンソース <a id="open-source"></a>

* [dropwizard-swagger](https://github.com/smoketurner/dropwizard-swagger) - Swagger UIの静的コンテンツを配信し、Swaggerエンドポイントを読み込む。
* [dropwizard-jaxws](https://github.com/roskart/dropwizard-jaxws) - JAX-WS APIを使ったSOAP Webサービスとクライアントの構築。
* [dropwizard-redirect-bundle](https://github.com/bazaarvoice/dropwizard-redirect-bundle) - HTTPリダイレクトを可能にするバンドル。
* [dropwizard-template-config](https://github.com/tkrille/dropwizard-template-config) - config.yamlをFreemarkerテンプレートとして記述。
* [dropwizard-caching-bundle](https://github.com/bazaarvoice/dropwizard-caching-bundle) - リソースと応答のキャッシュに使うcache-controlオプションを生成。
* [dropwizard-xml](https://github.com/yunspace/dropwizard-xml) - XMLの処理と検証を行うDropwizardバンドル。
* [dropwizard-crypto](https://github.com/meltmedia/dropwizard-crypto) - Dropwizard用の暗号処理バンドル。
* [dropwizard-circuitbreaker](https://github.com/mtakaki/dropwizard-circuitbreaker) - Dropwizard向けのサーキットブレーカーパターンの実装。
* [dropwizard-maxmind-bundle](https://github.com/phaneesh/dropwizard-maxmind-bundle) - DropwizardでのMaxMind GeoIP2対応。
* [dropwizard-protobuf](https://github.com/dropwizard/dropwizard-protobuf) - Dropwizard内でGoogle Protocol Bufferオブジェクトを読み書き。
* [dropwizard-activemq-bundle](https://github.com/mbknor/dropwizard-activemq-bundle) - DropwizardアプリケーションでActiveMQを介してJSONを送受信。
* [dropwizard-consul](https://github.com/smoketurner/dropwizard-consul) - Dropwizard用のConsulバンドル。
* [dropwizard-zipkin](https://github.com/smoketurner/dropwizard-zipkin) - Dropwizard用のZipkinバンドル。
* [dropwizard-graphql](https://github.com/smoketurner/dropwizard-graphql) - Dropwizard用のGraphQLバンドル。
* [dropwizard-money](https://github.com/smoketurner/dropwizard-money) - Dropwizard用のMoneyバンドル。
* [breakerbox](https://github.com/yammer/breakerbox) - Tenacity + Archaiusのフロントエンド。
* [tenacity](https://github.com/yammer/tenacity) - Dropwizard用のHystrixバンドル。
* [dropwizard-grpc](https://github.com/msteinhoff/dropwizard-grpc) - DropwizardサービスでgRPCサーバーを使用。
* [sqs-dropwizard](https://github.com/bascan/aws-dropwizard) - Amazon SQSとの統合。
* [dropwizard-simple-cors](https://github.com/ojacobson/dropwizard-simple-cors) - シンプルで実用的なCORS対応を提供するDropwizardバンドル。
* [dropwizard-version-info](https://github.com/palantir/dropwizard-version-info) - バージョンエンドポイントを公開するDropwizardバンドル。

### ボイラープレートの排除 <a id="boilerplate-destruction"></a>
* [Brahma-HibernateUtils](https://github.com/gozefo/brahma-hibernateutils) - ```@Entity```クラスを追跡し、Dropwizardへのエンティティ登録を簡略化するアノテーションプロセッサー。

### 認証 <a id="authentication"></a>

* [dropwizard-auth-ldap](https://github.com/yammer/dropwizard-auth-ldap) - Dropwizard向けのLDAP認証。
* [dropwizard-jwt-cookie-authentication](https://github.com/dhatim/dropwizard-jwt-cookie-authentication) - JWT Cookieによる認証を管理するDropwizardバンドル。

### アセット <a id="assets"></a>

* [dropwizard-configurable-assets-bundle](https://github.com/bazaarvoice/dropwizard-configurable-assets-bundle) - ユーザー設定に対応したDropwizard用AssetBundleの実装。
* [dropwizard-markdown-assets-bundle](https://github.com/rnorth/dropwizard-markdown-assets-bundle) - Markdownファイルを整形されたHTMLとして描画。

### データストア <a id="data-stores"></a>

* [dropwizard-etcd](https://github.com/meltmedia/dropwizard-etcd) - Dropwizard用のEtcdバンドル。
* [dropwizard-mongo](https://github.com/eeb/dropwizard-mongo) - MongoDBへの接続用ファクトリーとヘルスチェック。
* [dropwizard-elasticsearch](https://github.com/dropwizard/dropwizard-elasticsearch) - DropwizardサービスでElasticsearchを使うためのクラス群。
* [dropwizard-service-discovery](https://github.com/santanusinha/dropwizard-service-discovery) - Dropwizard用のZookeeperサービスディスカバリーバンドルとクライアント。
* [dropwizard-cassandra](https://github.com/composable-systems/dropwizard-cassandra) - DropwizardでのCassandra対応。
* [dropwizard-riak](https://github.com/smoketurner/dropwizard-riak) - DropwizardでのRiak対応。
* [dropwizard-orient-server](https://github.com/xvik/dropwizard-orient-server) - Dropwizard用の組み込みOrientDBサーバー。
* [dropwizard-atomix](https://github.com/smoketurner/dropwizard-atomix) - [Atomix](http://atomix.io/)との統合。

### メトリクス <a id="metrics"></a>

* [riemann-bundle](https://github.com/phaneesh/riemann-bundle) - DropwizardのメトリクスとRiemannの統合を簡略化。
* [metrics](http://metrics.dropwizard.io/3.1.0/manual/third-party/) - メトリクスライブラリ。

### ロギング <a id="logging"></a>

* [dropwizard-gelf](https://github.com/gini/dropwizard-gelf) - GELF対応サーバーへログを送るDropwizardアドオンバンドル。
* [dropwizard-raven](https://github.com/tradier/dropwizard-raven) - Sentryへエラーログを送るためのDropwizard統合。
* [dropwizard-logstash-encoder](https://github.com/Wikia/dropwizard-logstash-encoder) - logstash-logback-encoderを使ってログを送るDropwizardロギングアドオン。

### スケジュール／定期ジョブ <a id="scheduledrecurrence-jobs"></a>

* [dropwizard-quartz](https://github.com/jaredstehler/dropwizard-quartz) - GuiceとQuartzを統合するシンプルなジョブスケジューラー。
* [dropwizard-jobs](https://github.com/spinscale/dropwizard-jobs) - Dropwizard向けのQuartz統合。
* [dropwizard-sundial](https://github.com/timmolter/dropwizard-sundial) - Sundialを使ってDropwizardでジョブをスケジュール実行。

### Guice

* [dropwizard-guice](https://github.com/HubSpot/dropwizard-guice) - Guice対応を追加。
* [dropwizard-guicey](https://github.com/xvik/dropwizard-guicey) - DropwizardとGuiceの統合。
* [dropwizard-guicier](https://github.com/HubSpot/dropwizard-guicier) - Guiceとの統合を行うDropwizardバンドル。

### デプロイ <a id="deployment"></a>

* [WizToWar](https://github.com/twilio/wiztowar) - DropwizardアプリケーションからWARファイルをビルド。
* [wizard-in-a-box](https://github.com/rvs-fluid-it/wizard-in-a-box) - DropwizardアプリケーションをWARファイルとしてデプロイ。

## チュートリアル <a id="tutorials"></a>

* [はじめに](http://www.dropwizard.io/0.9.2/docs/getting-started.html)
* [公式ドキュメント](http://www.dropwizard.io/0.9.2/docs/manual/index.html)
* [Dropwizard の内部構造](http://www.dropwizard.io/0.9.2/docs/manual/internals.html)
* [Dropwizard モジュールディレクトリ](http://modules.dropwizard.io/)

## ガイド <a id="guides"></a>

* [DropWizard で静的アセットを配信する](https://spin.atomicobject.com/2014/10/11/serving-static-assets-with-dropwizard/)
* [Dropwizard に独自 Jersey Servlet を接続する](https://spin.atomicobject.com/2015/03/30/jersey-servlets-dropwizard/)
* [DropWizard タスクで Hibernate DAO を使う](https://spin.atomicobject.com/2015/02/03/dropwizard-hibernate-dao/)
* [高可用性 Dropwizard アプリのための Heroku](http://techbytes.anuragkapur.com/2015/05/heroku-for-highly-available-dropwizard.html?m=1)
* [Dropwizard で New Relic を有効にする](http://kyleboon.org/blog/2013/09/23/newrelic-for-dropwizard/)
* [DropWizard によるアプリケーションヘルスチェック](http://willhamill.com/2014/12/04/application-health-checks-with-dropwizard)
* [Dropwizard で Hystrix を使う](http://christopher-batey.blogspot.com/2014/08/using-hystrix-with-dropwizard.html)
* [Dropwizard と Elasticsearch を組み合わせて使う](https://www.gridshore.nl/2014/05/15/using-dropwizard-combination-elasticsearch/)
* [Dropwizard Unikernel を AWS へデプロイする](https://boxfuse.com/blog/dropwizard-aws.html)
* [Dropwizard の設定に Consul の KV ストアを使う](http://www.remmelt.com/post/use-consuls-kv-store-for-dropwizard-settings/)
* [Dropwizard を App Engine Flex へデプロイする](https://www.aytech.ca/blog/dropwizard-app-engine-flexible-env/)
* [Dropwizard アプリケーションの性能を測定する](https://www.aytech.ca/blog/measuring-performance-dropwizard-application/)
* [Heroku + Gradle + Dropwizard](https://www.aytech.ca/blog/heroku-gradle-dropwizard/)

## コミュニティ <a id="community"></a>

* [dropwizard-user](https://groups.google.com/forum/#!forum/dropwizard-user)
* [StackOverflow](https://stackoverflow.com/questions/tagged/dropwizard)
* [Twitter の `@dropwizardio`](https://twitter.com/dropwizardio)

## 動画 <a id="videos"></a>

* [Instant-ish Real Service Architecture](https://vimeo.com/37930578)
