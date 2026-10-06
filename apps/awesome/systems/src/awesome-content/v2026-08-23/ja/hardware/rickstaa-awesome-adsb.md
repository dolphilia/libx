---
title: "Awesome ADS-B"
description: "ADS-Bの受信・デコードガイド、航空機データの集約サービス、データ送信ソフトウェア、派生データセット、受信機材。"
licenseSource: "github-rickstaa-awesome-adsb-readme-md"
---

# Awesome ADS-B

[Automatic Dependent Surveillance–Broadcast（ADS-B）](https://en.wikipedia.org/wiki/Automatic_Dependent_Surveillance%E2%80%93Broadcast)は、航空機が位置を放送し、追跡を可能にする仕組みです。このリストでは、受信・デコードガイド、航空機データの集約サービス、データ送信・可視化ソフトウェア、派生した運航時刻情報、受信機材を探せます。

ADS-Bは監視技術であり、電子的に航空機の存在を知らせる[可視性（conspicuity）](https://en.wikipedia.org/wiki/Airborne_collision_avoidance_system#Aircraft_collision_avoidance)を提供する方式の一つです。[航空機](https://en.wikipedia.org/wiki/Aircraft)は[衛星航法](https://en.wikipedia.org/wiki/Satellite_navigation)または他のセンサーで位置を求め、それを周期的に放送することで追跡を可能にします。

原文の[ADS-Bの図](https://www.sportys.com//media/wysiwyg/blog/13_-_Navigating_and_Automation_in_the_21st_Century.png)にはAviation Seminarsの標章があり、GNSS衛星、航空機の位置報告、TIS-Bと航空機間の接続、地上局や航空交通管制（ATC）との通信が描かれています。航空路管制センター（ARTCC）と空港のターミナルレーダーも示されています。通信衛星と地上局に関わる接続は「Projected Capability（将来想定される機能）」と記され、既存の機能としては示されていません。図の掲載元は[ADS-B 101の記事](https://www.sportys.com/blog/ads-b-101-what-you-need-know)です。

## ドキュメントとクイックスタート<a id="docs-and-quickstarts"></a>

- [ADS-B Dockerガイド](https://sdr-enthusiasts.gitbook.io/ads-b/) - ADS-Bの受信・デコード・共有のガイド。
- [ADS-B機材ガイド](https://sdr-enthusiasts.gitbook.io/ads-b/intro/equipment-needed) - コミュニティが執筆したADS-Bハードウェアのガイド。
- [PiAware ADS-Bチュートリアル](https://flightaware.com/adsb/piaware/build/) - FlightAwareによるADS-Bのセットアップチュートリアル。
- [ADS-Bトランスポンダーガイド](https://www.sportys.com/blog/ads-b-out-questions-1090-978/) - 978 MHzと1090 MHzのトランスポンダーの違いを説明するガイド。

## 書籍と記事<a id="books-and-articles"></a>

- [The 1090 Megahertz Riddle - Junzi Sun](https://mode-s.org/decode/index.html) - Mode SとADS-B信号のデコードを解説する書籍。

## ADS-Bデータ集約サービス<a id="ads-b-aggregators"></a><a id="ads-bアグリゲーター"></a>

各分類内のサービスは、2026年1月17日時点のデータ送信局数に基づいて並べられています。送信局数が得られない場合、原文では追跡する航空機数を比較しています。

### オープンソース志向<a id="open-source-orientated"></a>

- [airplanes.live](https://airplanes.live) - フィルターをかけていない航空機データを集約し、地図と無料APIを提供するサービス。
- [ADSB One](https://adsb.one) - 航空機のデータフィードと関連情報を集約するコミュニティ主導のサービス。法的に公益目的へ供されている。
- [adsb.fi](https://adsb.fi) - 世界各地の数百のデータ送信局を持つコミュニティ主導の航空機追跡サービス。世界の航空交通データをオープンに、フィルターをかけずに提供する。
- [ADSB.lol](https://adsb.lol) - 全体がオープンソースのコミュニティ主導の航空機追跡サービス。[ODbLライセンス](https://opendatacommons.org/licenses/odbl/summary/)のデータを表示し、[無料API](https://api.adsb.lol/)を通じて提供する。[過去のデータも無料](https://github.com/adsblol/globe_history)で利用できる。

### コミュニティ主導<a id="community-driven"></a>

- [ADSBHub.org](https://www.adsbhub.org) - 航空機追跡の愛好家、航空機撮影者、アマチュア無線家、ADS-Bソフトウェアを開発する専門家向けの、リアルタイムADS-Bデータの共有・交換サービス。
- [TheAirTraffic](https://theairtraffic.com) - 航空機追跡データをオープンに、フィルターをかけずに提供することを目指すコミュニティ主導のADS-B集約サービス。
- [PlaneSpotters.net](https://www.planespotters.net) - 多数の航空機写真と情報を収録する民間航空のデータベース・集約サービス。
- [Plane.watch](https://plane.watch) - コミュニティがホストする航空機追跡サービス。
- [www.live-military-mode-s.eu](https://www.live-military-mode-s.eu) - 軍用機の追跡を中心とするコミュニティ主導のサービス。
- [adsb.chaos-consulting.de](https://adsb.chaos-consulting.de) - 愛好家が運営する、航空機・船舶・ラジオゾンデの非商用追跡サービス。個々のデータ送信局からの提供を重視する。

### 非営利団体<a id="non-profits"></a>

- [Opensky Network](https://opensky-network.org) - 航空機の追跡・管制データへのオープンなアクセスを提供するスイスの非営利団体。空域の安全性・信頼性・効率を高めるため、複数の大学と政府機関が参加する研究プロジェクトとして始まった。

### 商用<a id="commercial"></a>

- [FlightAware](https://flightaware.com)[^1] - リアルタイム・過去・予測の航空機追跡データと製品を提供する米国の多国籍技術企業。
- [FlightRadar24](https://www.flightradar24.com)[^1] - リアルタイムの航空機追跡情報を地図に表示するスウェーデンのオンラインサービス。
- [RadarBox](https://www.radarbox.com)[^1] - タンパを拠点とする世界規模の航空機追跡・データサービス企業。世界の商業航空と一般航空を対象とする。
- [ADS-B Exchange](https://www.adsbexchange.com/) - ボランティアと航空愛好家が設立した航空機追跡企業。原文ではサービスを高精度・安定・安全と説明し、[JETNET](https://www.jetnet.com/)による買収を執筆時点で最近の出来事として記している。
- [PlaneFinder.net](https://planefinder.net)[^1] - 世界各地の便名、航空機の速度・高度・目的地を表示する、英国拠点のリアルタイム追跡サービス。
- [AvDelphi](https://www.avdelphi.com) - 機体・登録情報・機種、空港・便、レーダー・航法地点、所有者・飛行履歴を扱う航空データ・サービス。
- [RadarVirtuel](https://www.radarvirtuel.com) - 有料の追加機能を提供する航空機データ収集サービス。世界各地の小規模空港周辺の交通情報を中心に扱う。

[^1]: 原文では、これらのサービスは[FAA](https://www.faa.gov/)の[航空機尾翼番号の公開制限・解除リスト](https://www.faa.gov/pilots/ladd/request)に従うとされています。そのため、提供データにはフィルターがかかり、他の集約サービスで得られるデータが含まれない場合があります。

### その他<a id="other"></a>

- [Airframes.io](https://app.airframes.io/) - 世界各地のボランティアからACARS・VDL・HFDL・SATCOMデータを受信する航空機データの集約サービス。ADS-B集約サービスと密接に連携し、内部でもADS-Bデータを利用する。
- [gcmb.io](https://gcmb.io/adsb/adsb) - ADSBHub.orgのADS-BデータをMQTTで配信するサービス。

## ソフトウェア<a id="software"></a>

### 汎用ツール<a id="general"></a><a id="一般"></a>

- [readsb](https://github.com/wiedehopf/readsb) - 多用途のADS-Bデコーダー。
- [dump1090](https://github.com/MalcolmRobb/dump1090) - RTLSDRデバイス向けのシンプルなMode Sデコーダー。
- [flightmon](https://github.com/mik3y/flightmon) - dump1090/readsbの現在のデータを表示するコマンドラインのインターフェース。
- [sdr-enthusiasts/plane-alert-db](https://github.com/sdr-enthusiasts/plane-alert-db) - 政府・独裁者に関係する航空機、軍用機、歴史的な航空機、珍しい航空機を収録するリスト。
- [junzis/pyModeS](https://github.com/junzis/pyModeS) - Mode SとADS-B信号のPythonデコーダー。
- [adsb_actions](https://github.com/eastham/adsb_actions) - ADS-Bの航空機データとイベントを検出し、それに応じた処理や可視化を行うPythonツール。

### データ送信<a id="feeding"></a><a id="フィーディング"></a>

- [sdr-enthusiasts/docker-adsb-ultrafeeder](https://github.com/sdr-enthusiasts/docker-adsb-ultrafeeder) - readsb、tar1090、graphs1090、autogain、multi-feeder、mlat-hubをまとめたADS-Bコンテナー。
- [adsbfi/adsb-fi-scripts](https://github.com/adsbfi/adsb-fi-scripts) - adsb.fiへデータを送信するための、送信ソフトウェアのインストールスクリプト。
- [adsblol/feed](https://github.com/adsblol/feed) - MLAT・ADS-B・ACARS・VDL2に対応し、複数宛先へデータを送信するコンテナー方式のクライアント。[SDR-Enthusiasts](https://github.com/sdr-enthusiasts)のイメージを使用する。
- [adsb.im](https://adsb.im/home) - Raspberry Piなどのシングルボードコンピューターで航空機の位置報告を受信・共有するADS-B送信ソフトウェアのイメージ。コマンドラインやターミナルの操作スキルを必要とせず、オープンソースと商用の双方の航空機追跡サイトへ共有できる。

### 可視化<a id="visualisation"></a>

- [wiedehopf/tar1090](https://github.com/wiedehopf/tar1090) - ADS-Bデータを表示するツール。
- [amnesica/BelugaProject](https://github.com/amnesica/BelugaProject) - 1局以上のローカルADS-B送信局のデータ、AISデータ、追加情報をブラウザーの地図に表示するWebアプリケーション。
- [Grafana](https://grafana.com/) - オープンソースの分析・監視ソリューション。原文ではあらゆるデータベースに対応すると説明されている。

### アプリ<a id="apps"></a>

- [d4rken/adsb-meta-tracker](https://github.com/d4rken/adsb-meta-tracker) - ADS-B集約サービスのメタデータを表示するAndroidアプリ。
- [AirPing](https://airping.app) - tar1090またはreadsbのインスタンスをモバイル航空機追跡サービスとして使えるようにするiOSアプリ。

### 通知とソーシャル共有<a id="social"></a><a id="ソーシャル"></a>

- [docker-planefence](https://github.com/kx1t/docker-planefence) - 受信機の範囲内（「fence」）に入った航空機を記録・表示し、ツイートするツール。
- [Jxck-S/plane-notify](https://github.com/Jxck-S/plane-notify) - OpenSkyまたはADS-B Exchangeのデータを使い、選択した航空機の離陸・着陸を通知するツール。

## ADS-Bの派生データ<a id="ads-b-derived-data"></a><a id="ads-b由来データ"></a>

- [aircraft-flight-schedules](https://github.com/MrAirspace/aircraft-flight-schedules) - 2024年以降の世界各地の航空機のADS-B位置放送から、概括的な運航時刻情報を抽出したオープンソースのデータセット。[ADSBlol](https://adsb.lol/)の受信範囲内にある世界各地の全フライトを対象とする。

## ハードウェア<a id="hardware"></a>

### シングルボードコンピューター<a id="sbc"></a>

- [Raspberry Pi](https://www.raspberrypi.org/) - 英国で開発された小型のシングルボードコンピューター。
- [Orange Pi](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/details/Orange-Pi-5.html) - 費用対効果を重視したオープンソースのハードウェアを使うシングルボードコンピューター。
- [Banana Pi](https://banana-pi.org/) - 中国のオープンソースハードウェアコミュニティが開発したシングルボードコンピューター。

### 受信機<a id="receivers"></a>

- [FlightAware ADS-B USB受信機](https://flightaware.store/collections/radio-dongles) - FlightAware製のADS-B USB受信機。
- [AirNav RadarBox ADS-B USB受信機](https://www.radarbox.com/store) - RadarBox製のADS-B USB受信機。
- [RTL-SDR DONGLES](https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/) - 適正な小売価格を重視するRTL-SDRドングルの販売元。原文では高級品を扱うと説明されている。

### フィルター<a id="filters"></a>

注意：一部のADS-B USB受信機には、既にフィルターが内蔵されています。

- [FlightAware信号フィルター](https://flightaware.store/collections/signal-filters) - FlightAware製の信号フィルター。

### アンテナ<a id="antennas"></a>

- [Vinnantアンテナ](https://vinnant.sk/) - スロバキア製の専用アンテナ。原文では高級品と説明されている。
- [DPDアンテナ](https://dpdproductions.com/) - さまざまな無線サービス向けの米国製アンテナ。原文では高品質と説明されている。
