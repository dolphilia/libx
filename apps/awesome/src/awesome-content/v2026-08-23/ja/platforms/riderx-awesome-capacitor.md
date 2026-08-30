---
title: "Awesome Capacitor"
description: "Capacitorを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-riderx-awesome-capacitor-readme-md"
---

# Awesome Capacitor

Capacitorを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [Official](#official)
- [Official plugins](#official-plugins)
- [Community plugins](#community-plugins)
- [Capgo plugins](#capgo-plugins)
- [Transistor Software plugins](#transistor-software-plugins)
- [Aparajita plugins](#aparajita-plugins)
- [Other plugins](#other-plugins)
- [Cordova plugins](#cordova-plugins)
- [Tools](#tools)
- [Helpers](#helpers)
- [Learning](#learning)
- [Convert a web app](#convert-a-web-app)
- [Videos](#videos)
- [Demo apps](#demo-apps)
- [Apps built with Capacitor](#apps-built-with-capacitor)
- [Related lists](#related-lists)
- [Community](#community)
- [Freelancers](#freelancers)
- [Author](#author)


<a id="official"></a>
## 公式

- [Website](https://capacitorjs.com/) - プロジェクトのホームページ
- [Documentation](https://capacitorjs.com/docs) - 公式ドキュメント
- [CLI](https://capacitorjs.com/docs/cli) - コマンドラインリファレンス
- [Community](https://capacitorjs.com/community) - 公式なコミュニティハブ
- [Blog](https://ionic.io/blog/tag/capacitor) - 公式ブログ記事
- [Repository](https://github.com/ionic-team/capacitor) - コアランタイムソースコード

<a id="official-plugins"></a>
## 公式プラグイン

[Capacitor](https://github.com/ionic-team/capacitor-plugins) の公式プラグインおよびイオニックが維持しているものについては、ここにリストされています。

- [Action Sheet](https://github.com/ionic-team/capacitor-plugins/tree/main/action-sheet) - ナビゲーションアクションシートへのアクセスを提供する
- [App](https://github.com/ionic-team/capacitor-plugins/tree/main/app) - アプリの高レベル状態とイベントの管理を担当する
- [App Launcher](https://github.com/ionic-team/capacitor-plugins/tree/main/app-launcher) - アプリが開けているか確認し、開くことができる
- [Browser](https://github.com/ionic-team/capacitor-plugins/tree/main/browser) - アプリ内ブラウザを開くことができ、ブラウザイベントにサブスクライブできる
- [Camera](https://github.com/ionic-team/capacitor-plugins/tree/main/camera) - カメラで写真を撮影するか、または写真アルバムから既存の写真を選択できる
- [Clipboard](https://github.com/ionic-team/capacitor-plugins/tree/main/clipboard) - システムクリップボードへのコピー・ペーストを可能にする
- [Device](https://github.com/ionic-team/capacitor-plugins/tree/main/device) - デバイスの内部情報（モデル名やOSバージョン）やユーザー情報（ユニークIDなど）を公開する
- [Dialog](https://github.com/ionic-team/capacitor-plugins/tree/main/dialog) - ナビゲーションダイアログ（アラート、確認、入力プロンプトなど）をトリガーするメソッドを提供する
- [File system](https://github.com/ionic-team/capacitor-filesystem) - デバイス上のファイル操作にNodeJSのようなAPIを提供する
- [File Transfer](https://github.com/ionic-team/capacitor-file-transfer) - ファイルのダウンロードおよびアップロードを可能にするメカニズムを提供する
- [File Viewer](https://github.com/ionic-team/capacitor-file-viewer) - ファイルを開くことやメディアのプレビューを可能にするメカニズムを提供する
- [Geolocation](https://github.com/ionic-team/capacitor-geolocation) - GPSを用いてデバイスの現在位置を取得し、その位置を追跡するためのシンプルなメソッドを提供する。また、高度、方向、速度情報が存在する場合、それらも含む。
- [Haptics](https://github.com/ionic-team/capacitor-haptics) - ユーザーにタッチや振動を通じて物理的なフィードバックを提供する
- [Keyboard](https://github.com/ionic-team/capacitor-keyboard) - キーボードの表示・非表示の制御と、キーボードが表示・非表示された際に発生するイベントを追跡する
- [Local Notifications](https://github.com/ionic-team/capacitor-plugins/tree/main/local-notifications) - デバイス通知をローカルにスケジュールする（サーバーによるプッシュ通知なし）方法を提供する
- [Motion](https://github.com/ionic-team/capacitor-plugins/tree/main/motion) - 加速度計とデバイスの向き（コンパス方向など）を追跡する
- [Network](https://github.com/ionic-team/capacitor-plugins/tree/main/network) - ネットワークおよび接続状態情報を提供する
- [Preferences](https://github.com/ionic-team/capacitor-plugins/tree/main/preferences) - 軽量データを保存するためのシンプルなキー／バリューの永続ストレージ（例：Storage）を提供する
- [Push Notifications](https://github.com/ionic-team/capacitor-plugins/tree/main/push-notifications) - ナビゲーションプッシュ通知へのアクセスを提供する
- [Screen Reader](https://github.com/ionic-team/capacitor-plugins/tree/main/screen-reader) - TalkBack/VoiceOverなどにアクセスし、視覚アクセシビリティ向けにシンプルなテキスト-to-スピーキング機能を提供する
- [Share](https://github.com/ionic-team/capacitor-plugins/tree/main/share) - ユーザーがインストールした任意の共有対応アプリでコンテンツを共有するためのメソッドを提供します
- [Splash Screen](https://github.com/ionic-team/capacitor-plugins/tree/main/splash-screen) - スプラッシュ画像の表示または非表示を制御するためのメソッドを提供します
- [Status Bar](https://github.com/ionic-team/capacitor-plugins/tree/main/status-bar) - ステータスバーのスタイルを設定し、表示または非表示を制御するためのメソッドを提供します
- [Text Zoom](https://github.com/ionic-team/capacitor-plugins/tree/main/text-zoom) - Web Viewのテキストサイズを変更して視覚的にアクセシブルにするための機能を提供します
- [Toast](https://github.com/ionic-team/capacitor-plugins/tree/main/toast) - 重要な情報をユーザーに表示するためのネイティブ通知ポップアップを提供します

<a id="community-plugins"></a>
## コミュニティプラグイン

[Capacitor organisation](https://github.com/capacitor-community) が所有し、選ばれたコミュニティメンバーが維持しているコミュニティプラグインについては、ここにリストされています。

- [Admob](https://github.com/capacitor-community/admob) - AdMob用のネイティブプラグインです
- [App-icon](https://github.com/capacitor-community/app-icon) - Capacitorコミュニティプラグインでアプリのアイコンを変更できます
- [Apple sign in](https://github.com/capacitor-community/apple-sign-in) - 電解コンデンサでAppleにサインイン
- [Background geolocation](https://github.com/capacitor-community/background-geolocation) - アプリがバックグラウンドに移動している間でも、地理位置の更新を受け取ることができます
- [Barcode scanner](https://github.com/capacitor-community/barcode-scanner) - Capacitor用の高速かつ効率的なQRコード／バーコードスキャナ
- [Bluetooth-le](https://github.com/capacitor-community/bluetooth-le) - Bluetooth Low Energy
- [Camera preview](https://github.com/capacitor-community/camera-preview) - カスタムコントロール付きのネイティブカメラプレビュー
- [Googlemaps](https://github.com/capacitor-community/capacitor-googlemaps-native) - AndroidおよびiOS用のネイティブマップAPIを用いたプラグインです
- [Contacts](https://github.com/capacitor-community/contacts) - デバイスの連絡先にアクセスするためのプラグインです
- [Date picker](https://github.com/capacitor-community/date-picker) - Capacitorアプリ用のネイティブ日時選択プラグインです
- [Electron](https://github.com/capacitor-community/electron) - Electronプラットフォームのサポートを提供します
- [Facebook Login](https://github.com/capacitor-community/facebook-login) - Facebookログイン用のネイティブプラグドを提供します
- [File opener](https://github.com/capacitor-community/file-opener) - mimeTypeとファイルURIを指定して、ファイルを開くことができるプラグインです
- Firebase
    - [Analytics](https://github.com/capacitor-community/firebase-analytics) - Firebaseアナリティクス用のネイティブプラグインを提供します
    - [Crashlytics](https://github.com/capacitor-community/firebase-crashlytics) - Firebase Crashlytics
    - [Fcm](https://github.com/capacitor-community/fcm) - Capacitorアプリ向けにFirebase Cloud Messaging機能を有効にする
    - [Remote config](https://github.com/capacitor-community/firebase-remote-config) - Firebaseリモート設定向けのネイティブプラグイン
- [Flipper](https://github.com/capacitor-community/flipper) - Flipperデバッガー向けのネイティブプラグイン
- [Http](https://github.com/capacitor-community/http) - CORSフリーのリクエストおよびファイル転送用のネイティブHTTPプラグイン
- [Intercom](https://github.com/capacitor-community/intercom) - Capacitorアプリ向けにIntercom機能を有効にする
- [Keep awake](https://github.com/capacitor-community/keep-awake) - 画面の一部の睡眠を防ぐ
- [Media](https://github.com/capacitor-community/media) - Capacitor向けにアルバム作成、動画・GIFの保存などメディア機能を有効にする
- Microsoft
    - [Appcenter](https://github.com/capacitor-community/appcenter-sdk-capacitor/tree/master/appcenter) - Microsoft AppCenter SDKの統合
    - [Analytics](https://github.com/capacitor-community/appcenter-sdk-capacitor/tree/master/appcenter-analytics) - AppCenter Analytics
    - [Crashes](https://github.com/capacitor-community/appcenter-sdk-capacitor/tree/master/appcenter-crashes) - AppCenter Crashes
- [MQTT v5](https://github.com/antonymarion/capacitorjs-mqtt-native-plugin) - MQTT v5と相関データおよびリクエスト/レスポンスパターンを用いたネイティブプラグイン
- [Native audio](https://github.com/capacitor-community/native-audio) - ネイティブオーディオエンジン用のネイティブプラグイン
- [Native market](https://github.com/capacitor-community/native-market) - Google PlayまたはApp Storeへのリンクを実行するネイティブマーケットプラグイン
- [Photoviewer](https://github.com/capacitor-community/photoviewer) - フルスクリーンおよび共有機能を備えたテーブル画像
- [Privacy screen](https://github.com/capacitor-community/privacy-screen) - アプリが最近の画面やアプリスイッチャーでスクリーンショットを表示されないように保護
- [React hooks](https://github.com/capacitor-community/react-hooks) - Reactアプリ内でCapacitorプラグインを使用するためのハック
- [Realm](https://github.com/capacitor-community/realm) - MongoDB Realm向けのネイティブプラグン
- [Safe Area](https://github.com/capacitor-community/safe-area) - ウェブプロジェクトにネイティブセーフエリアインセットを公開
- [Screen brightness](https://github.com/capacitor-community/screen-brightness) - iOSおよびAndroidでの画面明るさを制御
- [Speech recognition](https://github.com/capacitor-community/speech-recognition) - 音声認識を用いたネイティブプラグイン
- [SQLite](https://github.com/capacitor-community/sqlite) - ネイティブおよびElectron用のSQLiteデータベース
- [Stripe](https://github.com/capacitor-community/stripe) - Capacitorアプリにおける支払い処理用SDKバインディング
- [Tauri](https://github.com/capacitor-community/tauri) - Tauriプラットフォームのサポート
- [Text to speech](https://github.com/capacitor-community/text-to-speech) - テキストから音声を合成
- [Twitter](https://github.com/capacitor-community/twitter) - Capacitor向けTwitterKit機能の有効化
- [Uxcam](https://github.com/capacitor-community/uxcam) - Android、iOS、Web/PWAプラットフォーム向けの分析およびセッション記録
- [WebSocket](https://github.com/mia-z/capacitor-websocket) - 各プラットフォーム向けのネイティブWebSocket実装を提供するプラグイン

<a id="capgo-plugins"></a>
## [Capgoプラグイン](https://capgo.app/)
Plugins owned by [Capgo organisation](https://github.com/Cap-go) and maintained by [@riderx](https://github.com/riderx) and community members with Open Collective.

<a id="core--updates"></a>
### コアと更新
- [Updater](https://github.com/Cap-go/capacitor-updater) - Capacitorアプリ向けのリアルタイム更新
- [Live Reload](https://github.com/Cap-go/capacitor-live-reload) - リモートVite開発サーバーからCapacitorアプリを再読み込み
- [Electron Updater](https://github.com/Cap-go/electron-updater) - Electronアプリ向けのOTAライブアップデート（アップダートプラグインと同じAPI）
- [Cordova Updater](https://github.com/Cap-go/cordova-updater) - Cordova iOSおよびAndroid向けのOTAライブアップデート（アップダートプラグインと同じAPI）
- [Tauri Updater](https://github.com/Cap-go/tauri-updater) - Tauriアプリ向けのOTAライブアップデート
- [Capacitor Patch](https://github.com/Cap-go/capacitor-patch) - cap syncおよびcap update時に検証済みCapgoパッチを適用
- [Capacitor+](https://github.com/Cap-go/capacitor-plus) - コミュニティによる修正を常に反映したCapac及、より速いリリース
- [Notifications](https://github.com/Cap-go/capgo.app/tree/main/packages/capacitor-notifications) - ユーザー検索、バッジ、統計を含むネイティブiOSおよびAndroidのプッシュ通知を送信

<a id="device--sensors"></a>
### デバイスとセンサー
- [Accelerometer](https://github.com/Cap-go/capacitor-accelerometer) - デバイスの加速度計測値を読み取る
- [Age Range](https://github.com/Cap-go/capacitor-age-range) - AndroidおよびiOS向けのクロスプラットフォーム年齢範囲検出
- [Barometer](https://github.com/Cap-go/capacitor-barometer) - デバイスの気圧センサー読み取り値を取得
- [Brightness](https://github.com/Cap-go/capacitor-brightness) - iOSおよびAndroidでの画面明るさを制御
- [Compass](https://github.com/Cap-go/capacitor-compass) - ネイティブコンパスヘッドプラグイン
- [Device Info](https://github.com/Cap-go/capacitor-device-info) - CPU、メモリ、GPU、ストレージ、およびオンボードセンサーのメトリクスを読み取る
- [Light Sensor](https://github.com/Cap-go/capacitor-light-sensor) - デバイスの光センサー（Android限定）を取得
- [Mute](https://github.com/Cap-go/capacitor-mute) - デバイスのミュートスイッチが有効または無効であるかを検出
- [Pedometer](https://github.com/Cap-go/capacitor-pedometer) - 歩数計データ（歩数、距離、ペース、cadence、階数）を取得
- [Persistent UUID](https://github.com/Cap-go/capacitor-persistent-uuid) - アプリのUUIDをインストール再実行およびアップデート時に常に保持
- [Proximity](https://github.com/Cap-go/capacitor-proximity) - モバイルアプリでプロキシセンサの状態を監視する
- [Shake](https://github.com/Cap-go/capacitor-shake) - デバイスのシェイクジェスチャーを検出する
- [Volume Buttons](https://github.com/Cap-go/capacitor-volume-buttons) - ボリュームボタンの押下を検知する
- [SIM](https://github.com/Cap-go/capacitor-sim) - デバイスのSIMカードから情報を取得する

<a id="camera--media"></a>
### カメラとメディア
- [Camera Preview](https://github.com/Cap-go/capacitor-camera-preview) - カスタムコントロール付きのネイティブカメラプレビュー
- [Document Scanner](https://github.com/Cap-go/capacitor-document-scanner) - iOSおよびAndroidでドキュメントをスキャンする
- [Audio Recorder](https://github.com/Cap-go/capacitor-audio-recorder) - iOS、Android、Webで音声を録音する
- [Native Audio](https://github.com/Cap-go/capacitor-native-audio) - ネイティブオーディオエンジン用のネイティブプラグイン
- [Audio Session](https://github.com/Cap-go/capacitor-audiosession) - iOSで音声中断やルート変更について通知を受ける
- [Screen Recorder](https://github.com/Cap-go/capacitor-screen-recorder) - デバイスの画面を録画する
- [Video Player](https://github.com/Cap-go/capacitor-video-player) - ネイティブプレイヤーで動画を再生する
- [Video Thumbnails](https://github.com/Cap-go/capacitor-video-thumbnails) - ローカルまたはリモートの動画ファイルから動画のサムネイルを生成する
- [Photo Library](https://github.com/Cap-go/capacitor-photo-library) - 写真ギャラリーをウェブページまたはネイティブスクリーンとして表示する
- [Asset Cache](https://github.com/Cap-go/capacitor-asset-cache) - 大きな画像や動画をローカルに透明にキャッシュする
- [FFmpeg](https://github.com/Cap-go/capacitor-ffmpeg) - CapacitorにFFmpeg APIを公開する
- [IVS Player](https://github.com/Cap-go/capacitor-ivs-player) - Capac及アプリ用のAmazon IVSプレイヤー
- [JW Player](https://github.com/Cap-go/capacitor-jw-player) - jwplayer.comから動画を再生する
- [Mux Player](https://github.com/Cap-go/capacitor-mux-player) - iOSおよびAndroidで動画を再生するネイティブMuxプレイヤーSDK
- [YouTube Player](https://github.com/Cap-go/capacitor-youtube-player) - CapacitorアプリにYouTubeプレイヤーのコントロールを埋め込む
- [Media Session](https://github.com/Cap-go/capacitor-media-session) - デバイスのメディアセッションコントロールを公開する

<a id="storage--files"></a>
### ストレージとファイル
- [Data Storage SQLite](https://github.com/Cap-go/capacitor-data-storage-sqlite) - SQLiteでキー/バリューの文字列ペアを保存
- [Fast SQL](https://github.com/Cap-go/capacitor-fast-sql) - 高パフォーマンスのネイティブSQLiteプラグインで、効率的な同期操作を実現するためのカスタムプロトコル
- [File](https://github.com/Cap-go/capacitor-file) - Cordova FileプラグインAPIと互換性のあるシステム操作
- [File Picker](https://github.com/Cap-go/capacitor-file-picker) - ファイル、画像、動画、ディレクトリを選択
- [File Compressor](https://github.com/Cap-go/capacitor-file-compressor) - PNG、JPEG、WebPフォーマットをサポートする効率的な画像圧縮
- [File Sharer](https://github.com/Cap-go/capacitor-file-sharer) - Android、iOS、Webでファイルの共有と保存
- [Downloader](https://github.com/Cap-go/capacitor-downloader) - バックグラウンドまたはフォアグラウンドでファイルのダウンロード
- [Uploader](https://github.com/Cap-go/capacitor-uploader) - ネイティブにファイルのアップロード
- [Zip](https://github.com/Cap-go/capacitor-zip) - iOS、Android、Webでファイルの圧縮と展開

<a id="location--navigation"></a>
### 位置情報とナビゲーション
- [Background Geolocation](https://github.com/Cap-go/capacitor-background-geolocation) - アプリがバックグラウンドにいるときでも正確な地理位置情報の更新を受信
- [Native Geocoder](https://github.com/Cap-go/capacitor-nativegeocoder) - ネイティブな前向きおよび逆向き地理コード
- [Launch Navigator](https://github.com/Cap-go/capacitor-launch-navigator) - AndroidおよびiOS向けのネイティブルートナビゲーションアプリを起動
- [Mock Location Detector](https://github.com/Cap-go/capacitor-mock-location-detector) - シミュレートされたGPS位置や開発者ツールによるフォーカスを検出

<a id="authentication--security"></a>
### 認証とセキュリティ
- [App Attest](https://github.com/Cap-go/capacitor-app-attest) - Apple App Attest（iOS）およびPlay Integrity（Android）によるデバイス認証
- [Device Integrity](https://github.com/Cap-go/capacitor-device-integrity) - Widevine、Play Integrity、App Attest、DeviceCheckのシグナルを確認
- [App Tracking Transparency](https://github.com/Cap-go/capacitor-app-tracking-transparency) - iOSでのトラッキングにATT認可を要求
- [Native Biometric](https://github.com/Cap-go/capacitor-native-biometric) - AndroidおよびiOS向けのネイティブバイオメトリックAPIにアクセス
- [Persona](https://github.com/Cap-go/capacitor-persona) - iOSおよびAndroidでPersonaの確認プロセスを開始
- [Social Login](https://github.com/Cap-go/capacitor-social-login) - すべてのソーシャルログインを1つのプラグインで実現
- [Passkey](https://github.com/Cap-go/capacitor-passkey) - ネイティブアプリ向けのWebAuthn対応パスキーのシム
- [reCAPTCHA](https://github.com/Cap-go/capacitor-recaptcha) - reCAPTCHA および reCAPTCHA Enterprise のトークンを生成する
- [SSL Pinning](https://github.com/Cap-go/capacitor-ssl-pinning) - Android および iOS での CapacitorHttp を使って HTTPS 証明書をピン留める
- [Verisoul](https://github.com/Cap-go/capacitor-verisoul) - Capacitor アプリ用のフィードバック防止セッション
- [Autofill Save Password](https://github.com/Cap-go/capacitor-autofill-save-password) - ログイン情報をデバイスのパスワードマネージャーに保存するためのプロンプト
- [Persistent Account](https://github.com/Cap-go/capacitor-persistent-account) - ユーザーのアカウント情報を安全に保管する
- [Is Root](https://github.com/Cap-go/capacitor-is-root) - ジャイルブレイク／ルート検出プラグイン

<a id="ui--display"></a>
### UIと表示
- [In App Browser](https://github.com/Cap-go/capacitor-inappbrowser) - 安全なウェブコンテンツを提供するネイティブアプリ内ブラウザ
- [Live Activities](https://github.com/Cap-go/capacitor-live-activities) - iOSのライブアクティビティをCapacitorから管理する
- [Navigation Bar](https://github.com/Cap-go/capacitor-navigation-bar) - Android Lollipop 以降のナビゲーションバーの色を設定する
- [Native Navigation](https://github.com/Cap-go/capacitor-native-navigation) - ネイティブのナビゲーションバー、タブバー、安全領域の処理、WebViewの遷移をサポート
- [Home Indicator](https://github.com/Cap-go/capacitor-home-indicator) - Capacitor アプリ内のホームボタンの表示・非表示を制御する
- [Screen Orientation](https://github.com/Cap-go/capacitor-screen-orientation) - デバイスの向きを制御し、向きロックを回避できるようにする
- [Flash](https://github.com/Cap-go/capacitor-flash) - デバイスのフラッシュライト／トーチを切り替える
- [Keep Awake](https://github.com/Cap-go/capacitor-keep-awake) - デバイスの画面が暗くなるか、睡眠状態に入るのを防ぐ
- [Text Interaction](https://github.com/Cap-go/capacitor-textinteraction) - Capacitor 基盤の iOS アプリでのテキストインタラクションを切り替える
- [Transitions](https://github.com/Cap-go/capacitor-transitions) - Capac-itor アプリ向けのフレームワークに依存しないページ遷移（iOSスタイルのナビゲーション）
- [Native Loader](https://github.com/Cap-go/capacitor-native-loader) - ネイティブアニメーションローダー、透過オーバーレイ、Lottie アセット、WebViewのサイズ変更をサポート
- [Pretty Toast](https://github.com/Cap-go/capacitor-pretty-toast) - Capacitor およびウェブ向けのネイティブアニメーショントースト通知
- [Privacy Screen](https://github.com/Cap-go/capacitor-privacy-screen) - スクリーンショットやアプリ切り替えプレビューでアプリコンテンツを非表示にする
- [Date Picker](https://github.com/Cap-go/capacitor-date-picker) - ネイティブの日付、時刻、日時、年月、範囲選択フォームを提供
- [Printer](https://github.com/Cap-go/capacitor-printer) - ドキュメント、HTML、PDF、画像、ウェブビューを印刷する
- [PDF Generator](https://github.com/Cap-go/capacitor-pdf-generator) - HTML文字列またはURLからPDFファイルを生成
- [Sheets](https://github.com/Cap-go/capacitor-sheets) - フレームワークに依存しないシート、ドレッジ、ダイアログ、オーバーレイの基本要素

<a id="purchases--payments"></a>
### 購入と決済
- [Native Purchases](https://github.com/Cap-go/capacitor-native-purchases) - アプリ内サブスクリプションの簡単実装
- [Pay](https://github.com/Cap-go/capacitor-pay) - iOS（Apple Pay）およびAndroid（Google Pay）でのネイティブ決済をトリガー
- [Stripe Identity](https://github.com/Cap-go/capacitor-stripe-identity) - Stripe Identityで識別を検証
- [Stripe Pay](https://github.com/Cap-go/capacitor-stripe-pay) - Stripeの支払いシート、Apple Pay、Google Pay
- [Stripe Terminal](https://github.com/Cap-go/capacitor-stripe-terminal) - 店頭でのStripe Terminalによる支払い

<a id="communication--messaging"></a>
### 通信とメッセージング
- [Crisp](https://github.com/Cap-go/capacitor-crisp) - 顧客向けメッセージングおよびチャットサポート用のネイティブSDK
- [Incoming Call Kit](https://github.com/Cap-go/capacitor-incoming-call-kit) - Androidのフルスクリーン通知およびiOSのCallKitによるネイティブインコムUI
- [Intercom](https://github.com/Cap-go/capacitor-intercom) - Capacitorアプリ向けの顧客メッセージングSDK統合
- [NFC](https://github.com/Cap-go/capacitor-nfc) - iOSおよびAndroidでのネイティブNFCタグの発見、読み取り、書き込み
- [Bluetooth Low Energy](https://github.com/Cap-go/capacitor-bluetooth-low-energy) - スキャン、接続、読み取り、書き込み、通知をサポートするBLEプラグイン
- [MQTT](https://github.com/Cap-go/capacitor-mqtt) - AndroidおよびiOSでのMQTTブローカーへの接続
- [WiFi](https://github.com/Cap-go/capacitor-wifi) - CapacitorアプリのWiFi接続管理
- [iBeacon](https://github.com/Cap-go/capacitor-ibeacon) - プロキシ検出およびベーコン領域モニタリング
- [Speech Recognition](https://github.com/Cap-go/capacitor-speech-recognition) - 包括的なデバイス内スピーキング認識（リアルタイム部分結果を含む）
- [Speech Synthesis](https://github.com/Cap-go/capacitor-speech-synthesis) - テキストから音声を合成し、言語、声、トーン、速度、音量を完全に制御

<a id="video-calling--real-time"></a>
### ビデオ通話とリアルタイム通信
- [Stream Call](https://github.com/Cap-go/capacitor-streamcall) - getstream.io SDKを用いてCapacitorでの通話機能を実装
- [RealtimeKit](https://github.com/Cap-go/capacitor-realtimekit) - Capacitorアプリ向けのCloudflare Calls統合（会議用の内蔵UIを備える）
- [Twilio Voice](https://github.com/Cap-go/capacitor-twilio-voice) - Twilio Voice SDKをCapacitorに統合
- [Twilio Video](https://capgo.app/plugins/capacitor-twilio-video/) - Twilio Videoのルームにネイティブの音声、カメラ、ルームライフサイクルイベントで参加

<a id="analytics--tracking"></a>
### 分析とトラッキング
- [AdMob](https://github.com/Cap-go/capacitor-admob) - iOSおよびAndroid向けのAdMob SDKのブリッジ
- [AppsFlyer](https://github.com/Cap-go/capacitor-appsflyer) - AppsFlyer向けのアトリビューション、分析、ディープリンク
- [GTM](https://github.com/Cap-go/capacitor-gtm) - Capacitor向けのGoogle Tag Managerプラグイン
- [App Insights](https://github.com/Cap-go/capacitor-appinsights) - Apptopia App Insights SDKのラッパー
- [Contentsquare](https://github.com/Cap-go/capacitor-contentsquare) - Capacitorアプリ向けのモバイル分析SDK統合
- [Facebook Analytics](https://github.com/Cap-go/capacitor-facebook-analytics) - Capac及アプリ向けのMeta/Facebookアプリイベント分析
- [Install Referrer](https://github.com/Cap-go/capacitor-install-referrer) - Google PlayインストールリファラーおよびApple AdServicesによるアトリビューション
- [RudderStack](https://github.com/Cap-go/capacitor-rudderstack) - RudderStack向けの分析、識別、イベントトラッキング

<a id="contacts--health"></a>
### 連絡先とヘルスケア
- [Contacts](https://github.com/Cap-go/capacitor-contacts) - Capacitor APIを用いてデバイス連絡先を操作
- [Calendar](https://github.com/Cap-go/capacitor-calendar) - iOSおよびAndroidでのカレンダーイベントの管理
- [Health](https://github.com/Cap-go/capacitor-health) - Apple HealthKitおよびHealth Connectからのデータとの相互作用

<a id="app-store--market"></a>
### アプリストアとマーケット
- [Native Market](https://github.com/Cap-go/capacitor-native-market) - Google PlayまたはApp Storeへのリンク用のネイティブマーケットプラグイン
- [In App Review](https://github.com/Cap-go/capacitor-in-app-review) - アプリストアの評価やレビューをユーザーに促す機能（アプリ内から）

<a id="android-specific"></a>
### Android固有
- [Usage Stats Manager](https://github.com/Cap-go/capacitor-android-usagestatsmanager) - AndroidのUsageStatsManager SDKの公開
- [Android Age Signals](https://github.com/Cap-go/capacitor-android-age-signals) - Google Play年齢シグナルをアプリに公開
- [Android Inline Install](https://github.com/Cap-go/capacitor-android-inline-install) - Androidのインラインインストール機能をトリガー
- [Android Kiosk](https://github.com/Cap-go/capacitor-android-kiosk) - ランチャー機能を用いてデバイスをキオスクモードにロック
- [Android SMS Retriever](https://github.com/Cap-go/capacitor-android-sms-retriever) - AndroidでのSMS Retrieverおよび電話番号ヒントAPI
- [Intent Launcher](https://github.com/Cap-go/capacitor-intent-launcher) - AndroidおよびiOSでのAndroidインテントの起動とシステム設定画面の開閉

<a id="platform-integrations"></a>
### プラットフォーム統合
- [Supabase](https://github.com/Cap-go/capacitor-supabase) - ネイティブSupabase SDK統合 - 認証、データベース、JWTアクセス
- [Auto](https://github.com/Cap-go/capacitor-auto) - CarPlay および Android Auto の通信
- [Intune](https://github.com/Cap-go/capacitor-intune) - Microsoft Intune MAM の登録、アプリ保護ポリシー、アプリ設定、および MSAL 認証
- [WeChat](https://github.com/Cap-go/capacitor-wechat) - 認証、共有、決済、ミニプログラム向け SDK
- [Watch](https://github.com/Cap-go/capacitor-watch) - Apple Watch との通信（両方向メッセージサポート）
- [Share Target](https://github.com/Cap-go/capacitor-share-target) - 他のアプリから共有コンテンツを受信
- [Widget Kit](https://github.com/Cap-go/capacitor-widget-kit) - iOS のウィジェット、ライブアクティビティ、および共有アプリグループ統合の構築

### Firebase
- [Analytics](https://github.com/Cap-go/capacitor-firebase/blob/main/packages/analytics/README.md) - Capacitor 用 Firebase Analytics
- [App](https://github.com/Cap-go/capacitor-firebase/blob/main/packages/app/README.md) - Capacitor 用 Firebase アプリ
- [App Check](https://github.com/Cap-go/capacitor-firebase/blob/main/packages/appcheck/README.md) - Capacitor 用 Firebase アプリチェック
- [Authentication](https://github.com/Cap-go/capacitor-firebase/blob/main/packages/authentication/README.md) - Capacitor 用 Firebase 認証
- [Crashlytics](https://github.com/Cap-go/capacitor-firebase/blob/main/packages/crashlytics/README.md) - Capacitor 用 Firebase クラッシュリティクス
- [Firestore](https://github.com/Cap-go/capacitor-firebase/blob/main/packages/firestore/README.md) - Capacitor 用 Firebase クラウドフューリット
- [Functions](https://github.com/Cap-go/capacitor-firebase/blob/main/packages/functions/README.md) - Capacitor 用 Firebase クラウドファンクション
- [Messaging](https://github.com/Cap-go/capacitor-firebase/blob/main/packages/messaging/README.md) - Capacitor 用 Firebase クラウドメッセージ（FCM）
- [Performance](https://github.com/Cap-go/capacitor-firebase/blob/main/packages/performance/README.md) - Capacitor 用 Firebase パフォーマンスモニタリング
- [Remote Config](https://github.com/Cap-go/capacitor-firebase/blob/main/packages/remote-config/README.md) - Capacitor 用 Firebase リモート設定
- [Storage](https://github.com/Cap-go/capacitor-firebase/blob/main/packages/storage/README.md) - Capacitor 用 Firebase クラウドストレージ

<a id="utilities"></a>
### ユーティリティ
- [Alarm](https://github.com/Cap-go/capacitor-alarm) - ネイティブアラームの管理
- [Background Task](https://github.com/Cap-go/capacitor-background-task) - iOS および Android での定期バックグラウンドフェッチタスク
- [Env](https://github.com/Cap-go/capacitor-env) - Capacitor 設定に Env var を設定し、実行時に入力する
- [Network Diagnostics](https://github.com/Cap-go/capacitor-network-diagnostics) - Capacitorからネイティブのネットワーク診断を実行する
- [WebView Crash](https://github.com/Cap-go/capacitor-webview-crash) - 回復されたWebViewのクラッシュを検出する
- [WebView Guardian](https://github.com/Cap-go/capacitor-webview-guardian) - バックグラウンドでWebViewが終了したことを検出し、フォアグラウンド時に再起動する
- [WebView Version Checker](https://github.com/Cap-go/capacitor-webview-version-checker) - AndroidのWebViewバージョンを確認し、必要に応じてユーザーにアップデートを促す
- [LLM](https://github.com/Cap-go/capacitor-llm) - CapacitorでローカルにLLMを実行するサポートを追加する

<a id="specialized-hardware"></a>
### 専用ハードウェア
- [Ricoh360 Camera](https://github.com/Cap-go/capacitor-ricoh360-camera-plugin) - Ricoh360カメラ向けのSDK
- [UWB](https://github.com/Cap-go/capacitor-uwb) - iOSおよびAndroidでのUltra-Wideband距離測定
- [Zebra DataWedge](https://github.com/Cap-go/capacitor-zebra-datawedge) - Zebra DataWedgeプロファイル、通知、クエリ、ソフトスキャンの管理

<a id="transistor-software-plugins"></a>
## [Transistor Softwareプラグイン](https://www.transistorsoft.com/)
Plugins owned by [Transistor Software plugins](https://github.com/transistorsoft) and maintained by [@christocracy](https://github.com/christocracy).

- [Background Geolocation](https://github.com/transistorsoft/capacitor-background-geolocation) - iOSおよびAndroid向け、最も高度なバックグラウンド位置追跡および地理フェンスモジュール。バッテリー効率を考慮した動き検出インテリジェンスを備える
- [Background Fetch](https://github.com/transistorsoft/capacitor-background-fetch) - iOSおよびAndroidでのバックグラウンドにおける定期的なコールバック
- [Background Geolocation Firebase](https://github.com/transistorsoft/capacitor-background-geolocation-firebase) - Capacitor Background Geolocation向けのFirebaseアダプタ


<a id="aparajita-plugins"></a>
## Aparajitaプラグイン
Plugins written and maintained by [@aparajita](https://github.com/aparajita).

- [Biometric Auth](https://github.com/aparajita/capacitor-biometric-auth) - iOSおよびAndroidでのネイティブなバイオメトリック認証APIへの簡単なアクセス
- [Dark Mode](https://github.com/aparajita/capacitor-dark-mode) - ウェブ、iOSおよびAndroidでの一貫性と信頼性の高いダークモードサポート
- [Logger](https://github.com/aparajita/capacitor-logger) - ウェブおよびネイティブIonic/Capac及アプリのログ記録を改善する
- [Secure Storage](https://github.com/aparajita/capacitor-secure-storage) - Capacitorアプリ向けのセキュアで柔軟なストレージ。iOSのKeychainおよびAndroidのKeystoreをサポート。iOSでデバイス間のKeychain同期をサポートする
- [Silent Notifications](https://github.com/aparajita/capacitor-ios-silent-notifications) - iOSでの静的（リモート）通知サポート

<a id="other-plugins"></a>
## その他のプラグイン

独立開発のプラグインはここにリストされています。

- [Apple Pay](https://github.com/fresha/capacitor-plugin-applepay) - アプリ内でApple Pay決済を受ける
- [App Tracking Transparency](https://github.com/mahnuh/capacitor-plugin-app-tracking-transparency) - ユーザーがアプリ関連データにアクセスできるように認可を要求する（iOS専用）

- [Brother Print](https://github.com/rdlabo-team/capacitor-brotherprint) - iOSおよびAndroid向けのネイティブなBrotherプリントSDKの実装
- [Biometric](https://github.com/epicshaggy/capacitor-native-biometric) - バイオメトリックを使用してデバイス所有者の存在を確認またはユーザー認証を行う
- [capacitor-plugin-camera](https://github.com/xulihang/capacitor-plugin-camera) - 画像処理タスク（バーコード読み取りやOCRなど）を簡単に実行できるように設計されたカメラプラグイン。別のプラグインで反射を使ってカメラフレームを取得できるため、ネイティブパフォーマンスを享受できる。
- [Dark mode](https://github.com/micahlt/ionicCapacitorDarkMode) - システムのダークモードの変更を監視する。
- [Data Storage SQLite](https://github.com/jepiqueau/capacitor-data-storage-sqlite) - iOS、AndroidおよびElectronプラットフォームではSQLite、WebプラットフォームではIndexedDBに限って、文字列型のみのシンプルなデータを永続的に保存できる。
- [Document Scanner](https://github.com/websitebeaver/capacitor-document-scanner) - ドキュメント（ノート、宿題、ビジネスカード、領収書、または矩形形状のものなど）をスキャンする。
- Dynamsoft
	- [Barcode Reader](https://github.com/xulihang/capacitor-plugin-dynamsoft-barcode-reader) - Dynamsoft Barcode Readerを使用してバーコードおよびQRコードをスキャンする。
	- [Camera Preview](https://github.com/tony-xlh/capacitor-plugin-camera-preview) - Dynamsoft Camera Enhancerを使用してカメラにアクセスする。
	- [Document Normalizer](https://github.com/tony-xlh/capacitor-plugin-dynamsoft-document-normalizer) - Dynam及Document Normalizerを使用してドキュメントをスキャンする。
	- [Label Recognizer](https://github.com/tony-xlh/capacitor-plugin-dynamsoft-label-recognizer) - パスポートなどのラベル上のテキスト（例：MRZ）を認識するためのDynamsoft Label Recognizerを使用する。
- [Purchases](https://github.com/RevenueCat/purchases-capacitor) - RevenueCatを活用し、アプリ内購入やサブスクリプションを簡単に実行できる。
- [Email composer](https://github.com/EinfachHans/capacitor-email-composer) - Capacitorアプリ内でネイティブなE-Mail作成者を開く。
- [Facebook Analytics](https://github.com/SpellChucker/capacitor-plugin-facebook-analytics) - アプリの使用状況やイベントを追跡するためのアナリティクス統合。
- Firebase
    - [AppCheck](https://github.com/mattmilan-dev/capacitor-firebase-appcheck) - ネイティブAppCheckトークンの使用を可能にする。
    - [Dynamic Links](https://github.com/Pantrist-dev/capacitor-firebase-dynamic-links) - Firebase Dynamic Links。
    - [Push](https://github.com/EinfachHans/capacitor-firebase-push) - このプラグインはFirebaseプッシュメッセージに使用される。データをサポートする。
- [File selector](https://github.com/hinddeep/capacitor-file-selector) - Android/iOSデバイスおよびウェブからファイルを選択できる。
- Google
    - [Auth](https://github.com/CodetrixStudio/CapacitorGoogleAuth) - Capacitor用のGoogle認証プラグイン。
    - [Availability](https://github.com/cartona/capacitor-google-play-availability) - Google Playサービスがインストール・有効になっているかを確認し、デバイス上でGoogle Playサービスの有効化を要求する。
    - [Fit](https://github.com/Ad-Scientiam/capacitor-google-fit) - Google Fitからデータを取得する。
    - [MlKit Language](https://github.com/hemangsk/capacitor-mlkit-language) - 文字列の言語を識別する。
    - [MlKit Vision](https://github.com/trancee/capacitor-google-mlkit-vision/) - 画像内の顔を検出し、顔の特徴点を特定し、検出された顔の輪郭を取得する。
- [Healthkit](https://github.com/Ad-Scientiam/capacitor-healthkit) - ヘルスケイクからデータを取得する
- [Jitsi](https://github.com/calvinckho/capacitor-jitsi-meet) - 無料でオープンソースのJitsiビデオプラットフォームを用いてビデオ通話を行う
- [Lightsensor](https://github.com/Elvincth/capacitor-plugin-lightsensor) - デバイス上の照度レベルを取得する
- [Native Audio Player](https://github.com/smartcompanion-app/native-audio-player) - バックグラウンドで再生を続けるオーディオを再生し、プレイヤーはシステムコントロールに表示され、スピーカー／イヤホンの出力が切り替え可能になる
- [Native settings](https://github.com/RaphaelWoude/capacitor-native-settings) - ネイティブ設定画面を開く
- NativeScript
    - [NativeScript Capacitor](https://github.com/NativeScript/capacitor) - CapacitorにネイティブAPIを提供する
    - [Augmented Reality](https://github.com/EddyVerbruggen/nativescript-ar) - AR体験を追加する
- [Navigation bar](https://github.com/hugotomazi/navigation-bar) - ナビゲーションバーの表示/非表示を操作および制御する
- [Oauth2](https://github.com/moberwasserlechner/capacitor-oauth2) - 汎用OAuth 2クライアントプラグイン。SDKを使用するのではなく、自分でOAuthパラメータを設定できるようにする
- [Playlist](https://github.com/phiamo/capacitor-plugin-playlist) - ネイティブなオーディオプレイリスト、バックグラウンドサポート、ロックスクリーン制御のサポート
- [PQ Secure Storage](https://github.com/jimcase/capacitor-pq-secure-storage) - iOSのSecure EnclaveおよびAndroidのKeystoreに保管された鍵を用いた後量子署名（ML-DSA）および鍵包み（ML-KEM）と、バイオメトリックゲート付きのセキュアストレージ
- [Print](https://github.com/leoruhland/capacitor-print) - WebViewのコンテンツを接続されたプリンターに送信する
- [Rate app](https://github.com/Nodonisko/capacitor-rate-app) - ユーザーがAndroidおよびiOSのネイティブアプリ評価ダイアログを使ってアプリを評価できるようにする
- [Read sms](https://github.com/Ayush-Rajniwal/cap-read-sms) - ユーザーのSMSを許可を得て読み取る
- [Safe Area](https://github.com/AlwaysLoveme/capacitor-plugin-safe-area) - AndroidおよびiOSでのSafeArea情報を取得する
- [Screenshot](https://github.com/ludufre/capacitor-screenshot) - 現在のビューのスクリーンショットを撮る
- [Send intent](https://github.com/tavosansal/capacitor-plugin-send-intent) - Androidの共有メニューまたは共有シートを通じて他のアプリがデータをあなたのCapacitorアプリに送信した際に、JavaScriptアプリケーションにリスナーを公開する
- [Sentry](https://github.com/getsentry/sentry-capacitor) - Capac及アプリへのSentryによるエラートラッキングおよびパフォーマンスモニタリングを追加する
- [Shamir](https://github.com/vault12/capacitor-shamir) - シャイマーの秘密共有暗号アルゴリズム
- [Stripe terminal](https://github.com/eventOneHQ/capacitor-stripe-terminal) - 対面決済処理用のTerminalプラグイン
- [Sprig](https://github.com/crabbydavis/sprig) - 一括製品研究プラットフォーム
- [Square Payments](https://github.com/jbrown0824/capacitor-square-payments) - CapacitorにSquare Paymentsを有効化
- [Sumup](https://github.com/rbedemann/capacitor-sumup-plugin) - カード決済処理用モバイルSDK
- [UDP](https://github.com/brugsel/capacitor-udp) - IPv6およびIPv4、マルチキャストおよびブロードキャストをサポート
- [Video player](https://github.com/jepiqueau/capacitor-video-player) - iOS、Android、WebおよびElectronプラットフォームでフルスクリーンで動画を再生
- [Zalo login](https://github.com/kmasterycsl/capacitor-zalo-login) - ベトナムのソーシャルネットワーク向け認証プラグイン
- [Photo library](https://github.com/diiiary/capacitor-plugin-photo-library) - システムアルバムからすべての画像を取得
- [WebSocket Client](https://github.com/OrdinarySF/capacitor-websocket-client) - リアルタイム2方向通信用ネイティブクライアント
- [Bing Translator](https://github.com/sabereen/capacitor-bing-translator) - [Bing Translator](https://bing.com/translator)を使用するシンプルで**無料**のAPI
- [Capacitor Calendar](https://github.com/ebarooni/capacitor-calendar) - カレンダーおよびリマインダーとの相互作用用プラグイン
- [Capacitor voice recorder](https://github.com/tchvu3/capacitor-voice-recorder) - 簡単な音声録音用プラグイン
- [capacitor-app-attest](https://github.com/ludufre/capacitor-app-attest) - Apple AttestとIonic Capacitorの統合
- [capacitor-thermal-state](https://github.com/isaforge/capacitor-thermal-state) - iOSおよびAndroidでデバイスの熱状態（過熱検出）をモニタリング
- [capacitor-live-activities](https://github.com/ludufre/capacitor-live-activities) - iOS 16.2以降でLive Activitiesを使用するCapacitorプラグイン
- [capacitor-lottie-splash-screen](https://github.com/ludufre/capacitor-lottie-splash-screen) - Lottieアニメーションをスプラッシュスクリーンとして使用するCapacitorプラグイン


<a id="cordova-plugins"></a>
## Cordovaプラグイン

<a id="compatible"></a>
### 互換
This list will be upgraded soon

- [NPM search](https://www.npmjs.com/search?q=cordova-plugin+capacitor)

<a id="incompatible"></a>
### 非互換

- [`cordova-plugin-add-swift-support`](https://github.com/akofman/cordova-plugin-add-swift-support) (不要、CapacitorにSwiftサポートが内蔵)
- [`cordova-plugin-admobpro`](https://github.com/floatinghotpot/cordova-admob-pro) ([see details](https://github.com/ionic-team/capacitor/issues/1101))
- [`cordova-plugin-braintree`](https://github.com/Taracque/cordova-plugin-braintree) ([see details](https://github.com/ionic-team/capacitor/issues/1415))
- [`cordova-plugin-code-push`](https://github.com/microsoft/code-push) ([see details](https://github.com/microsoft/code-push/issues/615))
- [`cordova-plugin-compat`](https://github.com/apache/cordova-plugin-compat) (不要)
- [`cordova-plugin-console`](https://github.com/apache/cordova-plugin-console) (不要、コンデンサが自身で処理しています)
- [`cordova-plugin-crosswalk-webview`](https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview) (コンデンサはWebViewの変更を許可しません)
- [`cordova-plugin-fcm`](https://github.com/fechanique/cordova-plugin-fcm) ([see details](https://github.com/ionic-team/capacitor/issues/584))
- [`cordova-plugin-firebase`](https://github.com/arnesson/cordova-plugin-firebase) ([see details](https://github.com/ionic-team/capacitor/issues/815))
- [`cordova-plugin-ionic-keyboard`](https://github.com/ionic-team/cordova-plugin-ionic-keyboard) (不要、コンデンサが自身で処理しています)
- [`cordova-plugin-ionic-webview`](https://github.com/ionic-team/cordova-plugin-ionic-webview) (不要、コンデンサがWKWebViewを使用しています)
- [`cordova-plugin-music-controls`](https://github.com/homerours/cordova-music-controls-plugin) (ビルド失敗を引き起こすためスキップ)
- [`cordova-plugin-qrscanner`](https://github.com/bitpay/cordova-plugin-qrscanner) ([see details](https://github.com/ionic-team/capacitor/issues/1213))
- [`cordova-plugin-splashscreen`](https://github.com/apache/cordova-plugin-splashscreen) (不要、コンデンサが自身で処理しています)
- [`cordova-plugin-statusbar`](https://github.com/apache/cordova-plugin-statusbar) (不要、コンデンサが自身で処理しています)
- [`cordova-plugin-wkwebview-engine`](https://github.com/apache/cordova-plugin-wkwebview-engine) (不要、コンデンサがWKWebViewを使用しています)
- [`cordova-plugin-googlemaps`](https://github.com/mapsplugin/cordova-plugin-googlemaps) (iOSでビルド失敗を引き起こすためiOSのみスキップ)


<a id="tools"></a>
## ツール

- [Docgen](https://github.com/ionic-team/capacitor-docgen) - Capacitorプラグイン用のドキュメント、Readme、MarkdownおよびJSON生成ツール。
- [Plugin generator](https://github.com/ionic-team/create-capacitor-plugin) - 新しいCapacitorプラグインを作成します。
- [Assets](https://github.com/ionic-team/capacitor-assets) - ローカルなCapacitorアイコン／スプラッシュスクリーンリソース生成ツール。
- [Tailwind Capacitor](https://github.com/Cap-go/tailwind-capacitor) - Tailwind向けのヘルパープラグインのコレクション。安全エリアクラスやその他のユーティリティを追加します。
- [Capacitor safe area simulator](https://chromewebstore.google.com/detail/capacitor-safe-area-simul/ddaaodgcccedhjbjeollookhompnlfhi) - ブラウザ内で安全領域をシミュレートするChrome拡張機能（Ionic、Knsta UIおよびTailwind Capacitorに対応）
- [lazycap](https://github.com/icarus-itcs/lazycap) - Capacitor開発用のターミナルダッシュボード。デバイス管理、ビルド、リアルタイムリロード、デバッグ、MCPによるAIアシスタント統合を提供。
- [Capgo Skills](https://capgo.app/skills/) - あなたのCapacitorアプリの互換性とスキルを確認します。
- [Capgo Security Scanner](https://capgo.app/security-scanner/) - あなたのCapacitorアプリのセキュリティ脆弱性をスキャン
- [Capgo Semver Tester](https://capgo.app/semver_tester/) - アプリのセマンティックバージョニング互換性をテストします。
- [Capstart](https://github.com/AdrienADV/capstart) - React、Supabase、shadcn/uiでモバイルアプリを作成するCLIおよびスタートアップツールキット、または既存のウェブフレームワークにネイティブプロジェクトを追加するためのツール。
- [AASA Tester](https://aasa-tester.capgo.app) - Appleアプリサイトアソシエーション（AASA）の設定をテストする
- [CLI](https://github.com/Cap-go/CLI) - ライブアップデートバンドルおよびネイティブクラウドビルドのアップロードと管理
- [Live Update Action](https://github.com/Cap-go/live-update-action) - ライブアップデートをデプロイするGitHubアクション
- [Docker](https://github.com/Cap-go/docker-capacitor) - ネイティブアプリのビルド用のイメージ
- [Native Builds](https://capgo.app/native-build/) - クラウド上でiOSおよびAndroidのバイナリをコンパイル・署名
- [Android Keystore Generator](https://capgo.app/tools/android-keystore-generator/) - ブラウザ上でアプリ署名用のAndroidキーストアを生成
- [iOS Certificate Generator](https://capgo.app/tools/ios-certificate-generator/) - ブラウザ内でiOS署名証明書を生成する
- [iOS UDID Finder](https://capgo.app/tools/ios-udid-finder/) - iPhoneまたはiPadのUDIDを検索する
- [Vite plugin](https://github.com/Cap-go/vite-capacitor) - ネイティブプラットフォームの設定をVite開発サーバーのURLと同期
- [n8n nodes](https://github.com/Cap-go/n8n-nodes-capgo) - n8nワークフローからライブアップデートおよびネイティブビルドを自動化
- [Standard Version](https://github.com/Cap-go/standard-version-for-capacitor) - アプリの自動バージョン管理

<a id="helpers"></a>
## ヘルパー

- [vue-capacitor-haptics](https://github.com/benoitlahoz/vue-capacitor-haptics) - Capacitor Hapticsプラグイン（可合成＋ディレクティブ）のVue 3ラッパー。Ionic-Vueアプリにハプティックフィードバックを追加するための使いやすいインターフェースを提供する

<a id="learning"></a>
## 学習資料

カパシターラーニングの場所

<a id="official-guides"></a>
### 公式ガイド

- [How Capacitor Works](https://capacitorjs.com/blog/how-capacitor-works) - Capac及は現代的なウェブアプリをパッケージ化し、iOS、Android、PWAで実行可能にする
- [Creating Plugins](https://capacitorjs.com/docs/plugins/creating-plugins) - このガイドは、npmに公開される共有可能なCapacitorプラグインを作成するためのスタートをサポートします
- [Creating Splash Screens and Icons](https://capacitorjs.com/docs/guides/splash-screens-and-icons) - cordova-resを使用してネイティブプロジェクト用のリソース画像を生成する
- [App Deployment and Realtime Updates](https://capacitorjs.com/docs/guides/deploying-updates) - アプリストア経由でCapacitorアプリをリモートで更新する
- [CI/CD for Capacitor Apps](https://capacitorjs.com/docs/guides/ci-cd) - Capacitorアプリ開発プロセスにモバイルCI/CDを導入する
- [Data Storage in Capacitor](https://capacitorjs.com/docs/guides/storage) - Capacitorで小規模から大規模のデータを保存する
- [Security Best Practices for Capacitor](https://capacitorjs.com/docs/guides/security) - あなたのCapacitorアプリにおけるセキュリティベストプラクティス
- [Using Push Notifications with Firebase](https://capacitorjs.com/docs/guides/push-notifications-firebase) - Firebase Cloud MessagingがiOSおよびAndroidで正常に動作する方法を学ぶ
- [Saving Plugin Calls](https://capacitorjs.com/docs/core-apis/saving-calls) - Capacitorでプラグイン呼び出しを保存する方法
- [Mocking Capacitor Plugins](https://capacitorjs.com/docs/guides/mocking-plugins) - Capacitorプラグインのためのモックオブジェクトを作成する方法
- [Build Mobile Apps with Tailwind CSS, Next.js, Ionic Framework, and Capacitor](https://capacitorjs.com/blog/mobile-apps-with-tailwind-css-nextjs-ionic-and-capacitor) - レスポンス性の高いウェブアプリを構築するための非常に人気のあるスタックは、VercelによるTailwind CSSとNext.jsです

<a id="crash-courses"></a>
### 集中講座

- [Capacitor Crash Course](https://www.udemy.com/course/capacitor-crash-course/) - Simon GrimmによるCapacitorとIonicの使い方を学ぶ

<a id="community-tutorials"></a>
### コミュニティチュートリアル


- [Adding Icons & Splash Screens to Capacitor](https://www.joshmorony.com/adding-icons-splash-screens-launch-images-to-capacitor-projects/) - アイコンおよびスプラッシュスクリーンアセットを生成する
- [Capacitor Workflow in an Ionic Application](https://www.youtube.com/watch?v=oXbRcpsytGQ) - CapacitorをIonicアプリで使用する際の基本的なワークフローをカバーする
- [Creating a Local Plugin](https://www.joshmorony.com/running-custom-native-ios-code-in-ionic-with-capacitor/) - CapacitorでカスタムネイティブiOSコードを実行する
- [Publishing Capacitor Plugin on NPM](https://www.joshmorony.com/publishing-a-custom-ios-capacitor-plugin-on-npm/) - Capacitor CLI を使って、独立した Capacitor プラグインを構築・公開する。
- [Do Capacitor applications are native ?](https://www.joshmorony.com/is-an-ionic-application-native/) - Capacitor アプリケーションを「非ネイティブ」と呼ぶのは誤ったかつ混乱を招く表現であることを示す。
- [Appcenter migration](https://capgo.app/blog/appcenter-migration) - Microsoft App Center から Capgo へ移行するための、数少ない簡単なステップ。
- [Update app seamlessly](https://capgo.app/blog/update-your-capacitor-apps-seamlessly-using-capacitor-updater) - アプリに Capacitor-updater をセットアップし、ユーザーへの更新をスムーズに実行する。
- [Automatic build and release](https://capgo.app/blog/automatic-build-and-release-with-github-actions) - GitHub Actions を無料で利用して、main ブランチにプッシュしたたびにアプリをデプロイできる CI/CD パイプラインを作成する。
- [The Push Notifications Guide](https://capgo.app/blog/ionic-capacitor-push-notifications-firebase/) - iOSおよびAndroidでのFirebaseによるプッシュ通知の統合
- [OAuth2 in 5 steps](https://capgo.app/blog/5-steps-to-implement-oauth2-in-capacitor-apps/) - iOS、Android、ウェブでOAuth 2.0とPKCEを実装
- [Social Login](https://capgo.app/blog/capacitor-social-login-release/) - Google、Apple、Facebookによるネイティブフローでのサインイン
- [Secure token storage](https://capgo.app/blog/secure-token-storage-best-practices-for-mobile-developers/) - デバイス上での認証情報とセッショントークンを安全に保管
- [CI/CD pipeline setup](https://capgo.app/blog/capacitor-cicd-pipeline-setup-guide/) - ビルド、テスト、ライブアップデートのデプロイを自動化
- [OTA updates in CI/CD](https://capgo.app/blog/capacitor-ota-updates-cicd-integration-guide/) - パイプラインからオーバーアイアップデートを配信

<a id="books"></a>
### 書籍

- [Building cross platform app with Capacitor](https://go.ionic.io/capacitor) - クロスプラットフォーム開発への新しいアプローチ。

<a id="case-study"></a>
### 導入事例

- [Burger King](https://ionic.io/resources/articles/burger-king-design-system) - バーグルークがモバイル向けに設計システムを導入した方法。
- [Capacitor vs Cordova](https://ionic.io/resources/articles/capacitor-vs-cordova-modern-hybrid-app-development) - このガイドは Capacitor についての概要と、Cordova との比較を提供する。
- [Native React Apps Without React Native](https://capacitorjs.com/blog/native-react-apps-without-react-native) - React Native はウェブ環境ではないため、チームがウェブベースの React を使ってネイティブアプリをデプロイすることは不可能である。Capacitor ではそうしたことが可能になる。

<a id="convert-a-web-app"></a>
## ウェブアプリの変換

既存のウェブアプリから公開されたモバイルアプリへの移行手順をカバーするチュートリアル

- [Transform a PWA into a native app](https://capgo.app/blog/transform-pwa-to-native-app-with-capacitor/) - iOS および Android 用のプログレッシブウェブアプリをパッケージ化する
- [Turn a web app into a mobile app](https://capgo.app/blog/how-easy-is-it-to-make-web-app-into-mobile-app-with-capacitor/) - ウェブアプリをラップしてストア審査を通過させるために必要なこと
- [Convert a Lovable app to iOS and Android](https://capgo.app/blog/transform-lovable-dev-app-to-mobile-with-capacitor/) - Lovable からエクスポートし、Capacitor でラップして署名済みバイナリを配布する
- [Build iOS apps from Windows](https://capgo.app/blog/build-ios-app-from-windows-capacitor-capgo-build/) - Mac なしで TestFlight へのコンパイル、署名、提出を行う。

<a id="videos"></a>
## 動画

- [Ionic & Capacitor for Building Native Mobile Apps](https://www.youtube.com/watch?v=K7ghUiXLef8) - freeCodeCampによる初心者向け完全コース
- [From React Web to Native Mobile App](https://www.youtube.com/watch?v=IwHt_QpIa8A) - シモン・グリム
- [How to Build a Native App from Angular Projects](https://www.youtube.com/watch?v=V2Wn2JROUEo) - シモン・グリム
- [Building a Native Mobile App with Next.js](https://www.youtube.com/watch?v=xQKtDgJXrlM) - シモン・グリム
- [How To Create A Mobile App Using Vite, Vue and Ionic](https://www.youtube.com/watch?v=K_OwSHPxT-A) - アーロン・サウスウェル
- [Build a Mobile App Fast! React + Tailwind](https://www.youtube.com/watch?v=PPXktTJXMPE) - アーロン・サウスウェル
- [Building Modern Angular Apps with Ionic](https://www.youtube.com/watch?v=tbrJJkSYQ04) - シモン・グリム
- [How to Setup Deep Links (iOS & Android)](https://www.youtube.com/watch?v=tAQwllZSQD8) - シモン・グリム
- [How to Create Background Tasks](https://www.youtube.com/watch?v=SMW1FQz3Yrc) - シモン・グリム
- [The Ionic Image Guide (Capture, Store & Upload)](https://www.youtube.com/watch?v=fU8uM5oU1wY) - シモン・グリム
- [Cross-Platform Development with Mike Hartington](https://www.youtube.com/watch?v=73YWZ1G_DX4) - この Dot Media。

<a id="demo-apps"></a>
## デモアプリ

- [capacitor-testapp](https://github.com/ionic-team/capacitor-testapp) - Capacitor TestApp は、Capacitor および公式プラグインの新機能開発やバグ修正の検証に使用される。
- [capacitor-updater-plugin-demo](https://github.com/Cap-go/demo-app) - OTA 更新の使用を示すシンプルな Ionic Vue アプリ。
- [vue-data-storage-sqlite-app-starter](https://github.com/Cap-go/vue-data-storage-sqlite-app-starter) - SQLite キー/バリューストレージ用の Vue スターター
- [react-data-storage-sqlite-app-starter](https://github.com/Cap-go/react-data-storage-sqlite-app-starter) - SQLite キー/バリューストレージ用の React スターター

<a id="apps-built-with-capacitor"></a>
## Capacitorで構築されたアプリ

Capacitorの使用方法が公開されている生産用アプリ

- [AAA](https://ionic.io/resources/case-studies/american-automobile-association) - アメリカ自動車協会のメンバーサービスアプリ
- [BBC Games](https://ionic.io/resources/case-studies/bbc-games) - BBC が開発した子供向けゲームが、Capac及でラップされた PWA として配布されている。
- [Bestinvest](https://ionic.io/resources/case-studies/bestinvest) - 既存のウェブアプリを iOS および Android 用にラップした投資プラットフォーム。
- [DayClocks Agenda](https://ionic.io/resources/case-studies/dayclocks) - Cordovaから移行したファミリーアジェンダアプリ
- [Found](https://found.com/engineering/migrating-from-cordova-to-capacitor) - 小規模事業者向けの銀行アプリで、Cordova への移行に関するエンジニアの記述。
- [Komed Health](https://ionic.io/resources/case-studies/komed) - 病院向けの臨床コミュニケーションアプリ
- [MyBlock](https://ionic.io/resources/case-studies/hrblock) - H&R Blockの税務準備アプリ
- [Spreekuur.nl](https://ionic.io/resources/case-studies/topicus) - トピクスによるオランダの医療相談アプリ
- [YesHelp](https://ionic.io/resources/case-studies/yeshelp) - iOSおよびAndroid用の社会支援アプリ
- [Ionic case studies](https://ionic.io/resources/case-studies) - Ionicチームが発表したさらに多くのケーススタディ

<a id="related-lists"></a>
## 関連リスト

- [Alexintosh/Awesome-Ionic](https://github.com/Alexintosh/Awesome-Ionic) - Ionic リソースのキュレーションリスト。
- [Cap-go/awesome-ionic](https://github.com/Cap-go/awesome-ionic) - Ionic Framework リソースのキュレーションリスト。

<a id="community"></a>
## コミュニティ

Capacitorについて議論できる場所

- [Discord](https://discord.com/invite/UPYYRhtyzp) - 公式Discordコミュニティ
- [Forum](https://forum.ionicframework.com/c/capacitor) - 公式フォーラムコミュニティ。
- [Reddit](https://reddit.com/r/capacitor) - 公式のRedditコミュニティ。
- [Stack Overflow](https://stackoverflow.com/tags/capacitor) - 公式のStack Overflowコミュニティ。
- [Proposal](https://github.com/capacitor-community/proposals) - プラグインおよびプラットフォームの要望に関する公式リポジトリ。

<a id="freelancers"></a>
## フリーランサー

- [Adrien](https://book.capgo.app/adrien/) - Capstart（CapacitorおよびCapgo用の最良のテンプレート）の開発者。パートタイム開発者。
- [Jordan](https://book.capgo.app/jordan/) - 複数のモバイルアプリおよびCapgoの開発者。パートタイム開発者。
- [Capgo consulting](https://capgo.app/consulting/) - このリストおよびCapgoのリアルタイム更新システムと150以上のプラグインの開発者。

<a id="contributing"></a>
## コントリビューション

ご寄付を歓迎！ [contribution guidelines](https://github.com/riderx/awesome-capacitor/blob/375e76cd207f8af0c642a39023fdf161f5d5ae2e/contributing.md) を読んでから始めましょう。

<a id="author"></a>
## 作者

<a href="https://capgo.app/">Capgo — Live updates for capacitor</a>
