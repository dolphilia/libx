---
title: "mark-rushakoff/awesome-influxdb"
description: "mark-rushakoff/awesome-influxdb の正規スナップショット"
licenseSource: "github-mark-rushakoff-awesome-influxdb-readme-md"
---

<a id="awesome-influxdb"></a>
# Awesome InfluxDB [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[InfluxDB](https://www.influxdata.com/)に関連する優れたプロジェクト、ライブラリ、ツールなどを厳選したリストです。
このリストはInfluxDB 1.0以降をサポートするライブラリやツールを中心に扱います。

このリストを改善したいですか？
[貢献方法](https://github.com/mark-rushakoff/awesome-influxdb/blob/7e22981080cb08302ed3da861d6b12ec31aec88f/CONTRIBUTING.md)を確認して、プルリクエストを作成してください。

<a id="reference-material"></a>
## 参考資料

このリストに適した有用なブログ記事、講演、スライドなどをご存じであれば、プルリクエストを作成してください。

* [公式ドキュメント](https://docs.influxdata.com/influxdb/latest/)
* IoT の世界における InfluxDB。[第1部：導入](https://www.easyitblog.info/2017/11/10/influxdb-and-grafana-fighting-together-with-iot-data-attack/) | [第2部：AWS でのホスティングとスケーリング](https://www.easyitblog.info/2017/11/14/influxdb-in-iot-world-aws-part-2/) | [第3部：Grafana によるグラフ描画](https://www.easyitblog.info/2017/11/26/influxdb-in-iot-world-making-it-production-ready-part-3/)

<a id="client-libraries"></a>
## クライアントライブラリ

<a id="official"></a>
### 公式

* [C#](https://github.com/influxdata/influxdb-csharp) - InfluxDB へポイントを効率的に送信する .NET ライブラリ
* [Go](https://github.com/influxdata/influxdb1-client) - InfluxDB 1.x向けGoクライアント
* [Java](https://github.com/influxdata/influxdb-java) - InfluxDB向けJavaクライアント
* [PHP](https://github.com/influxdata/influxdb-php) - InfluxDB向けPHPクライアント
* [Python](https://github.com/influxdata/influxdb-python) - InfluxDB向けPythonクライアント
* [Rails](https://github.com/influxdata/influxdb-rails) - Ruby on Rails向けバインディングでメトリクスを自動的にInfluxDBへ書き込む
* [Ruby](https://github.com/influxdata/influxdb-ruby) - InfluxDB向けRubyクライアント

<a id="unofficial"></a>
### 非公式

* [capacitor](https://github.com/olauzon/capacitor) - InfluxDB向けClojureクライアント
* [cl-influxdb](https://github.com/mmaul/cl-influxdb) - タイムシリーズデータベースInfluxDBへのCommon Lispインターフェース
* [erflux](https://github.com/gossiperl/erflux) - InfluxDB向けErlangクライアント
* [fluxter](https://github.com/lexmag/fluxter) - Elixir向けInfluxDBライター
* [influent](https://github.com/gobwas/influent) - InfluxDB向けJavaScriptドライバー
* [influent.rs](https://github.com/gobwas/influent.rs) - InfluxDB向けRustドライバー
* [InfluxDB-Client-for-Arduino](https://github.com/tobiasschuerg/InfluxDB-Client-for-Arduino) - Arduino向けInfluxDBクライアント
* [InfluxDB-Client-LabVIEW](https://github.com/johanvandenbroek/InfluxDB-Client-LabVIEW) - InfluxDB用LabVIEWクライアント
* [influxdb-cpp-rest](https://github.com/d-led/influxdb-cpp-rest) - C++によるInfluxDBクライアント（バッチ処理の非同期インターフェース付き）
* [influxdb-haskell](https://github.com/maoe/influxdb-haskell) - HaskellによるInfluxDBクライアントライブラリ
* [InfluxDB.NET](https://github.com/ziyasal/InfluxDB.Net) - .NET用InfluxDBクライアント
* [InfluxDB PHP SDK](https://github.com/corley/influxdb-php-sdk) - 読み書きデータ用のUDP/IPまたはHTTPアダプタ
* [influxdbr](https://github.com/dleutnant/influxdbr) - RによるInfluxDBライブラリ
* [instream](https://github.com/mneudert/instream) - Elixir用InfluxDBドライバー
* [node-influx](https://github.com/node-influx/node-influx) - InfluxDB Node.jsクライアント
* [node-influx-udp](https://github.com/mediocre/node-influx-udp) - InfluxDBのUDPインターフェースを使ってデータを書き込む
* [scala-influxdb-client](https://github.com/paulgoldbaum/scala-influxdb-client) - Scala 用の非同期 InfluxDB クライアント

<a id="collecting-data-into-influxdb"></a>
## InfluxDBへのデータ収集

<a id="projects"></a>
### プロジェクト

<a id="dedicated"></a>
#### 専用ツール

InfluxDBへデータを送ることを主目的とするツールです。

* [accelerometer2influx](https://github.com/CorpGlory/accelerometer2influx) - スマートフォンの加速度計からx-y-z軸のデータを取得し、InfluxDBに送信するAndroidアプリケーション
* [agento](https://github.com/abrander/agento) - Linux ホストからほぼリアルタイムのメトリクスを収集するクライアント／サーバー
* [aggregateD](https://github.com/ccpgames/aggregateD) - InfluxDB用の、[dogstatsD](https://docs.datadoghq.com/guides/dogstatsd/)をインスピレーションとしたメトリクスおよびイベント集計デーモン
* [aprs2influxdb](https://github.com/FaradayRF/aprs2influxdb) - ハムラジオAPRS-ISサーバーをインターフェースし、パケットデータをInfluxDBデータベースに保存
* [Charmander](https://github.com/att-innovate/charmander) - Charmanderは、リソーススケジューリングアルゴリズムの測定および分析を行うための実験環境
* [gopherwx](https://github.com/chrissnell/gopherwx) - Davis Instruments Vantage Pro2 ステーションからリアルタイムの天気データを取得し、InfluxDB に保存するサービス
* [grade](https://github.com/influxdata/grade) - 結果を InfluxDB に保存し、Go のベンチマーク性能を時系列で追跡
* [Influx-Capacitor](https://github.com/poxet/Influx-Capacitor) - Influx-Capacitor は Windows マシンからパフォーマンスカウンターからメトリクスを収集し、InfluxDB に送信して Grafana で可視化
* [Influxdb-Powershell](https://github.com/vsavornin/Influxdb-Powershell) - Windows パフォーマンスカウンターを InfluxDB サーバーに送信する PowerShell スクリプト
* [influxdb-logger](https://github.com/codersaur/SmartThings/tree/master/smartapps/influxdb-logger) - [SmartThings](https://www.smartthings.com/) デバイスの属性を InfluxDB データベースにログ記録する SmartApp
* [influxdb-sqlserver](https://github.com/zensqlmonitor/influxdb-sqlserver) - Microsoft SQL Server のメトリクスを InfluxDB に報告し、Grafana で可視化
* [k6](https://github.com/loadimpact/k6) - Go と JavaScript を使用した現代的な負荷テストツール
* [marathon-event-metrics](https://github.com/Wikia/marathon-event-metrics) - [Marathon](https://mesosphere.github.io/marathon/) イベントを InfluxDB に報告するツール
* [mesos-influxdb-collector](https://github.com/kpacha/mesos-influxdb-collector) - InfluxDB 向けの軽量な [mesos](https://mesos.apache.org/) 統計収集ツール
* [mqforward](https://github.com/shirou/mqforward) - [MQTT](http://mqtt.org/) から InfluxDB へのデータ転送ツール
* [node-opcua-logger](https://github.com/coussej/node-opcua-logger) - OPC UA サーバーから産業データを収集
* [ntp_checker](https://github.com/fss1/ntp_checker) - 内部 NTP ソースを比較し、サーバー間のオフセットが指定した秒数（小数可）を超えた場合に警告
* [proc_to_influxdb](https://github.com/d-led/proc_to_influxdb) - InfluxDB を介して Windows プロセスの開始・終了を確認するコンソールアプリ
* [pysysinfo_influxdb](https://github.com/nagylzs/pysysinfo_influxdb) - 定期的にシステム情報を InfluxDB に送信（Python3 + psutil を使用しており、Windows でも動作）
* [sysinfo_influxdb](https://github.com/novaquark/sysinfo_influxdb) - システム（Linux）情報を収集し、InfluxDB に送信
* [snmpcollector](https://github.com/toni-moreno/snmpcollector) - フル機能の汎用SNMPデータ収集ツールでInfluxDB用のWeb管理インターフェースを提供
* [Telegraf](https://github.com/influxdata/telegraf) - （公式）メトリクスを InfluxDB に送信するプラグイン駆動型サーバーエージェント
* [tesla-streamer](https://github.com/timdorr/tesla-trip/blob/master/lib/tesla_stream_reader.rb) - Tesla Model SからのデータをInfluxDBへストリーム [rake task](https://github.com/timdorr/tesla-trip/blob/master/lib/tasks/tesla.rake#L12-L16)
* [traffic_stats](https://traffic-control-cdn.readthedocs.io/en/latest/overview/traffic_stats.html) - [Apache Traffic Control](https://trafficcontrol.apache.org/)が制御するCDNの統計を取得・保存
* [vsphere-influxdb-go](https://github.com/Oxalide/vsphere-influxdb-go) - VMware vSphere、vCenterおよびESXiのパフォーマンスメトリクスを収集しInfluxDBへ送信

<a id="non-dedicated"></a>
#### 汎用ツール

InfluxDBを含む複数のバックエンドへ送るデータを生成するツールです。

* [cAdvisor](https://github.com/google/cadvisor) - 実行中のコンテナのリソース使用量とパフォーマンス特性を分析
* [Centreon](https://github.com/centreon/centreon) - ネットワーク、システム、アプリケーションの監視および管理ツール
* [cernan](https://github.com/postmates/cernan) - テレメトリとログの集約サーバー
* [cloudwatch-sender](https://github.com/BBC-News/cloudwatch-sender) - [Amazon Cloudwatch](https://aws.amazon.com/cloudwatch/)からメトリクスをInfluxDB/Graphiteへ送信
* [crankshaftd](https://github.com/fullcontact/crankshaftd) - [Turbine](https://github.com/Netflix/Turbine) から SSE でストリーミングデータを取り込み、ゲージとして StatsD または InfluxDB へ送信するシンプルな Go エージェント
* [Domoticz](https://www.domoticz.com) - オープンソースのホームオートメーションシステム
* [gatling](https://github.com/gatling/gatling) - 非同期の Scala／Akka／Netty ベースのストレステストツール
* [Glances](https://github.com/nicolargo/glances) - システムの状態を一目で把握
* [Graphios](https://github.com/shawn-sterling/graphios) - NagiosのパフォーマンスデータをGraphite (Carbon) / StatsD / Librato / InfluxDBへ送信するプログラム
* [heapster](https://github.com/kubernetes-retired/heapster) - [Kubernetes](https://kubernetes.io/)クラスタのコンテナリソース使用量を監視
* [heka](https://github.com/mozilla-services/heka) - 一般用途のデータ収集および処理ツール
* [internet_data_usage](https://github.com/precurse/internet_data_usage) - TelusやKoodoなどの異なるキャリアのデータプラン使用量を取得するPythonベースのアプリケーション
* [ioBroker](http://www.iobroker.net/) - ホームオートメーション／IoTプラットフォームがInfluxdbを用いて [history data](https://github.com/ioBroker/ioBroker.influxdb/blob/master/README.md) を保存
* [jmxtrans](https://github.com/jmxtrans/jmxtrans) - JVMにJMXを介して接続する一方と、思いつく限りのログ／モニタリング／グラフ化パッケージのもう一方の間に存在する、実質的な接続ツール
* [Apache JMeter](https://jmeter.apache.org/usermanual/realtime-results.html) - 人気の負荷テストツール。InfluxDBBackendListenerClientを用いて、リアルタイム結果をバックエンドに送信でき、UDPまたはHTTPプロトコルでアクティブスレッド、応答時間などのメトリクスをInfluxDBバックエンドに送信可能
* [logary](https://github.com/logary/logary) - Monoおよび.NET向けの高性能、マルチターゲットログ、メトリクス、ヘルスチェックライブラリ
* [metrics.sh](https://github.com/pstadler/metrics.sh) - ポータブルなシェルスクリプトを用いてメトリクスを収集・転送
* [OpenHAB](https://www.openhab.org/) - ホームオートメーションに関わるすべての分野に適用可能な統合プラットフォーム
* [Riemann](https://github.com/riemann/riemann) - Clojureによるネットワークイベントストリーム処理システム
* [statsd-jvm-profiler](https://github.com/etsy/statsd-jvm-profiler) - StatsDを用いたシンプルなJVMプロファイラー
* [statsite](https://github.com/statsite/statsite) - StatsDのC言語実装
* [Sematext Agent](https://github.com/sematext/sematext-agent-integrations) - [Open source monitoring agent](https://sematext.com/blog/now-open-source-sematext-monitoring-agent/) を用いて、Solr、Elasticsearch、Cassandra、JVM、JMX、ClickHouse、MySQL、Hadoopなどにプラグインによる統合でメトリクスを収集。Influx Line Protocolを用いてInfluxDBまたは[Sematext Cloud](https://sematext.com/cloud/) へ出力
* [logagent](https://github.com/sematext/logagent-js) - 現代的でオープンソース、軽量なログシャッピング。Logagentは[influxdb input plugin](https://sematext.com/docs/logagent/input-plugin-influxdb-http/) および[influxdb output plugin](https://sematext.com/docs/logagent/output-plugin-influxdb/) および多くの他の[integrations](https://sematext.com/docs/logagent/plugins/) を含む

<a id="libraries"></a>
### ライブラリ

データを収集してInfluxDBへ送るライブラリです。

* [crow-metrics](https://github.com/robey/crow-metrics) - ノードサーバー向けの小さなメトリクス収集ツール
* [django-influxdb-metrics](https://github.com/bitlabstudio/django-influxdb-metrics) - プロジェクトに関するメトリクスをInfluxDBに送信する再利用可能なDjangoアプリ
* [go-runtime-metrics](https://github.com/tevjef/go-runtime-metrics) - Goランタイムのメトリクスを収集し、InfluxDBに出力またはTelegrafを通じて出力
* [lua-resty-influx](https://github.com/p0pr0ck5/lua-resty-influx) - [OpenResty](https://openresty.org/en/) 用のInfluxDBクライアント
* [metrics](https://github.com/beberlei/metrics) - (PHP) 多様なメトリクスコレクタを抽象化するシンプルなライブラリ。"一貫性とシンプルなメトリクス(機能)APIを持ち、ベンダー鎖付きを引き起こさないことが必要だと私は考えている"
* [pyVsphereInflux](https://github.com/fennm/pyVsphereInflux) - [vSphere](https://www.vmware.com/products/vsphere.html)からデータを取得し、InfluxDBに挿入するためのライブラリとサポートスクリプト
* [telemetry](https://github.com/arussellsaw/telemetry) - Goアプリケーション向けのメトリクス報告

<a id="hooks"></a>
#### フック

ほかのログライブラリからInfluxDBへ出力するためのフックです。

* [go-metrics-influxdb](https://github.com/vrischmann/go-metrics-influxdb) - [go-metrics library](https://github.com/rcrowley/go-metrics)のレポーターでメトリクスをInfluxDBに投稿
* [logrus_influxdb](https://github.com/Abramovic/logrus_influxdb) - [Logrus](https://github.com/Sirupsen/logrus)用のInfluxDB Hook

<a id="plugins"></a>
### プラグイン

ほかのスタンドアロンツールからInfluxDBへデータを送るためのプラグインです。

* [embulk-output-influxdb](https://github.com/joker1007/embulk-output-influxdb) - [Embulk](https://github.com/embulk/embulk)用のInfluxDB出力プラグイン
* [exometer_influxdb](https://github.com/travelping/exometer_influxdb) - [Exometer](https://github.com/Feuerlabs/exometer)用のInfluxDBレポーター
* [fluent-plugin-influxdb](https://github.com/fangli/fluent-plugin-influxdb) - [fluentd](https://www.fluentd.org/)およびInfluxDB向けのバッファ付き出力プラグイン
* [influx-nagios-plugin](https://github.com/shaharke/influx-nagios-plugin) - [Nagios](https://www.nagios.org/)によるモニタリング統計をクエリするためのプラグイン
* [jenkinsci/influxdb-plugin](https://github.com/jenkinsci/influxdb-plugin) - [Jenkins](https://jenkins.io/index.html)によるビルドメトリクスをInfluxDBに送信するためのプラグイン
* [kafka-influxdb](https://github.com/mre/kafka-influxdb) - Pythonで書かれた[Kafka](https://kafka.apache.org/)のInfluxDBコンシューマ
* [logstash-output-influxdb](https://github.com/logstash-plugins/logstash-output-influxdb) - コミュニティが維持する[Logstash](https://www.elastic.co/products/logstash)プラグインでメトリクスをInfluxDBに出力
* [metrics-influxdb](https://github.com/davidB/metrics-influxdb) - [dropwizard](https://www.dropwizard.io/0.9.1/docs/) メトリクスの測定値を InfluxDB サーバーへ送るレポーター
* [mod-influxdb](https://github.com/savoirfairelinux/mod-influxdb) - [Shinken](http://www.shinken-monitoring.org/) にデータを出力するためのモジュール
* [sensu-plugins-influxdb](https://github.com/sensu-plugins/sensu-plugins-influxdb) - [Sensu](https://sensu.io/) プラグイン
* [sidekiq-influxdb](https://github.com/vassilevsky/sidekiq-influxdb) - ジョブ実行メトリクスを InfluxDB へ送信する [Sidekiq](https://sidekiq.org/) ミドルウェア
* [snap-plugin-publisher-influxdb](https://github.com/intelsdi-x/snap-plugin-publisher-influxdb) - [snap](https://github.com/intelsdi-x/snap) メトリクスをInfluxDBに公開
* [statsd-influxdb-backend](https://github.com/bernd/statsd-influxdb-backend) - StatsD用のシンプルなInfluxDBバックエンド
* [logagent influx input plugin](https://sematext.com/docs/logagent/input-plugin-influxdb-http/) - Influx Line Protocolを介してデータを受信するLogagentプラグイン
* [logagent InfluxDB output plugin](https://sematext.com/docs/logagent/input-plugin-influxdb-http/) - Influx Line Protocolを介してデータを送信するプラグイン


<a id="import-tools"></a>
### インポートツール

固定されたデータセットをInfluxDBへインポートするツールです。
* [JMeter2InfluxDB](https://github.com/soprasteria/jmeter2influxdb) - JMeterの結果ファイルを読み込み、負荷テスト後にInfluxDBに結果を保存
* [LoadRunner Raw Results Exporter](https://admhelp.microfocus.com/lr/en/12.60-12.62/help/WebHelp/Content/Controller/raw_results_exporter.htm) - 負荷テスト結果（シナリオ結果）をInfluxDBにエクスポート
* [nmon2influxdb](https://github.com/adejoux/nmon2influxdb) - [nmon](http://nmon.sourceforge.net/pmwiki.php) ファイルをInfluxDBにインポート

<a id="consuming-data-from-influxdb"></a>
## InfluxDBデータの利用

<a id="dashboards-and-visualization"></a>
### ダッシュボードと可視化

* [Chronograf](https://github.com/influxdata/chronograf) - 公式のInfluxDBデータ可視化ツール
* [DBeaver](https://dbeaver.com/databases/influxdb/) - DBeaver ユニバーサルデータベースツール、DBeaver エンタープライズにはInfluxDB用の特別拡張機能あり
* [facette](https://github.com/facette/facette) - 時系列データの可視化およびグラフ化ソフトウェア
* [FluxDash](https://github.com/vrecan/FluxDash) - ターミナルベースのInfluxDBダッシュボード
* [grafana](https://github.com/grafana/grafana) - Graphite、InfluxDBおよびOpenTSDB向けの美しいメトリクス可視化、ダッシュボードおよびエディタ
* [InfluxDB Studio](https://github.com/CymaticLabs/InfluxDBStudio) - InfluxDB StudioはUI管理ツールであり、その設計思想は他の類似のSQLデータベース管理ツールに由来している（InfluxData.NetをMS Windows上で実行）
* [InfluxGraph](https://github.com/InfluxGraph/influxgraph) - Graphite-API用のInfluxDBストレージ検索ツール
* [ostent](https://github.com/ostrost/ostent) - システムメトリクスの収集と表示を行い、オプションでGraphiteおよび/またはInfluxDBに転送

<a id="other-tools"></a>
### その他のツール

* [hubot-influxdb-alerts](https://github.com/amwelch/hubot-influxdb-alerts) - チャットルーム内で [hubot](https://hubot.github.com/)およびinfluxdbを用いてアラートを作成・管理
* [influx-alert](https://github.com/joshrendek/influx-alert) - YAML設定に基づいてInfluxDBをクエリし、アラートを送信するツール
* [influxdb_google_sheets](https://github.com/HormyAJP/influxdb_google_sheets) - Google SheetsスクリプトによるInfluxDBデータの取得とフォーマット
* [Morgoth](https://github.com/nathanielc/morgoth) - メトリクス異常検知

<a id="provisioning-influxdb"></a>
## InfluxDBのプロビジョニング

InfluxDBを手作業でインストールせずに稼働させるためのツールやライブラリです。

* [chef-influxdb](https://github.com/bdangit/chef-influxdb) - InfluxDB用のChef Cookbook
* [golja-influxdb](https://github.com/dgolja/golja-influxdb) - InfluxDB用のPuppetモジュール
* [influxdb-formula](https://github.com/saltstack-formulas/influxdb-formula) - InfluxDBの時系列データベースのインストールと設定
* [influxdb-release](https://github.com/pivotal-cf-experimental/influxdb-release) - InfluxDB用の実験的BOSHリリース
* [puppet-telegraf](https://forge.puppet.com/datacentred/telegraf/readme) - Telegraf用のPuppetモジュール
* [rossmcdonald/influxdb](https://github.com/rossmcdonald/influxdb) - InfluxDBのインストール、設定、維持を行うAnsibleロール
* [tutum-docker-influxdb](https://github.com/tutumcloud/influxdb) - Out-of-the-boxでInfluxDBサーバーを実行するDockerイメージ

<a id="queries"></a>
## クエリ

* [dbal-influxdb](https://github.com/corley/dbal-influxdb) - InfluxDB 用の Doctrine DBAL
* [Influxdb::Arel](https://github.com/undr/influxdb-arel) - InfluxDB 方言向けの SQL AST マネージャー。複雑な SQL クエリの生成を簡略化
* [influxer](https://github.com/palkan/influxer) - InfluxDB 用の ActiveRecord 風インターフェース
* [Time Series Admin](https://github.com/timeseriesadmin/timeseriesadmin) - InfluxDB データベースの管理パネルとクエリインターフェース

<a id="hosting-of-influxdb--saas"></a>
## InfluxDBホスティング／SaaS

* [InfluxCloud](https://cloud.influxdata.com/plan-picker) - InfluxDB の開発元によるサービス
* [Aiven](https://aiven.io/influxdb) - ホスト（AWS、Google、DigitalOceanなど）の選択、地理的位置、サーバー仕様の選択を提供
* [Scalingo](https://scalingo.com/databases/influxdb) - サーバー仕様の選択を提供
* [HostedMetrics](https://hostedmetrics.com/product/influxdb/) - InfluxDB、Grafana、StatsD を組み合わせて提供する、カスタムアプリケーション監視向けサービス


<a id="miscellaneous"></a>
## その他

ほかのカテゴリーに当てはまらないプロジェクトです。

* [influx-protector](https://github.com/ve-global/influx-protector) - 危険なクエリが InfluxDB に到達するのを防ぐプロキシ
* [influxdb-schema-updater](https://github.com/open-ch/influxdb-schema-updater) - 設定ファイルを使って InfluxDB インスタンスのスキーマを管理する小さな DevOps ツール
* [influx-prompt](https://github.com/RPing/influx-prompt) - 自動補完を備えた対話型コマンドライン InfluxDB クライアント
* [cleanflux](https://github.com/Transatel/cleanflux) - /queryエンドポイントにプロキシをかけ、自動リテンションポリシー選択と通信中のバグ修正を実施

<a id="other-awesome-lists"></a>
## その他のAwesomeリスト

<a id="awesome-lists-that-include-links-to-influxdb"></a>
### InfluxDBへのリンクを含むAwesomeリスト

* [awesome-bigdata](https://github.com/onurakpolat/awesome-bigdata)
* [awesome-dashboard](https://github.com/obazoud/awesome-dashboard)
* [awesome-data-engineering](https://github.com/igorbarinov/awesome-data-engineering)
* [awesome-db](https://github.com/numetriclabz/awesome-db)
* [awesome-go](https://github.com/avelino/awesome-go)
* [awesome-home-assistant](https://github.com/frenck/awesome-home-assistant)
* [awesome-microservices](https://github.com/mfornos/awesome-microservices)
* [awesome-sysadmin](https://github.com/kahun/awesome-sysadmin)

<a id="lists-of-awesome-lists-that-include-awesome-influxdb"></a>
### awesome-influxdbを含むAwesomeリスト集

* [awesome](https://github.com/sindresorhus/awesome)
* [lists](https://github.com/jnv/lists)

<a id="license"></a>
## ライセンス

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲において、著者と貢献者はawesome-influxdbに関するすべての著作権および関連する権利を放棄しています。
