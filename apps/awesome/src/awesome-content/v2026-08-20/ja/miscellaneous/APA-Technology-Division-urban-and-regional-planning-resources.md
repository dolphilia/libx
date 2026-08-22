---
title: "APA-Technology-Division/urban-and-regional-planning-resources"
description: "都市・地域計画のデータ、仕様、ソフトウェア、教育資源を分類した定本スナップショット"
licenseSource: "github-APA-Technology-Division-urban-and-regional-planning-resources-readme-md"
---

---
# 都市・地域計画資源 <a id="urban--regional-planning-resources"></a> [![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome) 
[![GitHub stars](https://img.shields.io/github/stars/APA-Technology-Division/planning-technology-resources)](https://github.com/APA-Technology-Division/planning-technology-resources/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/APA-Technology-Division/planning-technology-resources)](https://github.com/APA-Technology-Division/planning-technology-resources)
![GitHub contributors](https://img.shields.io/github/contributors/APA-Technology-Division/planning-technology-resources)
![GitHub last commit](https://img.shields.io/github/last-commit/APA-Technology-Division/planning-technology-resources)
[![GitHub license](https://img.shields.io/github/license/APA-Technology-Division/planning-technology-resources)](https://github.com/APA-Technology-Division/planning-technology-resources/blob/main/LICENSE)

都市・地域計画に関する各種データと技術資源を厳選したリポジトリです。建築環境に関心がある方の閲覧とコントリビューションを歓迎します。

---
#### スポンサー <a id="sponsors"></a>

Technology Divisionの資源リポジトリは、次の企業・組織から[支援](https://github.com/APA-Technology-Division/urban-and-regional-planning-resources/blob/main/resources/Division_Sponsorship_Package_23.pdf)を受けています。
<div style=text-align:center;>
		<br>
		<a href="https://www.esri.com/en-us/home">
			<img src="https://github.com/APA-Technology-Division/urban-and-regional-planning-resources/blob/main/assets/Esri%20Logo%20PNG%20SVG%20Vector-01.png" width="160"/>
		</a>
    <br>

</div>

---


## 目次 <a id="contents"></a>

- [公共データ資源](#public-data-resources)
  - [建築環境](#built-environment)
  - [気候](#climate)
  - [人口統計](#demographic)
  - [教育](#education)
  - [雇用](#employment)
  - [環境と生態系サービス](#environment-and-ecosystem-services)
  - [エネルギーと天然資源](#energy-and-natural-resources)
  - [公平性と環境正義](#equity-and-environmental-justice)
  - [健康](#health)
  - [歴史的環境保全](#historic-preservation)
  - [住宅](#housing)
  - [土地利用と土地被覆](#land-use-and-land-cover)
  - [OpenStreetMap](#openstreetmap)
  - [政治](#politics)
  - [レジリエンスと自然災害](#resilience-and-natural-hazards)
  - [交通](#transportation)

- [商用データ資源](#vendor-data-resources)
  - [建築環境](#built-environment-1) 
  - [人口統計](#demographic-1)
  - [インフラストラクチャ](#infrastructure)
  - [土地利用と土地被覆](#land-use-and-land-cover-1)
  - [レジリエンスと自然災害](#resilience-and-natural-hazards-1)
  - [都市観測](#urban-observation)
  - [移動行動](#travel-behavior)

- [計画データ仕様](#planning-data-specifications)
  - [建築環境](#built-environment-2)
  - [環境](#environmental)
  - [交通](#transportation-1)

- [計画分野のコーディング資源](#planning-coding-resources)
  - [Python](#python)
  - [R](#r)
  - [その他](#other)
  - [WebとJavaScript](#web-and-js)
  - [コーディング学習](#learning-to-code)

- [プラットフォームとソフトウェア資源](#platforms-and-software-resources)
  - [計画向けAIツールとプラットフォーム](#ai-in-planning-tools-and-platforms)
  - [デジタルツインのツールとプラットフォーム](#digital-twins-tools-and-platforms)
  - [経済開発・計量経済プラットフォーム](#economic-development-and-econometric-platforms)
  - [環境・気候計画ツールとプラットフォーム](#environmental-and-climate-planning-tools-and-platforms)
  - [地理空間データと可視化](#geospatial-data-and-visualization)
  - [没入型計画・設計プラットフォーム](#immersive-planning-and-design-platforms)
  - [計画管理・行政ツールとプラットフォーム](#planning-management-and-administrative-tools-and-platforms)
  - [市民参加ツールとプラットフォーム](#public-engagement-tools-and-platforms)
  - [都市設計ツールとプラットフォーム](#urban-design-tools-and-platforms)
  - [都市計画ツールとプラットフォーム](#urban-planning-tools-and-platforms)
  - [交通計画ツールとプラットフォーム](#transportation-planning-tools-and-platforms)

- [教育・情報資源](#educational-and-informational-resources)
  - [AICP資料](#aicp-resources)
  - [文献資料](#literature-resources)
  - [一般的な計画情報とニュース](#general-planning-information-and-news)
  - [ポッドキャスト](#podcasts)

- [その他の資源](#other-resources)
  - [ほかのGitHub資源一覧](#other-github-resource-lists)
  - [ほかの技術資源アグリゲーター](#other-technology-resource-aggregators)

- [コントリビューション](#contributing)
  - [フォームによるコントリビューション](#form-based-contributions)
  - [GitHubによるコントリビューション](#github-contributions)

- [ライセンスと引用](#license-and-citation)

---

## 公共データ資源 <a id="public-data-resources"></a>
一般公開され、利用可能なデータ資源です。ライセンス条件が適用される場合があります。

オープンデータサイトと全国規模データセットは各節の上部に配置します。

---
### 建築環境 <a id="built-environment"></a>

- [Smart Location Database](https://www.epa.gov/smartgrowth/smart-location-mapping#SLD) - スマート・ロケーション・データベースは、位置効率を測定するための全国的な地理データリソースであり、住宅密度、土地利用の多様性、地域設計、目的地へのアクセス、輸送サービス、雇用、人口構成などの特徴を90以上の属性で要約している。アメリカ合衆国におけるすべてのカウンシップブロックグループに対して、ほとんどの属性が提供されている。
- [USBuildingFootprints](https://github.com/microsoft/USBuildingFootprints) - Microsoft Maps is releasing country wide open building footprints datasets in United States. This dataset contains ~130,000,000 computer generated building footprints derived using our computer vision algorithms on satellite imagery. This data is freely available for download and use. Additional Information:[Article](https://www.nytimes.com/interactive/2018/10/12/us/map-of-every-building-in-the-united-states.html).
- [National Structures Inventory](https://www.hec.usace.army.mil/confluence/nsi/technicalreferences/2022/technical-documentation) - 自然災害や人為災害の影響を評価するために、一貫性があり、全国的に利用可能な点ベースの構造インベントリにアクセスできるデータセットである。

### 気候 <a id="climate"></a>
- [ClimRR](https://disgeoportal.egs.anl.gov/ClimRR/) - このポータルは、個人、政府、組織が、21世紀中盤から終盤のシナリオにおける気候変動の影響を評価するための、さまざまな気候リスクに対するシミュレーションされた将来の気候条件を検討できるようにする。
- [IPCC Atlas](https://interactive-atlas.ipcc.ch/) - 第六評価報告書の第一作業部会の貢献に含まれる観測および予測された気候変動情報の大部分について、空間的および時間的な分析に用いることができる革新的なツールとデータを提供。特に、気候影響・要因（CIDs）に関する地域合成も含む。
- [LANDSAT Products](https://www.usgs.gov/landsat-missions/landsat-us-analysis-ready-data) - Landsatの米国分析用データ（ARD）製品は、ランドスケープ変化のモニタリングおよび評価に直接使用できるための、最も高い科学的基準および処理レベルに一貫して処理されている。
- [MACA](https://climate.northwestknowledge.net/MACA/) - MACA手法は、グローバル気候モデル出力からバイアスを除去するための統計的スケーリング手法である。
- [National Stormwater Calculator](https://swcweb.epa.gov/stormwatercalculator/) - 環境保護庁（EPA）が提供するリソースで、計画やプロジェクトのコスト見積もりに必要な機能とコントロールを備え、緑インフラの決定に基づく雨水貯留対策の結果を示している。
- [NCCS Data Services](https://www.nccs.nasa.gov/services/climate-data-services) - ナスアの気候シミュレーションセンターは、大気、海洋、陸、洪水データを含む、現在および過去のデータ収集を構成し、毎日4回更新される運用グローバルモデリングおよび同化オフィス（GMAO）の気象分析データおよび予報を提供している。
- [NCDC Storm Data](https://www.ncei.noaa.gov/access/metadata/landing-page/bin/iso?id=gov.noaa.ncdc:C00510) - 米国気象局（NWS）が提供する米国における暴風雨データで、個人の怪我や損傷の推定統計を含む。
- [NOAA Severe Weather Inventory](https://www.ncei.noaa.gov/products/severe-weather-data-inventory) - 激しい天候データインベントリ（SWDI）は、アメリカにおける激しい天候記録を統合したデータベースである。現在サポートされているフォーマットは、シェイプファイル（GIS用）、KMZ（Google Earth用）、CSV（カンマ区切り）、XMLである。
- [Temperature Severity Indicators](https://hudgis-hud.opendata.arcgis.com/datasets/HUD::temperature-severity-indicators/about) - 温度の厳しさ指標データは、長期間の気温イベントの観測情報を要約し、米国ホルダ（US HUD）が提供する住宅および地域開発の政策および意思決定に活用している。
- [Urban Heat Disparities Project](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/1F72FB) - Census Tract level temperature data derived from a [paper](https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021EF002016) use remotely sensed land surface temperature measurements to explore the distribution of the United States urban heating burden by demographic group.
- [WUDAPT](https://www.wudapt.org/) - このデータベースは、気候および環境研究において世界規模で関連する都市形態の構造と機能に関する、一貫性と整合性を持つ説明および情報を世界中で提供することを目的としている。

### 人口統計 <a id="demographic"></a>

- [American Community Survey (ACS)](https://www.census.gov/programs-surveys/acs) - The American Community Survey (ACS) helps local officials, community leaders, and businesses understand the changes taking place in their communities. It is the premier source for detailed population and housing information for the United States. Additional Information: [Geodata Download](https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-data.html)/[Table Data Access](https://data.census.gov/cedsci/)
- [Census Reporter](https://censusreporter.org/) - An open-source website that makes it easy to explore and report census data. Census Reporter automatically provides descriptive statistics, downloadable tabular data, and interactive visualizations of American Community Survey (ACS) data for the United States. Visualizations can be [embedded as HTML](https://censusreporter.org/examples/embed-charts/) iframes. Additional Information:License: MIT License Geographic Coverage: Contains geographies matching the coverage and scale of the [ACS 2019 1-year and 5-year estimates.](https://web.archive.org/web/20210519000200/https://www.census.gov/programs-surveys/acs/geography-acs/areas-published.html) Provider: [About Page.](https://censusreporter.org/about/) Additional Links: [GitHub Repository.](https://github.com/censusreporter/censusreporter)
- [IPUMS National Historic GIS](https://www.nhgis.org/) - 米国全国歴史地理情報システム（NHGIS）は、1790年から現在までの米国統計地域（州、県、街区、トラクトなど）の人口、住宅、農業、経済データの要約表および時系列データに加え、GISに適合する境界ファイルを簡単に提供している。
- [Global Human Settlement Layer](https://ghsl.jrc.ec.europa.eu/download.php?ds=pop) - 欧州連合が提供する衛星観測による土地覆被分類および国際人口調査に基づく、世界の人口のグローバルレイヤーである。

### 教育 <a id="education"></a>

- [Education Demographics & Geographic Estimates (EDGE)](https://nces.ed.gov/programs/edge/Home) - EDGEは、人口および学校関連の地理データ（位置や地域）にアクセスできる。

- [National Center for Educational Statistics](https://nces.ed.gov/datalab/index.aspx) - 米国教育統計センター（NCES）は、教育に関連するデータの収集および分析を行う主要な連邦機関であり、そのデータラボは30以上の教育データセットにアクセス可能であり、ユーザーに迅速なレポートおよびチャート機能を提供している。

### 雇用 <a id="employment"></a>

- [Longitudinal Employer-Household Dynamics (LEHD)](https://lehd.ces.census.gov/) - The LEHD program combines administrative data, and data from censuses and surveys. From these data, the program creates statistics on employment, earnings, and job flows at detailed levels of geography and industry and for different demographic groups. Additional Information: [On The Map Download Page](https://onthemap.ces.census.gov/).
- [Bureau of Labor Statistics](https://www.bls.gov/) - 米国経済における労働市場活動、労働環境、価格変動、生産性に関するデータを測定し、公的および民間の意思決定に提供する米国労働統計局

### 環境と生態系サービス <a id="environment-and-ecosystem-services"></a>

- [American Conservation and Stewardship Atlas](https://www.conservation.gov/pages/atlas-and-data) - 複数の機関が協力して提供するリソースで、アメリカ各地のコミュニティにおける地元主導のパートナーシップ型の保全および復元活動を示し、記録している。
- [CropScape](https://nassgeodata.gmu.edu/CropScape/) - このアプリケーションは、米国連続地域における主な生育期の作物覆蓋を示す、農地データレイヤー（CDL）のデータを表示している。
- [EnviroAtlas](https://www.epa.gov/enviroatlas) - 自然から人々が得る多くの利益、米国では生態系サービスと呼ばれるものにアクセスできる、インタラクティブなツールとリソースのコレクションである。
- [National Biogeographic Map](https://www.usgs.gov/tools/national-biogeographic-map) - A platform maintained by the United States Geological Survey (USGS) that provides a platform for analysis of questions about what species are where, how well protected they are, how vulnerable they are to stressors, and what management options will have the greatest benefit for conservation of biodiversity.  Additional Links: [More Information about the Tool](https://www.usgs.gov/news/technical-announcement/new-species-habitat-distribution-maps-now-support-conservation-planning)
- [National Hydrography](https://www.usgs.gov/core-science-systems/ngp/national-hydrography/access-national-hydrography-products) - NHDPlus高解像度（NHDPlus HR）、国家水文データセット（NHD）、流域境界データセット（WBD）はダウンロード可能であり、マップサービスとして利用可能である。これらのデータセットは、米国における環境計画および雨水管理活動に貢献できる。
- [National Wetland Inventory](https://www.fws.gov/program/national-wetlands-inventory) - アメリカ合衆国魚類・野生生物サービス（FWS）のナショナルウェットランドインベントリ（NWI）は、米国における湿地の多様性、特性、および分布に関する詳細な情報を提供する公開リソースである。
- [Park Score](https://www.tpl.org/parkscore) - パブリックランド・トラストは、アメリカ合衆国100大都市における公園のアクセスと品質についての包括的な評価をキュレーションしている。
- [Tree Canopy](https://data.fs.usda.gov/geodata/rastergateway/treecanopycover/) - アメリカ合衆国森林サービス（USFS）の地理空間技術および応用センター（GTAC）は、樹木の冠層覆蓋（TCC）データセットを構築・維持している。
- [Geospatial Conservation Atlas](https://geospatial.tnc.org/) - ナチュラーコンサーブェンシーの地理空間ポータルには、ウェブマップ、アプリ、マップギャラリー、地域活動ポータル、保護データ、その他リソースが含まれている。
- [National Geologic Map Database](https://ngmdb.usgs.gov/mapview/) - 米国地質調査所（USGS）のナショナルジオロジカルマップデータベース（NGMDB）が開発した全国的な地質マップデータベースで、数千の地質マップが地図の相互作用を通じて検索可能であり、マップは元の測定時のズームレベルで表示される。

### エネルギーと天然資源 <a id="energy-and-natural-resources"></a>
- [Low-Income Energy Affordability Data (LEAD)](https://www.energy.gov/scep/low-income-energy-affordability-data-lead-tool-and-community-energy-solutions) - 米国エネルギー省が提供する無料オンラインツール。このインタラクティブプラットフォームは、低所得および中所得世帯のエネルギー特性を理解することで、エネルギー目標およびプログラム計画におけるデータに基づいた意思決定を支援する。
- [State and Local Planning for Energy (SLOPE) Platform](https://maps.nrel.gov/slope/) - 米国エネルギー省が提供する無料でアクセスしやすいオンラインプラットフォーム。これは、データに基づいた州および地方のエネルギーおよび脱炭素化計画を支援する。SLOPEは、計画ニーズを支援する2つのツール、すなわちシナリオプランナーとデータビューを含む。
- [NREL Solar Radiation](https://nsrdb.nrel.gov/) - ナショナルソーラーラジエーションデータベース（NSRDB）は、気象データおよび太陽放射の3つの主要な測定値（グローバルホライズン、ディレクトノーマル、ディフューズホライズン）の時刻ごとのおよび半時刻ごとの値を収集した連続的なデータセットである。

### 公平性と環境正義 <a id="equity-and-environmental-justice"></a>

- [CDC Social Vulnerability Index](https://www.atsdr.cdc.gov/place-health/php/svi/index.html) - This dataset uses 15 U.S. census variables to help local officials identify communities that may need support before, during, or after disasters based on their level of social vulnerability. Additional Information: [Download](https://www.atsdr.cdc.gov/place-health/php/svi/svi-data-documentation-download.html).
- [EJ Screen](https://www.epa.gov/ejscreen/understanding-ejscreen-results) - This application uses maps and reports to present three kinds of information: Environmental indicators, demographic indicators and EJ Indexes. Additional Information: [Download](https://www.epa.gov/ejscreen/download-ejscreen-data).
- [Extreme Heat Dashboard](https://liheap-and-extreme-heat-hhs-acf.hub.arcgis.com/) - 米国健康・人間サービス省の低所得住宅エネルギー支援プログラム（LIHEAP）が開発したダッシュボードは、計画者に極端な暑さとエネルギー需要およびその影響が脆弱なコミュニティに与える影響を理解する手助けとなる。
- [H+T Index](https://htaindex.cnt.org/) - 住宅および交通（H+T®）の負担指数は、地域レベルで住宅および交通費のコストを含む、包括的な負担の視点を提供している。これは、ネイショナルテクノロジーセンターが提供している。
- [Location Affordability Index](https://www.hudexchange.info/programs/location-affordability-index/) - 場所の負担指数（LAI）は、このギャップを埋めるために、地域レベルでの世帯の住宅および交通費の見積もりを提供し、建物環境および人口統計の構成データを併せて提供している。
- [Opportunity Atlas](https://www.opportunityatlas.org/) - These [datasets provided by Opportunity Insights](https://opportunityinsights.org/data/?geographic_level=0&topic=0&paper_id=1652#resource-listing) allow you to analyze social mobility and a variety of other outcomes from life expectancy to patent rates by neighborhood, college, parental income level, and racial background.
- [Mapping Inequality](https://dsl.richmond.edu/panorama/redlining/) - 地図に地元の所有者ローンコーポレーション（HOLC）の地図を地図化し、現代のアメリカ地図に重ねるインタラクティブマップ。これらの色分けされたHOLCマップは、不動産業界で知られる「レッドライン」という実際の実施方法の物理的体現である。追加情報：ライセンス：CC BY-NC-SA 4、地理範囲：アメリカ合衆国下の48州の主要都市圏（1935-1940年）。
- [Justice40](https://screeningtool.geoplatform.gov/en/methodology) - このツールの目的は、連邦機関が、不利な状況にあるコミュニティ、すなわち差別化され、未満で、汚染に過剰に負担されているコミュニティを特定することを支援することである。これは、8つの基準カテゴリにおけるカウンシーマップレベルでの複数のデータソースを統合している。
- [USDOT Equitable Transportation Community Explorer](https://experience.arcgis.com/experience/0920984aa80a4362b8778d779b090723/page/ETC-Explorer---Homepage/) - アメリカ合衆国運輸省の公正な交通コミュニティ（ETC）エクスプローラーは、2020年のカウンシーマップとデータを用いて、交通投資不足によってコミュニティが経験する累積的な負担を5つの要素（交通不安定性、気候および災害リスク負担、環境負担、健康脆弱性、社会的脆弱性）で探索するインタラクティブウェブアプリケーションである。
- [STEAP](https://maps.dot.gov/fhwa/steap/) - プロジェクト・フォーリスク・エクイティ・アナリシス・オブ・プロジェクト（STEAP）は、カウンシーマップレベルでの潜在的なプロジェクト場所を迅速にスクリーニングできるカウンシーマップサンプリングツールであり、タイトル6、環境正義、およびその他の社会経済データ分析を支援する。
- [Tree Equity Score](https://www.treeequityscore.org/) - このデータセットは、都市樹木冠層の重要な利益が、都市化地域で最も必要な人々にどれだけ届いているかを測定している。
- [Screening Tools](https://screening-tools.com/) - パブリック・エコノミック・データ・パートナーズのプロジェクトにより、環境および社会的脆弱性評価に関連する連邦データセットをアーカイブ・提供している。このサイトを通じて配布されたデータセットおよび評価ツールには、EJ ScreenおよびCDC SVIなどが含まれる。

### 健康 <a id="health"></a>

- [County Health Rankings](https://www.countyhealthrankings.org/) - 年次ランキングは、私たちが暮らす、学ぶ、働く、遊びる場所が健康に与える影響を明らかにした、非常に重要なスナップショットを提供している。
- [HealthData.gov](https://healthdata.gov/) - このサイトは、米国における高価値の健康データを起業家、研究者、政策決定者によりアクセスしやすくすることを目的としており、すべての人の健康結果の向上を目指している。
- [Heat and Health Tracker](https://ephtracking.cdc.gov/Applications/heatTracker/) - 極端な暑さによる公衆衛生影響に関する地域ごとの情報を提供するリソースで、暑さイベントへの準備に資源をより適切に配分する手助けとなる。このツールには、暑さ負担データ（歴史的な暑さ関連の病気、暑さ関連の救急病院受診、暑さ労働者の健康）、暑さ暴露の傾向、およびZIPコードタブレーションエリア（ZCTA）ごとの暑さ影響を特定する空間インデックスツールが含まれている。
- [CDC Places](https://www.cdc.gov/places/index.html) - CDCとの協力により、人口規模や都市・農村の状況に関わらず、地域の健康結果の負担および地理的分布をよりよく理解し、公衆衛生対策の計画を支援するための地域の健康部門および管轄区域が行える仕組み。
- [USALEEP](https://www.cdc.gov/nchs/nvss/usaleep/usaleep.html) - アメリカ合衆国における2010年から2015年までの期間における、カウンシップトラクトの大部分についての出生時の平均寿命の推定値。
- [WHO Data](https://www.who.int/data) - 世界保健機関（WHO）が提供する健康データ収集データセット。これは、健康指標および関連データに関する国際的なデータセットを含む。

### 歴史的環境保全 <a id="historic-preservation"></a>

- [National Register of Historic Places](https://www.nps.gov/subjects/nationalregister/data-downloads.htm) - 国家歴史登録リストは、保存に価するアメリカ合衆国の歴史的場所を公式にリストアップしたものです。
- [UNESCO World Heritage Sites](https://whc.unesco.org/en/list/) - 世界遺産サイトとは、UNESCOの世界遺産委員会が維持するリスト（世界遺産リスト）に掲載され、世界中で優れた普遍的価値を持つと評価される場所を指します。

### 住宅 <a id="housing"></a>

- [FHFA Public Data](https://www.fhfa.gov/DataTools/Downloads) - 住宅金融機関（FHFA）は、アメリカ合衆国における住宅および住宅ローンに関する公開データセットを提供しています。これは、全州を含むアメリカ合衆国の住宅ローン市場の活動を、住宅価格指数、リファイナンス報告書、破産防止報告書、住宅取得データセット、およびパフォーマンス報告書などを通じて提供しています。
- [Home Attainability Index](https://www.policymap.com/newmaps#/widget/11888/2BYFMAXETO4YXNIX5M1HRKOHIQWDLITM) - 2022年版の都市土地インスティテュート・テリウィッガーセンターの住宅達成可能性指数。地域労働力が選択可能な住宅市場の範囲を理解するためのリソースであり、アメリカ合衆国における特定の地域の幅広い要因を明らかにします。
- [National Housing Preservation Database](https://preservationdatabase.org/) - 国家住宅保存データベースは、9つのHUDおよびUSDAデータソースから抽出された物件および補助金レベルのデータを含み、全国にわたって70,00及以上の物件に関する情報を提供しています。

### 土地利用と土地被覆 <a id="land-use-and-land-cover"></a>

- [NLCD](https://www.usgs.gov/centers/eros/science/national-land-cover-database) - 国家土地覆被データベースは、米国連邦政府の機関が協力する多解像度土地特性連合（MRLC）と協力して作成され、アメリカ合衆国50州およびプエルトリコのすべての地域に適用される最新かつ全国的に一貫した土地覆被データを提供しています。
- [Corine Land Cover](https://land.copernicus.eu/pan-european/corine-land-cover) - European Land Cover Database generated by the Land Monitoring Core Service (LMCS) of [Copernicus](https://land.copernicus.eu/), the European flagship programme on Earth Observation.
- [National Zoning & Land Use Database](https://github.com/mtmleczko/nzlud/tree/main) - このGitHubプロジェクトは、主要都市の地方自治体のゾーン規則を平文でカタログ化しており、規則の比較や言語モデルの微調整に役立つ可能性があります。
- [National Zoning Atlas](https://www.zoningatlas.org/) - This collaborative project is working to depict key aspects of zoning codes in an online, user-friendly map to enable cross jurisdiction comparisons of land use regulations. This project was further explored a Planning Webcasts [here](https://www.youtube.com/watch?v=XBWAXHDPM8Q&ab_channel=PlanningWebcast) and [here](https://www.youtube.com/watch?v=WjWe2U313gE&ab_channel=PlanningWebcast).

### OpenStreetMap <a id="openstreetmap"></a>

- [OpenStreetMap](https://www.openstreetmap.org/) - 無料のWiki世界地図。これは世界で最も大きなボランティア地情報データベースの一つであり、そのコンテンツには観光地、ルートネットワーク、その他地情報が含まれています。
- [BBBike](https://download.bbbike.org/osm/bbbike/) - 世界中の都市のシェイプファイルおよび原始OSM形式のデータを週に1回抽出したものです。これは、特定の都市のデータ抽出を検討している場合に有用です。
- [Geofabrik](http://download.geofabrik.de/) - OpenStreetMapのPBFまたはシェイプファイル形式の抽出データを毎日ダウンロード可能です。
- [MetroExtracts](https://www.interline.io/osm/extracts/) - 毎日、InterlineによるOSM抽出は、全体のOpenStreetMapを反映し、都市および地域規模の抽出を作成し、GIS用のフォーマットにダウンロード可能にします。
- [Overpass Turbo](https://overpass-turbo.eu/) - OpenStreetMap向けのウェブベースデータマイニングツール。Overpass APIの任意のクエリを実行し、結果をインタラクティブな地図上で表示し、ユーザーがGeoJSONファイル（Shapefileに変換可能）としてクエリデータをエクスポートできます。また、新規ユーザー向けに「ウィザード」ツールを提供し、Overpass Turboを使用することで、世界中のあらゆる場所をOpen Street Mapの専用タグでクエリできます。
- [Humanitarian OpenStreetMap Tools & Data](https://www.hotosm.org/tools-and-data) - HOT provides a rich set of tools for the OSM community. An especially helpful tool is the [Export Tool](https://export.hotosm.org/en/v3/).
- [Tasking Manager](https://tasks.hotosm.org/) - 誰もがOpen Street Mapを学び、世界の未マッピング地域に貢献できるプラットフォーム。これは、開発途上国における災害対応と回復力の強化において極めて重要であり、災害が発生した際に、援助者や地域住民が正確な地図にアクセスできるようにします。
- [Overture Maps](https://overturemaps.org/) - 現在および次世代の地図製品を実現するために、信頼性の高い、使いやすく、相互運用可能なオープン地図データを構築するための共同マッピング連合。OpenStreetMapおよびその他のデータセットを基に、オープンデータへのアクセスを拡大しています。

### 政治 <a id="politics"></a>

- [OpenPrecincts](https://gerrymander.princeton.edu/) - 区画再編のプロセスをすべての市民に開放し、すべての選挙人に対して公平な区画境界を確保するためのデータおよびソフトウェアリソース。
- [MIT Election Lab](https://electionlab.mit.edu/data) - 選挙ラボは、選挙に関する研究や実施方法を支援するデータセットの集積施設です。私たちおよび他の研究機関が提供した選挙データおよび研究ツールを検索できます。

### レジリエンスと自然災害 <a id="resilience-and-natural-hazards"></a>

- [Adaptation Clearinghouse](https://www.adaptationclearinghouse.org/) - ジョージタウンの気候センターが維持している、広範なオンラインデータベースおよびネットワークサイト。これは、気候変動に適応するための政策立案者およびその他の関係者に提供されています。
- [Community Resilience Estimates for Heat](https://www.census.gov/data/experimental-data-products/cre-heat.html) - アメリカ合衆国国勢調査局が開発した実験データセットで、家庭単位での社会的脆弱性および極端な暑さへの暴露を測定している.
- [Earthquake Data](https://www.ngdc.noaa.gov/hazard/earthqk.shtml) - NOAAが提供したデータは、2150年BCから現在までの世界規模の大きな地震の記録であり、地理情報を含んでいる.
- [Extreme Heat Data Pathfinder](https://www.earthdata.nasa.gov/learn/pathfinders/disasters/extreme-heat-data-pathfinder) - ナスアのリモートセンシングデータに基づく極端な暑さ分析および可視化に必要な、複数のデータセットを収録する中心リポジトリで、ユーザーに関連するリアルタイムデータへのアクセスを提供している.
- [HIFLD](https://hifld-geoplatform.opendata.arcgis.com/) - このサイトは、公開された公共領域に存在する国家レベルの地理空間データを提供しており、コミュニティの準備、耐性、研究などに役立つ可能性がある.
- [National Risk Index](https://www.fema.gov/flood-maps/products-tools/national-risk-index) - ナショナルリスクインデックスは、FEMAが開発したオンラインマッピングアプリで、18の自然災害に最も脆弱なコミュニティを特定している.
- [RAPT](https://rapt-fema.hub.arcgis.com/pages/data) - 耐性分析および計画ツール（RAPT）は、すべての人にコミュニティの耐性に関連する重要なデータと分析ツールにアクセスできるように提供している。RAPTにおけるコミュニティ耐性指標は、コミュニティ耐性指標分析（CRIA）から取得されている.
- [Sea Level Rise Viewer](https://coast.noaa.gov/slr/) - NOAAが提供したマップビューは、連邦・州・地方の海岸資源管理者および計画者に、海面上昇および海岸洪水の影響についての初期の概観を提供するものである.

### 交通 <a id="transportation"></a>
- [Accessibility Observatory](http://access.umn.edu/data/datasets/) - アメリカの都市間の交通アクセスの多様なモードを評価する「アクセシビリティオバザーバトリー」は、UMN（ミネソタ大学）が「アクセスアクロスアメリカ」シリーズの一環として実施している。年次報告書が発表され、一部のデータセットはミネソタ大学のデジタルコンサーバトリーを通じて提供されている.
- [BTS Open Data Site](https://data-usdot.opendata.arcgis.com/) - BTSオープンデータサイトでは、BTS国家交通アトラスデータベース（NTAD）製品に含まれる地理空間データを閲覧できる。NTADは、アメリカ合衆国全体の公共交通施設およびネットワークに関する公的空間情報、人々・商品・車両・舟の輸送ネットワーク上の流れ、および輸送ネットワークに影響を及ぼすまたは影響を受ける社会的・経済的・環境的状況を含む全国規模の地理データベースである.
- [City Access Map](https://www.cityaccessmap.com/) - CityAccessMapは、都市計画者向けに都市科学者によって開発されたもので、OpenStreetMapおよびグローバルヒューマンセットルメントレイヤー（GHSL）のオープンデータを用いて、世界のどの都市においても、さまざまなサービスへの歩行アクセスを定量的に評価・可視化している.
- [CTPP](https://ctpp.transportation.org/) - CTPPプログラムは、アメリカ国勢調査（ACS）5年間（および過去の国勢調査10年間）の集計データを取得している。ACSデータとCTPPデータの主な違いは、家庭から仕事への「流れ」および小地域単位での「職場ベース」データである.
- [HPMS](https://www.fhwa.dot.gov/policyinformation/hpms.cfm) - HPMSは、アメリカ合衆国における道路の範囲、状態、性能、使用状況および運用特性に関する国家レベルの道路情報システムである.
- [Transitland](https://transit.land) - An open data platform that collects GTFS, GTFS Realtime, and other open data feeds from over 2,500 transit operators in over 55 countries. Additional Information: [Interline](https://www.interline.io/), [GitHub](https://github.com/transitland).
- [National Noise Map](https://www.bts.gov/geospatial/national-transportation-noise-map) - ナショナルトランスポートノイズマップ内のデータは、指定された年における平均年間日の全国的な騒音レベルを表している.
- [National Transit Database](https://www.transit.dot.gov/ntd/ntd-data) - 米国における公共交通機関が連邦輸送局に報告義務のある運用、財務、資産データのリポジトリである.
- [Global Urban Street Networks](https://geoffboeing.com/publications/street-network-models-indicators-world/) - Ready‐to‐use global street network models and calculated indicators in a GIS format. Additional Information: [Geopackage Download](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/E5TPDQ)
- [Rapid Transit Database](https://www.itdp.org/rapid-transit-database/) - 国際輸送・開発政策研究所が発表した、世界中の急行輸送路（バス急行、ライトレール、地下鉄を含む）の全コレクションである.
- [TIGER](https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html) - 交通に関する都市・地域計画のデータ、仕様、ツール、または資料です。
  Referencing (TIGER) database consists of boundary, road line, and boundary information pulled from the US Census's master address files.
- [Transit Equity Dashboards](https://dashboard.transitcenter.org/) - TransitCenterが発表した、7（数えている）アメリカ都市における輸送システムの公平性分析である.


## 商用データ資源 <a id="vendor-data-resources"></a>
商用データ資源の対象範囲と利用目的を説明しています。

---
### 建築環境 <a id="built-environment-1"></a>
- [CyberCity3d](https://www.cybercity3d.com/) - 立体画像から多様なデジタル都市モデルを提供し、130都市にわたる広範なライブラリを保有している.
- [PLW Model Works](https://plwmodelworks.com/industries/) - 地理空間モデリングの専門知識を活用し、さまざまな業界に向けた高精度かつ写真精度の3D多角形都市モデルを構築している.

### 人口統計 <a id="demographic-1"></a>

- [Esri Tapestry Segmentation](https://www.esri.com/en-us/arcgis/products/tapestry-segmentation/zip-lookup) - ZIPコードに基づく人口の人口構成、経済、教育、消費者特性について簡潔に提供している.
- [Data Axle](https://www.data-axle.com/) - アメリカおよびカナダにおける企業および消費者の最も包括的かつ正確なビジネス・消費者データベースを提供しており、企業および消費者について400以上の異なる属性を備えている.

### インフラストラクチャ <a id="infrastructure"></a>

- [Mapillary](https://www.mapillary.com/) - 世界中から街並みレベルの画像およびAIによって生成された地図データにアクセスできます。カバー範囲のギャップを埋めるために、新しいカバーをリクエストするか、使いやすいモバイルアプリで自らのデータを収集してください。
- [Ecopia](https://www.ecopiatech.com/) - AIを活用して、地球の高解像度画像をHDベクターマップに変換し、インフラ資産を地理空間形式でデジタル化する。
- [Geomate](https://geomate.ca/en/) - 高解像度航空写真からHDベクターマップを提供し、自律走行車や都市計画の用途をサポートします。
- [Cyclomedia](https://www.cyclomedia.com/us) - 街面レベルでの画像およびLIDARデータを正確に収集し、価値ある洞察に変換します。

### 土地利用と土地被覆 <a id="land-use-and-land-cover-1"></a>

- [Cotality](https://www.cotality.com/) - 高品質の土地所有データを提供し、詳細な不動産の特性、売買記録、評価情報および現在の郡評価機関のデジタル資料への即時アクセスを可能にします。
- [Regrid](https://regrid.com/) - あなたのマップ、アプリ、空間分析向けの土地所有権および位置情報データを提供するトップ企業。
- [CoStar](https://www.costar.com/) - イギリス、アメリカ、カナダをサービスする不動産情報および分析提供企業。
- [EarthDefine](http://www.earthdefine.com/) - AIを用いて、地球センサデータを高解像度の土地覆被分類や建物の境界線など、利用可能な地理空間情報製品に変換します。

### レジリエンスと自然災害 <a id="resilience-and-natural-hazards-1"></a>

- [Climate Engine](https://climateengine.com/) - 気候関連の危険に伴う多様な状況において、財務的および運用的な耐性を支えるデータと洞察を提供します。
- [RiskFactor](https://firststreet.org/risk-factor/) - Provided by the First Street Foundation, this tool enables users to understand properties' environmental risks from flooding, wildfire and extreme heat. The tool communicates historic events, current risks, and future projections for properties based on peer-reviewed research. Additional Information: [Access Census Tract Risk Data](https://firststreet.org/data-access/), [First Street Foundation Website](https://firststreet.org/)
- [Jupiter Intelligence](https://jupiterintel.com/) - 洪水、降水量、風、気温・気温、火災、雷雨、乾燥など、さまざまな危険に対して、2100年までをカバーするグローバル高解像度気候予測を提供し、資産レベルでの損失および財務損失の推定も行います。

### 都市観測 <a id="urban-observation"></a>

- [Numina](https://numina.co/) - エッジコンピューティングデバイスを活用し、道路レベルのさまざまな活動を測定します。匿名かつ集計的に、Numinaは街中の旅人や物体の通行量、移動経路、交通行動を提供します。
- [Transoft](https://safety.transoftsolutions.com/) - ITS Safety solutions utilize computer vision to identify 'near-miss' behavior on streets. This technology was featured Planning Magazine in the [Art of Learning by Example](https://www.planning.org/planning/2020/oct/art-of-learning-by-example/).
- [Automotus](https://www.automotus.co/) - 基盤となるコンピュータビジョン技術を活用し、都市、空港、車両ファルト、企業がリアルタイムで道路の状況を監視できるプラットフォーム。道路周辺の管理ポリシーを可能にし、収益を高めながら道路の渋滞を減らし、持続可能性と公平性を高める。
- [curbFlow](https://www.curbflow.com/) - 建築環境におけるイベントの定量を安価かつ迅速に実現する、コンピュータビジョンベースのサービス。
- [StreetSimplified](https://www.streetsimplified.com/) - 一時的なカメラをコンピュータビジョンを用いて展開し、スピード違反、ルール遵守、赤信号違反などのさまざまな交通行動を検査します。
- [EcoCounter](https://www.eco-counter.com/) - 1997年より、Eco-Counterは、赤外線センサーからコンピュータビジョンベースのカウンターへと進化した、歩行者および自転車の数を計測する独自かつ革新的なソリューションを開発してきました。
- [VivaCity](https://vivacitylabs.com/north-america/) - ビーバーは、道路や多モーダルカウントにおける近いミス行為を特定するための輸送監視ソリューションを提供しています。

### 移動行動 <a id="travel-behavior"></a>

- [AirSage](https://airsage.com/) - 2000年から衛星に設置されたセルフォンによる位置情報サービスおよびGPSデータを提供している有名企業。
- [Replica](https://replicahq.com/platform) - 活動ベースモデルプロセスに基づいた、豊かな出発地・到着地、支出、およびシナリオ影響分析を提供するデータプラットフォーム。
- [SafeGraph](https://www.safegraph.com/) - 目的地の場所およびその特徴（例：アメリカ合衆国における消費率）に関する情報提供を行うポイントオブインターフェース（POI）プロバイダー。
- [WeJo](https://www.wejo.com/) - 接続車両データのグローバルな共有とアクセスを、シンプルかつ安全に実現しています。このデータは、出発地・目的地分析、安全性や速度に関する研究など、さまざまな用途に活用できます。
- [StreetLight Data](https://www.streetlightdata.com/) - スマートフォンをセンサーとして活用し、北米における車両、自転車、歩行者を測定するデータを提供。必要なカウント、出発地・到着地（O-D）などのメトリクスに24時間365日アクセスできるため、予算内かつ期日までに任務を遂行可能。
- [Strava](https://developers.strava.com/) - ランナーおよびサイクリスト向けの人気トラッキングアプリのAPI。アクティブな移動手段の利用状況やパターンを理解するためのデータを提供。
- [Teralytics](https://www.teralytics.net/) - 電波トラッキングデータを用いて、世界中の通信事業者ネットワークを活用し、移動パターンに関するデータと洞察を提供。
- [Inrix](https://inrix.com/) - 自動車および輸送業界向けの革新的なデータ製品を提供。リアルタイムの駐車場や交通情報ソリューションを含む。
- [Unacast](https://www.unacast.com/) - 80以上の国における人々の移動に関する位置情報に基づく分析を提供。歩行者流量メトリクスから訪問者の交差利用までをカバー。
- [PlacerAI](https://www.placer.ai/) - 異なるポイント・オブ・インタレストへの歩行者流量の推定を提供する位置情報データプロバイダー。

## 計画データ仕様 <a id="planning-data-specifications"></a>
計画データ仕様の対象範囲と利用目的を説明しています。

---

### 建築環境 <a id="built-environment-2"></a>

- [CityGML](https://www.ogc.org/standards/citygml) - CityGML標準は、仮想3次元都市モデルの表現、保存、交換に関する概念モデルおよび交換フォーマットを定義しており、市民システムのための多分野の共通運営プラットフォームを可能にする。
- [LBCS](https://www.planning.org/lbcs/standards/) - The [American Planning Association's](https://www.planning.org/) Land Based Classification Standards classifies land uses across five dimensions (Activity, Function, Structure, Site, and Ownership).
- [DTDL](https://github.com/Azure/opendigitaltwins-building) - デジタルツイン定義言語（DTDL）は、開発者が自らのトポロジーで使用するエンティティの言語を定義するための言語である。
- [BLDS](https://github.com/open-data-standards/permitdata.org/wiki/Core-Permits-Dataset-Requirements) - BLDSデータ標準は、市民技術企業、政府およびその他の関心を持つ当事者による協力により、建物および建設許可データの共有データ仕様を創出する取り組み。
- [HouseFacts](https://sites.google.com/site/housefactsdatastandard/home) - House Factsデータ標準は、住宅建物の運用、安全、性能に関する政府データを報告するための一貫したフォーマットを提供する。
- [IFC](https://technical.buildingsmart.org/standards/ifc/) - 建物および土木インフラを含む建物環境に関する標準化されたデジタル記述。これはオープンで国際的な標準（ISO 16739-1:2018）である。

### 環境 <a id="environmental"></a>
- [EPA Data Standards](https://www.epa.gov/data-standards) - 環境保護局が採用したデータ標準の多様性にリンクしたチャート

### 交通 <a id="transportation-1"></a>

- [SharedStreets](https://www.sharedstreets.io) - Referencing System is a global, non-proprietary linear referencing system for describing streets maintained by SharedStreets. Additional Information: [GitHub](https://github.com/sharedstreets/sharedstreets-ref-system)
- [CurbLR](https://www.curblr.org) - An open data specification for curb regulations maintained by SharedStreets. Additional Information: [GitHub](https://www.github.com/sharedstreets/curblr), Demo: Interactive [map and example feed](https://demo.curblr.org/), Blog post: [Why CurbLR was built](https://medium.com/sharedstreets/crossroads-for-the-curb-be3137154148).
- [CDS](https://github.com/openmobilityfoundation/curb-data-specification) - Curb Data Specificationは、駐車場規制に関するデータ仕様を提供し、接続されたイベントおよびメトリクスAPIを提供することで、都市が駐車場ゾーンプログラムおよび周辺地域の運営を管理し、利用状況と影響を測定できるようにする。
- [GTFS](https://developers.google.com/transit/gtfs) - 一般輸送情報フィード規格（GTFS）は、輸送システムを記述する人気のある標準である。
- [GTFS-flex](https://github.com/MobilityData/gtfs-flex) - GTFSへの拡張として、柔軟な公的輸送サービス（マイクロトランスポート／パラトランスポート）をモデル化するデータフォーマット。
- [GTFS-RT](https://developers.google.com/transit/gtfs-realtime) - この標準は、ユーザーにリアルタイムでの輸送データ更新を提供し、輸送サービスの体験を大きく向上させる。
- [NeTEx](https://netex-cen.eu/) - ネットワーク時刻表交換は、ヨーロッパで用いられる標準で、輸送システムを記述するための標準化された時刻表およびその他のシステム特性を交換する。
- [SIRI](https://www.transmodel-cen.eu/siri-standard/) - リアルタイム情報サービスインターフェース（SIRI）はヨーロッパで定められたリアルタイム情報の標準であり、アメリカでは採用が限定的だが、ヨーロッパ標準を満たすハードウェアおよびネットワークシステムと互換性がある。
- [shared-row](https://github.com/d-wasserman/shared-row) - 道路帯の全断面をモデル化し、歩行者、自転車、道路要素を統合した1つのデータセットに表現するためのデータ仕様。
- [OpenSidewalks](https://github.com/OpenSidewalks/OpenSidewalks-Schema) - ルート可能な歩行者ネットワークをモデル化し、歩行者ネットワークおよびその周辺データを記述・共有するためのデータ仕様。
- [GBFS](https://github.com/NABSA/gbfs) - 一般自転車シェアフィード規格は、共有移動システムの利用可能性を標準化したデータフィードである。
- [MDS](https://github.com/openmobilityfoundation/mobility-data-specification) - モビリティデータ規格は、モビリティ企業と地方自治体の間の通信を可能にするデータ規格である。
- [MTLFS](https://github.com/vta/Managed-and-Tolled-Lanes-Feed-Specification) - マネージド・アンド・トールド・レーン・フィード規格は、マネージド・レーンおよびトールド業界が動的トール料金や、マネージド・レーンの目的（例えば、ランプメーター、バス専用レーン、エクスプレスレーンなど）を標準化し、共有するために設計されたものであり、特にリソースが動的に価格設定されている場合に適用される。
- [GMNS](https://github.com/zephyr-data-specs/GMNS) - 一般モデルネットワーク規格は、ルート可能な道路ネットワークファイルを共有するための、人間および機械が読みやすい共通フォーマットを定義している。
- [OpenDrive](https://www.asam.net/standards/detail/opendrive/) - ASAM OpenDRIVEファイルに保存されるデータは、道路、レーン、物体（道路の線を含む）の幾何学的形状、および道路に沿った特徴（例：信号）を記述している。
- [GATIS](https://dotbts.github.io/BPA/) - ナショナル・コラボレーション・オン・バイクル・ペデストリアン・アンド・アクセシビリティ・インフラストラクチャ・データ（NC-BPAID）がサポートするアクティブ・トランスポートインフラストラクチャのデータ規格。
- [GOFS](https://gofs.org/) - 一般オンデマンドフィード規格は、旅行者向けの需給対応輸送に関する情報のオープンソース・コミュニティドリブンデータ規格である。

## 計画分野のコーディング資源 <a id="planning-coding-resources"></a>
計画分野のコーディング資源の対象範囲と利用目的を説明しています。

---

### Python <a id="python"></a>
Pythonの対象範囲と利用目的を説明しています。

- [Pandas](https://pandas.pydata.org/) - Python用の柔軟で強力なデータ分析／操作ライブラリで、ラベル付きデータ構造（Rのdata.frameオブジェクトに類似）、統計関数なども提供している。
- [Arcpy](https://pro.arcgis.com/en/pro-app/latest/arcpy/get-started/what-is-arcpy-.htm) - Pythonによる地理データ分析、データ変換、データ管理、マップ自動化を行うためのサイトパッケージ。
- [ArcGIS Python API](https://developers.arcgis.com/python/api-reference/) - ArcGIS API for Pythonは、GISの可視化および分析、空間データ管理、GISシステム管理などのタスクを、インタラクティブにまたはスクリプトで実行できる、強力で現代的かつ使いやすいPythonライブラリである。このライブラリは、ArcGISプラットフォーム内でPandasの簡単な使用を可能にする。
- [Geopandas](https://geopandas.org/) - Pythonにおける地理空間データの扱いを簡単にするオープンソースプロジェクト。GeoPandasはPandasが使用するデータ型を拡張し、幾何学的型に対して空間操作を可能にする。
- [Folium](https://github.com/python-visualization/folium) - Leafletを使用して、地理空間データをインタラクティブマップ上で迅速に可視化するための軽量ライブラリ。
- [Partridge](https://partridge.readthedocs.io/en/stable/readme.html) - Python 3.6以降でGTFSフィードをPandas DataFramesを使用して扱うためのライブラリ。
- [Peartree](https://github.com/kuanb/peartree) - GTFSデータおよびそのネットワーク特性を探索するためのツール。
- [Pandana](https://udst.github.io/pandana/) - 都市ネットワーク分析ライブラリで、計画者に迅速なアクセス性メトリクスや最短経路の計算を支援する。追加情報：ライセンス：AGPL-3.0 ライセンス：提供元：UrbanSim Inc. (UDST)。
- [UrbanSim](https://github.com/udst/urbansim) - 都市および地域の統計モデルを構築するプラットフォーム。これらのモデルは、さまざまな政策シナリオの下で、不動産開発、人口統計、関連結果の長期的なパターンを予測するのに役立つ。情報：ライセンス：BSD ライド：提供元：UrbanSim Inc. (UDST)。
- [Geosnap](https://github.com/spatialucr/geosnap) - USカウンシルデータを用いた地理空間および時間的近接分析。
- [OSMnx](https://github.com/gboeing/osmnx) - ストリートネットワーク用のPython。OpenStreetMapからストリートネットワークおよびその他の空間データを取得、モデル化、分析、可視化する。
- [Madina](https://github.com/City-Form-Lab/madina) - 都市ネットワークの表現および分析を簡便化するためのクラスと関数のパッケージ。このライブラリには、Urban Network Analysis ToolsのPython実装が含まれている。
- [Pybikes](https://github.com/eskerda/pybikes) - さまざまなウェブサイトおよびAPIから自転車シェアリングデータをスクレイピングするためのツールセットを提供し、そのような情報にアクセスするための統一的で一般化されたクラスとメソッドを提供する。
- [Leafmap](https://github.com/giswqs/leafmap) - A free and open-source Python package that enables users to analyze and visualize geospatial data with minimal coding in a Jupyter environment. Leafmap's interactive GUI allows no code layer management and analysis including a powerful analytical backend (i.e., [WhiteboxTools](https://www.whiteboxgeo.com/manual/wbt_book/intro.html)). Additional Information: [leafmap.org](https://leafmap.org/), [JOSS Article](https://joss.theoj.org/papers/10.21105/joss.03414), [Medium Article](https://medium.com/spatial-data-science/leafmap-a-new-python-package-for-geospatial-data-science-353735b3f889).
- [Prettymaps](https://github.com/marceloprates/prettymaps) - OpenStreetMapデータから美しいマップを描くための小さなPython関数セット。
- [HerePy](https://github.com/abdullahselek/HerePy) - HERE APIにPythonインターフェースを提供するライブラリ
- [StreetTraffic](https://github.com/streettraffic/streettraffic) - HEREが提供するAPIを用いて、あなたの好きなルートや都市の交通データをスクレイピングするPythonパッケージ
- [PySAL](https://pysal.org) - Python空間分析ライブラリは、空間相関やその他の空間関係を探索するためのアルゴリズムのコレクションです
- [city-seer-api](https://cityseer.benchmarkurbanism.com/) - 歩行者スケールのネットワークベースの都市分析用のパッケージ：ネットワーク分析、都市形態、土地利用、アクセス性、統計集計
- [Geemap](https://github.com/giswqs/geemap) - Google Earth Engine、ipyleaflet、ipywidgetsと連携したインタラクティブマッピングを行うPythonパッケージ
- [Geoplot](https://residentmario.github.io/geoplot/) - cartopyとMatplotlibを拡張した高レベルのPython空間可視化ライブラリ。マッピングを簡単に行えるように設計されており、Seabornに類似しています
- [Gleam](https://github.com/dgrtwo/gleam) - R-Shinyにインスピレーションを得たインタラクティブプロットを作成するためのプロットライブラリ
- [Urbansprawl](https://github.com/lgervasoni/urbansprawl) - urbansprawlプロジェクトは、オープンデータを用いて都市の拡張を評価するためのオープンソースフレームワークを提供しています。これはOpenStreetMap(OSM)データを用いて、アクセス性、土地利用の混合度、分散度という3つの指標で拡張度を計算しています
- [Xarray-spatial](https://xarray-spatial.org/) - Numbaを用いて一般的なラスターデータ分析関数を実装し、インストールしやすく、拡張しやすいコードベースを提供します
- [Momepy](http://docs.momepy.org/en/stable/) - 都市形態の定量分析用のライブラリ（都市形態メトリクス）。これはPySAL（Python空間分析ライブラリ）の一部であり、GeoPandas、他のPyS及ネットワークXに構築されています
- [rasterio](https://github.com/rasterio/rasterio/blob/master/docs/index.rst) - 地理情報システムはGeoTIFFなどのフォーマットを用いて、衛星画像や地形モデルなどのグリッドラスターデータを整理・保存します
- [TerraVide](https://pypi.org/project/TerraVide/) - LiDAR（Light Detection and Ranging）データでマッピングされた大規模都市環境を処理するオープンソースPythonパッケージ。v0.1.6以降は、樹木抽出に焦点を当てています
- [Dash](https://dash.plotly.com/) - ウェブ上でのインタラクティブデータ可視化を構築するためのオープンソースPythonライブラリ。純粋なPythonを使ってカスタムデータダッシュボードを作成できます
- [Neatnet](https://github.com/uscuni/neatnet) - 街路ネットワークの構造を簡易化するためのオープンソースライブラリ
- [Linref](https://github.com/tariqshihadah/linref) - テーブルデータと空間データライブラリをベースに、イベント収集オブジェクトを通じて線形参照データに強力な機能を実装するライブラリ



### R <a id="r"></a>
Rの対象範囲と利用目的を説明しています。

- [R Shiny](https://shiny.rstudio.com/) - Create dynamic, web-friendly visualizations of data using R. Additional Information: [Shiny Tutorial](https://shiny.rstudio.com/tutorial/).
- [simplefeatures(sf)](https://cran.r-project.org/web/packages/sf/index.html) - シンプルな特徴（Simple Features）のサポート、Rで空間ベクトルデータを標準化した表現方法
- [ggplot2](https://ggplot2.tidyverse.org/) - 多様なデータのプロットに使えるリソース（調査データの可視化に有用）。追加情報：GNU GENERAL PUBLIC LICENSE
- [tidytext](https://cran.r-project.org/web/packages/tidytext/vignettes/tidytext.html) - テキストマイニングに用いられる主要なライブラリ—ggplotや他のテキストマイニングライブラリと併用されることが多い
- [leafgl](https://github.com/r-spatial/leafgl) - leafletマップのための高速WebGLレンダリングを実現するRパッケージ
- [Motif](https://cran.r-project.org/web/packages/motif/index.html) - 定義された規則的なおよび不規則な領域におけるカテゴリラスターデータの空間パターンを説明し、空間パターンに対する検索、変化検知、クラスタリングなどの空間分析を可能にする
- [Raster](https://cran.r-project.org/web/packages/raster/index.html) - 空間データの読み込み、書込み、操作、分析、モデル化。このパッケージは、ラスターデータおよびベクターデータの操作（交差など）に関する基本的かつ高度な関数を実装している。
- [Rgee](https://github.com/r-spatial/rgee) - R内でGoogle Earth Engine APIを呼び出すためのRバインディングパッケージ。Rの空間生態系との接続を簡便に実現するためのさまざまな関数が実装されている。
- [r5r](https://github.com/ipeaGIT/r5r) - 多モーダル輸送ネットワーク（徒歩、自転車、公共交通、自動車）における高速かつ現実的なルーティングを実現するRパッケージ。Conveyal R5ルーティングエンジンを活用している。
- [Sfnetworks](https://cran.r-project.org/web/packages/sfnetworks/index.html) - 空間ネットワーク分析に tidy なアプローチを提供する。
- [Stars](https://cran.r-project.org/web/packages/stars/index.html) - 'R'内で空間時系列配列（ラスターやベクターデータキューブ）を読み込み、操作、書き出し、プロットする。
- [stplanr](https://cran.r-project.org/web/packages/stplanr/index.html) - 輸送計画に特化したツールで、空間輸送データおよび非自動車モード（ODデータ処理を含む）に重点を置いている。
- [Tmap](https://cran.r-project.org/web/packages/tmap/) - テーママップとは、空間データの分布を可視化した地理的マップである。このパッケージは、チャロペルトやバブルマップなどテーママップを作成するための、柔軟かつレイヤーベースで使いやすいアプローチを提供している。
- [tidytransit](https://cran.r-project.org/web/packages/tidytransit/vignettes/introduction.html) - GTFSデータ（輸送ルート、スケジュール、停車場など）へのアクセスおよび操作に、tidyなアプローチを提供する。
- [tidycensus](https://walker-data.com/tidycensus/) - 米国人口統計局APIからのデータアクセスに、tidyなアプローチを提供し、操作または空間分析に利用できる。

### その他 <a id="other"></a>
その他の対象範囲と利用目的を説明しています。

- [civic-tech-patterns](https://github.com/codeforamerica/civic-tech-patterns) - 市民技術および市民アプリケーションにおける共通パターンと反パターン。追加情報：Code for Americaが提供。
- [global-indicators](https://github.com/global-healthy-liveable-cities/global-indicators) - グローバルな健康で持続可能な都市指標の協働開発を目的としたケーススタディが投影されている。

### WebとJavaScript <a id="web-and-js"></a>
WebとJavaScriptの対象範囲と利用目的を説明しています。

- [Bootstrap](https://getbootstrap.com/) - Widely-used, well documented library for quick design and customization of websites. Additional Information: [Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/).
- [Chart.js](https://www.chartjs.org/) - Create simple (or advanced) visualizations of data for web and mobile. Additional Information: [GitHub](https://github.com/chartjs/Chart.js).
- [Leaflet](https://leafletjs.com/) - Open-source JavaScript library for mobile-friendly interactive maps. Plugins available to extend functionality (e.g., storymaps, heatmaps, animation). Additional Information: [Quickstart Guide](https://leafletjs.com/examples/quick-start/).
- [Turf.js](https://turfjs.org/) - Advanced geospatial analysis for browsers and Node.js. Additional Information: [GitHub](https://github.com/Turfjs/turf).
- [GTFS-Js](https://github.com/WSDOT-GIS/GTFS-JS) - GTFSデータを扱うためのJavaScriptライブラリ。追加情報：Unlicense: WSDOT

### コーディング学習 <a id="learning-to-code"></a>
コーディング学習の対象範囲と利用目的を説明しています。
- [Urban Informatics & Visualization-Berkeley](https://github.com/waddell/urban-informatics-and-visualization) - 都市インフォマティクスと可視化（UC Berkeley CP255）クラスのJupyterノートブック例。計画文脈におけるPythonの応用に向けたさまざまなリソースを提供。
- [Esri's Python For Everyone](https://www.esri.com/training/catalog/57630436851d31e02a43f13c/python-for-everyone/) - このコースはPythonを使用するための基本的なブロックを提供する。これらのブロックを使ってスクリプトを作成・実行し、ArcGIS内および自らのワークフローに直接適用できる。
- [Coding for Planners: Up and Running with Python](https://courses.planetizen.com/course/coding-for-planners-python) - PlanetizenによるPythonの基礎と計画アプリケーションへの応用を10の動画レッスンで教えるコース。月額購入が必要。
- [Introduction to Urban Informatics](https://courses.planetizen.com/course/urban-informatics) - Planetizenによる大規模データの処理、分析、可視化の基礎を教えるコース。月額購入が必要。

## プラットフォームとソフトウェア資源 <a id="platforms-and-software-resources"></a>
プラットフォームとソフトウェア資源の対象範囲と利用目的を説明しています。

---
### 計画向けAIツールとプラットフォーム <a id="ai-in-planning-tools-and-platforms"></a>
データから推論・生成を行うモデルや大規模言語モデル（LLM）を活用し、都市計画に特有の用途を持つソフトウェア、ツール、プラットフォームです。American Planning AssociationのTechnology Divisionは、倫理的利用の必要性を示す[公開書簡](https://apa-technology-division.github.io/2023-ai-ethics-letter)を公開しています。

- [ChatGPT](https://chat.openai.com/) - An advanced language model designed to generate human-like text responses and engage in conversational interactions. Additional Information: [Act Like a Planner](https://apa-technology-division.github.io/like-a-planner).
- [Anthropic](https://www.anthropic.com/) - 人間のようなテキスト応答を提供し、会話型インタラクションを行う、高度な大規模言語モデル（LLM）であるClaudeにアクセスできる。
- [EuclidHL](https://www.hlplanning.com/euclidhl/) - An AI assistant with expertise in your city's zoning code and plans. Residents and other civic stakeholders can use EuclidHL to get accurate and timely information about planning and zoning in their community. Technology Division webinar on the topic [here](https://www.youtube.com/watch?v=AItBaYwfMOQ&ab_channel=PlanningWebcastSeries). 
- [Waypoint](https://www.waypointtransit.com/) - 都市計画に特化したAI専用プラットフォームで、計画者にルーティング業務の自動化、計画データソースの統合、空間分析（レビュー、コーナー調査、安全診断、カスタムレポートなど）を可能にする。
- [University of Oregon, AI Software List](https://blogs.uoregon.edu/artificialintelligence/ai-software/) - 大学の研究者および地元政策専門家が集めた、既存のAIリソースをカタログ化したブログ。
- [OECD AI Policy Observatory](https://oecd.ai/en/) - 人工知能に関するアプリケーション、政策的影響、文献に関するリソースを提供するプラットフォーム。
- [LM Studio](https://lmstudio.ai/) - This [free for personal use](https://lmstudio.ai/terms) software enables users to download large language models and run them locally within a desktop chat interface.
- [Ollama](https://ollama.com/) - 無料かつオープンソースのフレームワークで、あなたの自分のコンピュータ上でLLMを簡単にセットアップ・管理・実行できる。
- [Unsloth](https://unsloth.ai/) - オープンソースフレームワークで、ローカルハードウェア上でモデルの実行と訓練が可能になる
- [Tune Studio](https://studio.tune.app/) - ソフトウェア開発者向けのラボで、大規模言語モデルのフィンチューニングとデプロイを行う
- [Roboflow](https://roboflow.com/) - コンピュータビジョンモデルの開発とデプロイを加速するクラウドベースプラットフォームで、公的部門アプリケーションの構築を支援
- [vLLM](https://docs.vllm.ai/en/latest/) - 大規模言語モデル（LLM）向けの高スループットかつメモリ効率の高い推論とサーバーエンジン

### デジタルツインのツールとプラットフォーム <a id="digital-twins-tools-and-platforms"></a>
[スマートシティのデジタルツイン](https://www.planning.org/publications/document/9209455/)の作成、可視化、運用、保守を支援する目的で提供されるソフトウェア、ツール、プラットフォームです。
- [OpenTwins](https://ertis-research.github.io/opentwins/) - デジタルツイン開発を促進するオープンソースプラットフォームで、すべてのコンポーネントがオープンソースである
- [NVIDIA Omniverse](https://www.nvidia.com/en-us/omniverse/) - Omniverseは、開発者が既存のソフトウェアツールやシミュレーションプロセスにUniversal Scene Description（OpenUSD）およびNVIDIA RTXレンダリング技術を簡単に統合できるAPI、SDK、サービスのプラットフォーム

### 経済開発・計量経済プラットフォーム <a id="economic-development-and-econometric-platforms"></a>
経済開発・計量経済プラットフォームの対象範囲と利用目的を説明しています。
- [Remi](https://www.remi.com/) - 州・地方・全国のマクロ経済政策分析モデルを提供するリーダー企業

### 環境・気候計画ツールとプラットフォーム <a id="environmental-and-climate-planning-tools-and-platforms"></a>
環境・気候計画ツールとプラットフォームの対象範囲と利用目的を説明しています。

- [Climate Mapping For Resilience and Adaptation](https://resilience.climate.gov/#assessment-tool) - Integrates information from across the federal government to help people consider their local exposure to climate-related hazards. People working in community organizations or public agencies can use the site to help them develop equitable climate resilience plans to protect people, property, and infrastructure. Additional Information: [CMRA Assessment Tool](https://livingatlas.arcgis.com/assessment-tool/home)
- [iTree](https://www.itreetools.org/) - 世界中の木の利点と価値を定量化する。USDA森林サービスの-reviewed研究に基づく
- [HAZUS](https://www.fema.gov/flood-maps/products-tools/hazus) - FEMAのHazusプログラムは、地震、洪水、津波、台風によるリスクの評価に標準化されたツールとデータを提供。Hazusプログラムのリスク評価リソースとツールは常に無料かつ透明に開発されている
- [Temperate](https://icleiusa.org/temperate-adaptation-planner/) - AzaveaとICLEI USAの共同開発による、使いやすいツールで、規模が小さい中規模の地域において、気候変動影響対策計画をデータに基づいて進めるプロセスを支援
- [City Energy Analyst](https://cityenergyanalyst.com/) - A series of [open-source](https://github.com/architecture-building-systems/CityEnergyAnalyst) tools for the analysis and optimization of urban energy systems.
- [EPA WARM Model](https://www.epa.gov/warm) - EPAが開発した廃棄物削減モデル（WARM）は、さまざまな廃棄物管理手法による温室効果ガス（GHG）排出削減、エネルギー節約、経済影響の概算を提供
- [ENCORE](https://encore.naturalcapital.finance/en) - 国連が支援するリソースで、自然資本の世界の貯蔵量への依存関係と影響を調査する
- [LEARN](https://icleiusa.org/LEARN/) - アメリカのコミュニティが自国の森林や樹木による温室効果ガス（GHG）影響を評価できる、インタラクティブなウェブマッピングツール
- [NatureServe Explorer](https://explorer.natureserve.org/) - NatureServeは、アメリカの10万以上の稀有かつ絶滅危惧種および生態系に関する情報の定番オンラインガイド

### 地理空間データと可視化 <a id="geospatial-data-and-visualization"></a>
地理空間データと可視化の対象範囲と利用目的を説明しています。

- [ArcGIS](https://www.esri.com/en-us/arcgis/about-arcgis/overview) - このプラットフォームは、環境システム研究機関（ESRI）が維持する地図および地理情報と作業を行うための地理情報システム（GIS）
- [QGIS](https://qgis.org/en/site/) - このオープンソースGISツールは、Windows、Mac、Linux、BSDおよびモバイルデバイス上で、地図情報の作成、編集、可視化、分析、公開を行うことができる
- [CARTO](https://carto.com/) - 世界トップクラスのロケーションインテリジェンスプラットフォームで、組織が空間データをホスト・利用し、より効率的な配達ルート、より効果的な行動マーケティング、戦略的な店舗配置などに分析を適用できる
- [kepler.gl](https://kepler.gl/) - Kepler is a data agnostic, WebGL empowered, high-performance web application for geospatial analytic visualizations. Additional Information: [API Reference](https://docs.kepler.gl/docs/api-reference).
- [flowmap-blue](https://flowmap.blue) - Google Sheetsに公開されたデータをもとに、地理的フロー地図を作成し、各地点間の移動数（出発地-目的地データ）を可視化
- [ScapeToad](http://scapetoad.choros.place/index.php) - 属性に基づいて多角形のサイズを調整するためのクロスプラットフォーム、オープンソースアプリ。入力としてシェイプファイルを使用し、出力としてカートグラム（データに基づいて形状が歪んだ幾何学的図形）を生成
- [Heavy.AI](https://www.heavy.ai/) - 地理時系列をサポートする高性能データベースで、GPUによるクエリ処理が可能
- [BlenderGIS](https://github.com/domlysz/BlenderGIS) - A free and open-source add on for [Blender](https://www.blender.org/) which allows users to explore, query, and visualize data directly through Blender's GUI.
- [Felt](https://felt.com/) - 複数ユーザーがリアルタイムでデータを共同編集および閲覧できるウェブベースマッピングアプリ

### 没入型計画・設計プラットフォーム <a id="immersive-planning-and-design-platforms"></a>
没入型計画・設計プラットフォームの対象範囲と利用目的を説明しています。

- [Arkio](https://www.arkio.is/) - VRやその他のデバイスを用いて、計画者、デザイナー、関係者などが建物や街並みの3Dモデルを作成できる、クラウドベースの協働空間設計ソフトウェア。
- [InCitu](https://www.incitu.us/) - 都市計画者による都市データの分析および可視化を支援するARプラットフォーム。建物、賃貸住宅、混合用途開発、公園、橋などのスケールモデルを表示することで、実現する。
- [Polycam](https://poly.cam/) - 現実世界の物体や場所をスキャンし、3Dモデルにデジタル化できるモバイルアプリ。スマートフォンのカメラを活用することで、写真測量を簡単に行える。
- [Spatial](https://www.spatial.io) - 高度に協働可能なウェブ、モバイル、VRアプリで、計画者がメタバースなどに含まれる環境において、体験を共有し、空間を創造できる。
- [Spectracities](https://www.spectracities.com/) - Spectraは、オープンソースのVRおよび混合現実プラットフォームで、計画者やデザイナーが物理的な空間設計とデジタル世界構築を組み合わせ、単一プロジェクトから大規模な体験環境まで、都市形成プロセスを再構築できる。
- [TwinMotion](https://www.twinmotion.com/en-US) - 使いやすいリアルタイム可視化ソフトウェアで、オフラインレンダリング品質の画像、アニメーション、パノラマを生成し、Unreal Engineに基づくインタラクティブ360度動画およびVRプレゼンテーションも作成可能。
- [Unity](https://unity.com/) - 2Dおよび3Dのインタラクティブ体験やゲームを作成するための強力で人気のあるクロスプラットフォームゲームエンジン。
- [Unreal Engine](https://www.unrealengine.com/en-US/) - Epic Games Unreal Engineは、XRエンジンであり、計画者は単に可視化を行うだけでなく、コミュニティ参加、意思決定、計画プロセスをゲーム化した体験環境を構築できる。

### 計画管理・行政ツールとプラットフォーム <a id="planning-management-and-administrative-tools-and-platforms"></a>
計画管理・行政ツールとプラットフォームの対象範囲と利用目的を説明しています。
- [Encode Plus](https://www.encodeplus.com/) - 計画およびゾーン規制の現代化や、郡または市町村の規則や条例管理をスムーズにできるソフトウェア。
- [MyGovernmentOnline](https://www.mygovernmentonline.org/) - 政府が開発した政府向けのデジタル政府ソリューション。許可や事務所内のプロセスを対象としている（提供者は技術的には公的機関）。
- [Digiplan](https://digeplan.com/) - 完全に統合された電子計画審査および受付プロセスに必要なソフトウェアを提供。
- [OpenGov](https://opengov.com/products/citizen-services/) - すべての許可、ライセンス、検査にクラウドソリューションを提供し、ユーザーに使いやすいワークフローを提供。
- [GeoCivix](https://geocivix.com/state-local-government-agencies/) - 効率性、組織性、コミュニケーションを高めるための、市民へのアクセス、計画審査、許可、検査を提供する使いやすいソリューション。
- [Notion](https://www.notion.com/) - A modular, all‑in‑one workspace that unifies note‑taking, documents, databases, and project views that can be used to create shared administrative resources and simple sites quickly by teams and individuals as shown in a [Technology Division webinar](https://youtu.be/sxwsThQP9to?t=2277). 

### 市民参加ツールとプラットフォーム <a id="public-engagement-tools-and-platforms"></a>
市民参加ツールとプラットフォームの対象範囲と利用目的を説明しています。
- [bangthetable](https://www.bangthetable.com/) - 1つのプラットフォームで、地域全体の参加を収集・分析・報告できるプラットフォームへのアクセスを提供。
- [Metroquest](https://metroquest.com/) - 計画に関する公共の関心を引き出すため、アンケート、ゲーム、インタラクティブマップを提供する包括的なコミュニティ参加プラットフォーム。
- [PollEverywhere](https://www.polleverywhere.com/) - 複数のプラット開発プラットフォーム上で、インタラクティブ参加に向けたアンケートや質問を生成できる機能を提供。
- [GeoComment](https://www.viewprogis.com/geocomment) - 都市職員、市民、統治関係者などが、マップを活用したデジタルプラットフォームを通じて、プロジェクト開発のすべての段階で意思決定プロセスに意味のある意見を提供できる。
- [NJTPA Engage](https://engage.njtpa.org/) - 300以上の公共参加ツール、技術、ソフトウェアを収録したデータベース。複数レベルで検索可能。
- [Ushahidi](https://www.ushahidi.com/) - 世界中のコミュニティが自らの問題を解決するために、市民の意見を収集するオープンソースの協働マッピングツール。
- [Social Pinpoint](https://www.socialpinpoint.com/) - 国産のデジタル公共参加ツールで、ユーザーはインタラクティブマップ、アンケート、参加的予算策定、アイデアボードフォーラムなどを通じてフィードバックを提供し、インスピレーションを共有できる。
- [Hello Lamp Post](https://www.hellolamppost.co.uk/) - 独自のテキストおよびSMSベースの街中における市民との対話ツールで、物理的な看板とモバイルデバイスを活用して、市民のフィードバックを取得し、案内を改善し、地域イベントやサービスを宣伝し、あるいは創造的な教育コンテンツを提供する
- [Maptionnaire](https://www.maptionnaire.com) - マップベースのツールで、アンケートの設計、調査データの収集、情報の伝達を支援
- [SurveyMonkey](https://www.surveymonkey.com/mp/take-a-tour/) - クラウドベースの調査ツールで、ユーザーがアンケートを作成・送信・分析を行うことができます。ユーザーはアンケートをメールで送信したり、ウェブサイトやソーシャルメディアプロフィールに埋め込み、応答率を高めることができます
- [Formware](https://formware.io/) - クラウドベースのフォームビルダーで、会話型アンケートを作成し、無制限の応答を収集できるように設計されたツールで、明確で使いやすいデータ収集が可能


### 都市設計ツールとプラットフォーム <a id="urban-design-tools-and-platforms"></a>
都市設計ツールとプラットフォームの対象範囲と利用目的を説明しています。

- [CityEngine](https://www.esri.com/en-us/arcgis/products/arcgis-cityengine/overview) - Advanced 3D modeling software for creating huge, interactive and immersive urban environments in less time than traditional modeling techniques. The cities you create using CityEngine can be based on real-world GIS data and the procedural rules that can help quickly create [streets](https://github.com/d-wasserman/Complete_Street_Rule) & [buildings](https://www.arcgis.com/home/group.html?id=01695af30a384c1e823fa4d72497309d#overview).
- [SketchUp](https://www.sketchup.com/) - 使いやすいインタラクティブな3Dモデリングソフトウェアで、計画や設計に活用。豊富なアセットライブラリにより、地域の設計を実現できます
- [Rhino](https://www.rhino3d.com/) - このは商業用の3DコンピュータグラフィックスおよびCADアプリケーションソフトウェア。Rhinoには複数のプラグインが構築されており、GrasshopperやUrban Network Analysis Toolboxが含まれており、複雑なモデリングと分析を可能にしています
- [Adobe Creative Suite](https://www.adobe.com/creativecloud.html) - Adobeの20以上のデスクトップおよびモバイルアプリとサービスのコレクション。写真、デザイン、動画、ウェブ、UXなどに活用。代表的な製品にはPhotoshop、Adobe Illustratorなどがあります
- [GIMP](https://www.gimp.org/) - GNU/Linux、macOS、Windowsなど、さまざまなオペレーティングシステムで利用可能なオープンなクロスプラットフォーム画像編集ツール
- [Inkscape](https://inkscape.org/) - ベクターベースのオープンなグラフィック編集ツールで、GIMPと対応する場合が多い
- [TestFit](https://testfit.io/) - アルゴリズムや共同作成ツールにより、開発者、建築家、都市計画士などにホテル、駐車場、多家族住宅の開発計画を数秒で解決できるよう支援
- [Delve](https://www.sidewalklabs.com/products/delve) - 生成設計とAIを活用し、プロジェクトの優先順位や現場設計のメトリクスに基づいた最適な選択肢を明らかにします
- [Enscape](https://enscape3d.com/) - 使いやすいレンダリングソフトウェアで、都市設計や建築視覚化に即時かつリアルなカスタマイズ可能なレンダリング画像を生成。Rhino、SketchUpなど、一般的な3Dモデリングソフトウェアと良好に統合されています
- [Forma](https://www.autodesk.com/products/forma/overview) - Autodesk Formaは、建築家やデザイナーが設計前段階やスケッチ設計評価および環境影響シミュレーションを行うことができるクラウドベースのプラットフォームです
- [ArchiWise](https://archiwise.ai) - AIを活用した不動産の事前開発および場所選定プラットフォームで、開発者、建築家、ブローカー、計画コンサルタントが規制、実現可能性、場所データを迅速に分析できます

### 都市計画ツールとプラットフォーム <a id="urban-planning-tools-and-platforms"></a>
都市計画ツールとプラットフォームの対象範囲と利用目的を説明しています。

- [ArcGIS Urban](https://www.esri.com/en-us/arcgis/products/arcgis-urban/overview) - 計画者および設計プロフェッショナルが、生きている計画を公開し、チーム間で協力できるウェブベースの3Dアプリケーションを提供。シナリオ計画および影響評価をサポートしています
- [UrbanFootPrint](https://urbanfootprint.com/) - ウェブベースの計画ツールで、都市、環境、経済データを厳選し、都市関係者に提供し、コミュニティの計画と改善をより迅速・正確・低コストで実現できる分析機能を備えています
- [UrbanCanvas](https://urbansim.com/urbancanvas) - Modeler is a web-based platform designed for planners and modelers to generate long-range, small area socioeconomic forecasts using [UrbanSim](https://github.com/UDST/urbansim) to inform Regional Transportation Plans.

### 交通計画ツールとプラットフォーム <a id="transportation-planning-tools-and-platforms"></a>
交通計画ツールとプラットフォームの対象範囲と利用目的を説明しています。
- [Remix](https://www.remix.com/) - 都市の最適な交通システム（公共交通、安全な道路、新たな移動手段など）を計画するためのプラットフォーム。RemixはGTFSの編集・テスト、多モーダル道路の生成、関連データの探索を行うツールを提供しています
- [Streetmix](https://streetmix.net/) - 都市設計向けの協働型市民参加プラットフォーム。あなたの地域の道路を設計・リミックス・共有できます。Streetmix
- [A/B Street](https://www.abstreet.org) - 道路と交差点を編集し、すべてのモードの交通シミュレーションを通じてその影響を検証し、得られた視覚化結果を提案の説明に活用できます。Apacheライセンスに基づき、OpenStreetMapと連携してどこでも動作し、ウェブ上で利用可能またはオフラインダウンロードも可能です
- [Space Syntax](https://www.spacesyntax.net/software/) - 空間およびネットワーク分析ソフトウェアは、プロフェッショナルおよび学術研究者に商業的および非商業的用途で提供されています
- [ITHIM](https://www.mrc-epid.cam.ac.uk/research/research-areas/public-health-modelling/ithim) - Integrated Transport and Health Impact Model (ITHIM) refers to a range of related models and tools developed to perform integrated assessment of the health effects of transport scenarios and policies at the urban and national level. This page points to different literature, R code, and [US specific resources](https://skylab.cdph.ca.gov/HealthyMobilityOptionTool-ITHIM/).
- [OpenPath](https://www.nrel.gov/transportation/openpath.html) - NRELが提供する継続的な旅行調査プラットフォームで、スマートフォンアプリを介して旅行とデータを収集し、サーバーを活用し、自動データ処理を活用するもの。
- [3D Street](https://www.3dstreet.org/) - オープンソースの3D道路設計および仮想現実アプリケーションで、ユーザーはStreetmixから直接自らの道路設計をインポートし、インタラクティブな3Dウェブシーンに表示できる。コミュニティ版以外に、Google Earthとの統合およびさらにカスタマイズ可能なプロ版も提供している。
- [Tile2Net](https://github.com/VIDA-NYU/tile2net?tab=readme-ov-file) - An end-to-end tool for automated mapping of pedestrian infrastructure from aerial imagery. It provides a deep learning models that semantically segments pedestrian infrastructure from imagery for digitization. It is also available on the Esri Atlas of [models](https://www.arcgis.com/home/item.html?id=c0d520baa30d4b47ab36232231c17875). 
- [SafeStreets](https://safestreets.streetsandcommons.com) - 無料のOpenStreetMapベースのウェブプラットフォームで、15分都市フレームワーク（日常ニーズの達成、輸送アクセス、歩行の快適性）に基づき、住所レベルの歩行可能性および歩行者安全スコアを提供するもの。

## 教育・情報資源 <a id="educational-and-informational-resources"></a>
教育・情報資源の対象範囲と利用目的を説明しています。

---

### AICP資料 <a id="aicp-resources"></a>
AICP資料の対象範囲と利用目的を説明しています。

- [AICP Get Certified! Webpage](https://www.planning.org/certification/) - アメリカン・インスティテュート・オブ・カレッジド・プランナー（AICP）の公式リソースリポジトリで、資格取得の条件、登録、準備に関する詳細を提供。また、今後のAICP「資格取得サイクル」の重要な日程も掲載されている。
- [AICP Exam Prep. Webpage](https://www.planning.org/certification/register/#examprep/) - AICPの「5ステップアプローチ」についての詳細を示し、AICP試験に合格するためのリソースや資料をリストアップしている。
- [APA Knowledge Base](https://www.planning.org/knowledgebase/) - APAのリサーチ・キーワード・ベースは、APA会員にテーマに関連したリソースのキュレーションされたコレクション（計画、規制、モデル規則、ガイド、記事、レポート、マルチメディアファイルなど）を提供。各コレクションは、リソース記録の解説とテーマ別分類を提供し、文献情報、短い説明、およびリソースへのリンクを含む。
- [PlanningPrep](https://www.planningprep.com/) - アメリカン・インスティテュート・オブ・カレッジド・プランナー（AICP）の資格試験準備に役立つ無料ウェブベースの学習リソース。2021年夏時点で、サイトには1668問の練習問題と12問の練習試験が含まれている。
- [APA Florida Exam Prep Webpage](https://florida.planning.org/professional-growth/aicp-exam-preparation/aicp-exam-study-links/) - APAフロリダがまとめた包括的な学習資料。APA会員は、指定されたメールアドレスにメールを送ることで、ヘンリー・ビッターカーが主導する試験準備および練習問題学習セッションの録音をアクセスできる。


### 文献資料 <a id="literature-resources"></a>
文献資料の対象範囲と利用目的を説明しています。
- [NCHRP](http://www.trb.org/NCHRP/NCHRP.aspx) - ナショナル・コオペレーティブ・ハイウェイ・リサーチ・プログラム（NCHRP）は、ハイウェイおよび輸送部門の責任者および職員が特定した研究ニーズ、AASHTOの委員会、およびFHWAの提言に基づいて開発されたもの。最も優れたテーマは、AASHTOの研究および革新特別委員会（R&I）によって選ばれ、毎年R&Iの提言はAASHTOの執行委員会、ナショナル・アカデミーズ、およびFHWAに提案される。
- [TCRP](http://www.trb.org/TCRP/TCRP.aspx) - 米国輸送省が支援する輸送協同研究プログラム（TCRP）は、公共交通業界が短期間で課題に対応するための革新的な解決策を構築するための主要な手段の一つである。TCRPは、公共交通実務者に問題解決や意思決定者に情報を提供するための有用な報告書やツールを提供するという評価を持っている。
- [TFResource](https://tfresource.org/) - 旅行需要予測および旅行調査手法に関するベストプラクティスのコレクション。
- [Planning Advisory Service (PAS)](https://www.planning.org/pas/) - The Planning Advisory Service (PAS) is the American Planning Association's (APA) flagship research brand which is responsible for the following publications: [PAS Reports](https://www.planning.org/pas/reports) (quarterly), [_PAS Memo_](https://www.planning.org/pas/memo) (bimonthly), and [_PAS QuickNotes_](https://www.planning.org/pas/quicknotes) (bimonthly). Current publications and archives of previous issues are available for free download for APA members.
- [Policy Guides](https://www.planning.org/policy/guides/) - APAが重要な計画問題に関して公式な立場を示し、計画者に、すべての人に良いコミュニティを創出するための政策を主張するためのツールを提供するもの。
- [Repository and Open Science Access Portal (ROSA P)](https://rosap.ntl.bts.gov/welcome) - ナショナル・トランスポート・リブラリの全文の現在および過去の文書にアクセスできるもの。輸送のすべてのモードおよび気候変動研究など関連分野のリソースが提供されている。
- [Automated Decision-Making and the Law Clearinghouse Project](https://law.unc.edu/academics/centers-and-programs/ai-dr-program/clearinghouse/) - この清掃庫プロジェクトの目的は、AIによる意思決定と法に関する重要なおよび影響力のある論文を強調することにある。

### 一般的な計画情報とニュース <a id="general-planning-information-and-news"></a>
一般的な計画情報とニュースの対象範囲と利用目的を説明しています。
- [Planopedia](https://www.planetizen.com/planopedia) - Organized by the Planning News aggregator [Planetizen](https://www.planetizen.com/) this mini-planning encyclopedia explores various urban planning concepts and terms.
- [ULI](https://uli.org/) - 世界で最も古く、最も大きな交差分野の不動産および土地利用専門家ネットワーク。
- [Streetsblog](https://www.streetsblog.org/) - 歩行、自転車、輸送に関するニュースを扱うブログ。

### ポッドキャスト <a id="podcasts"></a>
ポッドキャストの対象範囲と利用目的を説明しています。
- [Talking Headways](https://streetsblog.libsyn.com/) - 持続可能な輸送および都市設計に関する週刊ポッドキャスト。
- [99% Invisible](https://99percentinvisible.org/) - 私たちが無意識に考えていることの背後にある思考のすべてを、音声と物語で描いたポッドキャスト。無視されている建築や設計が私たちの世界をどのように形成しているかを描くもの。
- [APA Podcast](https://www.planning.org/podcast/) - 2010年から始まったAPAのポッドキャストで、計画テーマに関するインタビューおよびディスカッションを提供。
- [Strong Towns Podcast](https://www.strongtowns.org/podcast) - 都市、町、地域を経済的に強化し、その過程でより良い生活環境を創出する方法について探求するポッドキャスト。
- [The Urban Planner's Podcast](https://podcasts.apple.com/us/podcast/the-urban-planners-podcast/id1502943446) - このポッドキャストは、都市計画者、都市計画学生、および都市計画に関するテーマに興味がある人々に向けたものです。


## その他の資源 <a id="other-resources"></a>
その他の資源の対象範囲と利用目的を説明しています。

---

### ほかのGitHub資源一覧 <a id="other-github-resource-lists"></a>
このページは[awesome-list](https://github.com/topics/awesome-list)として登録されていますが、類似するGitHubリポジトリも掲載できます。各リポジトリは異なる主題の資料を管理・選定した一覧です。

- [awesome-transit](https://github.com/CUTR-at-USF/awesome-transit) - 輸送データツールおよびリソースのコレクション。
- [micromobility-tools-and-resources](https://github.com/NABSA/micromobility-tools-and-resources) - マイクロモビリティ関連のツールおよびデータリソースのコレクション。
- [awesome-sustainable-technology](https://github.com/protontypes/open-sustainable-technology) - 気候、エネルギー供給、重要な自然資源の持続可能な維持を支える、オープンテクノロジーのプロジェクトを厳選したリスト。
- [awesome-gis](https://github.com/sshuair/awesome-gis) - Awesome GISは、地図作成ツール、地理分析ツール、開発者向けツール、データ、カンファレンス・コミュニティ、ニュース、マシーブリットオンラインコース、素晴らしいマップサイトなど、地理空間関連のソースを収録したコレクションです。
- [awesome-agriculture](https://github.com/brycejohnston/awesome-agriculture) - 農業、農作業、庭園に関するオープンソーステクノロジー。
- [awesome-geojson](https://github.com/tmcw/awesome-geojson) - あなたの生活を楽にするためのGeoJSON用のユーティリティ。
- [ai-collection](https://github.com/ai-collection/ai-collection) - 生成AIの分野に関するツールやユーティリティの概要レビュー。

### ほかの技術資源アグリゲーター <a id="other-technology-resource-aggregators"></a>
ほかの技術資源アグリゲーターの対象範囲と利用目的を説明しています。

- [Urban Computing Foundation](https://github.com/ucfoundation) - Accelerating open source and community development that improves mobility, safety, infrastructure, traffic, and energy consumption in connected cities. Additional Information: [Landscape](https://landscape.uc.foundation/).
- [Data.Gov](https://www.data.gov/) - アメリカ合衆国政府が提供する、研究、ウェブおよびモバイルアプリ開発、データ可視化などを行うために必要なデータ、ツール、リソースの中央リポジトリ。
- [Harvard Dataverse](https://dataverse.harvard.edu/) - 研究データを収集したリポジトリ。科学分野の多様なデータセットが含まれており、多くは公有領域に帰属されています。
- [Civic Tech Field Guide](https://www.planetizen.com/features/115081-top-websites-urban-planning-2021) - このリポジトリに似たものとして、世界100以上の国から市民テクノロジーの実務家が協力して集めた、市民テクノロジーのフィールドガイドのリソースのコレクション。
- [The Nexus](https://www.urbanismnext.org/the-nexus) - 新しい移動手段、自律走行車、電子商取引、その他革新が都市や地域に与える可能性のある影響を検討し、それらに関連するさまざまなリソースやツールをカタログ化。
- [Data Standards Directory](http://datastandards.directory/) - データ標準に関するオープンディレクトリは、既知のデータ標準の例を集約し、その適用方法を理解するための分類を提供しています。
- [Digital.Gov](https://digital.gov/) - 政府におけるより良いデジタルサービスの構築に関するガイドおよびリソース。
- [Data Center Policy Database](https://www.datacenterpolicy.com/database) - データセンターのポリシーに関する検索可能なデータベース。これは、計画者がその地域におけるデータセンターの配置に関連する土地再編、水・エネルギー需要、透明性問題をナビゲートする際に役立ちます。

---

## コントリビューション <a id="contributing"></a>

### フォームによるコントリビューション <a id="form-based-contributions"></a>
GitHubアカウントがなくても、該当分類へ追加したい資源がある場合は、次のGoogleフォームへ情報を入力してください。レビュー後にリポジトリへの追加を検討します。
https://docs.google.com/forms/d/e/1FAIpQLSfGp_XC5V-uIzafsVBhR4xKX9YhgNOz22w84Sg0zo0ONDdV4w/viewform?usp=sf_link

### GitHubによるコントリビューション <a id="github-contributions"></a>
都市計画と技術に関心がある方のコントリビューションを募集しています。推奨形式は[Contribution](https://github.com/APA-Technology-Division/planning-technology-resources/blob/main/CONTRIBUTING.md)ページを参照してください。大規模な追加は先にIssueを作成します。この方法なら共有資源への追加履歴が記録されます。

## ライセンスと引用 <a id="license-and-citation"></a>
ほかの[資源アグリゲーター](https://github.com/NABSA/micromobility-tools-and-resources/blob/master/README.md)と同様、このリポジトリはCC 1.0で公開されています。引用は必須ではありませんが、資源への理解とコントリビューションを広げるため、共有または適切な引用を歓迎します。


引用する場合は次の形式を使用できます。

urban-and-regional-planning-resources. (2020) APA Technology Division. 参照元: https://github.com/APA-Technology-Division
