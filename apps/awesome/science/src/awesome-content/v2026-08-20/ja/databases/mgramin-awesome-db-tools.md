---
title: "Awesome Database Tools"
description: "Database Toolsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-mgramin-awesome-db-tools-readme-md"
---

# Awesome Database Tools

Database Toolsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
- [IDE](#ide)
- [GUI](#gui)
- [CLI](#cli)
- [スキーマ](#schema)
  - [変更管理](#changes)
  - [コード生成](#code-generation)
  - [図表](#diagrams)
  - [ドキュメント化](#documentations)
  - [設計](#design)
  - [サンプル](#samples)
- [API](#api)
- [アプリケーションプラットフォーム](#application-platforms)
- [バックアップ](#backup)
- [クローン](#cloning)
- [監視・統計・パフォーマンス](#monitoringstatisticsperfomance)
  - [Prometheus](#prometheus)
  - [Zabbix](#zabbix)
- [テスト](#testing)
- [高可用性・フェイルオーバー・シャーディング](#hafailoversharding)
- [Kubernetes](#kubernetes)
- [設定チューニング](#configuration-tuning)
- [DevOps](#devops)
- [レポート](#reporting)
- [ディストリビューション](#distributions)
- [セキュリティ](#security)
- [SQL](#sql)
  - [解析](#analyzers)
  - [コード生成](#code-generators)
  - [拡張機能](#extensions)
  - [フレームワーク](#frameworks)
  - [フォーマッター](#formatters)
  - [ゲーム](#games)
  - [パーサー](#parsers)
  - [SQLの先へ](#über-sql)
  - [Language Server Protocol](#language-server-protocol)
  - [学習](#learning)
  - [実行計画](#plan)
  - [スクリプト](#scripts)
- [データ](#data)
  - [カタログ](#catalog)
  - [リネージュ](#lineage) 
  - [生成・マスキング・サブセット化](#generationmaskingsubsetting)
  - [データプロファイラー](#data-profilers)
  - [レプリケーション](#replication) 
  - [比較](#compare) 
- [論文](#papers)
- [機械学習](#machine-learning)

## IDE
- [AnySQL Maestro](https://www.sqlmaestro.com/products/anysql/maestro) - データベース管理、制御および開発に最適なマルチ用途の管理ツール
- [Aqua Data Studio](https://www.aquafold.com/aquadatastudio) - データベース開発者、DBA、アナリスト向けの生産性ソフトウェア
- [Coginiti Pro](https://www.coginiti.co/products/coginiti-pro/) - アナリストおよび分析エンジニア向けの現代的なIDE。強力なスクリプトおよびグリッド機能を備えています
- [Database .net](http://fishcodelib.com/Database.htm) - 20以上のデータベースに対応するマルチデータベース管理ツール
- [Database Workbench](https://www.upscene.com/database_workbench/) - Oracle、SQL Server、PostgreSQL、MySQL、MariaDB、Firebird、InterBase、SQLiteおよびNexusDBのデータベース設計、開発およびテストに必要な完全なIDE
- [DataGrip](https://www.jetbrains.com/datagrip) - JetBrainsによるデータベースおよびSQL用のクロスプラットフォームIDE
- [DataStation](https://github.com/multiprocessio/datastation) - すべてのデータベース、ファイル、APIからデータを簡単にクエリし、スクリプトおよび可視化
- [DBeaver](https://github.com/dbeaver/dbeaver) - 無料のユニバーサルデータベースマネージャーおよびSQLクライアント
- [dbForge Edge](https://www.devart.com/dbforge/edge/) - MySQL、MariaDB、SQL Server、Oracle、PostgreSQLデータベースおよびさまざまなクラウドサービスの開発、設計、管理、運用に向けたマルチデータベースソリューション
- [dbForge Studio for MySQL](https://www.devart.com/dbforge/mysql/studio) - MySQLおよびMariaDBデータベースの開発、管理および運用に向けたユニバーサルIDE
- [dbForge Studio for Oracle](https://www.devart.com/dbforge/oracle/studio) - Oracleの管理、運用および開発に向けた強力なIDE
- [dbForge Studio for PostgreSQL](https://www.devart.com/dbforge/postgresql/studio) - データベースおよびオブジェクトの管理および開発に向けたGUIツール
- [dbForge Studio for SQL Server](https://www.devart.com/dbforge/sql/studio) - SQL Serverの開発、管理、運用、データ分析およびレポート作成に向けた強力な統合開発環境
- [DBHawk](https://www.datasparc.com/) - Datasparcは、データベースセキュリティ、データベース管理、データベースガバナンスおよびデータ分析をすべて1つのソリューションで提供
- [dbKoda](https://github.com/SouthbankSoftware/dbkoda) - MongoDB向けの現代的な（JavaScript/Electronフレームワーク）オープンソースIDE。MongoDBデータベースの開発、運用およびパフォーマンスチューニングをサポートする機能を備えています
- [IBExpert](http://www.ibexpert.net/ibe) - FirebirdおよびInterBase向けの包括的なGUIツール
- [HeidiSQL](https://github.com/HeidiSQL/HeidiSQL) - MySQL、MSSQLおよびPostgreSQLの管理に向けた軽量クライアント（Delphiで構成）
- [Kangaroo](https://github.com/dbkangaroo/kangaroo) - Windows／macOS／Linux上で利用可能なAIを活用したSQLクライアントおよび管理ツール（SQLite／MySQL／PostgreSQLなど）。テーブル設計、クエリ、モデル、同期、エクスポート／インポートなどに対応。開発者に優しい使い勝手を重視しています
- [KeepTool](https://keeptool.com) - Oracleデータベース開発者、管理者および高度なアプリケーションユーザー向けのプロフェッショナルツールセット
- [MySQL Workbench](https://www.mysql.com/products/workbench) - データベースアーキテクト、開発者、DBA向けの統一された視覚ツール
- [Navicat](https://www.navicat.com/en/products#navicat) - MySQL、MariaDB、SQL Server、Oracle、PostgreSQL、SQLiteのすべてのデータベースに同時に接続できるデータベース開発ツール
- [Oracle SQL Developer](http://www.oracle.com/technetwork/developer-tools/sql-developer) - 無料で提供される統合開発環境。クラウドおよび従来の環境において、Oracleデータベースの開発と管理を簡便にします
- [pgAdmin](https://www.pgadmin.org) - 世界で最も先進的なオープンソースデータベースであるPostgreSQL向けに、最も人気があり機能が豊富なオープンソース管理および開発プラットフォーム
- [pgAdmin3](https://www.bigsql.org/pgadmin3) - pgAdmin3への長期サポート
- [PL/SQL Developer](https://www.allroundautomations.com/products/pl-sql-developer) - Oracleデータベース用のストレージプログラム単位の開発に特化したIDE
- [PostgreSQL Maestro](https://www.sqlmaestro.com/products/postgresql/maestro) - PostgreSQL向けの完全で強力なデータベース管理、管理および開発ツール
- [Querybook](https://github.com/pinterest/querybook) - Pinterestが開発したオープンソースBig DataクエリUI。テーブルメタデータとシンプルなノートブックIDEインターフェースを組み合わせたもの
- [Slashbase](https://github.com/slashbaseide/slashbase) - あなたのデータベースに接続し、データを閲覧し、複数のSQLコマンドを実行したり、チームと共有するSQLクエリをブラウザ上で行うオープンソース協働IDE
- [Sql Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/sql-server-management-studio-ssms) - SQL ServerおよびAzure SQL DatabaseのすべてのSQLインフラストラクチャを管理できる統合環境
- [Toad](https://www.quest.com/toad/) - 開発者、管理者、データアナリスト向けのトップクラスデータベースソリューション。複雑なデータベース変更を1つのデータベース管理ツールで管理できます
- [Toad Edge](https://www.toadworld.com/products/toad-edge) - MySQLおよびPostgreSQL向けの簡易データベース開発ツール
- [TOra](https://github.com/tora-tool/tora) - Oracle、MySQLおよびPost及PostgreSQLデータベース向けのオープンソースSQL IDE
- [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Valentina DB、MySQL、MariaDB、PostgreSQLおよびSQLiteデータベースの作成、管理、クエリ、探索を無料で行えます
- [WebDB](https://webdb.app) - 効率的なデータベースIDE。サーバー発見、ERD、データ生成、AI、NoSQL構造マネージャー、データベースバージョン管理など多数の機能を備えています


## GUI
- [Adminer](https://github.com/vrana/adminer) - 1つのPHPファイルでデータベース管理
- [Another Redis Desktop Manager](https://github.com/qishibo/AnotherRedisDesktopManager) - Mac、Linux、Windows、Homebrew、Snap、wingetなど、さまざまなプラットフォームで利用可能な無料オープンソースRedisマネージャー
- [Antares SQL](https://github.com/antares-sql/antares) - Mac、Linux、Windows向けの現代的で高速かつ生産性を重視したSQLクライアント。UXに焦点を当てています
- [Azure Data Studio](https://github.com/microsoft/azuredatastudio) - Windows、macOS、LinuxからSQL Server、PostgreSQL、Azure SQL DBおよびSQL DWとの対話が可能なデータ管理ツール
- [Beekeeper Studio](https://github.com/beekeeper-studio/beekeeper-studio) - プライバシーへのコミットメントを掲げるオープンソースSQLエディタおよびデータベースマネージャー
- [Clidey WhoDB](https://github.com/clidey/whodb) - すべてのSQL、NoSQL、キャッシュ、キュー向けの軽量データベースエクスプローラ。次世代UXを備えています
- [DbGate](https://github.com/dbgate/dbgate) - MySQL、PostgreSQL、SQL Server、MongoDB、SQLiteなどへのデータベースマネージャ。Windows、Linux、Mac、またはウェブアプリとして動作。
- [DB Lens](https://github.com/dblens/app) - オープンソースPostgreSQL用GUI - 自動ER図、内部DBの洞察、ディスク使用量、パフォーマンスメトリクス、インデックス使用状況、順次スキャン回数など。
- [DbVisualizer](https://www.dbvis.com) - 開発者、DBA、アナリスト向けのユニバーサルデータベースツール。
- [JackDB](https://www.jackdb.com) - データのどこにあっても、直接SQLでアクセス可能。
- [Jailer](https://github.com/Wisser/Jailer) - データベースサブセットと関係データのブラウジングツール／クライアント。
- [Malewicz](https://github.com/mgramin/malewicz) - DBスキーマの探索とパフォーマンス分析用のウェブクライアント。しかし、元々はハッキングと拡張用に開発された。
- [MissionKontrol](https://www.missionkontrol.io) - 非技術ユーザー向けの完全なユーザー権限を備えた現代的なドラッグ＆ドロップ管理パネル／クライアント。
- [ocelotgui](https://github.com/ocelot-inc/ocelotgui) - MySQL、MariaDB、Tarantool向け。Linux向けに開発されたが、Windowsでも動作可能。
- [OmniDB](https://github.com/OmniDB/OmniDB) - データベース管理用のウェブツール。
- [Pgweb](https://github.com/sosedoff/pgweb) - PostgreSQL用のウェブベースデータベースブラウザ。Goで構成されており、macOS、Linux、Windowsで動作。
- [phpLiteAdmin](https://www.phpliteadmin.org) - PHPで構成されたウェブベースSQLiteデータベース管理ツール。SQLite3およびSQLite2に対応。
- [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - MySQLおよびMariaDB向けのウェブインターフェース。
- [psequel](http://www.psequel.com) - PostgreSQLの一般的なタスクを迅速に実行できる、シンプルで洗練されたインターフェースを提供。
- [PopSQL](https://popsql.com) - チーム向けの現代的な協働SQLエディタ。
- [Postico](https://eggerapps.at/postico) - Mac向けの現代的なPostgreSQLクライアント。
- [Robo 3T](https://github.com/Studio3T/robomongo) - シェル中心のクロスプラットフォームMongoDB管理ツール。
- [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace) - macOS向けのMySQL/MariaDBデータベース管理。
- [Sequel Pro](https://github.com/sequelpro/sequelpro) - MySQLおよびMariaDBデータベースとの作業に最適な高速かつ使いやすいMacデータベース管理アプリ。
- [SQLite Expert](http://www.sqliteexpert.com/index.html) - グラフィカルインターフェースはすべてのSQLite機能をサポート。
- [sqlite-tui](https://github.com/mathaou/sqlite-tui) - Goで構成されたSQLiteデータベース閲覧用のTUI。
- [sqlpad](https://github.com/rickbergfalk/sqlpad) - WebベースのSQLエディタを、あなたの独自のプライベートクラウドで実行します。
- [SQLPro](https://www.macpostgresclient.com) - macOS用のシンプルかつ強力なPostgreSQLマネージャー。
- [SQuirreL](https://sourceforge.net/projects/squirrel-sql) - JDBCに準拠するデータベースの構造を確認し、テーブル内のデータをブラウズしたり、SQLコマンドを実行したりできるJavaによるグラフィカルSQLクライアント。
- [SQLTools](https://github.com/mtxr/vscode-sqltools) - VSCode用のデータベースマネージャー。
- [SQLyog](https://www.webyog.com/product/sqlyog) - 最も完全で使いやすいMySQL用GUI。
- [Tabix](https://github.com/tabixio/tabix) - Clickhouse向けのSQLエディタおよびオープンソースのシンプルなビジネスインテリジェンスツール。
- [TablePlus](https://github.com/TablePlus/TablePlus) - MySQL、PostgreSQL、SQLiteなど、関係データベース向けの現代的、ネイティブで親しみやすいGUIツール。
- [TeamPostgreSQL](http://www.teampostgresql.com) - PostgreSQL Web管理GUI — どこからでもPostgreSQLデータベースにアクセス可能で、豊かな高速AJAXウェブインターフェースを備えています。
- [Query.me](https://query.me) - ノートブック形式の協働SQLエディタ。JINJAを使ってクエリ結果を参照し、データを可視化し、実行とエクスポートのスケジュールを設定できます。


## CLI
- [ipython-sql](https://github.com/catherinedevlin/ipython-sql) - IPythonまたはIPythonノートブック内でSQLコマンドを実行するためのデータベース接続。
- [iredis](https://github.com/laixintao/iredis) - Redis用のCLIツールで、自動補完と文法ハイライト機能を備えています。
- [pgcenter](https://github.com/lesovsky/pgcenter) - PostgreSQL向けのトップのような管理ツール。
- [pg_activity](https://github.com/julmon/pg_activity) - PostgreSQLサーバーのアクティビティモニタリングに使えるトップのようなアプリケーション。
- [pg_top](https://github.com/markwkm/pg_top) - PostgreSQL向けのトップ。
- [pspg](https://github.com/okbob/pspg) - PostgreSQL用のページャー。
- [diesel-guard](https://github.com/ayarotsky/diesel-guard) - 危険なPostgreSQLのマイグレーションパターンをチェックするリントツール。PostgreSQL SQLファイルとDieselおよびSQLxを使用するプロジェクトに自然に統合されます。
- [SQLcl](http://www.oracle.com/technetwork/developer-tools/sqlcl/overview/index.html) - Oracle SQL Developer Command Line（SQLcl）は、Oracle Database向けの無料コマンドラインインターフェースです。
- [sqlite-utils](https://github.com/simonw/sqlite-utils) - SQLiteデータベースファイルを操作するCLIツール — データの挿入、クエリの実行、インデックスの作成、フルテキスト検索の設定など。
- [SQLLine](https://github.com/julianhyde/sqlline) - JDBCを介して関係データベースにSQLを実行するためのコマンドラインシェル。
- [usql](https://github.com/xo/usql) - PostgreSQL、MySQL、Oracle Database、SQLite3、Microsoft SQL Server、およびその他の多くのデータベース（NoSQLや非関係データベースを含む）に適用可能なユニバーサルコマンドラインインターフェース！

### dbcli
- [athenacli](https://github.com/dbcli/athenacli) - AWS Athenaサービス用のCLIツールで、自動補完と文法ハイライトが可能
- [litecli](https://github.com/dbcli/litecli) - SQLiteデータベース用のCLIツールで、自動補完と文法ハイライトが可能
- [mssql-cli](https://github.com/dbcli/mssql-cli) - SQL Server用のコマンドラインクライアントで、自動補完と文法ハイライトが可能
- [mycli](https://github.com/dbcli/mycli) - MySQL用のテอรミナルクライアントで、自動補完と文法ハイライトが可能
- [pgcli](https://github.com/dbcli/pgcli) - PostgreSQL用のCLIツールで、自動補完と文法ハイ及が可能
- [vcli](https://github.com/dbcli/vcli) - Vertica用のCLIツールで、自動補完と文法ハイライトが可能


## スキーマ

### 変更管理
- [2bass](https://github.com/CourseOrchestra/2bass) - IDEMPOTENT DDLスクリプトの概念を活用したデータベース設定をコードとして管理するツール
- [Atlas](https://github.com/ariga/atlas) - データベーススキーマの確認と変更を適用するツール
- [Bytebase](https://github.com/bytebase/bytebase) - チーム向けのウェブベース、ゼロ設定、依存関係なしのデータベーススキーマ変更およびバージョン管理ツール
- [flyway](https://github.com/flyway/flyway) - データベース移行ツール
- [gh-ost](https://github.com/github/gh-ost) - MySQL用のオンラインスキーマ移行
- [liquibase](https://github.com/liquibase/liquibase) - データベーススキーマ変更の追跡・管理・適用を行うデータベースに依存しないライブラリ
- [migra](https://github.com/djrobstep/migra) - diffに似たものだが、PostgreSQLスキーマ用
- [node-pg-migrate](https://github.com/salsita/node-pg-migrate) - PostgreSQL専用のNode.jsデータベース移行管理ツール（他のSQL標準に準拠したデータベースにも使用可能 - 例：CockroachDB）
- [pg-osc](https://github.com/shayonj/pg-osc) - PostgreSQLでのゼロダウンタイムスキーマ変更およびバックフィルを簡単に実行できるCLIツール
- [Prisma Migrate](https://github.com/prisma/migrate) - データベーススキーマの変更を、宣言的なデータモデリング構文で記述する宣言型データベーススキーマ移行ツール
- [Pyrseas](https://github.com/perseas/Pyrseas) - PostgreSQLデータベーススキーマをYAMLとして記述するためのユーティリティを提供
- [Reshape](https://github.com/fabianlindfors/reshape) - Postgres向けに使いやすく、ゼロダウンタイムスキーマ移行ツール
- [SchemaHero](https://github.com/schemahero/schemahero) - 宣言型データベーススキーマ管理用のKubernetesオペレーター（データベーススキーマ向けのGitOps）
- [Skeema](https://github.com/skeema/skeema) - MySQLおよびMariaDB向けの宣言型純SQLスキーマ管理システム、シャードおよび外部オンラインスキーマ変更ツールに対応
- [Sqitch](https://github.com/sqitchers/sqitch) - フレームワークなし開発向け、データベース本体に適合した変更管理と信頼性の高いデプロイメント
- [sqldef](https://github.com/k0kubun/sqldef) - MySQL、PostgreSQLなどへの自社データベーススキーマ管理の無害性を保証
- [yuniql](https://github.com/rdagumampan/yuniql) - もう一つのスキーマバージョン管理と移行ツール。.NET Core 3.0+で構築され、おそらくより良いものになるはず

### コード生成
- [ddl-generator](https://github.com/catherinedevlin/ddl-generator) - テーブルデータからSQL DDL（データ定義言語）を推論
- [scheme2ddl](https://github.com/qwazer/scheme2ddl) - OracleスキーマをDDL初期スクリプトセットにエクスポートするコマンドラインツール。不要な情報をフィルタ、DDLを別ファイルに分離、出力の整形を可能に

### 図表
- [Azimutt](https://github.com/azimuttapp/azimutt) - エンティティ関係図（ERD）の可視化ツール。さまざまなフィルタと入力機能を備え、データベーススキーマの理解を支援
- [ChartDB](https://github.com/chartdb/chartdb) - 無料かつオープンソースのデータベース図面編集ツール。1つのクエリでデータベースを可視化・設計
- [DrawDB](https://github.com/drawdb-io/drawdb) - 無料、シンプルで直感的なオンラインデータベース設計ツールおよびSQL生成器
- [DrawSQL](https://drawsql.app) - SQLインポート、AI生成、リアルタイムチームコラボレーションを備えたオンラインデータベーススキーマ図編集ツール
- [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - エンティティ関係図（ERD）生成ツール
- [ERD Lab](https://www.erdlab.io/) - 開発者向けの無料かつオープンソースのエンティティ関係図（ERD）ツール
- [Liam ERD](https://github.com/liam-hq/liam) - データベースおよびORMから美しい、読みやすいエンティティ関係図（ERD）を生成するオープンソースツール
- [QuickDBD](https://www.quickdatabasediagrams.com/) - データベース図を迅速に描くためのシンプルなオンラインツール

### ドキュメント化
- [dbdocs](https://dbdocs.io/) - DSLコードを使ってウェブベースのデータベースドキュメントを作成
- [DBML](https://github.com/holistics/dbml) - データベース構造を定義および記述するためのデータベースマーカーランゲージ（DBML）
- [SchemaCrawler](https://github.com/schemacrawler/SchemaCrawler) - 無料でオープンなデータベーススキーマの発見および理解ツール
- [Schema Spy](https://github.com/schemaspy/schemaspy) - データベースをHTMLドキュメントに変換し、エンティティ関係図を含む
- [tbls](https://github.com/k1LoW/tbls) - Goで書かれたCI対応のデータベースドキュメントツール

### 設計
- [Database Design](https://github.com/alextanhongpin/database-design) - 堅牢なデータベーススキーマ設計に役立つヒント
- [DBDiagram](https://dbdiagram.io) - コードをただ書くだけでER図を描くための無料かつシンプルなツール
- [DbSchema](https://dbschema.com/) - 出荷済みスキーマ管理、スキーマドキュメンテーション、チームでの設計、複数データベースへのデプロイに最適なユニバーサルデータベース設計ツール。DbSchemaはクエリの作成と実行、データの探索、データの生成、レポートの作成といった機能を備えています。
- [ERBuilder Data Modeler](https://soft-builder.com/erbuilder-data-modeler) - 高品質なデータモデルを簡単に作成できるデータモデリングソフトウェア。データモデラーおよびデータアーキテクト向けの完全なデータモデリングソリューションです。
- [Moon Modeler](https://www.datensen.com) - NoSQLおよび関係データベースに適用可能なデータモデリングツール。Windows、Linux、macOSで利用可能です。
- [Navicat Data Modeler](https://www.navicat.com/en/products/navicat-data-modeler) - 強力かつコストパフォーマンスの高いデータ設計ツールで、概念的、論理的、物理的なデータモデルの構築をサポートします。
- [Oracle SQL Developer Data Modeler](http://www.oracle.com/technetwork/developer-tools/datamodeler/overview/index.html) - 無料のグラフィカルツールで、生産性を高め、データモデリング作業を簡素化します。
- [pgmodeler](https://github.com/pgmodeler/pgmodeler) - PostgreSQL向けに設計されたデータモデリングツール。
- [WWW SQL Designer](https://github.com/ondras/wwwsqldesigner) - オンラインSQL用の図面作成ツール。

### サンプル
- [Oracle Database Sample Schemas](https://github.com/oracle/db-sample-schemas) - オラクルデータベース用のサンプルスキーマ


## API
Building API for your Data
- [Datasette](https://github.com/simonw/datasette) - データの探索と公開を行うツール。
- [DreamFactory](https://github.com/dreamfactorysoftware/dreamfactory) - モバイル、ウェブ、IoTアプリケーション向けのオープンソースREST APIバックエンド。
- [Graphweaver](https://github.com/exogee-technology/graphweaver) - 複数のデータソースを1つのGraphQL APIに変換します。
- [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - PostgreSQL上で、細かいアクセス制御を備えた高速で即時実行可能なGraphQL APIを提供し、データベースイベント時にウェブ훅をトリガーします。
- [JdbcREST](https://github.com/synthesized-io/jdbcrest/) - JDBCをバックエンドとする任意のデータベース向けのREST API。Javaで書かれたPostgRESTのクローン。
- [Oracle REST Data Services](http://www.oracle.com/technetwork/developer-tools/rest-data-services) - 中間層のJavaアプリケーション。ORDSはHTTP(S)メソッド（GET、POST、PUT、DELETEなど）をデータベースのトランザクションにマッピングし、結果をJSON形式で返します。
- [Prisma](https://github.com/prismagraphql/prisma) - あなたのデータベースをリアルタイムのGraphQL APIに変換します。
- [PostGraphile](https://github.com/graphile/postgraphile) - PostGraphileを既存のPostgreSQLデータベースに接続することで、即座にGraphQL APIサーバーを立ち上げます。
- [PostgREST](https://github.com/PostgREST/postgrest) - 任意のPostgreSQLデータベース向けのREST API。
- [prest](https://github.com/prest/prest) - Goで書かれた任意のデータベースからRESTフルAPIを提供する方法。
- [Remult](https://github.com/remult/remult) - 細かいアクセス制御を備えたREST APIによるデータベースのエンドツーエンド型安全なCRUD操作。
- [restSQL](https://github.com/restsql/restsql) - JavaおよびHTTP APIを用いたSQL生成ツール。シンプルなRESTful HTTP APIを用いてXMLまたはJSONでシリアライズします。
- [resquel](https://github.com/formio/resquel) - あなたのSQLデータベースを簡単にREST APIに変換します。
- [sandman2](https://github.com/jeffknupp/sandman2) - legacyデータベースに対して自動的にRESTフルAPIサービスを生成します
- [soul](https://github.com/thevahidal/soul) - 自動SQLite RESTフルおよびリアルタイムAPIサーバー
- [VulcanSQL](https://github.com/Canner/vulcan-sql) - テンプレートSQLを書くことで、データベース／データウェアハウス／データラクからRESTフルAPIを自動的に公開します

## アプリケーションプラットフォーム
Low-code and no-code platforms for application building
- [Appsmith](https://github.com/appsmithorg/appsmith) - 強力なオープンソース低コードフレームワークで、内部アプリケーションを非常に速く構築できます
- [Budibase](https://github.com/Budibase/budibase) - 数分で内部アプリケーションを作成できる低コードプラットフォーム
- [ILLA Cloud](https://github.com/illacloud/illa-builder) - 内部ツールの作成に特化した低コードプラットフォーム
- [Nhost](https://github.com/nhost/nhost) - GraphQLを備えたオープンソースFirebaseの代替品
- [Saltcorn](https://github.com/saltcorn/saltcorn) - ウェブデータベースアプリケーション向けオープンソースノコードビルダー。サーバーとドラッグ＆ドロップUIビルダー、データはPostgreSQLまたはSQLiteに保存されます
- [SQLPage](https://github.com/sqlpage/SQLPage) - SQLのみのデータアプリケーションビルダー。SQLクエリの上に自動的にUIを構築します
- [Tooljet](https://github.com/ToolJet/ToolJet) - オープンソース低コードプラット連で内部ツールを構築します


## バックアップ
- [BaRMan](https://github.com/2ndquadrant-it/barman) - PostgreSQL向けのバックアップ／リカバリ管理ツール。
- [Databasus](https://github.com/databasus/databasus) - WebUIを介したPostgreSQLのスケジュールバックアップツール（ローカル、S3、FTP、Google Driveなど外部ストレージ、通知（Webhook、Discord、Slackなど）、チーム管理）
- [pgbackrest](https://github.com/pgbackrest/pgbackrest) - 信頼性の高いPostgreSQLバックアップと復元
- [pgcopydb](https://github.com/dimitri/pgcopydb) - PostgreSQLデータベースをターゲットPostgreSQLサーバーにコピー（pg_dump | pg_restoreの強化版）
- [pg_probackup](https://github.com/postgrespro/pg_probackup) - PostgreSQLのバックアップと復旧を管理するツール。
- [Portabase](https://github.com/Portabase/portabase) - 分散実行と中央集約オーケストレーションを備えたPostgreSQLバックアップと復元用エージェントベースプラットフォーム

## クローン
- [Database Lab Engine](https://gitlab.com/postgres-ai/database-lab) - PostgreSQLにおける即時スリムクローンにより開発プロセスをスケーリング
- [clone_schema](https://github.com/denishpatel/pg-clone-schema) - PostgreSQLのスキーマをコピーするためのツールで、データベースの外に出る必要なし
- [Spawn](https://spawn.cc/) - 開発およびCI用に即時データベースコピーを生成するクラウドサービス。ローカルDBのインストールが不要、任意のセーブポイントへの即時復元、各機能ブランチやテスト用の分離コピー、データベースサイズに関わらず即時プロビジョニング


## 監視・統計・パフォーマンス
- [ASH Viewer](https://github.com/akardapolov/ASH-Viewer) - OracleおよびPostgreSQLDB内のアクティブセッション履歴データのグラフィカルビューを提供します
- [Metis](https://www.metisdata.io/product/troubleshooting) - SQLデータベースの可視化とパフォーマンスチューニングを提供します。
- [Monyog](https://www.webyog.com/product/monyog) - アグエントレスかつコスト効率の高いMySQLモニタリングツール。
- [mssql-monitoring](https://github.com/microsoft/mssql-monitoring) - collectd、InfluxDBおよびGrafanaを使用して、Linux上でSQL Serverのパフォーマンスを監視します。
- [Navicat Monitor](https://www.navicat.com/en/products/navicat-monitor) - 安全でシンプルかつアグエントレスのリモートサーバー監視ツールで、強力な機能を備え、監視を最も効果的に実現します。
- [Percona Monitoring and Management](https://github.com/percona/pmm) - MySQLおよびMongoDBのパフォーマンスを管理・監視するオープンソースプラットフォーム。
- [pganalyze collector](https://github.com/pganalyze/collector) - PostgreSQLのメトリクスおよびログデータを収集するPganalyze統計収集ツール。
- [pgbadger](https://github.com/dalibo/pgbadger) - 高速なPostgreSQLログ分析ツール。
- [pgDash](https://pgdash.io) - PostgreSQLデータベースのすべての側面を測定・追跡します。
- [PgHero](https://github.com/ankane/pghero) - PostgreSQLのパフォーマンスダッシュボード - ヘルスチェック、推奨インデックスなど。
- [pgmetrics](https://github.com/rapidloop/pgmetrics) - 実行中のPostgreSQLサーバーからの情報および統計を収集・表示します。
- [pgMonitor](https://github.com/CrunchyData/pgmonitor) - PostgreSQLクラスタのヘルスおよびパフォーマンスを可視化するためのワンストップツール。
- [pgMustard](https://www.pgmustard.com) - PostgreSQLのexplainプランに対するユーザーインターフェース、パフォーマンス向上のヒントを提供。
- [pgstats](https://github.com/gleu/pgstats) - PostgreSQLの統計を収集し、CSVファイルに保存するか、またはstdoutに出力します。
- [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - 柔軟で自立したPostgreSQLメトリクス監視／ダッシュボードソリューション。
- [PostgreSQL Metrics](https://github.com/spotify/postgresql-metrics) - PostgreSQLデータベースのメトリクスを抽出・提供するサービス。
- [PostgreSQL Monitor](https://postgresmonitor.com) - PostgreSQL向けの使いやすい監視サービスで、アラート、ダッシュボード、クエリ統計、動的推奨を提供。
- [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - PostgreSQLデータベースのヘルスを深く分析できる新世代診断ツール。
- [Promscale](https://github.com/timescale/promscale) - SQLを用いたメトリクスおよびトレースのオープンソース可視化バックエンド。
- [Releem](https://releem.com) - MySQLおよびMariaDB向けのパフォーマンス監視および最適化ツールで、誤設定、遅いクエリ、スキーマ問題、ロックの原因を安全に自動化し、スケールアップ時の手動作業を削減。
- [Telegraf PostgreSQL plugin](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/postgresql) - PostgreSQLデータベースのメトリクスを提供します。

### Prometheus
- [pgSCV](https://github.com/weaponry/pgscv) - PostgreSQLおよびPostgreSQL関連サービス向けのメトリクスエクスポートツール
- [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - PostgreSQLサーバーメトリクス向けのPrometheusエクスポートツール
- [pg_exporter](https://github.com/Vonng/pg_exporter) - PostgreSQLおよびPgbouncer向けに完全にカスタマイズ可能なPrometheusエクスポートツール（細かい実行制御を提供）

### Zabbix
- [Mamonsu](https://github.com/postgrespro/mamonsu) - PostgreSQL向けのモニタリングエージェント
- [Orabbix](http://www.smartmarmot.com/wiki/index.php?title=Orabbix) - Zabbix Enterprise Monitorと連携したプラグインで、Oracleデータベースの多層モニタリング、パフォーマンスおよび可用性の報告および測定を提供
- [pg_monz](https://github.com/pg-monz/pg_monz) - PostgreSQLデータベース向けのZabbixモニタリングテンプレート
- [Pyora](https://github.com/bicofino/Pyora) - OracleデータベースをモニタリングするPythonスクリプト
- [ZabbixDBA](https://github.com/anetrusov/ZabbixDBA) - RDBMSをモニタリングする高速で柔軟かつ継続的に開発中のプラグイン


## テスト
- [DbFit](https://github.com/dbfit/dbfit) - データベースコードのテスト駆動開発を容易に支援するデータベーステストフレームワーク
- [pgTAP](https://github.com/theory/pgtap) - PostgreSQL向けのユニットテスト
- [RegreSQL](https://github.com/dimitri/regresql) - SQLクエリのリグレッションテスト
- [SQLancer](https://github.com/sqlancer/sqlancer) - DBMSの自動テストにより、実装における論理バグを検出


## 高可用性・フェイルオーバー・シャーディング
- [Citus](https://github.com/citusdata/citus) - データとクエリを複数ノードに分散するPostgreSQL拡張機能
- [patroni](https://github.com/zalando/patroni) - ZooKeeper、etcd、またはConsulを使用したPostgreSQLの高可用性向けテンプレート
- [Percona XtraDB Cluster](https://github.com/percona/percona-xtradb-cluster) - MySQLクラスタリングおよび高可用性向けの高スケーラビリティソリューション
- [ShardingSphere](https://github.com/apache/shardingsphere) - データシャード、スケーリング、暗号化など、あらゆるデータベース上で動作する分散SQLトランザクションおよびクエリエンジン
- [stolon](https://github.com/sorintlab/stolon) - PostgreSQLの高可用性向けのクラウドネイティブPostgreSQLマネージャ
- [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - 自動フェイルオーバーおよび高可用性を実現するPostgreSQL拡張機能およびサービス
- [pglookout](https://github.com/aiven/pglookout) - PostgreSQLのレプリケーションモニタリングおよびフェイルオーバーデーモン
- [pgslice](https://github.com/ankane/pgslice) - PostgreSQLのパーティショニングを簡単に行う
- [PostgreSQL Automatic Failover](https://github.com/ClusterLabs/PAF) - PostgreSQL向けの高可用性を実現する、業界標準のPacemakerおよびCorosyncをベースにしたソリューション
- [autobase](https://github.com/vitabaks/autobase) - オープンソースのDBaaSで、高可用性を備えたPostgreSQLクラスタの自動展開と管理を実現
- [Vitess](https://github.com/vitessio/vitess) - MySQLの水平スケーリングを実現するための、一般化されたシャードによるデータベースクラスタリングシステム


## Kubernetes
- [KubeDB](https://kubedb.com) - Kubernetes上で運用可能なプロダクションレベルのデータベースを簡単に実行する
- [PostgreSQL operator](https://github.com/zalando/postgres-operator) - PostgreSQL Operatorは、Patroniを活用してKubernetes上で高可用性を備えたPostgreSQLクラスタを実現
- [Spilo](https://github.com/zalando/spilo) - Dockerを用いたHA PostgreSQLクラスタ
- [StackGres](https://gitlab.com/ongresinc/stackgres) - エンタープライズレベルの、Kubernetes上で提供されるフルスタックPostgreSQL


## 設定チューニング
- [MySQLTuner-perl](https://github.com/major/MySQLTuner-perl) - Perlで書かれたスクリプトで、MySQLのインストールを迅速に確認し、パフォーマンスと安定性を向上させる調整を行う
- [PGConfigurator](https://pgconfigurator.cybertec-postgresql.com) - 無料オンラインツールで最適化された `postgresql.conf` を生成
- [pgtune](https://github.com/gregs1104/pgtune) - PostgreSQLの設定用ウィザード
- [postgresqltuner.pl](https://github.com/jfcoz/postgresqltuner) - PostgreSQLデータベースの設定を分析し、チューニングアドバイスを提供するシンプルなスクリプト


## DevOps
- [DBmaestro](https://www.dbmaestro.com) - リリースサイクルを加速し、ITエコシステム全体にわたって柔軟性を提供
- [Toad DevOps Toolkit](https://www.quest.com/products/toad-devops-toolkit/) - 品質、パフォーマンス、信頼性を損なうことなく、DevOpsプロセス内で重要なデータベース開発機能を実行


## レポート
- [Chartbrew](https://chartbrew.com) - 複数のデータベースとサービスからライブダッシュボード、チャート、クライアントレポートを作成
- [Poli](https://github.com/shzlw/poli) - SQL愛好家向けに構築された、使いやすいSQLレポートアプリケーション


## ディストリビューション
- [DBdeployer](https://github.com/datacharmer/dbdeployer) - MySQLデータベースサーバーを簡単にデプロイできるツール
- [dbatools](https://github.com/sqlcollaborative/dbatools) - コマンドラインSQL Server Management Studioに似たPowerShellモジュール
- [Postgres.app](https://github.com/PostgresApp/PostgresApp) - フル機能のPostgreSQLを標準Macアプリとしてパッケージ化
- [BigSQL](https://www.bigsql.org) - 開発者向けのPostgreSQLの配布形態
- [Elephant Shed](https://github.com/credativ/elephant-shed) - PostgreSQLとの利用に必要な複数のユーティリティとアプリケーションをまとめて提供するウェブベースの管理画面
- [Pigsty](https://github.com/Vonng/pigsty) - 開発者向けの、PostgreSQL用のオープンソースディストリビューションで、最高レベルの可観測性とDatabase-as-Codeツールボックスを備える


## セキュリティ
- [Acra](https://github.com/cossacklabs/acra) - データベースセキュリティソリューション。フィールドレベル暗号化を備えたデータベースプロキシ、暗号化データの検索、SQLインジェクション防止、インクルージョン検知、ハーネイプots。クライアント側およびプロキシ側（「透明」）暗号化をサポート。SQL、NoSQL。
- [Databunker](https://github.com/securitybunker/databunker) - GDPRに適合した特別なセキュリティボックス。これは通常のDB上に構築された顧客記録用のもの。
- [Inspektor](https://github.com/poonai/inspektor) - データベースへのアクセス制御層。Inspektorはオープンポリシー・エージェントを活用してポリシー決定を行う。


## SQL

### 解析
- [Holistic.dev](https://holistic.dev) - データベースのパフォーマンス、セキュリティ、アーキテクチャに関する問題を自動検出するサービス。
- [SQLCheck](https://github.com/jarulraj/sqlcheck) - 一般的なSQL反パターンを自動検出。
- [SQLFluff](https://github.com/sqlfluff/sqlfluff) - ダイアレクトに柔軟で設定可能なSQLリントツール。
- [SQLLineage](https://github.com/reata/sqllineage) - Pythonを活用したSQLのリネージ分析ツール。
- [TSQLLint](https://github.com/tsqllint/tsqllint) - TSQLスクリプトにおける反パターンの記述、特定、報告を行うツール。

### コード生成
- [sqlc](https://sqlc.dev) - SQLを中心としたコードジェネレータ。さまざまな言語およびデータベースに対して型安全なバインディングを生成。
- [SQLDelight](https://sqldelight.github.io/sqldelight) - SQLを中心としたコードジェネレータ。Kotlinおよびさまざまなデータベースに対して型安全なバインディングを生成。
- [pGenie](https://pgenie.io) - SQLを中心としたコードジェネレータ。さまざまな言語に対して型安全なバインディングを生成し、PostgreSQLデータベースに特化。

### 拡張機能
- [PartiQL](https://partiql.org) - 関係データ、半構造データ、ネストデータへのSQL互換アクセス

### フレームワーク
- [Apache Calcite](https://calcite.apache.org) - 高度なSQL機能を備えた動的データ管理フレームワーク。
- [ZetaSQL](https://github.com/google/zetasql) - SQL用のアナライザフレームワーク。

### フォーマッター
- [CodeBuff](https://github.com/antlr/codebuff) - 機械学習を活用した言語に依存しない整形ツール。
- [JSQLFormatter](https://github.com/manticore-projects/jsqlformatter) - JSqlParserを基にした、多くのRDBMS向けオープンソースJava SQLフォーマッタ。
- [SQL Online](https://sqlonline.in) - アナリスト向けにSQLクエリを整形する無料ツール。
- [pgFormatter](https://github.com/darold/pgFormatter) - PostgreSQLのSQL文構文を整えるツール。
- [Poor SQL](https://poorsql.com) - 即時無料かつオープンソースのT-SQL整形ツール。
- [SQL Formatter](https://github.com/zeroturnaround/sql-formatter) - SQLクエリを整形するJavaScriptライブラリ。

### ゲーム
- [Lost at SQL](https://lost-at-sql.therobinlord.com) - SQLの基本スキルを身につけるためのSQL学習ゲーム。クエリを使って情報を取得できるようになるようにする。
- [Querymon](https://codepip.com/games/querymon/) - Querydexに存在するモンスターから普通から伝説までの一覧データをもとに、SQLクエリの使い方を学ぶ
- [Schemaverse](https://datalemur.com/blog/games-to-learn-sql#schemaverse) - 完全にPostgreSQLデータベース内で実装された、スペースベースの戦略ゲーム
- [SQL Island](https://sql-island.informatik.uni-kl.de) - 生き残った飛行機の事故の後、一時的にあなたはSQL島に閉じ込められます。ゲームの進行により、この島から脱出する方法を発見できます
- [SQL Murder Mystery](https://mystery.knightlab.com) - SQLの概念やコマンドを学ぶための自己指導型のチュートリアルであり、経験のあるSQLユーザー向けに興味深い犯罪を解決するための楽しいゲームを設計されています
- [SQL Police Department](https://sqlpd.com) - SQLPDでは、犯罪を解決しながらSQLを学ぶことができます

### パーサー
- [General SQL Parser](https://www.sqlparser.com) - SQLのパース、フォーマット、変更、分析
- [jOOQ](https://github.com/jOOQ/jOOQ) - SQLをパースし、他の方言に変換し、表現木の変換を可能にします
- [JSqlParser](https://github.com/JSQLParser/JSqlParser) - SQL文をパースし、Javaクラスの階層に変換します
- [libpg_query](https://github.com/pganalyze/libpg_query) - サーバー環境外でPostgreSQLパーサーにアクセスするためのCライブラリ
- [More SQL Parsing!](https://github.com/klahnakoski/mo-sql-parsing) - SQLをJSONにパース
- [sqlparse](https://github.com/andialbrecht/sqlparse) - Python用の非検証SQLパーサー
- [SQLGlot](https://github.com/tobymao/sqlglot) - 純粋なPythonによるSQLパーサー、トランスパイラ、ビルダー

### SQLの先へ
Run SQL queries against anything
- [CloudQuery](https://github.com/cloudquery/cloudquery) - クラウド資産を標準化されたPostgreSQLテーブルに抽出、変換、ロードします
- [csvq](https://github.com/mithrandie/csvq) - CSV用のSQLに似たクエリ言語
- [dsq](https://github.com/multiprocessio/dsq) - JSON、CSV、Excel、Parquetなどに対しSQLクエリを実行するコマンドラインツール
- [MAT Calcite plugin](https://github.com/vlsi/mat-calcite-plugin) - Eclipse Memory Analyzer向けのプラグインで、ヒープダンプをSQLでクエリできます
- [OctoSQL](https://github.com/cube2222/octosql) - 複数のデータベースおよびファイル形式からデータを結合・分析・変換できるSQLを用いたクエリツール
- [osquery](https://github.com/osquery/osquery) - SQLを活用したオペレーティングシステムのインストルメンテーション、モニタリング、分析
- [Resmo](https://www.resmo.com) - SQLを用いてリソースの監視と評価
- [sq](https://github.com/neilotoole/sq) - 構造化データソース（SQLデータベースやCSV、Excelなどのドキュメント形式）にjqスタイルのアクセスを提供するコマンドラインツール。これはsql+jqの愛の産物です
- [Steampipe](https://github.com/turbot/steampipe) - SQLを使用して、クラウドサービス（AWS、Azure、GCPなどを含む）を即座にクエリできます。
- [TextQL](https://github.com/dinedal/textql) - CSVやTSVといった構造化テキストに対してSQLを実行できます。
- [trdsql](https://github.com/noborus/trdsql) - CSV、LTSV、JSONおよびTBLNに対してSQLクエリを実行できるCLIツールです。
- [Trino](https://github.com/trinodb/trino) - 異質なデータソースを1つまたは複数に分散した大規模データセットをクエリするための分散型SQLクエリエンジンです。

### Language Server Protocol
- [SQLLanguageServer](https://github.com/joe-re/sql-language-server) - SQL Language Server。
- [sqls](https://github.com/lighttiger2505/sqls) - Goで書かれたSQL Language Server。

### 学習
Learning and puzzles for SQL
- [Advanced SQL Puzzles](https://github.com/smpetersgithub/AdvancedSQLPuzzles) - 難しいセットベースのSQLパズル。
- [Hackerrank](https://www.hackerrank.com/domains/sql) - コーディングを練習し、インタビュー対策を行い、採用されるようになります。
- [Learn SQL in a Month of Lunches](https://www.manning.com/books/learn-sql-in-a-month-of-lunches) - SQLを使ってデータを取得・フィルタリング・分析する方法についての書籍。
- [LeetCode](https://leetcode.com/problemset/database) - スキルを高め、知識を広げ、技術面のインタビュー対策に活用できます。
- [Select Star SQL](https://selectstarsql.com) - インターネット上でSQLを学ぶための最も優れた場所を目指す無料インタラクティブ書籍。
- [StrataScratch](https://www.stratascratch.com/blog/categories/sql) - データサイエンス教育リソース。
- [SQL Murder Mystery](https://github.com/NUKnightLab/sql-mysteries) - SQLの概念やコマンドを学ぶためのセルフディレクトドレッスンと、経験豊富なSQLユーザーが解決できる興味深い犯罪を解くためのゲーム。

### 実行計画
- [pev2](https://github.com/dalibo/pev2) - PostgreSQLの実行プランをグラフィカルに可視化するVue.jsコンポーネント
- [pg_flame](https://github.com/mgartner/pg_flame) - PostgreSQL `EXPLAIN ANALYZE` 出力用のフレイムグラフ生成ツール

### スクリプト
Useful SQL-scripts for various purposes
- [DBA MultiTool](https://github.com/LowlyDBA/dba-multitool) - SQL Server向けの長期的なT-SQLスクリプト：ストレージ最適化、即時ドキュメンテーション、一般管理ニーズ。
- [pgx_scripts](https://github.com/pgexperts/pgx_scripts) - PostgreSQL Expertsチームが開発した、データベース分析および管理に役立つ便利な小さなスクリプトのコレクション。
- [pgsql-bloat-estimation](https://github.com/ioguix/pgsql-bloat-estimation) - PostgreSQLにおけるインデックスおよびテーブルの統計ブloatを測定するためのクエリ。
- [pgWikiDont](https://gitlab.com/depesz/pgWikiDont) - <https://wiki.postgresql.org/wiki/Don't_Do_This> から導かれるルールを確認するSQLテスト
- [pg-utils](https://github.com/dataegret/pg-utils) - 便利なPostgreSQLユーティリティ。
- [PostgreSQL cheat sheet](https://postgrescheatsheet.com) - <timescale.com>による便利なSQLスクリプトおよびコマンド。
- [postgres_dba](https://github.com/NikolayS/postgres_dba) - PostgreSQL DBAおよびすべてのエンジニアにとって欠けている便利なツールセット。
- [postgres_queries_and_commands.sql](https://gist.github.com/rgreenjr/3637525) - 便利なPostgreSQLクエリおよびコマンの集まり。
- [TPT](https://github.com/tanelpoder/tpt-oracle) - これらの sqlplus スクリプトは、Oracle データベースのパフォーマンス最適化およびトラブルシューティングに使用します


## データ
- [dbt](https://github.com/dbt-labs/dbt-core) - SELECT 文をシンプルに記述することでデータを変換し、dbt がその文をデータウェアハウス内のテーブルやビューに変換します
- [QuickTable](https://quicktable.io) - コードなしで誰でもデータのアクセス、クリーニング、分析、変換、モデリングを行うことができます

### カタログ
- [Amundsen](https://github.com/amundsen-io/amundsen) - データアナリスト、データサイエンティスト、エンジニアがデータとやり取りする際の生産性を高めるメタデータ駆動型アプリケーション
- [DataHub](https://github.com/datahub-project/datahub) - 現代のデータスタック向けメタデータプラットフォーム
- [Marquez](https://github.com/MarquezProject/marquez) - データエコシステムのメタデータを収集、集計、可視化します

### リネージュ
- [Dwh.dev](https://dwh.dev) - Snowflake用のNexgenデータリネス

### 生成・マスキング・サブセット化
- [Benerator](https://github.com/rapiddweller/rapiddweller-benerator-ce) - 開発、テスト、訓練の目的でデータを生成、暗号化（匿名化／偽名化）し、移行します
- [dbForge Data Generator for MySQL](https://www.devart.com/dbforge/mysql/data-generator) - 強力なGUIツールで、大量の現実的なテストデータを生成します
- [dbForge Data Generator for Oracle](https://www.devart.com/dbforge/oracle/data-generator) - 小型だが強力なGUIツールで、Oracleスキーマに大量の現実的なテストデータを埋め込みます
- [dbForge Data Generator for SQL Server](https://www.devart.com/dbforge/sql/data-generator) - 強力なGUIツールで、データベースに意味のあるテストデータを高速に生成します
- [Faker](https://github.com/faker-js/faker) - ブラウザおよびNode.jsで大量のフィクションデータを生成します
- [Greenmask](https://github.com/GreenmaskIO/greenmask) - MySQLおよびPostgreSQL向けのデータ匿名化および合成データ生成ツール
- [myanon](https://github.com/ppomes/myanon) - MySQLダンプファイル向けのストリーミング匿名化ツール。stdinからmysqldumpを読み込み、stdoutに匿名化されたバージョンを出力。決定論的ハッシュ、固定値、JSONフィールドの匿名化、Python拡張をサポートします
- [Noisia](https://github.com/lesovsky/noisia) - PostgreSQL向けの有害なワークロード生成ツール
- [quick-seed](https://github.com/miit-daga/quick-seed) - PostgreSQL、MySQL、SQLite、Prisma、Drizzle ORMをサポートするデータベースに依存しないシーディングツール。リアルなテストデータを生成します
- [SB Data Generator](https://soft-builder.com/sb-data-generator) - アプリケーション用にリアルなテストデータを生成し、選択されたテーブルまたは全体のデータベースを埋め込みます。対応データベース：Oracle、MS SQL Server、MySQL、PostgreSQL、Firebird、SQLite、Azure SQL Database、Amazon Redshift、Amazon RDS
- [SQLable](https://sqlable.com/generator/) - ブラウザ上でフィクションデータを生成します
- [Synthesized TDK](https://docs.synthesized.io/tdk/latest) - DevOpsにとってデータのマスクおよび生成の最強の友です

### データプロファイラー
- [Data Profiler](https://github.com/capitalone/dataprofiler) - DataProfilerは、データ分析、監視、センシティブデータ検出を簡単にするPythonライブラリです
- [Desbordante](https://github.com/desbordante/desbordante-core) - データ内の複雑なパターンの発見および検証に特化したオープンソースデータプロファイラー
- [YData Profiling](https://github.com/ydataai/ydata-profiling) - 一般用途のオープンソースデータプロファイラー。データセットの高度な分析に最適。

### レプリケーション
- [dtle](https://github.com/actiontech/dtle) - MySQL向けの分散データ転送サービス。
- [Litestream](https://github.com/benbjohnson/litestream) - SQLite向けのストリーミングレプリケーション。
- [pgsync](https://github.com/ankane/pgsync) - PostgreSQLのデータを複数のデータベース間で同期。
- [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - Python 3で書かれたMySQLからPostgreSQLへのレプリケーションシステム。MySQLから取得した行のイメージを、PostgreSQLにJSONBとして保存する。
- [PGDeltaStream](https://github.com/hasura/pgdeltastream) - Golangによるウェブサーバー。PostgreSQLの論理デコード機能を用いて、ウェブソケット経由でPostgreSQLの変更を少なくとも1回以上ストリーミング。
- [repmgr](https://github.com/2ndQuadrant/repmgr) - PostgreSQL向け最も人気のあるレプリケーションマネージャー。

### 比較
- [data-diff](https://github.com/datafold/data-diff) - コマンドラインツールおよびPythonライブラリ。異なるデータベース間の行の差分を効率的に比較。
- [KS DB Merge Tools](https://ksdbmerge.tools) - Oracle Database、MySQL、MariaDB、SQL Server、PostgreSQL、SQLite、MS Access、およびクロスDBMS間のスキーマとデータの比較および同期を行うGUI。

## 論文
Documents, articles, manifestos and other theoretical materials on database tools
- [The "Database as Code" Manifesto](https://github.com/mgramin/database-as-code) - データベースをコードのように扱う。
- [Grokking Relational Database Design](https://www.manning.com/books/grokking-relational-database-design) - 初めてのデータベース設計と実装に向けた親しみやすい図解ガイド。

## 機械学習
- [MindsDB](https://github.com/mindsdb/mindsdb) - データベース内での機械学習。
- [SQLFlow](https://github.com/sql-machine-learning/sqlflow) - SQLとAIを統合する。

## 貢献
- Your contributions are always welcome! Please read the [contribution guidelines](https://github.com/mgramin/awesome-db-tools/blob/57ef4ecf12d86de99fc942a1ab964cc22240c5f4/contributing.md) first.
