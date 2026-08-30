---
title: "Awesome JMeter"
description: "JMeterを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-aliesbelik-awesome-jmeter-readme-md"
---

# Awesome JMeter

JMeterを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次


- [Official Resources](#official-resources)
- [Distributions](#distributions)
- [Getting Started](#getting-started)
- [Tutorials](#tutorials)
- [Best Practices](#best-practices)
- [Scripting](#scripting)
- [Automation](#automation)
  - [DSL](#dsl)
  - [Packages](#packages)
  - [Frameworks](#frameworks)
  - [Conversion](#conversion)
- [CI](#ci)
  - [Tools & Plugins](#tools--plugins)
  - [Tutorials & Demo](#tutorials--demo)
- [Distributed Testing](#distributed-testing)
- [Cloud Services / SaaS](#cloud-services--saas)
- [Results Processing](#results-processing)
  - [Results Analysis](#results-analysis)
  - [Reporting & Visualization](#reporting--visualization)
- [Performance Testing](#performance-testing)
  - [Streaming Protocols](#streaming-protocols)
  - [Mobile Apps](#mobile-apps)
  - [Mainframe Environments](#mainframe-environments)
  - [RPC Frameworks](#rpc-frameworks)
  - [RESTful API](#restful-api)
- [Tools](#tools)
  - [Plugins](#plugins)
  - [Correlation](#correlation)
  - [Extending JMeter](#extending-jmeter)
  - [IDE Integration](#ide-integration)
  - [Editors](#editors)
  - [Utilities](#utilities)
  - [AI](#ai)
- [APM Integration](#apm-integration)
- [JMeter Performance](#jmeter-performance)
- [Tips & Tricks](#tips--tricks)
- [Books](#books)
- [Trainings & Courses](#trainings--courses)
- [Videos](#videos)
- [Community](#community)
  - [Blogs](#blogs)
  - [Forums](#forums)
  - [Twitter](#twitter)
  - [Q&A](#qa)
- [Related](#related)
  - [Awesome Lists](#awesome-lists)
  - [Other](#other)

<a id="official-resources"></a>
## 公式リソース


- [Apache JMeter Project](https://jmeter.apache.org/) - アパッチ・ジェイマータの公式サイト
- [GitHub Repository](https://github.com/apache/jmeter) - アパッチ・ジェイマータのソースコードリポジトリ
- [JMeter Wiki](https://cwiki.apache.org/confluence/display/jmeter) - アパッチ・ジェイマータの公式ドキュメンテーション
- [Issue Tracking](https://jmeter.apache.org/issues.html) - アパッチ・ジェイマータの問題トラッキングシステム
- [Mailing Lists](https://jmeter.apache.org/mail2.html) - アパッチ・ジェイマータのメールリスト

<a id="distributions"></a>
## ディストリビューション

- [Download Apache JMeter](https://jmeter.apache.org/download_jmeter.cgi) - アパッチ・ジェイマータ：公式ダウンロード
- [JMeter for Windows](https://sourceforge.net/projects/jmeterforwindows/) - プラグインを含むジェイマータのインストールパッケージ
- [JMeter Bootstrap](https://github.com/cfpb/jmeter-bootstrap) - ジェイマータおよびジェイマータプラグインの設定方法。サブモジュールとして利用できるように設計されている。

<a id="getting-started"></a>
## はじめに

- [Getting Started with Apache JMeter](https://dzone.com/refcardz/getting-started-with-apache-jmeter)
- [The Beginner's Guide to Performance Testing with Apache JMeter](https://medium.com/better-programming/the-beginners-guide-to-performance-testing-with-apache-jmeter-5cc52c327ff6)
- JMeter — Performance and Load Testing: Beginner's Guide: [part 1](https://ekremkurt1907.medium.com/jmeter-performance-and-load-testing-beginners-guide-part-i-5121604bf97a), [part 2](https://ekremkurt1907.medium.com/jmeter-performance-and-load-testing-beginners-guide-part-ii-7edb98b0d2c3)

<a id="tutorials"></a>
## チュートリアル

- [JMeter Tutorial](https://artoftesting.com/jmeter-tutorial) - アートオブテスティングによる
- Load Testing with JMeter: [part 1](https://lincolnloop.com/blog/load-testing-jmeter-part-1-getting-started/), [part 2](https://lincolnloop.com/blog/load-testing-jmeter-part-2-headless-testing-and-je/), [part 3](https://lincolnloop.com/blog/load-testing-jmeter-part-3-replaying-apache-logs/) - ブランドン・コンクルによる.
- [JMeter Tutorial](https://www.tutorialspoint.com/jmeter/) - チュートリアル・ポイントによる.
- [JMeter Tutorial for Load Testing: The Ultimate Guide](https://www.javacodegeeks.com/2014/11/jmeter-tutorial-load-testing.html) - ダニエル・グティエラ・ディエスによる.
- [JMeter: Load Development Lifecycle](https://datacadamia.com/jmeter/lifecycle) - データカダミアによる.
- [Load Testing with Apache JMeter](https://www.digitalocean.com/community/tutorial-series/load-testing-with-apache-jmeter) - ミッチェル・アニカス @ デジタルオーシンによる.
- [JMeter Tutorial for Beginners](https://www.guru99.com/jmeter-tutorials.html) - グーラ99による.
- [JMeter Tutorials](https://qaautomation.expert/2023/12/07/jmeter-tutorials/) - 品質保証自動化専門家による.
- [Web App Load Testing Using Maven Plugins for Apache JMeter, and Analyzing the Results](https://dzone.com/articles/running-load-test-web-app-using-maven-plugins) - ヴィンセント・ダブロンによる.

<a id="best-practices"></a>
## ベストプラクティス

- [JMeter Official Best Practices](https://jmeter.apache.org/usermanual/best-practices.html)
- [Optimize JMeter for Large Scale Tests](https://blog.octoperf.com/optimize-jmeter-for-large-scale-tests/)
- [Concurrent, High Throughput Performance Testing with JMeter](https://howtojboss.wordpress.com/2012/07/31/concurrent-high-throughput-performance-testing-with-jmeter/)

<a id="scripting"></a>
## スクリプティング

- [Beanshell vs JSR223 vs Java JMeter Scripting](https://www.blazemeter.com/blog/beanshell-vs-jsr223-vs-jmeter) - 最も人気のあるスクリプティングメカニズムのパフォーマンス比較
- [Testing with Groovy](https://static.packt-cdn.com/downloads/Testingwithgroovy.pdf) - ジェイマータとグローブイで負荷テストを行う

<a id="automation"></a>
## 自動化

### DSL

- [jmeter-java-dsl](https://abstracta.github.io/jmeter-java-dsl/) - JMeterのパフォーマンステストをVCSで実行できるシンプルなJava APIであり、プログラマにとって親しみやすい方法です。
- [jmeter-dotnet-dsl](https://abstracta.github.io/jmeter-dotnet-dsl/) - JMeterのパフォーマンステストをVCSで実行できるシンプルな.NET APIであり、プログラマにとって親しみやすい方法です。
- [jmeter-groovy-dsl](https://github.com/smicyk/groovy-jmeter) - Groovy-JMeterプロジェクトは、JMeterテストプランを書くためのシンプルなDSLです。
- [jmeter-as-code](https://github.com/anasoid/jmeter-as-code) - JavaでJMeterテストを書く・実行できるシンプルなJMeterラッパーです。
- [pymeter](https://github.com/eldaduzman/pymeter) - PythonでJMeterのパフォーマンステストを行うためのシンプルなAPIです。

<a id="packages"></a>
### パッケージ

- [loadtest](https://github.com/tmobile/loadtest) - JMeterを使用した負荷テストを行うRパッケージです。

<a id="frameworks"></a>
### フレームワーク

- [Taurus](https://gettaurus.org/) - 継続的テストに最適化された自動化フレームワークです。
- [Performance testing framework](https://github.com/serputko/performance-testing-framework) - Apache JMeterによるバックエンド負荷テストと、sitespeed.io + webpagetestプライベートインスタンスによるフロントエンド負荷テストの両方に対応するフレームワークです。
- [JMeter Load Testing Center](https://github.com/innogames/ltc) - JMeterを使用した負荷テストの実行・監視・結果分析を行うオンラインウェブアプリケーション／ダッシュボードです。
- [MeterSphere](https://github.com/metersphere/metersphere) - オープンソースのエンタープライズクラスの継続的テストプラットフォームで、JMeter などのオープンソース標準と互換性があります。 :cn:
- [Carrier](https://github.com/carrier-io) - カスタマイズされたJMeterおよびGatlingコンテナを使用して負荷テストを実行できる継続的なテスト実行プラットフォームです。

<a id="conversion"></a>
### 変換

- [swaggerjmx](https://github.com/Pactortester/swaggerjmx) - Swagger UIの仕様をJMeterテストプランに変換するツールです。
- [postman2jmx](https://github.com/Loadium/postman2jmx) - PostmanコレクションをJMeter jmxファイルに変換するツールです。
- [convert-postman-jmeter](https://github.com/sercheo87/convert-postman-jmeter) - PostmanプロジェクトをJMeterに変換します。
- [fiddler2jmeter](https://github.com/dperfly/fiddler2jmeter) - FiddlerまたはCharlesをJMeterスクリプトに変換するツールです。
- [har-convertor-jmeter-tool](https://github.com/vdaburon/har-convertor-jmeter-plugin) - Apache JMeterプラグインでHARファイルをJMeterスクリプトおよびRecord XMLファイルに変換します。
- [JMeter HAR Importer Plugin](https://github.com/Qytera-Gmbh/JMeterHARImporterPlugin) - JMeterプラグインでHTTPアーカイブ（HAR）ファイルをApache JMeterにインポートします。

## CI

<a id="tools--plugins"></a>
### ツールとプラグイン

- [JMeter Ant Task](https://github.com/jfifield/ant-jmeter) - AntタスクでJMeterテストプランの実行を自動化します。
- [JMeter Maven Plugin](https://github.com/jmeter-maven-plugin/jmeter-maven-plugin) - Mavenプラグインで、ビルドの一部としてJMeterテストを実行できるようにします。
- [JMeter Gradle Plugin](https://github.com/jmeter-gradle-plugin/jmeter-gradle-plugin) - GradleプラグインでJMeterテストを実行します。
- [Jenkins Performance Plugin](https://plugins.jenkins.io/performance/) - Jenkinsにインストールされたプラグインで、JMeterからのレポートをキャプチャし、パフォーマンスおよび堅牢性のトレンドレポートをグラフィカルに生成します。
- [TeamCity Performance Tests Analysis Plugin](https://github.com/jtorgan/jmeter_plugin) - TeamCityにインストールされたプラグインで、CIにおける最もシンプルなパフォーマンステストを実行します。💀。
- [Bamboo JMeter Aggregator Plugin](https://marketplace.atlassian.com/apps/5902/jmeter-aggregator-for-bamboo) - Bambooにインストールされたプラグ及で、JMeterのテスト結果を収集・検証・可視化します。
- [Sonar JMeter Plugin](https://github.com/SonarQubeCommunity/sonar-jmeter) - JMeterのパフォーマンステスト結果を収集し、Sonarダッシュボードに表示するプラグイン 💀。
- [Lightning](https://deliverymind.github.io/lightning/) - JMeterの非機能テストをCI/CDサーバーに統合するためのフレームワーク。
- [Taurus JMeter Executor](https://gettaurus.org/docs/JMeter/) - Taurus自動化フレームワークにおけるJMeter Executor。
- [PerfAction for JMeter](https://github.com/marketplace/actions/perfaction-for-jmeter) - GitHub Actionで、Apache JMeterおよびそのプラグインを使用してパフォーマンステストを実行します。
- [Apache JMeter GitHub Action](https://github.com/marketplace/actions/apache-jmeter) - GitHub Actionで、Apache JMeterのパフォーマンステストを実行します。

<a id="tutorials--demo"></a>
### チュートリアルとデモ

- Jenkins
  - [Performance Tests with JMeter, Maven and Hudson](https://medium.com/the-server-labs/performance-tests-with-jmeter-maven-and-hudson-d1cbdb3ffad8)
  - [CI with Jenkins, Git, Maven, Grunt, and JMeter](https://github.com/dzuluagaapigee/apigee-ci-jenkins-git-maven-jmeter)
  - [Continuous automated web tests using Jenkins and JMeter](https://www.linkedin.com/pulse/continuous-automated-web-tests-using-jenkins-jmeter-mahanta)
  - [Automating JMeter tests with Maven and Jenkins](https://www.codecentric.de/en/knowledge-hub/blog/automating-jmeter-tests-maven-jenkins)
  - How to automate JMeter tests with Maven and Jenkins: [part 1](https://ribblescode.wordpress.com/2012/04/16/how-to-run-jmeter-tests-with-maven/), [part 2](https://ribblescode.wordpress.com/2012/04/16/how-to-automate-jmeter-tests-with-maven-and-jenkins-hudson-8/)
  - JMeter Continuous Performance Testing (JMeter + Ant + Jenkins): [part 1](https://www.testautomationguru.com/jmeter-continuous-performance-testing-part1/), [part 2](https://www.testautomationguru.com/jmeter-continuous-performance-testing-part2/)
  - [Continuous Integration 101: How to Run JMeter with Jenkins](https://dzone.com/articles/continuous-integration-101-how-to-run-jmeter-with)
- Bamboo
  - [How to Run JMeter in a Continuous Integration Environment with Bamboo](https://dzone.com/articles/how-to-run-jmeter-in-a-continuous-integration-envi)
- TeamCity
  - [How to Run JMeter Tests with TeamCity for Continuous Integration](https://web.archive.org/web/20211204112944/https://www.blazemeter.com/blog/how-run-jmeter-tests-teamcity-continuous-integration/)
- CircleCI
  - [How to integrate JMeter into CircleCI](https://www.blazemeter.com/blog/circleci-jmeter)
- SonarQube
  - [JMeter with Sonar](https://testersinaction.blogspot.com/2013/05/v-behaviorurldefaultvmlo_24.html)

<a id="distributed-testing"></a>
## 分散テスト

- [JMeter Distributed Testing Step-by-step](https://jmeter.apache.org/usermanual/jmeter_distributed_testing_step_by_step.pdf)
- [JMeter Remote Testing](https://jmeter.apache.org/usermanual/remote-test.html)
- [Setting up a JMeter Cluster for web server load testing](https://www.howtoforge.com/setting-up-jmeter-cluster-for-load-testing/)
- Dockerized
  - [Dockerized JMeter](https://gist.github.com/hhcordero/abd1dcaf6654cfe51d0b) - DockerとJMeterを用いた分散負荷テストワークフロー。
  - [JMeter Docker Images](https://hub.docker.com/search/?isAutomated=0&isOfficial=0&page=1&pullCount=0&q=jmeter&starCount=0)
  - [Distributed JMeter testing using Docker](https://srivaths.blogspot.com/2014/08/distrubuted-jmeter-testing-using-docker.html)
  - [A Docker solution to JMeter + InfluxDB + Grafana performance testing](https://medium.com/@ellenhuang523/a-docker-solution-to-jmeter-influxdb-grafana-performance-testing-568848de7a0f)
  - [AutoMeter](https://github.com/intuit/autometer) - JMeterのマスター・スレーブアーキテクチャに基づき、分散スレーブを使用して負荷テストをスケーリングする自動化ツール。
  - [JMeter Docker Extension](https://hub.docker.com/extensions/qainsights/jmeter-docker-extension) - Docker拡張機能で、Docker DesktopからJMeterテストを実行します。
- Testing in Cloud
  - Kubernetes
    - [jmeter-kubernetes](https://github.com/kubernauts/jmeter-kubernetes) - KubernetesおよびOpenShiftでのJMeterクラスタサポート。
    - [jmeter-k8s-starterkit](https://github.com/Rbillon59/jmeter-k8s-starterkit) - KubernetesおよびGoによる自動ローダー解決策で、複数の負荷生成器を使用してKubernetesクラスター内のパフォーマンステストを実行します。
    - [kangal](https://github.com/hellofresh/kangal) - Grafanaによるレポートを提供する、AKSベースのスケーラブルJMeterテストフレームワーク。
    - [aks_testing_fwk](https://github.com/petegrimsdale/aks_testing_fwk) - Amazon EC2上でApache JMeterの実行を自動化します。
  - Amazon Web Services
    - [jmeter-ec2](https://github.com/oliverlloyd/jmeter-ec2/) - JMeter-EC2プロジェクトの改良版。
    - [gee](https://github.com/kowalcj0/gee) - 複数のAmazon EC2インスタンス上でJMeterを実行し、ELKで結果を確認します。
    - [os-jmeter-aws](https://github.com/Aptimyze/os-jmeter-aws) - Amazon EC2の複数インスタンス上でJMeterを実行し、ELKで結果を表示
    - [Load Testing with JMeter and Amazon EC2](https://medium.com/@alttaf/load-testing-with-jmeter-and-amazon-ec2-e143a7350596)
    - [Performance Testing in the Cloud with JMeter & AWS](https://web.archive.org/web/20190526033436/http://www.artofsoftwaredevelopment.com/performance/performance-testing-in-the-cloud-with-jmeter-aws)
    - [JMeter distributed testing with Amazon EC2](https://vedovini.net/2009/08/17/jmeter-distributed-testing-with-amazon-ec2/)
    - [jmeter-ecs](https://github.com/smithmicro/jmeter-ecs) - EC2 コンテナ サービス（ECS）上で分散テストを行うための JMeter Docker イメージ
  - DigitalOcean
    - [Lightweight JMeter Cloud](https://docs.google.com/presentation/d/1Yi5C27C3Q0AnT-uw9SRnMeEqXSKLQ8h9O9Jqo1gQiyI/) - DigitalOcean、JMeter および Docker を使って自作の JMeter クラウドを構築
  - Microsoft Azure
    - [Load Testing Pipeline with JMeter, ACI and Terraform](https://github.com/Azure-Samples/jmeter-aci-terraform) - Azure で動的にインフラをプロビジョニング・デストロイする Apache JMeter と Terraform を使うスケーラブルなクラウド負荷／ストレステストパイプラインソリューション

<a id="cloud-services--saas"></a>
## クラウドサービス／SaaS

*JMeterテストプランの実行をサポートするクラウドベースの負荷テストサービスのリスト。*

- [Perforce BlazeMeter](https://www.blazemeter.com/) - JMeter および Selenium をサポートするパフォーマンスエンジニアリングプラットフォーム
- [OctoPerf](https://octoperf.com/) - JMeter および Selenium をサポートする SaaS およびオンプレミス負荷テストツール
- [RedLine13](https://redline13.com/) - JMeter、Gatling および Selenium シナリオをサポートする AWS 基盤の負荷テストサービス
- [OpenText Core Performance Engineering](https://www.opentext.com/products/saas/core-performance-engineering) - JMeter および Gatling をサポートするオープンテキストのクラウドベースのウェブおよびモバイルパフォーマンステストソリューション（以前は Micro Focus LoadRunner Cloud、以前は HP StormRunner Load）
- [Loadium](https://loadium.com/) - JMeter および Selenium をサポートする AWS 基盤の負荷テストサービス
- [Azure Microsoft](https://azure.microsoft.com/en-us/products/app-testing/) - Azure 負荷テストサービスは Apache JMeter を使用

<a id="results-processing"></a>
## 結果処理

- [JMeter Report Dashboard](https://jmeter.apache.org/usermanual/generating-dashboard.html) - JMeter はテストプランからグラフおよび統計情報を取得するダッシュボードレポート生成をサポート
- [Latency Lingo](https://latencylingo.com) - テスト結果を公開して、インサイトを含むホストされたインタラクティブダッシュボードを生成

<a id="results-analysis"></a>
### 結果分析


- [JMeter Log Analysis](https://cwiki.apache.org/confluence/display/jmeter/LogAnalysis) - JMeter ログ分析の提案およびレシピ
- [Analyzing JMeter Results](https://www.datazoo.de/articles/158/performance-testing-analyzing-jmeter-results)
- [JMeter Result Analysis: The Ultimate Guide](https://blog.octoperf.com/jmeter-result-analysis-the-ultimate-guide/)
- [JtlReporter](https://github.com/ludeknovy/jtl-reporter) - JTL ファイルをアップロードすることでレポートを生成するオンラインレポートアプリケーション
- [JMeter Result Analysis Plugin](https://github.com/afranken/jmeter-analysis-maven-plugin) - JMeter テスト結果をパースし、詳細なチャート付きレポートを生成する Maven プラグイン
- [JMeter Results Analyser](https://sourceforge.net/projects/jmstats/) - JMeter テスト結果の集計、分析、レポートを実行するウェブベースアプリケーション
- [JMeter Graph Tool Maven Plugin](https://github.com/vdaburon/jmeter-graph-tool-maven-plugin) - [JMeter Plugins](#plugins)のCMDRunnerとFilter Results Toolsを使ってグラフを生成し、結果をフィルタリングするMavenプラグイン。通常は[JMeter Maven Plugin](#tools--plugins)および一連の[関連プラグイン](https://github.com/vdaburon/jmeter-graph-tool-maven-plugin#compagnion-tools)と組み合わせて使用します。
- DB Results Collectors
  - [JMeter DBCollector Plugin](https://sourceforge.net/projects/jmeterdbcollect/) - 結果をデータベースにログ記録できるようにするプラグイン
  - [JMeter MySQLCollector Plugin](https://cwiki.apache.org/confluence/display/jmeter/MysqlCollectorPlugin) - リスナーを MySQL データベースにログ記録できるようにするパッチ
- SLA and KPIs
  - [JMeter SLA Report](https://github.com/sgoeschl/jmeter-sla-report) - JAMon をベースにした JMeter HTML レポート生成器
  - [JMeter JUnit Reporter](https://github.com/tilln/jmeter-junit-reporter) - カスタム KPI（キーパフォーマンスインジケーター）に基づき XML 形式の JUnit レポートを生成する Apache JMeter プラグイン
  - Tools to validate results from KPIs:
    - [JUnit KPI Reporter from JMeter CSV Report](https://github.com/vdaburon/JUnitReportKpiJMeterReportCsv) - JMeter レポート CSV ファイルにカスタム KPI を適用して JUnit レポートを生成するツール
    - [JUnit KPI Reporter from JMeter Dashboard Statistics JSON File](https://github.com/vdaburon/JUnitReportKpiJMeterDashboardStats) - JMeter ダッシュボード統計 JSON ファイルにカスタム KPI を適用して JUnit レポートを生成するツール
    - [JUnit Report Compare 2 JMeter Report CSV Files](https://github.com/vdaburon/JUnitReportKpiCompareJMeterReportCsv) - 2つの負荷テストを比較し、JMeter レポート CSV ファイルに基づいてカスタム KPI を使用して JUnit レポートを作成するツール

<a id="reporting--visualization"></a>
### レポートと可視化


- InfluxDB & Grafana
  - [Using JMeter with InfluxDB & Grafana](https://blog.vinsguru.com/category/influxdb/) - InfluxDB と Grafana を使用してリアルタイムのテスト結果とサーバー監視データを収集・可視化するガイドの集まり
  - [How to Use Grafana to Monitor JMeter Non-GUI Results](https://dzone.com/articles/how-to-use-grafana-to-monitor-jmeter-non-gui-resul)
  - [jmeterReports](https://github.com/kirillyu/jmeterReports) - Grafana のカスタムダッシュボードを用いて、Confluence に自動生成された JMeter テスト実行結果を報告する :ru:
  - [InfluxDB Community Template for JMeter](https://github.com/influxdata/community-templates/tree/master/apache_jmeter) - InfluxDB の設定を一括で提供したパッケージで、ダッシュボード、Telegraf 設定、通知、アラートを1つのマニフェストファイルにまとめる
  - Grafana Dashboards
    - [JMeter Load Test Dashboard](https://grafana.com/grafana/dashboards/1152-jmeter-load-test/) - Grafana ダッシュボードが JMeter（NovaTec-APM）から提供されるリアルタイム負荷テストメトリクスを表示
    - [JMeter Dashboard using Core InfluxdbBackendListenerClient](https://grafana.com/grafana/dashboards/5496-apache-jmeter-dashboard-by-ubikloadpack/) - InfluxDB と Grafana を使って、Apache JMeter の負荷テストをリアルタイムで監視（Philippe M による）
    - [JMeter Dashboard (3.2 and up)](https://grafana.com/grafana/dashboards/3351-jmeter-3-3/) - InfluxDB と Grafana を使って、JMeter の負荷テストをリアルタイムで監視（adrianbanu による）
    - [JMeter (via prometheus exporter)](https://grafana.com/grafana/dashboards/2492-jmeter/) - Prometheus エクスポーターを介して JMeter メトリクスを確認できる Grafana ダッシュボード（chiabre による）
  - [JMeter-InfluxBD-Writer Plugin](https://github.com/NovatecConsulting/JMeter-InfluxDB-Writer) - JMeter プラグインで負荷テストデータを即座に InfluxDB に書き込む
  - [JMeter Results to InfluxDB](https://github.com/soprasteria/jmeter2influxdb) - CSV ファイルから JMeter の結果を読み込み、InfluxDB データベースに保存
- ELK Stack
  - [Using ELK](https://ecmarchitect.com/archives/2014/09/09/3932) - Elasticsearch、Logstash、Kibana を使って JMeter テスト結果を可視化
  - [JMeter + Elasticsearch Live Monitoring](https://medium.com/@anthony.gauthier325/jmeter-elasticsearch-live-monitoring-c895c843c51e) - Elasticsearch バックエンドリスナーと Grafana/Kibana を使って、結果をリアルタイムで監視
  - [jmeter-logstash](https://github.com/anasoid/jmeter-logstash) - テスト終了後またはリアルタイムで JTL 結果を Docker と Logstash でパースし、Elasticsearch または InfluxDB にデータを送信して、良好なダッシュボードを作成し、異なるテストを比較
- Prometheus
  - [jmeter-prometheus-plugin](https://github.com/johrstrom/jmeter-prometheus-plugin) - Apache JMeter 用の Prometheus リスナーで、結果を HTTP API で公開
  - [jmeter-prometheus-listener](https://github.com/kolesnikovm/jmeter-prometheus-listener) - Apache JMeter バックエンドリスナーの Prometheus メトリクスエクスポート実装
  - [ulp-observability-plugin](https://github.com/ubikingenierie/ulp-observability-plugin) - JMeter CLI のパフォーマンステストを、GUI モードを起動せずに、お気に入りのブラウザから監視できるようにする
- ClickHouse
  - [JMeter Results from ClickHouse](https://grafana.com/grafana/dashboards/9561-jmeter-results-from-clickhouse-eng/) - [JMeter Listener pack](https://gitlab.com/testload/jmeter-listener/-/wikis/3.3-ClickHouse-usage)、ClickHouse および Grafana を使ってテスト結果を収集・監視
  - [jmeter-clickhouse-listener](https://gitlab.com/testload-group/jmeter-clickhouse-listener) - JMeter プラグインで負荷テストデータを即座に ClickHouse に書き込む
- Backend Listener Implementations
  - [jmeter-elasticsearch-backend-listener](https://github.com/anthonygauthier/jmeter-elasticsearch-backend-listener) - JMeterプラグインでテスト結果をElasticsearchエンジンに送信する
  - [jmeter-backend-azure](https://github.com/adrianmo/jmeter-backend-azure) - JMeterプラグインでテスト結果をAzure Application Insightsに送信する
  - [jmeter-backend-listener-kafka](https://github.com/veeranalyticsltd/jmeter-backend-listener-kafka) - JMeterプラグインでテスト結果をKafkaサーバーに送信する
  - [jmeter-listener](https://gitlab.com/testload/jmeter-listener) - JMeterプラグインでロードテストデータを即座にClickHouse、InfluxDB、Elasticsearchに書き出す
  - [jmeter-influxdb2-listener-plugin](https://github.com/mderevyankoaqa/jmeter-influxdb2-listener-plugin) - Apache JMeter用のInfluxDB v2.0リスナープラグイン
  - [jmeter-datadog-backend-listener](https://github.com/DataDog/jmeter-datadog-backend-listener) - JMeterのテスト結果をDatadogに送信する
  - [jmeter-dynatrace-plugin](https://github.com/dynatrace-oss/jmeter-dynatrace-plugin) - JMeterバックエンドリスナー実装により、記録されたロードテストメトリクスをDynatrace MINTメトリクスイングリース経由で設定されたDynatraceモニタリング環境に送信する
  - [jmeter-backend-newrelic](https://github.com/darrensmithwtc/jmeter-backend-newrelic) - JMeterプラグインでテスト結果をNew RelicメトリクスAPIに送信する
  - [perfana-jmeter-timescaledb](https://github.com/perfana/perfana-jmeter-timescaledb) - JMeterバックエンドリスナープラグインでテスト結果を即時的にTimescaleDBに書き出し、リアルタイムなパフォーマンス分析を行う
- AWS CloudWatch
  - [jmeter-cw-logs](https://github.com/concurrencylabs/jmeter-cw-logs) - AWS CloudWatch LogsにJMeterテスト結果を公開するCloudFormationテンプレート
- Custom & Deprecated
  - [Using Matplotlib & Python](https://www.metaltoad.com/blog/plotting-your-load-test-jmeter) - MatplotlibプロットツールとPythonを使用したJMeterロードテスト結果の可視化
  - [Statistical Aggregate Report](https://rubenlaguna.com/post/2007-01-02-better-jmeter-graphs/) - 強化された結果可視化を実現するカスタム統計集計レポートリスナー
  - [JChav](https://github.com/d6y/jchav) - JMeterチャート履歴と可視化ライブラリ
  - JMeter Dashboard: [手順](https://seangkuan.blogspot.com/2015/06/jmeter-dashboard-realtime-monitoring-of.html)、[ソース](https://github.com/vincentskooi/JMeterDashboard) - JMeter負荷テストをリアルタイムで監視します。
  - [Using CMDRunner & Powershell](https://performancewebautoamtionother.blogspot.com/2015/12/jmeter-create-graphs-with-cmdrunner.html) - CMDRunnerとPowerShell並列実行でJMeterグラフを作成

<a id="performance-testing"></a>
## 性能テスト

<a id="streaming-protocols"></a>
### ストリーミングプロトコル

- [Easy and realistic Load Testing of HTTP Live Streaming (HLS) with Apache JMeter](https://ubik-ingenierie.com/blog/easy-and-realistic-load-testing-of-http-live-streaming-hls-with-apache-jmeter/)
- [Using JMeter to Load Test Live HLS Concurrency of Wowza Streaming Engine](https://web.archive.org/web/20210918113142/https://www.realeyes.com/blog/wowza-streaming/)
- [How to Test Video Streaming with JMeter](https://www.blazemeter.com/blog/video-streaming-testing)
- [HLS JMeter Plugin](https://github.com/Blazemeter/HLSPlugin)

<a id="mobile-apps"></a>
### モバイルアプリ

- [Record iOS application HTTP requests](https://www.testautomationguru.com/jmeter-record-ios-application-http-requests/)
- [Load Testing Mobile Apps Made Easy](https://www.blazemeter.com/blog/mobile-app-load-testing)

<a id="mainframe-environments"></a>
### メインフレーム環境

- [JMeter RTE Plugin](https://github.com/Blazemeter/RTEPlugin) - メインフレームアプリケーションのテストに使用するJMeter RTE（Remote Terminal Emulatorプロトコル）プラグイン

<a id="rpc-frameworks"></a>
### RPCフレームワーク

- [JMeter gRPC Plugin](https://github.com/zalopay-oss/jmeter-grpc-plugin) - JMeterプラグインでロードテストgRPCをサポート
- [JMeter gRPC Request](https://github.com/zalopay-oss/jmeter-grpc-request) - JMeterサンプラーでサーバーにgRPCリクエストを送信する
- [JMeter Dubbo Plugin](https://github.com/thubbo/jmeter-plugins-for-apache-dubbo) - JMeterプラグインでApache Dubboをサポート

<a id="restful-api"></a>
### RESTful API

- [REST API Testing with JMeter. Step by Step Guide](https://blog.octoperf.com/rest-api-testing-with-jmeter-step-by-step-guide/)

<a id="tools"></a>
## ツール

<a id="plugins"></a>
### プラグイン

- [JMeter Plugins](https://jmeter-plugins.org/) - Apache JMeter用の独立したプラグインセット。プラグインマネージャーが多数のプラグインを参照し、インストールを簡略化する
- [Ubik Load Pack](https://ubikloadpack.com/) - Apache JMeter向けのパフォーマンス拡張プラグイン。
- GitHub Topics: [jmeter-plugin](https://github.com/topics/jmeter-plugin), [jmeter-plugins](https://github.com/topics/jmeter-plugins) - `jmeter-plugin`または`jmeter-plugins`ラベルが付いたJMeterプラグインを探索。

<a id="correlation"></a>
### 相関処理


- [Correlation Recorder Plugin](https://github.com/Blazemeter/CorrelationRecorder) - 動的変数を持つアプリケーションの記録プロセスを簡略化するために、記録時における変数の自動相関を提供するJMeterプラグイン。
- [Siebel CRM Plugin](https://github.com/Blazemeter/SiebelPlugin) - Siebel CRMアプリケーションのスクリプト作成を簡略化するために、記録時における変数の自動相関を提供するJMeterプラグイン ❄️。
- [ULP Auto-correlator Plugin](https://ubik-ingenierie.com/blog/ubikloadpack-autocorrelator-plugin-help/) - [Ubik Load Pack](#plugins)から提供されるOracleおよびVaadinベースアプリケーション向けの商用プラグイン。

<a id="extending-jmeter"></a>
### JMeterの拡張

- [JMeter Developer Manual](https://cwiki.apache.org/confluence/display/jmeter/DeveloperManual)
- [How to write a plugin for JMeter](https://jmeter.apache.org/usermanual/jmeter_tutorial.html)
- [How to build a JMeter plugin utilizing Groovy](https://web.archive.org/web/20180225144718/http://artur.ejsmont.org/blog/content/how-to-build-a-jmeter-plugin-utilising-groovy)
- [How to create a plugin in JMeter](https://stackoverflow.com/questions/20422640/how-to-create-a-plugin-in-jmeter)
- [Custom JMeter Samplers and Config Elements](https://codyaray.com/2014/07/custom-jmeter-samplers-and-config-elements)
- [Implement Custom JMeter Samplers](https://dzone.com/articles/implement-custom-jmeter-samplers)
- [Hello JMeter plugin](https://github.com/Bugazelle/hello-jmeter-plugin) - 初めてのJMeterプラグインを作成するための簡潔で明確かつ速いガイド。

<a id="ide-integration"></a>
### IDE統合

- [IntelliJ IDEA IDE Plugin](https://plugins.jetbrains.com/plugin/7013-jmeter-plugin) - IntelliJ IDEAから実行設定を作成し、JMeterテストを実行。
- [JMeter Viewer](https://github.com/anboralabs/intellij-jmeter) - IntelliJ IDE内でJMeterテストプランを開く。
- [JMeter + Eclipse HOWTO](https://cwiki.apache.org/confluence/display/jmeter/JMeterAndEclipseHowTo) - Eclipse IDEでJMeterプロジェクトを開発。
- [Using a Load Generator in NetBeans IDE](https://netbeans.apache.org/tutorial/main/kb/docs/java/profile-loadgenerator/)

<a id="editors"></a>
### エディター

JMXファイル用の標準JMeter GUIおよびXMLエディタ以外の代替エディタ


- [BlocklyJMX Editor](https://jmeter-plugins.org/editor/) - JMeterテストプランファイルのウェブベースのビューとエディタ（[JMeter Plugins](#plugins)プロジェクトの一部）。
- [JEval](https://github.com/QAInsights/JEval) - Pythonベースのユーティリティで、JMeterテストプランの各要素を分析し、推奨事項やベストプラクティスを提供。
- [JMX Enhancer](https://www.jmxenhancer.com/) - JMeterテストプランの準備を早めるためのソリューション。
- [jmx.js](https://www.vinodkd.org/jmx.js/) - JMeter JMXファイル向けのウェブベースエディタ 💀。

<a id="utilities"></a>
### ユーティリティ

- [Hamster](https://github.com/QAInsights/hamster) - MacのメニューバーからJMeterテストプランを迅速に実行。

### AI

- [Feather Wand](https://jmeter.ai) - Claude Code、Codex、OpenCode、Geminiとの統合により、JMeterにAIアグエントを提供。

<a id="apm-integration"></a>
## APM統合

アプリケーションパフォーマンスモニタリング（APM）ツールとの統合により、アプリケーションサーバー、データベースサーバー、ウェブサービスのパフォーマンスを分析可能


- [Servers Performance Monitoring Plugin](https://jmeter-plugins.org/wiki/PerfMon/) - [JMeter Plugins](#plugins)プロジェクトから提供されるサーバー監視プラグイン。
- [DX App Synthetic Monitor](https://techdocs.broadcom.com/us/en/ca-enterprise-software/it-operations-management/app-synthetic-monitor/SaaS/using/use-jmeter-scripts-to-test-web-servers.html) - JMeterサポートを備えた取引監視およびテストソリューション。
- Performance Remediation using New Relic and JMeter: [part 1](https://web.archive.org/web/20250811141928/https://moduscreate.com/blog/performance-remediation-using-new-relic-jmeter-part-1-3/), [part 2](https://web.archive.org/web/20250809025316/https://moduscreate.com/blog/performance-remediation-using-new-relic-jmeter-part-2-3/), [part 3](https://web.archive.org/web/20250719013947/https://moduscreate.com/blog/performance-remediation-using-new-relic-jmeter-part-3-of-3/)
- [Elastic APM integration](https://github.com/vdaburon/jmeter-elastic-apm) - Elastic Application Performance Monitoring APIのApache JMeterスクリプトへの統合を管理。

<a id="jmeter-performance"></a>
## JMeterの性能

- [JMeter Performance](https://cwiki.apache.org/confluence/display/jmeter/JMeterPerformance) - JMeterのバージョンごとのパフォーマンスの進化。
- [JMeter Performance and Tuning Tips](https://ubik-ingenierie.com/blog/jmeter_performance_tuning_tips/) - Ubik Ingenierie による。
- How to speed up JMeter: [part 1](https://pflb.us/blog/how-to-speed-up-jmeter-part-1/), [part 2](https://pflb.us/blog/how-to-speed-up-jmeter-part-2/)

<a id="tips--tricks"></a>
## ヒントとテクニック

- [JMeter tips](https://web.archive.org/web/20221126233834/https://www.webwob.com/html/jmeter_tips.html) - Apache JMeterのヒントとコツのスクラッチパッド。

<a id="books"></a>
## 書籍


- [Apache JMeter: A Practical Beginner's Guide to Automated Testing and Performance Measurement for Your Websites](https://books.google.com/books?id=nX8oKIEvUcYC) - Emily H. Halili（Packt Publishing）による。
- [Performance Testing with JMeter 2.9](https://books.google.com/books?id=fpWmv3wPT64C) - Bayo Erinle（[Packt Publishing](https://www.packtpub.com/product/performance-testing-with-jmeter-29/9781782165842)）による；Apache JMeterを使用してウェブアプリケーションをテストするためのガイド。実際の実践例を用いた。
- [Performance Testing with JMeter, 2nd Edition](https://books.google.com/books?id=6ditCAAAQBAJ) - Bayo Erinle（[Packt Publishing](https://www.packtpub.com/product/performance-testing-with-jmeter/9781784394813)）による。
- [Performance Testing with JMeter 3, 3rd Edition](https://books.google.com/books?id=BedDDwAAQBAJ) - Bayo Erinle（[Packt Publishing](https://www.packtpub.com/product/performance-testing-with-jmeter-3-third-edition/9781787285774)）による。
- [JMeter Cookbook](https://books.google.com/books?id=gJUeBQAAQBAJ) - Bayo Erinle（[Packt Publishing](https://www.packtpub.com/product/jmeter-cookbook/9781783988280)）による；Apache JMeterを成功裏に使用するための70の洞察と実用的なレシピ。
- [JMeter by Example](https://books.google.com/books?id=iWeJDAEACAAJ) - Sai Matam と Jagdeep Jain（[Leanpub](https://leanpub.com/jmeterbyexample)）による；ウェブサイトのパフォーマンスを測定するためのシンプルで実用的な、ステップバイステップチュートリアル。
- [Pro Apache JMeter: Web Application Performance Testing](https://books.google.com/books?id=YJ4xDwAAQBAJ) - Sai Matam と Jagdeep Jain（[Apress](https://link.springer.com/book/10.1007/978-1-4842-2961-3)）による。
- [Master Apache JMeter: From load testing to DevOps](https://books.google.com/books?id=D_amDwAAQBAJ) - Antonio Gomes Rodrigues、Bruno Demion（Milamber）および Philippe Mouawad（[Leanpub](https://leanpub.com/master-jmeter-from-load-test-to-devops)、[Packt Publishing](https://www.packtpub.com/product/master-apache-jmeter-from-load-testing-to-devops/9781839217647)）による。
- [Advanced JMeter Testing](https://leanpub.com/advanced_jmeter_testing) - Penny Curich（[Leanpub](https://leanpub.com/advanced_jmeter_testing)）による；Apache JMeter 5.0用のカスタムコンポーネントの作成ガイド。

<a id="trainings--courses"></a>
## トレーニングと講座

- [JMeter: Performance and Load Testing (Feb 2019)](https://www.linkedin.com/learning/jmeter-performance-and-load-testing) - LinkedIn Learning による。
- [Advanced JMeter (Jul 2020)](https://www.linkedin.com/learning/advanced-jmeter) - LinkedIn Learning による。
- [JMeter Training Courses](https://www.nobleprog.co.uk/cc/apachejmetertesting) - NobleProg による。
- [BlazeMeter University](https://www.blazemeter.com/university) - BlazeMeter による。
- [JMeter Courses collection](https://www.udemy.com/topic/jmeter/) - Udemy による。
- [Web Applications (and Mobile Apps) Performance Testing with JMeter](http://pragmatictestlabs.com/web-applications-mobile-apps-performance-testing-jmeter/) - Pragmatic Test Labs による。
- [Training courses on Load Testing with Apache JMeter](https://ubik-ingenierie.com/blog/jmeter-trainings-by-contributors-and-committers/) - Ubik Ingenierie による。
- [Apache JMeter Training](https://qainsights.com/apache-jmeter-training/) - QAInsightsによる
- [JMeter Getting Started Course (Apr 2019)](https://www.pluralsight.com/courses/jmeter-getting-started) - プラルシグットによる

<a id="videos"></a>
## 動画

- [JMeter Tutorials](https://www.youtube.com/c/AutomationStepByStep/search?query=jmeter) - ステップバイステップの自動化による
- [Learn Apache JMeter Series](https://www.youtube.com/playlist?list=PLJ9A48W0kpRIjLkZ32Do9yDZXnnm7_uj_) - QAInsightsによる
- [JMeter / Devops/ CI-CD / Cloud](https://www.youtube.com/c/xavki-linux/search?query=jmeter) - xavki :fr:による

<a id="community"></a>
## コミュニティ

<a id="blogs"></a>
### ブログ

- [BlazeMeter Blog](https://www.blazemeter.com/blog) - BlazeMeterのJMeterおよびパフォーマンステストに関するブログ
- [Ubik Load Pack Blog](https://ubik-ingenierie.com/blog/category/jmeter/) - Ubik Ingenierieのブログ
- [TestAutomationGuru Blog](https://www.testautomationguru.com/category/jmeter/) - テスト自動化に関する技術ブログ
- [RedLine13 Blog](https://www.redline13.com/blog/tag/jmeter/) - RedLine13ブログのJMeter記事
- [JMeter Blog](https://shantonusarker.blogspot.com/p/jmeter.html) - JMeterを用いたパフォーマンスおよび自動化テストに関する別のブログ
- [OctoPerf Blog](https://blog.octoperf.com/categories/jmeter/) - OctoPerfのJMeterおよび負荷テストに関するブログ
- [Abstracta JMeter Archives](https://abstracta.us/blog/tag/jmeter/) - AbstractaのJMeterに関するブログ
- [JMeter Basics](https://thatsabug.com/tags/jmeter-series/) - João Fariasによる

<a id="forums"></a>
### フォーラム


- [JMeterPlugins Google Group](https://groups.google.com/g/jmeter-plugins)

<a id="twitter"></a>
### Twitter


- [@ApacheJMeter](https://x.com/apachejmeter) - Apache JMeter負荷テストツールの公式Twitterアカウント
- [@jmeter_plugins](https://x.com/jmeter_plugins) - JMeter負荷テストツール用カスタムプラグインプロジェクトのTwitterアカウント
- [@BlazeMeter](https://x.com/BlazeMeter) - Blazemeter（DevOps向けパフォーマンスエンジニアリングプラットフォーム、JMeterをベースに）の公式Twitterアカウント
- [@masterjmeter](https://x.com/masterjmeter) - [Master Apache JMeter from Load Testing to DevOps](#books)書籍の公式アカウント
- [@ubikloadpack](https://x.com/ubikloadpack) - [Ubik Load Pack](#plugins)のカスタムJMeterプラグイン（動画ストリーミングおよび複雑なプロトコル負荷テスト）に関するTwitterアカウント

### Q&A

- [`jmeter` on Stack Overflow](https://stackoverflow.com/questions/tagged/jmeter)
- [`jmeter` on Gitter](https://app.gitter.im/#/room/#aliesbelik_jmeter-chat:gitter.im)
- [`#jmeter` on Slack](https://jmeterusers.slack.com/)
- [`r/jmeter` on Reddit](https://www.reddit.com/r/jmeter/)

<a id="related"></a>
## 関連情報

<a id="awesome-lists"></a>
### Awesomeリスト

- [Awesome Software Quality](https://github.com/ligurio/sqa-wiki) - 無料ソフトウェアテストおよび検証リソースの一覧
- [Awesome Testing](https://github.com/TheJambo/awesome-testing) - テストリソースの厳選された一覧
- [Awesome Tsung](https://github.com/aliesbelik/awesome-tsung) - Erlangで開発されたオープンソースマルチプロトコル分散負荷テストツール
- [Awesome Gatling](https://github.com/aliesbelik/awesome-gatling) - スケールとパフォーマンステスト用のオープンソースフレームワーク。スケール、アクカ、ネットティに基づく。
- [Awesome k6](https://github.com/grafana/awesome-k6) - オープンソースで、開発者中心のパフォーマンスモニタリングおよび負荷テストソリューション。
- [Awesome Locust](https://github.com/aliesbelik/awesome-locust) - Pythonで書かれたオープンソースのスケーラブルな負荷テストフレームワーク

<a id="other"></a>
### その他

- [How They Load Test](https://github.com/aliesbelik/how-they-load) - 世界中の企業が負荷テストを行う方法に関する公開されているリソースの厳選されたコレクション。
- [Load Testing Toolkit](https://github.com/aliesbelik/load-testing-toolkit) - デバッグ、ベンチマーク、負荷およびストレステストに使うオープンソースツールのコレクション。

<a id="contributing"></a>
## コントリビューション

まず [CONTRIBUTING](https://github.com/aliesbelik/awesome-jmeter/blob/ea110f64a3b78443dd61734ab1b5f1b1a371378a/CONTRIBUTING.md)ガイドラインをご確認ください。
