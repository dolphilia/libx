---
title: "homematic-community/awesome-homematic"
description: "homematic-community/awesome-homematicの日本語訳"
licenseSource: "github-homematic-community-awesome-homematic-readme-md"
---

# Awesome Homematic [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> Homematicに関連するリンクの厳選リストです。

[Homematic](https://www.homematic.com/)は、メーカー[eQ-3](https://www.eq-3.de)が提供するスマートホーム機器シリーズで、特にドイツで広く利用されています。


## 目次

- [コミュニティ](#community)
- [ドキュメント](#documentation)
- [モバイルアプリ](#mobile-apps)
- [CCU代替](#ccu-alternatives)
- [代替センサーとアクチュエーター](#alternative-sensors-and-actuators)
- [CCUアドオン](#ccu-addons)
- [連携ソフトウェア](#interfacing-software)
- [その他のソフトウェア](#misc-software)
- [ソフトウェアモジュール](#software-modules)
- [スマートホームソフトウェア](#smart-home-software-supporting-homematic)
- [その他](#misc)
- [ライセンス](https://github.com/homematic-community/awesome-homematic/blob/b76537fb3f6ddd6181292a034f6a1aa0e19a93af/License)


## コミュニティリソース（主にドイツ語）

* [Haus Automatisierung](https://haus-automatisierung.com/) - ニュース、ブログ、YouTube、チュートリアルなど。
* [Homematic Forum](https://homematic-forum.de/forum/) - ディスカッションフォーラムです。
* [Homematic Forum: Link/Skript-Sammlung](https://homematic-forum.de/forum/viewtopic.php?f=26&t=27907) - AndiNによる厳選リンク集です。
* [Homematic Forum: HomeMatic - Tipps für Anfänger](https://homematic-forum.de/forum/viewtopic.php?f=31&t=22801) - Sammyによる初心者必読の資料です。
* [Homematic Guru](https://homematic-guru.de/) - ニュース、ブログ、チュートリアルなど。
* [Homematic Inside](https://www.homematic-inside.de/) - ニュース、ブログ、チュートリアルなど。
* [Homematic Blog Lison](https://homematic-blog.lison.ch/) - ブログ、チュートリアルなど。
* [Technikkram](https://technikkram.net) - ニュース、ブログ、チュートリアルなど。
* [OwnSmartHome](https://ownsmarthome.de/category/homematic/) - ニュース、ブログ、チュートリアルなど。
* [Verdrahtet](https://www.verdrahtet.info/) - ニュース、ブログ、YouTube、チュートリアルなど。
* [Wikimatic](http://www.wikimatic.de/wiki/Hauptseite) - コミュニティWikiです。


## ドキュメント

* [Dissecting HomeMatic AES](https://git.zerfleddert.de/hmcfgusb/AES/) - BidCosプロトコルのAESハンドシェイクを説明します。
* [Direktverknüpfungen im Expertenmodus](https://www.youtube.com/watch?v=1B4iwtK1Rmo) - Frank Grassによる講演です。
* [Virtuelle Aktorkanäle](https://www.youtube.com/watch?v=Cwxwtig6Q1I) - Frank Grassによる講演です。
* [Script Documentation](http://www.wikimatic.de/wiki/Script_Dokumentation) - 非公式のHomematic Scriptリファレンスです。
* [Keymatic Konfiguration](https://homematic-forum.de/forum/viewtopic.php?f=31&t=19196) - Homematic Forumにおけるrewe0815の投稿です。

## モバイルアプリ

* [@home](https://www.athomeapp.de/) - iOS（💵 広告削除のアプリ内購入あり）。
* [HistClient](https://www.sa-com.de/smarthome-special/histclient-handbuch/) - （💵 アプリ内購入）iOS／Android向けの高機能CCU-Historianクライアントです。
* [Home-24](http://www.home-24.net/index.php?page=sites/home.php&app=home24) - 💵 Android
* [HomeControl](http://www.ksquare.de/myhomecontrol/) - 💵 iOS
* [TinyMatic](https://www.tinymatic.de/) - 💵 Android（旧称HomeDroid）。
* [Pocket Control](https://www.penzler.de) - 💵 iOS
* [Battery Status for HomeMatic](https://zeezide.com/en/products/hmbattery/) - 💵 iOS


## CCU代替

* [debmatic](https://github.com/alexreinert/debmatic) - Debian系のamd64、armhf、arm64環境（Debian、Ubuntu、Raspbian、Armbian）へHomematic OCCUをインストールします。
* [docker-ccu](https://github.com/angelnu/docker-ccu) - Homematic CCUファームウェアをarmおよびエミュレートされたx86上の[Docker](https://www.docker.com)コンテナーとして実行します。
* [Homegear](https://homegear.eu/index.php/Main_Page) - スマートホーム機器をホームオートメーションソフトウェアや独自スクリプトと連携する、無料のオープンソースプログラムです。
* [piVCCU](https://github.com/alexreinert/piVCCU) - RaspbianまたはArmbian上の仮想コンテナー（LXC）へ純正Homematic CCUファームウェアをインストールします。
* [RaspberryMatic](https://github.com/jens-maus/RaspberryMatic) - Raspberry Piなどの組み込み機器でHomeMatic CCUを動かす、OCCUとLinux/buildrootベースの軽量ディストリビューションです。


## 代替センサー、アクチュエーター、ハードウェア改造

* [AskSinPPCollection](https://jp112sdl.github.io/AskSinPPCollection/) - AskSinPPを使った自作コンポーネントの入門、ドキュメント、プロジェクトです。
* [Beispiel_AskSinPP](https://github.com/jp112sdl/Beispiel_AskSinPP) - [AskSinPP](https://github.com/pa-pa/AskSinPP)ライブラリを利用するサンプルスケッチです。
* [HAUS-BUS.DE](http://www.haus-bus.de/) - 💵 Homematic Wired互換機器です。
* [Homematic Wired Hombrew Hardware](https://github.com/jfische) - Homematic Wired向けのさまざまな自作センサー／アクチュエーターです。
* [stall.biz](https://www.stall.biz/) - 💵 代替アンテナ、リビング向けマルチセンサー、気象観測装置など。


## CCUアドオン

* [CCU Historian](https://ccu-historian.de/) - 長期アーカイブとグラフを提供します。
* [CUxD](https://www.homematic-inside.de/software/tag/Zusatzsoftware ) - CCUの「多機能ツール」です。FS20や有料のEnOceanなどを接続し、仮想機器と便利なツールを提供します。
* [Email](https://github.com/jens-maus/hm_email) - メール送信用のHomeMatic CCUアドオンです。
* [HAP-HomeMatic](https://github.com/thkl/hap-homematic) - HomeKitからHomeMatic機器へアクセスするRaspberryMatic／CCU3アドオンです。https://github.com/thkl/homebridge-homematic と似ていますが、homebridgeを使いません。
* [hm-print](https://github.com/litti/hm-print) - CCUプログラムを印刷します。
* [hm-tools](https://github.com/fhetty/hm-tools) - RaspberryMatic向けツール集です。
* [hm_pdetect](https://github.com/jens-maus/hm_pdetect) - FRITZ!Boxを使って在宅を検出します。
* [Homeputer](https://www.contronics.de/shop/HomeMatic-System/Zentralen-und-Software.html) - 💵
* [Homematic-addon-hue](https://github.com/j-a-n/homematic-addon-hue) - Philips Hue向けHomeMaticアドオンです。
* [homematic_check_mk](https://github.com/alexreinert/homematic_check_mk) - check_mk_agentとして動作するHomematic CCU2／RaspberryMatic向けアドオンです。
* [jq](https://github.com/hobbyquaker/ccu-addon-jq) - jqをHomematic CCU3向けアドオンとしてパッケージ化しています。
* [Mosquitto](https://github.com/hobbyquaker/ccu-addon-mosquitto) - MosquittoをHomematic CCU3／RaspberryMatic向けアドオンとしてパッケージ化しています。
* [Patcher](https://github.com/hobbyquaker/Patcher) - パッチを簡単に適用するためのCCU3アドオンです。
* [rmupdate](https://github.com/j-a-n/raspberrymatic-addon-rmupdate) - RaspberryMatic自体の更新、GUIによるWLAN設定、強制再起動なしでの他アドオンのインストールと更新を行うRaspberryMaticアドオンです。
* [Redis](https://github.com/hobbyquaker/ccu-addon-redis) - RedisをHomematic CCU3／RaspberryMatic向けアドオンとしてパッケージ化しています。
* [RedMatic](https://github.com/rdmtc/RedMatic) - Homematic CCU3／RaspberryMatic向けの[Node-RED](https://nodered.org/)アドオンです。HomeKitとの容易な統合や、CCUをMQTTへ接続する専用ノードを提供します。
* [XML-API](https://github.com/hobbyquaker/xml-api) - HTTP／XMLによる簡易CCUアクセスを提供します。


## 連携ソフトウェア

* [CCU-Jack](https://github.com/mdzio/ccu-jack) - CCUへ安全かつ簡単にRESTアクセスでき、アドオンとしても利用できます。
* [homebridge-homematic](https://github.com/thkl/homebridge-homematic) - Homematic機器をHomeKitへ統合する[Homebridge](https://github.com/nfarina/homebridge)プラグインです。
* [homebridge-homematicip](https://github.com/marcsowen/homebridge-homematicip) - HmIP-HAPを使い、クラウド経由でHomematic IPを統合する[Homebridge](https://github.com/nfarina/homebridge)プラグインです。
* [hvl - Homematic Virtual Interface](https://github.com/thkl/Homematic-Virtual-Interface) - Hue、Harmony、Netatmo、Sonosなど他社機器をプラグインで統合し、アドオンとしても利用できます。
* [node-red-contrib-ccu](https://github.com/rdmtc/node-red-contrib-ccu) - Homematic CCU向けの[Node-RED](https://nodered.org)ノードです。



## その他のソフトウェア

* [check_homematic](https://github.com/hobbyquaker/check_homematic) - Homematic CCUを監視するNagios／Icingaプラグインです。
* [hm-simulator](https://github.com/hobbyquaker/hm-simulator) - Homematic CCUの一部をシミュレートします。
* [hmcfgusb](https://git.zerfleddert.de/cgi-bin/gitweb.cgi/hmcfgusb) - Linux／UnixでHM-CFG-USB(2)を使うためのユーティリティです。
* [HomeHub](https://github.com/Gerti1972/homehub) - PHP／XML-APIベースのウェブフロントエンドです。[フォーラム](https://homematic-forum.de/forum/viewtopic.php?f=41&t=50538)
* [homematic-manager](https://github.com/hobbyquaker/homematic-manager) - Homematicインターフェースプロセス（rfd／hs485d／homegear）を管理します。
* [language-homematic](https://github.com/Ayngush/language-homematic) - AtomでHomeMatic Scriptファイルの構文強調とスニペットを追加します。
* [occu-test](https://github.com/hobbyquaker/occu-test) - HomeMatic (O)CCUのロジック層であるReGaHssの自動システムテストです。
* [HMScriptEditor](https://zeezide.com/en/products/hmscripteditor/) - HomeMatic（Rega）スクリプト向けのシンプルなmacOSエディター兼ランナーです。

## ソフトウェアモジュール

* [binrpc](https://github.com/hobbyquaker/binrpc) - Xmlrpc_binプロトコルのクライアント／サーバーNode.jsモジュールです。
* [hm-discover](https://github.com/hobbyquaker/hm-discover) - Homematic CCUとインターフェースを検出するNode.jsモジュールです。
* [homematic-rega](https://github.com/hobbyquaker/homematic-rega) - Homematic CCU ReGaHSS Remote Script Interface向けNode.jsモジュールです。
* [homematicip-rest-api](https://github.com/coreGreenberet/homematicip-rest-api) - homematicIP REST API（クラウド／アクセスポイント方式）のPythonラッパーです。
* [homematic-gqls](https://github.com/martin-riedl/homematic-gqls) - [homematicip-rest-api](https://github.com/coreGreenberet/homematicip-rest-api)を基盤としてHomematic IPコンポーネントを照会するGraphQLサービスです。
* [homematic-xmlrpc](https://github.com/hobbyquaker/homematic-xmlrpc) - Xmlrpcクライアント／サーバーNode.jsモジュールです。
* [pmatic](https://github.com/LarsMichelsen/pmatic) - 使いやすいHomematic向けPython APIです。
* [pyhomematic](https://github.com/danielperna84/pyhomematic) - Homematic機器を操作するPython 3インターフェースです。

## Homematic対応スマートホームソフトウェア

* [everHome](https://everhome.de) - 💵
* [FHEM](https://fhem.de/)
* [Home Assistant](https://www.home-assistant.io/)
* [ioBroker](https://www.iobroker.net/?lang=de)
* [IP-Symcon](https://www.symcon.de/) - 💵
* [Mediola](https://www.mediola.com/) - 💵
* [OpenHAB](https://www.openhab.org/)
* [Pimatic](https://pimatic.org/)

## その他

* [AskSinAnalyzer](https://github.com/jp112sdl/AskSinAnalyzer) - HomeMatic環境向けの無線電文デコーダーです。DutyCycleが高すぎる場合などのトラブルシューティングに役立ちます。
* [AskSinAnalyzerXS](https://github.com/psi-4ward/AskSinAnalyzerXS) - ESPを必要としないデスクトップアプリ版AskSinAnalyzerです。
* [eagle-homematic](https://github.com/dersimn/eagle-homematic) - Homematicモジュール向けEagleライブラリです。
* [Tablet Wallmount](https://homematic-forum.de/forum/viewtopic.php?f=18&t=49421) - タブレットを壁へ埋め込むためのフレームです。
* [Homematic 3D Druck Collection auf Thingiverse](https://www.thingiverse.com/hobbyquaker/collections/homematic) - Homematic関連部品を自分で3D印刷するためのコレクションです。


## コントリビューション

コントリビューションを歓迎します。まず[コントリビューションガイドライン](https://github.com/homematic-community/awesome-homematic/blob/b76537fb3f6ddd6181292a034f6a1aa0e19a93af/contributing.md)をお読みください。


## ライセンス

[パブリックドメインCC0](https://creativecommons.org/publicdomain/zero/1.0/)
