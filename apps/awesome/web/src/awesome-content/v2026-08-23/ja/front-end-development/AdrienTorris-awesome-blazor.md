---
title: Awesome Blazor
description: >-
  サーバー側、WebAssembly、ハイブリッドの.NETアプリ向けのBlazorコンポーネント、
  ライブラリ、テンプレート、サンプルアプリ、開発ツール、学習資料。

licenseSource: github-AdrienTorris-awesome-blazor-readme-md
---

# Awesome Blazor

BlazorはC#/RazorとHTMLを使って対話型の.NET Web UIを構築するフレームワークで、WebAssemblyによりブラウザー上で動作するアプリにも対応します。このリストでは、サーバー側、WebAssembly、ハイブリッドのアプリ向けのコンポーネント、ライブラリ、アプリのテンプレートとサンプル、開発ツール、学習資料を紹介します。

## はじめに <a id="introduction"></a>

### Blazorとは？ <a id="what-is-blazor"></a>

Blazorは、C#でクライアント側のWebアプリを構築する.NETのWebフレームワークです。

Blazorでは、JavaScriptの代わりにC#を使って対話型のWeb UIを構築できます。BlazorアプリはC#、HTML、CSSで実装した再利用可能なWeb UIコンポーネントで構成されます。クライアント側とサーバー側の両方をC#で記述することで、コードやライブラリを共有できます。
詳しくは[Blazor公式サイト](https://blazor.net)を参照してください。

### はじめる <a id="get-started"></a>

Blazorを使い始めるには、[Blazorの入門ドキュメント](https://docs.microsoft.com/aspnet/core/blazor/get-started)の手順に従ってください。

Microsoft Learnの[BlazorでWebアプリを構築する](https://docs.microsoft.com/en-us/learn/modules/build-blazor-webassembly-visual-studio-code/)学習コースも入門に利用できます。Jeff Fritzによる初心者向けシリーズは[Channel9](https://channel9.msdn.com/Series/Beginners-Series-to-Blazor)と[YouTube](https://www.youtube.com/playlist?list=PLdo4fOcmZ0oUJCA3DCzKT79Oe3kdKEceX)で公開されています。

## 一般情報 <a id="general"></a>
* [Awesome Blazor Browser](https://jsakamoto.github.io/awesome-blazor-browser/) - このリストの資料を検索できるツール。[ソースコード](https://github.com/jsakamoto/awesome-blazor-browser)。
* [ASP.NETブログのアーカイブ](https://devblogs.microsoft.com/aspnet/category/blazor/) - Blazorに関するASP.NETブログの記事アーカイブ。
* [Blazor](https://dotnet.microsoft.com/apps/aspnet/web-apps/client) - MicrosoftによるBlazor公式サイト。
* [Microsoft LearnのBlazor講座](https://docs.microsoft.com/learn/browse/?expanded=dotnet%2Cazure%2Csurface&products=dotnet%2Cwindows&roles=developer&terms=blazor) - Microsoft Learnで提供されているBlazorの講座。
* [.NET FoundationのBlazor-Devギャラリー](https://dotnet.myget.org/gallery/blazor-dev) - Blazorのdevブランチの日次ビルド。
* [Blazor Extensions](https://github.com/BlazorExtensions) - Microsoft ASP.NET Core Blazor向けに選定された拡張機能集。
* [Blazor University](http://blazor-university.com/) - 非公式のドキュメントサイト。
* [デモ](https://blazor-demo.github.io/) - 公式の基本的なデモサイト。
* [ドキュメント](https://docs.microsoft.com/aspnet/core/blazor) - Microsoftによる公式ドキュメント。
* [eShop](https://github.com/dotnet/eShop) - .NETのEC参照アプリ。原文ではこのリンクをeShopOnBlazorとしているが、Web FormsからBlazorへの移行サンプルは、別の項目として以下に掲載している。
* [よくある質問](https://github.com/aspnet/Blazor/wiki/FAQ) - よくある質問。
* [GitHubリポジトリ](https://github.com/dotnet/aspnetcore) - Blazorの公式リポジトリ。ASP.NET Coreリポジトリに含まれる。
* [ASP.NET Core入門](https://docs.microsoft.com/aspnet/core/) - ASP.NET Coreの入門資料。
* [Blazor WebAssemblyの性能に関する推奨事項](https://docs.microsoft.com/aspnet/core/blazor/webassembly-performance-best-practices) - Pranav KrishnamoorthyとSteve Sandersonによる、ASP.NET Core Blazor WebAssemblyの性能に関する推奨事項。
* [themesof.net](https://themesof.net/) - .NET 6の計画策定に関するサイト。

## テンプレート <a id="templates"></a>
* [BitPlatform Templates](https://github.com/bitfoundation/bitplatform) - .NET MAUIとBlazorを使い、Web、Android、iOS、Windows向けのクロスプラットフォーム開発を行うソリューションテンプレート。ネイティブのBlazorコンポーネントを備える。原文では、迅速で高品質な開発のための推奨事項を取り入れ、コンポーネントの外観も洗練されたテンプレートとして紹介されている。生成されるプロジェクトには、CI/CDパイプライン、Azure向けのInfrastructure as Code、ローカライズ、Blazor Server/WASM/Hybridへの対応、組み込みの例外処理が含まれる。例外処理は原文で堅牢と説明されている。[詳細](https://bitplatform.dev/)。
* [BlazorSwa Template](https://github.com/albx/BlazorSwa.Template) - Azure Static Web AppsへデプロイできるBlazorプロジェクトと、バックエンド用のAzure Functionsプロジェクトを作成する.NET CLIテンプレート。
* [Clean Architecture with Blazor Server](https://github.com/neozhu/CleanArchitectureWithBlazorServer) - MudBlazorとクリーンアーキテクチャの考え方を採用したテンプレート。
* [CleanAspire](https://github.com/neozhu/cleanaspire) - スケーラビリティとオフライン対応を備えた、Aspireを基盤とするクラウドネイティブなテンプレート。.NET 9 Minimal APIsとBlazor WebAssemblyを使って、クラウド環境向けのプログレッシブWebアプリ（PWA）を構築する。原文では、その基盤を軽量で高速と説明している。

## サンプルプロジェクト <a id="sample-projects"></a>
### AI
* [Cledev.OpenAI](https://github.com/lucabriguglia/Cledev.OpenAI) - Blazor Serverの実験用画面を備えた、OpenAI向けの.NET 7 SDK。
* [ExplainFaceRecognition](https://github.com/georg-jung/explain-face-rec) - Blazor ServerとHybrid向けの実際に試せるコード例を含む、対話型の顔検出・顔認識チュートリアル。ローカルで動作する顔認識AIを紹介しており、原文では最先端と説明されている。
### 認証 <a id="authentication"></a>
* [BlazorBoilerplate](https://github.com/enkodellc/blazorboilerplate) - IdentityServer4とMaterial Designを採用した、実用アプリ向けの管理ダッシュボードとスターターキット。[デモ](https://blazorboilerplate.com)。
* [TheIdServer](https://github.com/Aguafrommars/TheIdServer) - IdentityServer4を基盤とするOpenID Connectサーバー。
* [BlazorWithIdentity](https://github.com/stavroskasidis/BlazorWithIdentity) - EF CoreとIdentityによる認証を使うBlazorアプリのサンプルプロジェクト。
* [Blorc.OpenIdConnect](https://github.com/WildGums/Blorc.OpenIdConnect) - BlazorでOpenID Connectを使うためのガイド。原文では推奨する方法として紹介されている。
* [BlazorWasmOidcKeycloak](https://github.com/wildermedeiros/BlazorAppWasmAuth) - Microsoft IdentityとKeycloakによるOpenID Connect（OIDC）認証を使うBlazor WebAssemblyアプリ。
* [CodeBeam.UltimateAuth](https://github.com/CodeBeamOrg/UltimateAuth) - セッション、Cookie、トークンを1つのモデルに統合する.NET向けの認証フレームワーク。Blazor ServerとWebAssemblyアプリへの対応を標準で備える。[ドキュメント](https://ultimateauth.com)。
### CMS
* [Blogifier](https://github.com/blogifierdotnet/Blogifier) - .NET 5。Blazorの管理ダッシュボードを備えたASP.NET Coreのブログアプリ。[デモ](http://blogifier.net/blog)。
* [eShopOnBlazor](https://github.com/dotnet-architecture/eShopOnBlazor) - 従来のASP.NET Web FormsアプリをBlazorへ移行するサンプル。
* [FluentCMS](https://github.com/fluentcms/FluentCMS) - ASP.NET Core Blazorを使った、AI駆動のオープンソースのコンテンツ管理システム（CMS）。[FluentCMS](https://fluentcms.com/)。
* [JHipster.NET](https://github.com/jhipster/jhipster-dotnetcore) - モダンなJavaアプリを生成するプラットフォーム[JHipster](https://www.jhipster.tech/)向けのブループリント。[JHipster](https://www.jhipster.tech/)は、ジェネレーターの標準動作を変更できるブループリントの仕組みを提供する。JHipster.NETはSpring BootのバックエンドをASP.NET Coreに置き換える。フロントエンドにはAngular、React、Blazorを利用できる。
* [Oqtane](https://github.com/oqtane/oqtane.framework) - Blazorと.NET MAUI向けのCMSおよびアプリケーションフレームワーク。[Oqtane](https://www.oqtane.org)。
* [RapidCMS](https://github.com/ThomasBleijendaal/RapidCMS) - 独自のデータベース用のCMSを生成する、コードファーストで拡張可能なBlazorアプリ。
* [ZauberCMS](https://github.com/YodasMyDad/ZauberCMS) - Umbracoに着想を得た、カスタマイズ可能なプラグイン方式のBlazor CMS。原文では多機能と説明されている。
### ゲーム <a id="games"></a>
* [Trains.NET](https://github.com/davidwengier/Trains.NET) - .NETとC#を使って[Twitch配信](https://www.twitch.tv/davidwengier)で制作された2Dゲーム。[wengier.com/Trains.NET](https://wengier.com/Trains.NET)でオンラインプレイできる。
* [AsteroidsWasm](https://github.com/aesalazar/AsteroidsWasm) - 単一の.NET Standardプロジェクトを利用する.NET 8のC#アプリ集。Blazor Client（WebAssembly）、Blazor Server、Electron（Blazor Server経由）、WPF、WinForms、MAUI、WinUI 3で動作する。[デモ](https://aesalazar.github.io/AsteroidsWasm/)。
* [DiabloBlazor](https://github.com/n-stefan/diabloblazor) - DiabloWebをBlazorへ移植したもの。WebAssembly（C#）のPWAがWebAssembly（C++）のゲームをホストする、二重のWebAssemblyアプリ。[デモ](https://n-stefan.github.io/diabloblazor)。
* [Wolfenstein 3D ported to Blazor](https://github.com/JamesRandall/csharp-wolfenstein) - Wolfenstein 3DをモダンなC#とBlazorへ移植したもの。[記事](https://www.jamesdrandall.com/posts/csharp_blazor_wolfenstein_part_1/)。
* [ZXSpectrum](https://github.com/EngstromJimmy/ZXSpectrum) - Blazor WebAssembly上で動作するZX Spectrumエミュレーター。[デモ](https://zxspectrum.azurewebsites.net/)。
* [WordleBlazor](https://github.com/johnt84/WordleBlazorApp) - Blazorで作られた、人気のWordleゲームのシンプルなクローン。[デモ](https://wordleblazorapp.azurewebsites.net/)。
* [Blazor Puzzle #3 - File not found](https://github.com/BlazorPuzzle/Puzzle-3)
### ハイブリッド <a id="hybrid"></a>
* [Photino](https://github.com/tryphotino/photino.NET) - Web UI技術を使って、ネイティブでクロスプラットフォームなデスクトップアプリを構築する、軽量なオープンソースのフレームワーク。
* [Blazor + Umbraco Heartcore](https://github.com/umbraco/Umbraco.Headless.Client.Net/tree/master/samples/Umbraco.Headless.Client.Samples.BlazorServer) - Blazorで[Umbraco Heartcore](https://umbraco.com/products/umbraco-heartcore/)を使う例。
* [Blazor Wasm with ASP.NET Framework 4.x](https://github.com/elgransan/BlazorWasmWithNetFrameworkMVC) - いくつかの調整と制約のもとで、.NET Framework 4.xや別の環境上でBlazor WebAssemblyを動かすサンプル。[Mediumでの解説](https://medium.com/@santiagoc_33226/using-blazor-wasm-with-net-framework-mvc-or-another-old-external-site-7fc0884fcfca)。
* [RemoteBlazorWebView](https://github.com/budcribar/RemoteBlazorWebView) - BlazorWebViewのWPFコントロールまたはWinFormsコントロールで開発したプログラムのUIを、Webブラウザーから操作できるようにする。
* [BlazorInAngularDemo](https://github.com/Xenoage/BlazorInAngularDemo) - Angularのサービスメソッド呼び出しを含むBlazorコンポーネントを組み込み、既存のAngularアプリを段階的にBlazorへ移行する方法を示す。[デモ](https://xenoage.github.io/BlazorInAngularDemo/)。
### IDE
* [Picat Language IDE](https://github.com/andrzejolszak/picat-blazor-monaco-ide/) - Monaco Editorを基盤とする、[Picat論理プログラミング言語](http://picat-lang.org/)向けのIDE。[デモ](https://andrzejolszak.github.io/picat-blazor-monaco-ide/PicatBlazorMonaco/publish/wwwroot/)。
### IoT
* [PresenceLight](https://github.com/isaacrlevin/PresenceLight) - さまざまな状態をPhilips HueまたはLIFXの電球に伝えるソリューション。Microsoft Teamsでの在席状況、現在のWindows 10のテーマ、任意のテーマや色などを伝えられる。[ブログ記事](https://www.isaaclevin.com/post/presence-light)。[デモ動画](https://www.youtube.com/playlist?list=PL_IEvQa-oTVtB3fKUclJNNJ1r-Sxtjc-m)。
* [Meadow Weather](https://github.com/bradwellsb/blazor-meadow-weather) - MeadowマイクロコントローラーがLM35温度センサーのデータをポーリングするサンプル。データをHTTPリクエストでAPIコントローラーのエンドポイントへ送り、データベースへ保存して、Blazor Webアプリのグラフで表示する。
### 機械学習 <a id="machine-learning"></a>
* [スケーラブルな感情分析](https://github.com/dotnet/machinelearning-samples/tree/master/samples/csharp/end-to-end-apps/ScalableSentimentAnalysisBlazorWebApp) - ユーザーが入力した文章の感情を予測・検出する、対話型のクライアント側Blazor UIを備えたサンプル。サーバー側でML.NETの二値分類モデルを実行する。
* [optimizer.ml](https://github.com/jameschch/LeanParameterOptimization) - アルゴリズムのパラメーターを最適化する、汎用の「サーバーレス」ツール群。[Quantconnect Lean](https://github.com/QuantConnect/Lean)の取引アルゴリズムのオフライン最適化にも対応する。[デモ（https://optimizer.ml）](https://optimizer.ml)。
* [Baseball Machine Learning Workbench](https://github.com/bartczernicki/MachineLearning-BaseballPrediction-BlazorApp) - メモリ内の機械学習モデルでWhat-if分析を行う例を示すWebアプリ。[実動デモ](https://baseballmlworkbench-v1.azurewebsites.net)。
* [BlazorML5](https://github.com/sps014/BlazorML5) - JSInteropを使って、BlazorでML5の機械学習を利用するライブラリ。
### モバイル <a id="mobile"></a>
* [Mobile Blazor Bindings](https://aka.ms/mobileblazorbindings) - 実験的なMobile Blazor Bindings。Blazorでネイティブのモバイルアプリを構築する。
### 迅速な開発のためのフレームワーク <a id="rapid-development-framework"></a>
* [Oqtane](https://github.com/oqtane/oqtane.framework) - Blazorと.NET MAUI向けのCMSおよびアプリケーションフレームワーク。[Oqtane](https://www.oqtane.org)。
* [WalkingTec.Mvvm (WTM)](https://github.com/dotnetcore/WTM) - .NET CoreとEFを基盤とする開発フレームワーク。Blazor、Vue、React、LayUIに対応し、CRUDやインポート／エクスポートなどのコードをワンクリックで生成する。[Webサイト](https://wtmdoc.walkingtec.cn)。
### Todoアプリ <a id="todos"></a>
* [TodoApi by David Fowler](https://github.com/davidfowl/TodoApi) - .NET 7で作られたDavid FowlerのTodoアプリ。ASP.NET CoreがホストするBlazor WASMのフロントエンドと、Minimal APIsを使うASP.NET Core REST APIのバックエンドを備える。
* [ididit!](https://github.com/Jinjinov/Ididit) - 先延ばししがちな利用者にも使いやすいことを目指す習慣管理ツール。メモの作成、タスクの管理、習慣の記録ができる。[デモ](https://app.ididit.today/)。
* [OpenHabitTracker](https://github.com/Jinjinov/OpenHabitTracker) - Web、Windows、Linux、Android、iOS、macOS向けの、無料でオープンソースの習慣管理ツール。メモの作成、タスクの計画、習慣の記録ができる。[デモ](https://pwa.openhabittracker.net)。
### その他 <a id="others"></a>
* [CleanArchitecture](https://github.com/blazorhero/CleanArchitecture) - MudBlazorコンポーネントで構築された、Blazor WebAssembly向けのクリーンアーキテクチャのテンプレート。
* [BlazorSSR](https://github.com/danroth27/BlazorSSR) - Steve Sandersonによる、Blazorコンポーネントを使うサーバー側レンダリング（SSR）のサンプル。
* [Flight Finder](https://github.com/aspnet/samples/tree/master/samples/aspnetcore/blazor) - Flight Finder。
* [LinqToTwitterのBlazorサンプル](https://github.com/JoeMayo/LinqToTwitter/tree/main/Samples/LinqToTwitter5/net48/CSharp/AspNetSamples/BlazorDemo) - Twitter API向けのLINQプロバイダー（Twitterライブラリ）のサンプル。
* [BlazorFileReader](https://github.com/Tewr/BlazorFileReader) - Blazorで読み取り専用のファイルストリームを扱うライブラリ。[デモ](https://tewr.github.io/BlazorFileReader/)。
* [eShopOnBlazor](https://github.com/dotnet-architecture/eShopOnBlazor) - 従来のASP.NET Web FormsアプリをBlazorへ移行するサンプル。
* [BlazorChatSample](https://github.com/conficient/blazorchatsample) - JavaScriptのSignalRクライアントを相互運用で使うBlazorのチャットデモ。
* [Blazor.SVGEditor](https://github.com/KristofferStrube/Blazor.SVGEditor) - Blazor WASMで記述された、基本的なHTML SVGエディター。
* [Netflix microfrontend like](https://github.com/piral-samples/netflix-demo) - Piralで複数のマイクロフロントエンドから成る動的アプリを構築する例を示す、piletを使ったNetflix風のポータルアプリ。[デモ](https://notflix-demo.samples.piral.cloud/browse)。
* [David FowlerによるCommand and Control](https://github.com/davidfowl/CommandAndControl) - Blazor ServerとSignalRによるコマンド送信・制御のサンプル。エージェントはSignalR HubをホストするBlazor Serverアプリに接続する。接続したエージェントに、クライアントの実行結果を返す機能を使ってコマンドを送信できる。
* [BlazorCRUD](https://github.com/thbst16/BlazorCrud) - Blazorの主要な機能を示す業務アプリのサンプル。[デモ](https://becksblazor.azurewebsites.net/)。
* [Money](https://github.com/maraf/Money) - CQRS+ESで実装された資金管理アプリ。[デモ](https://app.money.neptuo.com/)。
* [Blazor.SVGEditor](https://github.com/KristofferStrube/Blazor.SVGEditor) - Blazor WASMで記述された、基本的なHTML SVGエディター。[デモ](https://kristofferstrube.github.io/Blazor.SVGEditor/)。
* [FFmpegBlazor](https://github.com/sps014/FFmpegBlazor) - Blazor WebAssemblyのC#からffmpeg.wasmを利用するライブラリ。[ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)はFFmpegをWebAssembly/JavaScriptへ移植したもので、ブラウザー内で動画・音声の録画や録音、変換、ストリーミングを行える。
* [Blazor.MediaCaptureStreams](https://github.com/KristofferStrube/Blazor.MediaCaptureStreams) - ブラウザーのMedia Capture and Streams APIを包むBlazor向けのラッパー。このAPIはマイクやビデオカメラなどのローカルなマルチメディア機器へのアクセス要求を標準化する。メディアストリームのデータをどこで利用するか制御し、データを生成する機器の情報や設定を扱うMediaStream APIも含む。このプロジェクトは、ブラウザーのメディアストリームを操作しやすくするBlazor用ラッパーを実装しており、原文ではその操作を容易で安全と説明している。[デモ](https://kristofferstrube.github.io/Blazor.MediaCaptureStreams/)。
* [Planning Poker](https://github.com/duracellko/planningpoker4azure) - 分散したチームでプランニングポーカーを行うアプリ。Blazorで実装されており、設定変更によってクライアント側とサーバー側の実行モードを切り替える方法を示す。[デモ](http://planningpoker.duracellko.net)。
* [C# Regex Tester online](https://github.com/lsvhome/regex-tester) - .NETの正規表現の構文を確認するオンラインツール。[デモ](https://lsvhome.github.io/regex-tester/)。
* [C# Regex Online tool](https://github.com/MichaelSL/blazor-wasm-test-012020) - .NETの正規表現の構文を確認し、分割結果、一覧、表を表示するオンラインツール。[デモ](https://dotnet-regex.com/)。
* [Blazor Tour of Heroes](https://github.com/georgemathieson/blazor-tour-of-heroes) - Blazor Tour of Heroes。
* [Blazor Wake-on-LAN](https://github.com/georg-jung/BlazorWoL) - ローカルネットワーク向けのWake-on-LANアプリ。Blazor Server、EF Core、DI、CIを使用する。
* [BlazingWaffles](https://github.com/gbiellem/BlazingWaffles) - [Waffle Generator](https://github.com/SimonCropp/WaffleGenerator)を包むBlazorアプリ。ジェネレーターは、Lorem Ipsumの代わりに使える、読めるが意味を持たない文章を生成する。[デモ](http://wafflegen.azurewebsites.net/)。
* [非公式eShopOnContainers](https://github.com/n-stefan/eshoponcontainers) - [eShopOnContainers](https://github.com/dotnet-architecture/eShopOnContainers)向けの非公式Blazor WebAssemblyクライアント。
* [BlazorAndTailwind](https://github.com/tesar-tech/BlazorAndTailwind) - Blazorで[TailwindCSS](https://tailwindcss.com/)を設定するためのサンプルプロジェクト、ガイド、ヒント。
* [Viz.js向けBlazorViz相互運用ラッパー](https://github.com/mrzhdev/BlazorViz) - Graphviz DOT言語のファイルを生成し、木構造のデータを可視化するサンプル。[デモ](https://mrzhdev.github.io/BlazorViz/)。
* [BlazorServerImageRecognitionApp](https://github.com/johnt84/BlazorServerImageRecognitionApp) - ユーザーがアップロードした画像内の文字を画像認識で特定・抽出する、シンプルなBlazor Serverアプリ。[デモ](https://blazorimagerecognitionapp.azurewebsites.net/)。
* [FootballBlazorApp](https://github.com/johnt84/FootballBlazorApp) - 試合日程と結果、グループ順位、チームと選手を表示し、選手検索を備えるシンプルなサッカーのBlazor Server Webアプリ。[デモ](https://premierleagueblazorapp.azurewebsites.net/)。
* [ComponentBuilder](https://github.com/AchievedOwner/ComponentBuilder) - `RenderTreeBuilder`でBlazorコンポーネントを作成するための自動化フレームワーク。
* [Pointing Party](https://github.com/martijn/PointingParty) - Blazor WebAssemblyとSignalRを使い、分散したチームでアジャイル開発のストーリーポイント見積もりを行うツール。[デモ](https://pointingparty.com)。
* [SaveHere](https://github.com/gudarzi/savehere) - 直接リンクやYouTube、Spotifyなどのメディアファイルに対応したクラウドダウンロードマネージャー。メディア変換機能と、制限を回避するための組み込みプロキシを備える。

## チュートリアル <a id="tutorials"></a>
* [Blazorワークショップ](https://github.com/dotnet-presentations/blazor-workshop/) - Blazing Pizzaアプリを題材とする、[.NET Foundation](https://www.dotnetfoundation.org/)によるBlazorアプリ構築ワークショップ。
* [Coding After WorkによるNextTechEvent](https://www.youtube.com/watch?v=Z2EZXY6G5ZU) - 登壇者、主催者、参加者が次の技術イベントを探すためのサイト「NextTechEvent」を構築する教材。[ソースコード](https://github.com/CodingAfterWork/NextTechEvent)。
* [アーカイブ](https://github.com/AdrienTorris/awesome-blazor/tree/master/Archives) - [2021](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2021.md#tutorials)、[2020](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2020.md#tutorials)、[2019](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2019.md#tutorials)、[2018](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2018.md#tutorials)のアーカイブ。

## ライブラリと拡張機能 <a id="libraries--extensions"></a>
*ボタン、入力、グリッドなどの再利用可能なコンポーネント。[Blazorコンポーネント集の機能比較表](https://github.com/AdrienTorris/awesome-blazor/blob/master/Component-Bundle-Comparison.md)も参照してください。*
### コンポーネント集 <a id="component-bundles"></a>
* [FAST](https://github.com/microsoft/fast) - MITライセンス。Web ComponentsとモダンなWeb標準を基盤とする技術群。Webサイトやアプリの設計・開発でよく生じる課題に効率的に対処することを目指している。[FASTとBlazorのドキュメント](https://www.fast.design/docs/integrations/blazor/)。
* [Blazor Blueprint](https://github.com/blazorblueprintui/ui) - shadcn/uiに着想を得たBlazorコンポーネントライブラリ。原文には、75以上のスタイル付きコンポーネント、15のヘッドレスな基本部品、1,640以上のアイコンが記載されている。自由に制御できるスタイルなしの基本部品と、迅速な開発に使えるスタイル設定済みコンポーネントの二層構造を採用する。shadcn/uiやtweakcnの既存shadcnテーマに対応する。[ドキュメントとデモ](https://blazorblueprintui.com)。
* [BootstrapBlazor](https://github.com/dotnetcore/BootstrapBlazor) - BootstrapとBlazorを基盤とする、企業向けのUIコンポーネント集。[デモを兼ねたドキュメント](https://www.blazor.zone/)。
* [Ant Design Blazor](https://github.com/ant-design-blazor/ant-design-blazor) - Ant DesignとBlazorを基盤とする、企業向けのUIコンポーネント集。[デモを兼ねたドキュメント](https://ant-design-blazor.github.io/)。
* [MudBlazor](https://github.com/MudBlazor/MudBlazor) - 使いやすさと明確な構造を重視した、Blazor向けのMaterial Designコンポーネントフレームワーク。全体がC#で記述されており、.NET開発者がフレームワークを調整、修正、拡張したり、CSSやJavaScriptを直接扱う作業を減らしてWebアプリを構築したりできる。ドキュメントには学習用の例が含まれる。[ドキュメント](https://mudblazor.com/)。[デモ](https://try.mudblazor.com/)。
* [MatBlazor](https://github.com/SamProf/MatBlazor) - Material Design仕様に沿って、一般的な操作パターンを実装するコンポーネント群。[ドキュメントとデモ](https://www.matblazor.com/)、[MatBlazorを使ったボイラープレート](https://github.com/enkodellc/blazorboilerplate)。
* [Blazorise](https://github.com/Megabit/Blazorise) - Bootstrap、Bulma、AntDesign、Material CSSに対応するBlazorコンポーネント。[Bootstrapのデモ](https://bootstrapdemo.blazorise.com/)、[Bulmaのデモ](https://bulmademo.blazorise.com/)、[AntDesignのデモ](https://antdesigndemo.blazorise.com/)、[Materialのデモ](https://materialdemo.blazorise.com/)。
* [MASA Blazor](https://github.com/BlazorComponent/MASA.Blazor) - Material DesignとBlazorを基盤とする企業向けのUIコンポーネント集。原文では、Vuetifyを忠実に再現し、長期的なロードマップを持つと説明されている。MASAチームが保守し、無料でオープンソースと紹介されている。[ドキュメント](http://blazor.masastack.com/)。[Proのデモ](https://blazor-pro.masastack.com/)。
* [Radzen.Blazor](https://github.com/akorchev/razor.radzen.com) - DataGrid、DataList、Tabs、Dialogなどを備えたBlazor用のネイティブUIコンポーネント。[デモ](https://razor.radzen.com/)。
* [BlazorStrap](https://github.com/chanan/BlazorStrap) - Blazor向けのMaterial DesignコンポーネントおよびBootstrap 4コンポーネント。[デモ](https://chanan.github.io/BlazorStrap/)。
* [BlazorBootstrap](https://github.com/vikramlearning/blazorbootstrap) - 1つのパッケージにまとめられた、レスポンシブなBlazor Bootstrapコンポーネント。原文では高性能で軽量と説明されている。[デモを兼ねたドキュメント](https://demos.blazorbootstrap.com/)。
* [FluentUI Blazor](https://github.com/microsoft/fluentui-blazor) - Microsoftの公式FluentUI Web ComponentsをBlazorで利用するためのライブラリ。[サンプルとデモ](https://www.fluentui-blazor.net/)。
* [Element-Blazor](https://github.com/Element-Blazor/Element-Blazor/blob/master/README.en.md) - Element UIを使うBlazorコンポーネントライブラリ。APIはElementに倣い、CSSはElementのスタイルを、HTML構造はElementの構造を直接利用する。[Blazor WebAssembly版のデモ](https://blazorwasm.github.io)。[Blazor WebAssembly版のPWAモードのデモ](https://pwawasm.github.io)。
* [ComponentOne Blazor UI Components](https://www.grapecity.com/componentone/blazor-ui-controls) - 外部リンク。サーバー側とクライアント側のアプリ向けのネイティブBlazorコンポーネント。データグリッド、リストビュー、入力コントロールを含む。原文ではデータグリッドを高速と説明している。
* [DevExpress Blazor UI Components](https://github.com/DevExpress/RazorComponents) - Blazorのサーバー側とクライアント側の両方に対応する、ネイティブUIコンポーネント集。Data Grid、Pivot Grid、Scheduler、Chartsを含む。
* [Syncfusion Blazor UI Components](https://www.syncfusion.com/blazor-components) - 原文で最も包括的と説明されている、ネイティブBlazorコンポーネントライブラリ。[データグリッド](https://www.syncfusion.com/blazor-components/blazor-datagrid)、[グラフ](https://www.syncfusion.com/blazor-components/blazor-charts)、[スケジューラー](https://www.syncfusion.com/blazor-components/blazor-scheduler)、[図](https://www.syncfusion.com/blazor-components/blazor-diagram)、[文書エディター](https://www.syncfusion.com/blazor-components/blazor-word-processor)などを含む。[デモ](https://blazor.syncfusion.com/demos/)。
* [Blazority](https://github.com/blazority/support) - Clarity UIのデザインを基盤とするBlazorコンポーネントライブラリ。原文には、DataGridとTreeViewを含む30以上のコンポーネントが記載されている。[ドキュメントとデモ](https://blazority.com)。
* [Material.Blazor](https://github.com/Material-Blazor/Material.Blazor) - [Googleのmaterial-components-web](https://github.com/material-components/material-components-web/tree/master/packages)のマークアップを直接利用し、抽象化層を挟まずにGoogleのCSSやSassを扱える、Material ThemeのRazorコンポーネントライブラリの1つ。追加の「plus」コンポーネントも含む。[デモと詳しいドキュメント](https://material-blazor.com)。
* [Majorsoft Blazor Components](https://github.com/majorimi/blazor-components) - Blazorアプリ向けのカスタマイズ可能なUIコンポーネントと拡張機能集。使いやすさと豊富な機能を目指している。原文では、すべてのコンポーネントが無料でNuGetから入手できると説明している。[NuGet](https://www.nuget.org/profiles/Blazor.Components)、[デモアプリ](https://blazorextensions.z6.web.core.windows.net/)、[ドキュメント](https://github.com/majorimi/blazor-components/tree/master/.github/docs)。
* [MComponents](https://github.com/manureini/MComponents) - MITライセンスのオープンソースBlazorコンポーネント。Grid、Select、Wizardなどを含む。
* [PanoramicData Blazor UI Components](https://github.com/panoramicdata/PanoramicData.Blazor) - Table、Tree、ToolBar、FileExplorerを含む、オープンソースのBlazorコンポーネントライブラリ。[デモ](https://panoramicdata.github.io/PanoramicData.Blazor)。
* [HAVIT Blazor](https://github.com/havit/Havit.Blazor) - Bootstrap 5コンポーネントと、それらを基盤とする追加コンポーネント。グリッド、入力候補の提示、メッセージボックスなどを含む。gRPCによるコードファーストなクライアント／サーバー通信やローカライズなどを備えた、企業向けのプロジェクトテンプレートも提供する。[操作できるドキュメントとデモ](https://havit.blazor.eu)。
* [Telerik UI for Blazor](https://www.telerik.com/blazor-ui) - 外部リンク（telerik.com）。グリッド、グラフ、カレンダーなどを備えた、Blazor用のネイティブUIコンポーネント集。
* [Start Blazoring](https://startblazoring.com) - [Blazorise](https://blazorise.com/)または[MudBlazor](https://mudblazor.com)を選んで利用できるBlazorスターターテンプレート。原文では、ほかのUIライブラリとの統合も計画されている。ユーザー登録、ログイン、パスワード再設定、二要素認証、ユーザー管理、ロールと権限、バックグラウンドワーカー、ログ、キャッシュ、メールテンプレート、ローカライズなどを備える。
* [TabBlazor](https://github.com/joadan/TabBlazor) - [Tabler UI](https://github.com/tabler/tabler)を基盤とするBlazor管理画面用テーマ。JavaScriptの使用は最小限に抑えられている。[デモ](https://joadan.github.io/TabBlazor/)。
* [Blazor.Ionic](https://github.com/kukks/Blazor.Ionic) - BlazorとIonicフレームワークを統合するライブラリ。
* [Blazor Controls Toolkit](https://blazorct.azurewebsites.net/) - 商用業務アプリ向けのツールキット。原文には、すべてのBootstrap JavaScriptコンポーネントに相当する部品、ウィジェットによる代替を備えたすべてのHTML5入力型、DataGrid、TreeView、DetailView、ModalDetail、DetailListなどの高度な編集可能コンポーネントが記載されている。各コンポーネントにはカスタマイズ可能な既定テンプレートがあり、仮想化とドラッグ＆ドロップに対応する。メタデータを基にレンダリングし、設定の一部を自動化できるほか、データアノテーションも利用できる。複雑なローカルまたはリモートクエリー、変更したレコードだけをサーバーへ送る変更追跡、高度な検証属性、グローバリゼーション、既存コンポーネントを変更する「Behaviors」、状態管理と保存のための機能も含む。
* [Blazor.WebForm.Components](https://github.com/Jurioli/Blazor.WebForm.Components) - ASP.NET Web FormsのSystem.Web.UI.WebControlsを、Blazor WebAssembly向けのRazorコンポーネントとして提供するライブラリ。[デモ](https://blazorwebformdemo.github.io/)。
* [BlazorOcticons](https://github.com/BlazorOcticons/BlazorOcticons) - GitHubの[Octicons](https://primer.style/octicons/)を、NuGetパッケージから利用できる`.razor`コンポーネントとして提供する。プロジェクトの[Webサイト](https://blazorocticons.net/)は、生成したコンポーネントの使用例になっている。
* [ABP Framework](https://github.com/abpframework/abp) - モダンなWebアプリを構築するための基盤。原文では、ソフトウェア開発の推奨事項や慣例に沿った包括的な基盤と説明されている。
* [NeoUI](https://github.com/jimmyps/blazor-shadcn-ui) - shadcn/uiに着想を得たBlazorコンポーネントライブラリ。原文では本番利用に対応すると説明され、100以上のスタイル付きコンポーネント、15のヘッドレスな基本部品、12種類のグラフ、宣言的なアニメーション、3,200以上のアイコン、設定不要の構築済みCSS、WCAG 2.1 AA対応、ダークモード、85通りのテーマの組み合わせ、.NET 10のAutoレンダリングモードへの完全対応が記載されている。MITライセンス。
* [Nevron Open Vision Components for Blazor](https://www.nevron.com/products-open-vision) - 有料。外部リンク。Blazor向けの図、グラフ、テキストエディター、ゲージ、バーコード、UIのコンポーネント。[デモ](https://blazorexamples.nevron.com/)。
* [CodeBeam.MudExtensions](https://github.com/CodeBeamOrg/CodeBeam.MudExtensions) - コミュニティが提供する、MudBlazor向けのサードパーティー製拡張コンポーネント。原文には、Stepper、SpeedDial、Wheel、Splitter、Animate、Popup、Material 3 Switch、Gallery、CodeInputなど、20以上のコンポーネントが記載されている。[ドキュメント](https://codebeam-mudextensions.pages.dev/)。
## 個別コンポーネント <a id="individual-components"></a>
### 2D/3Dレンダリングエンジン <a id="2d3d-rendering-engines"></a>
* [BabylonBlazor](https://github.com/AlexNek/BabylonBlazor) - 3Dライブラリ[Babylon.js](https://www.babylonjs.com/)を包み、C#のBlazorプロジェクトで使えるようにするRazorコンポーネント。分子の可視化を目的とし、Babylon.js APIの限られた部分を利用する。[デモアプリ](https://babylonblazorapp202208.azurewebsites.net/)はライブラリの各部分を紹介し、[Pubchem Viewer](https://pubchemviewer.azurewebsites.net/)はpubchem.ncbi.nlm.nih.govの化学情報を表示する。
### API
* [Blazor.Canvas](https://github.com/excubo-ag/Blazor.Canvas) - C#で記述されたHTML canvas APIのラッパー。JavaScriptへの依存はない。[デモ](https://excubo-ag.github.io/Blazor.Canvas/)。
* [BlazorIntersectionObserver](https://github.com/ljbc1994/BlazorIntersectionObserver) - [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)のラッパー。
### グラフ <a id="charts"></a>
* [ChartJs.Blazor](https://github.com/mariusmuntean/ChartJs.Blazor) - [ChartJs](https://github.com/chartjs/Chart.js)のグラフをBlazorで利用できるようにする。
* [GG.Net Data Visualization](https://github.com/pablofrommars/GGNet) - Rのggplot2パッケージに着想を得た、Blazor Webアプリ向けの対話型グラフ。原文では、柔軟で機能豊富なデータ分析の作業環境と、数行のコードで作れる出版物に使える品質のグラフを紹介している。[Webサイト](https://pablofrommars.github.io/)。
* [Blazor-ApexCharts](https://github.com/apexcharts/Blazor-ApexCharts) - ApexChartsのBlazor用ラッパー。[デモ](https://joadan.github.io/Blazor-ApexCharts/basic-charts)。
* [Plotly.Blazor](https://github.com/LayTec-AG/Plotly.Blazor) - グラフ描画ライブラリ[plotly.js](https://github.com/plotly/plotly.js)をBlazorで利用できるようにする。原文には40種類を超えるグラフが記載されている。[デモ](https://laytec-ag.github.io/Plotly.Blazor/)。
* [GG.Net Data Visualization](https://github.com/pablofrommars/GGNet) - Rのggplot2パッケージに着想を得た、Blazor Webアプリ向けの対話型グラフ。原文では、柔軟で機能豊富なデータ分析の作業環境と、数行のコードで作れる出版物に使える品質のグラフを紹介している。[Webサイト](https://pablofrommars.github.io/)。
* [ChartJs for Blazor](https://github.com/erossini/BlazorChartjs) - BlazorでChartJsを使うためのNuGetパッケージ。原文では、継続的に機能が追加されていると説明されている。
* [UnlockedData.Chartist.Blazor](https://github.com/UnlockedData/UnlockedData.Chartist.Blazor) - [Chartist.js](http://gionkunz.github.io/chartist-js/)のBlazor用ラッパー。[Chartist.jsプラグイン](http://gionkunz.github.io/chartist-js/plugins.html)を同梱する。
### CSS
* [BlazorSize](https://github.com/EdCharbeneau/BlazorSize) - ブラウザーの現在のサイズ、サイズ変更、メディアクエリーの条件を調べる、Blazor向けのJavaScript相互運用ライブラリ。
* [RazorStyle](https://github.com/wihrl/RazorStyle) - `<style>`タグを重複させずにコンポーネント内でスタイルを設定する小さなユーティリティライブラリ。プログラムから開始するアニメーションにも対応する。
### データベース <a id="database"></a>
* [DexieNET](https://github.com/b-straub/DexieNET) - David FahlanderのJavaScript IndexedDBラッパーDexie.jsの全機能を網羅することを目指す.NETラッパー。Blazor向けに設計され、使いやすさを目指すRazorコンポーネントを含む。DexieCloudへの対応はプレビュー機能として記載されている。
* [EfCoreNexus](https://github.com/thliborius/EfCoreNexus) - Entity Framework CoreをBlazorアプリに統合するライブラリ。リフレクションでエンティティクラスを自動追加し、基本的なCRUD機能を提供する。
### データグリッドと表 <a id="datagrids--tables"></a>
* [BlazorDatasheet](https://github.com/anmcgrath/BlazorDatasheet) - キーボード操作、数式、フィルタリング、並べ替えなどに対応する、Excel風のデータシートコンポーネント。
* [Grid.Blazor](https://github.com/gustavnavar/Grid.Blazor) - BlazorとASP.NET MVC向けの、CRUDフォームを備えたグリッドコンポーネント。フィルタリング、並べ替え、検索、ページ分割、サブグリッドなどに対応する。[デモ](http://gridblazor.azurewebsites.net)。
* [BlazorGrid](https://github.com/Akinzekeel/BlazorGrid) - リモートデータの表示を主な用途とし、簡潔なマークアップを使う仮想化データグリッドコンポーネント。[デモとドキュメント](https://blazorgrid.z6.web.core.windows.net/)。
### 日付と時刻 <a id="date--time"></a>
* [BlazorDateRangePicker](https://github.com/jdtcn/BlazorDateRangePicker) - Blazor向けの日付範囲選択コンポーネントライブラリ。[デモ](https://BlazorDateRangePicker.azurewebsites.net/)。
### 図 <a id="diagrams"></a>
* [Blazor.Diagrams](https://github.com/Blazor-Diagrams) - Z.Blazor.Diagrams（ZBD）は、Blazor ServerとWebAssemblyの両方に対応する、カスタマイズ・拡張可能な汎用の図作成ライブラリ。当初はReactのreact-diagramsに着想を得ており、独自のデザインを持つ高度な図を作成できる。動作もアプリの要件に合わせて変更できる。
* [Excubo.Blazor.Diagrams](https://github.com/excubo-ag/Blazor.Diagrams) - フローチャート、UML、BPMNなどに対応する対話型の図コンポーネント。ノード型やスタイルなどを利用者の要件に応じてカスタマイズ・拡張できる。[デモ](https://excubo-ag.github.io/Blazor.Diagrams/)。
### JavaScript
* [BlazorScriptReload](https://github.com/devessenceinc/BlazorScriptReload) - Blazor WebアプリでJavaScriptを使うためのコンポーネント。
### 地図 <a id="maps"></a>
* [BlazorGoogleMaps](https://github.com/rungwiroon/BlazorGoogleMaps) - GoogleMapライブラリのBlazor相互運用ラッパー。
* [UnlockedData.Mapael](https://github.com/UnlockedData/UnlockedData.Mapael) - ベクター描画・地図作成ライブラリのBlazor用ラッパー。[Jquery Mapael](https://www.vincentbroute.fr/mapael/)。
### モーダル、トースト通知、その他の通知 <a id="modal-toast--notifications"></a>
* [Blazored.Modal](https://github.com/Blazored/Modal) - BlazorとRazor Componentsのアプリ向けの、JavaScriptを使わないモーダルライブラリ。
* [Blazored.Toast](https://github.com/Blazored/Toast) - BlazorとRazor Componentのアプリ向けの、JavaScriptを使わないトースト通知ライブラリ。
* [Blazor.Sidepanel](https://github.com/Append-IT/Blazor.Sidepanel) - Blazorアプリ向けのカスタマイズ可能なサイドパネル。原文では強力な実装と説明されている。
### ルーティングとナビゲーション <a id="routing--navigation"></a>
* [Blazouter](https://github.com/Taiizor/Blazouter) - React Routerに着想を得た、Blazor向けのモダンなルーティングライブラリ。ネストしたルート、組み込みのルートガード、遅延読み込み、ルートごとのレイアウト、多様な画面遷移を提供する。型安全で、Server、WebAssembly、Hybrid（MAUI）の各ホスティングモデルに対応する。
### タブ <a id="tabs"></a>
* [BlazorXTabs](https://github.com/David-Moreira/BlazorXTabs) - Blazor向けのさまざまなタブ機能を提供する、拡張タブコンポーネントライブラリ。
### テスト <a id="testing"></a>
* [bUnit — Blazorコンポーネントのテストライブラリ](https://github.com/egil/bunit) - Blazorコンポーネント向けのテストライブラリ。C#またはRazor構文でテスト対象のコンポーネントを定義し、HTMLの意味を考慮した比較で結果を検証する。コンポーネントの操作・検査、イベントハンドラーの実行、カスケード値の提供、サービスの注入、IJSRuntimeのモック、スナップショットテストを行える。
* [Verify.Blazor — Blazorコンポーネントのスナップショットテストライブラリ](https://github.com/VerifyTests/Verify.Blazor) - Blazorコンポーネント向けのスナップショットテストライブラリ。bunitまたはBlazorの直接レンダリングを使い、コンポーネントをスナップショットファイルへ出力する。
### その他 <a id="others-1"></a>
* [ActualLab.Fusion](https://github.com/ActualLab/Fusion) - SignalRやgRPCの代わりとなるものとして紹介されている、BlazorとMAUI向けのリアルタイムアプリケーションフレームワーク。原文では、通常のリアルタイム更新コードのわずか0.1%でアプリを作成でき、ActualLab.Rpcで10倍、Fusionの透過的で完全に一貫性のあるキャッシュで1,000倍のAPIリクエストを処理できると主張している。[サンプル](https://github.com/ActualLab/Fusion.Samples)。[ドキュメント](https://fusion.actuallab.net/)。
* [BlazorContextMenu](https://github.com/stavroskasidis/BlazorContextMenu) - Blazor向けのコンテキストメニューコンポーネント。[デモ](https://blazor-context-menu-demo.azurewebsites.net/)。
* [Blazored.Typeahead](https://github.com/Blazored/Typeahead) - クライアント側とサーバー側の両方のBlazorに対応する、ローカルまたはリモートのデータソースを使うオートコンプリート入力欄。
* [Blazor-DragDrop](https://github.com/Postlagerkarte/blazor-dragdrop) - 使いやすさを目指す、Blazor向けのドラッグ＆ドロップライブラリ。
* [BlazorDownloadFile](https://github.com/arivera12/BlazorDownloadFile) - JavaScriptライブラリや依存関係を使わず、BlazorのC#からブラウザーへファイルをダウンロードするライブラリ。クライアントで生成したファイルの保存を目的とする。サーバーから送るファイルについては、より広いブラウザー互換性のため、Content-Dispositionのattachmentレスポンスヘッダーを先に試すよう原文で推奨している。
* [Blazor.FileSystemAccess](https://github.com/KristofferStrube/Blazor.FileSystemAccess) - ブラウザーのFile System Access APIを包むBlazor用ラッパー。このAPIは、ブラウザーからローカルのファイルやディレクトリを読み書きする機能を提供する。
* [Blorc.PatternFly](https://github.com/WildGums/Blorc.PatternFly) - [PatternFly](https://www.patternfly.org)のBlazor用ラッパー。developブランチの動作は[デモ](http://blorc-patternfly.wildgums.com/)アプリで確認できる。
* [Blazor PWA Updater](https://github.com/jsakamoto/Toolbelt.Blazor.PWA.Updater) - 新しいバージョンを利用できるようになったときに、Blazor PWAへ「今すぐ更新」のUIを提供する。
* [BlazorTransitionableRoute](https://github.com/JByfordRew/BlazorTransitionableRoute) - 現在と直前のルートを共存させ、UI/UXデザインシステムの画面遷移アニメーションを可能にする。
* [Razor.SweetAlert2](https://github.com/Basaingeal/Razor.SweetAlert2) - JavaScriptライブラリSweetAlert2を実装するBlazorコンポーネント。
* [BlazorMonaco](https://github.com/serdarciplak/BlazorMonaco) - Visual Studio Codeにも使われている、Microsoftの[Monaco Editor](https://github.com/Microsoft/monaco-editor)向けのBlazorコンポーネント。[デモ](https://serdarciplak.github.io/BlazorMonaco/)。
* [Blazor.Grids](https://github.com/excubo-ag/Blazor.Grids) - 対話的な移動やサイズ変更などの機能を備える、CSSグリッド用のコンポーネントライブラリ。独自のダッシュボードを構築できる。[デモ](https://excubo-ag.github.io/Blazor.Grids/)。
* [Blazor.TreeViews](https://github.com/excubo-ag/Blazor.TreeViews) - ツリービュー用のコンポーネントライブラリ。[デモ](https://excubo-ag.github.io/Blazor.TreeViews/)。
* [GEmojiSharp.Blazor](https://github.com/hlaueriksson/GEmojiSharp) - BlazorでGitHubの絵文字を利用するライブラリ。[デモ](https://hlaueriksson.github.io/GEmojiSharp/)。
* [Texnomic.Blazor.hCaptcha](https://github.com/Texnomic/hCaptcha) - サーバー側Blazor用のhCaptchaコンポーネント。
* [BlazorLocalizationSample](https://github.com/LazZiya/XLocalizer.Samples/tree/master/BlazorLocalizationSample) - オンライン翻訳とリソースの自動作成を使い、[XLocalizer](https://github.com/LazZiya/XLocalizer)でローカライズした標準プロジェクトテンプレート。
* [TimeCalc](https://github.com/michaelrp/TimeCalc) - Blazor WebAssemblyを使い、スピードキューブの平均記録をその場で管理するアプリ。[デモ](https://www.timecalc.app/)。
* [BlazorSliders](https://github.com/carlfranklin/BlazorSliders) - スライド式の仕切りで分けた複数のパネルを作成するコンポーネント。
* [Blazor SplitContainer](https://github.com/jsakamoto/Toolbelt.Blazor.SplitContainer) - スライド可能な分割バーで区切ったペインを作成するBlazorコンポーネント。
* [BlazorTimeline](https://github.com/Morasiu/BlazorTimeline) - レスポンシブな縦型タイムラインコンポーネント。
* [BlazorTypewriter](https://github.com/ormesam/blazor-typewriter) - Blazor向けのタイプライター風の表示効果。
* [BlazorMergely](https://github.com/akovac35/BlazorMergely) - Mergelyを基盤とし、サーバー側にも対応する、Blazorの差分表示・マージコンポーネント。
* [MetaMask.Blazor](https://github.com/michielpost/MetaMask.Blazor) - Blazor WebAssemblyで[MetaMask](https://metamask.io/)を使うための補助機能を提供するライブラリ。
* [Blazor File Drop Zone](https://github.com/jsakamoto/Toolbelt.Blazor.FileDropZone/) - 「input type=file」要素をこのBlazorコンポーネントで包み、ファイルをドラッグ＆ドロップで受け付ける領域を作成する。[デモ](https://jsakamoto.github.io/Toolbelt.Blazor.FileDropZone/)。
* [Knob](https://github.com/MelihAltintas/Blazor-Knob/) - Blazor向けのノブ型コントロール。
* [BlazorCurrentDevice](https://github.com/arivera12/BlazorCurrentDevice) - current-device.jsを使うBlazor向けのデバイス検出。
* [BlazorStyledTextArea](https://github.com/JByfordRew/BlazorStyledTextArea) - スタイルを設定できるテキストエリア。通常のテキストエリアとして動作しながら、アプリの要件に合わせて任意のテキストにスタイルを適用できる。リッチテキストエディターに伴う複雑さや問題を避けるため、意図的にシンプルに設計されている。
* [SignaturePad](https://github.com/MarvinKlein1508/SignaturePad) - 独自の署名を描画する、使いやすさを目指すBlazorコンポーネント。[デモ](https://marvinklein1508.github.io/SignaturePad)。
* [BlazorInputTags](https://github.com/MarvinKlein1508/BlazorInputTags) - Blazor ServerとWebAssemblyアプリに基本的なタグ編集機能を追加する、使いやすさを目指すコンポーネント。[デモ](https://marvinklein1508.github.io/BlazorInputTags)。
* [BlazorTooltips](https://github.com/MarvinKlein1508/BlazorTooltips) - Blazor ServerとWebAssemblyの両方でBootstrapのツールチップを使うための実装。[デモ](https://marvinklein1508.github.io/BlazorTooltips)。
* [BlazorBarcodeScanner](https://github.com/sabitertan/BlazorBarcodeScanner) - zxing-jsとの相互運用を使う、Blazor向けのバーコードスキャナーコンポーネント。[デモ](https://sabitertan.github.io/BlazorBarcodeScanner/)。
* [Blazor Transition Group](https://github.com/le-nn/blazor-transition-group) - [react-transition-group](https://github.com/reactjs/react-transition-group)に着想を得て、BlazorコンポーネントがDOMに追加・削除されるときにアニメーションを行うライブラリ。
* [BlazorGravatar](https://github.com/PSCourtney/BlazorGravatar) - GravatarをBlazor WASM、Server、SSRへ統合するコンポーネント。
* [BlazorDragDrop](https://github.com/Postlagerkarte/Blazor-DragDrop) - Blazorコンポーネント向けのシンプルなドラッグ＆ドロップライブラリ。
* [BlazorTreeViews](https://github.com/excubo-ag/Blazor.TreeViews) - Blazorアプリ向けのカスタマイズ可能なツリービューコンポーネント。

## ツールとユーティリティ <a id="tools--utilities"></a>
*状態管理、Cookie、ローカルストレージなど、特定の用途のためのライブラリと拡張機能。*
* [Fluxor](https://github.com/mrpmorris/fluxor) - .NET向けのFlux/Reduxライブラリ。原文では、ボイラープレートが不要と説明されている。
* [Blazored.LocalStorage](https://github.com/Blazored/LocalStorage) - Blazorアプリからローカルストレージへアクセスするためのライブラリ。
* [Blazor-State](https://github.com/TimeWarpEngineering/blazor-state) - MediatRのパイプラインを使い、Blazorのクライアント側の状態を管理する。
* [bUnit — Blazorコンポーネントのテストライブラリ](https://github.com/egil/bunit) - Blazorコンポーネント向けのテストライブラリ。C#またはRazor構文でテスト対象のコンポーネントを定義し、HTMLの意味を考慮した比較で結果を検証する。コンポーネントの操作・検査、イベントハンドラーの実行、カスケード値の提供、サービスの注入、IJSRuntimeのモック、スナップショットテストを行える。
* [Cropper.Blazor](https://github.com/CropperBlazor/Cropper.Blazor) - [Cropper.js](https://github.com/fengyuanchen/cropperjs)を包んでBlazorで画像を切り抜くコンポーネント。Blazor Server、Blazor WebAssembly、MVCと組み合わせたBlazor Server Hybrid、MAUI Blazor Hybridに対応する。[デモ](https://cropperblazor.github.io/demo)。
* [TextCopy](https://github.com/CopyText/TextCopy) - クリップボードへテキストをコピーしたり、クリップボードから取得したりするクロスプラットフォームのパッケージ。[Blazorに対応](https://github.com/CopyText/TextCopy#blazor-webassembly)。[ブラウザーのClipboard API](https://developer.mozilla.org/docs/Web/API/Clipboard)を利用する。
* [CssBuilder](https://github.com/EdCharbeneau/CssBuilder) - Razor Componentsで使うCSSクラスを組み立てる、Builderパターンの実装。
* [Blazor.FileSystemAccess](https://github.com/KristofferStrube/Blazor.FileSystemAccess) - ブラウザーのFile System Access APIを包むBlazor用ラッパー。
* [Blazor.Polyfill](https://github.com/Daddoon/Blazor.Polyfill) - Internet Explorer 11などのブラウザーに対応するための、Blazor用ポリフィル。
* [Blazor I18n/Localization Text](https://github.com/jsakamoto/Toolbelt.Blazor.I18nText) - Blazorでコンテンツのテキストをローカライズするライブラリ。[デモ](https://jsakamoto.github.io/Toolbelt.Blazor.I18nText/)。
* [BlazorGoogleMaps](https://github.com/rungwiroon/BlazorGoogleMaps) - GoogleMapライブラリのBlazor相互運用ラッパー。
* [BlazorWorker](https://github.com/Tewr/BlazorWorker) - Blazorで.NETのWeb Workerスレッドやマルチスレッド処理を作成するライブラリ。[実動デモ](https://tewr.github.io/BlazorWorker)。
* [MvvmBlazor](https://github.com/klemmchr/MvvmBlazor) - BlazorMVVMは、BlazorとBlazor Serverのアプリを構築する小さなフレームワーク。MVVMパターンによって開発を簡単にし、セットアップの手間を減らすことを目指している。
* [Blazor.BrowserExtension](https://github.com/mingyaulee/Blazor.BrowserExtension) - Blazor WebAssemblyでブラウザーの拡張機能・アドオンを開発するライブラリ。Google Chrome、Mozilla Firefox、Microsoft Edgeでテストされている。
* [Blazor Analytics](https://github.com/isc30/blazor-analytics) - 分析機能のためのBlazor拡張機能。
* [Blazor PDF](https://github.com/tossnet/Blazor-PDF) - Blazor ServerアプリからiTextSharpでPDF文書を生成する。
* [BlazorRouter](https://github.com/hez2010/BlazorRouter) - react-routerに着想を得た、Blazor向けの宣言的ルーティングを提供するルーター。
* [DataJuggler.Blazor.FileUpload](https://github.com/DataJuggler/BlazorFileUpload) - Steve SandersonのBlazorFileInputコンポーネントのラッパー。
* [BlazorPrettyCode](https://github.com/chanan/BlazorPrettyCode) - ドキュメントサイト向けのBlazorコード表示コンポーネント。[デモ](https://chanan.github.io/BlazorPrettyCode/)。
* [Blazor.EventAggregator](https://github.com/mikoskinen/Blazor.EventAggregator) - Blazor（Razor Components）向けの軽量なイベント集約機能。
* [Blazor Gamepad](https://github.com/jsakamoto/Toolbelt.Blazor.Gamepad) - BlazorからゲームパッドAPIへアクセスするためのライブラリ。
* [Blazor Hotkeys2](https://github.com/jsakamoto/Toolbelt.Blazor.Hotkeys2) - 設定を中心にBlazorのキーボードショートカットを定義するライブラリ。
* [BlazorRealm](https://dworthen.github.io/BlazorRealm/docs/quickstart.html) - Blazor向けのRedux状態管理。
* [Blazor.LocalFiles](https://github.com/jburman/W8lessLabs.Blazor.LocalFiles) - ブラウザーでファイルを開き、Blazorへ読み込むライブラリ。
* [Blazor.SpeechSynthesis](https://github.com/jsakamoto/Toolbelt.Blazor.SpeechSynthesis) - BlazorからSpeech Synthesis APIへアクセスするためのライブラリ。
* [Blazor BarCode](https://barcoderesource.com/blazorbarcode.shtml) - バーコードフォントを使うBlazor用バーコードライブラリ。
* [BlazorState.Redux](https://github.com/BerserkerDotNet/BlazorState.Redux) - ReduxでBlazorアプリを開発するためのライブラリ。
* [Howler.Blazor](https://github.com/StefH/Howler.Blazor) - 音声ライブラリHowler.jsのBlazor JSInteropラッパー。
* [jsMind.Blazor](https://github.com/StefH/jsMind.Blazor) - マインドマップツールjsMindのBlazor JSInteropラッパー。
* [Blazor Highcharts](https://github.com/Allegiance-Consulting/blazor-highcharts) - Highchartsライブラリの移植。[デモ](https://allegiance-consulting.github.io/blazor-highcharts/)。
* [Blazor.LazyStyleSheet](https://github.com/excubo-ag/Blazor.LazyStyleSheet) - CSSスタイルシートの遅延読み込み。
* [Blazor.ScriptInjection](https://github.com/excubo-ag/Blazor.ScriptInjection) - JavaScriptファイルの遅延読み込みを目的とする、Blazorコンポーネント内の高度なscriptタグ。
* [DnetIndexedDb](https://github.com/amuste/DnetIndexedDb) - IndexedDB DOM APIのBlazor用ライブラリ。
* [BlazorIndexedDbJs](https://github.com/kattunga/BlazorIndexedDbJs) - IndexedDB DOM APIを包み、Blazor WASMとServerに対応するラッパー。
* [Blazor-Color-Picker](https://github.com/tossnet/Blazor-Color-Picker) - BlazorアプリでMaterialカラーのパレットを開くコンポーネント。
* [Blazm.Bluetooth](https://github.com/EngstromJimmy/Blazm.Bluetooth) - Bluetoothを使ってデバイスへ接続するBlazorライブラリ。
* [WebBluetooth](https://github.com/KeudellCoding/Blazor.WebBluetooth) - 実験的なWebBluetooth機能を提供するBlazorサービス。[Blazm.Bluetooth](https://github.com/EngstromJimmy/Blazm.Bluetooth)を基盤とする。
* [BlazorApplicationInsights](https://github.com/IvanJosipovic/BlazorApplicationInsights) - Blazor Webアプリ向けのApplication Insights。
* [Blazor Printing](https://github.com/Append-IT/Blazor.Printing) - Blazor Serverまたはクライアント側のアプリで、標準の印刷ダイアログを使ってPDF文書を印刷・保存するライブラリ。
* [BlazorTemplater](https://github.com/conficient/BlazorTemplater) - `.razor`コンポーネントを使い、メールの内容をHTML文字列としてレンダリングする。
* [MediaSession.Blazor](https://github.com/zuozishi/MediaSession.Blazor) - Media Session APIのBlazor JSInteropラッパー。このAPIを使うと、メディア通知をカスタマイズできる。[デモ](https://zuozishi.github.io/MediaSession.Blazor/)。
* [BlazorAntivirusProtection](https://github.com/stavroskasidis/BlazorWasmAntivirusProtection) - Blazor WebAssemblyプロジェクトをマルウェアと判定するウイルス対策ソフトの誤検知を防ぐことを試みるパッケージ。原文では、Microsoftによる公式の解決策が出るまでの回避策として紹介されている。
* [Phork.Blazor.Reactivity](https://github.com/phorks/phork-blazor-reactivity) - .NETのINotifyPropertyChangedとINotifyCollectionChangedインターフェースを使い、コンポーネントの状態変更を自動検出するBlazor状態管理ライブラリ。特定の設計方針を強制しない。
* [CodeBeam.GoogleApis.Blazor](https://github.com/CodeBeamOrg/CodeBeam.GoogleApis.Blazor) - BlazorでGoogleApisを使うためのオープンソースのユーティリティパッケージ。使いやすさを目指し、ゼロから実装されている。
* [Memento](https://github.com/le-nn/memento) - 取り消し・やり直しとReduxDevToolsに対応する、Blazor/.NET向けのクライアント側状態管理コンテナー。
* [RxBlazorLight](https://github.com/b-straub/RxBlazorLight) - Blazorコンポーネントを包むシンプルなリアクティブなラッパー。原文に記載された対応対象は[MudBlazor](https://mudblazor.com/)コンポーネントのみ。[RxMudBlazorLightSample](https://github.com/b-straub/RxBlazorLight/tree/main/RxMudBlazorLightSample)をビルドして、リアクティブな[コンポーネント](https://github.com/b-straub/RxBlazorLight/tree/main/RxMudBlazorLightTestBase/Components)を試せる。
## その他のライブラリと拡張機能 <a id="others-2"></a><a id="other-libraries-and-extensions"></a>
* [Blazor Extensions Home](https://github.com/BlazorExtensions/Home) - Blazor Extensionsの案内ページ。
* [Bolero](https://github.com/fsbolero/Bolero) - F#向けのBlazor。ホットリロードに対応するテンプレート、型安全なエンドポイントとルーティング、リモート呼び出しなどを備える。
* [BlazorFabric](https://github.com/limefrogyank/BlazorFabric) - Fluent Designを採用したMicrosoft UI FabricのBlazor移植。[デモ](https://blazorfabric.azurewebsites.net/)。
* [BlazorWebView](https://github.com/jspuij/BlazorWebView) - WPF、Android、macOS、iOS向けのBlazor WebViewコントロール。.NET CoreとMono上のBlazorを、WebView内でネイティブに実行する。[ドキュメント](https://jspuij.github.io/BlazorWebView.Docs/pages/index.html)。
* [BlazorLazyLoading](https://github.com/isc30/blazor-lazy-loading) - 原文で本番利用に対応すると説明されている遅延読み込みの実装。WebAssemblyとServerでページ、コンポーネント、DLLに対応し、独自のエンドポイントやマニフェストなどを使ったモジュール化のための抽象化を提供する。
* [Fun.Blazor](https://github.com/slaveOftime/Fun.Blazor) - F#開発者がBlazorを開発しやすくすることを目指すプロジェクト。内部およびサードパーティーのBlazorライブラリ向けのコンピュテーション式（CE）形式のDSL、依存性注入、AdaptiveモデルとElmishモデル、Giraffe形式のルーティング、型安全なスタイル設定を提供する。
* [Blazor.DownloadFileFast](https://github.com/StefH/Blazor.DownloadFileFast) - JavaScriptライブラリへの参照や依存関係を使わず、Blazorからブラウザーへ高速にファイルをダウンロードするライブラリ。[デモ](https://stefh.github.io/Blazor.DownloadFileFast/)。
* [SpotifyService](https://github.com/tresoneur/SpotifyService) - Blazor WebAssemblyプロジェクト向けの高水準なSpotify APIライブラリ。ブラウザー内でのSpotify再生、OAuth 2.0認可の管理、Spotify Web APIへのアクセスを提供し、IndexedDBのキャッシュを使う。
* [Blazor.DynamicJavascriptRuntime.Evaluator](https://github.com/jameschch/Blazor.DynamicJavascriptRuntime.Evaluator) - クライアント側Blazorアプリで、動的なオブジェクト式をJavaScriptとして実行する。
* [Bionic](https://bionicframework.github.io/Documentation/) - Blazorプロジェクト向けのIonic CLIのクローン。
* [EventHorizon Blazor TypeScript Interop Generator](https://github.com/canhorn/EventHorizon.Blazor.TypeScript.Interop.Generator) - TypeScriptの型定義ファイルを入力として、提供される相互運用の抽象化プロジェクトと連携する.NET Coreプロジェクトを作成する。
* [Generators.Blazor](https://github.com/excubo-ag/Generators.Blazor) - Blazorの性能改善を目的とするソースジェネレーター。Blazorアプリのよくある問題を検出するアナライザーも含む。
* [Blazork8s](https://github.com/weibaohui/blazork8s) - BlazorとAIを使い、ダッシュボード形式のアプリでKubernetes（k8s）を管理する。

## ソースジェネレーター <a id="source-generators"></a>
* [BlazorOcticons](https://github.com/BlazorOcticons/BlazorOcticons) - GitHubの[Octicons](https://primer.style/design/foundations/icons/)を、ソースジェネレーターで.razorコンポーネントとして生成する。コンポーネントとジェネレーターは、それぞれ別のNuGetパッケージで提供される。プロジェクトのWebサイトでは生成したコンポーネントの使用例を確認できる。
* [BlazorInteropGenerator](https://github.com/surgicalcoder/BlazorInteropGenerator) - JavaScriptソースを解析し、IJSRuntimeの拡張メソッドを生成することで、厳密に型付けされたBlazorとJavaScriptの相互運用メソッドを生成する。
* [RazorPageRouteGenerator](https://github.com/surgicalcoder/RazorPageRouteGenerator) - RazorとBlazorのページ向けにパラメーター付きのメソッドを生成し、URLやパラメーターを推測せずにページへ移動できるようにする。

## 実用アプリケーション <a id="real-world-applications"></a>
* [Try .NET](https://github.com/dotnet/try) - 開発者とコンテンツの作者が対話型の体験を作成するためのツール。
* [FairPlayCombined](https://github.com/pticostaricags/FairPlayCombined) - Blazorで作られた、構築済みでカスタマイズ可能なソリューションから成るFairPlayプラットフォーム。

## 動画 <a id="videos"></a>
* [ASP.NET Community Standup: What's new in .NET 11 Preview 6?](https://www.youtube.com/watch?v=1G3d5YphhcM) - 2026年7月21日 — 再生時間：56分。ASP.NET Coreチームが.NET 11 Preview 6におけるASP.NET CoreとBlazorの新機能を紹介する。非同期のMinimal API検証、自動CSRF対策、共用体、OpenAPI 3.2、BlazorとSignalRの改善などを扱う。
* [Blazor Community Standup: WebMCP in Action with Blazor](https://www.youtube.com/watch?v=D0oq45aH0RQ) - 2026年7月7日 — 再生時間：70分。TelerikのYanislav Ivanovが、BlazorコンポーネントからWebMCPで操作をAIエージェントへ直接公開し、自然言語の指示で実際のUIを操作する方法を紹介する。
* [Building for the agentic web with .NET 11](https://www.youtube.com/watch?v=vQ0y8ExNsmQ) - 2026年6月2日 — 再生時間：44分。性能、堅牢なセキュリティ、エージェント機能など、Webアプリへの要求が増す中で、.NETの次世代Webアプリを扱う講演。.NET 11のASP.NET CoreとBlazorの速度・セキュリティ改善、分散アプリ開発のためのAspireとの密接な統合、エージェントを使うWebアプリ向けのエージェント・ツール・スキル・コンポーネントという構成要素を紹介する。
* [Blazor Community Standup: ASP.NET Core & Blazor Roadmap for .NET 11](https://www.youtube.com/watch?v=XY_mM2FkxHE) - 2026年2月10日 — 再生時間：64分。.NET 11に向けたASP.NET CoreとBlazorのロードマップを解説し、期待される改善と開発中の作業の進捗を扱う。
* [Building Agentic UI with Blazor](https://www.youtube.com/watch?v=81k75c4U95s) - 2025年12月4日 — 再生時間：61分。自然言語、音声、視覚が主要な操作手段となるAI時代に、Blazorでエージェントを使うUIを作成する講演。AIに基づく操作パターンを使い、MicrosoftのHuman-AI設計原則に基づく実例と設計方法、AG-UIなどのエージェントとユーザーの対話プロトコル、NLWebで既存サイトへ会話型UIを統合する方法を紹介する。
* [Be Authentic with Blazor and Microsoft Entra External ID](https://www.youtube.com/watch?v=JQXDkh6-_Bk) - 2025年11月14日 — 再生時間：28分。Blazorで迅速にWebアプリを構築し、複雑なアプリを扱いやすいモジュールに分けられる利点を踏まえ、認証を扱う実演中心のセッション。Microsoft Entra External IDを設定し、それを使うBlazor Webアプリの認証を実装する。顧客や協力者などの外部ユーザーが、ロールに基づくアクセス制御（RBAC）でアプリへアクセスできるようにする。自分のコードで使えるテンプレートと、講演者が遭遇した落とし穴を紹介する。
* [Build better web apps with Blazor in .NET 10](https://www.youtube.com/watch?v=V0Af7y7aMBE) - 2025年11月12日 — 再生時間：25分。.NET 10のBlazorでWebアプリを構築するための新機能を紹介する。組み込みのWebAuthNとパスキー対応、Entra ID認証を追加するためのひな型生成、改善された診断機能による監視と問題調査、読み込み速度と応答性の改善を扱う。Hot Reloadの高速化、コンポーネント状態の永続化、QuickGridの拡張、統合テストの簡略化なども紹介する。
* [The Future of Web Development with ASP.NET Core & Blazor in .NET 10](https://www.youtube.com/watch?v=xZ26KwGHWE0) - 2025年8月14日 — 再生時間：74分。ASP.NET CoreとBlazorの.NET 10における新機能を中心に、Web開発の今後を扱う。AIライブラリやWebAuthn・パスキーなどのセキュリティ標準を使うAIを組み込んだWebアプリ、診断機能とテレメトリーによる監視・問題調査、.NET Aspireによる開発効率の向上を紹介する。Blazor、Minimal APIの検証、OpenAPI生成などの今後も扱う。
* [Modernizing your desktop: From WinForms to Blazor, Azure, and AI](https://www.youtube.com/watch?v=95M-4YLGsVE) - 2025年4月28日 — 再生時間：45分。古いデスクトップアプリを刷新するセッション。.NETを使ってWinFormsからBlazorへ移行し、クラウドでの保守のためにAzureへデプロイして、AI機能を追加する方法を扱う。実用的なヒント、実例、注意すべき経験を紹介する。
* [Unboxing Blazor in .NET 10 Preview 2](https://www.youtube.com/watch?v=yBw_KOz1vCA) - 2025年4月2日 — 再生時間：9分。Danが.NET 10 Preview 2のWeb開発者向けの改善を紹介する。
* [Why I'm Worried About Blazor and its Future](https://www.youtube.com/watch?v=s34SR24pgfE) - 2024年11月20日 — 再生時間：20分。Nick Chapsasが、Blazorとその将来について懸念する理由を述べる。
* [Building Rich Web Applications with Blazor Server and MudBlazor](https://www.youtube.com/watch?v=MfYz95kiFxI) - 2024年11月19日 — 再生時間：25分。Blazor ServerとMudBlazorで、堅牢で対話型のWebアプリを構築する方法を紹介する。実際のアプリの例を通して、MudBlazorの豊富なコンポーネントによるユーザー体験の向上と開発の簡略化を扱う。性能の最適化、複雑なUI要件への対応、本番環境へのBlazor Serverアプリのデプロイに関する推奨方法を解説し、プロジェクトで実践できる知見を提供する。
* [Using Blazor to manage data in SQL server and Microsoft Fabric](https://www.youtube.com/watch?v=Tn7rQbpLfmU) - 再生時間：25分。SQL ServerやMicrosoft Fabricなどのデータウェアハウスのデータを、ユーザーが閲覧・更新できる業務アプリを扱う。Microsoft Blazorと、Blazor Data Sheetなどの無料のオープンソースのコントロールを使って、独自のアプリを迅速に構築する方法を紹介する。行レベルのセキュリティでデータへのアクセスを細かく制御する方法と、PowerBI Embeddedによる高度なデータ分析も扱う。
* [Exploring the New Fluent UI Blazor Library: Next-Gen Web Components and Architectural Innovations](https://www.youtube.com/watch?v=w8BKS1a8MnU) - 2024年11月15日 — 再生時間：原文表記400分（実時間は未確認）。公開予定のFluent UI Blazorライブラリの新しいメジャーバージョンを詳しく紹介する。更新されたWeb Componentsなどの新機能、性能・拡張性・保守性の向上を目指す大幅なアーキテクチャ変更、破壊的変更への対応に役立つ実用的なヒントと推奨方法を含む移行ガイドを扱う。
* [What's New for ASP.NET Core & Blazor in .NET 9](https://www.youtube.com/watch?v=2xXc1hNwp0o) - 2024年11月14日 — 再生時間：40分。.NET 9で導入される、Web開発者向けのASP.NET CoreとBlazorの新機能を紹介する。
* [ASP.NET Community Standup - Making DevToys 2.0 cross-platform with Blazor Hybrid](https://www.youtube.com/watch?v=8yM4jDooWcM) - 2024年10月29日 — 再生時間：64分。DevToysの開発者が、独自のBlazor Hybridを使ってDevToys 2.0を複数のプラットフォームに対応させた方法を紹介する。
* [What's Next for ASP.NET Core & Blazor](https://www.youtube.com/watch?v=o0CWssf8TFw) - 2024年8月22日 — 再生時間：75分。.NET 9で導入される、Web開発者向けのASP.NET CoreとBlazorの新機能を紹介する。
* [Build interactive AI-powered web apps with Blazor and .NET](https://www.youtube.com/watch?v=z7V-_JVF_Zo) - 2024年8月21日 — 再生時間：36分。.NETエコシステムのさまざまな既製のAIコンポーネントを使い、Blazorと.NETでAIを組み込んだ対話型のWebアプリを手早く簡単に構築する方法を紹介する。
* [ASP.NET Community Standup - Using GraphQL to enhance Blazor apps](https://www.youtube.com/watch?v=ubX-a6_V_ao) - 2024年7月9日 — 再生時間：67分。APIへのクエリにGraphQLを選ぶ利点と、Blazorとの統合方法を扱う。BlazorアプリにGraphQLを組み込み、QuickGridでデータを表示して機能を拡張する。
* [Real World Apps with Blazor and .NET Aspire](https://www.youtube.com/watch?v=5v2GNcrEabg) - 2024年7月2日 — 再生時間：11分。EduardoがFrankとともに、次世代の動画共有ポータルとしてFairPlayTubeを紹介する。コンテンツの作者や起業家のためのツールで、AIを使ったサムネイルの作成、デジタルマーケティング戦略、不労所得のアイデア、SNS投稿などを扱う。
* [New Blazor Hybrid + .NET MAUI Templates are Incredible](https://www.youtube.com/watch?v=ilUohNPqnkU) - 2024年6月28日 — 再生時間：10分。Web UIをほぼ100%共有するモバイル・デスクトップ・Webアプリの構築を扱う。.NET 9の新しいBlazor Hybridテンプレートでは、.NET MAUI、Blazor、Razorクラスライブラリを設定済みのプロジェクトを、1回のクリックで作成できると紹介する。
* [ASP.NET Community Standup: Building Aspireify.net](https://www.youtube.com/watch?v=hzemJE_jcrI) - 2024年6月18日 — Jeff Fritzが、.NET 8、Blazor、Microsoft Azure、.NET Aspireを使ってAspireify.netを構築した方法を紹介する。[コミュニティ関連リンク](https://www.theurlist.com/aspnet-standup-2024-06-18)。
* [Blazor and Orchard Core with Peter Matthews - Orchard Core Pair Programming by Lombiq](https://www.youtube.com/watch?v=IZioflrC1Ho) - 2024年6月17日 — LombiqがOrchard Coreコミュニティのメンバーと行う、1時間のライブのペアプログラミング。そのメンバーのプロジェクトを題材に、開発の実践方法を共有し、視聴者の質問に答えながらコードを書く。
* [Building Real-Time Web Applications with Blazor and Akka.NET](https://www.youtube.com/watch?v=jRYVp_lySl8) - 2024年6月13日 — 再生時間：79分。Akka.NETとBlazorを使い、JavaScriptを使わず手間を抑えて、拡張性のあるストリーミングWebアプリを構築する方法を紹介する。全体をC#で実装する。
* [ASP.NET Community Standup: Static web asset improvements in .NET 9](https://www.youtube.com/watch?v=PkQgcEUCnQk) - 2024年6月11日 — 再生時間：57分。.NET 9で導入される静的Webアセットの改善の一部を紹介する。
* [What's New in Blazor in .NET 8 & Beyond | Blazing into Summer 2024](https://www.youtube.com/watch?v=6PgvtdZXXZo) - 2024年6月10日 — 再生時間：94分。Dan Rothが、高度なレンダーモード、組み込みの認証対応、ひな型生成など、.NET 8のBlazorの新機能を詳しく解説する。.NET 9でのBlazorの今後と、それによるWeb開発の改善も扱う。
* [On .NET Live: Generating sound in Blazor with Blazor.WebAudio](https://www.youtube.com/watch?v=gVZJohJq3c8) - 2024年6月3日 — Kristoffer Stubeが、音声の再生・生成・解析を行うBlazorライブラリのBlazor.WebAudioを紹介する。紹介文では、このライブラリと関連ライブラリによって、豊かな対話型アプリを安全に構築できると説明されている。
* [Modern Full-Stack Web Development with ASP.NET Core & Blazor](https://www.youtube.com/watch?v=NbfhbDKiFpM) - 2024年5月22日 — 再生時間：41分。動的で応答性の高いフルスタックWebアプリを構築するための、ASP.NET CoreとBlazorの新しい機能を紹介する。サーバーからクライアントまでの開発を簡略化し、JavaScriptの代わりにC#で豊かな対話型のWeb UIを作る方法を扱う。
* [Clean Architecture with .NET MAUI, Blazor, and ASP.NET Core](https://www.youtube.com/watch?v=u9YNufaYxzM) - 2024年5月22日 — 再生時間：67分。.NETでUIアプリを構築すると、アプリ全体でコードを共有できるが、適切な方法を見つけるのは容易ではない。UIとAPIのコードの目的がかみ合わない場合や、別々の技術を使う利点との差が明確でない場合もある。適切な共有手法を十分に使わないことや、共有を優先してアーキテクチャを損なうことが課題になる。『.NET MAUI in Action』の著者Matt Goldmanが、.NET MAUIとBlazorのUIを含めるようにClean Architectureを拡張する方法を紹介する。ソリューションの異なる層や、企業内の異なるソリューションで共有できる、整理され、テスト可能で再利用可能なコードを書く方法を扱い、効率の向上と重複の削減を目指す。過剰な設計や共有不足による失敗を避け、.NETでフルスタックのコード共有を実現する方法も説明する。
* [Build an AI-powered content composer in Blazor using OpenAI GPT](https://www.youtube.com/watch?v=KinUUsGkK_s) - 2024年5月22日 — 再生時間：17分。GPT-3.5 TurboとSyncfusion Blazorコンポーネントを使い、AIを組み込んだコンテンツ作成ツールを構築する方法を紹介する。任意の話題のコンテンツを作成し、文体・形式・長さを1か所で自動調整する。
* [Learn C# with CSharpFritz - PWA and Publishing with Blazor](https://www.youtube.com/watch?v=h4g_tDgn7uM) - 2024年5月1日 — 再生時間：127分。Fritzが.NET 8のBlazorシリーズの締めくくりとして、ピザのWebサイトをプログレッシブWebアプリ（PWA）にし、Microsoft Azureへ公開する。
* [Supercharging Blazor SSR with htmx](https://www.youtube.com/live/-Mc9pROA0Ho) - 2024年4月29日 — 再生時間：60分。コミュニティMVPのEgin Hansenが、フロントエンドライブラリのhtmxで、Blazorの静的なサーバー側レンダリング（SSR）を拡張する方法を紹介する。htmxによって対話性を高めながら、Blazor SSRのステートレスな性質による利点を維持する。
* [ASP.NET Community Standup: Fluent UI Blazor](https://www.youtube.com/watch?v=1fveBAi6Q7I&list=PLdo4fOcmZ0oX-DBuRG4u58ZTAJgBAeQ-t&index=3) - 2024年4月23日 — 再生時間：81分。Fluent UI Blazorライブラリは、現代のMicrosoftアプリの外観と操作感を備えるFluent Designのアプリを構築するためのBlazorコンポーネントを提供する。VincentとDenisが、ライブラリの基礎と構成要素、Blazorプロジェクトへ迅速に組み込む方法を実演する。環境の設定、対話型コンポーネントの使用、Fluent UIデザイントークンによるアプリのスタイル変更を扱う。
* [Understand the Next Phase of Web Development](https://www.youtube.com/watch?v=p9taQkF24Fs) - 2024年4月23日 — 再生時間：58分。NDC London 2024でのSteve Sandersonの講演。新しいフレームワーク、ビルドシステム、アーキテクチャのパターンが続々と現れる中で、Web開発の次の段階と共通する方向性を探る。実演を中心に、Webアプリの構築方法を変える、複数の技術に共通する新機能を扱う。Next.js（React）、SvelteKit、Blazor、Astroなどのコードを実際に確認し、それらが示す共通の方向性と、フレームワークを使わず同じ機能を実装する方法を紹介する。さらにWebAssemblyの状況を確認し、WASIを大きく作り直す予定のWASI preview 2を試す。すべての言語・OS・CPUアーキテクチャ間でのシームレスな相互運用や、サーバー側クラウドプログラミングの標準になれるかという問いを検討し、実際に何かを構築する。
* [ASP.NET Community Standup: Blazor Hybrid + Web in .NET 9](https://www.youtube.com/watch?v=hrXAkNsjaoI&list=PLdo4fOcmZ0oX-DBuRG4u58ZTAJgBAeQ-t&index=9) - 2024年4月9日 — 再生時間：61分。.NET 9で導入される改善によって、Blazor WebとBlazor Hybridを統合しやすくなることを紹介する。
* [Introducing Smart Components Experiment for Blazor, MVC, and Razor Pages](https://www.youtube.com/watch?v=ZWH4yJGJaeg) - 2024年3月19日 — 再生時間：10分。.NETチームによる新しい実験で、フィードバックを募集している。Steve Sandersonが、既存のページやフォームに短時間で追加できる構築済みのSmart Componentsを紹介する。SmartPaste、SmartTextArea、SmartComboBoxによってAI機能を追加し、ユーザーの利便性と生産性を高めるという実演を行う。
* [ASP.NET Community Standup - Modern Blazor Auth with OIDC](https://www.youtube.com/watch?v=PPX-yEXfnPM&list=PLdo4fOcmZ0oX-DBuRG4u58ZTAJgBAeQ-t) - 2024年2月13日 — 再生時間：61分。OIDCとBFFパターンを使い、BlazorアプリをMicrosoft Entraへ接続する方法を紹介する。
* [Let's Learn .NET - Blazor](https://www.youtube.com/watch?v=EhCz4s2Gh3I) - 2024年1月25日 — 再生時間：121分。BlazorのリードプロダクトマネージャーDaniel Rothとともに、.NET BlazorによるWeb開発の基礎を学ぶ。続いて、対話型のWebゲームを構築する。専門家と一緒にライブで学び、アプリを作る。
* [.NET Data Community Standup - Database concurrency and EF Core: ASP.NET and Blazor - Episode 2](https://www.youtube.com/watch?v=xVyYrtetDeA&list=PLdo4fOcmZ0oX-DBuRG4u58ZTAJgBAeQ-t) - 2024年1月24日 — 前回扱ったEF Coreの楽観的同時実行制御の基礎に続き、今回はエンティティをクライアントへ渡し、サーバーへ戻してからデータベースを更新する、非接続のシナリオを扱う。ASP.NET CoreとBlazorアプリでの各種更新パターンと、それぞれで同時実行トークンがどう働くかを確認する。同時実行トークンを使う`ExecuteUpdate`と、Azure Cosmos DBのETagによる同時実行制御も扱う。
* [アーカイブ](https://github.com/AdrienTorris/awesome-blazor/tree/master/Archives) - [2023](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2023.md#videos)、[2022](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2022.md#videos)、[2021](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2021.md#videos)、[2020](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2020.md#videos)、[2019](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2019.md#videos)、[2018](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2018.md#videos)、[2017](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2017.md#videos)。

## 記事 <a id="articles"></a>
* [Visual Studio 2022 Preview release notes](https://learn.microsoft.com/en-us/visualstudio/releases/2022/release-notes-preview#blazorwasmdebuggerimprovements) - 2024年7月9日 — 開発者のワークフローや各種ワークロードの使い勝手を改善し、コーディングを円滑で生産的にすることを目指すリリースノート。
* [Blazor Basics: Blazor Render Modes in .NET 8](https://www.telerik.com/blogs/blazor-basics-blazor-render-modes-net-8) - 2024年6月12日 — ServerInteractivity、WebAssemblyInteractivity、AutoInteractivity、静的なサーバー側レンダリング（SSR）など、.NET 8のBlazorの新しいレンダーモードを解説する記事。
* [The usage of Blazor.Diagrams](https://www.slaveoftime.fun/blog/the-usage-of-blazor.diagrams) - 2024年6月11日 — Blazor.Diagramsの使い方。
* [Blazor in .NET 9 Takes Shape (Preview 4 Highlights)](https://www.telerik.com/blogs/blazor-net-9-takes-shape-preview-4-highlights) - 2024年6月4日 — 2024年11月のリリースに向けて開発が進む.NET 9について、その時点でのBlazorの主な変更を紹介する。
* [Avoiding interactivity with Blazor?](https://jonhilton.net/avoiding-blazor-interactivity/) - 2024年5月29日 — Blazorで対話性の導入を避けることについての記事。
* [.NET Announcements & Updates from Microsoft Build 2024](https://devblogs.microsoft.com/dotnet/dotnet-build-2024-announcements/) - 2024年5月21日 — Microsoft Build 2024での.NETの発表と更新情報。
* [アーカイブ](https://github.com/AdrienTorris/awesome-blazor/tree/master/Archives) - [2023](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2023.md#articles)、[2022](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2022.md#articles)、[2021](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2021.md#articles)、[2020](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2020.md#articles)、[2019](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2019.md#articles)、[2018](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2018.md#articles)、[2017](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2017.md#articles)。

## ポッドキャスト <a id="podcasts"></a>
* [MAUI and Blazor with Beth Massi](https://www.dotnetrocks.com/details/1903) - 2024年6月20日 — 再生時間：45分。CarlとRichardがBeth Massiと.NET MAUIの最新情報について話す。GitHubで提供されている、既存のWebページをMAUIアプリへ埋め込める新しいWebViewも扱う。モバイル・Web・デスクトップのいずれかを中心にする場合や、すべてに対応する場合など、望む形でアプリを構築する方法を紹介する。BlazorとMAUIを組み合わせれば、希望に応じてXAMLを使わずに済む。クライアントの構築方法は1つに限らず、MAUIには多くの選択肢がある。
* [Chris Sainty: Blazor in Action - Azure DevOps Episode 238](http://azuredevopspodcast.clear-measure.com/chris-sainty-blazor-in-action-episode-238) - 2023年3月27日 — 再生時間：41分。Microsoft MVPで著者・ソフトウェアエンジニアのChris Saintyを紹介する。紹介時点で17年以上のASP.NETの経験があり、自分のブログに加えてVisual Studio magazine、Progress Telerik、StackOverflowなどにも執筆している。知識を共有する熱意が、Blazorアプリを構築する実践的なガイドである初の著書『Blazor in Action』につながった。GitHubのBlazored組織で複数の人気のあるオープンソースプロジェクトを保守し、世界各地のユーザーグループやカンファレンスでも講演している。
* [.NET Rocks - Blazor United with Javier Nelson and Steve Sanderson](https://www.dotnetrocks.com/details/1838) - 2023年3月23日 — 再生時間：53分。CarlとRichardがJavier Nelson、Steve Sandersonと、開発初期のBlazor Unitedについて話す。Webコンポーネント単位でクライアント側とサーバー側のレンダリングを柔軟に選ぶ構想を扱う。初回アクセスではサーバー側でレンダリングし、大きなクライアント側コンポーネントを後から読み込む仕組みを紹介する。ページの要素によってクライアント側とサーバー側のどちらが適するかは異なるため、どちらか一方に限定する必要があるかという考え方を掘り下げる。
* [Steve Sanderson - Blazor, WASI and optimizing tomatoes](https://www.youtube.com/watch?v=1r3FwkUEte0) - 2022年7月17日 — 再生時間：35分。NDC LondonでSteve Sandersonと、Blazorの誕生の経緯、.NET 7で導入予定の機能の一部、当時取り組んでいた作業について話す。
* [WASM Everywhere with Steve Sanderson](https://www.dotnetrocks.com/default.aspx?ShowNum=1801) - 2022年7月7日 — 再生時間：55分。NDC LondonでCarlとRichardがSteve Sandersonと、BlazorなどのWebAssembly関連の仕事について話す。WebAssembly System Integrationを追加しながら進化するWebAssemblyを扱う。OSや言語を問わず、利用できる計算資源を使ってWebAssemblyのコードを実行するという構想につながり、クライアント、サーバー、その中間でコードを動かす選択肢を示す。
* [Indexing Video using KlipTok with Jeff Fritz](https://www.dotnetrocks.com/default.aspx?ShowNum=1796) - 2022年6月2日 — 再生時間：57分。CarlとRichardがJeff Fritzと、Twitchの動画クリップを見つけやすく共有しやすくするツールKlipTokの開発について話す。目的のクリップへ素早くたどり着くための索引作成と検索の難しさ、各種データ保存技術、費用を抑えたクラウドの使い方を掘り下げる。JeffはMicrosoftの社員だが、自分のプロジェクトでMicrosoftのツールだけを使っているわけではない。
* [David Ortinau on .NET MAUI](https://herdingcode.com/herding-code-246-david-ortinau-on-net-maui/) - 2022年5月27日 — Jon GallowayがDavid Ortinauと[.NET MAUI](https://docs.microsoft.com/en-us/dotnet/maui/what-is-maui)について話す。再生時間：41分。[YouTube動画](https://www.youtube.com/watch?v=OyqzWAivI7I)。
* [The Unhandled Exception Podcast: Microsoft Build 2022](https://unhandledexceptionpodcast.com/posts/0037-build/) - 2022年5月25日 — 再生時間：71分。Microsoftの年次Buildカンファレンスで発表・議論された、Microsoft開発者向け技術の話題を振り返る回。Scott HunterとGaurav Sethを招いてさまざまな話題を語り合う。話題の案内として、リンク先ページの関連リンクも紹介している。
* [ASP.NET, Blogging, Kubernetes, and more](https://unhandledexceptionpodcast.com/posts/0036-andrewlock/) - 2022年5月10日 — Andrew Lock（andrewlock.net）を迎えるThe Unhandled Exception Podcast。Manningの電子書籍『ASP.NET Core in Action, Second Edition』の著者と、ASP.NETのさまざまな形式、Kubernetes、Blazor、gRPC、テスト、Minimal API、MediatRなどの幅広い話題を扱う。
* [Umbraco Heartcore and Blazor with Poornima Nayar](https://dotnetcore.show/episode-93-umbraco-heartcore-and-blazor-with-poornima-nayar/) - 2022年5月4日 — 再生時間：59分。Poornima Nayarと、Umbraco Heartcoreとその利用場面、Blazor、GraphQLについて話す。リモートAPIと通信するモバイルアプリとのGraphQLの相性も扱う。
* [In The Core of Blazor](https://www.youtube.com/watch?v=IF_7DPddmcs) - 2022年2月12日 — 再生時間：73分。Steve Sandersonが、技術の世界へ入った経緯、人生、教育、経歴、その間のさまざまな事柄について話す。
* [アーカイブ](https://github.com/AdrienTorris/awesome-blazor/tree/master/Archives) - [2021](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2021.md#podcasts)、[2020](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2020.md#podcasts)、[2019](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2019.md#podcasts)、[2018](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2018.md#podcasts)、[2017](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2017.md#podcasts)。

## プレゼンテーション資料 <a id="presentations-slides"></a>
* [Using .NET 5 with the Raspberry Pi](https://www.slideshare.net/PGallagher69/using-net-5-with-the-raspberry-pi) - 2021年1月28日 — Raspberry Piで.NET 5を使うことについての、SlideShareの資料。
* [アーカイブ](https://github.com/AdrienTorris/awesome-blazor/tree/master/Archives) - [2020](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2020.md#presentations-slides)、[2019](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2019.md#presentations-slides)、[2018](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2018.md#presentations-slides)。

## 開発ツール <a id="tooling"></a>
* [LiveSharp](https://github.com/ionoy/LiveSharp) - `.razor`ファイルを更新すると、ページを再読み込みせずに変更を即座に確認できる。再読み込みが不要なため、アプリの状態が保持される。[livesharp.net](https://www.livesharp.net/)。
* [BlazorFiddle](https://blazorfiddle.com) - ブラウザー内で使える、Blazor/.NET開発者向けの実験環境とコードエディター。
* [Ghostly Hosting](https://github.com/Nix1983/Ghostly-Hosting) - 新規のUbuntu VPSをBlazor Serverアプリの本番用ホスティング環境へ設定する、対話型のCLIツール。SSL、DNS、GitHubからのデプロイ、nginxリバースプロキシの自動設定を提供する。
* [Blazor Minimum Project Templates](https://github.com/jsakamoto/BlazorMinimumTemplates) - JavaScriptやCSSのライブラリを含まない、Blazorアプリのテンプレートパッケージ。
* [Blazor REPL](https://github.com/BlazorRepl/BlazorRepl) - ブラウザー内でBlazorコンポーネントの作成、コンパイル、実行、共有を行える。<https://blazorrepl.com>。
* [Blazor Snippets Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ScottSauber.blazorsnippets) - BlazorとRazorのスニペットを提供するVisual Studio Code拡張機能。
* [Publish-time Pre-render for Blazor Wasm](https://github.com/jsakamoto/BlazorWasmPreRendering.Build) - Blazor WebAssemblyアプリの発行時に、アプリを事前レンダリングし、publicフォルダーに静的HTMLファイルとして保存するパッケージ。
* [Publish SPA for GitHub Pages](https://github.com/jsakamoto/PublishSPAforGitHubPages.Build) - Blazor WebAssemblyプロジェクトへ追加して、GitHub Pagesへ簡単に公開できるようにするNuGetパッケージ。
* [WebCompiler](https://github.com/excubo-ag/WebCompiler) - SCSS、CSS、JavaScriptをコンパイル・縮小化・圧縮する.NETグローバルツール。
* [.NET Core](https://www.microsoft.com/net/download/dotnet-core) - .NET Core。
* [Razor+ Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=austincummings.razor-plus) - Razorへの対応を改善するVisual Studio Code拡張機能。
* [Tracetool](https://github.com/capslock66/Tracetool#Blazor-client--server) - .NET、Java、JavaScript、C++、Python、Delphi向けのTracetoolビューアーとクライアントAPI。
* [Visual Studio](https://www.visualstudio.com/vs/preview) - Visual Studioの最新のプレビュー版の案内。
* [Visual Studio Code](https://code.visualstudio.com/) - 無料でオープンソースの、複数のプラットフォームで使えるコードエディター。

## 書籍 <a id="books"></a>
* [Learning Blazor](https://learning.oreilly.com/library/view/learning-blazor/9781098113230) - WebAssemblyとC#でシングルページアプリを構築するための書籍。著者はDavid Pine。2022年2月3日のO’Reilly Early Release。
* [Microsoft Blazor: Building Web Applications in .NET 6 and Beyond](https://www.amazon.com/Microsoft-Blazor-Building-Applications-Beyond/dp/1484278445) - .NET 6を使ってBlazorを学ぶ、実践と演習を中心とする書籍。第3版、2021年12月8日。
* [Blazor WebAssembly by Example](https://www.amazon.com/Blazor-WebAssembly-Example-project-based-building-ebook/dp/B095X7FH6M) - .NET、Blazor WebAssembly、C#を使ったWebアプリの構築を、プロジェクトを通じて学ぶガイド。初版は2021年7月9日刊行。
* [Blazor in Action](https://www.manning.com/books/blazor-in-action) - Blazor、C#、.NETで再利用可能なUIコンポーネントとWebフロントエンドを構築する、実例を中心としたガイド。Manning Early Access Programは2020年10月開始。
* [Microsoft Blazor: Building Web Applications in .NET](https://www.amazon.com/Microsoft-Blazor-Building-Applications-NET/dp/1484259270/ref=pd_sbs_2/144-0745230-5007239?pd_rd_w=LPinn&pf_rd_p=3676f086-9496-4fd7-8490-77cf7f43f846&pf_rd_r=V7CQTYC0W8RZAVPVVXA1&pd_rd_r=b34ab9d9-09dd-4eca-9207-f56311bde8d2&pd_rd_wg=9V1tA&pd_rd_i=1484259270&psc=1) - .NETでWebアプリを構築するための書籍。第2版は2020年5月刊行。
* [Blazor Revealed](https://www.apress.com/gp/book/9781484243428) - .NETでWebアプリを構築するための書籍。2019年2月刊行。
* [Blazor Quick Start Guide: Build web applications using Blazor, EF Core, and SQL Server](https://www.amazon.in/gp/product/178934414X/ref=awesome_blazor) - Blazor、EF Core、SQL ServerでWebアプリを構築するための入門ガイド。2018年10月31日刊行。
* [Building Blazor Applications: A Developer's Guide](https://www.amazon.com/Building-Blazor-Applications-Developers-Guide/dp/B0DDBG4S3Q/ref=sims_dp_d_dex_ai_speed_loc_mtl_v5_t1_d_sccl_1_2/136-3795973-8719321?pd_rd_w=coqfA&content-id=amzn1.sym.da3a5e11-8f5f-413b-a68b-31ceac43c758&pf_rd_p=da3a5e11-8f5f-413b-a68b-31ceac43c758&pf_rd_r=9Q8447GTE9QT4WTPH5Z6&pd_rd_wg=IAqx1&pd_rd_r=ff570237-8604-4432-b4cd-a726ce880b23&pd_rd_i=B0DDBG4S3Q&psc=1) - Blazorアプリの構築についての開発者向けガイド。2024年8月14日刊行。
* [Mastering Blazor UI: Advanced Custom Components and Design Strategies](https://www.amazon.com/Mastering-Blazor-UI-Components-Strategies/dp/B0DG2RJD1R/ref=sr_1_1?crid=SK6RU9T2BOGD&dib=eyJ2IjoiMSJ9.s5wnoFiu-YggQzMUNkXdPUUkrmyKJs-ffmHU1vbgjlJYGeFcYE04oohzd7hcoj9zCTyfe-R07XyKNQvyU5t7Mw.NRJ3TXh3AQZpXwXQmV5IoCPC9y1T-ybHWaoO9G9DvFY&dib_tag=se&keywords=blazor+gallivan&qid=1728060552&s=books&sprefix=blazor+gallivan%2Cstripbooks%2C127&sr=1-1) - 高度なカスタムコンポーネントと設計戦略を扱う、Blazor UIの書籍。2024年9月3日刊行。

## 電子書籍 <a id="e-books"></a>
* [Blazor WebAssembly Succinctly](https://www.syncfusion.com/ebooks/blazor_webassembly_succinctly) - 2020年8月31日 — BlazorはC#で記述したRazor技術を使い、クライアント側またはサーバー側の構成でSPAのWebページを作成するためのフレームワーク。クライアント側のBlazor WebAssemblyはユーザーのブラウザー内で完全に実行され、原文では多くのアプリで高速だと説明されている。Michael WashingtonがBlazorの主要な要素を紹介し、サンプルアプリの構築を通して追加機能を解説する。無料の電子書籍。
* [Blazor Succinctly](https://www.syncfusion.com/ebooks/blazor-succinctly) - 2020年4月16日 — Blazorフレームワークを始めるための無料の電子書籍。
* [Blazor, A Beginners Guide](https://www.telerik.com/campaigns/blazor/wp-beginners-guide-ebook) - 2020年3月18日 — Blazorフレームワークを始めるための無料の電子書籍。[サンプルのソースコード](https://github.com/EdCharbeneau/BlazorBookExamples)。
* [Blazor for ASP.NET Web Forms developers](https://dotnet.microsoft.com/learn/aspnet/architecture#blazor-for-web-forms-devs-ebook-swim) - Microsoftによる、ASP.NET Web Forms開発者向けのBlazorの無料の電子書籍。
* [Using CSLA 5: Blazor and WebAssembly](https://store.lhotka.net/using-csla-5-blazor-and-webassembly) - Blazor UIフレームワークを扱う書籍。サーバー側およびクライアント側WebAssemblyプロジェクトの作成、認証と認可の実装、データバインディングの使用を解説する。さらに、完成したサンプルアプリを通して、CSLA .NETがBlazorをどう支援するかを説明する。
* [An Introduction to Building Applications with Blazor](https://www.amazon.com/Introduction-Building-Applications-Blazor-applications-ebook/dp/B07WPQTT6H) - 2019年8月24日 — MicrosoftのC#フレームワークでアプリを作り始めるための入門書。原文では、このフレームワークは使いやすいと説明されている。
* [アーカイブ](https://github.com/AdrienTorris/awesome-blazor/tree/master/Archives) - [2018](https://github.com/AdrienTorris/awesome-blazor/blob/master/Archives/2018.md#e-books)。

## コース <a id="courses"></a>
* [Build a web app with Blazor WebAssembly and Visual Studio Code](https://docs.microsoft.com/learn/modules/build-blazor-webassembly-visual-studio-code/) - Microsoft Learnで、Blazor WebAssemblyとVisual Studio Codeを使ってWebアプリを構築する。
* [DevOps and Docker Support for .NET Core Blazor Applications](https://www.udemy.com/course/devops-and-docker-support-for-net-core-blazor/?ranMID=39197&ranEAID=w6JuN00t%2Fzo&ranSiteID=w6JuN00t_zo-Kv09UYco3AqwmZkipiMIXw&utm_source=aff-campaign&LSNPUBID=w6JuN00t%2Fzo&utm_medium=udemyads) - 2020年6月 — Udemyの.NET Core Blazorアプリ向けDevOpsとDocker対応の講座。ASP.NET Core Blazorを使い、DevOpsの概念とBlazorアプリのDocker化を学ぶ。
* [Programming in Blazor - ASP.NET Core 3.1](https://www.udemy.com/course/programming-in-blazor-aspnet-core) - Udemyの、C#で対話型のWebアプリを作成する講座。
* [Creating Blazor Components](https://www.pluralsight.com/courses/creating-blazor-components) - 2019年12月 — Blazorアプリの構築をコンポーネントの構築と捉え、コンポーネントへの理解を深めることに重点を置くPluralsightの講座。
* [Authentication and Authorization in Blazor Applications](https://www.pluralsight.com/courses/authentication-authorization-blazor-applications) - 2019年12月 — 認証と認可に関する各種の推奨手法を使い、Blazorアプリのセキュリティを確保する方法を学ぶPluralsightの講座。
* [Blazor: Getting Started](https://www.pluralsight.com/courses/getting-started-blazor) - 2019年12月 — MicrosoftのBlazorで、JavaScriptを使わずC#で対話型のWeb UIを書く方法を、最初のアプリの構築を通して実践的に学ぶPluralsightの講座。
* [Blazor In-Depth Workshop (Blaze Invaders)](https://www.csharpacademy.com/courseinfo/2ccff0ac-4d3e-4d25-9368-6c1474640de5) - 2019年12月 — C# AcademyのBlazorワークショップ。実際に動作するブラウザーゲームを構築しながら、Blazorの本格的な概念を学ぶ。
* [Blazor and Razor Components in a nutshell](https://www.udemy.com/course/blazor-and-razor-components-in-a-nutshell/) - 2019年10月 — コンパイルしたコードをWebAssembly上でブラウザー内に直接実行できるフレームワークの使い方を学ぶ、Udemyの講座。
* [Blazor on ASP.NET Core 3.0](https://www.skillshare.com/site/join?teacherRef=102575464&t=Blazor-on-ASP.NET-Core-3.0&sku=1662883580) - 2019年10月 — ASP.NET Core 3.0上のBlazorを扱うSkillShareの講座。
* [Blazor First Look on LinkedIn Learning](https://www.linkedin.com/learning/blazor-first-look) - LinkedIn LearningのBlazor入門講座。[ソースコード](https://github.com/Dedac/Beam)。
* [Free Blazor Training Course](https://www.devexpress.com/support/training/blazor/) - 原文で無料と説明されているDevExpressのBlazorトレーニング講座。[ソースコード](https://github.com/DevExpress/blazor-training-samples)。
* [Getting Started with Blazor](https://codered.eccouncil.org/course/getting-started-with-blazor) - 2021年6月 — Blazorの主要な概念を知り、Webアプリを容易に作成する方法を学ぶ。

## コミュニティ <a id="community"></a>
* [Awesome Blazor on Twitter](https://twitter.com/awesomeblazor) - このリポジトリのTwitterフィード。
* [BuiltOnBlazor](https://builtonblazor.net) - Blazorで動作するサイトの紹介。
* [Discord](https://discord.com/channels/732297728826277939/732297874062311424) - DotNetEvolutionのDiscordサーバーにあるBlazorチャンネル。
* [Gitter](https://gitter.im/aspnet/Blazor) - GitterでのBlazorの議論。
* [I Love DotNet](https://github.com/ILoveDotNet/ilovedotnet) - 開発者による開発者のための、.NETの知識共有プラットフォーム。Blazorで作られた実際に操作できるデモを備える。[ilovedotnet.org](https://www.ilovedotnet.org)。
* [Learn Blazor](https://learn-blazor.com/) - コミュニティによるBlazorのドキュメント。
* [Blazor Help Website](https://blazorhelpwebsite.com/) - 主にサーバー側Blazorを扱うブログとコードサンプル。
* [Practical samples of Blazor](https://github.com/dodyg/practical-aspnetcore/tree/master/projects/blazor) - Blazorの実用的なサンプル。
* [Practical samples of Blazor Server-Side](https://github.com/dodyg/practical-aspnetcore/tree/master/projects/blazor-ss) - サーバー側Blazorの実用的なサンプル。
* [Reddit](https://www.reddit.com/r/Blazor/) - Blazorのサブレディット。
* [Stack Overflow](https://stackoverflow.com/questions/tagged/blazor) - Stack OverflowのBlazorに関する質問フィード。
* [Twitter](https://twitter.com/hashtag/blazor) - TwitterのBlazorハッシュタグ。
* [WebAssemblyMan](https://www.webassemblyman.com/) - BlazorとWebAssemblyのマニュアルページ。

## その他の言語 <a id="other-languages"></a>
* [Blaze of Code](https://blazeofcode.com/) - ［ポルトガル語］Blazorについてのブログ。
* [Blazor.ru](https://blazor.ru/) - ［ロシア語］旧公式ドキュメントをロシア語に翻訳したサイト。
* [DevApps.be's podcast #44](http://devapps.be/podcast/blazor-webassembly/) - ［フランス語］DevApps.beのポッドキャスト第44回。「Blazor et WebAssembly vont-ils tuer JavaScript ?」（BlazorとWebAssemblyはJavaScriptをなくすのか？）。
* [DevApps.be's podcast #47](http://devapps.be/podcast/47-typescript-uno-angular-docfx/) - ［フランス語］DevApps.beのポッドキャスト第47回。「Actualités : TypeScript, Uno, Angular, DocFX, Database」（最新情報：TypeScript、Uno、Angular、DocFX、データベース）。
* [Modern web apps with Blazor](https://media.aspitalia.com/events/VS2019-Blazor.media) - ［イタリア語］Blazorについての動画。
* [Blazor Developer Italiani](https://blazordev.it/) - ［イタリア語］役立つ記事とイベント情報を提供する、イタリアのBlazorコミュニティのサイト。
* [Playlist - Programando en Blazor](https://www.youtube.com/playlist?list=PL0kIvpOlieSNdIPZbn-mO15YIjRHY2wI9) - ［スペイン語］Blazorについての連続動画。
* [Insights from the oracle](http://blog.ppedv.de/?tag=Blazor) - ［ドイツ語］Blazorについてのブログ。
* [ASP.NET Core Blazor 5.0: Blazor WebAssembly und Blazor Server: Moderne Single-Page-Web-Applications mit .NET, C# und Visual Studio](https://www.amazon.de/exec/obidos/ASIN/393427935X/itvisions-21) - ドイツ語のBlazorの書籍。2020年9月15日刊行、毎月更新。
