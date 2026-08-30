---
title: "manuzhang/awesome-streaming"
description: "manuzhang/awesome-streaming の正規スナップショット"
licenseSource: "github-manuzhang-awesome-streaming-readme-md"
---

<a id="awesome-streaming"></a>
## Awesome Streaming  [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Build Status](https://github.com/manuzhang/awesome-streaming/workflows/build/badge.svg)](https://github.com/manuzhang/awesome-streaming/actions)

優れた[ストリーミング（ストリーム処理）](http://radar.oreilly.com/2015/08/the-world-beyond-batch-streaming-101.html)フレームワーク、アプリケーション、読み物などを厳選したリストです。[他のAwesomeプロジェクト](https://github.com/sindresorhus/awesome)から着想を得ています。

<a id="website"></a>
## ウェブサイト

[https://manuzhang.github.io/awesome-streaming/](https://manuzhang.github.io/awesome-streaming/) は、このリストに掲載されたプロジェクトの**更新情報**を確認できる、より動的なウェブサイトです。

<a id="table-of-contents"></a>
## 目次

- [エンジンとプラットフォーム](#engines-and-platforms)
- [ライブラリ、SDK、プログラミングモデル](#libraries-sdks-and-programming-models)
- [データ統合とパイプライン](#data-integration-and-pipelines)
- [アプリケーションとツール](#applications-and-tools)
- [マネージド／クローズドソース](#managed-and-closed-source)
- [ベンチマーク](#benchmarks)
- [読み物](#readings)

<a id="engines-and-platforms"></a>
### エンジンとプラットフォーム

- [Aeron](https://github.com/aeron-io/aeron) <sub>![Java/C++][language-java-cpp]</sub> - 信頼性の高いUDPユニキャスト、マルチキャスト、IPCメッセージ転送。
- [Apache Apex](https://github.com/apache/apex-core) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - 大規模データストリームおよびバッチ処理向けの統合プラットフォーム
- [Apache Flink](https://github.com/apache/flink) <sub>![Java][language-java]</sub> - 有限／無限ストリーム上でステートフルな計算を実行する分散エンジン。
- [Apache Heron](https://github.com/apache/incubator-heron) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Twitterで開発された元の分散かつ障害耐性のストリーム処理エンジン。
- [Apache Kafka](https://github.com/apache/kafka) <sub>![Java/Scala][language-java-scala]</sub> - 高性能データパイプラインおよびアプリケーション向けの分散イベントストリーミングプラットフォーム
- [Apache Pulsar](https://github.com/apache/pulsar) <sub>![Java][language-java]</sub> - 分散型のパブリッシュ・サブスクリプションメッセージおよびイベントストリーミングプラットフォーム
- [Apache RocketMQ](https://github.com/apache/rocketmq) <sub>![Java][language-java]</sub> - イベント駆動アプリケーション向けのクラウドネイティブなメッセージおよびストリーミングプラットフォーム
- [Apache Samza](https://github.com/apache/samza) <sub>![Java/Scala][language-java-scala]</sub> - Apache Kafkaに基づく分散ストリーム処理フレームワークで、スタンドアローンおよびYARNのデプロイオプションを提供
- [Apache Spark Streaming](https://github.com/apache/spark) <sub>![Scala/Java/Python/R][language-scala-java-python-r]</sub> - Apache Spark上でスケーラブルかつ障害耐性のストリーム処理
- [Apache Storm](https://github.com/apache/storm) <sub>![Java][language-java]</sub> - 無限ストリームのデータを信頼性高く処理するための分散リアルタイム計算システム
- [Apache StreamPipes](https://github.com/apache/streampipes) <sub>![Java/Python/TypeScript][language-java-python-typescript]</sub> - インダストリアルIoT向けのセルフサービスプラットフォームで、データストリームの接続、分析、探索を行う
- [ArkFlow](https://github.com/arkflow-rs/arkflow) <sub>![Rust][language-rust]</sub> - 高性能ストリーム処理エンジンで、拡張可能なソース、プロセッサ、シンクを提供
- [Arroyo](https://github.com/ArroyoSystems/arroyo) <sub>![Rust][language-rust]</sub> - 無限データ上の状態を持つSQL計算に適した分散ストリーム処理エンジン
- [AthenaX](https://github.com/uber-archive/AthenaX) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Uberが開発し、現在は廃止されたSQLベースのストリーミング分析プラットフォーム。
- [AutoMQ](https://github.com/AutoMQ/automq) <sub>![Java/Scala][language-java-scala]</sub> - 永続データをオブジェクトストレージへ保存する、ディスクレスのKafka互換ストリーミングプラットフォーム。
- [Bytewax](https://github.com/bytewax/bytewax) <sub>![Python/Rust][language-python-rust]</sub> - コミュニティが維持するPythonフレームワークで、Rustベースの分散エンジンで状態を持つストリーム処理を提供
- [eKuiper](https://github.com/lf-edge/ekuiper) <sub>![Go][language-go]</sub> - リソース制限されたIoTエッジデバイス向けの軽量データストリーム処理エンジン
- [Esper](https://github.com/espertechinc/esper) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - 複雑イベント処理、ストリーミングSQL、イベントシリーズ分析エンジン
- [Fluvio](https://github.com/fluvio-community/fluvio) <sub>![Rust/WASM][language-rust-wasm]</sub> - コンポジブルで状態を持つデータストリーミングシステムで、プログラム可能なインライン計算を提供
- [Gazette](https://github.com/gazette/core) <sub>![Go][language-go]</sub> - クラウドストレージをバックアップしたストリーミングインフラで、SQL、バッチ、ミリ秒遅延ストリーム処理を統合
- [Gearpump](https://github.com/gearpump/gearpump) <sub>![Scala][language-scala]</sub> - Akkaに基づく軽量なリアルタイム分散ストリーミングエンジン
- [hailstorm](https://github.com/hailstorm-hs/hailstorm) <sub>![Archived][archived-badge]</sub> <sub>![Haskell][language-haskell]</sub> - Stormをベースにした、正確に1回実行（exactly-once）の意味を持つ分散ストリーミング処理
- [Hazelcast Jet](https://github.com/hazelcast/hazelcast-jet) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - 開発がHazelcast Platformに移行したストリームおよびバッチ処理エンジン
- [HStreamDB](https://github.com/hstreamdb/hstream) <sub>![Haskell][language-haskell]</sub> - IoTデータのストレージとリアルタイム処理に特化したクラウドネイティブストリーミングデータベース
- [ksqlDB](https://github.com/confluentinc/ksql) <sub>![Java][language-java]</sub> - ストリーム処理アプリケーションに特化したソース公開データベース
- [LaminarDB](https://github.com/laminardb/laminardb) <sub>![Rust][language-rust]</sub> - Apache ArrowおよびDataFusionに基づく埋め込み型ストリーミングSQLエンジン
- [LightSaber](https://github.com/lsds/LightSaber) <sub>![Archived][archived-badge]</sub> <sub>![C++][language-cpp]</sub> - ウインドウ集計にコード生成を用いたマルチコアストリーミング処理エンジン
- [LogDevice](https://github.com/facebookarchive/LogDevice) <sub>![Archived][archived-badge]</sub> <sub>![C++][language-cpp]</sub> - Facebookのアーカイブされた順序データ用分散ストレージシステム
- [Maki Nage](https://github.com/maki-nage/makinage) <sub>![Archived][archived-badge]</sub> <sub>![Python][language-python]</sub> - KafkaおよびReactiveXをベースにしたデータサイエンティスト向けストリーミング処理フレームワーク
- [Mantis](https://github.com/Netflix/mantis) <sub>![Java][language-java]</sub> - Netflixが開発したリアルタイムかつ運用中心のストリーミング処理アプリケーション構築プラットフォーム
- [Materialize](https://materialize.com) <sub>![Rust][language-rust]</sub> - 変化するデータ上での継続的に更新されるビューを維持するインクリメンタルSQLエンジン
- [Metaq](https://github.com/killme2008/Metamorphosis) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Taobaoの分散メッセージングシステム
- [mupd8 (Muppet)](https://github.com/walmartlabs/mupd8) <sub>![Archived][archived-badge]</sub> <sub>![Scala/Java][language-scala-java]</sub> - ファストモーブデータストリームの処理に特化したMapReduceスタイルのフレームワーク
- [NATS Streaming](https://github.com/nats-io/nats-streaming-server) <sub>![Archived][archived-badge]</sub> <sub>![Go][language-go]</sub> - 非推奨のディスクベースメッセージングシステムで、NATS JetStreamに置き換えられている
- [NebulaStream](https://github.com/nebulastream/nebulastream) <sub>![C++][language-cpp]</sub> - クラウド・エッジ・センサー環境向けデータ管理システム
- [NSQ](https://github.com/nsqio/nsq) <sub>![Go][language-go]</sub> - スケールを考慮したリアルタイム分散メッセージングプラットフォーム
- [Numaflow](https://github.com/numaproj/numaflow) <sub>![Rust/Go/TypeScript][language-rust-go-typescript]</sub> - Kubernetesネイティブで、言語に依存しないスケーラブルなイベント駆動アプリケーションプラットフォーム
- [Onyx](https://github.com/onyx-platform/onyx) <sub>![Archived][archived-badge]</sub> <sub>![Clojure][language-clojure]</sub> - 分散型・マスタレス・障害耐性のあるデータ処理プラットフォーム
- [PipelineDB](https://github.com/pipelinedb/pipelinedb) <sub>![Archived][archived-badge]</sub> <sub>![C][language-c]</sub> - 未維持のPostgreSQL拡張で、時系列データに対する継続的なSQL集計を実現
- [Proton](https://github.com/timeplus-io/proton) <sub>![C++][language-cpp]</sub> - ClickHouseをベースにした統合ストリーミングおよび歴史データ分析データベース
- [Redpanda](https://github.com/redpanda-data/redpanda) <sub>![C++][language-cpp]</sub> - ZooKeeperやJVMなしでKafka APIと互換性のあるストリーミングデータプラットフォーム
- [RisingWave](https://github.com/risingwavelabs/risingwave) <sub>![Rust][language-rust]</sub> - イベント駆動アプリケーション、リアルタイムETL、継続的な分析向けのPostgreSQLと互換性のあるストリーミングデータベース
- [S4](https://github.com/apache/incubator-retired-s4) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - 連続した無限データストリームの処理を行うための退役した分散プラットフォーム
- [SABER](https://github.com/lsds/Saber) <sub>![Archived][archived-badge]</sub> <sub>![Java/C][language-java-c]</sub> - ウィンドウベースのハイブリッドCPU/GPUストリーミング処理エンジン
- [Scramjet Cloud Platform](https://github.com/scramjetorg/transform-hub) <sub>![TypeScript/Python][language-typescript-python]</sub> - エッジ、サーバー、クラウドインフラでデータ処理プログラムを実行・管理するための分散ランタイム
- [SensorBee](https://github.com/sensorbee/sensorbee) <sub>![Archived][archived-badge]</sub> <sub>![Go][language-go]</sub> - IoT向けに停止した軽量ストリーミング処理エンジン
- [Siddhi](https://github.com/siddhi-io/siddhi) <sub>![Java][language-java]</sub> - ストリーミングSQLおよび複雑イベント処理エンジン
- [SPQR](https://github.com/ottogroup/SPQR) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - パイプラインを介して高量データストリームを処理するための動的フレームワーク
- [Squall](https://github.com/epfldata/squall) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Apache Stormに基づくオンラインSQLクエリ処理エンジン
- [StreamCQL](https://github.com/Zhiqiang-He/StreamCQL) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Stormベースのリアルタイム計算用継続クエリ言語
- [Teknek](https://github.com/edwardcapriolo/teknek-core) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - インタラクティブなストリームオペレータ言語シェルを備えたストリーミング処理プラットフォーム
- [Tigon](https://github.com/cdapio/tigon) <sub>![Archived][archived-badge]</sub> <sub>![C++/Java][language-cpp-java]</sub> - HadoopおよびHBaseに基づく高スループットリアルタイムストリーミング処理フレームワーク
- [Trill](https://github.com/microsoft/Trill) <sub>![Archived][archived-badge]</sub> <sub>![C#][language-csharp]</sub> - Microsoft Researchから提供された時系列およびストリーミングデータの単一ノードクエリプロセッサ
- [Wally](https://github.com/WallarooLabs/wally) <sub>![Archived][archived-badge]</sub> <sub>![Pony][language-pony]</sub> - かつてWallarooと呼ばれた分散ストリーミング処理フレームワーク
- [Wingfoil](https://github.com/wingfoil-io/wingfoil) <sub>![Rust/Python/TypeScript][language-rust-python-typescript]</sub> - レイテンシが重要なシステム向けのグラフベースストリーミング処理エンジン

<a id="libraries-sdks-and-programming-models"></a>
### ライブラリ、SDK、プログラミングモデル

- [Akka](https://github.com/akka/akka-core) <sub>![Scala/Java][language-scala-java]</sub> - JVM上で並列・分散・耐障害アプリケーションを実行・管理するためのツールキットおよびランタイム
- [Akka Streams](https://github.com/akka/akka-core) <sub>![Scala/Java][language-scala-java]</sub> - Akkaアクタに基づく反応型ストリーム実装
- [Apache Beam](https://github.com/apache/beam) <sub>![Java/Python/Go][language-java-python-go]</sub> - バッチおよびストリーミングデータ処理向けの統一プログラミングモデルおよび言語特定のSDK
- [Apache Edgent](https://github.com/apache/incubator-retired-edgent) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - ゲートウェイおよびエッジデバイス上のストリーミング分析向けに退役したプログラミングモデルおよびランタイム
- [Apache Kafka Streams](https://github.com/apache/kafka) <sub>![Java][language-java]</sub> - Apache Kafkaに含まれるストリーミング処理ライブラリ
- [Apache Pekko](https://github.com/apache/pekko) <sub>![Scala/Java][language-scala-java]</sub> - 非同期、分散、耐障害アプリケーション向けオープンソースツールキット。Akka 2.6から分岐したもの。
- [Apache SAMOA](https://github.com/apache/incubator-samoa) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - 停用された分散ストリーミング機械学習フレームワーク。
- [Apache StormCrawler](https://github.com/apache/stormcrawler) <sub>![Java][language-java]</sub> - Apache StormをベースとしたスケーラブルなウェブスクレイピングSDK。
- [CapyMOA](https://github.com/adaptive-machine-learning/CapyMOA) <sub>![Python/Java][language-python-java]</sub> - データストリーム向けの機械学習ライブラリ。Python APIとMOAバックエンドを備える。
- [coast](https://github.com/bkirwi/coast) <sub>![Archived][archived-badge]</sub> <sub>![Scala][language-scala]</sub> - Apache Samza上で正確1回データフロー図を構築するためのDSL。
- [Daggy](https://github.com/synacker/daggy) <sub>![C++][language-cpp]</sub> - データストリームの集計およびキャプチャを行うためのユーティリティおよび開発ライブラリ。
- [DataSketches](https://github.com/apache/datasketches-java) <sub>![Java][language-java]</sub> - ストキャスティックストリーミングアルゴリズム（スケッチ）を含むApacheライブラリ。
- [FastStream](https://github.com/ag2ai/faststream) <sub>![Python][language-python]</sub> - Kafka、RabbitMQ、NATS、Redis、MQTTを用いたイベント駆動アプリケーションの構築に用いる非同期フレームワーク。
- [Faust](https://github.com/robinhood/faust) <sub>![Archived][archived-badge]</sub> <sub>![Python][language-python]</sub> - Kafka Streamsにインスパイアされた、廃止されたPythonストリーム処理ライブラリ。
- [FS2](https://github.com/typelevel/fs2) <sub>![Scala][language-scala]</sub> - Scala向けの合成ストリーミングI/Oライブラリ。
- [Jubatus](https://github.com/jubatus/jubatus) <sub>![Archived][archived-badge]</sub> <sub>![C++][language-cpp]</sub> - オンライン機械学習向けの分散処理フレームワークおよびライブラリ。
- [Kzmlabs StateFun Actors](https://github.com/kzmlabs/flink-statefun) <sub>![Java][language-java]</sub> - Apache Flink 2.xにおける状態を持つアクター。キーごとの持続可能な状態、正確1回のメッセージング、KafkaおよびKinesis I/Oを備える。
- [MediaPipe](https://github.com/google-ai-edge/mediapipe) <sub>![C++/Python/Java/TypeScript][language-cpp-python-java-typescript]</sub> - ライブおよびストリーミングメディア向けのクロスプラットフォームかつカスタマイズ可能な機械学習ソリューション。
- [Monix](https://github.com/monix/monix) <sub>![Scala][language-scala]</sub> - 非同期およびイベントベースプログラム向けの高性能ScalaおよびScala.jsライブラリ。
- [Numalogic](https://github.com/numaproj/numalogic) <sub>![Python][language-python]</sub> - 機械学習モデルおよびツールのコレクション。運用時系列データにおける異常検知および予測に用いる。
- [Pulsar](https://github.com/quantmind/pulsar) <sub>![Archived][archived-badge]</sub> <sub>![Python][language-python]</sub> - Python向けアクターベースのイベント駆動コンカレンシーフレームワーク。
- [Quix Streams](https://github.com/quixio/quix-streams) <sub>![Python][language-python]</sub> - Apache Kafka上でリアルタイムデータエンジニアリング、分析、機械学習を行うPythonフレームワーク。
- [River](https://github.com/online-ml/river) <sub>![Python][language-python]</sub> - Python向けオンライン機械学習ライブラリ。
- [samza-luwak](https://github.com/romseygeek/samza-luwak) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Apache SamzaとLuwakのストレージクエリエンジンを統合し、全文ストリーム検索を実現するもの。
- [Scramjet C++](https://github.com/scramjetorg/framework-cpp) <sub>![Archived][archived-badge]</sub> <sub>![C++][language-cpp]</sub> - C++向けの反応型ストリームプログラミングフレームワーク。
- [Scramjet Python](https://github.com/scramjetorg/framework-python) <sub>![Archived][archived-badge]</sub> <sub>![Python][language-python]</sub> - Python向けの反応型ストリームプログラミングフレームワーク。
- [Scramjet TypeScript](https://github.com/scramjetorg/framework-js) <sub>![Archived][archived-badge]</sub> <sub>![TypeScript][language-typescript]</sub> - 非同期JavaScriptおよびTypeScriptアプリケーション向けの反応型ストリームプログラミングフレームワーク。
- [StormCV](https://github.com/sensorstorm/StormCV) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Apache Storm向けのコンピュータビジョン操作およびデータモデル。
- [Stream Ops](https://github.com/nanosai/stream-ops-java) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Java向けの埋め込み型データストリーミングエンジンおよびストリーム処理API。
- [streamDM](https://github.com/huawei-noah/streamDM) <sub>![Archived][archived-badge]</sub> <sub>![Scala][language-scala]</sub> - Huaweiが開発した、Spark Streamingを用いたデータストリームの分析用ライブラリ。
- [Streamiz.Kafka.Net](https://github.com/LGouellec/streamiz) <sub>![C#][language-csharp]</sub> - Apache Kafka向けの.NETストリーム処理ライブラリ。
- [Streamparse](https://github.com/pystorm/streamparse) <sub>![Archived][archived-badge]</sub> <sub>![Python][language-python]</sub> - Apache Storm向けのPython API、コマンドラインツール、およびトポロジDSL。
- [Streamz](https://github.com/python-streamz/streamz) <sub>![Python][language-python]</sub> - 分岐、結合、フロー制御、バックプレスの機能を備えた継続的なデータパイプラインの構築用ライブラリ。
- [Summingbird](https://github.com/twitter/summingbird) <sub>![Archived][archived-badge]</sub> <sub>![Scala][language-scala]</sub> - StormおよびScalding上でストリームMapReduce計算を表現するための廃止されたライブラリ。
- [Swave](https://github.com/sirthias/swave) <sub>![Archived][archived-badge]</sub> <sub>![Scala][language-scala]</sub> - Scala向けの軽量な反応型ストリームインフラストラクチャツールキット。
- [Tributary](https://github.com/1kbgz/tributary) <sub>![Python][language-python]</sub> - 同期、反応型、遅延評価型データフロー図の構築用Pythonライブラリ。
- [trident-ml](https://github.com/pmerienne/trident-ml) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Apache Storm Tridentに基づくオンライン機械学習ライブラリ。
- [WindFlow](https://github.com/ParaGroup/WindFlow) <sub>![C++][language-cpp]</sub> - 多コアCPUおよびGPU向けのデータストリーム処理並列ライブラリ。
- [Yurita](https://github.com/paypal/yurita) <sub>![Archived][archived-badge]</sub> <sub>![Scala][language-scala]</sub> - PayPalがSpark Structured Streamingをベースに開発した異常検知フレームワーク。

<a id="data-integration-and-pipelines"></a>
### データ統合とパイプライン

- [Apache Flume](https://github.com/apache/logging-flume) <sub>![Java][language-java]</sub> - 大量のログのようなデータを収集・集計・移動するための分散サービス。
- [Brooklin](https://github.com/linkedin/Brooklin) <sub>![Java][language-java]</sub> - ハイブリッドシステム間でスケール可能な信頼性の高い近接データストリーミングを実現する分散システム。
- [Bruin](https://github.com/bruin-data/bruin) <sub>![Go][language-go]</sub> - イングレス、SQLおよびPython変換、データ品質チェックを統合した端到端データパイプラインツール。
- [Camus](https://github.com/LinkedInAttic/camus) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - LinkedInが廃止した、従来のKafka-to-HDFSパイプライン。
- [CocoIndex](https://github.com/cocoindex-io/cocoindex) <sub>![Rust/Python][language-rust-python]</sub> - AIおよびエージェントワークロードが継続的に更新される場合のインクリメンタルデータ変換エンジン。
- [Databus](https://github.com/linkedin/databus) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - LinkedInのソースに依存しない分散変更データキャプチャシステム。
- [faucet-stream](https://github.com/faucet-hq/faucet-stream) <sub>![Rust][language-rust]</sub> - ETL、CDC、およびストリーミングデータ移動向けの構成駆動型プラットフォームおよび埋め込みライブラリ
- [inGestr](https://github.com/bruin-data/ingestr) <sub>![Go/Python][language-go-python]</sub> - データベース、SaaSアプリケーション、データウェアハウス間のデータコピー用のコマンドラインアプリケーションおよびPython SDK
- [Pathway](https://github.com/pathwaycom/pathway) <sub>![Python/Rust][language-python-rust]</sub> - ストリーミング処理、リアルタイム分析、AIデータパイプライン向けのPython ETLフレームワーク
- [Redpanda Connect](https://github.com/redpanda-data/connect) <sub>![Go][language-go]</sub> - ソースとシンク間のデータを移動・豊富化・変換・フィルタリングするための宣言型ストリームプロセッサ
- [RudderStack](https://github.com/rudderlabs/rudder-server) <sub>![Go][language-go]</sub> - イベントストリーミングおよびクラウドからウェアハウスへのデータパイプライン向けの開発者中心の顧客データプラットフォーム
- [Suro](https://github.com/Netflix/suro) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Netflixのデータパイプラインでアプリケーションイベントを収集・集計・配信
- [yasdb](https://github.com/JayJamieson/yasdb) <sub>![Go][language-go]</sub> - SlateDBオブジェクトストレージをバックエンドにした持続可能なストリームプロトコルサーバーで、オフセットベースのキャッチアップ読み取りとSSEまたはロングポールテールインをサポート

<a id="applications-and-tools"></a>
### アプリケーションとツール

- [beava](https://github.com/beava-dev/beava) <sub>![Rust/Python][language-rust-python]</sub> - メッセージブローカーなしで、個体ごとのカウンタと集計をクエリするためのシングルバイナリの機能サーバー
- [Eventum](https://github.com/eventum-generator/eventum) <sub>![Python/TypeScript][language-python-typescript]</sub> - シンセティックイベントストリームを生成するためのデータ生成プラットフォーム
- [javactrl-kafka](https://github.com/javactrl/javactrl-kafka) <sub>![Java][language-java]</sub> - コードファーストの分散ワークフローエンジンでマイクロサービスのオーケストレーションおよびビジネスプロセス自動化を実現
- [Nussknacker](https://github.com/TouK/nussknacker) <sub>![Scala][language-scala]</sub> - 実時間決定アルゴリズムの定義と実行を行うための視覚ツール
- [straw](https://github.com/rwalk/straw) <sub>![Archived][archived-badge]</sub> <sub>![Python/Java][language-python-java]</sub> - 実時間ストリーミング検索向けのプラットフォーム
- [StreamAlert](https://github.com/airbnb/streamalert) <sub>![Archived][archived-badge]</sub> <sub>![Python][language-python]</sub> - Airbnbのサーバレスフレームワークでリアルタイムセキュリティログの分析およびアラートを実行
- [Streamdal](https://github.com/streamdal/streamdal) <sub>![Archived][archived-badge]</sub> <sub>![TypeScript][language-typescript]</sub> - アプリケーションデータフロー内のPIIを検出するためのコードネイティブなデータプライバシーコントロール
- [StreamFlow](https://github.com/lmco/streamflow) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - ストリーム処理ワークフローの構築と監視を行うためのツール
- [StreamingBandit](https://github.com/Nth-iteration-labs/streamingbandit) <sub>![Python][language-python]</sub> - コンテクスト付きマルチアームバンディング実験の設定と評価を行うためのウェブアプリケーション
- [Streamline](https://github.com/hortonworks/streamline) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Apache Stormなどのエンジンを基盤としたHortonworksの視覚的なストリーム分析フレームワーク
- [Substation](https://github.com/brexhq/substation) <sub>![Go][language-go]</sub> - セキュリティイベントと監査ログのルーティング、正規化、情報付加を行うツールキット。
- [Turbine](https://github.com/Netflix/Turbine) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - NetflixがServer-Sent Event JSONストリームを集計するためのツール
- [Zilla](https://github.com/aklivity/zilla) <sub>![Java][language-java]</sub> - アプリケーション、API、エージェント、デバイスをイベントストリームに接続するためのマルチプロトコルゲートウェイ

<a id="managed-and-closed-source"></a>
### マネージド／クローズドソース

- [Amazon Kinesis Data Streams](https://aws.amazon.com/kinesis/data-streams/) - AWS上でリアルタイムデータストリームのイングレスと処理を行うための完全に管理されたサービス。
- [Azure Stream Analytics](https://azure.microsoft.com/en-us/products/stream-analytics) <sub>![SQL][language-sql]</sub> - クラウドおよびエッジでサーバーレスリアルタイム分析を提供する完全に管理されたサービス。
- [Concord](https://www.slideshare.net/concord-io/may-2016-data-by-the-bay-concord-simple-flexible-stream-processing-on-apache-mesos) <sub>![Archived][archived-badge]</sub> <sub>![C++][language-cpp]</sub> - Apache Mesosに基づいた歴史的な分散ストリーム処理フレームワーク。
- [Google Cloud Dataflow](https://cloud.google.com/dataflow/) <sub>![Java/Python/Go][language-java-python-go]</sub> - Apache Beamのバッチおよびストリーミングパイプラインを実行するための完全に管理されたサービス。
- [IBM Streams](https://www.ibm.com/support/pages/ibm-streams-life-cycle-guidance) <sub>![Archived][archived-badge]</sub> <sub>![Python/Java/Scala][language-python-java-scala]</sub> - 分散ストリーム処理およびリアルタイム分析用の廃止された専有プラットフォーム。
- [NVIDIA DeepStream SDK](https://developer.nvidia.com/deepstream-sdk) <sub>![C/C++/Python][language-c-cpp-python]</sub> - GStreamerに基づくツールキットで、オープンソースコンポーネントとNVIDIAの専有ライブラリを用いてリアルタイムAIストリーミング分析およびマルチセンサ処理を行う。

<a id="benchmarks"></a>
### ベンチマーク

- [Flotilla](https://github.com/tylertreat/Flotilla) <sub>![Archived][archived-badge]</sub> <sub>![Go][language-go]</sub> - スケーラブルなベンチマークにおけるメッセージキューのオーケストレーションを自動化するサービス。
- [storm-perf-test](https://github.com/yahoo/storm-perf-test) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - Apache Stormのパフォーマンスおよびストレステスト。
- [streaming-benchmarks](https://github.com/yahoo/streaming-benchmarks) <sub>![Archived][archived-badge]</sub> <sub>![Java][language-java]</sub> - ローレイテンシストリーム処理システム（Storm、Spark、Flinkを含む）のベンチマーク。

<a id="readings"></a>
### 読み物

1. [In-Stream Big Data Processing](https://highlyscalable.wordpress.com/2013/08/20/in-stream-big-data-processing/)
2. [The world beyond batch: Streaming 101](http://radar.oreilly.com/2015/08/the-world-beyond-batch-streaming-101.html) - Tyler Akidau著。
3. [Real Time Analytics: Algorithms and Systems (VLDB 2015)](https://arxiv.org/abs/1708.02621)
4. [Grokking Streaming Systems](https://www.manning.com/books/grokking-streaming-systems) - Josh Fischer、Ning Wang著。
5. [Streaming Systems: The What, Where, When, and How of Large-Scale Data Processing](https://www.oreilly.com/library/view/streaming-systems/9781491983867/) - Reuven Lax、Slava Chernyak、Tyler Akidau著。
6. [Data Pipelines with Apache Airflow](https://www.manning.com/books/data-pipelines-with-apache-airflow) - Bas P. Harenslak、Julian Rutger de Ruiter著。
7. [MillWheel: Fault-Tolerant Stream Processing at Internet Scale](https://research.google/pubs/millwheel-fault-tolerant-stream-processing-at-internet-scale/)

<a id="license"></a>
## ライセンス

![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)

[Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/) の下で提供されています。

[archived-badge]: https://img.shields.io/badge/status-archived-lightgrey
[language-c]: https://img.shields.io/badge/language-C-blue
[language-c-cpp-python]: https://img.shields.io/badge/language-C%2FC%2B%2B%2FPython-blue
[language-csharp]: https://img.shields.io/badge/language-C%23-blue
[language-cpp]: https://img.shields.io/badge/language-C%2B%2B-blue
[language-cpp-java]: https://img.shields.io/badge/language-C%2B%2B%2FJava-blue
[language-cpp-python-java-typescript]: https://img.shields.io/badge/language-C%2B%2B%2FPython%2FJava%2FTypeScript-blue
[language-clojure]: https://img.shields.io/badge/language-Clojure-blue
[language-go]: https://img.shields.io/badge/language-Go-blue
[language-go-python]: https://img.shields.io/badge/language-Go%2FPython-blue
[language-haskell]: https://img.shields.io/badge/language-Haskell-blue
[language-java]: https://img.shields.io/badge/language-Java-blue
[language-java-c]: https://img.shields.io/badge/language-Java%2FC-blue
[language-java-cpp]: https://img.shields.io/badge/language-Java%2FC%2B%2B-blue
[language-java-python-go]: https://img.shields.io/badge/language-Java%2FPython%2FGo-blue
[language-java-python-typescript]: https://img.shields.io/badge/language-Java%2FPython%2FTypeScript-blue
[language-java-scala]: https://img.shields.io/badge/language-Java%2FScala-blue
[language-pony]: https://img.shields.io/badge/language-Pony-blue
[language-python]: https://img.shields.io/badge/language-Python-blue
[language-python-java]: https://img.shields.io/badge/language-Python%2FJava-blue
[language-python-java-scala]: https://img.shields.io/badge/language-Python%2FJava%2FScala-blue
[language-python-rust]: https://img.shields.io/badge/language-Python%2FRust-blue
[language-python-typescript]: https://img.shields.io/badge/language-Python%2FTypeScript-blue
[language-rust]: https://img.shields.io/badge/language-Rust-blue
[language-rust-go-typescript]: https://img.shields.io/badge/language-Rust%2FGo%2FTypeScript-blue
[language-rust-python]: https://img.shields.io/badge/language-Rust%2FPython-blue
[language-rust-python-typescript]: https://img.shields.io/badge/language-Rust%2FPython%2FTypeScript-blue
[language-rust-wasm]: https://img.shields.io/badge/language-Rust%2FWASM-blue
[language-scala]: https://img.shields.io/badge/language-Scala-blue
[language-scala-java]: https://img.shields.io/badge/language-Scala%2FJava-blue
[language-scala-java-python-r]: https://img.shields.io/badge/language-Scala%2FJava%2FPython%2FR-blue
[language-sql]: https://img.shields.io/badge/language-SQL-blue
[language-typescript]: https://img.shields.io/badge/language-TypeScript-blue
[language-typescript-python]: https://img.shields.io/badge/language-TypeScript%2FPython-blue
