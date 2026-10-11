---
title: "Awesome ArcGIS Developers"
description: "ArcGISによる地図・空間解析アプリ開発に使うAPI、SDK、位置情報サービス、データ処理ツール、サンプル、仕様。"
licenseSource: "github-Esri-awesome-arcgis-developer-readme-md"
---

# Awesome ArcGIS Developers

[ArcGIS](https://www.esri.com/en-us/arcgis/products/develop-with-arcgis/overview)は、地図・空間解析アプリの開発に使うAPI、位置情報サービス、ツール、クラウドでのデータホスティング・管理機能を提供します。個人や組織向けのWeb・ネイティブ・オフライン・デスクトップアプリや統合ソリューションを対象に、SDK、コードサンプル、データ変換・統合、デバッグ、スタイリング、開発ガイド、空間解析ライブラリ、データ形式の仕様を探せます。

## APIとSDK

- ArcGIS中核APIとライブラリ：
  - [ArcGIS API for Python](https://developers.arcgis.com/python/) - マッピング、空間分析、データサイエンス、地理空間AI、自動化をPythonで行うためのガイド、サンプルノートブック、APIリファレンス。
  - [ArcGIS REST APIs](https://developers.arcgis.com/rest/) - ArcGIS REST APIの一般資料。位置情報サービス、コンテンツ管理、ポータル管理などを扱う。
  - [ArcGIS REST APIコレクション](https://github.com/esri-es/ArcGIS-REST-API) - 位置情報サービス、ホストされたフィーチャレイヤー、ArcGIS Online、ArcGIS HubなどのREST APIを扱うPostmanコレクション。
  - [ArcGIS REST JS](https://developers.arcgis.com/arcgis-rest-js/) - 位置情報サービス、ArcGIS Online、ArcGIS EnterpriseのREST APIにアクセスするJavaScriptモジュール群の基本概念、チュートリアル、APIリファレンス。
  - [ArcGIS Urban API](https://developers.arcgis.com/arcgis-urban-api/) - ArcGIS Urbanデータに直接アクセスできる公開GraphQLウェブサービス。
  - [ArcPy](https://pro.arcgis.com/en/pro-app/arcpy/main/arcgis-pro-arcpy-reference.htm) - ArcGIS DesktopまたはArcGIS Enterpriseで地理データの解析、データ変換、データ管理、地図処理の自動化を行うPythonパッケージの資料。

- Esriクライアント側SDK：
  - [ArcGIS Maps SDK for .NET](https://developers.arcgis.com/net/) - .NETを使ってデスクトップおよびモバイルアプリを開発するためのガイド、サンプルコード、APIリファレンス。
  - [ArcGIS Maps SDK for Flutter](https://developers.arcgis.com/flutter/) - Flutterを使ってデスクトップおよびモバイルアプリを開発するためのガイド、サンプルコード、APIリファレンス。
  - [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/) - 地理空間データを活用するインタラクティブな2D・3D Webアプリの開発ガイド、サンプルコード、APIリファレンス、実例。
  - [ArcGIS Maps SDK for Kotlin](https://developers.arcgis.com/kotlin/) - Kotlinを使ってモバイルアプリを開発するためのガイド、サンプルコード、APIリファレンス。
  - [ArcGIS Maps SDK for Qt](https://developers.arcgis.com/qt/) - モバイルおよびデスクトップアプリを開発するためのガイド、サンプルコード、APIリファレンス。
  - [ArcGIS Maps SDK for Swift](https://developers.arcgis.com/swift/) - Swiftを使ってモバイルアプリを開発するためのガイド、サンプルコード、APIリファレンス。
  - [ArcGIS Maps SDK for Unity](https://developers.arcgis.com/unity/) - UnityでArcGISデータとサービスを使用して開発するためのガイド、APIリファレンス、サンプルコード。
  - [ArcGIS Maps SDK for Unreal Engine](https://developers.arcgis.com/unreal-engine/) - Unreal EngineでArcGISデータとサービスを使用して開発するためのガイド、APIリファレンス、サンプルコード。

- 統合とプラグイン（サードパーティーライブラリ）：
  - [ArcGISとCesiumJSの連携](https://developers.arcgis.com/cesiumjs/) - CesiumJSとArcGISを使ってマッピングアプリケーションを開発するためのガイドおよびチュートリアル。
  - [ArcGISとMapLibre GL JSの連携](https://developers.arcgis.com/maplibre-gl-js/maplibre-arcgis-plugin/) - Esriが保守するArcGIS MapLibreプラグインとArcGIS REST JSでMapLibre GL JSアプリをArcGISサービスへ接続する方法。チュートリアル、APIリファレンス、サンプルコードを含む。
  - [ArcGISとOpenLayersの連携](https://developers.arcgis.com/openlayers/) - OpenLayersとArcGIS位置情報サービスを使ってウェブアプリを開発するためのガイドおよびチュートリアル。
  - [ArcGISとLeafletの連携](https://developers.arcgis.com/esri-leaflet/) - Esriが保守するEsri LeafletプラグインとArcGIS REST JSでLeafletアプリをArcGISサービスへ接続する方法。チュートリアル、APIリファレンス、サンプルコードを含む。
  - [Esri-gl](https://github.com/muimsd/esri-gl) - Mapbox GL JSとMapLibre GL JSアプリでArcGISサービスを利用する、コミュニティが保守するプラグイン。

- ArcGIS製品拡張用SDK：
  - [ArcGIS CityEngine SDKs (C++)](https://github.com/esri/cityengine-sdk) - Procedural Runtime (PRT)のC++ API、ドキュメンテーション、例。
  - [ArcGIS CityEngine SDKs (Python)](https://github.com/Esri/pyprt) - CityEngine の Procedural Runtime (PRT) 用の Python バインディング。
  - [ArcGIS Earth Automation API](https://doc.arcgis.com/en/arcgis-earth/automation-api/get-started.htm) - ArcGIS Earth との通信に関するガイド、API リファレンス、サンプルコード。
  - [ArcGIS Enterprise SDK](https://developers.arcgis.com/enterprise-sdk/) - ArcGIS Enterprise を拡張するためのガイド、API リファレンス、サンプルコード。
  - [ArcGIS Pro SDK for Microsoft .NET](https://pro.arcgis.com/en/pro-app/latest/sdk/) - ArcGIS Pro デスクトップを拡張するためのドキュメント、チュートリアル、API リファレンス、FAQ など。

- 旧SDK：
  - [ArcGIS Maps SDK for Java](https://developers.arcgis.com/java/) - デスクトップアプリを構築するためのガイド、サンプルコード、API リファレンス。
  - [ArcObjects SDK for .NET](https://desktop.arcgis.com/en/arcobjects/latest/net/webframe.htm#RoadmapToExtendingArcObjects.htm) - ArcGIS の基礎となる Component Object Model (COM) コンポーネントのライブラリ向けの .NET SDK に関するドキュメント。
  - [ArcObjects SDK for Java](https://desktop.arcgis.com/en/arcobjects/latest/java/#80146cac-6b50-4c82-a9f5-7a5be3406c5b.htm) - ArcGIS の基礎となる Component Object Model (COM) コンポーネントのライブラリ向けの Java SDK に関するドキュメント。

## アプリケーションジェネレーターとCLI

- [@arcgis/cli](https://github.com/Esri/arcgis-js-cli) - ArcGIS API for JavaScriptを使う各種アプリのひな形を生成。
- [generator-esri-appbuilder-js](https://github.com/Esri/generator-esri-appbuilder-js) - EsriのWeb AppBuilderをカスタマイズするためのYeoman生成器。
- [koop-cli](https://github.com/koopjs/koop-cli) - Koopアプリやプラグインのひな形を生成するツール。

## ArcGIS位置情報サービス

- [ArcGIS位置情報サービスのPostmanワークスペース](https://www.postman.com/esridevs/workspace/arcgis-location-services) - 多数の位置情報サービスとの作業を円滑にする Postman コレクション。
- [Basemap styles service (v1)](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/services/basemap-layer-service/) - マップおよびシーンに使用できるストリート、衛星、その他ベースマップスタイルにアクセス。
- [Basemap styles service (v2)](https://developers.arcgis.com/rest/basemap-styles/) - 複数の地図スタイルを利用し、関心地点の追加、ラベル言語やworldviewの設定などを行う。
- [Places service](https://developers.arcgis.com/rest/places/) - 世界各地の事業所や地理的な場所を検索し、各地点の詳細情報を取得。
- [Elevation service](https://developers.arcgis.com/documentation/mapping-and-location-services/elevation/) - 平均海面または地表面を基準に、ある地点が上下にどれだけ離れているかを垂直距離（高さ）として取得。
- [Hydrology analysis service](https://developers.arcgis.com/rest/elevation-analysis/hydrology-analysis-service/) - 水の流れを追跡し、流域を生成。
- [Geocoding service](https://developers.arcgis.com/documentation/mapping-apis-and-services/search/services/geocoding-service/) - 世界各地の住所、事業所、場所を検索。
- [GeoEnrichment service](https://developers.arcgis.com/documentation/mapping-apis-and-services/demographics/services/geoenrichment-service/) - 場所やエリアに関する事実や人口統計情報を取得できる。
- [Routing service](https://developers.arcgis.com/documentation/mapping-apis-and-services/routing/services/routing-service/) - 曲がり角ごとの経路案内を取得し、高度な経路探索問題を解く。
- [Printing tools service](https://developers.arcgis.com/rest/services-reference/enterprise/export-web-map-task.htm) - 高度なウェブマップから静的マップ（png、jpg、pdf など）を生成できる。

- [Spatial analysis service](https://developers.arcgis.com/rest/analysis/) - 空間データセットを処理して関係性やパターンを発見する。
- [Offline packaging service](https://developers.arcgis.com/rest/packaging/api-reference/create-map-area.htm) - 事前に計画された地図領域の作成と管理を行い、オフライン地図を生成する。

## コードサンプルとスニペット

- [ArcGIS Code Sharing](http://codesharing.arcgis.com/) - コード、スクリプト、モデル、アドイン、ウィジェットなどを検索・閲覧・利用。
- [Esri/developer-support](https://github.com/Esri/developer-support) - 各種ArcGIS開発製品（Python、.NET、JavaScript、Androidなど）向けのコミュニティサンプル。
- [esrinederland/CoolScripts](https://github.com/esrinederland/CoolScripts) - Esri Netherlandsのスクリプトとスニペット（再利用用）。
- [Esri GermanyのGitHub組織](https://github.com/EsriDE) - Esri Deutschlandによるコードサンプル、ツールなど。
- [EsriJapan/arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources) - ArcGIS Developers開発リソース集（Esri Japanによる）。
- .NET：
  - [ArcGIS Maps SDK for .NET MAUIのサンプル](https://developers.arcgis.com/net/maui/sample-code/) - EsriのArcGIS Maps SDK MAUI製品チームによる公式サンプル。
  - [ArcGIS Maps SDK for .NET UWPのサンプル](https://developers.arcgis.com/net/uwp/sample-code/) - EsriのArcGIS Maps SDK for .NET製品チームによる公式サンプル。
  - [ArcGIS Maps SDK for .NET WinUIのサンプル](https://developers.arcgis.com/net/winui/sample-code/) - EsriのArcGIS Maps SDK for .NET製品チームによる公式サンプル。
  - [ArcGIS Maps SDK for .NET WPFのサンプル](https://developers.arcgis.com/net/wpf/sample-code/) - EsriのArcGIS Maps SDK for .NET製品チームによる公式サンプル。
- Android：
  - [ArcGIS Maps SDK for Kotlinのサンプル](https://developers.arcgis.com/kotlin/sample-code/) - EsriのArcGIS Maps SDK for Kotlin製品チームによる公式サンプル。
- Arcade：
  - [ArcGIS Arcade式のテンプレート](https://github.com/Esri/arcade-expressions) - サポートされるすべてのプロファイルで再利用できるArcade式。
- iOS：
  - [ArcGIS Maps SDK for iOSのサンプルコード](https://developers.arcgis.com/ios/swift/sample-code/) - EsriのArcGIS Maps SDK for iOS製品チームによる公式サンプル。
- JavaScript：
  - [ArcGIS API for JavaScriptのサンプルコード](https://developers.arcgis.com/javascript/latest/sample-code/) - EsriのJavaScript API製品チームによる公式サンプル。
  - [ArcGIS REST JSのデモ](https://github.com/Esri/arcgis-rest-js/tree/master/demos) - EsriのREST JSメンテナーが開発したデモアプリ。
  - [arcgis-js-api-starter-apps](https://github.com/hhkaos/arcgis-js-api-starter-apps) - ArcGIS API for JavaScript 4.xを使い始めるためのひな形。
  - [Esri/arcgis-js-vscode-snippets](https://github.com/Esri/arcgis-js-vscode-snippets) - ArcGIS API for JavaScriptの一般的なコードパターン向けのVisual Studio Codeスニペットのコレクション。
  - [Esri/jsapi-resources](https://github.com/Esri/jsapi-resources) - ArcGIS API for JavaScriptを使用する開発者のためのリソースのコレクション。
  - [RalucaNicola/code-snippets-arcgis-api-js](https://github.com/RalucaNicola/code-snippets-arcgis-api-js) - ArcGIS API for JavaScriptのコードスニペットのコレクション。
- Python：
  - [ArcGIS API for Pythonのサンプルノートブック](https://developers.arcgis.com/python/sample-notebooks/) - EsriのPython API製品チームによる公式サンプル。
  - [esrinederland/CoolMaps](https://github.com/esrinederland/CoolMaps) - 再利用できる地図の実例。
- Qt：
  - [ArcGIS Maps SDK for Qt C++のサンプルコード](https://developers.arcgis.com/qt/cpp/sample-code/) - EsriのArcGIS Maps SDK for Qt製品チームによる公式C++サンプル。
- Unity：
  - [ArcGIS Maps SDK for Unityのサンプル](https://developers.arcgis.com/unity/sample-code/) - EsriのArcGIS Maps SDK for Unity製品チームによる公式サンプル。
- Unreal：
  - [ArcGIS Maps SDK for Unreal Engineのサンプル](https://developers.arcgis.com/unreal-engine/sample-code/) - EsriのArcGIS Maps SDK for Unreal Engine製品チームによる公式サンプル。

## データ変換ツール

- 中核地理空間処理ライブラリ：
  - [ArcPy](https://pro.arcgis.com/en/pro-app/arcpy/main/arcgis-pro-arcpy-reference.htm) - ArcGIS地理処理フレームワークへのPythonインターフェース。空間解析、データ管理、マッピングを自動化。
  - [gdal](https://github.com/OSGeo/gdal) - ラスターとベクターの地理空間データ形式を変換するライブラリ。
  - [loam](https://github.com/azavea/loam) - ブラウザ上でGDALをラップするJavaScriptライブラリ。
- 形式変換：
  - [arcgis-json-to-geojson](https://github.com/gavinr/arcgis-json-to-geojson) - ArcGIS JSON規格のレイヤーをGeoJSON規格に変換。
  - [csv2geojson](https://viglino.github.io/ol-ext/examples/misc/csv2geojson.html) - CSV形式のポイントをGeoJSONに変換。
  - [geojson2svg](https://github.com/w8r/geojson2svg) - インラインまたは外部スタイルシートを使い、GeoJSONをSVGへ描画。
  - [geojsonio](https://github.com/ropensci/geojsonio) - 各種データ形式とGeoJSON・TopoJSONとの双方向変換。
  - [gtfs2geojson](https://github.com/node-geojson/gtfs2geojson) - GTFSデータをGeoJSONに変換。
  - [img2geojson](https://github.com/caseymm/img2geojson/) - 画像をマップにドラッグして、必要な経路をトレースし、GeoJSONとしてエクスポート。
  - [terraformer](https://github.com/terraformer-js/terraformer) - ArcGIS JSONとGeoJSON、およびWKTジオメトリとGeoJSONジオメトリを双方向に変換。その他の形式にも対応。
  - [togeojson](https://mapbox.github.io/togeojson/) - KMLとGPXをGeoJSONへ変換。
  - [tokml](https://github.com/mapbox/tokml) - GeoJSONをKMLに変換。
- 簡略化と総描：
  - [Distillery](http://shancarter.github.io/distillery/) - TopoJSONを簡略化・投影するウェブアプリケーション。
  - [フィーチャサービスレイヤー](https://developers.arcgis.com/rest/services-reference/enterprise/query-feature-service-layer-.htm) - `maxAllowableOffset`パラメーターを`query`操作で使い、総描したジオメトリを返す。
  - [Generalizeメソッド](https://esri-es.github.io/arcgis-search/?search=geometryEngine.generalize#gsc.tab=0&gsc.q=%22generalize%22%20site:developers.arcgis.com&gsc.sort=) - GeometryEngineで頂点数を減らしたジオメトリをプログラムから生成。JavaScript、iOS、Android、.NET、Qt、Javaの各APIが対応。
  - [PostGIS ST_Simplify](https://postgis.net/docs/ST_Simplify.html) - Douglas-Peuckerアルゴリズムで、指定したジオメトリを簡略化して返す。
  - [Mapshaper](https://github.com/mbloch/mapshaper) - 形状の簡略化、属性データの編集、クリップ、消去、融合（ディゾルブ）、フィルター処理などを行うWebアプリ。Shapefile、GeoJSON、TopoJSON、CSVに対応。

## データ統合ツール

- [ArcGIS Data Interoperability Extension](https://esri-es.github.io/awesome-arcgis/arcgis/products/extensions/data-interoperability/) - 400以上のデータ形式を変換するデスクトップツール。
- [FME Server](https://www.safe.com/integrate/) - ほぼあらゆるデータセットとArcGIS対応形式を双方向に変換するETL。500以上の形式・技術に対応。
- [Koop](https://koopjs.github.io) - 空間APIを接続するJavaScriptツールキット。地理空間データをその場で変換し、GeoJSON、ベクタータイル、フィーチャサービスなどとして提供。
- [Make.com](https://www.make.com/en/integrations/survey123) - Survey123の利用に伴う反復作業を自動化するiPaaS。
- [node-red-contrib-arcgis-rest](https://flows.nodered.org/node/node-red-contrib-arcgis-rest) - JS Foundationのイベント駆動アプリケーションで、ローコードプログラミングによりデータをクエリ、削除、更新、挿入可能。
- [Zapier for ArcGIS](https://marketplace.arcgis.com/listing.html?id=5ab7936269f8449b82b0f5c78695ab38) - コードを書かずにサービス連携を自動化するiPaaS。
- [Tray.io](https://tray.io/connectors/arcgis-integrations) - Tray PlatformのArcGISコネクタで、編集の適用、フィーチャやレイヤーの取得などを実行。手動・スケジュール・Webhookの各トリガーを利用。

## デバッグツール

- [cors-test.codehappy.dev](https://cors-test.codehappy.dev/) - CORSリクエストをテストするアプリ。
- [Fiddler Classic](https://www.telerik.com/fiddler/fiddler-classic) - HTTP(s)ネットワークトラフィックをログに記録するWindowsツール。
- [GeoJSONLint](https://geojsonlint.com/) - GeoJSONの検証と表示。
- [json-schema.org](https://json-schema.org/) - JSON文書への注釈付けと検証に使う語彙。複数のバリデーターへの案内も含む。
- [mapbox/geojson-vt/debug](http://mapbox.github.io/geojson-vt/debug/) - GeoJSONまたはTopoJSONの検証。
- [Postman interceptor](https://www.postman.com/product/postman-interceptor/) - インターセプターにより、ブラウザのクッキーを同期し、Chromeからネットワークリクエストを直接キャプチャ可能。
- [netbalancer.com](https://netbalancer.com/) - ローカルネットワークトラフィックの制御と監視を行うWindowsアプリケーション。

## デザインとスタイリング

- ベストプラクティス、書籍、動画、研修：
  - [Cartography and Making Stunning Maps](https://www.youtube.com/watch?v=AGf_DjZZwXc) - 異なるブレンドモード効果を使って達成可能な例を示す短い動画。
  - [How to style using ArcGIS Online](https://www.youtube.com/watch?v=6vy-kVkIcRg&list=PLPjPOZQjCWEn6ezKrwN11L8NWhZ2JdpYd) - ArcGISのスタイル機能を紹介する短い動画のコレクション。
  - [Photoshop-style Graphics Effects for Your Layers and Data](https://www.youtube.com/watch?v=crmWm80hwKI) - ArcGIS API for JavaScript 4.xでWebマップを作るために、ブレンドモード、レイヤー効果、フィーチャ効果の使い方を説明する動画。
  - [MapUIPatterns](https://www.mapuipatterns.com/) - ベストプラクティスおよびデザイン原則。UIパターンは、観察され、繰り返されるデザイン問題に対する解決策を説明。
- 開発者ツール：
  - [Calcite Design System](https://developers.arcgis.com/calcite-design-system/) - 地図用アイコン、Webコンポーネント、実践方法をまとめた資料。
  - [Calcite Intellisense Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=K-Dev.calcite-intellisense) - Esri公式のカスタムデータJSONを使い、Calcite Design SystemのWebコンポーネントにHTML IntelliSense（補完、ホバー表示、ドキュメント）を提供。
  - [Calcite Snippets Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=K-Dev.calcite-snippets) - Visual Studio CodeでCalciteを使うWebアプリを開発するための、Calcite Design Systemコンポーネント向けコードスニペット。

  - [geojson2svg](https://github.com/w8r/geojson2svg) - インラインまたは外部スタイルシートを使い、GeoJSONをSVGへ描画。
- GUI：
  - [ArcGIS Vector Tile Style Editor](https://developers.arcgis.com/documentation/mapping-apis-and-services/tools/vector-tile-style-editor/) - アプリ用のベクタータイルベースマップレイヤーをスタイリング。
  - [arcgis-vectortile-style-editor](https://github.com/Esri/arcgis-vectortile-style-editor) - EsriのベクターベースマップのスタイルをJSONで更新する簡素なツール。
  - [EsriUK mapstyler](https://github.com/EsriUK/mapstyler) - 画像を使い、Esriのベクタータイルレイヤーをスタイリング。

## 開発者ガイド

- [コンテンツ管理](https://developers.arcgis.com/documentation/mapping-apis-and-services/content-management/) - 非公開・公開コンテンツを保存、管理、参照。
- [データホスティング](https://developers.arcgis.com/documentation/mapping-apis-and-services/data-hosting/) - データをデータサービスとして保存、管理、参照。
- [人口統計](https://developers.arcgis.com/documentation/mapping-apis-and-services/demographics/) - GeoEnrichmentサービスで地域の情報や人口統計を取得。
- [ジオコーディング](https://developers.arcgis.com/documentation/mapping-apis-and-services/search/) - ジオコーディングサービスで住所、事業所、関心地点（POI）を検索。
- [地図](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/) - ベースマップレイヤーサービスとデータサービスを使い、2D地図と3Dシーンを表示。
- [オフライン](https://developers.arcgis.com/documentation/mapping-apis-and-services/offline/) - ネットワークに接続せずにデータを表示、解析、編集。
- [経路探索](https://developers.arcgis.com/documentation/mapping-apis-and-services/routing/) - ルーティングサービスで経路と道順を取得。
- [セキュリティと認証](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/) - APIキーとOAuth 2.0でサービスやコンテンツにアクセス。
- [可視化](https://developers.arcgis.com/documentation/mapping-apis-and-services/visualization/) - レイヤーをスタイリングし、2D・3Dでデータを可視化。

## ヘルパー

- [arcgis-geometry-calculations](https://github.com/hhkaos/arcgis-geometry-calculations) - ArcGISのジオメトリ計算を作成・取得するWebアプリ。
- [arcgis-js-api-camera-helper](https://github.com/pjmclaughlin1979/arcgis-js-api-camera-helper) - ArcGIS API for JavaScript 4.xの3D Webアプリ用に、カメラ位置のJSONオブジェクトを取得するWebアプリ。
- [arcgis-js-api-extent-helper](https://arcgis-js-api-extent-helper.gavinr.com/) - ArcGIS API for JavaScript 4.xのWebアプリ用に、地図範囲のJSONオブジェクトを取得するWebアプリ。
- [ArcGIS JS API Module Butler](https://marketplace.visualstudio.com/items?itemName=ScottDavis.vscode-arcgis-js-api-module-butler&ssr=false#overview) - 現在のコードの文脈を離れずに、@arcgis/coreパッケージのES import文を追加するVSCode拡張。
- [epsg.io](https://github.com/maptiler/) - 世界各地の座標系を調べ、変換するWebサイト。
- [esri-loader](https://github.com/Esri/esri-loader) - JavaScriptフレームワークやバンドラーで構築したアプリで、CDNのArcGIS API for JavaScriptを遅延読み込みするライブラリ。
- [esri-loader-hooks](https://github.com/tomwayson/esri-loader-hooks) - esri-loaderを使ってArcGIS API for JavaScriptを利用するためのカスタムReact Hook。
- [geojson-random-generator](https://github.com/erick-otenyo/geojson-random-generator) - テスト用のランダムGeoJSONを生成・ダウンロード。
- [reducegeojson](https://github.com/radical-data/reducegeojson) - Web向けにGeoJSONのファイルサイズを減らすツール。
- [histogrand](https://github.com/hhkaos/histogrand) - カスタマイズされたヒストグラムに基づくランダム値生成器。
- [mercator-geographic-converter](https://github.com/hhkaos/mercator-geographic-converter/) - 地理座標（緯度、経度）とメルカトル座標（x、y）の間の座標変換ツール。
- [react-sceneview](https://github.com/Esri/react-sceneview) - ArcGIS API for JavaScriptを利用するEsri SceneViewのReactコンポーネント。
- [bboxfinder](http://bboxfinder.com/) - 地図上に描いたバウンディングボックスの座標を取得するWebアプリ。
- [クライアント側ラスター関数のスニペット](https://ubatsukh.github.io/arcgis-js-api-demos/clientside-rasterfunctions/index.html) - クライアントサイドのラスターファンクションは、元の画像ピクセルに直接処理を適用する操作。

## 地図とデータの探索

- [ArcGIS Map Viewer](https://www.arcgis.com/apps/mapviewer/index.html) - 2Dアプリケーション向けに、ウェブマップを作成・探索・共有できるウェブアプリ。
- [ArcGIS Map Viewer（クラシック版）](https://arcgis.com/home/webmap/viewer.html) - 2Dアプリケーション向けに、ウェブマップを作成・探索・共有できるウェブアプリ。
- [ArcGIS Scene Viewer](https://www.arcgis.com/home/webscene/viewer.html) - 3Dアプリ用のWebマップを作成、探索、共有するWebアプリ。
- [Geo Data Viewer](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.geo-data-viewer) - 地理データ解析用のVSCode拡張。マップの生成と表示をサポート。
- [geojson.io](https://github.com/mapbox/geojson.io) - 地理空間ベクターデータを可視化、生成、編集するWebアプリ。GeoJSON、TopoJSON、CSV、KML、WKT、Shapefileに対応。
- [gpxstudio](https://github.com/gpxstudio/gpxstudio.github.io) - オンラインかつオープンソースのGPXファイルエディタ。
- [Mapshaper](https://github.com/mbloch/mapshaper) - 形状の簡略化、属性データの編集、クリップ、消去、融合（ディゾルブ）、フィルター処理などを行うWebアプリ。Shapefile、GeoJSON、TopoJSON、CSVに対応。
- [Smart Mapping](https://www.esri.com/en-us/smart-mapping) - Map ViewerとScene Viewerに組み込まれた機能。JavaScriptやPythonなどの一部APIにも、データ探索ツールの開発を支援するユーティリティがある。
- [VSCode Map Preview](https://marketplace.visualstudio.com/items?itemName=jumpinjackie.vscode-map-preview) - 地理空間データファイル（GeoJSON、KMLなど）の内容を地図上でプレビューする拡張。

## プレイグラウンド

- [arcgis-arcade-playground](https://developers.arcgis.com/arcade/playground/) - ArcGISで独自の可視化やラベル式を作成するための、移植可能なスクリプト言語を試せる。
- [cim-symbol-builder](https://github.com/Esri/cim-symbol-builder-js) - ArcGISクライアントAPIやフィーチャサービスで使うCIMシンボルを生成。
- [geometry-inspector](http://brianbunker.github.io/geometry-inspector/) - EsriJSON・GeoJSON・WKTを地図上に表示し、逆に地図上に描いた形状からこれらのデータを取得。
- [js-symbol-playground 3.x](https://developers.arcgis.com/javascript/3/samples/playground/index.html) - ArcGIS API for JavaScript 3.x との連携に使用できるシンボルの生成。
- [js-symbol-playground 4.x](https://developers.arcgis.com/javascript/latest/sample-code/playground/live/) - ArcGIS API for JavaScript 4.x との連携に使用できるシンボルの生成。
- [Postman workspaces](https://www.postman.com/esridevs) - 位置情報サービスと認証を試せるPostmanコレクション。
- [Firefly Symbols Generator](https://vannizhang.github.io/firefly-symbols-generator/dist/) - Fireflyシンボル生成。

## 空間解析

- [ArcGIS Analysis services](https://developers.arcgis.com/rest/analysis-services/) - 空間、ラスター、標高、水文、ユーティリティネットワークの解析。
- [Esri/gis-tools-for-hadoop](https://github.com/Esri/gis-tools-for-hadoop) - 大規模データの空間分析に用いるGISツールのコレクション。
- [Esri/spatial-framework-for-hadoop](https://github.com/Esri/spatial-framework-for-hadoop) - 開発者およびデータサイエンティストが空間データ分析にHadoopデータ処理システムを使用できるようにする。
- [クライアント側Geometry Engine](https://esri-es.github.io/arcgis-search/?search=geometry+engine&utm_source=chrome-extension#gsc.tab=0&gsc.q=geometry%20engine%20site:developers.arcgis.com&gsc.sort=) - 空間関係の判定、新しいジオメトリの計算、長さ・面積・距離などの測定。
  - [ArcGIS API for JavaScript `geometryEngine`](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html) - ブラウザおよびNode.jsで動作する。
  - [ArcGIS API for Python `arcgis.geometry`](https://developers.arcgis.com/python/api-reference/arcgis.geometry.html)
  - [ArcGIS Maps SDK for .NET `GeometryEngine`](https://developers.arcgis.com/net/api-reference/api/netwin/Esri.ArcGISRuntime/Esri.ArcGISRuntime.Geometry.GeometryEngine.html)
  - [ArcGIS Maps SDK for Android `GeometryEngine`](https://developers.arcgis.com/android/api-reference/reference/com/esri/arcgisruntime/geometry/GeometryEngine.html)
  - [ArcGIS Maps SDK for iOS `AGSGeometryEngine`](https://developers.arcgis.com/ios/api-reference/interface_a_g_s_geometry_engine.html)
  - [ArcGIS Maps SDK for Qt `GeometryEngine`](https://developers.arcgis.com/qt/cpp/api-reference/esri-arcgisruntime-geometryengine.html)
- [Turf.js](https://github.com/Turfjs/turf) - ブラウザおよびNode.js向けの地理空間分析。

## 仕様

- [Cartographic Information Model仕様](https://github.com/Esri/cim-spec) - GISデータセットの地図表現をJSONで記述したものを保持および転送するためのマップコンテンツ仕様。
- [共通データ型](https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm) - ArcGIS REST APIが返すジオメトリおよび空間参照オブジェクトのJSONフォーマット：ポイント、マルチポイント、ポリライン、ポリゴン、エンベロープ。
- [GeoServices仕様](https://github.com/koopjs/FeatureServer) - Esriが利用する構造化地理空間データへの完全なアクセスを提供する、Open Web FoundationのRESTベースAPI。
- [Indexed 3D Scene Layers](https://github.com/Esri/i3s-spec) - 任意の大きさの地理データを格納するコンテナのサービス・パッケージ標準。
- [Shapefile形式](https://www.esri.com/content/dam/esrisites/sitecore-archive/Files/Pdfs/library/whitepapers/pdfs/shapefile.pdf) - GISソフトウェア用の地理空間ベクターデータフォーマットの仕様。
- [空間参照の仕様](https://developers.arcgis.com/documentation/spatial-references/#spatial-reference-specifications) - 空間参照を定義するためのWell-Known ID (WKID)整数値またはWell-Known Text (WKT)と呼ばれるテキスト文字列のリスト。
- [タイルパッケージ仕様](https://github.com/Esri/tile-package-spec) - タイルとタイルスキームを含む圧縮ファイルで、ArcGISアプリケーションにおけるベースマップとして使用できる。
- [Web Map仕様](https://developers.arcgis.com/web-map-specification/) - 共有可能な2Dマップ。ウェブマップを定義するJSONオブジェクトを説明する。
- [Web Scene仕様](https://developers.arcgis.com/web-scene-specification/) - 共有可能な3Dシーンのコンテンツ（視点、カメラ、ベースマップレイヤー、レイヤー、スタイルなど）を定義するJSON構造。

## 関連Awesomeリスト

- [awesome-arcgis](https://github.com/esri-es/awesome-arcgis/) - EsriとArcGISの資料を製品、業界、ファイル形式、コンテンツ提供者などで分類したウィキ形式のリスト。
- [awesome-earthobservation-code](https://github.com/acgeospatial/awesome-earthobservation-code) - 地球観測および地理空間関連のツール、チュートリアル、コード、役立つプロジェクト、リンク。
- [awesome-geojson](https://github.com/tmcw/awesome-geojson) - GeoJSONユーティリティ：操作、編集器・閲覧器、検証、サービス、変換など。
- [awesome-geospatial](https://github.com/sacridini/Awesome-Geospatial) - データベース、レーダー、LiDAR、ウェブマップ開発など。
- [awesome-gis](https://github.com/sshuair/awesome-gis) - GIS、リモートセンシング、3Dアプリ、ウェブマップサーバー、地理空間ライブラリ、オープンスタンダード、データなど。
- [awesome-json-datasets](https://github.com/jdorfman/awesome-json-datasets) - 認証不要のJSONデータセット：気候、犯罪、政府、NASA、旅行など。
- [awesome-open-geoscience](https://github.com/softwareunderground/awesome-open-geoscience) - 地球科学者、ハッカー、データ整形・加工に携わる人向けのリポジトリ。
- [awesome-public-datasets](https://github.com/awesomedata/awesome-public-datasets) - 主題別に整理したオープンデータセット。
- [awesome-remote-sensing-change-detection](https://github.com/wenhwu/awesome-remote-sensing-change-detection) - リモートセンシングの変化検出に関連するデータセット、コード、コンテストのリスト。
- [awesome-satellite-imagery-datasets](https://github.com/chrieke/awesome-satellite-imagery-datasets) - コンピュータビジョンおよびディープラーニング向けの衛星画像トレーニングデータセットとアノテーションのリスト。
- [awesome-semantic-segmentation](https://github.com/mrgloom/awesome-semantic-segmentation) - アーキテクチャ別のネットワーク（セマンティックセグメンテーション、インスタンスを識別するセグメンテーションなど）、RNN、GAN、データセットなど。
- [awesome-vector-tiles](https://github.com/mapbox/awesome-vector-tiles) - Mapbox Vector Tile仕様の実装。パーサー、生成器、クライアント、アプリ、コマンドラインツール、CLIユーティリティ、サーバーなど。
