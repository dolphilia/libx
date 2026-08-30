---
title: "grafana/awesome-k6"
description: "grafana/awesome-k6 の正規スナップショット"
licenseSource: "github-grafana-awesome-k6-readme-md"
---

<div align="center">
  <a href="https://k6.io/">
    <img src="assets/bert.png" alt="k6 mascot" width="300px">
  </a>


# Awesome k6 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)


k6での（テストに関する）<a href="https://k6.io/">k6</a>コミュニティリソースのコレクション。


貢献を歓迎します。まず[貢献ガイドライン](https://github.com/grafana/awesome-k6/blob/74f6d67f46d2eb472370517e4d34e10cb1e7f4ba/contributing.md)を読んでください。


</div>

## 目次

- [記事](#articles)
- [動画](#videos)
- [例／テンプレート](#examplestemplates)
- [ツール](#tools)
- [CI/CD](#cicd)
- [拡張](#extensions)
- [関連](#related)


## 記事

- [k6 Learn](https://github.com/grafana/k6-learn) - 負荷試験の原理と、k6で実行する実践例の説明。
- [k6 OSS workshop](https://github.com/grafana/k6-oss-workshop) - QuickPizzaデモアプリで実践的なk6例を使う2～3時間のk6ワークショップ。
- [Beginner's guide to load testing with k6](https://link.medium.com/npI9sjDyyjb) - k6を始める助けになる、複数部からなる入門ガイド。
- [Best practices organizing performance testing projects with k6](https://grafana.com/blog/2024/04/30/organizing-your-grafana-k6-performance-testing-suite-best-practices-to-get-started/) - 複数チーム・プロジェクトにわたるパフォーマンステストをスケールするためのガイドライン。
  - [Part 2 - JavaScript tools, shared libraries, and TypeScript](https://grafana.com/blog/2024/05/02/setting-up-your-grafana-k6-performance-testing-suite-javascript-tools-shared-libraries-and-more/) - JavaScriptツール、共有ライブラリ、TypeScriptを使うk6パフォーマンステストスイートの設定。
- [Distributed load testing with k6](https://feryn.eu/presentations/distributed-load-testing-k6-confoo23) - ConFoo Montreal 2023でのThijs Ferynによる発表。
- [Load Testing with k6](https://medium.com/@dan.ryan.emmons/qa-load-testing-with-k6-io-c11c2afced04) - k6の機能・能力の簡単な概要。
- [Test and visualize with InfluxDB, Grafana and K6](https://medium.com/@naoko.reeves/load-test-with-k6-and-visualize-with-influxdb-and-grafana-c6097a6f6d0a) - 負荷試験を設定し、Grafanaダッシュボードで可視化する。
- [Open source load testing tool review 2020](https://grafana.com/blog/2020/03/03/open-source-load-testing-tool-review/) - 最も人気の高いオープンソース負荷試験ツールの詳細な比較。
- [Load Testing Your API with Swagger/OpenAPI and k6](https://k6.io/blog/load-testing-your-api-with-swagger-openapi-and-k6) - OpenAPI仕様からk6負荷試験スクリプトを生成する。
- [Load Testing Your API with Postman](https://grafana.com/blog/2020/04/19/load-testing-your-api-with-postman/) - Postmanコレクションを使いAPIの負荷試験を行う方法。
- [Load Testing & Black Friday capacity planning](https://medium.com/back-market-engineering/how-back-market-sres-prepared-for-black-friday-5f017f343408) - Back Marketがk6ベースの負荷試験によりブラックフライデーへ備えた方法。
- [Load Testing SQL Databases with k6](https://grafana.com/blog/2021/07/14/load-testing-sql-databases/) - xk6-sql拡張を使いSQLデータベースを直接テストする方法。
- [Introducing TestRail in your K6 tests](https://dev.to/kwidera/introducing-testrail-in-you-k6-tests-eck) - k6出力をTestRailへ報告する。
- [Beautiful Load Testing With K6 and Docker Compose](https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3) - Docker Compose、K6、InfluxDB、Grafanaという優れた組み合わせで負荷試験を実行する方法。
- [Load Testing with Azure DevOps and k6](https://medium.com/microsoftazure/load-testing-with-azure-devops-and-k6-839be039b68a) - Azure DevOpsを設定し、k6、handleCallback、JUnitを使う自動負荷試験を実行する方法。
- [K6 — Custom Slack Integration: Metrics are the Magic of Tests](https://medium.com/geekculture/k6-custom-slack-integration-metrics-are-the-magic-of-tests-527aaf613595) - handleSummaryコールバックを使いk6出力結果をSlackへ送信する方法。
- [Load testing with k6](https://levelup.gitconnected.com/load-testing-with-k6-48488c7946bb) - k6を使う負荷、ソーク、ストレス、スパイク、スモークテスト。
- [How to write three times fewer lines of code when doing load testing](https://dev.to/tarantool/how-to-write-three-times-fewer-lines-of-code-when-doing-load-testing-9lb) - TarantoolをテストするためGoでk6拡張を構築する。
- [Load Testing. k6 + TypeScript + Azure DevOps](https://alex-klaus.com/load-test-k6-typescript-azure/)
- [Performance testing with k6](https://blog.shanelee.name/2021/12/15/performance-testing-with-k6/) - Open APIとTypeScriptによるAPIパフォーマンステスト。
- [k6 introduces browser automation and Prometheus support in k6 OSS](https://grafana.com/blog/2021/11/24/k6-introduces-browser-automation-and-prometheus-support-in-k6-oss/) - Grafanaブログより。ObservabilityCON 2021での機能発表。
- [Testing shift left observability with the Grafana Stack, OpenTelemetry, and k6](https://grafana.com/blog/2021/12/06/testing-shift-left-observability-with-the-grafana-stack-opentelemetry-and-k6/) - Grafanaブログより。ObservabilityCON 2021におけるJPMorgan ChaseのPlatform Engineering Executive Director、Vinodh Raviの講演要約。

- [Umbraco 9 - What a Performance!](https://moriyama.co.uk/about-us/news/blog-umbraco-9-what-a-performance/) - Azure上のUmbraco v9の性能をUmbraco v8、およびWindows対Linuxと比較してテストする。
- [On maintaining a k6 codebase, Part 1](https://filfreire.com/posts/k6_tricks_ep1) - 困難なk6負荷試験コードベースを保守するための個人的なヒント。
- [Load testing with k6 and k8s](https://www.toucantoco.com/en/tech-blog/tech-blog/load-testing-with-k6-and-k8s) - Toucan DevOpsチームが、k6を負荷試験ツールとして選択した理由とk8sでデプロイする方法を説明する。

- [CloudPosse's Load Testing Stack](https://github.com/cloudposse/load-testing) - k6、Grafana、InfluxDBを使う負荷試験スタック。
- [Real-time stress:
AnyCable, k6, WebSockets, and Yabeda](https://evilmartians.com/chronicles/real-time-stress-anycable-k6-websockets-and-yabeda) - Evil Martiansがk6とWebSocketsで「リアルタイムストレス」を追加する。
- [Streamlining Performance Testing with K6 and ChatGPT](https://medium.com/@monish.correia/streamlining-performance-testing-with-k6-and-chatgpt-206c6c7db82b) - Monish CorreiaはGitHub co-pilotを使いk6テストを書く。

## 動画

- [k6 YouTube Channel](https://www.youtube.com/c/k6test)
- [How to use k6 Cloud for load testing](https://www.youtube.com/watch?v=ncxCIuo5tUU&list=PLJdv3RhAQXNGkRCp7Q0k77n5jif4qjz2o) - k6 Cloudを始めるための短い動画シリーズ。
- [Intro to load testing with k6 and Grafana (k6 data source plugin and Prometheus Remote Write)](https://www.youtube.com/watch?v=tFsIgbqXbxM)
- [From Grafana ObservabilityCON: Intro to using k6 load testing with the Grafana observability stack](https://grafana.com/go/observabilitycon/2021/k6-load-testing/)
- [From Grafana ObservabilityCON: Building performance tests into your CI pipeline with k6 and Grafana, w/ Matthew Churcher, QA Engineer at Vonage](https://grafana.com/go/observabilitycon/2021/performance-testing-vonage/)
- [EveryoneCanContribute cafe: Load Performance Testing with k6](https://youtu.be/_ty40gSaaw8)
- [Playlist - What others says about k6](https://www.youtube.com/playlist?list=PLJdv3RhAQXNExTjuYN9ukawFHB7ucuejp)
  - [What is K6 & How to get started with k6](https://www.youtube.com/watch?v=ZAq87eZ1w2U) - 「Is it Observable?」による、可観測性向けk6拡張を使うチュートリアル。
  - [Website Performance + Load Testing with K6 (k6.io) in 5 MINUTES!](https://www.youtube.com/watch?v=brasMBAezJY) - DevOps Directiveによる、HARファイルからのテスト作成を示すk6の入門概要。
  - [Performance Testing your web app with k6](https://www.youtube.com/watch?v=Hu1K2ZGJ_K4) - Chris Jamesによる、オープンソースの負荷・パフォーマンス回帰テストツールk6と、API・Webサイトの負荷試験に関する解説。
  - [Application Load Testing with k6](https://www.youtube.com/watch?v=iQmItkazLOk) - Daniel Knittl-Frank、@TechTalk Days 2021、k6入門。
  - [Performance Testing From Zero to Hero with K6 & Azure](https://youtu.be/71N4_2Fv3I4?si=4eoRcvQfXNJR4aaa) - NDC Oslo 2021でのJose Luis Latorre Millas。
  - [AI-Powered K6 Testing: No Code, No Hassle, Just ChatGPT! 🦾🚀](https://www.youtube.com/watch?v=RYyPduBqGM4) - この動画でKarthik K.K.は、コードを一行も書かずChatGPTがk6テストを作成できることを実演する。

- [QAPractices Load Testing with k6](https://qapractices.com/documentation/load-testing-with-k6/) - k6とGrafanaによる負荷、ストレス、ソークテストの実践ガイド。

## 例／テンプレート

- [k6 examples](https://grafana.com/docs/k6/latest/examples/) - k6ドキュメント内の一般的な例のリスト。
- [k6 QuickPizza examples](https://github.com/grafana/quickpizza) - 複数のk6例を備え、デモ・ワークショップで使うWebアプリケーション。
- [k6-template-es6](https://github.com/grafana/k6-template-es6) - k6テストでES6機能を有効にするためWebpackとBabelを使うスターターテンプレート。
- [k6-typescript-template](https://github.com/grafana/k6-template-typescript) - TypeScriptでk6テストを書くためWebpackバンドラーを使うスターターテンプレート。
- [k6-rollup-example](https://github.com/grafana/k6-rollup-example) - Rollupでk6テストをバンドルする例。
- [Jahmilli/k6-example](https://github.com/Jahmilli/k6-example) - TypeScriptでk6テストを書くためVite（Rollup）バンドラーを使うスターターテンプレート。
- [tom-miseur/k6-templates](https://github.com/tom-miseur/k6-templates/) - k6プロジェクト向けの意見を反映したスターターテンプレート。
- [SwissLife-OSS/k6-multiscenario-template](https://github.com/SwissLife-OSS/K6-MultiScenario-template) - K6を使いマルチシナリオテンプレートを実装する。
- [agilob/multiscenario-tests](https://b.agilob.net/programming/k6/multiscenario-tests/) - 複数のシナリオを同時に実行する。
- [Im5tu/template-k6](https://github.com/Im5tu/template-k6) - K6パフォーマンステストスイートテンプレート。
- [mohsenny/k6-test-template](https://github.com/mohsenny/k6-test-template) - 負荷試験フレームワーク。
- [kwidera/k6_framework](https://github.com/kwidera/k6_framework) - 別のk6フレームワーク例。
- [Sahanipe/pet_store](https://github.com/Sahanipe/pet_store) - Swagger PetStore API向けモジュール化スクリプト。
- [lreimer/continuous-k6k8s](https://github.com/lreimer/continuous-k6k8s) - cronjobを使いKubernetesでk6テストを継続実行する。
- [luketn/docker-k6-grafana-influxdb](https://github.com/luketn/docker-k6-grafana-influxdb) - コンテナ化したK6、Grafana、InfluxDBのインスタンスで負荷試験を実行する方法を示す。

## ツール

- [k6-to-junit](https://github.com/Mattihew/k6-to-junit) - CIで容易に使うためk6出力をJUnit XMLへ変換するツール。
- [k6-reporter](https://github.com/benc-uk/k6-reporter) - k6出力をHTMLレポートへ変換するツール。
- [k6-html-reporter](https://github.com/szboynono/k6-html-reporter) - k6 HTMLレポートを生成するツール。
- [har-to-k6](https://github.com/grafana/har-to-k6) - HAR記録をk6テストスクリプトへ変換するツール。
- [postman-to-k6](https://github.com/grafana/postman-to-k6) - Postmanコレクションをk6テストスクリプトへ変換するツール。
- [k6 generator](https://github.com/OpenAPITools/openapi-generator) - Swagger/OpenAPI仕様をk6テストスクリプトへ変換するツール。
- [jmeter-to-k6](https://github.com/grafana/jmeter-to-k6) - JMeterテストケースをk6テストスクリプトへ変換するツール。
- [jslib.k6.io](https://jslib.k6.io/) - k6スクリプト向けの有用なユーティリティライブラリ。
- [k6 for visual studio code](https://marketplace.visualstudio.com/items?itemName=k6.k6&ssr=false#overview) - IDEから直接k6を実行するためのMarketplace拡張。
- [k6 for IntelliJ](https://plugins.jetbrains.com/plugin/16141-k6) - IntelliJベースのIDEからローカルまたは[k6 Cloud](https://app.k6.io/)でk6テストを実行・デバッグするIntelliJベースプラグイン。\[原文表記どおり\]。
- [k6 Testkube executor](https://kubeshop.github.io/testkube/executor-k6/)
- [k6-junit](https://github.com/simbadltd/k6-junit) - k6 JUnitサマリーエクスポーターライブラリ。
- [k6-expect](https://github.com/simbadltd/k6-expect) - expectation向けjest風構文を提供し、関数型の方法でテスト記述を簡潔にするk6ライブラリ。

## CI/CD

- [k6 for Azure Pipelines](https://k6.io/blog/integrating-load-testing-with-azure-pipelines/)
- [k6 for Bamboo](https://k6.io/blog/integrating-k6-with-bamboo/)
- [k6 for Buddy](https://k6.io/blog/integrating-k6-with-buddy-devops/)
- [k6 for CircleCI](https://grafana.com/blog/2022/03/06/load-testing-with-circleci/)
- [k6 for Flagger](https://grafana.com/blog/2022/04/28/deployment-time-testing-with-grafana-k6-and-flagger/)
- [k6 for GitHub Actions](https://k6.io/blog/load-testing-using-github-actions/)
- [k6 for GitLab](https://grafana.com/blog/2020/09/27/load-testing-with-gitlab/)
- [k6 for Google Cloud Build](https://k6.io/blog/integrating-k6-with-google-cloud-build/)
- [k6 for Jenkins](https://k6.io/blog/integrating-load-testing-with-jenkins/)
- [k6 for Keptn](https://k6.io/blog/performance-testing-in-keptn-using-k6/)
- [k6 for TeamCity](https://k6.io/blog/load-testing-using-teamcity-and-k6/)



## 拡張

- [k6 Extensions](https://grafana.com/docs/k6/latest/extensions/)
- [GitHub Topic: xk6](https://github.com/topics/xk6) - xk6ラベルが付いたk6拡張を探索する。
- [Extension Registry](https://grafana.com/docs/k6/latest/extensions/explanations/extensions-registry/) - k6拡張のキュレーション一覧。

### 公式

- [xk6-client-tracing](https://github.com/grafana/xk6-client-tracing) - 分散トレーシングバックエンドを負荷試験するクライアント。
- [xk6-disruptor](https://github.com/grafana/xk6-disruptor) - 障害を注入してテストする💣。
- [xk6-exec](https://github.com/grafana/xk6-exec) - 外部コマンドを実行する。
- [xk6-kubernetes](https://github.com/grafana/xk6-kubernetes) - Kubernetesクラスタと対話する。
- [xk6-loki](https://github.com/grafana/xk6-loki) - Lokiを負荷試験するクライアント。
- [xk6-notification](https://github.com/grafana/xk6-notification) - 通知を作成する。
- [xk6-output-influxdb](https://github.com/grafana/xk6-output-influxdb) - 結果をInfluxDB v2へエクスポートする。
- [xk6-output-kafka](https://github.com/grafana/xk6-output-kafka) - k6結果をリアルタイムにKafkaへエクスポートする。
- [xk6-output-timescaledb](https://github.com/grafana/xk6-output-timescaledb) - k6結果をTimescaleDBへエクスポートする。
- [xk6-client-prometheus-remote](https://github.com/grafana/xk6-client-prometheus-remote) - Prometheus Remote Writeの性能をテストする。
- [xk6-sql](https://github.com/grafana/xk6-sql) - SQLサーバー（現時点ではPostgreSQL、MySQL、SQLite3）を負荷試験する。
- [xk6-ssh](https://github.com/grafana/xk6-ssh) - SSH。

### コミュニティ

- [xk6-cable](https://github.com/anycable/xk6-cable) - Action CableとAnyCableの機能をテストする。
- [xk6-coap](https://github.com/golioth/xk6-coap) - Constrained Application Protocolエンドポイントと対話する。
- [xk6-dotenv](https://github.com/szkiba/xk6-dotenv) - .envファイルから環境変数を読み込む。
- [xk6-ethereum](https://github.com/distribworks/xk6-ethereum) - ethereumプロトコル向けK6拡張。
- [xk6-faker](https://github.com/szkiba/xk6-faker) - ランダムなダミーデータを生成する。
- [xk6-file](https://github.com/avitalique/xk6-file) - ファイルを書き込む。
- [xk6-g0](https://github.com/szkiba/xk6-g0) - golangでk6テストを書く。
- [xk6-kafka](https://github.com/mostafa/xk6-kafka) - Apache Kafkaを負荷試験する。Avroメッセージにも対応。
- [xk6-kv](https://github.com/oleiade/xk6-kv) - VU間でキー・バリューデータを共有する。
- [xk6-mock](https://github.com/szkiba/xk6-mock) - HTTP(S)サーバーをモックする。
- [xk6-mqtt](https://github.com/pmalhaire/xk6-mqtt) - MQTT拡張。
- [xk6-nats](https://github.com/ydarias/xk6-nats) - k6テストにNATSサポートを提供する。
- [xk6-opentelemetry](https://github.com/thmshmm/xk6-opentelemetry) - テストスクリプト内からOpenTelemetryシグナルを生成する。
- [xk6-output-elasticsearch](https://github.com/elastic/xk6-output-elasticsearch) - 結果をElasticsearch 8.xへエクスポートする。
- [xk6-output-prometheus-pushgateway](https://github.com/martymarron/xk6-output-prometheus-pushgateway) - 結果をPrometheus pushgatewayへエクスポートする。
- [xk6-output-statsd](https://github.com/LeonAdato/xk6-output-statsd) - テストメトリクスをStatsDサービスへリアルタイム出力できるようにする。
- [xk6-output-timestream](https://github.com/leonyork/xk6-output-timestream) - 結果をAWS Timestreamへエクスポートする。
- [xk6-playwright](https://github.com/nicholasvuono/xk6-playwright) - Playwrightを使うブラウザ自動化・エンドツーエンドWebテスト。
- [xk6-prometheus](https://github.com/szkiba/xk6-prometheus) - k6向けPrometheus HTTPエクスポーター。
- [xk6-prompt](https://github.com/Juandavi1/xk6-prompt) - UIを介した入力引数をサポートする。
- [xk6-sse](https://github.com/phymbert/xk6-sse) - Server-Sent Events（SSE）向けk6拡張。
- [xk6-tcp](https://github.com/NAlexandrov/xk6-tcp) - TCPポートへデータを送信する。
- [xk6-top](https://github.com/szkiba/xk6-top) - テスト実行中に現在のk6メトリクスサマリーをターミナルで更新する。

## 関連

- [How They Load Test](https://github.com/aliesbelik/how-they-load) - 世界中の企業がどのように負荷試験を実施しているかに関するリソースのコレクション。
- [Load Testing Toolkit](https://github.com/aliesbelik/load-testing-toolkit) - コードまたはサービスのデバッグ、ベンチマーク、負荷・ストレス試験向けオープンソースツールのコレクション。
- [awesome-http-benchmark](https://github.com/denji/awesome-http-benchmark) - HTTPベンチマークツール、テスト／デバッグ、restAPI（RESTful）のコレクション。

## 貢献


このリストの改善を手伝いたいですか？素晴らしいです。始める前に、[行動規範](https://github.com/grafana/awesome-k6/blob/74f6d67f46d2eb472370517e4d34e10cb1e7f4ba/code_of_conduct.md)と[貢献ガイドライン](https://github.com/grafana/awesome-k6/blob/74f6d67f46d2eb472370517e4d34e10cb1e7f4ba/contributing.md)を確認してください。
