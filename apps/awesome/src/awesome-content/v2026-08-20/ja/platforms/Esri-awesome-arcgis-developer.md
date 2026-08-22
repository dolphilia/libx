---
title: "Esri/awesome-arcgis-developer"
description: "Esri/awesome-arcgis-developer の定本スナップショット"
licenseSource: "github-Esri-awesome-arcgis-developer-readme-md"
---


# Awesome ArcGIS Developers [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)


<img src="esri-logo.png" align="right" width="100">

> [ArcGIS製品を使った開発](https://www.esri.com/en-us/arcgis/products/develop-with-arcgis/overview)に役立つ優れたリソース集です。

ArcGIS製品は、地図・空間解析アプリケーションを開発するためのAPI、位置情報サービス、ツールを提供します。ウェブ、ネイティブ、オフライン、デスクトップ、統合型の各種ソリューションを構築でき、ベースマップ、ジオコーディング、ルーティングなどの地理空間機能を利用できます。データはArcGISクラウドで安全にホスト・管理できます。

---

## 目次




- [APIとSDK](#apis-and-sdks)
- [アプリケーションジェネレーターとCLI](#application-generators-and-clis)
- [ArcGIS位置情報サービス](#arcgis-location-services)
- [コードサンプルとスニペット](#code-samples-and-snippets)
- [データ変換ツール](#data-conversion-tools)
- [データ統合ツール](#data-integration-tools)
- [デバッグツール](#debugging-tools)
- [デザインとスタイリング](#design-and-styling)
- [開発者ガイド](#developer-guides)
- [ヘルパー](#helpers)
- [地図とデータの探索](#map-and-data-exploration)
- [プレイグラウンド](#playgrounds)
- [空間解析](#spatial-analysis)
- [仕様](#specifications)



---

## APIとSDK

- ArcGIS中核APIとライブラリ：
	- [ArcGIS API for Python](https://developers.arcgis.com/python/) - マッピング、空間分析、データサイエンス、地理空間AI、自動化をPythonで行うためのガイド、サンプルノートブック、APIリファレンス
	- [ArcGIS REST APIs](https://developers.arcgis.com/rest/) - ArcGIS REST APIに関する一般ドキュメンテーション：位置サービス、コンテンツ管理、ポータル管理など
	- [ArcGIS REST APIs collections](https://github.com/esri-es/ArcGIS-REST-API) - PostmanコレクションでREST API（位置サービス、ホストされた特徴レイヤー、ArcGIS Online、ArcGIS Hubなど）と対話するためのもの
	- [ArcGIS REST JS](https://developers.arcgis.com/arcgis-rest-js/) - 位置サービス、ArcGIS Online、ArcGIS EnterpriseのREST APIにアクセスするためのJavaScriptモジュールのコレクションに関するキーテンプ、チュートリアル、APIリファレンス
	- [ArcGIS Urban API](https://developers.arcgis.com/arcgis-urban-api/) - ArcGIS Urbanデータに直接アクセスできる公開GraphQLウェブサービス
	- [ArcPy](https://pro.arcgis.com/en/pro-app/arcpy/main/arcgis-pro-arcpy-reference.htm) - ArcGIS DesktopまたはArcGIS Enterprise環境で地理データの分析、データ変換、データ管理、マップ自動化を行うためのPythonパッケージに関するドキュメンテーション

- Esriクライアント側SDK：
	- [ArcGIS Maps SDK for .NET](https://developers.arcgis.com/net/) - .NETを使ってデスクトップおよびモバイルアプリを開発するためのガイド、サンプルコード、APIリファレンス
	- [ArcGIS Maps SDK for Flutter](https://developers.arcgis.com/flutter/) - Flutterを使ってデスクトップおよびモバイルアプリを開発するためのガイド、サンプルコード、APIリファレンス
	- [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/) - 2Dおよび3Dのインタラクティブウェブアプリを構築し、地理空間データを解き明かすためのガイド、サンプルコード、APIリファレンス、デモンストレーション
	- [ArcGIS Maps SDK for Kotlin](https://developers.arcgis.com/kotlin/) - Kotlinを使ってモバイルアプリを開発するためのガイド、サンプルコード、APIリファレンス
	- [ArcGIS Maps SDK for Qt](https://developers.arcgis.com/qt/) - モバイルおよびデスクトップアプリを開発するためのガイド、サンプルコード、APIリファレンス
	- [ArcGIS Maps SDK for Swift](https://developers.arcgis.com/swift/) - Swiftを使ってモバイルアプリを開発するためのガイド、サンプルコード、APIリファレンス
	- [ArcGIS Maps SDK for Unity](https://developers.arcgis.com/unity/) - UnityでArcGISデータとサービスを使用して開発するためのガイド、APIリファレンス、サンプルコード
	- [ArcGIS Maps SDK for Unreal Engine](https://developers.arcgis.com/unreal-engine/) - Unreal EngineでArcGISデータとサービスを使用して開発するためのガイド、APIリファレンス、サンプルコード

- 統合とプラグイン（サードパーティーライブラリ）：
	- [ArcGIS integrations with CesiumJS](https://developers.arcgis.com/cesiumjs/) - CesiumJSとArcGISを使ってマッピングアプリケーションを開発するためのガイドおよびチュートリアル
	- [ArcGIS integrations with MapLibre GL JS](https://developers.arcgis.com/maplibre-gl-js/maplibre-arcgis-plugin/) - MapLibre GL JSアプリとArcGISサービスを接続する方法を学ぶためのEsriが維持するArcGIS MapLibreプラグインおよびArcGIS REST JSを使用するチュートリアル、APIリファレンス、サンプルコード
	- [ArcGIS integrations with OpenLayers](https://developers.arcgis.com/openlayers/) - OpenLayersとArcGIS位置サービスを使ってウェブアプリを開発するためのガイドおよびチュートリアル
	- [ArcGIS integrations with Leaflet](https://developers.arcgis.com/esri-leaflet/) - LeafletアプリとArcGISサービスを接続する方法を学ぶためのEsriが維持するEsri LeafletプラグインおよびArcGIS REST JSを使用するチュートリアル、APIリファレンス、サンプルコード
	- [Esri-gl](https://github.com/muimsd/esri-gl) - Mapbox GL JSおよびMapLibre GL JSアプリケーションでArcGISサービスを使用できるようにするコミュニティが維持するプラグイン

- ArcGIS製品拡張用SDK：
	- [ArcGIS CityEngine SDKs (C++)](https://github.com/esri/cityengine-sdk) - Procedural Runtime (PRT)のC++ API、ドキュメンテーション、例
	- [ArcGIS CityEngine SDKs (Python)](https://github.com/Esri/pyprt) - CityEngine の *Procedural Runtime* (PRT) 用の Python バインディング。
	- [ArcGIS Earth Automation API](https://doc.arcgis.com/en/arcgis-earth/automation-api/get-started.htm) - ArcGIS Earth との通信に関するガイド、API リファレンス、サンプルコード。
	- [ArcGIS Enterprise SDK](https://developers.arcgis.com/enterprise-sdk/) - ArcGIS Enterprise を拡張するためのガイド、API リファレンス、サンプルコード。
	- [ArcGIS Pro SDK for Microsoft .NET](https://pro.arcgis.com/en/pro-app/latest/sdk/) - ArcGIS Pro デスクトップを拡張するためのドキュメント、チュートリアル、API リファレンス、FAQ など。

- 旧SDK：
	- [ArcGIS Maps SDK for Java](https://developers.arcgis.com/java/) - デスクトップアプリを構築するためのガイド、サンプルコード、API リファレンス。
	- [ArcObjects SDK for .NET](https://desktop.arcgis.com/en/arcobjects/latest/net/webframe.htm#RoadmapToExtendingArcObjects.htm) - ArcGIS の基礎となる Component Object Model (COM) コンポーネントのライブラリ向けの .NET SDK に関するドキュメント。
	- [ArcObjects SDK for Java](https://desktop.arcgis.com/en/arcobjects/latest/java/#80146cac-6b50-4c82-a9f5-7a5be3406c5b.htm) - ArcGIS の基礎となる Component Object Model (COM) コンポーネントのライブラリ向けの Java SDK に関するドキュメント。

## アプリケーションジェネレーターとCLI

- [@arcgis/cli](https://github.com/Esri/arcgis-js-cli) - ArcGIS API for JavaScript 用のさまざまなアプリケーションを迅速にスケルトン化する機能。
- [generator-esri-appbuilder-js](https://github.com/Esri/generator-esri-appbuilder-js) - Esri の Web AppBuilder をカスタマイズするための Yeoman 生成器。
- [koop-cli](https://github.com/koopjs/koop-cli) - Koop アプリケーションおよびプラグインをスケルトン化するツール。

## ArcGIS位置情報サービス

- [ArcGIS location services Postman Workspace](https://www.postman.com/esridevs/workspace/arcgis-location-services) - 多数の位置サービスとの作業を円滑にする Postman コレクション。
- [Basemap styles service (v1)](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/services/basemap-layer-service/) - マップおよびシーンに使用できるストリート、衛星、その他ベースマップスタイルにアクセス。
- [Basemap styles service (v2)](https://developers.arcgis.com/rest/basemap-styles/) - 複数のマップスタイルにアクセスし、関心の場所を追加、ラベルの言語やワードビューなどを設定できる。
- [Places service](https://developers.arcgis.com/rest/places/) - 世界中の事業や地理的な場所を詳細な情報とともに検索できる。
- [Elevation service](https://developers.arcgis.com/documentation/mapping-and-location-services/elevation/) - 場所の垂直距離（高さ）を、平均海面または地面レベルに対して上または下で取得できる。
- [Hydrology analysis service](https://developers.arcgis.com/rest/elevation-analysis/hydrology-analysis-service/) - 水の流れを追跡し、水系を生成できる。
- [Geocoding service](https://developers.arcgis.com/documentation/mapping-apis-and-services/search/services/geocoding-service/) - 世界中の住所や事業、場所を検索できる。
- [GeoEnrichment service](https://developers.arcgis.com/documentation/mapping-apis-and-services/demographics/services/geoenrichment-service/) - 場所やエリアに関する事実や人口統計情報を取得できる。
- [Routing service](https://developers.arcgis.com/documentation/mapping-apis-and-services/routing/services/routing-service/) - 行き先ごとの案内を提供し、高度なルート問題を解決できる。
- [Printing tools service](https://developers.arcgis.com/rest/services-reference/enterprise/export-web-map-task.htm) - 高度なウェブマップから静的マップ（png、jpg、pdf など）を生成できる。

- [Spatial analysis service](https://developers.arcgis.com/rest/analysis/) - 空間データセットを処理して関係性やパターンを発見する
- [Offline packaging service](https://developers.arcgis.com/rest/packaging/api-reference/create-map-area.htm) - 事前に計画された地図領域の作成と管理を行い、オフライン地図を生成する

## コードサンプルとスニペット

- [ArcGIS Code Sharing](http://codesharing.arcgis.com/) - コード、スクリプト、モデル、アドイン、ウィジェットなど、検索・閲覧・利用する
- [Esri/developer-support](https://github.com/Esri/developer-support) - すべてのArcGIS開発製品（Python、.NET、JavaScript、Android…）で成功するためのコミュニティサンプル
- [esrinederland/CoolScripts](https://github.com/esrinederland/CoolScripts) - Esri Netherlandsのスクリプトとスニペット（再利用用）
- [Esri Germany Github organization](https://github.com/EsriDE) - Esri Deutschlandによるコードサンプル、ツールなど
- [EsriJapan/arcgis-dev-resources](https://github.com/EsriJapan/arcgis-dev-resources) - ArcGIS Developers開発リソース集（Esri Japanによる）
- .NET:
  	- [ArcGIS Maps SDK for .NET MAUI samples](https://developers.arcgis.com/net/maui/sample-code/) - Esriの公式ArcGIS Maps SDK MAUI製品チームサンプル
	- [ArcGIS Maps SDK for .NET UWP samples](https://developers.arcgis.com/net/uwp/sample-code/) - Esriの公式ArcGIS Maps SDK for .NET製品チームサンプル
 	- [ArcGIS Maps SDK for .NET WinUI samples](https://developers.arcgis.com/net/winui/sample-code/) - Esriの公式ArcGIS Maps SDK for .NET製品チームサンプル
	- [ArcGIS Maps SDK for .NET WPF samples](https://developers.arcgis.com/net/wpf/sample-code/) - Esriの公式ArcGIS Maps SDK for .NET製品チームサンプル
- Android:
	- [ArcGIS Maps SDK for Kotlin samples](https://developers.arcgis.com/kotlin/sample-code/) - Esriの公式ArcGIS Maps SDK for Kotlin製品チームサンプル（Kotlin用）
- Arcade:
  - [ArcGIS Arcade Expression Templates](https://github.com/Esri/arcade-expressions) - すべてのサポートプロファイルで再利用可能なArcade表現のコレクション
- iOS:
	- [ArcGIS Maps SDK for iOS sample code](https://developers.arcgis.com/ios/swift/sample-code/) - Esriの公式ArcGIS Maps SDK for iOS製品チームサンプル
- JavaScript:
	- [ArcGIS API for JavaScript Sample Code](https://developers.arcgis.com/javascript/latest/sample-code/) - Esriの公式JavaScript API製品チームサンプル
	- [ArcGIS REST JS demos](https://github.com/Esri/arcgis-rest-js/tree/master/demos) - EsriのREST JSメンテナーが開発したデモアプリ
	- [arcgis-js-api-starter-apps](https://github.com/hhkaos/arcgis-js-api-starter-apps) - ArcGIS API for JavaScript 4.xで始められるためのボイラプレートのコレクション
	- [Esri/arcgis-js-vscode-snippets](https://github.com/Esri/arcgis-js-vscode-snippets) - ArcGIS API for JavaScriptの一般的なコードパターン向けのVisual Studio Codeスニペットのコレクション
	- [Esri/jsapi-resources](https://github.com/Esri/jsapi-resources) - ArcGIS API for JavaScriptを使用する開発者のためのリソースのコレクション
	- [RalucaNicola/code-snippets-arcgis-api-js](https://github.com/RalucaNicola/code-snippets-arcgis-api-js) - ArcGIS API for JavaScriptのコードスニペットのコレクション
- Python:
	- [ArcGIS API for Python Sample Notebooks](https://developers.arcgis.com/python/sample-notebooks/) - Esriの公式Python API製品チームのサンプル
	- [esrinederland/CoolMaps](https://github.com/esrinederland/CoolMaps) - 使いやすい例のマップをご紹介します
- Qt:
	- [ArcGIS Maps SDK for Qt C++ sample code](https://developers.arcgis.com/qt/cpp/sample-code/) - Esriの公式ArcGIS Maps SDK for Qt製品チームのC++サンプル
- Unity:
  - [ArcGIS Maps SDK for Unity samples](https://developers.arcgis.com/unity/sample-code/) - Esriの公式ArcGIS Maps SDK for Unity製品チームのサンプル
- Unreal:
  - [ArcGIS Maps SDK for Unreal Engine samples](https://developers.arcgis.com/unreal-engine/sample-code/) - Esriの公式ArcGIS Maps SDK for Unreal Engine製品チームのサンプル

## データ変換ツール

- 中核地理空間処理ライブラリ：
  - [ArcPy](https://pro.arcgis.com/en/pro-app/arcpy/main/arcgis-pro-arcpy-reference.htm) - ArcGIS地理処理フレームワークへのPythonインターフェース。空間分析、データ管理、マッピングを自動化します
  - [gdal](https://github.com/OSGeo/gdal) - ラスターやベクターデータ形式向けの翻訳ライブラリ
  - [loam](https://github.com/azavea/loam) - ブラウザ上でGDALをラップするJavaScriptライブラリ
- 形式変換：
  - [arcgis-json-to-geojson](https://github.com/gavinr/arcgis-json-to-geojson) - ArcGIS JSON規格のレイヤーをGeoJSON規格に変換
  - [csv2geojson](https://viglino.github.io/ol-ext/examples/misc/csv2geojson.html) - CSV形式のポイントをGeoJSONに変換
  - [geojson2svg](https://github.com/w8r/geojson2svg) - インラインまたは外部スタイルシートを使用して GeoJSON を SVG にレンダリングします。
  - [geojsonio](https://github.com/ropensci/geojsonio) - GeoJSONおよびTopoJSONの複数データ形式を相互に変換
  - [gtfs2geojson](https://github.com/node-geojson/gtfs2geojson) - GTFSデータをGeoJSONに変換
  - [img2geojson](https://github.com/caseymm/img2geojson/) - 画像をマップにドラッグして、必要な経路をトレースし、GeoJSONとしてエクスポート
  - [terraformer](https://github.com/terraformer-js/terraformer) - ArcGIS JSONとGeoJSONの相互変換、WKT幾何体とGeoJSON幾何体の相互変換、その他フォーマットの変換
  - [togeojson](https://mapbox.github.io/togeojson/) - KMLおよびGPXをGeoJSONに変換。手間なく変換できます
  - [tokml](https://github.com/mapbox/tokml) - GeoJSONをKMLに変換
- 簡略化と一般化：
  - [Distillery](http://shancarter.github.io/distillery/) - TopoJSONを簡易化・投影するウェブアプリケーション
  - [Feature Service Layer](https://developers.arcgis.com/rest/services-reference/enterprise/query-feature-service-layer-.htm) - 地理空間データの形式変換・簡略化を支援するツールです。 参照: `maxAllowableOffset` / `query`
  - [Generalize method](https://esri-es.github.io/arcgis-search/?search=geometryEngine.generalize#gsc.tab=0&gsc.q=%22generalize%22%20site:developers.arcgis.com&gsc.sort=) - GeometryEngineは、プログラム的に頂点数の少ない幾何体を生成できます。JavaScript、iOS、Android、.NET、Qt、Javaなど、複数のAPIがサポートしています
  - [PostGIS ST_Simplify](https://postgis.net/docs/ST_Simplify.html) - この操作は、ダウグラス・ペイカーアルゴリズムを使用して、与えられた幾何体の*簡略化*されたバージョンを返します
  - [Mapshaper](https://github.com/mbloch/mapshaper) - 形状を簡略化、属性データを編集、クリップ、削除、溶解、フィルタなどを行うウェブアプリ。サポートファイル形式：Shapefile、GeoJSON、TopoJSON、CSVファイル。

## データ統合ツール

- [ArcGIS Data Interoperability Extension](https://esri-es.github.io/awesome-arcgis/arcgis/products/extensions/data-interoperability/) - +400のデータフォーマットを変換できるデスクトップツール。
- [FME Server](https://www.safe.com/integrate/) - 500以上のフォーマットと技術に対応するETLツール。ほぼすべてのデータセットをArcGIS形式に変換し、逆も可能にする。
- [Koop](https://koopjs.github.io) - 空間APIを接続するJavaScriptツールキット。リアルタイムで地理空間データを変換し、GeoJSON、ベクターテイル、特徴サービスなどに変換可能。
- [Make.com](https://www.make.com/en/integrations/survey123) - Survey123を使用する際に発生する繰り返しタスクを自動化するiPaaS。作業をより簡単にする。
- [node-red-contrib-arcgis-rest](https://flows.nodered.org/node/node-red-contrib-arcgis-rest) - JS Foundationのイベント駆動アプリケーションで、低コードプログラミングによりデータをクエリ、削除、更新、挿入可能。
- [Zapier for ArcGIS](https://marketplace.arcgis.com/listing.html?id=5ab7936269f8449b82b0f5c78695ab38) - コードを書かずに自動化できるiPaaS。
- [Tray.io](https://tray.io/connectors/arcgis-integrations) - Tray PlatformのArcGISコンネクタを使用して、編集、特徴の取得、レイヤーの取得など、手動、スケジュール、ウェブ훅トリガーを適用可能。

## デバッグツール

- [cors-test.codehappy.dev](https://cors-test.codehappy.dev/) - CORSリクエストをテストするアプリ。
- [Fiddler Classic](https://www.telerik.com/fiddler/fiddler-classic) - HTTP(s)ネットワークトラフィックをログに記録するWindowsツール。
- [GeoJSONLint](https://geojsonlint.com/) - GeoJSONの検証と表示。
- [json-schema.org](https://json-schema.org/) - JSONドキュメント（複数のバリデーターを含む）に注釈を付加し、検証できる語彙。
- [mapbox/geojson-vt/debug](http://mapbox.github.io/geojson-vt/debug/) - GeoJSONまたはTopoJSONの検証。
- [Postman interceptor](https://www.postman.com/product/postman-interceptor/) - インターセプターにより、ブラウザのクッキーを同期し、Chromeからネットワークリクエストを直接キャプチャ可能。
- [netbalancer.com](https://netbalancer.com/) - ローカルネットワークトラフィックの制御と監視を行うWindowsアプリケーション。

## デザインとスタイリング

- ベストプラクティス、書籍、動画、研修：
	- [Cartography and Making Stunning Maps](https://www.youtube.com/watch?v=AGf_DjZZwXc) - 異なるブレンドモード効果を使って達成可能な例を示す短い動画。
	- [How to style using ArcGIS Online](https://www.youtube.com/watch?v=6vy-kVkIcRg&list=PLPjPOZQjCWEn6ezKrwN11L8NWhZ2JdpYd) - ArcGISのスタイル機能を紹介する短い動画のコレクション。
	- [Photoshop-style Graphics Effects for Your Layers and Data](https://www.youtube.com/watch?v=crmWm80hwKI) - ArcGIS API for JavaScript 4.xを使用して、ユニークで驚くべきウェブマップを作成するためのブレンドモードやレイヤー・特徴効果の使い方を説明する動画。
	- [MapUIPatterns](https://www.mapuipatterns.com/) - ベストプラクティスおよびデザイン原則。UIパターンは、観察され、繰り返されるデザイン問題に対する解決策を説明。
- 開発者ツール：
	- [Calcite Design System](https://developers.arcgis.com/calcite-design-system/) - マッピングアイコン、ウェブコンポーネント、および良い実践のコレクション。
  - [Calcite Intellisense Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=K-Dev.calcite-intellisense) - Esri Calcite Design System のウェブコンポーネントに対して、Esri の公式カスタムデータ JSON を使用して HTML IntelliSense（補完、ホバー、ドキュメンテーション）を注入します。
	- [Calcite Snippets Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=K-Dev.calcite-snippets) - Calcite Design System コンポーネント向けに、Visual Studio Code で Calcite を使用する際に生産性を高めるための便利なコードスニペットのコレクションです。
	
	- [geojson2svg](https://github.com/w8r/geojson2svg) - インラインまたは外部スタイルシートを使用して GeoJSON を SVG にレンダリングします。
- GUI：
	- [ArcGIS Vector Tile Style Editor](https://developers.arcgis.com/documentation/mapping-apis-and-services/tools/vector-tile-style-editor/) - アプリケーション向けにベクターテイルベースマップレイヤーをスタイル付けます。
	- [arcgis-vectortile-style-editor](https://github.com/Esri/arcgis-vectortile-style-editor) - Esri ベクターベースマップのスタイルを JSON で簡潔に更新するためのツールです。
	- [EsriUK mapstyler](https://github.com/EsriUK/mapstyler) - Esri ベクターテイルレイヤーを画像を使って迅速にスタイル付けします。

## 開発者ガイド

- [Content management](https://developers.arcgis.com/documentation/mapping-apis-and-services/content-management/) - プライベートおよびパブリックコンテンツの保存、管理、アクセスを可能にします。
- [Data hosting](https://developers.arcgis.com/documentation/mapping-apis-and-services/data-hosting/) - データをデータサービスとして保存、管理、アクセスします。
- [Demographics](https://developers.arcgis.com/documentation/mapping-apis-and-services/demographics/) - GeoEnrichment サービスを使って、地域の事実や人口統計情報を発見します。
- [Geocoding](https://developers.arcgis.com/documentation/mapping-apis-and-services/search/) - 地理コードサービスを使って、住所、事業所、関心の場所（POI）を検索します。
- [Maps](https://developers.arcgis.com/documentation/mapping-apis-and-services/maps/) - ベースマップレイヤーおよびデータサービスを使って、2D マップと3Dシーンを表示します。
- [Offline](https://developers.arcgis.com/documentation/mapping-apis-and-services/offline/) - 接続なしでデータを表示、分析、編集できます。
- [Routing](https://developers.arcgis.com/documentation/mapping-apis-and-services/routing/) - ルーティングサービスを使ってルートと方向を検索します。
- [Security and authentication](https://developers.arcgis.com/documentation/mapping-apis-and-services/security/) - API キーおよび OAuth 2.0 を使ってサービスとコンテンツにアクセスします。
- [Visualization](https://developers.arcgis.com/documentation/mapping-apis-and-services/visualization/) - レイヤーをスタイル付けして、2D および 3、データを可視化します。

## ヘルパー

- [arcgis-geometry-calculations](https://github.com/hhkaos/arcgis-geometry-calculations) - ArcGIS の幾何学計算を生成・取得するウェブアプリケーションです。
- [arcgis-js-api-camera-helper](https://github.com/pjmclaughlin1979/arcgis-js-api-camera-helper) - ArcGIS API for JavaScript 4.x の 3D ワンダープラットフォーム用に、カメラ位置の JSON オブジェクトを取得するウェブアプリケーションです。
- [arcgis-js-api-extent-helper](https://arcgis-js-api-extent-helper.gavinr.com/) - ArcGIS API for JavaScript 4.x のウェブアプリケーション向けに、マップ範囲の JSON オブジェクトを取得するウェブアプリケーションです。
- [ArcGIS JS API Module Butler](https://marketplace.visualstudio.com/items?itemName=ScottDavis.vscode-arcgis-js-api-module-butler&ssr=false#overview) - @arcgis/core パッケージの ES インポート文を、現在のコードコンテキストを離さずに迅速に追加する VSCode エクステンションです。
- [epsg.io](https://github.com/maptiler/) - 世界中の座標系を発見・変換できるウェブサイトです。
- [esri-loader](https://github.com/Esri/esri-loader) - 人間が読みやすく、ArcGIS API for JavaScript（CDNから）を読み込むための小さなライブラリ。人気のJavaScriptフレームワークやバンドラーで構築されたアプリケーションに適用可能。
- [esri-loader-hooks](https://github.com/tomwayson/esri-loader-hooks) - esri-loaderと連携した、React用のカスタムReact Hook。
- [geojson-random-generator](https://github.com/erick-otenyo/geojson-random-generator) - テスト用に、すぐに生成・ダウンロードできるランダムGeoJSON。
- [reducegeojson](https://github.com/radical-data/reducegeojson) - ウェブ最適化用にGeoJSONファイルのファイルサイズを減らすツール。
- [histogrand](https://github.com/hhkaos/histogrand) - カスタマイズされたヒストグラムに基づくランダム値生成器。
- [mercator-geographic-converter](https://github.com/hhkaos/mercator-geographic-converter/) - 地理座標（緯度、経度）とメルカトル座標（x、y）の間の簡単な座標変換ツール。
- [react-sceneview](https://github.com/Esri/react-sceneview) - ArcGIS API for JavaScriptをベースにした、シンプルなEsri SceneView Reactコンポーネント。
- [bboxfinder](http://bboxfinder.com/) - マップ上に描かれた境界箱の座標を取得できるシンプルなウェブアプリ。
- [snippets client side raster functions](https://ubatsukh.github.io/arcgis-js-api-demos/clientside-rasterfunctions/index.html) - クライアントサイドのラスターファンクションは、元の画像ピクセルに直接処理を適用する操作。

## 地図とデータの探索

- [ArcGIS Map Viewer](https://www.arcgis.com/apps/mapviewer/index.html) - 2Dアプリケーション向けに、ウェブマップを作成・探索・共有できるウェブアプリ。
- [ArcGIS Map Viewer (classic version)](https://arcgis.com/home/webmap/viewer.html) - 2Dアプリケーション向けに、ウェブマップを作成・探索・共有できるウェブアプリ。
- [ArcGIS Scene Viewer](https://www.arcgis.com/home/webscene/viewer.html) - 3Dアプリケーション向けに、ウェブマップを作成・探索・共有できるウェブアプリ。
- [Geo Data Viewer](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.geo-data-viewer) - Geo Data Analytics用のVSCode拡張。マップの生成と表示をサポート。
- [geojson.io](https://github.com/mapbox/geojson.io) - 地図を可視化・生成・編集できるシンプルなウェブアプリ。GeoJSON、TopoJSON、CSV、KML、WKT、Shapefileをサポート。
- [gpxstudio](https://github.com/gpxstudio/gpxstudio.github.io) - オンラインかつオープンソースのGPXファイルエディタ。
- [Mapshaper](https://github.com/mbloch/mapshaper) - 形状を簡略化、属性データを編集、クリップ、削除、溶解、フィルタなどを行うウェブアプリ。サポートファイル形式：Shapefile、GeoJSON、TopoJSON、CSVファイル。
- [Smart Mapping](https://www.esri.com/en-us/smart-mapping) - マップとシーンビューに組み込まれているが、JavaScriptやPythonなどの一部APIもデータ探索ツールの構築を支援するユーティリティを提供。
- [VSCode Map Preview](https://marketplace.visualstudio.com/items?itemName=jumpinjackie.vscode-map-preview) - 地図上で地図ファイル（GeoJSON、KMLなど）のコンテンツを視覚的にプレビューできる拡張。

## プレイグラウンド

- [arcgis-arcade-playground](https://developers.arcgis.com/arcade/playground/) - ArcGISカスタムビジュアライゼーションやラベル表現を作成するための、ポータブルスクリプト言語を試す。
- [cim-symbol-builder](https://github.com/Esri/cim-symbol-builder-js) - ArcGISクライアントAPIや特徴サービスとの連携に使用できるCIMシンボルを生成。
- [geometry-inspector](http://brianbunker.github.io/geometry-inspector/) - マップ上にEsriJSON、GeoJSON、またはWKTを迅速に表示する、またはマップ上に描画してEsriJSON、GeoJSON、またはWKTを取得する
- [js-symbol-playground 3.x](https://developers.arcgis.com/javascript/3/samples/playground/index.html) - ArcGIS API for JavaScript 3.x との連携に使用できるシンボルの生成
- [js-symbol-playground 4.x](https://developers.arcgis.com/javascript/latest/sample-code/playground/live/) - ArcGIS API for JavaScript 4.x との連携に使用できるシンボルの生成
- [Postman workspaces](https://www.postman.com/esridevs) - ロケーションサービスおよび認証を実験するために使用できるPostmanコレクション
- [Firefly Symbols Generator](https://vannizhang.github.io/firefly-symbols-generator/dist/) - Fireflyシンボル生成

## 空間解析


- [ArcGIS Analysis services](https://developers.arcgis.com/rest/analysis-services/) - 空間、レーダー、高さ、水文、およびインフラネットワーク分析
- [Esri/gis-tools-for-hadoop](https://github.com/Esri/gis-tools-for-hadoop) - 大規模データの空間分析に用いるGISツールのコレクション
- [Esri/spatial-framework-for-hadoop](https://github.com/Esri/spatial-framework-for-hadoop) - 開発者およびデータサイエンティストが空間データ分析にHadoopデータ処理システムを使用できるようにする
- [Client-side Geometry Engine](https://esri-es.github.io/arcgis-search/?search=geometry+engine&utm_source=chrome-extension#gsc.tab=0&gsc.q=geometry%20engine%20site:developers.arcgis.com&gsc.sort=) - 空間関係をテストし、新しい幾何学を計算し、長さ、面積、距離などを測定できる
	- [ArcGIS API for JavaScript `geometryEngine`](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-geometryEngine.html) - ブラウザおよびNode.jsで動作する
	- [ArcGIS API for Python `arcgis.geometry`](https://developers.arcgis.com/python/api-reference/arcgis.geometry.html)
	- [ArcGIS Maps SDK for .NET `GeometryEngine`](https://developers.arcgis.com/net/api-reference/api/netwin/Esri.ArcGISRuntime/Esri.ArcGISRuntime.Geometry.GeometryEngine.html)
	- [ArcGIS Maps SDK for Android `GeometryEngine`](https://developers.arcgis.com/android/api-reference/reference/com/esri/arcgisruntime/geometry/GeometryEngine.html)
	- [ArcGIS Maps SDK for iOS `AGSGeometryEngine`](https://developers.arcgis.com/ios/api-reference/interface_a_g_s_geometry_engine.html)
	- [ArcGIS Maps SDK for Qt `GeometryEngine`](https://developers.arcgis.com/qt/cpp/api-reference/esri-arcgisruntime-geometryengine.html)
- [Turf.js](https://github.com/Turfjs/turf) - ブラウザおよびNode.js向けの地理空間分析

## 仕様

- [Cartographic Information Model spec](https://github.com/Esri/cim-spec) - GISデータセットの地図表現をJSONで記述したものを保持および転送するためのマップコンテンツ仕様
- [Common data types](https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm) - ArcGIS REST APIが返す幾何学および空間参照オブジェクトのJSONフォーマット：ポイント、マルチポイント、ポリライン、ポリゴン、エンベロープ
- [GeoServices spec](https://github.com/koopjs/FeatureServer) - Esriが使用する構造化地理空間データに完全にアクセスできるオープンウェブフォンダのRESTベースAPI
- [Indexed 3D Scene Layers](https://github.com/Esri/i3s-spec) - 地理データの任意の大量データを扱うためのコンテナのサービスおよびパッケージ標準
- [Shapefile Format](https://www.esri.com/content/dam/esrisites/sitecore-archive/Files/Pdfs/library/whitepapers/pdfs/shapefile.pdf) - GISソフトウェア用の地理空間ベクターデータフォーマットの仕様
- [Spatial reference specifications](https://developers.arcgis.com/documentation/spatial-references/#spatial-reference-specifications) - 空間参照を定義するためのWell-Known ID (WKID)整数値またはWell-Known Text (WKT)と呼ばれるテキスト文字列のリスト
- [Tile Package Specification](https://github.com/Esri/tile-package-spec) - タイルとタイルスキームを含む圧縮ファイルで、ArcGISアプリケーションにおけるベースマップとして使用できる
- [Web Map spec](https://developers.arcgis.com/web-map-specification/) - 共有可能な2Dマップ。ウェブマップを定義するJSONオブジェクトを説明する
- [Web Scene spec](https://developers.arcgis.com/web-scene-specification/) - 共有可能な3Dシーンのコンテンツ（視点、カメラ、ベースマップレイヤー、レイヤー、スタイルなど）を定義するJSON構造

---


**関連Awesomeリスト**

- [awesome-arcgis](https://github.com/esri-es/awesome-arcgis/) - エスリとアーキジスに関するリソースを、製品、業界、ファイル形式、コンテンツプロバイダーなどに分類した、ウィキ風の素晴らしいリスト
- [awesome-earthobservation-code](https://github.com/acgeospatial/awesome-earthobservation-code) - 地球観測および地理空間関連のツール、チュートリアル、コード、役立つプロジェクト、リンク
- [awesome-geojson](https://github.com/tmcw/awesome-geojson) - GeoJSONユーティリティ：操作、編集器・閲覧器、検証、サービス、変換など
- [awesome-geospatial](https://github.com/sacridini/Awesome-Geospatial) - データベース、レーダー、LiDAR、ウェブマップ開発など
- [awesome-gis](https://github.com/sshuair/awesome-gis) - GIS、リモートセンシング、3Dアプリ、ウェブマップサーバー、地理空間ライブラリ、オープンスタンダード、データなど
- [awesome-json-datasets](https://github.com/jdorfman/awesome-json-datasets) - 認証不要のJSONデータセット：気候、犯罪、政府、NASA、旅行など
- [awesome-open-geoscience](https://github.com/softwareunderground/awesome-open-geoscience) - 地理科学者、ハッカー、データウェンガーの生活をより簡単またはもっと素晴らしいものにしてくれるリポジトリから厳選されたもの
- [awesome-public-datasets](https://github.com/awesomedata/awesome-public-datasets) - テーマ中心の高品質オープンデータセットのリスト
- [awesome-remote-sensing-change-detection](https://github.com/wenhwu/awesome-remote-sensing-change-detection) - リモートセンシングの変化検出に関連するデータセット、コード、コンテストのリスト
- [awesome-satellite-imagery-datasets](https://github.com/chrieke/awesome-satellite-imagery-datasets) - コンピュータビジョンおよびディープラーニング向けの衛星画像トレーニングデータセットとアノテーションのリスト
- [awesome-semantic-segmentation](https://github.com/mrgloom/awesome-semantic-segmentation) - アーキテクチャ別（意味セグメンテーション、インスタンス認識など）、RNN、GANS、データセットなど
- [awesome-vector-tiles](https://github.com/mapbox/awesome-vector-tiles) - マップボックス・ベクターテイル仕様の実装：パーサー・ジェネレーター、クライアント、アプリ、コマンドラインツール、CLIユーティリティ、サーバーなど


**Issue**

未解決Issueへの対応を歓迎します。追加してほしい内容を知らせるだけでも役立ちます。

特定のリソースを依頼・提案するには[Issueを作成](https://github.com/ArcGIS/awesome-arcgis-developer/issues/new)してください。


**コントリビューション**

Esriはすべての方からのコントリビューションを歓迎します。更新を提案するには[プルリクエストを作成](https://github.com/ArcGIS/awesome-arcgis-developer/pulls)できますが、その前に次を確認してください。

- [このリポジトリのコントリビューションガイドライン](https://github.com/Esri/awesome-arcgis-developer/blob/c215f75ae07307e26e0b41bda96c92e924e48561/CONTRIBUTING.md)を確認してください。
- [過去に登録されたIssue](https://github.com/ArcGIS/awesome-arcgis-developer/issues)を確認してください。

詳細はEsriの[コントリビューションガイドライン](https://github.com/esri/contributing)を参照してください。



**脚注**

Copyright 2025 Esri
