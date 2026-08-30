---
title: "rayokota/awesome-hbase"
description: "rayokota/awesome-hbase の定本スナップショット"
licenseSource: "github-rayokota-awesome-hbase-readme-md"
---

# Awesome HBase [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://cdn.rawgit.com/rayokota/awesome-hbase/c197f415/hbase_logo_with_orca-2.png" align="right" width="150">](http://hbase.apache.org/)

優れたHBaseプロジェクトとリソースのキュレーションリストです。

[HBase](http://hbase.apache.org)は分散型でスケーラブルなビッグデータストアです。

## 目次
- [プロジェクト](#projects)
    - [クライアント](#clients)
    - [クラウド](#cloud)
    - [フレームワーク](#frameworks)
        - [データセット](#datasets)
        - [ドキュメント](#document)
        - [エンティティ/JPA](#entityjpa)
        - [地理空間](#geospatial)
        - [グラフ](#graph)
        - [SQL/OLAP](#sqlolap)
        - [時系列](#time-series)
    - [インフラストラクチャ](#infrastructure)
        - [セカンダリインデックス](#secondary-indices)
        - [トランザクション](#transactions)
    - [統合](#integrations)
    - [ツール](#tools)
    - [その他](#miscellaneous)
- [リソース](#resources)
    - [書籍](#books)
    - [論文](#papers)
    - [コミュニティ](#community)

## プロジェクト
### クライアント
* [asynchbase](https://github.com/OpenTSDB/asynchbase) - 完全非同期・ノンブロッキングのHBaseクライアント。
* [gohbase](https://github.com/tsuna/gohbase) - HBase向けPure Goクライアント。
* [happybase](https://github.com/wbolster/happybase) - Python製HBaseクライアント。

### クラウド
* [Amazon EMR](https://aws.amazon.com/emr/) - AWS上のAmazon Hadoop/HBaseサービス。
* [Azure HDInsight](https://azure.microsoft.com/en-us/services/hdinsight/) - Azure上のMicrosoft Hadoop/HBaseサービス。
* [Cloudera Director](https://www.cloudera.com/products/product-components/cloudera-director.html) - AWS、Azure、Google CloudでHadoop/HBaseクラスタを実行。
* [Google Cloud Bigtable](https://cloud.google.com/bigtable/) - HBaseクライアントAPIで利用できる高性能NoSQLデータベースサービス。
* [Hortonworks Cloudbreak](https://hortonworks.com/open-source/cloudbreak/) - AWS、Azure、Google Cloud、OpenStackでHadoop/HBaseクラスタをプロビジョニング。

### フレームワーク
#### データセット
* [Kite](http://kitesdk.org) - Hadoop/HBase向け高水準データレイヤー。
#### ドキュメント
* [HDocDB](https://github.com/rayokota/hdocdb) - JSONドキュメントデータベースとしてのHBase。
#### エンティティ/JPA
* [DataNucleus](http://www.datanucleus.org) - HBase対応のJPA永続化レイヤー。
* [Gora](http://gora.apache.org) - HBaseをサポートするビッグデータ向け永続化ライブラリ。
* [HBase ORM](https://github.com/flipkart-incubator/hbase-orm) - 本番品質のHBase ORMライブラリ。
* [HEntityDB](https://github.com/rayokota/hentitydb) - エンティティデータベースとしてのHBase。
* [Kundera](https://github.com/impetus-opensource/Kundera) - HBaseをサポートするJPAクライアント。
#### 地理空間
* [GeoMesa](http://www.geomesa.org/) - Accumulo、HBase、Cassandra、Kafka対応の時空間データベース。
#### グラフ
* [Gradoop](https://github.com/dbs-leipzig/gradoop) - FlinkとHBase上に構築したスケーラブルなグラフ分析研究フレームワーク。
* [HGraphDB](https://github.com/rayokota/hgraphdb) - TinkerPopグラフデータベースとしてのHBase。
* [HugeGraph](https://github.com/apache/incubator-hugegraph) - 100億超のデータ、高性能、スケーラビリティを支えるグラフデータベース。
* [JanusGraph](http://janusgraph.org/) - Cassandra、HBase、Google Cloud Bigtable、BerkeleyDB対応のスケーラブルなグラフデータベース。
* [NebulaGraph](https://github.com/vesoft-inc/nebula) - 高性能な分散グラフデータベース。
* [S2Graph](http://s2graph.incubator.apache.org) - HBase上に構築した高性能分散グラフデータベース。
* [Actionbase](https://github.com/kakao/actionbase) - グラフで表す利用者操作（いいね、閲覧、フォロー）向けデータベース。事前計算した読取りをリアルタイムに提供。
#### SQL/OLAP
* [AntsDB](http://antsdb.com/) - HBase向け低遅延・高並行MySQL互換SQLレイヤー。
* [EsgynDB](https://esgyn.com/) - Trafodianに基づき、Hadoop上でACIDトランザクションとBI分析を提供する商用SQLエンジン。
* [Kylin](http://kylin.apache.org) - データをHBaseへ保存するビッグデータ向け高速OLAPエンジン。
* [LeanXScale](http://www.leanxcale.com) - Hadoop/HBase上に構築した商用フルACID・フルSQL製品。
* [Phoenix](https://phoenix.apache.org) - HBase上のSQLレイヤー。
* [Splice Machine](https://www.splicemachine.com) - HBase上に構築した商用RDBMS。
* [Trafodian](http://trafodion.apache.org) - トランザクション対応SQL-on-Hadoop/HBase。
#### 時系列
* [Axibase](http://axibase.com/products/axibase-time-series-database/) - HBase上に構築した分散時系列データベース。
* [OpenTSDB](http://opentsdb.net) - HBase上に構築したスケーラブルな時系列データベース。
* [Warp 10](http://www.warp10.io) - センサーデータ向け時系列データベース。

### インフラストラクチャ
#### セカンダリインデックス
* [hindex](https://github.com/Huawei-Hadoop/hindex) - HBase向けセカンダリインデックス。
* [Lily HBase Indexer](http://ngdata.github.io/hbase-indexer/) - HBaseに保存したコンテンツを高速かつ容易に検索。
#### トランザクション
* [Haeinsa](https://github.com/VCNC/haeinsa) - HBase向け複数行・複数テーブルのトランザクションライブラリ。
* [HBase-QoD](https://github.com/algarecu/hbase-0.94.8-qod) - HBaseの細粒度トランザクション型インターDC複製向けベクトル場整合性。
* [Omid](https://github.com/apache/incubator-omid) - HBaseのトランザクションサポート。
* [Tephra](http://tephra.incubator.apache.org) - HBase上のグローバル整合トランザクション。
* [Themis](https://github.com/XiaoMi/themis) - Google Percolatorに基づくHBaseの行横断・テーブル横断トランザクション。

### 統合
* [Apex](https://github.com/apache/apex-malhar/tree/master/contrib/src/test/java/org/apache/apex/malhar/contrib/hbase) - Apex-HBaseコネクター。
* [Beam](https://github.com/apache/beam/tree/master/sdks/java/io/hbase) - Beam HBase統合。
* [Camel](http://camel.apache.org/hbase.html) - Camel HBaseコンポーネント。
* [Cascading](https://github.com/Cascading/cascading.hbase) - Cascading向けHBaseアダプター。
* [Cascalog](https://github.com/sorenmacbeth/hbase-cascalog) - Cascalogで使うCascading.HBaseのラッパー。
* [Crunch](https://github.com/apache/crunch/tree/master/crunch-hbase) - Crunch向けHBaseアダプター。
* [Drill](https://drill.apache.org/docs/querying-hbase/) - Drill向けHBaseストレージプラグイン。
* [Elasticsearch](https://github.com/mallocator/Elasticsearch-HBase-River) - HBase向けElasticsearch import river。
* [Flink](https://github.com/apache/flink/tree/master/flink-connectors/flink-connector-hbase-2.2) - Flink-HBaseコネクター。
* [Gearpump](https://github.com/apache/incubator-gearpump/tree/master/external/hbase) - HBase向けGearpump統合。
* [Giraph](https://github.com/apache/giraph/tree/trunk/giraph-hbase) - HBase向けGiraph入出力形式。
* [HAWQ](https://hawq.apache.org/docs/userguide/2.3.0.0-incubating/pxf/HBasePXF.html) - HBase上のHAWQ PXF外部テーブル。
* [Hive](https://cwiki.apache.org/confluence/display/Hive/HBaseIntegration) - Hive HBase統合。
* [Impala](https://www.cloudera.com/documentation/enterprise/latest/topics/impala_hbase.html) - HBaseテーブルのクエリーに対するImpalaサポート。
* [Kafka](https://github.com/apache/hbase-connectors/tree/master/kafka) - HBase Kafkaプロキシ。
* [Pig](https://github.com/apache/pig/tree/trunk/src/org/apache/pig/backend/hadoop/hbase) - Pig HBase統合。
* [Presto](https://github.com/analysys/presto-hbase-connector) - Presto-HBaseコネクター。
* [Pulsar](http://pulsar.apache.org/docs/en/io-hbase/) - Pulsar向けHBaseコネクター。
* [Ranger](https://cwiki.apache.org/confluence/display/RANGER/HBase+Plugin) - Apache Ranger向けHBaseプラグイン。
* [Spark](https://github.com/hortonworks-spark/shc) - Spark-HBaseコネクター。
* [Spring for Apache Hadoop](https://projects.spring.io/spring-hadoop/) - HBaseサポートを含むSpring-Hadoop統合。
* [Storm](https://github.com/apache/storm/tree/master/external/storm-hbase) - HBase向けStorm/Trident統合。
* [Tajo](https://tajo.apache.org/docs/current/hbase_integration.html) - Tajo HBase統合。
* [Zeppelin](https://zeppelin.apache.org/docs/0.6.2/interpreter/hbase.html) - Apache Zeppelin用HBaseシェルインタープリター。

### ツール
* [Ambari](https://ambari.apache.org) - Hadoop/HBaseクラスタのプロビジョニング、管理、監視ソフトウェア。
* [Cloudera Manager](https://www.cloudera.com/products/product-components/cloudera-manager.html) - 本番環境でHadoop/HBaseを管理するツール。
* [DbSchema](http://www.dbschema.com/index.html) - HBase対応の図表指向データベースデザイナー。
* [Hannibal](https://github.com/sentric/hannibal) - HBaseクラスタを監視・保守するツール。
* [h-rider](https://github.com/NiceSystems/hrider) - HBaseのデータを表示・操作するGUI。
* [Hue](http://gethue.com) - HBaseブラウザーを含むスマート分析ワークベンチ。
* [Sematext SPM](http://sematext.com/spm) - [HBase](http://sematext.com/spm/integrations/hbase-monitoring)、HDFSなどを監視するツール。

### その他
* [HubSpot HBase support](https://github.com/HubSpot/hbase-support) - Hystrix統合とコプロセッサーを含むHubSpotのHBase用設定・ツール。

## リソース
### 書籍
* [HBase in Action](https://www.manning.com/books/hbase-in-action) - HBaseの使い方を示す経験主導のガイド。
* [HBase: The Definitive Guide](http://shop.oreilly.com/product/0636920014348.do) - HBaseの包括的ガイド。
* [Architecting HBase Applications](http://shop.oreilly.com/product/0636920035688.do) - HBaseの原則、クラスタガイドライン、詳細な事例研究を収録。
* [HBase Administration Cookbook](https://www.packtpub.com/big-data-and-business-intelligence/hbase-administration-cookbook) - HBaseの構成と管理を習得する方法。
* [HBase Essentials](https://www.packtpub.com/big-data-and-business-intelligence/hbase-essentials) - HBaseを使うための実践ガイド。
* [HBase Design Patterns](https://www.packtpub.com/big-data-and-business-intelligence/hbase-design-patterns) - HBaseでスケーラブルなアプリケーションを開発する成功パターン。
* [Learning HBase](https://www.packtpub.com/big-data-and-business-intelligence/learning-hbase) - HBase管理と開発の基礎を学ぶ。
* [HBase High Performance Cookbook](https://www.packtpub.com/big-data-and-business-intelligence/hbase-high-performance-cookbook) - HBaseの使い方を教える興味深いプロジェクト。
* [Apache HBase Primer](http://www.apress.com/us/book/9781484224236) - HBaseの基礎を簡潔にまとめたガイド。
* [Pro Apache Phoenix](http://www.apress.com/us/book/9781484223697) - Phoenixを使うための基本とベストプラクティス。
* [Mathematics of Big Data](https://mitpress.mit.edu/9780262038393/mathematics-of-big-data/) - HBaseのようなワイドカラムストアの背後にある数学理論。
### 論文
* [Bigtable: A Distributed Storage System for Structured Data](https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf) - HBaseの着想源。
* [Apache Hadoop Goes Realtime at Facebook](https://pdfs.semanticscholar.org/865a/215390cd49af9e4941e03107120e631dcaa0.pdf) - FacebookがHBaseを本番導入した方法。
### コミュニティ
* [Blog](https://blogs.apache.org/hbase/)
* [Mailing Lists](http://hbase.apache.org/mail-lists.html)
* [Reddit](https://www.reddit.com/r/hbase/)
* [Stack Overflow](https://stackoverflow.com/questions/tagged/hbase)
* [Twitter](https://twitter.com/HBase)

## ライセンス
<p xmlns:dct="http://purl.org/dc/terms/">
<a rel="license" href="http://creativecommons.org/publicdomain/mark/1.0/">
<img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/publicdomain.svg"
     style="border-style: none;" alt="Public Domain Mark" />
</a>
