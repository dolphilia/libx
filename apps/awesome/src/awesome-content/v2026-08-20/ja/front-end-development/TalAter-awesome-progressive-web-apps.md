---
title: "TalAter/awesome-progressive-web-apps"
description: "TalAter/awesome-progressive-web-apps の定本スナップショット"
licenseSource: "github-TalAter-awesome-progressive-web-apps-readme-md"
---

# Awesome Progressive Web Apps [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Progressive Web Appsのリソースを厳選して集めたコレクション。

<a href="https://pwabook.com/oreillyapwa"><img align="right" src="images/mpwa.png" alt="Building Progressive Web Apps"></a>
> Progressive Web Appsは新種のウェブアプリです。ネイティブアプリの利点と、ウェブの摩擦の少なさを組み合わせます。Progressive Web Appsは単純なウェブサイトとして始まりますが、ユーザーとのインタラクションに伴い、段階的に新たな力を得ます。ウェブサイトから、従来のネイティブアプリにずっと近いものへ変化します。
>
> -- <cite>[Building Progressive Web Apps - O'Reilly](https://pwabook.com/oreillyapwa)</cite>

貢献したい場合は、[貢献ガイドライン](https://github.com/TalAter/awesome-progressive-web-apps/blob/f643dae3ae5cd27c848a0a8a85e2b4958096547d/contributing.md)をお読みください。

## 目次

- [必読](#must-reads)
- [学習リソース](#learning-resources)
- [ブラウザーサポート](#browser-support)
- [動画](#videos)
- [事例](#case-studies)
- [サンプルProgressive Web Apps](#sample-progressive-web-apps)
- [個別技術](#specific-technologies)
  - [Service Workers](#service-workers)
  - [CacheStorage API](#cachestorage-api)
  - [Background Sync](#background-sync)
  - [Push Notifications](#push-notifications)
  - [IndexedDB](#indexeddb)
  - [インストール可能なWebアプリ](#installable-web-apps)
    - [アプリアイコン](#app-icons)
  - [Web Share APIs](#web-share-apis)
- [Awesome Performance](#awesome-performance)

## 必読

- [Building Progressive Web Apps - O'Reilly Media](https://pwabook.com/oreillyapwa) - Progressive Web Apps、service workers、push notifications、background sync、IndexedDB、offline firstなどを深く掘り下げます。
- [Offline Web Applications Using IndexedDB & Service Worker](https://www.udacity.com/course/offline-web-applications--ud899) - Progressive Web App構築の基本概念を紹介する無料のUdacityコース。

## 学習リソース

- [Google Developers - Your First Progressive Web App](https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/?hl=en) - app shellパターンを使ってProgressive Web Appsを構築するためのステップバイステップガイド。
- [Awesome Service Workers](https://github.com/TalAter/awesome-service-workers) - service workersを学ぶための優れたリソース集。
- [Service Workers W3C Specification](https://www.w3.org/TR/service-workers/) - service workersの公式仕様。

## ブラウザーサポート

- [Can I Use - Service Workers](http://caniuse.com/#feat=serviceworkers) - ServiceWorker APIの最新ブラウザーサポート表。
- [Is Service Worker ready?](https://jakearchibald.github.io/isserviceworkerready/) - 各ブラウザーにおけるServiceWorkerサポートの現状。

## 動画

- [Instant Loading: Building offline-first Progressive Web Apps - Google I/O 2016](https://youtu.be/cmGr0RszHc8) - Progressive Web Apps構築で最も一般的な技術と手法を素早く解説します。
- [Intro To Progressive Web Apps](https://www.udacity.com/course/intro-to-progressive-web-apps--ud811) - Googleによる無料Udacityコース。PWA、service workers、web app manifestsの入門を扱います。
- [Offline Web Applications Using IndexedDB & Service Worker](https://www.udacity.com/course/offline-web-applications--ud899) - service workersを深く学ぶ予定なら必見の無料Udacityコース。
- [Progressive Web Apps (Chrome Dev Summit 2015)](https://www.youtube.com/watch?v=MyQ8mtR9WxI) - Alex RussellとAndreas BovensによるProgressive Web Appsの紹介。
- [Polymer and Progressive Web Apps: Building on the modern web - Google I/O 2016](https://www.youtube.com/watch?v=fFF2Yup2dMM) - Polymerを使ってProgressive Web Appsを構築します。

## 事例

- [Building the Google I/O 2016 Progressive Web App](https://developers.google.com/web/showcase/2016/iowa2016) - web components、Polymer、material designを使用するProgressive Web Appの構築と公開。
- [AliExpress Case Study](https://developers.google.com/web/showcase/2016/aliexpress) - AliExpressは新しいProgressive Web Appsにより新規ユーザーのコンバージョン率を104%増加。
- [eXtra Electronics Case Study](https://developers.google.com/web/showcase/2016/extra) - United eXtra ElectronicsはWeb Push NotificationsによりeCommerce売上を100%増加。
- [Jumia Case Study](https://developers.google.com/web/showcase/2016/jumia) - Push NotificationsがJumiaのカート放棄を減らし、コンバージョンを9倍増加。
- [Konga Case Study](https://developers.google.com/web/showcase/2016/konga) - Kongaは新しいProgressive Web Appによりデータ使用量を92%削減。
- [Suumo Case Study](https://developers.google.com/web/showcase/2016/suumo) - 日本最大の不動産サイトはWeb Push Notificationsにより新規物件情報を強化し、通知の開封率31%を達成。

## サンプルProgressive Web Apps

- [PWA.rocks](https://pwa.rocks/) - [Opera Dev Relations team](https://twitter.com/ODevRel)が集めた複数のProgressive Web Appsのショーケース。
- [SVGOMG](https://jakearchibald.github.io/svgomg/)
- [Guitar Tuner](https://aerotwist.com/blog/guitar-tuner/)
- [Voice Memos](https://voice-memos.appspot.com/)
- [Hacker News](https://react-hn.appspot.com/)

## 個別技術

### Service Workers

- [Awesome Service Workers](https://github.com/TalAter/awesome-service-workers/) - 優れたservice workerリソースを厳選して集めたコレクション。

### CacheStorage API

- [Offline Storage for Progressive Web Apps](https://medium.com/@addyosmani/offline-storage-for-progressive-web-apps-70d52695513c) - ブラウザーにおけるオフラインストレージの現状。
- [CacheStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Cache) - MozillaによるAPIドキュメントとサンプルコード。

### Background Sync

- [Introducing Background Sync](https://developers.google.com/web/updates/2015/12/background-sync) - 優れた動画とコードサンプルを伴う、background syncの穏やかな入門。
- [Background Sync Explained](https://github.com/WICG/BackgroundSync/blob/master/explainer.md) - 単発同期と定期同期を含む、background syncの公式「explainer」文書。
- [Background Sync Spec](https://wicg.github.io/BackgroundSync/spec/) - Background Syncの作業中仕様。

### Push Notifications

- [Can I Use - Push API](http://caniuse.com/#feat=push-api) - Push APIの最新ブラウザーサポート表。
- [Chrome Platform Status - Web Notifications](https://www.chromestatus.com/feature/5480344312610816) - Chromeなどのブラウザーにおける実装状況。
- [PWA Dev Summit 2016 codelab - Push Notifications](https://developers.google.com/web/fundamentals/getting-started/push-notifications/?hl=en) Progressive Web App、Push Notifications、service worker基礎の最新入門チュートリアル。
- [Using the Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Using_the_Push_API) - Push APIを紹介する記事。
- [web-push-libs](https://github.com/web-push-libs) - 異なる技術（Node.js、PHP、Pythonなど）におけるウェブプッシュ用の役立つライブラリ集。

### IndexedDB

- [IndexedDB API](https://developer.mozilla.org/en/docs/Web/API/IndexedDB_API) - MozillaによるAPIドキュメント、主要概念、サンプルコード。

### インストール可能なWebアプリ

- [Increasing Engagement with Web App Install Banners](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android?hl=en) - App Install Bannersと、Chromeがユーザーにウェブアプリを提示するようにする方法の紹介。
- [Installable Web Apps with the Web App Manifest in Chrome for Android](https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android) - Android向けChromeでのインストール可能なWeb Appsの紹介。

#### アプリアイコン

- [RealFaviconGenerator](http://realfavicongenerator.net/) - 異なるブラウザーでアプリアイコンを表示するのに必要なすべての画像、favicon、関連ファイルを生成する優れた方法。
- [Android Asset Studio - Launcher Icon Generator](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html) - Androidスタイルのアイコンを生成します。

### Web Share APIs

- [Introducing the Web Share API](https://developers.google.com/web/updates/2016/10/navigator-share) - Web Share APIの高レベルな紹介。
- [Web Share API explainer](https://github.com/WICG/web-share/blob/master/docs/explainer.md) - いくつかの例を含むAPIの説明。提案文書の一部です。
- [Web Share Target API](https://github.com/WICG/web-share-target) - Web Share Target APIの提案と、高レベルな[explainer](https://github.com/WICG/web-share-target/blob/master/docs/explainer.md)。

## Awesome Performance

- [Web Fundamentals - Performance](https://developers.google.com/web/fundamentals/performance/) - ウェブアプリのパフォーマンス最適化に関する豊富な知識を含むGoogleのパフォーマンス学習ポータル。
- [Introducing RAIL: A User-Centric Model For Performance](https://www.smashingmagazine.com/2015/10/rail-user-centric-model-performance/) - Gang of PaulsによるRAILの代表的な紹介。
- [Website Performance Optimization](https://udacity.com/ud884) - ウェブサイトを高速化する無料Udacityコース。
- [Browser Rendering Optimization](https://udacity.com/ud860) - ジャンクのない60fpsパフォーマンスを維持するウェブアプリを作る助けとなる無料Udacityコース。
- [The PRPL Pattern](https://developers.google.com/web/fundamentals/performance/prpl-pattern/) - パフォーマンスを重視し、Progressive Web Appsを構造化・配信するための新しいパターン。
- [Browser Rendering Performance](https://developers.google.com/web/fundamentals/performance/rendering/) - HTML、JavaScript、CSSがブラウザーでどのように処理されるかと、それに応じてページを最適化する方法を理解します。
