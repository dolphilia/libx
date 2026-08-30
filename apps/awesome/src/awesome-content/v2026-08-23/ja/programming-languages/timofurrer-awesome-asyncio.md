---
title: "timofurrer/awesome-asyncio"
description: "timofurrer/awesome-asyncio の正規スナップショット"
licenseSource: "github-timofurrer-awesome-asyncio-readme-md"
---

> **警告：**
> このプロジェクトは新しい移管先を探しています。現在はメンテナンスされていません。
> メンテナンスを引き継ぎたい方はお知らせください。
> timo@furrer.lifeまでメールを送ってください。

# Awesome asyncio [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> 優れたPython asyncioフレームワーク、ライブラリ、ソフトウェア、リソースの厳選リスト。

Python 3.4で標準ライブラリへ導入されたPythonの[asyncio](https://docs.python.org/3/library/asyncio.html)モジュールは、コルーチンを使ったシングルスレッド並行コードの記述、ソケットなどのリソースに対するI/Oアクセスの多重化、ネットワーククライアントとサーバーの実行、および関連する基本機能のための基盤を提供します。

Asyncio自体はまったく新しい技術ではありませんが、ここ数年、特にPythonコミュニティや2014年3月のPython 3.4リリース以降、大きな注目を集めています。
そのため、優れた最新パッケージを把握し続けることは簡単ではありません。
ここでいくつかの*優れた*パッケージを見つけてください。足りないものがあれば、提案を添えて[IssueまたはPull Requestを作成](https://github.com/timofurrer/awesome-asyncio/blob/master/CONTRIBUTING.md)していただけることを期待しています。


## 目次

* [Webフレームワーク](#web-frameworks)
* [メッセージキュー](#message-queues)
* [データベースドライバー](#database-drivers)
* [ネットワーク](#networking)
* [GraphQL](#graphql)
* [テスト](#testing)
* [代替ループ](#alternative-loops)
* [その他](#misc)
* [読み物](#writings)
* [講演](#talks)
* [asyncioの代替](#alternatives-to-asyncio)

***

## Webフレームワーク <a id="web-frameworks"></a>

*Webアプリケーションを構築するためのライブラリ。*

* [FastAPI](https://github.com/tiangolo/fastapi) - 型ヒントに基づく非常に高性能なPython 3.6+ APIフレームワーク。StarletteとPydanticを利用。
* [Django](https://www.djangoproject.com/) - 大規模なコミュニティとエコシステムを持つ、実績ある高水準Python Webフレームワーク。
* [Starlette](https://github.com/encode/starlette) - 高性能サービスを構築するための軽量ASGIフレームワーク／ツールキット。
* [aiohttp](https://github.com/KeepSafe/aiohttp) - asyncio（PEP-3156）向けHTTPクライアント／サーバー。
* [sanic](https://github.com/channelcat/sanic) - 高速動作を目的に記述されたPython 3.5+ Webサーバー。
* [Quart](https://github.com/pallets/quart) - Flaskと同じAPIを持つasyncio Webマイクロフレームワーク。
* [autobahn](https://github.com/crossbario/autobahn-python) - クライアントとサーバー向けにasyncioとTwistedをサポートするWebSocket／WAMP実装。
* [websockets](https://github.com/aaugustin/websockets/) - 正確性と単純さを重視した、PythonでWebSocketサーバーとクライアントを構築するライブラリ。
* [Tornado](http://www.tornadoweb.org/en/stable/) - 高性能なWebフレームワークおよび非同期ネットワークライブラリ。
* [uvicorn](https://github.com/encode/uvicorn) - 非常に高速なASGIサーバー。


## メッセージキュー <a id="message-queues"></a>

*メッセージキューを使うアプリケーションを実装するためのライブラリ。*

* [aioamqp](https://github.com/Polyconseil/aioamqp) - asyncioを使ったAMQP実装。
* [pyzmq](https://github.com/zeromq/pyzmq) - ZeroMQのPythonバインディング。
* [aiozmq](https://github.com/aio-libs/aiozmq) - ZeroMQとの代替Asyncio統合。
* [crossbar](https://github.com/crossbario/crossbar) - 分散アプリケーションとマイクロサービス向けのネットワークプラットフォーム。
* [asyncio-nats](https://github.com/nats-io/asyncio-nats) - NATSメッセージングシステムのクライアント。
* [aiokafka](https://github.com/aio-libs/aiokafka) - Apache Kafkaのクライアント。

## データベースドライバー <a id="database-drivers"></a>

*データベースへ接続するためのライブラリ。*

* [asyncpg](https://github.com/MagicStack/asyncpg) - Python／asyncio向けの高速PostgreSQLデータベースクライアントライブラリ。
* [asyncpgsa](https://github.com/CanopyTax/asyncpgsa) - sqlalchemy coreに対応したAsyncpg。
* [aiopg](https://github.com/aio-libs/aiopg/) - PostgreSQLデータベースへアクセスするライブラリ。
* [aiomysql](https://github.com/aio-libs/aiomysql) - MySQLデータベースへアクセスするライブラリ。
* [aioodbc](https://github.com/aio-libs/aioodbc) - ODBCデータベースへアクセスするライブラリ。
* [pymongo](https://github.com/mongodb/mongo-python-driver) - 同期APIと非同期APIの両方を提供する公式MongoDB Pythonドライバー。
* [redis-py](https://github.com/redis/redis-py) - Redis Pythonクライアント（現在は[aioreadis](https://github.com/aio-libs/aioredis)を含む）。
* [aiocouchdb](https://github.com/aio-libs/aiocouchdb) - aiohttp（asyncio）上に構築されたCouchDBクライアント。
* [aioinflux](https://github.com/plugaai/aioinflux) - aiohttp上に構築されたInfluxDBクライアント。
* [aioes](https://github.com/aio-libs/aioes) - asyncio互換のelasticsearchドライバー。
* [peewee-async](https://github.com/05bit/peewee-async) - [peewee](https://github.com/coleifer/peewee)とaiopgに基づくORM実装。
* [GINO](https://github.com/fantix/gino) - [SQLAlchemy](https://www.sqlalchemy.org/) coreを基盤とし、[asyncpg](https://github.com/MagicStack/asyncpg)方言を備えた軽量な非同期Python ORM。
* [Tortoise ORM](https://github.com/tortoise/tortoise-orm) - Django風APIと扱いやすいリレーション管理を備えたネイティブな複数バックエンド対応ORM。
* [Databases](https://github.com/encode/databases) - PostgreSQL、MySQL、SQLiteをサポートするSQLAlchemy core向け非同期データベースアクセス。
* [Prisma Client Python](https://github.com/RobertCraigie/prisma-client-py) - Pydanticを利用し、スキーマ専用に調整される自動生成・完全型安全なORM。SQLite、PostgreSQL、MySQL、MongoDB、MariaDBなどに対応。
* [Piccolo](https://github.com/piccolo-orm/piccolo) - 非同期・同期の両モードで動作し、使いやすい管理GUIとASGIミドルウェアを備えたORM／クエリビルダー。
* [Beanie](https://beanie-odm.dev) - [pymongo](https://github.com/mongodb/mongo-python-driver)と[Pydantic](https://pydantic-docs.helpmanual.io)上に構築された非同期MongoDB ODM。

## ネットワーク <a id="networking"></a>

*ネットワーク上で通信するためのライブラリ。*

* [AsyncSSH](https://github.com/ronf/asyncssh) - SSHv2プロトコルの非同期クライアントおよびサーバー実装。
* [aiodns](https://github.com/saghul/aiodns) - asyncio向けのシンプルなDNSリゾルバー。
* [aioping](https://github.com/stellarbit/aioping) - ICMP（ping）プロトコルの高速asyncio実装。
* [httpx](https://github.com/encode/httpx) - [requests](https://github.com/psf/requests)互換APIを備えたPython 3向け非同期HTTPクライアント。

## GraphQL

*GraphQLサーバーを構築するためのライブラリ。*

* [Ariadne](https://ariadnegraphql.org) - GraphQLサーバーを実装するためのスキーマファーストPythonライブラリ。
* [Tartiflette](https://tartiflette.io/) - `libgraphqlparser`上に構築されたスキーマファーストのPython 3.6+ GraphQLエンジン。
* [Strawberry](https://strawberry.rocks) - Django、Flask、FastAPI／Starletteに対応したコードファーストのPython 3 GraphQLサーバー。

## テスト <a id="testing"></a>

*asyncioベースのアプリケーションをテストするためのライブラリ。*

* [aiomock](https://github.com/nhumrich/aiomock/) - 非同期メソッドに対応するPythonモックライブラリ。
* [asynctest](https://github.com/Martiusweb/asynctest/) - asyncioライブラリのテスト機能で標準unittestパッケージを拡張。
* [pytest-asyncio](https://github.com/pytest-dev/pytest-asyncio) - Pytestのasyncio対応。
* [aresponses](https://github.com/CircleUp/aresponses) - Asyncio HTTPモック。[responses](https://github.com/getsentry/responses)ライブラリに類似し、これは[requests](https://github.com/requests/requests)で使用される。
* [aioresponses](https://github.com/pnuckowski/aioresponses) - Python aiohttpパッケージでWebリクエストをモック／フェイクするためのヘルパー。

## 代替ループ <a id="alternative-loops"></a>

*asyncioループの代替実装。*

* [uvloop](https://github.com/MagicStack/uvloop) - libuv上に構築された非常に高速なasyncioイベントループ実装。

## その他 <a id="misc"></a>

*その他の優れたasyncioライブラリ。*

* [aiochan](https://github.com/zh217/aiochan) - asyncio上でチャネル、select、マルチプロセッシングを使うCSP形式の並行処理。
* [aiocache](https://github.com/argaen/aiocache) - 複数のバックエンドに対応するキャッシュマネージャー。
* [aiofiles](https://github.com/Tinche/aiofiles/) - asyncio向けファイルサポート。
* [aiopath](https://github.com/alexdelorenzo/aiopath) - asyncio向け非同期`pathlib`。
* [aiodebug](https://github.com/qntln/aiodebug) - asyncioプログラムの監視とテストを行う小さなライブラリ。
* [aiorun](https://github.com/cjrh/aiorun) - 起動と正常終了に伴う一般的な定型処理をすべて扱う`run()`関数。
* [aiosc](https://github.com/artfwo/aiosc) - 軽量なOpen Sound Control実装。
* [aioserial](https://github.com/changyuheng/aioserial) - [pySerial](https://github.com/pyserial/pyserial)の差し替え可能な代替。
* [aiozipkin](https://github.com/aio-libs/aiozipkin) - zipkinを使ったasyncio向け分散トレーシング計装。
* [asgiref](https://github.com/django/asgiref) - ASGIとWSGIを統合するバックエンドユーティリティ。sync_to_asyncおよびasync_to_sync関数ラッパーを含む。
* [async_property](https://github.com/ryananguiano/async_property) - 非同期プロパティ用Pythonデコレーター。
* [ruia](https://github.com/howie6879/ruia) - asyncioベースの非同期Webスクレイピング用マイクロフレームワーク。
* [kubernetes_asyncio](https://github.com/tomplus/kubernetes_asyncio) - Kubernetes向け非同期クライアントライブラリ。
* [aiomisc](https://github.com/aiokitchen/aiomisc) - `asyncio`向けの各種ユーティリティ。
* [taskiq](https://taskiq-python.github.io/) - 非同期分散タスクマネージャー（celeryに似ているが非同期）。

## 読み物 <a id="writings"></a>

*asyncioに関するドキュメント、ブログ投稿、その他の優れた文章。*

* [Official asyncio documentation](https://docs.python.org/3/library/asyncio.html) - 非同期I/O、イベントループ、コルーチン、タスク。
* [Short well-written intro to asyncio](https://masnun.com/python-generators-coroutines-native-coroutines-and-async-await/) - ジェネレーター、コルーチン、ネイティブコルーチン、async／await。
* [AsyncIO for the Working Python Developer](https://hackernoon.com/asyncio-for-the-working-python-developer-5c468e6e2e8e) - 基本例からURL取得へ進む、非同期プログラミングの丁寧な入門。
* [Test limits of Python aiohttp](https://pawelmhm.github.io/asyncio/python/aiohttp/2016/04/22/asyncio-aiohttp.html) - python-aiohttpで100万リクエストを実行。
* [ASGI (Asynchronous Server Gateway Interface)](https://asgi.readthedocs.io/en/latest/) - 非同期対応Python Webサーバー、フレームワーク、アプリケーション間の標準インターフェースを提供する、WSGIの精神的後継。
* [First Principles Introduction to Asyncio](https://hackernoon.com/a-simple-introduction-to-pythons-asyncio-595d9c9ecf8c) - asyncioの内部動作を流行語なしで第一原理から説明する入門。
* [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - テスト駆動開発（TDD）を使い、FastAPIで非同期APIを開発・テストする方法を扱うチュートリアル。
* [Python Concurrency with asyncio](https://www.manning.com/books/python-concurrency-with-asyncio) - 並行プログラミングと最先端のasyncioライブラリで遅いPythonコードを高速化する方法を学ぶ。

## 講演 <a id="talks"></a>

*asyncioに関する優れた講演の録画。*

* [Topics of Interest (Python Asyncio)](https://youtu.be/ZzfHjytDceU) | [スクリーンキャスト](https://youtu.be/lYe8W04ERnY) | [スライド](https://speakerdeck.com/dabeaz/topics-of-interest-async) - PyCon Brasil 2015基調講演（David Beazley）。
* [Python Asynchronous I/O Walkthrough](https://www.youtube.com/playlist?list=PLpEcQSRWP2IjVRlTUptdD05kG-UkJynQT) - 8部構成のコード解説（Philip Guo）。
* [Async/await in Python 3.5 and why it is awesome](https://www.youtube.com/watch?v=m28fiN9y_r8&t=132s) - EuroPython 2016（Yury Selivanov）。
* [Fear and Awaiting in Async: A Savage Journey to the Heart of the Coroutine Dream](https://www.youtube.com/watch?v=E-1Y4kSsAFc) | [スクリーンキャスト](https://www.youtube.com/watch?v=Bm96RqNGbGo) - PyOhio 2016基調講演（David Beazley）。
* [Asynchronous Python for the Complete Beginner](https://www.youtube.com/watch?v=iG6fr81xHKA) | [スライド](https://speakerdeck.com/pycon2017/miguel-grinberg-asynchronous-python-for-the-complete-beginner) - PyCon 2017（Miguel Grinberg）。
* [Demystifying Python's Async and Await Keywords](https://www.youtube.com/watch?v=F19R_M4Nay4) - JetBrains TV 2020（Michael Kennedy）

## asyncioの代替 <a id="alternatives-to-asyncio"></a>

*Pythonにおける非同期プログラミングの代替手法。一部は`asyncio`との一定の互換性を目指しますが、まったく互換性のないものもあります。*

* [curio](https://github.com/dabeaz/curio) - コルーチン並行処理ライブラリ。
  * [Curio-Asyncio Bridge](https://github.com/dabeaz/curio/issues/190) - 基本的なcurioからasyncioへのコルーチンブリッジ。
* [trio](https://github.com/python-trio/trio) - 人間と蛇の人々のためのPythonらしい非同期I/O。
  * [trio-asyncio](https://github.com/python-trio/trio-asyncio) - Trio上でasyncioメインループを再実装。
* [AnyIO](https://github.com/agronholm/anyio) - trioまたはasyncioのどちらの上でも動作する高水準非同期並行処理・ネットワークフレームワーク。
