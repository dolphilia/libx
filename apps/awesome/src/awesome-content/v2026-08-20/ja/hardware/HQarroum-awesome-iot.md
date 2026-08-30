---
title: "Awesome IoT"
description: "IoTを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-HQarroum-awesome-iot-readme-md"
---

# Awesome IoT

IoTを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="table-of-contents"></a>

- [ハードウェア](#hardware)
- [ソフトウェア](#software)
  - [オペレーティングシステム](#operating-systems)
  - [Programming Languages](#programming-languages)
  - [フレームワーク](#frameworks)
  - [ミドルウェア](#middlewares)
  - [ライブラリ・ツール](#libraries-and-tools)
  - [その他](#miscellaneous)
- [プロトコル・ネットワーク](#protocols-and-networks)
- [技術](#technologies)
- [標準・アライアンス](#standards-and-alliances)
- [資料](#resources)
  - [書籍](#books)
  - [記事](#articles)
  - [論文](#papers)

### ハードウェア <a id="hardware"></a>

- [Arduino](https://www.arduino.cc/) - アーロンドは、使いやすいハードウェアとソフトウェアに基づくオープンソース電子プラットフォームです。これは、インタラクティブなプロジェクトを作成するすべての人向けに設計されています。
- [BeagleBoard](http://beagleboard.org/) - ビーゲルボードは、テキサス・インスティテュートとディジー・キーやニューカイの協力により開発された、低消費電力のオープンソースハードウェアのシングルボードコンピュータです。
- [Dragonboard](https://developer.qualcomm.com/hardware/dragonboard-410c) - ドラゴンボード410cは、アーロン・エレクトロニクスが提供する製品で、中級のクアルコム® スネードン™ 410Eプロセッサに基づく開発ボードです。このボードは、高度な処理能力、Wi-Fi、ブルートゥース接続、GPSを、クレジットカードサイズのボードにすべて統合しています。
- [ESP32](https://www.espressif.com/en/products/hardware/esp32/overview) - ESP32はESP8266の後継機種です。ESP32はハードウェア機能が豊富です。高速のダブルコアプロセッサと多数の内蔵周辺回路により、接続製品におけるマイクロコントローラの代替が可能になります。
- [HomeMaster](https://www.home-master.eu/) - IoTの試作・配備に利用できるボード、センサー、ゲートウェイ等のハードウェアです。 [GitHub](https://github.com/isystemsautomation/homemaster-dev)
- [HummingBoard](https://www.solid-run.com/freescale-imx6-family/hummingboard/) - ハミングボードは、1GHzのフリースケル・i.MX6 SoCに基づく3種類のLinuxおよびAndroid対応オープンソースSBCのファミリーです。また、ピーアイ風の26ピンI/O接続器を備えています。
- [Intel Galileo](https://www-ssl.intel.com/content/www/us/en/do-it-yourself/galileo-maker-quark-board.html) - インテル® ガリオーロ・ジェン2ボードは、インテル®アーキテクチャに基づくアーロンド*認定開発およびプロトタイピングボードのファミリーの最初の製品であり、マーカー、学生、教育者、DIY電子エンジニア向けに特別設計されています。
- [Microduino](https://www.microduino.cc/) - マイクロドゥーンとmCookieは、マーカー、デザイナー、エンジニア、学生、そしてすべての年齢層の好奇心旺盛なチューナーに、強力で小型かつスタック可能な電子ハードウェアを提供します。オープンソースプロジェクトを構築するか、革新的な新プロジェクトを創出できます。
- [Node MCU (ESP 8266)](http://www.nodemcu.com/index_en.html) - ノードMCUは、オープンソースIoTプラットフォームです。Luaスクリプト言語を使用しています。eLuaプロジェクトに基づき、ESP8266 SDK 0.9.5に構築されています。
- [OLinuXino](https://www.olimex.com/Products/OLinuXino/open-source-hardware) - オリヌクシノは、低価格（EUR30）のオープンソースソフトウェアおよびオープンソースハードウェアのLinux工業用シングルボードコンピュータで、GPIOを備え、-25°Cから+8及°Cまで動作可能です。
- [Odroid](http://www.hardkernel.com/) - ODROIDは「オープン＋ドロイド」という意味です。これはハードウェアおよびソフトウェアの開発プラットフォームです。
- [Particle](https://www.particle.io) - IoT製品のプロトタイピング、スケーリング、管理を支援するハードウェアおよびソフトウェアツールのセットです。
- [Pinoccio](https://www.open-electronics.org/pinoccio-wifi-mesh-networking-for-arduino-and-iot-available-now/) - ピンコッチオは、すべてのIoTデバイスにメッシュネットワーク機能およびWi-Fiインターネットアクセスを追加するソリューションであり、アーロンドと互換性があります。
- [PiSpot Show](https://github.com/GeiserX/PiSpot-Show) - ラズベリーパイWiFiボンパーアプリケーションに天気統合とPiJuiceバッテリー管理を搭載した表示システム.
- [PiSpot Watch](https://github.com/GeiserX/PiSpot-Watch) - GPConnect社用のPiSpotウォッチ（ラズベリーパイゼロとPaPiRusゼロで構成）を実行するソフトウェアです。
- [AutoPi](https://github.com/autopi-io/autopi-core) - AutoPiドングル（ラズベリーパイベースのOBD-IIデバイス）のオープンソースコアソフトウェア。これは、接続車両のテレメトリック、CANバスデータ収集、自動車IoTアプリケーションに使用されます。
- [Raspberry Pi](https://www.raspberrypi.org/) - ラズベリーパイは、低価格でクレジットカードサイズのコンピュータで、コンピュータモニターやテレビに接続され、標準のキーボードとマウスを使用できます。インターネット閲覧やハイデフィ動画の再生、スプレッドシート作成、ワードプロセッシング、ゲームのプレイなど、デスクトップコンピュータが行えるすべての機能を備えています。
- [Tessel](https://tessel.io/) - テセルは、完全にオープンソースでコミュニティが運営するIoTおよびロボティクス開発プラットフォームです。開発ボード、ハードウェアモジュールの追加、それらに実行されるソフトウェアを含みます。
- [UDOO](http://www.udoo.org) - UDOOは、アーロンド2と互換性のあるマイクロコントローラを内蔵したシングルボードコンピュータで、コンピュータ科学教育、マーカーの世界、IoTに設計されています。
- [Raspberry Pi Pico](https://www.raspberrypi.com/products/raspberry-pi-pico/) - ラズベリーパイピコは、ラズベリーパイ財団が開発したRP2040マイクロコントローラチップを搭載した小型で高速かつ多用途なボードです。さらに、2.4GHz 802.11n無線LAN変種を備え、IoTに最適です。
- [Rinho Telematics](https://rinho.com.ar/en) - CANバス（J1939/FMS）を内蔵し、オフラインデータダウンロード用のWi-Fiバックアップ、BLE 5.0センサーを備えたGPSトラッカー。TraccarおよびWialonと互換性があります。
- [WisBlock](https://www.rakwireless.com/en-us/products/wisblock) - WisBlockは、IoTソリューションに低電力広域ネットワーク（LPWAN）を簡単に導入できるモジュラーなシステムです。WisBlockは、ベースボード、コア計算モジュール、複数のセンサモジュールの組み合わせから構成されています。

### ソフトウェア <a id="software"></a>

#### オペレーティングシステム <a id="operating-systems"></a>

 - [Apache Mynewt](https://mynewt.apache.org/) - Apache Mynewtは、長期間にわたって電力、メモリ、ストレージの制限の下で動作する必要がある接続IoTデバイス向けのリアルタイム・モジュラーなオペレーティングシステムです。最初に提供された接続スタックはBLE 4.2です。
 - [ARM mbed](http://www.mbed.com/) - ARM® mbed™ IoTデバイスプラットフォームは、商業的に実現可能な、標準化されたIoTソリューションの開発と展開を可能にするオペレーティングシステム、クラウドサービス、ツール、開発エコシステムを提供します。
 - [Contiki](http://www.contiki-os.org/) - Contikiは、インターネット・オブ・シングス（IoT）向けのオープンソースオペレーティングシステムです。Contikiは、小さな低コスト・低消費電力のマイコンをインターネットに接続します。
 - [FreeRTOS](http://www.freertos.org/) - FreeRTOSは、エントリーデバイス向けに人気のあるリアルタイムオペレーティングシステムカーネルであり、35のマイコンにポートされています。
 - [Android Things](https://developer.android.com/things/) - **注意：Android Thingsは廃止されています。** Android Thingsは、すべての接続デバイスにAndroidプラットフォームを拡張し、設定が簡単で、互いにスムーズに動作し、スマートフォンと連携できるようにします。
 - [OpenWrt](https://openwrt.org/) - OpenWrtは、Linuxカーネルに基づくオペレーティングシステム（特に、エントリーデバイス向けの埋め込みオペレーティングシステム）であり、ネットワークトラフィックのルーティングに主に使用されます。主なコンポーネントはLinuxカーネル、util-linux、uClibcまたはmusl、およびBusyBoxです。すべてのコンポーネントはサイズを最適化し、家庭用ルーターに搭載可能な限られたストレージとメモリに収まるように設計されています。
 - [Snappy Ubuntu](https://wiki.ubuntu.com/Snappy) - Snappy Ubuntu Coreは、Ubuntuの新しいバージョンで、取引型アップデートを提供します。現在のUbuntuと同じライブラリを備えた最小サーバーイメージを提供し、アプリケーションはよりシンプルなメカニズムで提供されます。
 - [Mbed OS](https://os.mbed.com/) - インターネット・オブ・シングス（IoT）向けのCortex-Mボード用のオープンソースオペレーティングシステム：低消費電力、制限されたリソース、接続されたデバイス。Mbed OSは、実行するマイコンに対して抽象化層を提供し、開発者はC/C++アプリケーションを任意のMbed対応ボード上で実行できるようになります。
 - [NodeOS](http://node-os.com/) - NodeOSは、JavaScriptで完全に構築されたオペレーティングシステムであり、Linuxカーネルの上にnpmで管理されています。
 - [Raspbian](https://raspbian.org/) - Raspbianは、Debianに基づく無料のオペレーティングシステムで、Raspberry Piハードウェアに最適化されています。
 - [RIOT](http://www.riot-os.org/) - インターネット・オブ・シングス向けの親しみやすいオペレーティングシステム。
 - [Tiny OS](https://github.com/tinyos/tinyos-main) - TinyOSは、低消費電力のワイヤレスデバイス（センサネットワーク、周辺計算、個人エリアネットワーク、スマートビルディング、スマートメーターなど）向けに設計されたオープンソース、BSDライセンスに基づくオペレーティングシステムです。
 - [Toit](https://toit.io/) - Toitプラットフォームは、デバイスを堅牢かつ耐性のある方法で提供し、デバイスとデータの制御を可能にし、ネットワーク接続された埋め込みデバイスに即時更新可能なファームウェアとアプリケーション更新を提供します。
 - [UBOS](https://ubos.net/) - UBOSは、家庭用サーバーおよびIndie IoTデバイスのシステム管理をシンプルにすることを目的としたLinuxディストリビューションです。Arch Linuxの派生品であり、PC、Raspberry Pi、ESPRESSObin、クラウド上で動作します。
 - [Windows 10 IoT Core](https://dev.windows.com/en-us/iot) - Windows 10 IoTは、小型産業ゲートウェイから、POS端末やATMなどのより大きな複雑なデバイスまで幅広いスマートデバイスに向けたWindows 10のエディションのファミリーです。
  - [Zephyr Project](https://www.zephyrproject.org/) - Zephyr™プロジェクトは、複数のハードウェアアーキテクチャをサポートし、リソース制限されたデバイスに最適化され、セキュリティを意識したスケーラブルなリアルタイムオペレーティングシステム（RTOS）です。

#### プログラミング言語 <a id="programming-languages"></a>

> この節では、コンパイル言語、インタープリター言語、DSLを問わず、組込み開発に関連する言語をまとめます。

 - [AtomVM](https://atomvm.org/) - Erlang、Elixir、Gleamなどの機能言語をマイコンに導入します。
 - [C](https://en.wikipedia.org/wiki/C_(programming_language)) - 一般用途の、命令型のコンピュータプログラミング言語であり、構造化プログラミング、文法スコープ、再帰をサポートし、静的型システムにより多くの意図外の操作を防止します。
 - [C++](https://en.wikipedia.org/wiki/C%2B%2B) - 一般用途のプログラミング言語であり、命令型、オブジェクト指向、ジェネリックプログラミング機能を備え、低レベルのメモリ操作にも対応しています。
 - [Groovy](http://www.groovy-lang.org/) - グローブイは、強力で、オプションで型を指定できる動的言語であり、Javaプラットフォーム向けに、簡潔で親しみやすく、学習しやすい構文を持つため、開発者の生産性を高める静的型と静的コンパイル機能を備えた言語です。スマートスイッチ開発環境でスマートアプリケーションを作成するために使用されています。
 - [Lua](http://www.lua.org/) - ルアは、強力で、高速で、軽量で、埋め込み可能なスクリプト言語です。ルアは動的型を持ち、レジスタベースの仮想マシンのバイナリコードを解釈して実行し、自動メモリ管理とインクリメンタルなゴミ収集を備えており、設定、スクリプト、および迅速なプロトタイピングに最適です。
 - [eLua](http://www.eluaproject.net/) - eLuaは「埋め込みルア」という名称であり、プロジェクトはルアプログラミング言語の完全な実装を埋め込み世界に提供し、効率的かつ移植性の高いソフトウェア開発に特化した機能を追加しています。
 - [ELFE](http://c3d.github.io/elfe/) - ELFEは非常にシンプルで小さいプログラミング言語です。これは一般用途のプログラミング言語ですが、センサーやアクチュエータなどの小さなデバイスの群れの設定および制御を容易にするように調整されています。
 - [MicroPython](https://docs.micropython.org/) - マイクロコントローラおよび制限されたシステム向けの軽量で効率的なPython実装
 - [PikaPython](https://github.com/pikastech/pikapython) - Pythonは4KBのRAMで動作し、依存関係はゼロで、Cとの結合が容易です。
 - [PharoThings](https://github.com/pharo-iot/PharoThings) - マイクロコントローラーや組込みIoT開発に利用できる言語・処理系です。 [Pharo](https://pharo.org/)
 - [Rust](https://www.rust-lang.org/) - ルストはパフォーマンス、信頼性、生産性に焦点を当てた言語です。安全性が知られ、メモリ安全であり、バーミングチェックを用い、並列処理も安全です。
 - [TinyGo](https://tinygo.org/) - タイニーゴは、LLVMをベースにした新しいコンパイラを用いて、Goプログラミング言語をマイクロコントローラおよび現代のウェブブラウザに導入するプロジェクトです。BBC micro:bitやArduino Unoなどのさまざまなマイクロコントローラボード上で、タイニーゴプログラムをコンパイル・実行できます。
 - [Toitlang](https://toitlang.org/) - 非常にPythonに近い構文を持つ高レベル言語です。マイクロコントローラ向けに基本から構築されたため、マイクロPythonより少なくとも20倍速いです。また、スムーズなIDE統合も実現しています。

#### フレームワーク <a id="frameworks"></a>

 - [AllJoyn](https://openconnectivity.org/developer/reference-implementation/alljoyn) - アリーナは、デバイスやアプリケーションが互いに発見し、通信できるようにするオープンソースソフトウェアフレームワークです。
 - [Apple HomeKit](https://developer.apple.com/homekit/) - ホームキットは、ユーザーの家に接続されたアクセサリーと通信し、制御するためのフレームワークです。
 - [homebridge-blink-security](https://github.com/BitWise-0x/homebridge-blink-security) - Blinkカメラ、ドアベル、サイレンをAppleホームキットと統合するためのホームブリッジプラグインで、ライブストリーミング、アーム／ディーアーム、動き検知を提供しています。
 - [homebridge-smartrent](https://github.com/BitWise-0x/homebridge-smartrent) - スマートレンツのロック、サーモスタット、漏れセンサー、スイッチをAppleホームキットとリアルタイムのWebSocket接続で統合するためのホームブリッジプラグインです。
 - [AREG SDK](https://github.com/aregtech/areg-sdk) - AREG SDKは、分散型および[mist-](https://csrc.nist.gov/publications/detail/sp/500-325/final)計算を可能にする、インターフェース中心のリアルタイム非同期通信エンジンであり、接続されたThingsが相互に作用し、サービスを提供する仕組みを、薄い分散サーバーのように実現します。
 - [Astarte](https://github.com/astarte-platform/astarte) - アスタルテはElixirで書かれたオープンソースIoTプラットフォームです。これは、デバイスのファルトを遠隔アプリケーションに接続するために必要なすべての機能を内包した即時解決ソリューションです。データモデル化、自動データ圧縮、リアルタイムイベント、そして現代的なIoTプラットフォームに期待されるすべての機能を提供します。現在は、LinuxおよびESP32デバイスが、提供されたSDKで即時サポートされています。
 - [Blynk](http://www.blynk.cc) - ブリンクは、iOSおよびAndroidアプリを構築するためのプラットフォームです。すべてのプロジェクトに、スマートフォン上でウィジェットをドラッグ＆ドロップで構築できるグラフィカルインターフェースを簡単に作成できます。Ethernet、WiFi、Bluetooth、GSM/GPRS、USB/シリアル接続をサポートし、Arduino、Raspberry、ARM mbed、Particle、RedBearなど、多くのプロトタイピングプラットフォームに対応しています。
 - [Countly IoT Analytics](http://github.com/countly/countly-server) - カウントリーは、モバイルおよびIoTデバイス向けの一般用途の分析プラットフォームであり、オープンソースで提供されています。
 - [Eclipse Ditto™](https://eclipse.org/ditto/) - Eclipse Dittoは、所謂「デジタルツイン」を構築するためのフレームワークです。クラウド上で物理デバイスの表現とAPIを提供し、外部システム（MQTTブローカー、HTTPエンドポイント、Apache Kafkaなど）との統合に必要な認証、検索、接続機能を内蔵しています。
 - [Eclipse Smarthome](https://eclipse.org/smarthome/) - Eclipse SmartHomeフレームワークは、ラズベリーパイ、ベーグルボーンブラック、インテルエドソンなどの埋め込みデバイス上で動作するように設計されています。Java 7に対応するJVMとOSGi（4.2以降）フレームワーク（例：Eclipse Equinox）が必要です。
 - [Freedomotic](http://www.freedomotic.com) - フリーディオティックは、オープンソースで、柔軟で、安全なインターネット・オブ・シングス（IoT）開発フレームワークです。個人（ホームオートメーション）およびビジネスユーザー（スマートレターリング環境、周辺環境認識マーケティング、監視および分析など）向けに設計されています。Javaで書かれており、既知の標準ビルディングオートメーションプロトコルおよび「DIY」ソリューションと相互作用できます。
 - [Iotivity](https://iotivity.org/) - IoTivityは、デバイス間のシームレスな接続を可能にするオープンソースソフトウェアフレームワークであり、インターネット・オブ・シングスの新たなニーズに対応しています。
 - [Iotellect](https://iotellect.com) - 低コードIoTプラットフォーム。デバイスの統合、データ収集、リアルタイム可視化をサポート。MQTT、OPC UA、Modbus、および50以上の工業プロトコルに対応。ドラッグアンドドロップUIビルダーを備えている。
 - [Jumpstarter](https://github.com/jumpstarter-dev/jumpstarter) - オープンソースのハードウェアインザループテストフレームワーク。リアルおよび仮想IoTハードウェア上の自動テストを実行し、CI/CDとの統合をサポート。
 - [Kura](https://eclipse.org/kura/) - Kuraは、サービスゲートウェイ上で実行されるM2Mアプリケーションに用いるJava/OSGiベースのコンテナを提供するものである。Kuraは、M2Mアプリケーションが利用する最も一般的なサービスに対して、提供するか、あるいは存在するオープンソース実装を集約する。
 - [Lelylan](http://www.lelylan.com/) - Lelylanは、軽量マイクロサービスアーキテクチャに基づいたIoTクラウドプラットフォームである。Lely及プラットフォームはハードウェアに依存せず、プラットフォームに依存しない。つまり、ESP8266から最も専門的なエムベディドハードウェアまで、あらゆるハードウェアに接続可能であり、AWS、Google Cloud、Azureなどの公的クラウド、自社のプライベートデータセンター、あるいは仮想化または裸金属環境でのハイブリッド環境でも動作可能である。
 - [Macchina.io](https://github.com/macchina-io/macchina.io) - macchina.io EDGEは、Linuxベースのデバイス上で迅速にIoTデバイスアプリケーションを構築できる豊かなソフトウェアフレームワークである。macchina.io EDGEは、ウェブ対応、セキュア、モジュラーかつ拡張可能なJavaScriptおよびC++ランタイム環境を実装し、即時使用可能かつ業界で証明されたソフトウェアブロックを提供する。これにより、デバイスはさまざまなセンサー、他のデバイス、クラウドサービスと通信し、センサーデータをローカルで処理・分析・フィルタリングできるようになる。
 - [Mihini](https://wiki.eclipse.org/Mihini) - Mihiniの主な目標は、Linux上で実行される埋め込みランタイムを提供し、M2Mアプリケーションの開発に必要な高レベルAPIを公開することである。Mihiniは、M2MシステムのI/Oへのアクセスを容易にし、通信層を提供することで、開発を簡単かつ移植可能なものにすることを目指している。
 - [OpenHAB](http://www.openhab.org/) - openHABランタイムは、OSGiフレームワーク（Equinox）にデプロイされたOSGiバンドルのセットである。したがって、純粋なJavaソリューションであり、JVMが必要である。OSGiに基づくため、高度にモジュラリズドなアーキテクチャを提供し、サービスを停止せずに機能を追加・削除できる。
 - [Gobot](http://gobot.io/) - Gobotは、Go言語で書かれたロボティクス、物理コンピューティング、IoT向けのフレームワークである。
 - [Home Assistant](https://github.com/home-assistant/home-assistant) - Home AssistantはPython 3で動作するホームオートメーションプラットフォームである。Home Assistantの目標は、家庭内のすべてのデバイスを追跡・制御でき、自動制御プラットフォームを提供することである。
 - [Lightweight MQTT Machine Network](http://lwmqn.github.io/) - LWMQNは、OMA LWM2M v1.0仕様の一部を追従し、IPベースのスマートオブジェクトモデルを使用して機械ネットワーク管理の最低要件を満たすオープンソースプロジェクトです。JavaScriptおよびNode.jsでフルスタックIoT開発を可能にするサーバーサイドおよびマシンサイドのライブラリを提供します。詳細は：IPSOアライアンス [Technical Archive](http://www.ipso-alliance.org/ipso-community/resources/technical-archive/)です。
 - [Thingsboard IoT Gateway](https://github.com/thingsboard/thingsboard-gateway) - オープンソースIoTゲートウェイ - 過去のシステムおよび第三者システムに接続されたデバイスを、OPC-UAおよびMQTTプロトコルを使ってThingsboard IoTプラットフォームと統合。
 - [Pimatic](https://pimatic.org/) - Pimaticはnode.js上で動作するホームオートメーションフレームワークであり、ホーム制御および自動化タスクの共通拡張プラットフォームを提供する。
 - [IOTA](https://iota.org/) - オープンソースIoT用分散台帳プロトコル。有向無サイクルグラフ（DAG）を使用する。
 - [MyController](https://github.com/mycontroller-org/mycontroller) - オープンソースコントローラー。MyController.orgは、家庭、オフィス、またはその他の場所に適用可能なIoT自動化コントローラーである。
 - [Mozilla WebThings](https://iot.mozilla.org/) - ウェブ上でデバイスを監視・制御できるオープンプラットフォーム。
 - [HStreamDB](https://github.com/hstreamdb/hstream) - IoTデータのストレージおよびリアルタイム処理に最適化されたストリーミングデータベース。
 - [IoTSharp.Gateways](https://github.com/IoTSharp/Gateways) - オープンソースIoTゲートウェイ - 過去のシステムおよび第三者システムに接続されたデバイスを、ModBus、OPC-UA、BACNetおよびMQTTプロトコルを使ってIoTSharp IoTプラットフォームと統合。
 - [ForestHub](https://foresthub.ai) - エッジAIエージェントプラットフォーム。そのオープンソースランタイム[edge-agents](https://github.com/ForestHubAI/edge-agents)は、Linuxエッジゲートウェイ（Raspberry Pi、Jetson）上でオフラインでAIエージェントを実行し、ローカルのSLMとクラウドのLLMを併用し、GPIO/UART/MQTTを第一クラスのノードとして提供し、視覚的なビルダーを備えています。

#### ミドルウェア <a id="middlewares"></a>

 - [Corlysis](https://corlysis.com/) - Corlysisは、タイムシリーズデータの保存と可視化を支援するプラットフォームである。GrafanaおよびInfluxDBというオープンソースプロジェクトに基づいている。SpaceXもこのプロジェクトを使用している。
 - [IFTTT](https://ifttt.com/) - IFTTTは、Gmail、Facebook、Instagram、Pinterestなどのウェブサービスの変更に基づいてトリガーされる、単純な条件文の連鎖（「レシピ」と呼ばれる）を作成できるウェブベースサービスである。IFTTTは「If This Then That」（「gift」と発音するが、gを除く）の略である。
 - [OPC Router](https://www.opc-router.com/opc-router-details/) - さまざまなプラグイン（OPC UA、Mqtt、SQL、REST、SAP、InfluxDB、Printer、...）を備えたIoTゲートウェイ
 - [Huginn](https://github.com/cantino/huginn) - Huginnは、オンラインで自動化されたタスクを実行するエージェントを構築するためのシステムである。
 - [Kaa](http://www.kaaproject.org/) - オープンソースのミドルウェアプラットフォームで、IoTソリューションの迅速な開発を可能にする。
 - [Losant](https://losant.com) - Losantは、複雑な接続ソリューションを安全かつ迅速に構築できるように設計された使いやすい開発プラットフォームです。LosantはRESTやMQTTといったオープンな通信標準を使用し、1台から数百万台のデバイスへの接続を実現します。Losantは、大量のセンサーデータを理解し、定量的に分析するための強力なデータ収集、集計、可視化機能を提供しています。Losantのドラッグアンドドロップ型ワークフロー編集器により、プログラミングなしでアクションや通知、機械間通信をトリガーできます。
 - [MicroServiceBus.com](https://microservicebus.com) - MicroServiceBus.comは、Azure、AWSおよびIBM IoT Hub向けのデバイス管理プラットフォームで、GitHub、ServiceNow、Cisco Jasperなどとの統合を提供します。無料（限定）版および企業向けのオプションが用意されています。
 - [DreamFactory](http://www.dreamfactory.com) - DreamFactoryは、モバイル、ウェブ、IoTアプリケーション向けの無料オープンソースREST APIプラットフォームです。
 - [HiveMQ](https://www.hivemq.com/) - 企業向けに設計されたMQTTブローカーで、数百万台のIoTデバイスに接続できるスケーラビリティを備えています。
 - [I1820](https://i1820.github.io/) - I1820は、MQTTに基づく発見、データ収集、設定サービスを提供する無料オープンソースプラットフォームです。I1820は、デバイスの制御にREST APIを実装し、すべての収集データをインフルエンスDBというタイムシリーズデータベースに保存します。
 - [IOStash](https://iostash.io) - IOStashは、DIY開発者や非営利アプリケーション向けに無料の高性能IoTプラットフォームです。複数の接続オプションを提供し、M2MまたはM2Aアプリケーションの簡単な開発を可能にします。IOStashは、アプリケーション開発を容易にするNode.jsおよびAndroidライブラリを提供しています。
 - [Thingsboard](https://thingsboard.io) - オープンソースIoTプラットフォーム。IoTソリューションのデバイス管理、データ収集、処理および可視化を提供します。
 - [Thingspeak](https://thingspeak.com/) - クラウド上でのリアルタイムデータストリームの集計、可視化、分析を行うオープンソースIoTアナリティクスプラットフォームサービスです。デバイスからThingSpeakにデータを送信し、リアルタイムデータの即時可視化を行い、アラートを送信できます。
 - [VerneMQ](https://github.com/erlio/vernemq) - VerneMQは、IoT、M2M、モバイル、ウェブアプリケーションを接続する高性能、分散型MQTTブローカーです。コンピューターハードウェアの標準的な構成で、並列および垂直スケーリングを行い、多くの同時発行者と消費者をサポートしつつ、低遅延と障害耐性を維持します。
 - [Kuzzle](https://github.com/kuzzleio/kuzzle) - IPベースのリアルタイムパブ/サブ、地理フェンス、複数プロトコルインターフェース（MQTT、LoRaWANを含む）を備えた高度な機能を持つオープンソースバックエンド。（[Website](https://kuzzle.io/solutions/technologies/iot-backend/)）
 - [DevicePilot](https://www.devicepilot.com) - 接続デバイスの運用分析（無料・永遠に利用可能プランを含む）。
 - [EMQX](https://www.emqx.io/) - 超スケーラブルなオープンソースMQTTブローカー。1つのクラスタで1億台以上のIoTデバイスを接続し、1ms遅延で100万メッセージ/秒のスループットでリアルタイムIoTデータを移動・処理できます。
 - [Waterstream](https://waterstream.io/) - Apache Kafkaを自社のストレージおよび配分エンジンとして活用したMQTTブローカー。
 - [NanoMQ](https://github.com/nanomq/nanomq) - IoTエッジプラットフォーム向けに軽量かつ高速なMQTTブローカー。
 - [Kuiper](https://github.com/emqx/kuiper) - Golangで実装されたエッジ向け軽量IoTデータ分析/ストリーミングソフトウェアで、さまざまなリソース制限のあるエッジデバイス上で実行可能です。
 - [t6](https://github.com/mathcoll/t6) - 物理オブジェクトとタイムシリーズDBを接続し、データ分析を行うデータ中心型IoTプラットフォーム。
 - [IoTSharp](https://github.com/IoTSharp/IoTSharp) - IoTSharpは、データ収集、処理、可視化、デバイス管理を行うオープンソースIoTプラットフォームです。
 - [Husarnet](https://husarnet.com/) - Husarnetは、グローバルなペアワーキングネットワーク層で、インターネット経由でMCU-サーバーまたはMCU-MCU間の接続を直接行うことができ、ブリッジの必要なしです。
 - [Zilla](https://github.com/aklivity/zilla) - マルチプロトコルイベントネイティブエッジ/サービスプロキシで、HTTP、SSE、gRPC、MQTTおよびネイティブKafkaプロトコルといった標準プロトコルをサポートしています。
 - [IoT DC3](https://github.com/pnoker/iot-dc3) - スプリングクラウドに基づく完全なオープンソース分散型産業IoTプラットフォーム。組み込みプロトコルドライバー28種（Modbus、OPC UA、シエムスS7、BACnet、MQTT、CoAP）、AIによる運用、マイクロサービスアーキテクチャを備えています。（[Docs](https://docs.dc3.site)）
 - [DeviceChain](https://github.com/devicechain-io/devicechain) - GoおよびReactで構成されたApache-2.0ライセンスに基づくセルフホスト型IoTプラットフォーム。Kubernetes上のマルチテナントマイクロサービス、MQTT、Sparkplug BおよびLwM2Mのイングレス、TimescaleDBによる時系列ストレージ、CELベースのルールエンジン（アラートおよび外部接続、ウェブホーク、MQTT、Kafka、クラウドキューを駆動）、バージョン管理されたダッシュボード、GraphQL APIを備えています。（[Docs](https://docs.devicechain.io)）

#### ライブラリ・ツール <a id="libraries-and-tools"></a>

 - [aem-modbus-simulator](https://github.com/leaberg69/aem-modbus-simulator) - オープンソースPython Modbus RTU/TCPスレーブシミュレータ。LRI AEM-60DC8工業用DCモニタを模倣。147個のホールディングレジスタ、8チャンネルのDC、6つのバウドレート（4,800～115,200）を反映。物理ハードウェアなしでSCADA/PLC統合テストに有用です。
 - [ble-scale-sync](https://github.com/KristianP26/ble-scale-sync) - クロスプラットフォームのNode.js CLIツールで、BLEスマートスケール（23ブランド）を読み取り、体組成を計算し、Garmin Connect、MQTT、InfluxDB、Webhook、Ntfyにエクスポート。Raspberry Pi、Linux、macOS、Windowsで動作。
 - [Cylon.js](http://cylonjs.com/) - Cylon.jsは、ロボット、物理計算、IoT向けのJavaScriptフレームワーク。ロボットやデバイスを操作するための非常に簡単な方法を提供。
 - [Luvit](https://luvit.io/) - LuvitはNode.jsと同じAPIをLuaで実装！このフレームワークはIoT開発に直接関係していないが、依然として強力でメモリ効率の高い、埋め込みWebアプリケーションを迅速に構築するための*素晴らしい*手段。
 - [Johnny-Five](http://johnny-five.io/) - Johnny-Fiveは、オリジナルのJavaScriptロボットプログラミングフレームワーク。2012年にBocoupがリリースし、現在は情熱的なソフトウェア開発者とハードウェアエンジニアたちのコミュニティによって維持されている。
 - [Pi4J](http://pi4j.com/) - Pi4jは、Raspberry Piプラットフォームの全I/O機能にアクセスできるようにする、親しみやすいオブジェクト指向I/OAPIと実装ライブラリを提供するもの。
 - [WiringPi](http://wiringpi.com/) - WiringPiは、Raspberry Piに搭載されたBCM2835で使用されるC言語によるGPIOアクセスライブラリ。
 - [Node-RED](http://nodered.org/) - IoTの接続を視覚的に組み立てるツール。
 - [MIMIC IoT Simulator](https://www.gambitcomm.com/site/iot_simulator.php) - MQTT、CoAP、RESTに基づくIoTアプリケーションのアグレッシブ開発／テスト／概念検証／訓練を可能にする、大規模IoT環境のシミュレーション。
 - [MQTT ACL Linter](https://github.com/visoar/mqtt-acl-linter) - ローカルのみのMQTTトピックACLの静的解析に、オプションでRunMQTTポリシーチェックを実行。
 - [MQTT Explorer](https://thomasnordquist.github.io/MQTT-Explorer/) - MQTTトピックを階層構造で可視化するツール、MQTTの万能ツール。
 - [MQTT X](https://mqttx.app/) - MQTT Xは、EMQがオープンソースで提供したクロスプラットフォームのMQTT 5.0クライアントツールで、macOS、Linux、Windowsに対応。
 - [ops](https://ops.city/) - 無料のオープンソースツールで、Linuxアプリケーションをユニクーラーとして構築・実行・デプロイできる。
 - [SmartObject](https://github.com/PeterEB/smartobject) - IoTデバイス、通信、データ処理、開発・試験を支援するライブラリまたはツールです。 [Technical Archive](http://www.ipso-alliance.org/ipso-community/resources/technical-archive/)
 - [United Manufacturing Hub](https://github.com/united-manufacturing-hub/united-manufacturing-hub) - オープンソース製造アプリケーションプラットフォーム（例：Nodered、VerneMQ、timescaleDBなど、さまざまなオープンソースソリューションをHelmチャートにまとめる）
 - [QuestDB](https://github.com/questdb/questdb) - リアルタイム分析および高性能アプリケーション向けのオープンソースタイムシリーズデータベース。InfluxDBのラインプロトコルによる高スループットインゴースとSQLをクエリ言語としてサポート。
 - [Chaos Genius](https://github.com/chaos-genius/chaos_genius) - センサーデータとの接続を可能にし、異常行動をモニタリングし、アラートを発信するオープンソースML駆動の分析エンジン。異常検出および原因分析に特化。
 - [Explore IoT Libraries](https://kandi.openweaver.com/explore/internet-of-things) - kandiで人気や新規のライブラリ、トップ著者、トレンドプロジェクトキット、ディスカッション、チュートリアル、学習リソースを一覧にしたカスタムリストを発見・検索。
 - [ThingsOn MQTT Bench](https://github.com/volkanalkilic/ThingsOn.MQTT.Bench) - ThingsOn MQTT Benchは、MQTTブローカー向けのシンプルなクロスプラットフォーム.NET Coreベンチマークツール。指定された時間内にブローカーに送信可能なメッセージの最大数を測定。
 - [ReductStore](https://github.com/reductstore/reductstore) - 工業IoT向けの高パフォーマンスのブロブおよびタイムシリーズストレージ。エッジデプロイメント、選択的なレプリケーション、多モーダルデータの効率的なクエリをサポート。

#### その他 <a id="miscellaneous"></a>

 - [Amazon Dash](https://fresh.amazon.com/dash/) - Amazon Dash Buttonは、Wi-Fi接続されたデバイスで、ボタンを押すだけで好きなアイテムを再注文できる。
 - [BirdNET-Go](https://github.com/tphakala/birdnet-go) - リアルタイムで野生動物の音響環境を分析し、マルチモデルAI推論、Home AssistantによるMQTT発行、ウェブダッシュボードを備えたツール。
 - [Electrum](https://github.com/yoelf22/electrum) - 構造化されたAI支援ツールキットで、ソフトウェアを内蔵したハードウェア製品の定義を、概念段階からエンジニアリング仕様まで、プレゼンテーション用資料まで8つのフェーズにわたって行う.
 - [Freeboard](http://freeboard.io/) - リアルタイムのインタラクティブダッシュボードと可視化作成ツールで、直感的なドラッグ＆ドロップインターフェースを実装.
 - [Nebula](http://nebula.readthedocs.io) - IoTデバイスの管理を目的としたDockerオーケストレーター.
 - [Gladys](https://gladysassistant.com) - Gladysはラズベリーパイ上で実行されるオープンソースプログラムであり、家庭ネットワーク全体に統合される.
 - [authBroker](https://github.com/authbroker/authbroker) - Keycloak HTTP/MQTT/CoAP IoT ブローカーアダプタ（Aedesに類似）.
 - [MQTT File Uploader](https://github.com/volkanalkilic/Mqtt-File-Uploader) - MQTTファイルアップローダーは、シンプルなクロスプラットフォーム.NET Coreアプリケーションで、ローカルディレクトリの変更を監視し、新しいまたは変更されたファイルをMQTTブローカーにアップロードする.
 - [PiSpot-Show](https://github.com/GeiserX/PiSpot-Show) - ラズベリーパイWiFiボンパーアプリケーションに天気統合とPiJuiceバッテリー管理を搭載した表示システム.
- [SIGNL4 – Mobile Alerting](https://www.signl4.com/iot-service-alerting/) - SIGNL4は、アプリケーションプッシュ、SMS、音声通話による信頼性の高いモバイルアラートを提供し、さらにエスケープと勤務スケジュールをIoTプロジェクトに適用します.

## プロトコル・ネットワーク <a id="protocols-and-networks"></a>

### 物理層

#### <img width="50" src="http://www.ieee802.org/15/pub/ieee802-15%20logo.jpg" /> - [802.15.4](https://en.wikipedia.org/wiki/IEEE_802.15.4) (IEEE)

IEEE 802.15.4 is a standard that specifies the physical layer and media access control for low-rate wireless personal area networks (LR-WPANs). It is maintained by the IEEE 802.15 working group, which defined it in 2003. It is the basis for the ZigBee, ISA100.11a, WirelessHART, and MiWi specifications, each of which further extends the standard by developing the upper layers which are not defined in IEEE 802.15.4. Alternatively, it can be used with 6LoWPAN and standard Internet protocols to build a wireless embedded Internet. - [Wikipedia](https://en.wikipedia.org/wiki/IEEE_802.15.4)

> この物理層技術は、IoTデバイス間の無線接続とデータ伝送に利用されます。

#### <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/BluetoothLogo.svg/770px-BluetoothLogo.svg.png" /> - [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth) (Bluetooth Special Interest Group)

Bluetooth is a wireless technology standard for exchanging data over short distances (using short-wavelength UHF radio waves in the ISM band from 2.4 to 2.485 GHz) from fixed and mobile devices, and building personal area networks (PANs). Invented by telecom vendor Ericsson in 1994, it was originally conceived as a wireless alternative to RS-232 data cables. It can connect several devices, overcoming problems of synchronization. - [Wikipedia](https://en.wikipedia.org/wiki/Bluetooth)

> この物理層技術は、IoTデバイス間の無線接続とデータ伝送に利用されます。

#### <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bluetooth_Smart_Logo.svg/241px-Bluetooth_Smart_Logo.svg.png" /> - [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_low_energy) (Bluetooth Special Interest Group)

Bluetooth low energy (Bluetooth LE, BLE, marketed as Bluetooth Smart) is a wireless personal area network technology designed and marketed by the Bluetooth Special Interest Group aimed at novel applications in the healthcare, fitness, beacons, security, and home entertainment industries. - [Wikipedia](https://en.wikipedia.org/wiki/Bluetooth_low_energy)

> この物理層技術は、IoTデバイス間の無線接続とデータ伝送に利用されます。

#### [EC-GSM-IoT](http://www.gsma.com/connectedliving/extended-coverage-gsm-internet-of-things-ec-gsm-iot/) (EC-GSM-IoT Group)

この物理層技術は、IoTデバイス間の無線接続とデータ伝送に利用されます。

> この物理層技術は、IoTデバイス間の無線接続とデータ伝送に利用されます。

#### <img width="50" src="https://intelilight.eu/wp-content/uploads/2017/02/technology_lorawan.png" /> - [LoRaWAN](https://en.wikipedia.org/wiki/LoRaWAN) (LoRa Alliance)

A LoRaWAN wide area network allows low bit rate communication from and to connected objects, thus participating to Internet of Things, machine-to-machine M2M, and smart city. - [Wikipedia](https://en.wikipedia.org/wiki/LoRaWAN)

> この物理層技術は、IoTデバイス間の無線接続とデータ伝送に利用されます。

#### [NB-IoT](https://en.wikipedia.org/wiki/NarrowBand_IOT) (3GPP)

NarrowBand IoT (NB-IoT) is a Low Power Wide Area Network (LPWAN) radio technology standard that has been developed to enable a wide range of devices and services to be connected using cellular telecommunications bands. - [Wikipedia](https://en.wikipedia.org/wiki/NarrowBand_IOT)

> この物理層技術は、IoTデバイス間の無線接続とデータ伝送に利用されます。

#### <img width="50" src="http://www.silvereco.fr/wp-content/uploads/2015/02/logo510f703a4647f1.jpg" /> - [Sigfox](https://en.wikipedia.org/wiki/Sigfox) (Sigfox)

Sigfox is a French firm that builds wireless networks to connect low-energy objects such as electricity meters, smart watches, and washing machines, which need to be continuously on and emitting small amounts of data. Its infrastructure is intended to be a contribution to what is known as the Internet of Things (IoT). - [Wikipedia](https://en.wikipedia.org/wiki/Sigfox)

> この物理層技術は、IoTデバイス間の無線接続とデータ伝送に利用されます。

#### <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Wi-FI_Alliance_Logo.png" /> - [Wi-Fi](https://en.wikipedia.org/wiki/Wi-Fi) (Wi-Fi Alliance)

Wi-Fi (or WiFi) is a local area wireless computer networking technology that allows electronic devices to network, mainly using the 2.4 gigahertz (12 cm) UHF and 5 gigahertz (6 cm) SHF ISM radio bands. - [Wikipedia](https://en.wikipedia.org/wiki/Wi-Fi)

> この物理層技術は、IoTデバイス間の無線接続とデータ伝送に利用されます。

### ネットワーク・トランスポート層

#### <img width="50" src="http://www.tonex.com/wp-content/uploads/6lowpan.jpg" /> - [6LowPan](https://en.wikipedia.org/wiki/6LoWPAN) (IETF)

6LoWPAN is an acronym for IPv6 over Low power Wireless Personal Area Networks. 6LoWPAN is the name of a concluded working group in the Internet area of the IETF. - [Wikipedia](https://en.wikipedia.org/wiki/6LoWPAN)

> このネットワーク・トランスポート技術は、IoTデバイス間のアドレス指定、経路制御、データ配送に利用されます。
このネットワーク・トランスポート技術は、IoTデバイス間のアドレス指定、経路制御、データ配送に利用されます。

#### <img width="50" src="https://www.threadgroup.org/portals/0/images/contact/img1.svg" /> - [Thread](http://threadgroup.org/) (Thread Group)

このネットワーク・トランスポート技術は、IoTデバイス間のアドレス指定、経路制御、データ配送に利用されます。

> このネットワーク・トランスポート技術は、IoTデバイス間のアドレス指定、経路制御、データ配送に利用されます。
このネットワーク・トランスポート技術は、IoTデバイス間のアドレス指定、経路制御、データ配送に利用されます。

#### <img width="50" src="https://zigbeealliance.org/wp-content/uploads/2019/11/zb_logo-b_color_rgb_icon-e1573775155251.png" /> - [ZigBee](https://en.wikipedia.org/wiki/ZigBee) (ZigBee Alliance)

ZigBee is an IEEE 802.15.4-based specification for a suite of high-level communication protocols used to create personal area networks with small, low-power digital radios. - [Wikipedia](https://en.wikipedia.org/wiki/ZigBee)

> このネットワーク・トランスポート技術は、IoTデバイス間のアドレス指定、経路制御、データ配送に利用されます。

#### <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Z-Wave_logo.jpg" /> - [Z-Wave](http://www.z-wave.com/) (Z-Wave Alliance)

Z-Wave is a wireless communications specification designed to allow devices in the home (lighting, access controls, entertainment systems and household appliances, for example) to communicate with one another for the purposes of home automation. - [Wikipedia](https://en.wikipedia.org/wiki/Z-Wave)

> このネットワーク・トランスポート技術は、IoTデバイス間のアドレス指定、経路制御、データ配送に利用されます。

### アプリケーション層

#### [CoAP](http://coap.technology/) (IETF)

Constrained Application Protocol (CoAP) is a software protocol intended to be used in very simple electronic devices that allows them to communicate interactively over the Internet. - [Wikipedia](https://en.wikipedia.org/wiki/Constrained_Application_Protocol)

> このアプリケーション層技術は、IoTデバイスのメッセージ交換、検出、制御に利用されます。

#### [DTLS](https://fr.wikipedia.org/wiki/Datagram_Transport_Layer_Security) (IETF)

The Datagram Transport Layer Security (DTLS) communications protocol provides communications security for datagram protocols.  - [Wikipedia](https://fr.wikipedia.org/wiki/Datagram_Transport_Layer_Security)

> このアプリケーション層技術は、IoTデバイスのメッセージ交換、検出、制御に利用されます。

#### <img width="50" src="https://cdn.arstechnica.net/wp-content/uploads/2015/07/2015-07-13_16-46-26.jpg" /> - [Eddystone](https://en.wikipedia.org/wiki/Eddystone_(Google)) (Google)

Eddystone is a beacon technology profile released by Google in July 2015. The open source, cross-platform software gives users location and proximity data via Bluetooth low-energy beacon format. - [Wikipedia](https://en.wikipedia.org/wiki/Eddystone_(Google))

> このアプリケーション層技術は、IoTデバイスのメッセージ交換、検出、制御に利用されます。

#### <img width="50" src="http://www.httptechnology.com.au/logo.jpg" /> - [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) (IETF)

The Hypertext Transfer Protocol (HTTP) is an application protocol for distributed, collaborative, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web. - [Wikipedia](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

> このアプリケーション層技術は、IoTデバイスのメッセージ交換、検出、制御に利用されます。

#### <img width="50" src="https://developer.apple.com/ibeacon/images/ibeacon-logo.svg" /> - [iBeacon](https://en.wikipedia.org/wiki/IBeacon) (Apple)

iBeacon is a protocol standardized by Apple and introduced at the Apple Worldwide Developers Conference in 2013. - [Wikipedia](https://en.wikipedia.org/wiki/IBeacon)

> このアプリケーション層技術は、IoTデバイスのメッセージ交換、検出、制御に利用されます。

#### <img width="50" src="https://raw.githubusercontent.com/mqtt/mqttorg-graphics/master/mqtticon-large.png" /> - [MQTT](http://mqtt.org/) (IBM)

MQTT (formerly MQ Telemetry Transport) is a publish-subscribe based "light weight" messaging protocol for use on top of the TCP/IP protocol. It is designed for connections with remote locations where a "small code footprint" is required or the network bandwidth is limited. - [Wikipedia](https://en.wikipedia.org/wiki/MQTT)

> このアプリケーション層技術は、IoTデバイスのメッセージ交換、検出、制御に利用されます。

#### <img width="50" src="https://www.pjon.org/assets/images/PJON-logo-devices.jpg" /> - [PJON](https://github.com/gioblu/PJON/)

このアプリケーション層技術は、IoTデバイスのメッセージ交換、検出、制御に利用されます。

> このアプリケーション層技術は、IoTデバイスのメッセージ交換、検出、制御に利用されます。

#### <img width="50" src="https://stomp.github.io/images/project-logo.png" /> - [STOMP](https://stomp.github.io/)

Simple (or Streaming) Text Oriented Message Protocol (STOMP), formerly known as TTMP, is a simple text-based protocol, designed for working with message-oriented middleware (MOM). - [Wikipedia](https://en.wikipedia.org/wiki/Streaming_Text_Oriented_Messaging_Protocol)

> このアプリケーション層技術は、IoTデバイスのメッセージ交換、検出、制御に利用されます。

#### <img width="50" src="https://www.rabbitmq.com/wp-uploads/2012/02/HTML5_Logo_256.png" /> - [Websocket](https://en.wikipedia.org/wiki/WebSocket)

WebSocket is a protocol providing full-duplex communication channels over a single TCP connection. - [Wikipedia](https://en.wikipedia.org/wiki/WebSocket)

> このアプリケーション層技術は、IoTデバイスのメッセージ交換、検出、制御に利用されます。

#### <img width="50" src="https://upload.wikimedia.org/wikipedia/commons/9/95/XMPP_logo.svg" /> - [XMPP](https://en.wikipedia.org/wiki/XMPP) (IETF)

Extensible Messaging and Presence Protocol (XMPP) is a communications protocol for message-oriented middleware based on XML (Extensible Markup Language). - [Wikipedia](https://en.wikipedia.org/wiki/XMPP)

> このアプリケーション層技術は、IoTデバイスのメッセージ交換、検出、制御に利用されます。

## 技術 <a id="technologies"></a>

> この節ではIoTと密接に関連する技術を厳選してまとめます。

### <img width="50" src="http://vectorlogofree.com/wp-content/uploads/2012/12/nfc-logo-vector-400x400.png" /> - [NFC](https://en.wikipedia.org/wiki/Near_field_communication)

近距離無線通信（NFC）は、機器同士を接触させるか通常10cm以内へ近づけて無線通信を確立するプロトコル群です。 - [Wikipedia](https://en.wikipedia.org/wiki/Near_field_communication)

### <img width="50" src="https://opcfoundation.org/wp-content/themes/opc/images/logo.jpg"/>- [OPCUA](https://en.wikipedia.org/wiki/OPC_Unified_Architecture)
OPC-UAは産業オートメーション用プロトコルであるだけでなく、産業環境の意味記述とオブジェクトモデリングを可能にする技術です。
[Wikipedia](https://en.wikipedia.org/wiki/OPC_Unified_Architecture)


## 標準・アライアンス <a id="standards-and-alliances"></a>

### 標準

- [ETSI M2M](http://www.etsi.org/technologies-clusters/technologies/m2m) - ETSI技術委員会は、機械間通信の標準化を進めています.
- [OneM2M](http://www.onem2m.org/) - oneM2Mの目的と目標は、さまざまなハードウェアおよびソフトウェアに容易に埋め込み可能な共通M2Mサービス層の技術仕様を開発することであり、現場の多様なデバイスを世界中のM2Mアプリケーションサーバーと接続する必要性を解決することです.
- [OPCUA](https://opcfoundation.org/) - OPC統合アーキテクチャ（OPC UA）は、OPCファウンデーションによって開発された産業用M2M通信プロトコルで、相互運用性を実現しています.
- [OCF](https://openconnectivity.org/) - OCF（オープンコネクティビティファウンデーション）は、制約付きアプリケーションプロトコル（CoAP）に基づくIoTデバイスの標準と認証を提供しています.
- [W3C WoT](https://www.w3.org/WoT/) - ウェブオブテクノロジー（WoT）のW3Cワーキンググループは、IoTの分断を防ぐために、既存の標準化されたウェブ技術を活用・拡張しています。標準化されたメタデータおよびその他の再利用可能な技術的ブロックを提供することで、W3C WoTはIoTプラットフォームおよびアプリケーション領域間の容易な統合を実現します.

### アライアンス

- [AIOTI](http://www.meet-iot.eu/Alliance-for-Internet-of-Things-Innovation-AIOTI.html) - IoTイノベーション（AIOTI）は、異なるIoT関係者（産業、中小企業、スタートアップ）および業界間のつながりを強化し、新たな関係を構築することを目的としています.
- [Bluetooth Special Interest Group](https://www.bluetooth.com/) - Bluetooth特別興味グループ（SIG）は、Bluetooth標準の開発およびメーカー向けのBluetooth技術および商標のライセンスを管理する組織です.
- [IPSO Alliance](http://www.ipso-alliance.org/) - IPSOアライアンスは、業界の成長を促進するために、意識の向上、教育の提供、業界の推進、研究の生成、そしてIPおよびそのIoTにおける役割に関するより良い理解を促進しています.
- [LoRa Alliance](https://www.lora-alliance.org/) - LoRaアライアンスは、IoT時代が現在であると信じるオープンで非営利のメンバーによる協会であり、世界中で展開されている低消費電力・広範囲エリアネットワーク（LPWAN）を標準化し、IoT、機械間通信（M2M）、スマートシティ、産業アプリケーションを可能にする目的を持っています.
- [OPC Foundation](https://opcfoundation.org/about/opc-foundation/mission-statement/) - IoT関連仕様の策定・認証・普及を行う業界団体です。
仕様の策定・保守、認証試験によるOPC仕様への適合確認、主要な標準化団体との協働を行います。
- [Thread Group](http://threadgroup.org/) - Threadグループは、Nest、Samsung、ARM、Freescale、Silicon Labs、Big Ass FansおよびYaleのメンバーから成り立つ組織で、Threadネットワークプロトコルの開発を進めています.
- [Wi-Fi Alliance](https://www.wi-fi.org/) - Wi-Fiアライアンス®は、複数の企業が構成するグローバルな非営利協会であり、新しい無線ネットワーク技術による最高のユーザー体験を実現することを目指しています（ブランドを問わず）.
- [Zigbee Alliance](http://www.zigbee.org/) - ZigBeeアライアンスは、約450のメンバーを有するオープンで非営及協会であり、革新的で信頼性があり、使いやすいZigBing標準の開発を進めています。
- [Z-Wave Alliance](http://z-wavealliance.org/) - 2005年に設立されたZ-Waveアライアンスは、スマートな家庭およびビジネスアプリケーションにおけるキーテクノロジーとしてZ-Waveを発展・拡張することを目的とした、世界中の業界リーダーから成る組織である。

## 資料 <a id="resources"></a>

### 書籍 <a id="books"></a>

#### [Abusing the Internet of Things: Blackouts, Freakouts, and Stakeouts](http://www.amazon.com/Abusing-Internet-Things-Blackouts-Freakouts/dp/1491902337) (2015) *by [Nitesh Dhanjani](http://www.amazon.com/Nitesh-Dhanjani/e/B001KDWB6W/ref=dp_byline_cont_book_1)* [5.0]

> IoTの技術、設計、実装、セキュリティ、ビジネス応用を扱う書籍です。

#### [Building Wireless Sensor Networks: with ZigBee, XBee, Arduino, and Processing](http://www.amazon.com/Building-Wireless-Sensor-Networks-Processing/dp/0596807732) (2011) *by [Robert Faludi](http://www.amazon.com/Robert-Faludi/e/B004JKWA3C/ref=dp_byline_cont_book_1)* [4.5]

> IoTの技術、設計、実装、セキュリティ、ビジネス応用を扱う書籍です。

#### [Digital Twins in Action](https://www.manning.com/books/digital-twins-in-action) (2013) *by [Greg Biegel](https://www.linkedin.com/in/gregbiegel/)* [4.0]

> IoTの技術、設計、実装、セキュリティ、ビジネス応用を扱う書籍です。

#### [Designing the Internet of Things](http://www.amazon.co.uk/Designing-Internet-Things-Adrian-McEwen/dp/111843062X/ref=sr_1_1?ie=UTF8&qid=1444905007&sr=8-1) (2013) *by [Adrian McEwen](http://www.amazon.co.uk/Adrian-McEwen/e/B00FF7V2VY/ref=dp_byline_cont_book_1) and [Hakim Cassimally](http://www.amazon.co.uk/Hakim-Cassimally/e/B00FF5I3Y0/ref=ntt_athr_dp_pel_2/277-3946068-7961614)* [4.0]

> IoTの技術、設計、実装、セキュリティ、ビジネス応用を扱う書籍です。

#### [Edge Computing Technology and Application](https://www.manning.com/books/edge-computing-technology-and-applications) (2023) *by [Perry Lea](https://www.linkedin.com/in/perrylea/) 

> IoTの技術、設計、実装、セキュリティ、ビジネス応用を扱う書籍です。

#### [Getting Started with Bluetooth Low Energy: Tools and Techniques for Low-Power Networking](http://www.amazon.com/Getting-Started-Bluetooth-Low-Energy/dp/1491949511) (2014) *by [Kevin Townsend](http://www.amazon.com/Getting-Started-Bluetooth-Low-Energy/dp/1491949511#productDescription), [Carles Cufí](http://www.amazon.com/Getting-Started-Bluetooth-Low-Energy/dp/1491949511#productDescription), [Akiba](http://www.amazon.com/Getting-Started-Bluetooth-Low-Energy/dp/1491949511#productDescription) and [Robert Davidson](http://www.amazon.com/Getting-Started-Bluetooth-Low-Energy/dp/1491949511#productDescription)* [4.5]

> IoTの技術、設計、実装、セキュリティ、ビジネス応用を扱う書籍です。

#### [IoT Inc: How Your Company Can Use the Internet of Things to Win in the Outcome Economy](https://www.amazon.com/IoT-Inc-Company-Internet-Outcome/dp/1260025896/ref=asc_df_1260025896/?tag=hyprod-20&linkCode=df0&hvadid=312243616995&hvpos=&hvnetw=g&hvrand=13286743199559517729&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1014863&hvtargid=pla-332228957705&psc=1) (2017) *by [Bruce Sinclair](https://www.amazon.com/Bruce-Sinclair/e/B07258Z2L8/ref=dp_byline_cont_pop_book_1)* [4.6]

> IoTの技術、設計、実装、セキュリティ、ビジネス応用を扱う書籍です。

#### [Smart Things: Ubiquitous Computing User Experience Design](http://www.amazon.com/Smart-Things-Ubiquitous-Computing-Experience/dp/0123748992) (2010) *by [Mike Kuniavsky](http://www.amazon.com/Mike-Kuniavsky/e/B001K8LTGU/ref=dp_byline_cont_book_1)* [4.5]

> IoTの技術、設計、実装、セキュリティ、ビジネス応用を扱う書籍です。

#### [JavaScript on Things: Hardware for Web Developers](https://www.manning.com/books/javascript-on-things) (2018 - est.) *by [Lyza Danger Gardner](https://www.amazon.com/s/ref=dp_byline_sr_book_1?ie=UTF8&text=Lyza+Danger+Gardner&search-alias=books&field-author=Lyza+Danger+Gardner&sort=relevancerank)* [early access book]

> IoTの技術、設計、実装、セキュリティ、ビジネス応用を扱う書籍です。

### 記事 <a id="articles"></a>

- [A Simple Explanation Of 'The Internet Of Things' (Forbes)](http://www.forbes.com/sites/jacobmorgan/2014/05/13/simple-explanation-internet-things-that-anyone-can-understand/) - この記事は、「インターネット・オブ・シングス」とは何か、そして私たちにどのような影響を与えるかを明らかにしようとするものである。
- [IoT security. Is there an app for that ?](http://embedded-computing.com/21517-iot-security-is-there-an-app-for-that/) - インターネット・オブ・シングス（IoT）アプリケーション開発、セキュリティ、ビジネスモデルについて検討するインターネット・オブ・シングス・ワールド・カンファレンス。
- [The IoT Testing Atlas](http://iamqa.in/2015/10/04/The-IoT-Testing-Atlas/) - IoTベース製品のテストにおいて、パラメータの組み合わせを管理するためのテスト手法。
- [How to begin with the Amazon Timestream](https://itnext.io/how-to-begin-with-the-amazon-timestream-in-5-simple-steps-19c129040d9c/) - AWS Timestream（時系列データベース）へのステップバイステップガイド。IoTデータを時間軸に収集するためのツールである。

### 論文 <a id="papers"></a>

- [A Reference Architecture for the Internet of Things](http://wso2.com/wso2_resources/wso2_whitepaper_a-reference-architecture-for-the-internet-of-things.pdf) - この白書は、インターネット・オブ・シングス（IoT）のリファレンスアーキテクチャを紹介する。これは、デバイスと、それらと相互作用・管理するために必要なサーバーサイドおよびクラウドアーキテクチャを含む。
- [Developing solutions for the Internet of Things](https://www-ssl.intel.com/content/dam/www/public/us/en/documents/white-papers/developing-solutions-for-iot.pdf) - インテルがインターネット・オブ・シングス（IoT）において、安全かつスムーズなソリューションを実現するためのビジョン。
- [Evaluation of indoor positioning based on Bluetooth Smart technology](http://publications.lib.chalmers.se/records/fulltext/199826/199826.pdf) - コンピュータ・システムおよびネットワークプログラムにおける修士号論文。
- [IoT: A Vision, Architectural Elements, and Future Directions](http://arxiv.org/pdf/1207.0203.pdf) - この論文は、インターネット・オブ・シングスの世界規模実施をクラウド中心に捉える視点を提示する。今後のIoT研究を牽引する可能性のある、キーテクノロジーおよびアプリケーション分野について述べる。
- [Realizing the Potential of the Internet of Things](https://www.tiaonline.org/wp-content/uploads/2018/05/Realizing_the_Potential_of_the_Internet_of_Things_-_Recommendations_to_Policymakers.pdf) - 通信業界協会（TIA）が政策決定者に向けた、インターネット・オブ・シングス市場の可能性を活用し実現するための提言をまとめた白書。
- [The Internet of Things: Evolution or Revolution ?](http://www.aig.com/Chartis/internet/US/en/AIG%20White%20Paper%20-%20IoT%20English%20DIGITAL_tcm3171-677828_tcm3171-698578.pdf) - この白書は、現在のインターネット・オブ・シ及市場の成長を、他の産業革命と比較し、それが私たちの日常生活に与える課題と影響について述べる。


## ライセンス <a id="license"></a>

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲において、[Halim Qarroum](https://github.com/HQarroum/)は本作品に関する著作権および関連・隣接する権利を放棄しています。
