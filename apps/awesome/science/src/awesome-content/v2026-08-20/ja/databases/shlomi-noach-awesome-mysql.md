---
title: "Awesome mysql"
description: "mysqlを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-shlomi-noach-awesome-mysql-readme-md"
---

# Awesome mysql

mysqlを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

### 目次

- [Awesome MySQL](#awesome-mysql)
    - [分析](#analysis)
    - [バックアップ](#backup)
    - [ベンチマーク](#benchmarking)
    - [Binlogレプリケーション](#binlog-replication)
    - [ChatOps](#chatops)
    - [設定](#configuration)
    - [コネクター](#connectors)
    - [デプロイ](#deployment)
    - [開発](#development)
    - [GUI](#gui)
    - [HA](#ha)
    - [MCP](#mcp)
    - [プロキシ](#proxy)
    - [レプリケーション](#replication)
    - [スキーマ](#schema)
    - [セキュリティ](#security)
    - [サーバー](#server)
    - [シャーディング](#sharding)
    - [ツールキット](#toolkits)

- [リソース](#resources)
    - [電子書籍](#e-books)


## 分析

*パフォーマンス、構造、データ分析ツール*

- [Anemometer](https://github.com/box/Anemometer) - Box SQLスロークエリモニター。
- [innodb-ruby](https://github.com/jeremycole/innodb_ruby) - RubyによるInnoDBファイル形式のパーサー。
- [innotop](https://github.com/innotop/innotop) - 多くの機能と柔軟性を持つMySQL向けtopクローン。
- [MySQL Explain Analyzer](https://github.com/Preetam/explain-analyzer) - `EXPLAIN FORMAT=JSON`出力のWebベース分析器。コメント、スケーラビリティ分析、保存済みサンプルへのパーマリンクを提供する。
- [mysql-statsd](https://github.com/db-art/mysql-statsd) - MySQLから情報を収集し、StatsD経由でGraphiteへ送信するPythonデーモン。
- [MySQLTuner-perl](https://github.com/major/MySQLTuner-perl) - MySQLインストールをすばやくレビューし、性能・安定性を高める調整を行えるスクリプト。
- [Prometheus](https://github.com/prometheus/prometheus)/[mysqld_exporter](https://github.com/prometheus/mysqld_exporter) - リアルタイム監視・アラート向け時系列データベース。
- [pstop](https://github.com/sjmudd/ps-top) - performance_schemaから情報を収集、集約、表示するMySQL向けtop風プログラム。
- [ReliaDB EXPLAIN Analyzer](https://github.com/Mughees52/mysql-explain-analyzer) - 問題検出、インデックス推奨、クエリー書き換えを備えたブラウザベースのMySQL・MariaDB EXPLAIN可視化ツール。100%クライアントサイド。
- [Wireshark](https://gitlab.com/wireshark/wireshark/) - MySQLプロトコルをデコードできるプロトコルアナライザー。
- [Dolphie](https://github.com/charles-001/dolphie) - MySQL/MariaDB・ProxySQLをリアルタイム分析するモダンなターミナルツール。
- [sql-tap](https://github.com/mickamy/sql-tap) - リアルタイムSQLトラフィックビューア。

## バックアップ

*バックアップ／復元／リカバリツール*

- [Databasus](https://github.com/databasus/databasus) - 外部ストレージ（ローカル、S3、FTP、Google Driveなど）、通知（webhook、Discord、Slackなど）、チーム管理を備えた、Web UI経由のスケジュール済みMySQLバックアップツール。
- [Dumpling](https://github.com/pingcap/tidb/tree/master/dumpling) - GoLangで書かれたMySQL/TiDB向け論理・並列バックアップ／ダンプツール。csv形式出力をサポートし、ライブラリとして統合できる。
- [MyDumper](https://github.com/mydumper/mydumper) - MySQL向け論理・並列バックアップ／ダンプツール。
- [Percona Xtrabackup](https://github.com/percona/percona-xtrabackup) - バックアップ中にデータベースをロックしない、MySQLベースサーバー向けオープンソースのホットバックアップユーティリティ。
- [Portabase](https://github.com/Portabase/portabase) - 分散実行・集中オーケストレーションを備えた、MySQLバックアップ・復元向けエージェントベースプラットフォーム。

## ベンチマーク

*サーバーへ負荷をかけるツール*

- [HammerDB](https://github.com/TPC-Council/HammerDB) - MySQL/MariaDBと、その他のオープンソース・商用データベース向けオープンソースデータベースベンチマーク。
- [go-tpc](https://github.com/pingcap/go-tpc) - MySQL向け[TPCC](http://www.tpc.org/tpcc/)・[TPCH](http://www.tpc.org/tpch/)ベンチマークのgolang移植版。
- [iibench-mysql](https://github.com/tmcallaghan/iibench-mysql) - MySQL/Percona/MariaDB向けIndex Insertion BenchmarkのJavaベース版。
- [Sysbench](https://github.com/akopytov/sysbench) - モジュール式、クロスプラットフォーム、マルチスレッド対応のベンチマークツール。
- [TPCC-MySQL](https://github.com/Percona-Lab/tpcc-mysql)（アーカイブ済み） - MySQL向け人気の[TPCC](http://www.tpc.org/tpcc/)ベンチマークの移植版。

## Binlogレプリケーション

- [DM](https://github.com/pingcap/tiflow) - MySQL/MariaDBからTiDBへのデータ移行とシャードテーブルのマージをサポートする高可用性データ移行プラットフォーム。
- [Kingbus](https://github.com/flike/kingbus) - Raft上に構築された分散MySQL binlogストレージシステム。
- [mysql-ripple](https://github.com/google/mysql-ripple)（アーカイブ済み） - MySQLレプリケーションで仲介役を務められるサーバーRipple。

## ChatOps

*チャットルームと統合するスクリプト*

- [Hubot MySQL ChatOps](https://github.com/samlambert/hubot-mysql-chatops)

## 設定

*MySQLサンプル設定とアドバイザー*

- [mysql-compatibility-config](https://github.com/morgo/mysql-compatibility-config) - MySQL設定を、より新しい（または古い）MySQLリリースに近い挙動にする。

## コネクター

*多様なプログラミング言語向けMySQLコネクター*

- [ballerinax/mysql](https://github.com/ballerina-platform/module-ballerinax-mysql) - MySQL向け公式Ballerinaコネクター。
- [DBD::MariaDB](https://github.com/perl5-dbi/DBD-MariaDB) - Perl5 Database Interface向けMariaDB・MySQLドライバー。
- [DBD::mysql](https://github.com/perl5-dbi/DBD-mysql) - Perl5 Database Interface向けMySQLドライバー。
- [go-sql-driver](https://github.com/go-sql-driver/mysql) - Go（golang）のdatabase/sqlパッケージ向け軽量・高速MySQLドライバー。
- [libAttachSQL](https://github.com/libattachsql/libattachsql) - libAttachSQLは、MySQLサーバー向けの軽量・ノンブロッキングC API。
- [MariaDB Connector/J](https://github.com/mariadb-corporation/mariadb-connector-j) - Javaアプリケーション向けLGPLライセンスのMariaDBクライアントライブラリ。
- [mex-mariadb](https://github.com/markuman/mex-mariadb) - GNU Octave・Matlab向けMITライセンスのMariaDB/MySQLクライアントライブラリ。
- [MySQL C API](https://dev.mysql.com/downloads/c-api/) - MySQL向け公式Cドライバー。
- [MySQL Connector/C++](https://github.com/mysql/mysql-connector-cpp) - MySQL向け公式C/C++ドライバー。
- [MySQL Connector/J](https://github.com/mysql/mysql-connector-j) - Javaプラットフォーム・開発向け標準化データベースドライバー。
- [MySQL Connector/NET](https://github.com/mysql/mysql-connector-net) - .Netプラットフォーム・開発向け標準化データベースドライバー。
- [MySQL Connector/Node.js](https://github.com/mysql/mysql-connector-nodejs) - MySQL向け公式Node.jsドライバー。
- [MySQL Connector/Python](https://github.com/mysql/mysql-connector-python) - Pythonプラットフォーム・開発向け標準化データベースドライバー。
- [mysqlclient-python](https://github.com/PyMySQL/mysqlclient) - Python向けMySQLデータベースコネクター。
- [node-mysql](https://github.com/mysqljs/mysql) - MySQLプロトコルを実装する純粋なNodejs JavaScriptクライアント。
- [PHP mysqlnd](https://www.php.net/manual/en/book.mysqlnd.php) - PHP向けMySQLネイティブドライバー。
- [PyMySQL](https://github.com/PyMySQL/PyMySQL) - Python向けMySQLデータベースコネクター。
- [Ruby Mysql2 gem](https://github.com/brianmario/mysql2) - Ruby・Railsプロジェクト向けMySQLドライバー。
- [MyZql](https://github.com/speed2exe/myzql) - ネイティブZigによるMySQL・MariaDBドライバー。
- [wtx](https://github.com/c410-f3r/wtx) - Rustで書かれたMySQL/MariaDB/Percona向けクライアント。

## デプロイ

*MySQLデプロイツール*

- [MariaDB4j](https://github.com/MariaDB4j/MariaDB4j) - インストールや外部依存なしでMariaDBを実行するJavaランチャー。


## 開発

*MySQL関連開発を支援するツール*

- [Flywaydb](https://github.com/flyway/flyway) - データベースマイグレーション。すべてのインスタンスにわたり、データベーススキーマを簡単・確実に進化させる。
- [dbsafe](https://github.com/nethalo/dbsafe) - MySQL DDL/DML操作の実行前安全性分析。
- [Liquibase](https://github.com/liquibase/liquibase) - データベース向けソース管理。
- [Shift](https://github.com/square/shift) - MySQLデータベースでスキーママイグレーションを実行する助けとなるアプリケーション。
- [Skeema](https://github.com/skeema/skeema) - シャーディング・外部オンラインスキーマ変更ツールをサポートする、MySQL・MariaDB向け宣言的な純粋SQLスキーマ管理システム。
- [SQLE](https://github.com/actiontech/sqle/blob/main/README_en.md) - SQLEはDBAまたは開発者向けSQL監査プラットフォーム。
- [Test database](https://github.com/datacharmer/test_db) - アプリケーション・サーバーのテストに使う、統合テストスイート付きサンプルMySQLデータベース。
- [cover_me](https://github.com/verizonconnect/cover_me) - mysqlストアドプロシージャ・関数向けコードカバレッジツール。

## GUI

*GUIフロントエンドとアプリケーション*

- [Adminer](https://github.com/vrana/adminer/) - 単一PHPファイルによるデータベース管理。
- [DBeaver](https://github.com/dbeaver/dbeaver/) - クロスプラットフォームのSQL・NoSQLデータベースクライアント。
- [StackRender](https://github.com/stackrender/stackrender) - MySQL向け無料・オープンソースのデータベーススキーマ設計・SQLマイグレーションジェネレーター。 
- [HeidiSQL](https://github.com/HeidiSQL/HeidiSQL) - Windows向けMySQL GUIフロントエンド。
- [ILLA Cloud](https://github.com/illacloud/illa-builder) - Mysqlと統合され、Mysql用GUIとして使えるローコード内部ツールビルダー。 
- [LibreDB Studio](https://github.com/libredb/libredb-studio) - データベースの隣にコンテナまたはHelmチャートとしてデプロイする、MySQLおよび他9エンジン向けブラウザベースSQL IDE。
- [mycli](https://github.com/dbcli/mycli) - 自動補完・構文ハイライトを備えたMySQL向けターミナルクライアント。
- [MySQL Shell](https://github.com/mysql/mysql-shell/) - 対話型JavaScript、Python、SQLインターフェースで、MySQL ServerとMySQL InnoDB cluster（AdminAPI）の開発・管理を支援するMySQL向け高度なクライアント・コードエディター。
- [MySQL Workbench](https://github.com/mysql/mysql-workbench) - DBA・開発者へ、データベース設計・モデリング、SQL開発、データベース管理の統合ツール環境を提供する。
- [Ocelot GUI](https://github.com/ocelot-inc/ocelotgui) - デバッガーを含むMySQLまたはMariaDB向けGUIクライアント。
- [OmniDB: Web tool for database management](https://github.com/OmniDB/OmniDB)
- [Percona Monitoring and Management](https://github.com/percona/pmm) - MySQL性能を管理・監視するオープンソースプラットフォーム。
- [phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin) - Web経由でMySQLの管理を扱うことを目的とした、PHPで書かれた自由ソフトウェアツール。
- [pspg](https://github.com/okbob/pspg) - 表形式データの可視化・ナビゲーションを強化するページャーを提供する。もともとはPostgreSQL向けに実装されたが、MySQLもサポートする。
- [Sequel Ace](https://github.com/Sequel-Ace/Sequel-Ace) - MySQLデータベースを扱うMac向けデータベース管理アプリケーション。
- [TablePro](https://github.com/TableProApp/TablePro) - インライン編集、SSHトンネリング、AIアシスタントを備えた、MySQL・その他多数のデータベース向けネイティブmacOSクライアント。無料・オープンソース。
- [SQLyog Community edition](https://github.com/webyog/sqlyog-community) - SQLyog Community edition。Windows向けで、Mac・Linuxではwine上で正常に動作する。
- [squix](https://github.com/eduardofuncao/squix) - クエリー管理と対話型結果を備えるSQLコマンドラインクライアント。
- [WebDB](https://github.com/WebDB-App/app) – オープンソースで効率的なデータベースIDE。容易なサーバー接続、モダンなERD、知的データジェネレーター、AIアシスタント、NoSQL構造マネージャー、タイムマシン、強力なクエリーエディターを備える。

## HA

*高可用性ソリューション*

- [Galera Cluster](https://github.com/codership/galera) - 同期レプリケーションに基づく真のマルチマスタークラスタ。
- [mha4mysql-node](https://github.com/yoshinorim/mha4mysql-node) と [mha4mysql-manager](https://github.com/yoshinorim/mha4mysql-manager)（いずれも保守終了） - MySQL向けMaster High Availability Managerとツール。
- [Orchestrator](https://github.com/openark/orchestrator)（アーカイブ済み） - MySQLレプリケーション・トポロジー管理および高可用性ソリューション。
- [Percona Replication Manager](https://github.com/percona/replication-manager) - Pacemaker向け非同期MySQLレプリケーション管理エージェント。ファイルおよびGTIDベースのレプリケーション、boothを用いる地理的に分散したクラスタをサポートする。
- [replication-manager](https://github.com/signal18/replication-manager) - MariaDB 10.x、MySQL、Percona Server 5.7のGTIDレプリケーション・トポロジーを管理する高可用性ソリューション。

## MCP

- [MCP MariaDB Server](https://github.com/MariaDB/mcp) - 公式MariaDB MCPサーバー。
- [MySQL MCP Server](https://github.com/askdba/mysql-mcp-server) - Model Context Protocolを通じてMySQLを公開する高度なMCPサーバー。
- [TiDB MCP Server](https://pingcap.github.io/ai/integrations/tidb-mcp-server/) - TiDB向けMCPサーバー。

## プロキシ

*MySQL向けプロキシ*

- [MySQL Router](https://dev.mysql.com/doc/mysql-router/en/) - InnoDB Clusterの一部であり、アプリケーションとバックエンドMySQLサーバー間に透過的なルーティングを提供する軽量ミドルウェア。
- [ProxySQL](https://github.com/sysown/proxysql) - MySQL向け高性能プロキシ。

## レプリケーション

*レプリケーション関連ソフトウェア*

* [data-diff](https://github.com/datafold/data-diff)（アーカイブ済み） - 2つの異なるデータベース間の行を効率的に差分比較するコマンドラインツールおよびPythonライブラリ。


## スキーマ

*追加スキーマ*

- [common_schema](https://github.com/shlomi-noach/common_schema) - 関数ライブラリ、ビューライブラリ、QueryScriptインタープリターを提供するMySQL向けDBAフレームワーク。
- [sys](https://github.com/mysql/mysql-sys)（アーカイブ済み） - MySQL管理者がMySQLデータベースの利用状況を把握するためのビュー、関数、プロシージャのコレクション。[sys schema docs](https://dev.mysql.com/doc/refman/8.4/en/sys-schema.html)を参照。


## セキュリティ

*データベースからの機密データ漏洩を防ぐツール（暗号化、マスキング、トークン化、ハニーポットなど）*

- [Acra](https://github.com/cossacklabs/acra) - SQLデータベース保護スイート。強力な選択的暗号化、SQLインジェクション防止、侵入検知システムを提供する。
- [myanon](https://github.com/ppomes/myanon) - MySQLダンプファイル向けストリーミング匿名化ツール。stdinからmysqldump出力を読み込み、匿名化済みデータをstdoutへ書き込む。決定論的ハッシュ、固定値、JSONフィールドの匿名化、Python拡張をサポートする。
- [myldapsync](https://github.com/6eh01der/myldapsync) - MySQLまたはMariaDBのユーザーをLDAPディレクトリ内のユーザーと同期する。

## サーバー

*MySQLサーバーのフレーバー*

- [MariaDB](https://github.com/MariaDB/server) - コミュニティ主導で開発されたMySQLサーバーのフォーク。
- [MySQL Server & MySQL Cluster](https://github.com/mysql/mysql-server) - Oracle公式のMySQL ServerおよびMySQL Clusterディストリビューション。
- [MyVector](https://github.com/askdba/myvector) - サーバープラグインとして配布される、MySQL向けネイティブベクトル検索プラグイン。
- [Percona Server](https://github.com/percona/percona-server) - 強化されたドロップインMySQL置換。
- [TiDB](https://github.com/pingcap/tidb) - MySQLプロトコルと互換性のある分散HTAPデータベース。

## シャーディング

*シャーディング・ソリューション／フレームワーク*

- [Jetpants](https://github.com/tumblr/jetpants) - Tumblrによる、大規模なレンジシャーディングクラスタを管理する自動化スイート。
- [Vitess](https://github.com/vitessio/vitess) - 大規模Webサービス向けMySQLデータベースのスケールを容易にするサーバーとツールを提供する。


## ツールキット

*ツールキット、汎用スクリプト*

* [sqlaxe](https://github.com/djberube/sqlaxe) - SQLファイルを検索、フィルタリング、整形、分割するCLIツール。
- [gh-ost](https://github.com/github/gh-ost/) - GitHubによるMySQL向けオンラインスキーママイグレーション。
- [go-mysql](https://github.com/go-mysql-org/go-mysql) - MySQLネットワークプロトコルとレプリケーションを扱う純粋なGoライブラリ。
- [MySQL Utilities](https://github.com/mysql/mysql-utilities)（非推奨） - 個別に、またはレプリケーション階層内でMySQLサーバーを保守・管理するために使う、Pythonで書かれたコマンドラインユーティリティのコレクション。
- [Percona Toolkit](https://github.com/percona/percona-toolkit) - 手動で行うには困難または複雑すぎる多様なMySQLサーバー・システム作業を実行する、高度なコマンドラインツールのコレクション。
- [sql-splitter](https://github.com/HelgeSverre/sql-splitter) - mysqldumpファイルの分割、結合、変換、検証、サンプリングを行う高性能CLI。
- [Swoof](https://github.com/StirlingMarketingGroup/swoof) - 一時テーブルを介したステージング・スワップを実行し、ファイル／クリップボード対象をサポートする超高速MySQLテーブルインポーター。
- [UnDROP](https://github.com/twindb/undrop-for-innodb)（アーカイブ済み） - 削除または破損したInnoDBテーブルからデータを復元するツール。

# リソース

*この段階では、リストの規模を懸念し「リソース」にはWebサイト、ブログ、スライド、プレゼンテーション動画などを含めない。*

## 電子書籍

*MySQLに関する電子書籍および関連資料*

- [Database Systems Lecture Notes](http://spots.augusta.edu/caubert/db/ln/) - SQLの基本セットアップ、演習、問題を扱う章を含む、データベースシステムの講義ノート（PDF、HTML、ODT、Markdownで利用可能）。
- [SQL-exercise](https://github.com/XD-DENG/SQL-exercise) - スキーマ説明図、スキーマ構築用SQLコード、SQLの問題と解答を含む複数のSQL演習。ウィキブック[SQL Exercises](https://en.wikibooks.org/wiki/SQL_Exercises)に基づく。

## インキュベーション中

本番利用ではないことが知られているものの、注目または実体があり、紹介に値するプロジェクト。

- [VillageSQL](https://github.com/villagesql/villagesql-server) - エージェント型AI時代の拡張を備えるMySQL向けドロップイン置換。
