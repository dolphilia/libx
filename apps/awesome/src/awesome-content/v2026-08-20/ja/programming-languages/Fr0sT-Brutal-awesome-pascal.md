---
title: "Awesome Pascal"
description: "Pascalを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-Fr0sT-Brutal-awesome-pascal-readme-md"
---

# Awesome Pascal

Pascalを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a> ##

- [汎用ライブラリ](#general-libraries)
- [マルチメディア](#multimedia)
	- [音声](#audio)
	- [動画](#video)
	- [グラフィックス](#graphic)
- [ゲーム開発](#game-dev)
- [通信](#communications)
	- [ネットワーク](#network)
	- [クラウド・リモートサービス](#cloud-remote-services)
	- [シリアルポート](#serial-port)
	- [イベントバス](#event-bus)
- [GUI](#gui)
	- [コントロール集](#control-packs)
	- [単体コントロール](#single-controls)
	- [エディター](#editors)
	- [ビューアー](#viewers)
	- [その他のGUI](#other-gui)
- [データベース](#database)
- [スクリプト](#scripting)
- [機械学習](#machine-learning)
- [非ビジュアルクラス／ユーティリティ](#non-visual-classesutils)
	- [圧縮](#compression)
	- [暗号化](#encryption)
	- [XML／JSON／YAML／HTML](#xmljsonyamlhtml)
	- [言語機能](#language)
	- [メモリーマネージャー](#memory-managers)
	- [システム](#system)
	- [テンプレート](#template)
	- [ログ](#logging)
	- [数学](#math)
	- [コマンドライン](#command-line)
	- [その他の非ビジュアル機能](#other-non-visual)
- [OS](#os)
- [レポート生成](#report-generating)
- [単体テスト](#unit-testing)
- [デバッグ／エラー処理](#debugging--error-handling)
- [ユーティリティ](#utilities)
	- [RAD Studio IDEプラグイン／ウィザード](#rad-studio-ide-pluginswizards)
	- [他IDE向けプラグイン](#plugins-for-other-ides)
	- [文書](#documentation)
	- [コード検査・レビュー・デバッグ](#code-checkreview-debug)
	- [セットアップ](#setup)
	- [その他](#other)

---

## 汎用ライブラリ <a id="general-libraries"></a> ##

*Big general-purpose libraries*

* [JCL](https://github.com/project-jedi/jcl). `[Delphi]` `[FPC]` テスト済みかつ完全にドキュメント化されたユーティリティ関数および非視覚クラスのセットで、DelphiおよびC++Builderプロジェクトに即座に再利用可能です。このライブラリは、Strings、Files and I/O、Security、Mathなど、多くのカテゴリに分かれています。

* [JVCL](https://github.com/project-jedi/jvcl)600以上のデルフィーコンポーネントを「プロジェクトJEDI」のメンバーが開発したライブラリ。// *GUI、アルゴリズム、クラス、APIヘッダーなど* `[Delphi]`

* [Alcinoe](http://sourceforge.net/projects/alcinoe) ([mirror at GH](https://github.com/Zeus64/alcinoe)). `[Delphi]` ライブラリ。Delphi用の視覚的および非視覚的なコンポーネント。// *ネットワーク：FTP/HTTP/NNTP/POP3/SMTP、ISAPI、WinInet HTTP/FTP クライアント；DB：Firebird/MySQL/SQLite3/Memcached/MongoDb/SphinxQL；XML/JSON パーサー；ZLIB；暗号化：AES、Blowfish、MD5、SHA、安全な鍵付きMD5/SHA；OpenGLによる動画プレイヤー；FireMonkey コントロール；その他：自己バランス二分木、式評価器*

* [Fundamentals Code Library](http://sourceforge.net/projects/fundementals) (abandoned, more recent fork is [here](https://github.com/fundamentalslib/fundamentals4) - though it slightly differs in units set, f.ex. no XML. Recent major version 5 [here](https://github.com/fundamentalslib/fundamentals5)). 汎用ライブラリに関するPascalライブラリ、コンポーネント、ツール、または資料です。 コード: `[Delphi]`、`[FPC]`。
// *汎用ライブラリに関する補足機能、互換性、保守状況の説明です。 値: 0、1、2。*

* [Spring4D](https://bitbucket.org/sglienke/spring4d)Embarcadero Delphi 2010以降向けのオープンソースコードライブラリ。複数のモジュールから構成されており、基本クラスライブラリ（共通型、インターフェースベースのコレクション型、リフレクション拡張）およびデプロイメントインジェクションフレームワークを含む。暗号化ライブラリも含まれる。// *ジェネリクスを用いたコレクションおよびその他のコンテナは、IEnumerableに基づき構成されており、RTLの類似機能よりも正確かつ機能が豊富；暗号：CRC、DES、MD5、SHA；ファイルユーティリティなど* `[Delphi]`

* [TheUnknownOnes](https://github.com/chaosben/theunknownones). `[Delphi]` ほぼすべての用途に応じたクラスやコンポーネント、ユーティリティの大きなコレクション。ほとんどドキュメント化されておらず、最新のものとは思えません。

* [CNVCL](https://github.com/cnpack/cnvcl). `[Delphi]` CnPack コンポーネントパッケージ。多くの視覚コンポーネント、クラス、ユーティリティの大きなコレクション。// *多くの有用な機能；ドキュメントおよびコメントは主に中国語*

* [mORMot](https://github.com/synopse/mORMot)Delphi 6以降やFPC 2.7向けのクライアント・サーバー型ORM/ODMを備えたSOA MVCフレームワーク、直接SQL/NoSQLデータベースへのアクセス、オブジェクト上のORM/ODM、高性能HTTPサーバーを介したインターフェースによるRESTフルORMおよびSOAサービス、MVC/MVVMウェブサイト、モックおよびスタブを含むテスト、ログ記録、暗号化、圧縮、コマンドラインパーサー、スレッド処理、サービス/デーモンのサポート；大規模なドキュメンテーション。 `[Delphi]` `[FPC]`

* [MARS - Curiosity](https://github.com/andrea-magni/MARS). `[Delphi]` Delphi REST ライブラリ。純粋な REST アプローチで、親しみやすい Delphi フラavor における標準的な概念（コンポーネントベースのクライアントライブラリを含む）。確認済みの互換性：Delphi の XE から 10 Seattle までのバージョン。一部の機能は FireDAC を必要とする。

* [ADAPT](https://github.com/LaKraven/ADAPT)【】高度な開発者向け非同期プログラミングツールキット。プロジェクトの中心に配置される基礎ライブラリであり、極めて強力なマルチスレッド（およびスレッドセーフ）機能を提供するためのもの。イベントエンジン——マルチスレッド、非同期、イベント駆動プログラムを生成する非常に強力なシステム。ジェネリックコレクション——高効率のコレクションタイプ（リスト、ツリー、マップなど）。数学ライブラリ——単位変換、特別計算およびその他の有用な数学関数を提供するライブラリ。パッケージエンジン——ストリームエンジンの拡張であり、ファイルをまとめてパッケージ化（VFSのようなもの）をサポート。共有ストリームライブラリ——100％スレッドセーフなストリームクラス（インターフェースも提供）で、複数のスレッドから読み書きが可能。ストリーム処理ライブラリ——ストリームの操作を非常に簡単に行えるようにする！削除、挿入、データの読み取り、書き込みを扱う。 `[Delphi]`

* [Redux Delphi](https://github.com/pierrejean-coudert/ReduxDelphi). `[Delphi]` Delphiアプリケーション向けに一方向データフローを用いた予測可能な状態コンテナ。ReduxJSにインスピレーションを得ています。Immutable Generic Listを提供しています。

* [GrijjyFoundation](https://github.com/grijjy/GrijjyFoundation)他のGrijjyリポジトリで広く使われる基礎クラスとユーティリティ。// *BSON/JSON、IOCP/EPOLLソケット、ソケットプール、HTTP、HTTP/2、OpenSSL、ProtocolBuffers*。 `[Delphi]`

* [unRxLib](http://www.micrel.cz/RxLib/dfiles.htm). `[Delphi]` RxLibrary（60以上のコンポーネントを含むライブラリ）を最新に保つための努力。

* [QuickLib](https://github.com/exilon/QuickLib). `[Delphi]` `[FPC]` 高速開発ライブラリ（AutoMapper、LinQ、IOC依存注入、MemoryCache、スケジュールタスク、Config、シリアルライザ、JSONシリアル化、Chronometer、スレッド、リスト、Config、コンソールサービスなど）で、Delphi/Firemonkey（Windows、Linux、macOS/IOS/Android）およびFreePascal（Windows/Linux）向けにクロスプラットフォーム対応しています。

* [KOL](https://sourceforge.net/projects/kolmck)【】【】（【】でのFPCへのポート）Delphi（およびFPC）用のキーワードオブジェクトライブラリ — アプリケーションを小さく、高性能にします。このライブラリはフリーソフトウェアかつオープンソースです。MCKは、KOLライブラリを用いたDelphi環境におけるVISUALプロジェクト開発用のミラークラスキットです。 `[Delphi]` `[FPC]` [KOL-CE](https://sourceforge.net/p/kol-ce)

* [minilib](https://github.com/parmaja/minilib). `[Delphi]` `[FPC]` クロスプラットフォームライブラリ、ソケットラッパー（SSLおよびTLSを含む）、データベース接続（SQLite、PostgreSQL、FirebirdSQL、MariaDB）、XMLリーダーおよびライター、ComPort（COM1、COM2など）。

* [Fido Library](https://github.com/mirko-bianco/FidoLib). `[Delphi]` Fidoライブラリは、「可能な限り、動作を説明するのではなくコードを書く」という設計原則に従って、Delphi開発者の生活を容易にすることを目的として作成されました。以下は、最も重要なコア機能のリストです：マッパー、JSONのマーシャリングおよびデマーシャリング、仮想データベース機能、仮想APIクライアント、仮想APIサーバー、WebSockets、ConsulおよびFabioのサポート、ボックス、イベント駆動アーキテクチャ、関数型プログラミング、カーリング、キャッシュ、チャンネル

* [TeeBI](https://github.com/Steema/TeeBI). `[Delphi]` `[FPC]` データマイニング、可視化、多次元クエリ、ピボットテーブルおよびビッグデータ用コンポーネントライブラリ。VCL、Firemonkey。

## マルチメディア <a id="multimedia"></a> ##


## 音声 <a id="audio"></a>

* [Audio Tools Library](http://mac.sourceforge.net/atl). `[Delphi]` 複数のオーディオフォーマットファイルの情報操作に使用します。// *2005年以降は廃止されました。*

* [Delphi ASIO & VST Project](http://sourceforge.net/projects/delphiasiovst)ASIOインターフェースおよびVSTプラグインを使用したアプリケーション開発用のフレームワーク。無数のDSPアルゴリズムが、数十例のサンプルで示されています。// *最近はあまり活動がありませんが、トラックは利用可能状態です* `[Delphi]`

* [NewAC - New Audio Components](http://code.google.com/p/newac) (abandoned, list of forks on GH [here](https://github.com/search?l=Pascal&o=desc&q=newac&s=updated&type=Repositories)). 音声に関するPascalライブラリ、コンポーネント、ツール、または資料です。 コード: `[Delphi]`。 値: 3。
// *音声に関する補足機能、互換性、保守状況の説明です。*

* [Audorra](https://sourceforge.net/projects/audorra)デルフィとフリープアスカル向けのデジタルオーディオライブラリ。柔軟なプラグインアーキテクチャを採用しており、オーディオバックエンド（例：WaveOut、OpenAL）の交換、プロトコルクラス（例：ファイル、HTTP）の追加などが可能になります。 `[Delphi]` `[FPC]`

* [Delphi-BASS](https://github.com/TDDung/Delphi-BASS). `[Delphi]` DelphiのFMXおよびVCLヘッダ/ラッパー単位に加え、音声ライブラリの追加。 [BASS](https://www.un4seen.com)

* [FMXAudio](https://github.com/HemulGM/FMXAudio). `[Delphi]` FMX（Windows、Android）向けのオーディオプレイヤーコンポーネントに基づく [BASS](https://www.un4seen.com)


## 動画 <a id="video"></a>

* [DSPack](https://code.google.com/p/dspack) (abandoned, active fork is [here](https://github.com/micha137/dspack-continued-mirror-for-delphinus)). 動画に関するPascalライブラリ、コンポーネント、ツール、または資料です。 コード: `[Delphi]`。

* [Delphi-OpenCV](https://github.com/Laex/Delphi-OpenCV)DelphiにおけるOpenCVライブラリのヘッダーファイルの翻訳 // *FFMPEGのヘッダーを含む* `[Delphi]`

* [FFmpeg Delphi/Pascal Headers](http://www.delphiffmpeg.com/headers). `[Delphi]` `[FPC]` FFMPEGヘッダーのオープンソース翻訳。

* [PasLibVlc](http://prog.olsztyn.pl/paslibvlc). `[Delphi]` `[FPC]` VideoLANのlibvlc.dllへのインターフェースおよびDelphi/FreePascalベースのVCLプレイヤーコンポーネント（VideoLANに基づく）

* [fevh264](https://github.com/dpethes/fevh264)【】ベースラインh.264エンコーダー。WindowsおよびLinuxがサポートされています `[FPC]`


## グラフィックス <a id="graphic"></a>

*Image files, free drawing, barcodes etc. There are also some drawing engines in [ゲーム開発](#game-dev) section*

* [Graphics32](https://github.com/graphics32/graphics32). `[Delphi]` `[FPC]` DelphiおよびLazarusで高速32ビットグラフィック処理を設計。32ビットピクセルフォーマットに最適化され、ピクセル、ベクターや多角形などのグラフィックプリミティブでのアンチエイリアスおよびアルファブレンド操作が高速に実行され、GDI、GDI+および標準のTCanvasクラスと比べて著しく優れたパフォーマンスを発揮。ピクセルアクセスではほぼ100倍、線の描画では80〜100倍の速度で実行される。

* [GraphicEx](https://github.com/mike-lischke/GraphicEx). `[Delphi]` DelphiのGraphics.pasへの追加で、アプリケーションが多くの一般的な画像フォーマットを読み込むことができるようになります。このライブラリは主に、背景（ボタン、フォーム、ツールバー）やテクスチャ（DirectX、OpenGL）の読み込み、または画像閲覧および編集の目的で使用され、画像を保存する必要がない場合に設計されています。

* [Vampyre Imaging Library](https://github.com/galfar/imaginglib). `[Delphi]` `[FPC]` クロスプラットフォームネイティブオブジェクトパascal（DelphiおよびFree Pascal）による画像読み込み、保存、および操作ライブラリ。

* [CCR-EXIF](https://code.google.com/p/ccr-exif) (seems abandoned, list of forks on GH [here](https://github.com/search?l=Pascal&o=desc&q=ccr-exif&s=updated&type=Repositories)). グラフィックスに関するPascalライブラリ、コンポーネント、ツール、または資料です。 コード: `[Delphi]`。

* [KIcon](https://github.com/kryslt/KControls). `[Delphi]` `[FPC]` より複雑なアイコン（またはより良いアイコンファイル*.ico）の操作が必要な場合にこのコンポーネントが意味を持ちます。完全なPNGアイコンサポート、正しいレンダリング、アルファチャンネル付きアイコン。

* [Delphi Twain](http://www.kluug.net/delphitwain.php). `[Delphi]` `[FPC]` このライブラリにより、DelphiおよびLazarusのスキャン関数に簡単にアクセスできます。

* [Synopse PDF](https://github.com/synopse/SynPDF). `[Delphi]` `[FPC]` Delphi用の完全機能オープンソースPDFドキュメント作成ライブラリ。1つのユニットに内蔵。純粋なDelphiコード。Delphi 5からDelphi 10.3 Rio（およびFPCの最新版）まで対応。Win32およびWin64プラットフォーム対応。

* [PowerPDF](https://github.com/TurboPack/PowerPDF). `[Delphi]` VCLコンポーネントでPDFドキュメントを視覚的に作成。フォームのように、DelphiまたはC++Builder IDE上でPDFドキュメントを簡単に設計できます。

* [IGDI+](https://sourceforge.net/projects/igdiplus). `[Delphi]` フリーオープンソースライブラリにより、複雑なGDI+アプリケーションを自然なDelphi向けコードで迅速かつ簡単に実装できます。

* [GLScene](https://sourceforge.net/projects/glscene). `[Delphi]` `[FPC]` Delphi、C++BuilderおよびLazarus向けのOpenGLベースの3Dライブラリ。視覚的なコンポーネントやオブジェクトを提供し、3Dシーンの記述およびレンダリングを簡単で、手間なく、かつ強力な方法で行えます。GLSceneは単なるOpenGLラッパーまたはユーティリティライブラリではなく、一般の3Dエンジンの基礎クラスセットとして成長し、迅速なアプリケーション開発（RAD）を意識しています。GLSceneは、OpenGLの詳細を学ばなくても、Formを設計できる人なら、GLSceneの基本操作を簡単に習得できます。このライブラリには、使いやすさを示す大規模なデモが多数含まれており、RADがCPU/GPUパワーコストを犠牲にしているわけではありません。

* [SynGdiPlus](https://github.com/synopse/mORMot/blob/master/SynGdiPlus.pas). `[Delphi]` `[FPC]` アプリケーションがGIF、TIF、PNGおよびJPG画像を読み込み・保存できるようにします。また、任意のTMetaFileからアンチエイリアス描画を可能にします。つまり、.emfコンテンツをGDI+で描画することで、より良いレンダリング結果を得られます。

* [Andorra 2D](http://sourceforge.net/projects/andorra)新しい世代の2Dエンジン（DelphiおよびLazarus用）。Andorra 2Dは、グラフィックプラグインを介してDirectXまたはOpenGLを使用できる。Andorra 2Dは非常にモジュラリティを持ち、使いやすい。 `[Delphi]` `[FPC]`

* [Transparent-canvas](https://github.com/vintagedave/transparent-canvas)Delphi VCL / Windowsプロジェクトによる半透明アルファブレンドグラフィックの描画。TCanvasに類似するクラスを提供。 `[Delphi]`

* [Fully-justified-text](https://github.com/vintagedave/fully-justified-text)Delphi VCL / Windowsプロジェクトによるテキスト出力。さまざまなオプションで完全に整列されたテキストの印刷を可能にする。 `[Delphi]`

* [AsciiImage](https://github.com/Memnarch/AsciiImage)デルフィー用のAsciiImage実装（アレクサンダー・ベンイコフスキーによる）は、チャールズ・パルノのAsciiImageに基づいています。詳細は を参照してください。// *ASCIIピクセルマップからスケーラブルなモノクロ画像を作成* `[Delphi]` [his article](http://cocoamine.net/blog/2015/03/20/replacing-photoshop-with-nsstring)

* [PngComponents](https://github.com/UweRaabe/PngComponents)PngComponentsは、アプリケーションに実際のPNGファイルを埋め込むことができるコンポーネントセット。PNGファイル単体では大きな利点はなく、しかしアルファチャンネルのサポートは確かに魅力的である。 `[Delphi]`

* [AggPasMod](https://github.com/CWBudde/AggPasMod)現代的なPascal版アンチグリッド幾何学。AggPasに基づいており、AggPas自体はアンチグリッド幾何学に基づいている。このプロジェクトは、最新のDelphiバージョン（XE以降）に対応しており、いくつかのヘルパークラス（VCLコンポーネントおよびFireMonkeyインターフェース）を提供しています。2次元ベクターグラフィックライブラリ。基本的に、AggPasはベクターデータからメモリ上のピクセル画像を生成するレンダリングエンジンと考えられます。もちろん、AGGはそれ以上の機能を提供します。// *ベクターグラフィックライブラリ、SVGやそれ以上のものをレンダリング* `[Delphi]`

* [delphi-shader](https://github.com/WouterVanNifterick/delphi-shader)数百のグラフィカルエフェクトと、純粋なDelphiコードでGLSL機能を提供するライブラリ。このプロジェクトは、100以上のリアルタイムグラフィカルエフェクトを含む実行ファイルを生成します。すべてが100％パシカル実装であり、外部ライブラリやハードウェアアクセラレーションを使用しません。 `[Delphi]`

* [dglOpenGL](https://github.com/SaschaWillems/dglOpenGL)Delphi / Pascal OpenGLヘッダーの翻訳。 `[Delphi]` `[FPC]`

* [DelphiZXingQRCodeEx](https://github.com/MichaelDemidov/DelphiZXingQRCodeEx)ZXingというオープンソースのバーコード画像処理ライブラリから導入されたQRコード生成機能のDelphi/Lazarus向け移植。 `[Delphi]` `[FPC]`

* [ZXing.Delphi](https://github.com/Spelt/ZXing.Delphi)Delphi XEから10.2 TokyoまでのDelphi用本番オブジェクトPascalライブラリ。これは有名なオープンソースバーコードスキャンライブラリZXing（Zebra Crossing）をベースにしたものです。すべてのFireMonkeyモバイルプラットフォーム向けに開発されており、バージョン3.1以降はWindows VCLアプリケーションにも完全にサポートしています（FMX.Graphicsユニットへの依存なし）。 `[Delphi]`

* [Zint-Barcode-Generator-for-Delphi](https://github.com/landrix/Zint-Barcode-Generator-for-Delphi)Zint-Barcode-GeneratorのネイティブDelphi版。 `[Delphi]`

* [QuickImageFX](https://github.com/exilon/QuickImageFX)画像の読み込み・保存・変換・変形を簡易化するDelphiライブラリ。PNG、JPG、GIF、BMPを読み書き。ファイル、ストリーム、HTTP、イメージリスト、関連するWindowsアイコン、実行ファイルアイコンなど、さまざまなリソースから画像を取得。回転、反転、グレースケールなど、多くの変換をサポート。 `[Delphi]`

* [NativeJpg](https://code.google.com/p/simdesign)完全にオブジェクト指向のPascal実装により、JPEGファイルの読み書きが可能。ファイルまたはストリームからJPEG画像を読み書きできる。ベースラインおよびプログレッシブJPEGをサポートし、メタデータのサポート、およびすべての可能性のある無損失操作をサポート。 `[Delphi]`

* [OpenGL Pascal Toolkit](https://github.com/daar/GLPT). `[FPC]` プラットフォームに依存しない方法で OpenGL コンテキストを作成・管理できる、使いやすいネイティブ Pascal ツールキット。

* [BGRAbitmap](https://github.com/edivando-fpc/BGRABitmap)Lazarusで透過性とアンチエイリアスを備えた描画ルーチン（Lazarus用）。さまざまな変換を提供。これらのルーチンは、BGRA形式またはRGBA形式（プラットフォームにより異なる）の32ビット画像を操作できる。 `[Delphi]` `[FPC]`

* [Clipper](http://angusj.com/delphi/clipper.php)ラインおよび多角形のクリッピング（交差、合併、差、排他的OR）およびラインおよび多角形のオフセットを実行するライブラリ。 `[Delphi]`

* [dexif](https://github.com/cutec-chris/dexif)Delphi EXIFライブラリのLazarus版。画像からEXIF情報を抽出できる。 `[Delphi]` `[FPC]`

* [FontIconEditor](https://github.com/lminuti/FontIconEditor)シンプルなコンポーネントエディタ。フォントからTImageListにアイコンを追加できる。任意のフォントを使用可能。 `[Delphi]`

* [IconFontsImageList](https://github.com/EtheaDev/IconFontsImageList)Delphi（VCLおよびFMX）向けの拡張されたImageList。アイコンフォントの簡単な使用と管理を可能に（GDI+サポートあり）。 `[Delphi]`

* [Mundus](https://github.com/Memnarch/Mundus)Delphiで書かれたソフトウェアレンダラー。現在はインラインアセンブリを使用しているため、Win32のみをサポート。 `[Delphi]`

* [Image32](https://sourceforge.net/projects/image32). `[Delphi]` `[FPC]` ([Website](http://www.angusj.com/delphi/image32/Docs/_Body.htm)) デルフィーPascalで書かれた2Dグラフィックスライブラリ。画像処理機能が豊富で、線および多角形レンダラーを備え、さまざまなブラシの埋め込みオプションをサポート。

* [SVGIconImageList](https://github.com/EtheaDev/SVGIconImageList)SVGをレンダリングするための4つのエンジン（Delphi TSVG、Delphi Image32、Direct2D、Cairo）と、SVG画像の使用を簡易化するための4つのコンポーネント（サイズ変更、固定色、グレースケールなど）。 `[Delphi]`

* [Skia4Delphi](https://github.com/viniciusfbb/skia4delphi)Delphiプラットフォーム向けのクロスプラットフォーム2DグラフィックスAPI。GoogleのSkiaグラフィックスライブラリに基づく。モバイル、サーバー、デスクトップモデルで画像をレンダリングできる包括的な2DAPIを提供。 `[Delphi]`

* [PdfiumLib](https://github.com/ahausladen/PdfiumLib)PDFiumを使用したPDF VCLコントロールの例。 `[Delphi]`

* [llPDFLib](https://github.com/SybrexSys/llPDFLib)純粋なオブジェクトPascalライブラリによるPDFドキュメント作成。このライブラリは、PDFファイルの生成にDLLや外部第三者ソフトウェアを一切使用しない。TImageListコンポーネントを含み、DelphiのTPrinterと同様のプロパティおよびメソッドを提供し、PDFファイルの生成に設計されている。 `[Delphi]`

* [ImageQuality](https://github.com/GodModeUser/ImageQuality)画像・動画品質を客観的に測定するためのライブラリ。MS-SSIM、MS-SSIM*、SIMM、MSE、PSNRなどの多くの有名アルゴリズムを実装。高速で正確かつ信頼性が高い設計。直接コンパイル可能で、追加のライブラリは不要。 `[Delphi]` `[FPC]`

* [DelphiX](http://www.micrel.cz/Dx/). `[Delphi]` `[FPC]` DirectXに良いラッパーを提供。ゲームやグラフィカルインターフェースの開発に使用可能。

* [Blen2d4Delphi](https://github.com/fatihtsp/Blen2d4Delphi). `[Delphi]` Blend2DはC++で書かれた高性能2Dベクターグラフィックスエンジンで、Zlibライセンスのもと公開されている。このエンジンは組み込みのJITコンパイラを用いて実行時における最適化パイプラインを生成し、複数スレッドを活用することで、単一スレッドでのレンダリングを超える性能を発揮できる。

* [Delphi wrapper for libdmtx](https://github.com/JanOosting/delphidmtx). `[Delphi]` Libdmtxは、現代のECC200タイプのデータマトリクスバーコードを読み書きできるソフトウェアライブラリである。このライブラリは複数のプラットフォームでネイティブに動作し、libdmtx言語ラッパーを用いて複数の言語でアクセス可能。


## ゲーム開発 <a id="game-dev"></a> ##

*There are also some drawing engines suitable for game dev in [グラフィックス](#graphic) section*

* [RecastNavigation](https://github.com/Kromster80/RecastNavigationDelphi). `[Delphi]` ゲーム用のナビゲーションマッシュの構築ツールセット。RecastはDetour、パス探索および空間推論ツールキットと共に提供されている。Detourでは任意のナビゲーションマッシュを使用可能だが、Recastで生成されたデータは自然に適合する。これはC++で書かれたオリジナルRecastNavigationのポートである。

* [Kraft Physics Engine](https://github.com/BeRo1985/kraft). `[Delphi]` `[FPC]` 3Dゲームに使えるオープンソースオブジェクトPascal物理エンジンライブラリ。対応：Delphi 7-XE7（AndroidおよびiOSターゲットは対応しない）、FreePascal >= 2.6.2（FPCがサポートしているすべてのターゲット、包括AndroidおよびiOSを含む）。

* [ZenGL](https://github.com/Seenkao/New-ZenGL). `[Delphi]` `[FPC]` Pascalで書かれたクロスプラットフォームゲーム開発ライブラリで、2Dグラフィックスのレンダリング、入力処理、音声出力など必要な機能を提供する。

* [Asphyre aka Platform eXtended Library (PXL)](https://sourceforge.net/projects/asphyre). `[Delphi]` `[FPC]` 2D/3Dゲームやインタラクティブ・科学アプリケーションのためのクロスプラットフォームフレームワーク。開発者に数学、ハードウェア制御、リソース管理、リアルタイムグラフィックスとテキストの表示、ユーザー入力、ネットワーク通信機能を支援する。

* [CrystalPathFinding](https://github.com/d-mozulyov/CrystalPathFinding). `[Delphi]` `[FPC]` タイルベースのマップにおける最短経路探索にA*/WA*アルゴリズムを使用するためのシンプルかつ効果的なオープンソースライブラリ。4（シンプル）、8（対角/対角方向）、6（六角形）の隣接するノードをサポート。

* [Allegro-Pas](https://sourceforge.net/projects/allegro-pas) ([GitHub](https://github.com/niuniomartinez/allegro-pas)) `[Delphi]` `[FPC]` AllegroゲームライブラリをPascal/Delphiで使うためのラッパー。

* [Castle Game Engine](https://github.com/castle-engine/castle-engine). `[Delphi]` `[FPC]` 完全なPascalゲームエンジン。クロスプラットフォーム3Dおよび2Dゲームエンジンで、多くのグラフィック効果とX3Dベースのシーングラフを備える。

* [TileEngine](http://www.tilengine.org). ([GitHub](https://github.com/turric4n/PascalTileEngine)) `[Delphi]` `[FPC]` Tilengine 2Dレトログラフィクスエンジン向けのOOP Pascalラッパーおよびバインディング。Tilengineは、タイルマップ、スプライト、パレットを使用してクラシック／レトロゲームを作成するためのクロスプラットフォーム2Dグラフィクスエンジン。スキャンラインベースのレンダリングアルゴリズムにより、レターレイアウト効果が基本的な機能となり、多くの実際の2Dグラフィクスチップで使用される技術となっている。

* [SDL2](http://www.freepascal-meets-sdl.net/) ([GitHub](https://github.com/ev1313/Pascal-SDL-2-Headers)) `[Delphi]` `[FPC]` Pascal SDL 2ヘッダー。Simple DirectMedia Layerは、OpenGLおよびDirect3Dを介してオーディオ、キーボード、マウス、ジョイスティック、グラフィックスハードウェアへの低レベルアクセスを提供するクロスプラットフォーム開発ライブラリ。

* [SFML](https://github.com/CWBudde/PasSFML). `[Delphi]` `[FPC]` SDLのPascal用ヘッダー。SFMLはPCのさまざまなコンポーネントに簡単なインターフェースを提供し、ゲームやマルチメディアアプリケーションの開発を容易にする。5つのモジュールから構成されている：システム、ウィンドウ、グラフィックス、オーディオ、ネットワーク。現在はDelphiおよびFPC/Lazarusに対応している。ただし、Delphiコンパイラとのコンパイラ不適合（ワークアラウンドで解決）のため、現在はFPCを推奨している。

* [pasvulkan](https://github.com/BeRo1985/pasvulkan). `[Delphi]` Vulkanヘッダー生成器、OOPスタイルのAPIラッパー、フレームワーク、そしてObject Pascal向けのVulkanベースのゲームエンジンの将来形。 `[FPC]`

* [DarkGlass](https://github.com/kenjones007/DarkGlass). `[Delphi]` DarkGlassはDelphiを使用して書かれた汎用ゲームエンジン。

* [JEDI-SDL](https://sourceforge.net/projects/jedi-sdl). `[Delphi]` `[FPC]` JEDIから提供されたSDLのPascalヘッダー。Delphi、Kylix、Free Pascal、Gnu PascalおよびTMT Pascalと互換性を持つ。

* [Apus Game Engine](https://github.com/Cooler2/ApusGameEngine). `[Delphi]` `[FPC]` 2Dゲーム、GUIアプリケーションおよびウェブサービスの開発に用いるクロスプラットフォームライブラリ。UI、テキストレンダリング、即時ローカライズ、パーティクル、基本的なスクリプト、および多くの低レベルサブシステムをサポート。OpenGL/GLESおよびDirectXを使用。

* [Delphi3D Engine](https://github.com/BrokenGamesUG/delphi3d-engine). `[Delphi]` DelphiおよびWindows向けの3Dグラフィックスおよびゲームエンジン

* [Ray4Laz](https://github.com/GuvaCode/Ray4Laz). `[FPC]` [raylib](https://www.raylib.com/) に完全なヘッダー翻訳（バインディング）を提供。

* [TurboRaylib](https://github.com/turborium/TurboRaylib). `[Delphi]` `[FPC]` TurboRaylibは、オブジェクトPascal向けの魅力的でシンプルな [raylib](https://www.raylib.com/) バインディング。Windows、Linux、OSXをサポート。TurboRaylibには、DelphiおよびLazarusで動作する多くの例が含まれている。

* [ImGui-Pascal](https://github.com/Coldzer0/ImGui-Pascal). `[Delphi]` `[FPC]` ImGui-Pascalは、最新バージョンおよびドッキング機能を備えた [ImGui](https://github.com/ocornut/imgui)（クロスプラットフォームGUIライブラリ）のバインディング。Windows、Linux、OSXをサポート。

* [abmaze](https://github.com/DosWorld/abmaze). `[FPC]` `[TP]` Pascalで書かれたAldous-Broderアルゴリズムの実装（マスの生成用）。一部の最適化が含まれている。


## 通信 <a id="communications"></a> ##


## ネットワーク <a id="network"></a>

*Socket communication, network protocols, encodings, etc*

* [Internet Component Suite](http://www.overbyte.be/frame_index.html). `[Delphi]` TCP、UDP、rawソケット、FTP、SMTP、POP3、NNTP、HTTP、Telnetなど、さまざまなインターネットコンポーネントとアプリケーションから構成された非同期ベースのライブラリ。SSLおよびTLSはOpenSSLを用いてサポート。また、MIMEデコーダ、SHA1/MD4/MD5ハッシュ、DES暗号化も提供。

* [Indy](https://github.com/IndySockets/Indy). `[Delphi]` `[FPC]` Delphi、C++Builder、Delphi.NET、FreePascal向けのネットワークコンポーネント // *2006年からデフォルトのRAD Studioインストールに含まれる、ブロッキングソケットとスレッドに基づくすべてのインストール済みネットワークライブラリ。*

* [Ararat Synapse](https://github.com/geby/synapse). `[Delphi]` `[FPC]` Delphi、C++Builder、KylixおよびFreePascal向けのPascal TCP/IPライブラリ。ブロッキング（同期）ソケットまたは限定的な非ブロッキングモードによりネットワーク通信を処理。このプロジェクトは非同期ソケットを使用していない！プロジェクトには、問題なくプログラミングできるためのシンプルな低レベル非視覚オブジェクトが含まれており、マルチスレッド同期やWindowsメッセージ処理などは不要。コマンドラインツール、視覚プロジェクト、NTサービスなどに非常に適している。// *TCP、UDP、ICMP、RAW；ICMP、DNS、SMTP、HTTP、SNMP、NTP、FTP、LDAP、NNTP、Telnet；IPv6；SOCKSプロキシ；SSL/TLS（OpenSSLまたはWindows CryptoApiを介して）；PING；文字コード変換；MIMEのエンコードおよびデコード；CRC16、CRC32、MD5およびHMAC-MD5*

* [Internet Professional](http://sourceforge.net/projects/tpipro2010). `[Delphi]` Borland DelphiおよびC++Builder向けのインターネット接続を提供するVCLコンポーネントセット。iPROにはPOP3、SMTP、NNTP、FTP、HTTP、インスタントメッセージング、HTMLビューなどのコンポーネント、および低レベルソケットアクセス用のコンポーネントが含まれる。// *見かけ上廃止されているが、ICMP、POP、SMTP、HTTP、NNTP、NTP、FTP、SMTP；HTMLパーサーおよびビュー；MIMEユーティリティ；クッキー、証明書、キャッシュ、暗号化など、かなり多くの機能を備えている*

* [SynCrtSock](https://github.com/synopse/mORMot/blob/master/SynCrtSock.pas). `[Delphi]` `[FPC]` ソケットおよびHTTPクライアント・サーバークラスを複数提供。Windowsでは高性能なhttp.sysベースのサーバー、および新しいスレッドプールを活用したソケットサーバーを実装。// *Windowsではhttp.sysバインディング、nixではcURLバインディングを実装*

* [TML Messaging Suite](https://github.com/tml21/libtml-pascal). `[Delphi]` `[FPC]` ピアツピア標準プロトコル [BEEP (Blocks Extensible Exchange Protocol)](http://www.beepcore.org)（[RFC3080](https://tools.ietf.org/html/rfc3080)および[RFC3081](https://tools.ietf.org/html/rfc3081)で定義）に基づく、拡張性とスケーラビリティを高めるためのネットワークメッセージングライブラリ。libTMLは多くの使用ケースと通信パターンに適しており、タイプセーフなデータAPIを備え、階層構造データを高速かつ信頼性の高い方法で送信できる。// *libTMLのオブジェクトPascalコンポーネントは、コアライブラリへの言語バインディングだけでなく、Embarcadero RAD StudioおよびLazarusでのlibTMLの使用を簡易化するための完全な非視覚コンポーネントセットである。*

* [DMVCFramework](https://github.com/danieleteti/delphimvcframework). `[Delphi]` Delphi向けのウェブソリューションに人気があり、強力なフレームワーク。

* [Delphi IOCP](https://github.com/ymofen/diocp-v5). `[Delphi]` Windows IOCP技術に基づいた複数のネットワーククラスを実装。ソケット、HTTP、Ntripサーバーおよびクライアント。// *非常に詳しいドキュメントと良いスタイルのコードだが、中国語のみ*

* [Kitto](https://github.com/EtheaDev/kitto). `[Delphi]` データモデルに基づいた豊かなインターネットアプリケーションを作成できる。クライアント側ではExtJS（ExtPascalライブラリを通じて）を使用して完全なAJAXアプリケーションを構築し、標準および高度なデータ操作フォームを短時間で作成できる。Kittoは、HTML、CSS、JavaScriptの複雑さに触れず、特定のライブラリ（例：ExtJS）を学ばなくてもWebアプリケーションを作成するDelphi開発者を対象としている。必要に応じて、ハードウェアレベルへのアクセスも可能。また、新しいバージョン [Kitto 2](https://github.com/EtheaDev/kitto2) および [Kitto 3](https://github.com/EtheaDev/kitto3) が提供されている。

* [Daraja Framework](https://github.com/michaelJustin/daraja-framework). `[Delphi]` `[FPC]` オブジェクトPascal（Delphi 2009以降／Free Pascal 3.0）向けの軽量HTTPサーバーフレームワーク。RESTfulサービスの実装は [daraja-restful](https://github.com/michaelJustin/daraja-restful) エクステンションによりサポートされている。

* [Alcinoe](#general-libraries)FTP/HTTP/NNTP/POP3/SMTP、ISAPI、WinInet HTTP/FTP クライアント

* [Fundamentals Code Library](#general-libraries). ブロッキングTCPクライアント/サーバー、SSL3/TLS1.0/TLS1.1/TLS1.2（完全にネイティブ）。

* [mORMot](#general-libraries)RESTful ORM および SOA サービスを、高性能 HTTP サーバーを介したインターフェースで提供。MVC/MVVM フレームワークによるウェブサイト

* [Hprose for Delphi/Lazarus](https://github.com/hprose/hprose-delphi). `[Delphi]` `[FPC]` 高性能リモートオブジェクトサービスエンジン。現代的で軽量であり、マルチ言語・マルチプラットフォームに対応した、オブジェクト指向の高性能リモート動的通信ミドルウェア。使いやすさと強力さを両立。このプロジェクトは Hprose による Delphi/Lazarus の実装です。

* [DelphiZeroMQ](https://github.com/grijjy/DelphiZeroMQ). `[Delphi]` ZeroMQ Majordomo プロトコルおよび CZMQ 高レベルバインディングの Delphi 実装。

* [GrijjyFoundation](#general-libraries). IOCP/EPOLLソケット、ソケットプール、HTTP、HTTP/2、OpenSSL、ProtocolBuffers。

* [STOMP Client](https://github.com/danieleteti/delphistompclient). `[Delphi]` `[FPC]` Embarcadero Delphi および FreePascal 用の STOMP クライアント。このプロジェクトは INDY（Delphi）または Synapse（Delphi または FreePascal）を使用可能です。

* [BesaSoap](https://github.com/besasoftware/besasoap). `[Delphi]` BesaSoap ライブラリは、プログラマがより高速かつネイティブなウェブサービスクライアントアプリケーションを開発するのを支援するため設計されています。C# または Java に類するネイティブクラスサポート、nullable データ型、カスタム属性を提供します。

* [IndySoap](https://sourceforge.net/projects/indysoap). `[Delphi]` Delphi/CBuilder コンパイラを使用したウェブサービスの実装用オープンソースライブラリ。IndySoap は INDY に依存していないものの、INDY 基盤のトランスポートサービスは含まれています。

* [Fano Framework](https://fanoframework.github.io). `[FPC]` モダンな Pascal プログラミング言語向けのウェブアプリケーションフレームワーク。Free Pascal で記述されています。

* [Internet Tools](#xmljsonyaml). XPath/XQuery/JSONiq/CSS/HTML; Windows/Linux/macOS/Android での HTTP/S リクエストを実行する関数、XSLTをインスピレーションとしたウェブスクレイピング言語、および自動更新クラスを提供。

* [Delphi Cross Socket](https://github.com/winddriver/Delphi-Cross-Socket/). `[Delphi]` `[FPC]` Delphi/FPCクロスプラットフォームソケットライブラリ（中国語）。異なるプラットフォームに応じて異なるIOモデルを使用：IOCP（Windows）、KQUEUE（FreeBSD（macOS、iOSなど））、EPOLL（Linux（Linux、Android））。TCP、HTTP/HTTPS、SSL/TLSによるWebSocketをサポート。
// *最大スループットを実現するゼロコピーストリームアーキテクチャ。10,000以上の同時接続。[English comments fork](https://github.com/bero/Delphi-Cross-Socket)*

* [ToroKernel](https://github.com/torokernel/torokernel). `[FPC]` これは、特別にポートされた Free Pascal アプリケーションがシステム内で独立して実行できるようにするライブラリ・カーネルです。Toro はユーザーのアプリケーション内にコンパイルされ、baremetal または現代のホスト仮想化環境（例：hyperv、kvm、qemu、firecraker）において起動可能な1つのバイナリを生成します。ToroKernel は、マイクロサービス開発を支援するため、専用APIを提供しています。

* [Horse](https://github.com/HashLoad/horse). `[Delphi]` `[FPC]` 高速かつミニマリズムを重視したウェブフレームワーク。Horse は、努力を要せず、強力な RESTful サーバーを構築できます。マイクロサービスに特化しています。

* [Bauglir WebSocket](https://github.com/MFernstrom/Bauglir-WebSocket-2). `[Delphi]` `[FPC]` Ararat Synapse をベースにした WebSocket サーバー・クライアントの実装。

* [Delphi-RabbitMQ](https://github.com/HeZiHang/Delphi-RabbitMQ). `[Delphi]` Delphi 用の RabbitMQ ドライバー

* [DelphiGrpc](https://github.com/ultraware/DelphiGrpc). `[Delphi]` リアルタイムおよびストリーミング gRPC プロトコルの実装

* [Delphi JOSE and JWT Library](https://github.com/paolo-rossi/delphi-jose-jwt). `[Delphi]` JOSE（JSON Object Signing and Encryption）および JWT（JSON Web Token）の Delphi 実装

* [WiRL](https://github.com/delphi-blocks/WiRL). `[Delphi]` Delphi で RESTful サービスの実装を簡易化するためのプロジェクトですが、より重要なのは、他の言語やツールで書かれた REST クライアントとの最大互換性を実現することです。

* [OpenSSL](https://github.com/lminuti/Delphi-OpenSSL). `[Delphi]` OpenSSL の Delphi ワッパー

* [Thrift Delphi Software Library](https://github.com/apache/thrift/tree/master/lib/delphi). `[Delphi]` ポイントツーポイントRPC実装に向けた軽量で言語に依存しないソフトウェアスタック。Thriftはデータ転送、データシリアライズ、アプリケーションレベル処理のための明確な抽象化と実装を提供する。コード生成システムはシンプルな定義言語を受け取り、抽象化されたスタックを使って異なるプログラミング言語にコードを生成し、相互運用可能なRPCクライアントとサーバーを構築する。Thriftにより、異なるプログラミング言語で書かれたプログラムがデータを共有し、リモートプロシージャを呼び出すことが容易になる。28のプログラミング言語に対応しており、おそらくあなたが現在使用している言語もサポートされている。

* [Delphi Modbus](https://github.com/coassoftwaresystems/delphi-modbus). `[Delphi]` `[FPC]` TCP/IP 上の ModbusTCP プロトコルのマスターおよびスレーブの実装。

* [RESTRequest4Delphi](https://github.com/viniciussanchez/RESTRequest4Delphi). `[Delphi]` RESTRequest4Delphi は、どのプログラミング言語で書かれた REST サービスを消費するための API です。開発を簡素かつミニマリズムで支援するように設計されています。

* [LazWebsockets](https://github.com/Warfley/LazWebsockets). `[FPC]` これは、FPC および Lazarus 用に書かれた小さな WebSocket サーバーおよびクライアントの実装です。FCL のソケットユニットに基づいており、追加の依存関係に依存しません（FCL 以外はすべて独立しています）。

* [NetCom7](https://github.com/DelphiBuilder/NetCom7). `[Delphi]` これは、どの言語においても可能なソケット通信の最も高速な実装であり、TCP/IP ソケットにおける極めて最適化されたコードです。

* [Voice Communication](https://github.com/terrylao/voice_communication). `[Delphi]` Voice Communicator Components. // *RTP、RTSP、SHOUT、SNTP、STUNプロトコルおよび複数のオーディオフォーマットのエンコード／デコードを実装*

* [libPasCURL](https://github.com/isemenkov/libpascurl). `[Delphi]` `[FPC]` cURLライブラリへのバインディングとラッパー。libcurlはURL構文で指定されたデータの転送に使用され、HTTP、HTTPS、FTP、FTPS、GOPHER、TFTP、SCP、SFTP、SMB、TELNET、DICT、LDAP、LDAPS、FILE、IMAP、SMTP、POP3、RTSPおよびRTMPをサポートしています。

* [Delphi_SChannelTLS](https://github.com/Fr0sT-Brutal/Delphi_SChannelTLS). `[Delphi]` TLS通信を行うためのヘルパー関数およびソケットクラス。WinAPI（SChannel）を用いて実装。Overbyte ICS TWSocketの派生クラスを含む。

* [Delphi-Kafka](https://github.com/HeZiHang/Delphi-Kafka). `[Delphi]` Librdkafkaに基づく高性能Delphiクライアント。完全なプロトコルサポートを備えています。

* [DelphiKafkaClient](https://github.com/norgepaul/DelphiKafkaClient). `[Delphi]` クロスプラットフォームDelphiクライアント/ラッパー（Apache Kafka）。Windows（i386/x64）およびLinux（x64）をサポート。Delphi 10.4でテスト済みだが、すべての現代的なDelphiリリースで動作するはず。ただし、期待通りに動作しているように見えるものの、このプロジェクトは概念実証であり、生産環境でのテストは一切行われていない。

* [KafkaGate](https://github.com/dinmil/KafkaGate). `[FPC]` Apache Kafka Free Pascalバインディング。librdkafkaおよびZeroMQを使用しています。

* [delphi-mqtt](https://github.com/pjde/delphi-mqtt). `[Delphi]` DelphiベースのICSネットワークコンポーネントによるMQTTサーバーおよびクライアントコンポーネント。

* [mqtt](https://github.com/bkeevil/mqtt). `[FPC]` メッセージキュー・テレメトリ・トランスポート（MQTT）クライアントおよびサーバーコンポーネントパック。Lazarus/FPC用。デモアプリケーションを提供。クライアントおよびサーバーのデモアプリケーションではLNetコンポーネントが使用されています。

* [LNet](https://github.com/almindor/lnet). `[FPC]` Free Pascalで書かれた軽量ネットワークライブラリ。非同期、TCP/UDP通信クラス。LTCP、LUDP、LTELNET、LFTPおよびLSMTPが例プログラムです。

* [NamedPipeExchange](https://github.com/kami-soft/NamedPipeExchange). `[Delphi]` 名前付きパイプを介して通信するサーバーおよびクライアントクラス。基盤には
[FWIOCompletionPipes](http://rouse.drkb.ru/network.php#fwiocompletionpipe)ユニットを使用します。

* [delphizmq](https://github.com/bvarga/delphizmq). `[Delphi]` `[FPC]` ZeroMQへのバインディング。Delphi7以降およびFPC 2.6.0で動作する。パッケージにはラッパー（zmq.pas）および高度なAPI（zmqapi.pas）が含まれており、ZMQ 2.2.xおよび3.2.xに対応。2.2.xの場合、zmq.incにzmq3を未定義する必要がある。DLLはこのリポジトリに含まれていないため、公式ディストリビューションからダウンロードし、libzmq.dllにリネームする必要がある。

* [xxm](https://github.com/stijnsanders/xxm). `[Delphi]` Delphiで動的ウェブサイトを作成できるライブラリ。ソースファイルにDelphiとHTMLを組み合わせます。プロジェクトはモジュールにコンパイルされ、Internet Explorerのプラグインプロトコルハンドラー、ISAPI拡張、Apacheモジュール、HTTPAPI、CGIまたはSCGI、またはスタンドアローンHTTPサーバーで使用可能になります。

* [WebSocket Component for Delphi](https://bitbucket.org/freeonterminate/websocket/src/master/). `[Delphi]` Delphi用のWebSocketコンポーネント。プラットフォーム：Windows / macOS / Linux（iOS、Androidも可能）

* [Bird Socket Server](https://github.com/mateusvicente100/bird-socket-server). `[Delphi]` Delphi用のWebSocketサーバー。

* [RealThinClient SDK](https://github.com/teppicom/RealThinClient-SDK/). `[Delphi]` デリバのWebアプリケーション開発に最適化された柔軟でモジュラリティの高いフレームワーク。Webによる設計を採用し、HTTP/Sを活用し、IPv4およびIPv6を完全にサポートし、内蔵マルチスレッド機能を備え、極めてストレステストされたため、最高の安定性を確保しています。

* [JabberClient](https://github.com/HemulGM/HGMJabberClient). `[Delphi]` Jabberクライアント。XMPPプロトコル

* [libssh2 Delphi](https://github.com/pult/libssh2_delphi). `[Delphi]` `[FPC]` libssh2ライブラリへのDelphi/Pascalのラッパー。SSHおよびSFTPプロトコルをサポート

* [Brook framework](https://github.com/risoflora/brookframework). `[Delphi]` `[FPC]` Web Pascalアプリケーション開発を支援するマイクロフレームワーク。
// *外部の[libsagui](https://risoflora.github.io/libsagui/)に基づいている*

* [WebSocket.pas](https://github.com/biot2/WebSocket.pas). `[Delphi]` `[FPC]` プレーンオブジェクトパascalソースコードによるWebSocketクライアントおよびサーバーライブラリ

* [nats.pas](https://github.com/biot2/nats.pas). `[Delphi]` `[FPC]` libnats-cに基づくObject PascalによるNATSクライアント

* [Firebase Services for Delphi](https://github.com/SchneiderInfosystems/FB4D). `[Delphi]` グーグルのFirebaseサービス（Firebase RT-DB、Firestore DB、Cloud Storage、VisionML、Firebase Authorization、Firebase Functions）に対応するクロスプラットフォーム（FMX/VCL/Console）ライブラリ。すべてのプラットフォーム（Windows、Mac、iOS、Android、Linux）に対応しています。

* [Dext Framework](https://github.com/cesarliws/dext). `[Delphi]` モダンなフルスタック環境。ASP.NET CoreやSpring Bootのようなフレームワークの生産性およびアーキテクチャパターンを、Object Pascalのネイティブパフォーマンスに取り入れています。


## クラウド・リモートサービス <a id="cloud-remote-services"></a>

*APIs for cloud and other remote services*

* [delphi-aws-ses](https://github.com/monde-sistemas/delphi-aws-ses). `[Delphi]` Delphiアプリケーション向けのAmazon Simple Email Service（AWS SES）ライブラリ。

* [delphi-slackbot](https://github.com/monde-sistemas/delphi-slackbot). `[Delphi]` [Slack](https://slack.com) slackbotを用いたメッセージ送信用Delphiライブラリ

* [SDriver](https://github.com/andrea-magni/SDriver). `[Delphi]` [Slack](https://slack.com) API 用の Delphi ワッパー。

* [TelegaPi](https://github.com/rareMaxim/TelegaPi). `[Delphi]` Telegram メッセージボット API との対話を行うための Delphi ライブラリ。

* [fp-telegram](https://github.com/Al-Muhandis/fp-telegram). `[FPC]` TelegramボットAPIとFreePascal/Lazarusの間の通信用ライブラリ。

* [delphiXero](https://github.com/littleearth/delphiXERO). `[Delphi]` XERO クラウド会計 API 用の Delphi ライブラリ。

* [Google API for Delphi](https://github.com/googleapi/googleapi). `[Delphi]` Google API 用の Delphi ライブラリ

* [VK API](https://github.com/HemulGM/VK_API). `[Delphi]` Vkontakte（ロシアのソーシャルネットワーク）API との対話を行うための Delphi ライブラリ。完全API（ボットサンプル付き）。

* [AWS SDK for Dephi](https://github.com/landgraf-dev/aws-sdk-delphi). `[Delphi]` 非公式 AWS（Amazon Web Services）SDK 用の Delphi ライブラリ。

* [Ntfy for Delphi](https://github.com/hazzelnuts/ntfy-for-delphi). `[Delphi]` ntfy.sh サーバーを用いて即時通知を送るための親しみやすい Delphi ライブラリ

* [DelphiOpenAI](https://github.com/HemulGM/DelphiOpenAI). `[Delphi]` Delphi用OpenAI GPT-3 API

* [IPInfo API](https://github.com/HemulGM/IPInfo_API). `[Delphi]` IP Info API サービス用のワッパー

* [TGBot Mini API](https://github.com/HemulGM/TGBotMini). `[Delphi]` Telegram ボットを作成するための高速かつシンプルな API

* [ImgBB API](https://github.com/HemulGM/ImgBB.API). `[Delphi]` ImgBB.com API ワッパー

* [OWM API](https://github.com/HemulGM/OWM_API). `[Delphi]` OpenWeatherMap.com API ワッパー


## シリアルポート <a id="serial-port"></a>

* [Synaser](https://github.com/geby/synapse/blob/master/synaser.pas). `[Delphi]` `[FPC]` シリアルポート上のブロッキング通信用ライブラリ。Synapseと同様に非視覚クラスであり、プログラマーフェースもSynapseと非常に類似している。

* [Async Professional](http://sourceforge.net/projects/tpapro) ([Newest](https://github.com/TurboPack/AsyncPro) および最近のコンパイラバージョン向けのメンテナンスバージョンのみ)。`[Delphi]` Embarcadero Delphi、C++Builder、およびActiveX環境向けの包括的な通信ツールキット。シリアルポート、TAPI、Microsoft スピーチAPI（TTS／音声認識）への直接アクセスを提供。ファックス、ターミナルエミュレーション、VOIP、RASダイアルなどもサポート。// *2011年まで更新されていないが、XEに適応されており、新しいバージョンでも使いやすい可能性がある。プロジェクトは非常に詳細にドキュメント化されている。2番目のリンクは、最新コンパイラバージョン向けに適応されたバージョンを指す。*

* [TComPort](https://sourceforge.net/projects/comport). `[Delphi]` Delphi/C++Builder用のシリアル通信コンポーネント。基本的なシリアル通信用途では一般的に使いやすい。// *2011年以降、維持されていない*

* [ComPortDriver](https://github.com/MHumm/ComPortDriver). '[Delphi]' Delphi/C++Builder用のシリアル通信コンポーネント。921600baudまでテスト済み。ブレイク送信もサポート。タイマーによるポーリングで非同期的に動作。デモが含まれている。

* [ComPort Library](https://github.com/CWBudde/ComPort-Library). `[Delphi]` Delphi 用の COM ポート ライブラリ（SourceForge からのフォーク）。COM ポート ライブラリは COM ポートにアクセスするコードを含む。元々、COM ポートは IBM-PC 互換コンピュータのシリアルポートインターフェースの名前であった。現代では、USB 接続が通信に優位となり、COM ポートは重要性を失っているが、仮想ポートとしての利用は依然として行われており、特にマーカーボードのためのシンプルな通信プロトコルとして使われている。

* [Usb serial controller for Android](https://github.com/felHR85/UsbSerial). `[Delphi]` Android 用の USB シリアル制御デバイス


## イベントバス <a id="event-bus"></a>

*Communication inside project*

* [PubSub Chimera](https://code.google.com/p/pubsubchimera). `[Delphi]` MIT ライセンスに基づくオープンソースライブラリ。Delphi で高速かつプラットフォームを越えて動作する PubSub およびメッセージキューの実装を提供。ライセンスが不満足なものではない。

* [Delphi Event Bus](https://github.com/spinettaro/delphi-event-bus) (短いDEB用)。`[Delphi]` Delphi用のイベントバスフレームワーク。

* [DelphiEventBus](https://github.com/BitecSPB/DelphiEventBus). `[Delphi]` Delphi 用のもう一つのイベントバスフレームワーク。アノテーションと豊かなイベントフィルタリングを備えている。

* [VSoft.Messaging](https://github.com/VSoftTechnologies/VSoft.Messaging). `[Delphi]` Delphi アプリケーション向けに内部の同期／非同期の発行／購読メッセージシステムを提供するライブラリ。

* [iPub Messaging](https://github.com/viniciusfbb/ipub-messaging). `[Delphi]` iPub チームが開発した、クラス／レイヤ間の通信に用いる、スレッドセーフかつ非同期かつシンプルなメッセージシステム。

* [NX-Horizon](https://github.com/dalijap/nx-horizon). `[Delphi]` Delphi 用のイベントバス。発行／購読パターンを実装し、同期／非同期イベント配信をサポート。実装と使用がシンプルで、高速かつ完全なスレッドセーフ。


## GUI <a id="gui"></a> ##

*Visual components*


## コントロール集 <a id="control-packs"></a>

*Large sets of GUI controls*

* [Cindy components](http://sourceforge.net/projects/tcycomponents). `[Delphi]` 71のコンポーネントを含むパッケージ：VCLコントロール（ラベル、ボタン、パネル、エディット、タブコントロール、静的テキスト）など。背景グラデーション、色付きベベル、 wallpaper、シャドウテキスト、キャプションの方向など、さまざまな機能を備えている。

* [Orpheus](http://sourceforge.net/projects/tporpheus) ([Newest](https://github.com/TurboPack/Orpheus) および最近のコンパイラバージョン向けのメンテナンスバージョンのみ)。`[Delphi]` Borland DelphiおよびC++Builder向けの賞を受賞したUIツールキット。120以上のコンポーネントを含み、データ入力からカレンダー、時計までをカバー。その他の注目すべきコンポーネントには、オブジェクトインスペクタ、LookOutバーおよびレポートビューがある。// *高度な編集、コンボボックス、グリッド＋コンポーネント（デ）シリアル化。GUIコンポーネントはかなり古風なスタイルであり、テーマサポートが限られている可能性がある。パッケージには多くのデモが含まれているが、ドキュメントは見当たらない。2番目のリンクは、最新コンパイラバージョン向けに適応されたバージョンを指す。*

* [KControls](https://github.com/kryslt/KControls). `[Delphi]` `[FPC]` コントロールコンポーネント。すべてのコントロールは、Delphi/C++Builder VCLおよびLazarus LCLでのクロスIDE互換性と、Lazarusでのクロスプラットフォーム互換性を目的として作成されている。// *特に有用なのはTKGridであり、DB認識機能を持つTKDBGrid。非常に機能豊かなグリッド実装を含む（インプレースエディタを含む）。また、ヘキサエディタ、プリントプレビュー、エディタ、ラベル、ボタンなども含まれている。*

* [D.P.F Delphi Android](http://sourceforge.net/projects/dpfdelphiandroid) / [D.P.F Delphi iOS](http://sourceforge.net/projects/dpfdelphiios) ナイティブコンポーネント。`[Delphi]` D.P.F Delphi ナイティブコンポーネント、100％iOSのパフォーマンスとスタイル。iPhoneおよびiPadおよびiPod Touchアプリケーションを開発し、高速なネイティブパフォーマンスとネイティブスタイルを実現。ネイティブAndroidコントロールおよびサービスを使用。高速ネイティブパフォーマンス。FM VCLコントロールと組み合わせて使用可能。最新のAndroidコントロールおよび機能を迅速にアップデート可能。

* [Essentials](https://github.com/TurboPack/Essentials). `[Delphi]` Embarcadero DelphiおよびC++Builder向けの13のネイティブVCLコントロールを含む。コントロールにはドロップダウンカレンダーおよび計算機、リールアップダイアログ、3Dラベル、タイル背景、スクロールメッセージ、メニューボタンなどがある。

* [FreeEsVCLComponents](https://github.com/errorcalc/FreeEsVCLComponents). `[Delphi]` Delphi および C++Builder 用の VCL コンポーネントの無料ライブラリ。新しいコントロールとコンポーネントにより、アプリケーションの見た目を向上させ、ユーザー体験を改善。コンポーネントは視覚スタイルをサポートし、現代的なスタイルを備えている。すべてのコンポーネントは透過性を最適化し、フリックを防ぎ、TGraphicControlの継承者に対して興味深いダブルバッファリングのサポートを提供している。

* [SpTBXLib](https://github.com/SilverpointDev/sptbxlib). `[Delphi]` Toolbar2000 コンポーネントへの拡張パッケージ。以下の機能を追加：スキン、ユニコード対応、カスタム描画イベントなど、さらに多くの機能。

* [Kastri](https://github.com/DelphiWorlds/Kastri)デルフィーにおける既存のRTLおよびFMXライブラリをベースにした、クロスプラットフォームライブラリ。FMX/RTLに含まれないいくつかの新しいAPIをサポートし、欠落しているAPIを補完する `[Delphi]`

* [DelphiUCL](https://github.com/VuioVuio/DelphiUCL)デルフィーVCL用のUWPコントロール `[Delphi]`

* [JPPack](https://github.com/jackdp/JPPack). `[Delphi]` `[FPC]` Delphi用のVCLコンポーネントおよびLazarusおよびCodeTyphon用のLCLコンポーネントのコレクション — ボタン、パネル、LinkLabel、ProgressBar、ColorComboBox、ColorListBox、Timerなど

* [DDuce](https://github.com/beNative/dduce). `[Delphi]` Delphiの新しい言語機能（演算子オーバーロード、属性、ジェネリクス、匿名メソッド、拡張RTTI）を用いたコンポーネント、モジュール、拡張、プリミティブ。開発者の創造性を拡張するためのいくつかの強力なツールを提供。// *プロパティエディタ、グリッド、XMLツリーなど*

* [liblcl](https://github.com/ying32/liblcl). `[FPC]` 一貫したプラットフォームを対象としたGUIライブラリ。コアはLazarus LCLを使用している。// *C++、Go、Rustなどの言語で使用可能なPascalベースのライブラリでGUIバインディングを提供*


## 単体コントロール <a id="single-controls"></a>

* [EasyListView](http://code.google.com/p/mustangpeakeasylistview) (seems abandoned, active fork on GH [here](https://github.com/TurboPack/MustangpeakEasyListview)). 単体コントロールに関するPascalライブラリ、コンポーネント、ツール、または資料です。 コード: `[Delphi]`。
// *単体コントロールに関する補足機能、互換性、保守状況の説明です。*

* [VirtualTreeView](https://github.com/Virtual-TreeView/Virtual-TreeView). `[Delphi]` ([VirtualTreeView-Lazarus](https://github.com/blikblum/VirtualTreeView-Lazarus) をFPCに移植した版 `[FPC]`)。完全に構築されたツリーコントロール。長年にわたる開発により、今日まで最も柔軟で高度なツリーコントロールの一つとなった。// *非常に柔軟な視覚コンポーネントで、仮想（コールバックベース）のMVCアーキテクチャを実装。リストビューまたはグリッドとしても使用可能。RAD Studio GUIで使用されている。*

* [Delphi Chromium Embedded](https://github.com/hgourvest/dcef3). `[Delphi]` DelphiにChromiumを埋め込み、Delphi 2010、XE、XE2、Delphi 7でテスト済み。// *複数のChromium DLLが必要*

* [TChromeTabs](https://github.com/norgepaul/tchrometabs)Google ChromeのタブをDelphi 6 - Delphi 10.1 Berlinで包括的に実装 `[Delphi]`

* [TFrameStand](https://github.com/andrea-magni/TFrameStand)FireMonkey（FMX）アプリケーション内でTFrame（TFrame）を使用することで、全体のユーザー体験において視覚的な一貫性を確保し、効果やトランジションなどの現代的な要素を簡単に追加できる `[Delphi]`

* [TPrintPreview](https://github.com/landrix/TPrintPreview-for-Delphi)デルフィーVCL Win32/Win64用のプリントプレビューコンポーネント `[Delphi]`

* [VolgaDB](https://sourceforge.net/projects/volgadb)Delphi用のカスタマイズ可能なDBグリッド。TCustomGridの派生クラス。チェックボックス、コンボボックスの列スタイルをサポート。また、TVolgaDBEditがTDBEdit、TDBComboBox、TDBLookupCombo、TDBLookupTreeおよびTDBDatePickerを1つのコンポーネントで置き換える。TVolgaDBEditはDB認識可能かつDB認識不可のどちらでも使用可能。// *2013年以降、利用が停止されている* `[Delphi]`

* [TTreeListView](http://github.com/benibela/treelistview)TTreeViewとTListViewの混合コンポーネントであり、ノードに追加情報を列に並べて表示するツリーを描画できる `[Delphi]` `[FPC]`

* [neTabControl](https://github.com/jkour/neTabControl)デルフィー用のFireMonkeyコントロール。ネイティブのタブコントロールをベースに、複数の機能を追加している `[Delphi]`

* [ATTabs](https://github.com/Alexey-T/ATFlatControls)ライトタブ用のデルフィー／ラザルスコンポーネント。OSに依存せず、完全にカスタム描画されている `[Delphi]` `[FPC]`

* [zControls](https://github.com/MahdiSafsafi/zcontrols)TzObjectInspectorを含む。強力なオブジェクトインスペクタで、多くの機能を提供 `[Delphi]`

* [RiverSoftAVG Charting Component Suite](http://www.riversoftavg.com/charting.htm)無料（非商業用途）で、チャートおよびグラフをプログラムに追加できるソースコード付きチャートツール。Delphi 2010-Tokyo（Win32/Win64/macOS/iOS/Android）およびAppmethod（オブジェクトパascal）向け `[Delphi]`

* [DzHTMLText](https://github.com/digao-dalpiaz/DzHTMLText)ラベルにフォーマットされたテキストを指定できる視覚コンポーネント。HTMLコードで使われるほぼ同じ構文を使用している `[Delphi]` `[FPC]`

* [SMDBGrid component](http://www.scalabium.com/smdbgrid.htm)TDBGridの継承版で拡張機能を備えたもの。複数行のタイトル表示、ブールフィールド用のチェックボックス、キーボードおよびマウスによるレコード選択、拡張されたインジケータ列、列の固定、DBGrid内のレコードの挿入・削除の除外、独自のポップアップメニュー、列状態の保存／復元、追加イベントの処理など。マルチ言語リソースをサポート `[Delphi]`

* [decTreeView](https://github.com/DenisAnisimov/decTreeView)decTreeViewライブラリは、TreeView（SysTreeView32）コントロールの代替実装 `[Delphi]`

* [TeeGrid](https://github.com/Steema/TeeGrid)軽量かつ機能豊富なグリッド／テーブルコントロール。Embarcadero RAD Studio 2009以降、DelphiおよびC++、VCLおよびFiremonkeyフレームワーク（すべてのプラットフォーム：Windows 32および64ビット、Mac OSX、AndroidおよびiOS）およびLazarus FreePascal（Windows、Linuxなど）向け `[Delphi]` `[FPC]`

* [AXW Ribbon](https://www.axolot.com/axwribbon.htm)オフィス2016スタイルのリボンコンポーネント。Delphi 7以降および現在のDelphiバージョンに対応。Delphi 6およびおそらくDelphi 5でもコンパイルできる可能性がある `[Delphi]`


## エディター <a id="editors"></a>

* [SynEdit](https://sourceforge.net/projects/synedit) ([mirror at GitHub](https://github.com/TurboPack/SynEdit)). `[Delphi]` Windowsの共通コントロールとは無関係な文法強調編集コントロール。SynEditはDelphiおよびKylixとも互換性を持つ

* [LazEdit](https://svn.code.sf.net/p/lazarus-ccr/svn/applications/lazedit)一般的なテキストエディタで、文法強調表示とHTML編集を支援するツールを備えている `[FPC]`

* [ATSynEdit](https://github.com/Alexey-T/ATSynEdit)ラザルス用のマルチラインエディタコントロールで、文法強調表示を提供 `[FPC]`

* [QDSEquations](https://github.com/karser/QDSEquations)デルフィーおよびラザルス向けの式エディタ。複雑な数学式（ギリシャ文字からマトリクス、複雑な積分式まで）を入力および表示できる `[Delphi]`

* [TBCEditor](https://github.com/LaKraven/TBCEditor)RAD Studio（デルフィー／C++Builder）向けの文法強調表示エディタコントロール。コードの折りたたみ、補完提案、ペアのマッチング、ミニマップ、同期編集、ワードラップなど機能を備えている。外部強調表示および色方案ファイルはJSON形式で、ストリームから読み込める `[Delphi]`


## ビューアー <a id="viewers"></a>

* [ATViewer](https://sourceforge.net/projects/atviewer) ([mirror at GitHub](https://github.com/Alexey-T/ATViewer)). `[Delphi]` 多様なファイルタイプ（テキスト、バイナリ、画像、マルチメディア、ウェブページなど）を表示するDelphi用コンポーネント。// *Universal Viewerソフトウェアに使用。ヘキサダンプの表示に利用可能。無限サイズのファイル／ストリームの高速表示をサポート。Total Commanderのリストプラグインに対応*

* [ATImageMap](https://sourceforge.net/projects/atviewer/files/ATImageMap) ([mirror at GitHub](https://github.com/Alexey-T/ATViewer)). `[Delphi]` 複数の画像（全体の一部）を1つのマップとして表示するためのコンポーネント。たとえば、200×X、100×Yの画像配列があり、そのすべてを1つのマップとして表示できる。また、パスを描画できる。各パスは複数の線、ポイント、アイコンから構成される

* [HtmlViewer](https://github.com/BerndGabriel/HtmlViewer). `[Delphi]` `[FPC]` Delphi/Lazarus HtmlViewer/FrameViewer。// *ほとんどのタグ、インラインスタイルおよびCSSをサポートするHTML視覚化ツール*

* [SciDe](https://github.com/da-baranov/SciDe). `[Delphi]` `[FPC]` [Sciter](https://sciter.com) (埋め込み可能なHTML/CSS/スクリプトエンジン)をDelphi向けにラップしたツール

* [ATBinHex for Delphi](https://github.com/Alexey-T/ATViewer/blob/master/Source/ATBinHex.pas). `[Delphi]`, [ATBinHex for Laz](https://github.com/Alexey-T/ATBinHex-Lazarus). `[FPC]` Total Commanderのように無限サイズのファイルを表示するビュー

* [ATImageBox for Delphi](https://github.com/Alexey-T/ATViewer/blob/master/Source/ATImageBox.pas). `[Delphi]`, [ATImageBox for Laz](https://github.com/Alexey-T/ATImageBox-Lazarus). `[FPC]` TScrollBoxに埋め込みされたTImageを備えたコントロール。画像が自動的に内部に配置される

* [CEF4Delphi](https://github.com/salvadordf/CEF4Delphi)デルフィーまたはラザルス／FPCで作成されたアプリケーションに、クロムベースのブラウザを埋め込むプロジェクト `[Delphi]` `[FPC]`

* [WebView4Delphi](https://github.com/salvadordf/WebView4Delphi)デルフィーまたはラザルス／FPCで作成されたWindowsアプリケーションに、クロムベースのブラウザを埋め込むプロジェクト `[Delphi]` `[FPC]`


## その他のGUI <a id="other-gui"></a>

* [GMLib](https://code.google.com/p/gmlibrary) (Google Maps Library) (seems abandoned, active fork on GH [here](https://github.com/bero/GMLibrary) and [here](https://github.com/cadetill/gmlib_v1)). その他のGUIに関するPascalライブラリ、コンポーネント、ツール、または資料です。 コード: `[Delphi]`。

* [VCL Styles Utils](https://github.com/rruz/vcl-styles-utils). `[Delphi]` VCLスタイルを拡張・修正し、QCレポートを改善し、新たな機能を追加するクラスおよびスタイルハックのコレクション。// *標準VCLスタイルエンジンを新たなレベルに引き上げるパッチ／改善のコレクション。Inno SetupおよびNSISのスタイルも提供*

* [TaskbarListComponents](https://github.com/chaosben/theunknownones/tree/master/Components/TaskBarList). `[Delphi]` Windows 7のタスクバーインターフェース（例：ITaskbarlist3）をDelphi用のラッパーとして設計されたコンポーネント集合。// *JVCLが必要*

* [TFireMonkeyContainer](https://github.com/vintagedave/firemonkey-container)デルフィーVCLコンポーネントで、FMX HDまたは3Dフォームをホストできる。つまり、FMXフォームをVCLフォーム内のコントロールとして埋め込み、FMXフォームを設計し、VCLアプリで使用できる `[Delphi]`

* [PascalSCADA](http://sourceforge.net/projects/pascalscada)デルフィー／ラザルス向けのコンポーネントセット（フレームワーク）で、産業用アプリケーション（HMI＝人間機械インターフェース／SCADA＝システム制御およびデータ取得）の開発を容易にする。Windows、Linux、FreeBSDで動作 `[Delphi]` `[FPC]`

* [Windows Ribbon Framework for Delphi](https://github.com/turbopack/ribbonframework)このデルフィーライブラリは、デルフィー開発者が自らのデルフィーアプリケーションにWindowsのリボンフレームワークを使用できるようにする。このライブラリは、ネイティブなWindowsライブラリを使用してリボン機能を実装している。他のデルフィーコンポーネントセットのようにリボンUIをエミュレートしているわけではない（あるいはデルフィー自体のリボンエミュレーションコンポーネントもそうである） `[Delphi]`

* [DKLang](https://github.com/yktoo/dklang). `[Delphi]` DKLang Localization Package は、Delphi で書かれたアプリケーションのローカライズを簡略化するためのクラスセットです。

* [GNU Gettext for Delphi, C++ and Kylix](https://sourceforge.net/projects/dxgettext/). `[Delphi]` GNU GetText の翻訳ツールが Borland Delphi および Borland C++ Builder に適用されています。

* [OpenWire](https://sourceforge.net/projects/openwireproject). `[Delphi]` このライブラリは、VCL および FireMonkey 用の高度なコンポーネントを提供し、コードなしでアプリケーションを開発を可能にします。このライブラリで開発されたコンポーネントにより、プログラムコードを一切使用せずに複雑なアプリケーションを作成できます。

* [SynTaskDialog](https://github.com/synopse/mORMot/blob/master/SynTaskDialog.pas). `[Delphi]` `[FPC]` Vista/Seven でのネイティブ実装、XP ではエミュレーションされた TaskDialog ウィンドウの実装

* [AnyiQuack](https://github.com/WladiD/AnyiQuack). `[Delphi]` jQuery に似たコントロールアニメーションフレームワーク

* [TLanguages](https://github.com/albertodev01/TLanguages). `[Delphi]` VCL および FMX 用のローカライゼーションツール

* [BitMapEditor - Delphi](https://github.com/EverestSoftwareLLC/BitMapEdtior-Delphi). `[Delphi]` Delphi 用の単一フォーム、シンプルなビットマップエディタ

* [BearLibTerminal](https://github.com/cfyzium/bearlibterminal). `[Delphi]` キャラクターセルのグリッドを持つ仮想テルミナルウィンドウと、柔軟なテキスト出力および簡単な入力処理を可能にするシンプルで強力なAPIを提供。*// マルチプラットフォーム動的ライブラリで、Delphiバインディングを提供*

* [Dam](https://github.com/digao-dalpiaz/Dam). Delphi および Lazarus のメッセージダイアログ（フォーマットされたテキスト付き） `[Delphi]` `[FPC]`

* [Windows 7 Taskbar Components](https://delphi.fsprolabs.com/). `[Delphi]` Windows 7の特徴の一つは、新しいタスクバーの導入である。これにより、デスクトップの制御、ウィンドウの管理、アプリケーションの起動が新たな方法で可能になる

* [GUI AutoSave](https://github.com/GodModeUser/Dephi-LightSaber-GUI_AutoSave) アプリケーション終了時にすべてのGUIコントロールの状態を保存し、アプリケーション起動時にそれらを再読み込み：フォームの位置、チェックボックス、ラジオボタンなど、すべてを読み書きできる

* [FMXTrayIcon](https://github.com/HemulGM/FMXTrayIcon). `[Delphi]` FMX ワンダースのトレイアイコン

* [Form Designer component for Delphi (VCL)](https://github.com/havlicekp/form-designer). `[Delphi]` フォームデザイナー（TFormDesigner）は、実行時における Delphi（VCL）フォームの設計および編集を行うことができます。動作と外観は Delphi IDE に類似しています。


## データベース <a id="database"></a> ##

* [ZeosLib](http://sourceforge.net/projects/zeoslib). MySQL、PostgreSQL、Interbase、Firebird、MS SQL、Sybase、Oracle および SQLite 用のデータベースコンポーネントセット `[Delphi]` `[FPC]`

* [Unified Interbase](https://github.com/hgourvest/uib). `[Delphi]` Interbase、FireBird および YAFFIL を使用するためのコンポーネントセット。これらは、マルチスレッド環境（例：サーバー）において、Interbase、FireBird または Yaffil を高速に使用できるようにする必要から生まれました。

* [ASQLite](https://github.com/remobjects/ASQLite3). `[Delphi]` aducomソフトウェアのDelphi 2009向けの最新リリースに基づくDelphi用SQLiteのDACコンポーネントセット。最新のDelphi版（RemObjects Data Abstract for Delphiに含まれる）に対応してアップデートされている

* [TxQuery](https://github.com/ccy/txquery). `[Delphi]` SQL文を使用して1つ以上のTCustomDataSet派生コンポーネントをクエリできるTCustomDataSet派生コンポーネント。Delphi100％ソースコードで実装されており、DLLは不要。自らのSQL文法解析器およびSQLエンジンを実装している

* [Delphi-ORM](https://github.com/danieleteti/delphi-orm). `[Delphi]` Delphi XE2-7（Win32）向けのオブジェクト・リレーションマッピング。FirebirdSQL、SQLServerおよびSQLite3に対応

* [delphimemcache](https://code.google.com/p/delphimemcache). `[Delphi]` メモリキャッシュにスレッドセーフなクライアントを実装。// *Indy 10 が必要*

* [SynDB](https://github.com/synopse/mORMot) ([docs](http://synopse.info/files/html/Synopse%20mORMot%20Framework%20SAD%201.18.html#TITL_126)). `[Delphi]` `[FPC]` SQLite3、Oracle、MSSQL、PostgreSQL、Firebird、MySQL、ODBC、OleDBへの高速な直接アクセスを提供。リモートHTTP接続および直接JSONサポートを含む。

* [SynMongoDB](https://github.com/synopse/mORMot/blob/master/SynMongoDB.pas) ([docs](http://blog.synopse.info/post/2014/05/07/MongoDB-database-access)). `[Delphi]` `[FPC]` 任意のMongoDBサーバー、そのカスタムデータ型、JSON、または`TDocVariant`によるカスタムバリエントドキュメントストレージへの直接低レベルアクセスを提供。

* [DSharp](https://bitbucket.org/sglienke/dsharp). `[Delphi]` Delphi でデータバインディングを提供するための小さなライブラリ。特別なコンポーネントを必要とせず、プロパティにバインディングできます。また、依存性注入、MVVM およびその他のユーティリティも提供しています。

* [ghORM](https://github.com/leledumbo/ghORM). `[FPC]` フリープascalからデータベースへのアクセスを容易にするオブジェクト指向マッピングユニット。バックエンドの抽象化とシンプルなデータ取得（フィルタリング）、挿入、更新を実現。

* [tDBF](http://sourceforge.net/p/tdbf/code/HEAD/tree). Delphi、BCB、Kylix、FreePascal 用のネイティブ dBASE III+、dBase IV および dBase 2k データアクセスコンポーネント。非常にコンパクトなデータベースプログラムを作成可能で、特別なインストーラーを必要としません。DBエンジンコードは実行ファイルに直接コンパイルされます。 `[Delphi]` `[FPC]`

* [Redis client](https://github.com/danieleteti/delphiredisclient). `[Delphi]` デルフィーRedisクライアントバージョン2は、デルフィー10.1 Berlin以降と互換性がある。注意！古いバージョンのデルフィーを使用する場合は、[Delphi Redis Client Version 1](https://github.com/danieleteti/delphiredisclient/tree/DELPHI_REDIS_CLIENT_VERSION_1)を使用しなければならない。これはデルフィー10 Seattle、XE8、XE7、XE6およびXE5（古いバージョンにも対応する可能性あり）で動作する。このクライアントはすべてのRedisコマンドを送信し、内部パーサーを使って応答を読み取ることができる。

* [QDAC3](http://blog.qdac.cc/?page_id=139) (SVN: svn://www.qdac.cc/QDAC3). `[Delphi]` 「クイックデータアクセスコンポーネント」という意味。QJson（使いやすいJSONユニット）、QWorker（ジョブ配達）など、便利なユニットを提供。// *中国語の説明とコメント。著者が英語が苦手。自分でテストしていない。*

* [InstantObjects](https://github.com/EtheaDev/InstantObjects). `[Delphi]` Delphi でオブジェクト指向のビジネスソリューションを開発するための統合フレームワーク。このフレームワークは開発プロセスの基礎を提供し、最終アプリケーションを動かすエンジンを提供します。InstantObjects は、Delphi IDE でのモデル実現を2方向ツールで提供し、最も一般的な関係データベースまたはフラットなXMLベースファイルでのオブジェクトの永続化を提供し、標準データ認識コントロールを用いたオブジェクトのプレゼンテーションを提供します。

* [Alcinoe](#general-libraries). Firebird/MySQL/SQLite3/Memcached/MongoDb/SphinxQL

* [SynBigTable](https://github.com/synopse/mORMot/blob/master/SynBigTable.pas). 大量のデータを高速で取得できるためのクラス `[Delphi]` `[FPC]`

* [tiOPF](https://github.com/graemeg/tiopf). Object Pascal で記述されたオブジェクト永続性フレームワーク。Delphi および Free Pascal（FPC）コンパイラと使用可能です。tiOPF は、オブジェクト指向ビジネスモデルを関係データベースにマッピングするプロセスを簡略化します。永続性レイヤーは Firebird、Oracle、MS SQL Server、MySQL、PostgreSQL、SQLite、NexusDB、XML、CSV、TAB、リモート（HTTP経由）など多数のデータベースに提供されます。また、IBX、dbExpress、DOA、SqlDB、FBLib など、ユーザーが選択できるデータベース接続コンポーネントの使用も可能です。 `[Delphi]` `[FPC]`

* [hcOPF](https://sourceforge.net/projects/larryhengensopf). `[Delphi]` Embarcadero の Delphi（Object Pascal）で記述されたオブジェクト永続性フレームワーク。このバリュー型フレームワークは、オブジェクトストア（通常はRDBMS）に自動的に永続化できる属性オブジェクトを含むベースクラス（ThcObject）を提供します。

* [Marshmallow](https://bitbucket.org/soundvibe/marshmallow/wiki/Home). `[Delphi]` デルフィーXE2-7（Win32）向けのオブジェクト指向マッピング。.NET micro ORM（主にPetaPoco）およびJava Hibernateにインスパイアされたもの。リンス・ナギオニスによって開発。SQLite、Sybase ASA、SQL Server、Firebird、Oracle、MySQL、PostgreSQL、MongoDBをサポート。[Spring](http://code.google.com/p/delphi-spring-framework/)フレームワークを使用。積極的に開発中。

* [DelphiCassandra](https://github.com/grijjy/DelphiCassandra). `[Delphi]` Cassandra データベースとの通信に必要な Delphi ドライバークラス

* [DelphiCouchbase](https://github.com/grijjy/DelphiCouchbase). `[Delphi]` Couchbase データベースとの通信に必要な Delphi ドライバークラス

* [DelphiMongoDB](https://github.com/grijjy/DelphiMongoDB). `[Delphi]` MongoDBデータベースとの通信に用いられるDelphiドライバークラス。

* [QuickORM](https://github.com/exilon/QuickORM). `[Delphi]` `[FPC]` QuickORMはmORMotフレームワークに基づくシンプルなRestServerおよびRestClientです。数分でクライアントサーバーアプリケーションの高速実装が可能になります。

* [iORM](https://github.com/mauriziodm/iORM). `[Delphi]` デスクトップおよびモバイルアプリケーション開発に有用なDelphiベースのORMインターフェース。

* [d-ORModel](https://github.com/ultraware/d-ORModel). `[Delphi]` モデルとオブジェクトフィールドに基づくDelphi用ORM。LINQ対応、完全に型指定およびコンパイル時チェック。

* [Trysil](https://github.com/davidlastrucci/Trysil). `[Delphi]` Delphi用のORM（オブジェクト-リレーショナルマッピング）。SQLServer、FirebirdSQLおよびSQLiteに対応。

* [SQLite for Delphi and FreePascal/Lazarus](https://github.com/plashenkov/SQLite3-Delphi-FPC). `[Delphi]` `[FPC]` DelphiおよびFreePascal/Lazarus向けの完全なSQLite3APIの翻訳、また、このデータベースエンジンの使用を簡易化するUnicode対応のオブジェクトラッパーを提供。

* [Bold for Delphi](https://github.com/bero/BoldForDelphi). `[Delphi]` モデル駆動アーキテクチャ（MDA）フレームワークおよびオブジェクト指向マッピング。UMLでドメインモデルを設計し、デルフィークラスおよびデータベーススキーマを自動生成。OCL（オブジェクト制約言語）によるクエリおよび派生属性、自動UI同期、内部の取り消し/再実行、最適化ロック、オブジェクトサブスクリプションを提供。FireDAC、UniDACまたはXMLを介した永続化をサポート。ほとんどの現代データベースに対応。このブランチではユニコードおよび現代デルフィーのサポートを追加。[Official Embarcadero repo](https://github.com/Embarcadero/BoldForDelphi)はデルフィー7向け。


## スクリプト <a id="scripting"></a> ##

*Using script engine in your applications*

* [Pascal Script](https://github.com/remobjects/pascalscript). `[Delphi]` `[FPC]` プロジェクトの実行時において、DelphiまたはFreePascalプロジェクト内でObject Pascalの大部分を用いることができる無料スクリプトエンジン。完全にDelphiで記述されており、実行ファイルにコンパイルできるユニットセットから構成されており、外部ファイルの配布を必要としません。Pascal Scriptは、当時スクリプトが存在しなかったため、実用的なスクリプトを実現する必要があったことから始まりました。

* [DWScript](https://bitbucket.org/egrange/dwscript). `[Delphi]` Delphiベースのオブジェクト指向スクリプトエンジン。Delphi言語に基づき、他のPascal言語（FreePascal、Prismなど）から借りました拡張機能を備え、自らのPascal言語拡張も導入しています。

* [Delphi-JavaScript](https://code.google.com/p/delphi-javascript). `[Delphi]` デルフィー向けのMozillaのSpidermonkeyに基づくJavaScriptエンジン。// *Spidermonkey DLLが必要*

* [Blaise](http://sourceforge.net/projects/blaise). `[Delphi]` 開源のオブジェクト指向スクリプト言語。機能：オブジェクト指向、Unicode対応、オプション型（動的または静的型）、豊富な型、高レベル数学サポート（例：複素数、有理数、マトリクス）、仮想マシンアーキテクチャ、コルーチン、Object Pascal、Python、Adaに影響を受けた親しみやすい文法。

* [SpiderMonkey](https://github.com/synopse/mORMot/blob/master/SynSM.pas). `[Delphi]` `[FPC]` Mozilla JavaScriptエンジンへのバインディング。JITおよびマルチスレッドをサポートし、Delphiのバリエント経由で簡単なオブジェクトアクセスを可能にする。// *Spidermonkey DLLが必要*

* [BESEN](https://github.com/BeRo1985/besen). `[Delphi]` `[FPC]` オブジェクトパascalによるECMAScript5版の完全実装。Delphi >=7およびFree Pascal >=2.5.1（おそらく2.4.1も）でコンパイル可能。

* [Python for Delphi (P4D)](https://github.com/pyscripter/python4delphi). `[Delphi]` `[FPC]` PythonのdllをDelphiおよびLazarus（FPC）にラップした無料コンポーネントのセット。Pythonスクリプトの実行、新しいPythonモジュールおよび型の作成を容易にし、Python拡張をdllとして作成できるなど、さまざまな機能を提供します。

* [CrystalLUA](https://github.com/d-mozulyov/CrystalLUA). `[Delphi]` Luaバインディング（デルフィー6-2007）。// *LUA DLLが必要*

* [lua4delphi](https://github.com/danieleteti/lua4delphi). `[Delphi]` Lua5.1言語向けのデルフィーバインディング。// *LUA DLLが必要*

* [chakracore-delphi](https://github.com/tondrej/chakracore-delphi). `[Delphi]` `[FPC]` MicrosoftのChakraCore JavaScriptエンジンライブラリ向けのDelphiおよびFree Pascalのバインディングとクラス。

* [VerySimple.Lua](https://github.com/Dennis1000/verysimplelua). `[Delphi]` デルフィーXE5-D10.1向けのLuaワッパー。デルフィーとLua間の自動OOPコールバック関数を作成。// *LUA DLLが必要*

* [QuickJS-Engine](https://github.com/Coldzer0/QuickJS-Pascal). `[Delphi]` `[FPC]` ベルードの[QuickJS](https://bellard.org/quickjs)JavaScriptエンジン向けのデルフィーおよびFree Pascalバインディング。

* [Thorium](https://github.com/horazont/thorium). `[Delphi]` `[FPC]` FreePascalで記述された強力な埋め込みスクリプト言語。プラグイン可能なコンパイラと型システムを備え、RTTIを用いてホストクラスの簡単かつ高速なインポートを提供します。また、ホストメソッドや関数を呼び出すためにラッパー関数を必要とせず、開発者（あなた）がそれらを書く必要を省くことができます。

* [JvInterpreter (part of Project JEDI VCL)](https://github.com/project-jedi/jvcl). `[Delphi]` Pascalスクリプトインタプリタ `[FPC]`


## 機械学習 <a id="machine-learning"></a> ##

*Machine learning and neural networks*

* [noe](https://github.com/ariaghora/noe). `[FPC]` 純粋なObject Pascalで構築されたニューラルネットワークのフレームワーク。

* [Keras4Delphi](https://github.com/Pigrecos/Keras4Delphi). `[Delphi]` 高レベルのニューラルネットワークAPI。Pascalで記述され、Pythonバインディングを備えています。

* [Marvin.IA](https://github.com/marvinbraga/Marvin.IA). `[Delphi]` マシンラーニング用のオブジェクト指向Pascalのプリミティブ（インターフェースおよびクラスのみ）のコレクション。

* [CAI Neural API](https://github.com/joaopauloschuler/neural-api). `[FPC]` AVX、AVX2、AVX512命令セットおよびAMD、Intel、NVIDIAを含むOpenCL対応デバイス向けに最適化されたPascalベースのディープラーニングニューラルネットワークAPI。WindowsおよびLinuxでテスト済み。

* [TensorFlow.Delphi](https://github.com/Pigrecos/TensorFlow.Delphi). `[Delphi]` [TensorFlow](https://tensorflow.org) デルフィー向けのTensorFlow APIの完全実装を目的としたライブラリバインディング。これにより、パシカル開発者が機械学習モデルの開発、訓練、デプロイを行うことができる。

* [Ascension](https://github.com/inversed-ru/Ascension). `[Delphi]` `[FPC]` グローバル最適化フレームワークの開発を目的とした研究プログラム。その核心は、多くの最適化問題に適用可能な知能アルゴリズムであるメタヒューリスティクスである。

* [sherpa-onnx](https://github.com/k2-fsa/sherpa-onnx). `[Delphi]` `[FPC]` インターネット接続なしで、次世代Kaldiとonnxruntimeを使用した話す文字変換、文字から話す変換、話者分離、話音強化、ソース分離、VADを実現。エムベディッドシステム、Android、iOS、HarmonyOS、Raspberry Pi、RISC-V、RK NPU、Ascend NPU、x86_64サーバー、ウェブソケットサーバー／クライアントをサポート。12のプログラミング言語をサポート


## 非ビジュアルクラス／ユーティリティ <a id="non-visual-classesutils"></a> ##


## 圧縮 <a id="compression"></a>

* [FWZip](https://github.com/AlexanderBagel/FWZip). `[Delphi]` ZIPアーカイブにアクセスするためのクラス。StoreおよびDeflateメソッドをサポート。ZIP64、DataDescriptor、PKWARE暗号化、NTFS属性、ファイル名にUTF8をサポート。// *標準のZLIB.objを使用し、バイナリに組み込まれる。コメントおよび説明はロシア語。*

* [Abbrevia](http://sourceforge.net/p/tpabbrevia) ([Newest](https://github.com/TurboPack/Abbrevia) および最新コンパイラバージョン向けのメンテナンスバージョンのみ)。`[Delphi]` DelphiおよびC++Builder向けの高度なデータ圧縮ツールキット。PKZIP、Microsoft CAB、tar、gzip、およびbzip2アーカイブをサポートし、自.extracting実行ファイルを作成可能です。WindowsではLZMA、Bzip2、WavPack SDKおよびPPMdのデコンパressのためのDelphi用ラッパーを提供します。Abbreviaには、アーカイブの表示および操作を簡易化するための複数のビジュアルコントロールが含まれており、treeviewおよびlistviewコンポーネントが含まれます。特徴：すべてのアーカイブ形式でユニコードファイル名をサポート；.zipxおよび従来の(PKZIP v1)zipファイルのほとんどをデコンパress；2GBを超えるアーカイブ向けのZIP64サポート；スパンおよび分割されたzipアーカイブ；プラットフォームを越えて動作（Windows、OS X、Linux）；DLLは不要；COMコンポーネントを含む；詳細なドキュメンテーション // *2番目のリンクは最新コンパイラバージョン向けにアダプテッドされたバージョンへのリンクです。*

* [SynLZ SynLZO SynZip PasZip](https://github.com/synopse/mORMot). `[Delphi]` `[FPC]` ZIP/LZ77の圧縮・展開、LZOおよびSynLZアルゴリズムを備えた複数の高速圧縮ユニット。パascalおよび最適化されたアセンブラーで実装。

* [Delphi zlib](http://www.base2ti.com/?id=delphi.zlib). `[Delphi]` ボランドが元に使用していたzlib.objのラッパー。デルフィーXE3までサポート。

* [DIUcl](http://www.yunqa.de/delphi/products/ucl/index)UCLは、圧縮率と処理速度がdeflate/zipおよびbzip2と同等の、損失なし圧縮ライブラリです。非常に高速で小さく（200バイトのみ！）のASMによる展開プログラムを備えています。人気のUCL圧縮ライブラリのデルフィー版であり、人気のあるおよびよく知られたUPX Ultimate Packer for eXecutablesにも使用されています。 `[Delphi]`


## 暗号化 <a id="encryption"></a>

* [Delphi Encryption Compendium (DEC)](https://github.com/MHumm/DelphiEncryptionCompendium)DelphiおよびC++Builder用の暗号ライブラリ。対称暗号関数：Blowfish、Twofish、IDEA、Cast128、Cast256、Mars、RC2、RC4、RC5、RC6、Rijndael / AES、Square、SCOP、Sapphire、1DES、2DES、3DES、2DDES、3DDES、3TDES、3Way、Gost、Misty、NewDES、Q128、SAFER、Shark、Skipjack、TEA、TEAN；ブロック暗号の動作モード：CTSx、CBCx、CFB8、CFBx、OFB8、OFBx、CFSx、ECBx、GCM；ハッシュ関数：MD2、MD4、MD5、RipeMD128、RipeMD160、R-128、RipeMD256、RipeMD320、SHA、SHA1、SHA224、SHA256、SHA384、SHA512、SHA3-224、SHA3-256、SHA3-384、SHA3-512、Shake128、Shake256、Haval128、Haval160、Haval192、Haval224、Haval256、Tiger、Panama、Whirlpool、Whirlpool1、WhirlpoolT、Square、Snefru128、Snefru256、Sapphire `[Delphi]` `[FPC]`

* [LockBox](http://sourceforge.net/projects/tplockbox) ([Newest](https://github.com/TurboPack/LockBox3) および最新コンパイラバージョン向けに維持されているバージョンのみ)。 `[Delphi]` 暗号用Delphiライブラリ。Delphi XE6をサポートし、AES、DES、3DES、Blowfish、Twofish、SHA2（新しいSHA-512/224およびSHA-512/256を含む）、MD5、各種暗号利用モード、RSA署名・検証、OpenSSL連携を提供します。
// *代替バージョンについては[こちら](https://github.com/jarto/lockbox2)も参照してください。*

* [SynCrypto](https://github.com/synopse/mORMot/blob/master/SynCrypto.pas). `[Delphi]` `[FPC]` 高速暗号処理ルーチン（ハッシュおよび暗号化）を実装。AES、XOR、RC4、ADLER32、MD5、SHA1、SHA256アルゴリズムをサポート。速度最適化（チューナーされたアセンブリおよびVIA PADLOCKオプションサポート）。

* [TForge](https://github.com/sergworks/tforge) (Seems abandoned, [Newer fork](https://github.com/ElminsterAU/tforge)). 暗号化に関するPascalライブラリ、コンポーネント、ツール、または資料です。 コード: `[Delphi]`、`[FPC]`。
// *暗号化に関する補足機能、互換性、保守状況の説明です。 コード: `porting`。*

* [Spring4D](#general-libraries). CRC、DES、MD5、SHA

* [Fundamentals Code Library](#general-libraries)ハッシュ：XOR、CRC、Adler、MD5、SHA、セキュアキーMD5/SHAなど；暗号：AES、DES、FUNE、RC2/4、RSAなど

* [Alcinoe](#general-libraries). AES、Blowfish、MD5、SHA、安全なキー付きMD5/SHA

* [DCPcrypt (fork #1)](https://sourceforge.net/projects/dcpcrypt), [DCPcrypt (fork #2)](https://github.com/evpobr/DcpCrypt2). 暗号化に関するPascalライブラリ、コンポーネント、ツール、または資料です。 コード: `[Delphi]`。

* [bcrypt](https://github.com/viniciussanchez/bcrypt). `[Delphi]` パスワードのハッシュ処理を助けるライブラリ

* [MurMur-Delphi](https://github.com/thibmo/murmur-delphi)純パascalで実装されたMurMur1/2/3の高速シードハッシュアルゴリズム `[Delphi]`

* [HashLib4Pascal](https://github.com/Xor-el/HashLib4Pascal)`[Delphi]` `[FPC]` MIT ライセンスに基づくオブジェクトパシカルハッシュライブラリ。データのハッシュおよびチェックサムを計算するための使いやすいインターフェースを提供し、状態ベース（インクリメンタル）ハッシュにも対応。CRC、アダル、マーモア、ジェンキンス、MD5、SHA、ブレーキ、その他多数をサポート。

* [SimpleBaseLib4Pascal](https://github.com/Xor-el/SimpleBaseLib4Pascal)`[Delphi]` `[FPC]` デルフィ／フリーPascalコンパイラ向けのシンプルなベースエンコーディングパッケージ。現在、Base16、Base32（さまざまなバリエーション）、Base58（さまざまなバリエーション）、Base64（さまざまなバリエーション）、Base85（さまざまなバリエーション）などのさまざまなベースのエンコードおよびデコードをサポート。

* [CryptoLib4Pascal](https://github.com/Xor-el/CryptoLib4Pascal)Object Pascalの暗号ライブラリ。MITライセンスで公開。暗号方式：AES（128、192、256ビット）、Rijndael、Blowfish、Speck、ChaCha、(X)Salsa20、DSA、(DET)ECDSA（サポートされる曲線：NIST、X9.62、SEC2、Brainpool）、ECNR、ECSchnorr、EdDSA（Ed25519、Ed2-519Blake2B） `[Delphi]` `[FPC]`

* [Pascal wrapper for RHash](https://github.com/jackdp/LibRHash4P)RHashは、CRC32、CRC32C、MD4、MD5、SHA1、SHA256、SHA512、SHA3、AICH、ED2K、DC++ TTH、BitTorrent BTIH、Tiger、GOST R 34.11-94、GOST R 34.11-2012、RIPEMD-160、HAS-160、EDON-R、およびWhirlpoolなどのさまざまなチェックサムおよびハッシュ値を計算するためのコマンドラインアプリケーションです。RHashはC言語で書かれており、非常に高速です。LibRHashはRHashを操作するライブラリであり、別々のDLLまたはSOライブラリファイルにコンパイルできます。 `[Delphi]` `[FPC]`

## XML／JSON／YAML／HTML <a id="xmljsonyamlhtml"></a><a id="xmljsonyaml"></a>

* [dataset-serialize](https://github.com/viniciussanchez/dataset-serialize)`[Delphi]` `[FPC]` データセットコンポーネント向けのJSONシリアライザ。JSONとデータセットの相互変換、データセットフィールド構造のJSON形式でのエクスポートおよびロードを可能にする。VCLプロジェクト、FMX、uniGUI（フレームワーク）と互換。

* [OmniXML](https://github.com/mremec/omnixml)Delphiで書かれたXMLパーサー。Document Object Model (DOM) レベル1仕様の完全なサポート；拡張マークアップ言語 (XML) 1.0 (第2版) 仕様のサポート；異なるコードページ（主に8ビットコードページ、UTF-8、UTF-16）の内蔵サポート；MS XMLパーサーとの互換性；大きなかつ構造の複雑なドキュメントでも高速なパース；XMLドキュメントの処理を容易にするヘルパー関数を備えている；簡易なXPathサポートを提供している。 `[Delphi]`

* [SAX for Pascal](http://sourceforge.net/projects/saxforpascal)Pascal/DelphiでSimple API for XML Parsingを実装するための設計。// コールバックベースのXMLパーサーで、大きなXMLストリームの処理に有用。2004年以降は廃止されているが、ほぼ唯一のSAX実装である。 `[Delphi]` `[FPC]`

* [KDS XML](http://sourceforge.net/projects/kdsxml)`[Delphi]` オブジェクトパシカル／デルフィで書かれたストリーム解析、検証、生成用のクラスライブラリ。Win32（デルフィ）およびLinux（キリックス）で動作。一部はSAX for Pascalインターフェース仕様に依存。// *活動が見られず、バグがあると報告されている。*

* [XML Partner](http://sourceforge.net/projects/tpxmlpartner). `[Delphi]` Borland Delphi、C++Builder、KylixプロジェクトへXML機能を加える、ネイティブで使いやすいVCL／CLXコンポーネント。XML文書の作成、変更、解析を簡素化します。
// *開発は停止しているようです。より新しい可能性がある版は[こちら](http://www.songbeamer.com/delphi)を参照してください。*

* [Open XML](http://www.philo.de/xml/downloads.shtml)`[Delphi]` 多様なメソッド、コンポーネント、基礎クラスを提供。Win32／Kylixおよび.NET開発に使用可能。

* [SuperObject](https://github.com/hgourvest/superobject)`[Delphi]` `[FPC]` JSONデータフォーマット向けのパーサ／ライタ。デルフィおよびフリーPascal（win32、win64、linux32、linux64、macOS Intel）で動作。XMLの読み書きもサポート。

* [Libxml2 for pascal](https://sourceforge.net/projects/libxml2-pas)`[Delphi]` `[FPC]` ダニエル・ヴェイラーの有名XMLAPIにアクセスするパシカルユニット。少なくともキリックスおよびデルフィで使用可能だが、フリーPascalなどの他のパシカルコンパイラでも使用できる可能性がある。

* [NativeXml](https://code.google.com/p/simdesign)`[Delphi]` このコンポーネントには、小型のオブジェクトパシカル（デルフィ）XML実装が含まれており、XMLドキュメントの読み書きが可能。基本的に1つのユニットのみが必要で、"uses"句に追加するだけでよい。ファイル、ストリーム、文字列からXMLドキュメントを読み取り、XMLドキュメントを作成・保存することもできる。読み込みルーチンは、進行状況をリアルタイムで表示できるイベントを生成する。

* [Delphi-XmlLite](https://github.com/the-Arioch/Delphi-XmlLite)`[Delphi]` マイクロソフトXmlLiteのヘッダー翻訳。XmlLiteは、ストリームベースで前向きに解析・生成を行う.NET XmlReader+WriterのネイティブC++実装。XmlLite.dllが必要。すべての新しいWindowsバージョンおよび古いバージョンのサービスパックに含まれる。XmlReaderのプルベースインターフェースは、SAXのイベントベースインターフェースよりも使いやすい。// *開発が停止しており、一部のバグがあると報告されている。*

* [Chimera](https://bitbucket.org/sivv/chimera)`[Delphi]` デルフィXE2向けオープンソース（MITライセンス）ライブラリ。高速かつプラットフォームを越えたJSON生成／解析（シリアライザ／デシリアライザ）を、使いにくいライセンスではない形で提供。

* [SynCommons](https://github.com/synopse/mORMot/blob/master/SynCommons.pas)高速JSONライブラリ。storageおよびアクセスには カスタムバリエント型を使用。 `[Delphi]` `[FPC]` `TDocVariant`

* [SynCrossPlatformJSON](https://github.com/synopse/mORMot/blob/master/CrossPlatform/SynCrossPlatformJSON.pas)高速かつプラットフォームを問わず動作するJSONライブラリ。storageおよびアクセスには カスタムバリエーション型を使用。 `[Delphi]` `[FPC]` `TJSONVariant`

* [Json Data Objects](https://github.com/ahausladen/JsonDataObjects)このDelphiユニットは、Delphi 2009-10SeattleおよびWin32、Win64、ARM Androidプラットフォームに対応するJSONパーサーを含んでいます（MacOSおよびiOSでは動作する可能性があります）。 `[Delphi]`

* [TinyJSON](http://sourceforge.net/projects/tiny-json) ([mirror at GH](https://github.com/tmcdos/tiny-json)). `[Delphi]` ボールアンと整数と浮動小数点数とワイド文字列の値を持つアソシエイティブ配列用の小型でシンプルなライブラリです。JSONテキストへのインポート（エクスポート）をサポートしています。誤り検出が徹底されています。FunHash（ソコロフ・ユーラ）、HatTrie（ダニエル・C・ジョーンズ）、FastInt64およびFastMove（FastCodeプロジェクト）を使用しています。

* [JSON delphi library](http://sourceforge.net/projects/lkjson)`[Delphi]` このデルフィライブラリはJSONデータフォーマットおよびオブジェクト構造を実装。軽量かつ高速。

* [dwsJSON](https://bitbucket.org/egrange/dwscript/src/b9f99d4b8187defac3f3713e2ae0f7b83b63d516/Source/dwsJSON.pas?at=master)`[Delphi]` `[FPC]` dwsJSONはJSONパーサ／作成をサポートするユニット。DWScriptの一部だが、比較的独立しており、Delphi（またはFPC）プロジェクトに追加してもDWScript全体をインストールする必要がないため、必要な場所で使用可能。

* [Fundamentals Code Library](#general-libraries)JSON、XML

* [Alcinoe](#general-libraries)XML/JSON パーサ

* [delphi-yaml](https://github.com/ashumkin/delphi-yaml)libyamlのYAMLパーサーおよびエミッター用のC言語実装によるDelphi 7互換バインディング。4層のバインディングが提案されている。 `[Delphi]`

* [GrijjyFoundation](#general-libraries)JSON/BSON

* [VerySimpleXML](https://github.com/Dennis1000/verysimplexml)Delphi 2010 - 10.2.2 Tokyo向け軽量で、1ユニット、マルチプラットフォーム対応のXML読み書きライブラリ `[Delphi]`

* [XSuperObject](https://github.com/onryldz/x-superobject)`[Delphi]` デルフィ・クロスプラットフォーム・ラピッド・JSON

* [Internet Tools](https://github.com/benibela/internettools)`[Delphi]` `[FPC]` パッケージは、XPath 2.0、XQuery 1.0 および XPath/XQuery 3.0 の標準適合インタープリタを提供し、JSONiq、パターンマッチング、CSSおよびHTMLなどに加え、Windows/Linux/macOS/AndroidでのHTTP/Sリクエストを実行する関数、XSLTにインスパイアされたウェブスクレイピング言語、および自動更新クラスを含む。

* [Delphi-JsonToDelphiClass](https://github.com/PKGeorgiev/Delphi-JsonToDelphiClass) ([Newer fork](https://github.com/JensBorrisholt/Delphi-JsonToDelphiClass). `[Delphi]` JSON文字列に基づいてDelphiクラスを生成（JSONからDelphiクラス生成ツール／JSONデータバインディングツール）。また、GitHubとの相互作用用のユニットも含まれる。

* [XML Parser](http://www.destructor.de/xmlparser)`[Delphi]` `[FPC]` デルフィおよびフリーPascal向けの軽量オブジェクトパシカルXMLパーサ。構文チェック、形式チェックおよび／または検証を省き、進行型スキャン技術を採用することで、非常に高速なパーサとなっている。

* [HTML parser](https://github.com/ying32/htmlparser)`[Delphi]` HTMLパーサ。Windows、macOS、iOS、Androidプラットフォームに対応。コメントは中国語

* [Neslib](https://github.com/neslib/Neslib.Xml)`[Delphi]` デルフィ向けの超軽量かつマルチプラットフォームXMLライブラリ。

* [DJSON](https://github.com/mauriziodm/DJSON)`[Delphi]` デルフィJSONオブジェクトマッパー

* [fast-html-parser](https://github.com/z505/fast-html-parser). `[Delphi]` `[FPC]` Fast HTML Parser

* [THTMLWriter](https://github.com/NickHodges/delphihtmlwriter). `[Delphi]` HTMLおよびHTMLドキュメントを作成できるクラスライブラリ。フロントインターフェースを用いてHTMLテキストの作成を簡単で自然にできる。

* [Neon](https://github.com/paolo-rossi/delphi-neon). `[Delphi]` Delphi用のシリアライズライブラリ。オブジェクトやその他の値をJSONに変換（両方向）できる。シンプルなDelphi型だけでなく、複雑なクラスやレコードもサポート。NeonはRESTを想定して設計されており、アプリケーション間で「メタデータ」や追加フィールドのない純粋なデータを交換できる。

* [YAML/JSON ParserTools](https://github.com/biot2/Yaml.Json.Parser). `[Delphi]` YAMLおよびJSONのパーサー、シリアライザー、デシリアライザー。YAMLとJSONの相互変換ツールを含み、DelphiおよびLazarus向けに純粋なObject Pascalソースコードを提供。 `[FPC]`

* [DynamicDataObjects](https://github.com/SeanSolberg/DynamicDataObjects). `[Delphi]` 構造化データをモデル化し、CBOR、JSON、MessagePack、ION、UBJSON、BSON、Smile、DataObj、CSV、ICS、BinaryJDataなど、さまざまなデータシリアライゼーションフォーマットにシリアライズ・デシリアライズできるクラスライブラリ。

## 言語機能 <a id="language"></a>

*Tools for Pascal and other languages*

* [Next Delphi Yacc & Lex](https://github.com/RomanYankovsky/ndyacclex). `[Delphi]` Delphi用のパーサー生成ツールセット。

* [Abstract Syntax Tree Builder](https://github.com/RomanYankovsky/DelphiAST). `[Delphi]` DelphiASTでは、実際のDelphiコードを抽象構文木（AST）に変換できる。1ユニットずつ、シンボルテーブルなしで実現できる。

* [Castalia-Delphi-Parser](https://github.com/jacobthurman/Castalia-Delphi-Parser). `[Delphi]` これらのファイルは、Delphiと呼ばれるObject Pascalの方言向けに手書きで作成された高速パーサーを構成している。元の開発は1990年代後半のMartin Waldenburgによって行われ、2003年以前にプロジェクトが中断された。私はそのコードを発見し、それから開発を開始した。私のプロジェクト「Castalia」との互換性を維持するために、必要に応じて更新を続けている。

* [CrossPascal](https://github.com/BeRo1985/crosspascal). `[Delphi]` Delphi 7と互換性のあるクロスプラットフォームソースからソースコンパイラ（XE3の新しいユニコード文字列型を含むが、ansistringはまだデフォルトの文字列型としてDelphi 7との互換性を維持）を提供し、中間Cコードを生成する。// *非常に興味深いプロジェクトだが、現在は中断されている*

* [pas2js](https://gitlab.com/freepascal.org/fpc/pas2js), [docs](http://wiki.freepascal.org/pas2js). 言語機能に関するPascalライブラリ、コンポーネント、ツール、または資料です。 コード: `[Delphi]`、`[FPC]`。 値: 5、7。


## メモリーマネージャー <a id="memory-managers"></a>

*Libraries that implement dynamic memory allocation*

* [FastMM](https://github.com/pleriche/FastMM4). `[Delphi]` Embarcadero Delphi Win32およびWin64アプリケーション向けの高速なメモリ管理器で、メモリフラグメント化に起因しないものであり、外部.DLLファイルを使わずに共有メモリをサポート。// *2006年から標準のメモリ管理器として使用されており、簡易版を使用。強力なメモリリーク／破壊検出ツールを提供*

* [ScaleMM](https://github.com/andremussche/scalemm). `[Delphi]` Delphi向けの高速スケーリングメモリ管理器

* [BrainMM](https://github.com/d-mozulyov/BrainMM). `[Delphi]` Delphi用の極めて高速なメモリマネージャー。// *高速にアライメントされた操作を行うための高度なメモリ割り当て関数。*

* [FastMM4-AVX](https://github.com/maximmasiutin/FastMM4-AVX). `[Delphi]` `[FPC]` AVXサポートおよびマルチスレッド強化を備えたFastMM4のフォーク（より高速なロックを実現）

* [FastMM5](https://github.com/pleriche/FastMM5). `[Delphi]` Embarcadero Delphiアプリケーション向けの高速な代替メモリ管理器で、複数スレッドおよびCPUコア間でスケーリングが良好であり、メモリフラグメント化に起因せず、外部.DLLファイルを使わずに共有メモリをサポート。バージョン5はFastMMの完全なリライトである。

* [Delphi64RTL](https://github.com/RDP1974/Delphi64RTL). `[Delphi]` Intel Integrated Performance PrimitivesおよびIntel Threading Building Blocksのロイヤリティフリーパッケージから導入されたObject Pascalラッパー。ロックフリーかつスケーラブルなアロケータ、SIMD対応のRTLサブセットルーチン（メモリ埋め込み、コピー、比較）および加速されたzlib圧縮を含む。// *Intel DLLを使用して、高速な低レベルメモリ操作を実現*


## システム <a id="system"></a>

*Low-level helper stuff: memory, threading etc*

* [OmniThreadLibrary](https://github.com/gabr42/OmniThreadLibrary). `[Delphi]` Delphi向けの使いやすいスレッドライブラリ。// *アプリケーション内の非同期プロセスの簡単な統合*

* [Delphi Detours Library](https://github.com/mahdisafsafi/delphi-detours-library). `[Delphi]` `[FPC]` Delphi関数やオブジェクトメソッド、Windows API関数にホックを設定できるライブラリ。ホックの挿入・削除を簡単に行える。// *x64対応、元の関数呼び出し、複数ホック、COM/インターフェース/win32api、オブジェクトメソッドホック、完全にスレッドセーフ、Delphi 7/2005-2010/XE-XE7およびLazarus/FPC、64ビットアドレス対応*

* [MemoryModule](https://github.com/Fr0sT-Brutal/Delphi_MemoryModule). `[Delphi]` `[FPC]` MemoryModuleエンジンにより、すべての必要なDLLをバイナリ内に格納し、スタンドアローンのバイナリを維持できる。追加のホックユニットにより、MMエンジンの透明な使用が可能になり、MM/WinAPIのロード切り替えや、MMに無関心な第三者の動的ロードDLLインターフェースの有効化が可能になる（Interbase ExpressコンポーネントおよびFirebirdクライアントライブラリでテスト済）。MemoryModuleはJoachim BauchのC MemoryModuleのPascal版である。

* [DirectoryWatcher](https://github.com/Wosi/DirectoryWatcher). `[Delphi]` Windows／Linux／Mac OSを含むさまざまなプラットフォームでのディレクトリ変更を監視できる。

* [ezthreads](https://github.com/mr-highball/ezthreads). `[FPC]` 使いやすいスレッドライブラリ

* [AsyncCalls](https://github.com/ahausladen/AsyncCalls). `[Delphi]` 非同期関数呼び出しフレームワーク

* [Storage Access Framework SAF](https://github.com/emozgun/delphi-android-SAF). `[Delphi]` Androidのスコープストレージ：ストレージアクセスフレームワーク（SAF）API


## テンプレート <a id="template"></a>

*Engines to generate text output based on templates*

* [SynMustache](https://github.com/synopse/dmustache). `[Delphi]` `[FPC]` Mustacheテンプレート言語のDelphi実装。Delphi 6からDelphi 10 Seattle（およびFPC/Lazarusコンパイル）まで対応。

* [Delphi Template Engine](http://sourceforge.net/projects/delphi-templeng). `[Delphi]` Delphi（主にDelphi 7）アプリケーション内でライブラリとして使用できるテンプレートエンジン。開発者がソフトウェアにテンプレートを適用する際に、実装を気にしなくてもよいように設計されている。

* [MustaPAS](https://github.com/leledumbo/mustapas). `[Delphi]` `[FPC]` 簡単な手続き型PascalによるMustache実装。

* [Sempare Template Engine](https://github.com/sempare/sempare-delphi-template-engine). `[Delphi]` テンプレートエンジンは、テキスト操作の柔軟性を提供する。メール、HTML、ソースコード、XML、設定ファイルなどに使用可能。非常に使いやすく、柔軟で拡張性があり、テンプレートは読みやすく、維持しやすい。条件分岐、ループ、カスタム関数、RTTIによるデータ参照をサポート。XE4、XE8以降

* [DVD Chief Template Engine](https://github.com/Fr0sT-Brutal/TemplateEngine). `[Delphi]` `[FPC]` [DVD Chief](http://dvdchief.com/delphi)によって開発されたPHP SmartyテンプレートエンジンのDelphi版の中断された実装をフォークした。

* [liquid-delphi](https://github.com/arimateia/liquid-delphi). `[Delphi]` 人気のある[Ruby Liquid templating language](https://shopify.github.io/liquid)およびdotLiquidの実装のDelphi版。これは独立したプロジェクトで、元のテンプレート構文を維持しつつ、可能な限りDelphiのコーディング規則を使用することを目的としている。

* [Simple Template Engine for Free Pascal](https://github.com/sash-rc/ste). `[FPC]` オブジェクト／フリーPascal（おそらくDelphiと互換）でタグ／変数を含むテキスト（HTML、XML、または任意のマーカー）を生成する高速エンジン。IF/ELSEブロック。FORブロック（データセットの繰り返し）。タグごとのコールバック。ネストされたブロック。

## ログ <a id="logging"></a>

* [Log4d](https://github.com/landrix/Log4d-for-Delphi). `[Delphi]` Delphi向けのログシステムの実装。Log4jに基づく。 `[FPC]`

* [TraceTool](http://tracetool.sourceforge.net/). `[Delphi]` C#、C++、Delphi、ActiveXおよびJava向けのトレースフレームワークとトレースビュー。

* [LoggerPro](https://github.com/danieleteti/loggerpro). `[Delphi]` Delphi向けの現代的かつプラグイン可能なログフレームワーク。

* [SynLog](https://github.com/synopse/mORMot/blob/master/SynLog.pas). `[Delphi]` Synopseプロジェクトで使用されているログ関数。 `[FPC]`

* [slf4p](https://github.com/michaelJustin/slf4p). `[Delphi]` LazLogger、Log4D、その他ログフレームワークとの互換性を備えたシンプルなログファサード。 `[FPC]`

* [GrijjyCloudLogger](https://github.com/grijjy/GrijjyCloudLogger). `[Delphi]` インターネットまたはローカルネットワーク経由で、Windows、Linux、iOS、Android、macOSデバイスからログメッセージを送信できるリモートログツール。メッセージに任意のデータを添付するだけでなく、カスタムライブウォッチ、オブジェクトのリモートライブビュー、ライブメモリ使用量の追跡、オブジェクト割り当て、成長漏れなど、多数の機能を備えている。

* [QuickLogger](https://github.com/exilon/QuickLogger). `[Delphi]` `[FPC]` ファイル、コンソール、メモリ、メール、REST、テレグラム、スラック、イベントログ、Redis、IDEデバッグメッセージ、イベント発生など、さまざまな場所にログを出力できるDelphi／FreePascal／.NET（Windows／Linux）ライブラリ。

* [jachLog](https://github.com/jachguate/jachLogMgr). `[Delphi]` メモリ使用量を最小限に抑え、柔軟で拡張可能かつ軽量なPascalライブラリ。複数のログ出力先をサポート。マルチスレッドアプリケーションに対応し、自身もマルチスレッド構成で、ミッションクリティカルアプリケーションにおけるログ出力によるパフォーマンス影響を最小限に抑える。

* [LogLib](https://github.com/GabrielOnDelphi/Delphi-LightSaber-LogLib)【】シンプルで効果的な視覚ログ制御／ライブラリ。開発者はコードのどこからでもログウィンドウにメッセージを送信できる。ログウィンドウは、エラーメッセージが送信されたときに自動的に表示されるように設定できる。ログの選択されたverbosityレベル（Verbosityプロパティを参照）により、低レベルのメッセージ（verbose/debugメッセージなど）が表示されるか否かが決まる。内容：非視覚ログ（TRamLog）、視覚ログ（TRichLog） `[Delphi]`

* [simple-logger](https://github.com/paweld/simple-logger). `[FPC]` FPC/Lazarus向けのシンプルかつスレッドセーフなログライブラリ。ログはファイルに保存され、ログアーカイブおよび圧縮に対応。

* [MultiLog4D](https://github.com/adrianosantostreina/MultiLog4D)【】MultiLog4Dは、Android、iOS、Windows、macOSおよびLinuxにログを送信するためのライブラリで、開発者にログ送信を容易にし、迅速に実行できるように設計されている。コードの1行だけで、対応プラットフォーム（例：Androidのadb logcat、Linuxのsyslog）上でメッセージを表示・監視できる。 `[Delphi]`

## 数学 <a id="math"></a>

* [Big Decimal Math](https://github.com/benibela/bigdecimalmath)このユニットは、任意精度のBCD浮動小数点数型を提供します。これは他の数値型と同様に使用でき、以下の機能をサポートしています：10の-2147483647乗から10の2147483547乗までの数値、小数点以下の2147483647桁の精度；標準的な算術および比較演算子；四捨五入関数（床関数、天井関数、偶数への四捨五入、…）；さらに高度な演算、たとえばべき乗と平方根 `[Delphi]`

* [TIntX](https://github.com/Xor-el/IntXLib4Pascal)IntXの任意精度整数ライブラリのPascal版。高速な、約O(N * log N)の乗算・除算アルゴリズムを実装しています。整数の基本的な算術演算（比較、ビットシフトなど）を提供し、異なる基数での数値のパースや、任意の基数への文字列変換も可能にしています。このライブラリの利点は、高速な乗算、除算および基数変換アルゴリズムです。すべての高速版アルゴリズムは、大きな整数の高速乗算をFast Hartley Transform（FHT）を使って実現しており、従来のO(N^2)ではなく、O(N * log N * log log N)の時間で実行されます。 `[Delphi]` `[FPC]`

* [DelphiBigNumberXLib](https://github.com/Xor-el/DelphiBigNumberXLib)【】Delphi向けの任意精度ライブラリで、整数および浮動小数点計算をサポート。 `[Delphi]`

* [FastMath](https://github.com/neslib/FastMath)Delphi向けの数学ライブラリで、高速性を最優先に設計されています（誤り検出の実施や精度の損失を犠牲にすることがあります）。手で最適化されたアセンブリコードを使用し、Delphi RTLが提供する同等の関数よりもはるかに高いパフォーマンスを達成します。// *浮動小数点、ベクトル、行列演算*。 `[Delphi]`

* [MPArith](http://www.wolfgang-ehrhardt.de/misc_en.html#mparith)【】多精度整数、有理数、実数、複素数の算術。 `[Delphi]`

* [AMath](http://www.wolfgang-ehrhardt.de/misc_en.html#amath) and [DAMath](http://www.wolfgang-ehrhardt.de/misc_en.html#damath). 数学に関するPascalライブラリ、コンポーネント、ツール、または資料です。 コード: `[Delphi]`。

* [ALGLIB](http://www.alglib.net/download.php)マルチプラットフォームの数値解析およびデータ処理ライブラリ。WindowsおよびPOSIX（Linuxを含む）などの複数のオペレーティングシステムに対応。ALGLIBの機能には、データ解析（分類／回帰、統計）、最適化および非線形方程式の解法、補間および線形／非線形最小二乗フィット、線形代数（直接アルゴリズム、固有値分解／特異値分解）、直接および反復線形方程式の解法、高速フーリエ変換およびその他のアルゴリズムが含まれる。// フリーエディションは、個人および学術用途に許可された一般CコアをラップしたDelphiのラッパーである。 `[Delphi]` `[FPC]`

* [CAI NEURAL API](https://github.com/joaopauloschuler/neural-api). `[FPC]` `[Delphi]` AVX・AVX2・AVX512指令セットに最適化されたクロスプラットフォームニューラルネットワークAPIおよびAMD・インテル・ニンジャのOpenCL対応デバイスを含む

* [DFF Library](http://www.delphiforfun.org/programs/library/Default.htm)大きな浮動小数点数、大きな整数、天文的な計算 `[Delphi]` `[FPC]`

* [LMath](https://sourceforge.net/projects/lmath-library)数値解析用のルーチンおよびデモプログラムを提供しており、数学関数、確率、行列、最適化、線形および非線形方程式、積分、高速フーリエ変換、乱数、曲線適合、統計、グラフィックスを含む。完全にパスカルで構成されており、外部ライブラリに依存しない。 `[FPC]`

* [mrMath](https://github.com/mikerabat/mrmath)高パフォーマンスかつマルチスレッドによる行列および線形代数ライブラリ。SSE、AVX、AVX2およびFMA向けに手動最適化されたアセンブリコードを備えている。基本分解（SVD、LU、QR、ヘッセ、コレスキー）を提供し、対称行列向けの最適化された固有値解法、PCA、CCA、非負行列分解、SSA、ウェーブレット変換、RBFスプライン、t-SNE、線形および非線形最小二乗適合などの高度なアルゴリズムをサポート。WindowsおよびLinuxを32ビットおよび64ビットプラットフォームでサポート。 `[Delphi]` `[FPC]`


## コマンドライン <a id="command-line"></a>

*Libraries for parsing command-line arguments*

* [TCommandLineReader](https://github.com/benibela/rcmdline)【】【】このユニットは、LazarusおよびDelphi向けに高度でプラットフォームに依存しないコマンドラインパーサーを提供する。許容されるオプションをチェックし、すべてのオプションをリストしたヘルプを自動的に表示し、RTLのパーサーとは異なり、WindowsおよびLinuxで同じように動作する。 `[Delphi]` `[FPC]`

* [CommandLineParser](https://github.com/VSoftTechnologies/VSoft.CommandLineParser)【】シンプルなコマンドラインオプションパーサー — DUnitXプロジェクトから派生したもの。 `[Delphi]`

* [GpCommandLineParser](https://github.com/gabr42/GpDelphiUnits/blob/master/src/GpCommandLineParser.pas)【】属性ベースのコマンドラインパーサー。 `[Delphi]`

* [JPL.CmdLineParser](https://github.com/jackdp/JPLib/blob/master/Base/JPL.CmdLineParser.pas)【】【】DelphiおよびFree Pascal向けのコマンドラインパーサー `[Delphi]` `[FPC]`

* [Nullpobug.ArgumentParser](https://github.com/tokibito/delphi-argparse)【】【】DelphiおよびFree Pascal向けのコマンドラインパーサー `[Delphi]` `[FPC]`


## その他の非ビジュアル機能 <a id="other-non-visual"></a>

* [TRegExpr](https://github.com/andgineer/TRegExpr)【】【】純粋なObject Pascalによる正規表現エンジン。 `[Delphi]` `[FPC]`

* [FLRE](https://github.com/BeRo1985/flre)【】【】FLRE（F ast L ight R egular E xpressions）は、Object Pascal（DelphiおよびFree Pascal）で実装された高速、安全かつ効率的な正規表現ライブラリであり、C/C++など他の言語からも使用可能。 `[Delphi]` `[FPC]`

* [OnGuard](http://sourceforge.net/projects/tponguard) ([Alternate](https://github.com/TurboPack/OnGuard-VCL) および最新コンパイラバージョン向けのメンテナンスバージョン) `[Delphi]` ライブラリで、Borland DelphiおよびC++Builderアプリケーションのデモ版を作成できます。時間制限、機能制限、使用回数制限、または同時ネットワークユーザー数制限のデモ版を作成可能です。// *2番目のリンクは最新コンパイラバージョン向けに適応されたバージョンを指しています。*

* [StringSimilarity](https://github.com/chaosben/theunknownones)【】いくつかのふuzzyおよび音声ベースの文字列比較アルゴリズムを用意したパッケージ。現在実装されているアルゴリズムは、DamerauLevenshtein、Koelner Phonetik、SoundEx、Metaphone、DoubleMetaphone、NGram、Dice、JaroWinkler、NeedlemanWunch、SmithWatermanGotoh、MongeElkanである。 `[Delphi]`

* [DuckDuckDelphi](https://code.google.com/p/duckduckdelphi)【】Delphiオブジェクトにシンプルなダックタイピングを追加し、多くのRTTIタスクを簡略化するためのRTTIヘルパークラスを提供。 `[Delphi]`

* [byterage](https://github.com/quartexNOR/byterage)【】ストリームの一部の制限を解消するためのObject Pascalクラスライブラリ。フレームワークは非常にシンプルで、共通の祖先クラス（TBRBuffer）のみがあり、これはバイナリデータのセグメントを割り当て、スケーリング、挿入、削除、および他の操作を行うためのストレージに依存しないメカニズムを定義している。 `[Delphi]`

* [stateless](https://github.com/SirRufo/stateless)【】Delphiコード内で状態マシンを作成するためのシンプルなライブラリ。 `[Delphi]`

* [GenericTree](https://github.com/davidberneda/GenericTree)【】Delphi向けの一般化されたツリー構造の実装。 `[Delphi]`

* [DHibernate](https://github.com/thecocce/delphi-hibernate)Delphi用HibernateおよびNHibernateに基づくオブジェクトの永続フレームワーク。// *2012年以降は廃止* `[Delphi]`

* [UniConv](https://github.com/d-mozulyov/UniConv)【】【】ユニバーサルテキスト変換ライブラリは、Unicode連合の最新規格に従ってテキストの変換、比較、変更を行うためのユニバーサルかつ簡潔なライブラリである。このライブラリの機能は、ICU、libiconv、Windows.kernelなど、主要なオペレーティングシステムの事実上の標準に非常に類似している。 `[Delphi]` `[FPC]`

* [CachedBuffers](https://github.com/d-mozulyov/CachedBuffers)【】【】順次データの読み書きタスクには、特にパフォーマンス要件が高まり、データ量が多い場合に、このライブラリは不可欠である。 `[Delphi]` `[FPC]`

* [CachedTexts](https://github.com/d-mozulyov/CachedTexts)【】【】パフォーマンスの最大化を目的とした、強力でコンパクトなクロスプラットフォームライブラリ。テキストデータのパースおよび生成に特化しており、2つの他のライブラリ（CachedBuffersおよびUniConv）に依存している。 `[Delphi]` `[FPC]`

* [ZEXMLSS](https://github.com/Avemey/zexmlss)【】【】Lazarus/Delphi向けのods、Excel XML、xlsxの読み書き用コンポーネント。 `[Delphi]` `[FPC]`

* [PasMP](https://github.com/BeRo1985/pasmp). `[Delphi]` `[FPC]` Object Pascal用の並列処理／マルチプロセスライブラリ。

* [ICU4PAS](http://www.crossgl.com/icu4pas/index.html)Object Pascal、クロスプラットフォーム、成熟したC/C++ ICUライブラリを直接ラップしたクラス Wrapper により、Unicodeサポート、ソフトウェアの国際化（i18n）およびグローバル化（g11n）を提供し、すべてのプラットフォームでアプリケーションが同じ結果をもたらします。WindowsではDelphiおよびFreePascal、LinuxではKylixおよびFreePascalで使用可能です。// *2007年以降更新されていないが、ICUインターフェースはおそらく変わっていない* `[Delphi]` `[FPC]`

* [GpDelphiUnits](https://github.com/gabr42/GpDelphiUnits)ユーティリティなDelphi単体のコレクション。さまざまなTListの派生クラス、TListに適合するもの、およびTListに類似したクラス。動的に割り当てられる、O(1)のエンキューとデキュー、スレッドセーフ、マイクロロックによるキュー。64ビットファイル関数へのインターフェース（一部機能を追加）。文字列ハッシュ、テーブル、辞書。Win32/Win64向けのラッパーおよび補助関数のコレクション。タイムゾーン関数。埋め込みファイルシステム。 `[Delphi]`

* [BaseNcodingPascal](https://github.com/Xor-el/BaseNcodingPascal). `[Delphi]` `[FPC]` FPCおよびDelphiで使用する、ベース32、ベース85、ベース128などによるバイナリデータの文字列へのエンコード用ライブラリ。

* [ByteSizeLibPascal](https://github.com/Xor-el/ByteSizeLibPascal). `[Delphi]` `[FPC]` TByteSizeは、コード内でバイトサイズを表現する際に、表現される値の曖昧さを除去するためのユーティリティ「レコード」。

* [EmailValidationPascal](https://github.com/Xor-el/EmailValidationPascal). `[Delphi]` `[FPC]` Pascal/Delphiでのメールアドレス構文検証に使えるシンプルなクラス。

* [PRNG](http://www.wolfgang-ehrhardt.de/misc_en.html#prng). `[Delphi]` 7つの高速な擬似乱数生成器。周期はPascalのrandom関数よりも長く、すべてはコンテキストレコードで実装されており、複数の独立した生成器を同時に使用できる。これらは暗号的に安全ではない。さらに、3つの暗号生成器も提供されている。

* [CSV File and String Reader](https://www.codeproject.com/Tips/783493/Delphi-CSV-File-and-String-Reader-Classes). `[Delphi]` TnvvCSVFileReaderおよびTnvvCSVStringReaderは、一方向データセットに似た軽量かつ高速なクラス。

* [HTMLBuilder](https://github.com/guitorres/htmlbuilder). `[Delphi]` Pascalコードで簡易HTMLを構築。

* [FreePascal Generics.Collections](https://github.com/maciej-izak/generics.collections). `[FPC]` FreePascalのGenerics.Collectionsライブラリ（TList、TDictionary、THashMapなど）

* [FuzzyWuzzy.pas](https://github.com/DavidMoraisFerreira/FuzzyWuzzy.pas). `[FPC]` ファンクション距離を用いて文字列シーケンス間の差分を計算する、よく知られたPythonのフュージ文字マッチングパッケージの移植。

* [GS.Core](https://github.com/VincentGsell/GS.Core)複数のプロジェクトで共有されている核心機能。// *スレッドプール、ファイル操作、Key<>Valueデータベース、JSONライブラリなど* `[Delphi]` `[FPC]`

* [PascalTZ](https://github.com/dezlov/PascalTZ). `[FPC]` Pascal Time Zoneは、さまざまな時区のローカル時とGMT/UTCの間を変換し、過去の時区規則の変更を考慮した上で実行する。

* [Charset Enigma](https://github.com/ms301/charset-enigma). `[Delphi]` Delphiの文字セット検出Community Edition

* [DelphiPatterns](https://github.com/jimmckeeth/DelphiPatterns). `[Delphi]` Delphi言語で実装された設計パターンの完全セット

* [Markdown Processor for Pascal](https://github.com/grahamegrieve/delphi-markdown). `[Delphi]` `[FPC]` これはPascal（Delphi）ライブラリで、MarkdownをHTMLに変換するもの。

* [Coroutine-based multithreading library](https://github.com/Purik/AIO). `[Delphi]` AIOはDelphiで手続き型オブジェクトプログラミング（POP）スタイルを実装。開発者はOOPとPOPの長所を組み合わせ、論理を複数の状態機械に分割し、スレッドにスケジュールし、GoLangのように通信チャネルで接続できる。

* [Rapid.Generics](https://github.com/d-mozulyov/Rapid.Generics). `[Delphi]` Delphi（XE8以降）向けの高速ジェネリクス／デフォルト等価クラス

* [TZDB](https://github.com/pavkam/tzdb). `[Delphi]` `[FPC]` Delphi／FreePascal用のIANA時区データベース

* [PascalUtils](https://github.com/isemenkov/pascalutils). `[Delphi]` `[FPC]` DelphiおよびObject Pascal用のユーティリティデータ構造ライブラリ

* [libPasC-Algorithms](https://github.com/isemenkov/libpasc-algorithms). `[Delphi]` `[FPC]` DelphiおよびObject Pascal用の一般的なデータ構造およびアルゴリズムライブラリ。Cアルゴリズムリポジトリおよびその他のソースからリライトされたもの。

* [Delphi-Hunspell](https://github.com/darianmiller/Delphi-Hunspell). `[Delphi]` デルフィー向けのシンプルなスペルチェックエンジンのラッパー [Hunspell](http://hunspell.github.io)

* [CocinAsync](https://bitbucket.org/sivv/cocinasync). `[Delphi]` Delphi向けの高性能ライブラリで、非同期およびマルチスレッドアプリケーションの開発を簡素化し、パフォーマンスを向上させる。

* [Delphi LightSaber-CoreLib](https://github.com/GodModeUser/Delphi-LightSaber-CoreLib). `[Delphi]` Jediライブラリの軽量代替品。シンプルで、クリアで、非オブフローディ、完全にコメントされたコード。外部依存なし。ファイル／フォルダ／ディスク操作、高速（バッファ付き）バイナリファイルアクセス、文字列変換、OSバージョン検出など、数百の非常に便利な関数を提供。

* [LAMW](https://github.com/jmpessoa/lazandroidmodulewizard). `[FPC]` Lazarus Android Module Wizard を使用して JNI モジュール（.so）および Android Apk を作成できる。

* [DCContainers](https://github.com/dsapolska/dccontainers). `[Delphi]` レッド・ブラック・ツリーに基づくマップとセットを備えたコンテナーライブラリ

* [DOSCommand](https://github.com/TurboPack/DOSCommand). `[Delphi]` DOSプログラム（exe、comまたはバッチファイル）を実行し、出力結果をメモやリストボックスなどに表示できるコンポーネント。また、入力の送信も可能。

* [TDiff](https://github.com/rickard67/TextDiff). `[Delphi]` `[FPC]` デルフィとフリーパスカル向けのテキスト比較コンポーネント。ファイル比較ツールでよく必要となる「最短経路」や「最も長い共通列」の計算を大幅に簡略化する。

* [GraphQL for Delphi](https://github.com/lminuti/graphql). `[Delphi]` Facebookが開発したAPI用クエリ言語GraphQLのシンプルな実装。GraphQLはAPI用のクエリ言語であり、データの型システムを定義することでクエリを実行するサーバー側ランタイムを提供する。GraphQLは特定のデータベースやストレージエンジンに縛られず、既存のコードとデータに基づいている。

* [GraphQL Constructor](https://github.com/HemulGM/GraphQL). `[Delphi]` GraphQL コンストラクタ（コンストラクタのみ）

* [ACBr (Commercial Automation Brazil)](https://sourceforge.net/projects/acbr/) ([GitHub mirror](https://github.com/ProjetoACBr/ACBr), [Organization page in GitHub](https://github.com/Projeto-ACBr-Oficial). その他の非ビジュアル機能に関するPascalライブラリ、コンポーネント、ツール、または資料です。 コード: `[Delphi]`、`[FPC]`。


## OS <a id="os"></a> ##

*Tools that help dealing with OS-specific internals*

* [GLibWMI](https://github.com/germanestevez/GLibWMI). `[Delphi]` デルフィ向けのコンポーネントライブラリで、WindowsのWMIにアクセスするクラスをVCLにまとめる。BiosInfo、PrinterInfo、DiskInfoなど。WMIクラスへのアクセス：WIN32_Bios、WIN32_Printers、WIN32_DiskDrive。

* [MemoryMap](https://github.com/AlexanderBagel/ProcessMemoryMap/tree/master/MemoryMap). `[Delphi]` 実行中のプロセスのメモリ情報を取得するためのクラスセット。

* [The Drag and Drop Component Suite](https://github.com/landrix/The-Drag-and-Drop-Component-Suite-for-Delphi). `[Delphi]` DelphiおよびC++BuilderアプリケーションにCOMベースのドラッグアンドドロップをサポートし、Windowsのクリップボードと統合できるVCLコンポーネントライブラリ。

* [TSMBIOS](https://github.com/RRUZ/tsmbios). `[Delphi]` `[FPC]` オブジェクトパascal言語（DelphiまたはFree Pascal）でシステム管理BIOS（SMBIOS）にアクセス可能です。SMBIOS（システム管理BIOS）はDMTFによって開発された標準です。SMBIOSに格納されている情報には、デバイスのメーカー名、モデル名、シリアル番号、BIOSバージョン、資産タグ、プロセッサ、ポート、およびインストールされたデバイスメモリが含まれます。

* [VersionInfo for Delphi](http://melander.dk/articles/versioninfo). `[Delphi]` Windowsの実行ファイルやDLLのバージョン情報リソースから値を読み取るのを非常に容易にできるライブラリ。オプションでクラスヘルパーを用いてTApplicationクラスにバージョン情報プロパティを追加。

* [Magenta Systems WMI and SMART Component](http://www.magsys.co.uk/delphi/magwmi.asp). `[Delphi]` WMI、SMART、SCSI パススルー関数を提供。ハードディスク情報の取得やネットワークアダプタの設定に特に有用だが、他の多くの一般用途にも適用可能。MagWMIはSQLのようなコマンドで任意のWMI情報を一般に閲覧可能にし、TCP/IP設定に関連する多くの専用関数（アダプタのIPアドレス、コンピュータ名、ドメイン／ワークグループ、BIOSおよびディスクドライブ情報の設定など）を提供。

* [madKernel](http://help.madshi.net/madKernel.htm). `[Delphi]` パッケージは、主にカーネルオブジェクトを扱う。最も重要なオブジェクトタイプはインターフェースにラップされ、すべての特定のkernel32 APIを活用。イベント、ミューテックス、スレッド、プロセス、ウィンドウ、モジュール、トレイアイコン、共有メモリバッファのインターフェースラッパーを提供。
// *非営利用途（のみ）にソースコード付きで無料（一部の [conditions](http://help.madshi.net/License.htm)を除く）。 `madCollection` インストーラーの一部としてダウンロード可能。非常に詳しいドキュメント。 `madBasic` パッケージが必要。*

* [madSecurity](http://help.madshi.net/madSecurity.htm). `[Delphi]` パッケージにより、共有フォルダやファイルセキュリティ、レジストリセキュリティなどのセキュリティオブジェクトを簡単に扱える。これにより、アカウントやACE、ACLに関する機能も提供。
// *非営利用途（のみ）にソースコード付きで無料（一部の [conditions](http://help.madshi.net/License.htm)を除く）。 `madCollection` インストーラーの一部としてダウンロード可能。非常に詳しいドキュメント。 `madBasic` パッケージが必要。*

* [madShell](http://help.madshi.net/madShell.htm). `[Delphi]` パッケージは、特別フォルダ（例："Windows"フォルダ、"Program Files"フォルダ）から始まり、シェルIDリスト、シェルオブジェクト、シェルイベントに至るまで、頻繁に必要なシェル機能を実装。その後、ショートカット／シェルリンク周りの機能、そしてディスプレイモードに関するすべての機能を提供。
// *非営利用途（のみ）にソースコード付きで無料（一部の [conditions](http://help.madshi.net/License.htm)を除く）。 `madCollection` インストーラーの一部としてダウンロード可能。非常に詳しいドキュメント。 `madBasic` パッケージが必要。*

* [WindowsAutorun](https://github.com/ms301/WindowsAutorun). `[Delphi]` Windows OSにおける自動起動の管理を支援する。

* [ActiveDirectory4Delphi](https://github.com/EdZava/VCL-ActiveDirectory4Delphi). `[Delphi]` Active Directory内のLDAPユーザーの検証および認証を行うデルフィの基本ライブラリ。

* [SVGShellExtensions](https://github.com/EtheaDev/SVGShellExtensions). `[Delphi]` SVGファイル向けのシェル拡張（プレビューパネル、サムネイルアイコン、SVGエディタ）

* [MarkdownShellExtensions](https://github.com/EtheaDev/MarkdownShellExtensions). `[Delphi]` Windowsエクスプローラー向けのMarkdownファイルシェル拡張およびMarkdownファイルエディタ（即時プレビュー）


## レポート生成 <a id="report-generating"></a> ##

* [Report Manager](http://reportman.sourceforge.net). `[Delphi]` レポートマネージャーは、レポートをプレビュー、エクスポートまたは印刷するためのアプリケーション（レポートマネージャーデザイナー）およびライブラリとユーティリティセット。ネイティブな.NETおよびデルフィ／C++Builderライブラリ、ActiveXコンポーネント、またGNU Cなど、どの言語でも使用可能な標準の動的リンクライブラリを含む。

* [FortesReport](https://github.com/fortesinformatica/fortesreport-ce). `[Delphi]` FortesReportは、デルフィ向けの強力なレポート生成パッケージである。

* [mORMotReport](https://github.com/synopse/mORMot/blob/master/SQLite3/mORMotReport.pas) ([docs](http://synopse.info/files/html/api-1.18/mORMotReport.html)). `[Delphi]` プレビュー形式とPDF出力に対応した、高速かつ効率的なコードベースのレポートコンポーネント

* [Kryvich's Delphi Reporter](https://github.com/Kryuski/kryvich-delphi-reporter)Embarcadero（CodeGear、Borland）のDelphi向けのシンプルで強力なレポートツール。カスタムテンプレートと任意のTDataSet互換データセットからの情報に基づき、TXT、RTF、HTML、XML形式のレポートを生成します。 `[Delphi]`


## 単体テスト <a id="unit-testing"></a> ##

* [DUnitX](https://github.com/VSoftTechnologies/DUnitX). `[Delphi]` 新しいテストフレームワークで、DUnit、NUnitなどのテストフレームワークからインスピレーションを得ています。Delphi 2010以降で動作するよう設計されており、 older versions of Delphi では利用できない言語/RTL機能を活用しています。

* [DUnit](http://dunit.sourceforge.net)【】ユニットテストフレームワーク。長年にわたり標準的なテストフレームワークとして使われてきたもので、Delphi IDEにこのライブラリが標準で含まれる。// XEから含まれており、XE8以降はDUnitXに置き換えられて deprecated された。現在は活動が見られない。 `[Delphi]`

* [DUnit2](http://dunit2.sourceforge.net)DUnitプロジェクトのフォークで、いくつかの新しい機能を追加しています。// *現在は活動が停止しており、以前のDUnitバージョンの一部機能が不足しています。* `[Delphi]`

* [DelphiSpec](https://github.com/RomanYankovsky/DelphiSpec)シンプルな言語で書かれた自動テストを実行するためのライブラリ。シンプルな言語で書かれており、チーム内の誰でも読めるようになります。誰でも読めるため、チーム内のコミュニケーション、協力、信頼を高めるために活用できます。 `[Delphi]`

* [Delphi-Mocks](https://github.com/VSoftTechnologies/Delphi-Mocks). `[Delphi]` Delphi XE2以降向けのシンプルなモックフレームワーク。テスト時にクラスおよびインターフェースのモックを可能にします。

* [DUnit-XML](https://github.com/VSoftTechnologies/DUnit-XML). `[Delphi]` DUnitテストがNUnitに適合するXMLを出力できるテストランナー。

* [Smoketest](https://github.com/deltics/delphi.libs/tree/master/smoketest)Microsoft Windows用のDelphi言語でテストおよびパフォーマンスベンチマークを書くためのフレームワーク。Delphi 7から2010までのすべてのバージョンでテストされています。 `[Delphi]`

* [SynTests](https://github.com/synopse/mORMot/blob/master/SynTests.pas)ユニットテスト関数に含まれるモックとスタブ `[Delphi]` `[FPC]`

* [OpenCTF](https://github.com/michaelJustin/openctf). `[Delphi]` (以前の [homepage](http://web.archive.org/web/20090418162025/https://sourceforge.net/projects/openctf/)) Embarcadero Delphi向けのテストフレームワークの拡張機能で、フォーム（またはデータモジュール）内のすべてのコンポーネントに対して自動チェックを実行します。大量のコンポーネントが繰り返しテストを通過させる必要がある大規模プロジェクトにおいて、自動品質チェックを簡単に構築できるようにします。OpenCTFはDUnitというオープンソーステストフレームワークに基づき、専門的なテストクラスとヘルパー関数でそれを拡張しています。

* [DelphiUIAutomation](https://github.com/jhc-systems/DelphiUIAutomation)MS UIAutomationライブラリをラップするDelphiクラス。DelphiUIAutomationは、Win32ベースのrich clientアプリケーションの自動化に用いられるフレームワークであり、特にDelphi XE5でテスト済み。Delphi XE5で記述されており、スクリプト言語の使用は不要。MicrosoftのUIAutomationライブラリおよびウィンドウメッセージの複雑さを隠す一貫したオブジェクト指向APIを提供する。 `[Delphi]`

* [DelphiCodeCoverageWizardPlus](https://github.com/MHumm/delphi-code-coverage-wizard-plus)バッチファイルを作成するためのGUIウィザード。設定の変更を後で簡単に行えるように、プロジェクトフォーマットを含む。コードカバレッジツール自体のバイナリを含む。 `[Delphi]`


## デバッグ／エラー処理 <a id="debugging--error-handling"></a> ##

* [Delphi LeakCheck](https://bitbucket.org/shadow_cs/delphi-leakcheck). `[Delphi]` DUnitおよびDUnit2のテストでメモリリークを検出できる無料コードライブラリ。Delphi XE-XE7でサポート。

* [FastMM](#memory-managers)メモリリーク・腐食検出機能を提供します。

* [JclDebug (part of Project JEDI)](https://github.com/project-jedi/jcl/blob/master/jcl/source/windows/JclDebug.pas)トレース、MAPファイル解析、例外報告生成、例外スタックトレース。 `[Delphi]` `[FPC]`

* [DebugEngine](https://github.com/MahdiSafsafi/DebugEngine)デバッグ関連のユーティリティのコレクション（スタックトレース、CPUレジスタのスナップショット、デバッグ情報など） `[Delphi]`

* [ObjectDebugger](https://github.com/marcocantu/ObjectDebugger). `[Delphi]` デルフィーVCLアプリケーション用の実行時オブジェクトインスペクタ.

* [Capstone4Delphi](https://github.com/Pigrecos/Capstone4Delphi)Delphi向けのバインディング `[Delphi]` [Capstone Disassembler Library](http://www.capstone-engine.org/)


## ユーティリティ <a id="utilities"></a> ##

*Free non-opensource products allowed here.*


## RAD Studio IDEプラグイン／ウィザード <a id="rad-studio-ide-pluginswizards"></a>

* [Delphi IDE theme editor / Delphi IDE Colorizer](https://github.com/rruz/delphi-ide-theme-editor)Delphi（RAD Studio）、Appmethod、LazarusおよびSmart Mobile StudioなどのオブジェクトパシカルIDEのIDEカラー強調を変更するツール。DITEはDelphi 5-7、2005-2010、XE-XE8、Appmethod 1.13-1.14、Lazarus v1.0.1.3およびSmart Mobile Studio IDE v1.1.2.17に対応しています。Delphi IDEカラー化（DIC）は、RAD Studio IDEおよびAppmethodのワークスペースの見た目と体験をカスタマイズできるプラグインです。

* [DDevExtensions](https://github.com/ahausladen/DDevExtensions)デルフィー／C++Builder IDEに新たな生産性機能を追加して拡張します。// *多くの便利なIDEの設定変更、必須です。*

* [VCL Fix Pack](https://www.idefixpack.de/blog/bugfix-units/vclfixpack-10/). RAD Studio IDEプラグイン／ウィザードに関するPascalライブラリ、コンポーネント、ツール、または資料です。
// *RAD Studio IDEプラグイン／ウィザードに関する補足機能、互換性、保守状況の説明です。 値: 6、2009。*

* [IDE Fix Pack](https://www.idefixpack.de/blog/ide-tools/ide-fix-pack/)RAD Studio IDE、Win32/Win64コンパイラおよびWin32デバッガー向けの非公式バグ修正およびパフォーマンス最適化のコレクション。IDE Fix PackはRAD Studio 2009-XE6向けのIDEプラグインで、実行時におけるIDEのバグを修正します。すべての変更はメモリ内で行われ、ディスク上のファイルは変更されません。プロジェクトのいずれも変更されず、IDE Fix Packが提供する効果は、コンパイル速度の向上にとどまります。IDEのみが修正と最適化を受けます。// RAD Studio 2007以降のすべてのバージョンに対応。長年修正されていない多くの不満なバグを削除します。素晴らしい！

* [GExperts](https://sourceforge.net/projects/gexperts)無料のツールセットで、DelphiおよびC++Builder開発者向けにIDEに複数の機能を追加して生産性を高めます。GExpertsはオープンソースソフトウェアとして開発されており、ユーザーの貢献を奨励しています。ユニコードファイル、DFMsなどに対応したグリップ検索と置換；コンポーネントの自動リネーム、テキストマクロの挿入、最近開いたファイルの開閉；プロジェクトの簡単にバックアップ可能で、カスタム追加ファイルリストをサポート；よく使うファイルのネストリストを保持して迅速にアクセス可能；プロジェクト内のユニット間の依存関係を追跡；現在のユニット内の任意のプロシージャに迅速にジャンプ可能；さらに、それ以上の機能が多数あります。

* [CnWizards](https://github.com/cnpack)Delphi／C++Builder／CodeGear RAD Studio向け無料プラグインツールセットで開発効率を向上します。

* [Delphi Package Installer (DelphiPI)](https://bitbucket.org/idursun/delphipi)DelphiIDEにコンポーネントをインストールするのに役立つツール。DelphiPIはパッケージ間の依存関係を自動的に解決し、コンパイル・インストールを行い、IDEにソースパスを追加します。

* [ResEd](https://github.com/chaosben/theunknownones)Delphi 2005、2006、2007、2009、2010およびXE向けのエキスパート。このエキスパートは、現在のプロジェクトにリンクされているリソースファイル（.res; .resx）の編集に設計されています。{$R xyz.res}の行すべての出現を自動的に検索し、それらのリソースファイルを開きまたは作成します。このエキスパートは、Delphiのメニューバーに「View」項目に登録されます。

* [Parnassus Bookmarks](https://parnassus.co/delphi-tools/bookmarks)IDEプラグインでブックマーク機能を拡張します。

* [DelphiSettingManager](https://github.com/Arvur/DelphiSettingManager)デルフィー向け複数のIDEプロファイル（XE6まで）。同じコンポーネントの複数バージョンや、異なるプロジェクトごとに異なるコンポーネントセットをインストールできる。

* [Delphinus](https://github.com/Memnarch/Delphinus)新しいパッケージマネージャーがDelphi XE以降で動作し、GitHubをバックエンドとしてパッケージを提供します。

* [TestInsight](https://bitbucket.org/sglienke/testinsight/wiki/Home)Delphi向けのユニットテストIDEプラグイン。XEから10 Seattleまでのすべてのバージョンに対応。DUnit、DUnit2、DUnitXフレームワークをサポートしています。

* [Delphi IDE Explorer](https://github.com/DGH2112/Delphi-IDE-Explorer)ウィザード／専門家／プラグインで、IDEの内部フィールド、メソッド、プロパティ、イベントをブラウズできます。 // *IDE開発者向けに特に有用*

* [Multi-RAD Studio IDE Expert Manager](https://github.com/DGH2112/Expert-Manager)アプリケーションは、RAD Studioの複数バージョンにインストールされた専門家およびパッケージを管理できます

* [OTA Interface Search](https://github.com/DGH2112/OTA-Interface-Search). アプリケーションは、Open Tools API (OTA) インターフェース、メソッド、プロパティを検索し、それらのインターフェースやメソッド/プロパティにアクセスする方法を理解するのに役立ちます。

* [AutoSave](https://github.com/DGH2112/Auto-Save). メンバーが定期的にすべての開いている変更されたIDEファイルを自動保存します。

* [Browse and Doc It](https://github.com/DGH2112/Browse-and-Doc-It). RAD Studio IDEプラグインで、コードを閲覧できるようにし、ドキュメンテーション、コーディングチェック、メトリクスのサポートを提供します。

* [Integrated Testing Helper](https://github.com/DGH2112/Integrated-Testing-Helper). DelphiおよびRAD Studio向けのプラグインで、プロジェクトのコンパイル前後でコマンドラインアプリケーションを実行できるようにし、各コンパイル/ビルド時にプロジェクトファイルをアーカイブに圧縮できるようにし、アプリケーションのバージョン情報を管理できます。

* [Project Magician](https://www.uweraabe.de/Blog/2018/05/17/keep-your-project-files-clean-with-project-magician). 高度なプロジェクトオプションの操作を行うためのウィザード。

* [Selective Debugging](http://www.uweraabe.de/Blog/2015/05/08/selective-debugging/). どのユニットに対してデバッグバージョンが使用されるかを調整できるウィザード。

* [MMX Code Explorer](https://www.mmx-delphi.de). 製品性を高める豊富な機能を備えたプラグイン。リファクタリング、クラスブラウザ、高度な編集、メトリクスなど、多数の機能を提供します。

* [FormResource](http://chapmanworld.com/2017/03/22/formresource-a-free-delphi-component-for-organizing-product-dependencies). 多様なデータをフォームリソースとして保存できるためのウィザード。

* [Delphi Library Helper](https://github.com/littleearth/delphi-library-helper) Delphi開発者がライブラリフォルダを設定する際に支援するツール。

* [Mobile Image Creator](https://github.com/littleearth/mobile-image-creator) Delphiモバイルアプリケーション（Firemonkey）用のアイコンおよびランチャーファイルの作成ツール。これは[Thomas Grubb of RiverSoftAVG](http://riversoftavg.com/blogs/index.php/2014/02/03/creating-icons-and-launchers-for-delphi-mobile-applications/)が作成したMobile Gfxのフォークです。

* [Delphi-Adb-WiFi](https://github.com/ms301/Delphi-Adb-WiFi). RAD Studio向けのプラグインで、USBを介さず、Wi-Fi経由でAndroidデバイスを起動およびデバッグできます。

* [RADSplit](https://github.com/LaKraven/RADSplit). RAD Studio（DelphiおよびC++Builder）向けのドック可能なスプリットスクリーンエディタ。

* [DzNoteEditor](https://github.com/digao-dalpiaz/DzNoteEditor). TStringsをサポートするDelphiプロパティエディタで、フォーマットされた言語とシンタックスハイライトを提供します。

* [IDE-Notifiers](https://github.com/DGH2112/DGH-IDE-Notifiers). RAD Studio IDEプラグインで、IDE内で発生する各種操作に対して通知を表示します。

* [C4D-Validate-Components](https://github.com/Code4Delphi/C4D-Validate-Components)Delphiフォームの自動検証用のユーティリティ。新プロジェクトおよび古くからの製品に非常に適しています。フォームフィールドの検証を容易にし、コードの複雑性を減らします。DBWareおよび非DBWareコンポーネントの両方に使用可能です。 `[Delphi]`


## 他IDE向けプラグイン <a id="plugins-for-other-ides"></a>

* [Delphi IDE theme editor / Delphi IDE Colorizer](#rad-studio-ide-pluginswizards)Appmethod、LazarusおよびSmart Mobile Studioに対応しています。

* [Pascal](https://github.com/alefragnani/vscode-language-pascal) and [Pascal Formatter](https://github.com/alefragnani/vscode-pascal-formatter). 他IDE向けプラグインに関するPascalライブラリ、コンポーネント、ツール、または資料です。

* [Intellij IDEA Object Pascal plugin](https://github.com/casteng/i-pascal)`[Delphi]` `[FPC]` IntelliJ IDEA向けの無料Object Pascal言語プラグイン


## 文書 <a id="documentation"></a>

* [SynProject](https://github.com/synopse/SynProject) ([docs](http://synopse.info/fossil/wiki?name=SynProject)) Delphiプロジェクトのソースコードのバージョン管理および自動ドキュメンテーションツール。

* [PasDoc](https://sourceforge.net/projects/pasdoc)`[Delphi]` ObjectPascal（FreePascalおよびDelphi）ソースコード向けのドキュメンテーションツール。ソースコード内のコメントからドキュメントを生成します。利用可能な出力形式はHTML、HtmlHelp、LaTeX、latex2rtf、simplexmlです。今後、さらに出力形式が追加される可能性があります。 `[FPC]`


## コード検査・レビュー・デバッグ <a id="code-checkreview-debug"></a>

* [GpProfiler2017](https://github.com/ase379/gpprofile2017). `[Delphi]` Delphi XE以降向けのソースコードインストルメンテーションプロファイラー。他のフォークは古いバージョンをサポートしています。

* [SamplingProfiler](https://www.delphitools.info/samplingprofiler)`[Delphi]` Delphi 5から32ビットDelphi XE4向けのパフォーマンスプロファイリングツール。最終最適化コードの高速実行中に発生するボトルネックを特定するためのツールです。

* [Delphi Code Coverage](https://github.com/DelphiCodeCoverage/DelphiCodeCoverage). `[Delphi]` Delphi向けのシンプルなコードカバレッジツールで、詳細なMAPファイルに基づいてコードカバレッジレポートを作成します。

* [Pascal Analyzer](http://www.peganza.com/products_pal.html) (無料のLite版あり) `[Delphi]` Pascal Analyzer（PAL）は、DelphiまたはBorland Pascalソースコードを解析します。大きな内部識別子テーブルを構築し、サブプログラム間の呼び出しなどの情報を収集します。解析が完了すると、詳細なレポートが生成されます。これらのレポートには、ソースコードに関する非常に重要な情報が含まれており、それらを活用することで、ソースコードの理解を深め、より品質の高いコードと信頼性の高いコードを生成することができます。

* [madExcept](http://madshi.net/madExceptShop.htm). `[Delphi]` ソフトウェア内のバグ特定を支援します。クラッシュや例外を自動的に捕捉・解析して有用な情報を収集し、利用者が完全なバグ報告を送れるようにします。メモリリーク、リソースリーク、バッファオーバーフローも検出できます。
// *非営利用途では一部の[条件](http://help.madshi.net/License.htm)のもと、ソースコードなしで無料です。`madCollection`インストーラーから`madExcept`を選んで導入でき、詳しい文書が用意されています。*

* [delphiunitsizes](https://github.com/VilleKrumlinde/delphiunitsizes). `[Delphi]` Delphi実行ファイルに含まれる各ユニットのサイズを表示するツール。Delphi実行ファイルに含まれる各ユニットのサイズを表示し、各ユニット内の各シンボル（クラス、メソッド、手続きなど）のサイズを概算で表示します。

* [MapFileStats](https://www.delphitools.info/other-tools/mapfilestats). `[Delphi]` .MAPファイルからシンプルなバイナリサイズ統計を提供するツール（Delphiのすべてのバージョン、少なくともDelphi XE5まで対応）。

* [Spider](https://github.com/yavfast/dbg-spider). `[Delphi]` Delphiアプリケーション向けのリアルタイムプロファイラー

* [AsmProfiler](https://github.com/andremussche/asmprofiler). `[Delphi]` 32ビットフルトレースプロファイラー（インストルメンテーションおよびサンプリング）で、Delphiおよび一部のアセンブリで記述されています。

* [map2pdb](https://github.com/andersmelander/map2pdb). `[Delphi]` DelphiおよびC++Builderコンパイラが生成するMAPファイルを、Microsoft PDBファイルに変換するツール。Visual StudioデバッガーやIntelのVTuneおよびAMDのμProfプロファイラーなどの、そのフォーマットをサポートするツールで使用できます。

* [ProfileViewer](https://github.com/DGH2112/ProfileViewer). `[Delphi]` Profiler.pasコードで生成されたプロファイラー情報を見るアプリケーション。

* [SonarDelphi](https://github.com/integrated-application-development/sonar-delphi). SonarQubeコード品質プラットフォーム用の静的解析ツール。 `[Delphi]`


## セットアップ <a id="setup"></a>

* [Lazy Delphi Builder](https://bitbucket.org/tdelphi/lazy-delphi-builder-downloads). セットアップに関するPascalライブラリ、コンポーネント、ツール、または資料です。
// *セットアップに関する補足機能、互換性、保守状況の説明です。*

* [Inno Setup](http://www.jrsoftware.org/isinfo.php)Windowsアプリケーション向けの無料インストーラー。1997年に初導入され、現在は多くの商用インストーラーを上回る機能と安定性を備えています。

* [WinSparkle](https://winsparkle.org) and its [Delphi wrapper](https://github.com/jkour/neSparkleComponent). セットアップに関するPascalライブラリ、コンポーネント、ツール、または資料です。

* [Silverpoint MultiInstaller](http://www.silverpointdevelopment.com/multiinstaller/index.htm). Embarcadero DelphiおよびC++Builder向けのマルチコンポーネントパッケージインストーラー。IDE上のコンポーネントインストールを容易にするために作成された。

* [Grijjy Deployment Manager](https://github.com/grijjy/GrijjyDeployMan). Delphiで書かれたiOSおよびAndroidアプリのファイルとフォルダのデプロイを簡易化するツール。3rdパーティSDKなど大量のファイルをデプロイする必要がある場合に特に有用。

* [AutoGetIt](https://github.com/corneliusdavid/AutoGetIt)`[Delphi]` GetItパッケージの選択されたパッケージを自動インストールするオープンソースツール。GetItコマンドラインツールを呼び出して実行します。Delphi 10.4、11、12で動作。ソースコードおよび事前ビルド済みの実行ファイルが提供されています。ソースコードをコンパイルするには[DosCommand](https://github.com/TurboPack/DOSCommand)が必要です。


## その他 <a id="other"></a>

* [WMI Delphi Code Creator](https://github.com/RRUZ/wmi-delphi-code-creator). WMI（Windows Management Instrumentation）のクラス、イベント、メソッドにアクセスするためのObject Pascal、Oxygene、C++、C#コードを生成できるツール。また、WMIの内容を探索およびクエリするためのツールセットも含まれる。

* [Delphi Preview Handler](https://github.com/RRUZ/delphi-preview-handler)Windows Vista、7、8向けのプレビューハンドラー。オブジェクトパシカル、C++、アセンブリコードをシンタックスハイライト付きで読み込むことができるようになります。編集画面を開かないで読むことができます。

* [Delphi Dev. Shell Tools](https://github.com/RRUZ/delphi-dev-shell-tools). Object Pascal開発者（Delphi、Free Pascal）向けのWindowsシェル拡張機能。便利なタスクを提供する。

* [Delphi.gitignore](https://github.com/github/gitignore). Delphi用の.gitignoreテンプレート。Lazarus用のテンプレートも存在する。

* [OmniPascal](http://omnipascal.com)現代的なエディタを使用して、DelphiおよびFree Pascal開発者によるコードの作成と維持を可能にするプロジェクト [Visual Studio Code](https://code.visualstudio.com)

* [Delphi Unit Tests](https://github.com/NickHodges/DelphiUnitTests). Delphiのライブラリ向けのユニットテストセット。Delphiコミュニティのメンバーは、リポジトリをフォークし、テストを追加し、プルリクエストを作成することを奨励されている。Embarcaderoの従業員は、公式Delphiビルドで実行される内部テストからテストを追加することを特に奨励されている。

* [madDisAsm](http://help.madshi.net/madDisAsm.htm). その他に関するPascalライブラリ、コンポーネント、ツール、または資料です。
// *その他に関する補足機能、互換性、保守状況の説明です。 関連参照: <http://help.madshi.net/License.htm>。 コード: `madCollection`、`madExcept`。*

* [Chet - C Header Translator for Delphi](https://github.com/neslib/Chet). Chetは、libclangを活用したDelphi向けの.hファイルから.pasファイルへの翻訳ツール。ヘッダーファイルをClangコンパイラでパースすることで、より正確な翻訳を実現し、手動調整を少なくする。

* [Boss](https://github.com/HashLoad/boss). Delphiプロジェクト向けの依存関係マネージャー。

* [C-To-Delphi](https://github.com/WouterVanNifterick/C-To-Delphi). このツールは、ほとんどの標準Cコードを変換する。 `[Delphi]`

* [Better Translation Manager](https://github.com/andersmelander/better-translation-manager). トランスレーションマネージャー。 `[Delphi]`

* [dzBdsLauncher](https://osdn.net/projects/dzbdslauncher/). Delphi IDEのランチャー。渡されたdprojファイルのサフィックスに基づき、複数のIDEのいずれかを起動する。 `[Delphi]`

* [DFMJSON](https://github.com/masonwheeler/DFMJSON). Delphiの.DFM（または.FMX）フォーマットとJSONの間の変換用のライブラリ。DFMファイルをJSON形式の抽象構文木（AST）にパースし、編集した後、DFMフォーマットに戻すことができる。 `[Delphi]`

* [James - The Delphi Project Manager](https://github.com/alefragnani/delphi-james). プロジェクト間の切り替え時に、手動でコンポーネントをインストールしたり、Delphi設定を更新する必要がある場合に、あなたの生活を容易にしてくれる。 `[Delphi]`

* [OpenAPI Client Generator](https://github.com/landgraf-dev/openapi-delphi-generator)OpenAPI仕様で定義された任意のREST APIに対して、DelphiクライアントSDKを生成するプロジェクト `[Delphi]`。この生成ツールは、REST APIのOpenAPIドキュメント（ローカルファイルまたはURLから）を読み取り、そのREST APIエンドポイントをフレンドリーに呼び出すことができるDelphiクラスを生成します。// *オープンソースだが、ビルドには商用TMS BIZライブラリが必要（試用版も可能）。バイナリファイルは提供されています*
