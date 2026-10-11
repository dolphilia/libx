---
title: "Awesome ESP"
description: "ESP8266・ESP32のファームウェア、開発ツール、ライブラリと、IoT・セキュリティ・センサー・音声・ウェアラブルのプロジェクト。"
licenseSource: "github-agucova-awesome-esp-readme-md"
---

# Awesome ESP

ESP8266・ESP32ボードのファームウェア、開発ツール、ライブラリを探せます。スマートホーム、セキュリティ、生体計測、LoRa通信、音声、スマートウォッチなどのプロジェクトも紹介します。

原文では、[ESP8266](http://espressif.com/en/products/hardware/esp8266ex/overview)と[ESP32](http://espressif.com/en/products/hardware/esp32/overview)を、上海のEspressif Systemsが製造する、完全なTCP/IPスタックとマイクロコントローラー機能を備えた低価格のWi-Fiチップと説明しています。

対応ボード、機能、プロジェクト名は、この版で取得した原文の記述です。現在の互換性や保守状況は確認していません。

## ファームウェア <a id="firmware"></a>
- [Espressif AT](http://bbs.espressif.com/) - ESP8266用の標準ファームウェア。
- [NodeMCU](https://github.com/nodemcu/nodemcu-firmware) - ESP8266向けeLuaベースのファームウェア。
- [ESPBasic](http://www.esp8266basic.com/) - 8266向けで、簡単な無線プログラミングに対応するBASICファームウェア。
- [MicroPython](https://github.com/micropython/micropython/) - ESP8266と32向けのPython3実装。
- [ESP3D](https://github.com/luc-github/ESP3D) - ESP32と8266両方に対応する3Dプリンター向け実験的ファームウェア。
- [Frankenstein](https://github.com/nekromant/esp8266-frankenstein) - ESP8266向けの、手早く簡易に作られたファームウェア。
- [MongooseOS](https://github.com/cesanta/mongoose-os) - CとJSに対応し、ESP32/8266で利用できるIoT特化ファームウェア。
- [DeviceHive](https://devicehive.com/) - 8266専用、DeviceHiveのIoTデータプラットフォームのクライアントとなるファームウェア。
- [RT-Thread](https://github.com/RT-Thread/rt-thread) - ESP32で利用できる中国発オープンソースファームウェア。
- [Sming Framework](https://github.com/SmingHub/Sming) - ESP8266・ESP32に対応するC/C++ IoTフレームワーク。

## ツール <a id="tools"></a>
- [ESP Flash Tool](http://espressif.com/en/support/download/other-tools) - ESP8266・ESP32向けの標準ファームウェアフラッシャー。
- [Arduino Core/8266](https://github.com/esp8266/arduino) - ESP8266向けArduinoコア。
- [Arduino Core/32](https://github.com/espressif/arduino-esp32) - ESP32向けArduinoコア。
- [ESPTool](https://github.com/espressif/esptool) - ESP8266・ESP32のブートローダー通信向けEspressifコマンドラインツール。
- [ESP-Open-SDK](https://github.com/pfalcon/esp-open-sdk) - ESP8266向けオープンSDK。
- [ESPTool-ck](https://github.com/igrr/esptool-ck) - ESP8266向けフラッシュ用CLIツール。
- [ESPTool-gui](https://github.com/Rodmg/esptool-gui) - ESPTool-ckを基盤にしたGUIフラッシュツール。
- [LuaNode](https://github.com/Nicholas3388/LuaNode) - 32/8266向けLua専用SDK。
- [Tuya-Convert](https://github.com/ct-Open-Source/tuya-convert) - TuyaファームウェアがプリインストールされたESP8266に、Wi-Fi経由でファームウェアを書き込むツール。
- [NodeMCU Flasher](https://github.com/nodemcu/nodemcu-flasher) - NodeMCU OSの公式フラッシュツール。
- [Tasmotizer](https://github.com/tasmota/tasmotizer) - Tasmotaファームウェア用グラフィカルフラッシュツール。Wi-Fi・MQTT設定、モジュール、テンプレートを管理可能。
- [Arduino FS Plugin](https://github.com/esp8266/arduino-esp8266fs-plugin) - 8266でファイルシステムをアップロードするArduinoプラグイン。
- [PlatformIO](https://github.com/platformio/platformio-core) - ESP32とESP8266の双方に対応するクロスプラットフォームIDE・デバッガー。

## プロジェクト <a id="projects"></a>
### スマートホームとIoT <a id="smart-home-and-iot"></a>
- [OpenMQTTGateway](https://github.com/1technophile/OpenMQTTGateway) - ESP8266・ESP32をはじめとするデバイスに対応する、マルチプロトコルMQTTゲートウェイの実装。
- [ESPHome](https://esphome.io/) - シンプルながら強力な設定ファイルとホームオートメーションシステムを通じてESPを制御するフル機能システム。
- [Tasmota](https://tasmota.github.io/docs/) - Sonoffおよび他のESP8266/ESP32デバイス向け代替ファームウェア。多数のセンサードライバーを含み、[Home Assistant](https://www.home-assistant.io/)とネイティブまたはMQTT経由で統合。
- [ESPEasy](https://github.com/letscontrolit/ESPEasy) - ESPモジュールをホームオートメーション用の多機能センサーデバイスへ簡単に変換。
- [Sonoff-Homekit](https://github.com/Gruppio/Sonoff-Homekit) - AppleのHomekitで制御できるSonoffデバイスおよび他の8266デバイス向け代替ファームウェア。
- [DoorsignEPD](https://github.com/jamct/DoorsignEPD) - ESP32を使うE-Paperディスプレイ付きスマートドア表示。
- [EPaperWeatherDisplay](https://github.com/henri98/esp32-e-paper-weatherdisplay) - ESP32を使う電子ペーパー天気表示。
- [HomePoint](https://github.com/sieren/Homepoint) - ESP32駆動画面からMQTT/HomeKitスマートホームデバイスを制御。
- [openHASP](https://www.openhasp.com/) - MQTT経由で接続するカスタマイズ可能なタッチスクリーンUIからホームオートメーションデバイスを制御。
- [SuperGreenOS](https://github.com/supergreenlab/SuperGreenOS) - ESP32向けの、家庭での栽培を自動化するフル機能ソフトウェア。
- [CanAirIO](https://github.com/kike-canaries/canairio_firmware#canairio-firmware) - ESP32とスマートフォンを使う移動・固定局で大気質を測定する市民科学プロジェクト。

### 情報セキュリティ <a id="infosec"></a>
- [ESP32-BLECollector](https://github.com/tobozo/ESP32-BLECollector) - BLEデバイスを表示し、そのデータを収集する、画面インターフェイス付きのウォードライビングデバイス。
- [ESP32Marauder](https://github.com/justcallmekoko/ESP32Marauder) - WiFiとBluetooth向け攻撃・防御ツールの統合スイート。
- [ArduinoPcap](https://github.com/spacehuhn/ArduinoPcap) - ESP8266・ESP32向け、ネットワークトラフィックを含む.pcapファイルを生成できるライブラリ。
- [WiFi Satellite](https://hackaday.io/project/28831-wifi-satellite-34c3) - 14台のESP32で全14の2.4GHzチャネルを監視できる巨大なWiFi「衛星」。
- [ESP8266 Deauther](https://github.com/spacehuhn/esp8266_deauther) - ESP8266を使うWiFiネットワークの疑似ジャマー（deauther）。
- [PacketMonitor](https://github.com/spacehuhn/PacketMonitor32) - WiFiチャネルのパケット活動を表示するOLEDモニター。各ESP向けに2つの版がある。
- [WiFiDuck](https://github.com/spacehuhn/WiFiDuck) - Rubber Duckyに似た無線対応キーストロークインジェクター。
- [ESP8266 Beacon Spam](https://github.com/spacehuhn/esp8266_beaconSpam) - 数百の偽WiFiネットワークを作るデバイス。
- [DeauthDetector](https://github.com/spacehuhn/DeauthDetector) - WiFiの認証解除攻撃を検出すると光る小型デバイス。直前の6プロジェクトと同じ作者によるもの。

### 生物医学 <a id="biomedical"></a>
- [HeartyPatch](https://heartypatch.protocentral.com/) - ESP32を使う、BLE・WiFi接続のウェアラブルECG-HRパッチ。
- [HealthyPi v4](https://www.crowdsupply.com/protocentral/healthypi-v4-unplugged) - ECG、呼吸、パルスオキシメトリ、体温を監視できる、ESP32で動作するオープンソースバイタルサインモニター。

### LoRa

- [Meshtastic](https://www.meshtastic.org/) - ESP32 LoRAボードをメッシュGPS通信機として使うプロジェクト。安全性とバッテリーの長寿命は原文での説明。
- [ESP32-Paxcounter](https://github.com/cyberman54/ESP32-Paxcounter#esp32-paxcounter) - 安価なESP32 LoRa IoTボード上に構築された、WiFi・Bluetooth駆動、LoRaWAN対応、バッテリー駆動の小型Paxcounter。
- [Disaster Radio](https://disaster.radio/) - 太陽光で動く災害耐性通信ネットワーク。

### 音楽とオーディオ <a id="music-and-audio"></a>

- [Alles](https://github.com/bwhitman/alles) - alles machine/AMYをモデルに、WiFi上のUDPマルチキャストを使う多数スピーカーの分散音楽シンセサイザー。
- [ESP32-Radio](https://github.com/Edzelf/ESP32-Radio) - ESP32、VS1053、TFT画面に基づくインターネットラジオ。
- [ESPuino](https://github.com/biologist79/ESPuino) - ESP32で動くRFID制御の音楽プレーヤー。
- [Knobby](https://github.com/quadule/knobby) - 未知の音楽探索を促す手持ちSpotifyリモコン。
- [PedalinoMini](https://github.com/alf45tar/PedalinoMini) - ESP32で構築したギタリスト用ワイヤレスMIDIペダルコントローラー。
- [Squeezelite-esp32](https://github.com/sle118/squeezelite-esp32) - マルチルーム同期、AirPlay、Bluetooth、ハードウェアボタン、ディスプレイ等を備えるストリーミング音声受信機。
- [ThingPulse esp8266-spotify-remote](https://github.com/ThingPulse/esp8266-spotify-remote) - カラータッチディスプレイ付きESP8266からSpotifyプレーヤーを制御。

### スマートウォッチ <a id="smartwatches"></a>

- [mutantW_V1](https://mutantcybernetics.com/mutantW_V1.html) - 1.7インチディスプレイ、WiFi、Bluetooth、NeoPixel、振動機能を備えたESP32ベースのオープンソーススマートウォッチ。
- [Open SmartWatch](https://open-smartwatch.github.io/) - GPS、慣性ユニット、3Dプリントケースを持つFOSSスマートウォッチ。
- [StickWatch](https://github.com/eggfly/StickWatch) - ESP32を使うM5Stickベースのスマートウォッチモジュール。
- [Watchy](https://watchy.sqfmi.com) - 多数のカスタマイズオプションを持つオープンソース電子ペーパー腕時計。

### その他のプロジェクト <a id="others"></a> <a id="その他"></a>
- [SoftRF](https://github.com/lyusupov/SoftRF) - UAVプロジェクトで使えるDIY航空機近接認識システム。
- [Retro ESP32](https://github.com/retro-esp32/RetroESP32) - 複数のレトロコンソールをエミュレートできる、ESP32搭載Odroid Go向けのランチャー。
- [DroneBridge](https://github.com/DroneBridge/ESP32) - ESP32上のドローン・UAV向け信号リンク、DroneBridgeの実装。
- [E-TKT](https://github.com/andreisperid/E-TKT) - 古風な技術と現代技術を組み合わせたESP32駆動DIYラベルメーカー。
- [FreeTouchDeck](https://github.com/DustinWatts/FreeTouchDeck) - Web設定ツール内蔵のオープンソース・タッチマクロパッド兼ストリームコントロールデッキ。
- [SmartSpin2k](https://github.com/doudar/SmartSpin2k) - Zwiftなどフィットネスアプリで自動抵抗ノブ制御を行い、スピンバイクをスマートトレーナーへ変換。
- [WirelessPrinting](https://github.com/probonopd/WirelessPrinting) - ESPモジュールに接続した3DプリンターへCura、PrusaSlicer、Slic3rから無線印刷。
- [WLED](https://kno.wled.ge/) - WiFi経由でESP8266またはESP32を使い、多様なRGB(W) LEDストリップを制御。

## ライブラリ <a id="libraries"></a>
- [Wasm3](https://github.com/wasm3/wasm3) - ESP8266・ESP32に対応する、組み込みデバイス向けWebAssemblyインタープリター。
- [Homie8266](https://github.com/marvinroger/homie-esp8266) - 8266向けHomieプロトコルのフレームワーク実装。
- [ESP-Dash](https://github.com/ayushsharma82/ESP-DASH) - 8266/32向けリモートダッシュボード作成フレームワーク。インターネット不要。
- [ESP_mqtt](https://github.com/tuanpmt/esp_mqtt) - ESP8266向けMQTTヘルパーライブラリ。
- [GUIslice](https://github.com/ImpulseAdventure/GUIslice) - 複数デバイス・画面コントローラー向けドラッグ＆ドロップGUIフレームワーク。8266・32対応。
- [LVGL](https://lvgl.io) - グラフィカル要素、視覚効果、低メモリ消費で組み込みGUIを作るために必要なすべてを提供するオープンソースグラフィックスライブラリ。
- [MicroWebSrv2](https://github.com/jczic/MicroWebSrv2) - ESP32で使えるMicroPython Webサーバー。
- [IRremoteESP8266](https://github.com/markszabo/IRremoteESP8266) - ESP8266でIR信号を送受信。
- [esphomelib](https://github.com/OttoWinter/esphomelib) - 8266でHomeAssistantへ統合するフレームワーク。
- [TTS](https://github.com/jscrane/TTS) - ESP8266・ESP32を含む複数Arduinoデバイス向けの、テキスト読み上げライブラリ。
- [Free802.11](https://github.com/Jeija/esp32free80211) - ESP32で任意の802.11信号を送出するライブラリ。
- [Koyn](https://github.com/elkrem/koyn) - ESP32・ESP8266向け分散型Bitcoinライブラリ。
- [TFTLibrary](https://github.com/loboris/ESP32_TFT_library) - ESP32向けTFT互換性。
- [UTFT-ESP](https://github.com/gnulabis/UTFT-ESP) - ESP32/8266向けUTFTサポート。
- [ESPAudio](https://github.com/earlephilhower/ESP8266Audio) - ESP8266/ESP32で多様なオーディオ形式を再生するライブラリ。
- [ESP32-audioI2S](https://github.com/schreibfaul1/ESP32-audioI2S) - SDカードまたはストリームのmp3、m4a、wavファイルを、I2Sインターフェイス経由で再生。
- [AsyncTCP](https://github.com/me-no-dev/ESPAsyncTCP) - 8266・32の両方に対応する非同期TCPライブラリ。
- [ESP-HomeKit](https://github.com/maximkulkin/esp-homekit) - RTOS上の8266向けHomekit実装。
- [HomeSpan](https://github.com/HomeSpan/HomeSpan) - 独自のESP32ベースHomeKitデバイスを作るArduinoライブラリ。
- [ESPHelper](https://github.com/ItKindaWorks/ESPHelper) - 8266向けMQTT・Wi-Fi自動化志向ライブラリ。
- [ESPHelper/32](https://github.com/ItKindaWorks/ESPHelper32) - 32向けESPHelperライブラリの移植版。
- [ESP8266Wifi](https://github.com/ekstrand/ESP8266wifi) - 8266向けシンプルなArduino WiFiライブラリ。
- [WiFiESP](https://github.com/bportaluri/WiFiEsp) - 8266ボード向けWiFi管理、クライアント／サーバー用Arduinoライブラリ。
- [TinyGSM](https://github.com/vshymanskyy/TinyGSM) - ATコマンド経由で8266も制御できる、GSMモジュール連携用の簡潔なArduinoライブラリ。
- [mJS](https://github.com/cesanta/mjs) - MongooseOSが使用する、32・8266対応の軽量かつ制限付きJSエンジン。
- [ESPUI](https://github.com/s00500/ESPUI) - ESP8266・ESP32向け対話的Webインターフェイスを簡単に作るライブラリ。
- [ESP32 ePaper](https://github.com/loboris/ESP32_ePaper_example) - ESP32でePaperモジュールを使うフル機能ライブラリ。
- [TinyUPnP](https://github.com/ofekp/TinyUPnP) - 8266・32で自動ポートフォワーディングを行う軽量UPnP IGDライブラリ。
- [Esp32SSHClient](https://github.com/J-Rios/Arduino-esp32sshclient) - ESP32でSSHクライアントを実装するライブラリ。
- [painlessMesh](https://github.com/gmag11/painlessMesh) - ESP8266・ESP32ハードウェアを使うシンプルなメッシュネットワークを作る際の細かな処理を担うライブラリ。
- [WifiEspNow](https://github.com/yoursunny/WifiEspNow) - [ESP-NOW](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/network/esp_now.html)（[Espressif](https://github.com/espressif)が定義するコネクションレスWiFi通信プロトコル）向けArduinoライブラリ。
- [go-mcu](https://github.com/matiasinsaurralde/go-mcu) - NodeMCUベースボードと連携するGolangパッケージ。
- [CanAirIO SensorLib](https://github.com/kike-canaries/canairio_sensorlib#canairio-air-quality-sensors-library) - 複数のPM2.5、CO2、環境センサーを自動設定するESP32/8266ライブラリ。
- [Dhyara](https://github.com/neel/dhyara) - ESP Nowを使うモバイルアドホックネットワーク（MANET）用C/C++ライブラリ。
- [LedFx](https://github.com/LedFx/LedFx) - オーディオ入力からリアルタイム照明ショーを作るライブラリ。複数デバイスを制御でき、安価なESP8266ノードで動作。
