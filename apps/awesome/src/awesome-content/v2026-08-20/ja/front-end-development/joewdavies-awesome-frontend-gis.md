---
title: "joewdavies/awesome-frontend-gis"
description: "joewdavies/awesome-frontend-gis の定本スナップショット"
licenseSource: "github-joewdavies-awesome-frontend-gis-readme-md"
---


<div align='center'>
<h2>Awesome Frontend GIS   <a href='https://github.com/sindresorhus/awesome'>
    <img src='https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg' alt='Awesome' href='https://github.com/sindresorhus/awesome'>
  </a></h2>

 ウェブブラウザー向け地理情報システム（GIS）。<br>
 地理データの管理、分析、編集、可視化に利用します。
  
<div>
    <a href='https://github.com/eurostat/gridviz' target='_blank'>
        <img src='./images/awesome-fronted-gis-banner.png'>
    </a>
</div>

 *地理空間関連のウェブフレームワーク、ツール、デモ、アプリケーション、データソースなどを集めた一覧です。*
 
</div>


## 目次
- [👨‍💻 JavaScriptライブラリ](#-javascript-libraries)
  - [地図描画](#mapping)
  - [データ処理](#data-processing)
  - [LiDAR](#lidar)
  - [リモートセンシング](#remote-sensing)
- [💾 データソース](#-data-sources)
  - [ダウンロード](#downloads)
  - [ウェブAPI](#web-apis)
  - [コレクション](#collections)
- [📒 Notebook](#-notebooks)
  - [初級](#beginner)
  - [中級](#intermediate)
  - [上級](#advanced)
- [:world\_map: ウェブ地図](#world_map-web-maps)
- [🌐 ウェブアプリ](#-web-apps)
- [🎨 配色の助言](#-colour-advice)
- [📍 アイコン](#-icons)
- [📺 動画](#-videos)
- [📚 参考資料](#-further-reading)
- [🤝 コントリビューション](#-contributing)

## 👨‍💻 JavaScriptライブラリ

### 地図描画
ウェブ地図を作成するためのライブラリです。

- [antvis L7](https://github.com/antvis/L7) - 大規模なWebGLを用いた地理空間データ可視化。 ![GitHub stars](https://img.shields.io/github/stars/antvis/L7?style=social)
- [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/) - 現代的なJavaScript APIおよびウェブコンポーネントライブラリで、ブラウザ上でインタラクティブな2次元および3次元ウェブアプリケーションを構築します。
- [ArcGIS REST JS](https://github.com/Esri/arcgis-rest-js) - the ArcGIS REST API that run in Node.js and modern browsers. ![GitHub stars](https://img.shields.io/github/stars/Esri/arcgis-rest-js?style=social)向けのCompact, modular JavaScript wrappers。
- [Bertin.js](https://github.com/neocarto/bertin) - visualizing geospatial data and making thematic maps for the web. ![GitHub stars](https://img.shields.io/github/stars/neocarto/bertin?style=social)向けのA JavaScript library。
- [Cesium.js](https://github.com/CesiumGS/cesium) - world-class 3D mapping of geospatial data. ![GitHub stars](https://img.shields.io/github/stars/CesiumGS/cesium?style=social)向けのAn open-source JavaScript library。
- [d3-geo](https://github.com/d3/d3-geo) - creating maps based on D3.js. ![GitHub stars](https://img.shields.io/github/stars/d3/d3-geo?style=social)向けのA library。
- [d3-geo-projection](https://github.com/d3/d3-geo-projection) - 拡張された地理投影。 ![GitHub stars](https://img.shields.io/github/stars/d3/d3-geo-projection?style=social)
- [d3-geo-voronoi](https://github.com/Fil/d3-geo-voronoi) - the sphere. ![GitHub stars](https://img.shields.io/github/stars/Fil/d3-geo-voronoi?style=social)向けのVoronoi diagrams and Delaunay triangulation。
- [datamaps](https://github.com/markmarkoh/datamaps) - 1ファイルでカスタマイズ可能な地図可視化。 ![GitHub stars](https://img.shields.io/github/stars/markmarkoh/datamaps?style=social)
- [Deck.GL](https://github.com/visgl/deck.gl) - WebGL2を用いた地理空間可視化レイヤー。 ![GitHub stars](https://img.shields.io/github/stars/visgl/deck.gl?style=social)
- [Eurostat-map](https://github.com/eurostat/eurostat-map.js) - データ駆動型地図。 ![GitHub stars](https://img.shields.io/github/stars/eurostat/eurostat-map.js?style=social)
- [globe.gl](https://github.com/vasturiano/globe.gl) - 3D rendering. ![GitHub stars](https://img.shields.io/github/stars/vasturiano/globe.gl?style=social)向けのThis library is a convenience wrapper around the three-globe plugin, using ThreeJS/WebGL。
- [Google Maps](https://developers.google.com/maps/documentation/javascript) - Googleマップ用のJavaScript API。
- [gridviz](https://github.com/eurostat/gridviz) - visualizing gridded data. ![GitHub stars](https://img.shields.io/github/stars/eurostat/gridviz?style=social)向けのA package。
- [HERE maps API](https://developer.here.com/develop/javascript-api) - 機能豊かでカスタマイズ可能なHEREマップを使ってウェブアプリケーションを構築します。
- [iTowns](https://github.com/iTowns/itowns) - visualizing 3D geospatial data. ![GitHub stars](https://img.shields.io/github/stars/iTowns/itowns?style=social)向けのA Three.js-based framework written in JavaScript/WebGL。
- [Leaflet](https://github.com/Leaflet/Leaflet) - mobile-friendly interactive maps. ![GitHub stars](https://img.shields.io/github/stars/Leaflet/Leaflet?style=social)向けのThe leading open-source JavaScript library。
- [Map Forecast API](https://github.com/windycom/API) - Leaflet 1.4.xに基づく使いやすいライブラリ。風の地図を表示可能。 ![GitHub stars](https://img.shields.io/github/stars/windycom/API?style=social)
- [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js) - ベクターテイルからインタラクティブな地図をWebGLを使用してレンダリングするJavaScriptライブラリ。![GitHub stars](https://img.shields.io/github/stars/mapbox/mapbox-gl-js?style=social)
- [maplibre](https://github.com/maplibre/maplibre-gl-js) - 2020年12月にmapbox-gl-jsが非OSSライセンスに切り替えられた前には、オープンソースのフォークとして存在した。![GitHub stars](https://img.shields.io/github/stars/maplibre/maplibre-gl-js?style=social)
- [MapTalks.js](https://github.com/maptalks/maptalks.js) - integrated 2D/3D maps. ![GitHub stars](https://img.shields.io/github/stars/maptalks/maptalks.js?style=social)向けのAn open-source JavaScript library。
- [OpenLayers](https://github.com/openlayers/openlayers) - creating interactive maps on the web. ![GitHub stars](https://img.shields.io/github/stars/openlayers/openlayers?style=social)向けのA high-performance, feature-packed library。
- [react-simple-maps](https://github.com/zcreativelabs/react-simple-maps) - React, built on top of d3-geo. ![GitHub stars](https://img.shields.io/github/stars/zcreativelabs/react-simple-maps?style=social)向けのAn SVG mapping component library。
- [Tangram](https://github.com/tangrams/tangram) - creative cartography. ![GitHub stars](https://img.shields.io/github/stars/tangrams/tangram?style=social)向けのWebGL map rendering engine。
- [TerriaJS](https://github.com/TerriaJS/terriajs) - building rich, web-based geospatial data explorers. ![GitHub stars](https://img.shields.io/github/stars/TerriaJS/terriajs?style=social)向けのA library。
- [Wrld.js](https://github.com/wrld3d/wrld.js/) - Leafletをベースにしたアニメーション3D都市地図。![GitHub stars](https://img.shields.io/github/stars/wrld3d/wrld.js?style=social)


### データ処理
地理空間データの分析・処理を支援するライブラリです。
- [Arc.js](https://github.com/springmeyer/arc.js) - GeoJSONまたはWKT形式の線として、大円経路を計算する。![GitHub stars](https://img.shields.io/github/stars/springmeyer/arc.js?style=social)
- [awesome-GeoJSON](https://github.com/tmcw/awesome-geojson) - GeoJSONツールのカタログ。![GitHub stars](https://img.shields.io/github/stars/tmcw/awesome-geojson?style=social)
- [Euclid.ts](https://github.com/mathigon/euclid.js) - 2次元ユークリッド幾何学のクラス、ユーティリティ、および描画ツール。![GitHub stars](https://img.shields.io/github/stars/mathigon/euclid.js?style=social)
- [flatbush](https://github.com/mourner/flatbush) - 2D points and rectangles in JavaScript. ![GitHub stars](https://img.shields.io/github/stars/mourner/flatbush?style=social)向けのA really fast static spatial index。
- [FlatGeoBuf](https://github.com/flatgeobuf/flatgeobuf) - geographic data based on flatbuffers. ![GitHub stars](https://img.shields.io/github/stars/flatgeobuf/flatgeobuf?style=social)向けのA performant binary encoding。
- [flatten-js](https://github.com/alexbol99/flatten-js) - 幾何学的形状の操作、交点の検出、包含関係の確認、距離の計算、変換などに使用。 ![GitHub stars](https://img.shields.io/github/stars/alexbol99/flatten-js?style=social)
- [Galton](https://github.com/urbica/galton) - 軽量なNode.jsによる等時線サーバー。 ![GitHub stars](https://img.shields.io/github/stars/urbica/galton?style=social)
- [gdal3.js](https://github.com/bugra9/gdal3.js) - レイザーおよびベクターデータをさまざまなフォーマットに変換。 ![GitHub stars](https://img.shields.io/github/stars/bugra9/gdal3.js?style=social)
- [geoblaze](https://github.com/GeoTIFF/geoblaze) - 高速なJavaScriptによるレイザー処理エンジン。 ![GitHub stars](https://img.shields.io/github/stars/GeoTIFF/geoblaze?style=social)
- [geobuf](https://github.com/mapbox/geobuf) - geographic data. ![GitHub stars](https://img.shields.io/github/stars/mapbox/geobuf?style=social)向けのA compact binary encoding。
- [GeoTiff.js](https://github.com/geotiffjs/geotiff.js) - visualization or analysis. ![GitHub stars](https://img.shields.io/github/stars/geotiffjs/geotiff.js?style=social)向けのParse TIFF files。
- [geolib](https://github.com/manuelbieh/geolib) - 基本的な地理空間操作を提供するライブラリ。 ![GitHub stars](https://img.shields.io/github/stars/manuelbieh/geolib?style=social)
- [geopackage-js](https://github.com/ngageoint/geopackage-js) - GeoPackage JavaScriptライブラリはGeoPackageファイルの読み込みを可能にする。 ![GitHub stars](https://img.shields.io/github/stars/ngageoint/geopackage-js?style=social)
- [geoparquet](https://github.com/opengeospatial/geoparquet) - Apache Parquetに地理空間データをエンコードする。 ![GitHub stars](https://img.shields.io/github/stars/opengeospatial/geoparquet?style=social)
- [geotoolbox](https://github.com/neocarto/geotoolbox) - use with geojson properties. ![GitHub stars](https://img.shields.io/github/stars/neocarto/geotoolbox?style=social)向けのProvides several GIS operations。
- [geojson-merge](https://github.com/mapbox/geojson-merge) - 複数のGeoJSONファイルを1つのFeatureCollectionにマージする。 ![GitHub stars](https://img.shields.io/github/stars/mapbox/geojson-merge?style=social)
- [geojson-vt](https://github.com/mapbox/geojson-vt) - slicing GeoJSON data. ![GitHub stars](https://img.shields.io/github/stars/mapbox/geojson-vt?style=social)向けのA highly efficient JavaScript library。
- [Geometric.js](https://github.com/HarryStevens/geometric) - doing geometry. ![GitHub stars](https://img.shields.io/github/stars/HarryStevens/geometric?style=social)向けのA JavaScript library。
- [JSTS](https://github.com/bjornharrtell/jsts) - JavaScriptトポロジーサイツ。![GitHub stars](https://img.shields.io/github/stars/bjornharrtell/jsts?style=social)
- [koop](https://github.com/koopjs/koop) - connecting incompatible spatial APIs. ![GitHub stars](https://img.shields.io/github/stars/koopjs/koop?style=social)向けのA JavaScript toolkit。
- [math.gl](https://github.com/uber-web/math.gl) - 地理空間および3D用途に特化したJavaScript数学ライブラリ。 ![GitHub stars](https://img.shields.io/github/stars/uber-web/math.gl?style=social)
- [Proj4js](https://github.com/proj4js/proj4js) - 座標系間の座標変換を行う。 ![GitHub stars](https://img.shields.io/github/stars/proj4js/proj4js?style=social)
- [rbush](https://github.com/mourner/rbush) - 2D spatial indexing. ![GitHub stars](https://img.shields.io/github/stars/mourner/rbush?style=social)向けのA high-performance JavaScript library。
- [spl.js](https://github.com/jvail/spl.js) - JavaScriptでSpatiaLite機能を使用可能にする。 ![GitHub stars](https://img.shields.io/github/stars/jvail/spl.js?style=social)
- [statsbreaks](https://github.com/riatelab/statsbreaks) - thematic mapping. ![GitHub stars](https://img.shields.io/github/stars/riatelab/statsbreaks?style=social)向けのSplit a quantitative dataset into classes。
- [Turf.js](https://github.com/Turfjs/turf) - spatial analysis. ![GitHub stars](https://img.shields.io/github/stars/Turfjs/turf?style=social)向けのA JavaScript library。
- [topoJSON](https://github.com/topojson/topojson) - use in D3 maps. ![GitHub stars](https://img.shields.io/github/stars/topojson/topojson?style=social)向けのConvert GeoJSON to TopoJSON。
- [Wicket](https://github.com/arthur-e/Wicket) - moving between Well-Known Text (WKT) and various framework geometries. ![GitHub stars](https://img.shields.io/github/stars/arthur-e/Wicket?style=social)向けのA modest library。


### LiDAR
ウェブブラウザーで点群を可視化するツールです。

- [Plasio](https://github.com/verma/plasio) - ブラウザ内でのドラッグ＆ドロップによるLAS/LAZポイントクラウド閲覧機能。 ![GitHub stars](https://img.shields.io/github/stars/verma/plasio?style=social)
- [Potree](https://github.com/potree/potree) - large datasets. ![GitHub stars](https://img.shields.io/github/stars/potree/potree?style=social)向けのWebGL point cloud viewer。
- [Potree & Cesium.js](https://potree.org/potree/examples/cesium_retz.html) - レッツ、オーストリアLIDARビューイング
- [Three.js](https://threejs.org/examples/#webgl_loader_pcd) - ポイントクラウドデータローダー。![GitHub stars](https://img.shields.io/github/stars/mrdoob/three.js?style=social)

### リモートセンシング

フロントエンドでの地球観測・リモートセンシングに関するリソースです。

- [EOSDIS Worldview](https://github.com/nasa-gibs/worldview) - browsing global, full-resolution satellite imagery. ![GitHub stars](https://img.shields.io/github/stars/nasa-gibs/worldview?style=social)向けのInteractive interface。
- [Google Earth Engine](https://developers.google.com/earth-engine/tutorials/tutorial_api_01) - 地理空間処理サービス。
- [Sentinel Hub custom scripts](https://github.com/sentinel-hub/custom-scripts) - センチネル・ハブと併用可能なカスタムスクリプトのリポジトリ。 ![GitHub stars](https://img.shields.io/github/stars/sentinel-hub/custom-scripts?style=social)
- [sentinelhub-js](https://github.com/sentinel-hub/sentinelhub-js/) - センチネル・ハブサービスを用いて衛星画像をダウンロードし、処理します。 ![GitHub stars](https://img.shields.io/github/stars/sentinel-hub/sentinelhub-js?style=social)
- [Spectral](https://github.com/awesome-spectral-indices/awesome-spectral-indices) - the Google Earth Engine JavaScript API. ![GitHub stars](https://img.shields.io/github/stars/awesome-spectral-indices/awesome-spectral-indices?style=social)向けのAwesome Spectral Indices。


## 💾 データソース
地理空間オープンデータソースの一覧です。

### ダウンロード
ダウンロード可能なデータです。

- [ArcGIS Hub](https://hub.arcgis.com/) - 38万以上のオープンデータセット。
- [Copernicus global DEM](https://ec.europa.eu/eurostat/web/gisco/geodata/digital-elevation-model/copernicus#Elevation) - グローバルな標高タイル。
- [Copernicus open access hub](https://www.copernicus.eu/en/access-data/conventional-data-access-hubs) - コペンヒクス衛星画像のダウンロード。
- [ETOPO1](https://www.ngdc.noaa.gov/mgg) - 地球表面の1分間（アール）単位のグローバルリリーフモデル。
- [European population grids - GISCO](https://ec.europa.eu/eurostat/web/gisco/geodata/grids) - グリッドセルごとの人口データ。
- [European Postcodes Point Data](https://ec.europa.eu/eurostat/web/gisco/geodata/administrative-units/postal-codes) - ヨーロッパ全域の郵便番号の位置情報。
- [Geoboundaries](https://www.geoboundaries.org/) - 世界最大のオープンかつ無料の政治境界データベース。
- [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org/) - 生物多様性データへのオープンアクセス。
- [Global Climate Monitor](https://kerdoc.cica.es/) - グローバルなオープン気候データ。
- [Global power plant database](https://datasets.wri.org/dataset/globalpowerplantdatabase) - 火力発電所のオープンソースデータベース。
- [Galileo](https://galileo.gisdata.io/) - 地理空間データの発見および管理プラットフォーム。
- [Healthcare Services in Europe](https://ec.europa.eu/eurostat/web/gisco/geodata/basic-services#Healthcare) - ヨーロッパにおける医療サービスの配置位置。
- [HydroSHEDS](https://www.hydrosheds.org/) - グローバルアプリケーション向けに一貫した水系データ。
- [NASA Earth Data](https://search.earthdata.nasa.gov/search) - Earthdata Searchで、ブラウザ上でNASAの地球観測データを検索・発見・可視化・精緻化・アクセスできます。
- [Natural Earth](https://www.naturalearthdata.com/) - 無料のベクターマップおよびレイターマップデータ。
- [OpenAerialMap](https://openaerialmap.org/) - ライセンスされた画像をアクセスできるオープンサービス。
- [OpenMapTiles](https://openmaptiles.org/) - 無料のOpenStreetMapベクターテイル。
- [OpenStreetMap](https://www.geofabrik.de/data/download.html) - 無料で世界中をカバーする地理データセット
- [Open Topography](https://opentopography.org/) - 高解像度地形データとツール
- [Ookla internet speed data](https://github.com/teamookla/ookla-open-data) - グローバルネットワークのパフォーマンスメトリクス。 ![GitHub stars](https://img.shields.io/github/stars/teamookla/ookla-open-data?style=social)
- [Sentinel Hub custom scripts](https://github.com/sentinel-hub/custom-scripts) - Sentinel Hub. ![GitHub stars](https://img.shields.io/github/stars/sentinel-hub/custom-scripts?style=social)向けのRepository of custom scripts。
- [USGS Earth Explorer](https://earthexplorer.usgs.gov/) - 衛星画像などの検索と注文
- [World Atlas TopoJSON](https://github.com/topojson/world-atlas) - ナチュラル・エアースのベクターデータをTopoJSON形式で提供。 ![GitHub stars](https://img.shields.io/github/stars/topojson/world-atlas?style=social)
- [World Bank](https://www.unccd.int/resources/knowledge-sharing-system/world-banks-open-data) - グローバル開発データへの無料アクセス
- [WorldPop](https://www.worldpop.org/) - 開かれた空間人口統計データセット


### ウェブAPI
地理空間データを動的に取得するRESTful APIです。

- [Address API](https://gisco-services.ec.europa.eu/addressapi/docs/) - ヨーロッパ全域の住所データ（地理コードと逆地理コード）
- [API Geo](https://geo.api.gouv.fr/) - 公式フランス地理データAPI
- [ArcGIS location services](https://developers.arcgis.com/rest/location-based-services/) - ベースマップ、地理コード、場所情報、ルート計画、地理情報強化サービス
- [bng2latlong](https://www.getthedata.com/bng2latlong) - イギリスの国境グリッドを経度・緯度に変換
- [breezometer](https://docs.breezometer.com/api-documentation/introduction/) - 空気質、天気、花粉、環境データ
- [Country State City API](https://countrystatecity.in/) - 都市・州・国データベース
- [Geoapify](https://apidocs.geoapify.com/) - 地図、地理コード、ルート計画などの地理サービス
- [geonames](http://www.geonames.org/export/web-services.html) - 住所名の検索と逆地理コードのサポート
- [Geocode.xyz](https://geocode.xyz/) - 逆地理コード、前向き地理コード、地理解析API
- [GISCO data distribution API](https://gisco-services.ec.europa.eu/distribution/v2/) - 欧州委員会が提供する行政区域と境界データソース
- [GraphHopper Route Optimization API](https://www.graphhopper.com/route-optimization/) - さまざまな車両ルート問題の解決
- [movebank-api](https://github.com/movebank/movebank-api-doc) - animal tracking data. ![GitHub stars](https://img.shields.io/github/stars/movebank/movebank-api-doc?style=social)向けのPlatform。
- [OpenAQ](https://openaq.org/) - 最大規模のオープンソース空気質データプラットフォーム
- [Open Charge Map API](https://openchargemap.org) - 電動車充電所の公開登録情報
- [OpenCage](https://opencagedata.com/api) - オープンデータを用いた前向きおよび逆向き地理コードAPI
- [Open-Meteo](https://open-meteo.com/) - 世界規模の天気予報API
- [Open Notify](http://open-notify.org/Open-Notify-API/) - ISSの位置と宇宙にいる人の数
- [Open Postcode Geo API](https://www.getthedata.com/open-postcode-geo-api) - イギリスの郵便番号と地理データ
- [OpenSky API](https://github.com/openskynetwork/opensky-api) - リアルタイムの空域情報を取得。 ![GitHub stars](https://img.shields.io/github/stars/openskynetwork/opensky-api?style=social)
- [openrouteservice](https://openrouteservice.org/dev/#/api-docs) - 方向、等時線、地理コーディングサービス
- [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Overpass_API) - Overpass APIを介してOpenStreetMapデータを取得
- [opentopodata API](https://www.opentopodata.org/) - Open Topography Data API
- [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) - OpenStreetMapデータを取得
- [RainViewer](https://www.rainviewer.com/api.html) - 無料の天気レーダーおよび衛星データAPI
- [REST countries](https://restcountries.com/) - RESTフルAPIを介して国情報を取得
- [Sunrise and sunset](https://sunrise-sunset.org) - 特定地点の日出日没時刻を提供
- [TomTom](https://developer.tomtom.com/api-explorer-index/documentation/product-information/introduction) - 地理コーディング、ルーティング、交通情報など
- [USGS earthquake data](https://earthquake.usgs.gov/fdsnws/event/1/) - さまざまなパラメータで地震データを検索
- [ZipCheckup API](https://github.com/artakulov/us-water-quality-data) - US ZIP-level environmental safety data: water quality, air quality, PFAS, radon, lead, flood risk. ![GitHub stars](https://img.shields.io/github/stars/artakulov/us-water-quality-data?style=social)向けのFree REST API。
- [what3words](https://developer.what3words.com/public-api) - 3語の住所を座標に変換
- [PostalCodes](https://postalcodes.info/api) - グローバル郵便番号検索、国別輸出データ、住所検証データ

### コレクション
オープンな地理空間データセットのコレクションとリポジトリです。
- [awesome-public-datasets](https://github.com/awesomedata/awesome-public-datasets) - カテゴリが多様なオープンデータを豊富に収録した素晴らしいリポジトリ。 ![GitHub stars](https://img.shields.io/github/stars/awesomedata/awesome-public-datasets?style=social)
- [Free GIS data](https://freegisdata.rtwilson.com/) - 500以上の自由に利用可能な地理データセットを提供するサイトへのリンク
- [Public APIs](https://github.com/public-apis-dev/public-apis) - use in software and web development. ![GitHub stars](https://img.shields.io/github/stars/public-apis-dev/public-apis?style=social)向けのA collective list of free APIs。
- [WRI](https://datasets.wri.org/) - 世界資源研究所
- [David Rumsey map collection](https://www.davidrumsey.com/) - 歴史的な地図アーカイブ

## 📒 Notebook
実装を支援するJavaScript Notebookです。

### 初級
- [Hello, Leaflet](https://observablehq.com/@observablehq/hello-leaflet) - ObservableHQ
- [Hello, Bertin.js](https://observablehq.com/@neocartocnrs/hello-bertin-js) - ニコラス・ラムベルト
- [Hello, Mapbox GL](https://observablehq.com/@observablehq/hello-mapbox-gl) - Mike Bostock
- [Hello, eurostat-map.js](https://observablehq.com/@joewdavies/eurostat-map-js) - ジョー・デイビス
- [Hello, gridviz](https://observablehq.com/@neocartocnrs/hello-gridviz) - ニコラス・ラムベルト

### 中級
- [World Tour](https://observablehq.com/@d3/world-tour) - D3
- [Choropleth](https://observablehq.com/@d3/choropleth) - D3
- [How to make a nice scalebar](https://observablehq.com/@jgaffuri/nice-scale-bar) - Julien Gaffuri。
- [#GISCHAT Twitter Users with MapBoxGL - Globe Projection](https://observablehq.com/@chriszrc/gischat-twitter-users-with-mapboxgl-globe-projection) - クリス・マルク
- [Hexgrid maps with d3-hexgrid](https://observablehq.com/@larsvers/hexgrid-maps-with-d3-hexgrid) - ラルスバース
- [Bivariate Choropleth with Continuous Color Scales](https://observablehq.com/@stephanietuerk/bivariate-choropleth-with-continuous-color-scales) - ステファニー・ツェルク
- [Visualizing Eurostat grid data using Three.js & D3](https://observablehq.com/@joewdavies/visualizing-eurostat-grid-data-using-three-js-d3) - ジョー・デイビス

### 上級

- [Try to impeach this? Challenge accepted!](https://observablehq.com/@karimdouieb/try-to-impeach-this-challenge-accepted) - カリム・ドゥイエブ
- [Bars and pubs in Paris](https://observablehq.com/@neocartocnrs/bars-pubs-in-paris) - ニコラス・ラムベルト
- [Brussels Street Gender Inequality](https://observablehq.com/@karimdouieb/brussels-streets-gender-inequality) - カリム・ドゥイエブ
- [Animating voting maps with regl](https://observablehq.com/@bmschmidt/animating-voting-maps-with-regl) - ベンジャミン・スコルト
- [Election maps as dorling striped circles](https://observablehq.com/@jgaffuri/election-map-dorling-striped-circles) - Julien Gaffuri。
- [GeoParquet on the web](https://observablehq.com/@kylebarron/geoparquet-on-the-web) - ケイル・バロン
- [Interactive Regl wind demo](https://observablehq.com/@dkaoster/interactive-regl-wind-demo) - ダニエル・カオ
- [Dorling cartogram of the Spanish Presidential election](https://observablehq.com/@adrianblanco/dorling-cartogram-of-the-spanish-presidential-election) - アドリアン・ブランコ
- [Visualizing earthquakes with Three.js](https://observablehq.com/@joewdavies/visualizing-earthquakes-with-three-js) - ジョー・デイビス
- [GeoArrow and GeoParquet in deck.gl](https://observablehq.com/@kylebarron/geoarrow-and-geoparquet-in-deck-gl) - ケイル・バロン

## :world_map: ウェブ地図
興味深いウェブ地図の一覧です。

- [Map of notable people](https://tjukanovt.github.io/notable-people) - トピ・ツイカノフ
- [Submarine cable map](https://www.submarinecablemap.com/) - テレジオグラフィ
- [Radio Garden](https://radio.garden/) - 3D Globe ラジオチューナー
- [Map of every building in the United States](https://www.nytimes.com/interactive/2018/10/12/us/map-of-every-building-in-the-united-states.html) - ニューヨーク・タイムズ
- [Map of the Roman transport network](https://orbis.stanford.edu/) - スタンフォード地理空間ネットワークモデルによるローマ世界
- [WebGL Wind](https://github.com/mapbox/webgl-wind) - 地理・統計・歴史・環境情報を可視化するウェブ地図です。 参照: <https://img.shields.io/github/stars/mapbox/webgl-wind?style=social>
- [Statistical Atlas](https://ec.europa.eu/statistical-atlas/viewer) - ユーロステートの統計を示す葉書型アトラス
- [ShadeMap](https://shademap.app/) - 世界中のすべての山、建物、木の影を、いつでもどこでもシミュレーション
- [ClimateArchive](https://climatearchive.org/) - 時間と空間を軸にした気候モデルデータのインタラクティブな可視化
- [Old Maps Online](https://www.oldmapsonline.org/) - 歴史的な場所を閲覧し、タイムラインで古い地図を検索
- [chronotrains](https://www.chronotrains.com) - 8時間で電車で行ける場所はどこ？
- [Castlemap](https://thecastlemap.com/) - 世界の7,044の偉大な城、要塞、宮殿を1夜で1マップにまとめた、ウィキデータから構築
- [Europe Beach Map](https://europebeachmap.com/) - ヨーロッパのすべての著名なビーチを1マップにまとめ、それぞれの海水温、砂、最適シーズンを表示
- [Detourmap](https://detourmap.com/) - 滝、洞窟、火山、孤独な海岸、そして人々が遺した遺跡、墓、幽霊町、船の沈没地を1世界マップにまとめた、ウィキデータから構築
- [Planetary Atlas](https://planetatlas.org) - NASA、USGS、ESA、JAXAのオープンデータから構築された14の世界のズーム可能なマップ、IAUの命名法と69の表面探査着陸地点を含む
- [FilmMap](https://thefilmmap.com/) - 映画やテレビが実際に撮影された場所：161か国で15,272の撮影場所、それぞれウィキデータの記述に紐づけた
- [Forest Fires Map](https://forest-fires-map.vercel.app/) - 森林火災のインタラクティブウェブマップ

## 🌐 ウェブアプリ
すぐに利用できる地理空間ウェブアプリです。

- [city roads](https://anvaka.github.io/city-roads/) - 任意の都市内のすべての道路を一度に描画。 ![GitHub stars](https://img.shields.io/github/stars/anvaka/city-roads?style=social)
- [Datawrapper](https://github.com/datawrapper/datawrapper) - チャート、マップ、テーブルを作成
- [Fantasy Map Generator](https://github.com/Azgaar/Fantasy-Map-Generator) - creating and editing fantasy maps. ![GitHub stars](https://img.shields.io/github/stars/Azgaar/Fantasy-Map-Generator?style=social)向けのFree web application。
- [GeoLibre](https://github.com/opengeos/GeoLibre) - visualizing, exploring, and analyzing geospatial data across desktop and web environments, with a responsive layout for mobile screens. ![GitHub stars](https://img.shields.io/github/stars/opengeos/GeoLibre?style=social)向けのA lightweight, cloud-native GIS platform。
- [geotiff.io](http://app.geotiff.io/) - 簡単なラスタープロセスへの即時アクセスを提供
- [IMAGE](https://gisco-services.ec.europa.eu/image/) - テーママップを生成するツール
- [Kepler](https://kepler.gl/demo) - 大規模データセットに対する強力なオープンソース地理空間分析ツール
- [magrit](https://magrit.cnrs.fr/) - テーママップ用のオンラインアプリケーション
- [mapshaper](https://mapshaper.org/) - マップデータのオンライン編集ツール
- [MapOnShirt](https://maponshirt.com) - マップからカラフルなデザインを作成し、それらを製品に変換します。
- [Maputnik](https://github.com/maputnik/editor) - Mapbox GL styles. ![GitHub stars](https://img.shields.io/github/stars/maputnik/editor?style=social)向けのFree and open visual editor。
- [mapus](https://github.com/alyssaxuu/mapus) - collaboratively exploring and annotating maps. ![GitHub stars](https://img.shields.io/github/stars/alyssaxuu/mapus?style=social)向けのTool。
- [Peak Map](https://github.com/anvaka/peak-map) - 地図上の任意の領域の標高を埋め込みチャートで可視化。 ![GitHub stars](https://img.shields.io/github/stars/anvaka/peak-map?style=social)
- [Plasio](https://github.com/verma/plasio) - ブラウザ内でのドラッグ＆ドロップによるLAS/LAZポイントクラウド表示ツール。 ![GitHub stars](https://img.shields.io/github/stars/verma/plasio?style=social)
- [StoryMap JS](https://storymap.knightlab.com/) - ESRIのStory Mapアプリケーションへのオープンソース代替品。
- [TopoExport](https://topoexport.com) - オープンソースデータセットを使用して2Dの等高線と3Dの地形をエクスポートします。
- [uMap](https://github.com/umap-project/umap) - OpenStreetMapのレイヤーを使って地図を作成し、あなたのサイトに埋め込む。 ![GitHub stars](https://img.shields.io/github/stars/umap-project/umap?style=social)
- [bboxFinder](http://bboxfinder.com/) - マップからbbox値を検索するためのヘルプページ。
- [geojson.io](https://geojson.io/) - 空間データを作成・閲覧・共有するための簡単で迅速なツール。
- [GeoJSONLint](https://geojsonlint.com/) - GeoJSONの検証と閲覧を行うためにこのサイトを使用します。
- [Pharos AI](https://conflicts.app) - geopolitical conflict tracking with interactive DeckGL/MapLibre geospatial visualization. ([Source Code](https://github.com/Juliusolsson05/pharos-ai)) ![GitHub stars](https://img.shields.io/github/stars/Juliusolsson05/pharos-ai?style=social)向けのOpen-source real-time intelligence dashboard。
- [Pumperly](https://github.com/GeiserX/pumperly) - MapLibre GL JS、PostGIS、Valhallaルート計画、Photon地名検索を用いたオープンソースの燃料価格比較およびEV充電ルート計画ツール。 ![GitHub stars](https://img.shields.io/github/stars/GeiserX/pumperly?style=social)
- [gpx studio](https://github.com/gpxstudio/gpxstudio.github.io) - GPX編集用のオンラインツール。


## 🎨 配色の助言
データ可視化と地図製作では配色が重要です。地図に適した色を選ぶためのツールを紹介します。

- [CartoColor](https://github.com/CartoDB/CartoColor) - color use on maps. ![GitHub stars](https://img.shields.io/github/stars/CartoDB/CartoColor?style=social)向けのA set of custom color palettes built on top of standards。
- [Chroma.js Color Palette Helper](https://gka.github.io/palettes/#/9) - mastering multi-hued, multi-stop color scales. ![GitHub stars](https://img.shields.io/github/stars/gka/palettes?style=social)向けのChroma.js-powered tool。
- [ColorBrewer](https://colorbrewer2.org/) - ドクター・シザン・ブルワーより導かれた地図のカラーリングアドバイス。
- [Dicopal.js](https://github.com/riatelab/dicopal.js) - JavaScript. ![GitHub stars](https://img.shields.io/github/stars/riatelab/dicopal.js?style=social)向けのDiscrete color palettes。
- [Textures.js](https://github.com/riccardoscalco/textures) - creating SVG patterns, designed for data visualization. ![GitHub stars](https://img.shields.io/github/stars/riccardoscalco/textures?style=social)向けのJavaScript library。
- [viz-palette](https://www.susielu.com/data-viz/viz-palette) - JavaScript内で色を調整・コピー・ペーストするための最適化されたツール。


## 📍 アイコン
GISウェブサイトへ追加できるアイコンです。
- [font-GIS](https://github.com/Viglino/font-gis) - GIS地図やウェブサイトで使えるアイコン素材・生成ツールです。 参照: <https://img.shields.io/github/stars/Viglino/font-gis?style=social>
- [Map Icons Collection](https://mapicons.mapsmarker.com/) - あなたのマップ上のPOI（ポイント・オブ・インタレスト）として使用できる、1000以上の無料かつカスタマイズ可能なアイコンセット。
- [Material Symbols](https://fonts.google.com/icons?icon.query=map) - 1つのフォントファイルに収録された2,990以上のグリフで、デザインバリエーションが豊富。
- [Geoapify map marker playground](https://apidocs.geoapify.com/playground/icon/) - Marker Icon APIは、美しいアイコンを作成し、マップマーカーとして使用できます。

## 📺 動画
ウェブマッピングに関する講演・チュートリアル動画です。

- [Mapping Geolocation with Leaflet.js - Working with Data and APIs in JavaScript](https://www.youtube.com/watch?v=nZaZ2dB6pow) - The Coding Train。
- [10 Maps, and the Tech and Stories Behind Them](https://www.youtube.com/watch?v=PpWAKVjPlgU) - Maarten Lambrechts。
- [Intermediate Three.js Tutorial - Create a Globe with Custom Shaders](https://www.youtube.com/watch?v=vM8M4QloVL0&t=4418s) - Chris Courses。
- [Statistical Cartography - Design principles for statistical map design](https://www.youtube.com/watch?v=e803ElX5Q_c) - Julien Gaffuri。


## 📚 参考資料
- [Fundamentals of Data Visualization](https://clauswilke.com/dataviz/) - Claus O. Wilke。
- [A Workbook for Interactive Cartography and Visualization on the Open Web](https://github.com/uwcartlab/webmapping) - 地図製作・データ可視化・地理空間ネットワークの参考資料です。 参照: <https://img.shields.io/github/stars/uwcartlab/webmapping?style=social>
- [Thematic Mapping: 101 Inspiring Ways to Visualise Empirical Data](https://www.esri.com/en-us/esri-press/browse/thematic-mapping) - Kenneth Field。
- [Color use guidelines for mapping and visualization](https://colorbrewer2.org/learnmore/schemes_full.html#qualitative) - Cynthia A. Brewer。
- [Geospatial Network Visualization](https://geonetworks.github.io/) - 地理空間ネットワークデータの可視化技術のコレクション。


## 🤝 コントリビューション

コントリビューションを歓迎します。[ガイドライン](https://github.com/joewdavies/awesome-frontend-gis/blob/bfa5b37155d812af7e65115248ac30f97fd869b1/CONTRIBUTING.md)に従ってください。

---

この一覧について質問がある場合は、X（旧Twitter）の [@joewdavies](https://twitter.com/joewdavies) へ連絡するか、[GitHub Issueを作成](https://github.com/joewdavies/awesome-frontend-gis/issues/new)してください。

