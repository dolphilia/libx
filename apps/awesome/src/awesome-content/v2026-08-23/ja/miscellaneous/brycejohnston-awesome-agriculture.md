---
title: "brycejohnston/awesome-agriculture"
description: "brycejohnston/awesome-agriculture の正規スナップショット"
licenseSource: "github-brycejohnston-awesome-agriculture-readme-md"
---

# Awesome Agriculture [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> 農業、営農、園芸のための優れたオープンソース技術の厳選リスト。

[農業](https://en.wikipedia.org/wiki/Agriculture)は、食料や材料を得るために植物と家畜を育てる科学および技術です。

コントリビューションを歓迎します。[コントリビューションガイドライン](https://github.com/beaorn/awesome-agriculture/blob/master/contributing.md)に従ってください。

## 目次

- [自動化とロボティクス](#automation-and-robotics)
- [計算ツール](#calculators)
- [気候、環境、天気](#climate-environment-and-weather)
- [作物モデリング、表現型解析、病理学](#crop-modeling-phenotyping-and-pathology)
- [データセット](#datasets)
- [データ標準化、相互運用性、API](#data-standardization-interoperability-and-apis)
- [農場管理システムと記録管理](#farm-management-systems-and-record-keeping)
- [地理空間とGIS](#geospatial-and-gis)
- [IoT、ハードウェア](#iot-hardware)
- [知識ベースと学習リソース](#knowledgebases-and-learning-resources)
- [機械学習とAI](#machine-learning-and-ai)
- [リモートセンシングと画像](#remote-sensing-and-imagery)

## 自動化とロボティクス <a id="automation-and-robotics"></a>

- [Ant Robotics](https://antrobotics.de/) - Ecoterra botから発展した開発。
- [Acorn Rover](https://github.com/Twisted-Fields) - OdriveとPythonを使う精密農業ローバー。
- [Earth Rover](https://github.com/earthrover) - ROS1を使う精密農業向け農業AGVローバー。
- [EcoTerra Bot](https://ecoterrabot.com/) - DeltaとRover。
- [FarmBot](https://github.com/farmbot) - オープンソースの精密園芸プロジェクト。
- [FarmBot-ROS](https://github.com/farmbot-ros/) - オープンソースの農業ロボット。
- [Fields2Cover](https://github.com/Fields2Cover/Fields2Cover) - 自律農業車両向けの堅牢で効率的な網羅走行経路。
- [Field Friend](https://github.com/zauberzeug/field_friend) - 自律除草のための開発プラットフォーム。
- [Romi project](https://media.romi-project.eu/documents/index.html) - 欧州の資金援助を受けた研究プロジェクト。
- [ROS Agriculture](http://rosagriculture.org/) - Robot Operating Systemを利用し、農業従事者へロボットツールを提供することに注力するオープンソースコミュニティ。
- [Weedinator](https://hackaday.io/project/53896-weedinator-2019) - ライントレース式除草ロボット。

## 計算ツール <a id="calculators"></a>

- [farm-calculators](https://github.com/brycejohnston/farm-calculators) - 農業や作物に関するさまざまな情報を計算するWordPressプラグイン。

## 気候、環境、天気 <a id="climate-environment-and-weather"></a>

- [agroclimatology](https://github.com/brycejohnston/agroclimatology) - NASA（POWER）Agroclimatology Web Resourceと連携するRubyクライアント。
- [evapotranspiration](https://github.com/brycejohnston/evapotranspiration) - 基準作物蒸発散量（ETo）を計算するRubyライブラリ。
- [frostline](https://github.com/waldoj/frostline) - USDA植物耐寒性ゾーン向けのデータセット、API、Pythonパーサー。
- [GSODR](https://github.com/ropensci/GSODR) - Rで扱う世界の日別気象概要データ。
- [iem](https://github.com/akrherz/iem) - Iowa Environmental Mesonetを稼働させるコード。
- [PyETo](https://github.com/woodcrafty/PyETo) - 基準／潜在蒸発散量（ETo）を計算するPythonパッケージ。
- [pyTSEB](https://github.com/hectornieto/pyTSEB) - リモートセンシングデータから蒸発散量を推定するPython製二源エネルギー収支モデル。
- [soilDB](https://github.com/ncss-tech/soilDB) - NCSS土壌データベースへ簡単にアクセスするRライブラリ。

## 作物モデリング、表現型解析、病理学 <a id="crop-modeling-phenotyping-and-pathology"></a>

- [Open Plant Pathology](https://www.openplantpathology.org/) - 疫学、病原体の集団生物学、生態学を発展させるため、オープンデータと計算ツールを重視するコミュニティ。

## データセット <a id="datasets"></a>
- [Agriculture Datasets Collection](https://lacunafund.org/datasets/agriculture/) - 開発途上地域の食料安全保障課題への対処に特化した機械学習データセットの厳選コレクション。
- [CEAOD](https://ceaod.github.io/) - データ分析ツールとともに、温室・屋内農業研究向け標準化データセットを提供するControlled Environment Agriculture Open Dataリポジトリ。
- [CropHarvest](https://github.com/nasaharvest/cropharvest) - 衛星画像からラベル付けした95,186データポイントを収録し、食料安全保障の機械学習研究を支援する世界作物種マッピング用オープンソース・リモートセンシングデータセット。
- [CWFID](https://github.com/cwfid/dataset) - 圃場画像、植生セグメンテーションマスク、作物／雑草の植物種注釈で構成されるデータセット。
- [FAO/NASA Harvest Crop Type Dataset](https://data.harvestportal.org/dataset/fao-bha-nasa-harvest-public-crop-type-datasets) - 農地分類モデルの検証と訓練に使う位置情報付き圃場データを収録した、作物種のグラウンドトゥルース観測データセット。
- [Growstuff](https://www.growstuff.org/crops) - 記録管理と作物データベース。使いやすいAPIを備える。
- [PlantVillage](https://www.kaggle.com/datasets/emmarex/plantdisease) - 14種類の作物、38種類の病害クラスを対象とした、健全な植物と罹病植物の葉画像データセット。
- [SoybeanYield](https://github.com/saeedkhaki92/CNN-RNN-Yield-Prediction?tab=readme-ov-file) - 収量実績、管理方法、気象データ、土壌パラメーターを統合した、大豆収量予測向けマルチモーダル農業データセット。
- [TERRA REF](https://terraref.org) - ソルガム育種試験から得た1PBのパブリックドメイン高解像度センサーデータ（[データ公開](https://doi.org/10.5061/dryad.4b8gtht99)、大容量ファイルは[globus.orgのncsa#terra-public](https://app.globus.org/file-manager?origin_id=e8feaff4-96cd-11ea-bf90-0e6cccbb0103&origin_path=%2F)で入手可能）。

## データ標準化、相互運用性、API <a id="data-standardization-interoperability-and-apis"></a>

- [AgGateway’s ADAPT Toolkit](https://adaptframework.org) - 生産者、機械、取引先間の通信を簡素化するツールを提供するオープンソースプロジェクト。
- [Agstack](https://github.com/agstack) - 農業エコシステム向けオープンソース・デジタルインフラストラクチャ。
- [API-Code-Samples](https://github.com/aWhereAPI/API-Code-Samples) - aWhere APIプラットフォームのコードサンプル。
- [Botanica](https://github.com/Michael-A-Kuykendall/botanica) - 分類階層、栽培追跡、Darwin Core準拠を備えた、専門的な植物データ管理向け本番対応Rustクレート。
- [ClearAg-API-Examples](https://github.com/IterisClearAg/ClearAg-API-Examples) - ClearAg APIを使用するコード例集。
- [Fiware AgriFood](https://www.fiware.org/community/smart-agrifood/) - 農場システムを接続し、実用的なスマート農業・アグリフードソリューションを可能にするオープンソースのデータ標準とIoTフレームワーク。より大規模なFiware.orgプロジェクトの一部。
- [JDLinkMachineDataAPI-OAuth2-CSharp-Example](https://github.com/JohnDeere/JDLinkMachineDataAPI-OAuth2-CSharp-Example) - CSharpによるJDLink Machine Data APIクライアント例。
- [Open Ag Data Alliance](https://github.com/oada) - 農業データへ相互運用性、セキュリティ、プライバシーをもたらすためのオープンプロジェクトOADA。
- [MyJohnDeereAPI-OAuth2-Java-Example](https://github.com/JohnDeere/MyJohnDeereAPI-OAuth2-Java-Example) - JavaによるMyJohnDeere APIクライアント例。
- [MyJohnDeereAPI-OAuth2-NodeJS-Example](https://github.com/JohnDeere/MyJohnDeereAPI-OAuth2-NodeJS-Example) - Node.jsによるMyJohnDeere APIクライアント例。
- [MyJohnDeereAPI-OAuth2-Python-Example](https://github.com/JohnDeere/MyJohnDeereAPI-OAuth2-Python-Example) - PythonによるMyJohnDeere APIクライアント例。
- [OpenTeam](https://openteam.community/) - 農業管理のためのオープン技術エコシステム。
- [SampleData](https://github.com/JohnDeere/SampleData) - テストに使えるサンプルデータカード、シェープファイル、その他のファイル。
- [SencropAPI-JavaScript-Client](https://github.com/sencrop/sencrop-js-api-client) - Sencrop APIのJavaScriptクライアント実装。Sencrop気象観測所を読み取り・管理。

## 農場管理システムと記録管理 <a id="farm-management-systems-and-record-keeping"></a>

- [Ekylibre](https://github.com/ekylibre/ekylibre) - Ruby on RailsとPostgreSQL／PostGISで構築された、農家と小規模事業者向け農場管理情報システム。
- [farmOS](https://github.com/farmOS/farmOS) - DrupalとPHPで構築されたWebベースの農場記録管理アプリケーション。
- [GrowGood](https://gitlab.com/growgood)) - ValueFlowsやJSON-LDなどのオープン標準を使い、農業活動と市場を横断して相互運用可能なデータの追跡・共有を支援するオープンソース農場管理プラットフォーム。
- [LiteFarm](https://github.com/LiteFarmOrg/LiteFarm) - 世界初のコミュニティ主導・非営利農場管理システム。
- [Soil Mate](https://github.com/Open-Source-Agriculture/soil_mate) - 土壌データの収集を支援するヘルパーアプリ。
- [Tania](https://github.com/Tanibox/tania-core) - GoとVue.jsで構築された、誰でも使える無料・オープンソース農場管理システム。


## 地理空間とGIS <a id="geospatial-and-gis"></a>

### GISリソース <a id="gis-resources"></a>

- [Awesome GIS](https://github.com/sshuair/awesome-gis) - 豊富なGIS関連情報源を集めたリスト。

### GISプラットフォーム <a id="gis-platforms"></a>

- [QGIS](https://qgis.org) - 無料、オープンソース、クロスプラットフォーム（Linux／Windows／macOS）の地理情報システム。

### シェープファイル <a id="shapefiles"></a>

- [pyshp](https://github.com/GeospatialPython/pyshp) - 純粋なPythonでESRI Shapefileを読み書き。
- [rgeo-shapefile](https://github.com/rgeo/rgeo-shapefile) - RubyでESRI Shapefileの地理空間データを読み取るためのRGeo用オプションモジュール。

## IoT、ハードウェア <a id="iot-hardware"></a>

- [AgOpenGPS](https://github.com/farmerbriantee/AgOpenGPS) - 農業向け精密マッピングおよびセクション制御ソフトウェア。
- [Farm-Data-Relay-System](https://github.com/timmbogner/Farm-Data-Relay-System) - WiFiに頼らず、遠隔地でESP-NOW、LoRaなどのプロトコルを使ってセンサーデータを運ぶシステム。
- [Farm Hack](https://farmhack.org/tools) - 独自のツールを製作・改造する農家の世界的コミュニティ。
- [Open Agriculture Foundation](https://github.com/OpenAgricultureFoundation) - 透明性、ネットワーク化された実験、教育、超地域生産を実現・推進するオープンソース技術エコシステム。
- [Open hydroponics](https://openhydroponics.com/) - 完全自動化された水耕栽培OS。
- [OpenMinder](https://github.com/autogrow/openminder) - オープンソースの根域監視、API、RaspberryPi向けオープンソースHAT。
- [OpenWeedLocator](https://github.com/geezacoleman/OpenWeedLocator) - 作物栽培中や休閑地で利用する、オープンソースで低価格の画像式雑草検出装置。
- [Simplesteer](https://github.com/matmis/simplesteer) - スマートフォンで操作でき、Raspberry Pi上で動作するWebインターフェース付きRTK GPSトラクター自動操舵システム。
- [Smart Farming Thingsboard](https://github.com/arifulmrislam/Smart-farming-dashboard-with-ThingsBoard) - ThingsBoardでセンサーデータを収集し、リアルタイム農業ダッシュボードへ表示するスマート農業デモプロジェクト。

## 知識ベースと学習リソース <a id="knowledgebases-and-learning-resources"></a>

- [Harvest Helper](https://github.com/damwhit/harvest_helper) - データベース内の45種類の植物について栽培、収穫、レシピ情報とJSON APIを提供。
- [OpenFarm](https://github.com/openfarmcc/OpenFarm) - Ruby on Railsで構築された、農業・園芸知識の無料オープンデータベース。

## 機械学習とAI <a id="machine-learning-and-ai"></a>
- [AgML](https://github.com/Project-AgML/AgML) - 農業機械学習のための一元的フレームワーク。
- [agridat](https://github.com/kwstat/agridat) - 農業実験から得られた広範なデータセット集を提供するRパッケージ。
- [Crop Yield Prediction](https://github.com/JiaxuanYou/crop_yield_prediction) - リモートセンシングデータに基づく作物収量予測用の深層ガウス過程。
- [Deep Learning for Biologists with Keras](https://github.com/totti0223/deep_learning_for_biologists_with_keras) - 主に生物学関連の題材を扱う深層学習分析チュートリアル。
- [FarmVibes.AI](https://github.com/microsoft/farmvibes-ai) - 農業と持続可能性のためのマルチモーダル地理空間MLモデル。
- [PlantCV](https://github.com/danforthcenter/plantcv) - コンピュータービジョンを使った植物表現型解析ソフトウェア。

## リモートセンシングと画像 <a id="remote-sensing-and-imagery"></a>

- [Awesome Sentinel](https://github.com/Fernerkundung/awesome-sentinel) - Copernicus Sentinel衛星のデータに関連する優れたツール、チュートリアル、APIの厳選リスト。
- [Awesome Vegetation Index](https://github.com/px39n/Awesome-Vegetation-Index) - マルチスペクトル、ハイパースペクトル、UAV画像向けの一般的な植生指数について、参考資料と応用例をまとめたリスト。
- [Raster Vision](https://github.com/azavea/raster-vision) - 航空／衛星画像のための深層学習。
- [Sen2Agri](https://github.com/Sen2Agri/Sen2Agri-System) - 農業用途の高解像度衛星画像を処理するソフトウェアシステム。

## ライセンス <a id="license"></a>

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる限り、[Bryce Johnston](https://github.com/brycejohnston)は本作品に関するすべての著作権および関連する権利または隣接権を放棄しています。
