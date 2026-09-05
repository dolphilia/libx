---
title: "Awesome Watchos"
description: "Watchosを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。"
licenseSource: "github-yenchenlin-awesome-watchos-readme-md"
---

# Awesome Watchos

Watchosを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。

### 目次
- [はじめに](#getting-started)
- [ライブラリとフレームワーク](#libraries-and-frameworks)
- [デザイン](#design)
	- [デザインガイドライン](#design-guidelines)
	- [デザインリソース](#design-resources)
- [ツール](#tools)
- [サンプルアプリ](#sample-apps)
- [書籍](#books)
- [チュートリアル](#tutorials)
- [Twitter](#twitters)
- [その他の Awesome リスト](#other-awesome-lists)
- [コントリビューション](#contributing)


# はじめに
 * [Apple Watch プログラミングガイド](https://developer.apple.com/library/ios/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html) - Apple による公式 Apple Watch プログラミングガイドです。

# ライブラリとフレームワーク

### 接続
 * [MMWormhole](https://github.com/mutualmobile/MMWormhole) - 音声の合成、処理、分析を行う強力なツールキットです。

  <space><space><img src="https://github.com/mutualmobile/MMWormhole/blob/master/MMWormhole.gif" width="500") alt="サンプルアプリ"/>

### UI
 * [IGInterfaceDataTable](https://github.com/Instagram/IGInterfaceDataTable) - 多次元データを持つ Table を簡単に設定できる WKInterfaceTable の Category です。

  <space><space><img src="https://github.com/Instagram/IGInterfaceDataTable/blob/master/images/example.jpg" width="500") alt="サンプルアプリ"/>

 * [JBWatchActivityIndicator](https://github.com/mikeswanson/JBWatchActivityIndicator) - Apple Watch 用 Activity Indicator 画像を簡単に生成できます。

  <space><space><img src="https://camo.githubusercontent.com/3bc9d761836a40e088f45285ac52dd5fef89df1b/687474703a2f2f7777772e6d696b657377616e736f6e2e636f6d2f66696c65732f4a4257617463684163746976697479496e64696361746f722f4a4257617463684163746976697479496e64696361746f722e676966" width="300") alt="サンプルアプリ"/>
### チャート
 * [YOChartImageKit](https://github.com/yasuoza/YOChartImageKit) - watchOS 用チャート画像フレームワークです。

  <space><space><img src="https://raw.githubusercontent.com/yasuoza/YOChartImageKit/assets/images/watchos/all.png") alt="サンプルアプリ" width="760"/>

 * [NKWatchChart](https://github.com/NilStack/NKWatchChart) - PNChart と ios-charts を基にした Apple Watch 用チャートライブラリです。

  <space><space><img src="https://db.tt/UAWEZ1AF") alt="サンプルアプリ" width="250"/>

# デザイン

### デザインガイドライン
 * [Apple Watch のためのデザイン](https://developer.apple.com/videos/wwdc/2015/?id=802) - Apple Watch のデザイン方法を扱う Apple 公式 WWDC 2015 Session です。
 * [ Watch Human Interface Guidelines](https://developer.apple.com/watch/human-interface-guidelines/) - Apple による公式 Human Interface Guidelines です。
 * [Apple Watch アプリをデザインする11のヒント](https://medium.com/design-idea/11-tips-for-designing-apps-for-apple-watch-4b6cc2cb11d3) - より良い Watch アプリの構築に役立つ簡単なヒントです。
 * [Apple Watch のアイコン — 決定版ガイド](http://blog.iconfinder.com/icons-apple-watch-definitive-guide/) - 独自の Watch アプリアイコン作成を支援するガイドです。

### デザインリソース
 * [ Watch デザインリソース](https://developer.apple.com/watch/human-interface-guidelines/resources/) - Apple Watch Bezel、Guide、Template、Typeface を含む Apple 公式デザインリソースです。
 * [Apple Watch Complication の種類とレイアウトの図表](http://i.imgur.com/4Thz881.jpg) - Complication で可能なすべての組み合わせを示す便利な図表です。

# ツール

### プロトタイピング
 * [thinkapps for watch](http://thinkapps.com/watch-apps) - 無料の Apple Watch アプリプロトタイプをわずか10分で作成できる Web サイトです。

### 画像ジェネレーター
 * [RadialChartImageGenerator](https://github.com/hmaidasani/RadialChartImageGenerator) - Apple Watch 用 Radial Bar Chart Generator です。
 * [KFWatchKitAnimations](https://github.com/kiavashfaisali/KFWatchKitAnimations) - iOS Simulator のアニメーションを記録し、 Watch 用の美しい60 FPS Animation を作成する画像ジェネレーターです。

# サンプルアプリ
 * [Lister](https://developer.apple.com/library/ios/samplecode/Lister/Introduction/Intro.html) - Apple Watch 統合を実演する公式サンプルアプリです。

   <space><space><img src="https://github.com/yenchenlin1994/awesome-watchos/blob/master/resources/lister.png") alt="サンプルアプリ" width="260"/>

 * [WatchKit Catalog](https://developer.apple.com/library/ios/samplecode/WKInterfaceCatalog/Introduction/Intro.html) - WatchKit Framework で利用できる UI Element の使い方を実演する公式サンプルアプリです。
 * [Cherry](https://github.com/kenshin03/Cherry) -  Watch 向けに設計された小さな Pomodoro Timer アプリです。

   <space><space><img src="https://raw.githubusercontent.com/kenshin03/Cherry/master/cherry-screencaps.gif") alt="サンプルアプリ" width="250"/>

 * [Bitcoin Tracker](http://www.raywenderlich.com/89562/watchkit-tutorial-with-swift-getting-started) - Bitcoin 価格追跡アプリです。

    <space><space><img src="http://cdn5.raywenderlich.com/wp-content/uploads/2014/11/watch-final.png") alt="サンプルアプリ" width="250"/>

 * [WWDC](https://github.com/sugarso/WWDC) - オープンソース化された WWDC Hit Parties アプリです。

   <space><space><img src="https://raw.githubusercontent.com/sugarso/WWDC/master/Assets/watch1.png") alt="サンプルアプリ" width="230"/>

 * [SwiftHN](https://github.com/Dimillian/SwiftHN) - Swift で書かれた Hacker News Reader です。
 * [BaiduFM-Swift](https://github.com/belm/BaiduFM-Swift) - BaiduFM 用 Apple Watch アプリです。

    <space><space><img src="https://raw.githubusercontent.com/belm/BaiduFM-Swift/master/ScreenShot/BaiduFM-Swift_AppleWatch_00.png") alt="サンプルアプリ" width="250"/>

 * [done-swift](https://github.com/FancyPixel/done-swift) - Realm を使った WatchKit アプリとメインアプリ間のデータ共有を実演するサンプルアプリです。

    <space><space><img src="https://raw.githubusercontent.com/FancyPixel/done-swift/master/assets/screenshot.gif") alt="サンプルアプリ" width="400"/>

 * [HighstreetWatchApp](https://github.com/GetHighstreet/HighstreetWatchApp) - <http://highstreetapp.com> プラットフォーム上に構築された WatchKit アプリです。

    <space><space><img src="https://github.com/GetHighstreet/HighstreetWatchApp/blob/master/Documentation/Assets/walkthrough.gif") alt="サンプルアプリ" width="350"/>

 * [OnTime](https://github.com/D-32/OnTime) - SBB の時刻表へアクセスする Apple Watch アプリです。

    <space><space><img src="https://camo.githubusercontent.com/3d2f8f30ae9ce705cc5467d3736baac2253c6dc2/687474703a2f2f34362e3130352e32362e312f75706c6f6164732f7362626170706c65322e6a7067") alt="サンプルアプリ" width="500"/>

 * [WatchNotes](https://github.com/azamsharp/WatchNotes) - 手首にメモを表示する Apple Watch アプリです。

    <space><space><img src="https://camo.githubusercontent.com/689a09260a6427ede9580b298c141320132796df/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f752f32303131363433342f57617463684e6f7465732e676966") alt="サンプルアプリ" width="500"/>

 * [WatchPics](https://github.com/D-32/WatchPics) - Apple Watch のための Instagram です。

    <space><space><img src="https://camo.githubusercontent.com/544c66f439b1328155ca4463c2fa73e514f80800/687474703a2f2f34362e3130352e32362e312f75706c6f6164732f7761746368706963732e6a7067") alt="サンプルアプリ" width="500"/>

 * [WatchKit-Apps](https://github.com/kostiakoval/WatchKit-Apps) - WatchKit 用チュートリアルアプリです。
 * [watchOS-2-Sampler](https://github.com/shu223/watchOS-2-Sampler) - watchOS 2 の新機能に関するコード例です。

 * [soon](https://github.com/sandofsky/soon) - カウントダウンアプリです。

    <space><space><img src="https://github.com/sandofsky/soon/blob/master/screenshot.png") alt="サンプルアプリ" width="230"/>

# 書籍
 * [watchOS 2 by Tutorials](http://www.raywenderlich.com/store/watchos-2-by-tutorials)

    <space><space><img src="http://cdn5.raywenderlich.com/wp-content/themes/raywenderlich/images/store-2015/w2t_PDF_640.png") alt="サンプルアプリ" width="320"/>

 * [Apple Watch for Developers：5人のトッププロフェッショナルによる助言とテクニック](http://www.amazon.com/gp/product/1484213394/ref=as_li_qf_sp_asin_il_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1484213394&linkCode=as2&tag=feedingtheneu-20&linkId=PDZBCYAGPZXWHDQU)

    <space><space><img src="http://ecx.images-amazon.com/images/I/41Opqcd7F1L._SX331_BO1_204_203_200_.jpg") alt="サンプルアプリ" width="280"/>

# チュートリアル

### WatchKit 入門
 * [Swift による WatchKit チュートリアル 第1部：はじめに](http://www.raywenderlich.com/89562/watchkit-tutorial-with-swift-getting-started)
 * [Swift による WatchKit チュートリアル 第2部：Table と Network Request](http://www.raywenderlich.com/96589/watchkit-tutorial-swift-tables-network-requests)
 * [Swift による WatchKit チュートリアル 第3部：さらに多くの Table、Glance、Handoff](http://www.raywenderlich.com/96741/watchkit-tutorial-with-swift-tables-glances-and-handoff)

### WatchOS 2 の新機能
##### ハードウェア
 * [WatchKit 2 Hardware Bits：Digital Crown を使う](https://www.bignerdranch.com/blog/watchkit-2-hardware-bits-using-the-digital-crown/?utm_campaign=WatchKit%2BResources&utm_medium=web)
 * [WatchKit 2 Hardware Bits：Taptic Engine](https://www.bignerdranch.com/blog/watchkit-2-hardware-bits-the-taptic-engine/?utm_campaign=WatchKit%2BResources&utm_medium=web)
 * [WatchKit 2 Hardware Bits：Accelerometer](https://www.bignerdranch.com/blog/watchkit-2-hardware-bits-the-accelerometer/?utm_campaign=WatchKit%2BResources&utm_medium=web)

##### アニメーション
 * [アニメーションの力](http://code.tutsplus.com/tutorials/watchos-2-the-power-of-animations--cms-24302?utm_campaign=This%2BWeek%2Bin%2BSwift&utm_medium=email&utm_source=This_Week_in_Swift_47) - レイアウトプロパティを変更して UI をアニメーションさせる方法を実演するチュートリアルです。

##### ClockKit
 * [watchOS 2 で WatchKit Complication を書く](http://www.sneakycrab.com/blog/2015/6/10/writing-your-own-watchkit-complications?utm_campaign=WatchKit%2BResources&utm_medium=web) - Watch アプリに独自の Complication を追加する方法のチュートリアルです。

##### 接続
 * [Watch Connectivity でデバイス間通信を行う方法](http://www.kristinathai.com/watchos-2-tutorial-using-sendmessage-for-instantaneous-data-transfer-watch-connectivity-1/?utm_campaign=WatchKit%2BResources) - Watch Connectivity Framework を使ってデバイス間通信を行う方法のチュートリアルです。

# Twitter
* [WatchKit Resources](https://twitter.com/WatchKitSources)

# その他の Awesome リスト
ほかの驚くほど優れたリストは、次から見つけられます。
 * [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) リスト。
 * [Open Source apps](https://github.com/dkhamsing/open-source-ios-apps) オープンソース iOS アプリの一覧です。
 * Awesome-swift
   * [@matteocrippa](https://github.com/matteocrippa/awesome-swift) - Swift の優れたリソースを共同でまとめたリストです。
   * [@Wolg](https://github.com/Wolg/awesome-swift) - Swift の優れたフレームワーク、ライブラリ、ソフトウェアを集めたリストです。
 * [awesome watchkit apps](https://github.com/sanketfirodiya/sample-watchkit-apps) WatchKit のサンプルアプリとチュートリアルを集めたリストです。
 * [iOS 学習リソース](https://github.com/sanketfirodiya/iOS-learning-resources) 高品質で頻繁に更新され、適切に保守されている iOS チュートリアルサイトの包括的コレクションです。
 * [awesome-ios-animation](https://github.com/sxyx2008/awesome-ios-animation) - Objective-C と Swift のライブラリを含む、iOS の優れたアニメーションを集めたリストです。
 * [awesome-ios-chart](https://github.com/sxyx2008/awesome-ios-chart) - Objective-C と Swift を含む、iOS の優れたチャートライブラリを集めたリストです。
 * [awesome-gists](https://github.com/vsouza/awesome-gists#ios) - 優れた Gist の一覧（iOS セクション）です。
 * [awesome-ios-ui](https://github.com/cjwirth/awesome-ios-ui) - iOS の優れた UI／UX ライブラリを集めたリストです。
 * [Medium の iOS アプリ開発](https://medium.com/ios-os-x-development) - iOS、Apple Watch、iPad／iPhone 向けアプリ構築に関するストーリーと技術的ヒントです。

# コントリビューション
コントリビューションを歓迎します。まず[コントリビューションガイドライン](https://github.com/yenchenlin/awesome-watchos/blob/b5f0ca68d3c78d9ca738e0f1e556a6110eafb5ba/contributing.md)をお読みください。

お気軽にコントリビュートしてください。どうもありがとうございます！

# ライセンス

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、[YenChen Lin](https://github.com/yenchenlin1994) はこの作品に関するすべての著作権および関連する権利または隣接する権利を放棄しています。
