---
title: "Awesome Spark"
description: "Sparkを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-awesome-spark-awesome-spark-readme-md"
---

# Awesome Spark

Sparkを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## パッケージ

### 言語バインディング

* [Kotlin for Apache Spark](https://github.com/Kotlin/kotlin-spark-api) <img src="https://img.shields.io/github/last-commit/Kotlin/kotlin-spark-api.svg"> - Kotlin APIバインディングと拡張です。
* [.NET for Apache Spark](https://github.com/dotnet/spark) <img src="https://img.shields.io/github/last-commit/dotnet/spark.svg"> - .NETバインディングです。
* [sparklyr](https://github.com/rstudio/sparklyr) <img src="https://img.shields.io/github/last-commit/rstudio/sparklyr.svg"> - [`dplyr`](https://github.com/hadley/dplyr)を使う代替Rバックエンドです。
* [sparkle](https://github.com/tweag/sparkle) <img src="https://img.shields.io/github/last-commit/tweag/sparkle.svg"> - Apache Spark上のHaskellです。
* [spark-connect-rs](https://github.com/sjrusso8/spark-connect-rs) <img src="https://img.shields.io/github/last-commit/sjrusso8/spark-connect-rs.svg"> - Rustバインディングです。
* [spark-connect-go](https://github.com/apache/spark-connect-go) <img src="https://img.shields.io/github/last-commit/apache/spark-connect-go.svg"> - Golangバインディングです。
* [spark-connect-csharp](https://github.com/mdrakiburrahman/spark-connect-csharp) <img src="https://img.shields.io/github/last-commit/mdrakiburrahman/spark-connect-csharp.svg"> - C#バインディングです。

### ノートブックとIDE
* [almond](https://almond.sh/) <img src="https://img.shields.io/github/last-commit/almond-sh/almond.svg"> - [Jupyter](https://jupyter.org/)向けのScalaカーネルです。
* [Apache Zeppelin](https://zeppelin.incubator.apache.org/) <img src="https://img.shields.io/github/last-commit/apache/zeppelin.svg"> - プラグイン可能なバックエンド、統合プロット、標準での広範なSparkサポートにより、対話的データ分析を可能にするWebベースノートブックです。
* [Polynote](https://polynote.org/)  <img src="https://img.shields.io/github/last-commit/polynote/polynote.svg"> - IDEに着想を得たポリグロットノートブックです。一つのノートブック内で複数言語を混在させ、言語間でシームレスにデータを共有できます。不変のデータモデルにより再現可能なノートブックを促進します。[Netflix](https://medium.com/netflix-techblog/open-sourcing-polynote-an-ide-inspired-polyglot-notebook-7f929d3f447)発です。
* [sparkmagic](https://github.com/jupyter-incubator/sparkmagic) <img src="https://img.shields.io/github/last-commit/jupyter-incubator/sparkmagic.svg"> - [Jupyter](https://jupyter.org/)ノートブックで、[Livy](https://github.com/cloudera/livy)経由でリモートSparkクラスターを対話的に扱うためのmagicsとカーネルです。

### 汎用ライブラリ

* [itachi](https://github.com/yaooqinn/itachi) <img src="https://img.shields.io/github/last-commit/yaooqinn/itachi.svg"> - 現代的なデータベース管理システムの有用な関数をApache Sparkへもたらすライブラリです。
* [spark-daria](https://github.com/mrpowers-io/spark-daria) <img src="https://img.shields.io/github/last-commit/mrpowers-io/spark-daria.svg"> - 生産性を高めるための必須Spark関数と拡張を備えたScalaライブラリです。
* [quinn](https://github.com/mrpowers-io/quinn) <img src="https://img.shields.io/github/last-commit/mrpowers-io/quinn.svg"> - spark-dariaのネイティブPySpark実装です。
* [Apache DataFu](https://github.com/apache/datafu/tree/master/datafu-spark) <img src="https://img.shields.io/github/last-commit/apache/datafu.svg"> - 汎用関数とUDF群のライブラリです。
* [Joblib Apache Spark Backend](https://github.com/joblib/joblib-spark) <img src="https://img.shields.io/github/last-commit/joblib/joblib-spark.svg"> - Sparkクラスター上でタスクを実行する[`joblib`](https://github.com/joblib/joblib)バックエンドです。

### SQLデータソース

SparkSQLにはファイル向けの[複数の組み込みData Sources](https://spark.apache.org/docs/latest/sql-data-sources-load-save-functions.html#manually-specifying-options)があります。`csv`、`json`、`parquet`、`orc`、`avro`が含まれます。JDBCデータベースとApache Hiveもサポートします。以下のパッケージを含めるか独自実装を書くことで、追加データソースを利用できます。

* [Spark XML](https://github.com/databricks/spark-xml) <img src="https://img.shields.io/github/last-commit/databricks/spark-xml.svg"> - XMLパーサー・ライターです。
* [Spark Cassandra Connector](https://github.com/datastax/spark-cassandra-connector) <img src="https://img.shields.io/github/last-commit/datastax/spark-cassandra-connector.svg"> - データソースとAPI、任意のクエリを含むCassandraサポートです。
* [Mongo-Spark](https://github.com/mongodb/mongo-spark) <img src="https://img.shields.io/github/last-commit/mongodb/mongo-spark.svg"> - 公式MongoDBコネクターです。

### ストレージ

* [Delta Lake](https://github.com/delta-io/delta) <img src="https://img.shields.io/github/last-commit/delta-io/delta.svg"> - ACIDトランザクションを備えるストレージ層です。
* [Apache Hudi](https://github.com/apache/hudi) <img src="https://img.shields.io/github/last-commit/apache/hudi.svg"> - ビッグデータ上のアップサート、削除、増分処理です。
* [Apache Iceberg](https://github.com/apache/iceberg) <img src="https://img.shields.io/github/last-commit/apache/iceberg.svg"> - ビッグデータ上のアップサート、削除、増分処理です。
* [lakeFS](https://docs.lakefs.io/integrations/spark.html) <img src="https://img.shields.io/github/last-commit/treeverse/lakefs.svg"> - lakeFSのアトミックなバージョン付きストレージ層との統合です。

### バイオインフォマティクス

* [ADAM](https://github.com/bigdatagenomics/adam) <img src="https://img.shields.io/github/last-commit/bigdatagenomics/adam.svg"> - ゲノミクスデータの分析向けに設計されたツール群です。
* [Hail](https://github.com/hail-is/hail) <img src="https://img.shields.io/github/last-commit/hail-is/hail.svg"> - 遺伝解析フレームワークです。

### GIS

* [Apache Sedona](https://github.com/apache/incubator-sedona) <img src="https://img.shields.io/github/last-commit/apache/incubator-sedona.svg"> - 大規模な空間データを処理するクラスターコンピューティングシステムです。

### グラフ処理

* [GraphFrames](https://github.com/graphframes/graphframes) <img src="https://img.shields.io/github/last-commit/graphframes/graphframes.svg"> - データフレームベースのグラフAPIです。
* [neo4j-spark-connector](https://github.com/neo4j-contrib/neo4j-spark-connector) <img src="https://img.shields.io/github/last-commit/neo4j-contrib/neo4j-spark-connector.svg"> - RDD、DataFrame、GraphX / GraphFramesをサポートする、BoltプロトコルベースのNeo4jコネクターです。

### 機械学習拡張

* [Apache SystemML](https://systemml.apache.org/) <img src="https://img.shields.io/github/last-commit/apache/systemml.svg"> - Spark上の宣言的機械学習フレームワークです。
* [Mahout Spark Bindings](https://mahout.apache.org/users/sparkbindings/home.html) \[status unknown\] - R風構文を持つ線形代数DSLとオプティマイザーです。
* [KeystoneML](http://keystone-ml.org/) - RDDによる型安全な機械学習パイプラインです。
* [JPMML-Spark](https://github.com/jpmml/jpmml-spark) <img src="https://img.shields.io/github/last-commit/jpmml/jpmml-spark.svg"> - Spark ML向けのPMML変換ライブラリです。
* [ModelDB](https://mitdbg.github.io/modeldb) <img src="https://img.shields.io/github/last-commit/mitdbg/modeldb.svg"> - `spark.ml`および[`scikit-learn`](https://github.com/scikit-learn/scikit-learn) <img src="https://img.shields.io/github/last-commit/scikit-learn/scikit-learn.svg">の機械学習モデルを管理するシステムです。
* [Sparkling Water](https://github.com/h2oai/sparkling-water) <img src="https://img.shields.io/github/last-commit/h2oai/sparkling-water.svg"> - [H2O](http://www.h2o.ai/)との相互運用レイヤーです。
* [BigDL](https://github.com/intel-analytics/BigDL) <img src="https://img.shields.io/github/last-commit/intel-analytics/BigDL.svg"> - 分散ディープラーニングライブラリです。
* [MLeap](https://github.com/combust/mleap) <img src="https://img.shields.io/github/last-commit/combust/mleap.svg"> - `o.a.s.ml`モデルを`SparkSession`に依存せずにデプロイできる実行エンジンおよびシリアライズ形式です。
* [Microsoft ML for Apache Spark](https://github.com/Azure/mmlspark) <img src="https://img.shields.io/github/last-commit/Azure/mmlspark.svg"> - LightGBM、Vowpal Wabbit、OpenCV、ディープラーニング、Cognitive Services、モデルデプロイメントをサポートする分散MLライブラリです。
* [MLflow](https://mlflow.org/docs/latest/python_api/mlflow.spark.html#module-mlflow.spark) <img src="https://img.shields.io/github/last-commit/mlflow/mlflow.svg"> - 機械学習オーケストレーションプラットフォームです。

### ミドルウェア

* [Livy](https://github.com/apache/incubator-livy) <img src="https://img.shields.io/github/last-commit/apache/incubator-livy.svg"> - 幅広い言語（Python、R、Scala）をサポートし、対話セッションの維持とオブジェクト共有を可能にするRESTサーバーです。
* [spark-jobserver](https://github.com/spark-jobserver/spark-jobserver) <img src="https://img.shields.io/github/last-commit/spark-jobserver/spark-jobserver.svg"> - いわゆる名前付きオブジェクトを用いたオブジェクト共有をサポートするシンプルなSpark as a Serviceです。JVM専用です。
* [Apache Toree](https://github.com/apache/incubator-toree) <img src="https://img.shields.io/github/last-commit/apache/incubator-toree.svg"> - 対話型アプリケーション向けのIPythonプロトコルベースのミドルウェアです。
* [Apache Kyuubi](https://github.com/apache/kyuubi) <img src="https://img.shields.io/github/last-commit/apache/kyuubi.svg"> - Apache Spark上に構築された、大規模データ処理および分析用の分散マルチテナントJDBCサーバーです。

### 監視

* [Data Mechanics Delight](https://github.com/datamechanics/delight) <img src="https://img.shields.io/github/last-commit/datamechanics/delight.svg"> - クロスプラットフォームの監視ツール（Spark UI / Spark History Serverの代替）です。

### ユーティリティ

* [sparkly](https://github.com/Tubular/sparkly) <img src="https://img.shields.io/github/last-commit/Tubular/sparkly.svg"> - PySpark向けのヘルパーとシンタックスシュガーです。
* [Flintrock](https://github.com/nchammas/flintrock) <img src="https://img.shields.io/github/last-commit/nchammas/flintrock.svg"> - EC2上でSparkクラスターを起動するためのコマンドラインツールです。
* [Optimus](https://github.com/ironmussa/Optimus/) <img src="https://img.shields.io/github/last-commit/ironmussa/Optimus.svg"> - データクレンジングを簡略化することを目的とした、データクレンジングおよび探索ユーティリティです。

### 自然言語処理

* [spark-nlp](https://github.com/JohnSnowLabs/spark-nlp) <img src="https://img.shields.io/github/last-commit/JohnSnowLabs/spark-nlp.svg"> - Apache Spark ML上に構築された自然言語処理ライブラリです。

### ストリーミング

* [Apache Bahir](https://bahir.apache.org/) <img src="https://img.shields.io/github/last-commit/apache/bahir.svg"> - Spark 2.0から除外されたストリーミングコネクター（Akka、MQTT、Twitter、ZeroMQ）のコレクションです。

### インターフェース

* [Apache Beam](https://beam.apache.org/) <img src="https://img.shields.io/github/last-commit/apache/beam.svg"> - バッチおよびストリーミングアプリケーションの両方をサポートする統合データ処理エンジンです。Apache Sparkはサポート対象の実行環境の一つです。
* [Koalas](https://github.com/databricks/koalas) <img src="https://img.shields.io/github/last-commit/databricks/koalas.svg"> - Apache Spark上のPandas DataFrame APIです。

### データ品質

* [deequ](https://github.com/awslabs/deequ) <img src="https://img.shields.io/github/last-commit/awslabs/deequ.svg"> - 大規模データセットのデータ品質を測定する「データのユニットテスト」を定義するための、Apache Spark上に構築されたライブラリです。
* [python-deequ](https://github.com/awslabs/python-deequ) <img src="https://img.shields.io/github/last-commit/awslabs/python-deequ.svg"> - Deequ向けのPython APIです。

### テスト

* [spark-testing-base](https://github.com/holdenk/spark-testing-base) <img src="https://img.shields.io/github/last-commit/holdenk/spark-testing-base.svg"> - 基本テストクラスのコレクションです。
* [spark-fast-tests](https://github.com/mrpowers-io/spark-fast-tests) <img src="https://img.shields.io/github/last-commit/mrpowers-io/spark-fast-tests.svg"> - 軽量で高速なテストフレームワークです。
* [chispa](https://github.com/MrPowers/chispa) <img src="https://img.shields.io/github/last-commit/MrPowers/chispa.svg"> - 見やすいエラーメッセージを備えたPySparkテストヘルパーです。

### ウェブアーカイブ

* [Archives Unleashed Toolkit](https://github.com/archivesunleashed/aut) <img src="https://img.shields.io/github/last-commit/archivesunleashed/aut.svg"> - ウェブアーカイブを分析するためのオープンソースツールキットです。

### ワークフロー管理

* [Cromwell](https://github.com/broadinstitute/cromwell#spark-backend) <img src="https://img.shields.io/github/last-commit/broadinstitute/cromwell.svg"> - [Sparkバックエンド](https://github.com/broadinstitute/cromwell#spark-backend)を備えたワークフロー管理システムです。

## リソース

### 書籍

* [Learning Spark, 2nd Edition](https://www.oreilly.com/library/view/learning-spark-2nd/9781492050032/) - Spark 3.0を扱うSpark API入門書です。基本概念を学ぶ優れた情報源です。
* [Advanced Analytics with Spark](http://shop.oreilly.com/product/0636920035091.do) - Spark処理パターンの有用なコレクションです。付属GitHubリポジトリ: [sryza/aas](https://github.com/sryza/aas)。
* [Mastering Apache Spark](https://jaceklaskowski.gitbooks.io/mastering-apache-spark/) - [Jacek Laskowski](https://github.com/jaceklaskowski)による興味深いノート集です。Spark内部のさまざまな側面に焦点を当てています。
* [Spark in Action](https://www.manning.com/books/spark-in-action) - Manningの「in action」シリーズに加わった400ページ超の書籍です。穏やかに段階を追って多くのトピックを扱います。提供されるMaven Archetypeを使った新規アプリケーションの起動方法、および[Sparkアプリケーション開発用にEclipseをセットアップする方法](http://freecontent.manning.com/how-to-start-developing-spark-applications-in-eclipse/)の無料抜粋があります。付属GitHubリポジトリは[こちら](https://github.com/spark-in-action/first-edition)です。

### 論文

* [Large-Scale Intelligent Microservices](https://arxiv.org/pdf/2009.08044.pdf) - データベース操作をウェブサービスプリミティブまで拡張する、Apache Sparkベースのマイクロサービスオーケストレーションフレームワークを提示するMicrosoftの論文です。
* [Resilient Distributed Datasets: A Fault-Tolerant Abstraction for In-Memory Cluster Computing](https://people.csail.mit.edu/matei/papers/2012/nsdi_spark.pdf) - 中核となる分散メモリー抽象化を紹介する論文です。
* [Spark SQL: Relational Data Processing in Spark](https://amplab.cs.berkeley.edu/wp-content/uploads/2015/03/SparkSQLSigmod2015.pdf) - リレーショナル基盤、コード生成、Catalystオプティマイザーを紹介する論文です。
* [Structured Streaming: A Declarative API for Real-Time Applications in Apache Spark](https://cs.stanford.edu/~matei/papers/2018/sigmod_structured_streaming.pdf) - Structured Streamingは新しい高水準ストリーミングAPIであり、静的リレーショナルクエリーを自動的に増分化することに基づく宣言型APIです。

### MOOC

* [Data Science and Engineering with Apache Spark (edX XSeries)](https://www.edx.org/xseries/data-science-engineering-apache-spark) - ソフトウェアエンジニアリングとデータサイエンスのさまざまな側面を扱う5つのコース（[Introduction to Apache Spark](https://www.edx.org/course/introduction-apache-spark-uc-berkeleyx-cs105x)、[Distributed Machine Learning with Apache Spark](https://www.edx.org/course/distributed-machine-learning-apache-uc-berkeleyx-cs120x)、[Big Data Analysis with Apache Spark](https://www.edx.org/course/big-data-analysis-apache-spark-uc-berkeleyx-cs110x)、[Advanced Apache Spark for Data Science and Data Engineering](https://www.edx.org/course/advanced-apache-spark-data-science-data-uc-berkeleyx-cs115x)、[Advanced Distributed Machine Learning with Apache Spark](https://www.edx.org/course/advanced-distributed-machine-learning-uc-berkeleyx-cs125x)）のシリーズです。Python向けです。
* [Big Data Analysis with Scala and Spark (Coursera)](https://www.coursera.org/learn/big-data-analysys) - Scala向けの入門コースです。[Functional Programming in Scala Specialization](https://www.coursera.org/specializations/scala)の一部です。

### ワークショップ

* [AMP Camp](http://ampcamp.berkeley.edu) - [UC Berkeley AMPLab](https://amplab.cs.berkeley.edu/)が主催する定期的なトレーニングイベントです。[Berkeley Data Analytics Stack](https://amplab.cs.berkeley.edu/software/)のさまざまなツールを扱う有用な演習と録画済みワークショップの情報源です。

### Sparkを使用するプロジェクト

* [Oryx 2](https://github.com/OryxProject/oryx) - [Lambda architecture](http://lambda-architecture.net/)プラットフォームであり、Apache Sparkおよび[Apache Kafka](http://kafka.apache.org/)上に構築され、リアルタイム大規模機械学習に特化しています。
* [Photon ML](https://github.com/linkedin/photon-ml) - 従来の一般化混合モデルおよび一般化加法混合効果モデルをサポートする機械学習ライブラリです。
* [PredictionIO](https://prediction.io/) - 開発者とデータサイエンティストが予測アプリケーションを短時間で構築・デプロイするための機械学習サーバーです。
* [Crossdata](https://github.com/Stratio/Crossdata) - 拡張DataSource APIとマルチユーザー環境を備えたデータ統合プラットフォームです。


### Dockerイメージ

- [apache/spark](https://hub.docker.com/r/apache/spark) - Apache Spark公式Dockerイメージです。
- [jupyter/docker-stacks/pyspark-notebook](https://github.com/jupyter/docker-stacks/tree/master/pyspark-notebook) - Jupyter NotebookおよびMesosクライアントを備えたPySparkです。
- [sequenceiq/docker-spark](https://github.com/sequenceiq/docker-spark) - [SequenceIQ](http://www.sequenceiq.com/)によるYarnイメージです。
- [datamechanics/spark](https://hub.docker.com/r/datamechanics/spark) - [Data Mechanics](https://www.datamechanics.co/)による、セットアップが簡単なApache Spark用Dockerイメージです。

### その他

- [Spark with Scala Gitter channel](https://gitter.im/spark-scala/Lobby) - [@deanwampler](https://github.com/deanwampler)が始めた「ScalaによるSparkプログラミングの利用について議論し、質問する場」です。
- [Apache Spark User List](http://apache-spark-user-list.1001560.n3.nabble.com/)および[Apache Spark Developers List](http://apache-spark-developers-list.1001551.n3.nabble.com/) - それぞれ利用に関する質問と開発トピックに特化したメーリングリストです。

## 参考文献

<p id="wikipedia-2017">Wikipedia. 2017. 「Apache Spark — Wikipedia, the Free Encyclopedia」。 <a href="https://en.wikipedia.org/w/index.php?title=Apache_Spark&amp;oldid=781182753" class="uri">https://en.wikipedia.org/w/index.php?title=Apache_Spark&amp;oldid=781182753</a>。</p>

## ライセンス

<p xmlns:dct="http://purl.org/dc/terms/">
<a rel="license" href="http://creativecommons.org/publicdomain/mark/1.0/">
<img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/publicdomain.svg"
     style="border-style: none;" alt="Public Domain Mark" />
</a>
<br />
この作品（<a href="https://github.com/awesome-spark/awesome-spark" rel="dct:creator">https://github.com/awesome-spark/awesome-spark</a>による<span property="dct:title">Awesome Spark</span>）は、<a href="https://github.com/zero323" rel="dct:publisher"><span property="dct:title">Maciej Szymkiewicz</span></a>により識別されており、既知の著作権上の制限はありません。
</p>

Apache Spark、Spark、Apache、およびSparkロゴは、<a href="https://www.apache.org/foundation/marks/">商標</a>であり、<a href="http://www.apache.org">The Apache Software Foundation</a>に帰属します。この編集物はThe Apache Software Foundationの承認を受けたものではありません。

[sindresorhus/awesome](https://github.com/sindresorhus/awesome)に着想を得ています。
