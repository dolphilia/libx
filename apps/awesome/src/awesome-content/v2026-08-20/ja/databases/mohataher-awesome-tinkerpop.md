---
title: "mohataher/awesome-tinkerpop"
description: "mohataher/awesome-tinkerpop の定本スナップショット"
licenseSource: "github-mohataher-awesome-tinkerpop-readme-md"
---

# Awesome TinkerPop [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

![alt tag](https://raw.githubusercontent.com/mohataher/awesome-tinkerpop/master/tinkerpop-splash.png)

GitHub上の優れたTinkerPopライブラリだけを集めたリストです。

>Apache TinkerPop™は、グラフデータベース（OLTP）とグラフ分析システム（OLAP）の両方に対応するグラフコンピューティングフレームワークです。

### 目次
* [TinkerPop3](#tinkerpop3)
	- [実装](#tinkerpop3-implementations)
	- [ラッパー/クライアント](#wrappers)
	- [クエリー言語](#qlang)
* [TinkerPop2](#tinkerpop2)
* [コミュニティ](#communites)
* [フォローすべき人](#people-to-follow)
* [チュートリアルとリソース](#tutorials-and-resources)
* [貢献方法](#contributing)
* [ライセンス](#license)

### <A NAME="tinkerpop3"></A>TinkerPop3ライブラリ
#### <A NAME="tinkerpop3-implementations"></A>実装
* [TinkerPop3 implementation](https://github.com/apache/tinkerpop) - Apache TinkerPopのミラー。
* [sqlg](https://github.com/pietermartin/sqlg) - RDBMS上のTinkerPop3実装。
* [blazegraph](https://github.com/blazegraph/database) - 高性能グラフデータベースBlaze Graph向けのTinkerPop3[実装](https://github.com/blazegraph/tinkerpop3)。
* [tinkergraph-js](https://github.com/jbmusso/tinkergraph-js) - TinkerPopのTinkerGraphインメモリグラフデータベースの純粋なJavaScript実装。
* [gremlin-javascript](https://github.com/jbmusso/gremlin-javascript) - TinkerPop3 Gremlin Server向けJavaScriptグラフデータベースクライアント。
* [Elastic Gremlin](https://github.com/rmagen/elastic-gremlin) - Elasticsearchバックエンド上のTinkerPop3実装。
* [Hadoop (Giraph)](http://tinkerpop.apache.org/docs/current/reference/#giraphgraphcomputer) - Giraphを使うOLAPグラフプロセッサー。
* [Hadoop (Spark)](http://tinkerpop.apache.org/docs/current/reference/#sparkgraphcomputer) - Sparkを使うOLAPグラフプロセッサー。
* [IBM Graph](https://console.ng.bluemix.net/catalog/services/ibm-graph/) - サービスとして提供されるOLTPグラフデータベース。
* [Neo4j](http://tinkerpop.apache.org/docs/currentg/#neo4j-gremlin) - OLTPグラフデータベース。
* [Stardog](http://stardog.com/) - OLTP・OLAPをサポートするRDFグラフデータベース。
* [TinkerGraph](http://tinkerpop.apache.org/docs/current/reference/#tinkergraph-gremlin) - インメモリOLTP・OLAP参照実装。
* [Unipop](https://github.com/rmagen/unipop) - OLTP ElasticsearchおよびJDBCバックのグラフ。
* [DuctileDB](https://github.com/PureSolTechnologies/DuctileDB) - Hadoop/HBaseに基づき多数の機能を提供するグラフデータベース。
* [hgraphdb](https://github.com/rayokota/hgraphdb) - TinkerPopグラフデータベースとしてのHBase。
* [JanusGraph](https://github.com/JanusGraph/janusgraph) - オープンソースの分散グラフデータベース http://janusgraph.org
* [JanusGraph for DynamoDB (Amazon)](https://github.com/awslabs/dynamodb-janusgraph-storage-backend) - JanusGraph向けAmazon DynamoDBストレージバックエンド。
* [orientdb-gremlin](https://github.com/orientechnologies/orientdb-gremlin) - OrientDB向けTinkerPop3 Graph Structure実装。

#### <A NAME="wrappers"></A>ラッパー/クライアント
##### C# .NET
*   [Teva Gremlin](https://www.nuget.org/packages/Teva.Common.Data.Gremlin/) (.NET - C#) - .NET向けGremlin Serverドライバー。
##### Clojure
* [ogre](https://github.com/clojurewerkz/ogre) - TinkerPopグラフをクエリーするClojureライブラリ。
* [scalajs-gremlin-client](https://github.com/viagraphs/scalajs-gremlin-client) (scala) - アドホックに拡張可能でリアクティブ、typeclassベースのAPIを持つGremlin-Serverクライアント。
##### Go
* [go-gremlin](https://github.com/go-gremlin/gremlin) - TinkerPop3 Gremlin Server向けGoグラフデータベースクライアント。
* [Gremgo](https://github.com/qasaur/gremgo) - TinkerPopグラフデータベーススタック向けの高速、効率的、使いやすいGoクライアント。
* [grammes](https://github.com/northwesternmutual/grammes) - Gremlinを使ってApache TinkerPop™グラフコンピューティングフレームワークと通信するためのGoパッケージ。
##### Haskell
* [greskell-websocket](https://github.com/debug-ito/greskell) - TinkerPop3 Gremlin Server向けHaskellクライアント。
##### Java
* [gremlin-driver](http://tinkerpop.apache.org/docs/current/reference/#connecting-via-java) (java) - Java向けGremlin Serverドライバー。
* [neo4j-tinkerpop-api](https://github.com/neo4j-contrib/neo4j-tinkerpop-api) - TinkerPop3向けApacheライセンスのNeo4j API。
* [neo4j-gremlin-bolt](https://github.com/SteelBridgeLabs/neo4j-gremlin-bolt) - BOLTプロトコルでneo4jサーバーとApache Tinkerpop Java APIを使えるようにします。
* [Ferma](https://github.com/Syncleus/Ferma) - TinkerPopグラフスタック向けORM / OGM。
##### Javascript
* [ts-tinkerpop](https://github.com/RedSeal-co/ts-tinkerpop) - Typescriptでnode-java APIを通じてTinkerPop3を使うユーティリティ。
* [gremlin-javascript](https://github.com/jbmusso/gremlin-javascript) (js) - JavaScript向けGremlin Serverドライバー。
##### PHP
* [gremlin-php](https://github.com/PommeVerte/gremlin-php) - TinkerPop3互換のgremlin-server PHPドライバー。gremlin-serverとそのバックエンド（Neo4J、Titanなど）へ接続できます。
##### Python
* [Mogwai](https://github.com/platinummonkey/mogwai) - Python向けTinkerPop3グラフデータベースライブラリ。
* [python-gremlin-rest](https://github.com/windj007/python-gremlin-rest) - Gremlin Server向けRESTベースのクライアント。
* [gremlinclient](https://github.com/davebshow/gremlinclient) - Trollius、Tornado、Asyncioによる柔軟なコルーチン構文を可能にする、Gremlin Server向け非同期Python 2/3クライアント。
* [aiogremlin](https://github.com/davebshow/aiogremlin) (python) - asyncioとaiohttpに基づき、websocketを使ってGremlin Serverと通信するPython 3ライブラリ。
* [gremlinrestclient](http://gremlinrestclient.readthedocs.org/en/latest/) (python) - REST経由でHTTPを使いGremlin Serverと通信するPython 2/3ライブラリ。
* [goblin](https://github.com/ZEROFAIL/goblin) - TinkerPop3 Gremlin Server向けOGM。
* [goblin 3.5](https://github.com/davebshow/goblin) - TinkerPop 3 OGM GoblinのPython 3.5向け書き直し版。
##### Reactive
* [reactive-gremlin](https://github.com/coreyauger/reactive-gremlin) (scala) - Akka HTTP Websocketコネクター。
##### Scala
* [Gremlin Scala](https://github.com/mpollmeier/gremlin-scala) - Apache TinkerPop3 Graph DSL向けScalaラッパー。
* [blueprints-scala](https://github.com/anvie/blueprints-scala) - Tinkerpop Blueprints Scala。

#### <A NAME="qlang"></A>クエリー言語
* [gremlin-py](https://github.com/emehrkay/gremlinpy) - Gremlin Serverへ送れる純粋なPython Gremlinを記述。
* [gremlin-scala](https://github.com/mpollmeier/gremlin-scala) - TinkerPop3向けScala言語ラッパー。
* [gremlin-template-string](https://github.com/jbmusso/gremlin-template-string) - JavaScript Gremlin言語ビルダー。
* [ipython-gremlin](https://github.com/davebshow/ipython-gremlin) - IPythonとJupyterで使うGremlin。
* [ogre](http://ogre.clojurewerkz.org/) - TinkerPop3向けClojure言語ラッパー。
* [Peapod](https://github.com/bayofmany/peapod) - Tinkerpop3グラフスタック向け新しいオブジェクトグラフラッパー。
* [sparql-gremlin](https://github.com/dkuppitz/sparql-gremlin) - SPARQLからGremlinへのトラバーサルコンパイラー。
* [sql-gremlin](https://github.com/twilmes/sql-gremlin) - SQLからGremlinへのトラバーサルコンパイラー。
* [greskell](https://github.com/debug-ito/greskell) - Gremlinグラフクエリー言語向けHaskellバインディング。
* [Cypher for Gremlin](https://github.com/opencypher/cypher-for-gremlin) - 任意のGremlinグラフデータベースにCypherサポートを追加。

### <A NAME="tinkerpop2"></A>TinkerPop 2ライブラリ
* [Ferma](https://github.com/Syncleus/Ferma) - TinkerPopグラフスタック向けORM / OGM。
* [Frames](https://github.com/tinkerpop/frames) - Object to Graphフレームワーク。
* [Archimedes](https://github.com/clojurewerkz/archimedes) - Blueprints（TinkerPopグラフスタックの一部）向けClojureライブラリ。
* [AccumuloGraph](https://github.com/JHUAPL/AccumuloGraph) - Accumuloを使うTinkerPop Blueprints実装。
* [Frontenac](https://github.com/Loupi/Frontenac) - TinkerPop Stackの.NETポート。
* [Mogwai](https://github.com/platinummonkey/mogwai) - Python向けTinkerPop 2グラフデータベースライブラリ。
* [spring-data-gremlin](https://github.com/gjrwebber/spring-data-gremlin) - グラフベースのリポジトリ実装を容易にするSpring data gremlin。TinkerPop Blueprints 2.x APIを実装する可能性のある任意のグラフデータベースをSpring Dataでサポートします。
* [blueprints-scala](https://github.com/anvie/blueprints-scala) - TinkerPop Blueprints Scala。

## <A NAME="communites"></A>コミュニティ
* [Gremlin-users](https://groups.google.com/forum/#!forum/gremlin-users) - Gremlin利用者向けメーリングリスト。
* [Stack Overflow](http://stackoverflow.com/questions/tagged/tinkerpop3) - 比較的活発なStack Overflowコミュニティ。
* [TinkerPop-dev](http://mail-archives.apache.org/mod_mbox/incubator-tinkerpop-dev/) - TP3開発者向けメーリングリスト。

## <A NAME="people-to-follow"></A>フォローすべき人
* [Marko Rodriguez](https://markorodriguez.com/) - TinkerPopとAureliusの創設者。
* [Stephen Mallette](https://twitter.com/spmallette?lang=en-gb) - Gremlin、TinkerPop、Titan DBのシニア開発者。
* [Daniel Kuppitz](https://about.me/daniel.kuppitz) - Gremlinの主な開発者の一人。
* [Jason Plurad](https://github.com/pluradj) - IBMのシニア開発者。TinkerPopコミッターで、コミュニティでも活発です。

## <A NAME="tutorials-and-resources"></A>チュートリアルとリソース
* [Introduction to Gremlin](http://tinkerpop.apache.org/gremlin.html) - Gremlin言語の公式入門。
* [Datastax Introduction](https://academy.datastax.com/resources/getting-started-tinkerpop-and-gremlin) - Datastaxが提供するGremlinとTinkerPop3のチュートリアル。
* [TinkerPop Book](http://www.tinkerpopbook.com/) - 長く約束されながら現在まで実現していないTinkepropの書籍。通知を依頼できます。
* [Linux Foundation Presentation](http://events.linuxfoundation.org/sites/events/files/slides/ApacheCon2015TinkerPop3.pdf) - IBMのDavid RobinsonがApache TinkerPop3について行ったLinux Foundationのプレゼンテーション。
* [Getting Started with TinkerPop](http://tinkerpop.apache.org/docs/current/tutorials/getting-started/) - TinkerPopを始めて使うための基礎を学ぶ。
* [The Gremlin Console](http://tinkerpop.apache.org/docs/current/tutorials/the-gremlin-console/) - Gremlin Consoleのユースケースと利用パターンを説明。
* [Gremlin Recipes](http://tinkerpop.apache.org/docs/3.2.1-SNAPSHOT/recipes/) - 一般的なトラバーサルパターンとスタイルのリファレンス。
* [Gremlin Language Variants](http://tinkerpop.apache.org/docs/3.2.1-SNAPSHOT/tutorials/gremlin-language-variants/) - ホストプログラミング言語へGremlinを埋め込む方法を学ぶ。
* [SQL2Gremlin](http://sql2gremlin.com/) - SQLでデータをクエリーする際に見られる典型パターンでGremlinを学ぶ。
* [Getting Started with Graph Databases](https://academy.datastax.com/demos/getting-started-graph-databases) - リレーショナルデータベースとグラフデータベース、SQLとGremlinを比較。
* [Graph](https://github.com/krlawrence/graph) - グラフデータベース、Gremlin、TinkerPopのチュートリアル。

## <A NAME="contributing"></A>貢献方法
![alt tag](https://raw.githubusercontent.com/mohataher/awesome-tinkerpop/2eb47b34fbac875b922e2c66adf85d3fba34a7a6/awesome-tinkerpop.jpg)

[こちらのガイドライン](https://github.com/mohataher/awesome-tinkerpop/blob/2eb47b34fbac875b922e2c66adf85d3fba34a7a6/contributing.md)に従ってください。貢献とPRを素晴らしいものにしてください。

## <A NAME="license"></A>ライセンス
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法律で可能な限り、[@mohataher](https://github.com/mohataher)は本作に関する著作権および関連・隣接する権利をすべて放棄しています。
