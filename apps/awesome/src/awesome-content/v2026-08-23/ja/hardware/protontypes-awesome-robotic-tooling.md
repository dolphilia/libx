---
title: "protontypes/awesome-robotic-tooling"
description: "専門的なロボット開発のソフトウェア、ハードウェア、資料を分類した定本スナップショット"
licenseSource: "github-protontypes-awesome-robotic-tooling-readme-md"
---

# ロボット開発ツールのAwesomeリスト <a id="awesome-robotic-tooling"></a> [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

**C++・Pythonによる専門的なロボット開発を中心に、ROS、自動運転、航空宇宙も扱うツールの厳選リストです**

> 車輪の再発明を避けるには、既存の車輪を知る必要があります。このリストは、専門的なロボット開発に役立つ、ソフトウェア・ハードウェア開発の多様なオープン／無料ツールを示します。

リストの維持、品質向上、拡張には貢献が必要です。由来と参加方法は[コントリビューションガイド](https://github.com/protontypes/awesome-robotic-tooling/blob/dc73ead6b38aad66993546455696dfe7f1115dfb/CONTRIBUTING.md)および関連する[ブログ記事](https://rosindustrial.org/news/2020/5/11/guest-article-on-the-story-of-the-autonomous-logistics)を参照してください。新規プロジェクト項目は[protontypes](https://twitter.com/protontypes)から投稿されます。


[<img src="https://i.imgur.com/qI1Jfyl.gif" align="right" width="60%" />](https://github.com/leggedrobotics/xpp)

[![](https://img.shields.io/twitter/follow/protontypes?style=social)](https://twitter.com/intent/follow?screen_name=protontypes) [![Join the chat at https://gitter.im/protontypes/community](https://badges.gitter.im/protontypes/community.svg)](https://gitter.im/protontypes/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)



## 目次 <a id="contents"></a>

* [通信と協調](#communication-and-coordination)
* [文書化とプレゼンテーション](#documentation-and-presentation)
* [要件と安全](#requirements-and-safety)
* [アーキテクチャと設計](#architecture-and-design)
* [フレームワークとスタック](#frameworks-and-stacks)
* [開発環境](#development-environment)
  * [コーディングと実行](#code-and-run)
  * [テンプレート](#template)
  * [ビルドとデプロイ](#build-and-deploy)
  * [単体・統合テスト](#unit-and-integration-test)
  * [lintと整形](#lint-and-format)
  * [デバッグとトレース](#debugging-and-tracing)
  * [バージョン管理](#version-control)
* [シミュレーション](#simulation)
* [電子・機械](#electronics-and-mechanics)
* [センサー処理](#sensor-processing)
  * [較正と座標変換](#calibration-and-transformation)
  * [認識パイプライン](#perception-pipeline)
  * [機械学習](#machine-learning)
  * [並列処理](#parallel-processing)
  * [画像処理](#image-processing)
  * [レーダー処理](#radar-processing)
  * [Lidarと点群処理](#lidar-and-point-cloud-processing)
* [位置推定と状態推定](#localization-and-state-estimation)
* [自己位置推定と地図作成](#simultaneous-localization-and-mapping)
  * [Lidar](#lidar)
  * [視覚](#visual)
  * [ベクトル地図](#vector-map)
* [予測](#prediction)
* [行動と意思決定](#behavior-and-decision)
* [計画と制御](#planning-and-control)
* [ユーザー操作](#user-interaction)
  * [GUI](#graphical-user-interface)
  * [音声UI](#acoustic-user-interface)
  * [CLI](#command-line-interface)
* [データ可視化とミッション制御](#data-visualization-and-mission-control)
  * [アノテーション](#annotation)
  * [点群](#point-cloud)
  * [RViz](#rviz)
* [オペレーティングシステム](#operation-system)
  * [監視](#monitoring)
  * [データベースと記録](#database-and-record)
  * [ネットワーク分散ファイルシステム](#network-distributed-file-system)
  * [サーバー基盤と高性能計算](#server-infrastructure-and-high-performance-computing)
  * [組み込みOS](#embedded-operation-system)
  * [リアルタイムカーネル](#real-time-kernel)
* [ネットワークとミドルウェア](#network-and-middleware)
  * [Ethernetと無線ネットワーク](#ethernet-and-wireless-networking)
  * [Controller Area Network](#controller-area-network)
  * [センサー・アクチュエーターインターフェース](#sensor-and-acuator-interfaces)
* [セキュリティ](#security)
* [データセット](#datasets)



## 通信と協調 <a id="communication-and-coordination"></a>
* [Agile Development](https://agilemanifesto.org/) - アジャイルソフトウェア開発宣言
* [Gitflow](https://github.com/nvie/gitflow) - 新しい開発を完了した仕事から分離することで、並列開発を非常に容易に実現
* [DeepL](https://github.com/uinput/deeplator) - Google、Microsoft、Facebookを上回るオンライン翻訳ツール
* [Taiga](https://github.com/benhutchins/docker-taiga) - アジャイルプロジェクト管理ツール
* [Kanboard](https://github.com/kanboard/kanboard) - ミニマリズムを採用したカンバンボード
* [kanban](https://gitlab.com/leanlabsio/kanban) - GitLabのイシューに対して、無料、オープンソース、セルフホスト可能なカンバンボード
* [Gitlab](https://github.com/sameersbn/docker-gitlab) - Dockerで構成されたシンプルなセルフホスト型Gitサーバー
* [Gogs](https://github.com/gogs/gogs) - 最も手軽に設定できる、シンプルで安定かつ拡張可能なセルフホスト型Gitサービスの構築
* [Wekan](https://github.com/wekan/wekan) - メテオベースのカンバンボード
* [JIRA API](https://github.com/pycontribs/jira) - JiraのREST API向けPythonライブラリ
* [Taiga API](https://github.com/nephila/python-taiga) - TaigaのREST API向けPythonライブラリ
* [Chronos-Timetracker](https://github.com/web-pal/chronos-timetracker) - JIRA用のデスクトップクライアント。時間の記録や作業ログのアップロードを手軽に実行
* [Grge](https://gitlab.com/ApexAI/grge) - GrgeはGitLabを補助するデーモンおよびコマンドラインツール
* [gitlab-triage](https://gitlab.com/gitlab-org/gitlab-triage) - GitLabのイシューおよびマージリクエストの自動分類
* [Helpy](https://github.com/helpyio/helpy) - 現代的なオープンソースヘルプデスク・カスタマーサポートアプリケーション
* [ONLYOFFICE](https://github.com/ONLYOFFICE/CommunityServer) - ドキュメント、プロジェクト、顧客関係、メール対応をすべて1か所で管理するための無料オープンソース協働システム
* [discourse](https://github.com/discourse/discourse) - コミュニティのディスカッションを可能にするプラットフォーム。無料、オープン、シンプル
* [Gerrit](https://gerrit.googlesource.com/gerrit/) - Gitベースプロジェクト向けのコードレビューおよびプロジェクト管理ツール
* [jitsi-meet](https://github.com/jitsi/jitsi-meet) - セキュリティ、シンプルさ、スケーラビリティを備えたビデオ会議。独立したアプリとして利用可能またはウェブアプリに埋め込み可能
* [mattermost](https://github.com/mattermost/mattermost-server) - オープンソース、プライベートクラウド、Slackの代替ツール
* [openproject](https://github.com/opf/openproject) - リーダーなオープンソースプロジェクト管理ソフトウェア
* [leantime](https://github.com/Leantime/leantime) - Leantimeは、革新者向けの軽量プロジェクト管理システムです
* [gitter](https://gitlab.com/gitlab-org/gitter/webapp) - Gitterは、メッセージ、コンテンツ、発見を通じてコミュニティを管理・成長・接続するチャットおよびネットワーキングプラットフォームです

## 文書化とプレゼンテーション <a id="documentation-and-presentation"></a>
* [Typora](https://typora.io/) - ミニマリストなマークダウンエディタ
* [Markor](https://github.com/gsantner/markor) - Androidデバイス用のシンプルなマークダウンエディタ
* [Pandoc](https://github.com/jgm/pandoc) - ユニバーサルなマークアップ変換ツール
* [Yaspeller](https://github.com/hcodes/yaspeller) - スペルチェック用のコマンドラインツール
* [ReadtheDocs](https://docs.readthedocs.io/en/stable/development/buildenvironments.html) - ローカルのReadtheDocsサーバーを構築します
* [Doxygen](https://github.com/doxygen/doxygen) - Doxygenは、注釈付きC++ソースからドキュメントを生成するための実用的な標準ツールです
* [Sphinx](https://github.com/sphinx-doc/sphinx/) - Pythonプロジェクト向けに、知的な美しいドキュメントを作成しやすいツールです
* [Word-to-Markdown](https://github.com/benbalter/word-to-markdown) - Microsoft Wordドキュメントからコンテンツを解放するRubyのgemです
* [paperless](https://github.com/the-paperless-project/paperless) - すべてのスキャンされた紙のドキュメントをインデックスおよびアーカイブします
* [carbon](https://github.com/carbon-app/carbon) - ソースコードの美しい画像を共有します
* [undraw](https://undraw.co/illustrations) - 無料のプロフェッショナルなビジネスSVG。カスタマイズが簡単です
* [asciinema](https://github.com/asciinema/asciinema) - ターミナルセッションを簡単に記録し、ターミナルおよびウェブブラウザで再現できます
* [inkscape](https://inkscape.org/) - Inkscapeは、Linux、WindowsおよびmacOS向けのプロフェッショナルなベクターグラフィクエディタです
* [Reveal-Hugo](https://github.com/dzello/reveal-hugo) - Reveal.js向けのHugoテーマで、作成とカスタマイズが簡単になります。これにより、適切にフォーマットされたHugoコンテンツをHTMLプレゼンテーションに変換できます
* [Hugo-Webslides](https://github.com/RCJacH/hugo-webslides) - マーカダウンでWebSlidesプレゼンテーションを作成するためのHugoテンプレートです
* [jupyter2slides](https://github.com/datitran/jupyter2slides) - Jupyter Notebook + Reveal.jsによるクラウドネイティブプレゼンテーションスライド
* [patat](https://github.com/jaspervdj/patat) - Pandocによるターミナルベースプレゼンテ類
* [github-changelog-generator](https://github.com/github-changelog-generator/github-changelog-generator) - GitHub上のタグ、イシュー、ラベル、プルリクエストから自動的に変更ログを生成します。
* [GitLab-Release-Note-Generator](https://github.com/jk1z/GitLab-Release-Note-Generator) - GitLabのリリースノート生成ツールで、最新タグに基づいてリリースノートを生成します。
* [OCRmyPDF](https://github.com/jbarlow83/OCRmyPDF) - スキャンされたPDFファイルにOCRテキストレイヤーを追加し、検索が可能になります。
* [papermill](https://github.com/nteract/papermill) - Jupyterノートブックのパラメータ化、実行、分析を行うツールです。
* [docsy](https://github.com/google/docsy-example) - Docsy Hugoテーマを使用したドキュメントサイトの例です。
* [actions-hugo](https://github.com/peaceiris/) - Hugoで構築されたウェブサイトをGitHub Pagesにデプロイします。
* [overleaf](https://github.com/overleaf/overleaf) - オープンソースのオンラインリアルタイム協働LaTeXエディタです。
* [landslide](https://github.com/adamzap/landslide) - マーカー、ReST、テキストのいずれかからHTML5スライドショーを生成します。
* [libreoffice-impress-templates](https://github.com/dohliam/libreoffice-impress-templates) - フリーライセンスのLibreOffice Impressテンプレートです。
* [opensourcedesign](https://opensourcedesign.net/resources/) - 無料デザインとロゴ作成のコミュニティとリソースです。
* [olive](https://www.olivevideoeditor.org/) - 無料の非線形動画編集ソフトで、高級プロフェッショナル動画編集ソフトの完全な代替を提供することを目的としています。
* [buku](https://github.com/jarun/buku) - ブラウザに依存しないブックマーク管理ツールです。
* [swiftlatex](https://www.swiftlatex.com/) - WYSIWYGのブラウザベースLaTeXエディタです。
* [ReLaXed](https://github.com/RelaxedJS/ReLaXed) - 複雑なPDFレイアウトをCSSとJavaScriptで定義しつつ、MarkdownやLaTeXに近いフレンドリーで最小限の構文でコンテンツを記述できます。
* [foam](https://github.com/foambubble/foam) - Foamは、Roam Researchにインスピレーションを受けた個人知識管理および共有システムで、Visual Studio CodeとGitHubに基づいて構築されています。
* [CodiMD](https://github.com/codimd/server) - オープンソースのオンラインリアルタイム協働Markdownによるチームドキュメント作成ツールです。
* [jupyter-book](https://github.com/executablebooks/jupyter-book) - Jupyterノートブックからインタラクティブで出版品質の高いドキュメントを作成します。
* [InvoiceNet](https://github.com/naiveHobo/InvoiceNet) - インボイスドキュメントから知能のある情報を抽出するディープニューラルネットワークです。
* [tesseract](https://github.com/tesseract-ocr/tesseract) - オープンソースOCRエンジンです。
* [mkdocs](https://github.com/mkdocs/mkdocs/) - 高速でシンプルで、まさに美しい静的サイトジェネレーターで、プロジェクトドキュメントの作成に特化しています。
* [PlotNeuralNet](https://github.com/HarisIqbal88/PlotNeuralNet) - レポートやプレゼンテーション用にニューラルネットワークを描くためのLaTeXコード
* [Excalidraw](https://github.com/excalidraw/excalidraw) - 手書きのような図をスケッチするための仮想白板
* [SVGrepo](https://www.svgrepo.com/) - 商業利用に無料でダウンロード可能なSVGベクター
* [gollum](https://github.com/gollum/gollum) - シンプルでGitを活用したWiki。優れたAPIとローカルフロントエンドを備えています
* [GanttLab](https://gitlab.com/ganttlab/ganttlab) - GitLabおよびGitHubで使用できる、使いやすく、完全に機能するGanttチャート
* [Zotero](https://github.com/zotero/zotero) - あなたの研究ソースを収集・整理・引用・共有するための、無料で使いやすいツール


## 要件と安全 <a id="requirements-and-safety"></a>
* [awesome-safety-critical](https://github.com/stanislaw/awesome-safety-critical) - 安全に重要なソフトウェアを書くためのプログラミング実践に関するリソース一覧
* [open-autonomous-safety](https://github.com/voyage/open-autonomous-safety) - OASは、自動運転車スタートアップの世界中で既存の安全プログラムを補完するための、ヴォイジーズの安全プロセスとテスト手順を完全にオープンソースで提供するライブラリです
* [CarND-Functional-Safety-Project](https://github.com/udacity/CarND-Functional-Safety-Project) - このUdacityプロジェクトで作成された、機能安全ドキュメントの作成方法
* [Automated Valet Parking Safety Documents](https://avp-project.uk/publication-of-safety-documents) - 自動運転駐車機能の安全なテストを、ストリートドローンテスト車を駐車場で使用して支援するための開発されたツール
* [safe_numerics](https://github.com/boostorg/safe_numerics) - 標準の数値型に置き換えるもので、エラー時に例外を投げます
* [Air Vehicle C++ development coding standards](http://www.stroustrup.com/JSF-AV-rules.pdf) - C++プログラマに、良いプログラミングスタイルと確立されたプログラミング実践を導入し、安全で信頼性があり、テスト可能かつ維持可能なコードを実現できるようにする方向性とガイドラインを提供します
* [AUTOSAR Coding Standard](https://www.autosar.org/fileadmin/user_upload/standards/adaptive/17-10/AUTOSAR_RS_CPP14Guidelines.pdf) - C++14言語の安全および重要なシステムでの使用に関するガイドライン
* [The W-Model and Lean Scaled Agility for Engineering](https://assets.vector.com/cms/content/consulting/publications/AgileSystemsEngineering_Vector_Ford.pdf) - フォードが、安全関連プロジェクトの管理に利用できるVectorのアジャイルVモデル手法を適用した事例
* [doorstop](https://github.com/doorstop-dev/doorstop) - バージョン管理を用いた要件管理
* [capella](https://www.eclipse.org/capella/) - 要件と安全に関するロボット開発ツール、ライブラリ、規格、または資料です。
システムアーキテクチャの設計を支援します。
* [robmosys](https://robmosys.eu/) - RobMoSysは、現在のコード中心型ロボットプラットフォームの上に、モデル駆動手法とツールを適用することで、統合的なアプローチを構築するものとして想定されています
* [Papyrus for Robotics](https://www.eclipse.org/papyrus/components/robotics/) - RobMo及のアプローチに従った、ロボットアプリケーション向けのグラフィカル編集ツール
* [fossology](https://github.com/fossology/fossology) - コマンドラインからライセンス、著作権、輸出制御のスキャンを実行できるツールキット
* [ScenarioArchitect](https://github.com/TUMFTM/ScenarioArchitect) - Scenario Architectは、短いシーンスナップショットを生成・インポート・エクスポートするための基本的なPythonツールです


## アーキテクチャと設計 <a id="architecture-and-design"></a>
* [Guidelines](https://github.com/S2-group/icse-seip-2020-replication-package/blob/master/ICSE_SEIP_2020.pdf) - ROSベースシステムのアーキテクチャについてのガイド
* [yEd](https://www.yworks.com/products/yed) - 強力なデスクトップアプリケーションで、迅速かつ効果的に高品質の図を生成できる
* [yed_py](https://github.com/true-grue/yed_py) - yEdで開けるgraphMLを生成
* [Plantuml](https://github.com/plantuml/plantuml-server) - ライブドキュメント内で即座にUML図を生成するウェブアプリケーション
* [rqt_graph](https://wiki.ros.org/rqt_graph) - ROS計算グラフを可視化するGUIプラグイン
* [rqt_launchtree](https://github.com/pschillinger/rqt_launchtree) - 階層的なlaunchファイルの構成を introspectするRQTプラグイン
* [cpp-dependencies](https://github.com/tomtom-international/cpp-dependencies) - C++の#include依存性をチェックするツール（生成される依存グラフは.dot形式）
* [pydeps](https://github.com/thebjorn/pydeps) - Pythonモジュールの依存グラフ
* [aztarna](https://github.com/aliasrobotics/aztarna) - ロボット向けのフットプリントツール
* [draw.io](https://www.draw.io/) - フローチャート、プロセス図、組織図、UML、ER、ネットワーク図を作成できる無料オンライン図面ソフトウェア
* [vscode-drawio](https://github.com/hediet/vscode-drawio) - この拡張機能はDraw.ioをVS Codeに統合
* [Architecture_Decision_Record](https://github.com/joelparkerhenderson/architecture_decision_record) - 重要なアーキテクチャ決定とその文脈・影響を記録したドキュメント

## フレームワークとスタック <a id="frameworks-and-stacks"></a>
* [ROS](https://github.com/ros) - Robot Operating System。ロボットアプリケーションの開発を支援するライブラリとツールを提供
* [awesome-ros2](https://github.com/fkromer/awesome-ros2) - Robot Operating System 2.0（ROS 2）の資料とライブラリをまとめた厳選リスト
* [Autoware.Auto](https://gitlab.com/autowarefoundation/autoware.auto) - Autoware.Autoは自律走行に向けた最良のソフトウェアエンジニアリングを適用
* [Autoware.ai](https://github.com/Autoware-AI) - Autoware.AIは世界初の「すべてを統合した」自律走行技術向けオープンソースソフトウェア
* [OpenPilot](https://github.com/commaai/openpilot) - オープンソースのアダプティブクルーズコントロール（ACC）および車線維持支援システム（LKAS）
* [Apollo](https://github.com/ApolloAuto/apollo) - 高性能で柔軟なアーキテクチャにより、自動運転車の開発、テスト、展開を加速
* [PythonRobotics](https://github.com/AtsushiSakai/PythonRobotics/) - ロボティクスアルゴリズムのPythonコードコレクション、特に自律ナビゲーション用
* [Stanford Self Driving Car Code](https://github.com/emmjaykay/stanford_self_driving_car_code) - スタンフォード大学が開発したDARPAグランチャレンジに参加した自動車のソースコード
* [astrobee](https://github.com/nasa/astrobee) - Astrobeeは、国際宇宙ステーション（ISS）内のロードとして動作する自由飛行ロボット
* [CARMAPlatform](https://github.com/usdot-fhwa-stol/CARMAPlatform) - 自動運転プラグインを協働で有効にする
* [Automotive Grade Linux](https://www.automotivelinux.org/) - 自動車グレードLinuxは、自動車メーカー、サプライヤーおよび技術企業が協力して、接続車の完全にオープンなソフトウェアスタックの開発と採用を加速するオープンソースプロジェクトである
* [PX4](https://github.com/PX4/Firmware) - ドローンおよびその他の無人車両向けのオープンソース飛行制御ソフトウェア
* [KubOS](https://github.com/kubos/kubos) - 衛星向けのオープンソースソフトウェアスタック
* [mod_vehicle_dynamics_control](https://github.com/TUMFTM/mod_vehicle_dynamics_control) - TUM Roboraceチームソフトウェアスタック：経路追跡制御、速度制御、曲率制御および状態推定
* [Aslan](https://github.com/project-aslan/Aslan) - 低速環境向けのオープンソース自動運転ソフトウェ連
* [open-source-rover](https://github.com/nasa-jpl/open-source-rover) - JPLの火星ローバーをベースにした、自作型6輪ローバー
* [pybotics](https://github.com/engnadeau/pybotics) - ロボットの運動学および校正向けのオープンソース・ピタゴラスツールボックス
* [makani](https://github.com/google/makani) - 動作するMakani飛行シミュレーター、コントローラ（自動操縦）、視覚化ツールおよび飛行監視用コマンドセンターのツールを含む
* [mir_robot](https://github.com/dfki-ric/mir_robot) - ROSとMiRロボットを組み合わせるためのコミュニティプロジェクト
* [COMPAS](https://github.com/compas-dev/compas_fab) - COMPASフレームワーク向けのロボット製造パッケージ
* [JdeRobot Academy](https://github.com/JdeRobot/RoboticsAcademy) - JdeRobotアカデミーは、実践的なロボット学習を学ぶためのオープンソース練習問題のコレクションである
* [clover](https://github.com/CopterExpress/clover) - PX4を搭載したドローンをROSベースで制御するためのフレームワークおよびRPiイメージ
* [ArduPilot](https://github.com/ArduPilot/ardupilot) - 自律走行車（コプター／飛行機／ローバー／船／潜水艦）向けのオープンソース制御ソフトウェア
* [F Prime](https://github.com/nasa/fprime) - コンポーネント駆動型フレームワークで、宇宙飛行およびその他の埋め込みソフトウェアアプリケーションの迅速開発と展開を可能にする

## 開発環境 <a id="development-environment"></a>
### コーディングと実行 <a id="code-and-run"></a>
* [Vim-ros](https://github.com/taketwo/vim-ros) - ROS開発向けのVimプラグイン
* [Visual Studio Code](https://github.com/Microsoft/vscode) - コード編集・ビルド・デバッグサイクルをサポートするコードエディタ
* [atom](https://github.com/atom/atom) - 21世紀のハッキング可能なテキストエディタ
* [Teletype](https://github.com/atom/teletype) - Atomでチームメンバーとリアルタイムでワークスペースを共有し、コードを協働して編集
* [Sublime](https://www.sublimetext.com/) - コード、マークアップ、プロセス用の高度なテキストエディタ
* [ade-cli](https://gitlab.com/ApexAI/ade-cli) - ADE開発環境（ADE）は、ドッカーとGitlabを用いて、各プロジェクトの開発ツールおよびオプションのボリュームイメージの環境を管理します。
* [recipe-wizard](https://github.com/trn84/recipe-wizard) - OpenGL（GLX）アプリケーションをnvidia-docker2、CUDA、ROS、Gazeboでリモートヘッドレスサーバー上で実行するためのDockerfile生成ツール。
* [Jupyter ROS](https://github.com/RoboStack/jupyter-ros) - ROS（ロボット運営システム）向けのJupyterウィジェットヘルパー。
* [ros_rqt_plugin](https://github.com/ros-industrial/ros_qtc_plugin) - ROS向けのPython用Qt Creatorプラグイン。
* [xeus-cling](https://github.com/QuantStack/xeus-cling) - C++プログラミング言語向けのJupyterカーネル。
* [ROS IDEs](http://wiki.ros.org/IDEs) - このページは、統合開発環境（IDE）とROSを組み合わせる際の経験とアドバイスを集めて提供しています。
* [TabNine](https://github.com/zxqfl/TabNine) - すべての言語に対応した自動補完機能。
* [kite](https://kite.com/) - 機械学習を用いて、Python向けに有益なコード補完を提供します。
* [jedi](https://github.com/davidhalter/jedi) - Python向けの自動補完および静的解析ライブラリ。
* [roslibpy](https://github.com/gramaziokohler/roslibpy) - Python ROSブリッジライブラリは、PythonおよびIronPythonを使用してROS（オープンソースロボット中間ソフトウェア）と相互作用できるようにします。
* [pybind11](https://github.com/pybind/pybind11) - C++11とPythonの間のスムーズな操作性。
* [Sourcetrail](https://github.com/CoatiSoftware/Sourcetrail) - 無料でオープンソースのクロスプラットフォームソースエクスプローラ。
* [rebound](https://github.com/shobrook/rebound) - 例外が発生した際に即座にStack Overflowの結果を取得するコマンドラインツール。
* [mybinder](https://mybinder.org/) - 実行可能な環境でノートブックを開くことで、誰でもどこでもコードの再現性を確保します。
* [ROSOnWindows](https://ms-iot.github.io/ROSOnWindows/) - ROS1のWindows向けの実験的リリース。
* [live-share](https://github.com/MicrosoftDocs/live-share) - お気に入りのツールで、リアルタイムで協働開発を行うことができます。
* [cocalc](https://github.com/sagemathinc/cocalc) - クラウド上の協働計算。
* [EasyClangComplete](https://github.com/niosus/EasyClangComplete) - Sublime Text 3向けの強固なC/C++自動補完。
* [vscode-ros](https://github.com/ms-iot/vscode-ros) - ロボット運営システム（ROS）開発向けのVisual Studio Code拡張機能。
* [awesome-hpp](https://github.com/p-ranav/awesome-hpp) - 素晴らしいヘッダーのみのC++ライブラリのキュレーションリスト。
* [Gitpod](https://github.com/gitpod-io/gitpod) - オープンソース開発プラットフォームで、コード作成に必要な開発環境の自動設定が可能。

### テンプレート <a id="template"></a>
* [ROS](https://github.com/leggedrobotics/ros_best_practices/tree/master/ros_package_template) - C++でのROSノード標準化用テンプレート。
* [Launch](https://wiki.ros.org/roslaunch/Tutorials/Roslaunch%20tips%20for%20larger%20projects) - 大規模プロジェクト向けのlaunchファイル作成方法のテンプレート。
* [Bash](https://github.com/ralish/bash-script-template) - ベストプラクティスを組み込み、有用な関数を多数含むbashスクリプトテンプレート。
* [URDF](https://wiki.ros.org/urdf/Examples) - さまざまなロボットタイプ向けに統一されたロボット記述形式（URDF）を作成する例。
* [Python](http://wiki.ros.org/PyStyleGuide) - ROS用Pythonコードの書く際のスタイルガイド。
* [Docker](https://ade-cli.readthedocs.io/en/latest/create-custom-base-image.html) - minimal-adeプロジェクト内のDockerfileは、カスタムベースイメージを作成するための最小限の例を示す。
* [VS Code ROS2 Workspace Template](https://github.com/athackst/vscode_ros2_workspace) - ROS2開発用のVSCodeをIDEとして使うためのテンプレート。

### ビルドとデプロイ <a id="build-and-deploy"></a>
* [qemu-user-static](https://github.com/multiarch/qemu-user-static) - QEMUおよびbinfmt_miscにより、異なるマルチアーキテクチャコンテナの実行を可能にする。
* [Cross compile ROS 2 on QNX](https://gitlab.apex.ai/snippets/97) - QNX上でROS2をクロスコンパイルする方法を紹介。
* [bloom](https://github.com/ros-infrastructure/bloom) - catkinパッケージのリリースを簡単にする自動リリースツール。
* [superflore](https://github.com/ros-infrastructure/superflore) - ロボット操作システム（ROS）向けの拡張プラットフォームリリースマネージャー。
* [catkin_tools](https://github.com/catkin/catkin_tools) - catkinとの作業に使うコマンドラインツール。
* [industrial_ci](https://github.com/ros-industrial/industrial_ci) - ROSリポジトリ向けの簡単な継続的統合（CI）リポジトリ。
* [ros_gitlab_ci](https://gitlab.com/VictorLamoine/ros_gitlab_ci) - GitLabにホストされたROSプロジェクトで継続的統合（CI）を使うためのヘルパースクリプトと指示書。
* [gitlab-runner](https://gitlab.com/gitlab-org/gitlab-runner) - テストを実行し、結果をGitLabに送信。
* [colcon-core](https://github.com/colcon/colcon-core) - 複数のソフトウェアパッケージの構築、テスト、使用プロセスを改善するためのコマンドラインツール。
* [gitlab-release](https://gitlab.com/alelec/gitlab-release) - ファイル（ciから）を現在のプロジェクトのリリース（タグ）にアップロードするシンプルなpython3スクリプト。
* [clang](https://github.com/llvm-mirror/clang) - Cファミリーライブラリ（C、C++、Objective-C、Objective-C++）向けのコンパイラフロントエンド。これはLLVMコンパイラインフラストラクチャプロジェクトの一部として構築されている。
* [catkin_virtualenv](https://github.com/locusrobotics/catkin_virtualenv) - catkinパッケージにpythonの依存関係をvirtualenvでバンドル。
* [pyenv](https://github.com/pyenv/pyenv) - シンプルなPythonによるバージョン管理
* [aptly](https://github.com/aptly-dev/aptly) - Debianリポジトリ管理ツール
* [cross_compile](https://github.com/ros-tooling/cross_compile) - ROS2のクロスコンパイルに使用されるアセット
* [docker_images](https://github.com/osrf/docker_images) - OSRFがROS(2)およびGazebo向けに維持する公式Dockerイメージ
* [robot_upstart](https://github.com/clearpathrobotics/robot_upstart) - Ubuntu Linux PC上でバックグラウンドROSプロセスを起動するためのスクリプトセットを提供
* [robot_systemd](http://docs.ros.org/kinetic/api/robot_systemd/html/#) - roscoreおよびroslaunchの起動と終了を管理するためのユニット
* [ryo-iso](https://ryo-iso.readthedocs.io/en/latest/) - YAML設定ファイルから完全なロボットオペレーティングシステムをデプロイするための現代的なISOビルダー
* [network_autoconfig](http://docs.ros.org/kinetic/api/network_autoconfig/html/) - ほとんどの使用ケースに対してROSネットワークの自動設定を提供し、手動設定が必要な使用に影響を与えない
* [rosbuild](https://roscon.ros.org/2016/presentations/ROSCon2016%20Build%20Farm.pdf) - ROSビルドファーム
* [cros](https://github.com/ros-industrial/cros) - ROSフレームワークの単一スレッド純C実装


### 単体・統合テスト <a id="unit-and-integration-test"></a>
* [setup-ros](https://github.com/ros-tooling/setup-ros) - このアクションはGitHub ActionsでROSおよびROS2環境を構築する
* [UnitTesting](https://wiki.ros.org/Quality/Tutorials/UnitTesting) - このページではROSにおけるユニットテストおよび統合テストの書き方と実行に関する根拠、ベストプラクティス、ポリシーを示す
* [googletest](https://github.com/google/googletest) - GoogleのC++テストフレームワーク
* [pytest](https://github.com/pytest-dev/pytest/) - pytestフレームワークは小さなテストを簡単に書ける一方で、複雑な機能テストにも対応できる
* [doctest](https://github.com/onqtam/doctest) - C++11/14/16/20をサポートし、機能が豊富な高速なシングルヘッダーテストフレームワーク（ユニットテストおよびTDD用）
* [osrf_testing_tools_cpp](https://github.com/osrf/osrf_testing_tools_cpp) - C++向けのテストツールを含み、OSRFプロジェクトで使用されている
* [code_coverage](https://github.com/mikeferguson/code_coverage) - ROSパッケージによるカバレッジテストの実行
* [action-ros-ci](https://github.com/ros-tooling/action-ros-ci) - colconを使用したROS2パッケージのビルドとテストを行うGitHubアクション

### lintと整形 <a id="lint-and-format"></a>
* [action-ros-lint](https://github.com/ros-tooling/action-ros-lint) - ROS2パッケージに対してリーダーを実行するGitHubアクション
* [cppcheck](https://github.com/danmar/cppcheck) - C/C++コードの静的解析
* [hadolint](https://github.com/hadolint/hadolint) - Dockerfile リンター、インライン Bash の検証、Haskell で書かれた。
* [shellcheck](https://github.com/koalaman/shellcheck) - シェルスクリプト用の静的解析ツール。
* [catkin_lint](https://github.com/fkie/catkin_lint) - ROS の catkin ビルドシステムのパッケージ設定を検証。
* [pylint](https://github.com/PyCQA/pylint/) - Pylint は Python の静的コード解析ツールで、プログラムエラーを検出し、コーディング標準を強化し、コードの匂いをスニフし、簡単なリファクタリングの提案を行う。
* [black](https://github.com/psf/black) - 不動の Python コードフォーマッター。
* [pydocstyle](https://github.com/PyCQA/pydocstyle) - Python ドキュメント文字列規約に従ったコンプライアンスを検証するための静的解析ツール。
* [haros](https://github.com/git-afsantos/haros) - ROS アプリケーションコードの静的解析。
* [pydantic](https://github.com/samuelcolvin/pydantic) - Python の型ヒントを使用したデータパーソーリングとバリデーション。


### デバッグとトレース <a id="debugging-and-tracing"></a>
* [heaptrack](https://github.com/KDE/heaptrack) - すべてのメモリ割り当てをトレースし、それらのイベントにスタックトレースを付加。
* [ros2_tracing](https://gitlab.com/ros-tracing/ros2_tracing) - ROS 2 用のトレースツール。
* [Linuxperf](http://www.brendangregg.com/linuxperf.html) - さまざまな Linux パフォーマンス資料。
* [lptrace](https://github.com/khamidou/lptrace) - Python プログラムが実際に実行している関数をリアルタイムで確認できる。
* [pyre-check](https://github.com/facebook/pyre-check) - Python 用のパフォーマンスの型チェック。
* [FlameGraph](https://github.com/brendangregg/FlameGraph) - プロファイルされたコードを可視化。
* [gpuvis](https://github.com/mikesart/gpuvis) - GPU Trace Visualizer。
* [sanitizer](https://github.com/google/sanitizers) - AddressSanitizer、ThreadSanitizer、MemorySanitizer。
* [cppinsights](https://github.com/andreasfertig/cppinsights) - C++ Insights - コンパイラの視点でソースコードを確認できる。
* [inspect](https://pymotw.com/2/inspect/) - inspect モジュールは、モジュール、クラス、インスタンス、関数、メソッドなどのライブオブジェクトについて学習するための関数を提供。
* [Roslaunch Nodes in Valgrind or GDB](https://wiki.ros.org/roslaunch/Tutorials/Roslaunch%20Nodes%20in%20Valgrind%20or%20GDB) - roslaunch で起動する roscpp ノードをデバッグする際、gdb または valgrind といったデバッグプログラムで起動するようにしたい場合がある。
* [pyperformance](https://github.com/python/pyperformance) - Python パフォーマンスベンチマークセット。
* [qira](https://github.com/geohot/qira) - straceやgdbに代わる解析ツール
* [gdb-frontend](https://github.com/rohanrhu/gdb-frontend) - GDBFrontendは使いやすく、柔軟で拡張可能なGUIデバッガである
* [lttng](https://lttng.org/docs/) - Linuxカーネル、ユーザアプリケーション、ユーザライブラリを同時にトレースできるオープンソースソフトウェアツールキット
* [ros2-performance](https://github.com/irobot-ros/ros2-performance) - ROS2システムを簡単に構築し、そのパフォーマンスを測定できるツール
* [bcc](https://github.com/iovisor/bcc) - BPFベースのLinuxIO分析、ネットワーク、モニタリングなどに関するツール
* [tracy](https://github.com/wolfpld/tracy) - ゲームやその他のアプリケーション向けのリアルタイム、ナノ秒分解能のリモートテレメトリフレームプロファイラー
* [bpftrace](https://github.com/iovisor/bpftrace) - Linux eBPF向けの高レベルトレース言語
* [pudb](https://github.com/inducer/pudb) - Python用のフルスクリーンコンソールデバッガ
* [backward-cpp](https://github.com/bombela/backward-cpp) - C++用の美しいスタックトレースプリントアウトツール
* [gdb-dashboard](https://github.com/cyrus-and/gdb-dashboard) - GDBダッシュボードは、Python APIを使用して書かれたスタンドアローン.gdbinitファイルであり、デバッグ中のプログラムに関する関連情報をモジュラーに表示するインターフェースを提供する
* [hotspot](https://github.com/KDAB/hotspot) - Linux perfのGUIによるパフォーマンス分析ツール
* [memory_profiler](https://github.com/pythonprofilers/memory_profiler) - プロセスのメモリ消費をモニタリングし、Pythonプログラムの各行についてメモリ消費を分析するPythonモジュール
* [ros1_fuzzer](https://github.com/aliasrobotics/ros1_fuzzer) - このフュージャーは、ROSノードにおけるバグや脆弱性を発見するために、ターゲットノードが処理するトピックに対してフュージテストを実行することを目的としている
* [vscode-debug-visualizer](https://github.com/hediet/vscode-debug-visualizer) - VS Codeへの拡張で、デバッグ中にデータを可視化する
* [action-tmate](https://github.com/mxschmitt/action-tmate) - tmateを使用してGitHub ActionsをSSHでデバッグし、ランナーのシステムにアクセスできる
* [libstatistics_collector](https://github.com/ros-tooling/libstatistics_collector) - ROS 2が提供する、測定データを収集し、それらの統計を計算するためのクラスを含むライブラリ
* [system_metrics_collector](https://github.com/ros-tooling/system_metrics_collector) - ROS2システム向けの軽量かつリアルタイムなシステムメトリクスコレクタ


### バージョン管理 <a id="version-control"></a>
* [git-fuzzy](https://github.com/bigH/git-fuzzy) - gitに対するCLIインターフェースで、fzfに大きく依存している
* [meld](https://github.com/GNOME/meld) - Meldはファイル、ディレクトリ、バージョン管理されたプロジェクトを比較するための可視化された差分およびマージツール
* [tig](https://github.com/jonas/tig) - gitのテキストモードインターフ及
* [gitg](https://github.com/GNOME/gitg) - Git用のグラフィカルユーザーインターフェース
* [git-cola](https://github.com/git-cola/git-cola) - 非常にカフェインを多く摂取したGit GUI
* [python-gitlab](https://github.com/python-gitlab/python-gitlab) - GitLabサーバーAPIにアクセスできるPythonパッケージ
* [bfg-repo-cleaner](https://github.com/rtyley/bfg-repo-cleaner) - git-filter-branchが行う大規模または問題のあるblobの削除を高速で実行
* [nbdime](https://github.com/jupyter/nbdime) - Jupyterノートブックの差分とマージに用いるツール
* [semantic-release](https://github.com/semantic-release/semantic-release) - 完全自動化されたバージョン管理とパッケージ配布
* [go-semrel-gitab](https://gitlab.com/juhani/go-semrel-gitlab) - GitLabのバージョン管理を自動化
* [Git-repo](https://gerrit.googlesource.com/git-repo/) - Git-Repoは複数のGitリポジトリを管理し、リビジョン制御システムへのアップロードを行い、開発ワークフローの一部を自動化
* [dive](https://github.com/wagoodman/dive) - Dockerイメージ内の各レイヤーを探索するツール
* [dvc](https://github.com/iterative/dvc) - データセットおよび機械学習モデルの管理とバージョン管理
* [learnGitBranching](https://github.com/pcottle/learnGitBranching) - Gitリポジトリの可視化、サンドボックス、および教育チュートリアルとチャレンジのシリーズ
* [gitfs](https://github.com/Presslabs/gitfs) - リモートリポジトリのブランチをローカルにマウントでき、ファイルにした変更は自動的にリモートにコミットされる
* [git-secret](https://github.com/sobolevn/git-secret) - 許可されたユーザーの公開鍵でファイルを暗号化し、信頼できるユーザーがPGPとその秘密鍵を使って暗号データにアクセスできる
* [git-sweep](https://github.com/arc90/git-sweep) - Gitブランチのマージ済みものをクリーンアップするためのコマンドラインツール
* [lazygit](https://github.com/jesseduffield/lazygit) - Go言語のgocuiライブラリを使用したシンプルなターミナルUI、gitコマンドのためのもの
* [glab](https://github.com/profclems/glab) - オープンソースGitLabコマンドラインツール


## シミュレーション <a id="simulation"></a>
* [AI2-THOR](https://github.com/allenai/ai2thor) - Unityバックエンドを備えたPythonフレームワーク。家庭用ロボットエージェントとのインタラクション、ナビゲーション、操作をサポート。200以上のカスタムシーン、1500以上のカスタム注釈されたオブジェクト、200以上のアクションを含む。
* [Drake](https://github.com/RobotLocomotion/drake) - Drakeは、ロボットの非常に複雑な動的挙動をシミュレーションすることを目的としている。
* [Webots](https://github.com/cyberbotics/webots) - シミュレーションに関するロボット開発ツール、ライブラリ、規格、または資料です。 関連参照: <http://wiki.ros.org/webots_ros>、<http://wiki.ros.org/webots_ros2>。
* [lgsv](https://github.com/lgsvl/simulator) - LG Electronics America R&Dセンターが開発した、HDRPベースのUnityによるマルチロボットシミュレータ。自動車開発者向け。
* [carla](https://github.com/carla-simulator/carla) - 自動運転研究用オープンソースシミュレータ
* [awesome-CARLA](https://github.com/Amin-Tgz/awesome-CARLA) - 素晴らしいCARLAチュートリアル、ブログ、および関連プロジェクトを厳選したリスト
* [ros-bridge](https://github.com/carla-simulator/ros-bridge) - CARLAシミュレータ用のROSブリッジ
* [scenario_runner](https://github.com/carla-simulator/scenario_runner) - 交通状況の定義と実行エンジン
* [deepdive](https://github.com/deepdrive/deepdrive) - 自動運転車用の端到端シミュレーション
* [uuv_simulator](https://github.com/uuvsimulator/uuv_simulator) - 水下ロボティクスシミュレーション用のGazebo/ROSパッケージ
* [AirSim](https://github.com/microsoft/AirSim) - Unreal Engineをベースにした自律車用オープンソースシミュレータ
* [self-driving-car-sim](https://github.com/udacity/self-driving-car-sim) - Unityで構築された自動運転車シミュレータ
* [ROSIntegration](https://github.com/code-iai/ROSIntegration) - Unreal EngineプラグインによるROSサポートの有効化
* [gym-gazebo](https://github.com/erlerobot/gym-gazebo) - Gazeboを用いたOpenAI Gym拡張（gym-gazebo）
* [gym-pybullet-drones](https://github.com/utiasDSL/gym-pybullet-drones) - 四足飛行機の制御に関するシングルおよびマルチエージェント強化学習用のPyBulletベースのGym環境
* [safe-control-gym](https://github.com/utiasDSL/safe-control-gym) - 安全かつ頑健な学習ベース制御を実現するための、PyBulletベースのCartPoleおよび四軸飛行機環境（CasADiによる符号動的および制約）
* [highway-env](https://github.com/eleurent/highway-env) - 自律走行および戦術的決定意思決定タスク用の環境のコレクション
* [VREP Interface](http://www.coppeliarobotics.com/helpFiles/en/rosInterf.htm) - VREPシミュレータ用のROSブリッジ
* [car_demo](https://github.com/osrf/car_demo) - Gazebo 9で実行されたプリウスのシミュレーションで、センサーデータがROS kineticで公開されている
* [sumo](https://github.com/eclipse/sumo) - Eclipse SUMOは、大規模道路ネットワークを扱える、オープンソース・高度に移植可能・微細かつ連続的な道路交通シミュレーションパッケージです
* [open-simulation-interface](https://github.com/OpenSimulationInterface/open-simulation-interface) - 自動運転機能の仮想シナリオにおける環境認識のための一般インターフェース
* [ESIM](https://github.com/uzh-rpg/rpg_esim/) - オープンイベントカメラシミュレータ
* [Menge](https://github.com/MengeCrowdSim/Menge) - 人間の集団シミュレーションフレームワーク
* [pedsim_ros](https://github.com/srl-freiburg/pedsim_ros) - Gazeboでソーシャルフォースモデルを用いた歩行者シミュレータ
* [opencrg](http://www.opencrg.org/download.html) - 道路表面の詳細な記述、作成および評価を可能にするオープンファイル形式とオープンソースツール
* [esmini](https://github.com/esmini/esmini) - 基本的な OpenSCENARIO プレイヤー
* [OpenSceneGraph](https://github.com/openscenegraph/OpenSceneGraph) - オープンソースの高性能3Dグラフィックスツールキット。視覚シミュレーション、ゲーム、仮想現実、科学的可視化およびモデリングなどの分野のアプリケーション開発者に利用されている
* [morse](https://github.com/morse-simulator) - ブレンドゲームエンジンとバトル物理エンジンをベースとした学術的なロボットシミュレータ
* [ROSIntegrationVision](https://github.com/code-iai/ROSIntegrationVision) - Unreal EngineプロジェクトにおけるROS対応RGBDデータ取得のサポート
* [fetch_gazebo](https://github.com/fetchrobotics/fetch_gazebo) - Gazeboシミュレーションで、Fetch RoboticsのFetchおよびFreight Research Editionロボットを含む
* [rotors_simulator](https://github.com/ethz-asl/rotors_simulator) - マルチローターのモデルを提供
* [flow](https://github.com/flow-project/flow) - 交通微シミュレーションにおける深層強化学習および制御実験を行うための計算フレームワーク
* [gnss-ins-sim](https://github.com/Aceinna/gnss-ins-sim) - GNSS＋慣性ナビゲーション、センサ融合シミュレータ。運動トラジェクトリー生成器、センサモデル、ナビゲーションを提供
* [Ignition Robotics](https://ignitionrobotics.org) - 安全性を考慮した制御戦略のテストを行い、継続統合テストにおいてシミュレーションを活用
* [simulation assets for the SubT](https://subtchallenge.world/openrobotics/fuel/collections/SubT%20Tech%20Repo) - このコレクションには、GazeboにおけるSubTチャレンジ仮想コンペティションのシミュレーション資産が含まれている
* [gazebo_ros_motors](https://github.com/nilseuropa/gazebo_ros_motors) - 現在、Gazeboに2つのモータープラグインが含まれており、1つは理想速度制御器を備えたもので、もう1つは制御器を持たず直流モーターをモデル化したもの
* [map2gazebo](https://github.com/shilohc/map2gazebo) - 2DマップからGazebo環境を作成するためのROSパッケージ
* [sim_vehicle_dynamics](https://github.com/TUMFTM/sim_vehicle_dynamics) - TUMロボラacingチームの車両動力学シミュレーションソフトウェア
* [gym-carla](https://github.com/cjy1992/gym-carla) - CARLAシミュレータ向けのOpenAI Gymのラッパー
* [simbody](https://github.com/simbody/simbody) - 高性能C++マルチボディ動力学/物理ライブラリ。車両、ロボット、人間の骨格のような関節を持つ生物力学および機械システムのシミュレーションに使用
* [gazebo_models](https://github.com/osrf/gazebo_models) - このリポジトリにはGazeboモデルデータベースが含まれている
* [pylot](https://github.com/erdos-project/pylot) - CARLAシミュレータ上で動作する自律走行プラットフォーム
* [flightmare](https://github.com/uzh-rpg/flightmare) - Flightmareは2つの主要なコンポーネントから構成されている。Unityに基づいた設定可能なレンダリングエンジンと、動力学シミュレーションに用いる柔軟な物理エンジン
* [champ](https://github.com/chvmp/champ) - CHAMP四足ロボットコントローラー向けのROSパッケージ
* [rex-gym](https://github.com/nicrusso7/rex-gym) - オープンソース四足ロボット（SpotMicro）向けのOpenAI Gym環境
* [Trick](https://github.com/nasa/Trick) - ナサ・ジョーンズ・スペース・センターで開発された、空間機器開発のすべてのフェーズに向けたアプリケーション開発を可能にする強力なシミュレーション開発フレームワーク
* [usv_sim_lsa](https://github.com/disaster-robotics-proalertas/usv_sim_lsa) - ゲイズボの無人水面車シミュレーション（水の流れと風を含む）
* [42](https://github.com/ericstoneking/42) - 宇宙船の姿勢制御システムの解析および設計用シミュレーション
* [Complete_Street_Rule](https://github.com/d-wasserman/Complete_Street_Rule) - ArcGIS CityEngineにおけるプロシージャル生成マルチモーダル道路の迅速作成を可能にするシナリオ指向設計ツール
* [AutoCore simulation](https://github.com/autowarefoundation/) - Autowareのテスト環境を提供しており、初期開発段階においても利用可能であり、以下の内容は更新により変更される可能性があります
* [fields-ignition](https://github.com/azazdeaz/fields-ignition) - Ignition Gazeboにランダムな農地を生成
* [Unity-Robotics-Hub](https://github.com/Unity-Technologies/Unity-Robotics-Hub) - Unityにおけるロボットシミュレーションのツール、チュートリアル、リソース、ドキュメンテーションの中央リポジトリ
* [BlueSky](https://github.com/TUDelft-CNS-ATM/bluesky) - BlueSkyの目的は、空港交通の可視化、解析、シミュレーションを行うすべての人々に、制限、ライセンス、制限なしで実行できるツールを提供することです
* [Cloe](https://github.com/eclipse/cloe) - 自動運転ソフトウェアコンポーネント開発者に、閉ループシミュレーションへの統一インターフェースを提供することで、開発を支援
* [Dynamic_logistics_Warehouse](https://github.com/belal-ibrahim/dynamic_logistics_warehouse) - 倉庫内の動的環境をGazeboでシミュレーション
* [OpenCDA](https://github.com/ucla-mobility/OpenCDA) - CARLA+SUMOを用いたフルスタック協調運転アプリケーションのプロトタイピングに用いる一般化フレームワーク


## 電子・機械 <a id="electronics-and-mechanics"></a>
* [HRIM](https://github.com/AcutronicRobotics/HRIM) - ロボットハードウェアの情報モデル
* [URDF](https://github.com/ros/urdf) - 統一ロボット記述形式（URDF）パーサーのコードを収録したリポジトリ
* [phobos](https://github.com/dfki-ric/phobos) - Blenderに追加されたツールで、WYSIWYG環境でURDF、SDF、SMURFロボットモデルを作成可能
* [urdf-viz](https://github.com/OTL/urdf-viz) - URDF/XACROファイルを可視化、URDF ViewerはWindows/macOS/Linuxで動作
* [solidworks_urdf_exporter](https://github.com/ros/solidworks_urdf_exporter) - SolidWorksからURDFへのエクスポートツール
* [FreeCAD](https://github.com/FreeCAD/FreeCAD) - ユーザー自身の3Dパラメトリックモデル作成ツール
* [kicad](http://www.kicad.org/) - クロスプラットフォームかつオープンソースの電子設計自動化ツールセット
* [PcbDraw](https://github.com/yaqwsx/PcbDraw) - KiCADの基板を、ピンアウト図に適した美しい2D図面に変換
* [kicad-3rd-party-tools](https://github.com/xesscorp/kicad-3rd-party-tools) - 他者の開発したツールで、KiCad PCB EDAツールセットを補強
* [PandaPower](http://www.pandapower.org) - 電力システムのモデリング、解析、最適化に用いられる、使いやすく、高度な自動化を備えたオープンソースツール
* [LibrePCB](https://github.com/LibrePCB/LibrePCB) - 誰でも使える、強力で革新的かつ直感的なエレクトロニクス設計自動化（EDA）ツール
* [openscad](https://github.com/openscad/openscad) - 固体3DCADモデルを作成するソフトウェア
* [ngspice](http://ngspice.sourceforge.net/) - 電気および電子回路用のオープンソースSPICEシミュレータ
* [GNSS-SDR](https://github.com/gnss-sdr/gnss-sdr) - 幅広い無線周波数フロントエンドと生サンプルファイル形式に対応し、処理結果を標準形式で生成
* [riscv](https://riscv.org) - 自由でオープンなRISC命令セットアーキテクチャ
* [urdfpy](https://github.com/mmatl/urdfpy) - URDFファイルの読み込み、操作、保存、可視化を行うためのシンプルで使いやすいライブラリ
* [FMPy](https://github.com/CATIA-Systems/FMPy) - Pythonで機能モックアップ単位（FMU）をシミュレート
* [FMIKit-Simulink](https://github.com/CATIA-Systems/FMIKit-Simulink) - Simulinkで機能モックアップ単位（FMU）をインポートおよびエクスポート
* [oemof-solph](https://github.com/oemof/oemof-solph) - エネルギー供給システムをモデル化するためのモジュラーなオープンソースフレームワーク
* [NASA-3D-Resources](https://github.com/nasa/NASA-3D-Resources) - ここではNASA内部から収集された3Dモデル、テクスチャ、画像の増加するコレクションが見つかります
* [SUAVE](https://github.com/suavecode/SUAVE) - 航空機設計ツールボックス
* [opem](https://github.com/ECSIM/opem) - プロトン交換膜燃料電池の性能評価に用いるモデリングツールであるオープンソースPEMFCシミュレーションツール（OPEM）
* [pvlib-python](https://github.com/pvlib/pvlib-python) - 太陽光発電システムの性能シミュレーションに用いるための関数とクラスを提供するコミュニティサポートツール
* [WireViz](https://github.com/formatc1702/WireViz) - ケーブル、ワイヤーハーネス、コネクタピンアウトを簡単にドキュメント化するツール
* [Horizon](https://github.com/horizon-eda/horizon) - 電子設計自動化（EDA）パッケージで、印刷回路板設計における部品管理および回路図入力を含む統合された端到端ワークフローをサポート
* [tigl](https://github.com/DLR-SC/tigl) - TiGL幾何学ライブラリは、CPACSファイルに保存された航空機幾何学を計算および処理するために使用できる
* [foxBMS](https://github.com/foxBMS/foxbms) - バッテリー管理システムを設計するための無料、オープン、柔軟な開発環境
* [cadCAD](https://github.com/cadCAD-org/cadCAD) - 複雑なシステムの設計、テスト、検証プロセスにシミュレーションを支援するPythonパッケージ。モンテカルロ法、A/Bテスト、パラメータスキャンをサポート
* [OpenMDAO](https://github.com/OpenMDAO/OpenMDAO) - 多分野最適化に特化したオープンソースフレームワーク
* [ODrive](https://github.com/madcowswe/ODrive) - 高性能ロボティクスプロジェクトで、安価なブラシレスモーターを使用できるようにすることを目的としている
* [OpenTirePython](https://github.com/OpenTire/OpenTirePython) - オープンソースの数学的タイヤモデルライブラリ
* [Inkscape Ray Optics](https://github.com/damienBloch/inkscape-raytracing) - インクスケープへの拡張で、光学図を描くことをより容易にできる
* [OpenAeroStruct](https://github.com/mdolab/OpenAeroStruct) - OpenMDAOを用いて航空構造最適化を行う軽量ツール

## センサー処理 <a id="sensor-processing"></a>
### 較正と座標変換 <a id="calibration-and-transformation"></a>
* [tf2](http://wiki.ros.org/tf2) - 複数の座標系を時間軸に沿って追跡できるトランスフォームライブラリ
* [TriP](https://github.com/TriPed-Robot/TriP) - シリアルロボット、並列ロボット、および両者のハイブリッドに適用可能な逆運動学ライブラリ
* [lidar_align](https://github.com/ethz-asl/lidar_align) - 3D LiDARと6自由度ポーズセンサー間の外的校正を求めるシンプルな手法
* [kalibr](https://github.com/ethz-asl/kalibr) - Kalibrによる視覚インERTIAL校正ツールボックス
* [Calibnet](https://github.com/epiception/CalibNet) - 3D空間変換ネットワークを用いた自己監督外的校正
* [lidar_camera_calibration](https://github.com/ankitdhall/lidar_camera_calibration) - LiDARとカメラ間の剛体変換を求めるROSパッケージ
* [ILCC](https://github.com/mfxox/ILCC) - 反射強度を活用した3D LiD及の自動かつ正確な外的校正
* [easy_handeye](https://github.com/IFL-CAMP/easy_handeye) - 手眼校正を行うシンプルで明確なROSライブラリ
* [imu_utils](https://github.com/gaowenliang/imu_utils) - IMU性能を分析するROSパッケージツール
* [kalibr_allan](https://github.com/rpng/kalibr_allan) - Kalibrおよびインертial kalmanフィルタと使用可能なIMUアラン標準偏差チャート
* [pyquaternion](https://github.com/KieranWynn/pyquaternion) - クォータニオンの表現と使用を行うためのフル機能Pythonモジュール
* [robot_calibration](https://github.com/mikeferguson/robot_calibration/) - このパッケージは、3Dカメラの内参数、外参数、関節角オフセット、ロボットフレームオフセットなど、ロボットの多くのパラメータの校正を提供
* [multi_sensor_calibration](https://github.com/tudelft-iv/multi_sensor_calibration/) - LiDAR、レーダー、カメラを含むセンサセットの校正を行うための校正ツールを含む
* [LiDARTag](https://github.com/UMich-BipedLab/LiDARTag) - ポイントクラウドLiDARデータを用いたリアルタイムフィジカルタグ
* [multicam_calibration](https://github.com/KumarRobotics/multicam_calibration) - カメラの外的および内的校正
* [ikpy](https://github.com/Phylliade/ikpy) - パフォーマンスとモジュラリティを目的とした逆運動学ライブラリ
* [livox_camera_lidar_calibration](https://github.com/Livox-SDK/livox_camera_lidar_calibration) - Livox LiDARとカメラ間の外的パラメータを校正する
* [lidar_camera_calibration](https://github.com/heethesh/lidar_camera_calibration) - ROS、OpenCV、PCLを使用したカメラLiDAR校正
* [e2calib](https://github.com/uzh-rpg/e2calib) - イベントデータから動画再構成を行う校正用コードを含む


### 認識パイプライン <a id="perception-pipeline"></a>
* [SARosPerceptionKitti](https://github.com/appinho/SARosPerceptionKitti) - KITTIビジョンベンチマークセットにおけるPerception（センサプロセス、検出、追跡、評価）用ROSパッケージ
* [multiple-object-tracking-lidar](https://github.com/praveen-palanisamy/multiple-object-tracking-lidar) - LIDARスキャンまたはポイントクラウドを使用した複数物体の検出、追跡、分類を行うC++実装
* [cadrl_ros](https://github.com/mfe7/cadrl_ros) - 深層強化学習で訓練された地面ロボット用の動的障害回避ROSパッケージ
* [AugmentedAutoencoder](https://github.com/DLR-RM/AugmentedAutoencoder) - オブジェクト検出および6Dポーズ推定を行うRGBベースパイプライン
* [jsk_recognition](https://github.com/jsk-ros-pkg/jsk_recognition) - JSKラボで使用されるPerceptionパッケージのスタック
* [GibsonEnv](https://github.com/StanfordVL/GibsonEnv) - Gibson環境：体験型エージェントのリアルワールド認識
* [morefusion](https://github.com/wkentaro/morefusion) - ボリュミックフュージョンから6Dポーズ推定を行う多対象推論
* [se(3)-TrackNet](https://github.com/wenbowen123/iros20-6d-pose-tracking) - CADモデルが可用な動的物体の6Dポーズ追跡を行うパッケージ

### 機械学習 <a id="machine-learning"></a>
* [DLIB](https://github.com/davisking/dlib) - C++で実世界の機械学習およびデータ分析アプリケーションを開発するためのツールキット
* [fastai](https://github.com/fastai/fastai) - fastaiライブラリは、現代のベストプラクティスを用いて高速かつ正確なニューラルネットの訓練を簡略化する
* [tpot](https://github.com/EpistasisLab/tpot) - Pythonによる自動機械学習ツールで、遺伝的プログラミングを用いて機械学習パイプラインを最適化
* [deap](https://github.com/DEAP/deap) - Pythonによる分散型進化アルゴリズム
* [gym](https://github.com/openai/gym) - 強化学習アルゴリズムの開発および比較を行うためのツールキット
* [tensorflow_ros_cpp](https://github.com/tradr-project/tensorflow_ros_cpp) - TensorFlowの推論をC++で行うROSパッケージ（TensorFlow自体をコンパイルする必要なし）
* [Tensorflow Federated](https://github.com/tensorflow/federated) - TensorFlow Federated（TFF）は、分散データ上の機械学習およびその他の計算に用いるオープンソースフレームワーク
* [finn](https://github.com/Xilinx/finn) - FPGA上で高速かつスケーラブルな量子化ニューラルネットワークの推論
* [neuropod](https://github.com/uber/neuropod) - Neuropodは、複数フレームワークの深層学習モデルをC++およびPythonで一貫したインターフェースで実行するライブラリ
* [leela-zero](https://github.com/leela-zero/leela-zero) - これは、アリパゴ・ゼロ論文『人間の知識なしにゴーゲームをマスター』に記述されたシステムをかなり忠実に再実装したものです。
* [Trax](https://github.com/google/trax) - シーケンスモデルと強化学習に特化した深層学習用ライブラリ。
* [mlflow](https://github.com/mlflow/mlflow) - 実験の追跡、コードの再現可能な実行へのパッケージ化、モデルの共有およびデプロイを簡便に実現する機械学習開発プラットフォーム。
* [Netron](https://github.com/lutzroeder/Netron) - ニューラルネットワーク、深層学習、機械学習モデルの可視化ツール。
* [MNN](https://github.com/alibaba/MNN) - アリババでビジネスに必須な用途で検証された、高速かつ軽量の深層学習フレームワーク。
* [Tensorforce](https://github.com/tensorforce/tensorforce) - オープンソースの強化学習フレームワークで、モジュール化された柔軟なライブラリ設計と、研究および実用における使いやすさを重視。
* [Dopamine](https://github.com/google/dopamine) - 強化学習アルゴリズムの高速プロトタイピングに特化した研究フレームワーク。
* [catalyst](https://github.com/catalyst-team/catalyst) - 再現性、高速実験、コードおよびアイデアの再利用を重視して開発されたものです。
* [ray](https://github.com/ray-project/ray) - 分散アプリケーションの構築と実行に適した高速かつシンプルなフレームワーク。
* [tf-agents](https://github.com/tensorflow/agents) - コンテキスト・バンドットと強化学習に特化した、信頼性があり、スケーラブルで使いやすいTensorFlowライブラリ。
* [ReAgent](https://github.com/facebookresearch/ReAgent) - フェイスブックで開発・使用されている、応用強化学習（RL）用のオープンソース端到端プラットフォーム。
* [Awesome-Mobile-Machine-Learning](https://github.com/fritzlabs/Awesome-Mobile-Machine-Learning) - iOS、Android、エッジデバイス向けの素晴らしいモバイル機械学習リソースを厳選したリスト。
* [cnn-explainer](https://github.com/poloclub/cnn-explainer) - インタラクティブ可視化を用いた畳み込みニューラルネットワークの学習。
* [modelzoo](https://github.com/autowarefoundation/modelzoo) - 自律走行アプリケーションに使用可能な機械学習モデルのコレクション。
* [nnstreamer-ros](https://github.com/nnstreamer/nnstreamer-ros) - Gstreamer開発者にニューラルネットワークモデルを簡単に導入し、ニューラルネットワーク開発者にニューラルネットワークパイプラインおよびフィルタを簡単に管理できるGstreamerプラグインとROSの例。


### 並列処理 <a id="parallel-processing"></a>
* [dask](https://github.com/dask/dask) - Pythonでの並列計算とタスクスケジューリング。
* [cupy](https://github.com/cupy/cupy) - NumPyに類似したAPIをCUDAで加速したものです。
* [Thrust](https://github.com/thrust/thrust) - C++の並列プログラミングライブラリで、C++標準ライブラリに類似しています。
* [ArrayFire](https://github.com/arrayfire/arrayfire) - 一般用途のGPUライブラリ。
* [OpenMP](https://www.openmp.org/) - C、C++、Fortranでマルチプラットフォーム共有メモリマルチプロセスプログラミングをサポートするアプリケーションプログラミングインターフェース。
* [VexCL](https://github.com/ddemidov/vexcl) - VexCLはOpenCL/CUDA/OpenMP向けのC++ベクトル表現テンプレートライブラリです
* [PYNQ](https://github.com/Xilinx/PYNQ) - Xilinxから提供されるオープンソースプロジェクトで、Zynq全機能プロセッサシステムオンチップを用いた埋め込みシステムの設計を容易にします
* [numba](https://github.com/numba/numba) - LLVMを用いたNumPy対応の動的Pythonコンパイラ
* [TensorRT](https://github.com/NVIDIA/TensorRT) - NVIDIA GPUおよびディープラーニングアクセラレータ向けの高性能推論を実現するC++ライブラリ
* [libcudacxx](https://github.com/NVIDIA/libcudacxx) - CPUコードとGPUコードの双方で利用できるC++標準ライブラリのヘテロジニアス実装


### 画像処理 <a id="image-processing"></a>
* [CV-pretrained-model](https://github.com/balavenkatesh3322/CV-pretrained-model) - コンピュータビジョン用の事前学習モデルのコレクション
* [image_pipeline](https://github.com/ros-perception/image_pipeline) - カメラドライバーから取得した原始画像と高度なビジョン処理の間のギャップを埋めます
* [gstreamer](https://gstreamer.freedesktop.org/) - 多様なメディア処理システムを接続するパイプラインベースのマルチメディアフレームワークで、複雑なワークフローを完成させます
* [ros2_openvino_toolkit](https://github.com/intel/ros2_openvino_toolkit) - ROSに対応したニューラルネットワークの実行環境フレームワークを提供し、ビジョン推論アプリケーションやソリューションの迅速な展開を実現します
* [vision_visp](https://github.com/lagadic/vision_visp) - ViSP視覚サーボライブラリが提供する移動エッジトラッカーをROSパッケージにラップします
* [apriltag_ros](https://github.com/AprilRobotics/apriltag_ros) - AprilTag 3視覚フィジカルデテクタのROSラッパー
* [deep_object_pose](https://github.com/NVlabs/Deep_Object_Pose) - ディープオブジェクトポーズ推定
* [DetectAndTrack](https://github.com/facebookresearch/DetectAndTrack) - 検出とトラッキング：効率的なポーズ推定
* [SfMLearner](https://github.com/tinghuiz/SfMLearner) - 深度と自己運動の推定に用いる無教師学習フレームワーク
* [imgaug](https://github.com/aleju/imgaug) - 機械学習実験用の画像拡張
* [vision_opencv](https://github.com/ros-perception/vision_opencv) - ROSとOpenCV（リアルタイムコンピュータビジョン用プログラミング関数ライブラリ）を接続するパッケージ
* [darknet_ros](https://github.com/leggedrobotics/darknet_ros) - YOLO ROS：ROS向けリアルタイムオブジェクト検出
* [ros_ncnn](https://github.com/nilseuropa/ros_ncnn) - YOLACT / YOLO *( その他にも *) のNCNN推論エンジンによるROSでの実装
* [tf-pose-estimation](https://github.com/ildoonet/tf-pose-estimation) - Tensorflowを用いたカスタムアーキテクチャに基づくディープポーズ推定
* [find-object](https://github.com/introlab/find-object) - SIFT、SURF、FAST、BRIEFなど、他の特徴検出器およびディスクのOpenCV実装を試すためのシンプルなQtインターフェース
* [yolact](https://github.com/dbolya/yolact) - リアルタイムインスタンスセグメンテーションに適したシンプルかつ完全にコネクションモデル
* [Kimera-Semantics](https://github.com/MIT-SPARK/Kimera-Semantics) - 2Dデータからリアルタイム3D意味的再構成
* [detectron2](https://github.com/facebookresearch/detectron2) - 物体検出およびセグメンテーションの次世代研究プラットフォーム
* [OpenVX](https://www.khronos.org/openvx/) - パフォーマンスと電力効率を最適化したコンピュータビジョン処理を可能にし、特に埋め込みおよびリアルタイム用途において重要
* [3d-vehicle-tracking](https://github.com/ucbdrive/3d-vehicle-tracking) - Joint Monocular 3D車両検出とトラッキングの公式実装
* [pysot](https://github.com/STVIR/pysot) - PySOTの目的は、視覚トラッキング研究において高品質かつ高性能なコードベースを提供すること
* [semantic_slam](https://github.com/floatlazer/semantic_slam) - 手動RGB-DカメラでROSにおけるリアルタイム意味的SLAM
* [kitti_scan_unfolding](https://github.com/ltriess/kitti_scan_unfolding) - 我々の論文『LiDARポイントクラウドのスキャンベース意味的セグメンテーション：実験的調査』において提案するKITTIスキャン展開
* [packnet-sfm](https://github.com/TRI-ML/packnet-sfm) - トヨタリサーチインスティテ（TRI）MLチームが開発した自己監督モノクロ深度推定手法の公式PyTorch実装
* [AB3DMOT](https://github.com/xinshuoweng/AB3DMOT) - 本研究では、シンプルでありながら正確なリアルタイム3Dマルチオブジェクトトラッキングシステムを提案
* [monoloco](https://github.com/vita-epfl/monoloco) - 「MonoLoco: 単眼画像による3D歩行者位置推定と不確実性推定」の公式PyTorch実装
* [Poly-YOLO](https://gitlab.com/irafm-ai/poly-yolo) - YOLOv3の着想を基に、ラベルの大規模な書き換えとアンカーの非効率な分布という2つの弱点を解消
* [satellite-image-deep-learning](https://github.com/robmarkcole/satellite-image-deep-learning) - 衛星および空中画像を使った深層学習のリソース
* [robosat](https://github.com/mapbox/robosat) - 航空および衛星画像における意味的セグメンテーション
* [big_transfer](https://github.com/google-research/big_transfer) - Google Researchが開発した一般視覚表現学習モデル
* [LEDNet](https://github.com/xiaoyufenfei/LEDNet) - リアルタイム意味的セグメンテーションに適した軽量エンコーダー・デコーダーネットワーク
* [TorchSeg](https://github.com/ycszen/TorchSeg) - 本プロジェクトは、PyTorchを用いた意味的セグメンテーションモデルの高速かつモジュラリティの高いリファレンス実装を提供することを目的としている
* [simpledet](https://github.com/tusimple/simpledet) - 物体検出およびインスタンス認識に適したシンプルかつ汎用的なフレームワーク
* [meshroom](https://github.com/alicevision/meshroom) - Meshroomは、AliceVisionフォトグラメトリックコンピュータビジョンフレームワークに基づく無料かつオープンソースの3D再構成ソフトウェア
* [EasyOCR](https://github.com/JaidedAI/EasyOCR) - 40以上の言語（中国語、日本語、韓国語、タイ語を含む）をサポートした即時使用可能なオプティカル文字認識（OCR）
* [pytracking](https://github.com/visionml/pytracking) - 視覚オブジェクトトラッキングおよび動画オブジェクトセグメンテーションに向けた、PyTorchをベースとした一般向けPythonフレームワーク
* [ros_deep_learning](https://github.com/dusty-nv/ros_deep_learning) - NVIDIA Jetson TX1/TX2/XavierおよびTensorRTに対応したROS用のディープラーニング推論ノード
* [hyperpose](https://github.com/tensorlayer/hyperpose) - HyperPose: リアルタイム人間ポーズ推定に向けたフレキシブルなライブラリ
* [fawkes](https://github.com/Shawn-Shan/fawkes) - 顔認証システムに対するプライバシー保護ツール
* [anonymizer](https://github.com/understand-ai/anonymizer) - 顔や車のナンバープレートを暗号化する匿名化ツール
* [opendatacam](https://github.com/opendatacam/opendatacam) - 調査されたメタデータ（特にオブジェクトの移動経路や特定ポイントでのカウント数）のみを保存
* [Cam2BEV](https://github.com/ika-rwth-aachen/Cam2BEV) - 複数の車載カメラ画像から意味的にセグメンテーションされた鳥瞰ビュー（BEV）画像を計算するTensorFlow実装
* [flownet2-pytorch](https://github.com/NVIDIA/flownet2-pytorch) - FlowNet 2.0のPyTorch実装：ディープネットワークによる光学流推定の進化
* [Simd](https://github.com/ermig1979/Simd) - SIMD（SSE、SSE2、SSE3、SSSE3、SSE4.1、SSE4.2、AVX、AV及AVX-512、VMX（Altivec）およびVSX（Power7）、NEON for ARM）を用いたC++画像処理および機械学習ライブラリ
* [AliceVision](https://github.com/alicevision/AliceVision) - フォトグラメトリックコンピュータビジョンフレームワーク：3D再構成およびカメラトラッキングアルゴリズムを提供
* [satpy](https://github.com/pytroll/satpy) - 気象リモートセンシングデータの読み取り・操作および各種画像・データファイルフォーマットへの書き出しを可能にするPythonライブラリ
* [eo-learn](https://github.com/sentinel-hub/eo-learn) - 任意の衛星編成が取得した空間時間画像列をタイムリーかつ自動的にアクセス・処理できるオープンソースPythonパッケージのコレクション
* [libvips](https://github.com/libvips/libvips) - メモリ消費が少ない高速画像処理ライブラリ


### レーダー処理 <a id="radar-processing"></a>
* [pyroSAR](https://github.com/johntruckenbrodt/pyroSAR) - 大規模SAR衛星データ処理用のフレームワーク
* [CameraRadarFusionNet](https://github.com/TUMFTM/CameraRadarFusionNet) - TUM Roboraceチームソフトウェアスタック：経路追跡制御、速度制御、曲率制御および状態推定


### Lidarと点群処理 <a id="lidar-and-point-cloud-processing"></a>
* [cilantro](https://github.com/kzampog/cilantro) - ポイントクラウドデータ処理に向けた軽量C++ライブラリ
* [open3d](https://github.com/intel-isl/Open3D) - Open3D：3Dデータ処理用の現代的なライブラリ
* [SqueezeSeg](https://github.com/BichenWuUCB/SqueezeSeg) - SqueezeSegの実装：LiDARポイントクラウドセグメンテーションに用いる畳み込みニューラルネットワーク
* [point_cloud_io](https://github.com/ANYbotics/point_cloud_io) - ファイル（例：ply、vtk）からポイントクラウドを読み書きするROSノード
* [python-pcl](https://github.com/strawlab/python-pcl) - ポイントクラウドライブラリへのPythonバインディング
* [libpointmatcher](https://github.com/ethz-asl/libpointmatcher) - ロボティクスにおける2次元/3次元マッピング用の"イテレーティブ・クロス・パインツ"ライブラリ
* [depth_clustering](https://github.com/PRBonn/depth_clustering) - Velodyneセンサーで生成されたポイントクラウドの高速かつ頑健なクラスタリング
* [lidar-bonnetal](https://github.com/PRBonn/lidar-bonnetal) - 自律走行車向けのLiDARポイントクラウドの意味論的およびインスタンスセグメンテーション
* [CSF](https://github.com/jianboqi/CSF) - 布シミュレーションに基づくLiDARポイントクラウドの地表フィルタリング／セグメンテーション（裸地抽出）手法
* [robot_body_filter](https://github.com/peci1/robot_body_filter) - ロボットの3次元体を測定から動的に除去できる、高度にカスタマイズ可能なLaserScan/PointCloud2フィルタ
* [grid_map](https://github.com/ANYbotics/grid_map) - 移動ロボットマッピング用のユニバーサルグリッドマップライブラリ
* [elevation_mapping](https://github.com/ANYbotics/elevation_mapping) - 粗い地形ナビゲーション向けのロボット中心の高さマッピング
* [rangenet_lib](https://github.com/PRBonn/rangenet_lib) - RangeNet++のTensorRTおよびC++インターフェースでの推論動作についての簡単な使用説明
* [pointcloud_to_laserscan](https://github.com/ros-perception/pointcloud_to_laserscan) - 3次元ポイントクラウドを2次元レーザースキャンに変換
* [octomap](https://github.com/OctoMap/octomap) - オクターブベースの効率的な確率的3次元マッピドフレームワーク
* [pptk](https://github.com/heremaps/pptk) - HEREMapsから提供されるポイントクラウド処理ツールキット
* [gpu-voxels](https://www.gpu-voxels.org/) - GPU-VoxelsはCUDAベースのライブラリで、アニメーション3Dモデルと3Dセンサーより得られるリアルタイムポイントクラウド間の高解像度体積衝突検出を可能にする
* [spatio_temporal_voxel_layer](https://github.com/SteveMacenski/spatio_temporal_voxel_layer) - 現代的な3Dグラフィックスツールを活用した新しいvoxel層でナビゲーション環境表現を現代化
* [LAStools](https://github.com/LAStools/LAStools) - 効率的なLiDAR処理に特化した賞を受賞したソフトウェア
* [PCDet](https://github.com/sshaoshuai/PCDet) - ポイントクラウドから3D物体検出を行うための一般的なPyTorchベースのコードベース
* [PDAL](https://github.com/PDAL/PDAL) - ポイントクラウドデータの変換および操作を行うC++ BSDライブラリ
* [PotreeConverter](https://github.com/potree/PotreeConverter) - las、laz、バイナリPly、xyzまたはptxファイルからpotreeオクターブを構築
* [fast_gicp](https://github.com/SMRT-AIST/fast_gicp) - GICPベースの高速ポイントクラウド登録アルゴリズムのコレクション
* [ndt_omp](https://github.com/koide3/ndt_omp) - マルチスレッドかつSSE対応のNDTアルゴリズム
* [laser_line_extraction](https://github.com/kam3k/laser_line_extraction) - LaserScanメッセージから線分を抽出するROSパッケージ
* [Go-ICP](https://github.com/yangjiaolong/Go-ICP) - グローバルに最適な3Dポイントセット登録用のGo-ICPアルゴリズムの実装
* [PointCNN](https://github.com/yangyanli/PointCNN) - ポイントクラウドから特徴学習を行うシンプルかつ汎用的なフレームワーク
* [segmenters_lib](https://github.com/LidarPerception/segmenters_lib) - セグメンテーションベースの検出を実現するLiDARセグメンターアルゴリズムライブラリ
* [MotionNet](https://github.com/pxiangwu/MotionNet) - 鳥の目ビューマップを用いた自律走行における感知と運動予測の統合
* [PolarSeg](https://github.com/edwardzhou130/PolarSeg) - オンラインLiDARポイントクラウドの意味的セグメンテーションに用いる改善されたグリッド表現
* [traversability_mapping](https://github.com/TixiaoShan/traversability_mapping) - Velodyne VLP-16 LiDARからポイントクラウドを受取り、自律走行用の通過可能性マップをリアルタイムで出力
* [lidar_super_resolution](https://github.com/RobustFieldAutonomyLab/lidar_super_resolution) - 地上車両用のシミュレーションベースLiDAR超分解能技術
* [Cupoch](https://github.com/neka-nat/cupoch) - CUDAを用いた高速3Dデータ処理およびロボティクス計算を実現するライブラリ
* [linefit_ground_segmentation](https://github.com/lorenwel/linefit_ground_segmentation) - 地面セグメンテーションアルゴリズムの実装
* [Draco](https://github.com/google/draco) - 3D幾何メッシュおよびポイントクラウドの圧縮・展開を行うライブラリ
* [Votenet](https://github.com/facebookresearch/votenet) - ポイントクラウドにおける3D物体検出用のディープフーホー投票
* [lidar_undistortion](https://github.com/ethz-asl/lidar_undistortion) - 外部6DoFポーズ推定入力に基づくLiDARの運動歪み除去を提供
* [superpoint_graph](https://github.com/loicland/superpoint_graph) - スーパーポイントグラフを用いた大規模ポイントクラウドの意味的セグメンテーション
* [RandLA-Net](https://github.com/QingyongHu/RandLA-Net) - 大規模ポイントクラウドの効率的な意味的セグメンテーション
* [Det3D](https://github.com/poodarchu/Det3D) - PointPillars、SECOND、PIXORなど多くの3D物体検出アルゴリズムを即時実装可能な初の3D物体検出ツールボックス
* [OverlapNet](https://github.com/PRBonn/OverlapNet) - 3DLiDARスキャンによって生成された2枚のレンジ画像の重なりと相対ヨー角を予測する改良シアンスネットワーク
* [mp2p_icp](https://github.com/MOLAorg/mp2p_icp) - C++で実装された多原始体間（MP2P）ICPアルゴリズムのコレクション
* [OpenPCDet](https://github.com/open-mmlab/OpenPCDet) - LiDARベースの3D物体検出を実現するツールボックス
* [torch-points3d](https://github.com/nicolas-chaulet/torch-points3d) - ポイントクラウド上で深層学習を行うPyTorchフレームワーク
* [PolyFit](https://github.com/LiangliangNan/PolyFit) - ポイントクラウドから多角形表面を再構成
* [mmdetection3d](https://github.com/open-mmlab/mmdetection3d) - 一般3D物体検出用次世代プラットフォーム
* [gpd](https://github.com/atenpas/gpd) - ポイントクラウドを入力として取り込み、実用的な掴み方の姿勢を推定する出力を生成
* [SalsaNext](https://github.com/TiagoCortinhal/SalsaNext) - 自律走行用LiDARポイントクラウドの確率意識型セマンティックセグメンテーション
* [Super-Fast-Accurate-3D-Object-Detection](https://github.com/maudzung/Super-Fast-Accurate-3D-Object-Detection) - 3DLiDARポイントクラウドに基づく高速かつ正確な3D物体検出（PyTorch実装）
* [kaolin](https://github.com/NVIDIAGameWorks/kaolin) - 3Dディープラーニング研究を加速するPyTorchライブラリ
* [CamVox](https://github.com/ISEE-Technology/CamVox) - カメラとLivox LiDARを用いた低コストSLAMシステム
* [SA-SSD](https://github.com/skyhehe123/SA-SSD) - 構造を意識した1段階3D物体検出（ポイントクラウドから）
* [cuda-pcl](https://github.com/NVIDIA-AI-IOT/cuda-pcl) - NVIDIA CUDAベースのPCLによるLiDARの高速化
* [urban_road_filter](https://github.com/jkk-research/urban_road_filter) - 自律走行車用のリアルタイムLiDARによる都市道路および歩道検出
* [Removert](https://github.com/irapkaist/removert) - 削除して元に戻す。実際の環境における静的マップ構築と動的ポイント除去ツール（静的マップを構築して作成）
* [KISS-ICP](https://github.com/PRBonn/kiss-icp) - パラメータ調整を一切行わずに、ほとんどのケースで動作するLIDARオドメトリパイプライン

## 位置推定と状態推定 <a id="localization-and-state-estimation"></a>
* [evo](https://github.com/MichaelGrupp/evo) - オドメトリーやSLAMの評価用Pythonパッケージ
* [robot_localization](https://github.com/cra-ros-pkg/robot_localization) - 非線形状態推定ノードのパッケージ
* [fuse](https://github.com/locusrobotics/fuse) - ロボット上でリアルタイムでセンサ融合を行うための一般アーキテクチャ
* [GeographicLib](https://github.com/Sciumo/GeographicLib) - 地図投影用C++ライブラリ
* [ntripbrowser](https://github.com/emlid/ntripbrowser) - NTRIP（ネットワーク経由のRTCMProtocol）をブラウズするためのPythonAPI
* [imu_tools](https://github.com/ccny-ros-pkg/imu_tools) - IMU関連のフィルタと可視化ツール
* [RTKLIB](https://github.com/rtklibexplorer/RTKLIB) - 単一および二頻率低コストGPS受信機（特にu-blox受信機）向けに最適化されたRTKLIBのバージョン
* [gLAB](https://gage.upc.edu/gLAB/) - GNSS観測（偽距離およびキャリア相）をセンチメートルレベルで正確にモデル化し、スタンドアローンGPS位置決定、PPP、SBASおよびDGNSSを可能にする
* [ai-imu-dr](https://github.com/mbrossar/ai-imu-dr) - 車輪式車両のデッドリーキングをIMUのみで実現する我々の新しい正確な手法のコード
* [Kalman-and-Bayesian-Filters-in-Python](https://github.com/rlabbe/Kalman-and-Bayesian-Filters-in-Python) - Jupyter Notebook を使って書かれたカルマンフィルタの書籍
* [mcl_3dl](https://github.com/at-wat/mcl_3dl) - 3D/6自由度の確率的なローカリゼーションシステムを実行するROSノード（3D LIDARを用いたモバイルロボット）
* [se2lam](https://github.com/izhengfan/se2lam) - オドメトリとビジョンを融合した地上車のOn-SE(2)ローカリゼーションとマッピング
* [mmWave-localization-learning](https://github.com/gante/mmWave-localization-learning) - mmWave伝送に基づくMLによる位置決定法（高精度かつエネルギー効率）
* [dynamic_robot_localization](https://github.com/carlosmccosta/dynamic_robot_localization) - PCLを用いた3自由度および6自由度ローカリゼーションとOctoMapによる動的マップ更新を提供するROSパッケージ
* [eagleye](https://github.com/MapIV/eagleye) - GNSSとIMUを用いた車両ローカリゼーションを実現するオープンソースソフトウェア
* [python-sgp4](https://github.com/brandon-rhodes/python-sgp4) - SGP4衛星位置ライブラリのPython版
* [PROJ](https://github.com/OSGeo/PROJ) - 地図投影および座標変換ライブラリ
* [rpg_trajectory_evaluation](https://github.com/uzh-rpg/rpg_trajectory_evaluation) - 視覚（-インертial）オドメトリにおける一般的なトラジェクトリ評価手法を実装
* [pymap3d](https://github.com/geospace-code/pymap3d) - ECEF/ENU/ECI空間における純Python（NumPyオプション）による3D座標変換
* [libRSF](https://github.com/TUC-ProAut/libRSF) - オンラインローカリゼーションに用いる強固なセンサ融合ライブラリ

## 自己位置推定と地図作成 <a id="simultaneous-localization-and-mapping"></a>
### Lidar <a id="lidar"></a>
* [KISS-ICP](https://github.com/PRBonn/kiss-icp) - パラメータ調整を一切行わずに、ほとんどのケースで動作するLIDARオドメトリパイプライン
* [loam_velodyne](https://github.com/laboshinl/loam_velodyne) - 3D LIDARを用いたリアルタイムの状態推定とマッピング手法（Loam）
* [lio-mapping](https://github.com/hyye/lio-mapping) - 緊密に結合した3D LIDAR・インертialオドメトリとマッピング（LIO-mapping）の実装
* [A-LOAM](https://github.com/HKUST-Aerial-Robotics/A-LOAM) - LOAMの高度な実装
* [Fast LOAM](https://github.com/wh200720041/floam) - 高速かつ最適化されたLIDARオドメトリとマッピング
* [LIO_SAM](https://github.com/TixiaoShan/LIO-SAM) - スムージングとマッピングを用いた緊密に結合したLIDAR・インертialオドメトリ
* [cartographer_ros](https://github.com/googlecartographer/cartographer_ros) - CartographerとのROS統合を提供
* [loam_livox](https://github.com/hku-mars/loam_livox) - Livox-LiDAR用の強固なLIDARオドメトリとマッピング（LOAM）パッケージ
* [StaticMapping](https://github.com/EdwardLiuyc/StaticMapping) - LIDARを用いて静的環境をマッピングする
* [semantic_suma](https://github.com/PRBonn/semantic_suma/) - スルフェルマッピングと意味セグメンテーションを用いた意味マッピング
* [slam_toolbox](https://github.com/SteveMacenski/slam_toolbox) - ROSを用いた、潜在的に巨大なマップにおける長期的なマッピングとローカリゼーション用のSLAMツールボックス
* [maplab](https://github.com/ethz-asl/maplab) - オープンな視覚・慣性マッピングフレームワーク
* [hdl_graph_slam](https://github.com/koide3/hdl_graph_slam) - 3D LiDARを用いたリアルタイム6自由度SLAMを実現するROS用オープンソースパッケージ
* [interactive_slam](https://github.com/SMRT-AIST/interactive_slam) - 既存の自動SLAMパッケージとは異なり、最小限の人的努力で実現
* [LeGO-LOAM](https://github.com/RobustFieldAutonomyLab/LeGO-LOAM) - 可変地形における軽量かつ地面最適化されたLiDARオドメトリとマッピング
* [pyslam](https://github.com/luigifreda/pyslam) - Pythonによるモノクロ視覚オドメトリ(VO)パイプラインを含む
* [Kitware SLAM](https://gitlab.kitware.com/keu-computervision/slam/) - Kitwareが開発したLiDARのみによる視覚SLAM、およびROSとParaViewによる使いやすさのためのラッピング
* [horizon_highway_slam](https://github.com/Livox-SDK/horizon_highway_slam) - 信頼性が高く、ドリフトが少なく、リアルタイムで高速道路に適したSLAMパッケージ（Livox Horizon LiDAR用）
* [mola](https://github.com/MOLAorg/mola) - ローカリゼーションとマッピングを実現するモジュラーシステム
* [DH3D](https://github.com/JuanDuGit/DH3D) - 深層階層的3Dディスクリプターより得られる、信頼性の高い大規模6自由度リロケーション
* [LaMa](https://github.com/iris-ua/iris_lama) - LaMaは、ロボットのローカリゼーションとマッピングを実現するC++11ソフトウェアライブラリ
* [Scan Context](https://github.com/irapkaist/scancontext) - グローバルLiDARディスクリプターより得られる場所認識と長期ローカリゼーション
* [M-LOAM](https://github.com/gogojjh/M-LOAM) - 複数LiDARシステムにおける信頼性の高いオドメトリとマッピング、オンライン外積分校正を含む


### 視覚 <a id="visual"></a>
* [orb_slam_2_ros](https://github.com/appliedAI-Initiative/orb_slam_2_ros) - ORB_SLAM2のROS実装
* [orbslam-map-saving-extension](https://github.com/TUMFTM/orbslam-map-saving-extension) - この拡張では、ORB特徴のマップがディスクに保存され、同じトラックを再実行する際に参照として使用される
* [dso](https://github.com/JakobEngel/dso/) - 直接的稀疏オドメトリ
* [viso2](https://github.com/srv/viso2) - libviso2（視覚オドメトリ用ライブラリ）のROSラッピング
* [xivo](https://github.com/ucla-vision/xivo) - X慣性補助視覚オドメトリ
* [rovio](https://github.com/ethz-asl/rovio) - 信頼性の高い視覚慣性オドメトリフレームワーク
* [LSD-SLAM](https://github.com/tum-vision/lsd_slam) - 大規模な単眼SLAMはリアルタイム単眼SLAMである。
* [CubeSLAM and ORB SLAM](https://github.com/shichaoy/cube_slam) - キューブSLAMおよびORB SLAMによる単眼3D物体検出とSLAMパッケージ。
* [VINS-Fusion](https://github.com/HKUST-Aerial-Robotics/VINS-Fusion) - 頑健かつ多機能な多センサ視覚インертial状態推定器。
* [openvslam](https://github.com/xdspacelab/openvslam) - OpenVSLAM：多機能な視覚SLAMフレームワーク。
* [basalt](https://gitlab.com/VladyslavUsenko/basalt) - 非線形因子回収を用いた視覚インертialマッピング。
* [Kimera](https://github.com/MIT-SPARK/Kimera) - カメラ画像とインертialデータを用いて環境の意味情報を含む3Dメッシュを構築する、リアルタイムメトリック・セマンティック同時位置推定とマッピングを実現するC++ライブラリ。
* [tagslam](https://github.com/berndpfrommer/tagslam) - AprilTag fiducialマーカーを用いた同時位置推定とマッピングを実現するROSベースパッケージ。
* [LARVIO](https://github.com/PetWorm/LARVIO) - マルチステート制約カーマンフィルタに基づく軽量かつ正確かつ頑健な単眼視覚インертialオドメトリ。
* [fiducials](https://github.com/UbiquityRobotics/fiducials) - fiducialマーカーを用いた同時位置推定とマッピング。
* [open_vins](https://github.com/rpng/open_vins) - 視覚インертialナビゲーション研究用オープンソースプラットフォーム。
* [ORB_SLAM3](https://github.com/UZ-SLAMLab/ORB_SLAM3) - ORB-SLAM3：視覚、視覚インертialおよびマルチマップSLAMを実現する正確なオープンソースライブラリ。
* [Atlas](https://github.com/magicleap/Atlas) - 配置された画像からエンドツーエンド3Dシーン再構成。
* [vilib](https://github.com/uzh-rpg/vilib) - このライブラリはCUDAを用いたVIOパイプラインのフロントエンドに焦点を当てている。
* [hloc](https://github.com/cvg/Hierarchical-Localization) - 最先端の6自由度視覚ローカライゼーションを実現するモジュラータブレット。画像検索と特徴マッチングを活用した階層ローカライゼーションを実装し、高速かつ正確かつスケーラブルである。
* [ESVO](https://github.com/HKUST-Aerial-Robotics/ESVO) - 立体イベントベースカメラを用いたリアルタイム視覚オドメトリの新しいパイプライン。
* [gradslam](https://github.com/gradslam/gradslam) - PyTorch向けの差分密度SLAMライブラリ（オープンソース）。


### ベクトル地図 <a id="vector-map"></a>
* [OpenDRIVE](http://www.opendrive.org/index.html) - 道路ネットワークの論理的記述を表すオープンファイル形式。
* [MapsModelsImporter](https://github.com/eliemichel/MapsModelsImporter) - GoogleマップからモデルをインポートするためのBlender拡張機能。
* [Lanelet2](https://github.com/fzi-forschungszentrum-informatik/Lanelet2) - 自動運転向けのマップ処理フレームワーク。
* [barefoot](https://github.com/bmwcarit/barefoot) - オンラインおよびオフラインマップマッチング。これらは独立して使用可能であり、クラウド上で使用可能。
* [iD](https://github.com/openstreetmap/iD) - JavaScriptで使用しやすいOpenStreetMapのエディタ
* [RapiD](https://github.com/facebookincubator/RapiD) - Facebookが開発したAIを活用したiDの拡張版
* [segmap](https://github.com/ethz-asl/segmap) - 3Dセグメントに基づく地図表現
* [Mapbox](https://github.com/mapbox/mapbox-gl-js) - ウェブ上のインタラクティブかつカスタマイズ可能なベクターマップ用JavaScriptライブラリ
* [osrm-backend](https://github.com/Project-OSRM/osrm-backend) - オープンソースルーティングマシン - C++バックエンド
* [assuremapingtools](https://github.com/hatem-darweesh/assuremapingtools) - アワーウェアなどの自律走行車プラットフォーム向けの道路ネットワーク地図を閲覧・編集・保存できるデスクトップツール
* [geopandas](https://github.com/geopandas/geopandas) - pandasオブジェクトに地理データを追加するためのプロジェクト
* [MapToolbox](https://github.com/autocore-ai/MapToolbox) - AutowareのベクターマップをUnityで作るプラグイン
* [imagery-index](https://github.com/ideditor/imagery-index) - 地図作成に役立つ航空写真および衛星画像のインデックス
* [mapillary_tools](https://github.com/mapillary/mapillary_tools) - Mapillaryに画像を処理・アップロードするためのライブラリ
* [mapnik](https://github.com/mapnik/mapnik) - ピクセル精度の画像出力と高速な地図アルゴリズムを組み合わせ、C++、Python、Nodeでのインターフェースを公開
* [gdal](https://github.com/OSGeo/gdal) - GDALは、ラスターやベクターマップの地理空間データフォーマット向けのオープンソースX/MITライセンスの変換ライブラリ
* [grass](https://github.com/OSGeo/grass) - GRASS GIS - 無料かつオープンソースの地理情報システム（GIS）
* [3d-tiles](https://github.com/CesiumGS/3d-tiles) - 巨大で異質な3D地理データセットをストリーミングする仕様
* [osmnx](https://github.com/gboeing/osmnx) - ストリートネットワーク用のPython。OpenStreetMapからストリートネットワークおよびその他の空間データを取得・モデル化・分析・可視化

## 予測 <a id="prediction"></a>
* [Awesome-Interaction-aware-Trajectory-Prediction](https://github.com/jiachenli94/Awesome-Interaction-aware-Trajectory-Prediction) - トラジェクト予測に関する最先端の研究資料の選集
* [sgan](https://github.com/agrimgupta92/sgan) - 生成対立ネットワークによる社会的に受け入れられるトラジェクト

## 行動と意思決定 <a id="behavior-and-decision"></a>
* [Groot](https://github.com/BehaviorTree/Groot) - BehaviorTreeを構築するためのグラフィカルエディタ。BehaviorTree.CPPに準拠
* [BehaviorTree.CPP](https://github.com/BehaviorTree/BehaviorTree.CPP) - C++によるBehavior Treesライブラリ
* [RAFCON](https://github.com/DLR-RM/RAFCON) - ロボットプログラムを階層的状態マシンで表現。並列状態実行を特徴とする
* [ROSPlan](https://github.com/KCL-Planning/ROSPlan) - ROSシステムにおけるタスク計画のための一般フレームワーク
* [ad-rss-lib](https://github.com/intel/ad-rss-lib) - 自律走行車用の責任感受性安全モデル（RSS）を実装したライブラリ
* [FlexBE](https://flexbe.github.io/) - ROSのsmachを基にした階層状態マシンのグラフィカルエディタ
* [sts_bt_library](https://github.com/Autonomous-Logistics/sts_bt_library) - 定義されたツリー構造（Fallback、Sequence、Parallelノードなど）を用いて、自作の行動ツリー論理を構築できる機能を提供するライブラリ
* [SMACC](https://github.com/reelrbtx/SMACC) - リアルタイムROS（ロボット運営システム）アプリケーション向けのイベント駆動、非同期、行動状態マシンライブラリ（C++で記述）
* [py_trees_ros](https://github.com/splintered-reality/py_trees_ros) - ROSと連携するためのpy_treesを拡張した行動、ツリー、ユーティリティ

## 計画と制御 <a id="planning-and-control"></a>
* [pacmod](https://github.com/astuff/pacmod) - PACModドライブバイワイヤシステムを用いて車両を制御するための設計
* [mpcc](https://github.com/alexliniger/MPCC) - 自律走行レース用のモデル予測コンタリング制御
* [rrt](https://github.com/RoboJackets/rrt) - C++によるRRT（迅速に探索するランダムツリー）実装
* [HypridAStarTrailer](https://github.com/AtsushiSakai/HybridAStarTrailer) - ハイブリッドA*を用いたトレーラートラック向けのパスプランニングアルゴリズム
* [path_planner](https://github.com/karlkurzer/path_planner) - KTH研究コンセプト車向けのハイブリッドA*パスプランナー
* [open_street_map](https://github.com/ros-geographic-info/open_street_map) - Open Street Mapの地理情報と連携するためのROSパッケージ
* [Open Source Car Control](https://github.com/PolySync/oscc) - 現代の自動車のコンピュータ制御を可能にするソフトウェアとハードウェア設計の集合体であり、自律走行車技術の開発を促進する
* [fastrack](https://github.com/HJReachability/fastrack) - Fast and Safe Tracking（FaSTrack）のROS実装
* [commonroad](https://commonroad.in.tum.de/) - 道路における運動計画のためのコンポジブルベンチマーク
* [traffic-editor](https://github.com/osrf/traffic-editor) - ロボットの交通流れを可視化するグラフィカルエディタ
* [steering_functions](https://github.com/hbanzhaf/steering_functions) - 有限回転半径を持つ車両型ロボット向けのステアリング関数を実装するC++ライブラリ
* [moveit](https://moveit.ros.org/) - アプリケーション開発、設計評価、統合製品構築に使える簡単なロボティクス操作プラットフォーム
* [flexible-collision-library](https://github.com/flexible-collision-library/fcl) - 三角形から構成された2つの幾何モデル間の3種類の近接検索を行うためのライブラリ
* [aikido](https://github.com/personalrobotics/aikido) - 運動学、動力学、最適化における人工知能
* [casADi](https://github.com/casadi/casadi) - 稀疏行列値計算グラフにおける前向きおよび逆向きモードでの自動微分を実装する数値最適化のシンボリックフレームワーク
* [ACADO Toolkit](https://github.com/acado/acado) - 自動制御および動的最適化用のソフトウェア環境およびアルゴリズムコレクション
* [control-toolbox](https://github.com/ethz-adrl/control-toolbox) - ロボティクスにおける制御、推定、最適化および運動計画に用いる効率的なC++ライブラリ
* [CrowdNav](https://github.com/vita-epfl/CrowdNav) - 注意力ベースの深層強化学習による人間の行動を考慮したロボットナビゲーション
* [ompl](https://github.com/ompl/ompl) - 多数の最先端のサンプリングベースの運動計画アルゴリズムを含む
* [openrave](https://github.com/rdiankov/openrave) - オープンロボティクス自動化仮想環境：ロボット運動計画アルゴリズムのテスト、開発、デプロイを行う環境
* [teb_local_planner](https://github.com/rst-tu-dortmund/teb_local_planner) - モバイルロボットの異なるトポロジーに基づく時刻付き弾性帯を用いた最適トラジェクトリプランナー
* [pinocchio](https://github.com/stack-of-tasks/pinocchio) - 剛体動力学アルゴリズムおよびその解析微分を高速かつ柔軟に実装したライブラリ
* [rmf_core](https://github.com/osrf/rmf_core) - rmf_coreパッケージはロボティクスミドルウェアフレームワーク（RMF）の中央機能を提供する
* [OpEn](https://github.com/alphaville/optimization-engine) - 次世代ロボティクスおよび自律システム向けに高速かつ正確な埋め込み最適化を解決するソルバー
* [autogenu-jupyter](https://github.com/mayataka/autogenu-jupyter) - このプロジェクトは非線形モデル予測制御（NMPC）向けの継続/GMRES法（C/GMRES法）ベースのソルバーおよびNMPC向けの自動コード生成器を提供する
* [global_racetrajectory_optimization](https://github.com/TUMFTM/global_racetrajectory_optimization) - このリポジトリにはグローバルレーストラジェクトリの生成に向けた複数のアプローチが含まれる
* [toppra](https://github.com/hungpham2511/toppra) - 運動制約および動的制約を満たすロボットの時間最適経路パラメータ化を計算するためのライブラリ
* [tinyspline](https://github.com/msteinbeck/tinyspline) - TinySplineは、任意のNURBS、B-Spline、Bézier曲線の補間、変換、検索を行うための小型で強力なライブラリ
* [dual quaternions ros](https://github.com/Achllle/dual_quaternions_ros) - ダブルクォータニオンSLERP用のROS Pythonパッケージ
* [mb planner](https://github.com/unr-arl/mbplanner_ros) - 狭い空間における航空機用の計画アルゴリズム。DARPA SubTチャレンジで使用されている
* [ilqr](https://github.com/anassinator/ilqr) - 自動微分可能な動力学モデルを用いた反復線形二次制御（ILQR）
* [EGO-Planner](https://github.com/ZJU-FAST-Lab/ego-planner) - ESDF構築なしで実行する軽量の勾配ベースローカルプランナー。これは、いくつかの最先端手法と比較して計算時間を大幅に削減する
* [pykep](https://github.com/esa/pykep) - 惑星間トラジェクトリ設計研究に必要な基本ツールを提供する科学ライブラリ
* [am_traj](https://github.com/ZJU-FAST-Lab/am_traj) - 四軸飛行機の攻撃的飛行向けの交替最小化ベースのトラジェクトリ生成
* [GraphBasedLocalTrajectoryPlanner](https://github.com/TUMFTM/GraphBasedLocalTrajectoryPlanner) - ロボレースシーズンアルファにおいて、実際のレース車に搭載された実際の走行データを収集し、200km/hを超える速度を達成した
* [se2_navigation](https://github.com/leggedrobotics/se2_navigation) - SE(2)空間におけるナビゲーション用の純粋追跡制御器およびReeds-Sheppサンプリングベースのプランナー
* [Ruckig](https://ruckig.com) - 瞬時運動生成。リアルタイム。ジャック制約。時間最適化。


## ユーザー操作 <a id="user-interaction"></a>
### GUI <a id="graphical-user-interface"></a>
* [imgui](https://github.com/ocornut/imgui) - 高速反復を可能にし、開発者にコンテンツ作成ツールや可視化／デバッグツールを構築できるように設計された
* [qtpy](https://github.com/spyder-ide/qtpy) - PyQt5、PySide2、PyQt4、PySideをすべてサポートする統一層を提供するコードベース
* [mir](https://github.com/MirServer/mir) - Mirは、Waylandベースのシェルを構築するためのライブラリセット
* [rqt](https://wiki.ros.org/rqt) - ROS用のGUI開発を支援するQtベースのフレームワーク。3つの部分/メタパッケージから構成されている
* [cage](https://github.com/Hjdskes/cage) - これはCageであり、Waylandベースのキオスクである。キオスクは1つの最大化されたアプリケーションを実行する
* [chilipie](https://github.com/futurice/chilipie-kiosk) - 直接フルスクリーンChromeに起動できる、使いやすいRaspberry Piイメージ
* [pencil](https://github.com/evolus/pencil) - 誰でも使える図面作成およびGUIプロトタイピングツール
* [dynamic_reconfigure](https://wiki.ros.org/dynamic_reconfigure) - dynamic_reconfigureの焦点は、ノードのパラメータの一部を外部再構成に標準的に公開することにある
* [ddynamic_reconfigure](https://github.com/pal-robotics/ddynamic_reconfigure) - dynamic_reconfigureフレームワークを使ってROSノードのパラメータを変更できるようにする。cfgファイルを書く必要がない
* [elements](https://github.com/cycfi/elements) - 軽量で、細かい、解像度に依存しない、モジュラーなGUIライブラリ
* [NanoGUI](https://github.com/wjakob/nanogui) - OpenGL 3.x以上を対象とした、最小限のクロスプラットフォームウィジェットライブラリ


### 音声UI <a id="acoustic-user-interface"></a>
* [pyo](https://github.com/belangeo/pyo) - C言語で記述されたPythonモジュールで、多様な音声信号処理タイプのクラスを提供
* [rhasspy](https://github.com/synesthesiam/rhasspy) - Rhasspy（RAH-SPEEと発音）は、Jasperにインスパイアされたオフラインマルチ言語音助手ツールキットで、Home Assistant、Hass.io、Node-REDと良好に連携
* [mycroft-core](https://github.com/MycroftAI/mycroft-core) - Mycroftは、ハッキング可能なオープンソース音助手
* [DDSP](https://github.com/magenta/ddsp) - 一般的なDSP関数（合成器、波形変形、フィルタなど）の微分可能なバージョンを含むライブラリ
* [NoiseTorch](https://github.com/lawl/NoiseTorch) - アプリケーション内のノイズを抑圧する仮想マイクを作成する
* [DeepSpeech](https://github.com/mozilla/DeepSpeech) - 機械学習技術に基づく百度のDeep Speech研究論文で訓練されたモデルを使用したオープンソース音声認識エンジン
* [waveglow](https://github.com/NVIDIA/waveglow) - フローベースの生成ネットワークによる音声合成
* [TTS](https://github.com/coqui-ai/TTS) - テキスト-to-スピーキング向けのディープラーニングツールキット。研究および生産現場で実証済み。


### CLI <a id="command-line-interface"></a>
* [the-art-of-command-line](https://github.com/jlevy/the-art-of-command-line) - 1ページでコマンドラインの使い方をマスター。
* [dotfiles of cornerman](https://github.com/cornerman/dotfiles) - 強力なzshとvimのデフォルトファイル。
* [dotbot](https://github.com/anishathalye/dotbot) - あなたのデフォルトファイルを初期化するツール。
* [prompt-hjem](https://github.com/cornerman/prompt-hjem) - 美しいzshのプロンプト。
* [ag](https://github.com/ggreer/the_silver_searcher) - ackに似たコード検索ツールだが、速い。
* [fzf](https://github.com/junegunn/fzf) - コマンドラインでのふわっと検索ツール。
* [pkgtop](https://github.com/orhun/pkgtop) - GNU/Linux向けのインタラクティブなパッケージマネージャーおよびリソースモニタ。
* [asciimatics](https://github.com/peterbrittain/asciimatics) - クロスプラットフォームのパッケージで、cursesのような操作を実現し、さらに高レベルAPIとウィジェットを用いてテキストUIやASCIIアートアニメーションを作成。
* [gocui](https://github.com/jroimartin/gocui) - ミニマリストなGoパッケージでコンソールユーザーインターフェースを作成。
* [TerminalImageViewer](https://github.com/stefanhaustein/TerminalImageViewer) - 小さなC++プログラムで、RGB ANSIコードとUnicodeブロックグラフィック文字を使って（現代的な）ターミナルに画像を表示。
* [rosshow](https://github.com/dheera/rosshow) - ROSのトピックをターミナル内でUnicode/ASCIIアートで可視化。
* [python-prompt-toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit) - Pythonで強力なインタラクティブコマンドラインアプリケーションを構築するためのライブラリ。
* [guake](https://github.com/Guake/guake) - GNOME向けのドロップダウンターミナル。
* [wemux](https://github.com/zolrath/wemux) - マルチユーザーTmuxを簡単に使う。
* [tmuxp](https://github.com/tmux-python/tmuxp) - libtmuxに基づいたセッションマネージャー。
* [mapscii](https://github.com/rastapasta/mapscii) - コンソール向けの世界地図レンダラー。
* [terminator](https://launchpad.net/terminator) - このプロジェクトの目的は、ターミナルの配置に役立つツールを作ること。
* [bat](https://github.com/sharkdp/bat) - cat(1)のクローンに翼をつけて作成。
* [fx](https://github.com/antonmedv/fx) - コマンドラインツールおよびターミナル用JSON閲覧機能
* [tmate](https://github.com/tmate-io/tmate) - 即時ターミナル共有

## データ可視化とミッション制御 <a id="data-visualization-and-mission-control"></a>
* [xdot](https://github.com/jrfonseca/xdot.py) - Graphvizのdot言語で記述されたグラフを対象としたインタラクティブ閲覧ツール
* [guacamole](https://guacamole.apache.org/) - クライアントなしリモートデスクトップゲートウェイ。VNC、RDP、SSHなどの標準プロトコルをサポート。
* [ros3djs](https://github.com/RobotWebTools/ros3djs) - ROS JavaScriptライブラリと併用可能な3D可視化ライブラリ
* [webviz](https://github.com/cruise-automation/webviz) - rvizのようなウェブベース可視化ライブラリ
* [plotly.py](https://github.com/plotly/plotly.py) - Python用のオープンソースインタラクティブグラフライブラリ
* [PlotJuggler](https://github.com/facontidavide/PlotJuggler) - あなたにふさわしいタイムシリーズ可視化ツール
* [bokeh](https://github.com/bokeh/bokeh) - Pythonからブラウザ上でインタラクティブなデータ可視化
* [voila](https://github.com/voila-dashboards/voila) - Jupyterノートブックからスタンドアローンのウェブアプリケーションおよびダッシュボードまで
* [Pangolin](https://github.com/stevenlovegrove/Pangolin) - Pangolinは、OpenGLディスプレイ/インタラクションの管理およびビデオ入力の抽象化を目的とした軽量かつ携帯性の高い急速開発ライブラリ
* [rqt_bag](http://wiki.ros.org/rqt_bag) - ROS bagファイルの表示および再現を可能にするGUIプラグインを提供
* [kepler.gl](https://github.com/keplergl/kepler.gl) - Kepler.glは、大量データセット向けの強力なオープンソース空間分析ツール
* [qgis_ros](https://github.com/locusrobotics/qgis_ros) - bagファイルおよびライブトピックデータを、高度なGIS環境でアクセス可能に。
* [openmct](https://github.com/nasa/openmct) - ウェブベースのミッションコントロールフレームワーク
* [web_video_server](https://github.com/RobotWebTools/web_video_server) - ROS画像トピックの複数フォーマットによるHTTPストリーミング
* [RVizWeb](https://github.com/osrf/rvizweb) - RVizに類似した機能を持つウェブアプリケーションの構築と起動を簡単に行える。
* [marvros](https://github.com/mavlink/mavros) - GCS向けのプロキシを備えたMAVLinkとROSのゲートウェイ
* [octave](https://www.gnu.org/software/octave/) - Matlabとほぼ互換性のある言語で、線形および非線形問題の数値解法やその他の数値実験を行うための、便利なコマンドラインインターフェースを提供
* [streetscape.gl](https://github.com/uber/streetscape.gl) - Streetscape.glは、XVIZプロトコルで記述された自律走行およびロボティクスデータを可視化するためのツールキット
* [urdf-loaders](https://github.com/gkjohnson/urdf-loaders) - ユニティとTHREE.js向けのURDFローダーと例としてのATHLETE URDFファイル
* [obs-studio](https://github.com/obsproject/obs-studio) - ライブストリーミングとスクリーン記録用の無料かつオープンソースソフトウェア
* [K3D-tools](https://github.com/K3D-tools) - Jupyterノートブック用の3D可視化拡張
* [PyQtGraph](https://github.com/pyqtgraph/pyqtgraph) - 科学・工学分野向けの高速データ可視化およびGUIツール
* [ipygany](https://github.com/QuantStack/ipygany) - Jupyterノートブックにおける3次元科学可視化
* [Foxglove Studio](https://github.com/foxglove/studio) - ロボティクス可視化およびデバッグ用のウェブアプリ、webvizの積極的に維持されているフォーク
* [ROS-Mobile](https://github.com/ROS-Mobile/ROS-Mobile-Android) - Android用の可視化および制御アプリ


### アノテーション <a id="annotation"></a>
* [labelbox](https://github.com/Labelbox/labelbox) - 人工知能アプリケーションの構築と配布に必要なデータの迅速なアノテーション方法
* [PixelAnnotationTool](https://github.com/abreheret/PixelAnnotationTool) - 画像の迅速なアノテーション
* [LabelImg](https://github.com/tzutalin/labelImg) - 画像にオブジェクトの境界ボックスをグラフィカルにアノテーションするツール
* [cvat](https://github.com/opencv/cvat) - 強力かつ効率的なコンピュータビジョンアノテーションツール（CVAT）
* [point_labeler](https://github.com/jbehley/point_labeler) - 単一のポイントクラウドまたはポイントクラウドのストリームのラベル付けツール
* [label-studio](https://github.com/heartexlabs/label-studio) - マルチタイプデータのラベル付けおよびアノテーションツールで、標準化された出力フォーマットを提供
* [napari](https://github.com/napari/napari) - Python用の高速かつインタラクティブな多次元画像閲覧ツール
* [semantic-segmentation-editor](https://github.com/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor) - AIトレーニングデータセット（2Dおよび3-3D）を作成するためのウェブベースのラベル付けツール
* [3d-bat](https://github.com/walzimmer/3d-bat) - ポイントクラウドおよび画像ラベル付け用の3D境界ボックスアノテーションツール
* [labelme](https://github.com/wkentaro/labelme) - Pythonによる画像ポリゴンアノテーション（ポリゴン、矩形、円、線、ポイント、画像レベルフラグアノテーション）
* [universal-data-tool](https://github.com/UniversalDataTool/universal-data-tool) - データ、画像、テキスト、ドキュメントなど、あらゆるタイプのデータを簡単なウェブインターフェースまたはデスクトップアプリで協働してラベル付け
* [BMW-Labeltool-Lite](https://github.com/BMW-InnovationLab/BMW-Labeltool-Lite) - 最先端のディープラーニングトレーニング用に使いやすいラベル付けツールを提供
* [3d-annotation-tool](https://github.com/StrayRobots/3d-annotation-tool) - ポイントクラウドに境界ボックス、矩形、キーポイントなど、アノテーションを行う軽量ツール


### 点群 <a id="point-cloud"></a>
* [CloudCompare](https://github.com/CloudCompare/CloudCompare) - CloudCompareは、3Dポイントクラウド（および三角メッシュ）を処理するソフトウェアです.
* [Potree](https://github.com/potree/potree) - 大規模データセット向けのWebGLベースのポイントクラウド閲覧ツールです.
* [point_cloud_viewer](https://github.com/googlecartographer/point_cloud_viewer) - 巨大なポイントクラウドの閲覧を簡単かつ便利にします.
* [LidarView](https://github.com/Kitware/LidarView) - LiDARセンサからリアルタイムでキャプチャされた3DLiDARデータのリアルタイム可視化と簡単な処理を実行します.
* [VeloView](https://github.com/Kitware/VeloView) - VelodyneのHDLセンサからリアルタイムでキャプチャされた3DLiDARデータのリアルタイム可視化を実行します.
* [entwine](https://github.com/connormanning/entwine/) - 大規模ポイントクラウド向けのデータ組織ライブラリで、兆点規模のデータおよびデスクスケールのポイントクラウドに対応しています.
* [polyscope](https://github.com/nmwsharp/polyscope) - 3Dデータ（メッシュやポイントクラウド）を表示するC++およびPythonベースの閲覧ツールです.
* [Pcx](https://github.com/keijiro/Pcx) - Unity向けのポイントクラウドインポートおよびレンダリングツールです.
* [ImmersivePoints](https://github.com/rmeertens/ImmersivePoints) - 仮想現実デバイスで3Dデータを最も自然な方法で探索できるウェブアプリケーションです.


### RViz <a id="rviz"></a>
* [mapviz](https://github.com/swri-robotics/mapviz) - 2Dデータ向けのモジュラリティを持つROS可視化ツールです.
* [rviz_cinematographer](https://github.com/AIS-Bonn/rviz_cinematographer) - rvizカメラ用のトラジェクトリの作成と編集に使える簡単なツールです.
* [rviz_satellite](https://github.com/gareth-cross/rviz_satellite) - RVizにインターネット上の衛星画像を表示します.
* [rviz_visual_tools](https://github.com/PickNikRobotics/rviz_visual_tools) - Rvizに形状やメッシュを表示するためのC++APIラッパーです.

* [xpp](https://github.com/leggedrobotics/xpp) - 四足歩行ロボットの運動計画の可視化を実行します.
* [rviz stereo](http://wiki.ros.org/rviz/Tutorials/Rviz%20in%20Stereo) - 3Dステレオレンダリングは、それぞれの目に対して異なる視点を表示し、シーンが立体的に見えるようにします.
* [jsk_visualization](https://github.com/jsk-ros-pkg/jsk_visualization) - rvizおよびrqt向けのJsk可視化ROSパッケージです.
* [moveit_visual_tools](https://github.com/ros-planning/moveit_visual_tools) - MoveIt!データをRvizで表示およびデバッグするためのヘルパー関数（発行されたマーカーを介して）です.


## オペレーティングシステム <a id="operation-system"></a>
### 監視 <a id="monitoring"></a>
* [rosmon](https://github.com/xqms/rosmon) - ROSノードの起動および監視用のデーモンです.
* [multimaster_fkie](https://github.com/fkie/multimaster_fkie) - ROS起動設定の管理および実行中のノードの制御に非常に便利なGUIベースの管理環境です.
* [collectd](https://github.com/collectd/collectd/) - システム情報を定期的に収集し、値をさまざまな方法で保存および監視できる小さなデーモンです.
* [lnav](http://lnav.org/) - 強化されたログファイル閲覧ツールで、閲覧中のファイルから得られるすべての意味情報（タイムスタンプやログレベルなど）を活用
* [htop](https://github.com/hishamhm/htop) - Unixシステム向けのインタラクティブなテキストモードプロセス閲覧ツール。トップをより良くする目的で構築されたもの
* [atop](https://github.com/Atoptool/atop) - Linux向けのシステムおよびプロセスモニタリングツールで、ログ記録および再現機能を備えている
* [psutil](https://github.com/giampaolo/psutil) - Pythonにおけるプロセスおよびシステムモニタリング用のクロスプラットフォームライブラリ
* [gputil](https://github.com/anderskm/gputil) - NVIDIA GPUからGPUステータスをPythonでnvidia-smiを用いてプログラム的に取得するためのPythonモジュール
* [gpustat](https://github.com/wookayin/gpustat) - GPUステータスのクエリおよびモニタリングを行うシンプルなコマンドラインツール
* [nvtop](https://github.com/Syllo/nvtop) - NVIDIA GPU向けのhtopのようなモニタリングツール
* [ShellHub](https://www.shellhub.io) - ShellHubは、リモートでLinuxデバイスにコマンドライン（任意のSSHクライアントを使用）またはウェブベースのユーザーインターフェースでアクセスできる、現代的なSSHサーバーであり、sshdへの代替として設計されている。ShellHubは、エッジおよびクラウドコンピューティングにおける中央集約型SSHと見なせる
* [Sshwifty](https://github.com/nirui/sshwifty) - Sshwiftyは、ウェブ上でSSHおよびTelnetを接続するためのツール
* [spdlog](https://github.com/gabime/spdlog) - 非常に高速でヘッダーのみ/コンパイル済みのC++ログライブラリ
* [ctop](https://github.com/bcicen/ctop) - コンテナメトリクス向けのトップのようなインターフェース
* [ntop](https://github.com/ntop/ntopng) - ウェブベースのトラフィックおよびセキュリティネットワークトラフィックモニタリング
* [jupyterlab-nvdashboard](https://github.com/rapidsai/jupyterlab-nvdashboard) - JupyterLab拡張機能としてGPU使用状況のダッシュボードを表示するもの

### データベースと記録 <a id="database-and-record"></a>
* [ncdu](https://dev.yorhel.nl/ncdu) - ncduはディスク使用量分析ツールで、ncursesインターフェースを備えている
* [borg](https://github.com/borgbackup/borg) - 圧縮および認証暗号化を用いた重複削除アーカイブツール
* [bag-database](https://github.com/swri-robotics/bag-database) - バグファイルをカタログ化し、ウェブベースのUIでアクセスできるようにするサーバー
* [marv-robotics](https://gitlab.com/ternaris/marv-robotics) - MARV Roboticsは、強力で拡張可能なデータ管理プラットフォーム
* [kitti2bag](https://github.com/tomas789/kitti2bag) - KITTIデータセットをROSバグファイルに簡単に変換するツール
* [pykitti](https://github.com/utiasSTARS/pykitti) - KITTIデータを扱うためのPythonツール
* [rosbag_editor](https://github.com/facontidavide/rosbag_editor) - 与えられたものからrosbagを作成するためのシンプルなGUI付きツール
* [nextcloud](https://github.com/nextcloud/server) - Nextcloudは、ファイルホスティングサービスの作成と使用に必要なクライアント・サーバーソフトウェアのセットです。
* [ros_type_introspection](https://github.com/facontidavide/ros_type_introspection) - コンパイル時には不明なROSメッセージをデシリアライズします。
* [syncthing](https://github.com/syncthing/syncthing) - 連続的なファイル同期プログラムです。
* [rqt_bag_exporter](https://gitlab.com/InstitutMaupertuis/rqt_bag_exporter) - ROSバグトピックをCSVおよび/または動画ファイルにエクスポートするQt GUIです。
* [xviz](https://github.com/uber/xviz) - 自律データのリアルタイム転送および可視化に用いるプロトコルです。
* [kitti_to_rosbag](https://github.com/ethz-asl/kitti_to_rosbag) - KITTIデータセットの原始データを扱うためのツールセットであり、ROSバグに変換できるほか、ポーズ、velodyneスキャン、画像への直接アクセスを可能にするライブラリを提供します。
* [ros_numpy](https://github.com/eric-wieser/ros_numpy) - ROSメッセージをNumPy配列に変換するためのツールです。
* [kitti_ros](https://github.com/LidarPerception/kitti_ros) - ROSベースのキットティデータセットの再生プレイヤーです。
* [DuckDB](https://github.com/cwida/duckdb) - 埋め込み可能なSQL OLAPデータベース管理システムです。

### ネットワーク分散ファイルシステム <a id="network-distributed-file-system"></a>
* [sshfs](https://github.com/osxfuse/sshfs) - SSHファイル転送プロトコルに基づくファイルシステムです。
* [moosefs](https://github.com/moosefs/moosefs) - スケーラブルな分散ストレージシステムです。
* [ceph](https://github.com/ceph/ceph) - 分散型オブジェクト、ブロック、ファイルストレージプラットフォームです。
* [nfs](https://github.com/sahlberg/libnfs) - Sun Microsystemsが開発した元の分散ファイルシステムプロトコルです。
* [ansible-role-nfs](https://github.com/geerlingguy/ansible-role-nfs) - RedHat/CentOSまたはDebian/UbuntuにNFSユーティリティをインストールします。


### サーバー基盤と高性能計算 <a id="server-infrastructure-and-high-performance-computing"></a>
* [mass](https://github.com/maas/maas) - 自習型、リモートでのWindows、CentOS、ESXi、Ubuntuのインストールにより、データセンターをベアメタルクラウドに変換します。
* [polyaxon](https://github.com/polyaxon/polyaxon) - 機械学習およびディープラーニングアプリケーションの全ライフサイクルを再現・管理するプラットフォームです。
* [localstack](https://github.com/localstack/localstack) - 完全に機能するローカルAWSクラウドスタック。クラウドおよびサーバレスアプリケーションの開発とテストをオフラインで行えます。
* [nvidia-docker](https://github.com/NVIDIA/nvidia-docker) - NVIDIA GPUを活用したDockerコンテナの構築と実行です。
* [kubeflow](https://github.com/kubeflow/kubeflow) - Kubernetes向けの機械学習ツールキットです。
* [log-pilot](https://github.com/AliyunContainerService/log-pilot) - Dockerコンテナのログを収集します。
* [traefik](https://github.com/containous/traefik) - クラウドネイティブエッジルーター
* [graylog2-server](https://github.com/Graylog2/graylog2-server) - 無料かつオープンソースのログ管理
* [ansible](https://github.com/ansible/ansible) - Ansibleは、IT自動化プラットフォームとして極めてシンプルであり、アプリケーションやシステムのデプロイを簡単にする
* [pyinfra](https://github.com/Fizzadar/pyinfra) - 一時的なコマンド実行、サービスのデプロイ、構成管理などに使用可能
* [docker-py](https://github.com/docker/docker-py) - DockerエンジンAPI用のPythonライブラリ
* [noVNC](https://github.com/novnc/noVNC) - HTML5を用いたVNCクライアント
* [Slurm](https://github.com/SchedMD/slurm) - Slurm：高度にスケーラブルなワークロードマネージャー
* [jupyterhub](https://github.com/jupyterhub/jupyterhub) - マルチユーザー対応のJupyterノートブックサーバー
* [Portainer](https://github.com/portainer/portainer) - Dockerの管理を簡単にする
* [enroot](https://github.com/NVIDIA/enroot) - 従来のコンテナ／OSイメージを、権限のないサンドボックスに変換するためのシンプルで強力なツール
* [docker-firefox](https://github.com/jlesage/docker-firefox) - FirefoxとnoVNCを使用して、ヘッドレスサーバーへのリモートアクセスを実行するDockerコンテナの実行
* [luigi](https://github.com/spotify/luigi) - 複雑なバッチジョブのパイプラインを構築するためのPythonモジュール。依存関係の解決、ワークフロー管理、可視化などを扱い、Hadoop対応も内蔵されている
* [triton-inference-server](https://github.com/NVIDIA/triton-inference-server) - NVIDIA Triton Inference Serverは、NVIDIA GPU向けに最適化されたクラウドインフェレンスソリューションを提供
* [cudf](https://github.com/rapidsai/cudf) - データエンジニアやデータサイエンティストがCUDAプログラミングの詳細に触れる必要なく、ワークフローを簡単に加速できるように、pandasに似たAPIを提供


### 組み込みOS <a id="embedded-operation-system"></a>
* [vxworks7-ros2-build](https://github.com/Wind-River/vxworks7-ros2-build) - VxWorks 7およびROS2のビルドを自動化するためのビルドシステム
* [Yocto](https://git.yoctoproject.org/) - エントリーハードウェアのアーキテクチャに依存しない、エントリーファームソフトウェア用のLinuxディストリビューションの作成を可能にするツールとプロセス
* [Automotive Graded Linux](https://www.automotivelinux.org/software) - 自動車メーカー、サプライヤー、テクノロジー企業が協力して構築するオープンソースプロジェクト。自動車アプリケーション向けにLinuxベースのオープンソフトウェアプラットフォームを提供し、業界標準としての実用性を確保する
* [bitbake](https://github.com/openembedded/bitbake) - 複雑なタスク間の依存関係を考慮しながら、シェルおよびPythonタスクを効率的に並列実行できる汎用タスク実行エンジン
* [Jailhouse](https://github.com/siemens/jailhouse) - JailhouseはLinuxをベースとしたパーシャリングハイパフォーマー
* [Xen](https://wiki.debian.org/Xen) - オープンソース（GPL）タイプ1またはベアメタルハイパフォーマー
* [QEMU](https://www.qemu.org/) - 汎用かつオープンソースのマシンエミュレータおよび仮想化ソフトウェア
* [qemu-xilinx](https://github.com/Xilinx/qemu) - Xilinxプラットフォーム向けに改善されたサポートとモデル化を提供する、Quick EMUlator（QEMU）のフォーク
* [rosserial](https://github.com/ros-drivers/rosserial) - Arduinoなどの小型埋め込みデバイス向けのROSクライアントライブラリ
* [meta-ros](https://github.com/ros/meta-ros/tree/thud-draft) - ROSアプリケーション向けのOpenEmbeddedレイヤー
* [meta-balena](https://github.com/balena-os/meta-balena) - 埋め込みデバイス上でDockerコンテナを実行
* [micro-ros](https://micro-ros.github.io/) - 「通常の」ROS 2と比較して、micro-ROSはLinuxではなくリアルタイムオペレーティングシステム（RTOS）を、かつDDS（eXtremely Resource Constrained Environments向け）を使用している
* [nvidia-container-runtime](https://github.com/NVIDIA/nvidia-container-runtime/) - NVIDIA Container RuntimeはGPUを意識したコンテナランタイムで、Docker、CRI-Oなど主要なコンテナ技術が採用するOpen Containers Initiative（OCI）規格と互換性がある
* [fusesoc](https://github.com/olofk/fusesoc) - FPGA/ASIC開発向けのパッケージマネージャーおよびビルド抽象化ツール
* [jetson_easy](https://github.com/rbonghi/jetson_easy) - NVIDIA Jetsonのセットアップと構成を自動でスクリプト化
* [docker-jetpack-sdk](https://github.com/trn84/docker-jetpack-sdk) - NVIDIA JetPack SDKをDockerコンテナ内で利用し、ダウンロード、書き込み、インストールを行えるようにする
* [Pressed](https://wiki.debian.org/DebianInstaller/Preseed) - debianのインストールプロセス中に尋ねられる質問への答えを設定する方法を提供し、インストール中に手動で入力する必要がない
* [jetson_stats](https://github.com/rbonghi/jetson_stats) - NVIDIA Jetson（Xavier NX、Nano、AGX Xavier、TX1、TX2）の監視および制御を行うパッケージ。すべてのNVIDIA Jetsonエコシステムと互換性がある
* [ros_jetson_stats](https://github.com/rbonghi/ros_jetson_stats) - ROSのjetson-statsラッパー。NVIDIA Jetsonの診断メッセージに含まれる状態情報を提供
* [OpenCR](https://github.com/ROBOTIS-GIT/OpenCR) - ROS向けのオープンソースコントロールモジュール
* [acrn-hypervisor](https://github.com/projectacrn/acrn-hypervisor) - デバイス仮想化リファレンススタックと、複数のソフトウェアサブシステムを安全に管理するためのアーキテクチャを定義。これにより、仮想マシンマネージャーを用いて統合システム上で実行可能にする
* [jetson-containers](https://github.com/dusty-nv/jetson-containers) - JetsonおよびJetPack 4.4向けの機械学習コンテナ


### リアルタイムカーネル <a id="real-time-kernel"></a>
* [ELISA](https://elisa.tech/) - 企業がLinuxベースの安全に重要なアプリケーション（システムの故障が人命の喪失、重大な財産損失、環境汚染を引き起こす可能性がある）を開発および認証を行うことを容易にするプロジェクト
* [PREEMPT_RT kernel patch](https://wiki.linuxfoundation.org/realtime/documentation/start) - PREEMPT_RTカーネルパッチの目的は、カーネルコードの非プリエント可能な部分を最小限に抑えること

## ネットワークとミドルウェア <a id="network-and-middleware"></a>
* [performance_test](https://github.com/ApexAI/performance_test) - pub/subベースの通信フレームワークのパフォーマンスをテストするツール
* [realtime_support](https://github.com/ros2/realtime_support) - ジャッジとレイテンシを測定するための最小限のリアルタイムテストツール
* [ros1_bridge](https://github.com/ros2/ros1_bridge) - ROS 2パッケージで、ROS 1とROS 2の間の両方向通信を提供するもの
* [Fast-RTPS](https://github.com/eProsima/Fast-RTPS) - オブジェクト管理グループ（OMG）連合が定義・維持している、UDPなどの不安定なトランスポート上で発行者・購読者間通信を提供するプロトコル
* [protobuf](https://github.com/protocolbuffers/protobuf) - グーグルのデータ交換フォーマット
* [opensplice](https://github.com/ADLINK-IST/opensplice) - Vortex OpenSplice Community Edition
* [cyclonedds](https://github.com/eclipse-cyclonedds/cyclonedds) - Eclipse Cyclone DDSは、非常にパフォーマンスが高く、信頼性の高いオープンソースDDS実装
* [iceoryx](https://github.com/eclipse/iceoryx) - POSIXベースのシステム向けのIPCミドルウェア
* [rosbridge_suite](https://github.com/RobotWebTools/rosbridge_suite) - ROSにJSONインターフェースを提供し、任意のクライアントがJSONを送信してROSトピックの発行や購読、ROSサービスの呼び出しなどを行うことができる
* [ros2arduino](https://github.com/ROBOTIS-GIT/ros2arduino) - このライブラリは、ArduinoボードがROS2とXRCE-DDSを介して通信できるようにするもの
* [eCAL](https://github.com/continental/) - 拡張された通信抽象化層（eCAL）は、1つのコンピュータノード内またはコンピュータネットワーク内の異なるノード間でスケーラブルかつ高性能なプロセス間通信を可能にするミドルウェア
* [AUTOSAR-Adaptive](https://github.com/UmlautSoftwareDevelopmentAccount/AUTOSAR-Adaptive) - R19-11に基づくAUTOSARアダプティブプラットフォームの実装
* [ocpp](https://github.com/NewMotion/ocpp) - オープンチャージポイントプロトコル（OCPP）は、電動車両充電器と中央バックオフィスシステムの間の通信に用いられるネットワークプロトコル
* [micro-ROS for Arduino](https://github.com/micro-ROS/micro_ros_arduino) - Arduino IDEまたはArduino CLIに基づく、baremetalプロジェクト向けの実験的なmicro-ROSライブラリ
* [mqtt_bridge](https://github.com/groove-x/mqtt_bridge) - ROSとMQTTの両方向通信を橋渡しする機能を提供するもの


### Ethernetと無線ネットワーク <a id="ethernet-and-wireless-networking"></a>
* [SOES](https://github.com/OpenEtherCATsociety/SOES) - SOESはC言語で書かれたEtherCATのスレーブスタック
* [netplan](https://netplan.io/) - 必要なネットワークインターフェースのYAML記述を作成し、それぞれのインターフェースがどのように設定されるべきかを定義するだけ
* [airalab](https://github.com/airalab) - AIRAは、ROSを有するサイバーフィジカルシステム向けの参照Robonomicsネットワーククライアント
* [rdbox](https://github.com/rdbox-intec/rdbox) - RDBOXはROSロボット向けのITインフラストラクチャ
* [ros_ethercat](https://github.com/shadow-robot/ros_ethercat) - pr2_ethercatのメインループの再実装であり、PR2ソフトウェアに依存しないもの
* [wavemon](https://github.com/uoaerg/wavemon) - 無線ネットワークデバイス向けのncursesベースのモニタリングアプリケーション
* [wireless](https://github.com/clearpathrobotics/wireless) - 無線ネットワークに関する情報をROSに提供する
* [ptpd](https://github.com/ptpd/ptpd) - PTPデーモン（PTPd）は、「IEEE Std 1588-2008」で定義された精度時間プロトコル（PTP）バージョン2の実装です。PTPはEthernet LANに接続されたコンピュータの正確な時間同期を提供します。
* [iperf](https://github.com/esnet/iperf) - TCP、UDP、およびSCTPネットワーク帯域幅の測定ツール。
* [tcpreplay](https://github.com/appneta/tcpreplay) - Pcapの編集および再実行ツール。
* [nethogs](https://github.com/raboof/nethogs) - プロセスごとに帯域幅をグループ化します。
* [pyshark](https://github.com/KimiNewt/pyshark) - tsharkのPythonラッパー。Wiresharkのディセクターを利用してPythonでパケットを解析できる。
* [pingtop](https://github.com/laixintao/pingtop) - 複数のサーバーにpingを送り、トップのようなターミナルUIで結果を表示します。
* [termshark](https://github.com/gcla/termshark) - tshark用のターミナルUIで、Wiresharkをインスピレーションに受けています。
* [udpreplay](https://github.com/rigtorp/udpreplay) - pcapファイルからUDPパケットを再実行します。
* [openwifi](https://github.com/open-sdr/openwifi) - Linux mac80211互換の、ソフトウェア無線に基づくフルスタックIEEE 802.11/Wi-Fi設計。

### Controller Area Network <a id="controller-area-network"></a>
* [awesome CAN](https://github.com/iDoka/awesome-canbus) - 素晴らしいCANバスツール、ハードウェアおよびリソースを一覧にしたカスタムリスト。
* [AndrOBD](https://github.com/fr3ts0n/AndrOBD) - ELM327アダプタを使ってAndroidのOBD診断。
* [ddt4all](https://github.com/cedricp/ddt4all) - DDT4Allは、自作ECUパラメータ画面を作成し、安価なELM327インターフェースでCANネットワークに接続するためのツールです。
* [cabana](https://github.com/commaai/cabana) - CANビジュアライザーとDBC作成ツール。
* [opendbc](https://github.com/commaai/opendbc) - あなたの車のデコードリングにアクセスを民主化するプロジェクト。
* [libuavcan](https://github.com/UAVCAN/libuavcan) - 航空宇宙およびロボットアプリケーション向けに、CANバスのような堅牢な車両ネットワーク上で信頼性の高い通信を実現するオープンで軽量なプロトコル。
* [python-can](https://github.com/hardbyte/python-can) - canパッケージはPython開発者向けに、コントローラーネットワーク（CAN）をサポートしています。
* [CANopenNode](https://github.com/CANopenNode/CANopenNode) - 国際標準（EN 50325-4）（CiA301）によるCANベースの高層プロトコルで、埋め込み制御システムに適用されます。
* [python-udsoncan](https://github.com/pylessard/python-udsoncan) - UDS（ISO-14229）標準のPython実装。
* [uds-c](https://github.com/openxc/uds-c) - 統一診断サービス（UDS）およびOBD-II（車両用オンボード診断）Cライブラリ。
* [cantools](https://github.com/eerimoq/cantools) - Python 3でのCAN BUSツール。
* [CANdevStudio](https://github.com/GENIVI/CANdevStudio) - CANdevStudioは、CANシミュレーションソフトウェアへのコスト効率的な代替品を目指しています。さまざまなCANハードウェアインターフェースと連携可能です。
* [can-utils](https://github.com/linux-can/can-utils) - Linux-CAN / SocketCANのユーザースペースアプリケーション。
* [ros_canopen](https://github.com/ros-industrial/ros_canopen) - ROS用のCANopenドライバフレームワーク。
* [decanstructor](https://github.com/JWhitleyAStuff/decanstructor) - ROS用のCAN分析の定番ツール。
* [kvaser_interface](https://github.com/astuff/kvaser_interface) - このパッケージは、ROSからKvaser CANデバイスにアクセスするための標準化された方法として開発されました。
* [canmatrix](https://github.com/ebroecker/canmatrix) - CANデータベースフォーマット（.arxml .dbc .dbf .kcd）の変換。
* [autosar](https://github.com/cogu/autosar) - AUTOSAR XMLファイルとの対話を行うためのPythonモジュールのセット。
* [canopen](https://github.com/christiansandberg/canopen) - CANopen標準のPython実装。本プロジェクトの目的は、CiA 301標準の最も一般的な部分をPython的なインターフェースでサポートすることです。
* [SavvyCAN](https://github.com/collin80/SavvyCAN) - Qt5ベースのマルチプラットフォームツールで、CANバスフレームの読み込み、保存、キャプチャが可能です。
* [Open-Vehicle-Monitoring-System-3](https://github.com/openvehicles/Open-Vehicle-Monitoring-System-3) - システムは、バッテリー残量、温度、タイヤ圧、診断エラー状態などの車両メトリクスのリアルタイムモニタリングを提供します。


### センサー・アクチュエーターインターフェース <a id="sensor-and-acuator-interfaces"></a>
* [Tesla-API](https://github.com/timdorr/tesla-api) - モデルS（および将来のテスラ車両）をリモートで監視および制御する機能を提供します。
* [flirpy](https://github.com/LJMUAstroecology/flirpy) - FLIRの熱画像カメラおよび画像との相互作用を行うためのPythonライブラリ。
* [nerian_stereo](https://github.com/nerian-vision/nerian_stereo) - NerianのSceneScanおよびSP1立体視センサ用のROSノード。
* [pymmw](https://github.com/m6c7l/pymmw) - TIのIWR1440 mmWaveセンシングデバイスの評価モジュール（BoosterPack）との相互作用を行うためのPythonスクリプトのツールボックス。
* [ti_mmwave_rospkg](https://github.com/radar-lab/ti_mmwave_rospkg) - TI mmWaveレーダーROSドライバー（センサ融合およびハイブリッド機能付き）。
* [pacmod3](https://github.com/astuff/pacmod3) - このROSノードは、PACModドライブバイワイヤーシステム（ボードリビジョン3）を制御するためのものです。
* [ros2_intel_realsense](https://github.com/intel/ros2_intel_realsense) - Intel RealSenseカメラ（D400シリーズ）をROS2で使用するためのパッケージ。
* [sick_scan](https://github.com/SICKAG/sick_scan) - SICK TiMシリーズのレーザースキャナ用のROS2ドライバーを提供するスタック。
* [ouster_example](https://github.com/ouster-lidar/ouster_example) - OS1に接続し、設定し、データを読み取り、可視化し、ROSとインターフェースするためのサンプルコード。
* [ros2_ouster_drivers](https://github.com/ros-drivers/ros2_ouster_drivers) - Ouster OS-1 3DレーザーのROS2ドライバーの実装。
* [livox_ros_driver](https://github.com/Livox-SDK/livox_ros_driver) - Livoxが製造したLiDAR製品に接続するために特別に開発された新しいROSパッケージ
* [velodyne](https://github.com/ros-drivers/velodyne) - Velodyneのハイデフィニション3DLiDARをサポートするROSパッケージのコレクション
* [ublox](https://github.com/KumarRobotics/ublox) - u-blox GPS受信機へのサポートを提供
* [crazyflie_ros](https://github.com/whoenig/crazyflie_ros) - Bitcraze Crazyflie向けのROSドライバー
* [pointgrey_camera_driver](https://github.com/ros-drivers/pointgrey_camera_driver) - Pt. Greyカメラ向けのROSドライバー（公式FlyCapture2 SDKに基づく）
* [novatel_gps_driver](https://github.com/swri-robotics/novatel_gps_driver) - NovAtel GPS/GNSS受信機向けのROSドライのライブラリ
* [pylon-ros-camera](https://github.com/basler/pylon-ros-camera) - Basler GigE VisionおよびUSB3 Visionカメラ向けの公式pylon ROSドライバー
* [ethz_piksi_ros](https://github.com/ethz-asl/ethz_piksi_ros) - Piksiリアルタイムキネマティク（RTK）GPSデバイスをROSで使用する方法に関する（Python）ROSドライバー、ツール、起動ファイル、Wikiを含む
* [sick_safetyscanners](https://github.com/SICKAG/sick_safetyscanners) - SICK Safety Scannersからの原始データを読み取り、laser_scanメッセージとして発行するROSドライバー
* [bosch_imu_driver](https://github.com/mdrwiega/bosch_imu_driver) - Bosch BNO055センサ用のIMUドライバー。UART通信インターフェースのみが実装されている（正しいセンサモードを選択するべき）
* [oxford_gps_eth](https://bitbucket.org/DataspeedInc/oxford_gps_eth/) - OxTS GPS受信機にEthernetインターフェースを提供するNCOMパケット構造を使用
* [ifm3d](https://github.com/ifm/ifm3d) - ifm pmdベースの3D ToFカメラとの作業に必要なライブラリおよびユーティリティ
* [cepton_sdk_redist](https://github.com/ceptontech/cepton_sdk_redist/) - Cepton LiDARへのROSサポートを提供
* [jetson_csi_cam](https://github.com/peter-moran/jetson_csi_cam) - Nvidia Jetson TK1、TX1、またはTX2上でCSIカメラをROSで簡単に使用できるROSパッケージ
* [ros_astra_camera](https://github.com/orbbec/ros_astra_camera) - Orbbec 3Dカメラ向けのROSドライバー
* [spot_ros](https://github.com/clearpathrobotics/spot_ros) - Spot向けのROSドライバー
* [blickfeld-scanner-lib](https://github.com/Blickfeld/blickfeld-scanner-lib) - Blickfeld GmbHのLiDARデバイスとの通信に用いるクロスプラットフォームライブラリ
* [TauLidarCamera](https://github.com/OnionIoT/tau-LiDAR-camera) - Tau LiDARカメラでアプリケーションを開発するためのホスト側API


## セキュリティ <a id="security"></a>
* [owasp-threat-dragon-desktop](https://github.com/mike-goodwin/owasp-threat-dragon-desktop) - Threat Dragonは、システム図の作成と自動的に脅威／対策を生成するルールエンジンを備えた無料・オープンソース・クロスプラットフォームの脅威モデリングアプリケーション
* [launch_ros_sandbox](https://github.com/ros-tooling/launch_ros_sandbox) - 制限された環境（例：Dockerコンテナや権限制限された別ユーザーアカウント）内でノードを実行するための起動ファイルを定義できる
* [wolfssl](https://github.com/wolfSSL/wolfssl) - 小さな、高速で便携性の高いTLS/SSL実装。エッジデバイスからクラウドへ。
* [CANalyzat0r](https://github.com/schutzwerk/CANalyzat0r) - プロパティリーチな自動車プロトコル向けのセキュリティ分析ツール。
* [RSF](https://github.com/aliasrobotics/RSF) - ロボットセキュリティフレームワーク（RSF）は、ロボットにおけるセキュリティ評価を行うための標準化された手法である。
* [How-to-Secure-A-Linux-Server](https://github.com/imthenachoman/How-To-Secure-A-Linux-Server) - Linuxサーバーのセキュリティ強化に関する実用的なガイド。
* [lynis](https://github.com/CISOfy/lynis) - Linux、macOS、UNIXベースシステム向けのセキュリティ診断ツール。HIPAA／ISO27001／PCI DSSなどのコンプライアンステストおよびシステム強化に協力。
* [OpenVPN](https://github.com/OpenVPN/openvpn) - オープンソースVPNデーモン。
* [openfortivpn](https://github.com/adrienverge/openfortivpn) - PPP+SSL VPNトンネルサービスのクライアントで、フォルティネートVPNと互換。
* [WireGuard](https://github.com/WireGuard/WireGuard) - WireGuardは、Linuxカーネル内に実行される革新的なVPNで、最先端の暗号技術を活用。
* [ssh-auditor](https://github.com/ncsa/ssh-auditor) - ネットワーク上のSSHパスワードの弱いものを探査。
* [vulscan](https://github.com/scipag/vulscan) - Nmap NSEによる高度な脆弱性スキャン。
* [nmap-vulners](https://github.com/vulnersCom/nmap-vulners) - Vulners.com APIに基づくNSEスクリプト。
* [brutespray](https://github.com/x90skysn3k/brutespray) - 見つかったサービスに対して、デフォルトの認証情報の自動試行を行う。
* [fail2ban](https://github.com/fail2ban/fail2ban) - 複数回の認証エラーを引き起こすホストをブロックするデーモン。
* [DependencyCheck](https://github.com/jeremylong/DependencyCheck) - アプリケーション依存関係に公開されている脆弱性を検出するソフトウェア構成分析ツール。
* [Firejail](https://github.com/netblue30/firejail) - SUIDサンドボックスプログラムで、Linux名前空間、seccomp-bpf、Linux機能を用いて信頼できないアプリケーションの実行環境を制限し、セキュリティバリアを強化。
* [RVD](https://github.com/aliasrobotics/RVD) - ロボット脆弱性データベース。コミュニティが貢献したロボットの脆弱性と弱点のアーカイブ。
* [ros2_dds_security](http://design.ros2.org/articles/ros2_dds_security.html) - サービスプラグインインターフェース（SPI）アーキテクチャを定義することで、セキュリティ強化を行い、SPIの組み込み実装とSPIが強制するセキュリティモデルを提供。
* [Security-Enhanced Linux](https://github.com/SELinuxProject/selinux) - Linuxカーネルのセキュリティモジュールで、アクセス制御セキュリティポリシー（強制アクセス制御など）をサポートするメカニズムを提供。
* [OpenTitan](https://github.com/lowRISC/opentitan) - 企業、プラットフォームプロバイダー、チップメーカーにとって、シリコンロートオブトラスト設計および実装をより透明性・信頼性・安全性を高める。OpenTitanは、lowRISC CICが運営する協働プロジェクトであり、高品質なオープンIPを提供し、完全機能の製品としてインスタンス化する。
* [bandit](https://github.com/PyCQA/bandit) - Pythonコードに共通するセキュリティ問題を特定するツール。
* [hardening](https://github.com/konstruktoid/hardening) - Ubuntuサーバーを少し安全にすることのための簡単な方法
* [Passbolt](https://github.com/passbolt/passbolt_docker) - Passboltは、チームメンバーが安全に認証情報を保管・共有できる、無料かつオープンソースのパスワードマネージャーです
* [gopass](https://github.com/gopasspw/gopass) - Goで書かれたコマンドライン用のパスワードマネージャー
* [pass](https://www.passwordstore.org/) - 標準的なUnixパスワードマネージャー
* [Vault](https://github.com/hashicorp/vault) - 秘密を安全にアクセスできるツール。秘密とは、アクセスを厳密に制御したいものであり、APIキー、パスワード、証明書などがあります
* [legion](https://github.com/GoVanguard/legion) - 情報システムの発見、調査、exploitationを支援する、オープンソースで使いやすく、非常に拡張可能かつ半自動のネットワークパッチテストフレームワーク
* [openscap](https://github.com/OpenSCAP/openscap) - oscapプログラムは、SCAPドキュメントを読み込み、スキャン、検証、編集、エクスポートできるコマンドラインツールです


## データセット <a id="datasets"></a>
* [Papers With Code](https://www.paperswithcode.com/datasets) - Papers With Codeが提供する数千の機械学習データセット
* [KITTI-360](https://github.com/autonomousvision/kitti360Scripts) - この大規模データセットには、73.7kmの運転距離で32万枚の画像と1万枚のレーザースキャンが含まれています
* [waymo_ros](https://github.com/YonoHub/waymo_ros) - WaymoオープンデータセットをROSに接続するためのROSパッケージです
* [waymo-open-dataset](https://github.com/waymo-research/waymo-open-dataset) - Waymoオープンデータセットは、さまざまな状況でWaymoの自律走行車が収集した高解像度センサーデータから構成されています
* [Ford Autonomous Vehicle Dataset](https://avdata.ford.com/home/default.aspx) - Fordが、異なる日時で収集されたフォード自律走行車のファイリートから得られた、難易度の高いマルチエージェントシーズンデータセットを提供しています
* [awesome-robotics-datasets](https://github.com/sunglok/awesome-robotics-datasets) - ロボティクスおよびコンピュータビジョンに役立つデータセットのコレクション
* [nuscenes-devkit](https://github.com/nutonomy/nuscenes-devkit) - nuScenesデータセットのdevkit
* [dataset-api](https://github.com/ApolloScapeAuto/dataset-api) - ApolloScapeデータセット、CVPR 2019ワークショップにおける自律走行チャレンジおよびECCV 2018チャレンジ向けのツールキットリポジトリ
* [utbm_robocar_dataset](https://github.com/epan-utbm/utbm_robocar_dataset) - EUの長期データセット（自律走行用）および複数センサーによるデータセット
* [DBNet](https://github.com/driving-behavior/DBNet) - ドライビング行動学習用の大規模データセット
* [argoverse-api](https://github.com/argoai/argoverse-api) - Argoverseデータセットの公式GitHubリポジトリ
* [DDAD](https://github.com/TRI-ML/DDAD) - TRI（トヨタ研究インスティテュート）が提供する、長距離（最大250m）および都市環境における多様かつ困難な状況での高密度深度推定を目的とした新しい自律走行ベンチマーク
* [pandaset-devkit](https://github.com/scaleapi/pandaset-devkit) - HesaiとScaleが提供する公開大規模データセット
* [a2d2_to_ros](https://gitlab.com/MaplessAI/external/a2d2_to_ros) - A2D2データセットをROSバッグに変換するためのユーティリティ
* [awesome-satellite-imagery-datasets](https://github.com/chrieke/awesome-satellite-imagery-datasets) - コンピュータビジョンおよびディープラーニング用の衛星画像トレーニングデータセットとそのアノテーションのリスト
* [sentinelsat](https://github.com/sentinelsat/sentinelsat) - コペンヒク・センティンエル衛星画像の検索とダウンロード
* [adas-dataset-form](https://www.flir.com/oem/adas/adas-dataset-form/) - アルゴリズムトレーニング用の熱データセット
* [h3d](https://usa.honda-ri.com/h3d) - ホンダが提供する大規模なフルサウンド3Dマルチオブジェクト検出およびトラッキングデータセットH3D
* [Mapillary Vistas Dataset](https://www.mapillary.com/dataset/vistas) - 世界中の街並みシーンを理解するための、ピクセル精度とインスタンス特定の人のアノテーションを備えた多様な街頭画像データセット
* [TensorFlow Datasets](https://www.tensorflow.org/datasets/catalog/overview) - TensorFlow Datasetsは多くの公開データセットをtf.data.Datasetsとして提供しています
* [racetrack-database](https://github.com/TUMFTM/racetrack-database) - 世界中の20以上のレースコース（主にF1およびDTM）の中央線（xおよびy座標）、トラック幅およびレースラインを含むデータセット
* [BlenderProc](https://github.com/DLR-RM/BlenderProc) - リアルな訓練画像生成を目的としたプロシージャルなBlenderパイプライン
* [Atlatec Sample Map Data](https://www.atlatec.de/getsampledata.html) - サンフランシスコ市内でのみ2台のカメラとGPSのみを使って作成された自律走行とシミュレーション用3Dマップ
* [Lyft Level 5 Dataset](https://self-driving.lyft.com/level5/data/) - レベル5はリフトネットワーク向けに自律走行システムを開発しています。我々は自律走行車両からのデータを収集・処理し、それをあなたに共有しています
* [holicity](https://github.com/zhou13/holicity) - 都市規模のデータプラットフォームによる3D構造の全体理解学習
* [UTD19](https://utd19.ethz.ch/) - 公開されている最大規模の多都市交通データセット
* [ASTYX HIRES2019 DATASET](http://www.pinchofintelligence.com/visualising-lidar-and-radar-in-virtual-reality/) - ディープラーニングに基づく3Dオブジェクト検出用の自動車レーダーデータセット
* [Objectron](https://github.com/google-research-datasets/Objectron/) - 短い、オブジェクト中心の動画クリップのコレクションで、その周囲環境における平面表面の特徴、カメラの姿勢、稀疏点クラウドを含むARセッションメタデータが付随しています
* [ONCE dataset](https://once-for-auto-driving.github.io/index.html) - 2Dおよび3Dオブジェクトアノテーションを備えた大規模な自律走行データセット

## 脚注 <a id="footnotes"></a>

使用しているGIFを作成した[xpp](http://wiki.ros.org/xpp)チームに感謝します。
