---
title: "dotintent/awesome-ble"
description: "dotintent/awesome-ble の定本スナップショット"
licenseSource: "github-dotintent-awesome-ble-readme-md"
---

# Awesome BLE [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

![](https://raw.githubusercontent.com/dotintent/awesome-ble/a128934b017fedc72f6be6eca25b5d821e31794b/.github/awesome-ble.png)

**Bluetooth Low Energy（BLE）**: デバイス間の効率的なデータ交換を可能にする低消費電力無線通信プロトコル。IoT、ウェアラブル、その他の電池駆動アプリケーションに適しています。

[🔴 intent](https://withintent.com)による優れたBluetooth Low Energyリソースの共同作成リスト。

![](https://img.shields.io/github/last-commit/dotintent/awesome-ble/main)

## 目次

### ハードウェア
- [Arduino](#arduino)
- [ESP](#esp)
- [Nordic](#nordic)
- [RaspberryPi](#raspberrypi)

### モバイル
- [Android](#android)
- [Flutter](#flutter)
- [KMM](#kmm)
- [iOS](#ios)

- [ドキュメント](#documentation)
- [フレームワーク](#framework)
- [ライブラリ](#library)
- [ツール](#tool)
- [セキュリティ](#security)
- [Web](#web)

## ドキュメント

_Bluetooth Low Energy（BLE）プロトコルに関する公式仕様、標準、技術文書。_

- [Android Bluetooth Low Energy](https://developer.android.com/guide/topics/connectivity/bluetooth/ble-overview) - AndroidにおけるBLEの概要。
- [Developing a Bluetooth Low Energy Application by TI](https://software-dl.ti.com/lprf/simplelink_cc2640r2_sdk/1.35.00.33/exports/docs/ble5stack/ble_user_guide/html/ble-stack/index.html) - BLEアプリの開発方法に関するTIのガイド。
- [Getting Started with Bluetooth Low Energy (BLE)](https://learn.adafruit.com/introduction-to-bluetooth-low-energy) - Bluetooth Low Energy開発を始めるための包括的なガイド。
- [Intro to Bluetooth Generic Attribute Profile (GATT)](https://www.bluetooth.com/bluetooth-resources/intro-to-bluetooth-gap-gatt/) - GATTの紹介。
- [Intro to Bluetooth Low Energy](https://www.bluetooth.com/bluetooth-resources/intro-to-bluetooth-low-energy/) - BLEの基礎の紹介。
- [IoT for Beginners](https://microsoft.github.io/IoT-For-Beginners/#/) - MicrosoftのAzure Cloud Advocatesが提供する、IoTの基礎を扱う12週間・24レッスンのカリキュラム。
- [nRF51 SDK](https://www.nordicsemi.com/Software-and-tools/Software/nRF5-SDK) - Nordic SemiconductorのnRF51チップシリーズ上でBluetooth Low Energyアプリケーションを開発するためのソフトウェア開発キット（SDK）。
- [RN4870/71 Bluetooth Low Energy Module User's Guide](https://www.microchip.com/wwwproducts/en/RN4870) - MicrochipによるRN4870/71 Bluetooth Low Energyモジュールのユーザーガイド。
- [Wikipedia Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) - Bluetooth Low Energy（BLE）のwikiページ。

## フレームワーク

_BLE周辺機器を開発するのに役立つフレームワーク。_

- [Matter](https://github.com/project-chip/connectedhomeip) - Matter
- [Zephyr](https://github.com/zephyrproject-rtos/zephyr) - Zephyr

## ライブラリ

_モバイル、組み込みシステム、IoTデバイスなど、さまざまなプラットフォームへBluetooth Low Energy（BLE）機能を統合するためのソフトウェアライブラリとフレームワーク。_

- [bluepy](https://github.com/IanHarvey/bluepy) - Linux上のBluetooth LE向けPythonインターフェース。
- [Bluetooth](https://github.com/PureSwift/Bluetooth) - Bluetooth SIG仕様をサポートする複数のライブラリを持つSwiftマルチプラットフォームパッケージ。
- [bluez](http://www.bluez.org/) - 公式Linux Bluetoothプロトコルスタック。
- [bumble](https://github.com/google/bumble) - 完全にPythonで書かれたフル機能Bluetoothスタック。
- [pygatt](https://github.com/peplin/pygatt) - BLEデバイスと対話するためのPythonライブラリ。
- [SimpleBLE](https://github.com/OpenBluetoothToolbox/SimpleBLE) - MacOS、iOS、Windows、Linux向けのオールインワンC/C++/Python/Rust Bluetooth LEライブラリ。
- [Moddable](https://github.com/Moddable-OpenSource/moddable) - マイクロコントローラー開発向けのJavaScriptライブラリとツール。BLE機能を含みます。

## iOS

_AppleデバイスでBluetooth Low Energy（BLE）アプリケーションを開発するためのiOSライブラリ、ツール、リソース。_

- [AsyncBluetooth](https://github.com/manolofdez/AsyncBluetooth) - CoreBluetooth APIへ並行性を追加する小さなライブラリ。
- [CombineCoreBluetooth](https://github.com/StarryInternet/CombineCoreBluetooth) - AppleのCoreBluetoothフレームワークとAppleのCombineフレームワークを橋渡しするライブラリ。
- [iOS DFU Library](https://github.com/NordicSemiconductor/IOS-DFU-Library) - DFUアプリケーションでDKに新しいファームウェアを書き込めます。
- [Rx Bluetooth Kit](https://github.com/Polidea/RxBluetoothKit) - RxSwiftを使用してBLEデバイスとの対話をより快適にするBluetoothライブラリ。
- [Swifty Sensors](https://github.com/codeinversion/sensors-swift) - iOSとmacOS向けBluetooth LE Sensor Manager。
- [SpeziBluetooth](https://github.com/StanfordSpezi/SpeziBluetooth) - モダンなプログラミングパラダイムでBluetoothデバイスに接続・通信します。

## KMM

_Kotlin Multiplatform Mobile（KMM）フレームワークを使用してBluetooth Low Energy（BLE）アプリケーションを構築するためのリソースとライブラリ。_

- [BlueFalcon](https://github.com/Reedyuk/blue-falcon) - iOSとAndroid向けBluetooth Kotlinマルチプラットフォーム「Cross-Platform」ライブラリ。
- [Kable](https://github.com/JuulLabs/kable) - Kotlin Asynchronous Bluetooth Low Energyは、Bluetooth Low Energyデバイスと対話するシンプルなCoroutines駆動APIを提供します。

## Android

_Bluetooth Low Energy（BLE）機能をAndroidアプリケーションへ統合するためのAndroidライブラリ、ツール、リソース。_

- [Android BluetoothGatt Sample](https://github.com/android/connectivity-samples/tree/main/BluetoothLeGatt) - AndroidでBluetoothGatt APIを使用する方法を示すサンプルアプリケーション。
- [android-BluetoothChat](https://github.com/googlesamples/android-BluetoothChat) - Android Bluetoothチャットアプリケーション。
- [FastBle](https://github.com/Jasonchenlijian/FastBle) - Android Bluetooth Low Energy（BLE）の高速開発フレームワーク。
- [Nordic Semiconductor BLE SDK for Android](https://github.com/NordicSemiconductor/Android-BLE-Library) - Android開発向けにNordic Semiconductorが提供する公式Bluetooth Low Energy SDK。
- [RxAndroidBle](https://github.com/dariuszseweryn/RxAndroidBle) - RxJava3インターフェースを備えるAndroid Bluetooth Low Energy（BLE）ライブラリ。
- [SmartGattLib](https://github.com/movisens/SmartGattLib) - Bluetooth SMARTデバイス（Bluetooth 4.0ではBluetooth Low Energyとも呼ばれる）の作業を簡単にするJavaライブラリ。採用されたGATT仕様のすべてのUUIDと、特性（例: Heart Rate、BatteryLevel）を解釈する便利な方法を提供します。

## Flutter

_iOSとAndroidの両方でFlutterフレームワークを使用してBluetooth Low Energy（BLE）アプリケーションを開発するためのFlutterライブラリ、ツール、リソース。_

- [Flutter Blue Plus](https://github.com/boskokg/flutter_blue_plus) - Flutter Blue Plusは、開発者がモダンなマルチプラットフォームアプリを構築するのを助ける新しいアプリSDK、Flutter向けBluetoothプラグインです。
- [Flutter Reactive BLE](https://github.com/PhilipsHue/flutter_reactive_ble) - 複数デバイスのBLE操作を処理するFlutterライブラリ。
- [Flutter BLELib](https://github.com/dotintent/FlutterBleLib) - 周辺機器のシミュレーションをサポートするFlutter向けBluetooth Low Energyライブラリ。

## ツール

_アナライザー、デバッガー、シミュレーターなど、Bluetooth Low Energy（BLE）アプリケーションの開発・テストツール。_

- [Bettercap](https://github.com/bettercap/bettercap) - セキュリティ研究者がBLEセキュリティをテストするための、容易に拡張できポータブルなフレームワーク。
- [nRF Connect](https://github.com/NordicSemiconductor/pc-nrfconnect-core) - Nordic Semiconductorチップに基づくデバイスを開発、テスト、プロビジョニングするためのアプリケーションフレームワーク。
- [BLE Simulator](https://play.google.com/store/apps/details?id=com.withintent.ble.simulator&hl=en) - BLEデバイスを複製し、相互作用をスクリプト化できるモバイルアプリ。デバッグと迅速なプロトタイピングに有用です。
- [PacketLogger](https://www.bluetooth.com/blog/a-new-way-to-debug-iosbluetooth-applications/) - iOSデバイスからBLEパケットとHCIログを取得するmacOSツール。Bluetooth通信とプロトコルの問題のデバッグに有用です。

## Web

_JavaScriptとウェブ技術を使用してBluetooth Low Energy（BLE）アプリケーションを構築する、ウェブベースのリソース、フレームワーク、ツール。_

- [Web Bluetooth Samples](https://github.com/WebBluetoothCG/demos) - Web Bluetooth API使用例のコレクション。

## セキュリティ

_BLEに関するセキュリティ関連リソース。_

- [Awesome Bluetooth Security](https://github.com/engn33r/awesome-bluetooth-security) - Bluetooth（およびBLE）関連の優れたセキュリティリポジトリ。

## Arduino

_Arduinoハードウェアに特化したリソースのリスト。_

- [Arduino](https://store.arduino.cc/) - 公式ウェブサイト
- [ArduinoBLE](https://github.com/arduino-libraries/ArduinoBLE) - Arduino向けArduinoBLEライブラリ

## ESP

_EspressIfハードウェアに特化したリソースのリスト。_

- [EspressIf](https://www.espressif.com/) - 公式ウェブサイト
- [ESP-IDF](https://github.com/espressif/esp-idf) - Espressif IoT Development Framework
- [ESP-32-C3 + Rust + BLE](https://dev.to/theembeddedrustacean/series/26733) - ESP32 BluetoothとRustの連載記事

## Nordic

_Arduinoハードウェアに特化したリソースのリスト。_

- [Nordic Semiconductor](https://www.nordicsemi.com/) - 公式ウェブサイト

## RaspberryPi

_RaspberryPiハードウェアに特化したリソースのリスト。_

- [Raspberry Pi](https://www.raspberrypi.org/) - 公式ウェブサイト

## 記事と事例

_BLE開発に関する興味深い記事と事例。_

- [Scan and connect to BLE in background on iOS](https://medium.com/@cbartel/ios-scan-and-connect-to-a-ble-peripheral-in-the-background-731f960d520d) - バックグラウンドでBLEデバイスをスキャン・接続する事例（ファームウェアとアプリの両方）を論じる記事。
- [Deep dive to iOS advertising in backgroud](http://www.davidgyoungtech.com/2020/05/07/hacking-the-overflow-area) - バックグラウンドBluetooth広告におけるiOS独自の「Overflow Area」と、バックグラウンドデータ交換の可能性・制限を詳しく扱います。

## 貢献

最初に[貢献ガイドライン](https://github.com/dotintent/awesome-ble/blob/a128934b017fedc72f6be6eca25b5d821e31794b/.github/CONTRIBUTING.md)をざっとご覧ください。

メンテナンスされなくなった、または適合しないエントリーを見つけた場合は、このファイルを改善するpull requestを送信してください。

すべての[貢献者](https://github.com/dotintent/awesome-ble/graphs/contributors)に感謝します。素晴らしいです！
