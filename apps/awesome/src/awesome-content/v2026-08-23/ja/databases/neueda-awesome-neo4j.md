---
title: "neueda/awesome-neo4j"
description: "neueda/awesome-neo4j の正規スナップショット"
licenseSource: "github-neueda-awesome-neo4j-readme-md"
---

Awesome Neo4j
==============
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![ビルド状態](https://api.travis-ci.org/neueda/awesome-neo4j.svg?branch=master )](https://travis-ci.org/neueda/awesome-neo4j)

優れた[Neo4j](https://neo4j.com/)リソースの厳選リスト。
GitHubの`awesome-*`トレンドに着想を得ています。

よく知られたリソースを分類し、コミュニティ主導で収集することを目標としています。
共有、提案、コントリビューションをいつでも歓迎します。

すべての[コントリビューター](https://github.com/Neueda/awesome-neo4j/graphs/contributors)に感謝します。

[Neueda R&D](http://labs.neueda.com/)が管理しています。

目次
=================

  * [基礎](#basics)
  * [コネクター](#connectors)
    * [Bolt](#bolt)
    * [REST API](#rest-api)
      * [Java](#java)
      * [Ruby](#ruby)
      * [Python](#python)
      * [PHP](#php)
      * [その他](#other)
  * [クラウド](#cloud)
  * [パッケージ](#packages)
  * [Docker](#docker)
  * [全文検索](#full-text-search)
  * [インポート](#import)
  * [ベンチマーク](#benchmarking)
  * [拡張](#extensions)
  * [ストアドプロシージャ](#stored-procedures)
  * [開発](#development)
  * [エディター](#editors)
  * [シェル](#shell)
  * [可視化](#visualization)
  * [ツール](#tools)
  * [リソース](#resources)
    * [学習](#learn)
    * [認定](#certification)
    * [Bolt](#bolt-1)
    * [書籍](#books)
    * [その他](#miscellaneous)
  * [ライセンス](#license)

[gh-md-toc](https://github.com/ekalinin/github-markdown-toc.go)で作成。

# 基礎 <a id="basics"></a>

- [公式ドキュメント](https://neo4j.com/docs/)
- [Cypher Refcard](https://neo4j.com/docs/cypher-refcard/current/)
- [開発者向けリソース](https://neo4j.com/developer/get-started/)
- [Gists](http://graphgist.neo4j.com/) - Neo4j GraphGistを使うと、単純なテキストファイルでドメインを記述・モデル化し、任意のブラウザーで情報豊富な対話型ページとして描画できる。特定のドメイン、ユースケース、質問、グラフ問題の文書化に最適。
- [Neo4j Examples](https://github.com/neo4j-examples) - Neo4jとライブラリ利用の例。

# 関連プロジェクト <a id="related-project"></a>

- [openCypher](http://www.opencypher.org/) - 業界で最も広く採用されているグラフクエリ言語Cypherの新たな公開実装を提供するオープンソースプロジェクト。
- [Bolt Protocol](https://boltprotocol.org) - データベースアプリケーション向けに設計された、非常に効率的で軽量なクライアント・サーバープロトコル。

# コネクター <a id="connectors"></a>

## Bolt

- [neo4j-java-driver](https://github.com/neo4j/neo4j-java-driver) - Neo4jバイナリプロトコル向けJavaドライバー。
- [neo4j-python-driver](https://github.com/neo4j/neo4j-python-driver) - Neo4jバイナリプロトコル向けPythonドライバー。
- [neo4j-javascript-driver](https://github.com/neo4j/neo4j-javascript-driver) - Neo4jバイナリプロトコル向けJavaScriptドライバー。
- [neo4j-dotnet-driver](https://github.com/neo4j/neo4j-dotnet-driver) - Neo4j（Bolt）向け.NETドライバー。
- [neo4j-bolt-php](https://github.com/graphaware/neo4j-bolt-php) - Neo4jバイナリプロトコル向けPHPドライバー。
- [libneo4j-client](https://github.com/cleishm/libneo4j-client) - Cで記述されたNeo4jクライアントライブラリ。完全なドライバーではなく、基本ツールや各種言語のドライバーを構築する基盤として設計。Neo4jサーバーとのセッション確立、評価する文の送信、結果取得の詳細を処理する。
- [neo4j-spark-connector](https://github.com/neo4j-contrib/neo4j-spark-connector) - Neo4j 3.0のBoltプロトコルを基盤とするNeo4j-Spark Connector。
- [neo4j-elixir-driver](https://github.com/mschae/boltex) - Neo4j Boltプロトコル向けElixirドライバー。
- [neo4j-elixir-wrapper](https://github.com/florinpatrascu/bolt_sips) - BoltプロトコルをラップしたElixir向けNeo4jドライバー。Boltexのフォーク。

## REST API

### Java

- [neo4j-ogm](https://github.com/neo4j/neo4j-ogm) - Neo4j向けオブジェクト・グラフマッピングライブラリ。
- [spring-data-neo4j](https://github.com/spring-projects/spring-data-neo4j) - JavaでNeo4jグラフデータベースを使う際の開発者生産性向上を支援。
- [neo4j-jdbc](https://github.com/neo4j-contrib/neo4j-jdbc) - Neo4j JDBCドライバー。
- [jcypher](https://github.com/Wolfgang-Schuetzelhofer/jcypher) - 複数の抽象化水準からNeo4jグラフデータベースへアクセスするJavaライブラリ。

### Ruby

- [neo4jrb](https://github.com/neo4jrb/neo4j) - Ruby向けNeo4jグラフデータベースのActive Modelラッパー。
- [neography](https://github.com/maxdemarzi/neography) - Neo4j REST APIの薄いRubyラッパー。

### Python

- [py2neo](https://github.com/nigelsmall/py2neo) - Pythonアプリケーション内またはコマンドラインからNeo4jを扱う包括的ツールキット。
- [neomodel](https://github.com/neo4j-contrib/neomodel) - py2neo上に構築された、Neo4jグラフデータベース向けオブジェクト・グラフマッパー（OGM）。

### PHP

- [Neo4j-PHP-OGM](https://github.com/graphaware/neo4j-php-ogm) - Neo4j向けDoctrine形式のオブジェクト・グラフマッパー。
- [neo4jphp](https://github.com/jadell/neo4jphp) - Neo4j RESTインターフェースのPHPラッパー。
- [NeoEloquent](https://github.com/Vinelab/NeoEloquent) - EloquentベースのNeo4j ORM。
- [neo4j-php-client](https://github.com/graphaware/neo4j-php-client/tree/4.0) - HTTPとBoltプロトコルを活用するNeo4j向けPHPクライアント。
- [Spider](https://github.com/spider/spider) - PHP向けのシンプル、柔軟、美しいグラフデータ抽象化。

### その他 <a id="other"></a>

- [node-neo4j](https://github.com/thingdom/node-neo4j) - Node向けREST APIクライアント。
- [Neo4jClient](https://github.com/Readify/Neo4jClient) - .NETクライアントバインディング。
- [neoism](https://github.com/jmcvetta/neoism) - Golang向けクライアント。
- [neocons](https://github.com/michaelklishin/neocons) - REST API向けの高機能でClojureらしいクライアント。
- [RNeo4j](https://github.com/nicolewhite/RNeo4j) - R向けドライバー。
- [AnormCypher](https://github.com/AnormCypher/AnormCypher) - Play FrameworkのAnormを基盤とするScalaライブラリ。

# クラウド <a id="cloud"></a>

- [GrapheneDB](https://www.graphenedb.com/) - 世界初の完全マネージド
Neo4jグラフデータベース。
- [GraphStory](https://www.graphstory.com/) - Neo4jエンタープライズクラウドプロバイダー。

# パッケージ <a id="packages"></a>

- [Debian Packages](http://debian.neo4j.org/)
- [Yum Repo](http://yum.neo4j.org/stable/)

# Docker

- [docker-neo4j](https://github.com/neo4j/docker-neo4j) - Neo4jグラフデータベース向けDockerイメージ。
- [docker-neo4j-cluster](https://github.com/ekino/docker-neo4j-cluster) - Neo4jクラスターを短時間で稼働。

# 全文検索 <a id="full-text-search"></a>

- [GraphAware Neo4j Elasticsearch Integration](https://github.com/graphaware/neo4j-to-elasticsearch) - Neo4jとElasticsearchを統合するGraphAware Frameworkモジュール。
- [GraphAware Graph-Aided Search](https://github.com/graphaware/graph-aided-search) - パーソナライズ検索向けNeo4j統合を提供するElasticsearchプラグイン。
- [neo4j-elasticsearch](https://github.com/neo4j-contrib/neo4j-elasticsearch) - Neo4jとElasticsearchの統合。

# インポート <a id="import"></a>

- [GraphAware Neo4j Importer](https://github.com/graphaware/neo4j-importer) - SQLデータベース、CSVファイルなどから、複雑でビジネスロジックの多い高性能Neo4jインポートを直接行うJavaインポーターのひな形。
- [neo4j-csv-firehose](https://github.com/sarmbruster/neo4j-csv-firehose) - Neo4jの`LOAD CSV` Cypherコマンドでほかのデータソースからも読み込めるようにする。
- [neo4j-rdbms-import](https://github.com/jexp/neo4j-rdbms-import) - リレーショナルデータベースからNeo4jへの自動インポーター。
- [Doc manager for Neo4j](https://github.com/neo4j-contrib/neo4j_doc_manager) - Mongo Connectorが指定する形式に従ってMongoDB文書をNeo4jグラフ構造で利用可能にし、関係を簡単に照会できるNeo4j Doc Manager。
- [neoloadcsvskelgen](https://github.com/wadael/neoloadcsvskelgen) - ファイル名、区切り文字、ヒントという少量の入力からLOAD CSV Cypherコードのひな形を出力。時間を節約し、入力ミスを防ぐ。

# ベンチマーク <a id="benchmarking"></a>

- [neoprofiler](https://github.com/moxious/neoprofiler) - Neo4jデータベースのプロファイリングユーティリティ。

# 拡張 <a id="extensions"></a>

- [GraphAware Neo4j UUID](https://github.com/graphaware/neo4j-uuid) - グラフ内の全ノードへ透過的にUUIDを割り当てるGraphAware Runtime Module。
- [GraphAware Neo4j ChangeFeed](https://github.com/graphaware/neo4j-changefeed) - グラフへ加えられた最新の変更をユーザーが把握できるGraphAware Framework Runtime Module。
- [GraphAware Neo4j TimeTree](https://github.com/graphaware/neo4j-timetree) - Neo4jで時間を表すツリーを扱うJavaおよびREST API。
- [GraphAware Neo4j Recommendation Engine](https://github.com/graphaware/neo4j-reco) - リアルタイムおよび事前計算の推薦に対応するNeo4jベース推薦エンジンモジュール。
- [GraphAware Neo4j Algorithms](https://github.com/graphaware/neo4j-algorithms) - 独自のJavaおよびREST APIを備えたNeo4j向けカスタムグラフアルゴリズム。
- [GraphAware Neo4j Warmup](https://github.com/graphaware/neo4j-warmup) - 1回のREST呼び出しでNeo4jキャッシュをウォームアップするシンプルなライブラリ。
- [GraphAware Neo4j RestTest](https://github.com/graphaware/neo4j-resttest) - スタンドアロンサーバーモードで動作するNeo4jと通信するコードをテストするシンプルなライブラリ。
- [GraphAware Neo4j Expire](https://github.com/graphaware/neo4j-expire) - 有効期限または存続時間（TTL）に達したノードとリレーションをデータベースから自動削除するシンプルなライブラリ。
- [Spatial](https://github.com/neo4j-contrib/spatial) - データに対する空間演算をNeo4jで利用しやすくするユーティリティライブラリ。
- [Graphify](https://github.com/Graphify/graphify) - グラフベースの階層的パターン認識を使った文書・テキスト分類用Neo4jアンマネージド拡張。
- [neo4j-tx-participation](https://github.com/jexp/neo4j-tx-participation) - Neo4j REST APIを、トランザクションCypherエンドポイントが開始したトランザクションへ参加させるNeo4j Server Extension。

# ストアドプロシージャ <a id="stored-procedures"></a>

- [Apoc : Awesome Procedures on Cypher](https://github.com/neo4j-contrib/neo4j-apoc-procedures) - Neo4j 3.x向けの便利なプロシージャ集。
- [Graphgen](https://github.com/graphaware/neo4j-graphgen-procedure) - Cypherでテストデータを簡単に生成するNeo4jプロシージャ。

# 開発 <a id="development"></a>

- [Maven repositories](https://m2.neo4j.org/index.html) - Neo4j Mavenリポジトリ（リリース、スナップショット）。
- [GraphAware Neo4j Framework](https://github.com/graphaware/neo4j-framework)- 汎用・ドメイン固有機能、分析機能、反復型グラフアルゴリズムなどを構築する基盤を提供し、Neo4j開発を高速化するGraphAware Framework。
- [cypher-dsl](https://github.com/neo4j-contrib/cypher-dsl) - Cypher Query Language向けJava DSLと、任意で使えるQuery DSLモード。
- [Liquigraph](https://github.com/liquigraph/liquigraph) - Liquibaseの仕組みに基づくデータベース移行管理ツール。
- [blueprints](https://github.com/tinkerpop/blueprints) - プロパティグラフデータモデル向けのインターフェース、実装、補助実装、テストスイート集。グラフデータベースにおけるJDBCに相当。
- [structr](https://github.com/structr/structr) - Neo4jベースのグラフアプリケーションプラットフォーム。
- [Reco4PHP](https://github.com/graphaware/reco4php) - PHP向けNeo4jベース推薦エンジンフレームワーク。

# エディター <a id="editors"></a>

- [jetbrains-plugin-graph-database-support](https://github.com/neueda/jetbrains-plugin-graph-database-support) - JetBrains製IDE群のグラフデータベース対応。
- [cypher-vim-syntax](https://github.com/neo4j-contrib/cypher-vim-syntax) - Cypher向けの非常に基本的なVim構文。

# シェル <a id="shell"></a>

- [cycli](https://github.com/nicolewhite/cycli) - Cypher向けコマンドラインインターフェース。
- [neo4j-shell-tools](https://github.com/jexp/neo4j-shell-tools) - neo4j-shell向けの各種インポート／エクスポートツール。

# 可視化 <a id="visualization"></a>

- [neoclipse](https://github.com/neo4j-contrib/neoclipse) - Neo4jデータベースを表示、編集、探索するツール。
- [Gephi](https://github.com/gephi/gephi) - 大規模グラフを可視化・操作する受賞歴のあるオープンソースプラットフォーム。
- [Linkurious](https://linkurio.us/) - シンプルなWebインターフェースでグラフデータを検索・可視化。
- [yFiles for HTML](https://www.yworks.com/products/yfiles-for-html) - 商用の汎用グラフ可視化プログラミングライブラリ。[JavaScriptでNeo4jデータベースを可視化するデモ](http://live.yworks.com/demos/#neo4j)を備える。[無料のNeo4j Graph Explorerアプリ](https://www.yworks.com/neo4j-explorer/)の基盤でもある。

# ツール <a id="tools"></a>

- [Graphgen](http://graphgen.graphaware.com) - Cypher DSLベースのグラフ生成エンジン。
- [store-utils](https://github.com/jexp/store-utils) - Neo4jストアを圧縮、コピー、修復、解析するユーティリティ。
- [ineo](https://github.com/cohesivestack/ineo)- シンプルだが便利なNeo4jインスタンス管理ツール。
- [yFiles neo4j Graph Explorer](https://www.yworks.com/blog/neo4j-node-design) - グラフデータとデータベーススキーマを可視化する、シンプルで無料のオンラインツール。

## 学習 <a id="learn"></a>

- [Getting Started with Neo4j](https://neo4j.com/graphacademy/online-training/getting-started-graph-databases-using-neo4j/)
- [Neo4j in Production](https://neo4j.com/graphacademy/online-training/neo4j-production/)
- [Neo4j Koans](https://github.com/jimwebber/neo4j-tutorial) - Neo4j向けのJava製公案形式チュートリアル。

## 認定 <a id="certification"></a>

- [Neo4j Certification](https://neo4j.com/graphacademy/neo4j-certification/) - Neo4j認定プロフェッショナルを目指す。

## その他 <a id="miscellaneous"></a>

- [Neo4j's Idea board](https://trello.com/b/2zFtvDnV/public-idea-board)
- [Hardware Sizing Calculator](https://neo4j.com/hardware-sizing-calculator/)

# ライセンス <a id="license"></a>

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる限り、[Neueda R&D](https://github.com/Neueda)は本作品に関するすべての著作権および関連する権利または隣接権を放棄しています。
