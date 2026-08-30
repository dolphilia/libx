---
title: "Awesome Gatling"
description: "Gatlingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-aliesbelik-awesome-gatling-readme-md"
---

# Awesome Gatling

Gatlingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [公式リソース](#official-resources)
- [はじめに](#getting-started)
- [チュートリアル](#tutorials)
- [分散テスト](#distributed-testing)
- [ツール](#tools)
  - [プラグイン](#plugins)
  - [フレームワーク](#frameworks)
  - [レポート](#reporting)
  - [Sandbox](#sandbox)
  - [その他](#miscellaneous)
- [CI](#ci)
- [テスト管理](#test-management)
- [研修と講座](#trainings--courses)
- [動画](#videos)
  - [講演](#talks)
  - [動画チュートリアル](#video-tutorials)
- [コミュニティ](#community)
- [関連情報](#related)
  - [Awesome リスト](#awesome-lists)
  - [その他](#other)

## 公式リソース

- [ホームページ](https://gatling.io/)
- [ドキュメント](https://docs.gatling.io/)
- [ソースコード](https://github.com/gatling/gatling)

## はじめに

- [DSL ベースの負荷テストツール Gatling を初めて見る](https://callistaenterprise.se/blogg/teknik/2014/04/16/a-first-look-at-gatling-a-dsl-based-load-test-tool/)
- [Gatling：性能テストを次のレベルへ](https://www.thoughtworks.com/insights/blog/gatling-take-your-performance-tests-next-level)
- [Gatling による負荷テスト：完全ガイド](https://www.james-willett.com/gatling-load-testing-complete-guide/)

## チュートリアル

- [Gatling で gRPC サービスを負荷テストする](https://medium.com/@georgeleung_7777/load-testing-grpc-services-with-gatling-990025c77055)
- [AWS Lambda 用の独自 Gatling Protocol を作成する](https://callistaenterprise.se/blogg/teknik/2016/11/26/gatling-custom-protocol/)
- [Gatling 用の独自 DSL で ZeroMQ を負荷テストする](https://mintbeans.com/load-testing-zeromq-with-gatling/)

## 分散テスト

- [Gatling と Kubernetes による分散負荷テスト](https://debijenkorf.tech/https-medium-com-annashepeleva-distributed-load-testing-with-gatling-and-kubernetes-93ebce26edbe)
- [Gatling — 負荷テストをスケールアウトする](https://web.archive.org/web/20210625094528/http://www.nimrodstech.com/gatling-cluster-load-testing/)
- [Distributed Gatling](https://github.com/Abiy/distGatling) - Gatling Simulation Test を分散・Cluster 環境で実行するソリューションです。
- [gatling-operator](https://github.com/st-tech/gatling-operator) - Kubernetes Operator で分散 Gatling 負荷テストを自動化します。

## ツール

### プラグイン

- [gatling-sbt-plugin](https://github.com/gatling/gatling-sbt-plugin) - Gatling を SBT と統合し、テストフレームワークとして使えるようにする Gatling SBT プラグインです。
- [gatling-build-plugin](https://github.com/gatling/gatling-build-plugin) - Gatling プロジェクトのビルド間で共通設定を共有する SBT プラグインです。
- [gatling-maven-plugin](https://github.com/gatling/gatling-maven-plugin) - Gatling Maven Extension です。
- [gatling-gradle-plugin](https://github.com/gatling/gatling-gradle-plugin) - Gradle 用 Gatling プラグインです。
- [gatling-remote-sbt](https://github.com/Pravoru/gatling-remote-sbt) - Gatling 負荷テストのリモート実行プラグインです。
- [gatling-junitrunner](https://github.com/Pravoru/gatling-junitrunner) - Gatling Simulation の JUnit ラッパーです。
- [gatling-grpc](https://github.com/phiSgr/gatling-grpc) - gRPC 用 Gatling 負荷テストプラグインです。
- [gatling-aws](https://github.com/callistaenterprise/gatling-aws) - AWS Lambda 用 Gatling Custom Protocol です。
- [gatling-xmpp-protocol](https://github.com/TLmaK0/gatling-xmpp-protocol) - Gatling で XMPP Server を Stress Test するための XMPP Protocol です。
- [gatling-jwt](https://bitbucket.org/atlassianlabs/gatling-jwt/) - JWT 署名付き Request の作成を支援する Gatling 2.0 拡張です。
- [gatling-mqtt](https://github.com/mnogu/gatling-mqtt) - MQTT を Stress Test する Gatling プラグインです。
- [gatling-kafka](https://github.com/mnogu/gatling-kafka) - Apache Kafka Protocol を Stress Test する Gatling プラグインです。
- [gatling-kafka](https://github.com/Amerousful/gatling-kafka) - Kafka 用 Gatling プラグインです。
- [gatling-kafka-extension](https://github.com/kbdering/GatlingMessaging) - Request-Reply（RPC）Pattern、Quality of Service（QoS）の測定、Resilience Test に重点を置いた、Kafka アプリケーション負荷テスト用 Gatling 拡張です。
- [gatling-kafka-plugin](https://github.com/galax-io/gatling-kafka-plugin) - Gatling で Kafka をサポートするプラグインです。
- [gatling-amqp-plugin](https://github.com/galax-io/gatling-amqp-plugin) - Gatling（3.2.x）で AMQP による性能テストをサポートするプラグインです。
- [gatling-jdbc-plugin](https://github.com/galax-io/gatling-jdbc-plugin) - JDBC 対応のシンプルな Gatling プラグインです。
- [gatling-picatinny](https://github.com/galax-io/gatling-picatinny) - Gatling DSL を拡張する多数の便利な関数を備えたライブラリです。
- [gatling-sql](https://github.com/tmcgrath/gatling-sql) - JDBC または Spark Thrift Server を Stress Test する Gatling 拡張です。
- [gatling-tcp-extensions](https://github.com/scalecube/gatling-tcp-extensions) - Gatling 用 TCP 拡張です。
- [gatling-thrift](https://github.com/3tty0n/gatling-thrift) - Apache Thrift 用のサードパーティ Gatling プラグインです。
- [gatling-bolt](https://github.com/sarmbruster/gatling-bolt) - Gatling で Neo4j Bolt Protocol をサポートします。
- [gatling-zeromq](https://github.com/softwaremill/gatling-zeromq) - ZeroMQ Protocol 用 Gatling Stress Test プラグインです。
- [gatling-dubbo](https://github.com/youzan/gatling-dubbo) - Apache Dubbo の負荷テストを実行する Gatling プラグインです。
- [gatling-wait](https://github.com/Amerousful/gatling-wait) - 条件、試行管理、エラー処理をカスタマイズし、特定イベントの待機を簡素化するプラグインです。

### フレームワーク

- [Kraken](https://github.com/OctoPerf/kraken) - OctoPerf による Gatling ベースの負荷テスト IDE です。
- [Karate Gatling](https://docs.karatelabs.io/extensions/performance-testing/) - Karate API Test を Gatling で実行する性能テストとして再利用します。
- [Taurus](https://gettaurus.org/docs/Gatling/) - Taurus Framework の Gatling Executor です。
- [Carrier](https://github.com/carrier-io) - カスタマイズした JMeter・Gatling Container で負荷テストを実行できる継続的テスト実行プラットフォームです。
- [Gatlytron](https://github.com/Performetriks/Gatlytron) - 簡単に導入できる Gatling Base Framework です。

### レポート

- [gatling-report](https://github.com/nuxeo/gatling-report) - Gatling の simulation.log を解析して CSV 統計を出力するか、Plotly Chart を含む HTML Report を作成します。
- [gatling2allure](https://github.com/biski/gatling2allure) - Gatling Log を Allure Report へ変換します。
- [gatling-elasticsearch](https://github.com/Amerousful/gatling-elasticsearch-logs) - Gatling の Raw Log を解析し、Elasticsearch へ送信する Logger です。

### Sandbox

- [gatling-scaffold](https://github.com/robsonbittencourt/gatling-scaffold) - Gatling、InfluxDB、Grafana を使う負荷テストプロジェクトの基盤です。
- [perfiz](https://github.com/znsio/perfiz) - Grafana Dashboard と Prometheus Monitoring を備えた、Gatling ベースの Docker 化 API 性能テスト設定です。

### その他

- [dakiya](https://github.com/rupeshmore/dakiya) - Postman Collection を Gatling Script へ変換します。
- [gatling-template.g8](https://github.com/galax-io/gatling-template.g8) - Gatling 性能テストプロジェクト用 Giter8 Template です。

## CI

- [Gatling Jenkins Plugin](https://github.com/jenkinsci/gatling-plugin) - Gatling 用 [Jenkins プラグイン](https://plugins.jenkins.io/gatling/)です。
- [run-gatling](https://github.com/liatrio/run-gatling) - Gatling 性能テストを GitHub Workflow に簡単に統合する GitHub Action です。

## テスト管理

- [Gatling による性能・負荷テスト](https://docs.getxray.app/space/XRAYCLOUD/44565472/Performance+and+load+testing+with+Gatling) - Jira 上の Xray Test Management と Gatling を統合します。

## 研修と講座

- [Gatling 講座](https://www.udemy.com/topic/gatling/) - Udemy による講座です。
- [性能テスト自動化101：Gatling、Lighthouse、Jenkins](https://www.educative.io/courses/performance-test-automation-101-gatling-lighthouse-jenkins) - Educative による講座です。

## 動画

### 講演

- [Gatling で正しく負荷テストする](https://www.youtube.com/watch?v=VUPTaPms210) - Stéphane Landelle、Voxxed Days Belgrade 2015。
- [Gatling 負荷テスト速習講座](https://www.youtube.com/watch?v=RiM1GsVSbzM) - Stéphane Landelle、Devoxx Belgium 2022。
- [Gatling で負荷テストを簡単に](https://www.youtube.com/watch?v=8Eplj8BvugA) - Rafał Piotrowski、Scala Days 2023 Madrid。

### 動画チュートリアル

- [Gatling による性能テスト](https://www.youtube.com/playlist?list=PLd4gvNaNZ4T3NCWsv3zwHYlLGtr9s1-Fz) - Tomi Tiihonen によるチュートリアルシリーズです。
- [初心者向け Gatling チュートリアル](https://www.youtube.com/playlist?list=PLw_jGKXm9lIYpTotIJ-R31pXS7qqwXstt) - James Willett によるチュートリアルシリーズです。

## コミュニティ

- [Gatling コミュニティ](https://community.gatling.io/)
- [Stack Overflow の `gatling`](https://stackoverflow.com/questions/tagged/gatling+or+scala-gatling+or+gatling-java+or+gatling-plugin)
- [Twitter の `@GatlingTool`](https://x.com/gatlingtool)

## 関連情報

### Awesome リスト

- [Awesome Software Quality](https://github.com/ligurio/sqa-wiki) - 無料のソフトウェアテスト・検証リソース一覧です。
- [Awesome Testing](https://github.com/TheJambo/awesome-testing) - テストリソースを集めたリストです。
- [Awesome JMeter](https://github.com/aliesbelik/awesome-jmeter) - Java で書かれたオープンソースの負荷テスト・性能測定ツールです。
- [Awesome Tsung](https://github.com/aliesbelik/awesome-tsung) - Erlang で開発されたオープンソースのマルチプロトコル分散負荷テストツールです。
- [Awesome k6](https://github.com/grafana/awesome-k6) - 開発者中心のオープンソース性能監視・負荷テストソリューションです。
- [Awesome Locust](https://github.com/aliesbelik/awesome-locust) - Python で書かれた、スケーラブルなオープンソース負荷テストフレームワークです。

### その他

- [各社の負荷テスト方法](https://github.com/aliesbelik/how-they-load) - 世界中の企業が負荷テストを行う方法について、公開されているリソースを集めたコレクションです。
- [負荷テストツールキット](https://github.com/aliesbelik/load-testing-toolkit) - コードやサービスのデバッグ、ベンチマーク、負荷・Stress Test を行うオープンソースツール集です。

## コントリビューション

コントリビューションを歓迎します！<br>
まず [CONTRIBUTING](https://github.com/aliesbelik/awesome-gatling/blob/d742881c4a82d75dc95b9ac4b32cbc6caf75828d/CONTRIBUTING.md) ガイドラインをご覧ください。
