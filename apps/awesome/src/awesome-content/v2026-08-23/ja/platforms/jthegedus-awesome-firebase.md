---
title: "jthegedus/awesome-firebase"
description: "jthegedus/awesome-firebase の正規スナップショット"
licenseSource: "github-jthegedus-awesome-firebase-readme-md"
---


<div align="center">



# Awesome Firebase [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) ![Lint Awesome List](https://github.com/jthegedus/awesome-firebase/workflows/lint/badge.svg)



インターネット上で公開されている Firebase のドキュメント、講演、ツール、サンプル、記事を集めた、最も**最新の**リストです。



<a href="https://firebase.google.com/docs/" target="_blank" rel="noopener noreferrer">
  <img src="https://raw.githubusercontent.com/jthegedus/awesome-firebase/5055b341119af42077ee6e9064b136a04fdd79b0/images/firebase-services.gif" />
</a>



翻訳版: [🇬🇧 en](https://github.com/jthegedus/awesome-firebase/blob/5055b341119af42077ee6e9064b136a04fdd79b0/readme.md) · [🇰🇷 ko](https://github.com/jthegedus/awesome-firebase/blob/5055b341119af42077ee6e9064b136a04fdd79b0/readme-ko.md) · [🇷🇺 ru](https://github.com/jthegedus/awesome-firebase/blob/5055b341119af42077ee6e9064b136a04fdd79b0/readme-ru.md)

[Firebase](https://firebase.google.com) は [Google Cloud Platform](https://cloud.google.com/products) 上に構築されたアプリ開発プラットフォームで、各種サービスとクロスプラットフォーム SDK を提供します。

</div>



<a id="contents"></a>
## 目次

- [注目の新着](#featured-new-releases)
- [公式ドキュメントとクイックスタート](#official-docs--quickstarts)
- [Firebase Extensions](#firebase-extensions)
- [Web](#web)
- [モバイル](#mobile)
- [ゲーム](#games)
- [サーバーサイド（Cloud Functions、BigQuery など）](#server-side-cloud-functions-bigquery-etc)
- [CLI とエディター](#cli--editor)
- [その他](#other)
- [フォロー](#follow)

**凡例**: 📝 ブログ記事 · 💡 サンプル · 📖 ドキュメント · 🔌 ライブラリ · 🔧 ツール · 📹 講演／動画 · 🔊 ポッドキャスト



<a id="featured-new-releases"></a>
## 注目の新着

- 🔧 [(Unofficial) Firebase Admin SDK for PHP](https://github.com/kreait/firebase-php) - Firebase Admin PHP SDK は、PHP でサーバーまたはクラウドなどの信頼できる環境から Firebase サービスにアクセスできるようにします。
- 📖 [App Check](https://firebase.google.com/docs/app-check) - バックエンドリソースから、請求詐欺やフィッシングなどの悪用を防ぎます。
- 📖 [Firestore Data Bundles](https://firebase.google.com/docs/firestore/bundles) - Data Bundles は、CDN キャッシュに使用される静的クエリ結果で、最初のページ読み込みを高速化します。
- 📖 [Modular Web SDK (v9)](https://firebase.google.com/docs/web/learn-more#modular-version) - 必要に応じてのみインポートすることで、SDK のサイズを最大 80% まで削減できます。

<a id="official-docs--quickstarts"></a>
## 公式ドキュメントとクイックスタート

- 📖 [Firebase Documentation](https://firebase.google.com/docs) - Firebase の公式ドキュメント。
- 🔧 [Firebase Status Dashboard](https://status.firebase.google.com) - このページは、Firebase に含まれるサービスの状態情報を提供します。
- 💡 [Firebase Quickstarts](https://github.com/firebase?utf8=%E2%9C%93&q=quickstart&type=&language=) - 公式 Firebase クイックスタート。
- 💡 [Google Codelabs | Firebase](https://codelabs.developers.google.com/?cat=Firebase) - Google デベロッパーのコードラボは、チュートリアル形式の実際のコーディング体験を提供します。
- 📖 [Firebase for Games](https://firebase.google.com/games) - Firebase for Games の新規ページで、ゲーム開発者向けの Firebase／Google リソースへのリンクを提供します。

<a id="firebase-extensions"></a>
## Firebase Extensions

- 🔧 [Firebase Extensions](https://firebase.google.com/products/extensions) - Firebase Extensions は、アプリに追加機能を提供し、独自に調査・開発・デバッグを行う必要がありません。
- 🔧 [Experimental Firebase Extensions](https://github.com/FirebaseExtended/experimental-extensions) -  Firebase が開発した新しい拡張機能のラボ。
- 🔧 [Stripe Extensions](https://github.com/stripe/stripe-firebase-extensions) - 公式 Stripe サブスクリプションおよび請求書拡張機能。
- 🔧 [MessageBird Extensions](https://github.com/messagebird/firestore-send-msg) - 公式 MessageBird 拡張機能で、MessageBird Conversations API を使ってメッセージを送信できます。
- 🔧 [Algolia Extensions](https://github.com/algolia/firestore-algolia-search) - 公式 Algolia 拡張機能で、Cloud Firestore の全文検索を Algolia で実現できます。
- 🔧 [Mailchimp Extensions](https://github.com/mailchimp/Firebase) - 公式 Mailchimp 拡張機能。Firebase Authentication のイベントを同期し、Mailchimp のメンバータグ、マージフィールド、メンバーイベントを作成できます。
- 🔧 [Typesense Extension for Full-Text Search](https://github.com/typesense/firestore-typesense-search) - Firestore に全文検索を追加する公式 Typesense 拡張機能。データを [Typesense](https://github.com/typesense/typesense) に同期し、Algolia のオープンソース代替として利用できます。

<a id="web"></a>
## Web

- 🔌 [Firestore Lite](https://github.com/samuelgozi/firebase-firestore-lite) - ブラウザ向けの軽量Cloud Firestoreライブラリ。
- 🔌 [SvelteFire](https://github.com/codediodeio/sveltefire) - Svelte を活用した Firebase アプリ。
- 🔌 [React Fire](https://github.com/FirebaseExtended/reactfire) - Hooks、Context プロバイダー、コンポーネントを備え、Firebase を扱いやすくする公式 React ライブラリ。
- 🔧 [Remote Styles with Remote Config](https://github.com/firebaseextended/remote-styles/) - Remote Config に保存された CSS を動的または条件付きで読み込みます（[公開時の記事](https://medium.com/firebase-developers/introducing-remote-styles-conditional-css-loading-made-easy-daddbbcce050)）。
- 🔌 [React Firebase Hooks](https://github.com/CSFrequency/react-firebase-hooks) - Firebaseサービス向けのReact Hooks。
- 🔌 [Firebase UI](https://github.com/firebase/firebaseui-web) - FirebaseUIは、Web向けのオープンソースJavaScriptライブラリで、Firebase SDKの上にシンプルかつカスタマイズ可能なUIバインディングを提供し、ボイラープレートコードを削減し、ベストプラクティスを推進。
- 🔌 [Firebase UI for React](https://github.com/firebase/firebaseui-web-react) - firebaseUI Web向けのReactラッパー。
- 🔌 [GeoFire for JavaScript](https://github.com/firebase/geofire-js) - Firebase を使ってリアルタイムの位置情報検索。
- 💡 [FirePad](https://github.com/FirebaseExtended/firepad) - Firebaseを基盤とした協働テキストエディタ。
- 🔌 [Ember Fire](https://github.com/firebase/emberFire) - Firebase 用の公式 Ember Data アダプター。
- 🔌 [Firebase Dart](https://github.com/FirebaseExtended/firebase-dart) - DartによるFirebaseラッパー。
- 🔌 [PolymerFire](https://github.com/FirebaseExtended/polymerfire) - Firebase 用の Polymer Web Components。
- 🔌 [VueFire](https://github.com/vuejs/vuefire) - Vue.js向けのFirebaseバインディング。
- 🔌 [Angular Fire 2](https://github.com/angular/angularfire2) - Firebase と Angular 用の公式ライブラリ。
- 🔌 [Re-base](https://github.com/tylermcginnis/re-base) - React.js と Firebase のアプリケーションを構築するための、Relay に着想を得たライブラリ
- 🔌 [React Redux Firebase](https://github.com/prescottprue/react-redux-firebase) - Firebase 用の Redux バインディング。React で使うための高階コンポーネントを含みます
- 🔌 [GatsbyJS Firebase Data Source](https://www.gatsbyjs.org/packages/) - Gatsbyで静的に生成されたページにFirebaseデータを直接クエリできる
- 🔌 [Apollo Link Firebase](https://github.com/Canner/apollo-link-firebase) - リアルタイムDBに対してローカルのGraphQLインターフェースを提供。デバイスにローカルでDBを同期し、Apollo LinkによりローカルDBへのクエリが可能
- 🔌 [BuckleScript Bindings for Firebase](https://github.com/avohq/bs-firebase) - ReasonMLプロジェクトでFirebaseを使用するためのBuckleScriptバインディング
- 💡 [Angular Firebase PWA](https://github.com/codediodeio/angular-firestarter) - Firebaseを活用したAngular PWA。このスタックを学び、より複雑な機能を実装するための基礎となるもの
- 🔌 [FireSQL](https://github.com/jsayol/FireSQL) - SQL構文を使用してFirestoreをクエリ。必要となるデータを取得するために必要な最小限のクエリを発行
- 📖 [Hosting Version History](https://firebase.google.com/docs/hosting/deploying#set_limit_for_retained_versions) - 古いバージョンのサイトデプロイの自動削除
- 🔌 [Firestorter](https://github.com/IjzerenHein/firestorter) - MobX を使い、React から Firestore をほぼ設定不要で利用できます（React Native にも対応）
- 💡 [Nextbase](https://github.com/martyan/nextbase) - Next.js、Redux、Firebaseを組み合わせた開発者向けのスタートアップテンプレート
- 🔧 [Typesaurus](https://github.com/kossnocorp/typesaurus) - Firestore用のTypeScript中心の型安全ODM
- 🔌 [firebase-kotlin-sdk](https://github.com/GitLiveApp/firebase-kotlin-sdk/) - Kotlin ファーストの Firebase SDK。マルチプラットフォームプロジェクト（`ios`、`android`、`js`）をサポートします。
- 🔌 [GeoFirestore](https://github.com/MichaelSolati/geofirestore-js) - Firebase Firestoreを用いた場所ベースのクエリとフィルタリング
- 🔧 [FirelordJS](https://github.com/tylim88/FirelordJS) - Firestore Web 向けの厳密に型付けされた TypeScript ラッパー（[Admin 版](https://github.com/tylim88/Firelord)）
- 🔧 [FireSageJS](https://github.com/tylim88/FireSageJS) - リアルタイムデータベースWeb向けの極めて型安全なツール

<a id="mobile"></a>
## モバイル

- 📝 [App Distribution App Bundles](https://firebase.googleblog.com/2021/05/app-distribution-adds-support-to-android-app-bundles.html) - App Distribution で Android アプリバンドル（AAB）のサポートが公式に提供されています。
- 📖 [Firebase Flutter Documentation](https://firebase.google.com/docs/flutter/setup) - Firebase Flutter の公式セットアップ。
- 🔌 [NativeScript plugin Firebase](https://github.com/EddyVerbruggen/nativescript-plugin-firebase) - NativeScript 用の Firebase プラグイン。
- 🔌 [FlutterFire](https://github.com/FirebaseExtended/flutterfire) - [Flutter](https://flutter.io/) アプリ向けの Firebase プラグインのコレクション。
- 🔌 [React Native Firebase](https://github.com/invertase/react-native-firebase) - React Native 用に、機能豊富でモジュール化された Firebase の実装。iOS および Android プラットフォームをサポート。
- 🔌 [React Native Firebase Cloud Messaging](https://github.com/evollu/react-native-fcm) -
  React Native 用の Firebase クラウドメッセージングおよびローカル通知モジュール。
- 💡 [Expo Native Firebase](https://github.com/EvanBacon/expo-native-firebase) - Firebase の Firestore、通知、分析、ストレージ、メッセージング、データベースを用いた Native Firebase Expo アプリ（iOS、Android）のデモ。
- 💡 [Flutter Calendar App](https://github.com/mattgraham1/FlutterCalendar) -
  新しい Flutter アプリで、基本的なイベントを Firebase クラウドデータベースに保存するシンプルなモバイルカレンダーアプリを実装。
- 🔧 [Firebase App Distribution](https://firebase.google.com/products/app-distribution/) - アプリのプレリリースバージョンを信頼できるテスト者に配布できます。
- 🔌 [Flamingo](https://github.com/hukusuke1007/flamingo) - Dart 用の Firebase Firestore モデルフレームワーク。

<a id="android"></a>
### Android

- 🔌 [GeoFire for Java](https://github.com/firebase/geofire-java) - Firebase を使ってリアルタイムの位置情報検索。
- 🔌 [Firebase UI](https://github.com/firebase/firebaseui-android) - Firebase 用の最適化された UI コンポーネント。
- 🔌 [FireXtensions](https://github.com/rosariopfernandes/firextensions) - Firebase Android SDK 用の非公式 Kotlin 拡張。
- 🔌 [Firecoil](https://github.com/rosariopfernandes/firecoil) - Android アプリ内で、画像ローディングライブラリ Coil を使って GCS から画像を読み込みます。

<a id="ios"></a>
### iOS

- 🔌 [GeoFire for Objective-C](https://github.com/firebase/geofire-objc) - Firebase を使ってリアルタイムの位置情報検索。
- 🔌 [Firebase UI](https://github.com/firebase/firebaseui-ios) - Firebase の iOS UI バインディング
- 💡 [MLKit - ARCore](https://github.com/FirebaseExtended/MLKit-ARCore) - オブジェクト検出を行い、ARで3Dラベルでタグ付けする例。Firebase ML Kit、ARCoreおよびFirebase RTDBを使用。
- 💡 [MLKit - ARKit](https://github.com/FirebaseExtended/MLKit-ARKit) - Firebase ML Kitを使用してオブジェクト検出を行い、ARで3Dラベルでタグ付けする例。

<a id="games"></a>
## ゲーム

- 📖 [Firestore for C++ and Unity](https://firebase.google.com/docs/firestore) - C++およびUnity SDK（Firebase Unity SDKはUnity Package Manager経由で利用可能）。

<a id="server-side-cloud-functions-bigquery-etc"></a>
## サーバーサイド（Cloud Functions、BigQuery など）

- 📖 [Firebase Admin Documentation](https://firebase.google.com/docs/admin/setup) - Firebase Admin SDKのサーバー設定（公式）。
- 💡 [Functions Samples](https://github.com/firebase/functions-samples) - Cloud Functions for Firebase の一般的なユースケースを示すサンプルアプリ集。
- 💡 [Express Server on Cloud Functions](https://github.com/jthegedus/firebase-gcp-examples/tree/main/functions-express) - Cloud Functions上でExpressサーバーをホストする。
- 📝 [GraphQL Server on Cloud Functions](https://codeburst.io/graphql-server-on-cloud-functions-for-firebase-ae97441399c0) - Cloud Functions上でGraphQLミドルウェア付きExpressサーバーをホストする。
- 💡 [Compiled Code with Cloud Functions](https://github.com/jthegedus/firebase-gcp-examples/tree/main/functions-w-parcel) - Babel、TypeScript CompilerまたはParcelJSを使用して、Flow、TypeScriptまたはReasonMLを正しいNodeランタイムにコンパイルする。
- 📝 [BigQuery & Google Analytics](https://medium.com/firebase-developers/how-do-i-create-a-closed-funnel-in-google-analytics-for-firebase-using-bigquery-6eb2645917e1) - Google Analytics for Firebase と BigQuery でクローズドファネルを作成する方法。

- 📹 [Official Cloud Function #Firecasts](https://www.youtube.com/watch?v=2mjfI0FYP7Y&list=PLl-K7zZEsYLm9A9rcHb1IkyQUu6QwbjdM) - Cloud Functionsの動作を理解するためのYouTube動画シリーズ。
- 📝 [Firebase Hosting for Cloud Run Services](https://firebase.googleblog.com/2019/04/firebase-hosting-and-cloud-run.html) - HostingのリライトとCloud Runサービスを活用した動的コンテンツ。
- 📝 [Scheduled (Cron) Cloud Functions for Firebase](https://firebase.googleblog.com/2019/04/schedule-cloud-functions-firebase-cron.html) - Firebase Cloud Functions向けのFirebase本体のCronトリガー。
- 🔌 [Integrify](https://github.com/anishkny/integrify) - Firestoreで参照およびデータの整合性を確保するための事前準備済みCloud Functionsトリガー。
- 🔌 [Free Product Analytics with Firebase + BigQuery + Rakam](https://rakam.io/blog/free-product-analytics-with-firebase---bigquery---rakam/) - Firebaseイベントデータに対する行動分析およびセグメンテーション分析を行う方法（BigQuery ExportおよびRakamを用いる）。
- 🔌 [Firestore Queue System](https://github.com/sbarbat/firestore-queuer) - Firestore と Cloud Functions を使って構築されたシンプルなキューシステム
- 🔌 [Pyrebase](https://github.com/thisbejim/Pyrebase) - Firebase API 用のシンプルな Python ラッパー
- 🔌 [Firecode](https://github.com/kafkas/firecode) - Firestore および Node.js 用の軽量かつ高速でメモリ効率の高いコレクション走査ライブラリ

<a id="cli--editor"></a>
## CLI とエディター

- 📖 [Firebase Tools UI](https://github.com/firebase/firebase-tools-ui) - Firebase Emulator Suite 用のウェブUI
- 📖 [Storage in Emulator Suite](https://firebase.google.com/docs/emulator-suite/connect_storage) - Emulator Suite がすべての主要機能に対応しました。
- 🔧 [VSCode Firebase Explorer](https://github.com/jsayol/vscode-firebase-explorer) - Firebase プロジェクトを探索・管理できます
- 🔧 [Firebase Tools](https://github.com/firebase/firebase-tools) - Firebase コマンドラインツール
- 🔧 [Firebase CI](https://github.com/prescottprue/firebase-ci) - 継続的インテグレーションから Firebase を簡単に操作するためのツール
- 🔧 [Firecode](https://github.com/ChFlick/firecode) -  VS Code Firestore Rules Extension
- 🔧 [Firebase Firestore Snippets](https://github.com/peterhdd/firebase-firestore-snippets) - VS Code エディタにFirebaseおよびFirestore用のスニペットを含んでいます
- 🔧 [Fuego](https://github.com/sgarciac/fuego) - Firestore クライアント CLI は、ドキュメントの追加・更新・クエリにフィルタとページネーションをサポート
- 🔧 [Firestore Rules Generator](https://github.com/FirebaseExtended/protobuf-rules-gen) - Google の Protocol Buffer フォーマットに基づく、公式（実験的）Firebase Rules Generator（Cloud Firestore用）
- 🔧 [Firepit](https://github.com/abehaskins/firepit) - Firepit は、Node.jsを含むすべての依存関係を必要としない、スタンドアローンかつポータブルなFirebase CLIのバージョンです
- 🔧 [Fireward](https://github.com/bijoutrouvaille/fireward) - Firestore ルールに使えるシンプルな言語、Firebase Boltに類似
- 🔧 [Svarog](https://github.com/dantothefuture/svarog) - Cloud Firestoreのスキーマ検証にJSON Schemaを生成するセキュリティルールヘルパー関数
- 🔧 [Firetable](https://github.com/AntlerVC/firetable) - Firebase/Firestore に Excel/Google Sheets みたいな UI を。管理者用のポータルはもう不要！
- 🔧 [VSFire](https://github.com/toba/vsfire) - 非推奨。~~Firestore のセキュリティルールとインデックスの構文強調・コード補完を提供する VS Code 拡張機能。~~
- 📝 [Refi App](https://refiapp.io/) - 開発者が Firestore データベースをより扱いやすくする GUI ツール
- 🔧 [Firefoo](https://firefoo.app) - Cloud FirestoreのGUI管理ツール。JSON/CSVエクスポートとJavaScriptクエリシェルをサポート。
- 🔧 [asdf-firebase](https://github.com/jthegedus/asdf-firebase) - [asdf-vm](https://asdf-vm.com/)向けの`firebase-tools`プラグイン。Node.jsや`npm`を使わずにFirebase CLIを管理可能！`python`、`golang`、`c++`および`java`のFirebaseプロジェクトに最適。

<a id="other"></a>
## その他

- 🔧 [FireCMS](https://firecms.co/docs/) - FireCMSは、開発者たちが開発者たちのために作成したオープンソースのヘッドレスCMSおよび管理パネル。設定に基づいてCRUDビューを生成します。
- 🔧 [Flank](https://github.com/flank/flank/) - Firebase Test Lab 用の Android／iOS テストランナー。テストを並列実行できます。
- 🔌 [Firestore Query Browser](https://firestore-query-browser.firebaseapp.com) - アプリとユーザーの切り替えで、ドキュメントをクエリし、(バッチ-)編集・エクスポートできるウェブアプリ。
- 🔌 [FireDrill](https://github.com/scottlepp/fire-drill) - Firebaseデータの検索、編集、追加、削除、インポート、エクスポート、報告を行うツール。
- 💡 [Unity Solutions](https://github.com/FirebaseExtended/unity-solutions) - Firebaseツールを使って、ゲームに一般的な機能を統合できます。
- 🔌 [Firebase AIR Native Extension](https://github.com/myflashlab/Firebase-ANE) - Firebase ANEコレクションにより、AdobeAirプロジェクトにGoogle Firebaseプロジェクトを統合。AndroidおよびiOSでサポートされ、ActionScript APIが100％一致。
- 🔌 [QtFirebase](https://github.com/Larpon/QtFirebase) - GoogleのFirebase C++ APIをQt + QMLに導入する試み。
- 📝 [StackBlitz to Firebase Hosting Deployments](https://medium.com/@ericsimons/announcing-split-second-static-deploys-for-firebase-7440d8e84879) - StackBlitz（オンラインコードエディタ）によるFirebase Hostingの静的デプロイ。
- 🔧 [Flamelink](https://flamelink.io/) - Firebase向けのCMS。Firestore、RealtimeDatabase、Storageをサポート。
- 📹 [Firebase Summit 2018](https://www.youtube.com/watch?v=lN0VXVXsj9k&list=PLl-K7zZEsYLnqdlmz7iFe9Lb6cRU3Nv4R) - Firebase Summit 2018のすべての講演。
- 📹 [Firebase @ Google Cloud Next '18](https://www.youtube.com/watch?v=OPj26MY16F8&list=PLl-K7zZEsYLmYx3MkJRIUPH_JVFHLTlwL) - Google Cloud Next 2018 での Firebase 講演集
- 📹 [Firebase @ Google IO '18](https://www.youtube.com/watch?v=e-8fiv-vteQ&list=PLl-K7zZEsYLn1omgx_VUhCDFsQMA7PRDd) - Google I/O 2018 での Firebase 講演集
- 📹 [#AskFirebase YouTube Playlist](https://www.youtube.com/watch?v=TSzhzR4wzSE&list=PLl-K7zZEsYLkkCFs6T9mlqG8v6NCs38pA) - YouTube の公式 #AskFirebase プレイリスト
- 📝 [State of Firebase (mid 2019)](https://codeburst.io/the-state-of-firebase-mid-2019-2b002c458d70) - Cloud Next および Google I/O 2019 のアップデート！
- 📹 [Firebase @ Google IO '19](https://www.youtube.com/playlist?list=PLl-K7zZEsYLlo2L4rfPds-fFLEtOWheoO) - Google I/O 2019 での Firebase 講演集
- 📹 [Firebase Summit 2019](https://www.youtube.com/watch?v=YKZ6rP4kwV8&list=PLl-K7zZEsYLk2OolaVXVyYrFErctrZXSX) - Firebase Summit 2019 の講演集
- 📹 [Firebase Live 2020](https://www.youtube.com/playlist?list=PLl-K7zZEsYLnw0-bXz2f9zo6745VQ_2ep) - Firebase Live は、アプリ開発者向けのウェブシリーズで、開発者の生産性、知識、協働を高めるための講演、アドバイス、技術チュートリアルを提供しています
- 📹 [Firebase Summit 2020](https://goo.gle/firebasesummit2020) - Firebase Summit 2020 の講演集
- 🔧 [Dynaboard](https://dynaboard.com) - AI を使って Firebase から低コードウェブアプリを生成



<a id="follow"></a>
## フォロー

<a id="official"></a>
### 公式

- 📹 [Firebase YouTube](https://www.youtube.com/user/Firebase)
- 📝 [Firebase Blog](https://firebase.googleblog.com/)
- 🐦 [@firebase](https://twitter.com/firebase)
- 👤 [Firebase Facebook](https://www.facebook.com/Firebase)
- 🔊 [The Firebase Podcast](https://podcasts.google.com/feed/aHR0cDovL2ZpcmViYXNlcG9kY2FzdC5nb29nbGVkZXZlbG9wZXJzLmxpYnN5bnByby5jb20vcnNz) - Firebase プロダクトについて深く掘り下げ、途中で新しいアドバイスやコツを学ぶ場所

<a id="community"></a>
### コミュニティ

- :fire: [Firebase Developers Discord](https://discord.gg/BN2cgc3) - Firebase およびそのサービスに情熱をもつオープンコミュニティ。世界中のウェブ開発者やアプリ開発者と交流し、お互いをサポートできる場所
- 📹 [Fireship](https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA) - ジェフ・デラニーによる YouTube チャネル。Google Firebase の専門家であり、有名な『X in 100 Seconds』動画の作成者
- 📹 ru [@firebase_ru - Telegram friendly chat](https://t.me/firebase_ru)

ほかにフォローすべき人やコミュニティがあれば、ぜひ教えてください。

<a id="contributing"></a>
## 貢献

[ガイドラインに従った、あらゆる種類の貢献を歓迎します](https://github.com/jthegedus/awesome-firebase/blob/5055b341119af42077ee6e9064b136a04fdd79b0/contributing.md)。

<a id="contributors"></a>
### 貢献者

[貢献者の皆さんに感謝します](https://github.com/jthegedus/awesome-firebase/graphs/contributors)。
