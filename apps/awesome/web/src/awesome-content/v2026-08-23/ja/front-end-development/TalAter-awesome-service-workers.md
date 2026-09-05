---
title: "Awesome Service Workers"
description: "Service Workersを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-TalAter-awesome-service-workers-readme-md"
---

# Awesome Service Workers

Service Workersを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [必読](#must-reads)
- [学習リソース](#learning-resources)
- [リファレンス](#reference)
- [ブラウザーサポート](#browser-support)
- [ライブラリーとツール](#libraries-and-tools)
- [動画](#videos)
- [ケーススタディ](#case-studies)
- [関連技術](#related-technologies)

## 必読

- [Building Progressive Web Apps - O'Reilly](https://pwabook.com/oreillyasw) - Service Worker、キャッシュ戦略、プッシュ通知などの実践ガイド兼リファレンス。モダンなプログレッシブウェブアプリ構築に必要なすべて。
- [Introduction to Service Worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/) - Service Worker へのやさしい入門。
- [Offline Web Applications Using IndexedDB & Service Worker](https://www.udacity.com/course/offline-web-applications--ud899) - Service Worker と IndexedDB を紹介する優れた Udacity コース。
- [Service Workers Explained](https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md) - [Alex Russell](https://github.com/slightlyoff) による Service Worker の解説。

## 学習リソース

- [Building Offline Sites with ServiceWorkers and UpUp](https://dev.opera.com/articles/offline-with-upup-service-workers/) - Service Worker の一般的な入門と、UpUp を使って数分でオフライン機能を提供する方法。
- [Introduction to Service Worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
- [Service Workers 101](https://github.com/delapuente/service-workers-101) - Service Worker API の最も重要な部分を要約したインフォグラフィック。
- [ServiceWorker Cookbook by Mozilla](https://serviceworke.rs/) - さまざまなユースケース向けレシピのコレクション。
- [The copy & paste guide to your first Service Worker](https://remysharp.com/2016/03/22/the-copy--paste-guide-to-your-first-service-worker) - [Remy Sharp](https://github.com/remy) による、最短の入門。
- [The offline cookbook](https://jakearchibald.com/2014/offline-cookbook/) - Jake Archibald による Service Worker パターンのバイブル。
- [Designing Offline-First Web Apps](http://alistapart.com/article/offline-first) - さまざまな接続状態を扱うデザインと UX の考慮点を魅力的に紹介します。

## リファレンス

- [Background Sync Spec](https://wicg.github.io/BackgroundSync/spec/) - Background Sync の作業中仕様。
- [Service Workers - W3C Specification](https://www.w3.org/TR/service-workers/) - Service Worker の公式仕様。

## ブラウザーサポート

- [Can I Use - Service Workers](http://caniuse.com/#feat=serviceworkers) - ServiceWorker API の最新ブラウザーサポート表。
- [Jake Archibald - Is Service Worker ready?](https://jakearchibald.github.io/isserviceworkerready/) - 各ブラウザーでの ServiceWorker サポートの現在の状況。

## ライブラリーとツール

- [UpUp](http://upup.rocks/) - 1行のコードでサイトに完全なオフライン機能を提供する人気の Service Worker ライブラリー。
- [sw-toolbox](https://github.com/GoogleChrome/sw-toolbox/) - 一般的なランタイムキャッシュパターンの実装を単純化するシンプルなヘルパーのコレクション。
- [Manifest Generator](https://brucelawson.github.io/manifest/) - プッシュ通知とインストール可能なウェブアプリに必要なウェブアプリマニフェストを生成します。
- [sw-precache](https://github.com/GoogleChrome/sw-precache/) - ローカルの App Shell リソースをキャッシュする Service Worker を生成します。
- [sw-offline-google-analytics](https://developers.google.com/web/updates/2016/07/offline-google-analytics) - 接続が利用可能になった際に、オフラインの Google Analytics リクエストを再試行する Service Worker ヘルパーライブラリー。
- [Workbox](https://developers.google.com/web/tools/workbox/) - アセットのキャッシュを容易にし、プログレッシブウェブアプリ構築に使う機能を最大限に活用できるライブラリーと Node モジュールの集合。

## 動画

- [Instant Loading: Building offline-first Progressive Web Apps - Google I/O 2016](https://youtu.be/cmGr0RszHc8) - プログレッシブウェブアプリを構築するための最も一般的な技術と手法を素早く解説します。
- [Offline Web Applications Using IndexedDB & Service Worker](https://www.udacity.com/course/offline-web-applications--ud899) - Service Worker を深く学ぶ予定なら、この無料 Udacity コースは必見です。
- [Instant Loading with Service Workers (Chrome Dev Summit 2015)](https://www.youtube.com/watch?v=jCKZDTtUA2A) - 初回・再訪ユーザーの読み込み時間を最適化するウェブアプリの構成方法と、記述すべきボイラープレートコードを最小化する有用な Service Worker ライブラリーを説明します。

## ケーススタディ

- [Service Workers in Production](https://developers.google.com/web/showcase/case-study/service-workers-iowa) - Google I/O 2015 ウェブアプリの構築方法に関するケーススタディ。
- [Measuring the Real-world Performance Impact of Service Workers](https://developers.google.com/web/showcase/2016/service-worker-perf) - Service Worker の最も重要な利点の一つ（少なくともパフォーマンスの観点から）は、アセットのキャッシュを先回りして制御できることです。必要なリソースをすべてキャッシュできるウェブアプリケーションは、再訪ユーザーに対して大幅に速く読み込まれるはずです。しかしこの改善は、実際のユーザーにはどのように見えるのでしょうか？また、どう測定すればよいのでしょうか？

## 関連技術

- [App Install Banners](https://github.com/TalAter/awesome-progressive-web-apps#installable-web-apps)
- [Background Sync](https://github.com/TalAter/awesome-progressive-web-apps#background-sync)
- [CacheStorage API](https://github.com/TalAter/awesome-progressive-web-apps#cachestorage-api)
- [IndexedDB](https://github.com/TalAter/awesome-progressive-web-apps#indexeddb)
- [Push Notifications](https://github.com/TalAter/awesome-progressive-web-apps#push-notifications)
