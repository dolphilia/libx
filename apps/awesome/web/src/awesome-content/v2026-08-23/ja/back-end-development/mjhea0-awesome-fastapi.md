---
title: "Awesome FastAPI"
description: "FastAPIの拡張、学習資料、ホスティングサービス、プロジェクトのひな形、アプリの実例。"
licenseSource: "github-mjhea0-awesome-fastapi-readme-md"
toc:
  maxLevel: 4
---

# Awesome FastAPI

FastAPIはRESTful APIを構築するためのPythonのWebフレームワークです。管理画面、認証・認可、データベース、開発用の拡張に加え、学習資料、ホスティングサービス、プロジェクトのひな形を探せます。

## サードパーティ拡張

### 管理画面

- [FastAPI Admin](https://github.com/fastapi-admin/fastapi-admin) - データのCRUD操作を行うためのUIを備える管理パネル。このスナップショットではTortoise ORMのみに対応
- [FastAPI Amis Admin](https://github.com/amisadmin/fastapi-amis-admin) - 高性能で効率的かつ拡張性の高いFastAPI用の管理フレームワーク
- [Piccolo Admin](https://github.com/piccolo-orm/piccolo_admin) - Piccolo ORMを使った管理GUI
- [SQLAlchemy Admin](https://github.com/smithyhq/sqladmin) - FastAPI/StarletteとSQLAlchemyモデルを連携できる管理パネル
- [Starlette Admin](https://github.com/jowilf/starlette-admin) - FastAPI/Starlette用の管理フレームワークで、SQLAlchemy、SQLModel、MongoDB、ODManticをサポート

### 認証

- [AuthX](https://github.com/yezz123/AuthX) - FastAPI向けのカスタマイズ可能な認証とOAuth2管理
- [FastAPI Auth](https://github.com/dmontagu/fastapi-auth) - JWTのアクセス・リフレッシュトークンを使うOAuth2パスワードフローに対応する、差し替え可能な認証機能
- [FastAPI Azure Auth](https://github.com/Intility/fastapi-azure-auth) - Azure ADによるAPI認証で、シングルおよびマルチテナントをサポート
- [FastAPI Casbin Auth](https://github.com/apache/casbin-python-fastapi-casbin-auth) - Casbinを用いてRBAC、ReBAC、ABACといったさまざまなアクセス制御モデルをサポートする認可機能
- [FastAPI Cloud Auth](https://github.com/tokusumi/fastapi-cloudauth) - FastAPIとクラウド認証サービス（AWS Cognito、Auth0、Firebase Authentication）の簡単な統合
- [FastAPI Login](https://github.com/maxrdu/fastapi_login) - アカウント管理および認証（[Flask-Login](https://github.com/maxcountryman/flask-login)に基づく）
- [FastAPI JWT Auth](https://github.com/IndominusByte/fastapi-jwt-auth) - JWT認証（[Flask-JWT-Extended](https://github.com/vimalloc/flask-jwt-extended)に基づく）
- [FastAPI Permissions](https://github.com/holgi/fastapi-permissions) - 行レベルの権限
- [FastAPI Security](https://github.com/jacobsvante/fastapi-security) - FastAPIにおいて、認証と認可を依存性として実装
- [FastAPI Simple Security](https://github.com/mrtolkien/fastapi_simple_security) - パス操作で管理可能なAPIキーセキュリティを内蔵
- [FastAPI Users](https://github.com/fastapi-users/fastapi-users) - アカウント管理、認証、認可
- [FastAPI Zitadel Auth](https://github.com/cleanenergyexchange/fastapi-zitadel-auth) - IAMプラットフォームを用いたOAuth2（[Zitadel](https://github.com/zitadel/zitadel)に基づく）

### サイバーセキュリティ

- [FastAPI Guard](https://github.com/rennf93/fastapi-guard) - レート制限、IPの自動ブロック、侵入攻撃検知、国・IP・クラウドプロバイダーのホワイトリスト／ブラックリスト、ユーザーエージェントフィルタリング、地理位置情報、Redisによる永続化、その他機能
- [secure](https://github.com/TypeError/secure) - FastAPIアプリでASGIミドルウェアと1つの設定オブジェクトを使用して、HTTPセキュリティヘッダーを一貫して定義および適用

### データベース

#### ORM

- [Edgy ORM](https://github.com/dymmond/edgy) - 複雑なデータベース向けのORM
- [FastAPI SQLAlchemy](https://github.com/mfreeborn/fastapi-sqlalchemy) - FastAPIと[SQLAlchemy](https://www.sqlalchemy.org/)のシンプルな統合
- [Fastapi-SQLA](https://github.com/dialoguemd/fastapi-sqla) - FastAPI用のSQLAlchemy拡張機能で、ページネーション、asyncio、pytestをサポート
- [FastAPIwee](https://github.com/Ignisor/FastAPIwee) - [PeeWee](https://github.com/coleifer/peewee)モデルに基づくREST APIの簡単な作成方法
- [FastSQLA](https://github.com/hadrien/FastSQLA) - FastAPI用のAsync SQLAlchemy 2.0+拡張機能で、SQLModelをサポートし、内蔵ページネーションなども提供
- [GINO](https://github.com/python-gino/gino) - Python asyncioに基づいた軽量な非同期ORM（SQLAlchemy coreをベースに構築）
  - [FastAPIの例](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM](https://github.com/encode/orm) - 非同期のORM
- [ormar](https://collerek.github.io/ormar/) - OrmarはPydanticによるバリデーションを用いた非同期ORMであり、FastAPIのリクエストとレスポンスに直接使用できるため、維持するモデルセットを1つにできる。Alembicのマイグレーションが含まれている
  - [FastAPIの例](https://collerek.github.io/ormar/latest/fastapi/) - FastAPIとOrmarの組み合わせ
- [Piccolo](https://github.com/piccolo-orm/piccolo) - PostgresおよびSQLiteをサポートする非同期のORMおよびクエリビルダー。マイグレーションやセキュリティなどの機能を内蔵
  - [FastAPIの例](https://github.com/piccolo-orm/piccolo_examples) - FastAPIとPiccoloの組み合わせ
- [Tortoise ORM](https://tortoise.github.io) - Djangoをインスピレーションとして作られた使いやすいasyncio ORM（オブジェクト関係マッパー）
  - [FastAPIの例](https://tortoise.github.io/examples/fastapi.html) - Tortoise-ORMとFastAPIの統合例
  - [チュートリアル：FastAPIとTortoise ORMの設定](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich](https://github.com/tortoise/aerich) - Tortoise ORMのマイグレーションツール
- [Saffier ORM](https://github.com/tarsil/saffier) - Python用ORM
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel（PydanticとSQLAlchemyをベースにしている）は、PythonコードからSQLデータベースとやり取りするためのライブラリであり、Pythonオブジェクトを使用する

#### クエリビルダー

- [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - [asyncpg](https://github.com/MagicStack/asyncpg)を[SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/)と使うためのラッパー
- [Databases](https://github.com/encode/databases) - [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/)表現言語に基づく非同期SQLクエリビルダー
- [PyPika](https://github.com/kayak/pypika) - SQL言語の幅広い機能を扱えるSQLクエリビルダー

#### ODM

- [Beanie](https://github.com/BeanieODM/beanie) - MongoDB用の非同期Python ODM（[Motor](https://motor.readthedocs.io/en/stable/)および[Pydantic](https://pydantic.dev/docs/)に基づく）で、データとスキーマのマイグレーション機能を標準で提供
- [MongoEngine](https://github.com/MongoEngine/mongoengine) - MongoDBからPythonで操作するためのドキュメントオブジェクトマッパー（ORMに似ているが、ドキュメントデータベース用）
- [Motor](https://motor.readthedocs.io/) - MongoDB用の非同期Pythonドライバー
- [ODMantic](https://art049.github.io/odmantic/) - AsyncIO MongoDB ODM（[Pydantic](https://pydantic.dev/docs/)と統合）
- [PynamoDB](https://github.com/pynamodb/PynamoDB) - AmazonのDynamoDBへのPython的なインターフェース

#### その他のツール

- [Pydantic-SQLAlchemy](https://github.com/tiangolo/pydantic-sqlalchemy) - SQLAlchemyモデルを[Pydantic](https://pydantic.dev/docs/)モデルへ変換
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - FastAPIで [Pydantic](https://pydantic.dev/docs/) を利用したCamelCase JSONのサポート
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - この拡張の作者による解説記事
 
### 依存性注入

- [modern-di](https://github.com/modern-python/modern-di) - IoCコンテナとスコープを備えた依存性注入フレームワーク（[FastAPI統合](https://github.com/modern-python/modern-di-fastapi)）
- [Wireup](https://github.com/maldoinc/wireup) - FastAPIで依存性を注入し、実行時オーバヘッドゼロで、Web、CLIなど他のインターフェース間で依存性を共有

### 開発ツール

- [FastAPI Code Generator](https://github.com/koxudaxi/fastapi-code-generator) - OpenAPIファイルからFastAPIアプリを作成し、スキーマ駆動開発を可能にする
- [FastAPI Client Generator](https://github.com/dmontagu/fastapi_client) - OpenAPI仕様から、mypyやIDEで扱いやすいAPIクライアントを生成する
- [FastAPI Cruddy Framework](https://github.com/mdconaway/fastapi-cruddy-framework) - FastAPIエコシステムにRuby on Rails、Ember.js、Sails.jsの開発生産性をもたらすために設計されたFastAPI用の補助ライブラリ
- [FastAPI MVC](https://github.com/fastapi-mvc/fastapi-mvc) - 高品質なFastAPI本番用APIを構築するための開発生産性ツール
- [FastAPI Profiler](https://github.com/sunhailin-Leo/fastapi_profiler) - joerick/pyinstrumentによるFastAPIミドルウェアで、サービスのパフォーマンスを確認する
- [FastAPI Versioning](https://github.com/DeanWay/fastapi-versioning) - APIバージョニング
- [Jupyter Notebook REST API](https://github.com/Invictify/Jupter-Notebook-REST-API) - JupyterノートブックをRESTful APIエンドポイントとして実行
- [Manage FastAPI](https://github.com/ycd/manage-fastapi) - FastAPIプロジェクトの生成と管理用CLIツール
- [msgpack-asgi](https://github.com/florimondmanca/msgpack-asgi) - [MessagePack](https://msgpack.org/)の自動コンテントネゴシエーション
- [python-cqrs](https://github.com/pypatterns/python-cqrs) - イベント駆動アーキテクチャフレームワーク（CQRS、トランザクションアウトボックス、サガオーケストレーション、FastAPI/FastStream統合）

### メール

- [FastAPI Mail](https://github.com/sabuhish/fastapi-mail) - メールと添付ファイルを個別または一括送信する軽量なメールシステム

### ユーティリティ

- [Apitally](https://github.com/apitally/apitally-py) - FastAPI用のAPI分析、監視、リクエストログ
- [ASGI Correlation ID](https://github.com/snok/asgi-correlation-id) - リクエストIDをログに記録するミドルウェア
- [FastAPI Cache](https://github.com/comeuplater/fastapi_cache) - シンプルで軽量のキャッシュシステム
- [FastAPI Cache](https://github.com/long2ice/fastapi-cache) - FastAPIのレスポンスおよび関数結果をキャッシュするツール。Redis、Memcached、DynamoDB、メモリバックエンドをサポート
- [FastAPI Chameleon](https://github.com/mikeckennedy/fastapi-chameleon) - FastAPIにChameleonテンプレート言語の統合を追加
- [FastAPI CloudEvents](https://github.com/sasha-tkachev/fastapi-cloudevents) - FastAPIとの[CloudEvents](https://cloudevents.io/)統合
- [FastAPI Contrib](https://github.com/identixone/fastapi_contrib) - 特定の設計方針を持つユーティリティ集：ページネーション、認証ミドルウェア、権限、カスタム例外ハンドラ、MongoDBサポート、Opentracingミドルウェア
- [FastAPI FastCRUD](https://github.com/benavlabs/fastcrud) - 堅牢な非同期CRUD操作と柔軟なエンドポイント作成ユーティリティ
- [FastAPI Events](https://github.com/melvinkcx/fastapi-events) - FastAPIおよびStarlette用の非同期イベントディスパッチ／ハンドリングライブラリ
- [FastAPI FeatureFlags](https://github.com/Pytlicek/fastapi-featureflags) - FastAPI用のシンプルな機能フラグ実装
- [FastAPI Injectable](https://github.com/JasperSui/fastapi-injectable) - CLIツール、バックグラウンドタスク、ワーカーなど、ルートハンドラ外でのFastAPIの依存性注入の使用
- [FastAPI Jinja](https://github.com/AGeekInside/fastapi-jinja) - FastAPIにJinjaテンプレート言語の統合を追加
- [FastAPI Lazy](https://github.com/yezz123/fastango) - FastAPIでプロジェクトを始めるためのパッケージ
- [FastAPI Limiter](https://github.com/long2ice/fastapi-limiter) - FastAPI用のリクエストレート制限器
- [FastAPI Listing](https://github.com/danielhasan1/fastapi-listing) - コンポーネントベースアーキテクチャを用いたリストAPI設計／構築ライブラリ。組み込みクエリページネーター、ソート、Django-Adminのようなフィルタなども備えている
- [FastAPI MQTT](https://github.com/sabuhish/fastapi-mqtt) - MQTTプロトコル用の拡張
- [FastAPI Opentracing](https://github.com/wesdu/fastapi-opentracing) - FastAPI用のOpentracingミドルウェアおよびデータベーストレースサポート
- [FastAPI Pagination](https://github.com/uriyyo/fastapi-pagination) - FastAPI用のページネーション機能
- [FastAPI Plugins](https://github.com/madkote/fastapi-plugins) - Redisおよびスケジューラプラグイン
- [FastAPI ServiceUtils](https://github.com/skallfass/fastapi_serviceutils) - APIサービスを作成するジェネレーター
- [FastAPI Shield](https://github.com/jymchng/fastapi-shield) - 遅延依存性注入に対応する汎用エンドポイントデコレーターを書くためのFastAPIライブラリ
- [FastAPI SocketIO](https://github.com/pyropy/fastapi-socketio) - FastAPIとSocketIOの簡単な統合
- [FastAPI Utilities](https://github.com/fastapiutils/fastapi-utils) - 再利用可能なユーティリティ：クラスベースビュー、レスポンス推定ルーター、周期タスク、実行時間計測ミドルウェア、SQLAlchemyセッション、OpenAPI仕様の簡略化
- [FastAPI Viewsets](https://github.com/svalench/fastapi_viewsets) - FastAPI向けにDjango REST FrameworkをインスピレーションとしたViewSetsを提供し、クラスベースのCRUDエンドポイントの組織化と自動ルート登録を可能にする
- [FastAPI Websocket Pub/Sub](https://github.com/authorizon/fastapi_websocket_pubsub) - ウェブ上およびクラウド間でリアルタイムでアクセスしやすく、スケーラブルに実現できる、伝統的なpub/subパターン
- [FastAPI Websocket RPC](https://github.com/authorizon/fastapi_websocket_rpc) - Websocketsを用いたRPC（両方向JSON RPC）を簡単に、堅牢に、本番対応で実現
- [OpenTelemetry FastAPI Instrumentation](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - FastAPIアプリが処理するHTTPリクエストの自動・手動計装を提供するライブラリ
- [Prerender Python Starlette](https://github.com/BeeMyDesk/prerender-python-starlette) - Prerender用のStarletteミドルウェア
- [Prometheus FastAPI Instrumentator](https://github.com/trallnag/prometheus-fastapi-instrumentator) - FastAPIアプリケーション向けに設定可能でモジュール構成のPrometheusインストルメンテーター
- [SlowApi](https://github.com/laurents/slowapi) - レート制限器（[Flask-Limiter](https://flask-limiter.readthedocs.io)に基づく）
- [Starlette Context](https://github.com/tomwojcik/starlette-context) - プロジェクト内のどこでもリクエストデータを保存・アクセスできる、ログ記録に有用な機能
- [Starlette Exporter](https://github.com/stephenhillier/starlette_exporter) - FastAPIおよびStarlette向けのもう一つのPrometheus統合
- [Starlette OpenTracing](https://github.com/acidjunk/starlette-opentracing) - StarletteおよびFastAPI向けのOpenTracingサポート
- [Starlette Prometheus](https://github.com/perdy/starlette-prometheus) - FastAPIおよびStarlette向けのPrometheus統合
- [Strawberry GraphQL](https://github.com/strawberry-graphql/strawberry) - データクラスに基づいたPython用GraphQLライブラリ
- [Pydantic Resolve](https://github.com/KLR-Pattern/pydantic-resolve) - resolveとpost-process（後処理）のフックを導入し、Pydanticクラスを組み合わせ可能な計算コンテナへ変換

## リソース

### 公式リソース

- [ドキュメント](https://fastapi.tiangolo.com/) - 包括的なドキュメンテーション
- [チュートリアル](https://fastapi.tiangolo.com/tutorial/) - 公式チュートリアルで、FastAPIの主な機能をステップバイステップでどのように使用するかを示す
- [ソースコード](https://github.com/fastapi/fastapi) - GitHubで公開
- [Discord](https://discord.com/invite/VQjSZaeJmf) - ほかのFastAPIユーザーと交流するチャット

### 外部リソース

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - 本番用RESTful APIの開発・テスト、機械学習モデルの提供などを扱うFastAPIの記事

### ポッドキャスト

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - このエピソードの[Podcast Init](https://www.pythonpodcast.com/)では、FastAPIの開発者 [Sebastián Ramirez](https://tiangolo.com/)が、FastAPIを構築した動機と内部仕組みについて語る
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - プロジェクトの概要

### 記事

- [FastAPI has Ruined Flask Forever for Me](https://medium.com/data-science/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - FlaskからFastAPIへの移行を検討する理由を詳しく解説

### チュートリアル

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - SQLAlchemyを非同期で使用する方法を学ぶ資料
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - FastAPI、Postgres、Pytest、Dockerを使ってテスト駆動開発（Test-Driven Development）で非同期APIを開発・テストする資料
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - Flaskのコードと並べて比較しながらFastAPIを学ぶ資料
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - より保守性の高いコードベース向けのFastAPIアプリケーションとサービス構造
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/docs/languages/python/pymongo-driver/current/integrations/fastapi-integration/) - 完全なFastAPIウェブアプリケーションスタックの導入方法を学ぶ資料
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - FastAPIアプリケーションがマルチテナント対応できるようにする方法を学ぶ資料
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - FastAPIからリアルタイムチャートにデータをストリーミングする方法を学ぶ資料
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - Gunicornとsystemdを使って本番環境にデプロイする資料
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - FastAPIを使って、Pythonで機械学習モデルをRESTful APIとして簡単にデプロイして提供する方法
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - 動画ストリームを提供する方法を学ぶ資料
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - FastAPIにプロパティベースのテストを適用する資料

### 講演

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - Sebastian Ramirezの講演から、FastAPIを使ってMLモデルのための本番用ウェブ（JSON）APIを簡単に構築する方法、およびデフォルトでベストプラクティスを適用する方法を学ぶ資料
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - FastAPIを使って、データベース用のシンプルなREST APIを一から構築する方法を紹介

### 動画

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - FastAPIを使ってウェブベースの株価スクリーニングアプリケーションを開発する際に、FastAPIの多くの機能（Pydanticモデル、依存性注入、バックグラウンドタスク、SQLAlchemy統合）を紹介
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - FastAPIを使ってWeb API（RESTful API）を構築する動画
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - FastAPIを使って数値検証を行う方法を学ぶ資料
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - 2020年におけるPython向けフレームワークで、async/awaitを最もよく使っているのはどれ？最も速いのはどれ？
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - FastAPIを使って機械学習APIを構築する動画

### コース

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - Python、FastAPI、Dockerを使ってテキスト要約マイクロサービスを構築・テスト・デプロイする方法を学ぶ講座
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/modern-fastapi-apis) - FastAPIを使ってクラウド上で実行されるAPIを作成するための講座
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - FlaskやDjangoで実現できるのと同等のWebアプリをFastAPIで構築する講座
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - FastAPIアプリケーションにCeleryを追加して、非同期タスク処理を提供する方法を学ぶ資料

### ベストプラクティス

- [FastAPI Best Practices](https://github.com/zhanymkanov/fastapi-best-practices) - GitHubリポジトリにまとめられたベストプラクティスのコレクション
- [FastAPI-Dishka-FastStream](https://github.com/faststream-community/fastapi-dishka-faststream) - FastAPI、dishka、faststream、sqlalchemy、pydanticを組み合わせた構成
- [FastAPI Clean Example](https://github.com/ivan-borovets/fastapi-clean-example) - FastAPIで構築されたクリーンアーキテクチャのバックエンド例

## ホスティング

### PaaS

（サービスとして提供されるプラットフォーム）

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Fly](https://fly.io) ([チュートリアル](https://fly.io/docs/python/frameworks/fastapi/), [Gitリポジトリからのデプロイ](https://github.com/fly-apps/hello-fastapi))
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/) ([手順を追うチュートリアル](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/), [Heroku上の機械学習モデルのチュートリアル](https://testdriven.io/blog/fastapi-machine-learning/))
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

（サービスとして提供されるインフラストラクチャ）

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### サーバーレス

フレームワーク:

- [Chalice](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - AWS LambdaおよびAPI GatewayでASGIアプリケーションを実行するためのアダプタ
- [Vercel](https://vercel.com/) - （以前はZeit）（[例](https://github.com/Snailedlt/Markdown-Videos)）

コンピュート:

- [AWS Lambda](https://aws.amazon.com/lambda/) ([例](https://github.com/iwpnd/fastapi-aws-lambda-example))
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run) ([例](https://github.com/anthonycorletti/cloudrun-fastapi))

## プロジェクト

### ボイラープレート

- [Full Stack FastAPI and PostgreSQL - Base Project Generator](https://github.com/fastapi/full-stack-fastapi-template) - フルスタックFastAPIテンプレート。FastAPI、React、SQLModel、PostgreSQL、Docker、GitHub Actions、自動HTTPSなどを含む（FastAPI作者の[Sebastián Ramírez](https://github.com/tiangolo)が開発）
- [FastAPI and Tortoise ORM](https://github.com/prostomarkeloff/fastapi-tortoise) - FastAPIをWebフレームワーク、Tortoise ORMをデータベース操作に使うWeb APIテンプレート
- [FastAPI + SQLAlchemy 2 + PostgreSQL Template](https://github.com/modern-python/fastapi-sqlalchemy-template) - Docker化されたスタートアップテンプレート（modern-diによる依存性注入、Alembicのマイグレーション、justfileワークフローを含む）
- [FastAPI Model Server Skeleton](https://github.com/eightBEC/fastapi-ml-skeleton) - 本番環境で機械学習モデルを提供するためのスケルトンアプリ
- [cookiecutter-spacy-fastapi](https://github.com/microsoft/cookiecutter-spacy-fastapi) - FastAPIでspaCyモデルを素早くデプロイするテンプレート
- [cookiecutter-fastapi](https://github.com/arthurhenrique/cookiecutter-fastapi) - 機械学習、Poetry、Azure Pipelines、pytestを使用したFastAPIプロジェクト用のCookiecutterテンプレート
- [openapi-python-client](https://github.com/openapi-generators/openapi-python-client) - OpenAPIからFastAPIを使って現代的なFastAPI Pythonクライアントを生成
- [Pywork](https://github.com/vutran1710/YeomanPywork) - FastAPIアプリのひな形を作る[Yeoman](https://yeoman.io/)ジェネレーター
- [fastapi-gino-arq-uvicorn](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - Pythonで高パフォーマンスの非同期REST APIテンプレート。FastAPI + GINO + Arq + Uvicorn（RedisとPostgreSQLで動作）
- [FastAPI and React Template](https://github.com/Buuntu/fastapi-react) - FastAPI、TypeScript、Docker、PostgreSQL、Reactを使ったフルスタックCookiecutterのひな形
- [FastAPI Nano](https://github.com/rednafi/fastapi-nano) - シンプルなFastAPIテンプレートでファクトリパターンアーキテクチャを実装
- [FastAPI template](https://github.com/s3rius/FastAPI-template) - 柔軟で軽量なFastAPIプロジェクトジェネレーター。SQLAlchemy、複数データベース、CI/CD、Docker、Kubernetesのサポートを含む
- [FastAPI on Google Cloud Run](https://github.com/anthonycorletti/cloudrun-fastapi) - FastAPI、SQLModel、Google Cloud Runを使ってAPIを構築するためのひな形
- [FastAPI with Firestore](https://github.com/anthonycorletti/firestore-fastapi) - FastAPIとGoogle Cloud Firestoreを使ってAPIを構築するためのひな形
- [fastapi-alembic-sqlmodel-async](https://github.com/vargasjona/fastapi-alembic-sqlmodel-async) - FastAPI、Alembic、async SQLModelをORMとして使うプロジェクトテンプレート
- [fastapi-starter-project](https://github.com/mirzadelic/fastapi-starter-project) - FastAPI、SQLModel、Alembic、Pytest、Docker、GitHub Actions CI を使用するプロジェクトテンプレート
- [Full Stack FastAPI and MongoDB - Base Project Generator](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - フルスタック、現代的なウェブアプリケーションジェネレーター。FastAPI、MongoDB、Docker、Celery、Reactフロントエンド、自動HTTPSなどを含む
- [Uvicorn Poetry FastAPI Project Template](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - FastAPIアプリケーションの開始に使えるCookiecutterプロジェクトテンプレート。Dockerコンテナ内でUvicorn ASGIサーバーで動作し、Kubernetes上で実行可能。AMD64およびARM64CPUアーキテクチャをサポート

### Dockerイメージ

- [inboard](https://github.com/br3ndonland/inboard) - FastAPIアプリ用のDockerイメージ
- [uvicorn-gunicorn-fastapi-docker](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - Python 3.7および3.6で高パフォーマンスのFastAPIウェブアプリケーションを実行するための、Gunicornで管理されたUvicornのDockerイメージ。パフォーマンス自動調整をサポート
- [uvicorn-gunicorn-poetry](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - Pythonウェブアプリケーションを実行するための、GunicornがUvicornワーカーを使うDockerイメージ。依存関係の管理および仮想環境の構築にはPoetryを使用。AMD64およびARM64CPUアーキテクチャをサポート
- [uvicorn-poetry](https://github.com/max-pfeiffer/uvicorn-poetry) - Kubernetes上でPythonウェブアプリケーションを実行するための、Uvicorn ASGIサーバーを搭載したDockerイメージ。依存関係の管理および仮想環境の構築にはPoetryを使用。AMD64およびARM64CPUアーキテクチャをサポート

### オープンソースプロジェクト

- [Astrobase](https://github.com/anthonycorletti/astrobase) - デプロイ用ツール
- [Awesome FastAPI Projects](https://github.com/Kludex/awesome-fastapi-projects) - FastAPIを使用するプロジェクトの一覧
- [Bitcart](https://github.com/bitcart/bitcart) - 販売業者、ユーザー、開発者向けプラットフォーム。簡単なセットアップと使用を提供
- [Bali](https://github.com/bali-framework/bali) - FastAPIとgRPCをベースにしたクラウドネイティブマイクロサービス開発を簡素化
- [Bunnybook](https://github.com/pietrobassi/bunnybook) - FastAPI、React+RxJs、Neo4j、PostgreSQL、Redisで構築された小規模なソーシャルネットワーク
- [Coronavirus-tg-api](https://github.com/egbakou/coronavirus-tg-api) - 世界的なコロナウイルス（COVID-19、SARS-CoV-2）の感染拡大を追跡するAPI
- [Dispatch](https://github.com/Netflix/dispatch) - セキュリティインシデントの管理
- FastAPI CRUDの例:
  - [非同期版](https://github.com/testdrivenio/fastapi-crud-async)
  - [同期版](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability](https://github.com/Blueswen/fastapi-observability) - OpenTelemetryとOpenMetricsを用いて、Grafana上でFastAPIアプリのトレース（Tempo）、メトリクス（Prometheus）、ログ（Loki）を観測
- [FastAPI Websocket Broadcast](https://github.com/kthwaite/fastapi-websocket-broadcast) - Websocket 'broadcast'デモ
- [FastAPI with Celery, RabbitMQ, and Redis](https://github.com/GregaVrbancic/fastapi-celery) - FastAPIとCelery（RabbitMQによるタスクキュー）、Celeryバックエンド（Redis）、タスク監視（Flower）を用いた最小限の例
- [FuturamaAPI](https://github.com/koldakov/futuramaapi) - RESTとGraphQLを試せる環境。WebSockets、SSE、コールバック、秘密メッセージなど、さらに多くの機能を提供
- [JeffQL](https://github.com/yezz123/JeffQL/) - GraphQLとJWTを用いたシンプルな認証およびログインAPI
- [JSON-RPC Server](https://github.com/smagafurov/fastapi-jsonrpc) - FastAPIをベースにしたJSON-RPCサーバー
- [Mailer](https://github.com/rclement/mailer) - 静的Webサイト向けのシンプルなメール送信マイクロサービス
- [Markdown-Videos](https://github.com/Snailedlt/Markdown-Videos) - Markdownコンテンツに埋め込むサムネイルを生成するAPI
- [Nemo](https://github.com/harshitsinghai77/nemo-backend)
- [OPAL (Open Policy Administration Layer)](https://github.com/authorizon/opal) - Open-Policy上でリアルタイムの認可更新を提供。FastAPI、Typer、FastAPI WebSocket pub/subで構成
- [OSBot-Fast-API](https://github.com/owasp-sbot/OSBot-Fast-API) - 型安全なFastAPIラッパー。ミドルウェア、HTTPイベントトラッキング、AWS Lambda統合、テストユーティリティ、Type_Safe、Pydantic、データクラス間の自動変換を提供
- [Polar](https://github.com/polarsource/polar) - FastAPI、SQLAlchemy、Alembic、Arqで構築された開発者向けの資金調達および収益化プラットフォーム
- [RealWorld Example App - mongo](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat](https://github.com/leonh/redis-streams-fastapi-chat) - WebSockets、AsyncioおよびFastAPI/Starletteを使用した、Redis Streamsを基盤にしたシンプルなチャットアプリ
- [Sprites as a service](https://github.com/ljvmiranda921/sprites-as-a-service) - セル・オートマトンで個人用8ビットアバターを生成
- [Slackers](https://github.com/uhavin/slackers) - SlackのWebhook API
- [TermPair](https://github.com/cs01/termpair) - ブラウザからエンドツーエンド暗号化でターミナルを表示・制御
- [Universities](https://github.com/ycd/universities) - 世界中の9,600校以上の大学の情報を取得できるAPIサービス
