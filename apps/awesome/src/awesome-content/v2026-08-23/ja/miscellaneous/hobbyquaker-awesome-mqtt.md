---
title: "Awesome MQTT"
description: "MQTTを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-hobbyquaker-awesome-mqtt-readme-md"
---

# Awesome MQTT

MQTTを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>


- [コミュニティ資料](#community-resources)
- [ブローカー](#brokers)
- [クラウド](#cloud)
- [プラットフォーム](#platforms)
- [ツール](#tools)
- [クライアント](#clients)
- [スクリプティング](#scripting)
- [インターフェース](#interfaces)
    - [メイカー](#makers)
    - [産業](#industry)
    - [電話・PBX](#telephony-pbx)
    - [オペレーティングシステム](#operating-system)
    - [監視](#monitoring)
    - [位置追跡](#location-tracking)
    - [ログ](#logging)
    - [スマートホーム用ハードウェアインターフェース](#smart-home-hardware-interfaces)
    - [スマートホーム統合ソフトウェア](#smart-home-integration-software)
    - [照明](#lighting)
    - [ホームエンターテインメント](#home-entertainment)
    - [スマートメーター](#smart-metering)
    - [メッセージング](#messaging)
    - [その他](#misc)
- [可視化・ダッシュボード](#visualization-dashboards)
- [アーキテクチャ・規約](#architecture-convention)
- [セキュリティ・暗号化](#security-encryption)


### コントリビューション <a id="contribute"></a>

コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/hobbyquaker/awesome-mqtt/blob/dd649af22341b621e6291f013d7d619fbf496fd2/contributing.md)を確認してください。

## コミュニティ資料 <a id="community-resources"></a>

- [mqtt.org](https://mqtt.org/)
- [MQTT community wiki](https://github.com/mqtt/mqtt.org/wiki)
- [Google Groups: MQTT](https://groups.google.com/g/mqtt)
- [IRC channel #mqtt on the freenode network](https://github.com/hobbyquaker/awesome-mqtt/blob/dd649af22341b621e6291f013d7d619fbf496fd2/irc:/irc.freenode.net/mqtt)
- [A list of public brokers](https://moxd.io/2015/10/17/public-mqtt-brokers/)

### ブログ <a id="blogs"></a>

- [Ben Hardill](https://www.hardill.me.uk/wordpress/tag/mqtt/)
- [Jan-Piet Mens](https://jpmens.net/)
- [Nick O'Leary](https://knolleary.net/)
- [HiveMQ](https://www.hivemq.com/blog/)
- [EMQ](https://www.emqx.com/en/blog)
- [Amazon AWS IoT Blog](https://aws.amazon.com/blogs/iot/tag/mqtt/)

### 講演 <a id="talks"></a>

- [An Introduction to MQTT: Why HTTP isn't the King of the Internet of Things](https://www.youtube.com/watch?v=LKz1jYngpcU) - 金城シンジ、ロバート・バード - アカマイ、サムスン開発者会議2017。
- [Einführung in MQTT](https://www.youtube.com/watch?v=INYG4-xsa9c) - ドミンク・オーベルマイアー＆ジェンス・データーズ、[Building IoT](https://www.buildingiot.de/index.php)会議2016（ドイツ語）。

## ブローカー <a id="brokers"></a>

- [Ably](https://www.ably.io/documentation/mqtt) - MQTT ブローカー サービスおよびプロトコル アダプタ
- [ActiveMQ](https://activemq.apache.org/) - 高速な Java マルチプロトコル メッセージングおよび統合パターン サーバー
- [Aedes](https://github.com/moscajs/aedes) - 任意のストリームサーバー上で動作可能な極簡 MQTT ブローカー、ノード方式によるもの
- [Bevywise MQTTRoute](https://www.bevywise.com/mqtt-broker/) - MQTTRoute は、カスタマイズ可能な UI、柔軟なストレージおよびセキュリティオプションを備えた拡張可能でスケーラブルな MQTT ブローカーであり、すべての IoT / IIoT 対応に適用可能
- [BifroMQ](https://bifromq.apache.org) - Javaベースの高性能 MQTT ブローカーで、大規模 IoT 用にネイティブなマルチテナントを提供
- [comqtt](https://github.com/wind-c/comqtt) - 軽量かつ高性能な Go メッセージングサーバー（v3.0|v3.1.1|v-5.0）で、分散クラスタをサポート
- [Eclipse Amlen](https://github.com/eclipse/amlen) - IoT、ウェブ、モバイル用途に適用可能なスケーラブルで安全かつ使いやすいメッセージブローカー。IBM MessageSight からオープンソース化されたもの
- [Emitter](https://github.com/emitter-io/emitter) - MQTT プロトコルに基づく分散型、スケーラブルかつ障害耐性のある発行・購読メッセージプラットフォームに加え、メッセージのストレージ機能を備えたもの
- [EMQ X](https://github.com/emqx/emqx) - 5G時代におけるIoT向けスケーラブルかつ信頼性の高いリアルタイム MQTT メッセージングエンジン
- [esp_uMQTT_broker](https://github.com/martin-ger/esp_mqtt) - ESP8266 上での基本的な MQTT ブローカー

- [hbmqtt Broker](https://github.com/beerfactory/hbmqtt) - asyncio を使用した Python MQTT ブローカー

- [HiveMQ](https://www.hivemq.com/) - MQTT 3.1、3.1.1、5.0 をサポートする Java MQTT ブローカー。商業版およびオープンソース版が提供されている
- [hrotti](https://github.com/alsm/hrotti) - Go で書かれた MQTT ブローカー
- [Keel MQTT Gateway](https://github.com/keel-iot/keel-mqtt-gateway) - Go で構築された分散型、クラウドネイティブ MQTT ブローカー。mochi-mqtt をベースに、Raft を用いて強一致のセッション所有権とACLを実現し、ルーティングテーブルは gossip に基づく（Olric）
- [KMQTT](https://github.com/davidepianca98/KMQTT) - Kotlin Multiplatform による MQTT ブローカー。埋め込みおよびスタンドアローンどちらにも対応
- [Moquette](https://github.com/moquette-io/moquette) - Java による軽量 MQTT ブローカー
- [Mosca](https://www.mosca.io/) - Node.js による MQTT ブローカー。スタンドアローンまたは他の Node.js アプリケーションに埋め込み可能
- [Mosquitto](https://mosquitto.org/) - *"*The"** オープンソース MQTT ブローカー

- [mqtt5](https://github.com/LabOverWire/mqtt-lib) - Rust によるアシンコントリーメッセージング v5.0 ブローカー。TCP、TLS、WebSocket、QUIC トランスポートをサポートし、認証、ACL、ブリッジ、セッションの永続化を提供

- [MyQttHub](https://myqtthub.com) - クラウド MQTT ブローカー
- [Mystique](https://github.com/TheThingsIndustries/mystique) - Goで書かれた拡張可能なMQTTブローカーで、観測性を目的としたHTTP機能を備えている。MQTT v3.1.1を実装している。
- [RabbitMQ](https://www.rabbitmq.com/mqtt.html) - 高パフォーマンスのメッセージブローカーにMQTTアダプタを備えたもの。
- [RobustMQ](http://robustmq.com) - Rustで書かれたマルチプロトコルブローカー。
- [SurgeMQ](https://zhen.org/categories/surgemq/) - Goで書かれた高パフォーマン及MQTTサーバーおよびクライアントライブラリ。
- [tbmq](https://github.com/thingsboard/tbmq) - 数百万のIoTデバイス向けにオープンソース、スケーラブル、障害耐性、持続可能なメッセージブローカー。
- [TrailMQ](https://github.com/RainerGewalt/TrailMQ) - 規制および産業システム向けに、ポリシーを実行し、ブローカーの決定をレビュー可能な記録を持つセルフホスト型MQTTブローカー。
- [VerneMQ](https://vernemq.com/) - Apache2ライセンスに基づく分散型MQTTブローカー。Erlangで開発されたもの。

- [Vert.x MQTT Server](https://github.com/vert-x3/vertx-mqtt) - Vert.xコンポーネントで、リモートMQTTクライアントとの接続、通信、メッセージ交換を処理。

- [Waterstream](https://waterstream.io/) - Apache Kafkaを自らのストレージおよび配分エンジンとして活用するMQTTブローカー。
- [NanoMQ](https://github.com/nanomq/nanomq) - IoTエッジプラットフォーム向けに軽量かつ高速なMQTTブローカー。


## クラウド <a id="cloud"></a>

- [Adafruit IO](https://io.adafruit.com) - データ指向のIoTフレームワークおよびライブラリ。
- [Alibaba Cloud IoT Platform](https://www.alibabacloud.com/product/iot) - デバイスとIoTプラットフォーム間の安全かつ信頼性の高い通信を提供し、1つのIoTプラットフォーム上で多数のデバイスを管理できるようにする。
- [AWS IoT Core](https://aws.amazon.com/iot-core/) - MQTT、MQTT over WSS、HTTPSおよびLoRaWANをサポートする管理型クラウドブローカーサービス。
- [Azure IoT Hub](https://azure.microsoft.com/en-us/services/iot-hub/) - あなたのIoTアプリケーションとその管理するデバイス間の非常に安全かつ信頼性の高い通信を可能にする。Azure IoT Hubは、ほぼすべてのデバイスに接続できるクラウドホストされたソリューションバックエンドを提供する。クラウドからエッジまで、デバイスごとの認証、組み込みのデバイス管理、スケールされたプロビジョニングにより、ソリューションを拡張できる。
- [CloudMQTT](https://www.cloudmqtt.com/) - インターネット・オブ・シングス向けにホストされたメッセージブローカー。IoT用の最適化されたメッセージキューが即時準備済み。
- [CloudAMQP](https://www.cloudamqp.com/docs/mqtt.html) - AMQPブローカーにMQTTサポートを備えたホストされたサービス。
- [CrystalMQ](https://www.bevywise.com/hosted-mqtt-server/) - 大規模展開向けの完全に管理されたクラウドMQTTブローカー。
- [flespi](https://flespi.com/mqtt-broker) - 無料かつ安全なクラウドMQTTブローカー。プライベートネームスペース、MQTT 3.1.1およびMQTT 5.0サポート、そして素晴らしい制限を備えている。
- [Google Cloud IoT](https://cloud.google.com/solutions/iot/) - クラウド管理型MQTTサービス。
- [HiveMQ Cloud](https://www.hivemq.com/cloud/) - クラウド管理型MQȚTサービス。

## プラットフォーム <a id="platforms"></a>

- [Iotellect](https://iotellect.com/) - 工場自動化、SCADA、BMSおよび遠隔監視向けの低コードIoT/IIoTプラットフォーム。MQTT、OPC-UA、Modbusおよび100以上のプロトコルをサポートし、視覚的な開発ツールとエッジ・クラウド統合を提供。
- [mainflux](https://www.mainflux.com/) - デバイス管理、データ集計、データ管理、データ分析、接続性およびメッセージルーティング、イベント管理をサポート。Linuxソフトウェア財団が提供。
- [thingsboard](https://thingsboard.io/) - IoTプロジェクト向けのデバイス管理、データ収集、処理、イベント管理、可視化を提供。
- [ForestHub](https://foresthub.ai) - Edge AIアグエントプラットフォーム；そのオープンソースランタイム[edge-agents](https://github.com/ForestHubAI/edge-agents)は、MQTTを第一クラスのワークフロー輸送として、Linuxエッジゲートウェイ上でAIアグエントをオーガナイズし、クラウドLLMと並行してローカルSLMでオフライン実行する。
- [IoT DC3](https://github.com/pnoker/iot-dc3) - 完全にオープンソースの、スプリングクラウドに基づく分散型産業IoTプラットフォーム。28の組み込みプロトコルドライバー（MQTTを含む）、スプリングAIによるAIパワードオペレーション、およびマイクロサービスアーキテクチャ。（[Docs](https://docs.dc3.site)）


## ツール <a id="tools"></a>
- [dsh-mqtt](https://github.com/UllrAI/dsh-mqtt) - DeepSeek Harness向けのMQTTプロトコルドライバーおよび長時間実行型エージェントワーカーガイアウェイにより、リモートクライアントがエージェント作業を提出・操作・キャンセル・監視できるようになる。
- [hivemq-mqtt-web-client](https://github.com/hivemq/hivemq-mqtt-web-client) - ウェブブラウザベースのMQTTクライアント。ウェブソケット上でMQTTを活用。[Direct Link](https://www.hivemq.com/demos/websocket-client/)
- [homie-home-assistant-discovery](https://github.com/labodj/homie-home-assistant-discovery) - Homie MQTTメタデータをHome Assistant MQTT発見パラメータにマッピングするNode.js CLIおよびライブラリ。
- [imqtt](https://github.com/shafreeck/imqtt) - IPythonに基づいたインタラクティブなMQTTパケット操作シェル。
- [IoT-Testware](https://projects.eclipse.org/projects/technology.iottestware) - Eclipse IoT-Testwareは、IoTプロトコルの適合性テストセットを収集したもので、ファズテストおよびパフォーマンステストに加えて追加ツールを備えている。
- [LabOverWire](https://laboverwire.com/features) - MQTTトポロジの設計に用いる視覚的な図編集ツール。Rust（WebAssembly）とTypeScriptで構成。ライブブラウザシミュレーション、コード生成、AsyncAPIエクスポートを提供。
- [LazyMQTT](https://github.com/ScottFelder/lazymqtt) - Rustで書かれた高速なターミナルUI MQTTクライアント — MQTT Explorerにインスパイアされたが、キーボード駆動でターミナル内に存在。
- [Mer-cli](https://github.com/iotmertech/iot-data-generator) - Rustで書かれた高性能IoTデータ生成ツール。MQTT、HTTP、TCPをサポートし、Handlebarsテンプレートを使用して現実的なセンサーデータをシミュレーション。
- [mockd](https://github.com/getmockd/mockd) - MQTTブローカーを内蔵し、QoS 0-2、保留メッセージ、トピックパターン、デバイスシミュレーションをサポートするマルチプロトコルモックサーバー。IoT開発およびテストに適用。
- [moxy](https://github.com/jvermillard/moxy) - GolangによるMQTTプロキシ。MQTT通信の監視およびトラブルシューティングに役立つ出力トレースを提供。
- [MQTT Board](https://github.com/flespi-software/MQTT-Board) - オープンソースの診断用MQTTクライアドツール。
- [mqtt-admin](https://github.com/hobbyquaker/mqtt-admin/) - ウェブベースのMQTTフロントエンド。[Direct Link](https://hobbyquaker.github.io/mqtt-admin/)。
- [mqtt-benchmark](https://github.com/chirino/mqtt-benchmark) - MQTTサーバー向けのベンチマークツール。
- [MQTT CLI](https://github.com/hivemq/mqtt-cli) - MQTT 5.0および3.1.1をサポートするさまざまなMQTTクライアントに接続できるコマンドラインインターフェース。
- [mqtt-client](https://github.com/sdeancos/mqtt-client) - シンプルなMQTTクライアントコマンドライン（Python）（pahoライブラリを使用）。
- [mqtt-forget](https://github.com/hobbyquaker/mqtt-forget) - ワイルドカードで保留されたMQTTトピックを削除するコマンドラインツール。
- [mqtt-fuzz](https://github.com/F-Secure/mqtt_fuzz) - MQTTプロトコル向けのシンプルなファズツール。
- [mqtt-malaria](https://github.com/etactica/mqtt-malaria) - MQTT環境におけるスケーラビリティおよび負荷テストツール。
- [mqtt-mirror](https://github.com/4nte/mqtt-mirror) - 1つのブローカーから別のブローカーにMQTTトラフィックをミラーする。CLIツール、HelmチャートまたはDockerイメージとして提供。
- [mqtt_recorder](https://github.com/rpdswtk/mqtt_recorder) - MQTTメッセージの記録と再現に使えるシンプルなCLIツール
- [mqtt-shell](https://github.com/pidster-dot-org/mqtt-shell) - MQTT用のシンプルなインタラクティブシェル
- [mqtt-spy](https://kamilfb.github.io/mqtt-spy/) - JavaベースのMQTTフロントエンド。スクリプト対応。
- [mqtt-studio](https://www.mqttstudio.com) - 開発者がMQTTベースのアプリケーションを効率的に作成・テスト・管理できる、革新的なUIを持つ実用的なMQTTツール。開発およびサポートワークフローを強化。
- [mqtt_tree](https://github.com/poggenpower/mqtt_tree) - すべてのトピックを展開可能なツリーで表示し、多くのクライアントが発行している場合の概要を把握できる。（python, tkinter）
- [mqtt-utils](https://github.com/dsell/mqtt-utils) - MQTTユーティリティの一覧
- [mqtt-wall](https://github.com/bastlirna/mqtt-wall) - サブスクリプションのみのウェブベースクライアント——MQTTのTwitter壁のようなもの
- [mqtt-wildcard](https://github.com/hobbyquaker/mqtt-wildcard) - Node.jsモジュールでMQTTトピックをワイルドカードでマッチング
- [MQTT.fx](https://mqttfx.jensd.de/) - Eclipse Pahoに基づくJavaによるMQTTクライアント。スクリプト対応。
- [mqttcli](https://github.com/shirou/mqttcli) - シェルスクリプト用のMQTTクライアのクライアント
- [MQTTForge](https://github.com/ibrahimilkhan/mqtt-forge) - ブローカーのトピックをリアルタイムでツリーに構築し、ワイヤー上のすべてのフレームを表示し、手動で発行するテストコンソール。macOS、WindowsおよびLinux用のデスクトップアプリ、または1つのDockerイメージ。
- [MQTTInspector](https://github.com/ckrey/MQTTInspector) - iOS（iPhoneおよびiPad）用の一般的なMQTTテストアプリ
- [mqttkit](https://github.com/keyp-dev/mqttkit) - BunとTypeScript上でMQTTを用いたElysiaスタイルアプリケーションフレームワーク。ブローカーアダプタ、順序付きミドルウェア、型付きトピックルート、MQTT 5 RPC、およびAsyncAPI 3.0ドキュメントを`new MqttApp().use(...)`で提供。
- [MQTTLens](https://chrome.google.com/webstore/detail/mqttlens/hemojaaeigabkbcookmlgmdigohjobjm) - Google ChromeアプリでMQTTブローカーに接続し、MQTTトピックにサブスクリプションや発行を行うことができる。
- [MQTT Explorer](https://mqtt-explorer.com/) - MQTTトピックの階層構造でトピックを可視化するツール。MQTTのスイス軍刀。
- [MQTT TUI](https://github.com/EdJoPaTo/mqttui) - シンプルで軽量のターミナルベースのMQTTモニタとパブリッシャー
- [Python MQTT Client Shell](https://github.com/bapowell/python-mqtt-client-shell) - MQTTクライアント通信に関連するさまざまなタスクを実行するためのテキストコンソールベースのインタラクティブシェル
- [RunMQTT MQTT Topic ACL Linter](https://runmqtt.com/mqtt-acl-linter) - ブラウザベースで、ローカルのみに制限されたMQTTトピックフィルタACLのバリデーター。ワイルドカードの幅、テナント境界、発行／購読方向、プレースホルダー、重複ルールをチェック。[Source and method](https://github.com/visoar/mqtt-acl-linter)。
- [SimpleMQTT](https://simplemqtt.theoi.de/) - SlackアプリでSlackからMQTTブローカーへメッセージを送信できるスラッシュコマンド。
- [Wireshark-MQTT](https://github.com/menudoproblema/Wireshark-MQTT) - Wireshark用のMQTTディセクタ
- [VSMQTT](https://github.com/rpdswtk/vsmqtt) - Visual Studio Codeに統合されたシンプルなMQTTクライアント
- [MQTTX](https://github.com/emqx/MQTTX) - EMQがオープンソースで提供するマルチプラットフォームMQTTデスクトップクライアント。macOS、Linux、Windowsに対応。
- [MIMIC MQTT Simulator](https://www.gambitcomm.com/site/mqttsimulator.php) - IoTアプリケーションの開発・テスト・デプロイに必要な、サーバー1台あたり最大10万件のMQTTクライアントをシミュレートします
- [mqtt-stats](https://github.com/gambitcomminc/mqtt-stats) - MQTTトピックの統計を監視するサブスクライアントクライアント
- [mqtt_monitor](https://github.com/filipsPL/mqtt-monitor) - Python 3で構築されたシンプルかつ軽量のコンソールモニタ、視覚的に魅力的なUIを備えています
- [mqttcommander](https://github.com/vroomfondel/mqttcommander) - コンソールベースのMQTTクライアントおよびコマンダー。特にIoT、Tasmota、Node-REDの環境で便利です

- [mqttv5](https://github.com/LabOverWire/mqtt-lib) - マルチトランスポートをサポートし、発信・受信・ブローカーの実行・ベンチマークを可能にする、統一されたMQTT v5.0 CLI


## クライアント <a id="clients"></a>


### マルチプラットフォーム <a id="multi-platform"></a>

- [Paho](https://www.eclipse.org/paho/) - C、C++、Java、Python、JavaScript、GoLang、C#、Rust、Androidおよび埋め込み（Arduino/mbed）向けのオープンソースクライアント実装。
- [mosquitto-clients](https://mosquitto.org/download/) - [mosquitto_pub](https://mosquitto.org/man/mosquitto_pub-1.html)および[mosquitto_sub](https://mosquitto.org/man/mosquitto_sub-1.html)のCLIクライアントが、ほとんどのオペレーティングシステムに対応し、[libmosquitto](https://mosquitto.org/man/libmosquitto-3.html)で統合。

### Python <a id="python"></a>

- [aiomqtt](https://github.com/empicano/aiomqtt) - 自然なasyncioによるMQTTクライアント
- [gmqtt](https://github.com/wialon/gmqtt) - PythonによるMQTT v5.0クライアのasyncioベース実装

- [hbmqtt Client](https://github.com/beerfactory/hbmqtt) - Pythonによるasyncioを用いたMQTTクライアント

- [MiniMQTT](https://github.com/adafruit/Adafruit_CircuitPython_MiniMQTT) - CircuitPython用のMQTTクライアントライブラリ

### JavaScript <a id="javascript"></a>

- [MQTT.js](https://github.com/mqttjs) - Node.js用のMQTTクライアント
- [mqtt-elements](https://github.com/mqttjs/mqtt-elements) - PolymerによるMQTT要素
- [mqtt-wrapper](https://www.webcomponents.org/element/hobbyquaker/mqtt-wrapper/elements/mqtt-wrapper) - 他の要素をラップし、MQTTトピックにリンクするPolymer要素

- [Vert.x Client](https://github.com/vert-x3/vertx-mqtt) - Vert.xコンポーネントで、ブローカーへの接続/切断、メッセージの発信、トピックへの購読に必要なメソッドを提供


### Java <a id="java"></a>

- [hivemq-mqtt-client](https://github.com/hivemq/hivemq-mqtt-client) - 高パフォーマンスのJava MQTTクライアントライブラリ。MQTT 5.0および3.1.1向けに異なるAPIを提供。

### ErlangまたはElixir <a id="erlang-or-elixir"></a>

- [emqttc](https://github.com/emqx/emqtt) - 非同期Erlang MQTTクライアント
- [mqttex](https://github.com/alfert/mqttex) - Elixirで実装されたMQTT

### Ballerina <a id="ballerina"></a>

- [ballerina-mqtt](https://github.com/ballerina-platform/module-ballerina-mqtt) - BallerinaベースのMQTTクライアント（paho-mqttを基に）。

### CまたはC++ <a id="c-or-c"></a>

- [mqtt_cpp](https://github.com/redboltz/mqtt_cpp) - Boost.Asioに基づくC++14によるMQTTクライアント
- [MQTT-C](https://github.com/LiamBindle/MQTT-C) - エムベディッドシステムおよびPC向けのポータブルMQTT Cクライアント
- [wolfMQTT](https://www.wolfssl.com/products/wolfmqtt/) - Cで記述されたMQTTクライアント（エムベディッド用途用）。wolfSSLライブラリを用いてSSL/TLSをサポートしています

### Clojure <a id="clojure"></a>

- [Machine Head](https://github.com/clojurewerkz/machine_head) - Clojure向けのMQTTクライアント。

### Dart <a id="dart"></a>

- [mqtt.dart](https://github.com/jnguillerme/mqtt.dart) - Dart向けのMQTTクライアント。

### C#／.NET <a id="c--net"></a>

- [HiveMQtt](https://github.com/hivemq/hivemq-mqtt-client-dotnet) - MQTT 5.0準拠の安全なクライアントで、自動バックプレス管理およびTCP・WebSocketトランスポートをサポート
- [MQTTnet](https://github.com/chkr1011/MQTTnet) - MQTTクライアントおよびブローカーの.NET実装

### Delphi <a id="delphi"></a>

- [delphi-mqtt](https://github.com/pjde/delphi-mqtt) - MQTTサーバーとクライアントのコンポーネント
- [TMQTTClient](https://github.com/jamiei/Delphi-TMQTT2) - Delphi用MQTTクライアントライブラリ。アルファ版および長期メンテナンスされていない

### Go <a id="golang"></a>

- [go-mqtt](https://github.com/go-mqtt/mqtt) - MQTTクライアント
- [MQTT for Go](https://github.com/jeffallen/mqtt) - GoによるMQTTクライアント、サーバーおよび負荷テストツール

### Lua <a id="lua"></a>

- [luamqtt](https://github.com/xHasKx/luamqtt/) - 純粋なLuaによるMQTT v3.1.1およびv5.0クライア。
- [mqtt_lua](https://geekscape.github.io/mqtt_lua/) - Lua言語用のMQTTクライアントライブラリ

### Objective-C <a id="objective-c"></a>

- [MQTT-Client-Framework](https://github.com/novastone-media/MQTT-Client-Framework) - iOS、macOS、tvOS用のネイティブObjective-C MQTTクライアントフレームワーク
- [MQTTKit](https://github.com/mobile-web-messaging/MQTTKit) - iOS用のMQTTクライアント（Objective-C）

### PHP <a id="php"></a>

- [Mosquitto-PHP](https://github.com/mgdm/Mosquitto-PHP) - PHP向けのMosquitto MQTTクライアントライブラリのラッパー。

### Ruby <a id="ruby"></a>

- [ruby-mqtt](https://github.com/njh/ruby-mqtt) - 純粋なRubyのgemでMQTTプロトコルを実装。

### Rust <a id="rust"></a>

- [mqtt-rs](https://github.com/zonyitoo/mqtt-rs) - Rust用のMQTTプロトコルライブラリ
- [mqtt-typed-client](https://github.com/holovskyi/mqtt-typed-client) - rumqttcに基づく型安全な非同期MQTTクライアント。型付きトピックのderiveマクロ、自動（デ）シリアライズ、ツリーベースのメッセージルーティングを提供
- [rumqtt](https://github.com/AtherEnergy/rumqtt) - 高速かつロックフリーの純粋Rust MQTTクライアント

- [mqtt5](https://github.com/LabOverWire/mqtt-lib) - TCP、TLS、WebSocket、QUICをサポートする完全な非同期MQTT v5.0クライアントおよびブローカーライブラリ


### Swift <a id="swift"></a>

- [CocoaMQTT](https://github.com/emqx/CocoaMQTT) - Swiftで書かれたiOSおよびmacOS用のMQTT
- [Moscapsule](https://github.com/flightonary/Moscapsule) - Swiftで書かれたiOS用のMQTTクライアント

### TCL <a id="tcl"></a>

- [tcl-mqtt](https://github.com/Tingenek/tcl-mqtt) - MQTTブローカーに接続するための小さなライブラリ。非常に基本的で、メンテナンスされていない。

## スクリプティング <a id="scripting"></a>

- [logic4mqtt](https://github.com/owagner/logic4mqtt) - Javaベースの論理およびスクリプトエンジン。MQTTと使用。JavaScript、Groovyなど、さまざまな言語でスクリプトを書ける
- [mqtt-scripts](https://github.com/hobbyquaker/mqtt-scripts/) - Node.jsベースのスクリプト実行者
- [Node-RED](https://nodered.org/) - インターネットオブシングスの接続を視覚的に組み立てるツール

## インターフェース <a id="interfaces"></a>

### メイカー <a id="makers"></a>

- [arduinoTemps2mqtt](https://github.com/matbor/arduinoTemps2mqtt) - Arduinoスケッチ、ワンワイヤ温度センサーを取得し、MQTTブローカーに発信
- [Basecamp](https://github.com/ct-Open-Source/Basecamp) - ESP32をIoTプロジェクトで使いやすくするためのArduinoライブラリ。See [c't Magazin 2'2018 (German)](https://www.heise.de/select/ct/2018/2/1515452111258448)。
- [deskmate](https://github.com/rbaron/deskmate) - ハッキング可能でポータブルなMQTTを活用したミニダッシュボードおよびコントロールセンター
- [MySensors](https://www.mysensors.org/) - NRF24L01ベースのArduinoセンサーネットワーク（MQTTゲートウェイをサポート）
- [RFM69-MQTT-client](https://github.com/computourist/RFM69-MQTT-client) - Arduino RFM69ベースのセンサーとMQTTゲートウェイ
- [rpi2mqtt](https://github.com/hobbyquaker/rpi2mqtt) - ラズベリーパイのGPIOと1-Wire温度センサーをMQTTに接続
- [xbee2mqtt](https://github.com/xoseperez/xbee2mqtt) - XBeeをMQTTゲートウェイに接続

#### ESP <a id="esp"></a>
- [pubsubclient](https://github.com/knolleary/pubsubclient) - Arduino Ethernet Shield用のクライアントライブラリ（MQTTサポート）
- [ESP32-BLE2MQTT](https://github.com/shmuelzon/esp32-ble2mqtt) - BLEをMQTTゲートウェイに橋渡し、BLE GATT特性をMQTTトピックとして両方向通信に公開
- [ESP8266MQTTMesh](https://github.com/PhracturedBlue/ESP8266MQTTMesh) - ESP8266用のメッシュWiFiでMQTTを統合したライブラリ
- [esp_mqtt](https://github.com/tuanpmt/esp_mqtt) - ESP8266用のMQTTクライアントライブラリ
- [mqtt-ir-transceiver](https://github.com/piotrC4/mqtt-ir-transceiver) - ESP8266ベースのMQTTとIR間の両方向ゲートウェイ。PlatformIOと併用
- [mqtt-with-micropython](https://docs.pycom.io/tutorials/networkprotocols/mqtt/) - micropythonおよびwipy/その他（ESP32内）でMQTTに接続
- [nodemcu-gpiomqtt](https://github.com/hobbyquaker/nodemcu-gpiomqtt) - ESP8266のGPIOをMQTTに接続するLuaスクリプト


#### ESPベース機器向けファームウェア <a id="firmwares-for-esp-based-devices"></a>

安価なESP8266チップを使ったスマートホームWi-Fi機器は多数あります（[1](https://templates.blakadder.com/index.html)、[2](https://github.com/xoseperez/espurna/wiki/Hardware)、[3](https://www.letscontrolit.com/wiki/index.php?title=ESP_Hardware)を参照）。多くは独自ファームウェアへ書き換えられます。
これらをMQTT制御のスマートホームノードに変える完全なファームウェアです。

- [ESPEasy](https://www.letscontrolit.com/wiki/index.php?title=ESPEasy) - ウェブベースで設定可能なESPを、<abbr title="Home automation">HA</abbr>ソリューションに多機能センサデバイスに変換
- [ESPHome](https://esphome.io/) - 簡潔なYAML記述からESP8266/ESP32のファームウェアを構築し、フラッシュ済みデバイスにアップロード・管理
- [Espurna](https://github.com/xoseperez/espurna) - <abbr title="Home automation">HA</abbr>用ESP8266ベースのファームウェア。豊かなウェブUIと、本体で約120デバイスをサポート

- [HomeGenie Mini](https://homegenie.it/) - MQTTを介したリモートモニタリングと制御をサポートするESP8266/ESP32用スマートデバイスファームウェア。端末間暗号化を実現。オープンソースであり、ウェブサイトからESPデバイスに直接アップロード可能

- [OpenMQTTGateway](https://github.com/1technophile/OpenMQTTGateway) - ESP8266、ESP32、Sonoff RF Bridge、Arduino用のMQTTゲートウェイ。両方向433mhz/315mhz/868mhz、赤外線通信、BLE、ベーコン検知、mi flora、mi jia、LYWSD02、LYWSD03MMC、Mi Scaleの互換性、SMSおよびLORAをサポート
- [Sonoff-Tasmota](https://github.com/arendst/Tasmota) - ESP8266デバイス用のウェブベース設定ファームウェア。約500デバイスをサポート（Sonoff以外も含む）
- [WiFi-IoT](https://wifi-iot.com/p/wiki/) - ESP8266/ESP32ファームウェアビルダー。一部はロシア語。無料機能は限定されている


### 産業 <a id="industry"></a>

- [CODESYS-MQTT](https://github.com/stefandreyer/CODESYS-MQTT) - CODESYS PLC用のMQTTクライアント
- [spicierModbus2mqtt](https://github.com/mbs38/spicierModbus2mqtt) - ModbusマスターがMQTTを介してレジスタ値を発行
- [mqtt2opcua](https://github.com/nzfarmer1/mqtt2opcua) - 両方向MQTTとOPC UAの橋
- [OPC Router](https://www.opc-router.com/4_1-mqtt-client-opc-router-plug-in-en/) - MQTT ゲートウェイ（パブリッシャー／サブスクリーバー）にさまざまなプラグイン（OPC UA ブリッジ、SQL ブリッジ、REST ブリッジ、SAP ブリッジ）を搭載。


### 電話・PBX <a id="telephony-pbx"></a>

- [agi-mqtt](https://github.com/zeha/agi-mqtt) - Asterisk と MQTT の間のインターフェース。
- [fritz2mqtt](https://github.com/akentner/fritz2mqtt) - FRITZ!Box を MQTT に接続。
- [sip2mqtt](https://github.com/MartyTremblay/sip2mqtt) - SIP の監視スクリプトが、呼び出し元 ID を含めて入力電話を MQTT にパブリッシュ。
- [sms2mqtt](https://github.com/Domochip/sms2mqtt) - USB GSM ドングル（gammu）を使って MQTT を介して SMS を送受信する Docker ゲートウェイ。


### オペレーティングシステム <a id="operating-system"></a>

- [updates2mqtt](https://updates2mqtt.rhizomatics.org.uk) - Docker イメージの更新を確認し、MQTT にパブリッシュ。Home Assistant の自動更新および発見をサポートする構造を備える。
- [mqtt-os-status](https://github.com/oskarhagberg/mqtt-os-status) - オペレーティングシステム関連データを、一定間隔で MQTT ブローカーにパブリッシュ。
- [mqttlauncher](https://github.com/jpmens/mqtt-launcher) - MQTT にパブリッシュされたメッセージによってトリガーされるシェルコマンドの実行。
- [mqttpc](https://github.com/hobbyquaker/mqttpc) - MQTT を介してプロセスを制御。MQTT を介してシグナルを送信し、stdout/stderr をパブリッシュまたは MQTT パイロードを stdin にパイプ送信できる。
- [mqttwatchdir](https://github.com/jpmens/mqtt-watchdir) - ディレクトリの変更を再帰的に監視し、ファイル内容を MQTT ブローカーにパブリッシュ。
- [psmqtt](https://github.com/eschava/psmqtt) - ユーティリティが MQTT を介してシステムの健康および状態を報告。
- [WinThing](https://github.com/msiedlarek/winthing) - MQTT を介して Windows をリモートで制御。


### 監視 <a id="monitoring"></a>

- [mqttwarn](https://mqttwarn.readthedocs.io/en/latest/) - MQTT 通知をルーティングおよび変換。データベース、メッセージング、その他通知の受信先に70以上の組み込みアダプタを備える。
- [snmp2mqtt](https://c0d3.sh/andre/snmp2mqtt) - Python 基盤の SNMP v2 および v-3 ブリッジ（MQTT との接続）。2025年後半のアクティブプロジェクト。
- [ccusage-mqtt](https://github.com/george-vice/ccusage-mqtt) - Claude Code（Anthropic の AI コードアグエント）の使用状況のテレメトリを MQTT にパブリッシュ。Home Assistant の自動発見をサポート。15センサー、気分分類器。
- [check-mqtt](https://github.com/jpmens/check-mqtt) - MQTT ブローカーへの接続確認をチェックする Nagios/Icinga プラグイン。
- [nag2mqtt](https://github.com/DE-IBH/nag2mqtt) - Nagios のイベントブローカーを MQTT ゲートウェイに接続。
- [notify-by-mqtt](https://github.com/jpmens/notify-by-mqtt) - Nagios/Icinga の通知モジュールでデータを JSON にラップし、MQTT ブローカーに送信。
- [mqtt2notifysend](https://github.com/David-Lor/MQTT2NotifySend) - MQTT メッセージから通知を取得し、Ubuntu および notify-send に対応する他の Linux ディストリビューションで通知を表示。


### 位置追跡 <a id="location-tracking"></a>

- [OwnTracks](https://owntracks.org/) - MQTTを用いた位置追跡および地理フェンス。

### ログ <a id="logging"></a>

- [graylog-plugin-mqtt](https://github.com/graylog-labs/graylog-plugin-mqtt) - Graylog 用の MQTT 入力プラグイン。
- [influx4mqtt](https://github.com/hobbyquaker/influx4mqtt) - MQTTトピックにサブスクライブし、InfluxDBに挿入する。
- [mqtt2elasticsearch](https://github.com/hobbyquaker/mqtt2elasticsearch) - MQTTメッセージをElasticsearchに送信する。

- [mqttwarn](https://github.com/jpmens/mqttwarn) - [carbon](https://mqttwarn.readthedocs.io/en/latest/notifier-catalog.html#carbon)プラグインと併用。

- [mqttcollect](https://github.com/jpmens/mqttcollect) - collectdの「Exec」プラグインとしてのMQTT対応。
- [mqtthandler](https://github.com/changyuheng/MQTTHandler) - MQTT用のPythonログハンドラモジュール。
- [mqtt2mongodb](https://github.com/David-Lor/MQTT2MongoDB) - MQTTトピックにサブスクライブし、MongoDBに挿入する。


### スマートホーム用ハードウェアインターフェース <a id="smart-home-hardware-interfaces"></a>

- [airrohr2mqtt](https://c0d3.sh/smarthome/airrohr2mqtt) - 空気質モニタリングの統合。
- [amcrest2mqtt](https://github.com/dchesterton/amcrest2mqtt) - AmcrestドアベルとMQTTのブリッジ。Home AssistantのMQTTディスカバリープロトコルを使用。
- [ble-scale-sync](https://github.com/KristianP26/ble-scale-sync) - BLE-to-MQTT ブリッジ（スマートスケール23ブランド）Home Assistant自動発見対応。重量とインピーダンスを読み取り、体組成を計算し、すべての11項目をLWTとともに発行し、表示精度を保持。 [Website](https://blescalesync.dev).
- [aqara-mqtt](https://github.com/monster1025/aqara-mqtt) - Aqara（Xiaomi）ゲートウェイとMQTTのブリッジ。
- [aqara2mqtt](https://github.com/hobbyquaker/aqara2mqtt) - [Aqara](https://www.aqara.com) スマートハブをMQTTに接続してください.
- [Bambuddy](https://github.com/maziggy/bambuddy) - Bambu Lab 3Dプリンター向けのセルフホスト型管理ツール。リアルタイムモニタリング、スケジューリング、Home Assistantとの統合をサポート。
- [can2mqtt](https://github.com/c3re/can2mqtt) - CAN-Bus - MQTTブリッジ（逆方向でも動作）。
- [coe2mqtt](https://c0d3.sh/smarthome/coe2mqtt) - 両方向CANバスとMQTTの接続。
- [cul2mqtt](https://github.com/hobbyquaker/cul2mqtt) - [Busware CUL](https://shop.busware.de/product_info.php/cPath/1/products_id/29)（868MHz RFデバイス、例：ELV FS20、HMS、EMなど）とMQTTのインターフェース.
- [domiqtt](https://github.com/etobi/domiqtt) - Domiqベース（LCN）に接続し、MQTTに変換する。
- [eno2mqtt](https://github.com/owagner/eno2mqtt) - Enocean USB300（TCM3-10）アダプタとMQTTのインターフェース。
- [Evohome2mqtt](https://github.com/svrooij/evohome2mqtt) - Honeywell Evohomeシステム向けのMQTTインターフェース。
- [fronius2mqtt](https://c0d3.sh/smarthome/fronius2mqtt) - Fronius SolarAPI向けのMQTT統合。
- [gardena2mqtt](https://github.com/Domochip/gardena2mqtt) - DockerゲートウェイによるGARDENAスマートシステムデバイス（Silenoマシン、給水制御など）のMQTT経由制御。
- [helios2mqtt](https://github.com/mreschka/helios2mqtt) - helios easy controlsシステム（例：KWL EC 220D）をMQTTに同期するデーモン。
- [hm2mqtt.js](https://github.com/hobbyquaker/hm2mqtt.js) - EQ-3のスマートホームデバイスライン（Homematic）とMQTTのインターフェース。Homematic IPをサポート。
- [homeeToMqtt](https://github.com/odig/homeeToMqtt) - homeeとMQTTの両方向インターフェース。
- [HS100toMQTT](https://github.com/dersimn/HS100toMQTT) - TPLink HS100/HS110とMQTTのゲートウェイ。
- [huABus](https://github.com/arboeh/huABus) - Huawei太陽光インバーター（SUN2000/3000/5000）用のHome Assistantアプリ（Add-on）およびMQTTブリッジ
- [ipcam2mqtt](https://github.com/svrooij/ipcam2mqtt) - IPカメラから得た動き画像をMQTTアラートに変換する小型FTPサーバー
- [knx-mqtt-bridge](https://github.com/pakerfeldt/knx-mqtt-bridge) - knx.jsライブラリを使用したKNXとMQTTのブリッジ
- [knx2mqtt](https://github.com/owagner/knx2mqtt) - KNXホームオートメーション標準とMQTTのインターフェース
- [mcsMQTT](https://shop.homeseer.com/products/mcsmqtt-software-plug-in-for-hs3) - HS3（HomeSeer）用のプラグイン
- [mqtt-dss-bridge](https://github.com/cgHome/mqtt-dss-bridge) - digitalSTROMサーバーとのMQTTブリッジ
- [mqtt-unifi-protect-bridge](https://github.com/terafin/mqtt-unifi-protect-bridge) - UniFi Protectカメラの動き状態をMQTTに追加

- [mqtt2homekit](https://github.com/forty2/mqtt2homekit) - [homekit2mqtt](https://github.com/hobbyquaker/homekit2mqtt)の逆方向：SiriやiPhoneを使わずにMQTTでHomeKit対応デバイスを制御してください.

- [node-lox-mqtt-gateway](https://github.com/alladdin/node-lox-mqtt-gateway) - Loxone™ miniサーバーとMQ及ブローカーとの通信を可能にするゲートウェイ
- [smartthings-mqtt-bridge](https://github.com/stjohnjohnson/smartthings-mqtt-bridge) - [SmartThings](https://www.smartthings.com/)とMQTTのブリッジ。
- [xiaomi2mqtt](https://github.com/svrooij/node-xiaomi2mqtt) - Xiaomi Smart Home Gateway AquaraとMQTTサーバーの間のブリッジ
- [zigbee2mqtt](https://github.com/Koenkk/zigbee2mqtt) - Xiaomi/TRADFRI/HueなどのベンダーのブリッジやゲートウェイなしでZigbeeデバイスを使用できるようにする
- [zwavejs2mqtt](https://github.com/zwave-js/zwavejs2mqtt) - ZwaveからMQTTへのゲートウェイおよびコントロールパネルのWeb UI


### スマートホーム統合ソフトウェア <a id="smart-home-integration-software"></a>

- [Home Assistant](https://www.home-assistant.io) - MQTTを内蔵し、世界で最も大きな非商業オープンソースプロジェクトを持つホームオートメーションシステム
- [Domoticz](https://www.domoticz.com/) - MQTTをサポートするホームオートメーションシステム
- [FHEM](https://fhem.de/fhem.html) - V5.6以降に含まれる[MQTT module](https://fhem.de/commandref.html#MQTT)を含む。
- [Home.Pi](https://github.com/denschu/home.pi) - MQTTに基づく
- [Homegear](https://homegear.eu/index.php/Main_Page) - MQTTを内蔵している

- [HomeGenie](https://homegenie.it/) - MQTTを用いて、端末から端末まで暗号化されたリモート制御および監視をサポート
- [homekit2mqtt](https://github.com/hobbyquaker/homekit2mqtt) - [HAP-NodeJS](https://github.com/homebridge/HAP-NodeJS)とMQTTのインターフェース。SiriまたはHomeKitアプリでMQTT接続デバイスを制御できます。

- [ioBroker](https://github.com/ioBroker) - 含まれる[MQTT adapter](https://github.com/ioBroker/ioBroker.mqtt)。
- [openHAB](https://github.com/openhab) - 含まれる[MQTT binding](https://github.com/openhab/openhab1-addons/wiki/MQTT-Binding)。
- [openLuup](https://github.com/akbooer/openLuup) - Vera Luupホームオートメーション環境を純粋なLuaで実装したオープンソースエミュレート（MQTTをサポート）
- [pimatic](https://pimatic.org/) - MQTTプラグインを内蔵
- [she - smart home engine](https://github.com/hobbyquaker/she) - AI支援を備えたスクリプト可能なスマートホームオートメーションエンジン
- [shopsavvy-mqtt](https://github.com/shopsavvy/shopsavvy-mqtt) - Home AssistantのMQTT発見をサポートする、製品価格データを発行するMQTTブリッジ
- [knx2mqtt](https://c0d3.sh/smarthome/knx2mqtt) - テレグラムの両方向統合（HomeAssistantの内蔵サポートへの代替）


### 照明 <a id="lighting"></a>

- [Arilux_AL-LC0X](https://github.com/mertenats/Arilux_AL-LC0X) - アリルックスLED制御器向けのMQTTを用いた代替ファームウェア
- [chromoflex2mqtt](https://github.com/owagner/chromoflex2mqtt) - MQTTを用いてChromoflex USP3 RGB LEDモジュールを制御
- [hue2mqtt.js](https://github.com/hobbyquaker/hue2mqtt.js) - フィリップスHueブリッジとMQTTの間のインターフェース
- [MQTT DMX Controller](https://github.com/hobbyquaker/mqtt-dmx-controller) - MQTTをサポートするDMX制御器
- [mqtt-dmx-sequencer](https://github.com/hobbyquaker/mqtt-dmx-sequencer) - MQTT DMX制御器のヘッドレス版 — MQTT DMX制御器からエクスポートされたシーンやシーケンスをMQTTで制御可能
- [sunricher-wifi-mqtt](https://github.com/magcode/sunricher-wifi-mqtt) - MQTTを用いてSunricher LEDデバイスを制御
- [TRADFRI2MQTT](https://github.com/hardillb/TRADFRI2MQTT) - IKEA TRÅDFRI Light GatewayとMQTTの間のブリッジ


### ホームエンターテインメント <a id="home-entertainment"></a>

- [airtunes2mqtt](https://github.com/hobbyquaker/airtunes2mqtt) - Airplay/Airtunesデバイスを用いたマルチルームオーディオのMQTT制御
- [bravia2mqtt](https://github.com/forty2/bravia2mqtt) - MQTTを用いてソニーブラビアTVを制御
- [broadlink-mqtt](https://github.com/eschava/broadlink-mqtt) - BroadLink RMデバイスを制御するMQTTクライアント
- [chromecast-mqtt-connector](https://github.com/nohum/chromecast-mqtt-connector) - MQTTを用いてGoogle Chromecastデバイスを制御
- [harmony-api](https://github.com/maddox/harmony-api) - HTTPまたはMQTTで複数のローカルHarmonyホームハブをクエリ・制御できるシンプルサーバー
- [htd2mqtt](https://github.com/TheOriginalAndrobot/htd2mqtt) - HTD LyncオーディオシステムとMQTTの間のブリッジ
- [kodi2mqtt](https://github.com/owagner/kodi2mqtt) - KodiメディアセンターインスタンスとMQTTの間のインターフェース
- [lgtv2mqtt](https://github.com/hobbyquaker/lgtv2mqtt) - LG WebOSスマートTVとMQ及の間のインターフェース
- [lirc2mqtt](https://github.com/hobbyquaker/lirc2mqtt) - infraredを[LIRC](https://www.lirc.org)を介して送受信します。
- [mopidy-mqtt](https://github.com/magcode/mopidy-mqtt) - MopidyにおけるMQTT機能
- [MQTT-DashCast-Docker](https://github.com/mukowman/MQTT-DashCast-Docker) - MQTT DockerでChromecastにDashCastセッションを起動
- [mqtt2atlonamatrix](https://github.com/forty2/mqtt2atlonamatrix) - MQTTを用いてAtlona HDMIマトリクススイッチを制御
- [mqtt2tivoremote](https://github.com/forty2/mqtt2tivoremote) - TiVo DVRのリモコンをMQTTスマートホームインターフェースで利用可能に
- [onkyo2mqtt](https://github.com/owagner/onkyo2mqtt) - Onkyo AVRのEISCPネットワークリモートプロトコルとMQTTの間のインターフェース。onkyo-eiscpライブラリを使用。
- [sonos2mqtt](https://github.com/svrooij/sonos2mqtt) - SonosとMQTTの間のブリッジ。
- [VLC MQTT Module](https://wiki.videolan.org/Documentation:Modules/mqtt/) - MQTTを介してVLCを制御。
- [xbmc2mqtt](https://github.com/gordonjcp/xbmc-mqtt) - XBMC向けのシンプルなプラグイン。MQTTブローカー上の特定のトピックにリスニングし、ポップアップメッセージを表示。
- [yamaha-avr2mqtt](https://github.com/akentner/yamaha-avr2mqtt) - Yamaha AVRとMQTTを接続するためのシンプルなアダプタ。


### スマートメーター <a id="smart-metering"></a>

- [bcontrol2mqtt](https://github.com/hobbyquaker/bcontrol2mqtt) - TQ Energy Manager / [Busch-Jäger Energy Monitor](https://www.busch-jaeger.de/files/files_ONLINE/Brosch%c3%bcre_EnergyMonitor_druck.pdf)からの測定値をMQTTに発行します。
- [rpi-mqtt-monitor](https://github.com/hjelev/rpi-mqtt-monitor) - Raspberry PiまたはUbuntuコンピュータのシステムヘルスとパフォーマンスをHome Assistant経由でMQTTを使って最も簡単に追跡できます。


### メッセージング <a id="messaging"></a>

- [mqtt-irc-bot](https://github.com/dobermai/mqtt-irc-bot) - MQTTとIRC／IRCとMQTTの間のブリッジまたはボット。

- [mqttwarn](https://github.com/jpmens/mqttwarn) - MQTTトピック（ワイルドカード付き）にサブスクライブし、プラグ可能なサービスに通知。

- [twitter-to-mqtt](https://github.com/knolleary/twitter-to-mqtt) - Twitter Streaming APIを使用してツイートを取得し、MQTTトピックに再配信するPythonのデーモン。


### その他 <a id="misc"></a>

- [AlexaMqttBridge](https://github.com/mhdawson/AlexaMqttBridge) - Amazon AlexaとMQTTの間のブリッジ。
- [anpr2mqtt](https://anpr2mqtt.rhizomatics.org.uk) - ファイルサーバー上の画像をリスニングし、MQ及てHome AssistantエンティティをMQTTディスカバリーで生成。
- [bt-mqtt-gateway](https://github.com/zewelor/bt-mqtt-gateway) - 簡単に拡張可能なBluetoothとMQTTのゲートウェイ。現在サポートしているもの：EQ3スマートサーモスタット、Xiaomi Mi Scale、Linakデスク、MySensorsおよびXiaomi Mi Flora植物センサー。
- [buderus2mqtt](https://github.com/krambox/buderus2mqtt) - Buderus KM200インターネットゲートウェイとMQTTの間のブリッジ。
- [chrome2mqtt](https://github.com/tbowmo/chrome2mqtt) - Chromecast（音声および動画）にMQTT制御エンドポイントを有効にするためのPythonプログラム。
- [dashbutton2mqtt](https://github.com/hobbyquaker/dashbutton2mqtt) - Amazon Dash Buttonの押下をMQTTに発行。
- [flowerpower2mqtt](https://github.com/hobbyquaker/flowerpower2mqtt) - Parrot Flower Power植物センサーの測定値をMQTTに発行。
- [gBridge](https://github.com/kservices/gBridge) - Googleアシスタントにより受信された声命令をMQTTメッセージに変換して、(ほぼ)すべてのスマートホームデバイスおよびすべてのスマートホームソフトウェアを制御。
- [haiku2mqtt](https://github.com/forty2/haiku2mqtt) - HaikuスマートファンとMQTTの間のブリッジ。
- [homely](https://github.com/baol/homely) - Domoticzおよびその他のシステムとの接続を可能にするGoのデーモンのコレクション。
- [kobold2mqtt](https://github.com/krambox/kobold2mqtt) - Vorwerk Kobold Vr200インターネットゲートウェイとMQTTの間のブリッジ。
- [leaf-python-mqtt](https://github.com/glynhudson/leaf-python-mqtt) - Nissan Leaf APIからデータを抽出し、MQTTに投稿。
- [miflora-mqtt-daemon](https://github.com/ThomDietrich/miflora-mqtt-daemon) - Linuxサービスで、Xiaomi Mi Flora植物センサのデータをMQTTブローカーに送信します。
- [MQTT.Cool](https://mqtt.cool) - ウェブゲートウェイで、リアルタイムデータをウェブクライアントに送信する際に、自動的にスロットリングを適用してMQTTブローカーを最適化します。
- [mqtt2ble](https://github.com/hardillb/mqtt2ble) - MQTTトピックをBLE GATT特性に橋渡しする方法です。
- [mqttclpro](https://github.com/dc297/mqttclpro) - AndroidアプリにTasker統合されたMQTTクライアント。
- [mqttDB](https://github.com/hobbyquaker/mqttDB) - MQTTインターフェースを備えたJSONストア。
- [mqtt-camera-streamer](https://github.com/robmarkcole/mqtt-camera-streamer) - 接続されたカメラから画像をMQTT経由でストリームし、Streamlitで表示します。
- [MQTT Joystick Controller](https://github.com/Vincenzo-Petrolo/MQTT-Joystick-Controller) - オープンソースのAndroidアプリでスマートフォンですべての操作が可能。Google Playからダウンロード可能です。
- [mqtt-transformer](https://github.com/tg44/mqtt-transformer) - シンプルなサービスで、MQTT上にJSONメッセージを消費・変換・周期的に再送します。
- [node-mqtt-for-anki-overdrive](https://github.com/IBM-Cloud/node-mqtt-for-anki-overdrive) - Anki Overdrive用のNode.jsコントローラとMQTTAPI。
- [parrot-sample](https://github.com/IBM-Cloud/parrot-sample) - MQTTを使ってParrot ARドローンを制御するサンプルコード。
- [QuIXI](https://github.com/ixian-platform/QuIXI) - Ixian分散P2PネットワークとMQTT/RESTの間のブリッジ。IoTデバイス間の暗号化ペアトペアメッセージングを可能にし、後量子セキュリティ（ML-KEM + AES-2及ChaCha20）を提供します。
- [serial2mqtt](https://github.com/vortex314/serial2mqtt) - 低コストマイクロコントローラをシリアルポートのみでMQTTに接続するためのLinuxゲートウェイ。
- [snowboy2mqtt](https://github.com/hobbyquaker/snowboy2mqtt) - Snowboyのホットワード検出時にMQTTメッセージを発行します。
- [speedtest2mqtt](https://github.com/hobbyquaker/speedtest2mqtt) - speedtest-cliを実行し、結果をMQTT経由で発行します。
- [unifi2mqtt](https://github.com/hobbyquaker/unifi2mqtt) - Ubiquiti Unifiの接続クライアントをMQTTに発行します。
- [Valetudo](https://github.com/Hypfer/Valetudo) - Xiaomi（Roborock）のベイクロボットファームウェアにMQTTとWebインターフェースを搭載。
- [wlan-thermo-mqtt-addon](https://bitbucket.org/IOcastor/wlan-thermo-mqtt-addon/) - 人気のあるDIYバーベキュー温度計のアドオン。
- [mqtt-tasker](https://github.com/stesie/TaskerMqtt) - Android Tasker用のMQTTプラグイン。
- [MQTT2ETCD](https://github.com/David-Lor/MQTT2ETCD) - MQTT-ETCDゲートウェイ：MQTTを通じてETCDのキーをPUTし、MQTTトピックでETCDのキー変更を監視します。


## 可視化・ダッシュボード <a id="visualization-dashboards"></a>

- [awtSCADA](https://github.com/larionovavi-stack/awtscada) - MQTTをサポートする産業用SCADA/HMIシステム（IEC 61850、OPC UA、Modbus TCPを含む）。ブラウザの任意のブラウザ上で1つのHTMLファイルで実行可能。インストール不要。53の機能ブロック、65のグラフィック要素、リアルタイムトレンドを備えています。
- [Crouton](https://github.com/edfungus/Crouton) - IoTネットワークに接続するダッシュボード。MQTTとJSONのみを使用。
- [d3-MQTT-Topic-Tree](https://github.com/hardillb/d3-MQTT-Topic-Tree) - d3の可縮樹構造とWebSocket上のMQTTを活用したトピックツリー閲覧機能。
- [Feezal](https://github.com/feezal/feezal) - Web ComponentsとMQTTを活用したダッシュボード編集器。
- [HelloIoT](https://github.com/adrianromero/helloiot) - MQTTクライアントとダッシュボードアプリケーション。
- [HOMR-REACT](https://github.com/klauserber/homr-react) - 設定可能なMQTT可視化ツール。
- [Linear MQTT Dashboard](https://github.com/ravendmaster/linear-mqtt-dashboard) - 簡単でカスタマイズ可能なコントロールパネル - MQTTクライアント。
- [MMM-mqtt](https://github.com/javiergayala/MMM-mqtt) - これはMagicMirror²の拡張です。MQTTトピックにサブスクライブし、それらを表示できるようにします。
- [mqtt-dashboard](https://github.com/jmischler72/mqtt-dashboard) - 自分でホストできるMQTTダッシュボード／エクスプローラー。cron、ボタン、ログ、トピックブラウザなどのドラッグ＆ドロップパネルを備え、MQTTトピックの相互作用と監視を支援。
- [MQTT Dash](https://play.google.com/store/apps/details?id=net.routix.mqttdash&hl=de) - Androidアプリ：このアプリで、MQTT対応のIoTスマートホームデバイスやアプリケーションにダッシュボードを作成できます。
- [MQTT-Hyperdash](https://github.com/kollokollo/MQTT-Hyperdash) - Linux／Raspberry Pi向けの独立したユニバーサルMQTTダッシュボード。
- [MQTT.Cool Test Client](https://testclient-cloud.mqtt.cool) - MQTT.Coolと任意のMQTTブローカー間の相互作用をテストするためのウェブインターフェース。
- [mqtt-panel](https://github.com/fabaff/mqtt-panel) - MQTT向けのウェブインターフェース。
- [mqtt-prometheus-message-exporter](https://github.com/tg44/mqtt-prometheus-message-exporter) - 小さなサービスで、MQTTメッセージをPrometheusメトリクスに変換します。
- [mqtt-svg-dash](https://github.com/jpmens/mqtt-svg-dash) - MQTTにサブスクライブし、メッセージからJSONを抽出して、SVGページにライトを点滅させる。
- [MQTT-Tiles](https://github.com/flespi-software/MQTT-Tiles) - MQTTベースのIoTダッシュボード可視化ツール。ダッシュボードの共有が容易。WSSプロトコルをサポートする任意のMQTTブローカーと互換。
- [mqtt2highcharts](https://github.com/matbor/mqtt2highcharts) - Highchartsを使用して、サブスクライブしたMQTTトピックからリアルタイムの数字データを可視化。
- [MYHELLOIOT](https://adrianromero.github.io/myhelloiot/) - MQTTダッシュボードアプリケーション。
- [node-red-dashboard](https://github.com/node-red/node-red-dashboard) - Node-RED向けのダッシュボードUI。
- [PlotJuggler](https://github.com/facontidavide/PlotJuggler) - 時系列データ（MQTT、Websockets、ZeroMQ、UDPなどからのデータ）を可視化。JSON、CBOR、BSON、Message Packなどデータフォーマットをサポート。高速で強力で直感的なクロスプラットフォームツール。
- [ZigDash](https://gitlab.com/tamamg/zigdash) - Zigbee2MQTT向けに構築された、無料かつオープンソースのMaterial 3 MQTTダッシュボード（Android用）。自動デバイス発見をサポート。


可視化・ダッシュボード作成に使えるほかのツールは[プラットフォーム](#platforms)と[スマートホーム統合ソフトウェア](#smart-home-integration-software)にも掲載しています。


## アーキテクチャ・規約 <a id="architecture-convention"></a>

- [mqtt-smarthome](https://github.com/mqtt-smarthome/mqtt-smarthome) - MQTTを中央メッセージバスとして活用したスマートホーム自動化 – アーキテクチャ提案
- [The Homie Convention](https://github.com/homieiot/convention) - IoT向け軽量MQTT規格

## セキュリティ・暗号化 <a id="security-encryption"></a>

- [Let's Encrypt Mosquitto Docker Container](https://hub.docker.com/r/pythonlinks/letsencrypt-mosquitto) - ブローカー向けより簡単なTLS証明書管理
- [mqttsa](https://github.com/stfbk/mqttsa) - サイバーセキュリティ対策を目的としたブローカーの誤設定検出
- [MQTT-PWN](https://github.com/akamai-threat-research/mqtt-pwn) - IoTブローカーに対するパネルテストおよびセキュリティ評価作業
- [Teserakt E4](https://teserakt.io/) - MQTTおよびその他のM2Mプロトコルにおける端末間暗号化と鍵管理 – オープンソースおよび有料プラン
