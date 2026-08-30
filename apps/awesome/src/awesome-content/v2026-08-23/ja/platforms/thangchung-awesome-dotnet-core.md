---
title: "thangchung/awesome-dotnet-core"
description: ".NET Coreのフレームワーク、ライブラリ、ツール、教材、コミュニティ集"
licenseSource: "github-thangchung-awesome-dotnet-core-readme-md"
---

# Awesome .NET Core [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[awesome](https://github.com/sindresorhus/awesome), [awesome-dotnet](https://github.com/quozd/awesome-dotnet), [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs), [frontend-dev-bookmarks](https://github.com/dypsilon/frontend-dev-bookmarks)をインスピレーションとして受けています.

貢献は常に歓迎されています！まず [contribution guidelines](https://github.com/thangchung/awesome-dotnet-core/blob/master/contributing.md) ページを確認してください。私たちは専有ソフトウェアや商業ソフトウェアも受け入れています.

すべての [contributors](https://github.com/thangchung/awesome-dotnet-core/graphs/contributors) に感謝します。あなたたちのおかげで、このプロジェクトは可能であり、素晴らしい存在です。目標は、非常に有名なリソースをカテゴリー分けした、コミュニティが中心となるコレクションを構築することです.

私の [blog](https://dev.to/thangchung) をチェックしてみてください。あるいは [Twitter](https://twitter.com/thangchung) でお会いしましょう！

## Contents

* [General](#general)
* [Frameworks, Libraries and Tools](#frameworks-libraries-and-tools)
  * [API](#api)
  * [Application Frameworks](#application-frameworks)
  * [Application Templates](#application-templates)
  * [Authentication and Authorization](#authentication-and-authorization)
  * [Blockchain](#blockchain)
  * [Bot](#bot)
  * [Build Automation](#build-automation)
  * [Bundling and Minification](#bundling-and-minification)
  * [Caching](#caching)
  * [CMS](#cms)
  * [Code Analysis and Metrics](#code-analysis-and-metrics)
  * [Compression](#compression)
  * [Compilers, Transpilers and Languages](#compilers-transpilers-and-languages)
  * [Cryptography](#cryptography)
  * [Database](#database)
  * [Database Drivers](#database-drivers)
  * [Database Tools and Utilities](#database-tools-and-utilities)
  * [Date and Time](#date-and-time)
  * [Distributed Computing](#distributed-computing)
  * [E-Commerce and Payments](#e-commerce-and-payments)
  * [Exceptions](#exceptions)
  * [Functional Programming](#functional-programming)
  * [Graphics](#graphics)
  * [GUI](#gui)
  * [IDE](#ide)
  * [Internationalization](#internationalization)
  * [IOC](#ioc)
  * [Logging](#logging)
  * [Machine Learning and Data Science](#machine-learning-and-data-science)
  * [Mail](#mail)
  * [Mathematics](#mathematics)
  * [Media](#media)
  * [Networking](#networking)
  * [Misc](#misc)
  * [Office](#office)
  * [ORM](#orm)
  * [Profiling](#profiling)
  * [Queue and Messaging](#queue-and-messaging)
  * [Query Builders](#query-builders)
  * [Scheduler and Job](#scheduler-and-job)
  * [SDKs](#sdks)
  * [Security](#security)
  * [Searching](#searching)
  * [Serialization](#serialization)
  * [Template Engine](#template-engine)
  * [Testing](#testing)
  * [Tools](#tools)
  * [Web Framework](#web-framework)
  * [Web Socket](#web-socket)
  * [Windows Service](#windows-service)
  * [Workflow](#workflow)
* [Roadmaps](#roadmaps)
* [Starter Kits](#starter-kits)
* [Sample Projects](#sample-projects)
* [Articles](#articles)
* [Books](#books)
* [Videos](#videos)
* [Podcasts](#podcasts)
* [Community](#community)

## General

* [ASP.NET Core Documentation](https://docs.asp.net/en/latest/) - ASP.NET Coreの公式ドキュメントサイト
* [.NET Core Documentation](https://docs.microsoft.com/en-us/dotnet/articles/welcome) - .NET Core、C#、F#およびVisual Basicの技術ドキュメントのホームページ。基本概念、初学者向けの手順、チュートリアルおよびサンプルを含む。
* [.NET Core SDK](https://www.microsoft.com/net/core) - .NET Core SDKは、マイクロソフトおよび.NETコミュニティが維持する一般用途の開発プラットフォームであり、[GitHub](https://github.com/dotnet/core)上で管理されている。
* [.NET Platform Standard](https://github.com/dotnet/corefx/blob/1719a3fe2a5c81b67a4909787da4a02fb0d0d419/Documentation/architecture/net-platform-standard.md) - .NETの旧バージョンと新バージョンの違い。
* [Introducing .NET Standard 2.0](https://blogs.msdn.microsoft.com/dotnet/2016/09/26/introducing-net-standard) - .NET Standard 2.0における実施内容の説明および、現在の.NET Standardに欠けている部分の開発計画（ロードマップ）。
* [Clean Code .NET/.NET Core](https://github.com/thangchung/clean-code-dotnet) - .NET / .NET Core向けに適応されたClean Codeの概念。

## Frameworks, Libraries and Tools

### API

* [autorest](https://github.com/Azure/autorest) - Swagger（OpenAPI）仕様コードジェネレーター。C#およびRazorテンプレートをサポート。C#、Java、Node.js、TypeScript、PythonおよびRubyに対応。`4.5.x or above`
* [aspnet-api-versioning](https://github.com/Microsoft/aspnet-api-versioning) - ASP.NET Web APIおよびODataにサービスAPIバージョニングを追加するためのライブラリセット。
* [AspNetCoreRateLimit](https://github.com/stefanprodan/AspNetCoreRateLimit) - ASP.NET Coreにおけるリクエスト制限のミドルウェア。
* [CondenserDotNet](https://github.com/Drawaes/CondenserDotNet) - KestrelとConsulを使用したAPIコンデンサ／リバースプロキシ、軽量Consulライブラリを含む。
* [Flurl](https://github.com/tmenier/Flurl) - .NET向けのフリュイントURLビルダーおよびテスト可能なHTTP。[https://flurl.dev](https://flurl.dev)
* GraphQL
  * [Dapper.GraphQL](https://github.com/landmarkhw/Dapper.GraphQL) - Dapperおよびgraphql-dotnetプロジェクトを容易に統合し、パフォーマンスを主な考慮事項とするため設計されたライブラリ。
  * [graphql-aspnetcore](https://github.com/JuergenGutsch/graphql-aspnetcore) - ASP.NET CoreでGraphQLエンドポイントを作成するためのミドルウェア。
  * [graphql-convention](https://github.com/graphql-dotnet/conventions) - このライブラリは、既存のプロパティゲッターおよびメソッドをフィールド解決子として使用して、.NETクラスを自動的にGraphQLスキーマ定義に包むための補助層を提供する。
  * [graphiql-dotnet](https://github.com/JosephWoodward/graphiql-dotnet) - ASP.NET Core向けのGraphiQLミドルウェア。
  * [graphql-dotnetcore](https://github.com/mkmarek/graphql-dotnetcore) - .NET CoreベースのGraphQL。[https://github.com/graphql/graphql-js](https://github.com/graphql/graphql-js)
  * [graphql-dotnet](https://github.com/graphql-dotnet/graphql-dotnet) - .NET向けのGraphQL
  * [graphql-dotnet-server](https://github.com/graphql-dotnet/server) - .NET向けのGraphQL - サブスクリプショントランスポートWebSockets。
  * [Hot Chocolate](https://github.com/ChilliCream/hotchocolate) - .Net Coreおよび.NET Framework向けのGraphQLサーバー
  * [FSharp.Data.GraphQL](https://github.com/fsprojects/FSharp.Data.GraphQL) - FacebookのGraphQLクエリ言語をF#で実装したもの。[https://fsprojects.github.io/FSharp.Data.GraphQL](https://fsprojects.github.io/FSharp.Data.GraphQL)
  * [parser](https://github.com/graphql-dotnet/parser) - .NET上でGraphQLのリーダーおよびパーサー。
  * [tanka-graphql](https://github.com/pekkah/tanka-graphql) - GraphQLの実行およびサーバーライブラリ。SignalR、Apollo、スキーマ操作など、Apolloおよびgraphql-jsから知られている機能をサポート。
* [halcyon](https://github.com/visualeyes/halcyon) - ASP.NET 用の HAL 実装
* [JSON API .NET Core](https://github.com/Research-Institute/json-api-dotnet-core) - JSON:API に準拠した API を構築するためのフレームワーク。REST ボイラープレートを排除することを目的としている。
* [LightNode](https://github.com/neuecc/LightNode) - OWIN [http://neuecc.github.io/LightNode](http://neuecc.github.io/LightNode) に基づいたマイクロ RPC/REST フレームワーク
* [NetCoreStack.Proxy](https://github.com/NetCoreStack/Proxy) - .NET Standard 2.0 (NetCoreStack Flying Proxy) 用の型安全かつ分散型の REST ライブラリ
* [NSwag](https://github.com/RSuter/NSwag) - .NET、Web API および TypeScript 用の Swagger/OpenAPI ツールチェーン。[http://NSwag.org](http://NSwag.org)
* [OData](https://github.com/OData/WebApi/tree/feature/netcore) - オープンデータプロトコル（OData）は、一貫したデータモデルで定義されたURIを識別したリソースを、シンプルなHTTPメッセージを使ってウェブクライアントが公開および編集できるようにするHTTPベースのデータサービスの作成を可能にする。
* [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) - OpenAPI Generatorは、OpenAPI仕様（v2、v3）を指定することで、APIクライアントライブラリ（例：C#、TypeScriptなど）、サーバースタブ（ASP.NET Core、NancyFxなど）、ドキュメントおよび設定を自動生成できる。
* [refit](https://github.com/paulcbetts/refit) - Xamarinおよび.NET用の自動型安全かつ分散型のRESTライブラリ
* [RestClient.Net](https://github.com/MelbourneDeveloper/RestClient.Net) - すべてのC#プラットフォーム向けのクロスプラットフォームRESTクライアント
* [RestEase](https://github.com/canton7/RestEase) - 使いやすく、シンプルかつカスタマイズ可能な型安全REST APIクライアントライブラリ
* [RestLess](https://github.com/letsar/RestLess) - .NET Standard用の自動型安全かつ反射なしのREST APIクライアントライブラリ
* [Restier](https://github.com/OData/RESTier) - RESTierは、.NETプラットフォーム上で標準化されたOData V4ベースのRESTフルサービスを構築するためのRESTフルAPI開発フレームワーク。
* [Restsharp](https://github.com/restsharp/RestSharp) - .NET用のシンプルなRESTおよびHTTP APIクライアント
* [Swashbuckle](https://github.com/domaindrivendev/Swashbuckle.AspNetCore) - WebApiプロジェクトにスワッグをスムーズに追加。
  * [MicroElements.Swashbuckle.FluentValidation](https://github.com/micro-elements/MicroElements.Swashbuckle.FluentValidation) - スワッグにフラットバリデーションルールを追加。
  * [Swashbuckle.AspNetCore.Filters](https://github.com/mattfrear/Swashbuckle.AspNetCore.Filters) - Swashbuckle.AspNetCore用の便利なフィルターの集合。
* [WebAnchor](https://github.com/mattiasnordqvist/Web-Anchor) - Web Anchorは、ウェブリソースへの型安全かつテスト可能で柔軟な、実行時生成されたアクセスを提供する。
* [WebAPIContrib for ASP.NET CORE](https://github.com/WebApiContrib/WebAPIContrib.Core) - ASP.NET Core向けのコミュニティ貢献。

### Application Frameworks
* [ASP.NET Boilerplate](https://github.com/aspnetboilerplate/aspnetboilerplate) - ASP.NET Boilerplateは、新しい現代的なウェブアプリケーションに特に設計された汎用アプリケーションフレームワーク。既に慣れ親しんだツールを活用し、それらの周辺でベストプラクティスを実装することで、SOLIDな開発体験を提供する。
* [Abp vNext](https://github.com/abpframework/abp) - Abp vNextは、オープンソース [ASP.NET Boilerplate](https://github.com/aspnetboilerplate/aspnetboilerplate) フレームワークの次世代である。現代的なウェブアプリケーションを構築するための完全なアーキテクチャと強力なインフラストラクチャ！ベストプラクティスとコンベンションを採用し、SOLIDな開発体験を提供する。
* [AsyncEx](https://github.com/StephenCleary/AsyncEx) - async/await 用のヘルパーライブラリ
* [Aeron.NET](https://github.com/AdaptiveConsulting/Aeron.NET) - UDPユニキャスト、UDPマルチキャスト、およびIPCメッセージの効率的かつ信頼性の高い送信 - Aeronの.NET版
* [akka.net](https://github.com/akkadotnet/akka.net) - .NETおよびMono上で高スケーラブル、分散型、障害に強いイベント駆動アプリケーションを構築するためのツールキットおよびランタイム
* [Aggregates.NET](https://github.com/volak/Aggregates.NET) - Aggregates.NETは、NServiceBusおよびEventStoreの優れたライブラリを統合するためのフレームワーク
* [ASP.NET MVC](https://github.com/dotnet/aspnetcore/tree/master/src/Mvc) - 動的なウェブサイトを構築するためのモデル・ビュー・コントローラーフレームワーク。コンセプトの明確な分離を実現し、MVC、Web API、Web Pages w/ Razorを統合。
* [Butterfly Server .NET](https://github.com/firesharkstudios/butterfly-server-dotnet) - 接続されたクライアント間でデータセットを自動同期するWeb APIとサブスクリプションAPIを定義することで、リアルタイムウェブアプリケーションおよびネイティブアプリを最小限の労力で構築可能。
* [CAP](https://github.com/dotnetcore/CAP) - SOAまたはマイクロサービスアーキテクチャにおけるシステム統合に用いる、ローカルに永続化されたメッセージ機能を持つEventBus。
* [Carter](https://github.com/CarterCommunity/Carter) - Carterは、ASP.Net Coreで使用できるNancy風のルーティングを可能にするライブラリ。
* [Chromely](https://github.com/mattkol/Chromely) - Electron.NETの軽量な代替品。Electron for .NET/.NET Core。
* [Cinchoo ETL](https://github.com/Cinchoo/ChoETL) - .NET向けのETLフレームワーク（CSV、フラットファイル、XML、JSON、キーバリュー形式ファイルのパーサー／ライター）。
* [CQRSlite](https://github.com/gautema/CQRSlite) - C#でCQRSおよびイベントソースアプリケーションを書くための軽量フレームワーク。
* [dataaccess_aspnetcore](https://github.com/digipolisantwerp/dataaccess_aspnetcore) - DataAccess Toolboxは、Entity Framework Core 1.0を使用したASP.NET Coreにおけるデータアクセスの基本クラスを提供。
* [DNTFrameworkCore](https://github.com/rabbal/DNTFrameworkCore) - ASP.NET Coreベースの高品質ウェブアプリケーションを構築するための軽量かつ拡張可能なインフラ。
* [DotNetCorePlugins](https://github.com/natemcmaster/DotNetCorePlugins) - .NET Coreでアセンブリをプラグインとして読み込むためのライブラリ。
* [DotnetSpider](https://github.com/dotnetcore/DotnetSpider) - DotnetSpiderは、WebMagicおよびScrapyに類似した.NET標準のウェブスクレイピングライブラリ。軽量で、効率的で、高速な高レベルウェブスクレイピング＆スクレイピングフレームワーク。
* [DotNetty](https://github.com/Azure/DotNetty) - nettyの.NET版。イベント駆動型の非同期ネットワークアプリケーションフレームワーク。
* [dotvvm](https://github.com/riganti/dotvvm) - ウェブアプリ向けのオープンソースMVVMフレームワーク。
* [ElectronNET](https://github.com/ElectronNET/Electron.NET) - ASP.NET NET Coreを用いてクロスプラットフォームのデスクトップアプリを構築。
* [EmbedIO](https://github.com/unosquare/embedio) - .NET Frameworkおよび.NET Core向けの極めて小さな、モジュールベースのウェブサーバー。
* [Ether.Network](https://github.com/aloisdg/Ether.Network) - Ether.Networkは、TCP/IPプロトコル上でシンプルで高速かつスケーラブルなソケットサーバーやクライアントアプリケーションを構築できるオープンソースネットワークライブラリ。
* [EventFlow](https://github.com/eventflow/EventFlow) - Async/await を採用した最初の CQRS+ES および DDD フレームワーク（.NET用）
* [ExcelDataReader](https://github.com/ExcelDataReader/ExcelDataReader) - C#で記述された、Microsoft Excelファイルを読み込むための軽量かつ高速なライブラリ
* [ExtCore](https://github.com/ExtCore) - ASP.NET Core 1.0 をベースにした、モジュール化・拡張可能なウェブアプリケーションを構築するための無料、オープンソース、マルチプラットフォームフレームワーク
* [Finbuckle.MultiTenant](https://github.com/Finbuckle/Finbuckle.MultiTenant) - Finbuckle.MultiTenant は、ASP.NET 2.0+ 用の .NET Standard ライブラリで、マルチテナント対応を実現。テナント解決、各テナントごとのアプリケーション設定、各テナントごとのデータ隔离機能を提供
* [fission](https://github.com/fission/fission) - Kubernetes 用の高速サーバレス関数
* [grpc](https://github.com/grpc/grpc/tree/master/src/csharp) - リモートプロシージャ呼び出し（RPC）は、分散アプリケーションやサービスの構築において有用な抽象化を提供。このリポジトリ内のライブラリは、HTTP/2 上にレイヤーされた gRPC プロトコルの具体的な実装を提供しており、サポートされている言語の任意の組み合わせでクライアントとサーバー間の通信を可能にする
* [Halibut](https://github.com/OctopusDeploy/Halibut) - SSL を使用した JSON-RPC を用いた .NET 用の安全な通信スタック
* [MagicOnion](https://github.com/neuecc/MagicOnion) - gRPC をベースにした HTTP/2 RPC ストリーミングフレームワーク（.NET、.NET Core および Unity用）
* [MassTransit](https://github.com/MassTransit/MassTransit) - .NET 用の分散アプリケーションフレームワーク
* [microdot](https://github.com/gigya/microdot) - オープンソースの .NET ミクロサービスフレームワーク
* [MoreLINQ](https://github.com/morelinq/MoreLINQ) - LINQ to Objects への拡張
* [Nancy](https://github.com/NancyFx/Nancy) - .NET および Mono 上で HTTP 基盤のサービスを構築するための軽量かつ低儀礼のフレームワーク
* [opencvsharp](https://github.com/shimat/opencvsharp) - OpenCV 用の .NET フレームワーク
* [orleans](https://github.com/dotnet/orleans) - 分散型高スケーラブルコンピューティングアプリケーションを構築するための、複雑な並列処理やスケーリングパターンを学ぶ必要のないシンプルなアプローチを提供するフレームワーク
* [Prism](https://github.com/PrismLibrary/Prism) - Prism は、WPF、Windows 10 UWP、および Xamarin Forms での、緩く結合された、保守性とテスト可能性の高い XAML アプリケーションを構築するためのフレームワーク
* [protoactor-dotnet](https://github.com/AsynkronIT/protoactor-dotnet) - Golang および C# 用の超高速分散アクター [http://proto.actor](http://proto.actor)
* [resin](https://github.com/kreeben/resin) - 16ビット幅のベクトル空間検索エンジン（HTTP API およびプラグイン可能な読み書きパイプラインを備える）
* [RService.io](https://github.com/Stoom/RService.IO) - ASP.Net Core レストフルミクロサービスフレームワークで、高速性と使いやすさに焦点を当てている
* [ServiceStack](https://github.com/ServiceStack/ServiceStack) - 丁寧に設計された、驚異的に高速で、非常に楽しいウェブサービスすべてに適用可能 [https://servicestack.net](https://servicestack.net)
* [Steeltoe OSS](https://github.com/SteelToeOSS) - 一般的なミクロサービスパターンに向けた .NET ツールキット
* [Strathweb.TypedRouting.AspNetCore](https://github.com/filipw/Strathweb.TypedRouting.AspNetCore) - ASP.NET Core MVCプロジェクトにおける強制型ルーティングを可能にするライブラリ
* [surging](https://github.com/dotnetcore/surging) - Surgingは、軽量かつ高性能なモジュール化RPCリクエストパイプラインを提供するマイクロサービスエンジンです。このエンジンはHTTP、TCP、WS、Mqtt、UDP、DNSプロトコルをサポートしています。ZooKeeperおよびConsulをレジストリとして使用し、ハッシュアルゴリズム、ランダム、ポーリング、圧力最小優先度をロードバランシングアルゴリズムとして採用し、組み込みのサービスガバナンスにより、信頼性の高いRPC通信を確保しています。
* [Xer.Cqrs](https://github.com/jeyjeyemem/Xer.Cqrs) - 属性ルーティングおよびホストされたハンドラーをサポートするCQRSパターンに基づいたアプリケーションを作成するためのシンプルなライブラリ。C#で開発され、.NET Standard 1.0をターゲットとしています。
* [X.PagedList](https://github.com/dncuug/X.PagedList) - ASP.NET／ASP.NET Coreにおける任意のIEnumerable/IQueryableを簡単にページングできるライブラリ。

### Application Templates
* [.NET Boxed](https://github.com/Dotnet-Boxed/Templates) - バッテリーを内蔵したプロジェクトテンプレートで、最小限のコードで開発を開始できるように提供。ASP.NET Core APIおよびGraphQLテンプレートを含む。
* [aspnet-core-react-template](https://github.com/bradymholt/aspnet-core-react-template) - ASP.NET Core 2.0 / React SPAテンプレートアプリ。
* [AspNetCoreSpa](https://github.com/asadsahi/AspNetCoreSpa) - Asp.Net Core 2+ & Angular 6 SPAによる、Angular CLIを用いたフル機能アプリ。
* [ASP.NET-MVC-Template](https://github.com/NikolayIT/ASP.NET-MVC-Template) - ASP.NET MVC 5およびASP.NET Core向けの即時使用可能なテンプレート。リポジトリ、サービス、モデルマッピング、DI、StyleCopの警告を修正済み。
* [AddFeatureFolders](https://github.com/OdeToCode/AddFeatureFolders) - ASP.NET CoreにおけるMVCコントローラーおよびビューに機能フォルダを有効にする機能。
* [Angular Visual Studio Webpack Starter](https://github.com/damienbod/AngularWebpackVisualStudio) - Webpack、Visual Studio、ASP.NET CoreおよびAngularを対象としたテンプレート。アプリケーションのクライアントおよびサーバー側が1つのASP.NET Coreプロジェクト内で実装されているため、デプロイが容易になります。
* [CleanArchitecture](https://github.com/ardalis/CleanArchitecture) - ASP.NET Coreを用いたクリーンアーキテクチャのスタート地点。クリーンアーキテクチャは、同じように結合が弱い、依存性を逆転させたアーキテクチャの名前の一例であり、hexagonal、ports-and-adapters、またはonionアーキテクチャと呼ばれることもあります。
* [CleanArchitecture (SPA)](https://github.com/JasonGT/CleanArchitecture) - Angular 8およびASP.NET Core 3を用いたクリーンアーキテクチャの原則に基づいたシングルページアプリ（SPA）を作成するためのソリューションテンプレート
* [DNTFrameworkCoreTemplate](https://github.com/rabbal/DNTFrameworkCoreTemplate) - [DNTFrameworkCore](https://github.com/rabbal/DNTFrameworkCore)に基づいたブレーカー用プロジェクトテンプレート
* [dotnet new caju](https://github.com/ivanpaulovich/dotnet-new-caju) - dotnet newテンプレートで、Hexagonal、Cleanまたはイベントソースアーキテクチャスタイルに基づいた層別アプリケーション設計を支援。複数のデータアクセスフレームワーク（MongoDB、EntityFramework、DapperまたはKafka）をサポートし、完全にテスト可能。
* [EISK](https://github.com/EISK/eisk.webapi) - .NET Core上でスケーラブルなアプリケーションを構築するための開発リソースを提供。[architectural best practices](https://docs.microsoft.com/en-us/dotnet/standard/modern-web-apps-azure-architecture/common-web-application-architectures)（DDD、onionアーキテクチャなど）を用いる。
* [JavaScriptServices](https://github.com/aspnet/JavaScriptServices) - Microsoft ASP.NET Core JavaScript Services
* [kendo-ui-core](https://github.com/telerik/kendo-ui-core) - HTML5およびjQueryベースのウィジェットライブラリ。[http://www.telerik.com/kendo-ui](http://www.telerik.com/kendo-ui)を提供。
* [QuickApp](https://github.com/emonney/QuickApp) - ASP.NET Core / Angular4のスタートアッププロジェクトテンプレート。完全なログイン、ユーザーおよびロール管理を提供。
* [Serenity](https://github.com/volkanceylan/Serenity) - Serenityは、サービスベースアーキテクチャを用いてデータ中心のビジネスアプリケーションの開発を簡素化・短縮するためのASP.NET MVC / TypeScriptアプリケーションプラットフォームです。
* [Toucan](https://github.com/mrellipse/toucan) - シングルページアプリケーションを構築するためのブレーカー。サーバーはSOLID原則に基づいたマルチプロジェクト.NET Coreソリューション。クライアントはTypeScript 2、Vuejs 2、Vuex 2。

### Authentication and Authorization
* [AspNet.Security.OpenIdConnect.Server](https://github.com/aspnet-contrib/AspNet.Security.OpenIdConnect.Server) - OWIN/Katana および ASP.NET Core 用の OpenID Connect/OAuth2 サーバーフレームワーク
* [Auth0](https://github.com/auth0/auth0.net) - 現代の認証に向けたホストされた、企業レベルのプラットフォーム
* [Casbin.NET](https://github.com/casbin-net/Casbin.NET) - C# で実装可能なアクセス制御モデル（ACL、RBAC、ABAC）をサポートする認可ライブラリ
* [Identity](https://github.com/aspnet/Identity) - ASP.NET Core ワークアプリケーションのメンバーシップシステムであり、メンバーシップ、ログイン、ユーザー情報の管理を含む
* [IdentityServer](https://github.com/IdentityServer/IdentityServer4) - ASP.NET Core 1.0 および 2.0 用の IdentityServer
  * [IdentityServer4.EntityFramework](https://github.com/IdentityServer/IdentityServer4.EntityFramework) - EntityFramework のパース層
  * [IdentityServer4.MongoDB](https://github.com/diogodamiani/IdentityServer4.MongoDB) - MongoDB のパース層
  * [IdentityServer4.EntityFrameworkCore](https://github.com/2020IP/TwentyTwenty.IdentityServer4.EntityFrameworkCore) - Entity Framework Core のパース層
  * [IdentityServer4.Templates](https://github.com/IdentityServer/IdentityServer4.Templates) - IdentityServer4 用の dotnet CLI テンプレート
* [Okta](https://github.com/okta/okta-aspnet) - 現代の認証に向けたホストされた、企業レベルのプラットフォーム
* [openiddict](https://github.com/openiddict/openiddict-core) - ASP.NET Core 用の使いやすい OpenID Connect サーバー
  * [oidc-debugger](https://github.com/nbarbettini/oidc-debugger) - OAuth 2.0 および OpenID Connect のデバッグツール
* [stormpath-sdk](https://github.com/stormpath/stormpath-sdk-dotnet) - Stormpath と ASP.NET Core を使って [simple, secure web applications](https://github.com/stormpath/stormpath-aspnetcore) を構築する
* [stormpath-sdk](https://github.com/stormpath/stormpath-sdk-dotnet) - Stormpath と ASP.NET Core を使って [simple, secure web applications](https://github.com/stormpath/stormpath-aspnetcore) を構築する。（非推奨：2017年3月以降、OKTA との統合後更新が行われなくなりました）
* [stuntman](https://github.com/ritterim/stuntman) - 開発時に ASP.NET Identity を使ってユーザーを仮装するためのライブラリ

### Blockchain
* [BTCPayServer](https://github.com/btcpayserver/btcpayserver) - ビットペイ API と互換性のあるクロスプラットフォーム、セルフホスト型サーバー
* [Meadow](https://github.com/MeadowSuite/Meadow) - ソリディティのテストおよび開発に特化したエターニアの統合実装とツールセット
* [NBitcoin](https://github.com/MetacoSA/NBitcoin) - .NETフレームワーク向けの包括的なビットコインライブラリ。
* [NBlockchain](https://github.com/danielgerlag/NBlockchain) - ブロックチェーンを活用したアプリケーション開発用の .NET スタンドアードライブラリ
* [NBXplorer](https://github.com/dgarage/NBXplorer) - ビットコインおよびアルトコイン向けの軽量ブロックエクスプローラ
* [NEO](https://github.com/neo-project/neo) - スマート経済向けのオープンネットワーク
* [Nethereum](https://github.com/Nethereum) - エターニウムへの愛を.NETに届ける
* [Nethermind](https://github.com/NethermindEth/nethermind) - .NET Core Ethereumクライアント
* [StratisBitcoinFullNode](https://github.com/stratisproject/StratisBitcoinFullNode) - .Netフレームワーク上でネイティブC#ブロックチェーンアプリケーションの開発・テスト・デプロイに必要なシンプルかつ安価な端到端ソリューション
* [Trezor.Net](https://github.com/MelbourneDeveloper/Trezor.Net) - Trezorハードウェアウォレットとの通信用のクロスプラットフォームC#ライブラリ
* [WalletWasabi](https://github.com/zkSNACKs/WalletWasabi) - プライバシーに配慮した、ZeroLink準拠ビットコインウォレット

### Bot
* [BotSharp](https://github.com/SciSharp/BotSharp) - 100％C#で構成されたオープンソースAIチャットボットプラットフォームビルダー。.NET Core上で機械学習アルゴリズムを用いて動作
* [NadekoBot](https://github.com/Kwoth/NadekoBot) - C#で書かれたオープンソース、汎用的なDiscordチャットボット
* [Telegram.Bot](https://github.com/TelegramBots/Telegram.Bot) - C#によるTelegramボットAPIライブラリ
* [Funogram](https://github.com/Dolfik1/Funogram) - F#によるTelegramボットAPIライブラリ

### Build Automation
* [cake-build](https://github.com/cake-build/cake) - クロスプラットフォームのビルド自動化システム
* [CatLight](https://catlight.io) - 開発者向けのステータス通知ツール。プロジェクト内のビルドとタスクをモニタリング。.Net CoreとElectronを使用して構築
* [Colorful.Console](https://github.com/tomakita/Colorful.Console) - C#コンソール出力のスタイルをカスタマイズ！
* [dotnet-docker](https://github.com/dotnet/dotnet-docker) - .NET Coreおよび.NET Coreツールとの対話に必要なベースDockerイメージ
* [Dockerize.NET](https://github.com/brthor/Dockerize.NET) - .NET CoreアプリケーションをDockerイメージにパッケージ化するための.NET CLIツール：'dotnet dockerize'
* [FlubuCore](https://github.com/dotnetcore/FlubuCore) - C#コードを使用してプロジェクトのビルドとデプロイスクリプトの実行を行うクロスプラットフォームなビルドおよびデプロイ自動化システム
* [GitInfo](https://github.com/kzu/GitInfo) - MSBuild、C#およびVBでGitとSemVer情報の取得
* [GitVersioning](https://github.com/AArnott/Nerdbank.GitVersioning) - 1つのシンプルなversion.txtファイルからアセンブリおよびNuGetパッケージにバージョン情報をスタンプし、非公式ビルドにはGitコミットIDを含める
* [go-dotnet](https://github.com/matiasinsaurralde/go-dotnet) - .NET Coreランタイム向けのGoラッパー
* [Image2Docker](https://github.com/docker/communitytools-image2docker-win) - 既存のWindowsアプリケーションワークロードをDockerに移植するPowerShellモジュール
* [LocalAppVeyor](https://github.com/joaope/LocalAppVeyor) - ローカルでAppVeyorのビルドを実行
* [msbuild](https://github.com/Microsoft/msbuild) - Microsoft Build Engineはアプリケーションを構築するためのプラットフォームです
* [Nuke](https://github.com/nuke-build/nuke) - クロスプラットフォームのビルド自動化システム
* [Opserver](https://github.com/opserver/Opserver) - スタックエクスチェンジのモニタリングシステム
* [vsts-agent](https://github.com/Microsoft/vsts-agent/blob/master/README.md) - Visual Studio Team Servicesのビルドおよびリリースエージェント

### Bundling and Minification
* [BundlerMinifier](https://github.com/madskristensen/BundlerMinifier) - JavaScript、CSS、HTMLファイルのバンドルおよびミニフィケーションを設定できるVisual Studio拡張機能
* [JavaScriptViewEngine](https://github.com/pauldotknopf/JavaScriptViewEngine) - JavaScript環境でマーカップをレンダリングするASP.NET MVC ViewEngine。ReactやAngularのサーバー側レンダリングに最適です
* [Smidge](https://github.com/Shazwazza/Smidge/) - ASP.NET Core向けの軽量ランタイムでCSS/JavaScriptファイルのミニフィケーション、結合、圧縮および管理を行うライブラリ
* [Web Markup Minifier](https://github.com/Taritsyn/WebMarkupMin) - .NETライブラリでHTML、XHTML、XMLコードのサイズを縮小し、ウェブアプリケーションのパフォーマンスを向上させるためのマークアップミニフィケーションを提供します

### Caching
* [CacheManager](https://github.com/MichaCo/CacheManager) - C#で記述された.NET向けオープンソースキャッシュ抽象化レイヤー。さまざまなキャッシュプロバイダーをサポートし、多くの高度な機能を実装しています。 [http://cachemanager.michaco.net](http://cachemanager.michaco.net)
* [EasyCaching](https://github.com/dotnetcore/EasyCaching) - オープンソースキャッシュライブラリで、基本的なキャッシュ利用法と一部の高度な機能を提供し、キャッシュの扱いをより簡単に行うことができます
* [Faster](https://github.com/Microsoft/FASTER/tree/master/cs) - マイクロソフトリサーチが開発した高速キーバリューストア
* [Foundatio](https://github.com/exceptionless/Foundatio) - 分散アプリケーションを構築するためのプラグイン可能な基礎ブロック
* [Microsoft Caching](https://github.com/aspnet/Caching) - メモリ内キャッシュおよび分散キャッシュを提供するライブラリ
* [Stack Exchange Redis](https://github.com/StackExchange/StackExchange.Redis) - .NET言語（C#など）向けの高パフォーマンスの一般用途Redisクライアント

### CMS
* [Awesome-CMS-Core](https://github.com/SaiGonSoftware/Awesome-CMS-Core) - Awesome CMS Coreは、ASP.Net CoreとReactJSを使用し、モジュール分離を意識したオープンソースCMSで、最新の技術トレンドを提供します
* [Blogifier.Core](https://github.com/blogifierdotnet/Blogifier.Core) - ASP.NETアプリケーションで一般的なブログ機能を提供します
* [Cofoundry](https://github.com/cofoundry-cms/cofoundry) - オープンソース.NET Core CMSおよびモジュール化アプリケーションフレームワーク。コードファースト、非侵襲的かつ拡張可能
* [CoreWiki](https://github.com/csharpfritz/CoreWiki) - ライブコーディングストリーム中に開発中のシンプルなASP.NET Core Wiki
* [dasblog-core](https://github.com/poppastring/dasblog-core) - 元のDasBlogをASP.NET Coreで再構築したものです
* [Lynicon](https://github.com/jamesej/lyniconanc) - O/S ASP.Net Core/.Net Core CMSで、有償モジュール（JSONコンテンツ）を提供。さまざまなデータストアとC#コンテンツタイプに対応
* [Miniblog](https://github.com/madskristensen/Miniblog.Core) - ASP.NET Coreによるブログエンジン
* [Mixcore CMS](https://github.com/mixcore/mix.core) - DotNet CoreをベースにしたオープンソースCMS。Mixcore CMSは、ウェブコンテンツ管理およびデジタル体験に特化したスケーラブルでオープンなプラットフォームです。Mixcore CMSは、ウェブ上で深い機能と無限の柔軟性を提供します。
* [NetCoreCMS](https://github.com/OnnoRokomSoftware/NetCoreCMS) - ASP.NET Core 2.0に基づくオープンソースCMS。現在はMySQLをサポートしており、MSSQL、SQLite、PostgreSQLの実装を計画中です。また、テーマ、スキン、カスタムレイアウト、ウィジェット、複数言語（英語、バングラ語）をサポートするモジュラーフレームワークです。
* [Orchard Core CMS](https://github.com/OrchardCMS/OrchardCore) - ASP.NET Coreをベースにしたモジュラリティと拡張性を備えたオープンソースコンテンツ管理システム。
* [Piranha CMS](https://github.com/piranhacms/piranha.core) - ASP.NET CoreおよびEntity Framework Coreに最適化された軽量かつ非侵襲的なオープンソースCMS。
* [Platformus](https://github.com/Platformus) - ASP.NET Core 1.0およびExtCoreフレームワークに基づく無料、オープンソース、マルチプラットフォームCMS。
* [SimpleContent](https://github.com/joeaudette/cloudscribe.SimpleContent) - データベースを必要としない、シンプルでありながら柔軟なコンテンツおよびブログエンジン。ASP.NET Coreで動作可能。
* [Squidex](https://github.com/Squidex/squidex) - MongoDB、CQRS、イベントソースに基づくヘッドレスCMS。
* [Swastika I/O Core CMS](https://github.com/Swastika-IO/Swastika-IO-Core) - オープンソースASP.NET Core 2.x CMS。現在はMS SQLをサポートしており、MSSQL、SQLiteの実装を近い将来に計画中。マルチ言語対応、テーマ、テンプレートなど、多くの機能を標準で提供。
* [Umbraco](https://github.com/umbraco/umbraco-cms) - 拡張性と使いやすさを重視したオープンソースASP.NET Core CMS。
* [Weapsy](https://github.com/Weapsy/Weapsy) - DDDおよびCQRSに基づくオープンソースASP及Core CMS。MSSQL、MySQL、SQLite、PostgreSQLを標準でサポート。
* [Wyam](https://github.com/Wyamio/Wyam) - モジュラーフレームワークによる静的コンテンツおよび静的サイトジェネレーター。
* [ZKEACMS](https://github.com/SeriaWei/ZKEACMS.Core) - ドラッグアンドドロップでオンラインで視覚的にデザインし、サイトを構築。

### Code Analysis and Metrics
* [awesome-static-analysis](https://github.com/mre/awesome-static-analysis) - さまざまなプログラミング言語向けの静的解析ツール、リントツール、コード品質チェックツールの選定リスト。
* Code Analysis
  * [CodeFormatter](https://github.com/dotnet/codeformatter) - Roslynを使用して、元のコードを自動的に.netfxコーディングスタイルに変更するツール。 [Nuget Package](https://www.nuget.org/packages/Dotnet.CodeFormatter.BuildTask.Fork)
  * [DevSkim](https://github.com/Microsoft/DevSkim) - IDEプラグインおよびルールセット。セキュリティに関するリント機能を提供。
  * [RefactoringEssentials](https://github.com/icsharpcode/RefactoringEssentials) - Visual Studio向けのリファクタリングツール。
  * [roslyn-analyzers](https://github.com/dotnet/roslyn-analyzers) - .NETコンパイラプラットフォーム（"Roslyn"）によるアナライザ。
  * [StyleCopAnalyzers](https://github.com/DotNetAnalyzers/StyleCopAnalyzers) - .NETコンパイラプラットフォームを用いたStyleCopルール。
* Metrics
  * [AppMetrics](https://github.com/alhardy/AppMetrics) - App Metricsは、アプリケーション内のメトリクスを記録・報告し、アプリケーションの健康状態を報告するオープンソースかつマルチプラットフォームの.NETライブラリ。
  * [Audit.NET](https://github.com/thepirat000/Audit.NET) - NETオブジェクトの変更を監視するための小型フレームワーク
  * [BenchmarkDotNet](https://github.com/dotnet/BenchmarkDotNet) - NET用のベンチマークライブラリ
  * [coverlet](https://github.com/tonerdo/coverlet) - NET Core用のクロスプラットフォームコードカバレッジライブラリ
  * [Foundatio](https://github.com/exceptionless/Foundatio#metrics) - メモリ内、Redis、StatsD、Metrics.NETによる実装をサポートする共通インターフェース
  * [MiniCover](https://github.com/lucaslorentz/minicover) - NET Core用のミニマリズムコードカバレッジツール
  * [NBench](https://github.com/petabridge/NBench) - NETアプリケーション向けのパフォーマンスベンチマークおよびテストフレームワーク
  * [Nexogen.Libraries.Metrics](https://github.com/nexogen-international/Nexogen.Libraries.Metrics) - NETでアプリケーションメトリクスを収集し、Prometheusにエクスポートするためのライブラリ
  * [OpenCover](https://github.com/OpenCover/opencover) - NET 2以上向けのコードカバレッジツール（Windows OS限定）32および64プロセスに対応し、ブランチおよびシーケンスポイントをサポート
  * [PerformanceMonitor](https://github.com/dotnet-architecture/PerformanceMonitor) - NET Coreアプリケーションパフォーマンスモニタ
  * [prometheus-net](https://github.com/prometheus-net/prometheus-net) - [https://prometheus.io](https://prometheus.io)向けのNETクライアント
  * [Prometheus.Client](https://github.com/PrometheusClientNet/Prometheus.Client) - [Prometheus](https://prometheus.io)向けのNETクライアント
  	* [Prometheus.Client.MetricPusher](https://github.com/PrometheusClientNet/Prometheus.Client.MetricPusher) -  Prometheus.Client向けのメトリクスをPushゲートウェイに送信
  	* [Prometheus.Client.AspNetCore](https://github.com/PrometheusClientNet/Prometheus.Client.AspNetCore) -  Prometheus.Client向けのミドルウェア
  	* [Prometheus.Client.MetricServer](https://github.com/PrometheusClientNet/Prometheus.Client.MetricServer) -  Prometheus.Client向けのMetricServer
  	* [Prometheus.Client.HttpRequestDurations](https://github.com/PrometheusClientNet/Prometheus.Client.HttpRequestDurations) -  Prometheus.Client向けのリクエスト実行時間のメトリクスログ

### Compression
* [lz4net](https://github.com/MiloszKrajewski/K4os.Compression.LZ4) - すべてのNETプラットフォーム向けの超高速圧縮アルゴリズム
* [sharpcompress](https://github.com/adamhathcock/sharpcompress) - 多くの圧縮タイプとフォーマットを扱うための完全にマネージドC#ライブラリ

### Compilers, Transpilers and Languages
* [Fable](https://github.com/fable-compiler/Fable) - F#からJavaScriptへのコンパイラ
* [fparsec](https://github.com/stephan-tolksdorf/fparsec) - F#およびC#向けのパーサーコンビネータライブラリ
* [IL2C](https://github.com/kekyo/IL2C) - ECMA-335 CIL/MSILをC言語に変換するトランスレータ
* [Mond](https://github.com/Rohansi/Mond) - C#で書かれた動的型のスクリプト言語で、REPL、デバッガ、およびシンプルな埋め込みAPIを備えている
* [peachpie](https://github.com/peachpiecompiler/peachpie) - オープンソースのPHPコンパイラ（.NET用）
* [Pidgin](https://github.com/benjamin-hodgson/Pidgin) - Stack Overflowで開発されたC#用軽量かつ高速で柔軟なパーサーライブラリ
* [roslyn](https://github.com/dotnet/roslyn) - .NETコンパイラプラットフォーム（"Roslyn"）は、C#およびVisual Basicのオープンソースコンパイラを提供し、豊かなコード分析APIを備えている
* [Sprache](https://github.com/sprache/Sprache) - Tiny C# モナドパーサーフレームワーク

### Cryptography
* [BCrypt.Net](https://github.com/BcryptNet/bcrypt.net) - 元のbcryptパッケージへのアップデート
* [BCrypt.NET-Core](https://github.com/neoKushan/BCrypt.Net-Core) - パスワードを安全に保存するために使用されるBCrypt.NETの.NET Core版
* [BouncyCastle PCL](https://github.com/onovotny/BouncyCastle-PCL) - Bouncy Castle Cryptoパッケージは、暗号アルゴリズムおよびプロトコルのC#実装である
* [multiformats](https://github.com/multiformats/cs-multihash) - 一般用途のハッシュライブラリだが、マルチハッシュ（"container"としてのハッシュアルゴリズムの記述）をエンコード／デコードするためのライブラリ
* [nsec](https://github.com/ektrah/nsec) - NSecは、libsodiumに基づく.NET Core用の新しい暗号ライブラリ
* [SecurityDriven.Inferno](https://github.com/thangchung/awesome-dotnet-core/blob/26204aa32be461a7a88c2c372050ffeaed6bcde9/github.com/sdrapkin/SecurityDriven.Inferno) - .NETのプリミティブを用いた高度な暗号ライブラリで、専門的に検証されている

### Database
* [DBreeze](https://github.com/hhblaze/DBreeze) - C# .NET MONO NOSQL（キー・バリューストアを内蔵）ACIDマルチパラダイムデータベース管理システム
* [JsonFlatFileDataStore](https://github.com/ttu/json-flatfile-datastore) - タイプと動的データをサポートするシンプルなJSONフラットファイルデータストア
* [LiteDB](https://github.com/mbdavid/LiteDB) - .NET NoSQLドキュメントストア（1つのデータファイルで） - [http://www.litedb.org](http://www.litedb.org)
* [NoDb](https://github.com/joeaudette/NoDb) - .NET Core/ASP.NET Core向けの"データベースなし"ファイルシステムストレージ（すべてのプロジェクトにデータベースが必要とは限らない）
* [marten](https://github.com/JasperFx/marten) - Postgresqlを.NETアプリケーション向けのドキュメントデータベースおよびイベントストアとして使用 - [http://jasperfx.github.io/marten](http://jasperfx.github.io/marten)
* [StringDB](https://github.com/SirJosh3917/StringDB) - StringDBは、*tiny*なRAM消費と*tiny*なデータベース生成を目的としたモジュラリティを持つキー／バリュー対アーカイブデータベース
* [yessql](https://github.com/sebastienros/yessql) - 任意のRDBMS上で動作する.NETドキュメントデータベース

### Database Drivers
* [cassandra-csharp-driver](https://github.com/datastax/csharp-driver) - Apache Cassandra用のDataStax C#ドライバー
* [confluent-kafka-dotnet](https://github.com/confluentinc/confluent-kafka-dotnet) - ConfluentのApache Kafka .NETクライアント
* [couchbase-lite-net](https://github.com/couchbase/couchbase-lite-net) - NET向けの軽量でドキュメント指向（NoSQL）かつ同期可能なデータベースエンジン
* [MongoDB.Driver](https://github.com/mongodb/mongo-csharp-driver) - MongoDB向けの.NETドライバー
* [MongoDB.Entities](https://github.com/dj-nitehawk/MongoDB.Entities) - MongoDB用のデータアクセスライブラリ。エレガントなAPI、LINQサポート、および組み込みのエンティティ関係管理機能を備えている
* MySQL
  * [mysql-connector-net](https://github.com/mysql/mysql-connector-net/tree/8.0) - MySQL向けの完全に管理されたADO.NETドライバー：Connector/Net
  * [MySqlConnector](https://github.com/mysql-net/MySqlConnector) - .NETおよび.NET Core向けの非同期MySQLコンネクタ
* Neo4j
  * [neo4j-dotnet-driver](https://github.com/neo4j/neo4j-dotnet-driver) - Neo4j Boltドライバー（.NET用）
  * [Neo4jClient](https://github.com/Readify/Neo4jClient) - Neo4j向けの.NETクライアントバインディング
* [npgsql](https://github.com/npgsql/npgsql) - PostgreSQL向けの.NETデータプロバイダー。これは、.NETフレームワークで開発されたすべてのプログラムがPostgreSQLデータベースサーバーにアクセスできるようにする。100％C#コードで実装されている。PostgreSQL 9.1以降のバージョンは公式にサポートされており、それ以外のバージョンも動作する可能性がある。 [http://www.npgsql.org](http://www.npgsql.org)
* [ravendb](https://github.com/ayende/ravendb/tree/v4.0) - .NET向けのLINQ対応ドキュメントデータベース
* [RethinkDb.Driver](https://github.com/bchavez/RethinkDb.Driver) - C#/.NET用のRethinkDBドライバー。100％のReQL APIをカバーしている
* [progaudi.tarantool](https://github.com/progaudi/progaudi.tarantool) - Tarantool NoSQLデータベース向けの.NETクライアント

### Database Tools and Utilities
* [DbUp](https://github.com/DbUp/DbUp) - SQL Serverデータベースへの変更をデプロイするための.NETライブラリ。すでに実行されたSQLスクリプトを追跡し、データベースを最新に保つために必要な変更スクリプトを実行する
* [Evolve](https://github.com/lecaillon/Evolve) - シンプルなデータベース移行ツール。プレーンSQLスクリプトを使用しており、Flywayにインスパイアされている
* [EFCorePowerTools](https://github.com/ErikEJ/EFCorePowerTools) - Entity Framework Core Power Tools - EF Core用の逆エンジニアリング、移行、モデル可視化機能
* [fluentmigrator](https://github.com/fluentmigrator/fluentmigrator) - .NET向けの移行フレームワーク。Ruby on RailsのMigrationsに類似している
* [monitor-table-change-with-sqltabledependency](https://github.com/christiandelbianco/monitor-table-change-with-sqltabledependency) - SQL Serverのレコードテーブル変更時に通知を取得
* [NReco.PivotData](https://www.nuget.org/packages/NReco.PivotData) - メモリ内データキューブ。OLAP操作とピボットテーブルデータモデルを備えている
* [roundhouse](https://github.com/chucknorris/roundhouse) - ソースコントロールに基づくバージョン管理とSQLファイルを使用した.NET向けデータベース移行ユーティリティ
* [SapphireDb](https://github.com/SapphireDb/SapphireDb) - SapphireDbのサーバー実装。リアルタイムデータ同期を容易に実現するフレームワークであり、ASP.NET CoreおよびEF Core向けのFirebaseリアルタイムデータベース/Firestoreの自宅ホスト代替案。詳細はドキュメントを参照： [Documentation](https://sapphire-db.com)
* [SharpRepository](https://github.com/SharpRepository/SharpRepository) - SharpRepositoryはC#で書かれた汎用リポジトリで、Entity Framework、RavenDB、MongoDb、Db4oを含むさまざまな関係型、ドキュメント型、オブジェクト型データベースに対応している。また、SharpRepositoryにはXMLおよびインメモリリポジトリの実装も含まれている。
* [TrackableEntities.Core](https://github.com/TrackableEntities/TrackableEntities.Core) - サービス境界間の変更追跡を .NET Core で実現
* [Mongo.Migration](https://github.com/SRoddis/Mongo.Migration) - Mongo.Migration は [MongoDB C# Driver]( https://github.com/mongodb/mongo-csharp-driver) に向けたツールで、ドキュメントを簡単にかつ即時的に移行できます。スキーマ移行にダウンタイムはもう不要です。シンプルな小さな移行コードを書くだけでOKです。[Link]( https://github.com/SRoddis/Mongo.Migration)
* [EntityFrameworkCore.DataEncryption](https://github.com/Eastrall/EntityFrameworkCore.DataEncryption) - Microsoft.EntityFrameworkCore 用のプラグインで、暗号化フィールドのサポートを追加

### Date and Time
* [Exceptionless.DateTimeExtensions](https://github.com/exceptionless/Exceptionless.DateTimeExtensions) - DateTimeRange、ビジネス日および各種 DateTime、DateTimeOffset、TimeSpan の拡張メソッド
* [FluentDateTime](https://github.com/FluentDateTime/FluentDateTime) - よりクリーンな DateTime 表達と操作を可能にします。Ruby の DateTime Extensions に部分的にインスパイアされています
* [nodatime](https://github.com/nodatime/nodatime) - .NET [http://nodatime.org](http://nodatime.org) 用のより良い日付と時刻 API

### Distributed Computing
* [AspNetCore.Diagnostics.HealthChecks](https://github.com/xabaril/AspNetCore.Diagnostics.HealthChecks) - ASP.NET Core ディアグノスティクスパッケージのエンタープライズ ヘルスチェック
  - [BeatPulse](https://github.com/Xabaril/BeatPulse) - ロードバランサがデプロイされたWebアプリケーションの状態を監視できるようにします
* [Foundatio](https://github.com/exceptionless/Foundatio) - 分散アプリケーションを構築するためのプラグイン可能な基礎ブロック
* [jasper](https://github.com/JasperFx/jasper) - .NET 用の次世代アプリケーション開発フレームワーク
* [Rafty](https://github.com/ThreeMammals/Rafty) - .NET Core における RAIT 一致アルゴリズム
* [Obvs](https://github.com/christopherread/Obvs) - 内部のトランスポートをシンプルな Rx フレームワークでラップした、可観測性を持つマイクロサービスバス .NET ライブラリ
* [Ocelot](https://github.com/ThreeMammals/Ocelot) - .NET Core を使用したAPIゲートウェイ
* [OpenTracing](https://github.com/opentracing/opentracing-csharp) - 分散トレース用のベンダー中立APIおよびインストルメンテーション
* [Polly](https://github.com/App-vNext/Polly) - .NET 3.5 / 4.0 / 4.5 / PCL ライブラリで、リトライ、リトライ永遠、待機とリトライ、または回路ブレーカーなどの一時的な例外および障害処理ポリシーを、フリーランスな形で表現できます
* [ProxyKit](https://github.com/damianh/ProxyKit) - ASP.NET Core でコードファーストのHTTPリバースプロキシを作成するためのツールキット

### E-Commerce and Payments
* [nopCommerce](https://github.com/nopSolutions/nopCommerce) - コミュニティが豊かで、新機能、テーマ、プラグインが多数のマーケットプレイスを備えた無料オープンソースECショッピングカート（ASP.NET MVC / ASP.NET Core MVC）
* [GrandNode](https://github.com/grandnode/grandnode) - マルチプラットフォーム、無料、オープンソースのECショッピングカート。ASP.NET Core 2.1 と MongoDB をベースに、 [nopCommerce](https://github.com/nopSolutions/nopCommerce) から派生
* [PayPal](https://github.com/paypal/PayPal-NET-SDK) - PayPal の RESTful API 用の .NET SDK
* [SimplCommerce](https://github.com/simplcommerce/SimplCommerce) - .NET Core に基づいたシンプルなECシステム
* [Stripe](https://github.com/ServiceStack/Stripe) - ストリープのREST API向けの.NETクライアントの作成


### Exceptions
* [Demystifier](https://github.com/benaadams/Ben.Demystifier) - スタックトレースの高速理解（エラーログの生産性向上）
* [Exceptionless](https://github.com/exceptionless/Exceptionless.Net) - 例外を発生させない .NET クライアント
* [GlobalExceptionHandlerDotNet](https://github.com/JosephWoodward/GlobalExceptionHandlerDotNet) - GlobalExceptionHandlerDotNetは、ASP.NET Coreアプリケーションパイプライン内で例外処理をコンベンションとして設定できるようにします。各コントローラーのアクション内で明示的に処理するのではなく。
* [Sentry](https://github.com/getsentry/sentry-dotnet) - Sentry（オープンソースのエラートレーキング）向けの.NET SDK。開発者がリアルタイムでクラッシュを監視・修正できるようにします。

### Functional Programming
* [CSharpFunctionalExtensions](https://github.com/vkhorikov/CSharpFunctionalExtensions) - C#向けの機能拡張
* [DynamicData](https://github.com/RolandPheasant/DynamicData) - Rx.NETに基づく反応型コレクション
* [echo-process](https://github.com/louthy/echo-process) - C#向けのアクターライブラリ。Redisへの永続化やJS統合をサポートするモジュールを備えています。
* [FsCheck](https://github.com/fscheck/FsCheck) - .NET向けのランダムテスト
* [Giraffe](https://github.com/dustinmoris/Giraffe) - F#開発者向けのネイティブな機能的ASP.NET Coreウェブフレームワーク
* [language-ext](https://github.com/louthy/language-ext) - C#向けの機能拡張と「Erlang風」のコンカレンシーシステム
* [LaYumba.Functional](https://github.com/la-yumba/functional-csharp-code) - C#で関数型プログラミングを行うためのユーティリティライブラリ
* [NetMQ.ReactiveExtensions](https://github.com/NetMQ/NetMQ.ReactiveExtensions) - Reactive Extensions（RX）を使ってネットワーク上のどこかにメッセージを簡単に送信できます。トランスポートプロトコルはZeroMQです。
* [Optional](https://github.com/nlkl/Optional) - C#向けの堅牢なオプション型
* [reactive-streams-dotnet](https://github.com/reactive-streams/reactive-streams-dotnet) - .NET向けの[Reactive Streams](http://www.reactive-streams.org/)。
* [ReactiveUI](https://github.com/reactiveui/ReactiveUI) - Reactive Extensions for .NETと統合されたMVVMフレームワーク。どのモバイルやデスクトッププラットフォームでも動作する、洗練された、テスト可能なユーザーインターフェースを作成できます。
* [Rx.NET](https://github.com/Reactive-Extensions/Rx.NET) - NET向けの[Reactive Extensions](http://reactivex.io)
* [Qactive](https://github.com/RxDave/Qactive) - 反応型クエリ可能オブザーバブルフレームワーク。`4.x.x or above`
* [sodium](https://github.com/SodiumFRP/sodium/tree/master/) - 機能的反応型プログラミング（FRP）ライブラリ。`4.x.x or above`

### Graphics
* [GLFWDotNet](https://github.com/smack0007/GLFWDotNet) - GLFW向けの.NETバインディング
* [ImageProcessor](https://github.com/JimBobSquarePants/ImageProcessor) - System.Drawingに対するスムーズなラッパーで、画像ファイルの処理に使用される [http://imageprocessor.org](http://imageprocessor.org)。`4.5.x or above`
* [ImageSharp](https://github.com/SixLabors/ImageSharp) - C#で書かれたクロスプラットフォーム画像処理ライブラリ。
* [LibVLCSharp](https://github.com/videolan/libvlcsharp): VideoLANが開発したVLCアプリケーションを動かすためのマルチメディアフレームワークlibvlcの.NET/Monoバインディング。
* [Magick.NET](https://github.com/dlemstra/Magick.NET) - ImageMagickの.NET用ライブラリ。
* [MagicScaler](https://github.com/saucecontrol/PhotoSauce) - MagicScalerによる高性能かつ高品質の画像処理パイプライン（.NET用）。
* [QRCoder](https://github.com/codebude/QRCoder) - 純粋なC#によるオープンソースQRコード実装。
* [SharpBgfx](https://github.com/MikePopoloski/SharpBgfx) - bgfxグラフィックスライブラリのC#バインディング。
* [Structure.Sketching](https://github.com/JaCraig/Structure.Sketching) - .NETアプリケーションで使用できる画像処理ライブラリ（.NET Core対応）。
* [veldrid](https://github.com/mellinoe/veldrid) - .NET用の低レベルかつハードウェアアクセラレーション対応の3Dグラフィックスライブラリ。
* [ZXing.Net](https://github.com/micjahn/ZXing.Net/) - 元々Javaベースのバーコードリーダーおよび生成ライブラリzxingの.NET版。

### GUI
* [AdonisUI](https://github.com/benruehl/adonis-ui) - WPFアプリケーション向けの軽量UIツールキットで、クラシカルなウィンドウビジュアルを強化。
* [Avalonia](https://github.com/AvaloniaUI/Avalonia) - マルチプラットフォームの.NET UIフレームワーク（以前はPerspexと呼ばれていた）。
* [AvaloniaEdit](https://github.com/AvaloniaUI/AvaloniaEdit/) - [AvalonEdit](https://github.com/icsharpcode/AvalonEdit)からフォークしたAvaloniaベースのテキストエディターコンポーネント。
 [HandyControls](https://github.com/ghost1372/HandyControls) - シンプルで一般的なWPFコントロールを収録。
* [Lara](https://github.com/integrativesoft/lara) - Lara Web EngineはC#でWebUIを開発するためのライブラリ。
* [ShellProgressBar](https://github.com/Mpdreamz/shellprogressbar) - コンソールプログラムにおけるプログレスバーを生成するためのライブラリ。
* [Qml.Net](https://github.com/pauldotknopf/Qml.Net) - Mono、.NET、.NET Core向けのクロスプラットフォームQml/.NET統合。
* [WinApi](https://github.com/prasannavl/WinApi) - 高パフォーマンスなWin32ネイティブインターフェースとの直接的な、極めて薄いCLRライブラリ。自動化、ウィンドウング、DirectX、OpenGLおよびSkiaヘルパーを含む。

### IDE
* [Mono](https://github.com/mono/monodevelop) - MonoDevelopは、Linux、WindowsおよびMac OS X上でデスクトップおよびウェブアプリケーションを迅速に開発できるようにするツール。また、Visual Studioで作成した.NETアプリケーションをLinuxおよびMac OS Xに移植する際に、すべてのプラットフォームで共通のコードベースを維持しやすくする。
* [rider](https://www.jetbrains.com/rider/) - IntelliJプラットフォームとReSharperを基盤とするクロスプラットフォームC# IDE。
* [Omnisharp](http://www.omnisharp.net/) - オープンソースプロジェクトのファミリー。それぞれのプロジェクトは一つの目標を持ち、あなたの選んだエディタで素晴らしい.NET体験を可能にする。
* [SharpDevelop](https://github.com/icsharpcode/SharpDevelop) - SharpDevelopは、Microsoftの.NETプラットフォーム上でC#、VB.NET、Boo、IronPython、IronRubyおよびF#プロジェクトに向けた無料の統合開発環境（IDE）です。ほぼ完全にC#で構成されており、IDEとして期待される機能に加え、いくつかの追加機能を備えています。
* [Visual Studio Code](https://github.com/Microsoft/vscode) - コードエディタのシンプルさと開発者が必要とする基本的な編集・ビルド・デバッグサイクルを組み合わせた、新しいタイプのツールです。コードは包括的な編集およびデバッグサポート、拡張性モデル、既存ツールとの軽量な統合を提供します。
* [Visual Studio Community](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) - 個人開発者、オープンソースプロジェクト、学術研究、教育、および小型プロフェッショナルチーム向けの無料エディタです。

### Internationalization
* [Localization](https://github.com/aspnet/Localization) - ASP.NET Coreアプリケーション向けのローカリゼーション抽象化と実装。
* [NetCoreStack.Localization](https://github.com/NetCoreStack/Localization) - .NET Coreアプリケーション向けのEntity Frameworkとメモリキャッシュによるデータベース駆動型リソースローカライゼーション。
* [Westwind.Globalization](https://github.com/RickStrahl/Westwind.Globalization) - .NETアプリケーション向けのデータベース駆動型リソースローカライゼーション。

### IOC
* [AutoDI](https://github.com/Keboo/AutoDI) - ILウェーブングを用いた超高速コンパイル時依存性注入。
* [Autofac](https://github.com/autofac/Autofac) - 魅力的な.NET IoCコンテナ。
* [Castle.Windsor](https://github.com/castleproject/Windsor) Castle Windsorは、.NET向けの成熟した逆制御（IoC）コンテナです。
* [DryIoc](https://github.com/dadhi/DryIoc) - 高速で小型かつ機能豊かな.NET向けIoCコンテナ。
* [Grace](https://github.com/ipjohnson/Grace) - Graceは、使いやすさとパフォーマンスを意識した、機能豊かな依存性注入コンテナです。
* [Inyector](https://github.com/davidrevoledo/Inyector) - AspNetCore向けの依存性注入自動化。
* [Lamar](https://github.com/JasperFx/lamar) - 高速な逆制御ツールおよびRoslynに関するさまざまな機能。
* [LightInject](https://github.com/seesharper/LightInject) - 超軽量のIoCコンテナ。
* [SimpleInjector](https://github.com/simpleinjector/SimpleInjector) - 使いやすく、柔軟で高速な依存性注入ライブラリで、開発者が成功の淵（pit of success）へと導くためのベストプラクティスを推奨します。
* [Stashbox](https://github.com/z4kn4fein/stashbox) - .NETベースのソリューション向けの軽量かつポータブルな依存性注入フレームワーク。
* [Unity](https://github.com/unitycontainer/unity) - 軽量かつ拡張可能な依存性注入コンテナ。

### Logging
* [common-logging](https://github.com/net-commons/common-logging) - .NET向けのポータブルなログ記録抽象化。
* [dnxcore-logging-logstash](https://github.com/jvandevelde/dnxcore-logging-logstash) - .NET Coreアプリケーション向けのLogstashログ拡張機能（UDPおよびRedisトランスポート）。
* [ElmahCore](https://github.com/ElmahCore/ElmahCore) - エラーログ記録ライブラリで、エラーフィルタリングやウェブページからエラーログを確認できる機能を備えています。
* [Exceptionless](https://github.com/exceptionless/Exceptionless.Net) - 例外を発生させない .NET クライアント
* [Foundatio](https://github.com/exceptionless/Foundatio#logging) - アプリケーション全体にわたってメッセージをログに記録できる、フリーランのログ出力API
* [Karambolo.Extensions.Logging.File](https://github.com/adams85/filelogger) - .NET Core ログフレームワーク（Microsoft.Extensions.Logging）にファイルログを実装する軽量ライブラリ
* [LibLog](https://github.com/damianh/LibLog) - ライブラリ／フレームワーク／アプリケーションにコピー／ペーストまたはNuGetでインストールできる1ファイルのログ抽象化ライブラリ
* [log4net](https://github.com/apache/logging-log4net) - log4netは、優れたApache log4j™フレームワークをMicrosoft® .NETランタイムに移植したものです
* [NLog](https://github.com/NLog/NLog) - 高度な.NET、SilverlightおよびXamarinログ機能。構造化および非構造化ログをサポート。
  * [NLog for ASP.NET and ASP.NET Core](https://github.com/NLog/NLog.Web) - ASP.NETおよびASP.NET Core 1-3向けのNLog統合
  * [NLog.Extensions.Logging](https://github.com/NLog/NLog.Extensions.Logging) - .NET Standardライブラリおよび.NET Coreアプリケーション向けのMicrosoft.Extensions.Logging用NLogプロバイダー
  * [NLog.Windows.Forms](https://github.com/NLog/NLog.Windows.Forms) - Windows.Forms向けのNLogターゲット
  * [NLog.MailKit](https://github.com/NLog/NLog.MailKit) - MailKitライブラリを使用したメールターゲットの代替
* [Q42.Logging.ApplicationInsights](https://github.com/Q42/Q42.Logging.ApplicationInsights) - ASP.NET Coreの組み込みログにApplication Insightsにすべてのログを送信するためのログアペンダー
* [serilog](https://github.com/serilog/serilog) - シンプルな.NETログ機能と完全に構造化されたイベント。
  * [serilog-aspnetcore](https://github.com/serilog/serilog-aspnetcore) - ASP.NET Core 2+向けのSerilog統合。
  * [Serilog.Exceptions](https://github.com/RehanSaeed/Serilog.Exceptions) - Serilog.Exceptionsは、[Serilog](https://serilog.net/)への追加機能で、Exception.ToString()に表示されない例外の詳細およびカスタムプロパティをログに記録します。
  * [Serilog.Settings.Configuration](https://github.com/serilog/serilog-settings-configuration) - Microsoft.Extensions.Configurationから読み取るSerilogの設定プロバイダー。
* [SEQ](https://getseq.net) - SeqはHTTPでデータを収集し、アプリケーションはプラットフォームに最適な構造化ログAPIを使用します。

### Machine Learning and Data Science
* [Accord](https://github.com/accord-net/framework) - .NET向けの機械学習、コンピュータビジョン、統計および一般科学計算。
* [Catalyst](https://github.com/curiosity-ai/catalyst) spaCyにインスパイアされた、クロスプラットフォームの自然言語処理（NLP）ライブラリ。事前訓練済みモデルを備え、単純に語彙およびドキュメント埋め込みのトレーニングをサポートし、柔軟なエンティティ認識モデルを提供。[SciSharp Stack](https://scisharp.github.io/SciSharp/)の一部。
* [ML.NET](https://github.com/dotnet/machinelearning) - クロスプラットフォームのオープンソース機械学習フレームワークで、.NET開発者に機械学習を提供。[http://dot.net/ml](http://dot.net/ml)。
* [Spreads](https://github.com/Spreads/Spreads/) - リアルタイムおよび探索的データストリームの分析用のシリーズとパネル。
* [TensorFlowSharp](https://github.com/migueldeicaza/TensorFlowSharp) - NET言語向けのTensorFlow API
* [WaveFunctionCollapse](https://github.com/mxgmn/WaveFunctionCollapse) - 量子力学の考え方を活用して、1つの例からマップとタイルマップを生成。
* [SiaNet](https://github.com/SciSharp/SiaNet) - C#による深層学習ライブラリ。人間が使いやすい。CUDA/OpenCLをサポート。構造が整っており、拡張が容易

### Mail
* [FluentEmail](https://github.com/lukencode/FluentEmail) - NETと.NET Core用のすべてを一括で扱うメール送信ツール
* [MailBody](https://github.com/doxakis/MailBody) - 流れるようなインターフェースでトランザクションメールを作成する.NETライブラリ。
* [MailKit](https://github.com/jstedfast/MailKit) - IMAP、POP3、SMTPに対応するマルチプラットフォーム.NETライブラリ。
* [MailMergeLib](https://github.com/axuno/MailMergeLib) - SMTPメールクライアントライブラリで、テキスト、インライン画像および添付ファイルに対する快適なメールマージ機能を提供し、メールメッセージの送信において高い処理速度と障害耐性を実現します。
* [MimeKit](https://github.com/jstedfast/MimeKit) - クロスプラットフォームの.NET MIME生成・解析ライブラリ。S/MIME、PGP、DKIM、TNEF、Unix mboxスプールに対応。
* [netDumbster](https://github.com/cmendible/netDumbster) - テスト用の.NETのフィクションSMTPサーバー。人気のDumbsterのクローン。
* [Papercut](https://github.com/ChangemakerStudios/Papercut) - Simple Desktop SMTP Server
* [PreMailer.Net](https://github.com/milkshakesoftware/PreMailer.Net) - C#ライブラリで、スタイルシートをインラインスタイル属性に移動させ、メールクライアントとの互換性を最大限に確保します。
* [SendGrid Client](https://github.com/0xdeafcafe/sendgrid-dotnet) - SendGrid v3メールエンドポイント向けのC#ライブラリ。
* [SmtpServer](https://github.com/cosullivan/SmtpServer) - 自作SMTPサーバーを作成するためのライブラリ。
* [StrongGrid](https://github.com/Jericho/StrongGrid) - SendGridのv3 API用のクライアント。メールの送信に加え、連絡先の大量インポート、リストやセグメントの管理、リストにカスタムフィールドを追加など、さまざまな機能を提供します。また、SendGrid Webhooks用のパーサーも含まれています。

### Mathematics
* [AutoDiff](https://github.com/alexshtf/autodiff) - 数学関数の微分（導関数／勾配）を高速かつ正確に自動で計算するライブラリ。
* [UnitConversion](https://github.com/Stratajet/UnitConversion) - NET CoreおよびNET Framework向けの拡張可能な単位変換ライブラリ。
* [UnitsNet](https://github.com/angularsen/UnitsNet) - Units.NETでは、すべての一般的な単位とそれらの間の変換が提供されます。

### Media
* [MetadataExtractor](https://github.com/drewnoakes/metadata-extractor-dotnet) - メディア（画像、動画、音声）からメタデータをシンプルなAPIで抽出します。

### Misc
* [AdvanceDLSupport](https://github.com/Firwood-Software/AdvanceDLSupport) - ネイティブコードへのP/Invokeを改善するためのライブラリ。ネイティブオブジェクトを、第一クラスのオブジェクトのように扱います。
* [AngleSharp](https://github.com/AngleSharp/AngleSharp) - 最終的な角括弧パーサーライブラリ。HTML5、MathML、SVGおよびCSSを解析し、公式W3C規格に基づいてDOMを構築します。Pythonのbeautifulsoup4に相当します。
* [AgileMapper](https://github.com/agileobjects/AgileMapper) - AgileMapperは、設定不要で、高度にカスタマイズ可能なオブジェクト間マッピングツールであり、実行プランを可視化できる。
* [AspNetCore Extension Library](https://github.com/sgjsakura/AspNetCore) - ASP.NET Core拡張ライブラリ。
* [AutoMapper](https://github.com/AutoMapper/AutoMapper) - .NETにおける規約ベースのオブジェクト間マッピングツール。
* [Baget](https://github.com/loic-sharma/BaGet) - 軽量なNuGetサーバー。
* [Bleak](https://github.com/Akaion/Bleak) - Windows本体のDLLインジェクションライブラリ。
* [Bullseye](https://github.com/adamralph/bullseye/) - .NETでターゲットとその依存関係を記述・実行できるパッケージ。
* [Castle.Core](https://github.com/castleproject/Core) - Castle Core、包括的にCastle DynamicProxy、ログサービスおよびDictionaryAdapter [http://www.castleproject.org](http://www.castleproject.org)。
* [Chessie](https://github.com/fsprojects/Chessie) - .NET向けのレール指向プログラミング [http://fsprojects.github.io/Chessie](http://fsprojects.github.io/Chessie)。
* [CliWrap](https://github.com/Tyrrrz/CliWrap) - コマンドラインインターフェースのラッパー。
* [commanddotnet](https://github.com/bilal-fazlani/commanddotnet) - コマンドラインアプリケーションのインターフェースをクラスでモデル化。
* [CommonMark.NET](https://github.com/Knagis/CommonMark.NET) - CommonMark仕様をC#で実装し、MarkdownドキュメントをHTMLに変換する。
* [ConsoleTableExt](https://github.com/minhhungit/ConsoleTableExt) - .NETコンソールアプリケーション向けにテーブルを作成するフリュイディライブラリ。
* [CoordinateSharp](https://github.com/Tronald/CoordinateSharp) - 地理座標を迅速にフォーマット・変換できるライブラリであり、位置に基づく太陽・月の情報（夕方、朝方、月の照度など）を提供。
* [datatables](https://github.com/ALMMa/datatables.aspnet/tree/dev) - jQuery DataTables向けのMicrosoft ASP.NETサーバサイドサポートとヘルパー。
* [DinkToPdf](https://github.com/rdvojmoc/DinkToPdf) - C# .NET Core用のwkhtmltopdfライブラリのラッパー。Webkitエンジンを使用してHTMLページをPDFに変換。
* [dotnet-env](https://github.com/tonerdo/dotnet-env) - .NETで.envファイルから環境変数を読み込むためのライブラリ。
* [DotNet.Glob](https://github.com/dazinator/DotNet.Glob) - .NET / .NETStandardアプリケーション向けの高速なグローバルパターンマッチングライブラリ。正規表現より高速。
* [Dotnet outdated](https://github.com/dotnet-outdated/dotnet-outdated) - .NET Coreのグローバルツールでプロジェクト内の古くなったNuGetパッケージを表示・更新。
* [Dotnet Script](https://github.com/filipw/dotnet-script) - .NET CLIからC#スクリプトを実行。
* [Dotnet Serve](https://github.com/natemcmaster/dotnet-serve) - .NET Core CLI向けのシンプルなコマンドラインHTTPサーバー。
* [Downloader](https://github.com/bezzad/Downloader) - ダウンローダーは、.NET向けの現代的でスムーズで非同期かつテスト可能かつ移植可能なライブラリです。これは、マルチパートダウンローダーであり、非同期進行イベントをサポートしています。
* [Eighty](https://github.com/benjamin-hodgson/Eighty) - シンプルなHTML生成ライブラリ
* [Enums.NET](https://github.com/TylerBrinkley/Enums.NET) - Enums.NETは、高性能かつ型安全な.NET enumユーティリティライブラリです
* [FastExpressionCompiler](https://github.com/dadhi/FastExpressionCompiler) - デリゲートへの高速ExpressionTreeコンパイラ
* [FluentDocker](https://github.com/mariotoffia/FluentDocker) - docker、docker-composeおよびdocker-machine向けのコマンド、サービスおよびフラットAPI。Windows／Mac／Linuxおよびネイティブdockerに対応しています。
* [FluentFTP](https://github.com/robinrodricks/FluentFTP/) - FTPおよびFTPSクライアント。広範なFTPコマンド、SSL/TLS接続、ハッシュ／チェックサムなどに対応しています。
* [Fody](https://github.com/Fody/Fody) - .NETアセンブリの拡張可能なウェブツール
* [HdrHistogram.NET](https://github.com/HdrHistogram/HdrHistogram.NET) - 高動的範囲（HDR）ヒストグラム
* [httpclient-interception](https://github.com/justeat/httpclient-interception) - サーバーサイドHTTPデプロイのインターセプトを可能にする.NETスタンダードライブラリ
* [Humanizer](https://github.com/Humanizr/Humanizer) - Humanizerは、文字列、enum、日付、時刻、時間範囲、数字、量などの操作および表示に必要なすべての.NETニーズを満たします。
* [Humidifier](https://github.com/jakejscott/Humidifier) - C#を使用してAWS CloudFormationテンプレートを記述および維持します。
* [impromptu-interface](https://github.com/ekonbenefits/impromptu-interface) - 静的インターフェースと動的実装（ダックキャスト）。DLRとReflect.Emitを組み合わせて使用しています。
* [JqueryDataTablesServerSide](https://github.com/fingers10/JqueryDataTablesServerSide) - jQuery DataTables向けのASP.NET Coreサーバーサイド処理ライブラリ。データベースレベルでの複数列フィルタリング、ソート、ページネーションに対応し、ExcelエクスポートおよびTagHelperをサポートしています。
* [LibSass Host](https://github.com/Taritsyn/LibSassHost) - ライブラリの.NETラッパーであり、仮想ファイルシステムをサポートできるようにしています。 [libSass](http://sass-lang.com/libsass)
* [markdig](https://github.com/lunet-io/markdig) - 高速で、強力でCommonMark準拠であり、拡張可能なMarkdownプロセッサ。.NET向け。
* [NetCoreBeauty](https://github.com/nulastudio/NetCoreBeauty) - .NET Coreアプリケーションのランタイムコンポーネントと依存関係をサブディレクトリに移動し、それを美しくするためのシンプルなライブラリ。
* [NFlags](https://github.com/bartoszgolek/NFlags) - CLI引数のパースを簡単に行えるライブラリ。このライブラリは、使用方法のヘルプを「標準搭載」で表示できます。
* [NReco.LambdaParser](https://github.com/nreco/lambdaparser) - 文字列表現（式、メソッド呼び出し、条件）をLINQ表現ツリーにパースし、ラムダにコンパイルして評価できるようにします。
* [NuGet Trends](https://github.com/NuGetTrends/nuget-trends) - NuGetパッケージのダウンロード数に関する統計を表示するウェブサイト。
* [NYoutubeDL](https://gitlab.com/BrianAllred/NYoutubeDL) - C#/.NET向けのシンプルなyoutube-dlライブラリ。
* [Otp.NET](https://github.com/kspearrin/Otp.NET) - C#で実装されたRFC 6238のTOTPおよびRFC 4220のHOTP
* [pose](https://github.com/tonerdo/pose) - .NETの任意のメソッド（静的および非仮想を含む）をデリゲートに置き換える
* [PuppeteerSharp](https://github.com/kblok/puppeteer-sharp) - Puppeteer Sharpは、公式Node.JS Puppeteer APIの.NET版です
* [readline](https://github.com/tsolarin/readline) - .NET/.NET Core向けの純粋C#のGNU-Readline風ライブラリ
* [ReflectionMagic](https://github.com/ReflectionMagic/ReflectionMagic) - C#の動的機能を用いて、あなたのプライベートなリフレクションコードを極めて簡易に簡略化するためのフレームワーク
* [Relinq](https://github.com/re-motion/Relinq) - re-linqにより、LINQプロバイダーの作成がこれまで以上に簡単になりました
* [Remote.Linq](https://github.com/6bee/Remote.Linq) - Remote Linqは、LINQ表現木を強型でシリアル化可能な表現木に変換し、逆も同様にできる、小型かつ使いやすいが非常に強力なライブラリです
* [ReverseMarkdown](https://github.com/mysticmind/reversemarkdown-net) - HTMLからMarkdownへの変換ライブラリ
* [PdfReport.Core](https://github.com/VahidN/PdfReport.Core) - PdfReport.Coreは、iTextSharp.LGPLv2.CoreおよびEPPlus.Coreライブラリに基づいて構築されたコードファーストのレポートエンジンです
* [Scientist](https://github.com/github/Scientist.net) - .NET向けの重要なパスを丁寧にリファクタリングするライブラリ。GitHubのRuby Scientistライブラリのポートです
* [Scrutor](https://github.com/khellang/Scrutor) - Microsoft.Extensions.DependencyInjection向けのアセンブリスキャン拡張機能
* [Sheller](https://github.com/twitchax/Sheller) - コマンドを実行するための. NETライブラリ。非常に簡単で流暢な操作が可能になります
* [SmartFormat.NET](https://github.com/scottrippey/SmartFormat.NET) - string.Formatの拡張可能な代替実装
* Stocks
  * [Trady](https://github.com/lppkarl/Trady) - 技術指標の計算に便利なライブラリであり、株価データの供給、指標計算、戦略構築、自動取引を提供する自動取引システムを目指しています
* [System.Linq.Dynamic.Core](https://github.com/StefH/System.Linq.Dynamic.Core) - .NET Standard（.NET Core）版のSystem.Linq.Dynamic機能
* Validation
  * [FluentValidation](https://github.com/JeremySkinner/FluentValidation) - .NET向けの小さなバリデーションライブラリ。バリデーションルールの構築にフラットインターフェースとラムダ式を使用します
  * [FormHelper](https://github.com/SinanBozkus/FormHelper) - ASP.NET Core向けのフォームとバリデーションヘルパー。フォームヘルパーはJavaScriptコードを書かずにAjaxフォームとバリデーションを作成できます。（Fluent Validationと互換）
  * [Guard](https://github.com/safakgur/guard) - 高性能かつ拡張可能な引数バリデーションライブラリ
  * [Valit](https://github.com/valit-stack/Valit) - .NET Core向けの極めてシンプルなバリデーション。コード中のif文がいらない。より良い、クリーンなフラットバリデーションを書けます！
* [Vanara](https://github.com/dahall/Vanara) - Windowsで実装された.NETライブラリ。多くのネイティブWindowsAPIへのPInvoke呼び出しをサポートするラッパー付き
* [warden-stack](https://github.com/warden-stack) - アプリケーション、リソース、インフラの「ヘルスチェック」。Wardenを常に監視してください。
* [WebEssentials.AspNetCore.ServiceWorker](https://github.com/madskristensen/WebEssentials.AspNetCore.ServiceWorker) - ASP.NET Core プログレッシブWebアプリケーション。
* [Xabe.FFmpeg](https://github.com/tomaszzmuda/Xabe.FFmpeg) - FFmpeg向けの.NET標準ラッパー。FFmpegの仕組みを理解しなくてもメディア処理が可能であり、C#アプリからカスタム引数をFFmpegに渡すことができます。
* [YoutubeExplode](https://github.com/Tyrrrz/YoutubeExplode) - YouTube動画とプレイリストのメタデータ抽出およびダウンロードに最適なライブラリ。

### Networking
* [AspNetCore.Proxy](https://github.com/twitchax/AspNetCore.Proxy) - ASP.NET Core プロキシの使い勝手のよい実装。
* [CurlThin](https://github.com/stil/CurlThin) - C#向けの軽量cURLバインディングライブラリ。curl_multiインターフェースを用いて複数の同時転送をサポート。
* [NETStandard.HttpListener](https://github.com/StefH/NETStandard.HttpListener) - .NET Core（NETStandard）向けのHttpListener。
* [Networker](https://github.com/MarkioE/Networker) - .NET向けに設計されたシンプルで使いやすいTCPおよびUDPネットワークライブラリ。柔軟性・スケーラビリティ・高速性を備えています。
* [SharpPcap](https://github.com/chmorgan/sharppcap) - Windows、Mac、Linuxを含むすべてのプラットフォームで動作する、完全にマネージされた.NETライブラリ。ライブおよびファイルベースのデバイスからのパケットキャプチャが可能です。

### Office
* [EPPlus](https://github.com/EPPlusSoftware/EPPlus) - .NETを使って高度なExcelスプレッドシートを作成。
* [npoi](https://github.com/tonyqus/npoi) - Microsoft Officeがインストールされていない状態でもOffice形式を読み書きできる.NETライブラリ。COM+やインターフェースは不要。
* [Open-XML-SDK](https://github.com/OfficeDev/Open-XML-SDK) - Open XML SDKは、Office Word、Excel、PowerPointドキュメントの作業に必要なツールを提供します。

### Operating System
* [CosmosOS](https://github.com/CosmosOS/Cosmos) - Cosmosはオペレーティングシステムの「構築キット」です。C#、VB.NETなどマネージド言語を使って自作OSを構築できます！

### ORM
* [Chloe](https://github.com/shuxinqin/Chloe) - 軽量かつ高性能なオブジェクト/リレーションシップマッピング（ORM）ライブラリ。.NET向け。
* [Entity Framework Core](https://github.com/aspnet/EntityFramework) - 以前のEFバージョンと同様の開発体験を提供。LINQ、POCO、Code Firstのサポートを含む。
  * [EFCore.BulkExtensions](https://github.com/borisdj/EFCore.BulkExtensions) - EntityFrameworkCoreの大量挿入・更新・削除・読み取り（CRUD）操作用の拡張機能。
  * [EFCore.Visualizer](https://marketplace.visualstudio.com/items?itemName=GiorgiDalakishvili.EFCoreVisualizer) - Visual Studio内でEntity Framework Coreのクエリプランを直接確認できる機能。
  * [EntityFramework-Plus](https://github.com/zzzprojects/EntityFramework-Plus) - Entity Framework Utilities | 大量操作 | バッチ削除 | バッチ更新 | クエリキャッシュ | クエリフィルタ | クエリフューチャー | クエリインクルード | ログ記録。
  * [EntityFramework.Exceptions](https://github.com/Giorgi/EntityFramework.Exceptions) - EntityFrameworkCoreでSQLクエリがSQLサーバー、MySQL、PostgreSQLのデータベース制約に違反した場合に、型付き例外を使用。
  * [EntityFramework.Triggers](https://github.com/NickStrupat/EntityFramework.Triggers) - EFでのイベントのトリガー。
  * [EntityFramework.Rx](https://github.com/NickStrupat/EntityFramework.Rx) - EF操作の**hot**可変観測可能オブジェクト
  * [Npgsql.EntityFrameworkCore.PostgreSQL](https://github.com/npgsql/Npgsql.EntityFrameworkCore.PostgreSQL) - PostgreSQL用のEntity Framework Coreプロバイダー
  * [EntityFramework.PrimaryKey](https://github.com/NickStrupat/EntityFramework.PrimaryKey) - 任意のエンティティ（複合キーを含む）の主キーを簡単に取得
  * [EntityFramework.TypedOriginalValues](https://github.com/NickStrupat/EntityFramework.TypedOriginalValues) - エンティティの元の値のプロキシオブジェクトを取得（Property("...").OriginalValueへの型付きアクセス）
  * [EntityFramework.VersionedProperties](https://github.com/NickStrupat/EntityFramework.VersionedProperties) - 指定プロパティの変更履歴を自動的に保持するクラス
  * [EntityFrameworkCore.SqlServer.SimpleBulks](https://github.com/phongnguyend/EntityFrameworkCore.SqlServer.SimpleBulks) - 大量のレコードをメモリ内でデータベースに同期するためのシンプルなライブラリ。ラムダ式がサポートされています
  * [LINQKit](https://github.com/scottksmith95/LINQKit) - LINQ to SQLおよびEntity Frameworkのプロフェッショナルユーザー向けの無料拡張セット
  * [Pomelo.EntityFrameworkCore.MySql](https://github.com/PomeloFoundation/Pomelo.EntityFrameworkCore.MySql) - mysql-net/MySqlConnectorに基づいたMySQL用Entity Framework Coreプロバイダー
  * [spectre.query](https://github.com/spectresystems/spectre.query) - Entity Framework Core用のシンプルなクエリ言語
* [Dapper](https://github.com/StackExchange/Dapper) - .NET用のシンプルなオブジェクトマッパー
  * [Dapper-FluentMap](https://github.com/henkmollema/Dapper-FluentMap) - Dapperを使用する際に、POCOプロパティをデータベースカラムにフラウentlyマッピングするためのシンプルなAPIを提供
  * [Dommel](https://github.com/henkmollema/Dommel) - Dapper用のシンプルなCRUD操作
  * [MicroOrm.Dapper.Repositories](https://github.com/phnx47/MicroOrm.Dapper.Repositories) - Dapper用のCRUD操作
* [FreeSql](https://github.com/2881099/FreeSql) - dotnet向けの便利なORM。MySQL、PostgreSQL、SqlServer、Oracle、Sqliteをサポート
* [Limebean](https://nick-lucas.github.io/LimeBean/) - RedBeanPHPにインスピレーションを得たハイブリッドORM。使いやすさとSQLの完全な表示を重視し、ORMとして期待されるすべての機能を備えています
* [LINQ to DB (linq2db)](https://linq2db.github.io/) - 10以上のデータベースエンジンに対応し、完全なSQLサポートを備えた、最も速いLINQデータベースアクセスライブラリ。POCOオブジェクトとデータベース間のシンプルで軽量で高速かつ型安全なレイヤーを提供
* [nhibernate-core](https://github.com/nhibernate/nhibernate-core) - NHibernateオブジェクト関係マッパー
* [NEventStore](https://github.com/NEventStore/NEventStore) - イベントソースをストレージメカニズムとして使用する際に、異なるストレージ実装を抽象化するためのパースistenceライブラリ。このライブラリはDDD/CQRSアプリケーションに特に焦点を当てて開発されています
* [NPoco](https://github.com/schotime/NPoco) - クエリ結果をPOCOオブジェクトにマッピングするためのシンプルなマイクロORM。PetaPocoのSchotimeのブランチに基づくプロジェクト
* [NReco.Data](https://github.com/nreco/data) - SQLコマンド生成、CRUD操作、シンプルなPOCOマッピングに必要な軽量かつプロバイダーに依存しないDAL
* [PetaPoco](https://github.com/CollaboratingPlatypus/PetaPoco) - POCO用の小さなORM風のライブラリです。
* [querybuilder](https://github.com/sqlkata/querybuilder) - SqlKata Query BuilderはC#で書かれた強力なSQLクエリビルダーです。
* [RepoDb](https://github.com/mikependon/RepoDb) - .NET向けのハイブリッドORMライブラリです。
* [ServiceStack.OrmLite](https://github.com/ServiceStack/ServiceStack.OrmLite) - 軽量でシンプルで高速な規則ベースのPOCO ORMです。
* [SqlFu](https://github.com/sapiens/SqlFu) - 高速かつ柔軟なマイクロORMです。
* [SmartSql](https://github.com/Ahoo-Wang/SmartSql) - SmartSql = MyBatis + メモリ | Redisキャッシュ + ZooKeeper + R/W分割 + ダイナミックリポジトリ ....
* [SQLStreamStore](https://github.com/SQLStreamStore/SQLStreamStore) - .NET向けのSQLベース実装をターゲットとしたストリームストアライブラリです。

### Profiling
* [Glimpse](https://github.com/Glimpse/Glimpse.Prototype) - 軽量でオープンソースのリアルタイム診断とインサイトプロファイラー（.NET用）。 `Unstable version`
* [MiniProfiler](https://github.com/MiniProfiler/dotnet) - ASP.NETウェブサイト向けのシンプルで効果的なミニプロファイラーです。

### Query Builders
* [SqlKata](https://github.com/sqlkata/querybuilder) - 複雑なクエリ、結合、サブクエリ、ネストされたWHERE条件、ベンダーエンジン対応など、すべてをサポートする洗練されたSQLクエリビルダーです。

### Queue and Messaging
* [emitter](https://emitter.io/) - すべてのデバイスを接続する無料オープンソースリアルタイムメッセージングサービス。この発行・購読メッセージングAPIは、高速かつ安全に設計されています。
* [EasyNetQ](https://github.com/EasyNetQ/EasyNetQ) - RabbitMQ向けの使いやすい.NET APIです。
* [EventStore](https://github.com/EventStore/EventStore) - JavaScriptで実装されたオープンソース・機能的なデータベースで、複雑なイベント処理をサポートしています。
* [Foundatio](https://github.com/exceptionless/Foundatio#queues) - メモリ、Redis、Azure実装を含む共通インターフェースです。
* [MediatR](https://github.com/jbogard/MediatR) - .NET向けのシンプルで野心のないメディエーター実装です。
 * [MediatR.Extensions.Microsoft.DependencyInjection](https://github.com/jbogard/MediatR.Extensions.Microsoft.DependencyInjection) - Microsoft.Extensions.DependencyInjection向けのMediatR拡張機能です。
* [Mediator.Net](https://github.com/mayuanyang/Mediator.Net) - コマンドの送信、イベントの発行、リクエスト応答をサポートするパイプラインを備えたシンプルな.NETメディエーターです。
* [MicroBus](https://github.com/Lavinski/Enexure.MicroBus) - .NET向けのシンプルなプロセス内メディエーターです。
* [MQTTnet](https://github.com/chkr1011/MQTTnet) - MQTTベースの通信向けの高性能.NETライブラリです。
* [netmq](https://github.com/zeromq/netmq) - .NET向けのZeroMQの100％ネイティブC#実装です。
* [NServiceBus](https://github.com/particular/nservicebus) - NServiceBusは、[Particular Service Platform](https://particular.net/service-platform)の一部であり、分散システムの構築、監視、デバッグに必要なツールを含む.
* [OpenCQRS](https://github.com/OpenCQRS/OpenCQRS) - DDD、CQRSおよびイベントソース向けの.NET Coreライブラリ。Azure Service Busとの統合が可能。コマンドストアおよびイベントストアにサポートされているデータベースプロバイダーは：DocumentDB、MongoDB、SQL Server、MySQL、PostgreSQLおよびSQLite.
* [rabbitmq-dotnet-client](https://github.com/rabbitmq/rabbitmq-dotnet-client) - RabbitMQ .NETクライアント [https://www.rabbitmq.com](https://www.rabbitmq.com).
* [RawRabbit](https://github.com/pardahlman/RawRabbit) - RabbitMQ上の通信に用いる現代的な.NETフレームワーク.
* [Rebus](https://github.com/rebus-org/Rebus) - .NET向けのシンプルかつ軽量なサービスバス実装.
* [Restbus](http://restbus.org) - RabbitMQ向けのメッセージングライブラリ.
* [Silverback](https://github.com/BEagle1984/silverback) - イベント駆動アプリケーションの構築に用いるフレームワーク（Kafka、RabbitMQ、MQTTのサポートあり）.
* [Tossit](https://github.com/turgayozgur/tossit) - 分散ジョブ／ワーカーロジックをシンプルかつ使いやすいライブラリで実現。分散メッセージは組み込みのRabbitMQ実装で処理される.

### Reporting
* [FastReport](https://github.com/FastReports/FastReport) - .NET Core 2.x/.Net Framework 4.x向けオープンソースレポート生成ライブラリ。FastReportはMVC、Web APIアプリケーションで使用可能.

### Scheduler and Job
* [Chroniton.NetCore](https://github.com/leosperry/Chroniton) - スケジュールに従ってタスク（ジョブ）を実行するための軽量かつ堅牢なライブラリ.
* [Coravel](https://github.com/jamesmh/coravel) - .Net CoreとLaravel：スケジューリング、キューなどに対応.
* [FluentScheduler](https://github.com/fluentscheduler/FluentScheduler) - フリーフルuentインターフェースを備えた自動ジョブスケジューラ.
* [Gofer.NET](https://github.com/brthor/Gofer.NET) - .NET Core向けの簡単なC#API。Pythonのceleryを参考にしている.
* [HangfireIO](https://github.com/HangfireIO/Hangfire) - ASP.NETアプリケーション内で、一時実行、遅延、繰り返しタスクを簡単に実行できる方法 [http://hangfire.io](http://hangfire.io).
* [LiquidState](https://github.com/prasannavl/LiquidState) - .NET向けの効率的な非同期および同期状態マシン.
* [NCrontab](https://github.com/atifaziz/NCrontab) - .NET向けのCrontab.
* [quartznet](https://github.com/quartznet/quartznet/) - .NET向けQuartzエンタープライズスケジューラー。[http://www.quartz-scheduler.net](http://www.quartz-scheduler.net)。
* [stateless](https://github.com/dotnet-state-machine/stateless) - C#コード内で状態マシンを作成するためのシンプルなライブラリ.

### SDKs
* [AWS SDK](https://github.com/aws/aws-sdk-net) - Amazon Web Services（AWS）.NET Core SDKのコンポーネント。各AWSサービスには独自のNuGetパッケージがある.
* [azure-event-hubs-dotnet](https://github.com/azure/azure-event-hubs-dotnet) - Azure Event Hubs向けの.NET Standardクライアントライブラリ。
* Blockchain clients
  * [Bittrex.Net](https://github.com/JKorf/Bittrex.Net) - BittrexのWeb API向けC# .Netラッパー。すべての機能を簡単にアクセス・利用可能に。
  * [Binance.Net](https://github.com/JKorf/Binance.Net) - BinanceのWeb API向け.NET APIラッパー。
* [CakeMail.RestClient](https://github.com/Jericho/CakeMail.RestClient) - CakeMailのAPI向けクライアント。送信用のトランザクションメール、大量メール、リストや連絡先の管理などに対応。
* [consuldotnet](https://github.com/PlayFab/consuldotnet/tree/develop) - Consul向けの.NET API。
* [csharp-nats](https://github.com/nats-io/csharp-nats) - NATSメッセージングシステム向けのC# .NETクライアント。
* [DarkSkyCore](https://github.com/amweiss/dark-sky-core) - .NET Standard向けの[Dark Sky API](https://darksky.net/dev/docs)向けラッパー。
* [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - Docker API向けの.NET（C#）クライアントライブラリ。
* [firebase-admin-dotnet](https://github.com/firebase/firebase-admin-dotnet) - Firebase Admin .NET SDK
* [google-cloud-dotnet](https://github.com/GoogleCloudPlatform/google-cloud-dotnet) - Google Cloud向けの.NETクライアントライブラリ。
* [Manatee.Trello](https://github.com/gregsdennis/Manatee.Trello) - C#で書かれた、TrelloのRESTful API向けの完全にオブジェクト指向の.NETラッパー。
* [Microphone](https://github.com/rogeralsing/Microphone) - ConsulまたはETCDクラスタ上にWeb ApiまたはNancyFxを用いて、セルフホスティングRESTサービスを実行するための軽量フレームワーク。
* [octokit.net](https://github.com/octokit/octokit.net) - GitHub API向けの.NETクライアントライブラリ。
* [PreStorm](https://github.com/jshirota/PreStorm) - ArcGIS Server向けの並列RESTクライアント。
* [SendGrid-csharp](https://github.com/sendgrid/sendgrid-csharp) - SendGridのフル機能APIをC#で利用できるクライアントライブラリ。
* [statsd-csharp-client](https://github.com/Pereingo/statsd-csharp-client) - Etsyの優れた[statsd](https://github.com/etsy/statsd)サーバーとインタフェースするための.NET Standard対応C#クライアント。
* [tweetinvi](https://github.com/linvi/tweetinvi) - TwitterのRESTおよびSTREAM APIにアクセスするための、直感的な.NET C#ライブラリ。

### Security
* [aspnetcore-security-headers](https://github.com/juunas11/aspnetcore-security-headers) - ASP.NET Coreアプリケーションにセキュリティヘッダーを追加するためのミドルウェア。
* [HtmlSanitizer](https://github.com/mganss/HtmlSanitizer) - XSS攻撃を回避するためのHTMLのクリーンアップ。
* [jose-jwt](https://github.com/dvsekhvalnov/jose-jwt) - JOSEオブジェクト（JWT、JWA、JWSおよび関連）を処理するためのライブラリ。
* [Jwt.Net](https://github.com/jwt-dotnet/jwt) - Jwt.Net：.NET向けのJWT（JSON Web Token）実装。
* [JWT Simple Server](https://github.com/Xabaril/JWTSimpleServer) - ASP.NET Core用の軽量かつ動的なJWTサーバー
* [NWebsec](https://github.com/NWebsec/NWebsec) - ASP.NET [http://www.nwebsec.com](http://www.nwebsec.com)向けのセキュリティライブラリ
* [reCAPTCHA](https://github.com/PaulMiami/reCAPTCHA) - ASP.NET Core用のreCAPTCHA 2.0
* [roslyn-security-guard](https://github.com/dotnet-security-guard/roslyn-security-guard) - .NETアプリケーションのセキュリティ診断を支援するRoslynアナライザー
* [OwaspHeaders](https://github.com/GaProgMan/OwaspHeaders.Core) - .NET Core用のOwaspが推奨するHTTPヘッダーを挿入するミドルウェア
* [Security](https://github.com/aspnet/Security) - ウェブアプリケーションのセキュリティおよび認可用ミドルウェア
* [SecurityHeaders](https://github.com/andrewlock/NetEscapades.AspNetCore.SecurityHeaders) - ASP.NET Coreサイトにセキュリティヘッダーを追加できる小型パッケージ

### Searching
* [Algolia.Search](https://github.com/algolia/algoliasearch-client-csharp) - 公式のAlgolia .NETクライアントのリポジトリ
* [AutoComplete](https://github.com/omerfarukz/autocomplete) - 持続的でシンプルかつ強力でポータブルな自動補完ライブラリ
* [Elasticsearch.Net & NEST](https://github.com/elastic/elasticsearch-net) - NESTおよびElasticsearch.NET、両方の公式Elasticsearch .NETクライアントのリポジトリ
* [ElasticsearchCRUD](https://github.com/damienbod/ElasticsearchCRUD) - Elasticsearch .NET API
* [SearchExtensions](https://github.com/ninjanye/SearchExtensions) - IQueryableインターフェース（例：Entity Frameworkのクエリ）向けの高度な検索機能
* [SimMetrics.Net](https://github.com/StefH/SimMetrics.Net) - 類似性メトリクスライブラリ、たとえば編集距離（Levenshtein、Gotoh、Jaroなど）から他のメトリクス（例：Soundex、Chapman）へ
* [SolrExpress](https://github.com/solr-express/solr-express) - Solr向けのシンプルかつ軽量なクエリ.NETライブラリ。制御された、ビルド可能で、迅速に失敗する仕組みを採用。

### Serialization
* [BinarySerializer](https://github.com/jefffhaynes/BinarySerializer) - カスタムパケットおよびプロトコルフォーマットのシリアライズ、ビット操作をサポート。
* [bond](https://github.com/Microsoft/bond) - スキーマ化されたデータを扱うためのクロスプラットフォームフレームワーク。クロス言語のシリアライズ／デシリアライズと、データを効率的に操作するための強力なジェネリックメカニズムをサポート。Bondはマイクロソフトの大规模サービスで広く使用されている。
* [Channels](https://github.com/davidfowl/Channels) - プッシュベースの.NETストリーム
* [CsvHelper](https://github.com/JoshClose/CsvHelper) - CSVファイルの読み書きを支援するライブラリ
* [Edi.Net](https://github.com/indice-co/EDI.Net) - EDIシリアライザー／デシリアザー。EDIFact、X12、TRADACOMSフォーマットをサポート。
* [ExtendedXmlSerializer](https://github.com/wojtpl2/ExtendedXmlSerializer) - .NET向けの拡張XMLシリアライザー
* [Jil](https://github.com/kevin-montrose/Jil) - 高速 .NET JSON (デ)シリアライザ、Sigil に基づく。
* MessagePack
  * [msgpack-cli](https://github.com/msgpack/msgpack-cli) - Common Language Infrastructure / [msgpack.org](http://msgpack.org) 用の MessagePack 実装。
  * [MessagePack-CSharp](https://github.com/neuecc/MessagePack-CSharp) - C#（.NET、.NET Core、Unity、Xamarin）向け極めて高速な MessagePack シリアライザ。
* [Newtonsoft.Json](https://github.com/JamesNK/Newtonsoft.Json) - .NET 用の人気高パフォーマンス JSON フレームワーク。
* [protobuf-net](https://github.com/mgravell/protobuf-net/) - idiomatic .NET 用の Protocol Buffers ライブラリ。
* [Schema.NET](https://github.com/RehanSaeed/Schema.NET) - Schema.org オブジェクトを強型 C# POCO クラスに変換し、.NET で使用可能。すべてのクラスは JSON/JSON-LD および XML にシリアライズ可能で、HTML ページのヘッダー部分に構造化データを表すために通常使用。
* [ServiceStack.Text](https://github.com/ServiceStack/ServiceStack.Text) - JSON、JSV および CSV テキスト シリアライザ。
* [TinyCsvParser](https://github.com/bytefish/TinyCsvParser) - .NET で CSV パースを行う使いやすく、拡張しやすく、高パフォーマンスなライブラリ。
* [Wire](https://github.com/rogeralsing/Wire) - POCO オブジェクト用のバイナリ シリアライザ。
* [YamlDotNet](https://github.com/aaubry/YamlDotNet) - .NET
* [ZeroFormatter](https://github.com/neuecc/ZeroFormatter) - .NET 用の高速バイナリ（デ）シリアライザ。
* [Utf8Json](https://github.com/neuecc/Utf8Json) - C#（NET、.NET Core、Unity、Xamarin）向け、絶対に最も速く、割り当てなし JSON シリアライザ。
* [YAXLib](https://github.com/sinairv/YAXLib) - .NET フレームワークおよび .NET Core 用の XML シリアライズ ライブラリ。極めて柔軟で強力。

### Template Engine
* [dotliquid](https://github.com/dotliquid/dotliquid) - Tobias Lütke の Liquid テンプレート言語の .NET バージョン。
* [fluid](https://github.com/sebastienros/fluid) - Liquid テンプレート言語に最も近いオープンソース .NET テンプレートエンジン。
* [Portable.Xaml](https://github.com/cwensley/Portable.Xaml) - XAML ファイルの読み書きに用いるポータブル .NET ライブラリ。
* [Razor](https://github.com/aspnet/Razor) - MVC ワンウェブアプリケーションのビュー ページで使用される CSHTML ファイルのパーサーおよびコードジェネレーター。
* [RazorLight](https://github.com/toddams/RazorLight) - .NET Core 用の Microsoft の Razor パーサーに基づくテンプレートエンジン。
* [Scriban](https://github.com/lunet-io/scriban) - .NET 用の高速、強力、安全で軽量なテキストテンプレート言語およびエンジン。

### Testing
* [Atata](https://github.com/atata-framework/atata) - Selenium WebDriver に基づくウェブUIテスト自動化フル機能フレームワーク。 [https://atata.io](https://atata.io)
* [Bogus](https://github.com/bchavez/Bogus) - C#用のシンプルで論理的な仮データ生成ツール。faker.jsに基づいて開発・移植されたもの。
* [CoreBDD](https://github.com/stevenknox/CoreBDD) - xUnit.net用のBDDフレームワーク
* [FakeItEasy](https://github.com/FakeItEasy/FakeItEasy) - .NET用の簡単なモックライブラリ
* [FluentAssertions](https://github.com/fluentassertions/fluentassertions) - TDDまたはBDDスタイルのテストで期待される結果を、より自然に指定できる.NET拡張メソッドのセット
* [GenFu](https://github.com/MisterJames/GenFu) - 実際のテストデータを生成できるライブラリ
* [LightBDD](https://github.com/LightBDD/LightBDD) - 読みやすく、維持しやすいテストを書けるBDDフレームワーク
* [mockhttp](https://github.com/richardszalay/mockhttp) - MicrosoftのHttpClientライブラリ用のテスト層
* [moq.netcore](https://github.com/Moq/moq4) - .NET用の最も人気があり、使いやすいモックフレームワーク
* [MSpec](https://github.com/machine/machine.specifications) - BDDスタイルのテストを書くための人気あるテストフレームワーク
* [MyTested.AspNetCore.Mvc](https://github.com/ivaylokenov/MyTested.AspNetCore.Mvc) - ASP.NET Core MVC用のフリュイットテストフレームワーク
* [Netling](https://github.com/hallatore/Netling) - ウェブテストに便利なロードテストクライアント
* [NSpec](https://github.com/nspec/NSpec) - MochaおよびRSpecに強くインスピレーションを受けた、C#用の堅牢なテストフレームワーク
* [NSubstitute](https://github.com/nsubstitute/NSubstitute) - .NETモックフレームワークの親しみやすい代替ツール
* [nunit](https://github.com/nunit/dotnet-test-nunit) - .NET Core用のNUnitテストランナー
* [shouldly](https://github.com/shouldly/shouldly) - .NET用のShouldテスト - アサートが「Should」のようにすべきだ！ [http://shouldly.readthedocs.org/en/latest](http://shouldly.readthedocs.org/en/latest)
* [SpecFlow](https://github.com/techtalk/SpecFlow) - .NET用の実用的なBDDソリューション。Gherkin仕様言語を使用し、Visual Studioと統合されている。
* [Storyteller](https://github.com/storyteller/Storyteller) - .NET用の実行可能な仕様 [http://storyteller.github.io](http://storyteller.github.io)
* [Stubbery](https://markvincze.github.io/Stubbery/) - .NETでAPIスタブを作成・実行できるシンプルなライブラリ
* [Testavior](https://github.com/geeklearningio/Testavior) - Testaviorは、ASP.NET Core用の行動テスト開発を支援する軽量ソリューションです。
* [TestStack.BDDfy](https://github.com/TestStack/TestStack.BDDfy) - 最もシンプルなBDDフレームワーク！
* [xBehave.net](https://github.com/xbehave/xbehave.net) - xUnit.net で自然言語を使ってテストを記述する拡張機能。[http://xbehave.github.io](http://xbehave.github.io)
* [xUnit.net](https://github.com/xunit/xunit) - .NET Framework 用の無料、オープンソース、コミュニティ中心のユニットテストツール。

### Tools
* [CliFx](https://github.com/Tyrrrz/CliFx) - コマンドラインインターフェースを構築するための宣言型フレームワーク。
* [CommandLineUtils](https://github.com/natemcmaster/CommandLineUtils) - .NET Core および .NET Framework 用のコマンドラインパーサーとユーティリティ。
* [docfx](https://github.com/dotnet/docfx) - .NET プロジェクト用のAPIドキュメントの作成と公開ツール [http://dotnet.github.io/docfx](http://dotnet.github.io/docfx)
* [dotnetfiddle](https://dotnetfiddle.net) - 開発者がコードを迅速に試すための.NET用サンドボックス、コードスニペットを共有できる環境。
* [dotnet-tools](https://github.com/natemcmaster/dotnet-tools) - .NET Core コマンドライン（dotnet CLI）向けのツール拡張の一覧。
  * [LibMan CLI](https://github.com/aspnet/LibraryManager) - ウェブアプリ向けのクライアント側コンテンツマネージャー。
* [EntryPoint](https://github.com/Nick-Lucas/EntryPoint) - .NET Core および .NET Framework 4.5+ 用の合成可能なコマンドライン引数パーサー。
* [Fake JSON Server](https://github.com/ttu/dotnet-fake-json-server) - プロトタイピングやCRUDバックエンドとして使用できる仮のREST API。型を定義する必要なし、動的型を使用。データは1つのJSONファイルに保存。認証、WebSocket通知、非同期長時間処理、エラー/遅延のランダム生成、実験的なGraphQLサポートを備えている。
* [gitignore.io](https://github.com/joeblau/gitignore.io) - プロジェクト用の便利な.gitignoreファイルを作成 [https://www.gitignore.io](https://www.gitignore.io).
* [ICanHasDotnetCore](https://github.com/OctopusDeploy/ICanHasDotnetCore) - アップロードされた packages.config ファイルまたはGitHubリポジトリをスキャンし、NuGetパッケージが.NET Standardをターゲットとしているかどうかを判定。
* [json2csharp](http://json2csharp.com) - JSONからC#クラスを生成。
* [letsencrypt-win-simple](https://github.com/Lone-Coder/letsencrypt-win-simple) - Windows用のシンプルなACMEクライアント。
* [Linq_Faster](https://github.com/jackmott/LinqFaster) - 配列、Span<T>、List<T>に対してLINQ風の拡張関数を提供し、より高速かつメモリ割当を減らす。

* [mRemoteNG](https://github.com/mRemoteNG/mRemoteNG) - mRemoteの次世代、オープンソース、タブ付き、マルチプロトコル、リモート接続マネージャー。
* [NJsonSchema](https://github.com/RSuter/NJsonSchema) - NJsonSchemaは、JSON Schema draft v4+を読み取り、生成し、検証するための.NETライブラリ。
* [NuKeeper](https://github.com/NuKeeperDotNet/NuKeeper) - .NETプロジェクト内のNuGetパッケージを自動的に更新。
* [NuGetPackageExplorer](https://github.com/NuGetPackageExplorer/NuGetPackageExplorer) - GUIを使ってNuGetパッケージを作成、更新、デプロイ。
* [NugetVisualizer](https://github.com/sepharg/NugetVisualizer) - 指定されたGitリポジトリまたはフォルダのすべてのNuGetパッケージとその対応バージョンを可視化。
* [OctoLinker](https://github.com/OctoLinker/browser-extension) - GitHubにおけるOctoLinkerブラウザ拡張機能で、`projects.json`ファイルを効率的にナビゲートできます.
* [posh-dotnet](https://github.com/bergmeister/posh-dotnet) - に対するタブ補完機能. `PowerShell` [dotnet CLI](https://github.com/dotnet/cli)
* [Rin](https://github.com/mayuki/Rin) - ASP.NET Core向けのリクエスト/レスポンスインスペクターミドルウェア。Glimpseに類似しています.
* [scoop](https://github.com/lukesampson/scoop) - Windows向けのコマンドラインインストーラー.
* [SerilogAnalyzer](https://github.com/Suchiman/SerilogAnalyzer) - Serilogログライブラリを使用したコード分析（Roslynベース）。よくある間違いや使用上の問題をチェックします.
* [SharpZipLib](https://github.com/icsharpcode/SharpZipLib) - #ziplibは、.NETプラットフォーム上で完全にC#で書かれたZIP、GZIP、TARおよびBZIP2ライブラリです.
* [ShareX](https://github.com/ShareX/ShareX) - キーを1回押すだけで、スクリーンの任意の領域をキャプチャまたは記録し、共有できる無料かつオープンソースのプログラム。さらに、80以上のサポート対象先から画像、テキスト、その他のファイルをアップロードできます。 [https://getsharex.com](https://getsharex.com)
* [SharpLab](https://github.com/ashmind/SharpLab) - .NETコードプレインドがコードコンパイルの途中段階と結果を表示するコードプレイグラウンド。[https://sharplab.io](https://sharplab.io)
* [SmartCode](https://github.com/Ahoo-Wang/SmartCode) – スマートコード= IDataSource → IBuildTask → IOutput ⇒ すべてを構築します！！（包括的に[コードジェネレーター]）
* [sourcelink](https://github.com/dotnet/sourcelink) - SourceLinkは、言語やソース管理に依存しないシステムで、バイナリの第一クラスのソースデバッグ体験を提供します.
* [System.CommandLine](https://github.com/dotnet/command-line-api) - System.CommandLineは、コマンドラインのパース、呼び出し、およびターミナル出力のレンダリングに必要なライブラリのセットです.
* [Typin](https://github.com/adambajguz/Typin) - シンプルで使いやすい宣言型フレームワーク。インタラクティブなCLIアプリケーションおよびコマンドラインツール（直接モード）に適用。その根幹はCliFxにあります.
* [X.Web.Sitemap](https://github.com/dncuug/X.Web.Sitemap) – .NETおよび.NET Core向けのシンプルなサイトマップ生成器
* [X.Web.RSS](https://github.com/dncuug/X.Web.RSS) – .NETおよび.NET Core向けのシンプルなRSSフィード生成器

### Web Framework
* WebAssembly
  * [Blazor](https://github.com/SteveSanderson/Blazor) - WebAssemblyを介してブラウザ内で.NETを実行するUIフレームワーク.
    * [Awesome Blazor](https://github.com/AdrienTorris/awesome-blazor) - Blazorに関する素晴らしいリソース（サンプル、コンポーネント、記事、動画など）のコレクション.
    * [Blazor Redux](https://github.com/torhovland/blazor-redux) - ReduxのステートストアをBlazorに接続します.
  * [Ooui](https://github.com/praeclarum/Ooui) - Web上でネイティブUI開発のシンプルさを提供する、小さなクロスプラットフォームUIライブラリ.
* [ReactJS.NET](https://github.com/reactjs/React.NET) - ReactコンポーネントのJSXコンパイルおよびサーバー側レンダリングを行う.NETライブラリ.
* [redux.NET](https://github.com/GuillaumeSalles/redux.NET) - .NETアプリケーション向けの予測可能なステートコンテナ。[https://github.com/reactjs/redux](https://github.com/reactjs/redux)にインスパイアされています。

### Web Socket
* [Fleck](https://github.com/statianzo/Fleck) - FleckはC#で実装されたWebSocketサーバー。継承やコンテナ、追加の参照を必要としない。
* [SignalR Server](https://github.com/aspnet/signalr) - ウェブアプリケーション向けリアルタイムウェブ機能、サーバーサイドプッシュを含む。
* [SuperSocket](https://github.com/kerryjiang/SuperSocket) - 軽量で、プラットフォームを越えて使用可能であり、拡張性のあるソケットサーバー応用フレームワーク。
* [WampSharp](https://github.com/Code-Sharp/WampSharp) - C#実装の - WebSocket上でリモートプロシージャ呼び出しおよび発行/購読のメッセージパターンを提供するプロトコル。 [The Web Application Messaging Protocol](http://wamp-proto.org/)
* [websocket-manager](https://github.com/radu-matei/websocket-manager) - ASP .NET Core向けのリアルタイムライブラリ。

### Windows Service
* [dotnet-win32-service](https://github.com/dasMulli/dotnet-win32-service) - .NET Coreから直接Windowsサービスとして設定・実行可能。
* [Topshelf](https://github.com/Topshelf/Topshelf) - .NETを用いたWindowsサービスの構築に用いる簡単なサービスホスティングフレームワーク。

### Workflow
* [CoreWF](https://github.com/dmetzgar/corewf/) - Windows Workflow Foundation (WF)の.NET Coreへの移植。
* [workflow-core](https://github.com/danielgerlag/workflow-core) - .NET Standard向けの軽量ワークフローエンジン。
* [WorkflowEngine.NET](https://github.com/optimajet/WorkflowEngine.NET) - アプリケーションにワークフローを追加するコンポーネント。
* [Wexflow](https://github.com/aelassas/Wexflow) - 高性能で、拡張性・モジュラリティ・プラットフォームを越えて使用可能なワークフローエンジン。

## Roadmaps
* [ASP.NET Core Developer Roadmap](https://github.com/MoienTajik/AspNetCore-Developer-Roadmap) - 2019年にASP.NET Core開発者になるための道筋。

## Starter Kits
* [Arch](https://github.com/Arch) - .NET Coreのすべての新機能を採用するソフトウェアアーキテクトが作成した.NET Coreライブラリのコレクション。
  * [AutoHistory](https://github.com/Arch/AutoHistory) - Microsoft.EntityFrameworkCore向けのプラグインで、データ変更履歴を自動的に記録できるようにする。
* [AspNetCore-Angular2-Universal](https://github.com/MarkPieszak/aspnetcore-angular2-universal) - マルチプラットフォーム対応 - サーバーサイドレンダリングによるSEO対応、Bootstrap、i18n国際化（ngx-translate）、Webpack、TypeScript、Karmaによるユニットテスト、WebAPI REST設定、SignalR、Swaggerドキュメントなど！
* [ASP.NET Core Starter Kit](https://github.com/kriasoft/aspnet-starter-kit) - .NET Core、Kestrel、バックエンドのGraphQL、フロントエンドのBabel、Webpack、ReactおよびReduxに基づくウェブ開発用の意見に基づいたテンプレート。このテンプレートはC#およびF#の2種類で提供される。
* [aspnetcore-spa generator](https://github.com/aspnet/JavaScriptServices) - Yeomanジェネレーターで、Angular 2 / React / React With Redux / Knockout / Aureliaをクライアントに使用する新しいASP.NET Coreのシングルページアプリケーションを構築できる。
* [ASP.Net Core Vue Starter](https://github.com/MarkPieszak/aspnetcore-Vue-starter) - Asp.NETCore 2.0 Vue 2 (ES6) SPAスタートキット、ルーティング、Vuexなどを含む。
* [bitwarden-core](https://github.com/bitwarden/core) - コアインフラストラクチャバックエンド（API、データベースなど） [https://bitwarden.com](https://bitwarden.com)。
* [dotNetify](https://github.com/dsuryd/dotNetify) - リアルタイムHTML5/C# .NETウェブアプリケーションを構築するためのシンプル、軽量でありながら強力な方法。
* [generator-aspnet](https://github.com/OmniSharp/generator-aspnet) - ASP.NET Core 用のyoジェネレーター
* [Nucleus](https://github.com/alirizaadiyahsi/Nucleus) - Vueのスタートアップアプリケーションテンプレートで、バックエンドにASP.NET Core APIの層構造を採用し、JWTベースの認証を使用
* [react-aspnet-boilerplate](https://github.com/pauldotknopf/react-aspnet-boilerplate) - ASP.NET Core 1を活用した既存技術を活かした同士のReactアプリケーションの開発の出発点
* [saaskit](https://github.com/saaskit/saaskit) - SaaSアプリケーション開発用の開発ツールキット
* [serverlessDotNetStarter](https://github.com/pharindoko/serverlessDotNetStarter) AWSクラウド上でのサーバレスフレームワークに基づくLambda関数の開発およびデプロイ用のスタートキット

## Sample Projects
* Microservices & Service Mesh
  * [clean-architecture-dotnet](https://github.com/thangchung/clean-architecture-dotnet) - 最小限のクリーンアーキテクチャ（DDD-lite、CQRS-lite、必要なだけのクラウドネイティブパターン）をeCommerceサンプルビジネスドメインに適用
  * [coolstore-microservices ](https://github.com/vietnam-devs/coolstore-microservices) - IstioサービスマッシュのKubernetesベースの多言語マイクロサービスアプリケーション
  * [distributed-playground](https://github.com/jvandevelde/distributed-playground) - Vagrant、Consul、DockerおよびASP.NET Coreを活用した分散サービスの遊び場
  * [DNC-DShop](https://github.com/devmentors) - 分散型.NET Coreプロジェクトと無料コース（DDD、CQRS、RabbitMQ、MongoDB、Redis、モニタリング、ログ、CI、CD）
  * [dotnetcore-microservices-poc](https://github.com/asc-lab/dotnetcore-microservices-poc) -  .NET Core（EF Core、MediatR、Marten、Eureka、Ocelot、RabbitMQ、Polly、ElasticSearch、Dapper）を用いたマイクロサービスアーキテクチャで構築された保険販売システム（ブログ記事シリーズ付き）
  * [eShop](https://github.com/dotnet/eShop) - DDD、CQRS、マイクロサービス、非同期プログラミングを適用した.NETアプリケーションによるeCommerceサイトの実装例
  * [InMemoryCQRSReplication](https://github.com/Aaronontheweb/InMemoryCQRSReplication) - Akka.NETリファレンスアーキテクチャ - CQRS + シャーディング + メモリ内再現
  * [magazine-website](https://github.com/thangchung/magazine-website) - .NET Core、ASP.NET Core、EF Coreを用いたマガジンサイト（DDD、CQRS、マイクロサービス、非同期プログラミングを適用）
  * [microservices-in-dotnetcore](https://github.com/horsdal/microservices-in-dotnet-book-second-edition) - 第二版の[Microservices in .NET Core](https://www.manning.com/books/microservices-in-net-core-second-edition)からのコードサンプル
  * [Practical.CleanArchitecture](https://github.com/phongnguyend/Practical.CleanArchitecture) - フルスタックの.NET 8 クリーンアーキテクチャ（マイクロサービス、モジュラリーモノリス、モノリス）、Blazor、Angular 18、React 18、Vue 3、YARPによるBFF、ドメイン駆動設計、CQRS、SOLID、ASP.NET Core Identityのカスタムストレージ、OpenID Connect、Entity Framework Core、OpenTelemetry、SignalR、ホストサービス、ヘルスチェック、レート制限、クラウドサービス（Azure、AWS、GCP）
  * [practical-dapr](https://github.com/thangchung/practical-dapr) - DaprとTyeに基づくフルスタック.NETマイクロサービス
  * [ReactiveTraderCloud](https://github.com/AdaptiveConsulting/ReactiveTraderCloud) - リアルタイム取引プラットフォームのデモで、アプリケーションスタック全体に適用された反応型プログラミングの原則を示す
* Monoliths
  * [AlbumViewerVNext](https://github.com/RickStrahl/AlbumViewerVNext) - West Wind Album Viewer ASP.NET 5サンプル
  * [allReady](https://github.com/HTBox/allReady) - 人道的支援や災害対応組織が地域コミュニティで実施する準備活動の意識、効率、影響を高めるためのオープンソースソリューション。[http://www.htbox.org/projects/allready](http://www.htbox.org/projects/allready)
  * [AspNet5GeoElasticsearch](https://github.com/damienbod/AspNet5GeoElasticsearch) - ASP.NET Core MVC Geo Elasticsearch Swashbuckle Swagger
  * [aspnet-servicediscovery-patterns](https://github.com/cecilphillip/aspnet-servicediscovery-patterns) - ASP.NET Core で Service Discovery パターンを実装するサンプル
  * [AspNetAuthorizationWorkshop](https://github.com/blowdart/AspNetAuthorizationWorkshop) - ASP.NET Core 認可機能の新しい要素を順に学ぶワークショップ
  * [BikeSharing360 Suite of Apps from Microsoft](https://blogs.msdn.microsoft.com/visualstudio/2016/12/14/connectdemos-2016-bikesharing360-on-github/) 2016年12月のConnectカンファレンスで発表された、企業と利用者向けの連携アプリ群：[Mobile Apps](https://github.com/Microsoft/BikeSharing360_MobileApps)、[Backend Services](https://github.com/Microsoft/BikeSharing360_BackendServices)、[Websites](https://github.com/Microsoft/BikeSharing360_Websites)、[Single Container Apps](https://github.com/Microsoft/BikeSharing360_SingleContainer)、[Multi Container Apps](https://github.com/Microsoft/BikeSharing360_MultiContainer)、[Cognitive Services Kiosk App](https://github.com/Microsoft/BikeSharing360_CognitiveServicesKioskApp)、
 [Azure Bot App](https://github.com/Microsoft/BikeSharing360_BotApps)。
  * [Clean Architecture Manga](https://github.com/ivanpaulovich/clean-architecture-manga) - .NET Core 3.0 と C# 8 を使用したクリーンアーキテクチャサンプル。ユースケースを中心構造としており、完全にテスト可能でフレームワークに依存していない。
  * [cloudscribe](https://github.com/cloudscribe/cloudscribe) - ASP.NET Core マルチテナントWebアプリケーションの基礎
  * [CoreCodeCamp](https://github.com/shawnwildermuth/CoreCodeCamp) - 小さなローカル開発イベントを運営するオープンソースウェブサイト
  * [DotNetClub](https://github.com/scheshan/DotNetClub) - ASP.NET Coreで書かれたミニクラブアプリ
  * [eShopOnWeb](https://github.com/dotnet-architecture/eShopOnWeb) - モノリス的なデプロイモデルを採用した層別アプリケーションアーキテクチャ
  * [Entropy](https://github.com/aspnet/Entropy) - 新しい機能やアイデアのための混沌とした実験場。個々の機能のための小さなシンプルなサンプルをここに確認してください。
  * [EquinoxProject](https://github.com/EduardoPires/EquinoxProject) - ASP.NET Core 2.0 でDDD、CQRS、イベントソーシングを用いた完全なアプリケーション
  * [GenVue](https://github.com/herbat73/GenVue) - Vue.js、VuetifyjsおよびNetCore WebAPIスタックを用いて、秘密のユーザーがプライベートファイルをアップロード・共有できるホスト可能なWebアプリケーション
  * [guidance-identity-management-for-multitenant-apps](https://github.com/Azure-Samples/guidance-identity-management-for-multitenant-apps) - Microsoft Azure上でマルチテナントアプリでユーザー識別を管理する方法。Azure Active Directoryによる認証を使用。
  * [JustA.ML](https://github.com/mustakimali/JustA.ML) - ASP.NET Core 2.0で書かれた、デバイス間でファイル／URL／テキストを共有できるWebアプリ。オープンソース、ライブサイトは [https://justa.ml](https://justa.ml)
  * [MegaMine](https://github.com/Nootus/MegaMine) - ASP.NET CoreとAngularJSを用いた、金・石英・穀物などを扱うオープンソース採掘ソリューション。複数の軽量コンポーネントをマイクロサービス方式で構成する。
  * [MusicStore](https://github.com/dotnet/aspnetcore/tree/master/src/MusicStore) - MVCとEntity Frameworkを使用したMusicStoreアプリケーションのサンプル
  * [NLayerAppV3](https://github.com/cesarcastrocuba/nlayerappv3) - .NET Core Preview 2を用いたNLayerAppV3のN層アーキテクチャ
  * [NorthwindTraders](https://github.com/JasonGT/NorthwindTraders) - ASP.NET CoreとEntity Framework Coreを使用したNorthwind Tradersサンプルアプリケーション
  * [Orchard Core - Modular and Multi-tenant applications](https://github.com/OrchardCMS/OrchardCore.Samples) - Orchard Coreフレームワークを使ってモジュール化・マルチテナントアプリケーションを作成。
  * [PhotoGallery](https://github.com/chsakell/aspnet5-angular2-typescript) - ASP.NET Core、Angular 2 & TypeScriptを用いたクロスプラットフォームシングルページアプリケーション [http://wp.me/p3mRWu-11L](http://wp.me/p3mRWu-11L).
  * [PokeR](https://github.com/halomademeapc/pokeR) - SignalRとAngularを用いたASP.NET CoreのSPAホスティングによるリアルタイムスクラムポーカー。Docker対応を含む。 [Demo](https://planning.halomademeapc.com)
  * [Practical ASP.NET Core](https://github.com/dodyg/practical-aspnetcore) - ASP.NET Coreの機能や構成要素について、毎日更新されるマイクロサンプル。
  * [Practical.CleanArchitecture](https://github.com/phongnguyend/Practical.CleanArchitecture) - フルスタックの.NET 8 クリーンアーキテクチャ（マイクロサービス、モジュラリーモノリス、モノリス）、Blazor、Angular 18、React 18、Vue 3、YARPによるBFF、ドメイン駆動設計、CQRS、SOLID、ASP.NET Core Identityのカスタムストレージ、OpenID Connect、Entity Framework Core、OpenTelemetry、SignalR、ホストサービス、ヘルスチェック、レート制限、クラウドサービス（Azure、AWS、GCP）
  * [Sample .NET Core CQRS REST API](https://github.com/kgrzybek/sample-dotnet-core-cqrs-api) - .NET Core REST APIにおけるCQRSの実装（raw SQLとDDDを用いた）およびクリーンアーキテクチャの活用。
  * [StarWars](https://github.com/JacekKosciesza/StarWars) - GraphQL 'Star Wars' サンプル：GraphQL for .NET、ASP.NET Core、Entity Framework Coreを用いた実装。

## Articles
* Basic knowledge
  * [Microsoft architectural overview of comprehensive BikeSharing360 suite of demo apps with related videos](https://blogs.msdn.microsoft.com/visualstudio/2016/12/14/connectdemos-2016-bikesharing360-on-github/)
  * [Porting a .NET Framework library to .NET Core](https://www.codeproject.com/Articles/1190475/Porting-a-NET-Framework-library-to-NET-Core)
  * [The 68 things the CLR does before executing a single line of your code](http://mattwarren.org/2017/02/07/The-68-things-the-CLR-does-before-executing-a-single-line-of-your-code/)
  * The comparison between .NET Core and Nodejs at [here](https://manuel-rauber.com/2016/03/07/node-js-asp-net-core-1-0-a-usage-comparison/), および [here](https://gist.github.com/ilyaigpetrov/f6df3e6f825ae1b5c7e2) [here](https://github.com/thinktecture/nodejs-aspnetcore-webapi)
  * [Understanding ASP.NET Core Initialization](http://developer.telerik.com/featured/understanding-asp-net-core-initialization/)
  * [Why you should join .NET Core and ASP.NET Core train](https://codingblast.com/why-you-should-join-asp-net-core/)
* Cloud Development
  * [Configuring the AWS SDK in .NET Core](https://aws.amazon.com/blogs/developer/configuring-aws-sdk-with-net-core/)
  * [Serverless Architecture using C# and AWS Amazon Gateway Api/Lambda](https://www.codeproject.com/Articles/1178781/Serverless-Architecture-using-Csharp-and-AWS-Amazo)
  * [Using C# and .NET Core in Amazon Web Services (AWS) Lambda](https://aws.amazon.com/blogs/compute/announcing-c-sharp-support-for-aws-lambda/)
* Configuration and deployment
  * [.NET project structure](https://gist.github.com/davidfowl/ed7564297c61fe9ab814)
  * [Adding Travis CI builds to a .NET Core app](http://andrewlock.net/adding-travis-ci-to-a-net-core-app/)
  * [ASP.NET Core 1.0 - Configure ApplicationInsights](http://social.technet.microsoft.com/wiki/contents/articles/35918.asp-net-core-1-0-configure-applicationinsights.aspx)
  * [haproxy, nginx, Angular 2, ASP.NET Core, Redis and Docker](http://tattoocoder.azurewebsites.net/legion-of-heroes-haproxy-nginx-angular2-aspnetcore-redis-docker/)
  * [Project.json to MSBuild conversion guide](http://www.natemcmaster.com/blog/2017/01/19/project-json-to-csproj/)
  * [Publishing a .NET project with Appveyor and NuGet](https://few-lines-of-code.blogspot.com/2016/03/publishing-net-project-with-appveyor.html)
  * [The New Configuration Model in ASP.NET Core](http://developer.telerik.com/featured/new-configuration-model-asp-net-core/)
* Entity Framework Core
  * [.NET Core Data Access](https://blogs.msdn.microsoft.com/dotnet/2016/11/09/net-core-data-access/)
  * [A very good example about EF Core](https://github.com/rowanmiller/Demo-EFCore)
  * [Connect to Postgres with EF Core](http://en.otomatikmuhendis.com/2017/05/05/connect-to-postgres-with-ef-core/)
* Miraculous
  * [Getting started with Orchard Core as a NuGet package](http://www.ideliverable.com/blog/getting-started-with-orchard-core-as-a-nuget-package)
  * [How to export HTML to PDF in ASP.NET Core](https://code.msdn.microsoft.com/How-to-export-HTML-to-PDF-c5afd0ce)
  * [Vue.js server side rendering with ASP.NET Core](http://mgyongyosi.com/2016/Vuejs-server-side-rendering-with-aspnet-core/)
* Security
  * [.NET Continuous Delivery Microservices](http://stackshare.io/tomstaijen/net-continuous-delivery-microservices)
  * [ASP.NET Core 2.0 Authentication and Authorization System Demystified](https://digitalmccullough.com/posts/aspnetcore-auth-system-demystified.html)
  * [A walk-through for an ASP.NET Authorization Lab](https://github.com/blowdart/AspNetAuthorizationWorkshop)
  * [Authentication in ASP.NET Core](https://stormpath.com/blog/authentication-asp-net-core)
* Testing
  * [Selenium with .NET Core](http://www.dotnetcatch.com/2016/11/23/selenium-with-net-core/)
- [InfoQ .NET articles](https://www.infoq.com/dotnet) -  InfoQサイトにおける最高の.NET記事のコレクション

## Books
* [.NET Core in Action](https://manning.com/books/dotnet-core-in-action)
* [ASP.NET Core Application Development: Building an application in four sprints (Developer Reference)](https://www.amazon.com/ASP-NET-Core-Application-Development-application/dp/1509304061)
* [ASP.NET Core in Action](https://www.manning.com/books/asp-net-core-in-action)
* [ASP.NET Core 1.0 High Performance](https://www.amazon.com/ASP-NET-Core-1-0-High-Performance/dp/1785881892)
* [Building Microservices with ASP.NET Core: Develop, Test, and Deploy Cross-Platform Services in the Cloud](https://www.amazon.com/Building-Microservices-ASP-NET-Core-Cross-Platform/dp/1491961732)
* [C# 6 and .NET Core 1.0: Modern Cross-Platform Development](https://www.amazon.com/NET-Core-1-0-Cross-Platform-Development/dp/1785285696)
* [C# in Depth 4](https://www.amazon.com/C-Depth-Jon-Skeet/dp/1617294535)
* [Dependency Injection in .NET Core, 2nd edition](https://www.manning.com/books/dependency-injection-in-dot-net-second-edition)
* [Essencial C# 7.0](https://www.amazon.com/Essential-7-0-Addison-Wesley-Microsoft-Technology/dp/1509303588)
* [Exploring .NET Core with Microservices, ASP.NET Core, and Entity Framework Core - free eBook sampler](https://www.manning.com/books/exploring-dot-net-core)
* [Microservices in .NET Core: with C#, the Nancy framework, and OWIN middleware](https://www.amazon.com/Microservices-NET-Core-framework-middleware/dp/1617293377)
* [Professional C# 6 and .NET Core 1.0](https://www.amazon.com/Professional-NET-Core-Christian-Nagel/dp/111909660X)
* [The little ASP.NET Core](https://www.recaffeinate.co/book)


## Videos
* [Channel9](https://channel9.msdn.com) - MSDN
* [Channel9](https://www.youtube.com/channel/UCsMica-v34Irf9KVTh6xx-g) - YouTube
* [Microsoft Learning Center](https://dotnet.microsoft.com/learn/aspnet)
 * [ASP.NET Monsters](https://channel9.msdn.com/Series/aspnetmonsters)
* [Visual Studio](https://www.youtube.com/user/VisualStudio/channels)

## Podcasts
* [.NET Rocks](https://www.dotnetrocks.com)
* [Merge Conflict](http://www.mergeconflict.fm/)
* [The sound of .NET](http://thesoundof.net/?q=.NET+Core)

## Community
* [.NET Foundation](http://forums.dotnetfoundation.org)
* [.NET Blog](https://devblogs.microsoft.com/dotnet/)
* [/r/CoolGithubProjects](https://www.reddit.com/r/coolgithubprojects)
* [ASP.NET](https://forums.asp.net)
* [Channel9](https://channel9.msdn.com)
* [Awesome .NET open source & community resources](https://discoverdot.net)
* [Slack](http://tattoocoder.com/aspnet-slack-sign-up)
* [BuiltWithDot.Net](https://builtwithdot.net)
* [awesome-copilot](https://github.com/github/awesome-copilot)
* Stack Overflow
  *  [.NET Core](https://stackoverflow.com/questions/tagged/.net-core)
  *  [CoreCLR](https://stackoverflow.com/questions/tagged/coreclr)
  *  [ASP.NET Core](https://stackoverflow.com/questions/tagged/asp.net-core)
  *  [ASP.NET Core MVC](https://stackoverflow.com/questions/tagged/asp.net-core-mvc)
  *  [ASP.NET Core 1.0](https://stackoverflow.com/questions/tagged/asp.net-core-1.0)
  *  [Entity Framework Core](https://stackoverflow.com/questions/tagged/entity-framework-core)
* [Trending .NET repositories on GitHub today](https://github.com/trending?l=csharp)

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法的に可能である範囲内で、[thangchung](http://weblogs.asp.net/thangchung)はこの作品に関するすべての著作権および関連又は隣接する権利を放棄した。
