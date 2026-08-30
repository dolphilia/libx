---
title: "Awesome transit"
description: "transitを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-MobilityData-awesome-transit-readme-md"
---

# Awesome transit

transitを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

### 目次 <a id="table-of-contents"></a>
- [公共交通のAwesomeリスト](#awesome-transit--)
        - [公共交通のオープン技術に関するデータ標準・API・アプリ・ツール・データセット・研究のコミュニティリスト](#community-list-of-data-standards-apis-apps-tools-datasets-and-research-around-open-source-technology-of-public-transit)
    - [目次](#table-of-contents)
  - [データの作成](#producing-data)
    - [GTFS](#gtfs)
      - [GTFS講座](#gtfs-courses)
      - [GTFS利用者向けアプリの指針](#gtfs-consumer-app-guidance)
      - [GTFSライブラリ](#gtfs-libraries)
        - [C](#c)
        - [C++](#c-1)
        - [C#](#c-2)
        - [Go](#go)
        - [Java](#java)
        - [JavaScript](#javascript)
        - [PostgreSQL](#postgresql)
        - [DuckDB](#duckdb)
        - [Python](#python)
        - [R](#r)
        - [Ruby](#ruby)
        - [Rust](#rust)
      - [GTFS変換ツール](#gtfs-converters)
      - [GTFSデータ収集・保守ツール](#gtfs-data-collection-and-maintenance-tools)
      - [GTFS統合ツール](#gtfs-merge-tools)
      - [GTFS解析ツール](#gtfs-analysis-tools)
      - [GTFS時刻表公開ツール](#gtfs-timetable-publishing-tools)
      - [GTFS検証ツール](#gtfs-validators)
    - [GTFS Realtime](#gtfs-realtime)
      - [GTFS Realtimeライブラリとデモアプリ](#gtfs-realtime-libraries--demo-apps)
      - [GTFS Realtime検証ツール](#gtfs-realtime-validators)
      - [GTFS RealtimeなどリアルタイムAPIの保存ツール](#gtfs-realtime-and-other-real-time-api-archival-tools)
      - [GTFS Realtime変換ツール](#gtfs-realtime-convertors)
      - [GTFS Realtimeユーティリティ](#gtfs-realtime-utilities)
    - [SIRI](#siri)
    - [その他のマルチモーダルデータ形式](#other-multimodal-data-formats)
      - [広く採用](#widely-adopted)
      - [試験・開発段階](#pilot-or-development-stage)
    - [API作成ソフトウェア](#software-for-creating-apis)
  - [データの共有](#sharing-data)
      - [第三者GTFS URLディレクトリ](#3rd-party-gtfs-url-directories)
      - [交通事業者のデータアーカイブ](#transit-agency-data-archives)
      - [国の行政データセット](#national-government-datasets)
      - [独自（非標準）ベンダーAPI](#proprietary-non-standard-vendor-apis)
      - [クラウドソースの交通データ](#crowdsourced-transit-data)
      - [ソフトウェアテスト用GTFS・GTFS Realtimeサンプル](#sample-gtfs-and-gtfs-realtime-datasets-used-for-software-testing)
  - [データの利用](#using-data)
    - [利用者向けアプリ](#consumer-apps)
      - [Webアプリ（オープンソース）](#web-apps-open-source)
      - [Webアプリ（クローズドソース）](#web-apps-closed-source)
      - [ネイティブアプリ（オープンソース）](#native-apps-open-source)
      - [ネイティブアプリ（クローズドソース）](#native-apps-closed-source)
    - [ハードウェア](#hardware)
    - [SDK](#sdks)
    - [可視化](#visualizations)
      - [GTFSベースの可視化](#gtfs-based-visualizations)
      - [交通地図の作成](#transit-map-creation)
        - [交通可視化用の汎用描画アプリ](#general-drawing-applications-for-making-transit-visualizations)
        - [交通可視化用の汎用GISアプリ](#general-gis-applications-for-making-transit-visualizations)
      - [交通地図の集約](#transit-map-aggregation)
    - [交通事業者向けツール](#agency-tools)
  - [資料](#resources)
    - [コミュニティ](#community)
      - [地域グループ](#local-and-regional-groups)
    - [研究と論評](#research-and-commentary)
      - [ブログ記事](#blog-posts)
      - [学術論文](#academic-papers)
      - [政府報告書](#government-reports)
      - [コミュニティ管理リスト](#community-maintained-lists)
  - [ライセンス](#license)
  - [このリストについて](#about)

## データの作成 <a id="producing-data"></a>

### GTFS <a id="gtfs"></a>

- [GTFS.org](https://gtfs.org) official documentation site for the General Transit Feed Specification.

#### GTFS講座 <a id="gtfs-courses"></a>

- [MobilityData - "Understanding GTFS: An intro and overview"](https://www.youtube.com/watch?v=SDz2460AjNo) - 動画は、一般輸送フィード規格（GTFS）についての概要を提供し、輸送事業者、利用者、政策決定者にとってGTFSがどのように役立つかを説明しています。
- [World Bank - "Intro. to GTFS" online course](https://olc.worldbank.org/content/introduction-general-transit-feed-specification-gtfs-and-informal-transit-system-mapping) - GTFSおよびGTFSリアルタイムについて学ぶための無料、オンライン、自習型コース。
- [Open Transit Data Toolkit](http://transitdatatoolkit.com/) - オープンな輸送データを活用するためのレッスンシリーズ。
- [ArcGIS - Introduction to GTFS](https://www.youtube.com/watch?v=8OQKHhu1VgQ&t=148s)
- [GTFS-books](https://github.com/MobilityData/GTFS-books) - GTFSおよびGTFSリアルタイムに関する包括的なガイド書。これらは[Quentin Zervaas](https://github.com/HendX)が執筆し、[MobilityData](https://mobilitydata.org/)に寄贈され、オープンアクセスとなっている。
- [MBTA GTFS Onboarding](https://mybinder.org/v2/gh/mbta/gtfs_onboarding/main?urlpath=lab/tree/GTFS_Onboarding.ipynb) - MBTAが作成したGTFS静的データ用のインタラクティブチュートリアル。GitHub上に[stand-alone Docker image](https://github.com/mbta/gtfs_onboarding)が提供されており、Jupyterノートブックの[hosted/no-install version](https://mybinder.org/v2/gh/mbta/gtfs_onboarding/main?urlpath=lab/tree/GTFS_Onboarding.ipynb)も存在する。
- [Planetizen "Building a Transit Map Web App" course](https://courses.planetizen.com/course/building-transit-map-app) - Webベースのマッピングアプリケーションを自分で設定するためのチュートリアル動画。コーディング経験が不要です。

#### GTFS利用者向けアプリの指針 <a id="gtfs-consumer-app-guidance"></a>

- [Google Transit Developers](https://developers.google.com/transit/gtfs/) - GTFSに関するGoogle固有の追加ドキュメンテーション。
- [Transit app Guidelines for Producing GTFS Static Data](https://resources.transitapp.com/article/458-guidelines-for-producing-gtfs-static-data-for-transit) - GTFSに関するTransitアプリ固有の追加ドキュメンテーション。
- [Bing Maps Transit - Add your transit data to Bing Maps](https://www.bing.com/maps/transitcontentproviders) - GTFSに関するBing固有の追加ドキュメンテーション。
- [Yandex Maps - Transport integration](https://yandex.ru/support/m-maps/transport.html?lang=en#connect-display) - GTFSに関するYandex固有の追加ド術書。

#### GTFSライブラリ <a id="gtfs-libraries"></a>

さまざまな言語からGTFSデータを容易に利用するためのソフトウェアです。

##### C <a id="c"></a>
- [CGTFS](https://github.com/rakhack/cgtfs) - 静的GTFSフィードを読み込むCライブラリ。アプリケーションメモリやSQLiteデータベースに展開されたフィードを読み込むことが可能。
- [RRRR Rapid Real-time Routing](https://github.com/bliksemlabs/rrrr) - RRRR（通常はR4と発音）は、RAPTOR公的輸送ルートアルゴリズムのC言語実装です。

##### C++ <a id="c-1"></a>
-  [just_gtfs](https://github.com/mesozoic-drones/just_gtfs) - C++17ヘッダーのみのライブラリでGTFSの読み書きを行う（[Valhalla](https://github.com/valhalla/valhalla)で使用）。主な機能：GTFSフィードの高速読み書き、[extended GTFS route types](https://developers.google.com/transit/gtfs/reference/extended-route-types)への対応、GTFSの日時フォーマットのシンプルな操作。

##### C# <a id="c-2"></a>
- [GTFS Feed Parser](https://github.com/OsmSharp/GTFS) - .Net/Mono環境におけるGTFSパーサーの実装。

##### Go <a id="go"></a>
- [Go GTFS Parser](https://github.com/geops/gtfsparser) - Go言語用のGTFSパーサーのライブラリ。

##### Java <a id="java"></a>
- [OneBusAway GTFS Modules](https://github.com/OneBusAway/onebusaway-gtfs-modules/wiki) - GTFS形式の公共交通データの読み書きおよび変換を行うJavaベースのライブラリに加え、データベースサポートを提供。

##### JavaScript <a id="javascript"></a>
- [gtfs-sequelize](https://github.com/evansiroky/gtfs-sequelize) - sequelize.jsを使用して静的GTFSをモデル化するNode.jsライブラリ。
- [gtfs-utils](https://github.com/public-transport/gtfs-utils) – Utilities to process GTFS data sets (e.g., "flattening" `calendar.txt` & `calendar_dates.txt`, computing arrival/departure times of trips).
- [gtfs-via-postgres](https://github.com/derhuerst/gtfs-via-postgres) – Yet another tool to process GTFS using PostgreSQL.
- [Node-GTFS](https://github.com/BlinkTagInc/node-gtfs) - GTFSファイルから輸送データを読み込み、展開し、SQLiteデータベースに保存。事業者、ルート、停車場、時間のクエリに必要なメソッドを提供。

##### PostgreSQL <a id="postgresql"></a>
- [gtfs-schema](https://github.com/tyleragreen/gtfs-schema) - GTFSフィード用のPostgreSQLスキーマ。
- [gtfs-via-postgres](https://github.com/derhuerst/gtfs-via-postgres) – Yet another tool to process GTFS using PostgreSQL.

##### DuckDB <a id="duckdb"></a>

- [gtfs-via-duckdb](https://github.com/public-transport/gtfs-via-duckdb) – Analyse GTFS Schedule data by importing it into a DuckDB database. 

##### Python <a id="python"></a>
- [gtfsdb](https://github.com/OpenTransitTools/gtfsdb) - GTFSファイルを関係データベースに変換するPythonライブラリ。
- [gtfs_functions](https://github.com/Bondify/gtfs_functions) - GTFSフィードから地理空間可視化を作成するための有用な関数を提供するPythonパッケージ。
- [gtfs-segments](https://github.com/UTEL-UIUC/gtfs_segments) - バスのGTFSデータを簡潔なテーブル形式で表現するためのPythonパッケージ。
- [gtfslib-python](https://github.com/afimb/gtfslib-python) - 公共交通網に関するさまざまな統計や指標を計算するための、Pythonによるオープンソースライブラリ。
- [gtfsman](https://github.com/geops/gtfsman) - 大量のGTFSフィードを管理・更新するためのPythonベースのリポジトリのようなツール。
- [gtfspy](https://github.com/CxAalto/gtfspy) - Python3による公共交通網の分析および移動時間の計算。Postgres/PostGIS、Oracle、MySQL、SQLiteと互換性がある。[gtfspy-webviz](https://github.com/CxAalto/gtfspy-webviz)によって使用されている。
- [GTFS Kit](https://github.com/mrcagney/gtfs_kit) - 一般輸送フィード規格（GTFS）データを分析するためのPython 3.8以降のツールキット。GTFSTKを置き換えます。
- [Make GTFS](https://github.com/mrcagney/make_gtfs) - 基本的なルート情報からGTFSフィードを作成するためのPythonライブラリ。
- [Mapzen GTFS](https://github.com/transitland/mapzen-gtfs) - 個別のGTFSテーブルを読み込むか、またはフィード内の各事業者をグラフとして表現するためのGTFSライブラリ。
- [multigtfs](https://github.com/tulsawebdevs/django-multi-gtfs) - DjangoアプリケーションでGTFSのインポートとエクスポートを行うアプリケーション
- [partridge](https://github.com/remix/partridge) - pandas DataFramesに基づく高速かつ柔軟なPython GTFSリーダー
- [transit_service_analyst](https://github.com/psrc/transit_service_analyst) - 輸送サービス分析を支援するPythonライブラリ
- [TransitGPT](https://github.com/UTEL-UIUC/TransitGPT) - TransitGPTは、自然言語指令で一般輸送情報規格（GTFS）データにアクセス・分析できる生成AIを搭載したチャットボット

##### R <a id="r"></a>
- [r-transit](https://github.com/r-transit) - RでGTFSを扱うためのツールのコレクション
- [gtfsio](https://github.com/r-transit/gtfsio) - RでGTFSを読み書きする高速かつ柔軟な関数
- [mobdb](https://github.com/jasonad123/mobdb) - [Mobility Database](https://mobilitydatabase.org/)から公共交通データを検索・発見・アクセスするためのR関数。
- [tidytransit](https://github.com/r-transit/tidytransit) - tidytransitを使用して、輸送の停留所とルートをマップし、移動時間や輸送頻度を計算し、輸送フィードを検証できる。tidytransitは一般輸送情報規格をtidyverseおよびsimple featuresデータフレームに読み込む。

##### Ruby <a id="ruby"></a>
- [GTFS-viz](https://github.com/vasile/GTFS-viz) - RubyスクリプトでGTFSファイルセットをSQLiteデータベース＋GeoJSONに変換（[Transit Map](https://github.com/vasile/transit-map)ウェブアプリケーションに必要）。

##### Rust <a id="rust"></a>
- [gtfs-structure](https://github.com/rust-transit/gtfs-structure) - このcratesはGTFS構造とGTFSアーカイブの読み取りを支援するヘルパーを提供する。

#### GTFS変換ツール <a id="gtfs-converters"></a>

各種の静的時刻表形式とGTFSの間を変換するツールです。

- [Chouette](https://enroute.atlassian.net/wiki/spaces/PUBLIC/pages/539426886/Chouette+Convert) - フランス語Transmodel [NeTEX](https://transmodel-cen.eu/index.php/netex/)とGTFSの相互変換を行う。
- [extract-gtfs-pathways](https://github.com/derhuerst/extract-gtfs-pathways) – Command-line tool to extract pathways as GeoJSON from a GTFS dataset.
- [extract-gtfs-shapes](https://github.com/derhuerst/extract-gtfs-shapes) – Command-line tool to extract shapes as GeoJSON from a GTFS dataset.
- [GTFS-OSM-Sync](https://github.com/CUTR-at-USF/gtfs-osm-sync) - GTFS形式のデータを[OpenStreetMap.org](http://www.openstreetmap.org/)と同期するためのJavaツール。
- [gtfs-parser](https://github.com/ioTransit/gtfs-parser) - GTFS-PARSERライブラリは、JavaScriptがGTFSをパースし、クライアントまたはサーバー上でGeoJSONを作成できるようにするライブラリ
- [gtfs-service-area](https://github.com/cal-itp/gtfs-service-area) - 静的GTFSから運行エリアを計算。結果は単一レイヤーの.geojsonファイルとして出力される。[gtfs-to-geojson](https://github.com/BlinkTagInc/gtfs-to-geojson)のDocker化版。
- [GTFS-route-shapes](https://github.com/kotrc/GTFS-route-shapes) - PythonスクリプトでGTFSアーカイブ内の各輸送ルートに対して1つのgeoJSON形状を生成
- [gtfs-to-geojson](https://github.com/BlinkTagInc/gtfs-to-geojson) - GTFSの形状と停留所データをgeoJSONに変換するJavaScriptツール。これは輸送ルートのマップ作成に便利。
- [gtfs2gps](https://github.com/ipeaGIT/gtfs2gps) - GTFS変換ツールに関する公共交通データ、アプリ、ツール、または資料です。（`data.table`）
- [gtfs2emis](https://github.com/ipeaGIT/gtfs2emis) - Rパッケージで、一般輸送情報規格（GT及）データに基づき、公共輸送車両の排出量を推定
- [gtsf](https://github.com/r-gtfs/gtsf) - Rにおける一般輸送（GTFS）シンプル（地理）特徴（sf）。GTFSからShapefile、GeoJSON、その他フォーマットへ変換するGDALを介して使用可能。
- [hafas-generate-gtfs](https://github.com/derhuerst/hafas-generate-gtfs) *(work-in-progress)* – A Javascript tool to generate GTFS dumps from HAFAS endpoints.
- [Hafas2GTFS](https://github.com/geops/hafas2gtfs) - Pythonで書かれたHafas2GTFS変換ツール、SBB HAFASフィード向けに最適化。
- [kml-to-gtfs-shapes](https://github.com/bdferris/kml-to-gtfs-shapes/tree/gh-pages) - KMLファイルからポリラインをGTFS shapes.txtファイルに変換するJavascriptツール。GitHub上に[here](http://bdferris.github.io/kml-to-gtfs-shapes/)でホストされている。
- [NeTEx-to-GTFS Converter Java](https://github.com/entur/netex-gtfs-converter-java) - NeTEXデータセットをGTFSデータセットに変換。入力NeTExデータセットは、北欧NeTExプロファイルに従う必要がある。
- [o2g](https://github.com/hiposfer/o2g) - OpenStreetMapからGTFSフィードを抽出するシンプルなツール。
- [Open-Transport SYNTHESE Convertors](https://github.com/Open-Transport/synthese/wiki) - フランス語Transmodel、SIRI、NETeX、HAFAS、HASTUS、VDV452などに変換。
- [onebusaway-gtfs-to-barefoot](https://github.com/OneBusAway/onebusaway-gtfs-to-barefoot) - GTFSファイルから[Barefoot](https://github.com/bmwcarit/barefoot)マップファイルを作成するためのJavaツール。
- [onebusaway-vdv-modules](https://github.com/OneBusAway/onebusaway-vdv-modules) - VDVフォーマットの輸送データを扱うJavaライブラリ、VDV-452スケジュールデータをGTFSに変換。
- [osm2gtfs](https://github.com/grote/osm2gtfs) - OpenStreetMapデータとスケジュール情報をGTFSに変換。
- [transit_model](https://github.com/hove-io/transit_model) - Rustライブラリで、以下のフォーマットに変換：GTFS、NTFS（Navitia用、see [Software for Creating APIs](#software-for-creating-apis)）、TransXChange（UK規格）、KV1（NL規格）、NeTEx（EU規格）。
- [Transmodel and IFF to GTFS](https://github.com/bliksemlabs/bliksemintegration) - (Transmodel) BISON Koppelvlak1、IFF（HP/EDSが書いたフォーマット、ATCO CIFに類似）のタイムテーブルをインポートし同期。内部の擬似NETeXデータ構造によりGTFSへのエクスポートが可能であり、NETeX、GTFS、IFFなど他のフォーマットへのエクスポートのプロトタイプも存在。
- [Transporter-Project transxchange-to-gtfs](https://github.com/Transporter-Project/transxchange-to-gtfs) TransXChange to GTFS converter written in Objective-C.
- [TXC TransXChange publisher (UK Department for Transport)](https://www.gov.uk/government/publications/transxchange-publisher) - TXC TransXChange パブリッシャーは、読みやすく印刷しやすいTransXChangeに準拠したXMLドキュメントを公開できるスタンドアローンソフトウェアツールです
- [UK2GTFS](https://itsleeds.github.io/UK2GTFS/) - UK形式のTransXChange（バス、メトロ、トラム、フェリー）およびCIF（鉄道）の時刻表をGTFSに変換するRパッケージ
- [OSMTracker](https://wiki.openstreetmap.org/wiki/OSMTracker_(Android)) - OSMTrackerは、ポイントオブインターベスト（POI）の収集やGPXトラックの記録を行うためのオフラインGPSトラッキングアプリです

#### GTFSデータ収集・保守ツール <a id="gtfs-data-collection-and-maintenance-tools"></a>

- [AddTransit](https://addtransit.com/gtfs-transit-file.php) - GTFS形式でスケジュールを作成・編集・公開できるSaaS（ソフトウェアアセンス）プラットフォーム
- [bus-router](https://github.com/atlregional/bus-router) - GTFSのshapes.txtを補完するために、[Google Maps Directions API](https://developers.google.com/maps/documentation/directions/)または[OSRM](https://github.com/Project-OSRM/osrm-backend/wiki/Server-api)のルーティングを用いてPythonスクリプトを生成する。
- [gtfs-blocks-to-transfers](https://github.com/TransitApp/GTFS-blocks-to-transfers) - GTFSブロック（設定により定義された[trip.block\_id](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md#example-blocks-and-service-day)）を、一連の[trip-to-trip transfers (proposal)](https://github.com/google/transit/pull/303)に変換するためのPythonツール。
- [GTFS Diff](https://transport.data.gouv.fr/tools/gtfs_diff) - transport.data.gouv.frが開発したGTFS Diffは、GTFSファイル間の差異をシンプルかつ統一された方法で表現する仕様です
- [GTFS Editor](https://github.com/conveyal/gtfs-editor) and [Gtfs Data Manager](https://github.com/conveyal/gtfs-data-manager) - GTFSデータ収集・保守ツールに関する公共交通データ、アプリ、ツール、または資料です。 関連参照: <https://github.com/ibi-group/datatools-ui>。
- [GTFS Editor for Vagrant](https://github.com/laidig/vagrant-gtfs-editor) - GTFSエディタ（上記）を迅速にセットアップするための[Vagrant](https://www.vagrantup.com/)。
- [static-GTFS-manager](https://github.com/WRI-Cities/static-GTFS-manager) - （セルフホスト型）ブラウザベースのユーザーインターフェースで、静的GTFSの作成・編集・エクスポートを行う（see [related post](https://groups.google.com/forum/#!topic/transit-developers/GFz5rTJTB0I)）。
- [TransitWand](https://github.com/conveyal/transit-wand) - 移動手段データを収集するオープンソースのウェブおよびモバイルアプリ。GTFSフィードの作成、乗客数の収集、GISデータセットの生成に利用できます
- [IBI Data Tools](https://github.com/ibi-group/datatools-ui) - GTFS編集、検証、品質チェック、OpenTripPlannerへのデプロイを扱うウェブアプリ（従来の機能を統合・拡張した）
- [Data-Tools Server](https://github.com/ibi-group/datatools-server) - IBIのGTFSデータ管理プラットフォームのサーバー
- [IBI Data Tools Infra](https://github.com/cal-itp/ibi-datatools-infra) - 上記IBIデータツールプロジェクトのローカルインスタンスを迅速に設定・実行できるツール
- [GTFS.html](https://gtfs.pleasantprogrammer.com) - 完全にブラウザベースのツールでGTFSフィードを閲覧できます。ルート、停留所、時刻表などを確認できます
- [pfaedle](https://github.com/ad-freiburg/pfaedle) - OpenStreetMapデータを使用したGTFSの正確なマップマッチング
- [GTFS shape mapfit](https://github.com/HSLdevcom/gtfs_shape_mapfit) - PythonによるGTFS形状ファイルと停留所を指定されたOSMマップファイルに適合させるツール。[pymapmatch](https://github.com/tru-hy/pymapmatch)を用いて一致を確認する。
- [GTFS Builder](http://nationalrtap.org/Web-Apps/GTFS-Builder) - GTFSファイルを作成するための無料ウェブアプリ。ナショナル・ラーバル・トランスポート・アシスタンス・プログラム（RTAP）がメンテナンス。
- [gtfs-station-builder](https://github.com/kostjerry/gtfs-station-builder) - 駅の内部構造（pathways.txtを含む）を構築するためのUIツール
- [GTFS Text-to-Speech Tester](https://github.com/BlinkTagInc/node-gtfs-tts) - GTFSの停留所名をテキスト読み上げ（Text-to-Speech）で読み上げ、stops.txtのtts_stop_nameにテキスト読み上げ値が必要かどうかを判断するコマンドラインツール
- [Spare GTFS-Flex Builder](https://sparelabs.com/en/spare-gtfs-flex-builder) - 移動交通機関がGTFS-Flex形式で transportation data を簡単に作成・管理・エクスポートできる無料ツール
- [Swiftly](https://goswift.ly/) - リアルタイム移動データを生成するツール
- [Chouette SaaS](https://bitbucket.org/enroute-mobi/chouette-core) - GTFSスケジュールデータを生成するツール
- [Ara SaaS](https://bitbucket.org/enroute-mobi/ara) - GTFSリアルタイムデータを生成するツール
- [Amarillo](https://github.com/mfdz/amarillo) - カーポールデータを集約・強化し、GTFS(-RT)として公開するツール
- [GTFS Studio](https://gtfs.studio) - GTFSフィードのオンラインエディタ
- [Uttu](https://github.com/entur/uttu) - Nplanのシンプルなスケジュール編集ツール用のバックエンド
- [GTFS Express](https://gtfsexpress.com) - GTFSフィードの編集・検証・分析を行うウェブアプリケーション — Fares v2およびGTFS-Flexを含む — にインタラクティブなスケジュールグリッドとマップエディタ、AIを活用した自然言語クエリを備えたSQLコンソール、および[MobilityData's gtfs-validator](https://github.com/MobilityData/gtfs-validator)による厳密な標準化検証を提供。
- [Ohtli](https://ohtli.codeandomexico.org/). Free-access tool for creating and managing GTFS transit data, especially for cities where public transport information still exists mostly as operational knowledge instead of structured digital systems. Built around OpenStreetMap, it helps map routes, stops, and service patterns quickly, turning fragmented information into standardized transit feeds that can be used by maps, trip planners, and rider information systems.

#### GTFS統合ツール <a id="gtfs-merge-tools"></a>
- [combine_gtfs_feeds](https://github.com/psrc/combine_gtfs_feeds) - 複数のgtfsフィードを1つのフィード/データセットに結合するPythonツール
- [GTFS Kit](https://github.com/mrcagney/gtfs_kit) - Python 3.8以降向けのGTFSデータの分析およびマージを行うツールキット。[Info on how to aggregate and clean feeds provided here](https://mrcagney.github.io/gtfs_kit_docs/index.html#module-gtfs_kit.cleaners)。
- [Transitfeed merge function](https://github.com/google/transitfeed/wiki/Merge) - 異なるGTFSフィードをマージするためのPythonライブラリの関数
- [gtfsmerge](https://github.com/now8-org/gtfsmerge) - GTFS ZIPアーカイブを1つにマージするPythonスクリプト

#### GTFS解析ツール <a id="gtfs-analysis-tools"></a>

- [GTFS Kit](https://github.com/mrcagney/gtfs_kit) - Python 3.6以降向けのGTFSデータの分析を行うツールキット。[GTFSTK](https://github.com/araichev/gtfstk)を置き換える。
- [GTFS Scorecard](https://github.com/ChelseaKR/gtfs-scorecard) - 毎日、オープンソースのGTFSおよびGTFS-Realtimeの品質評価。1,700以上のフィード記録と1,100以上の公開評価カード、利用者中心の修正ガイド、運営機関およびプログラムビュー、トレンド履歴、読み取りAPI、事前公開チェック、GitHub Actionを備えたカスタム登録データベース
- [gtfstools](https://github.com/ipeaGIT/gtfstools) - RでGTFS形式の輸送フィードを編集および分析するための便利なツールセット
- [transit_service_analyst](https://github.com/psrc/transit_service_analyst) - 輸送サービス分析を支援するPythonライブラリ
- [Peartree](https://github.com/kuanb/peartree) - 輸送データをネットワーク分析用の有向グラフに変換するためのPythonライブラリ
- [R5: Rapid Realistic Routing on Real-world and Reimagined networks](https://github.com/conveyal/r5) - Conveyalが開発した、多モーダル（公共交通・自転車・歩行・車）ネットワーク向けのルーティングエンジン。現在、シナリオプランニングおよび分析の目的で、時間帯内の複数の移動経路を計画している。関連するRのラッパーパッケージ（[r5r](https://github.com/ipeaGIT/r5r/)）は、IPEAによって独立して開発されている。以下にHigginsら（2022）によるパフォーマンス比較を参照。
- [tidytransit](https://github.com/r-transit/tidytransit) - GTFSデータをtibblesおよびシンプルフィーチャーデータフレームに読み込み、輸送の停留所やルートをマップし、移動時間や輸送頻度を計算し、輸送フィードの妥当性を検証するためのRパッケージ
- [transitr](https://github.com/tmelliott/transitr) - リアルタイムで輸送ネットワークを構築・モデル化し、車両の到着予測（ETA）を取得するためのRパッケージ
- [transit-intensity](https://github.com/ioTransit/transit-intensity) - Goで書かれた輸送インテンシティを測定するシンプルなプロジェクト
- [Busbuzzard](https://github.com/bmander/busbuzzard) - 輸送車両に関する実データから確率的スケジュールを推定する
- [City2Graph](https://github.com/c2g-dev/city2graph) - GTFSデータをネットワーク分析およびグラフニューラルネットワーク（GNN）用のグラフ表現に変換するPythonライブラリ。GTFSフィードの読み込み、輸送ネットワークの構築、ネットワークの中心性分析、多モーダル（道路＋輸送）ネットワークにおけるイソクローンベースのアクセス分析をサポート。[See resource](https://city2graph.net/latest/examples/gtfs.html)
- [ESRI ArcGIS Public Transit Tools (GTFS)](https://github.com/Esri/public-transit-tools) - ArcGISで公共輸送データを扱うためのツール
- [GTFS-to-Chart](https://github.com/BlinkTagInc/gtfs-to-chart) - GTFSデータからすべての車両を示すストリングラインチャートを作成
- [GTFS Display](https://codeberg.org/dancingCycle/gtfs-display) - GTFSデータの分析、監視、維持（[Example instances](https://www.swingbe.de/activity/gtfs-display/)）。
- [PTNA](https://wiki.openstreetmap.org/wiki/Public_Transport_Network_Analysis) - Public Transit Nework Analysisは、OSMにマッピングされた公共輸送線の情報を検索・集計するオープンソースシステム
- [Trak.Tools](https://github.com/SparksTheFolf/trak.tools) - 選択されたスケールで原始GTFSデータを表示することで、視覚的なデータ編集を強化し、閲覧を容易にする

#### GTFS時刻表公開ツール <a id="gtfs-timetable-publishing-tools"></a>

- [GTFS-to-HTML](https://gtfstohtml.com) - GTFSから直接HTMLまたはPDF形式の読みやすい時刻表を生成
- [Timetable Kit](https://github.com/neroden/timetable_kit) - オープンソースのPython 3.10モジュールおよびスクリプトで、[GTFS Kit](https://github.com/mrcagney/gtfs_kit)に依存しており、複雑な印刷／PDF時刻表を作成するための柔軟なレイアウトを提供。現在はAmtrakのGTFSのみが即時動作しているが、積極的に開発中。
- [TimeTablePublisher (TTPUB)](https://github.com/OpenTransitTools/ttpub) - TriMetが開発したウェブ発行システム。輸送機関が原始スケジュールデータを検証・編集・変換し、顧客向けに読みやすい時刻表を作成できる

#### GTFS検証ツール <a id="gtfs-validators"></a>

- [Conveyal's gtfs-validator](https://github.com/conveyal/gtfs-validator) - OneBusAway GTFSモジュールに基づいたJavaベースのGTFSバリデーションツール。Javaで実行され、Googleが提供するものより高速
- [Conveyal's gtfs-lib](https://github.com/conveyal/gtfs-lib/) - Conveyalの自身の[gtfs-validator](https://github.com/conveyal/gtfs-validator)（JavaベースのGTFSフィードの読み込み・保存用ライブラリ）の後継ツール。
- [Google's feedValidator](https://github.com/google/transitfeed/wiki/FeedValidator) - GoogleがサポートするPythonベースのGTFSバリデーションツール
- [GTFS Data Package Specification](https://github.com/Stephen-Gates/GTFS) - Good Tablesで検証を実施したデータパッケージ仕様。データパッケージ、スキーマ、テストを含み、南東クイーンズランドのGTFSデータを例に挙げている。
- [gtfstidy](https://github.com/patrickbr/gtfstidy) - GoベースのツールでGTFSフィードを整備し、検証する。
- [gtfsclean](https://github.com/public-transport/gtfsclean) - チェック、クリーン化、最小化を行うGTFSフィード用ツール。gtfstidyのフォークであり、まだアップストリームにマージされていないいくつかの修正を含む。
- [gtfs-validator-api](https://github.com/cal-itp/gtfs-validator-api) - このPythonパッケージは、[MobilityData/gtfs-validator](https://github.com/MobilityData/gtfs-validator)の薄いラッパーであり、中間ファイルを処理し、gtfs-validatorの出力ファイルを特定して名前を指定または文字列として返す。
- [GTFSVTOR](https://github.com/mecatran/gtfsvtor) - Javaで実装されたオープンソースGTFS検証ツール。GPLv3ライセンスで、[Mecatran](https://www.mecatran.com/)によって維持されている。
- [MobilityData's gtfs-validator](https://github.com/MobilityData/gtfs-validator) - Javaで実装されたオープンソースGTFS検証ツール。GTFS仕様に準拠しており、Apache v2.0ライセンスで、[MobilityData](https://mobilitydata.org/)によって維持されている。
- [gtfs-validator-metrics-service](https://github.com/mobidata-bw/gtfs-validator-metrics-service) - MobilityDataのGTFS-Validatorを使用してGTFSスケジュールデータを検証し、結果をPrometheus/OpenTelemetryメトリクスとして公開。
- [Reflect GTFS Validator (hosted by Foursquare ITP)](https://reflect.foursquareitp.com) - [Foursquare ITP](https://www.foursquareitp.com)が提供する輸送スケジュールおよびGTFS検証プラットフォーム。その中には、[gtfs-lib](https://github.com/conveyal/gtfs-lib/)をベースにした無料のウェブベースGTFS検証ツールが含まれる。
- [Transit App's gtfs-fares-v2-validator](https://github.com/TransitApp/gtfs-fares-v2-validator) - GTFS-Fares-v2データを[draft specification](https://docs.google.com/document/d/19j-f-wZ5C_kYXmkLBye1g42U-kvfSVgYLkkG5oyBauY/edit#)に基づいて検証するPythonツール。
- [Transport Validator](https://github.com/etalab/transport-validator/) - [Rust](https://www.rust-lang.org/)で実装されたオープンソース検証ツール。[French National Access Point](https://transport.data.gouv.fr/validation/)で使用されている。
- [gtfs-accessiblity-validator](https://github.com/BlinkTagInc/gtfs-accessibility-validator) - GTFSファイルにアクセス可能性関連のフィールドやファイルが存在するかを検証。コマンドラインツールまたはnode.jsパッケージとして利用可能。


### GTFS Realtime <a id="gtfs-realtime"></a>

- [GTFS-realtime documentation](https://github.com/google/transit/tree/master/gtfs-realtime).
- [GTFS-realtime Autodoc](https://laidig.github.io/gtfs-rt-autodoc/index.html) - GTFS-realtimeの自動生成ドキュメンテーション。公式の[GTFS-realtime protocol buffer specification](https://github.com/google/transit/blob/master/gtfs-realtime/proto/gtfs-realtime.proto)から生成され、一部の拡張を含む。

#### GTFS Realtimeライブラリとデモアプリ <a id="gtfs-realtime-libraries--demo-apps"></a>

- [gtfs-realtime-bindings](https://github.com/google/gtfs-realtime-bindings) - Java、.NET、Node.js、Python、Ruby向けの公式バインディング。公式の[GTFS-realtime protocol buffer specification](https://github.com/google/transit/blob/master/gtfs-realtime/proto/gtfs-realtime.proto)から生成されたもの。
- [gtfs-rt](https://crates.io/crates/gtfs-rt) - RustのライブラリでGTFS-Realtimeデータを読み書きおよび操作する。
- [GTFS-realtime Exporter](https://github.com/OneBusAway/onebusaway-gtfs-realtime-exporter/wiki) - JavaベースのツールでGTFS-Realtimeフィードの生成と共有を支援。
- [GTFS-realtime Alerts Producer Demo](https://github.com/OneBusAway/onebusaway-gtfs-realtime-alerts-producer-demo/wiki) - JavaベースのデモプロジェクトでGTFS-Realtimeサービスアラートを生成。
- [GTFS-realtime Alerts Producer Web Application](https://github.com/OneBusAway/onebusaway-service-alerts) - GTFSリアルタイムサービスアラートを生成するJavaベースのウェブアプリケーション。
- [GTFS-realtime TripUpdates & VehiclePositions Producer Demo](https://github.com/OneBusAway/onebusaway-gtfs-realtime-trip-updates-producer-demo/wiki) - JavaベースのデモプロジェクトでGTFS-Real及時トリップ更新（到着予測）および車両位置を生成。
- [GTFS-realtime Vehicle Positions Consumer/Visualizer Demo](https://github.com/OneBusAway/onebusaway-gtfs-realtime-visualizer) - JavaベースのデモプロジェクトでGTFS-Realtime車両位置フィードを消費し、地図上に表示。

#### GTFS Realtime検証ツール <a id="gtfs-realtime-validators"></a>

- [gtfs-realtime-validator](https://github.com/MobilityData/gtfs-realtime-validator) - GTFS Realtime検証ツール。元々はフロリダ大学南東大学の[Center for Urban Transportation Research](https://www.cutr.usf.edu/)によって開発され、現在は[MobilityData](https://mobilitydata.org/)によって維持されている。

#### GTFS RealtimeなどリアルタイムAPIの保存ツール <a id="gtfs-realtime-and-other-real-time-api-archival-tools"></a>

- [gtfsrdb](https://github.com/CUTR-at-USF/gtfsrdb) - PythonツールでGTFS-Realtimeフィードをデータベースに読み込み、アーカイブ。
- [retro-gtfs](https://github.com/SAUSy-Lab/retro-gtfs) - Nextbus APIからリアルタイムデータを収集し、GTFS形式（すなわち、後退型GTFS）にアーカイブするPythonアプリケーション。
- [Transi](https://gitlab.com/cutr-at-usf/transi) - クラウドネイティブなGTFS-RT/GTFSアーカイブシステム。
- [GTFS-Realtime-Capsule](https://github.com/tsdataclinic/gtfs-realtime-capsule) - コマンドラインツールでリアルタイムの公共交通データをスクレイピングし、標準化してアーカイブ。
- [gtfsdb_realtime](https://github.com/OpenTransitTools/gtfsdb_realtime) - リアルタイムGTFSデータベースローダーおよびORMライブラリ

#### GTFS Realtime変換ツール <a id="gtfs-realtime-convertors"></a>

- [SIRI to GTFS-realtime](https://github.com/OneBusAway/onebusaway-gtfs-realtime-from-siri-cli) - [SIRI format](https://www.siri.org.uk/)からGTFS-realtimeへのJavaベースのコマンドラインツール。
- [OrbCAD SQL Server to GTFS-realtime](https://github.com/CUTR-at-USF/HART-GTFS-realtimeGenerator/) - JavaベースのコマンドラインツールでOrbCAD SQL Serverから車両位置およびトリップ更新情報を抽出し、GTFS-Realtimeのトリップ更新および車両位置フォーマットにエクスポート。
- [NextBus API to GTFS-realtime](https://github.com/OneBusAway/onebusaway-gtfs-realtime-from-nextbus-cli/wiki) - [NextBus API format](http://www.nextbus.com/xmlFeedDocs/NextBusXMLFeed.pdf)からGTFS-realtimeへのJavaベースのコマンドラインツール。注：NextBusは現在、自社製品向けにGTFS-realtime APIを直接提供している。[Cubic site](http://nextbus.cubic.com/Products/Real-Time-Rider-Information)および[this FAQ](https://medium.com/omnimodal/want-more-riders-open-up-your-nextbus-api-with-gtfs-realtime-7387c80f31e1#.pkuzizhl5)を参照。
- [Syncromatics API to GTFS-realtime](https://github.com/CUTR-at-USF/bullrunner-gtfs-realtime-generator) - Javaベースのコマンドラインツールで、[Syncromatics API](http://www.syncromatics.com/)形式からGTFS-realtimeのTripUpdatesおよびVehiclePositionsに変換する。
- [KV6,15,17, and ARNU to GTFS-realtime](https://github.com/bliksemlabs/bliksemintegration-realtime) - Javaベースのツールで入力されたKV6、15、17およびARNUを静的輸送データとマッチし、RID統合データベースに存在するデータをもとに、ARNU RITinfo、GTFS(リアルタイム)およびKV78turboとしてエクスポート。
- [WMATA BusPositions API to GTFS-realtime](https://github.com/kurtraschke/wmata-gtfsrealtime) - Javaベースのツールで、WMATAの[BusPositions API](https://developer.wmata.com/docs/services/54763629281d83086473f231/operations/5476362a281d830c946a3d68)および[MetroAlerts](http://www.wmata.com/rider_tools/metro_service_status/rail_bus.cfm?)からのAlert RSSフィードをGTFS-realtimeのTripUpdates、VehiclePositions、およびAlertフィードに変換する。
- [SEPTA API to GTFS-realtime](https://github.com/kurtraschke/septa-gtfsrealtime) - Javaベースのツールで、[SEPTA's](http://www.septa.org/) [real-time bus and rail data](http://www3.septa.org/hackathon/)をGTFS-realtimeに変換する。
- [CTA API to GTFS-realtime](https://github.com/kurtraschke/ctatt-gtfsrealtime) - Javaベースのツールで、[CTA's](http://www.transitchicago.com/) [Train Tracker data](http://www.transitchicago.com/developers/traintracker.aspx)をGTFS-realtimeに変換する。
- [Detroit DOT to GTFS-realtime](https://github.com/prashtx/ddot-avl) - [DDOT's](http://www.detroitmi.gov/How-Do-I/Locate-Transportation/Bus-Schedules) TransitMasterインストール（データベース）からリアルタイム情報を抽出し、GTFS-realtimeに変換する。
- [Live Transit Event Trigger](https://github.com/ipublic/live_transit_event_trigger) - [Ride On's](http://www.montgomerycountymd.gov/dot-transit/) OrbCADデータベースからデータを抽出し、GTFS-realtimeとしてエクスポートする。
- [SoundTransit to GTFS-realtime](https://github.com/bdferris/onebusaway-sound-transit-realtime) - [Sound Transit](http://www.soundtransit.org/)のテキストファイルフィードをGTFS-realtimeに変換する。
- [Civic Transit](https://github.com/jestin/CivicTransit) - [KCATA’s](http://www.kcata.org/) TransitMaster WebWatchインストールをスクリーンスクレイピングしてGTFS-realtimeフィードを生成する。
- [gtfs-realtime-translators](https://github.com/Intersection/gtfs-realtime-translators) - カスタム到着APIフォーマットをGTFS-Realtimeに変換するPythonベースツール。2019年7月時点ではLA MetroおよびSEPTAをサポート。
- [hafas-gtfs-rt-feed](https://github.com/derhuerst/hafas-gtfs-rt-feed) – A Javascript tool to generate a GTFS Realtime feed from a HAFAS endpoint.
- [GTFS-realtime to SIRI-Lite](https://github.com/etalab/transpo-rt/) - [Rust](https://www.rust-lang.org/)ウェブサーバーで複数のGTFS-RTフィードをSIRI-Lite APIに変換する。
- [TransitClock](https://thetransitclock.github.io/) - 原始車両位置を消費し、GTFS-Realtime形式などに予測時間を作成するJavaアプリケーション。かつては"Transitime"と呼ばれていた。

#### GTFS Realtimeユーティリティ <a id="gtfs-realtime-utilities"></a>

- [bus_kalman](https://github.com/cmoscardi/bus_kalman) - NYC MTAのリアルタイムデータを用いてバスの運行時間の補完を行うためのカーマンフィルター
- [Concentrate](https://github.com/mbta/concentrate) - GTFS Realtimeユーティリティに関する公共交通データのツールまたは資料です。管理元は[
Massachusetts Bay Transportation Authority (MBTA)](https://github.com/mbta).
- [gtfs-mcp](https://github.com/jdamcd/gtfs-mcp) - LLMsがGTFSスケジュールおよびGTFS-RTデータをクエリできるようにする実験的なMCP（モデルコンテキストプロトコル）サーバー。公共交通の質問に答えるか、分析を実行するためのもの。
- [gtfs-realtime-test-service](https://github.com/CUTR-at-USF/gtfs-realtime-test-service) - GTFSリアルタイムフィードコンテンツをシミュレーションするツール（例：GTFSリアルタイム消費アプリケーションのテストに使用）。
- [GTFS-realtime Munin Plugin](https://github.com/OneBusAway/onebusaway-gtfs-realtime-munin-plugin) - GTFS-realtimeフィードに関する情報をログに記録する[Munin](http://munin-monitoring.org/)プラグインを提供する。
- [GTFS-realtime Nagio Plugin](https://github.com/OneBusAway/onebusaway-gtfs-realtime-nagios-plugin) - GTFS-realtimeフィードを監視する[Nagios](https://www.nagios.org/)プラグインを提供する。
- [GTFS-realtime Printer](https://github.com/laidig/gtfs-rt-printer) - GTFSリアルタイムファイルまたはURLから情報を出力するためのJavaベースのユーティリティ。
- [gtfs-rt-admin](https://github.com/conveyal/gtfs-rt-admin) - GTFS-RTサービスアラートの管理を行うための管理ツール（JavaScriptおよびJava）。
- [gtfs-rt-differential-to-full-dataset](https://github.com/derhuerst/gtfs-rt-differential-to-full-dataset) – Javascript tool to transform a continuous GTFS Realtime stream of `DIFFERENTIAL` incrementality data into a `FULL_DATASET` dump.
- [gtfs-rt-dump](https://github.com/kurtraschke/gtfs-rt-dump) - プロトコルバッファ形式をプレーンテキストに変換し、GTFSリアルタイムフィードをプレーンテキストで簡単に閲覧可能にする（デバッグ用）。
- [gtfs-rt-inspector](https://public-transport.github.io/gtfs-rt-inspector/) – Web app to inspect & analyze any (CORS-enabled) GTFS Realtime feed. Open-source on [GitHub](https://github.com/public-transport/gtfs-rt-inspector).
- [GTFS Data Pipeline for TfNSW Bus Datasets](https://github.com/teckkean/GTFS-Data-Pipeline-TfNSW-Bus) - TfNSWのGTFS静的およびリアルタイムデータセットを対象としたデータパイプライン。このパイプラインで生成されたデータセットは、TfNSWの公共交通信号優先要求（PTIPS）のパフォーマンスを検証する際に使用された。
- [manual-gtfsrt](https://github.com/pailakka/manual-gtfsrt) - 編集可能なJSONから作成されたGTFS-RTフィードを提供するGoベースのツール。
- [print-gtfs-rt-cli](https://github.com/derhuerst/print-gtfs-rt-cli) – Javascript tool to read a GTFS Realtime feed from stdin, print human-readable or as JSON.
- [transitcast](https://github.com/OpenTransitTools/transitcast) - GTFSおよびGTFS-RTの車両位置フィードを用いて、各車両が計画された停車場から次の計画された停車場へ移動するまでの推定移動時間を計算し、これを「observed_stop_time」としてテーブルに記録する。これらの記録は、車両の移動予測を機械学習モデルに訓練するために使用できる。TriMetが[an FTA IMI project](https://trimet.org/imi/program.htm)として開発した。
- [transit-feed-quality-calculator](https://github.com/CUTR-at-USF/transit-feed-quality-calculator) - 多くの輸送フィードの品質を評価するJavaプロジェクトで、フィードURLをグローバルディレクトリ（）から取得する。 [gtfs-realtime-validator](https://github.com/CUTR-at-USF/gtfs-realtime-validator) [TransitFeeds.com/OpenMobilityData.org](https://openmobilitydata.org/)
- [Transit Network Model](https://github.com/tmelliott/TransitNetworkModel) - GTFSリアルタイムの車両位置、粒子フィルター、カーマンフィルターを用いて予測を生成するツール。
- [GTFS Realtime Display](https://codeberg.org/dancingCycle/gtfs-rt-display) - GTFSリアルタイムデータの分析、監視、維持。[Example instances](https://www.swingbe.de/activity/gtfs-rt-display/)
- [GTFS Realtime Prediction Accuracy metrics](https://docs.google.com/document/d/1-AOtPaEViMcY6B5uTAYj7oVkwry3LfAQJg3ihSRTVoU/edit#heading=h.j27shba7rlk6) - GTFSリアルタイムの有用なパフォーマンスメトリクス。

### SIRI <a id="siri"></a>

- [SIRI API](https://github.com/OneBusAway/onebusaway/wiki/SIRI-Resources) - v1.0およびv1.3 [SIRI](https://www.siri.org.uk/)スキーマから生成されたJavaクラス。
- [SIRI 2.0 API](https://github.com/laidig/siri-20-java) - v2.0 [SIRI](https://www.siri.org.uk/)スキーマから生成されたJavaクラス。
- [SIRI to GTFS-realtime](https://github.com/OneBusAway/onebusaway-gtfs-realtime-from-siri-cli/wiki) - [SIRI format](https://www.siri.org.uk/)からGTFSリアルタイム形式に変換するためのJavaベースのコマンドラインユーティリティ。
- [SIRI 2.0 Autodoc](https://laidig.github.io/siri-20-java/doc/) - 非常に詳細に注釈されたSIRI 2.0スキーマ定義から自動生成されたドキュメンテーション。
- [King County Metro Legacy AVL to SIRI](https://github.com/bdferris/onebusaway-king-county-metro/tree/master/onebusaway-king-county-metro-legacy-avl-to-siri) - Javaベースのツールで、[King County Metro's](http://metro.kingcounty.gov/)のLegacy AVL形式をSIRIに変換する。
- [SIRI REST Client](https://github.com/CUTR-at-USF/SiriRestClient/wiki) - リアルタイム輸送データのRESTful SIRIインターフェースとの相互作用を行うオープンソースAndroidライブラリ。現在、[MTA Bus Time API](http://bustime.mta.info/wiki/Developers/SIRIIntro)が使用しているもの。
- [SIRI 1.3 POJOs (Android-compatible)](https://github.com/CUTR-at-USF/onebusaway-siri-api-v13-pojos/wiki) - SIRI v1.3 APIのレスポンス（XML/JSONのデシリアライズ）用のAndroid対応のシンプルなJavaオブジェクト（POJOS）。[SIRI REST Client](https://github.com/CUTR-at-USF/SiriRestClient/wiki)で使用されている。
- [pysiri2validator](https://github.com/laidig/pysiri2validator) - Python 3で書かれたSIRI 2.0のシンプルなバリデーションツール。
- [Edwig](https://github.com/af83/edwig) - SIRIプロトコルを使用してリアルタイム公共交通データ交換を行うGoサーバー。
- [BISON](https://bison.dova.nu/standaarden/nederlands-siri-profiel) - オランダにおけるSIRIの実装。

### その他のマルチモーダルデータ形式 <a id="other-multimodal-data-formats"></a>

#### 広く採用 <a id="widely-adopted"></a>
- [APDS](https://www.allianceforparkingdatastandards.org/) - 駐車データ標準連盟：[International Parking Institute (IPI)](https://www.parking.org/)、[British Parking Association (BPA)](http://www.britishparking.co.uk/)、[European Parking Association (EPA)](http://www.europeanparking.eu/)が構成。APDSは、世界中でプラットフォームを越えて駐車データを共有できる一貫したグローバルスタンダードを開発・推進・管理・維持することを目的とする非営利組織。
- [DATEX](https://datex2.eu/) - ヨーロッパの道路交通および移動情報データ標準。
- [GBFS](https://gbfs.org/) - 一般自転車シェアフィード規格：自転車シェア、スクーターシェア、モペッドシェア、自動車シェアに関するリアルタイム情報のオープンデータ標準。
- [MDS](https://github.com/openmobilityfoundation/mobility-data-specification) - 移動データ仕様：自治体および移動サービスプロバイダー向けにリアルタイムデータの共有、測定および規制を実現するフォーマット。政府がプロバイダーに対して規制を強化し、評価・管理を行う能力を確保することを目的としている。[Open Mobility Foundation](https://www.openmobilityfoundation.org/)が維持している。
- [NeTex](http://netex-cen.eu/) - 複雑な静的輸送データを分散システム間で交換するために設計された一般用途のXMLフォーマット。[CEN standards process](https://www.cencenelec.eu/european-standardization/european-standards/)が管理する分散システム間で使用する。
- [TODS](https://ods.calitp.org/) - 公共交通運営データ標準：運転手、配車担当者、計画者などが公共交通運営を行うために使用する運行スケジュールを表現する標準形式。
- [TOMP](https://github.com/TOMP-WG/TOMP-API) - 輸送事業者・モビリティ・アズ・ア・サービス提供者向けAPI：輸送事業者およびモビリティ・アズ・ア・サービス提供者が運行者発見、乗務計画、最終ユーザーとのインタラクション、予約、および支払いに使用するAPI標準。

#### 試験・開発段階 <a id="pilot-or-development-stage"></a>
- [CurbLR](https://github.com/curblr/curblr-spec) - 駐車場規制に関する仕様。
- [Dyno-Demand](https://github.com/osplanning-data-standards/dyno-demand) - サンフランシスコ県輸送局、LMZ LLC、UrbanLabs LLCが開発した、個々の乗客の需要に焦点を当てたGTFSベースの旅行需要データ形式であり、動的ネットワークモデルに適したもの。
- [Dyno-Path](https://github.com/osplanning-data-standards/dyno-path) - (開発中 - [this post](https://github.com/osplanning-data-standards/GTFS-PLUS/pull/52#issuecomment-331231000)を参照) 個人の乗客の*経路*データ。
- [GTFS-plus](https://github.com/osplanning-data-standards/GTFS-PLUS) - プーガット・サウンド・リージョナル・カウンシル、UrbanLabs LLC、LMZ LLC、サンフランシスコ県輸送局が開発した、車両および容量データに焦点を当てたGTFSベースの輸送ネットワーク形式であり、動的輸送モデルに適したもの。
- [GTFS-ride](https://github.com/ODOT-PTS/GTFS-ride) - オレゴン州輸送局とオレゴン州立大学の共同プロジェクトにより開発された、オープンな固定ルート輸送利用者データ標準。
- [GTFS-stat](https://github.com/osplanning-data-standards/GTFS-STAT) - UrbanLabs LLCおよびサンフランシの県輸送局が開発した、GTFS輸送ネットワークに追加ファイルを含む拡張形式であり、パフォーマンスデータを含むもの。
- [GMNS](https://github.com/zephyr-data-specs/GMNS) - 一般モデルネットワーク仕様：ルート可能な道路ネットワークファイルを共有するためのフォーマットであり、多モーダルの静的および動的輸送計画および運用モデルで使用されるように設計されている。Volpe/FHWAとZephyr Foundationの提携によるもの。
- [GTNS](https://zephyrtransport.org/trb17projects/7-general-travel-network-specification/) - 一般旅行ネットワーク仕様：旅行需要モデルネットワークを共有するための計画されたデータ仕様。
- [IXSI](https://github.com/RWTH-i5-IDSG/ixsi) - 旅行情報システムと共有システム（カーサーバー、バイクシェア）間の情報交換用インターフェース。
- [MTLFS](https://github.com/vta/Managed-and-Tolled-Lanes-Feed-Specification) - 管理・料金適用レーンフィード規格：MTLFS（管理・料金適用レーン料金フィード規格）を含むスキーマの提案であり、 [Santa Clara Valley Transportation Authority](http://www.vta.org/)が開発したすべてのファイルで使用されるフィールドを定義する。
- [MaaS API](https://github.com/maasglobal/maas-tsp-api/blob/master/specs/Booking.md) - MaaSに適合するAPIを定義するオープンドキュメントおよびテストセット。
- [NCHRP 08-119](http://apps.trb.org/cmsfeed/TRBNetProjectDisplay.asp?ProjectID=4543) - 本研究の目的は、輸送分野において、静的およびリアルタイムデータの収集、管理、共有を行うための標準および／またはガイドラインを開発することにある。
- [OMX: The Open Matrix data file format](https://github.com/osPlanning/omx) - 輸送モデル業界での可能性のある使用を目的とした、2次元配列オブジェクトおよび関連メタデータの構造化コレクション。
- [OJP](https://github.com/VDVde/OJP) - オープン・ジャーニー・プランナー。
- [OSDM](https://github.com/UnionInternationalCheminsdeFer/OSDM) - オープンセールズおよびディストリビューションモデル：鉄道の利用者向けの予約プロセスを大幅に簡略化し、ディストリビューターおよび鉄道運送業者の複雑さとディストリビューションコストを削減することを目的とする。オフラインモデルおよびオンラインAPIの規格を含む。 [International Union of Railways (UIC)](https://github.com/UnionInternationalCheminsdeFer)が維持している。
- [SAE Shared and Digital Mobility Committee](http://articles.sae.org/15799/) - 車共有および輸送ネットワーク企業（TNC）／リドシェア向けデータ標準の開発に取り組んでいる。
- [shared-row](https://github.com/d-wasserman/shared-row) - SharedStreetsリファレンスにおける道路使用権（ROW）に関する仕様。
- [TCRP G-16](http://apps.trb.org/cmsfeed/TRBNetProjectDisplay.asp?ProjectID=4120) - 本研究の目的は、要望に応じた運搬サービスを提供する関係者に必要な取引データの技術仕様を策定することであり、完了予定日は2018年末である
- [TIDES](https://github.com/TIDES-transit/TIDES) - 輸送ITSデータ交換仕様（TIDES）は、AVL、APCおよびAFCデータを含む歴史的な輸送ITSデータのための標準データ構造、API、データ管理ツールを創出する提案された取り組み。
- [OpenStop](https://wiki.openstreetmap.org/wiki/OpenStop) - OpenStopは、公開されているオープンストリートマップに、公共輸送の停車場の障害物やその他のアクセシビリティ特性情報を追加する無料アプリ。
- [JOSM Plugins - PT Assistant](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/PT_Assistant) - プラグインは、公衆輸送ルートを基準にした評価を行い、可能な限りそれらを修正する方法を提案する。
- [JOSM Validator Rules](https://josm.openstreetmap.de/wiki/Rules) - JOSMバリデーター（タグチェック）は、MapCSSに基づいた異なるルールでカスタマイズ可能。
- [OSM Relatify](https://wiki.openstreetmap.org/wiki/Relatify) - OSM Relatifyは、公共交通関係の維持プロセスを簡略化するツールです。
- [OpenStreetMap Route Editor](https://osm-simple-route-editor.kyle.kiwi/) - OpenStreetMapにおけるルート関係の効率的な編集を行うツール - OSM
- [Prism](https://github.com/Jungle-Bus/prism) - PrismはOpenStreetMapから公共交通データを抽出するツールです。
- [Open Street Map Public Transport Parser](https://github.com/cualbondi/osmptparser) - Open Street Map Public Transport Parser
- [Sketch Line](http://www.overpass-api.de/public_transport.html) - OSMデータから輸送図を生成するツールです。

### API作成ソフトウェア <a id="software-for-creating-apis"></a>

交通・マルチモーダルデータのAPIを提供するために構築できるソフトウェアです。

- [GraphHopper Routing Engine](https://github.com/graphhopper/graphhopper/#public-transit) Open source routing engine for OpenStreetMap. Use it as Java library or server.
- [gtfs-server](https://github.com/denysvitali/gtfs-server) - Rustで書かれたウェブサーバーで、PostGISをバックエンドとしてGTFSデータをHTTPエンドポイント経由で提供します。
- [hafas-rest-api](https://github.com/public-transport/hafas-rest-api) – Expose a [HAFAS](https://de.wikipedia.org/wiki/HAFAS) endpoint as a REST API.
- [Linked Connections](http://linkedconnections.org/) - オープンソースかつスケーラブルな多モードルート計画エンジンで、クライアントがルート計画アルゴリズムを実行できるようにしています（サーバーではなく）。GTFSデータを使用しています。
- [Mobroute](http://sr.ht/~mil/mobroute) - Mobrouteは、一般目的のオープンソース公共交通のルート（例：移動計画）GoライブラリおよびCLIであり、輸送機関自らが提供する時刻表（GTFS）データを直接読み込み、そのデータをもとにルートを計算する。データは [Mobility Database](https://database.mobilitydata.org/)から取得される。このツールは、デバイス上でGTFSデータに基づいたルート計算の実行・テストを行うCLIを提供するほか、既存のナビゲーションアプリにGTFSルート機能を埋め込むことも可能である。
- [MOTIS](https://motis-project.org) - 大規模な運行表とOpenStreetMapデータを処理するように設計されたMOTISは、歩行、自転車、シェアモビリティ（eスクーター、自転車シェア、車シェア）、公共交通など、さまざまな移動手段を統合し、最適化されたルート解決を提供します。MOTISは、高いパフォーマンスと低メモリ使用量を最適化しており、これにより、安価なハードウェア上で地球規模の展開が可能になります。GTFS、GTFS-RT、NeTEx、SIRI、GBFS、OpenStreetMapデータをサポートしています。
- [Navitia](https://github.com/hove-io/navitia) is the opensource engine behind the [Navitia.io](http://www.navitia.io/) live API.
- [OneBusAway](http://onebusaway.org/) - GTFSおよびGTFSリアルタイム（および [other formats](https://github.com/OneBusAway/onebusaway-application-modules/wiki/Real-Time-Data-Configuration-Guide)）を消費するJavaアプリで、それらを使いやすいREST APIに変換する。
- [OpenTripPlanner](http://www.opentripplanner.org/) - 多モーダルおよび多機関の移動計画を行うオープンソースプラットフォームであり、GTFSおよび [OpenStreetMap](http://www.openstreetmap.org/)などのデータソースを用いて多モーダルグラフに関する情報を返す。
- [pyBikes](https://github.com/eskerda/pybikes) - [CityBikes](http://api.citybik.es)が運営する世界中の自転車シェアシステム情報のソフトウェア
- [Simple Transit Api](https://github.com/ioTransit/simple-transit-api) - GolangでGTFS APIを簡単に始められる方法です。
- [Transitous](https://transitous.org) - コミュニティが運営する無料かつオープンな公共交通ルートサービスです。
- [Iran Railway-Trains](https://github.com/keyone2693/IRTrainDotNet) - イラン鉄道（Raja-Fadak-Safir）をDotNet（API・Webサービス）で一括提供したパッケージです。
  

## データの共有 <a id="sharing-data"></a>

GTFSなどの交通・マルチモーダルデータ集へアクセスできる場所です。

#### 第三者GTFS URLディレクトリ <a id="3rd-party-gtfs-url-directories"></a>
- [The Mobility Database](https://mobilitydatabase.org/) - JSONおよびCSVファイル [on GitHub](https://github.com/MobilityData/mobility-database-catalogs) は、世界中2000以上の移動性データセットを収集したリポジトリ。OpenMobilityData/TransitFeeds.comのコンテンツを含む。
- [Transitland](https://transit.land/) - 多くの運行事業者によるGTFSデータをコミュニティが編集可能なリストです。また、データをJSON／GeoJSONでAPIでアクセスできるようにし、データを試すためのプレイグラウンドも提供しています。
- [TransitData.io](https://transitdata.io/) - ラテンアメリカの一部におけるGTFSデータのリストです。フィードのアクセスには、ウェブサイトの運営者に直接連絡する必要があります（公開されていません）。
- [~~OpenMobilityData~~ (Deprecated)](https://openmobilitydata.org/) - GTFSおよび [GTFS-RT](https://openmobilitydata.org/search?q=gtfsrt)フィードのリスト。 [Archives and validates](https://openmobilitydata.org/p/capital-metro/24) でGTFSフィードを提供し、ブラウザで [GTFS](https://openmobilitydata.org/p/capital-metro/24/latest)および [GTFS-RT](https://openmobilitydata.org/p/capital-metro/495)をプレビューできる。以前はTransitFeeds.comであった。 [MobilityData announced](https://database.mobilitydata.org/#h.u71vp6xgkckf) は2022年初頭から終了され、シャットダウン日は決定されている。

#### 交通事業者のデータアーカイブ <a id="transit-agency-data-archives"></a>
- [CapMetrics](https://github.com/scascketta/CapMetrics) - アウストンの輸送機関（CapMetro）の過去の車両位置データ。データは [capmetricsd](https://github.com/scascketta/capmetricsd)、Goのデーモンによって収集される。
- [Bus Observatory API](https://api.busobservatory.org/) - 世界中の輸送システムから収集された実時間の車両移動および状態データの公開アーカイブ。

#### 国の行政データセット <a id="national-government-datasets"></a>
- [National Transit Database (USA)](https://www.transit.dot.gov/ntd) - アメリカ合衆国における輸送システムに関する情報および統計。フエダラルトランスポートアドミニストレーションが運営しています。
- [transport.data.gouv (France)](https://transport.data.gouv.fr/) - フランスの輸送生態系向けデータプラットフォーム。
- [European long-distance transport operators (EU) *(Unofficial)*](https://github.com/public-transport/european-transport-operators) - 非公式なAPIエンドポイント、GTFSフィードおよびクライアントライブラリのリスト

#### 独自（非標準）ベンダーAPI <a id="proprietary-non-standard-vendor-apis"></a>
- [Transport API](https://www.transportapi.com/) - イギリスの集計された輸送データ向けREST API。料金制アクセス。
- [NextBus API](http://www.nextbus.com/xmlFeedDocs/NextBusXMLFeed.pdf) - NextBusのハードウェアおよび／またはソフトウェアを購入した事業者向けのリアルタイム車両、ルート、停車場、到着データ向けREST API。
- [Navitia.io](http://www.navitia.io/) - 米国およびEUにおける移動計画、停車時刻、等距離線などに関するREST API。 [Navitia](https://github.com/hove-io/navitia)はライブAPIのオープンソースエンジンである。
- [CityBikes](http://api.citybik.es) - 世界中の自転車シェアデータを集約したREST API。 [pyBikes](https://github.com/eskerda/pybikes)によって駆動されている。
- [HAFAS](https://de.wikipedia.org/wiki/HAFAS) – Propriety public transport management software by [HaCon](https://www.hacon.de) ([list of endpoints](https://gist.github.com/derhuerst/2b7ed83bfa5f115125a5))
- [Citymapper API](https://docs.external.citymapper.com/api/) - 輸送ルート計画、リアルタイム輸送データ、歩行、自転車、スクーター移動時間に関するREST API。
- [TripGo API](https://developer.tripgo.com) - 多モーダル移動計画およびリアルタイムデータに関するREST API。 [SkedGo](https://skedgo.com)によって提供されている。

#### クラウドソースの交通データ <a id="crowdsourced-transit-data"></a>
- [Citylines.co](https://www.citylines.co) - 輸送システムの地図化を目的とした協働プラットフォームで、特にその歴史的進化に注目している。データは [citylines.co/data](https://www.citylines.co/data)からGeoJSONまたはCSVとしてダウンロード可能。
- [OpenStreetMap (OSM)](https://www.openstreetmap.org) - 世界の輸送、輸送、ルートデータを地図化するための協働プラットフォーム。
- [GTFS-Hub](https://github.com/mfdz/gtfs-hub) - Community tested, probably quality/content enhanced, partially merged or filtered GTFS-feeds of (currently German) transport agencies. Maintained by [MITFAHR|DE|ZENTRALE](https://github.com/mfdz).
- [Hub de Datos de Transporte Público en México](https://github.com/MobilityData/awesome-transit/blob/7b31683f8a45e960ed86b219d4db7ca8dd9c10b8/hdtp.codeandomexico.org/). An open platform created by Codeando México to help Mexican and Latin America cities publish standardized public transport data. Through GTFS feeds, mapping workflows, and open methodologies, the project turns fragmented transit information into reusable digital infrastructure that can power trip planners, accessibility tools, research, and mobility analysis.

#### ソフトウェアテスト用GTFS・GTFS Realtimeサンプル <a id="sample-gtfs-and-gtfs-realtime-datasets-used-for-software-testing"></a>
- [sample-gtfs-feed](https://github.com/public-transport/sample-gtfs-feed) - テスト用の仮想GTFSデータセット。
- [Transitland GTFS and GTFS Realtime unit tests](https://github.com/interline-io/transitland-lib) - Transitland向けGTFSおよびGTFSリアルタイムのパースとバリデーションを処理する [transitland-lib](https://github.com/interline-io/transitland-lib)ライブラリのテスト用。

## データの利用 <a id="using-data"></a>

### 利用者向けアプリ <a id="consumer-apps"></a>

公共交通の利用時に使うアプリです。

#### Webアプリ（オープンソース） <a id="web-apps-open-source"></a>
- [MOTIS](https://motis-project.org) - MOTISモビリティプラットフォームのウェブUI（ルート計画、地名検索、リアルタイム輸送地図など）。
- [Catenary Maps](https://catenarymaps.org) - リアルタイムおよびスケジュールベースのグローバルパブリックトランスポートマップとナビゲーションソフトウェア。RustとSvelteで構築されたもの。
- [Instabus](https://github.com/luqmaan/instabus) - アウストン（CapMetro）のパブリックトランスポートのリアルタイムマップ。サーバーやバックエンドに依存せず、完全にGitHub Pages上で動作する。メンテナンスが終了しており、instabus.orgドメインはプロジェクトに指すことがなくなっている。
- [Is SEPTA Fucked?](https://www.isseptafucked.com/) - フィラデルフィアのSEPTA（セプタ）のステータスダッシュボード。地域鉄道、メトロ、バスのサービスが現在中断されているかどうかを表示。
- [Is Metro Burning?](https://ismetroburning.com/) - ワシントンDCのメトロ（WMATA）向けの概要ステータスボード。
- [OpenTripPlanner Client GWT](https://github.com/mecatran/OpenTripPlanner-client-gwt) - OpenTripPlanner向けのGoogle Web Toolkitベースのウェブインターフェース
- [OpenTripPlanner.js](https://github.com/conveyal/otp.js) - OpenTripPlanner向けのJavaScriptベースのクライアント（開発が終了）。
- [OTP-UI React Component Library](https://github.com/opentripplanner/otp-ui) - React JavaScriptコンポーネントライブラリで、移動計画Webアプリを構築するために使用できる。 [Storybook](http://www.opentripplanner.org/otp-ui)を参照してデモを確認。
- [GTFS-realtime Alerts Producer Web Application](https://github.com/OneBusAway/onebusaway-service-alerts) - GTFSリアルタイムサービスアラートを生成するJavaベースのウェブアプリケーション。
- [HRT BUS Web app](https://github.com/Code4HR/hrt-bus-api) - HRTバスAPIは、ハマプトロスのリアルタイムバスデータをアプリケーションプログラミングインターフェース（API）を通じて開発者に提供する。
- [Transit-Map](https://github.com/vasile/transit-map) - 公共交通の時刻表をもとに、車両（マーカー）の位置を補完して地図上にアニメーションを実行するウェブアプリ。
- [Transitive.js](https://github.com/conveyal/transitive.js) - LeafletまたはD3を使用して、カスタマイズ可能なウェブマップレイヤーを生成。
- [Google I/O Transport Tracker](https://github.com/googlemaps/transport-tracker) - Google I/O会議のシャトル到着時刻を、オープンソース [transport-tracker project](https://github.com/googlemaps/transport-tracker)に基づいて表示。注：これを自ら実装するには [Google Maps APIs Premium Plan license](https://developers.google.com/maps/pricing-and-plans/)が必要。
- [1-Click](https://github.com/MobilityData/awesome-transit/blob/7b31683f8a45e960ed86b219d4db7ca8dd9c10b8/[http:/camsys.software/products/1-click](https:/github.com/camsys/oneclick)) - 多様な運搬手段（パブリックトランスポート、プライベート、鉄道、リドシェア、カーポール、ボランティア、パラトランスポート、徒歩、自転車）の情報を集約する仮想「トリップアグレゲーター」。
- [Bustime](https://busti.me) - ウェブソケットによるリアルタイムモニタリングを備えたパブリックトランスポーテーション。オープンソース [on GitHub](https://github.com/norn/bustime)。
- [Transit Tracker](https://transittracker.ca/#/) - カナダのグレートモントリオールおよびトロントのリアルタイム車両位置情報
- [GTFS Builder](http://nationalrtap.org/Web-Apps/GTFS-Builder) - GTFSファイルを作成するための無料ウェブアプリ。ナショナル・ラーバル・トランスポート・アシスタンス・プログラム（RTAP）がメンテナンス。
- Dede - リアルタイムの移動を地図表示する汎用的な旅客案内システムです。関連参照: <https://codeberg.org/dancingCycle/dede-obc-adapter>、<https://codeberg.org/dancingCycle/dede-server>、<https://codeberg.org/dancingCycle/dede-front-end>、<https://codeberg.org/dancingCycle/dede-display>。
- [MBTA tile-server](https://github.com/mbta/tile-server) - Dockerコンテナを作成するスクリプト。MBTA.com上で使用するマップタイルの開発に必要なすべての要素を閉じ込める。
- [Cadê Meu Busão](https://tarifazerobh.org/cade-meu-busao/) - ブラジル・ベロホルシントのバスのリアルタイムトラッキング。オープンソース [GitHub](https://github.com/tarifazero/monitoramento)。
- [Tiramisu Transit](https://github.com/CMU-RERC-APT/tiramisu3-pr) - カーネギー・ミルトン大学が開発・デプロイした、アダプティブなモバイルトランスポートアプリ。リアルタイムバス到着情報を表示。開発が終了。
- [OsmAnd](https://wiki.openstreetmap.org/wiki/OsmAnd) - OsmAndは、多くのAndroidおよびiOSスマートフォンやタブレットにインストール可能なGPSナビゲーションおよびマップアプリ。オプションでオフラインマップを提供し、ターンバイ...
- [BUS DATA](https://pinniped.page/projects/bus-data) - ロンドン・トランジット（カナダ・オンタリオ州ロンドン）向けのバストラッカー。追加の事実とデータを提供。ソース [on GitHub](https://github.com/ObsidianSeal/pinniped.page)。

#### Webアプリ（クローズドソース） <a id="web-apps-closed-source"></a>
- [TransitScreen](http://transitscreen.com/) - すべての地域の輸送選択肢に対するカスタムリアルタイム表示
- [Citylines.co](https://www.citylines.co) - 公共交通システムの地図作成を支援する協働プラットフォーム。特にその歴史的進化に注目。
- [Bikeshare Map](http://bikes.oobrien.com/) - 世界中の自転車シェアステーションの状態
- [Bongo](http://ebongo.org) - アイオワシティ、コラルビル、アイオワ大学のリアルタイムトランスポートトラッキング。3つの異なるトランスポートシステムを1つのUIに統合。
- [CityMapper Webapp](https://citymapper.com/nyc) - 本当に洗練されたウェブアプリで、30都市以上の都市にわたる旅行計画とルート状況を提供。
- [TransSee](https://www.transsee.ca/) - 実際の移動時間、車両の位置、運行スケジュールおよび地図に基づくリアルタイムの輸送予測。プレミアムプランでは、スケジュールの詳細な履歴、車両の位置、停車場到着情報、スケジュール遵守率、チャートおよびグラフにアクセスできます。追加料金でこのデータに基づくカスタムクエリを実行できます。
- [YourStop](http://yourstop.info) - モバイル対応のウェブアプリで、GTFSフィードを消費し、停車場のリアルタイムおよびスケジュールされた運行を表示。MBTA、YRT/VivaおよびマリランドMTAでリリース。
- [DC MetroHero](https://dcmetrohero.net) - ワシントンD.C.地域のWMATAメトロレールおよびメトロバスシステムのリアルタイム車両位置および到着・出発情報。ウェブアプリ、Android、iOSアプリが利用可能。
- [Amtraker](https://amtraker.com/) - アメリカ全土のAmtrak列車のリアルタイムトラッカー、ルート地図および駅の到着予定時間（ETA）を提供。

#### ネイティブアプリ（オープンソース） <a id="native-apps-open-source"></a>

- [Arrivals KMP](https://github.com/jdamcd/arrivals-kmp) - Kotlin Multiplatformによるリアルタイム輸送到着アプリ。macOSのツールバー、CLI、デスクトップ対応。MTA、TfL、UK国鉄、または任意のGTFS-RTフィードに対応。
- [Home Assistant](https://github.com/home-assistant/core/tree/dev/homeassistant/components/gtfs) The General Transit Feed Specification (GTFS) integration was introduced in Home Assistant 0.17, and it's used by 70 active installations.
- [KDE Itinerary](https://apps.kde.org/itinerary/) - 旅行計画用アプリ（デスクトップおよびAndroid）。公共交通のルートを検索し、オフラインで保存できるほか、旅行にイベントを追加、駅のフロアプランを確認できるなど、さまざまな機能を備えている。 [Souce Code](https://invent.kde.org/pim/itinerary), [GitHub](https://github.com/KDE/itinerary)
- [MACS Transit Android App](https://github.com/yeSpud/MACSTransitApp) - アラスカのフェアバンクスにおけるMACS輸送システム向けのAndroidデバイス用バストラッカーアプリ。RouteMatch APIを使用。
- [Next Train - Connecticut](https://github.com/data-creative/NextTrainCT) - コネクティカット州シェアライン・イースト交通機関が発表する電車の運行スケジュールを検索するReact-Nativeモバイルアプリ。 [Next Train API](https://github.com/data-creative/next-train-api)のデプロイに依存。
- [Offi Directions](https://gitlab.com/oeffi/oeffi) - ヨーロッパおよびそれ以上の地域の輸送機関向けの旅行計画、スケジュール、リアルタイムの出発時間、および運行障害情報の提供を行うAndroidアプリ。
- OneBusAway Apps - [Android](https://play.google.com/store/apps/details?id=com.joulespersecond.seattlebusbot) [*(ソースコード)*](https://github.com/OneBusAway/onebusaway-android), [Fire Phone](http://www.amazon.com/gp/mas/dl/android?p=com.joulespersecond.seattlebusbot) [*(ソースコード)*](https://github.com/OneBusAway/onebusaway-android), [iOS](https://itunes.apple.com/us/app/onebusaway/id329380089)  [*(ソースコード)*](https://github.com/OneBusAway/onebusaway-ios), [Windows Phone](https://www.microsoft.com/en-us/store/apps/onebusaway/9nblggh0cbd9) [*(ソースコード)*](https://github.com/OneBusAway/onebusaway-windows-phone), [Google Glass GDK](https://github.com/OneBusAway/onebusaway-android/pull/219) [*(ソースコード)*](https://github.com/OneBusAway/onebusaway-android/pull/219), [Alexa skill](https://www.amazon.com/OneBusAway/dp/B01ELVUYCW/) [*(ソースコード)*](https://github.com/OneBusAway/onebusaway-alexa)
- [OpenTripPlanner Android](https://github.com/CUTR-at-USF/OpenTripPlanner-for-Android/wiki) - Androidアプリで [OpenTripPlanner](http://www.opentripplanner.org/)を提供。
- [OpenTripPlanner iOS](https://github.com/opentripplanner/OpenTripPlanner-iOS) - iOSアプリで [OpenTripPlanner](http://www.opentripplanner.org/)を提供。
- [opentripplanner-client-library](https://github.com/CUTR-at-USF/opentripplanner-client-library) - Kotlin Multiplatformライブラリで、OpenTripPlanner v2サーバーからのAPIリクエストとレスポンスのパースを行い、Android、iOS、ウェブ向けの旅行計画、自転車レンタル情報、サーバーメタデータを提供。
- [Transito](http://git.sr.ht/~mil/transito) - オープンソースで、運行データ提供元に依存しない公共交通アプリ。公開されているGTFSデータ（ [Mobility Database](https://database.mobilitydata.org/)から取得）を用いて、場所間のルートを計算できる。 [Mobroute Go API](http://sr.ht/~mil/mobroute)を活用し、スマートフォン上でルート計算を行う。現在はAndroidおよびLinuxに対応するクロスプラットフォームアプリ。
- [Tiramisu Transit](https://github.com/CMU-RERC-APT/tiramisu3-pr#mobile-app-client) - カーネギーマンリュ大学が開発・配布した、リアルタイムバス到着情報を表示するアダプティブなモバイル輸送アプリ。Ionicフレームワークを使用。現在はメンテナンスされていない。
- [Transportr](https://github.com/grote/Transportr) An Android app that uses [public-transport-enabler](https://github.com/schildbach/public-transport-enabler) in order to connect to many different transport networks worldwide.
- [Trufi App](https://github.com/trufi-association/trufi-app) - 多モーダルかつリアルタイム輸送情報表示ソフトウェア。 [OpenTripPlanner](http://www.opentripplanner.org/)

#### ネイティブアプリ（クローズドソース） <a id="native-apps-closed-source"></a>

- [Transit](http://transitapp.com/)
- [CityMapper](https://citymapper.com/)
- [Moovit](http://moovitapp.com/)
- [Transit Display](http://transitdisplay.com/) - ユーザー相互作用に焦点を当てたコミュニティ運営型旅行計画アプリ。ユーザーは異常を報告、画像をアップロード、輸送データを編集し、他の乗客とチャットが可能。
- [Ualabee](https://ualabee.com/company/) - Pythonによるレンダラーで、ラズベリーパイに搭載された128×32 HUB75 LEDマトリクスを駆動し、リアルタイム輸送到着情報を表示。
- [ÖPNV Navigator](https://navigatorapp.net/)
- [TripGo](https://tripgo.com/)

### ハードウェア <a id="hardware"></a>

実験用および本番用の交通ハードウェアです。

- [Arrivals LED](https://github.com/jdamcd/arrivals-led) - ミアンのプロトタイプとしての、安価なオープンソースソリューションによる輸送バスのトラッキングコード。
- [Bus Tracking GPS](https://github.com/herrdragon/busTrackingGps) - Raspberry Pi Zero 2WにWS2812B LEDを搭載したオープンソースMBTA表示。リアルタイム車両位置、地理的に正確なPCBマップ、ウェブコントロールインターフェースを備える。
- [CharlieBoard](https://github.com/tomunderwood99/CharlieBoard) - Raspberry Pi Zer0をベースにした、ほぼリアルタイムのミニチュアUK鉄道駅の列車出発表示の再現。
- [Train departure Display](https://github.com/chrisys/train-departure-display) - MOTIS API TypeScriptクライアント。

### SDK <a id="sdks"></a>
- [motis-client](https://www.npmjs.com/package/@motis-project/motis-client) - MOTIS API TypeScriptクライアント
- [motis-java-client](https://github.com/bileto/motis-java-client) - MOTIS API Java クライアント
- [motis-fptf-client](https://www.npmjs.com/package/@motis-project/motis-fptf-client) - [Friendly Public Transport Format (FPTF)](https://github.com/public-transport/friendly-public-transport-format)のクライアントとしての [MOTIS](https://github.com/motis-project/motis)。 [hafas-client](https://github.com/public-transport/hafas-client/)および／または [db-vendo-client](https://github.com/public-transport/db-vendo-client/)のドロップイン置き換え。
- [TripKit](https://github.com/alexander-albers/tripkit) - TripKit は、公共交通機関提供者からデータを取得するための Swift ライブラリです
- [KPublicTransport](https://invent.kde.org/libraries/kpublictransport) - リアルタイムの公共交通データにアクセスし、公共交通の移動経路を検索するための C++ ライブラリ
- [SkedGo's TripKit SDKs](https://developer.tripgo.com) - Android、iOS、React向けのオープンソースSDK。 [SkedGo](https://skedgo.com)のTripGo APIにアクセスするためのUIコンポーネントを含む。

### 可視化 <a id="visualizations"></a>
#### GTFSベースの可視化 <a id="gtfs-based-visualizations"></a>

- [All Transit](https://all-transit.com) - Mapbox GL JS、Deck.glおよびTransitlandを用いた、米国都市向けのGTFSルートおよびスケジュールアニメーション。GitHubリポジトリ [here](https://github.com/kylebarron/all-transit)。
- [BusGraphs Access Analyzer](https://gitlab.com/publictransitanalytics-pub/readme) - 実際のおよび仮想の固定ルート公共交通網が提供するアクセスを測定し、さまざまな方法で可視化・分解するウェブアプリケーション
- [fastest-bus-analysis-in-the-west](https://github.com/vta/fastest-bus-analysis-in-the-west) - PythonのPandasスクリプトが、乗客数（APC）、Swiftly速度および停留時間データ、バス停インベントリ、GTFS、および地理形状を組み合わせ、各停、各ルート、時間グループ化可能なデータセットを作成し、これを [Tableau](https://public.tableau.com/profile/vivek7797#!/vizhome/stopsandspeedanalyses/Story1)で可視化することで、VTAプランナーがバスおよび鉄道ネットワークのスピードアップ方法（例：停車の統合、専用道路の設置）で改善できる場所を特定できる。
- [GTFS City](https://github.com/ttezer/gtfs-city) - オープンソースのGTFS可視化および分析ツール。移動シミュレーション、等時線分析、ヒートマップ、停車場の接続性、ルート計画を含む
- [gtfspy-webviz](https://github.com/CxAalto/gtfspy-webviz) - GTFSデータのアニメーションおよび可視化を行うウェブアプリ。 [gtfspy](https://github.com/CxAalto/gtfspy)を使用。
- [gtfs-to-geojson](https://www.transit.chat/gtfs-to-geojson) - GTFSからGeoJSONへのシンプルなオンラインコンバーター（フィード一覧付き）
- [gtfs-visualizations](https://github.com/cmichi/gtfs-visualizations) - オープンソースのNodeJSアプリケーションでGTFSデータセットのルートを可視化
- [Local Transit](https://www.localtransit.app) - QGISを使用して作成された公共交通の頻度を可視化
- [Mapnificent](https://www.mapnificent.net/) - 一定時間以内に到達可能なエリアを表示。オープンソース [on GitHub](https://github.com/mapnificent/mapnificent)、ライブサイト https://www.mapnificent.net/.
- [MIT COAXS](http://mittransportanalyst.github.io/) - アクセシビリティに基づくステークホルダー参加による交通廊下の協創計画（ [OpenTripPlanner Analyst](http://www.opentripplanner.org/analyst/)を用いたルートシナリオの表示）。
- [MOTIS](https://motis-project.org/) - インターモーダル移動情報システム、グローバルサーバーを [Transitous.org community](https://transitous.org)が運営。
- [MTA Frequency](http://www.tyleragreen.com/maps/new_york/) - ニューヨーク市における地下鉄およびバスの運行頻度を [Transitland](https://transit.land/)で構築した可視化。
- [Pantograph](https://pantographapp.com) - リアルタイムで公共交通システムを探索する方法
- [SEPTA Rail OTP Report](https://apps.phor.net/septa/) - GTFSを使用したオンラインオンタイムパフォーマンスレポートおよび詳細検索ツール
- [Simple Transit Map](https://github.com/MobilityData/awesome-transit/blob/7b31683f8a45e960ed86b219d4db7ca8dd9c10b8/[https:/transit.chat/simple-transit-map](https:/github.com/ioTransit/simple-transit-map)) - オンラインでウェブマップをホストし、更新する方法の例
- [Simple Transit Site](https://transit.chat/simple-transit-site) - gtfs [on Github](https://github.com/ioTransit/simple-transit-site)から完全に構築された交通ウェブサイトのオンライン例。
- [TNExT](https://github.com/ODOT-PTS/TNExT) - オレゴン州における地域および州全体の公共交通ネットワークの可視化、分析、報告を目的としたウェブベースソフトウェアツールであるTransit Network Explorer Tool（TNExT）
- [Toronto Transit Explorer](https://github.com/sidewalklabs/totx) - トロント市における公共交通、自転車、徒歩のアクセシビリティを可視化するJavaアプリ。 [R5](https://github.com/conveyal/r5)の改良版を用いてルート計算を行う。
- [Transit Vis](https://github.com/zackAemmer/transit_vis) - キングカウンティ・メトロGTFS-RTフィード（OneBusAway API）から導出されたパフォーマンスメトリクスを可視化するツール。 [here](https://www.transitvis.com/)で閲覧可能。 [this paper](https://link.springer.com/article/10.1007/s12469-022-00291-7)で使用。
- [TransitFlow](https://github.com/transitland/transitland-processing-animation) Animate GTFS data around the world using Processing and Transitland.
- [TransitLens](https://transit-lens.com/gtfs-map-viewer/) - インタラクティブなマップ上でルート、停車場、形状を可視化するブラウザベースのGTFS閲覧ツール。サービスカレンダー分析、構造化データテーブル、GeoJSON/KMLオーバーレイサポートを含む。設定不要です
- [TRAVIC Transit Visualization Client](http://tracker.geops.ch/) - 静的GTFSデータ（および場合によってはリアルタイムデータ）に基づいて移動を可視化。260都市以上をサポート。geOps組織のGitHubアカウントは [here](https://github.com/geops)。
- [Traze](https://traze.app/) by [Veridict](https://www.veridict.com) - GTFSベースの可視化に関する公共交通データ、アプリ、ツール、または資料です。
- [Visualizing MBTA Data](http://mbtaviz.github.io/) - ボストン地下鉄の利用状況を示すインタラクティブなグラフ
- [GTFS Viz 🚉](https://github.com/gabrielAHN/gtfs-viz) - クライアントサイドにバックエンドを設けず、ブラウザ上でスケールしたGTFSデータを可視化するウェブアプリ。 [duckdb-wasm 🦆](https://duckdb.org/docs/api/wasm/overview.html)を使用。
- [QGIS - GTFS plugins](https://plugins.qgis.org/search/?q=gtfs) - QGISにおけるGTFS向けプラグイン一覧

#### 交通地図の作成 <a id="transit-map-creation"></a>
- [Brand New Subway](https://jpwright.github.io/subway/) - プレイヤーがNYC地下鉄システムを自由に変更できるインタラクティブな交通計画ゲーム
- [BENO Metro Mapm Creator](https://beno.uk/metromapcreator/#) - A very old fashioned but classic transit map creator.
- [Tennessine Metro Designer](https://tennessine.co.uk/metro/) - A modern and aesthetically pleasing transit map designer.
- [loom](https://github.com/ad-freiburg/loom) - 地理的に正確または概略的な公共交通図を自動生成するソフトウェアセット
- [Metro Map Maker](https://metromapmaker.com/)   - An open source and simple metro map maker software.
- [MetroDreamin'](https://metrodreamin.com/explore) - ユーザーがインタラクティブな公共交通図を作成・保存・いいね・共有できる現代的なオープンソースソフトウェド
- [Rail Map Generators](https://wongchito.github.io/RailMapGenerator) - さまざまな都市の公共交通システムのスタイルに合わせた鉄道図と情報パネルを生成するツール
- [MetroSets](https://metrosets.ac.tuwien.ac.at/) - セットシステムをメトロ地図の比喩を使って可視化するための柔軟なウェブツール。この [paper](https://www.computer.org/csdl/journal/tg/2021/02/09224192/1nV7Me0F3Lq)
##### 交通可視化用の汎用描画アプリ <a id="general-drawing-applications-for-making-transit-visualizations"></a>

- [Adobe illustrator](https://www.adobe.com/ca/products/illustrator.html) - 業界をリードするベクターグラフィックスソフトウェア（メンバーシッププランが必要）
- [Inkscape](https://inkscape.org/) - フリーのデザインツールで、Adobe Illustratorに類似したもの。
##### 交通可視化用の汎用GISアプリ <a id="general-gis-applications-for-making-transit-visualizations"></a>
 - [Felt](https://felt.com/) - 美しく現代的なGISソフトウェア。
 - [Google Mymaps](https://www.google.ca/maps/about/mymaps/) - Google My Mapsでカスタムマップを作成し、共有できる。
 - [Google Earth](https://www.google.com/earth/about/) - 世界で最も詳細な衛星アプリケーションの一つを使って、カスタムマップを作成し、共有できる。

#### 交通地図の集約 <a id="transit-map-aggregation"></a>
 - [UrbanRail.Net](http://www.urbanrail.net/) - 世界中の都市鉄道（メトロ、トラム、通勤鉄道）を対象とした、詳細かつ最新の参照マップ。
 - [OpenRailwayMap](https://www.openrailwaymap.org/) - オープンストリートマップデータを使用した世界中の鉄道マップ。
 - [AllRailMap](https://www.allrailmap.com/) - また、オープンストリートマップデータを使用した世界中の鉄道マップ。
 - [European Railway Atlas](https://europeanrailwayatlas.com/) -  A reference book of European railway maps that is available for purchase.
 - [Rail Transit Maps](http://www-personal.umich.edu/~yopopov/rrt/railroadmaps/) - ヨーロッパ（特にロシア）をカバーする鉄道マップのコレクション。
 - [Tramscale](https://alexander.co.tz/tramscale/) - 世界のトラムシステムのスケールを示すマップを紹介するウェブサイト。
 - [Timelines](https://alexander.co.tz/timelines/) - 世界中の快速輸送プロジェクトのタイムラインを比較できる。
 - [Metrolinemap](https://www.metrolinemap.com/) - 世界のメトロシステムのインタラクティブマップ。
 - [Metrocyclopaedia](https://blog.csaladen.es/metro/ ) - 世界のメトロシステムの3Dマップ（Metrolinemapのデータを使用）。
 - [RailFansCanada](https://map.railfans.ca/) - カナダのさまざまな都市鉄道システムの現在と将来を詳細に示すインタラクティブシステムマップ。
 - [North American Transit](https://www.google.com/maps/d/u/0/viewer?mid=1GAXiiEp8a62LvZNDueYN76NPTCoUxvdx&ll=43.71257881237152%2C-79.385523993394&z=11) - Map of all Passenger Rail in North America including (intercity rail, metros, trams and tourist lines)
 - [Intercity Rail map](https://asm.transitdocs.com/) - AmtrakおよびViaの列車のリアルタイム位置と運行スケジュール情報を示すマップ。
 - [Indian Railways Map](https://indiarailinfo.com/atlas) - インドの主要鉄道網のインタラクティブマップ。
 - [National Rail Network Map](https://www.arcgis.com/apps/mapviewer/index.html?webmap=96ec03e4fc8546bd8a864e39a2c3fc41) - This map shows the extent and ownership of rail lines in the United States, including passenger and freight lines.
 - [Ferrocarta](https://ferrocarta.net/) - ブラジル、カナダ、フランスのすべての乗客向け鉄道網をカバーするマップシリーズ。
 - [Train Lookout](https://trainlookout.com/) - 列車の旅を簡単にログ、マップ、共有できるツール。
 - [Australian Rail Maps](http://www.railmaps.com.au/) -   Detailed Australian railway maps from the national, state and city levels.
 - [Steam Engine "IS"](https://parovoz.com/maps/supermap/) - ソ連の鉄道マップ。
 - [Carto.Metro](https://cartometro.com/) - 世界の主要都市のメトロおよびトラムネットワークの詳細マップ（特にフランスの都市）。
 - [Railway Stations](https://map.railway-stations.org/) - 世界中の鉄道駅の写真。
 - [INAT](https://www.inat.fr/maps/) - 世界中のメトロシステムを美しく表現した静的地図
 - [Transit Maps](https://transitmap.net/) - 世界中の輸送地図のデザインについての批判とレビュー
 - [Transit Explorer](https://www.thetransportpolitic.com/transitexplorer/) - 世界中の固定ガイドウェイ輸送を含む地図
- [Britsh Railways](https://www.merrittcartographic.co.uk/british_railways.html) An interactive map of Great Britain's rail network.
- [TransitLand Map](https://www.transit.land/map)  - Worldwide map of transit services (which have a GTFS Feed).
 - [DB InfraGO](https://geovdbn.deutschebahn.com/pgv/public/map/isr.xhtml)  - Interactive Map of German Rail infrastructure.
 - [SNCF Carte interactive](https://www.sncf-reseau.com/fr/carte/carte-interactive-reseau-ferre-francais-0) - フランスの鉄道インフラのインタラクティブ地図
 - [Project Mapping](https://www.projectmapping.co.uk/index.html) - イギリスおよび世界中の鉄道ネットワークの概図
 - [China Railway Map](http://cnrail.geogv.org/enus/about) - 中国の乗客向け鉄道輸送システムのオンラインインタラクティブ地図（駅および鉄道情報の表示）
 - [Canadian Rail Atlas](https://rac.jmaponline.net/canadianrailatlas/) - カナダのほぼ43,000キロメートルの鉄道網をユーザーフレンドリーに設計したインタラクティブ地図
 - [The Rail Map](https://www.therailmap.com/) - OpenStreetMapのデータを用いた北米の電車線を示すインタラクティブ地図
 - [JR pass](https://www.jrpass.com/map#) - 日本のメインライン鉄道のインタラクティブ地図
- [Openptmap](https://wiki.openstreetmap.org/wiki/Openptmap) - openptmapは公共輸送の線路を表示
- [OSMTransportViewer](https://gileri.github.io/OSMTransportViewer/) - OSMのOverpass APIを使ってネットワークデータを取得
- [PTMap](https://ptmap.plepe.at/#lat=48.20200&lon=16.33800&zoom=15) - PTMapはOpenStreetMapに登録された公共輸送ルートを表示
- [Unroll](https://jungle-bus.github.io/unroll/) - 公共輸送ルート
- [Jungle Bus Map](https://jungle-bus.github.io/map/#15/48.8584/2.34846) - OpenStreetMap内の輸送停車場の詳細を閲覧できるウェブマップ
- [AccraMobile3](https://wiki.openstreetmap.org/wiki/AccraMobile3) - Accra Mobile 3は2017年7月に発表されたプロジェクトで、ガナのアカラのトロトロ線をすべて地図化し、アカラの輸送部門（DoT）に提供したプロジェクト...
- [OpenStationMap](https://openstationmap.org/#17/52.51022/13.43477/8.8/55) - 公共輸送駅の内部空間（包括して鉄道とプラットフォーム）を表示
- [gbfs R package](https://github.com/simonpcouch/gbfs) - RでGBFSフィードとインターフェースを行う機能があり、指定された都市や自転車シェアプログラムのデータを保存・蓄積できる tidy .rds データセットを提供
- [TrainRouter](https://trainrouter.com/) - 世界中の744の著名な電車ルート（高速、風景、夜間電車）のインタラクティブ世界地図。各ルートには事実と写真が含まれており、データはオープン（CC BY 4.0）

### 交通事業者向けツール <a id="agency-tools"></a>

交通事業者向けのツールです。GTFS固有のツールについては[GTFSデータ収集・保守ツール](#gtfs-data-collection-and-maintenance-tools)も参照してください。

- [Remix by Via](https://ridewithvia.com/solutions/remix) - 輸送機関が簡単にルートを計画できるウェブアプリ
- [Next Train API](https://github.com/data-creative/next-train-api) - GTFSフィードをJSON APIとして提供。輸送機関や開発者もオープンソースコードを自身のHerokuサーバーにデプロイできる
- [AC Transit RestroomFinder](https://github.com/actransitorg/ACTransit.RestroomFinder) - GPSと画面表示地図を用いて、バス運転手および現場スタッフに最も近い承認されたトイレを特定する
- [AC Transit Training and Education Department (TED) application](https://github.com/actransitorg/ACTransit.Training) - このアプリケーションは、運転および保守従業員の訓練業務を支援しており、主にバス運転手および重機バス整備士（准則および実務者）の職位に焦点を当てているが、システムは新たなコースおよび准則プログラムにも対応している
- [AC Transit Customer Relations application (CusRel)](https://github.com/actransitorg/ACTransit.CusRel) - 顧客の問題およびフィードバックに対応する公共交通のチケットシステム。部門間ルート設定と通知、部門／人物の割り当て、シンプルなワークフロー、チケット検索、事前設定されたレポート、毎日のリマインダーなど
- [PTV Lines](https://www.ptvgroup.com/en/products/ptv-lines) - クラウドベースの公共交通ソフトウェア。路線計画および公共交通サービスの最適化に使用
- [TransAM](https://github.com/MobilityData/awesome-transit/blob/7b31683f8a45e960ed86b219d4db7ca8dd9c10b8/[http:/camsys.software/products/transam](https:/github.com/camsys/transam_core)) - 公共交通機関向けのオープンソース資産管理プラットフォーム
- [RidePilot](https://github.com/camsys/ridepilot) - 小規模人間サービス交通機関のニーズに応じたオープンソースコンピュータ支援スケジュールおよび配車（CASD）ソフトウェアシステム
- [TNExT](https://github.com/ODOT-PTS/TNExT) - オレゴン州における地域および州全体の公共交通ネットワークの可視化、分析、報告を目的としたウェブベースソフトウェアツールであるTransit Network Explorer Tool（TNExT）
- Route Trends ([webapp](https://metrotransitmn.shinyapps.io/route-trends/), [GitHub](https://github.com/metrotransit/route-trends)) - 交通事業者向けツールに関する公共交通データ、アプリ、ツール、または資料です。 関連参照: <https://otexts.com/fpp2/stl.html>、<https://www.metrotransit.org/>。
- [TBEST](https://tbest.org/) - TBEST（公共交通乗降予測およびシミュレーションツール）は、社会経済、土地利用、交通ネットワークデータを統合し、シナリオベースの乗車者数の予測および分析を行う多面的なGISベースのモデリング、計画、分析ツールを開発する取り組み。フロリダ州交通局が支援。無料で利用可能だがオープンソースではない
- [RideSheet](https://docs.ridesheet.org) – A simple, spreadsheet-based tool for small demand-responsive transportation (DRT) services.

## 資料 <a id="resources"></a>

### コミュニティ <a id="community"></a>

質問やコミュニティ資料を探せる場所です。

- [MobilityData Slack chat](https://share.mobilitydata.org/slack) - #gtfs、#gtfs-validators、#mobility-database、#gtfs-realtime、#gtfs_best-practices、#gtfs-pathways、#gtfs-fares、#gtfs-flex、#trb-transit-data を含むチャットルーム。
- [Transit Developers mailing list](https://groups.google.com/forum/#!forum/transit-developers)
- [OpenTripPlanner](https://github.com/opentripplanner/OpenTripPlanner) Community
    - [OpenTripPlanner User mailing list](https://groups.google.com/forum/#!forum/opentripplanner-users)
    - [OpenTripPlanner Developers mailing list](https://groups.google.com/forum/#!forum/opentripplanner-dev)
- OneBusAway
    - [OneBusAway Developers mailing list](http://groups.google.com/group/onebusaway-developers)
    - [OneBusAway API mailing list](http://groups.google.com/group/onebusaway-api)

#### 地域グループ <a id="local-and-regional-groups"></a>
- [Transit Techies NYC](https://transittechies.nyc/) - ニューヨーク市ベースのオンライン・オフラインハイブリッドミートアップ。この [Speaker list](https://transittechies.nyc/past) にはこのリポジトリの多くの貢献者たちが含まれている。
- [German Open Transport Meetup](https://github.com/transportkollektiv/meetup/wiki) - ドイツ語話者によるオープントランスポートコミュニティのオンラインミートアップ。 [Biweekly](https://hackmd.okfn.de/opentransportmeetup#)
- [German Open Transport Data Quality Meetup](https://github.com/transportkollektiv/meetup/wiki) - ドイツ語話者によるオープン交通コミュニティの半年に1回開催されるオンラインミーティング。データ品質に焦点を当てている
- [Open Train Community](https://github.com/hasadna/OpenTrainCommunity) - イスラエル鉄道の列車遅延データに関するコミュニティによるデータ分析用Opentrainリポジトリ

### 研究と論評 <a id="research-and-commentary"></a>

オープン交通データに関するブログ記事と報告書です。

#### ブログ記事 <a id="blog-posts"></a>

- [When(ish) is my bus? Data and code](https://github.com/mjskay/when-ish-is-my-bus) - Whenishは私のバス？のデータとコード（R）は、過去3日分の車両位置データおよび調査結果を含む
- ["Legacy AVL system? It's okay, join the club." by Kurt Raschke](https://kurtraschke.com/2015/01/legacy-avl-export) - 古いAVLシステムデータをGTFS-realtimeフォーマットに変換するための選択肢についての議論
- ["GTFS Best Practices now available!" by Sean Barbeau](https://medium.com/@sjbarbeau/gtfs-best-practices-now-available-88ac67194233) - オープンデータフォーマットであるGTFSのいくつかの課題と、2017年初頭に発表されたGTFSベストプラクティスについての議論。データ品質の改善を目的としている
- ["What's new in GTFS-realtime v2.0" by Sean Barbeau](https://medium.com/@sjbarbeau/whats-new-in-gtfs-realtime-v2-0-cd45e6a861e9) - GTFS-realtime v1.0の短所とv2.0の改善点についての議論
- ["AVL, CAD, and Real-Time Passenger Info for Beginners" by Tony Laidig](http://transitdata.net/avl-cad-and-real-time-passenger-info-for-beginners/) - 車両追跡に使用される技術の概要を紹介
- ["Visualizing Better Transportation: Data & Tools" by Steve Pepple](https://medium.com/@stevepepple/visualizing-better-transportation-data-tools-e48b8317a21c) - サンフランシスコ湾地域および北米他都市向けの交通関連データとツールのコレクション。元は2018年のARUPで開催されたTransit Weekイベントで収集・議論されたもの
- ["How to use GTFS data to track transit vehicles in realtime" by Tom Camp](https://www.ably.io/blog/gtfs-data-track-transit-vehicles-realtime) - GTFSおよびGTFS Realtimeを用いて継続的なリアルタイム更新を提供する

#### 学術論文 <a id="academic-papers"></a>

- [Tang et al. - "Ridership effects of real-time bus information system: A case study in the City of Chicago"](https://www.sciencedirect.com/science/article/pii/S0968090X12000022) - シカゴ、ILでの実験では、テキストメッセージまたはメールでリアルタイム情報を得た乗客が、乗車者数にやや増加した
- [Kay et al. - "When(ish) is my bus? User-centered Visualizations of Uncertainty in Everyday, Mobile Predictive Systems"](https://www.mjskay.com/papers/chi_2016_uncertain_bus.pdf) - 論文は「輸送予測における不確実性をどう伝えるか」という問いに対して試みている。問題の説明、既存の解決策を述べ、この [better interface for letting users know when to arrive at the bus stop](https://github.com/mjskay/when-ish-is-my-bus/blob/master/quantile-dotplots.md#quantile-dotplots) を設計している。
- [Watkins et al. - "Where Is My Bus? Impact of mobile real-time information on the perceived and actual wait time of transit riders"](https://www.sciencedirect.com/science/article/pii/S0965856411001030) - セイタール、WAでの実験では、リアルタイム情報をモバイルアプリ経由で得た乗客が、バスの待機時間の短さを認識した
- [Brakewood et al. - “An experiment evaluating the impacts of real-time transit information on bus riders in Tampa, Florida”](https://www.sciencedirect.com/science/article/pii/S0965856414002146) - タマパ、FLでの制御実験では、モバイルアプリ経由でリアルタイム情報を得た乗客は、リアルタイム情報なしの乗客と比較して待機時間がほぼ2分短く感じた。リアルタイム情報を得た乗客は、不安や不満が減少し、運営機関への受け入れも改善された
- [Brakewood et al. - "The impact of real-time information on bus ridership in New York City"](https://www.sciencedirect.com/science/article/pii/S0968090X15000297) - ニューヨークでの実験結果では、リアルタイム情報が利用可能になった長距離路線での乗客数が増加した
- [Brakewood and Watkins - "A literature review of the passenger benefits of real-time transit information"](https://www.tandfonline.com/doi/full/10.1080/01441647.2018.1472147?scroll=top&needAccess=true) (2018) - 実時間輸送情報の利点を調べた多くの研究を概観した概要。
- [Gramacki et al. - "gtfs2vec - Learning GTFS Embeddings for comparing Public Transport Offer in Microregions"](https://github.com/MobilityData/awesome-transit/blob/7b31683f8a45e960ed86b219d4db7ca8dd9c10b8/2021) - UberのH3空間インデックスと機械学習を用いて、都市における「類似」な公共輸送サービス品質の領域を特定するメソッド。ソースコードは [on GitHub](https://github.com/pwr-inf/gtfs2vec) に公開されている。
- [Higgins et al. - "Calculating place-based transit accessibility: Methods, tools and algorithmic dependence" (2022)](https://doi.org/10.5198/jtlu.2022.2012) - 歩行および公共交通機関によるアクセスを計算するためのソフトウェアツールの比較（ArcGIS Pro、Emme、R5R、OpenTripPlannerを含む）
- [Aemmer et al. - "Measurement and classification of transit delays using GTFS-RT data"](https://link.springer.com/article/10.1007/s12469-022-00291-7) - 一般輸送情報規格（GTFS）のリアルタイム（GTFS-RT）コンポーネントから輸送性能メトリクスを抽出し、道路区間へ集計する方法を提示。この [Transit Vis](https://github.com/zackAemmer/transit_vis) と併用され、 [here](https://www.transitvis.com/) で表示可能。

#### 政府報告書 <a id="government-reports"></a>
- [APTA Policy Development and Research - Public Transportation Embracing Open Data](http://www.apta.com/resources/reportsandpublications/Documents/APTA-Embracing-Open-Data.pdf) - APTAがオープンな交通データの利点と課題について述べている（以下TCRP報告書の要約）
- [TCRP Synthesis 115 - Open Data: Challenges and Opportunities for Transit Agencies](http://onlinepubs.trb.org/Onlinepubs/tcrp/tcrp_syn_115.pdf) (2015) - 開放輸送データの利点と課題を総合的に分析した報告書。
- [TCRP Research Report 213: Data Sharing Guidance for Public Transit Agencies – Now and in the Future](http://www.trb.org/Main/Blurbs/180188.aspx) (2020) - 機関が自社データを共有する際の判断を支援する報告書。利点、コスト、リスクの評価方法を含む。
- [TCRP G-16 Development of Transactional Data Specifications for Demand-Responsive Transportation (In progress)](http://apps.trb.org/cmsfeed/TRBNetProjectDisplay.asp?ProjectID=4120) - 本研究の目的は、要望に応じた運搬サービスを提供する関係者に必要な取引データの技術仕様を策定することであり、完了予定日は2018年末である

#### コミュニティ管理リスト <a id="community-maintained-lists"></a>
- [Vendors Providing GTFS Creation/Maintenance services](https://docs.google.com/spreadsheets/u/1/d/1Gc9mu4BIYC8ORpv2IbbVnT3q8VQ3xkeY7Hz068vT_GQ/pubhtml) - 新しいベンダー [here](http://goo.gl/forms/YDbPSPmufS) を追加。
- [Entities Providing Transportation Software Development Consulting Services](https://docs.google.com/spreadsheets/u/1/d/1n44CNMCK1vt1nyrsdYz-KD_hYxUMNIm6Me69M6ROBIg/pubhtml) - 新しいエンティティ [here](http://goo.gl/forms/cc6kcVERuP) を追加。

#### 関連リスト <a id="related-lists"></a>
- [awesome-europe](https://github.com/GeiserX/awesome-europe#transport-and-mobility) - EU／EEA向けオープンソースプロジェクトのキュレーションリスト。輸送と移動性のセクションがこのリストと重複している（HAFAS、NeTEx、ETCS、SIRI、Transitous、OpenTripPlanner EUの展開）。

## ライセンス <a id="license"></a>

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、[MobilityData](https://mobilitydata.org/)、[Center for Urban Transportation Research](https://www.cutr.usf.edu/)（[University of South Florida](http://www.usf.edu/)）、[Luqmaan Dawoodjee](https://github.com/luqmaan)は、この作品に関する著作権および関連・隣接する権利を放棄しています。

## このリストについて <a id="about"></a>
これは情報提供のみを目的とするコミュニティ資料であり、プロジェクトや製品の掲載は推奨を意味しません。

このリストはオープンソースコミュニティの貢献者によって構築・保守され、[MobilityData](https://mobilitydata.org/)がプロジェクトを管理しています。 

#Awesome-transitは[Luqmaan Dawoodjee](https://github.com/luqmaan)が作成し、MobilityDataへ移管されるまで数年間、[Center for Urban Transportation Research](https://www.cutr.usf.edu/)（[University of South Florida](http://www.usf.edu/)）が管理していました。
