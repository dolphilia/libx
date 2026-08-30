---
title: "fsprojects/awesome-fsharp"
description: "F# のフレームワーク、ライブラリ、ソフトウェア、学習資料を集めた厳選リスト"
licenseSource: "github-fsprojects-awesome-fsharp-readme-md"
---

<a id="awesome-f"></a>
# Awesome F# [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <img src="https://fsharp.org/img/logo/fsharp.svg" width="48" height="48" align="right"/>

F# は、不変性、型推論、第一級関数、強力なデータ型、パターンマッチングを重視した、.NET をはじめとする各種プラットフォーム向けのプログラミング言語です。

これは、優れた F# フレームワーク、ライブラリ、ソフトウェア、リソースを集めた厳選リストです。

<a id="contents"></a>
## 目次
- [Main Language-Related Repositories](#main-language-related-repositories)
- [F# Wrappers for Popular .NET Libraries](#f-wrappers-for-popular-net-libraries)
- [Actor Frameworks](#actor-frameworks)
- [Build Tools](#build-tools)
- [Cloud](#cloud)
- [Code Analysis](#code-analysis)
- [Code Generation](#code-generation)
- [Compilers for Other Platforms](#compilers-for-other-platforms)
- [Concurrent, Asynchronous, and Parallel Programming](#concurrent-asynchronous-and-parallel-programming)
- [Configuration](#configuration)
- [Data Science](#data-science)
- [Development Tools](#development-tools)
  - [IDE](#ide)
  - [Editor Plugins](#editor-plugins)
  - [Performance Analysis](#performance-analysis)
- [General Purpose Libraries](#general-purpose-libraries)
- [Game Development](#game-development)
- [GUI](#gui)
- [HTTP Clients](#http-clients)
- [Logging](#logging)
- [Package Management](#package-management)
- [Parsing](#parsing)
- [Serialization](#serialization)
- [Simulation](#simulation)
- [Static Site Generators](#static-site-generators)
- [Testing](#testing)
- [Type Providers](#type-providers)
  - [Creating Type Providers](#creating-type-providers)
- [Visualization](#visualization)
- [Web Frameworks](#web-frameworks)
- [.NET Core Templates](#net-core-templates)
- [Resources](#resources)
  - [Blogs](#blogs)
  - [Books](#books)
  - [Cheatsheets](#cheatsheets)
  - [Community](#community)
  - [Other Lists](#other-lists)
  - [Websites](#websites)
  - [Videos](#videos)
  - [Courses](#courses)

<a id="main-language-related-repositories"></a>
## 言語に関する主要リポジトリ

- [F# main repository](https://github.com/dotnet/fsharp)
- [F# projects](https://github.com/fsprojects)
- [F# suggestions](https://github.com/fsharp/fslang-suggestions)
- [F# RFCs](https://github.com/fsharp/fslang-design)

<a id="f-wrappers-for-popular-net-libraries"></a>
## 人気 .NET ライブラリの F# ラッパー
人気の .NET ライブラリを F# から快適に利用するためのラッパーをまとめています。



|.NET Library                                                                                                                     |F# Wrapper                                                                                                                                                                |
|---------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[ASP.NET Core Blazor](https://github.com/dotnet/aspnetcore/tree/main/src/Components)                                             |[Bolero](https://github.com/fsbolero/Bolero)                                                                                                                              |
|[ASP.NET Core](https://github.com/dotnet/aspnetcore)                                                                             |[Giraffe](https://github.com/giraffe-fsharp/Giraffe) (+ optionally [Saturn](https://github.com/SaturnFramework/Saturn))<br/>[Oxpecker](https://github.com/Lanayx/Oxpecker)|
|[Avalonia](https://github.com/AvaloniaUI/Avalonia)                                                                               |[Avalonia.FuncUI](https://github.com/fsprojects/Avalonia.FuncUI)                                                                                                          |
|[MAUI](https://github.com/dotnet/maui)/[Xamarin.Forms](https://github.com/xamarin/Xamarin.Forms)                                 |[Fabulous](https://github.com/fabulous-dev/Fabulous)                                                                                                                      |
|[MSTest](https://github.com/microsoft/testfx)/[NUnit](https://github.com/nunit/nunit)/[xUnit.net](https://github.com/xunit/xunit)|[FsUnit](https://github.com/fsprojects/FsUnit)                                                                                                                            |
|[System.Text.Json](https://github.com/dotnet/runtime/tree/main/src/libraries/System.Text.Json)                                   |[FSharp.SystemTextJson](https://github.com/Tarmil/FSharp.SystemTextJson)                                                                                                  |
|[WPF](https://github.com/dotnet/wpf)                                                                                             |[Elmish.WPF](https://github.com/elmish/Elmish.WPF)                                                                                                                        |



<a id="actor-frameworks"></a>
## アクターフレームワーク

- [Akka.NET](https://github.com/akkadotnet/akka.net) - コミュニティが中心に開発した人気のJava/ScalaフレームワークAkkaを.NETに移植したプロジェクト。
- [Akkling](https://github.com/Horusiath/Akkling) - Akka.NET向けのF#型API。
- [Orleankka](https://github.com/OrleansContrib/Orleankka) - Microsoft Orleansフレームワーク向けの機能拡張。
- [Orleans](https://github.com/dotnet/orleans) - 分散型仮想アクターモデル。
- [Proto.actor](https://github.com/AsynkronIT/protoactor-dotnet) - .NET、Go、JavaおよびKotlin向けのプラットフォームを越えたアクターフレームワーク。

<a id="build-tools"></a>
## ビルドツール

- [FAKE](https://github.com/fsharp/FAKE) - "F# Make"は、クロスプラットフォームのビルド自動化システム。
- [Xake](https://github.com/OlegZee/Xake) - F# で実装された Make ユーティリティ。完全な宣言型で、手軽に並列化でき、Shake に着想を得ています。

<a id="cloud"></a>
## クラウド

- [Chia](https://github.com/DanpowerGruppe/Chia) - Azureクラウド操作やログ、報告に関するヘルパー関数を含むF#ライブラリ。
- [Farmer](https://github.com/CompositionalIT/farmer) - ARMテンプレートを用いたAzureデプロイの繰り返し実行を簡単に行えるようにしたツール。
- [FsFirestore](https://github.com/mrbandler/FsFirestore) - Google Cloud Platform（GCP）またはFirebaseにホストされたFirestoreデータベースへのアクセスを可能にするF#の機能的ライブラリ。
- [Pulumi.FSharp.Extensions](https://github.com/UnoSD/Pulumi.FSharp.Extensions) - Pulumiコードにおけるボイラープレートを減らすためのF#の計算表現。

<a id="code-analysis"></a>
## コード解析
- [Ionide FSharp.Analyzers.SDK](https://github.com/ionide/FSharp.Analyzers.SDK) - F# / FSharp.Analyzers.Cli向けのカスタム分析器を構築するためのライブラリ。

<a id="code-generation"></a>
## コード生成

- [Hawaii](https://github.com/Zaid-Ajaj/Hawaii) - OpenAPI/Swaggerサービスから型安全なF#クライアントを生成するdotnet CLIツール。
- [Myriad](https://github.com/MoiraeSoftware/myriad) - 事前コンパイルコードジェネレーター。

<a id="compilers-for-other-platforms"></a>
## 他プラットフォーム向けコンパイラ

- [Fable](https://github.com/fable-compiler/Fable) - F#からJavaScriptへのコンパイラ。
- [Fez](https://github.com/kjnilsson/fez) - F#からErlangへのコンパイラ。
- [FunScript](https://github.com/ZachBray/FunScript) - F#からJavaScriptへのコンパイラ。JQueryなど、TypeScript型プロバイダーを通じてマッピング。
- [Juniper](https://github.com/calebh/Juniper) - Arduinoおよびその他のマイクロコントローラ向けの機能的反応プログラミング。

<a id="concurrent-asynchronous-and-parallel-programming"></a>
## 並行・非同期・並列プログラミング

- [FIO](https://github.com/iyyel/fio) - 純粋な関数型プログラミングに基づく、F#向けの型安全かつ高スケーラビリティかつ非同期なライブラリ。
- [FSharp.Control.AsyncSeq](https://github.com/fsprojects/FSharp.Control.AsyncSeq) - 非同期シーケンスのサポート、`IAsyncEnumerable`との統合。
- [FSharp.Control.FusionTasks](https://github.com/kekyo/FSharp.Control.FusionTasks) - F# Async workflow <--> .NET Task/ValueTask の容易かつスムーズな相互運用ライブラリ
- [FSharpx.Async](https://github.com/fsprojects/FSharpx.Async) - F# 用の非同期プログラミングユーティリティのコレクション
- [Hopac](https://github.com/Hopac/Hopac) - F# 用の並列 ML 風の並列プログラミングライブラリ
- [IcedTasks](https://github.com/TheAngryByrd/IcedTasks) - コールドタスク、キャンセル可能なタスク、`async` ワークフロー向け拡張機能
- [Ply](https://github.com/crowded/ply) - F# 用の高パフォーマンス System.Threading.(Value)Task 計算表現
- [Reaction.AsyncRx](https://github.com/dbrattli/Reaction) - .NET および Fable 用の F# での Async Observable の実装
- [TaskBuilder.fs](https://github.com/rspeele/TaskBuilder.fs) - F# 用の System.Threading.Tasks の計算表現ビルダー

<a id="configuration"></a>
## 設定

- [Argu](https://github.com/fsprojects/Argu) - F# アプリケーション向けの宣言型 CLI 引数/XML 設定パーサ
- [FsConfig](https://github.com/demystifyfp/FsConfig) - 環境変数および AppSettings から設定データを読み取るための、型安全な F# ライブラリ
- [Skid](https://github.com/Meyhem/Skid) - シンプルで、1ファイルのポータブル CLI ユーティリティ（設定テンプレート用）
- [docopt.fs](https://github.com/docopt/docopt.fs/) - CLI 引数パーサー、[docopt](https://github.com/docopt/docopt) の F# ポート

<a id="data-science"></a>
## データサイエンス

- [Deedle](https://github.com/BlueMountainCapital/Deedle) - .NET 用の探索データライブラリ
- [DiffSharp](https://github.com/DiffSharp/DiffSharp) - 関数型自動微分（AD）ライブラリ
- [FsLab](https://github.com/fslaborg/FsLab) - データサイエンス向けのライブラリのコレクション。これにより、少ないコードで高度な分析を書くことが可能になります。
- [IfSharp](https://github.com/fsprojects/IfSharp) - Jupyter Notebook 用の F#
- [Math.NET Numerics](https://github.com/mathnet/mathnet-numerics) - 科学、工学、日常用途における数値計算のメソッドとアルゴリズム。F# 特有のバインディングが提供されています。
- [Math.NET Symbolics](https://github.com/mathnet/mathnet-symbolics/) - 完全に F# で書かれた、.NET、Silverlight および Mono 用のオープンソースコンピュータ代数ライブラリ
- [SIMDArray](https://github.com/jackmott/SIMDArray) - SIMD を活用した Array 拡張機能による高速計算
- [Synapses](https://github.com/mrdimosthenis/Synapses) - F# 用のニューラルネットワークライブラリ
- [m2cgen](https://github.com/BayesWitnesses/m2cgen) - 訓練済みの古典MLモデルを、ゼロの依存関係でネイティブなF#コードに変換するCLIツール

<a id="development-tools"></a>
## 開発ツール

<a id="ide"></a>
### IDE

- [F# Playground](https://github.com/Seng-Jik/FSharpPlayground) - F#用の最小限のプレイグラウンド
- [JetBrains Rider](https://www.jetbrains.com/rider) - F#をサポートするクロスプラットフォーム.NET IDE（ライセンスは非営利用途で無料）
- [MonoDevelop](http://www.monodevelop.com/) - 主にMono/.NET開発者を対象としたクロスプラットフォームIDE
- [Visual Studio](https://www.visualstudio.com/) - Microsoftから提供されるF#を優先的にサポートするIDE（Windows専用、ライセンスは非公開）

<a id="editor-plugins"></a>
### エディタープラグイン

- [Emacs F# mode](https://github.com/fsharp/emacs-fsharp-mode) - EmacsにおけるF#のサポート（包括的にIntellisenseおよびインタラクティブモード）
- [FSharpFar](https://github.com/nightroman/FarNet) - Far ManagerにおけるF#のサポート
- [FSharpLint](https://github.com/fsprojects/FSharpLint) - F#コードのリントツール
- [Fantomas](https://github.com/fsprojects/fantomas) - F#コードのフォーマッタ
- [Ionide](http://ionide.io/) - クロスプラットフォームF#開発用のAtom EditorおよびVisual Studio Codeパッケージセット
- [Vim F#](https://github.com/fsharp/vim-fsharp) - VimにおけるF#のサポート
- [VimSpeak](https://github.com/AshleyF/VimSpeak) - 声認識を用いてVimを制御するツール
- [fsharp-notebook](https://github.com/pablofrommars/fsharp-notebook) - F# Interactive用のデータサイエンスノートブック
- [neofsharp.vim](https://github.com/adelarsq/neofsharp.vim) - (Neo)Vimにおける基本的なF#のサポート

<a id="performance-analysis"></a>
### パフォーマンス解析

- [fasm](https://github.com/d-edge/fasm) - F# JITディスアセンブラー（.netツールとして）

<a id="general-purpose-libraries"></a>
## 汎用ライブラリ

- [Aether](https://github.com/xyncro/aether) - F#用のOpticsライブラリ（HaskellのData.Lensパッケージに類似）
- [Chessie](https://github.com/fsprojects/Chessie) - レール指向プログラミング
- [Donald](https://github.com/pimbrouwers/Donald) - ADO.NET用のシンプルなF#インターフェース
- [DustyTables](https://github.com/Zaid-Ajaj/DustyTables) - ms sql serverへのデータアクセスを容易にする、スリムなF# API（機能的な要素を上に追加）
- [ExtCore](https://github.com/jack-pappas/ExtCore) - F#の拡張されたコアライブラリ
- [FSharp.CosmosDb](https://github.com/aaronpowell/fsharp.cosmosdb) - CosmosDB SDKをF#でラップしたツール、より機能指向にしやすい
- [FSharp.HashCollections](https://github.com/mvkara/fsharp-hashcollections) - 高速ハッシュベースの不変マップとセット
- [FSharpLu](https://github.com/Microsoft/fsharplu) - 文字列操作、ログ記録、コレクションデータ構造、ファイル操作、テキスト処理、セキュリティ、非同期処理、パーサー、診断、設定ファイル、JSONシリアル化に必要な軽量ユーティリティ
- [FSharpPlus](https://github.com/gmpl/FSharpPlus) - F#用の拡張機能
- [FSharpx.Extras](https://github.com/fsprojects/FSharpx.Extras) - F#で使用するためのライブラリとツールのコレクション
- [Fli](https://github.com/CaptnCodr/Fli) - システムプロセスの実行とその出力を管理するための計算表現
- [Fling](https://github.com/cmeeren/Fling) - 複雑なドメインエンティティを複数のテーブルに効率的に保存・読み込みするために必要なボイラープレートを大幅に削減
- [FsToolkit.ErrorHandling](https://github.com/demystifyfp/FsToolkit.ErrorHandling) - チェスリーにインスパイアされた、明確でシンプルかつ強力なエラー処理（レールオリエンテッドプログラミング）
- [Fumble](https://github.com/tforkmann/Fumble) - SQLiteへの軽量F# API。機能的なアプローチでSQLiteデータベースへのアクセスを容易に。
- [LiteDB.FSharp](https://github.com/Zaid-Ajaj/LiteDB.FSharp) - F#用の（.NET用の埋め込みシングルファイルデータベース）サポート [LiteDB](https://github.com/mbdavid/LiteDB)
- [Npgsql.FSharp](https://github.com/Zaid-Ajaj/Npgsql.FSharp) - [Npgsql](https://github.com/npgsql/npgsql)（PostgreSQLデータベースドライバー）への軽量F#ラッパー
- [SqlHydra](https://github.com/JordanMarr/SqlHydra) - F#でデータベース操作を行うためのNuGetパッケージのセット。クエリ表現とコード生成ツール（データベーステーブルに基づいて強型F# DTOレコード型を生成）を提供。MySQL、PostgreSQL、Oracle、SQL Server、SQLiteに対応。
- [TypeShape](https://github.com/eiriktsarpalis/TypeShape) - 実用的なジェネリックプログラミングに最適な小さな、拡張性の高いF#ライブラリ
- [Validus](https://github.com/pimbrouwers/Validus) - F#用の組み立て可能なバリデーションライブラリ。ほとんどのプリミティブ型に内蔵されたバリデーターを提供し、カスタムバリデーターで簡単に拡張可能
- [Vp.FSharp.Sql](https://github.com/veepee-oss/Vp.FSharp.Sql) - ジェネリックF# ADOプロバイダーラッパー（SQL Server、PostgreSQL、SQLite）

<a id="game-development"></a>
## ゲーム開発

- [FsUnity](https://github.com/FsUnity) - Unityゲームエンジン用のF#ライブラリ、ツール、プラグイン
- [Garnet](https://github.com/bcarruthers/garnet) - エンティティ・コンポーネント・システム（ECS）およびアクターのようなメッセージ機能を備えた軽量ゲーム構成ライブラリ
- [Godot](https://www.lkokemohr.de/fsharp_godot.html) - F#とGodotを使用する方法に関するチュートリアル
- [Nu Game Engine](https://github.com/bryanedds/Nu) - 機能的なスタイルで構築されたクロスプラットフォームF# 2Dゲームエンジン。SDL2とFarseer Physicsを使用。

<a id="gui"></a>
## GUI

- [Avalonia.FuncUI](https://github.com/fsprojects/Avalonia.FuncUI) - F#とAvaloniaを使ってクロスプラットフォームMVU GUIアプリケーションを開発可能
- [Elmish.WPF](https://github.com/elmish/Elmish.WPF) - WPFプログラミングにおけるElmish（またはMVU）アプローチ
- [Epoxy](https://github.com/kekyo/epoxy) - NET向けの独立した柔軟なXAML MVVMライブラリ
- [Fabulous](https://github.com/fabulous-dev/Fabulous) - F#による宣言型動的UIアプリ開発


<a id="http-clients"></a>
## HTTP クライアント

- [FsHttp](https://github.com/ronaldschlenker/FsHttp) - F#でHTTP/RESTエンドポイントを消費するための便利なライブラリ
- [Http.fs](https://github.com/haf/Http.fs) - F#向けのシンプルで機能的なHTTPクライアントライブラリ
- [Oryx](https://github.com/cognitedata/oryx) - 高パフォーマンスな.NET対応マルチプラットフォーム機能型HTTPリクエストハンドラライブラリ。HTTPクライアントの作成やWebリクエストのオーケストレーションに使用。

<a id="logging"></a>
## ロギング

- [FsLibLog](https://github.com/TheAngryByrd/FsLibLog) - F#ライブラリにログ抽象を提供する、コピー＆ペースト可能またはPaket GitHub依存関係として追加できる1ファイルのライブラリ
- [Logary](https://github.com/logary/logary/) - monoおよび.NET向けの高パフォーマンス、マルチターゲットログ、メトリクス、トレース、ヘルスチェックライブラリ

<a id="package-management"></a>
## パッケージ管理

- [NuGet](https://www.nuget.org/) - Microsoft開発プラットフォーム（.NETを含む）向けのパッケージマネージャー
- [Paket](https://github.com/fsprojects/Paket) - NuGetパッケージおよびGitリポジトリをサポートする.NET向けの依存関係マネージャー

<a id="parsing"></a>
## 構文解析

- [FParsec](https://github.com/stephan-tolksdorf/fparsec) - F#向けのパーサーコンビネータライブラリ
- [FsAttoparsec](https://github.com/haf/FsAttoparsec) - HaskellのBryan O'SullivanのattoparsecをF#に移植したパーサー
- [XParsec](https://github.com/corsis/XParsec) - F# 3.0および4.0向けの拡張性があり、型およびソースにポリモーフィックで非線形な適用型パーサーコンビネータライブラリ

<a id="serialization"></a>
## シリアライズ

- [FSharp.Json](https://github.com/vsapronov/FSharp.Json) - 反射ベースのシリアライズライブラリ
- [FSharp.SystemTextJson](https://github.com/Tarmil/FSharp.SystemTextJson) - System.Text.Json向けのF#型拡張
- [Fleece](https://github.com/mausch/Fleece) - F#向けのJSONマッパー。JSONライブラリのJsonValueからあなたの型へ、そしてあなたの型からJsonValueへマッピングを簡便にします。
- [FsCodec](https://github.com/jet/FsCodec) - F#のイベント・ユニオン契約のバージョン対応可能なコンバーター付きエンコーディング
- [FsPickler](https://github.com/mbraceproject/FsPickler) - .NET向けの高速かつマルチフォーマットメッセージシリアライザ
- [Legivel](https://github.com/fjoppe/Legivel) - F# Yaml 1.2パーサー
- [Thoth.Json](https://thoth-org.github.io/Thoth.Json/) - Elmをインスピレーションとして設計されたJSONエンコーダ／デコーダライブラリ


<a id="simulation"></a>
## シミュレーション

- [F# RISC-V Instruction Set formal specification](https://github.com/mrLSD/riscv-fs) - RISC-V CPUの形式的なISA仕様。RISC-V CPUシミュレータおよびELFファイルの実行

<a id="static-site-generators"></a>
## 静的サイトジェネレーター

- [SkunkHTML](https://github.com/mg0x7BE/skunk-html) - GitHub Pages で利用可能なマーカードブログ

<a id="testing"></a>
## テスト

- [Expecto](https://github.com/haf/expecto) - F# 用のスムーズなテストフレームワーク（テストを値として扱い、並列実行をデフォルトで提供）
- [Faqt](https://github.com/cmeeren/Faqt) - F# のテストとドメインコードに最適なフリュイドなアサーション
- [FsCheck](https://github.com/fscheck/FsCheck) - .NET 用のランダムテスト
- [FsUnit](https://github.com/fsprojects/FsUnit) - F# でのユニットテストをより楽しいものに。あなたの好きな .NET テストフレームワークに特別な構文を追加。
- [NBomber](https://github.com/PragmaticFlow/NBomber) - プルおよびプッシュシナリオ向けのシンプルなロードテストフレームワーク
- [Persimmon](https://github.com/persimmon-projects/Persimmon) - F# 用の計算表現を用いたユニットテストフレームワーク
- [altcover](https://github.com/SteveGilham/altcover) - .NET/.NET Core および Mono 用のクロスプラットフォームカバレッジ収集および処理ツールセット
- [canopy](https://github.com/lefthandedgoat/canopy) - F# 用のウェブオートメーションおよびテストフレームドワーク
- [fsharp-hedgehog](https://github.com/hedgehogqa/fsharp-hedgehog) - F# 用のプロパティベーステストシステム
- [unquote](https://github.com/swensensoftware/unquote) - F# ユニットテストのアサーションをクォート表現として記述できる
- [xUnit.net](https://xunit.net/) - .NET フレームワーク向けの無料、オープンソース、コミュニティ中心のユニットテストツール


<a id="type-providers"></a>
## 型プロバイダー

- [AzureStorageTypeProvider](https://github.com/fsprojects/AzureStorageTypeProvider) - F# Azure タイププロバイダー。Blob、Table、Queue の Azure ストレージ資産を探索可能で、CRUD 操作を簡単に適用できる。
- [DynamicsCRMProvider](https://github.com/fsprojects/DynamicsCRMProvider) - Microsoft Dynamics CRM 2011 用のタイププロバイダー
- [EasyBuild.FileSystemProvider](https://github.com/easybuild-org/EasyBuild.FileSystemProvider) - プロジェクト構造または仮想ファイルシステムに基づき、ファイルとディレクトリの型を提供するタイププロバイダー
- [ExcelProvider](https://github.com/fsprojects/ExcelProvider) - Excel 用のタイププロバイダー
- [FSharp.Configuration](https://github.com/fsprojects/FSharp.Configuration) - プロジェクトの設定に必要なタイププロバイダーを提供。AppSettings、ResX、Yaml、Ini ファイルを処理。
- [FSharp.Data.Npgsql](https://github.com/demetrixbio/FSharp.Data.Npgsql) - よく知られた Npgsql ADO.NET クライアントライブラリの上に構築された F# タイププロバイダー ライブラリ
- [FSharp.Data.SqlClient](https://github.com/fsprojects/FSharp.Data.SqlClient) - F# 用の静的に型を指定した T-SQL コマンドパラメータおよび結果セットへのアクセスタイププロバイダー
- [FSharp.Data.Tdms](https://github.com/mettekou/FSharp.Data.Tdms) - F# 用の TDMS サポート
- [FSharp.Data.Toolbox](https://github.com/fsprojects/FSharp.Data.Toolbox) - FSharp.Dataに基づくさまざまなデータアクセスAPI向けのライブラリ。現在、Twitterユーザーおよびフィードへのアクセス用のTwitterタイププロバイダーと、SASデータセットファイルを読み込むためのSASタイププロバイダーを含む。
- [FSharp.Data.TypeProviders](https://github.com/fsprojects/FSharp.Data.TypeProviders) - `.edmx`ファイル、`.dbml`ファイル、WSDLサービス、ODataサービス、SQLデータベース向けのタイププロバイダーを含むライブラリ。
- [FSharp.Data](https://github.com/fsharp/FSharp.Data) - CSV、HTML、JSON、XML、WorldBankデータ向けのタイププロバイダーを含むデータサイエンスライブラリ。
- [FSharp.Management](https://github.com/fsprojects/FSharp.Management) - マシンの管理に必要なさまざまなタイププロバイダーを提供。ファイルシステム、レジストリ、Windows管理インストルメンテーション、PowerShell、SystemTimeZonesを扱う。
- [FSharp.Text.RegexProvider](https://github.com/fsprojects/FSharp.Text.RegexProvider) - 正規表現向けのタイププロバイダー。
- [Facil](https://github.com/cmeeren/Facil) - SQLクエリおよびストアドプロシージャからF#データアクセスソースコードを生成する。
- [FsXaml](https://github.com/fsprojects/FsXaml) - XAMLプロジェクトとの作業に必要なF#ツール。
- [FsYaml](https://github.com/bleis-tift/FsYaml) - F#向けのタイプ付きYamlライブラリ。
- [GraphProvider](https://github.com/fsprojects/GraphProvider) - `.dgml`ステートマシンタイププロバイダー。
- [MatDataProvider](https://github.com/fsprojects/matprovider) - `.mat`ファイル（バイナリMATLAB形式ファイル）向けのエラストタイププロバイダー。
- [R Type Provider](https://github.com/BlueMountainCapital/FSharpRProvider) - Rとの相互作用に必要なタイププロバイダー。
- [Rezoom.SQL](https://github.com/rspeele/Rezoom.SQL) - F#向けの静的型SQL。
- [S3Provider](https://github.com/fsprojects/S3Provider) - Amazon S3向けの実験的タイププロバイダー。
- [SQLProvider](https://github.com/fsprojects/SQLProvider) - 一般的なF#SQLデータベースエラストタイププロバイダー。LINQクエリ、スキーマ探索、個体、CRUD操作など、さらに多くの機能をサポート。
- [SwaggerProvider](https://github.com/fsprojects/SwaggerProvider) - Swagger向けの生成タイププロバイダー。

<a id="creating-type-providers"></a>
### 型プロバイダーの作成

- [FSharp.TypeProviders.StarterPack](https://github.com/fsprojects/FSharp.TypeProviders.StarterPack) - F#タイププロバイダーを作成するProvidedTypes SDK。

<a id="visualization"></a>
## 可視化

- [FSharp.Charting](https://github.com/fslaborg/FSharp.Charting) - インタラクティブF#スクリプティングに適したチャートングライブラリ。
- [GG.Net](https://github.com/pablofrommars/GGNet) - データサイエンティスト向けのビジュアライゼーションライブラリ。
- [Plotly.NET](https://github.com/plotly/Plotly.NET) - F#向けのPlotlyベースの汎用プロットライブラリ。
- [SharpVG](https://github.com/ChrisNikkel/SharpVG) - F#でSVGベクターグラフィックスを作成する。
- [XPlot](https://github.com/fslaborg/XPlot) - F#プログラミング言語用のプロットライブラリ。

<a id="web-frameworks"></a>
## ウェブフレームワーク

- [Bolero](https://github.com/fsbolero/Bolero/) - WebAssembly上でF#を使用し、.NET Blazorの全機能を活かしたSPAsを開発。
- [Falco](https://github.com/pimbrouwers/Falco/) - F#を使って素晴らしいASP.NET Coreアプリケーションを構築するための、関数型を第一に考えるツールキット。
- [Felicity](https://github.com/cmeeren/Felicity) - ボイラープレートなし、自然なJSON:API。あなたの美しい、自然なF#ドメインモデルに最適化。
- [Feliz](https://github.com/Zaid-Ajaj/Feliz) - FableでReact APIを再構築し、F#でReactアプリケーションを構築するための高品質なコンポーネントのコレクション。
- [Genit](https://github.com/lefthandedgoat/genit) - F#、SuaveおよびPostgreSQLまたはMS SQL Serverを用いた、プラットフォームを越えたウェブサイトジェネレーターおよびサーバー。
- [Giraffe](https://github.com/giraffe-fsharp/Giraffe) - F#開発者向けのネイティブな関数型ASP.NET Coreウェブフレームワーク。
- [Oxpecker](https://github.com/Lanayx/Oxpecker) - ASP.NET Coreに基づくF#フレームワーク＋サポートツール（ViewEngine、Htmx、OpenApi）。
- [Saturn](https://github.com/SaturnFramework/Saturn) - F#用の意見を反映したウェブ開発フレームワークで、サーバーサイドの関数型MVCパターンを実装。
- [Suave](https://github.com/SuaveIO/suave) - シンプルなウェブ開発F#ライブラリ。軽量なウェブサーバーと、ルートフローおよびタスク構成を操作するコンビネータを提供。
- [WebSharper](https://github.com/intellifactory/websharper) - F#ベースのウェブプログラミングプラットフォーム。F#コードからJavaScriptへのコンパイラを含む。


<a id="net-core-templates"></a>
## .NET Core テンプレート

- [ASP.NET Core WebAPI F# Template](https://github.com/MNie/FSharpNetCoreWebApiTemplate) - `dotnet new -i WebAPI.FSharp.Template::*`
- [Expecto Template](https://github.com/MNie/Expecto.Template) - `dotnet new -i Expecto.Template::*`
- [Fable, F# |> Babel](http://fable.io) - `dotnet new -i Fable.Template::*`
- [Fable-elmish](https://github.com/fable-compiler/fable-elmish) - `dotnet new -i Fable.Template.Elmish.React::*`
- [Giraffe Template](https://github.com/giraffe-fsharp/giraffe-template) - `dotnet new -i "giraffe-template::*"`
- [MiniScaffold](https://github.com/TheAngryByrd/MiniScaffold) - .NETフル（net45）およびコア（netstandard1.6）をターゲットとするライブラリの作成・公開用のF#テンプレート、`dotnet new -i MiniScaffold::*`
- [NancyFx Template](https://github.com/MNie/NancyFxCore) - `dotnet new -i NancyFx.Core.Template::*`
- [SAFE Stack Template](https://github.com/SAFE-Stack/SAFE-template) - `dotnet new -i SAFE.Template::*`


<a id="resources"></a>
## リソース

<a id="blogs"></a>
### ブログ

- [.NET Blog (F# tag)](https://devblogs.microsoft.com/dotnet/tag/f/) - .NETチームによるF#に関するニュースとディスカッション。
- [Codesuji](https://codesuji.com) - F#に関する機能面を焦点にしたコミュニティメンバーのブログ
- [Krzysztof Cieslak](https://kcieslak.io/) - Ionideのメンテナーが運営するブログ
- [Mark Seemann](https://blog.ploeh.dk/) - ソフトウェア設計に関するさまざまな側面を議論するブログ
- [Sergey Tihon (F# Weekly)](https://sergeytihon.com/) - エコシステム全体から集めた週間ニュースレター
- [Tomas Petricek](http://tomasp.net/blog/) - 多くのテーマに取り組んでいる有名なコミュニティメンバー

<a id="books"></a>
### 書籍

- [Domain Modeling Made Functional by Scott Wlaschin](https://pragprog.com/titles/swdddf/domain-modeling-made-functional/) - ドメインドリブンデザインとF#を用いてソフトウェアの複雑性を克服
- [F# in Action by Isaac Abraham](https://www.manning.com/books/f-sharp-in-action) - F#におけるソフトウェア開発の実用ガイド

<a id="cheatsheets"></a>
### チートシート

- [F# Snips](https://fssnip.net/) - F#コードのスニペットを共有してください
- [F# cheatsheet](https://fsprojects.github.io/fsharp-cheatsheet/) - 主な言語機能に関する迅速な参照ガイド
- [F# tour](https://docs.microsoft.com/en-us/dotnet/articles/fsharp/tour) - マイクロソフトから提供される公式言語ツアー
- [Guide for C# devs to learn F#](https://github.com/knocte/2fsharp/blob/master/csharp2fsharp.md) - C#プログラマ向けの30分間のF#チュートリアル（連続したコードスニペット付き）
- [Guide for Python devs to learn F#](https://github.com/knocte/2fsharp/blob/master/python2fsharp.md) - Pythonプログラマ向けの30分間のF#チュートリアル（連続したコードスニペット付き）
- [Guide for Rust devs to learn F#](https://github.com/Dhghomon/rust-fsharp) - RustおよびF#のユーザーが読むことができる非公式マニュアル
- [Learn F# in Y minutes](https://learnxinyminutes.com/docs/fsharp) - F#でプログラミングを始めるためにおすすめされるガイド

<a id="community"></a>
### コミュニティ

- [Amplifying F#](https://amplifyingfsharp.io)
- [F# on BlueSky](https://bsky.app/hashtag/fsharp)
- [F# on Discord](https://discord.com/invite/fsharp-196693847965696000)
- [F# on Discourse](https://forums.fsharp.org/)
- [F# on Reddit](https://www.reddit.com/r/fsharp/)
- [F# on Telegram](https://t.me/fsharp_chat)
- [F# on Twitter](https://x.com/hashtag/fsharp)

<a id="other-lists"></a>
### その他のリスト

- [Awesome .NET!](https://github.com/quozd/awesome-dotnet) - 素晴らしい.NETライブラリ、ツール、フレームワーク、ソフトウェアのコレクション
- [Companies using F#](https://github.com/fsprojects/fsharp-companies) - F#を活用している企業のコミュニティがキュレーションしたリスト（就職を考えているなら役立つかもしれません）
- [F# Community Projects](http://fsharp.org/community/projects/) - F#コミュニティが生成したすべてのコンテンツ
- [Fable Resources](https://fable.io/resources.html) - Fableに関連する有用なチュートリアル・ライブラリ・ソフトウェアをキュレーションしたリスト

<a id="websites"></a>
### ウェブサイト

- [Community for F#](http://c4fsharp.net/) - ドジョー（dojo）やコミュニティ発表の録画へのリンク
- [Decompiler.com](https://www.decompiler.com/) - オンラインC#/VB/F#デコンパイラ
- [DotNetFiddle](https://dotnetfiddle.net/) - オンラインREPL
- [F# Software Foundation](http://fsharp.org/) - メインサイト
- [F# for Fun and Profit](https://fsharpforfunandprofit.com/) - 参照チュートリアル
- [SharpLab](https://sharplab.io/) - C#/VB/F# コンパイラ プレイヤー
- [Try F#](https://try.fsharp.org/) - オンラインチュートリアル、現在はスリーバイト依存のためコード実行が不可
- [cs2fs](https://jindraivanek.gitlab.io/cs2fs-online) - C#コードをF#コードに変換
- [fantomas-tools](https://fsprojects.github.io/fantomas-tools) - Fantomas関連ツールの一覧（ASTビュー、オンラインバグ報告など）

<a id="videos"></a>
### 動画

- [Amplifying F# YouTube Channel](https://www.youtube.com/@amplifyingfsharp)
- [F# Online YouTube Channel](https://www.youtube.com/@fonline6018)
- [Austin F# Meetup Group Recorded Presentations](http://usergroup.tv/videos/category/group/austin-f-meetup)
- [F# Chats on performance](https://www.youtube.com/watch?v=EIBRoNEpg6c&list=PLqWncHdBPoD4O1sr2Q3W9gAuJ30s09U2r)
- [Fast Dictionary in F#](https://www.youtube.com/watch?v=KMR2y1vcO-s&list=PLqWncHdBPoD4-d_VSZ0MB0IBKQY0rwYLd)
- [Intro to F#](https://www.youtube.com/watch?v=1ioGr701c5Q&list=PLqWncHdBPoD4YEWoXQlRj1tiTc96HZxH8)
- [Topological Sort](https://www.youtube.com/playlist?list=PLqWncHdBPoD5hEK31CcfmTHP-7icw2Xd0)

<a id="courses"></a>
### コース

- [Write yourself a scheme in 48 hours using F#](https://write-yourself-a-scheme.pangwa.com/)
