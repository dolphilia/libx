---
title: "Awesome Microservices"
description: "Microservicesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-mfornos-awesome-microservices-readme-md"
---

# Awesome Microservices

Microservicesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## プラットフォーム <a id="platforms"></a>

- [1Backend](https://github.com/1backend/1backend) - AIネイティブなマイクロサービスプラットフォーム
- [Jolie](https://jolie-lang.org) - マイクロサービス志向のオープンソースプログラミング言語
- [OpenWhisk](https://github.com/apache/openwhisk) - イベントに応じてスケールを問わず関数を実行するサーバレス、オープンソースのクラウドプラットフォーム
- [Pulumi](https://pulumi.io/) - クラウドネイティブインフラストラクチャのためのSDK。好きな言語でアプリとインフラの更新をプレビューし、管理し、常にクラウドにデプロイ可能（YAML不要）
- [Triton](https://github.com/joyent/triton) - 1つ以上のデータセンターで動作する次世代のコンテナベースのサービス指向インフラを提供するオープンソースクラウド管理プラットフォーム

## フレームワーク／ランタイム <a id="frameworks--runtimes"></a>

- [Akka](http://akka.io/) - JVM上で高並列性・分散性・耐障害性を備えたメッセージ駆動アプリケーションを構築するためのツールキットとランタイム
- [Axon (c)](https://axoniq.io/) - JVM上で実行可能なDDD、CQRS、イベントソースアプリケーションの開発と実行を容易にする、端到端の開発およびインフラプラットフォーム
- [Ballerina](https://ballerina.io) - クラウドネイティブプログラミング言語
- [Bun](https://bun.sh/) - 高速なすべての機能を備えたJavaScriptランタイム
- [Dapr](https://dapr.io) - 任意のプログラミング言語で高パフォーマンスなマイクロサービスを書くためのオープンソースランタイム
- [Deno](https://deno.land/) - JavaScript、TypeScript、WebAssemblyランタイムで安全なデフォルトと優れた開発体験を提供
- [Eclipse Microprofile](https://microprofile.io/) - マイクロサービスアーキテクチャにおけるエンタープライズJavaの最適化を進めるためのオープンフォーラム。複数の実装を革新し、共通の関心領域で協力し、標準化を目指す。
- [Erlang/OTP](https://github.com/erlang/otp) - 高可用性を要する大规模スケーラブルソフトリアルタイムシステムを構築するためのプログラミング言語
- [Finagle](http://twitter.github.io/finagle) - JVM上で高並列性を実現する拡張可能なRPCシステム
- [Gleam](https://gleam.run/) - 型安全かつスケーラブルなシステムを構築するための親しみやすい言語
- [GraalVM](https://www.graalvm.org/) - アプリケーションパフォーマンスと効率性に大きな改善をもたらすハイパフォーマンスランタイム。マイクロサービスに最適。
- [Helidon](https://helidon.io/) - Nettyで駆動された高速ウェブコアを備えたマイクロサービス開発用のJavaライブラリのコレクション
- [Ice](https://github.com/zeroc-ice/ice) - C++、C#、Java、JavaScript、Pythonなど、多数の言語に対応する包括的なRPCフレームワーク
- [Light-4j](https://github.com/networknt/light-4j) - 高スループット、低遅延、小さなメモリフットプリント、そして生産性の高いマイクロサービスプラットフォーム
- [Micronaut](http://micronaut.io/) - モジュール化されやすくテストしやすいマイクロサービスアプリケーションを構築するための現代的な、JVMベースのフルスタックフレームワーク
- [Moleculer](http://moleculer.services/) - Node.js、Java、GoおよびRuby向けの高速かつ強力なマイクロサービスフレームワーク
- [Open Liberty](https://openliberty.io/) - クラウドネイティブJavaマイクロサービスを高速かつ効率的に構築するための軽量オープンフレームワーク
- [Pears](https://github.com/holepunchto/pear) - ペア・トゥ・ペアのランタイム、開発およびデプロイ
- [SmallRye](https://smallrye.io/) - クラウド開発向けに設計されたAPIおよび実装、Eclipse MicroProfileを含む
- [Spin](https://github.com/fermyon/spin) - WebAssemblyを活用した、高速で安全かつ組み立て可能なクラウドマイクロサービスを構築・実行するためのオープンソースフレームワーク
- [ScaleCube](https://github.com/scalecube/scalecube) - JVM上で反応性マイクロサービスを構築するためのツールキット：遅延が少なく、高スループット、スケーラブルかつ耐障害
- [Vert.X](http://vertx.io/) - JVM上で反応性アプリケーションを構築するためのツールキット
- [Vert.X Toolbox](https://github.com/vert-x3/vertx-microservices-toolbox) - Vert.xのコンポーネントを用いて反応性マイクロサービスアプリケーションを構築するためのセット
- [Wangle](https://github.com/facebook/wangle) - 一貫性があり、モジュラーかつ組み立て可能なサービスを構築するための、共通のクライアント/サーバー抽象化を提供するフレームワーク

## サービスツールキット <a id="service-toolkits"></a>

### 多言語 <a id="polyglot"></a>

- [GRPC](http://www.grpc.io/) - モバイルおよびHTTP/2を最優先にした、高性能かつオープンソースの一般RPCフレームワーク。C、C++、Java、Go、Node.js、Python、Ruby、Objective-C、PHPおよびC#でのライブラリを提供

### C <a id="c"></a>

- [Lwan](http://lwan.ws/) - 高性能かつスケーラブルなウェブサーバー
- [uSockets](https://github.com/uNetworking/uSockets) - 異常処理アプリケーション向けに、跨プラットフォームで極めて小さいイベント、ネットワークおよび暗号化ツール

### C++ <a id="c-1"></a>


- [Cap’n Proto RPC](https://capnproto.org/cxxrpc.html) - Cap’n ProtoのC++ RPC実装
- [C++ Micro Services](https://github.com/CppMicroServices/CppMicroServices) - OSGiに類するC++の動的モジュールシステムおよびサービスレジストリ
- [Enduro/X](https://github.com/endurox-dev/endurox/) - GNU/Linux向けのXATMIベースのサービスフレームワーク
- [Pistache](https://github.com/oktal/pistache) - C++で書かれた高性能RESTツールキット
- [Poco](http://pocoproject.org/) - ネットワークベースのアプリケーションおよびサーバーを構築するためのC++クラスライブラリ
- [Sogou Workflow](https://github.com/sogou/workflow) - エンタープライズレベルのプログラミングエンジンで、ほとんどのバックエンド開発要件を満たす
- [uWebSockets](https://github.com/uNetworking/uWebSockets) - 最も厳しい要件を満たすアプリケーション向けにシンプルで安全かつ標準適合のウェブサーバー

### C# <a id="csharp"></a>

- [Awesome Microservices .NET Core](https://github.com/mjebrahimi/Awesome-Microservices-NetCore) - .NET Coreにおけるマイクロサービス向けの素晴らしいトレーニングシリーズ、記事、動画、書籍、コース、サンプルプロジェクト、ツールのコレクション :star:

### D <a id="d"></a>

- [Vibe.d](http://vibed.org/) - 非同期I/Oで、あなたの仕事に邪魔にならない、D言語で書かれたもの

### Erlang VM <a id="erlang-vm"></a>

#### Elixir <a id="elixir"></a>

- [Phoenix](http://www.phoenixframework.org/) - HTML5アプリケーション、APIバックエンド、分散システムを構築するためのフレームワーク
- [Plug](https://github.com/elixir-lang/plug) - ウェブアプリケーション間の可合成モジュールをつなぐための仕様と便利な機能

#### Erlang <a id="erlang"></a>

- [Cowboy](https://github.com/ninenines/cowboy) - Erlangで書かれた小さな、高速、モジュラリティの高いHTTPサーバー
- [Mochiweb](https://github.com/mochi/mochiweb) - Erlangで書かれた軽量HTTPサーバーを構築するためのライブラリ

### Go <a id="go"></a>

- [Chi](https://github.com/go-chi/chi) - GoのHTTPサービスを構築するための軽量、自然で可合成なルーター
- [Echo](https://echo.labstack.com/) - Go向けの高速かつシンプルなHTTPサーバーフレームワーク。他のものと比べて最大10倍速い
- [Fiber](https://github.com/gofiber/fiber) - FasthttpというGoの最も高速なHTTPエンジンに基づいた、Expressをインスピレーションとしたウェブフレームワーク。ゼロメモリ割り当てとパフォーマンスを意識して、開発を容易に設計。
- [Gin](https://github.com/gin-gonic/gin) - GinはGo（Golang）で書かれたHTTPウェブフレームワーク。MartiniのようなAPIを備え、パフォーマンスが非常に高く、最大40倍速い。
- [Goa](https://github.com/goadesign/goa) - Goで設計されたHTTPマイクロサービス。
- [GoFr](https://github.com/gofr-dev/gofr) - スケーラビリティと堅牢性を強調した、意見をもつマイクロサービス開発フレーム及。マイクロサービス開発を簡易化するように設計。
- [Go Chassis](https://github.com/go-chassis/go-chassis) - Goでマイクロサービスの迅速開発を行うためのフレームワーク。いくつかのクラウドエコシステムとの統合が容易。
- [Go-micro](https://github.com/micro/go-micro) - 分散システム開発用のフレームワーク。
- [Go-zero](https://github.com/tal-tech/go-zero) - ウェブとRPCの分散システム開発用のフレームワーク。
- [Gorilla](http://www.gorillatoolkit.org/) - Goプログラミング言語向けのウェブツールキット。
- [Iris](https://github.com/kataras/iris) - Go向けの高速、シンプルで効率的なマイクロウェブフレームワーク。
- [Lura](https://github.com/luraproject/lura) - 中間ソフトウェアを用いた、極めて高速なAPIゲートウェイを構築するためのフレームワーク。
- [RPCX](https://github.com/smallnest/rpcx) - アリババのDubboや微博のMotanに似たNET/RPCに基づいた分散RPCサービスフレームワーク。

### Haskell <a id="haskell"></a>

- [Scotty](https://github.com/scotty-web/scotty) - RubyのSinatraをインスピレーションとした、WAIとWarpを用いたマイクロウェブフレームワーク。
- [Servant](https://github.com/haskell-servant/servant) - 型レベルのウェブDSL。
- [Yesod](https://github.com/yesodweb/yesod) - ハスケルのRESTフルウェブフレームワーク

### Java VM <a id="java-vm"></a>

#### Clojure <a id="clojure"></a>

- [Compojure](https://github.com/weavejester/compojure) - リング／クロージャー向けの簡潔なルーティングライブラリ
- [Duct](https://duct-framework.org/) - クロージャー向けのサーバーサイドフレームワーク
- [System](https://github.com/danielsz/system) - スチュアート・シエラのcomponentライブラリに基づき構築された、事前準備済みのコンポーネントを提供するフレームワーク
- [Tesla](https://github.com/otto-de/tesla-microservice) - オト・デのクロージャーマイクロサービスの一部を構成する共通の基盤

#### Java <a id="java"></a>

- [ActiveJ](https://github.com/activej/activej) - 複雑な高負荷分散アプリケーションおよびメモリキャッシュのようなソリューション向けの軽量かつ高速なライブラリ
- [Airlift](https://github.com/airlift/airlift) - JavaでRESTサービスを構築するためのフレームワーク
- [Armeria](https://line.github.io/armeria/) - Java 8、Netty、ThriftおよびgRPCに基づくオープンソースの非同期HTTP/2 RPC/RESTクライアント・サーバーライブラリ
- [Disruptor](https://github.com/LMAX-Exchange/disruptor) - 高パフォーマンスのスレッド間メッセージングライブラリ
- [Dropwizard](https://github.com/dropwizard/dropwizard) - オペレーションに最適化された、高パフォーマンスなRESTフルウェブサービスを構築するためのJavaフレームワーク
- [Dubbo](https://github.com/apache/dubbo) - アリババがオープンソースにした、高性能なJavaベースのRPCフレームワーク
- [Conjure](https://github.com/palantir/conjure-java-runtime) - FeignまたはRetrofitをクライアント、Dropwizard／JerseyとJAX-RSサービス定義をサーバーとして使うことで、RESTish／RPCサーバーおよびクライアントを定義・作成するための意見を反映したライブラリセット
- [Jersey](https://github.com/eclipse-ee4j/jersey) - JavaでのRESTフルサービス。JAX-RSのリファレンス実装
- [Quarkus](https://quarkus.io/) - Kubernetesにネイティブに対応したJavaスタック。OpenJDK HotSpotおよびGraalVMに最適化され、優れたJavaライブラリと標準から構築されたもの
- [Ratpack](https://ratpack.io/) - 高速かつ効率的で、進化しやすく、テストも可能なHTTPアプリケーションを支援するJavaライブラリセット。Groovy言語への特別なサポートを提供。
- [Spring Boot](http://projects.spring.io/spring-boot/) - スタンドアローンかつプロダクションレベルのSpringベースアプリケーションの作成を容易にする。

#### Kotlin <a id="kotlin"></a>

- [Http4k](https://www.http4k.org/) - 純粋なKotlinで書かれた軽量だが完全機能のHTTPツールキット。HTTPサービスの提供と消費を関数型かつ一貫性のある方法で可能にする。
- [Ktor](https://ktor.io/) - Kotlinプログラミング言語を用いて接続システムにおける非同期サーバーおよびクライアントを構築するためのフレームワーク

#### Scala <a id="scala"></a>

- [Finatra](http://twitter.github.io/finatra/) - Twitter-ServerおよびFinagleに基づく、高速かつテスト可能なScala HTTPサービス
- [Http4s](http://http4s.org/) - Scalaの最小で自然なHTTPインターフェース
- [Play](https://www.playframework.com/) - JavaおよびScala向けの高速ウェブフレームワーク

### Node.js <a id="nodejs"></a>

- [Actionhero](http://www.actionherojs.com/) - マルチトランスポートのNode.js APIサーバーでクラスタ機能と遅延タスクを統合
- [Express](http://expressjs.com/) - Node.js向けの高速で意見がなく、ミニマリズムを採用したウェブフレームワーク
- [Fastify](https://www.fastify.io/) - Fastify：Node.js向けの高速かつ低負荷のウェブフレームワーク
- [FeathersJS](http://feathersjs.com/) - 現代アプリケーション向けのオープンソースRESTおよびリアルタイムAPIレイヤー
- [Hono](https://hono.dev/) - JavaScriptランタイムのいずれにも対応する、小型でシンプルで超高速なウェブフレームワーク。エッジ上で動作する。
- [Koa](http://koajs.com/) - Node.js向けの次世代ウェブフレームワーク
- [Loopback](http://loopback.io/) - APIを作成し、バックエンドデータソースに簡単に接続できるNode.jsフレームワーク
- [NestJS](https://docs.nestjs.com/) - 効率的でスケーラブルなサーバーサイドアプリケーションを構築するためのNode.jsフレームワーク。組み込みのマイクロサービス対応を提供。
- [Seneca](https://github.com/senecajs/seneca) - Node.js向けのマイクロサービスツールキット
- [Serverless](https://github.com/serverless/serverless) - AWS LambdaおよびAPI Gateway（以前はJAWS）上で実行されるウェブ、モバイル、IoTアプリケーションの開発と維持。
- [tRPC](https://github.com/trpc/trpc) - 端末から端末までタイプセーフなAPIを提供。

### Perl <a id="perl"></a>

- [Cro](http://cro.services/) - Perl 6を使用して反応型分散システムを作成するためのライブラリ。
- [Mojolicious](https://mojolicious.org/) - Perl向けの次世代ウェブフレームワーク

### PHP <a id="php"></a>

- [API Platform](https://api-platform.com/) - Symfony上に構築されたAPIファーストのウェブフレームワーク。JSON-LD、Schema.orgおよびHydraのサポートを提供。
- [Ecotone](https://docs.ecotone.tech/) - DDD、CQRSおよびイベントソースのアーキテクチャ原則に基づいたフレームワーク。スケーラブルで拡張可能なアプリケーションの構築ブロックを提供。
- [Hyperf](https://github.com/hyperf/hyperf) - Hyperfは、Swoole 4.5+に基づく、非常にパフォーマンスが高く柔軟なPHP CLIフレームワーク。最先端のコルーチンサーバーと、多数の実証済みコンポーネントによって駆動。
- [Lumen](https://lumen.laravel.com/) - 驚異的な速度のマイクロフレームワーク。
- [Slim](http://www.slimframework.com/) - シンプルで強力なウェブアプリケーションおよびAPIを迅速に書くことができるマイクロフレームワーク。
- [Spiral](https://spiral.dev/) - 長期間実行されるアプリケーション向けに設計されたフレームワーク。[RoadRunner](https://roadrunner.dev/)との統合を提供。[Temporal](https://temporal.io/)ワークフローエンジンおよび[Centrifugo](https://centrifugal.dev/)ウェブソケットサーバーとの統合を提供。マイクロサービスアーキテクチャに特に効果的であり、REST APIおよびgRPCサービスに対して強固なサポートを提供。
- [Swoft](https://github.com/swoft-cloud/swoft/) - PHPのマイクロサービスコルーチンフレームワーク。高性能なウェブシステム、API、ミドルウェア、基本サービスの構築に適しています。
- [Symfony](https://symfony.com/) - Symfonyコンポーネントに基づくマイクロフレームワーク。

### Python <a id="python"></a>

- [Aiohttp](https://github.com/aio-libs/aiohttp) - asyncio用のHTTPクライアント/サーバー。
- [Bottle](https://bottlepy.org) - Python用の高速でシンプルかつ軽量のWSGIマイクロウェブフレームワーク。
- [Connexion](https://github.com/zalando/connexion) - Flask上で構築されたPython用のSwagger/OpenAPIフレームワーク。自動エンドポイント検証とOAuth2サポートを備えています。
- [Falcon](https://falconframework.org/) - ベアメタルのPythonウェブAPIフレームワーク。非常に高速なアプリバックエンドやマイクロサービスの構築に適しています。
- [FastAPI](https://fastapi.tiangolo.com/) - Python 3.6以降をベースに、標準Python型ヒントを使用した現代的で高速（高性能）なウェブフレームワーク。
- [Flask](http://flask.pocoo.org/) - WerkzeugとJinja 2に基づくマイクロサービス用のPythonフレームワーク。
- [Nameko](https://github.com/onefinestay/nameko) - マイクロサービスを構築するためのPythonフレームワーク。
- [Sanic](https://github.com/sanic-org/sanic) - Sanicは、Python 3.5以降向けのFlaskに似たウェブサーバーで、高速性を実現するために設計されています。
- [Tornado](http://www.tornadoweb.org/) - ウェブフレームワークおよび非同期ネットワークライブラリ。
- [Twisted](https://twisted.org/) - イベント駆動型ネットワークプログラミングエンジン。
- [Web.py](https://github.com/webpy/webpy/) - Python用のミニマリズムウェブフレームドーム。

### Ruby <a id="ruby"></a>

- [Grape](https://github.com/ruby-grape/grape) - REST風APIを作成するための意見を反映したフレームワーク。
- [Hanami](https://github.com/hanami) - Ruby用の現代的なウェブフレームワーク。
- [Praxis](https://github.com/rightscale/praxis) - APIの設計および実装に用いるフレームワーク。
- [Scorched](https://github.com/wardrop/Scorched) - Ruby用の軽量ウェブフレームワーク。
- [Sinatra](http://www.sinatrarb.com/) - Sinatraは、Rubyでウェブアプリケーションを最小限の労力で迅速に作成するためのDSL。

### Rust <a id="rust"></a>

- [Are we web yet?](https://www.arewewebyet.org/) :star: - Rustにおけるウェブプログラミングの現在の状態の要約。
- [Actix](https://actix.rs/) - Rustをベースにした強力で実用的かつ極めて高速なウェブフレームワーク。
- [Tarpc](https://github.com/google/tarpc) - Rust向けのRPCフレームワークで、使いやすさを重視。
- [Tokio](https://tokio.rs) - ネットワークアプリケーションの開発に用いる非同期ランタイム。
- [Tower](https://github.com/tower-rs/tower) - 堅牢なネットワーキングクライアントおよびサーバーを構築するための、モジュール化・再利用可能なコンポーネントを備えたライブラリ。
- [Wtx](https://github.com/c410-f3r/wtx) - HTTP/2クライアント/サーバーフレームワーク。

## フロントエンド／UI <a id="frontend--ui"></a>

- [Awesome Micro Frontends](https://github.com/ChristianUlbrich/awesome-microfrontends) -0000 - ミクロフロントエンドに関するリソースを厳選したリスト。 :star:
- [Electrode](https://github.com/electrode-io) - React/Node.jsアプリケーション向けのユニバーサルプラットフォーム。
- [Micro Frontends](https://micro-frontends.org) - フロントエンド開発におけるマイクロサービスの概念を拡張。
- [MiniApp White Paper](https://w3c.github.io/miniapp/white-paper/) - ミニアプリ標準化に関する白書。

## 機能 <a id="capabilities"></a>

### APIゲートウェイ／エッジサービス <a id="api-gateways--edge-services"></a>

> 現時点では[データプレーンとコントロールプレーン](https://blog.envoyproxy.io/service-mesh-data-plane-vs-control-plane-2774e720f7fc)のコンポーネントを分類していません。

- [Ambassador (c)](https://www.getambassador.io) - Envoyを基盤としたKubernetes向けのマイクロサービスAPIゲートウェイ。
- [APIcast](https://github.com/3scale/APIcast) - APIcastはNGINX上に構築されたAPIゲートウェイであり、Red Hat 3scale APIマネジメントプラットフォームの一部である。
- [Bunker Web](https://github.com/bunkerity/bunkerweb) - Webアプリケーションホスティングおよびリバースプロキシがデフォルトで安全。
- [Caddy](https://caddyserver.com/) - 拡張可能なHTTP/2ウェブサーバーでHTTPSが自動的に有効。
- [Camel](http://camel.apache.org/) - ルーティングおよびメディエーションルールを、JavaベースのフラットAPI、SpringまたはBlueprint XML構成ファイル、Scala DSLなど、さまざまなドメイン特定言語で定義できるようにする。
- [Envoy](https://github.com/lyft/envoy) - Lyftの開発者たちが開発したオープンソースのエッジおよびサービスプロキシ。
- [HAProxy](https://github.com/haproxy/haproxy) - 信頼性と高性能を備えたTCP/HTTP負荷分散サーバー。
- [Istio](https://istio.io/) - マイクロサービスを接続・管理・セキュリティ化するためのオープンプラットフォーム。
- [Keepalived](http://www.keepalived.org/) - LinuxシステムおよびLinuxベースのインフラに向けた負荷分散および高可用性を提供するシンプルかつ堅牢な機能。
- [Kong](https://github.com/kong/kong) - APIの管理に向けたオープンソース管理層。
- [KrakenD](http://krakend.io/) - オープンソースの超高性能APIゲートウェイ。
- [Kuma](https://kuma.io/) - サービスミッシュとマイクロサービス向けのプラットフォームに依存しないオープンソースコントロールプレーン。
- [Linkerd](https://linkerd.io/) - クラウドネイティブアプリ向けの頑健なサービスメッシュ
- [Neutrino](https://github.com/eBay/Neutrino) - 拡張可能なソフトウェアロードバランサ
- [OpenResty](http://openresty.org/) - Nginxに基づく高速なウェブアプリケーションサーバー
- [Open Service Mesh](https://openservicemesh.io/) - 軽量かつ拡張可能なクラウドネイティブサービスメッシュ
- [Otoroshi](https://www.otoroshi.io/) - 現代的なHTTPリバースプロキシと軽量API管理
- [Pingora](https://github.com/cloudflare/pingora) - 高速で信頼性高く進化可能なネットワークサービスを構築するためのライブラリ
- [Skipper](https://github.com/zalando/skipper) - サービス論理とルーティングを分離するためのHTTPルーター
- [Spring Cloud Gateway](https://cloud.spring.io/spring-cloud-gateway/) - Spring MVCに基づくAPIゲートウェイ。APIへのルーティングをシンプルかつ効果的に提供することを目的としている。
- [Tengine](http://tengine.taobao.org/) - Nginxにいくつかの高度な機能を追加したディストリビューション
- [Træfɪk](http://traefik.io/) - マイクロサービスを簡単にデプロイできる現代的なHTTPリバースプロキシおよびロードバランサ
- [Traffic Server](https://github.com/apache/trafficserver) - クラウドサービス向けの高性能な基本コンポーネント
- [Tyk](https://tyk.io/) - オープンソースで高速かつスケーラブルなAPIゲートウェイ、ポータルおよびAPI管理プラットフォーム
- [Vulcand](https://github.com/vulcand/vulcand) - Etcdに基づくプログラムによるロードバランサ
- [Zuul](https://github.com/Netflix/zuul) - エッジサービスで、動的ルーティング、監視、耐性、セキュリティなどを提供

### 構成とサービス発見 <a id="configuration--discovery"></a>

- [Central Dogma](https://line.github.io/centraldogma/) - Git、ZooKeeperおよびHTTP/2に基づくオープンソースの高可用性かつバージョン管理されたサービス設定リポジトリ
- [Consul](https://www.consul.io/) - サービス発見と設定を簡単に実現。分散型、高可用性、データセンター認識対応。
- [Etcd](https://github.com/coreos/etcd) - 共有設定およびサービス発見用の高可用性キーバリューストア
- [Eureka](https://github.com/Netflix/eureka/wiki/Eureka-at-a-glance) - AWSクラウドで主に使用されるRESTベースのサービス。中間サーバーのロードバランシングおよびフェイルオーバーのためのサービスの位置を特定する。
- [Microconfig](https://microconfig.io) - マイクロサービスの設定管理を現代的かつシンプルに実現。
- [Nacos](https://github.com/alibaba/nacos) - 使いやすい動的サービス発見、設定およびサービス管理プラット度
- [SkyDNS](https://github.com/skynetservices/skydns) - etcdに基づいたサービスの発表および発見を実現する分散サービス。利用するDNSクエリにより、利用可能なサービスを発見する。
- [Spring Cloud Config](http://cloud.spring.io/spring-cloud-config/) - 分散システムにおける外部化された設定のサーバーおよびクライアント側のサポートを提供する。
- [ZooKeeper](https://zookeeper.apache.org/) - 高信頼性の分散協調を実現するオープンソースサーバー。

### ワークフローオーケストレーション <a id="workflow-orchestration"></a>

- [AWS Step Functions (c)](https://aws.amazon.com/step-functions/) - 分散アプリケーションおよびマイクロサービスのコンポーネントを視覚的なワークフローで調整する。
- [Cadence](https://cadenceworkflow.io/) - 障害に無関心な状態保持コードプラットフォーム。
- [Conductor](https://github.com/Netflix/conductor) - マイクロサービスのオーケストレーションエンジン。
- [Inngest](https://github.com/inngest/inngest) - 信頼性の高いバックグラウンド論理（バックグラウンドジョブから複雑なワークフローまで）を提供するデューラブルな関数。
- [Kestra](https://github.com/kestra-io/kestra) - イベント駆動、言語に依存しないオープンソースマイクロサービスのオーケストレーションおよびスケジューリングプラットフォーム。
- [Temporal](https://github.com/temporalio/temporal) - どんなスケールでもミッションクリティカルなコードを実行できるオープンソースマイクロサービスオーケストレーションプラットフォーム。
- [Zeebe](https://camunda.com/platform/zeebe/) - マイクロサービス間のビジネスプロセスを定義・オーケストレーション・監視する。

### 弾力性 <a id="elasticity"></a>

- [Hazelcast](http://hazelcast.org/) - オープンソースのメモリ内データグリッド。サーバー、クラスタ、地理的領域にデータと計算を分散させ、非常に大きなデータセットや高いデータインジェスト速度を管理できる。成熟した技術。
- [Helix](http://helix.apache.org/) - ノードのクラスタにホストされたパーティション化、レプリケーション、分散リソースの自動管理を行う汎用クラスタ管理フレームワーク。
- [Ignite](http://ignite.apache.org/) - 高パフォーマンスで統合された、分散型のメモリプラットフォーム。リアルタイムで大規模データセットの計算および取引を行う。従来のディスクベースまたはフラッシュ技術と比べて、何十倍もの速度で実行可能。
- [Libp2p](https://libp2p.io/) - ペア・ト・ペアネットワークアプリケーションの構築に用いるフレームワークおよびプロトコルのセット。
- [Mesos](https://mesos.apache.org/) - CPU、メモリ、ストレージおよびその他のコンピュートリソースをマシン（物理的または仮想的）から抽象化し、障害対応かつエラスティックな分散システムの構築と実行を容易に可能にする。
- [Nomad](https://www.nomadproject.io/) - データセンターを意識した、分散型かつ高可用性のスケジューラ。
- [Redisson](https://github.com/mrniko/redisson) - Redisサーバー上に構築された分散型およびスケーラブルなJavaデータ構造。
- [Serf](https://www.serf.io/) - クラスタメンバーの分散解決、障害検知およびオーケストレーションを実現する分散型ソリューション。
- [Valkey](https://github.com/valkey-io/valkey) - 元々オープンソースであったRedisプロジェクトの開発を再開するための新しいプロジェクト。
- [Zenoh](https://zenoh.io/) - データの移動、データの静的状態、計算を統合するプブ／サブ／クエリプロトコル。従来のプブ／サブと、地理分散型ストレージ、クエリ、計算を効率的に統合する。

### ジョブスケジューラー／ワークロード自動化 <a id="job-schedulers--workload-automation"></a>

- [Celery](https://github.com/celery/celery) - 分散メッセージ伝達に基づく非同期タスクキュー/ジョブキュー。リアルタイム運用に特化しており、スケジューリングをサポート。
- [Dkron](http://dkron.io/) - 分散型かつ障害に強いジョブスケジューリングシステム。
- [Faktory](https://github.com/contribsys/faktory) - 言語に依存しない永続的なバックグラウンドジョブサーバー。
- [Rundeck (c)](http://rundeck.org/) - ジョブスケジューラとランブック自動化。既存のスクリプトやツールへのセルフサービスアクセスを可能にする。
- [Schedulix](https://github.com/schedulix/schedulix) - オープンソースのエンタープライズジョブスケジューリングシステム。高度なシステム環境におけるITプロセスのプロフェッショナルな自動化に革新的な基準を設定。

### ログ <a id="logging"></a>

- [Fluentd](http://www.fluentd.org/) - 統合ログレイヤー向けのオープンソースデータ収集ツール。
- [Graylog](https://www.graylog.org/) - 完全に統合されたオープンソースログ管理プラットフォーム。
- [Kibana](https://www.elastic.co/products/kibana) - 柔軟な分析および可視化プラットフォーム。
- [LogDNA (c)](https://logdna.com/) - 中央集約型ログ管理ソフトウェア。あらゆるプラットフォームから、あらゆる量のログをリアルタイムで収集、集中、分析できる。
- [Logstash](https://www.elastic.co/logstash) - イベントおよびログの管理ツール。
- [Loki](https://github.com/grafana/loki) - プロメテウスに似た、ログ向けのツール。

### メッセージング <a id="messaging"></a>

- [ØMQ](http://zeromq.org/) - ブローカーなしの知能あるトランスポート層。
- [ActiveMQ](http://activemq.apache.org/) - 強力なオープンソースメッセージングおよび統合パターンサーバー。
- [Aeron](https://github.com/real-logic/Aeron) - 効率的かつ信頼性の高いUDPユニキャスト、UDPマルチキャスト、およびIPCメッセージ伝送。
- [Beanstalk](https://beanstalkd.github.io/) - シンプルで高速なワークキュー。
- [Bull](https://github.com/OptimalBits/bull) - ノード向けの高速かつ信頼性の高いRedisベースのキュー。
- [Crossbar](https://github.com/crossbario/crossbar) - 分散型およびマイクロサービスアプリケーション向けのオープンソースネットワーキングプラットフォーム。WAMP（Web Application Messaging Protocol）を実装。
- [Kafka](http://kafka.apache.org/) - パブリッシュ・サブスクリプションメッセージングを分散コミットログとして再考。
- [Malamute](https://github.com/zeromq/malamute) - ゼロ・エム・エー企業向けメッセージブローカー。
- [Mosquitto](http://mosquitto.org/) - MQTTプロトコルを実装するオープンソースメッセージブローカー。
- [NATS](https://nats.io/) - オープンソース、高性能、軽量のクラウドメッセージングシステム
- [NSQ](http://nsq.io/) - リアルタイムの分散メッセージングプラットフォーム
- [Pulsar](https://pulsar.apache.org/) - 分散型パブリッシュ・サブスクリプションメッセージングシステム
- [RabbitMQ](https://www.rabbitmq.com/) - Erlangベースのオープンソースメッセージブローカー。シンプルに動作する。
- [Redpanda](https://github.com/redpanda-data/redpanda/) - 開発者向けストリーミングデータプラットフォーム：Kafka APIと互換、10倍速、ZooKeeperおよびJVMなし
- [RocketMQ](https://github.com/apache/incubator-rocketmq) - アリババの大量メッセージングビジネスから生まれた、低遅延、信頼性、スケーラブルで使いやすいメッセージ指向のミドルウェア

### 監視とデバッグ <a id="monitoring--debugging"></a>

- [Beats](https://www.elastic.co/beats/) - ElasticsearchおよびLogstash向けの軽量シャッパー
- [Elastalert](https://github.com/yelp/elastalert) - Elasticsearch向けの簡単で柔軟なアラート機能
- [Ganglia](http://ganglia.info/) - 高性能コンピューティングシステム（クラスタやグリッドなど）向けのスケーラブルな分散モニタリングシステム
- [Grafana](http://grafana.org/) - Graphite、InfluxDBおよびOpenTSDB向けのオープンソース、機能豊富なメトリクスダッシュボードおよびグラフエディタ
- [Graphite](http://graphite.wikidot.com/) - スケーラブルなリアルタイムグラフ表示
- [IOpipe (c)](https://www.iopipe.com/) - Amazon Lambda向けアプリケーションパフォーマンスモニタリング
- [Jaeger](https://www.jaegertracing.io/) - オープンソース、端到端の分散トレースシステム
- [OpenTelemetry](https://opentelemetry.io/) - 高品質で汎用的で移植性の高いテレメトリを提供し、効果的な可観測性を実現
- [Prometheus](http://prometheus.io/) - オープンソースのサービスモニタリングシステムおよび時系列データベース
- [Riemann](http://riemann.io/) - 分散システムの監視
- [Sensu](https://github.com/sensu) - 今日のインフラ向けの監視
- [SkyWalking](https://skywalking.apache.org/) - 分散システム向けアプリケーションパフォーマンスモニタリングツール。特にマイクロサービス、クラウドネイティブおよびコンテナベース（Docker、K8s、Mesos）アーキテクチャに最適化
- [Zabbix](http://www.zabbix.com/) - オープンソースのエンタープライズクラスモニタリングソリューション
- [Zipkin](http://zipkin.io) - 分散トレースシステム

### リアクティビティ <a id="reactivity"></a>

- [Reactor.io](https://github.com/reactor) - JVM上で非ブロッキングアプリケーションを構築するための、リアクティブストリーム仕様に基づく2世代目のリアクティブライブラリ
- [Reactive Kafka](https://github.com/akka/alpakka-kafka) - Apache Kafka用のリアクティブストリームAPI
- [ReactiveX](http://reactivex.io/) - 観測可能なストリームによる非同期プログラミング用API。idiomatic Java、Scala、C#、C++、Clojure、JavaScript、Python、Groovy、JRubyなど、多数の言語で利用可能
- [RSocket](https://rsocket.io/) - リアクティブストリームの意味論を提供するアプリケーションプロトコル

### 耐障害性 <a id="resilience"></a>

- [Awesome Chaos Engineering](https://github.com/dastergon/awesome-chaos-engineering) :star: - 素晴らしい混沌工程リソースを厳選したリスト
- [Raft Consensus](https://raft.github.io/) - 故障耐性とパフォーマンスにおいてPaxosと同等の、理解しやすいコンセンサスアルゴリズム
- [Resilience4j](https://github.com/resilience4j/resilience4j) - Java8および関数型プログラミングに特化した、故障耐性を備えたライブラリ
- [Svix](https://svix.com) - ユーザーにウェブホークを送信するウェブホークサービス。完全なリトライスケジュール、指数関数的なバックオフ、署名検証、イベントタイプをサポート

### セキュリティ <a id="security"></a>

- [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - マイクロサービスアーキテクチャ上でスケーラブルかつ細粒度の認可を構築・テスト・デプロイするための認可管理システム
- [Dex](https://github.com/coreos/dex) - プラグイン接続を備えた意見のある認可/ディレクトリサービス。OpenID Connectプロバイダーおよび第三者OAuth 及デLEGATIONを提供
- [JWT](http://jwt.io/) - JSON Web Tokensは、2つの当事者間で安全に主張を表現するための、オープンな業界標準RFC 7519手法
- [Keycloak](https://github.com/keycloak/keycloak) - フル機能かつ拡張可能な認可サービス。OpenID Connectプロバイダーおよび第三者OAuth 2.0デLEGATIONを提供
- [OAuth](http://oauth.net/2/) - ウェブアプリケーション、デスクトップアプリケーション、モバイル端末、リビングルームデバイス向けに特定の認可フローを提供。多数の実装がある
- [OpenID Connect](https://openid.net/certified-open-id-developer-tools/) - 現在のOpenID仕様および関連仕様を実装するライブラリ、製品、ツールのリスト
- [Open Ziti](https://openziti.io/) - ゼロトラストセキュリティとオーバーレイネットワークを純粋なオープンソースソフトウェアとして提供
- [ORY](https://www.ory.sh/) - オープンソースのアイデンティティインフラストラクチャおよびサービス
- [OWASP Agent Memory Guard](https://github.com/OWASP/www-project-agent-memory-guard) — AIアグエントのメモリポイズニング（OWASP ASI06）に対するランタイム防御層。メモリエントリの改ざん、メモリパスにおけるプロンプトインジェクション、秘密情報の漏洩を検出。YAMLポリシー、マイクロ秒遅延、外部依存なし。
- [SCIM](https://simplecloud.info/) - クロスドメインアイデンティティ管理システム
- [Vault](https://www.vaultproject.io/) - 現代コンピューティングにおけるトークン、パスワード、証明書、APIキーなどの秘密情報をセキュリティ確保、保存、厳密にアクセス制御。

### シリアライズ <a id="serialization"></a>

- [Avro](https://avro.apache.org/) - Apacheによるデータシリアライズーションシステム。コンパクトで高速なバイナリデータ形式で豊かなデータ構造を提供。
- [Bond](https://github.com/microsoft/bond/) - スキーマ化されたデータを扱うためのクロスプラットフォームフレームワーク。マイクロソフトの大规模サービスで広く使用されている。
- [BooPickle](https://github.com/ochrons/boopickle) - 効率的なネットワーク通信用のバイナリシリアライゼーションライブラリ。ScalaおよびScala.js用。
- [Cap’n Proto](https://capnproto.org/) - 驚くほど高速なデータ交換フォーマットおよびベースドなRPCシステム。
- [CBOR](http://cbor.io/) - 多くの言語でCBOR標準（RFC 7009）の実装。
- [Cereal](http://uscilab.github.io/cereal/) - C++11用のシリアライゼーションライブラリ。
- [Cheshire](https://github.com/dakrone/cheshire) - Clojure用のJSONおよびJSON SMILEのエンコード／デコード。
- [Etch](http://etch.apache.org/) - クロスプラットフォーム、言語およびトランスポートに依存しないネットワークサービスの構築および消費用フレームワーク。
- [Fastjson](https://github.com/alibaba/fastjson) - 高速JSONプロセッサ。
- [Ffjson](https://github.com/pquerna/ffjson) - Go用の高速JSONシリアライゼーション。
- [FST](https://github.com/RuedigerMoeller/fast-serialization) - Java用の高速シリアライゼーションのドロップイン置き換え。
- [Jackson](https://github.com/FasterXML/jackson) - JSONデータフォーマットを処理するためのマルチ用途Javaライブラリ。
- [Jackson Afterburner](https://github.com/FasterXML/jackson-module-afterburner) - バイトコード生成を使用してデータバインディングをさらに高速化するジャッソンモジュール（シリアライゼーションおよびデシリアライゼーションのパフォーマンス向上30～40％）。
- [Kryo](https://github.com/EsotericSoftware/kryo) - Javaのシリアライゼーションおよびクローン：高速、効率的、自動。
- [Lite³](https://github.com/fastserial/lite3) - JSON互換のゼロコピーシリアライゼーションフォーマット。
- [MessagePack](http://msgpack.org/) - 効率的なバイナリシリアライゼーションフォーマット。
- [Protostuff](https://github.com/protostuff/protostuff) - スキーマ進化およびバリデーションを内蔵したシリアライゼーションライブラリ。
- [SBinary](https://github.com/harrah/sbinary) - Scala型のバイナリフォーマットを記述するためのライブラリ。
- [Thrift](http://thrift.apache.org/) - Apache Thriftソフトウェアフレームワーク。スケーラブルなクロス言語サービス開発用。
- [yyjson](https://github.com/ibireme/yyjson) - Cで最も高速なJSONライブラリ。

### ストレージ <a id="storage"></a>

- [Alluxio](https://github.com/Alluxio/alluxio) - 仮想分散ストレージシステム。
- [Apache Cassandra](http://cassandra.apache.org) - 列指向型であり、単一の障害点をもたない高可用性を提供する
- [Aerospike (c)](http://www.aerospike.com/) - スケールで高速に実現する高性能NoSQLデータベース
- [ArangoDB](https://www.arangodb.com/) - ドキュメント、グラフ、キー・バリューの柔軟なデータモデルを備えた分散型無料オープンソースデータベース
- [AtlasDB](https://github.com/palantir/atlasdb) - キー・バリューストア上のトランザクション層
- [Citus](https://github.com/citusdata/citus) - PostgreSQLの拡張として提供される分散型データベース
- [CockroachDB (c)](https://www.cockroachlabs.com/) - Google SpannerをモデルにしたクラウドネイティブSQLデータベース
- [Couchbase](https://github.com/couchbase) - パフォーマンス、スケーラビリティ、簡易な管理を設計した分散型データベース
- [Crate (c)](https://crate.io/) - スケーラブルなSQLデータベースにNoSQLの利点を備えたもの
- [Datomic](http://www.datomic.com/) - 完全にトランザクション対応、クラウド対応可能な分散型データベース
- [Druid](http://druid.io/) - 高速な列指向型分散データストア
- [Elasticsearch](https://www.elastic.co/elasticsearch) - オープンソースの分散型、スケーラブルかつ高可用性の検索サーバー
- [Geode](http://geode.incubator.apache.org/) - スケーラブルなアプリケーション向けのオープンソース、分散型、メモリ内データベース
- [Infinispan](http://infinispan.org/) - キャッシュに使用される高並列性のキー・バリューデータストア
- [InfluxDB](https://github.com/influxdata/influxdb) - メトリクス、イベント、リアルタイム分析用のスケーラブルなデータストア
- [OpenTSDB](http://opentsdb.net) - Apache HBase上に構築されたスケーラブルで分散型のタイムシリーズデータベース
- [Pilosa](https://github.com/pilosa/pilosa) - 複数の巨大データセット間のクエリを劇的に高速化するオープンソース、スケーラブルなビットマップインデックス
- [RethinkDB](http://rethinkdb.com/) - リアルタイムアプリケーションの構築を容易にするオープンソ及、スケーラブルなデータベース
- [Secure Scuttlebutt](https://github.com/ssbc/docs) - メッセージフィード向けのP2Pデータベース
- [TiKV](https://github.com/tikv) - トランザクション対応の分散型キー・バリューデータベース
- [Trino](https://trino.io/) - ビッグデータ分析に最適な高速分散型SQLクエリエンジンで、データ宇宙を探索可能

### テスト <a id="testing"></a>

- [Goreplay](https://github.com/buger/goreplay) - ライブHTTPトラフィックをテスト環境にキャプチャ・リプレイするツール
- [Keploy](https://keploy.io) - 実際のトラフィックをキャプチャし、テストケースやスタブに変換することで、マイクロサービスの信頼性の高いテストを可能にするAPIテストおよびモック用のオープンソースツール
- [Mitmproxy](https://mitmproxy.org/) - トラフィックの中断・検査・変更・再実行を可能にするインタラクティブコンソールプログラム
- [Mountebank](http://www.mbtest.org/) - ワイヤー上で動作するマルチプロトコルなテストダブルを提供するクロスプラットフォームツール
- [Pact](https://docs.pact.io) - HTTP APIおよび非HTTPのアシンクメッセージシステム向けのコントラクトテストフレームワーク
- [RestQA](https://github.com/restqa/restqa) - ローカルでマイクロサービスのモック、ユニットテスト、パフォーマンステストを管理するツールで、開発者にとって最高クラスの体験を提供
- [Specmatic](https://specmatic.io) - API仕様（OpenAPI、AsyncAPI、GraphQL、gRPCなど）を実行可能なコントラクトに変換し、コードを書かずに自動テスト、サービス仮想化、バックワード互換性の検証を行う
- [Spring Cloud Contract](https://cloud.spring.io/spring-cloud-contract/) - ソフトウェアアーキテクチャレベルでのTDD（テスト駆動開発）
- [VCR](https://github.com/vcr/vcr) - テストスイートのHTTP相互作用を記録し、将来のテスト実行時にそれを再実行することで、高速かつ決定論的かつ正確なテストを実現。他の言語での実装のポートリストを確認してください。
- [Wilma](https://github.com/epam/Wilma) - HTTP/HTTPSサービススタブと透明プロキシの統合ソリューション
- [WireMock](http://wiremock.org/) - 一般的なモックツールとは異なり、実際のHTTPサーバーを生成して、テスト中のコードが実際にウェブサービスと接続するように動作するウェブサービスのモック・スタブ用のフレキシブルなライブラリ
- [Hoverfly](https://github.com/spectolabs/hoverfly) - 開発者およびテスト担当者向けの軽量なサービス仮想化／APIシミュレーションツール

## 継続的インテグレーションとデリバリー <a id="continuous-integration--delivery"></a>

- [Awesome CI/CD DevOps](https://github.com/ciandcd/awesome-ciandcd) - CI/CDおよびDevOps向けに素晴らしいツールを厳選したリスト :star:

## Web APIモデリングと文書化 <a id="web-api-modeling--documentation"></a>

### 非同期 <a id="async"></a>
- [AsyncAPI](https://github.com/asyncapi/spec) - AsyncAPI仕様、非同期APIを定義する業界標準

### GraphQL <a id="graphql"></a>

- [GraphQL](http://graphql.org/) - クライアントアプリケーションの構築を目的としたクエリ言語。直感的かつ柔軟な構文とデータ要件および相互作用を記述するためのシステムを提供。

### JSON <a id="json"></a>

- [JSON:API](https://jsonapi.org/) - クライアントがリソースの取得または変更を要求し、サーバーがそれらの要求に応答する方法を定義する仕様。

### REST <a id="rest"></a>

- [API Blueprint](https://apiblueprint.org/) - APIライフサイクル全体にわたるツール。他の人とAPIについて話すために使用したり、自動的にドキュメントを生成したり、テストスイートを生成したり、あるいはコードを生成したりできます。
- [OpenAPI](https://www.openapis.org/) - OpenAPI仕様（OAS）は、APIライフサイクルの各段階で情報を伝達するための一貫した手段を提供。
- [RAML](http://raml.org/) - RESTful APIモデリング言語、実用的なRESTful APIを簡潔に記述するためのシンプルな方法。
- [ReDoc](https://github.com/Redocly/redoc) - OpenAPI/Swagger生成APIドキュメント
- [Scalar](https://github.com/scalar/scalar) - オープンソースAPIプラットフォーム：美しいAPIリファレンスと優れたOpenAPI/Swaggerサポート。
- [Slate](https://github.com/slatedocs/slate) - あなたのAPI向けに美しい静的ドキュメンテーション。
- [Spring REST Docs](http://projects.spring.io/spring-restdocs/) - Spring MVC Testで生成された自動スニペットと手書きドキュメントを組み合わせることで、RESTfulサービスをドキュメント化。
- [Swagger](https://swagger.io/) - あなたのRESTful APIをシンプルでありながら強力な形で表現。

## 標準／推奨事項 <a id="standards--recommendations"></a>

### World Wide Web <a id="world-wide-web"></a>

- [W3C.REC-Webarch](http://www.w3.org/TR/webarch/) - ウェブのアーキテクチャ、第1巻。
- [RFC3986](https://tools.ietf.org/html/rfc3986) - 一貫したリソース識別子（URI）：一般形式。
- [RFC6570](https://tools.ietf.org/html/rfc6570) - URIテンプレート。
- [RFC7320](https://tools.ietf.org/html/rfc7320) - URI設計と所有権。

### 自己主権と分散化 <a id="self-sovereignty--decentralisation"></a>

- [DID](https://www.w3.org/TR/did-core/) - 分散識別子（DID）のW3C規格：検証可能で分散型のデジタルアイデンティティを可能にする新しい識別子タイプ。
- [DIDComm](https://github.com/decentralized-identity/didcomm-messaging) - DIDの分散設計に基づいたプライベートな通信手法。
- [DIDComm Protocols](https://didcomm.org/) - DIDCommに構築されたプロトコルの登録、どんなトランスポートでも信頼性の高い、自己主権な相互作用を可能にする。
- [IDSA](https://internationaldataspaces.org/) - 国際データスペース協会（IDSA）は、国際データスペース（IDS）を用いて、安全で主権あるデータ共有システムを構築し、すべての参加者が自データの完全な価値を実現できる未来のグローバルデジタル経済を創出する使命を担っている。

### HTTP/1.1 <a id="http11"></a>

- [RFC7230](https://tools.ietf.org/html/rfc7230) - メッセージ構文とルーティング。
- [RFC7231](https://tools.ietf.org/html/rfc7231) - 意味とコンテンツ。
- [RFC7232](https://tools.ietf.org/html/rfc7232) - 条件付きリクエスト。
- [RFC7233](https://tools.ietf.org/html/rfc7233) - 範囲リクエスト。
- [RFC7234](https://tools.ietf.org/html/rfc7234) - キャッシュ。
- [RFC7235](https://tools.ietf.org/html/rfc7235) - 認証。
- [RFC7807](https://tools.ietf.org/html/rfc7807) - HTTP API向けの問題詳細。

### HTTP/2 <a id="http2"></a>

- [RFC7540](https://tools.ietf.org/html/rfc7540) - ハイパーテキスト転送プロトコルバージョン2。

### QUIC <a id="quic"></a>

- [QUIC-WG](https://quicwg.org/) - IETFが設置した、インターネットの次のトランスポートプロトコルを提供する作業部会
- [QUIC-Transport](https://tools.ietf.org/html/draft-ietf-quic-transport-27) - UDPベースのマルチプレックスかつ安全なトランスポートプロトコル

### RPC <a id="rpc"></a>

- [JSON-RPC 2.0](http://www.jsonrpc.org/specification) - ステートレスかつ軽量のリモートプロシージャ呼び出し（RPC）プロトコル
- [Open RPC](https://open-rpc.org/) - OpenRPC規格はJSON-RPC 2.0 APIに対して、プログラミング言語に依存しない標準インターフェース記述を定義する

### メッセージング <a id="messaging-1"></a>

- [AMQP](https://www.amqp.org/) - 高度なメッセージキューングプロトコル
- [MQTT](https://mqtt.org/) - MQテレメトリーテレムト
- [STOMP](https://stomp.github.io/) - シンプルテキスト指向メッセージプロトコル

### セキュリティ <a id="security-1"></a>

- [GNAP](https://datatracker.ietf.org/doc/html/draft-ietf-gnap-core-protocol) - 認可および承認の交渉プロトコルは、ソフトウェアに認可を委任し、その委任をソフトウェアに伝達するためのメカニズムを定義する。この委任は、APIセットへのアクセスを含む場合もあり、ソフトウェアに直接渡される情報も含む。<sup>DRAFT</sup>
- [OIDCONN](http://openid.net/connect/) - OpenID Connect 1.0は、OAuth 2.0プロトコルの上に構築されたシンプルな認証層であり、クライアントが認証サーバーが実行した認証に基づいて終端ユーザーの識別を検証し、終端ユーザーの基本的なプロファイル情報を相互運用性およびREST風の方法で取得できるようにする
- [PASETO](https://paseto.io/) - Pasetoは、JOSE（JWT、JWE、JWS）のすべての好ましい点を保持しつつ、JOSE規格が抱える多くの設計上の欠陥を一切排除したプロトコルである。<sup>DRAFT</sup>
- [RFC5246](https://tools.ietf.org/html/rfc5246) - トランスポート層セキュリティ（TLS）プロトコルバージョン1.2
- [RFC6066](https://tools.ietf.org/html/rfc6066) - TLS拡張
- [RFC6347](https://tools.ietf.org/html/rfc6347) - データグラムトランスポート層セキュリティバージョン1.2
- [RFC6749](https://tools.ietf.org/html/rfc6749) - OAuth 2.0の認可フレームワーク
- [RFC6962](https://tools.ietf.org/html/rfc6962) - 証明書の透明性
- [RFC7515](https://tools.ietf.org/html/rfc7515) - JSONウェブ署名（JWS）は、JSONベースのデータ構造を使用してデジタル署名またはメッセージ認証コード（MAC）でセキュリティを確保したコンテンツを表す
- [RFC7519](https://tools.ietf.org/html/rfc7519) - JSONウェブトークン（JWT）は、二つの当事者間で移動する主張をコンパクトかつURL安全に表現する手段である
- [RFC7642](https://tools.ietf.org/html/rfc7642) - SCIM：定義、概要、概念、および要件
- [RFC7643](https://tools.ietf.org/html/rfc7643) - SCIM：コアスキーマは、ユーザーおよびグループを表すためのプラットフォーム非依存スキーマおよび拡張モデルを提供する
- [RFC7644](https://tools.ietf.org/html/rfc7644) - SCIM：プロトコルは、ウェブ上での識別データのプロビジョニングおよび管理を行うアプリケーションレベルのRESTプロトコルである

### サービス発見 <a id="service-discovery"></a>
- [DNS-SD](https://datatracker.ietf.org/doc/html/rfc6763) - サービスのnamed instanceの一覧をクライアントが標準DNSクエリを使って発見できる仕組み
- [RFC2782](https://datatracker.ietf.org/doc/html/rfc2782) - サービスの場所を指定するDNS RR（DNS SRV）

### データ形式 <a id="data-formats"></a>

- [RFC4627](https://tools.ietf.org/html/rfc4627) - JavaScriptオブジェクト記法 (JSON)。
- [RFC7049](https://tools.ietf.org/html/rfc7049) - コンパクトなバイナリオブジェクト表現 (CBOR)。
- [BSON](http://bsonspec.org/) - バイナリJSON (BSON)
- [JSON-LD](http://json-ld.org/) - リンクデータ用のJSON。
- [SBE](https://github.com/FIXTradingCommunity/fix-simple-binary-encoding) - シンプルなバイナリエンコーディング（SBE）
- [MSGPACK](https://github.com/msgpack/msgpack/blob/master/spec.md) - メッセージパッケージ仕様

### 語彙 <a id="vocabularies"></a>

- [JSON Schema](http://json-schema.org/) - JSONドキュメントに注釈を付加および検証できる語彙。
- [Schema.org](http://schema.org/) - 協働し、コミュニティ活動を行うもので、インターネット上の構造化データ、ウェブページ、メールメッセージ、そしてそれ以上の場面において、スキーマの作成・維持・推進を使命としている。

### Unicode <a id="unicode"></a>

- [UNIV8](http://www.unicode.org/versions/Unicode8.0.0/) - ユニコードコンソーシアム．ユニコード標準 第8版、（カリフォルニア州マウンテンビュー：ユニコードコンソーシアム、2015年．ISBN 978-1-936213-10-8）．
- [RFC3629](https://tools.ietf.org/html/rfc3629) - UTF-8はISO 10646の変換形式です。

## 組織設計／チーム力学 <a id="organization-design--team-dynamics"></a>

- [How Do Committees Invent?](http://www.melconway.com/Home/pdf/committees.pdf) :small_orange_diamond:<sup>PDF</sup> - メルヴィン・E・コンウェイ、Datamation誌1968年。コンウェイの法則を定義した元の記事。
- [Service per Team](https://microservices.io/patterns/decomposition/service-per-team.html) - 各チームは1つまたは複数のビジネス機能（例：ビジネス能力）を担当する。チームは1つまたは複数のモジュールを含むコードベースを所有する。そのコードベースの規模は、チームの認知能力を超えないように設定される。チームはそのコードを1つまたは複数のサービスとしてデプロイする。チームは、明確な必要性がある場合を除き、正確に1つのサービスを持つべきである。
- [Start with Team Cognitive Load - Team Topologies](https://www.youtube.com/watch?v=haejb5rzKsM) :small_red_triangle:<sup>YT</sup> - DOES19 ロンドン。『モノリスとマイクロサービス』の議論は、技術的側面に焦点を当てがちで、戦略やチームのダイナミクスを無視している。その代わりに、スマートな思考を持つ組織は、現代のソフトウェア開発においてチームの認知負荷を指導原則として始めている。この講演では、実際の事例を用いて、その方法と理由を説明します。

## 企業・業界別 <a id="enterprise--verticals"></a>

- [Commercetools](https://commercetools.com/) - ヘッドレスコンマースプラットフォーム
- [Equinox](https://www.infosysequinox.com/) - インフォシス・イクシノは、あらゆるチャネルとタッチポイントにおいて、豊かなハイパーアイデンティフィケーションを実現する人間中心のコンバージョンおよびマーケティングプラットフォームです。
- [Flamingo](https://www.flamingo.me/) - フレームワークで柔軟かつ現代的な電子商取引アプリケーションを構築します。
- [Medusa](https://medusajs.com/) - ヘッドレスオープンソースのコンバージョンプラットフォーム

## 理論 <a id="theory"></a>

### 記事と論文 <a id="articles--papers"></a>

- [Autonomy, Hyperconnectivity, and Residual Causality](https://www.mdpi.com/2409-9287/6/4/81) - 複雑性科学理論を用いた、適応型ハイパーエピソードシステムの設計に対する哲学的な導入。
- [Awesome Scalability](https://github.com/binhnguyennus/awesome-scalability) :star: - スケーラブルで信頼性・パフォーマンスの高い大規模システムのパターンを説明するための、更新され組織された読み物リスト。概念は、著名なエンジニアや信頼できる参考文献の記事で解説されている。ケーススタディは、数百万から数十億ユーザーをサービスしている実証済みのシステムから取られている。
- [AKF Scale Cube](http://akfpartners.com/techblog/2008/05/08/splitting-applications-or-services-for-scale/) - サービスをスケーリングするための次元を示すモデル。
- [CALM](http://db.cs.berkeley.edu/papers/cidr11-bloom.pdf) :small_orange_diamond:<sup>PDF</sup> - 一貫性として論理的単調性。
- [Canary Release](http://martinfowler.com/bliki/CanaryRelease.html) - 新しいソフトウェアバージョンをプロダクションに導入するリスクを減らすための技術。その変更を全体のインフラに徐々に展開し、小さなユーザーのサブセットにまず適用してから、全ユーザーに提供する方法。
- [CAP Theorem](http://blog.thislongrun.com/2015/03/the-cap-theorem-series.html) - 分散型コンピュータシステムが、以下3つの保証を同時に提供することは不可能である、という主張。一貫性、可用性、パーティション耐性。
- [Formal Foundations of Serverless Computing](https://arxiv.org/pdf/1902.05870.pdf) :small_orange_diamond:<sup>PDF</sup> - サーバレスコンピューティングの抽象化は、プログラマがコードを書くことや論理的に考えるのを難しくする、いくつかの低レベルの運用詳細を暴露している。この論文は、λ、サーバレスコンピューティングの本質の操作意味論を提示することで、この問題を明らかにする。
- [Microservice Architecture](http://martinfowler.com/articles/microservices.html) - ソフトウェアアプリケーションを、独立してデプロイ可能なサービスのセットとして設計する特定の方法。
- [Microservices - From Design to Deployment](https://www.f5.com/content/dam/f5/corp/global/pdf/ebooks/Microservices_Designing_Deploying.pdf) :small_orange_diamond:<sup>PDF</sup> - F5のマイクロサービスに関する7つのパートシリーズ。
- [Microservices – Please, don’t](https://riak.com/posts/technical/microservices-please-dont/) - マイクロサービスアプローチに関するいくつかの問題についての重要なアドバイス。
- [Microservices Trade-Offs](http://martinfowler.com/articles/microservice-trade-offs.html) - マイクロサービスアーキテクチャスタイルのコストとメリットを検討するためのガイド。
- [Reactive Manifesto](http://www.reactivemanifesto.org/) - 反応型システムの定義。
- [Reactive Streams](http://www.reactive-streams.org/) - 非ブロッキングバックプレスを含む、アシンクロンなストリーム処理の標準を提供するための取り組み。
- [ROCAS](http://resources.1060research.com/docs/2015/Resource-Oriented-Computing-Adaptive-Systems-ROCAS-1.2.pdf) :small_orange_diamond:<sup>PDF</sup> - 非常に適応可能なシステム向けのリソース指向コンピューティング。
- [SECO](http://ceur-ws.org/Vol-746/IWSECO2011-6-DengYu.pdf) :small_orange_diamond:<sup>PDF</sup> - ソフトウェアエコシステムの理解：戦略的モデリングアプローチ。
- [Testing Strategies in a Microservice Architecture](http://martinfowler.com/articles/microservice-testing/) - 複数の独立してデプロイ可能なコンポーネントによる追加テストの複雑性を管理するためのアプローチ。
- [Your Server as a Function](http://monkey.org/~marius/funsrv.pdf) :small_orange_diamond:<sup>PDF</sup> - 安全でモジュール化され、効率的なサーバソフトウェアを構築するための強力なプログラミングモデルを提供する3つの抽象を説明。それは、合成可能な未来、サービス、フィルタの組み合わせである。

### サイトと組織 <a id="sites--organizations"></a>

- [Cloud Native Computing Foundation](https://www.cncf.io/) - クラウドネイティブコンピューティングファウンデーションは、コンテナをマイクロサービスアーキテクチャの一部としてオーケストレーションする、高品質のプロジェクトの集合体を構成し、持続可能なエコシステムを構築し、その周辺のコミュニティを育成している。
- [CNCF Cloud Native Interactive Landscape](https://landscape.cncf.io/) - クラウドネイティブ技術のインタラクティブな地図。
- [Microservices Resource Guide](http://martinfowler.com/microservices/) - マーチン・フォーワーが選んだ、マイクロサービスアーキテクチャスタイルについて学ぶことができる記事、動画、書籍、ポッドキャスト。
- [Microservice Patterns](http://microservices.io/) - マイクロサービスアーキテクチャのパターンとベストプラクティス。
- [Microservice Antipatterns and Pitfalls](https://www.oreilly.com/ideas/microservices-antipatterns-and-pitfalls) - マイクロサービスでよく見られる反パターンと険悪なポイント。

## ライセンス <a id="license"></a>

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

## コントリビューション <a id="contributing"></a>

[コントリビューションガイドライン](https://github.com/mfornos/awesome-microservices/blob/master/CONTRIBUTING.md)を確認してから提案してください。

追加項目は[Issueを作成](https://github.com/mfornos/awesome-microservices/issues)するか、[Pull Requestを作成](https://github.com/mfornos/awesome-microservices/pulls)してください。

:star2: ありがとうございます！
