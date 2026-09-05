---
title: "Awesome Flying FPV"
description: "Flying FPVを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-Matthias84-awesome-flying-fpv-readme-md"
---

# Awesome Flying FPV

Flying FPVを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

* [機体](#airframes)
  * [マルチコプター 🚁](#multicopters-)
  * [固定翼機／飛行機 🛩️](#fixed-wing--planes-%EF%B8%8F)
  * [VTOL 🚀](#vtols-)
* [バッテリーと電源制御 🔋](#batteries--power-control-)
* [モーター制御 ⚙️](#motor-control-%EF%B8%8F)
* [飛行制御 👨‍✈️](#flight-control-%EF%B8%8F)
* [RC送信機とハンドコントローラー 🎮](#rc-transmitters--handcontroller-)
  * [モジュール 🧩](#modules-)
* [VTX 📺](#vtx-)
* [カメラとジンバル 🎥](#camera--gimbals-)
* [GPS 🛰️](#gps-%EF%B8%8F)
* [センサー 🌡️](#sensors-%EF%B8%8F)
* [映像受信機 📶](#video-receivers-)
* [アンテナとトラッカー 📡](#antennas-and-trackers-)
* [テレメトリーとログ 📊](#telemetry--logs-)
* [ミッション制御と基地局 🗺️](#mission-control--basestation-%EF%B8%8F)
* [コンパニオンコンピューターと統合 💻](#companion-computers--integration-)
* [コンピュータービジョン 🤖](#computer-vision-)
* [完成システム 🎁](#complete-systems-)
* [セキュリティと安全性 🪂](#security--safety-)
  * [シミュレーター 🌐](#simulators-)
  * [チェックリスト 📋](#checklists-)
  * [識別システム 🛂](#id-systems-)
  * [ハッキングと乗っ取り 🔓](#hacking--hijacking-)
* [アクセサリー 🪠](#accesoirs-)
  * [モバイルアプリ 📱](#mobile-apps-)
  * [作業台 🧰](#workbench-)
* [法的情報 🏛️](#legal-information-%EF%B8%8F)
* [コミュニティ 🗣️](#communities-%EF%B8%8F)
  * [フォーラムとソーシャルメディア](#forums-social-media)
  * [動画チャンネル](#video-channels)

## 機体 <a id="airframes"></a>

UAVの機体は航空機の種類と用途に応じて最適化されます。レースの高速性、アクロバット飛行の機動性、撮影用の積載能力、長距離観測などの要件により、機構、材料、DIY手法が異なります。

市販機向けの交換部品や改造・拡張も多数ありますが、ここでは掲載しません。

> **注記**
> 初心者がUAVを一から製作することは、特に時間が限られている場合、**非常に難しい作業**です。
> 早い段階で行き詰まらないよう、まず説明書の整った既存製品やキットを試すのが賢明です。経験を積み、典型的な落とし穴を避けられるようになってから、改造や独自製作に進めます。
> 関連資料: [My Raspberry Pi drone: the story so far by Matchstic](https://www.youtube.com/watch?v=ZCOlT_sz6Gs)。

### マルチコプター 🚁 <a id="multicopters-"></a>

コプターはアルミ・カーボン材、CNC加工部品、完全3Dプリント筐体などで作られ、ローター数に応じて2発から8発まで多様な構成があります。

* [18650 Micro Foldable](https://www.printables.com/model/1081158-18650-micro-foldable-fpv-drone/) - 3D印刷されたマイクロドローンで18分間飛行可能
* [Sub 250g autonomous drone] - 3D printed bare minimum frame with Liion and GPS
* [JeNo 5.1"](https://github.com/WE-are-FPV/JeNo-5.1) - モダンなカーボンワイドXフレームにアクセサリー付き
* [Goblin v3](https://www.printables.com/de/model/396395-goblin-fpv-drone) - 3D印刷フレーム、4S電源、16x16 AIOスタック、2023年版
* [NanoLongRange](https://www.thingiverse.com/thing:4769576) - 3D印刷フレームで主に18650リウム電池とワンインワンボードを搭載したWhoops用、2021年版
  * [Discovery Edition](https://www.thingiverse.com/thing:5428365) - バッテリーホルダーを統合した最適化フレーム、2022年版
  * [NanoLongRange 2](https://www.thingiverse.com/thing:4818009) - GPS搭載で3バリエーションにわたって軽量化、21700電池対応、2021年版
* [NLR35](https://www.thingiverse.com/thing:5428923) - 軽量でNLRに類似、しかし21700電池対応、2022年版
* [hefty](https://hackaday.com/2023/09/01/hefty-3d-printed-quadcopter-meets-nasty-end/) - 完全な3D印刷ヘビークワッドコプターでカスタムモーター搭載、2023年版
* [Ultimate 3D printable Cinewhoop](https://www.thingiverse.com/thing:4502805) - 2020年版
* [TinyTina](https://blog.prusaprinters.org/how-to-build-a-3d-printed-micro-drone_29310/) - 3D印刷されたWhoops、2018年版
* [Heavy Lift Quadcopter Frame](https://www.thingiverse.com/thing:4089842) - カーボンでCNC加工、2020年版
* [The CogniFly](https://thecognifly.github.io) - 研究・群飛・室内用に適した強靭なフレーム、RPIコンパニオンコンピュータ搭載、2021年版
* [TBS Source One](https://github.com/tbs-trappy/source_one) - カーボンレーシングフレーム、5回の改訂、2021年版
* [TBS Source Two](https://www.team-blacksheep.com/products/prod:source_two_5in) - カーボンレーシングフレーム、2019年版
* [TBS Source Podracer](https://github.com/ps915/source_podracer) - 3D印刷カーボンレーシングフレーム、2020年版
* [TBS Source V](https://www.team-blacksheep.com/products/prod:source_v) - 5"カーボンレーシングフレーム、2021年版
* [TBS Source X](https://github.com/ps915/source_x) - カーボンレーシングフレーム、2019年版
* [AESIR II](https://www.thingiverse.com/thing:4868250) - モジュール型かつカスタマイズ可能な3Dおよびカーボンフレーム、2021年版
* [Foldable Drone Frame](https://www.thingiverse.com/thing:2004357) - ギンバルオプション付き3D印刷、2017年版
* [OpenRC Quadcopter](https://www.thingiverse.com/thing:793425) - 閉じたケース付き3D印刷、2015年版
* [Hovership MHQ2](https://www.thingiverse.com/thing:511668) - 3D印刷可折式、2014年
* [Crossfire 2](https://www.thingiverse.com/thing:234867) - 大きな四軸3D印刷、2014年
* [Spyda 500](https://www.thingiverse.com/thing:160607) - 大きな四軸3D印刷、2013年

### 固定翼機／飛行機 🛩️ <a id="fixed-wing--planes-️"></a>

従来のRC飛行機はバルサ材と被覆材で翼を作ります。市販機ではフォーム材が多く、CNCやレーザーで翼型を切り出せます。軽量PLAによる完全3Dプリント機のコミュニティも成長しています。 参考: [Craycle Hobby](https://craycle.com/)、[Eclipson airplanes](https://www.eclipson-airplanes.com/)、[3D lab print](https://3dlabprint.com/product-category/printable-airplanes/)、[Plane Print](https://www.planeprint.com/)、[OWLplane](https://owlplane.com/)、[rc-jetprint.de](https://rc-jetprint.de/en/)

* [Titandynamics Tornado v2](https://titandynamics.aero/free/p/tornado-v2) - 3D印刷1mモジュラー二モーター輸送機飛行機
* [Merlin V2](https://www.youtube.com/watch?v=HT0NLQdX7Ak) - 3D印刷2.5m高効率長距離二モーター輸送機飛行機
* [HAWk Modular RC Wing Airplane v1](https://www.printables.com/de/model/422806-hawk-modular-rc-wing-airplane) - 3D印刷LW-PLA 1m++プッシュ/プル翼、完全BOM＋マニュアル資料、2023年
* [V-Tail Aircraft for Long Range FPV & Autonomous Missions - by AeroStuff FPV](https://www.youtube.com/watch?v=sTjXVeo_lpQ) - 折りたたみ式デプロンパネルを体と翼に使用し、Vタールプッシュ構成
* [Highly Modular Design -1 (HMD1)](https://forum.flitetest.com/index.php?threads/large-modular-uav-design.69987/) - 3D印刷ABSVタール飛行機（研究用）、2022年
* [Ranger V2](https://craycle.com/product/ranger-v2-800-mm-3ch-trainer-stl-file/) - 1m未満プッシュトレーナー飛行機、2及2022年
* [Berkik 3 wing](https://www.youtube.com/watch?v=ZA8fGOzJB10) - 1.3mデプロン翼、2021年
* [LukiSegler](https://www.printables.com/de/model/76098-lukisegler-electric-rc-glider) - グライダー、2021年
* [SakhWing](https://www.thingiverse.com/thing:4547317) - PETGで印刷されたドラク風固定翼、2020年
* [GemINIce](https://www.youtube.com/watch?v=PcScS4Cj_Iw&list=PLEH_vTrFddgP8bRQFMK_z8rwmRth60Fen) - 2モーターデプロン飛行機、2016年
* [Joywing](https://www.youtube.com/watch?app=desktop&v=X6hJCQNxVzs) - シンプルなレース翼、2019年
* [Eclipson Model V](https://www.thingiverse.com/thing:4011218) - 主に3D印刷された車輪付き商業飛行機、2019年
* [Eclipson Model Y](https://www.thingiverse.com/thing:2752892) - 主に3D印刷された車輪付き商業飛行機、2018年
* [Northern Pike](https://www.thingiverse.com/thing:3040294) - 36"固定翼3D印刷、2018年
* [Moose](https://www.thingiverse.com/thing:3023606) - PLA製1mプルタイプ飛行機、2018年
* [Supernove](https://www.thingiverse.com/thing:2187747) - ジェット風プッシュタイプRC飛行機
* [RC Flying Wing](https://www.thingiverse.com/thing:2044074) - 1m未満3D印刷プッシュタイプ飛行機、2017年
* [GASB Three](https://www.thingiverse.com/thing:3605665) - 固定翼3D印刷、2019年。
* [GASB Two](https://www.thingiverse.com/thing:1831295) - 固定翼ジェットで電動ダクトファン（EDF）を従来のプロペラに代用、2016年。
* [GASB One](https://www.thingiverse.com/thing:1659724) - 80cm固定翼3D印刷、6回の改訂を経て開発、2016年。
* [Red swan](https://www.thingiverse.com/thing:453090) - 1950mmの印刷された飛行機、翼肋を備え、Red Duckモデルの後継機、2014年。
* [Le Fish glider](https://lefish.fandom.com/wiki/Building_Le_Fish#Plans) - オープンソースの空中戦闘グリダーモデルで多くのリミックスが存在、2005年。

### VTOL 🚀 <a id="vtols-"></a>

垂直離着陸機はコプター形態から滑空する翼へ移行します。離着陸は容易ですが、固定翼機より機構が複雑で重くなります。

* [Vorian tilt-rotor quad](https://rotorbuilds.com/build/35240) - 複合素材による4プロペラの傾き設計
* [Squirrel design](https://jgkang1210.github.io/fsdrone) - クワッドとバットの混合スタイルで、膜を用いた滑空設計。
* [MiniHawk-VTOL v2.0](https://github.com/StephenCarlson/MiniHawk-VTOL) - 3プロペラで3D印刷。
* [VTOL in 5 revisions](https://www.youtube.com/watch?v=gPEeCjVrTBw) - 3D印刷とフォーム、2018年。
  * [wing profile](https://www.printables.com/de/model/261434-vase-mode-wing) - 結果として得られる翼プロファイルの3D印刷（LW-PLA）。
* [bicopter kit](https://hackaday.com/2018/08/27/the-best-new-quad-is-a-bicopter/) - CNC炭素、2018年。

## バッテリーと電源制御 🔋 <a id="batteries--power-control-"></a>

RCでは市販LiPoパックが一般的ですが、18650セルを使った自作Li-ionパックにも置き換えられます。機上電源バスはESCとFCを直接駆動し、各機器向けの5V出力も供給します。

* 18650 Li-ionバッテリーパック
  * [Using Li-Ion Battery Pack for Long Range FPV Flying](https://oscarliang.com/li-ion-battery-long-range/) - 4Sおよび背景情報、2023年。
  * [build a „LongRange“ Lithium Ion Battery](https://blog.seidel-philipp.de/diy-build-a-longrange-lithium-ion-battery/) - 4S 3000mAh、2020年。
  * [DIY FPV Goggle Battery Pack](https://nuxnik.com/diy-fpv-goggle-battery-pack/) - Google向けに充電計測器と3Dケースを備え、2021年。
  * [18650 spaceholder](https://www.printables.com/de/model/1181-18650-improved-spacerholder) - パッケージのための3D印刷、2023年。
* ソーラー飛行機
  * [Solar Dragon - Solar Plane Might Be Able To Last Through The Night](https://hackaday.com/2022/08/06/solar-plane-might-be-able-to-last-through-the-night/) - 太陽電池を備えた飛行機、2022年。
  * [rctestflight series](https://www.youtube.com/watch?v=1OGrDvInUAY) - 8時間30分の固定翼で太陽電池が豊富に配置され、測定値および背景情報が詳しい（[might last 24hrs](https://hackaday.com/2022/09/27/24-hours-of-le-airplanes/)）、2022年。
* [diyBMS v4](https://github.com/stuartpittaway/diyBMSv4) - リチウムイオンバッテリー用のバッテリーマネジメントPCBおよびファームウェア。


## モーター制御 ⚙️ <a id="motor-control-️"></a>

出力と制御精度に優れるブラシレスDCモーター（BLDC）が一般的で、各モーターに電子速度制御器（ESC）が必要です。

* [BLheli_S](https://github.com/bitdump/BLHeli) - ESC用の人気ファームウェアで細かい制御を可能に。
* [BlueJay](https://github.com/mathiasvr/bluejay) - BLheli fork、ブレードレスモーターを制御するデジタルESCファームウェア。カスタムメロディなどの追加機能も備えている。2020年から。
* [AM32-MultiRotor-ESC-FW](https://github.com/am32-firmware/AM32) - DSHOT、テレメトリ、2024
* [MESC FOC ESC](https://github.com/davidmolony/MESC_FOC_ESC) - STM32ベースのESC向けオープンハードウェアとファームウェア
* [ESC Configurator](https://github.com/stylesuxx/esc-configurator) - BLHeli／Bluejay ESCの設定を行うウェブアプリ
* [PIDtoolbox](https://github.com/bw1129/PIDtoolbox) - 特定のモデル用にPID設定をチューニングし、最高性能を実現

## 飛行制御 👨‍✈️ <a id="flight-control-️"></a>

現代の自動操縦ソフトウェアはSTM32 F4/F7世代の基板を必要とし、NAZE32やCC3Dなど旧世代基板の対応は縮小しています。多くはBaseflight／Cleanflight系ファームウェアとデスクトップ設定ツールを基盤とします。

* [INAV](https://github.com/light/inav) - 翼機とコプター向けのGPSベースの飛行計画／自律飛行に焦点
* [betaflight](https://github.com/betaflight/betaflight) - 翼機とコプター向けのレーシングおよび敏捷性に焦点
* [EmuFlight](https://github.com/emuflight/EmuFlight) - 現代的なアルゴリズムに焦点
* [dRonin](https://github.com/d-ronin/dronin/) - Openpilotおよびその他のターゲットボードとの対応
* [Ardupilot](https://ardupilot.org) - 翼機とコプター、さらには陸上・水上車両を含むプロフェッショナル／研究用途を含む完全なエコシステム。多くの情報・経験・可能性があるが、INAVよりも複雑である
* [dRehmflight](https://github.com/nickrehm/dRehmFlight) - VTOL向けに特化し、飛行過程における変換を扱う。Teensyボードのみ。
* [Rotorflight](https://github.com/rotorflight/rotorflight) - 従来の単一回転機のヘリコプター向けファームウェア
* [HPR-Rocket-Flight-Computer](https://github.com/SparkyVT/HPR-Rocket-Flight-Computer) - 高速ロケット向けファームウェア
* [CleanFlight](https://github.com/cleanflight/cleanflight) - baseflightのlegacy fork、スタル
* [BaseFlight](https://github.com/multiwii/baseflight) - Wiiギロースのハックや8ビット時代の古いファームウェア、スタル
* [QUICKSILVER firmware](https://github.com/BossHobby/QUICKSILVER) - ?
* [Paparazzi UAV](https://github.com/paparazzi/paparazzi) - ?
* [LibrePilot](https://github.com/librepilot/LibrePilot) - 2018年からスタル
* [madflight](https://github.com/qqqlab/madflight) - Arduinoベースのターゲットボード向け、異なるセンサーをサポート、2024
* [The Cube Autopilot](https://github.com/proficnc/The-Cube) - Pixhawk 2のようなFCハードウェア
* [Risc V Powering a 3D Printed Drone](https://www.youtube.com/watch?v=TJCeLOiP7lU) - DIY四軸飛行機向けのRISCV CPU実験

## RC送信機とハンドコントローラー 🎮 <a id="rc-transmitters--handcontroller-"></a>

RC送信機（操縦者側）はJR／JR Lite形式の拡張ベイとシリアルインターフェースを備え、各種無線プロトコルへ対応できます。地上局の節も参照してください。 参考: [JR / JR lite formfactor](https://github.com/pascallanger/DIY-Multiprotocol-TX-Module/blob/master/docs/Module_BG_4-in-1.md)
多くの受信機（機体側）はCrossfire（CRSF）などの標準シリアルプロトコルでFCと通信します。

* [EdgeTX](https://github.com/EdgeTX/edgetx) - OpenTXの継承プロジェクトで積極的に開発中
* [freedomTX](https://github.com/tbs-fpv/freedomtx) - OpenTXのフォークだが2020年以降開発が停止

* [OpenTX](https://github.com/opentx/opentx) - 人気のハンドトランスミッタ（デスクトップマネージャー、サウンドパックを含む）向けのファームウェア
* [inav-opentx-sounds](https://github.com/JyeSmith/inav-opentx-sounds) - モード用の追加サウンド
* [transmitter-sound-pack](https://inavfixedwinggroup.com/guides/transmitter-models/transmitter-sound-pack/) - INAVのサウンドと翼用の完全な設定ファイル
* [VTx](https://github.com/teckel12/VTx) - 簡易化されたBetaflight LuaスクリプトでVTXのみを制御
* [betaflight-tx-lua-scripts](https://github.com/Matze-Jung/betaflight-tx-lua-scripts) - 拡張されたBF Luaスクリプト
* [opentx-lua-widgets](https://github.com/Matze-Jung/opentx-lua-widgets) - より多くのUIウィジェットでテレメトリを表示
* [opentx-lua-running-graphs](https://github.com/Matze-Jung/opentx-lua-running-graphs) - より多くの視覚グラフをウィジェットとして提供
* [OpenTX-Pong](https://github.com/SpechtD/OpenTX-Pong) - TXに搭載可能なシンプルなゲーム
* [ELRS-Joystick-Control](https://github.com/kaack/elrs-joystick-control) - ELRSモジュールをGCSに直接接続し、ジョイスティックで操作
* [Arduino Transmitter for ELRS](https://github.com/kkbin505/Arduino-Transmitter-for-ELRS) - Arduinoをベースにしたシンプルなゲームパッド型ハンドトランスミッタ
* [OpenAVRc](https://github.com/Ingwie/OpenAVRc_Hw) - Arduino Mega2506ボードをベースにしたカスタムTX
* [ER9X](http://www.er9x.com) - 9XRハンドトランスミッタ用の代替ファームウェア

### モジュール 🧩 <a id="modules-"></a>

独自の無線リンクを構築するハードウェアとファームウェアです。現在は一般に双方向通信で、送信側と受信側の両方を扱います。

* [Multi Module](https://github.com/pascallanger/DIY-Multiprotocol-TX-Module) - フレスキー、フライスキー、ウォーカーラ、フタバなど、さまざまなプロトコルに対応
* [ExpressLRS](https://github.com/ExpressLRS/ExpressLRS) - 長距離通信または遅延を改善するELRS対応。既存ハードウェアのフラッシュもサポートし、868/915MHzまたは2.4/5.8GHz用の販売用モジュールも提供
  * [ELRS Airport Firmware](https://github.com/ExpressLRS/ExpressLRS/pull/1904) - 2方向通信による複雑なテレメトリダウンリンクを実現
* [mLRS](https://github.com/olliw42/mLRS) - MAVLINK対応LRS
* [openLRSng](https://github.com/openLRSng/openLRSng) - OpenLRSの次世代プロジェクトだが2018年以降開発が停止
* [Raven LRS](https://github.com/RavenLRS/raven) - LoRaベース、2019年
* [OpenSky](https://fishpepper.de/projects/opensky/) - FrSkyモジュール用の代替ファームウェア、2016年。
* [DeviationTX](https://deviationtx.com/) - Walkera用の代替ファームウェア、2016年。

## VTX 📺 <a id="vtx-"></a>

映像送信機（VTX）は機体の前方カメラ映像をFPV用に送るアナログまたはデジタル送信機です。任意データの伝送や、制御上り回線を含む地上局との双方向リンクにも利用できます。

* [OpenHD](https://github.com/OpenHD/Open.HD) - 機上・地上の2.4／5.8 GHz Wi-Fi機器とSBCを使い、映像・テレメトリーのダウンリンクと任意の制御アップリンクを提供し、専用ハードウェア基板の効率化も目指します。 [Compare different open digital links](https://openhd.gitbook.io/open-hd/general/openhd-vs-alternatives)
* [RubyFPV](https://rubyfpv.com) - 2.4GHz／5.8GHz Wi-FiハードウェアとRPIを用いて、ビデオおよびテレメトリのダウンリンクを提供し、オプションでコントロールのアップリンクも実現。ソースコードは提供されていないが、プラグインシステムを採用。
* [Wifibroadcast NG](https://github.com/svpcom/wifibroadcast) - 2.4GHz／5.8GHz Wi-FiハードウェアとRPIを用いて、ビデオおよびテレメトリのダウンリンクを提供。
* [wfb-ng on OpenIPC](https://github.com/OpenIPC/sandbox-fpv) - OpenIPC互換のCCTVモジュールに搭載されたWifibroadcast NG、120fpsまたは4kビデオ配信とテレメトリを可能とする。既存の各ベンダーから販売されている商用キット（例：EMAX Wyvern Link、Runcam Wifilink）。
* [DroneBridge](https://github.com/DroneBridge/DroneBridge) - 2.4 GHz Wi-Fi機器、Raspberry Pi、ESP32、Androidアプリを使う双方向通信リンクです。 [Comparison](https://dronebridge.gitbook.io/docs/comparison)
* [EZ Wifibroadcast](https://github.com/rodizio1/EZ-WifiBroadcast) - 最も古いおよび最初のWi-FiベースのVTXセットアップ。
* [hx-esp32-cam-fpv](https://github.com/RomanLut/hx-esp32-cam-fpv)- Cheap ESPcam boards transimitting MJPEG frames.
* [wtfos](https://github.com/fpv-wtf/wtfos) - DJI FPV送信機および受信機のルート化とモジュール化。
* [DigiView-SBC](https://github.com/fpvout/DigiView-SBC) - DJI HD信号を受信、2021年alpha版。
* [OpenVTx](https://github.com/OpenVTx/OpenVTx) - オープンハードウェアアナログVTX用の無料ファームウェア。
* [VTX Power Measure](https://github.com/mrRobot62/vtx_power_measure) - Immersion RF-Meter V2のPythonスクリプト化。

## カメラとジンバル 🎥 <a id="camera--gimbals-"></a>

カメラは機上VTXへ映像を送り、または高画質DVRとして録画します。複数のカメラ構成に対応する独自システムはVTX節も参照してください。

* [Gyroflow](https://github.com/gyroflow/gyroflow) - IMUセンサデータを用いてHDビデオ記録をスムーズに。
* [OpenHD on thermal cameras](https://openhd.gitbook.io/open-hd/hardware/cameras) - RPIを用いてこのセンサを読み取る方法。
* [TetraPI](https://github.com/bluegreen-labs/TetraPi) - マルチスペクトラムRPIベースのカメラモジュール。
* [opentrack](https://github.com/opentrack/opentrack) - FPVゴーグルまたはVRヘッドセットの統合トラッカーを入力として使用。
* [RC Headtracker](https://github.com/dlktdr/HeadTracker) - ゴーグルを回すとカメラのギンバルも回るようにする。ArduinoおよびBluetoothをベースに。
* [STORM32BGC](https://github.com/olliw42/storm32bgc) - ファームウェアおよびブラシレスギンバル制御器。
* [Open Brushless Gimbal](https://www.thingiverse.com/thing:110731) - 2013年。

## GPS 🛰️ <a id="gps-️"></a>

GPSなどの全球測位衛星システムで機体の現在位置を特定できます。民生GPSモジュールは安価で、後処理またはリアルタイム処理により精度を高められるものもあります。

* [GNSS SDR](https://gnss-sdr.org) - GPS、バイドゥ、GLONASSの受信されたラジオ信号を処理するためのソフトウェアツールチェーン。
* [rtklib](https://www.rtklib.com) - SDRハードウェアラジオバックエンドで受信されたGNSS信号の精度を高めるためのソフトウェアツ連携。リアルタイムまたは後処理により干渉を除去。SDRまたは一部の商用GPSモジュールで記録された信号。
* [Vicon MavLink](https://github.com/bo-rc/ViconMAVLink) - 商業用光学システムを用いて、ドローン全体のスワームにインダストリーポジショニングを実現。

## センサー 🌡️ <a id="sensors-️"></a>

ドローンはコンパス、気圧、高度、対気速度、電流などのセンサーを使い、位置推定やシステム性能の表示を改善します。

* [QLiteOSD](https://github.com/Qrome/QLiteOSD) - ESP32をベースにしたOSDで、FCなしでセンサを読み取る
* [3D Printed Drone Build - How to Wire OpenHD and Ultrasonic Abstacle Avoidance](https://www.youtube.com/watch?v=HNR1mqUDpoE) - 四軸飛行機向け超音波障害回避とOpenHDチームプレイ

ほかの例は[Ardupilot - Optional hardware](https://ardupilot.org/copter/docs/common-optional-hardware.html)を参照してください。

## 映像受信機 📶 <a id="video-receivers-"></a>

FPVゴーグルは各種無線プロトコル用のモジュールベイやHDMI入力を備えます。独自のカメラ構成についてはVTX節も参照してください。

* [DIY Homemade FPV Monitor](https://hackaday.io/project/160893-diy-homemade-fpv-monitor) - 5,8GHzアナログ表示用の多様性機能
* [FENIX-rx5808-pro-diversity](https://github.com/JyeSmith/FENIX-rx5808-pro-diversity) - Google向けオープンハードウェア5,8GHzアナログモジュール（多様性機能）
  * [rx5808 pro divesity](https://github.com/sheaivey/rx5808-pro-diversity)
* [rpi-rx5808-stream](https://github.com/xythobuz/rpi-rx5808-stream) - RPIベースの5,8GHzアナログ多様性ストリーミングサーバー

## アンテナとトラッカー 📡 <a id="antennas-and-trackers-"></a>

送受信機は独自アンテナ構成で改良でき、トラッカーは指向性アンテナを機体へ向け続けます。複数受信機のダイバーシティやテレメトリーを利用します。
これは主に目視外飛行向けの専門機材で、初心者には不要です。映像・制御リンクをさらに延長するため4Gを使う手法もあります。

* [u360gts](https://github.com/raul-ortega/u360gts/) - F2/F3制御器を用いた360°モーター追跡（ファームウェア＋ハードウェア＋ケース、2020年）
* [AntTracker](https://github.com/zs6buj/AntTracker) - F1／ESP8260／ESP32制御器を用いたサーボベース、2019年
* [open360tracker v2](https://www.thingiverse.com/thing:2568906) - シンプルな設計、すべての部品が回転ヘッド内に収められている
* [open360tracker](https://github.com/SamuelBrucksch/open360tracker) - 360°サーボ追跡、2016年
  * [Amv-open360tracker](https://github.com/raul-ortega/amv-open360tracker) - フォーク2016年
  * [Amv-open360tracker 36bit](https://github.com/ericyao2013/amv-open360tracker-32bits) - フォーク2016年
* [Ghettostation Antenna Tracker](https://www.thingiverse.com/thing:547358) - 異なるフォーク2014年
* [DIY Helical Antenna For Long Range FPV](https://www.youtube.com/watch?v=aH0cW9XJ4D4) - 5,8GHzハリル方向アンテナ（アナログGoogle用）3Dプリントフレーム付き
* [Cloverleaf Antenna - Build Instructions](https://www.youtube.com/watch?v=JGm9ESx4yzE)- 5.8GHz omnidirectional antenna for analog video transmission.

## テレメトリーとログ 📊 <a id="telemetry--logs-"></a>

センサー値と制御情報は一般的なシリアルプロトコルで共有され、FC内蔵SDカードへブラックボックスとして記録したり、送信機や地上局へ転送したりできます。紛失機の探索、PID調整、飛行挙動の解析に有用です。

* [MAVlink](https://github.com/mavlink/mavlink) - ハブビーストの開発者たちによる現代的な拡張可能なプロトコル…商用UAV
* [Cyphal](https://opencyphal.org) - Fka. UAVCAN工業用ドローンバスシステム
* [YAMSPy](https://github.com/thecognifly/YAMSPy) - PythonでMSPシリアルプロトコルを読み取る
* [LuaTelemetry](https://github.com/teckel12/LuaTelemetry) - OpenTX／EdgeTXスクリプトで、テレメトリデータストリームからライブコックピットとマップを描画
* [betaflight-tx-lua-scripts](https://github.com/betaflight/betaflight-tx-lua-scripts) - テレメトリと制御（例：CAM、VTX設定）を表示するスクリプト
* [otxtelemetry](https://github.com/olliw42/otxtelemetry) - OpenTX／EdgeTXスクリプトでMAVLINKサポートを追加
* [INAV blackbox viewer](https://github.com/iNavFlight/blackbox-log-viewer) - センサ／モーターの値をビデオオーバーレイOSDとして描画
* [INAV blackbox tools](https://github.com/iNavFlight/blackbox-tools) - CSVタイムシリーズファイルに変換するか、またはビデオファイルとの同期再生時にOSDとして表示する。
* [flightlog2x](https://github.com/stronnag/bbl2kml) - INAVやOpenTXなどのブラックボックスログをCSV、GPX、KMLへ変換し、複数の表示形式で飛行経路と軌跡を描画します。 [GUI](https://github.com/stronnag/fl2xui)
* [UAVLogViewer](https://github.com/ardupilot/uavlogviewer) - アルドピロットログ用のウェブアプリケーション。
* [OSD-subtitles](https://github.com/kristjanbjarni/osd-subtitles) - ブラックボックスログをビデオファイルとの同期再生時にOSDとして字幕として表示。
* [Dashware](http://www.dashware.net/dashware-download/) - ブラックボックスログ用のクローズソースOSD表示。
* [PID-Analyzer](https://github.com/Plasmatree/PID-Analyzer) - ブラックボックスログを読み込み、PID制御変数を調整する。
* [openXsensor](https://github.com/openXsensor/openXsensor) - テレメトリプロトコルを変換および変更する。
* [OpenLog](https://github.com/sparkfun/OpenLog) - ブラックボックスデータレコーダー用の[blackbox](https://github.com/thenickdude/blackbox/)ファームウェアに対応します。現在この記録機能は通常、メインのフライトコントローラーへ組み込まれています。

## ミッション制御と基地局 🗺️ <a id="mission-control--basestation-️"></a>

ノートPCやタブレット上の地上管制局（GCS）は、長距離・長時間飛行で飛行パラメーターと位置を俯瞰し、ミッションを管理します。 参考: [Ardupilot.org - Choosing GCS](https://ardupilot.org/copter/docs/common-choosing-a-ground-station.html)

* [mwptools](https://github.com/stronnag/mwptools) - ポイントミッションプランナー（特にINAV用）に加えて、INAVレーダーおよびADS-Bソースを含む。
* [APM Planner 2.0](https://ardupilot.org/planner2/) - MPおよびQ GroundControlの経験に基づくMAVLINK対応。
* [QGroundControl](https://github.com/mavlink/qgroundcontrol) - MAVLINK、デスクトップおよびモバイル対応。
* [MissionPlanner](https://ardupilot.org/planner/index.html) - ポイントミッションプランナー（特にアルドピロット用）。
* [MAVProxy](https://ardupilot.org/mavproxy/) - コマンドラインおよびGUIによるミッションプランナー、テレメトリビュー、プロセッサ。
* [BulletGCSS](https://github.com/danarrib/BulletGCSS) - GSMおよびMQTTを使用して長距離通信を実現。
* [Dreka GCS](https://github.com/Midgrad/Dreka) - 新しいGCS（現在は限定されているが、より現代的な見た目と体験）。

## コンパニオンコンピューターと統合 💻 <a id="companion-computers--integration-"></a>

FCが機動のリアルタイム制御を担う一方、追加コンピューターは複雑なデータ処理能力を提供します。 参考: [Arudpilot.org - Companion Computers](https://ardupilot.org/dev/docs/companion-computers.html)

* [öchìn CM4](https://github.com/ochin-space/ochin-CM4) - FC用のRPIコンピュートモジュール専用のキャリアボード。
* [APsync](https://ardupilot.org/dev/docs/apsync-intro.html) - 異なるSBC向けのMAVLINK焦点のOS。
* [RPanion](https://www.docs.rpanion.com/software/rpanion-server) - 異なるRPI向けのMAVL-INK焦点のイメージ。
* [ROS](https://github.com/ros/ros) - ロボット運営システム（ROS）を用いて、より複雑でインタラクティブな飛行を扱う。
* [DroneKit](https://github.com/dronekit/dronekit-python) - マルチプラットフォーム統合エコシステム（MAVLINK無線リンクを含む）。

## コンピュータービジョン 🤖 <a id="computer-vision-"></a>

コンピュータービジョンはUAVのライブ映像や録画を処理し、航空地図作成や機械学習による飛行計画に利用されます。 参考: [UAV Mapping Guidelines](https://uav-guidelines.openaerialmap.org/)

* [OpenDroneMap](https://www.opendronemap.org/) - 写真を接合して空中画像を作成し、3Dモデルを計算するなど。
* [OpenAerialMap](https://github.com/hotosm/OpenAerialMap/) - 災害対応などにドローン撮影を共有する。
* [DroneDB](https://github.com/DroneDB/DroneDB) - ドローン撮影データと空中画像を保存・アーカイブする
* [OpenAthena](https://github.com/mkrupczak3/OpenAthena) - マーカーを用いた自動GCP検出
* [OpenMMS](https://www.openmms.org/) - ラズパイを搭載したモバイルマッピングシステム
* [BANet](https://github.com/lironui/BANet) - 空中画像用の領域の機械学習によるセグメンテーション
* [AVCBet](https://github.com/lironui/ABCNet) - 空中画像用の領域の機械学習によるセグメンテーション
* [Faster](https://github.com/mit-acl/faster) - ドローンが障害物を回避するように機械学習する
* [Fast-Planner](https://github.com/HKUST-Aerial-Robotics/Fast-Planner) - コース上の障害物を回避するようにドローンを学習する
* [Autonomous Drone Dodges Obstacles Without GPS](https://hackaday.com/2021/11/03/autonomous-drone-dodges-obstacles-without-gps/) - RPIベースの画像処理とルート計画および障害物回避
* [Drone-net](https://github.com/chuanenlin/drone-net) - YOLO v4を用いた写真／動画内の四軸ドローンの検出
* [Anti-UAV](https://github.com/ZhaoJ9014/Anti-UAV) - IR／RGB動画内の四軸ドローンの検出
* [Fire Detection UAV](https://github.com/AlirezaShamsoshoara/Fire-Detection-UAV-Aerial-Image-Classification-Segmentation-UnmannedAerialVehicle) - ドローンが火を認識するように機械学習する
* [DroneAid](https://github.com/Call-for-Code/DroneAid) - 災害対応時に緊急マーカーを用いて人物を検出
* [AirPose](https://github.com/robot-perception-group/AirPose) - ドローン視点からの人間のポーズ推定
* [AruCo landing](https://github.com/radekholy24/aruco-landing) - ドローンがマーカー位置に着陸するためのML ROSアドオン


## 完成システム 🎁 <a id="complete-systems-"></a>

特定用途を支援する専用ドローンとツールチェーンです。

* [Sonora Medical Delivery Planes](https://www.peanutbuttertunaspoon.org) - RC航空機を用いてメキシコの荒野に医療キットを運搬
* [Guiness World record fastest drone build](https://www.youtube.com/watch?v=L_O45iEar4M) - 特定用途向けのUAV完成システムまたは統合ツールチェーンです。 [AOSHS5 build](https://www.youtube.com/watch?v=oG2GaSMlfdo)
* [Guiness World record endurance drone build](https://www.youtube.com/watch?v=1lfVKcKQ5BI) - 巨大四軸ドローンが3時間12分飛行
* [Arduino FPV Mini Drone](https://www.instructables.com/Make-a-Tiny-Arduino-Drone-With-FPV-Camera/) - 木製のミニ四軸ドローンでBLDCなし、MultiWII用のカスタムRFリンク
* [SearchWing](https://www.hs-augsburg.de/searchwing/de/willkommen/) - EUの海沿いの難民船から人々を救出するための、大面積の視覚検査を可能にするRC救出航空機。陸上に着陸できる防水構造を持つ。
* [Dronecoria](https://dronecoria.org) - 木製の八軸ドローンを用いた重い荷物の投下（種子の投下）
* [Agilicious](https://agilicious.dev) - 2023年の3D印刷OSHWドローンと生態系。特に画像認識による自律的な敏捷飛行研究に適したもの
* [Crazyflie](https://www.bitcraze.io/documentation/system/platform/) - FPVとは言えないドローンで、カスタムモジュールと異なる技術を用いて群集制御を行うもの
* [ESP-Drone](https://github.com/Circuit-Digest/ESP-Drone) - ブラシレスモーターを用いたFPVなしのESP32とPCBベースの四軸、しかしカスタムWi-Fiを搭載
* [ESP32 Drone](https://hackaday.io/project/188578-esp32-drone) - 伝統的なFPVはなし、しかし低コストの四軸をESP32ボードで実現、2022年
* [Wifree-copter](https://open-diy-projects.com/wifree-copter/) - アプリとRPIを用いた簡単な3D印刷四軸、Wi-Fiリモコン、2016年

## セキュリティと安全性 🪂 <a id="security--safety-"></a>

### シミュレーター 🌐 <a id="simulators-"></a>

実機を損傷する前に、送信機を使った仮想飛行で典型的な失敗を避ける訓練ができます。自動操縦を管理された環境で試験・比較する用途にも使えます。

一般消費者向けの訓練シミュレーターには商用製品が多く、LinuxやmacOSでも利用できる製品があります。 参考: [Freerider Recarged](https://fpv-freerider.itch.io/fpv-freerider-recharged)、[Liftoff](https://store.steampowered.com/app/410340/Liftoff_FPV_Drone_Racing/)、[DRL Sim](https://thedroneracingleague.com/drlsim/)、[Velocidrone](https://www.velocidrone.com/)

* [crrcsim](https://sourceforge.net/projects/crrcsim/) - RC飛行機用、2018年
* [Picasim](https://github.com/Rowlhouse/PicaSim) - RC飛行機用、クローズソース、SSSの後継品
* FlightGear - Usually for big airplanes, but can be paired with FC good description [from PaparazziUAV](https://wiki.paparazziuav.org/wiki/FlightGear) or [by Arduplane](https://ardupilot.org/dev/docs/simulation-2.html) for simulation.
* [AirSim](https://github.com/microsoft/AirSim) - マイクロソフトがアルゴリズムテスト用に開発
* [jMAVSim](https://github.com/PX4/jMAVSim) - MAVLINK用
* [JSBsim](https://github.com/JSBSim-Team/jsbsim) - Python、Matlabとの接続を提供
* [GAZEBOsim](https://github.com/gazebosim/gz-sim) - マルチロボット
* ROS supports simulations like described [by PX4](https://docs.px4.io/master/en/ros/ros2_comm.html).

### チェックリスト 📋 <a id="checklists-"></a>

故障や機体事故は深刻な損害につながります。不要な危険を避け、保険利用時の記録を残すため、各飛行で段階的な手順と文書化が不可欠です。

#### 組み立て後の通電確認 <a id="build-power-check"></a>

#### 初飛行前の確認 <a id="maiden-flight-check"></a>

* [iNav Pre-maiden Checklist](https://www.mrd-rc.com/tutorials-tools-and-testing/flight-controller-therapy/inav-pre-maiden-checklist-a-helpful-reminder-and-saver-of-foam/) by Mr.D for fixed wing

#### 通常飛行前の確認 <a id="regular-flight-check"></a>

* [Ardupilot Copter Checklist](https://ardupilot.org/copter/docs/checklist.html).

### 識別システム 🛂 <a id="id-systems-"></a>

空域はほかの操縦者と共有されています。RC機は発見しにくいため、トランスポンダーで位置を共有することが推奨され、不正飛行の追跡にも役立ちます。

* ADS-B transmitters of airplanes can be received using software defined radios can be realized using cheap USB DVB-T receivers. Can be integrated via radar extensions like [mwp-radar-view](https://github.com/stronnag/mwptools/wiki/mwp-Radar-View), [Ardupilot ADS-B receiver](https://ardupilot.org/copter/docs/common-ads-b-receiver.html) or in OpenHD. Is part of Mavlink protocol and shows up on most GCS.  Can also be viewed online like [adsb-exchange.com](https://globe.adsbexchange.com/).
* [INAV Radar](https://github.com/OlivierC-FR/ESP32-INAV-Radar) - LORAラジオとESP32で位置をブロードキャストし、OSDに表示
* [FormationFlight](https://formationflight.org/getting-started/) - ESP32のWi-Fiラジオで位置とテレメトリをブロードキャストし、OSDに表示
* [SoftRF](https://github.com/Matthias84/awesome-flying-fpv/blob/2d1764ddf480e27f013efaab4b4be19047ada99c/hhttps:/github.com/lyusupov/SoftRF/wiki/Nano-Edition) - ナノエディション、FLARMやその他もサポート
* [Glidernet](https://www.glidernet.org) - FLARM／ADS-Bの位置をオンラインで共有
* [Opensky Network](https://opensky-network.org) - ADS-Bの位置をオンラインで共有
* [Stratux](https://github.com/stratux/stratux) - 異なるラジオ送信機を介して位置と航路を共有
* [ArduPilot RemoteID Transmitter](https://github.com/ArduPilot/ArduRemoteID) - FCC RemoteIDとMAVLINK、DroneCANの統合
* [WiFi RID capture](https://github.com/sxjack/unix_rid_capture) - リモート識別信号をスニッフィングでキャプチャ
* [Drone Detection and Tracking Using RF Identification Signals ](https://www.mdpi.com/1424-8220/23/17/7650) - Wi-FiとKISMETスニッフィングでDJIドローンを追跡

### ハッキングと乗っ取り 🔓 <a id="hacking--hijacking-"></a>

無線リンク自体は安全とは限らず、容易に妨害される可能性があります。

* [RFUAV](https://github.com/kitoweeknd/RFUAV) - ラジオベースのドローン検出と信号フィンガープリント
* [Drone Remote ID Monitoring System](https://github.com/cyber-defence-campus/RemoteIDReceiver) - DJIドローンのRemoteIDをマップするためのウェブフロントエンド
* [WTF WJI, UAV CTF?](https://ftp.fau.de/cdn.media.ccc.de/events/camp2023/h264-hd/camp2023-57063-eng-WTF_DJI_UAV_CTF_hd.mp4) - UAV通信・機器のセキュリティ研究または解析資料です。 [open source components](https://www.dji.com/de/opensource)
* [Drone-ID Receiver for DJI OcuSync 2.0](https://github.com/RUB-SysSec/DroneSecurity) - PythonでSDRを用いてDJIのラジオ送信（ドローンIDおよびパイロット位置）を解読
* [Debugging Microcontrollers ](https://media.ccc.de/v/camp2023-57321-debugging_microcontrollers) - PX4ハードウェアマイクロコントローラーの困難なデバッグについて（Niklas Hauserによるcccamp23）
* [5.8GHz video demodulation](https://www.youtube.com/watch?app=desktop&v=rl8ACNnjPFA) - hack-rf SDRの使用
* [GPS jamming](https://www.researchgate.net/publication/339824302_Effective_GPS_Jamming_Techniques_for_UAVs_Using_Low-Cost_SDR_Platforms) - GNUradioとBladeRF SDRを用いて衛星をブロック
* [GPS spoofing](https://rnl.ae.utexas.edu/images/stories/files/papers/unmannedCapture.pdf) - 地面から偽の衛星送信を発信して他のUAVを制御
* [RemoteID Spammer/Spoofer](https://github.com/jjshoots/RemoteIDSpoofer) - ESP8266/NodeMCTドローンRemoteIDスプーフィング
* [Accoustic drone tracking](https://www.youtube.com/watch?v=cSuV9xzcgXY&feature=youtu.be) - Fraunhofer IDMTの論文
* [Robot Vulnerability Database](https://github.com/aliasrobotics/RVD) - 半自律機器に対するCVE

## アクセサリー 🪠 <a id="accesoirs-"></a>

3Dプリントを使えば、機材や模型向けの便利な追加部品を容易に製作できます。

* [Delta 5 race timer](https://github.com/scottgchin/delta5_race_timer) - 5.8GHzのビデオ信号を用いてラップカウンターをトリガー
  * [RotorHazard](https://github.com/RotorHazard/RotorHazard) - マルチノードと中央RPIサーバを備えた継承システム
* [Capture The Flag for drones](https://github.com/SeekND/CaptureTheFlag) - チーム戦の近くに旗を模倣する光学システム
* ジンバル保護部品
* ホルダーとスタンド
* アクションカメラ用マウント
* ローターガード
* ...

### モバイルアプリ 📱 <a id="mobile-apps-"></a>

モバイル端末で使える無料かつ有用なアプリです。必ずしもオープンソースとは限りません。

* [SpeedyBee](https://www.speedybee.com/speedy-bee-app/) - Betaflight、iNAV、EmuFlight向けのフライトコントローラーパラメーター設定とブラックボックスログ閲覧アプリです。 [Android](https://play.google.com/store/apps/details?id=com.runcam.android.runcambf) [iOS](https://apps.apple.com/us/app/speedybee-app/id1150315028)
* [BLHeli_32](https://play.google.com/store/apps/details?id=org.blheli.BLHeli_32) - BLHeli_32 ESCの設定用アプリ
* [FPV Video Channelsorter 5.8GHz](https://play.google.com/store/apps/details?id=florian.felix.flesch.fpvvideochannelsorter) - 各パイロットの利用可能な周波数帯でチャンネルを並べる
* [UAV Forecast](https://www.uavforecast.com) - 天気予報、GPS衛星、太陽活動（Kp）、飛行禁止区域、飛行制限を確認するアプリです。 [Android](https://play.google.com/store/apps/details?id=com.uavforecast) [iOS](https://apps.apple.com/us/app/uav-forecast/id1050023752)
* [Go FPV](https://play.google.com/store/apps/details?id=com.vertile.fpv3d) - DIY第一人称視点ゴーグル用のUVCビデオカメラの表示およびキャプチャアプリ

### 作業台 🧰 <a id="workbench-"></a>

* [smoke stopper](https://oscarliang.com/smoke-stopper/) - 組立中に高価な部品を損傷させないための注意
* [4AxisFoamCutter](https://github.com/rahulsarchive/4AxisFoamCutter) - フォームから空気力学的な翼を作成

## 法的情報 🏛️ <a id="legal-information-️"></a>

航空法と空域の規則は居住国によって異なります。

* [Luftfahrt Bundesamt](https://www.lba.de/DE/Drohnen/Drohnen_node.html) - 🇩🇪 法的枠組み
* [Deutsche Flugsicherung GmbH](https://www.dfs.de/homepage/de/drohnenflug/) - 🇩🇪 試験および認可の実施
* [Digitale Plattform Unbemannte Luftfahrt](https://www.dipul.de/homepage/de/) - 各国のUAV規制・飛行ルールに関する公的情報です。 [Droniq App](https://play.google.com/store/apps/details?id=de.droniq.droniqapp&hl=de&gl=US)
* [Bundesnetzagentur](https://www.bundesnetzagentur.de/DE/Sachgebiete/Telekommunikation/Unternehmen_Institutionen/Frequenzen/Grundlagen/Frequenzplan/frequenzplan-node.html) - 🇩🇪 認可された送信周波数および出力

* [Urząd Lotnictwa Cywilnego](https://drony.ulc.gov.pl) - 🇵🇱 ウルダーロトニクス・シビル - ポーランドおよびEUでのライセンス申請が可能
* [Bezzałogowe Statki Powietrzne](https://ulc.gov.pl/pl/drony) - 🇵🇱 ポーランドにおけるUAV運用に関する規制一覧

## コミュニティ 🗣️ <a id="communities-️"></a>

アイデアや疑問を共有すると、趣味はより楽しく発展します。UAV操縦者のコミュニティだけでなく、多くの改造者やハッカーも活動しています。

* [Dronecode foundation](https://www.dronecode.org) - マヴリンク、QGroundControlおよびPX4のホーム、Linuxファウンデーションの一部
* [FPV Freedom Coalation](https://fpvfc.org/) - ドローンがハッキングされても安全に保たれるようにする
* [Deutscher Modellflieger Verband e.V.](https://www.dmfv.aero) - 🇩🇪 イベント、地域コミュニティ、保険、...
* [Deutscher Aero Club e.V.](https://www.daec.de) - 🇩🇪

### フォーラムとソーシャルメディア <a id="forums-social-media"></a>

* [rcroups.com](https://rcroups.com) - ここでは多くのプロジェクトにサポートを提供
* [diydrones.com](https://diydrones.com) - 多くのプロジェクト、ハードウェア、国を網羅するグループ
* [rotorbuilds.com](https://rotorbuilds.com) - カスタムビルドに必要なレシピ
* [openrcforums.com](https://openrcforums.com) - 過去から現在までオープンモデルの開発に取り組んでいる
* [Stackexchange Drones](https://drones.stackexchange.com/) - ドローン構築向けのスタック・オーバー・Q&A
* [reddit \\motorcopter](https://www.reddit.com/r/Multicopter/) - 飛行、事故、修理、カスタムモジュールなど、すべての内容
* [reddit \\RCPlanes](https://www.reddit.com/r/RCPlanes/) - RC飛行機を除くすべての内容
* [OscarLiang.com](https://OscarLiang.com) - 構築や設定、知識に関する重要なブログ
* [intofpv.com](https://intofpv.com) - FPVに関連するあらゆる情報が得られるフォーラム
* [INAV fixed wing group](https://inavfixedwinggroup.com/) - 固定翼飛行機に関するフォーラム、ブログ、構築（特にINAV対応自動操縦装置）
* [fpv-community.de](https://fpv-community.de) - 🇩🇪 自作も可能
* [RC-Network.de](https://RC-Network.de) - UAV・FPVの情報交換を行うフォーラムまたはメディアです。 [Wiki](https://wiki.rc-network.de/wiki/Hauptseite)
* [kopterforum.de](https://kopterforum.de) - 🇩🇪 自作も可能

### 動画チャンネル <a id="video-channels"></a>

* [Painless 360](https://www.youtube.com/c/Painless360) - UKの構築、モジュール、設定の基本情報
* [ArxangelRC](https://www.youtube.com/c/ArxangelRC) - BGの構築および設定、および（少し）マッピング
* [Joshua Bardwell](https://www.youtube.com/c/JoshuaBardwell) - US、コプターの構築と一般ヒント、スローガン '今日、何かを学ぶことになる'。
* [PawelSpechalski](https://www.youtube.com/c/Pawe%C5%82Spychalski) - INAVコアチーム、主にコプター、スローガン '楽しい飛行'。
* [Andrew Netwon](https://www.youtube.com/c/AndrewNewtonAustralia) - AU、主に飛行機のレビューと構築ヒント。
* [Mr. D - Falling with style](https://www.youtube.com/c/MrDFallingwithstyle) - UK、ダレン、INAV。
* [CurryKitten](https://www.youtube.com/c/CurryKitten/) - レビューだが、OpenHDとExpressLRSも含む。
* [MarioFPV](https://www.youtube.com/channel/UCX2UiZjg485tDoq_Yl4Pysw) - OpenHD、RubyFPV、WFG-NGの実験。
* [TreeOrbit](https://www.youtube.com/user/montreetormee) - OpenHD、RubyFP的実験。
* [flitetest.com](https://flitetest.com) - TV番組、珍しいDIY構築。
* [Livyu FPV](https://www.youtube.com/c/LivyuFPV/videos) - DIYドローン電子機器の飛行動画と修理動画。
* [Adam G does FPV](https://www.youtube.com/c/AdamGdoesFPV) - 構築、改造、基礎知識。
* [BLuefish](https://www.youtube.com/channel/UCmULLc8W-knTqiFqJgw3-FA) - 構築、INAV、長距離飛行。
