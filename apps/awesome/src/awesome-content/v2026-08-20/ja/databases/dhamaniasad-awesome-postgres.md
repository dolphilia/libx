---
title: "dhamaniasad/awesome-postgres"
description: "PostgreSQLの運用、開発ツール、拡張機能、学習資料をまとめた定本スナップショット"
licenseSource: "github-dhamaniasad-awesome-postgres-readme-md"
---

# PostgreSQL Awesome リスト [![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg" align="right"  width="100">](https://www.postgresql.org/)

> [PostgreSQL](https://www.postgresql.org/)の優れたソフトウェア、ライブラリ、ツール、資料を、[awesome-mysql](http://shlomi-noach.github.io/awesome-mysql/)にならって厳選したリストです。

[PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL)（単にPostgresとも呼ばれる）は、[オブジェクト関係データベース](https://en.wikipedia.org/wiki/Object-relational_database)（ORDBMS）です。[ACID準拠](https://en.wikipedia.org/wiki/ACID)で[トランザクション](https://en.wikipedia.org/wiki/Transaction_processing)をサポートします（詳細: [Wikipedia: PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL)、[PostgreSQL.org](https://www.postgresql.org)）。

 :elephant: 貢献を歓迎します。[プルリクエスト](https://github.com/dhamaniasad/awesome-postgres/pulls)でリンクを追加するか、[Issue](https://github.com/dhamaniasad/awesome-postgres/issues)を作成して議論を始めてください。[貢献ガイドライン](https://github.com/dhamaniasad/awesome-postgres/blob/ef88d7b7b11e980c472e26e4c8562b5bb4473086/CONTRIBUTING.md)も確認してください。

## 目次

- [Awesome Postgres](#awesome-postgres-)
    - [高可用性](#high-availability)
    - [バックアップ](#backups)
    - [GUI](#gui)
    - [ディストリビューション](#distributions)
    - [CLI](#cli)
    - [サーバー](#server)
    - [監視](#monitoring)
    - [拡張機能](#extensions)
    - [プラットフォーム](#platforms)
    - [ワークキュー](#work-queues)
    - [最適化](#optimization)
    - [ユーティリティ](#utilities)
    - [言語バインディング](#language-bindings)
    - [PaaS（PostgreSQL as a Service）](#paas-postgresql-as-a-service)
    - [Dockerイメージ](#docker-images)
    - [Kubernetes](#kubernetes)
- [資料](#resources)
    - [チュートリアル](#tutorials)
    - [ブログ](#blogs)
    - [ドキュメント](#documentation)
    - [ニュースレター](#newsletters)
    - [動画](#videos)
    - [コミュニティ](#community)
    - [ロードマップ](#roadmaps)
    - [外部リスト](#external-lists)

### 高可用性
* [autobase](https://github.com/vitabaks/autobase) - Autobase for PostgreSQL® は、高度に可用性を確保した PostgreSQL クラスタのデプロイと管理を自動化するオープンソースの DBaaS です
* [BDR](https://github.com/2ndQuadrant/bdr) - BiDirectional Replication - PostgreSQL 用のマルチマスター再現システム
* [Patroni](https://github.com/zalando/patroni) - ZooKeeper または etcd を使用した PostgreSQL 高可用性（HA）用のテンプレート
* [Spock](https://github.com/pgEdge/spock) - 100％オープンソースの論理マルチマスター PostgreSQL 再現
* [Stolon](https://github.com/sorintlab/stolon) - Consul または etcd を使用した PostgreSQL 高可用性（HA）と Kubernetes の統合
* [pglookout](https://github.com/aiven/pglookout) - 再現監視およびフェイルオーバー daemon
* [repmgr](https://github.com/2ndQuadrant/repmgr) - PostgreSQL サーバークラスタにおける再現とフェイルオーバーを管理するオープンソースツールセット
* [Slony-I](https://slony.info/) - 「マスターから複数スレーブ」の再現システム（カスケードおよびフェイルオーバーを含む）
* [PAF](https://github.com/ClusterLabs/PAF) - PostgreSQL 自動フェイルオーバー：Pacemaker および Corosync を使用した PostgreSQL 高可用性
* [SkyTools](https://github.com/pgq/skytools-legacy) - PgQ（キューングシステム）および Londiste（Slony より管理が簡単な再現システム）を含む再現ツール
* [pg_auto_failover](https://github.com/citusdata/pg_auto_failover) - Postgres の拡張機能およびサービスによる自動フェイルオーバーと高可用性
* [pgrwl](https://github.com/hashmap-kz/pgrwl) - PostgreSQL サーバーからリアルタイムでストリーム形式で書き込み先のウォール（WAL）を受信。pg_receivewal へのドロップイン型、コンテナ対応の代替ツール
* [pg-status](https://github.com/krylosov-aa/pg-status) - HTTP エンドポイントを提供するマイクロサービス。現在のマスターホストまたは各種条件を満たすリプレイカを即座に取得可能

### バックアップ
* [Barman](https://www.pgbarman.org/index.html) - 2ndQuadrant による PostgreSQL のバックアップおよびリカバリー管理ツール
* [Databasus](https://databasus.com) - Web UI を通じたスケジュールされた PostgreSQL バックアップツール（ローカル、S3、FTP、Google Drive など外部ストレージ、通知（Webhook、Discord、Slack など）、チーム管理）
* [OmniPITR](https://github.com/omniti-labs/omnipitr) - PostgreSQL の高度な WAL ファイル管理ツール
* [pg\_probackup](https://github.com/postgrespro/pg_probackup) - pg\_arman のフォークで、@PostgresPro によって改善されたツール。インクリメンタルバックアップ、リプレイカからのバックアップ、マルチスレッドバックアップおよびリカバリー、アーカイブコマンドなしの匿名バックアップをサポート
* [pgBackRest](https://pgbackrest.org/)  - 信頼性のある PostgreSQL バックアップおよびリカバリー
* [pgbackweb](https://github.com/eduardolat/pgbackweb) - Web UI を備えた完全な Docker 基盤の PostgreSQL バックアップおよびメンテナンスツール
* [pg\_back](https://github.com/orgrim/pg_back/) - pg\_back はシンプルなバックアップスクリプト
* [pghoard](https://github.com/aiven/pghoard) - クラウドオブジェクトストレージ（AWS S3、Azure、Google Cloud、OpenStack Swift）向けのバックアップと復元ツール
* [postgres-backup-oss](https://github.com/isaced/postgres-backup-oss) - アリババクラウドオブジェクトストレージサービス（OSS）にPostgreSQLを定期的にバックアップするための便利なDockerコンテナ
* [wal-e](https://github.com/wal-e/wal-e) （廃止）- HerokuによるPostgreSQLへのシンプルな継続アーカイブ（S3、Azure、またはSwift）
* [wal-g](https://github.com/wal-g/wal-g) - WAL-EをGoで再実装した継承品。現在はAWS（S3）、Google Cloud（GCS）、Azure、OpenStack Swift、MinIO、およびファイルシステムストレージをサポート。ブロックレベルのインクリメンタルバックアップを提供し、バックアップタスクをスタンバイサーバーにオフロードできるほか、並列処理とスロットリングのオプションを提供。Postgres以外にも、MySQLおよびMongoDBデータベースにも適用可能。
* [pitrery](https://dalibo.github.io/pitrery/) - pitreryはPostgreSQLのPoint In Time Recovery（PITR）バックアップを管理するためのBashスクリプトのセット。
* [pgbackup-sidecar](https://github.com/Musab520/pgbackup-sidecar) - `pgbackup-sidecar`は、PostgreSQLデータベースの定期的なバックアップを`pg_dump`、`cron`、およびBashスクリプトで自動化し、出力をWebhookに送信するための軽量なDocker sidecarコンテナ。
* [pg-backups-to-s3](https://github.com/Saicheg/pg-backups-to-s3) - pg_dumpに基づいたDockerファーストソリューション。環境ごとの設定をサポートし、スケジュールされたPostgreSQLバックアップに対応。オプションで圧縮、GPG暗号化、Webhook、Amazon S3への自動アップロードを提供。

### GUI
* [Adminer](https://www.adminer.org/) - PHPで書かれたフル機能のデータベース管理ツール。
* [Beekeeper Studio](https://www.beekeeperstudio.io) - 現代的なUIと優れたPostgresサポートを備えた無料かつオープンソースのSQLクライアント。マルチプラットフォーム対応。
* [Bytebase](https://www.bytebase.com) - 開発者、セキュリティ、DBA、プラットフォームエンジニアチーム向けのデータベースDevSecOpsソリューション。
* [Chartbrew](https://chartbrew.com) - PostgreSQLデータからライブダッシュボード、チャート、クライアントレポートを作成。SQLと連携するクエリツールを備える。
* [Count](https://count.co/) - PostgreSQL（商用ソフトウェア）に接続するノートブックインターフェースを備えたウェブベースの分析プラットフォーム。
* [DataGrip](https://www.jetbrains.com/datagrip/) - 高度なツールセットを備えたIDEおよび良好なマルチプラットフォーム体験（商用ソフトウェア）。
* [Datazenit](https://datazenit.com/) - ウェブベースのPostgreSQL GUI（商用ソフトウェア）。
* [DataRow](https://www.datarow.com/) - Amazon Redshift向けのマルチプラットフォームSQLクライアント：シンプル、手軽、拡張性に優れる。
* [DBConvert Streams](https://streams.dbconvert.com/) - PostgreSQLとMySQLデータベース間のさまざまなクラウド環境におけるリアルタイムデータ移行およびCDCリプレイクを実現するクラウドネイティブプラットフォーム（商用ソフトウェア）。
* [DBeaver](https://dbeaver.io/) - PostgreSQLに優れたサポートを備えたユニバーサルデータベースマネージャ。
* [dbForge Edge](https://www.devart.com/dbforge/edge/) - PostgreSQL、MySQL、MariaDB、SQL Server、Oracleおよび幅広い関連クラウドサービスをサポートする一括マルチデータベースソリューション（商用ソフトウェア）。
* [DbVisualizer](http://www.dbvis.com) - 開発者、DBA、アナリスト向けのマルチプラットフォームデータベースクライアント（商用ソフトウェア）。
* [Holistics](https://www.holistics.io/) - オンラインマルチプラットフォームデータベース管理ツールおよびSQLクエリレポートGUI。PostgreSQLへの強いサポートを備える（商用ソフトウェア）。
* [JackDB](https://www.jackdb.com/) - ウェブベースのSQLクエリインターフェース（商用ソフトウェア）
* [Luna Modeler](http://www.datensen.com) - マルチプラットフォーム対応のデスクトップデータモデルツール（商用ソフトウェア）
* [Mathesar](https://mathesar.org/) - データベースへの直感的なユーザー体験を提供するウェブアプリケーション
* [Metabase](https://www.metabase.com/) - PostgreSQL向けのシンプルなダッシュボード、チャート、クエリツール
* [Numeracy](https://numeracy.co/) - PostgreSQL向けの高速SQLエディタ（チャートとダッシュボード付き）（商用ソフトウェア）
* [pgAdmin](https://www.pgadmin.org/) - PostgreSQLの管理および運用用GUI
* [pgMagic🪄](https://pgmagic.app/?ref=awesomepostgres) - 自然言語でPostgreSQLにチャット（商用ソフトウェア）
* [PgManage](https://github.com/commandprompt/pgmanage) - 現代的なマルチプラットフォームPostgres中心のデータベースクライアント／管理ツール
* [pgModeler](https://pgmodeler.io/) - pgModelerはオープンソースのPostgreSQLデータベースモデルツール
* [pgweb](https://github.com/sosedoff/pgweb) - Goで書かれたウェブベースのPostgreSQLデータベースブラウザ
* [phpPgAdmin](https://github.com/phppgadmin/phppgadmin) - PostgreSQL向けのトップクラスウェブベース管理ツール
* [Postbird](https://github.com/Paxa/postbird) - macOS向けPostgreSQLクライアント
* [PostgresCompare](https://www.postgrescompare.com) - マルチプラットドゥーのデータベース比較およびデプロイメントツール（商用ソフトウェア）
* [Postico](https://eggerapps.at/postico/) - macOS向け現代的なPostgreSQLクライアント（商用ソフトウェア）
* [QueryGlow](https://queryglow.com/) - AIによるSQL生成、EXPLAIN可視化、スキーマ認識による自動補完を備えたセルフホスト型ウェブベースデータベースGUI（商用ソフトウェア）
* [PSequel](http://www.psequel.com/) - PostgreSQLの一般的なタスクを迅速に実行できるシンプルで洗練されたインターフェース（商用ソフトウェア）
* [Redash](https://github.com/getredash/redash) - 任意のデータソースに接続し、データを簡単に可視化・共有
* [SQL Tabs](http://www.sqltabs.com/) - JavaScriptで書かれたマルチプラットフォームデスクトップクライアント（PostgreSQL向け）
* [SQLPro for Postgres](http://macpostgresclient.com/) - macOS向けシンプルかつ強力なPostgreSQLマネージャ（商用ソフトウェア）
* [temBoard](https://github.com/dalibo/temboard) - ウェブベースのPostgreSQL GUIおよびモニタリング
* [Teable](https://github.com/teableio/teable) - 高速かつリアルタイム、プロフェッショナルで開発者向け、コードなしデータベース
* [TablePlus](https://tableplus.com/) - ネイティブアプリでデータベースと構造を編集可能。高度なセキュリティが確保されています（商用ソフトウェア）
* [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - クロスプラットフォームデータベース管理ツール（無料／商用）
* [DbGate](https://dbgate.org) - 最もスマートな（ノ）SQLデータベースクライアント
* [WebDB](https://webdb.app) - 効率的なデータベースIDE

### ディストリビューション
* [Postgres.app](https://postgresapp.com/) - macOSでPostgreSQLに始める最も簡単な方法
* [Pigsty](https://github.com/Vonng/pigsty) - バッテリー付きオープンソースPostgreSQLディストリビューション。開発者向けの最高レベルの可視化とデータベースアスコードツールボックス

### CLI
* [atlas](https://github.com/ariga/atlas) - Atlasは、現代のDevOps原則を用いてデータベーススキーマの管理と移行を行うツールです
* [pgcli](https://github.com/dbcli/pgcli) - autocompletionとシンタックスハイライト付きPostgres CLI
* [pgplan](https://github.com/JacobArthurs/pgplan) - CLIからPostgreSQLのEXPLAINプランを比較・分析
* [pgschema](https://www.pgschema.com) - Terraform風の宣言型スキーマ移行（Postgres用）
* [pg-schema-diff](https://github.com/stripe/pg-schema-diff) - Postgresスキーマの差分を比較し、最小限のロックでSQL移行を生成するCLI（およびGolangライブラリ）
* [MigrationPilot](https://github.com/mickelsamuel/migrationpilot) - PostgreSQL移行安全CLIが、生産環境前に危険なDDLを検出し、80規則、ロック分類、自動修正、GitHub Actionをサポート
* [pgsh](https://github.com/sastraxi/pgsh) - PostgreSQLデータベースをGitのようにブランチ化
* [psql](https://www.postgresql.org/docs/current/static/app-psql.html) - 組み込みのPostgreSQL CLIクライアント
* [psql2csv](https://github.com/fphilipe/psql2csv) - psqlでクエリを実行し、結果をCSV形式で出力
* [sabiql](https://github.com/riii111/sabiql) - 高速かつドライバーなしのTUIでPostgreSQLデータベースを閲覧・クエリ・編集
* [schemaspy](https://github.com/schemaspy/schemaspy) - SchemaSpyは、JDBC準拠のJavaツールで、データベースをHTMLドキュメンテーションに生成。Entity Relationship図も含む
* [pdot](https://gitlab.com/dmfay/pdot) - シェル内でデータベース構造を可視化・探索。外鍵グラフの高文脈ビューからトリガーの連鎖、ロール継承、権限などまで
* [squix](https://github.com/eduardofuncao/squix) - SQLコマンドラインクライアントでクエリ管理とインタラクティブな結果表示

### サーバー
* [AgensGraph](https://bitnine.net/) - PostgreSQLをベースとした強力なグラフデータベース。およびMPP PostgreSQLのフォーク。Greenplum Databaseのオープンソース代替品。
* [Apache Cloudberry](https://github.com/apache/cloudberry) - PostgreSQL上に構築された、本当にオープンソースのMongoDBの代替品。
* [FerretDB](https://www.ferretdb.io) - スケーラブルなオープンソースPostgreSQLベースのデータベースクラスタ。
* [Postgres-XL](https://www.postgres-xl.org/) - 分散ストレージとトランザクションをベースに、PostgreSQLのフォークを使用したオープンソース分散SQL。
* [YugabyteDB](https://yugabyte.com/) - SQLデータベースセキュリティソリューション：データ保護用プロキシ、透明な「即時」データ暗号化、SQLファイアウォール（SQLインジェクション防止）、インシデント検知システム。

### セキュリティ
* [Acra](https://github.com/cossacklabs/acra) - check\_pgactivityはNagiosでPostgreSQLクラスタを監視するためのツールであり、多くのパフォーマンスメトリクスの測定と監視を提供する。

### 監視
* [check\_pgactivity](https://github.com/OPMDG/check_pgactivity) - Nagios用のPostgreSQLの状態チェックプラグイン。
* [Check\_postgres](https://github.com/bucardo/check_postgres) - Corootは、eBPFをベースにしたオープンソースAPMおよび観測ツールであり、DataDogおよびNewRelicの代替品。
* [coroot](https://github.com/coroot/coroot) - SaaSによる監視サービスがメトリクス、クエリ、説明プランを収集・可視化し、問題が発生した際にアラートを送信（商用ソフトウェア）。
* [Datadog](https://www.datadoghq.com/product/database-monitoring/) - リアルタイムパフォーマンス監視、包括的な -0000による設定の容易さ（商用ソフトウェア）。
* [Instrumental](https://github.com/Instrumental/instrumentald) - Zabbixに組み込まれた、包括的なPostgreSQL監視モジュール。 [pre-made graphs](https://instrumentalapp.com/docs/instrumentald/postgresql#suggested-graphs)
* [libzbxpgsql](https://github.com/cavaliercoder/libzbxpgsql) - 75以上の自動化されたヘルスチェック、クラスタ認識インデックスアドバイザー、クエリ分析、TimescaleDB、pgvector、PostGISの拡張モニタリングを含むPostgreSQLパフォーマンス監視（商用ソフトウェア）。
* [myDBA](https://mydba.dev) - Percona Monitoring and Management（PMM）は、PostgreSQL、MySQL、MongoDBの監視と管理を行う無料かつオープンソースプラットフォーム。
* [PMM](https://github.com/percona/pmm) - PomeはPostgreSQLメトリクスを指す。Pomeは、データベースの健康状態を追跡するためのPostgreSQLメトリクスダッシュボード。
* [Pome](https://github.com/rach/pome) - pgmetricsは、オープンソースであり、依存関係がなく、単一バイナリツールであり、実行中のPostgreSQLサーバーから多くの情報と統計を収集し、読みやすいテキスト形式で表示またはJSONおよびCSV形式にエクスポートできる。
* [pgmetrics](https://pgmetrics.io/) - システムのグローバルステータス、パーティションごとの情報、メモリステータスなど、他の情報を表示するオープンソースコマンドラインツール。
* [pg\_view](https://github.com/zalando/pg_view) - Grafanaダッシュボードに焦点を当てた柔軟で始めやすいPostgreSQLメトリクス監視ツール。
* [pgwatch2](https://github.com/cybertec-postgresql/pgwatch2) - PostgreSQLに対してベンチマークテストを実行する。
* [pgbench](https://www.postgresql.org/docs/devel/static/pgbench.html) - PostgreSQLでベンチマークテストを実行するツール。
* [opm.io](http://opm.io) - Open PostgreSQL Monitoringは、PostgreSQLサーバーの管理を支援するための無料ソフトウェアセット。ステータス収集、ダッシュボード表示、異常時に警告を送信できる。
* [okmeter.io](https://okmeter.io/pg) - 商業用SaaSベースのエージェントによるモニタリングで、非常に詳細なPostgreSQLプラグインを備えています。100以上の統計情報を自動収集し、すべての側面についてダッシュボードを表示し、異常が発生した際にアラートを送信します（商業ソフトウェア）
* [dexter](https://github.com/ankane/dexter) - PostgreSQL用の自動インデクサ。遅いクエリを検出し、設定された場合にインデックスを作成します
* [pg_ash](https://github.com/NikolayS/pg_ash) - PostgreSQLのアクティブセッション履歴。pg_stat_activityを1秒ごとにpg_cronでサンプリングし、エンコードされたスナップショットを保存し、待ちイベント分析に32のSQL関数を提供します。純粋なSQL、拡張なし、RDS、Cloud SQL、Supabaseなど管理型プロバイダーでも動作します
* [pg_exporter](https://github.com/Vonng/pg_exporter) - PostgreSQLおよびPgbouncer用の完全カスタマイズ可能なPrometheusエクスポーターで、細かい実行制御を提供します
* [postgres_exporter](https://github.com/wrouesnel/postgres_exporter) - PostgreSQLサーバーメトリクス用のPrometheusエクスポーター
* [StatsMgr](https://codeberg.org/data-bene/statsmgr) - 効率的かつ整理された高度な統計管理を目的としたオープンソースPostgreSQL拡張機能

### 拡張機能
* [pgxn](https://pgxn.org/) PostgreSQL拡張ネットワーク - 複数のオープンソースPostgreSQL拡張機能の中央配布ポイント
* [Extensions listing by joelonsql](https://gist.github.com/joelonsql/e5aa27f8cc9bd22b8999b7de8aee9d47) - 1000以上のPostgreSQL拡張機能
* [Pigsty extensions catalogue](https://ext.pigsty.io/list/) - 400以上のPostgreSQL拡張機能
* [AGE](https://github.com/apache/age) - 完全に機能するグラフデータベースサポートを追加、Cypherクエリを含む
* [OrioleDB](https://www.orioledb.com/) - PostgreSQL用のクラウドネイティブストレージエンジン。OrioleDBは、ディスク上およびメモリ上のエンジンの利点を組み合わせたPostgreSQL拡張機能です
* [Citus](https://github.com/citusdata/citus) - リアルタイムワークロード向けのスケーラブルPostgreSQLクラスタ
* [cstore\_fdw](https://github.com/citusdata/cstore_fdw) - PostgreSQLを用いた分析用カラムストア
* [cyanaudit](https://pgxn.org/dist/cyanaudit/) - Cyan Auditは、各列ごとにすべてのDML活動をデータベース内にログ記録します
* [pg_search](https://github.com/paradedb/paradedb) - pg_searchは、BM25アルゴリズムを用いてSQLテーブル上の全文検索を可能にするPostgreSQL拡張機能であり、全文検索のための最先端のランキング関数です
* [pg_cron](https://github.com/citusdata/pg_cron) - PostgreSQL内で定期的なジョブを実行します
* [pglogical](https://github.com/2ndQuadrant/pglogical) - 論理ストリーミングレプリケーションを提供する拡張機能
* [pgcat](https://github.com/kingluo/pgcat) - 強化されたPostgreSQL論理レプリケーション
* [pg\_barcode](https://github.com/btouchard/pg_barcode/) - PostgreSQL用のSVG QRコードおよびデータマトリクス生成機能
* [pg\_partman](https://github.com/pgpartman/pg_partman) - PostgreSQLのパーティション管理拡張機能
* [pg\_paxos](https://github.com/citusdata/pg_paxos/) - PostgreSQLノードのクラスタにおけるPaxosおよびPaxosに基づくテーブルの複製の基本実装
* [pg\_shard](https://github.com/citusdata/pg_shard) - リアルタイム読み取りと書き込みのスケーリングを可能にする拡張
* [pg\_stat\_monitor](https://github.com/percona/pg_stat_monitor) - PostgreSQLにおけるクエリパフォーマンスモニタリングツール
* [pg\_squeeze](https://github.com/cybertec-postgresql/pg_squeeze) - 自動でブロートをクリーンアップするための最小ロックを用いた拡張
* [PGStrom](https://wiki.postgresql.org/wiki/PGStrom) - CPU負荷の大きいタスクをGPUに転送するための拡張
* [PipelineDB](https://www.confluent.io/blog/pipelinedb-team-joins-confluent/) - ストリーム上でSQLクエリを継続的に実行し、結果をテーブルにインクリメンタルに格納するPostgreSQL拡張
* [plpgsql\_check](https://github.com/okbob/plpgsql_check) - plpgsqlソースコードを確認できる拡張
* [PostGIS](http://postgis.net/) - PostgreSQLにおける空間および地理オブジェクト
* [PG\_Themis](https://github.com/cossacklabs/pg_themis) - Themis暗号ライブラリへのPostgresバインディングで、PostgreSQL側にさまざまなセキュリティサービスを提供
* [zomboDB](https://github.com/zombodb/zombodb) - Elasticsearchでバックアップされたインデックスを用いて、効率的な全文検索を可能にする拡張
* [pgMemento](https://github.com/pgMemento/pgMemento) - トリガーとPL/pgSQLで書かれたサーバー側関数を用いて、PostgreSQLデータベース内のデータの履歴を提供
* [TimescaleDB](https://www.timescale.com/) - Postgresと完全に互換なオープンソースタイムシリーズデータベース（拡張として配布）
* [pgTAP](https://pgtap.org/) - Postgres用のデータベーステストフレームワーク
* [HypoPG](https://github.com/HypoPG/hypopg) - HypoPGは仮想/理論的なインデックス機能を提供
* [pgRouting](https://github.com/pgRouting/pgrouting) - pgRoutingはPostGIS/PostgreSQLの空間データベースを拡張し、空間ルーティングおよびその他のネットワーク分析機能を提供
* [PGroonga](https://pgroonga.github.io/) - PGroongaはGroongaを用いた新しいインデックスアクセスメソッドを提供し、すべての言語に対して非常に高速な全文検索機能を提供
* [PGAudit](https://www.pgaudit.org/) - PostgreSQLアудィット拡張（またはpgaudit）は、PostgreSQLが提供する標準ログ機能を用いて、セッションおよび/またはオブジェクトの詳細なログを提供
* [PostgresML](https://postgresml.org/) - データベース内に機械学習およびAI（ベクトル、LLM、古典的なML）を実装。SQLのみで機械学習モデルのすべてのライフサイクル（訓練、予測、管理）を実行
* [ParadeDB](https://github.com/paradedb/paradedb) - 検索と分析用のPostgres
* [PostgreSQL Anonymizer](https://postgresql-anonymizer.readthedocs.io/en/stable/) - Postgresデータベース内の個人識別情報（PII）または商業的に敏感なデータをマスクまたは置き換えるための拡張、PGセキュリティラベルを用いて

### プラットフォーム
* [Atlas4D](https://github.com/crisbez/atlas4d-base) - オープンソースの4次元空間時間プラットフォーム。PostGIS、TimescaleDB、pgvector、H3を統合し、統合された地理空間および時系列インテリジェンスを提供。

### ワークキュー
* [BeanQueue](https://github.com/LaunchPlatform/bq) - SKIP LOCKED、LISTENおよびNOTIFYをベースにしたPythonのワークキューフレームワーク
* [pgmq](https://github.com/pgmq/pgmq) - PostgreSQL上で動作する軽量メッセージキュー。AWS SQSやRSMQに類似しているが、Postgres上で動作。
* [river](https://github.com/riverqueue/river) - GoとPostgresを対象とした高性能ジョブ処理システム。
* [pgBoss](https://github.com/timgit/pg-boss) - Node.jsからPostgresにジョブをキューに追加する。
* [dbos](https://www.dbos.dev/) - TypeScriptおよびPythonで構成された持続可能なワークフロー
* [Graphile Worker](https://worker.graphile.org) - PostgreSQL用の高性能ジョブキュー。Node.jsで記述。
* [@andyrmitchell/pg-queue](https://www.npmjs.com/package/@andyrmitchell/pg-queue) - Node.js用の「メンテナンス不要」PostgreSQLキュー

### 最適化
* [EverSQL](https://www.eversql.com/) - 自動クエリ最適化ツール、監視および分析ツール、インデックス推奨ツール。（商用ソフトウェア）
* [PEV2](https://github.com/dalibo/pev2) - オンラインPostgreSQL Explain可視化ツール。
* [pg_flame](https://github.com/mgartner/pg_flame) - クエリプラン用のフラームグラフ生成ツール。
* [PgHero](https://github.com/ankane/pghero) - PostgreSQLのインサイトを簡単に提供。
* [pgMustard](https://www.pgmustard.com/) - PostgreSQLの最適化に関するツール・資料。
for `EXPLAIN`, that also provides performance tips (Commercial Software).
* [pgtune](https://github.com/gregs1104/pgtune/) - PostgreSQLの設定ウィザード。
* [pgtune](https://github.com/le0pard/pgtune) - PostgreSQL設定ウィザードのオンライン版。
* [pgconfig.org](https://github.com/sebastianwebber/pgconfig) - PostgreSQLオンライン設定ツール（また、pgtuneに基づく）。
* [PoWA](https://powa.readthedocs.io/en/latest/) - PostgreSQLワークロードアナライザはパフォーマンス統計を収集し、リアルタイムのチャートやグラフを提供して、PostgreSQLサーバーの監視とチューニングを支援。
* [pg_web_stats](https://github.com/kirs/pg_web_stats) - pg_stat_statementsの状態をWebUIで確認できるツール。
* [TimescaleDB Tune](https://github.com/timescale/timescaledb-tune) - ホストのリソース（メモリやCPU数など）に基づき、TimescaleDBデータベースを最適化するツール。
* [Metis](https://www.metisdata.io/product/troubleshooting) - MetisはSQLデータベース（PostgreSQLを含む）の可視性とパフォーマンスチューニングを提供。 （商用ソフトウェア）
* [aqo](https://github.com/postgrespro/aqo) - PostgreSQL向けの適応型クエリ最適化。
* [pgassistant](https://github.com/beh74/pgassistant-community) - 開発者向けのPostgreSQLツール。LLMとpgTuneの統合により、データベースの理解と最適化を支援します。

### ユーティリティ
* [apgdiff](https://www.apgdiff.com/) - 2つのデータベースダンプファイルを比較し、古いデータベーススキーマを新しいものに更新するために使用できるDDL文を生成します。
* [bemi](https://github.com/BemiHQ/bemi) - PostgreSQLにおける自動データ変更の追跡
* [ERAlchemy](https://github.com/Alexis-benoist/eralchemy) - ERAlchemyはデータベースからエンティティ関係（ER）図を生成します。
* [flyway](https://flywaydb.org/) - Postgresおよびその他のデータベース向けのスキーマ移行ツール。
* [GatewayD](https://github.com/gatewayd-io/gatewayd) - クラウドネイティブなデータベースゲートウェイおよびフレームワーク。APIゲートウェイのように、データベースに適用されます。
* [Greenmask](https://github.com/GreenmaskIO/greenmask) - MySQLおよびPostgreSQL向けのデータベースの匿名化および合成データ生成ツール。
* [Hasura GraphQL Engine](https://github.com/hasura/graphql-engine) - PostgreSQL上で高速かつリアルタイムのGraphQL APIを提供し、細かいアクセス制御を実現。データベースイベント時にウェブホークをトリガーします。
* [ldap2pg](https://github.com/dalibo/ldap2pg) - YMLおよびLDAPからロールと権限を同期します。
* [migra](https://github.com/djrobstep/migra) - 差分ツールに似たが、PostgreSQLスキーマ向けのツール。
* [mysql-postgresql-converter](https://github.com/lanyrd/mysql-postgresql-converter) - LanyrdのMySQLからPostgreSQLへの変換スクリプト。
* [NServiceBus.Transport.PostgreSql](https://github.com/Particular/NServiceBus.SqlServer) - NServiceBus.Transport.PostgreSqlライブラリは、.NET開発者に [use a PostgreSQL database as a message broker](https://docs.particular.net/transports/postgresql)を提供します。（商用ソフトウェア）
* [ora2pg](http://ora2pg.darold.net) - OracleデータベーススキーマをPostgreSQLに適合するスキーマにエクスポートするPerlモジュール。
* [pg\_activity](https://github.com/dalibo/pg_activity) - PostgreSQLサーバーの活動をモニタリングするトップ類のアプリケーション。
* [pg-formatter](https://github.com/gajus/pg-formatter) - PostgreSQL SQL文の整形ツール（Node.js）。
* [pg-safe-migrate](https://github.com/defnotwig/pg-safe-migrate) - 安全を最優先としたNode.js移行エンジン。アドバイスロック、SHA-256のずれ検知、PostgreSQL向けの10の組み込みルールを備えています。
* [pganalyze](https://pganalyze.com) - PostgreSQLパフォーマンスモニタリング（商用ソフトウェア）。
* [pgbadger](https://github.com/darold/pgbadger) - 高速なPostgreSQLログ分析ツール。
* [PgBouncer](http://www.pgbouncer.org/) - PostgreSQL向けの軽量接続プーリングツール。
* [pgCenter](https://github.com/lesovsky/pgcenter) - さまざまな統計情報、管理タスク、サービスの再読み込み、ログファイルの閲覧、データベースバックエンドのキャンセルまたは終了を実行するための便利なインターフェースを提供します。
* [pg_chameleon](https://github.com/the4thdoctor/pg_chameleon) - MySQLからPostgreSQLへのリアルタイムリプレイを実現し、オプションで型の上書き移行と移行機能を提供。
* [pgclimb](https://github.com/lukasmartinelli/pgclimb) - PostgreSQLから異なるデータフォーマットにデータをエクスポート。
* [pg_docs_bot](https://github.com/mchristofides/pg_docs_bot/) - PostgreSQLドキュメントのリンクを現在のバージョンにリダイレクトするブラウザ拡張機能。
* [pgfutter](https://github.com/lukasmartinelli/pgfutter) - CSVおよびJSONをPostgreSQLに簡単にインポート。
* [PGInsight](http://pginsight.io/) - PostgreSQLデータベース内の深層調査を簡単に行うためのCLIツール。
* [pg_insights](https://github.com/lob/pg_insights) - Postgresデータベースの健康状態を監視するための便利なSQL。
* [pgloader](https://github.com/dimitri/pgloader) - COPYストリーミングプロトコルを使用してデータをPostgreSQLにロードし、データの読み取りと書き込みを別々のスレッドで実行。
* [pgMonitor](https://github.com/CrunchyData/pgmonitor) - Postgresのメトリクス収集と可視化を、物理サーバー、仮想マシン、またはKubernetesにデプロイ可能。
* [pgpool-II](https://www.pgpool.net/mediawiki/index.php/Main_Page) - 接続プーリング、レプリケーション、負荷分散、接続超過制限を提供するミドルウェア。
* [pgspot](https://github.com/timescale/pgspot) - PostgreSQL拡張スクリプト内の脆弱性を検出。
* [pg-spot-operator](https://github.com/pg-spot-ops/pg-spot-operator) - 安価なAWS Spot VM上で状態を持つPostgresを実行するデーモン。
* [pgsync](https://github.com/ankane/pgsync) - PostgreSQLデータをローカルマシンに同期するツール。
* [PGXN client](https://github.com/pgxn/pgxnclient) - PostgreSQL拡張ネットワークとインタラクションを行うコマンドラインツール。
* [postgresql-metrics](https://github.com/spotify/postgresql-metrics) - PostgreSQLデータベースのメトリクの抽出と提供を行うツール。
* [PostgREST](https://github.com/PostgREST/postgrest) - 既存のPostgreSQLデータベースから完全なRESTフルAPIを提供。
* [pREST](https://github.com/prest/prest) - 任意のPostgreSQLデータベースからRESTフルAPIを提供（Golang）
* [PostGraphile](https://github.com/graphile/postgraphile) - PostgreSQLデータベースに即時GraphQL APIまたはGraphQLスキーマを提供。
* [yoke](https://github.com/nanopack/yoke) - 自動フェイルオーバーと自動クラスタ回復を備えたPostgreSQL高可用性クラスタ。
* [pglistend](https://github.com/kabirbaidhya/pglistend) - Lightweight PostgresSQL `LISTEN`/`NOTIFY`デーモンを `node-postgres` に基づいて構築。
* [ZSON](https://github.com/postgrespro/zson) - PostgreSQLの透明なJSONB圧縮拡張。
* [pg_bulkload](http://ossc-db.github.io/pg_bulkload/index.html) - PostgreSQL用の高速データロードツール
* [pg_migrate](https://github.com/jwdeitch/pg_migrate) - PostgreSQLのコードベースを管理し、VCSをシンプルにします
* [pg_timetable](https://github.com/cybertec-postgresql/pg_timetable) - PostgreSQL用の高度なジョブスケジューラ
* [sqitch](https://github.com/sqitchers/sqitch) - バージョン管理されたスキーマデプロイメントを管理するツール
* [pgmigrate](https://github.com/yandex/pgmigrate) - Yandexが開発したスキーマ移行の進化を支援するCLIツール
* [pgcmp](https://github.com/cbbrowne/pgcmp) - データベーススキーマを比較するツールで、一部の永続的な差異を許容できます
* [pg-differ](https://github.com/multum/pg-differ) - PostgreSQLテーブルの構造を簡単に初期化／更新するツール、移行代替（Node.js）
* [Qail](https://github.com/qail-io/qail) - PostgreSQL用のrust-first型ASTパイプラインで、コンパイル時クエリチェックと組み込みのテナントスコープを提供
* [sqlcheck](https://github.com/jarulraj/sqlcheck) - 一般的なSQLのアンチパターンを自動検出。このようなアンチパターンはクエリの遅延を引き起こすことが多く、それらを解決することでクエリのスピードが向上します
* [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - Postgresデータベースの健康状態に関する深層分析をユーザーが収集できる次世代診断ツール
* [Pyrseas](https://github.com/perseas/Pyrseas) - Postgresデータベーススキーマのバージョン管理
* [ScaffoldHub.io](https://scaffoldhub.io) - Angular、VueまたはReact（商用ソフトウェア）を使ってフルスタックPostgreSQLアプリを生成
* [planter](https://github.com/achiku/planter) - PostgreSQLテーブルからPlantUML ER図のテキスト記述を生成
* [pgroll](https://github.com/xataio/pgroll) - Postgresのゼロダウンタイムかつ逆転可能なスキーマ移行
* [RegreSQL](https://github.com/dimitri/regresql) - SQLクエリのためのリグレッションテストセットの構築、維持、実行を行うツール
* [diesel-guard](https://github.com/ayarotsky/diesel-guard) - DieselおよびSQLxにおける危険なPostgres移行パターンをチェックするリントツール

### 言語バインディング
* Common Lisp: [Postmodern](https://github.com/marijnh/Postmodern)
* Clojure: [clj-postgresql](https://github.com/remodoy/clj-postgresql)
* Elixir: [postgrex](https://github.com/elixir-ecto/postgrex)
* Go: [pq](https://github.com/lib/pq), [pgx](https://github.com/jackc/pgx), [go-pg](https://github.com/go-pg/pg)
* Haskell: [postgresql-simple](http://hackage.haskell.org/package/postgresql-simple)
* Java: [PostgreSQL JDBC Driver](https://jdbc.postgresql.org/), [Vert.x PostgreSQL Client](https://vertx.io/docs/vertx-pg-client/java/)
* Lua: [luapgsql](https://github.com/arcapos/luapgsql)
* .Net/.Net Core: [Npgsql](https://github.com/npgsql/npgsql)
* Node: [node-postgres](https://github.com/brianc/node-postgres), [pg-promise](https://github.com/vitaly-t/pg-promise), [pogi](https://github.com/holdfenytolvaj/pogi), [slonik](https://github.com/gajus/slonik), [postgres](https://github.com/porsager/postgres)
* Perl: [DBD-Pg](https://metacpan.org/pod/distribution/DBD-Pg/Pg.pm)
* PHP: [Pomm](http://www.pomm-project.org), [pecl/pq](https://github.com/m6w6/ext-pq)
* Python: [psycopg2](https://pypi.org/project/psycopg2/), [asyncpg](https://pypi.org/project/asyncpg/), [pg8000](https://pypi.org/project/pg8000/)
* R: [RPostgres](https://github.com/r-dbi/RPostgres), [RPostgreSQL](https://github.com/tomoakin/RPostgreSQL)
* Ruby: [pg](https://github.com/ged/ruby-pg)
* Rust: [rust-postgresql](https://github.com/sfackler/rust-postgres), [pgx](https://github.com/tcdi/pgx), [wtx](https://github.com/c410-f3r/wtx)
* TypeScript: [zapatos](https://github.com/jawj/zapatos)
* Zig: [pg.zig](https://github.com/karlseguin/pg.zig), [qail-zig](https://github.com/qail-io/qail-zig)

### PaaS（PostgreSQL as a Service）
* [Aiven PostgreSQL](https://aiven.io/postgresql) - AWS、Azure、DigitalOcean、Google CloudおよびUpCloudでのPostgreSQLアーサイブサービス；プランは月額19ドルの単一ノードインスタンスから大型高可用性セットまであり、2週間無料体験あり
* [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql/) - Amazon Relational Database Service (R及DS) for PostgreSQL
* [Azure Database for PostgreSQL](https://azure.microsoft.com/en-us/services/postgresql/) - Azure Database for PostgreSQLは、完全に管理された、企業向けのコミュニティPostgreSQLデータベースとして提供され、組み込みのHA、エラスティックスケーリングおよびAzureエコシステムとのネイティブ統合を提供します
* [Crunchy Bridge](https://www.crunchydata.com/products/crunchy-bridge/) - Postgres専門家が提供する完全に管理されたPostgres。Amazon AWS、Google GCP、Microsoft Azureの主要クラウドプロバイダーで利用可能。完全なスーパーユーザーサポートあり
* [Database Labs](https://www.databaselabs.io) - PostgreSQLサーバーを数分で準備完了。月額20ドルから。バックアップ、監視、パッチ、24時間テクニカルサポートすべて無料。
* [DigitalOcean Managed Databases](https://www.digitalocean.com/products/managed-databases/) - 完全に管理されたPostgreSQLデータベース。無料プランはありません。月額15ドルから開始。日次バックアップとタイムポイント復元。スタンバイノードと自動フェイルオーバー。
* [Google Cloud SQL for PostgreSQL](https://cloud.google.com/sql/docs/postgres/) - Google Cloud Platform上でPostgreSQLの関係データベースを簡単に設定・維持・管理・運用できる完全に管理されたデータベースサービス。
* [Heroku Postgres](https://elements.heroku.com/addons/heroku-postgresql) - 無料から巨大プランまで、PostgreSQL専門家が運営。Heroku上でアプリを実行する必要はありません。無料プランには10,000行、20接続、最大2回のバックアップ、PostGIS対応が含まれます。
* [OVHcloud Cloud Databases](https://www.ovhcloud.com/en/public-cloud/databases/) - 高度に可用性を確保し、スケーラブルでセキュアなPostgreSQL。日次バックアップとタイムポイント復元、ロックインなし、無料の入出りトラフィックを提供。
* [Render Managed PostgreSQL](https://render.com/docs/databases) - 安全で信頼性の高い、完全に手間なしの管理型PostgreSQL。静的データ暗号化、自動バックアップ、すべてのプランに含まれる拡張可能なSSDストレージ。プランは月額7ドルから開始（256MB RAMと1GBストレージ、初90日は無料）。
* [ScaleGrid PostgreSQL DBaaS](https://scalegrid.io/postgresql.html) - 高度に可用性を確保し、専用サーバー、スーパーユーザー制御を備えた完全に管理されたPostgreSQLホスティング。#1のマルチクラウドAmazon RDS代替サービス。
* [Scaleway Managed Database](https://www.scaleway.com/en/database/) - EUにホストされた完全に管理されたPostgreSQLデータベース。HA、スケーリング、自動バックアップを備えています。月額10ユーロから開始。
* [Supabase](https://www.supabase.com) - 完全に管理されたPostgres。読み取りリプリケート、タイムポイント復元、サポートパッケージ、ブラウザベースGUI、豊かな無料プランを提供。
* [Neon](https://neon.tech) - 完全に管理されたサーバレスPostgreSQL。Neonはストレージとコンピューティングを分離し、サーバレス、ブランチ、無限ストレージなどの現代的な開発機能を提供。
* [Nile](https://www.thenile.dev/) - 完全に管理されたPostgreSQL。Nileはストレージとコンピューティングを分離し、テナントを仮想化して、マルチテナントAIアプリケーションを高速かつ安全に、無限スケールで配信。無料プランは無制限のデータベースを提供。
* [PlanetScale](https://planetscale.com/postgres) - PlanetScale for Postgresは、現代のクラウドインフラに構築された完全に管理された、高可用性PostgreSQLデータベースクラスタを提供。
* [Vela](https://vela.run) - AIアプリ向けに設計されたPostgresベースのバックエンドアーサービス。即時データベースブランチとクローン、プロダクションのようなテスト環境、サーバレススケーリングを提供。
* [Thalassa Cloud DBaaS](https://thalassa.cloud/products/databases/postgresql/) - 完全に管理されたPostgreSQLデータベース。マルチAZ、自動バックアップ。オランダにホスト。

### Dockerイメージ
* [citusdata/citus](https://hub.docker.com/r/citusdata/citus/) - Citus公式イメージとCitus拡張。公式Postgresコンテナに基づく。
* [mdillon/postgis](https://hub.docker.com/r/mdillon/postgis/) - PostGIS 2.3 on Postgres 9。公式Postgresコンテナに基づく。
* [paradedb/paradedb](https://hub.docker.com/r/paradedb/paradedb/) - ParadeDBは検索と分析向けPostgres。公式Postgresコンテナにpg_search拡張を搭載。
* [postgres](https://hub.docker.com/_/postgres/) - 公式Postgresコンテ連（Dockerから）

### Kubernetes
* [Crunchy Operator](https://github.com/CrunchyData/postgres-operator) - Kubernetes向けのプロダクションPostgreSQL。高可用性PostgreSQLクラスタからフルスケールのデータベースアーサービスまで。
* [Fujitsu Enterprise Postgres for Kubernetes](https://www.postgresql.fastware.com/) - OpenShift Container Platform（商業ソフトウェア）上でエンタープライズクラスのPostgreSQL。
* [Kubegres Operator](https://github.com/reactive-tech/kubegres) - Kubegresは、PostgreSqlインスタンスの1つまたは複数のクラスタをデプロイし、データベースのレプリケーション、フェイルオーバー、バックアップを管理できるKubernetesオペレータです。
* [StackGres Operator](https://github.com/ongres/stackgres/) - Kubernetes上でフルスタックPostgreSQLを提供。
* [Zalando Operator](https://github.com/zalando/postgres-operator) - Kubernetes上で実行されるPostgreSQLクラスタの作成と管理。
* [CloudNativePG operator](https://github.com/cloudnative-pg/cloudnative-pg) - Kubernetes環境内のPostgreSQLデータベースを包括的に、スムーズに管理するためのプラットフォーム。
* [KubeDB operator](https://kubedb.com/) - Kubernetes上でプロダクションレベルのデータベースを実行（商用ソフトウェア）。
* [Percona PostgreSQL Operator](https://github.com/percona/percona-postgresql-operator) - Crunchy Dataオペレータに基づくPercona Operator for PostgreSQL。
* [Percona Everest Operator](https://github.com/percona/everest-operator) - Everest Operatorは、MySQL、MongoDB、PostgreSQLデータベースのライフサイクルを管理するKubernetesオペレータです。内部ではMySQL、MongoDB、PostgreSQLのPerconaのKubernetesオペレータを活用し、3つのデータベースタイプを統一されたAPIと1つの管理画面で管理します。

## 資料

### チュートリアル
* [Backup and recover a PostgreSQL DB using wal-e](https://coderwall.com/p/cwe2_a/backup-and-recover-a-postgres-db-using-wal-e) - PostgreSQLでwal-eを使用した継続的なアーカイブ設定に関するチュートリアル。
* [Operations cheat sheet](https://wiki.postgresql.org/wiki/Operations_cheat_sheet) - PostgreSQL Wikiからのオペレーション用のチェックリスト。
* [PG Casts](https://www.pgcasts.com) - Hashrocketによる無料の週間PostgreSQLスクリーンキャスト。
* [Postgres Guide](http://postgresguide.com/) - 初心者や経験者向けに、PostgreSQL内の特定のヒントやツールを探索するためのガイド。
* [PostgreSQL Exercises](https://pgexercises.com/) - 実践的な演習を通してPostgreSQLを学ぶためのサイト。
* [tutorialspoint PostgreSQL tutorial](http://www.tutorialspoint.com/postgresql/) - PostgreSQLに関する非常に広範なチュートリアルのコレクション。
* [postgresDBSamples](https://github.com/morenoh149/postgresDBSamples) - PostgreSQL用のサンプルスキーマのコレクション。
* [PostgreSQL Primer for Busy People](https://zaiste.net/posts/postgresql-primer-for-busy-people/) - PostgreSQLでよく使われる最も一般的なコマンドのコレクション。
* [pg-utils](https://github.com/dataegret/pg-utils) - Data Egretによる便利なDBAツール。
* [pagila](https://github.com/xzilla/pagila) - Pagila、Postgresサンプルデータベース。
* [SQL Syntax Cheat Sheet](https://github.com/mergisi/sql-syntax-cheat-sheet) - ウィンドウ関数、CTE、PostgreSQL固有の構文（UPSERT、JSONクエリ、配列操作）を含む包括的なSQL構文リファレンス。

### ブログ
* [Planet PostgreSQL](https://planet.postgresql.org/) - PostgreSQL向けのブログアグリゲーションサービス。
* [Andrew Dunstan's PostgreSQL and Technical blog](http://adpgtech.blogspot.com/search/label/PostgreSQL/)
* [Bruce Momjian's PostgreSQL blog](https://momjian.us/main/blogs/pgblog.html)
* [Craig Kerstiens PostgreSQL posts](http://www.craigkerstiens.com/categories/postgres/) - PostgreSQLの魅力的な機能、ヒント、トリックに関する投稿のセット。
* [Database Soup](http://www.databasesoup.com/search/label/postgresql/) - ジョシュ・バーキスのブログ
* [Michael Paquier's blog](https://paquier.xyz/)
* [Percona's PostgreSQL blog posts](https://www.percona.com/blog/category/postgresql/)
* [Robert Haas' blog](http://rhaas.blogspot.com/search/label/postgresql/)
* [select * from depesz;](https://www.depesz.com/tag/postgresql/) - フューティスト・ルバチェフスキーのブログ
* [Metis Blog](https://www.metisdata.io/blog) - PostgreSQL、SQLデータベース、パフォーマンス、チューニングに関する投稿のセット
* [Digoal's PostgreSQL and Technical blog(Chinese Language)](https://github.com/digoal/blog/blob/master/README.md) 
* [Pigsty blog / PostgreSQL](https://pigsty.io/blog/pg/) - PIGSTYの著者が運営するブログ。PostgreSQL（データベースおよびクラウドインフラ）に関する洞察深い記事が多数掲載されている。
* [BigData Boutique Blog / PostgreSQL](https://bigdataboutique.com/blog/tagged/postgresql) - BigData Boutiqueチームが運営するブログ。主に分析関連のコンテンツが中心。

### 書籍
* [PostgreSQL Mistakes and How to Avoid Them](https://www.manning.com/books/postgresql-mistakes-and-how-to-avoid-them)
* [The Internals of PostgreSQL](https://www.interdb.jp/pg/index.html) - 鈴木ヒロノブによる無料電子書籍
* [PostgreSQL 14 Internals](https://postgrespro.com/community/books/internals) - ロゴフ・エゴによる無料電子書籍
* [Lift the Elephant](https://leanpub.com/lift-the-elephant) - 生産環境におけるPostgresのスケーリングに関する実用ガイド。チューニング、接続プーリング、パーティショニング、高可用性をカバー。


### ドキュメント
* [Wiki](https://wiki.postgresql.org/wiki/Main_Page) - ユーザードキュメント、ハウツー、tips 'n' tricks
* [pgPedia](https://pgpedia.info/) - PostgreSQLに関連するあらゆるテーマを収録した百科事典。
* [create_pg_super_document](https://ryogrid.github.io/create_pg_super_document/index.html) - PostgreSQLコードベース内のすべてのシンボルについてAIエージェントを用いてドキュメンテーションを生成するプロジェクト。

### ニュースレター

* [Postgres Weekly](https://postgresweekly.com/) - PostgreSQLに関連する記事、ニュース、リポジトリを含む週刊ニュースレター。
* [pgMustard newsletter](https://www.pgmustard.com/newsletter) - PostgreSQLのパフォーマンスに関する記事および動画を含む月刊ニュースレター。
* [pgsql-hackers Weekly Digest](https://ryogrid.net/pgsql-hackers-digest/) - pgsql-hackersメールマガジンの週刊要約。アクティブなスレッド一覧、スレッドの要約などを提供。

### ポッドキャスト
* [PostgresFM](https://postgres.fm/) - Postgresに関する週刊ディスカッション。
* [Scaling Postgres](https://www.scalingpostgres.com/) - PostgreSQLに関連するコンテンツの週刊まとめ。
* [Path to Citus Con](https://www.citusdata.com/podcast/path-to-citus-con/) - Postgres世界の人物との月刊インタビュー。

### 動画
* [Citus Data Youtube channel](https://www.youtube.com/channel/UC8jpoK1BqQhDh6HDGFnM_DA/videos) - Citusに関する動画
* [EnterpriseDB Youtube channel](https://www.youtube.com/channel/UCkIPoYyNr1OHgTo0KwE9HJw) - EnterpriseDBに関する動画
* [Postgres Conference Youtube channel](https://www.youtube.com/channel/UCsJkVvxwoM7R9oRbzvUhbPQ/videos) - カンファレンスの動画
* [Scaling Postgres](https://www.scalingpostgres.com/) - クリストン・ジャミソンによるPostgres動画ブログシリーズ
* [PostgresTV Youtube channel](https://www.youtube.com/@PostgresTV) - Postgresに関する講演、ハッキングセッション、インタビュー、ポッドキャストエピソード

### コミュニティ
* [Mailing lists](https://www.postgresql.org/list/) - Postgresの公式メールリスト。サポートやコミュニティとの連携など、Postgresコミュニティにおける主要なコミュニケーションチャネルの一つ。
* [Reddit](https://www.reddit.com/r/PostgreSQL/) - PostgreSQLユーザー向けのRedditコミュニティ。登録ユーザー数は12000人以上。
* [Slack](https://pgtreats.info/slack-invite) - Postgres向けのSlackワークスペース。メンバーは20000人以上。
* Telegram - Several groups for PostgreSQL in different languages: [Russian](https://t.me/pgsql) >4200 people, [Brazilian Portuguese](https://t.me/postgresqlbr) >2300 people, [Indonesian](https://t.me/postgresql_id) ~1000 people, [English](https://t.me/postgreschat) >750 people
* [#postgresql on Freenode](https://webchat.freenode.net/#postgresql) - Freenode上でPostgresに関する最も人気のあるIRCチャンネル。登録ユーザーは1000人以上。
* [Discord](https://discord.gg/bW2hsax8We) - Postgres向けのDiscordサーバー。メンバーは6000人以上。

### ロードマップ
* [PostgreSQL Roadmap](https://roadmap.sh/postgresql-dba) - PostgreSQLのステップごとの導入ガイドを提供する計画書。

### 外部リスト
* [Wikipedia admin tools list](https://en.wikipedia.org/wiki/Comparison_of_database_tools) - ウィキペディア上でのデータベース管理ツールの比較情報
* [PostgreSQL Wiki GUI tools list](https://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools) - PostgreSQL用GUIツールに関するコミュニティガイド
* [PostgreSQL Wiki Foreign Data Wrappers list](https://wiki.postgresql.org/wiki/Foreign_data_wrappers) - 外国データワッパー
