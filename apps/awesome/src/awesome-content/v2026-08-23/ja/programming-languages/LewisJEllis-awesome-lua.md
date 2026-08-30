---
title: "Awesome Lua"
description: "Luaを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-LewisJEllis-awesome-lua-readme-md"
---

# Awesome Lua

Luaを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## パッケージ
- [Implementations, Interpreters, and Bindings](#implementations-interpreters-and-bindings)
- [Package Managers](#package-managers)
- [Build Tools and Standalone Makers](#build-tools-and-standalone-makers)
- [Debugging and Profiling](#debugging-and-profiling)
- [IDEs and Plugins](#ides-and-plugins)
- [Utility Belts](#utility-belts)
- [Game Engines](#game-engines)
- [Game Development](#game-development)
- [Logging](#logging)
- [Web/Networking Platforms](#webnetworking-platforms)
- [OpenResty](#openresty)
- [Command-line Utilities](#command-line-utilities)
- [Concurrency and Multithreading](#concurrency-and-multithreading)
- [Templating](#templating)
- [Documentation](#documentation)
- [Object-oriented Programming](#object-oriented-programming)
- [File system and OS](#file-system-and-os)
- [Time and Date](#time-and-date)
- [Image Manipulation](#image-manipulation)
- [Digital Signal Processing](#digital-signal-processing)
- [Hardware and Embedded Systems](###hardware-and-embedded-systems)
- [Math and Scientific Computing](#math-and-scientific-computing)
- [Parsing and Serialization](#parsing-and-serialization)
- [Humanize](#humanize)
- [Compression](#compression)
- [Cryptography](#cryptography)
- [Network](#network)
- [Data Stores](#data-stores)
- [Message Brokers](#message-brokers)
- [Testing](#testing)
- [Foreign Function Interfaces](#foreign-function-interfaces)
- [Analysis Tools and ASTs](#analysis-tools-and-asts)
- [Experimental, etc](#experimental-etc)
- [Scriptable by Lua](#scriptable-by-lua)
- [Miscellaneous](#miscellaneous)


<a id="resources"></a>
## リソース
- [Community](#community)
- [References](#references)
- [Style Guides](#style-guides)
- [Tutorials](#tutorials)
- [Articles](#articles)
- [Talks & Slides](#talks--slides)
- [Books](#books)
- [Other Lists](#other-lists)


<a id="implementations-interpreters-and-bindings"></a>
### 実装・インタプリター・バインディング
- [Lua](http://www.lua.org/download.html) - Luaの元のANSI Cインタプリタ
  - [Lua Repo](https://github.com/lua/lua) - Luaチームが見ている公式Luaリポジトリ、GitHubにミラーリングされたもの
- [LuaJIT](http://luajit.org/luajit.html) - Lua 用の高性能 JIT（実行時）コンパイラ
- [LLVM-Lua](https://github.com/neopallium/llvm-lua) - LuaをLLVMにコンパイル
- [lua.vm.js](https://github.com/daurnimator/lua.vm.js) - ウェブ上のLua仮想マシン；LLVM、emscripten、asm.jsを用いてCインタプリタを直接移植したもの
- [Moonshine](https://github.com/gamesys/moonshine) - JavaScriptで実装されたLua仮想マシン。lua.vm.jsより遅いが、ドキュメントや例、JavaScriptとのインターフェースが優れている
- [Fengari](https://fengari.io/) - JavaScriptで再実装されたLua仮想マシンで、JavaScriptとDOMとの間の互換性がスムーズ
- [MoonSharp](https://github.com/xanathar/moonsharp) - .NET、MonoおよびUnityプラットフォーム向けにC#で書かれたLuaインタプリタ
- [UniLua](https://github.com/xebecnan/UniLua) - Unityゲームエンジンとの互換性に焦点を当てた、純粋なC#実装のLua 5.2
- [lupa](https://github.com/scoder/lupa) - LuaJIT2へのPythonバインディング
- [golua](https://github.com/aarzilli/golua) - Lua C APIへのGolangバインディング
- [GopherLua](https://github.com/yuin/gopher-lua) - Goで実装されたLua 5.1仮想マシンとコンパイラ、Go API付き
- [LuaBridge](https://github.com/vinniefalco/LuaBridge) - C++とLua間のデータ、関数、クラスの相互変換を可能にする軽量ライブラリ

注：LuaJITからLuaへ、lua.vm.jsへ、Moonshineへと進むごとに、基本的なベンチマークのパフォーマンスはおよそ6倍程度低下する


<a id="package-managers"></a>
### パッケージマネージャー
- [LuaRocks](https://luarocks.org/) - 「rocks」と呼ばれるLuaモジュールのパッケージ化ツールとしての実用的なツール、公開されたrockリポジトリとウェブサイト。npmやpipに似ている


<a id="build-tools-and-standalone-makers"></a>
### ビルドツールとスタンドアロン化ツール
- [Lake](https://github.com/stevedonovan/Lake) - Luaで書かれたビルドエンジン、Rubyのrakeに類似
- [Luabuild](https://github.com/stevedonovan/luabuild) - 高度にカスタマイズ可能な Lua 5.2 ビルドシステム
- [luastatic](https://github.com/ers35/luastatic) - Luaプログラムをスタンドアローン実行ファイルに変換するためのシンプルなツール
- [omnia](https://github.com/tongson/omnia) - luastaticに基づいた、スタンドアローン実行ファイルを作成するための、すべてのバッテリーを備えたツール


<a id="debugging-and-profiling"></a>
### デバッグとプロファイリング
- [ProFi](https://gist.github.com/perky/2838755) - LuaJITと互換性のあるシンプルなプロファイラーで、報告書ファイルを生成
- [luatrace](https://github.com/geoffleyland/luatrace) - スクリプト実行のトレース・分析・プロファイリングツールセットで、詳細な報告書を生成
- [StackTracePlus](https://github.com/ignacio/StackTracePlus) - Luaのスタックトレースにdrop-inアップグレードを加え、ローカルコンテキストを追加し、読みやすさを向上させる
- [MobDebug](https://github.com/pkulchenko/MobDebug) - ブレークポイントとスタック検視を備えた強力なリモートデバッガ。ZeroBraneStudioで使用されている
- [lovebird](https://github.com/rxi/lovebird) - ブラウザベースのデバッグコンソール。元はLÖVE用に作成されたが、LuaSocketをサポートするプロジェクトでも動作する


<a id="ides-and-plugins"></a>
### IDE とプラグイン
- [Lua Development Tools](https://eclipse.org/ldt/) - コード補完、デバッグなどを提供するEclipseプラグイン。Metaluaに基づいて構築されている
- [Lua for IDEA](https://bitbucket.org/sylvanaar2/lua-for-idea/wiki/Home) - IntelliJ IDEAプラグイン。その他の機能を含むが、コード補完、スマートハイライト、実験的なデバッグを提供する
- [ZeroBraneStudio](https://studio.zerobrane.com/) - 軽量でカスタマイズ可能、マルチプラットフォーム対応のLua専用IDE。コード補完と分析を提供。Luaで記述されている。多数のLuaエンジンに対応したデバッグサポートを備える
- [BabeLua](https://archive.codeplex.com/?p=babelua) - VS2012-13向けのLuaエディタ／デバッガ拡張。ハイライト、自動補完、Lint、フォーマット機能を提供する
- [lua-mode](https://github.com/immerrr/lua-mode) - Luaの編集を行うためのEmacsのマジャーモード
- [vscode-lua](https://github.com/trixnz/vscode-lua) - VSCodeのインテリセントとLint機能


<a id="utility-belts"></a>
### 汎用ツールキット
- [Lua Fun](https://github.com/luafun/luafun) - LuaJIT向けに設計された高性能な関数型プログラミングライブラリ
- [Moses](https://github.com/Yonaba/Moses) - Underscore.jsにインスパイアされた関数型プログラミングユーティリティセット
- [Penlight](https://github.com/stevedonovan/Penlight) - Pythonの標準ライブラリにインスパイアされた、広範で重いユーティリティライブラリ。Luaが備えていない「バッテリー」を提供する
- [lua-stdlib](https://github.com/lua-stdlib/lua-stdlib) - 中程度の標準ライブランの拡張。いくつかの有用なデータ構造、ユーティリティ関数、基本的な関数型機能を追加する
- [Microlight](https://github.com/stevedonovan/Microlight) - 有用なLua関数を集めた小さなライブラリ。Penlightの「極めて軽量」バージョン。
- [compat53](https://luarocks.org/modules/siffiejoe/compat53) - Lua-5.3スタイルのAPIを提供する互換性モジュール。Lua 5.2および5.1向け。
- [RxLua](https://github.com/bjornbytes/RxLua) - 反応型拡張、Observableなど


<a id="game-engines"></a>
### ゲームエンジン
- [LÖVE 2D](http://love2d.org/) - デスクトップゲーム開発プラットフォーム。マルチプラットフォーム対応、機能が充実し、広く採用されている
- [Corona SDK](https://coronalabs.com/) - iOSおよびAndroid向けの開発プラットフォーム。独自の技術だが、多くのトップゲームおよびアプリで使用されており、ダウンロード数は1億5千万以上。
- [MOAI](http://getmoai.com/) - オープンソース、マルチプラットフォーム対応、モバイルゲーム開発フレームワーク。Luaスクリプトで駆動するミニマリズムのC++エンジン。
- [Drystal](https://drystal.github.io/) - オープンソース、Linuxまたは最新のウェブブラウザを備えた任意のプラットフォームでゲームが実行可能。
- [Amulet](http://www.amulet.xyz/) - オープンソース、音声・視覚ツールキット。小型ゲームや実験に適したツール。Windows、Mac、Linux、HTML5、iOSで動作。
- [LÖVR](https://lovr.org) - 仮想現実体験を作成するための3Dフレームワーク。LÖVE 2Dにインスパイアされたもの。


<a id="game-development"></a>
### ゲーム開発
- Corona
  - [Coronium](https://develephant.github.io/coronium-core-docs/) - シンプルなクラウドプラットフォーム。分析、データオブジェクト、ユーザー管理などに対応。
- LÖVE
  - [awesome-love2d](https://github.com/love2d-community/awesome-love2d) - このリストに似たものだが、ゲーム開発およびLÖVEプラットフォームに焦点を当てるもの.
  - [lurker](https://github.com/rxi/lurker) - LÖVEプロジェクトの実行中に変更されたLuaファイルを自動で置き換えることで、開発サイクルを短縮。
  - [HUMP](http://vrld.github.io/hump/) - LÖVE向けの軽量ヘルパーのセット。ゲーム開発に特化したユーティリティセット。
- MOAI
  - [moaifiddle](https://moaifiddle.com) - MOAIゲームエンジン向けの短いスクリプトを編集・共有し、WebGLでブラウザ上で実行できる。
- [Jumper](https://github.com/Yonaba/Jumper) - グリッドベースのゲーム向けの高速かつ軽量なパスファインディングライブラリ。
- [lume](https://github.com/rxi/lume/) - ゲーム開発に特化したユーティリティライブラリ。
- [NoobHub](https://github.com/Overtorment/NoobHub) - Corona、LÖVEなどに向けたネットワークマルチプレイヤー。シンプルなパブ・サブモデルを採用。
- Collision detection
  - [bump.lua](https://github.com/kikito/bump.lua) - 最小限の矩形ベースの衝突検出。トンネル効果と基本的な衝突解決を処理。
  - [HardonCollider](http://vrld.github.io/HardonCollider/) - 任意の位置と回転を持つ任意の形状の間の衝突検出を実行。
- Tweening
  - [flux](https://github.com/rxi/flux) - Lua向けの高速かつ軽量なTweeningライブラリ。補間関数を備え、Tweenをグループ化できる。
  - [tween.lua](https://github.com/kikito/tween.lua) - Tweening用の小さなライブラリ。複数の補間関数を提供。
- Examples
  - [termtris](https://github.com/tylerneylon/termtris) - literateスタイルで書かれたテトリスのクローン。"学習しやすい"という強調が施されている。
  - [PacPac](https://github.com/tylerneylon/pacpac) - LÖVEで作成されたPac-Manのクローン。
  - [Mari0](https://github.com/Stabyourself/mari0) - MarioとPortalの融合作品。LÖVEで作成。詳しくはその [wikipedia entry](https://en.wikipedia.org/wiki/Mari0) を参照。
  - [Journey to the Center of Hawkthorne](https://github.com/hawkthorne/hawkthorne-journey) - Communityの [Digital Estate Planning](https://en.wikipedia.org/wiki/Digital_Estate_Planning) エピソードに基づく2Dプラットフォーマー。LÖVEで作成。


<a id="logging"></a>
### ロギング
- [lua-log](https://github.com/moteus/lua-log) - ファイルシステム、ネットワーク、ZeroMQなどへのプラグイン可能なライターを備えた非同期ログライブラリ。
- [LuaLogging](https://github.com/Neopallium/lualogging) - Log4jにインスパイアされたログライブラリ。さまざまなアペンダーをサポート。
- [luasyslog](https://luarocks.org/modules/luarocks/luasyslog) - ログをsyslogに記録、LuaLoggingに基づく。


<a id="webnetworking-platforms"></a>
### ウェブ／ネットワークプラットフォーム
- [OpenResty](http://openresty.org/en/) - NginxにLuaを追加して構築された高速かつスケーラブルなWebアプリケーションプラットフォーム。今日のLuaのWebプラットフォームとして、Cloudflare、Taobao、Tencentなどに広く使われている。
- [turbo](https://turbo.readthedocs.io/en/latest/) - イベント駆動、ブロッキングなし、LuaJITベースのネットワークサブセットとフレームワーク。Tornadoにインスパイアされたもの。
- [Kepler Project](https://github.com/keplerproject) - 共通の標準とコンポーネントを使用するウェブ向けプロジェクトのコレクション。
- [Pegasus.lua](https://github.com/EvandroLG/pegasus.lua) - Pegasus.luaは、Lua言語で書かれたWebアプリケーションと連携するHTTPサーバーである。


<a id="openresty"></a>
### OpenResty
- [awesome-resty](https://github.com/bungle/awesome-resty) - このリストに似たものだが、OpenRestyに焦点を当てるもの.
- Core platform
  - [ngx_lua](https://www.nginx.com/resources/wiki/modules/lua/) - OpenRestyの核となる部分。NginxにLuaを埋め込み、その他、非ブロッキングソケットのcosocket API（LuaSocketのAPIと互換）を公開する。
  - [OpenResty GitHub Organization](https://github.com/openresty) - ngx_lua、ngx_openresty、および多くの関連モジュールのリポジトリが置かれる場所。
- Third-party modules
  - [lua-resty-http](https://github.com/pintsized/lua-resty-http) - LuaベースのHTTPクライアントドライバー。cosocket APIに基づく。
- Frameworks & tools
  - [Lapis](http://leafo.net/lapis/) - LuaおよびOpenResty向けのフルスタックフレームワーク。DjangoやRailsに相当するもの。Moonscriptをサポート。
  - [ledge](https://github.com/pintsized/ledge) - Luaモジュールで、スクリプト可能なRFC準拠HTTPキャッシュ機能を提供。
  - [Sailor](https://github.com/sailorproject/sailor) — OpenResty、Apacheおよびその他のウェブサーバーと互換可能なMVCウェブフレームワーク。
  - [Kong](https://github.com/Kong/kong) - マイクロサービスおよびAPI管理層。

「OpenResty」をこのページで検索すると、他のカテゴリ（特にデータストア）に該当する関連パッケージが見つかります


<a id="command-line-utilities"></a>
### コマンドラインユーティリティ
- [ansicolors](https://github.com/kikito/ansicolors.lua) - コンソールへの色付き出力を行うシンプルな関数。
- [cliargs](https://github.com/amireh/lua_cliargs) - シンプルなコマンドライン引数解析モジュール。
- [lua-term](https://github.com/hoelzro/lua-term) - ターミナルの操作および変更。
- [argparse](https://github.com/mpeterv/argparse) - Pythonのargparseにインスパイアされた、機能豊かなコマンドラインパーサー。

<a id="concurrency-and-multithreading"></a>
### 並行処理とマルチスレッド
- Coroutine-based multitasking:
  - [Lumen](https://github.com/xopxe/Lumen) - シンプルな並列タスクスケジューリング。
  - [ConcurrentLua](https://github.com/lefcha/concurrentlua) - Erlangスタイルのメッセージ伝達による並列モデルを実装。
  - [cqueues](http://25thandclement.com/~william/projects/cqueues.html) - イベントループとコルーチンに基づいたソケット、シグナル、スレッドの管理用ライブラリ。
- Multithreading:
  - [llthreads](https://github.com/Neopallium/lua-llthreads) - 低レベルのpthreadおよびWIN32スレッド向けのシンプルなラッパー
  - [llthreads2](https://github.com/moteus/lua-llthreads2) - llthreadsの再構築版
  - [lanes](https://github.com/LuaLanes/lanes) - 1つのLuaスレッドにつき1つのOSスレッドを実現するメッセージ伝達モデルを実装したライブラリ
  - [luaproc](https://github.com/askyrme/luaproc) - 複数のスレッドを1つのOSスレッドに割り当て可能で、ネットワーク上で簡単に拡張できるメッセージ伝達モデル。詳しくは [the paper](http://www.inf.puc-rio.br/~roberto/docs/ry08-05.pdf) を参照。

各選択肢（特に `lanes` と `luaproc` の間の違い）についての詳細は、こちらの [comparison](http://www.luteus.biz/Download/LoriotPro_Doc/LUA/LUA_For_Windows/lanes/comparison.html) を参照してください；若干古いものの、それぞれの仕組みと重要な違いを説明しています


<a id="templating"></a>
### テンプレート
- [lustache](http://olivinelabs.com/lustache/) - Mustacheテンプレートの実装
- [etlua](https://github.com/leafo/etlua) - 埋め込み型Luaテンプレート、ERBスタイル
- [lua-resty-template](https://github.com/bungle/lua-resty-template) - OpenResty向けのLua中心のテンプレートエンジン、Jinjaに似ている。


<a id="documentation"></a>
### ドキュメント
- [LDoc](http://stevedonovan.github.io/ldoc/) - [LuaDoc](http://keplerproject.github.io/luadoc/)を現代化・拡張したドキュメント生成ツール
- [Locco](http://rgieseke.github.io/locco/) - [Docco](http://ashkenas.com/docco/)のLua版、"簡易かつ100行程度の、リテラティブプログラミングスタイルのドキュメント生成ツール"。
- [docroc](https://github.com/bjornbytes/docroc) - コメントをLuaテーブルにパースしてドキュメントを生成。


<a id="object-oriented-programming"></a>
### オブジェクト指向プログラミング
- [30log](https://github.com/Yonaba/30log) - 30行で構成された極めてシンプルなOOPライブラリ、基本的なクラス、継承、ミックスインを提供。
- [middleclass](https://github.com/kikito/middleclass) - シンプルでありながら堅牢なOOPライブラリ、継承、メソッド、メタメソッド、クラス変数、ミックスインを提供。


<a id="file-system-and-os"></a>
### ファイルシステムと OS
- [LuaFileSystem](http://keplerproject.github.io/luafilesystem/) - Luaの標準ファイルシステム関数セットを拡張・補完する。
- [luaposix](https://github.com/luaposix/luaposix) - POSIX APIへのバインディング、包括的にcursesを含む。
- [lunix](http://25thandclement.com/~william/projects/lunix.html) - 一般的なUnixシステムAPIへのバインディング、スレッドセーフ性を追求。
- [lua-path](https://github.com/moteus/lua-path) - ファイルシステムパス操作ライブラリ。


<a id="time-and-date"></a>
### 時刻と日付
- [LuaDate](https://github.com/Tieske/date) - 日付と時刻モジュール、パース、フォーマット、加減算、ローカリゼーション、ISO 8601対応を提供。
- [cron.lua](https://github.com/kikito/cron.lua) - JavaScriptのsetTimeoutおよびsetIntervalにインスパイアされたLua用の時刻関連関数。
- [luatx](https://github.com/daurnimator/luatz) - 時刻、日付、タイムゾーンライブラリ。


<a id="image-manipulation"></a>
### 画像処理
- [magick](https://github.com/leafo/magick) - LuaJIT用のFFIによるImageMagickへのLuaバインディング。


<a id="digital-signal-processing"></a>
### デジタル信号処理
- [LuaFFT](https://github.com/h4rm/luafft) - 純粋なLuaで構築された使いやすい高速フーリエ変換パッケージ
- [Worp](http://worp.zevv.nl/about.html) - LuaJIT向けに開発された音声/音楽/DSPエンジン


<a id="hardware-and-embedded-systems"></a>
### ハードウェアと組み込みシステム
- [eLua](http://www.eluaproject.net/) - Luaに最適化と特定の機能を追加した、効率的かつ移植性の高い埋め込みソフトウェア開発用の拡張版


<a id="math-and-scientific-computing"></a>
### 数学と科学技術計算
- [SciLua](http://scilua.org/) - LuaJITに基づく数値/科学計算フレームワークで、Rとのインターフェースを提供
- [Torch7](http://torch.ch/) - 機械学習アルゴリズムに幅広く対応した科学計算フレームワーク。Facebook、Googleなどに採用されている
- [lhf's Lua Tools](http://webserver2.tecgraf.puc-rio.br/~lhf/ftp/lua/) - 多数の数学やデータ関連のライブラリとツール


<a id="parsing-and-serialization"></a>
### 構文解析とシリアライズ
- JSON
  - [lua-cjson](https://github.com/mpx/lua-cjson/) - Cで実装された高速JSONエンコード/デコードをLuaに公開
  - [luajson](https://github.com/harningt/luajson) - LPegに基づくLua実装のJSONエンコーダ/デコーダ
  - [dkjson](http://dkolf.de/src/dkjson-lua.fsl/home) - Lua上で実装されたJSONエンコーダ/デコーダ
  - [json.lua](https://github.com/rxi/json.lua) - 純粋なLuaで実装された高速かつ小型のJSONライブラリ
- XML
  - [LuaExpat](https://matthewwild.co.uk/projects/luaexpat/) - Expatライブラリとのバインディングを用いたSAX XMLパーサー
  - [SLAXML](https://github.com/Phrogz/SLAXML) - 純粋なLuaによるSAX風ストリーミングXMLパーサー
- MessagePack
  - [lua-MessagePack](https://github.com/fperrad/lua-MessagePack) - 純粋なLuaで実装されたMessagePack
  - [lua-cmsgpack](https://github.com/antirez/lua-cmsgpack) - Redisが使用しているMessagePackのC実装とLuaバインディング
- LPeg
  - [LPeg](http://www.inf.puc-rio.br/~roberto/lpeg/) - パーシング表現文法（PEG）に基づくLua用パターンマッチングライブラリ
  - [lpeg_patterns](https://github.com/daurnimator/lpeg_patterns) - LPegパターンのコレクション
  - [LuLPeg](https://github.com/pygy/LuLPeg) - LPeg v0.12の純粋なLua実装
  - [LPegLJ](https://github.com/sacek/LPegLJ) - LPeg v1.0の純粋なLuaJIT実装
  - [LPegLabel](https://github.com/sqmedeiros/lpeglabel) - LPegにラベル付き失敗をサポートする拡張
- [lyaml](https://github.com/gvvaughan/lyaml) - LibYAMLとのバインディングを用いたYAMLエンコード/デコード
- [lunamark](https://github.com/jgm/lunamark) - マークダウンをHTMLやLaTeXなど他のテキストフォーマットに変換します。高速解析のためにLPegを使用します。
- [LXSH](https://github.com/xolox/lua-lxsh) - LPegで書かれたリキサと文法強調表示ツールのコレクション
- [lua-pb](https://github.com/Neopallium/lua-pb) - プロトコルバッファーズの実装。


<a id="humanize"></a>
### 人間向け表現
- [i18n.lua](https://github.com/kikito/i18n.lua) - ロケール、フォーマット、複数形をサポートする国際化ライブラリ。
- [inspect.lua](https://github.com/kikito/inspect.lua) - Luaテーブルの人类が読みやすい表現。
- [serpent](https://github.com/pkulchenko/serpent) - シリアライザと整形出力
- [Ser](https://github.com/gvx/Ser) - 極めてシンプルなシリアライザで、高いパフォーマンスを実現。
- [say](https://github.com/Olivine-Labs/say) - i18n向けのシンプルな文字列キー・値ストア。


<a id="compression"></a>
### 圧縮
- [lua-zlib](https://github.com/brimworks/lua-zlib) - zlib用のシンプルなストリーミングインターフェース。gzip/gunzipに使用。
- [lua-zip](https://github.com/brimworks/lua-zip) - Luaにlibzipのバインディング。ZIPファイルの読み書きを行います。


<a id="cryptography"></a>
### 暗号
- [LuaCrypto](https://github.com/mkottman/luacrypto) - OpenSSLへのLuaのバインディング。
- [lua-lockbox](https://github.com/somesocks/lua-lockbox) - 純粋なLuaで書かれた暗号プリミティブのコレクション。
- [luatweetnacl](https://github.com/philanc/luatweetnacl) - tweetnaclへのバインディング。現代の高セキュリティ暗号ライブラリ。
- [luaossl](https://github.com/wahern/luaossl) - Lua世界で最も包括的なOpenSSLモジュールです。lapis、kong、lua-httpに採用されています。


<a id="network"></a>
### ネットワーク
- [LuaSocket](https://github.com/diegonehab/luasocket) - TCPおよびUDP用のソケットAPIを提供し、HTTP、FTP、SMTPを実装するネットワーキング拡張
- [lua-websockets](https://github.com/lipp/lua-websockets) - WebSocketクライアントおよびサーバーモジュール。Webサーバーに依存しない。LuaSocketに基づくLuaでの実装。
- [lua-cURLv3](https://github.com/Lua-cURL/Lua-cURLv3) - Luaにlibcurlのバインディング。
- [lua-http](https://github.com/daurnimator/lua-http) - 非同期HTTPおよびWebSocketライブラリ。クライアントおよびサーバーAPI、TLS、HTTP/2をサポート。cqueuesに基づく。


<a id="data-stores"></a>
### データストア
- [LuaSQL](http://keplerproject.github.io/luasql/) - ODBC、ADO、Oracle、MySQL、SQLiteおよびPostgreSQLへの接続に必要なシンプルなインターフェース。
- [pgmoon](https://github.com/leafo/pgmoon) - OpenResty、LuaSocket、およびcqueues用のLua PostgreSQLドライバー
- [lua-resty-mysql](https://github.com/openresty/lua-resty-mysql) - OpenResty 用の Lua MySQL ドライバー
- [lua-resty-cassandra](https://github.com/jbochi/lua-resty-cassandra) - OpenResty およびその他の環境用の Lua Cassandra クライアントドライバー
- Redis
  - [redis-lua](https://github.com/nrk/redis-lua) - Redis 用の純粋 Lua クライアントライブラリ
  - [lua-resty-redis](https://github.com/openresty/lua-resty-redis) - OpenResty 用の Lua Redis クライアントドライバー
  - [lredis](https://github.com/daurnimator/lredis) - パイピングおよび Pub/Sub をサポートする非同期 Redis クライアント（cqueues に基づく）


<a id="message-brokers"></a>
### メッセージブローカー
- [lua-zmq](https://github.com/Neopallium/lua-zmq) - ZeroMQ への Lua バインディング
- [lzmq](https://github.com/zeromq/lzmq) - ZeroMQ への新しい Lua バインディング
- [lua-resty-kafka](https://github.com/doujiang24/lua-resty-kafka) - OpenResty cosockets をベースにした Kafka クライアントドライバー
- [lua-resty-rabbitmqstomp](https://github.com/wingify/lua-resty-rabbitmqstomp) - OpenRest-ly cosockets をベースにした RabbitMQ クライアントライブラリ


<a id="testing"></a>
### テスト
- [busted](http://olivinelabs.com/busted/) - ドキュメントが優れていて Moonscript サポートを備えた BDD 風のユニットテストフレームワーク
- [telescope](https://github.com/norman/telescope) - 柔軟で高度にカスタマイズ可能なテストライブラリ
- [luassert](https://github.com/Olivine-Labs/luassert) - Lua の標準的なアサーション機能を拡張するアサーションライブラリ
- [lust](https://github.com/bjornbytes/lust) - 最小限のテストフレームワーク


<a id="foreign-function-interfaces"></a>
### 外部関数インターフェース
- [LuaJIT FFI](http://luajit.org/ext_ffi.html) - LuaJIT が外部 C 関数を呼び出し、C データ構造を純粋 Lua コードから使用するためのメカニズム
- [luaffi](https://github.com/jmckaskill/luaffi) - スタンドアローン FFI ライブラリ（LuaJIT FFI インターフェースと互換）


<a id="analysis-tools-and-asts"></a>
### 解析ツールと AST
- [luadec51](https://github.com/sztupy/luadec51) - Lua 5.1 用の Lua デコンパイラ
- [luacov](http://keplerproject.github.io/luacov/) - busted および telescope がテストカバレッジを確認するために使用するシンプルなカバレッジ分析ツール
  - [luacov-coveralls](https://github.com/moteus/luacov-coveralls) - coveralls.io 用の LuaCov レポート生成ツール
- [luacheck](https://github.com/mpeterv/luacheck) - 誤ったグローバル変数や定義されていない・影を落とすローカル変数を検出するシンプルな静的分析ツール
- [Metalua](https://github.com/fab13n/metalua) - AST を生成するために使用される純粋 Lua パーサーおよびコンパイラ。複数の他のツールがこのように Metalua パーサーを使用している。
- [LuaInspect](https://github.com/davidm/lua-inspect) - Metalua をベースにした Lua 最強のコード分析およびリントツール。ZeroBraneStudio などに使用されている。
- [LuaMinify](https://github.com/stravant/LuaMinify) - ミニファイアが、自らの静的解析ツール、レキサ、パーサーを備えたもの
- [Typed Lua](https://github.com/andremm/typedlua) - Luaに型を追加した、純粋なLuaにコンパイルされる言語
- [lua-parser](https://github.com/andremm/lua-parser) - LPegLabelを使用して書かれたLua 5.3パーサーで、改善されたエラーメッセージを提供


<a id="experimental-etc"></a>
### 実験的なものなど
- [punchdrunk.js](https://github.com/TannerRogalsky/punchdrunk) - Moonshine + LÖVE APIの再実装 = ブラウザ上でLÖVEゲームを実行
- [luvit](https://github.com/luvit/luvit) - Node.jsの基本アーキテクチャ（libUV）にLuaを上に重ねたものではなくJavaScriptを代用
- [graphql-lua](https://github.com/bjornbytes/graphql-lua) - [GraphQL](http://graphql.org/)のLua実装


<a id="scriptable-by-lua"></a>
### Lua でスクリプト可能
- [luakit](https://luakit.github.io/luakit/) - 高速で小型であり、WebKitをベースにしたブラウザフレームワークでLuaで拡張可能
- [Hammerspoon](http://www.hammerspoon.org) - 強力で拡張可能なOS X自動化ツール。[Mjolnir](http://www.mjolnir.io/)のコミュニティが維持するフォーク版
- [kpie](https://github.com/skx/kpie) - ウィンドウを操作するためのスクリプトツール
- [lumail](https://lumail.org/) - コマンドラインベースのメールクライアントで、広範なスクリプティング機能を備えている
- [AwesomeWM](https://awesomewm.org/) - X用の高度にカスタマイズ可能で拡張可能なウィンドウマネージャー。Luaでスクリプトおよび設定されている
- [Textadept](https://foicica.com/textadept/) - 極めて軽量でカスタマイズ可能で、マルチプラットフォーム対応のエディタ。ほとんどがLuaで書かれており、Luaでスクリプトされている
- [KoReader](https://github.com/koreader/koreader) - 電子書籍リーダーアプリケーション。PDF、DJVU、EPUB、FB2など多数のフォーマットをサポートし、Kindle、Kobo、PocketBook、Androidデバイスで動作


<a id="miscellaneous"></a>
### その他
- [MoonScript](http://moonscript.org/) - Moonscriptは、Luaにコンパイルされる動的スクリプティング言語。記述の冗長性を減らし、コンプリヘンションやクラスといった豊かな機能を提供。著者はこれを「Lua用のCoffeeScript」と呼んでいる
- [sitegen](http://leafo.net/sitegen/) - MoonScriptを使用する静的サイトジェネレーター。HTMLおよびMarkdown、ページグループ化、プラグインをサポート


<a id="resources-1"></a>
## リソース

<a id="community"></a>
### コミュニティ
- [lua-l](http://www.lua.org/lua-l.html) - 公式のLuaメールリスト。Luaコミュニティの中心的な場の一つ
- [Lua.Space](http://lua.space/) - Luaコミュニティのブログ
- [Lua Users Foundation](https://github.com/lua-users-foundation) - Luaとそのコミュニティおよびエコシステムを支援・推進する個人の協会
- [lua-users.org](http://lua-users.org/) - Luaユーザー向けのサイト。IRCチャンネル、lua-lのウェブアーカイブ、大きなWikiを備えている
- Conferences/Meetups
  - [Lua Workshop](https://www.lua.org/community.html#workshop) - 開催地を変えながら毎年開かれる、Lua コミュニティの2日間の会合
  - [Lua Conf](http://luaconf.com/) - ブラジルで開催される年次1日間のLuaコンファレンス
  - [FOSDEM](https://fosdem.org/) - ブリュッセルで開催される年次2日間のF/OSS開発者会議（時々「Lua開発ルーム」が設けられる）


<a id="references"></a>
### リファレンス
- [Reference Manual](http://www.lua.org/manual/5.3/) - Lua言語の公式定義
- [lua-users wiki](http://lua-users.org/wiki/) - 公式ウェブサイトを補完する、大規模なコミュニティが維持するLuaに関する情報とリソースのコレクション
- [Lua Unofficial FAQ](http://www.luafaq.org/) - Luaに関連するあらゆる質問への答え（「〜をどうやって〜？」といった形式の質問を多く含む）


<a id="glossaries"></a>
### 用語集
- [Lua 5.3 Glossary](https://rawgit.com/dlaurie/lua-notes/master/glossary.html) - いくつかの重要なLua用語の辞書


<a id="style-guides"></a>
### スタイルガイド
- [Lua-users style guide](http://lua-users.org/wiki/LuaStyleGuide) - 一般的で高レベルのスタイルガイド；主観的でなく、容易に合意できる
- [Olivine style guide](https://github.com/Olivine-Labs/lua-style-guide) - 主観的で具体的であり、したがって厳密なガイド


<a id="tutorials"></a>
### チュートリアル
- [Lua Crash Course](http://www.coppeliarobotics.com/helpFiles/en/luaCrashCourse.htm) - 短時間で読める入門講座で、基本を忘れたときのリファレンスにもなります
- [Learn Lua in 15 Minutes](http://tylerneylon.com/a/learn-lua/) - コメントがしっかり書かれた例ファイルで、基本的な内容をカバー
- [Learning Lua from JS](http://phrogz.net/lua/LearningLua_FromJS.html) - LuaとJavaScriptの類似点と違いについての概説；JavaScriptを学びたい人にとって、Luaへの入り口として非常に良い
- [lua-users tutorial](http://lua-users.org/wiki/LuaTutorial) - 初心者向けの詳細なチュートリアルのコレクション
- [Lua Missions](https://github.com/kikito/lua_missions) - 「ミッション」と呼ばれるシリーズで、Luaのさまざまな側面を学ぶように設計されたチュートリアル
- [Creating an Image Server](http://leafo.net/posts/creating_an_image_server.html) - OpenRestyを設定し、使用してシンプルな画像処理サーバーを構築する方法をステップバイステップに説明；OpenRestyを試すための素晴らしい出発点


<a id="articles"></a>
### 記事
- [Embedding Lua in C](https://debian-administration.org/article/264/Embedding_a_scripting_language_inside_your_C/C_code) - LuaをCプログラムに埋め込む方法についての導入的な解説。少し古いため、しかし依然として非常に良い解説。
- [Lua: Good, bad, and ugly parts](http://notebook.kulchenko.com/programming/lua-good-different-bad-and-ugly-parts) - ZeroBraneStudioの開発者による、Luaの良い点、異なる点、悪い点、醜い点についての詳細な要約、多くの細かい特徴も含む
- [Lua states, libraries, coroutines and memory](http://www.thijsschreijer.nl/blog/?p=693) - Luaの仮想マシンのより高度な概念（特にCとのインターフェース）についての図解と説明


<a id="talks--slides"></a>
### 講演とスライド
- [Roberto's Talks](http://www.inf.puc-rio.br/~roberto/talks/index.html) - Luaの首席アーキテクトが行った講演の歴史、各講演に付随するスライドを含む
- [Lua Workshop Talks](http://www.lua.org/wshop14.html#abstracts) - 年次ごとに行われるLuaワークショップで、高品質な講演が行われ、その講演の歴史はオンラインに公開されている、スライドも含む


<a id="books"></a>
### 書籍
- [Programming in Lua](http://www.lua.org/pil/) - Lua プログラミング全般を扱う公式入門書。Lua の主任設計者が執筆し、第3版まで刊行されています。初版はオンラインで閲覧できます
- [Lua Quick Reference](https://foicica.com/lua/) - Textadeptの作成者が提供した、Lua 5.1から5.3までをプログラムし、埋め込むための迅速なリファレンス.
- [Programming Gems](http://www.lua.org/gems/) - Luaでの良好なプログラミングに関する既存の知見や実践を、さまざまな用途ケースにわたってカバーする記事のコレクション.
- [Lua Programming](https://en.wikibooks.org/wiki/Lua_Programming) - Lua 5.2までを最新に更新した、言語の概要を短くまとめたもので、オンラインで利用可能.


<a id="other-lists"></a>
### その他のリスト
- [awesome-resty](https://github.com/bungle/awesome-resty) - このリストに似たものだが、OpenRestyに焦点を当てるもの.
- [awesome-love2d](https://github.com/love2d-community/awesome-love2d) - このリストに似たものだが、ゲーム開発およびLÖVEプラットフォームに焦点を当てるもの.
- [Where Lua is Used](https://sites.google.com/site/marbux/home/where-lua-is-used) - Luaで書かれたあるいはLuaで拡張可能な独立したプログラムを網羅した包括的なリスト。


<a id="contribute"></a>
## コントリビューション

ご貢献を心よりお待ちしています！まず[contribution guidelines](https://github.com/LewisJEllis/awesome-lua/blob/5cda10f263190f2c926d95652044a17ef937d6f8/contributing.md)を読んでください。

<a id="license"></a>
## ライセンス

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法令で認められる限り、Lewis J. Ellis はこの作品に関する著作権および関連する権利をすべて放棄しています。
