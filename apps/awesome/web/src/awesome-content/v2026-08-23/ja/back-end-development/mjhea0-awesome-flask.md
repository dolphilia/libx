---
title: "Awesome Flask"
description: "Flaskの拡張機能、学習資料、ホスティング、プロジェクトの雛形、オープンソースアプリケーション。"
licenseSource: "github-mjhea0-awesome-flask-readme-md"
toc:
  maxLevel: 4
---

# Awesome Flask

[Flask](https://flask.palletsprojects.com/)は、Pythonで書かれた軽量なWSGIウェブアプリケーションフレームワークです。API、認証、データベース、開発向けのサードパーティー拡張に加え、学習資料、コミュニティ、ホスティング、プロジェクトの雛形、オープンソースアプリケーションを探せます。

## サードパーティー拡張 <a id="third-party-extensions"></a>

### 管理 <a id="admin"></a>

- [Flask-Admin](https://github.com/pallets-eco/flask-admin) - モデルに基づくデータ管理のユーザーインターフェースを備えた管理パネル

### API <a id="apis"></a>

#### RESTful APIサポート <a id="restful-api-support"></a><a id="restful-api-サポート"></a>

- [Eve](https://docs.python-eve.org) - RESTful APIフレームワーク
- [Flask-Classful](https://flask-classful.readthedocs.io/) - RESTful APIのルートエンドポイントを設定するクラスベースビューをサポート
- [Flask-MongoRest](https://github.com/closeio/flask-mongorest) - [MongoEngine](https://github.com/MongoEngine/mongoengine)を基盤とするRESTful APIフレームワーク
- [Flask-RESTful](https://flask-restful.readthedocs.io) - RESTful APIを構築

#### RESTful APIとSwagger/OpenAPIドキュメントのサポート <a id="restful-api--swaggeropenapi-documentation-support"></a><a id="restful-api--swaggeropenapi-ドキュメントサポート"></a>

- [APIFlask](https://github.com/apiflask/apiflask) - marshmallowによる検証・シリアライズと、Swagger UI付きのOpenAPI生成を統合
- [Connexion](https://connexion.readthedocs.io) - Flask上に構築された、OpenAPIベースのオープンソースRESTフレームワーク
- [Flasgger](https://github.com/flasgger/flasgger) - OpenAPIとSwagger UIをサポート。Flasggerモデル、marshmallowモデル、辞書、YAMLファイルからAPIを構築
- [Flask-Rebar](https://github.com/plangrid/flask-rebar) - Flask、[marshmallow](https://marshmallow.readthedocs.io/)、[OpenAPI](https://www.openapis.org/)を組み合わせてRESTサービスを構築
- [Flask-RESTX](https://flask-restx.readthedocs.io) - FlaskでRESTful APIを構築し、ドキュメントを作成するための[Flask-RESTPlus](https://flask-restplus.readthedocs.io/)のコミュニティ主導フォーク
- [flask-smorest](https://github.com/marshmallow-code/flask-smorest/) - marshmallowの公式Flask REST統合。marshmallowモデルでリクエスト・レスポンスの検証とシリアライズを行い、Swagger UI付きのOpenAPIを生成

#### Swagger/OpenAPIドキュメントのサポート <a id="swaggeropenapi-documentation-support"></a><a id="swaggeropenapi-ドキュメントサポート"></a>

- [SAFRS: Python OpenAPI & JSON:API Framework](https://github.com/thomaxxl/safrs) - *S*ql*A*lchemy *F*lask-*R*estful *S*waggerの略。SQLAlchemyのデータベースオブジェクトとその関係から、自己記述型JSON APIを作成するためのフレームワーク

### 認証・認可 <a id="auth"></a><a id="認証"></a>

#### 基本認証とセッションベース認証（HTMLエンドポイント向け） <a id="basic-auth-and-session-based-for-html-endpoints"></a><a id="基本認証とセッションベースhtml-エンドポイント向け"></a>

- [Flask-HTTPAuth](https://flask-httpauth.readthedocs.io) - 認証機能
- [Flask-Login](https://flask-login.readthedocs.io/) - アカウント管理と認証
- [Flask Principal](https://pythonhosted.org/Flask-Principal/) - 認可機能
- [Flask-Security-Too](https://flask-security-too.readthedocs.io/en/stable/) - アカウント管理・認証・認可
- [Flask-Session](https://flasksession.readthedocs.io/en/latest/) - セッション管理
- [Flask-SimpleLogin](https://github.com/flask-extensions/Flask-SimpleLogin) - 認証機能
- [Flask-User](https://flask-user.readthedocs.io) - アカウント管理・認証・認可

Flask-Userの[FAQ](https://flask-user.readthedocs.io/en/latest/faq.html)で、Flask-UserとFlask-Securityの違いを確認できます。

#### JWTベース認証（JSONエンドポイント向け） <a id="jwt-based-for-json-endpoints"></a><a id="jwt-ベースjson-エンドポイント向け"></a>

- [Axioms-Flask-Py](https://github.com/axioms-io/axioms-flask-py) - Flask API向けのOAuth2/OIDC認証・認可。JWTトークンを使った認証と、クレームに基づく細かな認可（スコープ、ロール、権限）をサポート
- [Flask-JWT](https://pythonhosted.org/Flask-JWT/) - JWTを扱うための基本機能
- [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io) - JWTを扱うための高度な機能
- [Flask-JWT-Router](https://github.com/joegasewicz/flask-jwt-router) - Flaskアプリケーションに認可を必要とするルートを追加
- [Flask-Praetorian](https://flask-praetorian.readthedocs.io) - Flask API向けの認証・認可

#### OAuth

- [Authlib](https://authlib.org/) - OAuthとOpenIDのクライアント・サーバーを構築するライブラリ
- [Authomatic](https://github.com/authomatic/authomatic) - PythonウェブアプリケーションでOAuthとOpenIDを使ったユーザー認証・認可を行う、フレームワークに依存しないライブラリ
- [Flask-Dance](https://github.com/singingwolfboy/flask-dance) - [OAuthLib](https://oauthlib.readthedocs.io/)を通じたOAuthサポート

### キャッシュ <a id="cache"></a>

- [Flask-Caching](https://flask-caching.readthedocs.io/) - キャッシュ機能

### データ検証とシリアライズ <a id="data-validation-and-serialization"></a>

- [Flask-Marshmallow](https://flask-marshmallow.readthedocs.io) - Flaskと、オブジェクトのシリアライズ・デシリアライズを行うmarshmallowの統合層。marshmallowに追加機能を提供
- [Flask-Pydantic](https://github.com/pallets-eco/flask-pydantic) - [Pydantic](https://github.com/pydantic/pydantic)のサポート

### データベース <a id="databases"></a>

#### ORM <a id="orms"></a>

- [Flask-Peewee](https://flask-peewee.readthedocs.io) - ORMとデータベースマイグレーションツールであるPeeweeのサポート
- [Flask-Pony](https://pypi.org/project/Flask-Pony/) - Pony ORMのサポート
- [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com) - SQLツールキット兼ORMであるSQLAlchemyのサポート

#### ODM <a id="odms"></a>

- [Flask-MongoEngine](https://flask-mongoengine-3.readthedocs.io) - MongoDBを扱うためにFlaskとMongoEngineを橋渡し
- [Flask-PyMongo](https://flask-pymongo.readthedocs.io) - MongoDBを扱うためにFlaskとPyMongoを橋渡し

#### マイグレーション <a id="migrations"></a>

- [Flask-Alembic](https://flask-alembic.readthedocs.io) - Flask-SQLAlchemyのデータベースに対してマイグレーションを行う、設定可能な[Alembic](https://alembic.sqlalchemy.org/)環境

- [Flask-DB](https://github.com/nickjj/flask-db) - SQLデータベースのマイグレーション・削除・作成・初期データ投入を支援するFlask CLI拡張
- [Flask-Migrate](https://flask-migrate.readthedocs.io) - Alembicを使ったSQLAlchemyのデータベースマイグレーション

Flask-DBの[FAQ](https://github.com/nickjj/flask-db#differences-between-alembic-flask-migrate-flask-alembic-and-flask-db)で、Alembic、Flask-Alembic、Flask-Migrate、Flask-DBの違いを確認できます。

#### その他のツール <a id="other-tools"></a>

- [Flask-Excel](https://github.com/pyexcel-webwares/Flask-Excel) - [pyexcel](https://github.com/pyexcel/pyexcel)を使い、csv、ods、xls、xlsx、xlsm形式のデータを読み取り・操作・書き込み

### 開発ツール <a id="developer-tools"></a>

#### デバッグ <a id="debugging"></a>

- [Flask-DebugToolbar](https://flask-debugtoolbar.readthedocs.io) - DjangoのデバッグツールバーのFlask移植版
- [Flask-Profiler](https://github.com/muatik/flask-profiler) - エンドポイントの分析・プロファイリング

#### フィクスチャー <a id="fixtures"></a>

- [Flask-Fixtures](https://github.com/croach/Flask-Fixtures) - JSONやYAMLからデータベースのフィクスチャーを作成
- [Mixer](https://mixer.readthedocs.io) - オブジェクト生成ツール

#### ログ記録 <a id="logging"></a><a id="ロギング"></a>

- [Rollbar](https://docs.rollbar.com/docs/python) - Rollbarを使ったFlaskのエラーログ記録

#### 監視 <a id="monitoring"></a>

- [Airbrake](https://docs.airbrake.io/docs/platforms/framework/python/flask/) - AirbrakeとFlaskの統合
- [Elastic APM Agent](https://www.elastic.co/docs/reference/apm/agents/python/flask-support) - Elastic APMとFlaskの統合
- [Flask Monitoring Dashboard](https://flask-monitoringdashboard.readthedocs.io) - Flaskウェブサービスを自動監視するダッシュボード
- [Sentry Python SDK](https://sentry.io/for/flask/) - Sentry SDKとFlaskの統合

#### トレーシング <a id="tracing"></a>

- [OpenTelemetry](https://opentelemetry-python-contrib.readthedocs.io/en/latest/instrumentation/flask/flask.html) - Flask向けのOpenTelemetry計装

#### テスト <a id="testing"></a>

- [Flask-Testing](https://pythonhosted.org/Flask-Testing/) - Unittestの拡張
- [Pytest-Flask](https://github.com/pytest-dev/pytest-flask) - Flaskアプリケーションのテスト用Pytestサポート

### メール <a id="email"></a>

- [Flask-Mail](https://flask-mail.readthedocs.io/) - シンプルなメール送信機能
- [Flask-Mailman](https://pypi.org/project/flask-mailman/) - `django.mail`のFlask移植版
- [Flask-Mail-SendGrid](https://github.com/hamano/flask-mail-sendgrid) - Flask-Mailを基盤としたSendGrid経由のメール送信

### フォーム <a id="forms"></a>

- [Flask-WTF](https://flask-wtf.readthedocs.io) - FlaskとWTFormsの統合。CSRF保護も提供

### 全文検索 <a id="full-text-search"></a>

- [flask-msearch](https://github.com/honmaple/flask-msearch) - 全文検索
- [Flask-WhooshAlchemy3](https://github.com/blakev/Flask-WhooshAlchemy3) - Flask-SQLAlchemy向けの全文検索とWhooshによるインデックス作成
- [SQLAlchemy-Searchable](https://sqlalchemy-searchable.readthedocs.io) - SQLAlchemyモデルに全文検索機能を提供

### セキュリティ <a id="security"></a>

- [Flask-Argon2](https://github.com/red-coracle/flask-argon2) - argon2ハッシュのユーティリティー
- [Flask-Bcrypt](https://flask-bcrypt.readthedocs.io) - bcryptハッシュのユーティリティー
- [Flask-CORS](https://flask-cors.readthedocs.io/) - クロスオリジンリソース共有（CORS）の処理
- [Flask-SeaSurf](https://github.com/maxcountryman/flask-seasurf/) - クロスサイトリクエストフォージェリ（CSRF）の防止
- [Flask-Talisman](https://github.com/wntrblm/flask-talisman) - HTTPSとセキュリティヘッダー
- [secure](https://github.com/TypeError/secure) - FlaskアプリケーションでHTTPセキュリティヘッダーを一貫して定義・適用する軽量ライブラリ

### タスクキュー <a id="task-queues"></a>

- [Celery](https://docs.celeryproject.org/) - 非同期タスクとスケジューリングのためのPythonライブラリ
- [Dramatiq](https://flask-dramatiq.rtfd.io/) - Celeryの代替
- [Flask-RQ](https://github.com/pallets-eco/flask-rq) - [RQ](https://python-rq.org/)（Redis Queue）の統合
- [Huey](https://huey.readthedocs.io) - [Redis](https://redis.io/)ベースのタスクキュー。シンプルで柔軟なタスク実行フレームワークを目指す

### ユーティリティー <a id="utils"></a><a id="ユーティリティ"></a>

- [Apitally](https://github.com/apitally/apitally-py) - Flask向けのAPI監視・分析・リクエストログ記録
- [Flask-Babel](https://github.com/python-babel/flask-babel) - 国際化（i18n）と地域化（l10n）のサポート
- [Flask-File-Upload](https://github.com/joegasewicz/flask-file-upload) - ファイルアップロード
- [Flask-FlatPages](https://pythonhosted.org/Flask-FlatPages/) - テキストファイルに基づく静的ページを提供
- [Frozen-Flask](https://github.com/Frozen-Flask/Frozen-Flask) - Flaskアプリケーションを静的ファイル群に変換
- [Flask-GraphQL](https://github.com/graphql-python/flask-graphql) - GraphQLのサポート
- [Flask-Injector](https://github.com/python-injector/flask_injector) - 依存性注入のサポートを追加
- [Flask-Limiter](https://flask-limiter.readthedocs.io) - Flaskルートへのレート制限機能
- [Flask-Moment](https://github.com/miguelgrinberg/Flask-Moment) - Jinja2テンプレートでMoment.jsによる日付・時刻の書式設定を行うヘルパー
- [Flask-Paginate](https://pythonhosted.org/Flask-paginate/) - ページネーションのサポート
- [Flask-Reactize](https://github.com/Azure-Samples/flask-reactize) - React用のNode.js開発バックエンドをFlaskアプリケーションの背後に配置
- [Flask-Shell2HTTP](https://github.com/Eshaan7/Flask-Shell2HTTP) - Pythonのsubprocess API用RESTful/HTTPラッパー。コマンドラインツールをRESTful APIサービスに変換
- [Flask-Sitemap](https://flask-sitemap.readthedocs.io) - サイトマップの生成
- [Flask-SocketIO](https://flask-socketio.readthedocs.io) - Socket.IOの統合
- [Flask-SSE](https://flask-sse.readthedocs.io) - Flaskでのストリーミング

## 資料 <a id="resources"></a><a id="リソース"></a>

### 公式資料 <a id="official-resources"></a><a id="公式リソース"></a>

- [公式ウェブサイト](https://palletsprojects.com/p/flask/) - Flaskの公式ウェブサイト

- [ドキュメント](https://flask.palletsprojects.com) - Flaskのすべてのバージョンを扱う包括的なドキュメント
- [Flaskrチュートリアル](https://flask.palletsprojects.com/tutorial/) - Flaskrという基本的なブログアプリケーションを作成
- [ソースコード](https://github.com/pallets/flask) - GitHubで公開されているソースコード

### 外部資料 <a id="external-resources"></a><a id="外部リソース"></a>

- [Full Stack PythonのFlaskページ](https://www.fullstackpython.com/flask.html) - Flaskの設計思想の説明と、関連資料・チュートリアルへのリンク
- [Miguel Grinbergのブログ](https://blog.miguelgrinberg.com/category/Flask) - Flaskに関する複数のチュートリアル

- [Nick Janetakisのブログ](https://nickjanetakis.com/blog/tag/flask-tips-tricks-and-tutorials) - Flaskのヒント・コツ・チュートリアル
- [Patrick Kennedyのブログ](https://www.patricksoftwareblog.com/) - Flaskを使うPythonウェブアプリケーション開発の学習チュートリアル
- [RealPython](https://realpython.com/tutorials/flask/) - Flaskのチュートリアル
- [TestDriven.io](https://testdriven.io/blog/topics/flask/) - Flaskのチュートリアル

### コミュニティ <a id="community"></a>

- [Discord](https://discord.com/invite/t6rrQZH) - Discord上のPallets Projectsコミュニティ。Flaskのサポートには`#get-help`チャンネルを利用
- IRCチャンネル - 元の一覧では、Flask利用者同士の会話にFreeNodeの`#pocoo`チャンネルを紹介
- [Reddit](https://www.reddit.com/r/flask/) - Flaskのサブレディット
- [Stack Overflow](https://stackoverflow.com/questions/tagged/flask) - `flask`タグが付いた質問
- [Twitter](https://twitter.com/PalletsTeam) - 更新やセキュリティ修正などの公式発表

### カンファレンス <a id="conferences"></a>

- [FlaskCon](https://twitter.com/flaskcon) - 世界各地の講演者・参加者を対象に、技術や普及に関するセッションを開催するコミュニティ主導のFlaskイベント
- [PyConWeb](https://twitter.com/pyconweb) - Django、Tornado、Flask、APIフレームワーク、AsyncIO、ネットワーキング、フロントエンド、JavaScript、ウェブセキュリティを扱う
- [Flask Conf Brazil](https://2019.flask.python.org.br/) - Flaskの開発者・利用者向けカンファレンス
- [PyCon US](https://us.pycon.org/) - オープンソースのPythonを利用・開発するコミュニティの年次集会
- [PyCon Australia](https://pycon-au.org/) - Pythonプログラミングコミュニティが主催する国内カンファレンス
- [Euro Python](https://europython.eu/) - ヨーロッパのPythonカンファレンス
- [PyCon](https://pycon.org/) - 世界各地のPyConの一覧

### ミートアップ <a id="meetups"></a>

- [Flask](https://www.meetup.com/topics/flask/all/) - 元の一覧では20か国の40以上のグループを掲載
- [Python Web Development](https://www.meetup.com/topics/python-web-development/all/) - 元の一覧では81か国の600以上のグループを掲載
- [Python](https://www.meetup.com/topics/python/all/) - 元の一覧では100か国の2,400以上のグループを掲載

### ポッドキャスト <a id="podcasts"></a>

- [TalkPython](https://talkpython.fm/) - Flaskを扱う複数のエピソードがあるPythonポッドキャスト
- [Podcast Init](https://www.pythonpodcast.com/) - Flask関連のゲストが登場することもあるPythonポッドキャスト
- [Python Bytes](https://pythonbytes.fm/) - Flaskを取り上げることもあるPythonポッドキャスト
- [Full Stack PythonのPythonポッドキャスト一覧](https://www.fullstackpython.com/best-python-podcasts.html) - 元の一覧で活動中と紹介されているPython関連ポッドキャストの一覧

### チュートリアル <a id="tutorials"></a>

- [Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world) - Pythonの初級・中級開発者向けに、Flaskでのウェブ開発を広く扱うチュートリアル
- [Flaskr TDD](https://github.com/mjhea0/flaskr-tdd) - Flask、テスト駆動開発（TDD）、JavaScriptの入門
- [Make a Web App Using Python & Flask!](https://aryaboudaie.com/python/technical/educational/web/flask/2018/10/17/flask.html) - Pythonウェブサイトを基礎から作成

### コース <a id="courses"></a>

- [Developing Web Applications with Python and Flask](https://testdriven.io/courses/learn-flask/) - テスト駆動開発（TDD）でウェブアプリケーションを構築・テストしながらFlaskの基礎を学ぶコース
- [Test-Driven Development with Python, Flask, and Docker](https://testdriven.io/courses/tdd-flask/) - Python、Flask、Dockerを使うマイクロサービスの構築・テスト・デプロイ
- [Authentication with Flask, React, and Docker](https://testdriven.io/courses/auth-flask-react/) - FlaskとReactのマイクロサービスに認証を追加
- [Deploying a Flask and React Microservice to AWS ECS](https://testdriven.io/courses/aws-flask-react/) - Flask、React、Dockerを使うマイクロサービスをAmazon ECSへデプロイする方法を学ぶ
- [Build a SAAS App with Flask](https://buildasaasappwithflask.com) - FlaskとDockerでウェブアプリケーションを構築する方法を学ぶ
- [Full Stack Foundations](https://www.udacity.com/course/full-stack-foundations--ud088) - Pythonでデータを活用するウェブアプリケーションを構築
- [Designing RESTful APIs](https://www.udacity.com/course/designing-restful-apis--ud388) - バックエンドAPIサーバーを構築し、セキュリティ機能を実装

### 書籍 <a id="books"></a>

- [Flask Web Development](https://www.oreilly.com/library/view/flask-web-development/9781491991725/) - 実践的なプロジェクトを段階的に開発しながら、フレームワークの基礎を学ぶ
- [Real Python](https://realpython.com) - 実例を通じてPythonプログラミングを学ぶ
- [Explore Flask](https://explore-flask.readthedocs.io/) - Flaskウェブアプリケーション開発のベストプラクティスとパターン

### 動画 <a id="videos"></a>

- [PyVideo](https://pyvideo.org/search.html?q=flask)
- [Practical Flask Web Development Tutorials](https://www.youtube.com/playlist?list=PLQVvvaa0QuDc_owjTbIY4rbgXOFkUYOUB)
- [Python Flask Tutorial: Full-Featured Web App](https://www.youtube.com/playlist?list=PL-osiE80TeTs4UjLw5MM6OjgkjFeUxCYH)
- [Discover Flask - Full Stack Web Development with Flask](https://github.com/realpython/discover-flask)

## ホスティング <a id="hosting"></a>

### PaaS

プラットフォームをサービスとして提供（Platforms-as-a-Service）

- [Heroku](https://www.heroku.com/)
- [PythonAnywhere](https://www.pythonanywhere.com/details/flask_hosting)
- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Google App Engine](https://cloud.google.com/appengine)
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)
- [Divio](https://www.divio.com)
- [Render](https://render.com/)

### IaaS

インフラをサービスとして提供（Infrastructure-as-a-Service）

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)

- [Linode](https://www.linode.com/)

### サーバーレス <a id="serverless"></a>

フレームワーク:

- [Zappa](https://github.com/Miserlou/Zappa)
- [Chalice](https://github.com/aws/chalice)

コンピューティング:

- [AWS Lambda](https://aws.amazon.com/lambda/)
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)

## プロジェクト <a id="projects"></a>

### 雛形 <a id="boilerplates"></a><a id="ボイラープレート"></a>

- [cookiecutter-flask](https://github.com/cookiecutter-flask/cookiecutter-flask) - Bootstrap 4、webpackによるアセットのバンドル・圧縮、スターターテンプレート、ユーザー登録・認証を含む
- [Cookiecutter Flask Skeleton](https://github.com/testdrivenio/cookiecutter-flask-skeleton) - [Cookiecutter](https://github.com/cookiecutter/cookiecutter)用のFlaskスタータープロジェクト
- [Flask-AppBuilder](https://github.com/dpgaspar/Flask-AppBuilder) - セキュリティ機能、モデルからのCRUD自動生成、Google Chartsを備えたアプリケーション開発フレームワーク
- [flask-base](http://hack4impact.github.io/flask-base/) - SQLAlchemy、Redis、ユーザー認証などを含む
- [Flask-Bootstrap](https://github.com/esbullington/flask-bootstrap) - SQLAlchemy、認証、Bootstrapフロントエンドを統合
- [flask-htmx-boilerplate](https://github.com/marcusschiesser/flask-htmx-boilerplate) - HTMXとTailwind CSSを使うPython Flaskアプリケーションの雛形
- [uwsgi-nginx-flask-docker](https://github.com/tiangolo/uwsgi-nginx-flask-docker) - PythonのFlaskアプリケーションを単一コンテナで動かす、uWSGIとNginxを含むDockerイメージ
- [React-Redux-Flask](https://github.com/dternyak/React-Redux-Flask) - FlaskのJWTバックエンドと、Material UIを使うReact/Reduxフロントエンドの雛形アプリケーション

### オープンソースプロジェクト <a id="open-source-projects"></a>

- [ActorCloud](https://github.com/actorcloud/ActorCloud) - オープンソースのIoTプラットフォーム
- [BOFS](https://github.com/colbyj/bride-of-frankensystem) - 宣言的な設定ファイルからオンライン調査や行動実験を作成。必要に応じてFlaskで機能を拡張
- [Busy Beaver](https://github.com/busy-beaver-dev/busy-beaver) - Chicago Pythonのコミュニティ活動を支援するSlackボット
- [FlaskBB](https://github.com/flaskbb/flaskbb) - 従来型のフォーラムソフトウェア
- [Indico](https://github.com/indico/indico) - [CERN](https://home.cern/)で開発されたイベント管理システム
- [Quokka CMS](https://github.com/quokkaproject) - コンテンツ管理システム
- [PythonBuddy](https://github.com/ethanchewy/PythonBuddy) - 構文をリアルタイムにチェックし、コードを実行できるオンラインPythonエディター
- [Redash](https://github.com/getredash/redash) - 技術経験の異なる利用者に、さまざまな規模のデータを扱うツールを提供
- [SkyLines](https://github.com/skylines-project/skylines) - リアルタイム追跡、飛行データベース、競技フレームワーク
- [Security Monkey](https://github.com/Netflix/security_monkey) - AWS、GCP、OpenStack、GitHub組織のアセットと経時的な変化を監視
- [SecureDrop](https://github.com/freedomofpress/securedrop) - 報道機関向けのオープンソース内部告発受付システム。元の一覧では、匿名の情報源から安全に文書を受け取り、連絡を取るためのシステムと紹介
- [SimpleLogin](https://github.com/simple-login/app) - オンライン上の身元の保護に使うメールエイリアス
- [sr.ht](https://git.sr.ht/~sircmpwn/core.sr.ht/tree) - Gitホスティングサービス。関連資料として[Why I chose Flask to build sr.ht's mini-services](https://drewdevault.com/2019/01/30/Why-I-built-sr.ht-with-Flask.html)も参照
- [Timesketch](https://github.com/google/timesketch) - フォレンジック調査のタイムラインを共同で分析
