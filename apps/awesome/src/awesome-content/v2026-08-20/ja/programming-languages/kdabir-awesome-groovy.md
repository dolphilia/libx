---
title: "kdabir/awesome-groovy"
description: "kdabir/awesome-groovy の定本スナップショット"
licenseSource: "github-kdabir-awesome-groovy-readme-md"
---

Awesome Groovy [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
==============

優れたGroovyライブラリ、フレームワーク、リソースの厳選リスト。多くのawesome-*リポジトリに着想を得ています。

- [Awesome Groovy](#awesome-groovy)
    - [ビルドツール、セットアップ、CI](#build-tools-setup-and-ci)
    - [並行処理](#concurrency)
    - [データベース](#database)
    - [デスクトップアプリフレームワーク](#rich-applications)
    - [HTTP](#http)
    - [IDEとエディターのサポート](#ide-and-editor-support)
    - [テスト](#testing)
    - [コード分析](#code-analysis)
    - [Webフレームワーク](#web-frameworks)
    - [トランスパイラー](#transpilers)
    - [静的Web](#static-web)
    - [言語ユーティリティ](#language-utilities)
    - [ファイルシステムユーティリティ](#file-system-utilities)
    - [ファイル形式DSL](#file-format-dsl)
    - [スクリプティングツール](#scripting-tools)
    - [ルールエンジン](#rule-engines)
- [リソース](#resources)
- [寄稿](#contributing)
- [クレジット](#credits)

## ビルドツール、セットアップ、CI
* [Gradle](https://www.gradle.org/) - JVM向けの強力なビルドシステム。
* [GMavenPlus](https://github.com/groovy/GMavenPlus) - Groovy向けMavenプラグインであるGMavenの書き直し。
* [SDKMAN](https://sdkman.io) - ソフトウェア開発キットマネージャー（以前はGVMとして知られていた）。
* [skeletal](https://github.com/cbmarcum/skeletal) - パッケージ化されたテンプレートを使うシンプルなプロジェクト作成ツール（Lazybonesの後継）。
* [Lazybones](https://github.com/pledbrook/lazybones) - パッケージ化されたプロジェクトテンプレートを使うシンプルなプロジェクト作成ツール。
* [Jenkins job-dsl-plugin](https://github.com/jenkinsci/job-dsl-plugin) - Jenkinsジョブ向けGroovy DSL。
* [travis-groovy](https://github.com/kdabir/travis-groovy) - travis-ciでGroovyスクリプトを実行する。
* [Android Groovy Shell](https://play.google.com/store/apps/details?id=com.tambapps.android.grooidshell) - スマートフォン上でGroovyスクリプトを直接コーディング・実行する。

## IDEとエディターのサポート
* [IntelliJ IDEA](http://www.jetbrains.com/idea/) - Javaプラットフォーム向けで最もインテリジェントなIDE。
* [Groovy Grails Tool Suite](https://marketplace.eclipse.org/content/groovygrails-tool-suite-ggts-eclipse) - Groovy・Grailsアプリケーションの開発、デバッグ、実行に最適化されたEclipseベースIDE。
* [Groovy Web Console](http://groovyconsole.appspot.com) - オンラインGroovyコンソール。
* [LightTable Plugin](https://github.com/rundis/LightTable-Groovy) - LightTableサポート。
* [SpaceVim](https://spacevim.org/layers/lang/groovy/) - SpaceVimの`lang#groovy`レイヤー。
* [Sublime Text 2/3](https://gist.github.com/kdabir/2203530) - Sublime TextからGroovyスクリプトを実行する。

## Webフレームワーク

* [Grails](https://github.com/grails/grails) - Groovy言語を基にした強力なWebアプリケーションフレームワーク。
* [Micronaut](http://micronaut.io/) - Grailsチームが作成した新しいマイクロサービスフレームワーク。
* [Spring-Boot](https://projects.spring.io/spring-boot) - Spring Bootは、単独で実行できる本番品質のSpringベースアプリケーションを簡単に作成する。コーディング言語としてGroovyを使える。
* [Gaelyk](https://github.com/gaelyk/gaelyk) - Google App Engine Java向け軽量Groovyツールキット。
* [Glide](https://github.com/kdabir/glide) - Google App Engine上で優れたアプリを素早く作成する。
* [Ratpack](https://github.com/ratpack/ratpack) - JVM Webアプリケーション向けツールキット。
* [gServ](https://github.com/javaConductor/gserv) - コンテナー（Tomcat、JBossなど）なしでSPA・RESTベースのマイクロサービスを作るGroovyツールキット。

## データベース
* [GORM](https://gorm.grails.org) - Grails ORM。Grailsなしでも単独で使える。
* [Gmongo](https://github.com/poiati/gmongo) - mongodb Javaドライバー向けGroovyラッパー。
* [Gstorm](https://github.com/kdabir/gstorm) - Groovyスクリプトで使う、シンプルなデータベース・CSVファイル向けシンプルなORM。
* [Tayra](https://github.com/EqualExperts/Tayra) - MongoDB向け増分バックアップツール。
* [Groovy-liquibase](https://github.com/tlberglund/groovy-liquibase) - Liquibase向けのもう一つのGroovy DSL。
* [Effigy](https://github.com/cjstehno/effigy) - Groovyアノテーション駆動のJDBC行マッピングフレームワーク（放棄済み）。
* [elasticsearch-groovy](https://github.com/elastic/elasticsearch-groovy) - Elasticsearch Groovyクライアント。

## リッチアプリケーション

* [Griffon](http://griffon-framework.org/) - JVMでデスクトップアプリケーションを開発するためのアプリケーションフレームワーク。
* [GroovyFx](http://groovyfx.org/) - JavaFX 2.0向けGroovyバインディングを提供する。

## HTTP
* [Http-Builder](https://github.com/jgritman/httpbuilder) - HTTPBuilderはJVMからHTTPベースのリソースを操作する最も簡単な方法。
* [HTTP Builder NG](https://github.com/http-builder-ng/http-builder-ng) - HTTPリクエストを行うためのモダンなGroovy DSL。
* [HTTP Builder NG Gradle Plugin](https://github.com/http-builder-ng/gradle-http-plugin) - Gradleビルド設定でHTTP Builder NGサポートを提供するGradleプラグイン。
* [AsyncRestClient](https://github.com/eginez/AsyncRestClient) - RESTClientとRxGroovyの力を組み合わせ、非同期HTTP呼び出しを行う。
* [Groovy-wslite](https://github.com/jwagenleitner/groovy-wslite) - Groovy向け軽量SOAP・REST Webサービスクライアント。
* [Hyperpoet](https://github.com/tambapps/hyperpoet) - Groovy向け、使いやすくカスタマイズ可能なHTTPクライアント。

## テスト
* [Spock](https://github.com/spockframework/spock) - エンタープライズ対応のテスト・仕様フレームワーク。
* [Geb](https://github.com/geb/geb) - とてもGroovyなブラウザー自動化。
* [Betamax](https://github.com/betamaxteam/betamax) - テストでWebサービスやREST APIなどの外部HTTPリソースをモックするツール。
* [HTTP Mock Server](https://github.com/TouK/http-mock-server) - Groovyクロージャーを使ってHTTPリクエストをモックできる。
* [Ersatz Mock Server](https://github.com/cjstehno/ersatz) - 設定可能なレスポンスでクライアントコードをテストする、シンプルで表現力のあるシミュレートHTTPサーバー。
* [Dru](https://agorapulse.github.io/dru/) - Data Reconstruction Utilityは外部ソースのJSON、YMLからデータを読み込み、GORM、DynamoDB、単純なPOJOのテストを容易にする。
* [Gru](https://agorapulse.github.io/gru/) - Grails・Spring MVCのネイティブユニットテストをサポートし、任意のHTTPバックエンドの統合・半統合テストを実行するGroovy HTTPテストフレームワーク。

## 並行処理
* [GPars](https://github.com/GPars/GPars) - JVM向けGPars並行・並列処理フレームワーク。
* [RxGroovy](https://github.com/ReactiveX/RxGroovy) - Groovy向けRxJavaバインディング。
* [Vertx](https://vertx.io/) - Vert.xはJVM向け軽量・高性能アプリケーションプラットフォーム。

## コード分析
* [CodeNarc](http://codenarc.sourceforge.net/) - Groovy向け静的分析ツール。
* [Sonar-Groovy](https://github.com/pmayweg/sonar-groovy) - SonarQube Groovyプラグイン。

## トランスパイラー
* [Grooscript](https://github.com/chiquitinxx/grooscript) - GroovyコードをJavascriptへ変換する。

## 静的Web
* [Grain](https://github.com/sysgears/grain) - Groovy向け静的Webサイト構築フレームワーク。
* [Gaiden](https://github.com/kobo/gaiden) - Markdownを使ったドキュメント作成を簡単にするツール。

## 言語ユーティリティ
* [Functionalgroovy](https://github.com/mperry/functionalgroovy) - Groovyにおける関数型プログラミング。
* [Groovy-stream](https://github.com/timyates/groovy-stream) - Streams（遅延Groovyジェネレーター）向けの流暢なビルダーを提供するクラスコレクション。
* [Flipside](https://github.com/johnnywey/flipside) - シンプルなGroovyオプションライブラリ。
* [groovy-common-extensions](https://github.com/timyates/groovy-common-extensions) - 拡張システムを通じ、Groovy言語で一般的に有用な機能を追加できる。
* [groovy-extra-list-behaviour](https://github.com/dnahodil/groovy-extra-list-behaviour) - 拡張システムを通じてListsへ追加メソッドを加える。
* [GPerfUtils](https://github.com/gperfutils) - コードのパフォーマンスを検証するGroovyベースツール。
  * [gprof](https://github.com/gperfutils/gprof) - Groovy向けプロファイリングモジュール。
  * [gbench](https://github.com/gperfutils/gbench) - Groovy向けベンチマークモジュール。
* [Fuzzy-CSV](https://github.com/kayr/fuzzy-csv) - 別のサービス・ライブラリで利用される前に、表形式データを整形・処理するのに便利なシンプル軽量データ処理ライブラリ。

## データ処理
* [Nextflow](https://www.nextflow.io/) - データ駆動計算パイプライン向けGroovy DSL。

## ファイルシステムユーティリティ
* [Groovy-Vfs](https://github.com/ysb33r/groovy-vfs) - Apache VFS2上のGroovy向けDSL。
* [Directree](https://github.com/kdabir/directree) - テキストファイルでディレクトリツリーを作成するシンプルなDSL。

## DSL
* [document-builder](https://github.com/craigburke/document-builder) - PDFまたはWord文書向けGroovyドキュメントビルダー。
* [spreadsheet-builder](http://spreadsheet.dsl.builders/) - MS Excel OfficeOpenXML文書（XSLX）を作る便利な方法を提供するスプレッドシートビルダー。
* [GroovyCSV](http://xlson.com/groovycsv/) - Groovy向けシンプルなCSV解析ライブラリ。
* [Groogle](https://groogle.gitlab.io/groogle/latest/index.html) - GoogleサービスAPIを使うために書かれたGroovy DSL。

## スクリプティングツール
* [EasyDokkaPlugin](https://github.com/Vorlonsoft/EasyDokkaPlugin) - Java・Kotlin向けDokkaドキュメントエンジンでドキュメントを生成するGradleスクリプトプラグイン。
* [GradleMavenPush](https://github.com/Vorlonsoft/GradleMavenPush) - GradleアーティファクトをMavenリポジトリへアップロードするGradleスクリプトプラグイン。
* [picocli](https://github.com/remkop/picocli) - CLI用パーサーライブラリ・フレームワーク。ANSI色の使用方法ヘルプ、自動補完、ネストしたサブコマンドなどを備える。
* [sshoogr](https://github.com/aestasit/sshoogr) - SSH経由でリモートサーバーを操作するDSLライブラリ。

## ルールエンジン
* [grules](https://github.com/zhaber/grules) - データ前処理向けルールエンジン。
* [n-cube](https://github.com/jdereg/n-cube) - ハイパースペースとして構築された、ルールエンジン、決定表、決定木、テンプレートエンジン、エンタープライズスプレッドシート。

# リソース

## 公式リソース
* [The official groovy home](http://www.groovy-lang.org/) - Groovyの新しいホーム。
* [Groovy's source](https://github.com/apache/groovy) - GitHubにミラーリングされたGroovyのソースコード。
* [Groovy mailing lists](http://www.groovy-lang.org/mailing-lists.html) - 新しいメーリングリストに注意。
* [Official Documentation](http://www.groovy-lang.org/documentation.html) - Groovyドキュメントの決定版ソース。

## ブラウザーでGroovyを試す
* [Groovy Web Console](https://gwc-experiment.appspot.com/)
* [Groovy Playground](https://groovy-playground.appspot.com/)

## Groovyコード例
* [MrHaKi's Goodness](http://mrhaki.blogspot.com/) - 「Groovy Goodness」、「Grails Goodness」、Gradle Goodness」というタイトルのエントリーに注目。
* [PLEAC Groovy](http://pleac.sourceforge.net/pleac_groovy/) - Groovyは32言語中3言語の一つで、PLEACの例を100%完了している。

## 最新情報を追う
* [Groovy Calamari](http://groovycalamari.com/) - Groovyエコシステムに関する週刊厳選出版物。
* [Groovy Weekly](http://glaforge.appspot.com/category/Groovy%20Weekly) - Groovy週刊ニュースレター。
* [Grails Diary](https://grydeske.dk/news/index) - Grails開発者にとくに役立つ。
* [Groovy Podcast](https://nofluffjuststuff.com/groovypodcast) - Ken KousenとBaruch SadogurskyがGroovyエコシステムのニュース・知見を語る。

## 対話型学習
* [Groovy-Koans](http://nadavc.github.io/groovykoans/) - ユニットテスト形式の小さな演習コレクション。

## コアコミッターのブログ
* [Guillaume Laforge's blog](http://glaforge.appspot.com/)
* [Cédric Champeau's blog](http://melix.github.io/blog/)
* [Jochen Theodorou's blog](http://blackdragsview.blogspot.com/)
* [Grails Team blog](http://grailsblog.objectcomputing.com/)

## カンファレンス
* [Community Over Code](https://communityovercode.org/) - Groovyトラックがある。
* [Greachconf](http://greachconf.com)（終了）
* [GR8Conf Europe](https://gr8conf.eu)（終了）
* [GR8Conf USA](http://gr8conf.us)（終了）

# 寄稿

このリポジトリをフォークし、このファイルを編集してプルリクエストを送ってください。

## awesome.groovyスクリプトの使用

`awesome.groovy`スクリプトを使うと、GitHub上のawesomeプロジェクトを検索し、プロジェクト名、リポジトリURL、Markdown形式の説明をあらかじめ入力したエントリーを生成できます。必要なのは、`README.md`内のMarkdownリストで適切なグループに配置することだけです。

### 例

言語がgroovyで名前にgparsを含むリポジトリを見つけるには

    ./awesome.groovy -l groovy gpars

ユーザー「kdabir」のリポジトリで名前にglideを含むものを見つけるには

    ./awesome.groovy -u kdabir glide

名前にglideを含むリポジトリを見つけるには

    ./awesome.groovy glide

リポジトリをダウンロードするのが面倒な場合は、次の簡単な方法があります:

    groovy "https://git.io/awesome" -l groovy glide

# クレジット

世にあるすべてのawesome-*リポジトリと、[これ](https://github.com/erichs/awesome-awesome)や[これ](https://github.com/bayandin/awesome-awesomeness)のようなアグリゲーターへ。
