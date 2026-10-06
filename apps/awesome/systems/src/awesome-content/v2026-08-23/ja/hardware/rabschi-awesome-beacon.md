---
title: "Awesome Bluetooth Beacon"
description: "iBeacon・Eddystoneの仕様、各OS向けライブラリ、ビーコンの探索・送信アプリ、設置資料、開発キットを探せます。"
licenseSource: "github-rabschi-awesome-beacon-readme-md"
---

# Awesome Bluetooth Beacon

iBeacon・EddystoneによるBluetoothビーコンの開発と利用に役立つ、プロトコル仕様、各OS向けライブラリ、探索・送信アプリ、設置資料、開発キットを紹介します。Physical Web、BLE・Web Bluetoothのツール、近接技術の標準も探せます。説明と対応プラットフォームの版は、記録された原リストに基づいています。

## Google Eddystone<a id="eddystone-by-google"></a>

原リストでは、Eddystoneを現実世界に情報を付与するプラットフォームと紹介しています。アプリや端末が、適切なタイミングで文脈に応じた情報を提供するためのものです。

* [Google Developersのビーコン情報](https://developers.google.com/beacons/)
* [Eddystoneのプロトコル仕様・ツール](https://github.com/google/eddystone)
* アドバタイジングフレームの種類
  * [Eddystone-UID](https://github.com/google/eddystone/tree/master/eddystone-uid)
  * [Eddystone-TLM](https://github.com/google/eddystone/tree/master/eddystone-tlm)
  * [Eddystone-URL](https://github.com/google/eddystone/tree/master/eddystone-url)
* [Eddystone検証ツール](https://github.com/google/eddystone/tree/master/tools/eddystone-validator)
* [Eddystone GATT設定サービス・Google Nearby API・Proximity API](https://github.com/NordicSemiconductor/Android-nRF-Beacon-for-Eddystone) - Nordic Semiconductorによるツール。
* [Web BluetoothによるEddystone設定ツール](https://beaufortfrancois.github.io/sandbox/web-bluetooth/eddystone-url-config/)
* [Eddystoneのブランドガイドライン](https://github.com/google/eddystone/tree/master/branding)・[ロゴ](https://github.com/google/eddystone/tree/master/branding/assets)

## Physical Web

Physical Webは、事前にアプリをダウンロードせず、必要なときにスマートデバイスを操作できるようにする取り組みです。原リストでは、自動販売機、ポスター、玩具、バス停、レンタカーを例に挙げ、タップするだけで利用できることを目指しています。

* [Physical Web：近づくだけで利用する](http://google.github.io/physical-web/) - 公式GitHubリポジトリ。
* [動画：Physical Web入門](https://www.youtube.com/watch?v=w0XazPrh7r0) - Ubiquity Dev Summit 2016での発表。
* [URL検証ツール1](https://beaufortfrancois.github.io/sandbox/physical-web/url-validator/)、[URL検証ツール2](https://url-caster.appspot.com/webui)
* [開発者向けPhysical Web導入ガイド](https://docs.google.com/document/d/1VC9umaw9TItV31WrcX0eJ9xVsfXXQoWvUjuSqWXmH8A)
* [Physical Webの実装状況](https://github.com/google/physical-web/blob/master/implementation-status.md)
* [Physical Webのブランドガイドライン](https://github.com/google/physical-web/blob/master/documentation/branding_guidelines.md)・[ロゴ](https://github.com/google/physical-web/tree/master/documentation/images/logo)
* [IEEE: Enabling the Internet of Things](https://web.eecs.umich.edu/~prabal/teaching/resources/eecs582/want15iot.pdf) - R. Want、B. Schilit、S. Jensonによる論文。
* [ビーコンを購入せずにPhysical Webを試す](https://medium.com/@urish/exploring-the-physical-web-without-buying-beacons-efae51e36c2e)

## Google Proximity Beacon API<a id="proximity-beacon-api-by-google"></a>

* [ビーコン入門：Google Beacon Platformを使い始める](https://www.youtube.com/watch?v=0QeY9FueMow) - Ubiquity Dev Summit 2016での動画発表。
* [ビーコンの利用を始める](https://developers.google.com/beacons/get-started) - Bluetooth Low Energy（BLE）ビーコンを使い、近接情報に基づく体験を提供するための手順。
* [Proximity Beacon API](https://developers.google.com/beacons/proximity/guides) - BLEビーコンに関連するデータをRESTインターフェースで管理するクラウドサービス。
* [Nearby](https://developers.google.com/nearby/) - 近くの端末と人の間で、シンプルな操作や情報のやり取りを実現するツール。

## AppleのiBeacon資料<a id="ibeacon-resources-by-apple"></a>

AppleのiBeacon開発者向け資料では、iOS端末とiBeaconハードウェアの間で位置情報を生かした操作や情報提供を説明しています。スポーツイベントの来場者を迎える用途や、近くの博物館展示を案内する用途を挙げています。

* [開発者向けiBeacon資料](https://developer.apple.com/ibeacon)
* [iBeacon導入ガイド（PDF）](https://developer.apple.com/ibeacon/Getting-Started-with-iBeacon.pdf)
* [iBeaconのアートワークと仕様](https://developer.apple.com/ibeacon/)
* [iOS：iBeacon端末の互換性について](https://support.apple.com/en-us/HT202880)
* [iOS 7：位置情報サービスについて](https://support.apple.com/en-us/HT201357)
* [Apple AirLocateのサンプルコード](https://developer.apple.com/library/ios/samplecode/AirLocate/Introduction/Intro.html)（[iOS 8向け修正](http://stackoverflow.com/questions/26079530/apple-airlocation-demo-app-ranging-not-shows-beacons)）

## iBeacon開発者向け資料<a id="ibeacon-for-developers"></a>

* [Building Applications with iBeacon](http://shop.oreilly.com/product/0636920033813.do)
* [CiscoのiBeacon FAQ](http://www.cisco.com/c/dam/en/us/solutions/collateral/enterprise-networks/connected-mobile-experiences/ibeacon_faq.pdf)
* [ThoughtWorksによる5分の概説：iBeaconとは](https://www.thoughtworks.com/insights/blog/what-is-ibeacon-in-5-minutes)
* [iBeaconを使うための技術的な概説](https://www.thoughtworks.com/insights/blog/semi-technical-lowdown-working-ibeacons)
* [CapTechのウェビナー：iBeaconを解説](https://www.youtube.com/watch?v=0IGeQqEGhx4)
* [RadiusNetworksによるビーコン技術の5つの基本的な誤解](http://developer.radiusnetworks.com/2014/01/10/ibeacon-misconceptions.html)
* [開発者に聞く：ビーコンにはどのような制約があるか](http://mashable.com/2014/05/09/beacons-limitations/)
* [ビーコンとジオフェンシングの違い](http://mashable.com/2014/02/24/beacons-geofencing-location/)
* [beekn.netのiBeaconハードウェアガイド](http://beekn.net/guide-to-ibeacons/)
* [beekn.netによるiBeaconアプリ開発](http://beekn.net/developing-ibeacon-app/)

## 活用例と関連プロジェクト<a id="hacks--cool-apps"></a><a id="活用例と便利なアプリ"></a>

* [視覚障害のある人の自立した移動を支援](https://www.wayfindr.net) - オープンな標準。
* [Google Glassとビーコン](https://github.com/tmwagency/Glasstimote)
* [iBeaconでできる10のこと](http://blog.twocanoes.com/post/68861362715/10-awesome-things-you-can-do-today-with-ibeacons) - Twocanoesによる記事。
* [PunchClock](https://github.com/panicinc/PunchClock) - iBeaconとジオフェンシングを使った、iOS 7以降向けの出入り記録アプリ。
* [GeofancyのiOSアプリ](https://github.com/LocativeHQ/ios-app) - ジオフェンシングとiBeaconを使ったホームオートメーション用アプリ。
* [iOS向けLaunchHere：iBeaconを使ったアプリのショートカット](http://launchhere.awwapps.com/)
* [ビーコンを使った旅行：預けた荷物を手軽に管理](https://medium.com/@urish/traveling-with-beacons-checked-luggage-made-easy-bbd664765ea3)

### 設置と無線計画<a id="installation--radio-planning"></a>

* Brooklyn Museum：[iBeaconによる来館者の位置推定](https://www.brooklynmuseum.org/community/blogosphere/2014/10/14/positioning-visitors-with-ibeacons/)・[iBeaconの問題を把握する](https://www.brooklynmuseum.org/community/blogosphere/2016/02/23/getting-visibility-on-the-ibeacon-problem/)

### ビーコン探索・設定ツール<a id="beacon-discovery--configuration-tools"></a>

* [ScanBeacon](https://github.com/RadiusNetworks/scanbeacon-gem) - Mac OS XのIOBluetooth、またはMac・Linuxに接続したBlueGiga BLE112端末で、ビーコンのアドバタイジングパケットを探索するRuby gem。

## iOS

### ビーコンスキャナーアプリ<a id="beacon-scanner-apps"></a>

* [RadiusNetworksのLocate Beacon](https://itunes.apple.com/us/app/locate-for-ibeacon/id738709014?mt=8)

### Swift

* [iOS向けEddystoneスキャナーのサンプルアプリ](https://github.com/google/eddystone/tree/master/tools/ios-eddystone-scanner-sample)
* [Apple iOS 7・8のCoreLocationを使ったSwiftによるiBeaconアプリ開発](http://ibeaconmodules.us/blogs/news/14702963-getting-started-developing-ibeacon-apps-with-swift-on-apple-ios-7-8)
* [Udemy：iPhone向けiBeacon開発](https://www.udemy.com/ibeacon-development-for-iphone/)
* [HiBeacons](https://github.com/nicktoumpelis/HiBeacons) - Swiftで書かれたiBeaconのデモアプリ。
* [PubNub.com：Swiftによる双方向のiBeacon通信](https://www.pubnub.com/blog/2014-08-19-smart-ibeacon-communication-in-the-swift-programming-language/)
* [iOS・OS X向けのRxSwift用Bluetoothライブラリ](https://github.com/Polidea/RxBluetoothKit)
* [JMCiBeaconManager](https://github.com/izotx/JMCBeaconManager) - 近くのビーコンを検出するiBeaconマネージャークラス。
* [BeaconKit](https://github.com/igor-makarov/BeaconKit) - CoreBluetoothを使ったビーコン検出フレームワーク。Eddystone-UID、Eddystone-URL、AltBeaconに対応。

### Objective-C

* [KinveyLabsの汎用iBeacon管理・ユーティリティ](https://github.com/KinveyLabs/KCSIBeacon/)
* [バックグラウンドでのiBeacon検出・ブロードキャストを実装](https://github.com/Instrument/Vicinity)
* [RABeaconManager](https://github.com/reelyactive/ble-ios-sdk) - フォアグラウンドとバックグラウンドでBluetoothビーコンとiBeaconを検出するライブラリ。

### Stack Overflowの質問<a id="stackoverflow-qa"></a><a id="stack-overflow-qa"></a>

* [バックグラウンドでのiBeacon検出時間](http://stackoverflow.com/questions/25495804/ibeacon-detection-time-in-background-home-automation-use-case/25496669#25496669)
* [20個を超えるビーコンの領域監視と近接検出](http://stackoverflow.com/questions/25387660/ibeacon-region-monitoring-and-proximity-for-20-beacons)
* [iOSのCLProximityImmediateでフォアグラウンドのiBeacon測距を高速化するには](http://stackoverflow.com/questions/23991733/how-to-make-ibeacon-foreground-ranging-for-clproximityimmediate-faster-in-ios/23992584#23992584)
* [バックグラウンドでiBeaconの送信を開始できるか](http://stackoverflow.com/questions/24164523/can-we-start-ibeacon-transmitter-in-background/24165073#24165073)
* [iBeaconはどのようにアプリを起動するか](http://stackoverflow.com/questions/24590534/how-does-ibeacon-wake-up-our-app-for-how-long-and-how-to-extend-that-time/24590886#24590886)
* [iBeaconの代わりにCore Bluetoothを使う場合の問題点](http://stackoverflow.com/questions/24267421/use-core-bluetooth-instead-of-ibeacon-any-downsides/24268389#24268389)

## 仮想ビーコン<a id="virtual-beacons"></a>

* [Beacon Toy：Eddystoneのアドバタイジングを送信するAndroidアプリ](https://play.google.com/store/apps/details?id=net.alea.beaconsimulator)
* [AndroidのBLEアドバタイジング用ライブラリ](https://github.com/uriio/beacons-android)
* [Radius NetworksのLocate：仮想iBeacon](https://itunes.apple.com/us/app/locate-beacon/id738709014?mt=8)
* [Eddystoneパケットを送信するChromeアプリ](https://github.com/google/eddystone/tree/master/tools/eddystone-chrome-app-sample) - [Eddystoneのアドバタイジング用ライブラリ](https://github.com/google/eddystone/tree/master/libraries/javascript/eddystone-advertising)を使用。
* [Linux向けiBeacon送信ツール](https://github.com/dburr/linux-ibeacon)
* [Quick Beacon](https://itunes.apple.com/us/app/quick-beacon/id1303172948?mt=8)

## Android

### ビーコン開発<a id="beacon-development"></a>

* [Android LollipopのBluetooth Low Energy拡張](https://developer.android.com/about/versions/android-5.0.html) - OSレベルのスキャンフィルターとペリフェラルモード。
* [Android向けiBeaconスキャナー](https://github.com/inthepocket/ibeacon-scanner-android)、[ドキュメント](https://github.com/inthepocket/ibeacon-scanner-android/wiki)・[ブログ記事](http://developer.inthepocket.mobi/2016/11/24/ibeacon-scanner-android/)
* [AltBeaconを基盤とするAndroidビーコンライブラリ](https://github.com/AltBeacon/android-beacon-library) - カスタムのビーコンパーサーでiBeacon端末との互換性を確保。
* [BeaconKeeper](https://github.com/m039/beacon-keeper) - バックグラウンドでiBeaconの位置を特定するライブラリ。
* [AndroidとBLE](https://developer.android.com/guide/topics/connectivity/bluetooth-le.html)
* [DevBytes：Android 4.3のBluetooth Low Energy API](https://www.youtube.com/watch?v=vUbFB1Qypg8)
* [Android向けBLE SDK](https://github.com/RedBearLab/Android)
* [Android向けBluetooth LEライブラリ](https://github.com/alt236/Bluetooth-LE-Library---Android)
* [reelyactive-ble-android-sdk](https://github.com/reelyactive/ble-android-sdk) - ビーコンの探索と、ビーコンとしてのアドバタイジング送信を行うSDK。

### ビーコンスキャナーアプリ<a id="beacon-scanner-apps-1"></a><a id="ビーコンスキャナーアプリ--1"></a>

* [iBeacon Scanner](https://play.google.com/store/apps/details?id=be.createweb.beaconscanner)・[ソースコード](https://github.com/eliaslecomte/ibeacon-scanner-app)
* [Beacon Scanner & Logger](https://github.com/justinodwyer/Beacon-Scanner-and-Logger) - BLEビーコンとiBeaconを探索し、結果をファイルに記録するAndroidアプリ。
* [iBeacon Detector](https://play.google.com/store/apps/details?id=youten.redo.ble.ibeacondetector&hl=de)
* [Bluetooth 4.0 Scanner](https://play.google.com/store/apps/details?id=com.bluemotionlabs.bluescan&hl=de)

### ビーコン送信アプリ<a id="beacon-advertiser-apps"></a><a id="ビーコンadvertiserアプリ"></a>

* [Beacon Simulator](https://play.google.com/store/apps/details?id=net.alea.beaconsimulator) - iBeacon、Eddystone、AltBeacon。

### Stack Overflowの質問<a id="stackoverflow-qa-1"></a><a id="stack-overflow-qa--1"></a>

* [BLEによる距離推定](http://stackoverflow.com/questions/20416218/understanding-ibeacon-distancing/20434019#20434019)

## Cordova、PhoneGap、Xamarin、Titanium<a id="cordova-phonegap-xamarin-titanium"></a>

* [Cordova用iBeaconプラグイン](https://github.com/petermetz/cordova-plugin-ibeacon)
* [Xamarin.iOS・Xamarin.AndroidでiBeaconを使う](http://de.slideshare.net/glennthomasstephens/ibeacon-support)
* [TitaniumモジュールでのiBeaconのアドバタイジング送信と探索](https://github.com/jbeuckm/TiBeacons)

## OS X

* [OS X向けiBeacon探索ユーティリティ](https://github.com/mlwelles/BeaconScanner)
* [iBeacon Scanner：UUIDを問わず近くのiBeaconを探索](https://github.com/liamnichols/iBeaconScanner)
* [Beacon OSX](https://github.com/mttrb/BeaconOSX) - MavericksをiBeaconとして利用。
* [Electron Physical Web Scan](https://github.com/dermike/electron-physical-web-scan) - Physical Web（Eddystone）のBluetoothビーコンを探索するMac OS X用デスクトップアプリ。
* [Electron Slide Beacon](https://github.com/dermike/electron-slide-beacon) - Eddystone URL（Physical Web）のBluetoothビーコンとしてブロードキャストし、Macのリンクを共有。
* [BeaconKit](https://github.com/igor-makarov/BeaconKit) - Swiftで書かれた、CoreBluetoothを使うビーコン検出フレームワーク。Eddystone-UID、Eddystone-URL、AltBeacon、iBeaconに対応。

## Linux

* [Eddystone-URLでURLを探索・送信するPythonスクリプト](https://github.com/forksociety/PyBeacon)

## Node.js

* [Physical Webと連携するNode-REDノード](http://flows.nodered.org/node/node-red-node-physical-web)
* [Node.jsのBLEセントラル用モジュール](https://github.com/sandeepmistry/noble)
* [BLEペリフェラルを実装するNode.jsモジュール](https://github.com/sandeepmistry/bleno)

## Windows

* [Universal Bluetooth Beacon Library](https://github.com/andijakl/universal-beacon) - Eddystone・iBeaconビーコンと通信するためのオープンソースライブラリと、アプリへのリンク。

## Bluetooth Low Energy

* [Bluetooth Smartの公式情報](https://www.bluetooth.com/what-is-bluetooth-technology/bluetooth-technology-basics/low-energy)

### Bluetooth Smart・BLEツール<a id="bluetooth-smart--ble-tools"></a>

* [nRF Master Control Panel (BLE)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp) - Bluetooth Smart（BLE）端末を探索し、調査や通信を行う汎用ツール。
* [LightBlue Mac OSX](https://itunes.apple.com/de/app/lightblue/id639944780?mt=12)（[iOS版](https://itunes.apple.com/us/app/lightblue-bluetooth-low-energy/id557428110?mt=8)） - Bluetooth 4.0 Low Energyを使うすべての端末をテスト。Bluetooth SmartやBluetooth Lightとも呼ばれる規格に対応。
* [Punch ThroughのiOS向けBlueSpeed](https://itunes.apple.com/us/app/bluespeed/id579118786?mt=8) - 2台のiOS端末間のBluetooth LE通信速度をテスト。

### Web Bluetooth API

* [Web Bluetooth入門](https://dev.opera.com/articles/web-bluetooth-intro/) - Operaによる解説。
* [Web Bluetoothのデモ](https://github.com/WebBluetoothCG/demos)

## ビーコン開発キットとBLEチップ<a id="beacon-developer-kits--ble-chips"></a>

* [Texas InstrumentsのBLE情報](http://www.ti.com/ble)
* [Texas InstrumentsのSensorTag開発キット](http://makezine.com/2014/04/16/the-ti-sensortag-now-with-added-ibeacon/)
* [TI SensorTagのAndroidソースコード](http://git.ti.com/sensortag-android)
* [BroadcomのWICED™ Sense開発キット](http://www.broadcom.com/application/internet_of_things.php)
* [Dialog Semiconductor](http://www.dialog-semiconductor.com/bluetooth-smart)
* [EMMicroelectronics](http://www.emmicroelectronic.com/products/wireless-rf/beacons/embc01)

## 近接技術の動向と展望<a id="proximity-trends--outlook"></a>

* [Wired](http://www.wired.com/2013/12/4-use-cases-for-ibeacon-the-most-exciting-tech-you-havent-heard-of/) - AppleのiBeaconがインタラクションデザインを変えるとする4つの理由。
* [Wi-Fi Aware™](http://www.wi-fi.org/discover-wi-fi/wi-fi-aware) - 原リストで新しいと紹介されているWi-Fi Allianceの認定プログラム。リアルタイムで省電力の検出機能により、Wi-Fiを拡張し、その場の状況に応じた体験をすぐに提供。

## ベンダー主導のビーコン標準化<a id="vendor-driven-beacon-standardization"></a>

* [BeaconCtrl](https://github.com/upnext/BeaconCtrl) - 大規模なビーコン設置環境を設定・管理するオープンソースプラットフォーム。
* [オープンで相互運用可能な近接ビーコンの仕様](http://altbeacon.org/)
