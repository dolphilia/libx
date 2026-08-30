---
title: "Awesome Sqlalchemy"
description: "Sqlalchemyを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-dahlia-awesome-sqlalchemy-readme-rst"
---

# Awesome Sqlalchemy

Sqlalchemyを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

.. contents:: 目次
   :backlinks: none
   :depth: 3


データ構造
---------------

bemi-sqlalchemy_
   SQLAlchemyにおける自動データ変更追跡。

   - アプリケーション固有のコンテキストでPostgreSQLの変更を自動的に追跡
   - アプリケーション外で直接SQLを実行しても、100％の信頼性でデータ変更をキャプチャする
   - コードの実行パフォーマンスやデータベースの負荷に影響を与えない
   - テーブル構造を変更せず、コードを再構成せず、重いデータベーストリガーを作成せずに動作する
   - FastAPIと統合

SQLAlchemy-Continuum_
   SQLAlchemy用のバージョニングおよび監査拡張。

   - 挿入、削除および更新に対してバージョンを作成する。
   - 変更がない更新は保存しない。
   - alembicのマイグレーションをサポートしています。
   - 指定された場所でオブジェクトのデータおよびすべてのオブジェクトの関係を元に戻すこともできる
     トランザクションであっても、オブジェクトが削除された場合でも。
   - SQLAlchemyのクエリ構文を使用して、トランザクションを後で検索できる。
   - 与えられたトランザクションで変更されたレコードを検索する。
   - 時系列関係の反映。バージョンオブジェクトの関係の表示
     その時点での親オブジェクトの関係性をそのまま保持した。
   - PostgreSQLデータベースのネイティブバージョニングをサポート（トリガーベース）
     バージョニング)。

sqlalchemy_mptt_
   MPTT（改良された順序木走査）を実装するためのライブラリ
   SQLAlchemyのモデルとモデルインスタンスの木構造の操作
   django-mptt_ と同様の機能を提供します。

SQLAlchemy-ORM-tree_
   SQLAlchemyベースのアプリケーション向けの実装
   ネストセット/改良された事前順巡回技術
   リレーショナルデータベースに階層データを格納する。

vdm_
   バージョン管理されたドメインモデル。データベースのリビジョン／バージョン管理用のPythonライブラリ。

.. _bemi-sqlalchemy: https://github.com/BemiHQ/bemi-sqlalchemy
.. _django-mptt: https://github.com/django-mptt/django-mptt/
.. _SQLAlchemy-Continuum: https://sqlalchemy-continuum.readthedocs.io/
.. _sqlalchemy_mptt: https://sqlalchemy-mptt.readthedocs.io/
.. _SQLAlchemy-ORM-tree: https://sqlalchemy-orm-tree.readthedocs.io/
.. _vdm: https://github.com/okfn/vdm


データ型
----------

SQLAlchemy-Enum34_
   SQLAlchemy型で標準``enum.Enum``値を保存するための型。

SQLAlchemy-Utc_
   SQLAlchemyの型で、認識可能な ``datetime.datetime`` 値を保存する。

SQLAlchemy-Utils_
   さまざまなユーティリティ関数、SQLAlchemy用の新しいデータ型およびヘルパー

   - リスナー
   - データ型: {..., ChoiceType, CountryType, JSONType, URLType, UUIDType, ...}
   - 範囲データ型
   - 集計属性
   - デコレータを生成
   - 一般関係
   - データベースヘルパー: create_database, drop_database
   - 外鍵ヘルパー
   - ORM ヘルパー
   - ユーティリティクラス
   - モデルミックス：タイムスタンプ（作成、更新時間）

.. _SQLAlchemy-Enum34: https://github.com/spoqa/sqlalchemy-enum34
.. _SQLAlchemy-Utc: https://github.com/spoqa/sqlalchemy-utc
.. _SQLAlchemy-Utils: https://sqlalchemy-utils.readthedocs.io/


データベース移行ツール
------------------------

Alembic_
   アレムビックはSQLAlchemyと使用するための軽量データベース移行ツールです
   Python向けのSQLAlchemyデータベースツールキット。

alembic-git-revisions_
   アレムビックのマイグレーション順序をGitのコミット履歴から派生させる代わりにa
   ハードコードされた ``down_revision``、したがって並列ブランチで作成されたマイグレーション
   マージ時に衝突しないことと、``Multiple head revisions are present``
   エラーが起きなくなる。

sqlalchemy-migrate_
   Ruby on Railsのマイグレーションにインスピレーションを受けて、SQLAlchemy Migrateは提供する
   SQLAlchemyプロジェクトにおけるデータベーススキーマ変更を扱う方法。

.. _Alembic: https://alembic.readthedocs.io/
.. _alembic-git-revisions: https://github.com/Mergifyio/alembic-git-revisions
.. _sqlalchemy-migrate: https://sqlalchemy-migrate.readthedocs.io/


ダイアレクト
--------

https://docs.sqlalchemy.org/en/latest/dialects/

redshift_sqlalchemy_
   SQLAlchemy向けの `Amazon Redshift`_ ダイアレクト。

sphinxalchemy_
   SQLAlchemyのドライバがSphinx_（検索エンジン）との接続を可能にする
   SphinxQLを使用します。

GINO_
   asyncpg_ 向けの非同期PostgreSQLダイアレクトで、SQLAlchemyの
   コアサポートおよびその独自の非同期ORMインターフェース。

.. _Amazon Redshift: https://aws.amazon.com/redshift/
.. _redshift_sqlalchemy: https://github.com/binarydud/redshift_sqlalchemy
.. _Sphinx: https://sphinxsearch.com/
.. _sphinxalchemy: https://sphinxalchemy.readthedocs.io/
.. _GINO: https://github.com/python-gino/gino
.. _asyncpg: https://github.com/MagicStack/asyncpg


ドキュメント
-------------

* https://docs.sqlalchemy.org/en/latest/
* https://docs.sqlalchemy.org/en/latest/intro.html
* https://docs.sqlalchemy.org/en/latest/core/tutorial.html
* https://docs.sqlalchemy.org/en/latest/orm/tutorial.html
* https://docs.sqlalchemy.org/en/latest/glossary.html


ファイルと画像の添付
--------------------------

filedepot_
    DEPOTはウェブ上でファイルを簡単に保存および提供するためのフレームワークです
    アプリケーションのデポは、SQLAlchemyとのシンプルな統合を提供することにより
    オーエムアールに添付されたファイルを格納するためのカスタマイズされたモデルフィールドタイプ
    ドキュメントへ添付されたファイルを保存します。

SQLAlchemy-ImageAttach_
   SQLAlchemy-ImageAttachは、画像を添付するためのSQLAlchemyの拡張です
   エンティティオブジェクトに。

sqlalchemy-media_
   `SQLAlchemy-ImageAttach`を基に、リレーションの代わりにJSON型と
   SQLAlchemyのmutable機能を使用します。コンテキストごとの複数ストアにも対応します。

.. _filedepot: https://depot.readthedocs.io/
.. _SQLAlchemy-ImageAttach: https://sqlalchemy-imageattach.readthedocs.io/
.. _sqlalchemy-media: https://github.com/pylover/sqlalchemy-media


フォームとデータ検証
--------------------------

ColanderAlchemy_
   コランダーアルチェミーは、ベースにした自動生成 Colander_ スキーマを提供します
   SQLAlchemyのマップクラスについて。

   このようなColanderスキーマは、Deform_のようなライブラリと使用可能であり、助けます
   スキーマ定義の繰り返しを削除する。

Flask-Validator_
   FlaskおよびSQL-Alchemy用のデータバリデイター、モデルコンポーネントで動作
   イベントを用いて、列に無効なデータを防止する。
   拡張機能はSQLAlchemyからのイベントリスナーと互換性を持つ。

FormAlchemy_
   FormAlchemyは、HTML入力フィールドをモデルから自動生成することにより、ボイラープレートを削減する
   与えられたモデル。FormAlchemyは、どのようなHTMLコードが適しているかを試みる
   introspectionによりモデルのプロパティを確認して返されるものであり、使用準備が整ったものとして生成される
   HTMLコードが開発者のアプリケーションに適した形で入る。

WTForms-Alchemy_
   WTForms-Alchemyは、モデルベースのフォームを簡単に作成するためのWTForms_ 拡張ツールキットです。
   モデルベースのフォーム。Django ModelFormに強く影響されている。

Sprox_
   Sproxは、ウェブコンテンツ用のフォームを作成するための簡単な方法を提供します。
   自動的に生成され、カスタマイズしやすく、検証可能。Sproxも
   強力なツールを備えているため、あなたが望むようにコンテンツを表示できます
   テーブルビューアーやレコードビューアーで表示できます。Sproxは、
   ウィジェット、それらがフォームか、あるいはカスタマイズ可能なデータを持つその他のコンテンツである場合


.. _Colander: https://docs.pylonsproject.org/projects/colander/
.. _ColanderAlchemy: https://github.com/stefanofontanelli/ColanderAlchemy
.. _Deform: https://docs.pylonsproject.org/projects/deform/
.. _Flask-Validator: https://flask-validator.readthedocs.io/
.. _FormAlchemy: https://github.com/FormAlchemy/formalchemy
.. _WTForms: https://wtforms.readthedocs.io/
.. _WTForms-Alchemy: https://wtforms-alchemy.readthedocs.io/
.. _Sprox: https://sprox.org/


全文検索
-------------------

SQLAlchemy-Searchable_
   SQLAlchemy用の全文検索可能なモデル。PostgreSQLのみをサポート。

.. _SQLAlchemy-Searchable: https://sqlalchemy-searchable.readthedocs.io/

SQLAlchemy-FullText-Search_
   MySQL と SQLAlchemy でのフルテキスト検索サポート。

.. _SQLAlchemy-FullText-Search: https://github.com/mengzhuo/sqlalchemy-fulltext-search


GISと空間データベース
-------------------------

GeoAlchemy_
   GeoAlchemyは、空間データベースとの対話に必要なSQLAlchemyへの拡張を提供する。

   現在サポートされている空間データベースシステムは PostGIS_, Spatialite_,
   MySQL、Oracle、およびMS SQL Server 2008。

`GeoAlchemy 2`_
   GeoAlchemy 2 は SQLAlchemy に地理データを扱うための拡張を提供する
   空間データベース。

   GeoAlchemy 2 は PostGIS_ を中心にしています。PostGIS 1.5 および PostGIS 2 がサポートされています。
   Spatialite_もサポートされていますが、SpatialiteとGeoAlchemy 2を使用
   アプリケーション側に特定の設定が必要である。

   GeoAlchemy 2 は、その前作よりもシンプルであることを目指している、 GeoAlchemy_。
   使いやすく、維持も簡単です。

.. _GeoAlchemy: https://geoalchemy.readthedocs.io/
.. _GeoAlchemy 2: https://geoalchemy-2.readthedocs.io/
.. _PostGIS: https://postgis.net/
.. _Spatialite: https://www.gaia-gis.it/gaia-sins/


ベクトル検索
-------------

pgvector-python_
   pgvector-python は SQLAlchemy を pgvectors と本質的に動作できるように拡張する
   類似性クエリ。

pgai_
   pgai は SQLAlchemy モデルに対してベクトル埋め込みを簡単に作成できる
   かつ、任意の同期作業を担当します。Postgresに基づいて構築されています
   Postgresとpgvectorを基盤としています。

.. _pgvector-python: https://github.com/pgvector/pgvector-python
.. _pgai: https://github.com/timescale/pgai/blob/main/docs/vectorizer/python-integration.md


国際化
---------------------

SQLAlchemy-i18n_
   SQLAlchemyモデル向けの国際化拡張。


   - 翻訳を別テーブルに保存する。
   - 翻訳テーブル構造に基づいて反映
     親モデルのテーブル構造。
   - 指定されたロケールの強制をサポート。
   - 良好なパフォーマンス（プロキシディクタとその他の高度なSQLAlchemy
     パフォーマンス最適化に関する概念。

.. _SQLAlchemy-i18n: https://sqlalchemy-i18n.readthedocs.io/


プロファイラー
---------

flask_debugtoolbar_
   Flask向けのSQLAlchemyクエリ情報を持つデバッグツールバー。

pyramid_debugtoolbar_
   Pyramid用のSQLAlchemyクエリ情報を持つデバッグツールバー。

SQLTap_
   SQLTapは、クエリのプロファイリングと内省を可能にするライブラリです
   あなたのアプリケーションがSQLAlchemyを使用していること。

   SQLTap は以下の内容を理解するのに役立ちます：

   - SQLクエリが実行される回数
   - あなたのSQLクエリがどれくらいの時間かかるか
   - アプリケーションからSQLクエリを発行している場所

nplusone_
   SQLAlchemy（およびその他のPythonのオブジェクト関係マッピング）におけるn+1クエリ問題を自動検出

   nplusoneは、ラズリロードによって引き起こされる不要なクエリや、使用されないエイジロードを検出する。
   Flask-SQLAlchemyと統合。

.. _flask_debugtoolbar: https://github.com/flask-debugtoolbar/flask-debugtoolbar
.. _pyramid_debugtoolbar: https://github.com/Pylons/pyramid_debugtoolbar
.. _SQLTap: https://github.com/inconshreveable/sqltap
.. _nplusone: https://github.com/jmcarp/nplusone


クエリヘルパー
-------------

sqlakeyset_
   このライブラリはSQLAlchemy（ORMおよびコア）に対してキーマップベースのページングを実装しています。

   このライブラリはPostgreSQLおよびMariaDB/MySQLでテストされています。
   他のSQLAlchemyがサポートするデータベースと互換性がある場合、それらが``row(``構文をサポートしていることを確認してください。

.. _sqlakeyset: https://github.com/djrobstep/sqlakeyset


レシピ
-------

* https://github.com/sqlalchemy/sqlalchemy/wiki/UsageRecipes


シリアライズとデシリアライズ
---------------------------------

marshmallow-sqlalchemy_
   SQLAlchemy と marshmallow_ (de)シリアル化ライブラリの統合。

pydantic_
  Python型ヒントを使用したデータパーサーとバリデーション

sqlalchemy-dict_
  SQLAlchemyによるモデルとPython辞書との相互作用の拡張。

.. _marshmallow: https://marshmallow.readthedocs.io/
.. _marshmallow-sqlalchemy: https://marshmallow-sqlalchemy.readthedocs.io/
.. _pydantic: https://github.com/samuelcolvin/pydantic
.. _sqlalchemy-dict: https://github.com/meyt/sqlalchemy-dict


テスト
-------

charlatan_
   SQLAlchemyおよびその他のシステム向けのテストデータ管理。

factory_boy_
   SQLAlchemyでテスト用に偽データを生成し、ランダムなフィクスチャを作成
   およびその他のPython ORMシステム。

mixer_
   SQLAlchemyでテスト用に偽データを生成し、ランダムなフィクスチャを作成
   および多くのその他のPython ORMシステム。

pytest-mrt_
   アレムビックのマイグレーションが安全に逆転できるかどうかをテストするpytestプラグイン。
   実データを使用して実際にアップグレード/ダウングレードサイクルを実行し、静的
   移行ファイルに関する分析。


.. _charlatan: https://github.com/uber/charlatan
.. _factory_boy: https://github.com/FactoryBoy/factory_boy
.. _mixer: https://github.com/klen/mixer
.. _pytest-mrt: https://github.com/croc100/pytest-mrt


薄い抽象化レイヤー
-----------------

Dataset_
   PythonでSQLデータストアへの容易なデータ処理をサポート
   暗黙的なテーブル作成、大量データ読み込み、およびトランザクション。データセットも
   CSVおよびJSONのフラットファイルへのデータの凍結をサポートしています。

rdflib-sqlalchemy_
   RDFLib_ SQLAlchemy dbapi をバックエンドとして使用するストア。

PugSQL_
   ファイルに格納されたパラメータ化クエリの読み込みと実行。

SQLSoup_
   SQLSoupはPythonオブジェクトをマップするための便利な方法を提供する
   関係データベーステーブル、どの種類の宣言コードもなし。
   SQLAlchemyのORMに構築されており、極めて最小限の
   既存のデータベースへのインターフェース。

SQLModel_
   SQLModelは、PythonコードからSQLデータベースと相互作用するためのライブラリであり、Pythonオブジェクトを使用する。
   意図されているのは、直感的で使いやすく、高い互換性を持ち、堅牢であることです。SQLModelは
   Pythonの型注釈について、PydanticとSQLAlchemyによって実現されています。

Zillion_
   Zillionは、無料でオープンなデータウェアハウスおよび次元モデル化ツールである
   複数のデータソースからのデータを組み合わせて分析することができる
   シンプルなAPI。SQLを書く必要がないように書き、簡単に接続できる
   既存のデータベースインフラをSQLAlchemyを介して。

.. _Dataset: https://dataset.readthedocs.io/
.. _RDFLib: https://github.com/RDFLib/rdflib
.. _rdflib-sqlalchemy: https://github.com/RDFLib/rdflib-sqlalchemy
.. _PugSQL: https://pugsql.org/
.. _SQLSoup: https://sqlsoup.readthedocs.io/
.. _SQLModel: https://sqlmodel.tiangolo.com/
.. _Zillion: https://totalhack.github.io/zillion/


ベンダー固有の拡張
--------------------------

PostgreSQL
..........

`Flask-SQLAlchemy-PGEvents <https://github.com/shawalli/flask-sqlalchemy-pgevents>`_
   Flask拡張機能がSQLAlchemyを使用するもの
   `psycopg2-pgevents <https://github.com/shawalli/psycopg2-pgevents>`_ to
   イベントリスナーをデータベース層のトリガーに結びつけて有効にする。

sqlalchemy-crosstab-postgresql_
   SQLAlchemyにおける新しい文法を導入し、``crosstab()`` tablefuncの処理を可能にする
   (つまり、ピボットテーブル) に PostgreSQL で簡単だ。

sqlalchemy-postgres-copy_
   PostgreSQLの`COPY`をSQLAlchemyで使用するためのラッパー。大量データの効率的なブロック処理を可能にする
   インポートとエクスポート。

.. _sqlalchemy-crosstab-postgresql: https://github.com/makmanalp/sqlalchemy-crosstab-postgresql
.. _sqlalchemy-postgres-copy: https://github.com/jmcarp/sqlalchemy-postgres-copy


可視化
--------------

sadisplay_
   SQLAlchemyのスキーマを記述し、反射機能により原始的なデータベーステーブルを表示するためのシンプルなパッケージ。

sqlalchemy_schemadisplay_
   このモジュールはSQLAlchemyのモデルから画像を生成します。

eralchemy_
   ERAlchemyはデータベースまたはSQLAlchemyモデルからエンティティ関係（ER）図を生成する。

paracelsus_
   SQLAlchemyのモデルからメルマッドおよびDOT図を生成し、ドキュメントに挿入するCLIおよびライブラリ。

.. _sadisplay: https://bitbucket.org/estin/sadisplay
.. _sqlalchemy_schemadisplay: https://github.com/fschulze/sqlalchemy_schemadisplay
.. _eralchemy: https://github.com/Alexis-benoist/eralchemy
.. _paracelsus: https://github.com/tedivm/paracelsus


ウェブ
---

フレームワーク統合
......................

bottle-sqlalchemy_
   SQLAlchemyのセッションをアプリケーションに管理するための Bottle_ プラグイン。

filteralchemy_
   宣言型クエリビルダーで、フィルタパラメータを自動生成する
   モデルを用いてリクエストパラメータを解析し、marshmallow-sqlalchemy_を使用
   および webargs_ を使用します。

Flask-SQLAlchemy_
   Flask-SQLAlchemyは、Flask_への拡張で、サポートを追加する
   SQLAlchemy にあなたのアプリケーションへ。

Flask-Admin_
   Flask_ の管理インターフェースフレームワーク。
   SQLAlchemy、MongoEngine、pymongoおよびPeewee向けのフレームワークを備えています。

pyramid_sqlalchemy_
  pyramid_sqlalchemyはSQLAlchemyを使用するためのすべての必要なものを提供する
  Pyramid_ アプリケーションで利用できます。

pyramid_restler_
   pyramid_restlerは、構築に際してある程度の意見をもつツールキットである
   RESTful Webサービスおよびその上に構築されたアプリケーション
   ピラミッドフレームワーク（SQLAlchemyモデル付き）

sacrud_
   SACRUD は SQLAlchemy における CRUD インターフェースの問題を解決します。
   拡張機能を提供することで Pyramid_ (まだ) または純粋な形で使用する。
   古典的なCRUDインターフェースとは異なり、pyramid_sacrud_は上書きとを許可する
   柔軟にインターフェースをカスタマイズ可能（つまり ``django.contrib.admin`` に近いもの）。

SQLA-wrapper_
    SQLAlchemyに対する軽量かつフレームワークに依存しないラッパーで、
    セットアップと使用が本当に簡単です。

    - SQLAlchemyの構文を変更しない。
    - クエリの結果をページングできる。
    - 複数のデータベースの同時サポート。

zope.sqlalchemy_
   このパッケージの目的は、既存のパッケージの多様性を統一することである
   SQLAlchemyとZope_のトランザクション管理を統合する。
   そのため、データマネージャーを提供するだけを目指しており、試みは一切ない
   zope風にエンジンを構成する方法を定義する。

context-async-sqlalchemy_
   アシンクロナイズされたアプリケーションでセッションを扱う際に、コンテキストを使用するための便利な方法を提供する。
   エンジン、セッション、トランザクションのライフサイクル管理を担当しています。
   メインの目標は、セッションへの迅速かつ簡単なアクセスを提供することである。
   開閉の必要性を気にせず使える。


.. _Bottle: https://bottlepy.org/
.. _bottle-sqlalchemy: https://github.com/iurisilvio/bottle-sqlalchemy
.. _filteralchemy: https://github.com/jmcarp/filteralchemy
.. _Flask: https://palletsprojects.com/p/flask/
.. _Flask-SQLAlchemy: https://pythonhosted.org/Flask-SQLAlchemy/
.. _Flask-Admin: https://github.com/flask-admin/flask-admin
.. _Pyramid: https://trypyramid.com/
.. _pyramid_restler: https://github.com/wylee/pyramid_restler
.. _pyramid_sacrud: https://pyramid-sacrud.readthedocs.io/
.. _pyramid_sqlalchemy: https://pyramid-sqlalchemy.readthedocs.io/
.. _sacrud: https://sacrud.readthedocs.io/
.. _SQLA-wrapper: https://github.com/jpscaletti/sqla-wrapper
.. _webargs: https://github.com/marshmallow-code/webargs
.. _Zope: https://www.zope.org/
.. _zope.sqlalchemy: https://pypi.org/project/zope.sqlalchemy/
.. _context-async-sqlalchemy: https://github.com/krylosov-aa/context-async-sqlalchemy


その他
.....

paginate_sqlalchemy_
   このモジュールは、大量のアイテムのリストをページに分割するのに役立ちます。
   ユーザーは1ページずつ表示され、他のページに移動できる。

sandman2_
   検索とフィルタリングをサポートするcurl可能なREST HTTP APIを生成
   データベース内のすべてのテーブルとFlask-SQLAlchemyによる管理UI
   およびHTTP基本認証。

sqlalchemy_mixins_
   よくテストされたミックスインのセットで、Active Record、Django風のクエリ、ネストされたエイリアスロード、そして美しさ __repr__ をSQLAlchemyに導入します。

.. _paginate_sqlalchemy: https://github.com/Pylons/paginate_sqlalchemy
.. _sandman2: https://github.com/jeffknupp/sandman2
.. _sqlalchemy_mixins: https://github.com/absent1706/sqlalchemy-mixins
