---
title: "Awesome Integration"
description: "Integrationを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-stn1slv-awesome-integration-readme-md"
---

# Awesome Integration

Integrationを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>
- [プロジェクト](#projects)
  - [AIゲートウェイ](#ai-gateway)
  - [API管理](#api-management)
  - [API設計](#api-design)
  - [API文書](#api-documentation)
  - [APIゲートウェイ](#api-gateway)
  - [APIテスト](#api-testing)
  - [B2B統合](#b2b-integration)
  - [ビジネスルールエンジン](#business-rules-engine)
  - [ビジネスプロセス管理](#business-process-management)
  - [変更データキャプチャ](#change-data-capture)
  - [データ統合](#data-integration)
  - [データマッピング](#data-mapping-solution)
  - [エンタープライズサービスバス](#enterprise-service-bus)
  - [統合フレームワーク](#integration-frameworks)
  - [Integration Platform as a Service](#integration-platform-as-a-service)
  - [Messaging as a Service](#messaging-as-a-service)
  - [マネージドファイル転送](#managed-file-transfer)
  - [マスターデータ管理](#master-data-management)
  - [メッセージブローカー](#message-broker)
  - [ロボティックプロセスオートメーション](#robotic-process-automation)
  - [スキーマレジストリ](#schema-registry)
  - [セルフサービス統合](#self-service-integration)
  - [ストリーム処理](#stream-processing)
  - [Webhook基盤](#webhook-infrastructure)
  - [ワークフローエンジン](#workflow-engine)
- [統合パターン](#integration-patterns)
  - [エンタープライズ統合パターン](#enterprise-integration-patterns)
  - [統合アーキテクチャパターン](#integration-architecture-patterns)
  - [マイクロサービスAPIパターン](#microservice-api-patterns)
  - [SOAパターン](#soa-patterns)
- [資料](#resources)
  - [API仕様](#api-specification)
  - [APIスタイルガイド](#api-style-guides)
  - [記事](#articles)
  - [書籍](#books)
  - [認定資格](#certifications)
  - [コネクター](#connectors)
  - [データ形式](#data-formats)
  - [統合方式](#integration-styles)
  - [市場分析](#market-analysis)
  - [プロトコル](#protocols)
  - [標準API](#standard-apis)
  - [構造と検証](#structure-and-validation)
- [著者について](#about-the-author)

---
## プロジェクト <a id="projects"></a>
### AIゲートウェイ <a id="ai-gateway"></a>
*AIゲートウェイの目的、機能、適用範囲を説明する概要です。*
- [agentgateway (⭐4.2k)](https://github.com/agentgateway/agentgateway) - アグエントAIの接続を可能にするオープンソースデータプレーン。アグエント間（MCP）およびアグエント間（A2A）の通信において、セキュリティ、可視性、および治理を提供する。
- [Bifrost (⭐7.2k)](https://github.com/maximhq/bifrost) - Go言語で構築された高性能AIゲートウェイ。20以上のモデルプロバイダーを1つのOpenAI互換APIで統合し、フェイルオーバー、負荷分散、意味論的キャッシュ、および治理を実現する。
- [Docker MCP Gateway (⭐1.5k)](https://github.com/docker/mcp-gateway) - MCPサーバーを、権限制限付きの隔離コンテナとして実行し、管理されたシークレットを用いてAIクライアントに1つのゲートウェイエンドポイントを通じて公開する。
- [Envoy AI Gateway (⭐1.9k)](https://github.com/envoyproxy/ai-gateway) - Envoy Proxyに基づくオープンソースゲートウェイ。アプリケーションクライアントからのリクエストトラフィックを、GenAIサービスに統一APIアクセスと使用制限を適用して管理する。
- [IBM ContextForge (⭐4.2k)](https://github.com/IBM/mcp-context-forge) - MCP、A2A、RESTサービスを1つのエンドポイントに統合し、治理と可視性を提供するAIゲートウェイ、レジストリ、プロキシ。
- [Kong AI Gateway](https://konghq.com/products/kong-ai-gateway) - Kongゲートウェイに基づくマルチLLMAIゲートウェイ。専用プラグインを通じて意味論的キャッシュ、プロンプトセキュリティ、AI可視性を提供する。
- [LiteLLM (⭐56k)](https://github.com/BerriAI/litellm) - 100以上のモデルプロバイダーをOpenAI互換APIで統一して公開するLLMゲートウェイ。支出トラッキング、フォールバック、レート制限を備える。
- [MCPJungle (⭐1.1k)](https://github.com/mcpjungle/MCPJungle) - 自前でホストするMCPゲートウェイとレジストリ。複数のMCPサーバーを1つのエンドポイントに集中して管理する。
- [Obot (⭐937)](https://github.com/obot-platform/obot) - サーバーホスティング、レジストリ、ゲートウェ連携、チャットクライアントを統合したオープンソースMCPプラットフォーム。アクセス制御とログ審査を提供する。
- [Portkey AI Gateway (⭐12k)](https://github.com/Portkey-AI/gateway) - 250以上のLLMにルーティングする高速AIゲートウェイ。ガイドライン、キャッシュ、リトライ、負荷分散を1つのAPIを通じて実現する。


**[⬆ 目次へ戻る](#contents)**

### API管理 <a id="api-management"></a>
*API管理の目的、機能、適用範囲を説明する概要です。*
- [Akana API Management Platform](https://www.akana.com/products/api-platform) - 包括的なライフサイクル管理を提供し、マルチクラウド環境における迅速なデジタル変革と強固なコンプライアンスを実現する。
- [Amazon API Management](https://aws.amazon.com/api-gateway/api-management/) - AWSのスケーラビリティとセキュリティを活用し、APIの作成、監視、管理を効率的に実行する。
- [Amplify API Management Platform](https://www.axway.com/en/products/amplify-api-management-platform) - オープンで柔軟なAPI管理アプローチを提供し、強力な統合と柔軟な展開オプションを備える。
- [Anypoint Platform](https://www.mulesoft.com/platform/api/manager) - API設計、統合、管理を1つの統合プラットフォームに統合し、接続性と開発を簡素化する。
- [Apigee](https://cloud.google.com/apigee) - Googleから提供される企業向けAPI管理における強力な分析、セキュリティ、スケーラビリティを提供する。
- [Azure API Management](https://azure.microsoft.com/en-us/services/api-management/) - ハイブリッドマルチクラウドソリューション。APIライフサイクル管理を簡素化し、包括的なセキュリティと分析を提供する。
- [Boomi API Management](https://boomi.com/platform/api-management/) - Boomi Enterprise PlatformにおけるクラウドネイティブAPI管理。環境間での集中制御を備えた全ライフサイクルをカバーする。
- [DigitMarket API Manager](https://www.torryharris.com/products/digitmarket-api-manager-for-api-management) - エンドツーエンドライフサイクド管理と強化された運用洞察を通じて、APIを戦略的ビジネスツールへ変換する。
- [Gravitee.io API Management (⭐439)](https://github.com/gravitee-io/gravitee-api-management) - 軽量でオープンソースのプラットフォーム。柔軟なAPI治理、強固なセキュリティ、シンプルな設定を提供する。
- [IBM API Connect](https://www.ibm.com/cloud/api-connect) - クラウド間でAPIの作成、管理、収益化を行うスケーラブルで安全で直感的な環境を提供する。
- [IBM webMethods API Management](https://www.ibm.com/products/webmethods-api-management) - APIライフサイクル管理に必要な包括的なソリューションを提供し、オンプレミスとクラウドシステムをシームレスに統合します。
- [Kong Enterprise](https://konghq.com/products/kong-enterprise) - 豊かなプラグインアーキテクチャにより、APIの接続性、マイクロサービスのオーケストレーション、セキュリティを強化するクラウドネイティブかつ企業向けのソリューションです。
- [Layer7 API Management](https://www.broadcom.com/products/software/api-management) - 継続的なライフサイクル管理と高度な統合機能により、安全かつ効率的なAPI開発を実現します。
- [Red Hat 3scale API Management](https://www.redhat.com/en/technologies/jboss-middleware/3scale) - クラウドネイティブアプローチと強力なスケーリング能力により、APIの収益化とガバナンスを簡易化します。
- [Sensedia API Management](https://www.sensedia.com/api-management-platform) - 高度なセキュリティ、パフォーマンスモニタリング、スムーズな統合を備えた、APIライフサイクル全体をカバーするソリューションを提供します。
- [Traefik API Management](https://traefik.io/traefik-hub) - DevOpsおよびプラットフォームエンジニアリングチームが「クリックオペレーション」を減らし、「Gitオペレーション」を重視するAPIライフサイクルワークフローに最適化されたAPIマネジメントアズコードプラットフォームを提供します。
- [Tyk API Management](https://tyk.io/api-lifecycle-management/) - 柔軟性、強固なセキュリティ、スケーラビリティに焦点を当てた、高性能なオープンソースAPIマネジメントプラットフォームを提供します。
- [WSO2 API Manager (⭐1k)](https://github.com/wso2/product-apim) - 強固なガバナンス、柔軟なデプロイメント、コミュニティによるイノベーションを提供する完全なオープンソースAPIプラットフォームです。
- [Zuplo API Management](https://zuplo.com) - 開発者中心の軽量プラットフォームで、GitOps統合、迅速なエッジデプロイメント、広範なOpenAPIサポート、スムーズな収益化を実現します。

**[⬆ 目次へ戻る](#contents)**

### API設計 <a id="api-design"></a>
*API設計の目的、機能、適用範囲を説明する概要です。*
- [Apicurio Studio (⭐1k)](https://github.com/apicurio/apicurio-studio) - WebベースのオープンソースAPI設計ツールで、OpenAPI仕様を活用します。
- [Dredd (⭐4.2k)](https://github.com/apiaryio/dredd) - バックエンド実装とAPI説明ドキュメントを言語に依存しないCLIツールで検証します。
- [Kiota (⭐3.7k)](https://github.com/microsoft/kiota) - Microsoftから提供されるコマンドラインジェネレーターは、OpenAPIの説明を多数の言語にわたる軽量かつ型安全なAPIクライアントに変換します。
- [oasdiff (⭐1.3k)](https://github.com/oasdiff/oasdiff) - OpenAPI仕様を比較し、破壊的な変更を検出し、複数の出力フォーマットで変更ログを生成します。
- [OpenAPI Diff (⭐1k)](https://github.com/OpenAPITools/openapi-diff) - OpenAPI仕様をバージョン管理と比較し、HTMLまたはMarkdown形式で差分を可視化します。
- [OpenAPI Generator (⭐26k)](https://github.com/OpenAPITools/openapi-generator) - この強力なOpenAPI仕様ツールにより、APIクライアントライブラリ、サーバースタブ、ドキュメント、設定ファイルの自動生成を実現します。
- [OpenAPI Style Validator (⭐236)](https://github.com/OpenAPITools/openapi-style-validator) - 組織の基準を満たすように、OpenAPI仕様を検証するための柔軟かつカスタマイズ可能なスタイルバリデーターを提供します。
- [OpenAPI-GUI (⭐1.4k)](https://github.com/Mermade/openapi-gui) - この直感的なグラフィカルユーザーインターフェースにより、OpenAPI仕様の作成と検証を簡単に実行できます。
- [Redocly CLI (⭐1.4k)](https://github.com/Redocly/redocly-cli) - 設定可能なルールセットとプラグインで、OpenAPI説明をLint、バンドル、プレビューします。
- [Spectral (⭐3.1k)](https://github.com/stoplightio/spectral) - OpenAPI 3.0および2.0、AsyncAPIをサポートするJSON/YAMLファイルのエラーを検出し、修正するためのリントツールを提供します。
- [Swagger Editor (⭐9.4k)](https://github.com/swagger-api/swagger-editor) - このオープンソースエディタにより、OpenAPIベースのAPIの作成、説明、ドキュメント化を簡単に実行できます。
- [vacuum (⭐1.1k)](https://github.com/daveshanley/vacuum) - 超高速のOpenAPIリントツールおよび品質分析ツール。Spectral規則セットと互換性がある。
- [Zally (⭐945)](https://github.com/zalando/zally) - このリントツールにより、OpenAPI仕様の品質を確保。詳細な分析とフィードバックを提供。


**[⬆ 目次へ戻る](#contents)**

### API文書 <a id="api-documentation"></a>
*API文書の目的、機能、適用範囲を説明する概要です。*
- [Bump.sh](https://bump.sh/) - OpenAPIおよびAsyncAPI定義からホスティングされたAPIドキュメンテーションおよび変更履歴を生成。自動的に破壊的変更を検出。
- [DapperDox (⭐416)](https://github.com/DapperDox/dapperdox) - OpenAPI/Swagger仕様から、カスタマイズが容易で自動更新可能な、美しくインタラクティブなAPIドキュメンテーションを生成。
- [Fern (⭐3.7k)](https://github.com/fern-api/fern) - OpenAPIまたは自社API定義形式からSDKおよびインタラクティブAPIドキュメンテーションを生成。
- [OpenAPI Explorer (⭐352)](https://github.com/Rhosys/openapi-explorer) - OpenAPI仕様から、直感的でインタラクティブなユーザーインターフェースを作成し、APIの探索とテストを簡素化。
- [RapiDoc (⭐1.8k)](https://github.com/rapi-doc/RapiDoc) - レスポンシブデザインと豊かな設定オプションを備えた、高度にカスタマイズ可能なインタラクティブAPIドキュメンテ及を生成。
- [ReadMe](https://readme.com/) - ホスティングされた開発者ハブ。OpenAPI定義をインタラクティブでパーソナライズされたAPIドキュメンテーションに変換し、使用状況メトリクスを提供。
- [Redoc (⭐25k)](https://github.com/Redocly/redoc) - 高度なテーマ設定、多言語対応、シームレスな統合を備えた、クリーンで現代的なドキュメンテーションを提供。
- [Scalar (⭐15k)](https://github.com/scalar/scalar) - OpenAPI/Swaggerドキュメントから、統合されたAPIクライアントおよび幅広いフレームワーク統合を備えた、現代的でインタラクティブなAPIリファレンスをレンダリング。
- [Slate (⭐36k)](https://github.com/slatedocs/slate) - マークダウンを、直感的なナビゲーションと明確なコード例を備えた、スタイリッシュな静的APIドキュメンテーションに変換。
- [SpectaQL (⭐1.2k)](https://github.com/anvilco/spectaql) - GraphQLスキーマ向けに静的かつカスタマイズ可能なドキュメンテーションを生成し、複雑なAPI構造を理解しやすくする。
- [Stoplight Elements (⭐2.4k)](https://github.com/stoplightio/elements) - 包括的なAPIリファレンスおよびチュートリアルドキュメンテーションの構築に必要な、モジュラーかつ魅力的なUIコンポーネントを提供。
- [SwaggerHub](https://swagger.io/tools/swaggerhub/) - API設計およびドキュメンテーションを統合したハブ。チームの協力、バージョン管理、自動テストを強化。
- [Swagger UI (⭐28k)](https://github.com/swagger-api/swagger-ui) - OpenAPI仕様からAPIを視覚化・テストできる、ブラウザ内でのインタラクティブツールを提供。
- [Zudoku (⭐575)](https://github.com/zuplo/zudoku) - OpenAPIに基づいたカスタマイズ可能なフレームワーク。品質ドキュメンテーションを通じて、開発者体験を最適化。


**[⬆ 目次へ戻る](#contents)**

### APIゲートウェイ <a id="api-gateway"></a>
*APIゲートウェイの目的、機能、適用範囲を説明する概要です。*
- [Apinto (⭐1.6k)](https://github.com/eolinker/apinto) - Golangベースのゲートウェイ。現代アーキテクチャ向けに動的ルーティング、マルチテナント、強固なAPIアクセス制御を提供。
- [Ambassador Edge Stack](https://www.getambassador.io/products/edge-stack/api-gateway/) - KubernetesネイティブのAPIゲートウェイ。高スケーラブル環境向けに、柔軟なルーティングと高度なセキュリティ機能を備える。
- [Apache APISIX (⭐16k)](https://github.com/apache/apisix) - 高パフォーマンスで動的なゲートウェイ。リアルタイムトラフィック管理と強力なプラグイン統合を備える。
- [Apache ShenYu (⭐8.8k)](https://github.com/apache/shenyu) - Javaベースのゲートウェイ。プロトコル変換、サービスプロキシ、包括的なAPIガバナンスにおいて優れたパフォーマンスを発揮。
- [Envoy Gateway (⭐2.9k)](https://github.com/envoyproxy/gateway) - CNCF Envoyベースのゲートウェイで、Gateway API、mTLS、JWTなど、内蔵機能を備えたもの
- [Higress (⭐9k)](https://github.com/higress-group/higress) - EnvoyおよびIstioをベースとした次世代クラウドネイティブゲートウェイ。高性能で使いやすく、豊富なプラグイン拡張性を提供
- [kgateway (⭐5.6k)](https://github.com/kgateway-dev/kgateway) - KubernetesネイティブのAPIゲートウェイであり、Kubernetes Gateway APIを基盤として構築されたCNCF Envoyベースのもの。Glooオープンソースプロジェクトの後継となるもの
- [Kong API Gateway (⭐43k)](https://github.com/Kong/kong) - スケーラブルでクラウドネイティブなゲートウェイ。広範なプラグインサポートとスムーズなマイクロサービス統合によりAPI管理を簡素化
- [KrakenD API Gateway (⭐2.6k)](https://github.com/krakend/krakend-ce) - 効率的なミドルウェア設定、強固なセキュリティ、スムーズなスケーリングを備えた超高性能ゲートウェイ
- [Ocelot (⭐8.7k)](https://github.com/ThreeMammals/Ocelot) - .NETベースのゲートウェイで、直感的なルーティングと軽量なAPI管理への容易な統合を提供
- [Spring Cloud Gateway (⭐4.9k)](https://github.com/spring-cloud/spring-cloud-gateway) - Springエコシステムを活用し、マイクロサービス向けに強固なルーティング、フィルタリング、セキュリティを提供
- [Traefik API Gateway (⭐64k)](https://github.com/traefik/traefik) - Traefik Proxyを組み合わせ、完全に宣言型アプリケーションプロキシを提供。企業レベルのアクセス制御、分散セキュリティ、プレミアム統合を備える
- [Tyk API Gateway (⭐10k)](https://github.com/TykTechnologies/tyk) - REST、GraphQL、TCP、gRPCをサポートする企業レベルのオープンソースゲートウェイ。高度なレート制限と分析機能を備える


**[⬆ 目次へ戻る](#contents)**

### APIテスト <a id="api-testing"></a>
*APIテストの目的、機能、適用範囲を説明する概要です。*
- API clients
   - [Bruno (⭐46k)](https://github.com/usebruno/bruno) - gitに最適化されたワークフローを想定した高速なオフラインAPIクライアント。スムーズなテストを可能にする
   - [curl (⭐42k)](https://github.com/curl/curl) - 複数プロトコル間のデータ転送に必要なコマンドラインツール。APIテストに必須
   - [curlie (⭐3.7k)](https://github.com/rs/curlie) - curlの現代的で使いやすいフロントエンド。シンプルさと強力なパフォーマンスを融合
   - [gRPC UI (⭐5.9k)](https://github.com/fullstorydev/grpcui) - gRPC API向けのインタラクティブなウェブベースツール。ブラウザベースのインターフェースでgRPCサービスのテストと探索を可能にし、動的フォーム生成を提供
   - [grpcurl (⭐12k)](https://github.com/fullstorydev/grpcurl) - gRPCサーバーとのインタラクションを可能にするコマンドラインツール。RPCメソッドの検証および呼び出しを可能にし、サーバーリフレクションおよびプロトコルバッファーファイルをサポート
   - [Hoppscotch (⭐80k)](https://github.com/hoppscotch/hoppscotch) - 軽量でウェブベースのAPI開発ツール。直感的なインターフェースとリアルタイムテストを提供
   - [HTTPie (⭐38k)](https://github.com/httpie/httpie) - 直感的なCLI HTTPクライアント。APIリクエストの作成とレスポンスの確認を簡素化
   - [HttpMaster](https://www.httpmaster.net/) - 無料かつ軽量のデスクトップツール。HTTPテストとデバッグに最適
   - [Insomnia (⭐39k)](https://github.com/Kong/insomnia) - RESTおよびGraphQLサービスのAPIデバッグとテストを簡易化するマルチプラットフォームクライアント
   - [posting (⭐12k)](https://github.com/darrenburns/posting) - 効率的かつスムーズなAPI相互作用を目的とした現代的なテールベースAPIクライア及
   - [Postman](https://www.postman.com/product/api-client/) - API開発およびテストにおける業界標準ツール。自動化、モックサーバー、協働ドキュメンテーションを備える
   - [Requestly (⭐6.7k)](https://github.com/requestly/requestly) - 軽量でGit対応のAPIクライアント。現代開発者向けに構築されたAPIクライアント。
   - [resty (⭐2.6k)](https://github.com/micha/resty) - curlを用いて実装された、コマンドラインのRESTクライアント。ターミナルからAPIを迅速に探索できるための便利なシェル関数。
   - [SoapUI (⭐1.7k)](https://github.com/SmartBear/soapui) - SOAPおよびRESTのウェブサービスを包括的にテストできるオープンソースソリューション。自動化機能が豊富。
   - [Wombat (⭐1.4k)](https://github.com/rogchap/wombat) - マルチプラットフォーム対応のデスクトップgRPCクライアント。プロトコルの自動解析、TLS対応、そしてユニタリー、ストリーミング、バイディレクショナルgRPCリクエストのテストに適した直感的なUIを備えている。
   - [xh (⭐8k)](https://github.com/ducaale/xh) - 高速かつ使いやすいCLI HTTPクライアント。HTTPieの設計を再実装し、パフォーマンスを向上させ、HTTP/2対応、および内蔵のcurl変換機能を備えている。
   - [Yaade (⭐1.9k)](https://github.com/EsperoTech/yaade) - チーム間の共有を目的とした、セルフホスト型の協働API開発環境。マルチユーザー対応、永続ストレージ、REST、WebSockets、Markdownドキュメンテーションに対応。
   - [Yaak (⭐18k)](https://github.com/mountain-loop/yaak) - REST、GraphQL、WebSocket、サーバー送信イベント、gRPCに対応するプライバシーを重視したデスクトップAPIクライアント。オフライン優先設計で、TauriとReactで構築。
- Contract testing
   - [Pact](https://docs.pact.io/) - 消費者ドリブンな契約テストの標準。主な言語に実装され、チーム間の契約共有を可能にするブローカーを備えている。
   - [Specmatic (⭐393)](https://github.com/specmatic/specmatic) - OpenAPI、AsyncAPI、gRPC仕様を実行可能な契約に変換し、契約ドリブン開発およびテストに活用。
   - [Spring Cloud Contract (⭐732)](https://github.com/spring-cloud/spring-cloud-contract) - JVMアプリケーション向けの消費者ドリブン契約テスト。GroovyまたはYAMLの契約定義からテストとスタブを生成。
- MQ clients
   - [JMSToolBox (⭐235)](https://github.com/jmstoolbox/jmstoolbox) - 幅広い互換性を備えたユニバーサルJMSクライアント。さまざまなブローカー間でのメッセージテストを簡便に可能にする。
   - [kcat (⭐5.7k)](https://github.com/edenhill/kcat) - Apache Kafka（元名：kafkacat）向けの軽量コマンドラインツール。メッセージの生成と消費を効率的に実行できる。
   - [MQTT Explorer (⭐4k)](https://github.com/thomasnordquist/MQTT-Explorer) - 構造化されたトピック可視化と直感的なデバッグを提供する詳細なMQTTクライアント。
   - [Offset Explorer](https://www.kafkatool.com) - Apache Kafkaクラスタの管理を包括的に支援するGUI（元名：Kafka Tool）で、ユーザーに親しみやすいモニタリングおよび管理ツールを備えている。
   - [Service Bus Explorer (⭐2.2k)](https://github.com/paolosalvatori/ServiceBusExplorer) - Azure Service Bus向けの高度なGUI。トピック、キュー、サブスクリプションの詳細なテストとスムーズな管理を可能にする。
- Mocking tools
   - [Hoverfly (⭐2.5k)](https://github.com/SpectoLabs/hoverfly) - 軽量なAPIシミュレーションツール。HTTP(S)サービスの迅速な仮想化を可能にし、効率的なテストを実現。
   - [Imposter (⭐414)](https://github.com/outofcoffee/imposter) - REST、OpenAPI、SOAPなどに対応する柔軟なモックサーバー。多様なAPI動作をシミュレーションできる。
   - [Microcks (⭐2k)](https://github.com/microcks/microcks) - KubernetesネイティブのAPIモックツール。AsyncAPI、OpenAPI、Postman Collectionsに対応。
   - [Mock Service Worker (MSW) (⭐18k)](https://github.com/mswjs/msw) - ブラウザおよびNode.js向けのシームレスなAPIモックライブラリ。ネットワークレベルでリクエストをインターセプトする。
   - [Mockable](https://www.mockable.io/) - カスタムHTTPレスポンスを作成できる、簡単に設定可能なサービス。急速なプロトタイピングおよびテストに最適。
   - [Mockbin (⭐140)](https://github.com/zuplo/mockbin) - HTTPリクエストのテストにリアルタイムログとフィードバックを提供するシンプルなエンドポイントジェネレータ
   - [Mockoon (⭐8.3k)](https://github.com/mockoon/mockoon) - ユーザーに親切なツールで、リアルタイムシミュレーションと簡単な設定を備えたモックREST APIの設計・実行が可能
   - [MockServer (⭐4.9k)](https://github.com/mock-server/mockserver) - HTTP/HTTPSベースのサービスをモックする強力なソリューションで、統合テストをスムーズに
   - [Mocky (⭐2k)](https://github.com/MockyAbstract/Mocky) - 無料のオンラインサービスで、カスタムHTTPレスポンスを生成し、APIエンドポイントのテストに使用
   - [Prism (⭐5k)](https://github.com/stoplightio/prism) - APIの動作を再現するオープンソースHTTPモックサーバーで、早期のテストと検証に使用
   - [WireMock (⭐7.3k)](https://github.com/wiremock/wiremock) - 信頼性の高いリアルタイムシミュレーションを提供し、包括的なテストを実現する強力で柔軟なAPIモックツール
- Testing tools and frameworks
   - [Apache JMeter (⭐9.5k)](https://github.com/apache/jmeter) - 多様なウェブアプリケーションとサービスにおける負荷テストおよびパフォーマンス分析に特化した機能豊富なツール
   - [Artillery (⭐9k)](https://github.com/artilleryio/artillery) - HTTP、WebSocket、Socket.io、gRPCなどに対応し、AWS LambdaおよびFargukiでのクラウドネイティブサーバレススケーリングをサポートする完全な負荷テストプラットフォーム
   - [Gatling (⭐6.9k)](https://github.com/gatling/gatling) - 開発者に親切なDSLを備えた強力な負荷テストフレームワークで、詳細なパフォーマンスメトリクスを提供
   - [Hurl (⭐19k)](https://github.com/Orange-OpenSource/hurl) - シンプルなテキスト構文でHTTPリクエストを実行できるコマンドラインツールで、APIテストおよびCI/CD統合に最適であり、チェーン処理、値のキャプチャ、包括的なアサートをサポート
   - [Keploy (⭐18k)](https://github.com/keploy/keploy) - eBPFを用いて実際のトラフィックからテストとデータモックを自動生成する開発者中心のAPIおよび統合テストツールで、コード変更なしに任意の言語に対応
   - [ghz (⭐3.3k)](https://github.com/bojand/ghz) - さまざまな負荷スケジュール、並列制御、詳細なパフォーマンスメトリクスをサポートするシンプルなgRPCベンチマークおよび負荷テストツール
   - [Grafana k6 (⭐31k)](https://github.com/grafana/k6) - CI/CD向けのオープンソース、JSスクリプト可能な負荷テストツール
   - [Karate (⭐8.9k)](https://github.com/karatelabs/karate) - API自動化、モック、パフォーマンステストを統合したシンプルで表現力の高いテストフレームワーク
   - [Pyresttest (⭐1.1k)](https://github.com/svanoort/pyresttest) - YAML/JSON駆動のREST APIテストおよびマイクロベンチマークを提供するPythonベースのテストツール
   - [REST Assured (⭐7.1k)](https://github.com/rest-assured/rest-assured) - 直感的な構文とCIパイプラインへのスムーズな統合を実現するJava DSLによるREST APIテストツール
   - [RESTler (⭐2.9k)](https://github.com/microsoft/restler-fuzzer) - OpenAPI仕様からプロダクターコンシューマーの依存関係を知的に推論し、セキュリティおよび信頼性のバグを自動的に発見する状態を持つREST APIのフュージングツール
   - [Schemathesis (⭐3.5k)](https://github.com/schemathesis/schemathesis) - APIスキーマの性質ベーステストを実行するPythonライブラリで、強固なエッジケース検出により信頼性を確保
   - [Taurus (⭐2.1k)](https://github.com/Blazemeter/taurus) - 直感的な設定と統合サポートを備えたオープンソース自動化フレームワークで、継続的なテストを簡易化


**[⬆ 目次へ戻る](#contents)**

### B2B統合 <a id="b2b-integration"></a>
*B2B統合の目的、機能、適用範囲を説明する概要です。*
- [OpenAS2 (⭐235)](https://github.com/OpenAS2/OpenAs2App) - HTTPを介した安全かつ署名・暗号化されたドキュメント交換を可能にする、JavaベースのオープンソースAS2プロトコル実装
- [phase4 (⭐234)](https://github.com/phax/phase4) - 挿入可能な、軽量なJavaライブラリでAS4メッセージプロトコルを実装しており、PeppolおよびCEF/eDeliveryプロファイルを含む
- [Smooks (⭐417)](https://github.com/smooks/smooks) - EDI、XML、CSV、JSONなどの構造化データの処理および変換に用いられる拡張可能なJavaフレームワーク


**[⬆ 目次へ戻る](#contents)**

### ビジネスルールエンジン <a id="business-rules-engine"></a>
*ビジネスルールエンジンの目的、機能、適用範囲を説明する概要です。*
- [Drools (⭐6.2k)](https://github.com/apache/incubator-kie-drools) - Eclipse IDEとの統合を可能にし、高度な決定モデルと記述（DMN）をサポートするオープンソースエンジン
- [FICO Blaze Advisor](https://www.fico.com/en/products/fico-blaze-advisor) - ビジネスおよび技術ユーザーが直感的なインターフェースを用いて迅速にルールを作成・管理できるエンタープライズ級の決定エンジン
- [IBM ODM](https://www.ibm.com/products/operational-decision-manager) - ルールの作成、テスト、更新をスムーズにし、コンプライアンスと柔軟性を確保するスケーラブルな決定管理システム
- [NxBRE (⭐133)](https://github.com/ddossot/NxBRE) - マイクロソフト環境に最適化された、専門の.NETオープンソースルールエンジン
- [OpenL Tablets (⭐201)](https://github.com/openl-tablets/openl-tablets) - ビジネスルールおよび決定表の定義と実行を簡素化する柔軟なオープンソース決定管理システム
- [Progress Corticon](https://www.progress.com/corticon) - モデル駆動型のBRMSにより、高パフォーマンスかつ保証された整合性を持つ自動決定を迅速に、ノコードで作成可能
- [ZEN Engine (⭐1.8k)](https://github.com/gorules/zen) - Rustで書かれた、プラットフォームを越えたオープンソースビジネスルールエンジン。JSON決定モデルを決定表、関数、表現の相互接続グラフを介して実行


**[⬆ 目次へ戻る](#contents)**

### ビジネスプロセス管理 <a id="business-process-management"></a>
*ビジネスプロセス管理の目的、機能、適用範囲を説明する概要です。*
- [Appian BPM Suite](https://appian.com/platform/complete-automation/business-process-management-bpm.html) - ITおよび市民開発者に向けた低コードBPMプラットフォームで、プロセスおよびケース中心のアプリケーションを迅速に構築可能
- [IBM Business Automation Workflow](https://www.ibm.com/products/business-automation-workflow) - ワークフロー自動化とBPMを統合したプラットフォームで、運用プロセスおよび意思決定を最適化
- [Oracle BPM Suite](https://www.oracle.com/middleware/technologies/bpm.html) - 包括的なソリューションで、強固なプロセスモデリング、ワークフロー自動化、リアルタイム分析を提供し、運用の優秀さを実現
- [Pega Platform](https://www.pega.com/products/platform) - 高度なBPMおよびRPAプラット開発により、業務プロセスの自動化と従業員分析を実現し、運用を効率化
- [TIBCO BPM Enterprise](https://www.tibco.com/products/business-process-management) - エンタープライズ級BPMソリューションで、プロセス自動化、ドキュメンテーション、予測分析を提供し、パフォーマンスと意思決定を向上


**[⬆ 目次へ戻る](#contents)**

### 変更データキャプチャ <a id="change-data-capture"></a>
*変更データキャプチャの目的、機能、適用範囲を説明する概要です。*
- [AWS Database Migration Service](https://aws.amazon.com/dms/) - データベース、データウェアハウス、データラクの同期を維持するCDCサポートを備えたマネージド移行およびレプリケーションサービス
- [Debezium (⭐13k)](https://github.com/debezium/debezium) - 既存のデータベースをイベントストリームに変換し、リアルタイムデータ統合を可能にするオープンソース分散プラットフォーム
- [IBM Data Replication](https://www.ibm.com/products/data-replication) - ソースシステムへの影響を最小限に抑え、遅延を低く保つエンタープライズ級CDCソリューション
- [Maxwell's daemon (⭐4.2k)](https://github.com/zendesk/maxwell) - MySQL向けオープンソースCDCツールで、データベースのbinlogを読み取り、行レベルの変更をJSON形式でKafka、Kinesis、またはその他の宛先へストリーミング
- [Oracle GoldenGate](https://www.oracle.com/integration/goldengate/) - 異質なデータベースおよびクラウドプラットフォーム向けに包括的なCDC機能を提供するエンタープライズ級リアルタイムデータ統合およびレプリケーションソリューション
- [PeerDB (⭐3.2k)](https://github.com/PeerDB-io/peerdb) - Postgresを主軸としたCDCプラットフォームで、PostgreSQLからデータウェアハウス、キュー、ストレージへの高速かつシンプルなレプリケーションを実現
- [Qlik Replicate](https://www.qlik.com/us/products/qlik-replicate) - ユニバーサルなデータレプリケーションソフトウェアで、現代のデータアーキテクチャおよび分析に実時間CDC機能を提供する。
- [Sequin (⭐2.1k)](https://github.com/sequinstream/sequin) - PostgreSQLの変更データキャプチャプラットフォームで、行レベルの変更をKafka、SQS、Redis、NATS、RabbitMQ、HTTPエンドポイント、検索インデックスへストリーミングし、正確に1回処理を行う。
- [Striim](https://www.striim.com/) - データベースからクラウド分析ターゲットへまでのログベースCDCによるリアルタイムデータ統合およびストリーミングプラットフォーム。


**[⬆ 目次へ戻る](#contents)**

### データ統合 <a id="data-integration"></a>
*データ統合の目的、機能、適用範囲を説明する概要です。*
- [Airbyte (⭐21k)](https://github.com/airbytehq/airbyte) - 柔軟でオープンソースのデータ統合プラットフォームで、多様なソースから現代のターゲットへELTパイプラインを構築する。
- [Apache InLong (⭐1.4k)](https://github.com/apache/inlong) - 大量データのワンストップ、フルシナリオ統合フレームワークで、データイングリッシュ、同期、サブスクリプションおよびリアルタイムETL機能を提供する。
- [Apache NiFi (⭐6.1k)](https://github.com/apache/nifi) - 視覚インターフェースを備えた自動データ統合ツールで、システム間をスムーズにデータを抽出・変換・配信する。
- [Apache SeaTunnel (⭐9.5k)](https://github.com/apache/seatunnel) - 高パフォーマンスかつ分散型のデータ統合プラットンで、数百のコンネクタを介してバッチおよびストリーミング同期をサポートする。
- [CloverDX](https://www.cloverdx.com/) - 企業向けETLソリューション（以前はCloverETLと呼ばれていた）で、スケーラブルな統合に必要な強力なデータ変換およびワークフローのオーケストレーションを提供する。
- [Conduit (⭐605)](https://github.com/ConduitIO/conduit) - Go言語で書かれた軽量データ統合ツールで、システム間のデータをインストールまたはスタンドアローンコンネクタを使ってストリーミングし、Kafka Connectとの互換性を持つ。
- [dlt (⭐5.7k)](https://github.com/dlt-hub/dlt) - データパイプラインをコードとして構築するためのオープンソースPythonライブラリで、スキーマの進化およびインクリメンタルロードが標準で提供される。
- [Estuary Flow (⭐960)](https://github.com/estuary/flow) - 柔軟かつスケーラブルなプラットフォームで、リアルタイムおよびバッチデータ統合をETLおよびELTパイプラインに提供する。
- [Fivetran](https://www.fivetran.com/) - 管理型ELTで、700以上のソースをデータウェアハウスに同期する。
- [Hevo](https://hevodata.com/) - ノーコードで完全自動化されたデータパイプラインプラットフォームで、広範な統合をサポートし、複雑なデータワークフローを簡素化する。
- [IBM DataStage](https://www.ibm.com/products/datastage) - 強力なプラットフォームで、データをクリーンアップ・変換・配信し、企業に信頼できる洞察を提供する。
- [Informatica PowerCenter](https://www.informatica.com/products/data-integration/powercenter.html) - 企業向けソリューションで、大規模データおよびクラウド分析を包括的なデータ統合管理で簡易化する。
- [Meltano (⭐2.5k)](https://github.com/meltano/meltano) - 宣言型・コードファーストデータ統合エンジンで、バージョン管理されたパイプライン構成でSingerのタップとターゲットを実行する。
- [Microsoft SSIS](https://docs.microsoft.com/en-us/sql/integration-services/sql-server-integration-services) - SQL Serverを用いた企業環境におけるスケーラブルETLプロセスの構築に向けた確立されたデータ統合ソリューション。
- [Oracle Data Integrator](https://www.oracle.com/middleware/technologies/data-integrator.html) - バッチロード、リアルタイムプロセス、SOA対応サービスを含む包括的なプラットフォームで、端末から端末までデータ管理をカバーする。
- [Pentaho Data Integration (⭐8.3k)](https://github.com/pentaho/pentaho-kettle) - 直感的な視覚ETLツールで、複数のソース間のデータイングリッシュ、ブレンド、クリーンアップを重複しないコードで簡素化する。
- [SAS Data Management](https://www.sas.com/en_us/software/data-management.html) - 強力なソリューションで、データを変換・統合・セキュリティ化し、企業全体のデータ品質と信頼性を向上させる。
- [Singer (⭐1.3k)](https://github.com/singer-io/getting-started) - データの移動を司るスクリプトを書くためのオープンソース標準。抽出「タップ」とロード「ターゲット」の間でJSONベースのプロトコルを定義する。
- [Sling (⭐885)](https://github.com/slingdata-io/sling-cli) - データベース、ファイル、クラウドストレージの間を多数のコンネクタで結ぶ高速ELTコマンドラインツールおよびGoライブラリ。
- [Stitch](https://www.stitchdata.com/) - 多数のソースからデータを抽出し、データウェアハウスに移動させ、分析をスムーズに進める、開発者向けのSaaS型ETLサービス。
- [Talend Data Integration](https://www.talend.com/products/integrate-data/) - 多様なデータソースを統合し、意思決定に活かせる実行可能な洞察を提供する、柔軟性の高いプラットフォーム。


**[⬆ 目次へ戻る](#contents)**

### データマッピング <a id="data-mapping-solution"></a>
*データマッピングの目的、機能、適用範囲を説明する概要です。*
- [Altova MapForce](https://www.altova.com/mapforce) - 任意のデータソースから任意のデータ形式への変換を可能にするグラフィカルなデータマッピングソリューション。複雑性を低減し、統合プロジェクトを加速する。
- [AtlasMap (⭐213)](https://github.com/atlasmap/atlasmap) - Java、XML、CSV、JSONデータソース間のマッピングをシンプルに実行する、インタラクティブなウェブベースツール。直感的なインターフェースを備える。
- [DataSonnet (⭐37)](https://github.com/datasonnet/datasonnet-mapper) - Jsonnetに基づいたテンプレートベースのデータ変換ライブラリ。システム統合に特化した構成。
- [JOLT (⭐1.6k)](https://github.com/bazaarvoice/jolt) - JSON変換ライブラリ。Javaベースで、仕様駆動アプローチにより、JSONからJSONへの変換を容易に実現。
- [JSLT (⭐698)](https://github.com/schibsted/jslt) - jqおよびXPathにインスパイアされた強力なJSONクエリおよび変換言語。データ操作を迅速かつ柔軟に行うために設計。
- [JSONata (⭐2.6k)](https://github.com/jsonata-js/jsonata) - JSONデータ用の軽量なクエリおよび変換言語。
- [Kaoto (⭐112)](https://github.com/KaotoIO/kaoto) - Apache Camel向けの視覚データマッパー。ドラッグアンドドロップインターフェースを備え、XML、JSON、CSV、XSLT変換をサポート。AtlasMapの継承。


**[⬆ 目次へ戻る](#contents)**

### エンタープライズサービスバス <a id="enterprise-service-bus"></a>
*エンタープライズサービスバスの目的、機能、適用範囲を説明する概要です。*
- [Anypoint Platform](https://www.mulesoft.com/platform/enterprise-integration) - 強力な統合ソリューション。堅牢なESB機能を活用し、異なったシステムを接続・オーケストレーションする。
- [CData Arc](https://www.cdata.com/arc/) - アプリケーション間のデータを同期し、パートナーとの接続を簡素化し、EDIおよびMFTワークフローを自動化する統合プラットフォーム（以前はArcESB）。
- [IBM App Connect](https://www.ibm.com/cloud/app-connect) - 多様なアプリケーションおよびプロトコルを接続し、企業全体でのデータフローをスムーズに保つ、堅牢な統合ソリ連。
- [IBM webMethods Integration](https://www.ibm.com/products/webmethods-integration) - 異質なシステム間の接続を簡素化し、アプリケーション統合を加速する包括的なプラットフォーム。
- [NServiceBus (⭐2.1k)](https://github.com/Particular/NServiceBus) - 開発者向けの.NETベースのサービスバス。メッセージングを簡素化し、サービス統合を効率的にオーケストレーションする。
- [Oracle Service Bus](https://www.oracle.com/middleware/technologies/service-bus.html) - サービス間の相互作用を仮想化・管理し、統合の複雑性を低減する強力なESBソリューション。
- [Oracle SOA Suite](https://www.oracle.com/middleware/technologies/soasuite.html) - サービスを複合アプリケーションにオーケストレーションし、業務プロセス統合を効率化する包括的なSOAプラットフォーム。
- [Red Hat build of Apache Camel](https://developers.redhat.com/products/redhat-build-of-apache-camel/overview) - Red HatがサポートするApache Camel（Red Hat Fuseの継承）の配布版。クラウドネイティブ統合の構築に適した。
- [TIBCO BusinessWorks](https://www.tibco.com/products/tibco-businessworks) - 信頼性の高いデータ交換を実現する、プローブされたハイブリッド統合パターンを採用するエンタープライズ級統合プラットフォーム。
- [UltraESB](https://www.adroitlogic.com/products/ultraesb/) - 高パフォーマンスを実現したESBで、ゼロコピープロキシとブロッキングIOのない技術を採用し、極限のスループットを達成。
- [WSO2 Integrator: MI (⭐258)](https://github.com/wso2/product-integrator-mi) - WSO2 Integratorプラットフォームの構成駆動型統合リターンタイムが、中央化およびコンテナ化展開において企業向け統合パターンをサポート。


**[⬆ 目次へ戻る](#contents)**

### 統合フレームワーク <a id="integration-frameworks"></a>
*統合フレームワークの目的、機能、適用範囲を説明する概要です。*
- [Apache Camel (⭐6.2k)](https://github.com/apache/camel) - データベース、メッセージング、API、クラウドサービス、企業システムなど300以上のコンネクタを備えた統合フレームワーク。Spring BootおよびQuarkusのリターンタイムをサポートし、A2AおよびMCPプロトコルを用いてAIエージェントの相互運用を実現。
- [Ballerina (⭐3.8k)](https://github.com/ballerina-platform/ballerina-lang) - ネットワークサービスおよびAPIの簡単な作成と統合を可能にするための革新的なプログラミング言語。
- [Frank!Framework (⭐165)](https://github.com/frankframework/frankframework) - 構成可能なXML設定により、システムの接続性とデータ統合を簡易化する低コードJavaメッセージングフレームワーク。
- [MassTransit (⭐7.7k)](https://github.com/MassTransit/MassTransit) - .NET向けの分散アプリケーションフレームワークで、RabbitMQ、Azure Service Bus、Amazon SQSなどのトランスポート上に一貫したメッセージング抽象を提供。
- [Spring Cloud Stream (⭐1k)](https://github.com/spring-cloud/spring-cloud-stream) - Kafka、RabbitMQなどへのバインダー抽象を用いて、共有メッセージングシステムに接続されたイベント駆動型マイクロサービスを構築するためのフレームワーク。
- [Spring Integration (⭐1.6k)](https://github.com/spring-projects/spring-integration) - プローブされた企業統合パターンを用いて、即時的に統合機能を提供するSpringエコシステムの拡張。
- [Wolverine (⭐2.3k)](https://github.com/JasperFx/wolverine) - RabbitMQおよびKafkaなどのトランスポートを内蔵した、低儀礼のメッセージングおよびコマンドバスフレーム及。


**[⬆ 目次へ戻る](#contents)**

### Integration Platform as a Service <a id="integration-platform-as-a-service"></a>
*Integration Platform as a Serviceの目的、機能、適用範囲を説明する概要です。*
- [Anypoint Platform](https://www.mulesoft.com/platform/saas/cloudhub-ipaas-cloud-based-integration) - API管理と統合を1つのプラットフォームに統合し、多様なアプリケーション間のシームレスな接続を実現。
- [Azure Logic Apps](https://azure.microsoft.com/en-us/products/logic-apps) - MicrosoftのiPaaSで、クラウドおよびオンプレミスシステムに数百の事前構築されたコンネクタを用いて自動化されたワークフローを構築。
- [Boomi Enterprise Platform](https://boomi.com/platform) - クラウドネイティブで知能を備えたプラットフォームで、システム間の接続を容易にし、統合プロセスを自動化。
- [Camel K (⭐926)](https://github.com/apache/camel-k) - Apache Camelに基づく軽量なKubernetesネイティブ統合プラットフォームで、KubernetesおよびOpenShift上でクラウドネイティブサーバレスサービスとして統合ルートを直接実行。
- [Celigo Integration Platform](https://www.celigo.com/platform/) - 迅速なSaaS間統合と直感的なドラッグアンドドロップ設計を提供する、ユーザーフレンドリーなiPaaS。
- [Jitterbit Harmony](https://www.jitterbit.com/platform/ipaas) - 事前構築されたワークフローおよび自動化テンプレートを提供する包括的な統合ソリューションで、ビジネスプロセスを加速。
- [IBM Cloud Integration](https://www.ibm.com/cloud/integration) - AIを活用した次世代プラットフォームで、統合の簡素化、スケーラビリティの向上、およびデプロイのスピードアップを実現。
- [IBM webMethods](https://www.ibm.com/products/webmethods) - アプリケーションを統合し、プロセスを簡素化し、全体の効率を高める1つの統合プラットフォーム。
- [Informatica Intelligent Cloud Services](https://www.informatica.com/products/cloud-integration.html) - クラウドデータ管理ツールのセットで、生産性を加速し、アプリケーションおよびデータ統合を簡素化。
- [OpenText Alloy](https://businessnetwork.opentext.com/enterprise-data-management/) - 基本的な統合を行動可能な洞察およびスマートな意思決定に変換する企業向けデータ管理ソリューション。
- [Oracle Integration Cloud Service](https://www.oracle.com/integration/application-integration/) - SaaSおよびオンプレミスアプリケーション向けに事前構築された接続を備えた強固なプラットフォームで、統合プロセスを簡素化。
- [SAP Integration Suite](https://www.sap.com/products/technology-platform/integration-suite.html) - クラウドネイティブソリューションで、事前構築されたアダプタ、API管理、イベントブローカーを提供し、端末から端末までの一貫した接続を実現します。
- [SnapLogic Intelligent Integration Platform](https://www.snaplogic.com/products/intelligent-integration-platform) - AIを駆使したプラットフォームで、アプリケーションとデータを迅速に接続し、効率的かつスケーラブルな統合を実現します。
- [TIBCO Cloud Integration](https://docs.tibco.com/products/tibco-cloud-integration-ipaas) - 柔軟でAPI中心、イベント中心のプラットフォームにより、ほぼすべてのシステムを迅速に統合できます。
- [Tray.ai](https://tray.ai/) - 低コード自動化プラットフォームで、ドラッグ＆ドロップインターフェースにより、スケーラブルな統合とワークフローの構築が簡単です。
- [Workato](https://www.workato.com/) - 統合およびワークフロー自動化ソリューションで、複雑なプロセスを簡素化し、運用効率を向上します。


**[⬆ 目次へ戻る](#contents)**

### Messaging as a Service <a id="messaging-as-a-service"></a>
*Messaging as a Serviceの目的、機能、適用範囲を説明する概要です。*
- [Amazon MQ](https://aws.amazon.com/amazon-mq) - 完全に管理されたメッセージブローカーで、Apache ActiveMQおよびRabbitMQをサポートし、信頼性とセキュリティの高いメッセージングを実現します。
- [Amazon MSK](https://aws.amazon.com/msk) - 管理されたApache Kafkaサービスで、クラスタの設定、スケーリング、リアルタイムデータストリーミングを簡易に実現します。
- [Amazon SQS](https://aws.amazon.com/sqs) - 信頼性の高い、完全に管理されたキューングサービスで、マイクロサービスを分離し、分散アプリケーションをスムーズにスケーリングできます。
- [Amazon SNS](https://aws.amazon.com/sns) - 管理されたpub/subメッセージングサービスで、サブスクリーバーに柔軟に通知し、さまざまな配信プロトコルをサポートします。
- [Alibaba Cloud Message Queue for Apache Kafka](https://www.alibabacloud.com/product/kafka) - 高スループットのKafkaサービスで、アリババクラウドとの統合により、リアルタイムデータ処理を実現します。
- [Alibaba Cloud Message Queue for RabbitMQ](https://www.alibabacloud.com/product/rabbitmq) - スケーラブルなRabbitMQソリューションで、低遅延と高スループットを提供し、分散メッセージングを実現します。
- [Alibaba Cloud Message Service](https://www.alibabacloud.com/product/message-service) - 分散メッセージングサービスで、分離されたシステム間のデータ転送を確実に保ちます。
- [AlibabaMQ for Apache RocketMQ](https://www.alibabacloud.com/product/mq) - 強固なメッセージキューサービスで、非同期通信をサポートし、高い可用性と耐久性を確保します。
- [Anypoint MQ](https://www.mulesoft.com/platform/anypoint-mq-message-queue) - 企業向けメッセージングサービスで、Anypoint Platformと統合され、柔軟かつ信頼性の高いメッセージオーケストレーションを実現します。
- [Azure Event Hubs](https://azure.microsoft.com/en-us/products/event-hubs/) - 高スループ度の完全に管理されたイベントインジェスト（発行・購読）サービスで、Kafkaプロトコルを本体でサポートします。
- [Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/) - 複数のパターンおよびプロトコルをサポートするクラウドメッセージングソリューションで、強固な企業向け統合を実現します。
- [CloudAMQP](https://www.cloudamqp.com/) - 管理されたRabbitMQサービスで、直感的なウェブコンソール、高度な分析、スムーズなスケーリングを備えています。
- [Confluent Cloud](https://www.confluent.io/confluent-cloud/) - 完全に管理されたKafkaサービスで、スキーマレジストリ、コンネクタ、ガバナンスなどの企業向け機能を提供します。
- [Google Cloud Managed Service for Apache Kafka](https://cloud.google.com/products/managed-service-for-apache-kafka) - Google Cloud上でKafkaのデプロイと管理を簡易にし、リアルタイムストリーミングアプリケーションをサポートします。
- [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) - 高スループットのメッセージングサービスで、イベント駆動アーキテクチャと柔軟な配信モデルをサポートします。
- [Huawei Cloud Distributed Message Service](https://www.huaweicloud.com/intl/en-us/product/dms.html) - 完全に管理されたメッセージングサービスで、アプリケーション間の安全かつスケーラブルで信頼性の高い通信を確保します
- [Huawei Cloud Distributed Message Service for Kafka](https://www.huaweicloud.com/intl/en-us/product/dmskafka.html) - 管理されたKafkaソリューションで、スケーリングと管理を簡素化しつつ、高いパフォーマンスとセキュリティを実現します
- [IBM MQ on Cloud](https://www.ibm.com/cloud/mq) - クラウド環境におけるアプリケーション間の安全かつ信頼性の高いデータ転送を提供するエンタープライズメッセージングサービス
- [IronMQ](https://www.iron.io/mq) - エラスティックでクラウドネイティブなメッセージキューで、高量のメッセージをスケーラブルかつ信頼性の高い処理が可能です
- [Oracle Cloud Streaming](https://www.oracle.com/cloud/cloud-native/streaming/) - サーバレスでリアルタイムイベントストリーミングプラットフォームで、Apache Kafkaの互換性により効率的なデータ処理が可能です
- [Solace PubSub+ Cloud](https://solace.com/products/platform/cloud/) - 統合されたイベントストリーミングプラットフォームで、データパイプラインの完全な可視性と制御を提供します
- [Yandex Message Queue](https://cloud.yandex.com/en/services/message-queue) - Amazon SQS APIと互換可能なクラウドメッセージングサービスで、既存システムとの容易な統合が可能です
- [Yandex Managed Service for Apache Kafka](https://cloud.yandex.com/en/services/managed-kafka) - 完全に管理されたKafkaサービスで、自動スケーリング、監視、メンテナンスが自動化され、スムーズなストリーミングが実現します


**[⬆ 目次へ戻る](#contents)**

### マネージドファイル転送 <a id="managed-file-transfer"></a>
*マネージドファイル転送の目的、機能、適用範囲を説明する概要です。*
- [Axway Managed File Transfer](https://www.axway.com/en/products/managed-file-transfer) - 強固なプラットフォームで、高度なセキュリティと企業システム間の効率的かつ信頼性の高いデータ転送を提供します
- [CData Arc MFT](https://www.cdata.com/arc/mft/) - エンタープライズレベルのMFTソリューション（以前はArcESB）で、直感的なインターフェースと強力な自動化により、ファイル交換をスムーズに実現します
- [GlobalSCAPE EFT](https://www.globalscape.com/eft) - 強化されたファイル転送サーバーで、端末から端末まで暗号化、自動化、コンプライアンスを確実に確保し、重要なデータを保護します
- [GoAnywhere MFT](https://www.goanywhere.com/products/goanywhere-mft) - 包括的なソリューションで、中央集約型かつ安全なファイル転送を実現し、自動化と完全なログ記録を提供します
- [IBM Sterling Secure File Transfer](https://www.ibm.com/products/secure-file-transfer) - スケーラブルかつ高性能なMFTプラットフォームで、安全かつ高速かつ信頼性の高いファイル交換を実現します
- [IBM webMethods MFT](https://www.ibm.com/products/webmethods-mft) - ハイブリッド環境における柔軟なデプロイメントをサポートする統合された管理ファイル転送ソリューションです
- [JSCAPE MFT Server](https://www.jscape.com/products/file-transfer-servers/jscape-mft-server) - セキュリティとプロトコルに依存しないプラットフォームで、自動化とコンプライアンスを提供します
- [Oracle Managed File Transfer](https://www.oracle.com/middleware/technologies/mft/managed-file-transfer.html) - エンタープライ連のファイル交換と管理を安全に簡素化する包括的なプラットフォームです
- [Progress MOVEit](https://www.progress.com/moveit) - 規制業界向けの確実な配信、暗号化、コンプライアンスツールを備えた自動化されたファイル転送ソリューションです
- [TIBCO Managed File Transfer](https://www.tibco.com/products/tibco-managed-file-transfer) - 多様なファイル転送シナリオをサポートする強固な自動化とセキュリティ機能を備えた中央集約型MFTプラットフォームです
- [Titan MFT Server](https://southrivertech.com/titan-mft-server/) - 高可用性、フェイルオーバー機能、大規模ファイル自動化を備えたエンタープライズレベルのMFTサーバーです


**[⬆ 目次へ戻る](#contents)**

### マスターデータ管理 <a id="master-data-management"></a>
*マスターデータ管理の目的、機能、適用範囲を説明する概要です。*
- [IBM InfoSphere Master Data Management](https://www.ibm.com/products/ibm-infosphere-master-data-management) - 企業規模のデータガバナンスを中央集約し、企業全体の一貫性と正確性を確保する包括的なプラットフォームです
- [Informatica Multidomain MDM](https://www.informatica.com/products/master-data-management/multidomain-mdm.html) - すべての領域におけるマスターデータの管理および統制を統合したソリューションで、全体のデータ品質を向上させる
- [Oracle Enterprise Data Management](https://www.oracle.com/performance-management/enterprise-data-management/) - 意思決定および運用の柔軟性を高めるために、マスターデータを中央に集約する強固なツール
- [Reltio](https://www.reltio.com/products/multidomain-mdm) - クラウドネイティブで、データ品質、統制、リアルタイム分析を統合したマルチドメインMDMプラットフォームで、360度の視点を提供
- [SAP Master Data Governance](https://www.sap.com/products/master-data-governance.html) - マスターデータを中央に統合し、統一性と高品質を確保する中央集約型ソリューション
- [SAS MDM](https://support.sas.com/en/software/mdm-support.html) - 多様なソースからのデータを正確なマスターレコードに統合する統一プラットフォームで、効率を向上させる
- [Stibo MDM](https://www.stibosystems.com/platform) - データの透明性と統制に焦点を当てた、証明済みのマルチドメインMDMソリューションで、単一の事実源を提供
- [Teradata MDM](https://www.teradata.co.uk/Products/Applications/Master-Data-Management) - 正確な参照データを維持することで、分析の基礎を一貫性を持たせ、ROIを向上させる
- [TIBCO EBX](https://www.tibco.com/products/ebx) - 共有データ資産の統制および管理を行う包括的なプラットフォームで、一貫性を確保し、スマートな意思決定を可能にする


**[⬆ 目次へ戻る](#contents)**

### メッセージブローカー <a id="message-broker"></a>
*メッセージブローカーの目的、機能、適用範囲を説明する概要です。*
- [Apache ActiveMQ (⭐2.4k)](https://github.com/apache/activemq) - JMSを実装したオープンソースブローカーで、同期と非同期メッセージ間のシームレスな変換を実現
- [Apache ActiveMQ Artemis (⭐1k)](https://github.com/apache/activemq-artemis) - 複数の業界標準プロトコル（AMQP 1.0、MQTT 3.1.1、MQTT 等）をサポートするマルチプロトコルメッセージブローカー
- [Apache EventMesh (⭐1.7k)](https://github.com/apache/eventmesh) - アプリケーションのデカップリングとバックエンドブローカーを実現する、サーバーレスイベントミドルウェアとして機能する動的イベント駆動アプリケーションランタイム
- [Apache Iggy (⭐4.4k)](https://github.com/apache/iggy) - Rustで構成されたパーソナリティメッセージストリーミングプラットフォームで、QUIC、TCP、HTTPトランスポートをサポートし、高いスループットと低い遅延を実現
- [Apache Kafka (⭐33k)](https://github.com/apache/kafka) - リアルタイムデータストリーミングおよび障害耐性処理を目的とした分散型、高スループットシステム
- [Apache Pulsar (⭐15k)](https://github.com/apache/pulsar) - 現代アプリケーション向けにスケーラブルで低遅延なメッセージを提供する、多様なpub/subおよびストリーミングプラットフォーム
- [Apache Qpid (⭐70)](https://github.com/apache/qpid-broker-j) - AMQPに準拠したメッセージツールで、企業レベルのメッセージ配信を多言語でサポート
- [Apache RocketMQ (⭐22k)](https://github.com/apache/rocketmq) - 低遅延かつ高スループットを実現する高性能分散メッセージプラットフォーム
- [AutoMQ (⭐10k)](https://github.com/AutoMQ/automq) - 状態を持たない、Kafkaと互換性のあるブローカーで、S3クラスのオブジェクトストレージ上で実行され、エラスティックスケーリングとコスト削減を実現
- [BlazingMQ (⭐3.2k)](https://github.com/bloomberg/blazingmq) - 現代のワークフローニーズに効率性と信頼性を重視した分散メッセージキューングシステム
- [Centrifugo (⭐10k)](https://github.com/centrifugal/centrifugo) - オンラインユーザーへのイベント配信の遅延を最小限に抑えるスケーラブルなリアルタイムメッセージサーバー
- [Eclipse Mosquitto (⭐11k)](https://github.com/eclipse-mosquitto/mosquitto) - 低消費電力デバイス向けに最適化されたMQTTブローカーで、強固な暗号化と認証を提供
- [ElasticMQ (⭐2.9k)](https://github.com/softwaremill/elasticmq) - Amazon SQSに互換性のあるメモリ内メッセージキュー。独立したデプロイや埋め込みデプロイに対応し、オプションでUIとキューの永続化を提供。
- [EMQX (⭐16k)](https://github.com/emqx/emqx) - IoTおよび産業用途向けの高パフォーマンスMQTTブローカー。スケーラブルなメッセージ配信を実現。
- [HiveMQ (⭐1.2k)](https://github.com/hivemq/hivemq-community-edition) - 大規模なIoTメッセージ送信に特化したMQTTブローカー。オープンソースコミュニティエディションと豊かな拡張システムを備える。
- [IBM MQ](https://www.ibm.com/products/mq) - 企業レベルのメッセージングソリューション。強固な機能、高い可用性、複数プロトコル対応を提供。
- [KubeMQ](https://kubemq.io/) - Kubernetesネイティブのメッセージブローカーおよびキューシステム。スケーラビリティ、高い可用性、そしてスムーズなクラウド統合を実現。
- [LavinMQ (⭐987)](https://github.com/cloudamqp/lavinmq) - AMQP 0-9-1およびMQTTプロトコルを実装した高パフォーマンスメッセージキューサーバー。Crystalで構築され、高いスループットと最小のリソース使用を実現。
- [Magistrala (⭐2.6k)](https://github.com/absmach/magistrala) - 複数プロトコン（HTTP、MQTT、WebSocket、CoAP）をサポートする分散型イベント駆動インフラストラクチャ。強固なセキュリティとIoT機能を備える。
- [NATS (⭐20k)](https://github.com/nats-io/nats-server) - マイクロサービスおよびクラウドネイティブアーキテクチャに最適な軽量かつ高パフォーマンスなメッセージングシステム。
- [NSQ (⭐25k)](https://github.com/nsqio/nsq) - スケーラブルに動作するリアルタイム分散型メッセージプラットフォーム。毎日数十億のメッセージを処理する分散トポロジーを備える。
- [Oracle AQ](https://www.oracle.com/database/technologies/advanced-queuing.html) - Oracleデータベース内に統合されたメッセージングソリューション。信頼性と効率的なメッセージ配信を提供。
- [RabbitMQ (⭐13k)](https://github.com/rabbitmq/rabbitmq-server) - AMQPを実装する人気のあるオープンソースブローカー。信頼性、クラスタリング、使いやすさで知られている。
- [Red Hat AMQ](https://www.redhat.com/en/technologies/jboss-middleware/amq) - オープンソース技術に基づく企業向けメッセージングプラットフォーム。スケーラブルかつ信頼性の高いメッセージ配信を提供。
- [Redpanda (⭐12k)](https://github.com/redpanda-data/redpanda) - Zookeeperを削除したKafkaに互換性のあるストリーミングプラットフォーム。高いパフォーマンスと低遅延を実現。
- [RMQ (⭐1.6k)](https://github.com/wellle/rmq) - Goで記述されたRedisベースのメッセージキュー。柔軟なキュー管理、バッチコンシューマー、効率的な配信パターンを提供。
- [TIBCO Enterprise Message Service](https://www.tibco.com/products/tibco-enterprise-message-service) - アプリケーション間のメッセージ交換を効率的かつ堅牢に実現する、標準に基づくJMS実装。
- [VerneMQ (⭐3.6k)](https://github.com/vernemq/vernemq) - 現代環境におけるスケーラブルかつ効率的なメッセージ配信を実現する、高パフォーマンス分散型MQTTブローカー。
- [ZeroMQ (⭐10k)](https://github.com/zeromq/libzmq) - 高パフォーマンスの非同期メッセージングライブラリ。分散アプリケーション向けのブローカーなし、ソケットベースのメッセージングパターンを提供。


**[⬆ 目次へ戻る](#contents)**

### ロボティックプロセスオートメーション <a id="robotic-process-automation"></a>
*ロボティックプロセスオートメーションの目的、機能、適用範囲を説明する概要です。*
- [Automation Anywhere](https://www.automationanywhere.com/) - 高度なRPA機能によりビジネスプロセスを最適化し、エラーを減少させるスマートな自動化エコシステム。
- [Blue Prism](https://www.blueprism.com/products/intelligent-rpa-automation/) - ノーコードプラットフォーム。強固でスケーラブルな自動化を提供し、手動タスクを最小限に抑え、生産性を向上。
- [OpenRPA (⭐3k)](https://github.com/open-rpa/openrpa) - 企業レベルのオープンソースロボティックプロセス自動化ソリューション。
- [Robot Framework (⭐11k)](https://github.com/robotframework/robotframework) - オープンソースの自動化フレームワークで、人間が使いやすいキーワード構文を備え、技術者や非技術者もコスト効率よくテストスクリプトを作成し、ビジネスプロセスを自動化できる。Web、API、モバイル、データベースの自動化を、豊富なライブラリと統合によりサポート。
- [TagUI (⭐6.3k)](https://github.com/aisingapore/TagUI) - 20以上の言語で自然言語によるスクリプトを用いるオープンソースRPAツールで、非プログラマでもウェブ、デスクトップ、データタスクの自動化が可能であり、PythonやRを介してAI/ML機能を統合し、知能あるプロセス自動化を実現。
- [Tungsten RPA](https://www.tungstenautomation.com/products/rpa) - AIを活用したノコード自動化ソリューションで、ワークフロー全体の正確性、効率性、コンプライアンスを向上させる。
- [UiPath](https://www.uipath.com/product) - 包括的なRPAプラットフォームで、日常的なタスクを自動化し、企業全体のスケーラブルなデジタルトランスフォーメーションを実現。
- [WorkFusion](https://www.workfusion.com/platform/) - 企業向け自動化ソリューションで、RPAと知能ある自動化を組み合わせ、複雑なワークフローを効率化。


**[⬆ 目次へ戻る](#contents)**

### スキーマレジストリ <a id="schema-registry"></a>
*スキーマレジストリの目的、機能、適用範囲を説明する概要です。*
- [Apicurio Registry (⭐902)](https://github.com/Apicurio/apicurio-registry) - API設計およびスキーマのオープンソースリジストで、Avro、Protobuf、JSON Schema、OpenAPI、AsyncAPIのアーテファクトをサポートし、設定可能な互換性ルールを提供。
- [AWS Glue Schema Registry](https://docs.aws.amazon.com/glue/latest/dg/schema-registry.html) - マネージドリジストで、ストリーミングデータスキーマの検証と進化を制御し、MSK、Kinesis、Flinkと統合。
- [Azure Schema Registry](https://learn.microsoft.com/en-us/azure/event-hubs/schema-registry-overview) - Azure Event Hubsにホストされたスキーマリジストで、イベント駆動アプリケーションのスキーマ管理とガバナンスを中央集約。
- [Confluent Schema Registry (⭐2.4k)](https://github.com/confluentinc/schema-registry) - Kafkaに広く使用されているリジストで、RESTフルインターフェースとAvro、JSON Schema、Protobufスキーマの互換性チェックを提供。
- [Karapace (⭐625)](https://github.com/Aiven-Open/karapace) - Confluent Schema RegistryおよびKafka REST APIのオープンソース、即時置き換え可能なリジスト。


**[⬆ 目次へ戻る](#contents)**

### セルフサービス統合 <a id="self-service-integration"></a>
*セルフサービス統合の目的、機能、適用範囲を説明する概要です。*

- [Activepieces (⭐23k)](https://github.com/activepieces/activepieces) - オープンソースで、セルフホスト可能な自動化プラットフォームで、ノコード視覚ビルダーと数百のコネクタ（"ピース"）を備え、Zapierの代替として位置づけている。
- [Automatisch (⭐13k)](https://github.com/automatisch/automatisch) - オープンソースのビジネス自動化ツールで、人気サービスを接続し、第三者にデータを共有しない。
- [Huginn (⭐49k)](https://github.com/huginn/huginn) - サービスの監視を行い、あなたの代わりに行動するエージェントを構築できるセルフホストシステムで、IFTTTのハッキング版のようなもの。
- [IFTTT](https://ifttt.com/) - ウェブサービスをシンプルな条件文で接続できる使いやすいプラットフォームで、カスタムワークフローの作成を可能にする。
- [Make (Integromat)](https://www.make.com) - 低コード自動化ツールで、視覚インターフェース、高度なデータ変換、モジュラーワークフローの実行を備える。
- [Microsoft Power Automate](https://powerautomate.microsoft.com) - クラウドベースのサービスで、直感的なインターフェースにより、さまざまなアプリをスムーズに統合する自動化ワークフローを作成できる。
- [n8n (⭐200k)](https://github.com/n8n-io/n8n) - 400以上のコネクタを備えたオープンソースワークフロー自動化ツールで、データと統合の完全なコントロールを提供。
- [Node-RED (⭐23k)](https://github.com/node-red/node-red) - 低コード、フローベースのプログラミングツールで、ブラウザベースの視覚エディタでハードウェアデバイス、API、オンラインサービスを接続する。
- [Pipedream (⭐11k)](https://github.com/PipedreamHQ/pipedream) - 開発者中心の統合プラットフォームで、Node.js、Python、Go、Bashのコードレベル制御を備えた数千の事前構築されたトリガーとアクションを組み合わせる。
- [Zapier](https://zapier.com/) - 数百のウェブサービスを接続できる直感的なプラット窓で、効率的かつコードなしの自動化を実現。


**[⬆ 目次へ戻る](#contents)**

### ストリーム処理 <a id="stream-processing"></a>
*ストリーム処理の目的、機能、適用範囲を説明する概要です。*
- [Apache Beam (⭐8.6k)](https://github.com/apache/beam) - バッチとストリームパイプラインに共通するプログラミングモデル。Flink、Spark、Google Cloud Dataflowなどのランナーに跨って使用可能。
- [Apache Flink (⭐26k)](https://github.com/apache/flink) - スケーラブルな分散ストリーム処理フレームワーク。状態付き計算、正確1回のセマンティクス、イベントタイム処理を実現。
- [Apache Spark (⭐43k)](https://github.com/apache/spark) - スパーカルSQLエンジンに搭載された統一された分析エンジン。Structured Streaming APIにより、スケーラブルかつ障害耐性のあるストリーム処理が可能。
- [Arroyo (⭐4.9k)](https://github.com/ArroyoSystems/arroyo) - Rustネイティブのストリーム処理エンジン。SQLでリアルタイムパイプラインを構築できるように設計されており、サーバレス環境で動作可能。
- [Bytewax (⭐2k)](https://github.com/bytewax/bytewax) - Timely Dataflowに基づくPythonストリーム処理フレーム及。PythonのエコシステムとRustのパフォーマンスを組み合わせたもの。
- [Kafka Streams](https://kafka.apache.org/documentation/streams/) - Apache Kafkaに直接上に構築されたストリームアプリケーションやマイクロサービスを構築するためのクライアントライブラリ。
- [ksqlDB (⭐314)](https://github.com/confluentinc/ksql) - Kafka上でストリーム処理アプリケーションに特化したデータベース。SQLでクエリ可能。
- [Numaflow (⭐2.8k)](https://github.com/numaproj/numaflow) - Kubernetesネイティブで、サーバレスなプラットフォーム。大量並列ストリームおよびデータ処理を可能にし、正確1回のセマンティクスと言語に依存しないユーザーコードを提供。
- [Redpanda Connect (⭐8.7k)](https://github.com/redpanda-data/connect) - システム間のデータ変換およびルーティングを行う、宣言型ストリームプロセッサおよびコンネクタツールキット（以前はBenthos）。
- [RisingWave (⭐9.2k)](https://github.com/risingwavelabs/risingwave) - イベントストリーム上のインクリメンタルなリアルタイムマテリアルビューを提供する、Postgres互換のストリーミングデータベース。


**[⬆ 目次へ戻る](#contents)**

### Webhook基盤 <a id="webhook-infrastructure"></a>
*Webhook基盤の目的、機能、適用範囲を説明する概要です。*
- [Convoy (⭐2.8k)](https://github.com/frain-dev/convoy) - リトライ、レート制限、管理ダッシュボードを備えたオープンソースのウェブホークゲートウェイ。
- [Hookdeck](https://hookdeck.com/) - ウェブホークやその他のイベントトラフィックを受信、キュー、変換、再実行するためのマネージドイベントゲートウェイ。
- [Svix (⭐3.3k)](https://github.com/svix/svix-webhooks) - ウェブホークプロバイダー向けに署名、リトライ、エンドポイント管理を処理するオープンソースサーバーを備えたウェブホーク送信サービス。


**[⬆ 目次へ戻る](#contents)**

### ワークフローエンジン <a id="workflow-engine"></a>
*ワークフローエンジンの目的、機能、適用範囲を説明する概要です。*
- [Activiti (⭐10k)](https://github.com/Activiti/Activiti) - 軽量でJava中心のBPMNエンジン。シンプルさを重視したビジネスワークフローの効率的な実行を可能にする。
- [Apache Airflow (⭐46k)](https://github.com/apache/airflow) - プログラムでワークフローを構築・スケジュール・監視できるプラットフォーム。複雑なデータパイプラインの管理に最適。
- [Argo Workflows (⭐16k)](https://github.com/argoproj/argo-workflows) - Kubernetesベースのクラウドネイティブ環境で並列ジョブをオーケストレーションするためのコンテナネイティブワークフローエンジン。
- [AWS Step Functions](https://aws.amazon.com/step-functions/) - AWSサービスおよびカスタムロジックを視覚的なステートマシンワークフローに組み合わせるためのサーバレスオーケストレーションサービス。
- [Azkaban (⭐4.5k)](https://github.com/azkaban/azkaban) - 大規模データ処理環境におけるジョブの依存関係を管理するための分散スケジューラ。
- [Bonita (⭐174)](https://github.com/bonitasoft/bonita-engine) - Postgres互換のストリーミングデータベース。
- [Cadence (⭐9.4k)](https://github.com/uber/cadence) - オープンソースのBPMNエンジン。デザイナーインターフェースを備え、複雑なビジネスプロセスの構築と自動化が可能。
- [Camunda (⭐4.2k)](https://github.com/camunda/camunda) - Zeebeエンジンに構築された、水平スケーリングが可能なプロセスオーケストレーションプラットフォームで、完全なBPMNおよびDMNサポートを備えている。
- [Conductor (⭐32k)](https://github.com/conductor-oss/conductor) - Netflixで元々開発された、現在は元のリポジトリがアーカイブされた後、コミュニティが維持している、持続可能なワークフローオーケストレーションエンジン。
- [Dagster (⭐15k)](https://github.com/dagster-io/dagster) - データオーケストレータで、データパイプラインの構築と観察を行うための宣言型、資産ベースのプログラミングモデルを備えている。
- [Elsa Core (⭐7.8k)](https://github.com/elsa-workflows/elsa-core) - .NET Coreライブラリで、アプリケーションにシームレスに統合され、ワークフローの実行と管理が可能になる。
- [Flowable (⭐9.4k)](https://github.com/flowable/flowable-engine) - 企業のワークフローを自動化・スケーリングするための、コンパクトかつ効率的なオープンソースエンジンセット。
- [Google Cloud Workflows](https://cloud.google.com/workflows) - サーバレスオーケストレーションにより、Google CloudサービスとHTTPベースのAPIを信頼性の高い、状態を持つワークフローに統合する。
- [Inngest (⭐5.7k)](https://github.com/inngest/inngest) - 既存サービス内で信頼性の高いステップ関数を実行する、イベント駆動型の持続可能な実行プラットフォーム。
- [jBPM (⭐1.7k)](https://github.com/kiegroup/jbpm) - ビジネスプロセスおよび意思決定の自動化に加え、強固なワークフロー管理機能を備えた包括的なツールキット。
- [Kestra (⭐27k)](https://github.com/kestra-io/kestra) - イベント駆動型の宣言型オーケストレータで、ワークフローはYAMLで定義され、データおよびインフラ自動化に数百のプラグインを備えている。
- [LittleHorse (⭐392)](https://github.com/littlehorse-enterprises/littlehorse) - Kafka Streamsに構築された、高スループット・低遅延のマイクロサービスオーケストレーションエンジンで、複数の言語にSDKを提供。
- [Prefect (⭐23k)](https://github.com/PrefectHQ/prefect) - データパイプラインおよび複雑なワークフローに最適化された、現代的で開発者フレンドリーなオーケストレーションツール。
- [Restate (⭐4.2k)](https://github.com/restatedev/restate) - 持続可能な実行エンジンで、頑健なワークフロー、イベント駆動型サービス、状態を持つハンドラーをシンプルなコードとして構築可能。
- [StackStorm (⭐6.5k)](https://github.com/StackStorm/st2) - センサー、トリガー、ワークフローを組み合わせた強固な自動化エンジンで、複雑なITプロセスをオーケストレーション。
- [Temporal (⭐22k)](https://github.com/temporalio/temporal) - 信頼性・スケーラビリティ・障害耐性を備えたアプリケーション開発に特化した、ワークフ連携コードプラットフォーム。
- [Windmill (⭐17k)](https://github.com/windmill-labs/windmill) - Python、TypeScript、Goなどによるスクリプトをワークフロー、内部UI、スケジュールジョブに変換するオープンソース開発プラットフォーム。


**[⬆ 目次へ戻る](#contents)**

## 統合パターン <a id="integration-patterns"></a>
*統合パターンの目的、機能、適用範囲を説明する概要です。*
### エンタープライズ統合パターン <a id="enterprise-integration-patterns"></a>
*エンタープライズ統合パターンの目的、機能、適用範囲を説明する概要です。*
- [Aggregator](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Aggregator.html) - 個別のが関連するメッセージの結果をどう組み合わせれば、それらを全体として処理できるか？
- [Canonical Data Model](https://www.enterpriseintegrationpatterns.com/patterns/messaging/CanonicalDataModel.html) - 異なるデータフォーマットを使用するアプリケーションを統合する際に、依存関係を最小限に抑える方法は？
- [Channel Adapter](https://www.enterpriseintegrationpatterns.com/patterns/messaging/ChannelAdapter.html) - アプリケーションをメッセージシステムに接続し、メッセージを送受信できるようにする方法は？
- [Channel Purger](https://www.enterpriseintegrationpatterns.com/patterns/messaging/ChannelPurger.html) - メッセージチャンネルに残る「余り」メッセージがテストや実行中のシステムを妨げないよう、どう保つか？
- [Claim Check](https://www.enterpriseintegrationpatterns.com/patterns/messaging/StoreInLibrary.html) - システム間で送信されるメッセージのデータ量を減らすが、情報内容を損なわない方法は？
- [Command Message](https://www.enterpriseintegrationpatterns.com/patterns/messaging/CommandMessage.html) - メッセージを用いて、別のアプリケーション内のプロシージャを呼び出す方法は？
- [Competing Consumers](https://www.enterpriseintegrationpatterns.com/patterns/messaging/CompetingConsumers.html) - メッセージクライアントが複数のメッセージを同時に処理できる方法は？
- [Composed Message Processor](https://www.enterpriseintegrationpatterns.com/patterns/messaging/DistributionAggregate.html) - 複数の要素から構成されたメッセージを処理する際、それぞれの要素が異なる処理を必要とする場合に、全体のメッセージフローを維持する方法は？
- [Content Enricher](https://www.enterpriseintegrationpatterns.com/patterns/messaging/DataEnricher.html) - メッセージの発信者が必要なデータ項目すべてを用意できない場合、他のシステムとどのように通信するか？
- [Content Filter](https://www.enterpriseintegrationpatterns.com/patterns/messaging/ContentFilter.html) - 大きなメッセージの中から特定のデータ項目だけを扱いたい場合、その処理を簡略化する方法は？
- [Content-Based Router](https://www.enterpriseintegrationpatterns.com/patterns/messaging/ContentBasedRouter.html) - 1つの論理関数（例：在庫確認）の実装が複数の物理システムに分散されている場合、どのように対応するか？
- [Control Bus](https://www.enterpriseintegrationpatterns.com/patterns/messaging/ControlBus.html) - 複数のプラットフォームおよび広い地理的範囲にわたるメッセージシステムを効果的に管理する方法は？
- [Correlation Identifier](https://www.enterpriseintegrationpatterns.com/patterns/messaging/CorrelationIdentifier.html) - 応答を受け取ったリクエスターは、その応答がどのリクエストに対応するかをどのように判別するか？
- [Datatype Channel](https://www.enterpriseintegrationpatterns.com/patterns/messaging/DatatypeChannel.html) - アプリケーションがデータ項目を送信する際に、受信側がそれをどのように処理するかを認識できるようにする方法は？
- [Dead Letter Channel](https://www.enterpriseintegrationpatterns.com/patterns/messaging/DeadLetterChannel.html) - メッセージを配達できない場合、メッセージシステムはどのように対応するか？
- [Detour](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Detour.html) - 検証、テスト、デバッグなどの機能を中間ステップを通じて実行するために、メッセージをルートする方法は？
- [Document Message](https://www.enterpriseintegrationpatterns.com/patterns/messaging/DocumentMessage.html) - アプリケーション間のデータを転送するためにメッセージをどのように使用するか？
- [Durable Subscriber](https://www.enterpriseintegrationpatterns.com/patterns/messaging/DurableSubscription.html) - アプリケンスがメッセージを受信していない間、メッセージを漏らさないための方法は？
- [Dynamic Router](https://www.enterpriseintegrationpatterns.com/patterns/messaging/DynamicRouter.html) - ルーターがすべての可能な宛先に依存しないようにし、同時に効率性を維持する方法は？
- [Envelope Wrapper](https://www.enterpriseintegrationpatterns.com/patterns/messaging/EnvelopeWrapper.html) - 既存のシステムが、メッセージフォーマットに特定の要件（例：メッセージヘッダー項目や暗号化）を課すメッセージ交換に参加できる方法は？
- [Event Message](https://www.enterpriseintegrationpatterns.com/patterns/messaging/EventMessage.html) - 1つのアプリケーションから別のアプリケーションへイベントを伝送するためにメッセージをどのように使用するか？
- [Event-Driven Consumer](https://www.enterpriseintegrationpatterns.com/patterns/messaging/EventDrivenConsumer.html) - アプリケーションがメッセージが可用になった際に自動的にメッセージを消費できるようにする方法は？
- [Format Indicator](https://www.enterpriseintegrationpatterns.com/patterns/messaging/FormatIndicator.html) - メッセージのデータフォーマットを設計する際、将来の変更を考慮できるようにする方法は？
- [Guaranteed Delivery](https://www.enterpriseintegrationpatterns.com/patterns/messaging/GuaranteedMessaging.html) - 送信者がメッセージがメッセージシステムに失敗した場合でも、メッセージが配達されることを保証する方法は？
- [Idempotent Receiver](https://www.enterpriseintegrationpatterns.com/patterns/messaging/IdempotentReceiver.html) - メッセージ受信者が重複したメッセージをどのように扱うか？
- [Invalid Message Channel](https://www.enterpriseintegrationpatterns.com/patterns/messaging/InvalidMessageChannel.html) - メッセージ受信側が意味のないメッセージを受信したとき、どのようにして丁寧に処理できるか？
- [Message](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Message.html) - メッセージチャネルで接続された2つのアプリケーションが、情報のやり取りを行う方法は？
- [Message Dispatcher](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageDispatcher.html) - 1つのチャネルに接続された複数の消費者が、メッセージ処理をどのように協調できるか？
- [Message Expiration](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageExpiration.html) - 送信側が、メッセージが古くなった（陳腐になった）と判断するタイミングをどのように示せるか？
- [Message Translator](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageTranslator.html) - データフォーマットが異なるシステム間で、メッセージを使ってどのように通信できるか？
- [Message Broker](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageBroker.html) - メッセージの受信先を送信側から分離し、メッセージの流れを中央で制御できる方法は？
- [Message Bus](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageBus.html) - アプリケーション間が分離された状態で協働できるアーキテクチャはどのようなものか？アプリケーションを簡単に追加・削除できるようにし、他のアプリケーションに影響を与えないようにする方法は？
- [Message Channel](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageChannel.html) - 1つのアプリケーションが別のアプリケ或をメッセージを使ってどのように通信できるか？
- [Message Endpoint](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageEndpoint.html) - アプリケーションがメッセージチャネルに接続して、メッセージを送受信できる方法は？
- [Message Filter](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Filter.html) - コンポーネントが興味のないメッセージを受信しないようにする方法は？
- [Message History](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageHistory.html) - 緩い結合のシステムにおけるメッセージの流れを効果的に分析・デバッグできる方法は？
- [Message Router](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageRouter.html) - 個別の処理ステップを分離し、条件に応じてメッセージを異なるフィルタに渡す方法は？
- [Message Sequence](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageSequence.html) - メッセージが任意の大きさのデータを伝送できる方法は？
- [Message Store](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageStore.html) - メッセージ情報に対して報告を行うことのできる方法は？メッセージの緩い結合性と一時性を損なわないようにする方法は？
- [Messaging Bridge](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessagingBridge.html) - 複数のメッセージシステムを接続し、あるシステムに存在するメッセージが他のシステムにも存在するようにする方法は？
- [Messaging Gateway](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessagingGateway.html) - アプリケーションの他の部分からメッセージシステムへのアクセスをどのように封じ込めるか？
- [Messaging Mapper](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessagingMapper.html) - ドメインオブジェクトとメッセージインフラストラクチャの間のデータをどのように移動させるか？また、両者を独立に保つ方法は？
- [Normalizer](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Normalizer.html) - 意味的に同等なメッセージが、異なるフォーマットで到着する場合、どのように処理できるか？
- [Pipes and Filters](https://www.enterpriseintegrationpatterns.com/patterns/messaging/PipesAndFilters.html) - メッセージに対して複雑な処理を行うことができるが、独立性と柔軟性を維持できる方法は？
- [Point-to-Point Channel](https://www.enterpriseintegrationpatterns.com/patterns/messaging/PointToPointChannel.html) - 呼び出し側が、正確に1つの受信者にドキュメントや呼び出しを送信・実行できるようにする方法は？
- [Polling Consumer](https://www.enterpriseintegrationpatterns.com/patterns/messaging/PollingConsumer.html) - アプリケーションが準備ができているときにメッセージを消費する方法は？
- [Process Manager](https://www.enterpriseintegrationpatterns.com/patterns/messaging/ProcessManager.html) - 必要な処理ステップが設計時には不明であり、順序も必ずしも連続でない場合に、メッセージを複数の処理ステップを通じてルートする方法は？
- [Publish-Subscribe Channel](https://www.enterpriseintegrationpatterns.com/patterns/messaging/PublishSubscribeChannel.html) - 送信者がすべての関心を持つ受信者にイベントをブロードキャストする方法は？
- [Recipient List](https://www.enterpriseintegrationpatterns.com/patterns/messaging/RecipientList.html) - メッセージを動的に指定された受信者リストにルートする方法は？
- [Request-Reply](https://www.enterpriseintegrationpatterns.com/patterns/messaging/RequestReply.html) - アプリケーションがメッセージを送信したとき、受信者から応答を取得する方法は？
- [Resequencer](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Resequencer.html) - 複数の要素を含むメッセージが関連性はあるが順序がずれている場合、正しい順序に戻すためのストリームを取得する方法は？
- [Return Address](https://www.enterpriseintegrationpatterns.com/patterns/messaging/ReturnAddress.html) - 応答を送る際、リプレイアがどこに送るべきかをどう知るか？
- [Routing Slip](https://www.enterpriseintegrationpatterns.com/patterns/messaging/RoutingTable.html) - 設計時には処理ステップの順序が不明であり、各メッセージごとに異なる場合に、メッセージを連続的に処理ステップを通じてルートする方法は？
- [Scatter-Gather](https://www.enterpriseintegrationpatterns.com/patterns/messaging/BroadcastAggregate.html) - メッセージを複数の受信者に送信し、それぞれが応答を送る必要がある場合、全体のメッセージフローを維持する方法は？
- [Selective Consumer](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessageSelector.html) - メッセージ消費者が受け取るべきメッセージをどれを選ぶかをどう決定するか？
- [Service Activator](https://www.enterpriseintegrationpatterns.com/patterns/messaging/MessagingAdapter.html) - アプリケーションが、さまざまなメッセージング技術および非メッセージング技術を介してサービスを呼び出すように設計する方法は？
- [Smart Proxy](https://www.enterpriseintegrationpatterns.com/patterns/messaging/SmartProxy.html) - サービスが要請者の指定したリターンアドレスに応答メッセージを公開する場合、メッセージのトレースをどう行うか？
- [Splitter](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Sequencer.html) - メッセージに複数の要素が含まれており、それぞれが異なる方法で処理が必要な場合、そのメッセージをどう処理するか？
- [Test Message](https://www.enterpriseintegrationpatterns.com/patterns/messaging/TestMessage.html) - しかし、コンポーネントがメッセージを積極的に処理している際に、内部の障害により送信メッセージが誤って生成される場合、どうなるか？
- [Transactional Client](https://www.enterpriseintegrationpatterns.com/patterns/messaging/TransactionalClient.html) - クライアントがメッセージングシステムとの取引をどう制御するか？
- [Wire Tap](https://www.enterpriseintegrationpatterns.com/patterns/messaging/WireTap.html) - 点対点チャネルを通じて移動するメッセージをどう確認するか？


**[⬆ 目次へ戻る](#contents)**

### 統合アーキテクチャパターン <a id="integration-architecture-patterns"></a>
*統合アーキテクチャパターンの目的、機能、適用範囲を説明する概要です。*
- [API-led Connectivity pattern](https://github.com/chanakaudaya/solution-architecture-patterns/blob/master/vendor-neutral/API-led-Connectivity-Pattern.md) - 異なるシステムとアプリケーションをAPIで接続する。
- [Anti Corruption Layer Pattern](https://github.com/chanakaudaya/solution-architecture-patterns/blob/master/vendor-neutral/Anti-Corruption-Layer-Pattern.md) - システム間のデータを隔離し、変換するための層を追加する。
- [Change Data Capture Pattern](https://github.com/chanakaudaya/solution-architecture-patterns/blob/master/vendor-neutral/Introduction-to-Change-Data-Capture.md) - データベースまたはデータソースの変更をリアルタイムでキャプチャし、伝播する。
- [Hybrid API Management pattern](https://github.com/chanakaudaya/solution-architecture-patterns/blob/master/vendor-neutral/Hybrid-API-Management-Pattern.md) - クラウドとオンプレミス環境を横断するAPIを、中央制御平面で管理する。
- [Hybrid Integration pattern](https://github.com/chanakaudaya/solution-architecture-patterns/blob/master/vendor-neutral/Hybrid-Integration-Pattern.md) - オンプレミスおよびクラウドにデプロイされたシステムとアプリケーションを、統合技術の組み合わせにより統合する。


**[⬆ 目次へ戻る](#contents)**

### マイクロサービスAPIパターン <a id="microservice-api-patterns"></a>
*マイクロサービスAPIパターンの目的、機能、適用範囲を説明する概要です。*
- Foundation
    - [Frontend Integration](https://microservice-api-patterns.org/patterns/foundation/FrontendIntegration) - クライアント側のエンドユーザーインターフェースがサーバー側のビジネスロジックおよびデータストレージと物理的に分離されている場合、計算結果、データソース内の検索結果セット、およびデータエンティティに関する詳細情報をどのようにフィルタリングし、更新するか？アプリケーションフロントエンドがバックエンドにアクティビティを呼び出し、データをアップロードする方法は？
    - [Backend Integration](https://microservice-api-patterns.org/patterns/foundation/BackendIntegration) - 独立して構築され、別々にデプロイされた分散アプリケーションおよびその部分が、システム内部の概念的整合性を維持しつつ、不要な結合を導入せずに、データを交換し、相互のアクティビティをトリガーする方法は？
    - [Public API](https://microservice-api-patterns.org/patterns/foundation/PublicAPI) - 組織外に存在する、グローバル・ナショナル・および／または地域的に分散された、無限および／または不明な数のAPIクライアントにAPIを提供する方法は？
    - [Community API](https://microservice-api-patterns.org/patterns/foundation/CommunityAPI) - APIの可視性およびアクセスを、単一の組織単位ではなく、複数の法的実体（企業、非営利／非政府組織、政府など）にわたる閉鎖されたユーザーグループに制限する方法は？
    - [Solution-Internal API](https://microservice-api-patterns.org/patterns/foundation/SolutionInternalAPI) - APIへのアクセスおよび使用を、アプリケーション（たとえば、同じまたは別の論理層および／または物理階層のコンポーネント）に限定する方法は？
    - [API Description](https://microservice-api-patterns.org/patterns/foundation/APIDescription) - APIプロバイダーとそのクライアントの間で、どのような知識を共有すべきか？その知識をどのように文書化すべきか？

- Responsibility
    - Endpoint Roles
        - [Processing Resource](https://microservice-api-patterns.org/patterns/responsibility/endpointRoles/ProcessingResource) - APIプロバイダーが、そのクライア及にアクションをトリガーさせる方法は？
        - [Information Holder Resource](https://microservice-api-patterns.org/patterns/responsibility/endpointRoles/InformationHolderResource) - ドメインデータをAPIに公開するが、その実装を隠す方法は？APIがデータエンティティを公開し、APIクライアントがこれらのエンティティを同時にアクセス・または変更できるようにし、データの整合性と品質を損なわない方法は？
    - Operation Responsibilities
        - [State Creation Operation](https://microservice-api-patterns.org/patterns/responsibility/operationResponsibilities/StateCreationOperation) - APIプロバイダーが、そのプロバイダーが知らなければならないイベントをクライアントが報告できるようにする方法は？
        - [Retrieval Operation](https://microservice-api-patterns.org/patterns/responsibility/operationResponsibilities/RetrievalOperation) - 遠隔側の当事者（APIプロバイダー）から入手可能な情報を、エンドユーザーの情報ニーズを満たすために、またはさらにクライアント側の処理を可能にするために取得する方法は？
        - [State Transition Operation](https://microservice-api-patterns.org/patterns/responsibility/operationResponsibilities/StateTransitionOperation) - クライアントが処理アクションを開始し、プロバイダー側のアプリケーション状態を変更する方法は？APIクライアントとAPIプロバイダーが、ビジネスプロセスおよびそのアクティビティの実行と制御に必要な責任を共有する方法は？
        - [Computation Function](https://microservice-api-patterns.org/patterns/responsibility/operationResponsibilities/ComputationFunction) - クライアントがプロバイダー側で、入力から結果を計算するための副作用のないリモート処理を呼び出す方法は？
    - Information Holder Types
        - [Operational Data Holder](https://microservice-api-patterns.org/patterns/responsibility/informationHolderEndpointTypes/OperationalDataHolder) - APIが、業務データを表すドメインエンティティのインスタンスを生成・読み取り・更新・削除できるようにする方法は？業務データは短命で、日々の業務運営中に頻繁に変化し、多数の外部関係を持つ。
        - [Master Data Holder](https://microservice-api-patterns.org/patterns/responsibility/informationHolderEndpointTypes/MasterDataHolder) - 長期間にわたって存在し、頻繁に変化せず、多数のクライアントから参照されるマスターデータにアクセスできるAPIを設計する方法は？
        - [Reference Data Holder](https://microservice-api-patterns.org/patterns/responsibility/informationHolderEndpointTypes/ReferenceDataHolder) - 多数の場所で参照され、長期間にわたって存在し、クライアントに対して変更不可能なデータは、APIエンドポイントにおいてどのように扱うべきか？このような参照データは、処理リソースまたは情報保持リソースへのリクエストおよび応答においてどのように使用されるか？
        - [Link Lookup Resource](https://microservice-api-patterns.org/patterns/responsibility/informationHolderEndpointTypes/LinkLookupResource) - メッセージ表現が、他の、おそらく多数かつ頻繁に変化するAPIエンドポイントおよび操作を参照することができるが、メッセージ受信者をこれらのエンドポイントの実際のアドレスに結合しない方法は？
        - [Data Transfer Resource](https://microservice-api-patterns.org/patterns/responsibility/informationHolderEndpointTypes/DataTransferResource) - 2つ以上の通信参加者が、互いに知らず、同時に利用可能ではない、かつデータが受信者に知られることの前にすでに送信された場合でも、データを交換する方法は？
- Structure
    - Representation Elements
        - [Atomic Parameter](https://microservice-api-patterns.org/patterns/structure/representationElements/AtomicParameter) - APIクライアントとAPIプロバイダー間で、シンプルかつ非構造化データ（数値、文字列、ブール値、またはバイナリデータのブロック）をどのように交換するか？
        - [Atomic Parameter List](https://microservice-api-patterns.org/patterns/structure/representationElements/AtomicParameterList) - 複数の関連する原子パラメータを、表現要素に組み合わせることで、それぞれがシンプルなままに保ちつつ、その関連性をAPIの説明および実行時のメッセージ交換において明確に示す方法は？
        - [Parameter Tree](https://microservice-api-patterns.org/patterns/structure/representationElements/ParameterTree) - 複雑な表現要素を定義し、実行時におけるその関連要素を交換する際に、包含関係をどのように表現できるか？
        - [Parameter Forest](https://microservice-api-patterns.org/patterns/structure/representationElements/ParameterForest) - 複数のパラメータツリーをAPI操作のリクエストまたはレスポンスペイロードとしてどのように公開できるか？
    - Element Stereotypes
        - [Data Element](https://microservice-api-patterns.org/patterns/structure/elementStereotypes/DataElement) - APIクライアントとAPIプロバイダー間で、プロバイダー内部のデータ定義を公開せずに、ドメイン／アプリケーションレベルの情報をどのように交換できるか？APIクライアントとプロバイダーは、データ管理の観点からどのように解離できるか？
        - [Metadata Element](https://microservice-api-patterns.org/patterns/structure/elementStereotypes/MetadataElement) - メッセージに追加情報を付加することで、受信側がメッセージの内容を正しく解釈できるようにし、データの意味に関する前提をハードコードせずに実現する方法は？
        - [Id Element](https://microservice-api-patterns.org/patterns/structure/elementStereotypes/IdElement) - 設計時および実行時において、API要素をどう区別できるか？ドメインドリブンデザインを適用する場合、公開言語の要素をどのように特定できるか？
        - [Link Element](https://microservice-api-patterns.org/patterns/structure/elementStereotypes/LinkElement) - APIエンドポイントおよび操作を、リクエストおよびレスポンスメッセージペイロードに参照させることで、リモートで呼び出せるようにする方法は？
    - Special Purpose Representations
        - [API Key](https://microservice-api-patterns.org/patterns/structure/specialPurposeRepresentations/APIKey) - APIプロバイダーがクライアントおよびそのリクエストをどのように識別・認証できるか？
        - [Error Report](https://microservice-api-patterns.org/patterns/structure/specialPurposeRepresentations/ErrorReport) - APIプロバイダーがクライア及処理の障害についてクライアントに通知する方法は？この情報は、どの通信技術やプラットフォーム（たとえば、プロトコルレベルのヘッダーによるステータスコード）に依存せずに、どのように独立させられるか？
        - [Context Representation](https://microservice-api-patterns.org/patterns/structure/specialPurposeRepresentations/ContextRepresentation) - API消費者とプロバイダーが、特定のリモートプロトコルに頼らず、コンテキスト情報をどのように交換できるか？リクエストに含まれる識別情報および品質特性が、会話の次のステップにどのように見えるようになるか？
- Quality
    - Reference Management        
        - [Embedded Entity](https://microservice-api-patterns.org/patterns/quality/referenceManagement/EmbeddedEntity) - 受信側が複数の関連情報要素について洞察を必要とする場合、複数のメッセージを送信するのを回避する方法は？
        - [Linked Information Holder](https://microservice-api-patterns.org/patterns/quality/referenceManagement/LinkedInformationHolder) - APIが複数の相互参照する情報要素を扱う場合でも、メッセージのサイズを小さく保つ方法は？
    - Data Transfer Parsimony        
        - [Pagination](https://microservice-api-patterns.org/patterns/quality/dataTransferParsimony/Pagination) - APIプロバイダーが、クライアントを過剰に負担させないよう、大量の構造化データを順次提供する方法は？
        - [Wish List](https://microservice-api-patterns.org/patterns/quality/dataTransferParsimony/WishList) - APIクライアントが実行時において、関心のあるデータをAPIプロバイダーに通知する方法は？
        - [Wish Template](https://microservice-api-patterns.org/patterns/quality/dataTransferParsimony/WishTemplate) - APIクライアントが関心のあるネストデータをAPIプロバイダーに通知する方法は？このような好みを柔軟かつ動的に表現する方法は？
        - [Conditional Request](https://microservice-api-patterns.org/patterns/quality/dataTransferParsimony/ConditionalRequest) - 頻繁に呼び出されるAPI操作が、ほとんど変化しないデータを返す場合、不要なサーバー側処理および帯域使用を回避する方法は？
        - [Request Bundle](https://microservice-api-patterns.org/patterns/quality/dataTransferParsimony/RequestBundle) - リクエストとレスポンスの数を減らして、通信効率を高める方法は？

    - Quality Management and Governance        
        - [Pricing Plan](https://microservice-api-patterns.org/patterns/quality/qualityManagementAndGovernance/PricingPlan) - APIプロバイダーがAPIサービスの消費量を計測し、それに費用を請求する方法は？
        - [Rate Limit](https://microservice-api-patterns.org/patterns/quality/qualityManagementAndGovernance/RateLimit) - APIプロバイダーがAPIクライアントの過剰なAPI使用を防止する方法は？
        - [Service Level Agreement](https://microservice-api-patterns.org/patterns/quality/qualityManagementAndGovernance/ServiceLevelAgreement) - APIクライアントがAPIおよびそのエンドポイント操作の特定の品質サービス特性を学習する方法は？これらの特性およびそれらを満たさない場合の影響を、測定可能な形で定義・伝達する方法は？

- Evolution
    - [Version Identifier](https://microservice-api-patterns.org/patterns/evolution/VersionIdentifier) - APIプロバイダーが、現在の機能を示すとともに、クライアントに不適合な変更が存在する可能性を示し、クライアントの誤解による機能障害を防止する方法は？
    - [Semantic Versioning](https://microservice-api-patterns.org/patterns/evolution/SemanticVersioning) - ステークホルダーがAPIのバージョンを比較し、即座に互換性があるかどうかを検出できる方法は？
    - [Two In Production](https://microservice-api-patterns.org/patterns/evolution/TwoInProduction) - プロバイダーが既存のクライアントを破壊せずに、かつ大量のAPIバージョンを運用せずに、APIを徐々に更新できる方法は？
    - [Aggressive Obsolescence](https://microservice-api-patterns.org/patterns/evolution/AggressiveObsolescence) - APIプロバイダーが、全体のAPIまたはその部分（エンドポイント、操作、メッセージの表現など）を維持する際の負担を減らす方法は？
    - [Experimental Preview](https://microservice-api-patterns.org/patterns/evolution/ExperimentalPreview) - プロバイダーが、新しいAPIまたは新しいAPIバージョンの導入をクライアントにとってリスクを低減し、API設計を早期に凍結せずに早期採用者のフィードバックを得られる方法は？
    - [Limited Lifetime Guarantee](https://microservice-api-patterns.org/patterns/evolution/LimitedLifetimeGuarantee) - プロバイダーが、クライアントが公開されたAPIバージョンに頼ることができる期間を明確に伝える方法は？
    - [Eternal Lifetime Guarantee](https://microservice-api-patterns.org/patterns/evolution/EternalLifetimeGuarantee) - プロバイダーが、すべての新しいAPIバージョンへの移行を無理または拒否しているクライアントを支援できる方法は？


**[⬆ 目次へ戻る](#contents)**

### SOAパターン <a id="soa-patterns"></a>
*SOAパターンの目的、機能、適用範囲を説明する概要です。*
- Foundational Inventory Patterns
   - [Canonical Protocol](https://patterns.arcitura.com/soa-patterns/design_patterns/canonical_protocol) - サービス間の共通の通信プロトコルを定義し、相互運用性と解耦を実現する。
   - [Canonical Schema](https://patterns.arcitura.com/soa-patterns/design_patterns/canonical_schema) - サービス間のデータ交換に用いる標準データモデルとフォーマットを定義する。
   - [Domain Inventory](https://patterns.arcitura.com/soa-patterns/design_patterns/domain_inventory) - 特定のドメイン内のサービスの種類を特定し、分類する。
   - [Enterprise Inventory](https://patterns.arcitura.com/soa-patterns/design_patterns/enterprise_inventory) - 特定のドメイン内のサービスを一元的に管理する企業全体のサービスインベントリを構築し、再利用と再構成を最大化する。
   - [Logic Centralization](https://patterns.arcitura.com/soa-patterns/design_patterns/logic_centralization) - ビジネスロジックをサービスレイヤーに集中させることで、冗長性を減らし、一貫性を促進する。
   - [Service Layers](https://patterns.arcitura.com/soa-patterns/design_patterns/service_layers) - サービスを、内部に包むロジックの種類に基づいて論理的な層に分類する。
   - [Service Normalization](https://patterns.arcitura.com/soa-patterns/design_patterns/service_normalization) - インベントリ内のサービス境界が重複しないように確保し、冗長な機能を回避する。

- Logical Inventory Layer Patterns
   - [Entity Abstraction](https://patterns.arcitura.com/soa-patterns/design_patterns/entity_abstraction) - データエンティティを抽象化し、データアクセスを簡素化し、結合を減らす。
   - [Process Abstraction](https://patterns.arcitura.com/soa-patterns/design_patterns/process_abstraction) - プロセスを抽象化し、再利用性と維持性を向上させる。
   - [Utility Abstraction](https://patterns.arcitura.com/soa-patterns/design_patterns/utility_abstraction) - 共通のユーティリティを抽象化し、重複を減らし、一貫性を促進する。
   - [Micro Task Abstraction](https://patterns.arcitura.com/soa-patterns/design_patterns/micro_task_abstraction) - タスクをより細かく、粒度の高いタスクに分割し、管理を容易にする。

- Inventory Centralization Patterns
   - [Policy Centralization](https://patterns.arcitura.com/soa-patterns/design_patterns/policy_centralization) - ポリシーを集中させることで、重複を減らし、一貫性を向上させる。
   - [Process Centralization](https://patterns.arcitura.com/soa-patterns/design_patterns/process_centralization) - プロセスを集中させることで、再利用性と維持性を向上させる。
   - [Rules Centralization](https://patterns.arcitura.com/soa-patterns/design_patterns/rules_centralization) - ビジネスルールを集中させることで、重複を減らし、一貫性を促進する。
   - [Schema Centralization](https://patterns.arcitura.com/soa-patterns/design_patterns/schema_centralization) - データスキーマを中央化することで、重複を減らし、一貫性を高める

- Inventory Implementation Patterns
   - [Canonical Resources](https://patterns.arcitura.com/soa-patterns/design_patterns/canonical_resources) - サービス間で共通機能を実現するための標準的なリソースセットを定義する
   - [Cross-Domain Utility Layer](https://patterns.arcitura.com/soa-patterns/design_patterns/cross_domain_utility_layer) - 複数のドメインインベントリに共有される共通ユーティリティサービスレイヤーを構築する
   - [Dual Protocols](https://patterns.arcitura.com/soa-patterns/design_patterns/dual_protocols) - サービスインベントリが2つの通信プロトコルをサポートすることで、相互運用性とパフォーマンスのバランスを取る
   - [Inventory Endpoint](https://patterns.arcitura.com/soa-patterns/design_patterns/inventory_endpoint) - インベントリリソースへのアクセスを標準化したエンドポイントを定義する
   - [Service Grid](https://patterns.arcitura.com/soa-patterns/design_patterns/service_grid) - サービスの管理およびスケーリングを実現するフレームワークを提供する
   - [State Repository](https://patterns.arcitura.com/soa-patterns/design_patterns/state_repository) - サービスの状態情報を格納・管理する
   - [Stateful Services](https://patterns.arcitura.com/soa-patterns/design_patterns/stateful_services) - サービス呼び出し間で状態情報を維持する
   - [Augmented Protocols](https://patterns.arcitura.com/soa-patterns/design_patterns/augmented_protocols) - プロトコルに追加機能を付加する

- Inventory Governance Patterns
   - [Canonical Expression](https://patterns.arcitura.com/soa-patterns/design_patterns/canonical_expression) - インベントリデータに対する標準的な表現言語を定義する
   - [Canonical Versioning](https://patterns.arcitura.com/soa-patterns/design_patterns/canonical_versioning) - インベントリリソースに対する標準的なバージョニングスキームを定義する
   - [Metadata Centralization](https://patterns.arcitura.com/soa-patterns/design_patterns/metadata_centralization) - メタデータを中央化することで、重複を減らし、一貫性を高める

- Foundational Service Patterns
   - [Agnostic Capability](https://patterns.arcitura.com/soa-patterns/design_patterns/agnostic_capability) - サービスの機能を抽象化することで、柔軟性を高める
   - [Agnostic Context](https://patterns.arcitura.com/soa-patterns/design_patterns/agnostic_context) - サービスのコンテキストを抽象化することで、柔軟性を高める
   - [Functional Decomposition](https://patterns.arcitura.com/soa-patterns/design_patterns/functional_decomposition) - サービスを小さな、より管理しやすいコンポーネントに分割する
   - [Non-Agnostic Context](https://patterns.arcitura.com/soa-patterns/design_patterns/non_agnostic_context) - 一時的に一部のサービス状態データを遅延することで、メモリおよびリソース消費を最適化する
   - [Service Encapsulation](https://patterns.arcitura.com/soa-patterns/design_patterns/service_encapsulation) - 関連性のあるデータのみを検証することで、パフォーマンスを向上させる

- Service Implementation Patterns
   - [Partial State Deferral](https://patterns.arcitura.com/soa-patterns/design_patterns/partial_state_deferral) - サービスの複数バージョンを実装することで、柔軟性を高める
   - [Partial Validation](https://patterns.arcitura.com/soa-patterns/design_patterns/partial_validation) - サービスの機能を抽象化することで、保守性を高める
   - [Redundant Implementation](https://patterns.arcitura.com/soa-patterns/design_patterns/redundant_implementation) - サービスの状態情報を一時的に遅延することで、メモリおよびリソース消費を最適化する
   - [Service Data Replication](https://patterns.arcitura.com/soa-patterns/design_patterns/service_data_replication) - 複数のサービス間でデータを複製することで、パフォーマンスを向上させる。
   - [Service Façade](https://patterns.arcitura.com/soa-patterns/design_patterns/service_facade) - 複雑なサービスに簡易なインターフェースを提供することで、使いやすさを向上させる。
   - [UI Mediator](https://patterns.arcitura.com/soa-patterns/design_patterns/ui_mediator) - ユーザーインターフェースと基盤サービスの間を中間として機能させることで、使いやすさを向上させる。
   - [Reference Data Centralization](https://patterns.arcitura.com/soa-patterns/design_patterns/reference_data_centralization) - 参照データを中央化することで、重複を減らし、一貫性を高める。
   - [Microservice Deployment](https://patterns.arcitura.com/soa-patterns/design_patterns/microservice_deployment) - サービスを独立した、自律的な単位としてデプロイすることで、スケーラビリティと耐障害性を向上させる。
   - [Containerization](https://patterns.arcitura.com/soa-patterns/design_patterns/containerization) - 高パフォーマンスの回復とスケーラビリティ要件を持つサービスに、環境が最大限のサポートを提供する方法は？

- Service Security Patterns
   - [Exception Shielding](https://patterns.arcitura.com/soa-patterns/design_patterns/exception_shielding) - 例外の適切な処理を通じて、セキュリティの脆弱性を防止する。
   - [Message Screening](https://patterns.arcitura.com/soa-patterns/design_patterns/message_screening) - メッセージに悪意のあるコンテンツをフィルタリングする。
   - [Service Perimeter Guard](https://patterns.arcitura.com/soa-patterns/design_patterns/service_perimeter_guard) - サービスの境界を守り、不正アクセスを防ぐ。
   - [Trusted Subsystem](https://patterns.arcitura.com/soa-patterns/design_patterns/trusted_subsystem) - サブシステム間の信頼を確立することで、セキュリティを向上させる。

- Service Contract Design Patterns
   - [Concurrent Contracts](https://patterns.arcitura.com/soa-patterns/design_patterns/concurrent_contracts) - サービス契約の複数バージョンが同時に存在できるようにする。
   - [Contract Centralization](https://patterns.arcitura.com/soa-patterns/design_patterns/contract_centralization) - サービス契約を中央化することで、一貫性を高め、重複を減らす。
   - [Contract Denormalization](https://patterns.arcitura.com/soa-patterns/design_patterns/contract_denormalization) - サービス契約に冗長な機能を含めるようにすることで、データ交換要件が異なる消費者に対応できる。
   - [Decoupled Contract](https://patterns.arcitura.com/soa-patterns/design_patterns/decoupled_contract) - サービス契約を実装から分離することで、柔軟性を向上させる。
   - [Validation Abstraction](https://patterns.arcitura.com/soa-patterns/design_patterns/validation_abstraction) - バリデーションロジックを抽象化することで、再利用性と維持性を向上させる。

- Legacy Encapsulation Patterns
   - [File Gateway](https://patterns.arcitura.com/soa-patterns/design_patterns/file_gateway) - 古いファイルベースシステムへのアクセスを可能にするゲートウェイを提供する。
   - [Legacy Wrapper](https://patterns.arcitura.com/soa-patterns/design_patterns/legacy_wrapper) - 古いシステムをサービスとして公開するためのラッピングを行う。
   - [Multi-Channel Endpoint](https://patterns.arcitura.com/soa-patterns/design_patterns/multi_channel_endpoint) - 古いシステムへのアクセスを提供する複数の通信チャネルを提供する。

- Service Governance Patterns
   - [Compatible Change](https://patterns.arcitura.com/soa-patterns/design_patterns/compatible_change) - サービスの変更を実行しても、既存のクライアントが破壊されないよう可能にする。
   - [Decomposed Capability](https://patterns.arcitura.com/soa-patterns/design_patterns/decomposed_capability) - サービス機能を小さな、より管理しやすい部分に分解する。
   - [Distributed Capability](https://patterns.arcitura.com/soa-patterns/design_patterns/distributed_capability) - サービス機能を小さな、より管理しやすい部分に分解する。
   - [Proxy Capability](https://patterns.arcitura.com/soa-patterns/design_patterns/proxy_capability) - リモートサービス機能へのプロキシを提供して、パフォーマンスを向上させ、ネットワークの負荷を減らす。
   - [Service Decomposition](https://patterns.arcitura.com/soa-patterns/design_patterns/service_decomposition) - 一体的なサービスを小さな、より管理しやすい部分に分解する。
   - [Service Refactoring](https://patterns.arcitura.com/soa-patterns/design_patterns/service_refactoring) - サービスの設計とパフォーマンスを改善するためにリファクタリングを行う。
   - [Termination Notification](https://patterns.arcitura.com/soa-patterns/design_patterns/termination_notification) - サービスの終了をクライアントに通知する。
   - [Version Identification](https://patterns.arcitura.com/soa-patterns/design_patterns/version_identification) - サービスのバージョンを特定する。

- Capability Composition Patterns
   - [Capability Composition](https://patterns.arcitura.com/soa-patterns/design_patterns/capability_composition) - 複数のサービス機能を組み合わせて新しい機能を生成する。
   - [Capability Recomposition](https://patterns.arcitura.com/soa-patterns/design_patterns/capability_recomposition) - 既存のサービス機能を再組み合わせて新しい機能を生成する。

- Service Messaging Patterns
   - [Asynchronous Queuing](https://patterns.arcitura.com/soa-patterns/design_patterns/asynchronous_queuing) - メッセージキューを使用してサービス間を分離し、スケーラビリティと信頼性を向上させる。
   - [Event-Driven Messaging](https://patterns.arcitura.com/soa-patterns/design_patterns/event_driven_messaging) - イベントを使用してサービス呼び出しをトリガーし、結合を減らす。
   - [Intermediate Routing](https://patterns.arcitura.com/soa-patterns/design_patterns/intermediate_routing) - 中間ルーティングノードを使用してパフォーマンスと柔軟性を向上させる。
   - [Messaging Metadata](https://patterns.arcitura.com/soa-patterns/design_patterns/messaging_metadata) - メタデータを使用してサービスメッセージを記述・管理する。
   - [Reliable Messaging](https://patterns.arcitura.com/soa-patterns/design_patterns/reliable_messaging) - 分散環境におけるメッセージの配信と信頼性を確保する。
   - [Service Agent](https://patterns.arcitura.com/soa-patterns/design_patterns/service_agent) - リモートサービスへのプロキシとして機能して、パフォーマンスを向上させ、ネットワークの負荷を減らす。
   - [Service Callback](https://patterns.arcitura.com/soa-patterns/design_patterns/service_callback) - コールバックを使用してサービス間の通信を行う。
   - [Service Instance Routing](https://patterns.arcitura.com/soa-patterns/design_patterns/service_instance_routing) - サービスインスタンスに基づいてメッセージをルーティングしてパフォーマンスとスケーラビリティを向上させる。
   - [Service Messaging](https://patterns.arcitura.com/soa-patterns/design_patterns/service_messaging) - サービス間の通信を記述する。
   - [State Messaging](https://patterns.arcitura.com/soa-patterns/design_patterns/state_messaging) - メッセージを使用して分散環境における状態情報を管理する。

- Composition Implementation Patterns
   - [Agnostic Sub-Controller](https://patterns.arcitura.com/soa-patterns/design_patterns/agnostic_sub_controller) - サブコントローラーをメインコントローラーから分離して、再利用性と保守性を向上させる。
   - [Atomic Service Transaction](https://patterns.arcitura.com/soa-patterns/design_patterns/atomic_service_transaction) - トランザクションを使用して、複数のサービス呼び出し間の原子性と一貫性を確保する。
   - [Compensating Service Transaction](https://patterns.arcitura.com/soa-patterns/design_patterns/compensating_service_transaction) - 失敗した取引の影響を逆転する
   - [Composition Autonomy](https://patterns.arcitura.com/soa-patterns/design_patterns/composition_autonomy) - コンポジション内でサービスが自律的に動作できるようにする

- Service Interaction Security Patterns
   - [Brokered Authentication](https://patterns.arcitura.com/soa-patterns/design_patterns/brokered_authentication) - ブローカーを介してクライアントを認証する
   - [Data Confidentiality](https://patterns.arcitura.com/soa-patterns/design_patterns/data_confidentiality) - 分散環境におけるデータの機密性を確保する
   - [Data Origin Authentication](https://patterns.arcitura.com/soa-patterns/design_patterns/data_origin_authentication) - メッセージの起源を認証する
   - [Direct Authentication](https://patterns.arcitura.com/soa-patterns/design_patterns/direct_authentication) - クライアントを直接認証する

- Transformation Patterns
   - [Data Format Transformation](https://patterns.arcitura.com/soa-patterns/design_patterns/data_format_transformation) - データフォーマットを変換して相互運用性を実現する
   - [Data Model Transformation](https://patterns.arcitura.com/soa-patterns/design_patterns/data_model_transformation) - データモデルを変換して相互運用性を実現する
   - [Protocol Bridging](https://patterns.arcitura.com/soa-patterns/design_patterns/protocol_bridging) - 異なるプロトコルの間を橋渡しして相互運用性を実現する

- REST-inspired Patterns
   - [Entity Linking](https://patterns.arcitura.com/soa-patterns/design_patterns/entity_linking) - 関連リソースをリンクしてナビゲーションと発見を可能にする
   - [Lightweight Endpoint](https://patterns.arcitura.com/soa-patterns/design_patterns/lightweight_endpoint) - リソースアクセスに用いる軽量エンドポイントを提供する
   - [Reusable Contract](https://patterns.arcitura.com/soa-patterns/design_patterns/reusable_contract) - 共通の契約を再利用して一貫性を高め、重複を減らす
   - [Content Negotiation](https://patterns.arcitura.com/soa-patterns/design_patterns/content_negotiation) - クライアントとサーバー間のコンテンツフォーマットを交渉する
   - [Endpoint Redirection](https://patterns.arcitura.com/soa-patterns/design_patterns/endpoint_redirection) - クライアントを代替エンドポイントにリダイレクトする
   - [Idempotent Capability](https://patterns.arcitura.com/soa-patterns/design_patterns/idempotent_capability) - 同じアクションを複数回実行してもシステム状態が変わらないようにする


**[⬆ 目次へ戻る](#contents)**

## 資料 <a id="resources"></a>
*資料の目的、機能、適用範囲を説明する概要です。*
### API仕様 <a id="api-specification"></a>
- [API Blueprint (⭐8.6k)](https://github.com/apiaryio/api-blueprint) - APIを設計および記述するための強力な高レベル言語で、ソフトウェアエンジニアが簡単に協力し、効率的なAPIを作成できる
- [Arazzo Specification (⭐459)](https://github.com/OAI/Arazzo-Specification) - API呼び出し（ワークフロー）およびその依存関係を記述するための標準的な、プログラミング言語に依存しない表現
- [AsyncAPI (⭐5.2k)](https://github.com/asyncapi/spec) - イベント駆動アーキテクチャ（EDA）の開発に不可欠なツールで、エンジニアがより良いツールエコシステムを構築できる
- [CloudEvents (⭐5.8k)](https://github.com/cloudevents/spec) - サービス、プラットフォーム、システム間の相互運用性を実現するために、イベントデータを共通フォーマットで記述する仕様
- [GraphQL (⭐14k)](https://github.com/graphql/graphql-spec) - 効率的なAPIを構築するための高度なクエリ言語およびランタイムで、エンジニアが既存システムからデータを簡単に取得できる
- [JSON:API (⭐7.7k)](https://github.com/json-api/json-api) - APIを構築するための標準化された仕様で、リソース、関係、メタデータの表現を簡略化し、ソフトウェアエンジニアが効率的なAPIを構築しやすくなる。
- [OpenAPI (ex.Swagger) (⭐31k)](https://github.com/OAI/OpenAPI-Specification) - ソースコードやドキュメンテーションなしで、人間およびマシンがサービスの機能を理解できるようにする、言語に依存しないRESTful APIの作成仕様。
- [RAML (⭐3.8k)](https://github.com/raml-org/raml-spec) - リソース、エンドポイント、相互作用をモデル化することで、ソフトウェアエンジニアが効率的なRESTful APIを設計・構築できるRESTful APIモデリング言語。
- [Standard Webhooks (⭐1.7k)](https://github.com/standard-webhooks/standard-webhooks) - ウェブ훅を安全かつ確実に送信するためのオープンソースツールとガイドライン。
- [TypeSpec (⭐5.8k)](https://github.com/microsoft/typespec) - APIデータの形状やプロトコルを記述するための高度に拡張可能な言語で、OpenAPI、JSON Schema、Protobufなどにコンパイル可能。
- [WSDL](http://www.w3.org/TR/wsdl20) - SOAPベースのサービスに用いる、強力なXMLベースのインターフェース記述言語で、ソフトウェアエンジニアがウェブサービスの機能を記述し、クライアントコードの自動生成を可能にする。


**[⬆ 目次へ戻る](#contents)**

### APIスタイルガイド <a id="api-style-guides"></a>
- [API Stylebook](https://apistylebook.com/) - Atlassian、Cisco、Zalandoなどの企業から公開されているAPI設計ガイドラインのコレクションで、Arnaud Lauretがキュレーション。
- [Google API Improvement Proposals](https://google.aip.dev/) - GoogleのAPI設計決定をコード化した設計ドキュメントで、リソース指向API向けに番号付き、引用可能なガイドを提供。
- [Google Cloud API Design Guide](https://cloud.google.com/apis/design) - ネットワークAPIの一般設計ガイドで、Google内部でgRPCおよびREST APIに使用されている。
- [Microsoft REST API Guidelines (⭐23k)](https://github.com/microsoft/api-guidelines) - Microsoftが提唱する企業全体のREST API設計ガイドラインで、Microsoft Graphに特化した追加ガイドも含まれる。
- [Zalando RESTful API and Event Guidelines](https://opensource.zalando.com/restful-api-guidelines/) - RESTful APIおよびイベントスキーマ設計に向けた包括的かつ意見のあるガイドラインで、他の組織でも広く再利用されている。


**[⬆ 目次へ戻る](#contents)**

### 記事 <a id="articles"></a>
- [API-Security-Checklist (⭐23k)](https://github.com/shieldfy/API-Security-Checklist) - REST APIのセキュリティに関するベストプラクティス。
- [Architectural Styles and
the Design of Network-based Software Architectures](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm) - RESTを定義したRoy Fieldingの博士論文です。
- [Enterprise Integration Using REST](http://martinfowler.com/articles/enterpriseREST.html) - 非公開APIにおける制約と柔軟性について、複数のチーム間で大規模なRESTful統合を行う経験から得られた学びを説明。
- [Richardson Maturity Model](http://martinfowler.com/articles/richardsonMaturityModel.html) - Martin Fowlerが説明し、Leonard Richardsonが最初に提示した内容。
- [Web API Design: Crafting interfaces that developers love](https://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf) - 開発者にとって一貫性があり、直感的で使いやすいWeb APIを構築する方法。


**[⬆ 目次へ戻る](#contents)**

### 書籍 <a id="books"></a>
- [API Design Patterns](https://www.manning.com/books/api-design-patterns) - JJ Geewaxが提供するリソース指向API向けの設計パターンカタログで、名前付け、ページネーション、バージョニングなどを含む。
- [Building Event-Driven Microservices](https://www.oreilly.com/library/view/building-event-driven-microservices/9781492057888/) - Adam Bellem及が、イベント駆動アーキテクチャを用いて組織データをスケールで活用するためのガイド。
- [Designing Data-Intensive Applications](https://dataintensive.net/) - Martin Kleppmannが、信頼性、スケーラビリティ、維持性のあるデータシステムの背後にあるアイデアについて深く掘り下げ、複製、パーティショニング、ストリーム処理を含む。
- [Enterprise Integration Patterns](https://www.enterpriseintegrationpatterns.com/) - Gregor HohpeとBobby Woolfが提供する65のメッセージングパターンカタログ；非同期統合の基礎となる書籍。
- [Flow Architectures](https://www.oreilly.com/library/view/flow-architectures/9781492075882/) - James Urquhartがストリーミング、イベント駆動統合の未来とそのビジネスへの影響について述べている。
- [Patterns for API Design](https://api-patterns.org/book/) - オラフ・ツィマーマンと共著の『Microservice API Patterns』の書籍に付随するガイドブックで、緩やかに結合されたメッセージ交換との統合を簡素化する方法を解説.
- [Principles of Web API Design](https://www.informit.com/store/principles-of-web-api-design-delivering-value-with-9780137355631) - ジェームズ・ヒギンボスのウェブAPI設計におけるプロセス中心アプローチ。要件からドキュメンテーションまで、価値を提供するAPI設計の全プロセスを解説.


**[⬆ 目次へ戻る](#contents)**

### 認定資格 <a id="certifications"></a>
<details>
<summary>API Academy</summary>
  
- [API Designer](https://apiacademy.learnupon.com/lpaths/4147453/courses/262369/details) - API設計の基本とベストプラクティスを理解しているかを検証.
- [API Product Manager](https://apiacademy.learnupon.com/lpaths/4147453/courses/262371/details) - APIを製品として管理するスキルを示す.
- [API Security Architect](https://apiacademy.learnupon.com/lpaths/4147453/courses/262370/details) - 現代のアーキテクチャを用いてAPIをセキュリティで保護する専門性を検証.
  
</details>
<details>
<summary>APIsec University</summary>
  
- [API Documentation Best Practices](https://www.apisecuniversity.com/courses/api-documentation-best-practices) - 2時間のコースは、開発者、パートナー、ユーザーが愛するAPIドキュメンテーションを作成・自動化・公開するための必要なすべての知識をカバー。また、APIドキュメンテーションが強固なガバナンス、効果的なAPIセキュリティ、およびAPIビジネス目標達成の基礎である理由についても学べます.
- [API Penetration Testing](https://www.apisecuniversity.com/courses/api-penetration-testing) - APIパーセンテーションテストコースは、APIセキュリティプロフェッショナルになるためのすべての重要なトピックをカバー。実践的なコースで12時間以上のライブインストラクションを提供し、APIハッキング技術や脆弱性を発見するための詳細な実験を提供します.
- [API Security for PCI Compliance](https://www.apisecuniversity.com/courses/api-security-for-pci-compliance) - この60分のコースは、新しいPCI DSS 4.0要件を検討し、APIセキュリティ義務について詳細に説明。DSS 及4.0は、これまでにないAPIセキュリティの懸念を導入したため、組織への影響を理解するために登録してください.
- [API Security Fundamentals](https://www.apisecuniversity.com/courses/api-security-fundamentals) - 90分のコースは、APIの主な脅威とその防止方法を深く解説。OWASP APIセキュリティトップ10を学び、現実のAPI攻撃を検証し、APIセキュリティの3つの柱を理解します.
- [Certified API Security Analyst](https://www.apisecuniversity.com/courses/certified-api-security-analyst-exam) - CASA試験は、APIセキュリティの脅威、リスク、ベストプラクティスに関する専門性を検証するための試験。受験者は、CASA認定を取得する前にOWASP API Security and Beyond!コースを修了していることが求められます.
- [OWASP API Security Top 10](https://www.apisecuniversity.com/courses/owasp-api-security-top-10-and-beyond) - 90分のコースは、2023年版のOWASP APIセキュリティトップ10の詳細を深く掘り下げ、トップ10に含まれなかった重要な概念をカバーします.
- [Securing API Servers](https://www.apisecuniversity.com/courses/securing-api-servers) - APIサーバーを安全に保つための重要な概念を学ぶ。CORSからエラーハンドリング、レート制限までを含む。
  
</details>
<details>
<summary>Apollo</summary>

- [Apollo Graph Developer - Associate Certification](https://www.apollographql.com/tutorials/exams/apollo-graph-associate) - この認定を取得した開発者は、GraphQLとApolloツールセットの基礎知識を有しており、スキーマ設計、Apollo Server 4の実行、およびフロントエンドでのApollo Client 3によるクエリ実行を行うことができる。

- [Apollo Graph Developer - Professional Certification](https://www.apollographql.com/tutorials/certifications/apollo-graph-professional) - この認定を取得した開発者は、Apollo Federationの概念に強い理解を有しており、それらを活用してフェデレーション超グラフを構築するか、既存のモノリスグラフをフェデレーションに移行できる。

</details>
<details>
<summary>Boomi</summary>
  
- [Associate Administrator Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OIKWA2&ltui__urlRedirect=learning-plan-detail-standard) - 個人のボミープラットフォームの運用・管理に関する基礎知識とスキルを検証。特にプラットフォームの監視、トラブルシューティング、セキュリティに焦点を当てる。
- [Associate Developer Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OIeWAM&ltui__urlRedirect=learning-plan-detail-standard) - 候補者がボミープラットフォームを用いて統合プロセスの設計・展開を行う際の基本的な理解を示す。設計パターン、展開、エラーハンドリングを含む。
- [Associate EDI for X12 Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OIFWA2&ltui__urlRedirect=learning-plan-detail-standard) - 個人がボミーを用いてX12標準に基づく電子データ交換（EDI）統合の設計・開発・運用を行う際のプロフェッショナリズムを検証。EDIドキュメント構造や取引パートナー管理などの基本概念をカバー。
- [Associate Flow Essentials Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OIZWA2&ltui__urlRedirect=learning-plan-detail-standard) - 候補者がボミーフローを用いてビジネスアプリケーションの作成と管理に関する知識を示す。ワークフロー設計、ユーザーインターフェース、データ統合に重点を置く。
- [Associate Master Data Hub Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OIPWA2&ltui__urlRedirect=learning-plan-detail-standard) - 候補者がボミーマスターデータハブを用いて、システム間のデータ品質と一貫性を確保する理解を示す。データモデリング、ガバナンス、同期に焦点を当てる。
- [Development and Application Architecture Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OJOWA2&ltui__urlRedirect=learning-plan-detail-standard) - Boomiプラットフォーム上で複雑な統合ソリューションとアプリケーションアーキテクチャを設計・実装し、ベストプラクティスと性能最適化を適用する専門性を確認する認定
- [Professional API Design Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OKzWAM&ltui__urlRedirect=learning-plan-detail-standard) - ボミーを使用したAPIの設計、開発、管理に関する候補者の能力を示す。RESTful APIの原則、APIセキュリティ、バージョニングを含む。
- [Professional API Management Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OIyWAM&ltui__urlRedirect=learning-plan-detail-standard) - ボミープラットフォーム上でAPIのライフサイクル全体（APIのデプロイ、監視、分析を含む）を管理する個人の専門性を検証する。
- [Professional Developer Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OJrWAM&ltui__urlRedirect=learning-plan-detail-standard) - ボミーを使用した統合プロセスの開発、デプロイ、管理に関する候補者の深い知識とスキルを認識する。特に高度なデータ変換およびエラー処理技術に焦点を当てる。
- [Professional Flow Developer Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OIUWA2&ltui__urlRedirect=learning-plan-detail-standard) - ボミーフローを使用したビジネスアプリケーションの設計、開発、管理に関する個人の高度な能力を示す。複雑なワークフロー設計、カスタムUIコンポーネント、外部システムとの統合を含む。
- [Professional Linux Operational Administrator Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OI5WAM&ltui__urlRedirect=learning-plan-detail-standard) - Linuxシステム上でボミーを管理・運用する能力を確認する。システムインストール、設定、セキュリティ、パフォーマンス最適化を含む。
- [Professional Windows Operational Administrator Certification](https://community.boomi.com/s/learning-plan-detail-standard?ltui__urlRecordId=aOM6S0000008OIAWA2&ltui__urlRedirect=learning-plan-detail-standard) - Windowsシステム上でボミの管理・運用に関する個人の専門性を検証する。システムインストール、設定、セキュリティ、パフォーマンス最適化を焦点とする。
  
</details>
<details>
<summary>IBM</summary>
  
- [IBM Certified Solution Developer – App Connect Enterprise V11](https://www.ibm.com/training/certification/C0003107#exam) - IBM App Connect V11.0を使用して、プラットフォームに依存しないメッセージフローアプリケーションの開発、デプロイ、調整、サポートを行う中級レベルの知識と経験を検証する。
- [IBM Certified Solution Implementer – API Connect v10.0.3](https://www.ibm.com/training/certification/C0002604#exam) - IBM API Connect v10.0.3を使用して、APIの開発、公開、設定、管理を行う中級レベルの知識とスキルを示す。

</details>
<details>
<summary>Gravitee</summary>

- [Event-native API Management Foundations](https://gravitee.getlearnworlds.com/course/gravitee-event-native-api-management-foundations) - イベントネイティブAPIマネジメントの基礎知識。
- [Event-native API Management Professional](https://gravitee.getlearnworlds.com/course/gravitee-enap-certification) - より高度なAPIマネジメントの概念およびGravitee APIマネジメントの基本的な知識を焦点にした内容。
  
</details>
<details>
<summary>Kong</summary>
  
- [Kong Gateway Certified Associate](https://konghq.com/academy/exam-preparation) - Kong Gatewayに関する入門レベルの知識とスキルを検証する。開発者、DevOps、アーキテクトに向けたもの。

</details>
<details>
<summary>Mulesoft</summary>
  
- [MuleSoft Certified Developer - Level 1](https://training.mulesoft.com/certification/developer-mule4-level1) - MuleSoftを使用して、基本的なAPIおよび統合の設計、構築、テスト、デバッグ、デプロイ、管理を行う知識とスキルを検証する。
- [MuleSoft Certified Developer - Level 2](https://training.mulesoft.com/certification/developer-mule4-level2) - 生産環境に適したMuleアプリケーションにおいて、監視、パフォーマンス、維持性、信頼性、セキュリティといった重要な非機能要件を考慮し、バランスを取る能力を検証する。
- [MuleSoft Certified Integration Architect - Level 1](https://training.mulesoft.com/certification/architect-integration-level1) - 機能要件および非機能要件を統合インターフェースおよび実装に変換する知識とスキルを検証する。
- [MuleSoft Certified Platform Architect - Level 1](https://training.mulesoft.com/certification/architect-platform-level1) - 組織全体におけるAPIリード接続を経て、個別の統合ソリューションから有効なアプリケーションネットワークの形成を指揮する能力を検証する。Anypoint Platformを使用する。

</details>
<details>
<summary>Oracle</summary>

- [Oracle Business Process Management Suite 12c Certified Implementation Specialist](https://education.oracle.com/oracle-business-process-management-suite-12c-essentials/pexam_1Z0-435) - Oracle BPM Suite 12cソリューションを実装する専門性を検証する認定
- [Oracle Cloud Platform Application Integration 2025 Certified Professional](https://education.oracle.com/oracle-cloud-infrastructure-2024-application-integration-professional/pexam_1Z0-1042-25) - Oracle Application Integrationを理解し、これらのクラウドサービスを実装する知識とスキルを検証する。
- [Oracle Data Integrator 12c Certified Implementation Specialist](https://education.oracle.com/oracle-data-integrator-12c-certified-implementation-specialist/trackp_379) - Oracle Data Integration 12cソリューションを販売または実装する専門性を検証する認定
- [Oracle SOA Suite 12c Certified Implementation Specialist](https://education.oracle.com/oracle-soa-suite-12c-essentials/pexam_1Z0-434) - Oracle SOA Suite 12cに基づくソリューションを実装する専門性を検証する認定

</details>
<details>
<summary>Red Hat</summary>
 
- [Red Hat Certified Specialist in API Management](https://www.redhat.com/en/services/certification/red-hat-certified-specialist-api-management) - Red Hat 3scale API Managementプラットフォームを使用した企業規模APIの作成および維持能力を確認する。
- [Red Hat Certified Specialist in Business Rules](https://www.redhat.com/en/services/certification/rhcs-business-rules) - Red Hat JBoss BRMSを用いてビジネスロジックの実装および管理に必要な知識、スキル、能力を検証します。
- [Red Hat Certified Specialist in Cloud-native Integration](https://www.redhat.com/en/services/certification/rhcs-cloud-native-integration) - Red Hat Fuse、Camel、APIに基づいた企業統合サービスの作成および維持能力を検証します。
- [Red Hat Certified Specialist in Event-Driven Development with Kafka](https://www.redhat.com/en/services/certification/red-hat-certified-specialist-event-driven-development-kafka) - Apache KafkaおよびApache Kafka Streamsを用いたアプリケーション開発能力を検証します。
  
</details>
<details>
<summary>SAP</summary>
  
- [SAP Certified Associate - Integration Developer](https://learning.sap.com/certifications/sap-certified-associate-integration-developer) - 候補者がSAP統合スイートプロファイルに必要な基本的かつ核心的な知識を備えているかを検証します。
  
</details>
<details>
<summary>SnapLogic</summary>

- [SnapLogic Administrator Certification](https://learn.snaplogic.com/snaplogic-administrator-certification) - SnapLogicインスタンスの管理タスクを処理できる能力を評価します。
- [SnapLogic Architect Certification](https://learn.snaplogic.com/snaplogic-architect-certification) - SnapLogicプラットフォームにおける統合リファレンスアーキテクチャおよび主要戦略（SnapLogicアーキテクチャ、Snaplex要件、パイプラインライフサイクル管理、高度なデータ変換、API管理、中断可能なパイプライン、ベストプラクティスなど）に関する知識を評価します。
- [SnapLogic Developer Certification](https://learn.snaplogic.com/snaplogic-developer-certification) - SnapLogic SDKの使用、Snap機能のさまざまな部分の実装、カスタムSnapsの構築に関する専門性をテストします。
- [SnapLogic Integrator Accreditation](https://learn.snaplogic.com/snaplogic-accreditation) - 業界や事業部門におけるさまざまな統合ニーズに対応するためのすべての核心的なSnapLogicコンセプトの専門性を高めるために設計されています。
- [SnapLogic Integrator Certification](https://learn.snaplogic.com/snaplogic-integrator-certification-1) - 初心者トレーニング、超タスク、パイプライン移行、さまざまな統合エンドポイントをカバーするユーザー支援動画などに関するトピックに焦点を当てる。

</details>
<details>
<summary>TIBCO</summary>

- [TIBCO BusinessWorks Associate](https://www.credly.com/org/citrix/badge/tca-tibco-businessworks) - Business StudioおよびTIBCO Cloud Integrationの理解を検証し、アプリケーションコンポーネント（モジュール、WSDL、REST API）の設計、統合アプリケーションの開発、テスト、デプロイ、運用を評価します。
- [TIBCO BusinessWorks Certified Professional](https://www.credly.com/org/citrix/badge/tcp-tibco-businessworks) - 平均的な複雑度のTIBCO BusinessWorksアプリケーションの設計、開発、デプロイ、監視、運用を行う能力を最小限の監督下で検証します。
- [TIBCO BusinessWorks Container Edition Certified Professional](https://www.credly.com/org/citrix/badge/tcp-tibco-businessworks-container-edition) - 平均的な複雑度のTIBCO BusinessWorks Container Editionアプリケーションの開発、デプロイ、運用を行う能力を最小限の監督下で検証します。
- [TIBCO BPM Enterprise Associate](https://www.credly.com/org/citrix/badge/tca-tibco-bpm-enterprise) - TIBCO BPMの機能と能力、ビジネスプロセスの開発および運用、プロセスアプリケーションのデプロイおよびテストに関する理解を検証します。
- [TIBCO BPM Enterprise Certified Professional](https://www.credly.com/org/citrix/badge/tcp-tibco-bpm-enterprise) - TIBCO BPM Enterprise Suiteを用いてビジネスプロセスの設計、開発、デプロイ、運用を行う能力を検証します。
- [TIBCO Cloud Associate Certification](https://www.credly.com/org/citrix/badge/tca-tibco-cloud) - TIBCO Cloudとの作業に必要なスキルおよび知識（主要なコンポーネントおよび機能）を検証します。
- [TIBCO Cloud API Management Associate](https://www.credly.com/org/citrix/badge/tca-tibco-cloud-api-management) - API定義の作成およびテスト、APIキー認証、開発者ポータルおよびI/Oドキュメントの使用に関するトピックをカバーします。
- [TIBCO Cloud API Management Certified Professional](https://www.credly.com/org/citrix/badge/tcp-tibco-cloud-api-management) - TIBCO Cloud Meshの実装、OAuthベースのセキュリティ、SOAPサービスの管理に関する能力を検証します。
- [TIBCO Cloud Integration Associate](https://www.credly.com/org/citrix/badge/tca-tibco-cloud-integration) - TIBCO Cloud Integrationとの作業に必要なスキルおよび知識（Connect、Develop、Integrate機能）を検証します。
- [TIBCO Cloud Integration - Connect Associate](https://www.credly.com/org/citrix/badge/tca-tibco-cloud-integration-connect) - TIBCO Cloud IntegrationのConnect機能の使用、オンプレミスエージェントのインストール、接続および統合アプリの作成、フローの設定を検証します。
- [TIBCO Cloud Integration - Connect Certified Professional](https://www.credly.com/org/citrix/badge/tcp-tibco-cloud-integration-connect) - TIBCO Cloud Integrationにおける接続の作成および管理、接続セキュリティの確保、接続関連の問題のトラブルシューティングを検証します。
- [TIBCO Cloud Integration Certified Professional](https://www.credly.com/org/citrix/badge/tcp-tibco-cloud-integration) - カパビリティやメリットに関する知識を確認し、アプリケーションの統合・開発・接続、APIモデルナーとモック機能を用いたAPIの作成などを行う。
- [TIBCO Messaging Associate](https://www.credly.com/org/citrix/badge/tca-tibco-messaging) - TIBCO Enterprise Message Service (EMS)、TIBCO FTL、TIBCO eFTL、Apache Kafka、Apache Pulsar、Eclipse Mosquittoなどのメッセージング技術に関するトピックをカバー。
- [TIBCO Messaging Certified Professional](https://www.credly.com/org/citrix/badge/tcp-tibco-messaging) - TIBCO Messagingおよびそのコンポーネント（TIBCO Enterprise Message Service (EMS)、TIBCO FTL、TIBCO eFTL）との作業に必要なスキルおよび知識を検証。
  
</details>
<details>
<summary>Workato</summary>

- [Workato Automation Pro I](https://academy.workato.com/enterprise-automation-i-exam) - ビジネス自動化プロセスの基礎。
- [Workato Automation Pro II](https://academy.workato.com/enterprise-automation-ii-exam) - 自動化に関する高度かつ実用的なアプローチ。
- [Workato Automation Pro III](https://academy.workato.com/automation-pro-iii-exam) - Workatoの可能性を最大化するための、深い知識を備えたバッジ付きモジュールシリーズ。

</details>
<details>
<summary>WSO2</summary>

- [WSO2 Certified API Manager Developer - V3](https://wso2.com/training/certification/certified-api-manager-developer/) - WSO2 API Manager V3を用いたAPI設計、開発、公開に関する専門性を評価。APIライフサイクル管理、アクセス制御、APIドキュメンテーションを含む。
- [WSO2 Certified API Manager Developer - V4 - Micro Integrator Profile](https://wso2.com/training/certification/certified-api-manager-developer-v4-micro-integrator-profile/) - WSO2 API Manager V4のMicro Integratorプロファイルを用いたAPI設計、開発、公開に関する専門性を検証。APIライフサイクル管理、アクセス制御、APIドキュメンテーションをMicro Integratorの文脈でカバー。
- [WSO2 Certified API Manager Expert - V3](https://wso2.com/training/certification/certified-api-manager-expert/) - WSO2 API Manager V3を用いたAPI管理に関する高度なスキルおよび知識を確認。API作成、公開、セキュリティ、ポリシー実装、アナリティクスを含む。
- [WSO2 Certified API Manager Expert - V4 - API Management Profile](https://wso2.com/training/certification/api-manager-expert-v4-api-management-profile/) - WSO2 API Manager V4を用いたAPI管理タスク（APIの作成、公開、セキュリティ、ポリシーおよびアナリティクスの実装）に関する熟練度を示す。
- [WSO2 Certified Enterprise Integrator Developer - V7 - Micro Integrator](https://wso2.com/training/certification/certified-enterprise-integrator-developer-micro-integrator/) - WSO2 Enterprise Integrator V7のMicro Integratorプロファイルを用いたAPI開発、デプロイ、統合ソリューションの管理に関する知識およびスキルを検証。
- [WSO2 Certified Enterprise Integrator Developer - V7 - Streaming Integrator](https://wso2.com/training/certification/certified-enterprise-integrator-developer-streaming-integrator/) - WSO2 Enterprise Integrator V7のStreaming Integratorプロファイルを使い、リアルタイムデータ統合とストリーミング分析のソリューションを開発・デプロイ・管理する専門性を証明する認定
- [WSO2 Certified Enterprise Integrator Expert - V6](https://wso2.com/training/certification/certified-enterprise-integrator6-expert/) - WSO2 Enterprise Integrator V6を用いた複雑な統合シナリオ（ベストプラクティス、トラブルシューティング、パフォーマンスチューニング）に関する深い知識およびスキルをテスト。
- [WSO2 Certified Solutions Architect Associate](https://wso2.com/training/certification/certified-solutions-architect-associate/) - WSO2製品アーキテクチャの基本概念および原則に関する理解、およびWSO2技術を用いたソリューション設計および実装能力を評価。

</details>


**[⬆ 目次へ戻る](#contents)**


### コネクター <a id="connectors"></a>
- [JCA](https://projects.eclipse.org/projects/ee4j.jca) - Jakarta EEアプリケーションコンポーネントがEnterprise Information Systemsに接続するための標準アーキテクチャを定義。以前はJava EE Connector ArchitectureおよびJ2EE Connector Architectureと呼ばれていた。
- [Kafka Connect](https://kafka.apache.org/documentation/#connect) - Apache Kafkaとその他のシステム間でスケーラブルかつ信頼性の高いデータをストリーミングするためのツール。


**[⬆ 目次へ戻る](#contents)**

### データ形式 <a id="data-formats"></a>
- [Apache Arrow (⭐17k)](https://github.com/apache/arrow) - 言語に依存しない列形式のメモリ内フォーマットで高速データ交換を実現。Arrow IPCフォーマットおよびFlight RPCを含む。
- [Apache Avro (⭐3.2k)](https://github.com/apache/avro) - 構造化データのコンパクトかつ高速かつ効率的なシリアル化を提供するデータシリアル化システム。スキーマの進化をサポートし、効率的なデータ圧縮を可能にし、ビッグデータ処理フレームワークとの良好な互換性を設計。
- [Apache Fory (⭐4.4k)](https://github.com/apache/fory) - 高速マルチ言語シリアル化フレームワーク。Just-in-timeコンパイルおよびゼロコピー技術を用い、キャッシュに優しい行形式を採用。以前はApache Furyと呼ばれていた。
- [Apache Thrift (⭐10k)](https://github.com/apache/thrift) - Facebookで開発された最初のシリアル化およびRPCフレームワーク。1つのインターフェース定義ファイルから複数の言語に接続を生成する。
- [BSON](https://bsonspec.org/) - JSONに似たドキュメントのバイナリエンコードされたシリアライゼーションフォーマットで、軽量かつ効率的な設計を採用。豊富なデータ型をサポートし、NoSQLデータベース（例：MongoDB）において広く使用されている。
- [Cap'n Proto (⭐13k)](https://github.com/capnproto/capnproto) - 極めて高速なデータ交換フォーマットおよびRPCシステムで、ゼロコピーエンコーディングは通信フォーマットおよびメモリ内表現の両方として使用される。
- [CBOR](https://cbor.io/) - コンパクトなバイナリオブジェクト表現（RFC 8949）は、小さいメッセージサイズおよび制限されたデバイス向けに設計されたJSONに似たデータモデルを持つバイナリデータフォーマットである。
- [CSV](https://datatracker.ietf.org/doc/html/rfc4180) - シンプルで広く使用されているデータフォーマットで、テーブルデータをプレーンテキストで保存する。読み書きが容易で、ほとんどのプログラミング言語で処理可能。
- EDI standards for exchanging business documents between trading partners.
   - [UN/EDIFACT](https://unece.org/trade/uncefact/introducing-unedifact) - 国際連合のEDI標準で、行政、商業、輸送分野において、北アメリカ以外で主流である。
   - [X12](https://x12.org/) - ANSIが認定したEDI標準で、北アメリカにおいて注文、請求書、医療保険請求などの取引に広く使用されている。
- [FlatBuffers (⭐26k)](https://github.com/google/flatbuffers) - グーグルが開発した効率的かつプラットフォームを越えたシリアライゼーションライブラリで、パースやアンパッキングを介さずにシリアル化データに直接アクセスできる。
- [JSON](https://datatracker.ietf.org/doc/html/rfc8259) - 軽量かつ読みやすいデータフォーマットで、データ交換に広く使用されている。豊富なデータ型をサポートし、多くのプログラミン言語と互換性がある。
   - [NDJSON (⭐843)](https://github.com/ndjson/ndjson-spec) - ストリームプロトコルにおけるJSONオブジェクトを区切り指定するための標準。大きなJSONデータセットの効率的な処理を可能にし、ビッグデータ処理において広く使用されている。
   - [JSON Lines](https://jsonlines.org/) - 構造化データを1行1レコードで保存するテキストフォーマット。
   - [JSON Text Sequence](https://datatracker.ietf.org/doc/html/rfc7464) - RFC 7464で定義されたもので、個々のJSONテキストのシーケンスを送信または保存するための特定のフォーマットを記述している。
- [MessagePack (⭐7.4k)](https://github.com/msgpack/msgpack) - 効率的なバイナリシリアライゼーションフォーマットで、JSONのような複数の言語間でデータを交換できるが、サイズが小さく、速度が速い。
- [Protocol Buffers (⭐71k)](https://github.com/protocolbuffers/protobuf) - 言語中立かつプラットフォーム中立のシリアライゼーションメカニズムで、極めて効率的かつ拡張性を備えている。豊富なデータ型をサポートし、分散システム（例：gRPC、Apache Kafka）において広く使用されている。
- [XML](https://www.w3.org/TR/xml11/) - 柔軟かつ広く使用されているマーカーフォーマットで、構造化データの保存と交換に使用される。豊富なデータ型をサポートし、多くのプログラミング言語と互換性がある。
- [YAML (⭐497)](https://github.com/yaml/yaml-spec) - 人間が読みやすい、読み書きが容易なデータシリアライゼーションフォーマットで、設定ファイルやデータ交換に広く使用されている。豊富なデータ型をサポートし、ほとんどのプログラミング言語と互換性がある。


**[⬆ 目次へ戻る](#contents)**

### 統合方式 <a id="integration-styles"></a>
- [File Transfer](https://www.enterpriseintegrationpatterns.com/patterns/messaging/FileTransferIntegration.html) - アプリケーション間でファイル交換を通じてデータが交換される。
- [Messaging](https://www.enterpriseintegrationpatterns.com/patterns/messaging/Messaging.html) - アプリケーションはメッセージインフラストラクチャを介してメッセージを交換する。
- [Remote Procedure Invocation](https://www.enterpriseintegrationpatterns.com/patterns/messaging/EncapsulatedSynchronousIntegration.html) - アプリケーションはネットワークを介してリモートサーバー上の関数またはプロシージャを呼び出す。
- [Shared Database](https://www.enterpriseintegrationpatterns.com/patterns/messaging/SharedDataBaseIntegration.html) - 複数のアプリケーションが共通のデータベースを介してデータにアクセスし、操作する。


**[⬆ 目次へ戻る](#contents)**

### 市場分析 <a id="market-analysis"></a>
- API Management
  - [Gartner Critical Capabilities for Full Life Cycle API Management](https://www.gartner.com/doc/code/468184)
  - [Gartner Magic Quadrant for Full Life Cycle API Management](https://www.gartner.com/doc/code/464116)
  - [The Forrester Wave: API Management Solutions](https://www.forrester.com/go?objectid=RES159081)
- BPM
  - [Gartner Critical Capabilities for Intelligent Business Process Management Suites](https://www.gartner.com/doc/code/292486)
  - [Gartner Magic Quadrant for Intelligent Business Process Management Suites](https://www.gartner.com/doc/code/345694)
- ETL
  - [Gartner Critical Capabilities for Data Integration Tools](https://www.gartner.com/doc/code/464068)
  - [Gartner Magic Quadrant for Data Integration Tools](https://www.gartner.com/doc/code/450251)
- iPaaS
  - [Gartner Critical Capabilities for Enterprise Integration Platform as a Service](https://www.gartner.com/doc/code/434187)
  - [Gartner Magic Quadrant for Enterprise Integration Platform as a Service](https://www.gartner.com/doc/code/397953)
  - [The Forrester Wave: Enterprise iPaaS](https://www.forrester.com/report/the-forrester-wave-tm-enterprise-ipaas-q4-2021/RES176201)
- RPA
  - [Gartner Critical Capabilities for Robotic Process Automation](https://www.gartner.com/doc/code/465756)
  - [Gartner Magic Quadrant for Robotic Process Automation](https://www.gartner.com/doc/code/441474)
  - [The Forrester Wave: Robotic Process Automation](https://www.forrester.com/go?objectid=RES161538)


**[⬆ 目次へ戻る](#contents)**

### プロトコル <a id="protocols"></a>
- [A2A](https://a2a-protocol.org/latest/) - AIアグエント間の相互運用性を実現するアグエント間プロトコル。アグエントが互いに発見し、メッセージを交換し、フレームワークやベンダー間でタスクを委任できるようにする。グーグルが開発し、Linux Foundationによって管理されている。
- [AMQP 0-9-1](https://www.rabbitmq.com/resources/specs/amqp0-9-1.pdf) - メッセージキューのプロトコルで、アプリケーションやシステム間のメッセージの交換を可能にする。AMQP 0-9--1は、複雑なメッセージングシナリオを扱うために信頼性、セキュリティ、柔軟性を提供する。
- [AMQP 1.0](http://docs.oasis-open.org/amqp/core/v1.0/os/amqp-core-overview-v1.0-os.html) - 広く採用されているメッセージキューのプロトコルで、システム間の信頼性があり、相互運用性および効率的なメッセージングを提供する。AMQP 1.0は、幅広いメッセージングシナリオをサポートし、複雑な企業レベルアプリケーションに最適である。
- [AS2](https://datatracker.ietf.org/doc/html/rfc4130) - EDIおよびその他のビジネスドキュメントをHTTP/Sを介して安全かつ信頼性の高い方法で送信・受信するためのプロトコル。署名および暗号化にはS/MIMEを使用する。
- [AS4](https://docs.oasis-open.org/ebxml-msg/ebms/v3.0/profiles/AS4-profile/v1.0/AS4-profile-v1.0.html) - ebMS 3.0のOASISプロファイルで、安全なウェブサービスベースのB2Bドキュメント交換を定義。e-政府ネットワーク（例：Peppol）において広く義務付けられている。
- [CoAP](http://coap.technology/) - インターネット・オブ・シングス（IoT）エコシステムにおける制約されたデバイス向けに設計されたアプリケーションプロトコル。CoAPは、リソース制限のあるデバイスをサポートする軽量かつ低負荷の通信機構を提供する。
- [gRPC](https://grpc.io/) - 高性能でオープンソースのRPCフレームワーク。HTTP/2およびProtocol Buffersを使用し、ストリーミング、プラグイン可能なロードバランシング、認証をサポートする。
- [HTTP](https://httpwg.org/specs/) - ウェブサーバーとクライアント間の通信を促進する広く使われているプロトコル。HTTPはインターネット上でデータの送受信を可能にし、ウェブアプリケーションのスムーズな動作を実現する。
- [JSON-RPC](https://www.jsonrpc.org/specification) - シンプルで軽量なリモートプロシージャ呼び出しプロトコル。システム間のJSONデータを使用して通信を可能にする。JSON-RPCは状態無関係の通信を提供し、リソース制限のあるデバイスに適している。
- [MCP](https://modelcontextprotocol.io/) - AIアグエントとツール間の接続用のモデルコンテキストプロトコル。AIアグエントが外部ツール、データソース、APIと発見・相互作用する方法を標準化する。Anthropicによって作成され、Linux Foundationによって管理されている。
- [MQTT](https://mqtt.org/mqtt-specification/) - 軽量かつ効率的なパブリッシュ・サブスクリプションプロトコルで、デバイス間のメッセージングをサポートする。MQTTは低負荷の通信を可能にし、IoTおよびモバイルアプリケーションに最適である。
- [OpenMessaging (⭐287)](https://github.com/openmessaging/specification) - クラウドネイティブであり、ベンダー中立の分散メッセージング用のオープン規格。
- [Server-Sent Events](https://html.spec.whatwg.org/multipage/server-sent-events.html) - WHATWGが定めた、サーバーからクライアントへシンプルなHTTPを介したテキストベースイベントストリームを送信する標準。
- [SOAP](https://www.w3.org/TR/soap/) - システム間の通信をXMLで可能にするメッセージプロトコル。SOAPは、分散計算や企業アプリケーションなど、幅広いメッセージングシナリオをサポートする。
- [STOMP](https://stomp.github.io/) - システム間のシンプルかつテキストベースの通信を提供するメッセージプロトコル。STOMPは、低遅延・高性能なメッセージングシナリオに最適である。
- [WebSocket](https://datatracker.ietf.org/doc/html/rfc6455) - TCP接続を介して、両方向のフルダブル通信チャネルを提供するプロトコル。リアルタイムアプリケーションに最適である。


**[⬆ 目次へ戻る](#contents)**

### 標準API <a id="standard-apis"></a>
- [FHIR](https://www.hl7.org/fhir/) - HL7のFast Healthcare Interoperability Resources標準で、医療データの交換に用いるRESTフルAPIおよびリソースフォーマットを定義する。
- [JDBC](https://docs.oracle.com/javase/8/docs/technotes/guides/jdbc/) - JavaベースのAPIで、関係データベースへのユニバーサルなデータアクセスを提供する。JDBCはデータのアクセスおよび操作を一貫的かつ効率的に実現し、開発者にとって人気がある。
- [JMS](https://javaee.github.io/jms-spec/) - Javaアプリケーションがメッセージを送受信できるようにするメッセージAPI。JMSは信頼性のあるメッセージングを提供し、企業レベルアプリケーションで広く使用されている。
- [ODBC](https://docs.microsoft.com/en-us/sql/odbc/reference/odbc-overview) - さまざまなデータベース管理システムからデータを標準化してアクセスできるAPI。ODBCはデータへの一貫したインターフェースを提供し、データベースアプリケーションの開発を容易にする。
- [OData](https://www.odata.org/) - クエリ可能で相互運用性のあるREST APIの作成と消費を可能にするオープンプロトコル。ODataはREST APIの開発を簡素化し、データへの標準化されたアクセス方法を提供する。
- [Open Banking](https://www.openbanking.org.uk/) - UK標準で定義された、銀行が認可された第三者プロバイダーに口座および決済データを共有できるセキュアなAPI。


**[⬆ 目次へ戻る](#contents)**

### 構造と検証 <a id="structure-and-validation"></a>
- [JSON Schema (⭐5.1k)](https://github.com/json-schema-org/json-schema-spec) - JSONデータの構造を検証するための強力なツール。JSONスキーマは開発者にJSONデータが特定の構造に従っていることを確認する手段を提供し、データの処理や操作を容易にします。
- [Schematron](https://www.schematron.com) - ビジネスルール、データ報告、品質管理、その他の検証シナリオを定義および検証できるルールベースの検証言語。SchematronはXMLドキュメントの検証に柔軟な方法を提供します。
- [XML Schema](https://www.w3.org/TR/xmlschema11-1/) - XMLドキュメントの構造を記述し、そのコンテンツを制限できる機能を備えたスキーマ言語。XMLスキーマは開発者にXMLデータが特定の構造に従っていることを確認し、データの処理や操作を容易にします。


**[⬆ 目次へ戻る](#contents)**

## コントリビューション <a id="contributing"></a>
コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/stn1slv/awesome-integration/blob/main/CONTRIBUTING.md)を確認してください。

## 著者について <a id="about-the-author"></a>
このリストは、エンタープライズ統合とAPIアーキテクチャに携わるソリューションアーキテクト[Stanislav Deviatov](https://github.com/stn1slv)が保守しています。API管理、iPaaS、ESB、統合フレームワーク、メッセージブローカーなどのニュースを扱うLinkedInニュースレター[API & Integration Digest](https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7263963549411004416)も発行しています。
