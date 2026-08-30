---
title: "ahkscript/awesome-AutoHotkey"
description: "AutoHotkeyのライブラリ、スクリプト、ツール、学習資料を集めた厳選リスト"
licenseSource: "github-ahkscript-awesome-AutoHotkey-readme-md"
---

<a id="awesome-autohotkey"></a>
# Awesome AutoHotkey [![AutoHotkey](https://img.shields.io/badge/Language-AutoHotkey-yellowgreen.svg)](https://autohotkey.com/) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

優れた[AutoHotkey](https://autohotkey.com/)ライブラリ、配布物、スクリプト、ツール、資料の厳選リストです。他の[Awesomeリスト](https://github.com/bayandin/awesome-awesomeness)に着想を得ています。貢献前に[CONTRIBUTING.md](https://github.com/ahkscript/awesome-AutoHotkey/blob/master/.github/CONTRIBUTING.md)をお読みください。

古くなった、または開発終了済みでも歴史的価値のある項目は[Historical.md](https://github.com/ahkscript/awesome-AutoHotkey/blob/master/Historical.md)に掲載しています。

開発状況:
[![Build Status](https://travis-ci.org/ahkscript/awesome-AutoHotkey.svg)](https://travis-ci.org/ahkscript/awesome-AutoHotkey) [![awesome_bot](https://img.shields.io/badge/PoweredBy-awesome_bot-yellow.svg)](https://github.com/dkhamsing/awesome_bot)


* [Awesome AutoHotkey](#awesome-autohotkey)
 * [Libraries](#libraries)
    * [Clipboard](#clipboard)
    * [Console](#console)
    * [Data format](#libraries-data-format)
    * [Data Structures and Algorithms](#libraries-data-structs-algorithms)
    * [Database](#database)
    * [Filesystem](#filesystem)
    * [Graphics](#libraries-graphics)
    * [GUI](#libraries-gui)
    * [Hotkeys](#hotkeys)
    * [Joystick](#joystick)
    * [Maths](#maths)
    * [Memory](#memory)
    * [Networking](#networking)
    * [Plotting (graphs, bars, charts and etc)](#libraries-plotting)
    * [System](#libraries-system)
    * [Text manipulation](#text-manipulation)
  * [Library Distributions](#library-distributions)
  * [Scripts](#scripts)
    * [Clipboard](#scripts-clipboard)
    * [Filesystem](#scripts-filesystem)
    * [Graphics](#scripts-graphics)
    * [GUI](#scripts-gui)
    * [Maths](#scripts-maths)
    * [Mouse](#mouse)
    * [Typing](#typing)
    * [Window management](#window-management)
    * [Games](#games)
  * [Tools](#tools)
    * [Interpreter](#interpreter)
    * [Decompilers](#decompilers)
    * [Debugging](#debugging)
    * [Integrated Development Environment](#integrated-development-environment)
    * [GUI WYSIWYG Builders](#gui-wysiwyg-builders)
    * [Script Recorders and Writers](#script-recorders-and-writers)
    * [Web Syntax Highlighters](#web-syntax-highlighters)
    * [Others](#tools-others)
    * [(Use in) other programming languages](#use-in-other-programming-languages)
  * [Tutorials](#tutorials)
    * [Classes](#tutorials-classes)
    * [COM](#tutorials-com)
    * [GUI](#tutorials-gui)
    * [MCode (machine code)](#tutorials-mcode)
  * [Resources](#resources)
    * [Documentation](#documentation)
    * [Books](#books)
    * [Quick-start guides](#quick-start-guides)
    * [Websites](#websites)
  * [Forks](#forks)
    * [AutoHotkey_H](#autohotkey_h)

<hr/>

<a id="libraries"></a>
## ライブラリ
*便利なAutoHotkeyライブラリの一覧です。ライブラリとは、独自コードと組み合わせて新しい機能を作れる再利用可能なコードです。*

### Clipboard
* [WinClip](http://www.apathysoftworks.com/ahk/WinClip.zip) - by Deo - WinClipは、AutoHotkeyのクリップボード機能を拡張するクリップボード操作クラスで、RTF、HTMLおよび画像のサポートを含む。フォーラムスレッド： [link](https://autohotkey.com/board/topic/74670-class-winclip-direct-clipboard-manipulations/).

### Console
* [AHKonsole](https://github.com/G33kDude/Console) - by G33kdude - コンソールサポート用のクラスベースのAutoHotkeyライブラリ。このライブラリにより、コンソールを表すオブジェクトを作成し、複数のコンソールバッファオブジェクトを用いてダブルバッファリングを実現できる。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=4955).
* [LibCon](https://github.com/joedf/LibCon.ahk) - by joedf - コンソールサポート用のAutoHotkeyライブラリ。このライブラリにより、コンソールアプリケーションを作成し、他のコンソールインスタンスと相互作用できる。基本的に、このライブラリはコンソールの作成や相互作用に関することをすべてサポートする。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?t=17).

### <a name="libraries-data-format"></a>Data format
* [AHK_ctable](https://github.com/hoppfrosch/AHK_cTable) - by hoppfrosch - 表形式の文字列を扱うためのライブラリ - フォーラムスレッド： [link](https://autohotkey.com/board/topic/61256-object-table/://autohotkey.com/board/topic/61256-object-table/page-2?&#entry467816).
* [AutoHotkey-JSON](https://github.com/cocobelgica/AutoHotkey-JSON) - by cocobelgica - AutoHotkey用のJSONライブラリ。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=627).
* [CSV](https://github.com/hi5/CSV) - by trueski/kdoske - CSVファイルおよびListview関数を扱うためのライブラリ。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=34853).
* [List manipulation functions](http://www.hars.us/SW/List.ahk) - by Laszlo - コマ区切りリストを操作するための関数ライブラリ。フォーラムスレッド： [link](https://autohotkey.com/board/topic/3020-list-manipulation-functions/).
* [ObjCSV](https://github.com/JnLlnd/ObjCSV/) - by JnLlnd - CSVファイルをオブジェクトおよびListview関数に読み込み／保存するためのライブラリ。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=41).
* [ObjDump/ObjLoad](https://autohotkey.com/boards/viewtopic.php?f=6&t=3573) - by HotKeyIt - オブジェクトを変数／メモリにシリアライズ／デシリアライズする。
* [SerDes](https://github.com/cocobelgica/AutoHotkey-SerDes) - by cocobelgica - AutoHotkeyのオブジェクト構造をシリアライズ／デシリアライズする。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=4212).
* [Table](https://github.com/Jim-VxE/AHK-Lib-Table) - by VxE - 表形式（TSV）の文字列およびListview関数を扱うためのライブラリ。フォーラムスレッド： [link](https://autohotkey.com/board/topic/61540-lib-string-based-table-manipulation-v028/).
* [XA](https://github.com/hi5/XA) - by trueski/hi5 - 配列をXMLにシリアライズ／デシリアライズする。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=34849).

### <a name="libraries-data-structs-algorithms"></a>Data Structures and Algorithms
* [Facade](https://github.com/Shambles-Dev/AutoHotkey-Facade) - by Shambles - 関数型プログラミングライブラリのセット。- フォーラムスレッド： [link](https://www.autohotkey.com/boards/viewtopic.php?f=6&t=59253)
* [HashTable](https://github.com/Shambles-Dev/AutoHotkey-HashTable) - by Shambles - AutoHotkey用のハッシュテーブル実装。
* [LibCrypt](https://github.com/ahkscript/LibCrypt.ahk) - by different authors - キーリングおよびエンコード関数のコレクション。
* [Type_Checking](https://github.com/Shambles-Dev/AutoHotkey-Type_Checking) - by Shambles - AutoHotkey用の型チェック - フォーラムスレッド： [link](https://www.autohotkey.com/boards/viewtopic.php?f=6&t=59857)

### Database
* [AHKDb](https://github.com/AHKDb/AHKDb) - by AHKDb - タブ区切りデータ用のデータベースライブラリ。
* [ahkDBA](https://github.com/IsNull/ahkDBA) - by IsNull - OOP-SQLデータベースアクセスフレームワーク。フォーラムスレッド： [link](https://autohotkey.com/board/topic/71179).
* [Class_SQLiteDB](https://github.com/AHK-just-me/Class_SQLiteDB) - by just Me - AHK SQLite APIのラッパークラス。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?t=1064).
* [Leya - MySQL API](https://github.com/kevgk/Leya) - by kevgk - AutoHotkeyでMySQLデータベースを扱い、サーバー認証情報をクライアントに暴露しない。

### Filesystem
* [FileGetProperties](https://autohotkey.com/boards/viewtopic.php?f=6&t=3806) - by kon - 拡張ファイルプロパティを取得するための関数群

### <a name="libraries-graphics"></a>Graphics
* [GDIp](https://github.com/tariqporter/Gdip/) - by tic - Microsoftのgdiplus.dllとのインタラクションを支援するフル機能ライブラリ - フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=6517)
* [ImagePut](https://github.com/iseahound/ImagePut) - by iseahound - 画像をファイル、ストリーム、Windows、base64、URL、カーソル、スクリーン座標、クリップボード、ポインタ、ハンドルなどに変換できる画像ライブラリ。AutoHotkey v1およびv2に対応。 - フォーラムスレッド: [link](https://www.autohotkey.com/boards/viewtopic.php?f=6&t=76301&p=330615)
* [AHKv2-GDIP](https://github.com/mmikeww/AHKv2-Gdip) - 上記のGDI+ライブラリのアップデート。AHK v1.1およびAHK v2に対応 - フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=6517)
* [GDIp_ImageSearch](https://autohotkey.com/board/topic/71100-) - by tic - gdiplus.dllを使用してスクリーン上の画像インスタンスを検索するライブラリ。そのスレッドの末尾にMasterFocusの改善版があるか、または彼の [GitHub repo here](https://github.com/MasterFocus/AutoHotkey/tree/master/Functions/Gdip_ImageSearch) を参照してください
* [Simple GDI class](https://autohotkey.com/boards/viewtopic.php?f=6&t=5820) - by GeekDude - 低レベルGDI関数の使用を簡単にするクラス
* [Particle System](https://github.com/acorns/Particle-System) - by tidbit - GDI+を使用してGUIまたはスクリーンにパーティクルを追加するシンプルなクラス。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=26485)

### <a name="libraries-gui"></a>GUI

#### Combobox
* [CbAutoComplete](https://github.com/pulover/cbautocomplete) - by Pulover - AHKのComboBoxに入力された値を自動補完する。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=15002)

#### Custom Controls
* [Rebar](https://github.com/Pulover/Class_Rebar) - by Pulover - AutoHotkey Rebarカスタムコントロール向けのAHKクラス。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=139)
* [Toolbar](https://github.com/Pulover/Class_Toolbar) - by Pulover - AutoHotkey Toolbarカスタムコントロール向けのAHKクラス。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=138)

#### Edit
* [Edit v2.0](https://autohotkey.com/boards/viewtopic.php?f=6&t=5063) - by jballi - 軽量かつ驚くほど強力なデフォルトEditコントロールを表示・編集するためのライブラリ。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=5063)

#### General
* [AutoXYWH](https://autohotkey.com/boards/viewtopic.php?f=6&t=1079) - by tmplinshi - GUIがリサイズされたときにコントロールを自動的に移動・リサイズする
* [TaskDialog](https://github.com/AHK-just-me/TaskDialog) - by just Me - Win Vista+向けの強化版MsgBox - [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=4635)
* [OnWin](https://github.com/cocobelgica/AutoHotkey-Util/blob/master/OnWin.ahk) - by cocobelgica - ウィンドウイベント（WinWaitXXX async）時に関数を呼び出す。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=6463)
* [CGUI](https://github.com/lipkau/CGUI/) - by ChrisS85 - AutoHotkey向けのオブジェクト指向GUIライブラリ。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=26990)
* [Class_ScrollGUI](https://github.com/AHK-just-me/Class_ScrollGUI) - by just me - AHK GUIウィンドウの親としてスクロール可能なGUIを作成。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=6316)

#### ListBox
* [LBEX](https://github.com/AHK-just-me/LBEX) - by [just me](https://github.com/AHK-just-me) - ListBoxes向けのユーティリティ関数のコレクション。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=4755)
* [TransparentListBox](https://github.com/AHK-just-me/Class_TransparentListBox) - by just Me - AHK GUI向けの透過リストボックスコントロールを提供。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=108)

#### ListView
* [LV_Colors](https://github.com/AHK-just-me/Class_LV_Colors/) - by just Me - GUI ListViewのセルまたは行に個別に背景および/またはテキストカラーを設定。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=1081)
* [LV_EX](https://github.com/AHK-just-me/LV_EX) - by just me - AHK GUI ListViewコントロールに追加の関数を提供。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=1256)
* [LV_InCellEdit](https://github.com/AHK-just-me/Class_LV_InCellEdit/) - by just Me - ListView コントロール用のセル内編集。フォーラムスレッド: [link](http://https://autohotkey.com/boards/viewtopic.php?f=6&t=1076)
* [LV_Rows](https://github.com/Pulover/Class_LV_Rows) - by Pulover - AHK ListView コントロール用の追加機能。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=137)

#### Menu
* [[Lib] Menu](https://autohotkey.com/boards/viewtopic.php?t=3068) - by just me - AHK メニューに関連するいくつかの機能。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?t=3068)

#### Web
* [Neutron](https://github.com/G33kDude/Neutron.ahk/) - by G33kDude - AutoHotkey で HTML ベースのユーザーインターフェースを構築するためのツールセット。フォーラムスレッド: [link](https://www.autohotkey.com/boards/viewtopic.php?f=6&t=76865)

### Hotkeys
* [CHotkeyControl](https://autohotkey.com/boards/viewtopic.php?f=6&t=9087) - by evilC - AHK ホットキー GuiControl の代替品で、マウスボタンなどもサポート（一部成熟済）。
* [HParse](https://autohotkey.com/board/topic/92805-) - by Avi - 意味のあるショートカット（Ctrl+X）を AutoHotkey の構文（^x）に変換する関数。

### Joystick
* [CvJoyInterface](https://autohotkey.com/boards/viewtopic.php?t=5705) - by evilC - AHK を使って vJoy 虚擬ジョイスティックを制御。
* [JoystickWrapper](https://autohotkey.com/boards/viewtopic.php?f=19&t=28889) - by evilC - 完全なイベントベース、8軸、128ボタン、4POVのジョイスティック読み取り（C# DLL、Lexikos の CLR を使用）。
* [XInput](https://autohotkey.com/board/topic/35848-xinput-xbox-360-controller-api/) - by Lexikos - XInput を使って XBOX ゲームパッドを読み取り（L/Rトリガーを独立して読み取る唯一の方法）、rumble モーターを制御。

### Maths
* [calc()](https://autohotkey.com/board/topic/59087-func-calc-math-expression-evaluation-incl-brackets/?p=655135) - 数学式評価（括弧を含む）。
* [Eval](https://github.com/pulover/eval) - by Pulover - 文字列内の式を評価。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=13565)
* [Scientific Maths](https://autohotkey.com/board/topic/93516-) - by Avi - 高精度数学を支援するライブラリ。
* [Time()](https://autohotkey.com/board/topic/42668-time-count-days-hours-minutes-seconds-between-dates/) - by HotkeyIt - 2つの日付間の日数、時間、分、秒をカウント。フォーラムスレッド: [link](https://autohotkey.com/board/topic/42668-time-count-days-hours-minutes-seconds-between-dates/)

### Memory

* [classMemory](https://github.com/Kalamity/classMemory) - by RHCP (Kalamity) - AHK メモリ読み書きクラスでパターンスキャンをサポート。フォーラムスレッド: [link](https://www.autohotkey.com/boards/viewtopic.php?t=1177)

### Networking
* [AHKhttp](https://github.com/Skiouros/AHKhttp) - 基本的な HTTP サーバー。フォーラム [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=4890)
* [AHKsock](https://github.com/jleb/AHKsock) - by TheGood - 関数ベースのソケットライブラリ。TCP をサポート。フォーラム [link](https://autohotkey.com/board/topic/53827-ahksock-a-simple-ahk-implementation-of-winsock-tcpip/)
* [Chrome.ahk](https://github.com/G33kDude/Chrome.ahk) - by G33kDude - Google Chrome をネイティブな AutoHotkey で自動化。フォーラム [link](https://www.autohotkey.com/boards/viewtopic.php?t=42890)
* [FTP](https://github.com/jNizM/Class_FTP) - by jNizM - FTP セッション用の AutoHotkey ワッパー（クラス） - フォーラム [link](https://www.autohotkey.com/boards/viewtopic.php?f=6&t=79142&p=344445#p344445)
* [Rufaydium WebDriver](https://github.com/Xeo786/Rufaydium-Webdriver) - by Xeo786 - Chromium ベースのブラウザをサポートするウェブドライバーライブラリ。webdriver だけ必要（Selenium／websocket は不要）。フォーラム [link](https://www.autohotkey.com/boards/viewtopic.php?f=6&p=457302)
* [Socket Class (überarbeitet)](https://autohotkey.com/board/topic/94376-) - by Bentschi - クラスベースのソケットライブラリ。TCP および UDP をサポート。
* [Socket.ahk](https://github.com/G33kDude/Socket.ahk) - by GeekDude - Bentschiのソケットライブラリ - フォーラム [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=35120)
* [WebSocket.ahk](https://github.com/G33kDude/WebSocket.ahk) - by GeekDude - クラスベースのWebSocketライブラリ - フォーラム [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=35117)
* [WinSCP.ahk](https://github.com/lipkau/WinSCP.ahk) - by Lipkau - WinSCPをAHKで使用できるライブラリ

### <a name="libraries-plotting"></a>Plotting (graphs, bars, charts and etc)
* [BarChart](https://autohotkey.com/board/topic/82959-barchart/) - by Learning One - バーチャートを作成するためのライブラリ。ダウンロード [link](https://dl.dropboxusercontent.com/u/171417982/AHK/BarChart/BarChart.zip).
* [Excel Charts](https://autohotkey.com/board/topic/88438-excel-charts/) - by Xx7 - Excelでグラフを作成し、グラフを画像として保存してGUIに表示するライブラリ.
* [XGraph](https://autohotkey.com/boards/viewtopic.php?t=3492) - by SKAN - 実時間データのグラフィカルプロットに使える関数ライブラリ.
* [SVGraph](https://github.com/CapnOdin/SVGraph) - by CapnOdin - SVGraphでAutoHotkeyにグラフ表示とチャート機能を提供。フォーラム [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=23892)
* [gdiChartLib](https://github.com/nnnik/gdiChartLib) - by nnnik - AutoHotkey用のgdipチャートライブラリ。フォーラム [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=31533)

### <a name="libraries-system"></a>System
* [RunAsTask](https://autohotkey.com/boards/viewtopic.php?t=4334) - by SKAN - UACプロンプトなしでスクリプトを自動的に権限を上げる.
* [Vista Audio Control Functions](https://github.com/ahkscript/VistaAudio) - by Lexikos - SoundSet/SoundGetの一部サブコマンドに代替する機能を提供し、SoundSet/SoundGetがサポートしていない追加機能も提供。フォーラムスレッド: [Link](https://autohotkey.com/board/topic/21984-vista-audio-control-functions/?p=143564)

### Text manipulation
* [String Things](https://autohotkey.com/boards/viewtopic.php?f=6&t=53) - by tidbit - フリーライブラリとしての文字列操作関数.
* [TF](https://github.com/hi5/TF) - by hi5 - *.txt, *.ahk, *.html, *.cssなどテキストファイルおよび文字列（または変数）の操作に使える関数。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=576).

<a id="library-distributions"></a>
## ライブラリ配布物
*便利なAutoHotkeyライブラリ配布物の一覧です。ライブラリ配布物は、ライブラリを配布するための仕組みです。*

* [ahk-libs](https://github.com/rshipp/ahk-libs) - Ryan Shippのライブラリコレクション.
* [ASPDM](https://github.com/ahkscript/ASPDM) - [ahkscript](https://github.com/ahkscript)の人々によるパッケージ/標準ライブラリの配布と管理。Trello [link](https://trello.com/b/XVP4M76d/package-stdlib-distribution-and-management).
* [pAHKlight](https://github.com/hi5/pAHKlight) - AutoHotkeyのライブラリ、クラス、関数、ツールについての軽量ガイド.

<a id="scripts"></a>
## スクリプト
*便利なAutoHotkeyスクリプトの一覧です。スクリプトは単独のプログラムとして使うコードで、他のコードへ組み込むことを目的としません。*

### <a name="scripts-clipboard"></a>Clipboard
* [CL3](https://github.com/hi5/CL3) - テキストのみのクリップボードマネージャー（プラグインあり：検索、事前定義されたスロット、ClipChain、FIFO、エディタなど）。フォーラムスレッド [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=814).
* [ClipBoardMonitor](https://github.com/536/my-startup-ahk-scripts/blob/master/startup/ClipBoardMonitor/ClipBoardMonitor.ahk) - クリップボードの変更を監視し、テキストの単語数をツールチップ表示、または画像のための一時GUIを表示。
* [Clipjump](http://clipjump.sourceforge.net/) - Windows向けのマルチクリップボード管理ツール。ソースコード: [GitHub](https://github.com/aviaryan/Clipjump)。フォーラムスレッド: [link 1](https://autohotkey.com/boards/viewtopic.php?f=6&t=401), [link 2](https://autohotkey.com/board/topic/91488-clipjump-the-ultimate-clipboard-manager-updated-0708/).

### <a name="scripts-filesystem"></a>Filesystem
* [Belvedere](https://github.com/adampash/belvedere) - ファイル名、拡張子、サイズ、年齢などに基づいて、ファイルに対して移動、コピー、削除などの操作を行うルールを設定。詳細情報 [link](http://lifehacker.com/341950/belvedere-automates-your-self-cleaning-pc).
* [QuickAccessPopup](https://github.com/JnLlnd/QuickAccessPopup) - マルチ用途のランチャーやファイルスイッチャー。ウェブサイト [link](https://www.quickaccesspopup.com/).
* [SpicyKeys](https://spicykeys.github.io/) - Windows Explorerで選択されたファイルを開くか、移動またはコピーするためにショートカットキーを使用します。フォーラムスレッド： [link](https://www.autohotkey.com/boards/viewtopic.php?f=6&t=97171)

### <a name="scripts-graphics"></a>Graphics
* [Fun with GDIPlus](https://autohotkey.com/boards/viewtopic.php?f=6&t=6071) - 面白いGDI+の例です。

### <a name="scripts-gui"></a>GUI
* [Examples of Non-Standard GUIs (ActiveX, GDI, etc.)](https://autohotkey.com/boards/viewtopic.php?f=6&t=3851) - 非標準手法を用いて美しいユーザーインターフェースを実現するGUIの例です。


### <a name="scripts-maths"></a>Maths
* [Monster](https://autohotkey.com/board/topic/15675-monster-evaluate-math-expressions-in-strings/) - 文字列に記載された数学式を評価（電卓）。
* [Unit Converter](https://autohotkey.com/board/topic/39359-unit-converter/) - 長さから密度、熱伝導率まで、一般的な英語および科学的単位と一般的な量を含む単位変換ツール。また、物理および数学の定数を含むセクションも提供しています。

### Mouse
* [EitherMouse](http://www.EitherMouse.com) - 複数のマウス、個別設定、2番目のマウスでのマウスボタンの自動交換。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=3648)
* [MouseGestureL](http://www.vector.co.jp/download/file/winnt/util/fh633547.html) - マウスジェスチャーでアプリケーションを制御。ジェスチャーと動作はカスタマイズ可能なインターフェースで定義可能です。英語および日本語のドキュメンテーション - 日本語ホームページ [link](http://hp.vector.co.jp/authors/VA018351/mglahk.html)
* [Radial Menu](https://autohotkey.com/board/topic/46856-radial-menu-scripts-updated-07122014/) - 強力なショートカットキー、ランチャーやマウスジェスチャーシステムなど（カスタマイズ可能） - フォーラムスレッド： [link](https://autohotkey.com/board/topic/46856-radial-menu-scripts-updated-07122014/)

### Typing
* [AutoComplete](https://github.com/Uberi/Autocomplete) - 入力中に単語を補完・提案します。フォーラムスレッド： [link](https://autohotkey.com/board/topic/60998-autocomplete/)
* [DateHotkey](https://github.com/tiuub/DateHotkey) - 現在・過去・来月の日付を簡単に取得するためのショートカットキー。フォーラムスレッド： [link](https://www.autohotkey.com/boards/viewtopic.php?f=6&t=89929)
* [Half-QWERTY](https://autohotkey.com/board/topic/1257-half-qwerty-one-handed-typing/page-6#entry216183) - 一手で入力。スペースバーをマウスキーとして使用し、フルサイズキーボードの左右の文字を片手で入力可能です。詳細はフォーラムスレッド： [link](https://autohotkey.com/board/topic/1257-half-qwerty-one-handed-typing/)
* [KeyPress OSD](https://github.com/marius-sucan/KeyPress-OSD) - 画面表示（On-Screen Display）は、キーまたはマウスボタンの押下を明確に表示するテキストサイズで表示します。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=225)
* [Lintalist](http://lintalist.github.io/) - プラグインで拡張可能な検索可能なインタラクティブリストでテキストをコピー・ペーストします。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=3378)
* [Portable Keyboard Layout](http://pkl.sourceforge.net/) - Dvorak、Colemak、Assetなどの効率的なキーボードレイアウトを学ぶための支援ツール。フォーラムスレッド： [link](https://autohotkey.com/board/topic/25991-portable-keyboard-layout/)
* [Static Hands](https://github.com/almogtavor/static-hands) - CapsLockキーを使った非常に便利なショートカット。入力中に手を動かす必要がなく、非常にシンプル。学習曲線なし。
* [Thumbscript](https://autohotkey.com/board/topic/27198-beta-thumbscript-ahk/) - 数値キーボードを使って入力可能で、1文字につき2回の数値キー押下で入力可能です。ドキュメンテーション： [link](http://thumbscript.com/howitworks.html)
* [TypingAid](https://github.com/ManiacDC/TypingAid/releases) - 入力中に単語を補完・提案します。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=5644) GitHub [link](https://github.com/ManiacDC/TypingAid)

### Window Management
* [Automatic Window Manager](https://autohotkey.com/boards/viewtopic.php?f=6&t=17907) - 各プロセスの最後のウィンドウ位置を保存・復元します。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=17907)
* [bug.n](https://github.com/fuhsjr00/bug.n) - タイル型ウィンドウマネージャー。フォーラムスレッド： [link](https://autohotkey.com/board/topic/30332-bugn-tiling-window-manager/)
* [Min2Tray](http://junyx.breadfan.de/Min2Tray/) - ウィンドウをトレイに最小化など、さらに多くの機能。フォーラムスレッド： [link](https://autohotkey.com/board/topic/4173-min2tray-v179-minimize-window-to-tray-much-more/)
* [Open-Show-Apps](https://github.com/JuanmaMenendez/AutoHotkey-script-Open-Show-Apps) - 開く、復元するか、または指定されたウィンドウやChromeのアプリを最小化する。フォーラムスレッド： [link](https://www.autohotkey.com/boards/viewtopic.php?f=6&t=63579&p=272220#p272220)
* [SnapX](https://github.com/benallred/SnapX/releases) - Windows/Aeroスナップを強化し、そのショートカットキー（Win+左/右など）を取得して、スナップの位置やサイズについてより細かい制御を提供。複数モニタ、解像度、DPIレベルに対応。
* [WindowPadX](https://github.com/hoppfrosch/WindowPadX) - 複数モニタ環境で有用な機能を提供するツール。_WindowPadXはLexikosが元に公開したWindowPadの拡張版であり、オリジナルのフォーラムスレッド： [link](https://autohotkey.com/board/topic/19990-windowpad-window-moving-tool/)_

### Games
* [Achromatic - ProgressPlatformer](https://github.com/Uberi/ProgressPlatformer/releases) - プラットフォームゲーム。フォーラムスレッド： [link](https://autohotkey.com/board/topic/64529-achromatic-progressplatformer-refined/)、GitHub： [link](https://github.com/Uberi/ProgressPlatformer)
* [AHK Mahjong Solitaire](https://autohotkey.com/boards/codeboxplus/download/183219-1) - マージョングラム。フォーラムスレッド： [link](https://autohotkey.com//boards/viewtopic.php?f=19&t=40133)
* [F1 Racer](https://www.dropbox.com/sh/01ucst7jeybn9ed/AABCItk8VKlfVp67T0P_DJFia) - 2人または4人参加のレーシングゲーム。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=19&t=4307&p=24024&hilit=racing#p24024)
* [Infection](https://autohotkey.com/boards/download/file.php?id=3349&sid=b3444f44c767f7698ede586c81d40fe2) - ボードゲーム。アタクスとも呼ばれる。フォーラムスレッド： [link](https://autohotkey.com/board/topic/35504-game-manytetris-customizable-pocket-tetris/)
* [Ishido](https://github.com/flibioahk/ishido/archive/master.zip) - レトロパズルゲーム。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?t=31825https://github.com/flibioahk/ishido)、GitHub： [link](https://github.com/flibioahk/ishido)
* [ManyTetris](http://sector-seven.net/assets/stuff/ManyTetris.zip) - 複数のテトリスバリエーション。フォーラムスレッド： [link](https://autohotkey.com/board/topic/35504-game-manytetris-customizable-pocket-tetris/)
* [Out of the Sea](http://ludumdare.com/compo/ludum-dare-24/?action=preview&uid=14126) - 進化することで獲られる魚に避けられるようにする。GitHub： [link](https://github.com/Uberi/Ludum-Dare-24)
* [PABI Logical](https://github.com/bichlepa/PABI-Logical/releases) - AmigaのゲームLogicalのリメイク。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=33267)、GitHub： [link](https://github.com/bichlepa/PABI-Logical)
* [Sudoku](https://autohotkey.com/boards/codeboxplus/download/77645-1) - スードクーカードゲームと解法ツール。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?t=15291)

## <a name="tools"></a>ツール
*AutoHotkey向けの便利なツール一覧です。*

### Interpreter
* [AutoHotkey](https://autohotkey.com/download/) - AutoHotkeyのインタープリターアンインストーラーおよびバイナリファイル。
* [AutoHotkey DLL](https://github.com/HotKeyIt/ahkdll-v1-release/) - AutoHotkey.dllは、他のプログラミングおよびスクリプト言語にAutoHotkeyの世界を開放する。フォーラムスレッド： [link](https://autohotkey.com/board/topic/39588-autohotkeydll/)。ドキュメンテーション [link](http://hotkeyit.ahk4.net/files/AutoHotkey-txt.html)。
* [AutoHotkey build for CE](http://www.autohotkey.net/%7EMicha/AutohotkeyCE/AutoHotkeyCEUni.CAB) - ポケットPC／WinCE／スマートフォン向けのAutoHotkey。フォーラムスレッド： [link](https://autohotkey.com/board/topic/24776-autohotkey-for-pocket-pcs-wince-smartphones/)。ドキュメンテーション [link](http://www.autohotkey.net/~Micha/AutohotkeyCE/html/index.htm)。
* [AHK_X11](https://github.com/phil294/AHK_X11) phil294がLinux向けに実装したAutoHotkey v1.0.24の基本的なが機能する実装。 [Forum](https://www.autohotkey.com/boards/viewtopic.php?f=81&t=106640)
* [IronAHK](https://github.com/polyethene/IronAHK) - クロスプラットフォームの.NETリライト - *未完成*。
* [Keysharp](https://bitbucket.org/mfeemster/keysharp/src/master/) - mfeemsterによるIronAHKの継続。 [Forum](https://www.autohotkey.com/boards/viewtopic.php?f=80&t=77248)

### Debugging
* [[Class] Console](https://autohotkey.com/boards/viewtopic.php?f=6&t=2116) - このクラスは、スクリプトのデバッグを、シンプルなテキスト処理からデータおよび配列の出力・ログ記録まで簡略化するためのもの。GitHub [link](https://github.com/AfterLemon/Class_Console)。
* [Print Array](https://autohotkey.com/board/topic/70490-print-array/) - GUIに配列内容を表示する関数。
* [Yunit](https://github.com/Uberi/Yunit) - Uberi および infogulch による AutoHotkey 用のシンプルなユニットテストフレームワーク

### Decompilers
* [AutoHotkey decompiler](https://gist.github.com/Uberi/3334552#file-decompiler-ahk) - AHK 1.1+ 用： [link](https://autohotkey.com/board/topic/82986-ahk-l-decompiler-payload-method/)
* [AutoHotkey decompiler - classic](https://autohotkey.com/docs/Scripts.htm#exe2ahk) - AHK 1.0 ではパスワードまたは /nodecompile で保護されたファイルに対応しない

### Integrated Development Environment
* [AHK Studio](https://autohotkey.com/boards/viewtopic.php?f=6&t=300) - AutoHotkey 用の SciLexer.dll をベースとした IDE
* [Adventure (formerly AutoGUI)](https://www.autohotkey.com/boards/viewtopic.php?f=64&t=89901) - [Alguimist](https://autohotkey.com/boards/memberlist.php?mode=viewprofile&u=64723) による AHK IDE で便利なビルトインプラグインと GUI デザイナーを備えたもの
* [AutoHotFlow](https://www.dropbox.com/s/99cwiqpzlx4mtuz/AutoHotFlow%20Installation.exe?dl=1) - アプリケーションを描画する。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=6399)。GitHub [link](https://github.com/bichlepa/AutoHotFlow)
* [DRAKON Editor](https://autohotkey.com/boards/viewtopic.php?f=6&t=3108) - AutoHotkey 用の可視プログラミング（DRAKON ダイアグラムを使用）
* [Notepad++ for AutoHotkey](https://autohotkey.com/boards/viewtopic.php?f=7&t=50) - 人気のコードエディタ Notepad++ への AutoHotkey 用のセットアップ
* [SciTE4AutoHotkey](http://fincs.ahk4.net/scite4ahk/) - AutoHotkey 用の SciTE をベースとした IDE
* [SublimeAutoHotkey](https://github.com/ahkscript/SublimeAutoHotkey) - SublimeText 用の AutoHotkey AHK 言語パッケージ。構文強調表示、コメントの切り替え、自動補完、ビルドシステム定義、ahkrun、ahkcompile、ahkrunpiped 用のコマンドを含む
* [Sublime 4 AutoHotkey](https://autohotkey.com/board/topic/91066-sublime-4-autohotkey-updated-1311/) - Sublime 4 AutoHotkey は Sublime Text エディタへのパッチで、AutoHotkey のサポートを追加。-（停止）
* [vim-AHKcomplete](https://github.com/huleiak47/vim-AHKcomplete) - Vim 用の自動補完プラグイン。（omni-completion）
* [Vim autohotkey-ahk](https://github.com/vim-scripts/autohotkey-ahk) - Vim 用の AutoHotkey の構文強調表示プラグイン
* [VSCode extension](https://marketplace.visualstudio.com/items?itemName=slevesque.vscode-autohotkey) - Visual Studio Code（VSCode）用の AutoHotkey の構文強調表示プラグイン
* [AutoHotkey Plus Plus](https://marketplace.visualstudio.com/items?itemName=mark-wiemer.vscode-autohotkey-plus-plus) AutoHotkey IntelliSense、デバッグ、言語サポート（VS Code用）：cweijan による AutoHotkey Plus を Mark Wiemer がフォークしたもの

### GUI WYSIWYG Builders
* [Adventure (formerly AutoGUI)](https://www.autohotkey.com/boards/viewtopic.php?f=64&t=89901) - [Alguimist](https://autohotkey.com/boards/memberlist.php?mode=viewprofile&u=64723) による WYSIWIG GUI デザイナーおよびスクリプトエディタ
* [GUI Creator (formerly Basic GUI Creator)](https://autohotkey.com/boards/viewtopic.php?f=6&t=303) - AutoHotkey 用の WYSIWYG GUI クリエーター
* [MagicBox](https://autohotkey.com/boards/viewtopic.php?p=100953#p100953) - [Alguimist](https://autohotkey.com/boards/memberlist.php?mode=viewprofile&u=64723) による MagicBox はメッセージボックスの作成を支援する開発ツール。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?p=100953#p100953)

### Script Recorders and Writers
* [Pulover’s Macro Creator](http://www.macrocreator.com/) - 無料の自動化ツールおよびスクリプト生成ツール。初心者向け。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=143)。GitHub [link](https://github.com/Pulover/PuloversMacroCreator)

### Web Syntax Highlighters
* [highlight.js](https://highlightjs.org/) - JavaScript で書かれた構文強調表示ツール。130以上の言語（AutoHotkeyを含む）をサポート。
* [PrismJs](https://autohotkey.com/boards/viewtopic.php?f=22&t=3942) - 軽量かつ最小限のAutoHotkey文法強調表示。
* [Syntax Highlighter](https://github.com/aviaryan/highlighter-ahk-zenburn) - AutoHotkey用の古い文法強調表示で、行番号のデフォルトサポートを提供。

### <a name="tools-others"></a>Others
* [GoTo](https://autohotkey.com/board/topic/95009-) - 任意のテキストエディタに追加された機能で、現在のファイル内のラベル、ショートカット、ホット文字列、関数にジャンプできる。
* [GoToTilla](https://gist.github.com/hoppfrosch/4b4943b1311fd6a92f02) - AHKソースコード内のトークンにジャンプできる追加機能。
* [Context sensitive help in any editor](https://autohotkey.com/board/topic/94493-) - 任意のテキストエディタに追加された機能で、F1を押下することで文脈に応じたヘルプを提供。
* [CodeQuickTester](https://autohotkey.com/boards/viewtopic.php?f=6&t=6113) - GeekDudeによる軽量な動的コードテストツール。
* [iWB2 Learner](https://sourceforge.net/projects/ahkcn/files/Recommended/iWB2%20Learner/) - jethrowによるiWB2 Learnerは、インターネットエクスプローラーのウェブページに関する情報を収集するツール。フォーラムスレッド： [link](https://autohotkey.com/board/topic/84258-iwb2-learner-iwebbrowser2/)
* [AHK-EXE-Swapper](https://autohotkey.com/boards/viewtopic.php?f=6&t=6310) - evilCによるAHKバージョンの迅速な切り替え。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=6310)。
* [AEI](https://github.com/joedf/AEI.ahk) - joedfによるAutoHotkey環境情報およびAHK対応システム情報の表示ツール。華やかなアップデートチェック機能を備え、自動ダウンロードと進行状況バーを提供。フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=5825)。
* [WinSpy](https://autohotkey.com/boards/viewtopic.php?f=6&t=28220) - AlguimistによるAHKで書かれた便利なウィンドウスパイ/情報ツール。

### (Use in) other programming languages
* [AutoHotkey.dll](https://hotkeyit.github.io/v2/docs/AutoHotkeyDll.htm) - [AutoHotkey_H](#autohotkey_h)配布版の一部。他の言語からautohotkey.dllをロードし、通常のAHKコードをdllファイルに渡して実行する。ここに[exported functions](https://hotkeyit.github.io/v2/docs/AHKH_Features.htm)のリストを参照。一部の古いリンク： [python example](https://autohotkey.com/board/topic/56938-simple-python-intergration-example/), [c/c++ example](https://autohotkey.com/board/topic/39588-autohotkeydll/://autohotkey.com/board/topic/39588-autohotkeydll/page-10?&#entry321945), [forum link](https://autohotkey.com/board/topic/39588-autohotkeydll/)
* [.NET Framework Interop (CLR, C#, VB)](https://dl.dropbox.com/u/20532918/Lib/CLR-1.2.zip) - フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=4633)。
* [ActiveScript - Host VBScript and JScript in-process](https://autohotkey.com/boards/viewtopic.php?f=6&t=4555) - VBScriptやJScriptなどのアクティブスクリプト言語にインターフェースを提供し、MicrosoftのScriptControlに依存せず、64ビットプログラムでは利用不可であるため。
* [Exo-Javascript](https://github.com/Aurelain/Exo) - AHKをJavaScriptで書く — フォーラムスレッド： [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=5714)、Exo-CLI（インタラクティブコマンドライン） [link](https://github.com/joedf/Exo-CLI.ahk)。
* [LibLua](https://autohotkey.com/board/topic/40690-ahk-lua-interop-stdlib-proof-of-concept/) - *注意：lua.ahkおよびlua_ahkfunctions.ahkは [here](https://code.google.com/archive/p/wow-vending-machine/source)で見つかる。*
* [Machine code functions: Bit Wizardry](https://autohotkey.com/board/topic/19483-machine-code-functions-bit-wizardry/) - チュートリアル [link](https://autohotkey.com/boards/viewtopic.php?f=7&t=32)、C/C++からMCode生成器フォーラム [link](https://autohotkey.com/boards/viewtopic.php?f=6&t=4642)。
* [Embed Perl](http://thomaslauer.com/comp/Calling_Perl_from_AHK_or_AU3) - フォーラムスレッド： [link](https://autohotkey.com/board/topic/11249-embedding-perl/)。
* [PAHK](https://code.google.com/archive/p/pahk) - フォーラムスレッド： [link](https://autohotkey.com/board/topic/89022-pahk-python-package-to-extend-python-with-autohotkey/)。
* [PYAHK](https://bitbucket.org/kitsu/pyahk/downloads) - ドキュメンテーション [link](https://pyahk.readthedocs.io/en/latest/)。
* [ahk](https://github.com/spyoungtech/ahk) - AutoHotkey用のPythonラッパー — フォーラムスレッド： [link](https://www.autohotkey.com/boards/viewtopic.php?f=6&t=63184)
* [AutoHotkey.py](https://github.com/Perlence/AutoHotkey.py) - PythonでAutoHotkeyスクリプトを書く - フォーラムスレッド: [link](https://www.autohotkey.com/boards/viewtopic.php?f=6&t=86025)

<a id="tutorials"></a>
## チュートリアル
*AutoHotkeyの便利なチュートリアル一覧です。*

### <a name="tutorials-classes"></a>Classes
* [Classes in AHK, Basic tutorial](https://autohotkey.com/boards/viewtopic.php?f=7&t=6033) - AutoHotkeyクラスの基本チュートリアル
* [Classes in AHK, a Dissection (Advanced)](https://autohotkey.com/boards/viewtopic.php?f=7&t=6177) - AutoHotkeyクラスの高度チュートリアル

### <a name="tutorials-com"></a>COM
* [MS Office COM Basics](https://autohotkey.com/boards/viewtopic.php?f=7&t=8978) - AutoHotkeyとMS Officeの組み合わせ使用

### <a name="tutorials-gui"></a>GUI
* [Use HTML and CSS for your GUIs!](https://autohotkey.com/boards/viewtopic.php?f=7&t=4588) - HTMLとCSSを使ってGUIを作成する

### <a name="tutorials-mcode"></a>MCode (machine code)
* [MCode Tutorial](https://autohotkey.com/boards/viewtopic.php?f=7&t=32) - MCode（マシンコード）チュートリアル

<a id="resources"></a>
## リソース
*AutoHotkeyに関するウェブサイト、ドキュメント、ガイド、動画、記事などの資料一覧です。*

### Documentation
* [Official documentation](https://autohotkey.com/docs/AutoHotkey.htm) - 公式最新AutoHotkeyドキュメント。GitHub [link](https://github.com/Lexikos/AutoHotkey_L-Docs).

### Books
* [ahkbook](http://ahkscript.github.io/ahkbook/projectinfo.html) - AutoHotkeyに関する書籍（未完成）。フォーラムスレッド: [link](https://autohotkey.com/board/topic/73014-ahkbook-a-free-online-book-for-autohotkey/).

### Quick-start guides
* [Official quick start tutorial](https://autohotkey.com/docs/Tutorial.htm) - 公式クイックスタートチュートリアル - 原初的にtidbitが書いた。フォーラムスレッド: [link](https://autohotkey.com/boards/viewtopic.php?f=7&t=27).

### Websites
* [autohotkey.com](https://autohotkey.com/) - AutoHotkeyスクリプト言語の公式ウェブサイト（ダウンロード、フォーラム、ドキュメント）
* [autohotkey.com/foundation](https://autohotkey.com/foundation) - 公式ページの [AutoHotkey Foundation LLC](https://autohotkey.com/foundation/)、このソフトウェアのために設立された非営利LLC（有限責任会社）。組織証明書（pdf） [link](https://autohotkey.com/certificate_of_organization.pdf).
* [ahkscript GitHub organization](https://github.com/ahkscript) - 公式ahkscript GitHub組織

<a id="forks"></a>
## フォーク
*Forks of AHK which add new features to the core language*

### AutoHotkey_H
* [AutoHotkey_H](https://hotkeyit.github.io/v2/) - AHK_HはオリジナルのAutoHotkeyに機能を追加し、NewThread()関数またはAutoHotkey.dllを使用して真のマルチスレッドを提供。 [Full list of v1 changes](https://hotkeyit.github.io/v1/docs/AutoHotkey.htm) + [Full list of v2 changes](https://hotkeyit.github.io/v2/docs/AutoHotkey.htm)

<a id="license"></a>
## ライセンス

[![Creative Commons License](https://licensebuttons.net/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)

This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
