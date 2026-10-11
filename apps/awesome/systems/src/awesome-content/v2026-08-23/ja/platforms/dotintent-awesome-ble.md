---
title: "Awesome BLE"
description: "Bluetooth Low Energyのガイド、モバイル・組み込み用ライブラリ、開発ツール、ハードウェア資料、セキュリティ情報、開発事例。"
licenseSource: "github-dotintent-awesome-ble-readme-md"
---

# Awesome BLE

Bluetooth Low Energy（BLE）は、IoT機器やウェアラブルなどの電池駆動デバイスでデータをやり取りする省電力の無線通信プロトコルです。プロトコルのガイド、モバイル・ウェブ・組み込み開発用のライブラリやツール、ハードウェア資料、セキュリティ情報、開発事例を探せます。

## ドキュメント

Bluetooth Low Energy（BLE）のプロトコル文書、入門資料、開発ガイド。

- [Android Bluetooth Low Energy](https://developer.android.com/guide/topics/connectivity/bluetooth/ble-overview) - AndroidにおけるBLEの概要。
- [Developing a Bluetooth Low Energy Application by TI](https://software-dl.ti.com/lprf/simplelink_cc2640r2_sdk/1.35.00.33/exports/docs/ble5stack/ble_user_guide/html/ble-stack/index.html) - BLEアプリの開発方法を解説するTIのガイド。
- [Getting Started with Bluetooth Low Energy (BLE)](https://learn.adafruit.com/introduction-to-bluetooth-low-energy) - Bluetooth Low Energy開発を始めるためのガイド。
- [Intro to Bluetooth Generic Attribute Profile (GATT)](https://www.bluetooth.com/bluetooth-resources/intro-to-bluetooth-gap-gatt/) - GATTの入門資料。
- [Intro to Bluetooth Low Energy](https://www.bluetooth.com/bluetooth-resources/intro-to-bluetooth-low-energy/) - BLEの基礎の入門資料。
- [IoT for Beginners](https://microsoft.github.io/IoT-For-Beginners/#/) - MicrosoftのAzure Cloud Advocatesが提供する、IoTの基礎を扱う12週間・24レッスンのカリキュラム。
- [nRF51 SDK](https://www.nordicsemi.com/Software-and-tools/Software/nRF5-SDK) - Nordic SemiconductorのnRF51チップシリーズでBluetooth Low Energyアプリケーションを開発するためのSDK。
- [RN4870/71 Bluetooth Low Energy Module User's Guide](https://www.microchip.com/wwwproducts/en/RN4870) - MicrochipのRN4870/71 Bluetooth Low Energyモジュールのユーザーガイド。
- [Wikipedia Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) - Bluetooth Low Energy（BLE）のWikipediaページ。

## フレームワーク

BLEペリフェラル開発用のフレームワーク。

- [Matter](https://github.com/project-chip/connectedhomeip)
- [Zephyr](https://github.com/zephyrproject-rtos/zephyr)

## ライブラリ

モバイルアプリ、組み込みシステム、IoTデバイスにBLE機能を組み込むためのライブラリとフレームワーク。

- [bluepy](https://github.com/IanHarvey/bluepy) - Linux上のBluetooth LE向けPythonインターフェース。
- [Bluetooth](https://github.com/PureSwift/Bluetooth) - Bluetooth SIG仕様に対応する複数のライブラリを含む、マルチプラットフォームのSwiftパッケージ。
- [bluez](http://www.bluez.org/) - Linuxの公式Bluetoothプロトコルスタック。
- [bumble](https://github.com/google/bumble) - すべてPythonで書かれたBluetoothスタック。
- [pygatt](https://github.com/peplin/pygatt) - BLEデバイスとやり取りするためのPythonライブラリ。
- [SimpleBLE](https://github.com/OpenBluetoothToolbox/SimpleBLE) - macOS、iOS、Windows、Linux向けのC/C++/Python/Rust Bluetooth LEライブラリ。
- [Moddable](https://github.com/Moddable-OpenSource/moddable) - BLE機能を含む、マイクロコントローラー開発用のJavaScriptライブラリとツール。

## iOS

AppleデバイスでBLEアプリを開発するためのiOSライブラリ、ツール、資料。

- [AsyncBluetooth](https://github.com/manolofdez/AsyncBluetooth) - CoreBluetooth APIに並行処理を追加する小さなライブラリ。
- [CombineCoreBluetooth](https://github.com/StarryInternet/CombineCoreBluetooth) - AppleのCoreBluetoothとCombineフレームワークを橋渡しするライブラリ。
- [iOS DFU Library](https://github.com/NordicSemiconductor/IOS-DFU-Library) - 開発キット（DK）に新しいファームウェアを書き込むためのDFUアプリケーション。
- [Rx Bluetooth Kit](https://github.com/Polidea/RxBluetoothKit) - RxSwiftを使ってBLEデバイスとやり取りするBluetoothライブラリ。
- [Swifty Sensors](https://github.com/codeinversion/sensors-swift) - iOSとmacOS向けのBluetooth LEセンサー管理ツール。
- [SpeziBluetooth](https://github.com/StanfordSpezi/SpeziBluetooth) - モダンなプログラミングパラダイムを用いたBluetoothデバイスとの接続・通信。

## KMM

Kotlin Multiplatform Mobile（KMM）を使うBLEアプリ向けの資料とライブラリ。

- [BlueFalcon](https://github.com/Reedyuk/blue-falcon) - iOSとAndroid向けのBluetooth Kotlin Multiplatformライブラリ。
- [Kable](https://github.com/JuulLabs/kable) - Kotlin Asynchronous Bluetooth Low Energy。BLEデバイスとやり取りするためのKotlinコルーチンを用いたAPI。

## Android

AndroidアプリにBLE機能を組み込むためのライブラリ、ツール、資料。

- [Android BluetoothGatt Sample](https://github.com/android/connectivity-samples/tree/main/BluetoothLeGatt) - AndroidのBluetoothGatt APIの使い方を示すサンプルアプリ。
- [android-BluetoothChat](https://github.com/googlesamples/android-BluetoothChat) - Android向けBluetoothチャットアプリ。
- [FastBle](https://github.com/Jasonchenlijian/FastBle) - Android向けBluetooth Low Energy（BLE）開発フレームワーク。
- [Nordic Semiconductor BLE SDK for Android](https://github.com/NordicSemiconductor/Android-BLE-Library) - Nordic Semiconductorが提供する、Android開発用の公式Bluetooth Low Energy SDK。
- [RxAndroidBle](https://github.com/dariuszseweryn/RxAndroidBle) - RxJava3インターフェースを備えたAndroid向けBluetooth Low Energy（BLE）ライブラリ。
- [SmartGattLib](https://github.com/movisens/SmartGattLib) - Bluetooth SMARTデバイス（Bluetooth 4.0ではBluetooth Low Energyとも呼ばれる）を扱うJavaライブラリ。採用済みのGATT仕様の全UUIDと、Heart RateやBatteryLevelなどのキャラクタリスティックを解釈する手段を提供。

## Flutter

iOSとAndroidで動作するBLEアプリ向けのFlutterライブラリ、ツール、資料。

- [Flutter Blue Plus](https://github.com/boskokg/flutter_blue_plus) - マルチプラットフォームアプリを構築するSDKであるFlutter向けのBluetoothプラグイン。
- [Flutter Reactive BLE](https://github.com/PhilipsHue/flutter_reactive_ble) - 複数デバイスのBLE操作を扱うFlutterライブラリ。
- [Flutter BLELib](https://github.com/dotintent/FlutterBleLib) - ペリフェラルのシミュレーションに対応したFlutter向けBluetooth Low Energyライブラリ。

## ツール

アナライザー、デバッガー、シミュレーターなど、BLEアプリの開発・テストツール。

- [Bettercap](https://github.com/bettercap/bettercap) - セキュリティ研究者がBLEのセキュリティをテストするための、拡張可能で移植性のあるフレームワーク。
- [nRF Connect](https://github.com/NordicSemiconductor/pc-nrfconnect-core) - Nordic Semiconductorのチップを使うデバイスの開発・テスト・プロビジョニング用アプリケーションフレームワーク。
- [BLE Simulator](https://play.google.com/store/apps/details?id=com.withintent.ble.simulator&hl=en) - BLEデバイスの複製とやり取りのスクリプト化に対応した、デバッグと迅速なプロトタイピング用のモバイルアプリ。
- [PacketLogger](https://www.bluetooth.com/blog/a-new-way-to-debug-iosbluetooth-applications/) - iOSデバイスのBLEパケットとHCIログを取得し、Bluetooth通信やプロトコルの問題をデバッグするmacOSツール。

## Web

JavaScriptやウェブ技術を使うBLEアプリ向けの資料とツール。

- [Web Bluetooth Samples](https://github.com/WebBluetoothCG/demos) - Web Bluetooth APIの使用例集。

## セキュリティ

BLEのセキュリティに関する資料。

- [Awesome Bluetooth Security](https://github.com/engn33r/awesome-bluetooth-security) - BluetoothとBLEのセキュリティ資料を集めたリポジトリ。

## Arduino

Arduinoハードウェア向けの資料。

- [Arduino](https://store.arduino.cc/) - 公式サイト。
- [ArduinoBLE](https://github.com/arduino-libraries/ArduinoBLE) - Arduino向けのArduinoBLEライブラリ。

## ESP

Espressifハードウェア向けの資料。

- [EspressIf](https://www.espressif.com/) - 公式サイト。
- [ESP-IDF](https://github.com/espressif/esp-idf) - Espressif IoT Development Framework。
- [ESP-32-C3 + Rust + BLE](https://dev.to/theembeddedrustacean/series/26733) - Rustを使ったESP32のBluetooth開発に関する連載記事。

## Nordic

Nordic Semiconductorハードウェア向けの資料。

- [Nordic Semiconductor](https://www.nordicsemi.com/) - 公式サイト。

## Raspberry Pi <a id="raspberrypi"></a>

Raspberry Piハードウェア向けの資料。

- [Raspberry Pi](https://www.raspberrypi.org/) - 公式サイト。

## 記事と事例

BLE開発に関する記事と事例。

- [Scan and connect to BLE in background on iOS](https://medium.com/@cbartel/ios-scan-and-connect-to-a-ble-peripheral-in-the-background-731f960d520d) - iOSのバックグラウンドでBLEデバイスをスキャン・接続する事例。ファームウェアとアプリの両方を扱う。
- [Deep dive to iOS advertising in background](http://www.davidgyoungtech.com/2020/05/07/hacking-the-overflow-area) - iOSのバックグラウンドBluetoothアドバタイズに使われる独自のOverflow Areaと、バックグラウンドでのデータ交換の可能性・制限を解説。
