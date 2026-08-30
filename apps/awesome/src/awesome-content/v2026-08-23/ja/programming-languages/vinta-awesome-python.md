---
title: "vinta/awesome-python"
description: "Pythonのフレームワーク、ライブラリ、ツール、データ処理、学習資料集"
licenseSource: "github-vinta-awesome-python-readme-md"
---

# [Awesome Python](https://awesome-python.com/)

Pythonの最も優れたフレームワーク、ライブラリ、ツールについての主張を含むガイド

**[website](https://awesome-python.com/)にアクセスして、プロジェクトをより簡単に検索およびフィルタリングできます。**

## **Sponsors**

> The **#10 most-starred repo on GitHub**. Put your product in front of Python developers. [Become a sponsor](https://github.com/vinta/awesome-python/blob/d4fd148ba8e8b1756f8951b774f13340699d37ee/SPONSORSHIP.md).

## Categories

**AI & ML**

- [AI and Agents](#ai-and-agents)
- [Deep Learning](#deep-learning)
- [Machine Learning](#machine-learning)
- [Natural Language Processing](#natural-language-processing)
- [Computer Vision](#computer-vision)
- [Recommender Systems](#recommender-systems)

**ウェブ開発**

- [Web Frameworks](#web-frameworks)
- [Web APIs](#web-apis)
- [Web Servers](#web-servers)
- [WebSocket](#websocket)
- [Template Engines](#template-engines)
- [Web Asset Management](#web-asset-management)
- [Authentication](#authentication)
- [Admin Panels](#admin-panels)
- [CMS](#cms)
- [ERP](#erp)
- [Static Site Generators](#static-site-generators)

**HTTPとスクレイピング**

- [HTTP Clients](#http-clients)
- [Web Scraping](#web-scraping)
- [Email](#email)

**データベース・ストレージ**

- [ORM](#orm)
- [Database Drivers](#database-drivers)
- [Database](#database)
- [Caching](#caching)
- [Search](#search)
- [Serialization](#serialization)

**データ・サイエンス**

- [Data Analysis](#data-analysis)
- [Data Ingestion / ETL](#data-ingestion--etl)
- [Data Validation](#data-validation)
- [Data Visualization](#data-visualization)
- [Geolocation](#geolocation)
- [Science](#science)
- [Quantum Computing](#quantum-computing)

**開発ツール**

- [Algorithms and Design Patterns](#algorithms-and-design-patterns)
- [Interactive Interpreter](#interactive-interpreter)
- [Code Analysis](#code-analysis)
- [Testing](#testing)
- [Debugging Tools](#debugging-tools)
- [Build Tools](#build-tools)
- [Documentation](#documentation)

**DevOps**

- [DevOps Tools](#devops-tools)
- [Distributed Computing](#distributed-computing)
- [Task Queues](#task-queues)
- [Messaging](#messaging)
- [Job Schedulers](#job-schedulers)
- [Logging](#logging)
- [Network Virtualization](#network-virtualization)

**CLI & GUI**

- [CLI Development](#cli-development)
- [CLI Tools](#cli-tools)
- [GUI Development](#gui-development)

**Text & Documents**

- [Text Processing](#text-processing)
- [HTML Manipulation](#html-manipulation)
- [File Format Processing](#file-format-processing)
- [File Manipulation](#file-manipulation)

**Media**

- [Image Processing](#image-processing)
- [Audio & Video Processing](#audio--video-processing)
- [Game Development](#game-development)

**Python Language**

- [Implementations](#implementations)
- [Built-in Classes Enhancement](#built-in-classes-enhancement)
- [Functional Programming](#functional-programming)
- [Asynchronous Programming](#asynchronous-programming)
- [Date and Time](#date-and-time)

**Python Toolchain**

- [Environment Management](#environment-management)
- [Package Management](#package-management)
- [Package Repositories](#package-repositories)
- [Distribution](#distribution)
- [Configuration Files](#configuration-files)

**Security**

- [Cryptography](#cryptography)
- [Penetration Testing](#penetration-testing)
- [Supply Chain Security](#supply-chain-security)
- [Web Security](#web-security)

**Other**

- [Hardware](#hardware)
- [Microsoft Windows](#microsoft-windows)
- [Miscellaneous](#miscellaneous)

## Projects

**AI & ML**

### AI and Agents

_Libraries for building AI applications, LLM integrations, and autonomous agents._

- Agent Skills
  - [django-ai-plugins](https://github.com/vintasoftware/django-ai-plugins) - Djangoバックエンドエージェントスキル：Django、DRF、Celery、Django固有のコードレビューに対応したスキル
  - [sentry-skills](https://github.com/getsentry/skills) - コードレビュー、デバッグ、バックエンドワークフローに特化したPython中心のエンジニアリングスキル
  - [trailofbits-skills](https://github.com/trailofbits/skills) - セキュリティに配慮したPython対応スキル：審査、テスト、より安全なバックエンド開発を支援
- Orchestration
  - [langchain](https://github.com/langchain-ai/langchain) - LLMを組み合わせてアプリケーションを構築するための可合成性（composability）
  - [langgraph](https://github.com/langchain-ai/langgraph) - 状態を持ち、長期間実行可能なLLMエージェントを構築するための低レベルオーケストレーションフレームワーク
  - [crewai](https://github.com/crewAIInc/crewAI) - 協働タスク解決を目的としたロールプレイ型自律AIエージェントのオーケストレーションフレームワーク
  - [pydantic-ai](https://github.com/pydantic/pydantic-ai) - 構造化スキーマを用いた生成AIアプリケーション開発に特化したPythonエージェントフレームワーク
- Vendor Agent SDKs
  - [openai-agents](https://github.com/openai/openai-agents-python) - OpenAIが提供するAIエージェントの構築と管理フレームワーク
  - [claude-agent-sdk](https://github.com/anthropics/claude-agent-sdk-python) - AnthropicのPython SDKによるClaude Codeのハーネス上でAIエージェントを構築 — カスタムツール、プロセス内MCPサーバー、ハックをサポート
- Personal Assistants
  - [hermes-agent](https://github.com/nousresearch/hermes-agent) - あなたと共に成長するアダプティブな個人AIアシスタント
- Prompt Optimization
  - [dspy](https://github.com/stanfordnlp/dspy) - プロンプトではなく、モデルをプログラミングするためのフレームワーク
- Data Layer
  - [instructor](https://github.com/567-labs/instructor) - Pydanticを用いたLLMから構造化データを抽出するためのライブラリ
  - [llama-index](https://github.com/run-llama/llama_index) - LLMアプリケーション用のデータフレームワーク
  - [mem0](https://github.com/mem0ai/mem0) - AIエージェントに個人化されたインタラクションを可能にする知能型メモリレイヤー
- Pre-trained Models
  - [transformers](https://github.com/huggingface/transformers) - NLP、ビジョン、オーディオタスクに用いる事前学習済みトランスフォーマーモデルを簡単に利用できるフレームワーク
- LLM Inference and Serving
  - [sglang](https://github.com/sgl-project/sglang) - 大規模言語モデルおよび多モーダルモデル向けの高性能サーバーフレームワーク
  - [vllm](https://github.com/vllm-project/vllm) - 大規模言語モデル（LLM）向けの高スループットかつメモリ効率の高い推論とサーバーエンジン
  - [mlx-lm](https://github.com/ml-explore/mlx-lm) - Apple Silicon上でMLXを用いて大規模言語モデルを実行およびファインチューニング
- LLM Gateways
  - [LiteLLM](https://github.com/BerriAI/litellm) - OpenAIフォーマットで100以上のLLMを呼び出す
- Image and Video Generation
  - [diffusers](https://github.com/huggingface/diffusers) - 画像、音声、動画の生成および編集に用いる事前学習済みディフュージョンモデルを提供するライブラリ
- Fine-tuning
  - [unsloth](https://github.com/unslothai/unsloth) - メモリ使用量を削減した高速LLMのファインチューニングおよびトレーニングを実現するライブラリ
- Speech
  - [openai-whisper](https://github.com/openai/whisper) - 68万時間の多言語かつ多タスク監督データに基づく汎用自動話音認識モデル
  - [funasr](https://github.com/modelscope/FunASR) - 170倍リアルタイム速度、50以上の言語、話者分離、感情検出を備えた産業用話音認識ツールキット
  - [vibevoice](https://github.com/microsoft/VibeVoice) - マイクロソフトが開発したオープンソースの音声AIモデルのファミリー。テキストから音声へ、長文話音認識に適用。
  - [gTTS](https://github.com/pndurette/gTTS) - Google Translate TTSを用いてテキストを音声に変換するためのPythonライブラリとCLIツール
  - [kittentts](https://github.com/KittenML/KittenTTS) - 軽量なONNXベースのテキストから音声への変換ライブラリ。CPUに優しい小さなモデルを備える。

### Deep Learning

ニューラルネットワークと深層学習向けのフレームワーク。また、[awesome-deep-learning](https://github.com/ChristosChristofidis/awesome-deep-learning)も参照してください。

- Frameworks
  - [pytorch](https://github.com/pytorch/pytorch) - Pythonでテンソルと動的ニューラルネットワークを実装し、強力なGPU加速を提供。
  - [tensorflow](https://github.com/tensorflow/tensorflow) - グーグルが開発した最も人気のあるディープラーニングフレームワーク。
  - [keras](https://github.com/keras-team/keras) - JAX、TensorFlow、PyTorchのバックエンドをサポートする、高レベルのディープラーニングライブラリ。
  - [jax](https://github.com/jax-ml/jax) - 自動微分とJITコンパイルをサポートする、高性能数値計算用ライブラリ。
  - [pytorch-lightning](https://github.com/Lightning-AI/pytorch-lightning) - AI製品の学習・デプロイ・配布を、驚くほど高速に実行するディープラーニングフレームドワーク。
- Reinforcement Learning
  - [gymnasium](https://github.com/Farama-Foundation/Gymnasium) - 強化学習環境向けの標準API。人気のある参照環境（[gym](https://github.com/openai/gym)の継承者）をサポート。
  - [stable-baselines3](https://github.com/DLR-RM/stable-baselines3) - Stable Baselines（ディープ強化学習）アルゴリズムのPyTorch実装。

### Machine Learning

機械学習向けのライブラリ。また、[awesome-machine-learning](https://github.com/josephmisiti/awesome-machine-learning#python)も参照してください。

- General
  - [scikit-learn](https://github.com/scikit-learn/scikit-learn) - ドキュメンテーションとコミュニティサポートが豊富な、最も人気のあるPython機械学習ライブラリ。
  - [pgmpy](https://github.com/pgmpy/pgmpy) - 確率的グラフィカルモデルおよびベイズネットワーク向けのPythonライブラリ。
  - [feature-engine](https://github.com/feature-engine/feature_engine) - sklearnと互換性を持つAPI。特徴エンジニアリングおよび選択に最適なツールセットを備える。
- Gradient Boosting
  - [xgboost](https://github.com/dmlc/xgboost) - スケーラブルで、移植性があり、分散型の勾配ブーストライブラリ。
  - [lightgbm](https://github.com/lightgbm-org/LightGBM) - 高速かつ分散型、高性能な勾配ブーストフレームワーク。
  - [catboost](https://github.com/catboost/catboost) - 高速かつスケーラブル、高性能な決定木ベースの勾配ブーストライブラリ。
- Time Series Forecasting
  - [timesfm](https://github.com/google-research/timesfm) - Google Researchが開発した、時系列予測用の事前学習基礎モデル。

### Natural Language Processing

人間の言語を扱うためのライブラリ。

- General
  - [nltk](https://github.com/nltk/nltk) - 人間の言語データと対話するPythonプログラムを構築するためのリーダーなプラットフォーム。
  - [spacy](https://github.com/explosion/spaCy) - Python および Cython における工業用自然言語処理向けのライブラリ
  - [gensim](https://github.com/piskvorky/gensim) - 人間が使えるトピックモデル
  - [stanza](https://github.com/stanfordnlp/stanza) - スタンフォードNLPグループが提供する公式Pythonライブラリ。60以上の言語をサポート。
- Chinese
  - [jieba](https://github.com/fxsjy/jieba) - 最も人気のある中国語テキスト分割ライブラリ
  - [pypinyin](https://github.com/mozillazg/python-pinyin) - 漢字（漢字）をピニン（拼音）に変換
  - [pangu.py](https://github.com/vinta/pangu.py) - 厳密なテキストスペース処理

### Computer Vision

コンピュータビジョン向けのライブラリ。

- General
  - [opencv-python](https://github.com/opencv/opencv-python) - オープンソースコンピュータビジョンライブラリ
  - [ultralytics](https://github.com/ultralytics/ultralytics) - Ultralytics YOLOによるオブジェクト検出、セグメンテーション、ポーズ推定、分類。最先端の精度と速度を実現。
  - [kornia](https://github.com/kornia/kornia/) - PyTorch向けオープンソース可微分コンピュータビジョンライブラリ
  - [fiftyone](https://github.com/voxel51/fiftyone) - 高品質データセットおよびコンピュータビジョンモデルの構築に使えるオープンソースツール
- OCR
  - [pytesseract](https://github.com/madmaze/pytesseract) - [Google Tesseract OCR](https://github.com/tesseract-ocr)のラッパー
  - [easyocr](https://github.com/JaidedAI/EasyOCR) - 40以上の言語をサポートした即時使用可能なOCR

### Recommender Systems

推薦システムを構築するためのライブラリ。

- [annoy](https://github.com/spotify/annoy) - メモリ使用量に最適化されたC++/Pythonによる近似最近隣検索
- [implicit](https://github.com/benfred/implicit) - 非明示データセット向けの協調フィルタリングの高速Python実装
- [scikit-surprise](https://github.com/NicolasHug/Surprise) - 推薦システムの構築と分析に使えるscikit

ウェブ開発

### Web Frameworks

伝統的なフルスタックウェブフレームワーク。また、[Web APIs](#web-apis)も参照してください。

- Synchronous
  - [flask](https://github.com/pallets/flask) - Python向けのマイクロフレームワーク
    - [awesome-flask](https://github.com/humiaozuzu/awesome-flask)
  - [django](https://github.com/django/django) - Pythonで最も人気のあるウェブフレームワーク
    - [awesome-django](https://github.com/wsvincent/awesome-django)
  - [bottle](https://github.com/bottlepy/bottle) - 1つのファイルで配布され、依存関係のない高速かつシンプルなマイクロフレームワーク
  - [pyramid](https://github.com/Pylons/pyramid) - 小さな、高速で実用的なオープンソースPythonウェブフレームワーク
    - [awesome-pyramid](https://github.com/uralbash/awesome-pyramid)
  - [fasthtml](https://github.com/AnswerDotAI/fasthtml) - HTMLアプリを作成する最も速い方法
    - [awesome-fasthtml](https://github.com/amosgyamfi/awesome-fasthtml)
- Asynchronous
  - [starlette](https://github.com/Kludex/starlette) - 軽量なASGIフレームワークとツールキット。高パフォーマンスの非同期サービスの構築に最適
  - [tornado](https://github.com/tornadoweb/tornado) - ウェブフレームワークおよび非同期ネットワークライブラリ
  - [litestar](https://github.com/litestar-org/litestar) - 生産環境向け、機能的で拡張可能なASGIウェブフレームワーク
  - [reflex](https://github.com/reflex-dev/reflex) - Pythonで完全に構築できる反応型フルスタックウェブアプリケーションのフレームワーク

### Web APIs

RESTful、GraphQL、およびRPC APIを構築するためのライブラリ。

- Django
  - [django-rest-framework](https://github.com/encode/django-rest-framework) - ウェブAPIを構築するための強力で柔軟なツールキット
  - [django-ninja](https://github.com/vitalik/django-ninja) - タイプヒントとPydanticを用いた、Django RESTフレームワークベースの高速ウェブAPI
  - [strawberry-django](https://github.com/strawberry-graphql/strawberry-django) - DjangoとのStrawberry GraphQL統合
  - [django-modern-rest](https://github.com/wemake-services/django-modern-rest) - 高速性、型定義、非同期、`msgspec`、-01など、現代的なREST！ `pydantic`
- Flask
  - [apiflask](https://github.com/apiflask/apiflask) - FlaskとMarshmallowをベースにした軽量PythonウェブAPIフレームワーク
- Framework Agnostic
  - [fastapi](https://github.com/fastapi/fastapi) - 標準Pythonタイプヒントを用いてAPIを構築するための現代的で高速なウェブフレームワーク
  - [connexion](https://github.com/spec-first/connexion) - OpenAPI仕様に基づいてリクエストを自動的に処理する仕様中心のフレームワーク
  - [strawberry](https://github.com/strawberry-graphql/strawberry) - Pythonタイプアノテーションを活用したGraphQLライブラリ
- RPC
  - [grpcio](https://github.com/grpc/grpc) - Googleが開発したHTTP/2ベースのRPCフレームワーク（Pythonバインディング付き）

### Web Servers

ASGIおよびWSGIに対応するウェブサーバー。

- ASGI
  - [uvicorn](https://github.com/Kludex/uvicorn) - uvloopとhttptoolsを使用した、非常に高速なASGIサーバー実装
  - [granian](https://github.com/emmett-framework/granian) - HyperとTokioをベースにしたPythonアプリケーション向けのRust HTTPサーバー（WSGI/ASGI/RSGI対応）
  - [hypercorn](https://github.com/pgjones/hypercorn) - Hyperライブラリを用いてGunicornにインスパイアされたASGIおよびWSGIサーバー
- WSGI
  - [gunicorn](https://github.com/benoitc/gunicorn) - RubyのUnicornプロジェクトから移植された、事前フォークされたサーバー
  - [waitress](https://github.com/Pylons/waitress) - マルチスレッドで、Pyramidを駆動

### WebSocket

WebSocketとの作業に使うライブラリ。

- [websockets](https://github.com/python-websockets/websockets) - 正確性とシンプルさに焦点を当てたWebSocketサーバーおよびクライアントの構築用ライブラリ
- [channels](https://github.com/django/channels) - Django向けの開発者フレンドリーな非同期機能
- [flask-socketio](https://github.com/miguelgrinberg/Flask-SocketIO) - FlaskアプリケーションとのSocket.IO統合
- [autobahn-python](https://github.com/crossbario/autobahn-python) - Twistedと[asyncio](https://docs.python.org/3/library/asyncio.html)でのPython用WebSocketおよびWAMP。

### Template Engines

テンプレートおよびリキングに使うライブラリとツール。

- [jinja](https://github.com/pallets/jinja) - 現代的でデザイナーに親しみやすいテンプレート言語.
- [mako](https://github.com/sqlalchemy/mako) - Pythonプラットフォーム向けの高速かつ軽量テンプレートエンジン.

### Web Asset Management

ウェブサイトのアセットを管理・保存・圧縮・ミニマライズするツール。

- [django-storages](https://github.com/jschneier/django-storages) - Django向けのカスタムストレージバックエンドのコレクション.
- [django-compressor](https://github.com/django-compressor/django-compressor) - リンクされたおよびインラインのJavaScriptまたはCSSを1つのキャッシュファイルに圧縮する.

### Authentication

認証スキームの実装に用いられるライブラリ。

- OAuth
  - [oauthlib](https://github.com/oauthlib/oauthlib) - OAuthのリクエスト署名ロジックの一般化かつ徹底的な実装.
  - [authlib](https://github.com/authlib/authlib) - OAuth、OpenID Connect、JWT/JWS/JWE/JWK/JWAを構築するための包括的なライブラリ.
  - [django-allauth](https://github.com/pennersr/django-allauth) - Django向けの認証アプリで「ただ使える」ように設計されたアプリ.
  - [django-oauth-toolkit](https://github.com/django-oauth/django-oauth-toolkit) - Django向けのOAuth 2の便利な機能.
- JWT
  - [pyjwt](https://github.com/jpadilla/pyjwt) - PythonにおけるJSON Web Tokenの実装.
- Permissions
  - [django-guardian](https://github.com/django-guardian/django-guardian) - Django向けのオブジェクトごとの権限の実装.
  - [django-rules](https://github.com/dfunckt/django-rules) - データベースを必要としない、非常に小さくても強力なDjango向けオブジェクトレベル権限アプリ.

### Admin Panels

管理インターフェースに用いられるライブラリ。

- [flask-admin](https://github.com/pallets-eco/flask-admin) - Flask向けのシンプルかつ拡張可能な管理インターフェースフレームワーク.
- [django-unfold](https://github.com/unfoldadmin/django-unfold) - Djangoの管理画面を、スタイリッシュな現代的なインターフェース、強力な機能、そしてスムーズなユーザー体験でアップグレードします.
- [django-grappelli](https://github.com/sehmaschine/django-grappelli) - Django Admin-Interface向けのカッコイイテーマ.

### CMS

コンテンツ管理システム。

- [wagtail](https://github.com/wagtail/wagtail) - Djangoをベースにしたコンテンツ管理システム.
- [django-cms](https://github.com/django-cms/django-cms) - Djangoを採用した使いやすく、開発者にも親しみやすいエンタープライズCMS.

### ERP

企業資源計画フレームワーク。

- [odoo](https://github.com/odoo/odoo) - オープンソースのビジネスアプリケーションのセット：CRM、電子商取引、会計、在庫、そして数千ものコミュニティモジュール.

### Static Site Generators

静的サイトジェネレーターとは、テキストとテンプレートを入力として受け取り、出力としてHTMLファイルを生成するソフトウェアである。

- [pelican](https://github.com/getpelican/pelican) - MarkdownおよびreST構文をサポートする静的サイトジェネレーター.
- [nikola](https://github.com/getnikola/nikola) - 静的ウェブサイトおよびブログジェネレーター.

HTTPおよびスクレイピング

### HTTP Clients

HTTPに働きかけるためのライブラリ。

- Clients
  - [requests](https://github.com/psf/requests) - 人間が使えるHTTPリクエストの実装.
  - [httpx](https://github.com/encode/httpx) - Python における次世代 HTTP クライアント
  - [aiohttp](https://github.com/aio-libs/aiohttp) - asyncio および Python 用の非同期 HTTP クライアント/サーバー フレームワーク
  - [urllib3](https://github.com/urllib3/urllib3) - スレッドセーフな接続プーリング、ファイルアップロード対応、健全性に配慮した HTTP ライブラリ
- URL Manipulation
  - [yarl](https://github.com/aio-libs/yarl) - もう一つの URL ライブラリ
  - [httpx.URL](https://www.python-httpx.org/api/) - HTTPX にバンドルされた不変 URL クラス

### Web Scraping

ウェブスクレイピングを自動化し、ウェブコンテンツを抽出するためのライブラリ。

- Frameworks
  - [browser-use](https://github.com/browser-use/browser-use) - AI アグエントが簡単にブラウザ自動化を実行できるようにするウェブサイトのアクセス方法
  - [scrapy](https://github.com/scrapy/scrapy) - 高速かつ高レベルのスクリーンスクレイピングおよびウェブスクレイピングフレームワーク
  - [crawl4ai](https://github.com/unclecode/crawl4ai) - オープンソースで LLM に最適化されたウェブスクレイピングツール。AI アグエント向けに設計された、高速かつ構造化されたデータ抽出を提供。
- Content Extraction
  - [feedparser](https://github.com/kurtmckee/feedparser) - ユニバーサルなフィードパーサー
  - [html2text](https://github.com/Alir3z4/html2text) - HTML をマーカー形式のテキストに変換
  - [trafilatura](https://github.com/adbar/trafilatura) - ウェブからテキストおよびメタデータを収集するツールで、内蔵コンテンツフィルタリング機能付き

### Email

メールの送信とパース、およびメールサーバー管理用のライブラリ。

- [yagmail](https://github.com/kootenpv/yagmail) - もう一つの Gmail/SMTP クライアント

**データベース・ストレージ**

### ORM

オブジェクト-リレーションマッピングまたはデータマッピング技術を実装するライブラリ。

- Relational Databases
  - [sqlalchemy](https://github.com/sqlalchemy/sqlalchemy) - Python の SQL ツールキットおよびオブジェクト関係マッパー
    - [awesome-sqlalchemy](https://github.com/dahlia/awesome-sqlalchemy)
  - [django.db.models](https://github.com/django/django) - The Django [ORM](https://docs.djangoproject.com/en/dev/topics/db/models/).
  - [peewee](https://github.com/coleifer/peewee) - 小さな、表現力の高い ORM
  - [sqlmodel](https://github.com/fastapi/sqlmodel) - SQLModel は Python の型注釈に基づき、Pydantic および SQLAlchemy によって駆動されている
- NoSQL Databases
  - [pynamodb](https://github.com/pynamodb/PynamoDB) - [Amazon DynamoDB](https://aws.amazon.com/dynamodb/) 用の Python フィールドインターフェース
  - [mongoengine](https://github.com/MongoEngine/mongoengine) - MongoDB とのやり取りに用いる Python のオブジェクト・ドキュメント・マッパー（ODM）
  - [beanie](https://github.com/BeanieODM/beanie) - MongoDB 用の非同期 Python オブジェクト・ドキュメント・マッパー（ODM）

### Database Drivers

データベースに接続し、操作するためのライブラリ。

- MySQL - [awesome-mysql](https://github.com/shlomi-noach/awesome-mysql)
  - [pymysql](https://github.com/PyMySQL/PyMySQL) - mysql-python と互換性のある純粋 Python の MySQL ドライバー
  - [mysqlclient](https://github.com/PyMySQL/mysqlclient) - Python 3対応のMySQLコンネクタ（[mysql-python](https://sourceforge.net/projects/mysql-python/)ブランチ）。
- PostgreSQL - [awesome-postgres](https://github.com/dhamaniasad/awesome-postgres)
  - [psycopg](https://github.com/psycopg/psycopg) - Pythonにおける最も人気のあるPostgreSQLアダプタ。
  - [asyncpg](https://github.com/MagicStack/asyncpg) - Python/asyncio用の高速PostgreSQLデータベースクライアントライブラリ。
- SQLite - [awesome-sqlite](https://github.com/planetopendata/awesome-sqlite)
  - [sqlite3](https://docs.python.org/3/library/sqlite3.html) - （Python標準ライブラリ）DB-API 2.0に準拠したSQLiteインターフェース。
  - [sqlite-utils](https://github.com/simonw/sqlite-utils) - SQLiteデータベースを操作するためのPython CLIユーティリティとライブラリ。
- ClickHouse
  - [clickhouse-connect](https://github.com/ClickHouse/clickhouse-connect) - 公式のClickHouseクライアント、SQLAlchemyおよびSupersetとの接続機能を備えています。
  - [clickhouse-driver](https://github.com/mymarilyn/clickhouse-driver) - ClickHouse向けのネイティブインターフェースを備えたPythonドライバー。
- Other Relational Databases
  - [pyodbc](https://github.com/mkleehammer/pyodbc) - SQL Serverおよびその他のODBCアクセス可能なデータベースに接続するためのODBCブリッジ。
  - [oracledb](https://github.com/oracle/python-oracledb) - オラクルデータベース用の公式Pythonドライバー。cx_Oracleの後継品。
  - [mssql-python](https://github.com/microsoft/mssql-python) - SQL ServerおよびAzure SQL用の公式Microsoftドライバー。ODBCに基づき、高性能かつ低メモリ使用を実現。
- NoSQL Databases
  - [redis](https://github.com/redis/redis-py) - Redis用のPythonクライアント。
  - [pymongo](https://github.com/mongodb/mongo-python-driver) - MongoDB用の公式Pythonクライアント。
  - [cassandra-driver](https://github.com/apache/cassandra-python-driver) - Apache Cassandra向けのPythonドライバー。
  - [django-mongodb-backend](https://github.com/mongodb/django-mongodb-backend) - Django用の公式MongoDBデータベースバックエンド。

### Database

プロセス中データベース。Pythonから直接使用可能。

- Analytical
  - [duckdb](https://github.com/duckdb/duckdb) - 進行中のSQL OLAPデータベース管理システム。分析および高速クエリに最適化されており、SQLiteに類似しているが、分析ワークロード向け。
  - [chdb](https://github.com/chdb-io/chdb) - プロセス中OLAP SQLエンジンでClickHouseの完全な文法をサポートし、ゼロコピーのpandas/Arrow間の相互運用性を提供し、remote ClickHouseクラスタに `remoteSecure()` を介してフェデレーションを行う。
- Vector
  - [chromadb](https://github.com/chroma-core/chroma) - 埋め込みデータベースのオープンソースソフトウェアで、埋め込みと意味論検索を用いたAIアプリケーションの開発を可能にする。
  - [lancedb](https://github.com/lancedb/lancedb) - マルチモーダルAI向け、開発者に優しい埋め込み検索データベース
  - [zvec](https://github.com/alibaba/zvec) - デバイス内RAGやエッジAI向けの埋め込み型ベクトルデータベース。ベクトルデータベースにおけるSQLiteです
- Key-Value & Document
  - [tinydb](https://github.com/msiemens/tinydb) - 微小な、ドキュメント指向のデータベース。

### Caching

データのキャッシュ用のライブラリ。

- [cachetools](https://github.com/tkem/cachetools) - 拡張可能なメモ化コレクションとデコレーター。
- [diskcache](https://github.com/grantjenks/python-diskcache) - SQLiteとファイルバックドキャッシュバックエンドで、memcachedおよびredisよりも高速な検索が可能
- [dogpile.cache](https://github.com/sqlalchemy/dogpile.cache) - 同じ開発者が作成したBeakerの次世代代替品であるdogpile.cache
- [django-cacheops](https://github.com/Suor/django-cacheops) - 自動的に細かいイベント駆動による無効化を実現するスムーズなORMキャッシュ

### Search

データのインデックス作成および検索クエリ実行用のライブラリとソフトウェア。

- [elasticsearch](https://github.com/elastic/elasticsearch-py) - [Elasticsearch](https://www.elastic.co/products/elasticsearch)の公式低レベルPythonクライアント
- [opensearch-py](https://github.com/opensearch-project/opensearch-py) - [OpenSearch](https://opensearch.org/)の公式低レベルPythonクライアント
- [meilisearch](https://github.com/meilisearch/meilisearch-python) - [Meilisearch](https://www.meilisearch.com/)検索エンジンの公式Pythonクライアント
- [django-haystack](https://github.com/django-haystack/django-haystack) - Django向けのモジュラリーファイル検索

### Serialization

複雑なデータ型のシリアライズ用のライブラリ。

- [msgpack](https://github.com/msgpack/msgpack-python) - PythonにおけるMessagePackシリアライザの実装
- [orjson](https://github.com/ijl/orjson) - 高速かつ正確なJSONライブラリ
- [marshmallow](https://github.com/marshmallow-code/marshmallow) - 複雑なオブジェクトをシンプルなPythonデータ型に変換・変換するための軽量ライブラリ
- [msgspec](https://github.com/msgspec/msgspec) - JSON、MessagePack、YAML、TOMLに対応した高速なシリアライズとバリデーションライブラリ

**データと科学**

### Data Analysis

_データ分析用のライブラリ._

- [pandas](https://github.com/pandas-dev/pandas) - 高性能で使いやすいデータ構造およびデータ分析ツールを提供するライブラリ
- [polars](https://github.com/pola-rs/polars) - Rustで実装された高速なDataFrameライブラリ（Python APIを備える）
- [ibis-framework](https://github.com/ibis-project/ibis) - 20以上のバックエンドに対応するポータブルPython DataFrameライブラリ（1つのAPI）

### Data Ingestion / ETL

_複数のソースと宛先を対象としたデータ抽出、変換、ロードパイプライン用のライブラリ._

- General
  - [awswrangler](https://github.com/aws/aws-sdk-pandas) - AWSサービス（Athena、Glue、Redshift、S3、DynamoDBなど）とのPandas統合
  - [dlt](https://github.com/dlt-hub/dlt) - 自動スキーマ推定、インクリメンタルロード、複数のソースとデストレーションをサポートするデータパイプライン構築用Python ETLフレームワーク
  - [pathway](https://github.com/pathwaycom/pathway) - ストリーム処理、リアルタイム分析、LLMパイプライン、RAG向けのPython ETLフレームワーク
- Financial Data
  - [yfinance](https://github.com/ranaroussi/yfinance) - Yahoo Financeから市場および金融データをダウンロードするための簡単なPythonic方法
  - [akshare](https://github.com/akfamily/akshare) - 人間が使いやすい構成の金融データインターフェースライブラリ
  - [edgartools](https://github.com/dgunning/edgartools) - SEC EDGAR提出書類およびXBRL財務諸表から構造化データをダウンロードするためのライブラリ
  - [openbb](https://github.com/OpenBB-finance/OpenBB) - アナリスティク、クォント、AIエージェント向けの金融データプラットフォーム

### Data Validation

_データの検証用のライブラリ。多くの場合、フォームに使用される._

- [pydantic](https://github.com/pydantic/pydantic) - Pythonの型ヒントを用いたデータ検証
- [jsonschema](https://github.com/python-jsonschema/jsonschema) - Pythonにおける[JSON Schema](https://json-schema.org/)の実装
- [pandera](https://github.com/unionai-oss/pandera) - pandas、polars、Sparkに対応したデータフレーム用データ検証ライブラリ

### Data Visualization

データ可視化用のライブラリ。また、[awesome-javascript](https://github.com/sorrycc/awesome-javascript#data-visualization)も参照してください。

- Plotting
  - [matplotlib](https://github.com/matplotlib/matplotlib) - Pythonによる2次元プロットライブラリ
  - [plotly](https://github.com/plotly/plotly.py) - Python向けのインタラクティブグラフライブラリ
  - [seaborn](https://github.com/mwaskom/seaborn) - Matplotlibを用いた統計データ可視化
  - [altair](https://github.com/vega/altair) - Python向けの宣言型統計可視化ライブラリ
  - [bokeh](https://github.com/bokeh/bokeh) - Python用のインタラクティブなウェブプロット
- Specialized
  - [cartopy](https://github.com/SciTools/cartopy) - Matplotlibをサポートする地図用Pythonライブラリ
  - [pygraphviz](https://github.com/pygraphviz/pygraphviz/) - [Graphviz](https://www.graphviz.org/)へのPythonインターフェース
  - [graphify](https://github.com/Graphify-Labs/graphify) - コード、SQLスキーマ、ドキュメント、論文、画像、動画など、任意のフォルダをクエリ可能な知識グラフに変換
- Dashboards and Apps
  - [streamlit](https://github.com/streamlit/streamlit) - ダッシュボードの構築、レポートの生成、チャットアプリの作成を数分で実現するフレームワーク
  - [gradio](https://github.com/gradio-app/gradio) - すべてPythonで機械学習アプリケーションの構築と共有

### Geolocation

住所の地名変換および経度・緯度の処理に用いられるライブラリ。

- [geopandas](https://github.com/geopandas/geopandas) - pandasに基づくPythonによる地理データツール（GeoSeries/GeoDataFrame）
- [geopy](https://github.com/geopy/geopy) - Pythonによる地理コードツールボックス
- [geojson](https://github.com/jazzband/geojson) - GeoJSONへのPythonバインディングとユーティリティ
- [geodjango](https://github.com/django/django) - 世界レベルの地理ウェブフレームワークであり、[Django](https://docs.djangoproject.com/en/dev/ref/contrib/gis/)の一部

### Science

科学計算用のライブラリ。また、[Python-for-Scientists](https://github.com/TomNicholas/Python-for-Scientists)も参照してください。

- Core
  - [numpy](https://github.com/numpy/numpy) - Pythonによる科学計算の基本パッケージ
  - [scipy](https://github.com/scipy/scipy) - 数学、科学、工学分野向けのオープンソースソフトウェアを構成するPythonベースのエコシステム
  - [numba](https://github.com/numba/numba) - 科学用Python向けのPython JITコンパイラ（LLVM向け）
- Symbolic Mathematics
  - [sympy](https://github.com/sympy/sympy) - シンボリック数学用のPythonライブラリ
- Statistics
  - [statsmodels](https://github.com/statsmodels/statsmodels) - Pythonでの統計モデルと経済計量学。
- Biology and Chemistry
  - [biopython](https://github.com/biopython/biopython) - バイオピートンは生物学計算に用いられる無料ツールの集合体
  - [rdkit](https://github.com/rdkit/rdkit) - 化学情報学および機械学習ソフトウェア
- Physics and Engineering
  - [astropy](https://github.com/astropy/astropy) - 天文分野向けのコミュニティPythonライブラリ
  - [obspy](https://github.com/obspy/obspy) - 地震学用のPythonツールボックス
- Simulation and Modeling
  - [pymc](https://github.com/pymc-devs/pymc) - Pythonによる確率プログラミングおよびベイズモデルの構築
  - [simpy](https://gitlab.com/team-simpy/simpy) - プロセスベースの離散イベントシミュレーションフレームワーク
  - [mesa](https://github.com/mesa/mesa) - 複雑システムシミュレーションの構築・分析・可視化に用いるアグリーティーモデリングフレームワーク
- Graphs and Networks
  - [networkx](https://github.com/networkx/networkx) - 複雑ネットワーク向けの高生産性ソフトウェア
- Computational Geometry
  - [shapely](https://github.com/shapely/shapely) - カーテシアン平面上の幾何学的オブジェクトの操作および解析
- Other
  - [colour-science](https://github.com/colour-science/colour) - 色理論の多様な変換およびアルゴリズムの実装
  - [manim](https://github.com/ManimCommunity/manim) - 説明用数学動画向けのアニメーションエンジン

### Quantum Computing

量子計算用のライブラリ。

- [qiskit](https://github.com/Qiskit/qiskit) - IBMが支援する量子SDKで、実際の量子ハードウェア上で回路を構築・シミュレーション・実行
- [qutip](https://github.com/qutip/qutip) - Pythonにおける量子ツールボックス
- [pennylane](https://github.com/PennyLaneAI/pennylane) - 自動微分をサポートする量子と古典のハイブリッド機械学習ライブラリ
- [cirq](https://github.com/quantumlib/Cirq) - Googleが開発したNISQデバイス向けのハードウェア意識型量子回路設計フレームワーク

**開発ツール**

### Algorithms and Design Patterns

_データ構造、アルゴリズムおよび設計パターンに関するPython実装。また、[awesome-algorithms](https://github.com/tayllan/awesome-algorithms)を参照してください._

- Algorithms
  - [sortedcontainers](https://github.com/grantjenks/python-sortedcontainers) - 並べ替え可能なコレクションの高速かつ純粋Python実装
  - [algorithms](https://github.com/keon/algorithms) - データ構造およびアルゴリズムの最小例
  - [thealgorithms](https://github.com/TheAlgorithms/Python) - すべてのアルゴリズ中Pythonで実装
- Design Patterns
  - [transitions](https://github.com/pytransitions/transitions) - 軽量かつオブジェクト指向の有限状態マシン実装
  - [python-patterns](https://github.com/faif/python-patterns) - Pythonにおける設計パターンのコレクション

### Interactive Interpreter

_インタラクティブなPythonインタープリタ（REPL）._

- [ipython](https://github.com/ipython/ipython) - 強力なインタラクティブPythonシェルであり、Jupyterノートブックの核となるもの
- [jupyter](https://github.com/jupyter/notebook) - Pythonをインタラクティブに使う際に最大の効果を発揮できるための豊かなツールキット
  - [awesome-jupyter](https://github.com/markusschanta/awesome-jupyter)
- [marimo](https://github.com/marimo-team/marimo) - データを変換し、モデルを訓練。Gitに優しいPython形式で、次世代ノートブックのような体験を提供
- [ptpython](https://github.com/prompt-toolkit/ptpython) - [python-prompt-toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit)に基づいた高度なPython REPL

### Code Analysis

_静的解析ツール、リントツールおよびコード品質チェックツール。また、[awesome-static-analysis](https://github.com/analysis-tools-dev/static-analysis)を参照してください._

- Code Analysis
  - [vulture](https://github.com/jendrikseipp/vulture) - 死んでいるPythonコードを検出・分析するツール
  - [prospector](https://github.com/prospector-dev/prospector) - Pythonコードを分析するツール
  - [repowise](https://github.com/repowise-dev/repowise) - リポジトリを依存関係グラフ、Git履歴、自動生成ドキュメントにインデックス化し、死んでいるコードを検出するコードベースインテリジェンス
- Git Hooks
  - [pre-commit](https://github.com/pre-commit/pre-commit) - マルチ言語のプリコミットハックを管理・維持するためのフレームワークです。
- Linters and Formatters
  - [ruff](https://github.com/astral-sh/ruff) - 非常に高速なPythonのリントツールおよびコードフォーマッタ
  - [black](https://github.com/psf/black) - 不動の Python コードフォーマッター。
  - [isort](https://github.com/PyCQA/isort) - Pythonのインポートを並べ替えるためのユーティリティ／ライブラリ
  - [pylint](https://github.com/pylint-dev/pylint) - 完全にカスタマイズ可能なソースコード分析ツール
  - [flake8](https://github.com/PyCQA/flake8) - `pycodestyle`、`pyflakes`およびMcCabeをラップしたツール
    - [awesome-flake8-extensions](https://github.com/DmytroLitvinov/awesome-flake8-extensions)
  - [bandit](https://github.com/PyCQA/bandit) - Pythonコードに共通するセキュリティ問題を特定するツール。
- Refactoring
  - [rope](https://github.com/python-rope/rope) - RopeはPythonのリファクタリングライブラリ
- Type Checkers - [awesome-python-typing](https://github.com/typeddjango/awesome-python-typing)
  - [mypy](https://github.com/python/mypy) - コンパイル時に変数の型を確認する機能
  - [ty](https://github.com/astral-sh/ty) - 非常に高速なPython型チェックツールおよび言語サーバー
  - [pyright](https://github.com/microsoft/pyright) - Microsoftが開発した、Pylanceのエンジンとして使われるフル機能の静的型チェックツール
  - [pyrefly](https://github.com/facebook/pyrefly) - Python用の高速型チェック器および言語サーバー。
- Type Annotations Generators
  - [monkeytype](https://github.com/Instagram/MonkeyType) - Python向けのシステムで、実行時の型を収集して静的型アノテーションを生成

### Testing

コードベースのテストおよびテストデータの生成に用いられるライブラリ。また、[awesome-python-testing](https://github.com/cleder/awesome-python-testing)も参照してください。

- Frameworks
  - [pytest](https://github.com/pytest-dev/pytest) - 成熟したフル機能のPythonテストツール
    - [awesome-pytest](https://github.com/augustogoulart/awesome-pytest)
  - [hypothesis](https://github.com/HypothesisWorks/hypothesis) - Hypothesisは、Quickcheckスタイルのプロパティベーステストを実現する高度なテストライブラリ
  - [robotframework](https://github.com/robotframework/robotframework) - 汎用的なテスト自動化フレームワーク
- Test Runners
  - [tox](https://github.com/tox-dev/tox) - 複数のPythonバージョンで自動的にビルドとテストを行う
  - [nox](https://github.com/wntrblm/nox) - Python向けの柔軟なテスト自動化
- Browser Automation
  - [playwright-python](https://github.com/microsoft/playwright-python) - Playwrightテストおよび自動化ライブラリのPython版
  - [selenium](https://github.com/SeleniumHQ/selenium) - [Selenium](https://selenium.dev/) [WebDriver](https://selenium.dev/documentation/webdriver/)のPythonバインディング
  - [seleniumbase](https://github.com/seleniumbase/SeleniumBase) - ウェブ自動化およびテスト用のPythonフレームワーク（ステルトオプション付き）
- Load Testing
  - [locust](https://github.com/locustio/locust) - Pythonで書かれたスケーラブルなユーザー負荷テストツール
- API Testing
  - [schemathesis](https://github.com/schemathesis/schemathesis) - Open API / Swagger仕様で構築されたウェブアプリケーションの自動プロパティベーステストツール
- Mock
  - [mock](https://docs.python.org/3/library/unittest.mock.html) - （Python標準ライブラリ）モックおよびパッチングライブラリ
  - [responses](https://github.com/getsentry/responses) - requests Pythonライブラリのモック用ユーティリティライブラリ
  - [freezegun](https://github.com/spulec/freezegun) - datetimeモジュールをモックすることで時間を移動
  - [vcrpy](https://github.com/kevin1024/vcrpy) - テスト中のHTTP相互作用を記録・再現
  - [respx](https://github.com/lundberg/respx) - HTTPXをモックし、素晴らしいリクエストパターンとレスポンス側効果を提供
- Object Factories
  - [factory_boy](https://github.com/FactoryBoy/factory_boy) - Python向けのテストフィクスチャの代替ツール
  - [polyfactory](https://github.com/litestar-org/polyfactory) - クラスをサポートするモックデータ生成ライブラリ（`pydantic-factories`の継続）
- Code Coverage
  - [coverage](https://github.com/coveragepy/coveragepy) - コードカバレッジの測定
- Fake Data
  - [faker](https://github.com/joke2k/faker) - ウェブアプリケーション用のフィクスデータを生成するPythonパッケージ
  - [mimesis](https://github.com/lk-geimfari/mimesis) - フィクスデータを生成するPythonライブラリ

### Debugging Tools

コードのデバッグに用いられるライブラリ。

- pdb-like Debugger
  - [ipdb](https://github.com/gotcha/ipdb) - IPython対応 [pdb](https://docs.python.org/3/library/pdb.html)
  - [pudb](https://github.com/inducer/pudb) - フルスクリーンのコンソールベースPythonデバッガー
- Tracing
  - [hunter](https://github.com/ionelmc/python-hunter) - 柔軟なコードトレースツールキット
- Profiler
  - [py-spy](https://github.com/benfred/py-spy) - Pythonプログラム向けのサンプリングプロファイラー。Rustで書かれたもの。
  - [memray](https://github.com/bloomberg/memray) - Pythonコード、ネイティブ拡張、インタープリタ自身におけるメモリ割り当てを追跡するメモリプロファイラー。
  - [pyinstrument](https://github.com/joerick/pyinstrument) - 低オーバーヘッドで、読みやすい呼び出し木出力を持つ統計的なウォールクロックプロファイラー。
  - [scalene](https://github.com/plasma-umass/scalene) - Python向けの高パフォーマンスかつ高精度のCPU、GPU、メモリプロファイラー。
- Others
  - [django-debug-toolbar](https://github.com/django-commons/django-debug-toolbar) - Django向けのさまざまなデバッグ情報を表示するツール。
  - [icecream](https://github.com/gruns/icecream) - 変数、式、プログラム実行を1つのシンプルな関数呼び出しで確認できるツール。
  - [flask-debugtoolbar](https://github.com/pallets-eco/flask-debugtoolbar) - django-debug-toolbarをFlaskに移植したツール。

### Build Tools

ソースコードからソフトウェアをコンパイルするためのライブラリ。Pythonのパッケージやビルドツールを探している場合は、[Package Management](#package-management)も参照してください。

- [invoke](https://github.com/pyinvoke/invoke) - シェル指向のサブプロセスを管理し、実行可能なPythonコードをCLI呼び出し可能なタスクに整理するツール。
- [scons](https://github.com/SCons/scons) - ソフトウェア構築ツール。
- [doit](https://github.com/pydoit/doit) - タスク実行者およびビルドツール。

### Documentation

プロジェクトドキュメントの生成に用いられるライブラリ。

- [sphinx](https://github.com/sphinx-doc/sphinx/) - Pythonドキュメンテーション生成ツール。
  - [awesome-sphinxdoc](https://github.com/ygzgxyz/awesome-sphinxdoc)
- [mkdocs-material](https://github.com/squidfunk/mkdocs-material) - MkDocsに基づくドキュメンテーションフレームワークおよびMaterial Designテーマ。
- [mkdocs](https://github.com/mkdocs/mkdocs/) - Markdownに優しいドキュメンテーション生成ツール。
- [diagrams](https://github.com/mingrammer/diagrams) - 図式をコードとして扱うツール。
- [pdoc](https://github.com/mitmproxy/pdoc) - PythonライブラリのAPIドキュメンテーションを自動生成するEpydocの代替ツール。

**DevOps**

### DevOps Tools

_ソフトウェアおよびライブラリ（DevOps用）._

- Cloud Providers
  - [boto3](https://github.com/boto/boto3) - Python向けのAmazon Web Servicesインターフェース。
  - [awscli](https://github.com/aws/aws-cli) - Amazon Web Services向けのユニバーサルコマンドラインインターフェース。
  - [azure-sdk-for-python](https://github.com/Azure/azure-sdk-for-python) - Microsoft Azure SDK for Python、サービスごとのパッケージとして公開されたもの。
  - [google-cloud-python](https://github.com/googleapis/google-cloud-python) - Google CloudのPython用クライアントライブラリ、サービスごとのパッケドとして公開されたもの。
- Configuration Management
  - [ansible](https://github.com/ansible/ansible) - 極めてシンプルなIT自動化プラットフォーム。
  - [cloud-init](https://github.com/canonical/cloud-init) - クラウドインスタンスの初期化を扱うマルチディストリビューションパッケージ
  - [pyinfra](https://github.com/pyinfra-dev/pyinfra) - インフラストラクチャを自動化する柔軟なCLIツールおよびPythonライブラリ
  - [salt](https://github.com/saltstack/salt) - インフラストラクチャの自動化および管理システム
- Deployment
  - [fabric](https://github.com/fabric/fabric) - リモート実行とデプロイに適したシンプルでPython的なツール
  - [chalice](https://github.com/aws/chalice) - AWS向けのPythonサーバレスマイクロフレームワーク
- Monitoring and Processes
  - [psutil](https://github.com/giampaolo/psutil) - マルチプラットフォームのプロセスおよびシステムユーティリティモジュール
  - [sentry-sdk](https://github.com/getsentry/sentry-python) - Python用のSentry SDK
  - [supervisor](https://github.com/Supervisor/supervisor) - UNIX向けのプロセス制御システム
  - [flower](https://github.com/mher/flower) - Celeryタスクキューのリアルタイムモニタリングとウェブ管理インターフェース
  - [sh](https://github.com/amoffat/sh) - Python用の完全なサブプロセスリプレースツール
- Other
  - [borgbackup](https://github.com/borgbackup/borg) - 圧縮および暗号化をサポートする重複除去アーカイブツール
  - [chaostoolkit](https://github.com/chaostoolkit/chaostoolkit) - 開発者向けの混沌工程（Chaos Engineering）ツールキットおよびオーケストレーション

### Distributed Computing

_分散計算用のフレームワークおよびライブラリ._

- [ray](https://github.com/ray-project/ray/) - 並列および分散Python環境を統合する機械学習エコシステムの統合システム
- [pyspark](https://github.com/apache/spark) - [Apache Spark](https://spark.apache.org/) Python API.
- [dask](https://github.com/dask/dask) - 解析計算向けの柔軟な並列計算ライブラリ
- [joblib](https://github.com/joblib/joblib) - Pythonで軽量なパイプラインを提供するツールセット
- [mpi4py](https://github.com/mpi4py/mpi4py) - MPI用のPythonバインディング

### Task Queues

_タスクキューとの対話用のライブラリ._

- [celery](https://github.com/celery/celery) - 分散メッセージ伝達に基づく非同期タスクキュー／ジョブキュー
- [rq](https://github.com/rq/rq) - Python向けのシンプルなジョブキュー
- [dramatiq](https://github.com/Bogdanp/dramatiq) - Python 3向けの高速かつ信頼性の高いバックグラウンドタスク処理ライブラリ
- [huey](https://github.com/coleifer/huey) - 小さなマルチスレッドタスクキュー
- [taskiq](https://github.com/taskiq-python/taskiq) - ネイティブなasyncioサポートとプラグイン可能なブローカーを備えた分散タスクキュー

### Messaging

メッセージブローカーおよびイベントストリーミングとの対話に使うライブラリ。

- [confluent-kafka](https://github.com/confluentinc/confluent-kafka-python) - Apache Kafka向けConfluentのPythonクライアント（librdkafkaに基づく）
- [pika](https://github.com/pika/pika) - 純粋PythonによるRabbitMQ/AMQP 0-9--1クライアントライブラリ
- [paho-mqtt](https://github.com/eclipse-paho/paho.mqtt.python) - Python向けEclipse Paho MQTTクライアント
- [faststream](https://github.com/ag2ai/faststream) - Apache Kafka、RabbitMQ、NATS、MQTTおよびRedis上で非同期サービスを構築するためのフレームワーク

### Job Schedulers

ジョブのスケジューリングに使うライブラリ。

- Task Scheduling
  - [apscheduler](https://github.com/agronholm/apscheduler) - 軽量だが強力なプロセス内タスクスケジューラで、関数のスケジュールを可能にする
  - [schedule](https://github.com/dbader/schedule) - 人間向けのPythonジョブスケジューリング
- Workflow Orchestration
  - [apache-airflow](https://github.com/apache/airflow) - Airflowは、ワークフローをプログラム的に作成・スケジュール・監視するためのプラットフォーム
  - [prefect](https://github.com/PrefectHQ/prefect) - Apache Kafka、RabbitMQ、NATS、MQTTおよびRedis上で、強固なデータパイプラインを構築・スケジュール・監視しやすいワークフローオーケストレーションフレームワーク
  - [dagster](https://github.com/dagster-io/dagster) - データ資産の開発、生産、観察におけるオーケストレーションプラットフォーム

### Logging

ログの生成および処理に使うライブラリ。

- [logging](https://docs.python.org/3/library/logging.html) - （Python標準ライブラリ）Python向けのログ機能
- [structlog](https://github.com/hynek/structlog) - 構造化ログを簡単に実現
- [loguru](https://github.com/Delgan/loguru) - Pythonでの楽しいログ記録を実現するライブラリ

### Network Virtualization

仮想ネットワークおよびSDN（ソフトウェア定義ネットワーク）に使うツールおよびライブラリ。

- [scapy](https://github.com/secdev/scapy) - 優れたパケット操作ライブラリ
- [napalm](https://github.com/napalm-automation/napalm) - ネットワークデバイスを操作するための跨ベンダーAPI

**CLI & GUI**

### CLI Development

_コマンドラインアプリケーションを構築するためのライブラリ._

- CLI Development
  - [argparse](https://docs.python.org/3/library/argparse.html) - （Python標準ライブラリ）コマンドラインオプションおよび引数の解析
  - [click](https://github.com/pallets/click/) - コンポジブルな方法で美しいコマンドラインインターフェースを作成するためのパッケージ
  - [typer](https://github.com/fastapi/typer) - ClickおよびPydanticに基づく、Python型ヒントを使用する現代的なCLIフレームワーク
  - [prompt_toolkit](https://github.com/prompt-toolkit/python-prompt-toolkit) - 強力なインタラクティブコマンドラインを構築するためのライブラリ
  - [fire](https://github.com/google/python-fire) - 任意のPythonオブジェクトからコマンドラインインターフェースを作成するためのライブラリ
- Terminal Rendering
  - [tqdm](https://github.com/tqdm/tqdm) - ループやCLI用の高速かつ拡張可能な進行バー
  - [rich](https://github.com/Textualize/rich) - ターミナルにおける豊かなテキストと美的フォーマットを提供するPythonライブラリ。また、非常に優れた `RichHandler` ログハンドラーも提供しています
  - [colorama](https://github.com/tartley/colorama) - クロスプラットフォームでターミナル文字列を色付け
  - [alive-progress](https://github.com/rsalmei/alive-progress) - リアルタイムの通過量、予測時間、非常にカッコイイアニメーションを備えた新しいプログレスバー
- TUI Frameworks
  - [textual](https://github.com/Textualize/textual) - ターミナルとブラウザで実行可能なインタラクティブユーザーインターフェースを構築するためのフレームワーク
  - [urwid](https://github.com/urwid/urwid) - ウィジェット、イベント、豊かな色などに強いサポートを備えたターミナルGUIアプリケーションを作成するためのライブラリ
  - [asciimatics](https://github.com/peterbrittain/asciimatics) - フルスクリーンテキストUI（インタラクティブフォームからASCIIアニメーションまで）を作成するためのパッケージ

### CLI Tools

_CLIベースの便利なツール._

- Database CLIs
  - [pgcli](https://github.com/dbcli/pgcli) - PostgreSQL用のCLIツールで、自動補完と文法ハイ及が可能
  - [mycli](https://github.com/dbcli/mycli) - 自動補完と文法ハイライトを備えたMySQL CLI
  - [litecli](https://github.com/dbcli/litecli) - 自動補完と文法ハイライトを備えたSQLite CLI
  - [iredis](https://github.com/laixintao/iredis) - 自動補完と文法ハイ連を備えたRedis CLI
- Downloaders
  - [yt-dlp](https://github.com/yt-dlp/yt-dlp) - YouTubeおよびその他の動画サイトから動画をダウンロードするコマンドラインプログラム（youtube-dlのフォーク）
- HTTP Clients
  - [httpie](https://github.com/httpie/cli) - ユーザーに親切なcURLの代替品であるコマンドラインHTTPクライアント
- Project Scaffolding
  - [cookiecutter](https://github.com/cookiecutter/cookiecutter) - コッキーカッター（プロジェクトテンプレート）からプロジェクトを作成するコマンドラインユーティリティ
  - [copier](https://github.com/copier-org/copier) - プロジェクトテンプレートをレンダリングするためのライブラリおよびコマンドラインユーティリティ
- Shells
  - [xonsh](https://github.com/xonsh/xonsh/) - Pythonを活用した高機能なクロスプラットフォームシェル。
- Terminal Workflow
  - [tmuxp](https://github.com/tmux-python/tmuxp) - [tmux](https://github.com/tmux/tmux) セッションマネージャー

### GUI Development

_グラフィカルユーザーインターフェースアプリケーションを扱うためのライブラリ._

- Desktop
  - [pygobject](https://github.com/GNOME/pygobject) - GLib/GObject/GIO/GTK+（GTK+3）へのPythonバインディング
  - [wxPython](https://github.com/wxWidgets/Phoenix) - C++のwxWidgetsクラスライブラリとPythonの融合
  - [kivy](https://github.com/kivy/kivy) - Windows、Linux、Mac OS X、AndroidおよびiOSで実行可能なNUIアプリケーションを作成するためのライブラリ
  - [dearpygui](https://github.com/hoffstadt/DearPyGui) - GPUを活用したシンプルなPython GUIフレームワーク
  - [toga](https://github.com/beeware/toga) - Python本体に適合し、OS本体に適合するGUIツールキット
- Qt
  - [PySide6](https://github.com/pyside/pyside-setup) - Qt for Pythonは、[Qt](https://www.qt.io/)の公式Pythonバインディングを提供しており、PyQt6と同様ですが、公式バインディングであり、ライセンスが異なります
  - [PyQt6](https://www.riverbankcomputing.com/static/Docs/PyQt6/) - [Qt](https://www.qt.io/)のクロスプラットフォームアプリケーションおよびUIフレームワークに対するPythonバインディング
- Tkinter
  - [tkinter](https://docs.python.org/3/library/tkinter.html) - (Python標準ライブラリ) Tcl/Tk GUIツールキットへの標準Pythonインターフェース
  - [customtkinter](https://github.com/tomschimansky/customtkinter) - Tkinterをベースとした現代的でカスタマイズ可能なPython UIライブラリ
  - [tkdesigner](https://github.com/ParthJadhav/Tkinter-Designer) - Figma APIを用いてFigma設計からTkinterインターフェースを生成
- Web-based
  - [pywebview](https://github.com/r0x0r/pywebview/) - ウェブビューコンポーネントをラップした軽量かつクロスプラットフォームのネイティブワッパー
  - [nicegui](https://github.com/zauberzeug/nicegui) - ブラウザに表示される、使いやすいPythonベースのUIフレームワーク
  - [flet](https://github.com/flet-dev/flet) - 純粋なPythonで現代的なアプリケーションを構築するためのクロスプラットキットGUIフレームワーク
- Wrappers
  - [gooey](https://github.com/chriskiehl/Gooey) - 1行でコマンドラインプログラムをフルGUIアプリケーションに変換

**テキストとドキュメント**

### Text Processing

_プレーンテキストのパースと操作に用いられるライブラリ._

- Encoding and Unicode
  - [charset-normalizer](https://github.com/jawah/charset_normalizer) - リクエストエコシステムのデフォルトである、ユニバーサルな文字エンコーディング検出器
  - [chardet](https://github.com/chardet/chardet) - Pythonによる文字エンコーディング検出器
  - [ftfy](https://github.com/rspeer/python-ftfy) - Unicodeテキストを自動的に壊れにくく、一貫性のあるものに変換
- Fuzzy Matching
  - [rapidfuzz](https://github.com/rapidfuzz/RapidFuzz) - さまざまな文字列メトリクスを用いた高速なフュージー文字列マッチング、C++ベース
- General
  - [difflib](https://docs.python.org/3/library/difflib.html) - (Python標準ライブラリ) デルタ計算に必要なヘルパー関数
  - [pyfiglet](https://github.com/pwaller/pyfiglet) - Pythonで書かれたfigletの実装
- Internationalization
  - [babel](https://github.com/python-babel/babel) - Python向けの国際化ライブラリ
- Parser
  - [pygments](https://github.com/pygments/pygments) - 一般的なシンタックスハイライトャー
  - [pyparsing](https://github.com/pyparsing/pyparsing) - パーサーを生成するための汎用フレームワーク
  - [sqlparse](https://github.com/andialbrecht/sqlparse) - 非検証型のSQLパーサー
  - [phonenumbers](https://github.com/daviddrysdale/python-phonenumbers) - 国際電話番号のパース、フォーマット、保存および検証
  - [parsy](https://github.com/python-parsy/parsy) - 簡単で汎用的なパーサー組み合わせライブラリ
- Transliteration and Slugs
  - [python-slugify](https://github.com/un33k/python-slugify) - UnicodeをASCIIに変換するPythonのslugifyライブラリ
  - [unidecode](https://github.com/avian2/unidecode) - UnicodeテキストのASCII変換
- Unique identifiers
  - [shortuuid](https://github.com/skorokithakis/shortuuid) - 簡潔で曖昧さのない、URL安全なUUIDを生成するライブラリ
  - [sqids](https://github.com/sqids/sqids-python) - 数値から短い一意なIDを生成するライブラリ

### HTML Manipulation

_HTMLおよびXMLを扱うライブラリ._

- [beautifulsoup4](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) - HTMLやXMLをイテレート、検索、変更するためのPython的な慣習を提供
- [lxml](https://github.com/lxml/lxml) - HTMLおよびXMLを扱う非常に高速で使いやすく、多機能なライブラリ
- [xmltodict](https://github.com/martinblech/xmltodict) - XMLを扱うのはJSONを扱うのと同じように感じる
- [markupsafe](https://github.com/pallets/markupsafe) - PythonでXML/HTML/XHTMLマーカー安全な文字列を実装
- [justhtml](https://github.com/EmilStenstrom/justhtml/) - 純粋なPythonのHTML5パーサー

### File Format Processing

_特定のテキストフォーマットのパースと操作に用いられるライブラリ._

- General
  - [pyelftools](https://github.com/eliben/pyelftools) - ELFファイルおよびDWARFデバッグ情報のパースと分析
  - [tablib](https://github.com/jazzband/tablib) - XLS、CSV、JSON、YAMLにおけるテーブルデータセットのモジュール
- File Conversion
  - [markitdown](https://github.com/microsoft/markitdown) - ファイルおよびオフィスドキュメントをMarkdownに変換するPythonツール
  - [docling](https://github.com/docling-project/docling) - ドキュメントを構造化データに変換するライブラリ
- Excel
  - [openpyxl](https://openpyxl.readthedocs.io/en/stable/) - Excel 2010のxlsx/xlsm/xltx/xltmファイルを読み書きするライブラリ
  - [xlsxwriter](https://github.com/jmcnamara/XlsxWriter) - Excel .xlsxファイルを作成するPythonモジュール
- Word
  - [python-docx](https://github.com/python-openxml/python-docx) - Microsoft Word 2007/2008のdocxファイルを読み、クエリ、変更する
- PowerPoint
  - [python-pptx](https://github.com/scanny/python-pptx) - PowerPoint (.pptx)ファイルを作成および更新するPythonライブラリ
- PDF
  - [pypdf](https://github.com/py-pdf/pypdf) - PDFページを分割、マージ、切り取り、変換できるライブラリ
  - [reportlab](https://www.reportlab.com/opensource/) - 豊かなPDFドキュメントの迅速な作成を可能にする。
  - [pdfminer.six](https://github.com/pdfminer/pdfminer.six) - Pdfminer.sixは元のPDFMinerのコミュニティが維持するフォークである。
- HTML-to-PDF
  - [weasyprint](https://github.com/Kozea/WeasyPrint) - HTMLとCSSの視覚的なレンダリングエンジンでPDF出力が可能。
- Markdown
  - [markdown-it-py](https://github.com/executablebooks/markdown-it-py) - CommonMarkの100％サポート、拡張機能、構文プラグインを備えたマークダウンパーサー。
  - [markdown](https://github.com/Python-Markdown/markdown) - ジョン・グリバーのマークダウンをPythonで実装したもの。
  - [mistune](https://github.com/lepture/mistune) - 最も高速かつ機能が豊富な純Pythonによるマークダウンパーサー。
- Data Formats
  - [tomllib](https://docs.python.org/3/library/tomllib.html) - （Python標準ライブラリ）TOMLファイルのパース。
  - [pyyaml](https://github.com/yaml/pyyaml) - PythonにおけるYAMLの実装。

### File Manipulation

ファイル操作用のライブラリ。

- [mimetypes](https://docs.python.org/3/library/mimetypes.html) - （Python標準ライブラド）ファイル名をMIMEタイプにマップする。
- [pathlib](https://docs.python.org/3/library/pathlib.html) - （Python標準ライブラリ）プラットフォームを越えてオブジェクト指向のパスライブラリ。
- [watchfiles](https://github.com/samuelcolvin/watchfiles) - シンプルで現代的かつ高速なPythonにおけるファイル監視とコードリロード。
- [watchdog](https://github.com/gorakhargosh/watchdog) - ファイルシステムイベントを監視するAPIおよびシェルユーティリティ。
- [python-magic](https://github.com/ahupp/python-magic) - libmagicファイルタイプ識別ライブラリへのPythonインターフェース。

メディア

### Image Processing

画像操作用のライブラリ。

- Barcodes and QR Codes
  - [qrcode](https://github.com/lincolnloop/python-qrcode) - 純PythonによるQRコード生成器。
  - [python-barcode](https://github.com/WhyNotHugo/python-barcode) - Pythonでバーコードを作成する際に追加の依存関係を必要としない。
- General
  - [pillow](https://github.com/python-pillow/Pillow) - Pillowは親しみやすい [PIL](https://www.pythonware.com/products/pil/) フォークである。
  - [scikit-image](https://github.com/scikit-image/scikit-image) - （科学的）画像処理に用いるPythonライブラリ。
  - [rembg](https://github.com/danielgatis/rembg) - 画像の背景を削除するツール。
  - [wand](https://github.com/emcconville/wand) - [MagickWand](https://www.imagemagick.org/script/magick-wand.php)へのPythonバインディング、ImageMagickのC API。
  - [pyvips](https://github.com/libvips/pyvips) - メモリ消費が少ない高速画像処理ライブラリ
- Image Serving
  - [thumbor](https://github.com/thumbor/thumbor) - スマートな画像サービス。画像のオンデマンドでの切り取り、サイズ変更、反転を可能にする。

### Audio & Video Processing

音声、動画およびそのメタデータ操作用のライブラリ。

- Audio
  - [pydub](https://github.com/jiaaro/pydub) - オーディオをシンプルで使いやすい高レベルインターフェースで操作します。
  - [librosa](https://github.com/librosa/librosa) - オーディオおよび音楽分析用のPythonライブラリ
- Video
  - [moviepy](https://github.com/Zulko/moviepy) - スクリプトベースの動画編集用のモジュールで、アニメーションGIFを含む多くのフォーマットに対応しています。
  - [vidgear](https://github.com/abhiTronix/vidgear) - 最も強力なマルチスレッドビデオ処理フレームワーク。
- Metadata
  - [mutagen](https://github.com/quodlibet/mutagen) - オーディオメタデータを扱うPythonモジュール。
  - [tinytag](https://github.com/tinytag/tinytag) - MP3、OGG、FLACおよびWaveファイルの音楽メタデータを読み取るためのライブラリ。
  - [beets](https://github.com/beetbox/beets) - 音楽ライブラリマネージャーおよび [MusicBrainz](https://musicbrainz.org/) タグ付けツール。

### Game Development

素晴らしいゲーム開発用のライブラリです。

- 3D Engines
  - [panda3d](https://github.com/panda3d/panda3d) - ディズニーが開発した3Dゲームエンジン。
- Game Frameworks
  - [pygame](https://github.com/pygame/pygame) - Pygameは、ゲームを作成するためのPythonモジュールのセット。
  - [pyglet](https://github.com/pyglet/pyglet) - Python用のクロスプラットフォームウィンドウおよびマルチメディアライブラリ。
  - [pygame-ce](https://github.com/pygame-community/pygame-ce) - 新しい機能とパフォーマンス向上を備えた積極的に開発中のdrop-inリプレース（[pygame](https://github.com/pygame/pygame) フォール）。
  - [arcade](https://github.com/pythonarcade/arcade) - Arcadeは、魅力的なグラフィックスとサウンドを持つゲームを作成するための現代的なPythonフレームワーク。
- Visual Novels
  - [renpy](https://github.com/renpy/renpy) - ビジュアルノベルエンジン。

Python言語

### Implementations

Pythonの実装。

- [cpython](https://github.com/python/cpython) - Cで書かれたPythonプログラミング言語のデフォルトで最も広く使われている実装。
- [micropython](https://github.com/micropython/micropython) - 軽量で効率的なPythonプログラミング言語実装。
- [pypy](https://github.com/pypy/pypy) - 非常に高速かつ準拠性の高いPython言語実装。
- [Cython](https://github.com/cython/cython) - Python用の最適化された静的コンパイラ。
- [pyodide](https://github.com/pyodide/pyodide) - WebAssemblyに基づくブラウザおよびNode.js用のPythonディストリビューション。

### Built-in Classes Enhancement

Pythonの標準クラスを強化するためのライブラリ。

- [attrs](https://github.com/python-attrs/attrs) - クラス定義における `__init__`、`__eq__`、`__repr__` など、ボイラープレートの代替。
- [bidict](https://github.com/jab/bidict) - 効率的でPython的、両方向のマップデータ構造および関連機能。
- [uuid-utils](https://github.com/aminalaee/uuid-utils) - 非常に高速でRustベースのPythonの標準的な `uuid` モジュールのdrop-inリプレースであり、RFC 9562（UUIDv6、UUIDv7、およびUUIDv8）をサポート。
- [python-box](https://github.com/cdgriffith/Box) - Pythonの辞書に進化したドット表記によるアクセス

### Functional Programming

Pythonでの関数型プログラミング

- [functools](https://docs.python.org/3/library/functools.html) - (Python標準ライブラリ) 呼び出し可能なオブジェクトに対する高階関数および操作
- [more-itertools](https://github.com/more-itertools/more-itertools) - `itertools`を超えてイテレートオブジェクトを操作するためのより多くのルーチン
- [toolz](https://github.com/pytoolz/toolz) - イテレーター、関数、辞書に対する機能的ユーティリティのコレクション。また、Cythonによるパフォーマンス向上版の[cytoolz](https://github.com/pytoolz/cytoolz/)も提供
- [funcy](https://github.com/Suor/funcy) - 洗練された実用的な関数ツール
- [returns](https://github.com/dry-python/returns) - 型安全なモナド、トランスフォーマー、および組み合わせユーティリティのセット

### Asynchronous Programming

非同期、並列および並列実行に使うライブラリ。また、[awesome-asyncio](https://github.com/timofurrer/awesome-asyncio)も参照してください。

- Async I/O
  - [asyncio](https://docs.python.org/3/library/asyncio.html) - (Python標準ライブラリ) 非同期I/O、イベントループ、コルーチンおよびタスク
    - [awesome-asyncio](https://github.com/timofurrer/awesome-asyncio)
  - [anyio](https://github.com/agronholm/anyio) - asyncioまたはtrioの上に構築された、高度な非同期並列処理およびネットワークフレームワーク
  - [uvloop](https://github.com/MagicStack/uvloop) - 極めて高速なasyncioイベントループ
  - [trio](https://github.com/python-trio/trio) - 非同期並列処理およびI/Oに便利なライブラリ
  - [gevent](https://github.com/gevent/gevent) - [greenlet](https://github.com/python-greenlet/greenlet)を用いたコルーチンベースのPythonネットワークライブラリ
  - [Twisted](https://github.com/twisted/twisted) - イベント駆動型ネットワークエンジン
- Parallelism
  - [concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html) - (Python標準ライブラリ) 非同期で呼び出し可能なオブジェクトを実行するための高度なインターフェース
  - [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) - (Python標準ライブラリ) プロセスベースの並列処理

### Date and Time

日付と時刻を扱うためのライブラリ

- [zoneinfo](https://docs.python.org/3/library/zoneinfo.html) - (Python標準ライブラリ) IANA時区サポート。[tz database](https://en.wikipedia.org/wiki/Tz_database)をPythonに導入
- [python-dateutil](https://github.com/dateutil/dateutil) - 標準Pythonの[datetime](https://docs.python.org/3/library/datetime.html)モジュールへの拡張
- [dateparser](https://github.com/scrapinghub/dateparser) - 数十言語の可読性のある日付を解析するPythonパーサー
- [pendulum](https://github.com/python-pendulum/pendulum) - Pythonの日時を簡単に扱う
- [whenever](https://github.com/ariebovenberg/whenever) - 現代的な日時ライブラリ。型安全かつ夏時間対応。Rustで実装されている

**Python Toolchain**

### Environment Management

Pythonバージョンおよび仮想環境管理用のライブラリ。

- [virtualenv](https://github.com/pypa/virtualenv) - 孤立したPython環境を作成するためのツール
- [uv](https://github.com/astral-sh/uv) - 非常に高速なPythonバージョン、パッケージ、プロジェクトマネージャーで、Rustで書かれたもの
- [pyenv](https://github.com/pyenv/pyenv) - シンプルなPythonによるバージョン管理

### Package Management

パッケージおよび依存関係管理用のライブラリ。

- Package Managers
  - [pip](https://github.com/pypa/pip) - Pythonのパッケージインストーラー
  - [uv](https://github.com/astral-sh/uv) - 非常に高速なPythonバージョン、パッケージ、プロジェクトマネージャーで、Rustで書かれたもの
  - [poetry](https://github.com/python-poetry/poetry) - Pythonの依存関係管理とパッケージ化を簡単に行える
  - [hatch](https://github.com/pypa/hatch) - 環境、ビルド、公開に最適化された現代的な拡張可能なPythonプロジェクトマネージャー
  - [pipx](https://github.com/pypa/pipx) - Pythonアプリケーションを隔離された環境でインストールおよび実行。Node.jsの`npx`のように。
  - [conda](https://github.com/conda/conda/) - マルチプラットフォーム対応、Pythonに依存しないバイナリパッケージマネージャー
- Build Backends
  - [setuptools](https://github.com/pypa/setuptools) - 歴史的に最も広く使われているpyprojectのビルドバックエンド
  - [hatchling](https://github.com/pypa/hatch) - hatchプロジェクトから提供される現代的で拡張可能なビルドバックエンド
  - [uv-build](https://github.com/astral-sh/uv) - uvの純Pythonプロジェクト向けの高速かつ最小のビルドバックエンド

### Package Repositories

ローカルなPyPIリポジトリサーバーおよびプロキシ。

- [bandersnatch](https://github.com/pypa/bandersnatch/) - Python Packaging Authority (PyPA)が提供するPyPIのミラーツール
- [devpi](https://github.com/devpi/devpi) - PyPIサーバーおよびパッケージ化・テスト・リリースツール
- [warehouse](https://github.com/pypi/warehouse) - 次世代Pythonパッケージリポジトリ（PyPI）

### Distribution

リリース配布用にパッケージ化された実行ファイルを作成するためのライブラリ。

- Executables
  - [pyinstaller](https://github.com/pyinstaller/pyinstaller) - Pythonプログラムをスタンドアローンの実行可能ファイルに変換（マルチプラットフォーム）
  - [Nuitka](https://github.com/Nuitka/Nuitka) - Pythonプログラムを高パフォーマンスのスタンドアローン実行可能ファイルにコンパイル（マルチプラットフォーム、すべてのPythonバージョンに対応）
  - [shiv](https://github.com/linkedin/shiv) - 完全に自立したzipアプリ（PEP 441）を構築するためのコマンドラインツールだが、すべての依存関係を含む
  - [cx-Freeze](https://github.com/marcelotduarte/cx_Freeze) - PythonスクリプトをWindows、macOS、Linux向けのスタンドアローン実行可能ファイルおよびインストーラに変換するPythonツール
- Obfuscation
  - [pyarmor](https://github.com/dashingsoft/pyarmor) - Pythonスクリプトを暗号化し、暗号化されたスクリプトを固定マシンにバインドまたは暗号化されたスクリプトの有効期限を設定するツール

### Configuration Files

設定オプションの保存とパースに用いられるライブラリ。

- [configparser](https://docs.python.org/3/library/configparser.html) - （Python標準ライブラリ）INIファイルパーサー
- [python-dotenv](https://github.com/theskumar/python-dotenv) - `.env`ファイルからキー値ペアを読み取り、環境変数として設定する
- [pydantic-settings](https://github.com/pydantic/pydantic-settings) - Pydanticモデルを用いた設定管理（バリデーション付き）および環境変数やシークレットファイルからの読み込み
- [hydra-core](https://github.com/facebookresearch/hydra) - Hydraは複雑なアプリケーションを美しく構成するためのフレームワークです
- [dynaconf](https://github.com/dynaconf/dynaconf) - DynaconfはDjango、FlaskおよびFastAPI向けのプラグインを備えた設定マネージャです

**セキュリティ**

### Cryptography

暗号化の基本操作および安全なプロトコルに用いられるライブラリ。

- [cryptography](https://github.com/pyca/cryptography) - Python開発者に暗号学的基礎構成とレシピを公開するパッケージです
- [pynacl](https://github.com/pyca/pynacl) - Pythonによるネットワーキングと暗号化（NaCl）ライブラリへのバインディング
- [paramiko](https://github.com/paramiko/paramiko) - Python用の本格的なSSHv2プロトコルライブラリです
- [itsdangerous](https://github.com/pallets/itsdangerous) - 信頼できるデータを信頼できない環境に渡すためのさまざまなヘルパー機能です

### Penetration Testing

侵入テストに用いられるフレームワークおよびツール。

- [mitmproxy](https://github.com/mitmproxy/mitmproxy) - パenetrationテストおよびソフトウェア開発者向けのTLS対応インタラクティブなHTTPプロキシです
- [sqlmap](https://github.com/sqlmapproject/sqlmap) - 自動SQLインジェクションおよびデータベース奪取ツール.
- [sherlock-project](https://github.com/sherlock-project/sherlock) - 複数のソーシャルネットワーク上でユーザー名からソーシャルメディアアカウントを特定します
- [social-engineer-toolkit](https://github.com/trustedsec/social-engineer-toolkit) - ソーシャルエンジニアリングに用いるツールキットです

### Supply Chain Security

既知の脆弱性に対して依存関係を監査するためのツール。

- [pip-audit](https://github.com/pypa/pip-audit) - PyPIアドバイザリーデータベースおよびOSVを用いて、Python環境および依存関係ツリーの既知の脆弱性を監査します
- [uv audit](https://docs.astral.sh/uv/reference/cli/#uv-audit) - uvの組み込みの依存関係の脆弱性およびマルウェアスキャン（OSVに基づく）

### Web Security

アプリケーション層のWebセキュリティ用のライブラリ。

- [secure](https://github.com/TypeError/secure) - ASGIおよびWSGIミドルウェアを用いたPythonウェブアプリケーション向けのHTTPセキュリティヘッダー

**その他**

### Hardware

ハードウェアとのプログラミング用のライブラリ。

- [bleak](https://github.com/hbldh/bleak) - asyncioを用いたPythonによるクロスプラットフォームBluetooth Low Energyクライアント
- [pynput](https://github.com/moses-palmer/pynput) - 入力デバイスの制御および監視を行うライブラリです
- [jumpstarter](https://github.com/jumpstarter-dev/jumpstarter) - リアルおよび仮想ハードウェア上で自動テストを行うためのハードウェアインザループテストフレームワーク（Pythonクライアントライブラリ付き）

### Microsoft Windows

マイクロソフト・ウィンドウズ上のPythonプログラミング

- [pythonnet](https://github.com/pythonnet/pythonnet) - Pythonと.NET共通言語ランタイム（CLR）の統合
- [pywin32](https://github.com/mhammond/pywin32) - Windows向けのPython拡張機能
- [pyenv-win](https://github.com/pyenv-win/pyenv-win) - Windows向けのPythonバージョンマネージャ（[pyenv](https://github.com/pyenv/pyenv)フォーク）
- [winpython](https://github.com/winpython/winpython) - Windows 10/11向けのポータブル開発環境

### Miscellaneous

上記のカテゴリに該当しない便利なライブラリやツール

- [blinker](https://github.com/pallets-eco/blinker) - Pythonにおける高速なプロセス内シグナル/イベントディスパッチシステム
- [boltons](https://github.com/mahmoud/boltons) - 純粋なPythonによるユーティリティのセット

## Resources

学習リソースや新しいPythonライブラリを発見する場所

### Newsletters

- [Awesome Python Newsletter](https://python.libhunt.com/newsletter)
- [Pycoder's Weekly](https://pycoders.com/)
- [Python Tricks](https://realpython.com/python-tricks/)
- [Python Weekly](https://www.pythonweekly.com/)

### Podcasts

- [Django Chat](https://djangochat.com/)
- [PyPodcats](https://pypodcats.live)
- [Python Bytes](https://pythonbytes.fm)
- [Talk Python To Me](https://talkpython.fm/)
- [The Real Python Podcast](https://realpython.com/podcasts/rpp/)

### Websites

- [Python Developer Tooling Handbook](https://pydevtools.com/) - パッケージ管理、リント、型チェック、テストなど、現代のPython開発者向けツールに関する包括的なガイド

## Contributing

ご寄付は常に歓迎です！まず [contribution guidelines](https://github.com/vinta/awesome-python/blob/master/CONTRIBUTING.md) をご確認ください。

---

この意見に基づくリストについて何か質問がある場合は、X（Twitter）上で [@vinta](https://x.com/vinta) までご連絡ください。
