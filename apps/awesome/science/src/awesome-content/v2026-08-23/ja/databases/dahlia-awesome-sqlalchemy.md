---
title: "Awesome SQLAlchemy"
description: "SQLAlchemyのデータ型・マイグレーション・検索・Web統合の拡張と、テスト・プロファイリング・可視化のツール。"
licenseSource: "github-dahlia-awesome-sqlalchemy-readme-rst"
---

# Awesome SQLAlchemy

SQLAlchemyはPythonのSQLツールキットとORMです。データ構造・型・マイグレーション・検索・Webフレームワークの拡張に加え、テスト、プロファイリング、可視化のツールを探せます。

## データ構造

- [bemi-sqlalchemy](https://github.com/BemiHQ/bemi-sqlalchemy) - SQLAlchemyのデータ変更を自動追跡。
  - アプリケーション固有のコンテキストとともにPostgreSQLの変更を自動追跡
  - 原文では、アプリケーション外で実行された直接SQLによる変更も含め、100%の信頼性で変更を記録すると説明
  - 原文では、実行時性能やデータベースの負荷に影響しないと説明
  - テーブル構造の変更、コードの書き換え、負荷の高いデータベーストリガーの作成が不要
  - FastAPIと統合

- [SQLAlchemy-Continuum](https://sqlalchemy-continuum.readthedocs.io/) - SQLAlchemyのバージョン管理・監査拡張。
  - 挿入・削除・更新ごとにバージョンを作成
  - 変更のない更新は保存しない
  - Alembicのマイグレーションに対応
  - オブジェクトが削除された場合も、指定したトランザクション時点のデータとすべての関連を復元可能
  - SQLAlchemyのクエリ構文で過去のトランザクションを検索可能
  - 指定したトランザクションで変更されたレコードを検索
  - 時点に応じた関連の反映：バージョンオブジェクトから、その時点の親オブジェクトの関連を参照可能
  - PostgreSQLのトリガーに基づくネイティブなバージョン管理に対応

- [sqlalchemy_mptt](https://sqlalchemy-mptt.readthedocs.io/) - [django-mptt](https://github.com/django-mptt/django-mptt/)と同様に、SQLAlchemyモデルでMPTT（修正先行順木走査）を実装し、モデルインスタンスの木構造を操作するライブラリ。

- [SQLAlchemy-ORM-tree](https://sqlalchemy-orm-tree.readthedocs.io/) - SQLAlchemyで、リレーショナルデータベースに階層データを格納する入れ子集合／修正先行順木走査方式を実装。

- [vdm](https://github.com/okfn/vdm) - バージョン管理されたドメインモデル。データベースのリビジョン・バージョン管理用Pythonライブラリ。

## データ型

- [SQLAlchemy-Enum34](https://github.com/spoqa/sqlalchemy-enum34) - 標準の`enum.Enum`値を保存するSQLAlchemy型。

- [SQLAlchemy-Utc](https://github.com/spoqa/sqlalchemy-utc) - タイムゾーン情報を持つ`datetime.datetime`値を保存するSQLAlchemy型。

- [SQLAlchemy-Utils](https://sqlalchemy-utils.readthedocs.io/) - SQLAlchemyのユーティリティ関数、データ型、ヘルパー。
  - リスナー
  - ChoiceType、CountryType、JSONType、URLType、UUIDTypeなどのデータ型
  - 範囲データ型
  - 集計属性
  - Generatesデコレーター（原文の表記）
  - 汎用的な関連
  - データベースヘルパー：create_database、drop_database
  - 外部キーヘルパー
  - ORMヘルパー
  - ユーティリティクラス
  - モデルのミックスイン：作成・更新時刻を扱うTimestamp

## データベース移行ツール

- [Alembic](https://alembic.readthedocs.io/) - PythonのSQLAlchemy Database Toolkitで使う軽量なデータベースマイグレーションツール。

- [alembic-git-revisions](https://github.com/Mergifyio/alembic-git-revisions) - 固定の`down_revision`の代わりにGitコミット履歴からAlembicのマイグレーション順序を導出。原文では、並行ブランチのマージ時にマイグレーションの衝突や`Multiple head revisions are present`エラーを避けられると説明。

- [sqlalchemy-migrate](https://sqlalchemy-migrate.readthedocs.io/) - Ruby on Railsのマイグレーションに着想を得て、SQLAlchemyプロジェクトのデータベーススキーマ変更を扱うツール。

## ダイアレクト

- [ダイアレクトのドキュメント](https://docs.sqlalchemy.org/en/latest/dialects/)

- [redshift_sqlalchemy](https://github.com/binarydud/redshift_sqlalchemy) - SQLAlchemy向けの[Amazon Redshift](https://aws.amazon.com/redshift/)ダイアレクト。

- [sphinxalchemy](https://sphinxalchemy.readthedocs.io/) - SphinxQLを使い、検索エンジン[Sphinx](https://sphinxsearch.com/)へ接続するSQLAlchemyダイアレクト。

- [GINO](https://github.com/python-gino/gino) - [asyncpg](https://github.com/MagicStack/asyncpg)向けの非同期PostgreSQLダイアレクト。SQLAlchemy Coreと独自の非同期ORMインターフェースを提供。

## ドキュメント

- [SQLAlchemyのドキュメント](https://docs.sqlalchemy.org/en/latest/)

- [概要](https://docs.sqlalchemy.org/en/latest/intro.html)

- [Coreチュートリアル](https://docs.sqlalchemy.org/en/latest/core/tutorial.html)

- [ORMチュートリアル](https://docs.sqlalchemy.org/en/latest/orm/tutorial.html)

- [用語集](https://docs.sqlalchemy.org/en/latest/glossary.html)

## ファイルと画像の添付

- [filedepot](https://depot.readthedocs.io/) - Webアプリでファイルを保存・配信するDEPOT。ORMのドキュメントに添付するファイル用のカスタムモデルフィールド型を通じてSQLAlchemyと統合。

- [SQLAlchemy-ImageAttach](https://sqlalchemy-imageattach.readthedocs.io/) - エンティティオブジェクトに画像を添付するSQLAlchemy拡張。

- [sqlalchemy-media](https://github.com/pylover/sqlalchemy-media) - [SQLAlchemy-ImageAttach](https://sqlalchemy-imageattach.readthedocs.io/)を基に、リレーションの代わりにJSON型とSQLAlchemyのmutable機能を使用。コンテキストごとの複数ストアに対応。

## フォームとデータ検証

- [ColanderAlchemy](https://github.com/stefanofontanelli/ColanderAlchemy) - SQLAlchemyのマッピング済みクラスから[Colander](https://docs.pylonsproject.org/projects/colander/)スキーマを自動生成。[Deform](https://docs.pylonsproject.org/projects/deform/)などでそのスキーマを使い、スキーマ定義の重複を減らせる。

- [Flask-Validator](https://flask-validator.readthedocs.io/) - FlaskとSQLAlchemyのデータ検証機能。モデル層でSQLAlchemyのイベントリスナーを使い、カラムへの無効なデータの格納を防ぐ。

- [FormAlchemy](https://github.com/FormAlchemy/formalchemy) - モデルからHTML入力フィールドを自動生成し、定型コードを削減。モデルのプロパティを調べ、アプリに適したHTMLを生成。

- [WTForms-Alchemy](https://wtforms-alchemy.readthedocs.io/) - モデルに基づくフォームを作る[WTForms](https://wtforms.readthedocs.io/)拡張ツールキット。Django ModelFormに着想を得ている。

- [Sprox](https://sprox.org/) - 自動生成・カスタマイズ・検証が可能なフォームを作成。テーブル・レコードビューアーで内容を表示でき、フォームや他のウィジェットにカスタマイズ可能なデータを設定できる。

## 全文検索

- [SQLAlchemy-Searchable](https://sqlalchemy-searchable.readthedocs.io/) - 全文検索可能なSQLAlchemyモデル。PostgreSQLのみに対応。

- [SQLAlchemy-FullText-Search](https://github.com/mengzhuo/sqlalchemy-fulltext-search) - MySQLとSQLAlchemyによる全文検索。

## GISと空間データベース

- [GeoAlchemy](https://geoalchemy.readthedocs.io/) - 空間データベース向けSQLAlchemy拡張。固定原文での対応システムは[PostGIS](https://postgis.net/)、[Spatialite](https://www.gaia-gis.it/gaia-sins/)、MySQL、Oracle、MS SQL Server 2008。

- [GeoAlchemy 2](https://geoalchemy-2.readthedocs.io/) - [PostGIS](https://postgis.net/)を中心とする空間データベース向けSQLAlchemy拡張。原文ではPostGIS 1.5、PostGIS 2、[Spatialite](https://www.gaia-gis.it/gaia-sins/)に対応し、Spatialiteではアプリ側の個別設定が必要。[GeoAlchemy](https://geoalchemy.readthedocs.io/)より利用・保守を簡単にすることを目指す。

## ベクトル検索

- [pgvector-python](https://github.com/pgvector/pgvector-python) - SQLAlchemyを拡張し、pgvectorの類似度クエリを扱えるようにするライブラリ。

- [pgai](https://github.com/timescale/pgai/blob/main/docs/vectorizer/python-integration.md) - PostgreSQLとpgvectorを基盤に、SQLAlchemyモデルのベクトル埋め込みを作成し、同期を管理。

## 国際化

- [SQLAlchemy-i18n](https://sqlalchemy-i18n.readthedocs.io/) - SQLAlchemyモデルの国際化拡張。
  - 翻訳を別テーブルに保存
  - 親モデルのテーブル構造を基に翻訳テーブルの構造を反映
  - 指定したロケールを強制可能
  - プロキシ辞書やSQLAlchemyの他の機能で性能を最適化

## プロファイラー

- [flask_debugtoolbar](https://github.com/flask-debugtoolbar/flask-debugtoolbar) - SQLAlchemyのクエリ情報を表示するFlask用デバッグツールバー。

- [pyramid_debugtoolbar](https://github.com/Pylons/pyramid_debugtoolbar) - SQLAlchemyのクエリ情報を表示するPyramid用デバッグツールバー。

- [SQLTap](https://github.com/inconshreveable/sqltap) - アプリがSQLAlchemyで発行するクエリをプロファイル・調査するライブラリ。
  - SQLクエリの実行回数
  - SQLクエリにかかる時間
  - アプリ内でSQLクエリを発行している箇所

- [nplusone](https://github.com/jmcarp/nplusone) - SQLAlchemyや他のPython ORMでn+1クエリ問題を自動検出。遅延読み込みによる不要なクエリと、使われない事前読み込みを検出し、Flask-SQLAlchemyと統合。

## クエリヘルパー

- [sqlakeyset](https://github.com/djrobstep/sqlakeyset) - SQLAlchemy ORMとCoreのkeyset方式のページング。原文ではPostgreSQLとMariaDB/MySQLでテスト済みで、`row(`構文に対応する他のSQLAlchemy対応データベースでも動作する見込みと説明。

## レシピ

- [SQLAlchemyの利用レシピ](https://github.com/sqlalchemy/sqlalchemy/wiki/UsageRecipes)

## シリアライズとデシリアライズ

- [marshmallow-sqlalchemy](https://marshmallow-sqlalchemy.readthedocs.io/) - シリアライズ・デシリアライズのライブラリ[marshmallow](https://marshmallow.readthedocs.io/)とSQLAlchemyを統合。

- [pydantic](https://github.com/samuelcolvin/pydantic) - Pythonの型ヒントによるデータの解析・検証。

- [sqlalchemy-dict](https://github.com/meyt/sqlalchemy-dict) - Pythonの辞書を通じてモデルを操作するSQLAlchemy拡張。

## テスト

- [charlatan](https://github.com/uber/charlatan) - SQLAlchemyなどのフィクスチャ管理。

- [factory_boy](https://github.com/FactoryBoy/factory_boy) - SQLAlchemyや他のPython ORMのテスト向けにダミーデータとランダムなフィクスチャを生成。

- [mixer](https://github.com/klen/mixer) - SQLAlchemyや他のPython ORMのテスト向けにダミーデータとランダムなフィクスチャを生成。

- [pytest-mrt](https://github.com/croc100/pytest-mrt) - Alembicのマイグレーションが安全に元へ戻せるか検査するpytestプラグイン。実データによるupgrade/downgradeサイクルと、マイグレーションファイルの静的解析を実行。

## 薄い抽象化レイヤー

- [Dataset](https://dataset.readthedocs.io/) - PythonでSQLデータを操作。暗黙的なテーブル作成、一括読み込み、トランザクション、CSV・JSONのフラットファイルへのデータ固定に対応。

- [rdflib-sqlalchemy](https://github.com/RDFLib/rdflib-sqlalchemy) - SQLAlchemy dbapiをバックエンドとする[RDFLib](https://github.com/RDFLib/rdflib)ストア。

- [PugSQL](https://pugsql.org/) - ファイルに保存されたパラメーター付きクエリを読み込み・実行。

- [SQLSoup](https://sqlsoup.readthedocs.io/) - 宣言コードを書かずにPythonオブジェクトとリレーショナルデータベースのテーブルを対応付ける。SQLAlchemy ORMを基に、既存データベースへの最小限のインターフェースを提供。

- [SQLModel](https://sqlmodel.tiangolo.com/) - PydanticとSQLAlchemyを使い、Pythonのオブジェクトと型注釈を通じてSQLデータベースを操作するライブラリ。

- [Zillion](https://totalhack.github.io/zillion/) - 無料でオープンなデータウェアハウス・次元モデリングツール。APIで複数のデータソースを結合・分析し、SQLを生成。SQLAlchemyで既存のデータベース基盤へ接続。

## ベンダー固有の拡張

### PostgreSQL

- [Flask-SQLAlchemy-PGEvents](https://github.com/shawalli/flask-sqlalchemy-pgevents) - SQLAlchemyと[psycopg2-pgevents](https://github.com/shawalli/psycopg2-pgevents)を使い、データベース層のトリガーに結び付くイベントリスナーを有効にするFlask拡張。

- [sqlalchemy-crosstab-postgresql](https://github.com/makmanalp/sqlalchemy-crosstab-postgresql) - PostgreSQLの`crosstab()` tablefunc（ピボットテーブル）を扱うSQLAlchemy構文。

- [sqlalchemy-postgres-copy](https://github.com/jmcarp/sqlalchemy-postgres-copy) - SQLAlchemyでPostgreSQLの`COPY`を使うラッパー。データの一括インポート・エクスポートに対応。

## 可視化

- [sadisplay](https://bitbucket.org/estin/sadisplay) - SQLAlchemyスキーマを記述し、リフレクションでデータベースのテーブルを表示するパッケージ。

- [sqlalchemy_schemadisplay](https://github.com/fschulze/sqlalchemy_schemadisplay) - SQLAlchemyモデルから画像を生成。

- [eralchemy](https://github.com/Alexis-benoist/eralchemy) - データベースまたはSQLAlchemyモデルから実体関連（ER）図を生成。

- [paracelsus](https://github.com/tedivm/paracelsus) - SQLAlchemyモデルからMermaid・DOTの図を生成し、ドキュメントに挿入するCLIとライブラリ。

## ウェブ

### フレームワーク統合

- [bottle-sqlalchemy](https://github.com/iurisilvio/bottle-sqlalchemy) - アプリのSQLAlchemyセッションを管理する[Bottle](https://bottlepy.org/)プラグイン。

- [filteralchemy](https://github.com/jmcarp/filteralchemy) - モデルからフィルターパラメーターを自動生成し、[marshmallow-sqlalchemy](https://marshmallow-sqlalchemy.readthedocs.io/)と[webargs](https://github.com/marshmallow-code/webargs)でリクエストパラメーターを解析する宣言型クエリビルダー。

- [Flask-SQLAlchemy](https://pythonhosted.org/Flask-SQLAlchemy/) - アプリにSQLAlchemyのサポートを追加する[Flask](https://palletsprojects.com/p/flask/)拡張。

- [Flask-Admin](https://github.com/flask-admin/flask-admin) - [Flask](https://palletsprojects.com/p/flask/)の管理画面フレームワーク。SQLAlchemy、MongoEngine、pymongo、Peewee向けのひな形生成機能を提供。

- [pyramid_sqlalchemy](https://pyramid-sqlalchemy.readthedocs.io/) - [Pyramid](https://trypyramid.com/)アプリでSQLAlchemyを利用するための統合機能。

- [pyramid_restler](https://github.com/wylee/pyramid_restler) - PyramidとSQLAlchemyモデルでRESTful Webサービス・アプリを構築する、特定の設計方針を持つツールキット。

- [sacrud](https://sacrud.readthedocs.io/) - SQLAlchemyのCRUDインターフェース。[Pyramid](https://trypyramid.com/)拡張としても単体でも利用でき、[pyramid_sacrud](https://pyramid-sacrud.readthedocs.io/)で`django.contrib.admin`に近い上書き・柔軟なカスタマイズが可能。

- [SQLA-wrapper](https://github.com/jpscaletti/sqla-wrapper) - フレームワークに依存しない軽量なSQLAlchemyラッパー。
  - SQLAlchemyの構文を変更しない
  - クエリ結果のページングに対応
  - 複数のデータベースに同時対応

- [zope.sqlalchemy](https://pypi.org/project/zope.sqlalchemy/) - データマネージャーを通じてSQLAlchemyと[Zope](https://www.zope.org/)のトランザクション管理を統合。Zope固有のエンジン設定方法は定義しない。

- [context-async-sqlalchemy](https://github.com/krylosov-aa/context-async-sqlalchemy) - コンテキストを使い、非同期アプリのエンジン・セッション・トランザクションのライフサイクルを管理。不要な場面で開閉処理を手動管理せずにセッションへアクセスできる。

### その他

- [paginate_sqlalchemy](https://github.com/Pylons/paginate_sqlalchemy) - 大量の項目をページに分割し、1ページずつ閲覧・移動できるようにするモジュール。

- [sandman2](https://github.com/jeffknupp/sandman2) - データベースの全テーブルに対し、検索・フィルタリングとcurlでのアクセスに対応するREST HTTP APIを生成。Flask-SQLAlchemyとHTTP Basic認証による管理UIも提供。

- [sqlalchemy_mixins](https://github.com/absent1706/sqlalchemy-mixins) - SQLAlchemyにActive Record、Django風クエリ、入れ子の事前読み込み、`__repr__`による表現を提供するミックスイン。
