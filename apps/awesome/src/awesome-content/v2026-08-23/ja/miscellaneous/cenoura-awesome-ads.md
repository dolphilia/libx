---
title: "cenoura/awesome-ads"
description: "cenoura/awesome-ads の正規スナップショット"
licenseSource: "github-cenoura-awesome-ads-readme-md"
---

# Awesome Advertising [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

**広告とプログラマティックメディアのコンテンツおよびリソースを厳選したリストです。**

**免責事項：** サイトやアプリ上の広告を強く嫌い、ときには腹を立てる人がいることは承知しています。広告は個人や企業が収益化のため広く利用しているため、このリストでは正しく最適化された実装方法に関する知識の共有を主な目的としています。

## 目次

- [頭字語と略語](#acronyms-and-abbreviations)
- [概念と基礎](#concepts-and-fundamentals)
- [ベストプラクティス](#best-practices)
- [広告マネージャー / 広告サーバー / プラットフォーム](#ad-managers--ad-servers--platforms)
- [Google Ad Manager](#google-ad-manager)
- [GAM ライブラリ / ツール](#gam-libraries--tools)
- [Facebook / Instagram](#facebook--instagram)
- [プログラマティック](#programmatic)
- [ヘッダービディング（HB）](#header-bidding-hb)
- [Prebid](#prebid)
- [Prebid ライブラリ / ツール](#prebid-libraries--tools)
- [ニュースレター](#newsletters)
- [連絡先](#contact)

## 頭字語と略語

- AdOps：広告運用
- AdX：広告取引所
- CPC：クリック単価
- CPM：1,000回表示当たりの費用
- CR：コンバージョン率
- CTR：クリック率
- DFP：DoubleClick for Publishers
- DMP：データ管理プラットフォーム
- DSP：デマンドサイドプラットフォーム
- eCPM：有効インプレッション単価
- HB：ヘッダービディング
- RTB：リアルタイム入札
- SSP：サプライサイドプラットフォーム

## 概念と基礎

- [広告サーバーは何をし、どのような利点があるのか？](https://www.thinkwithgoogle.com/intl/en-145/perspectives/local-articles/what-does-ad-server-do-and-how-can-you-benefit-it/) - 広告サーバーの役割と、ビジネスにもたらす利点を説明。
- [広告サーバーとは](https://adzerk.com/blog/what-is-an-ad-server/) - 広告サーバーの概要、パブリッシャーと広告主の違い、広告サーバーを持つ理由を説明。

## ベストプラクティス

- [Coalition for Better Ads](https://www.betterads.org/) - オンライン広告の消費者体験を改善する方法を研究・公開し、標準を定義した企業グループ（Google、Facebook など）。

## 広告マネージャー / 広告サーバー / プラットフォーム

- [Adform](https://site.adform.com/) - 広告プラットフォーム。
- [Adzerk](https://adzerk.com/) - サーバー側広告プラットフォームを構築・拡張する広告配信 API。
- [Google Ad Manager（旧 DFP：DoubleClick for Publishers）](https://admanager.google.com/)
- [Google Display & Video 360（DV360、旧 DoubleClick Bid Manager）](https://displayvideo.google.com/) - クリエイティブ、データ、メディアの各チームが連携し、キャンペーンを一貫して実施するための統合ツール。
- [Smart AdServer](https://smartadserver.com/) - 広告サーバー。

## Google Ad Manager

- [Ad Manager と Ad Exchange について](https://support.google.com/admanager/topic/7505788) - Google Ad Manager と Ad Exchange の情報。
- [一般的な問題 / トラブルシューティング](https://support.google.com/admanager/topic/6048322) - Google Ad Manager の一般的な問題や不具合を解決する方法。
- [Google Ad Manager の基礎](https://skillshop.exceedlms.com/student/path/17117-drive-advertising-revenue-with-google-ad-manager) - Ad Manager に関する Google Academy の動画（視聴にはログインが必要）。
- [ヘルプセンター](https://support.google.com/admanager/) - Google Ad Manager ヘルプセンター。
- [リリースノート（2019年）](https://support.google.com/admanager/answer/9197913) - 2019年の Google Ad Manager リリースアーカイブ。
- [セットアップガイド](https://support.google.com/admanager/topic/7505789) - Google Ad Manager のセットアップガイド。

## GAM ライブラリ / ツール

- React DFP - [GitHub](https://github.com/jaanauati/react-dfp) | [ドキュメント](http://react-dfp.ml/) - ウェブサイトへ Google Ad Manager を実装する React ライブラリ。

## Facebook / Instagram

- [Facebook Blueprint](https://www.facebook.com/business/learn) - Facebook と Instagram の広告に関するオンライントレーニング。

## プログラマティック

- [Google Ads Academy：プログラマティック](https://academy.exceedlms.com/student/catalog/list?category_ids=682-programmatic) - プログラマティックに関する Google Academy の動画（視聴にはログインが必要）。

## ヘッダービディング（HB）

- [初心者向けヘッダービディングガイド](https://adprofs.co/beginners-guide-to-header-bidding/) - HB、その重要性、仕組みを理解するための完全ガイド。
- [Prebid によるヘッダービディングとは](http://prebid.org/overview/intro.html#header-bidding) - HB 実装に最も広く使われるライブラリによるガイド。

## Prebid

- [Prebid](http://prebid.org/) - HB 実装に最も広く使われるライブラリのウェブサイト。
- [AdOps 向け Prebid](http://prebid.org/adops/before-you-start.html) - 広告運用担当者向け Prebid ガイド。
- [開発者向け Prebid](http://prebid.org/developers.html) - 開発者向け Prebid ガイド。
- [Google Ad Manager + Prebid.js](http://prebid.org/adops/setting-up-prebid-multi-format-in-dfp.html) - Google Ad Manager で Prebid.js をセットアップする方法。
- [Smart Ad Server + Prebid.js](https://support.smartadserver.com/s/article/Holistic-Setup) - Smart Ad Server で Prebid.js をセットアップする方法。

## Prebid ライブラリ / ツール

- [Prebid + GAM セットアップツール](https://github.com/kmjennison/dfp-prebid-setup) - Prebid.js と Google Ad Manager 向けの広告申込情報自動生成器。
- React Prebid - [GitHub](https://github.com/technology-ebay-de/react-prebid) | [ドキュメント](https://github.com/technology-ebay-de/react-prebid/wiki) - ウェブサイトへ Google Ad Manager を実装する React ライブラリ。

## ニュースレター

- [AdProfs](https://adprofs.co/this-week-in-ad-tech/) - 今週の広告技術。週1通、5分で読めます。
- [Facebook のビジネスニュース](https://www.facebook.com/business/m/updates-signup) - Facebook から届く最新情報、マーケティング動向、広告のヒント。
- [Simon J. Harris の Happy Friday](https://simonjharris.substack.com) - [@SimonJHarris](https://twitter.com/SimonJHarris) が厳選した広告技術情報。

## 貢献

このリストへの貢献はいつでも歓迎します。[貢献ガイドライン](https://github.com/cenoura/awesome-ads/blob/master/CONTRIBUTING.md)を確認し、項目を追加・更新する PR を自由に作成してください。

## 連絡先

このリストについて質問や提案がある場合は、Twitter の [@\_seunoura](https://twitter.com/_seunoura) へ連絡するか、[Issue を作成](https://github.com/cenoura/awesome-ads/issues/new)してください。

## ライセンス

この作品には [Creative Commons Attribution 4.0 International](https://github.com/cenoura/awesome-ads/blob/master/LICENSE) が適用されます。
