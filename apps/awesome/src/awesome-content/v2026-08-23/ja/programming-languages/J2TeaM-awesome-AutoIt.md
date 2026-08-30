---
title: "J2TeaM/awesome-AutoIt"
description: "AutoItのUDF、サンプルスクリプト、ツール、学習リソース集"
licenseSource: "github-J2TeaM-awesome-AutoIt-readme-md"
---

# Awesome AutoIt

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Build Status](https://travis-ci.org/J2TeaM/awesome-AutoIt.svg)](https://travis-ci.org/J2TeaM/awesome-AutoIt)
[![Creator](https://img.shields.io/badge/Creator-Juno__okyo-blue.svg)](https://junookyo.blogspot.com/)
[![Twitter Follow](https://img.shields.io/twitter/follow/juno_okyo.svg?label=Follow&maxAge=2592000)](https://twitter.com/juno_okyo)

> [AutoIt](https://www.autoitscript.com/)向けの優れたUDF、サンプルスクリプト、ツール、役立つリソースを厳選したリスト。

[Juno_okyo](https://twitter.com/juno_okyo)が作成し、[awesome](https://github.com/sindresorhus/awesome)リストから着想を得ています。

<a id="table-of-contents"></a>
## 目次





- [Awesome AutoIt](#awesome-autoit-)
  - [UDF/Libraries](#udflibraries)
    - [Automation](#automation)
      - [Browsers](#browsers)
      - [Microsoft Office](#microsoft-office)
      - [OpenOffice](#openoffice)
    - [Databases and web connections](#databases-and-web-connections)
    - [Data compression](#data-compression)
    - [Encryption and hash](#encryption-and-hash)
    - [GUI Additions](#gui-additions)
    - [Controls](#controls)
    - [Hardware](#hardware)
    - [Information gathering](#information-gathering)
    - [Internet protocol suite](#internet-protocol-suite)
    - [Maths](#maths)
    - [Media](#media)
    - [Graphics and image](#graphics-and-image)
    - [Players](#players)
    - [Sound](#sound)
    - [PDF](#pdf)
    - [Security](#security)
    - [Social Media and other Website API](#social-media-and-other-website-api)
    - [Windows](#windows)
    - [Misc](#misc)
  - [Tools](#tools)
  - [Useful Resources](#useful-resources)
    - [Documents](#documents)
    - [Websites](#websites)
    - [Guides/Tutorials](#guidestutorials)
    - [Videos](#videos)
    - [Books](#books)
    - [Syntax Highlighter](#syntax-highlighter)
  - [License](#license)
  - [Other Awesome Lists](#other-awesome-lists)



<a id="udflibraries"></a>
## UDF／ライブラリ

Listing of libraries of **[user defined functions](https://en.wikipedia.org/wiki/User-defined_function)** (UDF). These libraries have been written to allow easy integration into your own scripts and are a very valuable resource for any programmer.

<a id="automation"></a>
### 自動化

- [Active Directory (by water)](https://www.autoitscript.com/forum/index.php?showtopic=106163) - Windows active directoryを制御および操作するための広範なライブラリ。ドキュメントページへのリンク。
- [GTK+ (by prazetto)](https://www.autoitscript.com/forum/index.php?showtopic=150231) - GTK+ フレームワーク | ウィジェット。
- [IUIAutomation MS framework (by junkew)](https://www.autoitscript.com/forum/index.php?showtopic=153520) - IUIAutomation MSフレームワークによるChrome、FF、IEなどへの自動化。
- [Java (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=87956) - あなたのアプリケーションとJavaアプリケーションの間をアクセスブリッジを作成。これにより、一部のJavaアプリケーションを自動化できる。
- [SAP (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=86574) - SAPビジネスマネジメントの自動化。
- [SAPWizard (by ozmike)](https://www.autoitscript.com/forum/index.php?showtopic=149540) - SAPWizard UDF。
- [Service (by arcker)](https://www.autoitscript.com/forum/index.php?showtopic=80201) - AutoItコードで独自のサービスを作成。
- [WiFi (by MattyD)](https://www.autoitscript.com/forum/index.php?showtopic=91018) - あなたの無線LANに対する低レベルの制御。
- [AutoItMonkey](https://github.com/ohtejera/AutoItMonkey) - AutoItMonkeyは、Androidエミュレーターまたはデバイス上で実行されるUDFであり、クリック、タッチ、ジェスチャーなどのユーザーエベント、およびシステムレベルのイベントを偽乱数ストリームとして生成する。
- [ImperiusAutoIt](https://ohtejera.github.io/ImperiusAutoIt/) - Imperius AutoItは、モバイルテスト自動化向けの [ImperiusGeorge](https://github.com/lookout/ImperiusGeorge)クライアントであり、ネイティブAndroidアプリをサポート。
- [3270 (by Worlor)](https://github.com/Worlor/AutoIt-3270) - AutoITで3270テラミナルを自動化するためのライブラリ。

<a id="browsers"></a>
#### ブラウザー

- [Chrome (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=154439) - 上記と同じ内容がGoogle Chrome向け。Chromeで最も一般的なタスクをChrome UDFで自動化。
- [Firefox (by Stilgar)](https://www.autoitscript.com/forum/index.php?showtopic=95595) - IEに比べて自動化サポートがやや少ないが、それでも非常に良い。
- [FireFox Profile Backup 1.0 (by careca)](https://www.autoitscript.com/forum/files/file/224-firefox-profile-backup/) - Firefoxプロファイルのバックアップまたは復元。アプリケーションはホームドライブにプロファイルを検索し、そのプロファイルをバックアップする。
- [_FF_AutoLogin (by Stilgar)](https://www.autoitscript.com/forum/index.php?showtopic=124330) - これはFirefoxおよびFF.au3向けの自動ログイン機能およびログイン機能生成器。
- [_FF_DM (by Stilgar)](https://www.autoitscript.com/forum/index.php?showtopic=92035) - Firefoxダウンロードマネージャー（ダウンロードウィンドウではない）を制御するUDF。
- [_FF_FoxBox (by Stilgar)](https://www.autoitscript.com/forum/index.php?showtopic=91650) - FF.au3でFox!Box（AVM FRITZ!Box向けのMozilla Firefox拡張機能）を制御するUDF。
- [_FF_Screengrab (by Stilgar)](https://www.autoitscript.com/forum/index.php?showtopic=91665) - FF.au3でScreengrab!（Firefox拡張機能）を制御するUDF。
- [_HTML (by Stilgar)](https://www.autoitscript.com/forum/topic/124330-_htmlau3-v101/) - 任意のHTML（XML）ソースから情報を取得できる。ブラウザなしで。
- [HTMLDocumentEvents (by SmOke_N)](https://www.autoitscript.com/forum/index.php?showtopic=166542) - IEドキュメントイベントの追跡。
- [IEEx (by SmOke_N)](https://www.autoitscript.com/forum/index.php?showtopic=167035) - IE拡張ライブラリにJavaScriptオプションを含む
- [NavInfo (by Nessie)](https://www.autoitscript.com/forum/index.php?showtopic=149203) - このUDFにより、指定されたブラウザやソフトウェアがインストールされているか、および使用中のバージョンを確認できます
- [Opera (by MrCreatoR)](https://www.autoitscript.com/forum/index.php?showtopic=61090) - 上記と同じ内容がオペラに適用されます。オペラUDFを使用して、オペラの最も一般的なタスクを自動化できます

<a id="microsoft-office"></a>
#### Microsoft Office

- [Microsoft Office Access (by randallc)](https://www.autoitscript.com/forum/index.php?showtopic=32144) - マイクロソフトアクセスの自動化
- Microsoft Office Excel (by water et al.) - This UDF is included in AutoIt. Link to the [documentation](https://www.autoitscript.com/wiki/Excel_UDF) ページ
- [Microsoft Office Excel Charts (by water, GreenCan)](https://www.autoitscript.com/forum/index.php?showtopic=135312) - マイクロソフトエクセルを使用したチャート作成
- [Microsoft Office Outlook (by water)](https://www.autoitscript.com/forum/index.php?showtopic=126305) - マイクロソフトアウトラインの自動化。 [documentation](https://www.autoitscript.com/wiki/OutlookEX_UDF_-_General) ページへのリンク
- [Microsoft Office PowerPoint (by Toady)](https://www.autoitscript.com/forum/index.php?showtopic=50254) - マイクロソフトパワーポイントの自動化
- Microsoft Office Word (by water et al.) - This UDF is included in AutoIt. Link to the [documentation](https://www.autoitscript.com/wiki/Word_UDF) ページ

<a id="openoffice"></a>
#### OpenOffice

- [OOo/LibO Calc (by GMK)](https://www.autoitscript.com/forum/index.php?showtopic=151530) - オープンオフィスカルクUFD

<a id="databases-and-web-connections"></a>
### データベースとウェブ接続

- [ADODB (by spudw2k)](https://www.autoitscript.com/forum/index.php?showtopic=105875) - ADODB例
- [DBF (by funkey)](https://www.autoitscript.com/forum/index.php?showtopic=145142) - dBaseデータベースのDLLによる読み書き
- [EzMySql (by oriz)](https://www.autoitscript.com/forum/index.php?showtopic=116072) - EzMySql - AutoItでMySQLデータベースを使用
- [FireBird (by eltorro)](https://www.autoitscript.com/forum/topic/94920-solved-passing-parameters-using-dllcall-to-a-c-dll/?do=findComment&comment=684751) - ファイアバード、インターバース dll udf.
- [MS SQL (by TheLuBu)](https://www.autoitscript.com/forum/index.php?showtopic=127101) - MSSQL.au3
- [MS SQL (by ChrisL)](https://www.autoitscript.com/forum/index.php?showtopic=51952) - _SQL.au3. ADODB接続
- [MySQL (by cdkid)](https://www.autoitscript.com/forum/index.php?showtopic=20814) - MySQLリレーショナルデータベース管理システムUDF
- [MySQL (by ProgAndy)](https://www.autoitscript.com/forum/index.php?showtopic=85617) - MySQL UDF（ODBCなし）
- [MySQL (by James)](https://www.autoitscript.com/forum/topic/122360-mysql-odbc-connector-udf) - MySQL ODBCコンネクタ
- [SQLite (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=17099) - SQLiteは、自立型、埋め込み型、ゼロ設定のSQLデータベースエンジンを実装するライブラリです
- [SQLite Array Functions (by SmOke_N)](https://www.autoitscript.com/forum/index.php?showtopic=142977) - SQLite配列関数 - 一意の配列およびソート方法に適用できる高速化された手法
- [XML DOM Wrapper (by eltorro)](https://www.autoitscript.com/forum/index.php?showtopic=19848) - XMLに対するCRUD操作をサポート。XSLおよびXPathを含む。
- [AutoIt PHP MySQL (by J2TeaM)](https://www.autoitscript.com/forum/topic/173984-the-combination-of-autoit-php-and-mysql/) - AutoIt、PHPおよびMySQLの組み合わせ。

<a id="data-compression"></a>
### データ圧縮

- [7z, zip, gzip, bzip2, tar (by rasim)](https://www.autoitscript.com/forum/index.php?showtopic=85094) - 外部DLLを使用する広範なライブラリ。このスクリプトとともに提供されるDLLが必要。
- [LZMA (by trancexx)](https://www.autoitscript.com/forum/index.php?showtopic=87441) - LZMA (ネイティブWindows)
- [LZMA Compression (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=112273) - LZMA圧縮UDF
- [MessagePack (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=166634) - MessagePackは効率的なバイナリシリアライゼーションフォーマットです。JSONと同様に複数の言語間でデータを交換できますが、より高速かつ小さいサイズになります。
- [Package (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=138838) - パッケージUDF
- [pZip (by asdf8)](https://www.autoitscript.com/forum/index.php?showtopic=129529) - PureZIP_LライブラリUDF
- [UnRAR (by rasim)](https://www.autoitscript.com/forum/index.php?showtopic=76176) - UnRAR.au3
- [Zip plugin (by eltorro)](https://www.autoitscript.com/forum/index.php?showtopic=44524) - Zipプラグイン
- [ZIP (by torels)](https://www.autoitscript.com/forum/index.php?showtopic=73425) - 純粋AutoItでのZIP.au3UDF
- [zip (by wraithdu)](https://www.autoitscript.com/forum/index.php?showtopic=116565) - ZIPファイルの作成およびZIPファイルの展開
- [ZIP (by joakim)](https://www.autoitscript.com/forum/index.php?showtopic=135565) - ZIP STRUCTS UDF (ゼロから作成)
- [zLib (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=128962) - zLib (Deflate/Inflate/GZIP) UDF.
- [XZip (by eltorro)](https://www.autoitscript.com/forum/index.php?showtopic=17727) - 「XStandard XZIP Component」用の別のUDF
- [XZip (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=161847) - 「XStandard XZIP Component」用のUDF

<a id="encryption-and-hash"></a>
### 暗号化とハッシュ

- [AES Rijndael (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=78745) - 非常に高速なAESUDF。ECB/CBC/CFB/OFBブロック暗号モードをサポート。
- [MD5,SHA1,CRC32,RC4,BASE64,XXTEA (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=76976) - 複数の暗号およびハッシュ関数
- [TrueCrypt (by FuryCell)](https://www.autoitscript.com/forum/index.php?showtopic=107784) - TrueCrypt UDFs

<a id="gui-additions"></a>
### GUI拡張

- [3D Pie chart (by WideBoyDixon)](https://www.autoitscript.com/forum/index.php?showtopic=97241) - 3Dパイチャート
- [Chart_UDF (by Kanashius)](https://www.autoitscript.com/forum/index.php?showtopic=173924) - このUDFは、ウィンドウ内に棒グラフを表示するために使用できます。
- [ContextHelp.au3 (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=96258) - コンテキストヘルプの管理（[original](https://www.autoitscript.com/forum/index.php?showtopic=72152-contexthelp/)）
- [Easy Scrollbars (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=113723) - GUIにスクロール可能なセクションを簡単に作成できます。
- [ExtMsgBox (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=109096) - MsgBoxの非常にカスタマイズ可能な代替です。
- [GUICtrlOnChangeRegister (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=105582) - 編集内容が変更されたときに関数を呼び出せます。
- [GUIExtender (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=145149) - GUIのセクションを展開・収縮できます（[original](https://www.autoitscript.com/forum/index.php?showtopic=117909)）
- [GUIFrame (by Melba23 & Kip)](https://www.autoitscript.com/forum/index.php?showtopic=119505) - GUIを調整可能なフレームに分割できます。
- [GUI Panel (by FireFox)](https://www.autoitscript.com/forum/index.php?showtopic=144207) - 子GUIをパネルコントロールとして管理できます。
- [Modern tray menu (by Holger)](https://www.autoitscript.com/forum/index.php?showtopic=20967) - アイコンと色を用いた現代的な、華やかなGUIおよびトレイメニューの作成を可能にします。
- [Pie chart (by Andreik)](https://www.autoitscript.com/forum/index.php?showtopic=161750) - パイチャート
- [SetOnEvent (by martin)](https://www.autoitscript.com/forum/index.php?showtopic=71811) - イベントが関数を呼び出す際にパラメータを簡単に渡す方法を提供します。
- [Uskin (by JScript)](https://www.autoitscript.com/forum/index.php?showtopic=132864) - ユーザーがWindows _.MSstyles_ ファイルを使用してアプリケーションのGUIをカスタマイズできるライブラリです。
- [Toast (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=108445) - システムトレイからポップアップする小さなメッセージGUI。
- [XSkin (by Valuater)](https://www.autoitscript.com/forum/index.php?showtopic=32494) - GUIのスキンを適用し、カスタムスキンを適用できる大規模なライブラリです。
- [Real Vista Aero Glass (by James)](https://www.autoitscript.com/forum/index.php?showtopic=75429) - リアルなVista Aero Glass UDF - あなたのGUIにガラス効果を適用できます。

<a id="controls"></a>
### コントロール

- [Calendar (by jmon)](https://www.autoitscript.com/forum/index.php?showtopic=146406) - カレンダーUDF
- [Colorpicker (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=96464) - ユーザーが色を選択できるボタンを作成できます。
- [GDIPlus Slider UDF (by Kanashius)](https://www.autoitscript.com/forum/index.php?showtopic=173929) - このUDFは、画像背景と移動する画像をもつスライダーを作成するために使用できます。
- [Graph control (by andybiochem)](https://www.autoitscript.com/forum/index.php?showtopic=79412) - 棒グラフおよび線グラフを簡単に作成し表示できます。
- [GraphGDIPlus UDF (by andybiochem)](https://www.autoitscript.com/forum/index.php?showtopic=104399) - GDI+で棒グラフや線グラフを作成・表示できるため、ダブルバッファリングを活用できます。
- [GUICtrlCreateFinder (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=105682) - AutoIt Window Infoに見られるようなウィンドウ検索コントロールを作成できます。
- [GUITreeViewEx (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=166594) - TreeViewにおける親・子チェックボックスの選択・解除が可能です。
- [GUIHotkey (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=107965) - ネイティブホットキーコントロールを使用するためのUDFです。
- [GUIPager (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=111438) - ネイティブのページャーコントロールを作成・制御できます。
- [Hotkey input control (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=90598) - ホットキー入力コントロールUDFライブラリ（ネイティブではない）。
- [ListView Edit UDF (by Kanashius)](https://www.autoitscript.com/forum/index.php?showtopic=173932) - このUDFを使用することで、Listviewの編集が簡単になります。
- [Marquees (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=143711) - タイクルテープ情報バーを作成できます。
- [Progressbar with GDIplus (by ProgAndy)](https://www.autoitscript.com/forum/index.php?showtopic=74649) - 完全なテクスチャ画像の使用も可能です。
- [Ribbon (by trancexx)](https://www.autoitscript.com/forum/index.php?showtopic=128242) - Windowsリボンフレームワーク用のUDFです。
- [Syslink (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=126958) - ウィンドウ内にハイパーテキストリンクを埋め込むための便利な方法を提供します。
- [Table (by andybiochem)](https://www.autoitscript.com/forum/index.php?showtopic=105814) - テーブル用UDFです。

<a id="hardware"></a>
### ハードウェア

- [CommAPI](https://github.com/J2TeaM/awesome-AutoIt/blob/182573752d5c5b2558e8d3fda2664644e5888881/wiki/CommAPI "CommAPI") (by therealhanuta) - シリアルおよび並列通信（COMポート、RS-2、LPTポート）- DLLをインストールせずに（Windows API呼び出しを使用）。
- [Device Management (by weaponx)](https://www.autoitscript.com/forum/index.php?showtopic=77731) - デバイス管理API。
- [DirectShow (by monoceres)](https://www.autoitscript.com/forum/index.php?showtopic=97487) - DirectShow UDF。
- [DirectSound (by eukalyptus)](https://www.autoitscript.com/forum/index.php?showtopic=164700) - DirectSound UDF。
- [Direct2D (by eukalyptus)](https://www.autoitscript.com/forum/index.php?showtopic=164701) - Direct2D UDF。
- [FritzBox (by Allow2010)](https://www.autoitscript.com/forum/index.php?showtopic=138989) - _FB_Tools - AutoitからFritzBoxを管理できます。
- [I/O Port Functions (by Ascend4nt)](https://www.autoitscript.com/forum/index.php?showtopic=121084) - ポート（x64並列ポート、キーボードなど）とのやり取りに使用できる入出力UDF。
- [Monitor Configuration (by jaberwacky)](https://www.autoitscript.com/forum/index.php?showtopic=154350) - モニタ設定用UDF。
- [Mouse (by AlmarM)](https://www.autoitscript.com/forum/index.php?showtopic=155469) - AutoItによるマウスイベントの実現
- [MouseTrapEvent (by ozmike)](https://www.autoitscript.com/forum/index.php?showtopic=147325) - MouseTrapEvent UDF
- [NetInfo (by Nessie)](https://www.autoitscript.com/forum/index.php?showtopic=149083) - インターネットのダウンロード速度とアップロード速度をテストするためのUDF
- [Network configuration (by jguinch)](https://www.autoitscript.com/forum/index.php?showtopic=155539) - ネットワーク設定用UDF
- [Serial Port/COM (by martin)](https://www.autoitscript.com/forum/index.php?showtopic=128546) - シリアルポート／COMポート用UDF
- [SMARTDRIVE (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=27755) - SMARTドライブ分析
- [SPI Hardware Interface (by Blinky)](https://www.autoitscript.com/forum/topic/158640-spi-hardware-interface) - LPT（プリンター）ポートを介してSPIプロトコルでMAX335チップと通信
- [Webcam (by LIMITER)](https://www.autoitscript.com/forum/index.php?showtopic=68866) - Webカメラ用UDF
- [Webcam (by ludocus)](https://www.autoitscript.com/forum/index.php?showtopic=70857) - Webカメラ用UDF

<a id="information-gathering"></a>
### 情報収集

- [Computer information (by JSThePatriot)](https://www.autoitscript.com/forum/index.php?showtopic=29404) - Windowsマシンに関するさまざまな詳細を取得するための汎用ライブラリ
- [WinPcap (by JRSmile)](https://www.autoitscript.com/forum/index.php?showtopic=54039) - WinPcapパケットキャプチャライブラリのラッパー
- [WinPcap (by Nicolas Ricquemaque)](http://opensource.grisambre.net/pcapau3/) - WinPcapドライバーが提供する主要機能にアクセスするためのライブラリ

<a id="internet-protocol-suite"></a>
### インターネットプロトコル群

- [cURL (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=137456) - URL構文でデータを転送するためのUDF
- [cURL (by Ward)](https://www.autoitscript.com/forum/topic/173067-curl-udf-autoit-binary-code-version-of-libcurl-with-ssl-support/) - SSL対応のlibcurlのAutoItバイナリコード
- [IMAP (by mikeytown2)](https://www.autoitscript.com/forum/index.php?showtopic=40243) - IMAP
- [IMAP4 (by Tipulatoid)](https://www.autoitscript.com/forum/index.php?showtopic=108422) - IMAP4 UDF
- [IRC (by McGod)](https://www.autoitscript.com/forum/index.php?showtopic=43515) - IRCサーバーとの通信に使用する軽量ライブラリ
- [IRC (by rcmaehl)](https://www.autoitscript.com/forum/index.php?showtopic=159285) - IRC UDF - ChipsのIRC UDFの更新版
- [IRC (by TheDcoder)](https://www.autoitscript.com/forum/topic/181940-thedcoders-irc-udf-full-compliance-with-rfc-2812-and-ircv31/) - RFC 2812およびIRCv3.1に完全に準拠し、SASL認証をサポートした機能豊富な実装
- [JSON (by Gabriel13)](https://www.autoitscript.com/forum/index.php?showtopic=104150) - RFC46207に準拠したJSONエンコード／デコード
- [JSON (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=148114) - JSMN - 非厳密JSON用UDF
- [JSON (by ozmike)](https://www.autoitscript.com/forum/index.php?showtopic=156794) - AutoIt向けのネイティブWindows JSONに加え、オブジェクト指向拡張を提供するブリッジ
- [JSONgen: JSON generator (by Jefrey)](https://www.autoitscript.com/forum/index.php?showtopic=173797) - JSONを生成するUDF
- [POP3 (by Apzo)](https://www.autoitscript.com/forum/index.php?showtopic=22838) - メールメッセージを取得するためのPOP3ライブラリ。Gmailには対応していない（SSLを使用しているため）
- [_POP3_Ex (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=167339) - 1939年のRFCに従ったPOP3UDFに、クォートプレインブルデコーダを追加したバージョン
- [POP3 SSL (by Fox2)](https://www.autoitscript.com/forum/index.php?showtopic=64051) - Gmailにも対応可能なPOP3ライブラリ。外部実行ファイルを使用しており、スクリプトに含まれる必要がある
- [Prowl (by mrflibblehat)](https://www.autoitscript.com/forum/index.php?showtopic=154530) - Prowl（iOS向けGrowlクライアント）を使用して、iPhone、iPod touch、iPadへのプッシュ通知を送信
- [Request (by Ward)](https://www.autoitscript.com/forum/topic/173129-request-udf-the-simplest-way-to-make-http-request) - Curl.au3およびJson.au3をベースにした、強力かつ使いやすいHTTPクライアント（AutoIt用）
- [SFTP (by Lupo73)](https://www.autoitscript.com/forum/index.php?showtopic=138095) - PSFTPを使用してSFTPプロトコルをサポートするUDF
- [SMTP (by Jos)](https://www.autoitscript.com/forum/index.php?showtopic=23860) - HTMLおよび添付ファイルをサポートするSMTPメール送信UDF
- [SNMP (by enaiman)](https://www.autoitscript.com/forum/index.php?showtopic=81687) - SNMPv1およびSNMPvT2c向けのSNMP_UDF
- [SNMP - MIB protocol (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=70759) - WMIを用いて、SNMPデバイスからトナーの状態を読み取る
- [SSH (by jeanphile)](https://www.autoitscript.com/forum/index.php?showtopic=166579) - コード内でSSHプロトコルを非常に簡単に使用できる
- [TCPServer (by Jefrey)](https://www.autoitscript.com/forum/index.php?showtopic=169774) - マルチクライアント、イベントベース、コンソールアプリをソケットにバインドできる
- [UPnP Protocol (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=57022) - UPnP - 自分のデバイスを読み取り・制御
- [WinHTTP (by trancexx)](https://www.autoitscript.com/forum/index.php?showtopic=84133) - HTTPプロトコルにアクセスしてGETおよびPOSTリクエストを作成し、標準に従って送信可能（クッキーはサポートしていない）
- [WinInet (by -Ultima-)](https://www.autoitscript.com/forum/index.php?showtopic=77503) - 標準的なインターネットプロトコル（FTP、GopherおよびHTTP）にアクセス。GET/POSTリクエストおよびクッキーをサポート

<a id="maths"></a>
### 数学

- [Advanced Math UDF (by scintilla4evr)](https://www.autoitscript.com/forum/index.php?showtopic=170658) - 高度な数学関数を備えたUDF。素数の処理、数列の生成、補間、リーマンゼータ関数などの関数値の計算を可能にする
- [Advanced rounding (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=102686) - 精度の異なる測定方法と、8通りの並び順決定方法をサポート
- [Big number (by eukalyptus)](https://www.autoitscript.com/forum/index.php?showtopic=83529) - AutoItが通常サポートできない非常に大きな数値の計算を行う
- [Decimal To fraction (by Malkey)](https://www.autoitscript.com/forum/index.php?showtopic=106551) - 小数を分数に変換します。例：1.2 を 6/5 に変換。
- [Number base conversion (by james3mg)](https://www.autoitscript.com/forum/index.php?showtopic=81189) - 正の基数で 63 未満（小数もサポート）の範囲での変換。
- [NumToWord (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=117156) - 数値を人間が読みやすい文字列に変換します。
- [Polynomials (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=108803) - 多項式を使用するための関数。
- [Primes (by jennico)](https://www.autoitscript.com/forum/index.php?showtopic=83091) - 素数の生成および計算に関わる多くの関数。
- [Roman Numerals (by AZJIO)](https://www.autoitscript.com/forum/topic/94770-integer-to-roman-numerals/#entry1043544) - ローマ数字。
- [Root function (by Mat)](https://www.autoitscript.com/forum/index.php?showtopic=98160) - 数の実数解を求める。
- [StringAPL (by minx)](https://www.autoitscript.com/forum/index.php?showtopic=163899) - inline APL 解釈器。
- [Trigonometry math functions (by trancexx)](https://www.autoitscript.com/forum/index.php?showtopic=82722) - _ATan2()、_Cosh()、_Frexp()、_Hypot()、_Ldexp()、_Logb()、_Sinh()、_Tanh()。

<a id="media"></a>
### メディア

- [FreeImage library (by ProgAndy)](https://www.autoitscript.com/forum/index.php?showtopic=95357) - 画像に関する各種操作（回転、サイズ変更、反転）を提供。
- [HtmlHelp (by Geodetic)](https://www.autoitscript.com/forum/index.php?showtopic=127263) - HtmlHelp UDF。
- [OCR (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=50608) - AU3 での実際の OCR（MS Office 2003 で MODI を使用）。
- [OCR (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=89542) - Tesseract（スクリーン OCR）UDF。
- [OCR (by KabueMurage)](https://www.autoitscript.com/forum/topic/206133-ocrspace-udf) - [OCRSpace API](https://ocr.space/) クライアントUDF。
- [Printer controller (by martin)](https://www.autoitscript.com/forum/index.php?showtopic=51054) - ページ上の任意の位置に、任意のフォント、サイズ、色でテキストを表示し、線、曲線、楕円、円餅図を任意の色で描画し、画像を印刷できる。
- [Printing (by GRS)](https://www.autoitscript.com/forum/index.php?showtopic=73993) - AutoIt での印刷機能。
- [RTF_Printer (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=161831) - RTF_Printer.au3 - 背景で RichEdit を印刷。
- [Simple DirectMedia Layer (by AdmiralClaws)](https://www.autoitscript.com/forum/index.php?showtopic=94834) - ジョイスティック、CD、2D グラフィックス、タイマーへの対応を追加。詳細は [SDL website](http://www.libsdl.org/) を参照。

<a id="graphics-and-image"></a>
### グラフィックスと画像

- [Bitmap Library (by evilertoaster)](https://www.autoitscript.com/forum/index.php?showtopic=27362) - ビットマップライブラリ。
- [IrrLicht (by A. Percy)](https://www.autoitscript.com/forum/index.php?showtopic=70506) - ゲームを作成に適した 3D グラフィックスエンジン。
- [au3Irrlicht2 (by JRowe)](https://www.autoitscript.com/forum/index.php?showtopic=113881) - 別のUDFがIrrlichtとau3を結びつけています。過去には上記のUDFのフォロワーとして、技術的にはまったく異なるアプローチをとっています。
- [ImageGetInfo (by Lazycat)](https://www.autoitscript.com/forum/index.php?showtopic=13096) - JPEG、TIFF、BMP、PNGおよびGIFから情報を読み取るためのUDF。ファイルサイズ、色深さ、解像度を取得します。
- [OpenGL (by LarsJ)](https://www.autoitscript.com/forum/index.php?showtopic=151011) - 外部ライブラリなどなしでOpenGLを実行。JPEGファイルに関してUDFはさまざまなExif情報を取得します。
- [OpenGL (2.0) (by minx)](https://www.autoitscript.com/forum/index.php?showtopic=148129) - OpenGL＋AutoIt向けの新しいUDFセット。
- [Photoshop CS5 (by karime1)](https://www.autoitscript.fr/forum/viewtopic.php?f=21&t=9531) - AutoItでPhotoshop CS5のオブジェクトを制御するための新しいUDF。

<a id="players"></a>
### プレーヤー

- [VLC (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=114143) - VLC（メディアプレイヤー）UDF。
- [VLC Media Player (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=91316) - VLCメディアプレイヤー。
- [WMP (by ConsultingJoe)](https://www.autoitscript.com/forum/index.php?showtopic=27352) - WindowsメディアプレイヤーUDF。

<a id="sound"></a>
### サウンド

- [BASS Function Library (by BrettF)](https://www.autoitscript.com/forum/index.php?showtopic=83481) - Bass、BassEnc、Bass FX、BassSFX、BassAsioおよびBassCd DLLのラッパーを使って音声と音楽を操作。
- [MIDI (by eynstyne)](https://www.autoitscript.com/forum/index.php?showtopic=37072) - MIDI UDF。
- [SAPIListBox (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=114742) - SAPIListBox（話者認識）UDF。
- [TTS (by Beege)](https://www.autoitscript.com/forum/index.php?showtopic=100439) - テキストから発話（音声）を生成するUD。
- [libZPlay (by Danyfirex)](https://www.autoitscript.com/forum/index.php?showtopic=173808) - libZPlay向けのUDF - mp3、mp2、mp1、ogg、flac、ac3、aac、oga、wavおよびpcmファイルとストリームを再生するマルチメディアライブラリ。

<a id="pdf"></a>
### PDF

- [Acrobat Reader - ActiveX Viewer (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=162195) - Acrobat Reader ActiveX COMオブジェクト「AcroPDF.PDF.1」を使って、独自のPDF閲覧GUIを作成。
- [Debenu PDF Viewer SDK (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=164469) - Debenu PDF Viewer SDKを使ってアプリケーション内でPDFファイルを表示するための関数のコレクション。
- [Debenu Quick PDF Library (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=160875) - Debenu Quick PDF Library向けの関数のコレクション。
- [FoxIt Reader (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=75832) - AU3でのPDFリーダー。
- [MPDF (by taietel)](https://www.autoitscript.com/forum/index.php?showtopic=118827) - アプリケーションからPDFを作成。
- [PDFCreator (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=42776) - PDFCreatorの自動化により、PDFファイルを作成および操作が可能になります。
- [PDFCreator (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=170550) - PDFCreator v1.x.x向けのUDFで、イベントハンドラーが正常に動作しています。
- [_StringToPDF (by Tam0r)](https://www.autoitscript.com/forum/index.php?showtopic=32261) - PDFファイルに文字列を書き込み、フォントサイズ、タイプなどを指定する

<a id="security"></a>
### セキュリティ

- [VirusTotal (by Danyfirex)](https://www.autoitscript.com/forum/index.php?showtopic=150819) - VirusTotal API 2.0 UDF

<a id="social-media-and-other-website-api"></a>
### ソーシャルメディアとその他のウェブサイトAPI

- [CrowdinAPI (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=169333) - [crowdin.net website API](https://crowdin.com/page/api)を用いたUDF（プロジェクトの作成、ファイルの追加と更新、翻訳のダウンロード、ローカライズの統合など）
- [Dropbox authenticator (by Gimerly)](https://www.autoitscript.com/forum/files/file/290-dropbox-authenticator/) - Dropbox認証ツール
- [Easypost (by dcat127)](https://www.autoitscript.com/forum/index.php?showtopic=158106) - USPS郵便ラベルの印刷
- [eBay (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=114801) - eBay UDF（Shopping APIからGetItemStatusおよびGetSingleItem関数）
- [Gmail (by PhoenixXL)](https://www.autoitscript.com/forum/index.php?showtopic=141340) - リモートGmail（UDF）
- [Google Functions (by Beege)](https://www.autoitscript.com/forum/index.php?showtopic=98504) - Google Functions（おすすめ、定義、翻訳、変換）
- [Google Maps (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=115437) - Google Maps UDF
- [Imgur](https://github.com/J2TeaM/AutoIt-Imgur-UDF) - Imgur APIを使用した画像アップロードを支援するAutoIt UDF
- [iTunes (by torels)](https://www.autoitscript.com/forum/index.php?showtopic=70675) - iTunes UDF.
- [iTunes (by Beege)](https://www.autoitscript.com/forum/index.php?showtopic=101802) - 別のiTunes UDF
- [No-IP (by Nessie)](https://www.autoitscript.com/forum/index.php?showtopic=150985) - このUDFを使用すると、no-ipホスト名を簡単に更新し、no-ipアドレスのIPアドレスを取得できます
- [PasteBin (by mrflibblehat)](https://www.autoitscript.com/forum/index.php?showtopic=150838) - Pastebin UDF
- [Skype (by FireFox)](https://www.autoitscript.com/forum/index.php?showtopic=121767) - Skype4COMはSkype APIにActiveXインターフェースを提供
- [Teamspeak 3 (by chipDE)](https://www.autoitscript.com/forum/index.php?showtopic=113234) - Teamspeak 3 UDF
- [TeamViewer API (by mLipok)](https://www.autoitscript.com/forum/index.php?showtopic=166205) - TeamViewer API用のUDF（初歩的な実装）
- [TVmaze.com API (by BBs19)](https://www.autoitscript.com/forum/index.php?showtopic=166547) - TVmaze.com API UDF（テレビ番組シリーズ）
- [Twitter (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=116600) - Twitter UDF
- [Yahoo Weather (by Nessie)](https://www.autoitscript.com/forum/index.php?showtopic=149247) - YWeather UDF - Yahoo Weather API
- [Youtube Uploader (by BrettF)](https://www.autoitscript.com/forum/index.php?showtopic=112775) - AYTU - AutoIt Youtube Uploader.

<a id="windows"></a>
### Windows

- [ACL (by ptrex)](https://www.autoitscript.com/forum/index.php?showtopic=50880) - WindowsオブジェクトへのACL設定.
- [FileSystemMonitor (by seangriffin)](https://www.autoitscript.com/forum/index.php?showtopic=113560) - FileSystemMonitor UDF.
- [Firewall (by JLogan3o13)](https://www.autoitscript.com/forum/index.php?showtopic=145158) - Windows Firewall UDF.
- [ITaskBarList (by Beege)](https://www.autoitscript.com/forum/index.php?showtopic=111018) - ITaskBarList UDF.
- [Local account (by engine)](https://www.autoitscript.com/forum/index.php?showtopic=74118) - ローカルアカウントUDF
- [Magnifier Functions (by Ascend4nt)](https://www.autoitscript.com/forum/index.php?showtopic=161193) - このUDFはWindows Vista以降に提供されているMagnifier APIの大部分の有用な関数を公開しています.
- [Process UDF (by TheDcoder)](https://www.autoitscript.com/forum/topic/174697-process-udf-get-both-the-output-the-exit-code/) - Windows内のプロセスとやり取りし、プロセスを実行して、出力と終了コードを1つの関数呼び出しで取得できます!
- [Registry (by engine)](https://www.autoitscript.com/forum/index.php?showtopic=75250) - WindowsレジストリUDF.
- [Registry (by seanhart)](https://www.autoitscript.com/forum/index.php?showtopic=50551) - RegWriteAllUsers / RegDeleteAllUsers.
- [Startup (by guinness)](https://www.autoitscript.com/forum/index.php?showtopic=124508) - スタートアップフォルダまたはレジストリにスタートアップエントリを作成します.
- [SCCM (by JLogan3o13)](https://www.autoitscript.com/forum/topic/164756-sccm-udf/) - Systems Center Configuration Manager Library.
- [System restore (by FredAI)](https://www.autoitscript.com/forum/index.php?showtopic=134628) - システム復元UDF.
- [Taskplanner/Taskscheduler COM (by Allow2010)](https://www.autoitscript.com/forum/index.php?showtopic=135994) - Windowsタスクプランナー／タスクスケジューラの使用に用いるUDF.
- [Task Scheduler (by dbzfanatic)](https://www.autoitscript.com/forum/index.php?showtopic=83355) - Task Scheduler UDF.
- [TTS UDF (by Kanashius)](https://www.autoitscript.com/forum/index.php?showtopic=173934) - SAPI自動化オブジェクトと連携するUDF - 文字を声に出す(TTS)エンジン
- [UAC (by AdamUL)](https://www.autoitscript.com/forum/index.php?showtopic=158377) - ユーザーアカウントコントロール(UAC)UDF.
- [WIMGAPI (by Homes32)](https://www.autoitscript.com/forum/index.php?showtopic=127075) - ImageX.exeなしでWindowsイメージファイル(.wim)を操作するUDF.
- [Windows Events (by Emperor)](https://www.autoitscript.com/forum/index.php?showtopic=28436) - 自作のWindowsイベントを作成します.
- [Windows Services (by engine)](https://www.autoitscript.com/forum/index.php?showtopic=81880) - WindowsサービスUDF.
- [WRMF (by Luigi)](https://www.autoitscript.com/forum/index.php?showtopic=163178) - WRMF - Windows レジストリモニターカルリーファンクション

<a id="misc"></a>
### その他

- [Android (by Moriba)](https://www.autoitscript.com/forum/index.php?showtopic=160936) - Android UDF
- [Animated tray icons (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=97826) - アニメーション付きトレイアイコンを簡単に作成
- [Atom Table (by Ascend4nt)](https://www.autoitscript.com/forum/index.php?showtopic=163577) - ローカル（プログラムレベル）またはグローバル（OSレベル）に文字列を保存し、一意な数値識別子を使用。このUDFは、これらのアトムを追加、検索、削除、問い合わせできるようにします
- [Barcode generators (by willichan)](https://www.autoitscript.com/forum/index.php?showtopic=170087) - Code128A/B/CまたはCode39またはCode3-9Extendedを最適化したバーコードを、提供されたデータから生成
- [Binary (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=131037) - バイナリUDF
- [BinaryCall (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=162366) - BinaryCall UDF - Cでサブローチンを作成し、AutoItで呼び出し
- [Clipboard History (by wraithdu)](https://www.autoitscript.com/forum/index.php?showtopic=81267) - クリップボードのすべての内容を保存および復元。AHKのClipboardAllにインスパイアされています
- [CmdLine (by Jefrey)](https://www.autoitscript.com/forum/index.php?showtopic=169610) - コマンドライン引数をパースするための関数のコレクション
- [Copy (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=121833) - スクリプトを一時停止せずにファイルやディレクトリをコピーまたは移動。コピー中の現在の状態（コピーされたバイト数、エラーコードなど）を取得できます
- [DDEML (by doudou)](https://www.autoitscript.com/forum/index.php?showtopic=55994) - DDEML UDFにより、AutoItスクリプトをDDEクライアントまたはサーバーとして使用できます
- [_DLLStructDisplay (by Ascend4nt)](https://www.autoitscript.com/forum/index.php?showtopic=99106) - ListViewに構造体を表示
- [Experimental Maps UDF (by TheDcoder)](https://github.com/TheDcoder/Experimental-Maps-UDF) - AutoItの新しいMapデータ型に用いるUDF。標準UDFに含まれる配列UDFと類似
- [FASM (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=111613) - 埋め込みフラットアセンブラ（FASM）UDF
- [_FileGetMimeType (by Wiliat87)](https://www.autoitscript.com/forum/index.php?showtopic=157689) - _FileGetMimeType UDF
- [File locking with cooperative semaphores (by willichan)](https://www.autoitscript.com/forum/topic/117033-file-locking-with-cooperative-semaphores) - サーバーなしでシンプルなファイルロック
- [FindMimeFromData (by twbradio)](https://www.autoitscript.com/forum/index.php?showtopic=157241) - urlmon.dllを使用したFindMimeFromData
- [Hotkey.au3 (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=90492) - ホットキー管理UDF。HotkeySet()よりもいくつかの利点があります
- [Inline Assembly (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=86672) - コードをバイナリマシンコードにアセンブルし、実行
- [LFN (by orbs)](https://www.autoitscript.com/forum/index.php?showtopic=161628) - LFN UDF - MAX_PATH 256文字の制限を克服
- [LASM - Light Assembler (by minxomat)](https://www.autoitscript.com/forum/index.php?showtopic=173946) - これはアセンブラー用のインラインUDFです
- [MemoryDll (by Ward)](https://www.autoitscript.com/forum/index.php?showtopic=77463) - スクリプトにDLLを埋め込み、メモリから関数を呼び出します
- [NoFocusLines (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=101733) - ボタン、スライダー、ラジオボタンおよびチェックボックスのドットフォーカス線を削除し、GUIの見た目を損なわないようにします
- [NotifyIcon (by FireFox)](https://www.autoitscript.com/forum/index.php?showtopic=149176) - NotifyIcon UDF（以前はTrayIconEx）- 自分自身の通知アイコンを作成、削除、管理します
- [PixelGetColor (by Manadar)](https://www.autoitscript.com/forum/index.php?showtopic=63318) - メモリからピクセルを取得または読み込みするUDF
- [RDC (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=167024) - ReadDirectoryChangesのラッパー
- [Resources (by Zedna)](https://www.autoitscript.com/forum/index.php?showtopic=51103) - リソースUDF
- [ResourcesEx (by guinness)](https://www.autoitscript.com/forum/index.php?showtopic=162499) - リソースEX UDF（現在のAutoIt言語構文v3.3.12.0まで最新）
- [Spell Checker (by iCode)](https://www.autoitscript.com/forum/index.php?showtopic=162033) - スペルチェックUDF - Hunspell
- [StringSize (by Melba23)](https://www.autoitscript.com/forum/index.php?showtopic=114034) - 入力したいテキストに合わせてコントロールのサイズを自動調整します
- [Synology filestation (by nend)](https://www.autoitscript.com/forum/index.php?showtopic=164444) - Synology NASサーバーのユーザー向けUDF
- [TVExplorer (by Yashied)](https://www.autoitscript.com/forum/index.php?showtopic=125251) - TVExplorer UDF
- [SciLexer (by Kip)](https://www.autoitscript.com/forum/index.php?showtopic=51547) - SciLexer UDF
- [AutoItAppveyor (by KyleChamberlin)](https://github.com/AutoItMicro/AutoItAppveyor) - このライブラリは、AutoItスクリプトやプログラムをAppveyor CIと統合するための関数を含んでいます
- [Micro Unit Testing Framework (by KyleChamberlin)](https://github.com/AutoItMicro/MicroUnitTestingFramework) - MicroはAutoItで使用するためのxUnitスタイルのテストフレームワークです
- [TeenyScript (by tarretarretarre)](http://teenyscript.tarre.nu/documentation) - TeenyScriptはAutoItのスーパーセットであり、AutoItをより高度にします。TeenyScriptのコードはネイティブAutoItコードにパースされます
- [Logger (by Worlor)](https://github.com/Worlor/AutoIt-Logger) - Loggerは、使いやすい1つのログユーティリティです。1日ごとにログを回転し、x日後にZIPします

<a id="tools"></a>
## ツール

- [SciTE4AutoIt3](https://www.autoitscript.com/site/autoit-script-editor/downloads/) SciTEを1つのインストーラにまとめて、必要な設定をすべて含め、多くのユーティリティプログラム（[AutoIt3Wrapper](https://www.autoitscript.com/autoit3/scite/docs/SciTE4AutoIt3/AutoIt3Wrapper.html)、[SciTEConfig](https://www.autoitscript.com/autoit3/scite/docs/SciTE4AutoIt3/SciTEConfig.html)、[Tidy](https://www.autoitscript.com/autoit3/scite/docs/SciTE4AutoIt3/Tidy.html)、[Au3Stripper](https://www.autoitscript.com/autoit3/scite/docs/SciTE4AutoIt3/Au3Stripper.html)など）を含んでいます。これにより、AutoIt3との使用を強化します
- [KODA Form Designer](http://koda.darkhost.ru/) - AutoIt3スクリプト言語用のフォーム（GUI）を作成するためのスタンドアローンアプリケーション。SciTE4AutoIt3に含まれています
- [ISN AutoIt Studio](http://www.isnetwork.at/index.php?option=com_content&view=article&id=10&Itemid=115) - AutoItプログラミング言語用の完全なIDE
- [ISN AutoIT form Studio](http://www.isnetwork.at/index.php?option=com_content&view=article&id=7&Itemid=116) - AutoIt用のグラフィカルフォームデザイナー
- [AutoIt Obfuscator](https://www.pelock.com/products/autoit-obfuscator) - AutoItスクリプトのソースコードおよびアルゴリズムを暗号化し、逆エンジニアリング分析、クラッキング、デコンパイルを防ぐ

<a id="useful-resources"></a>
## 役立つリソース

<a id="documents"></a>
### ドキュメント

- [AutoIt Online Document](https://www.autoitscript.com/autoit3/docs/)
- [SciTE4AutoIt3 Online Document](https://www.autoitscript.com/autoit3/scite/docs/SciTE4AutoIt3.html) | [Wiki](https://www.autoitscript.com/wiki/SciTE4AutoIt3)

<a id="websites"></a>
### ウェブサイト

- [Official Website](https://www.autoitscript.com/)
- [Official Forum](https://www.autoitscript.com/forum/)
 + [Vietnamese Forum](http://autoitvn.com/)
 + [French Forum](http://www.autoitscript.fr/)
 + [Brazilian Forum](http://forum.autoitbrasil.com/)
 + [Germany Forum](https://autoit.de/)
 + [Russian Forum](http://autoit-script.ru/)
 + [Spanish Forum](http://www.emesn.com/autoitforum/)
- [AutoIt Wiki](https://www.autoitscript.com/wiki)
- [Programs](https://www.autoitscript.com/wiki/AutoIt_Programs) - AutoItで作成されたプログラムの一覧
- [AutoIt Group on Facebook](https://www.facebook.com/groups/autoitscript/) (ベトナム語).

<a id="guidestutorials"></a>
### ガイド／チュートリアル

- [Tutorials](https://www.autoitscript.com/wiki/Tutorials) - AutoItに関するチュートリアルは多数存在する。このページはいくつかの有名なチュートリアルの概要を示している.
- [Best coding practices](https://www.autoitscript.com/wiki/Best_coding_practices) - AutoItにおける最も良いコーディングの実践についての詳細な説明。これらの推奨事項は、他の多くのプログラミング言語に共通する一般的なコーディング実践に基づいている。それらに従う必要はないが、推奨される。
- [Snippets](https://www.autoitscript.com/wiki/AutoIt_Snippets) - 一般的に単一の関数またはスクリプトに組み込むことができる小さなコードの塊。

<a id="videos"></a>
### 動画

- [AutoIt Tutorials](https://www.youtube.com/playlist?list=PL1DCD109B801D0DE6) 403forbidden403によって作成
- [AutoIt Tutorials](https://www.youtube.com/user/AutoitFrench/videos) AutoitFrenchによって作成
- [AutoIt for Beginner](https://www.youtube.com/playlist?list=PLNeDQQ_ukvRoz5IKgFy1pgfZVqDuZf5X2) Lee Saiによって作成
- [AutoIt for Beginner](https://www.youtube.com/playlist?list=PLADZ5XR0fS9B1AL1FmLUCfrXoRu2nYOKu) Hai The Luongによって作成
- [Advanced AutoIt Tutorials](https://www.youtube.com/playlist?list=PL_-NI9iPtoB741rTw1hjNPirk3jTMKtrQ) Juno\_okyo によって作成 [[Subscribe](https://www.youtube.com/channel/UCEETpUrNm5qI-LENbBON2Gw/?sub_confirmation=1)]

<a id="books"></a>
### 書籍

- [AutoIt v3: Your Quick Guide](http://shop.oreilly.com/product/9780596515126.do) Andy Flesner ([Download PDF](https://www.google.com/search?q=AutoIt+v3%3A+Your+Quick+Guide+filetype%3Apdf))によって作成
- [Instant AutoIt Scripting](https://books.google.com.vn/books?id=TgY2-RSxhDUC) Emilio Aristides de Fez Lasoによって作成
- [AutoIT Scripting For Beginners](https://books.google.com.vn/books?id=ugdeCgAAQBAJ) Rajanによって作成
- [Learn To Program Using FREE Tools with AutoIt 1.2](https://www.autoitscript.com/forum/files/file/351-learn-to-program-using-free-tools-with-autoit/) Jfishによって作成

<a id="syntax-highlighter"></a>
### シンタックスハイライト

- [GeSHi - Generic Syntax Highlighter](http://qbnz.com/highlighter/)
- [Highlight.js](https://highlightjs.org/) - バージョン8.7以降にAutoItが追加
- [Crayon Syntax Highlighter](https://wordpress.org/plugins/crayon-syntax-highlighter/) (WordPressプラグイン) - バージョン1.8.2以降にAutoItが追加
- [WP Syntax](https://wordpress.org/plugins/wp-syntax/) (WordPressプラグイン) - GeSHiに基づく
- [PrismJS](http://prismjs.com/) - バージョン1.1.0からAutoItを追加
- [AutoIt - Visual Studio](https://github.com/loganch/AutoIt-VSCode) - Visual Studio用のAutoIt拡張

<a id="license"></a>
## ライセンス

[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

---

<a id="other-awesome-lists"></a>
## その他のAwesomeリスト

- [awesome](https://github.com/sindresorhus/awesome) @sindresorhusによって
- [awesome-all](https://github.com/bradoyler/awesome-all) ＠bradoylerによって
- [awesome-awesome](https://github.com/emijrp/awesome-awesome) ＠emijrpによって
- [awesome-awesome](https://github.com/erichs/awesome-awesome) @erichsによって
- [awesome-awesome](https://github.com/oyvindrobertsen/awesome-awesome) @oyvindrobertsenによって
- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) @bayandinによって
- [awesome-awesomes](https://github.com/fleveque/awesome-awesomes) ＠flevequeによって
- [awesome-collection](https://github.com/flyhigher139/awesome-collection) ＠flyhigher139によって
- [lists](https://github.com/jnv/lists) ＠jnv による

[[Back to Top](#awesome-autoit)]
