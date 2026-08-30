---
title: "Awesome Go"
description: "Goを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。"
licenseSource: "github-avelino-awesome-go-readme-md"
---

# Awesome Go

Goを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。

## 目次 <a id="contents"></a>

<details>
<summary>目次を展開</summary>

- [GoのAwesomeリスト](#awesome-go)
  - [目次](#contents)
  - [アクターモデル](#actor-model)
  - [人工知能](#artificial-intelligence)
  - [音声と音楽](#audio-and-music)
  - [認証と認可](#authentication-and-authorization)
  - [ブロックチェーン](#blockchain)
  - [ボット構築](#bot-building)
  - [ビルド自動化](#build-automation)
  - [コマンドライン](#command-line)
    - [高度なコンソールUI](#advanced-console-uis)
    - [標準CLI](#standard-cli)
  - [設定](#configuration)
  - [継続的インテグレーション](#continuous-integration)
  - [CSSプリプロセッサー](#css-preprocessors)
  - [データ統合フレームワーク](#data-integration-frameworks)
  - [データ構造とアルゴリズム](#data-structures-and-algorithms)
    - [ビットパッキングと圧縮](#bit-packing-and-compression)
    - [ビット集合](#bit-sets)
    - [Bloom・Cuckooフィルター](#bloom-and-cuckoo-filters)
    - [データ構造・アルゴリズム集](#data-structure-and-algorithm-collections)
    - [イテレーター](#iterators)
    - [マップ](#maps)
    - [その他のデータ構造・アルゴリズム](#miscellaneous-data-structures-and-algorithms)
    - [Nullable型](#nullable-types)
    - [キュー](#queues)
    - [集合](#sets)
    - [テキスト分析](#text-analysis)
    - [ツリー](#trees)
    - [パイプ](#pipes)
  - [データベース](#database)
    - [キャッシュ](#caches)
    - [Goで実装されたデータベース](#databases-implemented-in-go)
    - [データベーススキーマ移行](#database-schema-migration)
    - [データベースツール](#database-tools)
    - [SQLクエリビルダー](#sql-query-builders)
  - [データベースドライバー](#database-drivers)
    - [複数バックエンド向けインターフェース](#interfaces-to-multiple-backends)
    - [リレーショナルDBドライバー](#relational-database-drivers)
    - [NoSQLドライバー](#nosql-database-drivers)
    - [検索・分析データベース](#search-and-analytic-databases)
  - [日付と時刻](#date-and-time)
  - [分散システム](#distributed-systems)
  - [動的DNS](#dynamic-dns)
  - [メール](#email)
  - [組み込みスクリプト言語](#embeddable-scripting-languages)
  - [エラー処理](#error-handling)
  - [ファイル処理](#file-handling)
  - [金融](#financial)
  - [フォーム](#forms)
  - [関数型](#functional)
  - [ゲーム開発](#game-development)
  - [ジェネレーター](#generators)
  - [地理情報](#geographic)
  - [Goコンパイラー](#go-compilers)
  - [ゴルーチン](#goroutines)
  - [GUI](#gui)
  - [ハードウェア](#hardware)
  - [画像](#images)
  - [IoT（モノのインターネット）](#iot-internet-of-things)
  - [ジョブスケジューラー](#job-scheduler)
  - [JSON](#json)
  - [ロギング](#logging)
  - [機械学習](#machine-learning)
  - [メッセージング](#messaging)
  - [Microsoft Office](#microsoft-office)
    - [Microsoft Excel](#microsoft-excel)
    - [Microsoft Word](#microsoft-word)
  - [その他](#miscellaneous)
    - [依存性注入](#dependency-injection)
    - [プロジェクト構成](#project-layout)
    - [文字列](#strings)
    - [未分類](#uncategorized)
  - [自然言語処理](#natural-language-processing)
    - [言語判定](#language-detection)
    - [形態素解析](#morphological-analyzers)
    - [スラッグ生成](#slugifiers)
    - [トークナイザー](#tokenizers)
    - [翻訳](#translation)
    - [翻字](#transliteration)
  - [ネットワーク](#networking)
    - [HTTPクライアント](#http-clients)
  - [OpenGL](#opengl)
  - [ORM](#orm)
  - [パッケージ管理](#package-management)
  - [性能](#performance)
  - [クエリ言語](#query-language)
  - [リフレクション](#reflection)
  - [リソース埋め込み](#resource-embedding)
  - [科学計算・データ分析](#science-and-data-analysis)
  - [セキュリティ](#security)
  - [シリアライズ](#serialization)
  - [サーバーアプリケーション](#server-applications)
  - [ストリーム処理](#stream-processing)
  - [テンプレートエンジン](#template-engines)
  - [テスト](#testing)
    - [テストフレームワーク](#testing-frameworks)
    - [モック](#mock)
    - [ファジングとデルタデバッグ／縮小](#fuzzing-and-delta-debuggingreducingshrinking)
    - [Selenium・ブラウザー制御ツール](#selenium-and-browser-control-tools)
    - [障害注入](#fail-injection)
  - [テキスト処理](#text-processing)
    - [フォーマッター](#formatters)
    - [マークアップ言語](#markup-languages)
    - [パーサー／エンコーダー／デコーダー](#parsersencodersdecoders)
    - [正規表現](#regular-expressions)
    - [サニタイズ](#sanitation)
    - [スクレイパー](#scrapers)
    - [RSS](#rss)
    - [ユーティリティ／その他](#utilitymiscellaneous)
  - [サードパーティAPI](#third-party-apis)
  - [ユーティリティ](#utilities)
  - [UUID](#uuid)
  - [バリデーション](#validation)
  - [バージョン管理](#version-control)
  - [動画](#video)
  - [Webフレームワーク](#web-frameworks)
    - [ミドルウェア](#middlewares)
      - [実際のミドルウェア](#actual-middlewares)
      - [HTTPミドルウェア作成ライブラリ](#libraries-for-creating-http-middlewares)
    - [ルーター](#routers)
  - [WebAssembly](#webassembly)
  - [Webhookサーバー](#webhooks-server)
  - [Windows](#windows)
  - [ワークフローフレームワーク](#workflow-frameworks)
  - [XML](#xml)
  - [ゼロトラスト](#zero-trust)
  - [コード解析](#code-analysis)
  - [エディタープラグイン](#editor-plugins)
  - [Go generateツール](#go-generate-tools)
  - [Goツール](#go-tools)
  - [ソフトウェアパッケージ](#software-packages)
    - [DevOpsツール](#devops-tools)
    - [その他のソフトウェア](#other-software)
- [資料](#resources)
  - [ベンチマーク](#benchmarks)
  - [カンファレンス](#conferences)
  - [電子書籍](#e-books)
    - [有料電子書籍](#e-books-for-purchase)
    - [無料電子書籍](#free-e-books)
  - [Gopher](#gophers)
  - [ミートアップ](#meetups)
  - [スタイルガイド](#style-guides)
  - [ソーシャルメディア](#social-media)
    - [Twitter](#twitter)
    - [Reddit](#reddit)
  - [Webサイト](#websites)
    - [チュートリアル](#tutorials)
    - [ガイド付き学習](#guided-learning)
  - [貢献](#contribution)
  - [ライセンス](#license)

**[⬆ back to top関連](#contents)**



</details>

## アクターモデル <a id="actor-model"></a>

_アクターモデルに関するGoライブラリ、ツール、または資料です。_

- [asyncmachine-go/pkg/machine](https://github.com/pancsta/asyncmachine-go/tree/main/pkg/machine) - グラフ制御フローライブラリ（AOP、アクター、ステートマシン）
- [Ergo](https://github.com/ergo-services/ergo) - Erlangにインスピレーションを受けて、Golangでイベント駆動アーキテクチャを構築できるネットワーク透明性を持つアクターベースのフレームワーク。
- [Goakt](https://github.com/Tochemey/goakt) - プロトコルバッファをメッセージとして使用する、高速かつ分散型のアクターフレームワーク（Golang用）。
- [Hollywood](https://github.com/anthdm/hollywood) - Golangで書かれた、驚異的に高速かつ軽量のアクターエンジン。
- [ProtoActor](https://github.com/asynkron/protoactor-go) - Go、C#、Java/Kotlin向けの分散アクター。

**[⬆ back to top関連](#contents)**

## 人工知能 <a id="artificial-intelligence"></a>

_人工知能に関するGoライブラリ、ツール、または資料です。_

- [AegisFlow](https://github.com/saivedant169/AegisFlow) - LLMを10以上のプロバイダー間でルーティング・セキュリティ・モニタリングするAIゲートウェイ。OpenAI互換API、WASMポリシープラグイン、カナリーロールアウト、リアルタイムダッシュボードを提供。
- [Aetheris](https://github.com/Colin4k1024/Aetheris) - イベントソース、チェックポイント回復、アット・マスト・オング执行保証を備えたAIアグエント実行ランタイム。Goで構築。
- [agent-sdk-go](https://github.com/agenticenv/agent-sdk-go) - Temporal上で持続可能なAIアグエントを構築するためのGo SDK。ツール、MCP、人間の承認、サブアグエントの委任をサポート。
- [agy-mcp](https://github.com/tphakala/agy-mcp) - モデルコンテキストプロトコル（MCP）サーバーがAntigravity CLIをラップし、プロンプトやペアレビューを実行。
- [ai](https://github.com/joakimcarlsson/ai) - 複数プロバイダー間で統一されたLLM、エмベッディング、ツール呼び出し、MCP統合を実現するAIアグエントとアプリケーションの構築を支援するGoツールキット。
- [chromem-go](https://github.com/philippgille/chromem-go) - Chromaのようなインターフェースと第三者依存関係のない、Go用の埋め込み型ベクトルデータベース。メモリ内実行で、オプションで永続化。
- [crewai-go](https://github.com/rhgs/crewai-go) - CrewAI（マルチアグエントオーケストレーション）のGo向け自然な実装。ゼロ依存、標準ライブラリのみ。
- [dakera-go](https://github.com/dakera-ai/dakera-go) - Dakeraのセルフホスト型アグエントメモリサーバーの公式GoクライアントSDK。メモリストア/リカル、セッション管理、ネームスペース操作、デシード設定の型付きインターフェースを提供。
- [fun](https://gitlab.com/tozd/go/fun) - Goで大規模言語モデル（LLM）を使用する最もシンプルかつ強力な方法。
- [goai](https://github.com/zendev-sh/goai) - AIアプリケーション構築用Go SDK。1つのSDK、20以上のプロバイダー。Vercel AI SDKにインスピレーションを得た。
- [GoModel](https://github.com/ENTERPILOT/GoModel) - OpenAI、Anthropic、Gemini、Groq、xAI、Ollamaなど複数プロバイダーを統合したOpenAI互換APIを公開するAIゲートウェイ。ルーティング、使用量トラッキング、レート制限、ガードレールを提供。
- [hotplex](https://github.com/hrygo/hotplex) - Claude Code、OpenCode、pi-monoなど他のCLI AIツール向けの長期間セッションをサポートするAIアグドランタイムエンジン。フルダブルストリーミング、マルチプラットフォーム統合、セキュアなサンドボックスを提供。
- [jargo](https://github.com/gojargo/jargo) - WebRTCを活用したリアルタイム音声AIアグエントの構築フレームワーク。スピーチ-to-テキスト、LLM、テキスト-to-スピーチをストリーミングパイプラインに接続。
- [keen-code](https://github.com/mochow13/keen-code) - コンテキスト効率の高いターミナルベースAIコーディングアグエント。プロバイダーに依存せず、MCP、アグエントスキル、サブアグエントなどをサポート。シンプルで明確なTUIを備える。
- [langchaingo](https://github.com/tmc/langchaingo) - LangChainGoは、言語モデルを駆動するアプリケーションを開発するためのフレームワーク。
- [langgraphgo](https://github.com/smallnest/langgraphgo) - LangGraphの概念に基づき、LLMを使った状態を持つマルチアクターアプリケーションを構築するGoライブラリ。多数の組み込みAgentアーキテクチャを備える。
- [llm-box](https://github.com/alib8b8/llm-box) - YAML駆動のパイプラインを持つターミナルベースAIワークフローエンジン。20以上のLLMプロバイダー（DeepSeek、Qwen、GLM、Mistralなど）をサポートし、ワークフロー管理用のTUIを提供。
- [LocalAI](https://github.com/mudler/LocalAI) - オープンソースのOpenAI代替品。自前でAIモデルをホストできる。
- [localaik](https://github.com/harshaneel/localaik) - OpenAIおよびGemini APIをLocalStackスタイルでローカルエミュレート。1つのDockerコンテナで実行、Llama.cpp + Gemma 3バックエンド。
- [mcp-go](https://github.com/mark3labs/mcp-go) - Goで実装されたModel Context Protocol（MCP）を用いた、MCPサーバーおよびクライアントの構築用ライブラリ。
- [Ollama](https://github.com/jmorganca/ollama) - ローカルに大規模言語モデルを実行できる。
- [OllamaFarm](https://github.com/presbrey/ollamafarm) - Ollamaのパックを管理・負荷分散・フェイルオーバーできる。
- [otellix](https://github.com/oluwajubelo1/otellix) - コスト制約のある生産環境向けのOpenTelemetryネイティブLLMの可視化とコスト制御のガードレール。
- [routex](https://github.com/Ad3bay0c/routex) - YAML駆動のマルチエージェントAIランタイム。Erlangスタイルの監視機能、MCPツールサーバー対応、CLIを備える。
- [semantic-search](https://github.com/DavidBelicza/semantic-search) - PDF、Markdown、DOCX、ソースコードなど、さまざまなファイル形式に対する意味ベース検索。生成AIエンベディングモデルを用いてファイルをベクトルデータベースに変換する。
- [skillreaper](https://github.com/thousandflowers/skillreaper) - AIエージェントセッションのトランスクリプトをスキャンするCLI。Claude Code、Codex CLI、Hermes、OpenCode、Cursor、OpenClawにおいて使われていないスキルやMCPサーバー、エージェントを特定し、安全に隔離する。
- [Smeldr](https://github.com/Smeldr/core) - AIネイティブなコンテンツバックエンド。型付きライフサイクル管理、すべてのコンテンツタイプにネイティブMCPツール、実行時依存関係なし。
- [trpc-agent-go](https://github.com/trpc-group/trpc-agent-go) - LLMを用いたマルチエージェントシステムの構築用フレームワーク。
- [web-researcher-mcp](https://github.com/zoharbabin/web-researcher-mcp) - AIアシスタントにウェブ検索、コンテンツ抽出、マルチソース調査機能を提供するMCPサーバー。1つのバイナリ、5つの検索プロバイダーに回路ブレーカーによるフェイルオーバー、4段階スクリーピングパイプライン。
- [zenflow](https://github.com/zendev-sh/zenflow) - マルチエージンのオーケストレーションとワークフローエンジン。宣言型YAMLワークフロー、LLMコアオーダーとハブ・スポークメールボックス、レースセーフな配信。1つのYAMLファイル、1つのGoバイナリ。goai対応プロバイダー上で実行可能。

**[⬆ back to top関連](#contents)**

## 音声と音楽 <a id="audio-and-music"></a>

_音声と音楽に関するGoライブラリ、ツール、または資料です。_

- [beep](https://github.com/gopxl/beep) - シンプルなプレイバックとオーディオ操作用ライブラリ。
- [flac](https://github.com/mewkiz/flac) - FLACストリームに対応するネイティブGo製FLACエンコーダー／デコーダー。
- [gaad](https://github.com/Comcast/gaad) - ネイティブGo製のAACビットストリームパーサー。
- [go-aac](https://github.com/tphakala/go-aac) - FFmpegから移植されたPure Go製AAC-LCエンコーダー／デコーダー。
- [go-audio-resampler](https://github.com/tphakala/go-audio-resampler) - SIMD高速化を備えた高品質なPure Go製オーディオリサンプラー。
- [go-flac](https://github.com/tphakala/go-flac) - Native Go FLACエンコーダーとデコーダー（SIMD加速）
- [go-mpris](https://github.com/leberKleber/go-mpris) - mpris dbusインターフェース向けクライアント
- [go-opus](https://github.com/tphakala/go-opus) - RFC 6716に準拠したOpus音声コーデック（Goによるネイティブ実装）とRFC準拠デコーダー
- [go-resample](https://github.com/gojargo/go-resample) - 純Go（cgoなし）の音声サンプルレート変換（sinc、線形、零階保持変換を含む）
- [GoAudio](https://github.com/DylanMeeus/GoAudio) - ネイティブGo音声処理ライブラリ
- [gosamplerate](https://github.com/dh1tw/gosamplerate) - Go向けlibsamplerateのバインディング
- [id3v2](https://github.com/bogem/id3v2) - Go向けID3デコードおよびエンコードライブラリ
- [malgo](https://github.com/gen2brain/malgo) - ミニ音声ライブラリ
- [minimp3](https://github.com/tosone/minimp3) - 軽量MP3デコーダーライブラリ
- [music-theory](https://github.com/go-music-theory/music-theory) - Goにおける音楽理論モデル
- [Oto](https://github.com/hajimehoshi/oto) - 複数プラットフォームで音声を再生できる低レベルライブラリ
- [PortAudio](https://github.com/gordonklaus/portaudio) - 音声と音楽に関するGoライブラリ、ツール、ソフトウェア、または資料です。
-[voxrai-ai](https://github.com/Voxray-AI/Voxray) - AI voice agents with a JSON configuration,  STT → LLM → TTS pipelines over WebSocket and WebRTC 

**[⬆ back to top関連](#contents)**

## 認証と認可 <a id="authentication-and-authorization"></a>

_認証と認可に関するGoライブラリ、ツール、または資料です。_

- [authboss](https://github.com/volatiletech/authboss) - ウェブ向けモジュラリーアンセイリティシステム。できるだけ多くのテンプレートや「難しい部分」を省き、Goで新しいウェブプロジェクトを開始するたびに、認証システムを独自に構築する必要なく、すぐにインストール・設定・開発を開始できるようにする。
- [authgate](https://github.com/go-authgate/authgate) - 軽量なOAuth 2.0認可サーバーで、デバイス認可付与（[RFC 8628](https://datatracker.ietf.org/doc/html/rfc8628)）、PKCEによる認可コードフロー（[RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749) + [RFC 7636](https://datatracker.ietf.org/doc/html/rfc7636)）、およびマシン間認証用のクライアント資格付与をサポートしています。
- [branca](https://github.com/essentialkaos/branca) - Golang 1.15以降向けのbranca token [specification implementation](https://github.com/tuupola/branca-spec)
- [casbin](https://github.com/hsluoyz/casbin) - アクセス制御モデル（ACL、RBAC、ABACなど）をサポートする認可ライブラリ
- [cookiestxt](https://github.com/mengzhuo/cookiestxt) - cookies.txtファイルフォーマットのパーサーを提供
- [go-githubauth](https://github.com/jferrl/go-githubauth) - GitHub認証用ユーティリティ：GitHubアプリケーションおよびインストールトークンの生成と使用
- [go-guardian](https://github.com/shaj13/go-guardian) - Go-Guardianは、LDAP、Basic、Bearerトークン、認証証明書をサポートする強力な現代APIおよびウェブ認証をシンプルかつ自然な方法で提供するGoライブラリ
- [go-iam](https://github.com/melvinodsa/go-iam) - 開発者中心のIDおよびアクセス管理システム（シンプルなUIを備える）
- [go-jose](https://github.com/go-jose/go-jose) - JOSEワーキンググループのJSON Web Token、JSON Web Signatures、JSON Web Encryption仕様の比較的完全な実装
- [go-jwt](https://github.com/deatil/go-jwt) - Go向けJWT（JSON Web Token）ライブラリ
- [go-jwt](https://github.com/pardnchiu/go-jwt) - JWT認証パッケージ（指紋化、Redisストレージ、自動リフレッシュ機能を備えるアクセストークンおよびリフレッシュトークンを提供）
- [goiabada](https://github.com/leodip/goiabada) - OAuth2およびOpenID Connectをサポートするオープンソースの認証・認可サーバー
- [gologin](https://github.com/dghubble/gologin) - OAuth1およびOAuth2認証プロバイダーによるログインに使える連鎖型ハンドラー
- [gorbac](https://github.com/mikespook/gorbac) - Golangで実装された軽量な役割ベースアクセス制御（RBAC）
- [gosession](https://github.com/Kwynto/gosession) - GoLangにおけるnet/httpのためのシンプルなセッション。このパッケージはおそらくセッションメカニズムにおける最も優れた実装、あるいは少なくともそれになるように試みている
- [goth](https://github.com/markbates/goth) - OAuthおよびOAuth2のシンプルでクリーンでGo言語にふさわしい使い方を提供。複数のプロバイダーを内蔵でサポート
- [jeff](https://github.com/abraithwaite/jeff) - シンプルで柔軟で安全かつGo言語にふさわしいウェブセッション管理。プラグインバックエンドをサポート
- [jwt](https://github.com/pascaldekloe/jwt) - 軽量なJSON Web Token（JWT）ライブラリ
- [jwt](https://github.com/cristalhq/jwt) - Go向けの安全でシンプルで高速なJSON Web Token
- [jwt-auth](https://github.com/adam-hanna/jwt-auth) - Golang HTTPサーバー向けのJWTミドルウェア。多くの設定オプションを提供
- [jwt-go](https://github.com/golang-jwt/jwt) - JSON Web Token（JWT）のフル機能実装。このライブラリはJWTのパースおよび検証、生成および署名をサポート
- [jwx](https://github.com/lestrrat-go/jwx) - GoモジュールによるさまざまなJWx（JWA/JWE/JWK/JWS/JWT、あるいはJOSEと呼ばれる）技術の実装
- [keto](https://github.com/ory/keto) - 「Zanzibar: Googleの一貫性とグローバルな認可システム」のオープンソース（Go）実装。gRPC、REST API、newSQL、そして簡単かつ細かい権限言語を提供。ACL、RBAC、およびその他のアクセスモデルをサポート
- [loginsrv](https://github.com/tarent/loginsrv) - OAuth2（GitHub）など、複数のバックエンドをサポートするJWTログインマイクロサービス
- [melange](https://github.com/pthm/melange) - OpenFGA認可スキームをPL/pgSQL関数にコンパイルし、PostgreSQL内で細かい関係ベースアクセス制御チェックを実行
- [oauth2](https://github.com/golang/oauth2) - goauth2の継承。JWT、Google API、Compute Engine、App Engineをサポートする汎用OAuth 2.0パッケージ
- [oidc](https://github.com/zitadel/oidc) - OpenID Foundationによって認定されたGo向けのOpenID Connectクライアントおよびサーバーライブラリ
- [openfga](https://github.com/openfga/openfga) - 『Zanzibar: Googleの一貫性とグローバルな認可システム』という論文に基づく細粒度認可の実装。[CNCF](https://www.cncf.io/)をバックアップしています。
- [osin](https://github.com/openshift/osin) - GoLangのOAuth2サーバーライブラリ
- [otpgen](https://github.com/grijul/otpgen) - TOTP/HOTPコードを生成するライブラリ
- [otpgo](https://github.com/jltorresm/otpgo) - Go向けのタイムベースワンタイムパスワード（TOTP）およびHMACベースワンタイムパスワード（HOTP）ライブラリ
- [paseto](https://github.com/o1egl/paseto) - プラットフォームに依存しないセキュリティトークン（PASETO）のGo実装
- [permissions](https://github.com/xyproto/permissions) - ユーザー、ログイン状態、権限を追跡するためのライブラリ。安全なクッキーとbcryptを使用。
- [scope](https://github.com/SonicRoshan/scope) - GoでOAuth2スコープを簡単に管理。
- [scs](https://github.com/alexedwards/scs) - HTTPサーバー向けのセッションマネージャー。
- [securecookie](https://github.com/chmike/securecookie) - 効率的かつ安全なクッキーのエンコード／デコード。
- [session](https://github.com/icza/session) - ウェブサーバー向けのGoセッションマネージメント（Google App Engine - GAEにも対応）。
- [sessions](https://github.com/adam-hanna/sessions) - シンプルで、高パフォーマンスかつ高度にカスタマイズ可能なGo HTTPサーバー向けセッションサービス。
- [sessionup](https://github.com/swithek/sessionup) - シンプルでありながら効果的なHTTPセッション管理と識別パッケージ。
- [sjwt](https://github.com/brianvoe/sjwt) - シンプルで、効果的なJWT生成とパーサー。
- [spicedb](https://github.com/authzed/spicedb) - Zanzibarをインスピレーションとして設計されたデータベースで、細かい認可を実現。
- [x509proxy](https://github.com/vkuznet/x509proxy) - X509プロキシ証明書を処理するためのライブラリ。

**[⬆ back to top関連](#contents)**

## ブロックチェーン <a id="blockchain"></a>

_ブロックチェーンに関するGoライブラリ、ツール、または資料です。_

- [cometbft](https://github.com/cometbft/cometbft) - 分散型、バイザンティン耐性、決定論的状態マシン再現エンジン。Tendermint Coreのフォークであり、Tendermintコンセンサスアルゴリズムを実装。
- [cosmos-sdk](https://github.com/cosmos/cosmos-sdk) - Cosmosエコシステムにおける公開ブロックチェーンを構築するためのフレームワーク。
- [gno](https://github.com/gnolang/gno) - GolangとGnolang（ブロックチェーン用に設計された決定論的なGoの変種）で構築された包括的なスマートコントラクトセット。
- [go-ethereum](https://github.com/ethereum/go-ethereum) - Ethereumプロトコルの公式Go実装。
- [gosemble](https://github.com/LimeChain/gosemble) - Polkadot/Substrateと互換性のあるランタイムを構築するためのGoベースのフレームワーク。
- [gossamer](https://github.com/ChainSafe/gossamer) - Polkad及HostのGo実装。
- [kubo](https://github.com/ipfs/kubo) - GoによるIPFS実装。コンテンツアドレス化されたストレージを提供し、DAppにおける分散ストレージに利用可能。IPFSプロトコルに基づく。
- [lnd](https://github.com/lightningnetwork/lnd) - Lightning Networkノードの完全な実装。
- [nview](https://github.com/blinklabs-io/nview) - Cardanoノード向けのローカルモニタリングツール。TUI（ターミナルユーザーインターフェース）であり、ほとんどの画面サイズに適合。
- [pactus](https://github.com/pactus-project/pactus) - Pactusブロックチェーンのフルノード実装（Goで実装）。
- [solana-go](https://github.com/gagliardetto/solana-go) - ソラナ JSON RPC および WebSocket インターフェースに接続するための Go ライブラリ
- [tendermint](https://github.com/tendermint/tendermint) - テンダミントコンセンサスおよびブロックチェーンプロトコルを用いて、任意のプログラミング言語で書かれた状態マシンをバイザンティン耐性の再現状態マシンに変換するための高性能ミドルウェア
- [tronlib](https://github.com/kslamph/tronlib) - TRON ブロックチェーンとの相互作用に加え、TRC2-0トークンをサポートする、包括的かつ生産環境向けのGo SDK

**[⬆ back to top関連](#contents)**

## ボット構築 <a id="bot-building"></a>

_ボット構築に関するGoライブラリ、ツール、または資料です。_

- [arikawa](https://github.com/diamondburned/arikawa) - ディスコードAPIに接続するためのライブラリおよびフレームワーク
- [bot](https://github.com/go-telegram/bot) - 追加のUIコンポーネントを備えたゼロ依存のテレグラムボットライブラリ
- [echotron](https://github.com/NicoNex/echotron) - Goで書かれた、洗練されたかつ並列処理を可能にするテレグラムボットライブラリ
- [go-joe](https://joe-bot.net) - HubotにインスパイアされたがGoで書かれた汎用ボットライブラリ
- [go-sarah](https://github.com/oklahomer/go-sarah) - LINE、Slack、Gitterなど、目的のチャットサービスにボットを構築するためのフレームワーク
- [go-tg](https://github.com/mr-linch/go-tg) - 公式ドキュメントから生成されたテレグラムボットAPIへのGoクライアントライブラリで、複雑なボットの構築に必要な機能を備えている
- [go-twitch-irc](https://github.com/gempir/go-twitch-irc) - twitch.tvチャットにボットを書くためのライブラリ
- [micha](https://github.com/onrik/micha) - テレグラムボットAPI向けのGoライブラリ
- [slack-bot](https://github.com/innogames/slack-bot) - リラックスした開発者向けに使えるスラックボット：カスタムコマンド、Jenkins、Jira、Bitbucket、Githubなど
- [slacker](https://github.com/slack-io/slacker) - スラックボットを作成するための使いやすいフレームワーク
- [telebot](https://github.com/tucnak/telebot) - テレグラムボットフレームワークはGoで書かれた
- [telego](https://github.com/mymmrac/telego) - Golang向けのテレグラムボットAPIライブラリで、APIの完全な1対1実装を提供
- [telegram-bot-api](https://github.com/go-telegram-bot-api/telegram-bot-api) - シンプルでクリーンなテレグラムボットクライアント
- [TG](https://github.com/enetx/tg) - Go向けのテレグラムボットフレームワーク
- [wayback](https://github.com/wabarc/wayback) - テレグラム、マストodon、スラック、その他メッセージプラットフォーム向けのボットがウェブページをアーカイブするもの
- [ymsdk](https://github.com/rekurt/ymsdk) - Yandex メッセージャー ボット API 用のGo SDKで、型安全なモデル、自動リトライ、レート制限処理を備えている
   - [Wisp](https://github.com/wisp-trading/wisp) - Go向けのイベント駆動型取引フレームワーク。スポット取引、永続的ファイアウォール、予測市場。複数取引所（Bybit、Hyperliquid、Polymarket）に対応

**[⬆ back to top関連](#contents)**

## ビルド自動化 <a id="build-automation"></a>

_ビルド自動化に関するGoライブラリ、ツール、または資料です。_

- [1build](https://github.com/gopinath-langote/1build) - プロジェクトごとのコマンドを摩擦なく管理できるコマンドラインツール。
- [air](https://github.com/cosmtrek/air) - Air - Goアプリ用のライブリロード。
- [anko](https://github.com/GuilhermeCaruso/anko) - 複数のプログラミング言語に対応したシンプルなアプリケーション監視ツール。
- [gaper](https://github.com/maxclaus/gaper) - Goプロジェクトがクラッシュした場合や監視中のファイルが変更された場合に、ビルドを行い再起動する。
- [gilbert](https://go-gilbert.github.io) - Goプロジェクト用のビルドシステムとタスクランナー。
- [gob](https://github.com/kcmvp/gob) - Goプロジェクト向けの[Gradle](https://docs.gradle.org/)のようなビルドツール。 [Maven](https://maven.apache.org/)
- [goyek](https://github.com/goyek/goyek) - Goでビルドパイプラインを作成する。
- [mage](https://github.com/magefile/mage) - MageはGoを用いたmake/rakeのようなビルドツール。
- [mmake](https://github.com/tj/mmake) - 現代的なMake。
- [realize](https://github.com/tockins/realize) - Goによるビルドシステムでファイル監視とライブリロードを実現。カスタムパスで実行、ビルド、ファイル変更を監視。
- [rex](https://github.com/rexrun-dev/rex) - ゼロ設定で利用可能なユニバーサルプロジェクトランナー。Go、Node、Python、Rust、PHP、Zig、Elixirといったスタックを自動検出し、正しいコマンドを実行。
- [Task](https://github.com/go-task/task) - シンプルな「Make」の代替ツール。
- [taskctl](https://github.com/taskctl/taskctl) - 並列タスクランナー。
- [xc](https://github.com/joerdav/xc) - README.mdに定義したタスクを実行するタスクランナー。実行可能なMarkdown。

**[⬆ back to top関連](#contents)**

## コマンドライン <a id="command-line"></a>

### 高度なコンソールUI <a id="advanced-console-uis"></a>

_高度なコンソールUIに関するGoライブラリ、ツール、または資料です。_

- [asciigraph](https://github.com/guptarohit/asciigraph) - コマンドラインアプリで、他の依存関係なしに軽量なASCII線グラフ ╭┈╯ を生成するGoパッケージ。
- [aurora](https://github.com/logrusorgru/aurora) - fmt.Printf/SprintfにサポートされるANSIテキストカラー。
- [box-cli-maker](https://github.com/box-cli-maker/box-cli-maker) - ターミナルに高度にカスタマイズ可能なボックスをレンダリング。
- [bubble-table](https://github.com/Evertras/bubble-table) - bubbletea用のインタラクティブなテーブルコンポーネント。
- [bubbles](https://github.com/charmbracelet/bubbles) - bubbletea用のTUIコンポーネント。
- [bubbletea](https://github.com/charmbracelet/bubbletea) - The Elm Architectureに基づいたターミナルアプリケーション開発用のGoフレームワーク。
- [chroma16](https://github.com/arceus-7/chroma16) - 1つのシードカラーまたは文字列から、調和的な16色のターミナルパレットを生成。
- [crab-config-files-templating](https://github.com/alfiankan/crab-config-files-templating) - Kubernetes マンifest または一般的な設定ファイル向けの動的設定ファイルテンプレートツール
- [ctc](https://github.com/wzshiming/ctc) - 非侵襲的かつプラットフォームを越えたターミナルカラーライブラリで、Printメソッドを変更する必要はない
- [fx](https://github.com/antonmedv/fx) - ターミナル用JSONビューとプロセッサ
- [go-ataman](https://github.com/workanator/go-ataman) - ターミナルでANSIカラー文字テンプレートをレンダリングするGoライブラリ
- [go-colorable](https://github.com/mattn/go-colorable) - Windows向けのカラー出力ライブラリ
- [go-colortext](https://github.com/daviddengcn/go-colortext) - ターミナルでのカラー出力用Goライブラリ
- [go-isatty](https://github.com/mattn/go-isatty) - golang用のisattyです。
- [go-palette](https://github.com/abusomani/go-palette) - ANSIカラーを使って洗練されたかつ便利なスタイル定義を提供するGoライブラリ。完全に互換性を持ち、[fmt library](https://pkg.go.dev/fmt)をラップして良好なターミナルレイアウトを実現しています。
- [go-prompt](https://github.com/c-bata/go-prompt) - [python-prompt-toolkit](https://github.com/jonathanslenders/python-prompt-toolkit)をインスピレーションとして作られた強力なインタラクティブプロンプトのライブラリ。
- [go-tui](https://github.com/grindlemire/go-tui) - エディタサポート用の言語サーバを備えた、テンプレートのような宣言型ターミナルUIフレームワーク
- [gocui](https://github.com/jroimartin/gocui) - コンソールユーザーインターフェースを作成するためのミニマルなGoライブラリ。
- [gommon/color](https://github.com/labstack/gommon/tree/master/color) - ターミナルのテキストスタイルを設定
- [gookit/color](https://github.com/gookit/color) - ターミナルカラーレンダリングツールライブラリ。16色、256色、RGBカラー出力に対応。Windowsでも動作。
- [goscaf](https://github.com/iyashjayesh/goscaf) - goscafはインタラクティブなCLIを用いて、意見をもって設計された、生産性の高いGoプロジェクトのボイラープレートを生成する。プロジェクト間でスケルトンコードをコピー＆ペーストするのをやめよう。
- [lazyenv](https://github.com/lazynop/lazyenv) - .envファイルの閲覧・比較・編集用のTUI
- [lipgloss](https://github.com/charmbracelet/lipgloss) - ターミナルにおける色、フォーマット、レイアウトのスタイルを宣言的に定義
- [loom](https://github.com/loom-go/loom) - 信号ベースの反応型コンポーネントフレームワークによるTUI構築
- [marker](https://github.com/cyucelen/marker) - 色付きターミナル出力用に文字列をマッチング・マークする最も簡単な方法
- [mpb](https://github.com/vbauerster/mpb) - ターミナルアプリケーション向けのマルチプログレスバー
- [phoenix](https://github.com/phoenix-tui/phoenix) - 高性能TUIフレームワーク。Elmインスピレーションに基づき設計され、完全なUnicodeレンダリングとゼロ割り当てイベントシステムを備える
- [progressbar](https://github.com/schollz/progressbar) - すべてのOSで動作する基本的なスレッドセーフプログレスバー
- [pterm](https://github.com/pterm/pterm) - すべてのプラットフォームでコンソール出力を美しくするためのライブラリ。複数の組み合わせ可能なコンポーネントを備える
- [simpletable](https://github.com/alexeyco/simpletable) - ターミナルにおけるシンプルなテーブルをGoで作成
- [spinner](https://github.com/briandowns/spinner) - オプションを簡単に提供できるターミナルスピナー用Goパッケージ
- [tabby](https://github.com/cheynewallace/tabby) - 非常にシンプルなGolangテーブル用の小さなライブラリ
- [table](https://github.com/tomlazar/table) - ターミナルの色に基づくテーブル用の小さなライブラリ
- [termbox-go](https://github.com/nsf/termbox-go) - Termboxは、プラットフォームを越えてテキストベースインターフェースを作成するためのライブラリ
- [termdash](https://github.com/mum4k/termdash) - **termbox-go**をベースにしたGo用ターミナルダッシュボード。[termui](https://github.com/gizak/termui)をインスピレーションとしています。
- [termenv](https://github.com/muesli/termenv) - ターミナルアプリケーション向けの高度なANSIスタイルと色サポート
- [termui](https://github.com/gizak/termui) - **termbox-go**をベースにしたGo用ターミナルダッシュボード。[blessed-contrib](https://github.com/yaronn/blessed-contrib)をインスピレーションとしています。
- [uilive](https://github.com/gosuri/uilive) - ターミナル出力のリアルタイム更新用のライブラリ
- [uiprogress](https://github.com/gosuri/uiprogress) - ターミナルアプリケーションにおける進行状況バーをレンダリングするためのフレキシブルなライブラリ
- [uitable](https://github.com/gosuri/uitable) - ターミナルアプリでテーブルデータを使用した可読性を向上させるためのライブラリ
- [vhs](https://github.com/charmbracelet/vhs) - あなたのCLI用のホームビデオレコーダー - ドキュメントやチュートリアルのためにコードからターミナルGIFを生成
- [yacspin](https://github.com/theckman/yacspin) - Yet Another CLi Spinnerパッケージ、ターミナルスピナーとの対話に使用

**[⬆ back to top関連](#contents)**

### 標準CLI <a id="standard-cli"></a>

_標準CLIに関するGoライブラリ、ツール、または資料です。_

- [acmd](https://github.com/cristalhq/acmd) - シンプルで実用的で意見を反映したGoのCLIパッケージ
- [argparse](https://github.com/akamensky/argparse) - Pythonのargparseモジュールをインスピレーションとして作ったコマンドライン引数パーサー
- [argv](https://github.com/cosiner/argv) - bashの構文を使用してコマンドライン文字列を引数配列に分割するためのGoライブラリ
- [boa](https://github.com/GiGurra/boa) - 構造体タグに基づく宣言型フラグ、環境変数、バリデーション、設定ファイル。Cobraに基づく。
- [carapace](https://github.com/rsteube/carapace) - spf13/cobra向けのコマンド引数補完生成器
- [carapace-bin](https://github.com/rsteube/carapace-bin) - マルチシェル・マルチコマンド向けの引数補完器
- [carapace-spec](https://github.com/rsteube/carapace-spec) - スペックファイルを使ってシンプルな補完を定義
- [climax](https://github.com/tucnak/climax) - Goコマンドの精神を反映した「人間の顔」を持つ代替CLI
- [clîr](https://github.com/leaanthony/clir) - シンプルで明確なCLIライブラリ。依存関係なし
- [cmd](https://github.com/posener/cmd) - 標準の `flag`パッケージを拡張し、サブコマンドやその他機能を自然な方法でサポートします。
- [cmdr](https://github.com/hedzr/cmdr) - POSIX/GNUスタイルの、getoptに類するコマンドラインUIのGoライブラリ。
- [cobra](https://github.com/spf13/cobra) - 現代のGo CLIの相互作用用のコマンダー。
- [command-chain](https://github.com/rainu/go-command-chain) - Go言語でコマンド連鎖の設定と実行を行うライブラリ - 例えばUnixシェルにおけるパイプラインのような機能。
- [commandeer](https://github.com/jaffee/commandeer) - 開発者向けCLIアプリ：構造体のフィールドとタグに基づいてフラグ、デフォルト値、使用方法を設定します。
- [complete](https://github.com/posener/complete) - Goでbash補完を書く + Goコマンドのbash補完。
- [console](https://github.com/reeflective/console) Closed-loop application library for Cobra commands, with oh-my-posh prompts, and more.
- [Dnote](https://github.com/dnote/dnote) - シンプルなコマンドラインノートブックで、複数デバイス間の同期が可能です。
- [elvish](https://github.com/elves/elvish) - 表現力のあるプログラミング言語と、多機能なインタラクティブシェル。
- [env](https://github.com/codingconcepts/env) - 構造体に対するタグベースの環境設定。
- [flaggy](https://github.com/integrii/flaggy) - 堅牢で自然なフラグパッケージで、サブコマンドのサポートが優秀です。
- [flagvar](https://github.com/sgreben/flagvar) - Goの標準`flag`パッケージ向けのフラグ引数タイプの一覧
- [flash-flags](https://github.com/agilira/flash-flags) - 超高速で、依存関係なし、POSIX準拠のフラグ解析ライブラリ。標準ライブラリの置き換えとして使用可能で、セキュリティ強化が可能。
- [getopt](https://github.com/jon-codes/getopt) - 正確なGo `getopt`で、GNU libc実装と比較検証済み。
- [go-arch](https://github.com/SalvucciFacundo/go-arch) - Minimalist、Standard、Hexagonalアーキテクチャパターンを用いたGoアプリケーションのスケルトン作成用CLIツール。
- [go-arg](https://github.com/alexflint/go-arg) - Goにおける構造体ベースの引数解析
- [go-flags](https://github.com/jessevdk/go-flags) - go コマンドラインオプションパーサー。
- [go-getoptions](https://github.com/DavidGamba/go-getoptions) - Goオプションパーサーで、PerlのGetOpt::Longの柔軟性を参考にしています。
- [go-readline-ny](https://github.com/nyaosorg/go-readline-ny) - カスタマイズ可能なライン編集ライブラリ。Emacsキーバインディング、ユニコード対応、補完、文法ハイライトを提供。NYAGOSシェルで使用。
- [gocmd](https://github.com/devfacet/gocmd) - コマンドラインアプリケーションの開発に使うGoライブラリ。
- [goopt](https://github.com/napalu/goopt) - Go向けの宣言型、構造タグベースのCLIフレームワーク。階層的なコマンド/フラグ、i18n、シェル補完、バリデーションなどの幅広い機能を備えている。
- [hashicorp/cli](https://github.com/hashicorp/cli) - コマンドラインインターフェースを実装するためのGoライブラリ。
- [hiboot cli](https://github.com/hidevopsio/hiboot/tree/master/pkg/app/cli) - CLIアプリケーションフレームワークで自動設定と依存性注入を提供
- [job](https://github.com/liujianping/job) - JOB：一時的なコマンドを長期的なジョブとして扱う
- [kingpin](https://github.com/alecthomas/kingpin) - サブコマンドをサポートするコマンドラインおよびフラグパーサー（`kong`に置き換えられている；以下参照）。
- [liner](https://github.com/peterh/liner) - コマンドラインインターフェース向けのreadline風ライブラリ
- [mcli](https://github.com/jxskiss/mcli) - Go向けに最小限ながら非常に強力なCLIライブラリ
- [memsh](https://github.com/amjadjibon/memsh) - Goによる仮想bashシェル：メモリ内のファイルシステム（afero）に対してシェルコマンドを実行し、WASMプラグインサポートと埋め込みHTTPサーバーを提供
- [mkideal/cli](https://github.com/mkideal/cli) - Go構造体タグに基づく、機能豊かで使いやすいコマンドラインパッケージ
- [mow.cli](https://github.com/jawher/mow.cli) - GoによるCLIアプリケーションの構築に、高度なフラグと引数のパースおよび検証を提供
- [neuron-cli](https://github.com/steevin/neuron-cli) - ローカル中心の、Obsidianと互換性のあるターミナル知識管理ツール
- [OpenCLI](https://github.com/bcdxn/opencli) - OpenAPIスタイルのCLI仕様；言語に依存しないドキュメントでインターフェースを定義し、ドキュメントとフレームワークのテンプレートコードを生成
- [ops](https://github.com/nanovms/ops) - ユニケーラービル/オーケストレーター
- [orpheus](https://github.com/agilira/orpheus) - セキュリティ強化、プラグインストレージシステム、プロダクション可視化機能を備えたCLIフレームワーク
- [pflag](https://github.com/spf13/pflag) - Goのフラグパッケージへのドロップイン置き換え、POSIX/GNUスタイルの--フラグを実装
- [readline](https://github.com/reeflective/readline) - 現代的で使いやすいUI機能を備えたシェルライブラリ
- [sflags](https://github.com/octago/sflags) - フラグ、urfave/cli、pflag、cobra、kingpinなど他のライブラリ向けの構造体ベースのフラグ生成器
- [structcli](https://github.com/leodido/structcli) - Cobraのテンプレートコードを省略：Go構造体から宣言的に強力で機能豊かなCLIを構築
- [strumt](https://github.com/antham/strumt) - プロンプト連鎖を生成するライブラリ
- [subcmd](https://github.com/bobg/subcmd) - 標準の`flag`パッケージと並行してサブコマンドのパースと実行を行う別のアプローチ
- [teris-io/cli](https://github.com/teris-io/cli) - Goでコマンドラインインターフェースを構築するためのシンプルかつ完全なAPI
- [urfave/cli](https://github.com/urfave/cli) - Goでコマンドラインアプリケーションを構築するためのシンプル、高速、楽しいパッケージ（以前はcodegangsta/cli）
- [version](https://github.com/mszostok/version) - 複数フォーマットでのCLIバージョン情報の収集と表示、およびアップグレード通知を提供
- [wlog](https://github.com/dixonwille/wlog) - シンプルなログインターフェースで、プラットフォームを越えて色表示と並列処理をサポート。
- [wmenu](https://github.com/dixonwille/wmenu) - CLIアプリケーション向けに使いやすいメニュー構造で、ユーザーに選択を促す。

**[⬆ back to top関連](#contents)**

## 設定 <a id="configuration"></a>

_設定に関するGoライブラリ、ツール、または資料です。_

- [aconfig](https://github.com/cristalhq/aconfig) - シンプルで実用的かつ意見を反映した設定読み込み機能。
- [argus](https://github.com/agilira/argus) - ファイル監視と設定管理をMPSCリングバッファ、適応型バッチング戦略、およびユニバーサルフォーマット解析（JSON、YAML、TOML、INI、HCL、Properties）で実現。
- [azureappconfiguration](https://github.com/Azure/AppConfiguration-GoProvider) - GoアプリケーションからAzure App Configurationにデータを消費するための設定プロバイダー。
- [bcl](https://github.com/wkhere/bcl) - BCLはHCLに類似した設定言語。
- [cleanenv](https://github.com/ilyakaznacheev/cleanenv) - ミニマリズムを採用した設定読み込み機能（ファイル、ENV、そしてどこでも可能）。
- [config](https://github.com/JeremyLoy/config) - クラウドネイティブアプリケーションの設定。ENVを構造体にバインドするには2行だけ。
- [config](https://github.com/num30/config) - ファイル、環境変数、またはフラグを使ってアプリケーションを設定するには2行のコードで済む。
- [config](https://github.com/andreiavrammsd/config) - 構造体ベースの設定読み込み機能で、専用の設定ファイルパーサーを備え、環境変数、フラグ、デフォルト値、検証をサポート。
- [configuration](https://github.com/BoRuDar/configuration) - 環境変数、ファイルから構造体を初期化するためのライブラリ／ツール。
- [configuro](https://github.com/sherifabdlnaby/configuro) - 環境変数とファイルから設定を読み込み・検証するための意見を反映したフレームワーク。12ファクター準拠アプリケーションに特化。
- [confiq](https://github.com/greencoda/confiq) - Go向けの構造化データ形式を設定構造にデコードするライブラリ。複数のデータ形式をサポート。
- [confita](https://github.com/heetch/confita) - 複数のバックエンドから設定を階層的に読み込み、構造体に適用。
- [conflate](https://github.com/the4thamigo-uk/conflate) - 複数のJSON/YAML/TOM-ファイルを任意のURLからマージし、JSONスキーマによる検証を行い、スキーマに定義されたデフォルト値を適用するライブラリ／ツール。
- [enflag](https://github.com/atelpis/enflag) - コンテナ中心のゼロ依存設定ライブラリ。環境変数とフラグのパースを統合。型安全を達成するためにジェネリクスを使用し、反射や構造体タグを用いずに実装。
- [env](https://github.com/caarlos0/env) - 環境変数をGo構造体にパース（デフォルト値付き）。
- [env](https://github.com/junk1tm/env) - 構造体に環境変数を読み込むための軽量パッケージ。
- [env](https://github.com/syntaqx/env) - 構造体へのアンマーシャルをサポートする環境ユーティリティパッケージ。
- [envconfig](https://github.com/vrischmann/envconfig) - 環境変数から設定を読み込む。
- [envh](https://github.com/antham/envh) - 環境変数を管理するためのヘルパー
- [envyaml](https://github.com/yuseferi/envyaml) - Yamlで環境変数を読み込むライブラリ。シークレットを環境変数として扱い、構造化されたYamlとして読み込むようにする。
- [fig](https://github.com/kkyr/fig) - ファイルから環境変数から構成情報を読み取るための小さなライブラリ（バリデーションとデフォルト値付き）
- [genv](https://github.com/sakirsensoy/genv) - dotenvサポートで環境変数を簡単に読み取る
- [go-array](https://github.com/deatil/go-array) - マップ、スライス、またはJSONからデータを読み書きするGoパッケージ
- [go-aws-ssm](https://github.com/PaddleHQ/go-aws-ssm) - AWSシステムマネージャーのパラメータストアからパラメータを取得するGoパッケージ
- [go-cfg](https://github.com/dsbasko/go-cfg) - さまざまなソース（環境変数、フラグ、構成ファイル（.json、.yaml、.toml、.env））から構成データを構造に読み込むための一貫した方法を提供
- [go-conf](https://github.com/ThomasObenaus/go-conf) - 構造体に注釈をつけてアプリケーション構成を管理するシンプルなライブラリ。環境変数、構成ファイル、コマンドラインパラメータから構成を読み取ることができる。
- [go-config](https://github.com/MordaTeam/go-config) - アプリケーション構成を扱うためのシンプルで便利なライブラリ
- [go-external-config](https://github.com/go-external-config/go) - Go向けのSpring風の構成管理ライブラリ
- [go-external-config/aws](https://github.com/go-external-config/aws) - go-external-configにAWSプロパティソースサポート
- [go-external-config/consul](https://github.com/go-external-config/consul) - go-external-configにConsulプロパティソースサポート
- [go-external-config/vault](https://github.com/go-external-config/vault) - go-及外-configにVaultプロパティソースサポート
- [go-ini](https://github.com/subpop/go-ini) - INIファイルをマーシャルおよびアンマーシャルするGoパッケージ
- [go-ssm-config](https://github.com/ianlopshire/go-ssm-config) - AWS SSM（パラメータストア）から構成パラメータを読み取るGoユーティリティ
- [go-up](https://github.com/ufoscout/go-up) - 再帰的なプレースホルダー解決と魔法を使わないシンプルな構成ライブラリ
- [GoCfg](https://github.com/Jagerente/gocfg) - 構造タグベースの契約、カスタム値プロバイダー、パーサー、ドキュメント生成を備えた構成マネージャー。カスタマイズ可能でありながらシンプル。
- [goconfig](https://github.com/fulldump/goconfig) - フラグ、環境変数、config.json、デフォルト値からGo構造体を確実に優先順位で埋め込む。追加の依存関係なし。
- [godotenv](https://github.com/joho/godotenv) - RubyのdotenvライブラリのGo版（環境変数を`.env`から読み込みます）。
- [goenv](https://github.com/psyb0t/goenv) - ENV環境変数を読み取り、プロセスがプロダクションか開発環境かを報告する。
- [GoLobby/Config](https://github.com/golobby/config) - GoLobby Configは、Goプログラミング言語向けの軽量かつ強力な構成マネージャー。
- [gone/jconf](https://github.com/One-com/gone/tree/master/jconf) - モジュラーJSON構成。コードが構成する構造体をそのままコードと一緒に保持し、パーサーをサブモジュールに任せることが可能であり、完全な構成のシリアライズを損なわない。
- [gonfig](https://github.com/milad-abbasi/gonfig) - タグベースの構成パーサー。異なるプロバイダーから値を読み込み、型安全な構造体に格納。
- [gonfiguration](https://github.com/psyb0t/gonfiguration) - 反射を用いて環境変数から構造体に構成を読み込み、構造体タグによるデフォルト値と必須フィールドをサポート。
- [gookit/config](https://github.com/gookit/config) - application config manage(load,get,set)。JSON、YAML、TOML、INI、HCLをサポート。複数ファイル読み込み、データオーバーライドマージ。
- [harvester](https://github.com/beatlabs/harvester) - Harvester、シンプルで使いやすい静的および動的構成パッケージ。シーディング、環境変数、Consul統合をサポート。
- [hedzr/store](https://github.com/hedzr/store) - 拡張性と高性能を備えた構成管理ライブラリ。階層データに最適化。
- [hjson](https://github.com/hjson/hjson-go) - Human JSON、人間が読める構成ファイルフォーマット。緩やかな構文、誤りが少なく、コメントが豊富。
- [hocon](https://github.com/gurkankaymak/hocon) - HOCON（人間向けJSONのスーパーセット）フォーマットを扱う構成ライブラリ。環境変数、他の値への参照、コメント、複数ファイルなどの機能をサポート。
- [ini](https://github.com/go-ini/ini) - GoでINIファイルを読み書きするパッケージ。
- [ini](https://github.com/wlevene/ini) - INIパーサー＆書き込みライブラリ。構造体にアンマーシャル、JSONにマーシャル、ファイルに書き出し、ファイルを監視。
- [kelseyhightower/envconfig](https://github.com/kelseyhightower/envconfig) - 環境変数から構成データを管理するGoライブラリ。
- [koanf](https://github.com/knadh/koanf) - 軽量かつ拡張可能なGoアプリケーションでの構成読み込み用ライブラリ。JSON、TOML、YAML、env、コマンドラインに内蔵サポート。
- [konf](https://github.com/nil-go/konf) - ファイル、環境変数、フラグ、クラウド（例：AWS、Azure、GCP）から構成を読み取り／監視するための最もシンプルなAPI。
- [konfig](https://github.com/lalamove/konfig) - 分散処理時代向けの、合成可能で観測可能かつパフォーマンスの高いGo構成処理。
- [kong](https://github.com/alecthomas/kong) - 任意の複雑なコマンドライン構造およびYAML、JSON、TOMLなど他の設定ソースをサポートするコマンドラインパーサー（`kingpin`の後継）。
- [nasermirzaei89/env](https://github.com/nasermirzaei89/env) - 環境変数を読み取るためのシンプルかつ有用なパッケージ。
- [nfigure](https://github.com/muir/nfigure) - コマンドライン（POSIXおよびGoスタイル）から、各ライブラリごとのタグベース構成。環境、JSON、YAML。
- [onion](https://github.com/goraz/onion) - Go向けのレイヤベース構成。JSON、TOML、Y及、プロパティ、etcd、環境変数、PGPによる暗号化をサポート。
- [piper](https://github.com/Yiling-J/piper) - Viperのラッパーで構成継承とキー生成をサポート。
- [sonic](https://github.com/bytedance/sonic) - 非常に高速なJSONシリアライズおよびデシリアライズライブラリ。
- [swap](https://github.com/oblq/swap) - ビルド環境に基づき構造体を再帰的にインスタンス化／構成。 (YAML、TOML、JSONおよびenv)。
- [typenv](https://github.com/diegomarangoni/typenv) - 極小主義、依存関係なし、型付き環境変数ライブラリ
- [uConfig](https://github.com/omeid/uconfig) - 軽量、依存関係なし、拡張可能な設定管理
- [viper](https://github.com/spf13/viper) - Go用の配置に鋭い刃をもつ設定
- [xdg](https://github.com/adrg/xdg) - Goによる[XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/)および[XDG user directories](https://wiki.archlinux.org/index.php/XDG_user_directories)の実装。
- [yamagiconf](https://github.com/romshark/yamagiconf) - Go用のYAMLの「安全なサブセット'
- [zerocfg](https://github.com/chaindead/zerocfg) - 手間なし、簡潔な設定管理で、ボイラープレートや繰り返しコードを回避し、複数のソースをサポートし、優先順位の上書きを可能にする

**[⬆ back to top関連](#contents)**

## 継続的インテグレーション <a id="continuous-integration"></a>

_継続的インテグレーションに関するGoライブラリ、ツール、または資料です。_

- [abstruse](https://github.com/bleenco/abstruse) - Abstruseは分散型CIプラットフォーム
- [Bencher](https://bencher.dev/) - CIでパフォーマンスの回帰を検出するための連続ベンチマークツールのセット
- [CDS](https://github.com/ovh/cds) - エンタープライズクラスのCI/CDおよびDevOps自動化オープンソースプラットフォーム
- [dot](https://github.com/opnlabs/dot) - Dockerを使用して段階的にジョブを並列実行する、最小限のローカル第一の継続的統合システム
- [drone](https://github.com/drone/drone) - DroneはDockerに基づきGoで構築された継続的統合プラットフォーム
- [go-beautiful-html-coverage](https://github.com/gha-common/go-beautiful-html-coverage) - GitHub Actionで、プルリクエスト内のコードカバレッジを追跡し、無料で美しいHTMLプレビューを提供
- [go-fuzz-action](https://github.com/jidicula/go-fuzz-action) - GitHub ActionsでGo 1.18の組み込みのフズテストを使用
- [go-semver-release](https://github.com/s0ders/go-semver-release) - Gitリポジトリのセマンティックバージョニングを自動化
- [go-test-coverage](https://github.com/marketplace/actions/go-test-coverage) - テストカバレッジが設定された閾値を下回った場合に問題を報告するGitHub Action
- [gomason](https://github.com/nikogura/gomason) - クリーンなワークスペースからGoバイナリをテスト、ビルド、署名、公開
- [gotestfmt](https://github.com/GoTestTools/gotestfmt) - 人間が読めるGoのテスト出力
- [goveralls](https://github.com/mattn/goveralls) - Coveralls.ioの継続的なコードカバレッジトラッキングシステムとのGo統合
- [muffet](https://github.com/raviqqe/muffet) - Goで書かれた高速なウェブリンクチェックツール、詳しくは[alternatives](https://github.com/lycheeverse/lychee#features)を参照。
- [overalls](https://github.com/go-playground/overalls) - goverallsなどのツールに使用可能なマルチパッケージGoプロジェクトのカバレッジプロファイル
- [PikoCI](https://github.com/pikoci/pikoci) - Concourseにインスパイアされたセルフホスト型CI/CD。1つのバイナリ、任意のデータベース、任意のキュー。HCLパイプライン、プラグイン可能なリソースタイプとランナー
- [roveralls](https://github.com/LawrenceWoodman/roveralls) - 再帰的なカバレッジテストツール
- [woodpecker](https://github.com/woodpecker-ci/woodpecker) - WoodpeckerはDrone CIシステムのコミュニティ版である

**[⬆ back to top関連](#contents)**

## CSSプリプロセッサー <a id="css-preprocessors"></a>

_CSSプリプロセッサーに関するGoライブラリ、ツール、または資料です。_

- [go-css](https://github.com/napsy/go-css) - Goで書かれた非常にシンプルなCSSパーサー
- [go-libsass](https://github.com/wellington/go-libsass) - 100％Sassに互換性を持つlibsassプロジェクトへのGoのラッパー

**[⬆ back to top関連](#contents)**

## データ統合フレームワーク <a id="data-integration-frameworks"></a>

_データ統合フレームワークに関するGoライブラリ、ツール、または資料です。_

- [Benthos](https://github.com/benthosdev/benthos) - さまざまなプロトコル間のメッセージストリーミングブリッジ
- [CloudQuery](http://github.com/cloudquery/cloudquery) - プラグインアーキテクチャを備えた高性能ELTデータ統合フレームワーク
- [confluence2md](https://github.com/gkoos/confluence2md) - ConfluenceからMarkdownへのスクレイピングおよび変換ツール
- [omniparser](https://github.com/jf-tech/omniparser) - テキスト入力（CSV/txt/JSON/XML/EDI/X12/EDIFACT/etc）をストリーミングでパースし、データドリブンスキーマを使ってJSON出力に変換するための多目的ETLライブラリ

**[⬆ back to top関連](#contents)**

## データ構造とアルゴリズム <a id="data-structures-and-algorithms"></a>

### ビットパッキングと圧縮 <a id="bit-packing-and-compression"></a>

- [bingo](https://github.com/iancmcc/bingo) - ネイティブ型をバイトに高速かつゼロ割り当てで辞書順に保持する
- [binpacker](https://github.com/zhuangsirui/binpacker) - バイナリパッキングとアンパッキングを支援するツールで、ユーザーがカスタムバイナリストリームを構築できる
- [bit](https://github.com/yourbasic/bit) - Goによるセットデータ構造に追加でビット操作関数を備えたもの
- [crunch](https://github.com/superwhiskers/crunch) - さまざまなデータ型を簡単に扱うためのバッファを実装するGoパッケージ
- [go-ef](https://github.com/amallia/go-ef) - Elias-FanoエンコーディングをGoで実装したもの
- [roaring](https://github.com/RoaringBitmap/roaring) - 圧縮されたビットセットを実装するGoパッケド

### ビット集合 <a id="bit-sets"></a>

- [bitmap](https://github.com/kelindar/bitmap) - Goで実装された高パフォーマンスでゼロ割り当てかつSIMD対応のビットマップ／ビットセット
- [bitset](https://github.com/bits-and-blooms/bitset) - Goで実装されたビットセットパッケージ

### Bloom・Cuckooフィルター <a id="bloom-and-cuckoo-filters"></a>

- [bloom](https://github.com/bits-and-blooms/bloom) - Bloomフィルターを実装するGoパッケージ。
- [bloom](https://github.com/zhenjl/bloom) - Goで実装したBloomフィルター。
- [bloom](https://github.com/yourbasic/bloom) - GoによるBloomフィルタの実装
- [bloomfilter](https://github.com/OldPanda/bloomfilter) - JavaのGuavaライブラリと互換性を持つ、もう一つのBloomフィルタ実装
- [boomfilters](https://github.com/tylertreat/BoomFilters) - 連続かつ無限のストリームを処理する確率的データ構造
- [cuckoo-filter](https://github.com/linvon/cuckoo-filter) - クッコーフィルタ：他の実装と比較して構成可能かつ空間効率が優れた、総合的なクッコーフィルタ。元の論文に記載されたすべての機能が提供されている。
- [cuckoofilter](https://github.com/seiflotfy/cuckoofilter) - クッコーフィルタ：Goで実装されたカウンティングブロームフィルタの良い代替案。
- [ribbonGo](https://github.com/RibbonFilter/ribbonGo) - Ribbonフィルタの最初の純Go実装（実用的にブロームフィルタやXorより小さい）で、空間効率の高い近似集合メンバーシップクエリを実現。
- [ring](https://github.com/TheTannerRyan/ring) - 高性能かつスレッドセーフなブロームフィルタのGo実装。

### データ構造・アルゴリズム集 <a id="data-structure-and-algorithm-collections"></a>

- [algorithms](https://github.com/shady831213/algorithms) - アルゴリズムとデータ構造。CLRS学習用。
- [go-datastructures](https://github.com/Workiva/go-datastructures) - 有用で高速かつスレッドセーフなデータ構造のコレクション。
- [gods](https://github.com/emirpasic/gods) - Goデータ構造。コンテナ、セット、リスト、スタック、マップ、バイディマップ、ツリー、ハッシュセットなど。
- [gostl](https://github.com/liyue201/gostl) - Go向けのデータ構造・アルゴリズムライブラリ。C++ STLに類似した関数を提供する。

### イテレーター <a id="iterators"></a>

- [gloop](https://github.com/alvii147/gloop) - Goのrange-over-func機能を活用した便利なループ処理。
- [goterator](https://github.com/yaa110/goterator) - マップとリダクション機能を提供するイテレーター実装。
- [iter](https://github.com/disksing/iter) - GoでのC++ STLイテレーターおよびアルゴリズ及の実装。

### マップ <a id="maps"></a>

See also [データベース](#database) for more complex key-value stores, and [ツリー](#trees) for


- [cmap](https://github.com/lrita/cmap) - Goにおけるスレッドセーフなコンカートマップ。`interface{}`をキーとして使用し、シェアを自動スケーリングします。
- [concurrent-swiss-map](https://github.com/mhmtszr/concurrent-swiss-map) - スイスマップに基づく、高性能かつスレッドセーフな汎用コンカレントハッシュマップの実装。
- [dict](https://github.com/srfrog/dict) - Go向けのPython風辞書（dict）実装。
- [genericsyncmap](https://github.com/donomii/genericsyncmap) - `sync.Map`に対する型安全なジェネリックラッパー。すべてのメソッドを完全に保持し、ゼロの依存関係を持ちます。
- [go-shelve](https://github.com/lucmq/go-shelve) - Goプログラミング言語向けの永続的なマップのようなオブジェクト。複数の埋め込みキーバリューストアをサポート。
- [goradd/maps](https://github.com/goradd/maps) - Go 1.18以降の汎用マップインターフェース、安全なマップ、順序付きマップ、順序付きかつ安全なマップなど。
- [hmap](https://github.com/lyonnee/hmap) - HMapは、使いやすいAPIを提供する、スレッドセーフかつ汎用のマップ実装である。

### その他のデータ構造・アルゴリズム <a id="miscellaneous-data-structures-and-algorithms"></a>

- [combo](https://github.com/bobg/combo) - 順列、組み合わせ、重複組み合わせを含む組み合わせ演算。
- [concurrent-writer](https://github.com/free/concurrent-writer) - 非常に高い並列性を備えた`bufio.Writer`の即時置き換え。
- [count-min-log](https://github.com/seiflotfy/count-min-log) - Go実装のカウント・ミン・ログスケッチ：近似カウントを実現する（カウント・ミンスケッチに比べてメモリ使用量が少ない）。
- [FSM](https://github.com/enetx/fsm) - Go向けの有限状態マシン（FSM）。
- [fsm](https://github.com/cocoonspace/fsm) - 有限状態マシンパッケージ。
- [genfuncs](https://github.com/nwillc/genfuncs) - Go 1.18+ のジェネリックパッケージ。Kotlin の Sequence と Map にインスピレーションを受けて作成。
- [go-generics](https://github.com/bobg/go-generics) - ジェネリックなスライス、マップ、セット、イテレーター、ゴルーチンのユーティリティ。
- [go-geoindex](https://github.com/hailocab/go-geoindex) - メモリ内での地理インデックス。
- [go-rampart](https://github.com/francesconi/go-rampart) - 区間同士の関係を判定する方法。
- [go-rquad](https://github.com/aurelien-rainone/go-rquad) - 効率的なポイント位置決定と隣接要素検索を実現する領域四分木。
- [go-tuple](https://github.com/barweiss/go-tuple) - Go 1.18+ 用のジェネリックなタプル実装。
- [go18ds](https://github.com/daichi-m/go18ds) - Go 1.18 のジェネリックを活用した Go データ構造。
- [gofal](https://github.com/xxjwxc/gofal) - Go 用の分数 API。
- [gogu](https://github.com/esimov/gogu) - 包括的で再利用可能かつ効率的な、コンカレント安全なジェネリックユーティリティ関数およびデータ構造ライブラリ。
- [gota](https://github.com/kniren/gota) - Go 用のデータフレーム、シリーズ、データ操作メソッドの実装。
- [hide](https://github.com/emvi/hide) - ハッシュに変換・変換する ID 型を提供し、クライアントに ID を送信しないようにする。
- [hyperloglog](https://github.com/axiomhq/hyperloglog) - Sparse、LogLog-Beta ビアス補正、TailCut スペース削減を実現する HyperLogLog 実装。
- [quadtree](https://github.com/s0rg/quadtree) - ジェネリックでゼロ割り当て、100%テストカバーされた四分木。
- [slices](https://github.com/twharmon/slices) - スライス用の純粋なジェネリック関数。

### Nullable型 <a id="nullable-types"></a>

- [nan](https://github.com/kak-tus/nan) - 便利な変換関数、マーシャル・アンマーシャル関数を備えたゼロ割り当ての Nullable構造体を1つのライブラリで提供。
- [null](https://github.com/emvi/null) - JSON にマーシャル・アンマーシャル可能な Nullable Go 型。
- [typ](https://github.com/gurukami/typ) - Null Types、安全なプリミティブ型変換、複雑な構造から値を取得する方法。

### キュー <a id="queues"></a>

- [deheap](https://github.com/aalpar/deheap) - 最小値と最大値への O(log n) アクセスを実現する二端ヒープ（最小-最大ヒープ）。
- [deque](https://github.com/edwingeng/deque) - 高度に最適化された二端キュー。
- [deque](https://github.com/gammazero/deque) - 高速なリングバッファデック（二端キュー）。
- [dqueue](https://github.com/vodolaz095/dqueue) - シンプルで、メモリ上にあり、依存関係なし、実戦で検証された、スレッドセーフな遅延キュー。
- [goconcurrentqueue](https://github.com/enriquebris/goconcurrentqueue) - 並列処理可能なFIFOキュー。
- [hatchet](https://github.com/hatchet-dev/hatchet) - 分散型かつ障害耐性のあるタスクキュー。
- [list](https://github.com/koss-null/list) - 汎用的な、スレッドセーフな二重連結リスト（完全なイテレーターをサポート）と、埋め込み用途向けの侵入型単一連結リスト。コンテナ/listの豊富な代替品。
- [memlog](https://github.com/embano1/memlog) - Apache Kafkaにインスパイアされた、使いやすい、軽量、スレッドセーフかつ追加のみ可能なメモリ上データ構造。
- [queue](https://github.com/adrianbrad/queue) - Go向けの複数のスレッドセーフ、汎用キュー実装。

### 集合 <a id="sets"></a>

- [dsu](https://github.com/ihebu/dsu) - Goにおける不交差集合データ構造の実装。
- [golang-set](https://github.com/deckarep/golang-set) - Go向けのスレッドセーフおよび非スレッドセーフの高性能セット。
- [goset](https://github.com/zoumo/goset) - Go向けに便利なセットコレクションの実装。
- [set](https://github.com/StudioSol/set) - LinkedHashMapを使用した、シンプルなセットデータ構造のGo実装。

### テキスト分析 <a id="text-analysis"></a>

- [bleve](https://github.com/blevesearch/bleve) - Go向けの現代的なテキストインデックスライブラリ。
- [go-adaptive-radix-tree](https://github.com/plar/go-adaptive-radix-tree) - Goにおける適応型ラディクスツリーの実装。
- [go-edlib](https://github.com/hbollon/go-edlib) - Goにおける文字列比較および編集距離アルゴリズムライブラリ（Levenshtein、LCS、Hamming、Damerau Levenshtein、Jaro-Winklerなど）であり、Unicodeと互換。
- [levenshtein](https://github.com/agext/levenshtein) - カスタマイズ可能な編集コストと、共通前接頭辞に対するWinkler風ボーナスを備えたLevenshtein距離および類似性メトリクス。
- [levenshtein](https://github.com/agnivade/levenshtein) - GoにおけるLevenshte及距離の計算実装。
- [mspm](https://github.com/BlackRabbitt/mspm) - 情報検索向けのマルチ文字列パターンマッチングアルゴリズム。
- [parsefields](https://github.com/MonaxGT/parsefields) - JSONのようなログをパースするためのツール。ユニークなフィールドとイベントを収集する。
- [ptrie](https://github.com/viant/ptrie) - 前接頭辞ツリーの実装。
- [radixtree](https://github.com/gammazero/radixtree) - 適応型ラディクスツリー（前接頭辞ツリーまたはコンパクトトリーツリー）。
- [trie](https://github.com/derekparker/trie) - Goにおけるトリーツリーの実装。

### ツリー <a id="trees"></a>

- [graphlib](https://github.com/aio-arch/graphlib) - トポロジカルソートライブラリ、DAGグラフのソートおよび剪裁。
- [hashsplit](http://github.com/bobg/hashsplit) - バイトストリームをチャンクに分割し、コンテンツに基づき境界を決定して、チャンクを木構造に並べる。
- [merkle](https://github.com/bobg/merkle) - メルクルルートハッシュと包含証明の効率的な計算。
- [skiplist](https://github.com/MauriceGit/skiplist) - 非常に高速なGoスキップリスト実装。
- [skiplist](https://github.com/gansidui/skiplist) - Goにおけるスキップリスト実装。
- [treemap](https://github.com/igrmk/treemap) - 内部に赤黒木を用いた、一般化されたキー順ソートマップ。

### パイプ <a id="pipes"></a>

- [ordered-concurrently](https://github.com/tejzpr/ordered-concurrently) - 入力順にチャンネルに結果を返す、並列処理を行うGoモジュール。
- [parapipe](https://github.com/nazar256/parapipe) - メッセージおよび結果の順序を維持しつつ、各段階で並列実行を行うFIFOパイプライン。
- [pipeline](https://github.com/hyfather/pipeline) - ファンインとファンアウトをサポートするパイプラインの実装。
- [pipelines](https://github.com/nxdir-s/pipelines) - 並列処理に用いる一般化されたパイプライン関数。

**[⬆ back to top関連](#contents)**

## データベース <a id="database"></a>

### キャッシュ <a id="caches"></a>

_キャッシュに関するGoライブラリ、ツール、または資料です。_

- [bcache](https://github.com/iwanbk/bcache) - 最終的に一貫した分散メモリキャッシュGoライブラリ。
- [BigCache](https://github.com/allegro/bigcache) - ギガバイト規模のデータ用の効率的なキー/バリューキャッシュ。
- [cache2go](https://github.com/muesli/cache2go) - タイムアウトに基づく自動無効化をサポートするメモリ内キー:値キャッシュ。
- [cachego](https://github.com/faabiosr/cachego) - 複数ドライバーに対応するGolangキャッシュコンポーネント。
- [clusteredBigCache](https://github.com/oaStuff/clusteredBigCache) - クラスタリングサポートと個別アイテムの有効期限を設定したBigCache。
- [coherence-go-client](https://github.com/oracle/coherence-go-client) - gRPCをネットワークトランスポートとして使用したGoアプリケーション向けのOracle CoherenceキャッシュAPIの完全実装。
- [couchcache](https://github.com/codingsince1985/couchcache) - CouchbaseサーバーをバックエンドとしたRESTフルキャッシュマイクロサービス。
- [EchoVault](https://github.com/EchoVault/EchoVault) - Redisクライアントと互換性を持つ埋め込み型分散メモリデータストア。
- [easycache](https://github.com/hugocarreira/easycache) - Golangでメモリ内キャッシュを使用するシンプルな方法（TTL/FIFO/LRU/LFU）。
- [fastcache](https://github.com/VictoriaMetrics/fastcache) - 大量のエントリーに対応する高速かつスレッドセーフなメモリ内キャッシュ。GCのオーバヘッドを最小限に抑える。
- [GCache](https://github.com/bluele/gcache) - エクスパイリブル・キャッシュ、LFU、LRUおよびARCをサポートするキャッシュライブラリ
- [gdcache](https://github.com/ulovecode/gdcache) - golangで実装された純粋で非侵襲的なキャッシュライブラリ。自らの分散キャッシュを実装するのにご利用ください。
- [go-cache](https://github.com/viney-shih/go-cache) - 複数レイヤーのGoキャッシュライブラリ。メモリ内および共有キャッシュを、キャッシュアスイドパターンを採用して処理します。
- [go-freelru](https://github.com/elastic/go-freelru) A GC-less, fast and generic LRU hashmap library with optional locking, sharding, eviction and expiration.
- [go-gcache](https://github.com/szyhf/go-gcache) - `GCache`のジェネリックバージョン。有効期限付きキャッシュ、LFU、LRU、ARCのキャッシュサポートを提供。
- [go-mcache](https://github.com/OrlovEvgeny/go-mcache) - 高速なメモリ内キー:値ストア/キャッシュライブラリ。ポインタキャッシュ。
- [gocache](https://github.com/eko/gocache) - 複数のストア（メモリ、memcache、redisなど）をサポートし、連鎖可能、ロード可能、メトリクスキャッシュなども備えた完全なGoキャッシュライブラリ。
- [gocache](https://github.com/yuseferi/gocache) - データ競合を防ぐ高性能かつ自動プルージョン機能を備えたGoキャッシュライブラリ
- [groupcache](https://github.com/golang/groupcache) - Groupcacheは、多くのケースでmemcachedを置き換えることができるキャッシュおよびキャッシュ補完ライブラリです。
- [icache](https://github.com/mdaliyan/icache) - 高性能、汎用、スレッドセーフ、依存関係なしのGoキャッシュパッケージ。
- [imcache](https://github.com/erni27/imcache) - 汎用的なメモリ内キャッシュGoライブラリ。期限切れ、スライディング期限切れ、最大項目数制限、エビデンスコールバック、シャーディングをサポートしています。
- [jetcache-go](https://github.com/mgtv-tech/jetcache-go) - 複数レベルのキャッシュをサポートする統合Goキャッシュライブラリ。
- [nscache](https://github.com/no-src/nscache) - 複数データソースドライバーをサポートするGoキャッシュフレームワーク。
- [otter](https://github.com/maypok86/otter) - 高性能なロックフリーGoキャッシュ。リスレットと類似のライブラリよりも多くの場合、速い。
- [pocache](https://github.com/naughtygopher/pocache) - Pocacheは、事前最適化キャッシュ戦略に焦点を当てた最小のキャッシュパッケージ。
- [ristretto](https://github.com/dgraph-io/ristretto) - 高性能なメモリ制限Goキャッシュ。
- [sturdyc](https://github.com/viccon/sturdyc) - 高度な並列処理機能を備えたキャッシュライブラリ。I/O負荷の大きいアプリケーションを堅牢かつ高パフォーマンスに設計します。
- [theine](https://github.com/Yiling-J/theine-go) - 高性能で、ほぼ最適なメモリ内キャッシュ。プロアクティブなTTL期限切れとジェネリクスを備えています。
- [timedmap](https://github.com/zekroTJA/timedmap) - 期限切れするキー・バリュー対を含むマップ。
- [ttlcache](https://github.com/jellydator/ttlcache) - アイテムの期限切れとジェネリクスをサポートするメモリ内キャッシュ。
- [ttlcache](https://github.com/cheshir/ttlcache) - 各レコードにTTLを設定したメモリ内キー・バリューストレージ。

### Goで実装されたデータベース <a id="databases-implemented-in-go"></a>

- [badger](https://github.com/dgraph-io/badger) - Goにおける高速なキー・バリューストア。
- [bbolt](https://github.com/etcd-io/bbolt) - Go向けの埋め込み型キー/バリューデータベース
- [Bitcask](https://git.mills.io/prologic/bitcask) - Bitcaskは、純粋Goで書かれた埋め込み型、永続的かつ高速なキー値（KV）データベースであり、bitcaskのディスクレイアウト（LSM+WAL）により、予測可能な読み書きパフォーマンス、低遅延、高スループットを実現しています
- [buntdb](https://github.com/tidwall/buntdb) - Go向けの高速かつ埋め込み型、メモリ内キー/バリューデータベースで、カスタムインデックスと空間データをサポート
- [clover](https://github.com/ostafen/clover) - 純粋Golangで書かれた軽量なドキュメント指向のNoSQLデータベース
- [cockroach](https://github.com/cockroachdb/cockroach) - スケーラブルで、地理的リプロダクションをサポートするトランザクションデータストア
- [Coffer](https://github.com/claygod/coffer) - シンプルなACIDキー値データベースでトランザクションをサポート
- [column](https://github.com/kelindar/column) - 高パフォーマンス、列型、埋め込み可能なメモリストアでビットマップインデックスとトランザクションをサポート
- [CovenantSQL](https://github.com/CovenantSQL/CovenantSQL) - CovenantSQLはブロックチェーン上のSQLデータベースです
- [Databunker](https://github.com/paranoidguy/databunker) - GDPRおよびCCPAに準拠した個人識別情報（PII）のストレージサービス
- [dgraph](https://github.com/dgraph-io/dgraph) - スケーラブルで、分散型、低遅延、高スループットのグラフデータベース
- [DiceDB](https://github.com/DiceDB/dice) - オープンソースで、高速かつ反応型、現代のハードウェアに最適化されたメモリデータベース。高いスループットと低い中央遅延により、現代のワークロードに最適です
- [diskv](https://github.com/peterbourgon/diskv) - 自社開発のディスクベースのキー/バリューストア
- [dolt](https://github.com/dolthub/dolt) - Dolt – データのためのGit
- [eliasdb](https://github.com/krotik/eliasdb) - 依存関係なし、トランザクションをサポートするグラフデータベースで、REST API、フレーズ検索、SQL風のクエリ言語を備えています
- [gedb](https://github.com/vinicius-lino-figueiredo/gedb) - 純粋Goで書かれたMongoDBのような埋め込み型データベース。インデックスと複雑なクエリをサポート
- [go-sqlite](https://github.com/glebarez/go-sqlite) – A Pure Golang implemented SQLite driver without CGO.
- [godis](https://github.com/hdt3213/godis) - Golangで実装された高パフォーマンスRedisサーバーおよびクラスタ
- [goleveldb](https://github.com/syndtr/goleveldb) - Goで実装された[LevelDB](https://github.com/google/leveldb)キー/バリューデータベース。
- [hare](https://github.com/jameycribbs/hare) - 各テーブルを改行区切りJSONテキストファイルとして保存するシンプルなデータベース管理システム
- [immudb](https://github.com/codenotary/immudb) - immudbは、Goで書かれた軽量かつ高速な不変データベースで、システムおよびアプリケーションに最適です
- [influxdb](https://github.com/influxdb/influxdb) - メトリクス、イベント、リアルタイム分析用のスケーラブルなデータストア
- [ledisdb](https://github.com/siddontang/ledisdb) - Ledisdbは、LevelDBに基づく高性能なNoSQLのようなRedisベースのデータストア
- [levigo](https://github.com/jmhodges/levigo) - LevigoはLevelDB用のGoラッパーです
- [libradb](https://github.com/amit-davidson/LibraDB) - LibraDBは、学習用に1000行未満のコードで構成されたシンプルなデータベースです
- [LinDB](https://github.com/lindb/lindb) - LinDBは、スケーラブルで高パフォーマンスかつ高可用性を備えた分散時系列データベースです
- [lotusdb](https://github.com/flower-corp/lotusdb) - LSMおよびB+木と互換性のある高速k/vデータベースです
- [lynxdb](https://github.com/lynxbase/lynxdb) - SPLにインスパイアされたパイプスタイルのクエリ言語を備えた軽量列形式ログ分析データベースです
- [MemHop](https://github.com/qyiun666/MemHop) - AIエージェント向けの埋め込み認知メモリデータベース。6層アーキテクチャ（L0-L5）、夢の統合パイプライン、3チャンネルRRF検索（BM25＋f16ベクトル＋エンティティ）、1つの.mehファイル、純Go、インフラゼロです
- [Milvus](https://github.com/milvus-io/milvus) - Milvusは、埋め込み管理、分析および検索用のベクトルデータベースです
- [minisql](https://github.com/RichardKnop/minisql) - 埋め込み型のシングルファイルSQLデータベースです
- [moss](https://github.com/couchbase/moss) - Mossは、100％Goで書かれたシンプルなLSMキー値ストレージエンジンです
- [nanotdb](https://github.com/aymanhs/nanotdb) - 低消費電力ハードウェア向けに最適化された軽量、依存関係ゼロ、追加のみの時系列データベースおよびダッシュボードです
- [NoKV](https://github.com/feichai0017/NoKV) - 分散ファイルシステム、オブジェクトストレージ、AIデータセットワークロード向けのネイティブメタデータサービスです
- [NornicDB](https://github.com/orneryd/NornicDB) - 高パフォーマンスグラフ＋ベクトルデータベース（Neo4jおよびqDrantと互換）、AIシステム向けの低遅延グラフ-RAG検索に焦点を当てています
- [nutsdb](https://github.com/xujiajun/nutsdb) - Nutsdbは、純Goで書かれたシンプルで高速な埋め込み可能な永続キー/値ストレージです。完全にシリアブルなトランザクションをサポートし、リスト、セット、ソートされたセットなど多くのデータ構造を提供します
- [objectbox-go](https://github.com/objectbox/objectbox-go) - 高パフォーマンスの埋め込み型オブジェクトデータベース（NoSQL）でGo APIを備えています
- [pebble](https://github.com/cockroachdb/pebble) - Goで書かれたRocksDB/LevelDBにインスパイアされたキー値データベースです
- [piladb](https://github.com/fern4lvarez/piladb) - スタックデータ構造に基づいた軽量RESTフルデータベースエンジンです
- [pogreb](https://github.com/akrylysov/pogreb) - 読み込みが中心のワークロード向けの埋め込みキー値ストレージです
- [prometheus](https://github.com/prometheus/prometheus) - モニタリングシステムおよび時系列データベースです
- [pudge](https://github.com/recoilme/pudge) - Goの標準ライブラリを使用して書かれたシンプルで高速なキー/値ストレージです
- [redka](https://github.com/nalgeon/redka) - SQLiteを用いたRedisのリイマージメントです
- [rosedb](https://github.com/roseduan/rosedb) - LSM+WALをベースにした埋め込みk-vデータベース。文字列、リスト、ハッシュ、セット、ZSETをサポート。
- [rotom](https://github.com/xgzlucario/rotom) - Golangで構築されたミニRedisサーバー。RESPプロトコルと互換。
- [rqlite](https://github.com/rqlite/rqlite) - SQLiteをベースにした軽量かつ分散型の関係データベース。
- [tempdb](https://github.com/rafaeljesus/tempdb) - 一時的なアイテムを格納するためのキーバリューストア。
- [tidb](https://github.com/pingcap/tidb) - TiDBは分散型SQLデータベースであり、Google F1の設計にインスピレーションを得ている。
- [tiedot](https://github.com/HouzuoGuo/tiedot) - Golangで構築されたNoSQLデータベース。
- [unitdb](https://github.com/unit-io/unitdb) - IoTやリアルタイムメッセージングアプリケーション向けの高速タイムシリーズデータベース。github.com/unit-io/unitdアプリケーションを使ってTCPまたはWebSocket経由でunitdbにアクセス可能。
- [Vasto](https://github.com/chrislusf/vasto) - 分散型・高性能キーバリューストア。ディスク上に保存。最終一致。高可用性。サービス中断なしで拡張または縮小可能。
- [VictoriaMetrics](https://github.com/VictoriaMetrics/VictoriaMetrics) - 高速かつリソース効率的でスケーラブルなオープンソースタイムシリーズデータベース。Prometheusの長期リモートストレージとして使用可能。PromQLをサポート。
- 
### データベーススキーマ移行 <a id="database-schema-migration"></a>

- [atlas](https://github.com/ariga/atlas) - データベースツールキット。開発チームがデータをより効果的に扱うために設計されたCLI。
- [avro](https://github.com/khezen/avro) - SQLスキーマを発見し、AVROスキーマに変換。SQLレコードをAVROバイトにクエリ。
- [bytebase](https://github.com/bytebase/bytebase) - DevOpsチーム向けの安全なデータベーススキーマ変更とバージョン管理。
- [darwin](https://github.com/GuiaBolso/darwin) - Go向けのデータベーススキーマ進化ライブラリ。
- [db-migrator.go](https://github.com/raoptimus/db-migrator.go) - PostgreSQL、MySQL、ClickHouse、Tarantool、Apache Icebergに対応したバージョン管理付きデータベーススキーマ移行のCLI。
- [dbmate](https://github.com/amacneil/dbmate) - 軽量かつフレームワークに依存しないデータベース移行ツール。
- [go-fixtures](https://github.com/RichardKnop/go-fixtures) - Golangの標準的なdatabase/sqlライブラリに合わせたDjangoスタイルのフィクスチャ。
- [go-pg-migrate](https://github.com/lawzava/go-pg-migrate) - go-pg移行管理に向けたCLI対応パッケージ。
- [go-pg-migrations](https://github.com/robinjoseph08/go-pg-migrations) - go-pg/pgを使って移行を書くためのGoパッケージ。
- [goavro](https://github.com/linkedin/goavro) - AvroデータをエンコードおよびデコードするためのGoパッケージ。
- [godfish](https://github.com/rafaelespinoza/godfish) - ネイティブクエリ言語に対応したデータベース移行マネージャ。Cassandra、MySQL、PostgreSQL、SQLite3に対応。
- [goose](https://github.com/pressly/goose) - データベース移行ツール。インクリメンタルなSQLまたはGoスクリプトを作成することで、データベースの進化を管理できます。
- [gorm-seeder](https://github.com/Kachit/gorm-seeder) - Gorm ORM用のシンプルなデータベースシーダー。
- [gormigrate](https://github.com/go-gormigrate/gormigrate) - Gorm ORM用のデータベーススキーマ移行補助ツール。
- [libschema](https://github.com/muir/libschema) - 各ライブラリで個別に移行を定義できます。オープンソースライブラリ向けの移行。MySQLおよびPostgreSQL対応。
- [migrate](https://github.com/golang-migrate/migrate) - データベース移行。CLIおよびGoライブラリ。
- [migrator](https://github.com/lopezator/migrator) - 極めてシンプルなGoデータベース移行ライブラリ。
- [migrator](https://github.com/larapulse/migrator) - MySQLデータベース移行ツール。機能ごとに移行を実行し、データベーススキーマの更新を直感的なGoコードで管理します。
- [schema](https://github.com/adlio/schema) - データベース/sqlに適合するデータベースにスキーマ移行を埋め込むためのライブラリ。
- [skeema](https://github.com/skeema/skeema) - MySQL用の純粋SQLスキーマ管理システム。シャードおよび外部オンラインスキーマ変更ツールに対応。
- [soda](https://github.com/gobuffalo/pop/tree/master/soda) - MySQL、PostgreSQL、SQLite用のデータベースマイグレーション、作成、ORMなど。
- [sql-migrate](https://github.com/rubenv/sql-migrate) - データベース移行ツール。go-bindataを使用してアプリケーションに移行を埋め込みます。
- [sqlize](https://github.com/sunary/sqlize) - データベース移行ジェネレーター。モデルと既存のSQLを比較してSQL移行を生成します。

### データベースツール <a id="database-tools"></a>

- [chproxy](https://github.com/Vertamedia/chproxy) - ClickHouseデータベース用のHTTPプロキシ。
- [clickhouse-bulk](https://github.com/nikepan/clickhouse-bulk) - 小さな挿入を収集し、ClickHouseサーバーに大きなリクエストを送信します。
- [database-gateway](https://github.com/kazhuravlev/database-gateway) - ACL、ログ、共有リンクを用いた生産環境でのSQL実行。
- [dbbench](https://github.com/sj14/dbbench) - 複数のデータベースおよびスクリプトに対応したデータベースベンチマークツール。
- [dg](https://github.com/codingconcepts/dg) - 生成された関係データからCSVファイルを生成する高速データ生成ツール。
- [filesql](https://github.com/nao1215/filesql) - データベース/sql APIを用いて、CSV、TSV、LTSV、JSON、JSONL、Parquet、Excel、ACH、FedwireファイルをSQLでクエリ。内部のSQLiteでサポート。
- [gatewayd](https://github.com/gatewayd-io/gatewayd) - クラウドネイティブなデータベースゲートウェイおよびデータドリブンアプリケーションの開発フレームワーク。APIゲートウェイのようにデータベースに適用。
- [go-mysql](https://github.com/siddontang/go-mysql) - MySQLプロトコルおよびレプリケーションを処理するGoツールセット。
- [go-postgres-s3-backup](https://github.com/nicobistolfi/go-postgres-s3-backup) - AWS Lambda を使って S3 にサーバーレスで PostgreSQL のバックアップを実行し、日次・月次・年次でローテーションを行う。
- [gorm-multitenancy](https://github.com/bartventer/gorm-multitenancy) - GORM で管理されたデータベースに多租賃対応を提供。
- [GoSQLX](https://github.com/ajitpratap0/GoSQLX) - 高性能な SQL パーサー、フォーマッター、リントツール、セキュリティスキャナー。複数の方言対応と WASM プレイヤーを備える。
- [hasql](https://golang.yandex/hasql) - 複数ホストの SQL データベースインストールにアクセスするためのライブラリ。
- [octillery](https://github.com/knocknote/octillery) - Go パッケージによるデータベースのシャード化（すべての ORM または raw SQL に対応）。
- [onedump](https://github.com/liweiyi88/onedump) - 異なるドライバーから異なる目的地へデータベースのバックアップを、1 つのコマンドと設定で実行。
- [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - PostgreSQL 用の高度なスケジューリング。
- [pgrwl](https://github.com/pgrwl/pgrwl) - クラウドネイティブな PostgreSQL の継続的バックアップ。
- [pgweb](https://github.com/sosedoff/pgweb) - Webベースの PostgreSQL データベースブラウザ。
- [pgxcli](https://github.com/Balaji01-4D/pgxcli) - Go で書かれた PostgreSQL CLI クライアント。pgcli にインスパイアされたもの。
- [prep](https://github.com/hexdigest/prep) - コードを変更せずに、準備された SQL ステートメントを使用できる。
- [pREST](https://github.com/prest/prest) - 開発を簡略化・加速。⚡ いつでも、リアルタイムで、高性能に、すべての Postgres アプリケーション（既存または新規）に対応。
- [rdb](https://github.com/HDT3213/rdb) - Redis の RDB ファイルを解析するためのツール。二次開発やメモリ分析に使用。
- [rwdb](https://github.com/andizzle/rwdb) - rwdb は複数のデータベースサーバー構成に読み取りレプリケーション機能を提供。
- [sqly](https://github.com/nao1215/sqly) - CSV、TSV、LTSV、JSON、Parquet、Excel ファイルに対して SQL を実行できるインタラクティブシェル。その背後にはメモリ内の SQLite が使われる。
- [vitess](https://github.com/youtube/vitess) - vitess は、大規模ウェブサービスの MySQL データベースのスケーリングを支援するサーバーとツールを提供。
- [wescale](https://github.com/wesql/wescale) - WeScale は、アプリケーションのスケーラビリティ、パフォーマンス、セキュリティ、リズリエンスを向上させるためのデータベースプロキシ。
- [xsql](https://github.com/zx06/xsql) - AI が中心のクロスデータベース CLI ツール。読み取り専用保護と構造化された JSON 出力を持つ。

### SQLクエリビルダー <a id="sql-query-builders"></a>

_SQLクエリビルダーに関するGoライブラリ、ツール、または資料です。_

- [bqb](https://github.com/nullism/bqb) - 軽量で学習しやすいクエリビルダー。
- [buildsqlx](https://github.com/arthurkushman/buildsqlx) - PostgreSQL 用の Go データベースクエリビルダーライブラリ。
- [builq](https://github.com/cristalhq/builq) - GoでSQLクエリを簡単に構築できます
- [dbq](https://github.com/rocketlaunchr/dbq) - Goでのデータベース操作にボイラープレートなし
- [Dotsql](https://github.com/gchaincl/dotsql) - SQLファイルを一つの場所にまとめて使いやすくするためのGo用ライブラリ
- [gendry](https://github.com/didi/gendry) - 侵襲なしのSQLビルダーと強力なデータバインダー
- [godbal](https://github.com/xujiajun/godbal) - Go用のデータベース抽象化レイヤー（dbal）．SQLビルダーと結果取得を簡単にサポート
- [goqu](https://github.com/doug-martin/goqu) - 自然なSQLビルダーとクエリライブラリ
- [gosql](https://github.com/twharmon/gosql) - より良いnull値サポートを備えたSQLクエリビルダー
- [Hotcoal](https://github.com/motrboat/hotcoal) - 手作りのSQLをインジェクションから守ります
- [igor](https://github.com/galeone/igor) - PostgreSQL向けの抽象化レイヤーで高度な機能をサポートし、gormのような構文を使用
- [jet](https://github.com/go-jet/jet) - Goで型安全なSQLクエリを書くためのフレームワークで、データベースの結果を望む任意のオブジェクト構造に簡単に変換できます
- [obreron](https://github.com/profe-ajedrez/obreron) - 高速かつ安価なSQLビルダーで、ただ一つのことを行います：SQLの構築
- [ormlite](https://github.com/pupizoid/ormlite) - 軽量なパッケージで、SQLiteデータベース向けのいくつかのORMのような機能とヘルパーを提供
- [ozzo-dbx](https://github.com/go-ozzo/ozzo-dbx) - 強力なデータ取得メソッドおよびデータベースに依存しないクエリ構築機能
- [patcher](https://github.com/Jacobbrewer1/patcher) - 構造体から自動的にSQLクエリを生成する強力なSQLクエリビルダー
- [qrafter](https://github.com/SennovE/qrafter) - 型安全なSQLクエ連携ビルダーで、ディialect認識レンダリング、スキーマの内省、およびマイグレーション生成をサポート
- [qry](https://github.com/HnH/qry) - raw SQLクエリを持つファイルから定数を生成するツール
- [relica](https://github.com/coregx/relica) - 生産環境に依存しない型安全なデータベースクエリビルダー、LRUステートメントキャッシュ、バッチ操作、JOIN、サブクエリ、CTE、ウィンドウ関数のサポートを備えた
- [sg](https://github.com/go-the-way/sg) - Goで書かれた標準SQL生成ツール（CRUDをサポート）
- [sq](https://github.com/bokwoon95/go-structured-query) - Go向けの型安全なSQLビルダーと構造体マッパー
- [sqlc](https://github.com/kyleconroy/sqlc) - SQLから型安全なコードを生成します
- [sqlf](https://github.com/leporo/sqlf) - 高速SQLクエリビルダー
- [sqlh](https://github.com/kirill-scherba/sqlh) - 構造体タグとGoジェネリクスを活用したゼロボイラープレートSQLヘルパー（CRUD、UPSERT、JOIN、ベンチマーク）
- [sqlingo](https://github.com/lqs/sqlingo) - GoでSQLを構築するための軽量DSL
- [sqrl](https://github.com/elgris/sqrl) - Squirrelのフォークでパフォーマンスが向上したSQLクエリビルダー
- [Squalus](https://gitlab.com/qosenergy/squalus) - GoのSQLパッケージにのせた薄いラッパーでクエリの実行を容易に
- [Squirrel](https://github.com/Masterminds/squirrel) - SQLクエリを構築するためのGoライブラリ
- [xo](https://github.com/knq/xo) - PostgreSQL、MySQL、SQLite、Oracle、Microsoft SQL Serverをサポートする既存スキーマ定義またはカスタムクエリに基づいて、データベースに適したGoコードを生成

**[⬆ back to top関連](#contents)**

## データベースドライバー <a id="database-drivers"></a>

### 複数バックエンド向けインターフェース <a id="interfaces-to-multiple-backends"></a>

- [cayley](https://github.com/google/cayley) - 複数のバックエンドをサポートするグラフデータベース
- [dsc](https://github.com/viant/dsc) - SQL、NoSQL、構造化ファイルのデータストア接続
- [dynamo](https://github.com/fogfish/dynamo) - AWSのストレージサービス（AWS DynamoDBおよびAWS S3）に代入可能なキー・バリュー抽象化により、代数的およびリンクデータ型を保存
- [go-transaction-manager](https://github.com/avito-tech/go-transaction-manager) - 複数のアダプタ（sql、sqlx、gorm、mongo、...）をサポートするトランザクションマネージャーがトランザクション境界を制御
- [gokv](https://github.com/philippgille/gokv) - Goにおけるシンプルなキー・バリューストア抽象化と実装（Redis、Consul、etcd、bbolt、BadgerDB、LevelDB、Memcached、DynamoDB、S3、PostgreSQL、MongoDB、CockroachDBなど）
- [transactor](https://github.com/metalfm/transactor) - database/sql、sqlx、pgxにアダプタを備えた型安全なトランザクション境界抽象化

### リレーショナルDBドライバー <a id="relational-database-drivers"></a>

- [avatica](https://github.com/apache/calcite-avatica-go) - database/sql用のApache Avatica/Phoenix SQLドライバー
- [bgc](https://github.com/viant/bgc) - BigQuery用のGoのデータストア接続
- [firebirdsql](https://github.com/nakagami/firebirdsql) - Firebird RDBMS用のGoのSQLドライドライバー
- [go-adodb](https://github.com/mattn/go-adodb) - database/sqlを使用するMicrosoft ActiveX Object DataBaseドライバー
- [go-mssqldb](https://github.com/denisenkom/go-mssqldb) - Microsoft MSSQL用のGoドライバー
- [go-oci8](https://github.com/mattn/go-oci8) - database/sqlを使用するOracleドライバー
- [go-rqlite](https://github.com/rqlite/gorqlite) - rqlite用のGoクライアントで、rqlite APIとのやり取りを簡単に行うための抽象化を提供
- [go-sql-driver/mysql](https://github.com/go-sql-driver/mysql) - Go 用の MySQL ドライバー
- [go-sqlite3](https://github.com/mattn/go-sqlite3) - database/sql を使用する Go 用の SQLite3 ドライバー
- [go-sqlite3](https://github.com/ncruces/go-sqlite3) - この Go モジュールは database/sql ドライバーと互換性があります。SQLite をアプリケーションに埋め込み可能で、C API への直接アクセスを提供し、SQLite VFS をサポートし、さらに GORM ドライバーを含んでいます
- [godror](https://github.com/godror/godror) - Go 用の Oracle ドライバー（ODPI-C ドライバーを使用）
- [gofreetds](https://github.com/minus5/gofreetds) - Microsoft MSSQLドライバー。[FreeTDS](https://www.freetds.org)のGoラッパー。
- [KSQL](https://github.com/VinGarcia/ksql) - シンプルで強力な Golang SQL ライブラリ
- [pgx](https://github.com/jackc/pgx) - database/sql が提供する機能を超える PostgreSQL ドライドライバー
- [pig](https://github.com/alexeyco/pig) - [pgx](https://github.com/jackc/pgx)をラップし、クエリの実行と結果の[スキャン](https://github.com/georgysavva/scany)を容易にする。
- [pq](https://github.com/lib/pq) - database/sql 用の純 Go プラグイン PostgreSQL ドライバー
- [Sqinn-Go](https://github.com/cvilsmeier/sqinn-go) - 純 Go による SQLite
- [sqlhooks](https://github.com/qustavo/sqlhooks) - 任意の database/sql ドライバーにホックを付加
- [sqlite](https://pkg.go.dev/modernc.org/sqlite) - package sqlite は、C SQLite3 ライブラリの CGo なし版を使用した sql/database ドライバーです
- [surrealdb.go](https://github.com/surrealdb/surrealdb.go) - Go 用の SurrealDB ドライバー
- [ydb-go-sdk](https://github.com/ydb-platform/ydb-go-sdk) - YDB（Yandex Database）のネイティブドライバーおよび database/sql ドライバー

### NoSQLドライバー <a id="nosql-database-drivers"></a>

- [aerospike-client-go](https://github.com/aerospike/aerospike-client-go) - Go 言語による Aerospike クライアント
- [arangolite](https://github.com/solher/arangolite) - 軽量な Go ドライバー（ArangoDB 用）
- [asc](https://github.com/viant/asc) - Aerospike 用の Datastore コネクティビティ（Go 用）
- [forestdb](https://github.com/couchbase/goforestdb) - Go 用の ForestDB バインディング
- [go-couchbase](https://github.com/couchbase/go-couchbase) - Go 用の Couchbase クライアント
- [go-mongox](https://github.com/chenmingyong0423/go-mongox) - 公式ドライバーに基づいた Go モノの MongoDB ライブラリ。ドキュメント操作を簡素化し、構造体とコレクションの汎用バインディング、CRUD および集計機能を内蔵し、フィールドの自動更新、構造体検証、ホック、プラグインベースのプログラミングをサポートしています
- [go-pilosa](https://github.com/pilosa/go-pilosa) - Go 用の Pilosa クライアント
- [go-rejson](https://github.com/nitishm/go-rejson) - Redigo Go クライアントを用いた Redis Labs の ReJSON モジュール用の Go クライアント。Redis に構造体を JSON オブジェクトとして簡単に格納・操作可能
- [gocb](https://github.com/couchbase/gocb) - 公式Couchbase Go SDK
- [gocosmos](https://github.com/btnguyen2k/gocosmos) - Azure Cosmos DB 用の REST クライアントおよび標準 `database/sql` ドライバー.
- [gocql](https://gocql.github.io) - Apache Cassandra用Go言語ドライバー
- [godis](https://github.com/piaohao/godis) - golangによるredisクライアント、jedisにインスパイアされたもの
- [godscache](https://github.com/defcronyke/godscache) - Google Cloud Platform Go Datastoreパッケージをラップした、memcachedによるキャッシュを追加したもの
- [gomemcache](https://github.com/bradfitz/gomemcache/) - Goプログラミング言語用のmemcacheクライアントライブラリ
- [gomemcached](https://github.com/aliexpressru/gomemcached) - 一致ハッシュを使用したシャードサポートおよびSASLを備えたGo用バイナリMemcachedクライアント
- [gorethink](https://github.com/dancannon/gorethink) - RethinkDB用Go言語ドライバー
- [goriak](https://github.com/zegl/goriak) - Riak KV用Go言語ドライバー
- [Kivik](https://github.com/go-kivik/kivik) - KivikはCouchDB、PouchDBおよび類似データベースに対して、GoおよびGopherJS用の共通クライアントライブラリを提供する
- [mgm](https://github.com/kamva/mgm) - Go用のMongoDBモデルベースODM（公式MongoDBドライバーに基づく）
- [mgo](https://github.com/globalsign/mgo) - （メンテナンス終了）標準的なGoの慣例に従う簡潔なAPIで、豊富かつ十分にテストされた機能を提供するMongoDBドライバー。
- [mongo-go-driver](https://github.com/mongodb/mongo-go-driver) - 公式MongoDBドライバー（Go言語用）
- [neo4j](https://github.com/cihangir/neo4j) - Neo4j REST API用Golangバインディング
- [neoism](https://github.com/jmcvetta/neoism) - Neo4j用Golangクライアント
- [qmgo](https://github.com/qiniu/qmgo) - Go用MongoDBドライバー。公式MongoDBドライバーに基づいているが、Mgoのように使いやすいもの
- [redeo](https://github.com/bsm/redeo) - Redisプロトコルに対応したTCPサーバー／サービス
- [redigo](https://github.com/gomodule/redigo) - RedigoはRedisデータベース用のGoクライアント
- [redis](https://github.com/redis/go-redis) - Golang用のRedisクライアント
- [rueidis](http://github.com/rueian/rueidis) - 自動パイプラインとサーバーによるクライアントサイドキャッシュを備えた高速Redis RESP3クライアント
- [xredis](https://github.com/shomali11/xredis) - 型安全でカスタマイズ可能、シンプルで使いやすいRedisクライアント

### 検索・分析データベース <a id="search-and-analytic-databases"></a>

- [clickhouse-go](https://github.com/ClickHouse/clickhouse-go/) - Go 用の ClickHouse SQL クライアントで `database/sql` 互換性を提供.
- [effdsl](https://github.com/sdqri/effdsl) - Go 用の Elasticsearch クエリビルダー
- [elastic](https://github.com/olivere/elastic) - Go 用の Elasticsearch クライアント
- [elasticsql](https://github.com/cch123/elasticsql) - Go で SQL を Elasticsearch DSL に変換
- [elastigo](https://github.com/mattbaird/elastigo) - Elasticsearch クライアント ライブラリ
- [go-elasticsearch](https://github.com/elastic/go-elasticsearch) - Go 用の公式 Elasticsearch クライアント
- [goes](https://github.com/OwnLocal/goes) - Elasticsearch との相互作用を行うライブラリ
- [skizze](https://github.com/skizzehq/skizze) - 確率的データ構造サービスおよびストレージ
- [zoekt](https://github.com/sourcegraph/zoekt) - 高速な三項ベースのコード検索

**[⬆ back to top関連](#contents)**

## 日付と時刻 <a id="date-and-time"></a>

_日付と時刻に関するGoライブラリ、ツール、または資料です。_

- [approx](https://github.com/goschtalt/approx) - 日、週、年単位の期間をパース・プリントできる Duration 拡張
- [carbon](https://github.com/dromara/carbon) - Go 用のシンプルで意味的かつ開発者フレンドリーな時間パッケージ
- [carbon](https://github.com/uniplaces/carbon) - PHP Carbon ライブラリから移植された、多くのユーティリティメソッドを備えたシンプルな時間拡張
- [cronrange](https://github.com/1set/cronrange) - Cronスタイルの時間範囲表現をパースし、与えられた時間の範囲内にあるかをチェック
- [date](https://github.com/rickb777/date) - 日付、日付範囲、時間帯、期間、時刻の処理に特化した Time の拡張
- [dateparse](https://github.com/araddon/dateparse) - フォーマットを事前に知らなくても日付をパース
- [durafmt](https://github.com/hako/durafmt) - Go 用の時間期間フォーマットライブラリ
- [feiertage](https://github.com/wlbr/feiertage) - ドイツの公休日を計算するための関数セット。ドイツの各州（Bundesländer）に特化した内容を含む。例：イースター、ペンテコステ、感謝の日など
- [go-anytime](https://github.com/ijt/go-anytime) - フォーマットを事前に知らなくても、"次週の12月22日15時"のような日時や"今日から次週の木曜日まで"のような範囲をパース
- [go-date-fns](https://github.com/chmenegatti/go-date-fns) - date-fnsをインスピレーションとして作られた、Go用の包括的な日付ユーティリティライブラリ。140以上純粋かつ不変な関数を備えている
- [go-datebin](https://github.com/deatil/go-datebin) - シンプルな日時パースパッケージ
- [go-faketime](https://github.com/harkaitz/go-faketime) - faketime(1)ユーティリティに従うシンプルな`time.Now()`実装。
- [go-persian-calendar](https://github.com/yaa110/go-persian-calendar) - Go（golang）で実装されたペルシャ（ソーラー・ヒジリ）カレンダー
- [go-str2duration](https://github.com/xhit/go-str2duration) - 文字列を期間に変換。time.Durationを返す文字列やその他の形式をサポート。
- [go-sunrise](https://github.com/nathan-osman/go-sunrise) - 指定された場所の日の出と日の入り時刻を計算。
- [go-week](https://github.com/stoewer/go-week) - ISO8601の週日付を扱うための効率的なパッケージ。
- [gostradamus](https://github.com/bykof/gostradamus) - 日付を扱うためのGoパッケージ。
- [iso8601](https://github.com/relvacode/iso8601) - 正規表現を使わずにISO86001形式の日時を効率的にパース。
- [kair](https://github.com/GuilhermeCaruso/kair) - 日時 - Goのフォーマットライブラリ。
- [now](https://github.com/jinzhu/now) - NowはGo向けの時刻ツールキット。
- [strftime](https://github.com/awoodbeck/strftime) - C99互換のstrftimeフォーマッター。
- [timespan](https://github.com/SaidinWoT/timespan) - 開始時刻と期間で定義された時間区間との相互作用に使用。
- [timeutil](https://github.com/leekchan/timeutil) - Goのtimeパッケージに追加されたユーティリティ（Timedelta, Strftime, ...）。
- [tuesday](https://github.com/osteele/tuesday) - Rubyと互換性のあるstrftime関数。

**[⬆ back to top関連](#contents)**

## 分散システム <a id="distributed-systems"></a>

_分散システムに関するGoライブラリ、ツール、または資料です。_

- [arpc](https://github.com/lesismal/arpc) - より効果的なネットワーク通信、両方向呼び出し、通知、ブロードキャストをサポート。
- [bedrock](https://github.com/z5labs/bedrock) - Goで迅速にサービスや用途に特化したフレームワークを開発するための最小限で、モジュール化され、組み合わせ可能な基礎を提供。
- [capillaries](https://github.com/capillariesio/capillaries) - 分散型のバッチデータ処理フレームワーク。
- [circuit](https://github.com/schigh/circuit) - 確率的スローリングによる徐々な回復を含む回路ブレーカー。
- [cmd-stream-go](https://github.com/cmd-stream/cmd-stream-go) - Go向けの高パフォーマンス分散コマンドパターンライブラリ。
- [committer](https://github.com/vadiminshakov/committer) - 分散型トランザクション管理システム（2PC/3PC実装）。
- [consistent](https://github.com/buraksezer/consistent) - 負荷を制限した一貫性ハッシュ。
- [consistenthash](https://github.com/mbrostami/consistenthash) - 設定可能なレプリケーションを含む一貫性ハッシュ。
- [dht](https://github.com/anacrolix/dht) - BitTorrentのKademlia DHT実装。
- [digota](https://github.com/digota/digota) - grpc エコノミー クラウドマイクロサービス
- [dot](https://github.com/dotchain/dot/) - 分散型同期をオペレーショナルトランスフォーメーション/OTで実現
- [doublejump](https://github.com/edwingeng/doublejump) - Googleのジャンプコンシステントハッシュをリニューアル
- [dragonboat](https://github.com/lni/dragonboat) - Goで構築された、完全な機能と高性能なマルチグループRaftライブラリ
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - p2p技術を用いた効率的・安定・安全なファイル配布および画像アクセラレーションを提供し、クラウドネイティブアーキテクチャにおけるベストプラクティスおよび標準ソリューションとなる
- [drmaa](https://github.com/dgruber/drmaa) - DRMAA標準に基づくクラスタスケジューラ向けのジョブ提出ライブラリ
- [dynamolock](https://cirello.io/dynamolock) - DynamoDBをバックエンドとした分散ロック実装
- [dynatomic](https://github.com/tylfin/dynatomic) - DynamoDBを原子カウンタとして使用するためのライブラリ
- [emitter-io](https://github.com/emitter-io/emitter) - MQTT、Websocketsを用いて構築された、高性能・分散型・安全かつ低遅延のパブリッシュ・サブスクリプションプラットフォーム
- [evans](https://github.com/ktr0731/evans) - Evans: より表現力のあるユニバーサルgRPCクライアント
- [failured](https://github.com/andy2046/failured) - 分散システム向けの適応型失敗検出器
- [flowgraph](https://github.com/vectaport/flowgraph) - フローベースプログラミングパッケージ
- [gleam](https://github.com/chrislusf/gleam) - 純GoおよびLuajitで構築された高速かつスケーラブルな分散マップ/リダクションシステム。Goの高いコンカレント性とLuaj及の高いパフォーマンスを組み合わせ、スタンドアローンまたは分散環境で動作
- [glow](https://github.com/chrislusf/glow) - 使いやすく、スケーラブルな分散型ビッグデータ処理、マップ・リダクション、DAG実行をすべて純Goで実現
- [gmsec](https://github.com/gmsec/micro) - Goによる分散システム開発フレームワーク
- [go-doudou](https://github.com/unionj-cloud/go-doudou) - ゴッピープロトコルとOpenAPI 3.0仕様に基づく分散マイクロサービスフレームワーク。組み込みのgo-doudou CLIにより、低コードおよび高速開発を実現し、あなたの生産性を高めます
- [go-eagle](https://github.com/go-eagle/eagle) - APIまたはマイクロサービス向けのGoフレームワーク。便利なスケルトンツールを備えています
- [go-jump](https://github.com/dgryski/go-jump) - Googleの"Jump"コンシステントハッシュ関数のポート
- [go-kit](https://github.com/go-kit/kit) - サービス発見、負荷分散、プラグイン可能なトランスポート、リクエストトレーキングなど、マイクロサービス向けのツールキット
- [go-micro](https://github.com/micro/go-micro) - 分散システム開発フレームワーク
- [go-mysql-lock](https://github.com/sanketplus/go-mysql-lock) - MySQLベースの分散ロック
- [go-pdu](https://github.com/pdupub/go-pdu) - 分散型IDベースのソーシャルネットワーク
- [go-sundheit](https://github.com/AppsFlyer/go-sundheit) - Goサービス向けの非同期サービスヘルスチェックを定義するためのライブラリ
- [go-zero](https://github.com/tal-tech/go-zero) - WebおよびRPCフレームワーク。高負荷環境の安定性を確保するための設計を採用しており、組み込みのgoctlにより開発効率が大きく向上
- [gorpc](https://github.com/valyala/gorpc) - 高負荷環境向けにシンプルで高速かつスケーラブルなRPCライブラリ
- [grpc-go](https://github.com/grpc/grpc-go) - Go言語によるgRPCの実装。HTTP/2ベースのRPC
- [health](https://github.com/schigh/health) - KubernetesプローブをサポートするGoサービス向けヘルスチェック
- [hprose](https://github.com/hprose/hprose-golang) - 非常に初心者向けのRPCライブラリ。現在25以上の言語をサポート
- [jsonrpc](https://github.com/osamingo/jsonrpc) - JSON-RPC 2.0の実装を支援するjsonrpcパッケージ
- [jsonrpc](https://github.com/ybbus/jsonrpc) - JSON-RPC 2.0のHTTPクライアント実装
- [K8gb](https://github.com/k8gb-io/k8gb) - クラウドネイティブなKubernetesグローバルローバンス
- [Kitex](https://github.com/cloudwego/kitex) - パフォーマンスと拡張性に強いGo言語のRPCフレームワーク。マイクロサービス開発において、パフォーマンスと拡張性が主な課題である場合、Kitexは良い選択肢になります
- [Kratos](https://github.com/go-kratos/kratos) - Go言語で構成されたモジュール設計で構成された、使いやすいマイクロサービスフレームワーク
- [liftbridge](https://github.com/liftbridge-io/liftbridge) - NATS向けに軽量かつ障害に強いメッセージストリーム
- [lock](https://github.com/ubgo/lock) - 1つのGoインターフェースと5つのバックエンド（filelock、flock、Redis、Postgres、etcd）を備えた分散ロックファミリー。すべてのバックエンドでフェンシングトークン、セマフォモード、観測性ハックを提供
- [lura](https://github.com/luraproject/lura) - 超高速APIゲートウェイフレームワーク（ミドルウェアを備える）
- [mochi mqtt](https://github.com/mochi-co/mqtt) - 完全に仕様に準拠し、埋め込み可能な高性能MQTT v5/v3ブローカー。IoT、スマートホーム、pubsubに最適
- [NATS](https://github.com/nats-io/nats-server) - NATSはデジタルシステム、サービス、デバイス間のシンプルで安全かつパフォーマンスの高い通信システムです
- [opentelemetry-go-auto-instrumentation](https://github.com/alibaba/opentelemetry-go-auto-instrumentation) - Go言語向けOpenTelemetryのコンパイル時インストルメンテーション
- [oras](https://github.com/oras-project/oras) - コンテナレジストリにおけるOCIアーティファクトのCLIおよびライブラリ
- [outbox](https://github.com/oagudo/outbox) - Goで実装されたトランザクショナルアウトボックスパターン用の軽量ライブラリで、特定の関係データベースやブローカーに依存していない。
- [outboxer](https://github.com/italolelis/outboxer) - OutboxerはGo言語で実装されたアウトボックスパターンを実現するライブラリ。
- [pglock](https://cirello.io/pglock) - PostgreSQLをバックエンドとした分散ロック実装。
- [pjrpc](https://gitlab.com/pjrpc/pjrpc) - GolangによるJSON-RPCサーバー・クライアント（プロトobuf仕様）。
- [raft](https://github.com/hashicorp/raft) - HashiCorpが開発したRaftコンセンサスプロトコルのGolang実装。
- [raft](https://github.com/etcd-io/raft) - CoreOSが開発したRaftコンセンサスプロト連のGo実装。
- [rain](https://github.com/cenkalti/rain) - BitTorrentクライアントおよびライブラリ。
- [redis-lock](https://github.com/bsm/redislock) - Redisを用いた簡易な分散ロック実装。
- [resgate](https://resgate.io/) - REST、リアルタイム、RPC APIを構築するためのリアルタイムAPIゲートウェイ。すべてのクライアントがシームレスに同期される。
- [rpcplatform](https://github.com/nexcode/rpcplatform) - サービス発見、負荷分散などに関連する機能を備えたマイクロサービスフレームワーク。
- [rpcx](https://github.com/smallnest/rpcx) - アリババのDubboに類似した分散プラグイン型RPCサービスフレームワーク。
- [Semaphore](https://github.com/jexia/semaphore) - シンプルな（マイクロ）サービスオーガナイザー。
- [servicepack](https://github.com/psyb0t/servicepack) - 1つのバイナリ内で複数のサービスを並列実行できるフレームワーク（ローカルまたはマシン間分散）。
- [sleuth](https://github.com/ursiform/sleuth) - HTTP サービス間のマスターレス P2P 自動発見と RPC 用のライブラリ（ [ZeroMQ](https://github.com/zeromq/libzmq) を使用）.
- [sponge](https://github.com/zhufuyi/sponge) - 自動コード生成、ginおよびgrpcフレームワーク、ベース開発フレームワークを統合した分散開発フレームワーク。
- [Tarmac](https://github.com/tarmac-project/tarmac) - WebAssemblyで関数、マイクロサービス、またはモノリスを書くためのフレームワーク。
- [Temporal](https://github.com/temporalio/sdk-go) - コードの障害耐性とシンプルさを実現する持続可能な実行システム。
- [torrent](https://github.com/anacrolix/torrent) - BitTorrentクライアントパッケージ。
- [trpc-go](https://github.com/trpc-group/trpc-go) - tRPCのGo言語実装。tRPCはプラグイン型・高性能なRPCフレームワーク。

**[⬆ back to top関連](#contents)**

## 動的DNS <a id="dynamic-dns"></a>

_動的DNSに関するGoライブラリ、ツール、または資料です。_

- [DDNS](https://github.com/skibish/ddns) - Digital Ocean Networking DNSをバックエンドとして利用した個人用DDNSクライアント。
- [dyndns](https://gitlab.com/alcastle/dyndns) - IPアドレスを定期的に自動的にチェックし、IPアドレスが変更された際にGoogleドメインの（1つまたは複数の）動的DNSレコードを更新するためのバックグラウンドGoプロセス。
- [GoDNS](https://github.com/timothyye/godns) - DNSPodおよびHE.netに対応する動的DNSクライアントツール。Goで書かれたもの。

**[⬆ back to top関連](#contents)**

## メール <a id="email"></a>

_メールに関するGoライブラリ、ツール、または資料です。_

- [chasquid](https://blitiri.com.ar/p/chasquid) - Goで書かれたSMTPサーバー。
- [douceur](https://github.com/aymerick/douceur) - HTMLメール用のCSSインライン化ツール。
- [email](https://github.com/jordan-wright/email) - Go向けに強固で柔軟なメールライブラリ。
- [email-verifier](https://github.com/AfterShip/email-verifier) - メールの検証を行うGoライブラリ。メールを送信せずに実行可能。
- [go-dkim](https://github.com/toorop/go-dkim) - メールに署名・検証を行うDKIMライブラリ。
- [go-email-normalizer](https://github.com/dimuska139/go-email-normalizer) - メールアドレスの標準表現を提供するGoライブラリ。
- [go-imap](https://github.com/BrianLeishman/go-imap) - 自動再接続、OAuth2、IDLE対応、組み込みMIME解析を備えた、豊富な機能を備えたIMAPクライアント。
- [go-imap](https://github.com/emersion/go-imap) - クライアントおよびサーバー向けのIMAPライブラリ。
- [go-mail](https://github.com/wneessen/go-mail) - Goで簡易にメールを送信するためのGoライブラリ。
- [go-message](https://github.com/emersion/go-message) - インターネットメッセージフォーマットおよびメールメッセージ用のストリーミングライブラリ。
- [go-premailer](https://github.com/vanng822/go-premailer) - HTMLメール用のインラインスタイルをGoで提供するツール。
- [go-simple-mail](https://github.com/xhit/go-simple-mail) - SMTP Keep Aliveと接続・送信の2つのタイムアウトを用いてメールを送信する非常にシンプルなパッケージ。
- [go-spamcheck](https://github.com/psyb0t/go-spamcheck) - PostmarkのSpamCheck APIに接続するクライアント。メールをSpamAssassin規則でスコアリング。
- [Hectane](https://github.com/hectane/hectane) - 軽量なSMTPクライアントでHTTP APIを提供。
- [hermes](https://github.com/matcornic/hermes) - クリーンでレスポンス性の高いHTMLメールを生成するGoパッケージ。
- [Maddy](https://github.com/foxcpp/maddy) - すべての機能（SMTP、IMAP、DKIM、DMARC、MTA-STS、DANE）を備えたメールサーバー。
- [mailchain](https://github.com/mailchain/mailchain) - ブロックチェーンアドレスに暗号化されたメールを送信するGoによるツール。
- [mailgun-go](https://github.com/mailgun/mailgun-go) - Mailgun APIを使ってメールを送信するGoライブラリ。
- [MailHog](https://github.com/mailhog/MailHog) - ウェブおよびAPIインターフェースによるメールおよびSMTPのテスト。
- [Mailpit](https://github.com/axllent/mailpit) - 開発者向けのメールおよびSMTPテストツール
- [mailx](https://github.com/valord577/mailx) - SMTP でメールを送るのを簡単にするライブラリ。Go の標準ライブラリ `net/smtp` の拡張です.
- [mox](https://github.com/mjl-/mox) - 低維持管理で自前で運用可能な、現代的な完全機能かつ安全なメールサーバー
- [SendGrid](https://github.com/sendgrid/sendgrid-go) - SendGridのGoライブラリによるメール送信
- [smtp](https://github.com/mailhog/smtp) - SMTPサーバープロトコルの状態マシン
- [smtpmock](https://github.com/mocktools/go-smtp-mock) - 軽量かつ設定可能なマルチスレッド仮SMTPサーバー。テスト環境で任意のSMTP動作を模倣。
- [tickstem/verify](https://github.com/tickstem/verify) - データベースに送信される前にメールアドレスを検証：構文、MXリゾルバー、一時的なドメイン、役割ベースのインボックス。
- [truemail-go](https://github.com/truemail-rb/truemail-go) - 設定可能なGolangメール検証/確認ツール。正規表現、DNS、SMTPなどによるメール検証。

**[⬆ back to top関連](#contents)**

## 組み込みスクリプト言語 <a id="embeddable-scripting-languages"></a>

_組み込みスクリプト言語に関するGoライブラリ、ツール、または資料です。_

- [anko](https://github.com/mattn/anko) - Goで書かれたスクリプトインタプリタ。
- [binder](https://github.com/alexeyco/binder) - Go への Lua バインディングライブラリ、 [gopher-lua](https://github.com/yuin/gopher-lua) をベースにした.
- [cel-go](https://github.com/google/cel-go) - 高速かつ移植性に優れた、チューリング不完全な式評価機能（段階的型）。
- [ecal](https://github.com/krotik/ecal) - シンプルな埋め込みスクリプト言語で、並列イベント処理をサポート。
- [expr](https://github.com/antonmedv/expr) - Go用の式評価エンジン：高速、チューリング不完全、動的型、静的型。
- [FrankenPHP](https://github.com/dunglas/frankenphp) - Go に埋め込まれた PHP、 `net/http` ハンダーを備えた.
- [gentee](https://github.com/gentee/gentee) - 埋め込み可能なスクリプトプログラミング言語。
- [gisp](https://github.com/jcla1/gisp) - Goで実装されたシンプルなLISP。
- [go-lua](https://github.com/Shopify/go-lua) - Lua 5.2の仮想マシンを純Goに移植。
- [go-lua](https://github.com/speedata/go-lua) - 純Goで実装されたLua 5.4の仮想マシン。
- [go-php](https://github.com/deuill/go-php) - Go向けのPHPバインディング。
- [goal](https://codeberg.org/anaseto/goal) - 埋め込み可能なスクリプの配列言語。
- [goja](https://github.com/dop251/goja) - Goで実装されたECMAScript 5.1(+)。
- [golua](https://github.com/aarzilli/golua) - Lua C API向けのGoバインディング。
- [gopher-lua](https://github.com/yuin/gopher-lua) - Goで書かれたLua 5.1の仮想マシンおよびコンパイラ。
- [gval](https://github.com/PaesslerAG/gval) - Goで書かれた高度にカスタマイズ可能な表現言語
- [metacall](https://github.com/metacall/core) - ノードJS、JavaScript、TypeScript、Python、Ruby、C#、WebAssembly、Java、Cobolなど、マルチプラットフォーム対応のポリゴットランタイム
- [ngaro](https://github.com/db47h/ngaro) - Retroでのスクリプティングを可能にする埋め込みNgaro仮想マシンの実装
- [prolog](https://github.com/ichiban/prolog) - 埋め込みプロログ
- [purl](https://github.com/ian-kent/purl) - Goに組み込まれたPerl 5.18.2
- [starlark-go](https://github.com/google/starlark-go) - Starlark（Pythonに似た言語）のGo実装：決定論的評価と密封実行を備えた言語
- [starlet](https://github.com/1set/starlet) - [starlark-go](https://github.com/google/starlark-go) 用の Go ワッパーで、スクリプト実行を簡略化し、データ変換やユーティリティな Starlark ライブラリと拡張を提供.
- [tengo](https://github.com/d5/tengo) - Go用のバイトコードコンパイルスクリプト言語
- [Wa/凹语言](https://github.com/wa-lang/wa) - Goに組み込まれたWaプログラミング言語

**[⬆ back to top関連](#contents)**

## エラー処理 <a id="error-handling"></a>

_エラー処理に関するGoライブラリ、ツール、または資料です。_

- [ctxerrors](https://github.com/psyb0t/ctxerrors) - 各呼び出しサイトのファイル名、行番号、関数名を用いてエラーをラップ
- [emperror](https://github.com/emperror/emperror) - Goライブラリおよびアプリケーション向けのエラー処理ツールとベストプラクティス
- [eris](https://github.com/rotisserie/eris) - Goでエラーをより効果的に扱い、トレースし、ログを記録する方法。標準エラーライブラリおよびgithub.com/pkg/errorsと互換性あり
- [errlog](https://github.com/snwfdhmp/errlog) - エラーの責任あるソースコードを特定するためのハッキング可能なパッケージ（およびその他の高速デバッグ機能を含む）。任意のログ出力にプラグイン可能
- [errors](https://github.com/emperror/errors) - 標準ライブラリのエラーパッケージおよびgithub.com/pkg/errorsへの置き換え。さまざまなエラー処理プリミティブを提供
- [errors](https://github.com/neuronlabs/errors) - シンプルなGoエラー処理に分類プリミティブを備えたもの
- [errors](https://github.com/PumpkinSeed/errors) - シンプルなエラーラッパーで、驚くほど高速かつ最小限のメモリオーバーヘッドを実現
- [errors](https://gitlab.com/tozd/go/errors) - スタックトレースとオプションの構造化詳細を含むエラーの提供。github.com/pkg/errors APIと互換性があるが、内部では使用しない
- [errors](https://github.com/naughtygopher/errors) - 標準ライブラリのGoエラーへの置き換え。カスタムエラー型、ユーザーに親しみやすいメッセージ、UnwrapおよびIsを備えた最小限のエラー処理パッケージ。非常に使いやすく、シンプルなヘルパー関数を提供
- [errors](https://github.com/cockroachdb/errors) - ネットワークを介したエラーのポート可能性を備えたGoエラーライブラリ
- [errorx](https://github.com/joomcode/errorx) - スタックトレース、エラーの合成など、豊富な機能を備えたエラーパッケージ
- [exception](https://github.com/rbrahul/exception) - Goで例外処理を行うためのシンプルなユーティリティパッケージ（try-catch）
- [Falcon](https://github.com/SonicRoshan/falcon) - エラーハンドリングに最適で、非常に強力なパッケージ
- [Fault](https://github.com/Southclaws/fault) - エラーメタデータやコンテキストを構造的に扱うためのエラーワッピングを実現するエргonomicなメカニズム
- [go-errr](https://github.com/go-errr/go) - Go向けのエラーハンドリングライブラリ。Catch/Recoverセマンティクス、ラップされたエラーチェーン、スタックトレースを提供
- [go-multierror](https://github.com/hashicorp/go-multierror) - Go（golang）で複数エラーを1つのエラーとして表現するためのパッケージ
- [metaerr](https://github.com/quantumcycle/metaerr) - 異なるソースからメタデータを取得し、構造化されたエラーを生成するカスタムエラービルダーを構築するためのライブラリ
- [multierr](https://github.com/uber-go/multierr) - 複数エラーを1つのエラーとして表現するためのパッケのパッケージ
- [oops](https://github.com/samber/oops) - コンテキスト、スタックトレース、ソースフラグメントを用いたエラーハンドリング
- [tracerr](https://github.com/ztrue/tracerr) - Goのエラーにスタックトレースとソースフラグメントを追加

**[⬆ back to top関連](#contents)**

## ファイル処理 <a id="file-handling"></a>

_ファイル処理に関するGoライブラリ、ツール、または資料です。_

- [afero](https://github.com/spf13/afero) - Go向けのファイルシステム抽象化システム
- [afs](https://github.com/viant/afs) - Go向けの抽象ファイルストレージ（mem, scp, zip, tar, cloud: s3, gs）
- [baraka](https://github.com/xis/baraka) - HTTPファイルアップロードを簡単に処理するためのライブラリ
- [checksum](https://github.com/codingsince1985/checksum) - 大きなファイルに対してMD5、SHA256、SHA1、CRCまたはBLAKE2sなどのメッセージディジェストを計算
- [copy](https://github.com/otiai10/copy) - ディレクトリを再帰的にコピー
- [fastwalk](https://github.com/charlievieth/fastwalk) - 高速な並列ディレクトリ走査ライブラリ（ [fzf](https://github.com/junegunn/fzf) で使用）.
- [flop](https://github.com/homedepot/flop) - [GNU cp](https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html) と同等の機能を備えたファイル操作ライブラリ.
- [gdu](https://github.com/dundee/gdu) - コンソールインターフェース付きのディスク使用量分析ツール
- [go-csv-tag](https://github.com/artonge/go-csv-tag) - タグを使用してCSVファイルを読み込む
- [go-decent-copy](https://github.com/hugocarreira/go-decent-copy) - 人間が理解しやすいファイルのコピー
- [go-exiftool](https://github.com/barasher/go-exiftool) - ExifTool（ファイルからEXIF、IPTCなど多くのメタデータを抽出する有名なライブラリ）へのGoバインディング
- [go-gtfs](https://github.com/artonge/go-gtfs) - GoでGTFSファイルを読み込む
- [go-wkhtmltopdf](https://github.com/SebastiaanKlippert/go-wkhtmltopdf) - HTMLテンプレートをPDFファイルに変換するためのパッケージ
- [gofs](https://github.com/no-src/gofs) - マルチプラットフォーム対応のリアルタイムファイル同期ツール
- [gopdfrab](https://github.com/voidrab/gopdfrab) - Go における PDF/A プロセス
- [gulter](https://github.com/adelowo/gulter) - ファイルアップロードのすべてのニーズを自動的に処理できるシンプルな HTTP ミドルウェア
- [gut/yos](https://github.com/1set/gut) - ファイル、ディレクトリ、シンボリックリンクのコピー／移動／差分／リストなどのファイル操作に便利で信頼性の高いパッケージ
- [gxpdf](https://github.com/coregx/gxpdf) - Go 用の現代的なフルライフサイクル PDF ライブラリ — パース、テーブルの抽出、ドキュメントの生成および署名がゼロ CGO 依存で可能
- [higgs](https://github.com/dastoori/higgs) - ファイルおよびディレクトリの表示／非表示を隠すための、小さなクロスプラットフォーム Go ライブラリ
- [iso9660](https://github.com/kdomanski/iso9660) - ISO9660 ディスクイメージの読み書き用パッケージ
- [notify](https://github.com/rjeczalik/notify) - シンプルなAPIを備えたファイルシステムイベント通知ライブラリ、os/signal と類似
- [opc](https://github.com/qmuntal/opc) - Go 用のオープンパッケージコンベンション（OPC）ファイルの読み込み
- [parquet](https://github.com/parsyl/parquet) - [parquet](https://parquet.apache.org) ファイルの読み書きを行う.
- [pathtype](https://github.com/jonchun/pathtype) - パスを文字列ではなく独自の型として扱う
- [pdfcpu](https://github.com/pdfcpu/pdfcpu) - PDF プロセッサ
- [skywalker](https://github.com/dixonwille/skywalker) - ファイルシステムを簡単に並列で走査できるパッケージ
- [todotxt](https://github.com/1set/todotxt) - Gina Trapani の [_todo.txt_](http://todotxt.org/) ファイル用の Go ライブラリで、タスクリストのパースと操作をサポートする. [_todo.txt_ format](https://github.com/todotxt/todo.txt)
- [vfs](https://github.com/C2FO/vfs) - Go における複数のファイルシステム（os、S3、GCSなど）に適用可能なプラグイン型、拡張性があり、意見を反映したファイルシステム機能セット

**[⬆ back to top関連](#contents)**

## 金融 <a id="financial"></a>

_金融に関するGoライブラリ、ツール、または資料です。_

- [accounting](https://github.com/leekchan/accounting) - Go における貨幣および通貨フォーマット
- [ach](https://github.com/moov-io/ach) - 自動清算ハウス（ACH）ファイルの読み取り、書き込み、検証用パッケージ
- [bbgo](https://github.com/c9s/bbgo) - Go で書かれた暗号取引BOTフレームワーク。一般的な暗号取引所API、標準指標、バックテスト、多数の組み込み戦略を含む
- [cnn-fear-and-greed-parse](https://github.com/wildsurfer/cnn-fear-and-greed-parse) - CNNのFear & Greed Indexのクライアント。7つのコンポーネント指標と約1年分の日次データを含む
- [currency](https://github.com/bojanz/currency) - 通貨額の処理、通貨情報およびフォーマットを提供
- [currency](https://github.com/naughtygopher/currency) - 高パフォーマンスかつ正確な通貨計算パッケージ
- [dec128](https://github.com/jokruger/dec128) - 高パフォーマンスの128ビット固定小数点数
- [decimal](https://github.com/shopspring/decimal) - 任意精度の固定小数点数
- [decimal](https://github.com/aytechnet/decimal) - 高パフォーマンス 64 ビット小数で [shopspring/decimal](https://github.com/shopspring/decimal) および int64 と部分的に互換であり、Weight と Length を含む.
- [decimal](https://github.com/govalues/decimal) - 変更不可能な小数数値とpanicを起こさない算術演算
- [eu-vat-rates-data-go](https://github.com/vatnode/eu-vat-rates-data-go) - 45の欧州諸国における消費税率および消費税番号フォーマット。コンパイル時に埋め込まれ、毎日ヨーロッパ委員会のTEDBから更新
- [fpdecimal](https://github.com/nikolaydubina/fpdecimal) - 小さな固定小数点小数の高速かつ正確なシリアライズと算術演算
- [fpmoney](https://github.com/nikolaydubina/fpmoney) - 高速でシンプルなISO 4217準拠の固定小数点金額型。
- [go-finance](https://github.com/alpeb/go-finance) - 時間価値の金利（年金）、キャッシュフロー、金利変換、債券および減価算定に関する金融関数ライブラリ
- [go-finance](https://github.com/pieterclaerhout/go-finance) - 為替レートを取得し、VIESで消費税番号を検証し、IBAN銀行口座番号を検証するモジュール
- [go-money](https://github.com/rhymond/go-money) - FowlerのMoneyパターンの実装
- [go-nowpayments](https://github.com/matm/go-nowpayments) - crypto NOWPayments API向けライブラリ
- [gobl](https://github.com/invopop/gobl) - インボイスおよび請求書ドキュメントフレームワーク。JSON Schemaベース。税額計算と検証を自動化し、グローバルフォーマットへの変換ツールを提供
- [indicator](https://github.com/cinar/indicator) - 技術分析ライブラリで、金融指標、戦略、バックテストフレームワークを提供
- [ledger](https://github.com/formancehq/ledger) - プログラム可能な金融台帳。資金移動アプリケーションの基礎を提供
- [money](https://github.com/govalues/money) - 変更不可能な貨幣額と為替レートとpanicを起こさない算術演算
- [ofxgo](https://github.com/aclindsa/ofxgo) - OFXサーバーをクエリし、または応答をパース（例：コマンドラインクライアント）
- [orderbook](https://github.com/i25959341/orderbook) - Golangにおけるリミットオーダーブックのマッチングエンジン
- [payme](https://github.com/jovandeginste/payme) - SEPA決済用のQRコード生成（ASCIIおよびPNG）
- [paystack-sdk-go](https://github.com/samaasi/paystack-sdk-go) - Paystack API向けの包括的で依存関係なし、完全に型安全なGo SDK
- [swift](https://code.pfad.fr/swift/) - IBAN（国際銀行口座番号）のオフライン検証およびBIC（一部の国で）の取得
- [techan](https://github.com/sdcoffey/techan) - 高度な市場分析と取引戦略を備えた技術分析ライブラリ
- [ticker](https://github.com/achannarasappa/ticker) - 終端用株価ウォッチャーおよび株式保有状況トラッカー
- [transaction](https://github.com/claygod/transaction) - マルチスレッドモードで動作するアカウントの埋め込みトランザクションデータベース
- [udecimal](https://github.com/quagmt/udecimal) - 高パフォーマンス・高精度の金融用途向けゼロ割り当て固定小数点ライブラリ
- [vat](https://github.com/dannyvankooten/vat) - VAT番号の検証およびEUのVAT税率

**[⬆ back to top関連](#contents)**

## フォーム <a id="forms"></a>

_フォームに関するGoライブラリ、ツール、または資料です。_

- [bind](https://github.com/robfig/bind) - フォームデータを任意のGo値にバインド
- [checker](https://github.com/cinar/checker) - ルールを構造タグに定義または関数で直接指定してユーザー入力の検証を支援
- [conform](https://github.com/leebenson/conform) - ユーザー入力のチェックを維持。構造タグに基づいてデータをトリム、クリーンアップ、スクリーニング
- [form](https://github.com/go-playground/form) - url.ValuesをGo値にデコードし、Go値をurl.Valuesにエンコード。ダブル配列およびフルマップサポート
- [formam](https://github.com/monoculum/formam) - フォームの値を構造体にデコード
- [forms](https://github.com/albrow/forms) - マルチパートフォームおよびファイルをサポートする、フレームワークに依存しないフォーム/JSONデータのパースと検証用ライブラリ
- [gbind](https://github.com/bdjimmy/gbind) - 任意のGo値にデータをバインド。組み込みおよびカスタム表現バインディング機能を活用可能。データ検証をサポート
- [gorilla/csrf](https://github.com/gorilla/csrf) - GoウェブアプリケーションおよびサービスにおけるCSRF保護
- [httpin](https://github.com/ggicci/httpin) - HTTPリクエストをクエリ文字列、フォーム、HTTPヘッダーなどにデコードしてカスタム構造体に変換
- [nosurf](https://github.com/justinas/nosurf) - Go用のCSRF保護ミドルウェア
- [qs](https://github.com/sonh/qs) - Goモジュールによる構造体のURLクエリパラメータへのエンコード
- [queryparam](https://github.com/tomwright/queryparam) - `url.Values` を標準またはカスタム型の構造体値にデコードする.
- [roamer](https://github.com/slipros/roamer) - クッキー、ヘッダー、クエリパラメータ、パスパラメータ、ボディなどを構造体にバインドすることで、HTTPリクエストのパースに必要なボイラープレートコードを削減

**[⬆ back to top関連](#contents)**

## 関数型 <a id="functional"></a>

_関数型に関するGoライブラリ、ツール、または資料です。_

- [fp-go](https://github.com/repeale/fp-go) - Golang 1.18+のジェネリクスを活用した関数型プログラミングヘルパーのコレクション
- [fpGo](https://github.com/TeaEntityLab/fpGo) - Golangにおけるモナド、関数型プログラミング機能
- [fuego](https://github.com/seborama/fuego) - Goにおける関数型プログラミングの実験
- [FuncFrog](https://github.com/koss-null/FuncFrog) - ジェネリックスライスGo1.018+に対してマップ、フィルタ、リダクションなどのストリーム操作を提供する関数型ヘルパーライブラリ
- [g](https://github.com/enetx/g) - Goにおける関数型プログラミングフレームワーク
- [go-functional](https://github.com/BooleanCat/go-functional) - ジェネリクスを用いたGoにおける関数型プログラミング
- [go-underscore](https://github.com/tobyhede/go-underscore) - 便利なGo用ユーティリティのコレクション。
- [gofp](https://github.com/rbrahul/gofp) - Go言語向けのLodashのような強力なユーティリティライブラリ。
- [mo](https://github.com/samber/mo) - Go 1.18以降のジェネリクスに基づくモナドと人気FP抽象構造（Option、Result、Eitherなど）。
- [underscore](https://github.com/rjNemo/underscore) - Go 1.18以降向けの関数型プログラミングのヘルパー。
- [valor](https://github.com/phelmkamp/valor) - 値をオプションで含むジェネリックなオプションと結果型。

**[⬆ back to top関連](#contents)**

## ゲーム開発 <a id="game-development"></a>

_ゲーム開発に関するGoライブラリ、ツール、または資料です。_

- [Ark](https://github.com/mlange-42/ark) - Go向けのアーキタイプベースのエンティティ・コンポーネント・システム（ECS）。
- [Ebitengine](https://github.com/hajimehoshi/ebiten) - Goで書かれたシンプルな2Dゲームエンジン。
- [ecs](https://github.com/andygeiss/ecs) - Go言語でエンティティ・コンポーネント・システム（ECS）の概念に基づいた自作ゲームエンジンを構築。
- [engo](https://github.com/EngoEngine/engo) - EngoはGoで書かれたオープンソースの2Dゲームエンジンであり、エンティティ・コンポーネント・システム（E-CTS）のパラダイムを採用。
- [fantasyname](https://github.com/s0rg/fantasyname) - ファンタジー名生成器。
- [g3n](https://github.com/g3n/engine) - Goによる3Dゲームエンジン。
- [go-astar](https://github.com/beefsack/go-astar) - Go実装のA\*パス探索アルゴリズム。
- [go-sdl2](https://github.com/veandco/go-sdl2) - [Simple DirectMedia Layer](https://www.libsdl.org/) 用の Go バインディング.
- [go3d](https://github.com/ungerik/go3d) - Go向けのパフォーマンス重視の2D/3D数学パッケージ。
- [gogpu](https://github.com/gogpu/gogpu) - WebGPU に基づく GPU アプリケーションフレームワーク（ウィンドウ、入力、レンダリングを備える）— GPU コードの 480 行以上を約 20 行に簡略化し、CGO なし（GoGPU エコシステム： [gg](https://github.com/gogpu/gg), [ui](https://github.com/gogpu/ui), [wgpu](https://github.com/gogpu/wgpu), [naga](https://github.com/gogpu/naga)）.
- [gogpu/wgpu](https://github.com/gogpu/wgpu) - Vulkan、DX12、Metal バックエンドを備えた純 Go WebGPU 実装、CGO なし（ [GoGPU](https://github.com/gogpu) エコシステムの一部）.
- [GOKe](https://github.com/kjkrol/goke) - データ指向（DOD）でアーキタイプベースのECSエンジン。L1キャッシュに適合したチャンク型SoAレイアウトを採用し、予測可能なステップレスなメモリ成長とゼロアロケーション実行パスを実現。
- [gonet](https://github.com/xtaci/gonet) - Goで実装されたゲームサーバーのフレームワーク。
- [goworld](https://github.com/xiaonanln/goworld) - スケーラブルなゲームサーバーエンジンで、空間エンティティフレームワークとホットスワップ機能を備えている。
- [grid](https://github.com/s0rg/grid) - ジェネリックな2Dグリッドで、レーザー投射、シャドウ投射、パス探索を実現。
- [Leaf](https://github.com/name5566/leaf) - 軽量なゲームサーバーフレームワーク。
- [nano](https://github.com/lonng/nano) - 軽量かつ機能的で、高性能なGoベースのゲームサーバーフレームワーク。
- [Oak](https://github.com/oakmound/oak) - 純粋なGoによるゲームエンジン。
- [Pi](https://github.com/elgopher/pi) - 現代コンピュータ向けにレトロゲームを作成するためのゲームエンジン。Pico-8をインスピレーションとして、Ebitengineで駆動されている。
- [Pitaya](https://github.com/topfreegames/pitaya) - スケーラブルなゲームサーバーフレームワークで、クラスタリングサポートとiOS、Android、UnityなどへのクライアントライブラリをC SDKを通じて提供。
- [Pixel](https://github.com/gopxl/pixel) - Goで手作りされた2Dゲームライブラリ。
- [prototype](https://github.com/gonutz/prototype) - Windows/Linux/Macを対象としたクロスプラットフォーム（デスクトップゲーム開発用）の最小APIを用いたライブラリ。
- [raylib-go](https://github.com/gen2brain/raylib-go) - [raylib](https://www.raylib.com/) 用の Go バインディング、シンプルでゲームプログラミングを学ぶのに便利なライブラリ.
- [sceneCamera](https://github.com/donomii/sceneCamera) - 美術館、FPS、RTS、ステレオレンダリングモード向けのカメラ移動とビュー/投影行列。
- [termloop](https://github.com/JoelOtter/termloop) - Go上でTermboxをベースに構築されたテルミナルベースのゲームエンジン。
- [tile](https://github.com/kelindar/tile) - データ指向かつキャッシュに優しい2Dグリッドライブラリ（タイルマップ）で、パスファインディング、オブザーバー、インポート/エクスポートを含む。

**[⬆ back to top関連](#contents)**

## ジェネレーター <a id="generators"></a>

_ジェネレーターに関するGoライブラリ、ツール、または資料です。_

- [apispec](https://github.com/ehabterra/apispec) - Goコードから注釈なしでOpenAPI 3.1仕様を生成し、ブラウザUIで呼び出しグラフの設定・プレビュー・探索を行う。
- [convergen](https://github.com/reedom/convergen) - 豊富な型間コピーコード生成機能。
- [copygen](https://github.com/switchupcb/copygen) - Goの型に基づいて任意のコードを生成し、デフォルトでは反射なしに型間コンバーター（コピーコード）を生成。
- [generis](https://github.com/senselogic/GENERIS) - ジェネリクス、自由形式のマクロ、条件付きコンパイル、HTMLテンプレートを提供するコード生成ツール。
- [go-apispec](https://github.com/antst/go-apispec) - Goソースコードを静的解析してフレームワークを自動検出し、OpenAPI 3.1仕様を生成。
- [go-enum](https://github.com/abice/go-enum) - コードコメントからenumをコード生成。
- [go-enum-encoding](https://github.com/nikolaydubina/go-enum-encoding) - コードコメントからenumエンコーディングをコード生成。
- [go-linq](https://github.com/ahmetalpbalkan/go-linq) - Go向けの.NET LINQのようなクエリメソッド。
- [goderive](https://github.com/awalterschulze/goderive) - 入力型から関数を導出。
- [goverter](https://github.com/jmattheis/goverter) - インターフェースを定義することでコンバーターを生成。
- [GoWrap](https://github.com/hexdigest/gowrap) - Goインターフェース向けのテンプレートを用いたデコレータ生成。
- [interfaces](https://github.com/rjeczalik/interfaces) - インターフェース定義を生成するコマンドラインツール。
- [jennifer](https://github.com/dave/jennifer) - テンプレートなしで任意のGoコードを生成。
- [oapi-codegen](https://github.com/deepmap/oapi-codegen) - このパッケージは、OpenAPI 3.0 API 定義に基づいたサービス向けにGoのボイラープレートコードを生成するためのユーティリティセットを含んでいます
- [protoc-gen-httpgo](https://github.com/MUlt1mate/protoc-gen-httpgo) - protobufからHTTPサーバーとクライアントを生成
- [typeregistry](https://github.com/xiaoxin01/typeregistry) - 動的に型を作成するためのライブラリ

**[⬆ back to top関連](#contents)**

## 地理情報 <a id="geographic"></a>

_地理情報に関するGoライブラリ、ツール、または資料です。_

- [borders](https://github.com/kpfaulkner/borders) - 画像の境界を検出し、GIS操作用にGeoJSONに変換
- [geoos](https://github.com/spatial-go/geoos) - 空間データおよび幾何アルゴリズムを提供するライブラリ
- [geoserver](https://github.com/hishamkaram/geoserver) - geoserverはGeoServerインスタンスをGeoServer REST APIを介して操作するためのGoパッケージです
- [gismanager](https://github.com/hishamkaram/gismanager) - GISデータ（ベクターデータ）をPostGISおよびGeoserverに公開
- [godal](https://github.com/airbusgeo/godal) - GDAL用のGoラッパー
- [H3](https://github.com/uber/h3-go) - H3、階層的六角形空間インデックスシステムに対するGoバインディング
- [H3 GeoJSON](https://github.com/mmadfox/go-geojson2h3) - H3インデックスとGeoJSON間の変換ユーティリティ
- [H3GeoDist](https://github.com/mmadfox/go-h3geo-dist) - UberのH3geoセルを仮想ノードで配布
- [mbtileserver](https://github.com/consbio/mbtileserver) - mbtiles形式に保存されたマップタイルを扱うシンプルなGoベースサーバー
- [osm](https://github.com/paulmach/osm) - OpenStreetMapデータおよびAPIを読み書きし、操作するためのライブラリ
- [pbf](https://github.com/maguro/pbf) - OpenStreetMap PBFのgolangエンコーダ／デコーダ
- [S2 geojson](https://github.com/pantrif/s2-geojson) - GeoJSONをS2セルに変換し、マップ上でS2幾何機能を示す
- [S2 geometry](https://github.com/golang/geo) - GoにおけるS2幾何ライブラリ
- [simplefeatures](https://github.com/peterstace/simplefeatures) - simplesfeaturesは2次元幾何ライブラリで、幾何をモデル化するGo型およびそれらに作用するアルゴリズムを提供します
- [Tile38](https://github.com/tidwall/tile38) - 空間インデックスとリアルタイム地帯制御を備えた地理位置DB
- [Web-Mercator-Projection](https://github.com/jorelosorio/web-mercator-projection) A project to easily use and convert LonLat, Point and Tile to display info, markers, etc, in a map using the Web Mercator Projection.
- [WGS84](https://github.com/wroge/wgs84) - 座標変換および変換（ETRS89、OSGB3、NAD83、RGF93、Web Mercator、UTM）を行うライブラリ

**[⬆ back to top関連](#contents)**

## Goコンパイラー <a id="go-compilers"></a>

_Goコンパイラーに関するGoライブラリ、ツール、または資料です。_

- [bunster](https://github.com/yassinebenaid/bunster) - シェルスクリプトをGoにコンパイル
- [c4go](https://github.com/Konstantin8105/c4go) - C言語をGo言語に変換する
- [cxgo](https://github.com/gotranspile/cxgo) - C言語をGo言語に変換する
- [esp32](https://github.com/andygeiss/esp32-transpiler) - GoをArduino言語に変換する
- [f4go](https://github.com/Konstantin8105/f4go) - FORTRAN 77言語をGo言語に変換する
- [go2hx](https://github.com/go2hx/go2hx) - GoからHaxeに、JavaScript/C++/Java/C#にコンパイルする
- [gopherjs](https://github.com/gopherjs/gopherjs) - GoからJavaScriptにコンパイルする

**[⬆ back to top関連](#contents)**

## ゴルーチン <a id="goroutines"></a>

_ゴルーチンに関するGoライブラリ、ツール、または資料です。_

- [anchor](https://github.com/kyuff/anchor) - マイクロサービスアーキテクチャにおけるコンポーネントライフサイクルを管理するライブラリ
- [ants](https://github.com/panjf2000/ants) - Goにおける高性能かつ低コストのgoroutineプール
- [artifex](https://github.com/borderstech/artifex) - Golang用のシンプルなメモリ内ジョブキュー（ワーカーベースのディスパッチ）
- [async](https://github.com/yaitoo/async) - Go向けの非同期タスクパッケージ（async/awaitスタイル）
- [async](https://github.com/reugn/async) - Go向けの代替シンクライブラリ（Future、Promise、ロック）
- [async](https://github.com/studiosol/async) - panicが発生した場合でも安全に関数を非同期で実行し、回復できる仕組み
- [async-job](https://github.com/lab210-dev/async-job) - AsyncJobは、コードが軽量で明確で高速な非同期キュージョブマネージャー
- [autopool](https://github.com/AshvinBambhaniya/autopool) - 設定不要、自動スケーリング可能なGo用ワーカーポール（優先順位を考慮したスケジューリング）
- [breaker](https://github.com/kamilsk/breaker) - 実行フローを中断可能にする柔軟なメカニズム
- [channelify](https://github.com/ddelizia/channelify) - 関数をチャンネルを返すように変換し、簡単で強力な並列処理を実現
- [conc](https://github.com/sourcegraph/conc) - `conc` は Go での構造化された並列処理のツールボックスであり、一般的なタスクをより簡単かつ安全に実行できる。
- [concurrency-limiter](https://github.com/vivek-ng/concurrency-limiter) - タイムアウト、動的優先度、goroutineのコンテキストキャンセルをサポートするコンカレンシー制限器
- [conexec](https://github.com/ITcathyh/conexec) - 関数を効率的かつ安全に並列実行できるためのコンカレンシーツールキット。全体のタイムアウトを指定してブロッキングを回避し、goroutineプールを活用して効率を高める。
- [cyclicbarrier](https://github.com/marusama/cyclicbarrier) - Go向けのサイクルバリア
- [execpool](https://github.com/hexdigest/execpool) - exec.Cmdを基盤としたプールで、必要なときに標準入出力にstdinとstdoutを接続し、指定された数のプロセスを事前に起動する。FastCGIまたはApache Prefork MPMに非常に似ているが、任意のコマンドに対応する。
- [flowmatic](https://github.com/carlmjohnson/flowmatic) - 構造化された並列処理を簡単に実現
- [go-accumulator](https://github.com/nar10z/go-accumulator) - イベントの蓄積とその後の処理を解決
- [go-actor](https://github.com/vladopajic/go-actor) - アクターモデルを使って並列プログラムを書くための小さなライブラリ
- [go-floc](https://github.com/workanator/go-floc) - goroutineを簡単にオーケストレーション
- [go-flow](https://github.com/kamildrazkiewicz/go-flow) - goroutineの実行順序を制御
- [go-tools/multithreading](https://github.com/nikhilsaraf/go-tools) - この軽量なライブラリを使って、シンプルなAPIでgoroutineのプールを管理
- [go-trylock](https://github.com/subchen/go-trylock) - Golangの読み書きロックにTryLockをサポート
- [go-waitgroup](https://github.com/pieterclaerhout/go-waitgroup) - `sync.WaitGroup`と、エラーハンドリングおよび並列制御をサポートします。
- [go-workerpool](https://github.com/zenthangplus/go-workerpool) - Javaのスレッドプールをインスピレーションとして、Go WorkerPoolは重いGoのルーチンを制御することを目的としている
- [goccm](https://github.com/zenthangplus/goccm) - Goの並列処理マネージャーパッケージは、同時に実行できるgoroutineの数を制限
- [gohive](https://github.com/loveleshsharma/gohive) - 高パフォーマンスで使いやすいGoroutineプール
- [gollback](https://github.com/vardius/gollback) - 非同期のシンプルな関数ユーティリティ、クロージャーおよびコールバックの実行管理
- [gowl](https://github.com/hamed-yousefi/gowl) - Gowlはプロセス管理とプロセス監視ツールを一括で提供。無限のワーカープールにより、プールおよびプロセスの制御と状態監視が可能
- [goworker](https://github.com/benmanns/goworker) - goworkerはGoベースのバックグラウンドワーカー
- [gowp](https://github.com/xxjwxc/gowp) - gowpは並列処理を制限するgoroutineプール
- [gpool](https://github.com/Sherifabdlnaby/gpool) - サイズ変更可能なコンテキスト認識型goroutineプールを管理し、並列処理を制御
- [grpool](https://github.com/ivpusic/grpool) - 軽量なGoroutineプール
- [hands](https://github.com/duanckham/hands) - 複数のgoroutineの実行および返却戦略を制御するプロセス制御ツール
- [Hunch](https://github.com/AaronJan/Hunch) - Hunchは、異步フロー制御をより直感的にするような関数を提供しています。`All`、`First`、`Retry`、`Waterfall`など。
- [kyoo](https://github.com/dirkaholic/kyoo) - 無限のジョブキューと並列ワーカープールを提供
- [neilotoole/errgroup](https://github.com/neilotoole/errgroup) - `sync/errgroup`へのdrop-in代替品。N個のワーカーGoroutineのプールに限定されている。
- [nursery](https://github.com/arunsworld/nursery) - Goにおける構造化された並列処理
- [oversight](https://pkg.go.dev/cirello.io/oversight) - OversightはErlangの監視ツリーの完全な実装
- [parallel-fn](https://github.com/rafaeljesus/parallel-fn) - 並列で関数を実行する
- [pond](https://github.com/alitto/pond) - Goで書かれたシンプルかつ高性能なgoroutineワーカーポール
- [pool](https://github.com/go-playground/pool) - 制限された消費者goroutineまたは無制限のgoroutineポールによるgoroutineの扱いとキャンセルの容易化
- [powerlock](https://github.com/donomii/powerlock) - コンテキストキャンセルに対応した名前付きFIFOミューテックス、制限された待ちキュー、ウェルドッグ診断、pprofプロファイル、Prometheusメトリクス
- [rill](https://github.com/destel/rill) - Goによるクリーンで組み立てやすい、チャンネルベースの並列処理ツールキット
- [routine](https://github.com/timandy/routine) - `routine`はgoライブラリ用の`ThreadLocal`です。それは非競合かつ高性能の`goroutine`コンテキストアクセスインターフェースを封じ込み、使いやすく提供しており、コルーチンのコンテキスト情報をより自然にアクセスできるようにします。
- [routine](https://github.com/x-mod/routine) - コンテキストによるgo routine制御、サポート：メイン、Go、プールおよびいくつかのユーティリティエクスィクタ
- [semaphore](https://github.com/kamilsk/semaphore) - チャンネルとコンテキストに基づくロック/アンロック操作のタイムアウトをもつセマフォパターンの実装
- [semaphore](https://github.com/marusama/semaphore) - CAS（Compare-and-Swap）に基づく高速可変セマフォ実装（チャンネルベースのセマフォ実装より速い）
- [stl](https://github.com/ssgreg/stl) - ソフトウェアトランザクショナルロック（ソフトウェアトランザクショナルメモリ（STM）並列制御機構に基づく）
- [threadpool](https://github.com/shettyh/threadpool) - Golangによるスレッドプール実装
- [tunny](https://github.com/Jeffail/tunny) - Golang用のgoroutineポール
- [worker-pool](https://github.com/vardius/worker-pool) - goworkerはGoによるシンプルなアシンクワーカーポール
- [workerpool](https://github.com/gammazero/workerpool) - タスクの実行並列性を制限する、タスクのキュー数を制限しないgoroutineポール

**[⬆ back to top関連](#contents)**

## GUI <a id="gui"></a>

_GUIに関するGoライブラリ、ツール、または資料です。_

_GUIに関するGoライブラリ、ツール、または資料です。_

- [app](https://github.com/murlokswarm/app) - GO、HTMLおよびCSSでアプリケーションを作成できるパッケージ。サポート：macOS、Windows（進行中）
- [cimgui-go](https://github.com/AllenDang/cimgui-go) - [Dear ImGui](https://github.com/ocornut/imgui)に対して[cimgui](https://github.com/cimgui/cimgui)を用いて自動生成されたGoのラッパー。
- [Cogent Core](https://github.com/cogentcore/core) - macOS、Windows、Linux、iOS、Android、ウェブ上で実行可能な2次元および3次元アプリケーションを構築するためのフレームワーク
- [DarwinKit](https://github.com/progrium/darwinkit) - Goを使ってネイティブなmacOSアプリケーションを構築する
- [energy](https://github.com/energye/energy) - LCL（ネイティブシステムUIコントロールライブラリ）およびCEF（Chromium Embedded Framework）に基づくクロスプラットフォーム（Windows／macOS／Linux）
- [fyne](https://github.com/fyne-io/fyne) - Material Designに基づくGo用のクロスプラットフォームネイティブGUI。サポート：Linux、macOS、Windows、BSD、iOSおよびAndroid
- [gio](https://gioui.org) - GioはGoでクロスプラットフォームの即時モードGUIを書くためのライブラリ。Gioはすべての主要プラットフォーム（Linux、macOS、Windows、Android、iOS、FreeBSD、OpenBSDおよびWebAssembly）をサポートしています
- [go-gtk](https://mattn.github.io/go-gtk/) - GTKのGoバインディング
- [go-sciter](https://github.com/sciter-sdk/go-sciter) - スクリータのGoバインディング：現代のデスクトップUI開発向け埋め込みHTML/CSS/スクリプトエンジン。マルチプラットフォーム対応。
- [Goey](https://bitbucket.org/rj/goey/src/master/) - Windows / Linux / Mac向けのクロスプラットフォームUIツールキット集約。GTK、Cocoa、Windows API
- [gogpu/ui](https://github.com/gogpu/ui) - GPU加速GUIツールキット。22のウィジェット、3つのデザインシステム（Material、Fluent、Cupertino）、反応型シグナル、およびゼロCGO（[GoGPU](https://github.com/gogpu)エコシステムの一部）。
- [goradd/html5tag](https://github.com/goradd/html5tag) - HTML5タグ出力用のライブラリ。
- [gotk3](https://github.com/gotk3/gotk3) - GTK3のGoバインディング。
- [gowd](https://github.com/dtylman/gowd) - GO、HTML、CSSおよびNW.jsを用いた迅速かつシンプルなデスクトップUI開発。マルチプラットフォーム対応。
- [proton](https://github.com/CzaxStudio/proton) - Cgoに依存しない純Goの即時モードGUIフレームワーク（Gioに基づく）。
- [qt](https://github.com/therecipe/qt) - Go向けのQtバインディング（Windows / macOS / Linux / Android / iOS / Sailfish OS / Raspberry Pi対応）。
- [Spot](https://github.com/roblillack/spot) - 反応型かつマルチプラットフォーム対応のデスクトップGUIツールキット。
- [ui](https://github.com/andlabs/ui) - プラットフォーム固有のGUIライブラリ（Go対応）。マルチプラットフォーム対応。
- [unison](https://github.com/richardwilkes/unison) - Goデスクトップアプリケーション向けの一元的なグラフィカルユーザー体験ツールキット。macOS、Windows、Linuxが対応。
- [Wails](https://wails.io) - Mac、Windows、Linuxのデスクトップアプリケーションで、OS内蔵のHTMLレンダラーを使用したHTML UI。
- [walk](https://github.com/lxn/walk) - Go向けのWindowsアプリケーションライブラリキット。
- [webview](https://github.com/zserge/webview) - マルチプラットフォーム対応のウェブビューウィンドウ。シンプルな両方向JavaScriptバインディング（Windows / macOS / Linux）。

_GUIに関するGoライブラリ、ツール、または資料です。_

- [AppIndicator Go](https://github.com/gopherlibs/appindicator) - libappindicator3 CライブラリのGoバインディング。
- [gogpu/systray](https://github.com/gogpu/systray) - Windows、macOS、Linux向けの純Goシステムトレイライブラリ（ゼロCGO、[GoGPU](https://github.com/gogpu)エコシステムの一部）。
- [gosx-notifier](https://github.com/deckarep/gosx-notifier) - Go向けのOSXデスクトップ通知ライブラリ。
- [mac-activity-tracker](https://github.com/prashantgupta24/activity-tracker) - OSXで、あなたのマシン上の任意の（プラグイン可能な）活動を通知するためのライブラリ。
- [mac-sleep-notifier](https://github.com/prashantgupta24/mac-sleep-notifier) - GoでOSXの睡眠/起動通知。
- [robotgo](https://github.com/go-vgo/robotgo) - GoによるクロスプラットフォームGUIシステム自動化。マウス、キーボードおよびその他の操作を制御。
- [systray](https://github.com/getlantern/systray) - 通知領域にアイコンとメニューを配置するためのクロスプラットフォームGoライブラリ
- [trayhost](https://github.com/shurcooL/trayhost) - ホストオペレーティングシステムのタスクバーにアイコンを配置するためのクロスプラットフォームGoライブラリ
- [zenity](https://github.com/ncruces/zenity) - シンプルなダイアログを作成し、ユーザーとグラフィカルにインタラクションするためのクロスプラットフォームGoライブラリおよびCLI

**[⬆ back to top関連](#contents)**

## ハードウェア <a id="hardware"></a>

_ハードウェアに関するGoライブラリ、ツール、または資料です。_

- [arduino-cli](https://github.com/arduino/arduino-cli) - 公式Arduino CLIおよびライブラリ。独立して実行可能であり、大きなGoプロジェクトに統合することもできる
- [emgo](https://github.com/ziutek/emgo) - エムベディッドシステム（例：STM32 MCU）向けのGo風言語
- [ghw](https://github.com/jaypipes/ghw) - Golangによるハードウェア発見／検査ライブラリ
- [go-osc](https://github.com/hypebeast/go-osc) - Go向けのオープンサウンドコントロール（OSC）バインディング
- [go-rpio](https://github.com/stianeikeland/go-rpio) - Go向けのGPIOライブラリでcgoを必要としない
- [goroslib](https://github.com/aler9/goroslib) - ロボットオペレーティングシステム（ROS）向けのGoライブラリ
- [joystick](https://github.com/0xcafed00d/joystick) - 接続されたジョイスティックの状態を読み取るためのポールドAPI
- [moody](https://github.com/dinakars777/moody) - macOS向けのハードウェアイベントパーソナリティデーモン。USB、充電器、蓋、その他ハードウェアイベントを監視し、カスタマイズ可能なパーソナリティで反応する
- [sysinfo](https://github.com/zcalusic/sysinfo) - 純GoライブラリでLinuxOS／カーネル／ハードウェアシステム情報を提供

**[⬆ back to top関連](#contents)**

## 画像 <a id="images"></a>

_画像に関するGoライブラリ、ツール、または資料です。_

- [bild](https://github.com/anthonynsimon/bild) - 純Goによる画像処理アルゴリズムのコレクション
- [bimg](https://github.com/h2non/bimg) - libvipsを使用した高速かつ効率的な画像処理を実現する小さなパッケージ
- [cameron](https://github.com/aofei/cameron) - Go向けのアバター生成ライブラリ
- [canvas](https://github.com/tdewolff/canvas) - ベクターグラフィックスをPDF、SVGまたはレターバイア画像に変換
- [color-extractor](https://github.com/marekm4/color-extractor) - 外部依存なしで主な色を抽出するライブラリ
- [darkroom](https://github.com/gojek/darkroom) - 変更可能なストレージバックエンドと画像処理エンジンを備えた画像プロキシで、高速性と耐性に焦点を当てる
- [eagle-image-api](https://github.com/nicobistolfi/eagle-image-api) - libvipsを使用した画像最適化および変換API。AWS LambdaおよびCloudFrontにデプロイ可能
- [geopattern](https://github.com/pravj/geopattern) - 文字列から美しい生成型画像パターンを作成する
- [gg](https://github.com/fogleman/gg) - Go で純粋に実装された 2D レンダリング
- [gift](https://github.com/disintegration/gift) - 画像処理フィルターを含むパッケージ
- [gltf](https://github.com/qmuntal/gltf) - 効率的かつ頑健な glTF 2.0 レーダー、ライタ、バリデーター
- [go-cairo](https://github.com/ungerik/go-cairo) - Cairo グラフィックスライブラリへの Go バインディング
- [go-gd](https://github.com/bolknote/go-gd) - GD ライブラリへの Go バインディング
- [go-nude](https://github.com/koyachi/go-nude) - Go による裸の検出
- [go-qrcode](https://github.com/yeqown/go-qrcode) - カスタマイズ可能なスタイルで QR コードを生成可能（色、ブロックサイズ、形状、アイコンの調整を可能）
- [go-webcolors](https://github.com/jyotiska/go-webcolors) - Python の webcolors ライブラリを Go に移植したライブラリ
- [go-webp](https://github.com/kolesa-team/go-webp) - libwebp を使用してウェブP画像をエンコード・デコードするライブラリ
- [gocv](https://github.com/hybridgroup/gocv) - OpenCV 3.3+ を使用した Go によるコンピュータビジョンパッケージ
- [gogpu/gg](https://github.com/gogpu/gg) - キャンバスのようなAPIで実行されるGPU加速2D描画、ゼロCGO（[GoGPU](https://github.com/gogpu)純Goグラフィックスエコシステムの一部）。
- [goimagehash](https://github.com/corona10/goimagehash) - Go による視覚的ハッシュパッケージ
- [goimghdr](https://github.com/corona10/goimghdr) - imghdr モジュールは Go でファイルに含まれる画像の種類を決定
- [govatar](https://github.com/o1egl/govatar) - ユーモアのあるアバターを生成するライブラリおよびコマンドツール
- [govips](https://github.com/davidbyttow/govips) - Go 用の高速画像処理およびリサイズライブラリ
- [gowitness](https://github.com/sensepost/gowitness) - コマンドライン上で Go とヘッドレス Chrome を使ってウェブページをスクリーンショット
- [gridder](https://github.com/shomali11/gridder) - グリッドベースの 2D グラフィックスライブラリ
- [image2ascii](https://github.com/qeesung/image2ascii) - 画像を ASCII に変換
- [imagick](https://github.com/gographics/imagick) - ImageMagick の MagickWand C API への Go バインディング
- [imaginary](https://github.com/h2non/imaginary) - 画像リサイズ用の高速でシンプルな HTTP ミクロサービス
- [imaging](https://github.com/disintegration/imaging) - シンプルな Go 画像処理パッケージ
- [imagor](https://github.com/cshum/imagor) - libvipsを使用した高速かつ安全な画像処理サーバーとGoライブラリ
- [img](https://github.com/hawx/img) - 画像操作ツールの選定
- [ln](https://github.com/fogleman/ln) - Goでの3D線描レンダリング
- [mergi](https://github.com/noelyahan/mergi) - 画像操作ツールおよびGoライブラリ（マージ、カット、サイズ変更、ウォーターマーク、アニメーション）
- [mort](https://github.com/aldor007/mort) - Goで書かれたストレージおよび画像処理サーバー
- [mpo](https://github.com/donatj/mpo) - MPO 3Dフォト用のデコーダおよび変換ツール
- [nativewebp](https://github.com/HugoSmits86/nativewebp) - 外部依存なしのGo本体WebPエンコーダー
- [picfit](https://github.com/thoas/picfit) - Goで書かれた画像サイズ変更サーバー
- [pt](https://github.com/fogleman/pt) - Goで書かれたパストレイシングエンジン
- [scout](https://github.com/jonoton/scout) - ScoutはDIYビデオセキュリティ向けのスタンドアローンオープンソースソフトウェアソリューション
- [smartcrop](https://github.com/muesli/smartcrop) - 任意の画像およびカットサイズに対して良いカットを検出
- [steganography](https://github.com/auyer/steganography) - LSBストーマグラフィー用の純Goライブラリ
- [stegify](https://github.com/DimitarPetrov/stegify) - LSBストーマグラフィー用のGoツールで、画像内に任意のファイルを隠すことができる
- [svgo](https://github.com/ajstarks/svgo) - SVG生成用のGo言語ライブラリ
- [transformimgs](https://github.com/Pixboost/transformimgs) - Transformimgsは、次世代フォーマットを使用してウェブ向けに画像をサイズ変更および最適化する
- [webp-server](https://github.com/mehdipourfar/webp-server) - シンプルかつ最小限の画像サーバーで、画像のストレージ、サイズ変更、変換、キャッシュを実現

**[⬆ back to top関連](#contents)**

## IoT（モノのインターネット） <a id="iot-internet-of-things"></a>

_IoT（モノのインターネット）に関するGoライブラリ、ツール、または資料です。_

- [connectordb](https://github.com/connectordb/connectordb) - 量化された自己とIoT向けオープンソースプラットフォーム
- [devices](https://github.com/goiot/devices) - IoTデバイス向けのライブラリセット、x/exp/io向けの実験的実装
- [ekuiper](https://github.com/lf-edge/ekuiper) - IoTエッジ向けの軽量データストリーム処理エンジン
- [eywa](https://github.com/xcodersun/eywa) - Project Eywaは、接続されたデバイスを追跡する接続管理器である
- [flogo](https://github.com/tibcosoftware/flogo) - プロジェクトFlogoは、IoTエッジアプリケーションおよび統合向けのオープンソースフレームワークです。
- [gatt](https://github.com/paypal/gatt) - Gattは、Bluetooth Low Energyの周辺装置を構築するためのGoパッケージです。
- [gobot](https://github.com/hybridgroup/gobot/) - Gobotは、ロボティクス、物理計算、そしてインターネット・オブ・シングス向けのフレームワークです。
- [huego](https://github.com/amimof/huego) - Go向けの広範なPhilips Hueクライアントライブラリです。
- [iot](https://github.com/vaelen/iot/) - IoTは、Google IoT Coreデバイスを実装するためのシンプルなフレームワークです。
- [periph](https://periph.io/) - 周辺装置I/Oを、低レベルのボード機能とインターフェースするためのもの。
- [rulego](https://github.com/rulego/rulego) - RuleGoは、IoTエッジ向けの軽量かつ高性能、埋め込み型、オーガナイズ可能なコンポーネントベースのルールエンジンです。
- [sensorbee](https://github.com/sensorbee/sensorbee) - IoT向けの軽量ストリーム処理エンジンです。
- [shifu](https://github.com/Edgenesis/shifu) - KubernetesネイティブのIoT開発フレームワークです。
- [smart-home](https://github.com/e154/smart-home) - IoT自動化向けのソフトウェアパッケージです。

**[⬆ back to top関連](#contents)**

## ジョブスケジューラー <a id="job-scheduler"></a>

_ジョブスケジューラーに関するGoライブラリ、ツール、または資料です。_

- [cdule](https://github.com/deepaksinghvi/cdule) - データベースサポートを備えたジョブスケジューラライブラリ
- [cheek](https://github.com/bart6114/cheek) - シンプルなcrontabのようなスケジューラで、ジョブスケジューリングにKISSアプローチを提供することを目指しています。
- [clockwerk](https://github.com/onatm/clockwerk) - シンプルでフラットな構文を使用して周期ジョブをスケジュールするためのGoパッケージ。
- [cronticker](https://github.com/krayzpipes/cronticker) - クロントークのスケジュールをサポートするタイッカー実装。
- [go-cron](https://github.com/rk/go-cron) - Go向けのシンプルなクロントライブラリで、1秒から1年間の特定の日時まで、クロージャーや関数を変動する間隔で実行可能です。主にウェブアプリケーションおよび長期間実行するデーモン向けです。
- [go-cron](https://github.com/netresearch/go-cron) - 実行時スケジュール更新、各項目のコンテキスト、リソース性ミドルウェア（リトライ、回路ブレーカー、レート制限）、観測性ハンドルを備えたクロントークジョブスケジューラ。robfig/cronの継承者です。
- [go-job](https://github.com/cybergarage/go-job) - Go向けの柔軟で拡張可能なジョブスケジューリングおよび実行ライブラリです。
- [go-quartz](https://github.com/reugn/go-quartz) - Go向けのシンプルかつ依存関係のないスケジューリングライブラリです。
- [go-scheduler](https://github.com/pardnchiu/go-scheduler) - 標準クロントーク表現、カスタムデシペイター、間隔、タスク依存性をサポートするジョブスケジューラです。
- [gocron](https://github.com/go-co-op/gocron) - Goのジョブスケジューリングが簡単でスムーズです。これは[jasonlvhit/gocron](https://github.com/jasonlvhit/gocron)の積極的に維持されているフォークです。
- [goflow](https://github.com/fieldryand/goflow) - シンプルながら強力なDAGスケジューラおよびダッシュボードです。
- [gron](https://github.com/roylee0704/gron) - タイムベースのタスクをシンプルなGo APIで定義し、Gronのスケジューラがそれらを適切に実行します。
- [gronx](https://github.com/adhocore/gronx) - Crontab形式のタスクリストをパースし、タスクを実行するランナーとデーモンを提供します。
- [JobRunner](https://github.com/bamzi/jobrunner) - ジョブキューとリアルタイムモニタリングが組み込まれた、スマートかつ機能豊富なクロントークジョブスケジューラ。
- [leprechaun](https://github.com/kilgaloon/leprechaun) - ウェブ훅、クロントーク、クラシックスケジューリングをサポートするジョブスケジューラ。
- [ofelia](https://github.com/netresearch/ofelia) - Docker用のジョブスケジューラ（Docker用のcrontab）；mcuadros/ofeliaのフォークで、Web UI、ジョブの依存関係、リトライ、ジョブの永続化を追加。
- [pending](https://github.com/kahoon/pending) - キャンセル、順調なシャットダウン、オプションの並列制限をサポートするIDベースのデバウンスされたタスクスケジューラ（遅延タスク用）。
- [sched](https://github.com/romshark/sched) - タイムを高速に進める能力を持つジョブスケジューラ。
- [scheduler](https://github.com/carlescere/scheduler) - クロントークジョブのスケジューリングを簡単に行う。
- [scheduler](https://github.com/yuseferi/scheduler) - Go本体の分散ジョブスケジューラ。遅延タスク、バッチ処理のRedis連携、リトライ、リースベースの回復、バージョン付きキュー分区を備えている。
- [tasks](https://github.com/madflojo/tasks) - Goで繰り返しタスクを処理するためのシンプルなプロセス内スケジューラ。
- [tickstem/cron](https://github.com/tickstem/cron) - HTTPクロントークジョブのスケジューリング用のGoクライアント。実行履歴、失敗アラート、テストハンドラでライブ認証なしで使用できるtsk-localを提供。
- [tickstem/heartbeat](https://github.com/tickstem/heartbeat) - デッドマンスイッチのハートビートモニタリング用のGoクライアント：各ジョブ実行後にURLにpingし、pingが届かなくなるとメールでアラートを受信。

**[⬆ back to top関連](#contents)**

## JSON <a id="json"></a>

_JSONに関するGoライブラリ、ツール、または資料です。_

- [ajson](https://github.com/spyzhov/ajson) - Go用の抽象JSONとJSONPathサポート。
- [ask](https://github.com/simonnilsson/ask) - マップやスライス内のネストされた値へのアクセスを簡単に行う。encoding/jsonや他の「Unmarshal」をGoデータ型に変換するパッケージと組み合わせて使用可能。
- [dynjson](https://github.com/cocoonspace/dynjson) - 動的API用のカスタムJSONフォーマットを提供。
- [ej](https://github.com/lucassscaravelli/ej) - 異なるソースからJSONを簡潔に書く・読む。
- [epoch](https://github.com/vtopc/epoch) - JSONでUnixタイムスタンプ/エポックをGoのtime.Time型に変換・変換するためのプリミティブを含む。
- [fastjson](https://github.com/valyala/fastjson) - カスタム構造体、コード生成、リフレクションを使わない、Go向けの高速JSONパーサー兼バリデーター。
- [gabs](https://github.com/Jeffail/gabs) - Goで未知または動的なJSONを解析、作成、編集するためのライブラリ。
- [gjo](https://github.com/skanehira/gjo) - JSONオブジェクトを作成するための小さなユーティリティ。
- [GJSON](https://github.com/tidwall/gjson) - 1行のコードでJSONの値を取得
- [go-jsonerror](https://github.com/ddymko/go-jsonerror) - Go-JsonErrorは、JsonApi仕様に従ったJSONレスポンスエラーを簡単に作成できるようにするためのパッケージです
- [go-respond](https://github.com/nicklaw5/go-respond) - 一般的なHTTP JSONレスポンスを処理するためのGoパッケージ
- [gojmapr](https://github.com/limiu82214/gojmapr) - JSONパスを使って複雑なJSONからシンプルな構造体を取得
- [gojq](https://github.com/elgs/gojq) - GolangにおけるJSONクエリ
- [gojson](https://github.com/ChimeraCoder/gojson) - 例JSONからGo（golang）構造体定義を自動生成
- [htmljson](https://github.com/nikolaydubina/htmljson) - GoでJSONをHTMLに豊かにレンダリング
- [JayDiff](https://github.com/yazgazan/jaydiff) - Goで書かれたJSON差分ユーティリティ
- [jettison](https://github.com/wI2L/jettison) - Go向け高速で柔軟なJSONエンコーダー
- [jscan](https://github.com/romshark/jscan) - 高パフォーマンスのゼロ割り当てJSONイテレーター
- [JSON-to-Go](https://mholt.github.io/json-to-go/) - JSONをGo構造体に変換
- [JSON-to-Proto](https://json-to-proto.github.io/) - JSONをProtobufにオンライン変換
- [json2go](https://github.com/m-zajac/json2go) - 高度なJSONからGo構造体変換。複数のJSONドキュメントをパースし、すべてに合う構造体を作成できるパッケージを提供
- [jsonapi-errors](https://github.com/AmuzaTkts/jsonapi-errors) - JSON APIエラー参照に基づいたGoバインディング
- [jsoncolor](https://github.com/neilotoole/jsoncolor) - `encoding/json`の置き換えとして、色付きJSONを出力するツール
- [jsondiff](https://github.com/wI2L/jsondiff) - RFC6902（JSON Patch）に基づいたGo用JSON差分ライブラリ
- [jsonf](https://github.com/miolini/jsonf) - ハイライト表示と構造体クエリによるJSONのフォーマット化ツール
- [jsongo](https://github.com/ricardolonga/jsongo) - JSONオブジェクトを作成しやすくするフロントエンドAPI
- [jsonhal](https://github.com/RichardKnop/jsonhal) - カスタム構造体をHAL形式のJSONレスポンスにマーシャルできるシンプルなGoパッケージ
- [jsonhandlers](https://github.com/abusomani/jsonhandlers) - さまざまなソースからJSONを簡単に読み書きできるシンプルなJSONライブラリ
- [jsonic](https://github.com/sinhashubham95/jsonic) - JSONを構造体を定義せずに扱い、クエリするためのユーティリティ。
- [jsonvalue](https://github.com/Andrew-M-C/go.jsonvalue) - 構造化されていないJSONデータに最適化された高速で使いやすいライブラリ。`encoding/json`を置き換える。
- [jzon](https://github.com/zerosnake0/jzon) - 標準API/動作と互換性を持つJSONライブラリ。
- [kazaam](https://github.com/Qntfy/kazaam) - JSONドキュメントの任意の変換に使えるAPI。
- [mapslice-json](https://github.com/mickep76/mapslice-json) - GoのマップスライスでJSONのマップを順序的にマーシャル/アンマーシャルできる。
- [marshmallow](https://github.com/PerimeterX/marshmallow) - 柔軟な使用ケースに最適なパフォーマンスのJSONアンマーシャル。
- [mp](https://github.com/sanbornm/mp) - シンプルなCLIメールパーサー。現在はstdinを読み取りJSONを出力する。
- [OjG](https://github.com/ohler55/ojg) - Go用の最適化されたJSONは、パフォーマンスの高いパーサーであり、JSONPathを含むさまざまなJSONツールを備えている。
- [omg.jsonparser](https://github.com/dedalqq/omg.jsonparser) - 条件による検証をgolang構造体フィールドタグで行うシンプルなJSONパーサー。
- [silentjson](https://github.com/GenshIv/silentjson) - AVX2 SIMD指令を活用したゼロ割り当てJSON境界スキャナとスプリッター。
- [SJSON](https://github.com/tidwall/sjson) - 1行のコードでJSONの値を設定できる。
- [ujson](https://github.com/olvrng/ujson) - 構造化されていないJSONに対応する高速かつ最小限のJSONパーサーとトランスフォーマー。
- [vjson](https://github.com/miladibra10/vjson) - JSONオブジェクトの検証に、フлюイントAPIでJSONスキーマを宣言するGoパッケージ。

**[⬆ back to top関連](#contents)**

## ロギング <a id="logging"></a>

_ロギングに関するGoライブラリ、ツール、または資料です。_

- [caarlos0/log](https://github.com/caarlos0/log) - カラフルなCLIログ出力。
- [distillog](https://github.com/amoghe/distillog) - 簡潔なレベル別ログ（stdlibとログレベルをイメージ）。
- [glg](https://github.com/kpango/glg) - glgはGo向けのシンプルで高速なレベル別ログライブラリ。
- [glo](https://github.com/lajosbencz/glo) - PHP Monologにインスパイアされたログ機能で、同等の重みレベルを持つ。
- [glog](https://github.com/golang/glog) - Go向けのレベル別実行ログ。
- [go-cronowriter](https://github.com/utahta/go-cronowriter) - 現在の日時に基づきログファイルを自動的に回転するシンプルなライター（cronologのように）。
- [go-log](https://github.com/pieterclaerhout/go-log) - スタックトレース、オブジェクトダンプ、オプションのタイムスタンプを備えたログライブラリ。
- [go-log](https://github.com/subchen/go-log) - Goにおけるシンプルで設定可能なログ出力、レベル、フォーマッタ、ライターをサポート。
- [go-log](https://github.com/siddontang/go-log) - ログライブラリはレベルと複数のハンドラーをサポート。
- [go-log](https://github.com/ian-kent/go-log) - GoにおけるLog4jの実装。
- [go-log4g](https://github.com/go-log4g/core) - Log4gはGoの標準ログ/slogログファサードにLog4jスタイルの設定とパターンレイアウトを提供。
- [go-logger](https://github.com/apsdehal/go-logger) - Goプログラム向けのシンプルなログ出力、レベルハンドラーを備える。
- [GoLogX](https://github.com/AyoubTadlaoui/GoLogX) - 追加のみ可能な、ハッシュ連鎖付き、オプションでEd25519署名されたslogハンドラー、かつ、改ざんのオフライン検証を可能にする。
- [gone/log](https://github.com/One-com/gone/tree/master/log) - 高速で拡張可能で、標準ライブラリと互換性のある、フル機能のログライブラリ。
- [httpretty](https://github.com/henvic/httpretty) - デバッグ時にターミナルに通常のHTTPリクエストを整形して表示（http.DumpRequestに類似）。
- [journald](https://github.com/ssgreg/journald) - systemd JournalのネイティブAPIをGoで実装したログ出力ライブラリ。
- [kemba](https://github.com/clok/kemba) - [debug](https://github.com/visionmedia/debug)をインスピレーションとして作った、小さなデバッグログツール。CLIツールやアプリケーションに最適。
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - journalctl、ファイルシステム、DockerおよびPodmanコンテナ、Kubernetesポッドからのログを読み取り・フィルタリングするTUI。
- [log](https://github.com/aerogo/log) - O(1)のログシステムで、1つのログを複数のライターに接続できる（例：stdout、ファイル、TCP接続）。
- [log](https://github.com/apex/log) - Go向けの構造化ログパッケージ。
- [log](https://github.com/go-playground/log) - Go向けのシンプルで設定可能かつスケーラブルな構造化ログ。
- [log](https://github.com/teris-io/log) - Go向けの構造化ログインターフェースは、ログファサードとその実装を明確に分離。
- [log](https://github.com/heartwilltell/log) - 標準ログパッケージに囲まれたシンプルなレベル別ログラッパー。
- [log](https://github.com/no-src/log) - 標準で提供されるシンプルなログフレームワーク。
- [log15](https://github.com/inconshreveable/log15) - Go向けのシンプルで強力なログ出力。
- [logdump](https://github.com/ewwwwwqm/logdump) - 複数レベルのログ出力パッケージ。
- [logex](https://github.com/chzyer/logex) - Golangのログライブラリ、トレーサーとレベルをサポートし、標準ログライブラリでラップ。
- [logger](https://github.com/azer/logger) - Go向けのミニマリズムなログライブラリ。
- [logo](https://github.com/mbndr/logo) - Golangのログを異なる設定可能なライターより出力するログライター
- [logrus](https://github.com/Sirupsen/logrus) - Go向けの構造化ログ
- [logrusiowriter](https://github.com/cabify/logrusiowriter) - `io.Writer` を使用した [logrus](https://github.com/sirupsen/logrus) ロガーの実装。
- [logrusly](https://github.com/sebest/logrusly) - [logrus](https://github.com/sirupsen/logrus)にエラーを送信するプラグインです。 [Loggly](https://www.loggly.com/)
- [logutils](https://github.com/hashicorp/logutils) - Go（Golang）の標準ログを少し改善したユーティリティ（拡張）
- [logxi](https://github.com/mgutz/logxi) - 高速で使いやすい12要因アプリケーション用ログ
- [lumberjack](https://github.com/natefinch/lumberjack) - シンプルなローリングログ、io.WriteCloserを実装
- [mlog](https://github.com/jbrodriguez/mlog) - Go向けのシンプルなログモジュール。5レベル、オプションのローテートログファイル機能、および標準出力/標準エラー出力
- [noodlog](https://github.com/gyozatech/noodlog) - パラメータ化されたJSONログライブラリ。センシティブなデータを暗号化し、あらゆるコンテンツをマーシャルできる。JSON文字列のエスケープ文字や、プリントされたポインタ代わりの値をなくす
- [onelog](https://github.com/francoispqt/onelog) - Onelogは非常にシンプルで、非常に効率的なJSONログ。すべてのシナリオで最も速いJSONログライブラリであり、割り当て量が最も少ないログライブラリの一つでもある
- [ozzo-log](https://github.com/go-ozzo/ozzo-log) - ログの重み、分類、フィルタリングをサポートする高性能ログ
- [phuslu/log](https://github.com/phuslu/log) - 高性能な構造化ログ
- [pp](https://github.com/k0kubun/pp) - Go言語向けの色付きプリント機能
- [rollingwriter](https://github.com/arthurkiller/rollingWriter) - RollingWriterは、複数のポリシーを備えた自動回転`io.Writer`実装であり、ログファイルの回転を提供します。
- [seelog](https://github.com/cihub/seelog) - 柔軟なディスパッチ、フィルタリング、フォーマットを備えたログ機能
- [sentry-go](https://github.com/getsentry/sentry-go) - SentryのGo用SDK。リアルタイムのアラートとパフォーマンスモニタリングにより、エラーの監視と追跡を支援
- [slf4g](https://github.com/echocat/slf4g) - Golang向けのシンプルなログファサード：シンプルな構造化ログだが、強力で拡張可能かつカスタマイズ可能。かつてのログフレームワークの数十年分の経験を学び、その成果を活かした
- [slog](https://github.com/gookit/slog) - Go向けの軽量かつ設定可能で拡張可能なログ
- [slog-configurator](https://github.com/psyb0t/slog-configurator) - 環境変数から標準ライブラリのlog/slogログを設定：レベル、フォーマット、ソース位置、標準出力/標準エラーの分割
- [slog-formatter](https://github.com/samber/slog-formatter) - slog向けの共通フォーマッタと、独自のフォーマッタを構築するためのヘルパー
- [slog-multi](https://github.com/samber/slog-multi) - slog.Handlerの連鎖（パイプライン、ファンアウトなど）
- [slogor](https://gitlab.com/greyxor/slogor) - 色付きのslogハンドラー
- [spew](https://github.com/davecgh/go-spew) - Goデータ構造の深層プリントを実装し、デバッグを支援
- [sqldb-logger](https://github.com/simukti/sqldb-logger) - Go SQLデータベースドライバー用のログ記録ライブラリ。既存の\*sql.DB標準ライブラリの使用を変更せずに機能を提供。
- [stdlog](https://github.com/alexcesaro/log) - Stdlogは、レベル別ログ出力を行うオブジェクト指向ライブラリ。cronジョブに非常に有用。
- [structy/log](https://github.com/structy/log) - シンプルで使いやすいログシステム。ミニマリズムを採用しているが、デバッグやメッセージの区別に必要な機能を備えている。
- [tail](https://github.com/hpcloud/tail) - BSDのtailプログラムの機能をGoパッケージで再現しようとするもの。
- [timberjack](https://github.com/DeRuina/timberjack) - サイズ、時間、スケジュールベースのクロックによる回転をサポートし、圧縮とクリーンアップを実行するローリングログ。
- [tint](https://github.com/lmittmann/tint) - tintedログを出力するslog.Handler。
- [xlog](https://github.com/xfxdev/xlog) - Go向けのプラグインアーキテクチャと柔軟なログシステム。レベル制御、複数のログターゲット、カスタムログフォーマットをサポート。
- [xlog](https://github.com/rs/xlog) - 構造化ログを出力する `net/context` に意識したHTTPハンドラー向けの柔軟なディスパッチ機能付きのログガーティングシステム。
- [xylog](https://github.com/xybor-x/xylog) - レベル別かつ構造化されたログ記録、動的フィールド、高性能、ゾーン管理、シンプルな設定、読みやすい構文。
- [yell](https://github.com/jfcg/yell) - もう一つのミニマリズムを採用したログライブラリ。
- [zap](https://github.com/uber-go/zap) - Goでの高速、構造化、レベル別ログ記録。
- [zax](https://github.com/yuseferi/zax) - Zapログ記録とContextを統合し、Goのログ記録により高い柔軟性を提供。
- [zerolog](https://github.com/rs/zerolog) - ゼロ割り当てJSONログ記録。
- [zkits-logger](https://github.com/edoger/zkits-logger) - 強力なゼロ依存JSONログ記及。
- [zl](https://github.com/nkmr-jp/zl) - 開発者体験を高めたZapベースのログ記録。豊かな機能を提供しながらも設定が簡単。

**[⬆ back to top関連](#contents)**

## 機械学習 <a id="machine-learning"></a>

_機械学習に関するGoライブラリ、ツール、または資料です。_

- [Anneal](https://github.com/georgebuilds/anneal) - Goで構築されたマシンラーニングコンパイラ。WebGPUバックエンドを備えた、完全にゼロから作成されたtinygradのポート。
- [bayesian](https://github.com/jbrukh/bayesian) - Golang向けのナイブベイズ分類。
- [born](https://github.com/born-ml/born) - Burn（Rust）をインスピレーションとして作られたディープラーニングフレームワーク。自動微分、型安全なテンソル、ゼロ-CGOによるGPU加速を備える。
- [catboost-cgo](https://github.com/mirecl/catboost-cgo) - 高速かつスケーラブルで高パフォーマンスの決定木ベースの勾配ブーストライブラリ。Goで構築され、Cgoを用いて高速推論を実現するCatBoostモデル。
- [CloudForest](https://github.com/ryanbressler/CloudForest) - 純Goで構築された、高速かつ柔軟でマルチスレッドの決定木のアンサンブル。
- [datatrax](https://github.com/rbmuller/datatrax) - データエンジニアリングと古典的な機械学習ツールキット。バッチ処理、型変換、7アルゴリズムを純Goで実装し、ゼロ依存。
- [ddt](https://github.com/sgrodriguez/ddt) - 動的決定木、カスタマイズ可能なルールを定義する木の作成
- [eaopt](https://github.com/MaxHalford/eaopt) - 進化型最適化ライブラリ
- [evoli](https://github.com/khezen/evoli) - 遺伝アルゴリズムおよび粒子群最適化ライブラリ
- [fonet](https://github.com/Fontinalis/fonet) - Goで書かれた深層ニューラルネットワークライブラリ
- [go-cluster](https://github.com/e-XpertSolutions/go-cluster) - Goで実装されたk-modesおよびk-prototypesクラスタリングアルゴリズム
- [go-deep](https://github.com/patrikeh/go-deep) - Goで構築された機能豊かなニューラルネットワークライブラリ
- [go-fann](https://github.com/white-pony/go-fann) - Fast Artificial Neural Networks(FANN)ライブラリのGoバインディング
- [go-galib](https://github.com/thoj/go-galib) - Go／golangで書かれた遺伝アルゴリズンライブラリ
- [go-pr](https://github.com/daviddengcn/go-pr) - Go言語で構築されたパターン認識パッケージ
- [gobrain](https://github.com/goml/gobrain) - Goで書かれたニューラルネットワーク
- [godist](https://github.com/e-dard/godist) - さまざまな確率分布および関連メソッド
- [goga](https://github.com/tomcraven/goga) - Go用の遺伝アルゴリズムライブラリ
- [GoLearn](https://github.com/sjwhitworth/golearn) - Go用の一般機械学習ライブラリ
- [GoMind](https://github.com/surenderthakran/gomind) - Goで書かれたシンプルなニューラルネットワークライブラリ
- [goml](https://github.com/cdipaolo/goml) - Goでのオンライン機械学習
- [GoMLX](https://github.com/gomlx/gomlx) - Go用の高速機械学習フレームワーク
- [gonet](https://github.com/dathoangnd/gonet) - Goでのニューラルネットワーク
- [Goptuna](https://github.com/c-bata/goptuna) - Goで書かれたブラックボックス関数用ベイズ最適化フレームワーク。すべてを最適化します
- [goRecommend](https://github.com/timkaye11/goRecommend) - Goで書かれた推薦アルゴリズムライブラリ
- [gorgonia](https://github.com/gorgonia/gorgonia) - Theanoに類するGoベースのグラフ型計算ライブラリで、さまざまな機械学習およびニューラルネットワークアルゴリズムの構築に必要なプリミティブを提供
- [gorse](https://github.com/zhenghaoz/gorse) - Goで書かれた協調フィルタリングベースのオフラインリコメンデーションシステムバックエンド
- [goscore](https://github.com/asafschers/goscore) - PMML用のGoスコアリングAPI
- [gosseract](https://github.com/otiai10/gosseract) - Tesseract C++ライブラリを使用したGoによるOCRパッケージ
- [hugot](https://github.com/knights-analytics/hugot) - HuggingfaceのTransformerパイプラインをGoでONNXRuntimeで実装
- [libsvm](https://github.com/datastream/libsvm) - LIBSVM 3.14に基づくlibsvm Go版の派生作品
- [m2cgen](https://github.com/BayesWitnesses/m2cgen) - Pythonで書かれたCLIツール。訓練済みの古典的な機械学習モデルをゼロ依存のネイティブGoコードに変換。
- [neural-go](https://github.com/schuyler/neural-go) - バックプロパゲーションによる訓練を行うGo実装のマルチレイヤーパーセプトロンネットワーク
- [ocrserver](https://github.com/otiai10/ocrserver) - DockerおよびHerokuで簡単にデプロイできるシンプルなOCRAPIサーバー
- [onnx-go](https://github.com/owulveryck/onnx-go) - Open Neural Network Exchange (ONNX)へのGoインターフェース
- [probab](https://github.com/ThePaw/probab) - 確率分布関数・ベイズ推論。純Goで書かれたもの
- [randomforest](https://github.com/malaschitz/randomForest) - Go向けに使いやすいランダムフォレストライブラリ
- [regommend](https://github.com/muesli/regommend) - リコメンデーションおよび協調フィルドリングエンジン
- [shield](https://github.com/eaigner/shield) - Go向けの柔軟なトークナイザーとストレージバックエンドを備えたベイズテキスト分類器
- [tfgo](https://github.com/galeone/tfgo) - 使いやすいTensorFlowバインディング：公式TensorFlow Goバインディングの利用を簡略化。Goで計算グラフを定義し、Pythonで訓練されたモデルをロード・実行。
- [Varis](https://github.com/Xamber/Varis) - Golangによるニューラルネットワーク

**[⬆ back to top関連](#contents)**

## メッセージング <a id="messaging"></a>

_メッセージングに関するGoライブラリ、ツール、または資料です。_

- [ami](https://github.com/kak-tus/ami) - Redis Cluster Streamsに基づく信頼性のあるキューへのGoクライアント
- [amqp](https://github.com/rabbitmq/amqp091-go) - Go用のRabbitMQクライアントライブラリ
- [APNs2](https://github.com/sideshow/apns2) - GoによるHTTP/2 Apple Push Notificationプロバイダー - iOS、tvOS、SafariおよびOSXアプリへのプッシュ通知を送信
- [Asynq](https://github.com/hibiken/asynq) - Redisに基づくシンプルで信頼性・効率性の高いGo用分散タスクキュー
- [backlite](https://github.com/mikestefanello/backlite) - 型安全かつ永続的な、埋め込み型タスクキューおよびバックグラウンドジョブ実行者（SQLiteベース）
- [Beaver](https://github.com/Clivern/Beaver) - リアルタイムメッセージングサーバー。Webおよびモバイルアプリにおけるスケーラブルなアプリ内通知、マルチプレイヤーゲーム、チャットアプリの構築に活用。
- [broker](https://github.com/qvcloud/broker) - プロダクション向けメッセージング抽象化。複数のブローカーに対応する統一APIと、組み込みのOpenTelemetry統合。
- [Bus](https://github.com/mustafaturan/bus) - 内部通信用のミニマリストなメッセージバス実装。
- [Centrifugo](https://github.com/centrifugal/centrifugo) - Goで構築されたリアルタイムメッセージング（WebsocketsまたはSockJS）サーバー。
- [Chanify](https://github.com/chanify/chanify) - iOSデバイスにメッセージを送るプッシュ通知サーバー。
- [Commander](https://github.com/jeroenrinzema/commander) - 高レベルのイベント駆動型消費者/プロダクターサービス。Apache Kafkaなどのさまざまな「ディアレクト」に対応。
- [Confluent Kafka Golang Client](https://github.com/confluentinc/confluent-kafka-go) - confluent-kafka-goは、Apache KafkaおよびConfluent Platform向けのConfluentのGolangクライアント。
- [dbus](https://github.com/godbus/dbus) - D-Bus向けのGoによるネイティブバインディング。
- [drone-line](https://github.com/appleboy/drone-line) - バイナリ、DockerまたはDrone CIを使用した[Line](https://at.line.me/en)通知の送信
- [emitter](https://github.com/olebedev/emitter) - Go方式でイベントを発行。ワイルドカード、プレディケート、キャンセル可能など、多くの優れた機能を備えている。
- [event](https://github.com/agoalofalife/event) - オブザーバーパターンの実装。
- [EventBus](https://github.com/asaskevich/EventBus) - 軽量イベントバスで、非同期対応を実現。
- [gaurun-client](https://github.com/osamingo/gaurun-client) - Gaurunクライアント（Goで構築）。
- [Glue](https://github.com/desertbit/glue) - 強固なGoおよびJavaScriptソケットライブラリ（Socket.ioの代替）。
- [go-eventbus](https://github.com/stanipetrosyan/go-eventbus) - Go向けのシンプルイベントバスパッケージ。
- [Go-MediatR](https://github.com/mehdihadeli/Go-MediatR) - イベント駆動アーキテクチャ内でメディエーターパターンおよび簡易CQRSパターンを扱うためのライブラリ。C#のMediatRライブラリをインスピレーションとしている。
- [go-mq](https://github.com/cheshir/go-mq) - 宣言型設定を用いたRabbitMQクライアント。
- [go-notify](https://github.com/TheCreeper/go-notify) - freedesktop通知仕様のネイティブ実装。
- [go-nsq](https://github.com/nsqio/go-nsq) - NSQ向けの公式Goパッケージ。
- [go-res](https://github.com/jirenius/go-res) - NATSおよびResgateを用いて、クライアントをシームレスに同期させるREST/リアルタイムサービスの構築用パッケージ。
- [go-vitotrol](https://github.com/maxatome/go-vitotrol) - Viessmann Vitotrolウェブサービス向けのクライアントライブラリ。
- [GoEventBus](https://github.com/Raezil/GoEventBus) - ブレードのように速く、メモリ内で動作し、ロックフリーなイベントバスライブラリ
- [Gollum](https://github.com/trivago/gollum) - n:mのマルチプレクサが、異なるソースからのメッセージを収集し、複数の宛先にブロードキャストする
- [golongpoll](https://github.com/jcuga/golongpoll) - HTTP longpollサーバーライブラリでウェブのパブリッシュ・サブスクリプションをシンプルに実現
- [gopush-cluster](https://github.com/Terry-Mao/gopush-cluster) - gopush-clusterはGoによるプッシュサーバークラスタ
- [gorush](https://github.com/appleboy/gorush) - とgoogle を用いたプッシュ通知サーバー。 [APNs2](https://github.com/sideshow/apns2) [GCM](https://github.com/google/go-gcm)
- [gosd](https://github.com/alexsniffin/gosd) - メッセージをチャンネルに送信するタイミングをスケジュールするためのライブラリ
- [guble](https://github.com/smancke/guble) - プッシュ通知（Google Firebase Cloud Messaging、Apple Push Notificationサービス、SMS）およびウェブソケット、REST APIを用いたメッセージサーバー。分散運用とメッセージの永続化をサポート
- [hare](https://github.com/leozz37/hare) - TCPソケットへのメッセージ送信と受信を扱う、ユーザーに親切なライブラリ
- [hub](https://github.com/leandro-lugaresi/hub) - Goアプリケーション向けのメッセージ/イベントハブ。発行・購読パターンを採用し、RabbitMQのエクチェンジのようなアリアをサポート
- [hypermatch](https://github.com/SchwarzIT/hypermatch) - 非常に高速かつ効率的なGoライブラリ。イベントを大量のルールにマッチングする
- [jazz](https://github.com/socifi/jazz) - RabbitMQのキュー管理やメッセージの発行・消費に用いるシンプルなRabbitMQ抽象化層
- [machinery](https://github.com/RichardKnop/machinery) - 分散メッセージ伝達に基づく非同期タスクキュー／ジョブキュー
- [mangos](https://github.com/nanomsg/mangos) - Nanomsg（"スケーラビリティプロトコル"）の純Go実装。トランスポートの相互運用性を備える
- [melody](https://github.com/olahol/melody) - ウェブソケットセッションを扱うミニマリズムフレームワーク。ブロードキャストや自動ping/pong処理を含む
- [Mercure](https://github.com/dunglas/mercure) - Mercureプロトコル（サーバーサンプトイベントに基づく）を用いたサーバーから送信される更新のディスパッチを行うサーバーとライブラリ
- [messagebus](https://github.com/vardius/message-bus) - messagebusはGoによるシンプルな非同期メッセージバス。イベントソース、CQRS、DDDの実装時にイベントバスとして最適
- [NATS Go Client](https://github.com/nats-io/nats.go) - メッセージングに関するGoライブラリ、ツール、ソフトウェア、または資料です。
  messaging system.
- [nsq-event-bus](https://github.com/rafaeljesus/nsq-event-bus) - NSQのトピックとチャンネルをラップした極めて小さなラッパー
- [oplog](https://github.com/dailymotion/oplog) - REST API向けの一般化されたオペレーションログ／再現システム
- [pubsub](https://github.com/tuxychandru/pubsub) - Go向けのシンプルな発行・購読パッケージ
- [Quamina](https://github.com/timbray/quamina) - メッセージおよびイベントのフィルタリングに用いる高速パターンマッチング
- [rabbitroutine](https://github.com/furdarius/rabbitroutine) - RabbitMQの自動再接続とメッセージ送信リトライを扱う軽量ライブラン。再接続後にRabbitMQ内でエンティティを再宣言する必要性を考慮している
- [rabbus](https://github.com/rafaeljesus/rabbus) - AMQPのエクスチェンジとキューに対する極めて小さなラッパー
- [rabtap](https://github.com/jandelgado/rabtap) - RabbitMQのスイス軍刀のようなCLIアプリ
- [RapidMQ](https://github.com/sybrexsys/RapidMQ) - RapidMQは、ローカルメッセージキューの管理を行う軽量かつ信頼性の高いライブラリ
- [Ratus](https://github.com/hyperonym/ratus) - RatusはRESTベースの非同期タスクキューサーバー
- [redisqueue](https://github.com/robinjoseph08/redisqueue) - redisqueueは、Redisストリームを使用するキューのプロダクタとコンシューマを提供
- [rmqconn](https://github.com/sbabiv/rmqconn) - RabbitMQの再接続。amqp.Connectionおよびamqp.Dialに対するラッパー。接続が破綻した場合に再接続を行い、Close()メソッドの呼び出しを強制閉じる前に接続を閉じる
- [sarama](https://github.com/Shopify/sarama) - Apache Kafka用のGoライブラリ
- [Uniqush-Push](https://github.com/uniqush/uniqush-push) - モバイルデバイス向けのサーバーサイド通知に用いるRedisベースの統合プッシュサービス
- [varmq](https://github.com/goptics/varmq) - Goプログラムの並列実行に適したストレージに依存しないメッセージキューとワーカーポール
- [Watermill](https://github.com/ThreeDotsLabs/watermill) - メッセージストリームとの効率的な対応。イベント駆動アプリケーションの構築、イベントソースの実現、メッセージを介したRPC、サガの実現。KafkaやRabbitMQといった従来のpub/sub実装を使用できるが、HTTPまたはMySQLバイナリログも使用可能
- [zmq4](https://github.com/pebbe/zmq4) - GoインターフェースによるZeroMQ版4。また、[version 3](https://github.com/pebbe/zmq3)および[version 2](https://github.com/pebbe/zmq2)にも利用可能。

**[⬆ back to top関連](#contents)**

## Microsoft Office <a id="microsoft-office"></a>

- [unioffice](https://github.com/unidoc/unioffice) - オフィスドキュメント（.docx、.xlsx、.pptx）の作成と処理に特化した純粋なgoライブラリ。

### Microsoft Excel <a id="microsoft-excel"></a>

_Microsoft Excelに関するGoライブラリ、ツール、または資料です。_

- [cellwalker](https://github.com/chonla/cellwalker) - Excelのセル名をほぼ1セルずつ順に走査する
- [excelize](https://github.com/xuri/excelize) - GoでMicrosoft Excel&trade;(XLSX)ファイルの読み書きを行うライブラリ
- [exl](https://github.com/go-the-way/exl) - Goで書かれた構造体にExcelをバインディング（Go1.18以降のみ対応）
- [go-excel](https://github.com/szyhf/go-excel) - 関連DBのようなExcelをテーブルとして読み取るためのシンプルかつ軽量なリーダー
- [xlsx](https://github.com/tealeg/xlsx) - Goプログラムで、Microsoft Excelの最新バージョンが使用するXMLフォーマットを読みやすくするライブラリ
- [xlsx](https://github.com/plandem/xlsx) - Goプログラムで既存のMicrosoft Excelファイルを高速かつ安全に読み取り・更新する方法

### Microsoft Word <a id="microsoft-word"></a>

_Microsoft Wordに関するGoライブラリ、ツール、または資料です。_

- [godocx](https://github.com/gomutex/godocx) - Microsoft Word (Docx)ファイルの読み書きに使えるライブラリ。

**[⬆ back to top関連](#contents)**

## その他 <a id="miscellaneous"></a>

### 依存性注入 <a id="dependency-injection"></a>

_依存性注入に関するGoライブラリ、ツール、または資料です。_

- [alice](https://github.com/magic003/alice) - Golang用の追加型の依存性注入コンテナ
- [autowire](https://github.com/tiendc/autowire) - ジェネリクスとリフレクションを用いたGolangの依存性注入
- [boot-go](http://github.com/boot-go/boot) - Go開発者向けのリフレクションを用いたコンポーネントベース開発と依存性注入
- [componego](https://github.com/componego/componego) - コンポーネントベースの依存性注入フレームワーク。テスト中にコードをダブリングせずに動的に依存性を置き換えることができる
- [cosban/di](https://gitlab.com/cosban/di) - コード生成をベースにした依存性注入のワイヤリングツール
- [di](https://github.com/goava/di) - Goプログラミング言語向けの依存性注入コンテナ
- [dig](https://github.com/uber-go/dig) - Go向けの反射ベースの依存性注入ツールキット
- [dingo](https://github.com/i-love-flamingo/dingo) - GuiceをベースにしたGo向けの依存性注入ツールキット
- [do](https://github.com/samber/do) - ジェネリクスをベースにした依存性注入フレームワーク
- [fx](https://github.com/uber-go/fx) - Go向けの依存性注入をベースにしたアプリケーションフレームワーク（digに構築）
- [go-beans](https://github.com/go-beans/go) - Spring風の依存性注入およびアプリケーションライフサイクルフレームワーク
- [Go-Spring](https://github.com/go-spring/spring-core) - Spring Bootをインスピレーションとして、DI、自動設定、ライフサイクル管理を提供しつつ、Goのシンプルさと効率性を維持する、高性能なGoフレームワーク
- [gocontainer](https://github.com/vardius/gocontainer) - シンプルな依存性注入コンテナ
- [godi](https://github.com/junioryono/godi) - スコープとジェネリクスをサポートするMicrosoft風のGo向け依存性注入
- [goioc/di](https://github.com/goioc/di) - Spring風の依存性注入コンテーンヤ
- [GoLobby/Container](https://github.com/golobby/container) - GoLobby Containerは、Goプログラミング言語向けの軽量かつ強力なIoC依存性注入コンテナ
- [gontainer](https://github.com/NVIDIA/gontainer) - Goプロジェクト向けの依存性注入サービスコンテナ
- [gontainer/gontainer](https://github.com/gontainer/gontainer) - YAMLベースの依存性注入コンテナ。スコープと循環依存の自動検出をサポート。Gontainerは並列安全である
- [HnH/di](https://github.com/HnH/di) - クリーンなAPIと柔軟性に焦点を当てたDIコンテナライブラリ
- [kinit](https://github.com/go-kata/kinit) - グローバルモード、階層初期化、パニック安全な終了をサポートするカスタマイズ可能な依存性注入コンテナ
- [kod](https://github.com/go-kod/kod) - ジェネリクスをベースにしたGo向けの依存性注入フレームワーク
- [linker](https://github.com/logrange/linker) - 反射ベースの依存性注入およびコントロール反転ライブラリ（コンポーネントライフサイクルをサポート）
- [nject](https://github.com/muir/nject) - ライブラリ、テスト、HTTPエンドポイント、サービススタートアップ向けの型安全かつ反射ベースのフレームワーク
- [ore](https://github.com/firasdarwish/ore) - 軽量で汎用的かつシンプルな依存性注入（DI）コンテナ
- [parsley](https://github.com/matzefriedrich/parsley) - 柔軟でモジュラリティを重視した反射ベースのDIライブラリで、スコープコンテキストやプロキシ生成といった高度な機能を備え、大規模なGoアプリケーション向けに設計されています。
- [wire](https://github.com/Fs02/wire) - Golang向けの厳密なランタイム依存注入。

**[⬆ back to top関連](#contents)**

### プロジェクト構成 <a id="project-layout"></a>

_プロジェクト構成に関するGoライブラリ、ツール、または資料です。_

- [ardanlabs/service](https://github.com/ardanlabs/service) - A [starter kit](https://github.com/ardanlabs/service/wiki) で生産レベルのスケーラブルなウェブサービスアプリケーションを構築します。
- [cookiecutter-golang](https://github.com/lacion/cookiecutter-golang) - 生産性の高いベストプラクティスに基づいたGoアプリケーションのスタートテンプレート。
- [go-blueprint](https://github.com/Melkeydev/go-blueprint) - 人気フレームワークを用いて、迅速にGoプロジェクトを立ち上げるための機能。
- [go-ddd](https://github.com/sklinkert/go-ddd) - ドメイン駆動設計（DDD）テンプレートで、CQRS、値オブジェクト、一意性を保つコマンド、トランザクション出力ボックスを含む。
- [go-grpc-bazel-example](https://github.com/esurdam/go-grpc-bazel-example) - Go gRPCマイクロサービスの例モノリソース（monorepo）で、Bazel、grpc-gateway、OpenAPI、Kubernetesを統合。
- [go-module](https://github.com/octomation/go-module) - Goで書かれた典型的なモジュールのテンプレート。
- [go-rest-api-boilerplate](https://github.com/vahiiiid/go-rest-api-boilerplate) - AI対応、生産環境対応のGo REST APIテンプレート。クリーンアーキテクチャ、JWT認証、RBAC、PostgreSQL、Dockerホットリロード、Swaggerドキュメンテーションを備えています。
- [go-sample](https://github.com/zitryss/go-sample) - Goアプリケーションプロジェクトのサンプルレイアウトと実際のコードを含む。
- [go-starter](https://github.com/allaboutapps/go-starter) - VSCode DevContainersと高度に統合された、意見をもつ生産環境対応RESTフルJSONバックエンドテンプレート。
- [go-todo-backend](https://github.com/Fs02/go-todo-backend) - モジュラリーレイアウトを用いたGo Todoバックエンドの例として、プロダクトマイクロサービスを構築。
- [goapp](https://github.com/naughtygopher/goapp) - Goウェブアプリケーション／サービスの構造と開発に向けた意見をもつガイドライン。
- [gobase](https://github.com/wajox/gobase) - 基本的なセットアップを備えたシンプルなGoアプリケーションのスケルトン。
- [golang-standards/project-layout](https://github.com/golang-standards/project-layout) - Goエコシステムにおける一般的なおよび新規のプロジェクト構成パターンのセット。注：組織名から考えられるように、これは公式なgolang標準を表していません。詳細については [this issue](https://github.com/golang-standards/project-layout/issues/117) を参照ください。ただし、一部のユーザーはこの構成が有用であると考えるでしょう。
- [golang-templates/seed](https://github.com/golang-templates/seed) - Goアプリケ及のGitHubリポジトリテンプレート。
- [goxygen](https://github.com/shpota/goxygen) - GoとAngular、React、またはVueで、数秒で現代的なWebプロジェクトを生成。
- [insidieux/inizio](https://github.com/insidieux/inizio) - プラグインを用いたGoプロジェクトレイアウト生成ツール。
- [kickstart.go](https://github.com/raeperd/kickstart.go) - 第三者ライブラリに依存しない、極めてシンプルなシングルファイルGo HTTPサーバーテンプレート。
- [modern-go-application](https://github.com/sagikazarmark/modern-go-application) - 現代的な開発慣行を適用したGoアプリケーションのボイラープレートと例。
- [nunu](https://github.com/go-nunu/nunu) - NunuはGoアプリケーションの構築に用いるスケルトンツール。
- [pagoda](https://github.com/mikestefanello/pagoda) - Goで構築された、迅速かつ簡単なフルスタックWeb開発スタートキット。
- [scaffold](https://github.com/catchplay/scaffold) - Scaffold は、Go プロジェクトの初期レイアウトを生成します。ビジネスロジックの実装に集中できるようにします。
- [wangyoucao577/go-project-layout](https://github.com/wangyoucao577/go-project-layout) - Go プロジェクトのレイアウト構成に関する実践と議論のセット。

**[⬆ back to top関連](#contents)**

### 文字列 <a id="strings"></a>

_文字列に関するGoライブラリ、ツール、または資料です。_

- [bexp](https://github.com/happy-sdk/happy/tree/main/pkg/strings/bexp) - Brace Expansion メカニズムの Go 実装で任意の文字列を生成します。
- [caps](https://github.com/chanced/caps) - ケース変換用のライブラリ。
- [go-formatter](https://gitlab.com/tymonx/go-formatter) - **置換フィールド**をカッコブレースで囲んだ`{}`形式の文字列を実装します。
- [gobeam/Stringy](https://github.com/gobeam/Stringy) - 文字列をキャメルケース、スネークケース、ケバブケース／スラッグ化などに変換するための文字列操作ライブラリ。
- [str](https://github.com/schigh/str) - 変換を組み合わせるためのパイプライン中心の文字列ツールキット。
- [strcase](https://github.com/charlievieth/strcase) - 標準ライブラリの strings/bytes パッケージのケース不感実装。
- [stringFormatter](https://github.com/Wissance/stringFormatter) - Python または C# のような文字列フォーマットに加え、追加のテキストフォーマット機能を備えた文字列フォーマット。
- [strutil](https://github.com/ozgio/strutil) - 文字列ユーティリティ。
- [sttr](https://github.com/abhimanyu003/sttr) - マルチプラットフォーム対応の CLI アプリで、文字列に対してさまざまな操作を行うことができます。
- [xstrings](https://github.com/huandu/xstrings) - その他の言語から移植された便利な文字列関数のコレクション。

**[⬆ back to top関連](#contents)**

### 未分類 <a id="uncategorized"></a>

_未分類に関するGoライブラリ、ツール、または資料です。_

- [anagent](https://github.com/mudler/anagent) - 最小限の構成、プラグイン対応の Golang エベントループ／タイマーハンドラー（デプロイインジェクションを用いる）。
- [antch](https://github.com/antchfx/antch) - 高速で強力かつ拡張可能なウェブスクレイピング・スクレイピングフレームワーク。
- [archives](https://github.com/mholt/archives) - マルチフォーマットの Go ライブラリで、アーカイブや圧縮フォーマットの処理に加え、統一APIとio/fsに適合する仮想ファイルシステムを提供する。
- [autoflags](https://github.com/artyom/autoflags) - 構造体フィールドから自動的にコマンドラインフラグを定義するためのGoパッケージ。
- [avgRating](https://github.com/kirillDanshin/avgRating) - ウィルソンスコア方程式に基づいて、平均スコアと評価を計算します。
- [banner](https://github.com/dimiro1/banner) - あなたのGoアプリケーションに美しいバナーを追加します。
- [base64Captcha](https://github.com/mojocn/base64Captcha) - Base64captch は、数字、数値、アルファベット、算術、音声、数字・アルファベットのキャプチャをサポートします。
- [basexx](https://github.com/bobg/basexx) - さまざまな数進法の数字文字列の変換（変換・変換・相互変換）を行います。
- [battery](https://github.com/distatus/battery) - マルチプラットオーラー対応の、標準化されたバッテリー情報ライブラリ。
- [bitio](https://github.com/icza/bitio) - GoにおけるビットレベルのReaderとWriterの高度に最適化された実装
- [browscap_go](https://github.com/digitalcrab/browscap_go) - GoLang ライブラリ for [Browser Capabilities Project](https://browscap.org/).
- [captcha](https://github.com/steambap/captcha) - Package captchaは、キャプチャ生成に便利で主観のないAPIを提供する
- [common](https://github.com/kubeservice-stack/common) - サーバーフレームワーク向けのライブラリ
- [conv](https://github.com/cstockton/go-conv) - Package convは、Goの型間の高速かつ直感的な変換を提供する
- [datacounter](https://github.com/miolini/datacounter) - Goにおけるリーダー/ライター/HTTP.ResponseWriter用のカウンターパッケージ
- [fake-useragent](https://github.com/lib4u/fake-useragent) - 現実世界のデータベースを用いた、最新のシンプルなユーザーエージェントのフェイク生成ツール（Golang）
- [faker](https://github.com/pioz/faker) - Go向けのランダムなフェイクデータおよび構造体生成器
- [ffmt](https://github.com/go-ffmt/ffmt) - 人間が見やすいデータの表示を美化する
- [gatus](https://github.com/TwinProduction/gatus) - 自動サービスのヘルスダッシュボード
- [go-commandbus](https://github.com/lana/go-commandbus) - Go向けの軽量かつプラグイン可能なコマンドバス
- [go-commons-pool](https://github.com/jolestar/go-commons-pool) - Golang向けのジェネリックオブジェクトプール
- [go-openapi](https://github.com/go-openapi) - オープンAPIスキーマをパースし、利用するためのパッケージのコレクション
- [go-resiliency](https://github.com/eapache/go-resiliency) - Golang向けのリソリエンスパターン
- [go-unarr](https://github.com/gen2brain/go-unarr) - RAR、TAR、ZIPおよび7zアーカイブの圧縮解除ライブラリ
- [gofakeit](https://github.com/brianvoe/gofakeit) - Goで書かれたランダムデータ生成器
- [goffi](https://github.com/go-webgpu/goffi) - CGOを使わずCライブラリを呼び出すための、libffiスタイルの型付き呼び出しインターフェースと構造化されたエラー処理による純GoのFFI
- [gommit](https://github.com/antham/gommit) - Gitのコミットメッセージを分析して、定義されたパターンに従っているかを確認する
- [gopsutil](https://github.com/shirou/gopsutil) - プロセスおよびシステム使用率（CPU、メモリ、ディスクなど）を取得するための、マルチプラットフォームライブラリ
- [gosh](https://github.com/osamingo/gosh) - Goの統計ハンドラー、構造体、測定メソッドを提供する
- [gosms](https://github.com/haxpax/gosms) - 自作のGoによるローカルSMSゲートウェイ（SMS送信に使用可能）
- [gotoprom](https://github.com/cabify/gotoprom) - 公式Prometheusクライアント用の型安全なメトリクスビルダー用のラッパーライブラリ
- [gountries](https://github.com/pariz/gountries) - 国および行政区画データを公開するパッケージ
- [gtree](https://github.com/ddddddO/gtree) - Markdownまたはプログラム的に生成するためのツリー出力とディレクトリ作成用のCLI、パッケージ、ウェブ機能を提供
- [health](https://github.com/alexliesenfeld/health) - Go用のシンプルで柔軟なヘルスチェックライブラリ
- [health](https://github.com/dimiro1/health) - 使いやすく、拡張可能なヘルスチェックライブラリ
- [healthcheck](https://github.com/etherlabsio/healthcheck) - RESTフルサービス向けの意見に基づいた並列ヘルスチェックHTTPハンドラー
- [hostutils](https://github.com/Wing924/hostutils) - GoでFQDNリストをパッケージ化および展開するライブラリ
- [indigo](https://github.com/osamingo/indigo) - Sonyflakeを用いて分散生成し、Base58でエンコードした一意ID生成ライブラリ
- [lk](https://github.com/hyperboloide/lk) - Go用のシンプルなライセンスライブラリ
- [llvm](https://github.com/llir/llvm) - 純GoでLLVM IRと相互作用するライブラリ
- [metrics](https://github.com/pascaldekloe/metrics) - メトリクスインストルメンテーションおよびPrometheus公開用のライブラリ
- [morse](https://github.com/alwindoss/morse) - モルス符号に変換・変換するライブラリ
- [numa](https://github.com/lrita/numa) - NUMAはGoで書かれたユーティリティライブラリであり、NUMA対応コードの記述を支援します
- [pdfgen](https://github.com/hyperboloide/pdfgen) - JSONリクエストからPDFを生成するHTTPサービス
- [persian](https://github.com/mavihq/persian) - Goにおけるペルシャ語用のユーティリティ
- [purego](https://github.com/ebitengine/purego) - GoからC関数を呼び出すためのCgoなしライブラリ
- [sandid](https://github.com/aofei/sandid) - 地球にある砂の1粒にはそれぞれ独自のIDがあります
- [shellwords](https://github.com/Wing924/shellwords) - UNIX Bourneシェルの語解析ルールに基づいて文字列を操作するGoライブラリ
- [shortid](https://github.com/teris-io/shortid) - 分散型で極めて短く、一意かつ非順序、URL対応のIDを生成するライブラリ
- [shoutrrr](https://github.com/containrrr/shoutrrr) - スラック、マター most、ゴティフィ、SMTPなど、さまざまなメッセージサービスへのアクセスを容易に提供する通知ライブラリ
- [sitemap-format](https://github.com/mingard/sitemap-format) - シンプルなサイトマップジェネレータ、少しの文法的な甘さを備えている。
- [stateless](https://github.com/qmuntal/stateless) - 状態マシンを作成するためのフレームワークライブラリ。
- [stats](https://github.com/go-playground/stats) - Goのメモリ統計とシステム統計（メモリ、スワップ、CPUなど）を監視し、UDPでどこでもログなどに送信。
- [turtle](https://github.com/hackebrot/turtle) - Go用のエモジ。
- [url-shortener](https://github.com/pantrif/url-shortener) - MySQL対応の現代的、強力で頑健なURL短縮マイクロサービス。
- [VarHandler](https://github.com/azr/generators/tree/master/varhandler) - ボイラープレートのHTTP入出力処理を生成。
- [varint](https://github.com/chmike/varint) - 標準ライブラリに含まれるものよりも、長さが変化しやすい整数エンコーダ／デコーダ。
- [xdg](https://github.com/rkoesters/xdg) - FreeDesktop.org (xdg)仕様をGoで実装。
- [xkg](https://github.com/go-xkg/xkg) - Xキーボードキャプチャ。
- [xz](https://github.com/ulikunitz/xz) - 未分類に関するGoライブラリ、ツール、ソフトウェア、または資料です。
**[⬆ back to top関連](#contents)**

## 自然言語処理 <a id="natural-language-processing"></a>

_自然言語処理に関するGoライブラリ、ツール、または資料です。_

See also [テキスト処理](#text-processing) and [テキスト分析](#text-analysis).

### 言語判定 <a id="language-detection"></a>

- [detectlanguage](https://github.com/detectlanguage/detectlanguage-go) - 言語検出API Goクライアント。バッチリクエスト、短いフレーズまたは単語レベルの言語検出をサポート。
- [getlang](https://github.com/rylans/getlang) - 高速な自然言語検出パッケージ。
- [guesslanguage](https://github.com/endeveit/guesslanguage) - Unicodeテキストの自然言語を特定するための関数。
- [lingua-go](https://github.com/pemistahl/lingua-go) - 長文および短文に適した正確な自然言語検出ライブラリ。混合言語テキストにおける複数言語の検出をサポート。
- [whatlanggo](https://github.com/abadojack/whatlanggo) - Go用の自然言語検出パッケージ。84言語と24の書字システム（例：ラテン文字、西ロシア文字など）をサポート。

### 形態素解析 <a id="morphological-analyzers"></a>

- [go-propisyu](https://github.com/rekurt/go-propisyu) - 数字をロシア語の語に変換し、正しい性別と名詞の変格を適用。
- [go-stem](https://github.com/agonopol/go-stem) - Porterのストリーミングアルゴリズムの実装。
- [go2vec](https://github.com/danieldk/go2vec) - word2vec埋め込みのリーダーおよびユーティリティ関数。
- [golibstemmer](https://github.com/rjohnsondev/golibstemmer) - snowball libstemmerライブラリ（Porter 2を含む）のGoバインディング。
- [gosentiwordnet](https://github.com/dinopuguh/gosentiwordnet) - Sentiwordnet辞書を使用した感情分析（Go）。
- [govader](https://github.com/jonreiter/govader) - Go による [VADER Sentiment Analysis](https://github.com/cjhutto/vaderSentiment) の実装.
- [govader-backend](https://github.com/PIMPfiction/govader_backend) - マイクロサービスによる [GoVader](https://github.com/jonreiter/govader) の実装.
- [kagome](https://github.com/ikawaha/kagome) - 純Goで書かれた日本語形態素解析器。
- [libtextcat](https://github.com/goodsign/libtextcat) - libtextcat C ライブラリ向けの Cgo バインディング。バージョン 2.2 との互換性が保証されている。
- [nlp](https://github.com/james-bowman/nlp) - LSA（潜在意味分析）をサポートする Go の自然言語処理ライブラリ。
- [paicehusk](https://github.com/rookii/paicehusk) - パイス／ハスクのストリーミングアルゴリズムを Golang で実装したもの。
- [porter](https://github.com/a2800276/porter) - マーティン・ポーターの C 実装のポーター・ストリーミングアルゴリズムの、比較的シンプルな Go 版。
- [porter2](https://github.com/zhenjl/porter2) - 非常に高速なポーター2ストリーミング。
- [RAKE.go](https://github.com/afjoseph/RAKE.Go) - Rapid Automatic Keyword Extraction Algorithm（RAKE）の Go 版。
- [snowball](https://github.com/goodsign/snowball) - Go 用の Snowball ステムマーカー (cgo ワッパー)。単語のステム抽出機能を提供 [Snowball native](http://snowball.tartarus.org/).
- [spaGO](https://github.com/nlpodyssey/spago) - Go で構成された、自律型の機械学習および自然言語処理ライブラリ。
- [spelling-corrector](https://github.com/jorelosorio/spellingcorrector) - スペイン語向けのスペル訂正器または、自作可能。

### スラッグ生成 <a id="slugifiers"></a>

- [go-slugify](https://github.com/mozillazg/go-slugify) - 複数言語をサポートした、見やすいスラグを作成。
- [slug](https://github.com/gosimple/slug) - URLに適したスラグを複数言語で生成。
- [Slugify](https://github.com/avelino/slugify) - Go スラグ化アプリケーションで文字列を処理。

### トークナイザー <a id="tokenizers"></a>

- [gojieba](https://github.com/yanyiwu/gojieba) - 中国語の単語分割アルゴリズム[jieba](https://github.com/fxsjy/jieba)のGo実装。
- [gotokenizer](https://github.com/xujiajun/gotokenizer) - Golang 用の辞書およびビッグラム言語モデルに基づくトークナイザ。 （現在は中国語セグメンテーションのみ対応）。
- [gse](https://github.com/go-ego/gse) - Go による効率的なテキストセグメンテーション。英語、中国語、日本語、その他をサポート。
- [MMSEGO](https://github.com/awsong/MMSEGO) - 中国語の単語分割アルゴリズム[MMSEG](http://technology.chtsai.org/mmseg/)のGo実装。
- [segment](https://github.com/blevesearch/segment) - Unicode テキストセグメンテーションを実行するための Go ライブラリ（[Unicode Standard Annex #29](https://www.unicode.org/reports/tr29/) に記載されている内容に基づく）
- [sentences](https://github.com/neurosnap/sentences) - 文トークナイザ：テキストを文のリストに変換。
- [shamoji](https://github.com/osamingo/shamoji) - shamoji は Go で書かれた単語フィルタリングパッケージ。
- [stemmer](https://github.com/dchest/stemmer) - Go プログラミング言語向けのストリーミングパッケージ。英語とドイツ語のストリーミングを含む。
- [textcat](https://github.com/pebbe/textcat) - n-gram に基づくテキスト分類用の Go パッケージ。UTF-8 および原始テキドをサポート。

### 翻訳 <a id="translation"></a>

- [ctxi18n](https://github.com/invopop/ctxi18n/) - コンテキストに配慮した i18n で、簡潔な API、複数形、埋め込み、および `fs.FS` のサポート。YAML ローカル定義は [Rails i18n](https://guides.rubyonrails.org/i18n.html) に基づいています.
- [go-i18n](https://github.com/nicksnyder/go-i18n/) - ローカライズされたテキストを扱うためのパッケージおよびツール。
- [go-mystem](https://github.com/dveselov/mystem) - Yandex.Mystem への CGo バインディング（ロシア語の文法解析器）。
- [go-pinyin](https://github.com/mozillazg/go-pinyin) - CN ハンジをハニューピンインに変換。
- [go-words](https://github.com/saleh-rahimzadeh/go-words) - Golangプロジェクト用の単語テーブルとテキストリソースライブラリ
- [gotext](https://github.com/leonelquinteros/gotext) - GNU gettext用のGo向けユーティリティ
- [iuliia-go](https://github.com/mehanizm/iuliia-go) - ロシア語→ラテン語のすべての可能な方法での変換
- [spreak](https://github.com/vorlif/spreak) - gettextの概念に基づいた、Go向けの柔軟な翻訳および人間化ライブラリ
- [t](https://github.com/youthlin/t) - Go 用の別の i18n パッケージ。GNU gettext スタイルを採用し、.po/.mo ファイルをサポート：`t.T (gettext)`, `t.N (ngettext)`, など。また、cmd ツール [xtemplate](https://github.com/youthlin/t/blob/main/cmd/xtemplate) を含み、text/html テンプレートからメッセージを pot ファイルに抽出できます.

### 翻字 <a id="transliteration"></a>

- [enca](https://github.com/endeveit/enca) - [libenca](https://cihar.com/software/enca/) 用の最小限の cgo バインディング。文字エンコーディングを検出します.
- [go-unidecode](https://github.com/mozillazg/go-unidecode) - UnicodeテキストのASCII変換
- [gounidecode](https://github.com/fiam/gounidecode) - Go向けのUnicode変換器（unidecodeとも呼ばれる）
- [transliterator](https://github.com/alexsergivan/transliterator) - 言語ごとの変換ルールをサポートする一方向の文字変換を提供

**[⬆ back to top関連](#contents)**

## ネットワーク <a id="networking"></a>

_ネットワークに関するGoライブラリ、ツール、または資料です。_

- [arp](https://github.com/mdlayher/arp) - パッケージarpはRFC 826に記載されたARPプロトコルを実装
- [bart](https://github.com/gaissmai/bart) - パッケージbartは非常に高速なIPからCIDRへの検索およびその他の機能を提供するバランスルーティングテーブル（BART）を提供
- [buffstreams](https://github.com/stabbycutyou/buffstreams) - TCPを介したプロトブッファデータのストリーミングを簡単に行う
- [canopus](https://github.com/zubairhamed/canopus) - CoAPクライアント/サーバー実装（RFC T7252）
- [cdns](https://github.com/junevm/cdns) - ターミナルから簡単にDNSサーバーを変更
- [chicha-ip-proxy](https://github.com/matveynator/chicha-ip-proxy) - 自動起動、IPベースのアクセス制御、OSレベルのネットワークスタックチューニングを備えたゼロ設定TCP/UDPポートプロキシ
- [cidranger](https://github.com/yl2chen/cidranger) - Go向けの高速IPからCIDRへの検索
- [cloudflared](https://github.com/cloudflare/cloudflared) - Cloudflare Tunnelクライアント（以前はArgo Tunnel）
- [dhcp6](https://github.com/mdlayher/dhcp6) - パッケージdhcp6はRFC 3315に記載されたDHCPv6サーバーを実装
- [dns](https://github.com/miekg/dns) - DNS操作に使うGoライブラリ
- [dnsmonster](https://github.com/mosajjal/dnsmonster) - パッシブDNSキャプチャ／モニタリングフレームワーク
- [easytcp](https://github.com/DarthPestilane/easytcp) - Go（Golang）で構築された軽量TCPフレームワーク（メッセージルーターを用いる）．EasyTCPはTCPサーバーの構築を簡単かつ迅速に支援
- [ether](https://github.com/songgao/ether) - エスケープフレーム送受信用のマルチプラットフォームGoパッケージ
- [ethernet](https://github.com/mdlayher/ethernet) - エーザンパッケージは、IEEE 802.3 Ethernet IIフレームおよびIEEE 802.1Q VLANタグのシリアライズとデシリアライズを実装しています。
- [event](https://github.com/cheng-zhongliang/event) - Golangで書かれたシンプルなI/Oイベント通知ライブラリ。
- [fasthttp](https://github.com/valyala/fasthttp) - パッケージfasthttpは、Go向けの高速HTTP実装であり、net/httpに比べて最大10倍速いです。
- [fibersse](https://github.com/vinod-morya/fibersse) - Fiber v3向けの生産環境用サーバー送信イベント（SSE）で、イベントの合併、優先度ルート、トピックワイルドカード、適応型スロットリング、および内蔵認証を提供します。
- [fortio](https://github.com/fortio/fortio) - 負荷テストライブラリおよびコマンドラインツール、高度なエコーサーバーおよびWebUI。クエリごとの秒間負荷を指定し、遅延ヒストグラムなどの有用な統計を記録し、それらを可視化できます。TCP、HTTP、gRPC。
- [ftp](https://github.com/jlaffaye/ftp) - Package ftp は [RFC 959](https://tools.ietf.org/html/rfc959) に記載された FTP クライアントを実装しています.
- [ftpserverlib](https://github.com/fclairamb/ftpserverlib) - 完全なFTPサーバーライブラリ。
- [fullproxy](https://github.com/shoriwe/fullproxy) - SOCKS5、HTTP、原始ポート、リバースプロキシプロトコルをサポートする、完全に機能するスクリプト可能でデーモン設定可能なプロキシおよびピボットツールキット。
- [fwdctl](https://github.com/alegrey91/fwdctl) - LinuxサーバーのIPTablesフォワードを管理するためのシンプルで直感的なCLI。
- [gaio](https://github.com/xtaci/gaio) - Golangにおける高パフォーマンスの非同期I/Oネットワーク実装（プロアクモード）。
- [gev](https://github.com/Allenxuxu/gev) - gevは、Reactorモードに基づく軽量かつ高速な非ブロッキングTCPネットワークライブラリ。
- [gldap](https://github.com/jimlambrt/gldap) - gldapはLDAPサーバーの実装を提供し、そのLDAP操作にハンドラーを提供します。
- [gmqtt](https://github.com/DrmagicE/gmqtt) - Gmqttは、MQTTプロトコルV3.1.1を完全に実装した柔軟かつ高パフォーマンスなMQTTブローカーライブラリ。
- [gnet](https://github.com/panjf2000/gnet) - `gnet`は、純粋Goで書かれた高パフォーマンス、軽量、非ブロッキング、イベント駆動型ネットワークフレームワーク。
- [gnet](https://github.com/fish-tennis/gnet) - `gnet`は、特にゲームサーバー向けの高パフォーマンスネットワークフレームワーク。
- [gNxI](https://github.com/google/gnxi) - gNMIおよびgNOIプロトコルを使用したネットワーク管理ツールのコレクション。
- [go-getter](https://github.com/hashicorp/go-getter) - URLを用いてさまざまなソースからファイルまたはディレクトリをダウンロードするためのGoライブラリ。
- [go-multiproxy](https://github.com/presbrey/go-multiproxy) - プロキシプールを介してHTTPリクエストを送るためのライブラリ。障害耐性、負荷分散、自動リトライ、クッキー管理などを提供し、http.Get/Postの置き換えまたはhttp.Client RoundTripperのドロップインで利用可能。
- [go-pcaplite](https://github.com/alexcfv/go-pcaplite) - HTTPS SNI抽出を含む軽量なライブパケットキャプチャライブラリ。
- [go-powerdns](https://github.com/joeig/go-powerdns) - GoでのPowerDNS APIバインディング。
- [go-sse](https://github.com/lampctl/go-sse) - HTMLサーバー送信イベントのGoクライアントおよびサーバー実装。
- [go-stun](https://github.com/ccding/go-stun) - STUNクライアント（RFC 3489およびRFC 5389）のGo実装
- [gobgp](https://github.com/osrg/gobgp) - Goプログラミング言語で実装されたBGP
- [gopacket](https://github.com/google/gopacket) - libpcapとのバインディングを用いたパケット処理用Goライブラリ
- [gopcap](https://github.com/akrennmair/gopcap) - libpcap向けのGoラッパー
- [GoProxy](https://github.com/elazarl/goproxy) - GoでカスタマイズされたHTTP/HTTPSプロキシサーバーを作成するためのライブラリ
- [goshark](https://github.com/sunwxg/goshark) - パッケージgosharkはtsharkを用いてIPパケットをデコードし、パケット分析用データ構造を作成
- [gosnmp](https://github.com/soniah/gosnmp) - SNMP操作を行うための本格的なGoライブラリ
- [gotcp](https://github.com/gansidui/gotcp) - TCPアプリケーションを迅速に書くためのGoパッケージ
- [grab](https://github.com/cavaliercoder/grab) - ファイルダウンロード管理を行うためのGoパッケージ
- [graval](https://github.com/koofr/graval) - 実験的なFTPサーバーフレームワーク
- [gws](https://github.com/lxzan/gws) - 高パフォーマンスのWebSocketサーバーおよびクライアント（AsyncIO対応）
- [HTTPLab](https://github.com/gchaincl/httplab) - HTTPLabsはHTTPリクエストを確認し、レスポンスを生成できるようにするツール
- [httpproxy](https://github.com/wzshiming/httpproxy) - HTTPプロキシハンドラおよびダイアル機能
- [iplib](https://github.com/c-robinson/iplib) - IP アドレス（net.IP, net.IPNet）を扱うためのライブラリ。Python の [ipaddress](https://docs.python.org/3/library/ipaddress.html) および Ruby の [ipaddr](https://ruby-doc.org/stdlib-2.5.1/libdoc/ipaddr/rdoc/IPAddr.html) をインスピレーションとしています
- [jazigo](https://github.com/udhos/jazigo) - Jazigoは複数のネットワークデバイスの設定情報を取得するためのGoで書かれたツール
- [kcp-go](https://github.com/xtaci/kcp-go) - KCP - 高速かつ信頼性のあるARQプロトコル
- [lhttp](https://github.com/fanux/lhttp) - 強力なWebSocketフレームワークで、IMサーバーの構築を容易に
- [linkio](https://github.com/ian-kent/linkio) - リーダー／ライターインターフェース向けのネットワークリンク速度シミュレーション
- [llb](https://github.com/kirillDanshin/llb) - 非常にシンプルで高速なプロキシサーバーのバックエンド。事前定義されたドメインへの迅速なリダイレクトに有効で、メモリ割り当てなしで高速応答が可能
- [macwifi](https://github.com/jaisonerick/macwifi) - macOS 13以降のWi-FiスキャンおよびKeychainパスワードの取得
- [mdns](https://github.com/hashicorp/mdns) - GolangによるシンプルなmDNS（マルチキャストDNS）クライアント／サーバーライブラリ
- [mqttPaho](https://eclipse.org/paho/clients/golang/) - Paho Go Clientは、TCP、TLSまたはWebSocketsを介してMQTTブローカーに接続するために使用できるMQTTクライアントライブラリを提供しています
- [natiu-mqtt](https://github.com/soypat/natiu-mqtt) - シンプルで、割り当てをしない、低レベルのMQTT実装であり、エムベディッドシステムに最適です
- [nbio](https://github.com/lesismal/nbio) - 純粋なGoによる100万件以上の接続解決策。TLS／HTTP1.x／WebSocketをサポートし、net/httpと基本的には互換性があり、高性能かつ低メモリコスト、非ブロッキング、イベント駆動、使いやすい
- [net](https://golang.org/x/net) - このリポジトリには、補助的なGoネットワークライブラリが含まれています
- [netchan](https://github.com/matveynator/netchan) - Golang向けのネットワークチャネル（netchan）：安全でクラスタ対応、ネストチャネルと任意のデータ型をサポート。ロブ・パイクの影響を受けたもの
- [nethawk](https://github.com/Flowtriq/nethawk) - JSON出力モードを備えたリアルタイムネットワークトラフィックのキャプチャ、解析、攻撃検知用のターミナルUI
- [netpoll](https://github.com/cloudwego/netpoll) - ByteDanceが開発した、RPCシナリオに特化した、高性能かつ非ブロッキングI/Oネットワークフレームワーク
- [NFF-Go](https://github.com/intel-go/nff-go) - クラウドおよび裸マシン（旧YANFF）向けのパフォーマンスの高いネットワーク機能の迅速開発を支援するフレームワーク
- [nodepass](https://github.com/NodePassProject/nodepass) - ネットワーク制限を克服するための、高速かつ信頼性の高いTCP/UDPトンネリングソリューション。事前に確立されたTCP/QUIC/WebSocketまたはHTTP/2接続を使用します
- [peerdiscovery](https://github.com/schollz/peerdiscovery) - UDPマルチキャストを用いた純粋Goによるプラットフォーム間のローカルペア発見ライブラリ
- [portproxy](https://github.com/aybabtme/portproxy) - CORSをサポートするAPIを追加するシンプルなTCPプロキシ
- [proxq](https://github.com/psyb0t/docker-proxq) - Redisに各リクエストをキューにし、応答をポールするためのジョブIDを返す、非同期逆プロキシ。パスプレフィックスルーティング、リトライ、キャッシュをサポート
- [psql-wire](https://github.com/jeroenrinzema/psql-wire) - PostgreSQLサーバーのワイヤープロトコル。自作サーバーを作成し、接続を開始できます
- [publicip](https://github.com/polera/publicip) - パッケージpublicipは、あなたのパブリックIPv4アドレス（インターネットエグリス）を返します
- [quic-go](https://github.com/lucas-clemente/quic-go) - 純粋GoによるQUICプロトコルの実装
- [roamr](https://github.com/sourabh-khot65/roamr) - 周囲の保存済みWiFiネットワークをスコアリングし、どのネットワークを使うべきか、そしてその理由を教えてくれるCLI
- [sdns](https://github.com/semihalev/sdns) - プライバシーを維持するための、高性能かつ再帰的なDNSリゾルバーサーバー。DNSSECをサポートしています
- [sftp](https://github.com/pkg/sftp) - Package sftp は <https://filezilla-project.org/specs/draft-ietf-secsh-filexfer-02.txt> に記載された SSH ファイル転送プロトコルを実装しています.
- [ssh](https://github.com/gliderlabs/ssh) - SSHサーバーの構築に必要な、より高レベルのAPI（crypto/sshをラップ）
- [sslb](https://github.com/eduardonunesp/sslb) - 非常にシンプルなロードバランサ。パフォーマンスを実現するための小さなプロジェクトです
- [stun](https://github.com/go-rtc/stun) - RFC 5389のSTUNプロトコルのGo実装
- [tcpack](https://github.com/lim-yoona/tcpack) - tcpackは、GoプログラムでバイトストリームをパッキングおよびアンパッキングするためにTCPをベースとしたアプリケーションプロトコルである
- [tspool](https://github.com/two/tspool) - TCPライブラリは、パフォーマンスを向上させ、サーバーを保護するためにワーカーポールを用いる
- [tun2socks](https://github.com/xjasonlyu/tun2socks) - tun2socks の純 Go 実装。[gVisor](https://gvisor.dev/) TCP/IP スタックをベースにしています.
- [utp](https://github.com/anacrolix/utp) - Go uTPマイクロトランスポートプロトコルの実装
- [vssh](https://github.com/yahoo/vssh) - SSHプロトコルを用いたネットワークおよびサーバー自動化用のGoライブラリ
- [water](https://github.com/songgao/water) - シンプルなTUN/TAPライブラリ
- [webrtc](https://github.com/pions/webrtc) - WebRTC APIの純Go実装
- [winrm](https://github.com/masterzen/winrm) - Go WinRMクライアントでWindowsマシン上のコマンドをリモートで実行
- [xtcp](https://github.com/xfxdev/xtcp) - 同時全双方向通信、スムーズなシャットダウン、カスタムプロトコルを備えたTCPサーバーフレームワーク

**[⬆ back to top関連](#contents)**

### HTTPクライアント <a id="http-clients"></a>

_HTTPクライアントに関するGoライブラリ、ツール、または資料です。_

- [axios4go](https://github.com/rezmoss/axios4go) - AxiosにインスパイアされたGo HTTPクライアントライブラリで、HTTPリクエストをシンプルかつ直感的に実行可能
- [azuretls-client](https://github.com/Noooste/azuretls-client) - TLS/JA3とHTTP/2のフィンガープリントを偽装できる、100% Go製の使いやすいHTTPクライアント。
- [fast-shot](https://github.com/opus-domini/fast-shot) - Goの最も高速かつシンプルなHTTPクライアントを用いて、APIターゲットに迅速かつ正確にアクセス
- [gentleman](https://github.com/h2non/gentleman) - フル機能のプラグイン駆動型HTTPクライアントライブラリ
- [go-cleanhttp](https://github.com/hashicorp/go-cleanhttp) - 簡単に標準ライブラリのHTTPクライアントを取得できる。他のクライアントと状態を共有しない
- [go-http-client](https://github.com/bozd4g/go-http-client) - HTTPリクエストをシンプルかつ容易に実行できる
- [go-ipmux](https://github.com/optimus-hft/go-ipmux) - 複数のソースIPに基づいたHTTPリクエストのマルチプレクシングを実現するライブラリ
- [go-otelroundtripper](https://github.com/NdoleStudio/go-otelroundtripper) - HTTPリクエストにOpenTelemetryメトリクスを発行するGo http.RoundTripper
- [go-req](https://github.com/wenerme/go-req) - 宣言型Go HTTPクライアント
- [go-retryablehttp](https://github.com/hashicorp/go-retryablehttp) - Goにおけるリトライ可能なHTTPクライアント
- [go-zoox/fetch](https://github.com/go-zoox/fetch) - Web Fetch APIにインスパイアされた強力で軽量かつ使いやすいHTTPクライアント
- [Grequest](https://github.com/lib4u/grequest)  - シンプルで軽量なGoパッケージ。強力なnet/httpをベースにしたHTTPリクエスト処理
- [grequests](https://github.com/levigross/grequests) - Goの「Requests」ライブラリに類するクローン
- [hedge](https://github.com/bhope/hedge) - Googleの「The Tail at Scale」論文に基づく、設定不要の適応型ヘッジされたリクエスト。p99の遅延を削減
- [heimdall](https://github.com/gojektech/heimdall) - リトライとハイストリックス機能を備えた強化されたHTTPクライアント
- [httpretry](https://github.com/ybbus/httpretry) - デフォルトのGo HTTPクライアントにリトライ機能を追加
 - [impersonate-http](https://github.com/North-web-dev/impersonate-http) - ブラウザTLS（JA3/JA4）およびHTTP/2（Akamai）のフィンガープリントをbyte精度で保持するdrop-in net/http.Client
- [pester](https://github.com/sethgrid/pester) - リトライ、バックオフ、並列処理をサポートするGo HTTPクライアント呼び出し
- [req](https://github.com/imroc/req) - 少ないコードで高い効率を実現する、シンプルなGo HTTPクライアント。
- [request](https://github.com/monaco-io/request) - golang用のHTTPクライアント。axiosやrequestsの経験がある方は大好きになるでしょう。3rdパッケージなし
- [requests](https://github.com/carlmjohnson/requests) - Gophers向けのHTTPおよびRESTクライアント。context.Contextを使用し、内部のnet/http.Clientを隠さず、標準GoAPIと互換性を持つ。また、テストツールも含む
- [resty](https://github.com/go-resty/resty) - Ruby rest-clientをインスピレーションに受けて作られた、シンプルなGo用HTTPおよびRESTクライアント
- [rq](https://github.com/ddo/rq) - Go標準ライブラリのHTTPクライアントにより良いインターフェースを提供
- [sling](https://github.com/dghubble/sling) - SlingはGo用のHTTPクライアントライブラリで、APIリクエストの作成と送信を行う
- [surf](https://github.com/enetx/surf) - HTTP/1.1、HTTP/2、HTTP/3（QUIC）、SOCKS5プロキシサポート、ブラウザレベルのTLSフィンガープリントを備えた高度なHTTPクライアント
- [tls-client](https://github.com/bogdanfinn/tls-client) - net/http.Clientに似たHTTPクライアントで、特定のクライアントTLSフィンガープリントを選択できるオプションを提供

**[⬆ back to top関連](#contents)**

## OpenGL <a id="opengl"></a>

_OpenGLに関するGoライブラリ、ツール、または資料です。_

- [gl](https://github.com/go-gl/gl) - OpenGL用のGoバインディング（glowにより生成）
- [glfw](https://github.com/go-gl/glfw) - GLFW 3用のGoバインディング
- [go-glmatrix](https://github.com/technohippy/go-glmatrix) - [glMatrix](https://glmatrix.net/) ライブラリの Go ポートです.
- [goxjs/gl](https://github.com/goxjs/gl) - GoによるクロスプラットフォームOpenGLバインディング（OS X、Linux、Windows、ブラウザ、iOS、Android）
- [goxjs/glfw](https://github.com/goxjs/glfw) - GoによるクロスプラットフォームGLFWライブラリでOpenGLコンテキストを作成し、イベントを受信
- [mathgl](https://github.com/go-gl/mathgl) - 3D数学に特化した純Go数学パッケージ（GLMをインスピレーションに）

**[⬆ back to top関連](#contents)**

## ORM <a id="orm"></a>

_ORMに関するGoライブラリ、ツール、または資料です。_

- [bob](https://github.com/stephenafamo/bob) - Go用のSQLクエリビルダーおよびORM/ファクトリジェネレーター。SQLBoilerの継承者
- [bun](https://github.com/uptrace/bun) - SQL-first Golang ORM。go-pgの継承者。
- [cacheme](https://github.com/Yiling-J/cacheme-go) - スキーマベース、型付きのRedisキャッシュ/メモ化フレームワーク（Go用）。
- [CQL](https://github.com/FrancoLiberali/cql) - GORMに構築されたもので、自動生成コードに基づくコンパイル時検証クエリを追加。
- [ent](https://github.com/facebook/ent) - Go用のエンティティフレームワーク。シンプルでありながら強力なORMでデータのモデル化とクエリを実現。
- [go-dbw](https://github.com/hashicorp/go-dbw) - データベース操作をラップしたシンプルなパッケージ。
- [go-firestorm](https://github.com/jschoedt/go-firestorm) - Google/Firebase Cloud Firestore用のシンプルなORM。
- [go-sql](https://github.com/rushteam/gosql) - MySQL用の簡単なORM。
- [go-sqlbuilder](https://github.com/huandu/go-sqlbuilder) - 柔軟かつ強力なSQL文字列ビルダー＋ゼロ設定のORM。
- [go-store](https://github.com/gosuri/go-store) - シンプルで高速なRedisベースのキー値ストアライブラリ（Go用）。
- [golobby/orm](https://github.com/golobby/orm) - シンプル、高速、型安全、ジェネリックなORMで開発者の満足を実現。
- [GORM](https://github.com/go-gorm/gorm) - Golang用の素晴らしいORMライブラリ。開発者に親切であることを目指す。
- [gormt](https://github.com/xxjwxc/gormt) - MySQLデータベースをGoのGORM構造体に変換。
- [gorp](https://github.com/go-gorp/gorp) - Go用の関係データ保存、ORM風ライブラリ。
- [grimoire](https://github.com/Fs02/grimoire) - GrimoireはGo用のデータベースアクセス層およびバリデーションです。（サポート：MySQL、PostgreSQLおよびSQLite3）。
- [lore](https://github.com/abrahambotros/lore) - シンプルで軽量な擬似ORM／擬似構造マッピング環境（Go用）。
- [marlow](https://github.com/marlow/marlow) - プロジェクト構造体から生成されたORMでコンパイル時安全性を確保。
- [pop/soda](https://github.com/gobuffalo/pop) - MySQL、PostgreSQL、SQLite用のデータベースマイグレーション、作成、ORMなど。
- [Prisma](https://github.com/prisma/prisma-client-go) - Prisma Client Go、Go用の型安全データベースアクセス。
- [reform](https://github.com/go-reform/reform) - 非空インターフェースとコード生成に基づくGo用のより良いORM。
- [rel](https://github.com/go-rel/rel) - Golang用の現代的なデータベースアクセス層 — テスト可能、拡張可能で、クリーンかつ洗練されたAPIを構築。
- [SQLBoiler](https://github.com/volatiletech/sqlboiler) - ORMジェネレーター。あなたのデータベーススキーマに最適化された、機能豊かで高速なORMを生成します。
- [upper.io/db](https://github.com/upper/db) - アダプタを用いて、異なるデータソースにインタラクションを行うためのシングルインターフェース。成熟したデータベースドライバーをラップするアダプタを利用します。
- [XORM](https://gitea.com/xorm/xorm) - Go向けのシンプルかつ強力なORM。 (サポート：MySQL、MyMysql、PostgreSQL、Tidb、SQLite3、MsSqlおよびOracle)。
- [Zoom](https://github.com/albrow/zoom) - Redisに基づく高速データストアとクエリエンジン。

**[⬆ back to top関連](#contents)**

## パッケージ管理 <a id="package-management"></a>

_パッケージ管理に関するGoライブラリ、ツール、または資料です。_

- [go modules](https://golang.org/cmd/go/#hdr-Modules__module_versions__and_more) - モジュールはソースコードの交換およびバージョン管理の単位です。goコマンドはモジュールの作業に直接対応しており、他のモジュールの依存関係を記録および解決できます。

_パッケージ管理に関するGoライブラリ、ツール、または資料です。_

- [gup](https://github.com/nao1215/gup) - go installでインストールされたバイナリを更新します。
- [modup](https://github.com/chaindead/modup) - Goの依存関係更新用のターミナルUI。古くなったモジュールの検出と選別アップグレードをサポート。
- [syft](https://github.com/anchore/syft) - コンテナイメージおよびファイルシステムからソフトウェアバイオマテリアル（SBOM）を生成するCLIツールおよびGoライブラリ。

**[⬆ back to top関連](#contents)**

## 性能 <a id="performance"></a>

- [ebpf-go](https://github.com/cilium/ebpf) - eBPFプログラムの読み込み、コンパイル、デバッグに必要なユーティリティを提供します。
- [go-instrument](https://github.com/nikolaydubina/go-instrument) - すべてのメソッドおよび関数にスパンを自動的に追加します。
- [go-perfstat](https://github.com/go-perfstat/go) - Go向けの軽量なパフォーマンス統計と実行時間の集計。
- [jaeger](https://github.com/jaegertracing/jaeger) - 分散トレースシステム。
- [mm-go](https://github.com/joetifa2003/mm-go) - Go向けの汎用的手動メモリ管理。
- [otelinji](https://github.com/hedhyw/otelinji) - OpenTelemetryによる関数へのスパン追加用の自動インストールツール。
- [pixie](https://github.com/pixie-labs/pixie) - eBPFを用いたGoアプリケーションへのインストラクショントレースなし。
- [profile](https://github.com/pkg/profile) - Go向けのシンプルなプロファイリングサポートパッケージ。
- [statsviz](https://github.com/arl/statsviz) - Goアプリケーションの実行時統計をリアルタイムで可視化。
- [tracer](https://github.com/kamilsk/tracer) - シンプルで軽量なトレース。

**[⬆ back to top関連](#contents)**

## クエリ言語 <a id="query-language"></a>

- [api-fu](https://github.com/ccbrown/api-fu) - 包括的なGraphQL実装。
- [dasel](https://github.com/tomwright/dasel) - コマンドラインからセレクタを使ってデータ構造をクエリおよび更新。jq/yqに類似ですが、JSON、YAML、TOMLおよびXMLをサポートし、実行時依存関係なし。
- [gojsonq](https://github.com/thedevsaddam/gojsonq) - JSONデータに対するクエリを行うためのシンプルなGoパッケージ
- [goven](https://github.com/SeldonIO/goven) - 任意のデータベーススキーマに即座に導入可能なクエリ言語
- [gqlgen](https://github.com/99designs/gqlgen) - go generateベースのGraphQLサーバーライブラリ
- [grapher](https://github.com/reaganiwadha/grapher) - Goのジェネリクスを活用したGraphQLフィールドビルダーに加えて、追加のユーティリティと機能を提供
- [graphql](https://github.com/neelance/graphql-go) - 使いやすさに焦点を当てたGraphQLサーバー
- [graphql-go](https://github.com/graphql-go/graphql) - Go向けのGraphQL実装
- [gws](https://github.com/Zaba505/gws) - Apollosの"WebSocket上のGraphQL"クライアントおよびサーバー実装
- [jsonpath](https://github.com/AsaiYusuke/jsonpath) - JSONPath文法に基づいてJSONデータの一部を取得するためのクエリライブラリ
- [jsonql](https://github.com/elgs/jsonql) - GolangにおけるJSONクエリ表現ライブラリ
- [jsonslice](https://github.com/bhmj/jsonslice) - JSONPathクエリに高度なフィルタを適用
- [mql](https://github.com/hashicorp/mql) - モデルクエリ言語（mql）は、データベースモデルに対してクエリを行うための言語
- [play](https://github.com/paololazzari/play) - grep、sed、awk、jqおよびyqなどの好きなプログラムを実験できるTUIプレイヤー
- [rql](https://github.com/a8m/rql) - REST API向けのリソースクエリ言語
- [rqp](https://github.com/timsolov/rest-query-parser) - REST API 用のクエリパーサー。フィルタリング、バリデーション、どちらも `AND`, `OR` の操作がクエリ内で直接サポートされています.
- [straf](https://github.com/SonicRoshan/straf) - Go構造体をGraphQLオブジェクトに簡単に変換

**[⬆ back to top関連](#contents)**

## リフレクション <a id="reflection"></a>

- [copy](https://github.com/gotidy/copy) - 異なる型の構造体を高速にコピーするパッケージ
- [Deepcopier](https://github.com/ulule/deepcopier) - Goにおけるシンプルな構造体コピー
- [go-deepcopy](https://github.com/tiendc/go-deepcopy) - 高速な深層コピーライブラリ
- [goenum](https://github.com/lvyahui8/goenum) - ジェネリクスとリフレクションに基づく共通の列挙構造体で、列挙を迅速に定義し、便利なデフォルトメソッドを用いることができる
- [gotype](https://github.com/wzshiming/gotype) - Goのソースコードをパースする、reflectパッケージのように使用できる
- [gpath](https://github.com/tenntenn/gpath) - Goのリフレクションで構造体フィールドにアクセスするためのライブラリ
- [objwalker](https://github.com/rekby/objwalker) - リフレクションを使ってGoオブジェクトを順に走査する
- [reflectpro](https://github.com/gontainer/reflectpro) - Goにおける呼び出し元、コピー、取得、設定メソッドの処理
- [reflectutils](https://github.com/muir/reflectutils) - リフレクションを使ったヘルパー関数：構造体タグの解析；再帰的な走査；文字列から値を埋め込む

**[⬆ back to top関連](#contents)**

## リソース埋め込み <a id="resource-embedding"></a>

- [debme](https://github.com/leaanthony/debme) - 既存の サブディレクトリから を作成します. `embed.FS` `embed.FS`
- [embed](https://pkg.go.dev/embed) - パッケージembedは、実行中のGoプログラムに埋め込まれたファイルにアクセスできるようにする
- [rebed](https://github.com/soypat/rebed) - Go 1.16 の `embed.FS` タイプに基づき、フォルダ構造とファイルを再構築します
- [vfsgen](https://github.com/shurcooL/vfsgen) - 指定された仮想ファイルシステムを静的に実装するvfsdata.goファイルを生成する

**[⬆ back to top関連](#contents)**

## 科学計算・データ分析 <a id="science-and-data-analysis"></a>

_科学計算・データ分析に関するGoライブラリ、ツール、または資料です。_

- [bradleyterry](https://github.com/seanhagen/bradleyterry) - ペア比較に用いるブラッドリー・テリーモデルを提供する
- [calendarheatmap](https://github.com/nikolaydubina/calendarheatmap) - GitHubの貢献活動をインスピレーションとして作成されたシンプルなカレンダー熱マップ
- [chart](https://github.com/vdobler/chart) - Goで使用できるシンプルなチャートプロットライブラリ。複数のグラフタイプをサポートする
- [dataframe-go](https://github.com/rocketlaunchr/dataframe-go) - 機械学習および統計に用いるデータフレーム（pandasに類似）
- [decimal](https://github.com/db47h/decimal) - パッケージdecimalは、任意精度の小数浮動小数点演算を実装する
- [entitydebs](https://github.com/ndabAP/entitydebs) - 非説明文書のテキスト中に存在するエンティティをプログラム的に分析するための社会科学ツール。内蔵の依存解析器を備える
- [evaler](https://github.com/soniah/evaler) - シンプルな浮動小数点演算式評価器
- [ewma](https://github.com/VividCortex/ewma) - 指数加重移動平均
- [geom](https://github.com/skelterjohn/geom) - Go向けの2次元幾何学
- [go-dsp](https://github.com/mjibson/go-dsp) - Goでのデジタル信号処理
- [go-estimate](https://github.com/milosgajdos/go-estimate) - Goで実装された状態推定およびフィルタリングアルゴリズム
- [go-gt](https://github.com/ThePaw/go-gt) - 「Go」言語で書かれたグラフ理論アルゴリズン
- [go-hep](https://github.com/go-hep/hep) - 高エネルギー物理学の分析を容易に実行するためのライブラリとツールのセット
- [godesim](https://github.com/soypat/godesim) - イベントベースシミュレーションに用いる拡張された／多変量ODEソルバーフレームワーク（シンプルなAPI）
- [goent](https://github.com/kzahedi/goent) - エントロピー測定のGo実装
- [gograph](https://github.com/hmdsefi/gograph) - Goのジェネリックグラフライブラリで、数学的なグラフ理論およびアルゴリズムを提供する。
- [gonum](https://github.com/gonum/gonum) - GonumはGoプログラミング言語向けの数値ライブラリのセットであり、行列、統計、最適化などに含まれる。
- [gonum/plot](https://github.com/gonum/plot) - gonum/plotはGoでプロットを作成および描画するためのAPIを提供する。
- [goraph](https://github.com/gyuho/goraph) - 純Goによるグラフ理論ライブラリ（データ構造、アルゴリズム可視化）。
- [gosl](https://github.com/cpmech/gosl) - Goの科学計算ライブラリで、線形代数、FFT、幾何学、NURBS、数値解析、確率、最適化、微分方程式などがある。
- [GoStats](https://github.com/OGFris/GoStats) - GoStatsは機械学習分野で主に使用されるオープンソースGo言語ライブラリで、統計測定関数の大部分をカバーしている。
- [graph](https://github.com/yourbasic/graph) - 基本的なグラフアルゴリズムのライブラリ。
- [hdf5](https://github.com/scigolib/hdf5) - 純GoによるHDF5ファイルフォーマットの実装で、科学データの保存と交換を可能にする。
- [insyra](https://github.com/HazelnutParadise/insyra) - 統計、可視化、Parquetサポート、Python統合を備えたデータ分析ライブラリ。
- [jsonl-graph](https://github.com/nikolaydubina/jsonl-graph) - グラフvizをサポートしたJSONLグラフを操作するツール。
- [matlab](https://github.com/scigolib/matlab) - CGOを使わずにMATLAB .matファイル（v5-v7.3）を読み書きするための純Goライブラリ。
- [MatProInterface.go](https://github.com/MatProGo-dev/MatProInterface.go) - MatProInterface.goは、Goで数学プログラム（例：凸最適化問題）を定義するためのオープンソースパッケージ。
- [matrix](https://github.com/Arceus-7/matrix) - Go向けのシンプルでジェネリック、依存関係ゼロの行列数学パッケージで、算術、分解、線形システム解決をサポート。
- [ode](https://github.com/ChristopherRabotin/ode) - 通常微分方程式（ODE）ソルバーで、拡張状態とチャンネルベースの停止条件をサポート。
- [orb](https://github.com/paulmach/orb) - 2D幾何型で、クリッピング、GeoJSONおよびMapbox Vector Tileをサポート。
- [pagerank](https://github.com/alixaxel/pagerank) - Goで実装された重み付きPageRankアルゴリズム。
- [piecewiselinear](https://github.com/sgreben/piecewiselinear) - 小さな線形補間ライブラリ。
- [PiHex](https://github.com/claygod/PiHex) - 「Bailey-Borwe-Plouffe」アルゴリズムによる十六進数のπの実装。
- [Poly](https://github.com/bebop/poly) - Goパッケージで生物工学を実現するもの。
- [rootfinding](https://github.com/khezen/rootfinding) - 二次関数の根を求めるための根探索アルゴリズムライブラリ。
- [simd](https://github.com/tphakala/simd) - Goのスライスに対して、マルチアーキテクチャアセンブリによるベクトルおよびSIMD操作を提供する
- [sparse](https://github.com/james-bowman/sparse) - Goの稀疏行列形式で線形代数をサポートし、科学計算および機械学習アプリケーションに適合する。gonum行列ライブラリと互換性を持つ
- [stats](https://github.com/montanaflynn/stats) - Golang標準ライブラリに含まれない一般的な関数を提供する統計パッケージ
- [streamtools](https://github.com/nytlabs/streamtools) - データストリームを扱うための汎用的なグラフィカルツール
- [taxonkit](https://github.com/shenwei356/taxonkit) - 実用的で効率的なNCBI分類ツールキット。系統の照合、フォーマット変換、フィルタリング、カスタムtaxdumpファイルの作成をサポート
- [TextRank](https://github.com/DavidBelicza/TextRank) - Golangで実装されたTextRank（拡張機能：要約、重み付け、フレーズ抽出）およびマルチスレッド（goroutine）対応
- [topk](https://github.com/keilerkonzept/topk) - HeavyKeeperアルゴリズムに基づくスライディングウィンドウおよび定常トップ-Kスケッチ
- [triangolatte](https://github.com/tchayen/triangolatte) - 2D三角化ライブラリ。線や多角形（点に基づく）をGPUの言語に変換できる

**[⬆ back to top関連](#contents)**

## セキュリティ <a id="security"></a>

_セキュリティに関するGoライブラリ、ツール、または資料です。_

- [acmetool](https://github.com/hlandau/acme) - ACME（Let's Encrypt）クライアントツールで自動更新をサポート
- [acme-proxy](https://github.com/esnet/acme-proxy) - ポート80を開けずにインターネットにアクセスする場合でも、ACME http-01チャレンジを解決し、外部証明機関から証明書を取得
- [acopw-go](https://sr.ht/~jamesponddotco/acopw-go/) - Go用の小型かつ暗号的に安全なパスワード生成パッケージ
- [acra](https://github.com/cossacklabs/acra) - ネットワーク暗号プロキシにより、データ漏洩を防ぐデータベースベースアプリケーションの保護：強力な選択暗号、SQLインジェクション防止、インシデント検知システム
- [aes-ctr-drbg](https://github.com/sixafter/aes-ctr-drbg) - NIST SP 800-90Aで指定されたAESカウンターモード（AES-CTR-DRBG）に基づく決定論的ランダムビット生成器
- [age](https://github.com/FiloSottile/age) - シンプルで現代的かつ安全な暗号ツール（およびGoライブラリ）で、小さな明示的キー、設定オプションなし、UNIXスタイルの合成を実現
- [argon2-hashing](https://github.com/andskur/argon2-hashing) - Goのargon2パッケージを軽量にラップしたツールで、Go標準ライブラリのBcryptおよびsimple-scryptパッケージと類似した動作を実現
- [autocert](https://pkg.go.dev/golang.org/x/crypto/acme/autocert) - Let's Encrypt証明書を自動生成し、TLSサーバーを開始
- [BadActor](https://github.com/jaredfolkins/badactor) - メモリ内に存在し、fail2banの精神に基づいたアプリケーション駆動型のジャイル
- [beelzebub](https://github.com/mariocandela/beelzebub) - AIを活用した低コードハーネスフレームワーク、システム仮想化を活用
- [booster](https://github.com/anatol/booster) - 高速なinitramfs生成ツールで、フルディスク暗号化をサポート
- [Cameradar](https://github.com/Ullaakut/cameradar) - 監視カメラからのRTSPストリームをリモートでハッキングするツールおよびライブラリ
- [canery](https://github.com/rluders/canery) - 極小で状態を持たない認可エンジンで、評価モデルをプラグインとして利用可能。
- [certificates](https://github.com/mvmaasakkers/certificates) - TLS証明書を生成するための意見を反映したツール。
- [CertMagic](https://github.com/caddyserver/certmagic) - 成熟し、頑健で強力なACMEクライアント統合により、完全に管理されたTLS証明書の発行と更新を可能に。
- [Coraza](https://github.com/corazawaf/coraza) - 企業向け、ModSecurityおよびOWASP CRSと互換性のあるWAFライブラリ。
- [Crenox](https://github.com/crenoxhq/crenox) - Aho-Corasickを用いたゼロ依存のプリコミットシークレットスキャナーで、高性能な認証情報の漏洩検出を実現。
- [deidentify](https://github.com/aliengiraffe/deidentify) - テキストおよび構造化データから個人識別情報を取り除く、決定論的かつフォーマットを保持する処理。
- [dongle](https://github.com/golang-module/dongle) - シンプルで、意味的にも開発者に親しみやすいGoパッケージ。暗号化・デコードおよび暗号化・復号を実現。
- [dotlock](https://github.com/ahmadraza100/dotlock) - 暗号化された.envのフォールド管理ツール。複数の環境とプロファイルでシークレットを管理するためのインタラクティブTUIを備えている。
- [encid](https://github.com/bobg/encid) - 暗号化された整数IDのエンコードとデコード。
- [entpassgen](https://github.com/andreimerlescu/entpassgen) - 拡張されたコマンドライン引数を備えたエントロピーパスワードジェネレーター。安全に数字、パスワード、および暗号語を含む不規則な辞書語と記号・数字を混合したパスワードを生成。
- [firewalld-rest](https://github.com/prashantgupta24/firewalld-rest) - Linuxサーバー上のfirewalldルールを動的に更新するRESTアプリケーション。
- [fort](https://github.com/djadmin/fort) - macOSのセキュリティ設定を16項目で検証し、スコアを報告し、安全に修正可能な問題を自動で解決。単一バイナリで、Homebrewでインストール可能。
- [go-generate-password](https://github.com/m1/go-generate-password) - CLIまたはライブラリとして利用可能なパスワードジェネレーター。
- [go-htpasswd](https://github.com/tg123/go-htpasswd) - Go向けのApache htpasswdパーサー。
- [go-password-validator](https://github.com/lane-c-wagner/go-password-validator) - 原始的な暗号エントロピー値に基づくパスワードバリデーション。
- [go-peer](https://github.com/number571/go-peer) - 安全で匿名の分散システムを構築するためのソフトウェアライブラリ。
- [go-yara](https://github.com/hillu/go-yara) - Go バインディング for [YARA](https://github.com/plusvic/yara)、"マルウェア研究者（そして誰でも）にとってのパターンマッチングのスイス・ケンズ"です.
- [goArgonPass](https://github.com/dwin/goArgonPass) - Argon2パスワードハッシュと検証。既存のPythonおよびPHP実装と互換性を持つように設計。
- [goSecretBoxPassword](https://github.com/dwin/goSecretBoxPassword) - パスワ及暗号化を安全に実行するための、おそらく過剰に慎重なパッケージ。
- [gost-crypto](https://github.com/rekurt/gost-crypto) - Goライブラリ。ロシアのGOST暗号標準（デジタル署名、Streebogハッシュ、Kuznechik暗号、MGM AEAD）をOpenSSL gost-engineでサポート。
- [gspy](https://github.com/Mutasem-mk4/gspy) - ライブGoプロセスのgoroutineからsyscallへのフォレインインスペクタ。
- [Interpol](https://github.com/avahidi/interpol) - フラグベースのデータ生成ツール（フッジングおよびパーセンテーションテスト用）
- [leakhound](https://github.com/nilpoona/leakhound) - センシティブな構造体フィールドの誤ったログ記録を静的解析で検出し、ログによるデータ漏洩を防止するツール
- [lego](https://github.com/go-acme/lego) - 純GoのACMEクライアントライブラリおよびCLIツール（Let's Encryptとの使用に適用）
- [luks.go](https://github.com/anatol/luks.go) - 純GolangによるLUKSパーティション管理ライブラリ
- [mcprobe](https://github.com/tamish560/mcprobe) - MCPサーバー向けセキュリティスキャナー（プロンプト注入検出、ツールシャドウ、SARIF出力に対応）
- [memguard](https://github.com/awnumar/memguard) - メモリ上でのセンシティブな値を扱うための純Goライブラリ
- [multikey](https://github.com/adrianosela/multikey) - シャミールの秘密共有アルゴリズムに基づくn-out-of-N鍵暗号化/復号フレームワーク
- [nacl](https://github.com/kevinburke/nacl) - NaCLのAPIセットのGo実装
- [optimus-go](https://github.com/pjebs/optimus-go) - クヌースのアルゴリズンを用いたIDハッシュとオブフスケーション
- [passlib](https://github.com/hlandau/passlib) - 将来対応可能なパスワードハッシュライブラリ
- [passwap](https://github.com/zitadel/passwap) - 異なるパスワードハッシュアルゴリズム間の統一実装を提供
- [pii-shield](https://github.com/pii-shield/pii-shield) - Kubernetes向けゼロコードログクリーンアップサード（ログからPIIを削除）
- [pm](https://github.com/nicola-strappazzon/password-manager) - OpenPGP暗号化でデータを保存するUnixスタイルのパスワードマネージャ（Goで実装）
- [procscope](https://github.com/Mutasem-mk4/procscope) - eBPFを用いたプロセススコープのランタイムインベスティゲーター（プロセスライフサイクル、ファイル活動、ネットワーク接続をトレース）
- [qrand](https://github.com/bitfield/qrand) - ANU量子数（AQN）APIのクライアント、量子力学的に安全な乱数データを提供
- [Razify](https://github.com/Hossiy21/razify) - .envファイルの漏洩セレクトや環境変化のスキャン・検証・アудィットを行うCLIツール
- [redact](https://github.com/alesr/redact) - slogベースのログから設定可能なパイプラインでセンシティブ情報を削除
- [SafeDep/vet](https://github.com/safedep/vet) - 悪意あるオープンソースパッケージへの対策
- [secret](https://github.com/rsjethani/secret) - あなたのシークレットがログやstd\*などに漏れることを防止
- [secretgenerator](https://github.com/rafaelperoco/secretgenerator) - CSPRNGをバックアップした認証情報生成ツール（パスワード、パスフレーズ、シークレット、APIキー、PINに対してバージョン付きJSONスキーマを提供）
- [secure](https://github.com/unrolled/secure) - GoにおけるHTTPミドルウェアで、いくつかの迅速なセキュリティ成果を実現する.
- [secureio](https://github.com/xaionaro-go/secureio) - XChaCha20-poly1305、ECDH および ED25519 を用いた `io.ReadWriteCloser` に基づく鍵交換＋認証＋暗号化のラッパーおよびマルチプレックス
- [simple-scrypt](https://github.com/elithrar/simple-scrypt) - スクリプトパッケージで、シンプルで明確なAPIと自動コストカーブが内蔵されている.
- [ssh-vault](https://github.com/ssh-vault/ssh-vault) - SSHキーを使って暗号化／復号を行う.
- [sslmgr](https://github.com/adrianosela/sslmgr) - acme/autocertを高レベルでラップしたことで、SSL証明書の作成が簡単になる.
- [teler-waf](https://github.com/kitabisa/teler-waf) - teler-wafは、GoのHTTPミドルウェアであり、ウェブ攻撃に対して防御し、Goベースのウェブアプリケーションのセキュリティを向上させるためのteler IDS機能を提供する。非常にカスタマイズ可能で、既存のGoアプリケーションへの統合が容易である.
- [themis](https://github.com/cossacklabs/themis) - 14言語に対応する、高レベルの暗号化ライブラリ。典型的なデータセキュリティタスク（安全なデータ保存、安全なメッセージング、ゼロ知識証明認証）を解決できる。マルチプラットフォームアプリに最適である.
- [urusai](https://github.com/calpa/urusai) - Urusai（日本語で「騒がしい」）は、GoによるランダムHTTP/DNSトラフィックノイズ生成器で、ブラウジング時にプライバシーを保護するためにデジタルな煙幕を作成する.
- [veil](https://github.com/getveil/veil) - AIコードアグエントがAPI認証情報を隠すためのローカルHTTPSプロキシ。OSキーチェーン統合、フォーマット認識可能なプレースホルダー、SQLiteアудィットログを提供.


**[⬆ back to top関連](#contents)**

## シリアライズ <a id="serialization"></a>

_シリアライズに関するGoライブラリ、ツール、または資料です。_

- [bambam](https://github.com/glycerine/bambam) - GoからCap'n Protoスキーマを生成するツール.
- [bel](https://github.com/32leaves/bel) - Goの構造体／インターフェースからTypeScriptインターフェースを生成する。JSON RPCに有用である.
- [binstruct](https://github.com/ghostiam/binstruct) - Golangバイナリデコーダーでデータを構造体にマッピングする.
- [cbor](https://github.com/fxamacker/cbor) - 小さな、安全で使いやすいCBOR暗号化・復号化ライブラリ.
- [colfer](https://github.com/pascaldekloe/colfer) - Colferバイナリフォーマット用のコード生成ツール.
- [csvutil](https://github.com/jszwec/csvutil) - 高性能でGo本質的なCSVレコードの暗号化・復号化ライブラリを、Goの構造体にマッピングする.
- [elastic](https://github.com/epiclabs-io/elastic) - 実行時におけるスライス、マップ、または他の未知の値を異なる型に変換できる。どんな場合でも可能である.
- [fixedwidth](https://github.com/huydang284/fixedwidth) - 固定幅のテキストフォーマット（UTF-8対応）.
- [fwencoder](https://github.com/o1egl/fwencoder) - Go向けの固定幅ファイルパーサー（エンコーディングおよびデコーディングライブラリ）.
- [go-capnproto](https://github.com/glycerine/go-capnproto) - Go向けのCap'n Protoライブラリおよびパーサー.
- [go-codec](https://github.com/ugorji/go) - 高性能で機能豊富、Go本質的なmsgpack、cbor、jsonの暗号化・復号化およびRPCライブラリ。実行時ベースまたはコード生成をサポートする.
- [go-csvlib](https://github.com/tiendc/go-csvlib) - 高レベルかつ機能豊富なCSVシリアル化／デシリアル化ライブラリ。
- [goprotobuf](https://github.com/golang/protobuf) - Goサポート。プロトコルバッファーズのためのライブラリとプロトコルコンパイラプラグインとして提供。
- [gotiny](https://github.com/raszia/gotiny) - 効率的なGoシリアル化ライブラリ。gotinyはコード生成型シリアル化ライブラリとほぼ同等の速度を実現。
- [jsoniter](https://github.com/json-iterator/go) - 高パフォーマンスであり、"encoding/json"と100％互換の即時置き換え。
- [mus-go](https://github.com/mus-format/mus-go) - Go用のMUSフォーマットシリアル化ライブラリ。
- [php_session_decoder](https://github.com/yvasiyarov/php_session_decoder) - PHPセッションフォーマットおよびPHPのSerialize/Unserialize関数との対話を行うGo言語ライブラリ。
- [pletter](https://github.com/vimeda/pletter) - メッセージブローカー向けプロトメッセージをラップするための標準的な方法。
- [proto](https://github.com/emicklei/proto) - Googleプロトコルバッファーズの.protoファイルをパーサーおよびライターとして提供。
- [structomap](https://github.com/tuvistavie/structomap) - 静的構造から簡単に動的にマップを生成するためのライブラリ。
- [unitpacking](https://github.com/recolude/unitpacking) - ユニットベクトルを可能な限り少ないバイトでパッキングするためのライブラリ。

**[⬆ back to top関連](#contents)**

## サーバーアプリケーション <a id="server-applications"></a>

- [algernon](https://github.com/xyproto/algernon) - Lua、Markdown、GCSSおよびAmberに対応したHTTP/2ウェブサーバー。
- [Caddy](https://github.com/caddyserver/caddy) - Caddyは、設定と使用が簡単なHTTP/2ウェブサーバーの代替案。
- [consul](https://www.consul.io/) - サービス発見、監視、設定を行うためのツール。
- [cortex-tenant](https://github.com/blind-oracle/cortex-tenant) - メトリクスラベルに基づき、CortexのテナントIDヘッダーを追加するPrometheusリモート書き込みプロキシ。
- [devd](https://github.com/cortesi/devd) - 開発者向けのローカルウェブサーバー。
- [discovery](https://github.com/Bilibili/discovery) - 耐性のある中間層のロードバランシングおよびフェイルオーバーを実現するレジストリ。
- [dudeldu](https://github.com/krotik/dudeldu) - シンプルなSHOUTcastサーバー。
- [Easegress](https://github.com/megaease/easegress) - 観測性と拡張性を備えた、クラウドネイティブな高可用性・高性能なトラフィックオーケストレーションシステム。
- [Engity's Bifröst](https://bifroest.engity.org/) - 高度にカスタマイズ可能なSSHサーバー。ユーザーがローカルまたはコンテナ内でセッションを実行するための認証方法が複数用意されている。
- [etcd](https://github.com/etcd-io/etcd) - 共有設定およびサービス発見用の高可用性キーバリューストア。
- [Euterpe](https://github.com/ironsmile/euterpe) - 自前でホストできる音声ストリーミングサーバー。Web UIおよびREST APIが内蔵されている。
- [Fider](https://github.com/getfider/fider) - Fiderは、顧客からのフィードバックを収集・整理するオープンプラットフォームです。
- [Flagr](https://github.com/checkr/flagr) - Flagrは、機能フラグとA/Bテストを行うオープンソースサービスです。
- [flipt](https://github.com/markphelps/flipt) - GoとVue.jsで構成された、自立型の機能フラグソリューション
- [flue](https://github.com/karnstack/flue) - ブラウザタブに接続されたターミナルセッションを提供する、自前でホストできるデーモン。タブが閉じてもセッションは継続します。
- [go-feature-flag](https://github.com/thomaspoignant/go-feature-flag) - シンプルで、完全かつ軽量な自前ホスト型機能フラグソリューション。100％オープンソースです。
- [go-proxy-cache](https://github.com/fabiocicerchia/go-proxy-cache) - Goで構成された、キャッシュ機能付きのシンプルなリバースプロキシ。Redisを使用。
- [gondola](https://github.com/bmf-san/gondola) - YAMLベースのGoリバースプロキシ。
- [goshs](https://github.com/patrickhener/goshs) - ファイルのアップロード／ダウンロード、WebDAV、SFTP、SMB、TLS、認証、共有リンクをサポートするSimpleHTTPServerの代替品。
- [Kono](https://github.com/starwalkn/kono) - Goで構成された軽量かつ拡張可能なAPIゲートウェイ。並列ファンアウト、柔軟な集約、ゼロ設定のマジック機能を備えています。
- [lets-proxy2](https://github.com/rekby/lets-proxy2) - Let's-Encryptから証明書を発行し、HTTPSを処理するリバースプロキシ。
- [minio](https://github.com/pgsty/minio) - minio（オブジェクトストレージサービス）のコミュニティが維持するフォーク。
- [Moxy](https://github.com/sinhashubham95/moxy) - Moxyはシンプルなモックとプロキシアプリケーションサーバーです。モックエンドポイントを作成できるほか、モックが存在しない場合にリクエストをプロキシできます。
- [nginx-prometheus](https://github.com/blind-oracle/nginx-prometheus) - Nginxのログをパーサーとしてプロメートスにエクスポートするツール。
- [nsq](https://nsq.io/) - リアルタイムで分散されたメッセージングプラットフォーム。
- [OpenRun](https://github.com/openrundev/openrun) - Google Cloud RunおよびAWS App Runnerのオープンソース代替品。チーム内でのツールの簡単にデプロイできます。
- [pocketbase](https://github.com/pocketbase/pocketbase) - PocketBaseは、1ファイルで構成されたリアルタイムバックエンドで、埋め込みデータベース（SQLite）とリアルタイムサブスクリプション、内蔵認証管理などがあります。
- [protoxy](https://github.com/camgraff/protoxy) - JSONリクエストボディをプロトコルバッファに変換するプロキシサーバー。
- [psql-streamer](https://github.com/blind-oracle/psql-streamer) - PostgreSQLからKafkaへデータイベントをストリーミングします。
- [relay](https://github.com/valtors/relay) - AIエージェント向けに40以上のツールを備えたMCPサーバー。ファイル操作、ウェブ検索、スクリーンショット、マルチエージェント連携など。単一のGoバイナリです。
- [riemann-relay](https://github.com/blind-oracle/riemann-relay) - Riemannイベントをロードバランシングし、またはそれらをCarbonに変換するリレー。
- [RoadRunner](https://github.com/spiral/roadrunner) - 高性能PHPアプリケーションサーバー、ロードバランサ、プロセスマネージャー
- [SFTPGo](https://github.com/drakkan/sftpgo) - 完全に機能備え、高度にカスタマイズ可能なSFTPサーバー。FTP/SおよびWebDAVサポートをオプションで提供し、ローカルファイルシステムやS3やGoogle Cloud Storageといったクラウドストレージバックエンドを提供可能。
- [Trickster](https://github.com/tricksterproxy/trickster) - HTTPリバースプロキシキャッシュおよびタイムシリーズアクセラレータ
- [wd-41](https://github.com/baalimago/wd-41) - ファイル変更時に自動でリロードを行うウェブ開発サーバー
- [whois](https://github.com/KincaidYang/whois) - ドメイン、IPv4/IPv-6アドレス、CIDR、ASNsに対する自前ホストWHOIS/RDAPクエリサービスおよびMCPサーバー
- [Wish](https://github.com/charmbracelet/wish) - SSHアプリケーションを作成できる！

**[⬆ back to top関連](#contents)**

## ストリーム処理 <a id="stream-processing"></a>

_ストリーム処理に関するGoライブラリ、ツール、または資料です。_

- [go-etl](https://github.com/Breeze0806/go-etl) - データソースの抽出、変換、ロード（ETL）に用いる軽量ツールキット
- [go-streams](https://github.com/reugn/go-streams) - Goのストリーム処理ライブラリ
- [goio](https://github.com/primetalk/goio) - Golang向けIO、ストリーム、フィバーの実装。Scalaのcatsおよびfs2ライブラリをインスピレーションとしている。
- [gostream](https://github.com/mariomac/gostream) - JavaのストリームAPIをインスピレーションにした型安全なストリーム処理ライブラリ
- [machine](https://github.com/whitaker-io/machine) - Goでストリームワーカーを書く・生成するためのライブラリ。内蔵のメトリクスとトレーサビリティを備えている。
- [nibbler](https://github.com/naughtygopher/nibbler) - マイクロバッチ処理に用いる軽量パッケージ
- [ro](https://github.com/samber/ro) - 反応型プログラミング：イベント駆動アプリケーション向けの宣言的かつ合成可能なAPI
- [signals](https://github.com/coregx/signals) - Angular Signalsをインスピレーションにした型安全な反応型ステート管理。計算値、効果、依存関係の追跡を含む。
- [stream](https://github.com/youthlin/stream) - Goのストリーム、Java 8のストリームに似たもの：Filter/Map/FlatMap/Peek/Sorted/ForEach/Reduce...
- [StreamSQL](https://github.com/rulego/streamsql) - リアルタイムデータ処理に用いる軽量ストリーミングSQLエンジン

**[⬆ back to top関連](#contents)**

## テンプレートエンジン <a id="template-engines"></a>

_テンプレートエンジンに関するGoライブラリ、ツール、または資料です。_

- [bagme](https://github.com/boxesandglue/bagme) - 純GoでTeX品質のタイプセットによるHTML/CSSからPDFへのレンダリング
- [ego](https://github.com/benbjohnson/ego) - Goでテンプレートを書ける軽量テンプレート言語。テンプレートはGoに変換され、コンパイルされる。
- [fasttemplate](https://github.com/valyala/fasttemplate) - シンプルで高速なテンプレートエンジン。テンプレートのプレースホルダーを置き換え、[text/template](https://golang.org/pkg/text/template/)に比べて最大10倍速い。
- [gomponents](https://www.gomponents.com) - 純粋なGoで実装されたHTML5コンポーネント。これに似たようなもの：`func(name string) g.Node { return Div(Class("headline"), g.Textf("Hi %v!", name)) }`。
- [got](https://github.com/goradd/got) - HeroおよびFasttemplateをインスピレーションにしたGoコードジェネレーター。インクルードファイル、カスタムタグ定義、注入されたGoコード、言語翻訳などがある。
- [goview](https://github.com/foolin/goview) - Goviewは、Goのhtml/templateに基づいた軽量、ミニマリズム、Go言語にふさわしいテンプレートライブラリで、Goのウェブアプリケーションの構築に用いられる。
- [gox](https://github.com/doors-dev/gox) - HTMLテンプレートをGo表現として第一クラスに、編集器との連携もスムーズ。
- [htmgo](https://htmgo.dev) - go + htmxでシンプルかつスケーラブルなシステムを構築。
- [jet](https://github.com/CloudyKit/jet) - ジェットテンプレートエンジン。
- [liquid](https://github.com/osteele/liquid) - Shopify LiquidテンプレートのGo実装。
- [maroto](https://github.com/johnfercher/maroto) - MarotoによるPDF作成のシンプルな方法。MarotoはBootstrapをインスピレーションとしており、gofpdfを使用。高速かつシンプル。
- [pongo2](https://github.com/flosch/pongo2) - Go向けのDjango風テンプレートエンジン。
- [quicktemplate](https://github.com/valyala/quicktemplate) - 高速で強力でありながら使いやすいテンプレートエンジン。テンプレートをGoコードに変換し、その後コンパイルする。
- [Razor](https://github.com/sipin/gorazor) - Golang向けのRazorビューエンジン。
- [Soy](https://github.com/robfig/soy) - Go向けのクロージャーテンプレート（Soyテンプレート）で、[official spec](https://developers.google.com/closure/templates/)を採用。
- [sprout](https://github.com/go-sprout/sprout) - Goテンプレートに使える便利なテンプレート関数。
- [tbd](https://github.com/lucasepe/tbd) - プレースホルダーを用いたシンプルなテキストテンプレート作成方法 - 追加のGitリポジトリメタデータを公開。
- [templ](https://github.com/a-h/templ) - 開発者向けツールが豊富なHTMLテンプレート言語。
- [templator](https://github.com/alesr/templator) - Go向けの型安全なHTMLテンプレートレンダリングエンジン。

**[⬆ back to top関連](#contents)**

## テスト <a id="testing"></a>

_テストに関するGoライブラリ、ツール、または資料です。_

### テストフレームワーク <a id="testing-frameworks"></a>

- [apitest](https://apitest.dev) - RESTベースのサービスやHTTPハンドラ向けのシンプルかつ拡張可能な振る舞いテストライブラリ。外部HTTP呼び出しのモックとシーケンス図のレンダリングをサポート。
- [arch-go](https://github.com/arch-go/arch-go) - Goプロジェクト向けのアーキテクチャテストツール。
- [assay](https://github.com/tushariitr-19/assay) - GoアグエントやMCPサーバーのテストに使用できるフレームワークに依存しない評価ライブラリ。決定論的なチェック、CI対応の終了コード、ゼロコードのYAMLベーステストを提供。
- [assert](https://github.com/go-playground/assert) - ネイティブGoテストと併用される基本的なアサーションライブラリ。カスタムアサーションの構成要素を提供。
- [baloo](https://github.com/h2non/baloo) - エンドツーエンドHTTPAPIテストを、表現力豊かで多様な形で簡単に実現。
- [be](https://github.com/carlmjohnson/be) - ミニマリズムを採用したジェネリックテストアサーションライブラリ。
- [biff](https://github.com/fulldump/biff) - Bifurcationテストフレームワーク、BDDと互換。
- [charlatan](https://github.com/percolate/charlatan) - テスト用の仮のインターフェース実装を生成するツール。
- [commander](https://github.com/SimonBaeumer/commander) - Windows、LinuxおよびOSXでのCLIアプリケーションのテスト用ツール
- [cupaloy](https://github.com/bradleyjkemp/cupaloy) - テストフレームワークに追加するシンプルなスナップショットテストアドオン
- [dbcleaner](https://github.com/khaiql/dbcleaner) - テスト用のシンプルなデータベース。Rubyの`database_cleaner`をインスピレーションとして作成。
- [dft](https://github.com/abecodes/dft) - テスト（またはそれ以上の用途）に用いる軽量かつ依存関係のないDockerコンテナ
- [dsunit](https://github.com/viant/dsunit) - SQL、NoSQL、構造化ファイルに対するデータストアテスト
- [embedded-postgres](https://github.com/fergusstrange/embedded-postgres) - Docker内で実行されるPostgresデータベースを、別のGoアプリケーションまたはテストの一部としてローカルに実行
- [endly](https://github.com/viant/endly) - 宣言型のエンドツーエンド機能テスト
- [envite](https://github.com/PerimeterX/envite) - 開発およびテスト環境の管理フレームワーク
- [fixenv](https://github.com/rekby/fixenv) - pytestのフィクスチャにインスパイアされたフィクスチャ管理エンジン
- [flute](https://github.com/suzuki-shunsuke/flute) - HTTPクライアントテストフレームワーク
- [frisby](https://github.com/verdverm/frisby) - REST APIテストフレームワーク
- [gherkingen](https://github.com/hedhyw/gherkingen) - BDD用のテンプレート生成器およびフレームワーク
- [ginkgo](https://onsi.github.io/ginkgo/) - Go用のBDDテストフレーム及
- [gnomock](https://github.com/orlangure/gnomock) - Docker内で実行される実際の依存関係（データベース、キャッシュ、さらにはKubernetesまたはAWS）を用いた統合テスト
- [go-carpet](https://github.com/msoap/go-carpet) - ターミナル上でテストカバレッジを確認するツール
- [go-cmp](https://github.com/google/go-cmp) - テストにおけるGo値の比較用パッケージ
- [go-hit](https://github.com/Eun/go-hit) - golangで書かれたHTTP統合テストフレームワークHit
- [go-httpbin](https://github.com/mccutchen/go-httpbin) - クライアントテスト用のさまざまなエンドポイントを備えたHTTPテストおよびデバッグツール
- [go-mutesting](https://github.com/jonbaldie/go-mutesting) - CI品質ゲート、カバレッジ認識型MSI、ベースライントラッキング、git-diffフィルタリングを備えたGo用のミューテーションテスト
- [go-mysql-test-container](https://github.com/arikama/go-mysql-test-container) - Go用のMySQLテストコンテナでMySQL統合テストを支援
- [go-snaps](http://github.com/gkampitakis/go-snaps) - GolangでのJestのようなスナップショットテスト
- [go-test-coverage](https://github.com/vladopajic/go-test-coverage) - 閾値以下にあるファイルのカバレッジを報告するツール
- [go-testdeep](https://github.com/maxatome/go-testdeep) - 極めて柔軟なGoによる深層比較、Goのテストパッケージを拡張
- [go-testing](https://github.com/tkrop/go-testing) - Goのテスト拡張機能で、強力に孤立した単体・コンポーネント・統合テストをシンプルに設定可能で、gomockおよびgockを拡張した高度なモックサポートを提供
- [go-testpredicate](https://github.com/maargenton/go-testpredicate) - テストの条件式スタイルのアサートライブラリで、詳細な診断出力が可能
- [go-vcr](https://github.com/dnaeon/go-vcr) - HTTP相互作用を記録・再現することで、高速かつ決定論的かつ正確なテストを実現
- [goblin](https://github.com/franela/goblin) - GoにおけるMochaのようなテストフレームワーク
- [goc](https://github.com/qiniu/goc) - GocはGoプログラミング言語向けの包括的なカバレッジテストシステム
- [gocheck](https://labix.org/gocheck) - gotestに代替するより高度なテストフレームワーク
- [GoConvey](https://github.com/smartystreets/goconvey/) - Web UIとリアルタイムリロードを備えたBDDスタイルのフレームワーク
- [gocrest](https://github.com/corbym/gocrest) - Goのアサートに用いる、可合成なHamcrest風マッチャー
- [godog](https://github.com/cucumber/godog) - Go向けのCucumber BDDフレームワーク
- [gofight](https://github.com/appleboy/gofight) - Go言語のルーターフレームワーク向けのAPIハンドラテスト
- [gogiven](https://github.com/corbym/gogiven) - Go向けのYATSPEC風BDDテストフレームドーム
- [gomatch](https://github.com/jfilipczyk/gomatch) - パターンに対してJSONをテストするためのライブラリ
- [gomega](https://onsi.github.io/gomega/) - Rspec風のマッチャー／アサートライブラリ
- [gospecify](https://github.com/stesla/gospecify) - これはGoコードのテストにBDD構文を提供します。rspecなどのライブラリを使用したことがある人なら、この構文は馴染みがあるでしょう
- [gosuite](https://github.com/pavlo/gosuite) - Go1.7のサブテストを活用して、`testing`に軽量なテストセットとセットアップ/テアダウン機能を提供。
- [got](https://github.com/ysmood/got) - 楽しいGoテストフレームワーク
- [gotest.tools](https://github.com/gotestyourself/gotest.tools) - Goのテストパッケージを補強し、一般的なパターンをサポートするパッケージのコレクション
- [Hamcrest](https://github.com/rdrdr/hamcrest) - 入力値に適用された場合に、自己説明的な結果を生成する、宣言型マッチャー対象のフレームワーク
- [httper](https://github.com/gustofarbi/httper) - JetBrainsの.httpファイル向けのCLI実行ツールで、スクリプト、アサート、gRPC、負荷テストをサポート
- [httpexpect](https://github.com/gavv/httpexpect) - 簡潔で宣言的であり、HTTPおよびREST APIの端到端テストに使いやすい
- [is](https://github.com/matryer/is) - Go向けのプロフェッショナルな軽量テストミニフレームワーク
- [jsonassert](https://github.com/kinbiko/jsonassert) - JSONパラメータが正しくシリアライズされているかを検証するためのパッケージ
- [keploy](https://github.com/keploy/keploy) - API呼び出しから自動的にテストケースとデータのモックを生成
- [omg.testingtools](https://github.com/dedalqq/omg.testingtools) - テストの際にプライベートフィールドの値を変更するためのシンプルなライブラリ
- [restit](https://github.com/yookoala/restit) - RESTful APIの統合テストを書くためにGoで提供されるマイクロフレームワーク
- [schema](https://github.com/jgroeneveld/schema) - リクエストおよびレスポンスに使われるJSONスキーマに即した簡単で迅速な表現マッチング
- [should](https://github.com/Kairum-Labs/should) - 依存関係がゼロのテストライブラリ、詳細な構造差分、人間が読みやすいエラーメッセージを提供
- [stop-and-go](https://github.com/elgohr/stop-and-go) - 並列処理用のテストヘルパー
- [testcase](https://github.com/adamluzsi/testcase) - 行動駆動開発（BDD）に適した自然なテストフレームワーク
- [testcerts](https://github.com/madflojo/testcerts) - テスト関数内で動的に自己署名証明書と証明書機関を生成
- [testcontainers-go](https://github.com/testcontainers/testcontainers-go) - Goパッケージで、自動化された統合/スモークテストに必要なコンテナベースの依存関係を作成・削除を簡単に行える。シンプルで使いやすいAPIにより、開発者はテスト中に実行すべきコンテナをプログラム的に定義し、テスト終了後にそのリソースを削除できる。
- [testfixtures](https://github.com/go-testfixtures/testfixtures) - Railsのテストフィクスチャに似たヘルパーで、データベースアプリケーションのテストを実行
- [Testify](https://github.com/stretchr/testify) - 標準のgoテストパッケージへのSacred拡張
- [Testo](https://github.com/ozontech/testo) - スイート、並列テスト、ホック、パラメータ化を備えたプラグインベースのテストフレームワーク。Pytestにインスパイアされた。
- [testsql](https://github.com/zhulongcheng/testsql) - テスト前にSQLファイルからテストデータを生成し、テスト終了後に削除する
- [testza](https://github.com/MarvinJWendt/testza) - 機能豊かなテストフレームドゥームで、色分けされた出力が特徴
- [tparse](https://github.com/mfridman/tparse) - go testの出力結果を要約するCLIツール。パイプ対応。go testのフラグと互換。
- [trial](https://github.com/jgroeneveld/trial) - 多くのバーチャルコードを書かずに、簡単に拡張可能なアサーションを提供
- [Tt](https://github.com/vcaesar/tt) - シンプルでカラフルなテストツール
- [wstest](https://github.com/posener/wstest) - WebSocketのHTTPハンドラーをユニットテストするためのクライアント

### モック <a id="mock"></a>

- [counterfeiter](https://github.com/maxbrunsfeld/counterfeiter) - 自立したモックオブジェクトを生成するツール
- [fabricator](https://github.com/Goldziher/fabricator) - Goにおけるモックおよびフェイクデータの型安全なファクトリ、factory_boyおよびinterface-forgeをインスピレーションとして作成
- [genmock](https://gitlab.com/so_literate/genmock) - Goのモックシステムでインターフェースメソッドの呼び出しをコードジェネレーターで構築
- [go-localstack](https://github.com/elgohr/go-localstack) - AWSのテストにおいてLocalStackを使用するためのツール
- [go-sqlmock](https://github.com/DATA-DOG/go-sqlmock) - データベース相互作用をテストするためのモックSQLドライバー
- [go-txdb](https://github.com/DATA-DOG/go-txdb) - テスト目的の主に単一トランザクションベースのデータベースドライバー
- [gomock](https://github.com/uber-go/mock) - Goプログラミング言語向けのモックフレームワーク
- [gomock](https://github.com/vibridi/gomock) - ジェネリクスをサポートする、型安全かつフレームワークに依存しないインターフェースモックを生成するCLIツール
- [govcr](https://github.com/seborama/govcr) - Golang用のHTTPモック：オフラインテスト用にHTTP相互作用を記録および再現
- [hoverfly](https://github.com/SpectoLabs/hoverfly) - HTTP(S)プロキシ：拡張可能なミドルウェアと使いやすいCLIを備えたREST/SOAP APIの記録およびシミュレーション
- [httpmock](https://github.com/jarcoal/httpmock) - 外部リソースからのHTTPレスポンスを簡単にモックできる
- [minimock](https://github.com/gojuno/minimock) - Goインターフェース向けのモックジェネレータ
- [mockery](https://github.com/vektra/mockery) - Goインターフ及を生成するツール
- [mockfs](https://github.com/balinomad/go-mockfs) - Goのテスト用のモックファイルシステム。エラー挿入と遅延シミュレーションをサポート。`testing/fstest.MapFS`に基づいて構築。
- [mockhttp](https://github.com/tv42/mockhttp) - Go http.ResponseWriter向けのモックオブジェクト
- [mooncake](https://github.com/GuilhermeCaruso/mooncake) - 複数の目的に対してモックを生成するためのシンプルな方法
- [moq](https://github.com/matryer/moq) - 任意のインターフェースから構造体を生成するユーティリティ。生成された構造体はテストコードでインターフェースのモックとして使用できる
- [moxie](https://lesiw.io/moxie) - 埋め込み構造体にモックメソッドを生成
- [pgxmock](https://github.com/pashagolub/pgxmock) - [pgx - PostgreSQL Driver and Toolkit](https://github.com/jackc/pgx/)を実装したモックライブラリ。
- [timex](https://github.com/cabify/timex) - Goのネイティブパッケージ`time`のテストに最適化された代替品。
- [xgo](https://github.com/xhd2015/xgo) - 一般向けの純粋な関数モックライブラリ

### ファジングとデルタデバッグ／縮小 <a id="fuzzing-and-delta-debuggingreducingshrinking"></a>

- [go-fuzz](https://github.com/dvyukov/go-fuzz) - ランダム化されたテストシステム
- [Tavor](https://github.com/zimmski/tavor) - ジェネリックなフュージングとデルタデバッグフレームワーク

### Selenium・ブラウザー制御ツール <a id="selenium-and-browser-control-tools"></a>

- [bonk](https://github.com/joakimcarlsson/bonk) - 外部依存なしで、WebSocketを介したChrome DevToolsプロトコルを用いた高速かつ非目立つブラウザ自動化ライブラリ
- [cdp](https://github.com/mafredri/cdp) - Chromeデバッグプロトコルに対応した型安全なバインディング。ブラウザやその他のデバッグターゲットに適用可能。
- [chromedp](https://github.com/knq/chromedp) - Chrome、Safari、Edge、Android Webview、およびChromeデバッグプロトコルをサポートする他のブラウザを制御・テストするための方法。
- [playwright-go](https://github.com/mxschmitt/playwright-go) - Chromium、FirefoxおよびWebKitを制御するための1つのAPIを持つブラウザ自動化ライブラリ。
- [rod](https://github.com/go-rod/rod) - ウェブ自動化およびスクレイピングを簡単に行うためのDevtoolsドライバー。
- [selenosis](https://github.com/alcounit/selenosis) - 状態を持たないKubernetes本体向けのハブ。Selenium、Playwright、MCPセッションをカスタムリソースを介してオンデマンドのブラウザポッドにルーティング。

### 障害注入 <a id="fail-injection"></a>

- [failpoint](https://github.com/pingcap/failpoint) - Golang向けの[failpoints](https://www.freebsd.org/cgi/man.cgi?query=fail)の実装。

**[⬆ back to top関連](#contents)**

## テキスト処理 <a id="text-processing"></a>

_テキスト処理に関するGoライブラリ、ツール、または資料です。_

See also [自然言語処理](#natural-language-processing) and [テキスト分析](#text-analysis).

### フォーマッター <a id="formatters"></a>

- [address](https://github.com/bojanz/address) - アドレス表現、検証、フォーマットを扱う。
- [align](https://github.com/Guitarbum722/align) - テキストを一致させるための一般用途アプリ。
- [bytes](https://github.com/labstack/gommon/tree/master/bytes) - 数値バイト値（10K、2M、3Gなど）のフォーマットとパース。
- [go-fixedwidth](https://github.com/ianlopshire/go-fixedwidth) - 固定幅のテキストフォーマット（反射を用いたエンコーダー／デコーダー）。
- [go-humanize](https://github.com/dustin/go-humanize) - 時間、数値、メモリサイズを人間が読みやすいフォーマットに変換するフォーマ。
- [gotabulate](https://github.com/bndr/gotabulate) - Goでテーブルデータを簡単に整形できる。
- [sq](https://github.com/neilotoole/sq) - SQLデータベースやCSV、Excelなどのドキュメント形式からJSON、Excel、CSV、HTML、Markdown、XML、YAMLなどのフォーマットに変換。
- [textwrap](https://github.com/isbm/textwrap) - 行の末尾にテキストを折り返す。Pythonの`textwrap`モジュールの実装。

### マークアップ言語 <a id="markup-languages"></a>

- [bafi](https://github.com/mmalcek/bafi) - テンプレートを用いて、JSON、BSON、YAML、XMLを任意のフォーマットに変換するユニバーサルトランスレータ。
- [bbConvert](https://github.com/CalebQ42/bbConvert) - bbCodeをHTMLに変換し、カスタムbbCodeタグのサポートを追加できる。
- [blackfriday](https://github.com/russross/blackfriday) - Goで書かれたMarkdownプロセッサ。
- [go-output-format](https://github.com/drewstinnett/go-output-format) - GoアプリケーションのコマンドラインでGo構造体を複数フォーマット（YAML/JSONなど）に出力。
- [go-toml](https://github.com/pelletier/go-toml) - TOMLフォーマット向けのGoライブラリ。クエリサポートと便利なCLIツールを備える。
- [goldmark](https://github.com/yuin/goldmark) - Goで書かれたMarkdownパーサー。拡張しやすく、標準（CommonMark）に準拠し、構造が良好。
- [goq](https://github.com/andrewstuart/goq) - HTMLにstructタグを用いて宣言的にアンマーシャル（jQuery構文を使用。GoQueryを用いる。）
- [html-to-markdown](https://github.com/JohannesKaufmann/html-to-markdown) - HTMLをマークダウンに変換。全体のウェブサイトにも対応し、ルールで拡張可能。
- [htmlquery](https://github.com/antchfx/htmlquery) - HTMLに対するXPathクエリパッケージ。XPath表現でHTMLドキュメントからデータを抽出または評価できる。
- [htmlyaml](https://github.com/nikolaydubina/htmlyaml) - GoにおけるYAMLを豊かにHTMLにレンダリング。
- [htree](https://github.com/bobg/htree) - [html.Node](https://pkg.go.dev/golang.org/x/net/html#Node)オブジェクトの木構造を探索・ナビゲート・フィルタリングし、他の処理を行う。
- [markdown](https://github.com/nao1215/markdown) - メソッドチェインでGitHub風マークダウンとmermaid図を生成するマークダウンビルダー。
- [mdsmith](https://github.com/jeduden/mdsmith) - 高速かつ自動修正可能なマークダウンリーダーとフォーマッター。スタイル、読みやすさ、構造、および跨ファイルの整合性をチェック。
- [mxj](https://github.com/clbanning/mxj) - XMLをJSONまたはmap[string]interface{}にエンコード／デコード。ドット記法とワイルドカードで値を抽出。x2jおよびj2xパッケージを置き換える。
- [picoloom](https://github.com/alnah/picoloom) - CLIおよびGoライブラリAPIを用いたマークダウンからPDFへの変換。
- [toml](https://github.com/BurntSushi/toml) - TOML設定フォーマット（反射によるエンコーダー／デコーダー）。

### パーサー／エンコーダー／デコーダー <a id="parsersencodersdecoders"></a>

- [allot](https://github.com/sbstjn/allot) - CLIツールやボット向けのプレースホルダーおよびワイルドカードテキストのパース。
- [codetree](https://github.com/aerogo/codetree) - インデントされたコード（python、pixy、scarletなど）をパースし、ツリー構造を返す。
- [commonregex](https://github.com/mingrammer/commonregex) - Go用の一般的な正規表現のコレクション。
- [did](https://github.com/ockam-network/did) - GoにおけるDID（分散識別子）パーサーおよびストリング生成関数。
- [doi](https://github.com/hscells/doi) - Goにおけるドキュメントオブジェクト識別子（DOI）パーサー。
- [editorconfig-core-go](https://github.com/editorconfig/editorconfig-core-go) - GoにおけるEditorconfigファイルのパーサーおよび操作ツール。
- [go-fasttld](https://github.com/elliotwutingfeng/go-fasttld) - 高パフォーマンスのトップレベルドメイン（eTLD）抽出モジュール。
- [go-nmea](https://github.com/adrianmo/go-nmea) - Go言語用のNMEAパーサーライブラリ。
- [go-querystring](https://github.com/google/go-querystring) - Goライブランダで構造体をURLクエリパラメータにエンコード。
- [go-vcard](https://github.com/emersion/go-vcard) - vCardのパースとフォーマット。
- [godump](https://github.com/yassinebenaid/godump) - GO変数を簡単に整形表示。Goの`fmt.Printf("%#v")`への代替。
- [godump (goforj)](https://github.com/goforj/godump) - Laravel/SymfonyスタイルのダンプでGo構造体を整形。完全な型情報、色付きCLI出力、サイクル検出、プライベートフィールドアクセスを提供。
- [gofeed](https://github.com/mmcdole/gofeed) - GoでRSSおよびAtomフィードをパースする
- [gographviz](https://github.com/awalterschulze/gographviz) - GraphvizのDOT言語をパースする
- [gonameparts](https://github.com/polera/gonameparts) - 人間の名前を個々の名前部に分解する
- [ltsv](https://github.com/Wing924/ltsv) - 高性能の[LTSV (Labeled Tab Separated Value)](http://ltsv.org/)リーダー（Go用）。
- [normalize](https://github.com/avito-tech/normalize) - 曖昧なテキストをセイフティ化、標準化し、比較する
- [parseargs-go](https://github.com/nproc/parseargs-go) - 引用符と逆スラッシュを理解する文字列引数パーサー
- [prattle](https://github.com/askeladdk/prattle) - LL(1)文法をシンプルかつ効率的にスキャン・パースする
- [sh](https://github.com/mvdan/sh) - シェルパーサーおよびフォーマッター
- [tokenizer](https://github.com/bzick/tokenizer) - 任意の文字列、スライス、無限バッファを任意のトークンにパースする
- [vdf](https://github.com/andygrunwald/vdf) - Goで書かれたValvesデータフォーマット（vdf）用のLexerおよびParser
- [when](https://github.com/olebedev/when) - プラグイン可能なルールを持つ自然言語のENおよびRUの日時パーサー
- [xj2go](https://github.com/stackerzzq/xj2go) - XMLまたはJSONをGo構造体に変換する

### 正規表現 <a id="regular-expressions"></a>

- [coregex](https://github.com/coregx/coregex) - Rustのregex-crateアーキテクチャに基づく生産性のある正規表現エンジン：複数エンジンDFA/NFA、SIMDフィルタ、標準ライブラリ置き換え
- [genex](https://github.com/alixaxel/genex) - 正規表現をすべての一致する文字列にカウント・展開する
- [go-wildcard](https://github.com/IGLOU-EU/go-wildcard) - シンプルで軽量のワイルドカードパターンマッチング
- [goregen](https://github.com/zach-klippenstein/goregen) - 正規表現からランダムな文字列を生成するライブラリ
- [regroup](https://github.com/oriser/regroup) - 構造体タグと自動パースを使って、正規表現の名前付きグループをGo構造体にマッチする
- [rex](https://github.com/hedhyw/rex) - 正規表現ビルダー

### サニタイズ <a id="sanitation"></a>

- [bluemonday](https://github.com/microcosm-cc/bluemonday) - HTMLセイフティ化
- [gofuckyourself](https://github.com/JoshuaDoes/gofuckyourself) - Go用のセイフティ化ベースのスワールフィルター

### スクレイパー <a id="scrapers"></a>

- [colly](https://github.com/asciimoo/colly) - Gophers向けの高速かつ洗練されたスクレイピングフレームワーク
- [dataflowkit](https://github.com/slotix/dataflowkit) - ウェブスクレイピングフレームワークでウェブサイトを構造化データに変換します。
- [go-recipe](https://github.com/kkyr/go-recipe) - ウェブサイトからレシピをスクレイピングするためのパッケージ。
- [go-sitemap-parser](https://github.com/aafeher/go-sitemap-parser) - Go言語によるサイトマップのパース用ライブラリ。
- [GoQuery](https://github.com/PuerkitoBio/goquery) - GoQueryは、jQueryに類似した構文と機能をGo言語に提供するライブラリです。
- [pagser](https://github.com/foolin/pagser) - Pagserは、GoQueryとGo言語の構造タグを用いて、HTMLページを構造体にパース・デシリアライズするシンプルかつ拡張可能なライブラリです。
- [Tagify](https://github.com/zoomio/tagify) - 与えられたソースからタグを生成します。
- [walker](https://github.com/cyucelen/walker) - 任意のソースからページネーションデータをスムーズに取得。シンプルかつ高性能なAPIスクレイピングが含まれます。
- [xurls](https://github.com/mvdan/xurls) - テキストからURLを抽出します。

### RSS <a id="rss"></a>

- [podcast](https://github.com/eduncan911/podcast) - GolangによるiTunes準拠およびRSS 2.0対応のポッドキャスト生成ツール。

### ユーティリティ／その他 <a id="utilitymiscellaneous"></a>

- [ahocorasick](https://github.com/coregx/ahocorasick) - 高性能なAho-Corasickマルチパターン文字列マッチング。DFAコンパイルとSIMDフィルタを用いて、最大7GB/sの処理速度（[coregx](https://github.com/coregx)エコシステムの一部）。
- [go-runewidth](https://github.com/mattn/go-runewidth) - 文字または文字列の固定幅を取得する関数。
- [kace](https://github.com/codemodus/kace) - 一般的な初期語形を含む変換をカバーするユーティリティ。
- [lancet](https://github.com/duke-git/lancet) - Go向けの包括的な、Lodashに類似したユーティリティライブラリ。
- [petrovich](https://github.com/striker2000/petrovich) - Petrovichは、ロシア語名を指定された文法形に変換するためのライブラリです。
- [radix](https://github.com/yourbasic/radix) - 高速な文字列ソートアルゴリズム。
- [TySug](https://github.com/Dynom/TySug) - キーボードレイアウトに関する代替提案。
- [uniwidth](https://github.com/unilibs/uniwidth) - SWAR最適化、O(1)リクエストテーブル、ZWJエモジ対応を含む、高性能なUnicode文字幅計算ライブラリ。
- [w2vgrep](https://github.com/arunsupe/semantic-grep) - 語ベクトルを用いた意味論的grepツールで、意味的に類似したマッチを検索します。たとえば、「death」を検索すると、「dead」、「killing」、「murder」などが見つかります。

**[⬆ back to top関連](#contents)**

## サードパーティAPI <a id="third-party-apis"></a>

_サードパーティAPIに関するGoライブラリ、ツール、または資料です。_

- [airtable](https://github.com/mehanizm/airtable) - [Airtable API](https://airtable.com/api)向けのGoクライアントライブラリ。
- [anaconda](https://github.com/ChimeraCoder/anaconda) - Twitter 1.1 API向けのGo言語クライアントライブラリ。
- [appstore-sdk-go](https://github.com/Kachit/appstore-sdk-go) - AppStore Connect API向けの非公式Golang SDK。
- [aws-encryption-sdk-go](https://github.com/chainifynet/aws-encryption-sdk-go) - [AWS Encryption SDK](https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/index.html)の非公式Go SDK実装。
- [aws-sdk-go](https://github.com/aws/aws-sdk-go-v2) - Goプログラミング言語向けのAWS公式SDK。
- [bqwriter](https://github.com/OTA-Insight/bqwriter) - 高スループットでデータを[Google BigQuery](https://cloud.google.com/bigquery)に書き込むためのGoのハイレベルライブラリ。
- [brewerydb](https://github.com/naegelejd/brewerydb) - BreweryDB APIにアクセスするためのGoライブラリ。
- [cachet](https://github.com/andygrunwald/cachet) - オープンソースのステータスページシステム[Cachet](https://cachethq.io/)向けGoクライアントライブラリ。
- [circleci](https://github.com/jszwedko/go-circleci) - CircleCIのAPIに接続するためのGoクライアントライブラリ
- [codeship-go](https://github.com/codeship/codeship-go) - CodeshipのAPI v2に接続するためのGoクライアントライブラリ
- [coinpaprika-go](https://github.com/coinpaprika/coinpaprika-api-go-client) - CoinpaprikaのAPIに接続するためのGoクライアントライブラリ
- [colony-sdk-go](https://github.com/TheColonyCC/colony-sdk-go) - AIエージェントをユーザーとする公開ソーシャルネットワーク[The Colony](https://thecolony.cc)向けGoクライアントライブラリ。
- [device-check-go](https://github.com/rinchsan/device-check-go) - [iOS DeviceCheck API](https://developer.apple.com/documentation/devicecheck) v1 との相互作用を行う Go クライアント ライブラリ
- [discordgo](https://github.com/bwmarrin/discordgo) - DiscordチャットAPIへのGoバインディング
- [disgo](https://github.com/switchupcb/disgo) - Discord APIへのGo APIラッパー
- [dusupay-sdk-go](https://github.com/Kachit/dusupay-sdk-go) - Dusupay支払いゲートウェイの非公式APIクライアント（Go）
- [ethrpc](https://github.com/onrik/ethrpc) - Ethereum JSON RPC APIへのGoバインディング
- [facebook](https://github.com/huandu/facebook) - Facebook Graph APIをサポートするGoライブラリ
- [fasapay-sdk-go](https://github.com/Kachit/fasapay-sdk-go) - Fasapay支払いゲートウェイの非公式XML APIクライアント（Golang）
- [fcm](https://github.com/maddevsio/fcm) - Firebase Cloud MessagingへのGoライブラリ
- [gads](https://github.com/emiddleton/gads) - Google Adwordsの非公式API
- [gcm](https://github.com/Aorioli/gcm) - Google Cloud MessagingへのGoライブラリ
- [geo-golang](https://github.com/codingsince1985/geo-golang) - [Google Maps](https://developers.google.com/maps/documentation/geocoding/intro), [MapQuest](https://developer.mapquest.com/documentation/api/geocoding/), [Nominatim](https://nominatim.org/release-docs/latest/api/Overview/), [OpenCage](https://opencagedata.com/api), [Bing](https://msdn.microsoft.com/en-us/library/ff701715.aspx), [Mapbox](https://www.mapbox.com/developers/api/geocoding/), および [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Nominatim) の地理コード / 反地理コード API にアクセスする Go ライブラリ
- [github](https://github.com/google/go-github) - GitHub REST API v3へのアクセスをサポートするGoライブラリ
- [githubql](https://github.com/shurcooL/githubql) - GitHub GraphQL API v4へのアクセスをサポートするGoライブラリ
- [go-atlassian](https://github.com/ctreminiom/go-atlassian) - [Atlassian Cloud](https://www.atlassian.com/enterprise/cloud) サービス（Jira, Jira Service Management, Jira Agile, Confluence, Admin Cloud）にアクセスする Go ライブラリ
- [go-aws-news](https://github.com/circa10a/go-aws-news) - AWSの最新情報を取り込むためのGoアプリケーションおよびライブラリ
- [go-chronos](https://github.com/axelspringer/go-chronos) - [Chronos](https://mesos.github.io/chronos/) Job Scheduler との相互作用を行う Go ライブラリ
- [go-gerrit](https://github.com/andygrunwald/go-gerrit) - [Gerrit Code Review](https://www.gerritcodereview.com/) 用の Go クライアント ライブラリ
- [go-hacknews](https://github.com/PaulRosset/go-hacknews) - HackerNews APIへのTiny Goクライアント
- [go-here](https://github.com/abdullahselek/go-here) - HEREの位置ベースAPIに接続するためのGoクライアントライブラリ
- [go-hibp](https://github.com/wneessen/go-hibp) - "Have I Been Pwned" APIへのシンプルなGoバインディング
- [go-imgur](https://github.com/koffeinsource/go-imgur) - [imgur](https://imgur.com) 用の Go クライアント ライブラリ
- [go-jira](https://github.com/andygrunwald/go-jira) - [Atlassian JIRA](https://www.atlassian.com/software/jira) 用の Go クライアント ライブラリ
- [go-lark](https://github.com/go-lark/lark) - [Feishu](https://open.feishu.cn/)および[Lark](https://open.larksuite.com/)オープンプラットフォーム向けの使いやすい非公式SDK
- [go-marathon](https://github.com/gambol99/go-marathon) - MesosphereのMarathon PAASに接続するためのGoライブラリ
- [go-myanimelist](https://github.com/nstratos/go-myanimelist) - [MyAnimeList API](https://myanimelist.net/apiconfig/references/api/v2) にアクセスする Go クライアント ライブラリ
- [go-openai](https://github.com/sashabaranov/go-openai) - OpenAI ChatGPT、DALL·E、Whisper API向けのGoライブラリ
- [go-openproject](https://github.com/manuelbcd/go-openproject) - [OpenProject](https://docs.openproject.org/api/) API との相互作用を行う Go クライアント ライブラリ
- [go-postman-collection](https://github.com/rbretecher/go-postman-collection) - [Postman Collections](https://learning.getpostman.com/docs/postman/collections/creating-collections/) と作業する Go モジュール（Insomnia と互換）
- [go-redoc](https://github.com/mvrilo/go-redoc) - Go で使用する [ReDoc](https://redocly.com/) の埋め込み OpenAPI/Swagger ドキュメント UI
- [go-restcountries](https://github.com/chriscross0/go-restcountries) - [REST Countries API](https://countrylayer.com/) 用の Go ライブラリ
- [go-salesforce](https://github.com/k-capehart/go-salesforce) - [Salesforce REST API](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/resources_list.htm) との相互作用を行う Go クライアント ライブラリ
- [go-sophos](https://github.com/esurdam/go-sophos) - [Sophos UTM REST API](https://www.sophos.com/en-us/medialibrary/PDFs/documentation/UTMonAWS/Sophos-UTM-RESTful-API.pdf?la=en) 用のゼロ依存の Go ライブラリ
- [go-swagger-ui](https://github.com/esurdam/go-swagger-ui) - [Swagger UI](https://swagger.io/tools/swagger-ui/) の事前コンパイル済みバージョンを含む Go ライブラリ（Swagger JSON を提供）
- [go-telegraph](https://gitlab.com/toby3d/telegraph) - Telegraph公開プラットフォームAPIクライアント
- [go-trending](https://github.com/andygrunwald/go-trending) - GitHub での [trending repositories](https://github.com/trending) および [developers](https://github.com/trending/developers) にアクセスする Go ライブラリ
- [go-unsplash](https://github.com/hbagdi/go-unsplash) - [Unsplash.com](https://unsplash.com) API 用の Go クライアント ライブラリ
- [go-xkcd](https://github.com/nishanths/go-xkcd) - xkcd API向けのGoクライアント
- [go-yapla](https://gitlab.com/adrienK/go-yapla) - Yapla v2.0 API向けのGoクライアントライブラリ
- [goagi](https://github.com/staskobzar/goagi) - Asterisk PBXのagi/fastagiアプリケーションを構築するためのGoライブラリ
- [goami2](https://github.com/staskobzar/goami2) - Asterisk PBX用のAMI v2ライブラリ
- [GoFreeDB](https://github.com/FreeLeh/GoFreeDB) - Google Sheets上で共通かつシンプルなデータベース抽象化を提供するGolangライブラリ
- [gogtrends](https://github.com/groovili/gogtrends) - Google Trends非公式API
- [golang-tmdb](https://github.com/cyruzin/golang-tmdb) - The Movie Database API v3向けのGolangラッパー
- [golyrics](https://github.com/mamal72/golyrics) - GolyricsはWikiaサイトから音楽の歌詞データを取得するためのGoライブラリ
- [gomalshare](https://github.com/MonaxGT/gomalshare) - Go ライブラリ MalShare API [malshare.com](https://www.malshare.com/)
- [GoMusicBrainz](https://github.com/michiwend/gomusicbrainz) - Go MusicBrainz WS2クライアントライブラリ
- [google](https://github.com/google/google-api-go-client) - 自動生成されたGo用Google API
- [google-analytics](https://github.com/chonthu/go-google-analytics) - 簡単なラッパーでGoogleアナリティクスの報告を実行
- [google-cloud](https://github.com/GoogleCloudPlatform/gcloud-golang) - Google Cloud API Goクライアントライブラリ
- [gopaapi5](https://github.com/utekaravinash/gopaapi5) - [Amazon Product Advertising API 5.0](https://webservices.amazon.com/paapi5/documentation/) 用の Go クライアント ライブラリ
- [gopensky](https://github.com/navidys/gopensky) - [OpenSKY Network](https://opensky-network.org/) ライブ API（airspace ADS-B および Mode S データ）用の Go クライアント実装
- [gosip](https://github.com/koltyakov/gosip) - SharePoint向けクライアントライブラリ
- [gostorm](https://github.com/jsgilmore/gostorm) - GoStormは、GoでStormのspoutおよびBoltを実装するための通信プロトコルを実装するGoライブラリ
- [hipchat](https://github.com/andybons/hipchat) - このプロジェクトはHipchat API向けのGoクライアントライブラリを実装しています
- [hipchat (xmpp)](https://github.com/daneharrigan/hipchat) - XMPP経由でHipChatと通信するためのGoパッケージ
- [httpsms-go](https://github.com/NdoleStudio/httpsms-go) - httpSMS API向けのGoクライアント
- [igdb](https://github.com/Henry-Sarabia/igdb) - [Internet Game Database API](https://api.igdb.com/) 用の Go クライアント
- [ip2location-io-go](https://github.com/ip2location/ip2location-io-go) - IP2Location.io API 用の Go ワッパー [IP2Location.io](https://www.ip2location.io/)
- [jokeapi-go](https://github.com/icelain/jokeapi) - [JokeAPI](https://sv443.net/jokeapi/v2/) 用の Go クライアント
- [lark](https://github.com/chyroc/lark) - [Feishu](https://open.feishu.cn/)/[Lark](https://open.larksuite.com/) Open API Go SDK、すべてのOpen APIおよびイベントコールバックをサポート
- [lastpass-go](https://github.com/ansd/lastpass-go) - [LastPass](https://www.lastpass.com/) API 用の Go クライアント ライブラリ
- [lemonsqueezy-go](https://github.com/NdoleStudio/lemonsqueezy-go) - レモンスqueezy API向けのGoクライアント
- [libgoffi](https://github.com/clevabit/libgoffi) - ネイティブ [libffi](https://sourceware.org/libffi/) インテグレーション向けのライブラリ アダプタ ツールボックス
- [libopenapi](https://github.com/pb33f/libopenapi) - OpenAPI、Swagger、Overlays、Arazzo仕様のパース、検証、操作
- [Medium](https://github.com/Medium/medium-sdk-go) - MediumのOAuth2 API向けのGolang SDK
- [megos](https://github.com/andygrunwald/megos) - [Apache Mesos](https://mesos.apache.org/) クラスタにアクセスするためのクライアント ライブラリ
- [minio-go](https://github.com/minio/minio-go) - Amazon S3に対応したクラウドストレージ向けMinio Goライブラリ
- [mixpanel](https://github.com/dukex/mixpanel) - MixpanelはGoアプリからイベントを追跡し、Mixpanelにプロフィール更新を送信するためのライブラリ
- [newsapi-go](https://github.com/jellydator/newsapi-go) - [NewsAPI](https://newsapi.org/) 用の Go クライアント
- [openaigo](https://github.com/otiai10/openaigo) - OpenAI GPT3/GPT-3.5 ChatGPT API向けのGoクライアントライブラリ
- [patreon-go](https://github.com/mxpv/patreon-go) - Patreon API向けのGoライブラリ
- [paypal](https://github.com/logpacker/PayPal-Go-SDK) - PayPal支払いAPI向けのラッパー
- [playlyfe](https://github.com/playlyfe/playlyfe-go-sdk) - Playlyfe REST API向けのGo SDK
- [pushover](https://github.com/gregdel/pushover) - Pushover API向けのGoラッパー
- [rawg-sdk-go](https://github.com/dimuska139/rawg-sdk-go) - [RAWG Video Games Database](https://rawg.io/) API 用の Go ライブラリ
- [shopify](https://github.com/rapito/go-shopify) - Shopify APIへのCRUDリクエストを実行するためのGoライブラリ
- [simples3](https://github.com/rhnvrm/simples3) - シンプルで機能が少ないAWS S3ライブラリ。V4署名を用いたRESTでGoで書かれたもの
- [slack](https://github.com/slack-go/slack) - Slack APIをGoで実装
- [smite](https://github.com/sergiotapia/smitego) - SmiteゲームAPIへのアクセスをラップするGoパッケージ
- [sonarqube-client-go](https://github.com/BoxBoxJason/sonarqube-client-go) - SonarQube Web API向けのGoクライアントライブラリおよびコマンドラインクライアント
- [spec](https://github.com/oaswrap/spec) - 軽量なOpenAPI 3.xビルダー。静的生成とchi、echo、gin、fiber、muxなど、人気フレームワークをサポート
- [spotify](https://github.com/rapito/go-spotify) - Spotify WEB APIへのアクセスを可能にするGoライブラリ
- [steam](https://github.com/sostronk/go-steam) - Steamゲームサーバーとのやり取りを行うためのGoライブラリ
- [stripe](https://github.com/stripe/stripe-go) - Stripe API向けのGoクライアント
- [swag](https://github.com/zc2638/swag) - コメントなし、シンプルなGoラッパー。Swagger 2.0互換APIを作成可能。主なルーティングフレームワーク（組み込み、gin、chi、mux、echo、httprouter、fasthttpなど）をサポート
- [textbelt](https://github.com/dietsche/textbelt) - textbelt.com のテキストメッセージAPI用のGoクライアント
- [threads-go](https://github.com/tirthpatell/threads-go) - メタのThreads API用のOAuth 2.0、レート制限、型安全なエラー処理を備えたGoクライアントライブラリ
- [Trello](https://github.com/adlio/trello) - Trello API用のGoワッパー
- [TripAdvisor](https://github.com/mrbenosborne/tripadvisor-golang) - TripAdvisor API用のGoワッパー
- [tumblr](https://github.com/mattcunningham/gumblr) - Tumblr v2 API用のGoワッパー
- [uptimerobot](https://github.com/bitfield/uptimerobot) - Uptime Robot v及v2 API用のGoワッパーおよびコマンドラインクライアント
- [vl-go](https://github.com/verifid/vl-go) - VerifID識別確認レイヤーAPI用のGoクライアントライブラリ
- [webhooks](https://github.com/go-playground/webhooks) - GitHubおよびBitbucket用のウェブホークリシーバー
- [wit-go](https://github.com/wit-ai/wit-go) - wit.ai HTTP API用のGoクライアント
- [ynab](https://github.com/brunomvsouza/ynab.go) - YNAB API用のGoワッパー
- [zooz](https://github.com/gojuno/go-zooz) - Zooz API用のGoクライアント

**[⬆ back to top関連](#contents)**

## ユーティリティ <a id="utilities"></a>

_ユーティリティに関するGoライブラリ、ツール、または資料です。_

- [abstract](https://github.com/maxbolgarin/abstract) - ビジネスロジックにおけるバーチャルコードを削減するための抽象化とユーティリティ
- [apm](https://github.com/topfreegames/apm) - Golangアプリケーション向けのプロセスマネージャー（HTTP APIあり）
- [backscanner](https://github.com/icza/backscanner) - bufio.Scannerに似たスキャナーだが、指定された位置から逆順に行を読み取り、返す
- [bed](https://github.com/itchyny/bed) - Goで書かれたVim風のバイナリエディタ
- [blank](https://github.com/Henry-Sarabia/blank) - 文字列から空白やスペースを確認または削除
- [bleep](https://github.com/sinhashubham95/bleep) - Goで任意のOSシグナルセットに対して任意のアクションを実行
- [boilr](https://github.com/tmrts/boilr) - テンプレートからプロジェクトを作成するための高速CLIツール
- [boring](https://github.com/alebeck/boring) - シンプルなコマンドラインSSHトンネルマネージャー
- [changie](https://github.com/miniscruff/changie) - 多くのカスタマイズオプションを備えた自動化された変更ログツール
- [chyle](https://github.com/antham/chyle) - gitリポジトリを使用した変更ログ生成ツール。複数の設定オプションを提供。
- [circuit](https://github.com/cep21/circuit) - Hystrixに類する、Goによる回路ブレーカーパターンの効率的かつ機能豊富な実装。
- [circuitbreaker](https://github.com/rubyist/circuitbreaker) - Goにおける回路ブレーカー機能。
- [clipboard](https://github.com/golang-design/clipboard) - 📋 Goによるクロスプラットフォームクリップボードパッケージ。
- [clockwork](https://github.com/jonboulle/clockwork) - Go用のシンプルな仮想時計。
- [cmd](https://github.com/SimonBaeumer/cmd) - osx、windowsおよびlinuxでシェルコマンドを実行するためのライブラリ。
- [config-file-validator](https://github.com/Boeing/config-file-validator) - 構成ファイルの検証に用いるクロスプラットフォームツール。
- [contem](https://github.com/maxbolgarin/contem) - Goアプリケーションのスムーズなシャットダウンに必要なcontext.Contextの置き換え。
- [cookie](https://github.com/syntaqx/cookie) - Cookie構造体のパースとヘルパーパッケージ。
- [copy-pasta](https://github.com/jutkko/copy-pasta) - S3のようなバックエンドを使用するユニバーサルマルチワークステーションクリップボード。
- [countries](https://github.com/biter777/countries) - ISO-3166--1、ISO-4217、ITU-T E.164、Unicode CLDRおよびIANA ccTLD標準の完全実装。
- [countries](https://github.com/pioz/countries) - Goで国を扱う際に必要なすべての機能。
- [create-go-app](https://github.com/create-go-app/cli) - 1つのコマンドで実行することで、バックエンド（Golang）、フロントエンド（JavaScript、TypeScript）およびデプロイ自動化（Ansible、Docker）を含む、生産環境向けプロジェクトを作成するための強力なCLI。
- [cryptgo](https://github.com/Gituser143/cryptgo) - Crytpgoは、リアルタイムで暗号資産価格を監視・観察するための、Goで完全に実装されたTUIアプリケーション！
- [ctop](https://github.com/bcicen/ctop) - [Top-like](https://ctop.sh) インターフェース（例：htop）によるコンテナメトリクス
- [ctxutil](https://github.com/posener/ctxutil) - context用のユーティリティ関数のコレクション。
- [cvt](https://github.com/shockerli/cvt) - 任意の値を別の型に安全かつ簡単に変換できる。
- [dbt](https://github.com/nikogura/dbt) - 中央に配置された信頼できるリポジトリから、自動更新される署名済みバイナリを実行するためのフレームワーク。
- [Death](https://github.com/vrecan/death) - Goアプリケーションのシャットダウンをシグナルで管理する。
- [debounce](https://github.com/floatdrop/debounce) - Goで書かれたゼロ割り当てデボンサー。
- [delve](https://github.com/derekparker/delve) - Goデバッガー。
- [dive](https://github.com/wagoodman/dive) - Dockerイメージの各レイヤーを探索するためのツール
- [dlog](https://github.com/kirillDanshin/dlog) - コンパイル時制御のログ出力により、デバッグ呼び出しを削除せずにリリースサイズを小さくできる
- [EaseProbe](https://github.com/megaease/easeprobe) - シンプルで独立した、軽量なツール。ヘルス/ステータスチェックデーモンを実行し、HTTP/TCP/SSH/シェル/クライアント/...プローブをサポートし、Slack/Discord/Telegram/SMS/...通知を提供
- [equalizer](https://github.com/reugn/equalizer) - Go向けのクォータマネージャーおよびレート制限器のコレクション
- [ergo](https://github.com/cristianoliveira/ergo) - 複数の異なるポートで動作するローカルサービスの管理を簡単に行う
- [evaluator](https://github.com/nullne/evaluator) - s-expressionに基づいて動的に式を評価。シンプルで拡張しやすい
- [Failsafe-go](https://github.com/failsafe-go/failsafe-go) - Go向けの障害耐性および回復パターン
- [filetype](https://github.com/h2non/filetype) - ファイルタイプをマジックナンバー署名で検査してファイルタイプを推定するための小さなパッケージ
- [filler](https://github.com/yaronsumel/filler) - "fill"タグを使用して構造体を埋めるための小さなユーティリティ
- [filter](https://github.com/gookit/filter) - Goデータのフィルタリング、クリーンアップ、変換を提供
- [fzf](https://github.com/junegunn/fzf) - Goで書かれたコマンドラインのフュージー検索ツール
- [generate](https://github.com/go-playground/generate) - 指定されたパスまたは環境変数に対してgo generateを再帰的に実行し、正規表現でフィルタリングできる
- [gh-image](https://github.com/drogers0/gh-image) - gh CLI拡張機能で、コマンドラインからGitHubのイシュー、PR、READMEに画像をアップロードし、リポジトリの可視性を尊重したユーザー添付URLを生成
- [ghokin](https://github.com/antham/ghokin) - Gherkin（Cucumber、Behat…）向けの外部依存なし並列フォーマッタ
- [git-time-metric](https://github.com/git-time-metric/gtm) - Git向けのシンプルでスムーズで軽量なタイムトラッキング
- [git-tools](https://github.com/kazhuravlev/git-tools) - Gitタグの管理を支援するツール
- [gitbatch](https://github.com/isacikgoz/gitbatch) - 一つの場所でGitリポジトリを管理
- [gitcs](https://github.com/knbr13/gitcs/) - Gitコミットの可視化、ローカルマシン上でGitコミットを可視化するCLIツール
- [go-actuator](https://github.com/sinhashubham95/go-actuator) - Goベースのウェブフレームワーク向けのプロダクション対応機能
- [go-astitodo](https://github.com/asticode/go-astitodo) - GOコード内のTODOをパース
- [go-bind-plugin](https://github.com/wendigo/go-bind-plugin) - go:generate ツールで Go プラグインがエクスポートするシンボルをラップする (1.8 限定)。
- [go-bsdiff](https://github.com/gabstv/go-bsdiff) - 純粋な Go バイナリ差分（bsdiff）およびバージョン差分（bspatch）ライブラリと CLI ツール。
- [go-clip](https://github.com/prashantgupta24/go-clip) - Mac 用の極めてシンプルなクリップボードマネージャー。
- [Go-Constant](https://github.com/sajjadrabiee/go-constant) - Go における enum 型の欠如に対応する、安全な文字列パースを備えた一般型定数セット。
- [go-convert](https://github.com/Eun/go-convert) - パッケージ go-convert は、値を別の型に変換できるようにする。
- [go-countries](https://github.com/mikekonan/go-countries) - ISO-3166 コードに対する軽量な検索ツール。
- [go-dry](https://github.com/ungerik/go-dry) - Go 用の DRY（繰り返さない）パッケージ。
- [go-events](https://github.com/deatil/go-events) - Go のイベントとイベントサブスクライブパッケージ。WordPress ホール関数に似ている。
- [go-funk](https://github.com/thoas/go-funk) - 現代的な Go ユーティリティライブラリ。マップ、検索、含む、フィルタ、チャンク、逆順などヘルパーを提供。
- [go-health](https://github.com/Talento90/go-health) - ヘルスチェックをサービスに簡単に追加するためのヘルスパッケージ。
- [go-httpheader](https://github.com/mozillazg/go-httpheader) - 構造体をヘッダー項目にエンコードするための Go ライブラリ。
- [go-lambda-cleanup](https://github.com/karl-cardenas-coding/go-lambda-cleanup) - AWS Lambda の使われていないまたは以前のバージョンを削除するための CLI ツール。
- [go-lock](https://github.com/viney-shih/go-lock) - go-lock は、読み取り・書き込みミューテックスと読み取り・書き込みトライロックを実装し、スターバークを回避するロックライブラリ。
- [go-pattern-match](https://github.com/PhakornKiong/go-pattern-match) - ts-pattern にインスパイアされたパターンマッチングライブラリ。
- [go-pkg](https://github.com/chenquan/go-pkg) - Go 用のツールキット。
- [go-problemdetails](https://github.com/mvmaasakkers/go-problemdetails) - 問題詳細（Problem Details）を扱うための Go パッケージ。
- [go-qr](https://github.com/piglig/go-qr) - 本質的で、高品質かつ極めてシンプルな QR コード生成器。
- [go-rate](https://github.com/beefsack/go-rate) - Go 用のタイム付きレート制限器。
- [go-safecast](https://github.com/ccoVeille/go-safecast) - 整数オーバーフローおよびアンダーフローを防止する安全な数値型変換ライブラリ（gosec G115 および CWE-190 を解決）。
- [go-sitemap-generator](https://github.com/ikeikeikeike/go-sitemap-generator) - Go で書かれた XML サイトマップ生成器。
- [go-snk](https://github.com/SharkByteSoftware/go-snk) - スライス、マップ、文字列、エラー、JSON、HTTP、コンテナなどに対して型安全なジェネリックヘルパーを提供する、小さな独立したパッケージで構成されたもの。
- [go-trigger](https://github.com/sadlil/go-trigger) - Go言語のグローバルイベントトリガー、IDを指定してイベントを登録し、プロジェクト内のどこからでもイベントをトリガーできる。
- [go-tripper](https://github.com/rajnandan1/go-tripper) - TripperはGo向けの回路ブレーカーパッケージで、回路の切り替えと状態の制御が可能。
- [go-type](https://github.com/mikekonan/go-types) - ISO-4217、ISO-316及他のタイプのためのGo型を提供するライブラリ。
- [go-utils](https://github.com/Goldziher/go-utils) - JavaScriptおよびPythonにインスパイアされたシンプルかつパフォーマンスの高いジェネリックユーティリティ（map、filter、reduceなど）。
- [goback](https://github.com/carlescere/goback) - Go向けのシンプルな指数関数バックオフパッケージ。
- [goctx](https://github.com/zerosnake0/goctx) - 高パフォーマンスでコンテキストの値を取得できる。
- [godaemon](https://github.com/VividCortex/godaemon) - デーモンを書くためのユーティリティ。
- [godoclive](https://github.com/syst3mctl/godoclive) - chi、gin、net/httpルーターの静的解析を用いて、Go HTTPハンドラからインタラクティブなAPIドキュメントを生成。
- [godropbox](https://github.com/dropbox/godropbox) - ドロップボックスからGoサービス/アプリケーションを書くために提供される共通ライブラリ。
- [gofn](https://github.com/tiendc/gofn) - Go 1.18以降のジェネリクスを使用して書かれた、パフォーマンスの高いユーティリティ関数。
- [golarm](https://github.com/msempere/golarm) - システムイベントによるアラームの発生。
- [golog](https://github.com/mlimaloureiro/golog) - タスクのタイムトラックを簡単かつ軽量に実行できるCLIツール。
- [gopencils](https://github.com/bndr/gopencils) - REST APIを簡単に消費できる小さなパッケージ。
- [goplaceholder](https://github.com/michiwend/goplaceholder) - 小さなGoライブラリでプレースホルダー画像を生成。
- [goreadability](https://github.com/philipjkim/goreadability) - Facebook Open Graphおよびarc90のreadabilityを使用したウェブページの要約抽出。
- [goreleaser](https://github.com/goreleaser/goreleaser) - Goバイナリをできるだけ高速かつ簡単に配布。
- [goreporter](https://github.com/wgliang/goreporter) - 静的解析、ユニットテスト、コードレビュー、コード品質レポートを生成するGoツール。
- [goseaweedfs](https://github.com/linxGnu/goseaweedfs) - SeaweedFSクライアントライブラリでほぼすべての機能を提供。
- [gostrutils](https://github.com/ik5/gostrutils) - 文字列操作および変換関数のコレクション。
- [gotenv](https://github.com/subosito/gotenv) - Go で `.env` または任意の `io.Reader` から環境変数を読み込む
- [goval](https://github.com/maja42/goval) - Goで任意の式を評価する
- [graterm](https://github.com/skovtunenko/graterm) - Goアプリケーションにおける順序付き（順行/並列）GRAceful TERMination（つまりシャットダウン）を行うための基本的な機能を提供
- [grofer](https://github.com/pesos/grofer) - Golangで書かれたシステムおよびリソースモニタリングツール！
- [gubrak](https://github.com/novalagung/gubrak) - Golang向けのユーティリティライブラリで、構文糖を提供。Lodashに似たものだが、Golang用。
- [handy](https://github.com/miguelpragier/handy) - 文字列ハンドラー／フォーマッターやバリデーターなど、多くのユーティリティとヘルパーを提供。
- [healthcheck](https://github.com/kazhuravlev/healthcheck) - Kubernetes向けのシンプルで強力な準備テスト。
- [hostctl](https://github.com/guumaster/hostctl) - /etc/hostsの管理を行うためのCLIツール。簡単なコマンドで操作可能。
- [htcat](https://github.com/htcat/htcat) - 並列およびパイプライン方式のHTTP GETユーティリティ。
- [hub](https://github.com/github/hub) - gitコマンドを追加機能付きでラップし、ターミナルからGitHubとやり取りできるようにする。
- [immortal](https://github.com/immortal/immortal) - \*nix対応（OSに依存しない）のサーバー監視ツール。
- [jet](https://github.com/NicoNex/jet) - Just Edit Text：正規表現を使ってファイル内のコンテンツや名前を検索・置換する、高速かつ強力なツール。
- [jsend](https://github.com/clevergo/jsend) - JSendをGoで実装したバージョン。
- [json-log-viewer](https://github.com/hedhyw/json-log-viewer) - JSONログをインタラクティブに閲覧するためのビュー。
- [jump](https://github.com/gsamokovarov/jump) - Jumpは、あなたの習慣を学習することで、ナビゲーションを速くするツール。
- [just](https://github.com/kazhuravlev/just) - ジェネリックデータ構造を扱うための便利な関数のコレクション。
- [koazee](https://github.com/wesovilabs/koazee) - 配列の操作を楽にする、ラグリ評価と関数型プログラミングをインスピレーションとしたライブラリ。
- [LAN Orangutan](https://github.com/291-Group/LAN-Orangutan) - ネットワークデバイスの発見とインベントリ管理。持続的なラベル付け、複数ネットワークスキャン、Tailscale統合。
- [lang](https://github.com/maxbolgarin/lang) - ブレーカーなしで変数、スライス、マップを扱うための汎用ワンライナー。
- [lets-go](https://github.com/aplescia-chwy/lets-go) - クラウドネイティブREST API開発に必要な共通ユーティリティを提供するGoモジュール。また、AWS専用のユーテリティも含む。
- [limiters](https://github.com/mennanov/limiters) - Goで構築された分散アプリケーション向けのレート制御器。設定可能なバックエンドと分散ロックを備える。
- [lo](https://github.com/samber/lo) - Go 1.18+ のジェネリクスをベースにした、Lodash に似た Go ライブラリ（map、filter、contains、find など）
- [loncha](https://github.com/kazu/loncha) - 高パフォーマンスのスライスユーティリティ
- [lrserver](https://github.com/jaschaephraim/lrserver) - Go 用の LiveReload サーバー
- [mani](https://github.com/alajmo/mani) - 複数リポジトリを管理するための CLI ツール
- [mc](https://github.com/minio/mc) - Minio Client は、Amazon S3 互換のクラウドストレージおよびファイルシステムとの作業に必要な最小限のツールを提供
- [mergo](https://github.com/imdario/mergo) - Golang で構造体とマップをマージするヘルパー。設定のデフォルト値などに便利で、めんどくさい if 文を避けられる
- [mimemagic](https://github.com/zRedShift/mimemagic) - 純粋な Go ライブラリによる超高速 MIME スニッフィングライブラリ／ユーティリティ
- [mimetype](https://github.com/gabriel-vasile/mimetype) - マジックナンバーに基づく MIME タイプ検出用のパッケージ
- [minify](https://github.com/tdewolff/minify) - HTML、CSS、JS、XML、JSON および SVG ファイル形式向けの高速ミニファイア
- [minquery](https://github.com/icza/minquery) - MongoDB / mgo.v2 のクエリで、効率的なページネーション（続きを表示するためのカーソル）をサポート
- [moldova](https://github.com/StabbyCutyou/moldova) - 入力テンプレートに基づいてランダムデータを生成するヘルパー
- [mole](https://github.com/davrodpin/mole) - SSH ツールを簡単に作成する CLI アプリ
- [mongo-go-pagination](https://github.com/gobeam/mongo-go-pagination) - 公式 MongoDB/mongo-go-driver パッケージ向けの MongoDB ページネーション（通常クエリおよびアグリゲーションパイプラインをサポート）
- [mssqlx](https://github.com/linxGnu/mssqlx) - マスターバーチャル、マスターマスターバーチャル構造に対応するデータベースクライアントライブラリ。軽量で自動バランスを考慮した設計
- [multitick](https://github.com/VividCortex/multitick) - 並行したタイマーを管理するマルチプレクサ
- [netbug](https://github.com/e-dard/netbug) - サービスのリモートプロファイリングを簡単に実行できるユーティリティ
- [nfdump](https://github.com/chrispassas/nfdump) - nfdump ネットフローファイルを読み込む
- [nostromo](https://github.com/pokanop/nostromo) - 強力なエイリアスを構築するための CLI
- [okrun](https://github.com/xta/okrun) - go run のエラーをスチームロールする
- [olaf](https://github.com/btnguyen2k/olaf) - Twitter の Snowflake を Go で実装
- [onecache](https://github.com/adelowo/onecache) - 複数のバックエンドストア（Redis、Memcached、ファイルシステムなど）をサポートするキャッシュライブラリ
- [optional](https://github.com/kazhuravlev/optional) - オプションの構造体フィールドと変数
- [panicparse](https://github.com/maruel/panicparse) - 類似のgoroutineをグループ化し、スタックダンプを色分け表示
- [pattern-match](https://github.com/alexpantyukhin/go-pattern-match) - パターンマッチングライブラリ
- [peco](https://github.com/peco/peco) - シンプルなインタラクティブフィルタリングツール
- [pgo](https://github.com/arthurkushman/pgo) - PHPコミュニティ向けの便利な関数
- [pm](https://github.com/VividCortex/pm) - HTTP APIを用いたプロセス（つまりgoroutine）マネージャー
- [pointer](https://github.com/xorcare/pointer) - パッケージポインタは、基本型のオプションフィールドの作成を簡略化するためのヘルパー関数を含む
- [ptr](https://github.com/gotidy/ptr) - 基本型の定数からポインタを作成するための関数を提供するパッケージ
- [rate](https://github.com/webriots/rate) - トークンバケットとAIMD戦略を用いた高性能なレート制御ライブラリ
- [rclient](https://github.com/zpatrick/rclient) - REST APIにアクセスするための読みやすく、柔軟で使いやすいクライアント
- [release](https://github.com/tomodian/release) - Keep-a-changelog形式の変更ログを管理するCLIツール
- [relimpact](https://github.com/hashmap-kz/relimpact) - Goプロジェクト向けの高速API互換性報告ツール
- [remote-touchpad](https://github.com/Unrud/remote-touchpad) - スマートフォンからマウスとキーボードを制御
- [repeat](https://github.com/ssgreg/repeat) - リトライ操作やハートビートに有用なバックオフ戦略を実装したGoバージョン
- [request](https://github.com/mozillazg/request) - Go HTTPリクエスト for Humans™
- [rerun](https://github.com/ivpusic/rerun) - ソースコードが変更された際にGoアプリを再コンパイル・再実行
- [rest-go](https://github.com/edermanoel94/rest-go) - REST APIとの作業に便利な多くのメソッドを提供するパッケージ
- [retro](https://github.com/goioc/retro) - エラー時にリトライを行うための便利なライブラリ（バックオフ戦略、上限など、広範な柔軟性）
- [retry](https://github.com/kamilsk/retry) - 成功まで繰り返し実行を行うための最も高度な機能メカニズム
- [retry](https://github.com/percolate/retry) - Go におけるシンプルで高柔軟性のリトライパッケージ
- [retry](https://github.com/thedevsaddam/retry) - Go におけるシンプルで使いやすいリトライメカニズムパッケージ
- [retry](https://github.com/shafreeck/retry) - あなたの仕事の実行を確実に保証する、非常にシンプルなライブラリ
- [retry-go](https://github.com/avast/retry-go) - リトライメカニズムに特化したシンプルなライブラリ
- [retry-go](https://github.com/rafaeljesus/retry-go) - Go でのリトライをシンプルかつ容易に実現
- [robustly](https://github.com/VividCortex/robustly) - 関数を頑健に実行し、パニックをキャッチして再起動
- [rospo](https://github.com/ferama/rospo) - Go でシンプルかつ信頼性の高い SSH ツールを提供、内蔵 SSH サーバー付き
- [scan](https://github.com/blockloop/scan) - Go の `sql.Rows` を直接構造体、スライス、またはプリミティブ型にスキャン
- [scan](https://github.com/wroge/scan) - ジェネリクスを活用した SQL レコードのスキャン
- [scany](https://github.com/georgysavva/scany) - データベースから Go の構造体などにデータをスキャンするためのライブラリ
- [serve](https://github.com/syntaqx/serve) - どこでも必要に応じて静的 HTTP サーバーを提供
- [sesh](https://github.com/joshmedeski/sesh) - Sesh は zoxide を使って tmux セッションを迅速かつ簡単に作成・管理できる CLI
- [set](https://github.com/nofeaturesonlybugs/set) - パフォーマンスと柔軟性を備えた構造体マッピングおよび柔軟な型変換
- [shutdown](https://github.com/ztrue/shutdown) - `os.Signal` の処理用のアプリ終了ハンドル
- [silk](https://github.com/chrispassas/silk) - silk ネットフローファイルを読み込む
- [slice](https://github.com/psampaz/slice) - Go スライスの一般的な操作に安全な関数を提供
- [sliceconv](https://github.com/Henry-Sarabia/sliceconv) - プリミティブ型間のスライス変換
- [slicer](https://github.com/leaanthony/slicer) - スライスの操作をより簡単にする
- [sorty](https://github.com/jfcg/sorty) - 高速な並列／並列ソート
- [sqlex](https://github.com/go-sqlex/sqlex) - jmoiron/sqlx のドロップイン現代化、SQL レキサのバグ修正、自動 IN 文の展開、プラグイン可能なハック、統一された DB/Tx/Conn インターフェース
- [sqlx](https://github.com/jmoiron/sqlx) - 非常に優れた標準ライブラリ database/sql に拡張されたセットを提供
- [sqlz](https://github.com/rfberaldo/sqlz) - database/sql パッケージへの拡張、名前付きクエリ、構造体スキャン、バッチ操作を追加
- [sshman](https://github.com/shoobyban/sshman) - 複数のリモートサーバー上のauthorized_keysファイルを管理するSSHマネージャー
- [stacktower](https://github.com/stacktower-io/stacktower) - XKCD #2347を参考にした、依存関係グラフを物理的なタワー構造として可視化
- [statiks](https://github.com/janiltonmaciel/statiks) - 高速で設定不要、静的HTTPファイルサーバー
- [Storm](https://github.com/asdine/storm) - BoltDB用のシンプルかつ強力なツールキット
- [structs](https://github.com/PumpkinSeed/structs) - 構造体を操作するためのシンプルな関数を実装
- [throttle](https://github.com/yudppp/throttle) - 一定期間ごとに1回だけ動作を行うオブジェクト
- [tik](https://github.com/andy2046/tik) - Go用のシンプルで使いやすいタイマー用パッケージ
- [tome](https://github.com/cyruzin/tome) - TomeはシンプルなRESTフルAPIをページネートするための設計されたツール
- [toolbox](https://github.com/viant/toolbox) - スライス、マップ、マルチマップ、構造体、関数、データ変換ユーティリティ。サービスルーター、マクロ評価器、トークナイザ。
- [UNIS](https://github.com/esemplastic/unis) - Goにおける文字列ユーティリティの共通アーキテクチャ™
- [upterm](https://github.com/owenthereal/upterm) - 開発者がウェブ上で安全にターミナル／tmuxセッションを共有できるツール。リモートペアプログラミング、NATやファイアウォールの後ろにあるコンピュータへのアクセス、リモートデバッグなどに最適。
- [usql](https://github.com/knq/usql) - usqlはSQLデータベース向けのユニバーサルコマンドラインインターフェース
- [util](https://github.com/shomali11/util) - 便利なユーティリティ関数のコレクション。（strings, concurrency, manipulations, ...）
- [watchhttp](https://github.com/nikolaydubina/watchhttp) - 命令を定期的に実行し、最新のSTDOUTまたはその詳細な差分をHTTPエンドポイントとして公開
- [wifiqr](https://github.com/reugn/wifiqr) - Wi-Fi QRコード生成ツール
- [wuzz](https://github.com/asciimoo/wuzz) - HTTP検証用のインタラクティブCLIツール
- [xferspdy](https://github.com/monmohan/xferspdy) - Xferspdyはgolangでバイナリ差分とパッチライブラリを提供
- [xpool](https://github.com/peczenyj/xpool) - もう一つのgolangの型安全オブジェクトプール（ジェネリクスを使用）
- [yogo](https://github.com/antham/yogo) - コマンドラインからyopmailのメールを確認

**[⬆ back to top関連](#contents)**

## UUID <a id="uuid"></a>

_UUIDに関するGoライブラリ、ツール、または資料です。_

- [fastuuid](https://github.com/rekby/fastuuid) - UUIDv4を文字列またはバイトとして高速に生成
- [goid](https://github.com/jakehl/goid) - RFC4122に準拠したV4 UUIDの生成とパースを行う
- [gouid](https://github.com/twharmon/gouid) - 1回の割り当てで暗号的に安全なランダム文字列IDを生成
- [guid](https://github.com/sdrapkin/guid) - Go 用の高速暗号安全な Guid 生成器（ `uuid` に比べて約10倍速）
- [nanoid](https://github.com/aidarkhanov/nanoid) - 極めて小さく、効率的なGoによるユニーク文字列ID生成器
- [sno](https://github.com/muyo/sno) - コンパクトで並べ替え可能かつ高速なユニークID（埋め込みメタデータ付き）
- [ulid](https://github.com/oklog/ulid) - ULID（Universally Unique Lexicographically Sortable Identifier）のGo実装
- [uniq](https://gitlab.com/skilstak/code/go/uniq) - 手間なく安全かつ高速なユニーク識別子をコマンドで提供
- [uuid](https://github.com/agext/uuid) - 高速または暗号品質のランダムノード識別子を使用してUUID v1の生成・エンコード・デコードを行う
- [uuid](https://github.com/gofrs/uuid) - 普遍的にユニークな識別子（UUID）の実装。UUIDの作成とパースをサポート。satori uuidの積極的に維持されているフォーク
- [uuid](https://github.com/google/uuid) - RFC 4120およびDCE 1.1に基づくGoによるUUIDパッケージ
- [uuidcheck](https://github.com/ashwingopalsamy/uuidcheck) - 標準RFC 4122フォーマットに従ってUUIDを検証し、UUIDv7()をUTCタイムスタンプに変換する、極めて軽量なGoライブラリ
- [wuid](https://github.com/edwingeng/wuid) - 非常に高速なグローバルユニークナンバー生成器
- [xid](https://github.com/rs/xid) - XidはグローバルユニークID生成ライブラリであり、サーバーコードに直接安全に使用できるように設計されている

**[⬆ back to top関連](#contents)**

## バリデーション <a id="validation"></a>

_バリデーションに関するGoライブラリ、ツール、または資料です。_

- [checkdigit](https://github.com/osamingo/checkdigit) - チェックディジットアルゴリズム（Luhn、Verhoeff、Damm）および計算器（ISBN、EAN、JAN、UPCなど）を提供
- [go-validator](https://github.com/tiendc/go-validator) - ジェネリクスを使用した検証ライブラリ
- [gody](https://github.com/guiferpa/gody) - :balloon: Go用の軽量構造体検証ライブラリ
- [govalid](https://github.com/twharmon/govalid) - 構造体に対する高速かつタグベースの検証
- [govalidator](https://github.com/asaskevich/govalidator) - 文字列、数値、スライス、構造体に対する検証とクリーンアップツール
- [govalidator](https://github.com/thedevsaddam/govalidator) - シンプルなルールでGolangのリクエストデータを検証。Laravelのリクエスト検証に強くインスパイアされている
- [govy](https://github.com/nobl9/govy) - ジェネリクスとリフレクションを使い、強制型検証ルールを提供。明確で情報豊かなエラーメッセージを優先した設計
- [hvalid](https://github.com/lyonnee/hvalid) hvalid is a lightweight validation library written in Go language. It provides a custom validator interface and a series of common validation functions to help developers quickly implement data validation.
- [jio](https://github.com/faceair/jio) - jio は [joi](https://github.com/hapijs/joi) に類似する JSON スキーマバリデーター
- [ozzo-validation](https://github.com/go-ozzo/ozzo-validation) - さまざまなデータ型（構造体、文字列、マップ、スライスなど）の検証をサポート。検証ルールは通常のコード構造で設定可能で、構造体タグではなく指定可能
- [validate](https://github.com/gookit/validate) - Goパッケージでデータのバリデーションとフィルタリングを実現。Map、Struct、Request（Form、JSON、url.Values、アップロードファイル）などのデータのバリデーションおよびその他の機能をサポート。
- [validate](https://github.com/gobuffalo/validate) - このパッケージはGoアプリケーションにおけるバリデーションの記述を可能にするフレームワークを提供する。
- [validator](https://github.com/go-playground/validator) - GoのStructおよびフィールドバリデーション。クロスフィールド、クロスStruct、Map、SliceおよびArrayのネスト処理を含む。
- [Validator](https://github.com/go-the-way/validator) - Goで書かれた軽量なモデルバリデイター。VFs：Min、Max、MinLength、MaxLength、Length、Enum、Regexを含む。
- [valix](https://github.com/marrow16/valix) Go package for validating requests
- [Zog](https://github.com/Oudwins/zog) - [Zod](https://github.com/colinhacks/zod) をインスピレーションとして、ランタイム値のパーサーおよびバリデーターを構築するスキーマビルダー。**[⬆ back to top](#contents)**

## バージョン管理 <a id="version-control"></a>

_バージョン管理に関するGoライブラリ、ツール、または資料です。_

- [cli](https://gitlab.com/gitlab-org/cli) - オープンソースのGitLabコマンドラインツール。GitLabの魅力的な機能をコマンドラインに届ける。
- [froggit-go](https://github.com/jfrog/froggit-go) - Froggit-Goは、VCSプロバイダーに対して操作を行うGoライブラリ。
- [ggc](https://github.com/bmf-san/ggc) - Git CLIツールで、従来のコマンドラインとインタラクティブなインクリメンタル検索UI、ワークフロー対応、カスタマイズ可能なキーバインディングを備える。
- [git-courer](https://github.com/Alejandro-M-P/git-courer) - Ollamaを使用したローカルMCPサーバー。トークンを保存し、秘密情報の漏洩を防ぐ。
- [git2go](https://github.com/libgit2/git2go) - libgit2に対するGoのバインディング。
- [githooks](https://github.com/gabyx/githooks) - リポジトリごとおよび共有Gitホック。バージョン管理と自動更新をサポート。
- [gitty](https://github.com/Omibranch/gitty) - 1つのバイナリでGit/GitHub CLIを実現。add→commit→pushを1コマンドで実行。人間が読みやすい構文であり、外部依存なし。
- [go-git](https://github.com/go-git/go-git) - 純Goで構成された高度に拡張可能なGit実装。
- [go-vcs](https://github.com/sourcegraph/go-vcs) - GoでVCSリポジトリの操作および検証を行う。
- [hercules](https://github.com/src-d/hercules) - Gitリポジトリの履歴から高度な洞察を得る。
- [hgo](https://github.com/beyang/hgo) - Hgoは、ローカルMercurialリポジトリへの読み取りアクセスを提供するGoパッケージのコレクション。

**[⬆ back to top関連](#contents)**

## 動画 <a id="video"></a>

_動画に関するGoライブラリ、ツール、または資料です。_

- [gmf](https://github.com/3d0c/gmf) - FFmpeg av\*ライブラリに対するGoのバインディング。
- [go-astiav](https://github.com/asticode/go-astiav) - ffmpegのより良いCバインディング（Go用）。
- [go-astisub](https://github.com/asticode/go-astisub) - GOで字幕を操作および検証（.srt、.stl、.ttml、.webvtt、.ssa/.ass、teletext、.smiなど）。
- [go-astits](https://github.com/asticode/go-astits) - GOでMPEG Transport Streams（.ts）をネイティブにパースおよびデマルチ。
- [go-mpd](https://github.com/unki2aut/go-mpd) - MPEG-DASHマニフェストファイルのパーサーおよびジェネレーターライブラリ。
- [goav](https://github.com/giorgisio/goav) - FFmpeg向けの包括的なGoバインディング
- [gortsplib](https://github.com/aler9/gortsplib) - 純粋なGoによるRTSPサーバーとクライアントライブラリ
- [hls-m3u8](https://github.com/Eyevinn/hls-m3u8) - HLS（M3U8）プレイリストのパーサーとジェネレーター；仕様に合わせて常に最新に保たれている
- [libvlc-go](https://github.com/adrg/libvlc-go) - libvlc 2.X/3.X/4.X向けのGoバインディング（VLCメディアプレイヤーで使用）
- [manifestor](https://github.com/alanzng/manifestor) - HLSおよびDASHマニフェストのパース、フィルタ、変換、構築を行うゼロ依存ライブラリ
- [mp4ff](https://github.com/Eyevinn/mp4ff) - 動画、音声、字幕、メタデータを含むMP4ファイルを扱うためのライブラリとツール
- [mpeg-ts-analyzer](https://github.com/small-teton/mpeg-ts-analyzer) - MPEG-2トランスポートストリームのアナライザー。PCRタイミングの適合性をチェックし、低レベルのTS、PSI、PES構造をダンプ
- [v4l](https://github.com/korandiz/v4l) - Linux向けのGoによるビデオキャプチャライブラリ

**[⬆ back to top関連](#contents)**

## Webフレームワーク <a id="web-frameworks"></a>

_Webフレームワークに関するGoライブラリ、ツール、または資料です。_

- [aichteeteapee](https://github.com/psyb0t/aichteeteapee) - ルーター、ミドルウェアスタック、WebSocketハブ、ファイルアップロード、OpenAPIバリデーションを備えた、すべて込みのHTTPサーバーライブラリ
- [Andurel](https://github.com/mbvlabs/andurel) - Railsをインスピレーションとして受けたフルスタックGoウェブフレームワーク。スケルトン生成、データベースツール、サーバーレンダリングまたはInertiaによるフロントエンドを提供
- [Atreugo](https://github.com/savsgio/atreugo) - 高温パスでメモリ割り当てをゼロに保つ、高性能かつ拡張可能なマイクロウェブフレームワーク
- [Barf](https://github.com/opensaucerer/barf) - 基本的に、JSONベースのウェブAPIを構築するための素晴らしいフレームワーク。まったく無侵襲であり、既存の技術を再開発していない。スタートが簡単で迅速であり、複雑なケースにも柔軟に対応できるように設計されている
- [Beego](https://github.com/beego/beego) - beegoはGoプログラミング言語向けのオープンソース・ハイパフォーマンスウェブフレームワーク
- [Confetti Framework](https://confetti-framework.github.io/docs/) - ConfettiはGoのウェブアプリケーションフレームワークで、表現力豊かで洗練された構文を持つ。ConfettiはLaravelの洗練さとGoのシンプルさを融合したものである
- [Don](https://github.com/abemedia/go-don) - 非常に高性能で使いやすいAPIフレームワーク
- [doors](https://github.com/doors-dev/doors) - Goで完全に構築された、状態を持ち、反応性のあるウェブアプリケーションのためのサーバー駆動フレーム及
- [Echo](https://github.com/labstack/echo) - 高性能かつミニマリズムを採用したGoウェブフレームワーク
- [Fastschema](https://github.com/fastschema/fastschema) - 柔軟なGoウェブフレームワークおよびヘッドレスCMS
- [Fiber](https://github.com/gofiber/fiber) - Express.jsをインスピレーションとして設計されたFasthttpベースのウェブフレームワーク
- [Flamingo](https://github.com/i-love-flamingo/flamingo) - プラグイン可能なウェブプロジェクト向けのフレームワーク。モジュールの概念を含み、DI、Configareas、i18n、テンプレートエンジン、GraphQL、可視性、セキュリティ、イベント、ルーティングおよび逆ルーティングなどの機能を提供
- [Flamingo Commerce](https://github.com/i-love-flamingo/flamingo-commerce) - クリーンアーキテクチャ（DDDやポートとアダプタ）を用いたEコマース機能を提供し、柔軟なEコマースアプリケーションを構築できるようにします。
- [Fuego](https://github.com/go-fuego/fuego) - 忙しいGo開発者向けのフレームワーク！WebフレームワークでソースコードからOpenAPI 3仕様を生成します。
- [Gin](https://github.com/gin-gonic/gin) - Goで書かれたWebフレームワーク！マルティニのようなAPIを備えていますが、パフォーマンスが非常に高く、最大40倍速いです。パフォーマンスと開発効率の両立が必要な場合に最適です。
- [Ginrpc](https://github.com/xxjwxc/ginrpc) - Ginのパラメータ自動バインディングツール、Gin RPCツール。
- [go-api-boot](https://github.com/SaiNageswarS/go-api-boot) - gRPCを中心としたマイクロサービスフレームワーク。MongoのODMサポート、クラウドリソースサポート（AWS/Azure/Google）、gRPCに特化したフリュイディーな依存関係注入機能が備わり、gRPC-Webも直接サポートされており、プロキシなしでブラウザからすべてのgRPC APIにアクセス可能です。
- [Goa](https://github.com/goadesign/goa) - Goaは、GoでリモートAPIおよびマイクロサービスを開発するための包括的なアプローチを提供します。
- [GoFr](https://github.com/gofr-dev/gofr) - Gofrは、意見をもつマイクロサービス開発フレームワークです。
- [GoFrame](https://github.com/gogf/gf) - GoFrameは、Go言語で構築されたモジュール化・強力・高性能・企業向けアプリケーション開発フレームワークです。
- [Gone](https://github.com/gone-io/gone) - Springにインスピレーションを受けて開発された軽量な依存関係注入およびWebフレームワーク。
- [goravel](https://github.com/goravel/goravel) - Laravelにインスピレーションを受けて開発されたWebフレーム及、ORM、認証、キュー、タスクスケジューリングなど、内蔵機能が豊富です。
- [Goshtoso](https://github.com/araihu/goshtoso) - Goアプリケーション向けのサーバーレンダリングUIコンポーネント。テンプレート、Tailwind CSS、HTMX、Alpine.jsで構築されています。
- [Goyave](https://github.com/go-goyave/goyave) - クリーンコードと高速開発を意識した、機能が充実したREST APIフレームワーク。強力な内蔵機能を備えています。
- [Hertz](https://github.com/cloudwego/hertz) - 高性能かつ強力な拡張性を持つGo HTTPフレームワーク。開発者がマイクロサービスを構築する際に役立ちます。
- [hiboot](https://github.com/hidevopsio/hiboot) - hibootは、自動設定と依存関係注入をサポートする高性能Webアプリケーションフレームワークです。
- [httpsuite](https://github.com/rluders/httpsuite) - Goで実装されたHTTPリクエストパーサーおよびRFC 9457問題応答。標準ライブラリのみで構成され、オプションのバリデーションを提供します。
- [Huma](https://github.com/danielgtaylor/huma/) - OpenAPI 3、生成されたドキュメント、CLIが内蔵された現代的なREST/GraphQL API用フレームワーク。
- [iWF](https://github.com/indeedeng/iwf) - iWFは、長期間実行されるビジネスプロセス開発に特化した一括プラットフォームです。データベース、ElasticSearch、メッセージキュー、持続可能なタイマーなど、多くのリソースを簡単に抽象化し、シンプルで使いやすいインターフェースを提供します。
- [Lit](https://github.com/jvcoutinho/lit) - Go言語向けの高パフォーマンスかつ宣言型Webフレームワーク。シンプルさと開発者の生活の質を重視しています。
- [Microservice](https://github.com/claygod/microservice) - Go言語で構築されたマイクロサービス開発フレームワーク。
- [NotNet](https://github.com/nottechdm/notnet) - 軽量なGoフレームワーク。ミドルウェアと柔軟なルーティングを活用して、高速で使いやすいRESTful APIを構築できます。
- [patron](https://github.com/beatlabs/patron) - パトロンは、クラウドのベストプラクティスを採用し、生産性を重視したマイクロサービスフレームワークです。
- [Pnutmux](https://gitlab.com/fruitygo/pnutmux) - Pnutmuxは、HTTPリクエストのマッチングと処理に正規表現を使用する強力なGoウェブフレームワークです。CORS処理、構造化ログ、URLパラメータの抽出、ミドルウェア、並列制限といった機能を提供します。
- [Revel](https://github.com/revel/revel) - Go言語向けの高生産性ウェブフレームワークです。
- [rk-boot](https://github.com/rookie-ninja/rk-boot) - GinとgRPCを用いて企業向けGoマイクロサービスを迅速かつ簡単に構築できるブートストラッパーライブラリです。
- [Ronykit](https://github.com/clubpay/ronykit) - プラグインアーキテクチャを備えた、非常に高速なウェブフレームワークです。
- [rux](https://github.com/gookit/rux) - シンプルで高速なGoウェブフレームワーク。Go言語のHTTPアプリケーションの構築に最適です。
- [templui](https://github.com/axzilla/templui) - Goとテンプレート向けの現代的なUIコンポーネントです。
- [togo](https://github.com/togo-framework/togo) - GoバックエンドとReactフロントエンドを1つのバイナリとして提供するフルスタックフレームワーク。Laravel-アーティンのレベルのCLIを備えています。
- [uAdmin](https://github.com/uadmin/uadmin) - Djangoにインスパイアされた、Go言語向けの完全機能ウェブフレームドレームです。
- [WebGo](https://github.com/naughtygopher/webgo) - ハンドラー連鎖、ミドルウェア、コンテキスト注入を用いてウェブアプリを構築するマイクロフレームワーク。標準ライブラリに準拠したHTTPハンドラー（つまり `http.HandlerFunc`）
- [Xun](https://github.com/yaitoo/xun) - Goの標準的なhtml/templateとnet/httpパッケージのルーターをベースにしたウェブフレームワーク。軽量で高速であり、使いやすく、ミドルウェア、ルーティング、テンプレートレンダリングといった高度な機能を提供するシンプルで直感的なAPIを持っています。
- [Yokai](https://github.com/ankorstore/yokai) - シンプルでモジュール化され、観測可能なGoバックエンドフレームワークです。

**[⬆ back to top関連](#contents)**

### ミドルウェア <a id="middlewares"></a>

#### 実際のミドルウェア <a id="actual-middlewares"></a>

- [client-timing](https://github.com/posener/client-timing) - Server-Timingヘッダー用のHTTPクライアントです。
- [CORS](https://github.com/rs/cors) - APIにCORS機能を簡単に追加できます。
- [echo-middleware](https://github.com/faabiosr/echo-middleware) - Echoフレームワーク向けのログ記録とメトリクスを備えたミドルウェアです。
- [formjson](https://github.com/rs/formjson) - JSON入力として標準フォームPOSTを透明に処理します。
- [go-fault](https://github.com/github/go-fault) - Go向けの障害注入ミドルウェアです。
- [Limiter](https://github.com/ulule/limiter) - Go向けの極めてシンプルなレート制限ミドルウェアです。
- [ln-paywall](https://github.com/philippgille/ln-paywall) - Lightning Network（ビットコイン）を用いてAPIをリクエストごとに収益化するためのGoミドルウェアです。
- [mid](https://github.com/bobg/mid) - その他HTTPミドルウェア機能：ハンドラから自然なエラー返却、JSONデータの受信・応答、リクエストトレースなど。
- [rk-gin](https://github.com/rookie-ninja/rk-gin) - Ginフレームワーク向けのログ記録、メトリクス、認証、トレースなどといったミドルウェアです。
- [rk-grpc](https://github.com/rookie-ninja/rk-grpc) - gRPC向けのミドルウェア。ログ、メトリクス、認証、トレースなど。
- [Tollbooth](https://github.com/didip/tollbooth) - HTTPリクエストのレート制限ハンドラー。
- [XFF](https://github.com/sebest/xff) - `X-Forwarded-For` ヘッダーおよびその他のものに対応

#### HTTPミドルウェア作成ライブラリ <a id="libraries-for-creating-http-middlewares"></a>

- [alice](https://github.com/justinas/alice) - Go向けのシンプルなミドルウェア連鎖。
- [catena](https://github.com/codemodus/catena) - http.Handlerのラッパー連結（"chain"と同じAPI）。
- [chain](https://github.com/codemodus/chain) - スコープデータを用いたハンドラーラッパー連鎖（net/contextベースの"ミドルウェア"）。
- [gores](https://github.com/alioygur/gores) - HTML、JSON、XMLなどレスポンスを処理するGoパッケージ。RESTフルAPIに便利。
- [interpose](https://github.com/carbocation/interpose) - Go向けの極めてシンプルなnet/httpミドルウェア。
- [mediary](https://github.com/HereMobilityDevelopers/mediary) - `http.Client` にインターセプタを追加して、リクエスト／レスポンスのダンプ／形状変換／トレース／... を可能にする
- [muxchain](https://github.com/stephens2424/muxchain) - net/http向けの軽量ミドルウェア。
- [negroni](https://github.com/urfave/negroni) - Go向けの自然なHTTPミドルウェア。
- [render](https://github.com/unrolled/render) - JSON、XML、HTMLテンプレートレスポンスを簡単にレンダリングできるGoパッケージ。
- [renderer](https://github.com/thedevsaddam/renderer) - シンプルで軽量かつ高速なレスポンス（JSON、JSONP、XML、YAML、HTML、ファイル）レンダリングパッケージ。
- [stats](https://github.com/thoas/stats) - Webアプリケーションに関するさまざまな情報を保存するGoミドルウェア。

**[⬆ back to top関連](#contents)**

### ルーター <a id="routers"></a>

- [alien](https://github.com/gernest/alien) - 軽量かつ高速なhttpルーター（宇宙から生まれた）。
- [bellt](https://github.com/GuilhermeCaruso/bellt) - シンプルなGo HTTPルーター。
- [Bone](https://github.com/go-zoo/bone) - 超高速HTTPマルチプレクサ。
- [Bxog](https://github.com/claygod/Bxog) - シンプルで高速なGo用HTTPルーター。ルートの難易度、長さ、ネスト構造に関わらず対応。受け取ったパラメータからURLを生成できる。
- [chi](https://github.com/go-chi/chi) - net/contextに基づく、小型で高速かつ表現力の高いHTTPルーター。
- [fasthttprouter](https://github.com/buaazp/fasthttprouter) - 高性能なルーター。 `httprouter` からフォークされたもの。最初の `fasthttp` に最適化されたルーター
- [FastRouter](https://github.com/razonyang/fastrouter) - Goで書かれた高速で柔軟なHTTPルーター。
- [Fox](https://github.com/fox-toolkit/fox) - 高パフォーマンスHTTPルーター。リバースプロキシやAPIゲートウェイの構築に最適。実行時におけるルートの変更に第一クラスのサポート。
- [fursy](https://github.com/coregx/fursy) - 型安全なジェネリックハンドラーを備えたHTTPルーター。コードから自動的にOpenAPI 3.1を生成し、RFC 94057エラー応答を提供。
- [goblin](https://github.com/bmf-san/goblin) - trie木を用いたGoのHTTPルーター
- [gocraft/web](https://github.com/gocraft/web) - GoにおけるMuxおよびミドルウェアパッケージ
- [Goji](https://github.com/goji/goji) - Gojiは、`net/context`をサポートする最小限で柔軟なHTTPリクエストマルチプレクサです
- [GoLobby/Router](https://github.com/golobby/router) - GoLobby Routerは、Goプログラミング言語向けの軽量かつ強力なHTTPルーターです
- [goroute](https://github.com/goroute/route) - シンプルでありながら強力なHTTPリクエストマルチプレクサ
- [GoRouter](https://github.com/vardius/gorouter) - GoRouterは、サーバー/APIマイクロフレームワーク、HTTPリクエストルーター、マルチプレクサ、muxであり、ミドルウェアをサポートしており、をサポートしています `net/context`
- [gowww/router](https://github.com/gowww/router) - ネット/http.Handlerインターフェースと完全に互換性のある、非常に高速なHTTPルーター
- [httprouter](https://github.com/julienschmidt/httprouter) - 高性能ルーター。標準のhttpハンドラーと併用することで、非常に高性能なウェブフレームワークを構築できます
- [httptreemux](https://github.com/dimfeld/httptreemux) - 高速で柔軟な木構造ベースのGo用HTTPルーター。httprouterを参考にしています
- [lars](https://github.com/go-playground/lars) - 軽量で高速かつ拡張可能なゼロ割り当てHTTPルーター。カスタマイズ可能なフレームワークを作成するためにGoで使用されています
- [mux](https://github.com/gorilla/mux) - golang向けの強力なURLルーターおよびディスパッチャ
- [nchi](https://github.com/muir/nchi) - httprouterに基づき、依存性注入ベースのミドルウェアラッパーで構成されたchiのようなルーター
- [ngamux](https://github.com/ngamux/ngamux) - Go向けのシンプルなHTTPルーター
- [ozzo-routing](https://github.com/go-ozzo/ozzo-routing) - 非常に高速なGo（golang）HTTPルーターで、正規表現によるルートマッチングをサポート。RESTful APIの構築に完全なサポートを提供します
- [pure](https://github.com/go-playground/pure) - 標準の"net/http"実装に忠実な軽量HTTPルーターです
- [Siesta](https://github.com/VividCortex/siesta) - ミドルウェアとハンドラを書くためのコンポジブルなフレームワーク
- [vestigo](https://github.com/husobee/vestigo) - パフォーマンスに優れた、スタンドアローンのHTTP準拠URLルーター。Goウェブアプリケーション向けです
- [violetear](https://github.com/nbari/violetear) - Go HTTPルーター
- [xmux](https://github.com/rs/xmux) - 高性能なマルチプレクサ。 `httprouter` に基づき構築されたもので、 `net/context` のサポートあり
- [xujiajun/gorouter](https://github.com/xujiajun/gorouter) - Go向けのシンプルで高速なHTTPルーター

**[⬆ back to top関連](#contents)**

## WebAssembly <a id="webassembly"></a>

- [dom](https://github.com/dennwc/dom) - DOMライブラリ
- [Extism Go SDK](https://github.com/extism/go-sdk) - ユニバーサルで、複数言語に対応したWebAssemblyフレームワーク。プラグインシステムやマルチ言語アプリの構築に使用。
- [go-canvas](https://github.com/markfarnan/go-canvas) - HTML5 Canvasを使用するためのライブラリ。すべての描画処理がGoコード内で行われる。
- [tinygo](https://github.com/tinygo-org/tinygo) - 小型環境向けのGoコンパイラ。マイクロコントローラ、WebAssembly、コマンドラインツールに適用。LLVMをベースにした。
- [vert](https://github.com/norunners/vert) - GoとJSの値間の相互運用。
- [wasmbrowsertest](https://github.com/agnivade/wasmbrowsertest) - ブラウザ内でGoのWASMテストを実行。
- [webapi](https://github.com/gowebapi/webapi) - WebIDLから生成されたDOMおよびHTMLのバインディング。

**[⬆ back to top関連](#contents)**

## Webhookサーバー <a id="webhooks-server"></a>

- [HookRun](https://github.com/bluvenr/hookrun) - 軽量なWebhookアクションエンジン（1つのバイナリサイズ約3MB、依存関係なし）が、YAMLルールからコマンドやスクリプトを実行し、トークン/HMAC/IP認証とホットリロードをサポート。
- [webhook](https://github.com/adnanh/webhook) - ユーザーがサーバー上でコマンドを実行するHTTPエンドポイント（ハック）を作成できるツール。
- [webhooked](https://github.com/42Atomys/webhooked) - Webhook受信者としての強化版：ハンドリング、セキュリティ、フォーマット、保存を、これまで以上に簡単に行える。
- [WebhookX](https://github.com/webhookx-io/webhookx) - メッセージ受信、処理、確実に配信を行うWebhookゲートウェイ。

**[⬆ back to top関連](#contents)**

## Windows <a id="windows"></a>

- [d3d9](https://github.com/gonutz/d3d9) - Direct3D9に対するGoのバインディング。
- [go-ole](https://github.com/go-ole/go-ole) - golang向けのWin32 OLE実装。
- [gosddl](https://github.com/MonaxGT/gosddl) - SDDL文字列からユーザーに親しみやすいJSONへ変換。SDDLは4つの部分から構成される：所有者、主グループ、DACL、SACL。
- [windowsupdate](https://github.com/ceshihao/windowsupdate) - Windows Update Agent APIに対するGoのバインディング（go-oleを使用）。

**[⬆ back to top関連](#contents)**

## ワークフローフレームワーク <a id="workflow-frameworks"></a>

_ワークフローフレームワークに関するGoライブラリ、ツール、または資料です。_

- [Cadence-client](https://github.com/uber-go/cadence-client) - Uberが開発したCadenceオーケストレーションエンジン上で実行されるワークフローとアクティビティを構築するためのフレームワーク。
- [Dagu](https://github.com/dagu-go/dagu) - ノーコードワークフロー実行者。シンプルなYAML形式で定義されたDAGを実行。
- [Flowbaker](https://github.com/flowbaker/flowbaker) - ノーコードワークフローの構築、接続、自動化を行うためのセルフホスト型実行エンジン。
- [go-dag](https://github.com/rhosocial/go-dag) - 有向無サイクルグラフで記述されたワークフローの実行を管理するGoで開発されたフレームドローム。
- [go-taskflow](https://github.com/noneback/go-taskflow) - タスクフローのような汎用タスク並列プログラミングフレームワーク。統合された可視化ツールとプロファイラーを備える。
- [workflow](https://github.com/luno/workflow) - 技術スタックに依存しないイベント駆動型ワークフローフレームワーク。

**[⬆ back to top関連](#contents)**

## XML <a id="xml"></a>

_XMLに関するGoライブラリ、ツール、または資料です。_

- [XML-Comp](https://github.com/xml-comp/xml-comp) - フォルダ、ファイル、タグの差分を生成するシンプルなコマンドラインXML比較ツール
- [xml2map](https://github.com/sbabiv/xml2map) - Golangで書かれたXMLからMAPへの変換ツール
- [xmlquery](https://github.com/antchfx/xmlquery) - xmlqueryはGolangのXPathパッケージです
- [xmlwriter](https://github.com/shabbyrobe/xmlwriter) - libxml2のxmlwriterモジュールに基づくプロシージャルなXML生成API
- [xpath](https://github.com/antchfx/xpath) - Go向けのXPathパッケージ
- [zek](https://github.com/miku/zek) - XMLからGo構造体を生成

## ゼロトラスト <a id="zero-trust"></a>

_ゼロトラストに関するGoライブラリ、ツール、または資料です。_

- [Cosign](https://github.com/sigstore/cosign) - OCIレジストリにおけるコンテナ署名、検証、ストレージ
- [in-toto](https://github.com/in-toto/in-toto-golang) - in-toto（ソフトウェアサプライチェーンの整合性を保護するためのフレームワーク）のPythonリファレンス実装をGoで実装
- [OpenZiti](https://github.com/openziti/ziti) - フルオープンソースのゼロトラストオーバーレイネットワーク。C#などの多くの言語に対応する多数のSDKを提供しており、アプリケーションにゼロトラストの原則を直接埋め込むことができます。には、多くの例が提供されており、その中にはも含まれています [golang](https://github.com/openziti/sdk-golang) [OpenZiti Test Kitchen](https://github.com/openziti-test-kitchen) [zero trust ssh client - zssh](https://github.com/openziti-test-kitchen/zssh)
- [Spiffe-Vault](https://github.com/philips-labs/spiffe-vault) - Hashicorp Vaultと組み合わせたSpiffe JWT認証によるシークレットレス認証
- [Spire](https://github.com/spiffe/spire) - SPIRE（SPIFFEのランタイム環境）は、さまざまなホスティングプラットフォーム間のソフトウェアシステム間の信頼を確立するためのAPIツールチェーンです

## コード解析 <a id="code-analysis"></a>

_コード解析に関するGoライブラリ、ツール、または資料です。_

- [apicompat](https://github.com/bradleyfalzon/apicompat) - Goプロジェクトの最近の変更をバックワード互換性のない変更としてチェック
- [ast-metrics](https://github.com/ast-metrics/ast-metrics) - Goおよびその他の言語向けの静的コード分析ツール：複雑度、結合度、連携度、維持性メトリクス、HTML、JSON、Markdown、SARIFレポートを提供
- [asty](https://github.com/asty-org/asty) - golang ASTをJSONに、JSONをASTに変換
- [blanket](https://gitlab.com/verygoodsoftwarenotvirus/blanket) - Goパッケージに直接ユニットテストがない関数を検出するためのツール
- [ChainJacking](https://github.com/Checkmarx/chainjacking) - Go言語のGitHub直接依存関係のうち、チェーンジャッキング攻撃に脆弱なものを特定
- [Chronos](https://github.com/amit-davidson/Chronos) - 静的にレース条件を検出
- [deadmono](https://github.com/arxeiss/deadmono) - deadcodeの検出をGoのモノリスリポジトリで行うためのラッパー
- [dupl](https://github.com/mibk/dupl) - コードクローン検出ツール
- [errcheck](https://github.com/kisielk/errcheck) - Goプログラムにおける未チェックエラーをチェックするためのプログラム
- [fatcontext](https://github.com/Crocmagnon/fatcontext) - ループや関数リテラル内のネストされたコンテキストを検出するツール
- [go-checkstyle](https://github.com/qiniu/checkstyle) - checkstyleはJavaのcheckstyleに類するスタイルチェックツールです。このツールはJavaのcheckstyle、golintにインスピレーションを受けたもので、Goコードレビューのコメントに記載されたいくつかのポイントを指します。
- [go-cleanarch](https://github.com/roblaszczak/go-cleanarch) - go-cleanarchは、依存性ルールやGoプロジェクト内のパッケージ間の相互作用を検証するためのClean Architecture規則を確認するツールです。
- [go-critic](https://github.com/go-critic/go-critic) - 現在他のリントツールに実装されていないチェックを提供するソースコードリントツールです。
- [go-mod-outdated](https://github.com/psampaz/go-mod-outdated) - Goプロジェクトの古くなった依存関係を簡単に見つけるためのツールです。
- [goast-viewer](https://github.com/yuroyoro/goast-viewer) - WebベースのGolang AST可視化ツールです。
- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) - Goのインポートを自動的に追加・削除するためのツールです。
- [golang-ifood-sdk](https://github.com/arxdsilva/golang-ifood-sdk) - iFood API SDKです。
- [golangci-lint](https://github.com/golangci/golangci-lint) – A fast Go linters runner. It runs linters in parallel, uses caching, supports `yaml` config, has integrations with all major IDE and has dozens of linters included.
- [golines](https://github.com/segmentio/golines) - Goコード内の長すぎる行を自動的に短くするフォーマッタです。
- [gomarklint](https://github.com/shinagawa-web/gomarklint) - HTTPリンクの検証を内蔵したMarkdownリントツール。単一バイナリで構成され、Node.jsは不要です。
- [GoPlantUML](https://github.com/jfeliu007/goplantuml) - 構造とインターフェースの関係を含むテキストプラントゥムクラス図を生成するライブラリとCLIツールです。
- [goreturns](https://github.com/sqs/goreturns) - 関数のリターン型に一致するゼロ値リターン文を追加します。
- [gostatus](https://github.com/shurcooL/gostatus) - コマンドラインツールで、Goパッケージを含むリポジトリの状態を表示します。
- [lint](https://github.com/surullabs/lint) - go testの一部としてリントツールを実行します。
- [php-parser](https://github.com/z7zmey/php-parser) - Goで書かれたPHPパーサーです。
- [revive](https://github.com/mgechev/revive) – ~6x faster, stricter, configurable, extensible, and beautiful drop-in replacement for `golint`.
- [staticcheck](https://github.com/dominikh/go-tools/tree/master/cmd/staticcheck) - staticcheckは、ReSharperなどのC#向けツールで使われる静的解析チェックを多く適用した`go vet`です
- [structalign](https://github.com/peczenyj/structalign) - 構造体のフィールドの並びを変更することでメモリ使用量を減らす方法を示し、ファイルを再構成するのではなく差分を表示します。
- [stto](https://github.com/mainak55512/stto) - 純粋なGoで書かれた軽量かつ非常に高速なコード行数カウンターです。
- [testifylint](https://github.com/Antonboom/testifylint) – A linter that checks usage of [github.com/stretchr/testify](https://github.com/stretchr/testify).
- [tickgit](https://github.com/augmentable-dev/tickgit) - CLIおよびGoパッケージで、コードコメントのTODOを表示（どの言語でも）し、`git blame`を適用して著者を特定します
- [todocheck](https://github.com/preslavmihaylov/todocheck) - コード内のTODOコメントを、問題トラッカーの問題とリンクする静的コード分析ツールです。
- [unconvert](https://github.com/mdempsky/unconvert) - Goソースコードから不要な型変換を削除します。
- [usestdlibvars](https://github.com/sashamelentyev/usestdlibvars) - Go標準ライブラリの変数や定数を使用できる可能性を検出するリントツールです。
- [vacuum](https://github.com/daveshanley/vacuum) - 超軽量かつ超高速なOpenAPIリントツキーツールおよび品質チェックツールです。
- [validate](https://github.com/mccoyst/validate) - 構造体のフィールドにタグが付いている場合、自動的にバリデーションを行う
- [wrapcheck](https://github.com/tomarrell/wrapcheck) - 外部パッケージからのエラーがラップされているかをチェックするlintツール

**[⬆ back to top関連](#contents)**

## エディタープラグイン <a id="editor-plugins"></a>

_エディタープラグインに関するGoライブラリ、ツール、または資料です。_

- [coc-go language server extension for Vim/Neovim](https://github.com/josa42/coc-go) - このプラグインはVim/Neovimに[gopls](https://github.com/golang/tools/blob/master/gopls/README.md)機能を追加します
- [Go Doc](https://github.com/msyrus/vscode-go-doc) - 出力に定義を表示し、Goドキュメントを生成するVisual Studio Code拡張機能
- [Go plugin for JetBrains IDEs](https://plugins.jetbrains.com/plugin/9568-go) - JetBrains IDE向けのGoプラグイン
- [go-mode](https://github.com/dominikh/go-mode.el) - GNU/Emacs向けのGoモード
- [gocode](https://github.com/nsf/gocode) - Goプログラミング言語用の自動補完デーモン
- [goimports-reviser](https://github.com/incu6us/goimports-reviser) - インポートのフォーマットツール
- [goprofiling](https://marketplace.visualstudio.com/items?itemName=MaxMedia.go-prof) - この拡張機能は、VS CodeにGo言語のベンチマークプロファイリングを追加する
- [GoSublime](https://github.com/DisposaBoy/GoSublime) - SublimeText 3向けのGolangプラグインコレクションで、コード補完などIDEのような機能を提供
- [gounit-vim](https://github.com/hexdigest/gounit-vim) - 関数やメソッドの署名に基づいてGoテストを生成するVimプラグイン
- [vim-compiler-go](https://github.com/rjohnsondev/vim-compiler-go) - 保存時に構文エラーをハイライトするVimプラグの機能
- [vim-go](https://github.com/fatih/vim-go) - Vim向けのGo開発プラグイン
- [vscode-go](https://github.com/golang/vscode-go) - Visual Studio Code（VS Code）向けのGo言語サポートを提供する拡張機能
- [Watch](https://github.com/eaburns/Watch) - ファイル変更時にacmeウィンドウでコマンドを実行

**[⬆ back to top関連](#contents)**

## Go generateツール <a id="go-generate-tools"></a>

- [envdoc](https://github.com/g4s8/envdoc) - Goソースファイルから環境変数のドキュメントを生成
- [generic](https://github.com/usk81/generic) - Go向けの柔軟なデータ型
- [gocontracts](https://github.com/Parquery/gocontracts) - ドキュメントとコードを同期させることでGoに設計による契約を導入
- [godal](https://github.com/mafulong/godal) - SQL DDLファイルを指定することでGolangに応じたORMモデルを生成し、GORMで使用可能にする
- [gonerics](https://github.com/bouk/gonerics) - Goにおける自然なジェネリクス
- [gotests](https://github.com/cweill/gotests) - ソースコードからGoテストを生成
- [gounit](https://github.com/hexdigest/gounit) - 自分のテンプレートを使ってGoのテストを生成します。
- [hasgo](https://github.com/DylanMeeus/hasgo) - スライスに対してハスケル風の関数を生成します。
- [oapixconstgen](https://github.com/psyb0t/oapixconstgen) - OpenAPI仕様のx-constants拡張から型付きGo定数を生成します。
- [options-gen](https://github.com/kazhuravlev/options-gen) - デイブ・チェニーの「フレンドリーなAPI向けの機能オプション」に記述された機能オプションについての説明。
- [re2dfa](https://gitlab.com/opennota/re2dfa) - 正規表現を有限状態機械に変換し、Goソースコードを出力します。
- [sqlgen](https://github.com/anqiansong/sqlgen) - SQLファイルまたはDSNからgorm、xorm、sqlx、bun、sqlコードを生成します。
- [TOML-to-Go](https://xuri.me/toml-to-go) - ブラウザ上でTOMLをGo型に即座に変換します。
- [xgen](https://github.com/xuri/xgen) - XSD（XMLスキーマ定義）パーサーおよびGo/C/Java/Rust/TypeScriptコード生成器。

**[⬆ back to top関連](#contents)**

## Goツール <a id="go-tools"></a>

- [decouple](https://github.com/bobg/decouple) - 「過剰に指定された」関数パラメータを検出し、インターフェース型で一般化できるかを確認します。
- [docs](https://github.com/go-oas/docs) - GOプロジェクト向けにOpen API規格に準拠したRESTフルAPIドキュメントを自動生成します。
- [go-callvis](https://github.com/TrueFurby/go-callvis) - Goプログラムの呼び出しグラフをdot形式で可視化します。
- [go-size-analyzer](https://github.com/Zxilly/go-size-analyzer) - コンパイルされたGolangバイナリ内の依存関係のサイズを分析・可視化し、最終ビルドへの影響を明らかにします。
- [go-swagger](https://github.com/go-swagger/go-swagger) - Go向けのSwagger 2.0実装。SwaggerはRESTフルAPIをシンプルかつ強力に表現するものです。
- [go-template-playground](https://bartventer.github.io/go-template-playground/) - Goテンプレートを作成・テストするためのインタラクティブ環境。
- [godbg](https://github.com/tylerwince/godbg) - Rustの`dbg!`マクロの実装により、開発中のデバッグを迅速かつ簡単に実行できます
- [gofindimpl](https://github.com/psyb0t/gofindimpl) - コードベース内で指定されたGoインターフェースを実装しているすべての構造体を検出します。
- [gomodrun](https://github.com/dustinblackman/gomodrun/) - go.modファイルに含まれるバイナリを実行・キャッシュするGoツール。
- [gotemplate.io](https://gotemplate.io/) - オンラインツールで`text/template`テンプレートをリアルタイムでプレビューできます
- [gotestdox](https://github.com/bitfield/gotestdox) - Goテスト結果を読みやすい文として表示します。
- [gothanks](https://github.com/psampaz/gothanks) - GoThanksはgo.mod内のGitHub依存ライブラリを自動的にスターし、そのメンテナーに愛を届けます。
- [gotutor](https://github.com/ahmedakef/gotutor) - オンラインGoデバッガおよび可視化ツール。
- [govisual](https://github.com/doganarif/govisual) - ローカルGoウェブ開発向けのゼロ設定、純GoのHTTPリクエスト可視化・デバッガ。
- [igo](https://github.com/rocketlaunchr/igo) - イゴをGoに変換するトランスパイラ（Go言語の新しい機能！）
- [lensm](https://github.com/loov/lensm) - Goアセンブリとソースコードの閲覧ツール
- [modver](https://github.com/bobg/modver) - Goモジュールの2バージョンを比較し、必要となるバージョン番号の変更（重大、マイナー、パッチレベル）を[semver](https://semver.org/)のルールに基づいて確認します
- [MoniGO](https://github.com/iyashjayesh/monigo) - Goアプリケーション向けパフォーマンスモニタリングライブラリ。リアルタイムでアプリケーションパフォーマンスを把握できます！🚀
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - GitHubのOctoLinkerブラウザ拡張機能でGoファイルを効率的にナビゲート
- [richgo](https://github.com/kyoh86/richgo) - `go test`の出力にテキスト装飾を追加します
- [roumon](https://github.com/becheran/roumon) - コマンドラインインターフェースで現在のすべてのgoroutineの状態を監視
- [rts](https://github.com/galeone/rts) - RTS: structへの応答。サーバー応答からGo構造体を生成
- [textra](https://github.com/ravsii/textra) - Go構造体のフィールド名、型、タグを抽出し、フィルタリングやエクスポートに使用
- [typex](https://github.com/dtgorski/typex) - Go型とその推移依存関係を確認、または結果をTypeScriptの値オブジェクト（または型）宣言としてエクスポート

**[⬆ back to top関連](#contents)**

## ソフトウェアパッケージ <a id="software-packages"></a>

_ソフトウェアパッケージに関するGoライブラリ、ツール、または資料です。_

**[⬆ back to top関連](#contents)**

### DevOpsツール <a id="devops-tools"></a>

- [abbreviate](https://github.com/dnnrly/abbreviate) - abbreviateは、長さの長い文字列を設定可能な分離子で短くするツール。たとえば、ブランチ名をデプロイメントスタックIDに埋め込む場合など
- [alaz](https://github.com/ddosify/alaz) - 低負荷、eBPFベースのKubernetesモニタリング
- [aptly](https://github.com/aptly-dev/aptly) - aptlyはDebianリポジトリ管理ツール
- [aurora](https://github.com/xuri/aurora) - クロスプラットフォームのWebベースのBeanstalkdキューサーバーコンソール
- [aws-doctor](https://github.com/elC0mpa/aws-doctor) - AWSコストを診断し、無駄なリソースを検出、クラウド支出を最適化するツール（ターミナルから直接）🩺 ☁️
- [awsenv](https://github.com/soniah/awsenv) - Amazon（AWS）環境変数をプロファイルで読み込むための小さなバイナリ
- [Balerter](https://github.com/balerter/balerter) - セルフホスト型のスクリプトベースのアラート管理ツール
- [Blast](https://github.com/dave/blast) - API負荷テストやバッチジョブに使うシンプルなツール
- [bombardier](https://github.com/codesenberg/bombardier) - 高速なクロスプラットキットHTTPベンチマークツール
- [cassowary](https://github.com/rogerwelin/cassowary) - Goで書かれた現代的なクロスプラットフォームHTTP負荷テストツール
- [chaosmonkey](https://github.com/Netflix/chaosmonkey) - アプリケーションがランダムなインスタンスの障害に耐えられるように支援するリシーバリティツール
- [colima](https://github.com/abiosoft/colima) - macOS（およびLinux）向けのコンテナランタイム（最小設定で導入）
- [Ddosify](https://github.com/ddosify/ddosify) - 高パフォーマンスのロードテストツール（Golangで構築）
- [decompose](https://github.com/s0rg/decompose) - Dockerコンテナの接続グラフを生成・処理するツール
- [Den](https://github.com/us/den) - AIエージェント向けのセルフホスト型サンドボックスランタイム。オープンソースのE2B代替ツール
- [DepCharge](https://github.com/centerorbit/depcharge) - 大きなプロジェクトにおける多くの依存関係間のコマンド実行をオーケストレーションするツール
- [dish](https://github.com/thevxn/dish) - 軽量でリモート設定可能なモニタリングサービス
- [Docker](https://www.docker.com/) - 開発者およびシステム管理者向けの分散アプリケーション向けオープンプラットフォーム
- [docker-go-mingw](https://github.com/x1unix/docker-go-mingw) - Windows向けのGoバイナリをビルドするためのDockerイメージ（MinGWツールチェーンを使用）
- [docker-volume-backup](https://github.com/offen/docker-volume-backup) - ローカルまたはS3、WebDAV、Azure Blob Storage、Dropbox、またはSSH対応ストレージにDockerボリュームをバックアップ
- [Dockerfile-Generator](https://github.com/ozankasikci/dockerfile-generator) - さまざまな入力チャンネルを使用して有効なDockerファイルを生成するGoライブラリと実行可能ファイル
- [dogo](https://github.com/liudng/dogo) - ソースファイルの変更をモニタリングし、自動的にコンパイル・実行（再起動）を行う
- [drone-jenkins](https://github.com/appleboy/drone-jenkins) - バイナリ、Docker、またはDrone CIを使用して、下流のJenkinsジョブをトリガーする
- [drone-scp](https://github.com/appleboy/drone-scp) - バイナリ、Docker、またはDrone CIを使用して、SSH経由でファイルとアーティファクトをコピーする
- [Dropship](https://github.com/chrismckenzie/dropship) - CDNを介してコードをデプロイするツール
- [easyssh-proxy](https://github.com/appleboy/easyssh-proxy) - Goパッケージで、SSHおよびSCP経由のリモート実行を簡単に行えます。`ProxyCommand`を用いてダウンロードします
- [fac](https://github.com/mkchoi212/fac) - gitマージコンフリクトを解決するためのコマンドラインインターフェース
- [Flannel](https://github.com/flannel-io/flannel) - FlannelはKubernetes向けのコンテナ用ネットワークファブリック
- [Fleet device management](https://github.com/fleetdm/fleet) - サーバーおよびワークステーション向けの軽量かつプログラマブルなテレメトリ
- [gaia](https://github.com/gaia-pipeline/gaia) - 任意のプログラミング言語で強力なパイプラインを構築できる
- [ghorg](https://github.com/gabrie30/ghorg) - GitHub、GitLab、Gitea、Bitbucketのすべての組織/ユーザーリポジトリを1ディレクトリにクローンできる（迅速に）
- [Gitea](https://github.com/go-gitea/gitea) - Gogsのフォークで、完全にコミュニティが運営している
- [gitea-github-migrator](https://git.jonasfranz.software/JonasFranzDEV/gitea-github-migrator) - すべてのGitHubリポジトリ、イシュー、マイルストーン、ラベルをGiteaインスタンスに移行する
- [gitl](https://github.com/akomyagin/gitl) - AIによるgitコミット範囲のレビュー（リスクスコア：低/中/高）、変更ログの生成、複数リポジトリの活動要約。GitHub Actionが含まれています。
- [go-furnace](https://github.com/go-furnace/go-furnace) - Goで書かれたホスティングソリューション。AWS、GCP、DigitalOcean上でアプリケーションのデプロイを簡単に行えます。
- [go-rocket-update](https://github.com/mouuff/go-rocket-update) - シンプルな方法でセルフアップデート可能なGoアプリケーションを作成。GitHubおよびGitlabに対応。
- [go-selfupdate](https://github.com/sanbornm/go-selfupdate) - Goアプリケーションにセルフアップデート機能を付与します。
- [gobrew](https://github.com/cryptojuice/gobrew) - gobrewは、複数バージョンのGoを簡単に切り替えできるツールです。
- [gobrew](https://github.com/kevincobain2000/gobrew) - Goバージョンマネージャー。Goのインストールと管理に非常にシンプルなツール。rootなしでGoをインストール可能。gobrewはシェルのリハッシュを必要としません。
- [godbg](https://github.com/sirnewton01/godbg) - ウェブベースのgdbフロントエンドアプリケーション。
- [Gogs](https://gogs.io/) - Goプログラミング言語で構築されたセルフホスト型Gitサービス。
- [goma-gateway](https://github.com/jkaninda/goma-gateway) - 宣言型設定、強固なミドルウェア、REST、GraphQL、TCP、UDP、gRPCに対応する軽量APIゲートウェイおよびリバースプロキシ。
- [gonative](https://github.com/inconshreveable/gonative) - Goのビルドツールで、すべてのプラットフォームにクロスコンパイルできるビルドを作成し、stdlibパッケージのCgo対応バージョンを使用する。
- [govvv](https://github.com/ahmetalpbalkan/govvv) - 「go build」のラッパーとして、Goバイナリにバージョン情報を簡単に追加できる。
- [grapes](https://github.com/yaronsumel/grapes) - SSH経由でコマンドを簡単に配布するための軽量ツール。
- [GVM](https://github.com/moovweb/gvm) - GVMはGoバージョンの管理にインターフェースを提供します。
- [Hey](https://github.com/rakyll/hey) - Heyは、ウェブアプリケーションに負荷を送るための小さなプログラム。
- [httpref](https://github.com/dnnrly/httpref) - httprefは、HTTPメソッド、ステータスコード、ヘッダー、TCPおよびUDPポートに関する便利なCLIリファレンス。
- [jcli](https://github.com/jenkins-zh/jenkins-cli) - Jenkins CLIは、Jenkinsを簡単に管理できるツールです。
- [k0s](https://github.com/k0sproject/k0s) - 摩擦のないKubernetesディストリビューション。
- [k3d](https://github.com/k3d-io/k3d) - CNCFのk3sをDockerで簡単に実行するための小さなヘルパー。
- [k3s](https://github.com/k3s-io/k3s) - 軽量なKubernetes。
- [k6](https://github.com/grafana/k6) - GoとJavaScriptを使用した現代的な負荷テストツール。
- [k9s](https://github.com/derailed/k9s) - Kubernetes CLI でクラスタをスタイリッシュに管理します
- [kala](https://github.com/ajvb/kala) - シンプルで現代的かつパフォーマンスの高いジョブスケジューラ
- [kcli](https://github.com/cswank/kcli) - Kafka のトピック／パーティション／メッセージを確認するコマンドラインツール
- [kepfi](https://github.com/Knuspii/kepfi) - rm へのスマートな代替ツールで復旧バインとストレージトラッキング機能を備えています
- [kind](https://github.com/kubernetes-sigs/kind) - Kubernetes IN Docker - Kubernetes のローカルクラスタ用のテスト環境
- [ko](https://github.com/google/ko) - Kubernetes で Go アプリケーションを構築・デプロイするコマンドラインツール
- [kool](https://github.com/kool-dev/kool) - Docker 環境を管理するコマンドラインツール（簡単な方法）
- [kubeblocks](https://github.com/apecloud/kubeblocks) - KubeBlocks は、K8s 上でデータベース、メッセージキュー、その他データインフラを実行・管理するオープンソースのコントロールプレーンです
- [kubefwd](https://github.com/txn2/kubefwd) - サービスごとに一意のIPを割り当てた、大量のKubernetesポートフォワーディングを実現するローカル開発用ツール
- [kubernetes](https://github.com/kubernetes/kubernetes) - Googleから提供されるコンテナクラスタマネージャー
- [kubeshark](https://github.com/kubeshark/kubeshark) - Kubernetes向けAPIトラフィックアナライザ、Wiresharkをインスピレーションに受けて、Kubernetesに特化して設計されています
- [KubeVela](https://github.com/kubevela/kubevela) - クラウドネイティブアプリケーションデリバリー
- [KubeVPN](https://github.com/kubenetworks/kubevpn) - KubeVPN は、Kubernetesクラスタネットワークにシームレスに接続されるクラウドネイティブ開発環境を提供します
- [KusionStack](https://github.com/KusionStack/kusion) - 現代的なアプリケーションを「プラットフォームアスコード」と「インフラアスコード」アプローチで提供する統合可能なプログラマブル設定技術スタック
- [kwatch](https://github.com/abahmed/kwatch) - Kubernetes(K8s)クラスタ内のクラッシュを即座に監視・検出
- [lstags](https://github.com/ivanilves/lstags) - 異なるレジストリ間のDockerイメージを同期するツールおよびAPI
- [lwc](https://github.com/timdp/lwc) - UNIXのwcコマンドのリアルタイムアップデートバージョン
- [manssh](https://github.com/xwjdsh/manssh) - manssh は、SSHアリア設定を簡単に管理するコマンドラインツールです
- [Mantil](https://github.com/mantil-io/mantil) - AWS上でサーバレスアプリケーションを構築するためのGo専用フレームワーク。純粋なGoコードに集中できるようにし、Mantilがインフラを管理します
- [minikube](https://github.com/kubernetes/minikube) - ローカルでKubernetesを実行します
- [Moby](https://github.com/moby/moby) - コンテナエコシステムにおける協働プロジェクトで、コンテナベースのシステムを構成するもの。
- [Mora](https://github.com/emicklei/mora) - MongoDBドキュメントおよびメタデータにアクセスするRESTサーバー。
- [ostent](https://github.com/ostrost/ostent) - システムメトリクスを収集・表示し、オプションでGraphiteおよび/またはInfluxDBに転送。
- [Packer](https://github.com/mitchellh/packer) - Packerは、1つのソース構成から複数のプラットフォーム向けに同一のマシンイメージを作成するツール。
- [Pewpew](https://github.com/bengadbois/pewpew) - 柔軟なHTTPコマンドラインストレステストツール。
- [pingtower](https://github.com/crleonard/pingtower) - ウェブサイトおよびAPI向けの軽量かつ自己ホスト可能な稼働状態モニタリングツール。
- [PipeCD](https://github.com/pipe-cd/pipecd) - GitOpsスタイルの継続デリバリープラットフォームで、どのアプリケーションにも一貫したデプロイおよび運用体験を提供。
- [podinfo](https://github.com/stefanprodan/podinfo) - PodinfoはGoで作成された小さなウェブアプリケーションで、Kubernetesにおけるマイクロサービスの運用におけるベストプラクティスを示すもの。PodinfoはFluxやFlaggerといったCNCFプロジェクトで、端末から端末までテストおよびワークショップに使用。
- [podman-tui](https://github.com/containers/podman-tui) - Podmanの管理用のテラミナルUI。
- [Pomerium](https://github.com/pomerium/pomerium) - Pomeriumは、識別情報に依存したアクセスプロキシ。
- [Rodent](https://github.com/alouche/rodent) - RodentはGoバージョンやプロジェクトの管理、依存関係の追跡を支援するツール。
- [s3-proxy](https://github.com/oxyno-zeta/s3-proxy) - GET、PUT、DELETEメソッドと認証（OpenID ConnectおよびBasic Auth）を備えたS3プロキシ。
- [s3gof3r](https://github.com/rlmcpherson/s3gof3r) - 大規模なオブジェクトをAmazon S3に高速転送するための小型ユーティリティ／ライブラリ。
- [s5cmd](https://github.com/peak/s5cmd) - 非常に高速なS3およびローカルファイルシステムの実行ツール。
- [Scaleway-cli](https://github.com/scaleway/scaleway-cli) - BareMetalサーバーをコマンドラインで管理（Dockerと同様に簡単）。
- [script](https://github.com/bitfield/script) - DevOpsおよびシステム管理タスクに、シェル風のGoスクリプトを書くことを容易にする。
- [sg](https://github.com/ChristopherRabotin/sg) - HTTPエンドポイント（例：ab）のセットをベンチマークし、各呼び出し間の応答コードおよびデータを前回の応答に基づいてサーバーの負荷を特定できる。
- [sigma](https://github.com/go-sigma/sigma) - OCIネイティブなコンテナイメージレジストリで、OCIネイティブなアーティファクト、アーティファクトのスキャン、イメージのビルドなどをサポート。
- [skm](https://github.com/TimothyYe/skm) - SKMはシンプルかつ強力なSSH鍵マネージャーであり、複数のSSH鍵を簡単に管理できる。
- [StatusOK](https://github.com/sanathp/statusok) - ウェブサイトおよびREST APIの監視。サーバーが停止しているか、応答時間が予想より長い場合に、SlackやEメールで通知。
- [tau](https://github.com/taubyte/tau) - サーバレスWebAssembly関数、フロントエンドホスティング、CI/CD、オブジェクトストレージ、K/Vデータベース、パブリッシュ・サブスクリプションメッセージングといった機能を備えたクラウドコンピューティングプラットフォームを簡単に構築できます
- [terraform-provider-openapi](https://github.com/dikhan/terraform-provider-openapi) - OpenAPIドキュメント（以前はSwaggerファイルと呼ばれていた）に記載されたAPI定義に基づき、実行時において動的に自身を構成するTerraformプロバイダープラグイン
- [tf-profile](https://github.com/datarootsio/tf-profile) - Terraformの実行プロファイリングツール。グローバル統計、リソースレベルの統計、または可視化を生成します
- [tickstem/uptime](https://github.com/tickstem/uptime) - SSL有効期限アラートと設定可能なレスポンス確認を含むHTTPの稼働状態モニタリング用Goクライアント
- [tlm](https://github.com/yusufcanb/tlm) - ローカルCLIコピロップ、CodeLLaMaによって駆動
- [traefik](https://github.com/containous/traefik) - 複数のバックエンドをサポートするリバースプロキシとロードバランサ
- [trubka](https://github.com/xitonix/trubka) - Apache Kafkaクラスタの管理およびトラブルシューティングを行うCLIツールで、プロトコルバッファおよびテキストイベントをKafkaに一般に送受信できる
- [Updatecli](https://github.com/updatecli/updatecli) - ユニバーサルな宣言型更新ポリシーエンジン
- [uTask](https://github.com/ovh/utask) - YAMLに記述されたビジネスプロセスをモデル化・実行する自動化エンジン
- [Vegeta](https://github.com/tsenart/vegeta) - HTTP負荷テストツールおよびライブラリ。9000以上！
- [wait-for](https://github.com/dnnrly/wait-for) - コマンドラインから何かが起こるまで待機してから続行。Dockerサービスなど他のものを簡単にオーケストレーションできます
- [Wide](https://wide.b3log.org/login) - Golangを使用したチーム向けのウェブベースIDE
- [winrm-cli](https://github.com/masterzen/winrm-cli) - Windowsマシン上でリモートにコマンドを実行するCLIツール
- [zerohand](https://github.com/nilpoona/zerohand) - WebAPI向けのシンプルかつ効率的な負荷テストツール

**[⬆ back to top関連](#contents)**

### その他のソフトウェア <a id="other-software"></a>

- [Backrest](https://github.com/garethgeorge/backrest) - resticバックアップ用のウェブベースUIおよびオーケストレーター
- [Better Go Playground](https://goplay.tools) - シンタックスハイライト、コード補完など他の機能を備えたGoプレインド
- [blocky](https://github.com/0xERR0R/blocky) - ローカルネットワークのアドブロッカーとして、多くの機能を備えた高速かつ軽量なDNSプロキシ
- [bluetuith](https://github.com/bluetuith-org/bluetuith) - Linux用のTUI Bluetoothマネージャ
- [borg](https://github.com/crufter/borg) - bashスニペット向けのターミナルベースの検索エンジン
- [boxed](https://github.com/tejo/boxed) - Dropboxベースのブログエンジン
- [Chapar](https://github.com/chapar-rest/chapar) - チャパールは、Goで構築されたクロスプラットフォームのPostmanの代替品であり、開発者がAPIエンドポイントをテストするのを支援する目的で作られた。HTTPおよびgRPCプロトコルをサポートしている。
- [Cherry](https://github.com/rafael-santiago/cherry) - Goで書かれたミニウェブチャットサーバー。
- [chicha-isotope-map](https://github.com/matveynator/chicha-isotope-map) - 自前で運用可能な公開放射線マップ。測定データのインポート、解析、可視化を行うためのツール。
- [Circuit](https://github.com/gocircuit/circuit) - Circuitは、クラウドアプリケーションを構成するサービスおよびホストの管理、発見、同期、オーケストレーションを行うためのプログラマブルなプラットフォーム-as-a-service（PaaS）および/またはインフラストラクチャ-as-a-service（IaaS）。
- [Comcast](https://github.com/tylertreat/Comcast) - 悪いネットワーク接続をシミュレートする。
- [confd](https://github.com/kelseyhightower/confd) - etcdまたはconsulからテンプレートとデータを取得して、ローカルアプリケーションの設定ファイルを管理する。
- [crawley](https://github.com/s0rg/crawley) - CLI用のウェブスクレイピング／クロールツール。
- [croc](https://github.com/schollz/croc) - 1台のコンピュータから別のコンピュータへファイルやフォルダを簡単にかつ安全に送信する。
- [CrunchyCleaner](https://github.com/Knuspii/CrunchyCleaner) - WindowsおよびLinux向けの軽量ソフトウェアキャッシュクリーンアップツール。
- [Documize](https://github.com/documize/community) - SaaSツールからのデータを統合した現代的なWikiソフトウェア。
- [dp](https://github.com/scryinfo/dp) - ブロックチェーンとのデータ交換を可能にするSDKにより、開発者はDAPP開発に簡単にアクセスできる。
- [drive](https://github.com/odeke-em/drive) - コマンドライン用のGoogle Driveクライアント。
- [Duplicacy](https://github.com/gilbertchen/duplicacy) - ロックフリーの重複除去の理念に基づいたクロスプラットフォームのネットワークおよびクラウドバックアップツール。
- [fjira](https://github.com/mk-5/fjira) - Attlasian Jira向けのファジー検索ベースのターミナルUIアプリケーション。
- [Gebug](https://github.com/moshebe/gebug) - Docker化されたGoアプリケーションのデバッグを非常に簡単かつ安全に実現するツール。デバッガーやホットリロード機能を提供する。
- [gfile](https://github.com/Antonito/gfile) - WebRTCを用いて、2台のコンピュータ間で第三者なしにファイルを安全に転送する。
- [Go Package Store](https://github.com/shurcooL/Go-Package-Store) - あなたのGOPATH内のGoパッケージのアップデート情報を表示するアプリ。
- [go-peerflix](https://github.com/Sioro-Neoku/go-peerflix) - ビデオストリーミング用のトーテンクライアント。
- [goblin](https://goblin.run) - Go言語で書かれたCLI用のクラウドビルダー。
- [GoBoy](https://github.com/Humpheh/goboy) - Goで書かれたニンテンドーゲームボーイカラーのエミュレーター。
- [gocc](https://github.com/goccmack/gocc) - GoccはGoで書かれたGo用コンパイラキットです
- [GoDocTooltip](https://github.com/diankong/GoDocTooltip) - Goドキュメントサイト向けのChrome拡張機能で、関数リスト上に関数の説明をツールチップとして表示します
- [Gokapi](https://github.com/Forceu/gokapi) - ダウンロード回数または日数に設定された数値後に期限が切れるファイル共有サーバー。Firefox Sendに類似していますが、公開アップロードは不要です
- [GoLand](https://jetbrains.com/go) - フル機能のマルチプラットフォームGo IDE
- [GoNB](https://github.com/janpfeifer/gonb) - JupyterノートブックによるインタラクティブなGoプログラミング（VSCode、Binder、GoogleのColabでも動作）
- [GooseForum](https://github.com/leancodebox/GooseForum) - Go、Vue、Tailwind CSSで構築されたセルフホスト型フォーラムプラットフォーム
- [Gor](https://github.com/buger/gor) - プロダクション環境からステージ／開発環境へのHTTPトラフィックをリアルタイムで再現するツール
- [Guora](https://github.com/meloalright/guora) - Goで構築されたQuoraのようなセルフホスト型ウェブアプリケーション
- [hoofli](https://github.com/dnnrly/hoofli) - ChromeまたはFirefoxのネットワーク調査からPlantUML図を生成します
- [hotswap](https://github.com/edwingeng/hotswap) - Goコードを再読み込みできる完全なソリューションで、サーバーの再起動を必要とせず、進行中のプロセスを中断またはブロックしません
- [hugo](https://gohugo.io/) - 高速かつ現代的な静的ウェブサイトエンジン
- [ide](https://github.com/thestrukture/ide) - ブラウザにアクセス可能なIDE。Go向けに設計されています
- [joincap](https://github.com/assafmo/joincap) - 複数のpcapファイルを結合するコマンドラインツール
- [JuiceFS](https://github.com/juicedata/juicefs) - RedisとAWS S3に基づく分散POSIXファイルシステム
- [Juju](https://jujucharms.com/) - クラウドに依存しないサービスのデプロイとオーケストレーション - EC2、Azure、Openstack、MAASなどに対応
- [Layli](https://layli.app) - コードで美しいレイアウト図を描画します
- [Leaps](https://github.com/jeffail/leaps) - オペレーショナルトランスフォームを用いたペアプログラミングサービス
- [lgo](https://github.com/yunabe/lgo) - JupyterによるインタラクティブなGoプログラミン。コード補完、コード検証、100％Go互換をサポートします
- [LightCMS](https://github.com/jonradoff/lightcms) - 静的ページ生成、役割ベースのアクセス制御、エージェント駆動コンテンツ操作用MCPサーバーを備えたセルフホスト型コンテンツ管理システム
- [limetext](https://limetext.github.io) - Lime Textは、Sublime Textの無料かつオープンソースな後継として設計された、Goで主に開発された強力で美しいテキストエディタです
- [LiteIDE](https://github.com/visualfc/liteide) - LiteIDEはシンプルでオープンソースかつプラットフォームを越えて使えるGoのIDEです
- [mac-cleanup-go](https://github.com/2ykwang/mac-cleanup-go) - macOSのキャッシュ、ログ、一時ファイルをクリーンするためのプレビューファーストのTUI
- [mdv](https://github.com/Allra-Fintech/mdv) - ブラウザにMarkdownファイルをレンダリングし、リアルタイムリロード、GFM、文法強調、Mermaid図、PDF出力に対応するCLIツール
- [mockingjay](https://github.com/quii/mockingjay-server) - 1つの設定ファイルでフェイクHTTPサーバーとコンシューマー駆動の契約を作成。サーバーがランダムに誤動作するように設定することで、より現実的なパフォーマンステストを実施できます
- [myLG](https://github.com/mehrdadrad/mylg) - Goで書かれたコマンドラインネットワーク診断ツール
- [naclpipe](https://github.com/unix4fun/naclpipe) - Goで書かれたシンプルなNaCL EC25519ベースの暗号パイプツール
- [Neo-cowsay](https://github.com/Code-Hex/Neo-cowsay) - 🐮 cowsayは新時代へと生まれ変わりました
- [nes](https://github.com/fogleman/nes) - Goで書かれたNintendo Entertainment System (NES) エミュレーター
- [onWatch](https://github.com/onllm-dev/onWatch) - AI APIのクォータを複数プロバイダーでローカルに監視し、履歴記録、アラート、ウェブダッシュボードを提供することで、予期せぬ制限や予算超過を回避
- [Orbit](https://github.com/gulien/orbit) - テンプレートからコマンドを実行し、ファイルを生成するためのシンプルなツール
- [peg](https://github.com/pointlander/peg) - Peg、パーサー表現文法、はパッカー解析器生成器の実装です
- [Plik](https://github.com/root-gg/plik) - PlikはGoで書かれた一時ファイルアップロードシステム（Wetransferのような）
- [portal](https://github.com/SpatiumPortae/portal) - Portalは、どのコンピュータからでも別のコンピュータへファイルを転送できるシンプルで使いやすいコマンドラインツール
- [restic](https://github.com/restic/restic) - 重複を削除するバックアッププログラム
- [sake](https://github.com/alajmo/sake) - sakeはローカルおよびリモートホストでのコマンド実行を行うツール
- [scc](https://github.com/boyter/scc) - Sloc Cloc and Codeは、非常に高速かつ正確なコードカウンターで、複雑性計算やCOCOMOの見積もりも可能です
- [Seaweed File System](https://github.com/chrislusf/seaweedfs) - O(1)ディスクシークを実現する高速でシンプルかつスケーラブルな分散ファイルシステム
- [shell2http](https://github.com/msoap/shell2http) - HTTPサーバーを介してシェルコマンドを実行（プロトタイピングやリモート制御用）
- [Snitch](https://github.com/lucasgomide/snitch) - Tsuruでアプリケーションをデプロイした際に、チームや多くのツールに通知するシンプルな方法
- [sonic](https://github.com/go-sonic/sonic) - SonicはGoによるブログプラットフォーム。シンプルで強力です
- [Stack Up](https://github.com/pressly/sup) - スタックアップは、極めてシンプルなデプロイメントツールです。Unixのみで構成されたもので、サーバーのネットワークに「make」のようなものと見なせます。
- [stew](https://github.com/marwanhawari/stew) - コンパイル済みバイナリ用の独立したパッケージマネージャー。
- [syncthing](https://syncthing.net/) - オープンで分散型のファイル同期ツールおよびプロトコル。
- [tcpdog](https://github.com/mehrdadrad/tcpdog) - eBPFをベースとしたTCP観測ツール。
- [tinycare-tui](https://github.com/DMcP89/tinycare-tui) - 24時間以内および週間のGitコミット、現在の天気、自己ケアのアドバイス、ジョーク、そして現在のタスクリストを表示する小さなターミナルアプリ。
- [tldx](https://github.com/brandonyoungdev/tldx) - RDAP、DNS、WHOISのフォールバックを用いて、ドメインの利用可否を一括でチェックするツール。キーワードの並べ替えによる生成。
- [toxiproxy](https://github.com/shopify/toxiproxy) - 自動テスト用のネットワークおよびシステム条件をシミュレートするプロキシ。
- [tsuru](https://tsuru.io/) - 拡張可能でオープンソースのプラットフォームとしてのサービスソフトウェア。
- [vaku](https://github.com/lingrino/vaku) - Vaultにおけるフォルダベースの機能（コピー、移動、検索など）に用いるCLIおよびAPI。
- [vFlow](https://github.com/VerizonDigital/vflow) - 高パフォーマンスでスケーラブルかつ信頼性の高いIPFIX、sFlowおよびNetflowのコレクタ。
- [Wave Terminal](https://waveterm.dev) - Waveは、AIネイティブなターミナルであり、開発者のワークフローをスムーズにし、インラインレンダリング、現代的なUI、そして持続的なセッションを提供します。
- [wellington](https://github.com/wellington/wellington) - Sassプロジェクト管理ツール。スプライト関数（Compassのように）を言語に拡張。
- [woke](https://github.com/get-woke/woke) - ソースコード内の非包括言語を検出するツール。
- [yai](https://github.com/ekkinox/yai) - AIを活用したターミナルアシスタント。
- [zs](https://git.mills.io/prologic/zs) - 非常にシンプルな静的サイトジェネレーター。

**[⬆ back to top関連](#contents)**

# 資料 <a id="resources"></a>

_資料に関するGoライブラリ、ツール、または資料です。_

**[⬆ back to top関連](#contents)**

## ベンチマーク <a id="benchmarks"></a>

- [autobench](https://github.com/davecheney/autobench) - 異なるGoバージョン間のパフォーマンスを比較するためのフレームワーク。
- [go-benchmark-app](https://github.com/mrLSD/go-benchmark-app) - 強力なHTTPベンチマークツール。Аb、Wrk、Siegeツールを組み合わせ、ベンチマークおよび比較結果の統計と各種パラメータを収集。
- [go-benchmarks](https://github.com/tylertreat/go-benchmarks) - いくつかの言語機能と代替アプローチを比較するためのGoのマイクロベンチマーク。
- [go-http-routing-benchmark](https://github.com/julienschmidt/go-http-routing-benchmark) - GoのHTTPリクエストルーターのベンチマークおよび比較。
- [go-json-benchmark](https://github.com/zerosnake0/go-json-benchmark) - GoのJSONベンチマーク。
- [go-ml-benchmarks](https://github.com/nikolaydubina/go-ml-benchmarks) - Goにおける機械学習推論のベンチマーク
- [go-web-framework-benchmark](https://github.com/smallnest/go-web-framework-benchmark) - Goウェブフレームワークのベンチマーク
- [go_serialization_benchmarks](https://github.com/alecthomas/go_serialization_benchmarks) - Goのシリアライゼーション手法に関するベンチマーク
- [gocostmodel](https://github.com/PuerkitoBio/gocostmodel) - Go言語の基本操作に関する一般的なベンチマーク
- [golang-benchmarks](https://github.com/SimonWaldherr/golang-benchmarks) - golangのベンチマークを収集した一覧
- [gospeed](https://github.com/feyeleanor/GoSpeed) - Go言語構文の実行速度を測定するマイクロベンチマーク
- [kvbench](https://github.com/jimrobinson/kvbench) - キーバリューデータベースのベンチマーク
- [skynet](https://github.com/atemerev/skynet) - Skynet 1Mスレッドマイクロベンチマーク
- [speedtest-resize](https://github.com/fawick/speedtest-resize) - Go言語における画像リサイズアルゴリズムの比較
- [vizb](https://github.com/goptics/vizb) - Goベンチマークデータを4次元で可視化するCLIツール

**[⬆ back to top関連](#contents)**

## カンファレンス <a id="conferences"></a>

- [GoCon](https://gocon.connpass.com/) - 日本、東京
- [GoDays](https://www.godays.io/) - ドイツ、ベルリン
- [GoLab](https://golab.io/) - イタリア、フロレンス
- [GopherCon](https://www.gophercon.com/) - 毎年異なる場所、アメリカ
- [GopherCon Africa](https://gophercon.africa/) - ケニア、ナイロビ
- [GopherCon Australia](https://gophercon.com.au/) - オーストラリア、シドニー
- [GopherCon Brazil](https://gopherconbr.org) - ブラジル、フロリアンポリス
- [GopherCon China](https://gophercon.com.cn) - 中国、上海
- [GopherCon Europe](https://gophercon.eu/) - ドイツ、ベルリン
- [GopherCon India](https://gopherconindia.org/) - インド、パンジュ
- [GopherCon Israel](https://www.gophercon.org.il/) - イスラエル、テルアビブ。
- [GopherCon Russia](https://www.gophercon-russia.ru) - ロシア、モスクワ。
- [GopherCon Singapore](https://gophercon.sg) - シンガポール、マップルツリー・ビジネス・シティ。
- [GopherCon UK](https://www.gophercon.co.uk/) - イギリス、ロンドン。
- [GopherCon Vietnam](https://gophercon.vn/) - ベトナム、ホ・チ・ミン・シティ。
- [GoWest Conference](https://www.gowestconf.com/) - アメリカ、リーヒ。

**[⬆ back to top関連](#contents)**

## 電子書籍 <a id="e-books"></a>

### 有料電子書籍 <a id="e-books-for-purchase"></a>

- [100 Go Mistakes: How to Avoid Them](https://www.manning.com/books/100-go-mistakes-how-to-avoid-them)
- [Black Hat Go](https://nostarch.com/blackhatgo) - ハッカーとペンテスター向けのGoプログラミング。
- [Build an Orchestrator in Go](https://www.manning.com/books/build-an-orchestrator-in-go)
- [Continuous Delivery in Go](https://www.manning.com/books/continuous-delivery-in-go) - この実践的な継続デリバリーガイドは、テスト、コード品質、最終製品の改善を迅速に実現する自動パイプラインの構築方法を示します。
- [Creative DIY Microcontroller Project With TinyGo and WebAssembly](https://www.packtpub.com/product/creative-diy-microcontroller-projects-with-tinygo-and-webassembly/9781800560208) - ArduinoおよびWebAssemblyを用いたプロジェクトを含む、TinyGoコンパイラへの導入。
- [Effective Go: Elegant, efficient, and testable code](https://www.manning.com/books/effective-go) - Goのプログラム設計における独自の視点を解き明かし、シンプルで維持性・テスト性の高いGoコードを書くことを始めましょう。
- [For the Love of Go](https://bitfieldconsulting.com/books/love) - Go初心者向けの入門書。
- [Go in Practice, Second Edition](https://www.manning.com/books/go-in-practice-second-edition) - Go開発のすべての側面を実践的に解説したガイド。Goの標準ライブラリおよび強力なエコシステムから最も重要なツールをカバー。
- [Know Go: Generics](https://bitfieldconsulting.com/books/generics) - Goのジェネリクスを理解し活用するためのガイド。
- [Lets-Go](https://lets-go.alexedwards.net) - Goを用いた高速で安全かつ維持性の高いウェブアプリケーションをステップバイステップで作成するガイド。
- [Lets-Go-Further](https://lets-go-further.alexedwards.net) - GoでAPIおよびウェブアプリケーションを構築するための高度なパターン。
- [The Power of Go: Tests](https://bitfieldconsulting.com/books/tests) - Goでのテスト手法を解説するガイド。
- [The Power of Go: Tools](https://bitfieldconsulting.com/books/tools) - Goでコマンドラインツールを書くためのガイド。
- [Writing A Compiler In Go](https://compilerbook.com)
- [Writing An Interpreter In Go](https://interpreterbook.com) - 数十の技術を解説し、よくある険を避けながら、自然で表現力があり効率的なGoコードを書くための技術を紹介する書籍。

### 無料電子書籍 <a id="free-e-books"></a>

- [A Go Developer's Notebook](https://leanpub.com/GoNotebook/read)
- [An Introduction to Programming in Go](http://www.golang-book.com/)
- [Build a blockchain from scratch in Go with gRPC](https://github.com/volodymyrprokopyuk/go-blockchain) - GoとgRPCを用いて、ゼロからブロックチェーンを効果的に学び、段階的に構築するための基礎的かつ実践的なガイド。
- [Build Web Application with Golang](https://astaxie.gitbooks.io/build-web-application-with-golang/content/en/)
- [Building Web Apps With Go](https://codegangsta.gitbooks.io/building-web-apps-with-go/content/)
- [Go 101](https://go101.org) - Goの文法・意味論およびすべての細部について解説する書籍。
- [Go AST Book (Chinese)](https://github.com/chai2010/go-ast-book) - Goの`go/*`パッケージに焦点を当てた書籍
- [Go Faster](https://leanpub.com/gofaster) - この本は、あなたの学習を短くし、Goプログラマーとしてのスキルを早く身につけることを目的としています。
- [Go Succinctly](https://github.com/thedevsir/gosuccinctly) - ペルシャ語で。
- [Go with the domain](https://threedots.tech/go-with-the-domain/) - 実際のリファクタリングをもとに、DDD、Clean Architecture、CQRSをどのように適用するかを示す本。
- [GoBooks](https://github.com/dariubs/GoBooks) - Goに関する素晴らしい本の厳選リスト。
- [How To Code in Go eBook](https://www.digitalocean.com/community/books/how-to-code-in-go-ebook) - 初めての開発者向けの600ページのGo入門書。
- [Learning Go](https://www.miek.nl/downloads/Go/Learning-Go-latest.pdf)
- [Network Programming With Go](https://jan.newmarch.name/golang/)
- [Practical Go Lessons](https://www.practical-go-lessons.com/)
- [Spaceship Go A Journey to the Standard Library](https://blasrodri.github.io/spaceship-go-gh-pages/)
- [The Go Programming Language](https://www.gopl.io/)
- [The Golang Standard Library by Example (Chinese)](https://github.com/polaris1119/The-Golang-Standard-Library-by-Example)
- [The Little Go Book](https://github.com/karlseguin/the-little-go-book)
- [Web Application with Go the Anti-Textbook](https://github.com/thewhitetulip/web-dev-golang-anti-textbook/)

**[⬆ back to top関連](#contents)**

## Gopher <a id="gophers"></a>

- [Free Gophers Pack](https://github.com/MariaLetta/free-gophers-pack) - Maria LettaによるGopherグラフィックスパック。ベクターやレターアイコンに感情を込めたイラストが含まれています。
- [Go-gopher-Vector](https://github.com/keygx/Go-gopher-Vector) - Go gopher ベクターデータ（.ai, .svg）。
- [gopher-logos](https://github.com/GolangUA/gopher-logos) - かわいいGopherロゴ。
- [gopher-stickers](https://github.com/tenntenn/gopher-stickers)
- [gophericons](https://github.com/shalakhin/gophericons)
- [gopherize.me](https://github.com/matryer/gopherize.me) - 自分をGopher化する。
- [gophers](https://github.com/ashleymcnamara/gophers) - Ashley McNamaraによるGopherアート作品。
- [gophers](https://github.com/egonelbre/gophers) - 無料のGopher。
- [gophers](https://github.com/rogeralsing/gophers) - ランダムなGopherグラフィックス。
- [gophers](https://github.com/sillecelik/go-gopher) - Gopherアミグウミのぬいぐるみパターン。
- [gophers](https://github.com/scraly/gophers) - Aurélie VacheによるGopher作品。

**[⬆ back to top関連](#contents)**

## ミートアップ <a id="meetups"></a>

- [Basel Go Meetup](https://www.meetup.com/Basel-Go-Meetup/)
- [Belfast Gophers](https://www.meetup.com/Belfast-Gophers/)
- [Belgrade Golang Meetup](https://www.meetup.com/golang-serbia/)
- [Berlin Golang](https://www.meetup.com/golang-users-berlin/)
- [Brisbane Gophers](https://www.meetup.com/Brisbane-Golang-Meetup/)
- [Bärner Go Meetup - Berne, Switzerland](https://www.meetup.com/berner-go-meetup/)
- [Go Ireland - Dublin](https://www.meetup.com/goireland/)
- [Go Language NYC](https://www.meetup.com/golanguagenewyork/)
- [Go London User Group](https://www.meetup.com/Go-London-User-Group/)
- [Go Remote Meetup](https://www.meetup.com/Go-Remote-Meetup/)
- [Go Toronto](https://www.meetup.com/go-toronto/)
- [Go User Group Atlanta](https://www.meetup.com/Go-Users-Group-Atlanta/)
- [GoBandung](https://www.meetup.com/GoBandung/)
- [GoBridge, San Francisco, CA](https://www.meetup.com/gobridge/)
- [GoCracow - Krakow, Poland](https://www.meetup.com/GoCracow/)
- [GoJakarta](https://www.meetup.com/GoJakarta/)
- [Golang Amsterdam](https://www.meetup.com/golang-amsterdam/)
- [Golang Argentina](https://www.meetup.com/Golang-Argentina/)
- [Golang Athens](https://www.meetup.com/Athens-Gophers/)
- [Golang Baltimore, MD](https://www.meetup.com/BaltimoreGolang/)
- [Golang Bangalore](https://www.meetup.com/Golang-Bangalore/)
- [Golang Belo Horizonte - Brazil](https://www.meetup.com/go-belo-horizonte/)
- [Golang Boston](https://www.meetup.com/bostongo/)
- [Golang Bulgaria](https://www.meetup.com/Golang-Bulgaria/)
- [Golang Cardiff, UK](https://www.meetup.com/Cardiff-Go-Meetup/)
- [Golang Copenhagen](https://www.meetup.com/Go-Cph/)
- [Golang Curitiba - Brazil](https://www.meetup.com/GolangCWB/)
- [Golang DC, Arlington, VA](https://www.meetup.com/Golang-DC/)
- [Golang Dorset, UK](https://www.meetup.com/golang-dorset/)
- [Golang Estonia](https://www.meetup.com/Golang-Estonia/)
- [Golang Gurgaon, India](https://www.meetup.com/Gurgaon-Go-Meetup/)
- [Golang Hamburg - Germany](https://www.meetup.com/Go-User-Group-Hamburg/)
- [Golang Israel](https://www.meetup.com/Go-Israel/)
- [Golang Kathmandu](https://www.meetup.com/Golang-Kathmandu/)
- [Golang Lima - Peru](https://www.meetup.com/Golang-Peru/)
- [Golang Lyon](https://www.meetup.com/Golang-Lyon/)
- [Golang Marseille](https://www.meetup.com/fr-FR/Golang-Marseille/)
- [Golang Melbourne](https://www.meetup.com/golang-mel/)
- [Golang Milano](https://www.meetup.com/golang-milano/)
- [Golang North East](https://www.meetup.com/en-AU/Golang-North-East/)
- [Golang Paris](https://www.meetup.com/Golang-Paris/)
- [Golang Poland](https://www.meetup.com/Golang-Poland/)
- [Golang Pune](https://www.meetup.com/Golang-Pune/)
- [Golang Roma](https://www.meetup.com/golangroma/)
- [Golang Rotterdam](https://www.meetup.com/golang-rotterdam/)
- [Golang Singapore](https://www.meetup.com/golangsg/)
- [Golang Stockholm](https://www.meetup.com/Go-Stockholm/)
- [Golang Sydney, AU](https://www.meetup.com/golang-syd/)
- [Golang São Paulo - Brazil](https://www.meetup.com/golangbr/)
- [Golang Taipei](https://www.meetup.com/golang-taipei-meetup/)
- [Golang Thessaloniki](https://www.meetup.com/thessaloniki-golang-meetup/)
- [Golang Torino](https://www.meetup.com/golang-torino/)
- [Golang Turkey](https://kommunity.com/goturkiye)
- [Golang Vancouver, BC](https://www.meetup.com/golangvan/)
- [Golang Vienna, Austria](https://www.meetup.com/viennago/)
- [Golang Москва](https://www.meetup.com/Golang-Moscow/)
- [GoSF - San Francisco, CA](https://www.meetup.com/golangsf)
- [Istanbul Golang](https://www.meetup.com/Istanbul-Golang/)
- [Lagos Gophers](https://www.meetup.com/GolangNigeria/)
- [Nairobi Gophers](https://www.meetup.com/nairobi-gophers/)
- [Seattle Go Programmers](https://www.meetup.com/golang/)
- [Ukrainian Golang User Groups](https://www.meetup.com/uagolang/)
- [Utah Go User Group](https://www.meetup.com/utahgophers/)
- [Women Who Go - San Francisco, CA](https://www.meetup.com/Women-Who-Go/)
- [Zürich Gophers - Zurich, Switzerland](https://www.meetup.com/zurich-gophers/)

_ミートアップに関するGoライブラリ、ツール、または資料です。_

**[⬆ back to top関連](#contents)**

## スタイルガイド <a id="style-guides"></a>

- [CockroachDB](https://github.com/cockroachdb/cockroach/blob/master/docs/style.md)
- [enra/go-styleguide](https://codeberg.org/enra/go-styleguide)
- [GitLab](https://docs.gitlab.com/ee/development/go_guide/)
- [Google](https://google.github.io/styleguide/go/)
- [Hyperledger](https://github.com/hyperledger/fabric/blob/release-1.4/docs/source/style-guides/go-style.rst)
- [Thanos](https://thanos.io/tip/contributing/coding-style-guide.md/)
- [Trybe](https://github.com/betrybe/playbook-go/blob/main/README_EN.md)
- [Uber](https://github.com/uber-go/guide/blob/master/style.md)

**[⬆ back to top関連](#contents)**

## ソーシャルメディア <a id="social-media"></a>

### Twitter <a id="twitter"></a>

- [@GoDiscussions](https://twitter.com/GoDiscussions)
- [@golang](https://twitter.com/golang)
- [@golang_news](https://twitter.com/golang_news)
- [@golangch](https://twitter.com/golangch)
- [@golangweekly](https://twitter.com/golangweekly)

**[⬆ back to top関連](#contents)**

### Reddit <a id="reddit"></a>

- [r/golang](https://www.reddit.com/r/golang/)

**[⬆ back to top関連](#contents)**

## Webサイト <a id="websites"></a>

- [Awesome Go @LibHunt](https://go.libhunt.com) - あなたのGoツールボックス。
- [Awesome Golang Workshops](https://github.com/amit-davidson/awesome-golang-workshops) - 素晴らしいGoワークショップの厳選リスト。
- [Awesome Remote Job](https://github.com/lukasz-madon/awesome-remote-job) - 素晴らしいリモートジョブの厳選リスト。その多くはGoのプロフェッショナルを求めており、非常に魅力的です。
- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - 他の驚異的な素晴らしいリストのリスト。
- [awesome-go-extra](https://github.com/xwjdsh/awesome-go-extra) - awesome-goのREADMEファイルをパースし、リポジトリ情報とともに新しいREADMEファイルを生成する。
- [Code with Mukesh](https://codewithmukesh.com/categories/golang) - codewithmukesh.comのソフトウェアエンジニアとブログ。
- [Coding Mystery](https://codingmystery.com) - Goを用いて、アドベンチャーゲーム風のプログラミングチャレンジを解く
- [CodinGame](https://www.codingame.com/) - 小さなゲームを用いたインタラクティブなタスクでGoを学ぶ
- [Go Blog](https://blog.golang.org) - Goの公式ブログ
- [Go Code Club](https://www.youtube.com/watch?v=nvoIPQYdx9g&list=PLEcwzBXTPUE_YQR7R0BRtHBYJ0LN3Y0i3) - ゴーファーたちが週に1回、異なるGoプロジェクトを読み、議論する
- [Go Community on Hashnode](https://hashnode.com/n/go) - Hashnode上のゴーファーのコミュニティ
- [Go Forum](https://forum.golangbridge.org) - Goについてのディスカッションフォーラム
- [Go Projects](https://github.com/golang/go/wiki/Projects) - Goコミュニティウィキ上のプロジェクト一覧
- [Go Proverbs](https://go-proverbs.github.io/) - ロブ・パイクによるGoの格言
- [Go Report Card](https://goreportcard.com) - あなたのGoパッケージに対する評価書
- [go.dev](https://go.dev/) - Go開発者のためのハブ
- [gocryforhelp](https://github.com/ninedraft/gocryforhelp) - Goで助けが必要なプロジェクトのコレクション。Goにおけるオープンソースへの入り口として良い場所。
- [Golang Developer Jobs](https://golangjob.xyz) - Golang関連の職務のみを提供する開発者求人
- [Golang News](https://golangnews.com) - Goプログラミングに関するリンクとニュース
- [Golang Nugget](https://golangnugget.com) - 毎月月曜日にあなたのメールに届く、最も優れたGoコンテンツの週間まとめ
- [Golang Weekly](https://discu.eu/weekly/golang/) - 月曜日にGoに関するプロジェクト、チュートリアル、記事を提供
- [golang-nuts](https://groups.google.com/forum/#!forum/golang-nuts) - Goメールリスト
- [Gopher Community Chat](https://invite.slack.golangbridge.org) - Gophers向けの新しいSlackコミュニティに参加（[Understand how it came](https://blog.gopheracademy.com/gophers-slack-community/)）
- [Gophercises](https://gophercises.com/) - 初心者向けの無料コード練習
- [json2go](https://m-zajac.github.io/json2go) - 高度なJSONからGo構造体への変換 - オンラインツール
- [justforfunc](https://www.youtube.com/c/justforfunc) - Francesc Campoyが運営するGoプログラミング言語のヒントとコツを紹介するYouTubechannel（[@francesc](https://twitter.com/francesc)）
- [Learn Go Programming](https://blog.learngoprogramming.com) - イラストを用いたGoの概念学習
- [Libs.tech](https://libs.tech/go) – Awesome Go libraries and hidden gems
- [Made with Golang](https://madewithgolang.com/?ref=awesome-go)
- [pkg.go.dev](https://pkg.go.dev/) - オープンソースGoパッケージのドキュメンテーション
- [studygolang](https://studygolang.com) - 中国におけるstudygolangのコミュニティ
- [Trending Go repositories on GitHub today](https://github.com/trending?l=go) - 新しいGoライブラリを発見できる良い場所
- [TutorialEdge - Golang](https://tutorialedge.net/course/golang/)

**[⬆ back to top関連](#contents)**

### チュートリアル <a id="tutorials"></a>

- [50 Shades of Go](https://golang50shades.github.io/) - 新規Golang開発者向けのトラップ、注意点、よくあるミス
- [A Comprehensive Guide to Structured Logging in Go](https://betterstack.com/community/guides/logging/logging-in-go/) - Goにおける構造化ログの世界を深く掘り下げ、特に最近承認されたslogの提案に焦点を当て、標準ライブラリに高性能な構造化ログとレベルを導入することを目指す
- [A Guide to Golang E-Commerce](https://snipcart.com/blog/golang-ecommerce-ponzu-cms-demo?utm_term=golang-ecommerce-ponzu-cms-demo) - eコマース向けGolangサイトの構築（デモ付き）
- [A Tour of Go](https://tour.golang.org/) - Goのインタラクティブツアー
- [Build a Database in 1000 lines of code](https://link.medium.com/O9YQlx89Htb) - 1000行のコードでゼロからNoSQLデータベースを構築
- [Build web application with Golang](https://github.com/astaxie/build-web-application-with-golang) - Golang電子書籍の紹介：Golangでウェブアプリを構築する方法
- [Building and Testing a REST API in Go with Gorilla Mux and PostgreSQL](https://semaphoreci.com/community/tutorials/building-and-testing-a-rest-api-in-go-with-gorilla-mux-and-postgresql) - 強力なGorilla Muxを活用してAPIを構築する
- [Building Go Web Applications and Microservices Using Gin](https://semaphoreci.com/community/tutorials/building-go-web-applications-and-microservices-using-gin) - Ginについて詳しく知り、ボイラープレートコードを削減し、リクエスト処理パイプラインを構築できるかを確認する
- [Caching Slow Database Queries](https://medium.com/@rocketlaunchr.cloud/caching-slow-database-queries-1085d308a0c9) - 遅いデータベースクエリをキャッシュする方法
- [Canceling MySQL](https://medium.com/@rocketlaunchr.cloud/canceling-mysql-in-go-827ed8f83b30) - MySQLクエリをキャンセルする方法
- [CodeCrafters Golang Track](https://app.codecrafters.io/tracks/go) - Goroutines、システムプログラミング、ファイルI/Oなど、高度なGoをマスターするため、自作のRedis、Docker、Git、SQLiteを構築する
- [Design Patterns in Go](https://github.com/shubhamzanwar/design-patterns) - Goで実装されたプログラミング設計パターンのコレクション
- [Games With Go](https://www.youtube.com/watch?v=9D4yH7e_ea8&list=PLDZujg-VgQlZUy1iCqBbe5faZLMkA3g2x) - プログラミングとゲーム開発を教えるビデオシリーズ
- [Go By Example](https://gobyexample.com/) - 注記付き例プログラムを用いたGoの実践的な導入
- [Go Cheat Sheet](https://github.com/a8m/go-lang-cheat-sheet) - Goのリファレンスカード
- [Go database/sql tutorial](http://go-database-sql.org/) - database/sqlの導入
- [Go in 7 days](https://github.com/harrytran103/7_days_of_go) - 7日間でGoを完全に学ぶ（Node.js開発者から）
- [Go Language Tutorial](https://www.javatpoint.com/go-tutorial) - Go言語チュートリアル
- [Go Tutorial](https://www.tutorialspoint.com/go/index.htm) - Goプログラミングを学ぶ
- [Go WebAssembly Tutorial - Building a Simple Calculator](https://tutorialedge.net/golang/go-webassembly-tutorial/)
- [go-clean-template](https://github.com/evrone/go-clean-template) - Golangサービス向けのクリーンアーキテクチャテンプレート
- [go-patterns](https://github.com/tmrts/go-patterns) - Go設計パターン、レシピ、慣習の厳選リスト
- [Golang for Node.js Developers](https://github.com/miguelmota/golang-for-nodejs-developers) - GoとNode.jsの比較例を用いた学習例
- [Golang Tutorial Guide](https://www.freecodecamp.org/news/golang-tutorial-list-free-courses-learn-go-programming-language/) - Goプログラミング言語を学ぶための無料コース一覧
- [golang-examples](https://github.com/SimonWaldherr/golang-examples) - Goプログラミングを学ぶための多くの例
- [Golangbot](https://golangbot.com/learn-golang-series/) - Goでのプログラミングに取り組むためのチュートリアル
- [GopherCoding](https://gophercoding.com/) - 日々の問題を解決するためのコードスニペットとチュートリアルのコレクション
- [GopherSnippets](https://gophersnippets.com/) - Goプログラミング言語向けのコードスニペットとテスト付きの例
- [Gosamples](https://gosamples.dev/) - 日々のコード問題を解決するためのコードスニペットのコレクション
- [GraphQL with Go](https://hasura.io/learn/graphql/backend-stack/languages/go/) - GoのGraphQLサーバーとクライアントを作成する方法をコード生成で学ぶ。また、RESTエンドポイントの作成も含まれる。
- [Hackr.io](https://hackr.io/tutorials/learn-golang) - Goを学ぶための最高のオンラインGolangチュートリアルをコミュニティが提出・投票した結果を紹介
- [Hex Monscape](https://github.com/Haraj-backend/hex-monscape) - Hexagonalアーキテクチャを使って維持性の高いコードを書くための初歩ガイド
- [How to Benchmark: dbq vs sqlx vs GORM](https://medium.com/@rocketlaunchr.cloud/how-to-benchmark-dbq-vs-sqlx-vs-gorm-e814caacecb5) - Goでのベンチマーク方法を学ぶ。事例として、dbq、sqlxおよびGORMのベンチマークを行う。
- [How To Deploy a Go Web Application with Docker](https://semaphoreci.com/community/tutorials/how-to-deploy-a-go-web-application-with-docker) - Dockerを用いたGo開発と、生産環境向けDockerイメージの構築方法を学ぶ。
- [How to Implement Role-Based Access Control (RBAC) Authorization in Golang](https://www.permit.io/blog/role-based-access-control-rbac-authorization-in-golang) - Goでロールベースアクセス制御（RBAC）を実装するためのガイド。コード例を含み、アプリケーションエンドポイントのセキュリティをロールベース認可で確保するためのさまざまな方法をカバー。
- [How to Use Godog for Behavior-driven Development in Go](https://semaphoreci.com/community/tutorials/how-to-use-godog-for-behavior-driven-development-in-go) - Godog - ビヘイビアドリブン開発フレームワークを使ってGoアプリケーションの構築とテストを始める。
- [Learn Go with 1000+ Exercises](https://github.com/inancgumus/learngo) - 数千の例、演習、クイズを用いてGoを学ぶ。
- [Learn Go with TDD](https://github.com/quii/learn-go-with-tests) - テストドリブン開発でGoを学ぶ。
- [Learning Go by examples](https://dev.to/aurelievache/learning-go-by-examples-introduction-448n) - 具体的なアプリケーションを例に挙げてGo言語を学ぶための記事シリーズ。
- [Microservices with Go](https://www.youtube.com/playlist?list=PLmD8u-IFdreyh6EUfevBcbiuCKzFk0EW_) - Goを使用したマイクロサービスの構築に深く Dive する
- [package main](https://www.youtube.com/packagemain) - GoにおけるプログラミングについてのYouTubeチャンネル
- [Programming with Google Go](https://www.coursera.org/specializations/google-golang) - Goからゼロから学ぶためのCourseraのスペシャリゼーション
- [Scaling Go Applications](https://betterstack.com/community/guides/scaling-go/) - 生産環境におけるGoアプリケーションの構築・デプロイ・スケーリングに関するすべての情報
- [The world’s easiest introduction to WebAssembly with Golang](https://medium.com/@martinolsansky/webassembly-with-golang-is-fun-b243c0e34f02)
- [Understanding Go in a visual way](https://dev.to/aurelievache/series/26234) - 視覚的にGoを学ぶ
- [W3basic Go Tutorials](https://www.w3basic.com/golang/) - W3BasicはGo言語プログラミングを学ぶための詳細なチュートリアルと整理されたコンテンツを提供
- [Your basic Go](https://yourbasic.org/golang) - チュートリアルやハウツーの豊富なコレクション

**[⬆ back to top関連](#contents)**

### ガイド付き学習 <a id="guided-learning"></a>

- [The Go Developer Roadmap](https://roadmap.sh/golang) - 新規のGo開発者が学習に活用できる視覚的な学習マップ
- [The Go Interview Practice](https://github.com/RezaSi/go-interview-practice) - Go技術面接準備用のコーディングチャレンジを提供するGitHubリポジトリ
- [The Go Learning Path](https://tutorialedge.net/paths/golang/) - 無料およびプレミアムリソースを組み合わせた、ガイド付き学習パス
- [The Go Skill Tree](https://labex.io/skilltrees/go) - 無料およびプレミアムリソースを組み合わせた構成された学習パス

**[⬆ back to top関連](#contents)**

## 貢献 <a id="contribution"></a>

貢献を歓迎します。ガイドラインは[CONTRIBUTING.md](https://github.com/avelino/awesome-go/blob/main/CONTRIBUTING.md)を確認してください。

## ライセンス <a id="license"></a>

このプロジェクトは[MIT License](https://github.com/avelino/awesome-go/blob/main/LICENSE)で提供されます。詳細はLICENSEファイルを確認してください。
