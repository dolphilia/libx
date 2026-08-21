---
title: "rickstaa/awesome-adsb"
description: "rickstaa/awesome-adsb の定本スナップショット"
licenseSource: "github-rickstaa-awesome-adsb-readme-md"
---

<div align="center">

# <a style="color: inherit" href="https://github.com/rickstaa/awesome-adsb">Awesome ADS-B</a> [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![GitHub contributors](https://img.shields.io/github/contributors/rickstaa/awesome-adsb?color=geen)](https://github.com/rickstaa/awesome-adsb/graphs/contributors) [![GitHub Repo stars](https://img.shields.io/github/stars/rickstaa/awesome-adsb)](https://github.com/rickstaa/awesome-adsb/stargazers)

> **注記**
> `adsb.cool` と入力するだけでここに移動できます。

優れた[ASD-B](https://en.wikipedia.org/wiki/Automatic_Dependent_Surveillance%E2%80%93Broadcast)ツール、プロジェクト、Dockerイメージ、リソースなどを集めた厳選リスト 📡。

<a href="https://www.sportys.com/blog/ads-b-101-what-you-need-know" target="_blank" rel="noopener noreferrer">
  <img width="600" src="https://www.sportys.com//media/wysiwyg/blog/13_-_Navigating_and_Automation_in_the_21st_Century.png" alt="ADSB.cool Logo"/>
</a>

**Automatic Dependent Surveillance–Broadcast（ADS-B）**は、電子的な[視認性](https://en.wikipedia.org/wiki/Airborne_collision_avoidance_system#Aircraft_collision_avoidance)の一形態である監視技術です。[航空機](https://en.wikipedia.org/wiki/Aircraft)が[衛星航法](https://en.wikipedia.org/wiki/Satellite_navigation)などのセンサーを通じて自らの位置を決定し、定期的に送信することで追跡可能にします。

</div>

## 目次

- [ドキュメントとクイックスタート](#docs-and-quickstarts)
- [書籍と記事](#books-and-articles)
- [ADS-Bアグリゲーター](#ads-b-aggregators)
  - [オープンソース志向](#open-source-orientated)
  - [コミュニティ主導](#community-driven)
  - [非営利団体](#non-profits)
  - [商用](#commercial)
  - [その他](#other)
- [ソフトウェア](#software)
  - [一般](#general)
  - [フィーディング](#feeding)
  - [可視化](#visualisation)
  - [アプリ](#apps)
  - [ソーシャル](#social)
- [ADS-B由来データ](#ads-b-derived-data)
- [ハードウェア](#hardware)
  - [SBC](#sbc)
  - [受信機](#receivers)
  - [フィルター](#filters)
  - [アンテナ](#antennas)
- [フォロー](#follow)

## ドキュメントとクイックスタート

- [ADS-B Docker guide](https://sdr-enthusiasts.gitbook.io/ads-b/) - ADS-Bの受信、復号、共有について知りたいすべて。
- [ADS-B equipment guide](https://sdr-enthusiasts.gitbook.io/ads-b/intro/equipment-needed) - コミュニティが作成した優れたADS-Bハードウェアガイド。
- [PiAware ADS-B tutorial](https://flightaware.com/adsb/piaware/build/) - FlightAwareによるADS-Bセットアップチュートリアル。
- [ADSB-B transponders guide](https://www.sportys.com/blog/ads-b-out-questions-1090-978/) - 978MHz・1090MHzトランスポンダーの違いを説明するガイド。

## 書籍と記事

- [The 1090 Megahertz Riddle - Junzi Sun](https://mode-s.org/decode/index.html) - Mode S・ADS-B信号を復号するためのガイド。

## ADS-Bアグリゲーター

> **注記**
> 以下のアグリゲーターは**2026-01-17**時点のフィーダー数に基づきカテゴリごとに表示しています。フィーダー数が利用できない場合は、追跡する航空機数で比較しました。並び順を更新すべき場合は、[プルリクエストを作成](https://github.com/rickstaa/awesome-adsb/pulls)してください。

### オープンソース志向

- [airplanes.live](https://airplanes.live) - Airplanes.Liveの使命は、フィルタリングされていない航空データの包括的なリポジトリを集約しアクセス可能にすること。地図と無料APIを提供する。
- [ADSB One](https://adsb.one) - 航空関連情報のワンストップリソースであり、公共の利益に法的に特化した航空フィードデータのコミュニティ主導アグリゲーター。
- [adsb.fi](https://adsb.fi) - 世界中の何百ものフィーダーによるコミュニティ主導のフライトトラッカー。世界の航空交通データへのオープンかつ無フィルターのアクセスを提供する。
- [ADSB.lol](https://adsb.lol) - [ODbLライセンス](https://opendatacommons.org/licenses/odbl/summary/)のデータを[無料API](https://api.adsb.lol/)および[無料の履歴データ](https://github.com/adsblol/globe_history)で表示・提供する、完全オープンソースでコミュニティ主導のフライトトラッカー。

### コミュニティ主導

- [ADSBHub.org](https://www.adsbhub.org) - 航空機追跡愛好家、スポッター、アマチュア無線家、ADS-B関連ソフトウェア開発に関心を持つ専門家の間で、リアルタイムADS-Bデータを共有・交換するサービス。
- [TheAirTraffic](https://theairtraffic.com) - サイト上の航空追跡データをオープンかつ無フィルターに保つことに専念するコミュニティ主導ADS-Bアグリゲーター。
- [PlaneSpotters.net](https://www.planespotters.net) - 航空機写真・情報を大量に集めた民間航空データベース・アグリゲーター。
- [Plane.watch](https://plane.watch) - コミュニティがホストするフライトトラッカー。
- [www.live-military-mode-s.eu](https://www.live-military-mode-s.eu) - 軍用航空機の追跡に焦点を置くコミュニティ主導フライトトラッカー。
- [adsb.chaos-consulting.de](https://adsb.chaos-consulting.de) - 愛好家が運営する飛行機、船舶、ラジオゾンデの非商用トラッカー。個々のフィーディング局の貢献に焦点を置く。

### 非営利団体

- [Opensky Network](https://opensky-network.org) - スイスを拠点とし、飛行追跡制御データへのオープンアクセスを提供する非営利団体。空域の安全性、信頼性、効率性を改善するため、複数の大学・政府機関が研究プロジェクトとして設立した。

### 商用

- [FlightAware](https://flightaware.com)[^1] - リアルタイム、履歴、予測のフライト追跡データ・製品を提供する米国の多国籍技術企業。
- [FlightRadar24](https://www.flightradar24.com)[^1] - 地図上でリアルタイム航空機追跡情報を表示するスウェーデンのインターネットベースサービス。
- [RadarBox](https://www.radarbox.com)[^1] - 世界中の商業・一般航空向けフライト追跡を提供する、タンパ拠点のグローバル飛行追跡・データサービス企業。
- [ADS-B Exchange](https://www.adsbexchange.com/) - 高忠実度で安定・安全なフライト追跡サービスを提供する企業。ボランティア・飛行愛好家により始められたが、最近[JETNET](https://www.jetnet.com/)に買収された。
- [PlaneFinder.net](https://planefinder.net)[^1] - フライト番号、航空機速度、高度、目的地などの世界の飛行データを表示する英国拠点のリアルタイムフライト追跡サービス。
- [AvDelphi](https://www.avdelphi.com) - 機体、登録、型式、空港・飛行、レーダー・航法地点、所有者・飛行履歴を表示する航空データ・サービス企業。
- [RadarVirtuel](https://www.radarvirtuel.com) - プレミアム機能を提供する飛行データ収集サービス。世界の小規模空港周辺の交通情報収集を主眼とする。

[^1]: [FAA](https://www.faa.gov/)の[航空機尾翼番号のブロック／ブロック解除リスト](https://www.faa.gov/pilots/ladd/request)に従う。そのため、このプラットフォームのデータはフィルタリングされ、ほかのアグリゲーターにあるすべてのデータを含まない場合がある。

### その他

- [Airframes.io](https://app.airframes.io/) - 世界中のボランティアからACARS、VDL、HFDL、SATCOMデータを受信する航空機関連アグリゲーションサービス。ADS-Bアグリゲーターと密接に連携し、内部でADS-Bデータを扱う。
- [gcmb.io](https://gcmb.io/adsb/adsb) - MQTTプロトコルで公開されるABSBHub.orgのADS-Bデータ。

## ソフトウェア

### 一般

- [readsb](https://github.com/wiedehopf/readsb) - ADS-Bデコーダーのスイスアーミーナイフ。
- [dump1090](https://github.com/MalcolmRobb/dump1090) - RTLSDRデバイス向けのシンプルなMode Sデコーダー。
- [flightmon](https://github.com/mik3y/flightmon) - 現在のdump1090/readsbデータを表示するシンプルなコマンドライン「GUI」。
- [sdr-enthusiasts/plane-alert-db](https://github.com/sdr-enthusiasts/plane-alert-db) - 政府、独裁者、軍事、歴史的な機体、単に奇妙な機体など、興味深い航空機のリスト。
- [junzis/pyModeS](https://github.com/junzis/pyModeS) - Mode S・ADS-B信号向けPythonデコーダー。
- [adsb_actions](https://github.com/eastham/adsb_actions) - ADS-B交通・イベントを検出、処理、可視化するPythonツール。

### フィーディング

- [sdr-enthusiasts/docker-adsb-ultrafeeder](https://github.com/sdr-enthusiasts/docker-adsb-ultrafeeder) - readsb、tar1090、graphs1090、autogain、multi-feeder、mlat-hubを内蔵したオールインワンADSBコンテナー。
- [adsbfi/adsb-fi-scripts](https://github.com/adsbfi/adsb-fi-scripts) - adsb.fiへフィードするための使いやすいフィーダーインストールスクリプト。
- [adsblol/feed](https://github.com/adsblol/feed) - 使いやすいコンテナーベースのMLAT/ADS-B/ACARS/VDL2マルチフィードクライアント。[SDR-Enthusiasts](https://github.com/sdr-enthusiasts)イメージを使用する。
- [adsb.im](https://adsb.im/home) - 使いやすいADS-Bフィーダーイメージ。Raspberry Piなどのシングルボードコンピューターをセットアップして、コマンドライン・ターミナルの技能なしで航空機ADS-B位置レポートを受信・共有する。オープンソースと商用のフライト追跡サイトの双方とデータを共有できる。

### 可視化

- [wiedehopf/tar1090](https://github.com/wiedehopf/tar1090) - ADS-Bデータを表示する優れた方法。
- [amnesica/BelugaProject](https://github.com/amnesica/BelugaProject) - ブラウザーの地図インターフェースで、一つまたは複数のローカルADS-BフィーダーとAISデータを追加情報とともに表示するWebアプリケーション。
- [Grafana](https://grafana.com/) - すべてのデータベース向けオープンソース分析・監視ソリューション。

### アプリ

- [d4rken/adsb-meta-tracker](https://github.com/d4rken/adsb-meta-tracker) - ADS-Bアグリゲーターに関するメタデータを表示するAndroid ADS-Bメタトラッカー。
- [AirPing](https://airping.app) - tar1090またはreadsbインスタンスをモバイルフライトトラッカーへ変えるiOSアプリ。

### ソーシャル

- [docker-planefence](https://github.com/kx1t/docker-planefence) - 受信機の範囲（フェンス）内に入った航空機を記録、表示、ツイートできる小さなツール。
- [Jxck-S/plane-notify](https://github.com/Jxck-S/plane-notify) - OpenSkyまたはADS-B Exchangeデータを使い、選択した航空機の離陸・着陸を通知する。

## ADS-B由来データ

- [aircraft-flight-schedules](https://github.com/MrAirspace/aircraft-flight-schedules) - 世界中の航空機ADS-B位置送信から抽出した、グローバルで高水準のオープンソース飛行スケジュールデータセット（2024年以降）。[ADSBlol](https://adsb.lol/)イニシアチブのカバー範囲内である限り、全世界の飛行を対象とする。

## ハードウェア

### SBC

- [Raspberry Pi](https://www.raspberrypi.org/) - 英国で開発された小型シングルボードコンピューター。
- [Orange Pi](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/details/Orange-Pi-5.html) - OSの費用効率の高いハードウェアを使って作られたシングルボードコンピューター。
- [Banana Pi](https://banana-pi.org/) - 中国のオープンソースハードウェアコミュニティが作ったシングルボードコンピューター。

### 受信機

- [FlightAware ADS-B USB receivers](https://flightaware.store/collections/radio-dongles) - FlightAware製ADS-B USB受信機。
- [AirNav RadarBox ADS-B USB receivers](https://www.radarbox.com/store) - RadarBox製ADS-B USB受信機。
- [RTL-SDR DONGLES](https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/) - 公正な小売価格の維持に重点を置くプレミアムRTL-SDRドングルプロバイダー。

### フィルター

> **警告**
> 一部のADS-B USB受信機には、すでにオンボードフィルターが含まれています。

- [FlightAware Signal filters](https://flightaware.store/collections/signal-filters) - FlightAware製の各種信号フィルター。

### アンテナ

- [Vinnant antennas](https://vinnant.sk/) - スロバキア製の専門的なプレミアムアンテナ。
- [DPD antennas](https://dpdproductions.com/) - 米国で生産される、さまざまな無線サービス向け高品質アンテナ。

## フォロー

> **TODO:**
> フォローに値するADS-B分野の人物を知っている場合は、[プルリクエストを作成](https://github.com/rickstaa/awesome-adsb/pulls)してください。

ほかに[フォローすべき](https://github.com/rickstaa/awesome-adsb/issues/new?assignees=&labels=&template=suggestion.yaml)人はいますか？

**[⬆ 先頭へ戻る](#contents)**

## 寄稿

あらゆる種類の寄稿を歓迎します 💙！[寄稿ガイドライン](https://github.com/rickstaa/awesome-adsb/blob/72205199a67965bf8990fe91efb0de23cf66172e/contributing.md)を確認してください。

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

### 寄稿者

このプロジェクトは[寄稿した](https://github.com/rickstaa/awesome-adsb/graphs/contributors)すべての人のおかげで存在しています！

<a href="https://github.com/rickstaa/awesome-adsb/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=rickstaa/awesome-adsb" />
</a>
</br>
</br>
