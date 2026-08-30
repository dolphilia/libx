---
title: "xavidop/awesome-firebase-genkit"
description: "xavidop/awesome-firebase-genkit の正規スナップショット"
licenseSource: "github-xavidop-awesome-firebase-genkit-readme-md"
---

<div align="center">





<a id="awesome-genkit"></a>
# Awesome Genkit

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![lint](https://github.com/xavidop/awesome-genkit/actions/workflows/lint.yaml/badge.svg)](https://github.com/xavidop/awesome-genkit/actions/workflows/lint.yaml) [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/xavidop/awesome-firebase-genkit/)



Genkitエコシステムに関する優れた情報を集めたリストです。

<p align="center">
  <a href="https://github.com/xavidop/awesome-firebase-genkit/blob/9cca4bdd92430020af0d0dc08e8a629112abb53a/CODE_OF_CONDUCT.md">行動規範</a>
  <a href="https://github.com/xavidop/awesome-firebase-genkit/blob/9cca4bdd92430020af0d0dc08e8a629112abb53a/CONTRIBUTING.md">貢献ガイド</a>
  <a href="https://github.com/xavidop/awesome-genkit/graphs/contributors">貢献者</a>
</p>


<picture>
  <source media="(prefers-color-scheme: light)" srcset="/assets/genkit-logo.png">
  <source media="(prefers-color-scheme: dark)" srcset="/assets/genkit-logo-dark.png">
  <img alt="ライトモードでは太陽、ダークモードでは星空と月のイラストを表示します。" src="https://raw.githubusercontent.com/xavidop/awesome-firebase-genkit/9cca4bdd92430020af0d0dc08e8a629112abb53a/assets/genkit-logo.png">
</picture>



Genkitは、AIを活用したアプリケーションや機能の構築を支援するフレームワークです。Node.jsおよびGo向けのオープンソースライブラリと、テスト・デバッグ用の開発者ツールを提供します。

</div>



<a id="contents"></a>
## 目次
- [プラグイン](#plugins)
  - [JavaScript - 公式](#javascript---official)
  - [JavaScript - コミュニティ](#javascript---community)
  - [Python - 公式](#python---official)
  - [Golang - 公式](#golang---official)
  - [Golang - コミュニティ](#golang---community)
  - [Dart - 公式](#dart---official)
  - [Java（非公式）- コミュニティ](#java-unofficial---community)
- [APIリファレンス](#api-references)
- [書籍](#books)
- [ソリューション](#solutions)
- [講演](#talks)
- [動画](#videos)
- [記事](#articles)
- [チュートリアル](#tutorials)
- [フォロー](#follow)



<a id="plugins"></a>
## プラグイン

<a id="javascript---official"></a>
### JavaScript - 公式

1. Model / Embedding Plugins
   - [`@genkit-ai/vertexai`](https://genkit.dev/docs/plugins/vertex-ai/) - Vertex AIプラグインは、複数のAIサービスにインターフェースを提供しています：GoogleのジェネレティブAIモデル、Vertex AI Rapid Evaluation APIを通じた評価メトリクスの一部、ベクトル検索。
   - [`@genkit-ai/googleai`](https://genkit.dev/docs/plugins/google-genai/) - GoogleジェネレティブAIプラグインは、Gemini APIを介してGoogleのGeminiモデルにインターフェースを提供します。
   - [`genkitx-ollama`](https://genkit.dev/docs/plugins/ollama/) - Ollama プラグインは、Ollama がサポートする任意のローカル LLM にインターフェースを提供。
   - [`@genkit-ai/compat-oai`](https://genkit.dev/docs/plugins/compat-oai/) - 互換性のあるOpenAI API向けプラグイン。
   - [`@genkit-ai/compat-oai/xai`](https://genkit.dev/docs/plugins/xai/) - XAI API向けプラグイン。
   - [`@genkit-ai/compat-oai/openai`](https://genkit.dev/docs/plugins/openai/) - OpenAI API向けプラグイン。
2. Vector Store Plugins
   - [`@genkit-ai/dev-local-vectorstore`](https://genkit.dev/docs/rag/) - 開発用のローカルベクトルストア用プラグイン。
3. Other Plugins
   - [`@genkit-ai/firebase`](https://genkit.dev/docs/plugins/firebase/) - Firebaseプラグインは、Firebaseサービスとの複数の統合を提供しています：Cloud Firestoreベクトルストアを用いたインデクサとリトリーバー、Cloud Firestoreを用いたトレースストレージ、Cloud Functionsを用いたフロー展開、Firebase Authenticationユーザー向けの認可ポリシー。
   - [`@genkit-ai/express`](https://genkit.dev/docs/plugins/express/) - Expressプラグインは、GenkitにExpressミドルウェアを提供します。
   - [`@genkit-ai/mcp`](https://genkit.dev/docs/plugins/mcp/) - MCPプラグのMCP（モデルコンテキストプロトコル）にインターフェースを提供します。

<a id="javascript---community"></a>
### JavaScript - コミュニティ

1. Model / Embedding Plugins
   - [`genkitx-github`](https://github.com/xavidop/genkitx-github) - GitHub Models API向けプラグイン。
   - [`genkitx-anthropic`](https://github.com/BloomLabsInc/genkit-plugins/tree/main/plugins/anthropic) - Anthropic AI API向けプラグイン。
   - [`genkitx-cohere`](https://github.com/BloomLabsInc/genkit-plugins/tree/main/plugins/cohere) - Cohere API向けプラグイン。
   - [`genkitx-groq`](https://github.com/BloomLabsInc/genkit-plugins/tree/main/plugins/groq) - Groq API向けプラグイン。
   - [`genkitx-mistral`](https://github.com/BloomLabsInc/genkit-plugins/tree/main/plugins/mistral) - Mistral AI API向けプラグイン。
   - [`genkitx-azure-openai`](https://github.com/BloomLabsInc/genkit-plugins/tree/main/plugins/azure-openai) - Azure OpenAI API向けプラグイン。
   - [`genkitx-aws-bedrock`](https://github.com/xavidop/genkitx-aws-bedrock) - AWS Bedrock API 用プラグイン。
   - [`genkitx-deepseek`](https://github.com/oddbit/genkitx-deepseek) - Deepseek Cloud API向けプラグイン。
   - [`genkitx-huggingface`](https://github.com/aciescrest/genkit-huggingface) - Hugging Face Inference API向けプラグイン。
2. Vector Store Plugins
   - [`genkitx-convex`](https://github.com/BloomLabsInc/genkit-plugins/tree/main/plugins/convex) - Convex Vector Stores向けプラグイン。
   - [`genkitx-hnsw`](https://github.com/BloomLabsInc/genkit-plugins/tree/main/plugins/hnsw) - HNSW ベクトルストア向けプラグイン
   - [`genkitx-qdrant`](https://github.com/qdrant/qdrant-genkit) - Qdrant ベクトルストア向けプラグイン
   - [`genkitx-astra-db`](https://genkit.dev/docs/plugins/astra-db/) - AstraDB ベクトルストア向けプラグイン
   - [`genkitx-pgvector`](https://genkit.dev/docs/plugins/pgvector/) - PostgreSQL (PGVector) ベクトルストア向けプラグとイン
   - [`genkitx-redis`](https://github.com/retzd-tech/genkitx-redis) - Redis ベクトルストア向けプラグイン
   - [`genkitx-voiceflow`](https://github.com/xavidop/genkitx-voiceflow) - Voiceflow KB との統合用プラグイン
   - [`genkitx-lancedb`](https://genkit.dev/docs/plugins/lancedb/) - LanceDB ベクトルストア向けプラグイン
   - [`genkitx-pinecone`](https://genkit.dev/docs/plugins/pinecone/) - Pinecone ベクトルストア用プラグイン。
   - [`genkitx-chromadb`](https://genkit.dev/docs/plugins/chroma/) - Chroma ベクトルストア向けプラグイン
   - [`genkitx-neo4j`](https://genkit.dev/docs/plugins/neo4j/) - Neo4j ベクトルストア向けプラグイン
   - [`genkitx-cloud-sql-pg`](https://genkit.dev/docs/plugins/cloud-sql-pg/) - Cloud SQL for PostgreSQL ベクトルストア用プラグイン。
   - [`genkitx-weaviate`](https://github.com/xavidop/genkitx-weaviate) - Weaviate ベクトルストア用プラグイン。
   - [`genkitx-mongodb`](https://github.com/mongodb-partners/genkitx-mongodb/tree/main/plugin) - MongoDB ベクトルストア向けプラグイン
3. Evaluator Plugins
   - [`genkitx-promptfoo`](https://github.com/yukinagae/genkitx-promptfoo) - Promptfoo エバリュエーション向けプラグイン
4. Other Plugins
   - [`genkitx-graph`](https://github.com/TheFireCo/genkit-plugins/tree/main/plugins/graph) - グラフワークフローの構築用プラグイン
   - [`@invertase/genkit-plugin-redis`](https://github.com/invertase/genkit-plugin-redis) - Genkit 用 Redis プラグイン。状態保存、トレース保存、キャッシュ、レート制限を効率的に実現。
   - [`genkitx-rxjs`](https://github.com/pavelgj/genkitx-rxjs) - Genkit 用シンプルな RxJS ヘルパー/アダプタ。
   - [`@agentic/genkit`](https://docs.agentic.so/marketplace/ts-sdks/genkit) - Genkit SDK 用アグエントツールアダプタ。
   - [`@auth0/ai-genkit`](https://genkit.dev/docs/plugins/auth0/) - Genkit 用公式 Auth0 プラグイン。認証および認可機能を提供。
   - [`genkitx-langfuse`](https://github.com/marcelfolaron/genkitx-langfuse) - Langfuse との統合用プラグイン。テレメトリとプロンプト管理を実現。
   - [`genkitx-posthog`](https://github.com/orchlab/genkitx-posthog) - PostHog との統合用プラグイン。
   - [`ejentum-genkit`](https://github.com/ejentum/ejentum-genkit) - Ejentum Reasoning Harness から構造化された認知フレームワークを返す4つのエージェント呼び出し可能なツール（推論、コード、反欺瞞、記憶）を登録するプラグイン。

<a id="python---official"></a>
### Python - 公式
1. Model / Embedding Plugins
   - [`google-genai`](https://genkit.dev/python/docs/reference/plugins/google-genai/) - Google Generative AI プラグインは、Gemini API および Vertex AI モデルを介して Google の Gemini モデルにインターフェースを提供。
   - [`ollama`](https://genkit.dev/python/docs/reference/plugins/ollama/) - Ollama プラグインは、Ollama がサポートする任意のローカル LLM にインターフェースを提供。
2. Vector Store Plugins
   - [`firestore`](https://genkit.dev/python/docs/reference/plugins/firestore/) - Firestore プラグインは、Firestore ベクトルストアにインターフェースを提供。
   - [`dev_local_vectorstore`](https://genkit.dev/python/docs/reference/plugins/dev-local-vectorstore/) - 開発用のローカルベクトルストア用プラグイン。
3. Other Plugins:
   - [`server flask`](https://genkit.dev/python/docs/flask/) - Genkit でウェブアプリケーションを構築するための Flask プラグイン。

<a id="golang---official"></a>
### Golang - 公式

1. Model / Embedding Plugins
   - [`googlegenai`](https://genkit.dev/go/docs/plugins/google-genai/) - Google Generative AI プラグインは、Gemini API および Vertex AI Models を介して Google の Gemini モデルにインターフェースを提供。
   - [`ollama`](https://genkit.dev/go/docs/plugins/ollama/) - Ollama プラグインは、Ollama がサポートする任意のローカル LLM にインターフェースを提供。
   - [`compat_oai,compat_oai/openai,compat_oai/anthropic`](https://genkit.dev/go/docs/plugins/openai/) - 互換性のある OpenAI API（OpenAI、Anthropic プロバイダー）用プラグイン。
2. Vector Store Plugins
   - [`pinecone`](https://genkit.dev/go/docs/plugins/pinecone/) - Pinecone ベクトルストア用プラグイン。
   - [`alloydb`](https://genkit.dev/go/docs/plugins/alloydb/) - AlloyDB ベクトルストア用プラグイン。
   - [`localvec`](https://firebase.google.com/docs/genkit-go/rag) - 開発用のローカルベクトルストア用プラグイン。
   - [`pgvector`](https://genkit.dev/go/docs/plugins/pgvector/) - PostgreSQL (PGVector) ベクトルストア用プラグイン。
   - [`postgresql`](https://genkit.dev/go/docs/plugins/cloud-sql-pg/) - Cloud SQL for PostgreSQL ベクトルストア用プラグイン。
   - [`weaviate`](https://github.com/firebase/genkit/tree/main/go/plugins/weaviate) - Weaviate ベクトルストア用プラグイン。
3. Monitoring Plugins
   - [`googlecloud`](https://genkit.dev/go/docs/plugins/google-cloud/) - Google Cloud プラグインは、Genkit のテレメトリおよびログデータを Google Cloud の Operation Suite にエクスポート。
4. Other Plugins:
   - [`mcp`](https://genkit.dev/go/docs/plugins/mcp/) - MCP プラグインは、MCP（Managed Context Protocol）にインターフェースを提供。

<a id="golang---community"></a>
### Golang - コミュニティ

1. Model / Embedding Plugins
   - [`bedrock`](https://pkg.go.dev/github.com/xavidop/genkit-aws-bedrock-go) - AWS Bedrock API 用プラグイン。
   - [`azureaifoundry`](https://pkg.go.dev/github.com/xavidop/genkit-azure-foundry-go) - Azure AI Foundry 用プラグイン。
2. Vector Store Plugins
   - [`qdrant`](https://github.com/qdrant/qdrant-genkit/tree/main/go) - Qdrant ベクトルストア向けプラグイン
3. Monitoring Plugin:
   - [`opentelemetry`](https://github.com/xavidop/genkit-opentelemetry-go) - OpenTelemetry 用の Genkit アプリケーション監視プラグイン

<a id="dart---official"></a>
### Dart - 公式

1. Core
   - [`genkit`](https://pub.dev/packages/genkit) - Genkit 用の Dart SDK。テキスト生成、構造化出力、ツール呼び出し、エージェントワークフローを統一インターフェースで提供
2. Model / Embedding Plugins
   - [`genkit_google_genai`](https://pub.dev/packages/genkit_google_genai) - Genkit Dart 用の Google AI プラグイン
   - [`genkit_anthropic`](https://pub.dev/packages/genkit_anthropic) - Genkit Dart 用の Anthropic プラグイン
   - [`genkit_openai`](https://pub.dev/packages/genkit_openai) - Genkit Dart 用の OpenAI プラグイン
   - [`genkit_chrome`](https://pub.dev/packages/genkit_chrome) - Genkit Dart 及 Chrome Prompt API (Gemini Nano) プラグイン
   - [`genkit_firebase_ai`](https://pub.dev/packages/genkit_firebase_ai) - Genkit Dart 用の Firebase AI プラグイン
3. Other Plugins
   - [`genkit_mcp`](https://pub.dev/packages/genkit_mcp) - Genkit Dart 用のモデルコンテキストプロトコル (MCP) プラグイン
   - [`genkit_middleware`](https://pub.dev/packages/genkit_middleware) - Genkit Dart 用の共通ミドルウェア (ファイルシステム、スキル、toolApproval)
   - [`genkit_shelf`](https://pub.dev/packages/genkit_shelf) - Genkit Dart 用の Shelf HTTP サーバー統合

<a id="java-unofficial---community"></a>
### Java（非公式）- コミュニティ

1. Core
   - [`genkit-java`](https://github.com/genkit-ai/genkit-java/packages) - Genkit 用の非公式 Java SDK。AIを活用したアプリケーション開発におけるJavaサポートを提供
2. Model / Embedding Plugins
   - [`genkit-plugin-openai`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/openai) - OpenAI モデル (GPT-4o, GPT-4o-mini など) および埋め込みデータ向けプラグイン
   - [`genkit-plugin-google-genai`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/google-genai) - Google Gemini モデルおよび Imagen 画像生成向けプラグイン
   - [`genkit-plugin-anthropic`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/anthropic) - Anthropic Claude モデル向けプラグイン
   - [`genkit-plugin-aws-bedrock`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/aws-bedrock) - AWS Bedrock モデル (Amazon Nova, Claude, LLaMA, Mistral など) 向けプラグイン
   - [`genkit-plugin-azure-foundry`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/azure-foundry) - Azure AI Foundry モデル向けプラグイン
   - [`genkit-plugin-xai`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/xai) - XAI (x.ai) Grok モデル向けプラグイン
   - [`genkit-plugin-deepseek`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/deepseek) - DeepSeek モデル向けプラグイン
   - [`genkit-plugin-cohere`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/cohere) - Cohere Command モデル向けプラグイン
   - [`genkit-plugin-mistral`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/mistral) - Mistral AI モデル用プラグイン
   - [`genkit-plugin-groq`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/groq) - Groq の高速推論用プラグイン
   - [`genkit-plugin-ollama`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/ollama) - ローカル Ollama モデル用プラグイン
   - [`genkit-plugin-compat-oai`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/compat-oai) - OpenAI 互換 API エンドポイント用プラグ及イン
3. Vector Store Plugins
   - [`genkit-plugin-localvec`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/localvec) - 開発用ローカルファイルベースのベクトルストア用プラグイン
   - [`genkit-plugin-firebase`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/firebase) - Firebase (Firestore ベクトル検索、Cloud Functions、テレメトリ) 用プラグイン
   - [`genkit-plugin-weaviate`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/weaviate) - Weaviate ベクトルデータベース用プラグイン
   - [`genkit-plugin-postgresql`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/postgresql) - PostgreSQL と pgvector 用プラグイン
   - [`genkit-plugin-pinecone`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/pinecone) - Pinecone ベクトルデータベース用プラグイン
4. Evaluator Plugins
   - [`genkit-plugin-evaluators`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/evaluators) - 信頼性、関連性など、事前構築された RAGAS 風評価器用プラグイン
5. Other Plugins
   - [`genkit-plugin-jetty`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/jetty) - Jetty 12 を使用した HTTP サーバー用プラグイン
   - [`genkit-plugin-spring`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/spring) - Spring Boot を使用した HTTP サーバー用プラグイン
   - [`genkit-plugin-mcp`](https://github.com/genkit-ai/genkit-java/tree/main/plugins/mcp) - モデルコンテキストプロトコル (MCP) クライアント統合用プラグイン

<a id="api-references"></a>
## APIリファレンス
1. [JavaScript](https://js.api.genkit.dev/) - JavaScript API の仕様
2. [Python](https://python.api.genkit.dev/) - Python API の仕様
3. [Golang](https://pkg.go.dev/github.com/firebase/genkit/go) - Golang API の仕様

<a id="books"></a>
## 書籍
1. [Mastering Genkit: Go Edition](https://mastering-genkit.github.io/mastering-genkit-go/) - Go と Genkit を使って、生産環境向け AI アプリケーションを構築

<a id="solutions"></a>
## ソリューション

- [`internal AI`](https://github.com/tanabee/internal-ai) - Genkit 基盤のオープンソース内部 AI チャットアプリケーション
- [`Perplexity CLI`](https://github.com/xavidop/perplexity-cli) - Tavily AI のウェブ検索結果を活用して、Perplexity がどのように動作するかをシミュレートし、ユーザーの質問に AI による回答を提供するコマンドラインツール (CLI)
- [`GCP Cost MCP Server`](https://github.com/nozomi-koborinai/gcp-cost-mcp-server) - Go で構築された MCP サーバー。AI アシスタントが Google Cloud のコストを直接推定できるようにする。GCP プライシングカルクレーターの手動使用を置き換える。
- [`Genkit Azure Function AI Foundry`](https://github.com/xavidop/genkit-azure-function-ai-foundry) - GenkitとAzure FunctionsおよびAzure AI Foundryの使用方法を示すサンプルプロジェクト
- [`Genkit AWS Lambda Bedrock`](https://github.com/xavidop/genkit-aws-lambda-bedrock) - GenkitとAWS LambdaおよびAmazon Bedrockの使用方法を示すサンプルプロジェクト
- [`Genkit Kraft`](https://github.com/DEEJ4Y/genkitkraft) - Genkit Go SDKをベースに構築された、自前でホスト可能なLLMアグエントプラットフォーム。視覚UI、OpenAI互換のREST API、AIクライアント（例：Claude）との連携を可能にするMCPサーバーをサポートしています。

<a id="talks"></a>
## 講演

- [Supercharge your app with Genkit](https://www.youtube.com/watch?v=eVud8llb_W0) - Genkitをアプリに活用する方法についての講演
- [Accelerating Generative AI App Development with Flutter & Genkit](https://speakerdeck.com/coborinai/accelerating-generative-ai-app-development-with-flutter-and-firebase-genkit) - 日本におけるFlutterカンファレンスFlutterGakkaiでの発表資料。GenkitをFlutterで迅速に生成AIアプリを開発する方法を紹介しています。
- [Dart client for Genkit: Call Genkit Flows from Flutter/Dart - Slides](https://speakerdeck.com/coborinai/dart) - Google I/O Extended Tokyo 2025でのライトニングトークのスライド。Flutter/DartアプリからGenkitフローを呼び出すためのDartクライアントライブラリを紹介しています。
- [Dart client for Genkit: Call Genkit Flows from Flutter/Dart - Video](https://youtu.be/AakdczWQLzY?si=S5aT29miICHWQepM) - Google I/O Extended Tokyo 2025でのライトニングトークの動画。Flutter/DartアプリからGenkitフローを呼び出すためのDartクライアントライブラリを紹介しています。

<a id="videos"></a>
## 動画
- [Getting started with Genkit/JS 1.0](https://www.youtube.com/watch?v=3p1P5grjXIQ) - Genkit/JS 1.0の始め方を学ぶ
- [Getting started with Genkit (outdated)](https://www.youtube.com/watch?v=M8rfDySBBvM) - Genkitの始め方に関する動画チュートリアル
- [What are Genkit flows? (outdated)](https://youtu.be/ONR38NZK5FE) - フローはGenkitにおける重要な概念です。なぜそれが特別なのか、そしてどのように使うのかを学びましょう。
- [Build an Angular app with Genkit and deploy to Firebase (outdated)](https://youtu.be/TGHua_RtUjs) - PavelがAngularアプリを作成し、Firebaseにデプロイする様子を一緒に見ましょう。
- [DeepDive #1 - Genkit's reflection API and how it powers Genkit's developer UI (outdated)](https://youtu.be/CGVBR8quZac) - Genkit開発者UIが反射APIを介してGenkitと通信する仕組みを学びましょう。
- [Retrieval Augmented Generation (RAG) with Genkit (outdated)](https://youtu.be/p8ZlYAmbWHE) - PDFを効率的にパースし、Genkitのローカルベクトルストアを用いてコンテンツを検索可能なベクトルに変換し、再ランクを実装して、クエリに最も関連性の高いドキュメントを特定する方法を学びましょう。
- [Firebase After Hours #3 - Genkit: More than Meets the AI! (outdated)](https://youtu.be/VFPsp7aURWA?t=152s) - NoheとPeterと一緒にお話して、Genkit、GoogleのオープンソースAI統合フレームワークについて学びましょう。特別ゲストとしてGenkitチームのリードエンジニアPavel Jbanovも登場します。
- [Firebase After Hours #4 - Genkit: Tooltime (outdated)](https://youtu.be/01XOIhh2ibA) - LLMに現実世界との接続を可能にするツール呼び出しを使って、LLMに超能力を与える方法を学びましょう。

<a id="articles"></a>
## 記事

- [Extracting structured data from PDFs using Gemini 2.0 and Genkit](https://firebase.blog/posts/2025/02/gemini-genkit-pdf-structured-data) - Gemini 2.0とGenkit 1.0を使ってPDFから構造化データを抽出する方法を学びましょう。
- [Genkit in Node, Building a Weather Service with AI Integration](https://xavidop.me/firebase/gcp/2025-02-28-firebase-genkit-node-tool/) - Node.jsでExpress、GitHub ModelsおよびToolsを使用して、Genkitを用いた天気サービスの構築方法を探索します。
- [Build Genkit Node.js apps with Dash Agents](https://medium.com/firebase-developers/build-firebase-genkit-nodejs-apps-with-dash-agents-skip-the-docs-258e067b3fdc) - Dash Agentsを活用してGenkit Node.jsアプリをステップバイステップで構築するガイド。
- [Genkit with Gemma using Ollama](https://xavidop.me/firebase/gcp/2024-05-24-firebase-genkit-ollama/) - Ollamaを使ってGemmaとGen AI Kitを組み合わせたFirebaseプロジェクト。
- [Master Gemma2 and Genkit](https://medium.com/firebase-developers/how-to-develop-using-the-gemma2-model-in-genkit-085f22ce68f3) - Gemma2とGenkitの統合方法を学びましょう。
- [Unleash the Power of Function Calling with Genkit](https://medium.com/firebase-developers/implementing-function-calling-using-genkit-0c03f6cb9179) - Genkitを用いた関数呼び出しの実装方法を学習してください。
- [Unlocking the power of code execution in Genkit](https://medium.com/firebase-developers/getting-started-with-code-execution-in-genkit-c5391b45b321) - GenkitにPythonコードを統合する方法を学習してください。
- [Understanding Genkit flows with Czech language tricks](https://dev.to/denisvalasek/understanding-genkit-flows-with-czech-language-tricks-26i3) - Genkitのフローを活用し、Genkit UIの機能を操作する方法を学習してください。
- [Orchestrating Firebase and AI: 8 Genkit Architecture Patterns](https://medium.com/@nozomi-koborinai/orchestrating-firebase-and-ai-8-genkit-architecture-patterns-12e44db40345) - FirebaseとAIをGenkitを用いて統合するための8つのアーキテクチャパターンについてのガイド。
- [High-Precision Responses with Genkits Google Search Integration](https://medium.com/firebase-developers/high-precision-responses-with-genkits-google-search-integration-7f142f5c9693) - Google SearchをGenkitで統合する方法を学習してください。
- [How to Develop Firebase functions with Genkit](https://medium.com/@nozomi-koborinai/how-to-develop-firebase-genkit-functions-2677b386a227) - Genkit Firebase製品統合を用いたFirebase関数の効率的なローカルテストに関する実践ガイド。
- [Genkit for Go Developers: A Guide to Building LLM Applications](https://medium.com/@yukinagae/firebase-genkit-for-go-developers-a-guide-to-building-llm-applications-f96c51c34b10) - Go開発者向けのGenkitの初学者ガイド。
- [Orchestrating Firebase and AI: Genkit architecture example](https://docs.google.com/presentation/d/10F2hjzJhdInSuhDQ8G_B2raGz79mzTRIcWU_59Zh5Y8/edit?usp=sharing) - GDG DevFest Tokyo 2024でのライトニングトークで紹介された内容。
- [Getting Started with AI Image Generation Apps on Flutter, Genkit, and Imagen 3](https://medium.com/@nozomi-koborinai/getting-started-with-ai-image-generation-apps-on-flutter-genkit-and-imagen-3-9a83c63cbdf3) - Flutter、Genkit、GoogleのImagen 3を用いたAI画像生成アプリの開発ガイド。
- [Extending Your AI Application with Genkit MCP](https://medium.com/@nozomi-koborinai/extending-your-ai-application-with-genkit-mcp-475d7533ca9e) - Genkit MCPクライアントを使ってGoogle Mapsを統合し、強化された場所ベースAI機能をクエリする方法を学習してください。
- [Understanding Model Context Protocol Through Building the Genkit for Dart MCP Plugin](https://koborin.ai/tech/mcp-deep-dive) - MCP仕様についての詳細な解説、Genkit Dart用MCPプラグイン実装から得られた洞察を共有。
- [Genkit vs Agent Development Kit (ADK): Choosing the Right Google‑Backed AI Framework](https://medium.com/@nozomi-koborinai/genkit-vs-agent-development-kit-adk-choosing-the-right-google-backed-ai-framework-1744b73234ac) - 2つのGoogleが支援するAIフレームワークを比較し、開発者が必要なツールを選択できるようにするガイド。
- [Dart Client for Genkit: Call Genkit Flows from Flutter/Dart](https://medium.com/@nozomi-koborinai/dart-client-for-genkit-call-genkit-flows-from-flutter-dart-b5a2c9b9400e) - FlutterおよびDartアプリからGenkitフローを呼び出し、ストリーミングと型安全をサポートするDartクライアントライブラリの使用方法についての包括的なガイド。
- [Gemini in your Slack workspace using Firebase & Genkit](https://dev.to/denisvalasek/gemini-in-your-slack-workspace-using-firebase-genkit-530c) - Genkitを用いてSlackボットにGeminiを統合する方法を学習してください。
- [Set up RAG with Genkit and Firebase in 15 minutes](https://dev.to/denisvalasek/set-up-rag-with-genkit-and-firebase-in-15-minutes-50b2) - RAG、Genkit、Firebase FirestoreをベクトルDBとして活用する方法についての紹介。

<a id="tutorials"></a>
## チュートリアル

- [Slack Bot App](https://medium.com/firebase-developers/build-a-slack-bot-app-with-firebase-genkit-in-just-100-lines-71d4e49c9e08) - Genkitを用いたSlackボットアプリの開発チュートリアル。



<a id="follow"></a>
## フォロー



- [Firebase](https://x.com/firebase) - Firebaseの公式Twitterアカウント。
- [Genkit Discord server](https://discord.gg/qXt5zzQKpc) - Genkitの公式Discordサーバー。
- [Genkit GitHub](https://github.com/firebase/genkit) - Genkitの公式GitHubリポジトリ。
- [Genkit Dart GitHub](https://github.com/genkit-ai/genkit-dart) - Genkit Dartの公式GitHubリポジトリ。
- [Genkit Java GitHub](https://github.com/genkit-ai/genkit-java) - Genkit Java の非公式 GitHub リポジトリ。
