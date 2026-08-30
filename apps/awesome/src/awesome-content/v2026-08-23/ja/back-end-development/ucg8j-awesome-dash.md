---
title: "ucg8j/awesome-dash"
description: "ucg8j/awesome-dash の定本スナップショット"
licenseSource: "github-ucg8j-awesome-dash-readme-md"
---

# Awesome Dash [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

[<img src="logo.webp" align="right" width="250">](https://plot.ly/products/dash/)

優れたDash（plotly）リソースを厳選したリスト。

> [Dash](https://plot.ly/products/dash/)は、ウェブアプリケーションを構築するための生産性の高いPythonフレームワークです。
> Flask、Plotly.js、React.jsの上に構築されたDashは、純粋なPythonで高度にカスタム化したユーザーインターフェースを持つデータ可視化アプリを構築するのに最適です。特にPythonでデータを扱う人に適しています。

## 目次
- [デプロイ](#deployment)
- [チュートリアル](#tutorials)
- [コンポーネントライブラリ](#component-libraries)
- [アプリ例](#app-examples)
- [イディオムに沿った例](#idiomatic-examples)
- [ギャラリー](#galleries)
- [チートシート](#cheat-sheets)
- [講演](#talks)
- [書籍](#books)
- [コミュニティ](#community)
- [貢献者](#contributors)

## デプロイ

- [Ploomber Cloud](https://ploomber.io) - コミュニティプランでは無料デプロイが可能です。

## チュートリアル

- [Introducing Plotly Dash](https://medium.com/@plotlygraphs/introducing-dash-5ecf7191b503) - Dash作者Chris ParmerによるDashの高レベルな紹介。このエッセイはDash公式ローンチ（2017年6月21日）の一部として公開されました。
- [Plotly's tutorials - Part 1: App Layout](https://dash.plotly.com/layout)
- [Plotly's tutorials - Part 2: Interactivity](https://dash.plotly.com/basic-callbacks)
- [Plotly's tutorials - Part 3: Interactive Graphing](https://dash.plotly.com/interactive-graphing)
- [Plotly's tutorials - Part 4: Callbacks With State](https://dash.plotly.com/sharing-data-between-callbacks)
- [Charming Data YouTube channel](https://www.youtube.com/charmingdata) - 登録者25,000人超のDashとPlotly教育専門チャンネル。
- [Interactive Web-Based Dashboards in Python](https://alysivji.github.io/reactive-dashboards-with-dash.html) - MVCモデルとDashの関係、およびアプリ構築の手順。
- [Using Plotly's Dash to deliver public sector decision support dashboards](https://medium.com/a-r-g-o/using-plotlys-dash-to-deliver-public-sector-decision-support-dashboards-ac863fa829fb) - 複雑なダッシュボードをステップバイステップで構築します。
- [OPS CodeDay: Dash Plotly Map + Graph](https://radumas.info/blog/tutorial/2017/08/10/codeday.html) - Jupyter notebooksをDashと組み合わせて地図可視化を作成する方法。
- [Creating Interactive Visualizations with Plotly's Dash Framework](http://pbpython.com/plotly-dash-intro.html) - Dashの始め方の高レベルな概要。
- [ARGO Labs - Plotly Dash Tutorial (Video)](https://www.youtube.com/watch?v=yfWJXkySfe0) - インタラクティブダッシュボード作成の詳細な紹介。
- [Data Visualization GUIs with Dash and Python (Video playlist)](https://www.youtube.com/watch?v=J_Cy_QjG6NE&list=PLQVvvaa0QuDfsGImWNt1eUEveHOepkjqt) - Dashの機能を探る全5回シリーズ。
- [Interactive Visualization of Machine Learning and Computer Vision with Dash](https://www.youtube.com/watch?v=3F5AR-uUqJc) - 公式紹介動画。
- [Webinar: Converting React components to Dash components](https://www.youtube.com/watch?v=wifoPPRgG_I) - ReactコンポーネントをDashコンポーネントに変換する方法についての公式チュートリアル。
- [Interactive Image Processing with Dash-Canvas](https://www.youtube.com/watch?v=LKXSFBB5ccI) - Dash Canvasコンポーネントの公式紹介動画。
- [Dash Cytoscape Component](https://www.youtube.com/watch?v=snXcIsCMQgk) - Dash Cytoscapeコンポーネントの公式紹介動画。
- [An introduction to Dash DataTable](https://www.youtube.com/watch?v=dueejcyrYh8) - Dash DataTableコンポーネントの公式紹介動画。
- [Tutorial on creating custom Dash components with React.js.](https://dash.plotly.com/plugins)

## コンポーネントライブラリ

- [Dash PDF](https://github.com/ploomber/dash-pdf) - インラインPDFを表示します。
- [Dash MUI](https://github.com/ploomber/dash-mui) - Material UIコンポーネント。
- [Dash React Simple Maps](https://github.com/ploomber/dash-react-simple-maps) - インタラクティブ地図を作成します。
- [Dash Mosaic](https://github.com/ploomber/mosaic-python#dash-mosaic) - [Mosaic](https://github.com/uwdata/mosaic)プロットを表示します。
- [Dash Tabler Icons](https://github.com/ploomber/dash-tabler-icons) - Dashアプリ向けの美しいアイコン。
- [Dash React Syntax Highlighter](https://github.com/ploomber/dash-react-syntax-highlighter) - コピーボタン付きコードスニペットを表示します。
- [Dash Canvas Components](https://dash.plotly.com/canvas) - 画像アノテーションおよび画像処理用のDashモジュール。
- [Awesome React Components](https://github.com/brillout/awesome-react-components) - Dashコンポーネントとしてラップする可能性があるReact.jsコンポーネントのカタログ。
- [Awesome React](https://github.com/enaqx/awesome-react) - React.jsコンポーネント開発に役立つリソース。
- [Dash Core Components](https://github.com/plotly/dash-core-components)
- [Dash Cytoscape Component](https://dash.plotly.com/cytoscape) - 容易にカスタマイズ可能で高性能、インタラクティブかつウェブベースのネットワークを作成するグラフ可視化コンポーネント。
- [Dash DataTable Component](https://dash.plotly.com/datatable) - 豊富なスタイル設定、条件付き書式、編集、ソート、フィルタリングなどをサポートするインタラクティブなテーブル。
- [Dash DAQ Components](https://dash.plotly.com/dash-daq) - データ取得と制御をDashアプリケーションへ統合しやすくするコントロール群。
- [Dash HTML Components](https://github.com/plotly/dash-html-components)
- [mydcc](https://github.com/jimmybow/mydcc) - Dash Core Componentsの拡張。
- [sd-material-ui](https://github.com/StratoDem/sd-material-ui) - Dash向けmaterial-uiコンポーネントのStratoDem Analytics実装。
- [sd-range-slider](https://github.com/StratoDem/sd-range-slider) - Range Slider Dashコンポーネント。
- [dj-plotly-dash](https://github.com/pikhovkin/dj-plotly-dash) - Django向けPlotly Dashフォーク。
- [dash-flexbox-grid](https://github.com/pikhovkin/dash-flexbox-grid) - Plotly Dash向けreact-flexbox-gridラッパー。
- [dash-color-picker](https://github.com/vivekvs1/dash-color-picker) - react-colorラッパー。
- [dash-dual-listbox](https://github.com/vivekvs1/dash-dual-listbox) - react-duallistラッパー。
- [dash-bootstrap-components](https://dash-bootstrap-components.opensource.faculty.ai/) - Dash向けBootstrapコンポーネント。
- [dash-uploader](https://github.com/np-8/dash-uploader) - Dash向けアップロードコンポーネント。大きなデータファイルをサポートします。
- [Dash Mantine Components](https://github.com/snehilvj/dash-mantine-components) - Mantine React Componentsライブラリに基づく40以上のDashコンポーネントのコレクション。
- [plotly-resampler](https://github.com/predict-idlab/plotly-resampler) - データダウンサンプリング（集約）機能を追加し、大規模データセットの可視化を可能にするplotly figureのラッパー。
- [dash-vega-components](https://github.com/altair-viz/dash-vega-components) - Vega-Altair、Vega-Lite、Vegaグラフ向けDashコンポーネント。

## アプリ例

- [Oil and Gas Explorer](https://dash.gallery/dash-oil-and-gas/) - 石油・ガス生産を時間経過とリンクされた可視化で探索します。[ソースコード。](https://github.com/plotly/dash-oil-and-gas-demo)
- [Uber Rides](https://dash.gallery/dash-uber-rides-demo/) - 2014年のニューヨーク市におけるUber乗車をすべて表示します。バックエンドのPandasが0.5ギガのデータファイルをフィルタリングします。[ソースコード。](https://github.com/plotly/dash-sample-apps/tree/main/apps/dash-uber-rides-demo)
- [Drug Discovery](https://dash.gallery/dash-drug-discovery/) - グラフ上の点にホバーすると薬剤の説明を表示します。[ソースコード。](https://github.com/plotly/dash-sample-apps/tree/main/apps/dash-drug-discovery)
- [Live Wind Streaming](https://dash.gallery/dash-wind-streaming/) - SQLデータベースを継続的に照会し、風速・風向のライブグラフを表示します。[ソースコード。](https://github.com/plotly/dash-sample-apps/tree/main/apps/dash-wind-streaming)
- [3D Yield Curve](https://dash.gallery/dash-yield-curve/) - NYTimesの優れた[A 3-D View of a Chart That Predicts The Economic Future: The Yield Curve](https://www.nytimes.com/interactive/2015/03/19/upshot/3d-yield-curve-economic-growth.html)を元にしています。[ソースコード。](https://github.com/plotly/dash-sample-apps/tree/main/apps/dash-yield-curve)
- [Visualize Earthquakes with Plotly Dash](https://dash-earthquakes-production-45eyyotfta-ey.a.run.app/) - Dashによる優れたUIと地理空間分析の利用。[基本的なユニットテスト](https://github.com/jackdbd/dash-earthquakes/tree/master/tests)を含みます。[ソースコード。](https://github.com/jackdbd/dash-earthquakes)
- [GutenSearch](https://gutensearch.com/) - Project Gutenbergの書籍の中を検索します。[ソースコード。](https://github.com/cordb/gutensearch)

## イディオムに沿った例
- [Dash recipes](https://github.com/plotly/dash-recipes) - 大規模なDashコミュニティからの質問に答える際にplotlyチームが作成したスクリプトと例のコレクション。

## ギャラリー
- [Dash Data Dashboards and Apps](https://www.dashboardom.com/) - さまざまな話題の実世界データを用いたデータダッシュボードと、Dashで構築されたオンラインマーケティング向けアプリのコレクション。
- [Dash Gallery](https://dash.gallery/) - Dashアプリのコレクション。

## 講演
- [Dash: Data exploration web apps in pure Python](https://www.youtube.com/watch?v=eusglTlW4OA) - Chelsea Douglas、PyData DC 2018。
- [Overview of Dash](https://www.youtube.com/watch?v=sea2K4AuPOk) - Dashの作成者Chris Parmer（SciPy 2017）。
- [We're Launching Dash](https://www.youtube.com/watch?v=5BAthiN0htc&t=1s) - Dashの作成者Chris Parmerが、ローンチ前にDashの動機について話します（Plotcon NYC 2016）。
- [Plotly dash and data visualisation in Python, PyData, Berlin 2017](https://www.slideshare.net/vladimirkazantsev/plotly-dash-and-data-visualisation-in-python) - Volodymyr Kazantsev（スライドのみ）。

## チートシート
- [plotly.py Cheat Sheet](https://images.plot.ly/plotly-documentation/images/python_cheat_sheet.pdf)

## コミュニティ
- [Plotly hosted Question and Answer community](https://community.plot.ly)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/plotly-dash)

## 貢献者
- [Luke Singham](https://lukesingham.com/)
- [Aly Sivji](https://alysivji.github.io/)
- [Chris Parmer](https://github.com/chriddyp)
- [Sergey Pikhovkin](https://github.com/pikhovkin)
- [Pascal Bugnion](https://pascalbugnion.net)
- [Florian Kromer](https://github.com/fkromer)
- [Elias Dabbas](https://www.dashboardom.com)
- [vaexio](https://github.com/vaexio)
- [Fanchao MENG](https://github.com/pingf)
- [Snehil Vijay](https://github.com/snehilvj)
- [Eduardo Blancas](https://github.com/edublancas)

## ライセンス
この作品はCreative Commons Attribution 4.0 International Licenseの下でライセンスされています。
