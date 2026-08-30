---
title: "JStumpp/awesome-android"
description: "Androidのライブラリ、ツール、開発手段、学習資料を分類した定本スナップショット"
licenseSource: "github-JStumpp-awesome-android-readme-md"
---

# AndroidのAwesomeリスト <a id="awesome-android"></a>
[<img src="https://raw.githubusercontent.com/jstumpp/awesome-android/master/awesome-android.png">](https://github.com/jstumpp/awesome-android)

<p align="center">
  <a href="https://github.com/sindresorhus/awesome"><img alt="awesome" src="https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg" /></a>
  <a href="https://travis-ci.org/JStumpp/awesome-android"><img alt="Build Status" src="https://api.travis-ci.org/JStumpp/awesome-android.svg?branch=master" /></a>
  <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
</p>

# 概要 <a id="about"></a>
Androidの優れた[ライブラリ](#libraries)と[資料](#resources)を厳選したリストです。一般的なJavaライブラリは[awesome-java](https://github.com/akullpp/awesome-java)を参照してください。

## ❤️による支援: [Instabug](https://instabug.com/android/sdk?utm_source=toolsofthetrade&utm_medium=spon&utm_content=header)
### 利用者のリアルタイムな状況情報からAndroidアプリの状態を把握
[![instabug-github](https://user-images.githubusercontent.com/10850625/65512691-fd45f280-ded9-11e9-8921-3528b98c30a7.png)](https://instabug.com/android/sdk?utm_source=awesomeandroid&utm_medium=spon&utm_content=banner)
> InstabugはAndroid開発者とプロダクトチームがベータテスターや利用者から不具合・フィードバックを収集し、改善と高品質なリリースを加速できるよう支援します。スクリーンショット、端末情報、ネットワークログ、再現手順など、問題解決とバックログ優先順位付けに必要な情報を自動添付します。
> モバイルチームはGitHub、Jira、Slack、Zendeskなどとの統合でワークフローを高速化できます。[Awesome Androidコミュニティ向けに有料プランを15%割引します。](https://instabug.com/android/sdk/?utm_source=awesomeandroid&utm_medium=spon&utm_content=get-started)
[![](https://instabug-ga.appspot.com/UA-41982088-6/github/awesomeandroid?pixel)](https://instabug.com)


# 使い方 <a id="how-to-use"></a>
Awesome Androidはアプリに特定機能を必要とする人向けの一覧です。次の方法で利用できます。
 - Command + Fでキーワードを検索します。
 - 目次から分類をたどります。

# 目次 <a id="content"></a>
- [エミュレーター](#emulators)
- [ライブラリ](#libraries)
    - [チャート](#charts)
    - [クラウドサービス](#cloud-services)
    - [依存性注入](#dependency-injection)
    - [Androidサービス](#android-services)
    - [ゲーム開発](#game-development)
	- [セキュリティ](#security)
    - [GUI](#gui)
        - [ActionBar](#actionbar)
        - [ナビゲーション](#navigation)
        - [アニメーション](#animations)
        - [画像](#images)
        - [入力](#inputs)
        - [画像読み込み](#loading-images)
        - [メディア選択](#media-picker)
        - [動画](#video)
        - [カメラ](#camera)
        - [フィールド検証](#field-validation)
    - [JSON](#json)
    - [クラッシュ監視](#crash-monitoring)
    - [ネットワーク](#networking)
    - [ロガー](#logger)
    - [通知](#notifications)
    - [データベース](#database)
        - [ORM](#orm)
    - [REST](#rest)
    - [テスト](#testing)
    - [追跡](#tracking)
    - [地図](#maps)
    - [ユーティリティ](#utility)
    - [デバッグツール](#debugging-tools)
    - [無線](#wireless)
    - [チャットとメッセージング](#chat--messaging)
    - [カスタムダイアログ](#custom-dialog)
    - [バージョン確認](#version-checking)
    - [日付と時刻](#date--time)
    - [実行時権限](#runtime-permissions)
    - [その他](#other)
- [資料](#resources)
    - [コード例](#code-examples)
    - [ポッドキャスト](#podcasts)
    - [ほかのライブラリ一覧](#more-lists-of-libraries)
- [代替開発手段](#development-alternatives)
    - [C#](#c)
    - [HTML、CSS、JavaScript](#html-css-and-javascript)
    - [Lua](#lua)
    - [Scala](#scala)
    - [Groovy](#groovy)
    - [Kotlin](#kotlin)
    - [Flutter](#flutter)
- [パフォーマンス](#performance)
- [ほかのAwesomeリスト](#other-awesome-lists)
- [コントリビューション](#contributing)

## エミュレーター <a id="emulators"></a>
- [AndY](https://andyroid.net)
- [ARChon](https://archon-runtime.github.io)
- [BlueStacks](https://www.bluestacks.com)
- [Genymotion](https://www.genymotion.com)
- [nox](https://www.bignox.com)

## ライブラリ <a id="libraries"></a>

### チャート <a id="charts"></a>

- [AChartEngine](https://github.com/ddanny/achartengine) - チャートエンジン
- [EazeGraph](https://github.com/blackfizz/EazeGraph) - チャートおよびグラフライブラリ
- [WilliamChart](https://github.com/diogobernardino/WilliamChart) - 良好な動き機能を備えたチャートライブラリ
- [HelloCharts](https://github.com/lecho/hellocharts-android) - スケーリング、スクロール、アニメーションをサポートするチャートおよびグラフライブラリ
- [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) - ジェスチャによるスケーリングおよびドラッグをサポートするAndroid用チャートおよびグラフライブラリ
- [ArcChartView](https://github.com/imaNNeoFighT/ArcChartView) - 創造的な統計アーカイブチャートを描画
- [AnyChart](https://github.com/AnyChart/AnyChart-Android) - データ可視化ライブラリ、インタラクティブチャート

### クラウドサービス <a id="cloud-services"></a>

- [CloudRail](https://cloudrail.com) - クラウドストレージ、ソーシャルプロフィール、決済、メール、SMSおよびPOIに関する統一APIライブラリ

### データバインディング <a id="data-binding"></a>

- [Anvil](https://github.com/anvil-ui/anvil) - Reactにインスパイアされた小さなライブラリで反応型UIコンポーネントを作成。データバインディングおよびイベントリスナーのバインディングを提供し、MVVMに適している。
- [Data Binding Library](https://developer.android.com/topic/libraries/data-binding/) - Android用公式データバインディングライブラリ。宣言型レイアウトを書くことで、アプリケーションロジックとレイアウトをバインディングするためのグリースコードを最小限にできる。

### 依存性注入 <a id="dependency-injection"></a>

- [Dagger 2](https://github.com/google/dagger) - AndroidおよびJava用の高速な依存関係インジェクタ
- [Butter Knife](http://jakewharton.github.io/butterknife/) - Android用ビュー「インジェクション」ライブラリ
- [ActivityStarter](https://github.com/MarcinMoskala/ActivityStarter) - 複数の引数を指定してアクティビティを開始するためのシンプルな方法を提供するAndroidライブラリ
- [AndroidAnnotations](https://github.com/androidannotations/androidannotations) - コンパイル時に依存関係インジェクションを実行するJavaアノテーション
- [Toothpick](https://github.com/stephanenicolas/toothpick) - Java用スコープツリーベースの依存関係インジェクション(DI)ライブラリ

### Androidサービス <a id="android-services"></a>
- [Remoter](https://github.com/josesamuel/remoter) - Android Remote IPCサービスに、シンプルなJavaインターフェースを使用するAndroid AIDLの代替案
- [Service Connector](https://github.com/josesamuel/serviceconnector) - Androidサービスおよびコールバックをフィールドおよびメソッドにバインディング

### ゲーム開発 <a id="game-development"></a>

- [Libgdx](https://libgdx.badlogicgames.com/) - クロスプラットフォームゲームエンジンおよびSDK。 [Open Source](https://github.com/libGDX/libGDX)
- [Vuforia](https://www.vuforia.com/) - 拡張現実ライブラリ
- [Unity](https://unity3d.com/unity/features/multiplatform) - クロスプラットフォームゲーム開発システム
- [Rajawali](https://github.com/Rajawali/Rajawali) - Android OpenGL ES 2.0/3.0エンジン
- [Cocos2d-x](https://cocos2d-x.org/) - クロスプラットフォーム2Dゲームフレームワーク
- [JustWeEngine](https://github.com/lfkdsk/JustWeEngine) - オープンソースのAndroidネイティブゲームフレームワーク

### セキュリティ <a id="security"></a>

- [libsignal-protocol-java](https://github.com/signalapp/libsignal-protocol-java) - 同期および非同期メッセージ環境でも動作する、スライド式の前向きセキュリティプロトコル
- [Themis](https://github.com/cossacklabs/themis) - 複数言語をサポートする、典型的な暗号化スキームを簡単に使用できるフレームワーク：データの保存時、認証されたデータの交換、送信時の保護、認証など

### GUI <a id="gui"></a>

- [Pull to refresh](https://developer.android.com/reference/android/support/v4/widget/SwipeRefreshLayout) - v4サポートライブラリに含まれるスワイプリフレッシュレイアウト
- [Cardslib](https://github.com/gabrielemariotti/cardslib) - AndroidでUIカードを作成するためのライブラリ
- [AndroidStaggeredGrid](https://github.com/etsy/AndroidStaggeredGrid) - 複数列をサポートし、行のサイズが異なるグリッドビュー
- [Flow](https://github.com/square/flow) - アプリを、ある程度独立したスクリーンの集合として表現するためのライブラリ
- [SortableTableView](https://github.com/ISchwarz23/SortableTableView) - シンプルなTableViewと高度なソート可能なTableViewを提供するAndroidライブラリ。すべてのニーズに合わせたカスタマイズが可能。
- [MaterialProgressBar](https://github.com/zhanghai/MaterialProgressBar) - マテリアルデザインのプログレスバーで一貫した見た目。
- [AndroidFillableLoaders](https://github.com/JorgeCastilloPrz/AndroidFillableLoaders) - SVGパスと連動する、埋め込み可能なプログレスビュー。興味深いアプリロゴの作成にもおすすめ。
- [NexusDialog](https://github.com/dkharrat/NexusDialog) - Androidで、少ないコードでフォームを簡単にかつ迅速に作成できる。
- [Snap RecyclerView Utils](https://github.com/prashantsolanki3/Snap-RecyclerView-Utils) - アダプタを作成せずに、シングルまたは複数レイアウトのRecyclerViewを埋め込む。
- [MultiSnapRecyclerView](https://github.com/TakuSemba/MultiSnapRecyclerView) - AndroidでRecyclerViewの複数スナップを実現するライブラリ
- [SwipeableCard](https://github.com/michelelacorte/SwipeableCard) - ストリートビューのようなスワイプカードの実装!!
- [ElasticProgressBar](https://github.com/michelelacorte/ElasticProgressBar) - 美しいロードバー。
- [EntryScreenManager](https://github.com/kunall17/EntryScreenManager) - 導入/入力/体験/開始画面。
- [EasyIntro](https://github.com/meNESS/EasyIntro) - あなたのAndroidプロジェクトに、柔軟で使いやすく、すべてを一括で提供するアプリ導入ライブラリ。
- [Material-Calendar-View](https://github.com/BlackBoxVision/material-calendar-view) - API 8以降に対応するマテリアルデザインカレンダー
- [CrunchyCalendar](https://github.com/CleverPumpkin/CrunchyCalendar) - 無限スクロール、日付範囲選択、色のカスタマイズをサポートするマテリアルカレンダーウィジェット。
- [SmoothOverscrollableScrollView](https://github.com/vovaksenov99/OverscrollableScrollView) - スムーズなオーバースクロールを備えた小さなカスタムビュー。ヘッダーを追加し、スケール背景を設定できる。
- [SectionedRecyclerViewAdapter](https://github.com/luizgrp/SectionedRecyclerViewAdapter) - RecyclerViewをヘッダーおよび/またはフッター付きセクションに分割できるアダプタ
- [DragListView](https://github.com/woxblom/DragListView) - リスト、グリッド、ボード内の項目の並び替えをドラッグ＆ドロップで行う
- [Animated Expanding ListView](https://github.com/LeonardoCardoso/Animated-Expanding-ListView) - アニメーション付き展開ListViewが、リストビュー項目のコンテンツの展開または収縮時に華やかなアニメーションを提供
- [TastyToast](https://github.com/yadav-rahul/TastyToast) - アイコンと色付きのトースト
- [DotLoader](https://github.com/bhargavms/DotLoader) - ドットによるカスタマイズ可能なロードアニメーション
- [PodSlider](https://github.com/bhargavms/PodSLider) - マテリアルデザイン仕様に準拠したカスタマイズ可能なスライダー要素
- [TapTargetView](https://github.com/KeepSafe/TapTargetView) - マテリアルデザインガイドラインに基づくタップターゲットの実装（機能発見用）
- [ShowCaseView](https://github.com/mreram/ShowCaseView) - ShowcaseViewライブラリは、アプリの特定部分をユーザーに魅力的で平面的なオーバーレイで強調・紹介するためのもの
- [MaterialIntroScreen](https://github.com/TangoAgency/material-intro-screen) - マテリアルイントラオースクリーンの実装（拡張性の高いAPIを備える）
- [FloatingView](https://github.com/UFreedom/FloatingView) - FloatingViewは、アンカービューの上にターゲットビューを浮かせるための、カッコイイアニメーションを提供
- [Timecon](https://github.com/alxrm/animated-clock-icon) - 使いやすいアニメーション付き時計アイコン
- [Audiogram](https://github.com/alxrm/audiowave-progressbar) - 軽量なオーディオウェーブプログレスバー
- [Bubbles for Android](https://github.com/txusballesteros/bubbles-for-android) - フェイスブック風チャットバブルライブラリ
- [Litho (By Facebook)](https://github.com/facebook/litho) - Android上で効率的なUIを構築するための宣言型フレームワーク
- [MultiViewAdapter](https://github.com/DevAhamed/MultiViewAdapter) - Recyclerviewアダプタライブラリでコンポジブルビューを構築
- [LGSnackbar](https://github.com/loregr/LGSnackbar) - マルチアクティビティ間でも表示が続く、ネイティブAndroidのSnackbarを簡単に使いやすくカスタマイズしたラッパー
- [ShimmerLayout](https://github.com/team-supercharge/ShimmerLayout) - Androidアプリ向けのメモリ効率の高いシャイミング効果
- [CircleProgressBar](https://github.com/emre1512/CircleProgressBar) - Android用のシンプルな円形プログレスバーを作成するためのライブラリ
- [Easy-Signature-Android](https://github.com/smalam119/Easy-Signature-Android) - シンプルなUIライブラリで、プラグイン可能な署名ビューを提供
- [Flashbar](https://github.com/aritraroy/Flashbar) - 高度にカスタマイズ可能で、強力かつ使いやすいAndroid用アラートライブラリ
- [YuanaItemSettingView](https://github.com/andhikayuana/YuanaItemSettingView) - Android向けカスタマイズ可能なアイテム設定ビュー
- [Gradients](https://github.com/bakhtiyork/gradients) - 素晴らしいグラデーションを収録したキュレーションされたコレクション
- [OneAdapter](https://github.com/ironSource/OneAdapter) - 複数のモジュールとホックを備えたRecyclerViewアダプタで、使いやすさを簡略化し、誤りを防ぐ

#### ページネーション <a id="paginate"></a>
- [NoPaginate](https://github.com/NoNews/NoPaginate) - シンプルなAndroidのページネーションライブラリ

#### ActionBar <a id="actionbar"></a>
- [ActionBarSherlock](http://actionbarsherlock.com) - 古いAndroidバージョン向けのActionBar
- [FadingActionBar](https://github.com/ManuelPeinado/FadingActionBar) - 新しいPlay Musicアプリに見られるフェード効果のActionBar

#### ナビゲーション <a id="navigation"></a>
- [SlidingMenu](https://github.com/jfeinstein10/SlidingMenu) - スライドインメニューを用いたアプリ開発用のライブラリ
- [SlidingTutorial](https://github.com/Cleveroad/slidingtutorial-android) - シンプルなライブラリで、素晴らしいスライドAndroidアプリチュートリアルを作成可能
- [PagerSlidingTabStrip](https://github.com/astuetz/PagerSlidingTabStrip) - ViewPagerの各ページ間をナビゲートするインタラクティブなインジケーター
- [Page View indicator](https://github.com/JakeWharton/ViewPagerIndicator) - 水平スクロール可能なViewPagerのサポート
- [RecyclerTabLayout](https://github.com/nshmura/RecyclerTabLayout) - RecyclerViewを用いた効率的なTabLayoutライブラリ
- [MaterialDrawer](https://github.com/mikepenz/MaterialDrawer) - シンプルなマテリアルデザインナビゲーションドロップダウン
- [Debug-Artist](https://github.com/BaristaVentures/android-debug-artist) - leakcanary、scalpelなど、デバッグ用メニューを簡単に有効化
- [Floating-Navigation-View](https://github.com/andremion/Floating-Navigation-View) - アンカー付きナビゲーションビューを表示するシンプルなフローティングアクションボタン

#### アニメーション <a id="animations"></a>
- [SmoothMotion](https://github.com/abdullahalhakimi/SmoothMotion) - Jetpack Composeでのアニメーションとトランジションを簡易化するKotlinライブラリ
- [Rebound](https://github.com/facebook/rebound) - ReboundはJavaで実装されたバネの動的モデルライブラリ
- [Android View Animations](https://github.com/daimajia/AndroidViewAnimations) - かわいいビューアニメーションコレクション
- [Android-Transition](https://github.com/kaichunlin/android-transition) - ユーザーの入力に反応するビューのトランジションを簡単に作成可能
- [Android-View-Actions](https://github.com/dtx12/AndroidAnimationsActions) - ビューの複雑なアニメーションを作成を容易にする
- [Swipper](https://github.com/mdg-iitr/Swipper) - ボリューム、明るさ、シークを制御するスワイプジェスチャーを備えたAndroidライブラリ
- [Spotlight](https://github.com/TakuSemba/Spotlight) - チュートリアルやウォークスルーなどにアイテムを明るく表示するAndroidライブラドリ

#### 画像 <a id="images"></a>

- [Crescento](https://github.com/developer-shivam/crescento) - 画像ビューの下にカーブを追加して、Material Designにおける新しいスタイルを探索する。
- [android-crop](https://github.com/jdamcd/android-crop) - 画像の切り取りを行うためのライブラリプロジェクト。
- [CircularImageView](https://github.com/Pkmmte/CircularImageView) - 描画性能を最適化しつつ、円形画像を表示するためのカスタムビュー。
- [Android-Image-Filter](https://github.com/ragnraok/android-image-filter) - 画像フィルターを簡単に適用できるライブラリプロジェクト。
- [Compressor](https://github.com/zetbaitsu/Compressor) - Compressorは軽量かつ強力なAndroid画像圧縮ライブラリ。
- [ShapeImageView](https://github.com/siyamed/android-shape-imageview) - さまざまな形状で画像を表示できるライブラリ。

#### 入力 <a id="inputs"></a>

- [FloatingLabel](https://github.com/hardik-trivedi/FloatingLabel) - FloatingLabel は、EditTextの一種を作成できる機能。*GradleやMavenのサポートはなし。*
- [MaterialEditText](https://github.com/rengwuxian/MaterialEditText) - Floating Labels、1行エラーテキスト、最大/最小文字数、ヘルパーテキストおよびエラーテキストをカスタムカラーでサポート。
- [EmojiCompat](https://github.com/googlearchive/android-EmojiCompat) - アプリに表情文字を追加する。
- [MaterialSearchBar](https://github.com/mancj/MaterialSearchBar) - Android用のMaterial Design検索バー。
- [InputMask](https://github.com/RedMadRobot/input-mask-android) - パターンベースのユーザー入力フォーマッタ、パーサー、バリデータ。
- [SweetPassword](https://github.com/jesusmartinoza/Sweet-Password) - カスタムトグルボタンを許容するパスワードEditText。
- [VoiceOverlay](https://github.com/algolia/voice-overlay-android) - ユーザーの音声許可を得て、カスタマイズ可能なUIでテキストとして入力するオーバーレイ。

#### ViewPager <a id="view-pagers"></a>
- [Material Dots Indicators](https://github.com/tommybuonomo/dotsindicator) - View Pagers用の3つのマテリアルドットインディケータスタイル

#### 画像読み込み <a id="loading-images"></a>

- [Picasso](https://github.com/square/picasso) - Android用の強力な画像ダウンロードおよびキャッシュライブラリ。
- [Universal Image Loader](https://github.com/nostra13/Android-Universal-Image-Loader) - 非同期で、即座に画像の読み込みとキャッシュを実行。
- [Glide](https://github.com/bumptech/glide) - スムーズなスクロールに最適化されたAndroid用画像読み込みおよびキャッシュライブラリ。Googleが推奨。
- [Fresco](https://github.com/facebook/fresco) - Androidで画像とその使用するメモリを管理するためのライブラリ。
- [Glide Bitmap Pool](https://github.com/amitshekhariitbhu/GlideBitmapPool) - Glide Bitmap Poolは、ビットマップメモリの再利用を目的としたメモリ管理ライブラリ。
- [Coil](https://github.com/coil-kt/coil) - Kotlin Coroutinesをバックアップとして持つAndroid用画像読み込み。

#### メディア選択 <a id="media-picker"></a>

- [MediaPicker](https://github.com/alhazmy13/MediaPicker) - Androidで複数の画像、動画、音声を選択できるライブラ及。
- [Android Image Picker](https://github.com/esafirm/android-image-picker) - ギャラリーから画像や動画を選択する操作を簡単にするライブラリ。GIFやシンプルなカメラ操作もサポート

#### 動画 <a id="video"></a>

- [ijkplayer](https://github.com/Bilibili/ijkplayer) - FFmpeg n3.2をベースにしたAndroid/iOS用動画プレイヤー。MediaCodec、VideoToolboxに対応
- [Exoplayer](https://github.com/google/ExoPlayer) - 動画に関するAndroidライブラリ、ツール、サービス、または資料です。
   Supports features like Dynamic adaptive streaming over HTTP (DASH), SmoothStreaming and Common Encryption
- [VideoPlayView](https://github.com/MarcinMoskala/VideoPlayView) - カスタムAndroidビューで動画プレイヤー、再生／停止、ローダー、プレースホルダー画像を提供

#### カメラ <a id="camera"></a>

- [MagicalCamera](https://github.com/fabian7593/MagicalCamera) - ギャラリーから写真を撮影または選択するシンプルな方法。写真管理の他の機能も備えている
- [Camera](https://github.com/duanhong169/Camera) - Androidカメラを使って写真や動画を撮影。camera2 APIに基づく

#### フィールド検証 <a id="field-validation"></a>
- [Convalida](https://github.com/WellingtonCosta/convalida) - 入力フィールドのバリデーションを、シンプルかつアノテーションベースで行う方法

### JSON <a id="json"></a>

- [Gson](https://github.com/google/gson) - GsonはJavaでJSONからJavaオブジェクトをシリアライズ・デシリアライズするためのライブラリ
- [Jackson JSON Processor](https://github.com/FasterXML/jackson) - 高性能なJSONプロセッサ
- [Moshi](https://github.com/square/moshi) - AndroidおよびJava向けの現代的なJSONライブラリ
### クラッシュ監視 <a id="crash-monitoring"></a>

- [Fabric Crashlytics](https://get.fabric.io/) - 簡単なクラッシュ報告ソリューション
- [HockeyApp](https://www.hockeyapp.net/) - 配布、クラッシュ報告、フィードバック、分析
- [Splunk MINT](https://mint.splunk.com/) - 監視、クラッシュ報告、リアルタイムデータ、統計
- [Bugsnag](https://www.bugsnag.com/) - クロスプラットフォームエラーモニタリング。無料プラン。SDKおよびNDK対応。エラーレポートにはデバイス、リリース、ユーザー情報、および任意データを含む
- [Catcho](https://github.com/alhazmy13/Catcho) - もう強制終了はなし
- [Apteligent](https://www.apteligent.com/) - クロスプラットフォームクラッシュ報告／分析ソリューション。NDKログをサポート
- [Instabug](https://instabug.com/) - バグ報告、クラッシュ報告、アプリ内フィードバック

### ネットワーク <a id="networking"></a>

- [Ion](https://github.com/koush/ion) - Android向けの優れたネットワークライブラリ
- [OkHttp](https://github.com/square/okhttp) - AndroidおよびJavaアプリ向けのHTTP+SPDYクライアント
- [RoboSpice](https://github.com/stephanenicolas/robospice) - 非同期ネットワークリクエストの記述を簡単にするライブラリ
- [IceNet](https://github.com/anton46/IceNet) - Android向けの高速・シンプル・簡単なネットワーク
- [Android Volley](https://developer.android.com/training/volley/) - 公式Android HTTPライブラリ。ネットワーク処理をより簡単・速くする
- [IceSoap](https://github.com/AlexGilleran/IceSoap) - 簡単で非同期かつアノテーションベースのSOAP for Android
- [node-android](https://github.com/InstantWebP2P/node-android) - AndroidでNode.jsを実行
- [HappyDns](https://github.com/qiniu/happy-dns-android) - DNSライブラリ。ユーザーはカスタムDNSサーバー、DNSPOD HTTPDNSを使用可能。Aレコードのみ対応
- [RESTMock](https://github.com/andrzejchm/RESTMock) - AndroidのインストリメンテーションテストでAPIレスポンスをモックするためのHTTPウェブサーバー
- [Fast-Android-Networking](https://github.com/amitshekhariitbhu/Fast-Android-Networking) - 完全で高速なAndroidネットワークライブラリ。HTTP/2もサポート

### ロガー <a id="logger"></a>
- [logger](https://github.com/orhanobut/logger) - Android向けシンプルで美しく、強力なログ出力ライブラリ
- [timber](https://github.com/JakeWharton/timber) - Androidの標準Logクラスに上位のユーティリティを提供する、小さな拡張性のあるログ出力ライブラリ
- [LoggingInterceptor](https://github.com/ihsanbal/LoggingInterceptor) - OkHttpのインターセプターで、リクエストとレスポンスデータを整形してログ出力
- [Bugfender](https://github.com/bugfender/BugfenderSDK-android-sample) - ログをアップロードし、オンラインで確認可能。特にモバイル向けに開発
- [EzyLogger](https://github.com/afiqiqmal/EzyLogger) - シンプルで軽量なログ出力ライブラリ
- [Logback Android](https://github.com/tony19/logback-android) - Android向けLogbackのポート。Androidアプリ向けに高度にカスタマイズ可能なログフレームワークを提供
- [LogDog](https://log.dog) - LogDogはiOSおよびAndroid向けのリモートデバッグ・ログ出力SDKであり、WebUIを備えている。リアルタイムですべてのログとリクエストをキャプチャし、それらを中断可能にできる

### 通知 <a id="notifications"></a>
- [android-remote-notifications](https://github.com/kaiwinter/android-remote-notifications) - リモートJSONファイルから通知を取得し、アプリ内に表示
- [Android HeartBeat Fixer](https://github.com/joaopedronardari/AndroidHeartBeatFixer) - ハートビート間隔を設定し、GCMからユーザーにプッシュ通知を送信

### データベース <a id="database"></a>
- [Cupboard](https://bitbucket.org/littlerobots/cupboard) - SQLiteに直接データベースアクセスまたはContentProviderフレームワークを介して簡単にアクセス
- [DbInspector](https://github.com/infinum/android_dbinspector) - デバッグ用にアプリ内データベースの内容を簡単に確認できる方法を提供
- [SQLite Asset Helper](https://github.com/jgilfelt/android-sqlite-asset-helper) - アプリのraw assetファイルを使ってデータベースの作成とバージョン管理を管理
- [Realm](https://github.com/realm/realm-java) - SQLiteおよびORMの代替：シンプル、現代的で高速！オブジェクト指向APIとマルチプラットフォーム対応
- [Realm Asset Helper](https://github.com/eggheadgames/android-realm-asset-helper) - APKのアセットフォルダからRealmデータベースをコピー。読み取り専用のRealmデータベースのバージョン管理を効率的に処理
- [RestorableSQLiteDatabase](https://github.com/yaa110/RestorableSQLiteDatabase) - AndroidのSQLiteDatabaseを再現するためのラッパーで、復元機能を備える
- [Nitrite Database](https://github.com/dizitart/nitrite-database) - Android用のMongoDbのようなAPIを持つNoSQL埋め込みドキュメントストア

#### ORM <a id="orm"></a>

- [requery](https://github.com/requery/requery) - JavaおよびAndroid用のコンパイル時ORMとSQLクエリライブラリ
- [GreenDAO](http://greenrobot.org/greendao/) - 軽量で高速なORMソリューション
- [ORMLite](http://ormlite.com/sqlite_java_android_orm.shtml) - JDBCおよびAndroid用の軽量ORMJavaパッケージ
- [ActiveAndroid](http://www.activeandroid.com) - アクティブレコードスタイルのORM
- [Sugar ORM](http://satyan.github.io/sugar/) - Androidデータベースとのやり取りを極めて簡単にする方法
- [DBFlow](https://github.com/agrosner/DBFlow) - コンパイル時アノテーション処理を活用した高速かつ強力なORM
- [NexusData](https://github.com/dkharrat/NexusData) - Android用のオブジェクトグラフと永続性フレームワーク
- [SimpleNoSQL](https://github.com/Jearil/SimpleNoSQL) - Android用のシンプルなNoSQLクライアント。キー/バリューペアと簡単なクエリを使用するドキュメントストアとして設計されており、SQLコードの煩雑さを回避するのに役立ちます
- [RxSimpleNoSQL](https://github.com/xmartlabs/RxSimpleNoSQL) - SimpleNoSQL用の反応型拡張。Observableを使ってエンティティを操作します

### REST <a id="rest"></a>

- [Retrofit](https://square.github.io/retrofit/) - RetrofitはあなたのREST APIをJavaインターフェースに変換します
- [Spring for Android - Rest Template](https://github.com/spring-projects/spring-android) - Android用のRESTクライアント

### テスト <a id="testing"></a>

- [Robotium](https://github.com/robotiumtech/robotium) - ブラックボックスUIテスト用の自動テストフレームワーク
- [Roboletric](http://robolectric.org/) - JVM上でワークステーションでテストを実行するためのユニットテストフレームドワーク（エミュレータではなく）
- [AssertJ Android](https://github.com/square/assertj-android) - Android向けのアサートJアサーション
- [Green Coffee](https://github.com/mauriciotogneri/green-coffee) - あなたのAndroidインストルメンテーションテスト内でCucumberテストを実行できます

### 追跡 <a id="tracking"></a>

- [MobileAppTracking](https://www.tune.com/) - 複数の広告ネットワークを介してマーケティングキャンペーンを追跡
- [Mixpanel](https://mixpanel.com/) - ユーザーの行動を分析するためのアナリティクスプラットフォーム
- [Countly](https://count.ly) - Node.js、MongoDBおよびLinuxに基づくオープンソースのモバイル・ウェブアナリティクス、プッシュ通知、クラッシュレポートプラットフォーム
- [CleverTap](https://clevertap.com) - 100万件の無料イベントを提供するアナリティクスプラットフォームおよびユーザー参加度プラットフォーム

### 地図 <a id="maps"></a>

- [Google-Directions-Android](https://github.com/jd-alexander/Google-Directions-Android) - 2つの場所間の方向を計算し、GoogleマップにGoogle Directions APIを用いてルートを表示できます。
- [Android Maps Extensions](https://github.com/mg6maciej/android-maps-extensions) - Google Maps Android API v2の機能拡張。マーカークラスタリングなどを追加しています。
- [MapScaleView](https://github.com/pengrad/MapScaleView) - Google Maps Android API用のスケールバー。
- [GLMap](https://globus.software) - マルチプラットフォーム対応のオフラインベクターマップ（MapCSSスタイル）。オフライン検索およびオフラインナビゲーションが含まれています。

### ユーティリティ <a id="utility"></a>
- [Conceal SharedPreferences](https://github.com/afiqiqmal/SharedChamber) - Facebook Secure Encryptionを用いたセキュアなPreferences（設定）です。Concealと呼ばれます。
- [EventBus](http://greenrobot.github.io/EventBus/) - アプリケーションの異なる部分間の通信を簡便に実現するライブラリです。
- [Otto](https://github.com/square/otto) - Android用のEvent Bus。
- [Weak handler](https://github.com/badoo/android-weak-handler) - android.os.Handlerのメモリ安全な実装。
- [Byte Buddy](http://bytebuddy.net) - Android向けのランタイムコード生成ライブラリ。
- [Secure Preference Manager](https://github.com/prashantsolanki3/Secure-Pref-Manager) - Android用のセキュアなPreferenceマネージャー。アプリのShared Preferencesを複数の暗号化で保護します。
- [LeakCanary](https://github.com/square/leakcanary) - メモリリークが発生する際にその場で検出します。
- [Drekkar](https://github.com/coshx/drekkar) - WebViewおよびJS用のAndroidイベントバス。
- [Androl4b](https://github.com/sh4hin/Androl4b) - Androidアプリの評価に用いる仮想マシン。
- [DroidMVP](https://github.com/andrzejchm/DroidMVP) - MVPおよびパッシブビュー、プレゼンテーションモデルパターンをアプリに統合するためのAndroidライブラリ。
- [EasyDeviceInfo](https://github.com/nisrulz/easydeviceinfo) - デバイス情報を非常に簡単な方法で取得できます。
- [Shutter-Android](https://github.com/levibostian/Shutter-Android) - デバイスのカメラから写真・動画をキャプチャするか、ギャラリーアプリから写真・動画を取得することができる。実行時権限は必要ありません。
- [Validator](https://github.com/anderscheow/Validator) - TextInputLayout内のテキストを検証するためのユーティリティクラス。
- [Keyboard Visibility Event](https://github.com/viniciusmo/keyboard-visibility-event-android/) - ソフトキーボードの表示変更イベントを処理するためのDSL。
- [TimeIt](https://github.com/yashovardhan99/timeit) - Android用のストップウォッチライブラリ。アプリ内で複数のストップウォッチを開始・一時停止・表示・維持する操作を簡単に行えます。
- [Reactor](https://github.com/oky2abbas/reactor) - ReactorはAndroid用の高速かつ安全なキー・バリューライブラリです。
 
### デバッグツール <a id="debugging-tools"></a>

- [Linx](https://github.com/pedrovgs/Lynx) - デバッグビルド時にデバイス内のlogcatを表示
- [Scalpel](https://github.com/JakeWharton/scalpel) - スマートフォン上で3Dで全体の階層を表示
- [Stetho](https://github.com/facebook/stetho) - Chromeから階層とネットワークをデバッグ
- [Android Debug Database](https://github.com/amitshekhariitbhu/Android-Debug-Database) - Android Debug Databaseは、Androidアプリにおけるデータベースや共有設定のデバッグに使える強力なライブラリ
- [Android Debug Bridge - ADB](https://github.com/mzlogin/awesome-adb/blob/master/README.en.md) - Android搭載デバイスのデバッグを支援するコマンドラインツール
- [ADB Enhanced](https://github.com/ashishb/adb-enhanced) - 開発者向けのADBのコマンドラインラッパー。開発者がバージョン依存の特殊なコマンドを覚える必要がないようにする
- [Pidcat](https://github.com/JakeWharton/pidcat) - 特定のアプリパッケージのログのみを表示するカラーディスプレイのコマンドラインADBラッパー
- [AppSpector](https://appspector.com) - AndroidおよびiOSのリモートデバッグとデータ収集サービス。ネットワーク、ログ、SQLite、仮想デバイスの地理位置をデバッグ可能


### 無線 <a id="wireless"></a>

- [SmartGattLib](https://github.com/movisens/SmartGattLib) - Bluetooth SMARTデバイス（Bluetooth 4.0におけるBluetooth Low Energy）との対話の簡易化

### チャットとメッセージング <a id="chat--messaging"></a>

- [Applozic Android Chat SDK](https://github.com/AppLozic/Applozic-Android-SDK) - Androidアプリにリアルタイムチャットおよびアプリ内メッセージ機能を追加するためのチャットとメッセージングSDK
- [Qiscus SDK](https://github.com/qiscus/qiscus-sdk-android) - Qiscus SDKは軽量かつ強力なAndroidチャットライブラリ。Qiscus SDKにより、アプリにQisc及エンジンを簡単に統合し、魅力的なチャットアプリを作成できます
- [Kommunicate Live Chat SDK](https://github.com/Kommunicate-io/Kommunicate-Android-Chat-SDK) - KommunicateはAndroid向けオープンソースのライブチャットSDKを提供。Kommunicateにより、お客様サポート用にモバイル（Android、iOS）アプリおよびウェブサイトにリアルタイムライブチャットおよびアプリ内メッセージを追加できます
- [CometChat Voice, Video and Text Chat SDK with UI](https://github.com/cometchat-go/android-chat-sdk-demo) - CometChatを使用して、アプリ（およびウェブサイト）に音声、動画、テキストチャットを数分で追加。CometChatのSDKには完全なUIが含まれており、独自にUIを作成する必要がありません。さらに、リアルタイム翻訳、白板、スクリーン共有、友達同期、役割ベースのアクセス制御、クレジットの消費など、事前対応機能が備わっています
- [Build a one-on-one Android chat app using Kotlin](https://www.cometchat.com/tutorials/build-one-on-one-chat-in-your-android-app-using-kotlin/) - CometChat Proを使用して、Kotlinで数分で1対1のAndroidチャットアプリを構築。このチュートリアルではログイン、連絡先リストの取得、ユーザーの存在状態表示、メッセージの送受信などの機能について説明しています
- [Stream Chat](https://getstream.io/tutorials/android-chat/) - [Stream](https://getstream.io/chat/)を基盤としたリアルタイムチャット用の包括的なSDKおよびコンポーネント
- [Add Push Notifications to Your Android Chat App Using Kotlin](https://www.cometchat.com/tutorials/android-chat-push-notifications/) - CometChat ProとFirebase Cloud Messaging（FCM）を活用して、Androidチャットアプリにプッシュ通知を追加

#### カスタムダイアログ <a id="custom-dialog"></a>

- [MediaRecorderDialog](https://github.com/alhazmy13/MediaRecorderDialog) - 自作ダイアログで音声を録音し、保存し、端末上で再生
- [HijriDatePicker](https://github.com/alhazmy13/HijriDatePicker) - グーグルのマテリアルデザイン原則に基づいたヒジリ（イスラム暦）日付選択画面を提供
- [Noty](https://github.com/emre1512/Noty) - アニメーション付きアラートやダイアログ、警告を生成するシンプルなライブラリ

### バージョン確認 <a id="version-checking"></a>

 - [AppUpdater](https://github.com/javiersantos/AppUpdater) - アマゾンやFDroidでのチェックをサポートする、包括的かつ機能豊かなライブラリ
 - [Gandalf](https://github.com/btkelly/gandalf) - 包括的な機能と「コンパニオン」iOSソリューションを提供
 - [Siren](https://github.com/eggheadgames/Siren) - 同名のポピュラーiOSライブラリを模倣した機能セット。AmazonおよびPlayに対応
 - [Fit](https://github.com/KeithYokoma/Fit) - バージョンチェックコールバックフレームワーク（UIなし）

### 日付と時刻 <a id="date--time"></a>

- [ThreeTen Android Backport](https://github.com/JakeWharton/ThreeTenABP) - Android用のJSR-310バックポートのアダプテーション
- [Joda-Time Android](https://github.com/dlew/joda-time-android) - Joda-TimeライブラリにAndroid向けの特殊化を施したもの
- [True Time](https://github.com/instacart/truetime-android) - Android用NTP時間ライブラリ。デバイス時計の変更にかかわらず、正確な現在時刻を取得可能

### 実行時権限 <a id="runtime-permissions"></a>

- [Permission Dispatcher](https://github.com/permissions-dispatcher/PermissionsDispatcher) - 実行時権限を扱うシンプルなアノテーションベースAPI
- [RxPermissions](https://github.com/tbruyelle/RxPermissions) - RxJavaを用いたAndroid実行時権限
- [NoPermission](https://github.com/NoNews/NoPermission) - シンプルなAndroid用権限リクエストライブラリ。1つのクラスのみを構成。
- [Ask-Permission](https://github.com/Kishanjvaghela/Ask-Permission) - シンプルな実行時権限マネージャー
- [Gota](https://github.com/alhazmy13/Gota) - Android権限を簡易化
- [EasyPermissions](https://github.com/googlesamples/easypermissions) - EasyPermissionsは、Android M以降のターゲットで基本的なシステム権限の論理を簡易化するためのラッパーライブラリ。

### 決済 <a id="payments"></a>

- [Square In-App Payments for Android](https://developer.squareup.com/docs/in-app-payments-sdk/build-on-android) - Digital Walletおよび保存されたカードをサポートし、迅速な決済を可能にするSquare決済をモバイルアプリに統合

### その他 <a id="other"></a>

- [Licensee](https://github.com/cashapp/licensee) - Licenseeは、Gradleプラグインであり、依存関係グラフのライセンスが期待するものと一致しているかを検証し、一致しない場合はビルドを失敗させる！
- [Android Support library](https://developer.android.com/topic/libraries/support-library/) - Androidサポートライブラリパッケージは、AndroidフレームワークAPIのバックワード互換バージョンを提供するコードライブラリのセット。
- [Google Play Services](https://developers.google.com/android/guides/overview) - Googleサービス（アカウント同期、Google+（共有、シングルサインオン）、Googleマップ、位置API、Googleプレイゲーム、クラウドメッセージング、Androidデバイスマネージャーなど）にアクセスするためのライブラリ。
- [Tape](https://github.com/square/tape) - AndroidおよびJava向けの高速でトランザクション型、ファイルベースのFIFO。
- [Guava: Google Core Libraries for Java](https://github.com/google/guava) - コレクション、キャッシュ、プリミティブサポート、並列処理ライブラリ、共通アノテーション、文字列処理、I/Oなど。
- [Android Scripting](https://github.com/damonkohler/sl4a) - Android上でスクリプト言語を実行できるようにする。
- [Android Priority Job Queue](https://github.com/yigit/android-priority-jobqueue) - ジョブキューの実装により、バックグラウンドで実行されるジョブ（タスク）を簡単にスケジュールでき、UXおよびアプリの安定性を向上。
- [RateMeMaybe](https://github.com/nspo/RateMeMaybe) - ユーザーにアプリの評価にPlayストアを開くことを尋ねる。
- [Easy Rating Dialog](https://github.com/fernandodev/easy-rating-dialog) - Libは、アプリ評価用のアラートダイアログをシンプルに表示する方法を提供。
- [ZXing Android-Integration](https://github.com/zxing/zxing) - バーコードスキャナーとのIntentによる統合。
- [Gradle Retrolambda Plugin](https://github.com/evant/gradle-retrolambda) - Java 8 ラムダ関数を Android で使用！
- [RxJava](https://github.com/ReactiveX/RxJava) - RxJava – JVM 用の反応型拡張 – Java VM での非同期およびイベントベースのプログラムを、可観測シーケンスを使って構成するためのライブラリ。
- [RxAndroid](https://github.com/ReactiveX/RxAndroid) - 最小限の RxJava バインディングを追加し、反応型 Android Java コードの簡単な記述を可能にする。
- [RxBinding](https://github.com/JakeWharton/RxBinding) - RxBinding – Android プラットフォームおよびサポートライブラリの UI ウィジェットに対する RxJava バインディング API。
- [Caffeine](https://github.com/percolate/caffeine) - Android 開発を早めるために役立つユーティリティクラスのコレクション。
- [AboutLibraries](https://github.com/mikepenz/AboutLibraries) - 使用されたライブラリの一覧を表示する「このアプリについて」セクションを自動生成。
- [AudioPlayerView](https://github.com/HugoMatilla/AudioPlayerView) - URL からオーディオを読み込み、基本的な再生ツールを備えたビュー。
- [andle](https://github.com/Jintin/andle) - 依存関係、SDK、またはビルドツールバージョンの同期を支援するコマンドラインツール。
- [Typography](https://github.com/workarounds/typography) - Android でビューにカスタムフォントを使用する際の簡単なライブラリ。
- [Calligraphy](https://github.com/chrisjenx/Calligraphy) - Android でのカスタムフォントの使用方法。
- [transai](https://github.com/Jintin/transai) - ローカライゼーション文字ファイルの管理を支援するコマンドラインツール。
- [Android-Link-Preview](https://github.com/LeonardoCardoso/Android-Link-Preview) - URL からプレビューを作成し、タイトル、関連テキスト、画像などの情報を取得。
- [Sensey](https://github.com/nisrulz/sensey) - ジェスチャの検知を簡単に行う。
- [UserAwareVideoView](https://github.com/kevalpatel2106/UserAwareVideoView) - ユーザーがデバイスの画面を確認していない場合、自動的に動画再生を一時停止するカスタム動画ビュー。
- [Flexbox Layout](https://github.com/google/flexbox-layout) - FlexboxLayout は、Android に CSS Flexible Box Layout Module の機能を提供するライブラリ。
- [Agile Boiler Plate](https://github.com/xresco/Android-Agile-Boiler-Plate) - ボイラープレートは MVP アーキテクチャに基づき、Dagger2 を使用した依存性注入設計パターンで構成されている。
- [Gradle buildSrcVersions](https://github.com/jmfayard/buildSrcVersions) - Kotlin DSL による依存関係管理の簡易化。
- [Teller](https://github.com/levibostian/Teller-Android/) - Teller は、アプリのキャッシュデータのダウンロード、保存、読み取りを支援。ユーザーのデータを常に最新に保ち、不快なロード画面を削除！

## 資料 <a id="resources"></a>

- [Programming Community Curated Resources for Learning Android Development](https://hackr.io/tutorials/learn-android-development) - プログラミングコミュニティが提出・投票した Android チュートリアルとコース。
- [Vogella Tutorials](https://www.vogella.com/tutorials/android.html) - Lars Vogel による非常に優れたチュートリアル。
- [Android Design in Action Video series](https://www.youtube.com/playlist?list=PLWz5rJ2EKKc8j2B95zGMb8muZvrIy-wcF) - GoogleのAndroid Design Teamが公開した動画シリーズ
- [Android DevBytes Video Series](https://www.youtube.com/playlist?list=PLWz5rJ2EKKc_XOgcRukSoKKjewFJZrKV0) - Android Design in Actionシリーズの技術的な対応作品
- [Developing for Android](https://medium.com/google-developers/developing-for-android-introduction-5345b451567c) - Googlerのチェット・ハサエらが執筆した記事シリーズ。最もよく問われる質問に答えるもの：「Androidアプリ開発時に意識すべき重要なルールは何か？」
- [Android Hive Tutorials](https://www.androidhive.info) - 初心者向けの非常に良いチュートリアル
- [Android Weekly](https://androidweekly.net) - Androidに関する週刊ニュースレター
- [Android Asset Studio](http://romannurik.github.io/AndroidAssetStudio/) - アイコンやその他のアセットを生成するツール
- [Android Action Bar Style Generator](http://jgilfelt.github.io/android-actionbarstylegenerator/) - .
- [Device Art Generator](https://developer.android.com/distribute/marketing-tools/device-art-generator) - アプリのスクリーンショットを実際のデバイスのアートワークに囲む
- [Android UI design resources](https://androiduiux.com/free-design-resources/) - UI/UX分野のGoogle開発者エキスパートが提供する多様なデザインリソース
- [Pencil Project](https://pencil.evolus.vn/) - オープンソースのプロトタイピングソフトウェア
- [How to Make Android Apps](https://www.youtube.com/playlist?list=PLGLfVvz_LVvSPjWpLPFEfOCbezi6vATIh) - デレク・バナスによる動画チュートリアル
- [android-blogs](https://github.com/vbauer/android-blogs) - Androidに関するブログ一覧
- [Future Studio](https://futurestud.io/tutorials/tag/android) - Retrofit、Picasso、GlideおよびGsonに関する広範なAndroidチュートリアル
- [Android Tips & Tricks](https://github.com/nisrulz/android-tips-tricks) - Android開発におけるヒントとコツをまとめたチェックシート
- [Associate Android Developer Certification Materials](https://github.com/Amejia481/Associate-Android-Developer-Certification) - テスト準備に必要な資料のコレクション
- [Google Developers Training](https://developer.android.com/courses/) - Google開発者公式トレーニングページには、初心者から経験者までに役立つ学習リソースのリストが掲載されている
- [Mindorks](https://mindorks.com/) - 完全で満足できるAndroid開発者になる
- [AndroidVille](https://ayusch.com/) - より良いAndroidエンジニアになる。Android開発に特化したウェブサイトで、RxJava、Android Zygoteなど高度なトピックをカバー
- [Android Stack Weekly](https://blog.canopas.com/tagged/canopas-android-weekly) - Android宇宙の新しい開発やアップデートに関する週刊ニュースレター

### コード例 <a id="code-examples"></a>
- [Android Architecture Blueprints](https://github.com/android/architecture-samples) - Androidアーキテクチャブルーインプトプロジェクトは、よくあるAndroid問題を解決または回避するための戦略を示している
- [Kotlin MVVM example](https://github.com/emedinaa/kotlin-mvvm) - MVVM（Model View ViewModel）パターンについての例
- [Kotlin VIPER example](https://github.com/OmiSoftNet/AndroidViperTemplate) - VIPER（View Interactor Presenter Entity Router）パターンについての例
- [Complete-Google-Map-API-Tutorial](https://github.com/mohammadima3oud/Complete-Google-Map-API-Tutorial) - AndroidでGoogle Map APIを使用する方法を、基礎から応用まで完全な例付きで学ぶ
- [Android Modular Architecture](https://github.com/VMadalin/kotlin-sample-app) - Kotlinで記述された、モジュール化・クリーン・スケーラブル・テスト可能アーキテクチャを採用したAndroidサンプルアプリ。Jetpackのベストプラクティスに従っている

### ポッドキャスト <a id="podcasts"></a>
- [Fragmented](https://fragmentedpodcast.com/) - Android開発者向けのポッドキャスト。Donn FelkerとKaushik Gopalが、良いソフトウェアの開発やより良いAndroid開発者になるための話題を語る
- [Android Developers Backstage](http://androidbackstage.blogspot.com/) - Android開発者による、Android開発者向けのポッドキャスト。GoogleのAndroidエンジニアチームの開発者たちが主催し、Android開発者に興味深いテーマを深く掘り下げ、GoogleのAndroidチームエンジニアとのインタビューを実施
- [Android Dialogs](https://www.youtube.com/channel/UCMEmNnHT69aZuaOrE-dF6ug/feed) - Androidコミュニティのメンバーと短い会話を行うビデオベースのポッドキャスト
- [The Context](https://github.com/artem-zinnatullin/TheContext-Podcast) - Hannes Dorfmann、Artem Zinnatullinと素晴らしいゲストたちによるAndroid開発に関するポッドキャスト
- [Talking Kotlin](https://talkingkotlin.com/) - Kotlinとその他の話題に関するポッドキャスト
- [Android Authority](https://www.androidauthority.com/podcast/) - Adam Doud、Joe Hindy、Jonathan FeistによるAndroid Authorityチームが運営する週刊Androidポッドキャスト
- [Android Central](https://www.androidcentral.com/podcast) - Android Centralチームが運営する週刊Androidポッドキャスト

### ほかのライブラリ一覧 <a id="more-lists-of-libraries"></a>
- [The Android Arsenal](https://android-arsenal.com/) - Android用のライブラリの大きなリスト
- [Square libraries](https://square.github.io/) - Squareによる複数の高品質ライブラリ
- [Awesome Android @LibHunt](https://android.libhunt.com) - あなたのAndroid用のツールボックス
- [Android Store](https://mindorks.com/android/store) - Androidのライブラリ、プロジェクト、ツールを検索

## 代替開発手段 <a id="development-alternatives"></a>

現時点ではAndroid APIを使ったネイティブアプリ開発を推奨します。Scalaはコードを簡潔にできますがメソッド数が増え、Multidexが必要です。KotlinはJavaプロジェクトと100%相互運用でき、**Multidexなし**で利用できる現代的な言語です。一方、クロスプラットフォーム開発などの代替手段が適する用途もあります。

### C# <a id="c"></a>

- [Xamarin](https://visualstudio.microsoft.com/xamarin/) - C#でネイティブなiOS、Android、Mac、Windowsアプリを開発できるフレームワーク

### HTML、CSS、JavaScript <a id="html-css-and-javascript"></a>

- [PhoneGap](https://phonegap.com) - Adobeが開発したオープンソースフレームワーク。HTML、CSS、JavaScriptを使用してクロスプラットフォームのモバイルアプリを作成可能
- [Titanium](http://www.appcelerator.com/mobile-app-development-products/) - JavaScriptを使用して「ネイティブ」クロスプラットオームアプリを作成できるオープンソースフレームワーク
- [NativeScript](https://www.nativescript.org/) - JavaScriptから1つのコードベースでネイティブiOSおよびAndroidアプリを構築できるオープンソースフレームワーク
- [React Native](https://github.com/facebook/react-native) - Facebookが開発したReactでネイティブアプリを構築できるフレームワーク
- [Ionic Framework](https://ionicframework.com) - モバイル最適化されたHTML、CSS、JSとAngularJSを使用してハイブリッドアプリを構築できるフレームワーク
- [Apache Cordova](https://github.com/apache/cordova-android) - コルダヴァベースのアプリケーションは、本質的にウェブ技術（HTML、CSSおよびJavaScript）で書かれたアプリケーションです。
- [Capacitor](https://github.com/ionic-team/capacitor) - iOS、Android、ウェブ向けのクロスプラットフォームネイティブプログレッシブウェブアプリの開発。非常に有望なコルダヴァの代替ツールです。

### Lua <a id="lua"></a>
- [Corona SDK](https://coronalabs.com/product/) - ネイティブなiOSおよびAndroidアプリ（特にゲーム）を開発できるフレームワーク

### Scala <a id="scala"></a>
- [Scaloid](https://github.com/pocorall/scaloid) - スケールのScalaで行うAndroid開発をより簡単にするためのライブラリです。
- [Macroid](https://github.com/47deg/macroid) - Android向けのモジュラリーファンクショナルUI言語です。

### Groovy <a id="groovy"></a>
- [Groovy on Android](http://melix.github.io/blog/2014/06/grooid.html) - GroovyによるAndroidの導入ガイド。
- [Groovy Language Support for Android](https://github.com/groovy/groovy-android-gradle-plugin) - Android向けGroovyのコンパイル用Gradleプラグイン。
- [SwissKnife](https://github.com/Arasthel/SwissKnife) - Android向けにアノテーションを使用してビューインジェクションとスレッド管理を行うマルチ用途Groovyライブラリ。

### Kotlin <a id="kotlin"></a>
- [Anko](https://github.com/Kotlin/anko) - JetBrainsがKotlinで書いたAndroid向けDSL。
- [Kotterknife](https://github.com/JakeWharton/kotterknife) - ButterKnifeに基づいたKotlinによるAndroidビューインジェクション。
- [Android Kotlin Samples](https://github.com/irontec/android-kotlin-samples) - Kotlinで書かれた基本的なAndroidコードサンプル。
- [Kotlin coding puzzles](https://github.com/igorwojda/kotlin-coding-puzzle) - 白板コーディングおよび問題解決スキルを向上させるためのプログラミングチャレンジセット。
- [KAndroid](https://github.com/pawegio/KAndroid) - Android SDKにおけるボイラープレートコードを削減するための軽量ライブラリ。
- [RxKotlin/Pocket](https://github.com/RxKotlin/Pocket) - このアプリはユーザーがリンクを簡単に保存でき、週ごとにEvernoteへエクスポート可能です。
- [Android Clean Architecture - Kotlin](https://github.com/patrickyin/clean-architecture-android-kotlin) - Uncle BobのクリーンアーキテクチャをKotlinと最新のAndroid技術で使用したベースプロジェクト。
- [Koin](https://insert-koin.io/) - Kotlin向けの軽量な依存関係注入フレームワーク。
- [AppDimens](https://github.com/bodenberg/appdimens) - どんな画面でもスマートにレスポンシブな次元（FX、DY、DP、SP、対数）を提供。

### Flutter <a id="flutter"></a>
- [Flutter](https://flutter.dev/) - AndroidおよびiOS向けの高品質ネイティブインターフェースを短時間で作成できるGoogleのモバイルアプリSDK

# パフォーマンス <a id="performance"></a>
- [awesome-android-performance](https://github.com/Juude/awesome-android-performance) - パフォーマンス最適化に役立つ素晴らしいAndroidチュートリアル、動画、ツールの一覧。
- [Booster](https://github.com/didi/booster) - BoosterはAndroidアプリ向けの最適化ツールキットです。

# ほかのAwesomeリスト <a id="other-awesome-lists"></a>
ほかの優れたAwesomeリストは[awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)で確認できます。

## コントリビューション <a id="contributing"></a>

コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/JStumpp/awesome-android/blob/c9598e7541686b3705df7cc177a845d6093685c2/contributing.md)を確認してください。
