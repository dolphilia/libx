---
title: "Awesome Service Workers"
description: "ブラウザーのService Workerのガイド、仕様、ブラウザー対応、ライブラリー、動画、導入事例、関連技術を案内します。"
licenseSource: "github-TalAter-awesome-service-workers-readme-md"
---

# Awesome Service Workers

ブラウザーのService Workerを使ったPWA、オフライン動作、キャッシュ、プッシュ通知の資料を探せます。入門ガイド、仕様、ブラウザー対応の参照先、ライブラリー、動画、導入事例、関連技術を収録しています。

## 必読

- [Building Progressive Web Apps - O'Reilly](https://pwabook.com/oreillyasw) — Service Worker、キャッシュ戦略、プッシュ通知など、PWAの機能を扱う実践的なガイド兼リファレンス。

- [Introduction to Service Worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/) — Service Workerの入門チュートリアル。

- [Offline Web Applications Using IndexedDB & Service Worker](https://www.udacity.com/course/offline-web-applications--ud899) — Service WorkerとIndexedDBを紹介するUdacityの講座。

- [Service Workers Explained](https://github.com/slightlyoff/ServiceWorker/blob/master/explainer.md) — [Alex Russell](https://github.com/slightlyoff)によるService Workerの解説。

## 学習リソース

- [Building Offline Sites with ServiceWorkers and UpUp](https://dev.opera.com/articles/offline-with-upup-service-workers/) — Service Workerの概要と、UpUpによるオフライン機能の追加を紹介。原文では数分で導入できると説明。

- [Introduction to Service Worker](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)

- [Service Workers 101](https://github.com/delapuente/service-workers-101) — Service Worker APIの主要部分をまとめた図解。

- [ServiceWorker Cookbook by Mozilla](https://serviceworke.rs/) — さまざまなService Workerの利用場面に対応する実装例。

- [The copy & paste guide to your first Service Worker](https://remysharp.com/2016/03/22/the-copy--paste-guide-to-your-first-service-worker) — [Remy Sharp](https://github.com/remy)による短い入門資料。

- [The offline cookbook](https://jakearchibald.com/2014/offline-cookbook/) — Jake ArchibaldによるService Workerの実装パターン集。

- [Designing Offline-First Web Apps](http://alistapart.com/article/offline-first) — さまざまなネットワーク接続状態に対応する設計とUXの考慮点。

## リファレンス

- [バックグラウンド同期の仕様](https://wicg.github.io/BackgroundSync/spec/) — 原文では策定中とされているバックグラウンド同期の仕様。

- [Service WorkerのW3C仕様](https://www.w3.org/TR/service-workers/) — Service Workerの公式仕様。

## ブラウザーサポート

- [Can I UseのService Worker対応表](http://caniuse.com/#feat=serviceworkers) — ServiceWorker APIのブラウザー対応表。

- [Jake Archibald - Is Service Worker ready?](https://jakearchibald.github.io/isserviceworkerready/) — 各ブラウザーのServiceWorker対応状況を案内。

## ライブラリーとツール

- [UpUp](http://upup.rocks/) — 原文では1行のコードでサイトにオフライン機能一式を追加できると説明されているService Workerライブラリー。

- [sw-toolbox](https://github.com/GoogleChrome/sw-toolbox/) — 一般的な実行時キャッシュのパターンを実装するための補助機能集。

- [マニフェスト生成ツール](https://brucelawson.github.io/manifest/) — Webアプリのマニフェストを生成。原文では、プッシュ通知やインストール可能なWebアプリにマニフェストが必要と説明。

- [sw-precache](https://github.com/GoogleChrome/sw-precache/) — ローカルのApp ShellリソースをキャッシュするService Workerを生成。

- [sw-offline-google-analytics](https://developers.google.com/web/updates/2016/07/offline-google-analytics) — 接続が利用可能になったときに、オフライン時のGoogle Analyticsリクエストを再試行する補助ライブラリー。

- [Workbox](https://developers.google.com/web/tools/workbox/) — アセットのキャッシュやPWAの機能を利用するためのライブラリーとNodeモジュール群。

## 動画

- [Instant Loading: Building offline-first Progressive Web Apps - Google I/O 2016](https://youtu.be/cmGr0RszHc8) — PWAを作るための一般的な技術と手法を紹介。

- [Offline Web Applications Using IndexedDB & Service Worker](https://www.udacity.com/course/offline-web-applications--ud899) — Service Workerを詳しく学ぶUdacityの講座。原文では無料とされている。

- [Instant Loading with Service Workers (Chrome Dev Summit 2015)](https://www.youtube.com/watch?v=jCKZDTtUA2A) — 初回・再訪の利用者に向けて読み込みを最適化するWebアプリの構成と、定型コードを減らすService Workerライブラリーを紹介。

## ケーススタディ

- [Service Workers in Production](https://developers.google.com/web/showcase/case-study/service-workers-iowa) — Google I/O 2015のWebアプリをどのように作ったかを紹介する事例。

- [Measuring the Real-world Performance Impact of Service Workers](https://developers.google.com/web/showcase/2016/service-worker-perf) — 必要なリソースをすべて事前にキャッシュした場合に、再訪時の読み込みが大幅に速くなるという期待を検討し、実際の利用者への効果をどう測るかを解説。

## 関連技術

- [アプリのインストール案内](https://github.com/TalAter/awesome-progressive-web-apps#installable-web-apps)

- [バックグラウンド同期](https://github.com/TalAter/awesome-progressive-web-apps#background-sync)

- [CacheStorage API](https://github.com/TalAter/awesome-progressive-web-apps#cachestorage-api)

- [IndexedDB](https://github.com/TalAter/awesome-progressive-web-apps#indexeddb)

- [プッシュ通知](https://github.com/TalAter/awesome-progressive-web-apps#push-notifications)
