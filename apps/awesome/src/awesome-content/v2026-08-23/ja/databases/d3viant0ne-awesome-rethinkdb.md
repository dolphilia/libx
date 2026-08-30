---
title: "Awesome Rethinkdb"
description: "Rethinkdbを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-d3viant0ne-awesome-rethinkdb-readme-md"
---

# Awesome Rethinkdb

Rethinkdbを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

### 目次
 - [Resources](#resources)
  - [Documentation](#documentation)
  - [Community](#community)
 - [JavaScript](#javascript-libraries)
 - [Python](#python-libraries)
 - [Ruby](#ruby-libraries)
 - [Java](#java-libraries)
 - [Additional Languages](#additional-languages)
  - [Community Supported](#community-supported-drivers)
 - [Research and Training](#research-and-training)
  - [Articles](#articles)
  - [Talks](#talks)
  - [RethinkDB Examples](#rethinkdb-examples)
  - [Community Examples](#community-examples)
 - [Tools](#tools)
  - [Administration](#administrative-tools)
  - [Deployment](#deployment)

<br>
> <h3>RethinkDB Ecosystem</h3>

#### ドキュメント

- [RethinkDB](http://rethinkdb.com/docs/) - RethinkDBドキュメント。
- [ReQL API](http://rethinkdb.com/api/javascript/) - JavaScript ReQLコマンドリファレンス。

#### コミュニティ

- [Request Slack Invite](http://slack.rethinkdb.com/)
- [RethinkDB StackOverflow](http://stackoverflow.com/tags/rethinkdb)
- [RethinkDB Blog](https://www.rethinkdb.com/blog/)
- [RethinkDB Google Group](https://groups.google.com/forum/#!forum/rethinkdb)
- [RethinkDB YouTube Channel](https://www.youtube.com/channel/UC1kJkmSWt_snLDfuXgJnLnQ)
- [RethinkDB Reddit](https://www.reddit.com/r/rethinkdb/) 

<br>
> <h3>JavaScript Libraries</h3>

##### Drivers

- [RethinkDB JavaScript](https://www.rethinkdb.com/docs/install-drivers/javascript/) - 公式サポートのJavaScriptドライバー。
 - メンテナー: `RethinkDB Team`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb) 
- [RethinkDB Dash](https://github.com/neumino/rethinkdbdash) - 接続プールとストリームをサポートするRethinkDB向け高度なNode.jsドライバー。
 - メンテナー: `Michel`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/neumino) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/neumino) 

##### ORM

- [Thinky](https://github.com/neumino/thinky) - RethinkDB向けJavaScript ORM。
 - Maintainer: `Michel`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/neumino) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/neumino) 
- [JSData RethinkDB](https://github.com/js-data/js-data-rethinkdb) - js-data ORM向けRethinkDBアダプター。
 - Maintainer: `JS Data Organization`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/js-data)

##### Extension Libraries

- [RethinkDB Pool](https://github.com/hden/rethinkdb-pool) - RethinkDB向け接続プール。
 - Maintainer: `Hao-kang Den`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/hden) 
- [Express Session RethinkDB](https://github.com/armenfilipetyan/express-session-rethinkdb) - Express 4.x向けRethinkDBセッションストア。
 - Maintainer: `@armenfilipetyan`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/armenfilipetyan) 
 
##### Technology Integrations

- [Hapi RethinkDB CRUD](https://github.com/athlite/hapi-rethinkdb-crud) - RethinkDBと連携するHapi向けCRUDハンドラー。
 - Maintainer: `Thomas Eng`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/athlite) 
- [Sails Hook Thinky](https://github.com/mwielbut/sails-hook-thinky) - SailsでRethinkDB向けThinky ORMを有効にするフック。
 - Maintainer: `Matt Wielbut`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/mwielbut) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/mwielbut) 
- [KOA RethinkDB](https://github.com/hden/koa-rethinkdb) - RethinkDBクライアントを取得するKoaミドルウェア。
 - Maintainer: `Hao-kang Den`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/hden) 
- [RabbitMQ](http://rethinkdb.com/docs/rabbitmq/javascript/) - RethinkDBとRabbitMQの統合。
 - Maintainer: `RethinkDB Team`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb) 

**[Back to top](#table-of-contents)**

<br>
> <h3>Python Libraries</h3>

##### Drivers

- [RethinkDB Python](https://www.rethinkdb.com/docs/install-drivers/python/) - 公式サポートのPythonドライバー。
 - Maintainer: `RethinkDB Team`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb)

##### ORM

- [Remodel](https://github.com/linkyndy/remodel) - Pythonで書かれた、非常にシンプルでありながら強力・拡張可能なRethinkDB向けObject Document Mapper。
 - Maintainer: `Andrei Horak`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/linkyndy) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/linkyndy)
- [Rethink](https://github.com/caoimhghin/rethink) - Appengine NDBに着想を得たPython RethinkDB Object Mapperインターフェース。
 - Maintainer: `Kevin Amerson`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/caoimhghin) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/kevinamerson)

##### Technology Integrations

- [flask-rethinkdb](https://github.com/linkyndy/flask-rethinkdb) - FlaskへRethinkDBサポートを追加する。
 - Maintainer: `Andrei Horak`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/linkyndy) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/linkyndy)
- [RabbitMQ](https://www.rethinkdb.com/docs/rabbitmq/python/) - RethinkDBとRabbitMQの統合。
 - Maintainer: `RethinkDB Team`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb) 

**[Back to top](#table-of-contents)**

<br>
> <h3>Ruby Libraries</h3>

##### Drivers

- [RethinkDB Ruby](http://rethinkdb.com/docs/install-drivers/ruby/) - 公式サポートのRubyドライバー。
 - Maintainer: `RethinkDB Team`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb)

##### ORM

- [NoBrainer](https://github.com/nviennot/nobrainer) - RethinkDB向けRuby ORM。
 - Maintainer: `Nicolas Viennot`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/nviennot) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/nviennot)

##### Technology Integrations

- [Epiphy](https://github.com/kureikain/epiphy) - 軽量なRethinkDB ORM。
 - Maintainer: `Vinh Quốc Nguyễn`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/kureikain) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/kureikain)
- [lotus-rethinkdb](https://github.com/angeloashmore/lotus-rethinkdb) - Lotus::Model向けRethinkDBアダプター。
 - Maintainer: `Angelo Ashmore`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/angeloashmore) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/angeloashmore)
- [RabbitMQ](https://www.rethinkdb.com/docs/rabbitmq/ruby/) - Integrating RethinkDB with RabbitMQ
 - Maintainer: `RethinkDB Team`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb) 

**[Back to top](#table-of-contents)**

<br>
> <h3>Java Libraries</h3>

##### Drivers

- [RethinkDB Java](http://rethinkdb.com/docs/install-drivers/java/) - 公式サポートのJavaドライバー。
 - Maintainer: `RethinkDB Team`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb)
- [Rethinker](https://github.com/futurechimp/rethinker) - 公式RethinkDB Javaドライバーと併用するシンプルなシリアル化ライブラリ。
 - Maintainer: `Dave Hrycyszyn`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/futurechimp) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/futurechimp)
- [Rethinkdb4j](https://github.com/tony-brewerio/rethinkdb4j) - Asynchronous Netty-based RethinkDB driver for Java.
 - Maintainer: `Anton Ustyuzhanin`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/tony-brewerio)


##### ORM

- [RethinkDB Java ORM](https://github.com/PeterKnego/rethinkdb-java-orm) - A custom POJO converter for RethinkDB Java driver.
 - Maintainer: `Peter Knego`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/PeterKnego) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/peterknego)

##### Technology Integrations

- [RabbitMQ](https://www.rethinkdb.com/docs/rabbitmq/java/) - Integrating RethinkDB with RabbitMQ
 - Maintainer: `RethinkDB Team`  [![Github](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb) 

**[Back to top](#table-of-contents)**

<br>
> <h3>Additional Languages</h3>

#### Community Supported Drivers

- [C#](https://github.com/bchavez/RethinkDb.Driver) - A C#/.NET RethinkDB driver striving for 100% ReQL API coverage.
- [C++](https://github.com/AtnNn/librethinkdbxx) - RethinkDB driver for C++.
- [Clojure](https://github.com/apa512/clj-rethinkdb) - Clojure向けRethinkDBクライアント。
- [Dart](https://github.com/billysometimes/rethinkdb) - RethinkDB v2.0.3向けDartドライバー。
- [Elixir](https://github.com/hamiltop/rethinkdb-elixir) - 純粋なElixirによる多重化RethinkDBクライアント。
- [Go](https://github.com/dancannon/gorethink) - RethinkDB向けGo言語ドライバー。 
- [Haskell](https://github.com/AtnNn/haskell-rethinkdb) - Haskell向けRethinkDBクライアントライブラリ。
- [Lisp](https://github.com/orthecreedence/cl-rethinkdb) - Common Lisp向けRethinkDBドライバー。
- [Lua](https://github.com/grandquista/Lua-ReQL) - LuaによるRethinkDBドライバー。
- [Objective-C](https://github.com/dparnell/rethink-db-client) - Objective-Cで書かれたRethinkDBクライアント。 
- [Perl](https://github.com/njlg/perl-rethinkdb) - 純粋なPerl RethinkDBドライバー。
- [PHP](https://github.com/danielmewes/php-rql) - RethinkDBクエリー言語（ReQL）向けPHPクライアントドライバー。
- [Scala](https://github.com/kclay/rethink-scala) - RethinkDB向けScalaドライバー。

**[Back to top](#table-of-contents)**

<br>
> <h3>学習とトレーニング</h3>

#### 記事

- [Shahid Shaikh | 08-Mar-16](https://codeforgeek.com/2016/03/building-real-time-polling-app-rethinkdb-nodejs/) - Building real time polling app using RethinkDB and Nodejs.
- [Dr. Gleb Bahmutov PhD | 08-Feb-16](https://glebbahmutov.com/blog/redux-and-rethinkdb/) - Redux and RethinkDB
- [Scott Hasbrouck | 13-Mar-16](http://www.scotthasbrouck.com/blog/2016/3/13/using-socketio-with-rethinkdb-changefeeds-to-build-a-reactive-backend) - Using Socket.Io With RethinkDB Changefeeds To Build A Reactive JavaScript Stack
- [Khalid Abuhakmeh | 15-Nov-15](http://www.khalidabuhakmeh.com/getting-started-with-rethinkdb-and-asp-net-5) - Getting Started With RethinkDB and ASP.NET 5.
- [Slava Akhmechet | 01-Sept-15](http://www.infoworld.com/article/2975838/database/build-real-time-web-apps-with-rethinkdb.html) - Build real-time Web apps with RethinkDB.
- [Justin for Fanout | 20-May-15](http://blog.fanout.io/2015/05/20/building-a-realtime-api-with-rethinkdb/) - Building a realtime API with RethinkDB.
- [Nicholas Duffy | 30-Apr-15](https://strongloop.com/strongblog/rethinkdb-connector-loopback-node-js-framework/) - Getting Started with the RethinkDB Connector for LoopBack.
- [Rob Conery | 17-Apr-15](http://rob.conery.io/2015/04/17/rethinkdb-2-0-is-amazing/) - RethinkDB 2.0 Is Amazing.
- [Gordon Dent | 01-Apr-15](https://www.airpair.com/rethinkdb/posts/moving-from-sql-to-rethinkdb) - A Comprehensive Guide to moving from SQL to RethinkDB.
- [Gordon Dent | 11-Mar-15](http://blog.workshape.io/we-use-rethinkdb-at-workshapeio/) - We use RethinkDB at Workshape.io.

#### 講演

- [Michael Glukhovsky at Clevertech | 30-Mar-16](https://www.youtube.com/watch?v=28XKxLPv0Hs) - RethinkDB Presentation to Clevertech.
- [Ryan Paul at ForwardJS | 21-Jan-16](https://www.youtube.com/watch?v=xCU9RHDWXIY) - RethinkDB: Database for realtime apps.
- [Rob Conery at DevDay 2015 | 17-Sept-15](https://www.youtube.com/watch?v=Ee1v_SuECRk) - Rethinking NoSQL.
- [Jorge Silva at RethinkDB Meetup | 29-June-15](https://www.youtube.com/watch?v=vJtDNRsUozk) - Data Modeling in RethinkDB.
- [Ben Tranter | 05-Apr-15](https://www.youtube.com/watch?v=d01rLeIjTLE) - A Simple REST API with Express, RethinkDB, and Thinky.
 - [Associated Source](https://github.com/bentranter/ampersand-rethink-express)
- [Ryan Paul at Mattermark | 17-Feb-15](https://www.youtube.com/watch?v=dhb63boH8E8) - Build a realtime RethinkDB cluster monitoring app with live graphs.
 - [Associated Blog Post](http://rethinkdb.com/blog/realtime-cluster-monitoring/) - A realtime RethinkDB cluster monitoring app with live graphs.

#### RethinkDBの例

- [RethinkDB NodeJS Chat](https://github.com/rethinkdb/rethinkdb-example-nodejs-chat) - RethinkDB上で動くnode.jsチャットアプリケーション。
- [RethinkDB Flask Backbone ToDo](https://github.com/rethinkdb/rethinkdb-example-flask-backbone-todo) - FlaskとRethinkDB上で動く標準的なBackbone ToDoアプリケーション。
- [RethinkDB ccoenraets/nodecellar Fork](https://github.com/rethinkdb/nodecellar-rethinkdb) - Backbone.js、Bootstrap、Node.js、Express、RethinkDBで構築したサンプルアプリ。
- [RethinkDB PubNub Live Blog](https://github.com/rethinkdb/rethinkdb-pubnub-liveblog) - PubNub / Expressブログのサンプルアプリ。
- [RethinkDB Angular Express Promise](https://github.com/rethinkdb/rethinkdb-example-nodejs/tree/master/todo-angular-express-promise) - RethinkDB、ExpressJS、AngularJSを使うPromiseベースのToDo例。
- [RethinkDB Angular Express](https://github.com/rethinkdb/rethinkdb-example-nodejs/tree/master/todo-angular-express) - RethinkDB、ExpressJS、AngularJSを使うToDo例。
- [RethinkDB Angular KOA](https://github.com/rethinkdb/rethinkdb-example-nodejs/tree/master/todo-angular-koa) - RethinkDB、KoaJS、AngularJSを使うToDo例。 

#### コミュニティの例

- [RethinkDB Chat](https://github.com/thejsj/rethinkdb-chat) - RethinkDB + Socketsで構築したシンプルなチャットアプリケーション。
- [RethinkDB Reactjs](https://github.com/arkency/rethinkdb-reactjs) - rethinkdb + react.js + ActionController::Live（Rails）+ Server Side Events。
- [Realtime Chat RethinkDB](https://github.com/Unrestricted-Coding/realtime-chat-RethinkDB) - RethinkDBで構築したリアルタイムチャットルーム。
- [Boot RethinkDB](https://github.com/geowarin/boot-rethinkdb) - Spring BootとRethinkDBによるチャット例。
- [Go RethinkDB ToDo](https://github.com/dancannon/GoRethink_TodoDemo) - Go RethinkDB Todo List Example Application.
- [Meguca](https://github.com/bakape/meguca) - High performance real-time imageboard in Go, TypeScript and RethinkDB.
- [VueJS RethinkDB](https://github.com/alexcheninfo/vuejs-rethinkdb-example) - Vuejs + Express + RethinkDB example.
- [3ree](https://github.com/GordyD/3ree) - An example universal JS application written with the 3REE stack, React + Redux + RethinkDB + Express.
- [Meteor GraphQL](https://github.com/AdamBrodzinski/Meteor-RethinkDB-GraphQL) - A Meteor and RethinkDB Example Using GraphQL.

**[Back to top](#table-of-contents)**

<br>
> <h3>Tools</h3>

#### Administrative Tools

- [Chateau](https://github.com/neumino/chateau) - RethinkDB向けのもう一つの優れたデータエクスプローラー。
- [RethinkDB CLI](https://github.com/athlite/rethinkdb-cli) - RethinkDB向けCLI・REPL。
- [RethinkDB Nightly](https://github.com/robconery/rethinkdb_nightly) - 夜間バックアップを実行しS3へ送信するNodeモジュール。

#### Deployment

- [Vagrant](https://github.com/RyanAmos/rethinkdb-vagrant) - VagrantでRethinkDBをインストールする。
- [Puppet](https://github.com/tmont/puppet-rethinkdb) - RethinkDB向けPuppetモジュール。
- [Chef](https://github.com/AVVSDevelopment/chef-rethinkdb) - Chef RethinkDBクックブック。
- [Wrecker](https://github.com/mies/box-rethinkdb) - RethinkDB向けWercker box。
- [Docker](https://github.com/crosbymichael/Dockerfiles/blob/master/rethinkdb/Dockerfile) - 単一ノード用Dockerfile。

<br>
> <h3>License</h3>

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
