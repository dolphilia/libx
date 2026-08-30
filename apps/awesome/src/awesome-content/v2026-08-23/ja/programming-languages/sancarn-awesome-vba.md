---
title: "Awesome VBA VBALogo"
description: "VBA VBALogoを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-sancarn-awesome-vba-readme-md"
---

# Awesome VBA VBALogo

VBA VBALogoを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [Library Collections](#library-collections)
- [Libraries](#libraries)
  - [Embedded programming languages](#embedded-programming-languages)
  - [Data Formats (JSON, CSV, XML, etc.)](#data-formats)
  - [Data Structures (Array-List and Dictionary)](#data-structures)
  - [Math libraries](#math-libraries)
  - [Database tools](#database-tools)
  - [Userform tools](#userform-tools)
  - [Low level tools](#low-level-tools)
  - [Parsers / Interpreters](#parsers--interpreters)
  - [Web tools](#web-tools)
- [Developer tools](#developer-tools)
- [Examples](#examples)
  - [Algorithms, code optimisation, and performance testing](#algorithms-code-optimisation-and-performance-testing)
  - [UI Ribbon](#ui-ribbon)
  - [UI Userforms](#ui-userforms)
  - [Low level examples](#low-level-examples)
  - [AddIns](#addins)
  - [Games / Fun projects](#games--fun-projects)
- [External tools](#external-tools)
- [Style Guides](#style-guides)
- [Information](#information)
- [Resources](#resources)
  - [Win32 API Resources](#win32-api-resources)
  - [VB6 / VBScript](#vb6--vbscript)
  - [Websites](#websites)
  - [Books](#books)
  - [YouTube](#youtube)
  - [Forums](#forums)

---

<a id="library-collections"></a>
## ライブラリコレクション

- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/sancarn/stdVBA?style&logo=github&label) [stdVBA](http://github.com/sancarn/stdVBA) - 自動化およびユーティリティ用に多数のクラスを含むフレームワーク。コードのコンパクトさと長期的な保守性に焦点を当てる.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_32]](#-) ![GHStars](https://img.shields.io/github/stars/kellyethridge/VBCorLib?style&logo=github&label) [VbCorLib](https://github.com/kellyethridge/VBCorLib) - VBA/VB6に多くの強力な.NETクラスを提供するフレームワーク.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/RelaxTools/Hidennotare?style&logo=github&label) [Hidennotare](https://github.com/RelaxTools/Hidennotare) - 日本の作者RelaxToolsが開発した、多数のクラス、インターフェース、フォームを含むフレームワーク。

<a id="libraries"></a>
## ライブラリ

<a id="embedded-programming-languages"></a>
### 組み込みプログラミング言語

- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/ECP-Solutions/ASF?style&logo=github&label) [Advanced Scripting Framework (ASF)](https://github.com/ECP-Solutions/ASF) - JavaScriptのような構文を持つ完全なスクリプティングプラットフォーム。オフィスエコシステムとのネイティブ統合、継承付きクラス、プロフェッショナルなデバッグ、ゼロ依存、VS Code拡張に対応.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/jet2jet/vb2clr?style&logo=github&label) [vb2clr](https://github.com/jet2jet/vb2clr) - .NET CLRランタイムを使ってVBAからC#を使用できる.
- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/ECP-Solutions/VBA-Expressions?style&logo=github&label) [VBA Expressions](https://github.com/ECP-Solutions/VBA-Expressions) - 数学およびデータ処理に特化した強力な文字列表現評価器.
- From Library Collections:
    - [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) In `stdVBA` find `stdLambda` - オブジェクト操作、呼び出しスタックなど、完全なプログラミング言語を提供.

<a id="data-formats"></a>
### データ形式

#### JSON

- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/cristianbuse/VBA-FastJSON?style&logo=github&label) [VBA-FastJSON](https://github.com/cristianbuse/VBA-FastJSON) - 高速でプラットフォームを越えて動作するネイティブJSONパーサーおよびシリアライザ。メモリ効率（非再帰）、RFC 8259準拠、UTF8対応
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [mdJSON](https://www.vbforums.com/showthread.php?871695-VB6-VBA-JSON-parsing-to-built-in-VBA-Collections-with-JSON-Path-support) - ドット表記を用いてパスを抽出するJSONライブラリ.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [JSONBag](https://www.vbforums.com/showthread.php?738845-VB6-JsonBag-Another-JSON-Parser-Generator) - シェンブン表記を使ってJSON文字列からキーを抽出。このライブラリを使ってJSONを構築することもできる.
- From Library Collections:
    - [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) In `stdVBA` find `stdJSON` - 上記と同じ.

#### CSV

- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/ws-garcia/VBA-CSV-interface?style&logo=github&label) [VBA-CSV-interface](https://github.com/ws-garcia/VBA-CSV-interface) - RFC-4180準拠の強力で高速かつ包括的なCSV/TSV/DSVデータ管理ライブラリ.
- From Library Collections:
  - [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) `Hidennotare`内で `csvWriter`と `csvReader`を見つけます。

#### XML

- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/VBA-tools/VBA-XML?style&logo=github&label) [VBA-XML](https://github.com/VBA-tools/VBA-XML) - XMLの変換およびパース.

#### ZIP

- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/cristianbuse/Excel-ZipTools?style&logo=github&label) [Excel-ZipTools](https://github.com/cristianbuse/Excel-ZipTools/tree/master) - ZIPファイルのパース、読み込み、データの抽出。純VBAで記述されている.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/KallunWillock/vbaSquash?style&logo=github&label) [vbaSquash](https://github.com/KallunWillock/vbaSquash/tree/master) - Windows 8+で提供される内蔵の`cabinet.dll`関数を使って、ファイルおよびバイト配列の圧縮・解圧を行う。`MSZIP`、`XPRESS`、`XPRESS_HUFF`、`LZMS`の圧縮アルゴリズムにアクセス可能.

#### PDF

- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/PerditionC/vbaPDF?style&logo=github&label) [vbaPDF](https://github.com/PerditionC/vbaPDF) - PDFファイルの簡単な編集（読み込み、結合、出力）用のVBAコード.

<a id="data-structures"></a>
### データ構造

#### Array-List

- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/Senipah/VBA-Better-Array?style&logo=github&label) [Better array](https://github.com/Senipah/VBA-Better-Array/tree/master/src) - より現代的な言語に見られる機能を提供する配列クラス.
- From Library Collections:
    - [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_32]](#-) In `VbCorLib` find `ArrayList` - 上記と同じ.
    - [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) In `stdVBA` find `stdArray` - 上記と同じ。また、配列の検索やコールバックからのチェックを行うメソッドも含まれる。


#### Dictionary

- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/cristianbuse/VBA-FastDictionary?style&logo=github&label) [VBA-FastDictionary](https://github.com/cristianbuse/VBA-FastDictionary) - フast、クロスプラットフォーム、ネイティブな辞書。スクリプティング辞書への代替。
- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/VBA-tools/VBA-Dictionary?style&logo=github&label) [VBA-Dictionary](https://github.com/VBA-tools/VBA-Dictionary) - キーと値のペアを格納する辞書オブジェクト。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/SSlinky/VBA-ExtendedDictionary?style&logo=github&label) [VBA-ExtendedDictionary](https://github.com/SSlinky/VBA-ExtendedDictionary) - Scripting.Dictionary を使用する辞書オブジェクトだが、いくつかの追加機能を提供。
- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) [cHashList](https://www.vbforums.com/showthread.php?834515-Simple-and-fast-lightweight-HashList-Class-(no-APIs)) - Win32 API を使用しないシンプルで高速かつ軽量のハッシュリストクラス。キーは文字列である必要がある。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [CollectionEx](https://www.vbforums.com/showthread.php?834579-Wrapper-for-VB6-Collections) - VBA(/VB6) のデフォルトコレクションに、キーの存在確認や取得用のメソッドを追加。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_32]](#-) [clsTrickHashTable](https://www.vbforums.com/showthread.php?788247-VB6-Hash-table) - ランタイムにインジェクトされたマシンコードを使用したハッシュテーブル。スクリプティング辞書への完全な代替であり、追加機能も備えている。
- From Library Collections:
    - [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_32]](#-) In `VbCorLib` find `HashTable` - 上記と同じ。


<a id="math-libraries"></a>
### 数学ライブラリ

- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/Beakerboy/VBA-Math-Objects?style&logo=github&label) [VBA-Math-Objects](https://github.com/Beakerboy/VBA-Math-Objects) - マトリクスとベクトルライブラリ。
- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/ws-garcia/VBA-float?style&logo=github&label) [VBA Float](https://github.com/ws-garcia/VBA-float ) - 大きな整数や有理数（数千桁）に対する計算を行うためのユーティリティ。

<a id="database-tools"></a>
### データベースツール

- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) [![o_dll]](#- 'Requires external DLLs') ![GHStars](https://img.shields.io/github/stars/EtienneLenoir/duckdb-vba?style&logo=github&label) [DuckDB VBA](https://github.com/EtienneLenoir/duckdb-vba) - Excel/VBA 用の埋め込み DuckDB OLAP エンジン。DuckDB C API を軽量 DLL ブリッジを介してネイティブに使用。ODBC の設定や外部サーバーは不要。高速な DuckDB SQL アナリティクス、辞書検索、Range/Array のインジェスト、Parquet/CSV/JSON ワークフロー、DuckDB/SQLite/PostgreSQL の接続、Access から DuckDB への移行をサポート。

- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/Beakerboy/VBA-SQL-Library?style&logo=github&label) [SQL Library](https://github.com/Beakerboy/VBA-SQL-Library) - psql、mssql、mysql データベース向けの OOP SQL ライブラリ。

<a id="userform-tools"></a>
### UserFormツール

- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/fafalone/cTaskDialog64?style&logo=github&label) [Task Dialog](https://github.com/fafalone/cTaskDialog64) - 1クラスから、厳密に動的かつモジュラーに、大量のUI機能を提供。データ入力フォームに非常に適している。さらに [vbforums](https://www.vbforums.com/showthread.php?777021-VB6-TaskDialogIndirect-Complete-class-implementation-of-Vista-Task-Dialogs) の投稿を参照。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/fafalone/ucSimplePlayer?style&logo=github&label) [![o_dll]](#- 'Requires external OCX') [ucSimplePlayer](https://github.com/fafalone/ucSimplePlayer) - シンプルなビデオプレイヤー用ユーザー制御。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/fafalone/ucWebView2?style&logo=github&label) [![o_dll]](#- 'Requires external OCX') [ucWebView2](https://github.com/fafalone/ucWebView2) - WebView2 用ユーザー制御。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/fafalone/ucAniGifEx?style&logo=github&label) [![o_dll]](#- 'Requires external OCX') [ucAniGifEx](https://github.com/fafalone/ucAniGifEx) - アニメーション付きGIF用ユーザー制御。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/todar/VBA-Material-Design?style&logo=github&label) [Material UI](https://github.com/todar/VBA-Material-Design) - ユーザーフォームにモダンな見た目を提供するためのMaterial UI。
- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/todar/VBA-Userform-EventListener?style&logo=github&label) [Easy EventListener](https://github.com/todar/VBA-Userform-EventListener) - ユーザーフォームのすべてのイベント処理を1つのコールバックに統合。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [Pseudo Control Arrays](http://addinbox.sakura.ne.jp/Breakthrough_P-Ctrl_Arrays_Eng.htm) - ユーザーフォームのすべてのイベント処理を統合する最適な手段。`ConnectToConnectionPoint` API の使用例を示す。さらに [this class](https://stackoverflow.com/questions/61855925/reducing-withevent-declarations-and-subs-with-vba-and-activex#answer-61893857) も確認。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/krishKM/Modern-UI-Components-for-VBA?style&logo=github&label) [![o_dll]](#- 'Requires external DLLs') [Modern UI Components](https://github.com/krishKM/Modern-UI-Components-for-VBA) - カスタムでモダンな見た目を持つ制御。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/rubberduck-vba/MVVM?style&logo=github&label) [MVVM](https://github.com/rubberduck-vba/MVVM) - モデル-ビュー-ビューモデル（M-V-V）アーキテクチャによる、保守性の高いユーザーフォーム開発を支援。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/todar/VBA-Userform-Animations?style&logo=github&label) [VBA Userform Transitions and Animations](https://github.com/todar/VBA-Userform-Animations) - ユーザーフォームにアニメーションの補間関数を実装するための優れたライブラリです.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/thetrik/VbTrickTimer?style&logo=github&label) [Trick's Timer](https://github.com/thetrik/VbTrickTimer) - コードを連続的に実行したい場合や、`Application.OnTime`にアクセスできない（または1秒ごとに実行するよりも速く実行したい）場合にこのクラスがおすすめです！さらに、[forum post](https://www.vbforums.com/showthread.php?875635-VB6-VBA-Timer-class)も確認してください。制限：モーダルフォームが必要です.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/cristianbuse/VBA-SafeTimer?style&logo=github&label) [VBA-SafeTimer](https://github.com/cristianbuse/VBA-SafeTimer) - VBA用の信頼性の高い、クラッシュのないタイマー。コードは安全にデバッグおよび停止できます。フォームありなしで動作します.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [Drag and Drop filepaths](https://www.mrexcel.com/board/threads/vba-drag-drop-filepath.843330/page-6#post-5898495) - ユーザーフォームにファイルのドラッグ＆ドロップを処理できるようにします.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [Late-bound WebBrowser Control Events](https://www.vbforums.com/showthread.php?847773-VB6-elevated-IE-Control-usage-with-HTML5-elements-and-COM-Event-connectors) - ライトバインドでウェブブラウザイベントに接続するための技術です.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_paid]](#- '~£2 per control/application') [Mark's userform tools](https://www.kubiszyn.co.uk/) - 複数のUIツールと美しく設計されたユーザーフォームを提供します.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/cristianbuse/VBA-UserForm-MouseScroll?style&logo=github&label) [VBA-UserForm-MouseScroll](https://github.com/cristianbuse/VBA-UserForm-MouseScroll) - MSFormsコントロールやユーザーフォームでのマウスホイールスクロールを可能にします.
- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) [MSForms (Pure VBA) Treeview Control](https://jkp-ads.com/Articles/treeview.asp) - JKPおよびPeter ThorntonがVBAで完全に実装したツリービューコントロールの代替です.
- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) [MSForms (Pure VBA) ListBox Control](https://app.monstercampaigns.com/c/fxzxd8wfvl4mnf4zmnp3/) - [this video](https://www.youtube.com/watch?v=QYW1SlKfKdM)に掲載されています。ソート、フィルタ、選択・非選択（単一または複数）、ページナビゲーション、ホバーハイライトなど、非常に便利な機能を備えています.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [Custom Userform TitleBar color](https://www.mrexcel.com/board/threads/using-winapi-to-change-the-color-on-the-title-bar-of-a-userform.1205894/page-2#post-5892050)
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [Multi-color ListBox class](https://www.mrexcel.com/board/threads/multicolor-drag-n-drop-listbox-class-win32.1206334/)
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [Use of GDIPlus in VBA](https://arkham46.developpez.com/articles/office/clgdiplus/) - GDIPlusを使用して、任意の画像を描画できるような`canvas`のような要素を作成できます。さらに、同じ著者のこの[GDI32](https://arkham46.developpez.com/articles/office/clgdi32/)クラスも確認してください.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [Use of OpenGL in VBA](https://arkham46.developpez.com/articles/office/vbaopengl/?page=Page_1) - OpenGLは、2Dおよび3Dベクターグラフィックスをレンダリングするための、マルチ言語・マルチプラットフォームのアプリケーションプログラミングインターフェースです。この記事では、GDIPlusクラスの著者について述べています.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_32]](#-) [VB6 Graph Control](https://vb6awards.blogspot.com/2017/11/vb6-graph-control.html) - VBA内でネイティブに動作せず、`PictureBox`と互換性のある代替が必要ですが、非常に高速なグラフコントロールです.
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) ![GHStars](https://img.shields.io/github/stars/tarboh/WebView2-For-Excel-VBA?style&logo=github&label) [WebView2 for Excel VBA](https://github.com/tarboh/WebView2-For-Excel-VBA) – ユーザーフォームにMicrosoft EdgeのWebView2を公開する軽量ラッパーであり、HTML/JS UI、レンダリング、VBAとの2方向通信を可能にします。ウェブブラウザコントロールを効果的に置き換えます.

<a id="low-level-tools"></a>
### 低レベルツール

- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/cristianbuse/VBA-MemoryTools?style&logo=github&label) [VBA-MemoryTools](https://github.com/cristianbuse/VBA-MemoryTools) - 超高速かつメモリコピーの代替を提供します.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [Safe Subclassing](https://www.mrexcel.com/board/threads/intercepting-resetting-of-vba-editor-as-well-as-unhandled-errors-for-safe-subclassing.1024295/) - Excel/Word/PowerPointのウィンドウまたはユーザーフォームをサブクラス化することで、さらに自動化を実現できます。後続のスレッドには、他のアプリケーションからの他のウィンドウをサブクラス化する例もあります.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/Greedquest/vbInvoke?style&logo=github&label) [Calling private module functions](https://github.com/Greedquest/vbInvoke/tree/main) - また、[Greedo's code review](https://codereview.stackexchange.com/questions/274532/low-level-vba-hacking-making-private-functions-public)も確認してください.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_32]](#-) [Universal DLL Calls](http://www.vbforums.com/showthread.php?781595-VB6-Call-Functions-By-Pointer-(Universall-DLL-Calls)) - 任意の関数ポインタ、DLL、またはオブジェクトの関数を呼び出すことができるライブラリです。これは、`STDCALL`および`CDECL`の両方で使用可能です.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/Greedquest/vbInvoke?style&logo=github&label) [vbInvoke](https://github.com/Greedquest/vbInvoke) - `Application.Run`ですが、COMベースであり、プライベートモジュールメソッドを呼び出すことができます。
- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/cristianbuse/VBA-StateLossCallback?style&logo=github&label) [VBA state-loss callback](https://github.com/cristianbuse/VBA-StateLossCallback) - VBAの状態喪失を検出するためのツール。状態喪失が発生するのは、次のいずれかの場合：誰かが未処理のエラーで`end`をクリックしたとき；VBAの停止ボタンをクリックしたとき；設計モードに入れたとき；アプリケーションが終了したとき。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/Ariche2/VBAStack?style&logo=github&label) [VBAStack](https://github.com/Ariche2/VBAStack) - Officeアプリケーションから実行時におけるVBAの呼び出しスタック情報を取得できるライブラリ。著者も[pure VBA native version](https://www.reddit.com/r/vba/comments/1qrf29m/update_to_vbastack_can_now_work_in_vba6_as_well/)を作成した。
- From Library Collections:
    - [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) In `stdVBA` find `stdCOM` - COM自動化のワンストップソリューション。インターフェースのオフセットによる呼び出しからタイプ情報の抽出までをカバー。
    - [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) In `stdVBA` find `stdReg` - レジストリ自動化。検索から値の設定までをカバー。

<a id="parsers--interpreters"></a>
### パーサー／インタプリター

- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/sihlfall/vba-regex?style&logo=github&label) [vba-regex](https://github.com/sihlfall/vba-regex) - ナイティブな正規表現表現式パーサーおよび実行エンジン。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/wqweto/VbPeg?style&logo=github&label) [VbPeg](https://github.com/wqweto/VbPeg) - VBA用のパーサー生成器。PEG文法のような[this](https://github.com/wqweto/VbPeg/blob/master/test/Runner/peg/Kscope/grammar.peg)を[VBA code like this](https://github.com/wqweto/VbPeg/blob/master/test/Runner/peg/Kscope/cKscope.cls)に変換する。新しいプログラミング言語をVBAで実装する場合に非常に有用。Wqwetoは、いくつかの数学式パーサーをテストとして含んでいる。
- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) [Volpi's Math Expression Parser](https://web.archive.org/web/20100703220609/http://digilander.libero.it/foxes/mathparser/MathExpressionsParser.htm) - 高速な数学式パーサー。オブジェクトへの呼び出しを許可せず、呼び出しスタックも存在しない。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/Excel-lent/ClooWrapperVBA?style&logo=github&label) [ClooWrapperVBA](https://github.com/Excel-lent/ClooWrapperVBA) - VBAからOpenCLを実行できる。GPUまたはCPUを使用可能。

<a id="web-tools"></a>
### ウェブツール

- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/VBA-tools/VBA-Web?style&logo=github&label) [VBA-Web](https://github.com/VBA-tools/VBA-Web) - VBA、Excel、Access、およびWindowsおよびMac用のOfficeをウェブサービスやウェブに接続できる。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/vbacollective/wasabi?style&logo=github&label) [Wasabi](https://github.com/vbacollective/wasabi) - VBA用のネイティブなWebSocket、WSS、MQTT、およびraw TCPクライアント。純VBA、1ファイル、ゼロの依存関係。
- [![p_win]](#-) [![p_mac]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/EagleAglow/vba-websocket-async?style&logo=github&label) [VBA-WebSocket](https://github.com/EagleAglow/vba-websocket) - MicrosoftのWebSocketクライアントの例コード。エコサーバーと併用可能。また、[a class](https://github.com/EagleAglow/vba-websocket-class)と、Microsoftのコードを元にした[async version](https://github.com/EagleAglow/vba-websocket-async)も存在。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_32]](#-) ![GHStars](https://img.shields.io/github/stars/wqweto/VbAsyncSocket?style&logo=github&label) [vbAsyncSocket](https://github.com/wqweto/VbAsyncSocket) - VB6向けのシンプルで薄いWinSock APIのラッパー。元のMFCのCAsyncSocketラッパーを参考にしている。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/sancarn/stdVBA-Inspiration?style&logo=github&label) [Edge Automation](https://www.codeproject.com/Tips/5307593/Automate-Chrome-Edge-using-VBA) - devtoolsプロトコルを使ってChromium Edgeを自動化。[GitHub backup here](https://github.com/sancarn/stdVBA-Inspiration/tree/master/ChromeEdgeAutomation)。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/PerditionC/VBAChromeDevProtocol?style&logo=github&label) [Chrome Automation (via devtools protocol)](https://github.com/PerditionC/VBAChromeDevProtocol) - Chromeをchrome devtoolsプロトコルを使って自動化。
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/GCuser99/SeleniumVBA?style&logo=github&label) [SeleniumVBA](https://github.com/GCuser99/SeleniumVBA) - VBAからSelenium WebDriverを直接操作できる。ドライバーがインストールされていない場合、ライブラリは自動的にダウンロードし、実行する。ただし、AVがこのプロセスの実行を制限する可能性がある。
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) ![GHStars](https://img.shields.io/github/stars/michaelneu/webxcel?style&logo=github&label) [webxcel](https://github.com/michaelneu/webxcel) - RESTフルバックエンドを実行するウェブサーバー。開発者もdev.toでその仕組みについての記事を作成した。 [article](https://dev.to/michaelneu/to-vba-and-beyond---building-a-restful-backend-using-plain-microsoft-excel-macros-76n)
- From Library Collections:
    - [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) In `stdVBA` find `stdHTTP` - ウェブサービスに接続し、クエリを行う。


<a id="developer-tools"></a>
## 開発ツール

- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_inst]](#-) [Rubberduck](https://rubberduckvba.com/) - Visual Basic Editorに統合されたオープンソースCOM拡張機能プロジェクト。古くからのIDEに現代的な機能を追加。VBA6、VBA7.x（x86/x64）および、VB6でも動作！
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) ![GHStars](https://img.shields.io/github/stars/spences10/VBA-IDE-Code-Export?style&logo=github&label) [VBA-IDE-Code-Export](https://github.com/spences10/VBA-IDE-Code-Export) - Addinには、Git（または任意のVCS）との使用に適したコードインポートおよびエクスポート機能が含まれる。
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) [![a_wd]](#-) [![o_pass]](#-) - [RibbonX](https://www.andypope.info/vba/ribboneditor_2010.htm) - AndyPopeのVisual Ribbon Editor。
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) [Custom UI XML Editor](https://yoursumbuddy.com/ribbon-customui-xml-editor/) - Excel 2010以降でリブンXMLを直接追加・編集・検証できるAddin
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) [![a_ac]](#-) [![a_wd]](#-) [![a_pp]](#-) [![o_paid]](#-) [Ribbon Creator](https://ribboncreator2021.de/en/) - リブン開発に最適で直感的なWYSIWYGインターフェース。無料のシェアウェア版では、1リブンにつき最大2タブまでをエクスポートできる
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_paid]](#- 'Costs upwards of $79') [MZ-Tools](https://www.mztools.com/) - VBE用の開発ツールを提供するAddin
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/wqweto/VbPeg?style&logo=github&label) [VbPeg](https://github.com/wqweto/VbPeg) - VBA用のパーサー生成ツール。PEG文法のような[this](https://github.com/wqweto/VbPeg/blob/master/test/Runner/peg/Kscope/grammar.peg)を[VBA code like this](https://github.com/wqweto/VbPeg/blob/master/test/Runner/peg/Kscope/cKscope.cls)に変換。VBAで新しいプログラミング言語を実装する場合に非常に役立つ
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [VBA Resource File Editor](http://leandroascierto.com/blog/vba-resource-file-editor/) - Excel/Word/PowerPointファイル内に他のファイルを保存し、後でこの便利なツールで使用できる
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_32]](#-) [vbRichClient](https://vbrichclient.com/#/en/About/) - 多くの便利なライブラリを備えた外部クライアント
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [![o_paid]](#- '£170-£205 license per dev') [vbWatchDog](https://www.everythingaccess.com/vbwatchdog.asp) - `vbWatchdog`はVBAランタイムをハックし、エラーが発生した場所のモジュール名、手続き名、行番号を提供
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [DLL Function Viewer](https://www.mrexcel.com/board/threads/dll-export-viewer-vba-based.1220909/) - DLLから関数名をエクスポートできる
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/sancarn/stdVBA-examples?style&logo=github&label) [Accessibility Inspector](https://github.com/sancarn/stdVBA-examples/tree/main/Examples/Inspector-Accessibility-v2) - アプリケーションのアクセシビリティを確認・探索するインスペクタ。自動化に役立つ
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/sancarn/stdVBA-examples?style&logo=github&label) [Running Object Table Inspector](https://github.com/sancarn/stdVBA-examples/tree/main/Examples/Inspector-RunningObjectTable) - 実行オブジェクトテーブル（ROT）のインスペクタ。グローバルなCOMオブジェクトを取得できるテーブル
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/sancarn/stdVBA-examples?style&logo=github&label) [Clipboard Inspector](https://github.com/sancarn/stdVBA-examples/tree/main/Examples/Inspector-Clipboard) - クリップボードに保持されたデータの確認が可能。他のアプリケーションのクリップボード使用を逆エンジニアリングする際に有用
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/sancarn/stdVBA-examples?style&logo=github&label) [Registry Inspector](https://github.com/sancarn/stdVBA-examples/tree/main/Examples/Inspector-Registry) - ウィン32レジストリの確認が可能。regeditに相当するが、完全にVBAで実装されている
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/sancarn/stdVBA-examples?style&logo=github&label) [JSON Inspector](https://github.com/sancarn/stdVBA-examples/tree/main/Examples/Inspector-JSON) - JSONデータのインスペクタ。開発ツールとしてAPIレスポンスの確認に即座に呼び出せる
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/KallunWillock/vbaXray?style&logo=github&label) [vbaXray](https://github.com/KallunWillock/vbaXray) - OfficeバイナリファイルからVBAソースコードを直接読み取り、検証、エクスポートする純VBAクラス


<a id="examples"></a>
## サンプル

<a id="algorithms-code-optimisation-and-performance-testing"></a>
### アルゴリズム、コード最適化、性能テスト

- [VBSpeed](http://www.xbeat.net/vbspeed/) - The Visual Basic Performance Site - VB6に焦点を当てているが、VBAにも適用可能

### UI Ribbon

- [Access Ribbon](https://www.accessribbon.de/en/) - カスタムリボンXMLの開発に必要な情報が得られる優れたリソースです。Access向けに主に構築されていますが、Excel、WordおよびPowerPointにも同様に適用可能です。
- [Ron de Bruin - Ribbons/QAT](https://jkp-ads.com/rdb/) - カスタムリボンおよびコンテキストメニューの開発に必要な情報・サンプルを提供する主要なリソース。(ジャン・カル・ピーターのサイト上で提供中)
- [Office MSO Icons](http://www.spreadsheet1.com/office-excel-ribbon-imagemso-icons-gallery-page-01.html) - リボンアイコンは、このサイトにある1500個（3ページ分）のMSOアイコンのいずれかを使用することがよくあります。これらはオフィスアプリケーションに事前に存在しています。

### UI Userforms

- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [Drag and drop control](https://www.vbforums.com/showthread.php?888843-Load-image-into-STATIC-control-Win32&p=5496575&viewfull=1#post5496575) - ユーザーフォーム内のイメージコントロールをドラッグ＆ドロップで移動できる
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) ![GHStars](https://img.shields.io/github/stars/KallunWillock/EZPZMouseController?style&logo=github&label) [EZPZMouseController](https://github.com/KallunWillock/EZPZMouseController/) - ナイティブなMicrosoft Ink Collectorを使用してマウスホイールやマウス移動イベントを検知する例

<a id="low-level-examples"></a>
### 低レベルのサンプル

- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [Iterating the ROT](https://www.mrexcel.com/board/threads/how-to-target-instances-of-excel.1118789/page-2#post-5395037) - Running Object Table (ROT) を繰り返し走査して Excel ワークブックインスタンスを検出する例.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-) [Iterating Excel Instances via IAccessible](https://www.mrexcel.com/board/threads/how-to-target-instances-of-excel.1118789/page-2#post-5395519) - 一部のケースでは Excel インスタンスが ROT に登録されていない。しかし、Excel アプリケーションは `IAccessible` を実装しており、UI の自動化に加えて、hwnd から Excel インスタンスを取得することもできる.
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) [Excel Screen Reader](https://www.mrexcel.com/board/threads/excel-screen-reader-upon-navigating-with-the-mouse-with-vba-alone.1162338/) - UI 自動化の例であり、SAPI を使ってテキストを音声に変換する例も含まれる.



### AddIns

- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) [MenuRighter](https://yoursumbuddy.com/blog/menurighter/) - MenuRighter は、右クリックメニューを編集できる Excel のアドインです。他の右クリックメニューまたは Excel 2003 の「クラシック」メニューに見られるほぼすべてのコントロールを追加できます.
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) [Sam Rad's DatePicker](http://samradapps.com/datepicker/) - Excel 用に視覚的に魅力的でプロフェッショナルな DatePicker アドイン。ワークシートのみ対応 / ユーザーフォームと併用不可.
- [![p_win]](#-) [![p_mac]](#-) [![a_xl]](#-) [Excel Name Manager](https://jkp-ads.com/excel-name-manager.asp) - JKP、チャールズ・ウィリアムズ、マシュー・ヘンソンが開発した名前マネージャーの強化版。2025年度「ベストマイクロソフトエクセルアドイン」部門のファイナル候補に選ばれた作品.
- [![p_win]](#-) [![p_mac]](#-) [![a_xl]](#-) [Excel Flex Find](https://jkp-ads.com/excel-flexfind.asp) - JKP が開発した検索・置換機能の強化版。検索範囲をオブジェクトおよびVBAコードにも拡張しています.
- [![p_win]](#-) [![p_mac]](#-) [![a_wd]](#-) ![GHStars](https://img.shields.io/github/stars/joey-melo/vba-syntax-higlight?style&logo=github&label) [Word VBA Syntax Highlighter](https://github.com/joey-melo/vba-syntax-higlight/tree/main) - Word ドキュメント用のカスタム構文強調ツール.

<a id="games--fun-projects"></a>
### ゲーム／趣味プロジェクト

- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) ![GHStars](https://img.shields.io/github/stars/DylanTallchiefGit/xlStudio?style&logo=github&label) [xlStudio](https://github.com/DylanTallchiefGit/xlStudio) - Microsoft Excel 用のDAW。また、素晴らしい [video](https://youtu.be/RFdCM2kHL64) もチェックしてください.
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) [Cellivization](https://s0lly.itch.io/cellivization) - Excel で作成された面白いRTS風ゲーム。また、素晴らしい [video](https://www.youtube.com/watch?v=PzETBRcr_i8) もチェックしてください.
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) [Arkanoid](http://leandroascierto.com/blog/juego-arkanoid-en-excel/) - Arkanoid、レトロアーケードゲーム、Excelで構築されたもの。あるマシンでは他のマシンより速く動作することがあります.
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) ![GHStars](https://img.shields.io/github/stars/rubberduck-vba/Battleship?style&logo=github&label) [Battleships](https://github.com/rubberduck-vba/Battleship)
- [![p_win]](#-) [![p_nom]](#-) [![a_ac]](#-) [Pacman](https://arkham46.developpez.com/articles/office/clgdiplus/tuto/tutoclgdiplusgame3/?page=Page_11#LXXIV)
- [![p_win]](#-) [![p_nom]](#-) [![a_xl]](#-) ![GHStars](https://img.shields.io/github/stars/raspberrypioneer/ExcelCommodroid?style&logo=github&label) [ExcelCommodroid](https://github.com/raspberrypioneer/ExcelCommodroid/tree/main) - Windows上でMS Excelを使用したコムドレのコンピュータローダー。VBA7専用です.
- [![p_win]](#-) [![p_nom]](#-) [![a_all]](#-)[![o_32]](#-) ![GHStars](https://img.shields.io/github/stars/M2000Interpreter/Environment?style&logo=github&label) [M2000Interpreter](https://github.com/M2000Interpreter/Environment)

<a id="external-tools"></a>
## 外部ツール

- [![p_win]](#-) [![p_mac]](#-) ![GHStars](https://img.shields.io/github/stars/decalage2/oletools?style&logo=github&label) [![a_misc]](# "Python") [oletools](https://github.com/decalage2/oletools) - VBA P-コード（VBAの中間言語）をデコードできるPythonツールです.
- [![p_win]](#-) [![p_mac]](#-) [![a_misc]](#- 'VBA planned but as of 2022-05-27 can only compile to exe') [twinBasic](https://twinbasic.com/) - VBAと互換性のあるパーサー、評価器、コンパイラです.
- [![p_win]](#-) [![p_mac]](#-) ![GHStars](https://img.shields.io/github/stars/serkonda7/vscode-vba?style&logo=github&label) [![a_misc]](# "VSCode") [vscode-vba](https://github.com/serkonda7/vscode-vba) - Visual Studio Code にVBAエディタのサポートを追加する拡張機能です.
- [![p_win]](#-) [![p_mac]](#-) ![GHStars](https://img.shields.io/github/stars/SSlinky/VBA-LanguageServer?style&logo=github&label) [![a_misc]](# "VSCode") [VBA Pro](https://marketplace.visualstudio.com/items?itemName=NotisDataAnalytics.vba-lsp) - Visual Studio Code 拡張機能で、Language Service Protocolに基づいた強化されたVBAサポートを提供。ソースコードも [on GitHub](https://github.com/SSlinky/VBA-LanguageServer) です.
- [![p_win]](#-) [![p_mac]](#-) ![GHStars](https://img.shields.io/github/stars/DecimalTurn/VBA-Build?style&logo=github&label) [![a_misc]](# "Github") [VBA Build](https://github.com/DecimalTurn/VBA-Build) - GitHub アクションで、コミット時にVBAプロジェクトを自動的にビルドします。
- [![p_win]](#-) [![p_mac]](#-) ![GHStars](https://img.shields.io/github/stars/Beakerboy/MS-OVBA?style&logo=github&label) [![a_misc]](# "Python") [VBA Project Compiler](https://github.com/Beakerboy/MS-OVBA) - VBAプロジェクトをコンパイルできるPythonライブラリです。同著者が開発した内蔵 [Excel addin generator](https://github.com/Beakerboy/Excel-Addin-Generator)もあります！著者の関連プロジェクトの一覧を確認できます [here](https://github.com/sancarn/awesome-vba/issues/35)。
- [![p_win]](#-) [![p_nom]](#-) [![o_paid]](#- 'Will be licensed') [![o_dll]](#- 'Uses an external exe') [WinVBA](https://winvba.com/) - Visual Basic for Applications（VBA）開発用の現代的なIDEです。

<a id="style-guides"></a>
## スタイルガイド

- [RubberDuck's style guide](https://rubberduckvba.wordpress.com/2021/05/29/rubberduck-style-guide/) - 中級から上級まで非常に良いガイドが用意されています。
- [VB6 Coding conventions](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/aa240822(v%3dvs.60)) - VBAで使用される変数／クラス／モジュールの命名規則。VBEでの整理に非常に役立ちます（ルーブァードックを導入している場合は除く）。

<a id="information"></a>
## 情報

- [Thunder - The birth of Visual Basic](http://www.forestmoon.com/birthofvb/birthofvb.html) - VB7/VBA誕生に関する少しの記事。
- [My First Bill Gates Review](https://www.joelonsoftware.com/2006/06/16/my-first-billg-review/) - Excelチームのプログラムマネージャーであるジョエル・スポルスキーが、最初のビル・ゲイツのレビューを語ります。ジョエルは、例えば `IDispatch`、`Variant`、`For each`および`With`といった多くの機能を追加されました。また、Lotus 123からExcelに移植された恐ろしいDateバグについても述べています。
- [Ruby, EB and DLL composition](https://github.com/sancarn/stdVBA-Inspiration/blob/master/_OtherDocumentation/VBA%20and%20VB6%20History%20-%20Eb%20and%20Ruby/VBA%20History.md) - ロシアのVBer が作成した、の翻訳版。VB6およびVBAのDLL構成と、言語の歴史について説明しています。 [VBStreets article](http://bbs.vbstreets.ru/viewtopic.php?f=101&t=56551) `Хакер`
- [PCode Internals](https://www.vbforums.com/showthread.php?884919-pcode-internals) - VBAはPCodeにコンパイルされます。PCodeの低レベル理解は、非常に注目され、研究されています。
- [How many lines of code in EB](http://bbs.vbstreets.ru/viewtopic.php?f=101&t=56633) - ロシアのVBer `Хакер`が書いた、未翻訳の記事。VB6/VBAにおけるコード行数を推定しています。
- [SAFEARRAYS](https://www.vbforums.com/showthread.php?895566-RESOLVED-SAFEARRAY-Structure-for-an-Array) - 配列の内部構造について。
- [Articles by Sancarn](https://sancarn.github.io/vba-articles) - SancarnがVBAについて書いたさまざまな記事。パフォーマンス、VBAにおける実際の問題などについて含まれています。

<a id="resources"></a>
## リソース

<a id="win32-api-resources"></a>
### Win32 API資料

- [JKP API Declarations](https://jkp-ads.com/Articles/apideclarations.asp)
- [Microsoft Office Code Compatibility Inspector](https://docs.microsoft.com/en-us/previous-versions/office/office-2010/ee833946(v=office.14)) - Microsoft Office Code Compatibility Inspectorは、Microsoftが開発したVBAコードの互換性問題を解決するために設計されたツールです。Officeを32ビットから64ビットにアップグレードする際に使用されます。しかし、Microsoftはこのソフトウェアのダウンロードリンクをサーバーに維持していません。ただし、インターネット上にそのバージョンが存在するようです。

### VB6 / VBScript

- [Planet Source Code](https://github.com/Planet-Source-Code/PSCIndex) - GitHubに保存されている大量のコードを含むコードリポジトリ。サイトは2023年に閉鎖されましたが、幸運にもすべてのVBA/VB6のサンプルが今日GitHubにアーカイブされています。おそらくPSCサイトで以前提供されていたプロジェクト/ソースコードのすべて（？）ではないかもしれませんが。
- [vbAccelerator Archive](https://github.com/tannerhelland/vbAccelerator-Archive) - 2015年に消滅したvbAcceleratorサイト（記事、ソースコードなど）のアーカイブ版。2018年に再び現れましたが、次にどうなるかは誰にもわかりません。主にVB6ですが、VBAのための有用なリソースです。

<a id="websites"></a>
### ウェブサイト

- [Excel Development Platform Blog](https://exceldevelopmentplatform.blogspot.com/) - VBAに関する高度なトピックを扱うブログ。
- [MSDN VBA Documentation](https://msdn.microsoft.com/en-us/vba/office-vba-reference)
- [MS-VBAL Language Spec](https://docs.microsoft.com/en-gb/openspecs/microsoft_general_purpose_programming_languages/ms-vbal/d5418146-0bd2-45eb-9c7a-fd9502722c74)
- [Ron de Bruin](https://web.archive.org/web/20230806005811/https://www.rondebruin.nl/index.htm) - 簡単から中級のトピック。注：ロンはすべてのサイトをアーカイブしており、更新されません。一部の情報は古くなっていますが、VBAにとって非常に素晴らしいリソースです。
- [Bytecomb VBA Reference](https://bytecomb.com/vba-reference/) - 中級から上級のトピック。
- [Chip Pearson's website](http://www.cpearson.com/excel) - 初心者から中級者向けに非常に良いリソース。
- [VBA for smarties](http://www.snb-vba.eu/inhoud_en.html) - 多数のデータ構造とメカニズムについての素晴らしいリファレンス。
- [Rubberduck Blog](https://rubberduckvba.wordpress.com/) - 中級から上級のトピック。
- [![a_ol]](#-) [Slipstick](https://www.slipstick.com/) - Diane Poremsky（MVP）のウェブサイト。OutlookおよびVBAに焦点を当てる。
- [![a_ol]](#-) [TechnicLee](https://techniclee.wordpress.com/) - Outlookのブログ。ユーザーの要望に応じたさまざまな例、コードのバリエーションを提供。
- [![a_pp]](#-) [PowerPoint VBA](https://pptvba.com/) - プレゼンテーションソフトウェアPowerPointを用いてVBAを教える専門サイト。
- [MS KB Archive](https://github.com/jeffpar/kbarchive/tree/master/id/vbwin) - vb6/VBAに関する膨大なアーカイブ。問題、解決策、チュートリアルを収録。
- [Sancarn's vba-articles](https://sancarn.github.io/vba-articles/) - VBAに関するさまざまなテーマについてのSancarnの記事。
- [![a_ac]](#-) [No Longer Set](https://nolongerset.com) - Microsoft MVP Mike WolfeによるAccess + VBAサイト。TwinBasicの開発進展について週次で更新。
- [![a_ac]](#-) [Isladogs on Access](https://isladogs.co.uk/) - Microsoft MVP Colin RiddingtonによるAccess + VBAサイト。Access VBAにおけるVBAプロジェクトが豊富に掲載された優れたリソース。
- [![a_ac]](#-) [DevHut](https://www.devhut.net/) - Daniel PineaultによるAccess + VBAサイト。VBAのさまざまな用途について深掘りした記事シリーズを発表。YouTubeアカウントとのコンパニオンサイト。
- [![o_paid]](#- 'Various paid content available through the site') [AnalystCave](https://analystcave.com/) - アナリティクス向けのVBA専門サイト。

<a id="books"></a>
### 書籍

- [Hard Core Visual Basic](https://classicvb.net/hardweb/mckinney.htm) - Visual Basic 5.0版の高度なプログラマー向けガイド。基本的なユーティリティ、ショートカット、問題解決法を含み、幅広い機能プログラムの開発を可能にする。ハードカバー版も存在。また、[Comments and corrections](https://jeffpar.github.io/kbarchive/kb/173/Q173840/)も確認。
- [The VBA Developer's Handbook](https://www.academia.edu/29801473/VBA_Developers_Handbook_Second_Edition) - どのような状況にも対応できる「バッチ-proof」VBAコードを書く。この書籍は、「Visual Basic for Applications」プログラミング言語を用いる300以上の製品で開発を行う開発者にとって、必須のリソース。ハードカバー版も他所で販売。
- [Advanced Visual Basic 6](https://pdfcoffee.com/advanced-visual-basic-6-power-techniques-for-everyday-programs978020170712024922-pdf-free.html) - Matthew Curlandによる「Everyday Programsのパワーテクニック」。ハードカバー版も他所で販売。
- [Professional Excel Development](https://oiipdf.com/download/professional-excel-development-the-definitive-guide-to-developing-applications-using-microsoft-excel-vba-and-net) - この書籍では、4人の世界レベルのMicrosoft® Excel開発者が、Excelを用いた強力で信頼性の高いアプリケーションの開発に至るまでの一連のガイドを提供。ハードカバー版も他所で販売。
- [![o_paid]](#- '~$6') [Excel VBA Programming For Dummies](https://www.google.com/search?q=Excel+VBA+Programming+For+Dummies+book) - 次のレベルへ進む時。Visual Basic for Applications（VBA）を用いて、独自のカスタマイズ可能なExcel 2010ソリューションを作成する。ステップバイステップの指導と、親しみやすいFor Dummiesスタイルを用いて、VBAの使い方、マクロの作成、Excelアプリケーションのカスタマイズ方法、エラー回避などについて実用的な内容を紹介。
- [![o_paid]](#- '~$30') [Power Programming with VBA](https://www.wiley.com/en-us/Excel+2019+Power+Programming+with+VBA-p-9781119514916) - Excel 2019 Power Programming with VBAは、すべての最新ツールとテクニックをカバー。Excelアプリケーション開発の分析とVisual Basic for Applications（VBA）の完全な導入を含み、大規模および小型のExcelアプリケーション開発に必要なすべての技術を網羅。
- [(E-Book) VBA beginners](https://goalkicker.com/VBABook/)
- [(E-Book) Excel VBA beginners](https://goalkicker.com/ExcelVBABook/)

### YouTube

- [Excel Macro Mastery](https://www.youtube.com/c/Excelmacromastery) - パウル・ケリー（MVP） - excelmacromastery.com.
- [Sigma Coding](https://www.youtube.com/c/SigmaCoding) - チュートリアルの大きなカタログ。初心者から上級者まで。VBAの興味深いテーマについて、他のコンテンツクリエイターが扱っていない領域を深く掘り下げ。
- [WiseOwl's VBA tutorials](https://www.youtube.com/playlist?list=PLNIs-AWhQzckr8Dgmgb3akx_gFMnpxTN5) - VBAの総合的なリソース。初心者にとって最適な導入。VBAのすべての側面についての深い講義。VBAのほとんどの種類をカバーする大きなプレイリスト。
- [![o_paid]](#- 'Some libraries used are non-FOSS and created by VBA A2Z') [VBA A2Z](https://www.youtube.com/c/VBAA2Z) - 多くのチュートリアル、一部は有料コンテンツ。興味深いテーマが豊富で、VBAのさまざまな部分についての深掘りチュートリアルを提供。.NET/VSTOの動画も含まれる。UI開発に強い焦点を当てる。
- [Excel VBA Is Fun](https://www.youtube.com/c/ExcelVbaIsFun)
- [Excel for Freelancers](https://www.youtube.com/c/ExcelForFreelancers) - 具体的なアプリケーションの開発に向けた実践的なチュートリアル。初心者から上級者までの一貫したプロセスをカバー。すべてのレベルに対応。
- [Leila Gharani](https://www.youtube.com/c/LeilaGharani) - オフィス全体にわたるフォーカス - 初心者向けに便利です。
- [![o_paid]](#- 'The video is from a consultant. Many of his videos are paid for.') [Get to know VBA](https://youtu.be/MFR_XARJjoY) - VBAを用いて素晴らしいアプリケーションが紹介・作成されています。
- [![a_ac]](#-) [D Pineault - Tech, Programming and more](https://www.youtube.com/channel/UC9lSC6AT4d0qour-aIbMjFQ) - Daniel PineaultのYouTubeチャンネル。DevHutサイトの補足チャンネルです。

<a id="forums"></a>
### フォーラム

- [Reddit](http://reddit.co.uk/r/vba) - 毎日のVBAに関するQ&A。まれにプロ・ティップの共有や、展示・話題共有ライブラリの公開も行われます。
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vba) - 質問を投げかけるのに最適な場所。同じ質問が繰り返されると、重複としてマークされ、著者に正しい場所へ案内されます。
- [Chandoo](https://chandoo.org/wp/) - Chandooのフォーラム - Purna Duggirala（MVP）のブログ。非常に活発です。
- [Visual Basic Discord](https://discord.gg/gpcSue9f) - VB.NET/VBA/VB6ファンのチャットルーム。
- [Excel Discord](https://discord.gg/PU2vVDeb) - Tim Heng（Excel MVP）がモデレーションを行うDiscordサーバー。Excelユーザーをサポートすることを目的としています。
- [MrExcel](https://www.mrexcel.com/board/) - 主にExcelの一般的な話題ですが、VBAのコンテンツもここに多くあります。
- [Excel Forum](https://www.excelforum.com/)
- [![a_ol]](#-) [Slipstick](https://www.forums.slipstick.com) - Diane Poremsky（MVP）のSlipstickサイト（Outlook VBA）の優れたフォーラム。Dianeは迅速に反応し、その回答は非常に役立ちます。
- [VBForums - Office Development](https://www.vbforums.com/forumdisplay.php?37-Office-Development) - VB6/.NETに焦点を当てたフォーラム。VBAセクションも備えています。
- [![a_ac]](#-) [Access World](https://www.access-programmers.co.uk/forums/forums/modules-vba.12/) - AccessおよびAccess VBAに焦点を当てたフォーラム。

<a id="footnotes"></a>
## 脚注

<a id="symbology"></a>
### 記号

VBAの性質上、多くのライブラリはすべてのOS、Officeアプリケーション、CPUアーキテクチャ（x64／x86）で動作するとは限りません。DLLやアドインなどの外部リソースを必要とするものもあり、VBAにはパッケージマネージャーがないため導入が難しい場合があります。目的に合うプロジェクトを探しやすくするため、このリストでは以下の互換性記号と補足ツールチップを使用します。

<a id="platform-compatibility"></a>
#### プラットフォーム互換性

[p_all]: https://github.com/sancarn/awesome-vba/blob/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/Crown.svg 'Compatible on all platforms'
[p_mac]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/AppleLogo.svg 'macOS'
[p_win]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/WindowsLogo.svg 'Windows OS'
[p_now]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/NotApplicable.svg 'Not Windows OS'
[p_nom]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/NotApplicable.svg 'Not macOS'

- [![p_win]](#-) [![p_mac]](#-) - すべてのプラットフォームで利用可能
- [![p_win]](#-) [![p_nom]](#-) - Windows OSのみで利用可能
- [![p_now]](#-) [![p_mac]](#-) - Mac OSのみで利用可能

<a id="application-compatibility"></a>
#### アプリケーション互換性

[a_all]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/OfficeLogoPlus.svg 'All applications'
[a_wd]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/WordLogo.svg 'Word'
[a_xl]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/ExcelLogo.svg 'Excel'
[a_ac]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/AccessLogo.svg 'Access'
[a_ol]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/OutlookLogo.svg 'Outlook'
[a_pp]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/PowerPointLogo.svg 'PowerPoint'
[a_misc]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/Duck.svg

- [![a_all]](#-) - すべてのアプリケーション
- [![a_wd]](#-) - Word
- [![a_xl]](#-) - Excel
- [![a_ac]](#-) - Access
- [![a_ol]](#-) - Outlook
- [![a_pp]](#-) - PowerPoint
- [![a_misc]](#- 'Misc') - その他アプリケーション（MS Project、AutoCADなど）－短い説明欄に指定

<a id="other-important-information"></a>
#### その他の重要情報

[o_32]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/32-Bit.svg '32-bit only'
[o_pass]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/Padlock.svg 'VBA is password protected'
[o_dll]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/Dependencies.svg
[o_inst]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/Installation.svg 'Requires installation'
[o_paid]: https://raw.githubusercontent.com/sancarn/awesome-vba/fdc62016ce17d14ad98e40f108a384b7a6631049/resources/Money.svg

- [![o_32]](#-) - 32ビットのみ
- [![o_pass]](#-) - VBAで記述されているが、コードはパスワード保護されている
- [![o_dll]](#- 'Requires external dependencies') - 外部依存関係が必要（例：`.dll`、`.ocx`、`.o`など）
- [![o_inst]](#-) - インストールが必要
- [![o_paid]](#- 'Link includes/leads to paid content') - リンクは有料コンテンツを含む

<a id="contributing"></a>
## コントリビューション

あなたの貢献は常に歓迎です！まず[contribution guidelines](https://github.com/sancarn/awesome-vba/blob/fdc62016ce17d14ad98e40f108a384b7a6631049/Contributing.md)を確認してください。
