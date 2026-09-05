---
title: "Awesome Micropython"
description: "Micropythonを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-mcauser-awesome-micropython-readme-md"
---

# Awesome Micropython

Micropythonを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

* [ライブラリ](#libraries)
  * [AI](#ai)
  * [音声](#audio)
  * [通信](#communications)
  * [暗号](#cryptography)
  * [表示](#display)
  * [I/O](#io)
  * [数学](#mathematics)
  * [モーション](#motion)
  * [センサー](#sensors)
  * [スケジューリング](#scheduling)
  * [ストレージ](#storage)
  * [スレッド](#threading)
  * [ユーザーインターフェース](#user-interface)
  * [ユーティリティ](#utilities)
* [コミュニティ](#community)
* [チュートリアル](#tutorials)
* [書籍](#books)
* [フレームワーク](#frameworks)
* [資料](#resources)
* [開発](#development)
  * [コード生成](#code-generation)
  * [デバッグ](#debugging)
  * [ファームウェア](#firmware)
  * [IDE](#ides)
  * [ログ](#logging)
  * [シェル](#shells)
  * [ツール](#tools)
* [その他](#miscellaneous)
* [コントリビューション](#contributing)

## ライブラリ <a id="libraries"></a>

MicroPythonライブラリは次の場所でも探せます。

* [PyPi](https://pypi.org/search/?c=Programming+Language+%3A%3A+Python+%3A%3A+Implementation+%3A%3A+MicroPython) - このフィルターは、PyPIに存在するマイクロPythonライブラリのみを表示しています。注意：あなたは `pip install` マイクロPythonライブラリをインストールできません。詳細については、 [MicroPython docs](https://docs.micropython.org/en/latest/reference/packages.html) を参照してください。
* [GitHub Search](https://github.com/search?q=micropython) - GitHubにMicroPythonを含むリポジトリを検索する
* [GitHub Topic - MicroPython](https://github.com/topics/micropython) - GitHubのトピックをブラウズしてMicroPythonをタグにしたプロジェクトを確認する
* [Libraries.io](https://libraries.io/search?q=micropython) - Libraries.ioでMicroPythonを検索する
* [GitLab Explore](https://gitlab.com/explore?sort=latest_activity_desc&utf8=%E2%9C%93&name=micropython&sort=latest_activity_desc) - GitLab上のリポジトリを探索する
* [Codeberg Explore](https://codeberg.org/explore/repos?tab=&sort=recentupdate&q=micropython) - Codeberg上のリポジトリを探索する

### AI <a id="ai"></a>

* [MicroMLP](https://github.com/jczic/MicroMLP) - MicroPython用のマイクロニューラルネットワークマルチレイヤープerceptron（ESP32およびPycomモジュールで使用）
* [MicroPython-NeuralNetwork](https://gitlab.com/olivierlenoir/MicroPython-NeuralNetwork) - MicroPython用のニューラルネットワーク
* [upython-chat-gpt](https://github.com/karlsoderby/upython-chat-gpt) - MicroPython用のChatGPT
* [emlearn-micropython](https://github.com/emlearn/emlearn-micropython) - MicroPython用の効率的な機械学習エンジン
* [mp_esp_dl_models](https://github.com/cnadler86/mp_esp_dl_models) - MicroPython用のESP DLビジョンモデル（例：顔検出）とのバインディング

### 音声 <a id="audio"></a>

* [micropython-jq6500](https://github.com/rdagger/micropython-jq6500) - JQ6500 UART MP3モジュール用のドライバー
* [KT403A-MP3](https://github.com/jczic/KT403A-MP3) - DFPlayer MiniおよびGrove MP3 v2.0で使用されるKT403A用ドライバー。
* [micropython-buzzer](https://github.com/fruch/micropython-buzzer) - ブザーでNokiaのコマースおよびMIDファイルを再生する
* [micropython-dfplayer](https://github.com/redoxcode/micropython-dfplayer) - DFPlayer mini MP3プレイヤーモジュールを制御するためのライブラリ
* [micropython-dfplayer](https://github.com/ShrimpingIt/micropython-dfplayer) - DFPlayer Mini用のUARTドライバー
* [micropython-longwave](https://github.com/MattMatic/micropython-longwave) - MicroPythonボード用のWAVプレイヤー
* [micropython-vs1053](https://github.com/peterhinch/micropython-vs1053) - VS1053b MP3プレイヤー用の非同期ドライバー
* [micropython-midi](https://github.com/EMATech/micropython-midi) - MicroPython用のMIDI実装例
* [upy-rtttl](https://github.com/dhylands/upy-rtttl) - リングトーンテキスト転送言語（RTTTL）用のPythonパーサー
* [micropython-i2s-examples](https://github.com/miketeachman/micropython-i2s-examples) - MicroPythonを実行するマイクロコントローラー向けのI2Sサポートの例
* [micropython-osc](https://github.com/SpotlightKid/micropython-osc) - MicroPython用の最小限のOSCクライアントおよびサーバーライブラリ
* [micropython-sgtl5000](https://github.com/rdagger/micropython-sgtl5000) - SGTL5000低消費電力立体音声コードックにヘッドフォンアンプを備えたライブラリ
* [umidiparser](https://github.com/bixb922/umidiparser) - MicroPython、CircuitPythonおよびPython用のMIDIファイルパーサー
* [micropython-tas2505](https://github.com/miketeachman/micropython-tas2505) - テキサスインスティテュートTAS2505デジタル入力クラスDスピーカーアンプ用のMicroPythonドライバー
* [yx5300](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/yx5300.py) - シリアルインターフェースで制御可能なMP3プレイヤー
* [micropython_nonblocking_buzzer](https://github.com/jornamon/micropython_nonblocking_buzzer) - 音を再生している間もメインループをブロッキングしないように、基本的なメロディや音パターンを再生できるブザークラスの非ブロッキング実装
* [multi-midi](https://github.com/HLammers/multi-midi) - RP2ボード向けのライブラリで、UARTおよびPIOベースのハードウェアMIDIおよびUSB MIDI 1.0に対応したインターフェースを提供します。
* [IoTy vs1003](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/vs1003.py) - VS1003MP3デコーダ／エンコーダー用ドライバー。MP3、WMA、MIDI、ADPCMの再生およびADPCMの録音をサポート。

### 通信 <a id="communications"></a>

#### API <a id="apis"></a>

* [micropython-utelegram](https://github.com/jordiprats/micropython-utelegram) - MicroPython用のTelegram APIラッパー
* [uEagle](https://github.com/jcalbert/uEagle) - MicroPython用のRainforest EAGLEクライアント
* [micropython-youtube-api](https://github.com/UnexpectedMaker/micropython-youtube-api) - MicroPython用のYouTube API
* [micropython_esp8266_tweetbot](https://github.com/ayoko/micropython_esp8266_tweetbot) - マイクロPython v1.8.4（ESP8266）用のツイートボット。
* [telegram-upy](https://github.com/gabrielebarola/telegram-upy) - MicroPython用のTelegram APIラッパー
* [micropython-thingspeak](https://github.com/radeklat/micropython-thingspeak) - MicroPythonを実行するIoTデバイス（例：ESP8266）からThingspeak.comにデータを送信するためのライブラリ
* [micropython_pushbullet](https://github.com/gsampallo/micropython_pushbullet) - ESP8266上でMicroPythonを使用したPushBulletの使い方に関するシンプルな例
* [esp32-youtube-display](https://github.com/alvarowolfx/esp32-youtube-display) - Google APIとMicroPythonを使ってYouTubeのメトリクスを表示
* [micropython-spotify-web-api](https://github.com/tltx/micropython-spotify-web-api) - MicroPythonを用いたIoTデバイスでSpotifyのウェブAPIを使用するためのライブラリ
* [micropython_demo_bot](https://github.com/gsampallo/micropython_demo_bot) - Telegram用のボットを作成する方法に関する小さな例
* [micropython-basicdweet](https://github.com/jacklinquan/micropython-basicdweet) - 無料のdweetサービスの非常に基本的なAPIを提供するPythonモジュール
* [micropython-dweeter](https://github.com/jacklinquan/micropython-dweeter) - 無料のdweetサービスを介したメッセージ送信用のPythonモジュール
* [micropython-cryptodweet](https://github.com/jacklinquan/micropython-cryptodweet) - 無料のdweetサービスの非常に基本的なAPIを提供するPythonモジュール（暗号化あり）
* [micropython-linenotify](https://github.com/PerfecXX/micropython-linenotify) - ESP8266およびESP32でLine Notifyに通知を送信するためのMicroPythonライブラリ
* [micropython-telegram-bot](https://github.com/antirez/micropython-telegram-bot) - MicroPython用のTelegramボットライブラリ：IoTプロジェクトをクラウド上に簡単に配置する方法
* [MicroPython-GoogleSheet](https://github.com/PerfecXX/MicroPython-GoogleSheet) - Google Sheets にデータを取得・更新・追加するための Google Apps Script API の利用例

#### 認証 <a id="authentication"></a>

* [micropython-firebase-auth](https://github.com/WoolDoughnut310/micropython-firebase-auth) - マイクロPython用のFirebase Auth実装。

#### Bluetooth <a id="bluetooth"></a>

* [PyBoard-HC05-Android](https://github.com/KipCrossing/PyBoard-HC05-Android) - Pyboard HC05 ブラッディットアダプタの例アプリケーション
* [uble](https://github.com/dmazzella/uble) - MicroPython で書かれた軽量 Bluetooth Low Energy ドライバー
* [MicroPythonBLEHID](https://github.com/Heerkog/MicroPythonBLEHID) - MicroPython 用の Human Interface Device (HID) を Bluetooth Low Energy (BLE) GATT で実現するライブラリ
* [upyble](https://github.com/Carglglz/upyble) - Bluetooth Low Energy マイクロPython デバイス向けのコマンドラインツール
* [micropython-xiaomi-ble-adv-parse](https://codeberg.org/scy/micropython-xiaomi-ble-adv-parse) - 一部の Xiaomi ブラッディット低エネルギー (BLE) センサーからセンサーデータを無意識に取得
* [mijia-temphum-upy](https://codeberg.org/scy/mijia-temphum-upy) - 特定の Xiaomi Mijia BLE 温度・湿度センサーを読み取るマイクロPython ライブラリ
* [micropython-aioble-itag](https://github.com/mcauser/micropython-aioble-itag) - aioble を使って iTag BLE キーアイテムタグとやり取りする例アプリケーション
* [micropython_aioble_examples](https://github.com/ekspla/micropython_aioble_examples) - ESP32 を使ったマイクロPython での aioble (asyncio BLE) のいくつかの例
* [BTHome-MicroPython](https://github.com/DavesCodeMusings/BTHome-MicroPython) - センサーデータを BTHome BLE アドバタイジングペイロードにフォーマットするマイクロPython モジュール

#### CAN <a id="can"></a>

* [micropython-spacecan](https://gitlab.com/alphaaomega/micropython-spacecan) - Spacecan は、埋め込みシステム向けの SpaceCAN プロトコルのマイクロPython 実装
* [Robomaster-Micropython](https://github.com/JohnieBraaf/Robomaster-Micropython) - ロボマスター S1 - マイクロPython CAN バス制御器
* [micropython-mcp2515](https://github.com/jxltom/micropython-mcp2515) - マイクロPython MCP2515 ドライバー（Arduino MCP2-515 CAN インターフェースライブラリから移植）
* [microPython_MCP2515](https://github.com/capella-ben/microPython_MCP2515) - MCP2515 CAN バス制御器向けのマイクロPython ライブラリ

#### 圧縮 <a id="compression"></a>

* [ufastlz](https://github.com/dmazzella/ufastlz) - FastLZ、高速無損失圧縮ライブラリのマイクロPython ワッパー
* [tamp](https://github.com/BrianPugh/tamp) - 低メモリ使用、マイクロPython最適化された、DEFLATEにインスパイアされた無損失圧縮ライブラリ
* [micropython-zipfile](https://github.com/jonnor/micropython-zipfile) - ZIPアーカイブファイルの読み書き。CPythonから移植されたもので、DEFLATE圧縮をサポート
* [bitstruct-micropython](https://github.com/peterzuger/bitstruct-micropython) - [bitstruct](https://github.com/eerimoq/bitstruct) のマイクロPython版。

#### 暗号 <a id="cryptography"></a>

* [ucryptography](https://github.com/dmazzella/ucryptography) - pyca/cryptography の ARM Mbed TLS に基づいた軽量移植（マイクロPython用）
* [mpyaes](https://github.com/iyassou/mpyaes) - マイクロPython 用の AES 暗号化モジュール
* [micropython-aes](https://github.com/piaca/micropython-aes) - AESアルゴリズムの純粋Python実装
* [ucrypto](https://github.com/dmazzella/ucrypto) - RSAおよび楕円曲線暗号（特にデジタル署名）を高速に実行するMicroPythonパッケージ。ECDSA API設計はfastecdsaを参考にし、実装はtomsfastmathに基づいている。
* [ucryptoauthlib](https://github.com/dmazzella/ucryptoauthlib) - マイクロチップのCrypto Authenticationセキュアエレメント向けの軽量ドライバー。純粋なPythonでMicroPythonに実装されている。
* [embit](https://github.com/diybitcoinhardware/embit) - MicroPythonおよびPython 3向けの最小限のビットコインライブラリ。エントリーデバイス向けに設計されている。
* [microotp](https://github.com/gdassori/microotp) - ESP8266 MicroPython用のOTP生成器。
* [micropython-rsa-signing](https://github.com/artem-smotrakov/micropython-rsa-signing) - MicroPython上でRSA署名を行う。
* [micropython-cryptomsg](https://github.com/jacklinquan/micropython-cryptomsg) - MicroPythonでAES CBCモードでメッセージを暗号化・復号するためのモジュール。
* [mprsa](https://github.com/git-n-pissed/mprsa) - DERおよびPEM形式でPKCS#1、PKCS#8、X.509/SPKI構造を使用してRSA鍵を作成・インポート・エクスポートし、SHA-1およびSHA-25及によるブレインディングを用いて署名・検証および暗号化・復号を行うマイクロPythonモジュール。
* [mpy-mbedtls](https://github.com/Carglglz/mpy-mbedtls) - MbedTLSのECおよびx509証明書／CSR関数のMicroPython用バインディング。
* [micropython-cryptocfb](https://github.com/jacklinquan/micropython-cryptocfb) - AES-128 CFBモードでデータを暗号化および復号するPythonモジュール。
* [tscp](https://github.com/shariltumin/tscp) - Diffie-Hellman-Merkleに基づくエンドツーエンド暗号化。TLS1.3スタイルのハンドシェイクをMicroPythonで実現。
* [usigv4](https://github.com/vhespanha/usigv4) - マイクロPython/エムベディッド用途向けの最小限のAWS署名バージョン4（SigV4）実装。

#### DNS <a id="dns"></a>

* [aiodns](https://github.com/vshymanskyy/aiodns) - 小さな、汎用性の高いDNSクライアントで、async版 `getaddrinfo` を提供し、どの接続にも対応します。
* [ICantBelieveItsNotDNS](https://github.com/yschaeff/ICantBelieveItsNotDNS) - "I Can't Believe It's Not DNS!" (ICBIND) はESP8266上でMicroPythonで書かれた权威DNSサーバー。
* [MicroDNSSrv](https://github.com/jczic/MicroDNSSrv) - マルチドメインでワイルドカード付きまたはなしでAクエリに応答するためのMicroPython用マイクロDNSサーバー（PycomモジュールおよびESP32で使用）。
* [tinydns](https://github.com/belyalov/tinydns) - 非常にシンプルなDNS非同期サーバー（MicroPython用）。
* [micropython-captiveportal](https://github.com/metachris/micropython-captiveportal) - マイクロPython向けの最小限のasyncキャプティブポータル（uasyncio v3／マイクロPython 1.13以降および以前のバージョンにも対応）。
* [Micropython-DNSServer-Captive-Portal](https://github.com/p-doyle/Micropython-DNSServer-Captive-Portal) - MicroPythonのWiFi APキャプティブポータル（DNSおよびWebサーバーを備える）。

#### ESP-NOW <a id="esp-now"></a>

* [mesh-espnow-micropython](https://github.com/shariltumin/mesh-espnow-micropython) - IoTデバイスの協調ノード間の動的セキュアメッシュ。
* [mp_espnow_wrapper](https://github.com/cnadler86/mp_espnow_wrapper) - ESP間のESP-NOWを介したデータ送受信（心配なし）。

#### Ethernet <a id="ethernet"></a>

* [Official WIZnet5k](https://github.com/andrewleech/wiznet_ioLibrary_Driver) - WIZnet5x00シリーズのEthernetコントローラ向けドライバー。
* [micropy-ENC28J60](https://github.com/przemobe/micropy-ENC28J60) - ENC28J6及Ethernetチップドライバー（RP2用）。
* [RP2040 Ethernet example](https://github.com/SteveSEK/Raspberry-Pi-Pico-MicroPython-Ethernet) - Ethernetドライバー、Pythonコードの例、YouTube。
* [micropython-ch9121](https://github.com/wybiral/micropython-ch9121) - CH9121 Ethernetモジュールを制御するためのMicroPythonライブラリ。

#### FTP <a id="ftp"></a>

* [micropython-ftplib](https://github.com/SpotlightKid/micropython-ftplib) - MicroPython用のFTPクライアントライブラリ。
* [FTP-Server-for-ESP8266-ESP32-and-PYBD](https://github.com/robert-hh/FTP-Server-for-ESP8266-ESP32-and-PYBD) - ESP8266／ESP32／Pyboard上でMicroPythonプラットフォームに搭載された小型FTPサーバー。
* [MicroFTPServer](https://github.com/cpopp/MicroFTPServer) - ESP8266 で MicroPython を使用できる最小限の FTP サーバー
* [micropython-uaioftp](https://github.com/cwyark/micropython-uaioftp) - MicroPython 用の軽量 FTP ライブラリ
* [FtpTiny-Micropython](https://github.com/MZachmann/FtpTiny-Micropython) - スレッド内で実行可能な非常に小さい FTP サーバー

#### GPS <a id="gps"></a>

* [micropyGPS](https://github.com/inmcm/micropyGPS) - 完全な GPS NMEA 文字列解析機能
* [micropython-gnssl76l](https://github.com/tuupola/micropython-gnssl76l) - Quectel GNSS L76-L (GPS) 用の MicroPython I2C ドライバー
* [mpy-agps](https://github.com/pulkin/mpy-agps) - MicroPython による補助位置サービス (AGPS) の実装
* [Asynchronous GPS driver](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/GPS.md) - uasyncio タスクとして GPS データを受信・解析

#### GSM <a id="gsm"></a>

* [micropython-upyphone](https://github.com/jeffmer/micropython-upyphone) - Pyboard と SIM800l を使って構築された GSM 電話
* [micropython-sim800](https://github.com/olablt/micropython-sim800) - SIM800 用の MicroPython ドライバー
* [sim800](https://github.com/basanovase/sim800) - MicroPython で SIM800 モジュールに接続するためのライブラリ
* [MicroPython-AM7020](https://github.com/JiekangHuang/MicroPython-AM7020) - AM7020 ナーワイド帯域 IoT (NBIoT) モジュール用の MicroPython ドライバー
* [SIM800L-micropython](https://github.com/aleppax/SIM800L-micropython) - SIM800L AT コマンドの一般的なコマンドをラップした MicroPython ラッパー
* [sim7600](https://github.com/basanovase/sim7600) - SIM7600 モジュール用の MicroPython ライブラリ
* [sim900](https://github.com/basanovase/sim900) - SIM900 GSM/GPRS モジュール用の MicroPython ライブラリ

#### HTTP <a id="http"></a>

* [mrequests](https://github.com/SpotlightKid/mrequests) - MicroPython 用の HTTP クライアントモジュール（requests に類似する API を備える）
* [uht](https://github.com/nmattia/uht) - MicroPython 用の軽量 HTTP サーバー（ウェブサイトを提供し、リクエストを処理）

#### IoT <a id="iot"></a>

* [aiomqttc](https://github.com/Tangerino/aiomqttc) - MicroPython および CPython 用の非同期 MQTT クライアント
* [microhomie](https://github.com/microhomie/microhomie) - Homie MQTT 仕様に基づく IoT 用の MicroPython 実装
* [uPyEcho](https://github.com/lemariva/uPyEcho) - ESP32 上の MicroPython で動作する、Amazon Echo（Alexa）と連携可能な Belkin WeMo デバイスのエミュレーション
* [SonosRemote](https://github.com/foosel/SonosRemote) - ESP8266 上で動作する Sonos インストールに接続された Sonos HTTP API を使用するリモート
* [micropython-home-assistant](https://gitlab.com/aapjeisbaas/micropython-home-assistant) - マイクロピートンベースのスクリプトで、Home Assistantを活用した家庭用自動化プロジェクトを拡張します。
* [micropython-iot](https://github.com/peterhinch/micropython-iot) - ESP826、ESP32またはPyboard Dエンドポイントを用いたIoTアプリケーション設計のアプローチ。
* [iot-core-micropython](https://github.com/GoogleCloudPlatform/iot-core-micropython) - Google Cloud IoT Coreにマイクロピートンで接続します。
* [SmartUPy](https://github.com/lemariva/SmartUPy) - マイクロピートンで「Tuya型」スマート電源プラグを制御します。
* [aws-iot-GET-POST-loop](https://github.com/manningt/aws-iot-GET-POST-loop) - AWS IoT REST APIを用いてデバイス状態情報をGET/POSTするマイクロピートンコード。
* [sensor-mqtt-homeassistant](https://github.com/DougWilkinson/sensor-mqtt-homeassistant) - GPIO、DHT、アナログ、LEDなどに対応したESP8266/ESP32マイクロピートンベースのセンサープラットフォーム。Webサーバーから.pyコードのリモート更新およびMQTT/Home Assistant統合を含みます。
* [micropython-ha-mqtt-device](https://github.com/agners/micropython-ha-mqtt-device) - HomeAssistant用のMQTTディスカバリーでエンティティを作成できるマイクロピートンモジュール。
* [ESP8266-Home-Assistant-Smart-Socket](https://github.com/AnthonyKNorman/ESP8266-Home-Assistant-Smart-Socket) - このマイクロピートンプロジェクトは、安価なWiFiスマートソケットHyleton313をハッキングするものです。
* [ESP8266-Home-Assistant-RGB-Bulb](https://github.com/AnthonyKNorman/ESP8266-Home-Assistant-RGB-Bulb) - このマイクロピートンプロジェクトは、安価なWiFiRGBランプに内蔵されたTYWE3Sボードをハッキングするものです。
* [uPyIoT](https://github.com/lemariva/uPyIoT) - M5Stack ATOM（マイクロピートン）をGoogle Cloud Platform（GCP）に接続し、センサーから取得した空気品質データを収集します。
* [micropython-switchbot-thermometer-hygrometer](https://github.com/hilch/micropython-switchbot-thermometer-hygrometer) - BluetoothでSwitchBotの温度計・湿度計を読み取ります。

#### IR <a id="ir"></a>

* [micropython-necir](https://github.com/MattMatic/micropython-necir) - TL1838 IR受信LED用のNEC赤外線キャプチャ。
* [Micropython-IR](https://github.com/designerPing/Micropython-IR) - Pyboardの赤外線リモコンのスヌーフとリプレイ。
* [micropython_ir](https://github.com/peterhinch/micropython_ir) - 非ブロッキングデバイスドライバーで赤外線リモコンからの受信と赤外線「ブレスターアプリ」用のドライバーを提供。
* [micropython-amg88xx](https://github.com/peterhinch/micropython-amg88xx) - Adafruit 3538によるグリッド・アイ・熱赤外線配列センサー用ドライバー。
* [micropython-ys-irtm](https://github.com/mcauser/micropython-ys-irtm) - YS-IRTM 5V NEC赤外線UARTトランスミッター用のマイクロピートン例。
* [esp8266_ir](https://github.com/ruoyu0088/esp8266_ir) - WebSocketで赤外線信号を制御します。
* [micropython_espX_IR_Transceiver](https://github.com/gamefunc/micropython_espX_IR_Transceiver) - マイクロピートンESP32赤外線トランスミッター。
* [pico-ir](https://github.com/bartoszadamczyk/pico-ir) - Raspberry Pi Pico用の赤外線ライブラリ。
* [esp32-ir-remote](https://github.com/cbrand/esp32-ir-remote) - ESP32赤外線リモコンを実行するマイクロピートンプロジェクト。

#### LoRa <a id="lora"></a>

* [loraE22](https://github.com/matthias-bs/loraE22) - Ebyte E22シリーズLoRaモジュール用のマイクロピートンクラス。
* [micropython-lora](https://github.com/wybiral/micropython-lora) - Semtech SX127x LoRaモジュールをSPIで制御するためのMicroPythonライブラリ。
* [micropython-aiolora](https://github.com/wybiral/micropython-aiolora) - Semtech SX127x LoRaモジュールをasyncio APIで制御するためのMicroPythonライブラリ。
* [micropython-rylr](https://github.com/wybiral/micropython-rylr) - Reyax LoRaモジュール（RYLR896、RYLR406）を制御するためのMicroPythonライブラリ。
* [silvergeko_rfm9x](https://github.com/scopelemanuele/silvergeko_rfm9x) - adafruit_rfm9x.pyライブラリのMicroPythonへの移植。
* [EByte_LoRa_E220_micropython_library](https://github.com/xreef/EByte_LoRa_E220_micropython_library) - MicroPythonによるEBYTE E220 LoRaデバイス。
* [EByte_LoRa_E22_micropython_library](https://github.com/xreef/EByte_LoRa_E22_micropython_library) - MicroPythonによるEBYTE E22 LoRaデバイス。
* [EByte_LoRa_E32_micropython_library](https://github.com/xreef/EByte_LoRa_E32_micropython_library) - MicroPythonによるEBYTE E32 LoRaデバイス。

#### LoRaWAN <a id="lorawan"></a>

* [uPyLoRaWAN](https://github.com/lemariva/uPyLoRaWAN) - ESP32でMicroPythonを使用したLoRaおよびLoRaWANの実装。
* [SX127x_driver_for_MicroPython_on_ESP8266](https://github.com/Wei1234c/SX127x_driver_for_MicroPython_on_ESP8266) - ESP8266/ESP3-3/Raspberry Pi上で動作するSemtech SX127x（LoRa受信機）ドライバー。（Micro）Python対応。
* [LightLora_MicroPython](https://github.com/MZachmann/LightLora_MicroPython) - 軽量な割り込み駆動型Semtech SX127xライブラリ（MicroPython対応）。
* [u-lora](https://github.com/martynwheeler/u-lora) - MicroPython向けのRaspi-lora。
* [sx127x_esp](https://github.com/azorg/sx127x_esp) - LoRaTM sx127xチップを搭載したRa-01モジュールベースをESP8266／ESP32にMicroPythonで接続する方法。
* [nanoserver](https://github.com/gradoj/nanoserver) - MicroPythonによる埋め込み型LoRaWANサーバー。
* [micropySX126X](https://github.com/ehong-tl/micropySX126X) - Semtech SX126X LoRaドライバー（MicroPythonおよびCircuitPython対応）。

#### MDNS <a id="mdns"></a>

* [micropython-mdns](https://github.com/cbrand/micropython-mdns) - サービス発見をサポートする純粋なPython実装のMDNS。

#### Modbus <a id="modbus"></a>

* [micropython-modbus](https://gitlab.com/extel-open-source/micropython-modbus) - modbus-tkのMicroPython版。
* [micropython-modbus](https://github.com/techbase123/micropython-modbus) - MicroPython ESP32デバイス向けModbusマスターライブラリ（Pycomのpycom-modbusをベースに）。
* [mp_modbus](https://github.com/eydam-prototyping/mp_modbus) - MicroPython向けModbusライブラリ。
* [micropython-modbus](https://github.com/brainelectronics/micropython-modbus) - ModBus TCPおよびRTUライブラリ（クライアントおよびホストモードをサポート）。Pycomのpycom-modbusをベースに。

#### MQTT <a id="mqtt"></a>

* [micropython-mqtt](https://github.com/peterhinch/micropython-mqtt) - WiFiおよびブローカーの障害から回復可能な「頑健な」非同期MQTTクライアント。
* [MQBoard](https://github.com/tve/mqboard) - MicroPythonボード（特にESP32）上でMQTTを使用するための軽量フレームワーク（asyncio対応）。
* [pysmartnode](https://github.com/kevinkk525/pysmartnode) - MicroPython向けスマートホームフレームワーク。
* [umqtt_aws_iot](https://github.com/juwul/umqtt_aws_iot) - MicroPythonでAWS IoTにUMQTTメッセージを公開する
* [sonoff-mqtt by davea](https://github.com/davea/sonoff-mqtt) - MQTTを使ってSonoff/ESP8266を制御するMicroPythonスクリプト
* [micropython-sonoff-switch](https://github.com/kfricke/micropython-sonoff-switch) - iTead Sonoff SwitchにMicroPythonを用いたMQTT制御可能なスイッチを実装
* [micropython-thingspeak-mqtt-esp8266](https://github.com/miketeachman/micropython-thingspeak-mqtt-esp8266) - ESP8266/ESP32プラットフォーム上で実行されるMicroPythonでThingSpeakに発信・購読
* [uMQTT](https://github.com/andrewmk/uMQTT) - WiPyボード上のMicroPythonでMQTT発信
* [micropython-mqtt](https://github.com/chrismoorhouse/micropython-mqtt) - ESP32やPycomデバイスなどMicroPythonデバイス向けの、非同期MQTTライブラリ（自動再接続付き）
* [micropython-adafruit-mqtt-esp8266](https://github.com/miketeachman/micropython-adafruit-mqtt-esp8266) - Adafruit IOへのMQTT発信・購読を実現するMicroPython/CircuitPython実装（ESP8266/ESP32用）
* [mqtt_upython](https://github.com/matbgn/mqtt_upython) - ESP8266上で実行されるMQTTクライアント
* [tinymqtt](https://github.com/belyalov/tinymqtt) - MicroPython向けの非同期MQTTクライアント
* [micropython-mqtt-thingspeak](https://github.com/miketeachman/micropython-mqtt-thingspeak) - ESP8266/ESP32上で実行されるMicroPythonでThingSpeakに発信・購読
* [micropython-sparkplugb](https://github.com/sciotaio/micropython-sparkplugb) - Eclipse Sparkplug B仕様のMicroPython対応実装

#### NBD <a id="nbd"></a>

* [unbd](https://github.com/pulkin/unbd) - マイクロPython向けのネットワークブロックデバイス（NBD）のマイクロ実装。

#### NFC <a id="nfc"></a>

* [micropython-nfc](https://github.com/rolandvs/micropython-nfc) - MicroPythonでNFCを使用する
* [micropython_pn532](https://github.com/luiz-brandao/micropython_pn532) - Adafruit CircuitPython（UART）ベースのPN532 NFC/RFIDブレイクアウトボード用ドライバー
* [NFC_PN532_SPI](https://github.com/Carglglz/NFC_PN532_SPI) - Adafruit CircuitPythonのPN532 NFC/RFID制御ライブラリ（SPI）の一部移植（MicroPython対応）

#### NTP <a id="ntp"></a>

* [esp8266_ntp_webserver](https://github.com/Roterfux/esp8266_ntp_webserver) - MicroPython + ESP8266 + NTP + ウェブサーバー
* [micropython-ntpd](https://github.com/dave2/micropython-ntpd) - MicroPython上で実装されたNTPデーモン
* [micropython_ntpserver](https://github.com/GrantGMiller/micropython_ntpserver) - MicroPython用に書かれたNTPサーバー
* [micropython-ntpclient](https://github.com/wieck/micropython-ntpclient) - uasyncioを使用したMicroPythonのNTPクライアント
* [micropython-ntp](https://github.com/ekondayan/micropython-ntp) - MicroPython向けの堅牢なNTPライブラリ
* [micropython-simple-async-ntpclient](https://codeberg.org/dsiggi/micropython-simple_async_ntpclient) - 非常にシンプルな非同期MicroPythonモジュール（NTPサーバーから現在時刻を受信）

#### オブジェクトストレージ <a id="object-storage"></a>

* [uminio](https://github.com/paluigi/uminio) - マイクロPythonでMinIOオブジェクトストレージサーバーにファイルをアップロードするためのライブラリ。

#### OneWire <a id="onewire"></a>

* [Official OneWire](https://github.com/micropython/micropython-lib/tree/master/micropython/drivers/bus/onewire) - ワンワイヤバスを用いるデバイス向け、たとえばダラスDS18x20のための説明
* [Onewire_DS18X20](https://github.com/robert-hh/Onewire_DS18X20) - ワンワイヤプロトコルでDS18x20センサーを駆動するためのPycom MicroPython用クラス
* [micropython_arduino_control](https://github.com/kevinkk525/micropython_arduino_control) - Arduinoをリモートで制御するためのMicroPythonライブラリおよび対応するArduinoコード

#### Onkyo EISCP <a id="onkyo-eiscp"></a>

* [eiscp-micropython](https://github.com/cbrand/eiscp-micropython) - Onkyo-EISCPプロトコル（例：Pioneerで使用）のマイクロPython版。

#### OTA <a id="ota"></a>

* [micropython-ota-updater](https://github.com/rdehuyss/micropython-ota-updater) - MicroPython用のOTAアップダート
* [Micropython-ESP32-OTA](https://github.com/AkhileshThorat/Micropython-ESP32-OTA) - rdehuyss/micropython-ota-updaterに基づくMicroPythonアップダート
* [senko](https://github.com/RangerDigital/senko) - あなたのMicroPythonプロジェクト用の最もシンプルなOTAアップデートソリューション

#### Proxy <a id="proxy"></a>

* [uProxy](https://github.com/shawwwn/uProxy) - CPythonと互換性のある、asyncioベースでメモリ効率の高いHTTP/HTTPS/SOCKS4/SOCKS5フォワードプロキシサーバー（マイクロPython用）。

#### Radio <a id="radio"></a>

* [micropython-radio](https://github.com/peterhinch/micropython-radio) - nRF24L01 2.4GHzラジオモジュール向けのプロトコル
* [micropython-rfsocket](https://github.com/wuub/micropython-rfsocket) - 人気の433MHzベースのRFSocketsを実装したMicroPythonバージョン
* [Official nRF24L01](https://github.com/micropython/micropython-lib/tree/master/micropython/drivers/radio/nrf24l01) - nRF24L01 2.4GHzラジオモジュール向けの公式ドライバー
* [micropython_remote](https://github.com/peterhinch/micropython_remote) - 433MHzリモコンコードをキャプチャ・リプレイ。リモートスイッチ付き電源アダプタを制御
* [micropython-ys-rf34t](https://github.com/mcauser/micropython-ys-rf34t) - YS-RF34T 433MHz ASK/OOK UARTトランスミッタを用いたMicroPythonの例コード
* [FM_Talkie](https://github.com/Wei1234c/FM_Talkie) - RDA5820Nを用いたFMワーキーティック
* [micropython-TEA5767](https://github.com/alankrantas/micropython-TEA5767) - TEA5767 FMラジオモジュール用のMicroPython ESP8266/ESP32ドライバー
* [micropython-ppm-decoder](https://github.com/dastultz/micropython-ppm-decoder) - R/C受信機のPPMフレーム信号をデコードするためのユーティリティ
* [ESP32-433Mhz-Receiver-and-Tools](https://github.com/Aschhoff/ESP32-433Mhz-Receiver-and-Tools) - MicroPythonで書かれたESP32 433MHz受信機とWindows向けツール
* [ESP32-433Mhz-Transmitter](https://github.com/Aschhoff/ESP32-433Mhz-Transmitter) - 純粋なMicroPython RF送信機。自作エンコーダーを作成・追加できます
* [pico_jjy_tx](https://github.com/elehobica/pico_jjy_tx) - Raspberry Pi Pico W向けのJJY送信機
* [pico_dcf77_tx](https://github.com/elehobica/pico_dcf77_tx) - Raspberry Pi Pico W向けのDCF77送信機
* [micropython_dcf77](https://codeberg.org/dsiggi/micropython-dcf77) - DCF77受信機およびデコーダー
* [MicroPython-BresserWeatherSensorReceiver](https://github.com/matthias-bs/MicroPython-BresserWeatherSensorReceiver) - Bresser 5-in-1/6-in-1/7-in-1 868MHz天気センサーラジオ受信機およびデコード器。

#### RC受信機 <a id="rc-receiver"></a>

* [micropython-ppm_reader](https://github.com/redoxcode/micropython-ppm_reader) - RC受信機から来るPPM信号をデコードするためのライブラリ。

#### REPL <a id="repl"></a>

* [webrepl](https://micropython.org/webrepl) - MicroPython WebREPL
* [zepl](https://gitlab.com/zepl1/zepl) - ゼロームの利用によるマイクロピートンWebREPLコンソールアプリケーション
* [jupyter_micropython_remote](https://gitlab.com/alelec/jupyter_micropython_remote) - シリアル/ウェブREPL経由でマイクロピートンボード上でコードを直接実行できるJupyterカーネル
* [FBConsole](https://github.com/boochow/FBConsole) - マイクロピートン用のフレームバッファコンソールクラス

#### RFID <a id="rfid"></a>

* [micropython-mfrc522](https://github.com/wendlers/micropython-mfrc522) - NXP MFRC522 RFIDリーダー/ライタードライバー
* [micropython-wiegand](https://github.com/pjz/micropython-wiegand) - ウィーガンドプロトコルリーダー
* [urdm6300](https://github.com/membermatters/urdm6300) - 人気のRDM6300 RFIDカードリーダー向けマイクロピートンドライバー

#### RPC <a id="rpc"></a>

* [ujrpc](https://github.com/zcattacz/ujrpc) - マイクロピートン用のJSON RPC

#### RTC <a id="rtc"></a>

* [micropython-tinyrtc-i2c](https://github.com/mcauser/micropython-tinyrtc-i2c) - DS1307 RTCおよびAT24C32N EEPROMドライバー
* [Micropython_TinyRTC](https://github.com/AnthonyKNorman/Micropython_TinyRTC) - DS1307 RTCドライバー
* [micropython-mcp7940](https://github.com/mattytrentini/micropython-mcp7940) - マイクロチップMCP7940 RTCドライバー
* [micropython-ds1302-rtc](https://github.com/omarbenhamid/micropython-ds1302-rtc) - マイクロピートン用DS1302 RTC時計ドライバー
* [DS3231micro](https://github.com/notUnique/DS3231micro) - DS3231向けマイクロピートンライブラリ
* [micropython-ds1307](https://github.com/brainelectronics/micropython-ds1307) - DS1307 RTC向けマイクロピートンドライバー
* [esp-ds3231-micropython](https://github.com/HAIZAKURA/esp-ds3231-micropython) - ESP8266/ESP32向けマイクロピートンのDS3231ライブラリ
* [PCF8563_PythonLibrary](https://github.com/lewisxhe/PCF8563_PythonLibrary) - NXP PCF8563リアルタイムクロック/カレンダー向けマイクロピートンライブラリ
* [DS3231](https://github.com/octaprog7/DS3231) - マキシムインテグレートのDS3231時計向けマイクロピートンモジュール
* [DS1307](https://github.com/peter-l5/DS1307) - DS1307リアルタイムクロック向けマイクロピートンドライバー
* [micropython-DS3231-AT24C32](https://github.com/pangopi/micropython-DS3231-AT24C32) - DS3231 RTC向けマイクロピートンドライバー
* [micropython_rx-8035](https://github.com/ekspla/micropython_rx-8035) - セイコーエプソンのRTC、RX-8035SA/LC向けマイクロピートンドライバー
* [micropython-ds1302-rtc](https://github.com/PaszaVonPomiot/micropython-ds1302-rtc) - マイクロピートン用DS1302 RTC時計ドライバー

#### Serial <a id="serial"></a>

* [mpy-miniterm](https://github.com/jeffmakes/mpy-miniterm) - マイクロピートンデバイスのシリアルデバッグおよびファイル同期をスムーズに行うためのツール
* [MicroPython-MorseCode](https://gitlab.com/olivierlenoir/MicroPython-MorseCode) - マイクロコントローラーとマイクロプルートの国際モールスコード
* [I2C Slave](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/I2C.md) - ピボードのI2Cサーバーモードを使用して、フルダブルアシンクローナスリンクを実装。主な用途は、UARTが1つしかないESP8266である。
* [microSDI12](https://github.com/insighio/microSDI12) - RS-485経由でセンサー情報を取得するためのミニSDI-12実装

#### Serialization <a id="serialization"></a>

* [micropython-msgpack](https://github.com/peterhinch/micropython-msgpack) - マイクロプルート向けに最適化されたメッセージパックシリアル化ライブラリ
* [micropython-uprotobuf](https://github.com/jazzycamel/micropython-uprotobuf) - マイクロプルート向けに軽量なグーグルのプロトコルバッファーズ（protobuf）の実装
* [minipb](https://github.com/dogtopus/minipb) - 純粋なPythonによるミニプロトコルバッファ（de）シリアライザ
* [ucbor](https://github.com/dmazzella/ucbor) - マイクロプルート向けに軽量なCBORの実装
* [upy-msgpack](https://github.com/SpotlightKid/upy-msgpack) - マイクロプルート向けに軽量なメッセージパック（de）シリアル化ライブラリ（マイクロプルートに限定されない）
* [micropython-msgpack](https://github.com/gitcnd/micropython-msgpack) - マイクロプルート向けに最適化されたメッセージパックシリアル化ライブラリ

#### SMTP <a id="smtp"></a>

* [uMail](https://github.com/shawwwn/uMail) - マイクロピートンでメールを送信するための軽量かつスケーラブルなSMTPクライアント

#### Sockets <a id="sockets"></a>

* [XAsyncSockets](https://github.com/jczic/XAsyncSockets) - XAsyncSocketsは、管理された非同期ソケットを提供するPython／マイクロピートン用の効率的なライブラリ

#### SOCKS <a id="socks"></a>

* [micropython-socks](https://github.com/kost/micropython-socks) - マイクロピートンによるSOCKSサーバーの実装

#### TCP <a id="tcp"></a>

* [us2n](https://github.com/tiagocoutinho/us2n) - ESP32でUARTとTCPを橋渡しするマイクロピートンのブリッジ

#### Telnet <a id="telnet"></a>

* [MicroTelnetServer](https://github.com/cpopp/MicroTelnetServer) - マイクロプルートおよびESP8266用のシンプルなtelnetサーバーで、telnetクライアントがREPLにアクセスできる
* [telnetd](https://github.com/gitcnd/telnetd) - 強力なtelnetdサーバーでマイクロプルートREPLにアクセス（強力なパスワードサポートおよび無制限接続）。

#### 音声合成 <a id="text-to-speech"></a>

* [micropython-SYN6988](https://github.com/scruss/micropython-SYN6988) - マイクロプルートのVoiceTX SYN6988テキストトゥスピーキングモジュール用のライブラリ
* [micropython-samtts](https://github.com/jacklinquan/micropython-samtts) - ソフトウェア自動口テキストトゥスピーキングプログラムのマイクロプルート版。

#### 時刻 <a id="time"></a>

* [ustrftime](https://github.com/iyassou/ustrftime) - マイクロピートン用のtime.strftimeの実装

#### VoIP <a id="voip"></a>

* [uPyVoip](https://github.com/RetepRelleum/uPyVoip) - マイクロピートンESP32用のVoIPとインタラクティブ・ボイス・レスポンス

#### Web <a id="web"></a>

* [MicroWebSrv](https://github.com/jczic/MicroWebSrv) - マイクロプルート用のミニHTTPウェブサーバー。WebSockets、HTML/Pythonテンプレート、ルーティングハンドラーをサポート。PycomモジュールおよびESP32で使用。
* [MicroWebSrv2](https://github.com/jczic/MicroWebSrv2) - IoT（マイクロプルート）または大規模サーバー（CPython）向けの最終的なマイクロウェブサーバー。WebSockets、ルーティング、テンプレートエンジンをサポートし、非常に最適化されたアーキテクチャ（メモリ割り当て、非同期I/O）を持つ。
* [tinyweb](https://github.com/belyalov/tinyweb) - マイクロプルート向けのシンプルで軽量なHTTP非同期サーバー。
* [upy-websocket-server](https://github.com/BetaRavener/upy-websocket-server) - マイクロプルート（ESP8266）のWebSocketサーバー実装。
* [micropython-captive-portal](https://github.com/amora-labs/micropython-captive-portal) - マイクロプルート向けのキャプティブポータルデモ。
* [uPyPortal](https://github.com/lemariva/uPyPortal) - ESP32（Wemos）を用いたマイクロプルート向けのキャプティブポータル。
* [ESP8266WebServer](https://github.com/codemee/ESP8266WebServer) - マイクロプルート用のESP8266ウェブサーバー。
* [microCoAPy](https://github.com/insighio/microCoAPy) - マイクロプルートに組み込まれたCoAP（制約付きアプリケーションプロトコル）のミニクライアント/サーバー実装。
* [micropyserver](https://github.com/troublegum/micropyserver) - MicroPyServerは、MicroPythonプロジェクト向けのシンプルなHTTPサーバーです。
* [MicroRESTCli](https://github.com/jczic/MicroRESTCli) - MicroPython（PycomモジュールおよびESP32で使用）向けのマイクロJSON RESTウェブクライアントです。
* [micropython-noggin](https://github.com/larsks/micropython-noggin) - MicroPython向けの非常にシンプルなウェブサーバーです。
* [uwebsockets](https://github.com/danni/uwebsockets) - ESP8266向けのMicroPython WebSocket実装です。
* [microdot](https://github.com/miguelgrinberg/microdot) - MicroPython向けの極めて小さなウェブフレームワークです。
* [micropython-nanoweb](https://github.com/hugokernel/micropython-nanoweb) - メモリ消費が小さいフルアシンクMicroPythonウェブサーバーです。
* [MicroWebCli](https://github.com/jczic/MicroWebCli) - MicroPython向けのマイクロHTTPウェブクライアントです（PycomモジュールおよびESP32で使用）。
* [micropython-configserver](https://github.com/carstenblt/micropython-configserver) - MicroPython向けのキャプティブポータル（無線LAN設定用のダムDNSサーバーおよびWiFiネットワーク設定用のウェブサーバーを含む）。
* [micropython-aioweb](https://github.com/wybiral/micropython-aioweb) - MicroPython向けのミニマリズムアシンクウェブフレームワークです。
* [thimble](https://github.com/DavesCodeMusings/thimble) - MicroPython向けの小さなウェブフレームワークです。
* [CaptiveWebServer](https://github.com/joewez/CaptiveWebServer) - キャプティブポータルからウェブサイトを提供するためのシンプルなMicroPythonウェブサーバーです。
* [micropython-urouter](https://github.com/majoson-chen/micropython-urouter) - MicroPythonベースの軽量HTTPリクエストルーティング処理サポートライブラリです。以前の名前はmicro-routeです。
* [wlan-relays](https://github.com/oliver-joos/wlan-relays) - ESP32ボードのピンを制御するための、MicroPythonで書かれた非常にシンプルなHTTPサーバーです。
* [micropidash](https://github.com/kritishmohapatra/micropidash) – Simple web dashboard served directly from MicroPython boards (ESP32, Pico W).
* [microsky](https://github.com/nakagami/microsky) - Pythonおよびマイクロピートン用のクライアント [Bluesky](https://bsky.app/)

#### WiFi <a id="wifi"></a>

* [HueBridge](https://github.com/FRC4564/HueBridge) - Philips Hue Bridgeです。
* [micropython-wifimanager](https://github.com/mitchins/micropython-wifimanager) - ESP8266ボード上で使用するMicroPython向けのシンプルなネットワーク設定ツールです。
* [WiFiManager](https://github.com/tayfunulu/WiFiManager) - ESP8266 - ESP12 - ESP32 - MicroPython向けのWiFiマネージャーです。
* [Micropython-ESP-WiFi-Manager](https://github.com/brainelectronics/Micropython-ESP-WiFi-Manager) - ネットワークの設定と接続を行うためのWiFiマネージャーです。
* [mpy-wpa_supplicant](https://github.com/Carglglz/mpy-wpa_supplicant) - 最も近い知られているWiFi APに接続するためのMicroPythonモジュールです。
* [micropython-wifi_manager](https://github.com/ferreira-igor/micropython-wifi_manager) - ESP8266およびESP32向けのMicroPythonベースのWiFiマネージャーです。

#### Zigbee <a id="zigbee"></a>

* [ZbPy](https://github.com/osresearch/ZbPy) - マイクロピートンによるIEEE802.15.4／Zigbeeパーサー

### 暗号 <a id="cryptography"></a>

#### 歴史的資料 <a id="historical"></a>

* [enigmapython](https://github.com/denismaggior8/micropython-enigma-python) - マイクロピートンで異なるエンジマ機種をシミュレートするためのシンプルかつ忠実なライブラリ

### 表示 <a id="display"></a>

#### 電子ペーパー <a id="e-paper"></a>

* [micropython-ili9341](https://github.com/mcauser/deshipu-micropython-ili9341) - SSD1606アクティブマトリクスエペーパーディスプレイ 128x180です。
* [micropython-waveshare-epaper](https://github.com/mcauser/micropython-waveshare-epaper) - 各種Waveshare ePaperモジュール向けドライバー
* [micropython-waveshare-epd](https://github.com/ayoy/micropython-waveshare-epd) - Pycom風MicroPythonを実行するデバイス向けWavesh或ePaperディスプレイドライバー
* [ssd1675a](https://github.com/mattytrentini/ssd1675a) - SSD1675ベースのeインクディスプレイ向けドライバー
* [Inkplate-micropython](https://github.com/SolderedElectronics/Inkplate-micropython) - Inkplateボード向けMicroPythonドライバー
* [micropython-inkplate6](https://github.com/tve/micropython-inkplate6) - マイクロピートンによるインクプレート6のドライバー
* [eInk-micropython](https://github.com/dhallgb/eInk-micropython) - Waveshare 4.3インチデバイス用のマイクロピートンeInkライブラリ
* [eink](https://github.com/chevdor/eink) - MicroPythonおよびESP32向けeInk・ePaperディスプレイドライバー
* [micropython_DEPG0213BN](https://github.com/Inqbus/micropython_DEPG0213BN) - TTGO T5 V2.3 ESP32ボードに搭載されたDEPG0213BN eInkディスプレイ用の純粋マイクロピートンドライバー
* [uPyEINK](https://github.com/lemariva/uPyEINK) - ESP32上でマイクロピートンを実行する場合、Waveshare 7.5" E-INKディスプレイを制御する
* [MicroPython-2.9-inch-ePaper-Library](https://github.com/rdagger/MicroPython-2.9-inch-ePaper-Library) - WaveShare 2.9インチe-Paperディスプレイ(B)用のマイクロピートンディスプレイドライバー
* [uc8151_micropython](https://github.com/antirez/uc8151_micropython) - UC8151 / IL0373 MicroPython e-paperディスプレイドライバー（グレースケールおよび高速更新をサポート）

#### フォント <a id="fonts"></a>

* [micropython-font-to-py](https://github.com/peterhinch/micropython-font-to-py) - Python 3のユーティリティでフォントをPythonソースに変換し、bytecodeとしてフリーズ可能な形式にできるもの
* [writer](https://github.com/peterhinch/micropython-font-to-py/blob/master/writer/WRITER.md) - から派生したドライバーを持つディスプレイに、Pythonフォントをレンダリングするシンプルな方法 `framebuf`
* [ssd1306big](https://github.com/nickpmulder/ssd1306big) - 128x64ピクセルSSD1306 OLEDディスプレイ向けMicroPython用フォント
* [framebuf2](https://github.com/peter-l5/framebuf2) - MicroPython FrameBuffer拡張：大きなフォントや回転フォント、三角形および円形
* [micropython_GT30L24T3Y_big5_font](https://github.com/alankrantas/micropython_GT30L24T3Y_big5_font) - GT30L24T3Y／ER3303-1 SPIモジュールからBIG-5中国語文字を読み取るためのマイクロピートンドライバー
* [ttgo-hershey-fonts](https://github.com/russhughes/ttgo-hershey-fonts) - TTGO-LCDボード向けMicroPython用Hersheyフォントデモ
* [packed-font](https://github.com/mark-gladding/packed-font) - Pico PiおよびSSD1306 OLEDディスプレイ向けメモリ効率の高いMicroPythonフォント
* [microfont](https://github.com/antirez/microfont) - MicroPythonフレームバッファ向けテキスト描画ライブラリ

#### グラフィックス <a id="graphics"></a>

* [micropython-stage](https://github.com/python-ugame/micropython-stage) - MicroPython用Stageゲームライブラリのポート
* [micropython-png](https://github.com/Ratfink/micropython-png) - PyPNGの派生品（MicroPythonとの使用に適したもの）
* [mpy-img-decoder](https://github.com/remixer-dec/mpy-img-decoder) - 純粋なMicroPythonによるPNGおよびJPEGデコーダ／パーサー／レンダラー
* [micropython-oled-progressbars](https://github.com/follower46/micropython-oled-progressbars) - ESP8266およびESP32を用いたOLEDディスプレイ向けプログレスバーのコレクション
* [microplot](https://github.com/romilly/microplot) - シンプルなMicroPythonによるプロットパッケージ
* [micropython-microbmp](https://github.com/jacklinquan/micropython-microbmp) - BMP画像処理向け小さなPythonモジュール
* [MicroPython_UPLOT](https://github.com/jposada202020/MicroPython_UPLOT) - MicroPython小型グラフィックスフレームワーク
* [Tempe](https://github.com/unital/tempe) - に基づいた効率的なマイクロピートングラフィックスライブラリ `framebuf`
* [mp_jpeg](https://github.com/cnadler86/mp_jpeg) - ESP32向け非常に高速なMicroPython JPEGエンコーダおよびデコーダ

#### GUI <a id="gui"></a>

* [lvgl](https://github.com/lvgl/lv_binding_micropython) - オブジェクト指向かつコンポーネントベースの高レベルGUIライブラリ（MicroPythonバインディング付き）
* [micropython-lcd160cr-gui](https://github.com/peterhinch/micropython-lcd160cr-gui) - PyboardおよびLCD160CRカラー表示用のシンプルなタッチ操作によるイベントベースGUI
* [micropython_ra8875](https://github.com/peterhinch/micropython_ra8875) - RA8875ベースの表示用マイクロPythonデバイスドライバおよびnano-GUI
* [micropython-nano-gui](https://github.com/peterhinch/micropython-nano-gui) - TFT、ePaperおよびOLEDディスプレイのディスプレイドライバーが、`framebuf`クラスから派生した場合に使用する、極めて小さな表示専用GUIで、GUIオブジェクト（ウィジェット）のセットが限定されている。
* [micro-gui](https://github.com/peterhinch/micropython-micro-gui) - nano-guiを派生させ、同じ表示とホストをサポートするもので、プッシュボタンまたはナビゲーションジョイコンによるユーザー入力と、オプションのローティングエンコーダーをサポート
* [micropython-touch](https://github.com/peterhinch/micropython-touch) - nano-guiを派生させ、同じ表示とホストをサポートするもので、タッチ入力を提供。さまざまなタッチコントローラーをサポート
* [TFT-GUI](https://github.com/peterhinch/micropython-tft-gui) - SSD1963コントローラーに基づく大画面用の高速タッチGUI（XPT2046タッチコントローラーを採用）
* [micropython-nextion](https://github.com/brainelectronics/micropython-nextion) - マイクロPythonを使用したNextion表示の制御
* [mp_lvgl_widgets](https://github.com/kdschlosser/mp_lvgl_widgets) - LVGLのマイクロPython版用のウィジェット
* [micropython-core2](https://github.com/lemariva/micropython-core2) - MPU6886、ILI9342C、BM8563およびAXP192ドライバをサポートするM5Stack CORE2用のLV-MicroPython拡張

#### キャラクターLCD <a id="lcd-character"></a>

* [Grove_RGB_LCD](https://github.com/dda/MicroPython/blob/master/Grove_RGB_LCD.py) - SeeedStudioのGrove RGB LCD用ドライバ
* [lcdi2c](https://github.com/slothyrulez/lcdi2c) - HD44780互換のドットマトリクスLCD用ドライバ
* [micropython-charlcd](https://github.com/rdagger/micropython-charlcd) - HD44780互換のLCD用ドライバ
* [micropython-i2c-lcd](https://github.com/Bucknalla/micropython-i2c-lcd) - I2C 2x16 LCDスクリーン用ドライバ
* [pyboard-LCD-character-display](https://github.com/scitoast/pyboard-LCD-character-display) - HDD44780に適合する1602LCDのPyboarドライバー。
* [python_lcd](https://github.com/dhylands/python_lcd) - HD44780互換のドットマトリクスLCD用ドライバ
* [micropython-lcd](https://github.com/wjdp/micropython-lcd) - マイクロPython PyboardからHD44780を制御するためのクラス
* [HD44780-lcd-upy](https://gitlab.com/rafalosa/HD44780-lcd-upy) - 一般的なHD44780 LCDを制御するマイクロPythonモジュール
* [LCM1602-14_LCD_Library](https://github.com/Bhavithiran97/LCM1602-14_LCD_Library) - AIP31068L 向けドライバー。 [3.3 V I2C and SPI 1602 Serial Character LCDs](https://www.cytron.io/p-3v3-i2c-and-spi-1602-serial-character-lcd)
* [micropython-i2c-lcd](https://github.com/brainelectronics/micropython-i2c-lcd) - I2Cを介してHD44780LCDディスプレイ1602および2004を制御するマイクロPythonパッケージ。
* [micropython_i2c_lcd](https://github.com/Thomascountz/micropython_i2c_lcd) - PCF8574 I/O拡張器を介してHD44780ベースのLCD表示と相互作用するマイクロPythonライブラリ。LCD制御のための高レベルAPI（テキスト表示、カーソル操作、バックライト設定）を提供し、同時にPCF8574のGPIO操作への低レベルアクセスも提供

#### グラフィックLCD <a id="lcd-graphic"></a>

* [micropython-lcd-AQM1248A](https://github.com/forester3/micropython-lcd-AQM1248A) - AQM1248AグラフィックLCD用のESP8266ドライバ
* [micropython-pcd8544](https://github.com/mcauser/micropython-pcd8544) - Nokia 5110 PCD8544 84x48 LCDモジュール用ドライバ
* [micropython-st7565](https://github.com/nquest/micropython-st7565) - ST7565 128x64 LCD用ドライバ
* [micropython-st7920](https://github.com/ShrimpingIt/micropython-st7920) - ESP8266とSPIを用いたST7920 128x64モノクロLCDパネル上のシンプルなグラフィックプリミティブ用ライブラリ
* [MicroPython_PCD8544](https://github.com/AnthonyKNorman/MicroPython_PCD8544) - Nokia 5110 PCD8544向けESP8266ドライバー
* [Official LCD160CR](https://github.com/micropython/micropython-lib/tree/master/micropython/drivers/display/lcd160cr) - 公式MicroPython LCD160CRディスプレイ用ドライバー（抵抗式タッチセンサー付き）
* [micropython-hx1230](https://github.com/mcauser/micropython-hx1230) - HX1230 96x68 LCDモジュール向けMicroPythonライブラリ
* [micropython-SHARP_Memory_Display](https://github.com/pramasoul/micropython-SHARP_Memory_Display) - SHARPメモリディスプレイ向けMicroPythonドライバー

#### LCD TFT <a id="lcd-tft"></a>

* [micropython-ili9341](https://github.com/mcauser/deshipu-micropython-ili9341) - TFTディスプレイ用ドライバーのコレクション（ILI9341、SH1106、SSD1606、ST7735を含む）
* [micropython-ili934x](https://github.com/tuupola/micropython-ili934x) - ILI934XシリーズTFT／LCDディスプレイ向けSPIドライバー
* [MicroPython-ST7735](https://github.com/boochow/MicroPython-ST7735) - GuyCarversのST7735 TFT LCDドライバーのESP32版
* [micropython-st7735](https://github.com/hosaka/micropython-st7735) - ST7735 TFT LCD向けドライバー
* [MicroPython_ST7735](https://github.com/AnthonyKNorman/MicroPython_ST7735) - ST7735 128x128 TFT向けドライバー
* [SSD1963-TFT-Library-for-PyBoard-and-RP2040](https://github.com/robert-hh/SSD1963-TFT-Library-for-PyBoard-and-RP2040) - PyboardおよびRaspberry Pi Pico向けSSD1963 TFTライブラリ
* [micropython-ili9341](https://github.com/rdagger/micropython-ili9341) - MicroPython ILI9341ディスプレイおよびXPT2046タッチスクリーンドライバー
* [st7789_mpy](https://github.com/devbis/st7789_mpy) - ST7789チップに搭載されたディスプレイモジュールに対応する純Cによる高速MicroPythonドライバー
* [st7789py_mpy](https://github.com/devbis/st7789py_mpy) - AliExpressから販売されるCSピンなし240x240 ST7789ディスプレイ向けの遅いMicroPythonドライバー（MicroPythonで記述）
* [micropython-ili9341](https://github.com/jeffmer/micropython-ili9341) - ILI9341ディスプレイ向けMicroPythonドライバー
* [micropython-ili9341](https://github.com/tkurbad/micropython-ili9341) - ESP32上で動作するMicroPython用ILI9341 TFTドライバー
* [st7789_mpy](https://github.com/russhughes/st7789_mpy) - ST7789ディスプレイモジュール向け高速MicroPythonドライバー（C言語で記述）
* [st7789py_mpy](https://github.com/russhughes/st7789py_mpy) - 320x240、240x240、135x240 ST7789ディスプレイ向けMicroPythonドライバー
* [ili9342c_mpy](https://github.com/russhughes/ili9342c_mpy) - M5Stack Core向けILI9342Cの高速'C'ドライバー（MicroPython用）
* [gc9a01py](https://github.com/russhughes/gc9a01py) - MicroPythonでのGC9A01ディスプレイドライバー
* [gc9a01_mpy](https://github.com/russhughes/gc9a01_mpy) - GC9A01ディスプレイモジュール向け高速MicroPythonドライバー（C言語で記述）
* [st7735-esp8266-micropython](https://github.com/cheungbx/st7735-esp8266-micropython) - ESP8266 マイクロピートン向け ST7735 160x80、128x128、128x160 TFT LCD ディスプレイ用のライブラリ
* [TTGO-ST7789-MicroPython](https://github.com/schumixmd/TTGO-ST7789-MicroPython) - TTGO T-Display ESP32 CP2104 WiFi Bluetoothモジュール1.14インチLCD用のST7789ディスプレイドライバー。
* [st7735_micropython](https://github.com/cheungbx/st7735_micropython) - ESP8266向け ST7735 80x160、128x128、128x160 TFT LCD ディスプレイ用マイクロピートンドライバー
* [ili934x-micropython](https://gitlab.com/mhepp63/ili934x-micropython) - マイクロピートンとIL9341ディスプレイドライバーを組み合わせるためのライブラリ
* [micropython-st7735-esp8266](https://gitlab.com/mo_krauti/micropython-st7735-esp8266) - ESP8266に搭載されたST7735 TFTディスプレイ用マイクロピートンドライバー
* [st7789s3_esp_lcd](https://github.com/russhughes/st7789s3_esp_lcd) - C言語で書かれたTTGO T-Display-S3 ST7789ディスプレイ用のESP_LCDベースの高速マイクロピートンドライバー
* [s3lcd](https://github.com/russhughes/s3lcd) - ESP32-S3デバイスとST7789または互換ディスプレイを用いたESP_LCDベースのマイクロピートンドライバー
* [thmi_py](https://github.com/russhughes/thmi_py) - LILYGO T-HMI用のマイクロピートンディスプレイドライバー（Pythonで書かれた）
* [wt32sc01py](https://github.com/russhughes/wt32sc01py) - WT32SC01 Plus マイクロピートンディスプレイドライバー
* [st7789s3_mpy](https://github.com/russhughes/st7789s3_mpy) - TTGO T-Display-S3 ST7789用のC言語で書かれたマイクロピートンディスプレイドライバー
* [t-display-s3](https://github.com/russhughes/t-display-s3) - TTGO T-Display-S3 ST7789用のPythonで書かれたマイクロピートンディスプレイドライバー
* [mp-ili9341](https://github.com/tkurbad/mp-ili9341) - ILI9341 TFTディスプレイ用のマイクロピートンドライバー
* [lvgl_esp32_gc9a01](https://github.com/minyiky/lvgl_esp32_gc9a01) - LVGLマイクロピートンと使用可能なGC901ドライバーを用いたディスプレイ用ドライバー
* [ST77xx-pure-MP](https://github.com/antirez/ST77xx-pure-MP) - ST77xxディスプレイ用の純粋マイクロピートンドライバー。メモリ消費が少ない。
* [upy-st7789](https://github.com/OneMadGypsy/upy-st7789) - マイクロピートンで書かれたシンプルなST7789ドライバー

#### LEDマトリクス <a id="led-matrix"></a>

* [micropython-ht1632c](https://github.com/vrialland/micropython-ht1632c) - HT1632C 32x16 ビンビカラーLEDマトリクス用ドライバー
* [micropython-matrix8x8](https://github.com/JanBednarik/micropython-matrix8x8) - Adafruit 8x8 LEDマトリクスディスプレイとHT16K33バックパックを用いたドライバー
* [micropython-max7219](https://github.com/mcauser/micropython-max7219) - MAX7219 8x8 LEDマトリクスモジュール用ドライバー
* [micropython-wemos-led-matrix-shield](https://github.com/mattytrentini/micropython-wemos-led-matrix) - Wemos D1 Mini マトリクスLEDシールド（TM1640チップを使用）用ドライバー
* [micropython-max7219](https://github.com/vrialland/micropython-max7219) - MAX7219 8x8 LEDマトリクス用マイクロピートンドライバー
* [MatrixDisplay](https://github.com/octaprog7/MatrixDisplay) - MAX7219 LEDマトリクス8x8ディスプレイとの作業用マイクロピートンモジュール
* [LED_panel_upy](https://github.com/CatMeowByte/LED_panel_upy) - パネルP10 32x16マトリクスディスプレイおよびその変種用のMicroPythonドライバーモジュール

#### LEDセグメント <a id="led-segment"></a>

* [LKM1638](https://github.com/arikb/LKM1638) - TM1638制御回路を採用したJY-LKM1638ディスプレイ用ドライバー
* [max7219_8digit](https://github.com/pdwerryhouse/max7219_8digit) - MAX7219 8桁7セグメントLEDモジュール用ドライバー
* [micropython-max7219](https://github.com/JulienBacquart/micropython-max7219) - MAX7219 8桁7セグメントLEDモジュール用ドライバー
* [micropython-my9221](https://github.com/mcauser/micropython-my9221) - MY9221 10セグメントLEDバー表示モジュール向けドライバー。
* [micropython-tm1637](https://github.com/mcauser/micropython-tm1637) - TM1637四桁7セグメントLEDモジュール用ドライバー
* [micropython-tm1638](https://github.com/mcauser/micropython-tm1638) - TM1638ダブルクォッド7セグメントLEDモジュールおよびスイッチ付き用ドライバー
* [micropython-tm1640](https://github.com/mcauser/micropython-tm1640) - TM1740 8x8LEDマトリクスモジュール用ドライバー
* [micropython-tm1640](https://gitlab.com/robhamerling/micropython-tm1640) - TM1640で制御される16桁7セグメント表示向けマイクロPythonライブラリ。
* [TM74HC595](https://github.com/Sakartu/TM74HC595) - シフトレジスタ制御の5ピン表示モジュール向けドライバー。
* [micropython-tm1638spi](https://gitlab.com/robhamerling/micropython-tm1638spi) - TM1638で制御される8桁7セグメント表示、8つの個別LED、8つのボタンを備えた人気ボード向けマイクロPythonライブラリ。
* [micropython-hpdl1414](https://github.com/rdagger/micropython-hpdl1414) - マイクロPython用HPDL-1414ディスプレイドライバー。
* [micropython-sevenseg](https://github.com/kritishmohapatra/micropython-sevenseg) - ESP32・ESP8266・RP2040に対応する、1桁7セグメントディスプレイ（共通陽極・共通陰極）用軽量MicroPythonライブラリ
* [max7219_8digit](https://github.com/GM-Script-Writer-62850/max7219_8digit) - MAX7219と8x7セグメントディスプレイを用いたMicroPythonドライバー

#### LEDs <a id="leds"></a>

* [micropython-morsecode](https://github.com/mampersat/micropython-morsecode) - モースコードメッセージでLEDを点滅させる
* [micropython-p9813](https://github.com/mcauser/micropython-p9813) - SeeedStudioのGrove連動型RGBLEDに使用されるP9813RGBLED用ドライバー
* [micropython-ws2812-7seg](https://github.com/HubertD/micropython-ws2812-7seg) - WS2812RGBLEDを用いた7セグメント表示。
* [micropython-ws2812](https://github.com/JanBednarik/micropython-ws2812) - WS2812RGBLED用ドライバー
* [Official APA102](https://docs.micropython.org/en/latest/esp8266/quickref.html#apa102-driver) - ESP8266 APA102/ドットスターRGBLEDドライバー
* [Official WS2811](https://docs.micropython.org/en/latest/esp8266/quickref.html#neopixel-driver) - ESP8266 WS2811/NeoPixelRGBLEDドライバー
* [tlc5940-micropython](https://github.com/oysols/tlc5940-micropython) - TLC5940 16チャンネルLEDドライバー向けドライバー。
* [ws2812-SPI](https://github.com/nickovs/ws2812-SPI) - 効率的なMicroPython WS2812（NeoPixel）ドライバー
* [micropython-ws2801](https://github.com/HeMan/micropython-ws2801) - WS2801RGBLEDのストランズと接続するためのMicroPythonライブラリ
* [tlc5947-rgb-micropython](https://gitlab.com/peterzuger/tlc5947-rgb-micropython) - TLC5947 24チャンネル12ビットPWMLEDドライバー向けドライバー。
* [micropython-ht16k33](https://github.com/hybotix/micropython-ht16k33) - HT16K33（LEDマトリクス、7セグメント数字、14セグメントアルファベット表示ドライバーIC）向けマイクロPythonドライバー。
* [micropython-rgbled](https://github.com/Warringer/micropython-rgbled) - このラッパーモジュールは、NeoPixel（WS2812）およびドットスター（APA102）RGBLEDストリップおよびマトリクスとの接続に必要な作業を減らすことを目的としています
* [micropython_fastled](https://github.com/kdschlosser/micropython_fastled) - FastLEDをMicroPythonに移植したコード
* [micropython-rgb-led-driver](https://gitlab.com/Athanaze/micropython-rgb-led-driver) - PWMでRGBLEDを制御するための小型ドライバー
* [micropython-dotstar](https://github.com/mattytrentini/micropython-dotstar) - Adafruit CircuitPython APA102/ドットスターライブラリのMicroPython版
* [micropython-aw210xx](https://github.com/eosti/micropython-aw210xx) - AwinicのAW210xxシリーズ8ビットLEDドライバー向けドライバー。
* [IS31FL3197](https://github.com/omeErik/IS31FL3197) - Arduino GIGA Display Shieldに搭載されているIS31FL3197チップ用のI2Cドライバー

#### OLED <a id="oled"></a>

* [Grove_OLED](https://github.com/dda/MicroPython/blob/master/Grove_OLED.py) - SeeedStudioのGrove OLEDディスプレイ1.12" v1.0で使用されるSSD1327向けドライバー。
* [micropython-oled](https://github.com/mcauser/deshipu-micropython-oled) - モノクロOLEDディスプレイ（PCD8544、SH1106、SSD1306、UC1701X）向けドライバーのコレクション
* [micropython-ssd1327](https://github.com/mcauser/micropython-ssd1327) - SSD1327 128x128 4ビットグレースケールOLEDディスプレイ向けドライバー。
* [micropython-ssd1351](https://github.com/rdagger/micropython-ssd1351) - SSD1351 OLEDディスプレイ向けドライバー
* [MicroPython_SSD1306](https://github.com/AnthonyKNorman/MicroPython_SSD1306) - ESP8266用のSSD1306 OLED 128x64ディスプレイドライバー
* [Official SSD1306](https://github.com/micropython/micropython-lib/tree/master/micropython/drivers/display/ssd1306) - SSD1306 128x64 OLEDディスプレイ向けドライバー
* [SH1106](https://github.com/robert-hh/SH1106) - SH1106 OLEDディスプレイ向けドライバー
* [micropython-ssd1309](https://github.com/rdagger/micropython-ssd1309) - MicroPython SSD1309モノクロOLEDディスプレイドライバー
* [sh1107-micropython](https://github.com/nemart69/sh1107-micropython) - MicroPython SH1107ベースのOLEDディスプレイ（64x128）向けドライバー
* [SH1107](https://github.com/peter-l5/SH1107) - SH1107 OLEDディスプレイ向けドライバー（128x128および128x64ピクセル）
* [micropython-ssd1322](https://github.com/rdagger/micropython-ssd1322) - MicroPython SSD1322グレースケールOLED向けディスプレイドライバー
* [micropython-ssd1306](https://github.com/rdagger/micropython-ssd1306) - MicroPython SPIおよびI2C用SSD1306モノクロOLEDディスプレイドライバー

#### プリンター <a id="printer"></a>

* [micropython-thermal-printer](https://github.com/ayoy/micropython-thermal-printer) - AdafruitのPython Thermal PrinterのマイクロPython版。

### I/O <a id="io"></a>

#### ADC <a id="adc"></a>

* [ads1x15](https://github.com/robert-hh/ads1x15) - ADS1015/ADS1115ADC、I2Cインターフェース向けドライバー
* [micropython-ads1015](https://github.com/mcauser/deshipu-micropython-ads1015) - ADS1015 12ビットおよびADS1115 16ビットADC、4チャンネル、プログラム可能なゲイン、I2Cインターフェース。
* [Micropython_ADS1115](https://github.com/AnthonyKNorman/Micropython_ADS1115) - ADS1115 16ビットADC、4チャンネル、プログラム可能なゲイン、I2Cインターフェース。
* [ADS7818](https://github.com/robert-hh/ADS7818) - ADS7818アナログ変換器を接続するPythonクラス
* [micropython-ads1219](https://github.com/miketeachman/micropython-ads1219) - テキサスインスティテュートのADS1219ADC向けMicroPythonモジュール
* [MicroPython-ADC_Cal](https://github.com/matthias-bs/MicroPython-ADC_Cal) - ESP32 ADCドライバー（efuseから参照電圧カリブレーション値を使用）
* [micropython-pcf8591](https://gitlab.com/cediddi/micropython-pcf8591) - PCF8591 ADC/DAC、I2Cインターフェース向けMicroPythonドライバー
* [MCP342x_LoPy](https://github.com/jajberni/MCP342x_LoPy) - MCP342x ADC向けMicroPythonドライバー
* [micropython-ads1220](https://github.com/rdagger/micropython-ads1220) - ADS1220 24ビットアナログ・ディジタル変換器向けMicroPythonライブラリ
* [PCF8591_micropython_library](https://github.com/xreef/PCF8591_micropython_library) - PCF8591 8ビットADC/DAC用のMicroPythonライブラリ
* [CS1237](https://github.com/robert-hh/CS1237) - CS1237 ADC向けMicroPythonドライバー
* [ads1115](https://github.com/octaprog7/ads1115) - テキサスインスティテュートのADS1115、マルチチャンネル、差分I2CADCを管理するMicroPythonモジュール
* [mcp3421](https://github.com/octaprog7/mcp3421) - MCP342X 18ビットアナログ変換器（I2Cインターフェース）用のMicroPythonモジュール
* [micropython-MCP3001](https://github.com/scruss/micropython-MCP3001) - MCP3001 1チャンネル10ビットADC（SPIインターフェース）用のMicroPythonドライバー
* [ADS1256](https://github.com/robert-hh/ADS1256) - ADS1256 24ビット低ノイズADC用ドライバー。一般的なMicroPythonバージョンおよびRP2040/RP2350 PIOを使用したバージョン。

#### DAC <a id="dac"></a>

* [micropython-mcp4725](https://github.com/wayoda/micropython-mcp4725) - MCP4725 I2C DAC用ドライバー
* [mcp4728](https://github.com/openfablab/mcp4728) - マイクロチップMCP4728 I2C 12ビット四重DAC用のヘルパーライブラリ。
* [mpyDAC](https://github.com/octaprog7/mpyDAC) - MCP4725 12ビットデジタルアナログ変換器（CAP）およびEEPROMメモリを制御するMicroPythonモジュール。

#### GPIO <a id="gpio"></a>

* [micropython-inputs](https://github.com/alanmitchell/micropython-inputs) - MicroPythonボード用のパルスカウント、デボンスされたデジタル入力、アナログ入力の移動平均を計算するためのクラス。
* [ubutton](https://gitlab.com/WiLED-Project/ubutton) - 押下ボタンの読み取りとデボンスを制御するMicroPythonライブラリ。短押しおよび長押しのコールバックを含む。
* [micropython-debounce-switch](https://github.com/selfhostedhome/micropython-debounce-switch) - スイッチのデボンスを制御するMicroPythonクラス。

#### I/Oエキスパンダー <a id="io-expander"></a>

* [micropython-mcp230xx](https://github.com/ShrimpingIt/micropython-mcp230xx) - MCP23017およびMCP23008 GPIO拡張器用ドライバー。
* [micropython-mcp230xx](https://codeberg.org/dsiggi/micropython-mcp230xx) - MCP23017およびMCP23008 GPIO拡張器用ドライバー。中断処理を追加したバージョン。
* [micropython-mcp23017](https://github.com/mcauser/micropython-mcp23017) - MCP23017 16ビットI/O拡張器用のMicroPythonドライバー。
* [micropython-pcf8574](https://github.com/mcauser/micropython-pcf8574) - PCF8574 8ビットI2C I/O拡張器および中断機能を備えたMicroPythonドライバー。
* [micropython-pcf8575](https://github.com/mcauser/micropython-pcf8575) - PCF8575 16ビットI2C I/O拡張器および中断機能を備えたMicroPythonドライバー。
* [ESP8266_MCP23S17](https://github.com/AnthonyKNorman/ESP8266_MCP23S17) - ESP8266でMCP23S17 16ビットI/O拡張器を使用するためのMicroPythonライブラリ。
* [pcf8574](https://github.com/octaprog7/pcf8574) - NXP製PCF8574(A) I2C 8ビットI/O拡張器を扱うためのMicroPythonモジュール。
* [mcp23017](https://github.com/octaprog7/mcp23017) - MCP23017 16ビットI/O拡張器（シリアルインターフェース）を制御するMicroPythonモジュール。
* [micropython-sx1509](https://github.com/rdagger/micropython-sx1509) - SX1509 I/O拡張器用のMicroPythonライブラリ。

#### ジョイスティック <a id="joystick"></a>

* [micropython-nunchuck](https://github.com/kfricke/micropython-nunchuck) - ニンチャクゲームコントローラー（I2Cインターフェース）用ドライバー。
* [esp32-microgamepad-ble](https://github.com/insighio/esp32-microgamepad-ble) - ESP32上でBLE（Nordic UART Service - NUS）を用いたダブルアナログジョイスティック。
* [micropython-joystick-2-unit](https://github.com/HowManyOliversAreThere/micropython-joystick-2-unit) - [M5Stack Joystick 2 Unit](https://docs.m5stack.com/en/unit/Unit-JoyStick2)用ドライバー
* [Micropython_Joystick](https://github.com/cnadler86/Micropython_Joystick) - ADCを介したジョイスティック用のシンプルで高速なライブラリ。

#### キーボード <a id="keyboard"></a>

* [micropython-keyboard](https://github.com/mcameron/micropython-keyboard) - MicroPython Pyboard上で動作する47キーキーボード
* [pico-rgbkeypad](https://github.com/martinohanlon/pico-rgbkeypad) - Raspberry Pi Pico用のPimoroni RGBキーパッドを制御するPythonクラス。
* [micropython-aiobutton](https://github.com/jacklinquan/micropython-aiobutton) - asyncioボタン用のMicroPythonモジュール。
* [MicroPython-SimpleKeypad](https://github.com/PerfecXX/MicroPython-SimpleKeypad) - キーパッドマトリクスと接続するためのMicroPythonライブラリ

#### マルチプレクサー <a id="multiplexer"></a>

* [micropython-tca9548a](https://github.com/mcauser/micropython-tca9548a) - TCA9548A I2Cマルチプレクサを用いたMicroPythonの例
* [tca9548a](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/tca9548a.py) - TCA9548A I2Cマルチプレクサ用のMicroPythonドライバー

#### ポテンショメーター <a id="potentiometers"></a>

* [micropython-ad840x](https://codeberg.org/dsiggi/micropython-ad840x) - ADシリーズデジタルポテンショメータAD8400、AD8402およびAD8-403をSPIベースで操作するMicroPythonライブラリ
* [mcp4131](https://github.com/scruss/mcp4131) - MicroChipのMCP4131 SPIデジタルポテンショメータを制御するMicroPythonモジュール
* [MicroPython_DS1841](https://github.com/jposada202020/MicroPython_DS1841) - DS1841ポテンショメータ用のMicroPythonドライバー
* [MicroPython_DS3502](https://github.com/jposada202020/MicroPython_DS3502) - DS3502ポテンショメータ用のMicroPythonドライバー

#### 電源管理 <a id="power-management"></a>

* [AXP202_PythonLibrary](https://github.com/lewisxhe/AXP202_PythonLibrary) - MicroPython AXP202ライブラリ
* [micropython_hourly_sleeper_library](https://github.com/costastf/micropython_hourly_sleeper_library) - ESP8266が時刻ごとに一定時間睡眠できるようにするMicroPythonライブラリ

#### PWM <a id="pwm"></a>

* [upwmcontroller](https://gitlab.com/WiLED-Project/upwmcontroller) - asyncioループ内でPWM出力を制御するMicroPythonライブラリ（フェードやブリンク機能を含む）

#### リレー <a id="relay"></a>

* [micropython-xl9535-kxv5-relay](https://github.com/mcauser/micropython-xl9535-kxv5-relay) - jxl XL9535-KxV5 I2Cリレーモジュール用のMicroPythonライブラリ

#### ロータリーエンコーダー <a id="rotary-encoder"></a>

* [micropython-rotary](https://github.com/miketeachman/micropython-rotary) - 回転エンコーダーを読み取るMicroPythonモジュール
* [uencoder](https://gitlab.com/WiLED-Project/uencoder) - 回転エンコーダーからの読み取りを可能にするMicroPythonライブラリ
* [encodermenu](https://github.com/sgall17a/encodermenu) - 回転エンコーダーと基本表示を用いたMicroPythonのシンプルGUIメニュー
* [encoderLib](https://github.com/BramRausch/encoderLib) - 回転エンコーダーを扱うMicroPythonライブラリ
* [rotary-encoder](https://github.com/gurgleapps/rotary-encoder) - KY-040回転式エンコーダーを制御するMicroPythonコード
* [micropython-encoder-knob](https://github.com/infinite-tree/micropython-encoder-knob) - 非常にシンプルで軽量なエンコーダーのボタンサポート付きライブラリ
* [encoders](https://github.com/peterhinch/micropython-samples/blob/master/encoders/ENCODERS.md) - エンコーダー技術に関する問題点を説明する短いドキュメント
* [asynchronous encoder driver](https://github.com/peterhinch/micropython-async/blob/master/v3/primitives/encoder.py) - エンコーダーをuasyncioコードに接続する
* [micropython-8encoder](https://github.com/HowManyOliversAreThere/micropython-8encoder) - I2C 用ドライバー [M5Stack 8-Encoder Unit](https://shop.m5stack.com/products/8-encoder-unit-stm32f030)
* [micropython-quiic-twist](https://github.com/rdagger/micropython-quiic-twist) - Quiic Twist RGB回転エンコーダー用のMicroPythonドライバー
* [AS5600](https://github.com/sgall17a/AS5600) - この磁気センサAS5600を読み取るためのAS5600 MicroPythonライブラリ
* [AS5600](https://github.com/octaprog7/AS5600) - 1回転磁気エンコーダーAS5600を制御するMicroPythonモジュール

#### シフトレジスター <a id="shift-registers"></a>

* [micropython-74hc595](https://github.com/mcauser/micropython-74hc595) - 74HC595 8ビットシフトレジスタ用のMicroPythonドライバー
* [MicroPython-SN74HCS264](https://gitlab.com/olivierlenoir/MicroPython-SN74HCS264) - SN74HCS264 8ビット並列出力シリアルシフトレジスタ（スミッティトリガー入力と反転出力）向けMicroPythonドライバー

#### 波形生成器 <a id="waveform-generator"></a>

* [Micropython-AD9833](https://github.com/KipCrossing/Micropython-AD9833) - AD9833、SPIインターフェース向けPyboardドライバー
* [Clock_Generators](https://github.com/Wei1234c/Clock_Generators) - クロック生成器（現在はSi5351）ツールボックス
* [Signal_Generators](https://github.com/Wei1234c/Signal_Generators) - 信号生成器（AD9833、AD9834、AD9850、ADF4351）ツールボックス
* [pico-wave-vibration-generator](https://github.com/gurgleapps/pico-wave-vibration-generator) - ラズベリーパイピコ向けMicroPythonベースの周波数生成器。ソレノイドやスピーカーへの振動を生成し、家庭で波の実験や探索を行うことを可能にする。
* [micropython-m5stack-dds](https://github.com/mattytrentini/micropython-m5stack-dds) - M5Stack DDS周波数生成器向けMicroPythonドライバー
* [AD9833-MicroPython-Module](https://github.com/owainm713/AD9833-MicroPython-Module) - AD9833を用いたプログラム可能な波形生成器向けMicroPythonモジュール

### 数学 <a id="mathematics"></a>

* [uMath](https://github.com/albaEDA/uMath) - マイクロコントローラ向けの計算代数
* [micropython-ulab](https://github.com/v923z/micropython-ulab) - MicroPython向けNumPyに類する高速ベクトルモジュール
* [micropython-fourier](https://github.com/peterhinch/micropython-fourier) - MicroPythonのインラインARMアセンブラーによる高速フーリエ変換
* [Filters](https://github.com/peterhinch/micropython-filters) - ARM ThumbアセンブラーによるFIRフィルタ。オンラインツールを使用すれば、必要な周波数応答のグラフからフィルタ実装に変換できる。
* [ulinalg](https://github.com/jalawson/ulinalg) - MicroPython（Python 3）用に特化した小さなマトリクス処理モジュール（線形代数演算を含む）
* [micropython-mtx](https://gitlab.com/nickoala/micropython-mtx) - MicroPythonにおける高速行列乗算と線形方程式解決器
* [micropython-vec](https://gitlab.com/nickoala/micropython-vec) - MicroPythonにおけるベクトル演算
* [MicroPython_Statistics](https://github.com/rcolistete/MicroPython_Statistics) - MicroPython向けの統計モジュール
* [MicroPython-Matrix](https://gitlab.com/olivierlenoir/MicroPython-Matrix) - MicroPythonにおける基本的な行列演算
* [uumpy](https://github.com/nickovs/uumpy) - MicroPython向けNumPyのサブセット
* [upyuncertainties](https://github.com/rcolistete/upyuncertainties) - MicroPython向けの不確実性計算
* [umatrix](https://github.com/iyassou/umatrix) - MicroPython言語向けの行列ライブラリ
* [micropython-fractions](https://github.com/mattytrentini/micropython-fractions) - CPython標準のFractionsライブラリのMicroPython版
* [Sun and Moon](https://github.com/peterhinch/micropython-samples/blob/master/astronomy/README.md) - 太陽と月の昇る・沈む時間、月の位相を決定
* [micropython-npyfile](https://github.com/jonnor/micropython-npyfile/) - マイクロピートンにNumpy .npyファイルのサポート、読み込み／書き込み／ストリーミングをサポート。
* [Micropython Perlin](https://github.com/sjaak31367/micropython_perlin) - パーソンノイズ生成モジュール。

### モーション <a id="motion"></a>

* [MicroPython Motor Kit](https://github.com/cnadler86/MicroPython_Motor) - 一般用途のモーター制御ライブラリ

#### DCモーター <a id="dc-motor"></a>

* [MicroPython-L298](https://gitlab.com/olivierlenoir/MicroPython-L298) - マイクロピートンでL298ダブルHブリッジを駆動。
* [pyl298](https://github.com/marcio-pessoa/pyl298) - L298ダブルフルブリッジモーターコントローラー用ドライバー。

#### サーボ <a id="servo"></a>

* [micropython-pca9685](https://github.com/mcauser/deshipu-micropython-pca9685) - 16チャンネル12ビットPWM/サーボドライバー
* [micropython-servo](https://github.com/redoxcode/micropython-servo) - RCサーボを直接PWM出力で整理された方法で制御するためのライブラリ。
* [MicroPython_PCA9685](https://github.com/jposada202020/MicroPython_PCA9685) - マイクロピートン用PCA9685 PWM制御ICドライバー（サーボ、LED、モーターの制御に一般的に使用）。
* [MicroPython_MOTOR](https://github.com/jposada202020/MicroPython_MOTOR) - PWMベースのモーターを制御するためのマイクロピートン補助ライブラリ。
* [pca9685](https://github.com/octaprog7/pca9685) - 16チャンネルSHIM制御器（PCA9685）を管理するMicroPythonモジュール

#### ステッピングモーター <a id="stepper"></a>

* [AccelStepper-MicroPython](https://github.com/pedromneto97/AccelStepper-MicroPython) - マイクロピートン用AccelStepperライブラリ（ESP32用）。
* [microPython_AMIS-30543](https://github.com/capella-ben/microPython_AMIS-30543) - AMIS-30543ドライバーを使用したステッパードライバー制御用のMicroPythonライブラリ
* [microPython_TMC5160](https://github.com/capella-ben/microPython_TMC5160) - トリニマムTMC5160モーションコントローラー用マイクロピートンライブラリ。
* [micropython-drv8825](https://gitlab.com/robhamerling/micropython-drv8825) - DRV8825コントローラーボードを介してステッパーモーターを制御するためのマイクロピートンドライバーと例。
* [micropython-multiaxis](https://gitlab.com/olivierlenoir/micropython-multiaxis) - マイクロピートンESP32とDRV8825を用いた多軸制御。
* [micropython-rp2-smartStepper](https://github.com/bikeNomad/micropython-rp2-smartStepper) - RP2040/RP2350でPIOとDMAを使用してステッパーモーターを制御するライブラリ。
* [micropython-stepper-motor](https://github.com/larsks/micropython-stepper-motor) - ULN2003ドライバーに接続された28BYJ-48モーターを駆動。
* [micropython-stepper](https://github.com/redoxcode/micropython-stepper) - 一般的なステッパードライバーを整理された方法で制御するためのライブラリ。
* [micropython-upybbot](https://github.com/jeffmer/micropython-upybbot) - バイポーラステッパーモーター用A4988ドライバー。
* [pystepper](https://github.com/marcio-pessoa/pystepper) - マイクロピートンステッパーモーターシーケンス制御。
* [ticlib](https://github.com/jphalip/ticlib) - ポローユーTICステッパーモーター制御器用ドライバー。
* [uln2003](https://github.com/IDWizard/uln2003) - 5V 28BYJ-48ステッパーモーター用ドライバー。
* [uPySteppers](https://github.com/lemariva/uPySteppers) - WiFiに接続されたESP32を用いたDIY回転プラットフォーム。

### センサー <a id="sensors"></a>

#### デジタル加速度計 <a id="accelerometer-digital"></a>

* [ADXL345-with-Pyboard](https://github.com/AbhinayBandaru/ADXL345-with-Pyboard) - ADXL345 16g 3軸加速度計用ドライバー
* [adxl345_micropython](https://github.com/fanday/adxl345_micropython) - ADXL345 16g 3軸加速度計用ドライバー
* [MicroPython-LIS3DH](https://github.com/tinypico/tinypico-micropython/tree/master/lis3dh%20library) - LIS3DH 3軸加速度計用I2Cドライバー
* [micropython-lis2hh12](https://github.com/tuupola/micropython-lis2hh12) - LIS2HH12 3軸加速度計用I2Cドライバー
* [MMA7660](https://github.com/Bucknalla/MicroPython-3-Axis-Accelerometer/blob/master/MMA7660.py) - MMA7660 1.5g 3軸加速度計用ドライバー
* [ADXL345_spi_micropython](https://github.com/AlekseyFedorovich/ADXL345_spi_micropython) - マイクロPythonでフラッシュされたMCUと通信するためのAnalog Devices ADXL345加速度計とのSPIプロトコルによるインタラクション用ライブラリ
* [MicroPython_ADXL343](https://github.com/jposada202020/MicroPython_ADXL343) - Analog Devices ADXL343加速度計用マイクロPythonドライバー
* [MicroPython_BMA220](https://github.com/jposada202020/MicroPython_BMA220) - Bosch BMA220加速度計用マイクロPythonドライバー
* [MicroPython_BMA400](https://github.com/jposada202020/MicroPython_BMA400) - Bosch BMA400加速度計用マイクロPythonドライバー
* [bma423-pure-mp](https://github.com/antirez/bma423-pure-mp) - ボッシュ423加速度計用MicroPythonドライバー（FIFOサポートを含む）
* [MicroPython_LIS3DH](https://github.com/jposada202020/MicroPython_LIS3DH) - LIS3DH 3軸加速度計用マイクロPythonドライバー
* [MicroPython_KX132](https://github.com/jposada202020/MicroPython_KX132) - Kionix KX132加速度計用マイクロPythonドライバー
* [MicroPython_H3LIS200DL](https://github.com/jposada202020/MicroPython_H3LIS200DL) - ST H3LIS200DL加速度計用マイクロPythonドライバー
* [MicroPython_QMC5883L](https://github.com/jposada202020/MicroPython_QMC5883L) - QMC5883L加速度計用マイクロPythonドライバー
* [Micropython_MC3479](https://github.com/jposada202020/Micropython_MC3479) - MC3479加速度計用マイクロPythonドライバー
* [MicroPython_MMA8451](https://github.com/jposada202020/MicroPython_MMA8451) - MMA8451 3軸加速度計用マイクロPythonモジュール
* [MicroPython_MMA8452Q](https://github.com/jposada202020/MicroPython_MMA8452Q) - NXP MMA8452Q加速度計用マイクロPythonドライバー
* [msa301-micropython-driver](https://github.com/wojciech-szmyt/msa301-micropython-driver) - Raspberry PicoでテストされたMSA301 3軸加速度計用自作マイクロPythonドライバー

#### 空気品質 <a id="air-quality"></a>

* [CCS811](https://github.com/Ledbelly2142/CCS811) - CCS811空気品質センサー
* [upython-aq-monitor](https://github.com/ayoy/upython-aq-monitor) - PMS5003センサーとWiPyを用いた空気品質モニタリング
* [micropython-pms7003](https://github.com/pkucmus/micropython-pms7003) - PMS7003空気品質センサー用マイクロPythonドライバー
* [pms5003_micropython](https://github.com/kevinkk525/pms5003_micropython) - PMS5003空気品質センサー用マイクロPythonドライバー
* [micropython-pms5003-minimal](https://github.com/miketeachman/micropython-pms5003-minimal) - P空気品質センサー用マイクロPythonドライバー
* [polly](https://github.com/g-sam/polly) - SDS011 ポリューションセンサー + Wemos D1 mini pro + MicroPython
* [micropython-SNGCJA5](https://github.com/aleppax/micropython-SNGCJA5) - パナソニック SN-GCJA5 パーティクルマター（PM）センサー用 MicroPython ドライバー

#### 気圧・水圧 <a id="barometer-air-and-water-pressure"></a>

* [MicroPython-BMPxxx](https://github.com/bradcar/MicroPython_BMPxxx) - ボッシュ BMP585、BMP581、BMP390、BMP280 温度/圧力センサー用ドライバー
* [mp-bmp3xx-full](https://github.com/jornamon/mp-bmp3xx-full) - ボッシュ BMP3xx シリーズの気圧センサー用 MicroPython ドライバー。FIFO 対応を含む。⏩
* [micropython-bme280](https://github.com/kevbu/micropython-bme280) - ボッシュ BME280 温度/圧力/湿度センサー用ドライバー
* [micropython-bmp180](https://github.com/micropython-IMU/micropython-bmp180) - ボッシュ BMP180 温度、圧力および高度センサー用ドライバー
* [mpy_bme280_esp8266](https://github.com/catdog2/mpy_bme280_esp8266) - ボッシュ BME2-80 温度/圧力/湿度センサー
* [BME280](https://github.com/robert-hh/BME280) - BME280 センサー用 MicroPython ドライバー（ターゲットプラットフォーム：Pycom デバイス）
* [ms5803-micropython](https://github.com/minyiky/ms5803-micropython) - MS5803 空気・水圧および温度センサー用ドライバーの MicroPython 実装
* [MPL3115A2_MicroPython](https://github.com/PinsonJonas/MPL3115A2_MicroPython) - MPL3115A2 高度計用 MicroPython ライブラリ
* [D6F-PH](https://github.com/ekspla/D6F-PH) - 差圧センサー D6F-PH（OMRON）用 MicroPython モジュール
* [micropython-bmp280](https://github.com/dafvid/micropython-bmp280) - BMP280 センサー用モジュール
* [micropython_bme280_i2c](https://github.com/triplepoint/micropython_bme280_i2c) - ボッシュ BME280 温度、湿度、圧力センサーとの通信用 MicroPython モジュール
* [MicroPython-BME280](https://github.com/neliogodoi/MicroPython-BME280) - 温度、圧力、湿度のデジタルセンサー用ドライバー
* [micropython-bmp180](https://gitlab.com/flowolf/micropython-bmp180) - BMP180 圧力センサー用クラスを提供する MicroPython モジュール
* [bmp581](https://github.com/octaprog7/bmp581) - ボッシュ センストec の BMP581 圧力および周囲温度センサー用 MicroPython モジュール
* [BMP390](https://github.com/octaprog7/BMP390) - ボッシュ BMP390 圧力および温度センサー用 MicroPython モジュール
* [BMP180](https://github.com/octaprog7/BMP180) - ボッシュ BMP180 圧力および温度センサー用 MicroPython モジュール
* [MicroPython_DPS310](https://github.com/jposada202020/MicroPython_DPS310) - DPS310 センサー用 MicroPython ドライバー。（アーカイブ）
* [MicroPython_ICP10111](https://github.com/jposada202020/MicroPython_ICP10111) - TDK ICP-10111気圧・温度センサー用MicroPythonドライバー（アーカイブ済）
* [MicroPython_BMP581](https://github.com/jposada202020/MicroPython_BMP581) - ボッシュ BMP581 圧力および温度センサー用 MicroPython ドライバー。（アーカイブ）
* [MicroPython_MMR902](https://github.com/jposada202020/MicroPython_MMR902) - ミツミ MMR902 マイクロ圧力センサ用 MicroPython ドライバー。（アーカイブ）
* [MicroPython_MPL3115A2](https://github.com/jposada202020/MicroPython_MPL3115A2) - NXP MPL3115A2 圧力および温度センサ用 MicroPython ドライバー。（アーカイブ）
* [MicroPython_MS5611](https://github.com/jposada202020/MicroPython_MS5611) - TE MS5611 圧力および温度センサ用 MicroPython ドライバー。（アーカイブ）

#### バッテリー <a id="battery"></a>

* [Micropython-LC709203F](https://github.com/scopelemanuele/Micropython-LC709203F) - LC709293F燃料計測用シンプルなMicroPythonライブラリ

#### 生体認証 <a id="biometric"></a>

* [micropython-fingerprint](https://github.com/chrisb2/micropython-fingerprint) - Grow および ZhianTec の指紋センサを読み取るための MicroPython ライブラリ。
* [MAX30102-MicroPython-driver](https://github.com/n-elia/MAX30102-MicroPython-driver) - MAX30102 ドライバーを MicroPython に移植したもの。MAX30105 にも適用可能。
* [max30102](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/max30102.py) - MAX30102 用の MicroPython ドライバー。心拍検出および BPM 測定をサポート。

#### カメラ <a id="camera"></a>

* [micropython-camera-API](https://github.com/cnadler86/micropython-camera-API) - MicroPython でさまざまなポートにカメラをサポートするプロジェクト。ESP32 ポートおよび Omnivision カメラ（OV2640 および OV5640）から始める。
* [micropython-ov2640](https://github.com/namato/micropython-ov2640) - OV2640 カメラ用の MicroPython クラス。
* [Nikon-Trigger-for-MicroPython](https://github.com/Thekegman/Nikon-Trigger-for-MicroPython) - NikonカメラへのIRLEDによるリモートトリガー（Pyboard v1.1用）
* [micropython-camera-driver](https://github.com/lemariva/micropython-camera-driver) - ESP32 上の MicroPython で OV2640 カメラドライバー。
* [esp32-cam-micropython](https://github.com/shariltumin/esp32-cam-micropython) - MicroPython ESP32-CAM。
* [uPyCam](https://github.com/lemariva/uPyCam) - MicroPython で動作する ESP32-CAM で写真を撮る。
* [OV2640_uPy](https://github.com/FunPythonEC/OV2640_uPy) - MicroPython 用の OV2640 カメラライブラリ。
* [MQTT-Cam](https://github.com/jono-allen/MQTT-Cam) - ESP32-CAM MicroPython MQTT AWS S3 アップローダー。
* [IoTy huskylib](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/huskylib.py) - DFRobot Husky Lens 用の MicroPython ドライバー。顔認識、物体追跡、物体認識、ライン追跡、色認識、QRコード認識を備えたAIカメラ／ビジョンセンサ。
* [IoTy mv](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/mv.py) - シンプルなマシンビジョンライブラリ。blobおよび円の検出を提供。

#### 色 <a id="colour"></a>

* [micropython-tcs34725](https://gitlab.com/robhamerling/micropython-tcs34725) - TCS34725 および TCS34727 色センサ用のドライバークラス。
* [micropython-as7341](https://gitlab.com/robhamerling/micropython-as7341) - AS7341 用の MicroPython ライブラリ。
* [MicroPython_ISL29125](https://github.com/jposada202020/MicroPython_ISL29125) - Intersil ISL29125 色センサ用の MicroPython ドライバー。
* [TCS3200-MicroPython](https://github.com/uraich/TCS3200-MicroPython) - TCS3200 色センサ用の MicroPython ドライバーおよびテストプログラム。
* [MicroPython_TCS3430](https://github.com/jposada202020/MicroPython_TCS3430) - AMS TCS3430 色およびALSセンサ用の MicroPython ドライバー。
* [micropython-gy33](https://github.com/QuirkyCort/micropython-gy33) - GY-33モジュール（TCS3472色センサ）用のUARTおよびI2Cドライバー
* [veml6040](https://github.com/octaprog7/veml6040) - ヴィシャイのRGBW色センサVEML6040を管理するマイクロPythonモジュール

#### コンパス <a id="compass"></a>

* [micropython-esp8266-hmc5883l](https://github.com/gvalkov/micropython-esp8266-hmc5883l) - ESP8266に搭載された3軸デジタルコンパス
* [QMC5883](https://github.com/robert-hh/QMC5883) - QMC5883 3軸デジタルコンパスIC用のPythonクラス
* [microPython_AS5600L](https://github.com/capella-ben/microPython_AS5600L) - AS5600L磁気回転位置センサ用のマイクロPythonドライバー
* [QMC5883](https://github.com/octaprog7/QMC5883) - QMC5883L地磁気センサの制御用マイクロPythonモジュール

#### 電流 <a id="current"></a>

* [micropythonINA219](https://github.com/kabel42/micropythonINA219) - INA219電流センサ用ドライバー
* [pyb_ina219](https://github.com/chrisb2/pyb_ina219) - INA219電流センサ用ドライバー
* [INA219](https://github.com/robert-hh/INA219) - INA219マイクロPythonドライバー
* [TI_INA226_micropython](https://github.com/elschopi/TI_INA226_micropython) - テキサスインスティテュートのINA226電力測定IC用マイクロPythonドライバー
* [micropython-current-monitor](https://gitlab.com/n.rj.powers/micropython-current-monitor) - INA219とSSD1306OLEDを用いた電流監視器
* [INA_TI](https://github.com/octaprog7/INA_TI) - INA219、INA226をI2Cインターフェースで制御する2方向電流／電力監視モジュール用マイクロPythonモジュール

#### 赤外線距離 <a id="distance-ir"></a>

* [micropython-gp2y0e03](https://github.com/mcauser/deshipu-micropython-gp2y0e03) - シャープGP2Y0E03を用いたIR-LED距離測定センサ
* [micropython-vl6180](https://github.com/mcauser/deshipu-micropython-vl6180) - 時間飛行センサ、周囲光センサおよびIR発信器
* [GP2Y0A21YK](https://github.com/basanovase/GP2Y0A21YK) - GP2Y0A21YKマイクロPythonライブラリ

#### レーザー距離 <a id="distance-laser"></a>

* [micropython-vl53l0x](https://github.com/mcauser/deshipu-micropython-vl53l0x) - 時間飛行レーザー距離測定センサ
* [Qwiic_TOF_Module_RFD77402](https://github.com/ZIOCC/Qwiic_TOF_Module_RFD77402) - Qwiic TOFモジュール（RFD77402）時間飛行距離測定モジュール
* [VL53L0X](https://github.com/uceeatz/VL53L0X) - LiDARセンサVL53L0X用マイクロPythonライブラリ
* [vl53l1x_pico](https://github.com/drakxtwo/vl53l1x_pico) - VL53L1X ToFセンサ用のMicroPythonドライバー
* [tf-luna-micropython](https://github.com/davmoz/tf-luna-micropython) - TF-Luna LiDARモジュール用シンプルなマイクロPythonI2Cライブラリ
* [vl53l5cx](https://github.com/mp-extras/vl53l5cx) - [VL53L5CX](https://www.st.com/en/imaging-and-photonics-solutions/vl53l5cx.html)（4x4/8x8 ToFセンサ配列）用のMicroPythonおよびCircuitPythonパッケージ
* [VL6180X](https://github.com/Ledbelly2142/VL6180X) - ESP32に搭載されたVL6180Xセンサ用マイクロPythonドライバー
* [LidarLight_v3HP_micropython](https://github.com/Dnapert/LidarLight_v3HP_micropython) - ガーミンLidar Lite v3HP用マイクロPythonライブラリ
* [vl53l1x](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/vl53l1x.py) - VL53L1X ToFセンサ用のMicroPythonドライバー
* [vl53l0x-nb](https://github.com/antirez/vl53l0x-nb) - vl53l0x ToFセンサ用のMicroPythonドライバーのフォークで、非ブロッキングモードを追加
* [IoTy lds02rr](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/lds02rr.py) - LDS02RR 360度LiDAR用ドライバー
* [IoTy coind4](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/coind4.py) - COIN-D4 360度LiDAR用ドライバー
* [IoTy delta2d](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/delta2d.py) - Delta-2D 360度LiDAR用ドライバー

#### 超音波距離 <a id="distance-ultrasonic"></a>

* [micropython-hcsr04](https://github.com/rsc1975/micropython-hcsr04) - HC-SR04超音波距離センサ用ドライバー
* [micropython-us100](https://github.com/kfricke/micropython-us100) - US-100超音波距離センサ用のMicroPythonドライバー
* [micropython-i2c-ultrasonic](https://github.com/HowManyOliversAreThere/micropython-i2c-ultrasonic) - RCWL-9620を基盤としたM5 I2C超音波距離ユニット用のMicroPythonドライバー
* [micropython-grove-ultrasonic-ranger](https://github.com/mores/TheMissingLink/tree/main/Seeed_MicroPython_UltrasonicRanger) - SeeedStudioのGrove超音波リーチャー用ドライバー

#### 粉じん <a id="dust"></a>

* [pyGP2Y](https://github.com/amigcamel/pyGP2Y) - Sharp GP2Y1014AU0Fのホコリセンサ用のMicroPythonライブラリ

#### エネルギー <a id="energy"></a>

* [ATM90E26_Micropython](https://github.com/whatnick/ATM90E26_Micropython) - ATM90E26電力計測デバイス用ドライバー
* [MCP39F521](https://github.com/warpme/MCP39F521) - MCP39F521電力モニタリングを読むためのESP8266スクリプト
* [micropython-p1meter](https://github.com/Josverl/micropython-p1meter) - ESP32センサでp1電力計を読み取り、MQTTおよびHome Assistantに公開するMicroPythonによるプログラム
* [esp32-solar2](https://github.com/octopusengine/esp32-solar2) - シンプルな太陽電池制御器 - MicroPythonプロジェクト
* [cs5490_micropython](https://github.com/whatnick/cs5490_micropython) - CS5490電力モニタリングIC用のMicroPythonドライバー

#### ガス <a id="gaseous"></a>

* [micropython-MQ](https://github.com/kartun83/micropython-MQ) - MQシリーズガスセンサ用ドライバー
* [MQ135](https://github.com/rubfi/MQ135) - MQ135ガスセンサ用ドライバー
* [CCS811](https://github.com/Notthemarsian/CCS811) - ESP8266ボード用のCCS811の基本的なMicroPythonドライバー
* [micropython-scd30](https://github.com/agners/micropython-scd30) - Sensirion SCD30 CO2センサモジュール用のMicroPython I2Cドライバー
* [MicroPython_SCD4X](https://github.com/peter-l5/MicroPython_SCD4X) - Sensirion SCD40およびSCD41 CO2センサ用のMicroPython I2Cドライバー
* [micropython-sgp40](https://github.com/agners/micropython-sgp40) - SGP40 VOCセンサモジュール用のMicroPython I2Cドライバー
* [MICS6814-Micropython-driver](https://gitlab.com/DanNduati/MICS6814-Micropython-driver) - Pimoroni MICS6814ブレイクアウトボード用のESP32 MicroPythonドライバー
* [MicroPython_AGS02MA](https://github.com/jposada202020/MicroPython_AGS02MA) - AGS02MA TVOCセンサ用のMicroPythonドライバー
* [SCD4x](https://github.com/octaprog7/SCD4x) - Sensirion SCD4x（SCD40、SCD41）低消費電力CO2、温度および湿度電気音響センサとの対話用のMicroPythonモジュール
* [ens160](https://github.com/octaprog7/ens160) - ENS160 デジタル金属酸化物多気体センサ用マイクロピートンモジュール

#### 人感 <a id="human-presence"></a>

* [ld2410](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/ld2410.py) - 24GHzの人間存在検知モジュール。移動・静止対象を検知し、距離を概算提供

#### 湿度 <a id="humidity"></a>

* [MicroPython_HTS221](https://github.com/jposada202020/MicroPython_HTS221) - HTS221湿度センサ用のMicroPythonドライバー

#### 光 <a id="light"></a>

* [MicroPython-SI1145](https://github.com/neliogodoi/MicroPython-SI1145) - SI1145 UV指数、赤外線、可視光および近接センサ
* [micropython-tsl2561](https://github.com/kfricke/micropython-tsl2561) - TAOS / amsのTSL2561照明センサ用ドライバー
* [mpy_bh1750fvi_esp8266](https://github.com/catdog2/mpy_bh1750fvi_esp8266) - ESP8266用BH1750FVIセンサドライバー
* [bh1750](https://github.com/PinkInk/upylib/tree/master/bh1750) - BH1750 I2Cデジタル照明センサドライバー
* [micropython-max44009](https://github.com/mcauser/micropython-max44009) - MAX44009環境光センサ用マイクロピートンドライバー
* [veml7700](https://github.com/palouf34/veml7700) - VEML7700照明センサ用マイクロピートンライブラリ
* [MicroPython_MAX44009_driver](https://github.com/rcolistete/MicroPython_MAX44009_driver) - MAX44009照明センサ用マイクロピートンドライバー
* [MicroPython-VEML6075](https://github.com/neliogodoi/MicroPython-VEML6075) - VEML6075 UV照明センサ用ドライバーベース
* [BH1750](https://github.com/octaprog7/BH1750) - BH1750環境光センサ（ALS）用マイクロピートンモジュール
* [veml7700](https://github.com/octaprog7/veml7700) - VishayのVEML7700環境光センサ（ALS）用マイクロピートンモジュール
* [opt3001](https://github.com/octaprog7/opt3001) - テキサスインスティテュートのOPT3001外部照明センサ用マイクロピートンモジュール
* [ltr390uv](https://github.com/octaprog7/ltr390uv) - LTR390UV可視および紫外線範囲の環境光センサ用マイクロピートンモジュール
* [bh1750.py](https://github.com/adyavanapalli/bh1750.py) - BH1750環境光センサドライバー

#### ロードセル <a id="load-cell"></a>

* [micropython-hx711](https://github.com/SergeyPiskunov/micropython-hx711) - HX711 24ビットアナログ・デジタル変換器用のMicroPythonドライバー
* [hx711_mpy-driver](https://github.com/HowManyOliversAreThere/hx711_mpy-driver) - HX711ウェイトセンサ用マイクロピートンドライバー
* [hx710](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/hx710.py) - HX710用マイクロピートンドライバー
* [hx711](https://github.com/robert-hh/hx711) - HX711ロードセルインターフェース用マイクロピートンドライバー
* [hx710](https://github.com/robert-hh/hx710) - HX710ロードセルインターフェース用マイクロピートンドライバー

#### 磁力計 <a id="magnetometer"></a>

* [MicroPython_LIS2MDL](https://github.com/jposada202020/MicroPython_LIS2MDL) - ST LIS2MDL磁気センサ用マイクロピートンドライバー
* [MicroPython_LIS3MDL](https://github.com/jposada202020/MicroPython_LIS3MDL) - ST LIS3MDL磁気センサ用マイクロピートンドライバー
* [MicroPython_MLX90393](https://github.com/jposada202020/MicroPython_MLX90393) - MLX90393磁気センサ用MicroPythonドライバー
* [MicroPython_MMC5603](https://github.com/jposada202020/MicroPython_MMC5603) - Memsic MMC5603磁気センサ用MicroPythonドライバー
* [MicroPython_BMM150](https://github.com/jposada202020/MicroPython_BMM150) - Bosch BMM150磁気センサ用MicroPythonドライバー
* [MicroPython_MMC5983](https://github.com/jposada202020/MicroPython_MMC5983) - Memsic MMC5983磁気センサ用MicroPythonライブラリ
* [MMC5603](https://github.com/octaprog7/MMC5603) - MMC5603地磁気センサ用MicroPythonモジュール
* [HSCDTD008A](https://github.com/octaprog7/HSCDTD008A) - HSCDTD008A地磁気センサ用MicroPythonモジュール
* [RM3100](https://github.com/octaprog7/RM3100) - RM3100地磁気センサ用MicroPythonモジュール

#### 慣性モーション <a id="motion-inertial"></a>

* [flight_controller](https://github.com/wagnerc4/flight_controller) - MicroPython用飛行制御装置
* [micropython-bmx055](https://github.com/micropython-IMU/micropython-bmx055) - Bosch BMX055IMUセンサ用ドライバー
* [micropython-bno055](https://github.com/micropython-IMU/micropython-bno055) - Bosch Sensortec BNO055 9DOF IMUセンサ、I2Cインターフェース用ドライバー
* [micropython-bno055](https://github.com/deshipu/micropython-bno055) - BNO08x用MicroPythonライブラリ
* [micropython-bno08x-rvc](https://github.com/rdagger/micropython-bno08x-rvc) - センサ融合は運動追跡デバイスの出力から方位角、ピッチ、ロールを計算する
* [micropython-fusion](https://github.com/micropython-IMU/micropython-fusion) - LSM9DS0 G力線加速度、ガウス磁気、DPS角速度センサ
* [micropython-lsm9ds0](https://github.com/micropython-IMU/micropython-lsm9ds0) - ESP8266上でMicroPythonを使用してMPU6050からMQTTサーバーへデータをストリーム
* [micropython-mpu6050](https://github.com/wybiral/micropython-mpu6050) - MPU-6050加速度計およびジャイロスコープモジュールからの読み取り用のMicroPythonライブラリ
* [micropython-mpu6050-mqtt-streamer](https://github.com/mozanunal/micropython-mpu6050-mqtt-streamer) - InvenSense MPU9250インертial測定装置用ドライバー
* [micropython-mpu6886](https://github.com/tuupola/micropython-mpu6886) - MPU6886 6軸運動追跡デバイス用のMicroPython I2Cドライバー
* [micropython-mpu9250](https://github.com/tuupola/micropython-mpu9250) - MPU9250 9軸運動追跡デバイス用のI2Cドライバー
* [micropython-mpu9250](https://gitlab.com/nnayo/micropython-mpu9250) - MPU-9250（MPU-6500 + AK8963）用のMicroPython I2Cドライバー
* [micropython-mpu9x50](https://github.com/micropython-IMU/micropython-mpu9x50) - ESP8266用MPU6050加速度計/ジャイロスコープドライバー
* [MPU6050-ESP8266-MicroPython](https://github.com/adamjezek98/MPU6050-ESP8266-MicroPython) - MPU6050用シンプルなMicroPythonドライバー
* [py-mpu6050](https://github.com/larsks/py-mpu6050) - MPU6050用シンプルなMicroPythonドライバー
* [upy-motion](https://github.com/OneMadGypsy/upy-motion) - ESP32上で動作するMPU6050（加速度計/ジャイロスコープ）ドライバー
* [MPU6050-ESP32-MicroPython](https://github.com/gitcnd/MPU6050-ESP32-MicroPython) - MPU6050 (加速度計/ジャイロスコープ)ドライバー、ESP32で動作
* [MicroPython_BMI160](https://github.com/jposada202020/MicroPython_BMI160) - ARCHIVED. ボッシュ BMI160 加速度計/ジャイロセンサー用 MicroPython 驅動プログラム
* [MicroPython_BMI270](https://github.com/jposada202020/MicroPython_BMI270) - ARCHIVED. ボッシュ BMI270 加速度計/ジャイロセンサー用 MicroPython 驅動プログラム
* [MicroPython_ICG20660](https://github.com/jposada202020/MicroPython_ICG20660) - ARCHIVED. テキサス TDK ICG20660 加速度計/ジャイロセンサー用 MicroPython 驅動プログラム
* [MicroPython_ICM20948](https://github.com/jposada202020/MicroPython_ICM20948) - ARCHIVED. テキサス TDK ICM20948 加速度計/ジャイロセンサー用 MicroPython 驅動プログラム
* [MicroPython_LSM6DSOX](https://github.com/jposada202020/MicroPython_LSM6DSOX) - ARCHIVED. ステラ LSM6DSOX 加速度計/ジャイロセンサー用 MicroPython ライブラリ

#### 近接 <a id="proximity"></a>

* [uPy_APDS9960](https://github.com/rlangoy/uPy_APDS9960) - ESP8266 用 APDS99660 を使用した MicroPython 隣接センサー用ライブラリ
* [MicroPython_VCNL4010](https://github.com/jposada202020/MicroPython_VCNL4010) - バイス VCNL4010 隣接センサーおよび周囲光センサー用 MicroPython 驅動プログラム
* [apds9960](https://github.com/QuirkyCort/IoTy/blob/main/public/extensions/apds9960.py) - APDS9960 用 MicroPython 駆動プログラム（簡単なジェスチャー検出を含む）

#### 放射線 <a id="radiation"></a>

* [micropython-geiger](https://github.com/Wangzhaotian725/micropython-geiger) - MicroPython カードによるゲイガー計
* [ESPGeiger](https://github.com/biemster/ESPGeiger) - ESP8266 を使用したゲイガー計用 MicroPython ライブラリ

#### 土壌水分 <a id="soil-moisture"></a>

* [micropython-chirp](https://github.com/robberwick/micropython-chirp) - チルプ 土壌湿度センサー用ドライバー
* [MicroPython-MiFlora](https://github.com/matthias-bs/MicroPython-MiFlora) - Xiaomi Mi Flora（花のケア）BLE 植物センサー（土壌湿度/電導率/光強度/温度）
* [micropython-miflora](https://github.com/agners/micropython-miflora) - Xiaomi Mi Flora BLE 植物センサー用 MicroPython ライブラリ

#### スペクトル <a id="spectral"></a>

* [AS726X_LoPy](https://github.com/jajberni/AS726X_LoPy) - AS726X スペクトルセンサー用 MicroPython 駆動プログラム
* [MicroPython_AS7262X_driver](https://github.com/rcolistete/MicroPython_AS7262X_driver) - AS7262/AS7263 ナノスペクトルセンサー用 MicroPython 駆動プログラム

#### アナログ温度 <a id="temperature-analog"></a>

* [micropython-max31855](https://github.com/mcauser/deshipu-micropython-max31855) - 熱電対増幅器、SPI インターフェース
* [max31856](https://github.com/alinbaltaru/max31856) - 高精度熱電対をデジタルに変換し線形化したデバイス、SPI インターフェース
* [max31865](https://github.com/sufyanaslam198/max31865) - プラチナ抵抗温度計に最適化された高精度抵抗-to-デジタル変換器、SPI インターフェース
* [mcp9700](https://gitlab.com/CrispyCrafter/mcp9700) - MCP9700 用一般向け MicroPython 駆動プログラム
* [micropython-generic-thermistor](https://github.com/Trexation/micropython-generic-thermistor) - NTC熱電抵抗を用いた温度検出を簡略化するための MicroPython 一般ライブラリ
* [micropython-simple-thermistor](https://github.com/scruss/micropython-simple-thermistor) - NTC熱電抵抗による電圧分圧回路に接続された温度を読み取る

#### デジタル温度 <a id="temperature-digital"></a>

* [bme680-mqtt-micropython](https://github.com/robmarkcole/bme680-mqtt-micropython) - BME680ガス、圧力、温度、湿度センサー用ドライバー
* [LM75-MicroPython](https://github.com/OldhamMade/LM75-MicroPython) - LM75デジタル温度センサー（I2Cインターフェース）用ドライバー
* [micropython-am2320](https://github.com/mcauser/micropython-am2320) - Aosong AM2320温度および湿度センサー（I2Cインターフェース）
* [micropython-dht12](https://github.com/mcauser/micropython-dht12) - Aosong DHT12温度および湿度セン度（I2Cインターフェース）
* [micropython-hdc1008](https://github.com/kfricke/micropython-hdc1008) - テキサス・インスティテュート HDC1008湿度および温度センサー用ドライバー
* [micropython-mcp9808](https://github.com/kfricke/micropython-mcp9808) - マイクロチップ MCP9808温度センサー用ドライバー
* [micropython-mpl115a2](https://github.com/khoulihan/micropython-mpl115a2) - Pyboard用MPL115A2気圧センサードライバー
* [micropython-sht30](https://github.com/rsc1975/micropython-sht30) - SHT30温度および湿度センサー用ドライバー
* [micropython-sht31](https://github.com/kfricke/micropython-sht31) - SHT31温度および湿度センサー用ドライバー
* [micropython-Si7005](https://github.com/Smrtokvitek/micropython-Si7005) - Si7005相対湿度および温度センサー用ドライバー
* [micropython-si7021](https://github.com/mcauser/deshipu-micropython-si7021) - SI7021温度および湿度センサー（I2Cインターフェース）
* [micropython-si7021](https://github.com/chrisbalmer/micropython-si7021) - SI7021温度および湿度センサー（I2Cインターフェース）
* [micropython-Si705x](https://github.com/billyrayvalentine/micropython-Si705x) - シリコン・ラボズ Si705xシリーズ温度センサー（I2Cインターフェース）
* [micropython-Si70xx](https://github.com/billyrayvalentine/micropython-Si70xx) - シリコン・ラボズ Si70xxシリーズ相対湿度および温度センサー（I2Cインターフェース）
* [micropython-tmp102](https://github.com/khoulihan/micropython-tmp102) - TMP102デジタル温度センサー用ドライバー
* [Official DHT11+DHT12](https://github.com/micropython/micropython-lib/tree/master/micropython/drivers/sensor/dht) - ESP8266用DHT11およびDHT12温度および湿度センサードライバー
* [sht25-micropython](https://github.com/Miceuz/sht25-micropython) - SHT25温度および湿度センサー用ドライバー
* [micropython-tmp1075](https://github.com/mattytrentini/micropython-tmp1075) - TI TMP1075温度センサー用ドライバー
* [micropython-sht11](https://github.com/2black0/micropython-sht11) - Sensirion SHT11温度および湿度センサー用ドライバー
* [micropython-lm75a](https://github.com/mcauser/micropython-lm75a) - NXP LM75A デジタル温度センサー用ドライバー
* [BME680-Micropython](https://github.com/robert-hh/BME680-Micropython) - BME680 センサー用マイクロピートンドライバー
* [htu21d-esp8266](https://github.com/julianhille/htu21d-esp8266) - HTU21Dからのデータを測定するマイクロピートンモジュール／クラス
* [HTU21D](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/HTU21D.md) - HTU21D温度・湿度センサー用非同期ドライバー
* [esp-sht3x-micropython](https://github.com/HAIZAKURA/esp-sht3x-micropython) - ESP8266/ESP32用のSHT3x（SHT30/31/35）ライブラリ
* [sht25-micropython](https://gitlab.com/miceuz/sht25-micropython) - SHT25湿度・温度センサーのAPIをマイクロピートンで実装したドライバー
* [micropython-sht30](https://github.com/schinckel/micropython-sht30) - I2Cバスに基づく純粋PythonによるSHT30センサードライバー
* [micropython_ahtx0](https://github.com/targetblank/micropython_ahtx0) - AHT10およびAHT20温度・湿度センサー用マイクロピートンドライバー
* [sht85](https://github.com/octaprog7/sht85) - [Sensiron SHT85](https://sensirion.com/products/catalog/SHT85/)湿度および温度センサ用のMicroPythonドライバー
* [micropython-zacwire](https://github.com/mdaeron/micropython-zacwire) - TSic 506F温度センサーで使用されるZACwireプロトコル用マイクロピートンドライバー
* [MicroPython_HTU31D](https://github.com/jposada202020/MicroPython_HTU31D) - TE HTU31D温度・湿度センサー用マイクロピートンライブラリ
* [MicroPython_SHTC3](https://github.com/jposada202020/MicroPython_SHTC3) - Sensirion SHTC3温度・湿度センサー用マイクロピートンドライバー
* [MicroPython_TMP117](https://github.com/jposada202020/MicroPython_TMP117) - TMP117温度センサー用マイクロピートンドライバー
* [MicroPython_SI7021](https://github.com/jposada202020/MicroPython_SI7021) - 温度・湿度SI7021センサー用マイクロピートンライブラリ
* [MicroPython_ADT7410](https://github.com/jposada202020/MicroPython_ADT7410) - アナログデバイセズADT7410温度センサー用マイクロピートンドライバー
* [MicroPython_WSENTIDS](https://github.com/jposada202020/MicroPython_WSENTIDS) - WSEN WSEN-TIDS温度センサー用マイクロピートンライブラリ
* [MicroPython_HS3003](https://github.com/jposada202020/MicroPython_HS3003) - レネサスHS3003温度・湿度センサー用マイクロピートンドライバー
* [MicroPython_STTS22H](https://github.com/jposada202020/MicroPython_STTS22H) - STTS22H温度センサー用マイクロピートンドライバー
* [MicroPython_HTU21DF](https://github.com/jposada202020/MicroPython_HTU21DF) - HTU21D-F温度・湿度ドライバー
* [MicroPython_SHT4X](https://github.com/jposada202020/MicroPython_SHT4X) - Sensirion SHT40およびSHT45温度・湿度センサー用マイクロピートンドライバー
* [MicroPython_SHT20](https://github.com/jposada202020/MicroPython_SHT20) - Sensirion SHT20温度センサー用マイクロピートンドライバー
* [MicroPython_MCP9808](https://github.com/jposada202020/MicroPython_MCP9808) - マイクロチップMCP9808温度センサー用マイクロピートンドライバー
* [MicroPython_HDC1080](https://github.com/jposada202020/MicroPython_HDC1080) - TI HDC1080温度と湿度センサ用MicroPythonドライバー
* [TMP117](https://github.com/octaprog7/TMP117) - テキサスインスティテュートのTMP117温度センサ用MicroPythonモジュール
* [BME680](https://github.com/octaprog7/BME680) - ボッシュの低消費電力ガス、圧力、温度および湿度センサBME680用MicroPythonモジュール
* [SHT30](https://github.com/robert-hh/SHT30) - センシリオンSHT3xセンサ用MicroPythonドライバー
* [MicroPython_AS6212](https://github.com/jposada202020/MicroPython_AS6212) - ASM AS6212温度センサ用Micro及Pythonライブラリ
* [MicroPython_PCT2075](https://github.com/jposada202020/MicroPython_PCT2075) - NXPセミコンダクターズPCT2075温度センサ用MicroPythonドライバー
* [micropython-hdc1080](https://github.com/mcauser/micropython-hdc1080) - HDC1080温度と湿度センサ用MicroPythonドライバー
* [bme680-pure-mp](https://github.com/antirez/bme680-pure-mp) - 純粋なMicroPythonボッシュBME680センサドライバー
* [SHT4X](https://github.com/octaprog7/SHT4X) - SHT4x（4世代）相対湿度および温度センサを制御するMicroPythonモジュール

#### 赤外線温度 <a id="temperature-ir"></a>

* [micropython-mlx90614](https://github.com/mcauser/micropython-mlx90614) - Melexis MLX90614赤外線温度センサ用ドライバー
* [MicroPython_MLX90615_driver](https://github.com/rcolistete/MicroPython_MLX90615_driver) - Melexis MLX90615赤外線温度センサ用ドライバー

#### 静電容量式タッチ <a id="touch-capacitive"></a>

* [micropython-mpr121](https://github.com/mcauser/micropython-mpr121) - MPR121電気容量式タッチキーパッドおよびブレイクアウトボード用ドライバー
* [micropython-ttp223](https://github.com/mcauser/micropython-ttp223) - TTP223電気容量式タッチモジュールを使った例
* [micropython-TTP229-BSF](https://github.com/alankrantas/micropython-TTP229-BSF) - TTP229-BSF 16キー電気容量キーパッド（シリアルインターフェースモード）用のMicroPython ESP8266/ESP32ドライバー
* [uFT6336U](https://github.com/fantasticdonkey/uFT6336U) - Focus LCDs FT6336U電気容量式タッチパネル制御IC用MicroPython I2Cドライバー
* [MicroPythonTrill](https://github.com/Heerkog/MicroPythonTrill) - MicroPython用トリルタッチセンサライブラリ
* [L58Touch](https://github.com/russhughes/L58Touch) - L58マルチタッチMicroPythonモジュール
* [micropython-ft6x06](https://github.com/antirez/micropython-ft6x06) - 純粋PythonによるFT6x06電気容量式タッチセンサドライバー

#### 抵抗膜式タッチ <a id="touch-resistive"></a>

* [XPT2046-touch-pad-driver](https://github.com/robert-hh/XPT2046-touch-pad-driver) - 多くのTFTモジュールに使用されているXPT2046タッチパッド制御器用ドライバー

### スケジューリング <a id="scheduling"></a>

* [micropython-mcron](https://github.com/fizista/micropython-mcron) - MicroCRONはMicroPython用の時間ベースタスクスケジューリングプログラム
* [micropython-scron](https://github.com/fizista/micropython-scron) - SimpleCRONはUnixシステムの有名なcronプログラムをインスピレーションとして開発された時間ベースタスクスケジューリングプログラム
* [Schedule](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/SCHEDULE.md) - asyncioベースアプリケーション向けスケジューラ。指定された時間や日付、または太陽・月の昇る・沈む時間に基づいてイベントをスケジュール可能
* [micropython-aioschedule](https://github.com/ThinkTransit/micropython-aioschedule) - 継続的に動作するuasyncioスケジューラで、タスク実行の間をdeepsleepでサポートしています。
* [Suntime](https://github.com/lorcap/micropython-suntime) - 日出・日没時刻の概算計算。与えられた`date`および地球上の地点の座標ペア`(latitude, longitude)`に基づき、その場所でその日における太陽が地平線を越えて昇る時刻と沈む時刻を計算するライブラリ

### ストレージ <a id="storage"></a>

#### 構成ファイル <a id="configuration-file"></a>

* [uPyftsConf](https://github.com/aleppax/upyftsconf) - マイクロPython ファーティー シンプル コンフィギュレーション ファイル。自身に設定を書き込む1ファイルライブラリです。
* [toml](https://github.com/gitcnd/toml) - .tomlファイルの読み書き。マイクロPythonおよびCircuitPythonで動作します。

#### データベース <a id="database"></a>

* [uPyMySQL](https://github.com/dvrhax/uPyMySQL) - 純粋なマイクロPython MySQLクライアント。
* [micropython-redis](https://github.com/dwighthubbard/micropython-redis) - マイクロPythonと使用するため設計されたRedisクライアント実装。
* [picoredis](https://github.com/SpotlightKid/picoredis) - マイクロPython用の非常に最小のRedisクライアント（マイクロPython用だけでなく）。
* [micropg](https://github.com/nakagami/micropg) - マイクロPython用のPostgreSQLデータベースドライバー。
* [micropg_lite](https://github.com/TimonW-Dev/micropg_lite) - 低メモリ環境向けに、一部の制限（例：エラー処理）を設けたmicropgの軽量版（ESP8266で動作）。
* [micropg_superlite](https://github.com/TimonW-Dev/micropg_superlite) - micropg_lite/micropgに基づくマイクロPython用の最も軽量なPostgreSQLデータベースドライバーですが、機能面でさらに強い制限があり、絶対に必要な機能のみに焦点を当てています。
* [micropython-cratedb](https://github.com/crate/micropython-cratedb/) - マイクロPython用のCrateDBデータベースドライバー。
* [nmongo](https://github.com/nakagami/nmongo) - CPythonおよびマイクロPython用のMongoDBクライアント、MongoDBシェルのようなAPIを提供。
* [MicroPyDatabase](https://github.com/sungkhum/MicroPyDatabase) - マイクロPython用の低メモリのJSONベースデータベース。
* [micropython-firebase-realtime-database](https://github.com/ckoever/micropython-firebase-realtime-database) - ESP32向けに最適化されたマイクロPython用のFirebase実装。
* [micropython-firebase-firestore](https://github.com/WoolDoughnut310/micropython-firebase-firestore) - マイクロPython用のFirebase Firestore実装。
* [uSQLite](https://github.com/spatialdude/usqlite) - マイクロPython用のSQLiteライブラリモジュール。
* [simple-db](https://github.com/ctimmer/simple-db) - マイクロPython用のB-ツリーを用いた関係データベース。

#### EEPROM <a id="eeprom"></a>

* [micropython_eeprom](https://github.com/peterhinch/micropython_eeprom) - マルチプラットフォームのマイクロPythonデバイスドライバー（メモリチップ：EEPROM、FRAM、フラッシュ、PSRAM）。
* [mb_24x256_512](https://github.com/MarksBench/mb_24x256_512) - マイクロチップ24x256および2-4x512 I2C EEPROMデバイス向けの非常にシンプルなマイクロPythonモジュール／ドライバー。
* [micropython-eeprom](https://github.com/brainelectronics/micropython-eeprom) - AT24Cxx EEPROM向けのマイクロPythonドライバー。

#### Flash <a id="flash"></a>

* [micropython_data_to_py](https://github.com/peterhinch/micropython_data_to_py) - 任意のバイナリファイルをPythonソースコードに変換するPython3ツール（フラッシュにブートロードとしてビットコードとして凍結するため）
* [micropython-winbond](https://github.com/brainelectronics/micropython-winbond) - SPIでWinbond W25Qフラッシュチップとインタラクション。
* [freezeFS](https://github.com/bixb922/freezeFS) - マイクロピートンで自展開圧縮ファイルや自マウントアーカイブを作成します

#### FRAM <a id="fram"></a>

* [micropython-fram](https://github.com/rolandvs/micropython-fram) - フェロ電気RAMモジュール用Pyboardドライバー

#### PSRAM <a id="psram"></a>

* [mb_PSRAM_64Mb_SPI](https://github.com/MarksBench/mb_PSRAM_64Mb_SPI) - 非常にシンプルなマイクロPythonモジュールで、ラズベリーパイピコ（RP2040）に一般的な64MビットPSRAM（例：Adafruit 4677）を使用可能にする

#### SD <a id="sd"></a>

* [mp-sdcard-littleFS](https://github.com/jornamon/mp-sdcard-littleFS) - LittleFS2と互換性のあるマイクロPythonSDカードドライバー（拡張インターフェースを実装）

#### SRAM <a id="sram"></a>

* [mb_23LC1024](https://github.com/MarksBench/mb_23LC1024) - 非常にシンプルなマイクロピートンモジュールで、ラズベリーパイピコ（RP2040）とマイクロチップ23LC1024 SPI SRAMを接続します
* [mb_47x16](https://github.com/MarksBench/mb_47x16) - 非常にシンプルなマイクロピートンモジュール／ドライバーで、マイクロチップ47x16 EERAMデバイス（47L/47C）を使用します

### スレッド <a id="threading"></a>

* [MicroWorkers](https://github.com/jczic/MicroWorkers) - マイクロPython用のマイクロワーカークラス。複数のスレッドプールを簡単に管理し、同時に実行されるタスクやタスク終了を最適化する（PycomモジュールおよびESP32で使用）

### ユーザーインターフェース <a id="user-interface"></a>

* [upymenu](https://github.com/jplattel/upymenu) - LCDディスプレイ用のマイクロPythonメニュー

### ユーティリティ <a id="utilities"></a>

* [micropython-hexdump](https://github.com/mattytrentini/micropython-hexdump) - マイクロピートン向けのヘックスダンプ実装
* [mp_wcwidth](https://github.com/Josverl/mp_wcwidth) - Terminal出力における「你好世界」のような広範なUnicode文字を扱うための、[wcwidth](https://github.com/jquast/wcwidth)のPython版
* [micropython-units](https://github.com/WoolleySheep/micropython-units) - マイクロピートンで物理量を扱うためのライブラリ

## コミュニティ <a id="community"></a>

* [MicroPython Discussions on GitHub](https://github.com/orgs/micropython/discussions) - マイクロピートンに関連するすべての話題についてのGitHubディスカッション
* [MicroPython Forum (archive)](https://forum.micropython.org/) - マイクロピートンに関連するすべての話題についてのアーカイブされたコミュニティディスカッション
* [Discord](https://micropython.org/discord) - マイクロピートンのDiscordサーバーへの招待を取得します
* [MicroPython on Mastodon / Fediverse](https://fosstodon.org/@MicroPython) - マイクロピートンをフェディバースでフォローします
* [MicroPython on Twitter](https://twitter.com/micropython) - マイクロピートンをTwitterでフォローして最新のニュースやアップデートを確認します
* [MicroPython on Facebook](https://www.facebook.com/micropython) - マイクロピートンをFacebookでいいねして、コンテストやニュース、アップデートを確認します
* [Melbourne MicroPython Meetup](https://www.meetup.com/en-au/micropython-meetup/) - オーストラリアのメルボルンにあるCCHSで定期的に開催されるミーティング

## チュートリアル <a id="tutorials"></a>
* [100 Days 100 IoT Projects](https://github.com/kritishmohapatra/100_Days_100_IoT_Projects) - ESP32、ESP8266およびラズベリーパイピコ2W上でマイクロPythonを使って実世界のIoTプロジェクトを100日間チャレンジ。初心者向けに、接続図とコードをステップバイステップに記載。
* [asyncio](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/TUTORIAL.md) - ハードウェアデバイスとインターフェースするための非同期コードを書きます
* [Asynchronous drivers](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/DRIVERS.md) - スイッチ、プッシュボタン、エンコーダー、ADCへの非同期インターフェースに関するチュートリアルとコード
* [Pyboard micropower](https://github.com/peterhinch/micropython-micropower) - Pyboard 1.xおよびPyboard Dでの低消費電力アプリケーションに関するチュートリアルとコード
* [3D rotation with quaternions](https://github.com/peterhinch/micropython-samples/blob/master/QUATERNIONS.md) - 3D回転を簡単に行うためのチュートリアルとコード
* [Miguel Grinberg](https://blog.miguelgrinberg.com/category/MicroPython) - マイクロピートンとモノのインターネット
* [Bhavesh Kakwani](https://bhave.sh/) - マイクロピートンのビデオと書かれたチュートリアル
* [CoderDojo Twin Cities MicroPython](https://github.com/CoderDojoTC/micropython) - 子どもたちにマイクロピートンを教えるための完全なコーディングカリキュラム
* [MicroPython Tutorials for ESP32 boards](https://www.upesy.com/blogs/tutorials/tutorials-for-esp32-with-micropython-code) - ESP32ボードを使ってマイクロピートンの基本を学ぶためのチュートリアルとコード例
* [Learn MicroPython with a Pi Pico board](https://www.upesy.com/blogs/tutorials/tutorials-for-rpi-pi-pico-with-micropython-code) - ラズベリーパイピコ／RP240ボードを使ったマイクロピートンのチュートリアル

## 書籍 <a id="books"></a>

* [Programming with MicroPython: Embedded Programming with Microcontrollers and Python](https://www.oreilly.com/library/view/programming-with-micropython/9781491972724/) - ニックolas H. ツォーラーブイ. ISBN 9781491972731.
* [MicroPython for the Internet of Things: A Beginner's Guide to Programming with Python on Microcontrollers](https://link.springer.com/book/10.1007/978-1-4842-3123-4) - チャールズ・ベル. ISBN 9781484231227.
* [Beginning MicroPython with the Raspberry Pi Pico: Build Electronics and IoT Projects](https://link.springer.com/book/10.1007/978-1-4842-8135-2) - チャールズ・ベル. ISBN 9781484281345.
* [MicroPython Cookbook](https://www.packtpub.com/en-us/product/micropython-cookbook-9781838641955) - マーヴァン・アルサバグ. ISBN 9781838649951.
* [Python for Microcontrollers: Getting Started with MicroPython](https://www.mhprofessional.com/python-for-microcontrollers-getting-started-with-micropython-9781259644535-usa-group) - ドナルド・ノリス. ISBN 9781259644535.
* [Advanced Programming in MicroPython By Example](https://www.amazon.com/Advanced-Programming-MicroPython-Example-Magda/dp/1090900937) - ユリ・マグダ. ISBN 9781090900937.
* [MicroPython Projects](https://www.packtpub.com/en-us/product/micropython-projects-9781789952537) - ジェイコブ・ベンインゴ. ISBN 9781789958034.
* [Get Started with MicroPython on Raspberry Pi Pico 2nd Edition](https://store.rpipress.cc/collections/books/products/get-started-with-micropython-on-raspberry-pi-pico-2nd-edition) - ゲーティ・ハーフアクリーおよびベン・エバード. ISBN 9781912047291.
* [MicroPython for Microcontrollers](https://www.elektor.com/micropython-for-microcontrollers-e-book) - グンター・スパナー. ISBN 9783895764370.
* [MicroPython for the Raspberry Pi Pico W: A gentle introduction to programming digital circuits with Python](https://www.amazon.com/MicroPython-Raspberry-Pico-introduction-programming/dp/B0BKSCV18D) - ミゲル・グリンバーグ. ISBN 9798361302710.
* [Programming ESP32: Learn MicroPython Coding and Electronics](https://www.amazon.com/Programming-ESP32-MicroPython-Coding-Electronics/dp/1739487451/) - シモン・モンク. ISBN 9781739487454.

## フレームワーク <a id="frameworks"></a>

* [micrOS](https://github.com/BxNxM/micrOS) - マイクロピートンベースのIoTフレームワーク
* [terkin-datalogger](https://github.com/hiveeyes/terkin-datalogger) - マイクロプイプンとシーピアープルのための柔軟なデータログアプリケーション
* [perthensis](https://codeberg.org/scy/perthensis) - ペルテンシス：マイクロプイプン向けの非同期フレームワーク
* [meerkat](https://github.com/crdietrich/meerkat) - マイクロプイプンおよびラズベリーパイ向けのI2Cデータ取得
* [public-micropython-iot-platform](https://github.com/wolfen351/public-micropython-iot-platform) - プロジェクトフリードマイクロプイプンIoTプラットフォーム。リレーや温度センサー、ボタン、タッチスクリーン、GPSなどに制御コードを提供。レスポンス性の高いWebUI、MQTT、ホームアシスタント、スイートボードに対応。

## 資料 <a id="resources"></a>

* [MicroPython](https://micropython.org) - プロジェクトウェブサイト。Pyboardを体験してみましょう。Unicornでマイクロプイプンをオンラインで試してみましょう。
* [MicroPython on GitHub](https://github.com/micropython/micropython) - バグ報告を提出し、GitHubで開発に参加・関与してください。
* [MicroPython Official Documentation](https://docs.micropython.org/) - さまざまなポートについて、迅速な参照、一般情報、例、チュートリアルを提供。
* [MicroPython Wiki](https://github.com/micropython/micropython/wiki) - マイクロプイプンおよびPyboardの機能に関するコミュニティが生成したドキュメンテーションと例。
* [MicroPython Newsletter](https://micropython.org/newsletter) - マイクロプイプンニュースレターに登録して、新機能や新製品に関するニュースや発表を受信してください。
* [MicroPython Store](https://store.micropython.org/) - Pyboardやケース、スキン、書籍、コネクタ、周辺機器を購入できる場所。
* [MicroPython on Wikipedia](https://en.wikipedia.org/wiki/MicroPython) - マイクロプイプンに関するウィキペディア。
* [awesome-micropythons](https://github.com/adafruit/awesome-micropythons) - マイクロプイプンの多くのフォークとポート。

## 開発 <a id="development"></a>

### コード生成 <a id="code-generation"></a>

* [micropy-cli](https://github.com/BradenM/micropy-cli) - Micropy CLIは、Visual Studio Codeなどの現代的なIDEでマイクロプイプンコードを書くためのプロジェクト管理・生成ツール。
* [micropython-stubber](https://github.com/Josverl/micropython-stubber) - Visual Studio Codeまたは他のIDEおよびリントツールと利用可能なさまざまなマイクロプイプンファームウェア向けのスタブを生成・使用。
* [micropython-stubs](https://github.com/Josverl/micropython-stubs) - ほとんどのマイクロプインポート、ボード、バージョンのスタブを提供し、コード作成をより簡単にする。
* [micropy-stubs](https://github.com/BradenM/micropy-stubs) - Micropy-Cliおよびその他のツール向けに自動生成されたスタブパッケージ。
* [micropython-extmod-generator](https://github.com/prusnak/micropython-extmod-generator) - Cで記述されたマイクロプイプンの外部モジュールを生成するツール。
* [micropython-package-template](https://github.com/brainelectronics/micropython-package-template) - GitHubワークフローをサポートするマイクロPythonパッケージテンプレートで、メインブランチへのプッシュ時に [Python Package Index](https://pypi.org/) にデプロイされ、PR時に [Test Python Package Index](https://test.pypi.org/) へのテストデプロイが行われます。
* [micropython-usermod](https://micropython-usermod.readthedocs.io) - Cで記述されたマイクロプイプンの外部モジュールに関するオンライン書籍。
* [wasm2mpy](https://github.com/vshymanskyy/wasm2mpy) - WebAssemblyをネイティブなマイクロPython `.mpy` ファイルにコンパイルします。さまざまな静的コンパイル言語でコードを書くことができ、それらをCに変換して近いネイティブ性能を実現します。

### デバッグ <a id="debugging"></a>

* [esp32-backtrace](https://github.com/tve/esp32-backtrace) - ESP32の例外スタックバックトレースアナライザ。
* [micropython-aiosentry](https://github.com/devbis/micropython-aiosentry) - マイクロプイプン向けの非同期Sentry.ioマイクロクライアント。
* [micropython-usyslog](https://github.com/kfricke/micropython-usyslog) - マイクロプイプン向けシンプルなリモートsyslogクライアント
* [Asynchronous monitor](https://github.com/peterhinch/micropython-monitor) - ラズベリーピコと論理分析器またはスコープを使用して、非同期コードを監視

### ファームウェア <a id="firmware"></a>

* [micropython-builder](https://github.com/jonahbron/micropython-builder) - カスタムマイクロPythonファームウェアのビルドとフラッシュを行うツールです。
* [mpflash](https://pypi.org/project/mpflash/) -⚡Your Ultimate MicroPython Flashing Companion for stm32, rp2, esp32, esp8266, samd.

### IDE <a id="ides"></a>

* [BIPES](https://bipes.net.br/ide/) - マイクロPython用のウェブベースIDEで、ファイルマネージャー、エディタ、ブロックからコード生成、IoTダッシュボード、およびブラウザ上のシリアル/USB/Bluetooth/WebREPLコンソールが備わっています。ソース： 。 [https://github.com/BIPES](https://github.com/BIPES)
* [Embedible](https://embedible.io/) - ESP32およびラズベリーピコW向けのAIハードウェアコピロート。プロジェクトの設計・配線・コーディングを支援
* [ESP32-MPY-Jama](https://github.com/jczic/ESP32-MPY-Jama) - Espressif ESP32マイクロコントローラをマイクロプイプンで管理するツール
* [ESP IDE](https://espide.eu/) - ESP3及Raspberry Pi Picoボード向けブラウザベースのマイクロプイプンIDE（Blocklyおよびテキストベースプログラミングをサポート）
* [JetBrains IntelliJ/PyCharm MicroPython Plugin](https://plugins.jetbrains.com/plugin/9777-micropython) - IntelliJおよびPyCharmにおけるマイクロプイプンデバイス向けプラグイン
* [MicroPython IDE for VSCode](https://marketplace.visualstudio.com/items?itemName=dphans.micropython-ide-vscode) - Visual Studio Code向けマイクロプイプンIDE
* [MicroPython-REPLink for VSCode](https://marketplace.visualstudio.com/items?itemName=SWC-Fablab.micropython-replink) - マイクロプイプンREPLターミナルとのインタラクションに便利なショートカット
* [MPRemote for VSCode](https://marketplace.visualstudio.com/items?itemName=DavesCodeMusings.mpremote) - Visual Studio Code内でmpremoteの機能を簡単にアクセスできる拡張機能
* [Mu Editor](https://codewith.mu/) - ムー（Mu）：初心者プログラマー向けのシンプルなPython／マイクロプイプン／CircuitPythonエディタ
* [Thonny IDE](https://thonny.org/) - スンノ（Thonny）：初心者向けPythonIDE
* [ViperIDE](https://viper-ide.org) - ウェブおよびモバイル向け革新的なマイクロプイプン／CircuitPython IDE。インストール不要
* [Pyboard File Manager](https://github.com/joewez/PyboardFileManager) - Pyboardファイルマネージャー：Pyboard.py対応デバイス向けWindowsGUI
* [uPIDE](https://github.com/harbaum/upide) - µPIDEはマイクロプイプン向けシンプルなIDE
* [pye](https://github.com/robert-hh/Micropython-Editor) - デバイス内エディタ

### ログ <a id="logging"></a>

* [micropython-ulogger](https://github.com/majoson-chen/micropython-ulogger) - マイクロプイプン向けにカスタマイズされた軽量ログモジュール
* [scd30logger](https://github.com/agners/scd30logger) - Sensirion SCD30を基盤としたCO2、湿度、温度ログ記録装置（マイクロプイプン向け）
* [sht15logger](https://github.com/agners/sht15logger) - Sensirion SHT15を用いたマイクロプイプンによる温度および湿度ログ記録

### シェル <a id="shells"></a>

#### Jupyter <a id="jupyter"></a>

* [micropython-magic](https://github.com/josverl/micropython-magic) - マイクロプイプンをJupyterノートブックに統合
* [jupyter_upydevice_kernel](https://github.com/Carglglz/jupyter_upydevice_kernel) - マイクロプイプンボードとREPLインターフェースを介して相互作用するためのJupyterカーネル

#### デバイス上 <a id="on-device"></a>

* [upy-shell](https://github.com/dhylands/upy-shell) - マイクロPython用のシンプルなコマンドラインベースのシェル
* [Micropython-Editor](https://github.com/robert-hh/Micropython-Editor) - Pyboard、WiPy、ESP826、ESP32、PyComおよびAdafruitデバイス向けのPythonで書かれた小型のオンボードエディタ
* [mpy_shell](https://github.com/gitcnd/mpy_shell) - マイクロPython用のLinux風シェル。機能が豊富で非常に軽量。

#### ホスト上 <a id="on-host"></a>

* [rshell](https://github.com/dhylands/rshell) - ボードにファイルをコピーまたは同期し、ターミナルからREPLに接続する。
* [ampy](https://github.com/scientifichackers/ampy) - シリアル接続を介してマイクロPythonボードと相互作用するためのユーティリティ。
* [mpbridge](https://github.com/AmirHmZz/mpbridge) - マイクロPythonが実行中のデバイス上のファイルを同期・管理するためのファイルシステムブリッジ。
* [mpfshell](https://github.com/wendlers/mpfshell) - ESP8266およびWiPy向けのシンプルなシェルベースのファイルエクスプローラ。
* [mpsync](https://github.com/thilomichael/mpsync) - マイクロPythonボードへのコードを自動で同期するツール。
* [mpremote](https://github.com/micropython/micropython/blob/master/tools/mpremote/README.md) - ホストの現在のディレクトリをターゲットにマウントできる強力な公式シェル。ファイルシステムを変更せずにコードを実行可能。
* [MPRemoteEditor](https://github.com/joewez/MPRemoteEditor) - マイクロPython MPRemoteデバイスで開発するためのシンプルなWindows IDE。
* [uPyExplorer](https://github.com/RetepRelleum/uPyExplorer) - マイクロPythonデバイス用のエクスプローラ。
* [mpr](https://github.com/bulletmark/mpr) - マイクロPython mpremoteツールのラッパー。

### ツール <a id="tools"></a>

* [belay](https://github.com/BrianPugh/belay) - Belayは、マイクロPython対応ボードを介してハードウェアと相互作用するプロジェクトの迅速な開発を可能にするPythonライブラリ。
* [ESP-File_manager](https://github.com/mispacek/ESP-File_manager) - ESP32上でマイクロPythonで直接実行されるウェブベースのファイルマネージャ。
* [mcu_serial](https://github.com/gitcnd/mcu_serial) - マイクロPythonボードに接続するためのコマンドラインシリアルエミュレーター。

## その他 <a id="miscellaneous"></a>

* [MicroPython Kickstarter](https://www.kickstarter.com/projects/214379695/micro-python-python-for-microcontrollers) - 1,931人の支援者が£97,803を pledges して、このプロジェクトの実現を助けました。
* [MicroPython on the ESP8266 Kickstarter](https://www.kickstarter.com/projects/214379695/micropython-on-the-esp8266-beautifully-easy-iot) - 1,399人の支援者が£28,534を pledges して、このプロジェクトの実現を助けました。

## コントリビューション <a id="contributing"></a>

コントリビューションと提案を歓迎します。最初に[コントリビューションガイドライン](https://github.com/mcauser/awesome-micropython/blob/master/contributing.md)を確認してください。

ライブラリが掲載に値するか判断できないPull Requestは開いたままにすることがあります。👍を付けて投票できます。
