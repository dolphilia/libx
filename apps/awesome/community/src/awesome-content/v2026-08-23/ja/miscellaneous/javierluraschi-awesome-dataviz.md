---
title: "Awesome Dataviz"
description: "Datavizを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-javierluraschi-awesome-dataviz-readme-md"
---

# Awesome Dataviz

Datavizを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
- [Awesome Dataviz](#awesome-dataviz)
	- [JavaScriptツール](#javascript-tools)
		- [チャートライブラリ](#charting-libraries)
		- [グラフ用チャートライブラリ](#charting-libraries-for-graphs)
		- [地図](#maps)
		- [d3](#d3)
		- [React](#react)
		- [その他](#misc)
	- [Androidツール](#android-tools)
	- [C++ツール](#c-tools)
	- [Goツール](#golang-tools)
	- [iOSツール](#ios-tools)
	- [Pythonツール](#python-tools)
	- [Rツール](#r-tools)
	- [Rubyツール](#ruby-tools)
	- [マークアップベースのツール](#markup-based-tools)
	- [その他のツール](#other-tools)
- [資料](#resources)
	- [書籍](#books)
	- [カタログ](#catalogs)
	- [ポッドキャスト](#podcasts)
	- [Twitterアカウント](#twitter-accounts)
 	- [Webサイト](#websites)
- [貢献](#contributing)
- [ライセンス](#license)

<a id="javascript-tools"></a>
## JavaScriptツール

<a id="charting-libraries"></a>
### チャートライブラリ
- [ApexCharts](https://apexcharts.com/) - モダンでインタラクティブなSVGチャート
- [Chart.js](https://www.chartjs.org/) - キャンバスタグを使ったチャート
- [Chartist.js](https://gionkunz.github.io/chartist-js/) - ブラウザ互換性の優れたレスポンシブチャート
- [dc.js](https://github.com/dc-js/dc.js) クロスフィルタとネイティブに連携できる多次元チャート
- [Dygraphs](https://dygraphs.com/) - 巨大データセットに対応するインタラクティブなラインチャートライブラリ
- [Echarts](https://github.com/ecomfe/echarts) - 大規模データセットに最適化された高度にカスタマイズ可能なインタラクティブチャート
- [Epoch](https://github.com/epochjs/epoch) - リアルタイムチャートの作成に最適
- [Google Charts](https://developers.google.com/chart) - ブラウザおよびモバイルデバイス向けのインタラクティブチャート
- [G2](https://g2plot.antv.vision/en) - アリババが維持する、グラフィックの文法に基づくインタラクティブかつレスポンシブなチャートライブラリ
- [GraphicsJS](http://www.graphicsjs.org) - SVG/VMLに基づく直感的なAPIを持つ軽量JSグラフィックライブラリ
- [lit-line](https://github.com/apinet/lit-line) - 軽量、高速、インタラクティブで完全レスポンシブなSVG折れ線チャートWebコンポーネント
- [MetricsGraphics.js](https://metricsgraphicsjs.org/) - タイムシリーズデータに最適化
- [NVD3](https://github.com/novus/nvd3) - d3.jsで書かれた再利用可能なチャートライブラリ
- [Plotly.js](https://github.com/plotly/plotly.js/) - 20種類のチャートに対応する強力な宣言型ライブラリ
- [React wrapper](https://github.com/hustcc/echarts-for-react)
- [TechanJS](https://techanjs.org/) - 株式および金融チャート
- [TOAST UI Chart](https://github.com/nhnent/tui.chart) - 完全なライブラリで、古くからのブラウザにも対応しています。
- [Vizzu](https://github.com/vizzuhq/vizzu-lib) - アニメーションされたデータ可視化およびデータストーリーを実現するライブラリ。

<a id="charting-libraries-for-graphs"></a>
### グラフ用チャートライブラリ
- [Cola.js](https://marvl.infotech.monash.edu/webcola/) - 制約に基づく最適化技術を使って図を生成するツール。d3とsvg.jsと連携。
- [Cytoscape.js](https://js.cytoscape.org/) - JavaScriptによるグラフ描画ライブラリ。[Cytoscape](https://www.cytoscape.org)の中核開発者が保守しています。
- [Sigma.js](https://sigmajs.org/) - グラフ描画に特化したJavaScriptライブラリ。
- [VivaGraph](https://github.com/anvaka/VivaGraphJS) - JavaScript用のグラフ描画ライブラリ。
- [G6](https://github.com/antvis/g6) - JavaScriptとTypeScriptで構成されたグラフ可視化ライブラリ。アリババが維持しています。
- [diagram.js](https://github.com/bpmn-io/diagram-js) - CamundaのオンラインBPMNモデル作成に用いられるJavaScriptの図形ライブラリ。
- [Uber React Digraph](https://github.com/uber/react-digraph) - UBERが維持するReact.jsベースの有向グラフライブラリ。

<a id="maps"></a>
### 地図
- [CARTO](https://github.com/CartoDB/cartodb) - CARTOはウェブ上で地理空間データの保存と可視化を行うオープンソースツールです。
- [Cesium](https://github.com/AnalyticalGraphicsInc/cesium) - WebGLによる3D地球と地図。
- [Deck.gl](https://deck.gl/) - 大規模データセットの可視探索分析用のWebGLフレームワーク。
- [L7](https://github.com/antvis/L7) - 大規模なWebGLによる地理空間データ可視化分析フレームワーク。アリババが維持しています。
- [L7 Plot](https://github.com/antvis/L7Plot) - 地理空間可視化チャートライブラリ。アリババが維持しています。
- [DataMaps](https://github.com/markmarkoh/datamaps) - D3.jsを使用したインタラクティブなSVG地図。
- [Dipper](https://github.com/antvis/dipper) - L7を基盤としたマップアプリケーション開発フレームワーク。アリババが維持している。
- [Leaflet](https://leafletjs.com) - モバイル対応のインタラクティブマップを実現するJavaScriptライブラリ。
- [Mapael](https://github.com/neveldo/jQuery-Mapael) - raphael.jsに基づくjQueryプラグインでベクターマップを表示。

<a id="d3"></a>
### d3
- [Awesome D3](https://github.com/wbkd/awesome-d3)を参照

<a id="react"></a>
### React
- [BizCharts](https://github.com/alibaba/BizCharts) - [G2](https://github.com/antvis/G2)とReactを基盤としたデータ可視化ライブラリ。
- [Graphin](https://github.com/antvis/Graphin) - ReactとTypeScriptを活用したグラフ可視化ライブラリ（G6をベースに構築、アリババが維持）。
- [React-vis](https://github.com/uber/react-vis) - データ可視化を構築するReactコンポーネント。
- [Recharts](https://github.com/recharts/recharts) - D3チャートをレンダリングする宣言型Reactコンポーネント。
- [Victory](https://formidable.com/open-source/victory/) - インタラクティブなデータ可視化を構築する、組み合わせ可能なコンポーネント。
- [nivo](https://github.com/plouc/nivo) - Reactで構築された強力で組み合わせ可能なデータ可視化コンポーネント。[demo](https://nivo.rocks)
- [React Svg Textures](https://github.com/finnfiddle/react-svg-textures) - Textures.jsをReactへ移植した、完全に組み合わせ可能なコンポーネント。
- [DevExtreme React Chart](https://devexpress.github.io/devextreme-reactive/react/chart/) - BootstrapおよびMaterial Design向けの高性能プラグインベースReactチャート。

<a id="react-native"></a>
## React Native
- [F2](https://github.com/antvis/F2) - モバイル対応でエレガントでインタラクティブかつ柔軟なチャートライブラリ。アリババが維持。

<a id="misc"></a>
### その他
- [Graphology](https://github.com/graphology/graphology) - JavaScriptおよびTypeScript向けに強固で多目的なグラフオブジェクト。他のグラフ可視化ライブラリのベースとして機能。
- [Piecon](https://github.com/lipka/piecon) - ファビコンへ円グラフを表示。
- [Textures.js](https://riccardoscalco.github.io/textures/) - SVGパターンを作成するライブラリ。
- [Timeline.js](https://timeline.knightlab.com/) -  インタラクティブなタイムラインを作成する
- [Vega](https://vega.github.io/vega/) - Vegaは、視覚化の文法であり、インタラクティブな視覚化デザインを作成・保存・共有するための宣言型フォーマットである
- [Vega-Lite](https://vega.github.io/vega-lite/) - 高レベルのインタラクティブグラフの文法であり、分析を支援する視覚化を迅速に生成できる簡潔なJSON構文を提供する
- [Vis.js](https://visjs.org/) - タイムライン、ネットワークおよびグラフ（2次元および3次元）を含む動的視覚化ライブラリ

<a id="android-tools"></a>
## Androidツール
- [DecoView](https://github.com/bmarrdev/android-DecoView-charting) - アニメーション付き円盤チャートライブラリ
- [MPAndroidChart](https://github.com/PhilJay/MPAndroidChart) - 強力で使いやすいチャートライブラリ
- [WilliamChart](https://github.com/diogobernardino/WilliamChart) - シンプルなチャートライブラリ

<a id="c-tools"></a>
## C++ツール
- [LargeVis](https://github.com/lferry007/LargeVis) - [LargeVis paper](https://arxiv.org/abs/1602.00370)の実装であり、大規模かつ高次元データの可視化に使用される
- [PlotJuggler](https://github.com/facontidavide/PlotJuggler) - Qt5をベースにしたオープンソースアプリケーション（Qwtに基づく）
- [Visualization Toolkit (VTK)](https://gitlab.kitware.com/vtk/vtk/blob/master/README.md) - 3Dグラフィックス、画像処理および可視化に用いるオープンソースライブラリ

<a id="golang-tools"></a>
## Goツール
- [svgo](https://github.com/ajstarks/svgo) - Go言語によるSVG生成用のライブラリ
- [plot](https://github.com/gonum/plot) - Goでプロットの構築と描画を行うAPI
- [go-echars](https://github.com/chenjiandongx/go-echarts) - シンプルでありながら強力なデータ可視化ライブラリ（Go用）

<a id="ios-tools"></a>
## iOSツール
- [BEMSimpleLineGraph](https://github.com/Boris-Em/BEMSimpleLineGraph) - 高度にカスタマイズ可能でインタラクティブな線グラフ
- [Charts](https://github.com/danielgindi/Charts) -  MPAndroidChartのiOS版。両プラットフォームでのチャートを作成するためには非常に類似したコードを使用できる
- [JBChartView](https://github.com/Jawbone/JBChartView) - 線グラフと棒グラフ用のチャートライブラリ
- [PNChart](https://github.com/kevinzhow/PNChart) - PinerおよびCoinsManで使用されているシンプルで美しいチャートライブラリ

<a id="machine-learning-tools"></a>
## 機械学習ツール
- [TensorWatch](https://github.com/microsoft/tensorwatch) - データサイエンスおよび機械学習用のデバッグと可視化ツール

<a id="python-tools"></a>
## Pythonツール
- [altair](https://altair-viz.github.io/) - Vega-Liteに基づく宣言型統計可視化
- [bokeh](https://bokeh.pydata.org/en/latest/) - Python用のインタラクティブなウェブプロット
- [Chartify](https://github.com/spotify/chartify) - データサイエンティストがチャートを作成しやすいようにしたBokehのラッパー
- [diagram](https://github.com/tehmaze/diagram) - UTF-8文字を使用したテキストモードの図示
- [ggplot](https://github.com/yhat/ggpy) - [Rの](#r-tools)ggplot2に基づくプロットシステム
- [glumpy](https://github.com/glumpy/glumpy) - OpenGLを用いた科学的可視化ライブラリ
- [holoviews](https://holoviews.org/) - 注釈されたデータに基づく複雑で宣言型の可視化
- [ipychart](https://github.com/nicohlr/ipychart) - Jupyter NotebookにおけるChart.jsの力
- [mayai](https://docs.enthought.com/mayavi/mayavi/) - Pythonによるインタラクティブな科学データ可視化と3Dプロット
- [matplotlib](https://matplotlib.org/) - 2次元プロットライブラリ
- [missingno](https://github.com/ResidentMario/missingno) - matplotlibを基にしたデータ可視化ユーティリティの柔軟なツールセットを提供し、データセットの完全性を迅速に可視化する
- [plotly](https://plot.ly/python/) - [plotly.js](https://github.com/plotly/plotly.js)に基づいたインタラクティブなウェブベース可視化
- [pptk](https://github.com/heremaps/pptk) - 2D/3D ポイントクラウドの可視化と作業
- [PyQtGraph](https://www.pyqtgraph.org/) - インタラクティブかつリアルタイムの2D/3D/画像プロットおよび科学・工学用ウィジェット
- [PyVista](https://github.com/pyvista/pyvista) – Visualisation Toolkit (VTK) を使いやすくした3Dプロットとメッシュ解析インターフェース
- [seaborn](https://seaborn.pydata.org/) - 魅力的で情報量の多い統計グラフィックスを生成するライブラリ
- [toyplot](https://toyplot.readthedocs.io/en/stable/) - 小規模で扱いやすく、本格的な用途を目指すPythonプロットツールキット
- [three.py](https://github.com/stemkoski/three.py/) - PyOpenGLに基づく使いやすい3Dライブラリ。Three.jsを参考にした。
- [veusz](https://veusz.github.io/) - PythonによるマルチプラットフォームGUIプロットツールおよびグラフライブラリ
- [VisPy](https://vispy.org/) - OpenGLをベースとした高性能科学データ可視化
- [vtk](https://www.vtk.org/) - 3Dコンピュータグラフィックス、画像処理、可視化（Pythonインターフェースを含む）
- [pandas-profiling](https://github.com/pandas-profiling/pandas-profiling) - 統計解析レポートを可視化で生成し、データ分析を迅速に実行
- [pyechars](https://github.com/pyecharts/pyecharts) - EchartsライブラリのPythonバインディング

<a id="r-tools"></a>
## Rツール
- [ggplot2](https://ggplot2.tidyverse.org/) - グラフィックの文法に基づいたプロットシステム
- [ggvis](https://ggvis.rstudio.com/) - ggplot2に類似した構文を持つデータ可視化パッケージで、豊かなインタラクティブグラフィックスを作成可能
- [lattice](https://lattice.r-forge.r-project.org) - Rにおけるトレリスグラフィックス
- [plotly](https://github.com/ropensci/plotly) - インタラクティブなチャート（ggplot2の出力にインタラクティブ性を追加含む）、カートグラムおよびシンプルなネットワーク図
- [rbokeh](https://hafen.github.io/rbokeh/) - BokehへのRインターフェース
- [rgl](https://cran.r-project.org/web/packages/rgl/index.html) - OpenGLを用いた3D可視化
- [shiny](https://shiny.rstudio.com) - インタラクティブなアプリケーション／可視化を作成するためのフレームワーク
- [visNetwork](https://datastorm-open.github.io/visNetwork/) - インタラクティブなネットワーク可視化

<a id="ruby-tools"></a>
## Rubyツール
- [Chartkick](https://github.com/ankane/chartkick) - Rubyで1行でチャートを作成

<a id="markup-based-tools"></a>
## マークアップベースのツール
- [mermaidjs](https://mermaidjs.github.io/mermaid-live-editor) - JavaScriptを用いてテキストからチャートを生成する、Markdown風の簡潔なスクリプト言語
- [wavedrom.com](https://wavedrom.com/) - シンプルなテキスト記述からタイミング図や波形を描画

<a id="other-tools"></a>
## その他のツール
特定のプラットフォームや言語に依存しないツールです。
- [Charted](https://github.com/mikesall/charted) - 任意のデータファイルから自動生成・共有可能なチャートを生成するチャートツール
- [Gephi](https://github.com/gephi/gephi) - 大規模グラフの可視化および操作を行うオープンソースプラットフォーム
- [Kepler.gl](https://kepler.gl/) - 大規模データセットに対する地理空間分析ツール
- [Mermaid](https://github.com/knsv/mermaid) - Markdownに似た記法でテキストから図やフローチャートを生成するツール
- [RAW](https://rawgraphs.io) - CSVやExcelファイルからウェブ可視化を作成
- [Spark](https://github.com/holman/spark) - シェル向けのスパークライン。いくつかの [implementations in different languages](https://github.com/holman/spark/wiki/Alternative-Implementations) を備えている
- [Visual-Insights](https://github.com/ObservedObserver/visual-insights) - データ分析における自動インサイト抽出および可視化仕様
- [X6](https://x6.antv.vision/en) - DAG図、ER図、フローチャートなど、他のアプリケーションの迅速な構築を可能にする図の作成ライブラリ、アリババが維持
- [Graphviz](https://graphviz.org/) - 入力テキストからSVG、PDF、インタラクティブなWebグラフブラウザー向け出力を生成する、オープンソースのグラフ可視化CLI／ライブラリ。

<a id="resources"></a>
# 資料

<a id="books"></a>
## 書籍
- [Design for Information](https://www.amazon.com/Design-Information-Introduction-Histories-Visualizations/dp/1592538061) イザベル・ミレレスによる。
- [The Best American Infographics 2014](https://www.amazon.com/Best-American-Infographics-2014/dp/0547974515) ゲーティ・クックによる。
- [The Grammar of Graphics](https://www.amazon.com/Grammar-Graphics-Statistics-Computing/dp/0387245448/) ランドル・ウィルキンソンによる。基本的な可視化理論。
- [The Visual Display of Quantitative Information](https://www.amazon.com/Visual-Display-Quantitative-Information/dp/0961392142) エドワード・トゥフェによる。
- [The Wall Street Journal Guide to Information Graphics](https://www.amazon.com/Street-Journal-Guide-Information-Graphics/dp/0393347281) ドナ・M・ワンによる。
- [Visualization Analysis and Design](https://www.amazon.com/Visualization-Analysis-Design-AK-Peters/dp/1466508914) タマラ・ムンザーネルによる。
- [Interactive Data Visualization for the Web](https://chimera.labs.oreilly.com/books/1230000000345) スコット・マーリーによる。オンラインで読むことができる。D3に焦点を当てる。
- [Data Visualization Toolkit](https://datavisualizationtoolkit.com) バレット・アウストイン・クラークによる。D3、Ruby on Rails、Postgres、PostGIS、およびLeafletを使用。
- [Data Visualisation: A Handbook for Data Driven Design](https://www.amazon.com/Data-Visualisation-Handbook-Driven-Design/dp/1526468921/) アンディ・キルクによる。

<a id="catalogs"></a>
## カタログ
- [The Data Visualization Catalogue](https://www.datavizcatalogue.com) - データ可視化手法のコレクション。利点と欠点を示す。
- [Data Viz Project](https://datavizproject.com)
- [The R Graph Gallery](https://www.r-graph-gallery.com)
- [From data to Viz](https://www.data-to-viz.com)
- [Chartopedia](https://www.anychart.com/chartopedia)
- [Interactive Chart Chooser](https://depictdatastudio.com/charts/) デピクトデータスタジオによる。
- Wikipedia
  - [Data visualization techniques](https://en.wikipedia.org/wiki/Data_visualization#Techniques)
  - [List of graphical methods](https://en.wikipedia.org/wiki/List_of_graphical_methods)
  - [Types of diagrams](https://en.wikipedia.org/wiki/Diagram#Gallery_of_diagram_types)
  - [Types of plots](https://en.wikipedia.org/wiki/Plot_(graphics)#Types_of_plots)
  - [Types of charts](https://en.wikipedia.org/wiki/Chart#Types)

<a id="podcasts"></a>
## ポッドキャスト
- [Data Stories](https://datastori.es/)
- [DataFramed](https://www.datacamp.com/community/podcast)
- [Data Viz Today](https://dataviztoday.com/)

<a id="twitter-accounts"></a>
## Twitterアカウント
- [Alberto Cairo](https://twitter.com/albertocairo)
- [Andrei Kashcha](https://twitter.com/anvaka)
- [Benjamin Wiederkehr](https://twitter.com/datavis)
- [Jan Žák](https://twitter.com/zakjan)
- [Mara Averick](https://twitter.com/dataandme)
- [Martin Wattenberg](https://twitter.com/wattenberg)
- [Mike Bostock](https://twitter.com/mbostock)
- [Nadieh Bremer](https://twitter.com/NadiehBremer)
- [NYT Graphics](https://twitter.com/nytgraphics)
- [Visualizing](https://twitter.com/VisualizingOrg)

<a id="websites"></a>
## Webサイト
- [Data For Visualization](https://dataforvisualization.com/) ソフトウェア開発者の視点からデータによるストーリーテリングに関するブログ
- [Ann K. Emery](https://annkemery.com/)のブログ
- [Data Visualization Society](https://www.datavisualizationsociety.com/) - データ可視化ソサイエティは、データ可視化プロフェッショナルのコミュニティを育成することを目的とした組織。
- [eagereyes](https://eagereyes.org/)
- [EvergreenData](https://stephanieevergreen.com/)
- [FlowingData](https://flowingdata.com/)
- [Information is Beautiful](https://www.informationisbeautiful.net/)
- [Junk Charts](https://junkcharts.typepad.com/) - カイザー・フングが、特定のデータ可視化がなぜ機能するのか、あるいは機能しないのかを解説
- [Lisa Rost thinks and discusses about why we dataviz](https://lisacharlotterost.github.io/)
- [Makeover Monday](https://www.makeovermonday.co.uk/)ブログ - Twitterの[#MakeoverMonday](https://twitter.com/search?q=%23makeovermonday)
- [The Open News](https://source.opennews.org/articles/)ブログ - OpenNewsがデータ可視化に関する良質な記事を掲載
- [The Pudding](https://pudding.cool/)
- [Truth & Beauty Operations](https://truth-and-beauty.net/)
- [University of Washington Interactive Data Lab Papers](https://idl.cs.washington.edu/papers)
- [vis4.net](https://www.vis4.net/blog/) - Gregor Aischによる可視化とデータジャーナリズムについての考察


<a id="contributing"></a>
# 貢献

- 最初に重複がないか確認してください。
- 説明は短く、簡潔で、中立的にしてください。
- 提案ごとに個別のコミットを作成してください。
- 必要であれば新しいカテゴリを追加してください。

提案をありがとうございます。


<a id="contributors"></a>
# 貢献者

- Fabio Soutoがこのリポジトリを最初に作成しました。[fabiosouto.me](https://fabiosouto.me/).
- [Javier Luraschi](https://github.com/javierluraschi)は現在のメンテナーで、[Hal9](https://hal9.com)で予測可視化を構築しています。


- - -

この方針に基づく一覧について質問があれば、Twitterの[@javierluraschi](https://twitter.com/javierluraschi)へ連絡するか、[GitHub issueを作成](https://github.com/javierluraschi/awesome-dataviz/issues/new)してください。
