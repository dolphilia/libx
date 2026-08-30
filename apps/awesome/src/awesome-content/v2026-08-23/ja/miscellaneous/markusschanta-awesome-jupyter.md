---
title: "Awesome Jupyter"
description: "Jupyterを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-markusschanta-awesome-jupyter-readme-md"
---

# Awesome Jupyter

Jupyterを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次


- [ランタイム／フロントエンド](#runtimesfrontends)
- [共同作業／教育](#collaborationeducation)
- [可視化](#visualization)
- [テーブル](#Tables)
- [レンダリング／公開／変換](#renderingpublishingconversion)
- [バージョン管理](#version-control)
- [JupyterLab拡張機能](#jupyterlab-extensions)
- [テスト](#testing)
- [分野別プロジェクト](#domain-specific-projects)
- [ホスト型ノートブック](#hosted-notebook-solutions)
- [公式資料とドキュメント](#official-resources-and-documentation)
- [コミュニティ資料](#community-resources)
- [記事／ガイド／チュートリアル](#articlesguidestutorials)
- [貢献](#contributing)



---

<a id="runtimesfrontends"></a>
## ランタイム／フロントエンド

- [Beaker](http://beakerx.com/) - 開発環境で、複数の言語間でスムーズにデータを伝送できる環境。
- [docker-stacks](https://github.com/jupyter/docker-stacks) - Dockerに組み込まれた即時実行可能なJupyterアプリケーションの階層構造。
- [Guild AI](https://my.guild.ai/docs/jupyter-notebook-experiments/) - ノートブックを実験として実行し、時間経過にわたり結果を記録・比較できる。
- [Hydrogen](https://github.com/nteract/hydrogen) - Atomでコードをインラインで実行し、Jupyterのカーネルを使用。
- [Jupyter Notebook](https://github.com/jupyter/notebook) - Jupyterノートブックのメイン実行環境。
- [JupyterHub](https://github.com/jupyterhub/jupyterhub) - マルチユーザー対応のJupyterサーバー。
- [JupyterLab](https://github.com/jupyterlab/jupyterlab) - JupyterLabは、Jupyterの次世代ユーザーインターフェース。
- [JupyterLab Desktop](https://github.com/jupyterlab/jupyterlab-desktop) - ElectronをベースとしたJupyterLab用デスクトップアプリケーション。
- [JupyterWith](https://github.com/tweag/jupyterWith) - Nixベースのフレームワークで、宣言型かつ再現可能なJupyter環境を定義。
- [kaggle/docker-python](https://github.com/kaggle/docker-python) - KaggleのPython Dockerイメージにデータセットとパッケージが含まれている。
- [ML Workspace](https://github.com/ml-tooling/ml-workspace) - Jupyter（Lab）およびデータサイエンス／機械学習用のさまざまなパッケージを含むDockerイメージ。
- [nteract](https://github.com/nteract/nteract) - ネイティブなデスクトップノートブックフロントエンド。
- [Panel](https://github.com/holoviz/panel) - ノートブックを静的ファイルとして、またはインタラクティブかつ独立したサーバー／クライアント側（pyodide経由）アプリとして扱う。
- [PaneLite](https://panelite.holoviz.org) - [JupyterLite](https://jupyterlite.readthedocs.io/en/latest/)のディストリビューションで、[Panel](https://panel.holoviz.org)および[HoloViz](https://holoviz.org)エコシステムと連携する。
- [Stencila](https://github.com/stencila/stencila) - ネイティブなデスクトップノートブックフロントエンド。
- [Visual Studio Code](https://code.visualstudio.com/docs/python/jupyter-support) - ネイティブなデスクトップノートブックフロントエンド。
- [voila](https://github.com/voila-dashboards/voila) - ノートブックをインタラクティブかつ独立したウェブアプリとして扱う。

<a id="collaborationeducation"></a>
## 共同作業／教育

- [callgraph](https://github.com/osteele/callgraph) - 関数呼び出しのグラフを表示するためのマジックコマンド。
- [IllumiDesk](https://github.com/IllumiDesk/illumidesk) - 教育用のDockerベースのJupyterHub + LTI + nbgraderの配布版。
- [ipygame](https://github.com/Kamuyin/ipygame) - Jupyterノートブック向けのpygameと互換性のある再実装。
- [IPythonBlocks](https://github.com/jiffyclub/ipythonblocks) - Jupyterに色付きグリッドを使ってPythonを練習する.
- [jupyter-drive](https://github.com/jupyter/jupyter-drive) - Jupyter用のGoogle Drive.
- [jupyter-edx-grader-xblock](https://github.com/ibleducation/jupyter-edx-grader-xblock) - Jupyterノートブックで作成された学生の課題を自動評価し、Open edXの評価帳に点数を記録する.
- [jupyter-viewer-xblock](https://github.com/ibleducation/jupyter-viewer-xblock) - Open edXのXBlockに、Jupyterノートブックの一部または全体を取得して表示する.
- [jupyterquiz](https://github.com/jmshea/jupyterquiz) - JupyterノートブックおよびJupyter Book向けのインタラクティブクイズ生成器.
- [LTI Launch JupyterHub Authenticator](https://github.com/jupyterhub/ltiauthenticator) - Edxによる認証.
- [nbautoeval](https://github.com/parmentelat/nbautoeval) - 自動評価が可能な演習の作成.
- [nbgitpuller](https://github.com/jupyterhub/nbgitpuller) - Gitリポジトリを一方向にローカルパスに同期する.
- [nbgrader](https://github.com/jupyter/nbgrader) - Jupyterノートブックの割り当てと評価.
- [nbtutor](https://github.com/lgpage/nbtutor) - Pythonコードの実行を可視化（行ごと）.

<a id="visualization"></a>
## 可視化

- [Altair](https://github.com/altair-viz/altair) - Python向けの宣言型可視化ライブラリ、[Vega](http://vega.github.io/vega)および[Vega-Lite](https://github.com/vega/vega-lite)に基づく.
- [anywidget](https://anywidget.dev) - PythonのカスタムJupyterウィジェットを作成・公開を簡略化するライブラリ.
- [Bokeh](https://bokeh.pydata.org/en/latest/) - 現代的なウェブブラウザ向けのインタラクティブ可視化ライブラリ.
- [bqplot](https://github.com/bloomberg/bqplot) - グラム・オブ・グラフィックスに基づくインタラクティブプロットフレームワーク（Jupyter用）.
- [Evidently](https://github.com/evidentlyai/evidently) - 機械学習モデルの検証または生産監視中に分析するためのインタラクティブレポート.
- [hvplot](https://hvplot.holoviz.org/) - Jupyterにおけるデータ探索および可視化に用いる、親しみやすく高レベルのAPI.
- [ipychart](https://github.com/nicohlr/ipychart) - JupyterにおけるChart.jsによるインタラクティブプロット.
- [ipycytoscape](https://github.com/cytoscape/ipycytoscape) - cytoscape.jsを用いたJupyterにおけるインタラクティブグラフ可視化ウィジェット.
- [ipydagred3](https://github.com/timkpaine/ipydagred3) - [ipywidgets](https://github.com/jupyter-widgets/ipywidgets)ライブラリで、jupyterlab内で有向無サイクルグラフを描画する（dagre-d3を使用）.
- [ipyleaflet](https://github.com/jupyter-widgets/ipyleaflet) - JupyterノートブックにおけるLeaflet.jsマップ向けのインタラクティブ可視化ライブラリ。
- [IPySigma](https://github.com/bsnacks000/IPySigma-Demo) - Jupyterノートブック向けのプロトタイプネットワーク可視化フロントエンド
- [ipytree](https://github.com/QuantStack/ipytree/) - Jupyter向けのツリーユニット
- [ipyvizzu](https://github.com/vizzuhq/ipyvizzu) - アニメーション付きデータストーリーツール
- [ipyvolume](https://github.com/maartenbreddels/ipyvolume) - JupyterにおけるPython向け3Dプロット（ウェブGLとウィジェットを用いる）
- [ipywebrtc](https://github.com/maartenbreddels/ipywebrtc) - Jupyterにおける動画・音声ストリーミング
- [ipywidgets](https://github.com/jupyter-widgets/ipywidgets) - Jupyter向けのUIウィジェット
- [itk-jupyter-widgets](https://github.com/InsightSoftwareConsortium/itk-jupyter-widgets) - 2Dおよび3Dにおける画像を可視化するインタラクティブウィジェット
- [jp_doodle](https://github.com/AaronWatters/jp_doodle) - 2Dおよび3、Dにおける特別用途のインタラクティブ図の構築に用いるインフラ
- [jupyter-gmaps](https://github.com/pbugnion/gmaps) - JupyterノートブックにおけるGoogleマップ向けインタラクティブ可視化ライブラリ
- [jupyter-manim](https://github.com/krassowski/jupyter-manim) - Jupyterノートブックで [manim](https://github.com/3b1b/manim)（数学アニメーションエンジン）の動画またはGIFを表示
- [lux](https://github.com/lux-org/lux) - データフレームがノートブックに表示された際に、自動的に可視化を推奨
- [mpld3](http://mpld3.github.io) - MatplotlibとD3jsを組み合わせたインタラクティブデータ可視化
- [pd-replicator](https://github.com/scwilkinson/pd-replicator) - データフレームを1クリックでクリップボードにコピー
- [Perspective](https://github.com/finos/perspective) - 大規模／ストリーミングデータセット向けのデータ可視化および分析コンポーネント
- [pyecharts](https://github.com/pyecharts/pyecharts) - [ECharts](https://github.com/apache/incubator-echarts)可視化ライブラリ向けのPythonインターフェース
- [pythreejs](https://github.com/jovyan/pythreejs) - Jupyterウィジェットインフラを活用したPython／ThreeJSブリッジ
- [tqdm](https://github.com/tqdm/tqdm) - ループやイテラブルに対して高速かつ拡張可能な進行バー
- [tributary](https://github.com/timkpaine/tributary) - Jupyter対応のPythonデータストリーム
- [xleaflet](https://github.com/QuantStack/xleaflet) - ipyleaflet向けのC++バックエンド
- [xwebrtc](https://github.com/QuantStack/xwebrtc) - ipywebrtc向けのC++バックエンド
- [xwidgets](https://github.com/QuantStack/xwidgets) - ipynb 用の C++ バックエンド

<a id="tables"></a>
## テーブル

- [buckaroo](https://github.com/paddymul/buckaroo) - Jupyter および pandas 用の GUI データ操作ツール
- [ipyaggrid](https://github.com/widgetti/ipyaggrid) -  Jupyter における ag-Grid の強力な機能
- [ipydatagrid](https://github.com/bloomberg/ipydatagrid) - Jupyter 用の高速データグリッドウィジェット
- [ipyregulartable](https://github.com/jpmorganchase/ipyregulartable) - Jupyter における高パフォーマンスで編集可能かつスタイル設定可能なデータグリッド
- [ipysheet](https://github.com/QuantStack/ipysheet/) - Jupyter におけるインタラクティブなスプレッドシート
- [ITables](https://github.com/mwouts/itables) - pandas および Polars のデータフレームをインタラクティブな テーブルとして表示 [datatables-net](https://datatables.net/)
- [Qgrid](https://github.com/quantopian/qgrid) - Jupyter におけるデータフレームのソート、フィルタリング、編集に用いるインタラクティブなグリッド

<a id="renderingpublishingconversion"></a>
## レンダリング／公開／変換

- [Binder](http://mybinder.org) - GitHub リポジトリをインタラクティブなノートブックのコレクションに変換
- [Bookbook](https://github.com/takluyver/bookbook) - Bookbook はディレクトリ内のノートブックのセットを HTML または PDF に変換し、ノートブック内部および間のクロス参照を保持
- [ContainDS Dashboards](https://github.com/ideonate/cdsdashboards) - JupyterHub の拡張機能で、Voilà、Streamlit、Plotly Dash など任意のフレームワークでの認証されたスクリプトやノートブックをホスト
- [Ganimede](https://github.com/manugraj/ganimede) - サンドボックス内でノートブックを保存、バージョン管理、編集、実行し、REST インターフェースを介して直接統合
- [Jupyter Book](https://github.com/executablebooks/jupyter-book) - 計算コンテンツから出版品質の書籍やドキュメントを作成
- [jupyterlab_nbconvert_nocode](https://github.com/timkpaine/jupyterlab_nbconvert_nocode) - コードセルを含まない PDF/HTML 出力用の NBConvert 出力機能
- [Jupytext](https://github.com/mwouts/jupytext) - ノートブックをテキストフォーマット（例：Python または Markdown ファイル）に変換し、バージョン管理に適した形で同期
- [jut](https://github.com/kracekumar/jut) - ターミナル上でノートブックを美しく表示する CLI
- [Kapitsa](https://github.com/gitjeff05/kapitsa) - ローカルの Jupyter ノートブックを検索する CLI
- [Mercury](https://github.com/mljar/mercury) - ノートブックをウェブアプリケーションに変換
- [nbconvert](https://nbconvert.readthedocs.io) - ノートブックを他のフォーマットに変換
- [nbdev](https://github.com/fastai/nbdev) - Jupyter を [Literate Programing](https://en.wikipedia.org/wiki/Literate_programming) 環境として利用して Python パッケージを開発、パッケージ化、PyPI に配布
- [nbflow](https://github.com/jhamrick/nbflow) - Jupyter と Scons を使って、ワンボタンで再現可能なワークフローを作成
- [nbinteract](https://www.nbinteract.com) - Jupyterノートブックからインタラクティブなウェブページを作成
- [nbscan](https://github.com/conery/nbscan) - Jupyterノートブック内のセルの内容を検索・表示
- [Nikola](https://getnikola.com) - ノートブックをウェブサイトに変換する静的サイトジェネレーター
- [notedown](https://github.com/aaren/notedown/) - Jupyterノートブックをマークダウン（および逆に）に変換
- [Papermill](https://github.com/nteract/papermill) - Jupyterノートブックのパラメータ化、実行、分析を行うツール
- [Ploomber](https://github.com/ploomber/ploomber) - `pipeline.yaml`ファイルを使い、ノートブックとスクリプトの集合を再現可能な形で実行。
- [pynb](https://github.com/minodes/pynb) - Jupyterノートブックを埋め込みMarkdownテキストを含むシンプルなPythonコードに変換
- [RISE](https://github.com/damianavila/RISE) - Reveal.js Jupyter/IPythonスライドショー
- [rst2ipynb](https://github.com/nthiery/rst-to-ipynb) - スタンドアローンのreStructuredTextファイルをJupyterノートブックファイルに変換
- [Voila](https://github.com/QuantStack/voila) - インタラクティブなウィジェットを備えたライブJupyterノートブックのレンダリングにより、Jupyterノートブックに基づくダッシュボードを作成

<a id="version-control"></a>
## バージョン管理

- [databooks](https://github.com/datarootsio/databooks) - ノートブックのバージョン管理と共有を容易にするコマンドラインツール
- [jupyter-nbrequirements](https://github.com/thoth-station/jupyter-nbrequirements/) - Jupyterノートブックにおける依存関係の管理と最適化
- [jupyterlab-git](https://github.com/jupyterlab/jupyterlab-git) - Git統合用の拡張機能
- [nbdime](https://github.com/jupyter/nbdime) - Jupyterノートブックの差分とマージに用いるツール
- [nbQA](https://github.com/nbQA-dev/nbQA) - コマンドラインまたはpre-commitから、Jupyterノートブックに標準Pythonコード品質ツールを適用
- [Neptune](https://docs.neptune.ai/integrations-and-supported-tools/ide-and-notebooks/jupyter-lab-and-jupyter-notebook) - プロジェクト内のノートブックのバージョン管理、管理、共有
- [ReviewNB](https://www.reviewnb.com/) - Jupyterノートブックのコードレビュー

<a id="jupyterlab-extensions"></a>
## JupyterLab拡張機能

- [amphi-etl](https://github.com/amphi-ai/amphi-etl) - JupyterLabへの低コードETL拡張機能
- [celltags](https://github.com/jupyterlab/jupyterlab-celltags) - セルタグを使ってノートブックを整理・実行する拡張機能
- [code_formatter](https://github.com/ryantam626/jupyterlab_code_formatter) - ユニバーサルなコードフォーマッター
- [debugger](https://github.com/jupyterlab/debugger) - Jupyterノートブック、コンソール、ソースファイル用の可視化デバッガー
- [drawio](https://github.com/QuantStack/jupyterlab-drawio) - drawio/mxgraph図の表示を行う拡張機能
- [elyra](https://github.com/elyra-ai/elyra) - ローカルまたはリモートでノートブック（またはPythonスクリプト）パイプラインを作成・実行できる可視化エディタ
- [genv](https://github.com/run-ai/jupyterlab_genv) - JupyterLabにおけるGPU環境を管理する拡張機能
- [go-to-definition](https://github.com/krassowski/jupyterlab-go-to-definition) - JupyterLabで変数や関数の定義に移動できる拡張機能
- [google-drive](https://github.com/jupyterlab/jupyterlab-google-drive) - Google Driveの統合を行う拡張機能
- [jupyter-ai](https://github.com/jupyterlab/jupyter-ai) - JupyterLab内で生成AI（多数のモデルをサポート）をコンバース型アシスタントとして利用できる
- [jupyter-fs](https://github.com/jpmorganchase/jupyter-fs) - Jupyterで複数バックエンドに対応したファイルシステムのようなコンテンツマネージャ
- [jupyter-notify](https://github.com/ShopRunner/jupyter-notify) - セルに実行完了を通知するセルマジック
- [jupyter-panel-proxy](https://github.com/holoviz/jupyter-panel-proxy) - Jupyterサーバーのエンドポイントでノートブックを自動的にデータアプリとして提供 [Panel](https://panel.holoviz.org) `/panel`
- [jupyter-stack-trace](https://github.com/teticio/jupyter-stack-trace) - スタックトレースをクリックして、対応するファイルまたはGoogle検索を開く
- [jupyterlab-executor](https://github.com/gavincyi/jupyterlab-executor) - JupyterLabのファイルブラウザからスクリプトを実行できる拡張機能
- [jupyterlab-kyso](https://github.com/kyso-io/jupyterlab-extension) - JupyterLabからノートブックを[Kyso](https://kyso.io)プラットフォームに公開できる拡張機能
- [jupyterlab-notifications](https://github.com/mwakaba2/jupyterlab-notifications) - JupyterLabにおけるノートブックセルの補完にカスタマイズ可能なブラウザ通知
- [jupyterlab-tensorboard-pro](https://github.com/HFAiLab/jupyterlab_tensorboard_pro) - JupyterLabにおけるTensorBoardのサポート
- [jupyterlab_autoversion](https://github.com/timkpaine/jupyterlab_autoversion) - JupyterLabでノートブックを自動的にバージョン管理
- [jupyterlab_commands](https://github.com/timkpaine/jupyterlab_commands) - JupyterLabのコマンドパレットに任意のPythonコマンドを追加
- [jupyterlab_email](https://github.com/timkpaine/jupyterlab_email) - JupyterLab内でノートブックとそのコンテンツをメール送信
- [jupyterlab_iframe](https://github.com/timkpaine/jupyterlab_iframe) - JupyterLab内でHTMLを埋め込みイフレームとして表示
- [jupyterlab_miami_nights](https://github.com/timkpaine/jupyterlab_miami_nights) - VS CodeのSynthWave '84とJupyterLabのNeon Nightテーマの組み合わせ
- [jupyterlab_templates](https://github.com/jpmorganchase/jupyterlab_templates) - JupyterLabにおけるノートブックテンプレート
- [latex](https://github.com/jupyterlab/jupyterlab-latex) - LaTeXドキュメントのリアルタイム編集用拡張機能
- [lineapy](https://github.com/LineaLabs/lineapy) - 汚れたJupyterノートブックを2行のコードでプロダクション用パイプラインに変換する拡張機能
- [lsp](https://github.com/krassowski/jupyterlab-lsp) - IDEのような機能（コードナビゲーション、ホバー提案、リント、診断、カーネルなし自動補完など）
- [nb_black](https://github.com/dnanhkhoa/nb_black) - Pythonコードを自動的にフォーマットするための拡張機能（[black](https://github.com/psf/black)）
- [python-bytecode](https://github.com/jtpio/jupyterlab-python-bytecode) - JupyterLabでCPythonバイトコードを探索
- [quickopen](https://github.com/parente/jupyterlab-quickopen) - JupyterLabでファイル名の一部をタイプするだけでファイルを開く
- [shortcutui](https://github.com/jupyterlab/jupyterlab-shortcutui) - キーボードショートカットの管理用拡張機能
- [sidecar](https://github.com/jupyter-widgets/jupyterlab-sidecar) - JupyterLabにおけるサイドカーオプトアウトウィジェット
- [sql](https://github.com/pbugnion/jupyterlab-sql) - JupyterLabにおけるSQL GUI
- [stickyland](https://github.com/xiaohk/stickyland) - ノートブックの線形構成を破るためのストイックセル
- [system-monitor](https://github.com/jtpio/jupyterlab-system-monitor) - システムメトリクスを表示するための拡張機能
- [tabnine](https://github.com/codota/tabnine-jupyterlab) - Tabnine AI自動補完拡張機能
- [theme-darcula](https://github.com/telamonian/theme-darcula) - JupyterLab向け美しいDarculaテーマ
- [toc](https://github.com/jupyterlab/jupyterlab-toc) - ノートブックにコンテンツテーブルを提供する拡張機能
- [topbar](https://github.com/jtpio/jupyterlab-topbar) - JupyterLab向けトップバー拡張機能
- [variableinspector](https://github.com/lckr/jupyterlab-variableInspector) - 変数を表示し、その値を確認する変数インスペクタ拡張機能
- [vim](https://github.com/jwkvam/jupyterlab-vim) - Vimノートブックセルのバインディング
- [voyager](https://github.com/altair-viz/jupyterlab_voyager) - CSVおよびJSONデータを[Voyager](http://vega.github.io/voyager/)で表示するための拡張機能

<a id="testing"></a>
## テスト

- [ipytest](https://github.com/chmp/ipytest) - ノートブック内からユニットテストを実行するためのテストランナー
- [nbcelltests](https://github.com/jpmorganchase/nbcelltests) - Jupyterにおけるノートブックのセルごとのテスト
- [nbval](https://github.com/computationalmodelling/nbval) - Jupyterノートブックの検証用Py.testプラグイン
- [nosebook](https://github.com/bollwyvl/nosebook) - IPythonノートブックをnoseテストとして検索・実行するためのnoseプラグイン
- [pointblank](https://github.com/posit-dev/pointblank) - データ品質の目的でデータフレームおよびデータベーステーブルのノートブック用テスト
- [sphinxcontrib-jupyter](https://github.com/QuantEcon/sphinxcontrib-jupyter) - Jupyterノートブックを生成するSphinx拡張機能
- [treebeard](https://github.com/treebeardtech/treebeard) - GitHub ActionでJupyterノートブックをテスト・スケジュール
- [treon](https://github.com/ReviewNB/treon) - Jupyterノートブック用の使いやすいテストフレームワーク

<a id="domain-specific-projects"></a>
## 分野別プロジェクト

- [ArcGIS](https://developers.arcgis.com/python/) - マップおよび地理空間データを扱うためのライブラリ。ウェブGISをベースにした機能
- [GenePattern Notebook](http://genepattern-notebook.org) - ゲノム解析とインタラクティブノートブックの統合
- [GeoNotebook](https://github.com/OpenGeoscience/geonotebook) - 探索的地理空間分析用の拡張機能
- [Jupylet](https://github.com/nir/jupylet) - Jupyterノートブック内で2Dおよび3Dゲーム、グラフィックス、ライブ音楽および音声をインタラクティブに作成
- [keplergl](https://docs.kepler.gl/docs/keplergl-jupyter) - 大規模な地理位置データセットの視覚的な探索を可能にするJupyter拡張機能
- [lolviz](https://github.com/parrt/lolviz) - リストのリスト、リスト、辞書などのデータ構造を可視化するツール
- [Quantopian Notebooks](https://www.quantopian.com/notebooks/survey) - 金融研究用のJupyterベースプラットフォーム
- [vpython-jupyter](https://github.com/BruceSherwood/vpython-jupyter) - Jupyterノートブック内で動作するVPython 3Dエンジン
- [xontrib-jupyter](https://github.com/xonsh/xontrib-jupyter) - xonsh（Pythonベースのマルチプラットフォーム、Unix風シェル言語）用のJupyterカーネル

<a id="hosted-notebook-solutions"></a>
## ホスト型ノートブック

- [Anaconda Enterprise](https://www.anaconda.com/enterprise/) - 複数ユーザーによる協働およびモデル、ノートブック、ダッシュボードのワンクリックデプロイ
- [Azure Notebooks](https://notebooks.azure.com) - Microsoft Azure上で実行されるJupyterノートブック
- [CoCalc](https://cocalc.com) - 17種類のカーネルをサポートするノートブック、コース管理、LaTeXドキュメント作成、同時編集、SageMathコンピュータ代数システムとの統合
- [DataBlogs](https://www.datablogs.co/) - DataBlogsは、Jupyterノートブックをウェブ上に公開された記事に変換するオープンソースデータジャーナリズムプラットフォーム
- [DataCamp Workspace](https://www.datacamp.com/workspace) - Jupyterベースのデータサイエンスノートブックで、協働および公開機能が内蔵されています。
- [Datalore](https://www.jetbrains.com/datalore) - JetBrainsが提供するJupyter互換のデータサイエンスおよび分析ノートブックソリューションで、チーム間の協働が可能になります。
- [Deepnote](https://www.deepnote.com) - リアルタイム協働、バージョン管理、簡単なデプロイが可能なJupyter互換のデータサイエンスノートブック。
- [Domino Data Lab](https://www.dominodatalab.com) - 協働ツール、環境管理、計算グリッドを統合したデータサイエンスプラットフォーム。
- [Google Cloud AI Platform Notebooks](https://cloud.google.com/ai-platform-notebooks) - Google Cloud Platform上でGPUを有効にした機械学習フレームワークを搭載した管理されたJupyterLabノートブックインスタンス。
- [Google Cloud Dataproc Jupyter component](https://cloud.google.com/dataproc/docs/concepts/components/jupyter) - Google Cloud Dataprocを使用したApache SparkでのJupyterおよびJupyterLab。
- [Google Colaboratory](https://colab.research.google.com) - 機械学習教育および研究向けのクラウドベースのJupyter環境。
- [Kyso](https://kyso.io) - Jupyterノートブックをデータブログやウェブアプリとして公開・共有できるデータサイエンスプラットフォーム。
- [Mineo.app](https://mineo.app) - コードブロックなしのJupyter互換ノートブックを備えたデータオペレーションプラットフォームで、ダッシュボードの作成をサポート。
- [Naas](https://naas.ai) - マジックスケジューリング／通知機能とアセット／依存関係／シークレット管理を備えたJupyterLab環境。
- [Noteable](https://noteable.io/) - Noteableは、コード（SQL、PythonおよびR）とインタラクティブな可視化を組み合わせた協働ノートブックです。
- [Paperspace Gradient](https://gradient.run/) - GPUを搭載したハードウェアとMLOps機能を備えたJupyterベースのデータサイエンスIDE。
- [PAWS](https://wikitech.wikimedia.org/wiki/PAWS) - WikimediaのWikiと相互作用するためのカスタマイズされたJupyterノートブックデプロイ。
- [Pinggy](https://pinggy.io) - ファイアウォールやNATの後ろにあるJupyterインスタンスにも、トンネルを構築してアクセスできるようになります。
- [qBraid Lab](https://docs.qbraid.com/en/latest/lab/getting_started.html) - 量子コンピューティング向けにカスタムソフトウェアツールと統合を提供するJupyterLabデプロイ。
- [Saturn Cloud](https://saturncloud.io/) - ツールを変更せずに、データサイエンスチームをクラウドに移行できます。

<a id="official-resources-and-documentation"></a>
## 公式資料とドキュメント

- [Jupyter documentation](https://docs.jupyter.org/en/latest/index.html)
- [Jupyter kernels](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels) - Jupyterカーネルとして利用可能なすべてのプログラミング言語のリスト。
- [JupyterLab documentation](http://jupyterlab.readthedocs.io/en/stable/index.html)
- [Making kernels for Jupyter](https://jupyter-client.readthedocs.io/en/latest/kernels.html)
- [Try Jupyter](https://try.jupyter.org) - ブラウザ上でJupyterを試す。

<a id="community-resources"></a>
## コミュニティ資料

- Conference Talks - [PyVideo.org](http://pyvideo.org/search.html?q=jupyter), [JupyterCon](https://www.youtube.com/playlist?list=PL055Epbe6d5aP6Ru42r7hk68GTSaclYgi)
- GitHub - Search: [Jupyter](https://github.com/search?type=Repositories&q=jupyter)
- GitHub - Topics: [Jupyter](https://github.com/topics/jupyter), [jupyter-kernels](https://github.com/topics/jupyter-kernels), [jupyter-notebook](https://github.com/topics/jupyter-notebook), [jupyterhub](https://github.com/topics/jupyterhub), [jupyterlab](https://github.com/topics/jupyterlab), [jupyterlab-extension](https://github.com/topics/jupyterlab-extension)
- Gitter - [Jupyter Gitter Chatroom](https://gitter.im/jupyter/jupyter)
- [jupyter-map](https://elc.github.io/jupyter-map/) - Jupyterを用いている大学の機関を示した地図
- [kandi Kits Topic](https://kandi.openweaver.com/explore/jupyter) - 人気のJupyterライブラリ、トップ著者、トレンドプロジェクトキット、ディスカッション、チュートリアルおよび学習リソースを発見
- Mailing Lists - [Jupyter General Mailing List](https://groups.google.com/forum/#!forum/jupyter)、[Jupyter in Education Mailing List](https://groups.google.com/forum/#!forum/jupyter-education)
- PyPI - [``Framework :: Jupyter``](https://pypi.org/search/?&c=Framework+%3A%3A+Jupyter)
はJupyterプロジェクト用のPyPI trove classifierです。
- Reddit - Subreddits: [r/IPython](https://www.reddit.com/r/IPython/)、[r/Jupyter/](https://www.reddit.com/r/Jupyter/)
- Stack Overflow - Tags: [Jupyter](https://stackoverflow.com/questions/tagged/jupyter)、[jupyter-notebook](https://stackoverflow.com/questions/tagged/jupyter-notebook)


<a id="articlesguidestutorials"></a>
## 記事／ガイド／チュートリアル

- [Exploratory computing with Python](http://mbakker7.github.io/exploratory_computing_with_python/) - 科学計算を扱うノートブック集。
- [How to Grow Neat Software Architecture out of Jupyter Notebooks](https://github.com/guillaume-chevalier/How-to-Grow-Neat-Software-Architecture-out-of-Jupyter-Notebooks) - ノートブックから整ったソフトウェアアーキテクチャを育てる方法についての記事と[動画](https://www.youtube.com/watch?v=K4QN27IKr0g)。
- [Install and run a Jupyter notebook in a Google Cloud Dataproc cluster](https://cloud.google.com/dataproc/docs/tutorials/jupyter-notebook)
- [Interactive Web Plotting with Bokeh](https://github.com/bokeh/bokeh-notebooks)
- [Jupyter Notebook Extensions](http://jupyter-contrib-nbextensions.readthedocs.io)
- [Jupyter Notebook Themes](https://github.com/dunovank/jupyter-themes)
- [Jupyter tips, tricks and shortcuts](https://www.dataquest.io/blog/jupyter-notebook-tips-tricks-shortcuts/)
- [JupyterLab - Your Personal Data Science Workbench](https://github.com/markusschanta/talks/tree/master/2018-03%20-%20JupyterLab%20-%20Full%20Stack%20Quants) - Full Stack Quants Londonで行われたJupyterLabについての講演。
- [Lectures on scientific computing with Python](https://github.com/jrjohansson/scientific-python-lectures)
- [List of Jupyter notebooks](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
- [List of Jupyter notebooks II](https://github.com/jupyter-naas/awesome-notebooks)
- [pytudes](https://github.com/norvig/pytudes) - Peter NorvigによるJupyterノートブックの一覧。
- [ResGuides: research with Jupyter](https://www.gitbook.com/book/dansand/resguides-research-with-jupyter/details)
- [Sharing Jupyter Notebooks from localhost](https://pinggy.io/blog/share_jupyter_notebook_from_localhost/) - ローカルホスト上のJupyter Notebookを共有する方法。
- [The Littlest JupyterHub](https://the-littlest-jupyterhub.readthedocs.io/en/latest/) - 1台のサーバーで1～50人が利用できるJupyterHubディストリビューション。Zero to JupyterHub構成より軽量です。
- [Zero to JupyterHub](http://zero-to-jupyterhub.readthedocs.io/en/latest/) - JupyterHubのインストールと管理を支援するチュートリアル。

<a id="contributing"></a>
## 貢献

貢献を歓迎します。まず[貢献ガイドライン](https://github.com/markusschanta/awesome-jupyter/blob/62178578fed55a97986dc567b8d58fe7fa58de14/CONTRIBUTING.md)をご確認ください。
