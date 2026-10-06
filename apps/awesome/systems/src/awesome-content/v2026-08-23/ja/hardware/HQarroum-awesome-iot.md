---
title: Awesome IoT
description: IoT向けのハードウェア、OS、言語、フレームワーク、ミドルウェア、ツール、通信プロトコル、規格・団体、書籍・記事・論文。
licenseSource: github-HQarroum-awesome-iot-readme-md
toc:
  minLevel: 2
  maxLevel: 4
---
# Awesome IoT

IoTプロジェクト向けのハードウェア、OS、プログラミング言語、フレームワーク、ミドルウェア、ツールを紹介します。通信層別のプロトコル解説に加え、関連技術、規格・団体、書籍、記事、論文を掲載しています。

説明、価格、性能値、対応状況、過去の予測、書籍の情報は、記録された上流READMEに基づきます。

## ハードウェア <a id="hardware"></a>

- [Arduino](https://www.arduino.cc/) - 扱いやすいハードウェアとソフトウェアを基盤とする、オープンソースの電子工作プラットフォーム。対話型プロジェクトを作る人を対象とする。
- [BeagleBoard](http://beagleboard.org/) - Texas InstrumentsがDigi-KeyおよびNewark element14と共同で製造する、低消費電力のオープンソース・シングルボードコンピューター。
- [Dragonboard](https://developer.qualcomm.com/hardware/dragonboard-410c) - Arrow ElectronicsのDragonBoard 410cは、ミドルレンジのQualcomm® Snapdragon™ 410Eプロセッサーを基盤とする開発ボード。クレジットカード大の基板に処理機能、Wi-Fi、Bluetooth、GPSを搭載。
- [ESP32](https://www.espressif.com/en/products/hardware/esp32/overview) - ESP8266の後継で、高速なデュアルコアプロセッサーと内蔵周辺機能を備える。原文では、ネット接続製品のマイクロコントローラーを置き換えるものとして紹介されている。
- [HomeMaster](https://www.home-master.eu/) - DINレールに取り付ける、ESP32ベースのオープンソースなモジュール式スマートホーム基盤。MiniPLC・MicroPLCコントローラー、リレー、調光器、RGBCCT、電力量計測、漏水検知、警報の各モジュールを備え、ESPHomeとHome Assistantを使ってすべてローカルで動作。ファームウェアと回路図は[GitHub](https://github.com/isystemsautomation/homemaster-dev)で公開。
- [HummingBoard](https://www.solid-run.com/freescale-imx6-family/hummingboard/) - 1GHzのFreescale i.MX6 SoCを基盤とする、Linux・Android対応のオープンソースSBC 3機種のシリーズ。Raspberry Piに似た26ピンのI/Oコネクターを備える。
- [Intel Galileo](https://www-ssl.intel.com/content/www/us/en/do-it-yourself/galileo-maker-quark-board.html) - Intel®アーキテクチャーに基づくArduino*認定の開発・試作ボードシリーズの最初の製品、Intel® Galileo Gen 2。メイカー、学生、教育者、電子工作を楽しむ人向けに設計。
- [Microduino](https://www.microduino.cc/) - メイカー、デザイナー、エンジニア、学生、幅広い年代の工作愛好家がオープンソースのプロジェクトや新たな作品を作るための、小型で積み重ねられるMicroduino・mCookieの電子ハードウェア。
- [Node MCU (ESP 8266)](http://www.nodemcu.com/index_en.html) - Luaスクリプト言語を使うオープンソースのIoTプラットフォーム。eLuaプロジェクトを基盤とし、ESP8266 SDK 0.9.5上に構築。
- [OLinuXino](https://www.olimex.com/Products/OLinuXino/open-source-hardware) - GPIOを備え、ハードウェアとソフトウェアをオープンソースで提供する、産業用途のLinuxシングルボードコンピューター。原文の記載価格はEUR 30、動作温度範囲は-25°C〜+85°C。
- [Odroid](http://www.hardkernel.com/) - ODROIDはOpen + Droidに由来する名称。ハードウェアとソフトウェアの開発プラットフォーム。
- [Particle](https://www.particle.io) - IoT製品の試作、規模拡大、管理を支援するハードウェア・ソフトウェアのツール群。
- [Pinoccio](https://www.open-electronics.org/pinoccio-wifi-mesh-networking-for-arduino-and-iot-available-now/) - IoT機器にメッシュネットワーク機能とWi-Fi経由のインターネット接続を追加する、Arduino互換のソリューション。
- [PiSpot Show](https://github.com/GeiserX/PiSpot-Show) - 天気情報との連携とPiJuiceのバッテリー管理を備えた、Raspberry PiによるWi-Fi利用券の表示システム。
- [PiSpot Watch](https://github.com/GeiserX/PiSpot-Watch) - GPConnect向けのPiSpot Watchを動作させるソフトウェア。機器はRaspberry Pi ZeroとPaPiRus Zeroで構成。
- [AutoPi](https://github.com/autopi-io/autopi-core) - Raspberry PiベースのOBD-II機器、AutoPiドングル用のオープンソース中核ソフトウェア。ネット接続車両のテレマティクス、CANバスデータ収集、自動車向けIoT用途に使用。
- [Raspberry Pi](https://www.raspberrypi.org/) - 原文で低価格と紹介される、クレジットカード大のコンピューター。モニターやテレビに接続し、標準的なキーボードとマウスを使って、ウェブ閲覧、高解像度動画、表計算、文書作成、ゲームなどのデスクトップ用途に使用。
- [Tessel](https://tessel.io/) - 完全にオープンソースで、コミュニティが主導するIoT・ロボティクスの開発プラットフォーム。開発ボード、追加ハードウェアモジュール、そこで動作するソフトウェアを含む。
- [UDOO](http://www.udoo.org) - Arduino 2互換のマイクロコントローラーを内蔵したシングルボードコンピューター。コンピューター科学教育、メイカー、IoT向けに設計。
- [Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/) - Raspberry Pi Foundationが開発したRP2040マイクロコントローラーを搭載する小型ボード。原文には、IoT向けの2.4GHz 802.11n無線LAN搭載モデルも記載されている。
- [Rinho Telematics](https://rinho.com.ar/en) - CANバス（J1939/FMS）に標準対応し、オフラインデータをダウンロードするためのWi-Fi接続への切替とBLE 5.0センサーを備えるGPSトラッカー。Traccar・Wialonに対応。
- [WisBlock](https://www.rakwireless.com/en-us/products/wisblock) - IoTソリューションへ低消費電力広域ネットワーク（LPWAN）を導入するためのモジュール式システム。ベースボード、中心となる演算モジュール、複数のセンサーモジュールの組み合わせで構成。

## ソフトウェア <a id="software"></a>

### オペレーティングシステム <a id="operating-systems"></a>

- [Apache Mynewt](https://mynewt.apache.org/) - 電力・メモリー・ストレージの制約下で長期間動作するIoT接続機器向けの、リアルタイムでモジュール式のOS。最初に提供された通信スタックはBLE 4.2。
- [ARM mbed](http://www.mbed.com/) - 商用の規格準拠IoTソリューションを大規模に作成・展開するために、OS、クラウドサービス、ツール、開発者エコシステムを提供するARM® mbed™ IoT Device Platform。
- [Contiki](http://www.contiki-os.org/) - IoT向けのオープンソースOS。小型・低価格・低消費電力のマイクロコントローラーをインターネットに接続。
- [FreeRTOS](http://www.freertos.org/) - 組み込み機器向けのリアルタイムOSカーネル。原文には35種類のマイクロコントローラーへの移植が記載されている。
- [Android Things](https://developer.android.com/things/) - 注意：記録された原文では非推奨とされている。接続機器全体へAndroidプラットフォームを拡張し、設定や機器同士・スマートフォンとの連携を容易にするものとして紹介。
- [OpenWrt](https://openwrt.org/) - Linuxカーネルを基盤とし、主に組み込み機器でネットワーク通信をルーティングするOS。Linuxカーネル、util-linux、uClibcまたはmusl、BusyBoxを主要構成要素とし、家庭用ルーターの限られたストレージとメモリーに収まるようサイズを最適化。
- [Snappy Ubuntu](https://wiki.ubuntu.com/Snappy) - トランザクション単位の更新を採用したUbuntu派生版。原文では、当時のUbuntuと同じライブラリーを持つ最小構成のサーバーイメージと、アプリケーションを提供する簡素な仕組みが説明されている。
- [Mbed OS](https://os.mbed.com/) - 低消費電力でリソースが限られたネット接続Cortex-Mボード向けの、オープンソースIoT用OS。マイクロコントローラーの抽象化層を提供し、Mbed対応ボードで動作するC/C++アプリケーションを開発可能。
- [NodeOS](http://node-os.com/) - すべてJavaScriptで記述され、npmで管理され、Linuxカーネル上で動作するOS。
- [Raspbian](https://raspbian.org/) - Debianを基盤とし、Raspberry Piのハードウェア向けに最適化された無料のOS。
- [RIOT](http://www.riot-os.org/) - IoT向けのOS。
- [Tiny OS](https://github.com/tinyos/tinyos-main) - センサーネットワーク、ユビキタスコンピューティング、パーソナルエリアネットワーク、スマートビル、スマートメーターなどの低消費電力無線機器向けに設計された、BSDライセンスのオープンソースOS。
- [Toit](https://toit.io/) - 堅牢で障害に強い機器運用、機器とデータの管理、ネット接続された組み込み機器のファームウェア・アプリケーションの無線更新を提供するプラットフォーム。
- [UBOS](https://ubos.net/) - ウェブアプリケーションを動かす家庭用サーバーや独立系IoT機器のシステム管理を簡素化するLinuxディストリビューション。Arch Linux派生で、PC、Raspberry Pi、ESPRESSObin、クラウド上で動作。
- [Windows 10 IoT Core](https://dev.windows.com/en-us/iot) - 小型の産業用ゲートウェイからPOS端末やATMなどの大型で複雑な機器まで、幅広いインテリジェント機器を対象とするWindows 10のエディション群。
- [Zephyr Project](https://www.zephyrproject.org/) - 複数のハードウェアアーキテクチャーに対応し、リソースが限られた機器向けに最適化され、セキュリティを考慮して設計された、拡張可能なリアルタイムOS（RTOS）。

### プログラミング言語 <a id="programming-languages"></a>

組み込み開発向けのコンパイル型・インタープリター型言語。ドメイン固有言語（DSL）も含みます。

- [AtomVM](https://atomvm.org/) - Erlang、Elixir、Gleamなどの関数型言語をマイクロコントローラーで実行するためのプロジェクト。
- [C](https://en.wikipedia.org/wiki/C_(programming_language)) - 構造化プログラミング、変数の字句スコープ、再帰を支援する、汎用の命令型プログラミング言語。静的な型システムで多くの意図しない操作を防ぐ。
- [C++](https://en.wikipedia.org/wiki/C%2B%2B) - 命令型、オブジェクト指向、ジェネリックプログラミングの機能と、低水準のメモリー操作機能を備える汎用プログラミング言語。
- [Groovy](http://www.groovy-lang.org/) - 簡潔な構文を持つ、Javaプラットフォーム向けの動的言語。型指定は任意で、静的型付けと静的コンパイルにも対応。原文ではSmartThingsの開発環境でスマートアプリケーションを作る用途が説明されている。
- [Lua](http://www.lua.org/) - 軽量で組み込み可能な、動的型付けのスクリプト言語。レジスターベースの仮想マシンでバイトコードを解釈し、インクリメンタルなガベージコレクションによる自動メモリー管理を提供。設定、スクリプト、迅速な試作に使用。
- [eLua](http://www.eluaproject.net/) - Embedded Luaの略。Lua言語の完全な実装を組み込み環境に提供し、効率的で移植性のある組み込みソフトウェア開発向けの機能を追加。
- [ELFE](http://c3d.github.io/elfe/) - センサーやアクチュエーターなどの小型機器群の設定・制御に適した、小規模な汎用プログラミング言語。
- [MicroPython](https://docs.micropython.org/) - マイクロコントローラーやリソースに制約のあるシステム向けの、小型のPython実装。
- [PikaPython](https://github.com/pikastech/pikapython) - 原文でRAM 4KBで動作し、依存関係がなく、Cと連携できると紹介されているPython実装。
- [PharoThings](https://github.com/pharo-iot/PharoThings) - [Pharo](https://pharo.org/)を基盤とするIoTプロジェクト向けのライブプログラミング環境。Pharoは純粋なオブジェクト指向言語と開発環境で、簡素さと即時のフィードバックを重視。
- [Rust](https://www.rust-lang.org/) - 性能、信頼性、生産性を重視する言語。原文ではメモリー安全性、借用チェッカー、安全な並行処理が特徴として挙げられている。
- [TinyGo](https://tinygo.org/) - LLVMを基盤とする新たなコンパイラーで、Go言語をマイクロコントローラーや現代のウェブブラウザーへ提供するプロジェクト。BBC micro:bitやArduino Unoなど、多様なボード向けにプログラムをコンパイル・実行可能。
- [Toitlang](https://toitlang.org/) - Pythonに近い構文を持ち、マイクロコントローラー向けに基礎から設計された、IDE連携を備える高水準言語。原文ではMicroPythonの少なくとも20倍の速度とされている。

### フレームワーク <a id="frameworks"></a>

- [AllJoyn](https://openconnectivity.org/developer/reference-implementation/alljoyn) - 機器とアプリケーションが互いを検出し、通信するためのオープンソース・ソフトウェアフレームワーク。
- [Apple HomeKit](https://developer.apple.com/homekit/) - 家庭内の接続アクセサリーと通信し、制御するためのフレームワーク。
- [homebridge-blink-security](https://github.com/BitWise-0x/homebridge-blink-security) - Blinkのカメラ、ドアベル、サイレンをApple HomeKitへ統合するHomebridgeプラグイン。ライブ映像配信、警戒の有効化・解除、動作検知を備える。
- [homebridge-smartrent](https://github.com/BitWise-0x/homebridge-smartrent) - リアルタイムのWebSocket接続で、SmartRentの鍵、サーモスタット、漏水センサー、スイッチをApple HomeKitへ統合するHomebridgeプラグイン。
- [AREG SDK](https://github.com/aregtech/areg-sdk) - 分散コンピューティングと[ミストコンピューティング](https://csrc.nist.gov/publications/detail/sp/500-325/final)を実現する、インターフェース中心のリアルタイム非同期通信エンジン。接続された機器が軽量な分散サーバーのように相互作用し、サービスを提供。
- [Astarte](https://github.com/astarte-platform/astarte) - 機器群を遠隔のアプリケーションへ接続する、Elixir製のオープンソースIoTプラットフォーム。データモデリング、データ量の自動削減、リアルタイムイベントを提供。原文では、付属SDKによるLinuxとESP32への対応が挙げられている。
- [Blynk](http://www.blynk.cc) - 接続機器向けのiOS・Androidアプリケーションを作るプラットフォーム。スマートフォン上でウィジェットをドラッグ＆ドロップしてグラフィカルな操作画面を構築。Arduino、Raspberry、ARM mbed、Particle、RedBearなどの試作プラットフォームで、Ethernet、WiFi、Bluetooth、GSM/GPRS、USB/シリアル接続に対応。
- [Countly IoT Analytics](http://github.com/countly/countly-server) - モバイル機器とIoT機器向けの汎用分析プラットフォーム。オープンソースで提供。
- [Eclipse Ditto™](https://eclipse.org/ditto/) - デジタルツインを構築するフレームワーク。接続された物理機器をクラウド上に表現し、その機器とやり取りするAPIを提供。認可、検索、接続の機能を内蔵し、MQTTブローカー、HTTPエンドポイント、Apache Kafkaなどの外部システムと統合。
- [Eclipse Smarthome](https://eclipse.org/smarthome/) - Raspberry Pi、BeagleBone Black、Intel Edisonなどの組み込み機器で動作するよう設計されたフレームワーク。原文ではJava 7準拠のJVMと、Eclipse EquinoxなどのOSGi（4.2以上）フレームワークを要件としている。
- [Freedomotic](http://www.freedomotic.com) - 現代的なスマート空間を構築・管理するための、柔軟性とセキュリティを考慮したオープンソースIoT開発フレームワーク。個人のホームオートメーションと、スマート店舗、周辺環境を考慮するマーケティング、監視・分析などの業務用途を対象とする。Javaで記述され、標準的なビル自動化プロトコルと自作の仕組みの両方と連携。
- [Iotivity](https://iotivity.org/) - IoTの新たな要求に応えるため、機器同士を円滑に接続するオープンソース・ソフトウェアフレームワーク。
- [Iotellect](https://iotellect.com) - 機器統合、データ収集、リアルタイムの可視化を行うローコードIoTプラットフォーム。ドラッグ＆ドロップのUI構築機能を備え、MQTT、OPC UA、Modbusなど、原文では50以上の産業用プロトコルに対応するとされている。
- [Jumpstarter](https://github.com/jumpstarter-dev/jumpstarter) - 実物と仮想のIoTハードウェアで自動テストを行う、オープンソースのHardware-in-the-Loopテストフレームワーク。CI/CDと統合。
- [Kura](https://eclipse.org/kura/) - サービスゲートウェイで動作するM2Mアプリケーション向けの、Java/OSGiベースのコンテナーを提供するプロジェクト。M2Mで一般的に必要なサービスをオープンソースで実装し、既存の実装が利用できる場合はそれを集約。
- [Lelylan](http://www.lelylan.com/) - 軽量なマイクロサービス構成のIoTクラウドプラットフォーム。ハードウェアとプラットフォームに依存せず、ESP8266から業務用の組み込みハードウェアまで接続。パブリッククラウド、独自のデータセンター、両者を組み合わせた環境で、仮想化環境でもベアメタルでも動作。
- [Macchina.io](https://github.com/macchina-io/macchina.io) - Linux機器で動作するIoTアプリケーションを構築するソフトウェアフレームワーク、macchina.io EDGE。ウェブ連携、セキュリティ、モジュール構成、拡張性を備えるJavaScript・C++の実行環境と、すぐに使える実績のあるソフトウェア部品を提供。センサー、他の機器、クラウドサービスとの通信や、機器・エッジ機器・ローカルネットワーク内でのセンサーデータの処理、分析、フィルタリングに使用。
- [Mihini](https://wiki.eclipse.org/Mihini) - Linux上で動作し、M2Mアプリケーションを構築する高水準APIを提供する組み込み実行環境を目指すプロジェクト。M2Mシステムの入出力へのアクセスや通信層を提供し、開発の容易さと移植性を支援。
- [OpenHAB](http://www.openhab.org/) - OSGiフレームワーク（Equinox）上へ配置するOSGiバンドル群で構成される実行環境。Javaのみで実装され、動作にJVMを必要とする。OSGiによるモジュール構成を採用し、サービスを停止せず、実行中に機能を追加・削除可能。
- [Gobot](http://gobot.io/) - Goで記述された、ロボティクス、フィジカルコンピューティング、IoT向けのフレームワーク。
- [Home Assistant](https://github.com/home-assistant/home-assistant) - Python 3で動作するホームオートメーション基盤。家庭内の機器の状態を把握・制御し、その制御を自動化するためのプラットフォームを目指す。
- [Lightweight MQTT Machine Network](http://lwmqn.github.io/) - OMA LWM2M v1.0仕様の一部に従い、IPベースのSmart Objectモデルで機器ネットワーク管理の最低要件を満たすオープンソース・プロジェクト、LWMQN。サーバー側と機器側のライブラリーを提供し、JavaScriptとNode.jsによるIoTシステム全体の開発を支援。関連資料：IPSO Allianceの[技術資料集](http://www.ipso-alliance.org/ipso-community/resources/technical-archive/)。
- [Thingsboard IoT Gateway](https://github.com/thingsboard/thingsboard-gateway) - 従来のシステムや第三者のシステムへ接続された機器を、OPC-UAとMQTTでThingsboard IoT Platformへ統合するオープンソースIoTゲートウェイ。
- [Pimatic](https://pimatic.org/) - node.jsで動作するホームオートメーション・フレームワーク。家庭内の制御・自動化処理に共通する、拡張可能な基盤を提供。
- [IOTA](https://iota.org/) - IoT向けのオープンソース分散台帳プロトコル。ブロックチェーンに代えて有向非巡回グラフ（DAG）を使用。
- [MyController](https://github.com/mycontroller-org/mycontroller) - 家庭、オフィスなど、さまざまな場所を対象とするオープンソースIoT自動化コントローラー、MyController.org。
- [Mozilla WebThings](https://iot.mozilla.org/) - ウェブを通じて機器を監視・制御するオープンなプラットフォーム。
- [HStreamDB](https://github.com/hstreamdb/hstream) - IoTデータの保存とリアルタイム処理向けに構築されたストリーミングデータベース。
- [IoTSharp.Gateways](https://github.com/IoTSharp/Gateways) - 従来のシステムや第三者のシステムへ接続された機器を、ModBus、OPC-UA、BACNet、MQTTでIoTSharp IoT Platformへ統合するオープンソースIoTゲートウェイ。
- [ForestHub](https://foresthub.ai) - エッジAIエージェントのプラットフォーム。オープンソース実行環境[edge-agents](https://github.com/ForestHubAI/edge-agents)により、Linuxエッジゲートウェイ（Raspberry Pi、Jetson）上でAIエージェントをオフライン実行。ローカルのSLMとクラウドのLLMを併用し、GPIO・UART・MQTTを主要なノードとして扱うビジュアル構築機能を備える。

### ミドルウェア <a id="middlewares"></a>

- [Corlysis](https://corlysis.com/) - GrafanaとInfluxDBを基盤とする、時系列データの保存・可視化プラットフォーム。原文では、これらのオープンソース・プロジェクトをSpaceXも利用していると説明されている。
- [IFTTT](https://ifttt.com/) - Gmail、Facebook、Instagram、Pinterestなどのウェブサービスの変化をきっかけに、単純な条件文を連結した「レシピ」を実行するウェブサービス。名称はIf This Then Thatの略で、発音はgiftからgを除いたもの。
- [OPC Router](https://www.opc-router.com/opc-router-details/) - OPC UA、Mqtt、SQL、REST、SAP、InfluxDB、プリンターなど、各種プラグインを備えるIoTゲートウェイ。
- [Huginn](https://github.com/cantino/huginn) - オンラインの処理を自動実行するエージェントを構築するシステム。
- [Kaa](http://www.kaaproject.org/) - IoTソリューションを迅速に作成するためのオープンソース・ミドルウェア基盤。
- [Losant](https://losant.com) - 複雑な接続ソリューションを迅速かつ安全に構築するための開発者向けプラットフォーム。RESTやMQTTなどのオープンな通信規格で、1台から数百万台規模の機器を接続。大量のセンサーデータを把握・定量化するための収集、集約、可視化機能を提供。ドラッグ＆ドロップのワークフロー編集で、プログラミングせずに処理、通知、機器間通信を開始可能。
- [MicroServiceBus.com](https://microservicebus.com) - Azure、AWS、IBM IoT Hub向けの機器管理プラットフォーム。GitHub、ServiceNow、Cisco Jasperなどと統合。原文では機能を限定した無料版と企業向けプランが挙げられている。
- [DreamFactory](http://www.dreamfactory.com) - モバイル、ウェブ、IoTアプリケーション向けの無料・オープンソースREST API基盤。
- [HiveMQ](https://www.hivemq.com/) - 企業向けのMQTTブローカー。数百万台のIoT機器を接続できる規模へ拡張可能。
- [I1820](https://i1820.github.io/) - MQTTに基づく検出、データ収集、設定のサービスを提供する無料・オープンソース基盤。機器を制御するREST APIを実装し、収集した全データを時系列データベースのInfluxDBへ保存。
- [IOStash](https://iostash.io) - 原文で高性能と紹介され、DIY開発者と非営利用途には無料とされているIoTプラットフォーム。複数の接続方式を備え、M2M・M2Aアプリケーションの開発を支援。NodejsとAndroidのライブラリーも提供。
- [Thingsboard](https://thingsboard.io) - IoTソリューションの機器管理、データ収集、処理、可視化を提供するオープンソースIoT基盤。
- [Thingspeak](https://thingspeak.com/) - クラウド上でライブデータを集約・可視化・分析する、オープンソースIoT分析プラットフォームサービス。機器からThingSpeakへデータを送信し、そのデータを即座に可視化したり、警告を送ったりできる。
- [VerneMQ](https://github.com/erlio/vernemq) - IoT、M2M、モバイル、ウェブアプリケーションを接続する、高性能で分散構成のMQTTブローカー。汎用ハードウェア上で水平方向・垂直方向に拡張し、低遅延と耐障害性を保ちながら多数の発行者・受信者の同時接続に対応。
- [Kuzzle](https://github.com/kuzzleio/kuzzle) - リアルタイムの発行・購読やジオフェンシングなどの機能を備えるオープンソース・バックエンド。MQTT、LoRaWANなどに対応する複数プロトコルのインターフェースを提供。（[公式サイト](https://kuzzle.io/solutions/technologies/iot-backend/)）
- [DevicePilot](https://www.devicepilot.com) - 接続機器の運用分析サービス。原文では期限を設けない無料プランが挙げられている。
- [EMQX](https://www.emqx.io/) - オープンソースのMQTTブローカー。原文では、単一クラスターで1億台以上のIoT機器に対応し、毎秒100万メッセージの処理量と1msの遅延でリアルタイムデータ処理を行うとされている。
- [Waterstream](https://waterstream.io/) - Apache Kafkaを自身の保存・配信エンジンとして使うMQTTブローカー。
- [NanoMQ](https://github.com/nanomq/nanomq) - IoTエッジ基盤向けの軽量MQTTブローカー。原文では高速と紹介されている。
- [Kuiper](https://github.com/emqx/kuiper) - リソースが限られたエッジ機器向けに、Goで実装された軽量なIoTエッジデータ分析・ストリーミングソフトウェア。
- [t6](https://github.com/mathcoll/t6) - データを中心に据え、物理的なモノを時系列データベースへ接続して分析するIoTプラットフォーム。
- [IoTSharp](https://github.com/IoTSharp/IoTSharp) - データ収集、処理、可視化、機器管理を提供するオープンソースIoTプラットフォーム。
- [Husarnet](https://husarnet.com/) - インターネット経由で、ブリッジを介さずMCUとサーバー、またはMCU同士を直接接続する、世界規模のピアツーピア・ネットワーク層。
- [Zilla](https://github.com/aklivity/zilla) - HTTP、SSE、gRPC、MQTT、Kafkaの固有プロトコルなどの標準プロトコルに対応する、イベントを中心に設計された複数プロトコルのエッジ・サービスプロキシー。
- [IoT DC3](https://github.com/pnoker/iot-dc3) - Spring Cloudを基盤とする、完全にオープンソースの分散型産業用IoTプラットフォーム。原文では、Modbus、OPC UA、Siemens S7、BACnet、MQTT、CoAPなど28種類の組み込みプロトコルドライバー、AIを活用した運用、マイクロサービス構成が挙げられている。（[ドキュメント](https://docs.dc3.site)）
- [DeviceChain](https://github.com/devicechain-io/devicechain) - Apache-2.0ライセンスの、Go・React製セルフホストIoTプラットフォーム。Kubernetes上のマルチテナントなマイクロサービス構成を採用。MQTT・Sparkplug B・LwM2Mのデータ取り込み、TimescaleDBによる時系列データ保存、警告や外部接続（ウェブフック、MQTT、Kafka、クラウドキュー）を動かすCELベースのルールエンジン、版管理されたダッシュボード、GraphQL APIを備える。（[ドキュメント](https://docs.devicechain.io)）

### ライブラリー・ツール <a id="ライブラリツール"></a> <a id="libraries-and-tools"></a>

- [aem-modbus-simulator](https://github.com/leaberg69/aem-modbus-simulator) - LRI AEM-60DC8産業用直流モニターを模擬する、Python製オープンソースのModbus RTU/TCPスレーブシミュレーター。147個の保持レジスター、8個の直流チャンネル、6種類のボーレート（4,800〜115,200）を再現。実機を使わないSCADA・PLC統合テストに使用。
- [ble-scale-sync](https://github.com/KristianP26/ble-scale-sync) - BLEスマート体重計から読み取り（原文では23ブランド対応）、体組成を計算し、Garmin Connect、MQTT、InfluxDB、ウェブフック、Ntfyへ出力する、複数OS対応のNode.js CLI。Raspberry Pi、Linux、macOS、Windowsで動作。
- [Cylon.js](http://cylonjs.com/) - ロボティクス、フィジカルコンピューティング、IoT向けのJavaScriptフレームワーク。ロボットや機器を操作するコマンドを提供。
- [Luvit](https://luvit.io/) - Node.jsのAPIをLuaで実装するプロジェクト。IoT開発を直接の対象とはしていないが、原文ではメモリー効率のよい組み込みウェブアプリケーションを作る方法として紹介されている。
- [Johnny-Five](http://johnny-five.io/) - 2012年にBocoupが公開した、JavaScriptのロボティクス・プログラミングフレームワーク。原文ではソフトウェア開発者とハードウェアエンジニアのコミュニティによる保守が説明されている。
- [Pi4J](http://pi4j.com/) - Java開発者がRaspberry Piの全入出力機能へアクセスするための、使いやすいオブジェクト指向I/O APIと実装ライブラリーを提供するプロジェクト。
- [WiringPi](http://wiringpi.com/) - Raspberry Piで使われるBCM2835向けにCで記述された、GPIOアクセスライブラリー。
- [Node-RED](http://nodered.org/) - IoTの各要素をつなぐビジュアルツール。
- [MIMIC IoT Simulator](https://www.gambitcomm.com/site/iot_simulator.php) - MQTT、CoAP、RESTに基づくIoTアプリケーションのアジャイル開発、テスト、概念実証、研修に向けて、大規模なIoT環境を模擬するシミュレーター。
- [MQTT ACL Linter](https://github.com/visoar/mqtt-acl-linter) - ローカルのみでMQTTトピックのACLを静的解析するツール。任意でRunMQTTのポリシー検査を追加可能。
- [MQTT Explorer](https://thomasnordquist.github.io/MQTT-Explorer/) - MQTTトピックを階層で可視化するツール。
- [MQTT X](https://mqttx.app/) - EMQがオープンソースで提供する、macOS・Linux・Windows対応のMQTT 5.0クライアントツール。
- [ops](https://ops.city/) - Linuxアプリケーションをユニカーネルとして構築・実行・展開する、無料・オープンソースのツール。
- [SmartObject](https://github.com/PeterEB/smartobject) - JavaScriptアプリケーションでIPSO Smart Objectを作成するためのSmart Objectクラス。関連資料：IPSO Allianceの[技術資料集](http://www.ipso-alliance.org/ipso-community/resources/technical-archive/)。
- [United Manufacturing Hub](https://github.com/united-manufacturing-hub/united-manufacturing-hub) - Node-RED、VerneMQ、TimescaleDBなどのソリューションをHelmチャートへ組み合わせた、オープンソースの製造業向けアプリケーション基盤。
- [QuestDB](https://github.com/questdb/questdb) - リアルタイム分析と高性能アプリケーション向けの、オープンソース時系列データベース。InfluxDBラインプロトコルによる高い処理量でのデータ取り込みと、問い合わせ言語としてのSQLに対応。
- [Chaos Genius](https://github.com/chaos-genius/chaos_genius) - 機械学習による外れ値・異常の検出と原因分析を行う、オープンソース分析エンジン。センサーデータへ接続し、異常な挙動を監視・通知。
- [Explore IoT Libraries](https://kandi.openweaver.com/explore/internet-of-things) - ライブラリー、作者、プロジェクトキット、議論、チュートリアル、学習資料を掲載するkandiの資料一覧。
- [ThingsOn MQTT Bench](https://github.com/volkanalkilic/ThingsOn.MQTT.Bench) - 複数OS対応の.NET Core製MQTTブローカー用ベンチマークツール。指定した時間内にブローカーへ送信できる最大メッセージ数を測定。
- [ReductStore](https://github.com/reductstore/reductstore) - 産業用IoT向けのBlob・時系列ストレージ。エッジへの展開、選択的な複製、マルチモーダルな問い合わせを提供。原文では高性能と紹介されている。

### その他 <a id="miscellaneous"></a>

- [Amazon Dash](https://fresh.amazon.com/dash/) - ボタンを押して好みの商品を再注文する、Wi-Fi接続機器のAmazon Dash Button。
- [BirdNET-Go](https://github.com/tphakala/birdnet-go) - 複数モデルによるAI推論、Home Assistantの機器検出に対応したMQTT発行、ウェブダッシュボードを備える、野生生物の音環境をリアルタイムで分析するソフトウェア。
- [Electrum](https://github.com/yoelf22/electrum) - ソフトウェアを内蔵するハードウェア製品を定義する、構造化されたAI支援ツール群。構想からエンジニアリング仕様、発表に使える資料まで、8段階で作成。
- [Freeboard](http://freeboard.io/) - 直感的なドラッグ＆ドロップの操作画面を備える、リアルタイムで対話的なダッシュボード・可視化の作成ツール。
- [Nebula](http://nebula.readthedocs.io) - IoT機器を管理するDockerオーケストレーター。
- [Gladys](https://gladysassistant.com) - Raspberry Pi上で動作し、家庭内ネットワーク全体へ統合するオープンソース・プログラム。
- [authBroker](https://github.com/authbroker/authbroker) - AedesなどのIoTブローカー向けに、HTTP・MQTT・CoAPを扱うKeycloakアダプター。
- [MQTT File Uploader](https://github.com/volkanalkilic/Mqtt-File-Uploader) - ローカルディレクトリーの変更を監視し、新規・変更済みファイルをMQTTブローカーへアップロードする、複数OS対応の.NET Coreアプリケーション。
- [PiSpot-Show](https://github.com/GeiserX/PiSpot-Show) - 天気情報との連携とPiJuiceのバッテリー管理を備えた、Raspberry PiによるWiFi利用券の表示システム。
- [SIGNL4 – Mobile Alerting](https://www.signl4.com/iot-service-alerting/) - アプリのプッシュ通知、SMS、音声通話に加え、エスカレーションと当番の予定管理を備える、IoTプロジェクト向けの信頼性を重視したモバイル通知サービス。

## プロトコル・ネットワーク <a id="protocols-and-networks"></a>

### 物理層

#### [802.15.4](https://en.wikipedia.org/wiki/IEEE_802.15.4) (IEEE) <a id="---802154-ieee"></a>

低速無線パーソナルエリアネットワーク（LR-WPAN）の物理層と媒体アクセス制御を定める規格。2003年に策定したIEEE 802.15作業部会が保守。ZigBee、ISA100.11a、WirelessHART、MiWiの基盤となり、各仕様はIEEE 802.15.4で定義されていない上位層を開発して規格を拡張。また、6LoWPANと標準的なインターネットプロトコルを組み合わせ、無線の組み込みインターネットを構築可能。— [Wikipedia](https://en.wikipedia.org/wiki/IEEE_802.15.4)

IEEE 802.15.4は、身の回りの機器間で低価格・低速の通信を広く利用するための無線パーソナルエリアネットワーク（WPAN）の、基本的な下位層を提供することを目指す。より広い帯域幅と多くの電力を必要とするWi-Fiなどと対比される。基盤設備をほとんど、またはまったく必要とせず、近くの機器間で非常に低価格な通信を行うことを重視し、これによって消費電力をさらに減らすことを意図。

#### [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth) (Bluetooth Special Interest Group) <a id="---bluetooth-bluetooth-special-interest-group"></a>

固定機器・モバイル機器の間で短距離のデータを交換し、パーソナルエリアネットワーク（PAN）を構築する無線技術規格。2.4〜2.485GHzのISM帯にある短波長のUHF電波を使用。通信機器ベンダーのEricssonが1994年に開発し、当初はRS-232データケーブルを無線で置き換えるものとして構想。複数の機器を接続し、同期の問題を解消。— [Wikipedia](https://en.wikipedia.org/wiki/Bluetooth)

原文では、Bluetooth Special Interest Group（SIG）による管理と、通信、コンピューティング、ネットワーク、家電分野の25,000社を超える会員企業が説明されている。

#### [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy) (Bluetooth Special Interest Group) <a id="---bluetooth-low-energy-bluetooth-special-interest-group"></a>

Bluetooth Special Interest Groupが設計・販売促進する無線パーソナルエリアネットワーク技術。Bluetooth LE、BLEとも呼ばれ、Bluetooth Smartの名称で市場展開。医療、フィットネス、ビーコン、セキュリティ、家庭内娯楽の分野で新たな用途を対象とする。— [Wikipedia](https://en.wikipedia.org/wiki/Bluetooth_low_energy)

Bluetooth Smartは、Classic Bluetoothと同程度の通信距離を保ちながら、消費電力と費用を大幅に減らすことを意図。原文には、Bluetooth対応スマートフォンの90%超が2018年までにBluetooth Smartへ対応するという、当時のBluetooth SIGの予測が記録されている。

#### [EC-GSM-IoT](http://www.gsma.com/connectedliving/extended-coverage-gsm-internet-of-things-ec-gsm-iot/) (EC-GSM-IoT Group)

Extended coverage GSM IoT（EC-GSM-IoT）は、規格に基づく低消費電力広域通信技術。eGPRSを基盤とし、IoT通信用に、大容量、長距離、低消費電力で複雑さを抑えたセルラーシステムとして設計。

原文には、主要なモバイル機器・チップセット・モジュールの各製造業者の支援を受けたネットワーク試験と、2017年に予定された初の商用導入が記載されている。2G・3G・4Gネットワークとの共存と、移動通信網のセキュリティ・プライバシー機能を説明。機能には利用者識別情報の秘匿、エンティティー認証、機密性、データ完全性、移動通信機器の識別が含まれる。

#### [LoRaWAN](https://en.wikipedia.org/wiki/LoRaWAN) (LoRa Alliance) <a id="---lorawan-lora-alliance"></a>

接続されたモノとの低ビットレート通信を可能にする広域ネットワーク。IoT、M2M、スマートシティーに使用。— [Wikipedia](https://en.wikipedia.org/wiki/LoRaWAN)

LoRa Allianceが標準化する技術。当初はCycleoが開発し、同社は2012年にSemtechに買収された。LoRaWANはLong Range Wide-area networkの略。

#### [NB-IoT](https://en.wikipedia.org/wiki/NarrowBand_IOT) (3GPP)

セルラー通信帯域を使って、幅広い機器・サービスを接続するために開発された、低消費電力広域ネットワーク（LPWAN）の無線技術規格、NarrowBand IoT（NB-IoT）。— [Wikipedia](https://en.wikipedia.org/wiki/NarrowBand_IOT)

NB-IoTはIoT向けの狭帯域無線技術で、3rd Generation Partnership Project（3GPP）が標準化するMobile IoT（MIoT）技術群の一つ。

#### [Sigfox](https://en.wikipedia.org/wiki/Sigfox) (Sigfox) <a id="---sigfox-sigfox"></a>

電力量計、スマートウォッチ、洗濯機など、常時稼働し少量のデータを送信する低消費電力機器を接続する無線ネットワークを構築するフランス企業。その基盤はIoTに貢献することを意図。— [Wikipedia](https://en.wikipedia.org/wiki/Sigfox)

原文に記載されたSIGFOXの自己紹介では、IoTに世界規模のセルラー接続を提供する最初で唯一の企業とされる。通信網などの既存ネットワークから完全に独立した基盤を掲げ、数十億のモノと数千の新たな用途の展開手段を提供することを目指す。日常のモノがペタバイト単位のデータを生成することを長期的な目標としている。

#### [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) (Wi-Fi Alliance) <a id="---wi-fi-wi-fi-alliance"></a>

電子機器をネットワークへ接続する、無線ローカルエリアネットワーク技術。WiFiとも表記。主に2.4GHz（波長12cm）のUHFと5GHz（波長6cm）のSHFのISM帯を使用。— [Wikipedia](https://en.wikipedia.org/wiki/Wi-Fi)

Wi-Fi Allianceは、IEEE 802.11規格に基づく無線ローカルエリアネットワーク（WLAN）製品をWi-Fiと定義。一方、現代のWLANの多くが同規格に基づくため、英語の一般的な用法ではWi-FiがWLANの同義語として使われる。Wi-FiはWi-Fi Allianceの商標であり、Wi-Fi Certified商標は同団体の相互運用性認証試験に合格したWi-Fi製品だけが使用可能。

### ネットワーク・トランスポート層

#### [6LowPan](https://en.wikipedia.org/wiki/6LoWPAN) (IETF) <a id="---6lowpan-ietf"></a>

6LoWPANはIPv6 over Low power Wireless Personal Area Networksの略で、IETFのインターネット領域に属し、活動を終了した作業部会の名称。— [Wikipedia](https://en.wikipedia.org/wiki/6LoWPAN)

6LoWPANの構想は、最小の機器にもインターネットプロトコルを適用でき、適用すべきであり、処理能力の限られた低消費電力機器もIoTに参加できるべきだという考えから生まれた。
同作業部会は、IEEE 802.15.4ネットワークでIPv6パケットを送受信するためのカプセル化とヘッダー圧縮の仕組みを定義。IPv4とIPv6は、LAN、都市規模のネットワーク、インターネットなどの広域ネットワークでデータ転送の中心を担う。同様に、IEEE 802.15.4機器は無線領域でセンシングと通信の機能を提供する。ただし、この二つのネットワークは本来の性質が異なる。

#### [Thread](http://threadgroup.org/) (Thread Group) <a id="---thread-thread-group"></a>

家庭内のスマート機器がネットワーク上で通信するための、IPv6に基づくプロトコル。

2014年7月、GoogleのNest LabsはSamsung、ARM Holdings、Freescale、Silicon Labs、Big Ass Fans、鍵メーカーのYaleと作業部会を発表。製品のThread認証を提供して業界標準化を目指した。原文では他の利用中のプロトコルとしてZigBeeとBluetooth Smartが挙げられている。
Threadは6LoWPANを使用し、その下ではZigBeeなどと同様に、メッシュ通信を備えるIEEE 802.15.4無線プロトコルを使用。一方、ThreadはIPアドレスで指定でき、クラウドへのアクセスとAES暗号化を備える。原文では1ネットワークで250台を超える機器に対応するとされている。

#### [ZigBee](https://en.wikipedia.org/wiki/ZigBee) (ZigBee Alliance) <a id="---zigbee-zigbee-alliance"></a>

IEEE 802.15.4に基づき、小型で低消費電力のデジタル無線を使うパーソナルエリアネットワークを構築する、高水準通信プロトコル群の仕様。— [Wikipedia](https://en.wikipedia.org/wiki/ZigBee)

ZigBee仕様の技術は、BluetoothやWi-Fiなどの他の無線パーソナルエリアネットワーク（WPAN）より単純で安価であることを意図。用途には無線照明スイッチ、家庭内表示器付き電力量計、交通管理システムなど、短距離・低速の無線データ転送を必要とする家庭用・産業用機器が含まれる。

#### [Z-Wave](http://www.z-wave.com/) (Z-Wave Alliance) <a id="---z-wave-z-wave-alliance"></a>

照明、入退室管理、娯楽システム、家電などの家庭内機器が、ホームオートメーションのために相互通信する無線通信仕様。— [Wikipedia](https://en.wikipedia.org/wiki/Z-Wave)

Z-Waveは電池駆動機器に適するよう消費電力を抑える。主に高速データ転送を目的とするWi-FiなどのIEEE 802.11無線LANとは異なり、小さなデータパケットを最大100kbit/sで、信頼性と低遅延を重視して送信する設計。約900MHzの1GHz未満の周波数帯で動作。

### アプリケーション層

#### [CoAP](http://coap.technology/) (IETF)

非常に単純な電子機器がインターネット上で相互に通信するためのソフトウェアプロトコル、Constrained Application Protocol（CoAP）。— [Wikipedia](https://en.wikipedia.org/wiki/Constrained_Application_Protocol)

CoAPは、標準的なインターネット網を通じて遠隔制御・監視する、小型で低消費電力のセンサー、スイッチ、弁などを主な対象とする。WSNノードなど、リソースが限られたインターネット機器向けのアプリケーション層プロトコル。

#### [DTLS](https://fr.wikipedia.org/wiki/Datagram_Transport_Layer_Security) (IETF)

データグラム型プロトコルの通信を保護する、Datagram Transport Layer Security（DTLS）。— [Wikipedia](https://fr.wikipedia.org/wiki/Datagram_Transport_Layer_Security)

DTLSは、データグラム型通信の盗聴、改ざん、メッセージ偽造を防ぐために設計。ストリーム型のTransport Layer Security（TLS）に基づき、同様のセキュリティ保証を提供することを意図。

#### [Eddystone](https://en.wikipedia.org/wiki/Eddystone_(Google)) (Google) <a id="---eddystone-google"></a>

Googleが2015年7月に公開したビーコン技術のプロファイル。オープンソースで複数プラットフォームに対応し、Bluetooth Low Energyのビーコン形式を通じて、利用者へ位置・近接情報を提供。— [Wikipedia](https://en.wikipedia.org/wiki/Eddystone_(Google))

原文では、2013年公開のAppleのiBeaconと比較し、EddystoneはAndroid・iOS、iBeaconはiOSのみへの対応を挙げている。両技術の業務用途として、スマートフォンの位置に基づき、潜在的な顧客をリアルタイムで対象にする方法を説明。

#### [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) (IETF) <a id="---http-ietf"></a>

分散型で協調的なハイパーメディア情報システム向けのアプリケーションプロトコル、Hypertext Transfer Protocol（HTTP）。World Wide Webのデータ通信の基盤。— [Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

HTTPの標準化はIETFとW3Cが調整し、一連のRFCの公開へ至った。原文で一般的な利用版とされるHTTP/1.1は1997年のRFC 2068で初めて定義され、1999年のRFC 2616によって旧版となった。

#### [iBeacon](https://en.wikipedia.org/wiki/IBeacon) (Apple) <a id="---ibeacon-apple"></a>

Appleが標準化し、2013年のApple Worldwide Developers Conferenceで紹介したプロトコル。— [Wikipedia](https://en.wikipedia.org/wiki/IBeacon)

iBeaconはBluetooth Low Energyの近接検出を使い、対応アプリケーションやOSが受信する汎用一意識別子を送信。この識別子は、機器の物理的な位置の特定、顧客の追跡、SNSへのチェックインやプッシュ通知など、位置に基づく機器上の処理を開始するために使用可能。

#### [MQTT](http://mqtt.org/) (IBM) <a id="---mqtt-ibm"></a>

TCP/IP上で使う、発行・購読型の軽量メッセージングプロトコル。旧称はMQ Telemetry Transport。コード容量を小さく抑える必要がある場合や、ネットワーク帯域幅が限られる場合の、遠隔拠点との接続向けに設計。— [Wikipedia](https://en.wikipedia.org/wiki/MQTT)

発行・購読型のメッセージングにはメッセージブローカーが必要。ブローカーはメッセージのトピックに基づき、関心を持つクライアントへ配信。Andy Stanford-ClarkとCirrus Link SolutionsのArlen Nipperが1999年にプロトコルの初版を作成。

#### [PJON](https://github.com/gioblu/PJON/) <a id="---pjon"></a>

PJON®（Padded Jittering Operative Network）は、Arduino互換のマルチマスター・複数媒体対応ネットワークプロトコル。完全にソフトウェアで模擬するプロトコルスタックを持つ規格とフレームワークを提案。ATtiny、ATmega、ESP8266、ESP32、STM32、Teensy、Raspberry Pi、Linux、Windows x86、Apple機器向けにクロスコンパイルし、機器ネットワークを構築可能。提案する規格はプロジェクトのWikiとドキュメントで説明。

原文では数千台の機器での利用と世界的なコミュニティが報告され、六つの要因として、新たな技術、複数媒体への対応、セキュリティの向上、信頼性の向上、柔軟性、低価格が挙げられている。

[上流の図](https://www.pjon.org/assets/images/PJON-logo-devices.jpg)は、コンピューター、モバイル機器、家電、車両、ロボット、ドローンのネットワークの中心にPJONを描いている。

#### [STOMP](https://stomp.github.io/) <a id="---stomp"></a>

メッセージ指向ミドルウェア（MOM）で使う、単純なテキストベースのプロトコル、Simple（またはStreaming）Text Oriented Message Protocol（STOMP）。旧称はTTMP。— [Wikipedia](https://en.wikipedia.org/wiki/Streaming_Text_Oriented_Messaging_Protocol)

STOMPは相互運用可能な通信形式を提供し、STOMPクライアントは同プロトコル対応の任意のメッセージブローカーと通信可能。特定の言語に依存せず、ある言語・プラットフォームで開発したブローカーが、別の言語で開発したクライアントからの通信を受信できる。

#### [Websocket](https://en.wikipedia.org/wiki/WebSocket) <a id="---websocket"></a>

単一のTCP接続で全二重の通信路を提供するプロトコル。— [Wikipedia](https://en.wikipedia.org/wiki/WebSocket)

WebSocketはウェブブラウザーとウェブサーバーで実装することを想定するが、任意のクライアント・サーバーアプリケーションでも使用可能。TCPに基づく独立したプロトコルで、ブラウザーとウェブサイトのやり取りを増やし、ライブコンテンツやリアルタイムゲームの作成を支援。クライアントからの要求を待たずサーバーがブラウザーへコンテンツを送る標準的な方法を提供し、接続を開いたまま双方がメッセージを交換できる。

#### [XMPP](https://en.wikipedia.org/wiki/XMPP) (IETF) <a id="---xmpp-ietf"></a>

XML（Extensible Markup Language）に基づく、メッセージ指向ミドルウェア向けの通信プロトコル、Extensible Messaging and Presence Protocol（XMPP）。— [Wikipedia](https://en.wikipedia.org/wiki/XMPP)

二つ以上のネットワーク実体の間で、構造化され拡張可能なデータをほぼリアルタイムで交換。拡張性を考慮した設計により、発行・購読システム、VoIPのシグナリング、動画、ファイル転送、ゲーム、スマートグリッドなどのIoT用途、SNSでも使用。

## 関連技術 <a id="技術"></a> <a id="technologies"></a>

IoTの通信とモデル化に関連する技術。

### [NFC](https://en.wikipedia.org/wiki/Near_field_communication) <a id="---nfc"></a>

機器同士を接触させる、または通常10cm以内へ近づけることで、電子機器間の無線通信を確立するプロトコル群、Near field communication（NFC）。— [Wikipedia](https://en.wikipedia.org/wiki/Near_field_communication)

### [OPCUA](https://en.wikipedia.org/wiki/OPC_Unified_Architecture) <a id="--opcua"></a>
OPC-UAは、産業自動化のプロトコルと、産業環境の意味的な記述・オブジェクトモデル化の技術を組み合わせる。
[Wikipedia](https://en.wikipedia.org/wiki/OPC_Unified_Architecture)

## 規格・団体 <a id="標準アライアンス"></a> <a id="standards-and-alliances"></a>

### 規格 <a id="標準"></a>

- [ETSI M2M](http://www.etsi.org/technologies-clusters/technologies/m2m) - M2M通信の規格を開発するETSIの技術委員会。
- [OneM2M](http://www.onem2m.org/) - さまざまなハードウェア・ソフトウェアへ容易に組み込める共通のM2Mサービス層に向けて、技術仕様を開発する取り組み。現場の多数の機器を、世界各地のM2Mアプリケーションサーバーへ接続することを目指す。
- [OPCUA](https://opcfoundation.org/) - OPC Foundationが開発した、相互運用性のための産業用M2M通信プロトコル、OPC Unified Architecture（OPC UA）。
- [OCF](https://openconnectivity.org/) - Constrained Application Protocol（CoAP）を中心に、IoT機器の規格と認証を開発するOpen Connectivity Foundation。
- [W3C WoT](https://www.w3.org/WoT/) - 既存の標準化されたウェブ技術を利用・拡張し、IoTの分断を解消することを目指すW3CのWeb of Things（WoT）作業部会。標準化されたメタデータなどの再利用可能な技術部品を提供し、IoT基盤や応用分野を横断する統合を支援。

### 団体 <a id="アライアンス"></a>

- [AIOTI](http://www.meet-iot.eu/Alliance-for-Internet-of-Things-Innovation-AIOTI.html) - IoTの企業、中小企業、スタートアップなどの関係者と各業界の間で、つながりを強め、新たな関係を構築することを目指すAlliance for Internet of Things Innovation。
- [Bluetooth Special Interest Group](https://www.bluetooth.com/) - Bluetooth規格の開発と、製造業者へのBluetooth技術・商標のライセンス供与を管理する団体、Bluetooth SIG。
- [IPSO Alliance](http://www.ipso-alliance.org/) - IPとIoTにおけるその役割への理解を深め、認知、教育、業界の促進、研究を通じて業界の成長基盤を提供する団体。
- [LoRa Alliance](https://www.lora-alliance.org/) - IoT、M2M、スマートシティー、産業用途を実現するため、世界各地へ展開される低消費電力広域ネットワーク（LPWAN）の標準化を使命として、業界の主要企業が発足させた開かれた非営利団体。原文ではIoTの時代が到来しているという会員共通の認識が説明されている。
- [OPC Foundation](https://opcfoundation.org/about/opc-foundation/mission-statement/) - 産業自動化で、複数のベンダー・プラットフォーム間の安全で信頼できる相互運用性を実現するデータ転送規格を、利用者、ベンダー、連合組織が共同で作成する世界的な組織を運営。仕様の作成・保守、認証試験によるOPC仕様への適合確認、主要な標準化団体との協力を行う。
- [Thread Group](http://threadgroup.org/) - Threadネットワークプロトコルの開発を推進する団体。原文ではNest、Samsung、ARM、Freescale、Silicon Labs、Big Ass Fans、Yaleの関係者から構成されると説明されている。
- [Wi-Fi Alliance](https://www.wi-fi.org/) - ブランドを問わず、新たな無線ネットワーク技術で優れた利用体験を実現することを目指す、企業による世界的な非営利団体、Wi-Fi Alliance®。
- [Zigbee Alliance](http://www.zigbee.org/) - 原文では約450の会員を持つ、開かれた非営利団体として紹介されている。革新性、信頼性、使いやすさを特徴とするZigBee規格を開発。
- [Z-Wave Alliance](http://z-wavealliance.org/) - 2005年に設立され、世界各地の主要企業で構成される団体。家庭と業務向けのスマートな用途を実現する主要技術として、Z-Waveの開発・拡張に取り組む。

## 資料 <a id="resources"></a>

### 書籍 <a id="books"></a>

年、角括弧内の評価、提供状況は原文の記載を保持しています。原文には評価尺度や評価日の記載がありません。

#### [Abusing the Internet of Things: Blackouts, Freakouts, and Stakeouts](http://www.amazon.com/Abusing-Internet-Things-Blackouts-Freakouts/dp/1491902337) (2015) *著：[Nitesh Dhanjani](http://www.amazon.com/Nitesh-Dhanjani/e/B001KDWB6W/ref=dp_byline_cont_book_1)* [5.0] <a id="abusing-the-internet-of-things-blackouts-freakouts-and-stakeouts-2015-by-nitesh-dhanjani-50"></a>

数十億のモノが接続される未来のセキュリティ上の懸念と、無線LED電球、電子ドアロック、ベビーモニター、スマートテレビ、ネット接続車両などのIoT機器への攻撃を扱う。

#### [Building Wireless Sensor Networks: with ZigBee, XBee, Arduino, and Processing](http://www.amazon.com/Building-Wireless-Sensor-Networks-Processing/dp/0596807732) (2011) *著：[Robert Faludi](http://www.amazon.com/Robert-Faludi/e/B004JKWA3C/ref=dp_byline_cont_book_1)* [4.5] <a id="building-wireless-sensor-networks-with-zigbee-xbee-arduino-and-processing-2011-by-robert-faludi-45"></a>

ZigBeeとSeries 2 XBee無線を使う、分散センサーシステムと知的な対話型機器の実践ガイド。原文では、本の半分までに作るプロジェクトの一つとして、遠隔で取得したセンサーデータを届ける完全なZigBeeネットワークが説明されている。

#### [Digital Twins in Action](https://www.manning.com/books/digital-twins-in-action) (2013) *著：[Greg Biegel](https://www.linkedin.com/in/gregbiegel/)* [4.0] <a id="digital-twins-in-action-2013-by-greg-biegel-40"></a>

効果的なデジタルツインを設計・構築する実践ガイド。家庭規模のデジタルツインを基礎から作成する。

#### [Designing the Internet of Things](http://www.amazon.co.uk/Designing-Internet-Things-Adrian-McEwen/dp/111843062X/ref=sr_1_1?ie=UTF8&qid=1444905007&sr=8-1) (2013) *著：[Adrian McEwen](http://www.amazon.co.uk/Adrian-McEwen/e/B00FF7V2VY/ref=dp_byline_cont_book_1)、[Hakim Cassimally](http://www.amazon.co.uk/Hakim-Cassimally/e/B00FF5I3Y0/ref=ntt_athr_dp_pel_2/277-3946068-7961614)* [4.0] <a id="designing-the-internet-of-things-2013-by-adrian-mcewen-and-hakim-cassimally-40"></a>

ハードウェア、組み込みソフトウェア、ウェブサービス、電子工学、デザインを組み合わせ、対話的で実用的な機器を作る方法を扱う。フィジカルコンピューティング、ユビキタスコンピューティング、IoTの領域にわたる。

#### [Edge Computing Technology and Application](https://www.manning.com/books/edge-computing-technology-and-applications) (2023) 著：[Perry Lea](https://www.linkedin.com/in/perrylea/) <a id="edge-computing-technology-and-application-2023-by-perry-lea"></a>

ハードウェア・ソフトウェアのシステムから顧客・依頼者・従業員とのやり取りまで、エッジコンピューティングが事業とITの意思決定に与える影響を説明するPerry Leaのガイド。

#### [Getting Started with Bluetooth Low Energy: Tools and Techniques for Low-Power Networking](http://www.amazon.com/Getting-Started-Bluetooth-Low-Energy/dp/1491949511) (2014) *著：[Kevin Townsend](http://www.amazon.com/Getting-Started-Bluetooth-Low-Energy/dp/1491949511#productDescription)、[Carles Cufí](http://www.amazon.com/Getting-Started-Bluetooth-Low-Energy/dp/1491949511#productDescription)、[Akiba](http://www.amazon.com/Getting-Started-Bluetooth-Low-Energy/dp/1491949511#productDescription)、[Robert Davidson](http://www.amazon.com/Getting-Started-Bluetooth-Low-Energy/dp/1491949511#productDescription)* [4.5] <a id="getting-started-with-bluetooth-low-energy-tools-and-techniques-for-low-power-networking-2014-by-kevin-townsend-carles-cufí-akiba-and-robert-davidson-45"></a>

BLE機器間の通信を概説し、BLE対応モバイルアプリケーションと組み込みファームウェアの開発・テスト向けに低価格なツールを紹介。アプリ開発者にはiOS・Androidの例、製品設計者とハードウェアエンジニアには組み込み基盤の例を示す。

#### [IoT Inc: How Your Company Can Use the Internet of Things to Win in the Outcome Economy](https://www.amazon.com/IoT-Inc-Company-Internet-Outcome/dp/1260025896/ref=asc_df_1260025896/?tag=hyprod-20&linkCode=df0&hvadid=312243616995&hvpos=&hvnetw=g&hvrand=13286743199559517729&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014863&hvtargid=pla-332228957705&psc=1) (2017) *著：[Bruce Sinclair](https://www.amazon.com/Bruce-Sinclair/e/B07258Z2L8/ref=dp_byline_cont_pop_book_1)* [4.6] <a id="iot-inc-how-your-company-can-use-the-internet-of-things-to-win-in-the-outcome-economy-2017-by-bruce-sinclair-46"></a>

IoTの仕組みと事業にもたらす変化、IoTを通じて事業・顧客・競合を評価する方法、IoT戦略を策定・実施する方法を説明。

#### [Smart Things: Ubiquitous Computing User Experience Design](http://www.amazon.com/Smart-Things-Ubiquitous-Computing-Experience/dp/0123748992) (2010) *著：[Mike Kuniavsky](http://www.amazon.com/Mike-Kuniavsky/e/B001K8LTGU/ref=dp_byline_cont_book_1)* [4.5] <a id="smart-things-ubiquitous-computing-user-experience-design-2010-by-mike-kuniavsky-45"></a>

設計者の要望へ応える問題解決の方法を示す書籍。すぐに時代遅れにならないよう、技術の細部より工程を重視。対象とする媒体の能力と限界を丁寧に扱い、商業環境での設計のトレードオフと課題を論じる。

#### [JavaScript on Things: Hardware for Web Developers](https://www.manning.com/books/javascript-on-things) (2018年刊行予定) *著：[Lyza Danger Gardner](https://www.amazon.com/s/ref=dp_byline_sr_book_1?ie=UTF8&text=Lyza+Danger+Gardner&search-alias=books&field-author=Lyza+Danger+Gardner&sort=relevancerank)* [先行提供版] <a id="javascript-on-things-hardware-for-web-developers-2018---est-by-lyza-danger-gardner-early-access-book"></a>

JavaScriptでウェブサイトを作れる読者向けに、小型の電子機器を同言語でプログラミングする方法を、図と実践を通じて紹介。Arduino、Tessel、Raspberry Piを使い、音、点滅する光、動きのあるプロジェクトを作成。

### 記事 <a id="articles"></a>

- [A Simple Explanation Of 'The Internet Of Things' (Forbes)](http://www.forbes.com/sites/jacobmorgan/2014/05/13/simple-explanation-internet-things-that-anyone-can-understand/) - IoTとは何か、私たちにどのような影響を与えるのかを説明する記事。
- [IoT security. Is there an app for that ?](http://embedded-computing.com/21517-iot-security-is-there-an-app-for-that/) - IoTアプリケーションの開発、セキュリティ、ビジネスモデルを取り上げるInternet of Things World会議についての記事。
- [The IoT Testing Atlas](http://iamqa.in/2015/10/04/The-IoT-Testing-Atlas/) - IoT製品のテストで、パラメーターの組み合わせを管理するためのテスト手法。
- [How to begin with the Amazon Timestream](https://itnext.io/how-to-begin-with-the-amazon-timestream-in-5-simple-steps-19c129040d9c/) - IoTデータを時系列で収集するデータベース、AWS Timestreamの利用を段階的に説明するガイド。

### 論文 <a id="papers"></a>

- [A Reference Architecture for the Internet of Things](http://wso2.com/wso2_resources/wso2_whitepaper_a-reference-architecture-for-the-internet-of-things.pdf) - IoTの参照アーキテクチャーを紹介するホワイトペーパー。機器と、その機器とのやり取りや管理に必要なサーバー側・クラウドの構成を含む。
- [Developing solutions for the Internet of Things](https://www-ssl.intel.com/content/dam/www/public/us/en/documents/white-papers/developing-solutions-for-iot.pdf) - IoT向けの安全で円滑に連携するソリューションを実現するための、Intelの構想を説明する資料。
- [Evaluation of indoor positioning based on Bluetooth Smart technology](http://publications.lib.chalmers.se/records/fulltext/199826/199826.pdf) - Computer Systems and Networks課程の理学修士論文。
- [IoT: A Vision, Architectural Elements, and Future Directions](http://arxiv.org/pdf/1207.0203.pdf) - IoTを世界規模で実現するための、クラウドを中心に据えた構想を示す論文。近い将来のIoT研究を推進すると考えられる主要な実現技術と応用分野を論じる。
- [Realizing the Potential of the Internet of Things](https://www.tiaonline.org/wp-content/uploads/2018/05/Realizing_the_Potential_of_the_Internet_of_Things_-_Recommendations_to_Policymakers.pdf) - IoT市場の可能性を活用・実現するため、政策立案者への提言としてまとめられたTelecommunications Industry Association（TIA）のホワイトペーパー。
- [The Internet of Things: Evolution or Revolution ?](http://www.aig.com/Chartis/internet/US/en/AIG%20White%20Paper%20-%20IoT%20English%20DIGITAL_tcm3171-677828_tcm3171-698578.pdf) - IoT市場の成長を他の産業革命と比較し、もたらされる課題と日常生活への影響を論じるホワイトペーパー。
