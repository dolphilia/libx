---
title: "kolomied/awesome-cdk"
description: "kolomied/awesome-cdkの正規スナップショット"
licenseSource: "github-kolomied-awesome-cdk-readme-md"
---

# Awesome CDK [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [<img src="https://raw.githubusercontent.com/aws/aws-cdk/master/logo/default-128-dark.png" align="right" alt="CDK">](https://github.com/aws/aws-cdk)

> 優れた [AWS Cloud Development Kit](https://github.com/awslabs/aws-cdk) (AWS CDK) のオープンソースプロジェクト、ガイド、ブログ、その他のリソースをキュレーションしたリスト。

AWS Cloud Development Kit (AWS CDK) は、クラウドインフラストラクチャをコードで定義するオープンソースソフトウェア開発フレームワークです。

## 目次

* [Construct ライブラリ](#construct-libraries)
  * [API](#apis)
  * [データベース](#databases)
  * [静的ウェブサイト](#static-websites)
  * [セキュリティ](#security)
  * [運用](#ops)
  * [キュー](#queue)
  * [CI/CD](#cicd)
  * [監視](#monitoring)
  * [ワークフロー](#workflows)
  * [マルチアカウント設定](#multi-accounts-setup)
* [高レベルフレームワーク](#high-level-frameworks)
* [スキャフォールディング](#scaffolding)
* [言語サポート](#language-support)
* [ライブラリ公開](#library-publishing)
* [ツール](#tools)
* [トレーニング資料とサンプルコード](#training-materials-and-sample-code)
* [ブログ記事と講演](#blog-posts--talks)
* [関連プロジェクト](#related-projects)
* [ヒントとコツ](#tips--tricks)

## Construct ライブラリ

この節には、CDK アプリで使用できる Construct を提供する、さまざまなプログラミング言語のコードライブラリを掲載します。

### API

* [cdk-chalice](https://github.com/alexpulver/cdk-chalice) - AWS Chalice（AWS 向け Python サーバーレスマイクロフレームワーク）の AWS CDK Construct。
* [auto-cdk](https://github.com/wulfmann/auto-cdk) - ファイルシステムと API Gateway/Lambda の統合を自動生成します（ベータ）。
* [crow-api](https://github.com/thomasstep/crow-api) - ファイル構造に基づくルートを持つサーバーレス API を作成。

### データベース

* [aws-cdk-dynamodb-seeder](https://github.com/elegantdevelopment/aws-cdk-dynamodb-seeder) - DynamoDB 向けのシンプルな CDK seeder。
* [cdk-tweet-sentiment](https://www.npmjs.com/package/cdk-tweet-sentiment) - ツイートの感情を識別し、Amazon DynamoDB テーブルへ記録します。
* [cdk-dynamo-table-viewer](https://github.com/eladb/cdk-dynamo-table-viewer) - Amazon DynamoDB テーブルの内容を公開 HTML ページで公開します。
* [cdk-postgresql](https://github.com/botpress/cdk-postgresql) - PostgreSQL 向け AWS CDK Construct。
* [cdk-sqlserver-seeder](https://github.com/kolomied/cdk-sqlserver-seeder) - SQL Server データベースに対してカスタム SQL スクリプトを実行する CDK Construct。

### 静的ウェブサイト

* [cdk-static-website](https://github.com/cloudcomponents/cdk-components/blob/master/packages/cdk-static-website) - S3 で静的ウェブサイトを作成し、CloudFront (CDN) を設定して Route53 (DNS) 経由でカスタムドメインをマッピングする CDK コンポーネント。
* [ness](https://github.com/nessjs/ness) - 静的サイトを AWS アカウントへデプロイする CDK 駆動 CLI ツール。

### セキュリティ

* [cdk-passwordless](https://github.com/farminf/aws-cdk-passwordless) - userpool を使うパスワードレス認証のための Construct。
* [cdk-iam-generator](https://github.com/srihariph/cdk-iam-generator) - JSON 設定から IAM マネージドポリシー・IAM ロールを生成する Construct。
* [c3](https://github.com/SSHcom/c3) - プライバシー・セキュリティのベストプラクティスへの準拠を可能にします。
* [cdk-iam-floyd](https://github.com/udondan/iam-floyd) - fluent インターフェースを持つ IAM ポリシーステートメントジェネレーター。
* [k9-cdk](https://github.com/k9securityio/k9-cdk) - セキュアな S3 バケットポリシーを容易に生成する Construct。
* [cdk-cloudfront-authorization](https://github.com/cloudcomponents/cdk-constructs/tree/master/packages/cdk-cloudfront-authorization) - Lambda@Edge を使用する Cognito 認証付き CloudFront。
* [aws-firewall-factory](https://github.com/globaldatanet/aws-firewall-factory) - FMS 経由で一元管理しながら WAF をデプロイ、更新、段階展開します。
### 運用

* [cdk-instanceStopRule](https://github.com/tecracer/cdk-constructs/tree/master/packages/cdk-instanceStopRule) - 一日の終わりに停止する CloudWatch ルール付きインスタンスを作成する CDK コンポーネント。
* [cdk-time-bomb](https://github.com/jmb12686/cdk-time-bomb) - 設定時間後に AWS CDK Stack を消滅させる CDK Construct。

### キュー

* [cdk-tweet-queue](https://www.npmjs.com/package/cdk-tweet-queue) - Twitter 検索クエリのツイートで SQS キューを満たします。
* [cdk-ses-template-mailer](https://github.com/mkrn/cdk-ses-template-mailer) - AWS SES メールテンプレートを作成する Construct と、AWS SES でテンプレートメールを送るマイクロサービス。
* [cdk-sqs-monitored](https://github.com/kamilbiela/cdk-sqs-monitored) - デッドレターキューと設定済みアラームを備えた SQS Construct。

### CI/CD

* [aws-delivlib](https://github.com/awslabs/aws-delivlib) - 多言語ソフトウェアデリバリーのための CI/CD パイプラインを合成します（CDK 自体でも使用）。
* [cdk-blue-green-container-deployment](https://github.com/cloudcomponents/cdk-constructs/tree/master/packages/cdk-blue-green-container-deployment) - CodeDeploy を使用した Blue/Green コンテナデプロイ。

### 監視

* [cdk-watchful](https://github.com/eladb/cdk-watchful) - CDK アプリ向けの自動ダッシュボード・アラーム。
* [aws-cdk-billing-alarm](https://github.com/alvyn279/aws-cdk-billing-alarm) - AWS 請求額が指定額を超えた際のメールアラートを設定する Construct。
* [cdk-monitoring-constructs](https://github.com/cdklabs/cdk-monitoring-constructs) - 高レベル API を使って AWS アプリの監視を作成し、ダッシュボードを自動生成します。

### ワークフロー

* [cdk-pull-request-check](https://github.com/cloudcomponents/cdk-components/blob/master/packages/cdk-pull-request-check) - プルリクエストを自動確認する CDK コンポーネント。
* [cdk-github-webhook](https://github.com/cloudcomponents/cdk-components/blob/master/packages/cdk-github-webhook) - GitHub webhook をプロビジョニングする CDK コンポーネント。
* [cdk-codepipeline-slack](https://github.com/cloudcomponents/cdk-components/blob/master/packages/cdk-codepipeline-slack) - #slack 承認ワークフローをプロビジョニングする CDK コンポーネント。
* [cdk-codecommit-backup](https://github.com/cloudcomponents/cdk-components/tree/master/packages/cdk-codecommit-backup) - CodeCommit リポジトリを S3 へバックアップ。
* [Alexa Deployment Pipeline](https://github.com/taimos/cdk-constructs/tree/master/lib/alexa) - AWS SAM と DeployToAlexa アクションを用い、Alexa Skills を Lambda と Developer Console へデプロイする CodePipeline を作成する Construct。
* [cdk-developer-tools-notifications](https://github.com/cloudcomponents/cdk-constructs/tree/master/packages/cdk-developer-tools-notifications) - 開発者ツール CodeCommit、CodeBuild、CodeDeploy、CodePipeline 向け Slack / Microsoft Teams / メール通知。
* [aws-pdf-textract-pipeline](https://github.com/aeksco/aws-pdf-textract-pipeline) - Puppeteer でウェブから PDF をクロールし、AWS Textract で内容を構造化データへ変換して DynamoDB に保存する ETL パイプライン。

### マルチアカウント設定
* [aws-bootstrap-kit](https://github.com/awslabs/aws-bootstrap-kit) - AWS Organization、AWS SSO、DNS、AWS CodePipeline を備えるマルチアカウント設定を作成します。
* [cdk-organizations](https://github.com/pepperize/cdk-organizations) - AWS Organization、組織単位 (OU)、アカウント、ポリシーのプロビジョニングを支援する CDK Construct。

## 高レベルフレームワーク

* [punchcard](https://github.com/punchcard/punchcard) - CDK のインフラ・ランタイムコードを統合する TypeScript フレームワーク。1 つの Node.js アプリケーションの文脈で Construct を宣言し、ランタイムロジックを実装できます。
* [aws-cdk-pure](https://github.com/fogfish/aws-cdk-pure) - AWS CDK で純粋関数型・高階のクラウドコンポーネントを開発するツールキット。
* [cdk-stepfunctions-patterns](https://github.com/kolomied/cdk-stepfunctions-patterns) - Step Functions の高レベルな回復性パターン群。
* [Orkestra](https://github.com/knowsuchagency/orkestra) - AWS CDK・Step Functions 上に構築された、イベント駆動型 Airflow 代替。
* [SST](https://github.com/serverless-stack/serverless-stack) - CDK でサーバーレスアプリケーションを構築するオープンソースフレームワーク。再デプロイせずに Lambda 関数をローカルでテスト・デバッグできる Live Lambda Development 環境を備えます。
* [Datajob](https://github.com/vincentclaes/datajob) - サーバーレスデータパイプラインまたは機械学習パイプラインを AWS 上に手間なく構築・デプロイします。 

## スキャフォールディング

* [ReactJS + Cognito + CDK Starter](https://github.com/vbudilov/reactjs-cognito-starter) - AWS CDK をサポートする ReactJS + Amazon Cognito + Amazon Amplify Framework のスタータープロジェクト。
* [cra-template-aws-cdk](https://github.com/luisfarzati/rnbw-aws-cdk/tree/master/packages/cra-template-aws-cdk) - サーバーレス React アプリをすぐに簡単にプロビジョニングする AWS CDK 使用の Create React App テンプレート。
* [create-cdk-app](https://github.com/cdk-tools/create-cdk-app) - テンプレートから CDK アプリを作成。
* [awscdk-jsii-template](https://github.com/pahud/awscdk-jsii-template) - AWS CDK 向け [JSII](https://github.com/kolomied/awesome-cdk/blob/59c51d04074d7cd76019cadca01e05a306852879/(https:/github.com/aws/jsii)) Construct ライブラリを構築、テスト、公開する準備済み環境を生成する GitHub テンプレートリポジトリ。

## 言語サポート

* [AWS-CDK-Kotlin-DSL](https://github.com/justincase-jp/AWS-CDK-Kotlin-DSL) - [AWS CDK Java](https://mvnrepository.com/artifact/software.amazon.awscdk) のラッパーライブラリ。CI が毎日コードを自動生成・デプロイします。
* [aws-cdk-maven-plugin](https://github.com/LinguaRobot/aws-cdk-maven-plugin) - Java・Maven を使って AWS CDK アプリケーションを定義・デプロイするプラグイン。
* [aws-lambda-nodejs-webpack](https://github.com/vvo/aws-lambda-nodejs-webpack) - [webpack](https://webpack.js.org/) を使用する代替 Node.js Lambda CDK Construct。
* [aws-lambda-nodejs-esbuild](https://github.com/floydspace/aws-lambda-nodejs-esbuild) - [esbuild](https://github.com/evanw/esbuild) を使用する代替 Node.js Lambda CDK Construct。

## ライブラリ公開

* [GitHub Action](https://github.com/marketplace/actions/aws-cdk-action) - AWS CDK 向け GitHub Action。
* [jsii-publish](https://github.com/udondan/jsii-publish) - [Docker イメージ](https://hub.docker.com/r/udondan/jsii-publish)と[GitHub Action](https://github.com/marketplace/actions/jsii-publish)を使い、[JSII](https://github.com/aws/jsii) 経由で作成した CDK Construct を構築・公開します。

## ツール

* [CDK-Dia](https://github.com/pistazie/cdk-dia) - AWS CDK 向け自動インフラストラクチャ図。

## トレーニング資料とサンプルコード

* [Official CDK Examples](https://github.com/aws-samples/aws-cdk-examples) - AWS CDK 向けサンプルプロジェクト集。
* [CDK Serverless Workshop](https://cdkworkshop.com/) - CDK アプリケーションの作成・デプロイ過程を案内するワークショップ。
* [egghead.io の AWS Cloud Development Kit でアプリを構築するコース](https://egghead.io/courses/build-an-app-with-the-aws-cloud-development-kit?af=6p5abz)
* [AWS CDK による Infrastructure as Code](https://youtu.be/Lh-kVC2r2AU) - re:Invent 2018 セッションの録画。
* [GitHub Changelog Crawler](https://github.com/aws-samples/aws-cdk-changelogs-demo) - Fargate、API Gateway、Lambda、CloudFront、S3、ElastiCache、DynamoDB を使う、Nathan Peck 作の本格的な CDK アプリ。
* [CI/CD を備えた ECS](https://github.com/rix0rrr/cdk-ecs-demo) - CDK を使った ECS アプリケーションデプロイのデモ。
* [AWS CDK 向けサンプルテンプレート](https://github.com/tecracer/cdk-templates) - 複数の AWS プロジェクトからの動作する TypeScript スニペット。
* [Lambda パッケージングアセット](https://gitlab.com/josef.stach/aws-cdk-lambda-asset) - Lambda 関数をビルドし、依存関係を含む ZIP ファイルを生成する CDK アセット。
* [Open CDK Guide](https://github.com/kevinslin/open-cdk) - CDK とベストプラクティスに関するオープンソースガイド。
* [Colorteller Example](https://github.com/denmat/colorteller-aws-cdk) - Fargate・Appmesh を使用する優れたサンプルプロジェクト。
* [CDK Patterns](https://github.com/cdk-patterns/serverless) - CDK で構築されたサーバーレスアーキテクチャパターンのオープンソースコレクション。
* [CodePipeline・CodeBuild を使った CI/CD パイプラインの作成](https://sbstjn.com/deploy-react-cra-with-cdk-codepipeline-and-codebuild.html) - GitHub の [cra-pipeline](https://github.com/sbstjn/cra-pipeline) プロジェクトは、静的 React アプリケーションをデプロイする AWS CodeBuild 付き AWS CodePipeline を示します。
* [AWS Lambda 上のサーバーサイドレンダリング対応 React SPA](https://sbstjn.com/serverless-create-react-app-server-side-rendering-ssr-lamda.html) - [cra-serverless](https://github.com/sbstjn/cra-serverless) プロジェクトは、[create-react-app](https://create-react-app.dev) で作成した React ウェブサイトへ事前レンダリングを追加するサーバーレスアーキテクチャです。
* [ミニチュートリアル: AWS Cloud Development Kit で AWS Lambda + ACM + API Gateway を設定](https://github.com/shaftoe/api-gateway-lambda-cdk-example) - HTML フォーム（例: /contact_us.html）の POST リクエストを受け、そのデータを Pushover 通知サービスへ渡す機能的な公開 API をデプロイします。
* [CDK で構築した REST API の例](https://github.com/shaftoe/api-l3x-in) - https://api.l3x.in/ の REST API を動かすソースコード。
* [dilbert-feed](https://github.com/mlafeldt/dilbert-feed) - RSS フィードリーダーで広告なしに Dilbert を楽しめる、Go 製サーバーレスアプリケーション。
* [django-postgres-vue-gitlab-ecs](https://gitlab.com/verbose-equals-true/django-postgres-vue-gitlab-ecs) - GitLab CI を使い CDK でデプロイする Django + Vue.js ウェブアプリの例。
* [nextjs-vercel-aws-cdk-example](https://github.com/vvo/nextjs-vercel-aws-cdk-example) - PostgreSQL (RDS)、EventBridge (cron)、SNS（バックグラウンドジョブ）と Next.js アプリケーションを組み合わせた例。
* [projen・jsii を使う CDK Construct の作成と公開](https://github.com/seeebiii/projen-test) - [projen](https://github.com/projen/projen)と`jsii`で新しい CDK Construct を作り、npm、Maven Central、PyPi、NuGet へ公開するためのサンプルコード付きステップバイステップガイド。

## ブログ記事と講演

* [CDK の方法と理由の紹介](https://www.slideshare.net/ranguard/aws-cdk-introduction-191140240) - Leo Lapworth による。
* [CDK Construct ライブラリの構築方法](https://garbe.io/blog/2019/03/26/construct-your-own-cdk-construct-library/) - Philipp Garbe による。
* [CDK のすべて: 旋風のようなツアー](https://kevinslin.com/aws/cdk_all_the_things/) - Kevin S Lin による。
* [AWS CDK Developer Preview の発表](https://aws.amazon.com/blogs/developer/aws-cdk-developer-preview/) - 2018 年 8 月 27 日に発表された最初の AWS CDK Developer Preview。
* [AWS Cloud Development Kit への貢献](https://aws.amazon.com/blogs/developer/contributing-to-the-aws-cloud-development-kit/) - Intuit の Mike Cowgill による。
* [AWS Cloud Development Kit の第一印象](https://garbe.io/blog/2018/08/17/first-look-into-cdk/) - Philipp Garbe による。
* [CDK で AWS インフラストラクチャを強化する](https://www.slideshare.net/philippgarbe/boost-your-aws-infrastructure-with-cdk) - Philipp Garbe による SlideShare。
* [Amazon ECS 向け AWS CDK 入門](https://aws.amazon.com/blogs/compute/getting-started-with-the-aws-cloud-development-kit-for-amazon-ecs/) - Nathan Peck による。
* [AWS re:Invent 2018、ベスト・オブ・ショー: CDK](https://medium.com/allermedia-techblog/aws-re-invent-2018-best-of-show-cloud-development-kit-cdk-ad1755561ade) - Aller Media Tech Blog。
* [ライブデモによる AWS Cloud Development Kit の紹介](https://youtu.be/IIiIoMGTJec) - 2019 年 1 月 AWS User Group Finland Meetup。
* [AWS CDK — 未来を垣間見る](https://medium.com/nordcloud-engineering/aws-cdk-a-glimpse-into-the-future-90db660f8a89) - Nordcloud Engineering による。
* [CDK による AWS Infrastructure as Code](https://medium.com/avmconsulting-blog/aws-infrastructure-as-code-with-cdk-1d6fa013ce7d) - Ross Rhodes による。
* [AWS Step Functions を使うコールバック](https://medium.com/swlh/callbacks-with-aws-step-functions-a3dde1bc7203) - Ross Rhodes による。
* [CodePipelines 設定に CDK を使う](https://www.stefreitag.de/wp/2019/03/07/using-aws-cdk-for-code-pipeline-setup/) - Stefan Freitag による。
* [AWS MSK 設定に CDK を使う](https://www.stefreitag.de/wp/2019/08/31/paths-are-made-by-walking-or-how-aws-cdk-and-msk-work-together/) - Stefan Freitag による。
* [Serverless Dotnet - E01: AWS CDK 入門](https://youtu.be/c9UXHPX6-Ns) - Jake Scott による。
* [GitHub リポジトリ](https://github.com/jakejscott/aws-cdk-phone-verify-api) - Jake Scott による。
* [AWS CDK による Infrastructure as Code](https://youtu.be/ZWCvNFUN-sU) - AWS Tech Talk ウェビナー。
* [tecRacer Amazon AWS Blog](https://aws-blog.de/tags/cdk.html) - Gernot Glawe による aws-blog.de の複数ブログ記事。
* [CDK で UDP NLB ログサービスを構築する](https://youtu.be/dXTEVp0ATzo) - ClouderDex による。
* [GitHub リポジトリ](https://github.com/ClouderDex/CDK-UDP-NLB-Demo) - ClouderDex による。
* [AWS CDK による純粋関数型クラウドコンポーネント](https://i.am.fog.fish/2019/08/23/purely-functional-cloud-with-aws-cdk.html) - fogfish による。
* [CDK を使った複数アカウントの調査 (sfn/lambda/sqs/sechub)](https://fudless.xyz/aws/seedecay/) - [fudless.xyz](https://fudless.xyz) のブログ記事。
* [AWS CDK を使うスケジュール Lambda 関数・CI/CD パイプライン](https://medium.com/hatchsoftware/using-the-aws-cdk-to-build-scheduled-lambda-functions-13eb1674586e) - Maarten Thoelen による。
* [GitHub リポジトリ](https://github.com/HatchSoftware/automatic-aws-db-shutdown-cdk) - Maarten Thoelen による。
* [相互 TLS を使用する AWS Client VPN](https://lanwen.ru/posts/aws-client-vpn/) - Kirill Merkushev による。
* [CDK Step Functions](https://dev.to/elthrasher/exploring-aws-cdk-step-functions-1d1e) - Matt Morgan による。
* [Custom Resources による DynamoDB のロード](https://dev.to/elthrasher/exploring-aws-cdk-loading-dynamodb-with-custom-resources-jlf) - Matt Morgan による。
* [Provider Framework による DynamoDB のロード](https://dev.to/elthrasher/exploring-aws-cdk-a-million-a-minute-dynamodb-and-providerframework-e92) - Matt Morgan による。
* [ドイツ語: AWS Lambda・CloudFront を使う React SPA とサーバーサイドレンダリング (SSR)](https://superluminar.io/2020/02/07/react-spa-und-server-side-rendering-ssr-mit-aws-lambda-cloudfront-und-dem-cdk/) - superluminar GmbH による。
* [実践的な Lambda・API Gateway 例による AWS CDK の紹介](https://a.l3x.in/2020/02/04/migrating-from-terraform-to-cdk.html) - Alexander Fortin による。
* [AWS CDK を使う CloudWatch Dashboards as Code（正しい方法）](https://medium.com/poka-techblog/cloudwatch-dashboards-as-code-the-right-way-using-aws-cdk-1453309c5481) - Simon-Pierre Gingras による。
* [Jamstack の不足部分をコーディングする: データベース、cron、バックグラウンドジョブ](https://dev.to/vvo/coding-the-jamstack-missing-parts-databases-crons-background-jobs-1bpj) - Vincent Voyer による。
* [Travis CI を使用する AWS CDK の継続的インテグレーション・デリバリー](https://medium.com/better-programming/aws-cdk-continuous-integration-and-delivery-using-travis-ci-ee5dd7549434) - Thomas Poignant による。
* [AWS CDK のカスタムリソース](https://medium.com/cyberark-engineering/custom-resources-with-aws-cdk-d9a8fad6b673?source=friends_link&sk=549fcf9d998bbea304bdd8d834aca9e6) - Roy Ben-Yosef による。
* [Python アプリケーション向け推奨 AWS CDK プロジェクト構造](https://aws.amazon.com/blogs/developer/recommended-aws-cdk-project-structure-for-python-applications/) - Alex Pulver による。

## 関連プロジェクト

* [jsii](https://github.com/awslabs/jsii) - JavaScript 相互運用インターフェース。CDK が言語バインディングの作成に使う技術です（現在 .NET、Java、Python をサポート）。
* [cdk8s](https://github.com/awslabs/cdk8s/) - オブジェクト指向プログラミングを使い、Kubernetes ネイティブアプリ・抽象化を定義。
* [cdktf](https://github.com/hashicorp/terraform-cdk) - プログラミング Construct でインフラリソースを定義し、HashiCorp Terraform でプロビジョニング。
* [cdktg](https://github.com/hupe1980/cdk-threagile) - コードとしてのアジャイル脅威モデリング。

## ヒントとコツ

* [CDK 型システムを振り返る](https://gist.github.com/eladb/68a009cf9c953b04a637bac5c40afdbc) - CDK の型システムを探索。
* [Construct ライブラリの CodeBuild 設定をローカルでテストする](https://github.com/aws/aws-codebuild-docker-images/tree/master/local_builds) - `jsii/superchain:latest` Docker イメージを使用。

## 貢献方法

貢献を歓迎します。まず[貢献ガイドライン](https://github.com/kolomied/awesome-cdk/blob/59c51d04074d7cd76019cadca01e05a306852879/contributing.md)をお読みください。
