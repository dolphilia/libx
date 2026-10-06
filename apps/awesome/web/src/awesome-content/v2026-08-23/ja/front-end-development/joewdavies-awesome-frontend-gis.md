---
title: "Awesome Frontend GIS"
description: "ブラウザーで地理データを管理・分析・編集・可視化するための地理情報システム（GIS）の資料集です。JavaScriptの地図描画・処理ライブラリ、オープンデータとAPI、ノートブック、Web地図・アプリ、配色ツール、アイコン、学習資料を収録しています。"
licenseSource: "github-joewdavies-awesome-frontend-gis-readme-md"
---

# Awesome Frontend GIS

ブラウザーで地理データを管理・分析・編集・可視化するための地理情報システム（GIS）の資料集です。JavaScriptの地図描画・処理ライブラリ、オープンデータとAPI、ノートブック、Web地図・アプリ、配色ツール、アイコン、学習資料を収録しています。

## <a id="-javascriptライブラリ"></a>JavaScriptライブラリ

### 地図描画
Web地図を作成するためのライブラリです。

- [antvis L7](https://github.com/antvis/L7) - WebGLを用いた大規模な地理空間データ可視化。
- [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/) - ブラウザーでインタラクティブな2D・3D Webアプリを構築する、モダンなJavaScript APIとWebコンポーネントライブラリ。
- [ArcGIS REST JS](https://github.com/Esri/arcgis-rest-js) - Node.jsとモダンなブラウザーで動作する、ArcGIS REST API向けのコンパクトでモジュール式のJavaScriptラッパー。
- [Bertin.js](https://github.com/neocarto/bertin) - 地理空間データを可視化し、Web向けの主題図を作成するJavaScriptライブラリ。
- [Cesium.js](https://github.com/CesiumGS/cesium) - 原リストで世界水準と紹介される、地理空間データの3D地図を作成するオープンソースJavaScriptライブラリ。
- [d3-geo](https://github.com/d3/d3-geo) - D3.jsを基盤として地図を作成するライブラリ。
- [d3-geo-projection](https://github.com/d3/d3-geo-projection) - 地図投影法の拡張。
- [d3-geo-voronoi](https://github.com/Fil/d3-geo-voronoi) - 球面上のボロノイ図とドロネー三角形分割。
- [datamaps](https://github.com/markmarkoh/datamaps) - 1ファイルでカスタマイズ可能な地図可視化。
- [Deck.GL](https://github.com/visgl/deck.gl) - WebGL2を用いた地理空間可視化レイヤー。
- [Eurostat-map](https://github.com/eurostat/eurostat-map.js) - データ駆動型の地図。
- [globe.gl](https://github.com/vasturiano/globe.gl) - Three.js/WebGLで3D描画を行うthree-globeプラグインの便利なラッパー。
- [Google Maps](https://developers.google.com/maps/documentation/javascript) - Google Maps向けJavaScript API。
- [gridviz](https://github.com/eurostat/gridviz) - グリッドデータを可視化するパッケージ。
- [HERE maps API](https://developer.here.com/develop/javascript-api) - 豊富な機能とカスタマイズ性を持つHEREマップでWebアプリを構築。
- [iTowns](https://github.com/iTowns/itowns) - 3D地理空間データを可視化する、Three.jsを基盤にJavaScript/WebGLで書かれたフレームワーク。
- [Leaflet](https://github.com/Leaflet/Leaflet) - 原リストで主要ライブラリと紹介される、モバイルで使いやすいインタラクティブな地図向けのオープンソースJavaScriptライブラリ。
- [Map Forecast API](https://github.com/windycom/API) - 風の地図を表示できる、Leaflet 1.4.xを基盤にした使いやすいライブラリ。
- [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js) - WebGLでベクタータイルからインタラクティブな地図を描画するJavaScriptライブラリ。
- [maplibre](https://github.com/maplibre/maplibre-gl-js) - mapbox-gl-jsが2020年12月に非OSSライセンスへ移行する前に、オープンソースのフォークとして派生。
- [MapTalks.js](https://github.com/maptalks/maptalks.js) - 2D・3Dを統合した地図向けのオープンソースJavaScriptライブラリ。
- [OpenLayers](https://github.com/openlayers/openlayers) - Web上でインタラクティブな地図を作成する、高性能で機能豊富なライブラリ。
- [react-simple-maps](https://github.com/zcreativelabs/react-simple-maps) - d3-geoを基盤とする、React向けSVG地図コンポーネントライブラリ。
- [Tangram](https://github.com/tangrams/tangram) - 創造的な地図表現のためのWebGL地図描画エンジン。
- [TerriaJS](https://github.com/TerriaJS/terriajs) - 機能豊富なWebベースの地理空間データ閲覧ツールを構築するライブラリ。
- [Wrld.js](https://github.com/wrld3d/wrld.js/) - Leafletを基盤とした、アニメーションする3D都市地図。

### データ処理
地理空間データの分析・処理を支援するライブラリです。
- [Arc.js](https://github.com/springmeyer/arc.js) - GeoJSONまたはWKT形式の線として、大円経路を計算。
- [awesome-GeoJSON](https://github.com/tmcw/awesome-geojson) - GeoJSONツールのカタログ。
- [Euclid.ts](https://github.com/mathigon/euclid.js) - 2Dユークリッド幾何学のクラス、ユーティリティ、描画ツール。
- [flatbush](https://github.com/mourner/flatbush) - JavaScriptで2Dの点と矩形を扱う、非常に高速な静的空間インデックス。
- [FlatGeoBuf](https://github.com/flatgeobuf/flatgeobuf) - FlatBuffersを基盤とした、地理データ向けの高性能なバイナリーエンコーディング。
- [flatten-js](https://github.com/alexbol99/flatten-js) - 図形の操作、交点の検出、包含関係の確認、距離計算、変換など。
- [Galton](https://github.com/urbica/galton) - 軽量なNode.jsの等時線サーバー。
- [gdal3.js](https://github.com/bugra9/gdal3.js) - ラスターとベクターの地理空間データをさまざまな形式へ変換。
- [geoblaze](https://github.com/GeoTIFF/geoblaze) - 非常に高速なJavaScriptラスター処理エンジン。
- [geobuf](https://github.com/mapbox/geobuf) - 地理データのコンパクトなバイナリーエンコーディング。
- [GeoTiff.js](https://github.com/geotiffjs/geotiff.js) - 可視化や分析のためにTIFFファイルを解析。
- [geolib](https://github.com/manuelbieh/geolib) - 基本的な地理空間操作を提供するライブラリ。
- [geopackage-js](https://github.com/ngageoint/geopackage-js) - GeoPackageファイルを読み込むJavaScriptライブラリ。
- [geoparquet](https://github.com/opengeospatial/geoparquet) - Apache Parquetで地理空間データをエンコード。
- [geotoolbox](https://github.com/neocarto/geotoolbox) - GeoJSONのプロパティとともに利用できる、複数のGIS操作。
- [geojson-merge](https://github.com/mapbox/geojson-merge) - 複数のGeoJSONファイルを1つのFeatureCollectionへ統合。
- [geojson-vt](https://github.com/mapbox/geojson-vt) - GeoJSONデータを分割する、効率の高いJavaScriptライブラリ。
- [Geometric.js](https://github.com/HarryStevens/geometric) - 幾何計算を行うJavaScriptライブラリ。
- [JSTS](https://github.com/bjornharrtell/jsts) - JavaScript Topology Suite。
- [koop](https://github.com/koopjs/koop) - 互換性のない空間APIを接続するJavaScriptツールキット。
- [math.gl](https://github.com/uber-web/math.gl) - 地理空間と3Dの用途を重視したJavaScript数学ライブラリ。
- [Proj4js](https://github.com/proj4js/proj4js) - ある座標系から別の座標系へ座標を変換。
- [rbush](https://github.com/mourner/rbush) - 2D空間インデックス向けの高性能JavaScriptライブラリ。
- [spl.js](https://github.com/jvail/spl.js) - JavaScriptでSpatiaLiteの機能を利用可能に。
- [statsbreaks](https://github.com/riatelab/statsbreaks) - 主題図の作成に向けて、量的データセットを階級に分類。
- [Turf.js](https://github.com/Turfjs/turf) - 空間分析向けJavaScriptライブラリ。
- [topoJSON](https://github.com/topojson/topojson) - D3の地図で使うため、GeoJSONをTopoJSONへ変換。
- [Wicket](https://github.com/arthur-e/Wicket) - Well-Known Text（WKT）と各種フレームワークの幾何データを相互変換する、小規模なライブラリ。

### LiDAR
ブラウザーで点群を可視化するツールです。

- [Plasio](https://github.com/verma/plasio) - ドラッグ＆ドロップに対応した、ブラウザー内のLAS/LAZ点群ビューアー。
- [Potree](https://github.com/potree/potree) - 大規模データセット向けWebGL点群ビューアー。
- [Potree & Cesium.js](https://potree.org/potree/examples/cesium_retz.html) - オーストリアのReztを表示するLiDARビューアー。
- [Three.js](https://threejs.org/examples/#webgl_loader_pcd) - 点群データローダー。

### リモートセンシング

フロントエンドでの地球観測・リモートセンシングに関する資料です。

- [EOSDIS Worldview](https://github.com/nasa-gibs/worldview) - 世界各地の衛星画像をフル解像度で閲覧するインタラクティブなインターフェース。
- [Google Earth Engine](https://developers.google.com/earth-engine/tutorials/tutorial_api_01) - 地理空間処理サービス。
- [Sentinel Hub custom scripts](https://github.com/sentinel-hub/custom-scripts) - Sentinel Hubで利用するカスタムスクリプトのリポジトリ。
- [sentinelhub-js](https://github.com/sentinel-hub/sentinelhub-js/) - Sentinel Hubのサービスで衛星画像をダウンロードし、処理。
- [Spectral](https://github.com/awesome-spectral-indices/awesome-spectral-indices) - Google Earth EngineのJavaScript API向けのAwesome Spectral Indices。

## <a id="-データソース"></a>データソース
地理空間のオープンデータソースです。

### ダウンロード
ダウンロード可能なデータです。

- [ArcGIS Hub](https://hub.arcgis.com/) - 原リストでは380,000件超と紹介されているオープンデータセット。
- [Copernicus global DEM](https://ec.europa.eu/eurostat/web/gisco/geodata/digital-elevation-model/copernicus#Elevation) - 世界全体の標高タイル。
- [Copernicus open access hub](https://www.copernicus.eu/en/access-data/conventional-data-access-hubs) - Copernicusの衛星画像をダウンロード。
- [ETOPO1](https://www.ngdc.noaa.gov/mgg) - 地球表面の、角度1分の解像度を持つ全球地形モデル。
- [European population grids - GISCO](https://ec.europa.eu/eurostat/web/gisco/geodata/grids) - グリッドセルごとの人口データ。
- [European Postcodes Point Data](https://ec.europa.eu/eurostat/web/gisco/geodata/administrative-units/postal-codes) - ヨーロッパ全域の郵便番号の位置情報。
- [Geoboundaries](https://www.geoboundaries.org/) - 原リストで世界最大と紹介される、オープンで無料の政治境界データベース。
- [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org/) - 生物多様性データへのオープンアクセス。
- [Global Climate Monitor](https://kerdoc.cica.es/) - 世界全体のオープンな気候データ。
- [Global power plant database](https://datasets.wri.org/dataset/globalpowerplantdatabase) - 発電所のオープンソースデータベース。
- [Galileo](https://galileo.gisdata.io/) - 地理空間データの発見・管理プラットフォーム。
- [Healthcare Services in Europe](https://ec.europa.eu/eurostat/web/gisco/geodata/basic-services#Healthcare) - ヨーロッパの医療サービスの所在地。
- [HydroSHEDS](https://www.hydrosheds.org/) - 世界規模の用途に対応する、一貫した水系データ。
- [NASA Earth Data](https://search.earthdata.nasa.gov/search) - Earthdata Searchを使い、ブラウザーでNASAの地球観測データを検索・発見・可視化し、絞り込んでアクセス。
- [Natural Earth](https://www.naturalearthdata.com/) - 無料のベクター・ラスター地図データ。
- [OpenAerialMap](https://openaerialmap.org/) - ライセンス付き画像にアクセスするオープンサービス。
- [OpenMapTiles](https://openmaptiles.org/) - 無料のOpenStreetMapベクタータイル。
- [OpenStreetMap](https://www.geofabrik.de/data/download.html) - 無料で世界全体をカバーする地理データセット。
- [Open Topography](https://opentopography.org/) - 高解像度の地形データとツール。
- [Ookla internet speed data](https://github.com/teamookla/ookla-open-data) - 世界全体のネットワーク性能の指標。
- [Sentinel Hub custom scripts](https://github.com/sentinel-hub/custom-scripts) - Sentinel Hub向けカスタムスクリプトのリポジトリ。
- [USGS Earth Explorer](https://earthexplorer.usgs.gov/) - 衛星画像などの検索と注文。
- [World Atlas TopoJSON](https://github.com/topojson/world-atlas) - Natural EarthのベクターデータをTopoJSON形式で提供。
- [World Bank](https://www.unccd.int/resources/knowledge-sharing-system/world-banks-open-data) - 世界の開発データへの無料アクセス。
- [WorldPop](https://www.worldpop.org/) - オープンアクセスの空間人口統計データセット。

### ウェブAPI
地理空間データを動的に取得するRESTful APIです。

- [Address API](https://gisco-services.ec.europa.eu/addressapi/docs/) - ジオコーディングと逆ジオコーディングに対応した、ヨーロッパ全域の住所データ。
- [API Geo](https://geo.api.gouv.fr/) - フランスの公式地理データAPI。
- [ArcGIS location services](https://developers.arcgis.com/rest/location-based-services/) - ベースマップ、ジオコーディング、場所情報、経路探索、GeoEnrichment。
- [bng2latlong](https://www.getthedata.com/bng2latlong) - 英国のBritish National Grid座標を緯度・経度へ変換。
- [breezometer](https://docs.breezometer.com/api-documentation/introduction/) - 大気質、天気、花粉、環境データ。
- [Country State City API](https://countrystatecity.in/) - 都市・州・国のデータベース。
- [Geoapify](https://apidocs.geoapify.com/) - 地図、ジオコーディング、経路探索などの地理空間サービス。
- [geonames](http://www.geonames.org/export/web-services.html) - 地名検索と逆ジオコーディングに対応。
- [Geocode.xyz](https://geocode.xyz/) - 逆ジオコーディング、順ジオコーディング、地名抽出・解析のAPI。
- [GISCO data distribution API](https://gisco-services.ec.europa.eu/distribution/v2/) - 行政区域と境界に関する、欧州委員会のデータソース。
- [GraphHopper Route Optimization API](https://www.graphhopper.com/route-optimization/) - さまざまな車両配送経路問題を解決。
- [movebank-api](https://github.com/movebank/movebank-api-doc) - 動物追跡データのプラットフォーム。
- [OpenAQ](https://openaq.org/) - 原リストで最大規模と紹介される、オープンソースの大気質データプラットフォーム。
- [Open Charge Map API](https://openchargemap.org) - 電気自動車の充電場所の公開登録情報。
- [OpenCage](https://opencagedata.com/api) - オープンデータを使った順・逆ジオコーディングAPI。
- [Open-Meteo](https://open-meteo.com/) - 世界全体の天気予報API。
- [Open Notify](http://open-notify.org/Open-Notify-API/) - ISSの位置と宇宙にいる人の数。
- [Open Postcode Geo API](https://www.getthedata.com/open-postcode-geo-api) - 地理空間データ付きの英国の郵便番号。
- [OpenSky API](https://github.com/openskynetwork/opensky-api) - リアルタイムの空域情報を取得。
- [openrouteservice](https://openrouteservice.org/dev/#/api-docs) - 経路案内、等時線、ジオコーディングのサービス。
- [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Overpass_API) - Overpass APIを使ってOpenStreetMapデータを取得。
- [opentopodata API](https://www.opentopodata.org/) - オープンな地形データのAPI。
- [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) - OpenStreetMapデータを取得。
- [RainViewer](https://www.rainviewer.com/api.html) - 無料の気象レーダー・衛星データAPI。
- [REST countries](https://restcountries.com/) - RESTful APIで国情報を取得。
- [Sunrise and sunset](https://sunrise-sunset.org) - 各地点の日の入り・日の出時刻を提供。
- [TomTom](https://developer.tomtom.com/api-explorer-index/documentation/product-information/introduction) - ジオコーディング、経路探索、交通情報など。
- [USGS earthquake data](https://earthquake.usgs.gov/fdsnws/event/1/) - さまざまなパラメーターで地震データを検索。
- [ZipCheckup API](https://github.com/artakulov/us-water-quality-data) - 米国のZIPコード単位の環境安全データを提供する無料REST API。水質、大気質、PFAS、ラドン、鉛、洪水リスクを対象とする。
- [what3words](https://developer.what3words.com/public-api) - 3語の住所を座標に変換。
- [PostalCodes](https://postalcodes.info/api) - 世界全体の郵便番号検索、国別データのエクスポート、住所検証データ。

### コレクション
オープンな地理空間データセットの資料集とリポジトリです。
- [awesome-public-datasets](https://github.com/awesomedata/awesome-public-datasets) - 多様な分類のオープンデータセットを収録したリポジトリ。
- [Free GIS data](https://freegisdata.rtwilson.com/) - 無料で利用できる地理データセットを提供する、500超のサイトへのリンク。
- [Public APIs](https://github.com/public-apis-dev/public-apis) - ソフトウェア・Web開発で使える無料APIの共同リスト。
- [WRI](https://datasets.wri.org/) - 世界資源研究所。
- [David Rumsey map collection](https://www.davidrumsey.com/) - 歴史的地図のアーカイブ。

## <a id="-notebook"></a>ノートブック
実装を支援するJavaScriptノートブックです。

### 初級
- [Hello, Leaflet](https://observablehq.com/@observablehq/hello-leaflet) - ObservableHQ.
- [Hello, Bertin.js](https://observablehq.com/@neocartocnrs/hello-bertin-js) - Nicolas Lambert.
- [Hello, Mapbox GL](https://observablehq.com/@observablehq/hello-mapbox-gl) - Mike Bostock.
- [Hello, eurostat-map.js](https://observablehq.com/@joewdavies/eurostat-map-js) - Joe Davies.
- [Hello, gridviz](https://observablehq.com/@neocartocnrs/hello-gridviz) - Nicolas Lambert.

### 中級
- [World Tour](https://observablehq.com/@d3/world-tour) - D3.
- [Choropleth](https://observablehq.com/@d3/choropleth) - D3.
- [How to make a nice scalebar](https://observablehq.com/@jgaffuri/nice-scale-bar) - Julien Gaffuri.
- [#GISCHAT Twitter Users with MapBoxGL - Globe Projection](https://observablehq.com/@chriszrc/gischat-twitter-users-with-mapboxgl-globe-projection) - Chris Marx.
- [Hexgrid maps with d3-hexgrid](https://observablehq.com/@larsvers/hexgrid-maps-with-d3-hexgrid) - Larsvers.
- [Bivariate Choropleth with Continuous Color Scales](https://observablehq.com/@stephanietuerk/bivariate-choropleth-with-continuous-color-scales) - Stephanie Tuerk.
- [Visualizing Eurostat grid data using Three.js & D3](https://observablehq.com/@joewdavies/visualizing-eurostat-grid-data-using-three-js-d3) - Joe Davies.

### 上級

- [Try to impeach this? Challenge accepted!](https://observablehq.com/@karimdouieb/try-to-impeach-this-challenge-accepted) - Karim Douieb.
- [Bars and pubs in Paris](https://observablehq.com/@neocartocnrs/bars-pubs-in-paris) - Nicolas Lambert.
- [Brussels Street Gender Inequality](https://observablehq.com/@karimdouieb/brussels-streets-gender-inequality) - Karim Douieb.
- [Animating voting maps with regl](https://observablehq.com/@bmschmidt/animating-voting-maps-with-regl) - Benjamin Schmidt.
- [Election maps as dorling striped circles](https://observablehq.com/@jgaffuri/election-map-dorling-striped-circles) - Julien Gaffuri.
- [GeoParquet on the web](https://observablehq.com/@kylebarron/geoparquet-on-the-web) - Kyle Barron.
- [Interactive Regl wind demo](https://observablehq.com/@dkaoster/interactive-regl-wind-demo) - Daniel Kao.
- [Dorling cartogram of the Spanish Presidential election](https://observablehq.com/@adrianblanco/dorling-cartogram-of-the-spanish-presidential-election) - Adrián Blanco.
- [Visualizing earthquakes with Three.js](https://observablehq.com/@joewdavies/visualizing-earthquakes-with-three-js) - Joe Davies.
- [GeoArrow and GeoParquet in deck.gl](https://observablehq.com/@kylebarron/geoarrow-and-geoparquet-in-deck-gl) - Kyle Barron.

## <a id="world_map-ウェブ地図"></a>Web地図
地理・歴史・環境・統計の情報を表示するWeb地図です。

- [著名人の地図](https://tjukanovt.github.io/notable-people) - Topi Tjukanov.
- [海底ケーブルの地図](https://www.submarinecablemap.com/) - TeleGeography.
- [Radio Garden](https://radio.garden/) - 3D地球儀のラジオチューナー。
- [米国のすべての建物の地図](https://www.nytimes.com/interactive/2018/10/12/us/map-of-every-building-in-the-united-states.html) - New York Times。
- [ローマの交通網の地図](https://orbis.stanford.edu/) - ローマ世界を扱うStanfordの地理空間ネットワークモデル。
- [WebGL Wind](https://github.com/mapbox/webgl-wind) - WebGLによる風の強さの可視化。原リストでは、最大100万個の風の粒子を60 fpsで描画可能と紹介されている。
- [Statistical Atlas](https://ec.europa.eu/statistical-atlas/viewer) - Eurostatの統計を紹介する、Leafletを基盤とした地図帳。
- [ShadeMap](https://shademap.app/) - 世界中のあらゆる山・建物・木の影を、任意の日時でシミュレーション。
- [ClimateArchive](https://climatearchive.org/) - 時間と空間を通じて気候モデルデータをインタラクティブに可視化。
- [Old Maps Online](https://www.oldmapsonline.org/) - 歴史的な場所を閲覧し、タイムラインで古地図を検索。
- [chronotrains](https://www.chronotrains.com) - 8時間以内に鉄道で行ける場所を表示。
- [Castlemap](https://thecastlemap.com/) - Wikidataを基にした夜の地図。原リストでは世界の城・要塞・宮殿7,044件を収録と紹介されている。
- [Europe Beach Map](https://europebeachmap.com/) - ヨーロッパの著名なビーチを1枚の地図にまとめ、各ビーチの海水温・砂・適した季節を表示。
- [Detourmap](https://detourmap.com/) - Wikidataを基に、滝、洞窟、火山、人里離れた海岸、遺跡、墓、ゴーストタウン、難破船を世界地図に表示。
- [Planetary Atlas](https://planetatlas.org) - NASA、USGS、ESA、JAXAの公開画像を基にした、14の天体の拡大縮小可能な地図。IAUの命名法と69の探査ミッションの着陸地点を含む。
- [FilmMap](https://thefilmmap.com/) - 映画・テレビの撮影場所を、それぞれWikidataの記述に紐づけて表示。原リストでは161か国の15,272地点を収録と紹介されている。
- [Forest Fires Map](https://forest-fires-map.vercel.app/) - 森林火災のインタラクティブなWeb地図。

## <a id="-ウェブアプリ"></a>Webアプリ
すぐに利用できる地理空間Webアプリです。

- [city roads](https://anvaka.github.io/city-roads/) - 任意の都市のすべての道路を一度に描画。
- [Datawrapper](https://github.com/datawrapper/datawrapper) - グラフ、地図、表を作成。
- [Fantasy Map Generator](https://github.com/Azgaar/Fantasy-Map-Generator) - 架空の地図を作成・編集する無料Webアプリ。
- [GeoLibre](https://github.com/opengeos/GeoLibre) - デスクトップとWebで地理空間データを可視化・探索・分析する、軽量でクラウドネイティブなGISプラットフォーム。モバイル画面に対応したレスポンシブなレイアウト。
- [geotiff.io](http://app.geotiff.io/) - 使いやすいラスター処理へ素早くアクセス。
- [IMAGE](https://gisco-services.ec.europa.eu/image/) - 主題図を生成するツール。
- [Kepler](https://kepler.gl/demo) - 大規模データセット向けの強力なオープンソース地理空間分析ツール。
- [magrit](https://magrit.cnrs.fr/) - 主題図を作成するオンラインアプリ。
- [mapshaper](https://mapshaper.org/) - 地図データのオンラインエディター。
- [MapOnShirt](https://maponshirt.com) - 地図から色鮮やかなデザインを作成し、商品化。
- [Maputnik](https://github.com/maputnik/editor) - Mapbox GLのスタイルを編集する、無料でオープンなビジュアルエディター。
- [mapus](https://github.com/alyssaxuu/mapus) - 共同で地図を探索し、注釈を付けるツール。
- [Peak Map](https://github.com/anvaka/peak-map) - 地図上の任意の領域の標高を、塗りつぶした面グラフで可視化。
- [Plasio](https://github.com/verma/plasio) - ドラッグ＆ドロップに対応した、ブラウザー内のLAS/LAZ点群ビューアー。
- [StoryMap JS](https://storymap.knightlab.com/) - ESRIのStory Mapアプリケーションに代わるオープンソースの選択肢。
- [TopoExport](https://topoexport.com) - オープンソースのデータセットを使い、2D等高線と3D地形をエクスポート。
- [uMap](https://github.com/umap-project/umap) - OpenStreetMapのレイヤーで地図を作成し、Webサイトへ埋め込み。
- [bboxFinder](http://bboxfinder.com/) - 地図からbbox値を調べる補助ページ。
- [geojson.io](https://geojson.io/) - 空間データを作成・閲覧・共有する、素早く使えるシンプルなツール。
- [GeoJSONLint](https://geojsonlint.com/) - GeoJSONの検証と閲覧。
- [Pharos AI](https://conflicts.app) - 地政学的紛争を追跡するオープンソースのリアルタイム情報ダッシュボード。DeckGL/MapLibreで地理空間データをインタラクティブに可視化。（[ソースコード](https://github.com/Juliusolsson05/pharos-ai)）
- [Pumperly](https://github.com/GeiserX/pumperly) - MapLibre GL JS、PostGIS、Valhallaの経路探索、Photonのジオコーディングを使う、オープンソースの燃料価格比較・EV充電経路計画ツール。
- [gpx studio](https://github.com/gpxstudio/gpxstudio.github.io) - GPX編集のオンラインツール。

## <a id="-配色の助言"></a>配色の助言
データ可視化・地図製作のための配色ツールです。パレット、色スケール、SVGパターンを探せます。

- [CartoColor](https://github.com/CartoDB/CartoColor) - 地図の色使いの基準を基盤とした、カスタムカラーパレット集。
- [Chroma.js Color Palette Helper](https://gka.github.io/palettes/#/9) - 複数の色相と中間点を持つ色スケールを扱う、Chroma.jsベースのツール。
- [ColorBrewer](https://colorbrewer2.org/) - Cynthia Brewer博士の研究に基づく、地図の配色に関する助言。
- [Dicopal.js](https://github.com/riatelab/dicopal.js) - JavaScript向けの離散カラーパレット。
- [Textures.js](https://github.com/riccardoscalco/textures) - データ可視化のためのSVGパターンを作成するJavaScriptライブラリ。
- [viz-palette](https://www.susielu.com/data-viz/viz-palette) - JavaScriptでの色の調整・コピー・貼り付けに適したツール。

## <a id="-アイコン"></a>アイコン
GISのWebサイトで使えるアイコンです。
- [font-GIS](https://github.com/Viglino/font-gis) - GISと空間分析ツールで使えるアイコンフォント集。
- [Map Icons Collection](https://mapicons.mapsmarker.com/) - 地図上のPOI（関心地点）の位置マーカーとして使う、1,000超の無料でカスタマイズ可能なアイコン。
- [Material Symbols](https://fonts.google.com/icons?icon.query=map) - 原リストでは、1つのフォントファイルに2,990超のグリフと多様なデザインのバリエーションを収録と紹介されている。
- [Geoapify map marker playground](https://apidocs.geoapify.com/playground/icon/) - アイコンを作成し、地図のマーカーとして使えるMarker Icon API。

## <a id="-動画"></a>動画
Web地図に関する講演・チュートリアル動画です。

- [Mapping Geolocation with Leaflet.js - Working with Data and APIs in JavaScript](https://www.youtube.com/watch?v=nZaZ2dB6pow) - The Coding Train.
- [10 Maps, and the Tech and Stories Behind Them](https://www.youtube.com/watch?v=PpWAKVjPlgU) - Maarten Lambrechts.
- [Intermediate Three.js Tutorial - Create a Globe with Custom Shaders](https://www.youtube.com/watch?v=vM8M4QloVL0&t=4418s) - Chris Courses.
- [Statistical Cartography - Design principles for statistical map design](https://www.youtube.com/watch?v=e803ElX5Q_c) - Julien Gaffuri.

## <a id="-参考資料"></a>参考資料
- [Fundamentals of Data Visualization](https://clauswilke.com/dataviz/) - Claus O. Wilke.
- [A Workbook for Interactive Cartography and Visualization on the Open Web](https://github.com/uwcartlab/webmapping) - Robert Roth, Carl Sack, Gareth Baldrica-Franklin, Yuying Chen, Rich Donohue, Lily Houtman, Tim Prestby, Robin Tolochko, Nick Underwood.
- [Thematic Mapping: 101 Inspiring Ways to Visualise Empirical Data](https://www.esri.com/en-us/esri-press/browse/thematic-mapping) - Kenneth Field.
- [Color use guidelines for mapping and visualization](https://colorbrewer2.org/learnmore/schemes_full.html#qualitative) - Cynthia A. Brewer.
- [Geospatial Network Visualization](https://geonetworks.github.io/) - 地理空間ネットワークデータの可視化技術を集めた資料。
