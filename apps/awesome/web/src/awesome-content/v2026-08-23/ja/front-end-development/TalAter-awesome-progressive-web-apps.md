---
title: "Awesome Progressive Web Apps"
description: "PWAを作るための学習資料、事例、実例集と、オフラインストレージ、インストール、共有、性能に関する技術資料。"
licenseSource: "github-TalAter-awesome-progressive-web-apps-readme-md"
toc:
  maxLevel: 4
---

# Awesome Progressive Web Apps

[Building Progressive Web Apps](https://pwabook.com/oreillyapwa)では、PWA（Progressive Web Apps）はネイティブアプリの利点とWebの利用しやすさを兼ね備え、Webサイトとして始まり、ユーザーの操作に応じてアプリに近い機能を獲得すると説明されています。ここでは、学習資料、ブラウザーの対応状況、事例、サンプルアプリ、サービスワーカー、オフラインストレージ、通知、インストール、共有、Webの性能に関する資料を紹介します。

## 必読

- [Building Progressive Web Apps - O'Reilly Media](https://pwabook.com/oreillyapwa) - PWA、サービスワーカー、プッシュ通知、バックグラウンド同期、IndexedDB、オフラインファーストの開発などを詳しく扱う書籍。
- [Offline Web Applications Using IndexedDB & Service Worker](https://www.udacity.com/course/offline-web-applications--ud899) - PWA構築の基本概念を紹介する無料のUdacity講座。

## 学習リソース

- [Google Developers - Your First Progressive Web App](https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/?hl=en) - アプリシェルパターンを使ってPWAを構築する手順を段階的に説明するガイド。
- [Awesome Service Workers](https://github.com/TalAter/awesome-service-workers) - サービスワーカーを学ぶための資料集。
- [Service Workers のW3C仕様](https://www.w3.org/TR/service-workers/) - W3Cによるサービスワーカーの公式仕様。

## ブラウザーサポート

- [サービスワーカーのブラウザー対応表（Can I Use）](http://caniuse.com/#feat=serviceworkers) - 固定原文で最新と紹介されている、ServiceWorker APIのブラウザー対応表。
- [Is Service Worker ready?](https://jakearchibald.github.io/isserviceworkerready/) - 固定リストの時点での、各ブラウザーのServiceWorker対応状況を比較。

## 動画

- [Instant Loading: Building offline-first Progressive Web Apps - Google I/O 2016](https://youtu.be/cmGr0RszHc8) - オフラインファーストのPWA構築で使われる一般的な技術と手法の概要。
- [Intro To Progressive Web Apps](https://www.udacity.com/course/intro-to-progressive-web-apps--ud811) - Googleによる無料のUdacity講座。PWA、サービスワーカー、Webアプリマニフェストの入門。
- [Offline Web Applications Using IndexedDB & Service Worker](https://www.udacity.com/course/offline-web-applications--ud899) - サービスワーカーを深く学ぶための無料のUdacity講座。
- [Progressive Web Apps (Chrome Dev Summit 2015)](https://www.youtube.com/watch?v=MyQ8mtR9WxI) - Alex RussellとAndreas BovensによるPWAの紹介。
- [Polymer and Progressive Web Apps: Building on the modern web - Google I/O 2016](https://www.youtube.com/watch?v=fFF2Yup2dMM) - Polymerを使ったPWAの構築。

## 事例

- [Building the Google I/O 2016 Progressive Web App](https://developers.google.com/web/showcase/2016/iowa2016) - Web Components、Polymer、Material Designを使ったGoogle I/O 2016のPWAの構築と公開。
- [AliExpress Case Study](https://developers.google.com/web/showcase/2016/aliexpress) - PWAにより、AliExpressの新規ユーザーのコンバージョン率が104%増加したと報告する事例。
- [eXtra Electronics Case Study](https://developers.google.com/web/showcase/2016/extra) - Webプッシュ通知により、United eXtra ElectronicsのEC売上が100%増加したと報告する事例。
- [Jumia Case Study](https://developers.google.com/web/showcase/2016/jumia) - プッシュ通知によりJumiaのカート放棄が減り、コンバージョンが9倍になったと報告する事例。
- [Konga Case Study](https://developers.google.com/web/showcase/2016/konga) - PWAにより、Kongaのデータ使用量が92%減少したと報告する事例。
- [Suumo Case Study](https://developers.google.com/web/showcase/2016/suumo) - Suumoを日本の主要な不動産サイトとして紹介し、Webプッシュ通知で新規物件情報を知らせ、通知開封率31%を報告する事例。

## PWAの実例 <a id="サンプルprogressive-web-apps"></a>

- [PWA.rocks](https://pwa.rocks/) - [Operaの開発者リレーションズチーム](https://twitter.com/ODevRel)が集めたPWAの実例集。
- [SVGOMG](https://jakearchibald.github.io/svgomg/)
- [Guitar Tuner](https://aerotwist.com/blog/guitar-tuner/)
- [Voice Memos](https://voice-memos.appspot.com/)
- [Hacker News](https://react-hn.appspot.com/)

## 個別技術

### サービスワーカー <a id="service-workers"></a>

- [Awesome Service Workers](https://github.com/TalAter/awesome-service-workers/) - サービスワーカーの資料集。

### CacheStorage API

- [Offline Storage for Progressive Web Apps](https://medium.com/@addyosmani/offline-storage-for-progressive-web-apps-70d52695513c) - 記事掲載時点での、ブラウザーのオフラインストレージを概観。
- [CacheStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) - MozillaによるAPIドキュメントとサンプルコード。

### バックグラウンド同期 <a id="background-sync"></a>

- [Introducing Background Sync](https://developers.google.com/web/updates/2015/12/background-sync) - 動画とコード例を含む、バックグラウンド同期の入門。
- [Background Sync Explained](https://github.com/WICG/BackgroundSync/blob/master/explainer.md) - 単発同期と定期同期を扱う、バックグラウンド同期の公式解説文書。
- [Background Sync の仕様](https://wicg.github.io/BackgroundSync/spec/) - 固定リストで策定中と紹介されているBackground Syncの仕様。

### プッシュ通知 <a id="push-notifications"></a>

- [Push API のブラウザー対応表（Can I Use）](http://caniuse.com/#feat=push-api) - 固定原文で最新と紹介されている、Push APIのブラウザー対応表。
- [Chrome Platform Status - Web Notifications](https://www.chromestatus.com/feature/5480344312610816) - Chromeなどのブラウザーでの実装状況。
- [PWA Dev Summit 2016 codelab - Push Notifications](https://developers.google.com/web/fundamentals/getting-started/push-notifications/?hl=en) - 固定原文で最新と紹介されている入門チュートリアル。PWA、プッシュ通知、サービスワーカーの基礎を扱う。
- [Using the Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Using_the_Push_API) - Push APIの入門記事。
- [web-push-libs](https://github.com/web-push-libs) - Node.js、PHP、Pythonなどの技術向けのWebプッシュ用ライブラリ集。

### IndexedDB

- [IndexedDB API](https://developer.mozilla.org/en/docs/Web/API/IndexedDB_API) - MozillaによるAPIドキュメント、主要概念、サンプルコード。

### インストール可能なWebアプリ

- [Increasing Engagement with Web App Install Banners](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android?hl=en) - アプリのインストールバナーと、ChromeがユーザーにWebアプリのインストールを提示するようにする方法の紹介。
- [Installable Web Apps with the Web App Manifest in Chrome for Android](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android) - Web App Manifestを使った、Android向けChromeでのインストール可能なWebアプリの紹介。

#### アプリアイコン

- [RealFaviconGenerator](http://realfavicongenerator.net/) - 各ブラウザーでアプリアイコンを表示するために必要な画像、ファビコン、関連ファイルを生成。
- [Android Asset Studio - Launcher Icon Generator](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html) - Android形式のアイコンを生成。

### Web Share API <a id="web-share-apis"></a>

- [Introducing the Web Share API](https://developers.google.com/web/updates/2016/10/navigator-share) - Web Share APIの概要。
- [Web Share API の解説](https://github.com/WICG/web-share/blob/master/docs/explainer.md) - 提案文書の一部として、例を交えてAPIを説明。
- [Web Share Target API](https://github.com/WICG/web-share-target) - Web Share Target APIの提案と入門向けの[解説文書](https://github.com/WICG/web-share-target/blob/master/docs/explainer.md)。

## 性能と最適化 <a id="awesome-performance"></a>

- [Web Fundamentals - Performance](https://developers.google.com/web/fundamentals/performance/) - Webアプリの性能を最適化するためのGoogleの学習ポータル。
- [Introducing RAIL: A User-Centric Model For Performance](https://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/) - Gang of Paulsによる、ユーザー中心の性能モデルRAILの紹介。
- [Website Performance Optimization](https://udacity.com/ud884) - Webサイトを高速化するための無料のUdacity講座。
- [Browser Rendering Optimization](https://udacity.com/ud860) - コマ落ちのない滑らかな60fpsを維持するWebアプリの作り方を学ぶ無料のUdacity講座。
- [The PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) - 固定原文で新しい手法と紹介されている、性能を重視したPWAの構造化・配信パターン。
- [Browser Rendering Performance](https://developers.google.com/web/fundamentals/performance/rendering/) - ブラウザーによるHTML、JavaScript、CSSの処理と、それに応じたページの最適化方法。
