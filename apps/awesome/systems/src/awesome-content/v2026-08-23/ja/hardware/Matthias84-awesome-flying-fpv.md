---
title: Awesome Flying FPV
description: UAVの機体、電源・飛行制御、無線・映像通信、テレメトリー、地上局、コンピュータービジョン、シミュレーター、関連資料。
licenseSource: github-Matthias84-awesome-flying-fpv-readme-md
---
# Awesome Flying FPV

マルチコプター、飛行機、ウィング機、UAV開発に使う自由なソフトウェアとオープンハードウェアを探せます。機体、電源・飛行制御、無線・映像通信、テレメトリー、地上局、コンピュータービジョン、シミュレーター、安全・セキュリティ、法規情報、コミュニティを収録しています。原文は活発なコミュニティを持つ実績あるプロジェクトや、多くの改造が行われてきた重要な旧来プロジェクトを重視し、一部の市販ツールや補助資料も紹介しています。

原文では、製作者、整備者、目視補助者、操縦者に対し、物の損傷や人・動物の負傷を避け、自国・地域の規則を守り、自分や他者へのリスクを抑えてどこでどのように飛行するかを理解する責任を求めています。[良好なエアマンシップ](https://en.wikipedia.org/wiki/Airmanship)も参照してください。

著者は、戦争や軍事紛争で自作機を含むUAVが監視や攻撃に使われていることに触れ、このリストの意図は殺傷ではなく、技術や自然についての平和的な研究・学習だと述べています。原文には[stopkillerrobots.org](https://www.stopkillerrobots.org)へのリンクがあります。

提供状況、開発状況、性能、規則に関する説明は、記録された上流READMEに基づいています。

## 機体<a id="airframes"></a>

UAVの機体は、機種や用途によって異なります。レースでの速度、フリースタイル曲技の機敏さ、撮影用の重量物運搬、長距離観測といった要件が、機構、素材、自作の方法を左右します。

原文では、市販機体の交換部品、改造、拡張をこの節の対象外としています。

一からUAVを製作するのは、特に時間が限られる初心者には難しいことがあります。原文では、まずマニュアル付きの既存の製品やキットを使い、経験を積んで典型的な問題の避け方を学んでから改造や独自製作へ進むことを勧めています。[My Raspberry Pi drone: the story so far by Matchstic](https://www.youtube.com/watch?v=ZCOlT_sz6Gs)も参照してください。

### マルチコプター<a id="multicopters"></a><a id="マルチコプター-"></a><a id="multicopters-"></a>

マルチコプターは、アルミやカーボンの形材、CNC切削部品、全体を3Dプリントしたケースなど、さまざまな素材で作られます。ローター数は2〜8基です。

* [18650 Micro Foldable](https://www.printables.com/model/1081158-18650-micro-foldable-fpv-drone/) - 原文で飛行時間18分と紹介される、3Dプリント製の小型ドローン。
* [Sub 250g autonomous drone] - Li-ion電源とGPSを備えた最小構成の3Dプリント製フレーム。原文にはURLの記載なし。
* [JeNo 5.1"](https://github.com/WE-are-FPV/JeNo-5.1) - 付属品を備えたカーボン製の幅広X型フレーム。原文では現代的な設計と説明。
* [Goblin v3](https://www.printables.com/de/model/396395-goblin-fpv-drone) - 4S電源と16×16のAIOスタックを使う3Dプリント製フレーム。2023年。
* [NanoLongRange](https://www.thingiverse.com/thing:4769576) - 主に18650 Li-ionセルとWhoop用のオールインワン基板を使う3Dプリント製フレーム。2021年。
  * [Discovery Edition](https://www.thingiverse.com/thing:5428365) - バッテリーホルダーを一体化した改良フレーム。2022年。
  * [NanoLongRange 2](https://www.thingiverse.com/thing:4818009) - GPSを備えたやや軽量なフレーム。21700セル対応を含む3種類を用意。2021年。
* [NLR35](https://www.thingiverse.com/thing:5428923) - NLRに似た軽量フレームで、21700セルを使用。2022年。
* [hefty](https://hackaday.com/2023/09/01/hefty-3d-printed-quadcopter-meets-nasty-end/) - 独自製作のモーターを使う、全体を3Dプリントした大型クアッドコプター。2023年。
* [Ultimate 3D printable Cinewhoop](https://www.thingiverse.com/thing:4502805) - 2020年。
* [TinyTina](https://blog.prusaprinters.org/how-to-build-a-3d-printed-micro-drone_29310/) - 3Dプリント製のWhoop。2018年。
* [Heavy Lift Quadcopter Frame](https://www.thingiverse.com/thing:4089842) - CNC切削のカーボン製フレーム。2020年。
* [The CogniFly](https://thecognifly.github.io) - 研究、群制御、屋内利用向けの頑丈なフレーム。Raspberry Piのコンパニオンコンピューターを搭載。2021年。
* [TBS Source One](https://github.com/tbs-trappy/source_one) - 5回の改訂を重ねたカーボン製レース用フレーム。2021年。
* [TBS Source Two](https://www.team-blacksheep.com/products/prod:source_two_5in) - カーボン製レース用フレーム。2019年。
* [TBS Source Podracer](https://github.com/ps915/source_podracer) - 3Dカーボンのレース用フレーム。2020年。
* [TBS Source V](https://www.team-blacksheep.com/products/prod:source_v) - 5インチのカーボン製レース用フレーム。2021年。
* [TBS Source X](https://github.com/ps915/source_x) - カーボン製レース用フレーム。2019年。
* [AESIR II](https://www.thingiverse.com/thing:4868250) - 3Dとカーボンを使った、モジュール式でカスタマイズ可能なフレーム。2021年。
* [Foldable Drone Frame](https://www.thingiverse.com/thing:2004357) - ジンバルを追加できる3Dプリント製フレーム。2017年。
* [OpenRC Quadcopter](https://www.thingiverse.com/thing:793425) - 閉じたケースを備えた3Dプリント製フレーム。2015年。
* [Hovership MHQ2](https://www.thingiverse.com/thing:511668) - 折り畳み式の3Dプリント製フレーム。2014年。
* [Crossfire 2](https://www.thingiverse.com/thing:234867) - 大型の3Dプリント製クアッドコプター。2014年。
* [Spyda 500](https://www.thingiverse.com/thing:160607) - 大型の3Dプリント製クアッドコプター。2013年。

### 固定翼機・飛行機<a id="fixed-wing--planes-️"></a><a id="固定翼機飛行機-️"></a>

従来のRC機は、バルサ材とフィルムで覆った翼のリブを使います。市販モデルでは発泡材も多く、CNC機械やレーザーで翼形状に加工できます。全体を3Dプリントした機体は、接着してカーボン棒で補強できます。原文では、軽量PLAで重量を抑えた市販3Dプリントモデルのコミュニティの広がりも紹介し、[Craycle Hobby](https://craycle.com/)、[Eclipson airplanes](https://www.eclipson-airplanes.com/)、[3D lab print](https://3dlabprint.com/product-category/printable-airplanes/)、[Plane Print](https://www.planeprint.com/)、[OWLplane](https://owlplane.com/)、[rc-jetprint.de](https://rc-jetprint.de/en/)を挙げています。

* [Titandynamics Tornado v2](https://titandynamics.aero/free/p/tornado-v2) - ペイロード運搬向けの2モーター機。3Dプリント製、モジュール式で、サイズは1 m。
* [Merlin V2](https://www.youtube.com/watch?v=HT0NLQdX7Ak) - ペイロード運搬向けの2モーター機。3Dプリント製、サイズは2.5 m。原文では効率がよく、長距離飛行に適すると説明。
* [HAWk Modular RC Wing Airplane v1](https://www.printables.com/de/model/422806-hawk-modular-rc-wing-airplane) - LW-PLAを3Dプリントした、原文表記で「1 m++」のウィング機。推進式・牽引式の構成に対応し、部品表とマニュアルを完備。2023年。
* [V-Tail Aircraft for Long Range FPV & Autonomous Missions - by AeroStuff FPV](https://www.youtube.com/watch?v=sTjXVeo_lpQ) - V尾翼の推進式機体。胴体と翼に折り曲げたDepronパネルを使用。
* [Highly Modular Design -1 (HMD1)](https://forum.flitetest.com/index.php?threads/large-modular-uav-design.69987/) - 研究向けの3Dプリント製ABS機体。V尾翼を採用。2022年。
* [Ranger V2](https://craycle.com/product/ranger-v2-800-mm-3ch-trainer-stl-file/) - 1 m未満の推進式練習機。2022年。
* [Berkik 3 wing](https://www.youtube.com/watch?v=ZA8fGOzJB10) - 1.3 mのDepron製ウィング機。2021年。
* [LukiSegler](https://www.printables.com/de/model/76098-lukisegler-electric-rc-glider) - グライダー。2021年。
* [SakhWing](https://www.thingiverse.com/thing:4547317) - PETGでプリントしたDrakに似た固定翼機。2020年。
* [GemINIce](https://www.youtube.com/watch?v=PcScS4Cj_Iw&list=PLEH_vTrFddgP8bRQFMK_z8rwmRth60Fen) - 2基のプロペラを備えたDepron製機体。2016年。
* [Joywing](https://www.youtube.com/watch?app=desktop&v=X6hJCQNxVzs) - シンプルなレース用ウィング機。2019年。
* [Eclipson Model V](https://www.thingiverse.com/thing:4011218) - 主に3Dプリントで製作する、車輪付きの市販機体。2019年。
* [Eclipson Model Y](https://www.thingiverse.com/thing:2752892) - 主に3Dプリントで製作する、車輪付きの市販機体。2018年。
* [Northern Pike](https://www.thingiverse.com/thing:3040294) - 36インチの3Dプリント製固定翼機。2018年。
* [Moose](https://www.thingiverse.com/thing:3023606) - PLA製の1 mの牽引式機体。2018年。
* [Supernove](https://www.thingiverse.com/thing:2187747) - ジェット機に似たRC推進式機体。
* [RC Flying Wing](https://www.thingiverse.com/thing:2044074) - 1 m未満の3Dプリント製推進式機体。2017年。
* [GASB Three](https://www.thingiverse.com/thing:3605665) - 3Dプリント製固定翼機。2019年。
* [GASB Two](https://www.thingiverse.com/thing:1831295) - 通常のプロペラに代わり電動ダクテッドファン（EDF）を使う、3Dプリント製の固定翼ジェット機。2016年。
* [GASB One](https://www.thingiverse.com/thing:1659724) - 6回の改訂を重ねた80 cmの3Dプリント製固定翼機。2016年。
* [Red swan](https://www.thingiverse.com/thing:453090) - 翼のリブを備えた1950 mmのプリント製機体。Red Duckモデルの後継。2014年。
* [Le Fish glider](https://lefish.fandom.com/wiki/Building_Le_Fish#Plans) - 多くの派生設計があるオープンソースの曲技用グライダー。2005年。

### VTOL機<a id="vtols"></a><a id="vtol-"></a><a id="vtols-"></a>

VTOL機は、コプターの形態から滑空するウィング機へ移行します。原文では離着陸が容易になる一方、固定翼機より機構が複雑で、やや重くなると説明しています。

* [Vorian tilt-rotor quad](https://rotorbuilds.com/build/35240) - 複数の素材を使い、4基すべてのプロペラを傾けられるクアッドコプター。
* [Squirrel design](https://jgkang1210.github.io/fsdrone) - クアッドコプターと、滑空用のコウモリに似た膜を組み合わせる設計。
* [MiniHawk-VTOL v2.0](https://github.com/StephenCarlson/MiniHawk-VTOL) - 3基のプロペラを備えた3Dプリント製機体。
* [VTOL in 5 revisions](https://www.youtube.com/watch?v=gPEeCjVrTBw) - 3Dプリントと発泡材を使う機体。2018年。
  * [翼形状](https://www.printables.com/de/model/261434-vase-mode-wing) - 上記から生まれた翼形状。LW-PLAで3Dプリント。
* [bicopter kit](https://hackaday.com/2018/08/27/the-best-new-quad-is-a-bicopter/) - CNC切削のカーボン製キット。2018年。

## バッテリーと電源制御<a id="batteries--power-control"></a><a id="バッテリーと電源制御-"></a><a id="batteries--power-control-"></a>

RC機では市販のLiPoパックがよく使われ、原文では18650 Li-ionセルによる独自パックに置き換えられると説明しています。機上の電源バスはESCとフライトコントローラーに直接電力を供給し、これらの装置から他の機上機器向けに5 Vを出力します。

* 18650 Li-ionパック
  * [Using Li-Ion Battery Pack for Long Range FPV Flying](https://oscarliang.com/li-ion-battery-long-range/) - 4Sバッテリーパックと背景情報。2023年。
  * [build a „LongRange“ Lithium Ion Battery](https://blog.seidel-philipp.de/diy-build-a-longrange-lithium-ion-battery/) - 4S、3000 mAhのバッテリーパック。2020年。
  * [DIY FPV Goggle Battery Pack](https://nuxnik.com/diy-fpv-goggle-battery-pack/) - 充電量メーターと3Dプリント製ケースを備えた、ゴーグル用バッテリーパック。2021年。
  * [18650セル用ホルダー](https://www.printables.com/de/model/1181-18650-improved-spacerholder) - セルをまとめやすくする3Dプリント製ホルダー。2023年。
* 太陽電池で飛ぶ機体
  * [Solar Dragon - Solar Plane Might Be Able To Last Through The Night](https://hackaday.com/2022/08/06/solar-plane-might-be-able-to-last-through-the-night/) - 原文では、翼のリブを太陽電池で覆った機体と説明。2022年。
  * [rctestflight series](https://www.youtube.com/watch?v=1OGrDvInUAY) - 太陽電池で覆われた固定翼機。8時間30分の飛行、測定結果、背景情報を紹介。原文には[24時間飛行の可能性](https://hackaday.com/2022/09/27/24-hours-of-le-airplanes/)へのリンクも記載。2022年。
* [diyBMS v4](https://github.com/stuartpittaway/diyBMSv4) - Li-ionパック用のバッテリー管理PCBとファームウェア。

## モーター制御<a id="motor-control-️"></a><a id="モーター制御-️"></a>

ブラシレスDCモーター（BLDC）は、出力と精度のため広く使われます。各モーターには電子速度制御器（ESC）が必要です。

* [BLheli_S](https://github.com/bitdump/BLHeli) - 細かな制御が可能なESCファームウェア。原文では広く使われていると説明。
* [BlueJay](https://github.com/mathiasvr/bluejay) - ブラシレスモーター用のデジタルESCファームウェアを提供するBLHeliのフォーク。独自メロディーなどの機能を搭載。2020年以降。
* [AM32-MultiRotor-ESC-FW](https://github.com/am32-firmware/AM32) - DSHOTとテレメトリーに対応。2024年。
* [MESC FOC ESC](https://github.com/davidmolony/MESC_FOC_ESC) - STM32ベースのESC向けオープンハードウェアとファームウェア。
* [ESC Configurator](https://github.com/stylesuxx/esc-configurator) - BLHeliとBluejayのESCを設定するWebアプリ。
* [PIDtoolbox](https://github.com/bw1129/PIDtoolbox) - 機体の性能を最大限に引き出すためにPIDを調整。

## 飛行制御<a id="flight-control-️"></a><a id="飛行制御-️"></a>

原文では、現代的なオートパイロットソフトウェアはSTM32 F4/F7基板を必要とし、NAZE32、CC3D、旧来のArduPilotハードウェアなどの古い基板には通常対応しなくなっていると説明しています。また、多くのプロジェクトはBaseflightまたはCleanflightのファームウェアとデスクトップ設定ツールを基にしているとしています。

* [INAV](https://github.com/light/inav) - ウィング機とコプター向けの、GPSに基づく飛行計画と自律飛行。
* [betaflight](https://github.com/betaflight/betaflight) - ウィング機とコプターのレース性能と機敏さを重視。
* [EmuFlight](https://github.com/emuflight/EmuFlight) - 原文では現代的なアルゴリズムに重点を置くと説明。
* [dRonin](https://github.com/d-ronin/dronin/) - Openpilotなどの対象基板に対応。
* [Ardupilot](https://ardupilot.org) - ウィング機、コプター、陸上・水上車両を使う専門業務や研究向けのエコシステム。原文では豊富な情報・実績・可能性がある一方、INAVより複雑と説明。
* [dRehmflight](https://github.com/nickrehm/dRehmFlight) - VTOL機と飛行中の形態移行向けファームウェア。Teensy基板専用。
* [Rotorflight](https://github.com/rotorflight/rotorflight) - 従来型の単一ローター式ヘリコプター向けファームウェア。
* [HPR-Rocket-Flight-Computer](https://github.com/SparkyVT/HPR-Rocket-Flight-Computer) - 高速ロケット向けファームウェア。
* [CleanFlight](https://github.com/cleanflight/cleanflight) - 旧来のBaseflightフォーク。原文では開発停滞と記載。
* [BaseFlight](https://github.com/multiwii/baseflight) - Wiiのジャイロ改造や8ビットコントローラーの時代の旧来ファームウェア。原文では最も古く、開発停滞と説明。
* [QUICKSILVERファームウェア](https://github.com/BossHobby/QUICKSILVER)
* [Paparazzi UAV](https://github.com/paparazzi/paparazzi)
* [LibrePilot](https://github.com/librepilot/LibrePilot) - 原文では2018年以降、開発停滞と記載。
* [madflight](https://github.com/qqqlab/madflight) - Arduinoベースの対象基板向けファームウェア。各種センサーに対応。2024年。
* [The Cube Autopilot](https://github.com/proficnc/The-Cube) - Pixhawk 2などのフライトコントローラー用ハードウェア。
* [Risc V Powering a 3D Printed Drone](https://www.youtube.com/watch?v=TJCeLOiP7lU) - 自作クアッドコプターでのRISC-V CPU実験。

## RC送信機と手持ちコントローラー<a id="rc-transmitters--handcontroller"></a><a id="rc送信機とハンドコントローラー-"></a><a id="rc-transmitters--handcontroller-"></a>

操縦者側の無線操縦送信機（RC TX）は、[JR/JR Liteの形状規格](https://github.com/pascallanger/DIY-Multiprotocol-TX-Module/blob/master/docs/Module_BG_4-in-1.md)の拡張ベイと、各種無線プロトコル用のシリアルインターフェースを使います。機体側の受信機（RX）の多くは、Crossfire（CRSF）などの標準シリアルプロトコルでフライトコントローラーと通信します。地上局の節も参照してください。

* [EdgeTX](https://github.com/EdgeTX/edgetx) - OpenTXの後継。原文では開発が活発と記載。
* [freedomTX](https://github.com/tbs-fpv/freedomtx) - OpenTXのフォーク。原文では2020年以降、開発停滞と記載。

* [OpenTX](https://github.com/opentx/opentx) - 広く使われる手持ち送信機向けファームウェア。デスクトップ管理ツールとサウンドパックを提供。
* [inav-opentx-sounds](https://github.com/JyeSmith/inav-opentx-sounds) - 飛行モード用の追加サウンド。
* [transmitter-sound-pack](https://inavfixedwinggroup.com/guides/transmitter-models/transmitter-sound-pack/) - INAVのサウンドとウィング機用の設定一式。
* [VTx](https://github.com/teckel12/VTx) - VTXのみを制御する、機能を絞ったBetaflight Luaスクリプト。
* [betaflight-tx-lua-scripts](https://github.com/Matze-Jung/betaflight-tx-lua-scripts) - 機能を拡張したBetaflight Luaスクリプト。
* [opentx-lua-widgets](https://github.com/Matze-Jung/opentx-lua-widgets) - テレメトリー表示用の追加UIウィジェット。
* [opentx-lua-running-graphs](https://github.com/Matze-Jung/opentx-lua-running-graphs) - グラフ表示用の追加ウィジェット。
* [OpenTX-Pong](https://github.com/SpechtD/OpenTX-Pong) - 送信機で動かすシンプルなゲーム。
* [ELRS-Joystick-Control](https://github.com/kaack/elrs-joystick-control) - ジョイスティックを備えたGCSへ直接接続するELRSモジュール。
* [Arduino Transmitter for ELRS](https://github.com/kkbin505/Arduino-Transmitter-for-ELRS) - Arduinoを使う、シンプルなゲームパッド型の手持ち送信機。
* [OpenAVRc](https://github.com/Ingwie/OpenAVRc_Hw) - Arduino Mega2560基板を使う独自送信機。
* [ER9X](http://www.er9x.com) - 9XR手持ち送信機用の代替ファームウェア。

### モジュール<a id="modules"></a><a id="モジュール-"></a><a id="modules-"></a>

独自無線通信のハードウェアとファームウェアを紹介します。原文では、送信機側と受信機側を持つ双方向通信が一般的だと説明しています。

* [Multi Module](https://github.com/pascallanger/DIY-Multiprotocol-TX-Module) - FrSky、FlySky、Walkera、Futabaなどのプロトコルに対応。
* [ExpressLRS](https://github.com/ExpressLRS/ExpressLRS) - 長距離通信や低遅延向けのELRS。原文では、既存ハードウェアの一部の書き換えと、868/915 MHzまたは2.4/5.8 GHzの市販モジュールへの対応を説明。
  * [ELRS Airport Firmware](https://github.com/ExpressLRS/ExpressLRS/pull/1904) - より複雑なテレメトリーダウンリンク向けの双方向通信。
* [mLRS](https://github.com/olliw42/mLRS) - MAVLink対応の長距離通信システム。
* [openLRSng](https://github.com/openLRSng/openLRSng) - OpenLRSの次世代版。原文では2018年以降、開発停滞と記載。
* [Raven LRS](https://github.com/RavenLRS/raven) - LoRaベースのシステム。2019年。
* [OpenSky](https://fishpepper.de/projects/opensky/) - FrSkyモジュール用の代替ファームウェア。2016年。
* [DeviationTX](https://deviationtx.com/) - Walkera用の代替ファームウェア。2016年。

## VTX<a id="vtx-"></a>

映像送信機（VTX）は、機体側のアナログまたはデジタル無線送信機です。通常は一人称視点（FPV）のために前方カメラの映像を送りますが、その他の情報の送信や、制御アップリンクを含む地上局との双方向通信も可能です。地上局の節も参照してください。

* [OpenHD](https://github.com/OpenHD/Open.HD) - 機体側と地上側に2.4/5.8 GHzのWi-FiハードウェアとSBCを使い、映像・テレメトリーのダウンリンクと任意の制御アップリンクを提供。原文では、より効率的な専用基板の開発も説明。[オープンなデジタル通信の比較](https://openhd.gitbook.io/open-hd/general/openhd-vs-alternatives)。
* [RubyFPV](https://rubyfpv.com) - 2.4/5.8 GHzのWi-FiハードウェアとRaspberry Piによる、映像・テレメトリーのダウンリンクと任意の制御アップリンク。原文ではソースコード非公開で、プラグインシステムありと説明。
* [Wifibroadcast NG](https://github.com/svpcom/wifibroadcast) - 2.4/5.8 GHzのWi-FiハードウェアとRaspberry Piによる、映像・テレメトリーのダウンリンク。
* [wfb-ng on OpenIPC](https://github.com/OpenIPC/sandbox-fpv) - OpenIPC対応のCCTVモジュールで動くWifibroadcast NG。原文ではテレメトリーと120 fpsまたは4kの映像伝送を紹介。EMAX Wyvern LinkやRuncam Wifilinkなど、複数の販売元の市販キットを掲載。
* [DroneBridge](https://github.com/DroneBridge/DroneBridge) - 2.4 GHzのWi-Fiハードウェア、Raspberry Pi、ESP32、Androidアプリを使う双方向通信。[他のプロトコルとの比較](https://dronebridge.gitbook.io/docs/comparison)。
* [EZ Wifibroadcast](https://github.com/rodizio1/EZ-WifiBroadcast) - 原文では最初かつ最も古いWi-FiベースのVTX構成と説明。
* [hx-esp32-cam-fpv](https://github.com/RomanLut/hx-esp32-cam-fpv) - MJPEGフレームを送信する低価格のESPcam基板。
* [wtfos](https://github.com/fpv-wtf/wtfos) - DJI FPVの送受信機をroot化して改造。
* [DigiView-SBC](https://github.com/fpvout/DigiView-SBC) - DJI HD信号の受信。2021年時点でアルファ版と記載。
* [OpenVTx](https://github.com/OpenVTx/OpenVTx) - オープンハードウェアのアナログVTX用の自由なファームウェア。
* [VTX Power Measure](https://github.com/mrRobot62/vtx_power_measure) - Immersion RF-Meter V2向けのPythonスクリプト。

## カメラとジンバル<a id="camera--gimbals"></a><a id="カメラとジンバル-"></a><a id="camera--gimbals-"></a>

カメラは、ダウンリンク用の機上映像送信機に映像を供給したり、DVRとして高画質映像を記録したりします。各種カメラ構成に対応する独自システムは、VTXの節を参照してください。

* [Gyroflow](https://github.com/gyroflow/gyroflow) - IMUセンサーデータでHD動画の揺れを補正。
* [サーマルカメラでのOpenHD利用](https://openhd.gitbook.io/open-hd/hardware/cameras) - Raspberry Piでサーマルカメラのセンサーを読み取り。
* [TetraPI](https://github.com/bluegreen-labs/TetraPi) - Raspberry Piベースのマルチスペクトルカメラモジュール。
* [opentrack](https://github.com/opentrack/opentrack) - FPVゴーグルやVRヘッドセットに内蔵されたトラッカーから入力を取得。
* [RC Headtracker](https://github.com/dlktdr/HeadTracker) - ArduinoとBluetoothを使い、ゴーグルの向きに合わせてカメラのジンバルを回転。
* [STORM32BGC](https://github.com/olliw42/storm32bgc) - ファームウェアとブラシレスジンバルコントローラー。
* [Open Brushless Gimbal](https://www.thingiverse.com/thing:110731) - 2013年。

## GPS<a id="gps-️"></a>

GPSなどの全球測位システムは機体の現在位置を特定します。原文では一般向けのGPSモジュールは安価で、一部ではリアルタイム処理や後処理によって精度を高められると説明しています。

* [GNSS SDR](https://gnss-sdr.org) - SDRハードウェアで受信したGPS、原文表記の「Baidu」、GLONASSの無線信号を処理するソフトウェアツール群。
* [rtklib](https://www.rtklib.com) - リアルタイム処理や後処理で干渉を取り除き、GNSSの精度を高めるソフトウェアツール群。SDRや一部の市販GPSモジュールで記録した信号に対応。
* [Vicon MavLink](https://github.com/bo-rc/ViconMAVLink) - 市販の光学システムによる、ドローン群全体の屋内測位。

## センサー<a id="sensors-️"></a><a id="センサー-️"></a>

コンパス、気圧、対気速度、電流などのセンサーにより、位置推定を改善したり、システムの性能を把握したりできます。

* [QLiteOSD](https://github.com/Qrome/QLiteOSD) - フライトコントローラーなしでセンサーを読み取る、ESP32ベースのOSD。
* [3D Printed Drone Build - How to Wire OpenHD and Ultrasonic Abstacle Avoidance](https://www.youtube.com/watch?v=HNR1mqUDpoE) - OpenHDと統合した、クアッドコプターの超音波による障害物回避。

その他の例は[Ardupilotのオプションハードウェア](https://ardupilot.org/copter/docs/common-optional-hardware.html)を参照してください。

## 映像受信機<a id="video-receivers"></a><a id="映像受信機-"></a><a id="video-receivers-"></a>

ゴーグルは、各種無線プロトコル用のモジュールベイやHDMI入力を使います。各種カメラ構成に対応する独自システムは、VTXの節を参照してください。

* [DIY Homemade FPV Monitor](https://hackaday.io/project/160893-diy-homemade-fpv-monitor) - ダイバーシティ受信を備えた5.8 GHzアナログディスプレイ。
* [FENIX-rx5808-pro-diversity](https://github.com/JyeSmith/FENIX-rx5808-pro-diversity) - ゴーグル用のダイバーシティ受信に対応する5.8 GHzアナログモジュール。オープンハードウェア。
  * [rx5808 pro divesity](https://github.com/sheaivey/rx5808-pro-diversity)
* [rpi-rx5808-stream](https://github.com/xythobuz/rpi-rx5808-stream) - ダイバーシティ受信の5.8 GHzアナログ映像を扱う、Raspberry Piベースのストリーミングサーバー。

## アンテナとトラッカー<a id="antennas-and-trackers"></a><a id="アンテナとトラッカー-"></a><a id="antennas-and-trackers-"></a>

送受信機には独自のアンテナ構成を使えます。トラッカーは指向性アンテナを支え、複数の受信機とダイバーシティ受信、またはテレメトリーを使って機体へ向きを合わせます。原文では目視範囲（VLOS）外の、より高度な飛行向けの機材で、初心者には不要と説明しています。また、4Gで映像・制御通信の範囲を延ばす方法にも触れています。

* [u360gts](https://github.com/raul-ortega/u360gts/) - F2/F3コントローラーを使う360°電動トラッカー。ファームウェア、ハードウェア、ケースを提供。2020年。
* [AntTracker](https://github.com/zs6buj/AntTracker) - F1、ESP8266、ESP32コントローラーを使うサーボ式トラッカー。2019年。
* [open360tracker v2](https://www.thingiverse.com/thing:2568906) - すべての部品を可動ヘッドに収めた簡略化設計。
* [open360tracker](https://github.com/SamuelBrucksch/open360tracker) - 360°サーボ式トラッカー。2016年。
  * [Amv-open360tracker](https://github.com/raul-ortega/amv-open360tracker) - フォーク。2016年。
  * [Amv-open360tracker 36bit](https://github.com/ericyao2013/amv-open360tracker-32bits) - フォーク。2016年。
* [Ghettostation Antenna Tracker](https://www.thingiverse.com/thing:547358) - 複数のフォークあり。2014年。
* [DIY Helical Antenna For Long Range FPV](https://www.youtube.com/watch?v=aH0cW9XJ4D4) - 3Dプリント製骨組みを使う、アナログゴーグル用5.8 GHzヘリカル指向性アンテナ。
* [Cloverleaf Antenna - Build Instructions](https://www.youtube.com/watch?v=JGm9ESx4yzE) - アナログ映像送信用の5.8 GHz無指向性アンテナ。

## テレメトリーとログ<a id="telemetry--logs"></a><a id="テレメトリーとログ-"></a><a id="telemetry--logs-"></a>

一般的なシリアルプロトコルでセンサー値や制御情報を伝送します。フライトコントローラー内のSDカードにブラックボックスログとして記録したり、送信機や地上局へ送ったりできます。ログは紛失したドローンの捜索や、PID制御・飛行挙動のデバッグと調整に役立ちます。

* [MAVlink](https://github.com/mavlink/mavlink) - 趣味から商用UAVまで対応する拡張可能なプロトコル。
* [Cyphal](https://opencyphal.org) - 旧称UAVCAN。原文では産業専用のドローンバスシステムと説明。
* [YAMSPy](https://github.com/thecognifly/YAMSPy) - PythonでMSPシリアルプロトコルを読み取り。
* [LuaTelemetry](https://github.com/teckel12/LuaTelemetry) - テレメトリーデータからコックピットと地図をリアルタイム表示するOpenTX/EdgeTXスクリプト。
* [betaflight-tx-lua-scripts](https://github.com/betaflight/betaflight-tx-lua-scripts) - テレメトリーを表示し、カメラやVTXなどの設定を制御するスクリプト。
* [otxtelemetry](https://github.com/olliw42/otxtelemetry) - MAVLink対応を追加するOpenTX/EdgeTXスクリプト。
* [INAV blackbox viewer](https://github.com/iNavFlight/blackbox-log-viewer) - センサー値とモーター値を動画のOSDオーバーレイとして描画。
* [INAV blackbox tools](https://github.com/iNavFlight/blackbox-tools) - ログをCSV時系列ファイルや映像のOSDオーバーレイに変換。
* [flightlog2x](https://github.com/stronnag/bbl2kml) - INAV、OpenTXなどのブラックボックスログをCSV、GPX、KMLに変換し、各種性能の表示形式で経路や軌跡を描画。別途[GUI](https://github.com/stronnag/fl2xui)あり。
* [UAVLogViewer](https://github.com/ardupilot/uavlogviewer) - Ardupilotログ用のWebアプリ。
* [OSD-subtitles](https://github.com/kristjanbjarni/osd-subtitles) - ブラックボックスログをOSD字幕として描画し、動画ファイルと同期再生。
* [Dashware](http://www.dashware.net/dashware-download/) - ブラックボックスログのOSD描画用ソフトウェア。クローズドソース。
* [PID-Analyzer](https://github.com/Plasmatree/PID-Analyzer) - ブラックボックスログを読み取り、PID制御変数を調整。
* [openXsensor](https://github.com/openXsensor/openXsensor) - テレメトリープロトコルの変換と変更。
* [OpenLog](https://github.com/sparkfun/OpenLog) - [blackbox](https://github.com/thenickdude/blackbox/)ファームウェアを使うブラックボックスデータ記録装置。原文では、この機能は通常メインのフライトコントローラーに含まれると説明。

## ミッション管理と地上局<a id="mission-control--basestation-️"></a><a id="ミッション制御と基地局-️"></a>

ノートPCやタブレット上の地上管制局（GCS）は、長距離・長時間飛行のミッション管理に向けて、飛行パラメーターや位置を一覧表示します。[Ardupilot.orgのGCS選択ガイド](https://ardupilot.org/copter/docs/common-choosing-a-ground-station.html)も参照してください。

* [mwptools](https://github.com/stronnag/mwptools) - 特にINAV向けのウェイポイントミッションプランナー。INAV RadarやADS-Bの情報源にも対応。
* [APM Planner 2.0](https://ardupilot.org/planner2/) - MPとQGroundControlの実績を取り入れた、MAVLink対応プランナー。
* [QGroundControl](https://github.com/mavlink/qgroundcontrol) - デスクトップとモバイルでMAVLinkに対応。
* [MissionPlanner](https://ardupilot.org/planner/index.html) - 特にArdupilot向けのウェイポイントミッション計画。
* [MAVProxy](https://ardupilot.org/mavproxy/) - コマンドラインとGUIのミッションプランナー、テレメトリービューアー、処理ツール。
* [BulletGCSS](https://github.com/danarrib/BulletGCSS) - GSMとMQTTを使う通信範囲の拡張。
* [Dreka GCS](https://github.com/Midgrad/Dreka) - 原文では、新しく機能は限られるものの、より現代的なインターフェースを備えるGCSと説明。

## コンパニオンコンピューターと統合<a id="companion-computers--integration"></a><a id="コンパニオンコンピューターと統合-"></a><a id="companion-computers--integration-"></a>

フライトコントローラーは操縦のリアルタイム制御を担い、コンパニオンコンピューターはより複雑なデータ処理のための資源を提供します。[Ardupilot.orgのコンパニオンコンピューター解説](https://ardupilot.org/dev/docs/companion-computers.html)と、前述のデジタルVTXシステムも参照してください。

* [öchìn CM4](https://github.com/ochin-space/ochin-CM4) - フライトコントローラー用のRaspberry Pi Compute Moduleキャリア基板。
* [APsync](https://ardupilot.org/dev/docs/apsync-intro.html) - 各種SBC用のMAVLinkを重視したOS。
* [RPanion](https://www.docs.rpanion.com/software/rpanion-server) - MAVLinkを重視したRaspberry Piイメージ。
* [ROS](https://github.com/ros/ros) - より複雑で対話的な飛行のためのRobot Operating System。
* [DroneKit](https://github.com/dronekit/dronekit-python) - MAVLink無線通信を含む、クロスプラットフォームの統合エコシステム。

## コンピュータービジョン<a id="computer-vision"></a><a id="コンピュータービジョン-"></a><a id="computer-vision-"></a>

コンピュータービジョンは、UAVのライブ映像や記録画像を処理し、航空マッピングや機械学習に基づく飛行計画に使います。[UAV Mapping Guidelines](https://uav-guidelines.openaerialmap.org/)も参照してください。

* [OpenDroneMap](https://www.opendronemap.org/) - 写真をつなぎ合わせた航空画像の生成や3Dモデルの計算などに対応。
* [OpenAerialMap](https://github.com/hotosm/OpenAerialMap/) - 災害対応などに向けてドローン画像を共有。
* [DroneDB](https://github.com/DroneDB/DroneDB) - ドローン写真や航空画像の保存・アーカイブ。
* [OpenAthena](https://github.com/mkrupczak3/OpenAthena) - 原文ではマーカーを使うGCPの自動検出と説明。
* [OpenMMS](https://www.openmms.org/) - レーザースキャナーを搭載するモバイルマッピングシステム。
* [BANet](https://github.com/lironui/BANet) - 航空画像の領域を機械学習で分割。
* [AVCBet](https://github.com/lironui/ABCNet) - 航空画像の領域を機械学習で分割。
* [Faster](https://github.com/mit-acl/faster) - ドローンに障害物回避を学習させる機械学習。
* [Fast-Planner](https://github.com/HKUST-Aerial-Robotics/Fast-Planner) - 経路上の障害物回避をドローンに学習させる。
* [Autonomous Drone Dodges Obstacles Without GPS](https://hackaday.com/2021/11/03/autonomous-drone-dodges-obstacles-without-gps/) - Raspberry Piベースのコンピュータービジョン、経路計画、障害物回避。
* [Drone-net](https://github.com/chuanenlin/drone-net) - YOLO v4を使い、写真や動画内のクアッドコプターを機械学習で検出。
* [Anti-UAV](https://github.com/ZhaoJ9014/Anti-UAV) - IR・RGB動画内のクアッドコプターを機械学習で検出。
* [Fire Detection UAV](https://github.com/AlirezaShamsoshoara/Fire-Detection-UAV-Aerial-Image-Classification-Segmentation-UnmannedAerialVehicle) - ドローンに火災検出を学習させる機械学習。
* [DroneAid](https://github.com/Call-for-Code/DroneAid) - 災害対応時に、緊急時のマーカーから人を機械学習で検出。
* [AirPose](https://github.com/robot-perception-group/AirPose) - ドローン視点での人の姿勢を機械学習で推定。
* [AruCo landing](https://github.com/radekholy24/aruco-landing) - マーカー位置への着陸のための、機械学習を使うROSアドオン。

## 用途別のシステム一式<a id="complete-systems"></a><a id="完成システム-"></a><a id="complete-systems-"></a>

特定の用途向けに設計されたドローンとツール群を紹介します。

* [Sonora Medical Delivery Planes](https://www.peanutbuttertunaspoon.org) - RC機を使い、メキシコの遠隔地へ医療キットを配送。
* [Guiness World record fastest drone build](https://www.youtube.com/watch?v=L_O45iEar4M) - 原文でギネス世界記録の製作例とされる、389 mph / 626 km/hのクアッドコプターロケットの設計・製作。似た例として、200 mphの[AOSHS5の製作例](https://www.youtube.com/watch?v=oG2GaSMlfdo)へのリンクも記載。
* [Guiness World record endurance drone build](https://www.youtube.com/watch?v=1lfVKcKQ5BI) - 原文でギネス世界記録の滞空例とされる大型クアッドコプター。飛行時間3時間12分。
* [Arduino FPV Mini Drone](https://www.instructables.com/Make-a-Tiny-Arduino-Drone-With-FPV-Camera/) - BLDCモーターを使わない、木製フレームの小型クアッドコプター。MultiWIIを中心に組んだ独自RF通信を使用。
* [SearchWing](https://www.hs-augsburg.de/searchwing/de/willkommen/) - EUの海上国境で、難民船の人々を救助するために広い海域を目視調査する、捜索救難用RC機。SAR母船のそばへ着水できる防水仕様。
* [Dronecoria](https://dronecoria.org) - 種を散布するための、重量物運搬用の木製オクトコプター。
* [Agilicious](https://agilicious.dev) - 3Dプリント製オープンソースハードウェアのドローンとエコシステム。特に、コンピュータービジョンによる機敏な自律飛行の研究向け。2023年。
* [Crazyflie](https://www.bitcraze.io/documentation/system/platform/) - FPVよりも、独自モジュールや異なる技術を使う群制御に重点を置くドローン。
* [ESP-Drone](https://github.com/Circuit-Digest/ESP-Drone) - ESP32とPCBを中心に組み、FPVを使わないクアッドコプター。独自のWi-Fi通信とブラシ付きモーターを使用。
* [ESP32 Drone](https://hackaday.io/project/188578-esp32-drone) - 従来型のFPVを使わない、ESP32基板による低価格クアッドコプター。2022年。
* [Wifree-copter](https://open-diy-projects.com/wifree-copter/) - アプリ経由のWi-Fi遠隔制御にRaspberry Piを使う3Dプリント製コプター。原文では簡単と説明。2016年。

## セキュリティと安全<a id="security--safety"></a><a id="セキュリティと安全性-"></a><a id="security--safety-"></a>

### シミュレーター<a id="simulators"></a><a id="シミュレーター-"></a><a id="simulators-"></a>

シミュレーターでは手持ち送信機で練習し、機材を壊す前に典型的な失敗の避け方を学べます。ほかに、制御された環境でオートパイロットをテスト・評価するものもあります。

原文では一般利用者向けの訓練シミュレーターは主に商用で、LinuxとmacOS向けの選択肢もあると説明し、[Freerider Recarged](https://fpv-freerider.itch.io/fpv-freerider-recharged)、[Liftoff](https://store.steampowered.com/app/410340/Liftoff_FPV_Drone_Racing/)、[DRL Sim](https://thedroneracingleague.com/drlsim/)、[Velocidrone](https://www.velocidrone.com/)を挙げています。

* [crrcsim](https://sourceforge.net/projects/crrcsim/) - RC機用シミュレーター。2018年。
* [Picasim](https://github.com/Rowlhouse/PicaSim) - SSSの後継となる、クローズドソースのRC機シミュレーター。
* FlightGear - 通常は大型機に使うが、フライトコントローラーと組み合わせてシミュレーションも可能。[PaparazziUAVの解説](https://wiki.paparazziuav.org/wiki/FlightGear)と[Arduplaneの解説](https://ardupilot.org/dev/docs/simulation-2.html)。
* [AirSim](https://github.com/microsoft/AirSim) - アルゴリズムのテスト用のMicrosoft製シミュレーター。
* [jMAVSim](https://github.com/PX4/jMAVSim) - MAVLinkシミュレーター。
* [JSBsim](https://github.com/JSBSim-Team/jsbsim) - PythonとMatlabのバインディング。
* [GAZEBOsim](https://github.com/gazebosim/gz-sim) - 複数ロボットのシミュレーション。
* ROSは、[PX4の解説](https://docs.px4.io/master/en/ros/ros2_comm.html)にあるようにシミュレーションに対応。

### チェックリスト<a id="checklists"></a><a id="チェックリスト-"></a><a id="checklists-"></a><a id="build-power-check"></a><a id="組み立て後の通電確認"></a>

故障やドローン事故は重大な損害につながることがあります。原文では、不必要なリスクを避けるため、保険請求が必要になる場合も含め、飛行のたびに手順を順番に確認して記録することを必須としています。

### チェックリスト：初飛行<a id="maiden-flight-check"></a><a id="初飛行前の確認"></a>

* [iNav Pre-maiden Checklist](https://www.mrd-rc.com/tutorials-tools-and-testing/flight-controller-therapy/inav-pre-maiden-checklist-a-helpful-reminder-and-saver-of-foam/) - Mr.Dによる固定翼機の初飛行前チェックリスト。

### チェックリスト：通常の飛行<a id="regular-flight-check"></a><a id="通常飛行前の確認"></a>

* [Ardupilot Copter Checklist](https://ardupilot.org/copter/docs/checklist.html)。

### 識別システム<a id="id-systems"></a><a id="識別システム-"></a><a id="id-systems-"></a>

RCコプターや機体は他の操縦者と空域を共有し、見えにくいことがあります。原文ではトランスポンダーシステムによる位置共有を勧め、それによって違法な飛行操作も追跡できると説明しています。

* ADS-Bの航空機送信は、低価格のUSB DVB-T受信機を含むSDRハードウェアで受信可能。[mwp-radar-view](https://github.com/stronnag/mwptools/wiki/mwp-Radar-View)、[ArdupilotのADS-B受信機](https://ardupilot.org/copter/docs/common-ads-b-receiver.html)、OpenHDなどの拡張を通じて統合可能。原文では、ADS-BはMAVLinkプロトコルに含まれ、多くのGCSシステムに表示されると説明。位置は[adsb-exchange.com](https://globe.adsbexchange.com/)でも閲覧可能。
* [INAV Radar](https://github.com/OlivierC-FR/ESP32-INAV-Radar) - LoRa無線とESP32で位置情報を配信し、OSDに表示。
* [FormationFlight](https://formationflight.org/getting-started/) - ESP32のWi-Fiで位置情報とテレメトリーを配信し、OSDに表示。
* [SoftRF](https://github.com/Matthias84/awesome-flying-fpv/blob/2d1764ddf480e27f013efaab4b4be19047ada99c/hhttps:/github.com/lyusupov/SoftRF/wiki/Nano-Edition) - FLARMなどのシステムに対応するNano版。
* [Glidernet](https://www.glidernet.org) - FLARMとADS-Bの位置情報をオンライン共有。
* [Opensky Network](https://opensky-network.org) - ADS-Bの位置情報をオンライン共有。
* [Stratux](https://github.com/stratux/stratux) - 各種無線送信機で位置と進路を共有。
* [ArduPilot RemoteID Transmitter](https://github.com/ArduPilot/ArduRemoteID) - MAVLinkとDroneCANを統合したFCC RemoteID。
* [WiFi RID capture](https://github.com/sxjack/unix_rid_capture) - スニファーでリモート識別信号を取得。
* [Drone Detection and Tracking Using RF Identification Signals ](https://www.mdpi.com/1424-8220/23/17/7650) - Wi-FiとKISMETスニファーでDJIドローンを追跡。

### ハッキングと乗っ取り<a id="hacking--hijacking"></a><a id="ハッキングと乗っ取り-"></a><a id="hacking--hijacking-"></a>

原文では、無線通信には本質的にセキュリティ上の弱点があり、容易に妨害できると警告しています。

* [RFUAV](https://github.com/kitoweeknd/RFUAV) - 無線によるドローン検出と信号の指紋識別。
* [Drone Remote ID Monitoring System](https://github.com/cyber-defence-campus/RemoteIDReceiver) - RemoteIDからDJIドローンを地図上に表示するWebフロントエンド。
* [WTF WJI, UAV CTF?](https://ftp.fau.de/cdn.media.ccc.de/events/camp2023/h264-hd/camp2023-57063-eng-WTF_DJI_UAV_CTF_hd.mp4) - DJI Mini 2のメーカーによる制限を回避するためのリバースエンジニアリングを扱う、Felix Domkeのcccamp23講演。メモリーダンプ解析、暗号鍵の復号、無線解析を含み、DJIのエコシステムと[オープンソースの構成要素](https://www.dji.com/de/opensource)を解説。
* [Drone-ID Receiver for DJI OcuSync 2.0](https://github.com/RUB-SysSec/DroneSecurity) - SDRとPythonで、DroneIDや操縦者の位置を含むDJI無線通信をデコード。
* [Debugging Microcontrollers ](https://media.ccc.de/v/camp2023-57321-debugging_microcontrollers) - NuttX RTOSで動くPX4ハードウェアのマイクロコントローラーのデバッグの難しさを扱う、Niklas Hauserのcccamp23講演。
* [5.8GHz video demodulation](https://www.youtube.com/watch?app=desktop&v=rl8ACNnjPFA) - HackRF SDRによる映像復調。
* [GPS jamming](https://www.researchgate.net/publication/339824302_Effective_GPS_Jamming_Techniques_for_UAVs_Using_Low-Cost_SDR_Platforms) - BladeRF SDRとGNU Radioで衛星信号を妨害するGPSジャミングの研究。
* [GPS spoofing](https://rnl.ae.utexas.edu/images/stories/files/papers/unmannedCapture.pdf) - 地上から衛星通信を偽装し、他のUAVを制御する研究。
* [RemoteID Spammer/Spoofer](https://github.com/jjshoots/RemoteIDSpoofer) - ESP8266/NodeMCUベースのドローンRemoteID偽装装置。
* [Accoustic drone tracking](https://www.youtube.com/watch?v=cSuV9xzcgXY&feature=youtu.be) - Fraunhofer IDMTによる論文。
* [Robot Vulnerability Database](https://github.com/aliasrobotics/RVD) - 半自律型機械のCVE。

## 付属品<a id="accesoirs"></a><a id="アクセサリー-"></a><a id="accesoirs-"></a>

3Dプリントにより、機器や機体に役立つ付属品を作れます。

* [Delta 5 race timer](https://github.com/scottgchin/delta5_race_timer) - 5.8 GHz映像信号でラップカウンターを作動。
  * [RotorHazard](https://github.com/RotorHazard/RotorHazard) - 複数のノードと中央のRaspberry Piサーバーを使う後継。
* [Capture The Flag for drones](https://github.com/SeekND/CaptureTheFlag) - 近距離のチームゲームで旗を模擬する光学システム。
* ジンバルの保護具
* ホルダーとスタンド
* アクションカメラ用マウント
* ローターガード

### モバイルアプリ<a id="mobile-apps"></a><a id="モバイルアプリ-"></a><a id="mobile-apps-"></a>

原文で有用と紹介される無料のモバイルアプリです。必ずしもオープンソースではありません。

* [SpeedyBee](https://www.speedybee.com/speedy-bee-app/) - Betaflight、iNAV、EmuFlightのフライトコントローラーパラメーター設定とブラックボックスログ表示。[Android](https://play.google.com/store/apps/details?id=com.runcam.android.runcambf)、[iOS](https://apps.apple.com/us/app/speedybee-app/id1150315028)。
* [BLHeli_32](https://play.google.com/store/apps/details?id=org.blheli.BLHeli_32) - BLHeli_32のESCを設定。
* [FPV Video Channelsorter 5.8GHz](https://play.google.com/store/apps/details?id=florian.felix.flesch.fpvvideochannelsorter) - 使用可能な周波数の範囲で、各操縦者のチャンネルを並べ替え。
* [UAV Forecast](https://www.uavforecast.com) - 天気予報、GPS衛星、太陽活動（Kp）、飛行禁止区域、飛行制限。[Android](https://play.google.com/store/apps/details?id=com.uavforecast)、[iOS](https://apps.apple.com/us/app/uav-forecast/id1050023752)。
* [Go FPV](https://play.google.com/store/apps/details?id=com.vertile.fpv3d) - DIY FPVゴーグル用に作られた、UVCビデオカメラの表示・録画アプリ。

### 作業台<a id="workbench"></a><a id="作業台-"></a><a id="workbench-"></a>

* [smoke stopper](https://oscarliang.com/smoke-stopper/) - 組み立て中の部品損傷を防ぐための器具。
* [4AxisFoamCutter](https://github.com/rahulsarchive/4AxisFoamCutter) - 発泡材から空力を考慮した翼を製作。

## 法規情報<a id="legal-information-️"></a><a id="法的情報-️"></a>

空域に関する法律や規則は国によって異なります。以下の資料の説明は、記録されたREADMEの内容を保持しています。

* [Luftfahrt Bundesamt](https://www.lba.de/DE/Drohnen/Drohnen_node.html) - ドイツ：法的枠組み。
* [Deutsche Flugsicherung GmbH](https://www.dfs.de/homepage/de/drohnenflug/) - ドイツ：試験と承認。
* [Digitale Plattform Unbemannte Luftfahrt](https://www.dipul.de/homepage/de/) - ドイツ：地図プラットフォーム。代替として[Droniq App](https://play.google.com/store/apps/details?id=de.droniq.droniqapp&hl=de&gl=US)も掲載。
* [Bundesnetzagentur](https://www.bundesnetzagentur.de/DE/Sachgebiete/Telekommunikation/Unternehmen_Institutionen/Frequenzen/Grundlagen/Frequenzplan/frequenzplan-node.html) - ドイツ：使用可能な送信周波数と電力。

* [Urząd Lotnictwa Cywilnego](https://drony.ulc.gov.pl) - ポーランド民間航空局。ポーランドとEUでのライセンス申請。
* [Bezzałogowe Statki Powietrzne](https://ulc.gov.pl/pl/drony) - ポーランド：UAV運用に関する規則。

## コミュニティ<a id="communities-️"></a><a id="コミュニティ-️"></a>

UAVの操縦者、改造愛好家、ハッカーと、アイデアや疑問を共有するためのコミュニティを紹介します。

* [Dronecode foundation](https://www.dronecode.org) - MAVLink、QGroundControl、PX4を支える、Linux Foundationの一員。
* [FPV Freedom Coalation](https://fpvfc.org/) - ドローンの改造可能性と安全性を維持。
* [Deutscher Modellflieger Verband e.V.](https://www.dmfv.aero) - ドイツ：イベント、地域コミュニティ、保険などのサービス。
* [Deutscher Aero Club e.V.](https://www.daec.de) - ドイツ。

### フォーラムとソーシャルメディア<a id="forums--social-media"></a><a id="forums-social-media"></a>

* [rcroups.com](https://rcroups.com) - 原文では、ほとんどのプロジェクトがここでサポートを提供すると説明。
* [diydrones.com](https://diydrones.com) - プロジェクト、ハードウェア、国ごとのグループ。
* [rotorbuilds.com](https://rotorbuilds.com) - 独自機体の製作手順。
* [openrcforums.com](https://openrcforums.com) - 原文の紹介時点まで、過去から続くオープンなモデルを扱うコミュニティ。
* [Stackexchange Drones](https://drones.stackexchange.com/) - ドローン製作向けの、Stack Overflow形式の質問と回答。
* [reddit \\motorcopter](https://www.reddit.com/r/Multicopter/) - マルチコプターの飛行、墜落、修理、独自改造。
* [reddit \\RCPlanes](https://www.reddit.com/r/RCPlanes/) - 同じ話題をRC機に絞って扱うコミュニティ。
* [OscarLiang.com](https://OscarLiang.com) - 製作、設定、知識を扱うブログ。原文では重要な資料と説明。
* [intofpv.com](https://intofpv.com) - FPV関連の情報を扱うフォーラム。
* [INAV fixed wing group](https://inavfixedwinggroup.com/) - 固定翼機向けのフォーラム、ブログ、製作例。特にINAV対応のオートパイロット向け。
* [fpv-community.de](https://fpv-community.de) - ドイツ：DIYの製作例も収録。
* [RC-Network.de](https://RC-Network.de) - ドイツ：船や車を含むDIYの製作例。原文で充実していると説明される[Wiki](https://wiki.rc-network.de/wiki/Hauptseite)も掲載。
* [kopterforum.de](https://kopterforum.de) - ドイツ：DIYの製作例も収録。

### 動画チャンネル<a id="video-channels"></a>

* [Painless 360](https://www.youtube.com/c/Painless360) - 英国：製作、改造、設定の基礎。
* [ArxangelRC](https://www.youtube.com/c/ArxangelRC) - ブルガリア：製作、設定、一部のマッピング。
* [Joshua Bardwell](https://www.youtube.com/c/JoshuaBardwell) - 米国：コプターの製作と一般的なヒント。スローガンは「You gonna learn something today」（今日は何かを学べる）。
* [PawelSpechalski](https://www.youtube.com/c/Pawe%C5%82Spychalski) - INAVのコアチーム。主にコプターを扱う。スローガンは「Happy Flying」（楽しい飛行を）。
* [Andrew Netwon](https://www.youtube.com/c/AndrewNewtonAustralia) - オーストラリア：主に機体レビューと製作のヒント。
* [Mr. D - Falling with style](https://www.youtube.com/c/MrDFallingwithstyle) - 英国：DarrenによるINAV関連のチャンネル。
* [CurryKitten](https://www.youtube.com/c/CurryKitten/) - OpenHDやExpressLRSなどのレビュー。
* [MarioFPV](https://www.youtube.com/channel/UCX2UiZjg485tDoq_Yl4Pysw) - OpenHD、RubyFPV、WFG-NGの実験。
* [TreeOrbit](https://www.youtube.com/user/montreetormee) - OpenHDとRubyFPVの実験。
* [flitetest.com](https://flitetest.com) - 独特なDIY製作を紹介するテレビ番組。
* [Livyu FPV](https://www.youtube.com/c/LivyuFPV/videos) - 飛行映像と、自作ドローン電子回路の修理動画。
* [Adam G does FPV](https://www.youtube.com/c/AdamGdoesFPV) - 製作、改造、基礎。
* [BLuefish](https://www.youtube.com/channel/UCmULLc8W-knTqiFqJgw3-FA) - 製作、INAV、長距離飛行。
