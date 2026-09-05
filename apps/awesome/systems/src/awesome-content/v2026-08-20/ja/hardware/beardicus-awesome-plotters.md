---
title: "Awesome Plotters"
description: "Plottersを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-beardicus-awesome-plotters-readme-md"
---

# Awesome Plotters

Plottersを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

- [はじめに](#getting-started)
- [ハードウェア](#hardware)
  - [プロッター](#plotters)
  - [モーターコントローラー](#motor-controllers)
  - [アクセサリー・アダプター](#accessories-and-adapters)
  - [ペン](#pens)
- [ソフトウェア](#software)
  - [HPGL](#hpgl)
  - [G-code](#g-code)
  - [プロッター制御](#plotter-control)
  - [ベクター作成](#vector-creation)
  - [ベクターユーティリティ](#vector-utilities)
  - [フォント](#fonts)
- [着想・解説・研究](#inspiration-instruction-and-research)
- [マニュアル・印刷物・論文・特許](#manuals-ephemera-papers-and-patents)
  - [マニュアル](#manuals)
  - [印刷物](#ephemera)
  - [論文](#papers)
  - [特許](#patents)
- [講座](#courses)
- [コミュニティ](#community)
- [販売中のプロッター作品](#plotter-art-for-sale)
- [その他のAwesomeリスト](#other-awesomes)

## はじめに <a id="getting-started"></a>

ペンプロッターを始めるための短い資料集です。

- [What is a pen plotter 2022?](https://www.youtube.com/watch?v=J1NpYzETm3M) - 2022年の現代的なプラッターについての素晴らしいビデオ紹介
- [An Intro to Pen Plotters](https://medium.com/quarterstudio/an-intro-to-pen-plotters-29b6bd4327ba) - 古いHPGLプラッターを使って始めるための良い情報
- [An Introduction to Pen Plotting](https://mrmrs.cc/writing/pen-plotting-intro/) - 現代的なペンプラッターで始めるための別の記事
- [Pen Plotter Programming: The Basics](https://medium.com/@fogleman/pen-plotter-programming-the-basics-ec0407ab5929) - ベクターパスのプログラミングの基本、並べ替え、結合、簡略化について
- [Pen Plotter Art & Algorithms](https://mattdesl.svbtle.com/pen-plotter-1) - 生成グラフィックスを描くための創作導入の2部記事
- [How to Draw Generative Art with an Axidraw Pen Plotter](https://www.dirtalleydesign.com/blogs/news/how-to-draw-prints-with-an-axidraw-pen-plotter) - 多くの素晴らしいヒントが含まれており、すべてがAxidrawに特化したものではない。また、ペンのレビューと便利な3D印刷ツールも紹介。

## ハードウェア <a id="hardware"></a>

### プロッター <a id="plotters"></a>

製作・購入可能なペンプロッター、歴史資料、修復プロジェクトです。

- [AxiDraw](https://shop.evilmadscientist.com/productsmenu/846) - Evil Mad Scientistのペンプラッター
- [NextDraw](https://bantamtools.com/collections/bantam-tools-nextdraw) - 新しいAxiDraw、現在はBantam Toolsから販売。
- [ArtFrame](https://bantamtools.com/collections/artframe) - Bantam Toolsのしっかりしたフラットベッドペンプラッター
- [Line-us](https://www.line-us.com) - かわいい小さなKickstarterによるロボット描画アーム
- [Drawing Robot](https://www.thingiverse.com/thing:2349232) - Arduino CNC Shield制御回路でgrblファームウェアを実行する3D印刷可能なAxiDrawのクローン
- [4xiDraw](https://www.instructables.com/id/4xiDraw/) - また別の3D印刷可能なAxiDrawのクローン、Arduino CNC Shield制御回路でgrblファームウェアを実行
- [WaterColorBot](https://watercolorbot.com) - 水彩ペンで描くためのXYアートロボットとソフトウェア
- [EggBot](https://egg-bot.com) - 卵型や球型の物体に適したペンプラッター
- [HP Pen Plotters](https://www.hpmuseum.net/exhibit.php?class=4&cat=24) - HPGL標準を創出した開発者のヴィンテージデスクトップおよび床置きペンプラッター。モデル7475Aは非常に一般的で、通常eBayで見つかる。
- [Roland Pen Plotters](https://www.youtube.com/watch?v=6_pwzqPk6Gg) - ヴィンテージフラットベッドHPGLペンプラッター。eBayで"roland dxy"を検索。
- [Blot](https://blot.hackclub.com) - Hack Clubから提供されるオープンソースDIYペンプラッター。生成アート用のブラウザベースエディタを備えている。
- [BrachioGraph](https://www.brachiograph.art) - 棒、サーボ、Pythonを実行するRaspberry Piで作る安価でシンプルなプロッターです。制作者による[video of a BrachioGraph talk at PyCon UK](https://www.youtube.com/watch?v=u4Jh1daCl60)もあります。
- [Arduino CNC Drawing Machine](https://www.diymachines.co.uk/arduino-cnc-drawing-machine) - 比較的シンプルな3D印刷されたAxiDraw風のプラッター。良好な動画説明が付いている。
- [PlotterXY](https://github.com/jamescarruthers/PlotterXY) - エクストルージョン、3D印刷部品、安価な3D印刷制御ボードから構成されたコアXYプラッター。
- [NextDraw](https://store.bantamtools.com/collections/bantam-tools-nextdraw) - 人気のAxiDrawペンプロッターを継承する[Bantam Tools](https://www.bantamtools.com)製品です。
- [openBrushograph](https://github.com/openBrushograph/openBrushograph_hardware) - 自動ブラシとペン描画に適したオープンソース3D印刷可能なXYギャンティとZステージ設計。
- [Lego-Pen-Plotter](https://github.com/Jormono1/Lego-Pen-Plotter) - LEGOで完全に構成されたペンプロッター。PyBricksとPythonでプログラムされている。
- [Makelangelo 5](https://www.marginallyclever.com/products/makelangelo-5/) - 壁・窓・台の上に描画できるポールグラフロボット。
- [Reviving the Apple 410 Color Plotter](https://www.nycresistor.com/2017/12/13/reviving-the-apple-410-color-plotter/)
- [Apple-410](https://github.com/phooky/Apple-410) - Apple 410 Color Plotterのドキュメンテーション、ドライバー、ROMのダンプファイル。

### モーターコントローラー <a id="motor-controllers"></a>

ステッピングモーターを駆動し、ペンプロッターを制御するハードウェアです。

- [grblShield](https://github.com/synthetos/grblShield) - [Arduino](https://www.arduino.cc)をgrblファームウェア対応のG-codeモーションコントローラーにするためのステッピングモーター制御ハードウェア一式です。 [adafruit](https://www.adafruit.com/product/1750)
- [TinyG](https://github.com/synthetos/TinyG) - より多機能で堅牢な6軸G-codeモーション制御ハードウェアです。 [adafruit](https://www.adafruit.com/product/1749)
- [Arduino CNC Shield](https://blog.protoneer.co.nz/arduino-cnc-shield) - Arduino用のグリブ対応ステッパーモーター制御シールド。grblShieldに類似。
- [Raspberry Pi CNC Hat](https://wiki.protoneer.co.nz/Raspberry_Pi_CNC) - ラズベリーピーに追加されたボード。ステッパー制御回路とgrblを実行するマイクロコントローラを備えている。Piのシリアルピンとインターフェース。
- [EBB Driver Board](https://shop.evilmadscientist.com/productsmenu/188) - USBベースのダブルステッパーモーター制御ボード。元々EggBot用に設計されたもの。

### アクセサリー・アダプター <a id="accessories-and-adapters"></a>

ケーブル、シリアル変換器、交換部品です。

- [WiFi232](http://biosrhythm.com/?page_id=1453) - DB25プラグでWi-FiとRS-232シリアルを接続。無線でシリアルプロッターを制御できる。
- [Plotter Cable Pinout](http://sites.music.columbia.edu/cmc/chiplotle/plotter_cable.pdf) - プロッター接続・修理に利用するケーブル、変換器、交換部品です。 `DB9 to DB25 Serial Null Modem Cable`
- [PlotAdapter](https://github.com/rhalkyard/plotadapter) - "HPプロッター向けシリアル-GPIB変換器"。Arduinoマイクロコントローラを使って、シリアルHPGLを一部の古いHPプロッターが期待するGPIB/HP-IBに変換。
- [Replacement Pen Carousel Turret Carriage Holder for HP 7475A Plotter](https://obsoletetech.us/products/replacement-pen-carousel-turret-carriage-holder-for-hp-7475a-plotter) - 3D印刷された代替部品。
- [Replacement Geneva Drive Wheel Gear for HP 7475A Plotter Pen Carousel](https://obsoletetech.us/products/replacement-geneva-drive-wheel-gear-for-hp-7475a-plotter-pen-carousel) - 3D印刷された、よく壊れる部品の代替品。

### ペン <a id="pens"></a>

ペン用アダプター、取付部品、推奨情報です。

- [Sharpie Fine Point Plotter Adapter](https://www.printables.com/model/156721-sharpie-fine-point-plotter-adapter) - 標準のシャープいのペンをHP-GLプロッターに取り付けるための3D印刷アダプタ。
- [Parametric 3d-Printable Plotter Pen Adapter](https://openjscad.xyz/#https://gist.githubusercontent.com/beardicus/d668c0f6b96be53d16dc/raw/plotter-pen-adapter.jscad) - さまざまなペンに合う調整可能なモデルを印刷するアダプタ。
- [Plotter Pen STL Models](https://www.printables.com/model/156722-plotter-pen) - 短いおよび長い標準プロッターペンの正確なSTLモデル。
- [Pens for AxiDraw](https://wiki.evilmadscientist.com/Pens_for_AxiDraw) - 一般にプロッターに使用できるペンのリスト。
- [Pens for EggBot](https://wiki.evilmadscientist.com/Pen_choices) - エッグやガラスに焦点を当てたペンの推奨事例だが、一般的な情報も含まれている。
- [JetPens - The Best White Ink Pens](https://www.jetpens.com/blog/The-Best-White-Ink-Pens/pt/340) - 多数の白インクペンを、被覆特性の写真とともに比較した包括的なレビューです。

## ソフトウェア <a id="software"></a>

### HPGL <a id="hpgl"></a>

HPGLは、多くの旧型ペンプロッターと新しいビニールカッターで使われるテキストベースのプロトコルです。

- [Chiplotle](https://github.com/drepetto/chiplotle) - HPGLを生成し、シリアルプロッターとインターフェースするためのPythonライブラリ。
- [Chiplotle3](https://github.com/cyprienh/chiplotle3) - ChiplotleのフォークがPython 3.xとの互換性を更新されたもの。
- [HPGL Reference Guide](https://www.isoplotec.co.jp/HPGL/eHPGL.htm) - HTMLベースのHPGLリファレンス。
- [HP 7475A Interfacing and Programming Manual](https://archive.org/details/HP7475AInterfacingandProgrammingManual) - HPGLリファレンスを含むスキャン済みPDFマニュアル。
- [djipco/hpgl](https://github.com/djipco/hpgl) - HPGLに適合するプロット機やプリンターと通信するためのNode.jsライブラリ
- [hp2xx](https://www.gnu.org/software/hp2xx) - HPGLをその他のベクターやレタスフォーマットに変換するGNUツール。X11でのプレビューとしても使用可能
- [vec](https://github.com/anachrocomputer/vec) - HPGLを生成するためのCコードの例（タートルグラフィックスインターフェース付き）
- [d3-hpgl](https://github.com/aubergene/d3-hpgl) - HPGLの生成、変換、送信、機器制御に利用する資料・実装です。 [D3](https://d3js.org)
- [HPGL Viewer](https://github.com/drskullster/HPGLViewer) - JavaScriptとHTML5キャンバスを使用したHPGL閲覧ツール
- [HPGL Sender](https://github.com/LgHS/hpgl-sender) - HPGLのプレビューおよびプロット機への送信を可能にするウェブインターフェース
- [HPGLGraphics](https://github.com/ciaron/HPGLGraphics) - HPGLファイルを書くためのProcessingライブラリ
- [processing2hpgl](https://github.com/awdriggs/processing2hpgl) - Processing内でHPGLペンプロット機と直接通信できるProcessingライブラリ

### G-code <a id="g-code"></a>

G-codeはCNC機械を制御するテキストベースの標準です。産業機械向けに設計されましたが、多くのホビー向け3Dプリンターファームウェアで採用され、小規模DIYでも広く使われています。

- [grbl](https://github.com/grbl/grbl) - Atmega 328マイクロコントローラおよびArduino向けの高パフォーマンスGコード解釈ファームウェア
- [cncjs](https://github.com/cncjs/cncjs) - grbl、TinyG、または他のGコードベースのファームウェアを実行するCNCマシンを制御するウェブインターフェース
- [node-gcode](https://github.com/ryansturmer/node-gcode) - Node.jsによるGコード解釈とシミュレーター
- [svg2gcode](https://github.com/em/svg2gcode) - Node.jsのコマンドラインツールでSVGをGコードに変換
- [svg2gcode](https://github.com/vishpat/svg2gcode) - Pythonによる高速SVGからGコードへの変換ツール
- [jscut](http://jscut.org/) - ウェブベースのSVGからGコードへの変換ツール
- [Universal-G-Code-Sender](https://github.com/winder/Universal-G-Code-Sender) - Javaベースのgrbl対必のクロスプラットフォームGコード送信ツール
- [ChiliPeppr Hardware Fiddle](http://chilipeppr.com) - Gコードの可視化とハードウェア制御を可能にするモジュラリーベースのウェブインターフェース
- [gcode-generative-for-processing](https://github.com/o0morgan0o/gcode-generative-for-processing) - シンプルな形状からGコードを作成するためのProcessingライブラリ。（Creality CR10との使用を想定）
- [gcodeplot](https://github.com/arpruss/gcodeplot) - SVGおよびHPGLを3軸CNCマシン向けのGコードに変換するPythonツール
- [fabnodes](https://extensions.blender.org/add-ons/fabnodes/) - Blenderの拡張機能で、Geometry NodeツールパスをGコードにエクスポート

### プロッター制御 <a id="plotter-control"></a>

プロッターハードウェアを制御するソフトウェアです。

- [axidraw](https://github.com/evil-mad/axidraw) - Inkscape向けの公式AxiDraw拡張
- [axi](https://github.com/fogleman/axi) - AxiDraw v3向けの非公式Pythonライブラリ
- [bCNC](https://github.com/vlachoudis/bCNC) - グリブのためのクロスプラットフォームGコード送信ソフトウェアおよびCNC制御ソフトウェア
- [xy](https://github.com/fogleman/xy) - マケブロックXYプロッタロボットキット用のユーティリティ
- [LaserGRBL](https://github.com/arkypita/LaserGRBL) - グリブ制御器向けのレーザー最適化されたWindows GUI。ソレノイドを用いてペンの上下を制御するDIYペンプロッタにも再利用可能
- [Line-us Inkscape Plugin](https://github.com/Line-us/Inkscape-Plugin) - インクスケープから直接Line-usプロッタに図形を送信
- [Line-us API Examples](https://github.com/Line-us/Line-us-Programming) - Line-usプロッタのGコードベースAPIの例コード
- [@beardicus/line-us](https://github.com/beardicus/line-us) - ノードまたはブラウザからLine-usマシンを制御するJavaScriptライブラリ
- [PenPlotter](https://github.com/RickMcConney/PenPlotter) - リピーターファイアウォークを使用するポラログラフ制御ソフトウェア
- [Makelangelo-firmware](https://github.com/MarginallyClever/Makelangelo-firmware) - マケルアンゴロのポラログラフロボット用ファイアウォーク
- [RoboPaint](https://github.com/evil-mad/robopaint) - ウォーターカラーボット用ソフトウェド
- [AxiTurtle](https://github.com/ralphcrutzen/AxiTurtle) - AxiDrawにおけるプロセスのチュートリアルグラフィックス
- [GRBL-Plotter](https://github.com/svenhb/GRBL-Plotter) - SVGおよびDXFのインポートと柔軟なペン上下制御を備えた、グリブ制御器向けプロッタ最適化されたWindows GUI
- [saxi](https://github.com/nornagon/saxi) - AxiDrawのドライバーおよびライブラリ。定常加速度運動計画を用い、自動的に紙サイズに調整。
- [MP2300-Tools](https://github.com/Jan--Henrik/MP2300-Tools) - HPGLをグラフテックのGPGL形式およびグラフテックプロッタペンアダプタ用CADファイルに変換するソフトウェア
- [Inkcut](https://github.com/inkcut/inkcut) - 2Dプロッタ、カッター、エングラバー、CNCマシンを制御するアプリケーション
- [plottie](https://github.com/mossblaser/plottie) - SVG入力でシルエットプロッタおよびカッターを制御するコマンドラインツール
- [py_silhouette](https://github.com/mossblaser/py_silhouette) - シルエットプロッタおよびカッターを制御するPythonライブラリ
- [pypenwriter](https://github.com/Lana-chan/pypenwriter) - SVG図形をパナソニックペンライター系列のタイピングプロッタに変換・送信するPythonスクリプト

### ベクター作成 <a id="vector-creation"></a>

ベクター作品を一から作成するか、他形式から変換するツールです。

- [Inkscape](https://inkscape.org) - 人気のあるクロスプラットフォームオープンソースベクターグラフィクスエディタ
- [p5.js](https://p5js.org) - "アーティスト、デザイナー、教育者、初心者向けにコードを簡単に使えるJavaScriptライブラリ"
- [Paper.js](http://paperjs.org) - "ベクターグラフィクススクリプティングのスイス軍刀"
- [ln](https://github.com/fogleman/ln) - Goで書かれたベクターベースの3Dレンダラー
- [autotrace](https://github.com/autotrace/autotrace) - ビットマップ画像をベクターグラフィックスに変換
- [stipplegen](https://github.com/evil-mad/stipplegen) - ビットマップ画像から点描画を生成します。 [blog post](https://www.evilmadscientist.com/2012/stipplegen2)
- [SquiggleDraw](https://github.com/gwygonik/SquiggleDraw/commits/master) - "SquiggleDrawは画像からSVGファイルを作成し、明るさをサイン波の振幅に変換する"
- [svgurt](https://svgurt.com) - WebベースのPNGからSVGへのクリエイティブなノードラー
- [maptrace](https://github.com/mzucker/maptrace) - レターグラフィックスをトレースすることで、水密な多角形ベクターマップを作成
- [Drawbot_image_to_gcode_v2](https://github.com/Scott-Cooper/Drawbot_image_to_gcode_v2) - ドローボット用のGコードを生成
- [blackstripes](https://github.com/fullscreennl/blackstripes-python-extensions) - PNG画像をSVGラインドローイングに変換
- [penplot](https://github.com/mattdesl/penplot) - JavaScriptでプロッター芸術を実行する開発環境
- [penkit](https://github.com/paulgb/penkit) - PythonでラインベースのSVGグラフィックスを作成するライブラリ
- [generativeExamples](https://github.com/digitalcoleman/generativeExamples) - 生成型アートを生成するProcessingコードの例
- [Let's make map](https://svg-exporter.netlify.app) - MapzenタイルからSVGマップをエクスポートできるウェブツール
- [LineDream](https://linedream.marcrleonard.com/) - PythonでSVGをエクスポートできる生成型アートライブラリ
- [SuperformulaSVG for web](https://jasonwebb.github.io/SuperformulaSVG-for-web) - 生成型ラインアートのウェブアプリ
- [scribbleplot](https://github.com/bleeptrack/scribbleplot) - Processingでのスクリッブリーマージン変換
- [Maker.js](https://maker.js.org) - CNCおよびレーザーカッター機に使用する2Dベクタードラインの作成ライブラリ
- [Turtletoy](https://turtletoy.net) - ブラウザベースのJavaScriptのチュートルグラフィックスAPI（SVGエクスポート付き）
- [cozyvec](https://github.com/brubsby/cozyvec) - プロッター芸術およびツイートプロット用のウェブ／スタンドアローンターミナル環境
- [makio135/plotter](https://observablehq.com/collection/@makio135/plotter) - プロッター向け作品を多数収録した[Observable](https://observablehq.com/)ノートブック集です。
- [PlotterFun](https://mitxela.com/plotterfun/) - SquiggleDrawに類似するブラウザベースの画像からSVGへの変換ツール
- [SVG.js](https://svgjs.dev/) - SVGの作成・操作・アニメーションを行う、依存関係のない軽量ライブラリ
- [Components AI](https://components.ai/) - 生成空間を探索するための実験的な計算設計プラットフォーム
- [DrawingBotV3](https://github.com/SonarSonic/DrawingBotV3) - 画像を線描画に変換するためのクロスプラットフォームソフトウェア
- [linedraw](https://github.com/LingDong-/linedraw) - 画像をスケッチ風ベクターライン描画に変換するPythonツール
- [plotter.vision](https://plotter.vision/) - STLファイルの隠れた線除去を実行し、可視化可能なSVGファイルを生成するインタラクティブウェブサイト。また、レッド／ブルー3D眼鏡に対応。
- [plotting-maps](https://github.com/piebro/plotting-maps) - オープンストリートマップのSVGマップを作成できるシンプルなウェブツール
- [ThreadPlotter](https://github.com/LiciaHe/threadPlotter) - 「X-Yプロッターを用いた細かいパンチニードル刺織の設計および製造に用いるツールキット」
- [PINTR](https://javier.xyz/pintr) - あなたの画像から生成される可視化可能なランダム線描画
- [REVDANCATT Plotter Tools](https://revdancatt.com/penplotter/) - SVG出力を持つウェブベースのペンプロッターツールの集合体
- [Flow Lines](https://msurguy.github.io/flow-lines/) - SVGパス／多角線を用いて流れ線表現を生成するツール
- [UJI](https://doersino.github.io/uji/) - SVGエクスポート付きのウェブベース生成芸術ツール
- [Rad Lines](https://msurguy.github.io/rad-lines/) - SVGエクスポート付きのウェブベースの放射線ベクターツール
- [Peak Map](https://anvaka.github.io/peak-map/) - 地図データからリッジ線チャートを生成するウェブベースツール

### ベクターユーティリティ <a id="vector-utilities"></a>

ベクター形式を操作・最適化するツールです。

- [svgsort](https://github.com/inconvergent/svgsort) - SVGファイルのプロッティング用のパス計画により、ペンを上げた状態での移動時間を削減
- [svgoutline](https://github.com/mossblaser/svgoutline) - SVGからストロークと輪郭を線分として抽出するPythonライブラリ
- [svgo](https://github.com/svg/svgo) - SVGファイルを最適化するためのNode.jsベースツール
- [Polargraph Optimizer](https://github.com/ezheidtmann/polargraph-optimizer) - ポラグラフ用の描画計画を最適化するツール
- [penkit-optimize](https://github.com/paulgb/penkit/tree/master/optimizer) - 車両ルート最適化アルゴリズムを用いてプロット時間を最小化するSVG最適化ツール
- [svg-crowbar](https://github.com/NYTimes/svg-crowbar) - Chrome専用のブックマークレットでHTMLドキュメントからSVGを抽出
- [vpype](https://github.com/abey79/vpype) - SVGの生成および操作（スケーリングやパス最適化など）を行う、プロッターに特化したPythonベースのCLIツール
- [SVG Cropper](https://msurguy.github.io/svg-cropper-tool/) - SVGを異なるプリミティブ、カスタム形状、または他のSVGで切り抜くためのブラウザベースツール

### フォント <a id="fonts"></a>

単線ベクターフォント、いわゆる「彫刻フォント」です。

- [Summary of single line fonts](http://imajeenyus.com/computer/20150110_single_line_fonts/index.shtml) - 他のリソースやフォントに関する良い情報とリンク
- [Hershey Vector Font](http://paulbourke.net/dataformats/hershey) - 1960年代のベクターフォントを`.fnt`形式で提供し、元のデータ形式についても詳しく解説します。
- [hershey-fonts](https://github.com/kamalmostafa/hershey-fonts) - ヘルシーフォントのCライブラリとオリジナルフォントデータ
- [svg-fonts](https://gitlab.com/oskay/svg-fonts) - 主にInkscapeの[Hershey Text](https://gitlab.com/oskay/hershey-text)プラグインで使うSVG形式の単線フォントです。
- [CNC Text Tool](https://msurguy.github.io/cnc-text-tool/) - ブラウザベースのヘルシー文字ツール（SVGへのエクスポート）
- [hf2gcode](https://github.com/Andy1978/hf2gcode) - ヘルシーフォントを使用したテキストからGコードを生成
- [FifteenTwenty: Commodore 1520 plotter font](https://github.com/scruss/FifteenTwenty) - 元のROMからこのフォントを作成した過程を[Blog post](https://scruss.com/blog/2016/04/23/fifteentwenty-commodore-1520-plotter-font/)で解説しています。
- [Pulling Teeth From a Corpse: Extracting the Vector Font From the Apple 410 Color Plotter](https://www.nycresistor.com/2017/12/29/pulling-teeth-from-a-corpse-extracting-the-vector-font-from-the-apple-410-color-plotter/)

## 着想・解説・研究 <a id="inspiration-instruction-and-research"></a>

ブログ記事、チュートリアル、ギャラリー、動画等です。

- [On Generative Algorithms](https://inconvergent.net/generative) - 興味深いアルゴリズムについての13パートのわかりやすい解説
- [Roland DG DXY-990](https://hackaday.io/project/12276-roland-dg-dxy-990) - ロールドのフラットベッドプローティング機のクイックスタートガイド
- [The Cohen-Sutherland Line Clipping Algorithm](https://sighack.com/post/cohen-sutherland-line-clipping-algorithm) - 興味深いアルゴリズムについての詳細な説明と例
- [Vera Molnár](https://www.surfacemag.com/articles/vera-molnar-in-thinking-machines-at-moma) - OGプローティングアーティスト
- [Hektor](http://juerglehni.com/works/hektor) - 2002年のオリジナルケーブルベースドレッドボット
- [Surface Projection](https://nb.paulbutler.org/surface-projection/) - Pythonとpenplotを使って表面投影と隠れた線除去に関する深掘り
- [Fractal Generation with L-Systems](https://nb.paulbutler.org/l-systems/) - 線ベースのフラクタルグラフィックスの作成技術
- [Introduction to TSP art](https://wiki.evilmadscientist.com/TSP_art) - 旅行販売マン問題（単一パス）アートのためのリソース
- [Hidden wireframe removal](https://trmm.net/Hidden_Wireframe) - STLファイルのワイヤフレーム除去に関するディスカッションとコードへのリンク
- [The Best XY Plotters in 2020](https://all3dp.com/2/pen-plotters-best-xy-plotters/) - AxiDrawおよびそのクローンについてのよくまとまった概説、それに加えてDIYオプションも紹介
- [Orbis Tertius](https://www.glkitty.com/pages/orbistertius.html) - 火星地形のプローティング出力による没入型デジタルインスタレーション
- [Tech Tangents: Plotting For The First Time - HP 7470A](https://www.youtube.com/watch?v=tk4c4WMZJZ8) - HP 85コンピューターからHP 7470Aを操作する様子を紹介する動画です。
- [CuriousMarc: HP 7475A Plotter and HPGL Demo](https://www.youtube.com/watch?v=Tr7Mbw9gLpk) - HP 7475Aが描くデモ動画
- [CuriousMarc: Refilling or Replacing Vintage HP Plotter Pens](https://www.youtube.com/watch?v=h-oj4HrTH14) - 古びたHPプローティングペンを開閉・清掃・再充填する方法を示す動画
- [Commodore 1520 Plotter Demonstration](https://www.youtube.com/watch?v=QwPTluBvKLU) - コモドレ1520プローティング機の動作動画、機構のカバー写真も含む
- [Tech Tangents: Gold Standard Plotter - HP 7475A](https://www.youtube.com/watch?v=8785ktWD7vQ) - HPGLとプロッターの歴史、およびIBM 5160マイクロコンピューターからHP 7475Aを操作する様子を紹介する動画です。
- [curiousmarc.com: HP 7475A Plotter](https://www.curiousmarc.com/computing/hp-7475a-plotter) - HP 7475Aに関する素晴らしい情報、記念品、プローティングファイル、3つのYouTube動画、および3Dプリント可能な代替部品を含むコレクション
- [From Lettering Guides to CNC Plotters](https://www.typotheque.com/articles/from-lettering-guides-to-cnc-plotters) - "技術的な文字記述ツールの歴史"
- [Building an interactive plotter art installation](https://lostpixels.io/writings/building-interactive-plotter-art) - SIGGRAPH 2023で開催されたインタラクティブなプロット機アート展についての素晴らしい解説（動画付き）
- [Taxan KPL 710 Demo Plot](https://www.youtube.com/watch?v=Xms3sZONQjo) - Taxan KPL 710がデモプロットを実行している手動録画
- [Sweet-P Six Shooter SP-600 Plotter Demonstration](https://www.youtube.com/watch?v=xE9LVOMbKxk) - Sweet-P SP-600がデモプロットを実行している録画
- [Bottle Plotter](https://vgnotepad.blogspot.com/2024/04/bottle-plotter.html) - ワインボトルに描くための円柱形ペンプロット機を構築するブログ記事
- [Buildlog.net Atari 1020 Plotter Retrofit](https://www.buildlog.net/blog/2019/10/inktober-project-2019-post-5/) - Atari 1020プロット機をESP32ベースのGRBLコントローラで使用できるように変更する方法についてのブログ記事と動画
- [Texas Instruments HX-1000 Plotter Photos](http://www.hexbus.com/TI-99_4A_Home_Computer_Page/Hexbus_HX-1000_Printer_Plotter.html) - プロット機の外観、内部構造、包装の写真ギャラリー
- [Making cheap HP plotter pens](https://scruss.com/blog/2014/04/06/making-cheap-hp-plotter-pens-yet-another-hp-gl-viewer/) - ビニールカッターの部品をペンホルダーとして使う方法についてのブログ記事
- [Marcel Schwittlick and The Long Run](https://www.artxcode.io/journal/marcel-schwittlick-the-long-run) - Marcelとのインタビュー、そして彼の作品とワークスペースの多くの写真と動画
- [Lars Wander and Mixing Paint With Code](https://www.artxcode.io/journal/lars-wander-interview) - Lars Wanderとのインタビュー、それに加えてアート作品と動画
- [Flatulence, Crystals, and Happy Little Accidents by Nick Fitzgerald (RustConf 2019)](https://www.youtube.com/watch?v=Ho3xr4b60Zg) - RustConfでの講演で、Rustの話はほとんどなく、生成アートとペンプロット機の創造プロセスについての話が中心
- [Recreating Retro Plotter Art, by Sher Minn (Plotter People #1)](https://www.youtube.com/watch?v=OR_TzMFhv50) - コンピュータとプロット機の歴史についての素晴らしい講演
- [20+ Questions About My Plotter Painting Practice](https://www.eyesofpanda.com/project/plotter_painting_q_a/) - より画家的なプロットの詳細についてのQ&Aブログ記事
- [How to Watercolor Paint with a Robotic Drawing Machine: An Interview with Licia He](https://www.dirtalleydesign.com/blogs/news/how-to-watercolor-painting-with-a-robotic-drawing-machine-an-interview-with-licia-he)
- [300 Days with Plotters](https://liciahe.medium.com/300-days-with-plotters-14159ab64034) - Licia Heによる100日間のプロットチャレンジに成功した話についてのブログ記事
- [Roland DXY 1300 Plotter Self Test](https://www.youtube.com/watch?v=BMVq8vuH4sw)
- [Vintage Aritma 0507 Plotter drawing Sierpinski triangles in one stroke](https://www.youtube.com/watch?v=kfL3K8mQp5I) - Aritma Minigraf 0507の動画
- [Plotter (Artima Minigraf 0507)](https://www.youtube.com/watch?v=Xso0gfLp8IE&t=34s)
- [https://jiristepanovsky.cz/project.php?p=13plotter](https://jiristepanovsky.cz/project.php?p=13plotter) - チェコスロバキア製のAritma Minigraf 0507プロット機についてのブログ記事
- [Another drawing on Aritma Minigraf 0507](https://www.youtube.com/watch?v=EwFyIusdH7g)
- [Aritma Minigraf 0507 Plotting Space Shuttle](https://www.youtube.com/watch?v=YY0ivdyhLpo)
- [Drawing an Etch-Mask Directly onto a PCB using a Vintage Plotter](https://www.youtube.com/watch?v=nkxiFXCnbj8&t=131s) - このプロット機に関する動画の説明には興味深い詳細が含まれている
- [OrCAD 386 and a plotter Colorgraf Aritma 512](http://simandl.cz/stranky/elektro/spoje/pcb.htm) - Colorgraf 512プロット機とOrCAD 386を使って印刷回路板を作成する方法についての記事
- [Early Computer Art in the 50s and 60s](https://www.amygoodchild.com/blog/computer-art-50s-and-60s) - プロット機に関連する多くのアーティストを紹介した素晴らしいアート史の授業
- [Coding My Handwriting](https://www.amygoodchild.com/blog/cursive-handwriting-in-javascript) - p5.jsを使って手書きを生成し、いくつかのカスタムツールを用いる方法についての素晴らしい探索

## マニュアル・印刷物・論文・特許 <a id="manuals-ephemera-papers-and-patents"></a>

スキャン済みプロッターマニュアル、販促資料、学術論文、特許です。その多くを公開する[Internet Archive](https://archive.org)に感謝します。

### マニュアル <a id="manuals"></a>

企業名・製品名のアルファベット順です。

- [Apple Color Plotter User's Manual](https://archive.org/details/AppleColorPlotter)
- [Aritma Colorgraf 512](http://simandl.cz/stranky/elektro/colorgraf/colorgraf_a.htm) - スキャンされた回路図と使用手順書を掲載したウェブサイト。
- [Atari 1020 Color Printer Owner's Guide (1982)](https://archive.org/details/atari-1020-color-printer) - Atari 1020カラープリンターの取扱説明書です。より高品質なスキャンは[a PDF on buildlog.net](https://www.buildlog.net/blog/wp-content/uploads/2019/09/atari-1020-color-printer-owners-guide.pdf)でも入手できます。
- [Atari 1020 Color Printer Field Service Manual (1983)](https://archive.org/details/atari1020colorprinterfieldservicemanualrev.011983atari)
- [CalComp Artisan Plus 1023/1025/1026 User's Guide (1990)](https://archive.org/details/calcomp-artisan-plus-1023-1025-1026-users-guide)
- [Programming CalComp Pen Plotters (1968)](https://archive.org/details/bitsavers_calcompProlottersJun68_2464236)
- [Commodore 1520 Printer Plotter Manual (1983)](https://archive.org/details/1520PrinterPlotterUsersManualStyleA)
- [Commodore 1520 Printer Plotter Manual](https://archive.org/details/1520PrinterPlotterusersManualStyleB)
- [Control Data 165/165-2 Plotter Manual](https://archive.org/details/bitsavers_cdc160139c_4086972)
- [Esterline Angus Spartan X-Y Recorder Instruction Manual](https://archive.org/details/manualsplus_03665) - リビジョン 1178。
- [Esterline Angus Spartan X-Y Recorder Instruction Manual (1980)](https://archive.org/details/manualsplus_03659) - リビジョン 1080、1178、0480。
- [Esterline Angus Model XY530 Recorder Instruction Manual](https://archive.org/details/manualsplus_03657)
- [Esterline Angus Model XY575 Recorder Instruction Manual (1976)](https://archive.org/details/manualsplus_03641)
- [Fluke 1771A Intelligent Digital Plotter User's Manual (1983)](https://archive.org/details/manualsplus_03096)
- [Gerber GS750 Plus User Manual (1995) (manualslib)](https://www.manualslib.com/manual/465193/Gerber-Gs750-Plus.html)
- [Gerber Signmaker IVB User's Manual (1983) (manualslib)](https://www.manualslib.com/manual/464167/Gerber-Signmaker-Ivb.html)
- [Graphtec Pen Plotter MP303 Series Service Manual (2004)](https://archive.org/details/manualzilla-id-5807113)
- [Houston Instrument DMP-160 Plotter Operation Manual](https://archive.org/details/houston-instrument-dmp-160-series-plotters-operation-manual)
- [Houston Instrument DM/PL Command Language (1984)](https://archive.org/details/hi-dmpl-command-language)
- [Houston Instrument DMP-40V Operation Manual (1988)](https://archive.org/details/dmp-40v)
- [Houston Instrument HIPLOT DMP-51/52 Operation Manual (1985)](https://archive.org/details/hi-dmp-51-52-operation-manual)
- [Houston Instrument Interface Notes for DM/PL Intelligent Plotters (1983)](https://archive.org/details/hi-interface-notes-dm-pl-plotters)
- [Houston Instrument Stand Assembly Procedure DMP-50 Series Plotter](https://archive.org/details/hi-stand-assembly-procedure-dmp-50-series-plotter)
- [Houston Instrument DMP-60 Series Plotters Operation Manual (1990)](https://archive.org/details/houston-instruments-dmp-60-manual)
- [HP 7470A Interconnection Guide](https://archive.org/details/manualzilla-id-7029812)
- [HP 7470A Operator's Manual (manualslib)](https://www.manualslib.com/manual/1089592/Hp-7470a.html)
- [HP 7475A Graphics Plotter Operation and Interconnection Manual](https://archive.org/details/HP7475AOperationManual)
- [HP-75 Plotter ROM External Reference Specification (1982) (PDF)](https://literature.hpcalc.org/community/hp75-plotter-ers.pdf)
- [HP 7570A DraftPro Plotter Hardware Support Manual](https://archive.org/details/7570adraftproplotterhardwaresupportmanual0757090000201pagesdec86)
- [HP 7580B Drafting Plotter Service Manual (1986)](https://archive.org/details/hp-7580-b-plotter-service-manual)
- [HP 7585B Drafting Plotter Service Manual (1983)](https://archive.org/details/bitsavers_hpplotter0_18190273)
- [HP DraftPro Plotter User's Guide (1986)](https://archive.org/details/draftproplotterusersguide0757090017163pagesmay86)
- [HP DraftPro Plotter Programmers Reference (1986)](https://archive.org/details/draftproprogrammersreference0757090001387pagessep86)
- [Mutoh ET202 Scriber (German)](https://archive.org/details/mutoh-et202-leichtgemacht)
- [Olivetti PL10 Microplotter User Guide (1983)](https://archive.org/details/olivettipl10microplotter)
- [Olivetti P6060 Programming Manual (1979) (Italian)](https://archive.org/details/olivettip6060prestazionigrafiche)
- [Philips X-Y Flat Bed Recorder PM 8120 (1971)](https://archive.org/details/manualsplus_03520)
- [Radio Shack TRS-80 Plotter Printer Manual](https://archive.org/details/Plotter_Printer_19xx_Radio_Shack)
- [Radio Shack TRS-80 Color Graphic Printer Operation Manual](https://archive.org/details/cgp-115_operation_manual)
- [Radio Shack TRS-80 Color Graphic Printer Service Manual](https://archive.org/details/cgp-115-service-manual)
- [Roland DXY-880 Operation Manual (1984)](https://archive.org/details/RolandDXY880PlotterOperationManual)
- [Roland DXY-980 Operation Manual (1985)](https://archive.org/details/rolanddxy980operationmanual)
- [Roland DXY-990 Operation Manual (1986)](https://archive.org/details/roland-dxy-990)
- [Roland DXY-1300 -1200 -1100 Command Reference Manual](https://archive.org/details/rolanddxy130012001100commandreferencemanualaf)
- [Roland DXY-1350A -1150A User's Manual (1997) (manualslib)](https://www.manualslib.com/manual/884553/Roland-Dxy_1350.html)
- [Roland DPX-2000 User's Manual](https://archive.org/details/roland-dpx-2000-manual)
- [Roland DPX-3300 Operation Manual (GitHub)](https://github.com/sismoke/Roland-DPX-3300/blob/master/manual/DPX-3300.pdf)
- [Roland DPX-3300 Service Notes (1987)](https://archive.org/details/dpx-3300-service-manual)
- [Roland DPX-3300 Schematics (1987)](https://archive.org/details/dpx-3300-schematics)
- [Roland DPX-3700A DPX-2700A User's Manual (Roland Direct Download)](https://downloadcenter.rolanddg.com/contents/manuals/DPX-3700A+2700A_USE_E_R8.pdf)
- [Roland XY Plotter DXY-1350A DXY-1150A User's Manual (1997)](https://archive.org/details/manualzilla-id-5691908)
- [Rotring Tubular Plotter Points Practical Tips and Information](https://archive.org/details/rotingtubularplotterpointprakticaltipsandinformation)
- [Rotring NC-scriber CS 50 Operating Instructions (1989)](https://archive.org/details/rotring_NC-scriber_CS_50_Operating_Instructions)
- [SEGA SP-400 Operation Manual](https://archive.org/details/sega-sp-400) - この資料はアーカイブに「翻り本」として表示されませんが、オリジナルのページスキャンはダウンロード可能です。
- [Sekonic SPL-450+/SPL-455 User Manual (1990) (German)](https://archive.org/details/sekonicspl450spl455)
- [Siemens C1613 Plotter Manual (German)](https://archive.org/details/SiemensC1613Manual)
- [Silver Reed Colour PenGraph EB-50 Operating Manual (1984)](https://archive.org/details/silver-reed-colour-pengraph-eb-50-operating-manual)
- [Taxan X-Y Plotter KPL 710 Instruction Manual](https://pzwiki.wdka.nl/mediadesign/File:Taxan_kpl710_x-y_plotter.pdf)
- [Tectronix 4662 Interactive Digital Plotter User Manual (1976)](https://archive.org/details/bitsavers_tektronix42InteractiveDigitalPlotterUserManualNov1_40423494)
- [Tectronix HC100 Instruction Manual (1987)](https://archive.org/details/manualsonline-id-212d14c3-7d2f-4e64-906f-1a22e86d1f35/)
- [Panasonic RK-P400C 4-Color Graphic Penwriter Manual](https://archive.org/details/panasonic-rk-p-400-c-manual)
- [Panasonic Penwriter Manual Excerpt: RS232 Protocol Section](https://archive.org/details/panasonicpenwriterprotocol)
- [(Unknown Brand) LP 2002 Photo Plotter Attachment Operating Manual (German)](https://archive.org/details/lp-2002-betriebsanleitung/) - LP 2002写真プロッター用アタッチメントのドイツ語取扱説明書です。実機写真は[Martin Bircher's thread](https://mastodon.social/@artandtech/109382879937442706)も参照してください。

### 印刷物 <a id="ephemera"></a>

旧来の広告、マーケティング資料、販促動画です。

- [Time Share Peripherals TSP-212 Brochure](https://archive.org/details/TNM_Time_Share_Peripherals_-_TSP-212_plotting_sys_20170630_0194)
- [Hewlett-Packard Journal Volume 29 Number 1](https://archive.org/details/Hewlett-Packard_Journal_Vol._29_No._1_1977-09_Hewlett-Packard) - HP モデル 9872A および 7221A ペンプロッターの開発に関する複数の記事。
- [Hewlett-Packard Journal Volume 32 Number 10](https://archive.org/details/Hewlett-Packard_Journal_Vol._32_No._10_1981-10_Hewlett-Packard) - HPモデル7580Aプロッターの開発記事を複数収録しています。
- [Hewlett-Packard Journal Volume 32 Number 11](https://archive.org/details/Hewlett-Packard_Journal_Vol._32_No._11_1981-11_Hewlett-Packard) - HPモデル7580Aプロッターの開発記事を複数収録しています。
- [Hewlett-Packard Journal Volume 33 Number 12 (1982)](https://archive.org/details/Hewlett-Packard_Journal_Vol._33_No._12_1982-12_Hewlett-Packard) - HP モデル 7470A プロッターの開発に関する複数の記事。
- [CalComp Precision Graphics System 900/728 Brochure (1970)](https://archive.org/details/TNM_CalComp_-_Precision_graphics_system_900-728_20170630_0196)
- [Digital Plotting Newsletter (1967)](https://archive.org/details/TNM_Digital_Plotting_Newsletter_march-april_1967__20171014_0114)
- [Versatec Printers and Plotters Brochure (1977)](https://archive.org/details/TNM_Versatec_printers_and_plotters_-_Versatec_a_X_20180227_0009)
- [Versatec Printer/Plotters, Plotters and Output Systems (1981)](https://archive.org/details/TNM_Printer-plotters_plotters_and_output_systems__20171113_0057)
- [Roland Users Group Volume 2 Number 4 (1984)](https://archive.org/details/RolandUsersGroupVolume2Number41984/page/n39/mode/2up) - _Computers and Plotters Take the Place of Drafting Tables and Pencils_ という記事（PDFページ40、実際のページ36）。
- [Omega-t Systems FasPlot Plotter Brochure](https://archive.org/details/TNM_Omega-t_Systems_-_FasPlot_Plotter_20170630_0254)
- [Commodore Computer Plotter CBM 8075 Brochure (German)](https://archive.org/details/Plotter_CBM8075_198x_Commodore_DE)
- [Strobe Model 100 Graphics Plotter Brochure (1980)](https://archive.org/details/TNM_Strope_Model_100_graphics_plotter_-_Strobe_In_20180506_0009)
- [Roland DG Plotter Ad in Byte Magazine Vol 12 No 4 (1987)](https://archive.org/details/byte-magazine-1987-04/page/n159/mode/2up) ([via @OldTechAdverts](https://twitter.com/OldTechAdverts/status/1454558415355850755))
- [Auerbach On Digital Plotters And Image Digitizers (1972)](https://archive.org/details/auerbachondigitalplottersandimagedigitizers) - プロッターとディジタイザに関する書籍。
- [CalComp Graphics Products Brochure (1981)](https://archive.org/details/TNM_CalComp_graphics_products_plotters_and_printe_20171101_0032)
- [CalComp Plotters in 1968](https://www.youtube.com/watch?v=AAc4VLR6-Dg) - フロアベッド式 CalComp プロッターとその出力を示すプロモーション動画。
- [Houston Instrument DMP-41 and DMP-42 Plotters Brochure](https://archive.org/details/hi-dmp-41-42-brochure)
- [Houston Instrument DMP-51/52 Series Brochure](https://archive.org/details/hi-dmp-51-52-brochure)
- [Houston Instrument Omnigraphic Plotter Brochure](https://archive.org/details/TNM_Omnigraphic_Plotter_20171016_0228)
- [Sweet-P Plotter Brochure and Price List](https://archive.org/details/bitsavers_enterCompuersonalPlotterprricelistBrochure_4929854) - 四ページのカラー広告ブローチャー（付属：推奨販売価格リスト）。
- [IEEE Electronic Systems News Autumn (1985)](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=5345111) - 三色ペンマンロボットプロッターのレビュー。
- [Apple II Business Graphics Film (1982)](https://archive.org/details/apple-ii-business-graphics) - ストローブ モデル 100 グラフィックスプロッターが4:57で棒グラフを描いている。
- [Elektor Magazine Selbstbauplotter MONDRIAN II (1990) (German)](https://archive.org/details/elektor_202310) - 旧来の広告、販促資料、紹介映像です。 [a model of this plotter on GrabCAD](https://grabcad.com/library/plotter-mondrian-1)
- [IBM 7374 and 7375 Color Plotter Brochure (PDF)](https://www.1000bit.it/ad/bro/ibm/IBM737xColorPlotters.pdf)

### 論文 <a id="papers"></a>

ペンプロッター、アート、関連分野の学術論文です。

- [Toward Aesthetic Guidelines for Paintings with the Aid of a Computer (1975) (paywall)](https://www.jstor.org/stable/1573236) - Vera Molnarによる、コンピューター支援絵画の美的指針を扱う論文です。
- [Pen Plotter as a Low-Cost Platform for Rapid Device Prototyping with Solution-Processable Nanomaterials (2023) (PDF)](https://onlinelibrary.wiley.com/doi/pdf/10.1002/adem.202300226)
- [Preparation of V2O5 Thin Film by Sol–Gel Technique and Pen Plotter Printing](https://www.proquest.com/docview/2791602751?sourcetype=Scholarly%20Journals)
- [PatternPortrait: Draw Me Like One of Your Scribbles (2024)](https://arxiv.org/abs/2401.13001)
- [Can I teach a robot to replicate a line art (2019)](https://arxiv.org/abs/1910.07860)
- [Tools, Tricks, and Hacks: Exploring Novel Digital Fabrication Workflows on #PlotterTwitter](https://dl.acm.org/doi/abs/10.1145/3411764.3445653) - プロッターコミュニティの新しいデジタルファブリケーション工程を研究した論文です。 [Video Summary](https://www.youtube.com/watch?v=xqhT-8ElJ68)
- [Vera Molnar's Computer Paintings](https://www.researchgate.net/publication/338896073_Vera_Molnar's_Computer_Paintings)

### 特許 <a id="patents"></a>

プロッター技術に関連する特許です。

- [Adaptor for universal X-Y plotter pen](https://patents.google.com/patent/US4943817)

## 講座 <a id="courses"></a>

プロッターと生成アートを詳しく扱う講座・チュートリアルです。

- [Painting with Plotters](https://www.eyesofpanda.com/project/painting_with_plotters/) - プロッターと生成アートを体系的に学ぶ講座です。

## コミュニティ <a id="community"></a>

他のプロッター・ドローボット愛好者と交流できる場所です。

- [PlotterArt Subreddit](https://www.reddit.com/r/PlotterArt)
- [AxiDraw Subreddit](https://www.reddit.com/r/axidraw)
- [Generative Art Subreddit](https://www.reddit.com/r/generative)
- [Plotter People](https://plotterpeople.github.io/) - 現地でのミートアップ（これまでにサンフランシスコとニューヨーク）で講演とプロッターのアートギャラリーが開催されている。
- [DrawingBots Discord Forum](https://discordapp.com/invite/XHP3dBg) - アクティブなコミュニティを持つディスコフォーラム。
- [PlotterFiles](https://plotterfiles.com/) - プロッター用SVGファイルを共有するコミュニティ。
- #PenPlotter - プロッター・ドローボットの利用者や制作者が交流するコミュニティです。 [Bluesky](https://bsky.app/search?q=%23PenPlotter) [Mastodon](https://mastodon.social/search?q=%23PenPlotter)

## 販売中のプロッター作品 <a id="plotter-art-for-sale"></a>

プロッター作品をオンラインで販売する作家です。

- [Adam Fuhrer](https://adamfuhrer.bigcartel.com)
- [AndyMakes](https://shop.andymakes.com/)
- [Arjan van der Meij](https://dutchplottr.nl/en/)
- [EmergentDesign](https://emergentdesign.bigcartel.com/products)
- [inconvergent](http://buy.inconvergent.net)
- [Ingrid Burrington](https://wares.lifewinning.com)
- [Michael Fogleman](https://www.michaelfogleman.com/plotter)
- [Michelle Chandra](https://www.dirtalleydesign.com/)
- [Paul Rickards](https://shop.paulrickards.com)
- [Pedro Alcocer](https://store.pedroalcocer.com/)

## その他のAwesomeリスト <a id="other-awesomes"></a>

さらに探索するための関連Awesomeリストです。

- [awesome-generative-art](https://github.com/kosmos/awesome-generative-art)
- [awesome-creative-coding](https://github.com/terkelg/awesome-creative-coding)
- [awesome-3d-engines-for-plotters](https://github.com/msurguy/awesome-3d-engines-for-plotters)
