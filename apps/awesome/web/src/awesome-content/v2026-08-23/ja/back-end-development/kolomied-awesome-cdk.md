---
title: "Awesome CDK"
description: "コードでクラウド基盤を定義するAWS CDKのコンストラクトライブラリ、フレームワーク、ツール、学習資料。"
licenseSource: "github-kolomied-awesome-cdk-readme-md"
---

# Awesome CDK

[AWS Cloud Development Kit](https://github.com/awslabs/aws-cdk)（AWS CDK）は、コードでクラウド基盤を定義するオープンソースのフレームワークです。このリストには、コンストラクトライブラリ、高レベルフレームワーク、プロジェクトの雛形、言語サポート、ライブラリ公開用ツール、学習資料を収録しています。サンプルアプリケーション、ブログ記事、講演も探せます。

## コンストラクトライブラリ <a id="construct-libraries"></a><a id="construct-ライブラリ"></a>

さまざまなプログラミング言語で、CDKアプリケーション向けのコンストラクトを提供するライブラリです。

### API <a id="apis"></a>

* [cdk-chalice](https://github.com/alexpulver/cdk-chalice) - AWS Chalice（AWS 向け Python サーバーレスマイクロフレームワーク）の AWS CDK コンストラクト
* [auto-cdk](https://github.com/wulfmann/auto-cdk) - ファイルシステムに基づくAPI Gateway/Lambdaの統合を自動生成（ベータ版）
* [crow-api](https://github.com/thomasstep/crow-api) - ファイル構造に基づくルートを持つサーバーレスAPIを作成

### データベース <a id="databases"></a>

* [aws-cdk-dynamodb-seeder](https://github.com/elegantdevelopment/aws-cdk-dynamodb-seeder) - DynamoDBにデータを投入するシンプルなCDKツール
* [cdk-tweet-sentiment](https://www.npmjs.com/package/cdk-tweet-sentiment) - ツイートの感情を分析し、Amazon DynamoDBテーブルに記録
* [cdk-dynamo-table-viewer](https://github.com/eladb/cdk-dynamo-table-viewer) - Amazon DynamoDBテーブルの内容を公開HTMLページで表示
* [cdk-postgresql](https://github.com/botpress/cdk-postgresql) - PostgreSQL 向け AWS CDK コンストラクト
* [cdk-sqlserver-seeder](https://github.com/kolomied/cdk-sqlserver-seeder) - SQL Server データベースに対してカスタム SQL スクリプトを実行する CDK コンストラクト

### 静的ウェブサイト <a id="static-websites"></a>

* [cdk-static-website](https://github.com/cloudcomponents/cdk-components/blob/master/packages/cdk-static-website) - S3 で静的ウェブサイトを作成し、CloudFront (CDN) を設定して Route53 (DNS) 経由でカスタムドメインをマッピングする CDK コンポーネント
* [ness](https://github.com/nessjs/ness) - 静的サイトを AWS アカウントへデプロイする CDK 駆動 CLI ツール

### セキュリティ <a id="security"></a>

* [cdk-passwordless](https://github.com/farminf/aws-cdk-passwordless) - ユーザープールを使うパスワードレス認証用のコンストラクト
* [cdk-iam-generator](https://github.com/srihariph/cdk-iam-generator) - JSON 設定から IAM マネージドポリシー・IAM ロールを生成するコンストラクト
* [c3](https://github.com/SSHcom/c3) - プライバシーとセキュリティのベストプラクティスの適用を支援
* [cdk-iam-floyd](https://github.com/udondan/iam-floyd) - メソッドを連結できるインターフェース（fluent interface）を備えたIAMポリシーステートメント生成ツール
* [k9-cdk](https://github.com/k9securityio/k9-cdk) - S3バケットポリシーを生成するコンストラクト
* [cdk-cloudfront-authorization](https://github.com/cloudcomponents/cdk-constructs/tree/master/packages/cdk-cloudfront-authorization) - Lambda@Edge を使用する Cognito 認証付き CloudFront
* [aws-firewall-factory](https://github.com/globaldatanet/aws-firewall-factory) - FMSで一元管理しながらWAFをデプロイ、更新、段階展開

### 運用 <a id="ops"></a>

* [cdk-instanceStopRule](https://github.com/tecracer/cdk-constructs/tree/master/packages/cdk-instanceStopRule) - 一日の終わりに停止する CloudWatch ルール付きインスタンスを作成する CDK コンポーネント
* [cdk-time-bomb](https://github.com/jmb12686/cdk-time-bomb) - 指定した時間が経過した後にAWS CDKスタックを削除するコンストラクト

### キュー <a id="queue"></a>

* [cdk-tweet-queue](https://www.npmjs.com/package/cdk-tweet-queue) - Twitterの検索クエリに一致するツイートをSQSキューに格納
* [cdk-ses-template-mailer](https://github.com/mkrn/cdk-ses-template-mailer) - AWS SES メールテンプレートを作成するコンストラクトと、AWS SES でテンプレートメールを送るマイクロサービス
* [cdk-sqs-monitored](https://github.com/kamilbiela/cdk-sqs-monitored) - デッドレターキューと設定済みアラームを備えた SQS コンストラクト

### CI/CD

* [aws-delivlib](https://github.com/awslabs/aws-delivlib) - 多言語のソフトウェア配信用CI/CDパイプラインを生成（CDK自体でも使用）
* [cdk-blue-green-container-deployment](https://github.com/cloudcomponents/cdk-constructs/tree/master/packages/cdk-blue-green-container-deployment) - CodeDeploy を使用した Blue/Green コンテナデプロイ

### 監視 <a id="monitoring"></a>

* [cdk-watchful](https://github.com/eladb/cdk-watchful) - CDK アプリ向けの自動ダッシュボード・アラーム
* [aws-cdk-billing-alarm](https://github.com/alvyn279/aws-cdk-billing-alarm) - AWS 請求額が指定額を超えた際のメールアラートを設定するコンストラクト
* [cdk-monitoring-constructs](https://github.com/cdklabs/cdk-monitoring-constructs) - AWSアプリケーションの監視を設定する高レベルAPIを提供し、ダッシュボードを自動生成

### ワークフロー <a id="workflows"></a>

* [cdk-pull-request-check](https://github.com/cloudcomponents/cdk-components/blob/master/packages/cdk-pull-request-check) - プルリクエストを自動確認する CDK コンポーネント
* [cdk-github-webhook](https://github.com/cloudcomponents/cdk-components/blob/master/packages/cdk-github-webhook) - GitHub webhook をプロビジョニングする CDK コンポーネント
* [cdk-codepipeline-slack](https://github.com/cloudcomponents/cdk-components/blob/master/packages/cdk-codepipeline-slack) - Slack承認ワークフローをプロビジョニングする CDK コンポーネント
* [cdk-codecommit-backup](https://github.com/cloudcomponents/cdk-components/tree/master/packages/cdk-codecommit-backup) - CodeCommit リポジトリを S3 へバックアップ
* [Alexa Deployment Pipeline](https://github.com/taimos/cdk-constructs/tree/master/lib/alexa) - AWS SAM と DeployToAlexa アクションを用い、Alexa Skills を Lambda と Developer Console へデプロイする CodePipeline を作成するコンストラクト
* [cdk-developer-tools-notifications](https://github.com/cloudcomponents/cdk-constructs/tree/master/packages/cdk-developer-tools-notifications) - 開発者ツール CodeCommit、CodeBuild、CodeDeploy、CodePipeline 向け Slack / Microsoft Teams / メール通知
* [aws-pdf-textract-pipeline](https://github.com/aeksco/aws-pdf-textract-pipeline) - Puppeteer でウェブから PDF をクロールし、AWS Textract で内容を構造化データへ変換して DynamoDB に保存する ETL パイプライン

### マルチアカウント設定 <a id="multi-accounts-setup"></a>

* [aws-bootstrap-kit](https://github.com/awslabs/aws-bootstrap-kit) - AWS Organization、AWS SSO、DNS、AWS CodePipelineを備えるマルチアカウント構成を作成
* [cdk-organizations](https://github.com/pepperize/cdk-organizations) - AWS Organization、組織単位 (OU)、アカウント、ポリシーのプロビジョニングを支援する CDK コンストラクト

## 高レベルフレームワーク <a id="high-level-frameworks"></a>

* [punchcard](https://github.com/punchcard/punchcard) - CDK のインフラ・ランタイムコードを統合する TypeScript フレームワーク。1 つの Node.js アプリケーションの文脈でコンストラクトを宣言し、ランタイムロジックを実装できる
* [aws-cdk-pure](https://github.com/fogfish/aws-cdk-pure) - AWS CDK で純粋関数型・高階のクラウドコンポーネントを開発するツールキット
* [cdk-stepfunctions-patterns](https://github.com/kolomied/cdk-stepfunctions-patterns) - Step Functions の高レベルな回復性パターン群
* [Orkestra](https://github.com/knowsuchagency/orkestra) - AWS CDK・Step Functions 上に構築された、イベント駆動型 Airflow 代替
* [SST](https://github.com/serverless-stack/serverless-stack) - 元の一覧では、CDKでサーバーレスアプリケーションを構築するオープンソースフレームワークと紹介されている。Lambda関数を再デプロイせずにローカルでテスト・デバッグできるLive Lambda Development環境も紹介
* [Datajob](https://github.com/vincentclaes/datajob) - AWSでサーバーレスのデータパイプラインや機械学習パイプラインを構築・デプロイ

## スキャフォールディング <a id="scaffolding"></a>

* [ReactJS + Cognito + CDK Starter](https://github.com/vbudilov/reactjs-cognito-starter) - AWS CDK をサポートする ReactJS + Amazon Cognito + Amazon Amplify Framework のスタータープロジェクト
* [cra-template-aws-cdk](https://github.com/luisfarzati/rnbw-aws-cdk/tree/master/packages/cra-template-aws-cdk) - AWS CDKでサーバーレスReactアプリケーションをプロビジョニングするCreate React Appテンプレート
* [create-cdk-app](https://github.com/cdk-tools/create-cdk-app) - テンプレートから CDK アプリを作成
* [awscdk-jsii-template](https://github.com/pahud/awscdk-jsii-template) - AWS CDK向けの[JSII](https://github.com/aws/jsii)コンストラクトライブラリをビルド、テスト、公開する環境を提供するGitHubテンプレートリポジトリ

## 言語サポート <a id="language-support"></a>

* [AWS-CDK-Kotlin-DSL](https://github.com/justincase-jp/AWS-CDK-Kotlin-DSL) - [AWS CDK Java](https://mvnrepository.com/artifact/software.amazon.awscdk) のラッパーライブラリ。CIが毎日コードを自動生成・デプロイ
* [aws-cdk-maven-plugin](https://github.com/LinguaRobot/aws-cdk-maven-plugin) - Java・Maven を使って AWS CDK アプリケーションを定義・デプロイするプラグイン
* [aws-lambda-nodejs-webpack](https://github.com/vvo/aws-lambda-nodejs-webpack) - [webpack](https://webpack.js.org/) を使用する代替 Node.js Lambda CDK コンストラクト
* [aws-lambda-nodejs-esbuild](https://github.com/floydspace/aws-lambda-nodejs-esbuild) - [esbuild](https://github.com/evanw/esbuild) を使用する代替 Node.js Lambda CDK コンストラクト

## ライブラリ公開 <a id="library-publishing"></a>

* [GitHub Action](https://github.com/marketplace/actions/aws-cdk-action) - AWS CDK 向け GitHub Action
* [jsii-publish](https://github.com/udondan/jsii-publish) - [Dockerイメージ](https://hub.docker.com/r/udondan/jsii-publish)と[GitHub Action](https://github.com/marketplace/actions/jsii-publish)を提供し、[JSII](https://github.com/aws/jsii)で作成したCDKコンストラクトをビルド・公開

## ツール <a id="tools"></a>

* [CDK-Dia](https://github.com/pistazie/cdk-dia) - AWS CDKのインフラ構成図を自動生成

## トレーニング資料とサンプルコード <a id="training-materials-and-sample-code"></a>

* [Official CDK Examples](https://github.com/aws-samples/aws-cdk-examples) - AWS CDK 向けサンプルプロジェクト集
* [CDK Serverless Workshop](https://cdkworkshop.com/) - CDK アプリケーションの作成・デプロイ過程を案内するワークショップ
* [Build an App with AWS Cloud Development Kit course on egghead.io](https://egghead.io/courses/build-an-app-with-the-aws-cloud-development-kit?af=6p5abz)
* [Infrastructure is Code with the AWS CDK](https://youtu.be/Lh-kVC2r2AU) - re:Invent 2018 セッションの録画
* [GitHub Changelog Crawler](https://github.com/aws-samples/aws-cdk-changelogs-demo) - Fargate、API Gateway、Lambda、CloudFront、S3、ElastiCache、DynamoDB を使う、Nathan Peck作のCDKアプリケーション
* [ECS with CI/CD](https://github.com/rix0rrr/cdk-ecs-demo) - CDK を使った ECS アプリケーションデプロイのデモ
* [Example templates for aws cdk](https://github.com/tecracer/cdk-templates) - 複数の AWS プロジェクトからの動作する TypeScript スニペット
* [Lambda packaging asset](https://gitlab.com/josef.stach/aws-cdk-lambda-asset) - Lambda 関数をビルドし、依存関係を含む ZIP ファイルを生成する CDK アセット
* [Open CDK Guide](https://github.com/kevinslin/open-cdk) - CDK とベストプラクティスに関するオープンソースガイド
* [Colorteller Example](https://github.com/denmat/colorteller-aws-cdk) - FargateとApp Meshを使用するサンプルプロジェクト
* [CDK Patterns](https://github.com/cdk-patterns/serverless) - CDK で構築されたサーバーレスアーキテクチャパターンのオープンソースコレクション
* [Create a CI/CD pipeline using CodePipeline and CodeBuild](https://sbstjn.com/deploy-react-cra-with-cdk-codepipeline-and-codebuild.html) - GitHub の [cra-pipeline](https://github.com/sbstjn/cra-pipeline) プロジェクトで示す、AWS CodeBuildとAWS CodePipelineを使った静的Reactアプリケーションのデプロイ
* [React SPA with server-side rendering on AWS Lambda](https://sbstjn.com/serverless-create-react-app-server-side-rendering-ssr-lamda.html) - [cra-serverless](https://github.com/sbstjn/cra-serverless) プロジェクトは、[create-react-app](https://create-react-app.dev) で作成した React ウェブサイトへ事前レンダリングを追加するサーバーレスアーキテクチャ
* [Mini Tutorial: Setup AWS Lambda + ACM + API Gateway with AWS Cloud Development Kit](https://github.com/shaftoe/api-gateway-lambda-cdk-example) - HTMLフォーム（例: /contact_us.html）のPOSTリクエストを受け、データをPushover通知サービスに送る公開APIをデプロイ
* [Example of REST API built with CDK](https://github.com/shaftoe/api-l3x-in) - https://api.l3x.in/ の REST API を動かすソースコード
* [dilbert-feed](https://github.com/mlafeldt/dilbert-feed) - RSS フィードリーダーで広告なしに Dilbert を楽しめる、Go 製サーバーレスアプリケーション
* [django-postgres-vue-gitlab-ecs](https://gitlab.com/verbose-equals-true/django-postgres-vue-gitlab-ecs) - GitLab CI を使い CDK でデプロイする Django + Vue.js ウェブアプリの例
* [nextjs-vercel-aws-cdk-example](https://github.com/vvo/nextjs-vercel-aws-cdk-example) - PostgreSQL (RDS)、EventBridge (cron)、SNS（バックグラウンドジョブ）と Next.js アプリケーションを組み合わせた例
* [Create and Publish CDK Constructs Using projen and jsii](https://github.com/seeebiii/projen-test) - [projen](https://github.com/projen/projen)と`jsii`で新しい CDKコンストラクトを作り、npm、Maven Central、PyPi、NuGet へ公開するためのサンプルコード付きステップバイステップガイド

## ブログ記事と講演 <a id="blog-posts--talks"></a>

* [Introduction to how and why CDK](https://www.slideshare.net/ranguard/aws-cdk-introduction-191140240) - Leo Lapworth による資料
* [How to Build a CDK Construct Library](https://garbe.io/blog/2019/03/26/construct-your-own-cdk-construct-library/) - Philipp Garbe による資料
* [CDK All The Things: A Whirlwind Tour](https://kevinslin.com/aws/cdk_all_the_things/) - Kevin S Lin による資料
* [AWS CDK Developer Preview Announcement](https://aws.amazon.com/blogs/developer/aws-cdk-developer-preview/) - 最初のAWS CDK Developer Previewの発表。元の一覧での日付は2018年8月27日
* [Contributing to the AWS Cloud Development Kit](https://aws.amazon.com/blogs/developer/contributing-to-the-aws-cloud-development-kit/) - Intuit の Mike Cowgill による資料
* [First look into AWS Cloud Development Kit](https://garbe.io/blog/2018/08/17/first-look-into-cdk/) - Philipp Garbe による資料
* [Boost your AWS Infrastructure with the CDK](https://www.slideshare.net/philippgarbe/boost-your-aws-infrastructure-with-cdk) - Philipp Garbe による SlideShare
* [Getting started with AWS CDK for Amazon ECS](https://aws.amazon.com/blogs/compute/getting-started-with-the-aws-cloud-development-kit-for-amazon-ecs/) - Nathan Peck による資料
* [AWS re:Invent 2018, best of show: CDK](https://medium.com/allermedia-techblog/aws-re-invent-2018-best-of-show-cloud-development-kit-cdk-ad1755561ade) - Aller Media Tech Blog
* [AWS Cloud Development Kit introduction with Live Demos](https://youtu.be/IIiIoMGTJec) - 2019 年 1 月 AWS User Group Finland Meetup
* [AWS CDK — a glimpse into the future](https://medium.com/nordcloud-engineering/aws-cdk-a-glimpse-into-the-future-90db660f8a89) - Nordcloud Engineering による資料
* [AWS Infrastructure as Code with CDK](https://medium.com/avmconsulting-blog/aws-infrastructure-as-code-with-cdk-1d6fa013ce7d) - Ross Rhodes による資料
* [Callbacks with AWS Step Functions](https://medium.com/swlh/callbacks-with-aws-step-functions-a3dde1bc7203) - Ross Rhodes による資料
* [Using the CDK for CodePipelines Setup](https://www.stefreitag.de/wp/2019/03/07/using-aws-cdk-for-code-pipeline-setup/) - Stefan Freitag による資料
* [Using the CDK for AWS MSK Setup](https://www.stefreitag.de/wp/2019/08/31/paths-are-made-by-walking-or-how-aws-cdk-and-msk-work-together/) - Stefan Freitag による資料
* [Serverless Dotnet - E01: Intro to AWS CDK](https://youtu.be/c9UXHPX6-Ns) - Jake Scott による資料
* [GitHubリポジトリ](https://github.com/jakejscott/aws-cdk-phone-verify-api) - Jake Scott による資料
* [Infrastructure is Code with the AWS CDK](https://youtu.be/ZWCvNFUN-sU) - AWS Tech Talk ウェビナー
* [tecRacer Amazon AWS Blog](https://aws-blog.de/tags/cdk.html) - Gernot Glawe による aws-blog.de の複数ブログ記事
* [Using CDK to build a UDP NLB Logging Service](https://youtu.be/dXTEVp0ATzo) - ClouderDex による資料
* [GitHubリポジトリ](https://github.com/ClouderDex/CDK-UDP-NLB-Demo) - ClouderDex による資料
* [Purely Functional Cloud Components with AWS CDK](https://i.am.fog.fish/2019/08/23/purely-functional-cloud-with-aws-cdk.html) - fogfish による資料
* [Using the CDK to probe multiple accounts (sfn/lambda/sqs/sechub)](https://fudless.xyz/aws/seedecay/) - [fudless.xyz](https://fudless.xyz) のブログ記事
* [Scheduled Lambda Functions and CI/CD pipeline with AWS CDK](https://medium.com/hatchsoftware/using-the-aws-cdk-to-build-scheduled-lambda-functions-13eb1674586e) - Maarten Thoelen による資料
* [GitHubリポジトリ](https://github.com/HatchSoftware/automatic-aws-db-shutdown-cdk) - Maarten Thoelen による資料
* [AWS Client VPN with mutual TLS](https://lanwen.ru/posts/aws-client-vpn/) - Kirill Merkushev による資料
* [CDK Step Functions](https://dev.to/elthrasher/exploring-aws-cdk-step-functions-1d1e) - Matt Morgan による資料
* [Loading DynamoDB with Custom Resources](https://dev.to/elthrasher/exploring-aws-cdk-loading-dynamodb-with-custom-resources-jlf) - Matt Morgan による資料
* [Loading DynamoDB with Provider Framework](https://dev.to/elthrasher/exploring-aws-cdk-a-million-a-minute-dynamodb-and-providerframework-e92) - Matt Morgan による資料
* [ドイツ語: React SPA und server-side rendering (SSR) mit AWS Lambda und CloudFront](https://superluminar.io/2020/02/07/react-spa-und-server-side-rendering-ssr-mit-aws-lambda-cloudfront-und-dem-cdk/) - superluminar GmbH による資料
* [Introducing AWS CDK with a real life Lambda and API gateway example](https://a.l3x.in/2020/02/04/migrating-from-terraform-to-cdk.html) - Alexander Fortin による資料
* [CloudWatch Dashboards as Code (the Right Way) Using AWS CDK](https://medium.com/poka-techblog/cloudwatch-dashboards-as-code-the-right-way-using-aws-cdk-1453309c5481) - Simon-Pierre Gingras による資料
* [Coding the Jamstack missing parts: databases, crons & background jobs](https://dev.to/vvo/coding-the-jamstack-missing-parts-databases-crons-background-jobs-1bpj) - Vincent Voyer による資料
* [AWS CDK Continuous Integration and Delivery Using Travis CI](https://medium.com/better-programming/aws-cdk-continuous-integration-and-delivery-using-travis-ci-ee5dd7549434) - Thomas Poignant による資料
* [Custom Resources with AWS CDK](https://medium.com/cyberark-engineering/custom-resources-with-aws-cdk-d9a8fad6b673?source=friends_link&sk=549fcf9d998bbea304bdd8d834aca9e6) - Roy Ben-Yosef による資料
* [Recommended AWS CDK project structure for Python applications](https://aws.amazon.com/blogs/developer/recommended-aws-cdk-project-structure-for-python-applications/) - Alex Pulver による資料

## 関連プロジェクト <a id="related-projects"></a>

* [jsii](https://github.com/awslabs/jsii) - CDKが言語バインディングの作成に使うJavaScript相互運用インターフェース。元の一覧では.NET、Java、Pythonへの対応を紹介
* [cdk8s](https://github.com/awslabs/cdk8s/) - オブジェクト指向プログラミングを使い、Kubernetes ネイティブアプリ・抽象化を定義
* [cdktf](https://github.com/hashicorp/terraform-cdk) - プログラミングコンストラクトでインフラリソースを定義し、HashiCorp Terraform でプロビジョニング
* [cdktg](https://github.com/hupe1980/cdk-threagile) - コードとしてのアジャイル脅威モデリング

## ヒントとコツ <a id="tips--tricks"></a>

* [Reflect on the CDK Type System](https://gist.github.com/eladb/68a009cf9c953b04a637bac5c40afdbc) - CDK の型システムを探索
* [Testing Your Construct Library CodeBuild Configuration Locally](https://github.com/aws/aws-codebuild-docker-images/tree/master/local_builds) - `jsii/superchain:latest` Docker イメージを使用
