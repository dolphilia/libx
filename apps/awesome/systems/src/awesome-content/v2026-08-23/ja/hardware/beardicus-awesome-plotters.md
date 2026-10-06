---
title: Awesome Plotters
description: ペンプロッターの機材、HPGL・G-codeソフトウェア、ベクターツール、フォント、解説、歴史資料、研究、コミュニティ、作品販売。
licenseSource: github-beardicus-awesome-plotters-readme-md
---
# Awesome Plotters

コンピューターで制御する描画機械やアートロボットは、コードやベクターパスに基づいて物理的に描画します。ペンプロッター、モーターコントローラー、アダプター、ペン、HPGL・G-code、機器制御、ベクターツール、単線フォントに加え、チュートリアル、歴史的なマニュアルや販促資料、研究、講座、コミュニティ、作品を販売する作家を探せます。

## はじめに <a id="getting-started"></a>

ペンプロッターを使い始めるための、短い資料集です。

- [What is a pen plotter 2022?](https://www.youtube.com/watch?v=J1NpYzETm3M) - 2022年時点の現代的なペンプロッターを紹介する動画。
- [An Intro to Pen Plotters](https://medium.com/quarterstudio/an-intro-to-pen-plotters-29b6bd4327ba) - 旧型HPGLプロッターを使い始めるための情報。
- [An Introduction to Pen Plotting](https://mrmrs.cc/writing/pen-plotting-intro/) - 現代的なペンプロッターを使い始めるための、別の入門記事。
- [Pen Plotter Programming: The Basics](https://medium.com/@fogleman/pen-plotter-programming-the-basics-ec0407ab5929) - パスの並べ替え、結合、簡略化を含む、ベクターパスのプログラミングの基本。
- [Pen Plotter Art & Algorithms](https://mattdesl.svbtle.com/pen-plotter-1) - プロッターで描画するジェネラティブなグラフィックスを作るための、2部構成の入門記事。
- [How to Draw Generative Art with an Axidraw Pen Plotter](https://www.dirtalleydesign.com/blogs/news/how-to-draw-prints-with-an-axidraw-pen-plotter) - AxiDraw以外にも使えるヒント、ペンのレビュー、3Dプリント用ツール。

## ハードウェア <a id="hardware"></a>

### プロッター <a id="plotters"></a>

製作・購入できるペンプロッター、歴史資料、修復プロジェクトです。

- [AxiDraw](https://shop.evilmadscientist.com/productsmenu/846) - Evil Mad Scientist製のペンプロッター。
- [NextDraw](https://bantamtools.com/collections/bantam-tools-nextdraw) - 原文で、Bantam Tools製の新しいAxiDrawと紹介されている。
- [ArtFrame](https://bantamtools.com/collections/artframe) - Bantam Tools製のフラットベッド式ペンプロッター。原文では頑丈な機種と説明されている。
- [Line-us](https://www.line-us.com) - Kickstarterで資金を調達した、小型のロボット描画アーム。
- [Drawing Robot](https://www.thingiverse.com/thing:2349232) - grblファームウェアを実行するArduino CNC Shieldコントローラーを備えた、3Dプリント可能なAxiDrawクローン。
- [4xiDraw](https://www.instructables.com/id/4xiDraw/) - grblファームウェアを実行するArduino CNC Shieldコントローラーを備えた、別の3Dプリント可能なAxiDrawクローン。
- [WaterColorBot](https://watercolorbot.com) - 水彩絵の具で描画するXYアートロボットとソフトウェア。
- [EggBot](https://egg-bot.com) - 卵形や球形の物体に描くペンプロッター。
- [HP Pen Plotters](https://www.hpmuseum.net/exhibit.php?class=4&cat=24) - HPGL標準を開発したメーカーの、旧型の卓上・床置きペンプロッター。原文では7475Aが広く使われ、通常eBayで入手できると説明されている。
- [Roland Pen Plotters](https://www.youtube.com/watch?v=6_pwzqPk6Gg) - 旧型のフラットベッド式HPGLペンプロッター。eBayで「roland dxy」を検索する案内を含む。
- [Blot](https://blot.hackclub.com) - Hack Club製のオープンソースDIYペンプロッター。ジェネラティブアート用のブラウザーエディターを備える。
- [BrachioGraph](https://www.brachiograph.art) - 棒、サーボ、Pythonを実行するRaspberry Piで作るプロッター。原文では安価でシンプルと説明されている。[制作者によるPyCon UKでの講演](https://www.youtube.com/watch?v=u4Jh1daCl60)も掲載。
- [Arduino CNC Drawing Machine](https://www.diymachines.co.uk/arduino-cnc-drawing-machine) - 動画による解説を備えた、3Dプリント製のAxiDraw型プロッター。原文では比較的シンプルと説明されている。
- [PlotterXY](https://github.com/jamescarruthers/PlotterXY) - 押出材、3Dプリント部品、3Dプリンター制御基板で作るcoreXYプロッター。制御基板は原文で安価と説明されている。
- [NextDraw](https://store.bantamtools.com/collections/bantam-tools-nextdraw) - [Bantam Tools](https://www.bantamtools.com)製のAxiDraw後継ペンプロッター。AxiDrawは原文で人気機種と紹介されている。
- [openBrushograph](https://github.com/openBrushograph/openBrushograph_hardware) - ブラシやペンによる自動描画向けに設計された、オープンソースで3Dプリント可能なXYガントリーとZステージ。
- [Lego-Pen-Plotter](https://github.com/Jormono1/Lego-Pen-Plotter) - 全てLEGOで作られ、PyBricksとPythonでプログラムするペンプロッター。
- [Makelangelo 5](https://www.marginallyclever.com/products/makelangelo-5/) - 壁、窓、イーゼルに描画するポーラーグラフロボット。
- [Reviving the Apple 410 Color Plotter](https://www.nycresistor.com/2017/12/13/reviving-the-apple-410-color-plotter/)
- [Apple-410](https://github.com/phooky/Apple-410) - Apple 410 Color Plotterのドキュメント、ドライバー、ROMダンプ。

### モーターコントローラー <a id="motor-controllers"></a>

ステッピングモーターを駆動し、ペンプロッターを制御するハードウェアです。

- [grblShield](https://github.com/synthetos/grblShield) - grblファームウェアを使って[Arduino](https://www.arduino.cc)をG-codeモーションコントローラーにするための、ステッピングモーター制御ハードウェア一式。[Adafruitでの案内](https://www.adafruit.com/product/1750)。
- [TinyG](https://github.com/synthetos/TinyG) - 6軸のG-codeモーション制御ハードウェア。原文では、より多機能で堅牢と説明されている。[Adafruitでの案内](https://www.adafruit.com/product/1749)。
- [Arduino CNC Shield](https://blog.protoneer.co.nz/arduino-cnc-shield) - grblShieldに似た、Arduino用のgrbl対応ステッピングモーター制御シールド。
- [Raspberry Pi CNC Hat](https://wiki.protoneer.co.nz/Raspberry_Pi_CNC) - ステッピングモーターのコントローラーとgrblを実行するマイクロコントローラーを備えた、Raspberry Pi用の拡張基板。Piのシリアル端子に接続する。
- [EBB Driver Board](https://shop.evilmadscientist.com/productsmenu/188) - 元はEggBot向けに設計された、USB接続の2系統ステッピングモーター制御基板。

### アクセサリー・アダプター <a id="accessories-and-adapters"></a>

ケーブル、シリアルアダプター、交換部品です。

- [WiFi232](http://biosrhythm.com/?page_id=1453) - DB25プラグを介してWi-FiとRS-232シリアルを接続し、シリアル接続のプロッターを無線制御する。
- [Plotter Cable Pinout](http://sites.music.columbia.edu/cmc/chiplotle/plotter_cable.pdf) - 大半のHP・Rolandプロッターで使えるケーブルの配線図。購入先を探すには、eBayやAmazonで`DB9 to DB25 Serial Null Modem Cable`などを検索する。
- [PlotAdapter](https://github.com/rhalkyard/plotadapter) - HPプロッター用のシリアル-GPIB変換器。Arduinoマイクロコントローラーを使い、シリアルHPGLを、一部の旧型HPプロッターが要求するGPIB/HP-IBへ変換する。
- [Replacement Pen Carousel Turret Carriage Holder for HP 7475A Plotter](https://obsoletetech.us/products/replacement-pen-carousel-turret-carriage-holder-for-hp-7475a-plotter) - 3Dプリント製の交換部品。
- [Replacement Geneva Drive Wheel Gear for HP 7475A Plotter Pen Carousel](https://obsoletetech.us/products/replacement-geneva-drive-wheel-gear-for-hp-7475a-plotter-pen-carousel) - 原文で壊れやすいとされる部品の、3Dプリント製の交換部品。

### ペン <a id="pens"></a>

ペン用アダプター、取付部品、推奨情報です。

- [Sharpie Fine Point Plotter Adapter](https://www.printables.com/model/156721-sharpie-fine-point-plotter-adapter) - 標準的なSharpieをHP-GLプロッターに取り付けるための、3Dプリント製アダプター。
- [Parametric 3d-Printable Plotter Pen Adapter](https://openjscad.xyz/#https://gist.githubusercontent.com/beardicus/d668c0f6b96be53d16dc/raw/plotter-pen-adapter.jscad) - さまざまなペン用のアダプターをプリントするための、調整可能なモデル。
- [Plotter Pen STL Models](https://www.printables.com/model/156722-plotter-pen) - 短い標準プロッターペンと長い標準プロッターペンのSTLモデル。原文では正確なモデルと説明されている。
- [Pens for AxiDraw](https://wiki.evilmadscientist.com/Pens_for_AxiDraw) - プロッターで使うのに適したペン。
- [Pens for EggBot](https://wiki.evilmadscientist.com/Pen_choices) - 卵やガラス向けのペンの推奨情報。プロッター全般にも使える情報を含む。
- [JetPens - The Best White Ink Pens](https://www.jetpens.com/blog/The-Best-White-Ink-Pens/pt/340) - 多数の白インクペンを、インクの被覆特性を示す写真とともにレビューする。

## ソフトウェア <a id="software"></a>

### HPGL

HPGLは、旧型ペンプロッターの大半と、多くの新型ビニールカッターで使われるテキストベースのプロトコルです。

- [Chiplotle](https://github.com/drepetto/chiplotle) - HPGLの生成とシリアル接続プロッターとの通信を行うPythonライブラリ。
- [Chiplotle3](https://github.com/cyprienh/chiplotle3) - Python 3.xとの互換性を持たせたChiplotleのフォーク。
- [HPGL Reference Guide](https://www.isoplotec.co.jp/HPGL/eHPGL.htm) - HTML形式のHPGLリファレンス。
- [HP 7475A Interfacing and Programming Manual](https://archive.org/details/HP7475AInterfacingandProgrammingManual) - HPGLの完全なリファレンスを含む、スキャン済みPDFマニュアル。
- [djipco/hpgl](https://github.com/djipco/hpgl) - HPGL対応プロッターやプリンターと通信するNode.jsライブラリ。
- [hp2xx](https://www.gnu.org/software/hp2xx) - HPGLを他のベクター形式やラスター形式へ変換するGNUツール。X11でのプレビューにも使える。
- [vec](https://github.com/anachrocomputer/vec) - タートルグラフィックスのインターフェースを備えた、HPGL生成用のCコード例。
- [d3-hpgl](https://github.com/aubergene/d3-hpgl) - [D3](https://d3js.org)ライブラリを使ってHPGLを出力する、HTML Canvas APIのアダプター。
- [HPGL Viewer](https://github.com/drskullster/HPGLViewer) - JavaScriptとHTML5 canvasを使ったHPGLビューアー。
- [HPGL Sender](https://github.com/LgHS/hpgl-sender) - HPGLのプレビューとプロッターへの送信を行うウェブインターフェース。
- [HPGLGraphics](https://github.com/ciaron/HPGLGraphics) - HPGLファイルを書き出すProcessingライブラリ。
- [processing2hpgl](https://github.com/awdriggs/processing2hpgl) - Processingスケッチ内からHPGLペンプロッターと直接通信するProcessingライブラリ。

### G-code

G-codeは、CNC機械を制御するテキストベースの標準です。産業機械向けに設計されましたが、多くのホビー用3Dプリンターのファームウェアで使われ、小規模なDIYプロジェクトにも普及しています。

- [grbl](https://github.com/grbl/grbl) - Atmega 328マイクロコントローラーとArduino向けのG-code解釈ファームウェア。原文では高性能と説明されている。
- [cncjs](https://github.com/cncjs/cncjs) - grbl、TinyGなどのG-codeファームウェアを実行するCNC機械を制御するウェブインターフェース。
- [node-gcode](https://github.com/ryansturmer/node-gcode) - Node.js製のG-codeインタープリターとシミュレーター。
- [svg2gcode](https://github.com/em/svg2gcode) - SVGをG-codeへ変換するNode.jsのコマンドラインツール。
- [svg2gcode](https://github.com/vishpat/svg2gcode) - SVGをG-codeへ変換するPythonツール。原文では高速と説明されている。
- [jscut](http://jscut.org/) - SVGをG-codeへ変換するウェブツール。
- [Universal-G-Code-Sender](https://github.com/winder/Universal-G-Code-Sender) - grblに対応した、Java製のクロスプラットフォームG-code送信ツール。
- [ChiliPeppr Hardware Fiddle](http://chilipeppr.com) - G-codeの可視化とハードウェア制御を行う、モジュール構成のウェブ作業環境。
- [gcode-generative-for-processing](https://github.com/o0morgan0o/gcode-generative-for-processing) - 単純な図形からG-codeを生成するProcessingライブラリ。Creality CR10での利用向けに設計されている。
- [gcodeplot](https://github.com/arpruss/gcodeplot) - SVGとHPGLを3軸CNC機械向けのG-codeへ変換するPythonツール。
- [fabnodes](https://extensions.blender.org/add-ons/fabnodes/) - ジオメトリノードのツールパスをG-codeとして出力するBlenderアドオン。

### プロッター制御 <a id="plotter-control"></a>

プロッターのハードウェアを制御するソフトウェアです。

- [axidraw](https://github.com/evil-mad/axidraw) - Inkscape用の公式AxiDraw拡張。
- [axi](https://github.com/fogleman/axi) - AxiDraw v3向けの非公式Pythonライブラリ。
- [bCNC](https://github.com/vlachoudis/bCNC) - grbl用のクロスプラットフォームG-code送信・CNC制御ソフトウェア。
- [xy](https://github.com/fogleman/xy) - Makeblock XY Plotter Robot Kit用のユーティリティ。
- [LaserGRBL](https://github.com/arkypita/LaserGRBL) - grblコントローラー用の、レーザー向けに最適化されたWindows GUI。ソレノイドでペンを上下させるDIYペンプロッターにも転用できる可能性がある。
- [Line-us Inkscape Plugin](https://github.com/Line-us/Inkscape-Plugin) - InkscapeからLine-usプロッターへ直接図形を送信する。
- [Line-us API Examples](https://github.com/Line-us/Line-us-Programming) - Line-usプロッターのG-code APIを使うコード例。
- [@beardicus/line-us](https://github.com/beardicus/line-us) - NodeやブラウザーからLine-usを制御するJavaScriptライブラリ。
- [PenPlotter](https://github.com/RickMcConney/PenPlotter) - repetierファームウェアを使うポーラーグラフのコントローラー。
- [Makelangelo-firmware](https://github.com/MarginallyClever/Makelangelo-firmware) - Makelangeloポーラーグラフロボット用のファームウェア。
- [RoboPaint](https://github.com/evil-mad/robopaint) - WaterColorBot用のソフトウェア。
- [AxiTurtle](https://github.com/ralphcrutzen/AxiTurtle) - ProcessingでAxiDrawを使うタートルグラフィックス。
- [GRBL-Plotter](https://github.com/svenhb/GRBL-Plotter) - SVG・DXFの読み込みと柔軟なペン上下制御を備えた、grblコントローラー用のプロッター向けWindows GUI。
- [saxi](https://github.com/nornagon/saxi) - AxiDraw用のドライバーとライブラリ。一定加速度の動作計画を使い、用紙に合わせて自動でサイズを調整する。
- [MP2300-Tools](https://github.com/Jan--Henrik/MP2300-Tools) - HPGLをGraphtecのGPGL形式へ変換するソフトウェアと、Graphtecプロッターのペンアダプター用CADファイル。
- [Inkcut](https://github.com/inkcut/inkcut) - 2Dプロッター、カッター、彫刻機、CNC機械を制御するアプリケーション。
- [plottie](https://github.com/mossblaser/plottie) - SVGを入力としてSilhouetteプロッターやカッターを制御するコマンドラインツール。
- [py_silhouette](https://github.com/mossblaser/py_silhouette) - Silhouetteプロッターやカッターを制御するPythonライブラリ。
- [pypenwriter](https://github.com/Lana-chan/pypenwriter) - SVG図形を変換してPanasonic PenWriterシリーズのタイプライター型プロッターへ送信するPythonスクリプト。

### ベクター作成 <a id="vector-creation"></a>

ベクター作品を一から作成したり、他の形式から変換したりするツールです。

- [Inkscape](https://inkscape.org) - クロスプラットフォームのオープンソースベクターグラフィックスエディター。原文では人気があると説明されている。
- [p5.js](https://p5js.org) - アーティスト、デザイナー、教育者、初心者がプログラミングに取り組みやすくするJavaScriptライブラリ。
- [Paper.js](http://paperjs.org) - ベクターグラフィックス用のスクリプティングライブラリ。原文では「スイスアーミーナイフ」と例えられている。
- [ln](https://github.com/fogleman/ln) - Goで書かれた、ベクター形式の3Dレンダラー。
- [autotrace](https://github.com/autotrace/autotrace) - ビットマップ画像をベクターグラフィックスへ変換する。
- [stipplegen](https://github.com/evil-mad/stipplegen) - ビットマップ画像から点描画を生成する。[ブログ記事](https://www.evilmadscientist.com/2012/stipplegen2)。
- [SquiggleDraw](https://github.com/gwygonik/SquiggleDraw/commits/master) - 画像からSVGファイルを作り、明るさに応じて正弦波の振幅を変える。
- [svgurt](https://svgurt.com) - PNGからSVGへの創作的な変換を試すウェブツール。
- [maptrace](https://github.com/mzucker/maptrace) - ラスター画像をトレースして、隙間のない多角形のベクターマップを生成する。
- [Drawbot_image_to_gcode_v2](https://github.com/Scott-Cooper/Drawbot_image_to_gcode_v2) - 描画ロボット用のG-codeを生成する。
- [blackstripes](https://github.com/fullscreennl/blackstripes-python-extensions) - PNG画像をSVGの線画へ変換する。
- [penplot](https://github.com/mattdesl/penplot) - JavaScriptでプロッターアートを作るための開発環境。
- [penkit](https://github.com/paulgb/penkit) - 線を使ったSVGグラフィックスを作成するPythonライブラリ。
- [generativeExamples](https://github.com/digitalcoleman/generativeExamples) - プロッターで描画可能なPDFを生成するProcessingコード例。
- [Let's make map](https://svg-exporter.netlify.app) - MapzenタイルからSVG地図を出力するウェブツール。
- [LineDream](https://linedream.marcrleonard.com/) - SVGを出力できるPython用のジェネラティブアートライブラリ。
- [SuperformulaSVG for web](https://jasonwebb.github.io/SuperformulaSVG-for-web) - ジェネラティブな線画を作るウェブアプリ。
- [scribbleplot](https://github.com/bleeptrack/scribbleplot) - Processingで画像を落書き風に変換する。
- [Maker.js](https://maker.js.org) - CNC機械やレーザーカッター用の2Dベクター図形を作成するライブラリ。
- [Turtletoy](https://turtletoy.net) - SVG出力に対応した、ブラウザー用のJavaScriptタートルグラフィックスAPI。
- [cozyvec](https://github.com/brubsby/cozyvec) - プロッターアートやツイート用プロットのための、ウェブ版または単独動作のターミナル環境。
- [makio135/plotter](https://observablehq.com/collection/@makio135/plotter) - プロッター向け作品を集めた[Observable](https://observablehq.com/)ノートブック集。
- [PlotterFun](https://mitxela.com/plotterfun/) - SquiggleDrawに似た、ブラウザーで使える画像からSVGへの変換ツール。
- [SVG.js](https://svgjs.dev/) - SVGの作成・操作・アニメーションを行う、外部依存のないライブラリ。原文では軽量と説明されている。
- [Components AI](https://components.ai/) - 生成空間を探索するための、実験的な計算による設計プラットフォーム。
- [DrawingBotV3](https://github.com/SonarSonic/DrawingBotV3) - 画像を線画へ変換するクロスプラットフォームのソフトウェア。
- [linedraw](https://github.com/LingDong-/linedraw) - 画像をスケッチ風のベクター線画へ変換するPythonツール。
- [plotter.vision](https://plotter.vision/) - STLファイルの隠線を除去し、プロッターで描画可能なSVGを生成するインタラクティブなウェブサイト。赤青の3D眼鏡にも対応。
- [plotting-maps](https://github.com/piebro/plotting-maps) - 描画用のOpenStreetMapのSVG地図を作るウェブツール。
- [ThreadPlotter](https://github.com/LiciaHe/threadPlotter) - X-Yプロッターで繊細なパンチニードル刺繍を設計・制作するためのツールキット。
- [PINTR](https://javier.xyz/pintr) - 画像から、プロッターで描画可能なランダムな線画を生成する。
- [REVDANCATT Plotter Tools](https://revdancatt.com/penplotter/) - SVG出力に対応した、ウェブ上のペンプロッターツール。
- [Flow Lines](https://msurguy.github.io/flow-lines/) - SVGのパスやポリラインで流線を生成するツール。
- [UJI](https://doersino.github.io/uji/) - SVG出力に対応した、ウェブ上のジェネラティブアートツール。
- [Rad Lines](https://msurguy.github.io/rad-lines/) - SVG出力に対応した、放射状の線をベクター形式で生成するウェブツール。
- [Peak Map](https://anvaka.github.io/peak-map/) - 地図データからリッジラインチャートを生成するウェブツール。

### ベクターユーティリティ <a id="vector-utilities"></a>

ベクター形式のファイルを操作・最適化するツールです。

- [svgsort](https://github.com/inconvergent/svgsort) - SVG描画用のパスを計画し、ペンを上げたまま移動する時間を減らす。
- [svgoutline](https://github.com/mossblaser/svgoutline) - SVGからストロークや輪郭を線分として抽出するPythonライブラリ。
- [svgo](https://github.com/svg/svgo) - SVGファイルを最適化するNode.js製のツール。
- [Polargraph Optimizer](https://github.com/ezheidtmann/polargraph-optimizer) - ポーラーグラフの描画計画を最適化する。
- [penkit-optimize](https://github.com/paulgb/penkit/tree/master/optimizer) - 車両ルーティングのソルバーで描画時間を最小化するSVG最適化ツール。
- [svg-crowbar](https://github.com/NYTimes/svg-crowbar) - HTML文書からSVGを抽出する、Chrome専用のブックマークレット。
- [vpype](https://github.com/abey79/vpype) - プロッター向けのPython製CLIツール。拡大・縮小やパスの最適化など、SVGの生成・操作を行う。
- [SVG Cropper](https://msurguy.github.io/svg-cropper-tool/) - 基本図形、独自の形状、他のSVGを使ってSVGを切り抜くブラウザーツール。

### フォント <a id="fonts"></a>

単線ベクターフォント、いわゆる「彫刻用フォント」です。

- [Summary of single line fonts](http://imajeenyus.com/computer/20150110_single_line_fonts/index.shtml) - 単線フォントの情報と、関連資料やフォントへのリンク。
- [Hershey Vector Font](http://paulbourke.net/dataformats/hershey) - 1960年代のベクターフォントを`.fnt`形式で提供する。フォントの元のデータ形式の概要も掲載。
- [hershey-fonts](https://github.com/kamalmostafa/hershey-fonts) - HersheyフォントのCライブラリと元のフォントデータ。
- [svg-fonts](https://gitlab.com/oskay/svg-fonts) - 主にInkscapeの[Hershey Text](https://gitlab.com/oskay/hershey-text)プラグインで使う、SVG形式の単線フォント。
- [CNC Text Tool](https://msurguy.github.io/cnc-text-tool/) - SVG出力に対応した、ブラウザー用のHershey Textツール。
- [hf2gcode](https://github.com/Andy1978/hf2gcode) - Hersheyフォントを使って、テキストからG-codeを生成する。
- [FifteenTwenty: Commodore 1520 plotter font](https://github.com/scruss/FifteenTwenty) - 元のROMからこのフォントを作成した過程を解説する[ブログ記事](https://scruss.com/blog/2016/04/23/fifteentwenty-commodore-1520-plotter-font/)。
- [Pulling Teeth From a Corpse: Extracting the Vector Font From the Apple 410 Color Plotter](https://www.nycresistor.com/2017/12/29/pulling-teeth-from-a-corpse-extracting-the-vector-font-from-the-apple-410-color-plotter/)

## 着想・解説・研究 <a id="inspiration-instruction-and-research"></a>

ブログ記事、解説記事、チュートリアル、ギャラリー、動画などです。

- [On Generative Algorithms](https://inconvergent.net/generative) - ジェネラティブなアルゴリズムを解説する13部構成の記事。
- [Roland DG DXY-990](https://hackaday.io/project/12276-roland-dg-dxy-990) - Rolandのフラットベッド式プロッターのクイックスタートガイド。
- [The Cohen-Sutherland Line Clipping Algorithm](https://sighack.com/post/cohen-sutherland-line-clipping-algorithm) - Cohen-Sutherlandの線分クリッピングアルゴリズムの詳しい説明と例。
- [Vera Molnár](https://www.surfacemag.com/articles/vera-molnar-in-thinking-machines-at-moma) - 原文で、この分野の初期の人物と紹介されているプロッターアーティスト。
- [Hektor](http://juerglehni.com/works/hektor) - 2002年のケーブル駆動の描画ロボット。原文では、この方式の元祖と紹介されている。
- [Surface Projection](https://nb.paulbutler.org/surface-projection/) - Pythonとpenplotを使った、表面投影と隠線除去の解説。
- [Fractal Generation with L-Systems](https://nb.paulbutler.org/l-systems/) - 線を使ったフラクタルグラフィックスを作る技法。
- [Introduction to TSP art](https://wiki.evilmadscientist.com/TSP_art) - 巡回セールスマン問題を利用した、単一のパスで描くアートの資料。
- [Hidden wireframe removal](https://trmm.net/Hidden_Wireframe) - STLファイルのワイヤフレーム除去に関する解説とコードへのリンク。
- [The Best XY Plotters in 2020](https://all3dp.com/2/pen-plotters-best-xy-plotters/) - AxiDrawやそのクローンの概要と、DIYの選択肢。
- [Orbis Tertius](https://www.glkitty.com/pages/orbistertius.html) - 火星の地形をプロッターで出力する、没入型のデジタルインスタレーション。
- [Tech Tangents: Plotting For The First Time - HP 7470A](https://www.youtube.com/watch?v=tk4c4WMZJZ8) - HP 85コンピューターからHP 7470Aを操作する様子を紹介する動画。
- [CuriousMarc: HP 7475A Plotter and HPGL Demo](https://www.youtube.com/watch?v=Tr7Mbw9gLpk) - HP 7475Aでデモを描画する動画。
- [CuriousMarc: Refilling or Replacing Vintage HP Plotter Pens](https://www.youtube.com/watch?v=h-oj4HrTH14) - 旧型HPプロッター用ペンの分解、清掃、インク補充を紹介する動画。
- [Commodore 1520 Plotter Demonstration](https://www.youtube.com/watch?v=QwPTluBvKLU) - Commodore 1520プロッターの動作動画。カバーを外して機構を映す場面も含む。
- [Tech Tangents: Gold Standard Plotter - HP 7475A](https://www.youtube.com/watch?v=8785ktWD7vQ) - HPGLとプロッターの歴史、およびIBM 5160マイクロコンピューターからHP 7475Aを操作する様子を紹介する動画。
- [curiousmarc.com: HP 7475A Plotter](https://www.curiousmarc.com/computing/hp-7475a-plotter) - HP 7475Aの情報、当時の販促資料、描画ファイル、3本のYouTube動画、3Dプリント可能な交換部品。
- [From Lettering Guides to CNC Plotters](https://www.typotheque.com/articles/from-lettering-guides-to-cnc-plotters) - 「A Brief History of Technical Lettering Tools」という、製図用レタリング器具の歴史を扱う記事。
- [Building an interactive plotter art installation](https://lostpixels.io/writings/building-interactive-plotter-art) - SIGGRAPH 2023のインタラクティブなプロッターアート展示についての記録。動画を含む。
- [Taxan KPL 710 Demo Plot](https://www.youtube.com/watch?v=Xms3sZONQjo) - Taxan KPL 710がデモを描画する様子を、手持ちのカメラで撮影した動画。
- [Sweet-P Six Shooter SP-600 Plotter Demonstration](https://www.youtube.com/watch?v=xE9LVOMbKxk) - Sweet-P SP-600がデモを描画する動画。
- [Bottle Plotter](https://vgnotepad.blogspot.com/2024/04/bottle-plotter.html) - ワインボトルに描く円筒形ペンプロッターを製作するブログ記事。
- [Buildlog.net Atari 1020 Plotter Retrofit](https://www.buildlog.net/blog/2019/10/inktober-project-2019-post-5/) - Atari 1020プロッターをESP32ベースのGRBLコントローラーで使うよう改造する、ブログ記事と動画。
- [Texas Instruments HX-1000 Plotter Photos](http://www.hexbus.com/TI-99_4A_Home_Computer_Page/Hexbus_HX-1000_Printer_Plotter.html) - プロッターの外観、内部、パッケージの写真ギャラリー。
- [Making cheap HP plotter pens](https://scruss.com/blog/2014/04/06/making-cheap-hp-plotter-pens-yet-another-hp-gl-viewer/) - 主にビニールカッターの部品をペンホルダーとして使う方法を扱うブログ記事。
- [Marcel Schwittlick and The Long Run](https://www.artxcode.io/journal/marcel-schwittlick-the-long-run) - Marcel Schwittlickへのインタビューと、その作品や作業場の写真・動画。
- [Lars Wander and Mixing Paint With Code](https://www.artxcode.io/journal/lars-wander-interview) - Lars Wanderへのインタビューと、アート作品・動画。
- [Flatulence, Crystals, and Happy Little Accidents by Nick Fitzgerald (RustConf 2019)](https://www.youtube.com/watch?v=Ho3xr4b60Zg) - Rustそのものの話は少なく、ジェネラティブアートとペンプロッターの創作過程を中心に扱うRustConf講演。
- [Recreating Retro Plotter Art, by Sher Minn (Plotter People #1)](https://www.youtube.com/watch?v=OR_TzMFhv50) - コンピューターとプロッターの歴史を扱うカンファレンス講演。
- [20+ Questions About My Plotter Painting Practice](https://www.eyesofpanda.com/project/plotter_painting_q_a/) - 絵画的な描画について詳しく述べるQ&A形式のブログ記事。
- [How to Watercolor Paint with a Robotic Drawing Machine: An Interview with Licia He](https://www.dirtalleydesign.com/blogs/news/how-to-watercolor-painting-with-a-robotic-drawing-machine-an-interview-with-licia-he)
- [300 Days with Plotters](https://liciahe.medium.com/300-days-with-plotters-14159ab64034) - Licia Heによる100日間の描画チャレンジのブログ記事。原文では成功したチャレンジと紹介されている。
- [Roland DXY 1300 Plotter Self Test](https://www.youtube.com/watch?v=BMVq8vuH4sw)
- [Vintage Aritma 0507 Plotter drawing Sierpinski triangles in one stroke](https://www.youtube.com/watch?v=kfL3K8mQp5I) - Aritma Minigraf 0507の動画。
- [Plotter (Artima Minigraf 0507)](https://www.youtube.com/watch?v=Xso0gfLp8IE&t=34s)
- [https://jiristepanovsky.cz/project.php?p=13plotter](https://jiristepanovsky.cz/project.php?p=13plotter) - チェコスロバキア製Aritma Minigraf 0507プロッターのブログ記事。
- [Another drawing on Aritma Minigraf 0507](https://www.youtube.com/watch?v=EwFyIusdH7g)
- [Aritma Minigraf 0507 Plotting Space Shuttle](https://www.youtube.com/watch?v=YY0ivdyhLpo)
- [Drawing an Etch-Mask Directly onto a PCB using a Vintage Plotter](https://www.youtube.com/watch?v=nkxiFXCnbj8&t=131s) - 動画の説明欄に、このプロッターの詳しい情報が掲載されている。
- [OrCAD 386 and a plotter Colorgraf Aritma 512](http://simandl.cz/stranky/elektro/spoje/pcb.htm) - Colorgraf 512プロッターとOrCAD 386でプリント基板を作る方法の記事。
- [Early Computer Art in the 50s and 60s](https://www.amygoodchild.com/blog/computer-art-50s-and-60s) - プロッターに関係する多くのアーティストを紹介する、美術史の記事。
- [Coding My Handwriting](https://www.amygoodchild.com/blog/cursive-handwriting-in-javascript) - p5.jsや独自のツールで手書き文字を生成する方法の解説。

## マニュアル・販促資料・論文・特許 <a id="manuals-ephemera-papers-and-patents"></a> <a id="マニュアル印刷物論文特許"></a>

スキャン済みのプロッターマニュアル、販促資料、学術論文、特許です。多くは[Internet Archive](https://archive.org)で公開されています。

### マニュアル <a id="manuals"></a>

企業名・製品名のアルファベット順です。

- [Apple Color Plotter User's Manual](https://archive.org/details/AppleColorPlotter)
- [Aritma Colorgraf 512](http://simandl.cz/stranky/elektro/colorgraf/colorgraf_a.htm) - スキャン済みの回路図とマニュアルを掲載するウェブサイト。
- [Atari 1020 Color Printer Owner's Guide (1982)](https://archive.org/details/atari-1020-color-printer) - 原文では、より高品質なスキャンとして[buildlog.netのPDF](https://www.buildlog.net/blog/wp-content/uploads/2019/09/atari-1020-color-printer-owners-guide.pdf)も案内している。
- [Atari 1020 Color Printer Field Service Manual (1983)](https://archive.org/details/atari1020colorprinterfieldservicemanualrev.011983atari)
- [CalComp Artisan Plus 1023/1025/1026 User's Guide (1990)](https://archive.org/details/calcomp-artisan-plus-1023-1025-1026-users-guide)
- [Programming CalComp Pen Plotters (1968)](https://archive.org/details/bitsavers_calcompProlottersJun68_2464236)
- [Commodore 1520 Printer Plotter Manual (1983)](https://archive.org/details/1520PrinterPlotterUsersManualStyleA)
- [Commodore 1520 Printer Plotter Manual](https://archive.org/details/1520PrinterPlotterusersManualStyleB)
- [Control Data 165/165-2 Plotter Manual](https://archive.org/details/bitsavers_cdc160139c_4086972)
- [Esterline Angus Spartan X-Y Recorder Instruction Manual](https://archive.org/details/manualsplus_03665) - リビジョン1178。
- [Esterline Angus Spartan X-Y Recorder Instruction Manual (1980)](https://archive.org/details/manualsplus_03659) - リビジョン1080、1178、0480。
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
- [Mutoh ET202 Scriber (ドイツ語)](https://archive.org/details/mutoh-et202-leichtgemacht)
- [Olivetti PL10 Microplotter User Guide (1983)](https://archive.org/details/olivettipl10microplotter)
- [Olivetti P6060 Programming Manual (1979) (イタリア語)](https://archive.org/details/olivettip6060prestazionigrafiche)
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
- [Roland DPX-3700A DPX-2700A User's Manual (Rolandから直接ダウンロード)](https://downloadcenter.rolanddg.com/contents/manuals/DPX-3700A+2700A_USE_E_R8.pdf)
- [Roland XY Plotter DXY-1350A DXY-1150A User's Manual (1997)](https://archive.org/details/manualzilla-id-5691908)
- [Rotring Tubular Plotter Points Practical Tips and Information](https://archive.org/details/rotingtubularplotterpointprakticaltipsandinformation)
- [Rotring NC-scriber CS 50 Operating Instructions (1989)](https://archive.org/details/rotring_NC-scriber_CS_50_Operating_Instructions)
- [SEGA SP-400 Operation Manual](https://archive.org/details/sega-sp-400) - 原文では、アーカイブ上でページをめくる本の形式では表示されないが、元のページスキャンはダウンロードできると説明されている。
- [Sekonic SPL-450+/SPL-455 User Manual (1990) (ドイツ語)](https://archive.org/details/sekonicspl450spl455)
- [Siemens C1613 Plotter Manual (ドイツ語)](https://archive.org/details/SiemensC1613Manual)
- [Silver Reed Colour PenGraph EB-50 Operating Manual (1984)](https://archive.org/details/silver-reed-colour-pengraph-eb-50-operating-manual)
- [Taxan X-Y Plotter KPL 710 Instruction Manual](https://pzwiki.wdka.nl/mediadesign/File:Taxan_kpl710_x-y_plotter.pdf)
- [Tectronix 4662 Interactive Digital Plotter User Manual (1976)](https://archive.org/details/bitsavers_tektronix42InteractiveDigitalPlotterUserManualNov1_40423494)
- [Tectronix HC100 Instruction Manual (1987)](https://archive.org/details/manualsonline-id-212d14c3-7d2f-4e64-906f-1a22e86d1f35/)
- [Panasonic RK-P400C 4-Color Graphic Penwriter Manual](https://archive.org/details/panasonic-rk-p-400-c-manual)
- [Panasonic Penwriter Manual Excerpt: RS232 Protocol Section](https://archive.org/details/panasonicpenwriterprotocol)
- [(メーカー不明) LP 2002 Photo Plotter Attachment Operating Manual (ドイツ語)](https://archive.org/details/lp-2002-betriebsanleitung/) - 実機の写真を掲載する[Martin Bircherのスレッド](https://mastodon.social/@artandtech/109382879937442706)も参照。

### 歴史的な販促資料 <a id="ephemera"></a> <a id="印刷物"></a>

当時の広告、販促資料、プロモーション動画です。

- [Time Share Peripherals TSP-212 Brochure](https://archive.org/details/TNM_Time_Share_Peripherals_-_TSP-212_plotting_sys_20170630_0194)
- [Hewlett-Packard Journal Volume 29 Number 1](https://archive.org/details/Hewlett-Packard_Journal_Vol._29_No._1_1977-09_Hewlett-Packard) - HP Model 9872A・7221Aペンプロッターの開発に関する複数の記事。
- [Hewlett-Packard Journal Volume 32 Number 10](https://archive.org/details/Hewlett-Packard_Journal_Vol._32_No._10_1981-10_Hewlett-Packard) - HP Model 7580Aプロッターの開発に関する複数の記事。
- [Hewlett-Packard Journal Volume 32 Number 11](https://archive.org/details/Hewlett-Packard_Journal_Vol._32_No._11_1981-11_Hewlett-Packard) - HP Model 7580Aプロッターの開発に関する複数の記事。
- [Hewlett-Packard Journal Volume 33 Number 12 (1982)](https://archive.org/details/Hewlett-Packard_Journal_Vol._33_No._12_1982-12_Hewlett-Packard) - HP Model 7470Aプロッターに関する複数の記事。
- [CalComp Precision Graphics System 900/728 Brochure (1970)](https://archive.org/details/TNM_CalComp_-_Precision_graphics_system_900-728_20170630_0196)
- [Digital Plotting Newsletter (1967)](https://archive.org/details/TNM_Digital_Plotting_Newsletter_march-april_1967__20171014_0114)
- [Versatec Printers and Plotters Brochure (1977)](https://archive.org/details/TNM_Versatec_printers_and_plotters_-_Versatec_a_X_20180227_0009)
- [Versatec Printer/Plotters, Plotters and Output Systems (1981)](https://archive.org/details/TNM_Printer-plotters_plotters_and_output_systems__20171113_0057)
- [Roland Users Group Volume 2 Number 4 (1984)](https://archive.org/details/RolandUsersGroupVolume2Number41984/page/n39/mode/2up) - 36ページ（PDFでは40ページ）の「Computers and Plotters Take the Place of Drafting Tables and Pencils」という記事。
- [Omega-t Systems FasPlot Plotter Brochure](https://archive.org/details/TNM_Omega-t_Systems_-_FasPlot_Plotter_20170630_0254)
- [Commodore Computer Plotter CBM 8075 Brochure (ドイツ語)](https://archive.org/details/Plotter_CBM8075_198x_Commodore_DE)
- [Strobe Model 100 Graphics Plotter Brochure (1980)](https://archive.org/details/TNM_Strope_Model_100_graphics_plotter_-_Strobe_In_20180506_0009)
- [Roland DG Plotter Ad in Byte Magazine Vol 12 No 4 (1987)](https://archive.org/details/byte-magazine-1987-04/page/n159/mode/2up) ([@OldTechAdverts経由](https://twitter.com/OldTechAdverts/status/1454558415355850755))
- [Auerbach On Digital Plotters And Image Digitizers (1972)](https://archive.org/details/auerbachondigitalplottersandimagedigitizers) - プロッターとデジタイザーについての書籍。
- [CalComp Graphics Products Brochure (1981)](https://archive.org/details/TNM_CalComp_graphics_products_plotters_and_printe_20171101_0032)
- [CalComp Plotters in 1968](https://www.youtube.com/watch?v=AAc4VLR6-Dg) - フラットベッド式CalCompプロッターとその描画結果を紹介する販促動画。
- [Houston Instrument DMP-41 and DMP-42 Plotters Brochure](https://archive.org/details/hi-dmp-41-42-brochure)
- [Houston Instrument DMP-51/52 Series Brochure](https://archive.org/details/hi-dmp-51-52-brochure)
- [Houston Instrument Omnigraphic Plotter Brochure](https://archive.org/details/TNM_Omnigraphic_Plotter_20171016_0228)
- [Sweet-P Plotter Brochure and Price List](https://archive.org/details/bitsavers_enterCompuersonalPlotterprricelistBrochure_4929854) - 希望小売価格表を添えた、4ページのカラー販促パンフレット。
- [IEEE Electronic Systems News Autumn (1985)](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=5345111) - 3色のPenmanロボットプロッターのレビュー。
- [Apple II Business Graphics Film (1982)](https://archive.org/details/apple-ii-business-graphics) - 4:57に、Strobe Model 100 Graphics Plotterが棒グラフを描く場面がある。
- [Elektor Magazine Selbstbauplotter MONDRIAN II (1990) (ドイツ語)](https://archive.org/details/elektor_202310) - [GrabCAD上のこのプロッターのモデル](https://grabcad.com/library/plotter-mondrian-1)も参照。
- [IBM 7374 and 7375 Color Plotter Brochure (PDF)](https://www.1000bit.it/ad/bro/ibm/IBM737xColorPlotters.pdf)

### 論文 <a id="papers"></a>

ペンプロッター、アート、関連分野の学術論文です。

- [Toward Aesthetic Guidelines for Paintings with the Aid of a Computer (1975) (有料アクセス)](https://www.jstor.org/stable/1573236) - Vera Molnar著。
- [Pen Plotter as a Low-Cost Platform for Rapid Device Prototyping with Solution-Processable Nanomaterials (2023) (PDF)](https://onlinelibrary.wiley.com/doi/pdf/10.1002/adem.202300226)
- [Preparation of V2O5 Thin Film by Sol–Gel Technique and Pen Plotter Printing](https://www.proquest.com/docview/2791602751?sourcetype=Scholarly%20Journals)
- [PatternPortrait: Draw Me Like One of Your Scribbles (2024)](https://arxiv.org/abs/2401.13001)
- [Can I teach a robot to replicate a line art (2019)](https://arxiv.org/abs/1910.07860)
- [Tools, Tricks, and Hacks: Exploring Novel Digital Fabrication Workflows on #PlotterTwitter](https://dl.acm.org/doi/abs/10.1145/3411764.3445653) - プロッターコミュニティの新しい制作工程を研究する論文。[要約動画](https://www.youtube.com/watch?v=xqhT-8ElJ68)。
- [Vera Molnar's Computer Paintings](https://www.researchgate.net/publication/338896073_Vera_Molnar's_Computer_Paintings)

### 特許 <a id="patents"></a>

プロッター技術に関連する特許です。

- [Adaptor for universal X-Y plotter pen](https://patents.google.com/patent/US4943817)

## 講座 <a id="courses"></a>

プロッターとジェネラティブアートを詳しく扱う講座・チュートリアルです。

- [Painting with Plotters](https://www.eyesofpanda.com/project/painting_with_plotters/) - Licia Heによる講座。原文では制作途中と説明されている。

## コミュニティ <a id="community"></a>

プロッターや描画ロボットの愛好者と交流できる場所です。

- [PlotterArt Subreddit](https://www.reddit.com/r/PlotterArt)
- [AxiDraw Subreddit](https://www.reddit.com/r/axidraw)
- [Generative Art Subreddit](https://www.reddit.com/r/generative)
- [Plotter People](https://plotterpeople.github.io/) - 講演とプロッターアートのギャラリーを伴う、対面のミートアップ。原文では、それまでの開催地としてサンフランシスコとニューヨークが挙げられている。
- [DrawingBots Discord Forum](https://discordapp.com/invite/XHP3dBg) - 原文でコミュニティが活発と説明されているDiscordフォーラム。
- [PlotterFiles](https://plotterfiles.com/) - プロッター用SVGファイルを共有するコミュニティ。
- #PenPlotter - [Bluesky](https://bsky.app/search?q=%23PenPlotter)と[Mastodon](https://mastodon.social/search?q=%23PenPlotter)のハッシュタグ。原文では、プロッターに関する交流が活発と説明されている。

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

さらに調べるための、関連するAwesomeリストです。

- [awesome-generative-art](https://github.com/kosmos/awesome-generative-art)
- [awesome-creative-coding](https://github.com/terkelg/awesome-creative-coding)
- [awesome-3d-engines-for-plotters](https://github.com/msurguy/awesome-3d-engines-for-plotters)
