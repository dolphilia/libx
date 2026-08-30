---
title: "mjhea0/awesome-fastapi"
description: "mjhea0/awesome-fastapi の定本スナップショット"
licenseSource: "github-mjhea0-awesome-fastapi-readme-md"
---



# Awesome FastAPI | [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> FastAPIに関する優れた資料・拡張・プロジェクトを集めた一覧です。

[FastAPI](https://fastapi.tiangolo.com/)は、RESTful APIの構築に適した、モダンで高性能かつ機能の充実したPythonウェブフレームワークです。

## 目次

- [サードパーティ拡張](#third-party-extensions)
  - [管理画面](#admin)
  - [認証](#auth)
  - [サイバーセキュリティ](#cybersecurity)
  - [データベース](#databases)
  - [依存性注入](#dependency-injection)
  - [開発ツール](#developer-tools)
  - [メール](#email)
  - [ユーティリティ](#utils)
- [リソース](#resources)
  - [公式リソース](#official-resources)
  - [外部リソース](#external-resources)
  - [ポッドキャスト](#podcasts)
  - [記事](#articles)
  - [チュートリアル](#tutorials)
  - [講演](#talks)
  - [動画](#videos)
  - [コース](#courses)
  - [ベストプラクティス](#best-practices)
- [ホスティング](#hosting)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [サーバーレス](#serverless)
- [プロジェクト](#projects)
  - [ボイラープレート](#boilerplate)
  - [Dockerイメージ](#docker-images)
  - [オープンソースプロジェクト](#open-source-projects)
- [スポンサー](#sponsors)

## サードパーティ拡張

### 管理画面

- [FastAPI Admin](https://github.com/fastapi-admin/fastapi-admin) - 機能的な管理パネルで、データに対してCRUD操作を行うためのユーザーインターフェースを提供します。現在はTortoise ORMのみに対応しています。
- [FastAPI Amis Admin](https://github.com/amisadmin/fastapi-amis-admin) - 高性能で効率的かつ拡張性の高いFastAPI用の管理フレームワーク。
- [Piccolo Admin](https://github.com/piccolo-orm/piccolo_admin) - 強力で現代的な管理GUIを、Piccolo ORMを使用して提供します。
- [SQLAlchemy Admin](https://github.com/smithyhq/sqladmin) - FastAPI/StarletteとSQLAlchemyモデルを連携できる管理パネル。
- [Starlette Admin](https://github.com/jowilf/starlette-admin) - FastAPI/Starlette用の管理フレームドレームで、SQLAlchemy、SQLModel、MongoDB、ODManticをサポートしています。


### 認証

- [AuthX](https://github.com/yezz123/AuthX) - FastAPI向けのカスタマイズ可能な認証とOAuth2管理。
- [FastAPI Auth](https://github.com/dmontagu/fastapi-auth) - OAuth2 Password FlowをサポートするJWTアクセスおよびリフレッシュトークンを備えたプラグイン型認証。
- [FastAPI Azure Auth](https://github.com/Intility/fastapi-azure-auth) - Azure ADによるAPI認証で、シングルおよびマルチテナントをサポート。
- [FastAPI Casbin Auth](https://github.com/apache/casbin-python-fastapi-casbin-auth) - Casbinを用いてRBAC、ReBAC、ABACといったさまざまなアクセス制御モデルをサポートする認可機能。
- [FastAPI Cloud Auth](https://github.com/tokusumi/fastapi-cloudauth) - FastAPIとクラウド認証サービス（AWS Cognito、Auth0、Firebase Authentication）の簡単な統合。
- [FastAPI Login](https://github.com/maxrdu/fastapi_login) - アカウント管理および認証（[Flask-Login](https://github.com/maxcountryman/flask-login)に基づく）
- [FastAPI JWT Auth](https://github.com/IndominusByte/fastapi-jwt-auth) - JWT認証（[Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended)に基づく）
- [FastAPI Permissions](https://github.com/holgi/fastapi-permissions) - 行レベルの権限。
- [FastAPI Security](https://github.com/jacobsvante/fastapi-security) - FastAPIにおいて、認証と認可をデプロイとして実装。
- [FastAPI Simple Security](https://github.com/mrtolkien/fastapi_simple_security) - パス操作で管理可能なAPIキーセキュリティを内蔵。
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) - アカウント管理、認証、認可。
- [FastAPI Zitadel Auth](https://github.com/cleanenergyexchange/fastapi-zitadel-auth) - IAMプラットフォームを用いたOAuth2（[Zitadel](https://github.com/zitadel/zitadel)に基づく）

### サイバーセキュリティ

- [FastAPI Guard](https://github.com/rennf93/fastapi-guard) - リクエスト制限、IPの自動ブロック、パネル攻撃検知、国・IP・クラウドプロバイダーのホワイトリスト／ブラックリスト、ユーザーエージェントフィルタリング、地理位置情報、Redisによる永続化、その他機能。
- [secure](https://github.com/TypeError/secure) - FastAPIアプリでASGIミドルウェアと1つの設定オブジェクトを使用して、HTTPセキュリティヘッダーを一貫して定義および適用。

### データベース

#### ORM

- [Edgy ORM](https://github.com/dymmond/edgy) - 複雑なデータベースをシンプルに。
- [FastAPI SQLAlchemy](https://github.com/mfreeborn/fastapi-sqlalchemy) - FastAPIと[SQLAlchemy](https://www.sqlalchemy.org/)のシンプルな統合
- [Fastapi-SQLA](https://github.com/dialoguemd/fastapi-sqla) - FastAPI用のSQLAlchemy拡張機能で、ページネーション、asyncio、pytestをサポート。
- [FastAPIwee](https://github.com/Ignisor/FastAPIwee) - [PeeWee](https://github.com/coleifer/peewee)モデルに基づくREST APIの簡単な作成方法
- [FastSQLA](https://github.com/hadrien/FastSQLA) - FastAPI用のAsync SQLAlchemy 2.0+拡張機能で、SQLModelをサポートし、内蔵ページネーションなども提供。
- [GINO](https://github.com/python-gino/gino) - Python asyncioに基づいた軽量な非同期ORM（SQLAlchemy coreをベースに構築）。
  - [FastAPI Example](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM](https://github.com/encode/orm) - 非同期のORM
- [ormar](https://collerek.github.io/ormar/) - OrmarはPydanticによるバリデーションを用いた非同期ORMであり、FastAPIのリクエストとレスポンスに直接使用できるため、維持するモデルセットを1つにできる。Alembicのマイグレーションが含まれている。
  - [FastAPI Example](https://collerek.github.io/ormar/latest/fastapi/) - FastAPIとOrmarの組み合わせ
- [Piccolo](https://github.com/piccolo-orm/piccolo) - PostgresおよびSQLiteをサポートする非同期のORMおよびクエリビルダー。バッテリー（マイグレーション、セキュリティなど）が備わっている。
  - [FastAPI Examples](https://github.com/piccolo-orm/piccolo_examples) - FastAPIとPiccoloの組み合わせ
- [Tortoise ORM](https://tortoise.github.io) - Djangoをインスピレーションとして作られた使いやすいasyncio ORM（オブジェクト関係マッパー）
  - [FastAPI Example](https://tortoise.github.io/examples/fastapi.html) - Tortoise-ORMとFastAPIの統合例
  - [Tutorial: Setting up Tortoise ORM with FastAPI](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich](https://github.com/tortoise/aerich) - Tortoise ORMのマイグレーションツール
- [Saffier ORM](https://github.com/tarsil/saffier) - あなたが一生使わなければならない唯一のPython ORM
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel（PydanticとSQLAlchemyをベースにしている）は、PythonコードからSQLデータベースとやり取りするためのライブラリであり、Pythonオブジェクトを使用する。

#### クエリビルダー

- [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - [asyncpg](https://github.com/MagicStack/asyncpg)を[SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/)と使うためのラッパー
- [データベース](https://github.com/encode/databases) - [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/)表現言語に基づく非同期SQLクエリビルダー
- [PyPika](https://github.com/kayak/pypika) - SQLクエリビルダーがSQL言語の全機能を公開

#### ODM

- [Beanie](https://github.com/BeanieODM/beanie) - MongoDB用の非同期Python ODM（[Motor](https://motor.readthedocs.io/en/stable/)および[Pydantic](https://pydantic.dev/docs/)に基づく）で、データおよびスキーマのマイグレーションを本番でサポート
- [MongoEngine](https://github.com/MongoEngine/mongoengine) - MongoDBからPythonで操作するためのドキュメントオブジェクトマッパー（ORMに似ているが、ドキュメントデータベース用）
- [Motor](https://motor.readthedocs.io/) - MongoDB用の非同期Pythonドライバー
- [ODMantic](https://art049.github.io/odmantic/) - AsyncIO MongoDB ODM（[Pydantic](https://pydantic.dev/docs/)と統合）
- [PynamoDB](https://github.com/pynamodb/PynamoDB) - AmazonのDynamoDBへのPython的なインターフェース

#### その他のツール

- [Pydantic-SQLAlchemy](https://github.com/tiangolo/pydantic-sqlalchemy) - SQLAlchemyのモデルを モデルに変換する [Pydantic](https://pydantic.dev/docs/)
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - FastAPIで [Pydantic](https://pydantic.dev/docs/) を利用したCamelCase JSONのサポート
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - データモデルとAPI表現の連携を支援するツールです。
 
### 依存性注入

- [modern-di](https://github.com/modern-python/modern-di) - IoCコンテナおよびスコープを備えたデプロイインジェクションフレームワーク（[FastAPI integration](https://github.com/modern-python/modern-di-fastapi)）
- [Wireup](https://github.com/maldoinc/wireup) - FastAPIで依存性を注入し、実行時オーバヘッドゼロで、Web、CLIなど他のインターフェース間で依存性を共有

### 開発ツール

- [FastAPI Code Generator](https://github.com/koxudaxi/fastapi-code-generator) - OpenAPIファイルからFastAPIアプリを作成し、スキーマ駆動開発を可能にする。
- [FastAPI Client Generator](https://github.com/dmontagu/fastapi_client) - OpenAPI仕様から、mypyおよびIDEに親しみやすいAPIクライアントを生成する。
- [FastAPI Cruddy Framework](https://github.com/mdconaway/fastapi-cruddy-framework) - FastAPIエコシステムにRuby on Rails、Ember.js、Sails.jsの開発生産性をもたらすために設計されたFastAPI用の補助ライブラリ。
- [FastAPI MVC](https://github.com/fastapi-mvc/fastapi-mvc) - 高品質なFastAPIプロダクション用APIを構築するための開発生産性ツール。
- [FastAPI Profiler](https://github.com/sunhailin-Leo/fastapi_profiler) - joerick/pyinstrumentによるFastAPIミドルウェアで、サービスのパフォーマンスを確認する。
- [FastAPI Versioning](https://github.com/DeanWay/fastapi-versioning) - APIバージョニング
- [Jupyter Notebook REST API](https://github.com/Invictify/Jupter-Notebook-REST-API) - JupyterノートブックをRESTフルAPIエンドポイントとして実行
- [Manage FastAPI](https://github.com/ycd/manage-fastapi) - FastAPIプロジェクトの生成と管理用CLIツール
- [msgpack-asgi](https://github.com/florimondmanca/msgpack-asgi) - FastAPIの生成・開発・計測を支援するツールです。 [MessagePack](https://msgpack.org/)
- [python-cqrs](https://github.com/pypatterns/python-cqrs) - イベント駆動アーキテクチャフレームワーク（CQRS、トランザクションアウトボックス、サガオーケストレーション、FastAPI/FastStreamとのシームレス統合）

### メール

- [FastAPI Mail](https://github.com/sabuhish/fastapi-mail) - FastAPIからのメール送信を支援する拡張です。

### ユーティリティ

- [Apitally](https://github.com/apitally/apitally-py) - FastAPI用のAPI分析、監視、リクエストログ
- [ASGI Correlation ID](https://github.com/snok/asgi-correlation-id) - リクエストIDログ中間層
- [FastAPI Cache](https://github.com/comeuplater/fastapi_cache) - シンプルで軽量のキャッシュシステム
- [FastAPI Cache](https://github.com/long2ice/fastapi-cache) - FastAPIのレスポンスおよび関数結果をキャッシュするツール。Redis、Memcached、DynamoDB、メモリバックエンドをサポート。
- [FastAPI Chameleon](https://github.com/mikeckennedy/fastapi-chameleon) - FastAPIにChameleonテンプレート言語の統合を追加
- [FastAPI CloudEvents](https://github.com/sasha-tkachev/fastapi-cloudevents) - FastAPIとの[CloudEvents](https://cloudevents.io/)統合
- [FastAPI Contrib](https://github.com/identixone/fastapi_contrib) - 意見をもつユーティリティセット：ページネーション、認証中間層、権限、カスタム例外ハンドラ、MongoDBサポート、Opentracing中間層
- [FastAPI FastCRUD](https://github.com/benavlabs/fastcrud) - ）- 高度な非同期CRUD操作と柔軟なエンドポイント作成ユーティリティ
- [FastAPI Events](https://github.com/melvinkcx/fastapi-events) - FastAPIおよびStarlette用の非同期イベントディスパッチ／ハンドリングライブラリ
- [FastAPI FeatureFlags](https://github.com/Pytlicek/fastapi-featureflags) - FastAPI用のシンプルな機能フラグ実装
- [FastAPI Injectable](https://github.com/JasperSui/fastapi-injectable) - CLIツール、バックグラウンドタスク、ワーカーなど、ルートハンドラ外でのFastAPIの依存性注入の使用
- [FastAPI Jinja](https://github.com/AGeekInside/fastapi-jinja) - FastAPIにJinjaテンプレート言語の統合を追加
- [FastAPI Lazy](https://github.com/yezz123/fastango) - FastAPIでプロジェクトを開始するための遅延パッケージ
- [FastAPI Limiter](https://github.com/long2ice/fastapi-limiter) - FastAPI用のリクエストレート制限器
- [FastAPI Listing](https://github.com/danielhasan1/fastapi-listing) - コンポーネントベースアーキテクチャを用いたリストAPI設計／構築ライブラリ。組み込みクエリページネーター、ソート、Django-Adminのようなフィルタなども備えている
- [FastAPI MQTT](https://github.com/sabuhish/fastapi-mqtt) - MQTTプロトコル用の拡張
- [FastAPI Opentracing](https://github.com/wesdu/fastapi-opentracing) - FastAPI用のOpentracing中間層およびデータベーストレースサポート
- [FastAPI Pagination](https://github.com/uriyyo/fastapi-pagination) - FastAPI用のページネーション機能
- [FastAPI Plugins](https://github.com/madkote/fastapi-plugins) - Redisおよびスケジューラプラグイン
- [FastAPI ServiceUtils](https://github.com/skallfass/fastapi_serviceutils) - APIサービスを作成するジェネレーター
- [FastAPI Shield](https://github.com/jymchng/fastapi-shield) - 任意の一般エンドポイントデコレーターを生成できる、ラグレ依存性注入を可能にする一般的なFastAPIライブラリ
- [FastAPI SocketIO](https://github.com/pyropy/fastapi-socketio) - FastAPIとSocketIOの簡単な統合
- [FastAPI Utilities](https://github.com/fastapiutils/fastapi-utils) - 再利用可能なユーティリティ：クラスベースビュー、レスポンス推定ルーター、周期タスク、タイムミドルウェア、SQLAlchemyセッション、OpenAPI仕様の簡略化
- [FastAPI Viewsets](https://github.com/svalench/fastapi_viewsets) - FastAPI向けにDjango REST FrameworkをインスピレーションとしたViewSetsを提供し、クラスベースのCRUDエンドポイントの組織化と自動ルート登録を可能にする
- [FastAPI Websocket Pub/Sub](https://github.com/authorizon/fastapi_websocket_pubsub) - ウェブ上およびクラウド間でリアルタイムでアクセスしやすく、スケーラブルに実現できる、伝統的なpub/subパターン
- [FastAPI Websocket RPC](https://github.com/authorizon/fastapi_websocket_rpc) - Websocketsを用いたRPC（両方向JSON RPC）を簡単に、堅牢に、プロダクション対応で実現
- [OpenTelemetry FastAPI Instrumentation](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - ライブラリはFastAPIウェブフレームワークのHTTPリクエストの自動および手動インストルメンテーションを提供し、フレームワークを用いて実行されるアプリケーションのHTTPリクエストをインストルメンテーションする
- [Prerender Python Starlette](https://github.com/BeeMyDesk/prerender-python-starlette) - Prerender用のStarletteミドルウェア
- [Prometheus FastAPI Instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) - FastAPIアプリケーション向けに設定可能でモジュラリティのあるPrometheusインストルメンテーター
- [SlowApi](https://github.com/laurents/slowapi) - レート制限器（[Flask-Limiter](https://flask-limiter.readthedocs.io)に基づく）
- [Starlette Context](https://github.com/tomwojcik/starlette-context) - プロジェクト内のどこでもリクエストデータを保存・アクセスできる、ログ記録に有用な機能
- [Starlette Exporter](https://github.com/stephenhillier/starlette_exporter) - FastAPIおよびStarlette向けのもう一つのPrometheus統合
- [Starlette OpenTracing](https://github.com/acidjunk/starlette-opentracing) - StarletteおよびFastAPI向けのOpenTracingサポート
- [Starlette Prometheus](https://github.com/perdy/starlette-prometheus) - FastAPIおよびStarlette向けのPrometheus統合
- [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry) - データクラスに基づいたPython用GraphQLライブラリ
- [Pydantic Resolve](https://github.com/KLR-Pattern/pydantic-resolve) - resolveおよびpost-processハンドルを導入することで、Pydanticクラスを強力な可合成計算コンテナに変換

## リソース

### 公式リソース

- [Documentation](https://fastapi.tiangolo.com/) - 包括的なドキュメンテーション
- [Tutorial](https://fastapi.tiangolo.com/tutorial/) - 公式チュートリアルで、FastAPIの主な機能をステップバイステップでどのように使用するかを示す
- [Source Code](https://github.com/fastapi/fastapi) - GitHub上でホストされています。
- [Discord](https://discord.com/invite/VQjSZaeJmf) - 他のFastAPIユーザーとチャットできます。

### 外部リソース

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - FastAPIの開発・テスト・運用を扱う外部資料です。

### ポッドキャスト

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - このエピソードの[Podcast Init](https://www.pythonpodcast.com/)では、FastAPIの開発者 [Sebastián Ramirez](https://tiangolo.com/)が、FastAPIを構築した動機と内部仕組みについて語る
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - プロジェクトの良好な概要

### 記事

- [FastAPI has Ruined Flask Forever for Me](https://medium.com/data-science/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - FastAPIの設計・採用事例を扱う記事です。

### チュートリアル

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - SQLAlchemyを非同期で使用する方法を学びます。
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - FastAPI、Postgres、Pytest、Dockerを使ってテスト駆動開発（Test-Driven Development）で非同期APIを開発・テストします。
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - Flaskとの並行コード比較でFastAPIを学びます。
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - より保守性の高いコードベース向けのFastAPIアプリケーションとサービス構造。
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/docs/languages/python/pymongo-driver/current/integrations/fastapi-integration/) - 完全なFastAPIウェブアプリケーションスタックの導入方法を学びます。
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - FastAPIアプリケーションがマルチテナント対応できるようにする方法を学びます。
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - FastAPIからリアルタイムチャートにデータをストリーミングする方法を学びます。
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - Gunicornとsystemdを使って生産環境にデプロイします。
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - FastAPIを使って、Pythonで機械学習モデルをRESTフルAPIとして簡単にデプロイ・サーバーできます。
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - 動画ストリームを提供する方法を学びます。
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - FastAPIにプロパティベースのテストを適用します。

### 講演

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - Sebastian Ramirezの講演から、FastAPIを使ってMLモデルのための生産用ウェブ（JSON）APIを簡単に構築する方法、およびデフォルトでベストプラクティスを適用する方法を学びます。
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - FastAPIを使って、データベースからゼロからシンプルなREST APIを構築する方法を学びます。

### 動画

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - FastAPIを使ってウェブベースの株価スクリーニングアプリケーションを開発する際に、FastAPIの多くの機能（Pydanticモデル、依存性注入、バックグラウンドタスク、SQLAlchemy統合）に触れられます。
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - FastAPIを使ってウェブアプリケーションプログラミングインターフェース（RESTフルAPI）を構築します。
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - FastAPIを使って数値検証を行う方法を学びます。
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - 2020年におけるPython向けフレームワークで、async/awaitを最もよく使っているのはどれ？最も速いのはどれ？
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - FastAPIを使って機械学習APIを構築します。

### コース

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - Python、FastAPI、Dockerを使ってテキスト要約マイクロサービスを構築・テスト・デプロイする方法を学習します。
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/modern-fastapi-apis) - FastAPIを使ってクラウド上で実行されるAPIを作成するためのコースです。
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - FastAPIを使ってフルウェブアプリケーションを構築する方法を学びます。FlaskやDjangoと同等の能力を獲得できます。
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - FastAPIアプリケーションにCeleryを追加して、非同期タスク処理を提供する方法を学びます。

### ベストプラクティス

- [FastAPI Best Practices](https://github.com/zhanymkanov/fastapi-best-practices) - GitHubリポジトリにまとめられたベストプラクティスのコレクション。
- [FastAPI-Dishka-FastStream](https://github.com/faststream-community/fastapi-dishka-faststream) - FastAPI、dishka、faststream、sqlalchemy、pydanticを組み合わせた構成。
- [FastAPI Clean Example](https://github.com/ivan-borovets/fastapi-clean-example) - FastAPIで構築されたクリーンアーキテクチャのバックエンド例。

## ホスティング

### PaaS

（Platform as a Service）

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Fly](https://fly.io) ([tutorial](https://fly.io/docs/python/frameworks/fastapi/), [Deploy from a Git repo](https://github.com/fly-apps/hello-fastapi))
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/) ([Step-by-step tutorial](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/), [ML model on Heroku tutorial](https://testdriven.io/blog/fastapi-machine-learning/))
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

（Infrastructure as a Service）

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### サーバーレス

フレームワーク:

- [Chalice](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - AWS LambdaおよびAPI GatewayでASGIアプリケーションを実行するためのアダプタ
- [Vercel](https://vercel.com/) - （以前はZeit）（[example](https://github.com/Snailedlt/Markdown-Videos)）

コンピュート:

- [AWS Lambda](https://aws.amazon.com/lambda/) ([example](https://github.com/iwpnd/fastapi-aws-lambda-example))
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run) ([example](https://github.com/anthonycorletti/cloudrun-fastapi))

## プロジェクト

### ボイラープレート

- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/fastapi/full-stack-fastapi-template) - FastAPIプロジェクト向けのテンプレート・生成器です。
このテンプレートにはFastAPI、React、SQLModel、PostgreSQL、Docker、GitHub Actions、自動HTTPSなどが含まれます（FastAPI作者の[Sebastián Ramírez](https://github.com/tiangolo)が開発）。
- [FastAPI and Tortoise ORM](https://github.com/prostomarkeloff/fastapi-tortoise) - FastAPI（ウェブフレームワーク）とTortoise-ORM（データベース操作に頭痛なし）を使った、強力でシンプルなウェブAPIテンプレート。
- [FastAPI + SQLAlchemy 2 + PostgreSQL Template](https://github.com/modern-python/fastapi-sqlalchemy-template) - Docker化されたスタートアップテンプレート（依存性注入、Alembicのマイグレーション、justfileワークフローを含む）。
- [FastAPI Model Server Skeleton](https://github.com/eightBEC/fastapi-ml-skeleton) - 機械学習モデルを生産環境で提供できるためのスケルトンアプリ。
- [cookiecutter-spacy-fastapi](https://github.com/microsoft/cookiecutter-spacy-fastapi) - spaCyモデルの迅速なデプロイをFastAPIで実現する方法を学びます。
- [cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) - Machine Learning、Poetry、Azure Pipelines、pytestを使用したFastAPIプロジェクト用のCookiecutterテンプレート。
- [openapi-python-client](https://github.com/openapi-generators/openapi-python-client) - OpenAPIからFastAPIを使って現代的なFastAPI Pythonクライアントを生成します。
- [Pywork](https://github.com/vutran1710/YeomanPywork) - FastAPIプロジェクト向けのテンプレート・生成器です。 [Yeoman](https://yeoman.io/)
- [fastapi-gino-arq-uvicorn](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - Pythonで高パフォーマンスの非同期REST APIテンプレート。FastAPI + GINO + Arq + Uvicorn（RedisとPostgreSQLで動作）。
- [FastAPI and React Template](https://github.com/Buuntu/fastapi-react) - FastAPI、TypeScript、Docker、PostgreSQL、Reactを使ったフルスタックCookiecutterベースライン。
- [FastAPI Nano](https://github.com/rednafi/fastapi-nano) - シンプルなFastAPIテンプレートでファクトリパターンアーキテクチャを実装。
- [FastAPI template](https://github.com/s3rius/FastAPI-template) - 柔軟で軽量なFastAPIプロジェクトジェネレーター。SQLAlchemy、複数データベース、CI/CD、Docker、Kubernetesのサポートを含む。
- [FastAPI on Google Cloud Run](https://github.com/anthonycorletti/cloudrun-fastapi) - FastAPI、SQLModel、Google Cloud Runを使ってAPIを構築するためのベースライン。
- [FastAPI with Firestore](https://github.com/anthonycorletti/firestore-fastapi) - FastAPIとGoogle Cloud Firestoreを使ってAPIを構築するためのベースライン。
- [fastapi-alembic-sqlmodel-async](https://github.com/vargasjona/fastapi-alembic-sqlmodel-async) - FastAPI、Alembic、async SQLModelをORMとして使うプロジェクトテンプレート。
- [fastapi-starter-project](https://github.com/mirzadelic/fastapi-starter-project) - FastAPI、SQLModel、Alembic、Pytest、Docker、GitHub Actions CI を使用するプロジェクトテンプレート。
- [Full Stack FastAPI and MongoDB - Base Project Generator](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - フルスタック、現代的なウェブアプリケーションジェネレーター。FastAPI、MongoDB、Docker、Celery、Reactフロントエンド、自動HTTPSなど、すべてを含む。
- [Uvicorn Poetry FastAPI Project Template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - FastAPIアプリケーションの開始に使えるCookiecutterプロジェクトテンプレート。Dockerコンテナ内でUvicorn ASGIサーバーで動作し、Kubernetes上で実行可能。AMD64およびARM64CPUアーキテクチャをサポート。

### Dockerイメージ

- [inboard](https://github.com/br3ndonland/inboard) - FastAPIアプリケーションを動かし、開発を速く進めるためのDockerイメージ。
- [uvicorn-gunicorn-fastapi-docker](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - Python 3.7および3.6で高パフォーマンスのFastAPIウェブアプリケーションを実行するための、Gunicornで管理されたUvicornのDockerイメージ。パフォーマンス自動調整をサポート。
- [uvicorn-gunicorn-poetry](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - Pythonウェブアプリケーションを実行するための、Gunicornを使用したUvicornワーカーを搭載したDockerイメージ。依存関係の管理および仮想環境の構築にはPoetryを使用。AMD64およびARM64CPUアーキテクチャをサポート。
- [uvicorn-poetry](https://github.com/max-pfeiffer/uvicorn-poetry) - Kubernetes上でPythonウェブアプリケーションを実行するための、Uvicorn ASGIサーバーを搭載したDockerイメージ。依存関係の管理および仮想環境の構築にはPoetryを使用。AMD64およびARM64CPUアーキテクチャをサポート。

### オープンソースプロジェクト

- [Astrobase](https://github.com/anthonycorletti/astrobase) - どこでもシンプルで高速かつ安全にデプロイ可能。
- [Awesome FastAPI Projects](https://github.com/Kludex/awesome-fastapi-projects) - FastAPIを使用するプロジェクトの一覧。
- [Bitcart](https://github.com/bitcart/bitcart) - 販売業者、ユーザー、開発者向けプラットフォーム。簡単なセットアップと使用を提供。
- [Bali](https://github.com/bali-framework/bali) - FastAPIとgRPCをベースにしたクラウドネイティブマイクロサービス開発を簡素化。
- [Bunnybook](https://github.com/pietrobassi/bunnybook) - FastAPI、React+RxJs、Neo4j、PostgreSQL、Redisで構築されたミニマムなソーシャルネットワーク。
- [Coronavirus-tg-api](https://github.com/egbakou/coronavirus-tg-api) - 世界的なコロナウイルス（COVID-19、SARS-CoV-2）の感染拡大を追跡するAPI。
- [Dispatch](https://github.com/Netflix/dispatch) - セキュリティインシデントの管理。
- FastAPI CRUDの例:
  - [非同期版](https://github.com/testdrivenio/fastapi-crud-async)
  - [同期版](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability](https://github.com/Blueswen/fastapi-observability) - Grafana上でOpenTelemetryとOpenMetricsを用いて、FastAPIアプリケーションの観測（トレース、メトリクス、ログ）の3つの柱を観察。
- [FastAPI Websocket Broadcast](https://github.com/kthwaite/fastapi-websocket-broadcast) - Websocket 'broadcast'デモ。
- [FastAPI with Celery, RabbitMQ, and Redis](https://github.com/GregaVrbancic/fastapi-celery) - FastAPIとCelery（RabbitMQによるタスクキュー）、Celeryバックエンド（Redis）、タスク監視（Flower）を用いた最小限の例。
- [FuturamaAPI](https://github.com/koldakov/futuramaapi) - ベストプラクティスに基づいたRESTおよびGraphQLプレインド。WebSockets、SSE、コールバック、秘密メッセージなど、さらに多くの機能を提供。
- [JeffQL](https://github.com/yezz123/JeffQL/) - GraphQLとJWTを用いたシンプルな認証およびログインAPI。
- [JSON-RPC Server](https://github.com/smagafurov/fastapi-jsonrpc) - FastAPIをベースにしたJSON-RPCサーバー。
- [Mailer](https://github.com/rclement/mailer) - 静的ウェブサイト向けのシンプルなメールサービスミクロサービス
- [Markdown-Videos](https://github.com/Snailedlt/Markdown-Videos) - マークダウンコンテンツに埋め込むためのスケール可能なサムネイル生成API
- [Nemo](https://github.com/harshitsinghai77/nemo-backend) - Nemoで生産性を高めよう
- [OPAL (Open Policy Administration Layer)](https://github.com/authorizon/opal) - Open-Policyに上位に実時間で認可更新を提供。FastAPI、Typer、FastAPI WebSocket pub/subで構成
- [OSBot-Fast-API](https://github.com/owasp-sbot/OSBot-Fast-API) - 型安全なFastAPIラッパー。ミドルウェア、HTTPイベントトラッキング、AWS Lambda統合、テストユーティリティ、Type_Safe、Pydantic、データクラス間の自動変換を提供
- [Polar](https://github.com/polarsource/polar) - FastAPI、SQLAlchemy、Alembic、Arqで構築された開発者向けの資金調達および収益化プラットフォーム
- [RealWorld Example App - mongo](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat](https://github.com/leonh/redis-streams-fastapi-chat) - WebSockets、AsyncioおよびFastAPI/Starletteを使用した、Redis Streamsをバックアップしたシンプルなチャットアプリ
- [Sprites as a service](https://github.com/ljvmiranda921/sprites-as-a-service) - セルラーリアルを用いて、あなたの個人用8ビットアバターを生成
- [Slackers](https://github.com/uhavin/slackers) - SlackのWebhook API
- [TermPair](https://github.com/cs01/termpair) - ブラウザからエンドツーエンド暗号化でターミナルを表示・制御
- [Universities](https://github.com/ycd/universities) - 世界中の+9600大学の情報を取得できるAPIサービス

## スポンサー

スポンサーをご覧いただき、このオープンソースプロジェクトをご支援ください:

<a href="https://testdriven.io/courses/tdd-fastapi/?ref=awesome-fastapi" target="_blank" title="Learn to build high-quality web apps with best practices"><img src="images/testdriven.svg"></a>
