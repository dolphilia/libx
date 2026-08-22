---
title: "desiderantes/awesome-vala"
description: "desiderantes/awesome-vala の日本語訳（人手レビュー前）"
licenseSource: "github-desiderantes-awesome-vala-readme-md"
---

# Awesome Vala [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="vala.svg" align="right" width="100">](https://vala.dev)

[Vala](https://vala.dev/)向けのリソースを集めたリスト。Valaは、GLibとGObjectを活用して追加のランタイム要件を課すことなく、モダンな高水準抽象化を用いるプログラミング言語です。

## 目次

- [アプリ](#apps)
    - [暗号とセキュリティ](#cryptography--security)
    - [デザインツール](#design-tools)
    - [開発ツール](#development-tools)
    - [ゲーム](#games)
    - [インターネットブラウザー](#internet-browsers)
    - [音楽](#music)
    - [パーソナライズ](#personalization)
    - [生産性](#productivity)
    - [システムツール](#system-tools)
    - [仮想化](#virtualization)
    - [天気](#weather)
- [CLIツール](#cli-tools)
- [エディタープラグイン](#editor-plugins)
- [言語サーバー](#language-servers)
- [ライブラリ](#libraries)
    - [コマンドライン](#command-line)
    - [並行処理](#concurrency)
    - [暗号とセキュリティ](#cryptography--security-1)
    - [データ構造とデータ型](#data-structures--data-types)
    - [データベース](#databases)
    - [グラフィックスライブラリ](#graphics-libraries)
    - [GUIプログラミング](#gui-programming)
    - [IoCと依存性注入](#ioc-and-dependency-injection)
    - [マルチメディア処理](#multimedia-processing)
    - [数値計算](#numerical-computation)
    - [テンプレート](#templating)
    - [テキスト処理](#text-processing)
    - [ウェブ開発](#web-development)
    - [XMLとデータシリアライゼーション](#xml--data-serialization)

## アプリ

### 暗号とセキュリティ

- [Integrity Check](https://gitlab.com/vinarisoftware/integrity-check-gtk) - ファイルの検証サム（MD5、SHA1、SHA256）を取得し、作成者が提供した検証サムと比較するために設計されたVala・GTK製Linuxアプリケーション。

### デザインツール

- [Akira](https://github.com/akiraux/Akira) - ValaとGTKで構築されたUI・UXデザイン向けネイティブLinuxアプリ。
- [Birdfont](https://github.com/johanmattssonm/birdfont) - TTF、EOT、SVG、BIRDFONT形式のフォントを作るフォントエディター。

### 開発ツール

- [GitG](https://gitlab.gnome.org/GNOME/gitg) - [git](https://git-scm.com/)向けグラフィカルユーザーインターフェース。
- [Kangaroo](https://github.com/dbkangaroo/kangaroo) - 人気データベース向けのAI搭載SQLクライアント・管理ツール。
- [VAMM (Vinari OS Apache & MariaDB Manager)](https://gitlab.com/XavierEduardo99/vamm-vinari-software) - GTK 3 GUIを使いLAMPサービスを管理する。

### ゲーム

- [GameHub](https://github.com/tkashkin/GameHub) - すべてのゲームを統合するライブラリ。
- [High Score (GNOME Games)](https://gitlab.gnome.org/World/highscore) - GNOMEデスクトップ向けレトロゲームアプリケーション。
- [Sage](https://github.com/antolius/sage) - elementary OS向けに作られたコード解読ゲーム。
- [Warble](https://github.com/avojak/warble) - ValaとGtkで構築されたelementary OS向けネイティブLinux単語当てゲーム。

### インターネットブラウザー

- [Starfish](https://github.com/starfish-app/Starfish) - elementary OS向けGeminiブラウザー。

### 音楽

- [g4music](https://gitlab.gnome.org/neithern/g4music) - GTK4で書かれた、美しく高速で流麗な軽量音楽プレイヤー。

### パーソナライズ

- [Korembi](https://github.com/cheesecakeufo/komorebi) - Linux向けの美しくカスタマイズ可能な壁紙マネージャー。

### 生産性

- [Annotator](https://github.com/phase1geo/Annotator) - よりよいコミュニケーションのために画像へ注釈を付ける。
- [Badger](https://github.com/elfenware/badger) - 長時間座って画面を見続けないよう自分に知らせる。
- [Blackbox](https://gitlab.gnome.org/raggesilver/blackbox) - 美しいGTK 4ターミナル。
- [Dino](https://github.com/dino/dino) - GTK+/Valaを使うモダンなJabber/XMPPクライアント。
- [Flowtime](https://github.com/Diego-Ivan/Flowtime) - GTK4 Libadwaitaのポモドーロタイマー。
- [geary](https://gitlab.gnome.org/GNOME/geary) - GNOME 3デスクトップ向けに会話を中心として構築されたメールアプリケーション。
- [GNOME Calculator](https://gitlab.gnome.org/GNOME/gnome-calculator) - GNOMEデスクトップ向け電卓アプリ。
- [graphui](https://github.com/artemanufrij/graphui) - graphvizに基づくグラフ可視化。
- [Ideogram](https://github.com/cassidyjames/ideogram) - 絵文字ピッカーアプリ。
- [Minder](https://github.com/phase1geo/Minder) - マインドマッピングアプリケーション。
- [Notejot](https://github.com/lainsce/notejot) - とてもシンプルなノートアプリ。
- [Notes-up](https://github.com/Philip-Scott/Notes-up) - Markdownノートエディター・マネージャー。
- [Outliner](https://github.com/phase1geo/Outliner) - アウトラインを簡単に書く。
- [Paper](https://gitlab.com/posidon_software/paper/) - Markdownでノートを取る。
- [pdfpc](https://github.com/pdfpc/pdfpc) - PDFファイル用マルチモニター対応GTKプレゼンターアプリケーション。
- [Planify](https://github.com/alainm23/planify) - GNU/Linux向けに設計されたTodoist対応タスクマネージャー。
- [Spice-up](https://github.com/Philip-Scott/Spice-up) - モダンなLinuxデスクトップ向けプレゼンテーションアプリ。
- [TextShine](https://github.com/phase1geo/TextShine) - テキストを変換・操作する。
- [TextSnatcher](https://github.com/RajSolai/TextSnatcher) - 画像から簡単にテキストをコピーする。

### システムツール

- [Connections](https://gitlab.gnome.org/GNOME/connections) - GNOMEデスクトップ環境向けリモートデスクトップクライアント。
- [elementary OS App Center](https://github.com/elementary/appcenter) - elementary OS向けの、払えるだけ支払うアプリストア。
- [Man Helper](https://github.com/akarin123/manhelper) - manページ向けの軽量GTKフロントエンド。
- [Monitor](https://github.com/stsdc/monitor) - プロセスを管理し、システムリソースを監視する。
- [Peek](https://github.com/phw/peek) - 使いやすいインターフェースを持つシンプルなアニメーションGIFスクリーンレコーダー。
- [SwayNotifiationCenter](https://github.com/ErikReider/SwayNotificationCenter) - SwayWM向けのシンプルなGTKベース通知デーモン。

### 仮想化

- [GNOME Boxes](https://gitlab.gnome.org/GNOME/gnome-boxes) - 仮想マシンへアクセスするシンプルなGNOME 3アプリケーション。

### 天気

- [Meteo](https://gitlab.com/bitseater/meteo) - OpenWeatherMap APIを使うGTK天気アプリ。

## CLIツール

- [EasyDocs](https://github.com/watsonprojects/EasyDocs) - 開発者ドキュメントをすばやく読む。
- [Spider](https://github.com/colinkiama/spider) - HTML5サイト構造をすばやく生成する。
- [Valdo](https://github.com/vala-lang/valdo) - テンプレートから新しいValaプロジェクトを作る。
- [Vamposer](https://github.com/ValaTux/vamposer) - Composer/Go modulesに着想を得て、Mesonサブプロジェクトと統合されたValaプロジェクト向け依存関係マネージャー。

## エディタープラグイン

- [Vala VSCode](https://github.com/vala-lang/vala-vscode) - Valaの基本的な自動補完・構文強調表示を有効にするVisual Studio Codeプラグイン。
- [Vala-TMBundle](https://github.com/technosophos/Vala-TMBundle) - Vala構文強調表示、コード補完などを提供するTextMateバンドル。Sublime Text 3でもこのプラグインを使える。
- [language-vala-modern](https://atom.io/packages/language-vala-modern) - AtomでVala言語サポートを提供する。保守されていない「language-vala package」のフォーク。
- [Vala Syntax 4 Sublime Text](https://launchpad.net/valasyntax4sublimetext) - 構文強調表示を提供するSublime Text 3向け基本プラグイン。

## 言語サーバー

- [vala-language-server](https://github.com/vala-lang/vala-language-server) - Language Server仕様に従い、コード補完、フォーマット、構文強調表示などを提供することを目指す言語サーバー。

## ライブラリ

### コマンドライン

- [console-command](https://github.com/naaando/console-command) - コマンドライン引数をCommandパターンオブジェクトへルーティングするライブラリ。現在の実装は継承またはクロージャーによる拡張を扱う。

### 並行処理

- [gpseq](https://gitlab.com/kosmospredanie/gpseq) - ValaとGObject向け並列処理ライブラリ。

### 暗号とセキュリティ

- [GnuTLS](https://www.gnutls.org/) - SSL、TLS、DTLSプロトコルとその周辺技術を実装する安全な通信ライブラリ。安全な通信プロトコルにアクセスする単純なAPIと、X.509、PKCS #12、その他必要な構造の解析・書き込みAPIを提供する。

### データ構造とデータ型

- [Graphene](https://github.com/ebassi/graphene) - グラフィックライブラリ向けの薄い型レイヤー。点、三角形、長方形、四角形、四元数、ベクトル、行列、球など、3D変換に必要な共通型を提供する。
- [Libgee](https://gitlab.gnome.org/GNOME/libgee) - 一般的に使われるデータ構造（リスト、マップ、キュー、ツリーなど）向けのGObjectベースのインターフェース・クラスを提供するユーティリティライブラリ。
- [Numeric-GLib](https://github.com/arteymix/numeric-glib) - GCC拡張を通じ、GLib（およびVala）向けの数値データ型を集めたもの。128ビット整数・浮動小数点、複素型、ベクトル化操作、10進型を含む。
- [United](https://github.com/lcallarec/united) - キログラム、メートルなどの単位を操作するライブラリ。
- [vul (Vala Utility Libraries)](https://gitlab.gnome.org/BZHDeveloper/vul) - テキストストリーム処理（入出力）、JSONシリアライズ・デシリアライズ、アーカイブ圧縮・展開を追加するVala向けユーティリティライブラリ群。

### データベース

- [Almanna ORM](https://github.com/AmbitionFramework/almanna) - Vala/GLib向けAlmanna ORM。

### グラフィックスライブラリ

- [Babl](http://gegl.org/babl/) - 動的な任意形式間ピクセルフォーマット変換ライブラリ。
- [Cairo](https://cairographics.org/) - 複数の出力デバイスをサポートする2Dグラフィックスライブラリ。Valaで得られる実質的な既定ライブラリ。
- [GEGL](http://gegl.org/) - 浮動小数点処理と非破壊画像処理機能を提供する、データフローベースの画像処理フレームワーク。「画像のためのリアクティブプログラミング」と考えられる。
- [GRX](https://github.com/ev3dev/grx) - シンプルなグラフィックスディスプレイ（1ビットディスプレイやAdafruitのPiTFTディスプレイなど）向けグラフィックスライブラリ。キーボード、マウス、ジョイスティック、タッチスクリーン入力もサポートする。
- [GSVG (GObject SVG Library)](https://gitlab.com/gsvg/gsvg) - W3C標準APIのGLib GObject実装を提供する取り組み。
- [live-chart](https://github.com/lcallarec/live-chart) - Cairoに基づくVala・GTK3向けリアルタイムチャートライブラリ。
- [SDL2](https://www.libsdl.org/) - OpenGL、Direct3D、Vulkanを通じて、音声、キーボード、マウス、ジョイスティック、グラフィックスハードウェアへの低水準アクセスを提供するクロスプラットフォーム開発ライブラリ。バインディングはValaに含まれ、Vala 0.52から利用可能。

### GUIプログラミング

- [GTK](https://www.gtk.org/) - ValaにおけるGUI開発の事実上の標準ライブラリ。バインディングはvalaコンパイラーに含まれる。

### IoCと依存性注入

- [Vadi](https://github.com/nahuelwexd/Vadi) - Vala開発者が依存性注入を使いやすくするために開発されたIoCコンテナ。

### マルチメディア処理

- [GStreamer](http://gstreamer.freedesktop.org/) - マルチメディアアプリケーションを作るための強力なフレームワーク。

### 数値計算

- [balistica](https://github.com/fusilero/libbalistica) - オープンソースの弾道シミュレーションライブラリ。完全な計算機は[こちら](https://github.com/fusilero/balistica)。
- [vast](https://github.com/rainwoodman/vast) - Valaによる生成モデリングのプロジェクト。TensorFlowをValaで書き直したものと考えられる。

### テンプレート

- [Compose](https://github.com/arteymix/compose) - Vala向け関数型テンプレートライブラリ。
- [template-glib](https://gitlab.gnome.org/GNOME/template-glib) - テンプレートからGObject Introspectionを呼び出せるテンプレート展開ライブラリ。

### テキスト処理

- [libcmark-vapi](https://github.com/fabrixxm/libcmark-vapi) - Cで書かれたCommonMarkの解析・レンダリングライブラリlibcmark向けValaバインディング。

### Web開発

- [Ambition](https://github.com/AmbitionFramework/ambition) - MVCパターンを念頭にValaで書かれたWebフレームワーク。やや保守されていない（内部でValumを使うようリファクタリングし、Mesonへ移行できるかもしれない）。
- [Valum](https://github.com/valum-framework/valum) - Valaだけで書かれたWebマイクロフレームワーク。

### XMLとデータシリアライゼーション

- [GXML](https://gitlab.gnome.org/GNOME/gxml/) - XMLを操作するGObject APIと、GObjectからXMLへのSerializableフレームワーク。
- [Json-GLib](https://gitlab.gnome.org/GNOME/json-glib/) - GLibとGObjectを使った完全なJSONパーサー・ジェネレーターを実装し、JSONをGLibデータ型と統合する。
- [libyaml-glib](https://github.com/rainwoodman/libyaml-glib) - libyamlのGLibバインディングと、YAMLを理解するGObjectビルダー。
