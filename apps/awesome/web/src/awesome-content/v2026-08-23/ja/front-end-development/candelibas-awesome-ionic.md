---
title: "Awesome Ionic"
description: "Ionicを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-candelibas-awesome-ionic-readme-md"
---

# Awesome Ionic

Ionicを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

- [現在のIonicバージョン](#current-ionic-version)
- [公式資料](#official-resources)
- [Capacitor](#capacitor)
- [Ionicの基礎](#ionic-fundamentals)
- [テーマ設定](#theming)
- [コンポーネントチュートリアル](#components-tutorials)
- [認証](#authentication)
- [単体テスト](#unit-testing)
- [Ionic Native／Cordovaプラグイン](#ionic-native--cordova-plugins)
- [Capgo Capacitorプラグイン](#capgo-capacitor-plugins)
- [決済ゲートウェイ統合](#payment-gateway-integrations)
- [Backend as a Service](#backend-as-a-service)
- [i18nとl10n](#i18n--l10n)
- [ツール](#tools)
- [動画チュートリアル](#video-tutorials)
- [Webアプリの変換](#convert-a-web-app)
- [書籍](#books)
- [ボイラープレート／デモアプリ](#boilerplatedemo-apps)
- [コンポーネント](#components)
  - [ライブラリ](#libraries)
  - [アニメーション](#animations)
  - [UIライブラリ](#ui-library)
  - [メニュー、タブ](#menu-tabs)
  - [フォーム／入力](#form--input)
  - [入力 — 日付／カレンダー](#input---datecalendar)
  - [リスト／テーブル](#liststable)
  - [画像](#images)
  - [チャート／図](#chartsdiagram)
  - [動画／音声](#videoaudio)
  - [キーボード](#keyboards)
  - [アイコン](#icons)
  - [ダイアログ](#dialog)
  - [フレーム](#frames)
- [オープンソースプロジェクト](#open-source-projects)
- [Ionicで構築されたアプリ](#apps-built-with-ionic)
- [コミュニティ](#community)
- [フリーランサー](#freelancers)
- [コントリビューション](#contribute)
- [作者](#author)

## 現在のIonicバージョン <a id="current-ionic-version"></a>
[![npm version](https://img.shields.io/npm/v/@ionic/angular)](https://www.npmjs.com/package/@ionic/angular)


## 公式資料 <a id="official-resources"></a>
- [Site](http://ionicframework.com/)
- [Blog](http://blog.ionic.io/)
- [Documentation](https://ionicframework.com/docs)
- [Getting Started Guide](https://ionicframework.com/docs/developing/starting)
- [Ionic Native](https://github.com/driftyco/ionic-native/)
- [Community Forum](http://forum.ionicframework.com/)
- [Ionic YouTube Channel](https://www.youtube.com/channel/UChYheBnVeCfhCmqZfCUdJQw)
- [Showcase](http://showcase.ionicframework.com/)
- [GitHub Repo](https://github.com/ionic-team/ionic-framework)
- [Community](https://ionicframework.com/community) - 公式なコミュニティハブ

## Capacitor <a id="capacitor"></a>

IonicアプリはCapacitorをネイティブランタイムとして利用できます。

- [Website](https://capacitorjs.com/) - プロジェクトのホームページ
- [Documentation](https://capacitorjs.com/docs) - 公式ドキュメント
- [CLI](https://capacitorjs.com/docs/cli) - コマンドラインリファレンス
- [Plugins](https://capacitorjs.com/docs/plugins) - 公式プラグインAPI
- [Blog](https://capacitorjs.com/blog) - 公式ブログ記事
- [Forum](https://forum.ionicframework.com/c/capacitor) - IonicフォーラムのCapacitorカテゴリ
- [Repository](https://github.com/ionic-team/capacitor) - コアランタイムソースコード
- [Awesome Capacitor](https://github.com/riderx/awesome-capacitor) - 厳選されたCapacitorプラグイン、ツール、ガイド

## Ionicの基礎 <a id="ionic-fundamentals"></a>
- [Beginners Guide to Getting Started with Ionic](http://www.joshmorony.com/beginners-guide-to-getting-started-with-ionic-2/)
- [Ionic First Look Series: Your First Ionic App Explained](http://www.joshmorony.com/ionic-2-first-look-series-your-first-ionic-2-app-explained/)
- [How to Convert an Ionic 1 Application to Ionic](http://www.joshmorony.com/how-to-convert-an-ionic-1-application-to-ionic-2/)
- [A Simple Guide to Navigation in Ionic](http://www.joshmorony.com/a-simple-guide-to-navigation-in-ionic-2/)
- [10 Minutes with Ionic: Adding Pages and Navigation](http://blog.ionic.io/10-minutes-with-ionic-2-adding-pages-and-navigation/)
- [How to Create a Data Model in Ionic](http://www.joshmorony.com/how-to-create-a-data-model-in-ionic-2/)
- [Ionic and External Libraries](http://mhartington.io/post/ionic2-external-libraries/)
- [Understanding Zones and Change Detection in Ionic & Angular 2](http://www.joshmorony.com/understanding-zones-and-change-detection-in-ionic-2-angular-2/)
- [Custom Pipes in Ionic](https://www.joshmorony.com/custom-pipes-in-ionic-2/)
- [How to Manipulate Data in Ionic: Part 1](http://www.joshmorony.com/how-to-manipulate-data-in-ionic-2-part-1/)
- [How to Manipulate Data in Ionic: Part 2](http://www.joshmorony.com/how-to-manipulate-data-in-ionic-2-part-2/)
- [Filtering, Mapping, and Reducing Arrays in Ionic](https://www.youtube.com/watch?v=A-4CLa05tp0)
- [Your First Ionic App: Angular](https://ionicframework.com/docs/angular/your-first-app)
- [Your First Ionic App: React](https://ionicframework.com/docs/react/your-first-app)
- [Your First Ionic App: Vue](https://ionicframework.com/docs/vue/your-first-app)
- [Read SMS in Ionic 4 apps](https://enappd.com/blog/automatically-read-sms-in-ionic-4-apps/42)
- [Geolocation with Capacitor](https://capacitorjs.com/docs/apis/geolocation)

- [Push Notifications with Firebase in Ionic](https://capacitorjs.com/docs/guides/push-notifications-firebase)
- [The Push Notifications Guide](https://capgo.app/blog/ionic-capacitor-push-notifications-firebase/) - iOSおよびAndroidでのFirebaseによるプッシュ通知の統合
- [Appcenter migration](https://capgo.app/blog/appcenter-migration) - Microsoft App CenterからCapgoへの移行を数ステップで行う
- [Update app seamlessly](https://capgo.app/blog/update-your-capacitor-apps-seamlessly-using-capacitor-updater) - Ionicアプリにおけるライブアップデートの設定
- [Ionic live update services](https://capgo.app/blog/best-ionic-live-update-service/) - Ionicアプリのライブアップデートオプションを比較
- [Automatic build and release](https://capgo.app/blog/automatic-build-and-release-with-github-actions) - GitHub ActionsでCI/CDパイプラインを作成
- [Google Vision in Ionic 4 apps](https://enappd.com/blog/implement-google-vision-in-ionic-4/43)
- [Add headless ButterCMS to your Ionic App by Mike Hartington](https://buttercms.com/blog/integrating-buttercms-with-ionic)


## テーマ設定 <a id="theming"></a>
- [A Guide to Styling an Ionic Application](http://www.joshmorony.com/a-guide-to-styling-an-ionic-2-application/)

- [A List of Common CSS Utility Attributes in Ionic](http://www.joshmorony.com/a-list-of-common-css-utility-attributes-in-ionic-2/)
- [5 Animation Packages You Can Immediately Use Inside Your Ionic App](https://devdactic.com/5-animation-packages-ionic/)

## コンポーネントチュートリアル <a id="components-tutorials"></a>
- [How to Create a Sliding Delete Button for Lists](http://www.joshmorony.com/ionic-2-how-to-create-a-sliding-delete-button-for-lists/)
- [Creating a Sliding Introduction Component in Ionic](http://www.joshmorony.com/creating-a-sliding-introduction-component-in-ionic-2/)
- [How to Create a Custom Loading Component in Ionic](http://www.joshmorony.com/how-to-create-a-custom-loading-component-in-ionic-2/)
- [Build a Simple Progress Bar Component in Ionic](http://www.joshmorony.com/build-a-simple-progress-bar-component-in-ionic-2/)
- [Create a News Feed with 360-Degree Photo Viewing in Ionic](http://www.joshmorony.com/create-a-news-feed-with-360-degree-photo-viewing-in-ionic-2/)
- [Build a Tap to Reveal Component in Ionic](https://www.joshmorony.com/build-a-tap-to-reveal-component-in-ionic-2/)

## 認証 <a id="authentication"></a>
- [Twitter Login in Ionic 4 App using Firebase](https://github.com/enappd/Ionic-4-Twitter-auth)
- [Facebook Login in Ionic with Firebase](https://www.joshmorony.com/native-web-facebook-authentication-with-firebase-in-ionic/)
- [Google Login in Ionic 4 App using Firebase](https://enappd.com/blog/google-login-in-ionic-4-apps-using-firebase/39)
- [Firebase Anonymous Authentication](https://firebase.google.com/docs/auth/web/anonymous-auth)
- [Firebase Email/Password Authentication](https://firebase.google.com/docs/auth/web/password-auth)
- [Add Touch ID Authentication To An Ionic Mobile App](https://www.thepolyglotdeveloper.com/2016/03/add-touch-id-authentication-ionic-2-mobile-app/)
- [Using An Oauth 2.0 Service Within An Ionic Mobile App](https://www.thepolyglotdeveloper.com/2016/01/using-an-oauth-2-0-service-within-an-ionic-2-mobile-app/)
- [Ionic and Auth0](http://blog.ionic.io/ionic-2-and-auth0/)
- [Authenticate Ionic with WordPress](https://auth0.com/authenticate/ionic2/wordpress)
- [Social Login](https://capgo.app/blog/capacitor-social-login-release/) - Google、Apple、Facebookによるネイティブフローでのサインイン
- [OAuth2 in 5 steps](https://capgo.app/blog/5-steps-to-implement-oauth2-in-capacitor-apps/) - iOS、Android、ウェブでOAuth 2.0とPKCEを実装
- [Secure token storage](https://capgo.app/blog/secure-token-storage-best-practices-for-mobile-developers/) - デバイス上での認証情報とセッショントークンを安全に保管

## 単体テスト <a id="unit-testing"></a>
- [How to Unit Test an Ionic Application](http://www.joshmorony.com/how-to-unit-test-an-ionic-2-application/)
- [Test Driven Development in Ionic: An Introduction to TDD](https://www.joshmorony.com/test-driven-development-in-ionic-2-an-introduction-to-tdd/)

## Ionic Native／Cordovaプラグイン <a id="ionic-native--cordova-plugins"></a>
- [Playing music in Ionic 4 apps](https://enappd.com/blog/spotify-like-music-in-ionic-4-apps/48)
- [How to implement health plugin - Pedometer in Ionic 4](https://enappd.com/blog/best-fitness-plugins-for-ionic-4-how-to-use-pedometer/15)
- [Using Cordova Plugins in Ionic with Ionic Native](http://www.joshmorony.com/using-cordova-plugins-in-ionic-2-with-ionic-native/)
- [10 Minutes with Ionic: Using the Camera with Ionic Native](http://blog.ionic.io/10-minutes-with-ionic-2-using-the-camera-with-ionic-native/)
- [Determine Network Availability](https://www.thepolyglotdeveloper.com/2016/01/determine-network-availability-in-an-ionic-2-mobile-app/)
- [Monetize With Google Admob In An Ionic Mobile App](https://www.thepolyglotdeveloper.com/2016/02/monetize-google-admob-ionic-2-mobile-app/)
- [Show Native Toast Notifications In An Ionic Mobile App](https://www.thepolyglotdeveloper.com/2016/01/show-native-toast-notifications-in-an-ionic-2-mobile-app/)
- [Use SQLite In Ionic Instead Of Local Storage](https://www.thepolyglotdeveloper.com/2015/12/use-sqlite-in-ionic-2-instead-of-local-storage/)
- [Launch Websites With Ionic Using The InAppBrowser](https://www.thepolyglotdeveloper.com/2016/01/launch-websites-with-ionic-2-using-the-inappbrowser/)
- [Add Barcode Scanning Functionality To Your Ionic App](https://www.thepolyglotdeveloper.com/2016/02/add-barcode-scanning-functionality-to-your-ionic-2-app/)
- [Use Google Analytics In An Ionic Android And iOS App](https://www.thepolyglotdeveloper.com/2016/03/use-google-analytics-in-an-ionic-2-android-and-ios-app/)
- [Share Things On Social Media Via An Ionic Mobile App](https://www.thepolyglotdeveloper.com/2016/02/share-things-on-social-media-via-an-ionic-2-mobile-app/)

- [Adding Background Geolocation to an Ionic Application](http://www.joshmorony.com/adding-background-geolocation-to-an-ionic-2-application/)
- [Getting Familiar with Local Notifications in Ionic](http://www.joshmorony.com/getting-familiar-with-local-notifications-in-ionic-2/)
- [Create a Nearby Places List with Google Maps in Ionic – Part 1](http://www.joshmorony.com/create-a-nearby-places-list-with-google-maps-in-ionic-2-part-1/)
- [Create a Nearby Places List with Google Maps in Ionic – Part 2](http://www.joshmorony.com/create-a-nearby-places-list-with-google-maps-in-ionic-2-part-2/)

## Capgo Capacitorプラグイン <a id="capgo-capacitor-plugins"></a>
- [capacitor-accelerometer](https://github.com/Cap-go/capacitor-accelerometer) - Capacitorプラグインによるデバイス加速度計測値の読み取り
- [capacitor-admob](https://github.com/Cap-go/capacitor-admob) - CapacitorプラグインによるiOSおよびAndroid向けAdMob SDKのブリッジ
- [capacitor-age-range](https://github.com/Cap-go/capacitor-age-range) - Capacitorプラグインによる年齢範囲検出。Google Play年齢シグナル（Android）＋Apple DeclaredAgeRange（iOS）
- [capacitor-alarm](https://github.com/Cap-go/capacitor-alarm) - Capacitorプラグインによるネイティブアラームの設定と開閉
- [capacitor-android-age-signals](https://github.com/Cap-go/capacitor-android-age-signals) - キャパシタプラグインでPlay Age Signals APIを使用して、ユーザーの年齢に関連するシグナルを取得します。
- [capacitor-android-inline-install](https://github.com/Cap-go/capacitor-android-inline-install) - キャパシタプラグインでAndroidのインラインインストール機能をトリガーします。
- [capacitor-android-kiosk](https://github.com/Cap-go/capacitor-android-kiosk) - キャパシタプラグインで「キオスクモード」を持つアプリを作成します。このプラグインを使用したアプリは、Androidのランチャーとして設定できます。
- [capacitor-android-sms-retriever](https://github.com/Cap-go/capacitor-android-sms-retriever) - Android SMS Retrieverおよび電話番号ヒントAPI向けのキャパシタプラグイン。
- [capacitor-android-usagestatsmanager](https://github.com/Cap-go/capacitor-android-usagestatsmanager) - Androidアプリの使用状況統計をネイティブに取得するキャパシタプラグイン。
- [capacitor-app-attest](https://github.com/Cap-go/capacitor-app-attest) - iOSでのApp AttestおよびAndroidでのPlay Integrityの認証に向けたキャパシタプラグイン。
- [capacitor-app-tracking-transparency](https://github.com/Cap-go/capacitor-app-tracking-transparency) - iOSのアプリトラッキング透明性向けのキャパシタプラグイン。
- [capacitor-appinsights](https://github.com/Cap-go/capacitor-appinsights) - アプリインサイトSDKとの相互作用を可能にするキャパシタプラグイン。
- [capacitor-appsflyer](https://github.com/Cap-go/capacitor-appsflyer) - AppsFlyerのアトリビューション、分析、ディープリンクに向けたキャパシタプラグイン。
- [capacitor-asset-cache](https://github.com/Cap-go/capacitor-asset-cache) - 大きな画像や動画の透明なローカルキャッシュを実現するキャパシタプラグイン。
- [capacitor-audio-recorder](https://github.com/Cap-go/capacitor-audio-recorder) - iOSおよびAndroidで音声を録音し、バックグラウンドで保持するキャパシタプラグイン。
- [capacitor-audiosession](https://github.com/Cap-go/capacitor-audiosession) - 音声セッションの管理を行うキャパシタプラグイン。
- [capacitor-auto](https://github.com/Cap-go/capacitor-auto) - CarPlayおよびAndroid Autoとの通信を行うキャパシタプラグイン。
- [capacitor-autofill-save-password](https://github.com/Cap-go/capacitor-autofill-save-password) - iOSのウェブビューアプリでパスワードをキーチェーンに保存するダイアログを表示するキャパシタプラグイン。
- [capacitor-background-geolocation](https://github.com/Cap-go/capacitor-background-geolocation) - アプリがバックグラウンドにいるときでも正確な地理位置情報の更新を送信するキャパシタプラグイン。
- [capacitor-background-task](https://github.com/Cap-go/capacitor-background-task) - iOSおよびAndroidでの定期的なバックグラウンドフェッチタスクに向けたキャパシタプラグイン。
- [capacitor-barometer](https://github.com/Cap-go/capacitor-barometer) - デバイスの気圧センサーの読み取りを行うキャパシタプラグイン。
- [capacitor-bluetooth-low-energy](https://github.com/Cap-go/capacitor-bluetooth-low-energy) - Bluetooth Low Energy向けのキャパシタプラグイン。
- [capacitor-brightness](https://github.com/Cap-go/capacitor-brightness) - iOSおよびAndroidでの画面明るさの制御を行うキャパシタプラグイン。
- [capacitor-calendar](https://github.com/Cap-go/capacitor-calendar) - iOSおよびAndroidでのカレンダーイベントの管理、iOSでのリマインダー対応を含むキャパシタプラグイン。
- [capacitor-camera-preview](https://github.com/Cap-go/capacitor-camera-preview) - キャパシタプラグインでJavaScriptおよびHTMLからカメラとの相互作用を可能にする
- [capacitor-compass](https://github.com/Cap-go/capacitor-compass) - ナビゲーションコンパスにアクセスできるキャパシタプラグイン
- [capacitor-contacts](https://github.com/Cap-go/capacitor-contacts) - iOSおよびAndroidでのネイティブ連絡先との相互作用を可能にするキャパシタプラグイン
- [capacitor-contentsquare](https://github.com/Cap-go/capacitor-contentsquare) - Contentsquareモバイル分析SDKに接続するキャパシタプラグイン
- [capacitor-crisp](https://github.com/Cap-go/capacitor-crisp) - CrispネイティブSDKを使用するキャパシタプラグイン
- [capacitor-data-storage-sqlite](https://github.com/Cap-go/capacitor-data-storage-sqlite) - iOSおよびAndroid向けデータストレージ用のSQLiteキャパシタプラグイン
- [capacitor-date-picker](https://github.com/Cap-go/capacitor-date-picker) - ネイティブの日付、時刻、日時、年月、範囲選択器に対応するキャパシタプラグイン
- [capacitor-device-info](https://github.com/Cap-go/capacitor-device-info) - CPU、メモリ、GPU、ストレージ、および搭載センサーのメトリクスを読み取るキャパシタプラグイン
- [capacitor-device-integrity](https://github.com/Cap-go/capacitor-device-integrity) - デバイスの整合性、Android Widevineの指紋、Play Integrity、iOS App Attest、DeviceCheckに対応するキャパシタプラグイン
- [capacitor-document-scanner](https://github.com/Cap-go/capacitor-document-scanner) - iOSおよびAndroidでのドキュメントスキャンを可能にするキャパシタプラグイン
- [capacitor-downloader](https://github.com/Cap-go/capacitor-downloader) - バックグラウンドまたはフォアグラウンドでファイルをダウンロードできるキャパシタプラグイン
- [capacitor-env](https://github.com/Cap-go/capacitor-env) - キャパシタ設定に環境変数を保存・読み出しできるキャパシタプラグイン。マルチテナントアプリに有効。
- [capacitor-facebook-analytics](https://github.com/Cap-go/capacitor-facebook-analytics) - Meta／Facebookアプリイベント分析用のキャパシタプラグイン
- [capacitor-fast-sql](https://github.com/Cap-go/capacitor-fast-sql) - ローカルSQLに接続できる高速プロトコルを用いたキャパシタプラグイン
- [capacitor-ffmpeg](https://github.com/Cap-go/capacitor-ffmpeg) - デバイス上でFFmpegをローカルに実行できるキャパシタプラグイン
- [capacitor-file](https://github.com/Cap-go/capacitor-file) - ファイルシステム操作を行うキャパシタプラグイン。Cordovaのcordova-plugin-fileと互換性のあるAPIを持つ現代的な代替品。
- [capacitor-file-compressor](https://github.com/Cap-go/capacitor-file-compressor) - iOS、Android、WebプラットフォームでPNG、JPEG、WebP形式をサポートする効率的な画像圧縮を実現するキャパシタプラグイン
- [capacitor-file-picker](https://github.com/Cap-go/capacitor-file-picker) - ファイル選択プラグイン - ファイル、画像、動画、ディレクトリを選択可能。
- [capacitor-file-sharer](https://github.com/Cap-go/capacitor-file-sharer) - Android、iOS、Web上でファイルの共有および保存を可能にするキャパシタプラグイン
- [capacitor-firebase](https://github.com/Cap-go/capacitor-firebase) - Firebaseプラグイン（Android、iOS、Web対応）：現在のFirebase SDKを使用
- [capacitor-flash](https://github.com/Cap-go/capacitor-flash) - フラッシュライト／ランプの切り替え用のキャパシタプラグイン
- [capacitor-gtm](https://github.com/Cap-go/capacitor-gtm) - Googleタグマネージャー(GTM)を本番で使用できるキャパシタプラグイン
- [capacitor-health](https://github.com/Cap-go/capacitor-health) - Apple HealthKitおよびGoogle Fitからのデータを操作できるキャパシタプラグイン
- [capacitor-home-indicator](https://github.com/Cap-go/capacitor-home-indicator) - ホームボタンのインディケータを非表示・表示できるキャパシタプラグイン
- [capacitor-ibeacon](https://github.com/Cap-go/capacitor-ibeacon) - iBeaconとの相互作用を可能にするキャパシタプラグイン
- [capacitor-in-app-review](https://github.com/Cap-go/capacitor-in-app-review) - アプリストアの評価をユーザーに促すキャパシタプラグイン
- [capacitor-inappbrowser](https://github.com/Cap-go/capacitor-inappbrowser) - アプリブラウザ内のurlChangeEventを扱うキャパシタプラグイン
- [capacitor-incoming-call-kit](https://github.com/Cap-go/capacitor-incoming-call-kit) - Androidのフルスクリーン通知およびiOSのCallKitによるネイティブ通話UIを提供するキャパシタプラグイン
- [capacitor-install-referrer](https://github.com/Cap-go/capacitor-install-referrer) - Google PlayインストールリファーラーおよびApple AdServicesによるインストール履歴を管理するキャパシタプラグイン
- [capacitor-intent-launcher](https://github.com/Cap-go/capacitor-intent-launcher) - CapacitorアプリからAndroidのIntentを実行し、システム設定画面を開く
- [capacitor-intercom](https://github.com/Cap-go/capacitor-intercom) - Intercom SDK用のキャパシタプラグインブリッジ
- [capacitor-intune](https://github.com/Cap-go/capacitor-intune) - Microsoft Intune MAMの登録、アプリ保護ポリシー、アプリ設定、MSAL認証をサポートするキャパシタプラグイン
- [capacitor-is-root](https://github.com/Cap-go/capacitor-is-root) - Jailbreak/Rootの検出を可能にするキャパシタプラグイン
- [capacitor-ivs-player](https://github.com/Cap-go/capacitor-ivs-player) - AndroidおよびiOS向けのネイティブIVSプレイヤーを提供するキャパシタプラグイン
- [capacitor-jw-player](https://github.com/Cap-go/capacitor-jw-player) - JWプレイヤーを使用して動画をネイティブに再生できるキャパシタプラグイン
- [capacitor-keep-awake](https://github.com/Cap-go/capacitor-keep-awake) - デバイスの画面が暗くなるか、睡眠状態に入るのを防ぐキャパシタプラグイン
- [capacitor-launch-navigator](https://github.com/Cap-go/capacitor-launch-navigator) - AndroidおよびiOS向けのネイティブルートナビゲーションアプリを起動するキャパシタプラグイン
- [capacitor-light-sensor](https://github.com/Cap-go/capacitor-light-sensor) - デバイスの光センサ（Android限定）にアクセスできるキャパシタプラグイン
- [capacitor-live-activities](https://github.com/Cap-go/capacitor-live-activities) - iOSのライブアクティビティをCapacitorから管理する
- [capacitor-live-reload](https://github.com/Cap-go/capacitor-live-reload) - リモートVite開発サーバーからCapacitorアプリをリアルタイムで再読み込みするキャパシタプラグイン
- [capacitor-llm](https://github.com/Cap-go/capacitor-llm) - Apple IntelligenceをサポートしたiOSおよびAndroidでLLMモデルをローカルに実行できるキャパシタプラグイン
- [capacitor-media-session](https://github.com/Cap-go/capacitor-media-session) - デバイスのメディアセッションコントロールを公開するキャパシタプラグイン
- [capacitor-mock-location-detector](https://github.com/Cap-go/capacitor-mock-location-detector) - シミュレートされたGPS位置を検知し、アプリのフィッシングを可能にする開発ツールを提供するキャパシタプラグイン
- [capacitor-mqtt](https://github.com/Cap-go/capacitor-mqtt) - AndroidおよびiOSでのMQTT接続を可能にするキャパシタプラグイン
- [capacitor-mute](https://github.com/Cap-go/capacitor-mute) - デバイスのミュートスイッチが有効／無効になっているかを検知するキャパシタプラグイン
- [capacitor-mux-player](https://github.com/Cap-go/capacitor-mux-player) - iOSおよびAndroidでMux Player SDKを使用して動画を再生するキャパシタプラグイン
- [capacitor-native-audio](https://github.com/Cap-go/capacitor-native-audio) - ネイティブなオーディオエンジンを提供するキャパシタプラグイン
- [capacitor-native-biometric](https://github.com/Cap-go/capacitor-native-biometric) - Face ID、Touch ID、Androidバイオメトリクスをサポートしたキャパシタのセキュアなバイオメトリック認証
- [capacitor-native-loader](https://github.com/Cap-go/capacitor-native-loader) - キャパシタアプリにおけるネイティブアニメーションローダー、透過オーバーレイ、Lottieアセット、WebViewのサイズ変更
- [capacitor-native-market](https://github.com/Cap-go/capacitor-native-market) - ネイティブなPlay Store／App Storeを開くキャパシタプラグイン
- [capacitor-native-navigation](https://github.com/Cap-go/capacitor-native-navigation) - Liquid glassネイティブナビゲーションタブを提供するキャパシタプラグイン
- [capacitor-native-purchases](https://github.com/Cap-go/capacitor-native-purchases) - 最新のAndroidおよびiOSライブラリを用いたキャパシタにおけるIAP管理プラグイン
- [capacitor-nativegeocoder](https://github.com/Cap-go/capacitor-nativegeocoder) - ネイティブなフォワードおよびリバース地名変換を提供するキャパシタプラグイン
- [capacitor-navigation-bar](https://github.com/Cap-go/capacitor-navigation-bar) - Android Lollipop以降のナビゲーションバーの色を設定するキャパシタプラグイン
- [capacitor-network-diagnostics](https://github.com/Cap-go/capacitor-network-diagnostics) - ネイティブなネットワーク診断を提供するキャパシタプラグイン
- [capacitor-nfc](https://github.com/Cap-go/capacitor-nfc) - NFCタグの読み書きを可能にするキャパシタプラグイン。他NFC対応デバイスとのデータ送受信も可能。
- [capacitor-notifications](https://github.com/Cap-go/capgo.app/tree/main/packages/capacitor-notifications) - ユーザー検索、バッジ、統計を含むネイティブiOSおよびAndroidのプッシュ通知を送信
- [capacitor-passkey](https://github.com/Cap-go/capacitor-passkey) - WebAuthnと互換性のあるシェルを備えたキャパシタパスキープラグイン（ネイティブアプリ対応）
- [capacitor-patch](https://github.com/Cap-go/capacitor-patch) - cap syncおよびcap update時に検証済みCapgoパッチを適用
- [capacitor-pay](https://github.com/Cap-go/capacitor-pay) - iOS（Apple Pay）およびAndroid（Google Pay）でのネイティブ決済をトリガーするキャパシタプラグイン
- [capacitor-pdf-generator](https://github.com/Cap-go/capacitor-pdf-generator) - CapacitorプラグインでiOSおよびAndroidでHTML文字列またはURLからPDFファイルを生成します
- [capacitor-pedometer](https://github.com/Cap-go/capacitor-pedometer) - 歩数計データ（歩数、距離、ペース、cadence、階数）を取得できるCapacitorプラグイン
- [capacitor-persistent-account](https://github.com/Cap-go/capacitor-persistent-account) - アプリのインストール間でアカウントデータを保持できるCapacitorプラグイン
- [capacitor-persistent-uuid](https://github.com/Cap-go/capacitor-persistent-uuid) - アプリの再インストールやアップデートを繰り返しても保持されるアプリUUIDを提供するCapacitorプラグイン
- [capacitor-persona](https://github.com/Cap-go/capacitor-persona) - iOSおよびAndroidでPersona Inquiryフローを起動できるCapacitorプラグイン
- [capacitor-photo-library](https://github.com/Cap-go/capacitor-photo-library) - 写真ギャラリーをウェブページとして表示する、または編集できないが認可不要なネイティブ画面を表示するCapacitorプラグイン
- [capacitor-plus](https://github.com/Cap-go/capacitor-plus) - Capacitor+は、コミュニティによる修正と速いリリースを提供する、常に同期されるCapacitorのフォークです
- [capacitor-pretty-toast](https://github.com/Cap-go/capacitor-pretty-toast) - Capacitorおよびウェブ向けのネイティブ第一のシンプルなトースト通知
- [capacitor-printer](https://github.com/Cap-go/capacitor-printer) - ドキュメント、HTML、PDF、画像、ウェブビューの印刷を可能にするCapacitorプラグイン
- [capacitor-privacy-screen](https://github.com/Cap-go/capacitor-privacy-screen) - AndroidのスクリーンショットやiOSアプリスイッチャーのプレビューでアプリコンテンツを隠すCapacitorプラグイン
- [capacitor-proximity](https://github.com/Cap-go/capacitor-proximity) - モバイルアプリでプロキシモニタリングを有効にするCapacitorプラグイン
- [capacitor-realtimekit](https://github.com/Cap-go/capacitor-realtimekit) - Cloudflare Realtime Kitを使用するCapacitorプラグイン
- [capacitor-recaptcha](https://github.com/Cap-go/capacitor-recaptcha) - reCAPTCHAおよびreCAPTCHA Enterpriseトークンを生成するCapacitorプラグイン
- [capacitor-ricoh360-camera-plugin](https://github.com/Cap-go/capacitor-ricoh360-camera-plugin) - ricoh camera 360用のCapacitorプラグイン
- [capacitor-rudderstack](https://github.com/Cap-go/capacitor-rudderstack) - RudderStackの分析、識別、イベントトラッキングを実現するCapacitorプラグイン
- [capacitor-screen-orientation](https://github.com/Cap-go/capacitor-screen-orientation) - 画面方向をサポートし、実際の物理デバイスの方向を検知できるCapacitorプラグイン
- [capacitor-screen-recorder](https://github.com/Cap-go/capacitor-screen-recorder) - スマホの画面をネイティブで録画するCapacitorプラグイン
- [capacitor-shake](https://github.com/Cap-go/capacitor-shake) - 物理デバイスがシェイクジェスチャーを実行したときに検知するCapacitorプラグイン
- [capacitor-share-target](https://github.com/Cap-go/capacitor-share-target) - アプリ内で共有ターゲットインテントを受け取るCapacitorプラグイン
- [capacitor-sheets](https://github.com/Cap-go/capacitor-sheets) - フレームワークに依存しないシート、ドレーアー、ダイアログ、オーバーレイプリミティブを提供するCapacitorプラグイン
- [capacitor-sim](https://github.com/Cap-go/capacitor-sim) - SIMカードから情報を取得できるキャパシタプラグイン
- [capacitor-social-login](https://github.com/Cap-go/capacitor-social-login) - Google、Apple、Facebookなどでのログインを簡単かつ迅速に実装できるキャパシタプラグイン
- [capacitor-speech-recognition](https://github.com/Cap-go/capacitor-speech-recognition) - 音声認識に使えるキャパシタプラグイン
- [capacitor-speech-synthesis](https://github.com/Cap-go/capacitor-speech-synthesis) - テキストから音声を合成するプラグインで、言語、声、トーン、速度、音量を完全に制御可能
- [capacitor-ssl-pinning](https://github.com/Cap-go/capacitor-ssl-pinning) - AndroidおよびiOS向けのキャパシタSSLピンニングプラグイン（CapacitorHttpとの統合）
- [capacitor-streamcall](https://github.com/Cap-go/capacitor-streamcall) - キャパシタ向けのStreamCall SDKプラグイン
- [capacitor-stripe-identity](https://github.com/Cap-go/capacitor-stripe-identity) - StripeのID認証に使えるキャパシタプラグイン
- [capacitor-stripe-pay](https://github.com/Cap-go/capacitor-stripe-pay) - Stripeの支払いシート、Apple Pay、Google Payに使えるキャパシタプラグイン
- [capacitor-stripe-terminal](https://github.com/Cap-go/capacitor-stripe-terminal) - Stripe Terminalによる店頭支払いに使えるキャパシタプラグイン
- [capacitor-supabase](https://github.com/Cap-go/capacitor-supabase) - キャパシタ向けのネイティブSupabase認証、JWTアクセス、および基本的なデータベースヘルパー
- [capacitor-textinteraction](https://github.com/Cap-go/capacitor-textinteraction) - iOSアプリでのテキスト相互作用を切り替えるキャパシタプラグイン
- [capacitor-transitions](https://github.com/Cap-go/capacitor-transitions) - キャパシタアプリ向けのフレームワークに依存しないページ遷移。iOSスタイルのナビゲーションで意見を一切持ちません
- [capacitor-twilio-video](https://capgo.app/plugins/capacitor-twilio-video/) - Twilio Videoのルームにネイティブの音声、カメラ、ルームライフサイクルイベントで参加
- [capacitor-twilio-voice](https://github.com/Cap-go/capacitor-twilio-voice) - Twilio Voice SDKを使って電話の呼び出しを作成・応答できるキャパシタプラグイン
- [capacitor-updater](https://github.com/Cap-go/capacitor-updater) - 即時更新を実現するキャパシタプラグイン：アップデート、修正、変更、新機能を数分以内に提供
- [capacitor-uploader](https://github.com/Cap-go/capacitor-uploader) - ネイティブ層でファイルをアップロードできるキャパシタプラグイン
- [capacitor-uwb](https://github.com/Cap-go/capacitor-uwb) - iOSおよびAndroid向けの超広帯域（UWB）距離測定に使えるキャパシタプラグイン
- [capacitor-verisoul](https://github.com/Cap-go/capacitor-verisoul) - Verisoulによる詐欺防止セッションに使えるキャパシタプラグイン
- [capacitor-video-player](https://github.com/Cap-go/capacitor-video-player) - ネイティブプレイヤーで動画を再生できるキャパシタプラグイン
- [capacitor-video-thumbnails](https://github.com/Cap-go/capacitor-video-thumbnails) - ローカルまたはリモートの動画ファイルから動画のサムネイルを生成するキャパシタプラグイン
- [capacitor-volume-buttons](https://github.com/Cap-go/capacitor-volume-buttons) - キャパシタプラグインでボリュームボタンの押下を検知する
- [capacitor-watch](https://github.com/Cap-go/capacitor-watch) - Apple Watchとの通信を可能にする、両方向メッセージをサポートするキャパシタプラグイン
- [capacitor-webview-crash](https://github.com/Cap-go/capacitor-webview-crash) - WebViewのクラッシュを検知するキャパシタプラグイン
- [capacitor-webview-guardian](https://github.com/Cap-go/capacitor-webview-guardian) - バックグラウンドでWebViewが終了された際に、フォアグラウンド時に再起動するよう検知するキャパシタプラグイン
- [capacitor-webview-version-checker](https://github.com/Cap-go/capacitor-webview-version-checker) - AndroidのWebViewエンジンの古さをチェックし、ネイティブアップデートプロンプトと実行時状態イベントを提供するキャパシタプラグイン
- [capacitor-wechat](https://github.com/Cap-go/capacitor-wechat) - WeChat SDKとの相互作用を可能にするキャパシタプラグイン
- [capacitor-widget-kit](https://github.com/Cap-go/capacitor-widget-kit) - Capgo WidgetKitプラグインにワークアウトLive Activityの例とMaestroのスモークテストを提供
- [capacitor-wifi](https://github.com/Cap-go/capacitor-wifi) - あなたのキャパシタアプリのWiFi接続を管理するキャパシタプラグイン
- [capacitor-youtube-player](https://github.com/Cap-go/capacitor-youtube-player) - YouTubeプレイヤーのコントロールをCapacitorアプリに埋め込むためのプレイヤープラグイン
- [capacitor-zebra-datawedge](https://github.com/Cap-go/capacitor-zebra-datawedge) - Zebra AndroidデバイスでのZebra DataWedgeプロファイル管理、通知、クエリ、ソフトスキャンを可能にするキャパシタプラグイン
- [capacitor-zip](https://github.com/Cap-go/capacitor-zip) - iOS、Android、Webでファイルの圧縮と展開を行うキャパシタプラグイン
- [cordova-updater](https://github.com/Cap-go/cordova-updater) - Cordova iOSおよびAndroid向けのOTAライブアップデート（アップダートプラグインと同じAPI）
- [electron-updater](https://github.com/Cap-go/electron-updater) - Electronアプリ向けのOTAライブアップデート（アップダートプラグインと同じAPI）
- [tauri-updater](https://github.com/Cap-go/tauri-updater) - Tauriアプリ向けのOTAライブアップデート

## 決済ゲートウェイ統合 <a id="payment-gateway-integrations"></a>
- [Stripe Payment Integration in Ionic](https://github.com/enappd/ionic4-stripe)
- [PayPal Integration in Ionic](https://enappd.com/blog/paypal-integration-in-ionic-apps-and-pwa/142/)
- [Ionic 4 Apple Pay Payment Integration](https://enappd.com/blog/how-to-integrate-apple-pay-in-ionic-4-apps/21)
- [Ionic 4 Razorpay Payment Integration](https://enappd.com/blog/how-to-integrate-razorpay-in-ionic-4-apps-and-pwa/20)

## Backend as a Service <a id="backend-as-a-service"></a>
- [10 Minutes with Ionic: Calling an API](http://blog.ionic.io/10-minutes-with-ionic-2-calling-an-api/)
- [Using Http to Fetch Remote Data from a Server in Ionic](http://www.joshmorony.com/using-http-to-fetch-remote-data-from-a-server-in-ionic-2/)
- [Posting data from Ionic app to a PHP server](http://www.nikola-breznjak.com/blog/ionic2/posting-data-from-ionic-2-app/)
- [Make HTTP Requests In An Ionic Android And iOS App](https://www.thepolyglotdeveloper.com/2016/01/make-http-requests-in-an-ionic-2-android-and-ios-app/)

## i18nとl10n <a id="i18n--l10n"></a>
- [Localizing Ionic Apps with ngx-translate](https://phrase.com/blog/posts/localizing-ionic-applications-with-ngx-translate)
- [attranslate](https://github.com/fkirc/attranslate) - JSONおよびその他のリソースファイルの半自動翻訳

## ツール <a id="tools"></a>
- [Ionic2-vscode](https://marketplace.visualstudio.com/items?itemName=jgw9617.ionic2-vscode)
- [Vim-ionic2](https://github.com/akz92/vim-ionic2)
- [Capacitor safe area simulator](https://chromewebstore.google.com/detail/capacitor-safe-area-simul/ddaaodgcccedhjbjeollookhompnlfhi) - ブラウザ内で安全領域をシミュレートするChrome拡張機能（Ionic、Knsta UIおよびTailwind Capacitorに対応）
- [Capstart](https://github.com/AdrienADV/capstart) - React、Supabase、shadcn/uiを使用したCapacitorアプリの作成や、既存のウェブフレームワークプロジェクトにCapacitorを追加するためのCLIおよびスタートアップツールキット
- [Capgo Skills](https://capgo.app/skills/) - Ionic/Capacitorスキルをインタラクティブなチャレンジでテスト
- [Capgo Security Scanner](https://capgo.app/security-scanner/) - あなたのCapacitorアプリのセキュリティ脆弱性をスキャン
- [Capgo Semver Tester](https://capgo.app/semver_tester/) - Capacitorプラグインのセマンティックバージョン互換性をテスト
- [AASA Tester](https://aasa-tester.capgo.app) - iOS Universal Links用のApple App Site Associationファイルをテスト
- [CLI](https://github.com/Cap-go/CLI) - ライブアップデートバンドルのアップロードと管理
- [Live Update Action](https://github.com/Cap-go/live-update-action) - ライブアップデートをデプロイするGitHubアクション
- [Docker](https://github.com/Cap-go/docker-capacitor) - ネイティブアプリのビルド用のイメージ
- [Native Builds](https://capgo.app/native-build/) - クラウド上でiOSおよびAndroidのバイナリをコンパイル・署名
- [Android Keystore Generator](https://capgo.app/tools/android-keystore-generator/) - ブラウザ上でアプリ署名用のAndroidキーストアを生成
- [iOS Certificate Generator](https://capgo.app/tools/ios-certificate-generator/) - ブラウザ上でiOSの証明書署名リクエストとプライベートキーを生成
- [iOS UDID Finder](https://capgo.app/tools/ios-udid-finder/) - iPhoneまたはiPadのUDIDを検索；デバイス識別子はツールのバックエンドに送信
- [Vite plugin](https://github.com/Cap-go/vite-capacitor) - ネイティブプラットフォームの設定をVite開発サーバーのURLと同期
- [n8n nodes](https://github.com/Cap-go/n8n-nodes-capgo) - n8nワークフローからライブアップデートおよびネイティブビルドを自動化
- [Standard Version](https://github.com/Cap-go/standard-version-for-capacitor) - アプリの自動バージョン管理
- [CI/CD pipeline setup](https://capgo.app/blog/capacitor-cicd-pipeline-setup-guide/) - ビルド、テスト、ライブアップデートのデプロイを自動化
- [OTA updates in CI/CD](https://capgo.app/blog/capacitor-ota-updates-cicd-integration-guide/) - パイプラインからオーバーアイアップデートを配信

## 動画チュートリアル <a id="video-tutorials"></a>
- [Build a Todo App from Scratch with Ionic](http://www.joshmorony.com/build-a-todo-app-from-scratch-with-ionic-2-video-tutorial/)
- [Ionic: How to Use Google Maps & Geolocation](http://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/)
- [Build a Custom Flash Card Component in Ionic](https://www.youtube.com/watch?v=BKFQKywl_GM)
- [Hacking CSS in Ionic](https://www.youtube.com/watch?v=sXFmkdhOEVc)
- [Learn Ionic 3 From Scratch](https://www.youtube.com/watch?v=JcEGTektejA&list=PLYxzS__5yYQng-XnJhB21Jc7NW1OIaqct)
- [TutorialSearch](https://tutorialsearch.io/browse/mobile-development/ionic-framework) - Udemy、Skillshare、Pluralsingなど、主要な学習プラットフォームの45以上のカテゴリにわたる5万件以上のチュートリアルを無料でクロスプラットフォーム検索エンジンでインデックス
- [Ionic & Capacitor for Building Native Mobile Apps](https://www.youtube.com/watch?v=K7ghUiXLef8) - freeCodeCampによる初心者向け完全コース
- [From React Web to Native Mobile App](https://www.youtube.com/watch?v=IwHt_QpIa8A) - シモン・グリム
- [How to Build a Native App from Angular Projects](https://www.youtube.com/watch?v=V2Wn2JROUEo) - シモン・グリム
- [Building a Native Mobile App with Next.js](https://www.youtube.com/watch?v=xQKtDgJXrlM) - シモン・グリム
- [How To Create A Mobile App Using Vite, Vue and Ionic](https://www.youtube.com/watch?v=K_OwSHPxT-A) - アーロン・サウスウェル
- [Building Modern Angular Apps with Ionic](https://www.youtube.com/watch?v=tbrJJkSYQ04) - シモン・グリム
- [How to Setup Deep Links (iOS & Android)](https://www.youtube.com/watch?v=tAQwllZSQD8) - シモン・グリム

## Webアプリの変換 <a id="convert-a-web-app"></a>

既存のWebアプリを公開済みモバイルアプリへ変換するまでを扱うチュートリアルです。

- [Transform a PWA into a native app](https://capgo.app/blog/transform-pwa-to-native-app-with-capacitor/) - iOS および Android 用のプログレッシブウェブアプリをパッケージ化する
- [Turn a web app into a mobile app](https://capgo.app/blog/how-easy-is-it-to-make-web-app-into-mobile-app-with-capacitor/) - ウェブアプリをラップしてストア審査を通過させるために必要なこと
- [Convert a Lovable app to iOS and Android](https://capgo.app/blog/transform-lovable-dev-app-to-mobile-with-capacitor/) - Lovable からエクスポートし、Capacitor でラップして署名済みバイナリを配布する
- [Build iOS apps from Windows](https://capgo.app/blog/build-ios-app-from-windows-capacitor-capgo-build/) - Mac を所有せず、TestFlight にコンパイル・署名・提出する

## 書籍 <a id="books"></a>
- [Building Mobile Apps with Ionic](https://www.joshmorony.com/building-mobile-apps-with-ionic-2/)



## ボイラープレート／デモアプリ <a id="boilerplatedemo-apps"></a>
- [Ionic Official Starter Templates](https://github.com/ionic-team/starters)
- [capacitor-updater-plugin-demo](https://github.com/Cap-go/demo-app) - Ionic Vue による OTA 更新を示すアプリ
- [vue-data-storage-sqlite-app-starter](https://github.com/Cap-go/vue-data-storage-sqlite-app-starter) - SQLite キー/バリューストレージ用の Vue スターター
- [react-data-storage-sqlite-app-starter](https://github.com/Cap-go/react-data-storage-sqlite-app-starter) - SQLite キー/バリューストレージ用の React スターター
- [Ionic Boilerplate](https://github.com/marcoturi/ionic-boilerplate)
- [Cordova File Transfer](https://github.com/dsgriffin/ionic-2-file-transfer-example)
- [Update your App](https://github.com/NextFaze/ionic-manup)
- [NFC Demo](https://github.com/RedFroggy/ionic2-nfc-app)
- [Fullscreen Content](https://github.com/sebaferreras/Ionic2-FullscreenContent)
- [Card Layout](https://github.com/joshuamorony/ionic2-card-layout)
- [Ionic 2](https://github.com/marcoturi/ionic2-boilerplate)
- [Ionic 2 Advanced Components](https://github.com/yannbf/ionic2-components)
- [OCR Scan App](https://github.com/matiastucci/ionic-ocr-example)
- [Ionic 4 Payment Gateway Starter - Stripe](https://store.enappd.com/product/ionic-4-stripe-payment-starter/)
- [Ionic 4 Payment Gateway Starter - Paypal](https://store.enappd.com/product/ionic-4-paypal-payment-starter/)
- [Ionic 4 Payment Gateway Starter - Razorpay](https://store.enappd.com/product/ionic-4-razorpay-payment-starter/)
- [Ionic 4 Payment Gateway Starter - Apple Pay](https://store.enappd.com/product/ionic-4-apple-pay-starter/)
- [Ionic 5 Complete App and PWA Starter](https://store.enappd.com/product/ionic-4-full-app/)
- [Ionic 5 Complete Taxi Booking Platform Starter](https://store.enappd.com/product/taxi-booking-complete-platform/)
- [Ionic 5 Grocery Shopping Starter with Admin Panel](https://store.enappd.com/product/ionic-4-grocery-complete-platform-app-and-admin-dashboard/)
- [Ionic 5 Tinder Starter](https://store.enappd.com/product/dating-app-starter-ionic4-tinder-clone/)
- [Ionic 5 Food Delivery App Starter](https://store.enappd.com/product/ionic-4-food-ordering-app-starter/)

- [Ionic 6 Capacitor Full App Starter](https://store.enappd.com/product/capacitor-full-app-with-ionic-angular/)

## コンポーネント <a id="components"></a>

### ライブラリ <a id="libraries"></a>
- [Capacitor Tailwind](https://github.com/Cap-go/tailwind-capacitor) - Capacitor 用の Tailwind CSS プラグイン
- [Ionic Blocks](https://ionicblocks.com/) - 無料およびプレミアムの Ionic コンポーネントのコレクション

### アニメーション <a id="animations"></a>
- [Lottie Animation](https://github.com/chenqingspring/ng-lottie) 
- [Lottie Animation](https://github.com/fivethree-team/lottie) 

### UIライブラリ <a id="ui-library"></a>
- [Ionic 4 UI Component Library](https://github.com/fivethree-team/ionic-4-components) 

### メニュー、タブ <a id="menu-tabs"></a>
- [Scrollabel Tabs](https://github.com/SinoThomas/Ionic2-ScrollableTabs) 
- [Circular Tabs](https://github.com/SinoThomas/Ionic2-CircularTabs) 
- [Fab Toolbar](https://github.com/ekhmoi/fab-toolbar) 
- [Multi Level Sidemenu](https://github.com/sebaferreras/Ionic2-MultiLevelSideMenu) 
- [Popover Sidemenu](https://github.com/philipbrack/ionic2-menu-alternative-popover) 
- [Drop down Title](https://github.com/Mohd-PH/ionic-drop-down-title) 

### フォーム／入力 <a id="form--input"></a>
- [Autocomplete](https://github.com/kadoshms/ionic2-autocomplete) 
- [Form Generator based on JSON](https://github.com/makinacorpus/angular2-schema-form) 
- [Dynamic Forms](https://github.com/udos86/ng2-dynamic-forms/) 
- [Form Builder](https://github.com/rohitg7/ionic2-form-builder) 
- [Sidemenu tabs](https://github.com/seanmavley/ionic2-sidemenu-tabs)
- [Selectable](https://github.com/eakoriakin/ionic-selectable)
- [Masks](https://github.com/amarkes/br-mask)

### 入力 — 日付／カレンダー <a id="input---datecalendar"></a>
- [Calendar](https://github.com/twinssbc/Ionic2-Calendar) 
- [Calendar](https://github.com/alexandretok/easy-ionic2-calendar) 
- [Calendar](https://github.com/redpandatronicsuk/ionic2calendar) 
- [Calendar](https://github.com/mattlewis92/angular-calendar)  (very powerful)
- [Calendar - Fullcalendar](https://github.com/nekken/ng2-fullcalendar) 
- [Datepicker](https://github.com/misha130/datepicker-ionic2) 
- [Datepicker (selectable range dates calendar)](https://github.com/HsuanXyz/ion2-calendar) 
- [Datepicker](https://github.com/rajeshwarpatlolla/ionic2-datepicker) 
- [Rating](https://github.com/andrucz/ionic2-rating) 
- [Inputfield Mask](https://github.com/text-mask/text-mask)

### リスト／テーブル <a id="liststable"></a>
- [Sortable/Filter Tables](https://github.com/valor-software/ng2-table) 
- [Smart table (sorting, filtering)](https://github.com/akveo/ng2-smart-table) 
- [Flexible and Light Table](https://github.com/swimlane/ngx-datatable) 

### 画像 <a id="images"></a>
- [Signatur](https://github.com/wulfsolter/angular2-signaturepad) - Ionicと完全に連携
- [Image Fallback](https://github.com/VadimDez/ng2-img-fallback) 
- [Lazy Load](https://github.com/tjoskar/ng2-lazyload-image)  
- [Image Loader](https://github.com/zyramedia/ionic-image-loader) 
- [Facebook Gallery](https://github.com/skyfloyd/ionic2-fb-gallery) 
- [Image Viewer](https://github.com/Riron/ionic-img-viewer) 
- [Gallery Modal](https://github.com/nikini/ionic-gallery-modal) 
- [Image Zoom](https://github.com/brtnshrdr/angular2-image-zoom) 

### チャート／図 <a id="chartsdiagram"></a>
- [Charts](https://github.com/valor-software/ng2-charts) 
- [D3 Service](https://github.com/tomwanzek/d3-ng2-service) 
- [D3 Angular Examples](https://github.com/datencia/d3js-angular-examples) 
- [D3 Line/Bar/Pie Charts](https://github.com/datencia/d3js-angular2-example) 

### 動画／音声 <a id="videoaudio"></a>
- [Video Editor](https://github.com/rossmartin/video-editor-ionic2) 
- [Simple Audioplayer](https://github.com/arielfaur/ionic-audio) 

### キーボード <a id="keyboards"></a>
- [Digit Keyboard](https://github.com/skol-pro/ion-digit-keyboard-v2) 

### アイコン <a id="icons"></a>
- [@robsonos/ionic-mdi](https://www.npmjs.com/package/@robsonos/ionic-mdi) - Ionic `addIcons`用のMaterial Design Icons

### ダイアログ <a id="dialog"></a>
- [Dialogbox with Counter](https://github.com/HsuanXyz/ionic2-extend-alert) 

### フレーム <a id="frames"></a>
- [ng Lightning (for Salesforce Apps)](https://github.com/ng-lightning/ng-lightning) 

## オープンソースプロジェクト <a id="open-source-projects"></a>
- [Ionic Conference App](https://github.com/driftyco/ionic-conference-app)
- [IonicRealty](https://github.com/ccoenraets/ionic2-realty)
- [Ionic Firebase Chat App](https://github.com/ionic2blueprints/firebase-chat)
- [Ionic Ecommerce App](https://github.com/ionic2blueprints/ionic2-marketcloud)
- [Ionic Conference App based on Lanyrd API](https://github.com/ionic2blueprints/conference-app)
- [Ionic Stock Tracking App](https://github.com/ionic2blueprints/ionic2-stockmarket)
- [Ionic Wordpress Client](https://github.com/ionic2blueprints/ionic2-wp-client)
- [Ionic Media Player](https://github.com/ionic2blueprints/media-player)
- [Ionic Social App](https://github.com/ionic2blueprints/social-app)
- [Ionic 5 WhatsApp clone](https://github.com/thenaim/ionic-whatsapp-clone)
- [Ionic 5 Social Network Starter](https://github.com/thenaim/ion-tk-social-network)
- [Ionic Push Notification](https://github.com/aggarwalankush/ionic2-push-base)
- [Ionic Weather app](https://github.com/aggarwalankush/ionic2-mosum)
- [Ionic Reddit Reader](https://github.com/smartapant/ionic2-reddit-reader)
- [Ionic aiEyes - Azure Computer Vision API](https://github.com/brenopolanski/aiEyes)
- [Ionic Soundboard](https://github.com/rkalis/ionic-soundboard)
- [Firebase push notifications in Ionic 4](https://github.com/enappd/ionic-4-push)
- [Receive SMS automatically in Ionic 4](https://github.com/enappd/Ionic-4-sms-receive)
- [Playing music in Ionic 4](https://github.com/enappd/ionic-4-music)
- [Ionic 4 PayPal Payment Integration](https://github.com/enappd/ionic4-paypal)
- [Ionic 4 Apple Pay Payment Integration](https://github.com/enappd/ionic4-applepay)
- [Ionic 4 Razorpay Payment Integration](https://github.com/enappd/ionic4-razorpay)
- [Ionic 4 Facebook login with Firebase](https://github.com/enappd/ionic4-facebookAuth)
- [Translation in Ionic 4 - Internationalization and localization](https://github.com/enappd/ionic4-i18n)

## Ionicで構築されたアプリ <a id="apps-built-with-ionic"></a>

Ionicの利用が公開資料で確認できる本番アプリです。

- [AAA](https://ionic.io/resources/case-studies/american-automobile-association) - アメリカ自動車協会のメンバーサービスアプリ
- [BBC Games](https://ionic.io/resources/case-studies/bbc-games) - BBCの子供向けゲーム
- [Bestinvest](https://ionic.io/resources/case-studies/bestinvest) - 投資プラットフォームをiOSおよびAndroid用にラップ
- [Burger King](https://ionic.io/resources/articles/burger-king-design-system) - バーグキングがモバイル向けにデザインシステムを導入した方法
- [DayClocks Agenda](https://ionic.io/resources/case-studies/dayclocks) - Cordovaから移行したファミリーアジェンダアプリ
- [Komed Health](https://ionic.io/resources/case-studies/komed) - 病院向けの臨床コミュニケーションアプリ
- [MyBlock](https://ionic.io/resources/case-studies/hrblock) - H&R Blockの税務準備アプリ
- [Spreekuur.nl](https://ionic.io/resources/case-studies/topicus) - Dutchのヘルスケアコンサルテーションアプリ（Topicus）
- [YesHelp](https://ionic.io/resources/case-studies/yeshelp) - iOSおよびAndroid用の社会支援アプリ
- [Ionic case studies](https://ionic.io/resources/case-studies) - Ionicチームが発表したさらに多くのケーススタディ

## コミュニティ <a id="community"></a>

- [Discord](https://ionic.link/discord) - 公式Discordコミュニティ
- [Reddit](https://www.reddit.com/r/ionic/) - コミュニティのディスカッション
- [Stack Overflow](https://stackoverflow.com/tags/ionic-framework) - ionic-frameworkにタグが付けられた質問

## フリーランサー <a id="freelancers"></a>

- [Adrien](https://book.capgo.app/adrien/) - Capstartの作成者であり、Capgoでのパートタイム開発者
- [Jordan](https://book.capgo.app/jordan/) - 複数のモバイルアプリの作成者であり、Capgoでのパートタイム開発者
- [Capgo consulting](https://capgo.app/consulting/) - リアルタイム更新、ネイティブプラグイン、Ionic/Capacitorに関するコンサルティング

## コントリビューション <a id="contribute"></a>
コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/candelibas/awesome-ionic/blob/199ba2489f47442c821ea46b1890e4aa0f0f5d86/CONTRIBUTING.md)を確認してください。

## 作者 <a id="author"></a>

<a href="https://capgo.app/">Capgo — Live updates for capacitor</a>
