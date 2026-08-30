---
title: "Awesome OpenStreetMap"
description: "OpenStreetMapを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。"
licenseSource: "github-osmlab-awesome-openstreetmap-readme-md"
---

# Awesome OpenStreetMap

OpenStreetMapを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。

## 目次

* [エディター](#editors)
  * [ウェブエディター](#web-editors)
  * [モバイルエディター](#mobile-editors)
  * [ネイティブエディター](#native-editors)
* [ツール](#tools)
  * [ウェブツール](#web-tools)
  * [モバイルツール](#mobile-tools)
  * [ネイティブツール](#native-tools)
  * [ブラウザー拡張機能](#browser-extensions)
* [変更セットツール](#changeset-tools)
  * [ウェブサービス](#web-services)
* [タスク管理ツール](#tasking-managers)
* [地図](#maps)
  * [ウェブ地図](#web-maps)
  * [モバイル地図](#mobile-maps)
  * [生成ツール](#generators)
  * [地図スタイル](#map-styles)
  * [地図ゲーム](#map-games)
  * [目標追跡](#goal-tracking)
* [ライブラリ](#libraries)
  * [C/C++](#cc)
  * [JavaScript](#javascript)
  * [Python](#python)
  * [Java](#java)
* [公開API](#public-apis)
* [その他](#miscellaneous)
* [動画](#video)
  * [グローバル](#global)
  * [地域別](#regional)
* [追加リソース](#additional-resources)
  * [ウェブサイト](#websites)
  * [Wikiページ](#wiki-pages)
* [記事](#articles)
* [コミュニティ](#communities)
  * [グローバルコミュニティ](#global-communities)
* [関連リスト](#related-lists)



## エディター

### ウェブエディター

* [iD](http://www.openstreetmap.org/edit?editor=id) - ウェブブラウザ用のJavaScriptベースのエディタで、多くのプリセットを提供。（[Source Code](https://github.com/openstreetmap/iD) / [Wiki](https://wiki.openstreetmap.org/wiki/ID)）
* [Level0](http://level0.osmz.ru/) - 特定のケースに有用なテキストベースのエディタ。（[Source Code](https://github.com/zverik/level0) / [Wiki](https://wiki.openstreetmap.org/wiki/Level0)）
* [Rapid](https://rapideditor.org/edit) - iDのAI支援バージョン。（[Meta-Repo](https://github.com/facebookmicrosites/Open-Mapping-At-Facebook) / [Editor Source Code](https://github.com/facebook/Rapid) / [Wiki](https://wiki.openstreetmap.org/wiki/RapiD)）
* [OSMyBiz](https://osmybiz.osm.ch) - 自社の情報を管理するためのウェブサイト。（[Source Code](https://gitlab.com/geometalab/osmybiz) / [Wiki](https://wiki.openstreetmap.org/wiki/OSMyBiz)）
* [OnOSM](https://www.onosm.org/) - 誰でもビジネス情報としてノートとしてOSMに追加できるようにする機能。（[Source Code](https://github.com/osmlab/onosm.org) / [Wiki](https://wiki.openstreetmap.org/wiki/Onosm.org)）
* [Healthsites.io](https://healthsites.io/map) - グローバルな健康施設のデータを追加・改善するためのオンラインエディタ。（[Source Code](https://github.com/healthsites/healthsites/) / [Wiki](https://wiki.openstreetmap.org/wiki/Healthsites.io)）

### モバイルエディター


* [StreetComplete](https://github.com/westnordost/StreetComplete) - OSMを改善するために簡単な質問に答えるアプリ。（[Android](https://play.google.com/store/apps/details?id=de.westnordost.streetcomplete) / [Wiki](https://wiki.openstreetmap.org/wiki/StreetComplete)）
* [Vespucci](https://vespucci.io/) - Android用の高度なフルデータモデルエディタ。（[Android](https://play.google.com/store/apps/details?id=de.blau.android) / [Source Code](https://github.com/MarcusWolschon/osmeditor4android) / [Wiki](https://wiki.openstreetmap.org/wiki/Vespucci)）
* [GoMap!!](http://gomaposm.com) - iOS向け機能豊富なモバイルエディタ。（[iOS](https://apps.apple.com/app/id592990211) / [Source Code](https://github.com/bryceco/GoMap) / [Wiki](https://wiki.openstreetmap.org/wiki/Go_Map!!)）
* [Every Door](https://every-door.app) - AndroidおよびiOSアプリで、OpenStreetMapにおけるオブジェクトの作成と編集が可能。ノードや多角形の編集をサポートし、店舗、ベンチ、建物の入り口など、ポイントタイプのオブジェクトを作成できる。（[Android](https://play.google.com/store/apps/details?id=info.zverev.ilya.every_door) / [iOS](https://apps.apple.com/app/id1621945342) / [Source Code](https://github.com/zverik/every_door) / [Wiki](https://wiki.openstreetmap.org/wiki/Every_Door)）
* [OSM Go!](https://osmgo.com/) - Androidアプリおよびプログレッシブウェブアプリ（PWA）でOpenStreetMapへの貢献が可能。（[Android](https://play.google.com/store/apps/details?id=fr.dogeo.osmgo) / [Source Code](https://github.com/DoFabien/OsmGo) / [Wiki](https://wiki.openstreetmap.org/wiki/Osm_Go!)）
* [SCEE](https://github.com/Helium314/SCEE) - StreetComplete Expert Edition：StreetCompleteの改良版で、高度な編集機能を提供。（[Android](https://f-droid.org/packages/de.westnordost.streetcomplete.expert/) / [Wiki](https://wiki.openstreetmap.org/wiki/SCEE)）


### ネイティブエディター

* [JOSM](https://josm.openstreetmap.de) - 高度な拡張性を備えたデスクトップエディタ。（[Source Code](https://josm.openstreetmap.de/browser) / [Wiki](https://wiki.openstreetmap.org/wiki/JOSM)）
* [Potlatch 3](https://www.systemed.net/potlatch/) - Adobe AIRで構築されたネイティブな中級レベルエディタ。（[Source Code](https://github.com/systemed/potlatch3) / [Wiki](https://wiki.openstreetmap.org/wiki/Potlatch)）
* [Merkaartor](https://github.com/openstreetmap/merkaartor) - C++およびQtで構築されたオープンソースOSMエディタ。

## ツール

### ウェブツール

* [OpenMapTiles](https://openmaptiles.org/) - 50以上の言語に対応したラベルを備えた、セルフホスト型ベクターマップとマップサービスのツールセット。（[Source Code](https://github.com/openmaptiles) / [Wiki](https://wiki.openstreetmap.org/wiki/OpenMapTiles)）
* [OSMNames](http://osmnames.org/) - 地名を地理座標に変換するツールで、対応するウィキペディアページの人気度に基づいて順位を決定。 ([Source Code](https://github.com/osmnames/osmnames) / [Wiki](https://wiki.openstreetmap.org/wiki/OSMNames))
* [overpass-turbo](http://overpass-turbo.eu) - OpenStreetMap用のウェブベースデータマイニングツール（Overpass APIを用いる）。 ([Source Code](https://github.com/tyrasd/overpass-turbo) / [Wiki](https://wiki.openstreetmap.org/wiki/Overpass_turbo))
* [hdyc](http://hdyc.neis-one.org) - 任意のOSMユーザーの貢献度を可視化する統計表示ツール。 ([Wiki](https://wiki.openstreetmap.org/wiki/How_did_you_contribute%3F))
* [Osmose](https://osmose.openstreetmap.fr) - OpenStreetMapデータに検出された問題を修正するための品質保証ツール。 ([Source Code](https://github.com/osm-fr?q=osmose) / [Wiki](https://wiki.openstreetmap.org/wiki/Osmose))
* [opening_hours evaluation tool](https://openingh.openstreetmap.de/evaluation_tool/) - `opening_hours`タグの評価を行うツール。 ([Source Code](https://github.com/opening-hours/opening_hours.js))
* [taginfo](https://taginfo.openstreetmap.org/) - タグとその使用方法に関する情報を表示するウェブサイト。 ([Source Code](https://github.com/taginfo/taginfo/) / [Wiki](https://wiki.openstreetmap.org/wiki/Taginfo))
* [Turn Restrictions](https://ahorn.lima-city.de/tr/) - turn-restrictions and linked errors向けのViewer。
* [NLMaps](https://nlmaps.gorgor.de/) - OSMデータを普通の英語で問い合わせ可能なウェブサイト
* [My Notes](https://my-notes.osm-hr.org/) - finding your old unresolved notes向けのSearch。
* [YoHours](https://projets.pavie.info/yohours/) - `opening_hours`タグを生成するツール。 ([Source Code](https://framagit.org/PanierAvide/YoHours))
* [OpenStreetMap Welcome Tool](https://welcome.osm.be/) - あなたの地域にいる新規マッパーを発見するツール。 ([Source Code](https://github.com/osmbe/osm-welcome-tool))
* [Web To OSM Opening Hours](https://webmapping.cyou/WebToOSMOH/) - 人間が読みやすい開店時間情報を `opening_hours` タグに変換するツール。（[Source Code](https://github.com/OSM-de/WebToOSMOH)）
* [ohsome Dashboard](https://ohsome.org/apps/dashboard/) - ある期間における変化を可視化するツール。（[Wiki](https://wiki.openstreetmap.org/wiki/Ohsome_Dashboard)）
* [OSM Statistics](https://piebro.github.io/openstreetmap-statistics/) - 編集者や企業による寄与に関する最新のOSM統計情報
* [Bellingcat OpenStreetMap search](https://osm-search.bellingcat.com/) - OpenStreetMap上で近接する特徴を検索して地理位置リードを発見するウェブベースツール。（[Source Code](https://github.com/bellingcat/osm-search) / [Article](https://www.bellingcat.com/resources/how-tos/2023/05/08/finding-geolocation-leads-with-bellingcats-openstreetmap-search-tool/)）
* [Ultra](https://overpass-ultra.us/) - Overpass、Postpass、Qlever、Ohsome、Sophoxなど、さまざまなデータAPIを使って地図を作成するウェブベースツール。（[Source Code](https://gitlab.com/trailstash/ultra)）

### モバイルツール

* [OSMTracker](https://github.com/labexp/osmtracker-android) - モバイル端末向けのOpenStreetMap補助ツールです。 参照: <https://wiki.openstreetmap.org/wiki/OSMTracker_(Android>

### ネイティブツール

* [Baremaps](https://www.baremaps.com/) - OpenStreetMapデータを処理するネイティブツールです。 参照: <https://github.com/baremaps/baremaps>

### ブラウザー拡張機能

* [better-osm-org](https://github.com/deevroman/better-osm-org) - OSMサイトに変更セットの可視化など多くの便利な機能を追加するユーザスクリプト
* [OpenStreetMap Tags Editor](https://github.com/Zverik/osmtags-editor) - OSMオブジェクトのタグ編集を可能にする機能を追加
* [OpenStreetMap Human-readable Wikidata](https://community.openstreetmap.org/t/announcing-human-readable-wikidata-browser-plugins-for-openstreetmap-org/108180) - Wikiタグの説明と図解を表示するツール。（[Source Code](https://github.com/ZeLonewolf/osm-wikidata-greasemonkey)）
* [OpenSwitchMaps](https://github.com/tankaru/OpenSwitchMaps) - [Firefox](https://addons.mozilla.org/firefox/addon/openswitchmaps/) と [fork](https://github.com/limex/OpenSwitchMaps-v3) のマップサービスを切り替えるツール（Manifest v3対応）。
* [JumpToOSMChangesetAnalyzer](https://github.com/tankaru/JumpToOSMChangesetAnalyzer) - OpenStreetMapの変更セットから変更セット分析サービスへジャンプ

## 変更セットツール

### ウェブサービス

* [osmcha](https://osmcha.org) - 疑いのある変更セットを検出するツール。（[Source Code](https://github.com/mapbox/osmcha-frontend) / [Wiki](https://wiki.openstreetmap.org/wiki/OSMCha)）
* [achavi](https://overpass-api.de/achavi/) - 強化された変更内容を表示するツール。（[Source Code](https://github.com/nrenner/achavi/) / [Wiki](https://wiki.openstreetmap.org/wiki/Achavi)）
* [Osm Change Viz](https://resultmaps.neis-one.org/osm-change-viz) - 追加・変更・削除された要素に関する情報を異なるパネルで表示する変更セット可視化
* [changeset-map](http://osmlab.github.io/changeset-map/) - 変更内容を可視化した地図。OsmChaで使用される。（[Source Code](https://github.com/osmlab/changeset-map)）
* [OSM History Viewer](https://osmhv.openstreetmap.de/) - 変更セットの可視化。（[Source Code](https://github.com/osmrmhv/osmrmhv)）
* [Who did it?](https://simon04.dev.openstreetmap.org/whodidit/) - タイルごとの最近の編集を強調した地図。カスタム範囲の変更を確認できるRSSフィードを提供。（[Source Code](https://github.com/simon04/whodidit) / [Wiki](https://wiki.openstreetmap.org/wiki/Quality_assurance#WhoDidIt)）

* [Osm Change Tiles](https://resultmaps.neis-one.org/osm-change-tiles) - watching changes in custom bounding boxes向けのMap highlighting recent edits per tile. Provides RSS feeds。
* [Analytic OSM Tracker](https://github.com/MichaelVL/osm-analytic-tracker) - changesets in your region向けの[^selfhosted-only] - Tracker。
* [Suspicious OSM Changesets](https://resultmaps.neis-one.org/osm-suspicious) - 怪しいOSM変更セットを検出
* [Changeset Text Search](https://resultmaps.neis-one.org/osm-changesets) - OSM変更セットをコメントでフィルタリング
* [Latest Changeset Discussions](https://resultmaps.neis-one.org/osm-discussions) - OSM変更セットに関する最新のディスカッションを表示
* [latest-changes](https://rene78.github.io/latest-changes/#2/15.0/-15.0) - 特定の地理的範囲内の最新OSM変更セットを可視化。簡易な悪意のある編集チェック機能を備える。（[Source Code](https://github.com/rene78/latest-changes/)）
* [OSM Inspector](https://tools.geofabrik.de/osmi/?view=geometry&lon=-12.00000&lat=25.00000&zoom=3&baselayer=Geofabrik%20Standard&overlays=long_ways%2Cways_with_long_segments%2Clong_segments%2Cself_intersection_ways%2Cself_intersection_points%2Csingle_node_in_way%2Cduplicate_node_in_way%2Clong_ways%2Cways_with_long_segments%2Clong_segments%2Cself_intersection_ways%2Cself_intersection_points%2Csingle_node_in_way%2Cduplicate_node_in_way) - advanced OpenStreetMap users offered by Geofabrik. On a map you can see several themed views, each with several layers, showing specific details of the OSM data, often with highlighted errors向けのThe OSM Inspector (alias OSMI) is a web based debugging tool。
* [Nominatim QA](https://nominatim.org/qa/#map=1.81/0.00/0.00) - Nominatimデータアナライザは、Nominatimデータベースをスキャンし、異常データを抽出した後、マッパーに視覚的なインターフェースを介して提示することで、その修正を直接行える品質保証ツールです


## タスク管理ツール

タスク管理ツールは、共通目標に向けた小さな作業を個々の利用者へ割り当てるウェブサイトです。

OpenStreetMapの改善に参加したい場合、この節はよい出発点になります。

* [HOT Tasking Manager](https://tasks.hotosm.org/) - supporting humanitarian missions in crisis areas向けのMapping tasks。
* [MapRoulette](https://maproulette.org/) - 小さな編集を行うことで大きなタスクを達成するためのさまざまな課題。（[Source Code](https://github.com/osmlab/maproulette3) / [Wiki](https://wiki.openstreetmap.org/wiki/MapRoulette)）
* [Pic4Review](https://pic4review.pavie.info/#/) - 画像を確認しながらOSMにオブジェクトを追加するツール。（[Source Code](https://framagit.org/Pic4Carto/Pic4Review) / [Wiki](https://wiki.openstreetmap.org/wiki/Pic4Review)）
* [Map Complete](https://mapcomplete.osm.be/) - 限定されたタスクに特化したマッピングツール。（[Wiki](https://wiki.openstreetmap.org/wiki/MapComplete)）
* [Damn Project](https://www.damn-project.org/) - 大きなエリアを人間がマッピング可能な小さな正方形に分割して行うマッピングプロジェクト。（[Source Code](https://git.sr.ht/~qeef/damn-deploy) / [Wiki](https://wiki.openstreetmap.org/wiki/Divide_and_map._Now.)）
* [NotesReview](https://ent8r.github.io/NotesReview/) - OSMノートの検索と解決に使うインターフェース。（[Source Code](https://github.com/ENT8R/NotesReview)）
* [TeachOSM Tasking Manager](https://tasks.teachosm.org/) - school classrooms to help map for humanitarian causes向けのTasking Manager made。
* [OSM Streak](http://streak.osmz.ru/) - OSMの日々の小さなタスクを手助けするツール。タスクは小さく、5分程度ですが、ポイントは毎日地図を更新することです。毎日地図を描くことが目的です。（[Source Code](https://github.com/Zverik/osmstreak)）

## 地図

### ウェブ地図

* [Baato Before-After Maps](https://beforeafter.baato.io/) - 前後比較地図を生成して、地域コミュニティが行った活動を可視化します。（[Source Code](https://github.com/baato/before-after)）
* [Show me the way](https://osmlab.github.io/show-me-the-way/) - 航空写真の最新変更をリアルタイムで表示する地図。（[Source Code](https://github.com/osmlab/show-me-the-way/) / [Wiki](https://wiki.openstreetmap.org/wiki/Show_Me_The_Way)）
* [OSM In Realtime](https://osm-in-realtime.jwestman.net/) - OpenStreetMapに実際に加えられた変更をリアルタイムで可視化。（[Source Code](https://gitlab.com/jwestman/osm-in-realtime) / [Wiki](https://wiki.openstreetmap.org/wiki/OSM-in-realtime)）
* [osm-livechanges](http://live.openstreetmap.fr/) - OpenStreetMapデータベース内の編集を近いリアルタイムで表示。（[Source Code](https://github.com/cstenac/osm-livechanges)）
* [indoor=](https://indoorequal.org) - OpenStreetMapの室内データを閲覧できる地図。（[Wiki](https://wiki.openstreetmap.org/wiki/Indoor%3D)）
* [F4map Demo](https://demo.f4map.com/) - OpenStreetMapデータの3Dレンダリングデモ。（[Wiki](https://wiki.openstreetmap.org/wiki/F4_Map)）
* [FacilMap](https://facilmap.org/) - POIタイプのフィルタが容易なマップ。（[Source Code](https://github.com/FacilMap/facilmap) / [Wiki](https://wiki.openstreetmap.org/wiki/FacilMap)）
* [Straßenraumkarte Neukölln](https://supaplexosm.github.io/strassenraumkarte-neukoelln/?map=micromap) - ドイツベルリンの「Neukölln」地区の高解像度マイクロマップ。（[Wiki](https://wiki.openstreetmap.org/wiki/Micromapping#Stra.C3.9Fenraumkarte_Neuk.C3.B6lln)）
* [Road Curvature](https://roadcurvature.com/map/) - カーブを好む人々に向けたカーブ道路の発見を支援。（[Source Code](https://github.com/adamfranco/curvature)）
* [OpenLevelUp!](https://openlevelup.net/) - OSMをベースにした室内マップ閲覧ツール。（[Wiki](https://wiki.openstreetmap.org/wiki/OpenLevelUp)）
* [AccessMap](https://www.accessmap.io/) - 移動制限のある人々が安全に利用できる、歩道を計画できるウェブマッププロジェクト。現在、ワシントン州の複数都市を対象に表示中。（[Source Code](https://github.com/accessmap)）
* [Cycle.Travel](https://cycle.travel/map) - OSMをベースにした自転車ルート計画ツール、および長距離自転車ルートや都市自転車に関する詳細な編集コンテンツを提供。（[Wiki](https://wiki.openstreetmap.org/wiki/Cycle.travel)）
* [OSM Landuse](https://osmlanduse.org) - OSMを基盤とした土地利用・土地カバーWebGISアプリケーション
* [OsmAPP](https://osmapp.org) - データを閲覧できるマップで、簡単なPOI編集機能を提供。（[Source Code](https://github.com/zbycz/osmapp)）
* [Tracesmap](https://tracesmap.com/) - planning routes on OsmCarto and OpenTopoMap-derived retina maps向けのA map allowing。
* [Visit Sights](https://visitsights.com/) - self-guided sightseeing tours by foot and overview of individual sights all around the world向けのSuggestions。
* [Defikarte.ch](https://www.defikarte.ch) - スイスとリヒテンシュタインにおけるすべての自動体外除顕器の位置を表示する地図。緊急対応センターおよび救急サービスでも利用されています。（ℹ️ドイツ語のみ）
* [Streets GL](https://github.com/StrandedKitty/streets-gl) - WebGL2を用いたOpenStreetMap 3Dレンダラー。（[Wiki](https://wiki.openstreetmap.org/wiki/Streets_GL)）
* [openclimbing.org](https://openclimbing.org) - rock climbers with editor for creating interactive climbing guides based on OpenStreetMap向けのA map。

### モバイル地図

* [OsmAnd](https://osmand.net) - AndroidおよびiOS向けにオフライン機能を備えた地図閲覧およびナビゲーション（ルート計画）アプリ。（Android、iOS / [Source Code Android](https://github.com/osmandapp/OsmAnd) / [Source Code iOS](https://github.com/osmandapp/OsmAnd-iOS) / [Wiki](https://wiki.openstreetmap.org/wiki/OsmAnd)）
* [Organic Maps](https://organicmaps.app/) - OSMをベースとした無料オフライン地図アプリ。（Android、iOS / [Source Code](https://github.com/organicmaps/organicmaps) / [Wiki](https://wiki.openstreetmap.org/wiki/Organic_Maps)）
* [Magic Earth](https://www.magicearth.com/) - 無料の途中ナビゲーションアプリ。（Android、iOS / [Wiki](https://wiki.openstreetmap.org/wiki/Magic_Earth)）
* [Komoot](https://www.komoot.com/) - ハイキングやサイクリングに特化したルート計画およびナビゲーションアプリ。（[Android](https://market.android.com/details?id=de.komoot.android)、[iOS](https://itunes.apple.com/de/app/id447374873?mt=8) / [Wiki](https://wiki.openstreetmap.org/wiki/Komoot)）
* [CoMaps](https://www.comaps.app/) - OSMを用いてユーザーのプライバシーを重視する無料オープンソースオフラインナビゲーションアプリ。（Android、iOS / [Source Code](https://codeberg.org/comaps/comaps/) / [Wiki](https://wiki.openstreetmap.org/wiki/CoMaps)）

### 生成ツール

* [MyOSMatic](https://print.get-map.org/new/) - OSMデータから印刷可能な街地地図を生成するウェブサイト。（[Source Code](https://github.com/hholzgra/maposmatic/)）
* [Field Papers](http://fieldpapers.org/) - 印刷用地図を作成し、それらに注釈を加え、その後自分のノートを管理できる。（[Source Code](https://github.com/fieldpapers/fieldpapers) / [Wiki](https://wiki.openstreetmap.org/wiki/Field_Papers)）

### 地図スタイル

* [Terrain Classic](https://github.com/stamen/terrain-classic) - OpenStreetMap向けの地図スタイルです。

### 地図ゲーム

* [Back Of Your Hand](https://backofyourhand.com/) - OSMデータをもとに特定エリアの道路を特定する知識テストを実施するウェブ地図ゲーム。（[Source Code](https://github.com/adam-lynch/back-of-your-hand)）
* [PraxisMapper](https://github.com/drakewill-CRL/PraxisMapper) - making mobile games around exploring the real world向けのGPS Game server,。
* [Arnis](https://github.com/louis-e/arnis) - Pythonを使用して、実際の世界の都市をMinecraftに生成
* [PanoGuessr](https://panoguessr.com/) - Panoramaxを活用した、世界中の場所を特定するための地図ゲーム。（[Source Code](https://gitlab.com/panoguessr/panoguessr.com)）
* [PanoramaxGuessr](https://panoramaxguessr.k327.eu/) - GeoGuessrのフリーソフトウェア代替品として機能する、Panoramax画像を用いた地図ゲーム。（[Source Code](https://codeberg.org/k327/panoramaxguessr)）

### 目標追跡

このカテゴリのサービスでは、OpenStreetMapデータを使って個人・フィットネス目標を追跡できます。

* [CityStrides](https://citystrides.com/) - OpenStreetMapを使って個人目標を追跡するサービスです。

## ライブラリ

### C/C++

* [libosmium](https://github.com/osmcode/libosmium) - OpenStreetMapデータを扱うための高速かつ柔軟なC++ライブラリ。（[Wiki](https://wiki.openstreetmap.org/wiki/Osmium)）
* [OSRM](https://github.com/Project-OSRM/osrm-backend) - C++アプリケーション向けのルーティングエンジン。（[Wiki](https://wiki.openstreetmap.org/wiki/Open_Source_Routing_Machine)）
* [mapnik](https://github.com/mapnik/mapnik) - ピクセル精度の画像出力と高速な地図アルゴリズムを組み合わせ、C++、Python、Nodeでのインターフェースを提供。（[Wiki](https://wiki.openstreetmap.org/wiki/Mapnik)）

### JavaScript

* [openstreetmap-tag-map](https://github.com/tanrax/openstreetmap-tag-map) - Riot.js to generate iframe-map from the country and region向けのTag。
* [node-osmium](https://github.com/osmcode/node-osmium) - libosmium for working with OpenStreetMap data向けのNode wrapper。
* [node-mapnik](https://github.com/mapnik/node-mapnik) - mapnik向けのNode wrapper。
* [Leaflet](https://leafletjs.com/) - モバイル対応のインタラクティブ地図を実現するオープンソースJavaScriptライブラリ。（[Source Code](https://github.com/Leaflet/Leaflet) / [Wiki](https://wiki.openstreetmap.org/wiki/Leaflet)）
* [OpenLayers](https://openlayers.org/) - レターマップとベクターマップをレンダリングする高性能ライブラリ。（[Source Code](https://github.com/openlayers/openlayers) / [Wiki](https://wiki.openstreetmap.org/wiki/OpenLayers)）
* [MapLibre GL JS](https://maplibre.org/projects/#js) - GPUによるベクターテイルレンダリングを実現する地図レンダラー。（[Source Code](https://github.com/maplibre/maplibre-gl-js) / [See Related List](#related-awesome-maplibre)）
* [osm-pbf-parser-node](https://github.com/borisgontar/osm-pbf-parser-node) - Node.js向けのStreaming OpenStreetMap PBF parser。

### Python

* [overpass-wrapper](https://github.com/mvexel/overpass-api-python-wrapper) - OpenStreetMap Overpass APIに対するラッパー
* [osmapi](https://github.com/metaodi/osmapi) - OpenStreetMap API用のPythonラッパー。 ([Wiki](https://wiki.openstreetmap.org/wiki/Osmapi_(Python_library))
* [osmcha](https://github.com/willemarcel/osmcha) - OSM変更セットの異常を検出するPythonパッケージ
* [osmnx](https://github.com/gboeing/osmnx) - 道路ネットワークを可視化するツール。 ([Wiki](https://wiki.openstreetmap.org/wiki/OSMnx))
* [python-mapnik](https://github.com/mapnik/python-mapnik) - mapnik向けのPython wrapper。
* [prettymapp](https://github.com/chrieke/prettymapp) - OpenStreetMapデータから美しい地図を作成
* [overpy](https://github.com/DinoTools/python-overpy) - オーバープアスAPIにアクセスするためのPython用ラッパー
* [overpassforge](https://github.com/Krafpy/Overpass-Forge) - Pythonオブジェクトからオーバープアスクエリを構築するためのパッケージ
* [humanized_opening_hours](https://github.com/rezemika/humanized_opening_hours) - `opening_hours`タグを解析するパッケージ。
* [geodesk](https://github.com/clarisma/geodesk-py) - OpenStreetMap analysis向けのFast and storage-efficient database。
* [QuackOSM](https://github.com/kraina-ai/quackosm) - DuckDBを使用して、`*.osm.pbf`ファイルを`GeoParquet`ファイルにダウンロード・フィルタリング・変換するPythonライブラリ。

### Java

* [OpenTripPlanner](https://github.com/opentripplanner/OpenTripPlanner) - オープンソースの多モード移動計画ツール。 ([Wiki](https://wiki.openstreetmap.org/wiki/OpenTripPlanner))
* [GraphHopper](https://github.com/graphhopper/graphhopper) - オープンソースのルート計画ライブラリおよびサーバー（OpenStreetMapを使用）。 ([Wiki](https://wiki.openstreetmap.org/wiki/GraphHopper))
* [OSM2World](http://osm2world.org) - OpenStreetMapデータから世界の3次元モデルを作成するコンバーター。Javaプログラムでのライブラリとして、または独立したツール・サーバーとして使用可能。 ([Source Code](https://github.com/tordanik/OSM2World) / [Wiki](https://wiki.openstreetmap.org/wiki/OSM2World))
* [GeoDesk](https://github.com/clarisma/geodesk) - OpenStreetMap analysis向けのFast and storage-efficient database。

## 公開API

* [overpass](http://overpass-api.de) - OSMマップデータのカスタム選択部分を提供する読み取り専用API。 ([Source Code](https://github.com/drolbr/Overpass-API) / [Wiki](https://wiki.openstreetmap.org/wiki/Overpass_API))
* [osm.mazdermind](https://osm.mazdermind.de/replicate-sequences/) - マップのタイムスタンプを再現シーケンスにマッピングする。([Source Code](https://github.com/MaZderMind/replicate-sequences))
* [planet.osm](http://planet.osm.org) - OSMデータの分単位／週単位／年単位／完全バックアップ。([Wiki](https://wiki.openstreetmap.org/wiki/Planet.osm))
* [bbbike](https://extract.bbbike.org) - planet.osmから特定領域を抽出したカスタムデータ。([Wiki](https://wiki.openstreetmap.org/wiki/BBBike_@_World))
* [OSMCha API](https://osmcha.org/api-docs/) - 変更セット情報を照合・取得できる強力なAPI。([Source Code](https://github.com/willemarcel/osmcha-django))
* [Bunting Labs' OSM Extract API](https://buntinglabs.com/solutions/openstreetmap-extracts) - タグや境界箱に基づくOSM特徴の無料GeoJSON抽出。([Docs](https://docs.buntinglabs.com/openstreetmap-api/extract))
* [Postpass](https://github.com/woodpeck/postpass-ops) - PostGISを活用したOSMデータ用SQL API。([Wiki](https://wiki.openstreetmap.org/wiki/Postpass))
* [QLever](https://qlever.dev/osm-planet/) - OSMデータ用SPARQL API。([Wiki](https://wiki.openstreetmap.org/wiki/QLever))
* [Sophox](https://sophox.org/) - OSMデータ用SPARQL API。([Wiki](https://wiki.openstreetmap.org/wiki/Sophox))

## その他

* [OpenGeofiction](https://opengeofiction.net/) - 完全にフィクションのユーザーが作成した世界地図。OSMソフトウェアプラットフォームを使用して作成された。（[Wiki](https://wiki.openstreetmap.org/wiki/OpenGeofiction)）
* [OSM Monitor](https://osm-monitor.com/) - OSMの新しい編集を監視・表示するウェブサイト。（[Source Code](https://github.com/johanmorganti/osm-datadog)）
* [OpenHistoricalMap](https://www.openhistoricalmap.org/) - 世界中、そして過去の時代にわたって作られた地図。OSMソフトウェアプラットフォームを使用して作成された。（[Wiki](https://wiki.openstreetmap.org/wiki/OpenHistoricalMap)）

## 動画

### グローバル

* [State of the Map](https://www.youtube.com/channel/UCLqJsr_5PfdvDFbgv1qp2aQ) - State of the Map大会のYouTubeチャンネル。講演の動画を提供している。（[Wiki](https://wiki.openstreetmap.org/wiki/State_of_the_Map)）
* [Humanitarian OpenStreetMap Team (HOT)](https://www.youtube.com/user/hotosm) - HOTのYouTubeチャンネル。人道支援に関連するOSMの活動に関するコンテンツを提供している。

### 地域別

* [OpenStreetMap Indonesia YouTube Channel](https://www.youtube.com/channel/UCRqMbcsT9ummMvByc1BlsDQ)
* [OpenStreetMap Poland YouTube Channel](https://www.youtube.com/channel/UCH4PSBSafxZ-YWg8RCRbHjA)
* [OpenStreetMap US YouTube Channel](https://www.youtube.com/channel/UCQpS2iHNVR-_6nAxt87nwCw)

## 追加リソース

### ウェブサイト

* [LearnOSM.org](https://learnosm.org/en/beginner/) - OpenStreetMapの編集に向けた初心者向けの詳細ガイド。（[Wiki](https://wiki.openstreetmap.org/wiki/LearnOSM)）
* [What OSM?](https://whatosm.pavie.info/) - finding tools for contributing to OSM by answering three simple questions向けのTool。
* [TeachOSM](https://teachosm.org/) - すべての教育レベルの教育者を支援し、オープンソースマッピングやOpenStreetMapを教室で導入するプロジェクト。（[Wiki](https://wiki.openstreetmap.org/wiki/TeachOSM)）
* [weeklyOSM](https://weeklyosm.eu/) - OSM宇宙における最新情報や進展を、経験豊富なマッパーから新規OSMメンバーまでに伝えるニュースとアップデート

### Wikiページ

* [Main Page](https://wiki.openstreetmap.org/wiki/Main_Page) - 最も有用なページへのリンクを集めた概要ページ
* [Beginners' guide](https://wiki.openstreetmap.org/wiki/Beginners'_guide) - OpenStreetMapが何であるか、そしてどのように機能しているかを解説する5ステップガイド
* [Mapping projects](https://wiki.openstreetmap.org/wiki/Mapping_projects) - 進行中および提案されているマッピングプロジェクトの概要
* [OSM Promotional Material Programme](https://wiki.openstreetmap.org/wiki/OSM_Promotional_Material_Programme) - スタンプなどのプロモーション商品を受取る方法に関する情報

## 記事

* [Volunteer armies map 'invisible' communities hit by coronavirus](https://web.archive.org/web/20250326060550/https://www.asahi.com/ajw/articles/13729507) - OpenStreetMapの活動・活用事例を扱う記事です。

## コミュニティ

### グローバルコミュニティ

* [OpenStreetMap Community](https://community.openstreetmap.org/) - OpenStreetMap基金会が運営する公式フォーラム
* [r/openstreetmap](https://www.reddit.com/r/openstreetmap) - OSM関連のリンクやニュースを共有する、非公式なRedditフォーラム。
* [“OpenStreetMap World” Discord](https://discord.gg/openstreetmap) - OSM関連の即時メッセージと音声チャットグループ。

## 関連リスト

* [awesome-maplibre](https://github.com/maplibre/awesome-maplibre#readme) - MapLibreを使用またはサポートしている素晴らしいものたちのコレクション。<span id="related-awesome-maplibre"/>
* [OpenStreetMap Wiki's list of OSM-based services](https://wiki.openstreetmap.org/wiki/List_of_OSM-based_services) - OSMデータを用いるアプリケーションの一覧。芸術、自転車、歴史、海事、ルーティング、公共交通機関など、カテゴリごとに分類されている。

## 脚注

OpenStreetMapおよびOpenStreetMapロゴはOpenStreetMap Foundationの商標であり、許可を得て使用しています。本プロジェクトはOpenStreetMap Foundationの承認を受けておらず、提携関係にもありません。

Ken VermetteによるOpenStreetMapロゴはCreative Commons Attribution-ShareAlike 3.0 Licenseの下で使用しています。

[^selfhosted-only]: このプロジェクトはホスト済みインスタンスを提供していないため、自身でデプロイする必要があります。手順はプロジェクトのウェブサイトを参照してください。
