---
title: "vsouza/awesome-ios"
description: "iOS・Appleプラットフォームの開発ライブラリ、UI部品、ツール、学習資料を分類した定本スナップショット"
licenseSource: "github-vsouza-awesome-ios-readme-md"
---

<div align="center">
    <img src="https://github.com/vsouza/awesome-ios/blob/master/header.png?raw=true" alt="Awesome">
    <br>
    <p align="center">
        <img alt="awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" />
        <a href="https://ko-fi.com/M4M3WPRD"><img width="110" alt="Buy  Me a Coffee" src="buy_me_a_coffee.png" /></a>
    </p>
    <a href="http://github.com/Doloffer-g/guide">
        <img src="sponsor_banner.png" alt="Sponsor">
    </a>
</div>




## 貢献と共同作業 <a id="contributing-and-collaborating"></a>

詳細は[CONTRIBUTING](https://github.com/vsouza/awesome-ios/blob/master/.github/CONTRIBUTING.md)と[CODE-OF-CONDUCT](https://github.com/vsouza/awesome-ios/blob/master/CODE_OF_CONDUCT.md)を確認してください。

## 目次 <a id="contents"></a>

- [分析](#analytics)
- [アプリルーティング](#app-routing)
- [Apple TV](#apple-tv)
- [App Store](#app-store)
- [アーキテクチャパターン](#architecture-patterns)
- [ARKit関連](#arkit)
- [認証](#authentication)
- [Blockchain関連](#blockchain)
- [書籍](#books)
- [キャッシュ](#cache)
- [チャート](#charts)
- [コード注入](#code-injection)
- [コード品質](#code-quality)
    - [Linter](#linter)
- [色](#color)
- [コマンドライン](#command-line)
- [並行処理](#concurrency)
- [Core Data関連](#core-data)
- [コース](#courses)
    - [入門](#getting-started)
- [データベース](#database)
- [データ構造／アルゴリズム](#data-structures--algorithms)
- [日付・時刻](#date--time)
- [デバッグ](#debugging)
- [依存性注入](#dependency-injection)
- [依存関係／パッケージ管理](#dependency--package-manager)
- [デプロイ／配布](#deployment--distribution)
- [EventBus関連](#eventbus)
- [ファイル](#files)
- [関数型プログラミング](#functional-programming)
- [ゲーム](#games)
- [GCD関連](#gcd)
- [ジェスチャー](#gesture)
- [グラフィックス](#graphics)
- [ハードウェア](#hardware)
    - [Bluetooth関連](#bluetooth)
    - [カメラ](#camera)
    - [Force Touch関連](#force-touch)
    - [iBeacon関連](#ibeacon)
    - [位置情報](#location)
    - [その他のハードウェア](#other-hardware)
- [レイアウト](#layout)
- [ローカライズ](#localization)
- [ロギング](#logging)
- [機械学習](#machine-learning)
- [地図](#maps)
- [数学](#math)
- [メディア](#media)
    - [音声](#audio)
    - [GIF関連](#gif)
    - [画像](#image)
    - [メディア処理](#media-processing)
    - [PDF関連](#pdf)
    - [ストリーミング](#streaming)
    - [動画](#video)
- [メッセージング](#messaging)
- [ネットワーク](#networking)
- [ニュースレター](#newsletters)
- [通知](#notifications)
    - [プッシュ通知](#push-notifications)
    - [プッシュ通知プロバイダー](#push-notification-providers)
- [Objective-C Runtime関連](#objective-c-runtime)
- [最適化](#optimization)
- [その他のAwesomeリスト](#other-awesome-lists)
- [パース](#parsing)
    - [CSV関連](#csv)
    - [JSON関連](#json)
    - [XML & HTML関連](#xml--html)
    - [その他のパース](#other-parsing)
- [Passbook関連](#passbook)
- [決済](#payments)
- [権限](#permissions)
- [ポッドキャスト](#podcasts)
- [プロジェクト設定](#project-setup)
- [プロトタイピング](#prototyping)
- [迅速な開発](#rapid-development)
- [リアクティブプログラミング](#reactive-programming)
    - [React-Like関連](#react-like)
- [リファレンス](#reference)
- [リフレクション](#reflection)
- [Regex関連](#regex)
- [SDK関連](#sdk)
    - [Official関連](#official)
    - [Unofficial関連](#unofficial)
- [セキュリティ](#security)
    - [暗号化](#encryption)
    - [キーチェーン](#keychain)
- [サーバー](#server)
- [スタイルガイド](#style-guides)
- [テスト](#testing)
    - [TDD / BDD関連](#tdd--bdd)
    - [A/B Testing関連](#ab-testing)
    - [UIテスト](#ui-testing)
    - [その他のテスト](#other-testing)
- [テキスト](#text)
    - [フォント](#font)
- [UI関連](#ui)
    - [アクティビティ表示](#activity-indicator)
    - [アラート／アクションシート](#alert--action-sheet)
    - [アニメーション](#animation)
    - [トランジション](#transition)
    - [Badge関連](#badge)
    - [ボタン](#button)
    - [カレンダー](#calendar)
    - [カード](#cards)
    - [フォーム／設定](#form--settings)
    - [キーボード](#keyboard)
    - [ラベル](#label)
    - [ログイン](#login)
    - [メニュー](#menu)
    - [ナビゲーションバー](#navigation-bar)
    - [PickerView関連](#pickerview)
    - [ポップアップ](#popup)
    - [プログレス表示](#progress-view)
    - [引っ張って更新](#pull-to-refresh)
    - [評価スター](#rating-stars)
    - [ScrollView関連](#scrollview)
    - [セグメントコントロール](#segmented-control)
    - [スライダー](#slider)
    - [スプラッシュ表示](#splash-view)
    - [ステータスバー](#status-bar)
    - [ステッパー](#stepper)
    - [スイッチ](#switch)
    - [タブバー](#tab-bar)
    - [テーブルビュー／コレクションビュー](#table-view--collection-view)
      - [テーブルビュー](#table-view)
      - [コレクションビュー](#collection-view)
      - [展開可能セル](#expandable-cell)
      - [ヘッダー](#header)
      - [プレースホルダー](#placeholder)
      - [コレクションビューレイアウト](#collection-view-layout)
    - [タグ](#tag)
    - [TextField／TextView](#textfield--textview)
    - [UIPageControl関連](#uipagecontrol)
    - [Webビュー](#web-view)
- [ユーティリティ](#utility)
- [利用者同意](#user-consent)
- [VR関連](#vr)
- [ウォークスルー／導入／チュートリアル](#walkthrough--intro--tutorial)
- [Webサイト](#websites)
- [Websocket関連](#websocket)
- [ツール](#tools)
- [チュートリアルと基調講演](#tutorials-and-keynotes)
- [UIテンプレート](#ui-templates)
- [Xcode関連](#xcode)
    - [Xcode拡張（Xcode 8以降）](#extensions-xcode-8)
    - [テーマ](#themes)
    - [その他のXcode](#other-xcode)


## 🔥 プレミアム資料・フォロー <a id="premium-resources-follow"></a>

追加学習用のプレミアム資料を確認できます。
- [Premium Guide](http://github.com/Doloffer-g/guide)

<a href="http://github.com/Doloffer-g/guide">
        <img src="sponsor_banner_2.png" alt="Sponsor">
    </a>

## 分析 <a id="analytics"></a>

 *Analytics platforms, SDK's, error tracking and real-time answers about your app*

- [Answers by Fabric](https://get.fabric.io) - Answersは、ユーザーがアプリ内で体験する内容をリアルタイムで把握できるようにします。
- [Aptabase](https://aptabase.com/for-swift) - Swiftアプリ向けのオープンソース・プライバシー第一のシンプルな分析ツール。
- [Bugsnag](https://www.bugsnag.com/platforms/ios-crash-reporting) - エラー追跡機能（無料プランあり）。エラー報告にはデバイス、リリース、ユーザー情報、および任意のデータが含まれます。
- [Countly](https://count.ly) - iOSおよびAndroid向けのオープンソース、モバイル・ウェブ分析、クラッシュレポート、プッシュ通知プラットフォーム。
- [devtodev](https://www.devtodev.com/) - プロジェクトの改善に貢献し、製品開発に時間を節約できる包括的な分析サービス。
- [Embrace](http://embrace.io) - OpenTelemetryに基づくモバイル可観測性により、ユーザー中心の信頼性の高いアプリを提供します。
- [Emerge Tools](https://www.emergetools.com) - すべてのプルリクエストに対してアプリサイズおよびパフォーマンスの回帰を防止し、改善方法に関する自動化された洞察を提供します。
- [Instabug](https://instabug.com) - アプリ内フィードバック、バグおよびクラッシュ報告、ユーザーのステップ、動画記録、画面注釈、ネットワークリクエストログを活用してバグを迅速に修正します。
- [Matomo](https://github.com/matomo-org/matomo-sdk-ios) - MatomoTrackerは、Matomoサーバーにアプリ分析データを送信するためのiOS、tvOSおよびmacOS用SDKです。
- [Measure](https://measure.sh/) - オープンソースで自前で運用可能なモバイルアプリ監視ツール。エラー追跡、パフォーマンストレース、完全なセッション履歴を提供し、コンテキストの組み立て時間を短縮し、問題を迅速に解決できます。
- [Mixpanel](https://mixpanel.com/) - 高度な分析プラットフォーム。
- [MOCA Analytics](https://www.mocaplatform.com/features) - 有料のクロスプラットフォーム分析バックエンド。
- [Segment](https://github.com/segmentio/analytics-ios) - 任意のiOSアプリに分析機能を統合するための手軽な方法。
- [Sentry](https://sentry.io/) - Sentryは、すべてのソフトウェアチームがリアルタイムでエラーを発見・整理・優先順位付けできる、自前運用およびクラウドベースのエラー監視を提供します。
- [Shake](https://www.shakebugs.com/) - アプリ内フィードバックおよびバグ報告ツール。詳細なデバイスデータ、再現手順、動画記録、ブラックボックスデータ、ネットワークリクエスト、カスタムログを活用して、アプリのバグを50倍速く修正できます。

**[back to top関連](#contributing-and-collaborating)**

## アプリルーティング <a id="app-routing"></a>

  *Elegant URL routing, navigation frameworks, deep links and more*

- [ApplicationCoordinator](https://github.com/AndreyPanov/ApplicationCoordinator) - Coordinatorは、ナビゲーションフローを処理し、次のチェーンに切り替わった後の次のCoordinatorのフロー処理を共有するオブジェクトです。
- [Appz](https://github.com/SwiftKitz/Appz) - 外部アプリへの簡単にリダイレクトし、インストールされていない場合はウェブにフォールバックします。
- [Composable Navigator](https://github.com/Bahn-X/swift-composable-navigator) - 深さのあるリンクを実現するためのオープンソースライブラリ。Composition、テスト、使いやすさを意識しています。
- [Crossroad](https://github.com/giginet/Crossroad) - Crossroadは、カスタムURLスキームの処理に特化したURLルーターです。これにより、複数のURLスキームをルーティングし、引数やパラメータを簡単に取得できます。
- [DeepLinkKit](https://github.com/button/DeepLinkKit) - 深さのあるリンクを扱うための優れたルートマッチング、ブロックベースのアプローチ。
- [JLRoutes](https://github.com/joeldev/JLRoutes) - iOS向けのURLルーティングライブラリ。シンプルなブロックベースのAPIを提供。
- [Linker](https://github.com/MaksimKurpa/Linker) - iOS向けの内部および外部デープリンクを軽量に扱う方法。
- [Marshroute](https://github.com/avito-tech/Marshroute) - Marshrouteは、iOS向けのライブラリでルーターをシンプルかつ非常に強力に実現します。
- [RouteComposer](https://github.com/ekazaev/route-composer) - ビュー制御者の構成、ルーティング、デープリンクのタスクをサポートするライブラリ。
- [RxFlow](https://github.com/RxSwiftCommunity/RxFlow) - Reactive Flow Coordinatorパターンに基づいたiOSアプリ用のナビゲーションフレームワーク。
- [SwiftCurrent](https://github.com/wwt/SwiftCurrent) - 複雑なワークフローを管理するためのライブラリ。
- [SwiftRouter](https://github.com/skyline75489/SwiftRouter) - iOS向けのURLルーター。
- [URLNavigator](https://github.com/devxoul/URLNavigator) - Swiftで美しいURLルーティング。
- [WAAppRouting](https://github.com/Wasappli/WAAppRouting) - iOS向けのルーティングを正しく実現。URL認識と制御者の表示をパースされたパラメータで処理。すべて1行で実現！制御者のスタックは自動的に保持されます。

**[back to top関連](#contributing-and-collaborating)**

## App Store <a id="app-store"></a>

*Apple Guidelines and version notification libraries*

- [Apple Review Guidelines](https://developer.apple.com/app-store/review/#common-app-rejections) - アプリが拒否される主な問題をいくつか強調しています。
- [Free App Store Optimization Tool](https://www.mobileaction.co) - アプリストアのキーワードや競合他社による表示を追跡できる機能。

**[back to top関連](#contributing-and-collaborating)**

## Apple TV <a id="apple-tv"></a>

*tvOS view controllers, wrappers, template managers and video players.*

- [ParallaxView](https://github.com/PGSSoft/ParallaxView) - iOS向けのコントロールと拡張機能。アプリにパラリックス効果を追加。
- [TvOSPinKeyboard](https://github.com/zattoo/TvOSPinKeyboard) - tvOS向けのPINキーボード。
- [XCDYouTubeKit](https://github.com/0xced/XCDYouTubeKit) - iOS、tvOS、macOS向けのYouTube動画プレイヤー。

**[back to top関連](#contributing-and-collaborating)**

## アーキテクチャパターン <a id="architecture-patterns"></a>

*Clean architecture, Viper, MVVM, Reactive... choose your weapon.*

- [Clean Architecture for SwiftUI + Combine](https://github.com/nalexn/clean-architecture-swiftui) - SwiftUIアプリのプロダクション設定を示すデモプロジェクト。Clean Architectureを採用。
- [CleanArchitectureRxSwift](https://github.com/sergdort/CleanArchitectureRxSwift) - RxSwiftを使用したiOSアプリのClean Architectureの例。
- [ios-architecture](https://github.com/tailec/ios-architecture) - iOS向けのアーキテクチャのコレクション - MVC、MVVM、MVVM+RxSwift、VIPER、RIBsなど。
- [iOS-Viper-Architecture](https://github.com/MindorksOpenSource/iOS-Viper-Architecture) - このリポジトリには、Alamofire、AlamofireImage、PKHUD、CoreDataなどライブラリとフレームワークを用いてVIPERアーキテクチャを実装した詳細なサンプルアプリが含まれています。
- [Reactant](https://github.com/Brightify/Reactant) - ReactantはiOS向けの反応型アーキテクチャです。
- [Spin](https://github.com/Spinners/Spin.Swift) - RxSwift、ReactiveSwift、Combineに共通するフィードバックループシステムのユニバーサル実装。
- [SwiftyVIPER](https://github.com/codytwinton/SwiftyVIPER) - VIPERアーキテクチャの実装をはるかに簡単かつクリーンにします。
- [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) - コンポジブルアーキテクチャは、一貫性と理解性を意識したアプリケーション開発に用いられるライブラリで、コンポジション、テスト、使いやすさを考慮しています。
- [Viperit](https://github.com/ferranabello/Viperit) - iOS用のViperフレームワーク。Swiftで書かれており、テストも実施されたVIPERアーキテクチャに従ってアプリを開発できます。

**[back to top関連](#contributing-and-collaborating)**

## ARKit関連 <a id="arkit"></a>

*Library and tools to help you build unparalleled augmented reality experiences*

- [ARKit Virtual Objects](https://github.com/ignacio-chiazzo/ARKit) - 拡張現実に仮想オブジェクトを配置します。
- [ARKit-CoreLocation](https://github.com/ProjectDent/ARKit-CoreLocation) - ARの高精度とGPSデータのスケールを組み合わせます。
- [ARVideoKit](https://github.com/AFathi/ARVideoKit) - ARKitによる動画、写真、ライブフォト、GIFの記録とキャプチャを行います。
- [SmileToUnlock](https://github.com/rsrbk/SmileToUnlock) - このライブラリは、ユーザーの笑顔を検知するためにARKitの顔追跡を使用しています。

**[back to top関連](#contributing-and-collaborating)**

## 認証 <a id="authentication"></a>

*Oauth and Oauth2 libraries, social logins and captcha tools.*

- [Heimdallr.swift](https://github.com/trivago/Heimdallr.swift) - iOS向けの使いやすいOAuth 2ライブラリ（Swiftで書かれています）。
- [OAuth2](https://github.com/p2/OAuth2) - macOSおよびiOS向けのOAuth2フレームワーク（Swiftで書かれています）。
- [OAuthSwift](https://github.com/OAuthSwift/OAuthSwift) - iOS向けのSwiftベースのOAuthライブラリ
- [ReCaptcha](https://github.com/fjcaetano/ReCaptcha) - iOS用の見えないReCaptcha
- [SwiftyOAuth](https://github.com/delba/SwiftyOAuth) - iOS向けのシンプルなOAuthライブラリで、内蔵されたプロバイダーを備えています。

**[back to top関連](#contributing-and-collaborating)**

## Blockchain関連 <a id="blockchain"></a>

*Tool for smart contract interactions. Bitcoin protocol implementations and Frameworks for interacting with cryptocurrencies.*

- [BitcoinKit](https://github.com/yenom/BitcoinKit) - Swiftで書かれたビットコインプロトコルツールキット。BitcoinKitはビットコインプロトコルをSwiftで実装しており、Swiftで書かれたビットコインSPVプロトコルの実装です。
- [EthereumKit](https://github.com/yuzushioh/EthereumKit) - EthereumKitは、Ethereumと簡単に相互作用できる無料オープンソースSwiftフレームワークです。
- [Web3.swift](https://github.com/Boilertalk/Web3.swift) - Ethereumブロックチェーンと相互作用するためのWeb3ライブラリ。
- [web3swift](https://github.com/web3swift-team/web3swift) - SwiftでエレガントなWeb3js機能を実現。ネイティブなABI解析とスマートコントラクトの相互作用。

**[back to top関連](#contributing-and-collaborating)**

## 書籍 <a id="books"></a>

*Most recommended books*

- [Advanced Swift by Chris Eidhof, Ole Begemann, and Airspeed Velocity](https://www.objc.io/books/advanced-swift/)
- [Anyone Can Create an App by Wendy L. Wise](https://www.manning.com/books/anyone-can-create-an-app)
- [Classic Computer Science Problems in Swift](https://www.manning.com/books/classic-computer-science-problems-in-swift)
- [Cocoa Design Patterns](https://www.amazon.com/Cocoa-Design-Patterns-Erik-Buck/dp/0321535022)
- [Core Data by Florian Kugler and Daniel Eggert](https://www.objc.io/books/core-data/)
- [Functional Swift by Chris Eidhof, Florian Kugler, and Wouter Swierstra](https://www.objc.io/books/functional-swift/)
- [Hello Swift! by Tanmay Bakshi with Lynn Beighley](https://www.manning.com/books/hello-swift)
- [iOS Development with Swift by Craig Grummitt](https://www.manning.com/books/ios-development-with-swift)
- [iOS Programming: The Big Nerd Ranch Guide by Christian Keur, Aaron Hillegass](https://www.bignerdranch.com/books/ios-programming-the-big-nerd-ranch-guide-seventh-edition/)
- [Programming in Objective-C by Stephen G. Kochan](https://www.amazon.com/Programming-Objective-C-6th-Developers-Library/dp/0321967607)
- [Swift in Depth](https://www.manning.com/books/swift-in-depth)
- [The Complete Friday Q & A: Volume 1](https://www.mikeash.com/book.html)
- [The Swift Programming Language by Apple](https://books.apple.com/us/book/swift-programming-language/id881256329)

**[back to top関連](#contributing-and-collaborating)**

## キャッシュ <a id="cache"></a>

*Thread safe, offline and high performance cache libs and frameworks.*

- [Awesome Cache](https://github.com/aschuch/AwesomeCache) - 快適なディスクキャッシュ（Swiftで書かれています）。
- [Cache](https://github.com/hyperoslo/Cache) - ただのキャッシュです。
- [Disk](https://github.com/saoudrizwan/Disk) - iOS向けに構造体、画像、データを簡単に永続化できる快適なフレームワーク。
- [HanekeSwift](https://github.com/Haneke/HanekeSwift) - iOS向けの軽量なジェネリックキャッシュ（Swiftで書かれています）で、画像に特別な思いを込めて作られています。
- [mattress](https://github.com/buzzfeed/mattress) - iOSにおけるウェブコンテンツのオフラインキャッシュ
- [PINCache](https://github.com/pinterest/PINCache) - iOSおよびmacOS向けの高速かつ死ロックを起こさない並列オブジェクトキャッシュ
- [RocketData](https://github.com/plivesey/RocketData) - 変更不可能なモデル向けのキャッシュと一貫性解決策
- [SPTPersistentCache](https://github.com/spotify/SPTPersistentCache) - すべてのiOSアプリ開発者がどこかの段階でキャッシュを実装するが、これはスピークのものである
- [Track](https://github.com/maquannene/Track) - Swiftによるスレッドセーフなキャッシュ書き込み。ディスクキャッシュとメモリキャッシュから構成され、LRUをサポート
- [YYCache](https://github.com/ibireme/YYCache) - iOS向けの高性能キャッシュフレームワーク

**[back to top関連](#contributing-and-collaborating)**

## チャート <a id="charts"></a>

*Explore beautiful, easy-to-use, and customizable iOS charting libraries, perfect for creating dynamic and stunning data visualizations.*

- [ANDLineChartView](https://github.com/anaglik/ANDLineChartView) - ANDLineChartViewは、アニメーション付きラインチャートを表示するための使いやすいビュークラス
- [Charts](https://github.com/danielgindi/Charts) - 強力なチャート／グラフフレームワーク。iOSにおける [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) の類似品。
- [core-plot](https://github.com/core-plot/core-plot) - 高度にカスタマイズ可能で、さまざまなタイプのプロットを描画できる2次元プロットライブラリ
- [EatFit](https://github.com/Yalantis/EatFit) - Google Fitを参考にした、魅力的なデータ表現を実現するコンポーネント
- [EChart](https://github.com/zhuhuihuihui/EChart) - iOS/iPhone/iPad用のチャート、グラフ、イベント処理およびアニメーションをサポート
- [FSInteractiveMap](https://github.com/ArthurGuibert/FSInteractiveMap) - iOSでベクターマップを可視化およびインタラクションできるチャートライブラリ。Geochartに似たものだがiOS向け
- [FSLineChart](https://github.com/ArthurGuibert/FSLineChart) - iOS向けのラインチャートライブラリ
- [JBChartView](https://github.com/Jawbone/JBChartView) - iOS向けのラインおよびバーグラフ用のチャートライブラリ
- [JYRadarChart](https://github.com/johnnywjy/JYRadarChart) - iOSベースのオープンソースのレーダーチャート実装
- [MagicPie](https://github.com/AlexandrGraschenkov/MagicPie) - 素晴らしいレイヤーベースのパーセンテージチャート。驚くほど高速で完全にカスタマイズ可能。MagicPieで提供される素晴らしいアニメーションを備えている
- [PieCharts](https://github.com/i-schuetz/PieCharts) - iOS向けに使いやすく、高度にカスタマイドなパーセンテージチャートライブラリ
- [PNChart](https://github.com/kevinzhow/PNChart) - PinerおよびCoinsManで使用されているシンプルで美しいチャートライブラリ
- [Scrollable-GraphView](https://github.com/philackm/ScrollableGraphView) - Swiftで記述されたiOS向けの適応型スクロール可能なグラフビュー。シンプルな離散データセットの可視化に適している
- [SwiftChart](https://github.com/gpbl/SwiftChart) - iOS向けのラインおよびエリアチャートライブラリ
- [TEAChart](https://github.com/xhacker/TEAChart) - シンプルで直感的なiOSチャートライブラリ。貢献グラフ、時計チャート、バーチャートを含む
- [TKRadarChart](https://github.com/TBXark/TKRadarChart) - Swiftでカスタマイズ可能なレーダーチャート
- [TWRCharts](https://github.com/chasseurmic/TWRCharts) - ChartJS用のiOS用ラッパー。ネイティブObj-Cコードの力を活かしてアニメーションチャートを簡単に構築できます

**[back to top関連](#contributing-and-collaborating)**

## コード注入 <a id="code-injection"></a>

 *Decrease development time with these tools*

- [Inject](https://github.com/krzysztofzablocki/Inject) - Swiftアプリケーション向けのホットリロード！
- [injectionforxcode](https://github.com/johnno1962/injectionforxcode) - Swiftを用いたコードインジェクション
- [Vaccine](https://github.com/zenangst/Vaccine) - Vaccineは、アプリケーションが再コンパイルによる影響を受けないよう設計されたフレームワークです

**[back to top関連](#contributing-and-collaborating)**

## コード品質 <a id="code-quality"></a>

 *Quality always matters. Code checkers, memory vigilants, syntax sugars and more.*

- [Aardvark](https://github.com/square/Aardvark) - Aardvarkは、実行可能なバグレポートを作成するための非常に簡単なライブラリです
- [Bootstrap](https://github.com/krzysztofzablocki/Bootstrap) - 高品質なコーディングを目的としたiOSプロジェクトのスタートアップ
- [Bugsee](https://www.bugsee.com) - アプリ内でのバグおよびクラッシュ報告（動画、ログ、ネットワークトラフィック、トレースを含む）
- [FBRetainCycleDetector](https://github.com/facebook/FBRetainCycleDetector) - iOS向けの実行時におけるリテンションサイクルの検出を支援するライブラリ
- [HeapInspector-for-iOS](https://github.com/tapwork/HeapInspector-for-iOS) - インストルメンツを使わずにiOSアプリのメモリ問題と漏れを検出できます
- [MLeaksFinder](https://github.com/Tencent/MLeaksFinder) - 開発時にiOSアプリのメモリ漏れを検出できます
- [PSTModernizer](https://github.com/PSPDFKit-labs/PSTModernizer) - 古いiOSバージョンへのサポートを容易にするために、問題を修正し、欠落したメソッドを追加します
- [spacecommander](https://github.com/square/spacecommander) - チームで完全にフォーマットされたObjective-Cコードをコミットできるようになります
- [SwiftCop](https://github.com/andresinaka/SwiftCop) - SwiftCopは、Ruby On RailsのActive Recordバリデーションの明確さを参考にした、Swiftで完全に書かれたバリデーションライブラリです
- [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - Swiftコードのフォーマットを再構成するためのコードライブラリとコマンドラインツール
- [Tailor](https://github.com/sleekbyte/tailor) - Swift向けのクロスプラットフォーム静的分析ツールで、よりクリーンなコードを書くことができ、バグを回避できます

**[back to top関連](#contributing-and-collaborating)**

### Linter <a id="linter"></a>

*Static code analyzers to enforce style and conventions.*

- [AnyLint](https://github.com/Flinesoft/AnyLint) - Swiftと正規表現の力を組み合わせて、何でもリントできます
- [IBLinter](https://github.com/IBDecodable/IBLinter) - Interface Builder向けのリントツール
- [OCLint](https://github.com/oclint/oclint) - 品質向上と欠陥削減を目的とした静的コード分析ツール
- [Swiftlint](https://github.com/realm/SwiftLint) - Swiftのスタイルと規約を強制するツール

**[back to top関連](#contributing-and-collaborating)**

## 色 <a id="color"></a>

*Hex color extensions, theming, color pickers and other awesome color tools.*

- [BCColor](https://github.com/boycechang/BCColor) - 軽量でありながら強力な色用ツールキット（Swift）
- [ChromaColorPicker](https://github.com/joncardasis/ChromaColorPicker) - Swiftで構築された直感的なiOS用色選択器
- [Colours](https://github.com/bennyguitar/Colours) - 美しい事前定義された色セットと、iOS/macOS開発をしやすくなる色関数のセット
- [DynamicColor](https://github.com/yannickl/DynamicColor) - Swiftで簡単に色を操作できるもう一つの拡張機能
- [FlatUIColors](https://github.com/brynbellomy/FlatUIColors) - Swiftで書かれたフラットUI用色パレット補助ツール
- [Gestalt](https://github.com/regexident/Gestalt) - 非侵襲的かつ軽量のiOSアプリテーマライブラリで、アニメーション付きテーマ切り替えをサポート
- [Hue](https://github.com/zenangst/Hue) - Hueは、あなたが一生使いたいという一括色処理ツール
- [PrettyColors](https://github.com/jdhealy/PrettyColors) - ANSIエスケープコードを使ってTerminalでテキストのスタイルと色を設定。ECMA標準48に準拠。
- [RandomColorSwift](https://github.com/onevcat/RandomColorSwift) - Swift向けに魅力的な色生成ツール。`randomColor.js` から移植されたもの。
- [SheetyColors](https://github.com/chrs1885/SheetyColors) - iOS用のアクションシートスタイルの色選択器
- [SwiftHEXColors](https://github.com/thii/SwiftHEXColors) - UIColorへのHEX色処理の拡張機能
- [UIColor-Hex-Swift](https://github.com/yeahdongcn/UIColor-Hex-Swift) - RGBA HEX文字列を使って自動リリースされる色を作成するための便利メソッド

**[back to top関連](#contributing-and-collaborating)**

## コマンドライン <a id="command-line"></a>

*Smart, beautiful and elegant tools to help you create command line applications.*

- [ColorizeSwift](https://github.com/mtynior/ColorizeSwift) - SwiftでTerminalの文字スタイルを設定
- [Commander](https://github.com/kylef/Commander) - Swiftで美しいコマンドラインインターフェースを作成
- [Guaka](https://github.com/nsomar/Guaka) - Swiftで最もスマートかつ美しい（POSIX準拠）コマンドラインフレームワーク
- [Linenoise](https://github.com/andybest/linenoise-swift) - readlineの純Swift版
- [nef](https://github.com/bow-swift/nef) - Swift Playgrounds形式のドキュメント作成を容易にするコマンドラインツール
- [Progress](https://github.com/jkandzi/Progress.swift) - ループに美しい進行バーを追加
- [SourceDocs](https://github.com/eneko/SourceDocs) - インラインソースコメントからMarkdownドキュメントを生成するコマンドラインツール
- [Swift Argument Parser](https://github.com/apple/swift-argument-parser) - Swiftでのシンプルで型安全な引数解析
- [SwiftCLI](https://github.com/jakeheis/SwiftCLI) - SwiftでCLIを開発するための強力なフレームワーク
- [Swiftline](https://github.com/nsomar/Swiftline) - Swiftlineは、コマンドラインアプリケーションを作成するためのツールセットです。
- [SwiftShell](https://github.com/kareman/SwiftShell) - シェルスクリプトやシェルコマンドの実行に用いられるSwiftフレームワークです。
- [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) - テキストテーブルを生成するための軽量ライブラリです。

**[back to top関連](#contributing-and-collaborating)**

## 並行処理 <a id="concurrency"></a>

*Job schedulers, Coroutines, Asynchronous and Type safe threads libs and frameworks written in Swift*

- [AsyncNinja](https://github.com/AsyncNinja/AsyncNinja) - 並列処理および反応型プログラミングの基本的な要素を提供する完全なセットです。
- [AsyncQueue](https://github.com/dfed/swift-async-queue) - 同期環境から非同期環境へと順序付きタスクを送信できるキューを提供するライブラリです。
- [Concurrent](https://github.com/typelift/Concurrent) - 機能的並列処理の基本要素です。
- [Queuer](https://github.com/FabrizioBrancati/Queuer) - OperationQueueおよびDispatch（＝GCD）に基づいたキュー管理ライブラリです。
- [SwiftQueue](https://github.com/lucas34/SwiftQueue) - 並列実行、失敗時のリトライ、永続化、繰り返し、遅延など、さまざまな機能を備えたジョブスケジューラです。
- [Venice](https://github.com/Zewo/Venice) - SwiftにおけるCSP（コルーチン、チャンネル、セレクト）です。

**[back to top関連](#contributing-and-collaborating)**

## Core Data関連 <a id="core-data"></a>

*Core data Frameworks, wrappers, generators and boilerplates.*

- [AERecord](https://github.com/tadija/AERecord) - Swiftにおける強力なCore Dataのラッパーです。
- [CloudCore](https://github.com/deeje/CloudCore) - 信頼性の高いCloudKit同期：オフライン編集、関係性、共有・公開データベース、フィールドレベルのデルタなどです。
- [CoreStore](https://github.com/JohnEstropia/CoreStore) - インクリメンタルマイグレーション、フェッチ、オブザーバーなどに用いる強力なCore Dataフレームワークです。
- [Ensembles](https://github.com/drewmccormack/ensembles) - Core Data用の同期フレームワークです。
- [Graph](https://github.com/CosmicMind/Graph) - SwiftにおけるCore Data向けに、エレガントなデータ駆動型フレームワークです。
- [JSQCoreDataKit](https://github.com/jessesquires/JSQCoreDataKit) - スワイプなCore Dataスタックです。
- [MagicalRecord](https://github.com/magicalpanda/MagicalRecord) - Core Data向けに、非常に素晴らしいシンプルなフェッチ機能です。
- [Mogenerator](https://github.com/rentzsch/mogenerator) - 自動的にCore Dataのコードを生成します。
- [PredicateFlow](https://github.com/andreadelfante/PredicateFlow) - 素晴らしい、型が明確で読みやすいNSPredicateを書くことができます。属性名や述語演算、誤った引数型を推測せずに、自然な流れのNSPredicateを書くことができます。
- [PrediKit](https://github.com/KrakenDev/PrediKit) - iOS、macOS、tvOS、watchOS向けのNSPredicateのDSL。SnapKitをインスピレーションとして、Swiftで丁寧に書かれています。
- [Skopelos](https://github.com/albertodebortoli/Skopelos) - Core Data上でActive Recordのミニマルでスレッドセーフ、ボイラープレートなし、非常に使いやすいバージョンです。Core Dataを行うために必要なすべてのもの。
- [Sync](https://github.com/3lvis/Sync) - Modern Swift JSON の Core Data への同期

**[back to top関連](#contributing-and-collaborating)**

## コース <a id="courses"></a>

*Online courses, tutorials and learning resources to kickstart your iOS development journey.*

### 入門 <a id="getting-started"></a>

*Courses, tutorials, guides and bootcamps*

- [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui) - iOS 15 および Swift 5.5 にアップデートされたビデオとチュートリアルの無料コレクション
- [Apple - Object-Oriented Programming with Objective-C](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/OOP_ObjC/Introduction/Introduction.html)
- [ARStarter](https://github.com/codePrincess/ARStarter) - ARKit で始める初心者向けの簡単な練習
- [Classpert - A list of 500 iOS Development courses (free and paid), from top e-learning platforms](https://classpert.com/ios-development) - Udacity、Pluralsight、Coursera、Edx、Treehouse および Skillshare から提供されるコースの完全なカタログ
- [iOS & Swift - The Complete iOS App Development Bootcamp](https://www.udemy.com/course/ios-13-app-development-bootcamp/)
- [Ray Wenderlich](https://www.raywenderlich.com/2690-learn-to-code-ios-apps-1-welcome-to-programming) - iOS アプリの開発を学ぶ
- [Stanford - Developing apps for iOS](https://cs193p.stanford.edu/) - スタンフォード大学の CS193p - iOS 用アプリ開発
- [Udacity - Intro to iOS App Development with Swift](https://www.udacity.com/course/intro-to-ios-app-development-with-swift--ud585) - Udacity の無料コース。最初の iPhone アプリを作成する

**[back to top関連](#contributing-and-collaborating)**

## データベース <a id="database"></a>

*Wrappers, clients, Parse alternatives and safe tools to deal with ephemeral and persistent data.*

- [Couchbase Mobile](https://www.couchbase.com/products/mobile/) - クラウド同期をサポートするモバイル用 Couchbase ドキュメントストア
- [Default](https://github.com/Nirma/Default) - UserDefaults への現代的なインターフェース + Codable のサポート
- [Defaults](https://github.com/sindresorhus/Defaults) - Swifty で構築された現代的な UserDefaults
- [DuckDB](https://github.com/duckdb/duckdb-swift) - DuckDB は、高性能な分析データベースシステム
- [FCModel](https://github.com/marcoarment/FCModel) - Core Data に代わる、SQL に直接アクセスしたい人の代替案
- [Fluent](https://github.com/vapor/fluent) - Swift でデータベースとやり取りするためのシンプルな ActiveRecord 実装
- [FMDB](https://github.com/ccgus/fmdb) - SQLite をラップした Cocoa / Objective-C のラッパー
- [GRDB.swift](https://github.com/groue/GRDB.swift) - Swift 用の柔軟な SQLite ツールキット（WAL モードをサポート）
- [IceCream](https://github.com/caiyue1993/IceCream) - Realm データベースと CloudKit の同期
- [MMKV](https://github.com/Tencent/MMKV) - 微信が開発した効率的で小型のモバイルキーバリューストレージフレームワーク。iOS、Android、macOS および Windows で動作
- [MongoKitten](https://github.com/OpenKitten/MongoKitten) - 純粋な Swift の MongoDB クライアント実装（埋め込みデータベースをサポート）
- [MySQL](https://github.com/PerfectlySoft/Perfect-MySQL) - MySQL クライアントライブラリをラップした Swift のラッパーで、MySQL サーバーへのアクセスを可能にする
- [Nora](https://github.com/SD10/Nora) - Nora は Firebase とのやり取りに必要な抽象化層で、FirebaseDatabase および FirebaseStorage を扱う際に使用
- [ObjectBox](https://github.com/objectbox/objectbox-swift) - ObjectBoxは、非常に高速かつ軽量のオブジェクト保存フレームワークです。
- [OHMySQL](https://github.com/oleghnidets/OHMySQL) - MySQL C APIのObjective-Cラッパーです。
- [PersistenceKit](https://github.com/Teknasyon-Teknoloji/PersistenceKit) - Codableオブジェクトをさまざまな保存層に保存・取得するため、数行のコードで実現します。
- [PersistentStorageSerializable](https://github.com/IvanRublev/PersistentStorageSerializable) - Swiftライブラリで、アプリケーションの設定（ユーザーの好み）をシステムのUser Defaultsまたはディスク上のProperty Listファイルでシリアル化しやすくします。
- [Prephirences](https://github.com/phimage/Prephirences) - Prephirencesは、アプリケーションの設定、構成、アプリ状態の管理に役立つプロトコルと便利なメソッドを提供するSwiftライブラリです。
- [Realm](https://github.com/realm/realm-cocoa) - CoreDataおよびSQLiteの代替：シンプルで現代的で高速です。
- [RealmGeoQueries](https://github.com/mhergon/RealmGeoQueries) - RealmGeoQueriesは、Realm Cocoaで空間クエリを簡易化します。公式機能が存在しない場合、このライブラリは近接検索を行う可能性を提供します。
- [SecureDefaults](https://github.com/vpeschenkov/SecureDefaults) - UserDefaults/NSUserDefaultsへの軽量ラッパーで、AES-25及の追加暗号化層を備えています。
- [Shallows](https://github.com/dreymonde/Shallows) - あなたの軽量な保存ツールボックスです。
- [SQLite.swift](https://github.com/stephencelis/SQLite.swift) - SQLite3に対するSwift言語による型安全なラッパーです。
- [StorageKit](https://github.com/StorageKit/StorageKit) - あなたのデータ保存トラブルシューティングツールです。
- [SugarRecord](https://github.com/modo-studio/SugarRecord)  - データ保存管理ライブラリです。
- [SwiftStore](https://github.com/hemantasapkota/SwiftStore) - Swift向けのLevelDBをバックアップしたキーバリューストアです。
- [SwiftyUserDefaults](https://github.com/sunshinejr/SwiftyUserDefaults) - 静的型のNSUserDefaultsです。
- [TypedDefaults](https://github.com/tasanobu/TypedDefaults) - TypedDefaultsは、NSUserDefaultsを型安全に使用するためのユーティリティライブラリです。
- [Unrealm](https://github.com/arturdev/Unrealm) - Unrealmにより、Swiftのネイティブクラス、構造体、エナムをRealmに簡単に保存できます。
- [UserDefaults](https://github.com/nmdias/DefaultsKit) - iOS、macOS、tvOS向けのシンプルで強制型のUserDefaultsです。
- [WCDB](https://github.com/Tencent/wcdb) - WCDBは、iOS、macOS向けの効率的で完全で使いやすいモバイルデータベースフレームワークです。
- [YapDatabase](https://github.com/yapstudios/YapDatabase) - YapDatabaseは、iOSおよびMac向けの拡張可能なデータベースです。

**[back to top関連](#contributing-and-collaborating)**

## データ構造／アルゴリズム <a id="data-structures--algorithms"></a>

*Diffs, keypaths, sorted lists and other amazing data structures wrappers and libraries.*

- [Algorithm](https://github.com/CosmicMind/Algorithm) - Algorithmは、確率ツールセットによって強化されたデータ構造のコレクションです。
- [BTree](https://github.com/attaswift/BTree) - Swiftでメモリ内Bツリーを用いた高速に並べられたコレクション
- [Buffer](https://github.com/alexdrone/Buffer) - Swiftのμフレームワーク。配列の差分、コレクションの観察、セルの設定を効率的に実現
- [Changeset](https://github.com/osteslag/Changeset) - 一つのコレクションから別のコレクションへの最小編集
- [Differ](https://github.com/tonyarnold/Differ) - コレクション間の差分とパッチを生成するSwiftライブラリ
- [DifferenceKit](https://github.com/ra1028/DifferenceKit) - Swiftコレクション向けの高速かつ柔軟なO(n)差分アルゴリズムフレームワーク
- [Differific](https://github.com/zenangst/Differific) - 高速で使いやすい差分フレームワーク
- [Dispatch](https://github.com/alexdrone/Store) - SwiftにおけるマルチストアFluxの実装
- [Dollar](https://github.com/ankurp/Dollar) - Swift言語向けの機能的なツールバンド。JavaScriptのLo-DashやUnderscore.jsに類する https://www.dollarswift.org/.
- [EKAlgorithms](https://github.com/EvgenyKarkan/EKAlgorithms) - Objective-Cにおけるよく知られたCSアルゴリズムとデータ構造
- [HeckelDiff](https://github.com/mcudich/HeckelDiff) - Swiftでの高速な差分ライブラリ
- [KeyPathKit](https://github.com/vincent-pradeilles/KeyPathKit) - KeyPathKitは、型付きKeyPathを用いてデータを操作するための自然な構文を提供
- [Result](https://github.com/antitypical/Result) - Swiftで任意の操作の成功／失敗をモデル化する型
- [swift-algorithm-club](https://github.com/raywenderlich/swift-algorithm-club) - Swiftにおけるアルゴリズムとデータ構造、解説付き！
- [SwiftGraph](https://github.com/davecom/SwiftGraph) - 純Swiftで構築されたグラフデータ構造とユーティリティ関数
- [SwiftPriorityQueue](https://github.com/davecom/SwiftPriorityQueue) - 純Swiftで実装された古典的な二分ヒープによる優先度キュー
- [SwiftStructures](https://github.com/waynewbishop/SwiftStructures) - Swiftでよく使われるデータ構造とアルゴリズ及の例

**[back to top関連](#contributing-and-collaborating)**

## 日付・時刻 <a id="date--time"></a>

*Time and NSCalendar libraries. Also contains Sunrise and Sunset time generators, time pickers and NSTimer interfaces.*

- [10Clock](https://github.com/joedaniels29/10Clock) - このコントロールはiOS 10の"ベッドタイム"タイマーに強くインスピレーションを受けた、美しい時間選択画面
- [AnyDate](https://github.com/Kawoou/AnyDate) - Java 8 DateTime APIを参考にしたSwifty Date & Time API
- [Chronology](https://github.com/davedelong/Chronology) - より良い日付/時刻ライブラリの構築
- [DateHelper](https://github.com/melvitax/DateHelper) - SwiftにおけるNSDateのための便利な拡張
- [DateTools](https://github.com/MatthewYork/DateTools) - Objective-Cで日付と時刻を簡単に扱う
- [iso-8601-date-formatter](https://github.com/boredzo/iso-8601-date-formatter) - CocoaのNSFormatterのサブクラス。ISO-8601形式の文字列と日付の相互変換をサポート。カレンダー、週、順位形式をサポート。
- [Kronos](https://github.com/lyft/Kronos) - Swiftで提供されるエレガントなNTP日付ライブラリ。
- [NVDate](https://github.com/novalagung/nvdate) - Swift4での日付拡張ライブラリ。
- [Schedule](https://github.com/luoxiu/Schedule) - ⏳ Swift向けに欠けている軽量タスクスケジューラ。非常に人間が使いやすい構文を備えている。
- [Solar](https://github.com/ceeK/Solar) - Swiftのマイクロライブラリ。日出と日没の時間の生成を可能にする。
- [SwiftDate](https://github.com/malcommac/SwiftDate) - Swiftで日付とタイムゾーンを管理する最も良い方法。
- [SwiftyTimer](https://github.com/radex/SwiftyTimer) - NSTimer用のSwifty API。
- [Time](https://github.com/dreymonde/Time) - ジェネリクスを活用したSwiftでの型安全な時間計算。
- [Timepiece](https://github.com/naoty/Timepiece) - Swiftでの直感的なNSDate拡張機能。
- [TimeZonePicker](https://github.com/gligorkot/TimeZonePicker) - iOS設定アプリに似たTimeZonePicker UIViewController。
- [TrueTime](https://github.com/instacart/TrueTime.swift) - デバイス時計の変更に無関係に、真の現在時刻を取得。

**[back to top関連](#contributing-and-collaborating)**

## デバッグ <a id="debugging"></a>

*Debugging tools, crash reports, logs and console UI's.*

- [AEConsole](https://github.com/tadija/AEConsole) - iOSアプリ上にデバッグログを表示するカスタマイズ可能なコンソールUIオーバーレイ。
- [Alpha](https://github.com/Legoless/Alpha) - iOS向けの次世代デバッグフレームワーク。
- [AppSpector](https://appspector.com) - iOSおよびAndroid向けのリモートデバッグとデータ収集サービス。ネットワーク、ログ、CoreData、SQLite、NSNotificationCenter、仮のデバイスの地理位置をデバッグ可能。
- [Atlantis](https://github.com/ProxymanApp/atlantis) - iOSアプリからのHTTP/HTTPS通信をインターセプトする、小さなながらも強力なiOSフレームワーク。プロキシや証明書設定の手間がなくなる。Proxymanアプリで通信ログを確認可能。
- [chisel](https://github.com/facebook/chisel) - iOSアプリのデバッグを支援するLLDBコマンドのコレクション。
- [DBDebugToolkit](https://github.com/dbukowski/DBDebugToolkit) - iOS開発者およびQAエンジニア向けに使いやすいデバッグツールのセット。
- [DebugSwift](https://github.com/DebugSwift/DebugSwift) - iOSアプリのデバッグプロセスを簡素化・強化するための包括的なツールキット。
- [DoraemonKit](https://github.com/didi/DoraemonKit) - フル機能のiOSアプリ開発アシスタント。30以上のツールが含まれている。あなたにふさわしい。
- [Flex](https://github.com/Flipboard/FLEX) - iOSアプリ向けのインアプリデバッグおよび探索ツール。
- [Httper-iOS](https://github.com/MuShare/Httper-iOS) - 開発者向けのREST APIテストアプリ
- [Hyperion](https://github.com/willowtreeapps/Hyperion-iOS) - アプリ内設計レビューツール：測定値、属性、アニメーションを確認
- [LayoutInspector](https://github.com/isavynskyi/LayoutInspector) - iOSデバイス上でアプリレイアウトを直接デバッグ：3Dでレイヤーを確認し、各表示ビューの属性をデバッグ
- [MTHawkeye](https://github.com/meitu/MTHawkeye) - iOS向けのプロファイリング／デバッグ支援ツール。UITimeProfiler、メモリ割り当て、Living ObjC Objects Sniffer、ネットワーク取引のウォーターフォールなど、各種ツールを提供
- [Netfox](https://github.com/kasketis/netfox) - 軽量で、1行の設定でiOS／macOS向けのネットワークデバッグライブラリ！
- [NetworkEye](https://github.com/coderyi/NetworkEye) - iOS向けネットワークデバッグライブラリ。アプリ内のHTTPリクエストを監視し、リクエストに関連する情報を表示
- [Playbook](https://github.com/playbook-ui/playbook-ios) - UIコンポーネントの分離開発と、自動的にスナップショットをとるライブラリ
- [PonyDebugger](https://github.com/square/PonyDebugger) - Chrome Developer Toolsを使用した、本番のiOSアプリのネットワークおよびデータデバッグ
- [Scyther](https://github.com/bstillitano/Scyther) - ネットワークログ、レイアウト確認、位置情報のフォーカス、コンソールログなど、多くの便利なツールを備えたアプリ内デバッグメニュー
- [Woodpecker](http://www.woodpeck.cn) - Macからサンドボックスファイル、UserDefaults、ネットワークリクエストを確認
- [Wormholy](https://github.com/pmusolino/Wormholy) - iOSネットワークデバッグ、ウィザードのように使いやすい
- [Xniffer](https://github.com/xmartlabs/Xniffer) - URLSessionをベースにしたSwiftのネットワークプロファイラー

**[back to top関連](#contributing-and-collaborating)**


## 依存性注入 <a id="dependency-injection"></a>

*Dependency injection frameworks and libraries for decoupled, testable iOS code.*

- [DITranquillity](https://github.com/ivlevAstef/DITranquillity) - クリーンなSwiftで書かれたiOSアプリ向けのデプロイインジェクションフレームワーク
- [Needle](https://github.com/uber/needle) — Compile-time safe Swift dependency injection framework with real code.
- [Perform](https://github.com/thoughtbot/Perform) - storyboardのセグメントに簡単なデプロイインジェクションを提供
- [SafeDI](https://github.com/dfed/safedi) - Swift 6でのコンパイル時安全なデプロイインジェクション
- [Swinject](https://github.com/Swinject/Swinject) - Swift向けのデプロイインジェクションフレームワーク
- [Typhoon](https://github.com/appsquickly/Typhoon) - Objective-C向けの強力なデプロイインジェクション
- [Weaver](https://github.com/scribd/Weaver) - Swift向けの宣言型、使いやすく、安全なデプロイインジェクションフレームワーク

**[back to top関連](#contributing-and-collaborating)**

## 依存関係／パッケージ管理 <a id="dependency--package-manager"></a>

*Tools to manage third-party dependencies and packages in your iOS projects.*

- [Accio](https://github.com/JamitLabs/Accio) - SwiftPMベースのiOSおよびCo向けのデプロイインジェクドマネージャー（Carthageより改善点あり）
- [Carthage](https://github.com/Carthage/Carthage) - Cocoa向けのシンプルかつ分散型のデプロイインジェクションマネージャー
- [CocoaPods](https://cocoapods.org/) - CocoaPodsはObjective-Cプロジェクト用の依存関係マネージャです。数千のライブラリを提供しており、プロジェクトのスケーリングを美しくサポートします。
- [Rome](https://github.com/tmspzz/Rome) - Carthageで構築されたフレームワーク用のキャッシュツールです。
- [swift-package-manager](https://github.com/apple/swift-package-manager) - Swiftプログラミング言語用のパッケージマネージャです。
- [Xcode Maven](http://sap-production.github.io/xcode-maven-plugin/site/) - Xcode Maven Pluginは、Mavenのライフサイクル中にXcodeのビルドを実行するために使用できます。

**[back to top関連](#contributing-and-collaborating)**

## デプロイ／配布 <a id="deployment--distribution"></a>

*Continuous integration, delivery and distribution tools for shipping iOS apps.*

- [AppCenter](https://appcenter.ms) - すべてのプラットフォームに対してアプリを継続的にビルド、テスト、リリース、監視します。
- [Appcircle.io](https://appcircle.io) — An enterprise-grade mobile DevOps platform that automates the build, test, and publish store of mobile apps for faster, efficient release cycle
- [AppLaunchpad](https://theapplaunchpad.com/) - 無料のApp Storeスクリーンショットビルダーです。
- [Bitrise](https://www.bitrise.io) - 数十の統合を備えたモバイル連続統合とデリバリー。ビルド、テスト、デプロイ、協働を可能にします。
- [boarding](https://github.com/fastlane/boarding) - TestFlightベータテスト者向けのシンプルなサインアップページを即座に作成できます。
- [buddybuild](https://www.buddybuild.com/) - モバイル開発用のイテレーションプラットフォームです。ビルド、デプロイ、協働が可能です。
- [Codemagic](https://codemagic.io) - Codemagic CI/CDにより、iOSアプリのビルド、テスト、デリバリーを20%速くできます。
- [Crashlytics](https://firebase.google.com/products/crashlytics/) - クラッシュ報告およびベータテストサービスです。
- [deliver](https://github.com/fastlane/fastlane/tree/master/deliver) - 1つのコマンドで、スクリーンショット、メタデータ、アプリをApp Storeにアップロードできます。
- [fastlane](https://github.com/fastlane/fastlane) - すべてのiOSデプロイツールを1つのスムーズなワークフローに統合します。
- [Instabug](https://instabug.com) - アプリ内フィードバック、バグおよびクラッシュ報告、ユーザーのステップ、動画記録、画面注釈、ネットワークリクエストログを活用してバグを迅速に修正します。
- [LaunchKit](https://github.com/LaunchKit/LaunchKit) - モバイルアプリ開発者向けのウェブベースツールセット。現在、オープンソースに変更されました！
- [Rollout.io](https://rollout.io/) - 原生アプリ（Obj-c & Swift）にリアルタイムでパッチを適用し、バグを修正・変更・操作するSDKです。
- [Runway](https://runway.team) - チーム向けに簡単なモバイルリリースを実現。バージョン管理、プロジェクト管理、CI、アプリストア、クラッシュ報告など、さまざまなツールを統合し、リリースサイクル中に開発チームが共有できる1つの真実のソースを提供します。自動化と協働の両方を備えています。
- [Screenplay](https://screenplay.dev) - iOS向けの即時ロールバックとカニーデプロイメントを提供します。
- [ScreenshotFramer](https://github.com/IdeasOnCanvas/ScreenshotFramer) - Screenshot Framerを使用すると、見た目が美しく、ローカライズされたApp Store画像を作成できます。
- [Semaphore](https://semaphoreci.com/product/ios) - Appleデバイス用のアプリケーションをビルド、テスト、デプロイできるCI/CDサービスです。Semaphore 2.0ではiOS対応が完全に統合されており、Linuxベース開発と同様に強力なCI/IDパイプライン機能を使用できます。
- [snapshot](https://github.com/fastlane/fastlane/tree/master/snapshot) - iOSアプリのすべてのデバイスでローカルスクリーンショットを自動で取得します。
- [TestFlight Beta Testing](https://developer.apple.com/testflight/) - iTunes Connectにホストされているベータテストサービス（iOS 8以降が必要）。
- [watchbuild](https://github.com/fastlane/watchbuild) - iTunes Connectのビルド処理が終了した際に通知を受け取ります。

**[back to top関連](#contributing-and-collaborating)**

## EventBus関連 <a id="eventbus"></a>

*Promises and Futures libraries to help you write better async code in Swift.*

- [Bolts](https://github.com/BoltsFramework/Bolts-ObjC) - Boltsは、モバイルアプリ開発を簡単にするための低レベルのライブラリのコレクションで、タスク（プロミス）やアプリリンク（ディープリンク）が含まれます。
- [Bolts-Swift](https://github.com/BoltsFramework/Bolts-Swift) - Boltsは、モバイルアプリ開発を簡単にするための低レベルのライブラリのコレクドンで、タスク（プロミス）やアプリリンク（ディープリンク）が含まれます。
- [FutureKit](https://github.com/FutureKit/FutureKit) - iOSおよびmacOS向けのSwiftベースのFuture/プロミスライブラリ。
- [Hydra](https://github.com/malcommac/Hydra) - Promises & Await - Swiftでより良い非同期コードを書く。
- [Promis](https://github.com/albertodebortoli/Promis) - Swiftにおける最も簡単なFutureおよびプロミスフレームワーク。魔法はなく、テンプレートコードもありません。
- [Promise](https://github.com/khanlou/Promise) - Swift向けのプロミスライブラリで、JavaScriptのA+仕様の一部を基にしています。
- [PromiseKit](https://github.com/mxcl/PromiseKit) - iOSおよびmacOS向けのプロミス。
- [RWPromiseKit](https://github.com/deput/RWPromiseKit) - Objective-C向けの軽量プロミスライブラリ。
- [signals-ios](https://github.com/uber/signals-ios) - 型安全なイベントシステム。
- [SwiftEventBus](https://github.com/cesarferreira/SwiftEventBus) - iOS向けに最適化された発行/購読イベントバス。
- [SwiftNotificationCenter](https://github.com/100mango/SwiftNotificationCenter) - 型安全かつスレッド安全、メモリ安全なプロトコル指向のNotificationCenter。
- [SwiftTask](https://github.com/ReactKit/SwiftTask) - Swift向けのプロミス＋進行状況＋一時停止＋キャンセル＋リトライ。
- [then🎬](https://github.com/freshOS/then) - Swiftで洗練された非同期コード。
- [When](https://github.com/vadymmarkov/When) - Swift向けの軽量プロミス実装。

**[back to top関連](#contributing-and-collaborating)**

## ファイル <a id="files"></a>

*File management, file browser, zip handling and file observers.*

- [AMSMB2](https://github.com/amosavian/AMSMB2) - iOS向けのSMB 2/3共有接続用のSwiftフレームワーク。
- [AppFolder](https://github.com/dreymonde/AppFolder) - AppFolderは、アプリケーションのコンテナ内のディレクトリを友好的かつ型安全に表現できる軽量フレームワークです。
- [FileBrowser](https://github.com/marmelroy/FileBrowser) - iOS向けの強力なファイルブラウザ（Swift）。
- [FileKit](https://github.com/nvzqz/FileKit) - Swiftでシンプルかつ表現力の高いファイル管理
- [FileProvider](https://github.com/amosavian/FileProvider) - iOS/tvOSおよびmacOSでのローカル、iCloud、リモート（WebDAV/FTP/Dropbox/OneDrive/SMB2）ファイル用のFileManagerの代替
- [KZFileWatchers](https://github.com/krzysztofzablocki/KZFileWatchers) - ローカルおよびリモートファイルの変更を観察するためのマイクロフレームワーク。開発ツールの構築に役立ちます
- [Zip](https://github.com/marmelroy/Zip) - Swiftでファイルの圧縮と展開を行うフレームワーク
- [ZipArchive](https://github.com/ZipArchive/ZipArchive) - iOSおよびMacでファイルの圧縮と展開を行うためのシンプルユーティリティクラス
- [ZIPFoundation](https://github.com/weichsel/ZIPFoundation) - Swiftで簡単なZIP処理
- [ZipZap](https://github.com/pixelglow/ZipZap) - iOS、macOSおよびtvOS向けのZIPファイルI/Oライブラリ


**[back to top関連](#contributing-and-collaborating)**

## 関数型プログラミング <a id="functional-programming"></a>

*Collection of Swift functional programming tools.*

- [Argo](https://github.com/thoughtbot/Argo) - Swiftでの機能型JSONパーサーライブラリ
- [Bow](https://github.com/bow-swift/bow) - Swiftの機能型プログラミング用の補助ライブラリ
- [OptionalExtensions](https://github.com/RuiAAPeres/OptionalExtensions) - SwiftのマイクロフレームワークでOptional型に拡張
- [Prelude](https://github.com/robrix/Prelude) - Swiftのマイクロフレームドームでシンプルな機能型プログラミングツールを提供
- [Runes](https://github.com/thoughtbot/Runes) - Swiftにおけるモナド関数に用いるインフィックス演算子
- [Swiftx](https://github.com/typelift/Swiftx) - あらゆるプロジェクトに使える機能型データ型と関数
- [Swiftz](https://github.com/typelift/Swiftz) - Swiftにおける機能型プログラミング

**[back to top関連](#contributing-and-collaborating)**

## ゲーム <a id="games"></a>

*Game engines, frameworks and sample projects for building games on iOS.*

- [CollectionNode](https://github.com/bwide/CollectionNode) - SpriteKitにおけるcollectionView用のSwiftフレームワーク
- [glide engine](https://github.com/cocoatoucher/Glide) - Wheel of Fortuneのようなゲームを作成するためのSpriteKitおよびGameplayKitベースのエンジン。実際の例とチュートリアルを含む
- [Sage](https://github.com/nvzqz/Sage) - Swiftで利用可能なクロスプラットフォームチェスライブラリ
- [SKTiled](https://github.com/mfessenden/SKTiled) - SpriteKitでのTiledアセットを扱うためのSwiftフレームワーク
- [SwiftFortuneWheel](https://github.com/sh-khashimov/SwiftFortuneWheel) - Wheel of Fortuneのようなゲームに使えるクロスプラットフォームフレームワーク

**[back to top関連](#contributing-and-collaborating)**

## GCD関連 <a id="gcd"></a>

*Grand Central Dispatch syntax sugars, tools and timers.*

- [Async](https://github.com/duemunk/Async) - Grand Central Dispatchにおける非同期スケジューリングに用いるSwiftの文法糖
- [GCDKit](https://github.com/JohnEstropia/GCDKit) - グランド・センター・ディスパッチをSwiftで簡潔に。
- [GCDTimer](https://github.com/hemantasapkota/GCDTimer) - よくテストされたグランド・センター・ディスパッチ（GCD）タイマー（Swift）。
- [YYDispatchQueuePool](https://github.com/ibireme/YYDispatchQueuePool) - iOS用のグローバルディスパッチキューを管理するユーティリティクラス。

**[back to top関連](#contributing-and-collaborating)**

## ジェスチャー <a id="gesture"></a>

*Libraries and tools to handle gestures.*

- [DBPathRecognizer](https://github.com/didierbrun/DBPathRecognizer) - ジェスチャ認識ツール。
- [FDFullscreenPopGesture](https://github.com/forkingdog/FDFullscreenPopGesture) - iOS7以降のシステムスタイルでフルスクリーンポップジェスチャを有効にするUINavigationControllerのカテゴリ（AOPを使用）。
- [Sensitive](https://github.com/hellowizman/Sensitive) - iOSでジェスチャを扱う特別な方法。
- [SwiftyGestureRecognition](https://github.com/b3ll/SwiftyGestureRecognition) - XcodeのプレイグランドでUIGestureRecognizerのプロトタイピングを支援。
- [Tactile](https://github.com/delba/Tactile) - iOSでジェスチャを扱うより良い方法。

**[back to top関連](#contributing-and-collaborating)**

## グラフィックス <a id="graphics"></a>

*CoreGraphics, CoreAnimation, SVG, CGContext libraries, helpers and tools.*

- [AnimatedGradientView](https://github.com/rwbutler/AnimatedGradientView) - iOSアプリにアニメーション付きグラデーションを追加するシンプルなフレームワーク。
- [Drawsana](https://github.com/Asana/Drawsana) - iOSでレターマーク描画と画像マーキングビューを構築するフレームワーク。
- [EZYGradientView](https://github.com/shashankpali/EZYGradientView) - コード一行も書かずにグラデーションとブラーグラデーションを作成。
- [jot](https://github.com/IFTTT/jot) - 画像に簡単に描画とテキストを追加するiOSフレームワーク。
- [Macaw](https://github.com/exyte/macaw) - Swiftで書かれたSVG対応の強力で使いやすいベクターグラフィックスライブラリ。
- [MKGradientView](https://github.com/maxkonovalov/MKGradientView) - Swiftで書かれた、線形（軸）、径向（円）、角（円錐）、双線形（四点）グラデーションを生成可能なCore Graphicsベースのグラデーションビュー。
- [MPWDrawingContext](https://github.com/mpw/MPWDrawingContext) - CoreGraphics CGContext用のObjective-Cラッパー。
- [NXDrawKit](https://github.com/Nicejinux/NXDrawKit) - NXDrawKitはiPhone向けにシンプルで使いやすく、便利な描画キット。
- [Snowflake](https://github.com/onmyway133/Snowflake) - SVGをSwiftで。
- [SVGKit](https://github.com/SVGKit/SVGKit) - iOS／macOS上でSVG画像を表示・操作する（ネイティブレンダリング：CoreAnimation）（現在はiOSのみ対応、macOSコードは更新が必要）。
- [SwiftSVG](https://github.com/mchoe/SwiftSVG) - 1パスでSVGをパースし、複数のインターフェースオプション（String、NS/UIBezierPath、CAShapeLayer、NS/UIView）を提供するパーサー。
- [YYAsyncLayer](https://github.com/ibireme/YYAsyncLayer) - 非同期レンダリングおよび表示を行うiOS用ユーティリティクラス。

**[back to top関連](#contributing-and-collaborating)**

## ハードウェア <a id="hardware"></a>

*Libraries and utilities for interacting with iOS device hardware.*

### Bluetooth関連 <a id="bluetooth"></a>

*Libraries to deal with nearby devices, BLE tools and MultipeerConnectivity wrappers.*

- [BabyBluetooth](https://github.com/coolnameismy/BabyBluetooth) - iOS/MacOSにおけるBluetooth (BLE)を使う最も簡単な方法
- [Bleu](https://github.com/1amageek/Bleu) - U.向けBLE (Bluetooth LE)
- [BlueCap](https://github.com/troystribling/BlueCap) - iOSのBluetooth LEフレームワーク
- [Bluejay](https://github.com/steamclock/bluejay) - 信頼性の高いBluetooth LEアプリを構築するためのシンプルなSwiftフレームワーク
- [Bluetonium](https://github.com/e-sites/Bluetonium) - SwiftにおけるBluetoothマッピング
- [BluetoothKit](https://github.com/rhummelmose/BluetoothKit) - iOS/macOSデバイス間でBLEを使って簡単に通信
- [Discovery](https://github.com/omergul/Discovery) - 周囲のデバイスを発見し、データを取得できる非常にシンプルなライブラリ（ペアアプリがバックグラウンドで動作していても）
- [LGBluetooth](https://github.com/LGBluetooth/LGBluetooth) - CoreBluetooth上のシンプルでブロックベース、軽量なライブラリ。Core Bluetooth関連のコードを整理します。
- [MultiPeer](https://github.com/dingwilson/MultiPeer) - MultipeerはAppleのMultipeerConnectivityフレームワークをラッピングしたもので、Appleデバイス間でオフラインデータを送信できます。複数の近くのデバイスに自動的に接続し、BluetoothまたはWi-Fiを使って情報を共有できるようにします。
- [PeerKit](https://github.com/jpsim/PeerKit) An open-source Swift framework for building event-driven, zero-config Multipeer Connectivity apps.

**[back to top関連](#contributing-and-collaborating)**

### カメラ <a id="camera"></a>

*Mocks, ImagePickers, and multiple options of customizable camera implementation*

- [BarcodeScanner](https://github.com/hyperoslo/BarcodeScanner) - シンプルで美しいバーコードスキャナー
- [CameraKit-iOS](https://github.com/CameraKit/camerakit-ios) - 次世代のiOSプロジェクトにおけるカメラ性能と使いやすさを大幅に向上させる
- [CameraManager](https://github.com/imaginary-cloud/CameraManager) - アプリ内でカスタムカメラビューを作成するために必要なすべての設定を提供するシンプルなSwiftクラス
- [Cool-iOS-Camera](https://github.com/GabrielAlva/Cool-iOS-Camera) - AVFoundationを使って作成した、完全にカスタマイズ可能で現代的なiOS用カメラ実装
- [ExyteMediaPicker](https://github.com/exyte/mediapicker) - カスタマイズ可能なメディアピッカー
- [FastttCamera](https://github.com/IFTTT/FastttCamera) - iOS向けの高速かつ簡単なカメラフレームワーク（カスタマイズ可能なフィルター付き）
- [FDTake](https://github.com/fulldecent/FDTake) - 写真や動画を撮影する、またはライブラリから選ぶことが簡単にできる
- [Fusuma](https://github.com/ytakzk/Fusuma) - Instagramのような写真ブラウザと、Swiftで数行のコードで実現できるカメラ機能
- [HorizonSDK-iOS](https://github.com/HorizonCamera/HorizonSDK-iOS) - 最先端のリアルタイム動画録画／写真撮影iOSライブラリ
- [HybridCamera](https://github.com/eonist/HybridCamera) - SnapChatのようなiOS用の動画・写真カメラ
- [iOS-Depth-Sampler](https://github.com/shu223/iOS-Depth-Sampler) - Depth APIのコード例のコレクション
- [LLSimpleCamera](https://github.com/omergul/LLSimpleCamera) - シンプルでカスタマイズ可能なカメラ制御 - iOS用の動画記録アプリ
- [Lumina](https://github.com/dokun1/Lumina) - フルサービスカメラ。写真を撮影、動画を記録、フレームをストリーミングし、メタデータを検出、CoreMLの予測をストリーミング。
- [MijickCamera](https://github.com/Mijick/Camera) - カメラをシンプルに。完全にカスタマイズ可能なカメラライブラリで実装時間を大幅に短縮。SwiftUIで書かれており、SwiftUIに特化。
- [NextLevel](https://github.com/NextLevel/NextLevel) - Next LevelはiOS用のメディアキャプチャカメラライブラリ。
- [RSBarcodes_Swift](https://github.com/yeahdongcn/RSBarcodes_Swift) - iOS 8向けの1Dおよび2Dバーコード読み取りと生成。快適なコントロール。今、Swiftで。
- [SCRecorder](https://github.com/rFlex/SCRecorder) - タップで記録可能なビン風のカメラエンジン、アニメーション可能なフィルター、スローモーション、セグメント編集。
- [SwiftyCam](https://github.com/Awalz/SwiftyCam) - スナップチャットをインスピレーションに受けて作られたiOS用カメラフレームワーク（Swiftで）。
- [YPImagePicker](https://github.com/Yummypets/YPImagePicker) - iOS向けInstagram風画像選択とフィルタ

**[back to top関連](#contributing-and-collaborating)**

### Force Touch関連 <a id="force-touch"></a>

*Quick actions and peek and pop interactions*

- [PeekView](https://github.com/itsmeichigo/PeekView) - PeekViewは、3D Touch機能を持たないiOSデバイスでもpeek、pop、previewアクションをサポート。
- [QuickActions](https://github.com/ricardopereira/QuickActions) - iOSのホーム画面のクイックアクション（アプリアイコンショートカット）用のSwift包装クラス。

**[back to top関連](#contributing-and-collaborating)**

### iBeacon関連 <a id="ibeacon"></a>

*Device detect libraries and iBeacon helpers*

- [BeaconEmitter](https://github.com/lgaches/BeaconEmitter) - MacをiBeaconとして利用可能に。
- [JMCBeaconManager](https://github.com/izotx/JMCBeaconManager) - 周囲のiBeaconを検出するためのiBeaconマネージャークラス。
- [MOCA Proximity](https://www.mocaplatform.com/features) - 有料のプロキシマリティマーケティングプラットフォーム。アプリに素晴らしいプロキシマリティ体験を追加可能。
- [OWUProximityManager](https://github.com/ohayon/OWUProximityManager) - iBeacons + CoreBluetooth.

**[back to top関連](#contributing-and-collaborating)**

### 位置情報 <a id="location"></a>

*Location monitoring, detect motion and geofencing libraries*

- [AsyncLocationKit](https://github.com/AsyncSwift/AsyncLocationKit) - Apple の CoreLocation フレームワークにラッピングされた、Modern Concurrency Swift (async/await) ライブラリ。
- [BBLocationManager](https://github.com/benzamin/BBLocationManager) - iOSで簡単に位置サービスと地理フェンスを実装するための位置マネージャー。
- [LocationManager](https://github.com/intuit/LocationManager) - 現在の位置を取得するためのブロックベースの非同期APIを提供。一度または継続的に。
- [set-simulator-location](https://github.com/lyft/set-simulator-location) - iOSシミュレーターでの位置設定用のCLI。
- [SOMotionDetector](https://github.com/arturdev/SOMotionDetector) - 動きを検知するシンプルなライブラリ。位置更新と加速度に基づく。
- [SwiftLocation](https://github.com/malcommac/SwiftLocation) - Swiftで位置とBeaconの監視。

**[back to top関連](#contributing-and-collaborating)**

### その他のハードウェア <a id="other-hardware"></a>

*Helpers for accelerometers, gyroscopes, haptics and other device sensors.*

- [DarkLightning](https://github.com/jensmeder/DarkLightning) - iOS/tvOSとmacOS間のデータ伝送の最も速い方法。
- [Device](https://github.com/Ekhoo/Device) - Swiftで書かれたデバイスと画面サイズを検出する軽量ツール。
- [Device.swift](https://github.com/schickling/Device.swift) - 使用中のデバイスを検出するための超軽量ライブラリ
- [DeviceKit](https://github.com/devicekit/DeviceKit) - DeviceKitはUIDeviceの値型への置き換え
- [Haptico](https://github.com/iSapozhnik/Haptico) - パターン再生をサポートする、使いやすいハプティックフィードバック生成器
- [Luminous](https://github.com/andrealufino/Luminous) - Luminousは、現在のシステムについて非常に多くの情報（50以上）を提供する大きなフレームワークです
- [MotionKit](https://github.com/MHaroonBaig/MotionKit) - 加速度計、ジャイロスコープ、磁気計からデータを取得するためのコードは2行または数行で済みます。CoreMotionも驚きのほど簡単になりました
- [NFCPassportReader](https://github.com/AndyQ/NFCPassportReader) - NFC対応パスポートを読み取るSwiftライブラリ。BAC、セキュアメッセージング、アクティブおよびパッシブ認証をサポート。iOS 13以上が必要です
- [SDVersion](https://github.com/sebyddd/SDVersion) - デバイスのモデルと画面サイズを検出するための軽量なCocoaライブラリ
- [TapticEngine](https://github.com/WorldDownTown/TapticEngine) - TapticEngineはiOSデバイスの振動を生成します
- [UIDeviceComplete](https://github.com/Nirma/UIDeviceComplete) - UIDeviceの欠落部分を補完する拡張機能
- [WatchShaker](https://github.com/ezefranca/WatchShaker) - WatchShakerは、Swiftで記述されたシェイク動作を取得するwatchOS用のヘルパーです

**[back to top関連](#contributing-and-collaborating)**

## レイアウト <a id="layout"></a>

*Auto Layout, UI frameworks and a gorgeous list of tools to simplify layout constructions*

- [Anchorage](https://github.com/Rightpoint/Anchorage) - iOSレイアウトコードを簡略化するための演算子とユーティリティのコレクション
- [Auto Layout Magic](http://akordadev.github.io/AutoLayoutMagic/) - 1つのシーンを作成し、Auto Layout Magicがその制約を自動で生成します！すべてのデバイスでシーンが美しく表示されます！
- [BrickKit](https://github.com/wayfair/brickkit-ios) - BrickKitを使うことで、複雑でレスポンスの高いレイアウトをシンプルに作成できます。使いやすく、拡張も簡単です。独自の再利用可能なブリックや行動を作成できます
- [Cartography](https://github.com/robb/Cartography) - Swift用の宣言型Auto Layout DSL
- [Cupcake](https://github.com/nerdycat/Cupcake) - iOS用のUIコンポーネントの作成とレイアウトを簡単に行う方法
- [EasyPeasy](https://github.com/nakiostudio/EasyPeasy) - Auto Layoutを簡単に行う
- [Façade](https://github.com/mamaral/Facade) - 残りの私たちのために、プログラムによるビューレイアウト。Auto Layoutの代替です
- [FDTemplateLayoutCell](https://github.com/forkingdog/UITableView-FDTemplateLayoutCell) - UITableViewCellの高さを自動で計算するためのテンプレート自動レイアウトセル
- [FlexLayout](https://github.com/layoutBox/FlexLayout) - FlexLayoutは、高度に最適化された [facebook/yoga](https://github.com/facebook/yoga) のflexbox実装を、簡潔で直感的かつ連鎖可能な構文でラップしています。
- [FLKAutoLayout](https://github.com/floriankugler/FLKAutoLayout) - コード内でレイアウト制約を作成しやすいUIViewカテゴリ
- [Grid](https://github.com/exyte/Grid) - SwiftUIで欠けている最も強力なグリッドコンテナ。
- [Layout](https://github.com/nicklockwood/layout) - iOS用の宣言型UIフレームワーク
- [Layoutless](https://github.com/DeclarativeHub/Layoutless) - Auto Layoutに基づいたミニマリズムの宣言型レイアウトとスタイルフレームワーク
- [ManualLayout](https://github.com/isair/ManualLayout) - iOSおよびtvOSでビューとレイヤーを手動でレイアウトするための使いやすく、柔軟なライブラリ。AsyncDisplayKitをサポートします
- [Masonry](https://github.com/SnapKit/Masonry) - AutoLayoutのNSLayoutConstraintsをシンプルで連鎖的かつ表現力のある構文で活用できます
- [MisterFusion](https://github.com/marty-suzuki/MisterFusion) - Swift用のAuto Layout DSL。非常に明確で簡潔な構文であり、SwiftおよびObjective-Cで使用可能です
- [MondrianLayout](https://github.com/muukii/MondrianLayout) - Auto Layout用のDSLベースのレイアウトビルダー
- [MyLinearLayout](https://github.com/youngsoft/MyLinearLayout) - MyLayoutはObjective-Cで実装された強力なiOS UIフレームワークであり、Android Layout、iOS AutoLayout、SizeClass、HTML CSSのfloatおよびflexbox、Bootstrapの機能を統合しています。
- [Neon](https://github.com/mamaral/Neon) - 強力なSwiftによるプログラム化UIレイアウトフレームワーク。
- [PinLayout](https://github.com/layoutBox/PinLayout) - Auto Layoutなしで高速なSwift Viewsレイアウト。魔法はなく、純粋なコード、完全な制御、極めて高速。簡潔な構文、直感的、読みやすく、連鎖可能。
- [PureLayout](https://github.com/PureLayout/PureLayout) - iOSおよびmacOSのAuto Layoutの究極のAPI — 驚くほどシンプルで、非常に強力。Objective-CおよびSwiftに対応。
- [QuickLayout](https://github.com/huri000/QuickLayout) - QuickLayoutは、コード内でAuto Layoutを簡単に管理するためのシンプルな方法を提供します。
- [Relayout](https://github.com/stevestreza/Relayout) - SwiftによるAuto Layout制約を機能的に宣言するマイクロフレームワーク。
- [SnapKit](https://github.com/SnapKit/SnapKit) - iOSおよびmacOS向けのSwiftのAuto Layout DSL。
- [Stevia](https://github.com/freshOS/Stevia) - iOS向けの洗練されたビューのレイアウト。
- [SwiftAutoLayout](https://github.com/indragiek/SwiftAutoLayout) - Auto Layout用の小さなSwift DSL。
- [SwiftBond](https://github.com/DeclarativeHub/Bond) - BondはSwiftのバインディングフレームワークで、バインディングの概念をまったく新しいレベルまで引き上げます。シンプルで、強力で、型安全かつマルチパラダイム。
- [SwiftBox](https://github.com/joshaber/SwiftBox) - Facebookのcss-layoutを使用したSwiftでのFlexbox実装。
- [Swiftstraints](https://github.com/Skyvive/Swiftstraints) - SwiftでAuto Layoutを簡単に実現。
- [TinyConstraints](https://github.com/roberthein/TinyConstraints) - 人間が使うAuto Layoutをより魅力的にするための構文糖。
- [Yalta](https://github.com/kean/Align) - 直感的で強力なAuto Layoutライブラリ。
- [YogaKit](https://github.com/facebook/yoga/tree/master/YogaKit) - 強力なレイアウトエンジンでFlexboxを実装。

**[back to top関連](#contributing-and-collaborating)**

## ローカライズ <a id="localization"></a>

*Tools to manage strings files, translate and enable localization in your apps.*

- [attranslate](https://github.com/fkirc/attranslate) - 異なる言語の.stringsファイルやクロスプラットフォームファイルを半自動的に翻訳または同期。
- [BartyCrouch](https://github.com/Flinesoft/BartyCrouch) - コードとStoryboards/XIBからStringsファイルを徐々に更新／変換
- [CrowdinSDK](https://github.com/crowdin/mobile-sdk-ios) - Crowdin iOS SDKは、Crowdinプロジェクトからのすべての新しい翻訳をアプリに即座に提供します。
- [Hodor](https://github.com/Aufree/Hodor) - iOSアプリのローカライズを簡単に行うソリューション。
- [IBLocalizable](https://github.com/PiXeL16/IBLocalizable) - Interface Builderでビューを直接ローカライズするIBLocalizable
- [L10n-swift](https://github.com/Decybel07/L10n-swift) - アプリケーションのローカライズが可能で、言語を即時変更できる機能と、すべての言語で複数形をサポートしています。
- [LocalizationKit](https://github.com/willpowell8/LocalizationKit_iOS) - ウェブポータルからリアルタイムでローカライズ管理を行うツール。再デプロイや再提出なしでテキストと翻訳を簡単に管理できます。
- [Localize](https://github.com/andresilvagomez/Localize) - JSONまたはStringsを使用してアプリをローカライズするための簡単なツール、もちろんUIコンポーネントへの拡張機能付きのIBDesignablesもサポート。
- [Localize-Swift](https://github.com/marmelroy/Localize-Swift) - Swift 2.0対応のローカライズおよびi18n、アプリ内での言語切り替えをサポート。
- [locheck](https://github.com/Asana/locheck) - .strings、.stringsdict および strings.xml ファイルの正しさを検証し、クラッシュや誤った翻訳を回避します。
- [Respresso Localization Converter](https://respresso.io/localization-converter) - iOS（.strings + Objective-C ゲッター）、Android（strings.xml）およびWeb（.json）向けのマルチプラットフォームローカリゼーション変換ツール。
- [Rubustrings](https://github.com/dcordero/Rubustrings) - Localizable.strings ファイルのフォーマットおよび一貫性を確認します。
- [StringSwitch](https://stringswitch.com) - iOS の .strings ファイルを Android の strings.xml 形式に簡単に変換し、逆も同様にできます。
- [Swifternalization](https://github.com/tomkowz/Swifternalization) - JSON ファイルを使用してiOSアプリをスマートにローカライズします。Swiftフレームワーク。

**[back to top関連](#contributing-and-collaborating)**

## ロギング <a id="logging"></a>

*Debugging lives here. Logging tools, frameworks, integrations and more.*

- [Atlantis](https://github.com/DrewKiino/Atlantis) - 読み込みに依存しない、読みやすさを最大限に確保したSwiftログフレームワーク。開発を加速します。
- [CleanroomLogger](https://github.com/emaloney/CleanroomLogger) - シンプルで軽量かつパフォーマンスの高い、カスタマイズ可能かつ拡張可能なSwiftベースのログAPI。
- [CocoaLumberjack](https://github.com/CocoaLumberjack/CocoaLumberjack) - MacおよびiOS向けの高速かつシンプル、しかし強力で柔軟なログフレームワーク。
- [Diagnostics](https://github.com/WeTransfer/Diagnostics) - ユーザーがサポートチームに簡単に診断情報を共有できるようにし、バグ修正の流れを改善します。
- [Gedatsu](https://github.com/bannzai/gedatsu) - AutoLayoutのエラーを可読性の高いフォーマットでコンソールログに表示します。
- [Log](https://github.com/delba/Log) - テーマ、フォーマッターを内蔵し、独自の設定を定義できる、使いやすいログツール。
- [LogDog](https://log.dog) - LogDogはiOSおよびAndroid向けのリモートデバッグ／ログ収集SDKであり、WebUIを備えています。リアルタイムでログとリクエストをキャプチャし、それらを中断できるようにします。
- [LxDBAnything](https://github.com/DeveloperLx/LxDBAnything) - すべての値を自動化！フォーマット制御記号なしでログを出力！デバッグ習慣を根本から変える！
- [NSLogger](https://github.com/fpillet/NSLogger) - macOS、iOSおよびAndroid上で実行中のクライアントアプリから発生するトレースを高パフォーマンスで表示するログユーティリティ。
- [Pulse](https://github.com/kean/Pulse) - PulseはAppleプラットフォーム向けの強力なログシステム。ネイティブ。SwiftUIで構築。
- [QorumLogs](https://github.com/goktugyil/QorumLogs) — XcodeおよびGoogle Docs用のSwiftログユーティリティ
- [Rainbow](https://github.com/onevcat/Rainbow) - Swift開発者のための魅力的なコンソール出力。
- [SwiftTrace](https://github.com/johnno1962/SwiftTrace) - SwiftおよびObjective-Cメソッド呼び出しのトレースを記録します。
- [SwiftyBeaver](https://github.com/SwiftyBeaver/SwiftyBeaver) - 開発およびリリース中の便利なログ機能。
- [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) - テキストテーブルを生成する軽量ツール。
- [TinyConsole](https://github.com/Cosmo/TinyConsole) - iOSアプリを使用中に表示するための小さなログコンソール。
- [Twitter Logging Service](https://github.com/twitter/ios-twitter-logging-service) - Twitter Logging ServiceはiOSクライアント向けの強固かつパフォーマンスの高いログフレームワーク。
- [Watchdog](https://github.com/wojteklu/Watchdog) - メインスレッドでの過剰なブロッキングをログ記録するためのクラス。
- [Willow](https://github.com/Nike-Inc/Willow) - WillowはSwiftで書かれた強力で軽量なログライブラリ。
- [XCGLogger](https://github.com/DaveWoodCom/XCGLogger) - Swiftプロジェクトで使用できるデバッグログフレームワーク。NSLogやprintlnのようにコンソール（およびオプションでファイル）にログを出力できるが、日時、関数名、ファイル名、行番号といった追加情報を含む。

**[back to top関連](#contributing-and-collaborating)**

## 機械学習 <a id="machine-learning"></a>

*A collection of ML Models, deep learning and neural networking libraries*

- [AIToolbox](https://github.com/KevinCoble/AIToolbox) - Swiftで書かれたAIモジュールのツールボックス：グラフ／木構造、線形回帰、サポートベクターマシン、ニューラルネットワーク、主成分分析（PCA）、K平均、遺伝アルゴリズム、マルコフ決定過程（MDP）、ガウシアン混合モデル。
- [Bender](https://github.com/xmartlabs/Bender) - 高速なニューラルネットワークを簡単に構築。TensorFlowのモデルを使用。内部でMetalが活用されている。
- [CoreML-Models](https://github.com/likedan/Awesome-CoreML-Models) - 独自のCore MLモデルを収集したコレクション
- [DL4S](https://github.com/palle-k/DL4S) - Swift向けの深層学習：すべてのSwiftが実行可能なデバイスで、逆モード自動微分に基づく加速されたテンソル演算と動的ニューラルネットワーク。
- [iOS-GenAI-Sampler](https://github.com/shu223/iOS-GenAI-Sampler) - iOS向けの生成AIの例を収録したコレクション。
- [off-grid-mobile](https://github.com/alichherawalla/off-grid-mobile) - LLM、視覚モデル、Stable Diffusionを完全にデバイス上で実行。インターネットは不要で、データはスマホから出ない。React Nativeをサポート。iOSおよびAndroid対応。MITライセンス。
- [Swift-AI](https://github.com/Swift-AI/Swift-AI) - Swiftの機械学習ライブラリ。
- [Swift-Brain](https://github.com/vlall/Swift-Brain) - 人工知能／機械学習データ構造とSwiftアルゴリズム。今後のiOS開発に活用。ベイズ定理、ニューラルネットワーク、その他AI関連。
- [SwiftCoreMLTools](https://github.com/JacopoMangiavacchi/SwiftCoreMLTools) - SwiftでCoreMLモデルを作成・エクスポートするためのSwiftライブラリ。
- [Tensorflow-iOS](https://github.com/tensorflow/tensorflow/tree/master/tensorflow/examples/ios) - iOS向けのGoogleが開発した強力なニューラルネットワークライブラリの公式ポート。
- [TensorSwift](https://github.com/qoncept/TensorSwift) - Swiftでテンソルを計算するための軽量ライブラリ。TensorFlowのAPIに類似している。

**[back to top関連](#contributing-and-collaborating)**

## 地図 <a id="maps"></a>

*Map SDKs, geolocation utilities, clustering tools and route renderers.*

- [Cluster](https://github.com/efremidze/Cluster) - 簡単なマップ注釈クラスタリング。
- [ClusterKit](https://github.com/hulab/ClusterKit) - iOS向けの地図クラスタリングフレームワーク。MapKit、Google Maps、Mapboxに対応。
- [FlyoverKit](https://github.com/SvenTiigi/FlyoverKit) - FlyoverKitは、MKMapViewにゼロの労力で素晴らしい36及360°フライオーバー表示を提供し、完全な設定可能性を維持します。
- [GEOSwift](https://github.com/GEOSwift/GEOSwift) - Swift地理エンジン。
- [PXGoogleDirections](https://github.com/poulpix/PXGoogleDirections) - iOS向けのGoogle Directions APIヘルパー。Swiftで書かれた。
- [WhirlyGlobe-Maply](https://github.com/mousebird/WhirlyGlobe) - iOS向けの3D地球と平面地図SDK。このツールキットには、地図や地球の細かい制御に必要な広範なAPIが含まれている。複数のGISデータフォーマットを読み込むことができる。

**[back to top関連](#contributing-and-collaborating)**

## 数学 <a id="math"></a>

*Math frameworks, functions and libraries to custom operations, statistical calculations and more.*

- [BigInt](https://github.com/attaswift/BigInt) - 純Swiftによる任意精度算術。
- [Expression](https://github.com/nicklockwood/Expression) - MacおよびiOS向けの実時間に数式を評価するためのライブラリ。
- [iosMath](https://github.com/kostub/iosMath) - 美しいレンダリングされた数学式を表示するためのライブラド。iOSでLaTeX数学式のフォント設定を可能にする。
- [Matft](https://github.com/jjjkkkjjj/Matft) - MatftはNumpyに類似したSwiftライブラリ。Matftにより、Swiftでn次元配列を簡単に扱える。
- [Metron](https://github.com/toineheuvelmans/Metron) - MetronはCoreGraphicsが提供する2次元幾何学プリミティブを拡張する、包括的な幾何学関数と型のコレクション。
- [SigmaSwiftStatistics](https://github.com/evgenyneu/SigmaSwiftStatistics) - 統計計算に必要な関数のコレクション。
- [Upsurge](https://github.com/alejandro-isaza/Upsurge) - Swift数学
- [VectorMath](https://github.com/nicklockwood/VectorMath) - MacおよびiOS向けのSwiftライブラリ。2Dおよび3Dベクトルとマトリクスの関数を実装しており、ゲームやベクトルベースのグラフィックスに役立つ。

**[back to top関連](#contributing-and-collaborating)**

## メディア <a id="media"></a>

*Libraries for handling audio, images, GIFs, video and other media formats.*

### 音声 <a id="audio"></a>

*Audio playback, recording, effects and sound processing libraries.*

- [AudioBus](https://developer.audiob.us/) - 次世代ライブアプリ間音声ルーティングの追加
- [AudioKit](https://github.com/audiokit/AudioKit) - 音声の合成・処理・分析を行う強力なツールキット
- [AudioPlayer](https://github.com/delannoyk/AudioPlayer) - AudioPlayerはAVPlayerに対する構文および機能の糖衣。ローカルおよびリモートの音声ファイルを再生可能。
- [AudioPlayerSwift]( https://github.com/tbaranes/AudioPlayerSwift) - iOS、macOSおよびtvOSアプリで音声を再生するためのシンプルなクラス。
- [Beethoven](https://github.com/vadymmarkov/Beethoven) - 音楽信号のピッチ検出に用いるSwiftの音声処理ライブラリ。
- [Cephalopod](https://github.com/evgenyneu/Cephalopod) - Swiftで書かれたAVAudioPlayer用の音声フェーダ。
- [Chirp](https://github.com/trifl/Chirp) - Swiftアプリ内で音声を準備・再生・削除する最も簡単な方法！
- [ESTMusicIndicator](https://github.com/Aufree/ESTMusicIndicator) - Swiftで書かれたクールなアニメーション付き音楽インジケータビュー。
- [EZAudio](https://github.com/syedhali/EZAudio) - Core Audioに基づくiOS/macOS用の音声可視化フレームワーク。リアルタイム・低遅延音声処理および可視化を行う人向け。
- [FDSoundActivatedRecorder](https://github.com/fulldecent/FDSoundActivatedRecorder) - ユーザーが話すときに録音を開始する。
- [FDWaveformView](https://github.com/fulldecent/FDWaveformView) - アプリ内で音波を表示するための簡単な方法。アニメーションも含む。
- [FluidAudio](https://github.com/FluidInference/FluidAudio) - Core MLを用いたローカルスピーチ認識、話者分離、音声活動検出、テキスト-to-スピーチのSwiftフレームワーク。
- [InteractivePlayerView](https://github.com/AhmettKeskin/InteractivePlayerView) - カスタムiOS音楽プレイヤービュー。
- [IQAudioRecorderController](https://github.com/hackiftekhar/IQAudioRecorderController) - アプリ内での音声録音に使える、すぐに使える型のユニバーサルライブラリ。UIも美しい。
- [ModernAVPlayer](https://github.com/noreasonprojects/ModernAVPlayer) - ネットワーク接続の不良後に再生を継続できるプレイヤー、ヘッドフォンの相互作用、システム中断、現在再生中の情報、リモートコマンドの管理を可能にする。
- [MusicKit](https://github.com/benzguo/MusicKit) - Swiftで音楽の構成と変換を行うフレームワーク。
- [novocaine](https://github.com/alexbw/novocaine) - iOSおよびmacOSで高パフォーマンスかつ簡単な音声処理。
- [NVDSP](https://github.com/bartolsthoorn/NVDSP) - iOS/macOS向けのDSP（音声処理）（Novocaine付き）。
- [PandoraPlayer](https://github.com/AppliKeySolutions/PandoraPlayer) - AudioKitをベースにしたiOS向け軽量音楽プレイヤー。
- [Porcupine](https://github.com/Picovoice/Porcupine) - macOS、iOS、watchOS向けのオンデバイスウェイクワード検出エンジン。ディープラーニングを活用。
- [QuietModemKit](https://github.com/quiet/QuietModemKit) - iOS向けのクイエットモデム（音声を介したデータ送信）フレームワーク。
- [SubtleVolume](https://github.com/andreamazz/SubtleVolume) - システム音量のポップアップを、より控えめなインジケーターに置き換える。
- [SwiftySound](https://github.com/adamcichy/SwiftySound) - 1行のコードで音を再生できるシンプルなライブラリ（さらに多くの機能も提供）。Swift 3で書かれており、iOS、macOS、tvOSに対応。CocoaPodsおよびCarthageと互換。
- [TheAmazingAudioEngine2](https://github.com/TheAmazingAudioEngine/TheAmazingAudioEngine2) - Amazing Audio Engineは、iOS向けの音声アプリケーションに最適化された高度なフレームワーク。あなたが手動で作業しなくても、完成された構造を提供。
- [Voice Overlay](https://github.com/algolia/voice-overlay-ios) - 音声に関するiOSライブラリ、アプリ、または資料です。
**[back to top関連](#contributing-and-collaborating)**

### GIF関連 <a id="gif"></a>

*Libraries for creating, displaying and sharing animated GIFs.*

- [AImage](https://github.com/wangjwchn/AImage) - Swiftで書かれたiOS向けアニメーションGIF＆APNGエンジン。メモリとCPU使用量が少なく、マルチイメージケースにも最適化。
- [APNGKit](https://github.com/onevcat/APNGKit) - iOSでAPNGフォーマットを高パフォーマンスかつ快適に扱う方法。
- [FLAnimatedImage](https://github.com/Flipboard/FLAnimatedImage) - iOS向けのパフォーマンスの高いアニメーションGIFエンジン。
- [gifu](https://github.com/kaishin/gifu) - SwiftでiOS向けの高パフォーマンスアニメーションGIFサポート。
- [SwiftyGif](https://github.com/kirualex/SwiftyGif) - 高パフォーマンスGIFエンジン
- [YLGIFImage](https://github.com/liyong03/YLGIFImage) - 非同期GIF画像デコーダおよび画像閲覧機能。GIF画像を再生可能で、非常に少ないメモリを使用。
- [YYImage](https://github.com/ibireme/YYImage) - iOS向けの画像フレームワーク。アニメーションWebP、APNG、GIFなどを表示・エンコード・デコード可能。

**[back to top関連](#contributing-and-collaborating)**

### 画像 <a id="image"></a>

*Image loading, caching, editing, filtering and display helpers.*

- [Agrume](https://github.com/JanGorman/Agrume) - Swiftで書かれた、フレッシュなiOS画像閲覧アプリ。
- [AlamofireImage](https://github.com/Alamofire/AlamofireImage) - Alamofire向けの画像コンポーネントライブラリ。
- [APKenBurnsView](https://github.com/Alterplay/APKenBurnsView) - 顔認識を組み込んだケン・バーンズ効果！
- [APKenBurnsView](https://github.com/Alterplay/APKenBurnsView) - 顔認識を組み込んだケン・バーンズ効果！
- [AsyncImageView](https://github.com/nicklockwood/AsyncImageView) - UIImageViewへのシンプルな拡張。非同期で画像を読み込み、表示し、UIがロックされない。
- [ATGMediaBrowser](https://github.com/altayer-digital/ATGMediaBrowser) - 複数の事前定義されたトランジションスタイルを備えた画像スライドショー閲覧機能。新しいトラン及て作成可能。
- [ATGMediaBrowser](https://github.com/altayer-digital/ATGMediaBrowser) - 複数の事前定義されたトランジションスタイルを備えた画像スライドショー閲覧機能。新しいトラン及て作成可能。
- [AXPhotoViewer](https://github.com/alexhillc/AXPhotoViewer) - iPhone/iPad用のフォトギャラリー閲覽機能。大量（または少量）の写真を閲覧する際に便利。
- [AXPhotoViewer](https://github.com/alexhillc/AXPhotoViewer) - iPhone/iPad用のフォトギャラリー閲覽機能。大量（または少量）の写真を閲覧する際に便利。
- [ComplimentaryGradientView](https://github.com/gkye/ComplimentaryGradientView) - 主な色と目立つ色から生成された補完的なグラデーションを作成。Grade.jsをインスピレーションに。
- [ComplimentaryGradientView](https://github.com/gkye/ComplimentaryGradientView) - 主な色と目立つ色から生成された補完的なグラデーションを作成。Grade.jsをインスピレーションに。
- [Concorde](https://github.com/contentful-labs/Concorde/) - プログレッシブJPEGをダウンロードし、デコードする。
- [CTPanoramaView](https://github.com/scihant/CTPanoramaView) - タッチまたは動きに基づいた制御を用いて、球面または円柱状のパノラマや360度写真を表示。
- [CTPanoramaView](https://github.com/scihant/CTPanoramaView) - タッチまたは動きに基づいた制御を用いて、球面または円柱状のパノラマや360度写真を表示。
- [DTPhotoViewerController](https://github.com/tungvoduc/DTPhotoViewerController) - 完全にカスタマイズ可能な写真閲覧ViewController。Facebookの写真閲覧画面をインスピレーションに。
- [DTPhotoViewerController](https://github.com/tungvoduc/DTPhotoViewerController) - 完全にカスタマイズ可能な写真閲覧ViewController。Facebookの写真閲覧画面をインスピレーションに。
- [EBPhotoPages](https://github.com/EddyBorja/EBPhotoPages) - iOS向けの現代的な機能を備えた写真ギャラリー。Facebookの写真ブラウザに類似した機能を備えている。
- [FastImageCache](https://github.com/path/FastImageCache) - スクロール中に画像を迅速に表示するためのiOSライブラリ。
- [FlagKit](https://github.com/madebybowtie/FlagKit) - アプリやウェブサイトで使用できる美しいフラッグアイコン
- [FlexibleImage](https://github.com/kawoou/FlexibleImage) - 画像を操作するシンプルな方法！
- [FlexibleImage](https://github.com/kawoou/FlexibleImage) - 画像を操作するシンプルな方法！
- [Gallery](https://github.com/hyperoslo/Gallery) - あなたの次の愛用の画像と動画選択ツール。
- [Gallery](https://github.com/hyperoslo/Gallery) - あなたの次の愛用の画像と動画選択ツール。
- [GPU Image](https://github.com/BradLarson/GPUImage) - GPUベースの画像および動画処理を実現するオープンソースiOSフレームワーク。
- [GPUImage2](https://github.com/BradLarson/GPUImage2) - GPUImage 2は、BSDライセンスに基づくSwiftフレームワークで、GPU加速された動画および画像処理を実現。
- [GPUImage2](https://github.com/BradLarson/GPUImage2) - GPUImage 2は、BSDライセンスに基づくSwiftフレームワークで、GPU加速された動画および画像処理を実現。
- [GPUImage3](https://github.com/BradLarson/GPUImage3) - GPUImage 3は、BSDライセンスに基づくSwiftフレームワークで、Metalを使用したGPU加速された動画および画像処理を実現。
- [GPUImage3](https://github.com/BradLarson/GPUImage3) - GPUImage 3は、BSDライセンスに基づくSwiftフレームワークで、Metalを使用したGPU加速された動画および画像処理を実現。
- [greedo-layout-for-ios](https://github.com/500px/greedo-layout-for-ios) - iOS向けの完全なアスペクト比グリッドレイアウト。
- [greedo-layout-for-ios](https://github.com/500px/greedo-layout-for-ios) - iOS向けの完全なアスペクト比グリッドレイアウト。
- [Harbeth](https://github.com/yangKJ/Harbeth) - Metal APIでGPU加速されたグラフィックス、動画、カメラフィルターを扱うフレームワーク。🔥💥
- [Harbeth](https://github.com/yangKJ/Harbeth) - Metal APIでGPU加速されたグラフィックス、動画、カメラフィルターを扱うフレームワーク。🔥💥
- [IDMPhotoBrowser](https://github.com/thiagoperes/IDMPhotoBrowser) - 写真ブラウザ／閲覧機能
- [ImageButter](https://github.com/dollarshaveclub/ImageButter) - 画像の扱いをスムーズにします
- [ImageButter](https://github.com/dollarshaveclub/ImageButter) - 画像の扱いをスムーズにします
- [ImageDetect](https://github.com/Feghal/ImageDetect) - iOS 11 Vision APIで、画像内の顔、バーコード、テキストを検出・切り取り
- [ImageDetect](https://github.com/Feghal/ImageDetect) - iOS 11 Vision APIで、画像内の顔、バーコード、テキストを検出・切り取り
- [ImageLoaderSwift](https://github.com/hirohisa/ImageLoaderSwift) - Swiftで書かれたiOS用軽量かつ高速な画像ローダー
- [ImagePickerSheetController](https://github.com/lbrndnr/ImagePickerSheetController) - ImagePickerSheetControllerはiMessageのカスタム写真アクションシートに似ており、ただのバグがありません
- [ImagePickerSheetController](https://github.com/lbrndnr/ImagePickerSheetController) - ImagePickerSheetControllerはiMessageのカスタム写真アクションシートに似ており、ただのバグがありません
- [ImageScout](https://github.com/kaishin/ImageScout) - Swiftによるfastimageの実装。PNG、GIF、JPEGをサポート
- [ImageSlideshow](https://github.com/zvonicek/ImageSlideshow) - Swiftによる画像スライドショー。円形スクロール、タイマー、フルスクリーン閲覧機能付き
- [ImageSlideshow](https://github.com/zvonicek/ImageSlideshow) - Swiftによる画像スライドショー。円形スクロール、タイマー、フルスクリーン閲覧機能付き
- [ImageViewer](https://github.com/Krisiacik/ImageViewer) - Twitter風の画像閲覧機能
- [ImageViewer](https://github.com/Krisiacik/ImageViewer) - Twitter風の画像閲覧機能
- [Imaginary](https://github.com/hyperoslo/Imaginary) - リモート画像も、1、2、及3で簡単
- [Imaginary](https://github.com/hyperoslo/Imaginary) - リモート画像も、1、2、及3で簡単
- [InitialsImageView](https://github.com/bachonk/InitialsImageView) - UIImageViewの拡張機能で、ユーザープロフィール画像のプレースホルダーとして文字の初期文字を生成し、ランダムな背景色を設定
- [InitialsImageView](https://github.com/bachonk/InitialsImageView) - UIImageViewの拡張機能で、ユーザープロフィール画像のプレースホルダーとして文字の初期文字を生成し、ランダムな背景色を設定
- [JMCMarchingAnts](https://github.com/izotx/JMCMarchingAnts) - 画像の周囲にマーチングアンツ（アニメーション）選択を追加できるライブラリ
- [LetterAvatarKit](https://github.com/vpeschenkov/LetterAvatarKit) - UIImageの拡張機能で、Swiftで文字ベースのアバターを生成
- [Lightbox](https://github.com/hyperoslo/Lightbox) - iOSアプリ向けに便利で使いやすい画像閲覧機能
- [MCScratchImageView](https://github.com/Minecodecraft/MCScratchImageView) - 他のビューの表面をカバーするカスタムImageView。スワイプで表面の下のビューを表示できます
- [MetalPetal](https://github.com/MetalPetal/MetalPetal) - GPUによる加速された画像／動画処理フレームワーク。[Metal](https://developer.apple.com/metal/) をベースに構築。
- [Moa](https://github.com/evgenyneu/moa) - iOS、tvOS、macOS向けのImageViewの画像ダウンロード拡張機能
- [OnlyPictures](https://github.com/KiranJasvanee/OnlyPictures) - 重なり合う円形画像のソースを追加するシンプルで柔軟な方法
- [Paparazzo](https://github.com/avito-tech/Paparazzo) - 編集機能付きのカスタムiOSカメラと写真選択
- [PhotoEditorSDK](https://photoeditorsdk.com/) - あなたのアプリ用に完全にカスタマイズ可能な写真編集ツール
- [Pixel](https://github.com/muukii/Pixel) - CoreImageを用いた画像編集ツールとエンジン
- [SFSafeSymbols](https://github.com/piknotech/SFSafeSymbols) - 静的型付けでAppleのSFシンボルを安全にアクセス
- [ShadowImageView](https://github.com/olddonkey/ShadowImageView) - ShadowImageViewはiOS 10のApple Musicスタイルの画像ビューであり、影を用いた洗練された画像を作成をサポート
- [Sharaku](https://github.com/makomori/Sharaku) - インスタグラム風の画像フィルターViewController
- [ShinpuruImage](https://github.com/FlexMonkey/ShinpuruImage) - Accelerate/vImageおよびCore Imageフィルターに対するシンタクティックシュガー
- [SimpleImageViewer](https://github.com/aFrogleap/SimpleImageViewer) - ズームとインタラクティブな閉じるトランジションを備えたスムーズな画像閲覧ツール
- [SKPhotoBrowser](https://github.com/suzuki-0000/SKPhotoBrowser) - FacebookやTwitterの写真閲覧画面をインスピレーションを得たシンプルな写真ブラウザ/閲覧ツール（Swiftで作成）
- [StyleArt](https://github.com/ileafsolutions/StyleArt) - Style ArtライブラリはCOREMLを用いて事前に訓練された機械学習モデルを用いて画像を処理し、アートスタイルに変換
- [SwiftyAvatar](https://github.com/dkalaitzidis/SwiftyAvatar) - 円形のアバター画像を作成するためのUiimageViewクラス、ストーリボード上ですべての変更を可能にするIBDesignable
- [TGLParallaxCarousel](https://github.com/taglia3/TGLParallaxCarousel) - 軽量な3D線形カーソルでパラレル効果を実現
- [TinyCrayon](https://github.com/TinyCrayon/TinyCrayon-iOS-SDK) - モバイルアプリ向けにスマートで使いやすい画像マスクおよびカットアウトSDK
- [TLPhotoPicker](https://github.com/tilltue/TLPhotoPicker) - iOS向けの複数のphassetsピッカー（Facebook風）
- [Twitter Image Pipline](https://github.com/twitter/ios-twitter-image-pipeline) - アプリ内で画像を取得・保存するための簡易フレームワーク
- [YUCIHighPassSkinSmoothing](https://github.com/YuAo/YUCIHighPassSkinSmoothing) - AppleのCore Imageフレームワークを用いたハイパス皮膚平滑化の実装
- [ZImageCropper](https://github.com/ZaidPathan/ZImageCropper) - Swiftで任意の形状で画像を切り抜くプロジェクト

**[back to top関連](#contributing-and-collaborating)**

### メディア処理 <a id="media-processing"></a>

*Media conversion, transcoding and processing utilities.*

- [EFQRCode](https://github.com/EFPrefix/EFQRCode) - Swiftで2次元コードを操作するより良い方法
- [NSFWDetector](https://github.com/lovoo/NSFWDetector) - CoreMLを用いたNSFW（ポルノ）検出器
- [QR Code Scanner](https://www.appcoda.com/qr-code-ios-programming-tutorial/) - QRコードの実装
- [QRCode](https://github.com/aschuch/QRCode) - Swiftで書かれたQRコード生成ツール
- [SwiftOCR](https://github.com/garnele007/SwiftOCR) - Swiftで書かれた高速かつシンプルなOCRライブラリ

**[back to top関連](#contributing-and-collaborating)**

### PDF関連 <a id="pdf"></a>

*Libraries for creating, rendering and manipulating PDF documents on iOS.*

- [FastPdfKit](https://github.com/mobfarm/FastPdfKit) - iOSアプリに埋め込むための静的ライブラリ（Fast PDFから派生したPDFドキュメントの表示）
- [PDFGenerator](https://github.com/sgr-ksmt/PDFGenerator) - SwiftでPDFを生成するシンプルなジェネレーター。ビューまたは画像からPDFを生成。
- [PSPDFKit](https://pspdfkit.com/) - PDFをレンダリングし、注釈を追加・編集、フォームを埋め、ページを追加・編集、デジタル署名を表示・作成。
- [SimplePDF](https://github.com/nRewik/SimplePDF) - 簡単にPDFを作成
- [TPPDF](https://github.com/Techprimate/TPPDF) - コマンドと自動レイアウトを使ってPDFを生成。

**[back to top関連](#contributing-and-collaborating)**

### ストリーミング <a id="streaming"></a>

*Live and on-demand media streaming frameworks for iOS apps.*

- [Airstream](https://github.com/qasim/Airstream) - Appleデバイス間のオーディオストリーミングにAirPlayを使用するためのフレームワーク。
- [HaishinKit.swift](https://github.com/shogo4405/HaishinKit.swift) - iOS、macOS向けのカメラとマイクストリーミングライブラリ（RTMP、HLS）。
- [LFLiveKit](https://github.com/LaiFengiOS/LFLiveKit) - H264とAACのハードコーディング、GPUImageのビューティー機能、rtmp送信、弱ネットワーク時のフレームロス対応、レートの動的切り替え。
- [StreamingKit](https://github.com/tumtumtum/StreamingKit) - macOSおよびiOS向けの高速かつ拡張可能なギャップレスオーディオプレイヤー／オーディオストリーミング。

**[back to top関連](#contributing-and-collaborating)**

### 動画 <a id="video"></a>

*Video players, editors and utilities for iOS video workflows.*

- [AVAnimator](http://www.modejong.com/AVAnimator/) - iOSネイティブのオープンソースライブラリで、複雑な動画・オーディオ機能を持つアプリの実装を容易に。
- [AVPlayerViewController-Subtitles](https://github.com/mhergon/AVPlayerViewController-Subtitles) - AVPlayerViewController-SubtitlesはiOSで字幕を表示するためのライブラリ。Swift拡張として構成されており、統合が非常に簡単。
- [BMPlayer](https://github.com/BrikerMan/BMPlayer) - Swift3およびSwift2でiOS用に構築された動画プレイヤー。AVPlayerをベースにし、横画面・縦画面に対応。音量、明るさの調整およびシークをスライドで行える。
- [ios-360-videos](https://github.com/NYTimes/ios-360-videos) - NYT360VideoはAVPlayerからストリーミングされた36及度動画を再生する。
- [MHVideoPhotoGallery](https://github.com/mariohahn/MHVideoPhotoGallery) - 写真と動画のギャラリー。
- [MobilePlayer](https://github.com/mobileplayer/mobileplayer-ios) - iOS向けの強力で完全にカスタマイズ可能なメディアプレイヤー
- [MPMoviePlayerController-Subtitles](https://github.com/mhergon/MPMoviePlayerController-Subtitles) - MPMoviePlayerController-SubtitlesはiOSで字幕を表示するためのライブラリ。Swift拡張として構成されており、統合が非常に簡単。
- [Periscope VideoViewController](https://github.com/gontovnik/Periscope-VideoViewController) - Periscope風の高速リワード制御を備えた動画プレイヤー制御ビュー。
- [Player](https://github.com/piemonte/Player) - Swiftで構築された動画プレイヤー。iOSまたはtvOSアプリ内でメディアを再生・ストリーミングするためのシンプルな方法。
- [PlayerView](https://github.com/davidlondono/PlayerView) - Player ViewはSwiftのAVPlayerを用いたデリゲートビュー。
- [PryntTrimmerView](https://github.com/HHK1/PryntTrimmerView) - 動画内のフレームをトリム、カット、選択するためのUI要素セット。
- [swift-360-videos](https://github.com/gsabran/DDDKit) - 純粋なSwift（SceneKitなし）で構成された3Dライブラリ。動画および360度視野に焦点を当てる。
- [Swift-YouTube-Player](https://github.com/gilesvangruisen/Swift-YouTube-Player) - iOSアプリ内でYouTube動画を埋め込み・制御するためのSwiftライブラリ！
- [VersaPlayer](https://github.com/josejuanqm/VersaPlayer) - iOS、macOS、tvOS向けの柔軟なAVPlayer実装。
- [VLC for iOS](https://github.com/videolan/vlc-ios) - VLCはiOS向けの無料かつオープンソースのマルチメディアプレイヤーです
- [XCDYouTubeKit](https://github.com/0xced/XCDYouTubeKit) - iOS、tvOS、macOS向けのYouTube動画プレイヤー。
- [YoutubeKit](https://github.com/rinov/YoutubeKit) - YouTube IFrame APIおよびYouTube Data APIを完全にサポートしており、YouTubeアプリの簡単な開発を可能にするビデオプレイヤーです
- [ZFPlayer](https://github.com/renzifeng/ZFPlayer) - AVPlayerに基づき、横画面、縦画面（フルスクリーン再生も画面方向をロック可能）、音量や画面明るさの調整をスライド操作で行えるようにしています

**[back to top関連](#contributing-and-collaborating)**

## メッセージング <a id="messaging"></a>

*Chat UIs, real-time messaging SDKs and in-app messaging tools.*

Also see [push notifications関連](#push-notifications)

- [AsyncMessagesViewController](https://github.com/nguyenhuy/AsyncMessagesViewController) - iOS向けのスムーズで反応性があり、柔軟なメッセージUIライブラリです
- [chat-sdk-ios](https://github.com/chat-sdk/chat-sdk-ios) - チャットSDK iOS - 開発者向けモバイルチャットサービスです
- [ChatLayout](https://github.com/ekazaev/ChatLayout) - カスタム `UICollectionViewLayout` を使用して、プレゼンテーションのコントロールおよび `UICollectionView` に含まれるすべてのツールを提供する、軽量なチャットUI構築フレームワーク。
- [Chatto](https://github.com/badoo/Chatto) - Swiftで構築された軽量なチャットアプリ開発フレームワークです
- [ExyteChat](https://github.com/exyte/Chat) - SwiftUIによるチャットUIフレームワークで、メッセージセル、入力ビュー、内蔵メディアピッカーを完全にカスタマイズ可能
- [MessageKit](https://github.com/MessageKit/MessageKit) - 最終的にJSQMessagesViewControllerのSwift版にリライトされたものです
- [MessageViewController](https://github.com/GitHawkApp/MessageViewController) - iPhone X向けにSwiftで書かれたSlackTextViewControllerの代替実装です
- [Messenger Chat with Firebase](https://github.com/instamobile/messenger-iOS-chat-swift-firestore) - Firebase Firestoreを統合したSwiftによるチャットアプリです
- [XMPPFramework](https://github.com/robbiehanson/XMPPFramework) - MacおよびiOS向けのXMPPフレームワークです

**[back to top関連](#contributing-and-collaborating)**

## ネットワーク <a id="networking"></a>

*HTTP clients, socket libraries, reachability helpers and networking utilities.*

- [AFNetworking+RetryPolicy](https://github.com/kubatruhlar/AFNetworking-RetryPolicy) - AFNetworkingで送信されたリクエストにリトライロジックを設定できるObjective-Cのカテゴリです
- [AFNetworking-Synchronous](https://github.com/paulmelnikow/AFNetworking-Synchronous) - AFNetworking 1.x、2.x、3.x向けの同期リクエストです
- [Alamofire](https://github.com/Alamofire/Alamofire) - Alamofireは、AFNetworkingの開発者によるSwiftで書かれたHTTPネットワークライブラリです
- [APIKit](https://github.com/ishkawa/APIKit) - SwiftでタイプセーフなWeb APIクライアントを構築するためのネットワークライブラリです
- [ASIHTTPRequest](https://github.com/pokeb/asi-http-request) - HTTPリクエスト向けの簡単なCFNetworkラッパー（Objective-C、macOS、iPhone対応）です
- [Bamboots](https://github.com/mmoaay/Bamboots) - BambootsはAlamofireに基づくネットワークリクエストフレームワークで、ビジネス開発におけるネットワークリクエストの簡易化を目指しています
- [CocoaAsyncSocket](https://github.com/robbiehanson/CocoaAsyncSocket) - MacおよびiOS向けの非同期ソケットネットワークライブラリです
- [EFInternetIndicator](https://github.com/ezefranca/EFInternetIndicator) - ReachabilitySwiftを使用した、小さなSwiftによるインターネットエラー状態インジケーターです
- [EVCloudKitDao](https://github.com/evermeer/EVCloudKitDao) - AppleのCloudKitへの簡単なアクセスです
- [EVURLCache](https://github.com/evermeer/EVURLCache) - NSURLRequest を使用するすべてのウェブリクエストを処理する NSURLCache のサブクラス
- [FGRoute](https://github.com/Feghal/FGRoute) - 開発者が Wi-Fi の ssid、ルーター、デバイスの IP アドレスを取得しやすいライブラリ
- [FSNetworking](https://github.com/foursquare/FSNetworking) - Foursquare の iOS ネットワークライブラリ
- [Get](https://github.com/kean/Get) - async/await を使用して構築された現代的な Swift ネットワーク API クライアント
- [HappyDns](https://github.com/qiniu/happy-dns-objc) - DNS ライブラリ。カスタム DNS サーバー、DNSPod HTTPDNS をサポート。A レコードのみ対応。
- [MMLanScan](https://github.com/mavris/MMLanScan) - iOS の LAN ネットワークスキャナーライブラリ
- [MonkeyKing](https://github.com/nixzhu/MonkeyKing) - MonkeyKing は中国のソーシャルネットワークにメッセージを投稿するためのツール
- [Moya](https://github.com/Moya/Moya) - Swift で書かれたネットワーク抽象化レイヤー
- [Netdiag](https://github.com/qiniu/iOS-netdiag) - Ping/TcpPing/Rtmp/TraceRoute/DNS/外部IP/外部DNS をサポートするネットワーク診断ライブラリ
- [Networking](https://github.com/3lvis/Networking) - Swift でのシンプルな HTTP ネットワーク。画像キャッシュをサポートする NSURLSession のラッパー
- [Overcoat](https://github.com/Overcoat/Overcoat) - 小さなが強力なライブラリで、REST クライアントの作成を簡単で楽しいものに。
- [Pitaya](https://github.com/johnlui/Pitaya) - Swift で書かれた HTTP / HTTPS ネットワークライブラリ。機械上で偶然実行される。
- [Reachability.swift](https://github.com/ashleymills/Reachability.swift) - Apple の Reachability を Swift で再実装したクロージャーを用いたリプレース
- [Reactor](https://github.com/RuiAAPeres/Reactor) - RAC アーキテクチャを強化する
- [RealReachability](https://github.com/dustturtle/RealReachability) - ネットワークの本当の接続状態を観察する必要がある。それが RealReachability がするもの。
- [ResponseDetective](https://github.com/netguru/ResponseDetective) - ネットワークレイヤーの Sherlock Holmes。
- [RestKit](https://github.com/RestKit/RestKit) - RestKit は iOS 用の Objective-C フレームワークで、REST フレームワークとの相互作用を簡単・速く・楽しいものにすることを目的としている。
- [Siesta](https://github.com/bustoutsolutions/siesta) - コールバックやデリゲートベースのネットワークに代わる、REST リソースに対する洗練された抽象化。
- [SOAPEngine](https://github.com/priore/SOAPEngine) - この汎用的な SOAP クライアントは、iOS アプリ、macOS アプリ、AppleTV アプリからウェブサービスにアクセスできるようにする。
- [SolarNetwork](https://github.com/ThreeGayHub/SolarNetwork) - Swift での洗練されたネットワーク抽象化レイヤー
- [SwiftHTTP](https://github.com/daltoniam/SwiftHTTP) - SwiftでNSURLSessionをラップした薄いラッパー。HTTPリクエストを簡略化する。
- [Swish](https://github.com/thoughtbot/Swish) - ネットワーキングだけ。
- [TermiNetwork](https://github.com/billp/TermiNetwork) - Swift 4.0で書かれたネットワークライブラリ。マルチ環境設定、ルーティング、自動デシリアライズをサポート。
- [Tiercel](https://github.com/Danie1s/Tiercel) - バックグラウンドダウンロード、再起動回復、中断再生、タスク管理を備えた純Swift iOSダウンロードフレームワーク。
- [Transporter](https://github.com/nghialv/Transporter) - アップロードとダウンロードを簡単にする小さなライブラリ。
- [TRON](https://github.com/MLSDev/TRON) - アローマーの上に構築された軽量ネットワーク抽象化層。
- [TWRDownloadManager](https://github.com/chasseurmic/TWRDownloadManager) - NSURLSessionをベースにした現代的なダウンロードマネージャー。複数ファイルの非同期ダウンロード、管理、永続化に対応。
- [ws ☁️](https://github.com/freshOS/ws) - SwiftでエレガントなJSON Webサービス。
- [XMNetworking](https://github.com/kangzubin/XMNetworking) - AFNetworkingをベースにした、簡潔で表現力の高い、軽量かつ強力なネットワークライブラリ。
- [YTKNetwork](https://github.com/yuantiku/YTKNetwork) - YTKNetworkはAFNetworkingをベースにした、高レベルのリクエストユーティリティ。

**[back to top関連](#contributing-and-collaborating)**

## ニュースレター <a id="newsletters"></a>

*Curated newsletters to keep up with the latest iOS and Swift news.*

- [AwesomeiOS Weekly](http://weekly.awesomeios.com) - AwesomeiOS Weekly。
- [Indie iOS Focus Weekly](http://indieiosfocus.com/) - 通常のニュースを超えて、最も優れたiOS開発リンク、チュートリアル、ヒントを求める？クリス・ベショールがキュレーション。毎週木曜日発行。
- [Indie Watch](https://indie.watch/) - インディーデベロッパーが作成した最高のiOSアプリを紹介する週刊ニュース。
- [iOS Cookies Newsletter](https://us11.campaign-archive.com/home/?u=cd1f3ed33c6527331d82107ba&id=532dc7fb64) - Swiftで書かれた新しいiOSライブラリを週刊にまとめる。
- [iOS Dev Tools Weekly](https://iosdev.tools) - 最も優れたiOS開発ツールを紹介。ウェブサイト、デスクトップアプリ、モバイルアプリ、バックエンドサービスを含む。
- [iOS Dev Weekly](https://iosdevweekly.com/) - 毎週、厳選された最高のiOS開発リンクをまとめたニュースレターを無料で受け取る。
- [iOS Goodies](https://ios-goodies.com) - 週刊iOSニュースレター。
- [iOS Trivia Weekly](https://wanderbit.us4.list-manage.com/subscribe?u=4e20cd8ea3a0ce09ff4619a52&id=5898a5992b) - 毎水曜日にiOS開発に関する3つの難問を提示。
- [Mobile Developers Cafe](https://mobiledeveloperscafe.com) - モバイル開発者向けの週刊ニュースレター。iOSコンテンツが豊富。
- [raywenderlich.com Weekly](https://www.raywenderlich.com/newsletter) - raywenderlich.comの最新チュート類を毎週受け取るサインアップ。
- [Server-Side Swift Weekly](https://www.serverswift.tech) - サーバーサイドSwiftおよびクロスプラットフォーム開発ツールに関連する最新リンクを紹介する週刊ニュースレター。[@maxdesiatov](https://twitter.com/maxdesiatov) がキュレーション。
- [Swift Developments](https://andybargh.com/swiftdevelopments/) - SwiftでiOS、WatchOS、AppleTVアプリを開発する人々に向けた、最新のリンク、動画、ツール、チュートリアルを厳選した週刊ニュースレター。
- [Swift Weekly Brief](https://swiftweekly.github.io/) - Swift.orgに関するコミュニティが運営する週刊ニュースレター。ジェシー・スクリューがキュレーションし、毎木曜日に無料で公開されている。
- [SwiftLee](https://www.avanderlee.com/) - Swift、iOSおよびXcodeに関する週刊ブログ。TipsとTricksを紹介。

**[back to top関連](#contributing-and-collaborating)**

## 通知 <a id="notifications"></a>

*Local notifications, push services and notification UI tools.*

### プッシュ通知 <a id="push-notifications"></a>

*Libraries and helpers for handling push notifications on iOS.*

- [Knuff](https://github.com/KnuffApp/Knuff) - Apple Push Notification Service（APNS）用のデバッグアプリ。
- [NWPusher](https://github.com/noodlewerk/NWPusher) - macOSおよびiOS用のアプリケーションとフレームワーク。Apple Push Notification service（APNs）との対話を行うためのもの。
- [PEM](https://github.com/fastlane/fastlane/tree/master/pem) - プッシュ通知プロファイルを自動生成・再新するツール。
- [SimulatorRemoteNotifications](https://github.com/acoomans/SimulatorRemoteNotifications) - iOSシミュレーターに仮のリモート通知を送るためのライブラリ。

**[back to top関連](#contributing-and-collaborating)**

### プッシュ通知プロバイダー <a id="push-notification-providers"></a>

*Third-party services for sending push notifications to iOS devices.*

これらの多くは有料サービスですが、一部には無料枠があります。

- [Batch](https://batch.com)
- [Boxcar](https://boxcar.io)
- [Braze](https://www.braze.com/)
- [Carnival](https://www.sailthru.com)
- [Catapush](https://www.catapush.com/)
- [Growth Push](https://growthpush.com) - 日本で人気がある。
- [Netmera](https://www.netmera.com/)
- [OneSignal](https://onesignal.com) - 無料。
- [PushBots](https://pushbots.com/)
- [Pusher](https://pusher.com/beams) - 無料かつ無制限。
- [Pushkin](https://github.com/Nordeus/pushkin) - 無料かつオープンソース。
- [Pushwoosh](https://www.pushwoosh.com)
- [Swrve](https://www.swrve.com)
- [Urban Airship](https://www.airship.com/platform/channels/mobile-app/)

**[back to top関連](#contributing-and-collaborating)**


## Objective-C Runtime関連 <a id="objective-c-runtime"></a>

*Objective-C Runtime wrappers, libraries and tools.*

- [Lumos](https://github.com/sushinoya/lumos) - Objective-C Runtimeにラップされた軽量Swiftのラッパー。
- [Swizzlean](https://github.com/rbaumbach/Swizzlean) - Objective-Cのスワリズ（Swizzle）を補助するヘルパークラス。

**[back to top関連](#contributing-and-collaborating)**

## 最適化 <a id="optimization"></a>

*Profiling tools and techniques to squeeze performance out of iOS apps.*

- [SmallStrings](https://github.com/EmergeTools/SmallStrings) - localized .stringsファイルのサイズを80％削減。

**[back to top関連](#contributing-and-collaborating)**

## その他のAwesomeリスト <a id="other-awesome-lists"></a>

*Other amazingly awesome lists can be found in the*

- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) list.
- [Open Source apps](https://github.com/dkhamsing/open-source-ios-apps) list of open source iOS apps.

- [Awesome ARKit](https://github.com/olucurious/Awesome-ARKit) - 素晴らしいARKitプロジェクトとリソースをキュレーションしたリスト。
- [Awesome iOS Interview question list](https://github.com/dashvlas/awesome-ios-interview) - 面接担当者と応募者向けのガイド。このiOS面接質問を確認し、途中で実用的なヒントを得る。
- [Awesome list of open source applications for macOS](https://github.com/serhii-londar/open-source-mac-os-apps) - macOS用の素晴らしいオープンソースアプリケーションのリスト。
- [awesome-gists](https://github.com/vsouza/awesome-gists#ios) - iOSセクションの素晴らしいgistのリスト。
- [awesome-ios-books](https://github.com/bystritskiy/awesome-ios-books) - iOS開発者向けの素晴らしい本のリスト。
- [awesome-ios-developer](https://github.com/jphong1111/awesome-ios-developer) - iOS開発者にとっての有用な知識や情報。
- [Awesome-iOS-Twitter](https://github.com/carolanitz/Awesome-iOS-Twitter) - 素晴らしいiOS Twitterアカウントをキュレーションしたリスト。
- [awsome-ios-animation](https://github.com/ameizi/awesome-ios-animation) - 素晴らしいiOSアニメーションをキュレーションしたリスト。含むObjective-CおよびSwiftライブラリ。
- [CocoaConferences](https://github.com/Lascorbe/CocoaConferences) - iOS & macOS開発者向けのコカ・コンファレンス一覧
- [Curated-Resources-for-Learning-Swift](https://hackr.io/tutorials/learn-ios-swift) - 開発者が推奨するリソースを厳選した一覧
- [Doloffer Guide](https://github.com/vsouza/awesome-ios/blob/0c8131c4cbf5c8b6d5c54c23e2ee0fbbbe2b8394/github.com/Doloffer-g/guide) - DolOffer公式アフィリエイト・クリエイター向けリソース
- [example-ios-apps](https://github.com/jogendra/example-ios-apps) - Swiftで開発されたオープンソースのiOSアプリ例の一覧
- [iOS-Learning-Materials](https://github.com/jVirus/iOS-Learning-Materials) - iOSに深く掘り下げるために役立つ記事、ウェブリソース、チュートリアル、コードリポジトリの厳選一覧

**[back to top関連](#contributing-and-collaborating)**

## パース <a id="parsing"></a>

*Parsers and serializers for common data formats.*

### CSV関連 <a id="csv"></a>

*Libraries for reading and writing CSV files in Swift and Objective-C.*

- [CodableCSV](https://github.com/dehesa/CodableCSV) - CSVファイルをSwiftのCodableインターフェースを用いて、行ごと・フィールドごとに読み書きする
- [CSV.swift](https://github.com/yaslab/CSV.swift) - Swiftで書かれたCSV読み書きライブラリ
- [CSwiftV](https://github.com/Daniel1of1/CSwiftV) - RFC4180に準拠したSwiftによるCSVパーサー

**[back to top関連](#contributing-and-collaborating)**

### JSON関連 <a id="json"></a>

*JSON parsing, mapping and serialization libraries.*

- [AlamofireObjectMapper](https://github.com/tristanhimmelman/AlamofireObjectMapper) - Alamofire拡張機能でJSONレスポンスデータをObjectMapperを使用してSwiftオブジェクトに変換
- [Arrow 🏹](https://github.com/freshOS/Arrow) - SwiftでのエレガントなJSONパース
- [Elevate](https://github.com/Nike-Inc/Elevate) - ElevateはSwiftを活用したJSONパースフレームワークで、パースをシンプルで信頼性高く、組み立てやすいように設計
- [FastEasyMapping](https://github.com/Yalantis/FastEasyMapping) - JSONのシリアル化とデシリアライズを高速に実行
- [FlatBuffersSwift](https://github.com/mzaks/FlatBuffersSwift) - このプロジェクトはFlatBuffers（効率的かつプラットフォームを越えたシリアル化ライブラリ）をSwiftに導入しています
- [Groot](https://github.com/gonzalezreal/Groot) - JSONディクショナリと配列をCore Data管理オブジェクトに変換・変換する
- [HandyJSON](https://github.com/alibaba/handyjson) - Swift向けの便利なJSONオブジェクトのシリアル化／デシリアライズライブラリ
- [Himotoki](https://github.com/ikesyo/Himotoki) - Swiftで純粋に書かれた型安全なJSONデコードライブラリ
- [JASON](https://github.com/delba/JASON) - パフォーマンスに優れ、操作が簡単な JSON パース。
- [JAYSON](https://github.com/muukii/JAYSON) - 厳密かつスケーラブルなJSONライブラリ
- [jsoncafe.com](http://www.jsoncafe.com/) - JSONからテンプレート駆動でモデルクラスを自動生成するオンラインツール
- [JSONExport](https://github.com/Ahmed-Ali/JSONExport) - JSONExportはmacOS用のデスクトップアプリで、JSONオブジェクトを、あなたの好きな言語でのモデルクラス、コンストラクタ、ユーティリティメソッド、セッター、ゲッターとしてエクスポートできます
- [JSONModel](https://github.com/JSONModel/JSONModel) - JSON用の魔法のようなデータモデルフレームワーク。迅速に強力で原子的かつスマートなデータモデルクラスを作成
- [Mantle](https://github.com/Mantle/Mantle) - ココアとココア・トゥッチ向けのモデルフレームワーク
- [Marshal](https://github.com/utahiosmac/Marshal) - [String: Any]という型のないワイルド・ウェストをプロトコルベースでマーシャリング
- [MJExtension](https://github.com/CoderMJLee/MJExtension) - JSONとモデル間の高速かつ便利で非侵襲的な変換。モデルクラスは他のベースクラスを継承する必要がない。モデルファイルの編集も不要。
- [ObjectMapper](https://github.com/tristanhimmelman/ObjectMapper) - Swiftで書かれたフレームワークで、モデルオブジェクト（クラスと構造体）をJSONに変換したり、JSONから変換したりするのを簡単に行えるようにする。
- [PMHTTP](https://github.com/postmates/PMHTTP) - Swift/Obj-CのHTTPフレームワークでRESTとJSONに焦点を当てる。
- [PMJSON](https://github.com/postmates/PMJSON) - 純SwiftのJSONエンコード／デコードライブラリ。
- [PropertyMapper](https://github.com/krzysztofzablocki/PropertyMapper) - 最小限のコードでデータマッピングとバリデーションを行う。
- [SBJson](https://github.com/SBJson/SBJson) - このフレームワークはObjective-Cで厳密なJSONパーサーとジェネレーターを実装している。
- [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) - SwiftでJSONデータを扱うより良い方法。
- [SwiftyJSONAccelerator](https://github.com/insanoid/SwiftyJSONAccelerator) - Codeable対応でJSONからSwift 5のモデルファイルを生成。

**[back to top関連](#contributing-and-collaborating)**

### XML & HTML関連 <a id="xml--html"></a>

*XML and HTML parsers, selectors and serializers.*

- [AEXML](https://github.com/tadija/AEXML) - Swiftで書かれたシンプルで軽量なXMLパーサー。
- [Fuzi](https://github.com/cezheng/Fuzi) - Swiftで高速かつ軽量なXMLおよびHTMLパーサー（XPathおよびCSS対応）。
- [HTMLKit](https://github.com/iabudiab/HTMLKit) - Objective-Cで書かれた、日々のHTMLニーズに最適なフレームワーク。
- [Kanna](https://github.com/tid-kijyun/Kanna)  - Kanna(鉋)はmacOS/iOS向けのXML/HTMLパーサー。
- [Ono](https://github.com/mattt/Ono) - iOSおよびmacOS向けにXMLおよびHTMLを扱うシンプルな方法。
- [SwiftyXML](https://github.com/chenyunguiMilook/SwiftyXML) - Swift 4でXMLデータを扱う最もSwiftらしい方法。
- [SwiftyXMLParser](https://github.com/yahoojapan/SwiftyXMLParser) - Swiftで実装されたシンプルなXMLパーサー。
- [SWXMLHash](https://github.com/drmohundro/SWXMLHash) - SwiftでシンプルなXMLパーサー。
- [XMLCoder](https://github.com/MaxDesiatov/XMLCoder) - SwiftによるXMLのエンコーダーおよびデコーダー。`Codable` プロトコルを用いる。
- [ZMarkupParser](https://github.com/ZhgChgLi/ZMarkupParser) - カスタムスタイルとタグを持つNSAttributedStringにHTML文字列を変換。

**[back to top関連](#contributing-and-collaborating)**

### その他のパース <a id="other-parsing"></a>

*Parsers for additional formats like YAML, INI and Markdown.*

- [CoreXLSX](https://github.com/MaxDesiatov/CoreXLSX) - 純SwiftでExcelスプレッドシート（XLSX）フォーマットをサポート。
- [CreateAPI](https://github.com/CreateAPI/CreateAPI) - Swiftで書かれたOpenAPI仕様向けの魅力的なコード生成ツール
- [Erik](https://github.com/phimage/Erik) - ErikはWebKitをベースにしたヘッドレスブラウザです。ヘッドレスブラウザはJavaScriptを使ってウェブページにアクセスし、操作するための機能テストを実行できます。
- [FeedKit](https://github.com/nmdias/FeedKit) - Swiftで書かれたRSSおよびAtomフィードパーサー
- [NetNewsWire](https://github.com/Ranchero-Software/NetNewsWire) - macOSおよびiOS向けの無料かつオープンソースのフィードリーダー
- [SVGView](https://github.com/exyte/SVGView) - SVGをSwiftUIで書いたパーサーおよびレンダラー。
- [SwiftCssParser](https://github.com/100mango/SwiftCssParser) - 純粋なSwiftで書かれた強力で拡張可能なCSSパーサー
- [URLEmbeddedView](https://github.com/marty-suzuki/URLEmbeddedView) - Open Graphプロトコルに準拠したオブジェクトを自動的にキャッシュし、URL埋め込みカードとして表示。
- [URLPreview](https://github.com/itsmeichigo/URLPreview) - ウェブページのプレビューアイテムを表示するためのNSURL拡張機能
- [WKZombie](https://github.com/mkoehnke/WKZombie) - WKZombieはiOS/macOS向けのSwiftフレームワークで、ユーザーインターフェースやAPIを必要としない状態でウェブサイトをナビゲートし、データを収集できます。この技術はヘッドレスブラウザとも呼ばれ、自動テストの実行やJavaScriptを使ってウェブサイトを操作できます。

**[back to top関連](#contributing-and-collaborating)**

## Passbook関連 <a id="passbook"></a>

*Libraries for creating and managing Apple Wallet passes.*

- [passbook](https://github.com/frozon/passbook) - Passbook gemは、iOS 6以降のPassbook向けのpkpassを作成するためのツールです。
- [Passkit](https://passkit.com) - Passbookのデザイン、作成、検証を実行します。

**[back to top関連](#contributing-and-collaborating)**

## 決済 <a id="payments"></a>

*In-app purchase, subscription and payment gateway helpers.*

- [Braintree](https://www.braintreepayments.com) - 最初の5万ドルまで無料の支払い処理。バックエンドが必要です。
- [Caishen](https://github.com/prolificinteractive/Caishen) - iOS向けの支払いカードUIおよびバリデーション
- [CreditCardForm-iOS](https://github.com/orazz/CreditCardForm-iOS) - CreditCardFormはiOS向けのフレームワークで、開発者が実際に存在するクレジットカードのUIを再現できるようにします。
- [FramesIos](https://github.com/checkout/frames-ios) - Swiftで書かれた支払いフォームUIおよびユーティリティ。
- [iCard](https://github.com/eliakorkmaz/iCard) - SnapKit DSLを使用したSwiftによる銀行カードジェネレーター。
- [merchantkit](https://github.com/benjaminmayo/merchantkit) - iOS向けの現代的なインアプリ購入管理フレームのフレームワーク。
- [MFCard](https://github.com/MobileFirstInc/MFCard) - iOSアプリにクレジットカード決済を簡単に統合し、カスタマイズ可能なカードUIを提供します。
- [Moltin](https://www.moltin.com/developer/swift-ecommerce-sdk/) - シンプルなSDKでeCommerceをアプリに追加し、物理商品の販売が可能になります。バックエンドは不要です。
- [monza](https://github.com/gabrielgarza/monza) - Rails向けのRuby gem - イテムストアのインアプリ購入リシートの検証を簡単に行えます。自動更新購入も含みます。
- [PatronKit](https://github.com/MosheBerman/PatronKit) - アプリにパトロン機能を追加するためのフレームワーク。
- [RMStore](https://github.com/robotmedia/RMStore) - 軽量なiOS向けインアプリ購入用ライブラリ。
- [Stripe](https://stripe.com) - バックエンド知識が少ない方でも使える、PAYによるアプリ内支払い統合。
- [SwiftyStoreKit](https://github.com/bizz84/SwiftyStoreKit) - iOS 8.0以降およびmacOS 9.0向けの軽量インアプリ購入Swiftフレーム及
- [TPInAppReceipt](https://github.com/tikhop/TPInAppReceipt) - インアプリストアのリセイプを読み取り、検証する

**[back to top関連](#contributing-and-collaborating)**

## 権限 <a id="permissions"></a>

*Unified APIs and UIs for requesting and managing iOS user permissions.*

- [ClusterPrePermissions](https://github.com/rsattar/ClusterPrePermissions) - 開発者が自らのダイアログでユーザーにアクセスを依頼し、システムベースのリクエストを行う前に使用できる、再利用可能な事前許可ユーティリティ
- [ISHPermissionKit](https://github.com/iosphere/ISHPermissionKit) - iOSアプリがユーザーの許可を求めるための一貫した方法
- [PAPermissions](https://github.com/pascalbros/PAPermissions) - iOSで許可を求めるための一元化API
- [Permission](https://github.com/delba/Permission) - iOSで許可を求めるための一元化API
- [Proposer](https://github.com/nixzhu/Proposer) - 許可リクエストを簡単に行う（カメラ、写真、マイク、連絡先、位置情報に対応）
- [SPPermissions](https://github.com/ivanvorobei/SPPermissions) - Swiftで許可を依頼。利用可能なリスト、ダイアログ、ネイティブインターフェース。許可状態を確認できる。

**[back to top関連](#contributing-and-collaborating)**

## ポッドキャスト <a id="podcasts"></a>

*Podcasts worth following to keep learning about iOS and Swift.*

- [App Story](http://www.appstorypodcast.com)
- [Consult](https://consultpodcast.com/#_=_)
- [Core Intuition](http://coreint.org/)
- [Debug](https://www.imore.com/debug)
- [Fireside Swift](https://podcasts.apple.com/us/podcast/fireside-swift/id1269435221?mt=2)
- [iPhreaks](https://devchat.tv/iphreaks/)
- [More Than Just Code](https://mtjc.fireside.fm/)
- [Release Notes](https://releasenotes.tv/)
- [Runtime](https://spec.fm/podcasts/runtime)
- [Stacktrace](https://stacktracepodcast.fm)
- [Swift by Sundell](https://www.swiftbysundell.com/podcast/)
- [Swift Playhouse](http://www.swiftplayhouse.com/)
- [Swift Unwrapped](https://spec.fm/podcasts/swift-unwrapped)
- [The Ray Wenderlich Podcast](https://www.raywenderlich.com/podcast)
- [Under the Radar](https://www.relay.fm/radar)

**[back to top関連](#contributing-and-collaborating)**

## プロジェクト設定 <a id="project-setup"></a>

*Project generators, templates and scaffolding tools for new iOS apps.*

- [chairs](https://github.com/orta/chairs) - iOSシミュレーターのドキュメントを切り替えます
- [crafter](https://github.com/krzysztofzablocki/crafter) - iOSプロジェクトのテンプレートをカスタムDSL構文で設定できるCLI、使いやすく、非常に強力。
- [swift5-module-template](https://github.com/fulldecent/swift5-module-template) - Swift 5のモジュールを他の開発者がプロジェクトに含めるための出発点。
- [SwiftPlate](https://github.com/JohnSundell/SwiftPlate) - コマンドラインから、クロスプラットフォームのSwiftフレームワークプロジェクトを簡単に生成。
- [Tuist](https://github.com/tuist/tuist) - スケールでXcodeプロジェクトを作成・維持・操作するツール。
- [xcproj](https://github.com/tuist/xcodeproj) - Xcodeプロジェクトの読み取りと更新。

**[back to top関連](#contributing-and-collaborating)**

### プロトタイピング <a id="prototyping"></a>

*Tools for rapidly prototyping iOS app ideas and UI flows.*

- [FluidUI](https://www.fluidui.com)
- [Framer](https://www.framer.com/)
- [Principle](https://principleformac.com/)
- [Proto.io](https://proto.io/)

**[back to top関連](#contributing-and-collaborating)**

## 迅速な開発 <a id="rapid-development"></a>

*Frameworks and tools designed to accelerate day-to-day iOS development.*

- [Playgrounds](https://github.com/krzysztofzablocki/Playgrounds) - Objective-C用のプレイグラウンドで、極めて高速なプロトタイピングや学習を行う。
- [STV Framework](http://www.sensiblecocoa.com) - ネイティブなiOS開発。

**[back to top関連](#contributing-and-collaborating)**

## リアクティブプログラミング <a id="reactive-programming"></a>

*Reactive and functional reactive libraries for Swift and Objective-C.*

- [CwlSignal](https://github.com/mattgallagher/CwlSignal) A Swift framework for reactive programming.
- [Hanson](https://github.com/blendle/Hanson) - Swiftにおける軽量な観測とバインディング、KVOおよびNotificationCenterのサポート。
- [JASONETTE-iOS](https://github.com/Jasonette/JASONETTE-iOS) - ネイティブアプリをHTTPで作成。JSONだけを使って、自らのネイティブiOSアプリを作成。
- [LightweightObservable](https://github.com/fxm90/LightweightObservable) - サブスクライブできる観測可能なシーケンスの軽量実装
- [NSObject-Rx](https://github.com/RxSwiftCommunity/NSObject-Rx) - NSObjectへの手軽なRxSwift拡張、rx_disposeBagを含む。
- [Observable](https://github.com/roberthein/Observable) - Swiftで値を観察する最も簡単な方法。
- [OneWay](https://github.com/DevYeom/OneWay) - 一方向データフローに基づく状態管理用のSwiftライブラリ。
- [OpenCombine](https://github.com/broadwaylamb/OpenCombine) — AppleのCombineフレームワークのオープンソース実装で、時間経過にわたる値の処理が可能
- [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa) - 時間経過に伴う値のストリーム。
- [ReactiveCoreData](https://github.com/apparentsoft/ReactiveCoreData) - ReactiveCoreData (RCD) は、Core DataをReactiveCocoa (RAC) の世界に導く試み。
- [ReactiveKit](https://github.com/DeclarativeHub/ReactiveKit) - ReactiveKitは、反応型および関数型反応型プログラミング向けのSwiftフレームワークのコレクションです。
- [ReactiveSwift](https://github.com/ReactiveCocoa/ReactiveSwift) - ReactiveCocoaが時間軸上の値のストリームをグループ化しています。
- [ReactiveTask](https://github.com/Carthage/ReactiveTask) - 柔軟で、ストリームベースの抽象化によるプロセスの起動。
- [Reactor](https://github.com/ReactorSwift/Reactor) - Swiftで自然な表現を用いた一方向データフロー—ElmおよびReduxにインスパイアされています。
- [ReSwift](https://github.com/ReSwift/ReSwift) - Swiftにおける一方向データフロー—Reduxにインスパイアされています。
- [RxAlamofire](https://github.com/RxSwiftCommunity/RxAlamofire) - SwiftのAlamofireによるエレガントなHTTPネットワーキングをラップしたRxSwift。
- [RxAnimated](https://github.com/RxSwiftCommunity/RxAnimated) - アニメーションされたRxCocoaのバインディング。
- [RxBluetoothKit](https://github.com/Polidea/RxBluetoothKit) - iOSおよびmacOS向けのRxSwift用Bluetoothライブラリ。
- [RxCoordinator](https://github.com/quickbirdstudios/XCoordinator) - iOS向けのコアナビゲーションライブラリ（コアディレクタープatternに基づく）。
- [RxCoreData](https://github.com/RxSwiftCommunity/RxCoreData) - Core Data向けのRxSwift拡張。
- [RxGesture](https://github.com/RxSwiftCommunity/RxGesture) - 視覚的なジェスチャ向けのRxSwift反応型ラッパー。
- [RxKeyboard](https://github.com/RxSwiftCommunity/RxKeyboard) - iOSにおける反応型キーボード。
- [RxMediaPicker](https://github.com/RxSwiftCommunity/RxMediaPicker) - UIImagePickerControllerを基盤とした反応型ラッパー。
- [RxRealm](https://github.com/RxSwiftCommunity/RxRealm) - Realmのコレクション型向けのRxラッパー。
- [RxSwift](https://github.com/ReactiveX/RxSwift) - Swiftにおける反応型プログラミング。
- [Verge](https://github.com/muukii/Verge) - Vergeは、UIKitおよびSwiftUI向けの高速かつスケーラブルな状態管理ライブラリです。
- [VueFlux](https://github.com/ra1028/VueFlux) - Swiftにおける一方向データフロー状態管理アーキテクチャ—VuexおよびFluxにインスパイアされています。

**[back to top関連](#contributing-and-collaborating)**

### React-Like関連 <a id="react-like"></a>

*React-inspired UI libraries for building declarative iOS interfaces.*

- [Render](https://github.com/alexdrone/Render) - SwiftとUIKitにおけるReact風のアプローチ。

**[back to top関連](#contributing-and-collaborating)**

## リファレンス <a id="reference"></a>

*Cheat sheets, curated documentation and reference material for iOS developers.*

- [Awesome-ios](https://kandi.openweaver.com/swift/vsouza/awesome-ios) - iOSエコシステムにおける素晴らしいツールを厳選したリスト。
- [Objective-C Cheat Sheet](https://github.com/iwasrobbed/Objective-C-CheatSheet) - Objective-Cでよく扱う上位概念をすばやく確認できるチートシート。
- [Swift Cheat Sheet](https://github.com/iwasrobbed/Swift-CheatSheet) - Swiftでよく扱う上位概念をすばやく確認できるチートシート。
- [SwiftSnippets](https://github.com/onmyway133/SwiftSnippets) - Xcodeで使用可能なSwiftのコードスニペットのコレクション
- [WWDC-Recap](https://erenkabakci.github.io/WWDC-Recap/) - WWDC 19および17のセッション要約をMarkdown形式で収集したものです

**[back to top関連](#contributing-and-collaborating)**

## リフレクション <a id="reflection"></a>

*Runtime reflection, mirroring and introspection helpers.*

- [EVReflection](https://github.com/evermeer/EVReflection) - 反射ベースの JSON エンコードとデコード。NSDictionary、NSCoding、Printable、Hashable および Equatable のサポートを含む。
- [JSONNeverDie](https://github.com/johnlui/JSONNeverDie) - JSON からモデルへ自動反射ツール。使いやすい JSON エンコーダ／デコーダ。消えず、常に生き続けることを目指す。
- [Reflect](https://github.com/CharlinFeng/Reflect) - Reflection、Dict2Model、Model2Dict、Archive
- [Reflection](https://github.com/Zewo/Reflection) - Reflectionは、実行時における高度な反射を提供し、動的に型を構築できるAPIを提供します
- [Runtime](https://github.com/wickwirew/Runtime) - Swiftランタイムライブラリで型情報の表示、プロパティの動的取得および設定が可能
- [SwiftKVC](https://github.com/bradhilton/SwiftKVC) - Swiftのネイティブクラスや構造体向けのキーバリューコーディング（KVC）

**[back to top関連](#contributing-and-collaborating)**

## Regex関連 <a id="regex"></a>

*Regular expression libraries and DSLs for Swift and Objective-C.*

- [PySwiftyRegex](https://github.com/cezheng/PySwiftyRegex) - Swiftで正規表現をPython風に簡単に扱う方法
- [Regex](https://github.com/sharplet/Regex) - Swift µフレームワークでNSRegularExpressionをバックアップした正規表現型を提供
- [Regex](https://github.com/crossroadlabs/Regex) - Swift向けの正規表現
- [SwiftRegex](https://github.com/kasei/SwiftRegex) - Swift向けのPerl風の正規表現 =~ 演算子

**[back to top関連](#contributing-and-collaborating)**

## SDK関連 <a id="sdk"></a>

*Official and third-party SDKs for integrating external services into iOS apps.*

### Official関連 <a id="official"></a>

*Officially supported SDKs from platform vendors.*

- [Adapty](https://github.com/adaptyteam/AdaptySDK-iOS) - 3行のコードでアプリ内購入とA/Bテストを統合
- [algoliasearch-client-swift](https://github.com/algolia/algoliasearch-client-swift) - SwiftでAlgolia検索APIクライアントを提供
- [Apphud](https://github.com/apphud/ApphudSDK) - サーバーコードなしで30分以内に自動更新購入とアプリ内購入を完全に統合するソリューション
- [AWS](https://github.com/aws-amplify/aws-sdk-ios) Amazon Web Services Mobile SDK for iOS.
- [Box](https://github.com/box/box-ios-sdk) iOS + macOS SDK for the Box API.
- [CareKit](https://github.com/carekit-apple/CareKit) - CareKitは、人々が自分の健康をよりよく理解し、管理できるアプリを作成するためのオープンソースソフトウェアフレームワークです。Appleによるもの
- [Dropbox](https://www.dropbox.com/lp/developers) SDKs for Drop-ins and Dropbox Core API.
- [Evernote](https://github.com/evernote/evernote-cloud-sdk-ios) Evernote SDK for iOS.
- [Facebook](https://github.com/facebook/facebook-ios-sdk) Facebook iOS SDK.
- [Firebase](https://firebase.google.com/docs/ios/setup) Mobile (and web) application development platform.
- [Google Analytics](https://developers.google.com/analytics/devguides/collection/ios/v3/) Google Analytics SDK for iOS.
- [Primer](https://www.goprimer.com/) - 視覚的なエディタでパーソナライズされたランディングスクリーン、サインアップ、ログインフローを作成するための簡単なSDK。組み込みのA/B/Nテストおよび分析機能を備えています
- [ResearchKit](https://github.com/ResearchKit/ResearchKit) ResearchKit is an open source software framework that makes it easy to create apps for medical research or for other research projects.
- [rides-ios-sdk](https://github.com/uber/rides-ios-sdk) - Uber Rides iOS SDK（ベータ版）
- [Shopify](https://github.com/Shopify/mobile-buy-sdk-ios) - Shopifyのモバイル購入SDKにより、モバイルアプリ内で物理商品の販売が簡単になります
- [Spotify](https://github.com/spotify/ios-sdk) Spotify iOS SDK.
- [Stripe](https://github.com/stripe/stripe-ios) Stripe bindings for iOS and macOS.
- [Tumblr](https://github.com/tumblr/TMTumblrSDK) Library for easily integrating Tumblr data into your iOS or macOS application.
- [Venmo関連](#payments)

**[back to top関連](#contributing-and-collaborating)**

### Unofficial関連 <a id="unofficial"></a>

*Community-maintained SDKs and client libraries for popular services.*

- [das-quadrat](https://github.com/Constantine-Fry/das-quadrat) - Foursquare API向けのSwiftラッパー。iOSおよびmacOS用
- [Easy Social](https://github.com/pjebs/EasySocial) - TwitterおよびFacebookの統合
- [FHSTwitterEngine](https://github.com/natesymer/FHSTwitterEngine) Twitter API for Cocoa developers.
- [ForecastIO](https://github.com/sxg/ForecastIO) - Forecast.io Dark Sky API向けのSwiftライブラリ
- [InstagramKit](https://github.com/shyambhat/InstagramKit) - インスタグラムiOSSDK
- [objectiveflickr](https://github.com/lukhnos/objectiveflickr) - ObjectiveFlickr、Objective-C用のFlickr APIフレームワーク.
- [PokemonKit](https://github.com/ContinuousLearning/PokemonKit) - Swiftで書かれたPokeapiのラッパー.
- [Spartan](https://github.com/Daltron/Spartan) - Swiftで書かれたiOSおよびmacOS用のエレガントなSpotify Web APIライブラリ.
- [STTwitter](https://github.com/nst/STTwitter) A stable, mature and comprehensive Objective-C library for Twitter REST API 1.1.
- [Swifter](https://github.com/mattdonnelly/Swifter) - :bird: iOSおよびmacOS用のSwiftで書かれたTwitterフレームワーク.
- [Swiftly Salesforce](https://github.com/mike4aday/SwiftlySalesforce) - Swiftとプロミスを使用してSalesforceとの統合を行うiOSアプリ開発に便利なフレームワーク.
- [SwiftyVK](https://github.com/SwiftyVK/SwiftyVK) Library for easy interact with VK social network API written in Swift.
- [UnsplashKit](https://github.com/modo-studio/UnsplashKit) - Swiftで書かれたUnsplashのクライアント.
- [waterwheel.swift](https://github.com/kylebrowning/waterwheel.swift) - The Waterwheel Swift SDKは、iOS、macOS、tvOS、watchOSアプリがDrupal 7および8にネイティブに接続できるクラスを提供します.

**[back to top関連](#contributing-and-collaborating)**

## セキュリティ <a id="security"></a>

*Tools and libraries for securing iOS apps, data and user credentials.*

- [BiometricAuthentication](https://github.com/rushisangani/BiometricAuthentication) - AppleのFaceIDまたはTouchID認証をアプリ内で使用するためのBiometricAuthentication.
- [cocoapods-keys](https://github.com/orta/cocoapods-keys) - 環境およびアプリケーションキーを格納するキーバリューストア.
- [LTHPasscodeViewController](https://github.com/rolandleth/LTHPasscodeViewController) - iOSの設定画面から見られるパスコードロックスクリーン（TouchIDおよびシンプル（長さ変動）／複雑なパスコードサポート）.
- [SecurePropertyStorage](https://github.com/alexruperez/SecurePropertyStorage) - Swiftプロパティラッパーを使って、プロパティのセキュアなストレージを定義するのに役立つ
- [simple-touch](https://github.com/simple-machines/simple-touch) - iOS上でBiometric Authenticationサービス（Touch ID）を非常にシンプルにラップしたSwiftのラッパー.
- [Smile-Lock](https://github.com/recruit-lifestyle/Smile-Lock) - 美しいパスコードロックビューを作成するためのライブラリ.
- [SwiftPasscodeLock](https://github.com/yankodimitrov/SwiftPasscodeLock) - Swiftで書かれたiOSのパスコードロック（TouchID認証）.
- [TOPasscodeViewController](https://github.com/timoliver/TOPasscodeViewController) - iOS用のモーダルパスコード入力および検証ビュー制御.
- [zxcvbn-ios](https://github.com/dropbox/zxcvbn-ios) - 現実的なパスワード強度評価器.

**[back to top関連](#contributing-and-collaborating)**

### 暗号化 <a id="encryption"></a>

*Cryptography libraries for encryption, hashing and digital signatures.*

- [Arcane](https://github.com/onmyway133/Arcane) - Swiftで書か的CommonCryptoのラッパー.
- [CryptoSwift](https://github.com/krzyzanowskim/CryptoSwift) - Swiftプログラミング言語で実装されたSwiftによる暗号関連関数およびヘルパー.
- [IDZSwiftCommonCrypto](https://github.com/iosdevzone/IDZSwiftCommonCrypto) - Swiftで書かれたAppleのCommon Cryptoライブラリのラッパー.
- [JOSESwift](https://github.com/airsidemobile/JOSESwift) - Swiftで書かれたJOSE標準（JWS、JWE、JWK）のフレームワーク。
- [Obfuscator-iOS](https://github.com/pjebs/Obfuscator-iOS) - すべてのハードコードされたセキュリティに影響を与える文字列を暗号化してアプリのセキュリティを確保します。
- [RNCryptor](https://github.com/RNCryptor/RNCryptor) - iOSおよびMac向けのSwiftでのCCCryptor（AES暗号化）ラッパー。-- ObjCについてはRNCryptor/RNCryptor-objcを参照。
- [SipHash](https://github.com/attaswift/SipHash) - SwiftでSipHashアルゴリズムを使用したシンプルかつ安全なハッシュ処理。
- [SwCrypt](https://github.com/soyersoyer/SwCrypt) - SwiftでCommonCryptoを使用したRSA公開/秘密鍵生成、RSA、AES暗号化/復号、RSA署名/検証。
- [swift-sodium](https://github.com/jedisct1/swift-sodium) - iOS向けの安全で使いやすい暗号化ライブラリ。
- [SwiftHash](https://github.com/onmyway133/SwiftHash) - Swiftでのハッシュ処理。
- [SwiftyRSA](https://github.com/TakeScoop/SwiftyRSA) - SwiftでのRSA公開/秘密鍵暗号化。
- [Themis](https://github.com/cossacklabs/themis) - 高レベルの暗号ライブラリで、基本的な非対称暗号、前向きセキュリティを備えた安全なメッセージング、安全なデータ保存を提供し、iOS/macOS、Androidおよび異なるサーバー側プラットフォームに対応。

**[back to top関連](#contributing-and-collaborating)**

### キーチェーン <a id="keychain"></a>

*Keychain wrappers for safely storing secrets and credentials on iOS.*

- [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess) - iOSおよびmacOS向けのKeychainに使えるシンプルなSwiftラッパー。
- [Lockbox](https://github.com/granoff/Lockbox) - Objective-Cによる、Keychainにデータを安全に保存するためのユーティリティクラス。
- [Locksmith](https://github.com/matthewpalmer/Locksmith) - SwiftでKeychainを扱うための強力なプロトコル指向ライブラリ。
- [UICKeyChainStore](https://github.com/kishikawakatsumi/UICKeyChainStore) - UICKeyChainStoreはiOS向けのKeychainのシンプルなラッパー。
- [Valet](https://github.com/square/Valet) - Keychainの仕組みをまったく理解しなくても、iOSまたはmacOSのKeychainにデータを安全に保存できます。

**[back to top関連](#contributing-and-collaborating)**

## サーバー <a id="server"></a>

*Server side projects supporting coroutines, Linux, MacOS, iOS, Apache Modules, Async calls, libuv and more.*

- [ApacheExpress](https://github.com/ApacheExpress/ApacheExpress) - SwiftでApacheモジュールを書けます！
- [CocoaHTTPServer](https://github.com/robbiehanson/CocoaHTTPServer) - macOSまたはiOSアプリ向けの小さな、軽量で埋め込み可能なHTTPサーバー。
- [Curassow](https://github.com/kylef-archive/Curassow) - SwiftによるHTTPサーバーで、事前forkワーカーモデルを使用。
- [Embassy](https://github.com/envoy/Embassy) - iOS / macOS / Linuxで動作する純Swiftによる超軽量非同期HTTPサーバーライブラリ。
- [Express](https://github.com/crossroadlabs/Express) - Swift Expressは、シンプルでありながら、強い意見を持たないウェブアプリケーションサーバーです。
- [Jobs](https://github.com/BrettRToomey/Jobs) - Swiftバックエンド向けのジョブシステム。
- [Kitura](https://github.com/IBM-Swift/Kitura) - SwiftのウェブフレームワークおよびHTTPサーバー。
- [Lightning](https://github.com/skylab-inc/Lightning) - SwiftによるマルチプラットフォームWebおよびネットワークフレームワーク
- [NetworkObjects](https://github.com/colemancda/NetworkObjects) - Swiftによるバックエンド／サーバーフレームワーク（純Swift、Linux対応）
- [Noze.io](http://noze.io) - イベントベースI/Oストリーム、つまりNode.jsのSwift版
- [Perfect](https://github.com/PerfectlySoft/Perfect) - サーバー側のSwift。Perfectライブラリ、アプリケーションサーバー、コネクタ、例アプリケーションを含む
- [Redis](https://github.com/vapor/redis) - オリジナルプロトコル仕様に基づく純Swift実装のRedisクライアント。macOSおよびLinux対応。
- [smoke-framework](https://github.com/amzn/smoke-framework) - Swiftプログラミング言語で書かれた軽量サーバーサービスフレームワーク
- [swift-http](https://github.com/huytd/swift-http) - LinuxおよびmacOS向けSwiftによるHTTP実装
- [Swifter](https://github.com/httpswift/swifter) - Swiftプログラミング言語で書かれたミニHTTPサーバエンジン
- [SwiftGD](https://github.com/twostraws/swiftgd) - libgdに対するシンプルなSwiftラッパー
- [Swifton](https://github.com/sauliusgrigaitis/Swifton) - LinuxおよびmacOS上で動作するRuby on RailsをインスピレーションとしたSwiftによるWebフレームワーク
- [swiftra](https://github.com/takebayashi/swiftra) - SwiftでWebアプリを開発するためのSinatra風DSL
- [Taylor](https://github.com/izqui/Taylor) - SwiftでHTTPウェブサーバーを書くための軽量ライブラリ
- [Vapor](https://github.com/vapor/vapor) - iOS、macOS、Ubuntuで動作するSwift向けエレガントなWebフレームドーム
- [Zewo](https://github.com/Zewo/Zewo) - macOSおよびLinux上でコルーチンを活用したSwiftによるウェブサーバアプリケーション向け軽量ライブラリ

**[back to top関連](#contributing-and-collaborating)**

## スタイルガイド <a id="style-guides"></a>

*Community style guides for writing clean Swift and Objective-C code.*

- [Futurice iOS Good Practices](https://github.com/futurice/ios-good-practices) - iOSの初学者向けガイドおよび良い実践の提案。[@futurice](https://github.com/futurice) による。
- [Objective-C Coding Convention and Best Practices](https://gist.github.com/soffes/812796) - コーディング規約に関するGist
- [Prolific Interactive Style Guide](https://github.com/prolificinteractive/swift-style-guide) - Swiftのスタイルガイド
- [raywenderlich Style Guide](https://github.com/raywenderlich/objective-c-style-guide) - raywenderlich.comにおけるコーディング規約を示すスタイルガイド
- [Spotify Objective-C Coding Style](https://github.com/spotify/ios-style) - Spotifyが使用しているiOS開発ガイドライン
- [Swift Style Guide by @raywenderlich](https://github.com/raywenderlich/swift-style-guide) - raywenderlich.comの公式Swiftスタイルガイド
- [Swift Style Guide by LinkedIn](https://github.com/linkedin/swift-style-guide) - LinkedInの公式Swiftスタイルガイド

**[back to top関連](#contributing-and-collaborating)**

## テスト <a id="testing"></a>

*Unit testing, UI testing, mocking and behavior-driven development tools.*

### TDD / BDD関連 <a id="tdd--bdd"></a>

*Frameworks for test-driven and behavior-driven iOS development.*

- [Kiwi](https://github.com/kiwi-bdd/Kiwi) - iOS開発向けの行動駆動開発（BDD）ライブラリ
- [Nimble](https://github.com/Quick/Nimble) - SwiftおよびObjective-C向けのマッチャーフレームワーク
- [OHHTTPStubs](https://github.com/AliSoftware/OHHTTPStubs) - ネットワークリクエストを簡単にスタブ！仮のネットワークデータとカスタムレスポンスタイム、レスポンスコード、ヘッダーを使ってアプリをテスト！
- [PlaygroundTDD](https://github.com/WhiskerzAB/PlaygroundTDD) - Playground内でテストを簡単に実行できる小さなライブラリ
- [Quick](https://github.com/Quick/Quick) - SwiftおよびObjective-C向けの行動駆動開発（BDD）フレームワーク
- [Sleipnir](https://github.com/railsware/Sleipnir) - Swift向けのBDDスタイルフレームワーク
- [Specta](https://github.com/specta/specta) - Objective-CおよびCocoa向けの軽量TDD/BDDフレームドーム
- [swift-corelibs-xctest](https://github.com/apple/swift-corelibs-xctest) - The XCTest Project、Swiftのユニットテストサポートを提供するコアライブラリ。
- [SwiftCheck](https://github.com/typelift/SwiftCheck) - Swift向けのQuickCheck
- [XcodeCoverage](https://github.com/jonreid/XcodeCoverage) - Xcodeプロジェクト向けのコードカバレッジ

**[back to top関連](#contributing-and-collaborating)**

### A/B Testing関連 <a id="ab-testing"></a>

*Libraries and platforms for experimenting and running A/B tests in iOS apps.*

- [ABKit](https://github.com/recruit-mp/ABKit) - iOS向けのA/Bテストフレームワーク
- [Switchboard](https://github.com/KeepSafe/Switchboard) - Switchboard - iPhoneやAndroidアプリ向けの簡単で超軽量のA/Bテスト。このモバイルA/Bテストフレームワークは、サーバーを最小限に抑えながら大量のモバイルユーザーを実行可能にします。

**[back to top関連](#contributing-and-collaborating)**

### UIテスト <a id="ui-testing"></a>

*Tools for automating interaction-based tests against iOS user interfaces.*

- [appium](http://appium.io/) - Appiumは、ネイティブおよびハイブリッドモバイルアプリ用のオープンソーステスト自動化フレームワーク
- [AutoMate](https://github.com/PGSSoft/AutoMate) - XCTest向けのUI自動化テストの拡張
- [Bluepill](https://github.com/linkedin/bluepill) - Bluepillは、iOSテストツールで、1台のマシン上で複数のシミュレータを使ってUIテストを実行する信頼性の高いツールです
- [Cucumber](https://cucumber.io/) - iOS向けの行動駆動開発（BDD）
- [EarlGrey](https://github.com/google/EarlGrey) - :tea: iOS UI自動化テストフレームワーク
- [Flawless App](https://flawlessapp.io/) - リアルタイムでモバイルアプリの視覚品質をチェックするツール。iOSシミュレータ内で初期設計と実際の実装を比較します。
- [ios-driver](http://ios-driver.github.io/ios-driver/index.html) - Selenium / WebDriverを使って、iOSネイティブ、ハイブリッド、またはモバイルウェブアプリケーションをテストできます。
- [Kif](https://github.com/kif-framework/KIF) - iOS向けの機能テストフレームワーク
- [LayoutTest-iOS](https://github.com/linkedin/LayoutTest-iOS) - ビューのレイアウトを複数の設定でテストするユニットテストを書く
- [Marathon Runner](https://github.com/MarathonLabs/marathon) - 高速かつプラットフォームに依存しないテストランナー。パフォーマンスと安定性を重視したテスト実行。
- [robotframework-appiumlibrary](https://github.com/serhatbolsu/robotframework-appiumlibrary) - AppiumLibraryはRobotFramework用のAppiumテストライブラリです。
- [Subliminal](https://github.com/inkling/Subliminal) - iOS統合テストへのシンプルなアプローチ。
- [UI Testing Cheat Sheet](https://github.com/joemasilotti/UI-Testing-Cheat-Sheet) - UIテストでこの機能をどう検証するか？
- [ViewInspector](https://github.com/nalexn/ViewInspector) - SwiftUIビューの実行時検証とユニットテスト

**[back to top関連](#contributing-and-collaborating)**

### その他のテスト <a id="other-testing"></a>

*Snapshot testing, mocking, fuzzing and other testing utilities.*

- [Buildasaur](https://github.com/buildasaurs/Buildasaur) - GitHubおよびBitBucketでのプルリクエストの自動テスト（Xcode Serverで）。チームの生産性と安全性を確保。数分で開始可能。
- [Cuckoo](https://github.com/Brightify/Cuckoo) - Swiftにおける最初のボイラープレートフリーなモックフレームワーク。
- [DVR](https://github.com/venmo/DVR) - Swiftにおけるネットワークテスト。
- [ETTrace](https://github.com/EmergeTools/ETTrace) - XcodeやInstrumentsを使わずに、アプリのパフォーマンスをローカルで測定。
- [Fakery](https://github.com/vadymmarkov/Fakery) - Swiftのフィクションデータ生成ツール。
- [iOS Snapshot Test Case](https://github.com/uber/ios-snapshot-test-case) — Snapshot test your UIViews and CALayers on iOS and tvOS.
- [Kakapo](https://github.com/devlucky/Kakapo) - Swiftでサーバーの動作と応答を動的にモック。
- [MirrorDiffKit](https://github.com/Kuniwak/MirrorDiffKit) - 任意の構造体やクラス間の差分を可視化。
- [Mockingbird](https://github.com/Farfetch/mockingbird) - HTTP/HTTPSを使って任意のシステムを簡単にモックすることで、未完成、不安定なサービスや計画されたケースを再現できるようにし、ソフトウェアテストを簡素化。
- [Mockingjay](https://github.com/kylef/Mockingjay) - SwiftでHTTPリクエストを簡単にスタブできるエレガントなライブラリ。
- [Mockit](https://github.com/sabirvirtuoso/Mockit) - Swiftにおける有名なJavaのMockitoをインスピレーションに受けて構築されたシンプルなモックフレームワーク。
- [OCMock](https://ocmock.org/) - Objective-C用のモックオブジェクト。
- [second_curtain](https://github.com/ashfurrow/second_curtain) - 失敗したiOSスナップショットテストケースをS3にアップロード。
- [SnapshotTesting](https://github.com/pointfreeco/swift-snapshot-testing) - 快適なSwiftスナップショットテスト。
- [trainer](https://github.com/fastlane-community/trainer) - xcodebuild plistファイルをJUnitレポートに変換。
- [Vinyl](https://github.com/Velhotes/Vinyl) - SwiftにおけるVCRスタイルのネットワークテスト。

**[back to top関連](#contributing-and-collaborating)**

## テキスト <a id="text"></a>

*Attributed strings, markdown, syntax highlighting and rich text helpers.*

- [Atributika](https://github.com/psharanda/Atributika) - HTML風タグ、ハッシュタグ、メンション、RegExpやNSDataDetectorパターンを検知・スタイル化して、NSAttributedStringを簡単に構築。
- [Attributed](https://github.com/Nirma/Attributed) - 現代的な Swift の属性文字列用 µフレームワーク
- [AttributedTextView](https://github.com/evermeer/AttributedTextView) - 複数のリンク（ハッシュタグやメンションを含む）をサポートする、属性 UITextView を作成する最も簡単な方法
- [AztecEditor-iOS](https://github.com/wordpress-mobile/AztecEditor-iOS) - AztecはSwiftライブラリで、HTMLの視覚編集機能を備えた `UITextView` のサブクラスを提供。プラグインAPIは、HTMLの変換をカスタマイズし、必要に応じてHTMLと互換性を持つようにする。
- [BonMot](https://github.com/Rightpoint/BonMot) - Swift での美しい、使いやすい属性文字列
- [CocoaMarkdown](https://github.com/indragiek/CocoaMarkdown) - iOS および macOS 用のマーカード解析とレンダリング
- [CodeMirror Swift](https://github.com/ProxymanApp/CodeMirror-Swift) - macOS および iOS 用の CodeMirror の軽量ラッパー。構文強調とテーマをサポート
- [Croc](https://github.com/jkalash/croc) - Swift でのエモジ解析と照合用の軽量ライブラリ
- [Down](https://github.com/iwasrobbed/Down) - cmark をベースにした、Swift による高速マーカードレンダリング
- [DTCoreText](https://github.com/Cocoanetics/DTCoreText) - HTML コードを CoreText で使用するためのメソッド
- [DTRichTextEditor](https://github.com/Cocoanetics/DTRichTextEditor) - iOS 用の富文書エディタ
- [Emojica](https://github.com/xoudini/emojica) - 文字列内の標準的なエモジを、自作エモジセット（例：[Twemoji](https://github.com/twitter/twemoji) または [EmojiOne](https://github.com/joypixels/emojione)）に置き換える。
- [Format](https://github.com/marmelroy/Format) - Swift 用のフォーマッターキット
- [Heimdall](https://github.com/henrinormak/Heimdall) - Heimdall は Security フレームワークをラップした、簡単な暗号化・復号化操作用のライブラリ
- [Highlighter](https://github.com/younatics/Highlighter) - 何でもハイライトできる！HighlighterはUILabel、UITextView、UITextField、UIButtonなどのUIオブジェクトをあなたのUITableViewCellやその他のクラス内で自動的に見つける。
- [Highlightr](https://github.com/raspu/Highlightr) - iOS および macOS 用の構文強調ツール。176言語をサポートし、79のスタイルを提供
- [Input Mask](https://github.com/RedMadRobot/input-mask-ios) - iOS向けパターンベースのユーザー入力フォーマッター、パーサーおよびバリデーション
- [libPhoneNumber-iOS](https://github.com/iziz/libPhoneNumber-iOS) - libphonenumber（Google の電話番号処理ライブラリ）の iOS ポート
- [MarkdownDisplayView](https://github.com/zjc19891106/MarkdownDisplayView) - TextKit 2 をベースにした強力な iOS マーカードレンダリングコンポーネント。スムーズなレンダリング性能と豊かなカスタマイズオプションを提供し、AI質問応答シナリオでのマーカード形式のストリーミングレンダリングを可能にする
- [MarkdownKit](https://github.com/bmoliveira/MarkdownKit) - Swift 用のシンプルかつカスタマイズ可能なマーカードパーサー
- [MarkdownTextView](https://github.com/indragiek/MarkdownTextView) - iOS 用の富マーカード編集コントロール
- [MarkdownView](https://github.com/keitaoouchi/MarkdownView) - iOS 用のマーカードビュー
- [Marklight](https://github.com/macteo/Marklight) - iOS 用のマーカード構文強調ツール
- [Marky Mark](https://github.com/m2mobi/Marky-Mark) - Swift 及びネイティブレンダリングを高カスタマイズ可能なマーカード解析
- [MMMarkdown](https://github.com/mdiep/MMMarkdown) - マーカードをHTMLに変換するためのObjective-Cのスタティックライブラリ
- [Mustard](https://github.com/mathewsanders/Mustard) - マスタードは、スペースで分割する場合に不十分な文字列のトークン化を行うSwiftライブラリです
- [Notepad](https://github.com/ruddfawcett/Notepad) - ライブシンタックスハイライトをサポートする、完全にテーマ可変のマークダウンエディタ。
- [NSStringEmojize](https://github.com/diy/nsstringemojize) - NSStringに追加されたカテゴリで、エモジーチェートシートコードをその対応するUnicode文字に変換します
- [PhoneNumberKit](https://github.com/marmelroy/PhoneNumberKit) - 国際電話番号のパース、フォーマット、検証を行うSwiftフレームワークです。Googleのlibphonenumberをインスピレーションとしています
- [Pluralize.swift](https://github.com/joshualat/Pluralize.swift) - 素晴らしいSwiftの文字列複数形拡張機能
- [Smile](https://github.com/onmyway133/Smile) Emoji in Swift.
- [Sprinter](https://github.com/nicklockwood/Sprinter) - iOSおよびmacOSでの文字列フォーマットに使えるライブラリです
- [SwiftRichString](https://github.com/malcommac/SwiftRichString) - Swiftでエレガントかつ手軽に属性文字列を管理するライブラリです
- [SwiftString](https://github.com/amayne/SwiftString) - Swift向けに包括的かつ軽量な文字列拡張機能です
- [SwiftyAttributes](https://github.com/eddiekaiger/SwiftyAttributes) - 属性文字列を扱いやすくするSwiftの拡張機能です
- [SwiftyMarkdown](https://github.com/SimonFairbairn/SwiftyMarkdown) - Markdownファイルや文字列をNSAttributedStringに変換します
- [SZMentionsSwift](https://github.com/szweier/SZMentionsSwift) - メンションの処理を支援するライブラリです
- [TextAttributes](https://github.com/delba/TextAttributes) - 属性文字列を組み立てるためのより簡単な方法。
- [Translucid](https://github.com/Ekhoo/Translucid) - 画像をテキストの背景として設定する軽量ライブラリです
- [Twitter Text Obj](https://github.com/twitter/twitter-text) - Twitterのテキスト処理ライブラ連携をObjective-Cで実装したものです
- [TwitterTextEditor](https://github.com/twitter/TwitterTextEditor) - スタンドアローンかつ柔軟なAPIで、iOSアプリにフル機能の豊富なテキストエディタを提供します
- [YYText](https://github.com/ibireme/YYText) - iOS向けに富士テキストを表示・編集する強力なテキストフレームワークです
- [ZSSRichTextEditor](https://github.com/nnhubbard/ZSSRichTextEditor) - iOS向けに、シンタックスハイライトされたソースビューを備えた美しい富士テキストWYSIWYGエディタです

**[back to top関連](#contributing-and-collaborating)**

### フォント <a id="font"></a>

*Icon fonts and font management utilities for iOS.*

- [Font-Awesome-Swift](https://github.com/Vaberer/Font-Awesome-Swift) - iOS向けFont AwesomeのSwiftライブラリです
- [FontAwesome.swift](https://github.com/thii/FontAwesome.swift) - SwiftプロジェクトでFontAwesomeを使用します
- [FontAwesomeKit](https://github.com/PrideChung/FontAwesomeKit) - iOS向けアイコンフォントライブラリです。現在はFont-Awesome、Foundationアイコン、Zocial、ioniconsをサポートしています
- [FontAwesomeKit.Swift](https://github.com/qiuncheng/FontAwesomeKit.Swift) - iOS開発者向けにFontAwesomeアイコンを使うより良い選択肢です
- [GoogleMaterialDesignIcons](https://github.com/dekatotoro/GoogleMaterialDesignIcons) - Google Material Design Iconsフォント（iOS向け）
- [GoogleMaterialIconFont](https://github.com/kitasuke/GoogleMaterialIconFont) - SwiftおよびObjCプロジェクト向けGoogle Material Design Icons
- [ios-fontawesome](https://github.com/alexdrone/ios-fontawesome) - NSString+FontAwesome.
- [SwiftIconFont](https://github.com/0x73/SwiftIconFont) - iOS用のアイコンフォント（FontAwesome、Iconic、Ionicon、Octicon、Themify、MapIcon、MaterialIcon）.
- [SwiftIcons](https://github.com/ranesr/SwiftIcons) - さまざまなフォントアイコンを使用するためのライブラリ：dripicons、emoji、font awesome、icofont、ionicons、linear icons、map icons、material icons、open iconic、state、weather。UIImage、UIImageView、UILabel、UIButton、UISegmentedControl、UITabBarItem、UISlider、UIBarButtonItem、UIViewController、UITextfield、UIStepperに対応。
- [UIFontComplete](https://github.com/Nirma/UIFontComplete) - iOSおよびtvOS向けのシステムおよびカスタムフォント管理

**[back to top関連](#contributing-and-collaborating)**



## UI関連 <a id="ui"></a>

*Ready-made UI components, controls and layout helpers for iOS.*

- [BackgroundVideoiOS](https://github.com/Guzlan/BackgroundVideoiOS) - SwiftおよびObjective-Cのオブジェクトで、iOSのビューに背景動画を追加できる。
- [BAFluidView](https://github.com/antiguab/BAFluidView) - 流体の動きを2次元でシミュレートするUIView。
- [BEMCheckBox](https://github.com/Boris-Em/BEMCheckBox#sample-app) - iOS用の美しいチェックボックス。
- [Cacao](https://github.com/PureSwift/Cacao) - 純SwiftによるクロスプラットフォームUIKit（Cocoa Touch）実装（Linux対応）。
- [ClassicKit](https://github.com/Baddaboo/ClassicKit) - iOS用のクラシックスタイルUIコンポーネントのコレクション。
- [ComponentKit](https://componentkit.org/) - Facebookが開発したReactをインスピレーションとして作成したiOS用ビューフレームワーク。
- [ConfettiView](https://github.com/OrRon/ConfettiView) - Confetti Viewは、アプリ内で素晴らしいコンフェッティビューを作成できる。
- [DCKit](https://github.com/agordeev/DCKit) - iOS用のコントロールセットで、有用なIBInspectableプロパティを備えている。Swiftで記述。
- [DistancePicker](https://github.com/qmathe/DistancePicker) - パンジェスティによって距離を選択できるカスタムコントロール。Swiftで記述。
- [DrawerKit](https://github.com/babylonhealth/DrawerKit) - DrawerKitは、UIViewControllerがAppleのマップアプリのように別のUIViewControllerをモーダルに表示できるようにする。
- [ElongationPreview](https://github.com/Ramotion/elongation-preview) - ElongationPreviewは、3D-Touchおよびジェスチャーをサポートする、洗練されたプッシュ・ポップスタイルのビュー制御。
- [EPSignature](https://github.com/ipraba/EPSignature) - Swiftで記述されたiOS用のサインフォームコンポーネント。
- [EVFaceTracker](https://github.com/evermeer/EVFaceTracker) - デバイスが顔に対してどの距離・角度にあるかを計算する。
- [FAQView](https://github.com/mukeshthawani/FAQView) - Swiftで記述されたiOS用の簡単なFAQビュー。
- [FDStackView](https://github.com/forkingdog/FDStackView) - iOSでUIStackViewを直接使用できる。
- [FlourishUI](https://github.com/thinkclay/FlourishUI) - 非常にカスタマイズ可能で、デフォルトで美しいUIライブラリ。
- [FSPagerView](https://github.com/WenchaoD/FSPagerView) - FSPagerViewは、洗練されたスクリーンスライドライブラリ。バナー、商品紹介、ようこそ/ガイドページ、スクリーン/ViewControllerスライダーを作成する際に非常に役立つ。
- [GaugeKit](https://github.com/skywinder/GaugeKit) - カスタマイズ可能なゲージ。Appleのスタイルのゲージを簡単に再現可能
- [Haptica](https://github.com/efremidze/Haptica) - 簡単なハプティックフィードバック生成ツール。
- [HorizontalDial](https://github.com/kciter/HorizontalDial) - インスタグラム風の水平スクロールダイアル
- [IGColorPicker](https://github.com/iGenius-Srl/IGColorPicker) - iOSでSwiftで作成できるカスタマイズ可能な色選択器
- [JDFlipNumberView](https://github.com/calimarkus/JDFlipNumberView) - 空港や駅のディスプレイのようにアナログ式のフリップ数字を表現
- [LeeGo](https://github.com/wangshengjia/LeeGo) - 宣言型・設定可能・高再利用性のUI開発（積み木のように構築）
- [LTHRadioButton](https://github.com/rolandleth/LTHRadioButton) - 美しいフィルアニメーション付きのラジオボタン
- [Macaw-Examples](https://github.com/exyte/Macaw-Examples) - Macawライブラリのさまざまな使い方
- [Material](https://github.com/CosmicMind/Material) - Materialはアニメーションとグラフィックスフレームワークで、開発者が美しいアプリケーションを簡単に作成できるようにする
- [MEVHorizontalContacts](https://github.com/manuelescrig/MEVHorizontalContacts) - iOSのUICollectionViewLayoutのサブクラスで、カスタマイズ可能な展開メニュー項目を持つ連絡先リストを表示
- [NotchKit](https://github.com/HarshilShah/NotchKit) - iPhone Xのノッチをシンプルに非表示にする方法
- [OAStackView](https://github.com/nsomar/OAStackView) - OAStackViewはiOS 7+にスタックビューを移植しようとする。OAStackViewはUIStackViewのすべての機能を再現することを目的としている
- [OverlayContainer](https://github.com/applidium/OverlayContainer) - オーバーレイベースのインターフェースを構築するためのライブラリ。iOS 12のApple MapsやStocksアプリで示されたものに該当。
- [Pageboy](https://github.com/uias/Pageboy) - シンプルで情報量豊富なページビュー制御
- [PageController](https://github.com/hirohisa/PageController) - 無限ページングコントローラー。コンテンツをスクロールする際、タイトルバーは遅延でスクロールする
- [Pages](https://github.com/hyperoslo/Pages) - UIPageViewControllerをシンプルに実装
- [Pulley](https://github.com/52inc/Pulley) - iOS 10のマップUIを模倣するライブラリ
- [RKNotificationHub](https://github.com/cwRichardKim/RKNotificationHub) - 任意のUIViewを通知センターとして完全に実装
- [SCTrelloNavigation](https://github.com/SergioChan/SCTrelloNavigation) - iOSでTrelloのアニメーションナビゲーションをネイティブに実装
- [SegmentedProgressBar](https://github.com/D-32/SegmentedProgressBar) - Snapchat／Instagramのストーリー風のアニメーションインジケータ
- [ShadowView](https://github.com/PierrePerrin/ShadowView) - UIViewにおけるシャドウ管理を簡単にする
- [Splitflap](https://github.com/yannickl/Splitflap) - Swiftアプリケーションにシンプルなスプリットフラップディスプレイを提供
- [STAControls](https://github.com/Stunner/STAControls ) – Handy UIControl subclasses. (Think Three20/NimbusKit of UIControls.) Written in Objective-C. 

**[back to top関連](#contributing-and-collaborating)**

### アクティビティ表示 <a id="activity-indicator"></a>

*Spinners, loaders and progress indicators.*

- [ActivityIndicatorView](https://github.com/exyte/ActivityIndicatorView) - SwiftUIで作成された複数のプリセットロードインジケータ
- [AlamofireNetworkActivityIndicator](https://github.com/Alamofire/AlamofireNetworkActivityIndicator) - Alamofireを使用してiOSでネットワーク活動インジケータの表示を制御
- [DACircularProgress](https://github.com/danielamitay/DACircularProgress) - DACircularProgressは、円形のUIProgressViewプロパティを持つUIViewのサブクラス
- [EZLoadingActivity](https://github.com/goktugyil/EZLoadingActivity) - 軽量なロードアクティビティHUD
- [FFCircularProgressView](https://github.com/elbryan/FFCircularProgressView) - FFCircularProgressView - iOS 7風の青い円形プログレスビュー
- [FillableLoaders](https://github.com/polqf/FillableLoaders) - Swiftで書かれたカスタムCGPathsを使用して、完全にカスタマイズ可能なプログレスベースのローダー
- [FlexibleSteppedProgressBar](https://github.com/amratab/FlexibleSteppedProgressBar) - 美しいかつカスタマイズしやすい段階的な進行バー
- [GearRefreshControl](https://github.com/andreamazz/GearRefreshControl) - UIRefreshControl用のカスタムアニメーション
- [GradientLoadingBar](https://github.com/fxm90/GradientLoadingBar) - アニメーション付きグラデーションロードバー
- [GradientProgressBar](https://github.com/fxm90/GradientProgressBar) - グラデーション進行バー（UIProgressView）
- [IHProgressHUD](https://github.com/Swiftify-Corp/IHProgressHUD) - シンプルなHUD、スレッド安全でiOS、tvOSおよびアプリ拡張に対応
- [iOS Circle Progress Bar](https://github.com/Eclair/CircleProgressBar) - iOS用の円形進行バー
- [iOS-CircleProgressView](https://github.com/CardinalNow/iOS-CircleProgressView) - このコントロールは、コードまたはインターフェースビルダーで円形進行ビューを作成・レンダリングできるようにします
- [KDCircularProgress](https://github.com/kaandedeoglu/KDCircularProgress) - Swiftで書かれたグラデーション付き円形進行ビュー
- [KYNavigationProgress](https://github.com/ykyouhei/KYNavigationProgress) - UINavigationControllerへのシンプルな拡張でUINavigationBarに進行状況を表示
- [LinearProgressBar](https://github.com/PhilippeBoisney/LinearProgressBar) - iOS用の線形進行バー（Google Material Designにインスピレーションを受けて）
- [LiquidLoader](https://github.com/yoavlt/LiquidLoader) - 液体アニメーション付きのスピナーローダーコンポーネント
- [Loader](https://github.com/Ekhoo/Loader) - Swiftで書かれた素晴らしいアニメーション付きスイッチアクティビティインジケーター
- [M13ProgressSuite](https://github.com/Marxon13/M13ProgressSuite) - iOSで進行情報を表示するための多くのツールを含むパッケージ
- [MBCircularProgressBar](https://github.com/MatiBot/MBCircularProgressBar) - インターフェースビルダーでIBDesignableを使用して編集可能な、円形かつアニメーション可能かつ高度にカスタマイズ可能な進行バー
- [MBProgressHUD](https://github.com/jdg/MBProgressHUD) - バックグラウンドスレッドで作業が行われているとき、透過的なHUDとインジケーターおよび/またはラベルを表示するためのドロップインクラス
- [MKProgress](https://github.com/kamirana4/MKProgress) - Swiftで書かれた軽量ProgressHUD。MBProgressHUD/SVProgressHUD/KVNProgressHUDに似た見た目。
- [MKRingProgressView](https://github.com/maxkonovalov/MKRingProgressView) - Apple WatchのActivityアプリに似た美しいリング／円形進行ビュー。Swiftで書かれたもの。
- [MRProgress](https://github.com/mrackwitz/MRProgress) - iOS向けの進行状況を可視化するためのドロップインコンポーネントのコレクション
- [NJKWebViewProgress](https://github.com/ninjinkun/NJKWebViewProgress) - UIWebView用の進行インターフェースライブラリ。このモジュールを使ってアプリ内ブラウザの進行バーを実装できます。
- [NVActivityIndicatorView](https://github.com/ninjaprox/NVActivityIndicatorView) - 良いロードアニメーションを集めたコレクション。
- [PKHUD](https://github.com/pkluz/PKHUD) - iOS 8以降のApple HUD（音量、リンガー、回転など）をSwiftベースで再実装
- [ProgressHUD](https://github.com/relatedcode/ProgressHUD) - ProgressHUDは軽量で使いやすいHUDです。
- [ProgressIndicatorView](https://github.com/exyte/ProgressIndicatorView) - SwiftUIで作成された複数のプリセット進行インジケーター
- [RHPlaceholder](https://github.com/robertherdzik/RHPlaceholder) - Facebookのようなロード状態をビューに追加できるシンプルなライブラリです
- [RPLoadingAnimation](https://github.com/naoyashiga/RPLoadingAnimation) - SwiftのCALayerを使ってロードアニメーションを実現
- [RSLoadingView](https://github.com/roytornado/RSLoadingView) - Swiftで書かれた3Dエンジンによる素晴らしいロードアニメーション
- [Skeleton](https://github.com/gonzalonunez/Skeleton) - スライディングCAGradientLayerアニメーションを作成する簡単な方法！コンテンツのロード時のスケルトンスクリーン作成に最適です
- [SkeletonView](https://github.com/Juanpe/SkeletonView) - ユーザーに何かが起きていることを示し、待機するコンテンツの内容を事前に準備するための洗練された方法
- [SnapTimer](https://github.com/andresinaka/SnapTimer) - スナップチャットのストーリータイマーの実装
- [StatusBarOverlay](https://github.com/IdleHandsApps/StatusBarOverlay) - アプリが接続を失ったり取得したりした際に自動的に「インターネット接続なし」バーを表示・非表示します。ステータスバーを非表示または「ノッチ」を隠すアプリにも対応しています
- [STLoadingGroup](https://github.com/saitjr/STLoadingGroup) - ロードビュー
- [SVProgressHUD](https://github.com/SVProgressHUD/SVProgressHUD) - iOSアプリ用のシンプルで軽量な進行状態のHUD
- [SwiftSpinner](https://github.com/icanzilb/SwiftSpinner) - Swiftでblur効果、透過性、フラットかつボリュームデザインを用いた美しいアクティビティインジケータとモーダルアラート
- [VHUD](https://github.com/xxxAIRINxxx/VHUD) Simple HUD.
- [Windless](https://github.com/Interactive-Studio/Windless) - Windlessにより、見えないレイアウトの読み込みビューを簡単に実装可能。
- [WSProgressHUD](https://github.com/devSC/WSProgressHUD) - iPhoneおよびiPad用の美しいHUDビュー
- [YLProgressBar](https://github.com/yannickl/YLProgressBar) - 純粋なCore Graphicsで実装された、高度かつ完全にカスタマイズ可能なアニメーションプログレスバーによるUIProgressViewの代替

**[back to top関連](#contributing-and-collaborating)**

### アニメーション <a id="animation"></a>

*Animation frameworks, keyframe players and motion utilities.*

- [ADPuzzleAnimation](https://github.com/Antondomashnev/ADPuzzleAnimation) - Fabric - AnswersアニメーションにインスパイアされたUIViewのカスタムアニメ術
- [ADPuzzleAnimation](https://github.com/Antondomashnev/ADPuzzleAnimation) - Fabric - AnswersアニメーションにインスパイアされたUIViewのカスタムアニメ術
- [AGInterfaceInteraction](https://github.com/agilie/AGInterfaceInteraction) - ライブラリがUIインターフェースと相互作用します
- [AGInterfaceInteraction](https://github.com/agilie/AGInterfaceInteraction) - ライブラリがUIインターフェースと相互作用します
- [AHKBendableView](https://github.com/fastred/AHKBendableView) - 位置が変化した際にエッジを湾曲させるUIViewのサブクラス
- [AHKBendableView](https://github.com/fastred/AHKBendableView) - 位置が変化した際にエッジを湾曲させるUIViewのサブクラス
- [anim](https://github.com/onurersel/anim) - iOS向けのカスタムエイジングと使いやすいAPIを備えたアニメーションライブラリ
- [anim](https://github.com/onurersel/anim) - iOS向けのカスタムエイジングと使いやすいAPIを備えたアニメーションライブラリ
- [Anima](https://github.com/satoshin21/Anima) - AnimaはSwift4向けの、階層ベースのアニメーションライブラリで、連鎖可能。
- [Anima](https://github.com/satoshin21/Anima) - AnimaはSwift4向けの、階層ベースのアニメーションライブラリで、連鎖可能。
- [AnimatedCollectionViewLayout](https://github.com/KelvinJin/AnimatedCollectionViewLayout) - UICollectionViewLayoutのサブクラスで、UICollectionViewにカスタムトランジションやアニメーションを追加。
- [AnimatedCollectionViewLayout](https://github.com/KelvinJin/AnimatedCollectionViewLayout) - UICollectionViewLayoutのサブクラスで、UICollectionViewにカスタムトランジションやアニメーションを追加。
- [Animo](https://github.com/eure/Animo) - CALayer向けのSpriteKitのようなアニメーションビルダー。
- [AppAnimations](http://www.appanimations.com) - iOS向けのアニメーションのコレクションで、次のプロジェクトをインスピレーションを得る。
- [Cheetah](https://github.com/suguru/Cheetah) - iOS向けの簡単なアニメーションライブラリ。
- [CKWaveCollectionViewTransition](https://github.com/CezaryKopacz/CKWaveCollectionViewTransition) - 2つ以上のUICollectionView間の、波のようなカッコイイトランジション。
- [CurryFire](https://github.com/devinross/curry-fire) - ユニークなアニメーションを作成するためのフレームワーク。
- [Dance](https://github.com/saoudrizwan/Dance) - iOS向けの極めて革新的で洗練されたアニメ及動画ライブラリ。
- [Dance](https://github.com/saoudrizwan/Dance) - iOS向けの極めて革新的で洗練されたアニメ及動画ライブラリ。
- [DCAnimationKit](https://github.com/daltoniam/DCAnimationKit) - iOS向けのアニメーションのコレクション。シンプルで、水のアニメーションを簡単に追加。
- [Ease](https://github.com/roberthein/Ease) - Easeですべてをアニメーション
- [Ease](https://github.com/roberthein/Ease) - Easeですべてをアニメーション
- [EasyAnimation](https://github.com/icanzilb/EasyAnimation) - UIView.animateWithDuration()の力をSwiftでさらに高めることを可能にするライブラリ。レイヤー、スプリング、連鎖可能なアニメーション、およびビュー/レイヤーのアニメーションを組み合わせる。
- [fireworks](https://github.com/tomkowz/fireworks) - UIView向けの花火効果。
- [fireworks](https://github.com/tomkowz/fireworks) - UIView向けの花火効果。
- [FlightAnimator](https://github.com/AntonTheDev/FlightAnimator) - 高度な自然な動きアニメーション、シンプルなブロックベースの構文。
- [FlightAnimator](https://github.com/AntonTheDev/FlightAnimator) - 高度な自然な動きアニメーション、シンプルなブロックベースの構文。
- [Gemini](https://github.com/shoheiyokoyama/Gemini) - GeminiはSwiftで書かれた、iOS向けの豊かなスクロールベースのアニメーションフレームワーク。
- [Interpolate](https://github.com/marmelroy/Interpolate) - ジェスチャ駆動アニメーション向けのSwiftの補間。
- [JHChainableAnimations](https://github.com/jhurray/JHChainableAnimations) - Objective-Cで読みやすく、書きやすい連鎖可能なアニメーション。
- [JRMFloatingAnimation](https://github.com/carleihar/JRMFloatingAnimation) - Floating image viewを作成するためのObjective-Cアニメーションライブラリ。
- [LoadingShimmer](https://github.com/jogendra/LoadingShimmer) - 1行のコードで任意のビューにシャイマー効果を追加できるシンプルな方法。これは非侵襲的な読み込みインジケーターとして有用。
- [Lottie](https://github.com/airbnb/lottie-ios) - Adobe After Effectsから直接なベクターアニメーションをリアルタイムでレンダリングするiOS用ライブラリ
- [MotionAnimation](https://github.com/lkzhao/MotionAnimation) - UIKit用の軽量アニメーションライブラリ
- [MotionBlur](https://github.com/fastred/MotionBlur) - MotionBlurはiOSアニメーションに動きのぼかし効果を追加できる
- [Pastel](https://github.com/cruisediary/Pastel) - インスタグラムのようなグラデーションアニメーション効果
- [PMTween](https://github.com/poetmountain/PMTween) - iOS用の洗練された柔軟なアニメーションライブラリ
- [RippleEffectView](https://github.com/alsedi/RippleEffectView) - RippleEffectView - すっきりとした波紋効果のビュー
- [SamuraiTransition](https://github.com/hachinobu/SamuraiTransition) - SwiftベースのViewControllerのトランジションを提供する、さまざまな「カット」アニメーションを備えたライブラリ
- [Sica](https://github.com/cats-oss/Sica) - シンプルなインターフェースコアアニメーション。型安全なアニメーションを順次または並列で実行可能
- [SPPerspective](https://github.com/ivanvorobei/SPPerspective) - Widgets iOS 14のアニメーション。3Dおよび動的シャドウ。カスタマイズ可能な変換と持続時間
- [Spruce iOS Animation Library](https://github.com/willowtreeapps/spruce-ios) - スクリーン上のアニメーションを演出するためのSwiftライブラリ
- [Stellar](https://github.com/AugustRush/Stellar) - Swift用の素晴らしい物理アニメーションライブラリ
- [SwiftyAnimate](https://github.com/rchatham/SwiftyAnimate) - Swiftで組み立て可能なアニメーション
- [TheAnimation](https://github.com/marty-suzuki/TheAnimation) - 型安全なCAAnimationのラッパー。誤った型の値を設定するのを防ぐ
- [TweenKit](https://github.com/SteveBarnegren/TweenKit) - SwiftでiOS用のアニメーションライブラリ
- [Twinkle](https://github.com/piemonte/Twinkle) - iOSおよびtvOSアプリ内の要素をきらきらとさせる、シンプルで簡単な方法
- [ViewAnimator](https://github.com/marcosgriselli/ViewAnimator) - ViewAnimatorは、1行のコードでUIを生き生きとさせます
- [WaterDrops](https://github.com/LeFal/WaterDrops) - iOS用のシンプルな水滴アニメーション
- [WXWaveView](https://github.com/WelkinXie/WXWaveView) - ビューに美しい水波を追加します
- [YetAnotherAnimationLibrary](https://github.com/lkzhao/YetAnotherAnimationLibrary) - ジェスチャ駆動アニメーションに特化した。速い、シンプルで拡張性がある！
- [ZoomTransitioning](https://github.com/WorldDownTown/ZoomTransitioning) - 画像のズームアニメーションを含むカスタムトランジション

**[back to top関連](#contributing-and-collaborating)**

### トランジション <a id="transition"></a>

*Custom view controller and navigation transition libraries.*

- [AnimatedTransitionGallery](https://github.com/shu223/AnimatedTransitionGallery) - iOS 7用のカスタムアニメーショントランジションのコレクション。UIViewControllerAnimatedTransitioningプロトコルを使用
- [AppstoreTransition](https://github.com/appssemble/appstore-card-transition) - アプリストアカードのアニメーショントランジションをシミュレート
- [AZTransitions](https://github.com/azimin/AZTransitions) - 素晴らしいカスタムトランジイションを1メソッドで作成できるAPI
- [BlurryModalSegue](https://github.com/Citrrus/BlurryModalSegue) - カスタムモーダルセグを提供し、ぼかしオーバーレイ効果を実現します。
- [BubbleTransition](https://github.com/andreamazz/BubbleTransition) - カスタムモーダル遷移で、拡大するバブル効果を用いてコントローラーを表示および閉じる。
- [DAExpandAnimation](https://github.com/ifitdoesntwork/DAExpandAnimation) - カスタムモーダル遷移で、プレゼンターの残り部分をスライドアウトしながら、コントローラーに拡大効果を表示する。
- [DeckTransition](https://github.com/HarshilShah/DeckTransition) - iOSのApple Musicの現在再生画面遷移を再現するためのライブラリ。
- [ElasticTransition](https://github.com/lkzhao/ElasticTransition) - Swiftで書かれたUIKitのカスタムトランジションで、弾性ドラッグをシミュレートします。
- [ElasticTransition-ObjC](https://github.com/taglia3/ElasticTransition-ObjC) - UIKitのカスタムトランジションで、弾性ドラッグをシミュレートします。これはlkzhaoがSwiftで書いたElastic TransitionのObjective-Cバージョンです。
- [Gagat](https://github.com/Boerworz/Gagat) - iOSアプリケーションにおける視覚スタイルの切り替えに楽しい方法を提供します。
- [Hero](https://github.com/HeroTransitions/Hero) - iOSおよびtvOS向けの美しいトランジションライブラリ。
- [JTMaterialTransition](https://github.com/jonathantribouharet/JTMaterialTransition) - マテリアルデザインに基づくiOSのコントローラー間の遷移。
- [Kaeru](https://github.com/bannzai/Kaeru) - iOSタスクマネージャーのようにビュー制御コンターラを切り替えます。
- [LiquidSwipe](https://github.com/exyte/LiquidSwipe) - 液体ナビゲーションアニメーション
- [Motion](https://github.com/CosmicMind/Motion) - スウィフトでのスムーズなアニメーションとトランジション
- [NavigationTransitions](https://github.com/davdroman/swiftui-navigation-transitions) - 純粋なSwiftUIナビゲーショントランジション
- [RMPZoomTransitionAnimator](https://github.com/recruit-mp/RMPZoomTransitionAnimator) - UIViewController用のカスタムズーム遷移アニメーション。
- [SPStorkController](https://github.com/IvanVorobei/SPStorkController) - Apple Music、PodcastsおよびMailのアプリで表示されているコントローラーに非常に似ています。
- [TBIconTransitionKit](https://github.com/AlexeyBelezeko/TBIconTransitionKit) - 使いやすいアイコンのトランジションキットで、一つの形状から別の形状にスムーズに変更できます。
- [Transition](https://github.com/Touchwonders/Transition) - インタラクティブで中断可能なカスタムViewController遷移を簡単に実現。
- [TransitionableTab](https://github.com/ParkGwangBeom/TransitionableTab) - タブ間の切り替え時にアニメーションを簡単に実現します。
- [View2ViewTransition](https://github.com/naru-jpn/View2ViewTransition) - カスタムインタラクティブなビュー制御の遷移：一つのビューから別のビューへ。
- [ZFDragableModalTransition](https://github.com/zoonooz/ZFDragableModalTransition) - カスタムアニメーションでモーダルビュー制御を表示
- [ZOZolaZoomTransition](https://github.com/NewAmsterdamLabs/ZOZolaZoomTransition) - ズーム遷移で全体のビュー階層をアニメーションする。Zola iOSアプリで広く使用されている。

**[back to top関連](#contributing-and-collaborating)**

### アラート／アクションシート <a id="alert--action-sheet"></a>

*Alerts, toasts, action sheets and banner-style notifications.*

- [Alertift](https://github.com/sgr-ksmt/Alertift) - スウィーフィー、現代的なUIAlertControllerのラッパー。
- [Alerts & Pickers](https://github.com/dillidon/alerts-and-pickers) - ナティブのUIAlertControllerの高度な使用法：TextField、DatePicker、PickerView、TableViewおよびCollectionViewの実装。
- [BottomSheet](https://github.com/joomcode/BottomSheet) - コンテンツサイズに基づき、インタラクティブな閉じ方とナビゲーションコントローラーをサポートする強力なボトムシートコンポーネント
- [BPStatusBarAlert](https://github.com/ppth0608/BPStatusBarAlert) - ステータスバーおよびナビゲーションバーの下に表示されるシンプルなアラート（Facebookのように）
- [BRYXBanner](https://github.com/bryx-inc/BRYXBanner) - iOS 7以降向けの軽量ドロップダウン通知（Swiftで作成）
- [BulletinBoard](https://github.com/alexaubry/BulletinBoard) - iOS上でボトムカードインターフェースを生成・表示
- [CDAlertView](https://github.com/candostdagdeviren/CDAlertView) - 高度にカスタマイズ可能なアラート／通知／成功／エラー／アラームポップアップ。
- [CFAlertViewController](https://github.com/Codigami/CFAlertViewController) - iPadおよびiPhone上でアラートやアクションシートを表示・カスタマイズするためのライブラリ
- [CFNotify](https://github.com/JT501/CFNotify) - ドラッグ可能なビューを作成するためのカスタマイズ可能なフレームワーク
- [CleanyModal](https://github.com/loryhuz/CleanyModal) - シンプルでカスタマイズ可能なアラートおよびアクションシートを簡単に使用可能。APIはネイティブのUIAlertControllerと類似。
- [CRToast](https://github.com/cruffenach/CRToast) - 現代的なiOS用トーストビューで、通知ニーズに最適化。
- [CustomizableActionSheet](https://github.com/beryu/CustomizableActionSheet) - アクションシートにカスタムビューおよびボタンを含める機能を提供。
- [DOAlertController](https://github.com/okmr-d/DOAlertController) - Swiftで書かれたシンプルなアラートビュー。UIAlertControllerとして使用可能。（AlertController/AlertView/ActionSheet）。
- [Dodo](https://github.com/evgenyneu/Dodo) - Swiftで書かれたiOS用メッセージバー。
- [EZAlertController](https://github.com/thellimist/EZAlertController) - 簡単でカスタマイズ可能なSwift版UIAlertController。
- [FCAlertView](https://github.com/krispenney/FCAlertView) - iOS向けのフラットカスタマイズ可能アラートビュー（Swift）。
- [FCAlertView](https://github.com/nimati/FCAlertView) - iOS向けのフラットカスタマイズ可能アラドビュー（Objective-C）。
- [FloatingActionSheetController](https://github.com/ra1028/FloatingActionSheetController) - FloatingActionSheetControllerはSwiftで書かれた魅力的なデザインのアクションシートコントローラーライブラリ。
- [GSMessages](https://github.com/wxxsw/GSMessages) - iOS 7以降向けのシンプルなスタイルのメッセージ／通知。
- [HDNotificationView](https://github.com/nhdang103/HDNotificationView) - すべてのアラートにネイティブの通知バナーUIをエミュレート。
- [Hokusai](https://github.com/ytakzk/Hokusai) - Swiftで提供されるバウンス効果を持つアクションシートライブラリ。
- [InAppNotify](https://github.com/lucabecchetti/InAppNotify) - Swiftで作成されたアプリ内通知管理ライブラリ（WhatsApp、Telegram、Frindなどに類似）。
- [JDStatusBarNotification](https://github.com/calimarkus/JDStatusBarNotification) - ステータスバーの上に表示される簡単でカスタマイズ可能な通知。
- [Jelly](https://github.com/SebastianBoldt/Jelly) - Jellyは、わずかなコードでカスタムビュー制御トランジションを提供
- [JLToast](https://github.com/devxoul/Toaster) - 非常にシンプルなインターフェースを持つiOS用トースト。
- [LCActionSheet](https://github.com/iTofu/LCActionSheet) - シンプルなアクションシート。WeChat、Weibo、QQはすべて類似スタイルを使用。完全にSwift対応。
- [LNRSimpleNotifications](https://github.com/LISNR/LNRSimpleNotifications) - シンプルなSwiftによるアプリ内通知。LNRSimpleNotificationsはTSMessagesのSwift版を簡略化したものです。
- [Loaf](https://github.com/schmidyy/Loaf) - iOS用の簡単なトーストフレームワーク。
- [Malert](https://github.com/vitormesquita/Malert) - MalertはSwiftで書かれたシンプルで使いやすくカスタマイズ可能なiOS UIAlertViewです。
- [NoticeBar](https://github.com/qiuncheng/NoticeBar) - Swift 3で書かれたシンプルな通知バーで、QQの通知ビューに似ています。
- [NotificationBanner](https://github.com/Daltron/NotificationBanner) - iOSで高度にカスタマイのインアプリ通知バナーを表示する最も簡単な方法。
- [NYAlertViewController](https://github.com/nealyoung/NYAlertViewController) - 高度にカスタマイズ可能なiOSのアラートビューで、カスタムコンテンツビューをサポート。
- [PCLBlurEffectAlert](https://github.com/hryk224/PCLBlurEffectAlert) - SwiftによるアラートコントローラーにUIVisualEffectViewを組み合わせたもの。
- [PMAlertController](https://github.com/pmusolino/PMAlertController) - PMAlertControllerは、UIAlertControllerへの優れたかつカスタマイズ可能な代替です
- [PopMenu](https://github.com/CaliCastle/PopMenu) - カッコイイかつカスタマイズ可能なポップアップスタイルアクションシート 😎
- [RKDropdownAlert](https://github.com/cwRichardKim/RKDropdownAlert) - 極めてシンプルなUIAlertViewの代替品。
- [RMActionController](https://github.com/CooperRS/RMActionController) - UIAlertControllerのように任意のUIViewを表示できる。
- [RMDateSelectionViewController](https://github.com/CooperRS/RMDateSelectionViewController) - UIAlertControllerのようなスタイルでUIDatePickerを使って日付を選択できる。
- [RMessage](https://github.com/donileo/RMessage) - ObjCで構築されたクリアで洗練されたアプリ内通知/メッセージバナー。
- [RMPickerViewController](https://github.com/CooperRS/RMPickerViewController) - UIAlertControllerのようなスタイルでUIPickerViewを使って選択できる。
- [SCLAlertView-Swift](https://github.com/vikmeup/SCLAlertView-Swift) - 美しいアニメーション付きアラートビュー、Swiftで書かれたものです。
- [Sheet](https://github.com/ParkGwangBeom/Sheet) - SHEETは、Flipboardアプリに使われるナビゲーション機能を備えた多様なアクションシートを簡単に作成できるツールです。
- [SimpleAlert](https://github.com/KyoheiG3/SimpleAlert) - Swift向けのカスタマイズ可能なシンプルアラートとシンプルアクションシート。
- [SPAlert](https://github.com/IvanVorobei/SPAlert) - Apple MusicおよびAppStoreのフィードバックから生まれたネイティブポップアップ。DoneとHeartのプレセットを含みます
- [StatusAlert](https://github.com/LowKostKustomz/StatusAlert) - ユーザーのフローを中断せずに、Appleシステムのように自ら隠れるステータスアラートを表示します
- [SweetAlert](https://github.com/codestergit/SweetAlert-iOS) - Swiftで書かれたiOS用ライブアニメーションアラートビュー。
- [Swift-Prompts](https://github.com/GabrielAlva/Swift-Prompts) - Swiftで書かれた、カスタムプロンプトを設計するための非常に柔軟なライブラリで、多くの選択肢が用意されています。
- [SwiftMessages](https://github.com/SwiftKickMobile/SwiftMessages) - Swiftで書かれた非常に柔軟なiOS用メッセージバー。
- [SwiftNotice](https://github.com/johnlui/SwiftNotice) - SwiftNoticeは純粋なSwiftで書かれたGUIライブラリで、さまざまなポップアップ（HUD）を表示できます。スクロールビューに適合します。
- [SwiftOverlays](https://github.com/peterprokop/SwiftOverlays) - SwiftOverlaysはSwiftで書かれたGUIライブラのポップアップと通知を表示するためのライブラリ。
- [TKSwarmAlert](https://github.com/entotsu/TKSwarmAlert) - Swarmアプリのようなアニメーション付きアラートライブラリ。
- [TOActionSheet](https://github.com/TimOliver/TOActionSheet) - iOS用UIActionSheetコントロールのカスタム設計再実装
- [Toast-Swift](https://github.com/scalessec/Toast-Swift) - SwiftによるUIViewクラスにトースト通知を追加する拡張機能
- [TTGSnackbar](https://github.com/zekunyan/TTGSnackbar) - スクリーンの下部にシンプルなメッセージとアクションボタンを表示し、複数のアニメーションを提供
- [XLActionController](https://github.com/xmartlabs/XLActionController) - Swiftで書かれた完全にカスタマイズ可能かつ拡張可能なアクションシートコントロール

**[back to top関連](#contributing-and-collaborating)**

### Badge関連 <a id="badge"></a>

*Notification and count badges for UI elements.*

- [BadgeHub](https://github.com/jogendra/BadgeHub) - 任意のUIViewを完全にアニメーションされた通知センターに変換します。これは、UIViewに通知バッジアイコンを迅速に追加する方法です
- [EasyNotificationBadge](https://github.com/Minitour/EasyNotificationBadge) - UIViewに通知バッジを追加する拡張機能。[e]
- [MIBadgeButton](https://github.com/mustafaibrahim989/MIBadgeButton-Swift) - UIButtonsに通知バッジを追加
- [swift-badge](https://github.com/evgenyneu/swift-badge) - Swiftで書かれたiOS用バッジビュー

**[back to top関連](#contributing-and-collaborating)**

### ボタン <a id="button"></a>

*Customizable button controls and helpers.*

- [BEMCheckBox](https://github.com/Boris-Em/BEMCheckBox) - iOS用の美しいチェックボックス（チェックボックス）
- [ButtonProgressBar-iOS](https://github.com/thePsguy/ButtonProgressBar-iOS) - アニメーション付きロード進行状況と完了アニメーションを備えた小さな柔軟なUIButtonサブクラス
- [DOFavoriteButton](https://github.com/okmr-d/DOFavoriteButton) - Swiftで書かれたかわいいアニメーションボタン
- [DynamicButton](https://github.com/yannickl/DynamicButton) - Swiftで書かれたもう一つのアニメーションフラットボタン
- [EasySocialButton](https://github.com/Minitour/EasySocialButton) - 美しいソーシャル認証ボタンを簡単に作成できる方法
- [FloatingButton](https://github.com/exyte/FloatingButton) - SwiftUIで作成された簡単にカスタマイズ可能なフロートボタンメニュー
- [Floaty](https://github.com/kciter/Floaty) - :heart: iOS用フローティングアクションボタン
- [HTPressableButton](https://github.com/Famolus/HTPressableButton) - フラットデザインの押下可能なボタン
- [JOEmojiableBtn](https://github.com/lojals/JOEmojiableBtn) - Facebook反応のようにemojiを選択する機能
- [LGButton](https://github.com/loregr/LGButton) - ネイティブのUIControlの完全にカスタマイズ可能なサブクラスであり、コードを1行も書かずに美しいボタンを作成可能
- [LiquidFloatingActionButton](https://github.com/yoavlt/LiquidFloatingActionButton) - 液体状態のマテリアルデザインフローティングアクションボタン
- [OnOffButton](https://github.com/rakaramos/OnOffButton) - CreativeDashによるSwiftで書かれたカスタムオン/オフアニメーションUIButton
- [PMSuperButton](https://github.com/pmusolino/PMSuperButton) - ストーリーボードからカスタマイズ可能な強力なUIButton
- [SSBouncyButton](https://github.com/StyleShare/SSBouncyButton) - iOS7スタイルのバウンスボタンUIコンポーネント
- [SwiftyButton](https://github.com/TakeScoop/SwiftyButton) - Swiftで書かれたシンプルかつカスタマイズ可能なボタン
- [TORoundedButton](https://github.com/TimOliver/TORoundedButton) - 角を丸くした高性能のボタンコントロール
- [TransitionButton](https://github.com/AladinWay/TransitionButton) - ロードおよびトランジションアニメーションを実現するUIButtonのサブクラス
- [VBFPopFlatButton](https://github.com/victorBaro/VBFPopFlatButton) - Facebook POPを使用して9つの状態をアニメーション化したフラットボタン
- [WCLShineButton](https://github.com/imwcl/WCLShineButton) - これはiOS用のUIライブラリです。光を放つような効果を提供します
- [ZFRippleButton](https://github.com/zoonooz/ZFRippleButton) - Google Material Designをインスピレーションとして作ったカスタムUIButton効果

**[back to top関連](#contributing-and-collaborating)**

### カレンダー <a id="calendar"></a>

*Calendar views, date pickers and schedule components.*

- [ASCalendar](https://github.com/scamps88/ASCalendar) - SwiftでMVVMパターンを使用したiOS用カレンダーコントロール
- [Calendar](https://github.com/jumartin/Calendar) - iOS上でイベントの表示およびスケジューリングを行うためのビューとコントローラーのセット
- [CalendarKit](https://github.com/richardtop/CalendarKit) - 完全にカスタマイズ可能なカレンダー日別ビュー
- [CalendarPopUp](https://github.com/orazz/CalendarPopUp) - CalendarPopUp - JTAppleCalendarライブラリ
- [CVCalendar](https://github.com/CVCalendar/CVCalendar) - Swift（2.0）で書かれたiOS8以降用のカスタム視覚カレンダー
- [DateTimePicker](https://github.com/itsmeichigo/DateTimePicker) - 日時を選択するためのより良いiOS UIコンポーネント
- [Daysquare](https://github.com/unixzii/Daysquare) - iOS用の洗練されたカレンダーコントロール
- [ElegantCalendar](https://github.com/ThasianX/ElegantCalendar) - SwiftUIで欠けている洗練されたフルスクリーンカレンダー
- [FSCalendar](https://github.com/WenchaoD/FSCalendar) - Objective-CおよびSwiftに対応する完全にカスタマイズ可能なiOSカレンダーライブラリ
- [GLCalendarView](https://github.com/Glow-Inc/GLCalendarView) - 完全にカスタマイズ可能なカレンダービュー（日付範囲選択用）
- [ios_calendar](https://github.com/maximbilan/Calendar-iOS)  - 軽量でシンプルなコントロール。ロケールとカレンダーIDをサポート。iPhoneおよびiPad用のサンプル、ポップオーバーでの使用もサポート。ペルシャカレンダーをサポート
- [JTAppleCalendar](https://github.com/patchthecode/JTAppleCalendar) - 公式ではないSwift Appleカレンダーライブラリ。iOSおよびtvOS用のビュー・コントロール
- [JTCalendar](https://github.com/jonathantribouharet/JTCalendar) - iOS用のカスタマイズ可能なカレンダービュー
- [KDCalendarView](https://github.com/mmick66/CalendarView) - Swift 4.0で書かれたiOS用カレンダーコンポーネント。縦横のレイアウト（スクロール）と、本カレンダーイベントの表示を備えています
- [MBCalendarKit](https://github.com/MosheBerman/MBCalendarKit) - カスタマイズとローカライズを意識したiOS用カレンダーフレームワーク
- [RSDayFlow](https://github.com/ruslanskorb/RSDayFlow) - iOS 7以降のカレンダー（無限スクロール付き）

**[back to top関連](#contributing-and-collaborating)**

### カード <a id="cards"></a>

*Card based UI's, pan gestures, flip and swipe animations*

- [CardAnimation](https://github.com/seedante/CardAnimation) - パンジェストによるカードの翻転アニメーション
- [CardParts](https://github.com/intuit/CardParts) - UIKitに基づいた反応型、カードベースのUIフレームワーク
- [Cards](https://github.com/PaoloCuscela/Cards) - iOS 11のAppStoreのカードビュー
- [CardsLayout](https://github.com/filletofish/CardsLayout) - カスタムのコレクションビューレイアウトにカードデザインを採用
- [DMSwipeCards](https://github.com/D-32/DMSwipeCards) - タインダー風のカードスタックで遅延読み込みとジェネリクスをサポート
- [Koloda](https://github.com/Yalantis/Koloda) - KolodaViewは、iOS上でタインダー風のカードを実装しやすくするクラスです
- [MDCSwipeToChoose](https://github.com/modocache/MDCSwipeToChoose) - スワイプで「いいね」または「いいえ」を表示する、タインダー.appと同じようにビューに対して操作。数分でフラッシュカードアプリ、写真閲覧アプリなどを構築！
- [Shuffle](https://github.com/mac-gallagher/Shuffle) - タインダーにインスパイアされた多方向カードスワイプライブラリ
- [TisprCardStack](https://github.com/tispr/tispr-card-stack) - カードUIを実現できるライブラリ
- [VerticalCardSwiper](https://github.com/JoniVR/VerticalCardSwiper) - Shazam Discover UIとタインダーの融合、SwiftでUICollectionViewを使用した実装

**[back to top関連](#contributing-and-collaborating)**

### フォーム／設定 <a id="form--settings"></a>

*Input validators, form helpers and form builders.*

- [Eureka](https://github.com/xmartlabs/Eureka) - スウィフトによるエレガントなiOSフォームビルダー
- [Formalist](https://github.com/seedco/Formalist) - iOS向けの宣言型フォームビルディングフレームワーク
- [Former](https://github.com/ra1028/Former) - Formerは、Swift2で作成された完全にカスタマイズ可能なUITableViewベースのフォーム作成ライブラリです
- [formvalidator-swift](https://github.com/ustwo/formvalidator-swift) - テキストフィールドやテキストビューの入力値を便利に検証できるフレームワーク
- [GenericPasswordRow](https://github.com/EurekaCommunity/GenericPasswordRow) - Eurekaにパスワード検証を実装するための行
- [SwiftValidator](https://github.com/SwiftValidatorCommunity/SwiftValidator) - Swift向けのルールベースの検証ライブラリ
- [SwiftyFORM](https://github.com/neoneye/SwiftyFORM) - SwiftyFORMは、Swiftで書かれたiOS向けフォームフレームワーク
- [ValidatedPropertyKit](https://github.com/SvenTiigi/ValidatedPropertyKit) - プロパティの検証をProperty Wrappersで簡単に実行
- [XLForm](https://github.com/xmartlabs/XLForm) - XLFormは、動的テーブルビューフォームを作成する最も柔軟で強力なiOSライブラリ。SwiftおよびObj-Cと完全に互換。

**[back to top関連](#contributing-and-collaborating)**

### キーボード <a id="keyboard"></a>

*Keyboard avoidance, custom keyboards and input helpers.*

* [RSKKeyboardAnimationObserver](https://github.com/ruslanskorb/RSKKeyboardAnimationObserver) - シンプルなUIViewControllerカテゴリでキーボードの表示／非表示アニメーション
* [RFKeyboardToolbar](https://github.com/ruddfawcett/RFKeyboardToolbar) - 柔軟なUIViewおよびUIButtonのサブクラスで、UITextFields/UITextViewsにカスタムボタンやツールバーを追加可能
* [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) - コードを書かずに挿入可能なユニバーサルライブラリにより、キーボードが上にスライドする問題を防止できます。UITextField/UITextViewをカバーします。
* [NgKeyboardTracker](https://github.com/meiwin/NgKeyboardTracker) - iOSアプリでのキーボードの追跡用のObjective-Cライブラリ
* [MMNumberKeyboard](https://github.com/matmartinez/MMNumberKeyboard) - 数字を使用するシンプルなキーボード（オプションで小数点も）
* [KeyboardObserver](https://github.com/morizotter/KeyboardObserver) - キーボードイベントの処理が簡単な場合向け
* [TPKeyboardAvoiding](https://github.com/michaeltyson/TPKeyboardAvoiding) - iOSでテキストフィールドをキーボードの上に移動させるためのすぐに使えるのユニバーサルソリューション
* [YYKeyboardManager](https://github.com/ibireme/YYKeyboardManager) - iOS用ユーティリティクラスでキーボードビューにアクセスし、キーボードアニメーションを追跡可能
* [KeyboardMan](https://github.com/nixzhu/KeyboardMan) - KeyboardManはキーボードアニメーションを作成を助ける
* [MakemojiSDK](https://github.com/makemoji/MakemojiSDK) - EmojiキーボードSDK（iOS）
* [Typist](https://github.com/totocaster/Typist) - iOSアプリ向けの小型ですぐに使えるのSwift UIKitキーボードマネージャー—通知センターを使わずにキーボードの画面表示と動作を管理
* [KeyboardHideManager](https://github.com/bonyadmitr/KeyboardHideManager) - Swiftで書かれた、ビューにタップしてキーボードを隠すコードなしマネージャー
* [Toolbar](https://github.com/1amageek/Toolbar) - 素晴らしい自動レイアウトToolbar
* [IHKeyboardAvoiding](https://github.com/IdleHandsApps/IHKeyboardAvoiding) - キーボードが表示されているときに任意のUIViewを常に表示できるためのすぐに使えるユニバーサルソリューション、UIスクリールビューはもう不要！
* [NumPad](https://github.com/efremidze/NumPad) - 数字パッド（Squareのデザインをインスピレーションに）
* [Ribbon](https://github.com/chriszielinski/Ribbon) - iOSおよびmacOS向けのシンプルなクロスプラットフォームToolbar／カスタム入力アクセサリビューライブラリ
* [ISEmojiView](https://github.com/isaced/ISEmojiView) - iOS用のエモジーキーボード

**[back to top関連](#contributing-and-collaborating)**

### ラベル <a id="label"></a>

*Enhanced UILabel replacements and text-display utilities.*

- [ActiveLabel.swift](https://github.com/optonaut/ActiveLabel.swift) - Swiftで書かれた、ハッシュタグ（#）、メンション（@）、URL (http://)をサポートするUILabelのすぐに使える置き換え
- [CountdownLabel](https://github.com/suzuki-0000/CountdownLabel) - シンプルで、モーフィングアニメーション付きカウントダウンUILabel、および便利な関数を備えたもの
- [GlitchLabel](https://github.com/kciter/GlitchLabel) - iOS向けのGlitch効果UILabel
- [LTMorphingLabel](https://github.com/lexrus/LTMorphingLabel) - Swiftで書かれたUILabelのスムーズな変形効果
- [MZTimerLabel](https://github.com/mineschan/MZTimerLabel) - Apple ClockアプリのようにカウントダウンタイマーまたはストップウォッチとしてUILabelを使用できるiOS用便利なクラス
- [NumberMorphView](https://github.com/me-abhinav/NumberMorphView) - 数値を表示するラベルビューで、数値トゥーンや数値モーフィングという技術を使って変化やアニメーションを実現
- [Preloader.Ophiuchus](https://github.com/Yalantis/Preloader.Ophiuchus) - 全体のテキストまたは文字にアニメーションを適用できるカスタムラベル
- [RQShineLabel](https://github.com/zipme/RQShineLabel) - 秘密アプリのようなテキストアニメーション
- [STULabel](https://github.com/stephan-tolksdorf/STULabel) - UILabelよりも速いラベルビューで、非同期レンダリングをサポートし、UIDragInteractionと連携し、テキストの切り取り、自動レイアウト、UIAccessibilityなど、非常に柔軟な機能を備えた
- [THLabel](https://github.com/tobihagemann/THLabel) - UILabelのサブクラスで、シャドウのぼかし、内側シャドウ、テキストのストロークおよびグレードientフィルを追加可能
- [TOMSMorphingLabel](https://github.com/tomknig/TOMSMorphingLabel) - ラベルのテキスト値間のカスタム変形遷移
- [TriLabelView](https://github.com/mukeshthawani/TriLabelView) - Swiftで書かれたiOS用三角形の角ラベルビュー
- [TTTAttributedLabel](https://github.com/TTTAttributedLabel/TTTAttributedLabel) - 属性、データ検出、リンクなどをサポートするUILabelへのすぐに使える置き換え
- [UICountingLabel](https://github.com/dataxpress/UICountingLabel/) - UILabelにアニメーション付きカウント機能を追加
- [ZCAnimatedLabel](https://github.com/overboming/ZCAnimatedLabel) - 細かい出現・非表示アニメーションを備えたUILabelの置き換え

**[back to top関連](#contributing-and-collaborating)**

### ログイン <a id="login"></a>

*Pre-built login UIs and authentication flows.*

- [Cely](https://github.com/cely-tools/Cely) - Swiftで書かれたすぐに使えるログインフレームワーク
- [LFLoginController](https://github.com/awesome-labs/LFLoginController) - Swiftで書かれたカスタマイズ可能なログイン画面
- [LoginKit](https://github.com/IcaliaLabs/LoginKit) - iOS向けのログイン/サインアップUXを簡単に追加できるLoginKit。

**[back to top関連](#contributing-and-collaborating)**

### メニュー <a id="menu"></a>

*Side menus, drop-downs, context menus and navigation drawers.*

- [AirBar](https://github.com/uptechteam/AirBar) - Swift 3で書かれたUIScrollView駆動の展開可能なメニュー
- [AKSideMenu](https://github.com/dogo/AKSideMenu) - iOS用のパラリックス効果を備えた美しいサイドメニューライブラリ
- [BTNavigationDropdownMenu](https://github.com/PhamBaTho/BTNavigationDropdownMenu) - ユーザーがナビゲーションタイトルをクリックした際にナビゲーションバーの下に表示される、洗練されたドロップダウンメニュー。Swiftで書かれた。
- [CategorySliderView](https://github.com/cemolcay/CategorySliderView) - カテゴリを選択するスライダービュー。任意のUIView型をカテゴリアイテムビューとして追加可能。完全にカスタマイズ可能
- [CircleBar](https://github.com/softhausHQ/CircleBar) - 🔶 iOS用の楽しい、使いやすいタブバーナビゲーションコントローラ
- [CircleMenu](https://github.com/Ramotion/circle-menu) - アニメーション付き、複数選択オプションのメニューボタン
- [Context-Menu.iOS](https://github.com/Yalantis/Context-Menu.iOS) - アプリに素晴らしいアニメーション付きコンテキストメニューを簡単に追加できます
- [ContextMenu](https://github.com/GitHawkApp/ContextMenu) - Things 3をインスピレーションとして作ったiOS用コンテキストメニュー
- [DropDown](https://github.com/AssistoLab/DropDown) - iOS用のマテリアルデザインドロップダウン
- [DropDownMenuKit](https://github.com/qmathe/DropDownMenuKit) - シンプルでモジュール化され、高度にカスタマイズ可能なUIKitメニュー。ナビゲーションバーまたはツールバーにアタッチ可能。Swiftで書かれた。
- [Dropdowns](https://github.com/onmyway133/Dropdowns) - 💧 Swiftで書か及ぶドロップダウン
- [DTPagerController](https://github.com/tungvoduc/DTPagerController) - 完全にカスタマイズ可能なコンテナビュー制御を、水平スクロールで表示するビュー制御のセットに使用
- [ENSwiftSideMenu](https://github.com/evnaz/ENSwiftSideMenu) - iOS 7/8向けのSwiftで書かれたシンプルなサイドメニュー
- [ExpandingMenu](https://github.com/monoqlo/ExpandingMenu) - Swiftで書かれたiOS向けのメニューボタン「ExpandingMenu」
- [FanMenu](https://github.com/exyte/fan-menu) - Macawに基づく円形レイアウトのメニュー
- [FAPanels](https://github.com/fahidattique55/FAPanels) - FAPanelsによるトランジション
- [FlowingMenu](https://github.com/yannickl/FlowingMenu) - Swiftで実装された、メニューを表示する際のインタラクティブなビュートランジション（流れとバウンス効果）
- [FrostedSidebar](https://github.com/edekhayser/FrostedSidebar) - SwiftとiOS 8 APIを用いたハムバーガーメニュー
- [GuillotineMenu](https://github.com/Yalantis/GuillotineMenu) - 私たちが実装したグリルトメニューのトランジションアニメーションは、Swiftで作成され、ある種の有名な殺機を連想させる。
- [IGCMenu](https://github.com/sunilsharma08/IGCMenu) - アニメーション付きのグリッドと円形メニュー。カスタマイズが容易。
- [IGLDropDownMenu](https://github.com/bestwnh/IGLDropDownMenu) - アニメーションが美しいiOSドロップダウンメニューで、カスタマイズが容易。
- [InteractiveSideMenu](https://github.com/handsomecode/InteractiveSideMenu) - Swift 3で書かれたカスタマイズ可能なiOSインタラクティブサイドメニュー。
- [KWDrawerController](https://github.com/Kawoou/KWDrawerController) - 使いやすいドレーアービュー制御！
- [KYGooeyMenu](https://github.com/KittenYang/KYGooeyMenu) - それほど良くないゴーイ効果のメニュー。
- [LLSlideMenu](https://github.com/lilei644/LLSlideMenu) - これはiOSアプリ向けのスプリングスライドメニュー。
- [MKDropdownMenu](https://github.com/maxkonovalov/MKDropdownMenu) - iOS向けに多くのカスタマイズパラメータを持つドロップダウンメニュー。
- [PageMenu](https://github.com/PageMenu/PageMenu) - スパイス、Windows Phone、Instagramのように、スクロールビュー内に他のビュー制御を配置したページングメニュー制御。
- [PagingKit](https://github.com/kazuhiro4949/PagingKit) - PagingKitはカスタマイズ可能なメニューUIを提供。他のライブラリに比べ、より柔軟なレイアウトとデザインを持つ。
- [Panels](https://github.com/antoniocasero/Panels) - Panelsはアプリにスライドパネルを簡単に追加するためのフレームワークです
- [Parchment](https://github.com/rechsteiner/Parchment) - カスタマイズ可能なメニューを備えたページングビュー制御。UICollectionViewに基づき、カスタムレイアウトと無限データソースをサポート。
- [Persei](https://github.com/Yalantis/Persei) - Swiftで書かれたUITableView / UICollectionView / UIScrollView向けのアニメーショントップメニュー
- [PopMenu](https://github.com/xhzengAIB/PopMenu) - Sina Weibo / NetEaseアプリにインスパイアされたポップアニメーションメニュー「PopMenu」
- [RadialMenu](https://github.com/bradjasper/radialmenu) - SwiftとPOPで構築された、タッチコンテキストメニュー（iOS 8のiMessage録音のように）を提供するRadialMenu
- [RESideMenu](https://github.com/romaonthego/RESideMenu) - Dribbbleのショットにインスパイアされた、iOS 7/8風のサイドメニュー（パラリックス効果あり）
- [RHSideButtons](https://github.com/robertherdzik/RHSideButtons) - LibraryはiOS向けにAndroid（Material Design）のフロートアクションボタンを簡単に実装できるもの提供しています。アプリ内の小さなサイドメニューとしてご利用いただけます。
- [Side-Menu.iOS](https://github.com/Yalantis/Side-Menu.iOS) - カスタマイズ可能なUIを備えたアニメーションサイドメニュー
- [SideMenu](https://github.com/jonkykong/SideMenu) - Facebookをインスピレーションを得たSwiftによるシンプルサイドメニュー制御。右側と左側のメニューをサポート。多くのカスタマイズとアニメーションオプションを提供。コードなしでStoryBoardに実装可能です。
- [SlideMenuControllerSwift](https://github.com/dekatotoro/SlideMenuControllerSwift) - Google+、iQON、Feedly、Ameba iOSアプリに影響を受けて開発されたiOSのスライドメニューView。純Swiftで記述されています。
- [SPLarkController](https://github.com/IvanVorobei/SPLarkController) - ボタンとスイッチを備えた設定画面。
- [SSASideMenu](https://github.com/SSA111/SSASideMenu) - RESideMenuのSwift実装。iOS 7/8スタイルのサイドメニューにパラリックス効果を備えています。
- [SwiftyMenu](https://github.com/KarimEbrahemAbdelaziz/SwiftyMenu) - シンプルでエレガントなiOS用ドロップダウンメニュー 🔥💥
- [SwipeMenuViewController](https://github.com/yysskk/SwipeMenuViewController) - スワイプ可能なタブとメニュービューおよびビュー制御
- [ViewDeck](https://github.com/ViewDeck/ViewDeck) - Path 2.0またはFacebook iOSアプリに見られるスライド機能の実装。
- [VLDContextSheet](https://github.com/vangelov/VLDContextSheet) - Pinterest iOSアプリに類似したコンテキストメニュー
- [XXXRoundMenuButton](https://github.com/zsy78191/XXXRoundMenuButton) - シンプルな円形スタイルのメニュー。
- [YNDropDownMenu](https://github.com/younatics/YNDropDownMenu) - Swift3で作成されたかわいいiOSドロップダウンメニュー。

**[back to top関連](#contributing-and-collaborating)**

### ナビゲーションバー <a id="navigation-bar"></a>

*Customizable navigation bars and top-of-screen UI components.*

- [AMScrollingNavbar](https://github.com/andreamazz/AMScrollingNavbar) - UIScrollViewのスクロールに合わせてスクロールするスクロール可能なUINavigationBar
- [BusyNavigationBar](https://github.com/gmertk/BusyNavigationBar) - UINavigationBarにロード効果を表示するための拡張機能
- [HidingNavigationBar](https://github.com/tristanhimmelman/HidingNavigationBar) - ユーザーがスクロールする際に、ビュー制御のナビゲーションバー（およびタブバー）を簡単に非表示・表示できる。
- [KDInteractiveNavigationController](https://github.com/kingiol/KDInteractiveNavigationController) - UINavigationControllerのサブクラスで、非表示または表示されたUINavigationBarに対してpop操作をインタラクティブにサポート。
- [KMNavigationBarTransition](https://github.com/MoZhouqi/KMNavigationBarTransition) - 一時的にナビゲーションバーのスタイルを管理し、ビュー制御のプッシュやポップ時にすべての方向でナビゲーションバーのスタイル間のトランジションアニメーションをスムーズにできるユニバーサルライブラリ
- [LTNavigationBar](https://github.com/ltebean/LTNavigationBar) - UINavigationBarのカテゴリで、その外観を動的に変更できる。
- [RainbowNavigation](https://github.com/DanisFabric/RainbowNavigation) - PushとPop時にUINavigationBarのbackgroundColorを簡単に変更できる方法。
- [TONavigationBar](https://github.com/TimOliver/TONavigationBar) - シンプルなサブクラスで、ナビゲーションバーの背景を「クリア」に設定し、iOS Musicアプリに見られるように徐々に元に戻す視覚的なトランジションを追加。

**[back to top関連](#contributing-and-collaborating)**

### PickerView関連 <a id="pickerview"></a>

*Customizable picker views and selection controls.*

- [ActionSheetPicker-3.0](https://github.com/skywinder/ActionSheetPicker-3.0/) - iOS上でドロップダウンUIPickerView／アクションシート機能を迅速に再現できる。
- [ADDatePicker](https://github.com/abhiperry/ADDatePicker) - 完全にカスタマイズ可能なiOS用水平UIPickerViewライブラリ。純Swiftで記述されています。
- [CountryPicker](https://github.com/4taras4/CountryCode) - :date: 国名と電話番号を表示するUIPickerView
- [CountryPickerView](https://github.com/kizitonwose/CountryPickerView)- A simple, customizable view for efficiently collecting country information in iOS apps
- [CZPicker](https://github.com/chenzeyu/CZPicker) - iOS向けのポップアップとして表示されるピッカービュー
- [DatePickerDialog](https://github.com/squimer/DatePickerDialog-iOS-Swift) - iOS向けの日付ピッカーダイアログ
- [Mandoline](https://github.com/blueapron/Mandoline) - すべての「選択」ニーズを満たすiOS向けピッカービュー
- [McPicker](https://github.com/kmcgill88/McPicker-iOS) - アニメーション付き、回転対応のカスタマイズ可能なクロージャー駆動UIPickerViewのドロップインソリューション
- [PickerView](https://github.com/filipealva/PickerView) - Swiftで提供されるUIPickerViewへのカスタマイズ可能な代替品
- [SKCountryPicker](https://github.com/SURYAKANTSHARMA/CountryPicker) - 国またはダイヤルコードを選択するためのシンプルかつカスタマイズ可能な国ピッカー

**[back to top関連](#contributing-and-collaborating)**

### ポップアップ <a id="popup"></a>

*Popups, modals, bottom sheets and overlay components.*

- [AZDialogViewController](https://github.com/Minitour/AZDialogViewController) - スナップチャットのアラートダイアログを模倣した、高度にカスタマイズ可能なアラートダイアログコントローラー
- [FFPopup](https://github.com/JonyFang/FFPopup) - ⛩FFPopupは、カスタムビューをポップアップとして表示するための軽量ライブラリ
- [LNPopupController](https://github.com/LeoNatan/LNPopupController) - 他のビューコントローラーのポップアップとしてビューコントローラーを表示するためのフレームワーク。Apple MusicやPodcastsアプリのように。
- [MIBlurPopup](https://github.com/MarioIannotta/MIBlurPopup) - MIBlurPopupで、ぼかされた背景を持つ素晴らしいポップアップを作成できます
- [MijickPopups](https://github.com/Mijick/Popups) - ポップアップ、ポーポーバ、シート、アラート、トースト、バナー、(...) の表示をシンプルに。SwiftUIで書かれたもの。
- [NMPopUpView](https://github.com/psy2k/NMPopUpView) - シンプルなiOSクラスで、美しいポップアップウィンドウを表示。SwiftとObjective-Cのバージョンが用意されています。
- [Popover](https://github.com/corin8823/Popover) - PopoverはFacebookアプリのようなバルーンライブラリ。純Swiftで書かれています。
- [PopupController](https://github.com/daisuke310vvv/PopupController) - 一時的なポップアップビューを表示するためのカスタマイズ可能なコントローラー。
- [PopupDialog](https://github.com/Orderella/PopupDialog) - Swiftで書かれたシンプルかつカスタマイズ可能なiOS向けポップアップダイアログ。UIAlertControllersのアラートスタイルを置き換えます。
- [PopupView](https://github.com/exyte/PopupView) - SwiftUIで書かれたトーストとポップアップライブラリ
- [PopupWindow](https://github.com/shin8484/PopupWindow) - PopupWindowは、Swiftで別のUIWindowを使用したシンプルなポップアップ。
- [Presentr](https://github.com/IcaliaLabs/Presentr) - iOS 8以降でのカスタムビューコントローラーの表示をラップするもの
- [SelectionDialog](https://github.com/kciter/SelectionDialog) - シンプルな選択ダイアログ
- [STPopup](https://github.com/kevin0571/STPopup) - STPopupは、iPhoneおよびiPad向けにナビゲーションコントローラーをポップアップスタイルで提供します。
- [SubscriptionPrompt](https://github.com/binchik/SubscriptionPrompt) - タインダーが使用するようなサブスクリプションビューコントローラー
- [SwiftEntryKit](https://github.com/huri000/SwiftEntryKit) - iOS向け高度にカスタマイズ可能なポップアップ、アラート、バナーを表示するライブラリ。さまざまなテンプレートを提供し、純Swiftで構成されている。

**[back to top関連](#contributing-and-collaborating)**

### プログレス表示 <a id="progress-view"></a>

*Progress bars and determinate progress indicators.*

- [GradientCircularProgress](https://github.com/keygx/GradientCircularProgress) - Swiftで使用可能なカスタマイズ可能な進行状況表示ライブラリ。

**[back to top関連](#contributing-and-collaborating)**

### 引っ張って更新 <a id="pull-to-refresh"></a>

*Pull-to-refresh controls and animations.*

- [ADChromePullToRefresh](https://github.com/Antondomashnev/ADChromePullToRefresh) - Chrome iOSアプリ風のスクロールリフレッシュ（プル）機能で複数のアクションを実現。
- [BreakOutToRefresh](https://github.com/dasdom/BreakOutToRefresh) - SpriteKitを使用した、プルでリフレッシュ可能なビュー
- [CBStoreHouseRefreshControl](https://github.com/coolbeet/CBStoreHouseRefreshControl) - Storehouse iOSアプリをインスピレーションとして作られた、完全にカスタマイズ可能なプルリフレッシュコントロール
- [CRRefresh](https://github.com/CRAnimation/CRRefresh) - プルリフレッシュを簡単に使う方法。
- [DGElasticPullToRefresh](https://github.com/gontovnik/DGElasticPullToRefresh) - Swiftで開発されたiOS向けエラスティックプルリフレッシュ。
- [ESPullToRefresh](https://github.com/eggswift/pull-to-refresh) - トップに美しいアニメーションを備えたカスタマイズ可能なプルリフレッシュ。
- [KafkaRefresh](https://github.com/HsiaohuiHsiang/KafkaRefresh) - アニメーション付き、カスタマイズ可能で柔軟なプルリフレッシュフレームワーク。iOS開発をより速く、簡単にする。
- [MJRefresh](https://github.com/CoderMJLee/MJRefresh) プルリフレッシュを簡単に使う方法。
- [mntpulltoreact](https://github.com/mentionapp/mntpulltoreact) - 1つのジェスチャーで複数のアクション。プルリフレッシュの進化。
- [PullToBounce](https://github.com/entotsu/PullToBounce) - UIScrollView用のアニメーション付き「プルリフレッシュ」ライブラリ。
- [PullToMakeSoup](https://github.com/Yalantis/PullToMakeSoup) - UIScrollViewに簡単に追加できるカスタマイズされたアニメーション付きプルリフレッシュ。
- [PullToRefreshCoreText](https://github.com/cemolcay/PullToRefreshCoreText) - すべてのUIScrollViewタイプクラス向けのプルリフレド拡張機能。アニメーション付きテキスト描画スタイルを備える。
- [PullToRefreshSwift](https://github.com/dekatotoro/PullToRefreshSwift) - iOS向けシンプルでカッコイイプルリフレッシュライブラリ。純Swiftで構成されている。
- [RainyRefreshControl](https://github.com/Onix-Systems/RainyRefreshControl) - iOS向けのシンプルなリフレッシュコントロール。[concept](https://dribbble.com/shots/2242263--1-Pull-to-refresh-Freebie-Weather-Concept) にインスパイア。
- [ReplaceAnimation](https://github.com/fruitcoder/ReplaceAnimation) - UICollectionViewでのプルリフレッシュアニメーション。スタイックヘッダーのフローレイアウトを採用。Swiftで記述。
- [SVPullToRefresh](https://github.com/samvermette/SVPullToRefresh) - 1行のコードで、任意のUIScrollViewにプルリフレッシュおよび無限スクロールを追加。http://samvermette.com/314
- [UzysAnimatedGifPullToRefresh](https://github.com/uzysjung/UzysAnimatedGifPullToRefresh) - シンプルなコードで、任意のscrollViewにアニメーション付きGIFを用いてプルリフレッシュを追加。

**[back to top関連](#contributing-and-collaborating)**

### 評価スター <a id="rating-stars"></a>

*Star ratings and review-input controls.*

- [Cosmos](https://github.com/evgenyneu/Cosmos) - iOS / Swift向けのスター評価コントロール。
- [FloatRatingView](https://github.com/glenyi/FloatRatingView) - 整数、半整数、または浮動小数点評価コントロール。Swiftで記述。
- [HCSStarRatingView](https://github.com/hsousa/HCSStarRatingView) - Objective-Cで記述されたiOS向けシンプルなスター評価ビュー。
- [StarryStars](https://github.com/peterprokop/StarryStars) - StarryStarsはiOS用の評価表示および編集を行うGUIライブラリ。
- [TTGEmojiRate](https://github.com/zekunyan/TTGEmojiRate) - Swiftで実装されたiOS向け、エモジ風の評価ビュー。

**[back to top関連](#contributing-and-collaborating)**

### ScrollView関連 <a id="scrollview"></a>

*Custom UIScrollView subclasses and scrolling helpers.*

- [AppStoreStyleHorizontalScrollView](https://github.com/terenceLuffy/AppStoreStyleHorizontalScrollView) - App Store風の水平スクロールビュー。
- [CrownControl](https://github.com/huri000/CrownControl) - Apple Watchのデジタルリングをインスピレーションとして、CrownControlは小さなアクセサリービューであり、thumbを上げずともスクロール可能なコンテンツをスクロールできるようにする。
- [PullToDismiss](https://github.com/sgr-ksmt/PullToDismiss) - Swiftでモーダルビュー制御を引き抜くことでスクロールビューまたはナビゲーションバーを引き抜くことで閉じる。
- [ScrollingFollowView](https://github.com/ktanaka117/ScrollingFollowView) - ScrollingFollowViewは、UIScrollViewのスクロールを追跡するシンプルなビュー。
- [SegementSlide](https://github.com/Jiar/SegementSlide) - 複数階層のUIScrollViewネストスクロール解決策。
- [ShelfView-iOS](https://github.com/tdscientist/ShelfView-iOS) - iOS用の書籍を棚に表示するカスタムビュー
- [SlideController](https://github.com/touchlane/SlideController) - SlideControllerは、Swiftで完全に実装されたシンプルで柔軟なUIコンポーネント。UIPageViewControllerの代替として、ジェネリック型の力を活かした素晴らしい選択肢。
- [SpreadsheetView](https://github.com/bannzai/SpreadsheetView) - iOSアプリ向けの完全にカスタマイズ可能なスプレッドシートビューインターフェース。このフレームワークにより、スケジュール、ガントチャート、タイムテーブルなどの複雑なレイアウトを作成できるようになり、Excelのように使えるようになる。
- [UIScrollView-InfiniteScroll](https://github.com/pronebird/UIScrollView-InfiniteScroll) - UIScrollViewの無限スクロールカテゴリ。
- [VegaScroll](https://github.com/AppliKeySolutions/VegaScroll) - VegaScrollは、Swift 4で完全に実装された軽量アニメーションフローレイアウトであり、iOS 11およびXcode 等と互換性がある。

**[back to top関連](#contributing-and-collaborating)**

### セグメントコントロール <a id="segmented-control"></a>

*Segmented controls and tab-style selectors.*

- [BetterSegmentedControl](https://github.com/gmarm/BetterSegmentedControl) - UISegmentedControlおよびUISwitchの簡単でカスタマイズ可能な代替。
- [DGRunkeeperSwitch](https://github.com/gontovnik/DGRunkeeperSwitch) - Runkeeperデザインのスイッチコントロール（2部セグメントコントロール）
- [HMSegmentedControl](https://github.com/HeshamMegid/HMSegmentedControl) - Google Currentsおよびその他のGoogle製品に使われるセグメントコントロールのスタイルを模倣したUISegmentedControlのすぐに使える代替。
- [LUNSegmentedControl](https://github.com/Stormotion-Mobile/LUNSegmentedControl) - インタラクティブアニメーションを備えたカスタマイズ可能なセグメントコントロール。
- [MultiSelectSegmentedControl](https://github.com/yonat/MultiSelectSegmentedControl) - 標準の `UISegmentedControl` にマルチセレクション機能を追加。
- [PinterestSegment](https://github.com/TBXark/PinterestSegment) - Pinterestのようなセグメントコントロールにマスクアニメーションを備える。
- [SJFluidSegmentedControl](https://github.com/sasojadrovski/SJFluidSegmentedControl) - カスタマイズされた外観とインタラクティブアニメーションを備えたセグメントコントロール。Swift 3.0で記述。
- [TwicketSegmentedControl](https://github.com/twicketapp/TwicketSegmentedControl) - iOS用のカスタムUISegmentedControlの代替。Swiftで記述。

**[back to top関連](#contributing-and-collaborating)**

### スライダー <a id="slider"></a>

*UISlider subclasses and custom slider controls.*

- [AGCircularPicker](https://github.com/agilie/AGCircularPicker) - AGCircularPickerは、計算パラメータを管理するコントロールを作成するための有効なコンポーネント。
- [ASValueTrackingSlider](https://github.com/alskipp/ASValueTrackingSlider) - UISliderのサブクラスで、スライダーの値をポップアップビューに表示。
- [CircleSlider](https://github.com/shushutochako/CircleSlider) - CircleSliderは円形スライダーのライブラリ。純Swiftで記述。
- [Fluid Slider](https://github.com/Ramotion/fluid-slider) - 選択された正確な値を表示するポップアップバブル付きスライダー項目
- [HGCircularSlider](https://github.com/HamzaGhazouani/HGCircularSlider) - iOSアプリ用のカスタム再利用可能な円形スライダーコントロール
- [MARKRangeSlider](https://github.com/vadymmarkov/MARKRangeSlider) - 2つのスライダーを持つカスタム再利用可能なスライダー制御（範囲スライダー）。
- [MTCircularSlider](https://github.com/EranBoudjnah/MTCircularSlider) - 豊富な機能を備えた円形スライダー制御
- [MultiSlider](https://github.com/yonat/MultiSlider) - 複数のスライドハンドと値をサポートするUISliderのクローン、オプションのスナップ間隔、オプションの値ラベル
- [RangeSeekSlider](https://github.com/WorldDownTown/RangeSeekSlider) - iOS用のカスタマイズ可能な範囲スライダー
- [RangeSlider](https://github.com/warchimede/RangeSlider) - Swiftで作成されたシンプルな範囲スライダー
- [StepSlider](https://github.com/spromicky/StepSlider) - StepSliderは、UISliderに類似したプリセット整数値をサポートするカスタム実装
- [TTRangeSlider](https://github.com/TomThorpe/TTRangeSlider) - UISliderに似たスタイルのスライダーですが、最小値と最大値の範囲を選択できるもの

**[back to top関連](#contributing-and-collaborating)**

### スプラッシュ表示 <a id="splash-view"></a>

*Launch screens, splash views and loading animations.*

- [CBZSplashView](https://github.com/callumboddy/CBZSplashView) - Twitterスタイルのスプラッシュスクリーンビュー。拡大して初期ビューを露呈
- [RevealingSplashView](https://github.com/PiXeL16/RevealingSplashView) - Twitterのスプラッシュからインスピレーションを得たアニメーション付きスプラッシュビュー

**[back to top関連](#contributing-and-collaborating)**

### ステータスバー <a id="status-bar"></a>

*Status bar customization and overlay utilities.*

- [Bartinter](https://github.com/MaximKotliar/Bartinter) - コンテンツの背後に応じてステータスバーの色を変更し、動的に更新。

**[back to top関連](#contributing-and-collaborating)**

### ステッパー <a id="stepper"></a>

*UIStepper subclasses and increment/decrement controls.*

- [GMStepper](https://github.com/gmertk/GMStepper) - 中央にスライディングラベルを持つステッパー
- [SnappingStepper](https://github.com/yannickl/SnappingStepper) - Swiftで書かれたUIStepperのエレガントな代替案
- [ValueStepper](https://github.com/BalestraPatrick/ValueStepper) - 値を表示するステッパーオブジェクト

**[back to top関連](#contributing-and-collaborating)**

### スイッチ <a id="switch"></a>

*Custom UISwitch replacements and toggle controls.*

- [AIFlatSwitch](https://github.com/cocoatoucher/AIFlatSwitch) - iOS用のUISwitchのフラットな代替コンポーネント
- [AnimatedSwitch](https://github.com/alsedi/AnimatedSwitch) - Swiftで親ビューに色を塗りつぶすUISwitch
- [PMZSwitch](https://github.com/kovpas/PMZSwitch) - もう一つのアニメーション付きトグル
- [RAMPaperSwitch](https://github.com/Ramotion/paper-switch) - RAMPaperSwitchは、スイッチがオンになったときに親ビューに塗りつぶすSwiftモジュール
- [SevenSwitch](https://github.com/bvogelzang/SevenSwitch) - iOS7スタイルのUISwitchへの即時置き換え
- [Switch](https://github.com/T-Pham/Switch) - Swiftで実装された、完全なInterface Builder対応のiOSスイッチ制御
- [Switcher](https://github.com/knn90/Switcher) - Swift - ステータス変更時にアニメーションを実行するカスタムUISwitcher
- [TKSwitcherCollection](https://github.com/TBXark/TKSwitcherCollection) - アニメーション付きスイッチコレクション
- [ViralSwitch](https://github.com/andreamazz/ViralSwitch) - スイッチが親ビューにそのトーンカラーを感染させるUISwitch

**[back to top関連](#contributing-and-collaborating)**

### タブバー <a id="tab-bar"></a>

*Customizable tab bars and tab-navigation components.*

- [adaptive-tab-bar](https://github.com/Ramotion/adaptive-tab-bar) - AdaptiveControllerは、ナチュラルまたはカスタムiOSUI要素にカスタム状態を追加するための「進行的減少」Swiftモジュール
- [animated-tab-bar](https://github.com/Ramotion/animated-tab-bar) - RAMAnimatedTabBarControllerは、タブバー項目にアニメーションを追加するためのSwiftモジュールです
- [AnimatedTabBar](https://github.com/exyte/AnimatedTabBar) - アニメーションの数がプリセットされているタブバー。SwiftUIで記述されています
- [AZTabBarController](https://github.com/Minitour/AZTabBarController) - Swift 3.0で記述されたiOS用カスタムタブバー制御
- [BEKCurveTabbar](https://github.com/behrad-kzm/BEKCurveTabbar) - XCode +10と互換性があり、Interface_Builderパネルで完全にカスタマイズ可能です。BEKCurveTabBarはUITabBarクラスの派生クラスであり、すべてのiOSデバイスと互換性があります
- [ColorMatchTabs](https://github.com/Yalantis/ColorMatchTabs) - タブを表示するための面白い方法
- [ESTabBarController](https://github.com/ezescaruli/ESTabBarController) - iOS用タブバー制御でボタンのハイライトを可能にし、カスタムアクションを設定できるもの
- [ExpandedTabBar](https://github.com/yervandsar/ExpandedTabBar) - UITabBarControllerにおける「さらに」項目のための非常に創造的な設計ソリューション
- [FoldingTabBar.iOS](https://github.com/Yalantis/FoldingTabBar.iOS) - 折りたたみタブバーとタブバー制御
- [GGTabBar](https://github.com/Goles/GGTabBar) - もう一つのUITabBarおよびUITabBarController（iOSタブバー）の代替品ですが、ビュー階層の配置にはAuto Layoutを使用しています
- [GooeyTabbar](https://github.com/KittenYang/GooeyTabbar) - gooey効果を持つタブバー
- [KYWheelTabController](https://github.com/ykyouhei/KYWheelTabController) - KYWheelTabControllerはUITabBarControllerのサブクラスです。UITabBarの代わりに円形メニューを表示します
- [MiniTabBar](https://github.com/D-32/MiniTabBar) - UITabBarへのシンプルでクリーンな代替案
- [ScrollPager](https://github.com/aryaxt/ScrollPager) - タブ（セグメント）のリストを表示し、指定されたビュー間のページングを管理するスクロールページャ
- [Segmentio](https://github.com/Yalantis/Segmentio) - Swiftで記述されたアニメーション付きトップ／ボトムセグメントコントロール
- [SmoothTab](https://github.com/yervandsar/SmoothTab) - iOSアプリ向けにスムーズでカスタマイズ可能なタブ
- [SwipeableTabBarController](https://github.com/marcosgriselli/SwipeableTabBarController) - タブ間のスワイプ操作を可能にするUITabBarController
- [SwipeViewController](https://github.com/fortmarek/SwipeViewController) - SwipeViewControllerはRKSwipeBetweenViewControllersのSwift版です。ページ／ViewControllers間をナビゲートできます
- [TabDrawer](https://github.com/winslowdibona/TabDrawer) - タブアイテム選択時にコードブロックを実行できるカスタマイズ可能なタブバーUI要素、Swiftで記述
- [Tabman](https://github.com/uias/Tabman) - iOS向けに強力なページングビュー制御とインジケーターバーを備えたもの
- [TabPageViewController](https://github.com/EndouMari/TabPageViewController) - ページングビュー制御者とスクロールタブビュー
- [WormTabStrip](https://github.com/EzimetYusup/WormTabStrip) Beatiful ViewPager For iOS written in Swift  (inspired by Android [SmartTabLayout](https://github.com/ogaclejapan/SmartTabLayout))
- [XLPagerTabStrip](https://github.com/xmartlabs/XLPagerTabStrip) - Android PagerTabStripをiOS向けに移植

**[back to top関連](#contributing-and-collaborating)**

### テーブルビュー／コレクションビュー <a id="table-view--collection-view"></a>

*Tools and components for UITableView and UICollectionView.*

#### テーブルビュー <a id="table-view"></a>

*UITableView helpers, data-source abstractions and cell utilities.*

- [AMWaveTransition](https://github.com/andreamazz/AMWaveTransition) - テーブルビューを保持するビュー制御間のカスタムトランジション
- [CascadingTableDelegate](https://github.com/edopelawi/CascadingTableDelegate) - SwiftでよりクリーンなDelegateメソッドを書くためのシンプルなアプローチ
- [DTTableViewManager](https://github.com/DenTelezhkin/DTTableViewManager) - ジェネリクスと関連型を活用したプロトコル指向のUITableView管理
- [MGSwipeTableCell](https://github.com/MortimerGoro/MGSwipeTableCell) - スワイプ可能なボタンをさまざまなトランジションで表示できるUITableViewCellのサブクラス
- [MYTableViewIndex](https://github.com/mindz-eye/MYTableViewIndex) - Swiftで書かれた、UITableViewのセクションインデックスへのピクセル正確なリプレース
- [preview-transition](https://github.com/Ramotion/preview-transition) - PreviewTransitionはシンプルなプレビューギャラリー制御クラス
- [QuickTableViewController](https://github.com/bcylin/QuickTableViewController) - Swiftで設定用のUITableViewを作成するためのシンプルな方法
- [ReverseExtension](https://github.com/marty-suzuki/ReverseExtension) - UITableView拡張機能で、テーブルビューの下部からセルを挿入できる
- [SelectionList](https://github.com/yonat/SelectionList) - UITableViewをベースにしたシンプルな単一選択または複数選択チェックリスト
- [Static](https://github.com/venmo/Static) - SwiftでiOS用のシンプルな静的テーブルビュー
- [SwiftReorder](https://github.com/adamshin/SwiftReorder) - 数行のコードで、任意のテーブルビューにドラッグ＆ドロップによる並び替えを追加。強固で軽量かつ完全にカスタマイズ可能。[e]
- [SwipeCellKit](https://github.com/SwipeCellKit/SwipeCellKit) - Swiftで実装された、標準のMail.appをベースにしたスワイプ可能なUITableViewCell
- [SWTableViewCell](https://github.com/CEWendel/SWTableViewCell) - 使いやすいUITableViewCellのサブクラスで、スワイプ可能なコンテンツビューを実装し、ユーティリティボタンを公開（iOS 7のMailアプリと類似）
- [TableFlip](https://github.com/mergesort/TableFlip) - Cool UITableViewアニメーションをもっと簡単に！(╯°□°）╯︵ ┻━┻
- [TableKit](https://github.com/maxsokolov/TableKit) - Swiftによる型安全な宣言型テーブ及ビュー
- [TableViewDragger](https://github.com/KyoheiG3/TableViewDragger) - UITableViewのセルはドラッグ＆ドロップで並び替え可能
- [TimelineTableViewCell](https://github.com/kf99916/TimelineTableViewCell) - Swift 3.0で実装されたシンプルなタイムラインビュー（UITableViewCellベース）
- [TORoundedTableView](https://github.com/TimOliver/TORoundedTableView) - iPadのSettings.appのようにスタイルを設定したUITableViewのサブクラス
- [VBPiledView](https://github.com/v-braun/VBPiledView) - シンプルで美しいスタック型UIView。UITableView、UIImageView、またはメニューとしての代替として使用可能
- [VTMagic](https://github.com/tianzhuo112/VTMagic) - VTMagicはiOS用のページコンテナライブラリ
- [ZYThumbnailTableView](https://github.com/liuzhiyi1992/ZYThumbnailTableView) - Thumbnailセルのみを持つTableViewで、ジェスチャを使って他の拡張ビューを展開できる。すべて手動で設定可能

**[back to top関連](#contributing-and-collaborating)**

#### コレクションビュー <a id="collection-view"></a>

*UICollectionView helpers and advanced collection layouts.*

- [ASCollectionView](https://github.com/abdullahselek/ASCollectionView) - Airbnbをインスピレーションを得たSwiftによるコレクションビュー
- [CampcotCollectionView](https://github.com/touchlane/CampcotCollectionView) - CampcotCollectionViewはSwiftで書かれたカスタムUICollectionViewで、セクションの展開・収縮を可能にし、コレクションビューの表示をシンプルなAPIで管理
- [Carbon](https://github.com/ra1028/Carbon) - 🚴 UITableViewおよびUICollectionViewにおけるコンポーネントベースUIを宣言的に構築するためのライブラリ
- [CollectionKit](https://github.com/SoySauceLab/CollectionKit) - Swiftで再利用可能なデータ駆動型コレクションコンポーネントを構築するための現代的なフレームワーク
- [Conv](https://github.com/bannzai/conv) - ConvはUIKitを超えてUICollectionViewのデータ構造をスマートに表現します
- [DataSources](https://github.com/muukii/DataSources) - 型安全なデータ駆動型リストUIフレームワーク。（ASCollectionNodeを使用することも可能です）
- [DiffableDataSources](https://github.com/ra1028/DiffableDataSources) - UITableView/UICollectionViewDiffableDataSourceのバックポートを支援するライブラリ
- [DisplaySwitcher](https://github.com/Yalantis/DisplaySwitcher) - 2つのUICollectionViewレイアウト間のカスタムトランジション
- [Dwifft](https://github.com/jflinter/Dwifft) - Swift Diff
- [GenericDataSource](https://github.com/GenericDataSource/GenericDataSource) - SwiftでUITableView/UICollectionViewのデータソース実装に使うための汎用的小規模再利用可能なコンポーネント
- [GLTableCollectionView](https://github.com/giulio92/GLTableCollectionView) - NetflixやApp StoreのようなUITableViewとUICollectionView
- [IGListKit](https://github.com/Instagram/IGListKit) - 高速かつ柔軟なリストを構築するためのデータ駆動型UICollectionViewフレームワーク
- [KDDragAndDropCollectionView](https://github.com/mmick66/KDDragAndDropCollectionView) - 複数のUICollectionView間でのデータのドラッグ＆ドロップ
- [MEVFloatingButton](https://github.com/manuelescrig/MEVFloatingButton) - iOS用のUITableView、UICollectionViewおよびUIScrollViewにカスタムフロートボタンを表示するためのドロップインカテゴリ
- [MSPeekCollectionViewDelegateImplementation](https://github.com/MaherKSantina/MSPeekCollectionViewDelegateImplementation) - コレクションビュー内の前後アイテムをプレビューするためのカスタムページング動作
- [PagingView](https://github.com/KyoheiG3/PagingView) - 無限ページング、スマートオートレイアウト、UIKitに類似したインターフェース
- [Reusable](https://github.com/AliSoftware/Reusable) - SwiftでUITableViewCellsおよびUICollectionViewCellsに使うためのミックスイン
- [Sapporo](https://github.com/nghialv/Sapporo) - セルモデル駆動型のコレクションビュー管理者
- [SimpleSource](https://github.com/Squarespace/simple-source) - Swiftで簡単で型安全なiOSのテーブルとコレクションビュー
- [StickyCollectionView-Swift](https://github.com/matbeich/StickyCollectionView-Swift) - オーバーラップするセルを表示するためのUICollectionViewレイアウト
- [SwiftSpreadSheet](https://github.com/stuffrabbit/SwiftSpreadsheet) - Swiftでのスプレッドシートコレクションビューレイアウト。完全にカスタマイズ可能。
- [TLIndexPathTools](https://github.com/SwiftKickMobile/TLIndexPathTools) - TLIndexPathToolsは、テーブルとコレクドビューを大幅に簡略化できるクラスの小さなセットです。

**[back to top関連](#contributing-and-collaborating)**

#### 展開可能セル <a id="expandable-cell"></a>

*Expandable and collapsible table/collection view cells.*

- [CollapsibleTableSectionViewController](https://github.com/jeantimex/CollapsibleTableSectionViewController) - テーブルビューに収縮可能なセクションをサポートするためのSwiftライブラリ
- [ExpandableCell](https://github.com/younatics/ExpandableCell) - 完全にリファクタリングされた YNExapnadableCell。より簡潔でバグのないコード。iOS用の素晴らしい展開・収縮可能なテーブルビューセル。
- [expanding-collection](https://github.com/Ramotion/expanding-collection) - ExpandingCollectionは、カードのプレビュー／ポップを制御するコントローラー。
- [folding-cell](https://github.com/Ramotion/folding-cell) - FoldingCellは、紙の折りをモチーフにした拡張コンテンツセル。
- [YNExpandableCell](https://github.com/younatics/YNExpandableCell) - iOS向けに素晴らしい展開・収縮可能なテーブルビューセル

**[back to top関連](#contributing-and-collaborating)**

#### ヘッダー <a id="header"></a>

*Custom section headers and floating-header helpers.*

- [CSStickyHeaderFlowLayout](https://github.com/CSStickyHeaderFlowLayout/CSStickyHeaderFlowLayout) - UITableViewのUICollectionViewへの置き換え。パラリックスヘッダー、ステイクセクションヘッダーなど、さらに多くの機能を提供。
- [GSKStretchyHeaderView](https://github.com/gskbyte/GSKStretchyHeaderView) - UITableViewおよびUICollectionView用の設定可能かつ使いやすいストレッチヘッダービュー。
- [ParallaxTableViewHeader](https://github.com/Vinodh-G/ParallaxTableViewHeader) - UITableViewのヘッダー部分にスクロール時に発生するパラリックススクロール効果。

**[back to top関連](#contributing-and-collaborating)**

#### プレースホルダー <a id="placeholder"></a>

*Empty-state and placeholder views for lists and collections.*

- [HGPlaceholders](https://github.com/HamzaGhazouani/HGPlaceholders) - プロジェクト内の任意のUITableView/UICollectionViewにプレースホルダーと空状態を表示・作成するための素晴らしいライブラリ。
- [ListPlaceholder](https://github.com/malkouz/ListPlaceholder) - ListPlaceholderはSwiftによるライブラリで、Facebook風アニメーションプレースホルダーをテーブルビューまたはコレクションビューに簡単に追加できます。
- [WLEmptyState](https://github.com/wizeline/WLEmptyState) - UITableViewのデータセットが空のときのビューをカスタマイズできるコンポーネント

**[back to top関連](#contributing-and-collaborating)**

#### コレクションビューレイアウト <a id="collection-view-layout"></a>

*Custom collection view layouts: waterfall, circular, tag-cloud and more.*

- [AZSafariCollectionViewLayout](https://github.com/AfrozZaheer/AZSafariCollectionViewLayout) - AZSafariCollectionViewLayoutは、サファリブラウザの履歴ページのレイアウトを再現したコレクションビューのレイアウト。非常に使いやすく、IBInspectableが提供されており、簡単な統合が可能です。
- [BouncyLayout](https://github.com/roberthein/BouncyLayout) - BouncyLayoutは、セルがバウンスするコレクションビューのレイアウト。
- [CenteredCollectionView](https://github.com/BenEmdon/CenteredCollectionView) - Swiftで書かれた軽量なUICollectionViewLayout。セルを「ページ」のように配置し、中央に配置します。🎨
- [CHTCollectionViewWaterfallLayout](https://github.com/chiahsien/CHTCollectionViewWaterfallLayout) - UICollectionView用のウォーターフォール（Pinterest風）レイアウト。
- [CollectionViewSlantedLayout](https://github.com/yacir/CollectionViewSlantedLayout) - UICollectionViewレイアウトに斜めコンテンツを適用。
- [mosaic-layout](https://github.com/vinnyoodles/mosaic-layout) - Lightboxのアルゴリズムをモチーフにしたマス目コレクションビューレイアウト。Swiftで書かれた。
- [SquareMosaicLayout](https://github.com/iwheelbuy/SquareMosaicLayout) - 高度にカスタマイズ可能な拡張マス目UICollectionViewLayout。極めて柔軟なカスタマイズを重視。
- [Swinflate](https://github.com/VladIacobIonut/Swinflate) - 複数のレイアウトを提供し、コレクションビューでの軽量かつスムーズな体験を実現。
- [TLLayoutTransitioning](https://github.com/SwiftKickMobile/TLLayoutTransitioning) - iOSにおけるUICollectionViewレイアウト間のトランジションを強化。
- [UICollectionViewSplitLayout](https://github.com/yahoojapan/UICollectionViewSplitLayout) - UICollectionViewレイアウトがコレクションビューの反応性を高める

**[back to top関連](#contributing-and-collaborating)**


### タグ <a id="tag"></a>

*Tag input fields, chip controls and tag-cloud views.*

- [AMTagListView](https://github.com/andreamazz/AMTagListView) - UIScrollViewのサブクラスで、高度にカスタマイズ可能なタグのリストを追加できる。
- [PARTagPicker](https://github.com/paulrolfe/PARTagPicker) - このPodは、WordPressやTumblr風にタグを選択・作成するためのビュー制御を提供。
- [RKTagsView](https://github.com/kuler90/RKTagsView) - 高度にカスタマイのiOSタグビュー（NSTokenFieldに似た）。編集、複数選択、Auto Layoutなど、多くの機能をサポート。
- [TagCellLayout](https://github.com/riteshhgupta/TagCellLayout) - タグ用のUICollectionViewレイアウト（左・中央・右の並び方）
- [TTGTagCollectionView](https://github.com/zekunyan/TTGTagCollectionView) - シンプルなテキストタグまたはカスタムタグビューを、垂直スクロール可能なビューに表示します。
- [WSTagsField](https://github.com/whitesmith/WSTagsField) - iOSのテキストフィールドとしてタグを表現するもの。
- [YNSearch](https://github.com/younatics/YNSearch) - Swift 3で書かれた、Pinterestのような完全にカスタマイズ可能な検索ビュー。

**[back to top関連](#contributing-and-collaborating)**

### TextField／TextView <a id="textfield--textview"></a>

*UITextField and UITextView subclasses with added functionality.*

- [ARAutocompleteTextView](https://github.com/alexruperez/ARAutocompleteTextView) - UITextViewのサブクラスで、リアルタイムにテキストの提案を自動的に表示します。メールのテキストビューに最適です。
- [AwesomeTextField](https://github.com/aleksandrshoshiashvili/AwesomeTextFieldSwift) - Awesome TextFieldはiOS向けのシンプルで使いやすいライブラリです。高度にカスタマイズ可能で、アプリ内の登録やログインフォームに最適です。
- [CBPinEntryView](https://github.com/Fawxy/CBPinEntryView) - Swift 4.2で書かれた、ピンやコード、パスワード入力用のカスタマイズ可能なビュー。iOS 12でワンタイムコードをサポートしています。
- [CHIOTPField](https://github.com/ChiliLabs/CHIOTPField) - 一度限りのパスワード、SMSコード、PINコードなどに使えるテキストフィールドのセット
- [CocoaTextField](https://github.com/edgar-zigis/CocoaTextField) - 2019年のMaterial.IOガイドラインに基づいて作成されたUITextField。
- [DTTextField](https://github.com/iDhaval/DTTextField) - Swift3.0で書かれた、フローティングプレースホルダーとエラーラベルを備えたカスタムテキストフィールド。
- [GrowingTextView](https://github.com/KennethTsang/GrowingTextView) - Swift3およびSwift2.3で実装されたUITextView。自動拡大、プレースホルダー、長さ制限をサポートしています。
- [HTYTextField](https://github.com/hanton/HTYTextField) - バウンス効果を持つUITextFieldのプレースホルダー
- [InputBarAccessoryView](https://github.com/nathantannar4/InputBarAccessoryView) - 強力な入力バーを構築するためのシンプルかつ容易にカスタマイズ可能なInputAccessoryView。自動補完および添付機能をサポート
- [InstantSearch iOS](https://github.com/algolia/instantsearch-ios) - iOS上で即時検索アプリを構築するための、ウィジェットとヘルパーのライブラリ。
- [IQDropDownTextField](https://github.com/hackiftekhar/IQDropDownTextField) - UIPickerViewを使用したドロップダウンサポート付きのテキストフィールド。
- [JVFloatLabeledTextField](https://github.com/jverdi/JVFloatLabeledTextField) - フローティングラベルを備えたUITextFieldのサブクラス。
- [KMPlaceholderTextView](https://github.com/MoZhouqi/KMPlaceholderTextView) - Swiftで書かれた、マルチラインプレースホルダーをサポートするUITextViewのサブクラス。
- [MLPAutoCompleteTextField](https://github.com/EddyBorja/MLPAutoCompleteTextField) - 通常のUITextFieldに似た挙動を持つUITextFieldのサブクラス。ただし、1つの特徴として、ユーザーが入力するにつれて自動で更新される補完提案のドロップダウンテーブルを管理します。
- [NextGrowingTextView](https://github.com/muukii/NextGrowingTextView) - iOS 7以上向けに最適化された「成長するテキストビュー」の次の世代。
- [PasswordTextField](https://github.com/PiXeL16/PasswordTextField) - パスワードを表示または非表示に切り替えることができるカスタムテキドフィールド。また、良いパスワードポリシーを強制します。
- [PYSearch](https://github.com/ko1o/PYSearch) - iPhoneおよびiPad用のiOS向け、洗練された検索コントローラー。UISearchControllerを置き換えます。
- [Reel Search](https://github.com/Ramotion/reel-search) - RAMReelは、リストから選択できるコントローラーです。
- [RPFloatingPlaceholders](https://github.com/iwasrobbed/RPFloatingPlaceholders) - テキストフィールドにテキストが入力された際に、プレースホルダーがフローティングラベルに変化するUITextFieldおよびUITextViewのサブクラス。
- [RSFloatInputView](https://github.com/roytornado/RSFloatInputView) - スムーズなアニメーションとアイコン、セパレータをサポートするフロート入力ビュー。Swiftで作成。
- [RSKGrowingTextView](https://github.com/ruslanskorb/RSKGrowingTextView) - 軽量なUITextViewのサブクラスで、自動的に大きさを変化します。
- [RSKPlaceholderTextView](https://github.com/ruslanskorb/RSKPlaceholderTextView) - 軽量なUITextViewのサブクラスで、プレースホルダーをサポートします。
- [SearchTextField](https://github.com/apasccon/SearchTextField) - UITextFieldのサブクラスで自動補完の提案リストを提供する
- [SelectableTextView](https://github.com/jhurray/SelectableTextView) - 選択と展開をサポートするテキストビュー
- [StatefulViewController](https://github.com/aschuch/StatefulViewController) - コンテンツ、ロード中、エラー、空状態に基づいたプレースホルダービュー
- [styled-text](https://github.com/blueapron/styled-text) - iOS向けの宣言型テキストスタイルと簡易な動的タイプサポート
- [TextFieldCounter](https://github.com/serralvo/TextFieldCounter) - ユーザー体験が心を奪われるUITextFieldの文字数カウンター
- [TextFieldEffects](https://github.com/raulriera/TextFieldEffects) - Codropsをインスピレーションとして、Swiftで構築されたカスタムUITextField効果
- [TweeTextField](https://github.com/oleghnidets/TweeTextField) - 軽量なテキストフィールドセットで、良好なアニメーションと機能を備えた
- [UITextField-Navigation](https://github.com/T-Pham/UITextField-Navigation) - UITextField-Navigationは、UITextFieldにキーボードに次、前、完了ボタンを追加する
- [UITextField-Shake](https://github.com/andreamazz/UITextField-Shake) - UITextFieldにシェイクアニメーションを追加するカテゴリ。[Also with Swift version](https://github.com/King-Wizard/UITextField-Shake-Swift)
- [VENTokenField](https://github.com/venmo/VENTokenField) - ベンモアプリで使用されている使いやすいトークンフィールド
- [VMaskTextField](https://github.com/viniciusmo/VMaskTextField) - VMaskTextFieldはiOS向けの入力マスクを生成するライブラリ

**[back to top関連](#contributing-and-collaborating)**

### UIPageControl関連 <a id="uipagecontrol"></a>

*UIPageControl alternatives and paging indicators.*

- [CHIPageControl](https://github.com/ChiliLabs/CHIPageControl) - 退屈なUIPageControlを置き換える、カッコイイアニメーション付きページコントロールセット
- [PageControls](https://github.com/popwarsweet/PageControls) - UIPageControlを置き換えるカスタムページコントロールの選択肢で、ここに掲載されたdribbbleをインスピレーションとして作成
- [TKRubberIndicator](https://github.com/TBXark/TKRubberIndicator) - Swiftでのラバーインジケータ

**[back to top関連](#contributing-and-collaborating)**

### Webビュー <a id="web-view"></a>

*WKWebView and UIWebView wrappers and helpers.*

- [PTPopupWebView](https://github.com/pjocprac/PTPopupWebView) - PTPopupWebViewはiOS向けにシンプルで便利なWebViewであり、ポップアップ可能で多くのカスタマイズ項目を備えている
- [SVWebViewController](https://github.com/TransitApp/SVWebViewController) - iOSアプリ向けのすぐに使える型インラインブラウザ
- [SwiftWebVC](https://github.com/meismyles/SwiftWebVC) - Swift iOSアプリ向けのすぐに使える型インラインブラウザ

**[back to top関連](#contributing-and-collaborating)**

## ユーティリティ <a id="utility"></a>

*General-purpose utilities, extensions and Swiss-army helpers for iOS.*

 * [Underscore.m](https://github.com/robb/Underscore.m) - データ操作用のDSL
 * [XExtensionItem](https://github.com/tumblr/XExtensionItem) - iOSアプリ間およびシェア拡張機能間の構造化データの共有を容易にする
 * [ReflectableEnum](https://github.com/fastred/ReflectableEnum) - Objective-Cでの列挙型のリフレクション
 * [ObjectiveSugar](https://github.com/supermarin/ObjectiveSugar) - 人間向けのObjective-C拡張。Ruby風。
 * [OpinionatedC](https://github.com/leoschweizer/OpinionatedC) - Objective-CがSmalltalkからもっと継承すべきだったこと
 * [SwiftRandom](https://github.com/thellimist/SwiftRandom) - ランダムデータ生成器
 * [RandomKit](https://github.com/nvzqz/RandomKit/) - Swiftでのランダムデータ生成
 * [YOLOKit](https://github.com/mxcl/YOLOKit) - 四角い物体を丸い穴に差し込むこと。
 * [EZSwiftExtensions](https://github.com/goktugyil/EZSwiftExtensions) - :smirk: Swiftの標準型とクラスがどのように機能すべきだったかについて。
 * [Pantry](https://github.com/nickoneill/Pantry) - Swiftにおける欠けた明るさの持続層。
 * [SwiftParsec](https://github.com/davedufresne/SwiftParsec) - Swiftプログラミング言語で書かれたパーサーコンビネータライブラリ。
 * [OrderedSet](https://github.com/Weebly/OrderedSet) - Swiftで一意かつ順序を持つオブジェクトのコレクション。
 * [Datez](https://github.com/SwiftKitz/Datez) - `NSDate`、`NSCalendar`、および`NSDateComponents` を扱うSwiftライブラリ。
 * [BFKit](https://github.com/FabrizioBrancati/BFKit) - Objective-Cでアプリ開発を速く進めるための便利なクラスのコレクション。
 * [BFKit-Swift](https://github.com/FabrizioBrancati/BFKit-Swift) - Swiftでアプリ開発を速く進めるための便利なクラスのコレクション。
 * [Scale](https://github.com/onmyway133/scale) - Swiftで書かれた単位変換ツール（CocoaPods経由で利用可能）。
 * [Standard Template Protocols](https://github.com/cconeil/Standard-Template-Protocols) - iOS開発に必要な日々のプロトコル。
 * [TimeLord](https://github.com/JonFir/TimeLord) - Swiftでの簡単な日時（NSDate）管理。
 * [AppVersionMonitor](https://github.com/eure/AppVersionMonitor) - iOSアプリのバージョンを簡単にモニタリング
 * [Sugar](https://github.com/hyperoslo/Sugar) - ココアに合う素晴らしいもの。
 * [Then](https://github.com/devxoul/Then) - ✨ Swiftの初期化子に非常に便利な文法糖。
 * [Kvitto](https://github.com/Cocoanetics/Kvitto) - App Storeのリセイプト検証。
 * [Notificationz](https://github.com/SwiftKitz/Notificationz) - SwiftでNSNotificationCenterを自分のものにするためのサポート。
 * [SwiftFoundation](https://github.com/PureSwift/SwiftFoundation) - Swift標準ライブラリを補完する、プラットフォームを越えたプロトコル指向のベースライブラリ。（純Swift、Linux対応）。
 * [libextobjc](https://github.com/jspahrsummers/libextobjc) - Objective-Cプログラミング言語を拡張するためのCocoaライブラリ。
 * [VersionTrackerSwift](https://github.com/tbaranes/VersionTrackerSwift) - ユーザーが以前にインストールしたアプリのバージョンを追跡する。
 * [DeviceGuru](https://github.com/InderKumarRathore/DeviceGuru/) - DeviceGuruは、デバイスの正確なタイプ（例：iPhone 6またはiPhone 6s）を知るためのシンプルなライブラリ（Swift）。
 * [AEAppVersion](https://github.com/tadija/AEAppVersion) - Swiftで書かれたiOS向けのシンプルで軽量なアプリバージョン追跡。
 * [BlocksKit](https://github.com/BlocksKit/BlocksKit) - Objective-Cのブロックユーティリティ、いつも欲しがっていたもの。
 * [SwiftyUtils](https://github.com/tbaranes/swiftyutils) - 各プロジェクトで必要となる再利用可能なコードのすべて。
 * [RateLimit](https://github.com/soffes/RateLimit) - コードを定期的に実行するためのシンプルなユーティリティ。
 * [Outlets](https://github.com/phatblat/Outlets) - IBOutletおよびIBActionの接続を検証するためのユーティリティ関数を提供します
 * [EasyAbout](https://github.com/JARMourato/EasyAbout) - 設定バンドルを使ってiOSアプリにCocoaPodsのライセンスとアプリバージョンを簡単に追加します
 * [Validated](https://github.com/Ben-G/Validated) - Swiftによる若干の依存型を扱うμライブラリ
 * [Cent](https://github.com/ankurp/Cent) - Swift標準型とクラスへの拡張機能
 * [AssistantKit](https://github.com/anatoliyv/AssistantKit) - iOSデバイスのプロパティ、OSバージョン、スクリーンサイズの検出や操作を簡単に行う方法。Swiftで実現。
 * [SwiftLinkPreview](https://github.com/LeonardoCardoso/SwiftLinkPreview) - URLからプレビューを作成し、タイトル、関連テキスト、画像などの情報を取得します
 * [BundleInfos](https://github.com/rollmind/BundleInfos) - バンドル情報のシンプルな取得関数。例：バージョン情報の短縮表示。
 * [YAML.framework](https://github.com/mirek/YAML.framework) - オブジェクト・Cに適した正しくなったYAMLサポート `LibYAML`.
 * [ReadabilityKit](https://github.com/exyte/ReadabilityKit) - ニュース、記事、全文のメタデータをSwiftで抽出するライブラリ
 * [MissionControl-iOS](https://github.com/appculture/MissionControl-iOS) - Swiftで書かれた非常に強力なリモート設定ユーティリティ（iOS、watchOS、tvOS、macOS）
 * [SwiftTweaks](https://github.com/Khan/SwiftTweaks) - 再コンパイルなしでiOSアプリをカスタマイズ！
 * [UnsupportedOSVersionAlert](https://github.com/caloon/UnsupportedOSVersionAlert) - iOSの不サポートバージョン（例：ベータ版）を使用するアプリにユーザーにポップアップで警告します
 * [SwiftSortUtils](https://github.com/dsmatter/SwiftSortUtils) - Swiftでのソートをより快適にし、かつ既存のNSSortDescriptorインスタンスをSwiftで再利用できるようにするライブラリ
 * [Retry](https://github.com/icanzilb/Retry) - あなたは、 `try` が時々少し頑張ってほしいと願っていませんか？ それなら `retry` をご存知ください。
 * [ObjectiveKit](https://github.com/marmelroy/ObjectiveKit) - Objective-Cランタイム関数にSwiftが対応したAPI
 * [MoyaSugar](https://github.com/devxoul/MoyaSugar) - Moyaに用意されたシンタクティックシュガー
 * [SwifterSwift](https://github.com/SwifterSwift/SwifterSwift) - 400以上のネイティブSwift 4拡張機能を収録した、生産性を高める便利なコレクション
 * [Eject](https://github.com/Rightpoint/Eject) - Interface Builderにエジェクトボタンを追加してSwiftコードを生成します
 * [ContactsWrapper](https://github.com/abdullahselek/ContactsWrapper) - Objective-Cによる連絡先と連絡先グループのラッパー。使いやすいです
 * [XestiMonitors](https://github.com/eBardX/XestiMonitors) - Swiftで書かれた拡張可能なモニタリングフレームワーク
 * [OpenSourceController](https://github.com/floriangbh/OpenSourceController) - アプリに使用されているライブラリのライセンスを表示する最もシンプルな方法
 * [App-Update-Tracker](https://github.com/Stunner/App-Update-Tracker) - アプリのインストールや更新時にコードを検出・実行する方法
 * [ExtensionalSwift](https://github.com/4taras4/SwiftExtension) - ユーティリティなSwift拡張機能を一か所にまとめた.
 * [InAppSettingsKit](https://github.com/futuretap/InAppSettingsKit) - このiOSフレームワークは、設定をアプリ内に配置できるようにし、あるいはSettingsアプリに代わって設定を行うことができる.
 * [MMWormhole](https://github.com/mutualmobile/MMWormhole) - iOSアプリ間および拡張機能間のメッセージ伝達.
 * [DefaultStringConvertible](https://github.com/jessesquires/DefaultStringConvertible) - Swift型に対するデフォルトのCustomStringConvertible実装.
 * [FluxCapacitor](https://github.com/marty-suzuki/FluxCapacitor) - FluxCapacitorは、プロトコルとtypealiasを使ってFlux設計パターンを簡単に実装できるようにする.
 * [VTAcknowledgementsViewController](https://github.com/vtourraine/VTAcknowledgementsViewController) - CocoaPods用に即時使用可能な「Acknowledgements」／「Licenses」／「Credits」ビュー制御.
 * [Closures](https://github.com/vhesener/Closures) - UIKitおよびFoundation用のSwiftyクロージャー。
 * [WhatsNew](https://github.com/BalestraPatrick/WhatsNew) - アプリ更新後にPages、NumbersおよびKeynoteのように新しい機能を紹介
 * [MKUnits](https://github.com/michalkonturek/MKUnits) - Swift用の単位変換ライブラリ.
 * [ActionClosurable](https://github.com/takasek/ActionClosurable) - objcスタイルのターゲット／アクションをスウィフティなクロージャに変換するための拡張機能.
 * [ios_system](https://github.com/holzschu/ios_system) - iOSプログラムにおけるsystem()のドロップイン置き換え.
 * [SwiftProvisioningProfile](https://github.com/Sherlouk/SwiftProvisioningProfile) - プロビジョニングプロファイルをSwiftモデルにパースする.
 * [Once](https://github.com/luoxiu/Once) - 一時的な操作を管理するためのミニマリストライブラリ.
 * [ZamzamKit](https://github.com/ZamzamInc/ZamzamKit) - Standard Library、FoundationおよびUIKit向けのマイクロユーティリティと拡張機能のコレクション
 * [DuctTape](https://github.com/marty-suzuki/DuctTape) - SwiftにおけるKeyPathベースの動的メンバ検索のためのシンタックスシュガー.
 * [ReviewKit](https://github.com/simonmitchell/ReviewKit) - アプリの利用者が良好な体験をしたかどうかをログで記録し、SKStoreReviewControllerを使ってレビュープロンプトの要求をゲートキープするためのフレームワーク.
 * [SwiftBoost](https://github.com/sparrowcode/SwiftBoost) - 開発プロセスを加速するSwift拡張機能のコレクション。

 **[back to top関連](#contributing-and-collaborating)**

## 利用者同意 <a id="user-consent"></a>

*GDPR, tracking transparency and user-consent management libraries.*

- [PrivacyFlash Pro](https://github.com/privacy-tech-lab/privacyflash-pro) - iOSアプリのコードからプライバシーポリシーを自動生成する.
- [SmartlookConsentSDK](https://github.com/smartlook/ios-consent-sdk) - ユーザーがプライバシー選択をカスタマイズできるようにするオープンソースSDK。ユーザーのプライバシー設定を保存するためのコントロールパネルを提供する.

**[back to top関連](#contributing-and-collaborating)**

## VR関連 <a id="vr"></a>

*Virtual reality SDKs and frameworks for iOS apps.*

- [360 VR Player](https://github.com/hanton/HTY360Player) - オープンソース、広告なし、ネイティブかつユニバーサルな36及度パノラマ動画プレイヤー（iOS用）.
- [simple360player](https://github.com/Aralekk/simple360player_iOS) - 無料かつ広告なしの360度VR動画プレイヤー。フラットまたはステレオ。Swift 2対応.
- [Swifty360Player](https://github.com/abdullahselek/Swifty360Player) - AVPlayerを用いてiOSで360度動画をストリーミングするプレイヤー（Swift対応）.

**[back to top関連](#contributing-and-collaborating)**

## ウォークスルー／導入／チュートリアル <a id="walkthrough--intro--tutorial"></a>

*Onboarding screens, walkthroughs and introductory tutorials.*

- [AlertOnboarding](https://github.com/PhilippeBoisney/AlertOnboarding) - ユーザーが素晴らしい世界に導入されるためのシンプルで美しいAlertView.
- [AMPopTip](https://github.com/andreamazz/AMPopTip) - 指定されたフレームからポップアウトするアニメーションポップオーバー。UIヒントや導入に最適。
- [AwesomeSpotlightView](https://github.com/aleksandrshoshiashvili/AwesomeSpotlightView) - アプリの使い方を教えるチュートリアルを作成するツール、または画面に何かを強調するためのもの。Swiftで書かれた。
- [BWWalkthrough](https://github.com/ariok/BWWalkthrough) - iOSアプリ用のカスタムウォークスルーを構築するクラス
- [ConcentricOnboarding](https://github.com/exyte/ConcentricOnboarding) - タップアクション付きのウォークスルーまたはオンボーディングフローのSwiftUIライブラリ
- [EAIntroView](https://github.com/ealeksandrov/EAIntroView) - 導入ビューに高度にカスタマイズ可能なすぐに使えるソリューション。
- [GHWalkThrough](https://github.com/GnosisHub/GHWalkThrough) - UICollectionViewをバックアップした導入ビュー向けのすぐに使えるコンポーネント。
- [ICETutorial](https://github.com/icepat/ICETutorial) - Path 3.Xアプリで紹介されたような、素敵なチュートリアル。
- [Instructions](https://github.com/ephread/Instructions) - iOSプロジェクトにカスタマイズ可能なガイドマークを簡単に追加できる。
- [JazzHands](https://github.com/IFTTT/JazzHands) - Jazz HandsはUIKit向けのシンプルなキーフレームベースのアニメーションフレームワーク。アニメーションはジェスチャ、スクロールビュー、KVO、またはReactiveCocoaで制御可能。
- [Material Showcase iOS](https://github.com/aromajoin/material-showcase-ios) - iOSアプリの美しくエレガントな紹介用のプレゼンテーション。
- [Minamo](https://github.com/yukiasai/Minamo) - Swiftで書かれたシンプルなガイドマークライブラリ。
- [MYBlurIntroductionView](https://github.com/MatthewYork/MYBlurIntroductionView) - MYIntroductionViewの超強化版。カスタムアプリ導入やチュートリアルを作成するためのもの。
- [Onboard](https://github.com/mamaral/Onboard) - 数行のコードで、美しいかつ魅力的なオンボーディング体験を作成できる。
- [OnboardKit](https://github.com/NikolaKirev/OnboardKit) - iOSアプリ向けのカスタマイズ可能なユーザーオンボーディング
- [paper-onboarding](https://github.com/Ramotion/paper-onboarding) - PaperOnboardingは、マテリアルデザインのスライダー。
- [Presentation](https://github.com/hyperoslo/Presentation) - プレゼンテーションは、チュートリアル、リリースノート、アニメーションページを作成するためのツール。
- [RazzleDazzle](https://github.com/IFTTT/RazzleDazzle) - シンプルなキーフレームベースのアニメーションフレームワーク。Swiftで書かれており、スクロールアプリ紹介に最適。
- [SwiftyWalkthrough](https://github.com/ruipfcosta/SwiftyWalkthrough) - アプリ内で素晴らしいウォークスルー体験を作成する最も簡単な方法。Swiftで実現。
- [VideoSplashKit](https://github.com/svhawks/VideoSplashKit) - VideoSplashKit - UIViewControllerライブラリで、背景に動画を用いた簡単な導入ページを作成可能。
- [WhatsNewKit](https://github.com/SvenTiigi/WhatsNewKit) - あなたの素晴らしい新機能を紹介

**[back to top関連](#contributing-and-collaborating)**

## Webサイト <a id="websites"></a>

*Essential websites for iOS developers to follow.*

- [Apple's Swift Blog](https://developer.apple.com/swift/blog/)
- [ASCIIwwdc](https://asciiwwdc.com/)
- [BGR](https://bgr.com/ios-7/)
- [Cocoa Controls](https://www.cocoacontrols.com/) - iOSおよびmacOS向けのオープンソースUIコンポーネント。
- [Code Facebook](https://engineering.fb.com/category/ios/)
- [Feeds for iOS Developer](https://github.com/rgnlax/Feeds-for-iOS-Developer) - iOS開発者向けのRSSフィードリスト。
- [iMore](https://www.imore.com/)
- [iOS Dev Nuggets](http://hboon.com/iosdevnuggets/)
- [iOS Developer and Designer interview](https://github.com/9magnets/iOS-Developer-and-Designer-Interview-Questions) - iOS開発者を雇うための初心者向けの小さなガイド。
- [iOS Programming Subreddit](https://www.reddit.com/r/iOSProgramming/)
- [iOS8-day-by-day](https://github.com/ScottLogic/iOS8-day-by-day)
- [iOS9-day-by-day](https://github.com/ScottLogic/iOS9-day-by-day)
- [iOScreator](https://www.ioscreator.com/)
- [Lifehacker](https://lifehacker.com/tag/ios)
- [Mathew Sanders](http://mathewsanders.com/)
- [Natasha The Robot](https://www.natashatherobot.com/)
- [NSHipster](https://nshipster.com)
- [Objc.io](https://www.objc.io/)
- [Ohmyswift](https://www.ohmyswift.com/blog/)
- [Point Free](https://www.pointfree.co/) - 関数型プログラミングとSwiftについての動画シリーズ。
- [Roadmap.sh iOS Roadmap](https://roadmap.sh/ios) - iOS開発者向けのコミュニティが作成したルートマップ。

**[back to top関連](#contributing-and-collaborating)**


## WebSocket関連 <a id="websocket"></a>

*WebSocket client libraries for real-time communication on iOS.*

- [socket.io-client-swift](https://github.com/socketio/socket.io-client-swift) - iOS/macOS向けのSocket.IOクライアント
- [SocketRocket](https://github.com/facebook/SocketRocket) - Objective-CによるWebSocketクライアントライブラリ
- [Socks](https://github.com/vapor-community/sockets) - 純Swiftのソケット：TCP、UDP；クライアント、サーバー；Linux、macOS
- [Starscream](https://github.com/daltoniam/Starscream) - iOSおよびmacOS向けのSwiftでのWebSockets
- [Swift-ActionCableClient](https://github.com/danielrhodes/Swift-ActionCableClient) - Rails 5でリリースされるActionCableは、リアルタイム機能をアプリに簡単に追加できるWebSocketサーバーです
- [SwiftSocket](https://github.com/swiftsocket/SwiftSocket) - Apple Swift言語向けのシンプルなソケットライブラリ

**[back to top関連](#contributing-and-collaborating)**


## ツール <a id="tools"></a>

*Command-line utilities, code generators and helper tools for iOS development.*

- [abandoned-strings](https://github.com/ijoshsmith/abandoned-strings) - iOSまたはmacOSアプリケーションにおける未使用リソース文字列を検出するコマンドラインツール
- [AppDevKit](https://github.com/yahoo/AppDevKit) - AppDevKitは、iOS開発者に日常的なiOSアプリ開発に必要な有用な機能を提供するiOS開発ライブラリです
- [appledoc](https://github.com/tomaz/appledoc) - Objective-CコードのAppleスタイルドキュメンテーション生成ツール
- [AssetChecker 👮](https://github.com/freshOS/AssetChecker) - Assets.xcassetsファイルを清潔に保ち、異常な内容があれば警告を発行します
- [Attabench](https://github.com/attaswift/Attabench) - Swift向けのマイクロベンチマークアプリ（ログログプロット付き）
- [AVXCAssets-Generator](https://github.com/angelvasa/AVXCAssets-Generator) - AVXCAssets Generatorは、アセット画像のパスを入力して、1クリックでアプリアイコンセットと画像セットを作成します
- [Blade](https://github.com/jondot/blade) - iOS / macOSアプリアイコン、ユニバーサル画像などへのXcode画像カタログを生成します
- [BuildTimeAnalyzer](https://github.com/RobertGummesson/BuildTimeAnalyzer-for-Xcode) - Swift向けのビルド時間分析ツール
- [Cichlid](https://github.com/dealforest/Cichlid) - 現在のプロジェクトのDerivedDataディレクトリを自動的に削除します
- [Cutter](https://cutter.albemala.me/) - すべての画面サイズ向けのiOSスタート画像（スプラッシュスクリーン）を、1つのテンプレートから生成するツール
- [Duration](https://github.com/SwiftStudies/Duration) - シンプルなSwiftパッケージで、操作にかかる時間を測定・報告します
- [Ecno](https://github.com/xmartlabs/Ecno) - Ecnoは、UserDefaultsをベースにした純Swift 3によるタスク状態管理ツールです
- [fastlane-plugin-appicon](https://github.com/fastlane-community/fastlane-plugin-appicon) - マスターアプリアイコンから必要なアイコンサイズとアイコンセットを生成します
- [FBSimulatorControl](https://github.com/facebook/idb) - iOSシミュレーターの管理および操作を行うmacOSライブラリ
- [FengNiao](https://github.com/onevcat/FengNiao) - Xcodeにおける不要なリソースを削除するためのコマンドラインツール
- [GDPerformanceView-Swift](https://github.com/dani-gavrilov/GDPerformanceView-Swift) - ステータスバーの上にFPS、CPU使用率、アプリおよびiOSバージョンを表示し、デリゲート経由でFPSおよびCPU使用率を報告する
- [GetUniversal.link](https://getuniversal.link/) - 無料のユニバーサルリンクおよびAppleアプリサイトアソシエーションテストツール
- [IBM Swift Sandbox](https://swift.sandbox.bluemix.net) - IBM Swift Sandboxは、Linux上でサーバ環境にSwiftコードを書く・実行できるインタラクティブウェブサイトです
- [infer](https://github.com/facebook/infer) - Java、C、Objective-C向けの静的解析ツール
- [iSimulator](https://github.com/wigl/iSimulator) - iSimulatorは、シミュレーターを制御し、シミュレーターにインストールされたアプリを管理するGUIツールです
- [Jazzy](https://github.com/realm/jazzy) - SwiftおよびObjective-C向けの心を込めたドキュメント
- [Kin](https://github.com/Karumi/Kin) - Xcodeのビルドが破損したため、マージを元に戻すことがあったことはありますか？その場合、Kinがお使いのツールです。プロジェクト設定ファイルを解析し、エラーを検出します
- [Laurine](https://github.com/JiriTrecak/Laurine) - Swiftで書かれたローカライズコード生成ツール。素晴らしい！
- [LicensePlist](https://github.com/mono0926/LicensePlist) - iOSアプリケーションのすべての依存関係のライセンスリストを生成するツール
- [LifetimeTracker](https://github.com/krzysztofzablocki/LifetimeTracker) - retainサイクルやメモリリークを早期に検出
- [Lona](https://github.com/airbnb/Lona) - デザインシステムを定義し、それを使ってクロスプラットフォームUIコード、Sketchファイル、画像、その他アーテファクトを生成するツール
- [Misen](https://github.com/tasanobu/Misen) - SwiftでXcode Asset Catalogを簡単に使用できるスクリプト
- [nef](https://github.com/bow-swift/nef) - Xcode Playground向けのコマンドラインツールセット：Xcode Playgroundに記述されたドキュメントのコンパイル時検証を可能にし、Markdownファイルを生成し、Jekyllによるマイクロサイトの構築とCarbonによるコードスニペットのエクスポートに統合
- [Nomad](https://nomad-cli.com) - APNsを送信したり、 `.ipa` を作成・配布したり、インアプリ購入の受領確認を検証したりするためのコマンドラインユーティリティとライブラリのセット。
- [Pecker](https://github.com/woshiccm/Pecker) - CodePeckerは、使用されていないコードを検出するツールです
- [Peek](https://github.com/shaps80/Peek) - アプリケーションを一瞬で確認できます
- [Plank](https://github.com/pinterest/plank) - 不変なモデルオブジェクトを生成するツール
- [PlayAlways](https://github.com/insidegui/PlayAlways) - メニューバーからXcode Playgroundを作成
- [playgroundbook](https://github.com/playgroundbooks/playgroundbook) - Swift Playgroundブック用のツール
- [ProvisionQL](https://github.com/ealeksandrov/ProvisionQL) - アプリケーションおよびプロビジョニングプロファイルファイル向けのQuick Lookプラグイン
- [R.swift](https://github.com/mac-cain13/R.swift) - Swiftプロジェクトに画像、セル、セグの強型で自動補完可能なリソースを取得するツール
- [Respresso Image Converter](https://respresso.io/image-converter) - iOS、Android、Web向けのマルチプラットフォーム画像変換ツール。PDF、SVG、ベクターデリブル、JPG、PNG、WEBPフォーマットをサポート。
- [Retini](https://github.com/terwanerik/Retini) - 超シンプルなリターン（2x、3x）画像変換ツール
- [Rugby](https://github.com/swiftyfinch/Rugby) - 🏈 CocoaPodsをキャッシュして、Xcodeプロジェクトの再構築とインデックス作成を速くする
- [SBConstants](https://github.com/paulsamuels/SBConstants) - プロジェクト内のストーリーボードから識別子を取得して定数ファイルを生成するツール
- [Shark](https://github.com/kaandedeoglu/Shark) - .xcassetsフォルダを強型のenumに変換するSwiftスクリプト
- [SourceKitten](https://github.com/jpsim/SourceKitten) - SourceKitとやり取りするためのかわいらしいフレームワークとコマンドラインツール
- [Sourcery](https://github.com/krzysztofzablocki/Sourcery) - Swiftにメタプログラミングを導入し、Swiftコードを生成できるツール
- [Speculid](https://speculid.com) - SVG、PNG、JPEGファイルから画像セットとアプリアイコンを生成
- [Storyboard -> SwiftUI Converter](https://swiftify.com/#/converter/storyboard2swiftui/) - Storyboard -> SwiftUIコンバータは、.storyboardと.xibをSwiftUIに変換するコンバータ
- [StoryboardMerge](https://github.com/marcinolawski/StoryboardMerge) - Xcodeのストーリーボードの差分とマージツール
- [Struct](https://www.get-struct.tools) - iOSおよびMac開発者向けにXcodeプロジェクトの作成と管理を自動化するツール
- [Swift Package Index](https://swiftpackageindex.com) - Swiftパッケージのリスト。パッケージの品質と互換性に関する多くの情報が含まれている。
- [SwiftCompilationPerformanceReporter](https://github.com/TumblrArchive/SwiftCompilationPerformanceReporter) - 特定のターゲットにおける遅いSwiftコンパイルパスについて自動報告を生成するツール
- [swiftenv](https://github.com/kylef/swiftenv) - swiftenvは、Swiftの複数バージョンを簡単にインストールし、切り替えできるツール
- [SwiftGen](https://github.com/SwiftGen/SwiftGen) - Swiftコード（アセット、ストーリーボード、Localizable.strings、UIColors）を生成するSwiftツールのコレクション
- [SwiftLintXcode](https://github.com/ypresto/SwiftLintXcode) - コードのフォーマットにSwiftLintを使用するXcodeプラグイン
- [Traits](https://github.com/krzysztofzablocki/Traits) - リアルタイムでiOSアプリのデザインと動作を変更できるライブラリ（コードおよびインターフェースビルダーの変更をサポート）。
- [Transformer](https://github.com/andresinaka/transformer) - 簡単なオンライン属性文字列作成ツール。ブラウザ内で文字列をフォーマットし、その後属性文字列コードをアプリにコピー＆ペーストできる。
- [ViewMonitor](https://github.com/daisuke0131/ViewMonitor) - ViewMonitorはビューの位置を高精度で測定できる。
- [WatchdogInspector](https://github.com/tapwork/WatchdogInspector) - iOSアプリのステータスバーに現在のフレームレート（fps）を表示。
- [xcenv](https://github.com/xcenv/xcenv) - Xcodeの環境を整える
- [XcodeGen](https://github.com/yonaskolb/XcodeGen) - スペックファイルとフォルダ構造からXcodeプロジェクトを生成するコマンドラインツール
- [Xcodes.app](https://github.com/RobotsAndPencils/XcodesApp) - 複数バージョンのXcodeを簡単にインストールし、切り替えできるツール
- [xib2Storyboard](https://github.com/novemberfiveco/xib2Storyboard) - Xcodeの.xibファイルを.storyboardファイルに変換するツール
- [Xtrace](https://github.com/johnno1962/Xtrace) - クラスまたはインスタンスのObjective-Cメソッド呼び出しをトレース
- [Zolang](https://github.com/Zolang/Zolang) - iOS、Android、Tools間で共有できる論理を記述するプログラミング言語

**[back to top関連](#contributing-and-collaborating)**

## チュートリアルと基調講演 <a id="tutorials-and-keynotes"></a>

*Video tutorials, keynote recordings and conference talks for iOS developers.*

- [AppCoda](https://www.appcoda.com/)
- [Awesome-Swift-Education](https://github.com/hsavit1/Awesome-Swift-Education) - Swiftについて学ぶためのすべてのリソース
- [Awesome-Swift-Playgrounds](https://github.com/uraimo/Awesome-Swift-Playgrounds) - 素晴らしいSwift Playgroundsの一覧！
- [Big Nerd Ranch](https://www.bignerdranch.com/blog/category/ios/)
- [Brian Advent youtube channel](https://www.youtube.com/channel/UCysEngjfeIYapEER9K8aikw/videos) - SwiftチュートリアルのYouTubeチャンネル
- [Cocoa Dev Central](http://cocoadevcentral.com)
- [Cocoa with Love](http://www.cocoawithlove.com/)
- [Code with Chris](https://codewithchris.com/)
- [Conferences.digital](https://github.com/zagahr/Conferences.digital) - macOSアプリ内でコンファレンス動画を視聴
- [DaddyCoding](https://daddycoding.com/) - 初心者から上級者まで幅広いiOSチュートリアル
- [Hacking With Swift](https://www.hackingwithswift.com) - 3つのSwiftチュートリアルでiPhoneおよびiPadアプリの開発を学ぶ
- [iOS Development with Swift in Motion ](https://www.manning.com/livevideo/ios-development-with-swift-lv) - このライブ動画コースは、言語の基本を固め、興味深い例と演習を提供して知識とスキルを構築・練習する
- [Learn Swift](https://blog.coursesity.com/best-swift-tutorials/) - Swiftを学ぶ—トップのオンラインSwiftチュートリアルとコースを厳選したリスト
- [learn-swift](https://github.com/nettlep/learn-swift) - これらのPlaygroundsを通じて、AppleのSwiftプログラミング言語をインタラクティブに学ぶ
- [LearnAppMaking](https://learnappmaking.com) - LearnAppMakingはアプリ開発者にiOSアプリの開発・リリース・マーケティングを支援
- [Mike Ash](https://www.mikeash.com/pyblog/)
- [raywenderlich.com](https://www.raywenderlich.com/ios) - 開発者およびゲーム開発者のためのチュートリアル
- [Realm Academy](https://academy.realm.io/)
- [Swift Education](https://github.com/swifteducation) - Swiftおよびアプリ開発の指導を行う教育者たちのコミュニティ
- [Swift Tutorials by Jameson Quave](https://jamesonquave.com/blog/tutorials/)
- [SwiftUI Tutorials](https://JaneshSwift.com) - SwiftUIとSwiftを無料で学ぶ
- [The Swift Summary Book](https://github.com/jakarmy/swift-summary) - AppleのSwift言語についてPlaygroundsで書かれた要約
- [Thinkster](https://thinkster.io/a-better-way-to-learn-swift)
- [Treehouse's iOS Courses and Workshops](https://teamtreehouse.com/library/topic:ios) - Objective-CおよびSwiftの初心者から上級者向けのトピック
- [Tutorials Point](https://www.tutorialspoint.com/ios/index.htm)
- [Tuts+](https://code.tutsplus.com/categories/ios-sdk)
- [Use Your Loaf](https://useyourloaf.com/)

**[back to top関連](#contributing-and-collaborating)**

### UIテンプレート <a id="ui-templates"></a>

*Design templates and UI kits for jump-starting iOS app design.*

- [iOS 11 iPhone GUI from Design at Meta](https://design.facebook.com/toolsandresources/ios-11-iphone-gui/)
- [iOS Design Guidelines](https://ivomynttinen.com/blog/ios-design-guidelines)
- [iOS UI Design Kit](https://www.invisionapp.com/inside-design/design-resources/tethr/)

**[back to top関連](#contributing-and-collaborating)**

## Xcode関連 <a id="xcode"></a>

*Extensions, themes and other enhancements for Xcode.*

### Xcode拡張 <a id="extensions-xcode-8"></a>

*Xcode source editor and project extensions.*

* [CleanClosureXcode](https://github.com/BalestraPatrick/CleanClosureXcode) - クロージャーの構文をきれいにするXcodeソースエディタ拡張機能
* [xTextHandler](https://github.com/cyanzhong/xTextHandler) - Xcodeソースエディタ拡張ツールセット（Xcode 8向けプラグイン）
* [SwiftInitializerGenerator](https://github.com/Bouke/SwiftInitializerGenerator) - Xcode 8 ソースコード拡張機能で Swift 初期化子を生成する
* [XcodeEquatableGenerator](https://github.com/sergdort/XcodeEquatableGenerator) - Xcode 8 ソースコード拡張機能により、型とフィールドの選択に基づき Swift Equatable プロトコルのコンフォーマンスを生成
* [Import](https://github.com/markohlebar/Import) - コード内のどこからでもインポートを追加するためのXcode拡張機能
* [Mark](https://github.com/velyan/Mark) - MARKコメントを生成するXcode拡張機能
* [XShared](https://github.com/Otbivnoe/XShared) - Slack、Telegramなどのソーシャルメディア向けに特別フォーマットの引用をコピーできるXcode拡張機能
* [XGist](https://github.com/Bunn/Xgist) - テキスト選択や全体のファイルをGitHubのGistに送信し、自動的にGistのURLをクリップボードにコピーできるXcode拡張機能
* [Swiftify](https://swiftify.com/) - Objective-CからSwiftへのオンラインコード変換およびXcode拡張機能
* [DocumenterXcode](https://github.com/serhii-londar/DocumenterXcode) - VVDocumenter-Xcodeをソースエディタ拡張として再び活用する試み
* [Snowonder](https://github.com/Karetski/Snowonder) - Xcode用の魔法のインポート宣言フォーマッター
* [XVim2](https://github.com/XVimProject/XVim2) - Xcode 9 用のVimキーバインディング
* [Comment Spell Checker](https://github.com/velyan/Comment-Spell-Checker) - コードコメントのスペルチェックと自動修正を実行するXcode拡張機能
* [nef](https://github.com/bow-swift/nef-plugin) - このXcode拡張機能により、コードの選択を実行し、スニペットとしてエクスポートできます。Mac AppStoreにて入手可能です。

**[back to top関連](#contributing-and-collaborating)**

### テーマ <a id="themes"></a>

*Color themes for Xcode and related tools.*

- [Dracula Theme](https://draculatheme.com/xcode/) - Xcode用のダークテーマ
- [Solarized-Dark-for-Xcode](https://github.com/ArtSabintsev/Solarized-Dark-for-Xcode/) - Xcode 5用のSolarized Darkテーマ
- [WWDC2016 Xcode Color Scheme](https://github.com/cargath/WWDC2016-Xcode-Color-Scheme) - WWDC 2016招待書に基づくXcode用のカラーテーマ
- [Xcode themes list](https://github.com/hdoria/xcode-themes) - Xcode用のカラーテーマ一覧

**[back to top関連](#contributing-and-collaborating)**


### その他のXcode <a id="other-xcode"></a>

*Additional Xcode plugins, helpers and utilities.*

- [awesome-xcode-scripts](https://github.com/aashishtamsya/awesome-xcode-scripts) - 便利なXcodeスクリプトを収録した一覧
- [SBShortcutMenuSimulator](https://github.com/DeskConnect/SBShortcutMenuSimulator) - シミュレーターにおける3D Touchショートカット
- [Swift Macros 🚀](https://github.com/krzysztofzablocki/Swift-Macros) - コミュニティが作成したマクロと関連学習リソースを収録した一覧
- [Synx](https://github.com/venmo/synx) - XcodeプロジェクトフォルダをXcodeグループに合わせて再構成するコマンドラインツール
- [Xcode Developer Disk Images](https://github.com/haikieu/xcode-developer-disk-image-all-platforms) - デバイスにビルドを実行する際にはXcode開発用ディスクイメージが必要だが、時折最新のディスクイメージがXcodeに含まれていないため、ここに便利に提供しています
- [Xcode Keymap for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stevemoser.xcode-keybindings) - 人気のXcodeキーボードショートカットをVisual Studio Codeにポートした拡張機能

**[back to top関連](#contributing-and-collaborating)**
