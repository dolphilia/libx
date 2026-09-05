---
title: "Awesome Data Engineering"
description: "Data Engineeringを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-igorbarinov-awesome-data-engineering-readme-md"
---

# Awesome Data Engineering

Data Engineeringを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [データベース](#databases)
- [データ比較](#data-comparison)
- [データ取り込み](#data-ingestion)
- [ファイルシステム](#file-system)
- [シリアライズ形式](#serialization-format)
- [ストリーム処理](#stream-processing)
- [バッチ処理](#batch-processing)
- [チャートとダッシュボード](#charts-and-dashboards)
- [ワークフロー](#workflow)
- [データレイク管理](#data-lake-management)
- [ELK（Elasticsearch・Logstash・Kibana）](#elk-elastic-logstash-kibana)
- [Docker](#docker)
- [データセット](#datasets)
  - [リアルタイム](#realtime)
  - [データダンプ](#data-dumps)
- [監視](#monitoring)
  - [Prometheus](#prometheus)
- [プロファイリング](#profiling)
  - [データプロファイラー](#data-profiler)
- [スキーマ](#schema)
- [テスト](#testing)
- [コミュニティ](#community)
  - [フォーラム](#forums)
  - [カンファレンス](#conferences)
  - [ポッドキャスト](#podcasts)
  - [書籍](#books)

## データベース

- リレーショナル
  - [RQLite](https://github.com/rqlite/rqlite) - Raftコンセンサスプロトコルを用いたSQLiteの再現
  - [MySQL](https://www.mysql.com/) - 世界で最も人気のあるオープンソースデータベース
    - [TiDB](https://github.com/pingcap/tidb) - MySQLプロトコルと互換性を持つ分散NewSQLデータベース
    - [Percona XtraBackup](https://www.percona.com/software/mysql-database/percona-xtrabackup) - Percona Server、MySQL®、MariaDB®のすべてのバージョン向けの無料、オープンソース、完全オンラインバックアップソリューション
    - [mysql_utils](https://github.com/pinterest/mysql_utils) - PinterestのMySQL管理ツール
  - [MariaDB](https://mariadb.org/) - MySQLへの強化された、即時置き換え可能な代替品
  - [PostgreSQL](https://www.postgresql.org/) - 世界で最も先進的なオープンソースデータベース
  - [Rivestack](https://rivestack.io/) - AIワークロード向けにpgvectorを搭載した管理PostgreSQL。HNSWインデックス、4ms未満の遅延、自動埋め込み生成付きの組み込みSQLエディタ
  - [Amazon RDS](https://aws.amazon.com/rds/) - クラウド上で関係データベースをセットアップ・運用・スケーリングするための簡単な手段
  - [Crate.IO](https://crate.io/) - NOSQLの利点を備えたスケーラブルSQLデータベース
- キーバリュー
  - [Redis](https://redis.io/) - BSDライセンスを採用したオープンソース、高度なキーバリューキャッシュとストア
  - [Riak](https://docs.basho.com/riak/kv/) - 複数サーバーにデータを分散させることで最大のデータ可用性を実現する分散データベース
  - [AWS DynamoDB](https://aws.amazon.com/dynamodb/) - すべてのアプリケーションにおいて、スケーラブルかつ、常に1桁ミリ秒未満の遅延を維持する高速で柔軟なNoSQLデータベースサービス
  - [HyperDex](https://github.com/rescrv/HyperDex) - スケーラブルかつ検索可能なキーバリューストア。廃止済み
  - [SSDB](https://ssdb.io) - 多くのデータ構造をサポートする高性能NoSQLデータベース。Redisの代替品
  - [Kyoto Tycoon](https://github.com/alticelabs/kyoto) - Kyoto Cabinetキーバリューデータベースに基づいた軽量ネットワークサーバー。高パフォーマンスと並列処理に最適化されたもの
  - [IonDB](https://github.com/iondbproject/iondb) - マイクロコントローラーおよびIoTアプリケーション向けのキーバリューストア
- カラム指向
  - [Cassandra](https://cassandra.apache.org/) - パフォーマンスを犠牲にせずにスケーラビリティと高可用性を実現するための最適な選択
    - [Cassandra Calculator](https://www.ecyrd.com/cassandracalculator/) - このシンプルなフォームは、Apache Cassandraクラスタのさまざまな値を試して、アプリケーションへの影響を確認するのに使用できます
    - [CCM](https://github.com/pcmanus/ccm) - ローカルホスト上でApache Cassandraクラスタを簡単に作成・削除するためのスクリプト
    - [ScyllaDB](https://github.com/scylladb/scylla) - seastarフレームワークを用いたNoSQLデータストア。Apache Cassandraと互換性がある。
  - [HBase](https://hbase.apache.org/) - ハドープデータベース、分散型かつスケーラブルなビッグデータストア。
  - [AWS Redshift](https://aws.amazon.com/redshift/) - 高速かつ完全に管理された、ペタバイト規模のデータウェアハウス。既存のビジネスインテリジェンスツールを使ってすべてのデータを分析するためのシンプルかつコスト効率の良いソリューション。
  - [FiloDB](https://github.com/filodb/FiloDB) - 分散型。列型。バージョン管理。ストリーミング。SQL。
  - [Vertica](https://www.vertica.com) - 分散型MPP列型データベースで、広範な分析SQLを提供。
  - [ClickHouse](https://clickhouse.tech) - OLAP向けの分散型列型DBMS。SQL。
- ドキュメント
  - [MongoDB](https://www.mongodb.com) - 開発とスケーリングが容易なドキュメントデータベース。
    - [Percona Server for MongoDB](https://www.percona.com/software/mongo-database/percona-server-for-mongodb) - Percona Server for MongoDB®は、MongoDB®コミュニティエディションの無料、強化された、完全に互換性のあるオープンソース、drop-in置き換えであり、エンタープライズクラスの機能を含む。
    - [MemDB](https://github.com/rain1017/memdb) - 分散型トランザクションインメモリデータベース（MongoDBに基づく）。
  - [Elasticsearch](https://www.elastic.co/) - リアルタイムでデータを検索・分析。
  - [Couchbase](https://www.couchbase.com/) - 最もパフォーマンスの高いNoSQL分散型データベース。
  - [RethinkDB](https://rethinkdb.com/) - リアルタイムウェブ向けのオープンソースデータベース。
  - [RavenDB](https://ravendb.net/) - 完全トランザクション対必のNoSQLドキュメントデータベース。
- グラフ
  - [ArcadeDB](https://arcadedb.com/) - ネイティブなグラフ、ドキュメント、キー値、ベクトルサポートを備えたオープンソースマルチモデルデータベース。SQL、Cypher、Gremlinクエリ言語。Apache 2.0ライセンス。
  - [Neo4j](https://neo4j.com/) - 世界で最も普及しているグラフデータベース。
  - [Omnigraph](https://github.com/ModernRelay/omnigraph) - タイプ付きグラフデータベースで、エージェントがGitのように分岐・マージする。S3ネイティブ、Rust、走査＋ベクトル＋BM25を1つのランタイムで実現。
  - [OrientDB](https://orientdb.com) - 2世代の分散型グラフデータベース。ドキュメントの柔軟性を備えた1製品で、オープンソースかつ商業利用に適したライセンスを提供。
  - [ArangoDB](https://www.arangodb.com/) - ドキュメント、グラフ、キー値のための柔軟なデータモデルを備えた分散型無料オープンソースデータベース。
  - [Titan](https://titan.thinkaurelius.com) - 数百億の頂点とエッジを多マシンクラスタに分散して保存・検索するためのスケーラブルなグラフデータベース。
  - [FlockDB](https://github.com/twitter-archive/flockdb) - ツイッターが開発した分散型、耐障害性のあるグラフデータベース。非推奨。
  - [Actionbase](https://github.com/kakao/actionbase) - ユーザーの相互作用（いいね、視聴、フォロー）をグラフとして表現したデータベースで、事前計算された読み取りがリアルタイムで提供される
- 分散
  - [DAtomic](https://www.datomic.com) - 完全にトランザクション対応であり、クラウド環境に最適化された分散データベース
  - [Apache Geode](https://geode.apache.org/) - スケーラブルなアプリケーション向けのオープンソース、分散、メモリ内データベース
  - [Gaffer](https://github.com/gchq/Gaffer) - 大規模グラフデータベース
- 時系列
  - [InfluxDB](https://github.com/influxdata/influxdb) - メトリクス、イベント、リアルタイム分析用のスケーラブルデータストア
  - [OpenTSDB](https://github.com/OpenTSDB/opentsdb) - スケーラブルで分散型のタイムシリーズデータベース
  - [QuestDB](https://questdb.io/) - タイムシリーズおよびイベントデータに対するリアルタイム分析を目的とした、関係型カラム指向データベース
  - [kairosdb](https://github.com/kairosdb/kairosdb) - 高速かつスケーラブルなタイムシリーズデータベース
  - [Heroic](https://github.com/spotify/heroic) - Spotifyが開発した、CassandraおよびElasticsearchをベースとしたスケーラブルタイムシリーズデータベース
  - [Druid](https://github.com/apache/incubator-druid) - インタラクティブアプリケーションを駆動するのに最適な、カラム指向の分散データストア
  - [Riak-TS](https://basho.com/products/riak-ts/) - Riak TSは、IoTおよびタイムシリーズデータに特に最適化された、エンタープライズ級のNoSQLタイムシリーズデータベースである
  - [Akumuli](https://github.com/akumuli/Akumuli) - 数値型タイムシリーズデータベース。リアルタイムでタイムシリーズデータを収集、保存、処理できる。単語"akumuli"はエスペルト語から"accumulate"（蓄積）と翻訳できる
  - [Rhombus](https://github.com/Pardot/Rhombus) - Cassandra向けのタイムシリーズオブジェクトストアで、広い行インデックスの構築に必要なすべての複雑性を処理する
  - [Dalmatiner DB](https://github.com/dalmatinerdb/dalmatinerdb) - 高速分散メトリクスデータベース
  - [Blueflood](https://github.com/rackerlabs/blueflood) - タイムシリーズデータをイングレスし、処理するための分散システム
  - [Timely](https://github.com/NationalSecurityAgency/timely) - AccumuloおよびGrafanaに基づく、タイムシリーズデータへの安全なアクセスを提供するタイムシリーズデータベースアプリケーション
- その他
  - [Tarantool](https://github.com/tarantool/tarantool/) - メモリ内データベースおよびアプリケ連携サーバー
  - [GreenPlum](https://github.com/greenplum-db/gpdb) - グリーンプランデータベース（GPDB）— 高度で完全に機能を備えたオープンソースデータウェアハウス。パイトバイト規模のデータ量に対して強力で高速な分析を提供する
  - [cayley](https://github.com/cayleygraph/cayley) - オープンソースのグラフデータベース。Google.
  - [Snappydata](https://github.com/SnappyDataInc/snappydata) - Apache Sparkに基づくOLTP＋OLAPデータベース
  - [TimescaleDB](https://www.timescale.com/) - PostgreSQLに拡張として構築されたTimescaleDBは、プローブされたストレージエンジン上で高速な分析、スケーラビリティを提供し、自動データ管理を行うタイムシリーズSQLデータベースです
  - [DuckDB](https://duckdb.org/) - 外部依存がない高速なプロセス内分析データベース。Linux／macOS／Windowsで動作し、豊かなSQL文法を提供し、無料かつ拡張可能
  - [SlothDB](https://github.com/SouravRoy-ETL/slothdb) - C++20で記述されたプロセス内分析SQLデータベース。Parquet、CSV、JSON、Avro、Arrow、SQLite、Excelを直接読み込み。単一バイナリ、Pythonパッケージ、1.3MBのブラウザ用WASMビルドを提供
  - [chDB](https://chdb.io) - 埋め込み型ClickHouse — 全ClickHouse SQL文法、約80のデータ形式、12以上のソース接続（S3、Postgres、MongoDB、Kafka、Iceberg）を内蔵。Python、Go、Rust、Node、Bun、Zig、Rubyのバインディングを提供
  - [zvec](https://github.com/alibaba/zvec) - デバイス内RAGやエッジAI向けの埋め込み型ベクトルデータベース。ベクトルデータベースにおけるSQLiteです

## データ比較

- [datacompy](https://github.com/capitalone/datacompy) - Pandas、Polars、SparkなどにおけるDataFramesの比較を支援するPythonライブラリ。単純な等価チェックを越えて、行および列レベルの差異に関する詳細な洞察を提供
- [dvt](https://github.com/GoogleCloudPlatform/professional-services-data-validator) - データ検証ツールは、ソーステーブルとターゲットテーブルのデータを比較し、一致を確認します。列検証、行検証、スキーマ検証、カスタムクエリ検証、および即時SQL探索を提供
- [koala-diff](https://github.com/godalida/koala-diff) - RustおよびPolarsを使用してローカルにCSV、Parquetなどの大規模データセットを比較する、高性能なPythonライブラリ。ゼロコピーストリーミングによりOOMエラーを防止し、インタラクティブなHTMLデータ品質レポートを生成
- [FutureSearch SDK](https://github.com/futuresearch/futuresearch-python) - データセットやテーブルの差分・品質を検証するツールです。
  各表行を対象に調査し、複数エージェントの結果を構造化カラムへ統合します。

## データ取り込み

- [DataSpoc Pipe](https://github.com/dataspoclab/dataspoc-pipe) - 400以上のSingerタップをクラウドバケット（S3、GCS、Azure）内のParquetファイルに接続するデータインジェストエンジン。ストリーミング、インクリメンタル、自動カタログ付き
- [Enrich.sh](https://enrich.sh) - REST APIに送られたJSONをCloudflare R2上のHiveパーティションParquetに変換し、DuckDB、ClickHouse、BigQuery、Snowflake、Pythonからクエリ可能な、管理されたイベントインジェストサービス
- [enrich-companies](https://github.com/Alessandro114/enrich-companies) - データの収集、転送、CDC、ETL/ELTを支援する基盤・ツールです。 [npm](https://www.npmjs.com/package/enrich-companies)
- [ingestr](https://github.com/bruin-data/ingestr) - 1つのコマンドでデータベース間のデータをコピーできるCLIツール。PostgreSQL、MySQL、MongoDB、Salesforce、Shopifyなど50以上のソースをサポートし、任意のデータウェアハウスに接続可能
- [Kafka](https://kafka.apache.org/) - パブリッシュ・サブスクリプションメッセージングを分散型コミットログとして再考
  - [BottledWater](https://github.com/confluentinc/bottledwater-pg) - PostgreSQLからKafkaへの変更データキャプチャ。廃止済み
  - [kafkat](https://github.com/airbnb/kafkat) - Kafkaブローカーの簡易なコマンドライン管理
  - [kafkacat](https://github.com/edenhill/kafkacat) - 非JVMのApache Kafkaの汎用コマンドラインプロダクタおよびコンシューマー
  - [pg-kafka](https://github.com/xstevens/pg_kafka) - PostgreSQL拡張機能としてApache Kafkaへのメッセージ送信を実現
  - [librdkafka](https://github.com/edenhill/librdkafka) - Apache KafkaのC/C++ライブラリ
  - [kafka-docker](https://github.com/wurstmeister/kafka-docker) - KafkaのDocker化
  - [kafka-manager](https://github.com/yahoo/kafka-manager) - Apache Kafkaの管理ツール
  - [kafka-node](https://github.com/SOHU-Co/kafka-node) - Apache Kafka 0.8用のNode.jsクライアント
  - [Secor](https://github.com/pinterest/secor) - PinterestのKafkaからS3への分散コンシューマー
  - [Kafka-logger](https://github.com/uber/kafka-logger) - UberのNode.js用Kafka-winstonログゲージ
  - [Kroxylicious](https://github.com/kroxylicious/kroxylicious) - Kafkaデータの静的暗号化を解決するKafkaプロキシ
- [AWS Kinesis](https://aws.amazon.com/kinesis/) - 大規模分散データストリーム上のリアルタイムデータ処理を提供する、完全に管理されたクラウドベースサービス
- [RabbitMQ](https://www.rabbitmq.com/) - アプリケーション向けに強固なメッセージング
- [dlt](https://www.dlthub.com) - Pythonデータ開発者向けに高速かつシンプルなパイプライン構築ライブラリ。ノートブック、クラウド関数、Airflowなどに実行可能
- [drt](https://github.com/drt-hub/drt) - OSS Reverse ETL CLI。YAMLを用いてデータウェアハウスからビジネスツールへ同期
- [FluentD](https://www.fluentd.org) - 統一ログレイヤー向けオープンソースデータコレクタ
- [Embulk](https://www.embulk.org) - さまざまなデータベース、ストレージ、ファイル形式、クラウドサービス間のデータ転送を支援するオープンソースの大量データローダー
- [Apache Sqoop](https://sqoop.apache.org) - Apache Hadoopと構造化データストレージ（関係データベースなど）間の大量データ転送を効率的に実現するツール
- [Heka](https://github.com/mozilla-services/heka) - データ取得および処理が簡単。非推奨
- [Gobblin](https://github.com/apache/incubator-gobblin) - LinkedInのHadoop向けのユニバーサルデータイングリッジフレームワーク
- [Nakadi](https://nakadi.io) - Kafkaのようなキュー上でREST APIを提供するオープンソースイベントメッセージングプラットフォーム
- [Pravega](https://www.pravega.io) - 継続的かつ無限のデータを扱うための新しいストレージ抽象化（ストリーム）を提供
- [Apache Pulsar](https://pulsar.apache.org/) - オープンソースの分散型パブリッシュ・サブスクリプションメッセージングシステム
- [AWS Data Wrangler](https://github.com/awslabs/aws-data-wrangler) - AWS上のデータを扱うためのユーティリティセット
- [Airbyte](https://airbyte.io/) - 現代のデータチーム向けオープンソースデータ統合
- [DBConvert Streams](https://streams.dbconvert.com) - 自前でホストできるデータベース移行および変更データキャプチャ（CDC）ツール（組み込みSQL IDEあり）
- [Artie](https://www.artie.com/) - 変更データキャプチャを活用したリアルタイムデータイングリッジツール
- [Sling](https://slingdata.io/) - データベース間およびストレージシステム間のデータ移動に特化したCLIデータ統合ツール
- [Meltano](https://meltano.com/) - CLIおよびコードファーストELT
  - [Singer SDK](https://sdk.meltano.com) - Singer規格に準拠したカスタムデータエクストラクタとローダーを構築する最も速い方法
- [Google Sheets ETL](https://github.com/fulldecent/google-sheets-etl) - Google Sheetsのすべてをリアルタイムでデータウェアハウスにインポート
- [CsvPath Framework](https://www.csvpath.org/) - MFTとデータラクの間のギャップを埋める、区切り文字によるデータプリブレードフレームワーク
- [Estuary Flow](https://estuary.dev) - バッチおよびリアルタイムデータイングリップを扱える、ノーリーカーまたは低コードデータパイプラインプラットフォーム
- [db2lake](https://github.com/bahador-r/db2lake) - データベース→データラク／ウェアハウスへの軽量Node.js ETLフレームワーク
- [data-genie](https://github.com/pujansrt/data-genie) - Node.jsおよびTypeScript向けの高性能・ストリーミング中心のETLエンジン（メモリ消費量は一定）
- [Kreuzberg](https://github.com/kreuzberg-dev/kreuzberg) - Rustベースの多言語ドキュメントインテリジェンスライブラリ。Python、TypeScript、Goなどへのバインディングを提供。62以上のドキュメントフォーマットからテキスト、テーブル、メタデータを抽出し、データパイプラインにイングリップ
- [pdfmux](https://github.com/NameetP/pdfmux) - PythonによるPDF-to-Markdownオーガナイザー。各ページを分類し、最適なバックエンド（PyMuPDF、Docling、RapidOCR、Gemini Flash）にルートし、Markdownとページごとの信頼度スコアを発行することで、イングリップパイプラインがLLMやリトリーブに前に送る前に低信頼ページを隔離
- [DataRaven](https://dataraven.io/) - 管理されたクラウドオブジェクトストレージのイングリップワークフロー用転送
- [Xquik](https://xquik.com) - リアルタイムX（Twitter）データ抽出プラットフォーム（REST API（76エンドポイント）、20のブロードエクストラクションツール、アカウントモニタリング、HMAC署名されたウェブホーク、AIエージェント統合用MCPサーバー）
- [Arpe.io](https://www.arpe.io/) - PostgreSQL、MySQL、Oracle、SQL Serverおよび80以上のソースをサポートする、高速CLIツールによるデータベースのエクスポート、インポート、レプリケーション、移行。CSV、Parquet、JSONおよびクラウドストレージへの並列ストリーミングをサポート
- [Crustdata](https://crustdata.com) - 企業および人物インテリジェンス向けリアルタイムB2BデータAPI。REST APIおよびウェブホークを介して、企業情報、人員数シグナル、求人情報、ウェブトラフィック、資金イベントを提供し、データ強化パイプラインに活用
- [crdt-merge](https://github.com/mgillr/crdt-merge) - データフレーム、JSON、MLモデルおよび分散エージェントの衝突なしマージ — CRDTsで実現
- [LinkedIn Jobs Scraper](https://apify.com/cryptosignals/linkedin-jobs-scraper) - APIキーなしでスケールした構造化LinkedInジョブリストを抽出するCrawleeベースのアクターフレームワーク
- [CARQ](https://github.com/whispering3/CARQ) - 高可用性と適応型レート制限を実現するコンテキスト意識型RAG処理キュー
- [Duckle](https://github.com/SouravRoy-ETL/duckle) - ローカル中心のオープンソースデスクトップETL/ELTスタジオ：パイプラインをキャンバスにドラッグ（または内蔵のデバイスAIアシスタントに説明）し、DuckDBでネイティブスピードで実行。290以上のコンネクタ、スケジューラ、LLMからパイプラインを駆動するMCPサーバー。クラウドもサーバーも不要
- [Rawbbit](https://github.com/mirlan-irokez/rawbbit) - 自前で運用可能なオープンソースアナリティクスパイプライン。rawイベントを自前オブジェクトストレージにParquet形式で受け入れ。NATS JetStreamで持続可能なバッファリング、BigQuery外部テーブルでクエリ。rawイベントデータを自ら所有したいチーム向けに設計
- [faucet-stream](https://github.com/PawanSikawat/faucet-stream) - Rust向けの構成駆動型データ移動プラットオーラ。プラグイン可能なソースおよびシンクコンネクタを備え、YAMLから宣言的にまたはライブラリとして埋め込みでETL、CDC、ストリーミングパイプラインを実行

## ファイルシステム

- [HDFS](https://hadoop.apache.org/docs/current/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html) - コンピュータハードウェアに搭載可能な分散ファイルシステム
  - [Snakebite](https://github.com/spotify/snakebite) - 純粋なPython HDFSクライアント
- [AWS S3](https://aws.amazon.com/s3/) - どこからでも任意の量のデータを取得できるオブジェクトストレージ
  - [smart_open](https://github.com/RaRe-Technologies/smart_open) - 大規模ファイルのストリーミングに必要なユーティリティ（S3、HDFS、gzip、bz2）
- [Alluxio](https://www.alluxio.org/) - メモリ中心の分散ストレージシステム。SparkやMapReduceなどのクラスタフレームワーク間で、メモリ速度で信頼性のあるデータ共有を可能にする。
- [CEPH](https://ceph.com/) - 高いパフォーマンス、信頼性、スケーラビリティを実現する統合型分散ストレージシステム。
- [JuiceFS](https://github.com/juicedata/juicefs) - 大規模データストレージに特化した、オブジェクトストレージをベースにしたハイパフォーマンスクラウドネイティブファイルシステム。
- [OrangeFS](https://www.orangefs.org/) - Orange File Systemは、並列仮想ファイルシステム（PVFS）のブランチ。
- [SnackFS](https://github.com/tuplejump/snackfs-release) - Cassandra上で構築された、小さなサイズで軽量なHDFS互換ファイルシステム。
- [GlusterFS](https://www.gluster.org/) - Gluster Filesystem。
- [XtreemFS](https://www.xtreemfs.org/) - すべてのストレージニーズに適合する、耐障害分散ファイルシステム。
- [SeaweedFS](https://github.com/chrislusf/seaweedfs) - Seaweed-FSはシンプルで高スケーラブルな分散ファイルシステム。2つの目標がある：数十億のファイルを保存すること、ファイルを高速で提供すること。完全なPOSIXファイルシステムセマンティクスをサポートするのではなく、キー～ファイルマッピングのみを実装している。"NoSQL"に似た名前を付けられる。"NoFS"と呼べる。
- [S3QL](https://github.com/s3ql/s3ql/) - すべてのデータをGoogle Storage、Amazon S3、OpenStackなどのストレージサービスを使ってオンラインで保存するファイルシステム。
- [LizardFS](https://lizardfs.com/) - ソフトウェア定義ストレージは、分散型、並列型、スケーラブル、耐障害、地理的リダンダンシー、高可用性を備えたファイルシステム。

## シリアライズ形式

- [AKF](https://github.com/HMAKT99/AKF) - AIネイティブなファイルフォーマット。20以上のフォーマット（DOCX、PDF、画像、コード）に埋め込まれる信頼スコア、ソースプロヴァイエンス、コンプライアンスメタデータ。EXIF for AI。
- [Apache Avro](https://avro.apache.org) - Apache Avro™はデータシリアライゼーションシステム。
- [Apache Parquet](https://parquet.apache.org) - Hadoopエコシステム内のどのプロジェクトにも利用可能で、データ処理フレームワーク、データモデル、プログラミング言語に関わらず、列形式のストレージフォーマット。
  - [Snappy](https://github.com/google/snappy) - 高速圧縮／解圧機能。Parquetと併用。
  - [PigZ](https://zlib.net/pigz/) - 現代のマルチプロセッサ、マルチコアマシン向けのgzipの並列実装。
- [Apache ORC](https://orc.apache.org/) - Hadoopワークロード向けの最小サイズかつ最高速の列形式ストレージ。
- [Apache Thrift](https://thrift.apache.org) - Apache Thriftソフトウェアフレームワーク。スケーラブルなクロス言語サービス開発に用いる。
- [ProtoBuf](https://github.com/protocolbuffers/protobuf) - プロトコル・バッファーズ - グーグルのデータ交換形式
- [SequenceFile](https://wiki.apache.org/hadoop/SequenceFile) - キー/値ペアのバイナリフラットファイル。MapReduceにおける入出力形式として広く使用されている。
- [Kryo](https://github.com/EsotericSoftware/kryo) - Java用の高速かつ効率的なオブジェクトグラフシリアライゼーションフレームワーク
- [PFC-JSONL](https://github.com/ImpossibleForge/pfc-jsonl) - ブロックレベルのタイムスタンプインデックスとDuckDB統合を備えた特別なJSONLログ圧縮器。時間範囲のランダムアクセスクエリに対応し、約9％の圧縮率（gzipより優れる）を達成。
- [ParquetKit](https://parquetkit.com) - DuckDB-WASMによって駆動されたブラウザベースの閲覧機能、SQLワークベンチ、およびParquetファイルの変換ツール。完全にクライアントサイドで動作し、アップロード不要。

## ストリーム処理

- [Apache Beam](https://beam.apache.org/) - バッチ処理とストリーミングデータ処理の両方を実装する統一されたプログラミングモデル。複数の実行エンジン上で実行可能なジョブを提供。
- [Spark Streaming](https://spark.apache.org/streaming/) - スケーラブルかつ障害耐性の高いストリーミングアプリケーションの構築を容易にする。
- [Apache Flink](https://flink.apache.org/) - データストリーム上の分散計算におけるデータ配分、通信、障害耐性を提供するストリーミングデータフローエンジン。
- [Apache Storm](https://storm.apache.org) - 無料かつオープンソースの分散リアルタイム計算システム。
- [Apache Samza](https://samza.apache.org) - 分散ストリーミング処理フレーム及。
- [Apache NiFi](https://nifi.apache.org/) - 使いやすく、強力で信頼性の高いデータ処理および配布システム。
- [Apache Hudi](https://hudi.apache.org/) - リアルタイム処理用ストレージ管理を管理するオープンソースフレームワーク。特に注目すべき機能は、Upsertである。
- [CocoIndex](https://github.com/cocoindex-io/cocoindex) - AI用の新インデックスを構築するオープンソースETLフレームワーク。
- [VoltDB](https://voltdb.com/) - リアルタイムデータを継続処理するエンジン・フレームワークです。 [shared nothing architecture](https://en.wikipedia.org/wiki/Shared-nothing_architecture)
- [PipelineDB](https://github.com/pipelinedb/pipelinedb) - ストリーミングSQLデータベース。
- [Spring Cloud Dataflow](https://cloud.spring.io/spring-cloud-dataflow/) - Spring Bootアプリ間のストリーミングとタスクの実行。
- [Bonobo](https://www.bonobo-project.org/) - Python 3.5以降向けのデータ処理ツールキット。
- [Robinhood's Faust](https://github.com/faust-streaming/faust) - asyncioと静的型付けを用いた、永続的にスケーラブルなイベント処理とメモリ内持続K/Vストアとしてのライブラリ。
- [HStreamDB](https://github.com/hstreamdb/hstream) - IoTデータストレージおよびリアルタイム処理に特化したストリーミングデータベース。
- [Kuiper](https://github.com/emqx/kuiper) - Golangで実装されたエッジ向け軽量IoTデータ分析／ストリーミングソフトウェア。これにより、リソース制限されたエッジデバイス上で実行可能。
- [Zilla](https://github.com/aklivity/zilla) - - イベント駆動アーキテクチャおよびストリーミング向けAPIゲートウェイ。HTTP、SSE、gRPC、MQTT、およびネイティブKafkaプロトコルをサポート。
- [SwimOS](https://github.com/swimos/swim-rust) - リアルタイムストリーミングデータ処理アプリケーションを構築するためのフレームワークで、多様なイングリッシュソースをサポートしています。
- [Pathway](https://github.com/pathwaycom/pathway) - パフォーマンスに優れたオープンソースPython ETLフレームワークで、Rustランタイムを採用し、300以上のデータソースをサポートしています。

## バッチ処理

- [Hadoop MapReduce](https://hadoop.apache.org/docs/current/hadoop-mapreduce-client/hadoop-mapreduce-client-core/MapReduceTutorial.html) - 大量のデータ（マルチテラバイトデータセット）を、大規模なクラスタ（数千ノード）上で並列に、信頼性と障害耐性を確保しながら処理できるアプリケーションを簡単に書くためのソフトウェアフレームワークです。
- [Spark](https://spark.apache.org/) - 単一ノードマシンまたはクラスタ上でデータエンジニアリング、データサイエンス、機械学習を実行するためのマルチ言語エンジンです。
  - [Spark Packages](https://spark-packages.org) - Apache Spark向けのパッケージのコミュニティインデックスです。
  - [Deep Spark](https://github.com/Stratio/deep-spark) - Apache Sparkと異なるデータストアを接続するもの。非推奨です。
  - [Spark RDD API Examples](https://homepage.cs.latrobe.edu.au/zhe/ZhenHeSparkRDDAPIExamples.html) - 陳述者：Zhen Heによる例です。
  - [Livy](https://livy.incubator.apache.org) - REST Sparkサーバーです。
  - [Delight](https://github.com/datamechanics/delight) - 大量のデータを迅速かつコスト効率よく処理できるウェブサービスです。
- [AWS EMR](https://aws.amazon.com/emr/) - Kubernetes上でデプロイされたクラウドベースプラットフォームで、Apache Sparkを開発者にとってより使いやすく、コスト効率的にしています。
- [Data Mechanics](https://www.datamechanics.co) - データ処理に用いる複雑な有向無サイクルグラフ（DAG）を実現するアプリケーションフレームワークです。
- [Tez](https://tez.apache.org/) - 汎用データ処理用の軽量エンジンで、バッチおよびストリーム分析を含みます。これは、データを_関数_で表現し、データ処理を_列操作_で行う、従来のMapReduceやSQLのようなセット操作に依存しない、独自のデータモデルに基づいています。
- [Bistro](https://github.com/asavinov/bistro) - Goで書かれたクラウドネイティブなデータパイプラインおよび変換ツールキットです。
- [Substation](https://github.com/brexhq/substation) - 個人ゲノム解析ツールキットで、raw DNAデータを17カテゴリ（健康リスク、祖先、薬理ゲノム学、栄養、心理学など）で分析し、終端スタイルの1ページHTML可視化を生成します。
- [dna-claude-analysis](https://github.com/shmlkv/dna-claude-analysis) - スマートなアプリケーション向けの高速かつスケーラブルな機械学習APIです。
- Batch ML
  - [H2O](https://www.h2o.ai/) - スケーラブルかつパフォーマンスの高い機械学習アプリケーションを迅速に作成できる環境です。
  - [Mahout](https://mahout.apache.org/) - Sparkのスケーラブル機械学習ライブラリで、分類、回帰、クラスタリング、協調フィルタリング、次元削減、およびその下位の最適化プリミティブを含みます。
  - [Spark MLlib](https://spark.apache.org/docs/latest/ml-guide.html) - 純Goによる古典的な機械学習ツールキットおよびデータエンジニアリングユーティリティ。外部依存なしの8アルゴリズムです。
  - [Datatrax](https://github.com/rbmuller/datatrax) - スケールされたエンティティ解決を機械学習で実現するオープンソースマスターデータ管理プラットフォーム。Databricks、Microsoft Fabric、Snowflake、AWS、GCPにネイティブ対応。すべてのシステムとソース間で持続的にZingg IDを用いてゴールデンレコードを維持します。
  - [Zingg](https://www.zingg.ai/) - スケールしたエンティティ解決のために機械学習を用いたオープンソースのマスターデータ管理プラットフォーム。Databricks、Microsoft Fabric、Snowflake、AWS、GCPにネイティブに対応。すべてのシステムおよびソース間で持続的にZingg IDを用いてゴールデンレコードを維持。
- Batch Graph
  - [GraphLab Create](https://turi.com/products/create/docs/) - データサイエンティストやアプリ開発者向けに、スケールしたインテリジェントアプリの簡単に作成できる機械学習プラットフォーム
  - [Giraph](https://giraph.apache.org/) - 高スケーラビリティを実現するイテレーティブなグラフ処理システム
  - [Spark GraphX](https://spark.apache.org/graphx/) - Apache Sparkにおけるグラフおよびグラフ並列計算用API
- Batch SQL
  - [Presto](https://prestodb.github.io/docs/current/index.html) - 1つ以上の異質なデータソースに分散された大規模データセットをクエリできる分散型SQLクエリエンジン
  - [Hive](https://hive.apache.org) - データウェアハウスソフトウェアは、分散ストレージに保存された大規模データセットのクエリと管理を可能にする
    - [Hivemall](https://github.com/apache/incubator-hivemall) - Hive/Hadoop向けのスケーラブルな機械学習ライブラリ
    - [PyHive](https://github.com/dropbox/PyHive) - HiveおよびPresto向けのPythonインターフェース
  - [Drill](https://drill.apache.org/) - Hadoop、NoSQLおよびクラウドストレージ向けのスキーマなしSQLクエリエンジン

## チャートとダッシュボード

- [Highcharts](https://www.highcharts.com/) - 純粋JavaScriptで書かれたチャートライブラリで、ウェブサイトやウェブアプリにインタラクティブなチャートを簡単に追加できる
- [ZingChart](https://www.zingchart.com/) - 任意のデータセットに適用可能な高速JavaScriptチャート
- [C3.js](https://c3js.org) - D3をベースにした再利用可能なチャートライブラリ
- [D3.js](https://d3js.org/) - データに基づいたドキュメント操作を行うJavaScriptライブラリ
  - [D3Plus](https://d3plus.org) - D3のよりシンプルで使いやすいバージョン。ほとんどが事前に定義されたテンプレートで、データをただ入れるだけで使える
- [SmoothieCharts](https://smoothiecharts.org) - ストリーミングデータ向けのJavaScriptチャートライブラリ
- [PyXley](https://github.com/stitchfix/pyxley) - FlaskとReactを使ってダッシュボードを構築するためのPython補助ツール
- [Plotly](https://github.com/plotly/dash) - Pythonでインタラクティブなウェブベース可視化アプリを構築するためのFlask、JS、CSSのテンプレート
- [Apache Superset](https://github.com/apache/incubator-superset) - 現代的な、企業向けのビジネスインテリジェンスウェブアプリ
- [Redash](https://redash.io/) - 企業のデータをドリブンに。どんなデータソースにも簡単に接続し、データを可視化して共有できる
- [Metabase](https://github.com/metabase/metabase) - あなたの企業の誰もがデータを問いかけて、データから学べる、簡単でオープンソースの方法
- [stratif.io](https://stratif.io) - オープンソース・セルフホスト型・ウェアハウスネイティブなプロダクト分析。DuckDB、Postgres、Snowflake、ClickHouse上で直接フューリー、リテンション、パスを実行可能
- [PyQtGraph](https://www.pyqtgraph.org/) - PyQt4 / PySide および numpy に構築された純粋 Python のグラフィックスおよびGUIライブラリ。数学・科学・工学分野のアプリケーション向けに設計されている。
- [Seaborn](https://seaborn.pydata.org) - matplotlib をベースにしたPythonの可視化ライブラリ。魅力的な統計グラフの描画に高レベルのインターフェースを提供する。
- [QueryGPT](https://github.com/MKY508/QueryGPT) - 自然言語によるデータベースクエリインターフェースで、自動チャート生成をサポート。中国語および英語のクエリに対応。
- [AI for Database](https://aifordatabase.com/) - データベース（PostgreSQL、MySQL、MongoDBなど）を接続し、英語でクエリを実行できるアグエントAIプラットフォーム。データ変更によってトリガーされる自己更新型のスマートダッシュボードおよびアクションフローを含む。
- [Dekart](https://github.com/dekart-xyz/dekart) - BigQuery、Snowflake、PostGIS向けのオープンソースSQLマッピングプラットフォーム。
- [LunaPad](https://lunapad.dev/) - 再利用可能なSQLワークフロー、インタラクティブレポート、AI支援データ探索を可能にするオープンソース分析ノートブック。

## ワークフロー

- [Bonnard](https://bonnard.dev/) - 顧客のデータに安全にアクセスする、多顧客対応のMCP（Multi-Client Platform）。あなたのデータウェアハウス、dbt、または意味論的レイヤーをAIエージェント向けの安全で顧客ごとのMCPに変換できる。
- [Nika](https://github.com/supernovae-st/nika) - AIデータパイプライン向けの意図-as-codeワークフローエンジン：実行前に静的に検証（スキーマ、許可、コスト下限）されたYAML形式のDAG（有向無環グラフ）を提供し、実行履歴に変更を検出できるようにする。
- [OrionBelt Semantic Layer](https://github.com/ralfbecher/orionbelt-semantic-layer) - BigQuery、ClickHouse、Databricks、Dremio、DuckDB、MySQL、PostgreSQL、Snowflakeの8エンジンにわたるYAMLで定義された次元、測定、メトリクスを最適化されたSQLにコンパイルするオープンソース意味論的サイドカーサービス。統一されたREST、MCP、Postgresのワイヤープロトコル。1つのモデルがAIエージェント、分析、データ品質ルール、KPIを駆動する。
- [Bruin](https://github.com/bruin-data/bruin) - BigQuery、Snowflake、Post及以降のデータインプット、変換（SQL＋Python）、データ品質を1つのCLIで統合したエンドツーエンドデータパイプラインツール。VS Code拡張機能を備え、リアルタイムプレビューを提供。
- [DataFlow](https://github.com/OpenDCAI/DataFlow) - データ準備、合成データ生成、AI／データパイプラインを支援するオープンソースプラットフォーム。データおよびAIタスクのワークフローステップを自動化する再利用可能なスキルを含む。
- [Luigi](https://github.com/spotify/luigi) - 複雑なバッチジョブパイプラインを構築するためのPythonモジュール。
- [CronQ](https://github.com/seatgeek/cronq) - データパイプラインのオーケストレーション・スケジューリングを支援するツールです。 [Used](https://chairnerd.seatgeek.com/building-out-the-seatgeek-data-pipeline/)
- [Cascading](https://www.cascading.org/) - Javaベースのアプリケーション開発プラットフォーム。
- [Airflow](https://github.com/apache/airflow) - データパイプラインをプログラムで作成、スケジュール、監視できるシステム。
- [Azkaban](https://azkaban.github.io/) - LinkedInで開発されたHadoopジョブを実行するためのバッチワークフロージョブスケジューラ。Azkabanはジョブの依存関係を通じて順序を解決し、ワークフローのメンテナンスおよび追跡に簡単なウェブインターフェースを提供する。
- [Oozie](https://oozie.apache.org/) - Apache Hadoopジョブの管理を目的としたワークフロースケジューラシステム。
- [Pinball](https://github.com/pinterest/pinball) - DAGベースのワークフロー管理者。ジョブフローはPythonでプログラム的に定義され、ジョブ間の出力の渡し合いをサポート。
- [Dagster](https://github.com/dagster-io/dagster) - データアプリケーションの構築に用いるオープンソースPythonライブラリ。
- [Hamilton](https://github.com/dagworks-inc/hamilton) - データ変換を有向無環グラフ（DAG）として定義するための軽量ライブラリ。dbtのSQL変換に好んでいたなら、HamiltonのPython処理も好むだろう。
- [Kedro](https://kedro.readthedocs.io/en/latest/) - 一貫したプロジェクトテンプレート、データ抽象、設定、パイプライン構築を提供することで、堅牢でスケーラブルなデータパイプラインを簡単に構築できるフレームワーク。
- [Dataform](https://dataform.co/) - オープンソースのフレームワークおよびウェブベースのIDEで、データセットとその依存関係を管理できます。SQLXは、既存のSQLウェアハウスの文法に拡張し、依存関係管理、テスト、ドキュメンテーションなどをサポートする機能を追加します。
- [Dotflow](https://github.com/dotflow-io/dotflow) - リトライ、並列実行、クロントスケジューリング、およびアシンクサポートを備えた軽量なPythonライブラリで、実行パイプラインを構築できます。
- [Census](https://getcensus.com/) - クラウドウェアハウスからSalesforce、Marketo、HubSpot、ZendeskなどSaaSアプリケーションへデータを同期する逆ETLツールです。エンジニアリングの知識が不要—ただSQLで実行できます。
- [dbt](https://getdbt.com/) - データアナリストやエンジニアがウェアハウス内のデータをより効果的に変換できるようにするコマンドラインツールです。
- [Kestra](https://github.com/kestra-io/kestra) - スケーラブルでイベント駆動、言語に依存しないオーケストレーションとスケジューリングプラットフォームで、数百万のワークフローをコードで宣言的に管理できます。
- [RudderStack](https://github.com/rudderlabs/rudder-server) - アプリケーション、ウェブサイト、SaaSプラットフォームからデータを収集し、ウェアハウスおよびビジネスツールでアクティブにできる、ウェアハウス中心の顧客データプラットフォームです。
- [PACE](https://github.com/getstrm/pace) - データのアクセス、使用、変換に関する合意を強制できるオープンソースフレームワークで、データプラットフォーム（Snowflake、BigQuery、DataBricksなど）にかかわらず適用できます。
- [OneQuery](https://github.com/wordbricks/onequery) - 承認されたデータソースのアグリゲートにわたるエージェントの安全かつ検証可能なクエリを実行するためのセルフホスト型ゲートウェイです。
- [Prefect](https://prefect.io/) - オーケストレーションと可視性プラットフォーム。開発者は、迅速に頑健なコードを構築・拡張し、障害の原因を簡単に特定できます。
- [Multiwoven](https://github.com/Multiwoven/multiwoven) - 現代のデータチーム向けのオープンソース逆ETL、データアクティベーションプラットフォームです。
- [SuprSend](https://www.suprsend.com/products/workflows) - 通知サービスのAPIを使って自動化されたワークフローと論理を作成し、テンプレート、バッチ処理、設定、アプリ内インボックスを追加して、データウェアハウスから直接通知をトリガーできます。
- [Mage](https://www.mage.ai) - データの変換と統合を行うためのオープンソースデータパイプラインツールです。
- [SQLMesh](https://sqlmesh.readthedocs.io) - SQLおよびPythonベースのデータパイプラドの管理、テスト、デプロイを、バージョン管理、環境分離、自動依存関係解決を含むオープンソースデータ変換フレームワークです。

## データレイク管理

- [lakeFS](https://github.com/treeverse/lakeFS) - オブジェクトストレージベースのデータラクを高耐性と管理性を提供するオープンソースプラットフォームです。
- [Project Nessie](https://github.com/projectnessie/nessie) - データラク向けのトランザクションカタログで、Gitのようなセマンティクスを提供。Apache Icebergテーブルと互換です。
- [Ilum](https://ilum.cloud/) - KubernetesおよびHadoop環境におけるApache Sparkクラスタの管理および監視を簡素化するモジュラーデータラクハウスプラットフォームです。
- [Gravitino](https://github.com/apache/gravitino) - データラク、データウェアハウス、外部カタログの統一メタデータ管理を提供するオープンソースプラットフォームです。
- [FlightPath Data](https://www.flightpathdata.com) - FlightPathはデータラクのブロンレイヤーへのゲートウェイであり、信頼できる発行者として、無効な外部データファイルフィードを保護します。
- [rawquery](https://rawquery.dev) - Apache Icebergベースのマネージドラクハウスプラットフォームで、DuckDBクエリ計算、S3ストレージ、Postgresワイヤープロトコル、SQL変換を提供します。

## ELK（Elasticsearch・Logstash・Kibana）

- [docker-logstash](https://github.com/pblittle/docker-logstash) - 高度にカスタマイズ可能なLogstash (1.4.4) - DockerイメージでElasticsearch (1.7.0) - およびKibana (3.1.2)を実行しています。
- [elasticsearch-jdbc](https://github.com/jprante/elasticsearch-jdbc) - Elasticsearch 用の JDBC インポートツール
- [ZomboDB](https://github.com/zombodb/zombodb) - PostgreSQL 延長機能で Elasticsearch にバックアップされたインデックスを作成可能

## Docker

- [Gockerize](https://github.com/redbooth/gockerize) - Go サービスを最小限の Docker コンテナにパッケージ化
- [Flocker](https://github.com/ClusterHQ/flocker) - Docker コンテナとそのデータを簡単に管理
- [Rancher](https://rancher.com/rancher-os/) - RancherOS は 20MB の Linux ディストリビューションで、すべての OS を Docker コンテナとして実行
- [Kontena](https://www.kontena.io/) - 一般の人々向けのアプリケーションコンテナ
- [Weave](https://github.com/weaveworks/weave) - Docker コンテナをアプリケーションに統合
- [Zodiac](https://github.com/CenturyLinkLabs/zodiac) - Docker化されたアプリケーションの簡単なデプロイとロールバックを可能にする軽量ツール
- [cAdvisor](https://github.com/google/cadvisor) - 実行中のコンテナのリソース使用量とパフォーマンス特性を分析
- [Micro S3 persistence](https://github.com/figadore/micro-s3-persistence) - S3 に Docker ボリュームデータを保存・復元するための Docker ミクロサービス
- [Rocker-compose](https://github.com/grammarly/rocker-compose) - 複数コンテナから構成されたアプリケーションをデプロイするための、一貫性を保つ機能を備えた Docker コンポジションツール。非推奨
- [Nomad](https://github.com/hashicorp/nomad) - 長期間実行されるサービスや一時的なバッチ処理ワークロードに適したクラスタマネージャー
- [ImageLayers](https://imagelayers.io/) - Docker イメージとその構成層を可視化

## データセット

### リアルタイム

- [DexPaprika](https://api.dexpaprika.com) - 34のブロックチェーンを横断し、3,000万以上のプールと2,700万以上のトークンについて約1秒間隔のDEXデータをSSE配信します。APIキーとレート制限はありません。 [Docs](https://docs.dexpaprika.com)
- [Helium MCP](https://github.com/connerlambden/helium-mcp) - リアルタイム金融データ、320万件以上のニュース記事、機械学習によるオプション価格算定、ニュースの偏り分析を提供するリモートMCPサーバー。無料でAPIキーは不要です。 [MCP](https://heliumtrades.com/mcp)
- [Twitter Realtime](https://developer.twitter.com/en/docs/tweets/filter-realtime/overview) - ストリーミングAPIは開発者がTwitterのグローバルなツイートストリームに低遅延でアクセスできるようにする
- [Sorsa API](https://api.sorsa.io) - リアルタイム X（Twitter）データAPIがツイート、プロフィール、検索、コミュニティ、エンゲージメントメトリクスを提供。公式X APIと比べて最大50倍安価で、20リクエスト/秒の制限、JSON出力
- [Eventsim](https://github.com/Interana/eventsim) - イベントデータシミュレーター。ユーザーのセットから偽乱数イベントを生成し、ウェブトラフィックをシミュレート
- [Eventum](https://eventum.run) - 複雑な相関関係を持つ合成イベントストリームを生成するデータ生成プラットフォーム
- [Reddit](https://www.reddit.com/r/datasets/comments/3mk1vg/realtime_data_is_available_including_comments/) - Reddit に投稿されたコメント、投稿、リンクなどのリアルタイムデータが提供される

### データダンプ

- [GitHub Archive](https://www.gharchive.org/) - 2011年から公開されているGitHubの公開タイムライン、1時間ごとに更新
- [Common Crawl](https://commoncrawl.org/) - ウェブスクレイピングデータのオープンソースリポジトリ
- [Wikipedia](https://dumps.wikimedia.org/enwiki/latest/) - ウィキペディアがすべてのウィキを完全にコピーしたもの。ウィキテキストソースとXMLに埋め込まれたメタデータの形。また、SQL形式のいくつかの原始データベーステーブルも提供されている。
- [The Quiet-Broke Index](https://jeevesagency.github.io/quiet-broke-index/) - アメリカ合衆国における家庭のコスト負担（住宅、税金、保育、医療、輸送）をカセンACS、BLS消費者支出調査、HUDの公正市場賃料から集計した30メートルの合成データ。オープンメソッド、無料、メールゲートなし。
- [FirstData](https://github.com/MLT-OSS/FirstData) - 世界で最も包括的かつ信頼できるデータソース知識ベース。政府、国際機関、研究機関から160以上のキュレートされたソースを含む。MCP統合。
- [Mindweave Synthetic Business Data](https://github.com/MindweaveTech/sme-sim-sample) - 42テーブルの合成中小企業データセット。二重記録会計、税務準拠（オーストラリア／アメリカ／イギリス）、時間的現実性を備えている。CSV、SQL、Parquet、SQLite。ETLパイプラインのテストに最適。
- [LatAm Synth](https://apify.com/jmendozapuche/latam-synth) - ラテンアメリカの合成金融貯蓄行動生成器：ユーザー、貯蓄目標、取引が50万6千件の実際の記録（2015～2024）に基づいて調整されている。シードで再現可能、100％合成。

## 監視

### Prometheus

- [Prometheus.io](https://github.com/prometheus/prometheus) - オープンソースのサービス監視システムおよび時系列データベース。
- [HAProxy Exporter](https://github.com/prometheus/haproxy_exporter) - シンプルなサーバーでHAProxyの統計をスクレイピングし、Prometheusの消費に向けたHTTPでエクスポートする。
- [Signals CLI](https://github.com/sortlist/signals-cli) - 意図信号監視CLI。LinkedInのエンゲージャー、キーワード投稿者、職業変更者、資金調達イベントを追跡。データパイプライン向けJSON出力。

## プロファイリング

### データプロファイラー
- [Data Profiler](https://github.com/capitalone/dataprofiler) - DataProfilerは、データ分析、監視、センシティブデータ検出を容易にするPythonライブラリ。
- [YData Profiling](https://docs.profiling.ydata.ai/latest/) - 一般用途のオープンソースデータプロファイラー。データセットの高レベル分析に特化。
- [Desbordante](https://github.com/desbordante/desbordante-core) - データ内の複雑なパターンの発見と検証に特化したオープンソースデータプロファイラー。


## スキーマ

- [SchemaCrawler](https://www.schemacrawler.com/) - データスキーマの管理・検証・互換性を支援するツールです。


## テスト

- [Aegis DQ](https://github.com/aegis-dq/aegis-dq) - オープンソースのエージェント型データ品質フレームワーク。LLMによる診断、原因分析、SQL自動修正提案、31のルールタイプを備えている。DuckDB、Postgres、BigQuery、Databricks、Athena、Snowflakeに対応。
- [Grai](https://github.com/grai-io/grai-core/) - CIシステムに統合されたデータカタログツール。データ変更の下流影響テストを実行し、データパイプラインやBIダッシュボードを破壊する可能性のある変更を防止する。
- [DQOps](https://github.com/dqops/dqo) - データ品質プラットフォーム。データソースのプロファイリングからデータ品質監視の完全自動化まで、データプラットフォームライフサイクル全体をカバー。
- [DataKitchen](https://datakitchen.io/) - エンドツーエンドデータジャーニーの観測、データプロファイリング、異常検出、自動生成されたデータ品質検証テストを提供するオープンソースデータ可観測性。
- [GreatExpectation](https://greatexpectations.io/) - データ品質を管理するオープンソースデータ検証フレームワーク。ユーザーはデータがどのように見えるべきか、どのように振る舞うべきかについて「期待」ルールを定義および記録できる。
- [Provero](https://github.com/provero-org/provero) - ベンダー中立かつ宣言型のデータ品質エンジン。YAMLでチェックを定義し、どこでも実行可能。16の組み込みチェックタイプ、SQLバッチ最適化、異常検出、データ契約を含む。
- [Scherlok](https://github.com/rbmuller/scherlok) - ゼロ設定データ品質CLI。初回実行時にすべてのテーブルをプロファイリングし、その後の実行で自動的に異常（ボリュームの減少、スキーマの変化、新鮮度の欠如、分布のシフト）を検出。YAMLやルールの記述不要。Postgres、BigQuery、Snowflake、dbtに対応。
- [RunSQL](https://runsql.com/) - MySQL、PostgreSQL、SQL Server向けの無料オンラインSQLプレイヤー。データベース構造を作成し、クエリを実行し、結果を即時共有できる。
- [Spark Playground](https://www.sparkplayground.com/) - Spark PlaygroundのオンラインコンパイラでPySparkコードを書く、実行、テスト。実際のサンプルデータセットにアクセスし、インタビュー問題を解いてデータエンジニアリング職に必要なPySparkスキルを向上させる。
- [daffy](https://github.com/vertti/daffy/) - デコレーター中心のデータフレームの契約／検証（列／データ型／制約）を関数境界で行う。Pandas／Polars／PyArrow／Modinに対応。
- [Snowflake Emulator](https://github.com/nnnkkk7/snowflake-emulator) - ローカル開発およびテスト用のSnowflake互換エミュレーター。
- [DataScreenIQ](https://datascreeniq.com) - パイプラインおよびAPI向けのリアルタイムデータ品質ファイアウォール。スキーマのずれ、nullの急増、型の不一致、データ異常をミリ秒単位で行い、PASS／WARN／BLOCKの判断を下す。
- [DataDriven](https://www.datadriven.io/) - SQLクエリ実行、Python、データモデリングの練習を含むインタビュー練習。
- [Fixzi](https://fixzi.ai) - JSON／XMLの検証およびAPI契約モニタリングツール。構造化データのデバッグおよびテストに使用。

## コミュニティ

### フォーラム

- [/r/dataengineering](https://www.reddit.com/r/dataengineering/) - データエンジニアリングに関するニュース、ヒント、背景情報。
- [/r/etl](https://www.reddit.com/r/ETL/) - ETLに特化したサブレッド。
- [AI Dev Jobs](https://aidevboard.com) - AI、ML、データエンジニアリング職種に特化したジョブボード。7,400以上の求人、給与データ、無料REST APIを提供。

### カンファレンス

- [Data Council](https://www.datacouncil.ai/about) - データエンジニアリング関連のカンファレンスです。

### ポッドキャスト

- [Chain of Thought](https://www.chainofthought.show/) - AIおよびデータインフラのリーダーによる、生産環境システム構築に関するインタビュー。
- [Data Engineering Podcast](https://www.dataengineeringpodcast.com/) - 現代データインフラに関する番組。
- [Latent Space](https://www.latent.space/podcast) - AIエンジニアリングに関する技術的な深掘り。モデルトレーニングからデプロイまで。
- [Practical AI](https://practicalai.fm/) - AIを誰にでも実用的、生産的、アクセス可能にする。
- [Software Engineering Daily](https://softwareengineeringdaily.com/) - 技術的なソフトウェアテーマに関する毎日のインタビュー。データインフラを含む。
- [The Analytics Engineering Podcast](https://roundup.getdbt.com/s/the-analytics-engineering-podcast) - アナリティクスエンジニアがスケールしたデータパイプラインを構築・維持する方法。
- [The Data Stack Show](https://datastackshow.com/) - データエンジニア、アナリスト、データサイエンティストがデータインフラの構築・維持、データおよびデータ製品の提供、ビジネス全体のデータによる成果向上について語る番組。

### 書籍

- [Snowflake Data Engineering](https://www.manning.com/books/snowflake-data-engineering) - Snowflakeクラウドデータプラットフォームにおけるデータエンジニアリングの実用的な導入。
- [Best Data Science Books](https://www.appliedaicourse.com/blog/data-science-books/) - このブログは、テーマと学習段階に分類されたトップデータサイエンス書のキュレーションリストを提供し、読者に基礎知識の構築と業界トレンドの把握を支援。
- [Architecting an Apache Iceberg Lakehouse](https://www.manning.com/books/architecting-an-apache-iceberg-lakehouse) - Apache Icebergのラケーハウスをゼロから設計するためのガイド。
- [Learn AI Data Engineering in a Month of Lunches](https://www.manning.com/books/learn-ai-data-engineering-in-a-month-of-lunches) - 大規模言語モデルをデータワークフローに統合するための速い、親しみやすいガイド。
