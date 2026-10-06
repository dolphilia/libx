---
title: "Awesome Play1"
description: "Play 1.xのモジュールを機能別に案内します。原文に記録された登録状況、Maven配布先、レジストリ凍結後の更新情報と参考資料も収録しています。"
licenseSource: "github-PerfectCarl-awesome-play1-readme-md"
---

# Awesome Play1

Play 1.xのデータベース、配置、認証・認可、テンプレート、テストなどに使うモジュールと参考資料を探せます。説明とモジュール情報は、記録された原文のスナップショットに基づきます。

## モジュール

原文のバッジが示す登録状況、Mavenでの配布、モジュールのレジストリ凍結後の更新情報を、以下では文字で示します。これらの情報とインストール手順は、記録された原文当時のものです。

| 情報 | 意味 |
| --- | --- |
| 登録済み | [playframework.com/modules](http://www.playframework.com/modules)に登録されており、モジュールIDから登録ページを開けます。例：[Carbonate](http://www.playframework.com/modules/carbonate)。 |
| 未登録 | [playframework.com/modules](http://www.playframework.com/modules)に登録されていません。原文では`dependencies.yml`へ外部リポジトリを追加する必要があると説明されています。プロジェクトのリンク先は公式ページです。例：[Mini-profiler](https://github.com/PerfectCarl/play-profiler)。 |
| Maven | [maven-play-plugin](https://code.google.com/p/maven-play-plugin)を通じてMavenCentralで配布されています。Mavenのリンク先は、そのモジュールのリポジトリエントリです。例：[Database moduleのアーティファクト](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.db/play-db)。 |
| レジストリ凍結後に更新 | [playframework.com/modules](http://www.playframework.com/modules)の凍結後に更新されています。リンク先はモジュールの公式ページです。例：[Mini-profiler](https://github.com/PerfectCarl/play-profiler)。 |

### データベース

- **[Carbonate](https://github.com/huljas/play-carbonate)** ([carbonate](http://www.playframework.com/modules/carbonate)) — データベース移行を作成・実行し、Hibernateのスキーマ更新を利用して移行用SQLを自動生成する。 参考：[解説記事](http://huljas.github.com/code/2011/04/04/managing-database-with-playcarbonate.html)。 登録済み。

- **[Chronostamp](https://github.com/omaroman/chronostamp)** ([chronostamp](http://www.playframework.com/modules/chronostamp)) — モデルにcreated_atとupdated_atのタイムスタンプフィールドを追加・更新する。 登録済み。

- **[データベースモジュール](http://github.com/pepite/play--database)** ([db](http://www.playframework.com/modules/db)) — Play!のドメインモデルをDDLファイルへ出力し、データベースをPlay!のドメインモデルへ取り込む。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.db/play-db)。

- **[JpaGen](http://github.com/marcuspocus/jpagen)** ([jpagen](http://www.playframework.com/modules/jpagen)) — メタデータまたはテーブル一覧のファイルから、JPAエンティティと必要に応じた複合キーを生成する。 登録済み。

- **[Liquibase](https://github.com/7uc0/play-liquibase)** ([liquibase](http://www.playframework.com/modules/liquibase)) — データベースのリファクタリング管理にLiquibaseを利用するためのもの。 参考：[Liquibase](http://www.liquibase.org)。 登録済み。

- **[logisima-yml](http://github.com/sim51/logisima-play-yml)** ([logisimayml](http://www.playframework.com/modules/logisimayml)) — データベースをYMLファイルへ出力する。 登録済み。

- **[データベース移行](http://github.com/dcardon/play-migrate)** ([migrate](http://www.playframework.com/modules/migrate)) — プロジェクトのデータベースのバージョンを管理する。 登録済み。

- **[複数データベース](http://github.com/dcardon/play-multidb)** ([multidb](http://www.playframework.com/modules/multidb)) — 共通スキーマを持つ複数のデータベースへアプリケーションを拡張する。 登録済み。

### 配置

- **[Capistrano](https://github.com/mandubian/play-capistrano)** ([capistrano](http://www.playframework.com/modules/capistrano)) — Capistrano・SSH・VCSでリモートアプリケーションを配置し、nohupまたはバックグラウンドで実行する。 登録済み。

- **[Cargo](https://github.com/dgouyette/play-cargo)** ([cargo](http://www.playframework.com/modules/cargo)) — アプリケーションをリモート環境へ配置する。 登録済み。

- **[CloudBees](https://github.com/hadashi/play-cloudbees)** ([cloudbees](http://www.playframework.com/modules/cloudbees)) — アプリケーションとCloudBeesを連携する。 登録済み。

- **[CloudFoundry](https://github.com/bcourtine/play--cloudfondry)** ([cloudfoundry](http://www.playframework.com/modules/cloudfoundry)) — CloudFoundryへ配置したアプリケーションのデータベースを自動設定する。 登録済み。

- **[Dotcloud](https://github.com/lsinger/play-dotcloud)** ([dotcloud](http://www.playframework.com/modules/dotcloud)) — アプリケーションをdotcloudへ配置する。 登録済み。

- **[Google App Engine](http://github.com/guillaumebort/play-gae)** ([gae](http://www.playframework.com/modules/gae)) — Google App Engine向けのアプリケーションを作成する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.gae/play-gae)。

- **[Heroku](https://github.com/jamesward/play-heroku)** ([heroku](http://www.playframework.com/modules/heroku)) — アプリケーションをHerokuへ配置する。 登録済み。

- **[Jelasticへの配置支援](https://github.com/Fameing/play-jelastic)** ([jelastic](http://www.playframework.com/modules/jelastic)) — アプリケーションをJelasticへ配置する。 登録済み。

- **[Open eBay](https://bitbucket.org/kumaresan/openebay)** ([openebay](http://www.playframework.com/modules/openebay)) — Open eBayアプリケーションの作成に必要な基本的な連携機能を提供する。 参考：[Open eBayアプリケーション](http://apps.ebay.com/)。 登録済み。

- **[Openshift](https://github.com/opensas/openshift)** ([openshift](http://www.playframework.com/modules/openshift)) — 原文では、OpenshiftをJava・Perl・PHP・Python・Rubyアプリケーション向けの、無料で自動スケーリングを備えるRed HatのクラウドPaaSと説明している。 登録済み。

- **[Q42's Google App Engine](https://github.com/Q42/play-gae)** (play-gae-q42) — 原文では、保守されているGoogle App Engine連携モジュールとして説明し、gaeの代わりに利用することを推奨している。 未登録。

- **[playapps.net](http://github.com/zenexity/play-playapps)** ([playapps](http://www.playframework.com/modules/playapps)) — Playアプリケーションを迅速かつ効率的に稼働させるために設計された配置環境。 登録済み。

- **[ReverseProxy](https://github.com/omaroman/reverseproxy)** ([reverseproxy](http://www.playframework.com/modules/reverseproxy)) — フロントエンドの背後で動作するアプリケーションで、ページごとにHTTPとHTTPSを自動で切り替える。 登録済み。

- **[Play Router Annotations](https://github.com/digiPlant/play-router-annotations)** ([router](http://www.playframework.com/modules/router)) — アノテーションによってルートを追加し、コントローラー内でルートを宣言できるようにする。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.router/play-router)。

- **[Stax](http://github.com/erwan/playstax)** ([stax](http://www.playframework.com/modules/stax)) — [Staxのクラウドホスティング環境](http://www.stax.net)へアプリケーションを配置する。 登録済み。

- **[VHost](https://github.com/lyubo/play-vhost)** ([vhost](http://www.playframework.com/modules/vhost)) — 仮想ホストごとに独立したデータソースとカスタマイズ可能なアプリケーション設定を持たせる。 登録済み。

### 依存性注入・依存関係

- **[Constretto](https://github.com/zapodot/constretto-play)** ([constretto](http://www.playframework.com/modules/constretto)) — Constretto設定フレームワークを連携する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.constretto/play-constretto)。

- **[Guice](http://github.com/pk11/play-guice-module)** ([guice](http://www.playframework.com/modules/guice)) — Guiceで管理するコンポーネントをアプリケーションへ注入する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.guice/play-guice)。

- **[Ivyによる依存関係管理](http://github.com/pk11/play-ivy)** ([ivy](http://www.playframework.com/modules/ivy)) — Apache Ivyで依存関係を管理する。 登録済み。

- **[Mavenによる依存関係管理](http://github.com/wangyizhuo/play-maven)** ([maven](http://www.playframework.com/modules/maven)) — Apache Mavenで依存関係を管理する。 登録済み。

- **[Spring](http://github.com/pepite/Play--framework-Spring-module)** ([spring](http://www.playframework.com/modules/spring)) — Play! 1.xアプリケーションでSpring管理のBeanを利用できるようにする。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.spring/play-spring)。

### 言語

- **[Google Closure](http://code.google.com/p/mandubian-play-google-closure/)** ([googleclosure](http://www.playframework.com/modules/googleclosure)) — Google Closureのツール群とPlay!を連携する。 登録済み。

- **[Google Web Toolkit](http://code.google.com/p/play-framework-gwt/)** ([gwt](http://www.playframework.com/modules/gwt)) — Playをアプリケーションサーバーとして使うGWT UIの連携を支援する。 登録済み。

- **[GWT2](http://github.com/vbuzzano/play-gwt2)** ([gwt2](http://www.playframework.com/modules/gwt2)) — PlayとGWTを連携する。 登録済み。

- **[Scala](http://www.playframework.com/modules/scala)** ([scala](http://www.playframework.com/modules/scala)) — Playフレームワークの主要な性質を保ちながら、アプリケーションでScalaを利用できるようにする。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.scala/play-scala)。

- **[Scala Gen](https://github.com/asinghal/Play-ScalaGen)** ([scalagen](http://www.playframework.com/modules/scalagen)) — Play!フレームワーク向けのScalaコード生成器。 登録済み。

- **[Scala secure](https://github.com/asinghal/Play-ScalaSecure)** ([scalasecure](http://www.playframework.com/modules/scalasecure)) — Scalaで記述したPlayアプリケーションに基本的な認証・認可機能を提供する。 登録済み。

### メッセージング・イベント

- **[Akkaへの対応](http://github.com/dwhitney/akka)** ([akka](http://www.playframework.com/modules/akka)) — Play!のconf/application.confファイルでAkkaを設定できるようにする。 参考：[Akka](http://akkasource.org)。 登録済み。

- **[Camel](https://github.com/marcuspocus/play-camel)** ([camel](http://www.playframework.com/modules/camel)) — Play!向けにEnterprise Integration Patterns（EIP）とメッセージングを提供する。 登録済み。

- **[Pusher](https://github.com/regisbamba/Play-Pusher)** ([pusher](http://www.playframework.com/modules/pusher)) — PusherとWebSocketを利用してリアルタイム機能を追加する。 参考：[Pusher](http://www.pusher.com)。 登録済み。

- **[RabbitMQ](http://geeks.aretotally.in/rabbitmq-module-for-play-framework)** ([rabbitmq](http://www.playframework.com/modules/rabbitmq)) — 原文で高可用性・拡張性・軽量性を備えるメッセージングシステムと説明されているRabbitMQを連携する。 登録済み。

### 監視

- **[Accesslog](https://github.com/briannesbitt/play-accesslog)** ([accesslog](http://www.playframework.com/modules/accesslog)) — nginxやApacheのアクセスログに似た形式でリクエストを記録する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.accesslog/play-accesslog)。

- **[BetterLogs](https://github.com/sgodbillon/BetterLogs)** ([betterlogs](http://www.playframework.com/modules/betterlogs)) — 標準ログへクラス名・メソッド名・呼び出し位置・シグネチャ・ファイル名・行番号を追加する。 登録済み。

- **[InfoPlay](http://code.google.com/p/infoplay/)** ([infoplay](http://www.playframework.com/modules/infoplay)) — 原文でPHPのinfophpに似ていると説明される各種情報を表示する。 登録済み。

- **[Jpastats](https://github.com/eamelink/play-jpastats/)** ([jpastats](http://www.playframework.com/modules/jpastats)) — リクエスト中に実行したデータベースクエリの数を記録する。 登録済み。

- **[Log4Play](https://github.com/feliperazeek/log4play)** ([log4play](http://www.playframework.com/modules/log4play)) — ログエントリをEventStreamへ配信するlog4jアペンダーを提供する。 登録済み。

- **[Hibernateの統計情報](https://github.com/francisdb/play-hibernate-statistics)** (play-hibernate-statistics) — MBeanを通じてHibernateの統計情報を表示する。 未登録。

- **[Playerrors](https://github.com/marius0/playerrors)** ([playerrors](http://www.playframework.com/modules/playerrors)) — 本番ウェブアプリケーションのエラーを収集・通知し、利用者から報告される前の修正を支援する。 登録済み。

- **[Mini-profiler](https://github.com/PerfectCarl/play-profiler)** (profiler) — アプリケーション内に小規模なプロファイラーを表示する。 未登録。

- **[RecordTracking](https://github.com/omaroman/recordtracking)** ([recordtracking](http://www.playframework.com/modules/recordtracking)) — 大きな介入をせずにレコードの作成・更新・削除を追跡する。 登録済み。

- **[Statsd](https://github.com/rkroll/play-statsd/)** ([statsd](http://www.playframework.com/modules/statsd)) — Play内で統計を集約するためのStatsDラッパー。 参考：[StatsD](https://github.com/etsy/statsd)。 登録済み。

### 永続化

- **[Associations](https://github.com/pareis/play-associations)** ([associations](http://www.playframework.com/modules/associations)) — 双方向の関連付けの管理に必要なコードを減らす。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.associations/play-associations)。

- **[Play!向けJCR](https://github.com/mfornos/Cream)** ([cream](http://www.playframework.com/modules/cream)) — Apache Jackrabbit（JCR 2.0）とPlayを連携する。 登録済み。

- **[EBean ORMへの対応](https://github.com/lyubo/play-ebean)** ([ebean](http://www.playframework.com/modules/ebean)) — Play!にEbean ORMを追加する。原文では、まだ非常に実験的な段階と明記されている。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.ebean/play-ebean)。

- **[MongoDB](http://github.com/louth/play-mongo)** ([mongo](http://www.playframework.com/modules/mongo)) — MongoDBに保存するモデルを利用できるようにする。複雑な用途には原文でMorphiaが案内されている。 登録済み。

- **[MongoDB連携](http://github.com/greenlaw110/play-morphia)** ([morphia](http://www.playframework.com/modules/morphia)) — MongoDBへのアクセスとPlayのModelインターフェースを連携する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.morphia/play-morphia)、[レジストリ凍結後に更新](http://github.com/greenlaw110/play-morphia)。

- **[MyBatisPlay](https://github.com/eamelink/play-navigation/wiki)** ([mybatisplay](http://www.playframework.com/modules/mybatisplay)) — MyBatis永続化フレームワークに対応する。 登録済み。

- **[logisima-neo4j](https://github.com/sim51/logisima-play-neo4j)** ([neo4j](http://www.playframework.com/modules/neo4j)) — Play!プロジェクトへNeo4jデータベースを連携する。 登録済み。

- **[Objectify](http://code.google.com/p/play-framework-objectify/)** ([objectify](http://www.playframework.com/modules/objectify)) — Google App Engine/J向けに柔軟なデータアクセスの抽象化を提供する。 登録済み。

- **[OrientDB](https://github.com/mfornos/orientdb)** ([orientdb](http://www.playframework.com/modules/orientdb)) — Play!フレームワークでOrientDBを利用するためのもの。 登録済み。

- **[Redis](https://github.com/tkral/play-redis)** ([redis](http://www.playframework.com/modules/redis)) — Play!アプリケーションでRedisを利用できるようにする。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.redis/play-redis)。

- **[Riak](https://github.com/julienba/play-riak/)** ([riak](http://www.playframework.com/modules/riak)) — Play!の方式でriak-java-clientを利用できるようにする。 登録済み。

- **[S3Blobs](https://github.com/jamesward/S3-Blobs-module-for-Play)** ([s3blobs](http://www.playframework.com/modules/s3blobs)) — JPAエンティティからAmazon S3のファイルを読み書きする。 登録済み。

- **[Siena](http://github.com/mandubian/play-siena)** ([siena](http://www.playframework.com/modules/siena)) — Sienaに対応し、PlayアプリケーションのJavaエンティティをGAE・MySQL・PostgreSQL・H2へマッピングする。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.siena/play-siena)、[レジストリ凍結後に更新](http://github.com/mandubian/play-siena)。

- **[Twig](https://github.com/netmau5/Play-Twig)** ([twig](http://www.playframework.com/modules/twig)) — PlayアプリケーションのGoogle App Engine Datastore利用を拡張し、流れるように記述できるAPI、メモリ内結合、非同期クエリを提供する。 登録済み。

### 表示

- **[CoffeeScript](https://github.com/robfig/play-coffee)** ([coffee](http://www.playframework.com/modules/coffee)) — JavaScriptを生成するCoffeeScriptへの対応を追加する。JavaとScalaに対応。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.coffee/play-coffee)。

- **[Excel](http://github.com/greenlaw110/play-excel)** ([excel](http://www.playframework.com/modules/excel)) — テンプレートに基づいてExcelレポートを生成する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.excel/play-excel)。

- **[Formee](https://github.com/omaroman/formee)** ([formee](http://www.playframework.com/modules/formee)) — フォームの作成とクライアント側・サーバー側の検証追加を支援する。 登録済み。

- **[JavaScript/CSSファイルの縮小](http://github.com/greenlaw110/greenscript)** ([greenscript](http://www.playframework.com/modules/greenscript)) — 原文のリンク名に示されている、JavaScript・CSSファイルの縮小処理を行うもの。 登録済み。

- **[HTML5 Validation](https://github.com/oasits/play-html5-validation)** ([html5validation](http://www.playframework.com/modules/html5validation)) — Playモデルのアノテーションに基づき、HTML5属性を利用してクライアント側のフォーム検証を行う。 登録済み。

- **[Jqueryui](https://github.com/lunatech-labs/play-module-jqueryui)** ([jqueryui](http://www.playframework.com/modules/jqueryui)) — Playアプリケーションと連携するjQuery UIウィジェットの動作例を提供する。 登録済み。

- **[JQuery Validation](https://github.com/murz/play-jqvalidate)** ([jqvalidate](http://www.playframework.com/modules/jqvalidate)) — モデルのアノテーションに基づき、jQueryでクライアント側のフォーム検証を行う。 登録済み。

- **[Jqvalidation](http://code.google.com/p/jqvalidate-play-framework/)** ([jqvalidation](http://www.playframework.com/modules/jqvalidation)) — フィールドごと、またはフォーム全体のAjax検証に対応するjQueryの検証API。 登録済み。

- **[Less module](https://github.com/lunatech-labs/play-module-less)** ([less](http://www.playframework.com/modules/less)) — LessをCSSへ変換し、Playアプリケーションでのエラー報告を処理する。 参考：[Less](http://lesscss.org/)。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.less/play-less)。

- **[Markdown](https://github.com/orefalo/play-markdown)** ([markdown](http://www.playframework.com/modules/markdown)) — アプリケーションにMarkdownコンテンツを取り込む。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.markdown/play-markdown)。

- **[Menu](http://github.com/greenlaw110/play-menu)** ([menu](http://www.playframework.com/modules/menu)) — ナビゲーションメニューの実装を支援する。 登録済み。

- **[Navigation](https://bitbucket.org/hlassiege/play-nemrod)** ([navigation](http://www.playframework.com/modules/navigation)) — Playアプリケーションのナビゲーションメニューを定義・表示する。 登録済み。

- **[Paginate](http://github.com/lmcalpin/Play--Paginate)** ([paginate](http://www.playframework.com/modules/paginate)) — #{list}タグを置き換え、ページ分割に対応する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.paginate/play-paginate)。

- **[PDF module](http://github.com/pepite/play--pdf)** ([pdf](http://www.playframework.com/modules/pdf)) — YaHP ConverterライブラリでHTMLテンプレートからPDF文書を生成する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.pdf/play-pdf)。

- **[PegDown Markdown](https://github.com/jagregory/play-pegdown)** ([pegdown](http://www.playframework.com/modules/pegdown)) — pegdownのMarkdown処理とPlayアプリケーションを連携する。 参考：[Markdown](https://github.com/sirthias/pegdown)。 登録済み。

- **[JavaScript/CSSファイルの縮小](http://github.com/dirkmc/press)** ([press](http://www.playframework.com/modules/press)) — アプリケーション開発者が処理を意識せずに使えるよう設計された、JavaScript・CSS・Lessの縮小処理。 登録済み。

- **[Sass（Syntactically Awesome Stylesheets）](http://github.com/guillaumebort/play-sass)** ([sass](http://www.playframework.com/modules/sass)) — 入れ子の規則・変数・ミックスインなどを簡潔な構文で記述できる、CSSを拡張したSassに対応する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.sass/play-sass)。

- **[Table](https://github.com/julienrf/play-table)** ([table](http://www.playframework.com/modules/table)) — データをHTMLテーブルで表示するために必要なコードを簡略化する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.table/play-table)。

- **[Tabula Rasa](https://github.com/schaloner/tabula-rasa)** ([tabularasa](http://www.playframework.com/modules/tabularasa)) — ビュー内で利用者がカスタマイズできるテーブルに対応する。 登録済み。

- **[Twitterbootstrap](http://www.playframework.com/modules/twitterbootstrap)** ([twitterbootstrap](http://www.playframework.com/modules/twitterbootstrap)) — twitter-bootstrapのスタイルキットとPlayのLessプラグインをまとめ、変更を動的に反映する.lessファイルの編集を支援する。 登録済み。

### REST

- **[Jersey](https://bitbucket.org/psartini/play-jersey)** ([jersey](http://www.playframework.com/modules/jersey)) — Play!フレームワークへJerseyを連携する。 登録済み。

- **[RESTEasy Play! module](http://www.lunatech-labs.com/open-source/resteasy-play-module)** ([resteasy](http://www.playframework.com/modules/resteasy)) — RESTEasyを利用して、Play!内でJAX-RSのRESTfulウェブサービスを定義する。 登録済み。

- **[RESTEasy CRUD module](http://www.lunatech-labs.com/open-source/resteasy-crud-play-module)** ([resteasycrud](http://www.playframework.com/modules/resteasycrud)) — モデルに対するRESTfulなCRUDリソースを自動生成する。 登録済み。

- **[Swagger](https://github.com/wordnik/swagger-play)** ([swagger](http://www.playframework.com/modules/swagger)) — REST APIの説明を含むメタデータを作成し、コード生成・UIサンドボックス・テストフレームワークを可能にする。 登録済み。

### ひな型生成

- **[CRUD for Siena](https://github.com/mandubian/play-crud-siena)** ([crudsiena](http://www.playframework.com/modules/crudsiena)) — Sienaのモデルオブジェクト向けに、標準のcrudモジュールより多くの機能を持つ、利用可能なウェブインターフェースを提供する。 登録済み。

- **[Mocha](https://bitbucket.org/blobsmith/mocha/overview)** ([mocha](http://www.playframework.com/modules/mocha)) — mocha UIのJavaScriptインターフェースをPlay!向けに実装する。 登録済み。

- **[Bootstrapの基本的なひな型生成](https://github.com/phaus/play-bootstrap)** (play-bootstrap) — 標準のscaffoldモジュールから派生した、Bootstrapベースのアプリケーション作成用モジュール。 未登録。

- **[Scaffold](http://github.com/lmcalpin/Play--Scaffold)** ([scaffold](http://www.playframework.com/modules/scaffold)) — JPAエンティティ、または原文でSeniaと記されているエンティティから、プロジェクトの基本的なひな型を生成する。 登録済み。

### 検索

- **[ElasticSearch](http://geeks.aretotally.in/play-framework-module-elastic-search-distributed-searching-with-json-http-rest-or-java)** ([elasticsearch](http://www.playframework.com/modules/elasticsearch)) — Apache Luceneに基づく分散検索であるElastic Searchを使い、迅速な開発のために組み込みのElastic Serverインスタンスを提供する。 登録済み。

- **[Search](http://github.com/jfp/play-search/)** ([search](http://www.playframework.com/modules/search)) — Luceneを利用してJPAモデルに基本的な全文検索を追加する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.search/play-search)。

### 認証・認可

- **[BrowserID](https://github.com/orefalo/play-browserid)** ([browserid](http://www.playframework.com/modules/browserid)) — 原文では、BrowserIDを利用者と開発者にとって安全で使いやすいことを目指す、実験的なログイン方式と説明している。 登録済み。

- **[logisima-cas](http://github.com/sim51/logisima-play-cas)** ([cas](http://www.playframework.com/modules/cas)) — Play!アプリケーション向けのCASクライアント。 登録済み。

- **[Casino](https://github.com/reyez/casino-play)** ([casino](http://www.playframework.com/modules/casino)) — アプリケーションに利用登録とパスワード復旧を組み込む。 登録済み。

- **[Deadbolt](https://github.com/schaloner/deadbolt)** ([deadbolt](http://www.playframework.com/modules/deadbolt)) — コントローラーのメソッドやビューの一部分に対するアクセス権を定義する認可機構。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.deadbolt/play-deadbolt)。

- **[Facebook connect](https://github.com/murz/play-fbconnect)** ([fbconnect](http://www.playframework.com/modules/fbconnect)) — PlayアプリケーションへFacebookによる認証を組み込む。 登録済み。

- **[Force.com](https://github.com/jesperfj/play-force)** ([force](http://www.playframework.com/modules/force)) — OAuth認証とREST APIアダプターで、Play!アプリケーションとForce.comを連携する。 登録済み。

- **[LinkedInのOAuth認証](http://geeks.aretotally.in/projects/play-framework-linkedin-module)** ([linkedin](http://www.playframework.com/modules/linkedin)) — PlayアプリケーションへLinkedInのOAuth認証を組み込む。 登録済み。

- **[OAuth Client](http://github.com/erwan/playoauthclient)** ([oauth](http://www.playframework.com/modules/oauth)) — TwitterやGoogleなどのOAuthプロバイダーへ接続するためのツール。 登録済み。

- **[Recaptcha](https://github.com/orefalo/play-recaptcha)** ([recaptcha](http://www.playframework.com/modules/recaptcha)) — アプリケーションへreCaptcha.comのチャレンジレスポンス方式のテストを組み込む。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.recaptcha/play-recaptcha)。

- **[Secure Permissions](http://www.lunatech-labs.com/open-source/secure-permissions-play-module)** ([securepermissions](http://www.playframework.com/modules/securepermissions)) — 標準のsecureモジュールを拡張し、Droolsを使うSeam Frameworkの規則に基づく権限検査を追加する。 登録済み。

- **[SecureSocial](http://jaliss.github.com/securesocial/)** ([securesocial](http://www.playframework.com/modules/securesocial)) — OAuth1・OAuth2・OpenID・OpenID+OAuthのハイブリッド方式を使うサービス向けの認証UIを追加する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.securesocial/play-securesocial)。

- **[Shibboleth](https://github.com/TAMULib/Shibboleth-play)** ([shibboleth](http://www.playframework.com/modules/shibboleth)) — 利用者がShibboleth経由でPlay!アプリケーションへログインできるようにする。 登録済み。

### テンプレート

- **[Faster Groovy Templates](https://github.com/mbknor/faster-groovy-templates)** ([fastergt](http://www.playframework.com/modules/fastergt)) — 標準のGroovyテンプレート実装をGT-Engineへ置き換える。原文では高速化とメモリ使用量の削減が説明されている。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.fastergt/play-fastergt)。

- **[Japid Template Engine](http://github.com/branaway/Japid)** ([japid](http://www.playframework.com/modules/japid)) — Play! 1.2.x向けの、Javaのみで実装された静的型付きテンプレートエンジン。原文では高速と説明されている。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.japid/play-japid)。

- **[Mustache](https://github.com/murz/play-mustache)** ([mustache](http://www.playframework.com/modules/mustache)) — サーバー側のPlay!ビューとクライアント側のJavaScriptで使える、ロジックを持たないテンプレート断片を定義する。 登録済み。

- **[Rythm Template Engine](https://github.com/greenlaw110/play-rythm)** ([rythm](http://www.playframework.com/modules/rythm)) — Razorに似たテンプレートエンジンPlayRythmを提供する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.rythm/play-rythm)、[レジストリ凍結後に更新](https://github.com/greenlaw110/play-rythm)。

- **[Scalate](http://github.com/pk11/play-scalate)** ([scalate](http://www.playframework.com/modules/scalate)) — Scalateテンプレートエンジンに対応する。 参考：[Scalate](http://scalate.fusesource.org)。 登録済み。

- **[Thymeleaf](https://github.com/choreo/play-thymeleaf)** ([thymeleaf](http://www.playframework.com/modules/thymeleaf)) — PlayでThymeleaf 2.0をテンプレートエンジンとして利用できるようにする。 参考：[Thymeleaf 2.0](http://www.thymeleaf.org/)。 登録済み。

### テスト

- **[Cobertura](http://github.com/julienba/play-cobertura)** ([cobertura](http://www.playframework.com/modules/cobertura)) — Coberturaを連携し、テストで実行したコードの割合（テストカバレッジ）を算出する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.cobertura/play-cobertura)。

- **[HttpMock](http://github.com/zenexity/play--httpmock)** ([httpmock](http://www.playframework.com/modules/httpmock)) — ウェブサービスへのリクエストをキャッシュして再現し、開発時の遅延・サービス拒否・HTTPエラーなどの接続問題を回避する。 登録済み。

- **[Mockito](https://github.com/eamelink/play-mockito)** ([mockito](http://www.playframework.com/modules/mockito)) — Mockitoモックフレームワークを提供する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.mockito/play-mockito)。

- **[QUnit](https://github.com/irregular-at/play-qunit)** ([qunit](http://www.playframework.com/modules/qunit)) — 原文では、QUnitモジュールをJUnitのJavaScriptテストとPlay!を連携するものと説明している。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.qunit/play-qunit)。

- **[Spock tests](http://github.com/peterlundberg/play-spock-tests)** ([spocktests](http://www.playframework.com/modules/spocktests)) — Spockの仕様を実行し、Groovyの表現力を使ってBDD形式のテストを記述する。テストはJUnitとして包まれる。 参考：[Spock](https://code.google.com/p/spock/)。 登録済み。

- **[spring tester](https://github.com/digiarnie/springtester)** ([springtester](http://www.playframework.com/modules/springtester)) — Springモジュールで構成するPlayアプリケーションのテストに、Mockitoのモックを自動で注入する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.springtester/play-springtester)。

- **[代替テストモジュール](https://github.com/GuyMograbi/play_test_module)** ([tests](http://www.playframework.com/modules/tests)) — 原文では、テストをより速く、整理された再利用可能なコードで書くためのモジュールと説明している。 登録済み。

- **[Webdrive](https://github.com/rkaippully/play-webdrive)** ([webdrive](http://www.playframework.com/modules/webdrive)) — PlayにSelenium 2によるテストへの対応を追加する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.webdrive/play-webdrive)。

### 翻訳

- **[I18ntools](http://github.com/naholyr/i18ntools)** ([i18ntools](http://www.playframework.com/modules/i18ntools)) — Play!プロジェクトでi18nを扱いやすくするツールを追加する。 登録済み。

- **[@messages](https://github.com/huljas/play-messages)** ([messages](http://www.playframework.com/modules/messages)) — アプリケーションのローカライズを管理するウェブツールを提供する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.messages/play-messages)。

- **[Nemrod](https://github.com/sim51/logisima-play-neo4j)** ([nemrod](http://www.playframework.com/modules/nemrod)) — アプリケーションとNemrodインスタンスの間で、翻訳を自動的に取り込み・出力する。 登録済み。

- **[Play-i18ned](https://github.com/phaus/play-i18ned)** (play-i18ned) — Excelシートと標準のi18nファイルを相互変換する。 未登録。

### その他

- **[Bespinオンラインエディター](http://github.com/erwan/playbespin)** ([bespin](http://www.playframework.com/modules/bespin)) — Bespinウェブコードエディターで、アプリケーションの全ソースファイルをブラウザーから直接編集する。 登録済み。

- **[Bhave](http://bhave.org/)** ([bhave](http://www.playframework.com/modules/bhave)) — ウェブアプリケーション向けの、ウェブベースの振る舞い駆動開発（BDD）フレームワークbhaveを連携する。 参考：[bhave](http://bhave.org/)。 登録済み。

- **[Cheese](https://github.com/lmcalpin/Play--Cheese)** ([cheese](http://www.playframework.com/modules/cheese)) — CheddarGetterのサブスクリプション管理サービスを連携するための簡略化したAPI。 登録済み。

- **[Cms](http://code.google.com/p/play-cms/)** ([cms](http://www.playframework.com/modules/cms)) — 簡易な組み込みCMSを提供する。 登録済み。

- **[コンテンツネゴシエーション](http://github.com/oasits/play-content-negotiation)** ([cnm](http://www.playframework.com/modules/cnm)) — アノテーションを利用し、標準では直接対応しないVCardやAtom/RSSフィードなどのコンテンツ形式を扱う。 登録済み。

- **[外部設定](https://github.com/rugbyhead/externalconfig)** ([externalconfig](http://www.playframework.com/modules/externalconfig)) — 外部の設定ファイル・プロパティファイルを読み込み、WARで配置するアプリケーションの設定を支援する。 登録済み。

- **[機能フラグ](http://code.google.com/p/play-featureflags)** ([featureflags](http://www.playframework.com/modules/featureflags)) — 管理画面から実行時に有効・無効を切り替えられる機能フラグを追加する。 登録済み。

- **[Google Checkout](https://github.com/jagregory/play-google-checkout)** ([googlecheckout](http://www.playframework.com/modules/googlecheckout)) — Playアプリケーションを加盟店としてGoogle Checkoutへ連携する。 登録済み。

- **[Gravatar](https://github.com/mbarbieri/play-gravatar)** ([gravatar](http://www.playframework.com/modules/gravatar)) — PlayアプリケーションへGravatarを連携する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.gravatar/play-gravatar)。

- **[Hazelcast](https://github.com/marcuspocus/hazelcast)** ([hazelcast](http://www.playframework.com/modules/hazelcast)) — PlayのEhCacheImplまたはMemcachedImplをそのまま差し替えられる実装を提供する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.hazelcast/play-hazelcast)。

- **[Postmark](https://github.com/FrostDigital/play-postmark)** ([postmark](http://www.playframework.com/modules/postmark)) — 送信メールの処理のためにpostmarkapp.comを連携する。 登録済み、[Maven](http://mvnrepository.com/artifact/com.google.code.maven-play-plugin.org.playframework.modules.postmark/play-postmark)。

- **[UserAgentCheck](https://github.com/orefalo/play-useragentcheck)** ([useragentcheck](http://www.playframework.com/modules/useragentcheck)) — 利用者のブラウザーが古いことを知らせるバナーを表示する。 登録済み。

- **[Play1-Chart](https://github.com/sant0s/play1-chart)** ([play1-chart](http://sant0s.github.io/play1-chart/)) — グラフの画像を生成する。 未登録。

## 参考資料

- [Maven対応モジュール一覧](https://code.google.com/p/maven-play-plugin/wiki/MavenizedModules) — Maven対応モジュールと、その[利用手順](https://code.google.com/p/maven-play-plugin/wiki/Usage)。

- [Playのコントローラーの利用方法](http://www.javabeat.net/using-controllers-in-play-framework/) — キャッシュ、有効期限、eTagを扱う解説。

- [Luo](https://github.com/greenlaw110)による`cache4`[アノテーション](http://www.playframework.com/modules/rythm-1.0.0-20121210/integration#cache4) — このアノテーションの利用に関する資料。

## 関連リスト

原文のリストが着想を得た関連一覧は、[awesome-php](https://github.com/ziadoz/awesome-php)、[awesome-python](https://github.com/vinta/awesome-python)、[frontend-dev-bookmarks](https://github.com/dypsilon/frontend-dev-bookmarks)、[awesome-ruby](https://github.com/markets/awesome-ruby)です。
