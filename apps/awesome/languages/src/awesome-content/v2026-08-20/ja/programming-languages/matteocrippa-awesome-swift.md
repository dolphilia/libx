---
title: "Awesome Swift"
description: "Swiftを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-matteocrippa-awesome-swift-readme-md"
---

# Awesome Swift

Swiftを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

### 目次 <a id="contents"></a>

- [ガイド](#guides)
  - [ニュースレター](#newsletter)
  - [公式ガイド](#official-guides)
  - [スタイルガイド](#style-guides)
  - [サードパーティ製ガイド](#third-party-guides)
- [ボイラープレート](#boilerplates)
- [REPL](#repl)
- [エディター対応](#editor-support)
  - [Emacs](#emacs)
  - [Google Colaboratory](#google-colaboratory)
  - [Vim](#vim)
- [ベンチマーク](#benchmark)
- [変換ツール](#converters)
- [その他のAwesomeリスト](#other-awesome-lists)
- [依存関係マネージャー](#dependency-managers)
- [パターン](#patterns)
- [その他](#misc)
- [ライブラリ](#libs)
  - [アクセシビリティ](#accessibility)
  - [AI](#ai)
  - [アルゴリズム](#algorithm)
  - [分析](#analytics)
  - [アニメーション](#animation)
  - [API](#api)
  - [アプリルーティング](#app-routing)
  - [App Store](#app-store)
  - [音声](#audio)
  - [拡張現実](#augmented-reality)
  - [認証](#authentication)
  - [ボット](#bots)
  - [キャッシュ](#cache)
  - [チャート](#chart)
  - [チャット](#chat)
  - [色](#colors)
  - [コマンドライン](#command-line)
  - [並行処理](#concurrency)
  - [通貨](#currency)
  - [データ管理](#data-management)
    - [CBOR](#cbor)
    - [Core Data](#core-data)
    - [CSV](#csv)
    - [Firebase](#firebase)
    - [GraphQL](#graphql)
    - [JSON](#json)
    - [キーバリューストア](#key-value-store)
    - [MongoDB](#mongodb)
    - [複数データベース](#multi-database)
    - [ORM](#orm)
    - [その他のデータ](#other-data)
    - [Realm](#realm)
    - [SQLドライバー](#sql-drivers)
    - [SQLite](#sqlite)
    - [TOML](#toml)
    - [XML](#xml)
    - [YAML](#yaml)
    - [ZIP](#zip)
  - [日付](#date)
  - [依存性注入](#dependency-injection)
  - [デバイス](#device)
  - [ドキュメント](#documentation)
  - [メール](#email)
  - [組み込みシステム](#embedded-systems)
    - [周辺機器](#peripherals)
  - [イベント](#events)
  - [ファイル](#files)
  - [フォント](#fonts)
  - [ゲームエンジン](#game-engine)
    - [2D](#game-engine-2d)
  - [ゲーム](#games)
  - [ジェスチャー](#gesture)
  - [ハードウェア](#hardware)
    - [3D Touch](#3d-touch)
    - [Bluetooth](#bluetooth)
    - [カメラ](#camera)
      - [バーコード](#barcode)
    - [触覚フィードバック](#haptic-feedback)
    - [iBeacon](#ibeacon)
    - [センサー](#sensors)
  - [画像](#images)
  - [キーバリューコーディング](#key-value-coding)
  - [キーボード](#keyboard)
  - [キット](#kit)
  - [レイアウト](#layout)
    - [Auto Layout](#auto-layout)
  - [ローカライズ](#localization)
  - [位置情報](#location)
  - [ロギング](#logging)
  - [地図](#maps)
  - [数学](#math)
  - [自然言語処理](#natural-language-processing)
  - [ネットワーク](#network)
    - [HTML](#html)
    - [メッセージングプロトコル](#messaging-protocol)
    - [SOAP](#soap)
    - [ソケット](#socket)
    - [Webサーバー](#webserver)
  - [OCR](#ocr)
  - [最適化](#optimization)
  - [PDF](#pdf)
  - [品質](#quality)
  - [スクリプティング](#scripting)
  - [SDK](#sdk)
  - [セキュリティ](#security)
    - [暗号](#cryptography)
    - [キーチェーン](#keychain)
  - [ストリーミング](#streaming)
  - [スタイリング](#styling)
  - [SVG](#svg)
  - [システム](#system)
  - [テスト](#testing)
    - [モック](#mock)
  - [テキスト](#text)
  - [スレッド](#thread)
  - [UI](#ui)
    - [アラート](#alert)
    - [ぼかし](#blur)
    - [ボタン](#button)
    - [カレンダー](#calendar)
    - [カード](#cards)
    - [フォーム](#form)
    - [HUD](#hud)
    - [ラベル](#label)
    - [メニュー](#menu)
    - [ページネーション](#pagination)
    - [決済](#payment)
    - [権限](#permissions)
    - [スクロールバー](#scroll-bars)
    - [StackView](#stackview)
    - [スイッチ](#switch)
    - [タブ](#tab)
    - [テンプレート](#template)
    - [TextField](#textfield)
    - [トランジション](#transition)
    - [3D](#ui-3d)
    - [UICollectionView](#uicollectionview)
    - [UITableView](#uitableview)
    - [ウォークスルー](#walkthrough)
  - [ユーティリティ](#utility)
  - [バリデーション](#validation)
    - [電話番号](#phone-numbers)
  - [バージョン管理](#version-manager)
  - [動画](#video)
- [サーバーレス](#serverless)

## ガイド <a id="guides"></a>
*ガイドに関するSwift資料です。* 

### ニュースレター <a id="newsletter"></a>
[back to top関連](#readme) 

* [Open Source Updates for Swift Projects](https://ossp-updates.beehiiv.com/) - Swiftを用いて書かれたあるいはSwiftに関連する人気や未発見のオープンソースプロジェクトに関する最新情報が定期的に提供されるバイウィークリーニュースレター

### 公式ガイド <a id="official-guides"></a>
[back to top関連](#readme) 

* [API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/) - 公式Swift API設計ガイド
* [Apple eBook](https://books.apple.com/us/book/the-swift-programming-language-swift-5-7/id881256329) - 公式Apple eBook（Swift初心者向け）
* [Getting Started](https://www.swift.org/getting-started/) - Swiftプログラミング言語の使い方に関する情報の検索
* [Introducing SwiftUI](https://developer.apple.com/tutorials/swiftui) - 公式SwiftUIチュートリアル（4時間以上コンテンツとインタラクティブチュートリアルを含む）

### スタイルガイド <a id="style-guides"></a>
[back to top関連](#readme) 

* [Airbnb](https://github.com/airbnb/swift) - Airbnbの公式スタイルガイド
* [Google](https://google.github.io/swift/) - このスタイルガイドはAppleの優れたSwift標準ライブラリスタイルに基づき、Google内の複数のSwiftプロジェクトでの実際の使用フィードバックをもとにしています
* [LinkedIn](https://github.com/linkedin/swift-style-guide) - LinkedInの公式スタイルガイド
* [Raywenderlich](https://github.com/kodecocodes/swift-style-guide) - Raywenderlichガイド（必読）

### サードパーティ製ガイド <a id="third-party-guides"></a>
[back to top関連](#readme) 

* [30 Days of Swift](https://github.com/allenwong/30DaysofSwift) - 面白い30日間チュートリアル
* [About Swift](https://github.com/NicolaLancellotti/about-swift) - Swift言語に関するPlayground
* [Awesome Swift Education](https://github.com/hsavit1/Awesome-Swift-Education) - 重要なSwift言語トピックを整理したリスト
* [Conferences.digital](https://github.com/zagahr/Conferences.digital) - macOSアプリ内でコンファレンス動画を視聴
* [Developing iOS Apps with Swift](https://podcasts.apple.com/us/podcast/developing-ios-11-apps-with-swift/id1315130780) - パウル・ヘグアリーによるスタンフォードコース
* [Hacking With Swift](https://www.hackingwithswift.com) - 無料で提供される30の実践プロジェクトを用いたアプリ開発トレーニングコース
* [Ray Wenderlich Tutorials, Videos, Podcasts and books](https://www.kodeco.com) - 高品質なプログラミングチュートリアル
* [Swift & SwiftUI Tutorials](http://ww1.janeshswift.com) - SwiftUIを簡単に学ぶ
* [Swift Education](https://github.com/swifteducation) - Swiftおよびアプリ開発の指導を行う教育者たちのコミュニティ
* [swift-tips](https://github.com/vincent-pradeilles/swift-tips) - ビンセント・プラディールによる有用なヒントのシリーズ
* [SwiftDoc](https://sosumi.ai/) - 自動生成されたドキュメンテーション
* [SwiftGuide CN](https://github.com/ipader/SwiftGuide) - 中国語で書かれたガイド
* [SwiftTips](https://github.com/JohnSundell/SwiftTips) - ジョン・スンデルが提供する便利なヒントのコレクション

## ボイラープレート <a id="boilerplates"></a>

* [iOS project template](https://github.com/messeb/ios-project-template) - fastlaneのラーン、Travis CIのジョブ、Codecov、SwiftLint用のHoundCI、Danger用のGitHub統合を備えたiOSプロジェクトテンプレート
* [Model-View-Presenter template](https://github.com/onl1ner/ios-mvp-template) - MVPパターンに基づくiOSアプリ開発を加速するための柔軟で使いやすいテンプレート
* [Swift Module Template](https://github.com/fulldecent/swift6-module-template) - 素晴らしい、再利用可能なモジュールを構築するための意見を反映したスタート地点

## REPL <a id="repl"></a>

* [Online Swift Playground](http://online.swiftplayground.run) - オンラインSwift Playgrounds
* [SwiftFiddle](https://swiftfiddle.com) - Swiftコードを作成・共有・埋め込みできるPlayground

## エディター対応 <a id="editor-support"></a>
*エディター対応に関するSwift資料です。* 

### Emacs <a id="emacs"></a>
[back to top関連](#readme) 

* [swift-mode](https://github.com/swift-emacs/swift-mode) - Emacs対応、部分的なflycheckエラー対応を含む

### Google Colaboratory <a id="google-colaboratory"></a>
[back to top関連](#readme) 

* [swift-colab](https://github.com/philipturner/swift-colab) - ブラウザ内でSwiftを実行

### Vim <a id="vim"></a>
[back to top関連](#readme) 

* [swift-vim](https://github.com/keith/swift.vim) - Vimの実行ファイル
* [vim-polyglot](https://github.com/sheerun/vim-polyglot) - Vimに含まれるvim-swiftを含むVimの言語パック

## ベンチマーク <a id="benchmark"></a>

* [xcprofiler](https://github.com/giginet/xcprofiler) - コンパイル時間のプロファイリングを行うコマンドラインツール

## 変換ツール <a id="converters"></a>

* [Swiftify](https://swiftify.com/#/converter/code/) - Objective-CからSwiftへのオンラインコード変換およびXcode拡張機能
* [Zolang](https://github.com/Zolang/Zolang) :penguin: - 複数のプログラミング言語でコードを生成するためのDSL

## その他のAwesomeリスト <a id="other-awesome-lists"></a>
*その他のAwesomeリストに関するSwift資料です。* 
* [Awesome iOS Interview](https://github.com/dashvlas/awesome-ios-interview) - 面接に備えるために役立つ質問一覧
* [awesome-macOS](https://github.com/iCHAIT/awesome-macOS) - macOS用の素晴らしいアプリ、ソフトウェア、ツール、そして魅力的なものたちの厳選リスト
* [example-ios-apps](https://github.com/jogendra/example-ios-apps) - 初心者やiOS開発学習者向け、あるいはiOS開発者が例アプリや機能を必要とする人向けの素晴らしいリスト
* [open-source-ios-apps](https://github.com/dkhamsing/open-source-ios-apps) - オープンソースiOSアプリの協働リスト
* [open-source-mac-os-apps](https://github.com/serhii-londar/open-source-mac-os-apps) - macOS用のオープンソースアプリの素晴らしいリスト

## 依存関係マネージャー <a id="dependency-managers"></a>
*依存関係マネージャーに関するSwift資料です。* 
* [Accio](https://github.com/JamitLabs/Accio) - SwiftPMベースのiOSおよび他のプラットフォーム向けの依存関係マネージャー（Carthageに比べて改善点あり）
* [Carthage](https://github.com/Carthage/Carthage) - 新しい依存関係マネージャー
* [CocoaPods](https://github.com/CocoaPods/CocoaPods) - 最も使われている依存関係マネージャー
* [Mint](https://github.com/yonaskolb/Mint) - Swiftのコマンドラインツールをインストールおよび実行するパッケージマネージャー
* [swift-package-manager](https://github.com/swiftlang/swift-package-manager) - SPMはSwiftプログラミング言語のパッケージマネージャーです
* [Swiftly](https://github.com/swiftlang/swiftly) - Swiftの異なるバージョンをインストールするためのSwift CLIツールチェーンインストーラー

## パターン <a id="patterns"></a>

* [App Architecture](https://github.com/objcio/app-architecture) - 『アプリアーキテクチャ書』のサンプルコード
* [CleanArchitectureRxSwift](https://github.com/sergdort/ModernCleanArchitectureSwiftUI) - RxSwiftを用いたiOSアプリのクリーンアーキテクチャの例
* [Design-Patterns-In-Swift](https://github.com/ochococo/Design-Patterns-In-Swift) - デザインパターン
* [GoodReactor](https://github.com/GoodRequest/GoodReactor) - ⚛️ GoodReactorは、View Model、View Controller、Coordinatorの間の通信に使えるReduxをインスピレーションとしたReactorフレームワーク
* [Reactant](https://github.com/Brightify/Reactant) - iOS用の反応型アーキテクチャ
* [ReduxUI](https://github.com/gre4ixin/ReduxUI) - SwiftUIとの容易な使用を可能にするReduxフレームワーク
* [SimplexArchitecture](https://github.com/Ryu0118/swiftui-simplex-architecture) - SwiftUIのViewと状態変更を分離するシンプルなアーキテクチャ
* [Spin](https://github.com/Spinners/Spin.Swift) - RxSwift、ReactiveSwiftおよびCombineと連携する柔軟なフィードバックループの実装を提供
* [StateViewController](https://github.com/davidask/StateViewController) - 状態を持つUIViewControllerの構成 — マシナスなView Controllerを解決するMVC
* [SwiftUI Atom Properties](https://github.com/ra1028/swiftui-atom-properties) - SwiftUI x Concurrency向けの反応型データバインディングおよび依存性注入ライブラリ
* [The Composable Architecture](https://github.com/pointfreeco/swift-composable-architecture) - 一貫性と理解しやすく、組み立て、テスト、使いやすさを意識したアプリ開発を可能にするライブラリ
* [Viperit](https://github.com/ferranabello/Viperit) - iOS用のViperフレームワーク

## その他 <a id="misc"></a>
*その他に関するSwift資料です。* 
* [Beak](https://github.com/yonaskolb/Beak) - Swiftスクリプト用のコマンドラインインターフェース
* [BetterCodable](https://github.com/marksands/BetterCodable) - `Codable`構造体をプロパティワッパーでレベルアップ。これらのプロパティワッパーの目的は、カスタム`init(from decoder: Decoder)`を実装する必要を避け、ボイラープレートを回避することです
* [CodableWrappers](https://github.com/GottaGetSwifty/CodableWrappers) - Codable型のカスタムシリアライズを簡単に行えるプロパティワッパーのコレクション
* [Forked](https://github.com/drewmccormack/Forked) - Swiftアプリで共有データを管理する一般化されたアプローチ — ローカルファーストアプリをサポート
* [Fugen](https://github.com/almazrafi/Fugen) - Figmaファイルからリソースをエクスポートし、コードを生成するためのコマンドラインツール
* [MemberwiseInit](https://github.com/gohanlon/swift-memberwise-init-macro) - `@MemberwiseInit`はSwiftのマクロであり、より頻繁にあなたの意図した`init`を提供できる一方、Swiftのメンバービースト初期化のデフォルト安全性を維持します
* [Model2App](https://github.com/Q-Mobile/Model2App) - データモデルを実際に動くCRUDアプリに変換
* [Surmagic](https://github.com/gurhub/surmagic) - XCFrameworkを簡単に作成！複数プラットフォーム（iOS、Mac Catalyst、tvOS、macOS、watchOS）を一度に作成できるコマンドラインツール
* [SwagGen](https://github.com/yonaskolb/SwagGen) :penguin: - Swagger仕様に基づき、Stencilテンプレートを使ってREST APIを生成するコマンドラインツール
* [Swiftbrew](https://github.com/swiftbrew/Swiftbrew) - Swiftパッケージ用のHomebrew
* [SwiftGen](https://github.com/SwiftGen/SwiftGen) - プロジェクトのさまざまなアセットに対して自動コード生成を行うツールのセット
* [SwiftKit](https://github.com/SvenTiigi/SwiftKit) - 次に始めるオープンソースSwiftフレームワーク 📦
* [SwiftPlate](https://github.com/JohnSundell/SwiftPlate) - コマンドラインから簡単にクロスプラットフォームフレームワークプロジェクトを生成できる
* [Toybox](https://github.com/giginet/Toybox) - XcodeのPlaygroundの管理を簡単に行える
* [Tuist](https://github.com/tuist/tuist) - スケールしたXcodeプロジェクトの作成・維持・操作を行うオープンソースコマンドラインツール
* [xc](https://github.com/s2mr/xc) - 指定されたバージョンのXcodeプロジェクトファイルを開くツール
* [xcbeautify](https://github.com/cpisciotta/xcbeautify) - xcodebuild用の小さな美化ツール
* [XcodeGen](https://github.com/yonaskolb/XcodeGen) - YAMLファイルとプロジェクトディレクトリからXcodeプロジェクトを生成するツール
* [xcodeproj](https://github.com/tuist/xcodeproj) - Xcodeプロジェクトとワークスペースを読み取り、更新、書き出しするためのライブラリ

## ライブラリ <a id="libs"></a>
*ライブラリに関するSwift資料です。* 

### アクセシビリティ <a id="accessibility"></a>
[back to top関連](#readme) 

* [Capable](https://github.com/chrs1885/Capable) - アクセシビリティ設定の追跡、ハイコントリストカラーの活用、スケーラブルフォントの使用により、障がいを持つユーザーがアプリを操作できるようにします

### AI <a id="ai"></a>
*Libs for AI based projects (Machine Learning, Neural Networks etc).* [back to top関連](#readme) 

* [CoreML-Models](https://github.com/likedan/Awesome-CoreML-Models) - 独自のCore MLモデルを収集したコレクション
* [DL4S](https://github.com/palle-k/DL4S) - CNNやRNNからトランスフォーマーまで、自動微分、高速テンソル演算、動的ニューラルネットワーク
* [EdgeRunner](https://github.com/christopherkarani/EdgeRunner) - Apple Silicon向けの高速、ローカルLLM推論。SwiftとMetalで完全に構築されたもの
* [Espresso](https://github.com/christopherkarani/Espresso) - AppleのNeural Engineに直接トランスフォーマーをコンパイルするツール
* [Fazm](https://github.com/m13v/fazm) - アクセシビリティAPIとScreenCaptureKitを使用したmacOS向けの音声制御AIアグエント
* [Open Agent SDK](https://github.com/terryso/open-agent-sdk-swift) - オープンソースのアグエントSDK。完全なアグエントループ、34の組み込みツール、サブアグエントのオーケストレーション、MCP統合、複数プロバイダーのLLMサポート
* [OpenAI](https://github.com/MacPaw/OpenAI) - OpenAIの公開APIに向けたSwiftパッケージ
* [swift-coding-agent](https://github.com/ivan-magda/swift-coding-agent) - サブアグエントとコンテキスト圧縮を備えたターミナルコードアグエント

### アルゴリズム <a id="algorithm"></a>
[back to top関連](#readme) 

* [Algorithm](https://github.com/CosmicMind/Algorithm) - アルゴリズムと確率モデルを書くためのツールセット
* [BTree](https://github.com/attaswift/BTree) - Swiftで使用する高速ソートコレクション（メモリ内B木）
* [swift-algorithm-club](https://github.com/kodecocodes/swift-algorithm-club) - アルゴリズムとデータ構造、その説明
* [SwiftLCS](https://github.com/Frugghi/SwiftLCS) :penguin: - 最長共通部分列（LCS）アルゴリズムの実装

### 分析 <a id="analytics"></a>
*Analytics related libraries to easily track your app usage* [back to top関連](#readme) 

* [Aptabase](https://github.com/aptabase/aptabase) - Swiftアプリ向けのオープンソース、プライバシー第一、シンプルなアナリティクス
* [Scout](https://github.com/kasianov-mikhail/scout) - CloudKitをバックエンドとして利用したiOSアプリ向けのプロダクションレベルログ記録SDK
* [Tracker Aggregator](https://github.com/kafejo/Tracker-Aggregator) - 用途の幅広い分析抽象層
* [Umbrella](https://github.com/devxoul/Umbrella) - 分析抽象層

### アニメーション <a id="animation"></a>
*Libs to help with animation* [back to top関連](#readme) 

* [Advance](https://github.com/timdonnelly/Advance) - iOS、tvOS、OS X向けの強力なアニメーションフレームワーク
* [AnimatedGradient](https://github.com/exyte/AnimatedGradient) - SwiftUIで書かれたアニメーション線形グラデーションライブラリ
* [ChainPageCollectionView](https://github.com/jindulys/ChainPageCollectionView) - 華やかな2段階コレクションビューのレイアウトとアニメーション
* [CocoaSprings](https://github.com/MacPaw/CocoaSprings) - iOS/macOS向けのインタラクティブなスプリングアニメーション
* [Comets](https://github.com/cruisediary/Comets) - パーティクルのアニメーション
* [Ease](https://github.com/roberthein/Ease) - Easeですべてをアニメーション
* [EasyAnimation](https://github.com/icanzilb/EasyAnimation) - UIView.animateWithDuration(_:, animations:...)の力をさらに高めるライブラリ
* [Elephant](https://github.com/s2mr/Elephant) - 美しく簡潔なSVGアニメーションキット
* [FlightAnimator](https://github.com/AntonTheDev/FlightAnimator) - 自然なブロックベースのコアアニメーションフレームワーク
* [Gemini](https://github.com/shoheiyokoyama/Gemini) - Geminiは豊かなスクロールベースのアニメーションフレームワーク
* [IBAnimatable](https://github.com/IBAnimatable/IBAnimatable) - Interface BuilderでApp Store向けアプリのUI、インタラクション、ナビゲーション、トランジション、アニメーションを設計・プロトタイピング
* [Interpolate](https://github.com/marmelroy/Interpolate) - インタラクティブなジェスチャ駆動アニメーションを作成するための補間フレームワーク
* [lottie-ios](https://github.com/airbnb/lottie-ios) - iOSでAfter Effectsのベクターアニメーションをネイティブにレンダリングするライブラリ
* [Pastel](https://github.com/cruisediary/Pastel) - インスタグラムのようなグラデーションアニメーション効果
* [Poi](https://github.com/HideakiTouhara/Poi) - PoiはタインダーUIのようなカードUIを使用できます。テーブルビューのメソッドのように使用できます。
* [Presentation](https://github.com/hyperoslo/Presentation) - チュートリアル、リリースノート、アニメーションページを作成するためのライブラリ
* [Pulsator](https://github.com/shu223/pulsator) - iOS向けのパルスアニメーション
* [Sica](https://github.com/cats-oss/Sica) - シンプルなインターフェースコアアニメーション。型安全なアニメーションを順次または並列で実行可能
* [Spring](https://github.com/MengTo/Spring) - iOSアニメーションを簡易に扱うためのライブラリ
* [SpriteKitEasingSwift](https://github.com/craiggrummitt/SpriteKitEasingSwift) - SpriteKitにおけるより良いエイジング機能
* [spruce-ios](https://github.com/willowtreeapps/spruce-ios) - 画面にアニメーションを編成する
* [Stellar](https://github.com/AugustRush/Stellar) - 物理ベースのアニメーションライブラリ
* [TheAnimation](https://github.com/marty-suzuki/TheAnimation) - 型安全なCAAnimationのラッパー。誤った型の値を設定するのを防ぐ
* [ViewAnimator](https://github.com/marcosgriselli/ViewAnimator) - 1行でUIを実現
* [YapAnimator](https://github.com/yapstudios/YapAnimator) - 高速かつ親しみやすい物理ベースのアニメーションシステム

### API <a id="api"></a>
*Quick libs to get access to third party API services* [back to top関連](#readme) 

* [GitHubAPI](https://github.com/serhii-londar/GithubAPI) - GitHub REST API v3の実装
* [GitHubRestAPISwiftOpenAPI](https://github.com/Wei18/github-rest-api-swift-openapi) - OpenAPI仕様からGitHubのREST APIをスケジュール生成してSwiftコードに変換
* [PXGoogleDirections](https://github.com/poulpix/PXGoogleDirections) - Google Directions APIのヘルパー
* [RandomUserSwift](https://github.com/dingwilson/RandomUserSwift) - randomuser.me向けの非公式SDKによるランダムユーザー生成フレームワーク
* [reddift](https://github.com/sonsongithub/reddift) - reddit APIのラッパー
* [SwiftDisc](https://github.com/M1tsumi/SwiftDisc) - Discord API用のボットおよび統合用ライブラリ
* [Swifter Twitter](https://github.com/mattdonnelly/Swifter) - Twitterフレームワーク
* [Swiftkube](https://github.com/swiftkube/client) :penguin: - Kubernetes向けのSwiftクライアント
* [SwiftlySalesforce](https://github.com/mike4aday/SwiftlySalesforce) - Salesforceと統合可能なiOSネイティブアプリの急速開発を支援するフレームワーク
* [SwiftyInsta](https://github.com/TheM4hd1/SwiftyInsta) - プライベートかつトークンなしのInstagram REST API
* [YouTubeKit](https://github.com/b5i/YouTubeKit) - APIキーなしでYouTube APIと相互作用

### アプリルーティング <a id="app-routing"></a>
*Internal app routing systems.* [back to top関連](#readme) 

* [Appz](https://github.com/SwiftKitz/Appz) - 外部アプリの起動やdeep linkを簡単に実現
* [Crossroad](https://github.com/giginet/Crossroad) - :oncoming_bus: Crossroadは、カスタムURLスキームを扱うためのURLルーター
* [LightRoute](https://github.com/SpectralDragon/LiteRoute) - VIPERモジュール間のルーティング
* [Linker](https://github.com/MaksimKurpa/Linker) - iOSにおける内部および外部deep linkを扱う軽量な方法
* [MonarchRouter](https://github.com/nikans/MonarchRouter) - 宣言型の状態およびURLベースのルーター。複雑な自動View Controller階層の遷移。長年経験を積んだサーバーサイドのコンベンション。
* [RxFlow](https://github.com/RxSwiftCommunity/RxFlow) - RxFlowは、Reactive Flow Coordinatorパターンに基づいたiOSアプリ向けのナビゲーションフレームワークです。
* [SwiftCurrent](https://github.com/wwt/SwiftCurrent) - Swiftで構築できる場所で複雑なワークフローを管理。UIKit、Storyboards、SwiftUIへの内蔵サポートを備えています。
* [SwiftRouter](https://github.com/skyline75489/SwiftRouter) - iOS向けのURLルーター。
* [SwiftUIRoutes](https://github.com/gabriel/swiftui-routes) - SwiftUIアプリ向けの最小限で柔軟なルーター。
* [URLNavigator](https://github.com/devxoul/URLNavigator) - 洗練されたURLルーティング。

### App Store <a id="app-store"></a>
*Libs to help with apple app store, in app purchases and receipt validation.* [back to top関連](#readme) 

* [Apphud](https://github.com/apphud/ApphudSDK) - バックエンドを必要としない自動リニューアルサブスクリプションを簡単に扱うための軽量ライブラリ。
* [AppReview](https://github.com/mezhevikin/AppReview) - AppStoreでのレビュー要求をSKStoreReviewControllerを介してリクエストするための小さなライブラリ。
* [Flare](https://github.com/space-code/flare) - iOS、macOS、tvOS、watchOSにおけるインアプリ購入の処理を簡易化するフレームワーク。StoreKit 1およびStore-Kit 2の両方に対応しています。
* [InAppPurchase](https://github.com/jinSasaki/InAppPurchase) - シンプルで軽量かつ安全なインアプリ購入フレームワーク。
* [merchantkit](https://github.com/benjaminmayo/merchantkit) - iOS向けの現代的なインアプリ購入管理フレームのフレームワーク。
* [SwiftyStoreKit](https://github.com/bizz84/SwiftyStoreKit) - 軽量なインアプリ購入フレームワーク。

### 音声 <a id="audio"></a>
*Libs to work with audio* [back to top関連](#readme) 

* [AudioKit](https://github.com/audiokit/AudioKit) - 学習曲線のない強力なオーディオ合成、処理、分析。
* [AudioPlayer](https://github.com/delannoyk/AudioPlayer) - AVPlayerにいくつかの便利な機能を備えたラッパー。
* [AudioPlayerSwift](https://github.com/tbaranes/AudioPlayerSwift) - AudioPlayerはiOS、OS XおよびtvOSアプリでオーディオを再生（基本および高度な使用）するためのシンプルなクラス。
* [Beethoven](https://github.com/vadymmarkov/Beethoven) - 音楽信号のピッチ検出に用いるオーディオ処理ライブラリ。
* [FDSoundActivatedRecorder](https://github.com/fulldecent/FDSoundActivatedRecorder) - ユーザーが話すときに録音を開始する。
* [FDWaveformView](https://github.com/fulldecent/FDWaveformView) - アプリ内でオーディオ波形を表示するための簡単な方法。
* [FluidAudio](https://github.com/FluidInference/FluidAudio) - iOS/macOS向けのリアルタイムでデバイス上で実行されるオーディオインテリジェンスのSDK（音声セグメンテーション、識別、VAD、分離、埋め込み、ASR）で、CoreMLモデルはPyTorchから直接変換され、Apple Neural Engineのパフォーマンスを活かしています。
* [ModernAVPlayer](https://github.com/noreasonprojects/ModernAVPlayer) - パーシステンスAVプレイヤーは、悪いネットワーク接続後にバックグラウンドモードでも再生を再開できる。
* [MusicKit](https://github.com/0thernet/MusicKit) - 音楽を構成・変換するためのフレームワーク。
* [Soundable](https://github.com/lcardevnas/Soundable) - Soundableは、単一または順に音を再生するため、非常に簡単な方法を提供する。
* [SwiftAudioPlayer](https://github.com/tanhakabir/SwiftAudioPlayer) - iOS向けシンプルなオーディオプレイヤー。AVAudioEngineを用いてストリーミングし、リアルタイムオーディオ操作を行う。
* [SwiftySound](https://github.com/adamcichy/SwiftySound) - 1行のコードで音を再生できるシンプルなライブラリ。
* [voice-overlay-ios](https://github.com/algolia/voice-overlay-ios) - ユーザーの声の許可を得て、カスタマイズ可能なUIでテキストとして入力を受け取るオーバーレイ。

### 拡張現実 <a id="augmented-reality"></a>
[back to top関連](#readme) 

* [ARHeadsetKit](https://github.com/philipturner/ARHeadsetKit) - $5 Google Cardboardを用いてマイクロソフトHololensを再現するためのハイレベルフレームワーク。
* [ARKit-CoreLocation](https://github.com/AndrewHartAR/ARKit-CoreLocation) - ARの高精度とGPSデータのスケールを組み合わせる。
* [ARKit-Navigation](https://github.com/chriswebb09/ARKitNavigationDemo) - MapKitを用いた拡張現実におけるナビゲーション。
* [ARVideoKit](https://github.com/AFathi/ARVideoKit) - ARKitによるビデオ、写真、ライブフォト、GIFのキャプチャと記録。

### 認証 <a id="authentication"></a>
*Easy way to manage auth in your apps.* [back to top関連](#readme) 

* [Cely](https://github.com/cely-tools/Cely) - プラグアンドプレイ型のログインフレームワーク。
* [LinkedInSignIn](https://github.com/serhii-londar/LinkedInSignIn) - LinkedInからログインし、アクセストークンを取得するためのシンプルなビュー制御。
* [LoginKit](https://github.com/IcaliaLabs/LoginKit) - iOS向けのログイン/サインアップUXを簡単に追加できるLoginKit。
* [ReCaptcha](https://github.com/fjcaetano/ReCaptcha) - iOS向けの[In]visible ReCaptcha。
* [SpotifyLogin](https://github.com/spotify/SpotifyLogin) - Spotify APIによる認証。

### ボット <a id="bots"></a>
*Libs to build bot* [back to top関連](#readme) 

* [Telegram Bot SDK](https://github.com/rapierorg/telegram-bot-swift) :penguin: - 非公式SDK。
* [Telegrammer](https://github.com/givip/Telegrammer) :penguin: - Telegramボット開発者向けオープンソースフレームワーク。Apple/SwiftN-IOに基づいて構築され、優れたパフォーマンスを示す。

### キャッシュ <a id="cache"></a>
[back to top関連](#readme) 

* [AwesomeCache](https://github.com/aschuch/AwesomeCache) - キャッシュを簡単に管理できる。
* [Cache](https://github.com/hyperoslo/Cache) - ただキャッシュのみ。
* [CachyKit](https://github.com/Sadmansamee/CachyKit) - JSON、画像、ZIP、AnyObjectをエクスパイリーデートやTTYL、強制リフレッシュでキャッシュできるキャッシュライブラリ。
* [Cachyr](https://github.com/nrkno/yr-cachyr) - iOS、macOSおよびtvOS向けの小さなキー・バリューデータキャッシュ
* [Carlos](https://github.com/spring-media/Carlos) - シンプルで柔軟なキャッシュ
* [EVURLCache](https://github.com/evermeer/EVURLCache) - オフライン時でもアプリが正常に動作するようにするためのもの
* [MemoryCache](https://github.com/yysskk/MemoryCache) - 型安全なメモリキャッシュ
* [Monstra](https://github.com/yangchenlarkin/Monstra) - TTL、優先度ベースの除外、および雪崩防止機能を備えたメモリキャッシュフレームワーク

### チャート <a id="chart"></a>
[back to top関連](#readme) 

* [Charts](https://github.com/ChartsOrg/Charts) - iOS/tvOS/OSX向けの美しいチャート（MPAndroidChartのポート）
* [ChartView](https://github.com/AppPear/ChartView) - Beautiful chartsを簡単に表示できるSwiftパッケージ
* [FLCharts](https://github.com/francescoleoni98/FLCharts) - iOS向けに使いやすく、高度にカスタマイズ可能なチャートライブラリ
* [ScrollableGraphView](https://github.com/philackm/ScrollableGraphView) - iOS向けに適応型スクロール可能なグラフビューで、シンプルな離散データセットを可視化
* [SwiftChart](https://github.com/gpbl/SwiftChart) - iOS向けのシンプルなラインおよびエリアチャートライブラリ。複数シリーズ、部分的に埋められたシリーズ、タッチイベントをサポート
* [SwiftCharts](https://github.com/ivnsch/SwiftCharts) - iOS向けに高度にカスタマイズ可能なチャート
* [SwiftUICharts](https://github.com/willdale/SwiftUICharts) - SwiftUI向けのチャート／プロットライブラリ。macOS、iOS、watchOS、tvOSで動作し、アクセシビリティおよびローカライズ機能を内蔵
* [TKRadarChart](https://github.com/TBXark/TKRadarChart) - カスタマイズ可能なレーダーチャート

### チャット <a id="chat"></a>
*Libs to get access to build chat app* [back to top関連](#readme) 

* [Chatto](https://github.com/badoo/Chatto) - チャットアプリを構築するための軽量フレームワーク
* [ExyteChat](https://github.com/exyte/chat) - SwiftUIチャットUIフレームワーク。完全にカスタマイズ可能なメッセージセル、入力ビュー、および内蔵メディアピッカーを提供
* [InputBarAccessoryView](https://github.com/nathantannar4/InputBarAccessoryView) - 強力な入力バーを構築するためのシンプルかつ容易にカスタマイズ可能なInputAccessoryView。自動補完および添付機能をサポート
* [MessageKit](https://github.com/MessageKit/MessageKit) - JSQMessagesViewControllerへのコミュニティが中心の代替品
* [MessengerKit](https://github.com/steve228uk/MessengerKit) - メッセージインターフェースを構築するためのUIフレームワーク
* [Real-time Chat with Firebase](https://github.com/dopebase/messenger-iOS-chat-swift-firestore) - MessageKitを使用したFirebase Firestoreによる機能的なリアルタイムチャットアプリ
* [swiftui-messaging-ui](https://github.com/FluidGroup/swiftui-messaging-ui) - ロード中の古いメッセージをスクロールジャンプなしで表示できる、安定したプリペンドを備えたSwiftUIチャットUIコンポーネント

### 色 <a id="colors"></a>
*Interesting snippets related to color management and utility.* [back to top関連](#readme) 

* [ChromaColorPicker](https://github.com/joncardasis/ChromaColorPicker) - 直感的で楽しいiOS用色選択ツール
* [ColorKit](https://github.com/Boris-Em/ColorKit) - iOS向け高度な色操作
* [DynamicColor](https://github.com/yannickl/DynamicColor) - 色を簡単に操作できる拡張機能
* [Gradients](https://github.com/Gradients/Gradients) - 素晴らしい180以上のグラデーションを収録した厳選されたコレクション
* [Hue](https://github.com/zenangst/Hue) - Hueは、あなたがいつでも必要とするすべてを備えた色操作ツール
* [PrettyColors](https://github.com/jdhealy/PrettyColors) - TerminalでANSIエスケープコードを使ってスタイルと色を表示。ECMA標準48に準拠
* [SheetyColors](https://github.com/chrs1885/SheetyColors) - iOS向けアクションシートスタイルの色選択ツール
* [SwiftGen-Colors](https://github.com/SwiftGen/SwiftGen#uicolor) - あなたの定数に対して自動生成されるツール `enums` `UIColor`
* [SwiftHEXColors](https://github.com/thii/SwiftHEXColors) - UIColor向けのHEX色処理拡張機能
* [UIColor-Hex-Swift](https://github.com/yeahdongcn/UIColor-Hex-Swift) - HEXからUIColorへの変換ツール
* [UIGradient](https://github.com/dqhieu/UIGradient) - グラデーションレイヤー、画像、色を使用するためのシンプルかつ強力なライブラリ

### コマンドライン <a id="command-line"></a>
*Create command line applications.* [back to top関連](#readme) 

* [Ashen](https://github.com/colinta/Ashen) - Swiftでテルミナルアプリケーションを書くためのフレームワーク。The Elm Architectureに基づく
* [Commander](https://github.com/kylef/Commander) :penguin: - 良い見た目を備えたコマンドラインインターフェースを構成
* [Guaka](https://github.com/nsomar/Guaka) :penguin: - スマートで美しい（POSIX対応）コマンドラインフレームワーク
* [LineNoise](https://github.com/andybest/linenoise-swift) :penguin: - readlineのゼロ依存性の代替ツール
* [Mocker](https://github.com/us/mocker) - Appleのコンテナ化フレームワークに基づくmacOS用Docker対応コンテナCLI
* [nef](https://github.com/bow-swift/nef) - Xcode Playgroundで書かれたドキュメントのコンパイル時検証を可能にするコマンドラインツールセット
* [Progress.swift](https://github.com/jkandzi/Progress.swift) :penguin: - コマンドラインに美しい進行バーを追加
* [Swift Argument Parser](https://github.com/apple/swift-argument-parser) - Swiftでのシンプルで型安全な引数解析
* [SwiftCLI](https://github.com/jakeheis/SwiftCLI) :penguin: - コマンドラインアプリケーション開発に使える強力なフレームワーク
* [Swiftline](https://github.com/nsomar/Swiftline) - コマンドラインアプリケーションを作成するためのツールセット
* [SwiftShell](https://github.com/kareman/SwiftShell) - コマンドラインアプリケーションの作成とシェルコマンドの実行に使えるライブラリ
* [SwiftyTextTable](https://github.com/scottrhoyt/SwiftyTextTable) :penguin: テキストテーブルを生成する軽量ライブラリ

### 並行処理 <a id="concurrency"></a>
*Easier ways to work with concurrency.* [back to top関連](#readme) 

* [async+](https://github.com/async-plus/async-plus) :penguin: Swift 5.5 の async/await に向けた連鎖可能なインターフェース
* [AsyncNinja](https://github.com/AsyncNinja/AsyncNinja) - 並列処理および反応型プログラミングの基本要素を完全に提供するセット
* [AsyncQueue](https://github.com/dfed/swift-async-queue) :penguin: 同期環境から非同期環境へと順序付きタスクを送るためのキューのライブラリ
* [Futures](https://github.com/davidask/Futures) :penguin: iOS、macOS、tvOS、watchOS、サーバー側向けの軽量プロミス
* [GroupWork](https://github.com/quanvo87/GroupWork) :penguin: シンプルかつ安全な並列・非同期タスクの実行
* [Hydra](https://github.com/malcommac/Hydra) - プロミスとアワイト - より良い非同期コードを書ける
* [Queuer](https://github.com/FabrizioBrancati/Queuer) :penguin: OperationQueue および Dispatch（＝GCD）に基づいたキュー管理ライブラリ
* [SwiftCoroutine](https://github.com/belozierov/SwiftCoroutine) :penguin: iOS、macOS および Linux 用のコルーチン
* [Throttler](https://github.com/boraseoksoon/Throttler) - 1行のAPIで大量の非同期入力をスロットリングできる
* [Venice](https://github.com/Zewo/Venice) :penguin: 連続プロセス（CSP）で、Linux対応

### 通貨 <a id="currency"></a>
[back to top関連](#readme) 


### データ管理 <a id="data-management"></a>
[back to top関連](#readme) 


#### CBOR <a id="cbor"></a>
*Concise Binary Object Representation.* [back to top関連](#readme) 

* [CBORCoding](https://github.com/SomeRandomiOSDev/CBORCoding) :penguin: - iOS、macOS、tvOSおよびwatchOS向けの簡単なCBORエンコードとデコード

#### Core Data <a id="core-data"></a>
*No more pain with Core Data, here are some interesting libs to handle data management.* [back to top関連](#readme) 

* [AERecord](https://github.com/tadija/AERecord) - iOS向けの非常に優れたCore Dataのラッパーライブラリ
* [CloudCore](https://github.com/deeje/CloudCore/) - クラウドキットの堅牢な同期：オフライン編集、関係性、共有・公開データベースなど
* [CoreStore](https://github.com/JohnEstropia/CoreStore) - Core Dataの処理をシンプルかつ洗練された方法で行う
* [DataKernel](https://github.com/mrdekk/DataKernel) - Core Dataスタックを最小限に抑えたラッパーで、永続化操作を簡単にする。外部依存なし
* [Graph](https://github.com/CosmicMind/Graph) - Core Data向けの洗練されたデータ駆動型フレームワーク
* [JSQCoreDataKit](https://github.com/jessesquires/JSQCoreDataKit) - より速いCore Dataスタック
* [JustPersist](https://github.com/justeat/JustPersist) - Core Dataを内蔵したことで、iOSでの永続化を最も簡単かつ安全に実現
* [QueryKit](https://github.com/QueryKit/QueryKit) - Core Dataフィルタリングを簡単に扱う方法
* [Skopelos](https://github.com/albertodebortoli/Skopelos) - Core Data における Active Record の極めてシンプルでスレッドセーフかつボイラープレートなし、使いやすいバージョン。
* [SugarRecord](https://github.com/modo-studio/SugarRecord) - Core Data および Realm での開発をサポート。

#### CSV <a id="csv"></a>
*Helpful libraries to parse from and serialize to comma-separated value representations.* [back to top関連](#readme) 

* [CodableCSV](https://github.com/dehesa/CodableCSV) :penguin: - CSV ファイルを行単位で読み書き、または Swift の Codable インターフェースを介して処理。
* [CSVParser](https://github.com/Nero5023/CSVParser) :penguin: - CSV 用の高速パーサー。

#### Firebase <a id="firebase"></a>
[back to top関連](#readme) 

* [Ballcap](https://github.com/1amageek/Ballcap-iOS) - BallcapはCloud Firestore用のデータベーススキーマ設計フレームワークです

#### GraphQL <a id="graphql"></a>
[back to top関連](#readme) 

* [SociableWeaver](https://github.com/NicholasBellucci/SociableWeaver) - 宣言型GraphQLクエリとミューテーションを構築

#### JSON <a id="json"></a>
*Struggling using json data? Here are some interesting ways to handle it.* [back to top関連](#readme) 

* [AlamofireObjectMapper](https://github.com/tristanhimmelman/AlamofireObjectMapper) - Alamofire の拡張機能で、JSON レスポンスデータを ObjectMapper を使ってオブジェクトに変換。
* [Alembic](https://github.com/ra1028/Alembic) - 関数型の JSON パース、オブジェクトへのマッピング、JSON へのシリアライズ。
* [Argo](https://github.com/thoughtbot/Argo) - JSON パース用のライブラリ。
* [Arrow](https://github.com/freshOS/Arrow) - 美しく簡潔な JSON パース。
* [Decodable](https://github.com/Anviking/Decodable) :penguin: - JSON パース。
* [Elevate](https://github.com/Nike-Inc/Elevate) - JSON パースをシンプルで信頼性高く、組み合わせやすいようにするフレームワーク。
* [EVReflection](https://github.com/evermeer/EVReflection) - 反射ベースの JSON エンコードとデコード。NSDictionary、NSCoding、Printable、Hashable および Equatable のサポートを含む。
* [HandyJSON](https://github.com/alibaba/handyjson) - 便利な JSON オブジェクトのシリアライズ／デシリアライズ ライブラリ。
* [Himotoki](https://github.com/ikesyo/Himotoki) - 型安全な JSON デコード ライブラリ。
* [JASON](https://github.com/delba/JASON) - パフォーマンスに優れ、操作が簡単な JSON パース。
* [JSONHelper](https://github.com/isair/JSONHelper) - iOS および OS X 用の非常に高速な JSON デシリアライズと値変換ライブラリ。
* [JSONNeverDie](https://github.com/johnlui/JSONNeverDie) - JSON からモデルへ自動反射ツール。使いやすい JSON エンコーダ／デコーダ。消えず、常に生き続けることを目指す。
* [ObjectMapper](https://github.com/tristanhimmelman/ObjectMapper) - JSON オブジェクト マッパー。
* [PMJSON](https://github.com/postmates/PMJSON) - JSON エンコード／デコード ライブラリ。
* [ReerCodable](https://github.com/reers/ReerCodable) - Swift マクロを使用した Codable 拡張。
* [Sextant](https://github.com/KittyMac/Sextant) :penguin: - 高性能な JSONPath クエリ
* [SwiftyJSON](https://github.com/SwiftyJSON/SwiftyJSON) - JSON でのエラー処理をサポートしたライブラリ
* [SwiftyJSONAccelerator](https://github.com/insanoid/SwiftyJSONAccelerator) - macOSアプリでJSON（Codeable付き）からSwift 5のモデルを生成

#### キーバリューストア <a id="key-value-store"></a>
[back to top関連](#readme) 

* [Default](https://github.com/Nirma/Default) - UserDefaults と Codable のサポートを備えた現代的なインターフェース
* [Defaults](https://github.com/sindresorhus/Defaults) - Codable およびキーの観察をサポートした強型の UserDefaults
* [DefaultsKit](https://github.com/nmdias/DefaultsKit) - iOS、macOS および tvOS 用のシンプルかつ強型の UserDefaults
* [Prephirences](https://github.com/phimage/Prephirences) - アプリケーションの設定、NSUserDefaults、iCloud、Keychainなどを管理
* [SecureDefaults](https://github.com/vpeschenkov/SecureDefaults) - UserDefaults および NSUserDefaults をラップした軽量ライブラリで、AES-256暗号化を追加
* [Storez](https://github.com/SwiftKitz/Storez) - 安全で静的型の、ストレージに依存しないキー値ストレージ
* [SwiftStore](https://github.com/hemantasapkota/SwiftStore) - LevelDB でバックアップされたキー値ストレージ
* [SwiftyUserDefaults](https://github.com/sunshinejr/SwiftyUserDefaults) - NSUserDefaults に対するより洗練された、より美しく簡潔な構文
* [Zephyr](https://github.com/ArtSabintsev/Zephyr) - iCloud を通じて NSUserDefaults を簡単に同期

#### MongoDB <a id="mongodb"></a>
[back to top関連](#readme) 

* [MongoKitten](https://github.com/orlandos-nl/MongoKitten) :penguin: - MongoDB コネクタ
* [Perfect-MongoDB](https://github.com/PerfectlySoft/Perfect-MongoDB) :penguin: - mongo-c クライアントライブラリをラップしたスタンドアローンのライブラリで、MongoDB サーバーへのアクセスを可能に

#### 複数データベース <a id="multi-database"></a>
*Data management layers that involve multiple sources.* [back to top関連](#readme) 

* [ModelAssistant](https://github.com/ssamadgh/ModelAssistant) - ビューとモデルの間の相互作用を管理する洗練されたライブラリ
* [PersistenceKit](https://github.com/Teknasyon-Teknoloji/PersistenceKit) - 複数行のコードで、Codable オブジェクトをさまざまな永続化層に保存・取得
* [Shallows](https://github.com/dreymonde/Shallows) - 軽量な永続化ツールボックス

#### ORM <a id="orm"></a>
[back to top関連](#readme) 

* [fluent](https://github.com/vapor/fluent) :penguin: - 簡単なActiveRecord実装
* [Perfect-CRUD](https://github.com/PerfectlySoft/Perfect-CRUD) :penguin: - CRUDは、Codableプロトコルを使用したオブジェクト・リレーションマッピング（ORM）システム

#### その他のデータ <a id="other-data"></a>
*Other ways to persist data* [back to top関連](#readme) 

* [CacheAdvance](https://github.com/dfed/CacheAdvance) - ログシステム向けのパフォーマンスの高いキャッシュ。CacheAdvanceはSQLiteに比べてログイベントを30倍速く保存できる
* [CoreXLSX](https://github.com/CoreOffice/CoreXLSX) - Excelスプレッドシート（XLSX）フォーマットのサポート
* [Disk](https://github.com/saoudrizwan/Disk) - iOS向けに構造体、画像、データを簡単に永続化できるフレームワーク
* [EVCloudKitDao](https://github.com/evermeer/EVCloudKitDao) - CloudKitへのアクセスを簡易化し、サブスクリプションやローカルキャッシュをサポート
* [KeyPathKit](https://github.com/vincent-pradeilles/KeyPathKit) - KeyPathKitは、型指定キーパスを使用してデータを操作するための自然な構文を提供
* [LeetCode-Swift](https://github.com/soapyigu/LeetCode-Swift) - LeetCodeインタビュー問題に対する解決策
* [Pencil](https://github.com/naru-jpn/pencil) - 任意の値をファイルに書き込む
* [StorageManager](https://github.com/iAmrSalman/StorageManager) - FileManagerをデータベースとして安全かつ簡単に使用できる方法

#### Realm <a id="realm"></a>
[back to top関連](#readme) 

* [Realm](https://github.com/realm/realm-swift) - Realmはモバイルデータベースであり、Core DataおよびSQLiteの代替となる
* [RealmWrapper](https://github.com/k-lpmg/RealmWrapper) - RealmSwiftに対する安全で簡単なラッパー
* [Unrealm](https://github.com/matghazaryan/Unrealm) - Unrealmにより、Swiftのネイティブクラス、構造体、エナムをRealmに簡単に保存できる

#### SQLドライバー <a id="sql-drivers"></a>
[back to top関連](#readme) 

* [MySQL Swift](https://github.com/novi/mysql-swift) :penguin: - MySQLクライアントライブラリ
* [Perfect-MySQL](https://github.com/PerfectlySoft/Perfect-MySQL) :penguin: - MySQLクライアントライブラリのスタンドアローンラッパーで、MySQLサーバーへのアクセスを可能にする
* [Perfect-PostgreSQL](https://github.com/PerfectlySoft/Perfect-PostgreSQL) :penguin: - libpqクライアントライブラリのスタンドアローンラッパーで、PostgreSQLサーバーへのアクセスを可能にする

#### SQLite <a id="sqlite"></a>
*Are you interested in storing your app data using SQLite? Here are some interesting resources.* [back to top関連](#readme) 

* [GRDB.swift](https://github.com/groue/GRDB.swift) - 多様なSQLiteツールキット
* [SQLite.swift](https://github.com/stephencelis/SQLite.swift) - SQLite3をラップしたフレームワーク。小さい。シンプル。安全。
* [SQLiteDB](https://github.com/FahimF/SQLiteDB) - SQLiteラッパー

#### TOML <a id="toml"></a>
*Tom's Obvious, Minimal Language.* [back to top関連](#readme) 

* [TOMLDecoder](https://github.com/dduan/TOMLDecoder) - 最新のTOML標準を解読

#### XML <a id="xml"></a>
*If you prefer to manage XML data formatted entries, here are some helpful libs* [back to top関連](#readme) 

* [AEXML](https://github.com/tadija/AEXML) - XMLラッパー
* [CheatyXML](https://github.com/lobodart/CheatyXML) - XMLを簡単に管理できるための強力なフレームワーク
* [SwiftyXML](https://github.com/chenyunguiMilook/SwiftyXML) - XMLを扱う最もSwift風な方法
* [SWXMLHash](https://github.com/drmohundro/SWXMLHash) - シンプルなXMLパーサー
* [XMLCoder](https://github.com/CoreOffice/XMLCoder) - 標準ライブラリのCodableプロトコルに基づくXMLEncoderとXMLDecoder
* [XMLMapper](https://github.com/gcharita/XMLMapper) - XMLをオブジェクトにマップするシンプルな方法

#### YAML <a id="yaml"></a>
[back to top関連](#readme) 

* [YamlSwift](https://github.com/behrang/YamlSwift) - YAMLおよびJSONドキュメントを読み込み
* [Yams](https://github.com/jpsim/Yams) :penguin: - よいYAMLパーサー

#### ZIP <a id="zip"></a>
[back to top関連](#readme) 

* [Zip](https://github.com/marmelroy/Zip) - ファイルの圧縮と展開を行うフレームワーク
* [Zip Foundation](https://github.com/weichsel/ZIPFoundation) - ZIPアーカイブファイルの作成、読み取り、編集を行うライブラリ

### 日付 <a id="date"></a>
*Handle date formatting easily.* [back to top関連](#readme) 

* [AnyDate](https://github.com/Kawoou/AnyDate) - Java 8のDateTime APIをインスピレーションとした日時API
* [Chronology](https://github.com/davedelong/time) - より良い日時ライブラリの構築
* [DateHelper](https://github.com/melvitax/DateHelper) - シンプルな日付ヘルパー
* [Datez](https://github.com/SwiftKitz/Datez) - `NSDate`、`NSCalendar`、`NSDateComponents`、`NSTimeInterval`を扱うためのライブラリ
* [Datify](https://github.com/hemangshah/Datify) - Easypeasy日時関数
* [NVDate](https://github.com/novalagung/nvdate) - 日付拡張ライブラリ
* [SwiftDate](https://github.com/malcommac/SwiftDate) - Easy NSDate管理
* [Time](https://github.com/dreymonde/Time) - ジェネリクスを活用した型安全な時間計算
* [Timepiece](https://github.com/naoty/Timepiece) - 直感的なNSDate拡張
* [TrueTime.swift](https://github.com/instacart/TrueTime.swift) - デバイス時計の変更に無関係に正確な現在時刻を取得（NTPライブラリ）
* [TypedDate](https://github.com/Ryu0118/swift-typed-date) - 日時処理を強化するための型レベルでの日時コンポーネントのカスタマイズ

### 依存性注入 <a id="dependency-injection"></a>
*Dependency injection libs* [back to top関連](#readme) 

* [Cleanse](https://github.com/square/Cleanse) - Squareが提供する軽量な依存性注入フレームワーク
* [Corridor](https://github.com/symentis/Corridor) - Coreaderに似た依存性注入μフレームワーク
* [Deli](https://github.com/kawoou/Deli) - Deliは使いやすい依存性注入（DI）
* [DIKit](https://github.com/Liftric/DIKit) - Swift向けにKOINをインスピレーションとした依存性注入フレームドーム
* [Dip](https://github.com/AliSoftware/Dip) - シンプルな依存性注入コンテナ
* [DITranquillity](https://github.com/ivlevAstef/DITranquillity/) - 安定性を重視した依存性注入フレームワーク
* [Locatable](https://github.com/vincent-pradeilles/locatable) - プロパティラッパーを活用したサービスロケーターパターンを実装するマイクロフレームワーク
* [Pure](https://github.com/devxoul/Pure) - DIコンテナなしで依存性を注入する方法
* [SafeDI](https://github.com/dfed/safedi) - コンパイル時安全な依存性注入
* [Swinject](https://github.com/Swinject/Swinject) - 依存性注入フレームワーク
* [Typhoon](https://github.com/appsquickly/Typhoon) - 依存性注入ツールキット
* [Weaver](https://github.com/scribd/Weaver) - 宣言的で使いやすく、安全な依存性注入フレームワーク

### デバイス <a id="device"></a>
*A collection of libs to recognize your device.* [back to top関連](#readme) 

* [Device](https://github.com/Ekhoo/Device) - 現在のデバイスとスクリーンサイズを検出するための軽量ツール
* [Device.swift](https://github.com/schickling/Device.swift) - 使用中のデバイスを検出するための超軽量ライブラリ
* [DeviceKit](https://github.com/devicekit/DeviceKit) - DeviceKitはUIDeviceの値型への置き換え
* [Deviice](https://github.com/andrealufino/Deviice) - 現在のデバイスやその他の情報を簡単に確認できるSwiftライブラリ
* [Luminous](https://github.com/andrealufino/Luminous) - デバイスに関するすべての情報を取得できる
* [Thingy](https://github.com/bojan/Thingy) - 現代的なデバイス検出およびクエリライブラリ
* [UIDeviceComplete](https://github.com/Nirma/UIDeviceComplete) - UIDeviceの欠落部分を補完する拡張機能

### ドキュメント <a id="documentation"></a>
*Generate documentation for Swift code* [back to top関連](#readme) 

* [jazzy](https://github.com/realm/jazzy/) - 心を込めたドキュメント
* [SourceDocs](https://github.com/SourceDocs/SourceDocs) - コードと一緒に存在するMarkdownリファレンスドキュメントを生成

### メール <a id="email"></a>
[back to top関連](#readme) 


### 組み込みシステム <a id="embedded-systems"></a>
*Build your embedded Linux projects on a RaspberryPi, BeagleBone, C.H.I.P. and other boards.* [back to top関連](#readme) 

* [SwiftyGPIO](https://github.com/uraimo/SwiftyGPIO) :penguin: - ARMでLinuxのGPIO/SPI/PWMと相互作用します。

#### 周辺機器 <a id="peripherals"></a>
*Interact with specific external peripherals.* [back to top関連](#readme) 


### イベント <a id="events"></a>
*Alternatives to NSNotificationCenter, Key-Value-Observation, or delegation.* [back to top関連](#readme) 

* [Bond](https://github.com/DeclarativeHub/Bond) - バインディングフレームワーク
* [Combinative](https://github.com/noppefoxwolf/Combinative) - AppleのCombineフレームワークを用いたUIイベント処理
* [EmitterKit](https://github.com/aleclarson/emitter-kit) - イベントエミッターとリスナーの実装
* [FutureKit](https://github.com/FutureKit/FutureKit) - Future/プロミスライブラリ
* [Katana](https://github.com/BendingSpoons/katana-swift) - ReactおよびReduxのようにアプリを書く
* [LightweightObservable](https://github.com/fxm90/LightweightObservable) - サブスクライブできる観測可能なシーケンスの軽量実装
* [NoticeObserveKit](https://github.com/marty-suzuki/NoticeObserveKit) - NoticeObserveKitは、通知の種類と情報の種類を関連付ける型安全なNotificationCenterのラッパーです
* [Notificationz](https://github.com/SwiftKitz/Notificationz) - あなたの `NSNotificationCenter`をサポートするために、シンプルでカスタマイズ可能なアダプタを提供します。
* [Observable](https://github.com/roberthein/Observable) - 値の観察を行う最も簡単な方法
* [OneWay](https://github.com/DevYeom/OneWay) - 一方向データフローによる状態管理
* [OpenCombine](https://github.com/OpenCombine/OpenCombine) - AppleのCombineフレームワークのオープンソース実装で、時間経過にわたる値の処理が可能
* [PMKVObserver](https://github.com/postmates/PMKVObserver/) - 現代的なスレッド安全かつ型安全なキー値観察
* [PromiseKit](https://github.com/mxcl/PromiseKit) - 非同期プロミスプログラミングライブラリ
* [ReactiveCocoa](https://github.com/ReactiveCocoa/ReactiveCocoa) - ReactiveCocoa (RAC)は、関数反応プログラミングにインスパイアされたCocoaフレームワークで、時間経過にわたる値のストリームを構成・変換するAPIを提供します
* [ReactorKit](https://github.com/ReactorKit/ReactorKit) - 反応的かつ一方向アプリケーションアーキテクチャ用のフレームワーク
* [ReSwift](https://github.com/ReSwift/ReSwift) - 一方向データフロー
* [RxSwift](https://github.com/ReactiveX/RxSwift) - Microsoft Reactive Extensions (Rx)
* [Signals](https://github.com/artman/Signals) - デリゲートと通知を置き換える
* [SwiftEventBus](https://github.com/cesarferreira/SwiftEventBus) - iOS向けに最適化された発行／購読イベントバス
* [Tempura](https://github.com/BendingSpoons/tempura-swift) - ReduxおよびMVVMにインスパイアされたiOS開発の包括的なアプローチ
* [Tokamak](https://github.com/TokamakUI/Tokamak) - React風の宣言型APIで、ネイティブUIコンポーネントを構築し、使いやすい一方向データバインディングを提供
* [Tomorrowland](https://github.com/lilyball/Tomorrowland) - 軽量なプロミス
* [TopicEventBus](https://github.com/mcmatan/topicEventBus) - トピックに基づいてイベントを発行できる発行・購読設計パターンの実装フレームワーク
* [VueFlux](https://github.com/ra1028/VueFlux) - 一方向データフローによる状態管理アーキテクチャ - VuexおよびFluxにインスパイア
* [When](https://github.com/vadymmarkov/When) - プロミスの軽量実装

### ファイル <a id="files"></a>
[back to top関連](#readme) 

* [ExtendedAttributes](https://github.com/sindresorhus/ExtendedAttributes) - ファイルおよびフォルダの拡張属性の管理
* [FileKit](https://github.com/nvzqz/FileKit) - シンプルかつ表現力のあるファイル管理
* [FileProvider](https://github.com/amosavian/FileProvider) - iOS/tvOSおよびmacOS向けのLocal、iCloudおよびリモート（WebDAV/FTP/Dropbox/OneDrive/SMB2）ファイルのFileManagerの代替品
* [KZFileWatchers](https://github.com/krzysztofzablocki/KZFileWatchers) - ローカルおよびリモートファイルの変更を観察するためのマイクロフレームワーク
* [PathKit](https://github.com/kylef/PathKit) :penguin: - パス操作が簡単
* [Pathos](https://github.com/dduan/Pathos) :penguin: - 高効率なUnixファイル管理

### フォント <a id="fonts"></a>
*A collection of font related snippets.* [back to top関連](#readme) 

* [FontAwesome.swift](https://github.com/thii/FontAwesome.swift) - プロジェクトにFontAwesomeを使用
* [FontBlaster](https://github.com/ArtSabintsev/FontBlaster) - iOSアプリにカスタムフォントをプログラム的に読み込む
* [Inkwell](https://github.com/ninjaprox/Inkwell) - 即時でカスタムフォントを使用できるインクウェル
* [IoniconsKit](https://github.com/keitaoouchi/IoniconsKit) - プロジェクトにioniconsをUIImage / UIFontとして使用
* [OcticonsKit](https://github.com/keitaoouchi/OcticonsKit) - プロジェクトにOcticonsをUIImage / UIFontとして使用
* [SwiftIconFont](https://github.com/segecey/SwiftIconFont) - Fontawesome、Iconic、Ionicons、Octiconのポート
* [SwiftIcons](https://github.com/ranesr/SwiftIcons) - フォントアイコン用のライブラリ：dripicons、emoji、font awesome、icofont、ionicons、linear icons、map icons、material icons、open iconic、state、weather
* [SwiftUI-FontIcon](https://github.com/huybuidac/SwiftUIFontIcon) - SwiftUI用のフォントアイコン：font awesome、ionicons、material icons
* [SYSymbol](https://github.com/Nirma/SFSymbol) - すべてのSFSymbolsが手の届く範囲に
* [UIFontComplete](https://github.com/Nirma/UIFontComplete) - iOSおよびtvOS向けのシステムおよびカスタムフォント管理

### ゲームエンジン <a id="game-engine"></a>
[back to top関連](#readme) 

* [glide engine](https://github.com/cocoatoucher/Glide) - SpriteKitおよびGameplayKitに基づく2Dゲーム開発用エンジン（実際の例とチュートリアルを含む）
* [Raylib for Swift](https://github.com/STREGAsGate/Raylib) :penguin: - Raylib用のクロスプラットフォームSwiftパッケージ。ソースからRaylibをビルドするため、ライブラリを操作する必要がありません。ゲームパッケージに依存関係として追加して、すぐに開始できます。
* [SwiftGodot](https://migueldeicaza.github.io/SwiftGodotDocs/tutorials/swiftgodot-tutorials/) - Godotゲームエンジン向けのSwiftバインディングで拡張を作成またはSwiftGodotKitとしてAPIを提供

#### 2D <a id="game-engine-2d"></a>
[back to top関連](#readme) 

* [ImagineEngine](https://github.com/JohnSundell/ImagineEngine) - 驚異的な速度の2Dゲームエンジン。

### ゲーム <a id="games"></a>
[back to top関連](#readme) 

* [FDChessboardView](https://github.com/fulldecent/FDChessboardView) - チェスボード用のビュー制御クラス
* [Sage](https://github.com/nvzqz/Sage) :penguin: - クロスプラットフォームのチェスライブラリ。

### ジェスチャー <a id="gesture"></a>
[back to top関連](#readme) 

* [ShowTime](https://github.com/KaneCheshire/ShowTime) - デモや動画でiOSのタップやジェスチャーを1行のコードで表示
* [SwiftyGestureRecognition](https://github.com/b3ll/SwiftyGestureRecognition) - Xcode PlaygroundsにおけるUIGestureRecognizers
* [SwipyCell](https://github.com/moritzsternemann/SwipyCell) - メールボックスアプリに見られるスワイプでアクションをトリガーするUITableViewCellの実装
* [Tactile](https://github.com/delba/Tactile) - ジェスチャーおよびコントロールイベントに反応するためのより安全で自然な方法

### ハードウェア <a id="hardware"></a>
*A category dedicated to hardware related libs* [back to top関連](#readme) 


#### 3D Touch <a id="3d-touch"></a>
*Easy handle new 3D Touch / Force Touch feature thanks to these libs.* [back to top関連](#readme) 


#### Bluetooth <a id="bluetooth"></a>
*Wrappers around CoreBluetooth* [back to top関連](#readme) 

* [BlueCap](https://github.com/troystribling/BlueCap) - CoreBluetoothのラッパーをはじめとする多くの機能を提供。
* [Bluejay](https://github.com/steamclock/bluejay) - iOS／OSXで信頼性の高いBluetooth LEアプリを構築するためのシンプルなフレームワーク。
* [BluetoothKit](https://github.com/rhummelmose/BluetoothKit) - iOS／OSXデバイス間のBLEを用いた簡単な通信を実現。
* [RxBluetoothKit](https://github.com/polidea/RxBluetoothKit) - RxSwift用のiOSおよびOSXのBluetoothライブラリ。
* [SwiftyBluetooth](https://github.com/jordanebelanger/SwiftyBluetooth) - CoreBluetoothを閉じた関数ベースでシンプルかつ信頼性の高いラッパー。

#### カメラ <a id="camera"></a>
*Awesome camera libs* [back to top関連](#readme) 

* [CameraBackground](https://github.com/yonat/CameraBackground) - 任意のUIViewにカメラレイヤーを背景として表示。
* [CameraKit-iOS](https://github.com/CameraKit/camerakit-ios) - 次のプロジェクトでカメラのパフォーマンスと使いやすさを大幅に向上。
* [FDTake](https://github.com/fulldecent/FDTake) - 写真や動画を簡単に撮影またはライブラリから選択できる。
* [Fusuma](https://github.com/ytakzk/Fusuma) - インスタグラム風の写真ブラウザとカメラ機能。
* [MediaPicker](https://github.com/exyte/mediapicker) - SwiftUIでカスタマイズ可能なメディアピッカー — カメラとギャラリー（アルバム含む）をサポート。
* [MijickCamera](https://github.com/Mijick/Camera) - カメラをシンプルに。実装時間を大幅に短縮する完全にカスタマイズ可能なカメラライブラリ。
* [NextLevel](https://github.com/NextLevel/NextLevel) - Rad Media Capture。

##### バーコード <a id="barcode"></a>
*Barcode, QR-code, other code readers* [back to top関連](#readme) 

* [BarcodeScanner](https://github.com/hyperoslo/BarcodeScanner) - シンプルで美しいバーコードスキャナービュー制御。
* [EFQRCode](https://github.com/EFPrefix/EFQRCode) - QRコードの操作をより効率的に。
* [QRCodeReader.swift](https://github.com/yannickl/QRCodeReader.swift) - シンプルなQRコード読み取り機能。

#### 触覚フィードバック <a id="haptic-feedback"></a>
*Libraries that involve the use of Haptic Feedback* [back to top関連](#readme) 

* [Haptica](https://github.com/efremidze/Haptica) - 簡単なハプティックフィードバック生成ツール。

#### iBeacon <a id="ibeacon"></a>
*Interested in using iBeacon in your Swift project? Here some interesting resources.* [back to top関連](#readme) 

* [SwiftLocation](https://github.com/malcommac/SwiftLocation) - 位置情報とベーコンモニタリング。

#### センサー <a id="sensors"></a>
*Manage your device sensors in a faster and easier way* [back to top関連](#readme) 


### 画像 <a id="images"></a>
*An interesting list of image related libs..* [back to top関連](#readme) 

* [Agrume](https://github.com/JanGorman/Agrume) - フレッシュなiOS用画像閲覧画面。
* [AlamofireImage](https://github.com/Alamofire/AlamofireImage) - AlamofireImageはAlamofire用の画像コンポーネントライブラリ。
* [APNGKit](https://github.com/onevcat/APNGKit) - iOSでAPNGフォーマットを高パフォーマンスかつ快適に扱う方法。
* [ATGMediaBrowser](https://github.com/altayer-digital/ATGMediaBrowser) - 複数の事前定義されたトランジションスタイルを備えた画像スライド表示ビュー、新しいトランジションを簡単に作成可能。
* [AXPhotoViewer](https://github.com/alexhillc/AXPhotoViewer) - iPhone／iPad用の写真ギャラリー閲覧画面。大量（または少量）の写真を閲覧する際に便利。
* [BlockiesSwift](https://github.com/Boilertalk/BlockiesSwift) - ユニークなブロック風アイデンティコン／プロフィール写真生成器
* [Brightroom](https://github.com/FluidGroup/Brightroom) - CoreImageを用いた画像編集ツールとエンジン
* [CTPanoramaView](https://github.com/scihant/CTPanoramaView) - タッチや動きに基づいた球面または円柱型パノラマを表示するライブラリ
* [DTPhotoViewerController](https://github.com/tungvoduc/DTPhotoViewerController) - Facebookの写真閲覧画面をインスピレーションに受けて、1枚の写真または写真コレクションを表示できる完全にカスタマイズ可能な写真閲覧ViewController
* [FacebookImagePicker](https://github.com/floriangbh/FacebookImagePicker) - Facebookアルバム用の写真選択機能
* [FaceCrop](https://github.com/Ancestry/FaceCrop) - AppleのVision Frameworkを使用して、画像内の顔を検出・中央に配置
* [FlexibleImage](https://github.com/kawoou/FlexibleImage) - 画像を操作するシンプルな方法
* [FMPhotoPicker](https://github.com/congnd/FMPhotoPicker) - 現代的でシンプルかつ依存関係のない写真選択機能と、エレガントかつカスタマイズ可能な画像編集機能
* [gifu](https://github.com/kaishin/gifu) - iOS向けの高パフォーマンスアニメーションGIFサポート
* [GPUImage 2](https://github.com/BradLarson/GPUImage2) - GPUImage 2は、GPU加速による動画および画像処理を実現するBSDライセンスのフレームワーク
* [GPUImage 3](https://github.com/BradLarson/GPUImage3) - GPUImage 3は、Metalを使用したGPU加速動画および画像処理を実現するBSDライセンンスのフレームワーク
* [HanekeSwift](https://github.com/Haneke/HanekeSwift) - iOS向けの軽量で汎用的なキャッシュ、特に画像に優しい設計
* [Harbeth](https://github.com/yangKJ/Harbeth) - GPU加速されたグラフィックスおよび動画、カメラフィルター用のMetal API
* [ImageDetect](https://github.com/Feghal/ImageDetect) - iOS 11のVision APIを使用して、画像内の顔、バーコード、テキストを検出・切り取り
* [ImageLoader](https://github.com/hirohisa/ImageLoaderSwift) - iOS向けの軽量かつ高速な画像ローダー
* [ImageScout](https://github.com/kaishin/ImageScout) - [fastimage](https://pypi.org/project/fastimage/0.2.1/)の実装 - PNG、GIF、JPEGをサポート。
* [ImageViewer](https://github.com/Krisiacik/ImageViewer) - Twitter風の画像閲覧機能
* [ImgixSwift](https://github.com/imgix/imgix-swift) - 画像URLを迅速かつレスポンス性の高いものに更新できる
* [JLStickerTextView](https://github.com/Textcat/JLStickerTextView) - UIImageViewに複数のラベル（複数行テキスト対応）を追加可能で、1本の指で編集・回転・サイズ変更が可能であり、そのテキストを画像にレンダリングできる
* [Kanvas](https://github.com/tumblr/kanvas-ios) - iOS向けのフィルター、描画、テキスト、スタンプ、および既存メディアまたはカメラからGIFを作成するライブラリ
* [Kingfisher](https://github.com/onevcat/Kingfisher) - 画像のダウンロードとキャッシュ
* [LetterAvatarKit](https://github.com/vpeschenkov/LetterAvatarKit) - A UIImage拡張機能で、文字ベースのアバターを生成します
* [Lightbox](https://github.com/hyperoslo/Lightbox) - iOSアプリ向けに便利で使いやすい画像閲覧機能
* [MapleBacon](https://github.com/JanGorman/MapleBacon) - 画像のダウンロードとキャッシュ用のライブラリ
* [MCScratchImageView](https://github.com/JaylenCoding/MCScratchImageView) - 他のビューの表面をカバーするカスタムImageView。スワイプで表面の下のビューを表示できます
* [Moa](https://github.com/evgenyneu/moa) - iOS、tvOS、macOS向けのImageViewの画像ダウンロード拡張機能
* [Nuke](https://github.com/kean/Nuke) - 画像の読み込み、キャッシュ、処理、表示、事前読み込みを行う高度なフレームワーク
* [PassportScanner](https://github.com/evermeer/PassportScanner) - パスポートのMRZコードをスキャンし、名前、姓、パスポート番号、国籍、生年月日、有効期限、個人番号を抽出
* [Rough](https://github.com/bakhtiyork/Rough) - Roughは、スケッチ風、手書き風のスタイルで描画できます
* [Sharaku](https://github.com/makomori/Sharaku) - Instagramのような画像フィルタUIライブラリ
* [Snowflake](https://github.com/onmyway133/Snowflake) - SVGとの連携
* [SwiftDraw](https://github.com/swhitty/SwiftDraw) - SVG画像をUIImage、NSImageに変換し、CoreGraphicsソースコードを生成するライブラリ
* [SwiftGen-Assets](https://github.com/SwiftGen/SwiftGen#assets-catalogs) - すべての からAssets Catalogsから自動生成される を生成するツール。 `enums` `UIImages`
* [SwiftSVG](https://github.com/mchoe/SwiftSVG) - 複数のインターフェースオプション（String、NS/UIBezierPath、CAShapeLayer、NS/UIView）を備えた1パスSVGパーサー
* [SwiftWebImage](https://github.com/HotWordland/SwiftWebImage) - 🚀SwiftUI用の画像ダウンロード機能（高速なLRUメモリ/ディスクキャッシュ付き）
* [SwiftyGif](https://github.com/alexiscreuzot/SwiftyGif) - 高パフォーマンスGIFエンジン
* [TinyCrayon](https://github.com/TinyCrayon/TinyCrayon-iOS-SDK) - モバイルアプリ向けにスマートで使いやすい画像マスクおよびカットアウトSDK
* [Toucan](https://github.com/gavinbunney/Toucan) - 画像処理API
* [UIImageColors](https://github.com/jathu/UIImageColors) - UIImage向けのiTunes風の色取得機能
* [YPImagePicker](https://github.com/Yummypets/YPImagePicker) - iOS向けInstagram風画像選択とフィルタ
* [ZImageCropper](https://github.com/ZaidPathan/ZImageCropper) - 任意の形状で画像を切り抜きます

### キーバリューコーディング <a id="key-value-coding"></a>
*Libraries for key-value coding* [back to top関連](#readme) 


### キーボード <a id="keyboard"></a>
*Do you want to create your own customized keyboard? Here are some interesting resources* [back to top関連](#readme) 

* [IHKeyboardAvoiding](https://github.com/IdleHandsApps/IHKeyboardAvoiding) - キーボードが表示される際に、どのUIViewも常に表示できるための洗練されたソリューション。UIScrollViewは不要
* [IQKeyboardManager](https://github.com/hackiftekhar/IQKeyboardManager) - コードを書かずに挿入可能なユニバーサルライブラリにより、キーボードが上にスライドする問題を防止できます。UITextField/UITextViewをカバーします。
* [ISEmojiView](https://github.com/isaced/ISEmojiView) - iOS用のエモジーキーボード
* [KeyboardHideManager](https://github.com/bonyadmitr/KeyboardHideManager) - iOSでビューにタップしてキーボードを非表示にするコードを書かずに管理できるマネージャー。
* [KeyboardShortcuts](https://github.com/sindresorhus/KeyboardShortcuts) - macOSアプリにユーザーがカスタマイズできるグローバルキーボードショートカットを追加します。CocoaおよびSwiftUIコンポーネントを含みます。
* [Ribbon](https://github.com/chriszielinski/Ribbon) - 🎀 iOSおよびmacOS向けのシンプルなクロスプラットフォームツールバー／カスタム入力アクセサリビューライブラリ。
* [Typist](https://github.com/totocaster/Typist) - iOSアプリ向けに小さな、挿入可能なUIKitキーボードマネージャー。通知センターを使わずにキーボードの画面表示と動作を管理します。

### キット <a id="kit"></a>
*Libraries for coding with a simplified API* [back to top関連](#readme) 

* [BFKit-Swift](https://github.com/FabrizioBrancati/BFKit-Swift) :penguin: - アプリ開発を早めるための便利なクラス、構造体、拡張機能のコレクション。
* [C4iOS](https://github.com/C4Labs/C4iOS) - ネイティブiOSプログラミングの力を簡易APIで活用します。
* [ContactsChangeNotifier](https://github.com/yonat/ContactsChangeNotifier) - アプリ外で変更された連絡先は？より良いCNContactStoreDidChange通知：ノイズなしで実際の変更を取得できます。

### レイアウト <a id="layout"></a>
*Libs to help you with layout.* [back to top関連](#readme) 

* [AnimatedTabBar](https://github.com/exyte/AnimatedTabBar) - アニメーションが多数用意されたタブバー。
* [BrickKit](https://github.com/wayfair-archive/brickkit-ios) - シンプルな方法で複雑で反応性の高いレイアウトを作成できます。
* [CGLayout](https://github.com/k-o-d-e-n/CGLayout) :penguin: - 強力な自動レイアウトフレームワーク。UIView(NSView)、CALayer、レンダリングされないビューなども管理可能です。プレースホルダーを提供します。
* [FlexLayout](https://github.com/layoutBox/FlexLayout) - FacebookのYoga Flexbox実装に非常に最適化された、きれいで洗練されたインターフェース。
* [FrameLayoutKit](https://github.com/kennic/FrameLayoutKit) - このフレームワークは、シンプルかつ直感的な演算子とDSL構文で複雑なレイアウトをサポートし、連鎖やネストも可能にします。
* [Grid](https://github.com/exyte/Grid) - SwiftUIで欠けている最も強力なグリッドコンテナ。
* [LayoutLess](https://github.com/DeclarativeHub/Layoutless) - UIコードを少なく書けます。
* [Neon](https://github.com/mamaral/Neon) - 強力なプログラムによるUIレイアウトフレームワーク。
* [PinLayout](https://github.com/layoutBox/PinLayout) - Auto Layout（および手動レイアウト）を1行で実現。魔法を使わず、純粋なコード、完全な制御、高速で、簡潔な構文、直感的で読みやすく、連鎖可能。[iOS/macOS/tvOS]
* [Scaling Header Scroll View](https://github.com/exyte/ScalingHeaderScrollView) - SwiftUIで書かれたスクロールビューで、スクロール時にヘッダーが縮小するスタイックヘッダー付きスクロールビュー。
* [Static](https://github.com/venmo/Static) - iOS向けのシンプルな静的テーブルビュー。
* [Stevia](https://github.com/freshOS/Stevia) - iOS向けの洗練されたビューのレイアウト。

#### Auto Layout <a id="auto-layout"></a>
*Bored of using storyboard? Give a try to declarative auto layout libs.* [back to top関連](#readme) 

* [Bamboo](https://github.com/wordlessj/Bamboo) - 1行でAuto Layout（および手動レイ術）を実現。
* [Cartography](https://github.com/robb/Cartography) - プロジェクト用の宣言型自動レイアウトライブラリ
* [Cassowary](https://github.com/tribalworldwidelondon/CassowarySwift) - AutoLayoutと同じアルゴリズムを使用する線形制約解決ライブラリ
* [Cupcake](https://github.com/nerdycat/Cupcake) - iOS用のUIコンポーネントの作成とレイアウトを簡単に行う方法
* [DeviceLayout](https://github.com/cruisediary/DeviceLayout) - 各デバイスごとにAutoLayoutを異なる設定にできる
* [EasyPeasy](https://github.com/nakiostudio/EasyPeasy) - Auto Layoutを簡単に行う
* [EasySwiftLayout](https://github.com/Pimine/EasySwiftLayout) - AppleのAuto-Layout向けの軽量Swiftフレームワーク
* [EZLayout](https://github.com/alexliubj/EZAnchor) - Autolayoutをより簡単かつ速く書く方法
* [FixFlex](https://github.com/psharanda/FixFlex) - NSLayoutAnchorに基づく宣言型Autolayout、VFLのスウィフティな再解釈、UIStackViewへの代替
* [HypeUI](https://github.com/hyperconnect/HypeUI) - 🌺 HypeUIはUIKitに基づくAppleのSwiftUI DSLスタイルの実装
* [KVConstraintKit](https://github.com/keshavvishwkarma/KVConstraintKit) - iOS、tvOSおよびOSX向けの印象的なAutolayout DSL
* [MisterFusion](https://github.com/marty-suzuki/MisterFusion) - AutoLayout向けのDSL、サイズクラスをサポート
* [Mortar](https://github.com/jmfieldman/Mortar) - Auto Layout制約の作成とサブビューの追加に用いる、簡潔かつ柔軟なDSL
* [NorthLayout](https://github.com/banjun/NorthLayout) - 拡張された文法でVisual Format Language（VFL）を使用したレイアウトの高速パス
* [PureLayout](https://github.com/PureLayout/PureLayout) - iOSおよびOS X向けのAuto Layoutの最終的なAPI
* [SnapKit](https://github.com/SnapKit/SnapKit) - iOSおよびOS X向けのAutolayout DSL
* [Swiftstraints](https://github.com/Skyvive/Swiftstraints) - 1行のコードで制約を書ける強力な自動レイアウトフレームワーク
* [TinyConstraints](https://github.com/roberthein/TinyConstraints) - TinyConstraintsは、人間がAuto Layoutを使うのをより快適にするための文法糖

### ローカライズ <a id="localization"></a>
*Frameworks that helps with localizing your app* [back to top関連](#readme) 

* [BartyCrouch](https://github.com/FlineDev/BartyCrouch) - コードとStoryboards/XIBからStringsファイルを徐々に更新／変換
* [CrowdinSDK](https://github.com/crowdin/mobile-sdk-ios) - Crowdinプロジェクトからのすべての新しい翻訳をアプリに即時提供
* [IBLocalizable](https://github.com/PiXeL16/IBLocalizable) - Interface Builderでビューを直接ローカライズするIBLocalizable
* [L10n-swift](https://github.com/Decybel07/L10n-swift) - アプリケーションのローカライズが可能で、言語を即時変更できる機能と、すべての言語で複数形をサポートしています。
* [LocalizationKit](https://github.com/willpowell8/LocalizationKit_iOS) - リアルタイムで動的にアプリケーションをローカライズし、リモートで管理できるため、アプリの翻訳を維持・デプロイする際に再提出を必要としません。
* [Localize](https://github.com/andresilvagomez/Localize) - Localizable.strings に正規表現などを用いてアプリケーションをローカライズします。
* [Localize-Swift](https://github.com/marmelroy/Localize-Swift) - Localizable.strings に正規表現などを用いてアプリケーションをローカライズします。
* [Locheck](https://github.com/Asana/locheck) - .strings および .stringsdict ファイルの誤りを検証します。
* [StringSwitch](https://stringswitch.com) - iOS の .strings ファイルを Android の strings.xml 形式に簡単に変換し、逆も同様にできます。
* [SwiftGen-L10n](https://github.com/SwiftGen/SwiftGen#localizablestrings) - すべてのLocalizable.stringsキーに対して自動生成される `enums`を生成するツール（その文字列にprintfフォーマットプレースホルダー（例：`%@`）が含まれている場合、適切な関連値も含む）。
* [Translatio](https://github.com/andrealufino/Translatio) - 非常に軽量なライブラリで、ストーリーボード内でも文字列をローカライズできます。

### 位置情報 <a id="location"></a>
[back to top関連](#readme) 

* [AsyncLocationKit](https://github.com/AsyncSwift/AsyncLocationKit) - Apple の CoreLocation フレームワークにラッピングされた、Modern Concurrency Swift (async/await) ライブラリ。
* [STLocationRequest](https://github.com/SvenTiigi/STLocationRequest) - エレガントでシンプルな3Dフライオーバーによる位置情報取得画面。

### ロギング <a id="logging"></a>
*Utilities for writing to and reading from the device log* [back to top関連](#readme) 

* [AEConsole](https://github.com/tadija/AEConsole) - iOS アプリ上にデバッグログを表示するカスタマイズ可能なコンソールUIオーバーレイ。
* [CleanroomLogger](https://github.com/emaloney/CleanroomLogger) - シンプルで軽量かつパフォーマンスの高い、カスタマイズ可能かつ拡張可能な高レベルログAPI。
* [Duration](https://github.com/SwiftStudies/Duration) :penguin: - 操作のタイムイングを報告するための軽量ログライブラリ。
* [Gedatsu](https://github.com/bannzai/gedatsu) - AutoLayoutのエラーを可読性の高いフォーマットでコンソールログに表示します。
* [HeliumLogger](https://github.com/Kitura/HeliumLogger) :penguin: - IBMの軽量ログフレームワーク。
* [Printer](https://github.com/hemangshah/printer) - 次のアプリに使える、スタイリッシュなログ出力ライブラリ。
* [Puppy](https://github.com/sushichop/Puppy) :penguin: - 複数のトランスポートとプラットフォームをサポートする柔軟なログライブラリ。
* [QorumLogs](https://github.com/Esqarrouth/QorumLogs) - XcodeおよびGoogle Docs向けのログユーティリティ。
* [Rainbow](https://github.com/onevcat/Rainbow) :penguin: - 良い見た目をもつコンソール出力。
* [SwiftyBeaver](https://github.com/SwiftyBeaver/SwiftyBeaver) :penguin: - 開発およびリリース時のマルチプラットフォームログ。
* [TinyConsole](https://github.com/Cosmo/TinyConsole) - iOSアプリを使用中に表示するための小さなログコンソール。
* [TraceLog](https://github.com/tonystone/tracelog) :penguin: - 最もシンプルなログ記録。本来の意味でログを記録する方法です。iOS、macOS、Linuxで動作します。
* [Watchdog](https://github.com/wojteklu/Watchdog) - メインスレッドでの過剰なブロッキングをログとして記録するためのユーティリティ。
* [WatchdogInspector](https://github.com/tapwork/WatchdogInspector) - iOSアプリのステータスバーに現在のフレームレート（fps）を表示するためのログツール。
* [Willow](https://github.com/Nike-Inc/Willow) - ウィルは強力でありながら軽量なログライブラリです。
* [XCGLogger](https://github.com/DaveWoodCom/XCGLogger) - ログレベル、タイムスタンプ、行番号をサポートする、完全機能かつ設定可能なログユーティリティ。

### 地図 <a id="maps"></a>
[back to top関連](#readme) 

* [Cluster](https://github.com/efremidze/Cluster) - 簡単なマップ注釈クラスタリング。
* [FlyoverKit](https://github.com/SvenTiigi/FlyoverKit) - FlyoverKitは、MKMapViewにゼロの労力で素晴らしい36及360°フライオーバー表示を提供し、完全な設定可能性を維持します。
* [GEOSwift](https://github.com/GEOSwift/GEOSwift) - 地理モデルとのやり取りをしやすくし、交差、重なり、投影などを行う計算を簡単に行うためのライブラリ。
* [ImmersiveMap](https://github.com/artembobkin/ImmersiveMap) - SwiftUI用のメタルレンダリングベクターテイルマップエンジンで、3D地球、平面マップ、リアルタイムアバターマーカーを提供。
* [LocoKit](https://github.com/sobri909/LocoKit) - iOS向けの位置情報と活動記録フレームワーク。

### 数学 <a id="math"></a>
[back to top関連](#readme) 

* [Arithmosophi](https://github.com/phimage/Arithmosophi) - 算術および論理演算に必要なプロトコルのセット。
* [BigInt](https://github.com/attaswift/BigInt) - 任意精度算術。
* [DDMathParser](https://github.com/davedelong/DDMathParser) - DDMathParserは、文字列をパースし、数学式として評価するための簡単なツールです。
* [SigmaSwiftStatistics](https://github.com/evgenyneu/SigmaSwiftStatistics) - 統計計算に必要な関数のコレクション。
* [SwaTex](https://github.com/PhraseHQ/SwaTex) - JavaScript、WebView、DOMなしでKaTeXと互換性のあるLaTeX数学レンダリングエンジン。
* [Upsurge](https://github.com/alejandro-isaza/Upsurge) - シンプルで高速な行列およびベクトル数学。

### 自然言語処理 <a id="natural-language-processing"></a>
[back to top関連](#readme) 


### ネットワーク <a id="network"></a>
*A list of libs that allow you to decrease the amount of time spent dealing with http requests.* [back to top関連](#readme) 

* [Alamofire](https://github.com/Alamofire/Alamofire) :penguin: - エレガントなネットワーク通信。
* [APIKit](https://github.com/ishkawa/APIKit) - タイプセーフなWeb APIクライアントを構築するためのライブラリ。
* [Ciao](https://github.com/AlTavares/Ciao) - mDNS（Bonjour、Zeroconf）を使ってサービスの公開と発見を行う。
* [CodyFire](https://github.com/CodyFlame/CodyFire) - iOS向けの強力なCodable APIリクエストビルダーおよびマネージャー。Alamofireに基づく。
* [Conduit](https://github.com/mindbody/Conduit) - ウェブAPI向けに強固なネットワーク機能
* [Connectivity](https://github.com/rwbutler/Connectivity) - 🌐 インターネット接続検出をより確実にすることで、インターネットに接続できないWi-Fiネットワークを検出
* [Dots](https://github.com/iAmrSalman/Dots) - 軽量かつ並列処理を可能にするネットワークフレームワーク
* [GoodNetworking](https://github.com/GoodRequest/GoodNetworking) - 📡 GoodNetworkingはHTTPネットワークを簡易に実現
* [Heimdallr.swift](https://github.com/trivago/Heimdallr.swift) - iOS向けに使いやすいOAuth 2ライブラリ
* [Just](https://github.com/dduan/Just) :penguin: - HTTP for Humans（Python-requestsスタイルのHTTPライブラリ）
* [Malibu](https://github.com/hyperoslo/Malibu) - プロミスに基づいたネットワークライブラリ
* [Moya](https://github.com/Moya/Moya) - ネットワーク抽象化層
* [MultiPeer](https://github.com/dingwilson/MultiPeer) - MultipeerConnectivityフレームワークのラッパーで、デバイス間の自動オフラインデータ送信を実現
* [Netfox](https://github.com/kasketis/netfox) - 軽量で、1行で設定可能なネットワークデバッグライブラリ
* [Netswift](https://github.com/MrSkwiggs/Netswift) - 型安全かつ高レベルのネットワーク解決策
* [OAuth2](https://github.com/p2/OAuth2) - oauth2認証ライブラリ
* [OAuthSwift](https://github.com/OAuthSwift/OAuthSwift) - iOS向けOAuthライブラリ
* [Pitaya](https://github.com/johnlui/Pitaya) :penguin: - HTTP / HTTPSネットワークライブラリ（機械上で偶然実行）
* [PMHTTP](https://github.com/postmates/PMHTTP) - RESTおよびJSONに焦点を当てたHTTPフレームワーク
* [Postal](https://github.com/snipsco/Postal) - 一般的なメールプロバイダーへの簡単なアクセスを提供するフレームワーク
* [Reachability.swift](https://github.com/ashleymills/Reachability.swift) - AppleのReachabilityの代替としてクロージャーを使用
* [ReactiveAPI](https://github.com/sky-uk/ReactiveAPI) - URLSessionを活用した、クリーンで簡潔で宣言的なネットワークコードを書くことができる。Retrofitにインスパイアされた。
* [ResponseDetective](https://github.com/netguru/ResponseDetective) - アプリとサーバー間のすべての送信リクエストと受信レスポンスを非侵襲的にインターセプトし、デバッグに使用するフレーム及
* [RxNetworks](https://github.com/yangKJ/RxNetworks) - RxSwift + Moya + HandyJSON + PluginsによるネットワークAPI
* [ShadowsocksX-NG](https://github.com/shadowsocks/ShadowsocksX-NG) - 高速なトンネルプロキシで、ファイアウォールを回避できます。
* [Siesta](https://bustoutsolutions.github.io/siesta/) - REST APIに対する洗練された抽象化により、状態を管理する複雑な構造を解消します。コールバックやデリゲートベースのネットワークに代替します。
* [SolarNetwork](https://github.com/ThreeGayHub/SolarNetwork) - 洗練されたネットワーク抽象化層。
* [SwiftHTTP](https://github.com/daltoniam/SwiftHTTP) - NSURLSessionのラッパー。
* [SwiftyOAuth](https://github.com/delba/SwiftyOAuth) - 小さなOAuthライブラリで、組み込みのプロバイダーを提供します。
* [TermiNetwork](https://github.com/billp/TermiNetwork) - 🌏 モダンで安全なiOS、watchOS、macOSおよびtvOSアプリケーションの開発に必要なゼロ依存のネットワークソリューション。
* [Tiercel](https://github.com/Danie1s/Tiercel) - iOSアプリ向けのバックグラウンドダウンロード、再起動回復、中断可能な転送、タスク管理。
* [TRON](https://github.com/MLSDev/TRON) - アローマーの上に構築された軽量ネットワーク抽象化層。
* [Wormholy](https://github.com/pmusolino/Wormholy) - iOSネットワークデバッグ、ウィザードのように 🧙‍。

#### HTML <a id="html"></a>
*Need to manipulate contents from html easily?* [back to top関連](#readme) 

* [Fuzi](https://github.com/cezheng/Fuzi) - 高速かつ軽量のXML/HTMLパーサーで、XPathおよびCSSサポートを提供します。
* [Kanna](https://github.com/tid-kijyun/Kanna) - もう一つのXML/HTMLパーサー。
* [SwiftSoup](https://github.com/scinfu/SwiftSoup) :penguin: - DOM、CSS、jQueryの最良を組み合わせたHTMLパーサー。
* [WKZombie](https://github.com/mkoehnke/WKZombie) - ヘッドレスブラウザ。
* [ZMarkupParser](https://github.com/ZhgChgLi/ZMarkupParser) - HTML文字列をカスタムスタイルとタグ付きのNSAttributedStringに変換するためのサポート。

#### メッセージングプロトコル <a id="messaging-protocol"></a>
[back to top関連](#readme) 

* [CocoaMQTT](https://github.com/emqx/CocoaMQTT) - iOSおよびOS X向けのMQTT。
* [Perfect-Notifications](https://github.com/PerfectlySoft/Perfect-Notifications) - LinuxおよびOS X向けのiOS通知。

#### SOAP <a id="soap"></a>
[back to top関連](#readme) 

* [SOAPEngine](https://github.com/priore/SOAPEngine) - iOS、Mac OS X、Apple TVでSOAPウェブサービスにアクセスするための汎用SOAPクライアント。

#### ソケット <a id="socket"></a>
[back to top関連](#readme) 

* [BlueSocket](https://github.com/Kitura/BlueSocket ) - IBMのクロスプラットフォーム低レベルソケットフレームワーク。
* [BlueSSLService](https://github.com/Kitura/BlueSSLService) - IBMの低レベルソケットフレームドレームに搭載されたSSL/TLS拡張。
* [DNWebSocket](https://github.com/GlebRadchenko/DNWebSocket) - オブジェクト指向、Autobahnテスト済みのWebSocketライブラリ（RFC 6455）。
* [RxWebSocket](https://github.com/fjcaetano/RxWebSocket) - 反応型WebSockets。
* [Socket.IO](https://github.com/socketio/socket.io-client-swift) :penguin: - iOS/OS X向けのSocket.IOクライアント。
* [sockets](https://github.com/vapor-community/sockets) :penguin: - TCP、UDP；クライアント、サーバー；Linux、OS X
* [Starscream](https://github.com/daltoniam/Starscream) - iOSおよびOSX向けのWebソケット
* [SwiftSocket](https://github.com/swiftsocket/SwiftSocket) - シンプルなTCPソケットライブラリ
* [SwiftWebSocket](https://github.com/tidwall/SwiftWebSocket) - 高性能なWebソケットクライアントライブラリ

#### Webサーバー <a id="webserver"></a>
*Would you like host a webserver in your device? Here you can find how to do it.* [back to top関連](#readme) 

* [Ambassador](https://github.com/envoy/Ambassador) - SWSGIに基づく超軽量ウェブフレームワーク。
* [Curassow](https://github.com/kylef-archive/Curassow) :penguin: - プリフォークワーカーモデルを用いたHTTPサーバー
* [Embassy](https://github.com/envoy/Embassy) :penguin: - 軽量な非同期HTTPサーバーライブラリ
* [Kitura](https://github.com/Kitura/Kitura) :penguin: - IBMのウェブフレームワークおよびウェブサービス用サーバー
* [Lightning](https://github.com/skylab-inc/Lightning) :penguin: - マルチプラットフォームシングルスレッド非ブロッキングWebおよびネットワークフレームワーク
* [Noze.io](https://github.com/NozeIO/Noze.io) :penguin: - Node.jsのようなイベントドリブンI/Oストリーム
* [Perfect](https://github.com/PerfectlySoft/Perfect) :penguin: - サーバーサイドSwift。Perfectライブラリ、アプリケーションサーバー、コネクタおよび例アプリ
* [swifter](https://github.com/httpswift/swifter) :penguin: - ルーティングハンドラー付きHTTPサーバー
* [Vapor](https://github.com/vapor/vapor) :penguin: - iOS、OS X、Ubuntuで動作する洗練されたウェブフレームワーク
* [Zewo](https://github.com/Zewo/Zewo) :penguin: - サーバーサイドSwift

### OCR <a id="ocr"></a>
[back to top関連](#readme) 

* [SwiftOCR](https://github.com/NMAC427/SwiftOCR) - ニューラルネットワークベースのOCRライブラリ。

### 最適化 <a id="optimization"></a>
[back to top関連](#readme) 


### PDF <a id="pdf"></a>
[back to top関連](#readme) 

* [PDFGenerator](https://github.com/sgr-ksmt/PDFGenerator) - シンプルなPDF生成ツール。ビューまたは画像からPDFを生成
* [SimplePDF](https://github.com/nRewik/SimplePDF) - 簡単にPDFを作成
* [UXMPDFKit](https://github.com/uxmstudio/UXMPDFKit) - iOSアプリケーションに埋め込むことができるPDF閲覧および注釈ツール

### 品質 <a id="quality"></a>
[back to top関連](#readme) 

* [AnyLint](https://github.com/FlineDev/AnyLint) :penguin: - Swiftと正規表現の力を組み合わせて、何でもチェック
* [IBLinter](https://github.com/IBDecodable/IBLinter) - Interface Builder向けのチェックツール
* [L10nLint](https://github.com/s2mr/L10nLint) - Localizable.strings向けのチェックツール
* [solid-like-a-rock](https://github.com/nenadvulic/solid-like-a-rock) :penguin: - SwiftSyntaxを使用して、クリーンアーキテクチャおよびTCAインポートルールを強制するアーキテクチャチェックツール
* [swift-mod](https://github.com/ra1028/swift-mod) - Swiftコードの生成とフォーマットの間を介するコード変更ツール
* [SwiftCop](https://github.com/andresinaka/SwiftCop) - Ruby On RailsのActive Recordバリデーションの明確さを参考にしたバリデーションライブラリ
* [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - Swiftコードのリフォーマットに用いるコードライブラリおよびコマンドラインフォーマットツール
* [SwiftLint](https://github.com/realm/SwiftLint) - コーディング規約を強制するツール
* [Swimat](https://github.com/Jintin/Swimat) - Xcodeプラグインによるコードフォーマット
* [Tailor](https://github.com/sleekbyte/tailor) :penguin: - よりクリーンなコードを書き、バグを避けるのに役立つクロスプラットフォーム静的解析ツール

### スクリプティング <a id="scripting"></a>
[back to top関連](#readme) 

* [Swift for Scripting](https://github.com/artemnovichkov/Swift-For-Scripting) - 非常に有用で情報豊富なスクリプト素材の手選別コレクション。

### SDK <a id="sdk"></a>
[back to top関連](#readme) 


### セキュリティ <a id="security"></a>
[back to top関連](#readme) 

* [SecurePropertyStorage](https://github.com/alexruperez/SecurePropertyStorage) - Swiftプロパティラッパーを使って、プロパティのセキュアなストレージを定義するのに役立つ
* [TouchBridge](https://github.com/HMAKT99/UnTouchID) - あなたのスマートフォンの指紋を使って、どのMacでも認証できる

#### 暗号 <a id="cryptography"></a>
*Deal with cryptography method easily* [back to top関連](#readme) 

* [BlueCryptor](https://github.com/Kitura/BlueCryptor) - IBMの跨プラットフォーム暗号ライブラリ
* [BlueRSA](https://github.com/Kitura/BlueRSA) - IBMの跨プラットフォームRSA暗号ライブラリ
* [CryptoSwift](https://github.com/krzyzanowskim/CryptoSwift) :penguin: - 暗号関連の関数とヘルパーを提供します。
* [IDZSwiftCommonCrypto](https://github.com/iosdevzone/IDZSwiftCommonCrypto) - AppleのCommon Cryptoライブラリのラッパー
* [JOSESwift](https://github.com/airsidemobile/JOSESwift) - JOSE標準（JWS、JWE、JWK）向けのフレームワーク
* [JWSETKit](https://github.com/amosavian/JWSETKit) - JWS、JWT、JWE、JWKをサポートするJOSEライブラリ
* [RNCryptor](https://github.com/RNCryptor/RNCryptor) - iOSおよびMac向けのAppleのAES暗号化（CCCryptor）ラッパー
* [SCrypto](https://github.com/sgl0v/scrypto) - CommonCryptoルーチンにアクセスする洗練されたインターフェース
* [Siphash](https://github.com/attaswift/SipHash) - SipHashアルゴリズムによるシンプルかつ安全なハッシュ処理
* [Swift-Sodium](https://github.com/jedisct1/swift-sodium) - iOSおよびOS X向けのSodiumライブラリの共通暗号操作へのインターフェース
* [Themis](https://github.com/cossacklabs/themis) - データの保存、認証データの交換、送信保護、認証など、典型的な暗号化スキームを簡単に使うためのマルチ言語フレームワーク

#### キーチェーン <a id="keychain"></a>
[back to top関連](#readme) 

* [GoodPersistence](https://github.com/GoodRequest/GoodPersistence) - 💾 GoodPersistenceは、キーチェーンとUserDefaultsにデータをキャッシュするのを簡単にする。プロパティラッパーを使用。
* [keychain-swift](https://github.com/evgenyneu/keychain-swift) - iOS、OS X、tvOSおよびwatchOSでキーチェーンにテキストを安全に保存するためのヘルパー関数
* [KeychainAccess](https://github.com/kishikawakatsumi/KeychainAccess) - Keychainに簡単なラッパーを提供し、iOSおよびOS Xで動作する
* [Latch](https://github.com/endocrimes/Latch) - iOS向けのシンプルなKeychainラッパー
* [SwiftKeychainWrapper](https://github.com/jrendel/SwiftKeychainWrapper) - iOSのKeychainに対してシンプルな静的ラッパーを提供し、ユーザー設定のように使用できるようにする
* [Valet](https://github.com/square/Valet) - Valetは、Keychainの仕組みを理解しなくても、データを安全にKeychainに保存できるようにする。簡単です。お約束します。

### ストリーミング <a id="streaming"></a>
[back to top関連](#readme) 

* [HaishinKit](https://github.com/HaishinKit/HaishinKit.swift) - iOS、macOS、tvOS向けのカメラとマイクのストリーミングライブラリ（RTMP、HLS）
* [Live](https://github.com/ltebean/Live) - ライブ配信アプリを構築する方法を示す

### スタイリング <a id="styling"></a>
[back to top関連](#readme) 

* [Stylist](https://github.com/yonaskolb/Stylist) - UIスタイルをホットロード可能な外部YAMLまたはJSONファイルで定義できる
* [SwiftTheme](https://github.com/wxxsw/SwiftTheme) - iOS 8以降向けの強力なテーマ／スキンマネージャー
* [Themes](https://github.com/onmyway133/EasyTheme) - テーマ管理

### SVG <a id="svg"></a>
[back to top関連](#readme) 

* [SVGView](https://github.com/exyte/SVGView) - SVGをSwiftUIで書いたパーサーおよびレンダラー。

### システム <a id="system"></a>
[back to top関連](#readme) 

* [BlueSignals](https://github.com/Kitura/BlueSignals) - IBMのクロスプラットフォームOS用のシグナルハンドリングライブラリ
* [LaunchAtLogin](https://github.com/sindresorhus/LaunchAtLogin-Legacy) - sandboxed macOSアプリに「ログイン時に起動」機能を簡単に追加できる
* [SystemKit](https://github.com/beltex/SystemKit/) - OS Xシステムライブラリ

### テスト <a id="testing"></a>
*A collection of testing frameworks.* [back to top関連](#readme) 

* [DVR](https://github.com/venmo/DVR) - シンプルなネットワークテストフレームワーク
* [Erik](https://github.com/phimage/Erik) - JavaScriptを使ってウェブページにアクセス・操作できるヘッドレスブラウザで、機能テストを実行可能
* [Fakery](https://github.com/vadymmarkov/Fakery) - 仮データ生成ツール
* [Mussel](https://github.com/UrbanCompass/Mussel) - XCUITestsでプッシュ通知、ユニバーサルリンク、ルーティングを簡単にテストできるフレームワーク
* [Nimble](https://github.com/Quick/Nimble) - マッチャーフレームワーク
* [OHHTTPStubs](https://github.com/AliSoftware/OHHTTPStubs) - ネットワークリクエストを簡単にスタブできるテストライブラリ
* [Quick](https://github.com/Quick/Quick) :penguin: - Quickは、行動駆動開発フレームワーク
* [SBTUITestTunnel](https://github.com/Subito-it/SBTUITestTunnel) - ネットワークリクエスト、CLLocationManager、UNUserNotificationCenterのスタブと、テーブル／コレクション／スクロールビューの細かなスクロール操作に対応するUIテストライブラリ
* [Sizes](https://github.com/marcosgriselli/Sizes) - 異なるデバイスとフォントサイズでアプリをテストする。
* [SnapshotTest](https://github.com/parski/SnapshotTest) - iOSおよびtvOS向けのスナップショットテストツール。
* [Spectre](https://github.com/kylef/Spectre) :penguin: - BDDフレームワーク。
* [swift-testing-expectation](https://github.com/dfed/swift-testing-expectation) - Swiftでのテストにおける非同期期待値の作成。
* [SwiftCheck](https://github.com/typelift/SwiftCheck) - テストプログラムの性質を検証するために自動的にランダムデータを生成するテストライブラリ。
* [UI Testing Cheat Sheet](https://github.com/joemasilotti/UI-Testing-Cheat-Sheet) - UIテストでどうやってこの機能をテストするかに関するよくある質問への答えと、実際に動作するアプリ例。
* [XCTest](https://github.com/swiftlang/swift-corelibs-xctest) - The XCTest Project、Swiftのユニットテストサポートを提供するコアライブラリ。

#### モック <a id="mock"></a>
[back to top関連](#readme) 

* [AutoMockable](https://github.com/vincent-pradeilles/AutoMocker) - 型システムを活用して、データ型のモックインスタンスを簡単に作成できるフレームワーク。
* [Cuckoo](https://github.com/Brightify/Cuckoo) - 最初のブーランプフリー（テンプレートなし）モックフレームワーク。
* [Mocker](https://github.com/WeTransfer/Mocker) - コード実装を一切触らずに、AlamofireおよびURLSessionのリクエストをモックできる。
* [Mockingbird](https://github.com/Farfetch/mockingbird) - HTTP/HTTPSを使って任意のシステムを簡単にモックすることで、未完成、不安定なサービスや計画されたケースを再現できるようにし、ソフトウェアテストを簡素化。
* [Mockingjay](https://github.com/kylef/Mockingjay) - HTTPリクエストを簡単にスタブできる洗練されたライブラリ。
* [Mockit](https://github.com/sabirvirtuoso/Mockit) - Javaの有名なMockitoにインスピレーションを得たシンプルなモックフレーム及。
* [MockSwift](https://github.com/leoture/MockSwift) - プロパティワッパーの力を活かしたモックフレームワーク。

### テキスト <a id="text"></a>
*A collection of text projects.* [back to top関連](#readme) 

* [Attributed](https://github.com/Nirma/Attributed) - 属性付き文字列向けの現代的なµフレームワーク。
* [AttributedTextView](https://github.com/evermeer/AttributedTextView) - 複数のリンク、ハッシュタグ、メンションをサポートする、属性付きUITextViewを作成する最も簡単な方法。
* [BonMot](https://github.com/Rightpoint/BonMot) - iOS向けに美しい、使いやすい属性付き文字列。
* [Croc](https://github.com/JKalash/Croc) - 軽量なエモジ解析と検索ライブラリ。
* [edhita](https://github.com/tnantoka/edhita) - iOS向けの完全オープンソーステキストエディタ。
* [GMarkdown](https://github.com/GIKICoder/GMarkdown) - iOS向けのマーカードレンダリングライブラリ（テーブル、LaTeX、Mermaid、コードハイライトをサポート）。
* [MarkdownDisplayView](https://github.com/zjc19891106/MarkdownDisplayView) - TextKit 2 に基づいたマークダウンレンダリングコンポーネント。スムーズなパフォーマンス、豊かなカスタマイズオプション、AI駆動の会話型インタラクションへの対応を提供。
* [MarkdownKit](https://github.com/bmoliveira/MarkdownKit) - シンプルでカスタマイズ可能なマークダウンパーサー。
* [MarkdownView](https://github.com/keitaoouchi/MarkdownView) - iOS向けマークダウンビュー。
* [MarkyMark](https://github.com/M2Mobi/Marky-Mark) - マークダウンをネイティブビューまたは属性文字列に変換。
* [Notepad](https://github.com/ruddfawcett/Notepad) - ライブシンタックスハイライトをサポートする、完全にテーマ可変のマークダウンエディタ。
* [OEMentions](https://github.com/omar14/OEMentions) - FacebookやInstagramのようにUITextViewにメンションを簡単に追加できる方法。
* [Parsey](https://github.com/rxwei/Parsey) - ソース位置追跡、バックトラッキング防止、豊かなエラーメッセージをサポートするパーサーコンビネータフレームワーク。
* [Pluralize.swift](https://github.com/joshualat/Pluralize.swift) - 素晴らしい文字数複数形拡張。
* [PredicateFlow](https://github.com/andreadelfante/PredicateFlow) - PredicateFlowは、NSPredicateを素晴らしい、型安全で読みやすい形で記述できるビルダー。
* [PrediKit](https://github.com/KrakenDev/PrediKit) - iOSおよびOS X向けのNSPredicate DSL。SnapKitにインスパイアされたもの。
* [Regex by crossroadlabs](https://github.com/crossroadlabs/Regex) :penguin: - 高度な機能を備えた非常に使いやすい正規表現ライブラリ。演算子 `=~` およびメソッドベースのAPIを提供。ユニットテストが対応されています。
* [Regex by sindresorhus](https://github.com/sindresorhus/Regex) - Swifty正規表現。完全にテスト済み・ドキュメント化され、正しくUnicodeを扱う。
* [RichEditorView](https://github.com/cjwirth/RichEditorView) - RichEditorViewは、豊富なテキスト編集に特化したシンプルでモジュール化されたUIViewのサブクラス。
* [Sprinter](https://github.com/nicklockwood/Sprinter) - 文字列のフォーマットを行うためのライブラリ。
* [SwiftRichString](https://github.com/malcommac/SwiftRichString) - エレガントで手軽な属性文字列管理ライブラリ。
* [SwiftVerbalExpressions](https://github.com/VerbalExpressions/SwiftVerbalExpressions) - VerbalExpressionsのポート。
* [SwiftyAttributes](https://github.com/eddiekaiger/SwiftyAttributes) - 属性文字列の操作を簡単に行える拡張。
* [Tagging](https://github.com/k-lpmg/Tagging) - メンションやハッシュタグのタグ機能を簡単に提供するTextView。
* [Texstyle](https://github.com/rosberry/texstyle) - Texstyleは、属性文字列を簡単にフォーマットできる。
* [TextAttributes](https://github.com/delba/TextAttributes) - 属性文字列を組み立てるためのより簡単な方法。
* [TextBuilder](https://github.com/davdroman/swiftui-text-builder) - SwiftUI ViewBuilderに似た、テキスト向けのもの。
* [TwitterTextEditor](https://github.com/twitter/TwitterTextEditor) - スタンドアローンかつ柔軟なAPIで、iOSアプリにフル機能の豊富なテキストエディタを提供します
* [VEditorKit](https://github.com/GeekTree0101/VEditorKit) - 軽量かつ強力なエディタキット

### スレッド <a id="thread"></a>
*Threading, task-based or asynchronous programming, Grand Central Dispatch (GCD) wrapper* [back to top関連](#readme) 

* [Async](https://github.com/duemunk/Async) - グランドセンターディスパッチ（GCD）のための糖質（syntactic sugar）
* [AwaitKit](https://github.com/yannickl/AwaitKit) - ES7のAsync/Await制御フロー
* [Each](https://github.com/dalu93/Each) - それぞれがNSTimer用のブリッジライブラリです
* [GCDTimer](https://github.com/hemantasapkota/GCDTimer) - よくテストされたGCDタイマー
* [Schedule](https://github.com/luoxiu/Schedule) :penguin: - 非常に分かりやすい構文を備えた軽量タスクスケジューラ。
* [SwiftyTimer](https://github.com/radex/SwiftyTimer) - NSTimer用のAPI

### UI <a id="ui"></a>
*A collection of pre-packaged transitions & cool ui stuffs.* [back to top関連](#readme) 

* [ActivityIndicatorView](https://github.com/exyte/ActivityIndicatorView) - SwiftUIで作成された複数のプリセットロードインジケータ
* [AECoreDataUI](https://github.com/tadija/AERecord) - Core Dataを駆使したUI
* [AGCircularPicker](https://github.com/agilie/AGCircularPicker) - 計算パラメータを管理するコントローラーを作成するための便利なコンポーネント
* [AMScrollingNavbar](https://github.com/andreamazz/AMScrollingNavbar) - UIScrollViewのスクロールに合わせて動くスクロール可能なUINavigationBar
* [Arale](https://github.com/supercomputra/Arale) - UIScrollViewまたはそのサブクラスに適用可能なカスタムストレッチヘッダービューで、コンテンツの再読み込みにUIActivityIndicatorViewをサポート
* [BadgeHub](https://github.com/jogendra/BadgeHub) - 任意のUIViewを完全にアニメーションされた通知センターに変換します。これは、UIViewに通知バッジアイコンを迅速に追加する方法です
* [BatteryView](https://github.com/yonat/BatteryView) - シンプルなバッテリー形のUIView
* [BetterSafariView](https://github.com/stleamist/BetterSafariView) - SwiftUIでSFSafariViewControllerを表示する、またはASWebAuthenticationSessionを開始するためのより良い方法
* [BottomSheet](https://github.com/joomcode/BottomSheet) - コンテンツサイズに基づき、インタラクティブな閉じ方とナビゲーションコントローラーをサポートする強力なボトムシートコンポーネント
* [BreakOutToRefresh](https://github.com/dasdom/BreakOutToRefresh) - SpriteKitを使用した、プルでリフレッシュ可能なビュー
* [BulletinBoard](https://github.com/alexaubry/BulletinBoard) - 画面の下部に表示されるコンテキストカードを生成・管理します
* [CapturePreventionKit](https://github.com/Jaesung-Jung/CapturePreventionKit) - `Label` および `ImageView` を `screen capture prevention` に提供しています。
* [CircularProgress](https://github.com/sindresorhus/CircularProgress) - macOSアプリ用の円形進行インジケータ
* [CircularRangeSlider](https://github.com/diegotid/circular-range-slider) - 範囲選択用の円形スライダーを用いた、カスタマイズ可能なSwiftUIコンポーネント
* [ClassicKit](https://github.com/Baddaboo/ClassicKit) - クラシックスタイルのUIコンポーネントを収録したコレクション
* [ContainerController](https://github.com/mrustaa/ContainerController) - UIコンポーネント。これはアプリ：Apple Maps、Stocksからコピーしたスワイプパネルです
* [CountryPickerView](https://github.com/kizitonwose/CountryPickerView) - iOSアプリで国情報を効率的に収集できるシンプルかつカスタマイズ可能なビュー
* [CustomSegue](https://github.com/phimage/CustomSegue) - OSXのストーリーボード用のカスタムセグ（遷移）でスライドとクロスフェード効果を提供
* [DeckTransition](https://github.com/HarshilShah/DeckTransition) - iOS 10のApple Musicの現在再生画面遷移を再現するライブラリ
* [DockProgress](https://github.com/sindresorhus/DockProgress) - macOSアプリのドックアイコンに進行状況を表示
* [Dodo](https://github.com/evgenyneu/Dodo) - iOS向けのメッセージバー
* [Doric Design System Foundation](https://github.com/jayeshk/Doric) - iOS向けのプロトコル中心、型安全、スケーラブルなデザインシステムの基礎フレームワーク
* [DropDown](https://github.com/AssistoLab/DropDown) - iOS向けのマテリアルデザインドロップダウン
* [Elissa](https://github.com/KitchenStories/Elissa) - UITabBarItemまたは任意のUIViewのアンカービュー上に通知を表示し、追加情報を表示
* [EstMusicIndicator](https://github.com/Aufree/ESTMusicIndicator) - iTunes風の音楽再生インジケーター
* [Family](https://github.com/zenangst/Family) - 親コントローラの設定を簡単に行える子コントローラフレームワーク
* [FAQView](https://github.com/mukeshthawani/faqview) - iOS向けの使いやすいFAQビュー
* [Fashion](https://github.com/vadymmarkov/Fashion) - ファッションアクセサリーおよび美容ツールを共有・再利用できるUIスタイル
* [FlagKit](https://github.com/madebybowtie/FlagKit) - アプリやウェブサイトで使用できる美しいフラッグアイコン
* [FlexibleHeader](https://github.com/k-lpmg/FlexibleHeader) - UIScrollViewのスクロールに応じて反応するコンテナビュー
* [FloatRatingView](https://github.com/glenyi/FloatRatingView) - フロートする評価システム
* [Fluid Slider](https://github.com/Ramotion/fluid-slider) - 選択された正確な値を表示するポップアップバブル付きスライダー項目
* [GaugeKit](https://github.com/skywinder/GaugeKit) - カスタマイズ可能なゲージ。Appleのスタイルのゲージを簡単に再現可能
* [GMStepper](https://github.com/gmertk/GMStepper) - 中央にスライディングラベルを持つステッパー
* [GradientProgressBar](https://github.com/fxm90/GradientProgressBar) - アニメーション付きグラデーションプログレスバー
* [GRMustache](https://github.com/groue/GRMustache.swift) - フレキシブルなMustacheテンプレート
* [GrowingTextView](https://github.com/KennethTsang/GrowingTextView) - 自動拡大、プレースホルダー、長さ制限をサポートするUITextView
* [HGCircularSlider](https://github.com/HamzaGhazouani/HGCircularSlider) - iOSアプリ用のカスタム再利用可能な円形スライダーコントロール
* [HidesNavigationBarWhenPushed](https://github.com/gontovnik/HidesNavigationBarWhenPushed) - hidesNavigationBarWhenPushedフラグにより、ビュー制御をプッシュした際にナビゲーションバーを非表示にできるライブラリ
* [HorizontalDial](https://github.com/kciter/HorizontalDial) - インスタグラム風の水平スクロールダイアル
* [HPParallaxHeader](https://github.com/ngochiencse/HPParallaxHeader) - UIScrollView用のシンプルなパラレルヘッダー。
* [IGColorPicker](https://github.com/iGenius-Srl/IGColorPicker) - iOS用のカスタマイズ可能な色選択器
* [InstantSearch iOS](https://github.com/algolia/instantsearch-ios) - iOSで即時検索機能を構築するためのウィジェットとヘルパーのライブラリ
* [KALoader](https://github.com/Kirillzzy/KALoader) - データ読み込み時の美しいアニメーションプレースホルダー
* [KMNavigationBarTransition](https://github.com/MoZhouqi/KMNavigationBarTransition) - 一時的にナビゲーションバーのスタイルを管理し、ビュー制御のプッシュやポップ時にすべての方向でナビゲーションバーのスタイル間のトランジションアニメーションをスムーズにできるユニバーサルライブラリ
* [KMPlaceholderTextView](https://github.com/MoZhouqi/KMPlaceholderTextView) - マルチラインプレースホルダーをサポートするUITextViewのサブクラス
* [LeeGo](https://github.com/wangshengjia/LeeGo) - 宣言型・設定可能・高再利用性のUI開発（積み木のように構築）
* [LicensePlist](https://github.com/mono0926/LicensePlist) - すべての依存関係のPlistを自動生成するコマンドラインツール
* [LiquidLoader](https://github.com/yoavlt/LiquidLoader) - 液体アニメーション付きのスピナーローダーコンポーネント
* [LoadingShimmer](https://github.com/jogendra/LoadingShimmer) - 1行のコードで任意のビューにシャイマー効果を追加できるシンプルな方法。これは非侵襲的な読み込みインジケーターとして有用。
* [Macaw](https://github.com/exyte/macaw) - SVG対応の強力で使いやすいベクターグラフィックスライブラリ
* [Magnetic](https://github.com/efremidze/Magnetic) - SpriteKitのフロートバブル選択器（Apple Musicをインスピレーションに）
* [Mandoline](https://github.com/blueapron/Mandoline) - すべての「選択」ニーズを満たすiOS用のピッカービュー
* [MantleModal](https://github.com/canalesb93/MantleModal) - スクロールビューを用いたシンプルなモーダルリソース。ユーザーがモーダルを下にドラッグすることで閉じられる。
* [Material](https://github.com/CosmicMind/Material) - Material、GoogleのMaterial DesignおよびAppleのFlat UI向けのアニメーションとグラフィックスフレームワークで、あなたの創造性を表現してください。
* [Material Components for iOS](https://github.com/material-components/material-components-ios) - モジュール化かつカスタマイズ可能なMaterial Design UIコンポーネント。
* [MaterialKit](https://github.com/nghialv/MaterialKit) - Material Designコンポーネント。
* [MediaBrowser](https://github.com/younatics/MediaBrowser) - シンプルなiOS用の写真および動画ブラウザ。オプションでグリッドビュー、キャプション、選択機能を提供。
* [MPParallaxView](https://github.com/DroidsOnRoids/MPParallaxView) - Apple TVのパラレル効果。
* [MultiSelectSegmentedControl](https://github.com/yonat/MultiSelectSegmentedControl) - 複数セグメント選択、垂直スタック、テキストと画像の組み合わせをサポートするUISegmentedControlのリメイク。
* [MultiSlider](https://github.com/yonat/MultiSlider) - 複数のスライダーと値、範囲ハイライト、オプションのスナップ間隔、オプションの値ラベル、垂直または水平のスライダーを備えたUISliderのクローン。
* [MuscleMap](https://github.com/melihcolpan/MuscleMap) - SwiftUIとUIKitを使ってインタラクティブな人間の筋肉マップをレンダリング。
* [MXParallaxHeader](https://github.com/maxep/MXParallaxHeader) - UIScrollView用のシンプルなパラレルヘッダー。
* [MZFormSheetPresentationController](https://github.com/m1entus/MZFormSheetPresentationController) - iOSのネイティブUIModalPresentationFormSheetへの代替案を提供し、iPhoneでのサポートを追加し、コントローラーのサイズと体験の設定をより柔軟に可能にします。
* [NeumorphismKit](https://github.com/y-okudera/NeumorphismKit) - UIKit向けのニュエモリズムフレームワーク。
* [NextGrowingTextView](https://github.com/FluidGroup/NextGrowingTextView) - iOS 7以上向けに最適化された「成長するテキストビュー」の次の世代。
* [NVActivityIndicatorView](https://github.com/ninjaprox/NVActivityIndicatorView) - 良いロードアニメーションを集めたコレクション。
* [OverlayContainer](https://github.com/applidium/OverlayContainer) - OverlayContainerは、Apple MapsやStocksアプリのようにオーバーレイベースのインターフェースを開発しやすくします。
* [Partition Kit](https://github.com/kieranb662/PartitionKit) - SwiftUIでビュー内容にリサイズ可能なパーティションを作成するためのライブラリ。
* [Popovers](https://github.com/aheze/Popovers) - ポップオーバーを表示するためのライブラリ。シンプルで現代的で高度にカスタマイズ可能。つまらないものではありません！
* [Preferences](https://github.com/sindresorhus/Settings) - macOSアプリに設定ウィンドウを数分で追加できます。
* [ProgressIndicatorView](https://github.com/exyte/ProgressIndicatorView) - SwiftUIで書かれた進行状況表示ビューのライブラリ。
* [PullToDismiss](https://github.com/sgr-ksmt/PullToDismiss) - スクロールビューまたはナビゲーションバーをドラッグすることでモーダルビューを閉じられます。
* [RangeSeekSlider](https://github.com/WorldDownTown/RangeSeekSlider) - iOS向けのカスタマイズ可能な範囲スライダー（UISliderの類）。
* [Reel search](https://github.com/Ramotion/reel-search) - オプションリストをリールとして管理
* [ResizingTokenField](https://github.com/tadejr/ResizingTokenField) - UICollectionViewベースのトークンフィールドで、コンテンツ高さが内在的に提供される
* [RetroProgress](https://github.com/hyperoslo/RetroProgress) - 90年代から直結したレトロ風進行バー
* [SectionedSlider](https://github.com/LeonardoCardoso/SectionedSlider) - コントロールセンターのスライダー
* [SelectionDialog](https://github.com/kciter/SelectionDialog) - シンプルな選択ダイアログ
* [ShadowView](https://github.com/PierrePerrin/ShadowView) - UIViewにおけるシャドウ管理を簡単にする
* [Shiny](https://github.com/efremidze/Shiny) - 虹彩効果ビュー（Apple Pay Cashにインスパイア）
* [ShowSomeProgress](https://github.com/stoneburner/ShowSomeProgress) - iOSアプリ向けのアニメーション付き進行および活動インジケータ
* [SkeletonView](https://github.com/Juanpe/SkeletonView) - ユーザーに何かが起きていることを示し、待機するコンテンツの内容を事前に準備するための洗練された方法
* [SKPhotoBrowser](https://github.com/suzuki-0000/SKPhotoBrowser) - Facebook、Twitterの写真ブラウザをインスパイアしたシンプルなフォトブラウザ／ビュー
* [Spots](https://github.com/hyperoslo) - Spotsは、設定や今後の開発を極めて高速に実現するビュー制御フレームワーク
* [SpreadsheetView](https://github.com/kishikawakatsumi/SpreadsheetView) - iOSアプリ向けの完全にカスタマイズ可能なスプレッドシートビューインターフェース
* [StarryStars](https://github.com/peterprokop/StarryStars) - 評価の表示と編集、インターフェースビルダーから完全にカスタマイズ可能
* [StatefulViewController](https://github.com/aschuch/StatefulViewController) - コンテンツ、ロード中、エラー、空状態に基づいたプレースホルダービュー
* [StepProgressView](https://github.com/yonat/StepProgressView) - ラベルと形状を備えた段階的な進行ビュー。UIActivityIndicatorViewおよびUIProgressViewの良い代替案
* [SweetCurtain](https://github.com/ihormalovanyi/SweetCurtain) - 本当に素晴らしいし、操作が簡単なボトムプル可能なシート実装。Apple Maps、Find My、Stocksなどアプリで類似実装を見つけることができます
* [SwiftUISkia](https://github.com/rustq/swiftui-skia) - Skiaをベースにした2DグラフィックスSwiftUIレンダリングライブラリ。Rustを用いてソフトウェアレターリズーションを実装し、レンダリングを行う
* [SwiftyUI](https://github.com/haoking/SwiftyUI) - 高性能かつ軽量なUIView、UIImage、UIImageView、UILabel、UIButtonなど
* [TagListView](https://github.com/ElaWorkshop/TagListView) - シンプルながらも非常にカスタマイズ可能なiOSタグリストビュー
* [Toaster](https://github.com/devxoul/Toaster) - 通知トースト
* [Twinkle](https://github.com/piemonte/Twinkle) - iOSアプリ内で要素をきらめかせる簡単な方法
* [UltraDrawerView](https://github.com/super-ultra/UltraDrawerView) - 軽量で高速かつカスタマイズ可能なドロワービューの実装。Apple Maps、Stocksなどに類似。
* [URLEmbeddedView](https://github.com/marty-suzuki/URLEmbeddedView) - Open Graphプロトコルに準拠したオブジェクトを自動的にキャッシュし、URL埋め込みカードとして表示。
* [Windless](https://github.com/ParkGwangBeom/Windless) - Windlessにより、見えないレイアウトの読み込みビューを簡単に実装可能。
* [WSTagsField](https://github.com/whitesmith/WSTagsField) - iOSのテキストフィールドとしてタグを表現するもの。
* [YMTreeMap](https://github.com/yahoo/YMTreeMap) - Squarifiedに基づくTreemap／Heatmapレイアウトエンジン。
* [YNSearch](https://github.com/younatics/YNSearch) - Pinterestのような完全にカスタマイズ可能な検索ビュー。

#### アラート <a id="alert"></a>
*Libs to display alert, action sheet, notification, popup.* [back to top関連](#readme) 

* [Alertift](https://github.com/sgr-ksmt/Alertift) - 現代的な、シンプルなUIAlertControllerのラッパー。
* [Alerts Pickers](https://github.com/dillidon/alerts-and-pickers) - UIAlertControllerの高度な使用例：TextField、DatePicker、PickerView、TableView、CollectionViewを含む。
* [ALRT](https://github.com/mshrwtnb/alrt) - UIAlertControllerの簡単なコンストラクタ。どこからでもアラートを表示可能。
* [AwaitToast](https://github.com/k-lpmg/AwaitToast) - 🍞 フェイスブック投稿時のトーストをインスピレーションにした、非同期待ちトーストと基本トースト。
* [CDAlertView](https://github.com/candostdagdeviren/CDAlertView) - 高度にカスタマイズ可能なアラート／通知／成功／エラー／アラームポップアップ。
* [CFNotify](https://github.com/JT501/SwiftNotify) - ドラッグ可能なアラートビューを作成するためのカスタマイズ可能なフレームワーク。
* [EZAlertController](https://github.com/thellimist/EZAlertController) - シンプルなUIAlertController。
* [FullscreenPopup](https://github.com/Ryu0118/swift-fullscreen-popup) - SwiftUIでナビゲーションバーの上に任意のポップアップを表示。
* [GSMessage](https://github.com/wxxsw/GSMessages) - iOS 7以降向けのシンプルなスタイルのメッセージ／通知。
* [Kamagari](https://github.com/tasanobu-zz/Kamagari) - シンプルなUIAlertControllerビルダークラス。
* [Loaf](https://github.com/schmidyy/Loaf) - iOS用の簡単なトーストフレームワーク。
* [MijickPopups](https://github.com/Mijick/Popups) - ポップアップ、ポップオーバー、シート、アラート、トースト、バナー、(...) の表示をシンプルに。
* [NotificationBanner](https://github.com/Daltron/NotificationBanner) - iOSで高度にカスタマイのインアプリ通知バナーを表示する最も簡単な方法。
* [PMAlertController](https://github.com/pmusolino/PMAlertController) - PMAlertControllerは、UIAlertControllerへの優れたかつカスタマイズ可能な代替です
* [PopupDialog](https://github.com/orderella/PopupDialog) - シンプルでカスタマイズ可能なポップアップダイアログ。UIAlertControllerのアラートスタイルを置き換えます
* [PopupView](https://github.com/exyte/PopupView) - SwiftUIで書かれたトーストとポップアップライブラリ
* [SCLAlertView](https://github.com/vikmeup/SCLAlertView-Swift) - アニメーション付きアラートビュー
* [Sheet](https://github.com/ParkGwangBeom/Sheet) - フラップボードアプリのようなナビゲーション機能を備えたアクションシート
* [SPAlert](https://github.com/sparrowcode/AlertKit) - Apple MusicおよびAppStoreのフィードバックから生まれたネイティブポップアップ。DoneとHeartのプレセットを含みます
* [StatusAlert](https://github.com/LowKostKustomz/StatusAlert) - ユーザーのフローを中断せずに、Appleシステムのように自ら隠れるステータスアラートを表示します
* [SweetAlert](https://github.com/codestergit/SweetAlert-iOS) - アラートシステム
* [Swift-Prompts](https://github.com/GabrielAlva/Swift-Prompts) - 非常に豊かなオプションから選べるカスタマイズ可能なプロンプトの設計
* [SwiftEntryKit](https://github.com/huri000/SwiftEntryKit) - シンプルで汎用的なポップアッププレゼンター
* [SwiftMessages](https://github.com/SwiftKickMobile/SwiftMessages) - iOS向け非常に柔軟なメッセージバー
* [SwiftOverlays](https://github.com/peterprokop/SwiftOverlays) - さまざまなポップアップと通知
* [Toast-Swift](https://github.com/BastiaanJansen/Toast-Swift) - iOS 14以降スタイルのトーストを作成するための使いやすいライブラリ
* [XLActionController](https://github.com/xmartlabs/XLActionController) - 完全にカスタマイズ可能で拡張可能なアクションシートコントローラー
* [Zingle](https://github.com/hemangshah/Zingle) - アラートはあなたのUINavigationBarの下に表示されます

#### ぼかし <a id="blur"></a>
[back to top関連](#readme) 

* [VisualEffectView](https://github.com/efremidze/VisualEffectView) - UIVisualEffectViewのサブクラスで、トーンカラーをサポートしています。

#### ボタン <a id="button"></a>
[back to top関連](#readme) 

* [AHDownloadButton](https://github.com/amerhukic/AHDownloadButton) - 進行状況とトランジションアニメーションを備えたカスタマイズ可能なダウンロードボタン。AppleのApp Storeのダウンロードボタンに基づいています
* [DOFavoriteButton](https://github.com/okmr-d/DOFavoriteButton) - かわいいアニメーションボタン
* [ExpandableButton](https://github.com/DimaMishchenko/ExpandableButton) - カスタマイズ可能で使いやすい展開可能なボタン
* [FloatingButton](https://github.com/exyte/FloatingButton) - SwiftUIで作成された簡単にカスタマイズ可能なフロートボタンメニュー
* [Floaty](https://github.com/kciter/Floaty) - iOS向けのフロートアクションボタン
* [IGStoryButtonKit](https://github.com/KaoruMuta/IGStoryButtonKit) - インスタグラムストーリーズをインスピレーションにした、使いやすく、豊かなアニメーションを備えたボタン
* [LGButton](https://github.com/loregr/LGButton) - ネイティブのUIControlの完全にカスタマイズ可能なサブクラスであり、コードを1行も書かずに美しいボタンを作成可能
* [LTHRadioButton](https://github.com/rolandleth/LTHRadioButton) - 美しくアニメーションされたラジオボタン
* [MultiToggleButton](https://github.com/yonat/MultiToggleButton) - タップでテキストを切り替えるUIButtonのサブクラス（例：カメラのフラッシュやタイマーのボタン）
* [NFDownloadButton](https://github.com/LeonardoCardoso/NFDownloadButton) - リバイバルされたダウンロードボタン。これはNetflixアプリのダウンロードボタンを逆工程したもの。
* [PMSuperButton](https://github.com/pmusolino/PMSuperButton) - 強力なUIButtonで、ストーリーボードからカスタマイズ可能
* [RadioGroup](https://github.com/yonat/RadioGroup) - iOSで欠けているラジオボタングループ
* [SwiftShareBubbles](https://github.com/takecian/SwiftShareBubbles) - iOS向けのアニメーション付きソーシャルシェアボタンコントロール
* [TransitionButton](https://github.com/AladinWay/TransitionButton) - ロードおよびトランジションアニメーションを実装したUIButtonのサブクラス

#### カレンダー <a id="calendar"></a>
[back to top関連](#readme) 

* [CalendarKit](https://github.com/richardtop/CalendarKit) - 完全にカスタマイズ可能なカレンダー日別ビュー
* [CalendarView](https://github.com/mmick66/CalendarView) - カレンダーコンポーネント。縦横両方のレイアウト（スクロール）と、ネイティブカレンダーイベントの表示をサポート
* [DateTimePicker](https://github.com/itsmeichigo/DateTimePicker) - iOSで日時を選択するためのより良いUIコンポーネント
* [ElegantCalendar](https://github.com/ThasianX/ElegantCalendar) - SwiftUIで欠けている、エレガントなフルスクリーンカレンダー
* [HorizonCalendar](https://github.com/airbnb/HorizonCalendar) - 宣言的でパフォーマンスの高いiOSカレンダーUIコンポーネンツ。シンプルな日付選択から完全機能カレンダーアプリまで幅広い用途に対応
* [JTAppleCalendar](https://github.com/patchthecode/JTAppleCalendar) - UIカレンダーハンドラー
* [KVKCalendar](https://github.com/kvyatkovskys/KVKCalendar) - Appleプラットフォーム向けに最も完全にカスタマイズ可能なカレンダー 📅
* [OBCalendar](https://github.com/oBilet/OBCalendar) - OBCalendarはシンプルさとカスタマイズ性を設計しており、美しいかつ機能的なカレンダーインターフェースを簡単に構築可能
* [Workaholic](https://github.com/hemangshah/Workaholic) - GitHubのようなワーク貢献タイムライン
* [Yotei](https://github.com/claustrofob/Yotei) - iOS向けのモジュール化・カスタマイズ可能なSwiftUI/UIKitカレンダーパッケージ

#### カード <a id="cards"></a>
[back to top関連](#readme) 

* [CardNavigation](https://github.com/james01/CardNavigation) - ビュー制御器が、そのビュー制御器をインタラクティブなカードのスタックとして表示するナビゲーションコントローラー
* [CardParts](https://github.com/intuit/CardParts) - iOS開発者向け、UIKitをベースにした反応型カードベースUIフレームワーク
* [VerticalCardSwiper](https://github.com/JoniVR/VerticalCardSwiper) - Shazam Discover UIとTinderの融合を実現したUICollectionViewベースのUI

#### フォーム <a id="form"></a>
[back to top関連](#readme) 

* [Carbon](https://github.com/ra1028/Carbon) - 🚴 UITableViewおよびUICollectionViewにおけるコンポーネントベースUIを宣言的に構築するためのライブラリ
* [Eureka](https://github.com/xmartlabs/Eureka) - 美しく簡潔なiOSフォームビルダー
* [FDBarGauge](https://github.com/fulldecent/FDBarGauge) - オーディオミキサーのレベルインジケータをシミュレート
* [Former](https://github.com/ra1028/Former) - 完全にカスタマイズ可能なUITableViewベースフォーム作成用ライブラリ
* [ObjectForm](https://github.com/haojianzong/ObjectForm) - クラスモデルに合わせたシンプルで強力なフォーム作成ライブラリ
* [SwiftyFORM](https://github.com/neoneye/SwiftyFORM) - バリデーション可能なフォーム

#### HUD <a id="hud"></a>
[back to top関連](#readme) 

* [EZLoadingActivity](https://github.com/Esqarrouth/EZLoadingActivity) - 軽量なロードアクティビティHUD
* [GradientLoadingBar](https://github.com/fxm90/GradientLoadingBar) - アニメーション付きグラデーションロードバー
* [KRProgressHUD](https://github.com/krimpedance/KRProgressHUD) - 美しくカスタマイズ可能な進行状況HUD
* [PKHUD](https://github.com/pkluz/PKHUD) - AppleのHUDを再実装

#### ラベル <a id="label"></a>
[back to top関連](#readme) 

* [ActiveLabel](https://github.com/optonaut/ActiveLabel.swift) - ハッシュタグ（#）、メンション（@）、URL (http://) をサポートするUILabelの即時置き換え
* [Atributika](https://github.com/psharanda/Atributika) - HTMLタグ、リンク、ハッシュタグ、メンションをテキストに変換し、NSAttributedStringにし、UILabelの即時置き換えでクリック可能に
* [CountdownLabel](https://github.com/suzuki-0000/CountdownLabel) - シンプルで、モーフィングアニメーション付きカウントダウンUILabel、および便利な関数を備えたもの
* [GlitchLabel](https://github.com/kciter/GlitchLabel) - iOS向けのGlitch効果UILabel
* [IncrementableLabel](https://github.com/tbaranes/IncrementableLabel) - UILabelのサブクラスで、UILabel内の数字を（減）増加させるもの
* [KDEDateLabel](https://github.com/delannoyk/KDEDateLabel) - UILabelのサブクラスで、タイムアゴのフォーマットをより簡単に表示するもの
* [LTMorphingLabel](https://github.com/lexrus/LTMorphingLabel) - UILabelへのスムーズなモーフィング効果
* [Nantes](https://github.com/instacart/Nantes) - TTTAttributedLabelの置き換え
* [TriLabelView](https://github.com/mukeshthawani/TriLabelView) - iOS用三角形の角ラベルビュー

#### メニュー <a id="menu"></a>
[back to top関連](#readme) 

* [AKSwiftSlideMenu](https://github.com/ashishkakkad8/AKSwiftSlideMenu) - スライドメニュー（ドレッカー）
* [CircleMenu](https://github.com/Ramotion/circle-menu) - CircleMenuは、円形レイアウトとマテリアルデザインアニメーションを備えたシンプルでエレガントなUIメニューです
* [ENSwiftSideMenu](https://github.com/evnaz/ENSwiftSideMenu) - スライド式サイドメニュー
* [FanMenu](https://github.com/exyte/fan-menu) - Macawに基づく円形レイアウトのメニュー
* [FlowingMenu](https://github.com/yannickl/FlowingMenu) - 流れやバウンス効果をもつインタラクティブなビュー遷移によるメニュー表示
* [GuillotineMenu](https://github.com/Yalantis/GuillotineMenu) - ギルロイントスタイルのメニュー
* [HHFloatingView](https://github.com/hemangshah/HHFloatingView) - アプリに簡単に使用・設定できるフロートビュー
* [InteractiveSideMenu](https://github.com/handsomecode/InteractiveSideMenu) - カスタマイズ可能なiOSインタラクティブサイドメニュー
* [KWDrawerController](https://github.com/Kawoou/KWDrawerController) - 使いやすいドレッカービュー制御
* [MenuItemKit](https://github.com/cxa/MenuItemKit) - `UIMenuItem` に画像とブロック（クロージャ）をサポートしています。
* [Pagemenu](https://github.com/PageMenu/PageMenu) - ページネーションを有するビュー制御
* [PagingKit](https://github.com/kazuhiro4949/PagingKit) - PagingKitはカスタマイズ可能なメニューUIを提供します
* [Panels](https://github.com/antoniocasero/Panels) - Panelsはアプリにスライドパネルを簡単に追加するためのフレームワークです
* [Parchment](https://github.com/rechsteiner/Parchment) - UICollectionViewをベースにした、高度にカスタマイズ可能なページングビュー制御
* [PopMenu](https://github.com/CaliCastle/PopMenu) - 😎 iOS用クールでカスタマイズ可能なポップアップスタイルアクションシート
* [SegmentIO](https://github.com/Yalantis/Segmentio) - iOS用アニメーション付きトップ／ボトムセグメントメニュー
* [SideMenu](https://github.com/jonkykong/SideMenu) - Facebookをインスピレーションに受けて作られたシンプルなiOSサイドメニュー（右・左側）。コードなしで使用可能
* [SlideMenuControllerSwift](https://github.com/dekatotoro/SlideMenuControllerSwift) - Google+、iQON、Feedly、Ameba iOSアプリをベースにしたiOSスライドメニュービュー
* [SwipeMenuViewController](https://github.com/yysskk/SwipeMenuViewController) - スワイプ可能なタブとメニュービューおよびビュー制御
* [XLPagerTabStrip](https://github.com/xmartlabs/XLPagerTabStrip) - Android PagerTabStripをiOS向けに移植
* [YNDropDownMenu](https://github.com/younatics/YNDropDownMenu) - 可愛いiOSのドロップダウンメニュー

#### ページネーション <a id="pagination"></a>
[back to top関連](#readme) 

* [CHIPageControl](https://github.com/ChiliLabs/CHIPageControl) - 退屈なUIPageControlを置き換える、カッコイイアニメーション付きページコントロールセット
* [FlexiblePageControl](https://github.com/shima11/FlexiblePageControl) - インスタグラム風に柔軟なUIPageControl
* [iPages](https://github.com/blsage/iPages) - SwiftUIでスワイプ可能なページビューを迅速に実装 📝
* [Pageboy](https://github.com/uias/Pageboy) - シンプルで情報量豊富なページビュー制御
* [PageController](https://github.com/hirohisa/PageController) - 無限ページ制御
* [SlideController](https://github.com/touchlane/SlideController) - ジェネリック型の力により構築されたUIPageViewControllerの代替案。ページ間をスワイプで切り替え可能で、インタラクティブなタイトルナビゲーションコントロールで設定。横方向または縦方向の連鎖を設定し、ページ数に制限なし。

#### 決済 <a id="payment"></a>
[back to top関連](#readme) 

* [AnimatedCardInput](https://github.com/netguru/AnimatedCardInput) - カスタマイズ可能で使いやすいクレジットカードUI
* [Caishen](https://github.com/prolificinteractive/Caishen) - iOS向けの支払いカードUIおよびバリデーション
* [iCard](https://github.com/eliakorkmaz/iCard) - SnapKit DSLを用いた銀行カードジェネレーター
* [MFCard](https://github.com/MobileFirstInc/MFCard) - iOSアプリにクレジットカード決済を簡単に統合
* [TPInAppReceipt](https://github.com/tikhop/TPInAppReceipt) - Appleのインアプリ購入リセイプトをローカルで読み取り・バリデーションする、軽量かつ純Swiftのライブラリ

#### 権限 <a id="permissions"></a>
[back to top関連](#readme) 

* [AREK](https://github.com/ennioma/arek) - AREKは、iOSのどの種類の許可にも対応する、シンプルで使いやすいラッパーです
* [Permission](https://github.com/delba/Permission) - iOSで許可を求めるための一元化API
* [SPPermission](https://github.com/sparrowcode/PermissionsKit) - ネイティブUIとインタラクティブアニメーションを用いたシンプルな許可要求

#### スクロールバー <a id="scroll-bars"></a>
[back to top関連](#readme) 

* [DMScrollBar](https://github.com/batanus/DMScrollBar) - すべてのScrollViewタイプに最適化されたカスタマイズ可能なスクロールバー。減速、バウンス、ラバーバンドメカニズムなど、多くの機能を備えています。

#### StackView <a id="stackview"></a>
[back to top関連](#readme) 

* [StackViewController](https://github.com/seedco/StackViewController) - UIStackViewの使用を簡易化
* [TZStackView](https://github.com/tomvanzummeren/TZStackView) - iOS9のUIStackViewレイアウトコンポーネントをiOS7およびiOS8向けに再実装

#### スイッチ <a id="switch"></a>
[back to top関連](#readme) 

* [MJMaterialSwitch](https://github.com/JaleelNazir/MJMaterialSwitch) - iOS向けにGoogleのMaterial Designをインスピレーションにしたカスタマイズ可能なスイッチUI
* [paper-switch](https://github.com/Ramotion/paper-switch) - RAMPaperSwitchは、スイッチがオンになったときに親ビューに描画される、Material Design UIモジュール
* [Switch](https://github.com/T-Pham/Switch) - Interface Builder対応のスイッチコントロール

#### タブ <a id="tab"></a>
[back to top関連](#readme) 

* [Adaptive Tab Bar](https://github.com/Ramotion/adaptive-tab-bar) - アダプティブなタブバー
* [Animated Tab Bar](https://github.com/Ramotion/animated-tab-bar) - RAMAnimatedTabBarControllerは、タブバー項目にアニメーションを追加するためのモジュールです
* [CardTabBar](https://github.com/yusadogru/CardTabBar) - iOSのタブバー項目へのアニメーションの追加
* [CircleBar](https://github.com/softhausHQ/CircleBar) - iOS向けに楽しい、使いやすいタブバーナビゲーションコントローラー
* [ColorMatchTabs](https://github.com/Yalantis/ColorMatchTabs) - タブを表示する面白い方法
* [DTPagerController](https://github.com/tungvoduc/DTPagerController) - 水平スクロールビューに複数のViewControllersを表示するためのコンテナビュー制御者
* [ESTabBarController](https://github.com/eggswift/ESTabBarController) - UITabBarControllerから継承された、高度にカスタマイズ可能なタブバー制御者
* [HHTabBarView](https://github.com/hemangshah/HHTabBarView) - 軽量かつカスタマイズ可能なタブバービュー
* [PolioPager](https://github.com/YuigaWada/PolioPager) - 検索タブを備えた柔軟なタブバー（SNKRS風）
* [SwiftUIMaterialTabs](https://github.com/SwiftKickMobile/SwiftUIMaterialTabs) - Material 3スタイルのタブとスタイックヘッダーを統合したSwiftUIライブラリ
* [TabBar](https://github.com/onl1ner/TabBar) - SwiftUIアプリケーション向けに高度にカスタマイズ可能なタブバー
* [Tabman](https://github.com/uias/Tabman) - 強力なページングビュー制御者とインディケータバー
* [TabPageViewController](https://github.com/EndouMari/TabPageViewController) - ページングビュー制御者とスクロールタブビュー

#### テンプレート <a id="template"></a>
[back to top関連](#readme) 

* [Stencil](https://github.com/stencilproject/Stencil) - シンプルで強力なテンプレート言語
* [SwiftCssParser](https://github.com/100mango/SwiftCssParser) - 拡張可能なCSSパーサー
* [Temple](https://github.com/GoodRequest/Temple) - 🗂️ 最先端のプロジェクトとファイルテンプレート

#### TextField <a id="textfield"></a>
[back to top関連](#readme) 

* [CBPinEntryView](https://github.com/Fawxy/CBPinEntryView) - 使いやすく、非常にカスタマイズ可能なピン入力
* [CHIOTPField](https://github.com/ChiliLabs/CHIOTPField) - 一度限りのパスワード、SMSコード、PINコードなどに使えるテキストフィールドのセット
* [DTTextField](https://github.com/iDhaval/DTTextField) - DTTextFieldは、フロートするプレースホルダーとエラーラベルを備えたカスタムテキストフィールドです
* [FloatingLabelTextFieldSwiftUI](https://github.com/kishanraja/FloatingLabelTextFieldSwiftUI) - FloatingLabelTextFieldSwiftUIは、完全にSwiftUIで記述された軽量なSwiftUIフレームワークであり、美しいかつカスタマイズ可能なフロートラベルテキストフィールドを作成可能にします
* [HTYTextField](https://github.com/hanton/HTYTextField) - バウンス効果を持つUITextFieldのプレースホルダー
* [iTextField ⌨️](https://github.com/blsage/iTextField) - 完全にSwiftUIで動作する `UITextField` のラップされたバージョン 🦅。
* [PasswordTextField](https://github.com/PiXeL16/PasswordTextField) - パスワードを表示・非表示できるスイッチ可能なアイコンを備えたカスタムテキストフィールド。強固なパスワードポリシーを強制する
* [SkyFloatingLabelTextField](https://github.com/Skyscanner/SkyFloatingLabelTextField) - 「フロートラベルパターン」を実装した、美しいかつ柔軟なテキストフィールドコントロール
* [StyledTextKit](https://github.com/GitHawkApp/StyledTextKit) - 宣言型で構築可能で高速レンダリング可能な属性文字列ライブラリ
* [TextFieldCounter](https://github.com/serralvo/TextFieldCounter) - ユーザー体験が心を奪われるUITextFieldの文字数カウンター
* [TextFieldEffects](https://github.com/raulriera/TextFieldEffects) - UITextFieldsに用意された複数の即時使用可能なエフェクト
* [UITextField-Navigation](https://github.com/T-Pham/UITextField-Navigation) - UITextField-Navigationは、UITextFieldsにキーボードに次・前・完了ボタンを追加。高度にカスタマイズ可能
* [VKPinCodeView](https://github.com/Sunspension/VKPinCodeView) - PIN入力用のシンプルでエレガントなUIコンポーネント

#### トランジション <a id="transition"></a>
[back to top関連](#readme) 

* [BubbleTransition](https://github.com/andreamazz/BubbleTransition) - 簡単にバブルトランジションを実現
* [Cards XI](https://github.com/PaoloCuscela/Cards) - iOS 11のAppStoreのカードビュー
* [EasyTransitions](https://github.com/marcosgriselli/EasyTransitions) - カスタムインタラクティブUIViewControllerトランジションを簡単に作成する方法
* [Hero](https://github.com/HeroTransitions/Hero) - iOS向けエレガントなトランジションライブラリ
* [ImageTransition](https://github.com/shtnkgm/ImageTransition) - ImageTransitionは、トランジション中に画像をスムーズにアニメーションするためのライブラリ
* [Jelly](https://github.com/SebastianBoldt/Jelly) - Jellyは、わずかなコードでカスタムビュー制御トランジションを提供
* [LiquidSwipe](https://github.com/exyte/LiquidSwipe) - 液体ナビゲーションアニメーション
* [MijickNavigattie](https://github.com/Mijick/NavigationView) - SwiftUIで簡単にナビゲーション
* [MusicPlayerTransition](https://github.com/xxxAIRINxxx/MusicPlayerTransition) - Apple Music iOSアプリのようにカスタムインタラクティブトランジション
* [NavigationTransitions](https://github.com/davdroman/swiftui-navigation-transitions) - 純粋なSwiftUIナビゲーショントランジション
* [PanSlip](https://github.com/k-lpmg/PanSlip) - UIViewControllerおよびUIViewでPanGestureを使用してビューを閉じる
* [PinterestSwift](https://github.com/demonnico/PinterestSwift) - Pinterest風トランジション
* [RevealingSplashView](https://github.com/PiXeL16/RevealingSplashView) - Twitterのスプラッシュ画面をインスピレーションにした、コンテンツをアニメーションして表示するSplashビュー
* [SamuraiTransition](https://github.com/hachinobu/SamuraiTransition) - Swiftベースのライブラリ。ViewControllerの遷移に、さまざまな洗練されたカットアニメーションを提供。
* [SPLarkController](https://github.com/ivanvorobei/SPLarkController) - 2つのコントローラ間のカスタム遷移。上に移動する。
* [SPStorkController](https://github.com/ivanvorobei/SPStorkController) - Apple Musicの「Now Playing」コントローラ。高さをカスタマイズ可能。
* [StarWars.iOS](https://github.com/Yalantis/StarWars.iOS) - ビュー・コントローラを小さなピースに崩れながら遷移するアニメーション。
* [Transition](https://github.com/Touchwonders/Transition) - インタラクティブで中断可能なカスタムViewController遷移を簡単に実現。

#### 3D <a id="ui-3d"></a>
[back to top関連](#readme) 

* [Insert3D](https://github.com/Viktoo/Insert3D) - 3Dモデルを埋め込むための最も速い 🚀 方法。

#### UICollectionView <a id="uicollectionview"></a>
[back to top関連](#readme) 

* [ASCollectionView](https://github.com/abdullahselek/ASCollectionView) - Airbnbをインスピレーションにした、軽量なカスタムCollectionView。
* [AZCollectionViewController](https://github.com/AfrozZaheer/AZCollectionViewController) - CollectionViewにページネーションを簡単に統合し、InstagramのDiscoverを数分で実現。
* [Blueprints](https://github.com/zenangst/Blueprints) - CollectionViewのフローレイアウトを使った作業を楽にするためのフレームワーク。
* [BouncyLayout](https://github.com/roberthein/BouncyLayout) - セルがバウンスするCollectionViewレイアウト。
* [CardsLayout](https://github.com/filletofish/CardsLayout) - カードデザインのカスタムCollectionViewレイアウト。
* [CenteredCollectionView](https://github.com/BenEmdon/CenteredCollectionView) - 軽量なUICollectionViewLayoutで、セルをページングし、中央に配置。
* [CheckmarkCollectionViewCell](https://github.com/yonat/CheckmarkCollectionViewCell) - isSelected時にチェックボックス、そうでない場合は空の円を表示するUICollectionViewCell。Photos.appの「選択」モードに似ている。
* [CollectionViewShelfLayout](https://github.com/pitiphong-p/CollectionViewShelfLayout) - UICollectionViewLayoutのサブクラスで、アイテムをApp Storeの特集タブのように行に並べる。nested UITableView/UICollectionViewのハックなし。
* [CollectionViewSlantedLayout](https://github.com/yacir/CollectionViewSlantedLayout) - スロープコンテンツを表示するUICollectionViewLayout。
* [Drag and Drop UICollectionView](https://github.com/mmick66/KDDragAndDropCollectionView) - 複数のUICollectionView間でデータをドラッグ＆ドロップ。
* [FSPagerView](https://github.com/WenchaoD/FSPagerView) - エレガントなスクリーンスライドライブラリ。バナー表示、商品紹介、ようこそ/ガイドページ、スクリーン/ViewControllerスライダーの作成に非常に役立ちます。
* [Gliding Collection](https://github.com/Ramotion/gliding-collection) - Gliding Collectionは、UICollectionViewコントローラにスムーズで、自然な、カスタマイズ可能な選択肢。
* [GoodProvider](https://github.com/GoodRequest/GRProvider) - 🚀 UITableViewおよびUICollectionViewのプロバイダー。データの表示に関する基本的なシナリオを簡略化。
* [GravitySlider](https://github.com/ApplikeySolutions/GravitySlider) - 標準のUICollectionViewフローレイアウトの美しい代替。
* [ShelfView-iOS](https://github.com/tdscientist/ShelfView-iOS) - iOSで書架に本を表示するカスタムビュー
* [SimpleSource](https://github.com/Squarespace/simple-source ) - 簡単で型安全なiOSのテーブルとコレクションビュー
* [SwiftSpreadsheet](https://github.com/stuffrabbit/SwiftSpreadsheet) - 完全にカスタマイズ可能なスプレッドシートCollectionViewLayout
* [TagCellLayout](https://github.com/riteshhgupta/TagCellLayout) - タグ用のUICollectionViewレイアウト（左・中央・右の並び方）
* [UICollectionViewSplitLayout](https://github.com/yahoojapan/UICollectionViewSplitLayout) - UICollectionViewレイアウトがコレクションビューの反応性を高める
* [VegaScroll](https://github.com/AppliKeySolutions/VegaScroll) - UICollectionView用の軽量アニメーションフローレイアウト

#### UITableView <a id="uitableview"></a>
[back to top関連](#readme) 

* [AZTableViewController](https://github.com/AfrozZaheer/AZTableViewController) - ページネーションとプレースホルダービューを組み込む、洗練されたかつ簡単な方法
* [CollapsibleTableSectionViewController](https://github.com/jeantimex/CollapsibleTableSectionViewController) - テーブルビューにおける折りたたみセクションをサポートするライブラリ
* [DGElasticPullToRefresh](https://github.com/gontovnik/DGElasticPullToRefresh) - エラスティックなスクロールでリフレッシュ
* [DiffableDataSources](https://github.com/ra1028/DiffableDataSources) - 💾 UITableView/UICollectionViewDiffableDataSourceのバックポートをサポートするライブラリ
* [DTTableViewManager](https://github.com/DenTelezhkin/DTTableViewManager) - ジェネリクスと関連型を活用したプロトコル指向のUITableView管理
* [ExpandableCell](https://github.com/younatics/ExpandableCell) - 完全にリファクタリングされたYNExapnadableCell。より簡潔でバグのない、iOS用の展開・折りたたみセル。任意のカスタマイズが可能。insertRowsとdeleteRowsの使いづらさを解決するために展開セルを実装。ExpandableCellを継承することで、展開セルの使用が非常に簡単。
* [FDTextFieldTableViewCell](https://github.com/fulldecent/FDTextFieldTableViewCell) - セルにUITextFieldを追加し、適切な位置に配置
* [folding-cell](https://github.com/Ramotion/folding-cell) - 折りたたみセルのトランジション
* [GridView](https://github.com/KyoheiG3/GridView) - タイムテーブル、スプレッドシート、ページングなど、カスタマイズ可能
* [HGPlaceholders](https://github.com/HamzaGhazouani/HGPlaceholders) - プロジェクト内の任意のUITableView/UICollectionViewにプレースホルダーと空状態を表示する素晴らしいライブラリ
* [OKTableViewLiaison](https://github.com/okcupid/OKTableViewLiaison) - UITableViewをより効果的に管理するためのフレームワーク
* [ParallaxHeader](https://github.com/romansorochak/ParallaxHeader) - UIScrollView/UITableViewにパラリックスヘッダーを簡単に追加する方法
* [Persei](https://github.com/Yalantis/Persei) - UITableView / UICollectionView / UIScrollView用のアニメーショントップメニュー
* [PullToRefreshSwift](https://github.com/dekatotoro/PullToRefreshSwift) - PullToRefreshライブラリ
* [QuickTableViewController](https://github.com/bcylin/QuickTableViewController) - 設定用のUITableViewを作成するシンプルな方法
* [ReverseExtension](https://github.com/marty-suzuki/ReverseExtension) - UITableView拡張機能で、テーブルビューの下部からセルを挿入できるようにする
* [SelectionList](https://github.com/yonat/SelectionList) - UITableViewをベースにしたシンプルな単一選択または複数選択チェックリスト
* [Shoyu](https://github.com/xai3/Shoyu) - UITableViewの構造をより簡単に表現する方法
* [SwiftyComments](https://github.com/tsucres/SwiftyComments) - 展開・収縮可能なセルのネスト構造で、洗練されたディスカッションスレッドを簡単に構築
* [SwipeCellKit](https://github.com/SwipeCellKit/SwipeCellKit) - 標準のMail.appをベースにしたスワイプ可能なUITableViewCell
* [WLEmptyState](https://github.com/WizelineLabs/WLEmptyState) - UITableViewのデータセットが空のときのビューをカスタマイズできるコンポーネント
* [YNExpandableCell](https://github.com/younatics/YNExpandableCell) - iOS向けに素晴らしい展開・収縮可能なテーブルビューセル

#### ウォークスルー <a id="walkthrough"></a>
[back to top関連](#readme) 

* [AwesomeSpotlightView](https://github.com/aleksandrshoshiashvili/AwesomeSpotlightView) - チュートリアルやガイドツアーを作成する
* [BWWalkthrough](https://github.com/ariok/BWWalkthrough) - iOSアプリ用のカスタムウォークスルーを構築するクラス
* [ConcentricOnboarding](https://github.com/exyte/ConcentricOnboarding) - タップアクション付きのウォークスルーまたはオンボーディングフローのSwiftUIライブラリ
* [Gecco](https://github.com/xai3/Gecco) - iOS向けのスポットライトビュー
* [Instructions](https://github.com/ephread/Instructions) - アプリのウォークスルーおよびガイドツアーを作成するライブラリ
* [OnboardKit](https://github.com/NikolaKirev/OnboardKit) - iOSアプリ向けのカスタマイズ可能なユーザーオンボーディング
* [PaperOnboarding](https://github.com/Ramotion/paper-onboarding) - PaperOnboardingはマテリアルデザインUIスライダー
* [SuggestionsKit](https://github.com/AlphanumericCharactersOrSingleHyphenz/SuggestionsKit) - アプリ内の機能についてユーザーに教育するライブラリ
* [SwiftyOnboard](https://github.com/juanpablofernandez/SwiftyOnboard) - 開発者が美しいオンボーディング体験を作成できるiOSフレームワーク
* [SwiftyWalkthrough](https://github.com/ruipfcosta/SwiftyWalkthrough) - アプリ内で素晴らしいウォークスルー体験を簡単に作成する方法

### ユーティリティ <a id="utility"></a>
*Some interesting utilities to help you in your projects* [back to top関連](#readme) 

* [AlexaSkillsKit](https://github.com/choefele/AlexaSkillsKit) - カスタムアレクサスキルを開発する
* [AmoreKit](https://github.com/AmoreComputer/AmoreKit) - App Store外で配布されるmacOSアプリでライセンスキーの販売と検証を行う
* [ApplyStyleKit](https://github.com/shindyu/ApplyStyleKit) - エレガントに、UIKitにメソッドチェーンを使ってスタイルを適用する。
* [Basis](https://github.com/typelift/Basis) - 純粋な宣言型プログラミング。
* [Bow](https://github.com/bow-swift/bow) - Typed Functional Programming用の補助ライブラリ。
* [CallbackURLKit](https://github.com/phimage/CallbackURLKit) - x-callback-url（アプリ間通信）の実装。
* [Closures](https://github.com/vhesener/Closures) - UIKitおよびFoundation用のSwiftyクロージャー。
* [Codextended](https://github.com/JohnSundell/Codextended) - Codable APIの型推論を強化する拡張機能。
* [Curry](https://github.com/thoughtbot/Curry) - 関数の部分適用（カーリング）。
* [Delegated](https://github.com/dreymonde/Delegated) - メモリリークのないクロージャーベースのデリゲーション。
* [DifferenceKit](https://github.com/ra1028/DifferenceKit) - 💻 高速かつ柔軟なO(n)差分アルゴリズムフレームワーク。
* [Differific](https://github.com/zenangst/Differific) - 高速で使いやすい差分フレームワーク。
* [Dollar](https://github.com/ankurp/Dollar) - JavaScriptのLo-DashやUnderscoreに似ている。
* [DuctTape](https://github.com/marty-suzuki/DuctTape) - 📦 SwiftにおけるKeyPath動的メンバ検索に基づくシンタックスシュガー。
* [EtherWalletKit](https://github.com/SteadyAction/EtherWalletKit) - iOS用のEthereumウォレットツールキット - サーバーまたはブロックチェーン知識なしでEthereumウォレットを実装可能。
* [ExceptionCatcher](https://github.com/sindresorhus/ExceptionCatcher) - Objective-Cの例外をキャッチする。
* [EZSwiftExtensions](https://github.com/Esqarrouth/EZSwiftExtensions) - 標準的な型とクラスがどのように機能すべきだったか。
* [FlagAndCountryCode](https://github.com/exyte/FlagAndCountryCode) - FlagAndCountryCodeはすべての国に電話コードと国旗を提供。UIKitおよびSwiftUIで動作。
* [FluentQuery](https://github.com/MihaelIsaev/FluentQuery) :penguin: - 強力で使いやすいクエリビルダー。
* [GoodExtensions-iOS](https://github.com/GoodRequest/GoodExtensions-iOS) - 📑 GoodExtensionsは便利で頻繁に使われる拡張機能のコレクション。
* [GoodUIKit](https://github.com/GoodRequest/GoodUIKit) - 📑 GoodUIKitは再利用可能なUIスニペットを豊富に含む拡張ライブラリで、開発をより高速かつ効率的に可能にする。
* [Highlighter](https://github.com/younatics/Highlighter) - 何でもハイライトできる！HighlighterはUILabel、UITextView、UITextField、UIButtonなどのUIオブジェクトをあなたのUITableViewCellやその他のクラス内で自動的に見つける。
* [LifetimeTracker](https://github.com/krzysztofzablocki/LifetimeTracker) - 表面の保持サイクル／メモリ問題がアプリ開発の途中で発生する場合
* [Lumos](https://github.com/sushinoya/Lumos) - Objective-Cランタイム関数に使える簡単なAPI
* [ObjectiveKit](https://github.com/marmelroy/ObjectiveKit) - Objective-Cランタイム関数に使えるAPI
* [OpenSourceController](https://github.com/floriangbh/OpenSourceController) - アプリケーションに使われているライブラリのライセンスを表示する最も簡単な方法
* [Percentage](https://github.com/sindresorhus/Percentage) - パーセンテージをより読みやすく、型安全に表示する
* [Periphery](https://github.com/peripheryapp/periphery) - Swiftプロジェクト内の使われていないコードを特定するツール
* [Playbook](https://github.com/playbook-ui/playbook-ios) - 📘UIコンポーネントを孤立して開発し、自動的にスナップショットを取るためのライブラリ
* [PrivacyFlash Pro](https://github.com/privacy-tech-lab/privacyflash-pro) - Swift iOSアプリのコードからプライバシーポリシーを生成する
* [protobuf-swift](https://github.com/alexeyxo/protobuf-swift) - ProtocolBuffers
* [Prototope](http://khan.github.io/Prototope/) - プロトタイピングに使う軽量インターフェースのライブラリ（JavaScriptに橋渡し）
* [R.swift](https://github.com/mac-cain13/R.swift) - 画像、セル、セグのなどの強型で自動補完可能なリソースを取得するツール
* [RandomKit](https://github.com/nvzqz/RandomKit/) :penguin: - ランダムデータ生成
* [ReadabilityKit](https://github.com/exyte/ReadabilityKit) - ニュース、記事、全文のプレビューエキストラクタ
* [ReerKit](https://github.com/reers/ReerKit) - Swiftの強力な基礎ライブラリ。拡張機能とユーティリティ関数を提供し、iOS/macOS/Linux開発ワークフローを強化
* [ResourceKit](https://github.com/bannzai/ResourceKit) - 自動補完に使えるリソースを有効化
* [Result](https://github.com/antitypical/Result) - 任意の操作の成功／失敗をモデル化する型
* [Rugby](https://github.com/swiftyfinch/Rugby) - 🏈 CocoaPodsをキャッシュして、Xcodeプロジェクトの再構築とインデックス作成を速くする
* [Runes](https://github.com/thoughtbot/Runes) - 関数型演算子：flatMap、map、apply
* [Solar](https://github.com/ceeK/Solar) - 指定された場所に基づいて日出と日没の時間の計算
* [SpriteKit+Spring](https://github.com/ataugeron/SpriteKit-Spring) - SpriteKit APIがUIViewのスプリングアニメーションをSKActionで再現
* [Sugar](https://github.com/hyperoslo/Sugar) - ココアに合う素晴らしいもの。
* [swift-build](https://github.com/brightdigit/swift-build) - すべてのプラットフォームでSwiftパッケージをビルド・テストするGitHubアクション。
* [swift-protobuf](https://github.com/apple/swift-protobuf) :penguin: - GoogleのProtocol Bufferを使用するプラグインおよびランタイムライブラリ。
* [SwiftAutoGUI](https://github.com/NakaokaRei/SwiftAutoGUI) - マウスとキーボードをプログラム的に制御する。SwiftでmacOSを操作するライブラリ。
* [SwiftBoost](https://github.com/sparrowcode/SwiftBoost) - 開発プロセスを加速するSwift拡張機能のコレクション。
* [Swiftbot](https://github.com/noppefoxwolf/Swiftbot) - スラック上でSwiftコードを実行。
* [SwifterSwift](https://github.com/SwifterSwift/SwifterSwift) - 500以上のネイティブ拡張機能を収録した、生産性を高める便利なコレクション。
* [SwiftGen-Storyboard](https://github.com/SwiftGen/SwiftGen#uistoryboard) - すべてのStoryboards、ScenesおよびSeguesの定数に対して自動生成される `enums` と、適切なコンビニエンスアクセサーを提供するツール。
* [SwiftLinkPreview](https://github.com/LeonardoCardoso/SwiftLinkPreview) - URLからプレビューを作成し、タイトル、関連テキスト、画像などすべての情報を取得。
* [SwiftPlantUML](https://github.com/MarcoEidinger/SwiftPlantUML) - SwiftソースコードからUMLクラスを生成するコマンドラインツールおよびSwiftパッケージ。Xcodeソースエディタ拡張としても利用可能。
* [SwiftRandom](https://github.com/thellimist/SwiftRandom) - 小さなランダムデータ生成ツール。
* [SwiftRater](https://github.com/takecian/SwiftRater) - iPhoneアプリのユーザーにアプリの確認をリマインダーとして提供するユーティリティ。
* [SwiftTweaks](https://github.com/bryanjclark/SwiftTweaks) - 再コンパイルなしでiOSアプリをカスタマイズ。
* [Swiftx](https://github.com/typelift/Swiftx) - どんなプロジェクトにも使える機能的なデータ型と関数。
* [SwiftyUtils](https://github.com/tbaranes/SwiftyUtils) - 各プロジェクトで必要となる再利用可能なコードのすべて。
* [Swiftz](https://github.com/typelift/Swiftz) - 関数型プログラミング。
* [SyntaxKit](https://github.com/brightdigit/SyntaxKit) - 宣言的な構文でSwiftコードをプログラム的に生成。
* [Then](https://github.com/devxoul/Then) - 初期化子に非常に便利な構文糖。
* [TSAO](https://github.com/lilyball/swift-tsao) - 型安全な関連オブジェクト。
* [URLQueryItemEncoder](https://github.com/pitiphong-p/URLQueryItemEncoder) - 任意のEncodable値をURLQueryItemの配列にエンコードするエンコーダー。
* [UTIKit](https://github.com/cockscomb/UTIKit) - UTI（Uniform Type Identifier）のラッパー。
* [Vaccine](https://github.com/zenangst/Vaccine) - アプリケーションをリコンパイルによる影響から完全に守る
* [WeakableSelf](https://github.com/vincent-pradeilles/weakable-self) - [weak self]とクロージャー内の守り文を閉じ込めるマイクロフレームワーク
* [WhatsNew](https://github.com/BalestraPatrick/WhatsNew) - アプリ更新後にPages、NumbersおよびKeynoteのように新しい機能を紹介
* [WhatsNewKit](https://github.com/SvenTiigi/WhatsNewKit) - あなたの素晴らしい新機能を紹介
* [XestiMonitors](https://github.com/eBardX/XestiMonitors) - 拡張可能なモニタリングフレームワーク
* [ZamzamKit](https://github.com/basememara/ZamzamKit) - Standard Library、FoundationおよびUIKit向けのマイクロユーティリティと拡張機能のコレクション

### バリデーション <a id="validation"></a>
*A collection of validation libs.* [back to top関連](#readme) 

* [ATGValidator](https://github.com/altayer-digital/ATGValidator) - iOS向けフォームおよびカードのルールベースバリデーションフレームワーク
* [FormValidatorSwift](https://github.com/ustwo/formvalidator-swift) - テキストフィールドやテキストビューの入力値を便利にバリデーションできるようにする
* [Input Mask](https://github.com/RedMadRobot/input-mask-ios) - iOS向けパターンベースのユーザー入力フォーマッター、パーサーおよびバリデーション
* [RxValidator](https://github.com/vbmania/RxValidator) - シンプルで拡張可能かつ柔軟なバリデーションチェック
* [SwiftValidator](https://github.com/SwiftValidatorCommunity/SwiftValidator) - ルールベースのバリデーションライブラリ
* [SwiftValidators](https://github.com/gkaimakas/SwiftValidators) - iOS向け文字列バリデーション（validator.jsをインスピレーションに）
* [ValidatedPropertyKit](https://github.com/SvenTiigi/ValidatedPropertyKit) - プロパティのバリデーションをProperty Wrappersで簡単に実行 👮

#### 電話番号 <a id="phone-numbers"></a>
*Libs to manage phone numbers.* [back to top関連](#readme) 

* [NKVPhonePicker](https://github.com/NikKovIos/NKVPhonePicker) - 国コード選択を簡易化するUITextFieldのサブクラス
* [PhoneNumberKit](https://github.com/marmelroy/PhoneNumberKit) - 国際電話番号のパース、フォーマットおよびバリデーションを支援するフレームワーク。Googleのlibphonenumberをインスピレーションに。

### バージョン管理 <a id="version-manager"></a>
[back to top関連](#readme) 

* [AppVersionMonitor](https://github.com/eure/AppVersionMonitor) - iOSアプリのバージョンを簡単にモニタリング
* [Siren](https://github.com/ArtSabintsev/Siren) - ユーザーに新しいバージョンのアプリが利用可能であることを通知し、アップグレードを促す
* [Version](https://github.com/mrackwitz/Version) - バージョンを表し、意味的なバージョンを比較する
* [Version Tracker Swift](https://github.com/tbaranes/VersionTrackerSwift) - iOS、OS X、tvOSアプリ向けのバージョン追跡ツール

### 動画 <a id="video"></a>
[back to top関連](#readme) 

* [BMPlayer](https://github.com/BrikerMan/BMPlayer) - AVPlayerをベースにしたiOS向けビデオプレイヤー。横並びおよび縦並び画面に対応し、スライドで音量、明るさ、再生位置を調整可能
* [Cabbage](https://github.com/VideoFlint/Cabbage) - AVFoundationに基づいたビデオ編集フレームワーク
* [Kitsunebi](https://github.com/noppefoxwolf/Kitsunebi) - OpenGLESを使用したオーバーレイアルファチャンネルのビデオアニメーションプレイヤービュー
* [MMPlayerView](https://github.com/MillmanY/MMPlayerView) - ビューにカスタムAVPlayerLayerを適用し、YouTubeやFacebookのような効果の良いトランジションプレイヤー
* [MobilePlayer](https://github.com/sahin/mobileplayer-ios) - iOS向けの強力で完全にカスタマイズ可能なメディアプレイヤー
* [NextLevelSessionExporter](https://github.com/NextLevel/NextLevelSessionExporter) - メディアのエクスポートおよびトランスコード
* [Player](https://github.com/piemonte/Player) - iOS用ビデオプレイヤー、メディアの再生とストリーミングに簡単なドロップインコンポーネント
* [PlayerView](https://github.com/davidlondono/PlayerView) - UIViewを使用した簡単なビデオプレイヤー。再生速度の管理、スクリーンショット、プレイヤーステートのコールバック・デリゲートをサポート
* [PryntTrimmerView](https://github.com/HHK1/PryntTrimmerView) - ビデオの切り取りとカット
* [SwiftFFmpeg](https://github.com/sunlubo/SwiftFFmpeg) - FFmpeg C APIのラッパー
* [SwiftVideoBackground](https://github.com/dingwilson/SwiftVideoBackground) - ビデオ背景を実装するための簡単なUIViewのサブクラス
* [Swifty360Player](https://github.com/abdullahselek/Swifty360Player) - AVPlayerからストリーミングするiOS用360度ビデオプレイヤー
* [YiVideoEditor](https://github.com/coderyi/YiVideoEditor) - ビデオに回転、カット、レイヤー（ウォーターマーク）を追加し、音声（ミュージック）も追加できるライブラリ

## サーバーレス <a id="serverless"></a>

* [Azure Functions for Swift](https://github.com/SalehAlbuga/azure-functions-swift) :penguin: - Azure Functions用のSwift Worker。


### 貢献 <a id="contributing"></a>

最初に[貢献ガイドライン](https://github.com/matteocrippa/awesome-swift/blob/d042674e19d2aa376b2ff6198fc1af73091d97d0/.github/CONTRIBUTING.md)を確認してください。保守されていない、または一覧に適さないパッケージやプロジェクトは、ファイル改善のためプルリクエストを送ってください。すべての[貢献者](https://github.com/matteocrippa/awesome-swift/graphs/contributors)に感謝します。
