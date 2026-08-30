---
title: "donnemartin/awesome-aws"
description: "AWSの公式資料、サービス別ライブラリ、ツール、ガイド、コミュニティ集"
licenseSource: "github-donnemartin-awesome-aws-readme-md"
---

<br/>
<p align="center">
  <img src="https://raw.githubusercontent.com/donnemartin/data-science-ipython-notebooks/master/images/aws.png">
</p>
<br/>

# Awesome AWS [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

素晴らしいAWSライブラリ、オープンソースリポジトリ、ガイド、ブログ、その他リソースを厳選したリスト

[awesome](https://github.com/sindresorhus/awesome)のリストを参考にした

## The Fiery Meter of AWSome

* Repo with 0100+ Stars: :fire:
* Repo with 0200+ Stars: :fire::fire:
* Repo with 0500+ Stars: :fire::fire::fire:
* Repo with 1000+ Stars: :fire::fire::fire::fire:
* Repo with 2000+ Stars: :fire::fire::fire::fire::fire:

`The Fiery Meter of AWSome`にないリポジトリも素晴らしい可能性があります。[A Note on Repo AWSomeness](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md#a-note-on-repo-awsomeness)を参照してください

### `awesome-aws` Python Module

[![Build Status](https://travis-ci.org/donnemartin/awesome-aws.svg?branch=master)](https://travis-ci.org/donnemartin/awesome-aws) [![Codecov](https://img.shields.io/codecov/c/github/donnemartin/awesome-aws.svg)](https://codecov.io/github/donnemartin/awesome-aws) [![PyPI version](https://badge.fury.io/py/awesome-aws.svg)](http://badge.fury.io/py/awesome-aws)

Pythonモジュール [`awesome-aws`](https://github.com/donnemartin/awesome-aws/tree/master/awesome)は、 [Awesome AWS](https://github.com/donnemartin/awesome-aws)上のリポジトリを定期的にスキャンし、 `Fiery Meter of AWSome`の正確性を維持しています。

## Contributing

ご貢献をお待ちしています！

[Contributing Guidelines](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)を確認してください。

また、 [Watch List](https://github.com/donnemartin/awesome-aws/issues/34)もチェックしてください。

## Index

* [SDKs and Samples](#sdks-and-samples)
    * [Android](#android-sdk)
    * [C++](#c-sdk)
    * [Clojure](#clojure-sdk)
    * [Go](#go-sdk)
    * [iOS](#ios-sdk)
    * [IoT](#iot-sdk)
    * [Java](#java-sdk)
    * [JavaScript](#javascript-sdk)
    * [Haskell](#haskell-sdk)
    * [Perl](#perl-sdk)
    * [PHP](#php-sdk)
    * [Python](#python-sdk)
    * [Ruby](#ruby-sdk)
    * [Rust](#rust-sdk)
    * [Scala](#scala-sdk)
    * [Xamarin](#xamarin-sdk)
    * [Unity](#unity-sdk)
    * [.NET](#net-sdk)
* [Command Line Tools](#command-line-tools)
    * [Universal Command Line Interface](#universal-command-line-interface)
    * [Windows PowerShell](#windows-powershell)
* [IDE Toolkits](#ide-toolkits)
    * [Eclipse Toolkit](#eclipse-toolkit)
    * [Visual Studio Toolkit](#visual-studio-toolkit)
* [Open Source Repos](#open-source-repos)
    * [API Gateway](#api-gateway)
    * [CLI](#cli)
    * [CloudFormation](#cloudformation)
    * [CloudSearch](#cloudsearch)
    * [CloudTrail](#cloudtrail)
    * [CloudWatch](#cloudwatch)
    * [Code Deploy](#code-deploy)
    * [Code Pipeline](#code-pipeline)
    * [Cognito](#cognito)
    * [Data Pipeline](#data-pipeline)
    * [Device Farm](#device-farm)
    * [DynamoDB](#dynamodb)
    * [Elastic Beanstalk](#elastic-beanstalk)
    * [Elastic Container Service](#elastic-container-service)
    * [Elastic File System](#elastic-file-system)
    * [Elastic MapReduce](#elastic-mapreduce)
    * [Elastic Search](#elastic-search)
    * [Elasticache](#elasticache)
    * [Glacier](#glacier)
    * [Kinesis](#kinesis)
    * [Lambda](#lambda)
    * [Machine Learning](#machine-learning)
    * [Mobile Analytics](#mobile-analytics)
    * [OpsWorks](#opsworks)
    * [Redshift](#redshift)
    * [Route 53](#route-53)
    * [S3](#s3)
    * [SNS](#sns)
    * [SQS](#sqs)
    * [Data](#data)
    * [DevOps](#devops)
    * [Security](#security)
    * [Accompanying](#accompanying-repos)
    * [Miscellaneous](#miscellaneous-repos)
* [Guides, Books, Documentation, and Training](#guides-books-documentation-and-training)
    * [Getting Started Guides](#getting-started-guides)
    * [General Guides](#general-guides)
    * [Books](#books)
    * [Whitepapers](#whitepapers)
    * [Documentation](#documentation)
    * [Training](#training)
    * [Case Studies: Powered by AWS](#case-studies-powered-by-aws)
* [Social](#social)
    * [Blogs](#blogs)
    * [Twitter Influencers](#twitter-influencers)
    * [Facebook Pages](#facebook-pages)
    * [YouTube Channels](#youtube-channels)
    * [LinkedIn Groups](#linkedin-groups)
    * [Subreddits](#subreddits)
    * [Conferences](#conferences)
* [Latest KPIs and Stats](#latest-kpis-and-stats)
* [Appendix of Core Services](#appendix-of-core-services)
    * [Services in Plain English](#services-in-plain-english)
    * [Compute](#compute-services)
    * [Networking](#networking-services)
    * [Enterprise Applications](#enterprise-applications)
    * [Analytics](#analytics-services)
    * [Artificial Intelligence](#artificial-intelligence)
    * [Management Tools](#management-tools)
    * [Security and Identity](#security-and-identity-services)
    * [Internet of Things](#internet-of-things-service)
    * [Mobile Services](#mobile-services)
    * [Storage and Content Delivery](#storage-and-content-delivery-services)
    * [Databases](#databases)
    * [Application Services](#application-services)
    * [Developer Tools](#developer-tools)
    * [Miscellaneous Services](#miscellaneous-services)
* [Contributing](#contributing)
* [Credits](#credits)
* [Other Awesome Lists](#other-awesome-lists)
* [Contact Info](#contact-info)
* [License](#license)

## SDKs and Samples

*AWS およびコミュニティ用の SDK とサンプル、ドキュメントが言語ごとにグループ化されています。*

<br/>
<p align="center">
  <img src="http://i.imgur.com/TK96G8T.png">
</p>
<br/>

### Android SDK

* [Repo :fire::fire::fire:](https://github.com/aws/aws-sdk-android)
* [Repo with Samples :fire::fire::fire:](https://github.com/awslabs/aws-sdk-android-samples)
* [Install](http://sdk-for-android.amazonwebservices.com/latest/aws-android-sdk.zip)
* [Docs](https://aws.amazon.com/documentation/sdk-for-android/)
* [Learn More](https://aws.amazon.com/mobile/sdk/)

### C++ SDK

* [Repo :fire::fire::fire::fire:](https://github.com/awslabs/aws-sdk-cpp)
* [Blog with Samples](https://aws.amazon.com/blogs/aws/introducing-the-aws-sdk-for-c/)

*C++ の SDK はラボプロジェクトであり、ドキュメントや/およびサンプルが限定されています。*

### Clojure SDK

* [Repo :fire::fire::fire:](https://github.com/mcohen01/amazonica)
* [Install](https://github.com/mcohen01/amazonica#installation)
* [Docs](https://github.com/mcohen01/amazonica#documentation)

*Clojure の SDK はコミュニティプロジェクトであり、ドキュメントや/およびサンプルが限定されています。*)

### Go SDK

* [Repo :fire::fire::fire::fire::fire:](https://github.com/aws/aws-sdk-go)
* [Install](https://github.com/aws/aws-sdk-go/wiki)
* [Docs](http://docs.aws.amazon.com/sdk-for-go/api/)
* [Learn More](https://aws.amazon.com/sdk-for-go/)

関連リポジトリ：

* [goamz/goamz :fire::fire:](https://github.com/goamz/goamz)

### iOS SDK

* [Repo :fire::fire::fire::fire:](https://github.com/aws/aws-sdk-ios)
* [Repo with Samples :fire::fire::fire::fire:](https://github.com/awslabs/aws-sdk-ios-samples)
* [Install](http://sdk-for-ios.amazonwebservices.com/latest/aws-ios-sdk.zip)
* [Docs](https://aws.amazon.com/documentation/sdk-for-ios/)
* [Learn More](https://aws.amazon.com/mobile/sdk/)

### IoT SDK

* [Repo for Arduino](https://github.com/awslabs/aws-sdk-arduino)
* [Repo for C :fire::fire::fire:](https://github.com/aws/aws-iot-device-sdk-embedded-C)
* [Repo for JavaScript :fire::fire::fire:](https://github.com/aws/aws-iot-device-sdk-js)
* [Repo for Arduino Yun :fire:](https://github.com/aws/aws-iot-device-sdk-arduino-yun/)
* [Docs](http://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html)

*IoT SDKは実験プロジェクトであり、ドキュメンテーションや/およびサンプルが限定されています。*

### Java SDK

* [Repo :fire::fire::fire::fire::fire:](https://github.com/aws/aws-sdk-java)
* [Repo with Samples :fire::fire:](https://github.com/awslabs/aws-java-sample)
* [Install](http://sdk-for-java.amazonwebservices.com/latest/aws-java-sdk.zip)
* [Docs](https://aws.amazon.com/documentation/sdk-for-java/)
* [Learn More](https://aws.amazon.com/sdk-for-java/)

### JavaScript SDK

* [Repo :fire::fire::fire::fire::fire:](https://github.com/aws/aws-sdk-js)
* [Repo with Samples :fire::fire:](https://github.com/awslabs/aws-nodejs-sample)
* [Install](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-intro.html)
* [Docs](https://aws.amazon.com/documentation/sdk-for-javascript/)
* [Learn More](https://aws.amazon.com/sdk-for-node-js/)

関連リポジトリ：

* [aws/aws-amplify :fire::fire::fire::fire::fire:](https://github.com/aws/aws-amplify)
* [chilts/awssum :fire::fire:](https://github.com/chilts/awssum)
* [mirkokiefer/aws-lib :fire::fire::fire:](https://github.com/mirkokiefer/aws-lib)
* [SaltwaterC/aws2js :fire::fire:](https://github.com/SaltwaterC/aws2js)

### Haskell SDK

* [Repo :fire::fire::fire:](https://github.com/brendanhay/amazonka)
* [Docs](http://hackage.haskell.org/packages/#cat:AWS)

関連リポジトリ：

* [aristidb/aws :fire::fire:](https://github.com/aristidb/aws)

*Haskell SDKはコミュニティプロジェクトであり、ドキュメンテーションや/およびサンプルが限定されています。*

### Perl SDK

* [Repo :fire:](https://github.com/pplu/aws-sdk-perl)
* [Repo with Samples :fire:](https://github.com/pplu/aws-sdk-perl/tree/master/examples)
* [Install](https://github.com/pplu/aws-sdk-perl#installation)
* [Docs](https://metacpan.org/pod/Paws)
* [Learn More](https://metacpan.org/pod/Paws)

*Perl SDKはコミュニティプロジェクトです。*

### PHP SDK

* [Repo :fire::fire::fire::fire::fire:](https://github.com/aws/aws-sdk-php)
* [Repo with Samples](https://github.com/awslabs/aws-php-sample)
* [Install](http://docs.aws.amazon.com/aws-sdk-php/v3/guide/getting-started/installation.html)
* [Docs](https://aws.amazon.com/documentation/sdk-for-php/)
* [Learn More](https://aws.amazon.com/sdk-for-php/)

関連リポジトリ:

* [aws-sdk-php-laravel :fire::fire::fire::fire:](https://github.com/aws/aws-sdk-php-laravel)
* [aws-sdk-php-silex](https://github.com/aws/aws-sdk-php-silex)
* [aws-sdk-php-zf2 :fire:](https://github.com/aws/aws-sdk-php-zf2)

### Python SDK

* [Repo :fire::fire::fire::fire::fire:](https://github.com/boto/boto3)
* [Repo with Samples :fire:](https://github.com/awslabs/aws-python-sample)
* [Install](http://github.com/boto/boto#installation)
* [Docs](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)
* [Learn More](http://github.com/boto/boto/blob/develop/README.rst#boto)

関連リポジトリ:

* [boto3 :fire::fire::fire::fire::fire:](https://github.com/boto/boto3)
* [botocore :fire::fire::fire::fire:](https://github.com/boto/botocore)

### Ruby SDK

* [Repo :fire::fire::fire::fire::fire:](https://github.com/aws/aws-sdk-ruby)
* [Repo with S3 Sample](https://github.com/awslabs/aws-ruby-sample)
* [Install](http://docs.aws.amazon.com/sdk-for-ruby/v3/developer-guide/setup-install.html)
* [Docs](https://aws.amazon.com/documentation/sdk-for-ruby/)
* [Samples :fire::fire::fire::fire::fire:](https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/ruby/example_code/)

関連リポジトリ:

* [aws-sdk-rails :fire::fire::fire:](https://github.com/aws/aws-sdk-rails)
* [appoxy/aws :fire::fire:](https://github.com/appoxy/aws)
* [rightscale/right_aws :fire::fire:](https://github.com/rightscale/right_aws)

### Rust SDK

* [Repo :fire::fire::fire::fire::fire:](https://github.com/rusoto/rusoto)
* [Install](https://github.com/rusoto/rusoto#installation)
* [Docs](https://docs.rs/rusoto_core/)

*Rust SDKはドキュメンテーションやサンプルが限定されているコミュニティプロジェクトです。*

### Scala SDK

* [Repo](https://github.com/awslabs/aws-scala-sdk)

関連リポジトリ：

* [atlassian/aws-scala](https://bitbucket.org/atlassian/aws-scala)
* [seratch/AWScala :fire::fire::fire:](https://github.com/seratch/AWScala)

*Scala SDKはドキュメンテーションやサンプルが限定されているラボプロジェクトです。*

### Unity SDK

* [Repo :fire:](https://github.com/aws/aws-sdk-unity)
* [Repo with Samples :fire:](https://github.com/awslabs/aws-sdk-unity-samples)
* [Install](https://s3.amazonaws.com/aws-unity-sdk/latest/aws-unity-sdk.zip)
* [Docs](http://docs.aws.amazon.com/mobile/sdkforunity/developerguide/)

### Xamarin SDK

* [Repo](https://github.com/awslabs/aws-sdk-xamarin)
* [Blog with Samples](https://blog.xamarin.com/amazon-web-services-aws-mobile-sdks-for-xamarin-now-available/)

*Xamarin SDKはドキュメンテーションやサンプルが限定されているラボプロジェクトです。*

### .NET SDK

* [Repo :fire::fire::fire::fire:](https://github.com/aws/aws-sdk-net)
* [Repo with Samples](https://github.com/awslabs/aws-auto-scaling-console-sample)
* [Install](http://sdk-for-net.amazonwebservices.com/latest/AWSToolsAndSDKForNet.msi)
* [Docs](https://aws.amazon.com/documentation/sdk-for-net/)
* [Learn More](https://aws.amazon.com/sdk-for-net/)
* [Samples :fire:](https://github.com/awslabs/aws-sdk-net-samples)

## Command Line Tools

*AWSおよびコミュニティのコマンドラインツールとサンプル、ドキュメント。*

<br/>
<p align="center">
  <img src="https://raw.githubusercontent.com/donnemartin/data-science-ipython-notebooks/master/images/commands.png">
</p>
<br/>

### Universal Command Line Interface

* [Repo :fire::fire::fire::fire::fire:](https://github.com/aws/aws-cli)
* [Install](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-set-up.html)
* [Docs](https://aws.amazon.com/documentation/cli/)
* [Learn More](https://aws.amazon.com/cli/)

関連リポジトリ：

* [awslabs/aws-shell :fire::fire::fire::fire::fire:](https://github.com/awslabs/aws-shell)
* [donnemartin/saws :fire::fire::fire::fire::fire:](https://github.com/donnemartin/saws)

### Windows PowerShell

* [Install](http://sdk-for-net.amazonwebservices.com/latest/AWSToolsAndSDKForNet.msi)
* [Docs](https://aws.amazon.com/documentation/powershell/)
* [Learn More](https://aws.amazon.com/powershell/)

## IDE Toolkits

*公式IDEツールキットとサンプル、ドキュメント。*

<br/>
<p align="center">
  <img src="http://i.imgur.com/x4nu914.png">
</p>
<br/>

### Eclipse Toolkit

* [Install](http://docs.aws.amazon.com/AWSToolkitEclipse/latest/ug/tke_setup.html)
* [Docs](https://aws.amazon.com/documentation/awstoolkiteclipse/)
* [Learn More](https://aws.amazon.com/eclipse/)

### Visual Studio Toolkit

* [Install](http://sdk-for-net.amazonwebservices.com/latest/AWSToolsAndSDKForNet.msi)
* [Docs](https://aws.amazon.com/documentation/aws-toolkit-visual-studio/)
* [Learn More](https://aws.amazon.com/visualstudio/)

## Open Source Repos

*AWSおよびコミュニティのオープンソースプロジェクトをサービス別に分類。詳細は [A Note on Repo AWSomeness](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md#a-note-on-repo-awsomeness) を参照してください。*

<br/>
<p align="center">
  <img src="http://i.imgur.com/wbhTgga.png">
</p>
<br/>

### API Gateway

AWS リポジトリ：

* [api-gateway-secure-pet-store :fire::fire:](https://github.com/awslabs/api-gateway-secure-pet-store) - Lambda で Cognito の認証情報を取得する
* [aws-apigateway-sdk-java](https://github.com/awslabs/aws-apigateway-sdk-java) - Java 用の SDK
* [aws-apigateway-swagger-importer :fire::fire::fire:](https://github.com/awslabs/aws-apigateway-importer) - Swagger とやり取りするためのツール

コミュニティ リポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### CLI

AWS リポジトリ：

* [awscli-aliases :fire::fire:](https://github.com/awslabs/awscli-aliases) - AWS CLI のアリーズを管理するリポジトリ
* [amazon-ecs-cli :fire::fire::fire::fire:](https://github.com/aws/amazon-ecs-cli) - Docker Compose フォーマットと親しみやすい Compose コマンドを使用する ECS CLI
* [aws-cli :fire::fire::fire::fire::fire:](https://github.com/aws/aws-cli) - ユニバーサルなコマンドラインインターフェース
* [aws-shell :fire::fire::fire::fire::fire:](https://github.com/awslabs/aws-shell)
* [awscli-cookbook](https://github.com/awslabs/awscli-cookbook) - CLI ツールをインストールし、Chef クックブック内で使用できる LWRP を提供
* [awsmobile-cli :fire:](https://github.com/aws/awsmobile-cli) - JavaScript エコシステムにおけるフロントエンド開発者向けの CLI経験

コミュニティ リポジトリ：

* [achiku/jungle :fire::fire::fire:](https://github.com/achiku/jungle) - EC2 および ELB の CLI 操作をより簡単にする
* [dbcli/athenacli :fire:](https://github.com/dbcli/athenacli) - AWS Athena サービス向けの CLI ツールで自動補完と文法ハイライトを提供
* [donnemartin/saws :fire::fire::fire::fire::fire:](https://github.com/donnemartin/saws) - パワーアップされた AWS コマンドラインインターフェース
* [timkay/aws :fire::fire:](https://github.com/timkay/aws) - Amazon EC2、S3、SQS、ELB、SDB への簡単なコマンドラインアクセス
* [wallix/awless :fire::fire::fire::fire::fire:](https://github.com/wallix/awless) - Go で書かれた EC2、IAM および S、S3 用の強力な CLI
* [99designs/aws-vault :fire::fire::fire::fire::fire:](https://github.com/99designs/aws-vault) - AWS 認証情報を安全に保管する Go ツール

### CloudFormation

AWS リポジトリ：

* [aws-cdk :fire::fire::fire::fire::fire:](https://github.com/aws/aws-cdk) - コードでクラウドインフラを定義するためのフレームワーク
* [aws-cfn-custom-resource-examples](https://github.com/awslabs/aws-cfn-custom-resource-examples) - カスタムリソースの例
* [aws-cfn-resource-bridge](https://github.com/aws/aws-cfn-resource-bridge) - カスタムリソースフレームワーク
* [cfn-python-lint :fire::fire::fire::fire::fire:](https://github.com/awslabs/cfn-python-lint) - CloudFormation のリント／検証を行うツール
* [cfncluster-cookbook](https://github.com/awslabs/cfncluster-cookbook) - サンプルクックブック
* [cfncluster :fire::fire::fire:](https://github.com/awslabs/cfncluster) - HPC クラスタのデプロイと維持を行うフレームワーク

コミュニティ リポジトリ：

* [Appliscale/perun](https://github.com/Appliscale/perun) - CloudFormation テンプレートおよびスタックのlinting/validationと管理を行うCLIツール
* [bazaarvoice/cloudformation-ruby-dsl :fire::fire:](https://github.com/bazaarvoice/cloudformation-ruby-dsl) - テンプレートを作成するためのRuby DSL
* [beaknit/cform :fire:](https://github.com/beaknit/cform) - SublimeTextプラグイン
* [cloudreach/sceptre :fire::fire::fire::fire:](https://github.com/cloudreach/sceptre) - CloudFormationの自動化を行うCLIツール
* [cloudtools/troposphere :fire::fire::fire::fire::fire:](https://github.com/cloudtools/troposphere) - 説明を生成するためのPythonライブラリ
* [peterkh/cumulus :fire::fire:](https://github.com/peterkh/cumulus) - スタックの管理
* [envato/stack_master :fire::fire:](https://github.com/envato/stack_master) - CloudFormationスタックを管理するCLIツール
* [sparkleformation/sfn](https://github.com/sparkleformation/sfn) - スタック管理用のCLI
* [sparkleformation/sparkle_formation :fire::fire:](https://github.com/sparkleformation/sparkle_formation) - テンプレート作成用のRuby DSL
* [Stelligent/cfn_nag :fire::fire::fire::fire:](https://github.com/stelligent/cfn_nag) - CloudFormationテンプレート用のlintingツール

### CloudSearch

AWS リポジトリ：

* [cloudsearchable](https://github.com/awslabs/cloudsearchable) - ActiveRecordスタイルのORMクエリインターフェース

コミュニティ リポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### CloudTrail

AWS リポジトリ：

* [aws-cloudtrail-processing-library](https://github.com/aws/aws-cloudtrail-processing-library) - ログファイルを簡単に消費・処理できる

コミュニティ リポジトリ：

* [AppliedTrust/traildash :fire::fire:](https://github.com/AppliedTrust/traildash) - スムーズなダッシュボード
* [GorillaStack/auto-tag :fire::fire:](https://github.com/GorillaStack/auto-tag) - AWSリソースの作成時に自動的にタグを付与し、コスト割り当てを行う

### CloudWatch

AWS リポジトリ：

* [cloudwatch-logs-subscription-consumer :fire::fire:](https://github.com/awslabs/cloudwatch-logs-subscription-consumer) - Kinesisストリームリーダー
* [ecs-cloudwatch-logs](https://github.com/awslabs/ecs-cloudwatch-logs) - Amazon ECSおよびAmazon CloudWatchログを使用するブログ記事におけるアセット
* [logstash-output-cloudwatchlogs](https://github.com/awslabs/logstash-output-cloudwatchlogs) - ログをCloudWatchに送信するLogstashプラグイン
* [opsworks-cloudwatch-logs-cookbooks](https://github.com/awslabs/opsworks-cloudwatch-logs-cookbooks) - OpsWorksのサンプルクッキー

コミュニティ リポジトリ：

* [jorgebastida/awslogs :fire::fire::fire::fire::fire:](https://github.com/jorgebastida/awslogs) - グループ、ストリーム、イベントをクエリするためのシンプルCLI
* [newrelic-platform/newrelic_aws_cloudwatch_plugin :fire:](https://github.com/newrelic-platform/newrelic_aws_cloudwatch_plugin) - New Relicプラグイン

### Code Deploy

AWS リポジトリ：

* [aws-codedeploy-agent :fire::fire:](https://github.com/aws/aws-codedeploy-agent) - サンプルエージェント
* [aws-codedeploy-plugin :fire:](https://github.com/awslabs/aws-codedeploy-plugin) - Jenkins プラグイン
* [aws-codedeploy-samples :fire::fire::fire:](https://github.com/awslabs/aws-codedeploy-samples) - サンプルおよびテンプレートシナリオ

コミュニティ リポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### Code Pipeline

AWS リポジトリ：

* [aws-codepipeline-custom-job-worker](https://github.com/awslabs/aws-codepipeline-custom-job-worker) - カスタムアクションを作成する際の独自のジョブワーカーの開発
* [aws-codepipeline-jenkins-aws-codedeploy_linux](https://github.com/awslabs/aws-codepipeline-jenkins-aws-codedeploy_linux) - Linux用の4段階パイプライン
* [aws-codepipeline-plugin-for-jenkins](https://github.com/awslabs/aws-codepipeline-plugin-for-jenkins) - Jenkins プラグイン
* [aws-codepipeline-s3-aws-codedeploy_linux :fire:](https://github.com/awslabs/aws-codepipeline-s3-aws-codedeploy_linux) - Linux用のシンプルパイプライン
* [AWSCodePipeline-Jenkins-AWSCodeDeploy_Windows](https://github.com/awslabs/AWSCodePipeline-Jenkins-AWSCodeDeploy_Windows) - Windows用の4段階パイプライン
* [AWSCodePipeline-S3-AWSCodeDeploy_Windows](https://github.com/awslabs/AWSCodePipeline-S3-AWSCodeDeploy_Windows) - Windows用のシンプルパイプライン

コミュニティ リポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### Cognito

AWS リポジトリ：

* [amazon-cognito-android](https://github.com/aws/amazon-cognito-android) - Android用のシンクSDK
* [amazon-cognito-developer-authentication-sample](https://github.com/awslabs/amazon-cognito-developer-authentication-sample) - 認証サンプル
* [amazon-cognito-dotnet](https://github.com/aws/amazon-cognito-dotnet) - .NET用のシンクSDK
* [amazon-cognito-ios](https://github.com/aws/amazon-cognito-ios) - iOS用のシンクSDK
* [amazon-cognito-js :fire::fire:](https://github.com/aws/amazon-cognito-js) - JavaScript用のシンクSDK
* [amazon-cognito-streams-sample](https://github.com/awslabs/amazon-cognito-streams-sample) - ストリーム消費サンプル
* [cognito-sample-nodejs :fire:](https://github.com/awslabs/cognito-sample-nodejs) - Node.js用のサンプルアプリ

コミュニティ リポジトリ：

* [capeless/warrant :fire::fire:](https://github.com/capless/warrant) - Cognitoを使用するPythonライブラリ
* [rahulpsd18/cognito-backup-restore :fire:](https://github.com/rahulpsd18/cognito-backup-restore) - Cognitoユーザープールのバックアップと復元ツール

### Data Pipeline

AWS リポジトリ：

* [data-pipeline-samples :fire::fire:](https://github.com/awslabs/data-pipeline-samples) - サンプルパイプライン

コミュニティ リポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### Device Farm

AWS リポジトリ：

* [aws-device-farm-appium-tests-for-sample-app](https://github.com/awslabs/aws-device-farm-appium-tests-for-sample-app) - Appium TestNG Androidテスト
* [aws-device-farm-calabash-tests-for-sample-app](https://github.com/awslabs/aws-device-farm-calabash-tests-for-sample-app) - カバラシ Android テスト
* [aws-device-farm-gradle-plugin](https://github.com/awslabs/aws-device-farm-gradle-plugin) - Gradle プラグイン
* [aws-device-farm-jenkins-plugin](https://github.com/awslabs/aws-device-farm-jenkins-plugin) - Jenkins プラグイン
* [aws-device-farm-sample-app-for-android :fire:](https://github.com/awslabs/aws-device-farm-sample-app-for-android) - サンプル Android アプリ

コミュニティ リポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### DynamoDB

AWS リポジトリ：

* [aws-dotnet-session-provider](https://github.com/aws/aws-dotnet-session-provider) - ASP.NET アプリ用のセッション状態プロバイダー
* [aws-dotnet-trace-listener](https://github.com/aws/aws-dotnet-trace-listener) - System.Diagnostics 用のトレースリスナー（イベントログに使用）
* [aws-dynamodb-encryption-java :fire:](https://github.com/awslabs/aws-dynamodb-encryption-java) - Java 用暗号化クライアント
* [aws-dynamodb-examples :fire::fire:](https://github.com/awslabs/aws-dynamodb-examples) - Java SDK を使用したサンプル
* [aws-dynamodb-mars-json-demo](https://github.com/awslabs/aws-dynamodb-mars-json-demo) - NASA JPL マーズ画像の保存とインデックス化
* [aws-dynamodb-session-tomcat](https://github.com/aws/aws-dynamodb-session-tomcat) - Apache Tomcat 用のセッションストア
* [aws-sessionstore-dynamodb-ruby](https://github.com/aws/aws-sessionstore-dynamodb-ruby) - Ruby ワンウェブアプリ用のセッション処理
* [dynamodb-cross-region-library :fire::fire:](https://github.com/awslabs/dynamodb-cross-region-library) - 跨地域のレプリケーション
* [dynamodb-geo :fire::fire:](https://github.com/awslabs/dynamodb-geo) - 地理空間データの作成とクエリを行うライブラリ
* [dynamodb-import-export-tool](https://github.com/awslabs/dynamodb-import-export-tool) - インポートおよびエクスポートの例
* [dynamodb-online-index-violation-detector](https://github.com/awslabs/dynamodb-online-index-violation-detector) - オンライン GSI のハッシュキーと範囲キーにおける違反を検出
* [dynamodb-streams-kinesis-adapter](https://github.com/awslabs/dynamodb-streams-kinesis-adapter) - DynamoDB ストリームからデータを消費・処理する Kinesis インターフェース
* [dynamodb-tictactoe-example-app](https://github.com/awslabs/dynamodb-tictactoe-example-app) - 軽量 Python アプリ
* [dynamodb-titan-storage-backend :fire::fire:](https://github.com/awslabs/dynamodb-titan-storage-backend) - Titan 用のストレージバックエンド
* [dynamodb-transactions :fire::fire:](https://github.com/awslabs/dynamodb-transactions) - 複数アイテムおよびテーブル間の原子的な書き込みと分離された読み取りを実行
* [logstash-input-dynamodb :fire:](https://github.com/awslabs/logstash-input-dynamodb) - Logstash 入力プラグイン

コミュニティ リポジトリ：

* [channl/dynamodb-lambda-autoscale :fire::fire:](https://github.com/channl/dynamodb-lambda-autoscale) - Lambdaを使用してDynamoDBのプロビジョニング容量を自動スケーリングする
* [lyft/confidant :fire::fire::fire::fire:](https://github.com/lyft/confidant) - 静的データを暗号化して保管する
* [sebdah/dynamic-dynamodb :fire::fire::fire:](https://github.com/sebdah/dynamic-dynamodb) - 自動スケーリングを提供する
* [sensedeep/dynamodb-onetable :fire::fire::fire:](https://github.com/sensedeep/dynamodb-onetable) - NodeJSを使用した単一テーブル設計向けDynamoDBライブラリ

### Elastic Beanstalk

AWS リポジトリ：

* [aws-eb-glassfish-dockerfiles](https://github.com/aws/aws-eb-glassfish-dockerfiles) - GlassFishのDockerファイル
* [aws-eb-python-dockerfiles](https://github.com/aws/aws-eb-python-dockerfiles) - PythonのDockerファイル
* [eb-demo-php-simple-app :fire:](https://github.com/awslabs/eb-demo-php-simple-app) - シンプルな PHP アプリ
* [eb-docker-multiple-ports](https://github.com/awslabs/eb-docker-multiple-ports) - Dockerイメージを使用したシンプルなNode.jsおよびTomcatアプリ
* [eb-docker-nginx-proxy :fire:](https://github.com/awslabs/eb-docker-nginx-proxy) - PHP-FPMとNginxのDockerイメージを使用したシンプルなPHPアプリ
* [eb-docker-virtual-hosting](https://github.com/awslabs/eb-docker-virtual-hosting) - Dockerイメージを使用したシンプルなPHP、TomcatおよびNginxアプリケーション
* [eb-node-express-sample :fire::fire:](https://github.com/awslabs/eb-node-express-sample) - Expressアプリのサンプル
* [eb-node-express-signup](https://github.com/awslabs/eb-node-express-signup) - ExpressフレームワークおよびBootstrap Node.jsサンプルアプリ
* [eb-node-express](https://github.com/awslabs/eb-node-express) - 開発ガイドに参照されているサンプルアプリ
* [eb-py-flask-signup-worker](https://github.com/awslabs/eb-py-flask-signup-worker) - ワーカーロールを示すPythonアプリ
* [eb-py-flask-signup :fire::fire:](https://github.com/awslabs/eb-py-flask-signup) - FlaskとBootstrapを使用したPythonサインアップフォームアプリ
* [eb-python-flask](https://github.com/awslabs/eb-python-flask) - シンプルなPythonおよびFlaskアプリ
* [eb-wif-sample](https://github.com/awslabs/eb-wif-sample) - Web Identity Federationを使用したログインアプリのサンプル

コミュニティ リポジトリ：

* [alienfast/elastic-beanstalk :fire:](https://github.com/alienfast/elastic-beanstalk) - Railsアプリ向けのrake設定とデプロイを含むGem
* [ThoughtWorksStudios/eb_deployer :fire::fire:](https://github.com/ThoughtWorksStudios/eb_deployer) - ブルー・グリーンデプロイの自動化

### Elastic Compute Cloud

AWS リポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

コミュニティ リポジトリ：

* [alestic/ec2-consistent-snapshot :fire::fire:](https://github.com/alestic/ec2-consistent-snapshot) - EC2における一貫したEBSスナップショットの開始
* [ConradIrwin/aws-name-server :fire::fire::fire:](https://github.com/ConradIrwin/aws-name-server) - 名前でインスタンスを検索できるDNSサーバー
* [cristim/autospotting :fire::fire::fire::fire::fire:](https://github.com/autospotting/autospotting) - 自動的に適合するスポットインスタンスでオンデマンドEC2インスタンスをロールリプレース
* [evannuil/aws-snapshot-tool :fire::fire:](https://github.com/evannuil/aws-snapshot-tool) - EBSのスナップショットと回転を自動化
* [kelseyhightower/kubernetes-the-hard-way :fire::fire::fire::fire::fire:](https://github.com/kelseyhightower/kubernetes-the-hard-way) - EC2上でKubernetesをハードウェアから構築。スクリプトなし。
* [mirakui/ec2ssh :fire::fire:](https://github.com/mirakui/ec2ssh) - SSH設定マネージャー
* [openebs/openebs :fire::fire::fire::fire::fire:](https://github.com/openebs/openebs) - ゾーンおよび環境間のコンテナ化ブロックストレージのQoSSLA、階層化およびレプリケーションポリシー、かつ予測可能かつスケーラブルなパフォーマンス
* [skavanagh/EC2Box :fire::fire:](https://github.com/skavanagh/EC2Box) - 複数インスタンスを同時に管理できるウェブベースSSHコンソール
* [wbailey/claws :fire:](https://github.com/wbailey/claws) - Capistrano統合によるCLIドリブンコンソール

### Elastic Container Service

AWS リポジトリ：

* [amazon-ecs-agent :fire::fire::fire::fire:](https://github.com/aws/amazon-ecs-agent) - コンテナに実行され、開始されるエージェント
* [amazon-ecs-amazon-efs](https://github.com/awslabs/amazon-ecs-amazon-efs) - コンテナからデータを保持する
* [amazon-ecs-init :fire:](https://github.com/aws/amazon-ecs-init) - Amazon ECSコンテナエージェントをサポートするRPM
* [blox :fire::fire::fire:](https://github.com/blox/blox) - ECS上でカスタムスケジューラを構築するためのオープンソースツール
* [ecs-blue-green-deployment :fire::fire:](https://github.com/awslabs/ecs-blue-green-deployment) - ECSにおけるブルー・グリーンデプロイメント
* [ecs-cloudwatch-logs](https://github.com/awslabs/ecs-cloudwatch-logs) - Amazon ECSとAmazon CloudWatchログを使用したブログのアセット
* [ecs-demo-php-simple-app :fire:](https://github.com/awslabs/ecs-demo-php-simple-app) - シンプルな PHP アプリ
* [ecs-mesos-scheduler-driver :fire:](https://github.com/awslabs/ecs-mesos-scheduler-driver) - Apache Mesosとの統合
* [ecs-refarch-continuous-deployment :fire::fire::fire:](https://github.com/awslabs/ecs-refarch-continuous-deployment) - CodePipelineを用いたECSへの継続デプロイメントの参照アーキテクチャ
* [ecs-task-kite](https://github.com/awslabs/ecs-task-kite) - タスク間通信用のシンプルなエミバスコンテナ
* [lambda-ecs-worker-pattern :fire::fire:](https://github.com/awslabs/lambda-ecs-worker-pattern) - SQSおよびECSを用いてLambdaを拡張
* [py-flask-signup-docker](https://github.com/awslabs/py-flask-signup-docker) - Pythonサンプルアプリ
* [service-discovery-ecs-consul :fire:](https://github.com/awslabs/service-discovery-ecs-consul) - Consul で Amazon ECS に接続したブログサービスからの資産

コミュニティ リポジトリ：

* [Lumoslabs/broadside](https://github.com/lumoslabs/broadside) - コンテナ化されたアプリケーションのリビジョンをデプロイするためのコマンドラインツール
* [Stelligent/mu :fire::fire::fire:](https://github.com/stelligent/mu) - CodeBuild および CodePipeline を使って ECS へのデプロイを簡略化するためのコマンドラインツール

### Elastic File System

AWS リポジトリ：

* [amazon-ecs-amazon-efs](https://github.com/awslabs/amazon-ecs-amazon-efs) - ECS からのデータを永続化する

コミュニティ リポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### Elastic MapReduce

AWS リポジトリ：

* [emr-bootstrap-actions :fire::fire::fire:](https://github.com/awslabs/emr-bootstrap-actions) - サンプルブートストラップアクション
* [emr-sample-apps](https://github.com/awslabs/emr-sample-apps) - サンプルアプリケーション

コミュニティ リポジトリ：

* [Yelp/mrjob :fire::fire::fire::fire::fire:](https://github.com/Yelp/mrjob) - Hadoop または EMR で MapReduce 作業を実行

### Elastic Search

AWS リポジトリ：

* [logstash-output-amazon_es :fire::fire:](https://github.com/awslabs/logstash-output-amazon_es) - Logstash の出力プラグインでイベントを署名・エクスポート
* [opsworks-elasticsearch-cookbook](https://github.com/awslabs/opsworks-elasticsearch-cookbook) - OpsWorks Elasticsearch サンプルクッキー

コミュニティ リポジトリ：

* [elastic/elasticsearch-cloud-aws :fire::fire::fire:](https://github.com/elastic/elasticsearch-cloud-aws) - Elasticsearch 用プラグイン

### Elasticache

AWS リポジトリ：

* [aws-elasticache-cluster-client-libmemcached](https://github.com/awslabs/aws-elasticache-cluster-client-libmemcached) - libmemcached ライブラリのサポート
* [aws-elasticache-cluster-client-memcached-for-java](https://github.com/awslabs/aws-elasticache-cluster-client-memcached-for-java) - Java 用クライアント
* [aws-elasticache-cluster-client-memcached-for-php](https://github.com/awslabs/aws-elasticache-cluster-client-memcached-for-php) - ElastiCache に接続する強化された PHP ライブラリ
* [elasticache-cluster-config-net](https://github.com/awslabs/elasticache-cluster-config-net) - Enyim の MemcachedClient 用の設定オブジェクトで自動発見を有効化

コミュニティ リポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### Glacier

コミュニティ リポジトリ：

* [vsespb/mt-aws-glacier :fire::fire::fire:](https://github.com/vsespb/mt-aws-glacier) - Perl のマルチスレッドマルチパート同期を Glacier に実行

### Kinesis

AWS リポジトリ：

* [amazon-kinesis-aggregators :fire:](https://github.com/awslabs/amazon-kinesis-aggregators) - リアルタイム集計を作成するためのシンプルな方法を提供
* [amazon-kinesis-client-net](https://github.com/awslabs/amazon-kinesis-client-net) - .NET 用クライアントライブラリ
* [amazon-kinesis-client-nodejs :fire::fire:](https://github.com/awslabs/amazon-kinesis-client-nodejs) - Node.js 用クライアントライブラリ
* [amazon-kinesis-client-python :fire::fire:](https://github.com/awslabs/amazon-kinesis-client-python) - Python 用ク汀エントライブラリ
* [amazon-kinesis-client-ruby :fire:](https://github.com/awslabs/amazon-kinesis-client-ruby) - Ruby 用クライアントライブラリ
* [amazon-kinesis-client :fire::fire::fire:](https://github.com/awslabs/amazon-kinesis-client) Amazon Kinesis 用のクライアントライブラリ
* [amazon-kinesis-connectors :fire::fire:](https://github.com/awslabs/amazon-kinesis-connectors) - AWSおよびAWS以外のサービスとの統合に使用できるライブラリ
* [amazon-kinesis-data-visualization-sample :fire:](https://github.com/awslabs/amazon-kinesis-data-visualization-sample) - サンプルデータ可視化アプリ
* [amazon-kinesis-learning](https://github.com/awslabs/amazon-kinesis-learning) - Kinesis開発を学ぶ
* [amazon-kinesis-producer :fire::fire:](https://github.com/awslabs/amazon-kinesis-producer) - プロダクタライブラリ
* [amazon-kinesis-scaling-utils :fire::fire:](https://github.com/awslabs/amazon-kinesis-scaling-utils) - ストリームのスケーリングを可能にする
* [aws-fluent-plugin-kinesis :fire::fire:](https://github.com/awslabs/aws-fluent-plugin-kinesis) - フリュエントプラグイン
* [dynamodb-streams-kinesis-adapter](https://github.com/awslabs/dynamodb-streams-kinesis-adapter) - DynamoDB ストリームアダプタ
* [kinesis-log4j-appender](https://github.com/awslabs/kinesis-log4j-appender) - Log4J アップンダー
* [kinesis-poster-worker](https://github.com/awslabs/kinesis-poster-worker) - シンプルなマルチスレッドPythonのポスターとワーカー
* [kinesis-storm-spout :fire:](https://github.com/awslabs/kinesis-storm-spout) - Storm用のスポウト
* [mqtt-kinesis-bridge](https://github.com/awslabs/mqtt-kinesis-bridge) - PythonによるシンプルなMQTTブリッジ

コミュニティリポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### Lambda

AWSリポジトリ：

* [amazon-elasticsearch-lambda-samples :fire::fire:](https://github.com/awslabs/amazon-elasticsearch-lambda-samples) - S3およびKinesisからElasticsearchへのデータインジェスト
* [awslabs/aws-sam-local :fire::fire::fire::fire::fire:](https://github.com/awslabs/aws-sam-local) - サーバレスアプリケーションのローカル開発およびテスト用のCLIツール
* [aws-lambda-go :fire::fire::fire::fire::fire:](https://github.com/aws/aws-lambda-go) - Go開発者向けにLambda関数の開発を支援するライブラリ、サンプル、ツール
* [aws-lambda-java-libs :fire::fire:](https://github.com/aws/aws-lambda-java-libs) - インターフェース定義およびヘルパークラスの公式ミラー
* [aws-lambda-redshift-loader :fire::fire::fire:](https://github.com/awslabs/aws-lambda-redshift-loader) - Redshiftローダー
* [chalice :fire::fire::fire::fire::fire:](https://github.com/awslabs/chalice) - Pythonサーバレスマイクロフレームワーク
* [create-thumbnails-lambda](https://github.com/awslabs/create-thumbnails-lambda) - grunt-aws-lambdaプラグインを使用して開発とテストを支援
* [lambda-ecs-worker-pattern :fire::fire:](https://github.com/awslabs/lambda-ecs-worker-pattern) - SQSおよびECSを用いてLambdaを拡張
* [lambda-refarch-fileprocessing :fire::fire:](https://github.com/awslabs/lambda-refarch-fileprocessing) - リアルタイムファイル処理用の参照アーキテクチャ
* [lambda-refarch-iotbackend :fire::fire:](https://github.com/awslabs/lambda-refarch-iotbackend) - IoTバックエンドを作成するための参照アーキテクチャ
* [lambda-refarch-mobilebackend :fire::fire::fire:](https://github.com/awslabs/lambda-refarch-mobilebackend) - モバイルバックエンドを作成するための参照アーキテクチャ
* [lambda-refarch-webapp :fire::fire::fire::fire:](https://github.com/awslabs/lambda-refarch-webapp) - ウェブアプリケーションを作成するための参照アーキテクチャ

コミュニティリポジトリ：

* [alestic/lambdash :fire::fire::fire:](https://github.com/alestic/lambdash) - Lambdaシェル - Lambda環境内でshコマンドを実行
* [Alephbet/gimel :fire::fire:](https://github.com/Alephbet/gimel) - Lambdaを使って独自のA/Bテストバックエンドを構築
* [apex/apex ](https://github.com/apex/apex) - Go対応の最小AWS Lambda関数マネージャー
* [claudiajs/claudia :fire::fire::fire::fire::fire:](https://github.com/claudiajs/claudia) - Node.jsプロジェクトをLambdaとAPI Gatewayに簡単にデプロイ
* [cloudnative/lambda-chat :fire::fire:](https://github.com/cloudnative/lambda-chat) - サーバレスで動作するチャットアプリケーション
* [danilop/LambdAuth :fire::fire::fire::fire:](https://github.com/danilop/LambdAuth) - 認証サービスのサンプル
* [eawsy/aws-lambda-go :fire::fire::fire:](https://github.com/eawsy/aws-lambda-go) - Lambda上でGoを高速かつシンプルに実行する方法
* [garnaat/kappa :fire::fire::fire:](https://github.com/garnaat/kappa) - KappaはAWS Lambdaの関数をデプロイ・更新・テストするためのCLIツール
* [goadapp/goad :fire::fire::fire::fire:](https://github.com/goadapp/goad) - Lambdaを活用した、高度に分散された負荷テストツール
* [graphcool/chromeless :fire::fire::fire::fire::fire:](https://github.com/graphcool/chromeless) - Lambdaを介してChromeを自動化
* [grycap/scar :fire::fire::fire:](https://github.com/grycap/scar) - DockerイメージからコンテナをAWS Lambda内で透明に実行
* [jeremydaly/lambda-api :fire::fire::fire::fire:](https://github.com/jeremydaly/lambda-api) - サーバレスアプリケーション向けの軽量ウェブフレームワーク
* [jimpick/lambda-comments :fire::fire::fire:](https://github.com/jimpick/lambda-comments) - Lambdaで構築されたブログコメントシステム
* [jorgebastida/gordon :fire::fire::fire::fire::fire:](https://github.com/jorgebastida/gordon) - λ GordonはCloudFormationを使ってAWS Lambdaの作成・接続・デプロイを行うツール
* [ks888/LambStatus :fire::fire::fire::fire:](https://github.com/ks888/LambStatus) - StatusPage.ioをインスピレーションとして作られた、AWS Lambdaベースのステータスページシステム
* [kubek2k/lambdoku :fire::fire::fire:](https://github.com/kubek2k/lambdoku) - Lambdaを使用した場合のHerokuのような体験
* [lambci/lambci :fire::fire::fire::fire::fire:](https://github.com/lambci/lambci) - Lambda に構築された継続的統合システム
* [littlstar/s3-lambda :fire::fire::fire::fire:](https://github.com/littlstar/s3-lambda) - S3 オブジェクト上の Lambda 関数と並列制御（各、マップ、リダクション、フィルタ）
* [mentum/lambdaws :fire::fire::fire::fire:](https://github.com/mentum/lambdaws) - デプロイ、実行、結果取得を簡単に行える
* [Miserlou/Zappa :fire::fire::fire::fire::fire:](https://github.com/Miserlou/Zappa) - AWS Lambda と API Gateway を使用したサーバレス WSGI Python ワークアプリ
* [nficano/python-lambda :fire::fire::fire::fire:](https://github.com/nficano/python-lambda) - Lambda でサーバレス Python コードを開発・デプロイするためのツールキット
* [serverless/serverless :fire::fire::fire::fire::fire:](https://github.com/serverless/serverless) サーバレスアプリケーションフレームワーク（以前は JAWS）
* [Tim-B/grunt-aws-lambda :fire::fire:](https://github.com/Tim-B/grunt-aws-lambda) - グラントプラグイン
* [trek10inc/aws-lambda-debugger :fire::fire:](https://github.com/trek10inc/aws-lambda-debugger) - Node 6.10 で実行中の Lambda 関数用のリモートデバッグツール

### Machine Learning

AWSリポジトリ：

* [machine-learning-samples :fire::fire::fire:](https://github.com/awslabs/machine-learning-samples) - サンプルアプリケーション

コミュニティリポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### Mobile Analytics

AWSリポジトリ：

* [aws-sdk-mobile-analytics-js](https://github.com/aws/aws-sdk-mobile-analytics-js) - JavaScript SDK

コミュニティリポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### OpsWorks

AWSリポジトリ：

* [opsworks-attribute-customization](https://github.com/awslabs/opsworks-attribute-customization) - 属性カスタマイズの例
* [opsworks-capistrano](https://github.com/awslabs/opsworks-capistrano) - インスタンスとの Capistrano
* [opsworks-cloudwatch-logs-cookbooks](https://github.com/awslabs/opsworks-cloudwatch-logs-cookbooks) - CloudWatch サンプルクッキー
* [opsworks-cookbooks :fire::fire::fire::fire:](https://github.com/aws/opsworks-cookbooks) - Chef クッキー
* [opsworks-demo-php-photo-share-app](https://github.com/awslabs/opsworks-demo-php-photo-share-app) - シンプルな PHP フォトシェアアプリ
* [opsworks-demo-php-simple-app](https://github.com/awslabs/opsworks-demo-php-simple-app) - シンプルな PHP アプリ
* [opsworks-demo-rails-photo-share-app](https://github.com/awslabs/opsworks-demo-rails-photo-share-app) - サンプル Rails アプリ
* [opsworks-elasticsearch-cookbook](https://github.com/awslabs/opsworks-elasticsearch-cookbook) - Elasticsearch サンプルクッキー
* [opsworks-example-cookbooks :fire:](https://github.com/awslabs/opsworks-example-cookbooks) - サンプルアプリケーションで使用されるクッキー
* [opsworks-first-cookbook](https://github.com/awslabs/opsworks-first-cookbook) - シンプルなレシピを示すクッキー
* [opsworks-windows-demo-](https://github.com/awslabs/opsworks-windows-demo-nodejs) - Node.jsのサンプルアプリ。
* [opsworks-windows-demo-cookbooks](https://github.com/awslabs/opsworks-windows-demo-cookbooks) - Windows用のレシピ本。
* [todo-sample-app-cookbooks](https://github.com/awslabs/todo-sample-app-cookbooks) - todo-sample-appに関連するカスタムクックブック。

コミュニティリポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### Redshift

AWSリポジトリ：

* [aws-lambda-redshift-loader :fire::fire::fire:](https://github.com/awslabs/aws-lambda-redshift-loader) - ラムダデータベースローダー。
* [amazon-redshift-utils :fire::fire::fire::fire::fire:](https://github.com/awslabs/amazon-redshift-utils) - 既存のテーブルに最適なカラムエンコーディングを適用します。

コミュニティリポジトリ：

* [Lumoslabs/aleph](https://github.com/lumoslabs/aleph) - Redshiftクエリの作成と実行に必要な完全な機能を備えたウェブアプリケーション。クエリの履歴管理をサポートし、基本的な可視化機能を提供します。
* [getredash/redash :fire::fire::fire::fire::fire:](https://github.com/getredash/redash/) - 既存のデータベースを簡単にクエリし、データセットを共有し、さまざまな方法で可視化できるウェブアプリケーション。最初にRedshiftとの連携を目的として開発され、Redshiftに対して優れたサポートを提供しています。
* [everythingMe/redshift_console](https://github.com/EverythingMe/redshift_console) -  Redshiftクラスタの監視と管理を行うシンプルなツール。初版には、実行中のクエリ、WLMキュー、テーブル／スキーマの監視を行う基本的な機能が含まれています。

### Route 53

AWSリポジトリ：

* [route53-infima :fire::fire:](https://github.com/awslabs/route53-infima) - サービスレベルの障害分離を管理します。

コミュニティリポジトリ：

* [barnybug/cli53 :fire::fire::fire::fire:](https://github.com/barnybug/cli53) - cli53は、Amazon Route 53向けのコマンドラインツールで、BIND形式のインポート・エクスポートとRoute 53ドメインのシンプルなコマンドライン管理を提供します。
* [winebarrel/roadworker :fire::fire:](https://github.com/winebarrel/roadworker) - RoadworkerはRoute53を管理するツールです。Route53の状態をDSLで定義し、そのDSLに従ってRoute53を更新します。

### S3

コミュニティリポジトリ：

* [anomalizer/ngx_aws_auth :fire::fire:](https://github.com/anomalizer/ngx_aws_auth) - 認証されたリクエストのプロキシ処理を実装します。
* [bloomreach/s4cmd :fire::fire::fire::fire:](https://github.com/bloomreach/s4cmd) - S3コマンドラインツール。大容量ファイルの場合、S3cmdより速い。
* [CulturalMe/meteor-slingshot :fire::fire::fire:](https://github.com/CulturalMe/meteor-slingshot) - メテオールでファイルをアップロードします。
* [danilop/yas3fs :fire::fire::fire:](https://github.com/danilop/yas3fs) - もう一つのS3をバックアップしたファイルシステム、s3fsをインスピレーションとして作られたもの。
* [grippy/node-s3](https://github.com/grippy/node-s3) - バケットを管理するNode.jsアプリ
* [jubos/fake-s3 :fire::fire::fire::fire::fire:](https://github.com/jubos/fake-s3) - 軽量のS3クローンで、ほとんどのコマンドをシミュレートします。
* [kahing/goofys :fire::fire::fire::fire::fire:](https://github.com/kahing/goofys) -  Goで書かれたAmazon S3用のファイルシステム。
* [littlstar/s3renity :fire::fire::fire::fire:](https://github.com/littlstar/s3renity) - バッチ処理の並列制御関数（each、map、reduce、filter、join）
* [marcel/aws-s3 :fire::fire::fire:](https://github.com/marcel/aws-s3) - アマゾンのS3 REST APIのRuby実装。
* [mardix/flask-cloudy :fire::fire:](https://github.com/mardix/flask-cloudy) - フラスク拡張機能
* [MathieuLoutre/grunt-aws-s3 :fire::fire:](https://github.com/MathieuLoutre/grunt-aws-s3) - グラントプラグイン
* [mickael-kerjean/filestash :fire::fire::fire::fire::fire:](https://github.com/mickael-kerjean/filestash) - S3向けの現代的なウェブクライアント
* [minio/mc :fire::fire::fire::fire::fire:](https://github.com/minio/mc) -  ファイルシステムおよびクラウドストレージ向けのミニオクライアント
* [minio/minio :fire::fire::fire::fire::fire:](https://github.com/minio/minio) - S3と互換性のあるオブジェクトストレージサーバー
* [mumrah/s3-multipart :fire:](https://github.com/mumrah/s3-multipart) - PythonによるS3への並列アップロード/ダウンロード
* [ncw/rclone :fire::fire::fire::fire::fire:](https://github.com/ncw/rclone) - S3など各種クラウドストレージプロバイダー向けのRsync
* [owocki/s3_disk_util :fire:](https://github.com/owocki/s3_disk_util) - S3ディスク使用量（du）ユーティリティ
* [peak/s5cmd :fire::fire::fire:](https://github.com/peak/s5cmd) - ワイルドカードおよびバッチコマンドをサポートするS3およびローカルファイルシステムの高速実行ツール
* [pgherveou/gulp-awspublish :fire::fire:](https://github.com/pgherveou/gulp-awspublish) - グルププラグイン
* [rlmcpherson/s3gof3r :fire::fire::fire::fire:](https://github.com/rlmcpherson/s3gof3r) - 高速かつ並列、ストリーミングアクセスを提供するツール（CLIも含む）
* [s3git/s3git :fire::fire::fire::fire:](https://github.com/s3git/s3git) - 分散型、デシマル化された、バージョン管理されたリポジトリを作成できるCLIツール
* [s3fs-fuse/s3fs-fuse :fire::fire::fire::fire::fire:](https://github.com/s3fs-fuse/s3fs-fuse) - LinuxおよびMac OS XでFUSEを用いてS3のバケットをマウントできる機能
* [s3tools/s3cmd :fire::fire::fire::fire::fire:](https://github.com/s3tools/s3cmd) - S3およびCloudFrontの管理用CLIツール
* [schickling/git-s3 :fire::fire:](https://github.com/schickling/git-s3) - Gitリポジトリをバケットにデプロイできるツール
* [sorentwo/carrierwave-aws :fire::fire:](https://github.com/sorentwo/carrierwave-aws) - CarrierWave向けのアダプタ
* [spring-projects/aws-maven :fire::fire:](https://github.com/spring-projects/aws-maven) -  Maven WagonによるS3対応
* [tongwang/s3fs-c :fire:](https://github.com/tongwang/s3fs-c) - ローカルファイルシステム上で使用できるバケットのマウント機能
* [mishudark/s3-parallel-put :fire::fire:](https://github.com/mishudark/s3-parallel-put) - 並列アップロードをサポートするCLIツール
* [waynehoover/s3_direct_upload :fire::fire::fire:](https://github.com/waynehoover/s3_direct_upload) - CORSを用いたAmazon S3への直接アップロード
* [weavejester/clj-aws-s3 :fire:](https://github.com/weavejester/clj-aws-s3) - クロージャー向けのクライアントライブラリ

### SES

コミュニティリポジトリ：

* [drewblas/aws-ses :fire::fire::fire:](https://github.com/drewblas/aws-ses) - Ruby用の簡単なDSLとインターフェースを提供
* [microapps/MoonMail :fire::fire::fire::fire:](https://github.com/microapps/MoonMail) - SESとLambdaを使ってビリオンのメールを送信

### Simple Workflow

AWSリポジトリ：

* [aws-flow-ruby :fire:](https://github.com/aws/aws-flow-ruby) - バックグラウンドジョブと複数ステップのワークフローを作成
* [aws-flow-ruby-samples](https://github.com/awslabs/aws-flow-ruby-samples) - Ruby用のAWS Flow Frameworkサンプル
* [aws-flow-ruby-opsworks-helloworld](https://github.com/awslabs/aws-flow-ruby-opsworks-helloworld) - Hello Worldサンプル

コミュニティリポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### SimpleDB

コミュニティリポジトリ：

* [rjrodger/simpledb :fire:](https://github.com/rjrodger/simpledb) - Node.jsライブラリ

### SNS

AWSリポジトリ：

* [aws-php-sns-message-validator :fire:](https://github.com/aws/aws-php-sns-message-validator) - PHP用のメッセージ検証

コミュニティリポジトリ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### SQS

AWS リポジトリ：

* [amazon-sqs-java-messaging-lib :fire:](https://github.com/awslabs/amazon-sqs-java-messaging-lib) - SQSとの通信に使うJavaメッセージサービスを保持

コミュニティ リポジトリ：

* [phstc/shoryuken :fire::fire::fire::fire:](https://github.com/phstc/shoryuken) - Ruby用の非常に効率的なSQSベースのメッセージプロセッサ

### Data

AWS リポジトリ：

* [aws-data-wrangler :fire::fire::fire::fire::fire:](https://github.com/awslabs/aws-data-wrangler) - Pandas DataFramesとAWSデータ関連サービスを接続

コミュニティ リポジトリ：

* [donnemartin/data-science-ipython-notebooks :fire::fire::fire::fire::fire:](https://github.com/donnemartin/data-science-ipython-notebooks) - ビッグデータ／データサイエンス用ノートブック
* [everpeace/vagrant-mesos :fire::fire:](https://github.com/everpeace/vagrant-mesos) - VagrantでMesosクラスタを立ち上げる
* [jhorey/ferry :fire::fire:](https://github.com/jhorey/ferry) -  Dockerを使ってビッグデータアプリケーションを定義・実行・デプロイ
* [nathanmarz/storm-deploy :fire::fire::fire:](https://github.com/nathanmarz/storm-deploy) - Stormクラスタのワンクリックデプロイ

### DevOps

コミュニティリポジトリ：

* [cloud-custodian/cloud-custodian :fire::fire::fire::fire::fire:](https://github.com/cloud-custodian/cloud-custodian) - リソースの管理用ルールエンジン、YAMLによるDSLでリソースのクエリ、フィルタ、アクションを定義
* [chef-cookbooks/aws :fire::fire:](https://github.com/chef-cookbooks/aws) - AWS Chef Cookbookの開発リポジトリ
* [colinbjohnson/aws-missing-tools :fire::fire::fire::fire:](https://github.com/colinbjohnson/aws-missing-tools) - EC2、EBS、RDSおよびRoute5T3などのリソースを管理するツール
* [k1LoW/awspec :fire::fire::fire::fire:](https://github.com/k1LoW/awspec) - RSpecでリソースをテスト
* [mitchellh/vagrant-aws :fire::fire::fire::fire::fire:](https://github.com/mitchellh/vagrant-aws) - Vagrantを使ってEC2およびVPCインスタンスを管理
* [NixOS/nixops :fire::fire::fire::fire:](https://github.com/NixOS/nixops) - NixOSを使用してEC2インスタンス、S3バケット、その他リソースをプロビジョニングする

### Security

AWSリポジトリ：

* [aws-sha256-agentcs](https://github.com/awslabs/aws-sha256-agentcs) - SHA256エージェント互換性スキャナー
* [aws-tvm-anonymous](https://github.com/awslabs/aws-tvm-anonymous) - 匿名登録用トークン販売機
* [aws-tvm-identity](https://github.com/awslabs/aws-tvm-identity) - ID登録用トークン販売機
* [s2n :fire::fire::fire::fire::fire:](https://github.com/awslabs/s2n) - TLS/SSLプロトコルの実装

コミュニティリポジトリ：

* [AdRoll/hologram :fire::fire::fire:](https://github.com/AdRoll/hologram) - 開発用ラップトップに簡単で痛みのない認証情報の提供
* [alex/letsencrypt-aws :fire::fire::fire:](https://github.com/alex/letsencrypt-aws) - 証明書を自動プロビジョニングおよび更新する
* [bridgecrewio/checkov :fire::fire::fire::fire::fire:](https://github.com/bridgecrewio/checkov) - Terraformの静的解析により、セキュリティベストプラクティスを検証
* [cloudsploit/scans :fire::fire::fire::fire:](https://github.com/cloudsploit/scans) - セキュリティリスクの検出
* [iSECPartners/Scout2 :fire::fire::fire::fire:](https://github.com/iSECPartners/Scout2) - セキュリティ監査ツール
* [jordanpotti/AWSBucketDump :fire::fire::fire::fire:](https://github.com/jordanpotti/AWSBucketDump) - S3バケットに興味深いファイルを検出するためのセキュリティツール
* [Netflix/bless :fire::fire::fire::fire::fire:](https://github.com/Netflix/bless) - Lambda関数として動作するSSH証明書認証局
* [Netflix/security_monkey :fire::fire::fire::fire::fire:](https://github.com/Netflix/security_monkey) - ポリシー変更をモニタリングし、不適切な設定にアラートを発行
* [RiotGames/cloud-inquisitor :fire::fire:](https://github.com/RiotGames/cloud-inquisitor) - 所有権およびデータセキュリティを強制するツール
* [salesforce/policy_sentry :fire::fire::fire::fire:](https://github.com/salesforce/policy_sentry/) - IAM最小権限ポリシー生成器
* [sebsto/AWSVPN :fire:](https://github.com/sebsto/AWSVPN) - クラウド上でプライベートVPNサーバーを開始する
* [trailofbits/algo :fire::fire::fire::fire::fire:](https://github.com/trailofbits/algo) - EC2およびその他のクラウドサービス上で個人用IPSECVPNを設定する
* [ttlequals0/autovpn :fire::fire::fire::fire:](https://github.com/ttlequals0/autovpn) - オンデマンドで一時的なOpenVPNエンドポイントを作成する

### Accompanying Repos

AWSリポジトリ：

*ブログ、トレーニングイベント、コンファレンスに伴うリポジトリ。*

* [aws-arch-backoff-simulator :fire:](https://github.com/awslabs/aws-arch-backoff-simulator) - AWSアーキテクチャブログにおけるジャッターおよびバックオフシミュレーター
* [aws-big-data-blog :fire::fire::fire:](https://github.com/awslabs/aws-big-data-blog) - AWS Big Dataブログからのサンプル
* [aws-demo-php-simple-app](https://github.com/awslabs/aws-demo-php-simple-app) - AWS ブログからなる PHP アプリ
* [aws-mobile-sample-wif](https://github.com/awslabs/aws-mobile-sample-wif) - AWS Mobile SDK ブログからのサンプル
* [aws-mobile-self-paced-labs-samples](https://github.com/awslabs/aws-mobile-self-paced-labs-samples) - セルフペースのラボからなる Android サンクゲーム
* [aws-quickstart](https://github.com/aws-quickstart/) - AWS Quick Start の公式リポジトリ
* [aws-spot-labs :fire::fire::fire:](https://github.com/awslabs/aws-spot-labs) - AWS スポットインスタンスを使ったベストプラクティス
* [aws-training-demo :fire:](https://github.com/awslabs/aws-training-demo) - 技術トレーナーのコミュニティからなるデモ
* [java-meme-generator-sample](https://github.com/awslabs/java-meme-generator-sample) - re:Invent 2012 からなるムーブ生成アプリ
* [railsconf2013-tech-demo :fire:](https://github.com/awslabs/railsconf2013-tech-demo) - RailsConf 2013 からなる Seahorse デモ
* [reinvent2013-js-blog-demo](https://github.com/awslabs/reinvent2013-js-blog-demo) - re:Invent 2013 からなるデモブログアプリ
* [reinvent2013-mobile-photo-share](https://github.com/awslabs/reinvent2013-mobile-photo-share) - re:Invent 2014 からなるモバイル写真共有アプリ
* [reinvent2014-scalable-site-management](https://github.com/awslabs/reinvent2014-scalable-site-management) - re:Invent 2014 からなるスケーラブルサイト管理サンプル
* [reinvent2015-dev309](https://github.com/awslabs/reinvent2015-dev309) - re:Invent 2015 からなる大規模メトリクス分析
* [timely-security-analytics](https://github.com/awslabs/timely-security-analytics) - 2015 re:Invent からなるセキュリティアナリティクスサンプル
* [todo-sample-app](https://github.com/awslabs/todo-sample-app) - RailsConf 2014 からなるシンプルな"Todo"アプリ

コミュニティリポジトリ：

* [startup-class/setup :fire::fire:](https://github.com/startup-class/setup) -  Startup Engineering MOOC 用のEC2設定ファイル

### Miscellaneous Repos

AWSリポジトリ：

* [amediamanager](https://github.com/awslabs/amediamanager) - メディアマネージャー
* [aws-hal-client-java](https://github.com/awslabs/aws-hal-client-java) - ハイパーテキストアプリケーション言語向けのJavaクライアント
* [aws-model-validators](https://github.com/awslabs/aws-model-validators) - AWSサービスJSONモデルファイルの検証ツール
* [aws-sdk-js-sample-video-transcoder](https://github.com/awslabs/aws-sdk-js-sample-video-transcoder) - クロスプラットフォームの動画トランスコーダーアプリサンプル
* [simplebeerservice :fire::fire:](https://github.com/awslabs/simplebeerservice) - AWSに接続されたケジラーマシンで、リアルタイムセンサーデータをAWSにストリーミング

コミュニティリポジトリ：

* [bcoe/thumbd :fire::fire:](https://github.com/bcoe/thumbd) - Node.js/ImageMagickベースの画像サムネイルサービス
* [cdkpatterns/serverless :fire::fire::fire::fire:](https://github.com/cdk-patterns/serverless) - AWS CDKで構築されたデプロイ可能なサーバレスアーキテクチャパターン
* [Comcast/cmb :fire::fire:](https://github.com/Comcast/cmb) - 高可用性かつ水平スケーラブルなキューおよび通知サービス
* [convox/rack :fire::fire::fire::fire:](https://github.com/convox/rack) - AWS上のオープンソースPaaS
* [devops-israel/aws-inventory :fire::fire:](https://github.com/devops-israel/aws-inventory) - すべてのAWSリソースを1つのウェブページに表示
* [donnemartin/dev-setup :fire::fire::fire::fire:](https://github.com/donnemartin/dev-setup) - Macでの開発ツールおよびAWSサービスのセットアップ
* [dtan4/terraforming :fire::fire::fire::fire::fire:](https://github.com/dtan4/terraforming) - 既存リソースをTerraformスタイル（tf、tfstate）にエクスポート
* [segmentio/stack :fire::fire::fire::fire::fire:](https://github.com/segmentio/stack) - 生産環境のインフラ構成用のTerraformモジュールセット
* [j2labs/microarmy ](https://github.com/j2labs/microarmy) - マイクロインスタンスをデプロイして協調した攻撃を開始
* [jpillora/grunt-aws :fire:](https://github.com/jpillora/grunt-aws) - Node.JS SDKへのGruntインターフェース
* [jvehent/haproxy-aws :fire::fire:](https://github.com/jvehent/haproxy-aws) - HAProxyでHTTPSスタックを構築するドキュメンテーション
* [localstack/localstack :fire::fire::fire::fire::fire:](https://github.com/localstack/localstack) - 完全に機能するローカルAWSクラウドスタック。オフラインでアプリ開発とテストが可能！
* [meducation/propono :fire::fire:](https://github.com/meducation/propono) - Rubyでの使いやすいプブ／サブサービス
* [mozilla/awsbox :fire::fire::fire:](https://github.com/mozilla/awsbox) - EC2上に構築された軽量PaaS（Nodeアプリのデプロイ用）
* [Netflix/aminator :fire::fire::fire:](https://github.com/Netflix/aminator) - EBS AMIを作成するツール
* [Netflix/archaius :fire::fire::fire::fire::fire:](https://github.com/Netflix/archaius) - 構成管理API用のライブラリ
* [Netflix/asgard :fire::fire::fire::fire::fire:](https://github.com/Netflix/asgard) - アプリケーションデプロイおよびクラウド管理用のウェブインターフェース
* [Netflix/aws-autoscaling :fire::fire:](https://github.com/Netflix/aws-autoscaling) - 自動スケーリングおよびドキュメンテーションのベストプラクティスを活用するツールセット
* [Netflix/chaosmonkey :fire::fire::fire::fire::fire:](https://github.com/Netflix/chaosmonkey) - アプリケーションがランダムなインスタンスの障害を耐えられるようにするリシオントール
* [Netflix/eureka :fire::fire::fire::fire::fire:](https://github.com/Netflix/eureka) - リズリントなミッドレベルロードバランシングおよびフェイルオーバーを実現するサービスレジストリ
* [Netflix/EVCache :fire::fire::fire::fire:](https://github.com/Netflix/EVCache) - 分散型メモリデータストア
* [Netflix/Fenzo :fire::fire::fire:](https://github.com/Netflix/Fenzo) - Mesosフレームワーク向け拡張スケジューラ
* [Netflix/ice :fire::fire::fire::fire::fire:](https://github.com/Netflix/ice) - 使用状況およびコストモニタリングツール
* [Netflix/ribbon :fire::fire::fire::fire::fire:](https://github.com/Netflix/ribbon) - ソフトウェアロードバランサを内蔵したリモートプロシージャ呼び出しライブラリ
* [Netflix/SimianArmy :fire::fire::fire::fire::fire:](https://github.com/Netflix/SimianArmy) - クラウドの運用を最適化するためのツール
* [Netflix/zuul :fire::fire::fire::fire::fire:](https://github.com/Netflix/zuul) - 動的ルーティング、モニタリング、耐障害性、セキュリティなどを提供するエッジサービス
* [niftylettuce/gulp-aws-splash :fire::fire:](https://github.com/niftylettuce/gulp-aws-splash) - オープンソースのLaunchRockの代替品。美しいスプラッシュページを構築可能
* [puppetlabs/puppetlabs-aws :fire:](https://github.com/puppetlabs/puppetlabs-aws) - インフラ構築に必要なリソースを管理するPuppetモジュール
* [mhart/react-server-routing-example :fire::fire:](https://github.com/mhart/react-server-routing-example) - Reactで使用するユニバーサルクライアント/サーバーのルーティングとデータのサンプル
* [Similarweb/finala :fire::fire::fire:](https://github.com/similarweb/finala) - リソースクラウドスキャナーは、無駄なリソースや使用されていないリソースを分析・報告し、不要な費用を削減
* [snowplow/snowplow :fire::fire::fire::fire::fire:](https://github.com/snowplow/snowplow) - Hadoop、Kafka、Kinesis、Redshift、Elasticsearchを活用したエンタープライズクラスのウェブ、モバイル、イベント分析
* [Spinnaker/spinnaker :fire::fire::fire::fire::fire:](https://github.com/Spinnaker/spinnaker) - Asgardの後継品でパイプラインをサポート
* [spulec/moto :fire::fire::fire::fire::fire:](https://github.com/spulec/moto) - Pythonテストでbotoライブラリを簡単にモックできる

## Guides, Books, Documentation, and Training

手順書、トレーニング、白書、ドキュメンテーション、事例研究。

<br/>
<p align="center">
  <img src="http://i.imgur.com/LxYDN5K.png">
</p>
<br/>

### Getting Started Guides

AWS ガイド：

* [Getting Started with AWS](http://docs.aws.amazon.com/gettingstarted/latest/awsgsg-intro/gsg-aws-intro.html)
* [Getting Started Tutorials](http://docs.aws.amazon.com/gettingstarted/latest/awsgsg-intro/gsg-aws-tutorials.html)
    * [Run a Virtual Server](http://docs.aws.amazon.com/gettingstarted/latest/awsgsg-intro/gsg-aws-tutorials.html#d0e2614)
    * [Store Files](http://docs.aws.amazon.com/gettingstarted/latest/awsgsg-intro/gsg-aws-tutorials.html#d0e2683)
    * [Share Digital Media](http://docs.aws.amazon.com/gettingstarted/latest/awsgsg-intro/gsg-aws-tutorials.html#d0e2755)
    * [Deploy a Website](http://docs.aws.amazon.com/gettingstarted/latest/awsgsg-intro/gsg-aws-tutorials.html#d0e2767)
    * [Host a Website (Linux)](http://docs.aws.amazon.com/gettingstarted/latest/awsgsg-intro/gsg-aws-tutorials.html#d0e2836)
    * [Host a Website (Windows)](http://docs.aws.amazon.com/gettingstarted/latest/awsgsg-intro/gsg-aws-tutorials.html#d0e2908)
    * [Run a Database](http://docs.aws.amazon.com/gettingstarted/latest/awsgsg-intro/gsg-aws-tutorials.html#d0e2980)
    * [Analyze Your Data](http://docs.aws.amazon.com/gettingstarted/latest/awsgsg-intro/gsg-aws-tutorials.html#d0e3065)

コミュニティ ガイド：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### General Guides

AWS ガイド：

* [Analyzing Big Data](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-gs.html)
* [Working with the AWS Management Console](http://docs.aws.amazon.com/awsconsolehelpdocs/latest/gsg/getting-started.html)
* [Deploying a Web App Using Elastic Beanstalk](http://docs.aws.amazon.com/gettingstarted/latest/deploy/overview.html)
* [Hosting a Web App](http://docs.aws.amazon.com/gettingstarted/latest/wah-linux/web-app-hosting-intro.html)
* [Hosting a .NET Web App](http://docs.aws.amazon.com/gettingstarted/latest/wah/web-app-hosting-intro.html)
* [Hosting a Static Website](http://docs.aws.amazon.com/gettingstarted/latest/swh/website-hosting-intro.html)
* [Quick Start Deployment Guides](https://aws.amazon.com/documentation/quickstart/)

コミュニティガイド：

* [Open Guide to AWS :fire::fire::fire::fire::fire:](https://github.com/open-guides/og-aws)

### Books

* Amazon Web Services in Action [Manning](https://www.manning.com/books/amazon-web-services-in-action) または [Amazon.com](http://amzn.com/1617292885)
* AWS Lambda in Action [Manning](https://www.manning.com/books/aws-lambda-in-action) または [Amazon.com](http://amzn.com/1617293717) - [Code Repo :fire::fire:](https://github.com/danilop/AWS_Lambda_in_Action)

### Whitepapers

* [AWS Well-Architected Framework](https://d0.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf)
* [Whitepapers](https://aws.amazon.com/whitepapers/)

### Documentation

* [Documentation](https://aws.amazon.com/documentation/)
* [AWS Billing and Cost Management](https://aws.amazon.com/documentation/account-billing/)
* [AWS Marketplace](https://aws.amazon.com/documentation/marketplace/)
* [AWS Support](https://aws.amazon.com/documentation/aws-support/)
* [AWS General Reference](http://docs.aws.amazon.com/general/latest/gr/)
* [AWS Glossary](http://docs.aws.amazon.com/general/latest/gr/glos-chap.html)

### Training

* [Training and Certification](https://aws.amazon.com/training/)
* [Webinars](https://aws.amazon.com/about-aws/events/)

### Case Studies: Powered by AWS

* [Adobe](https://aws.amazon.com/solutions/case-studies/adobe/)
* [AdRoll](https://aws.amazon.com/solutions/case-studies/adroll/)
* [Airbnb](https://aws.amazon.com/solutions/case-studies/airbnb/)
* [Autodesk](https://aws.amazon.com/solutions/case-studies/autodesk/)
* [Citrix](https://aws.amazon.com/solutions/case-studies/citrix/)
* [Comcast](https://aws.amazon.com/solutions/case-studies/comcast/)
* [Coursera](https://aws.amazon.com/solutions/case-studies/coursera/)
* [Docker](https://aws.amazon.com/solutions/case-studies/docker/)
* [Dow Jones](https://aws.amazon.com/solutions/case-studies/dow-jones/)
* [Dropbox](https://www.dropbox.com/)
* [Dropcam](https://aws.amazon.com/solutions/case-studies/dropcam/)
* [Expedia](https://aws.amazon.com/solutions/case-studies/expedia/)
* [Foursquare](https://aws.amazon.com/solutions/case-studies/foursquare/)
* [IMDb](https://aws.amazon.com/solutions/case-studies/imdb/)
* [Instrumental](https://instrumentalapp.com/blog/aws-kinesis/)
* [Intuit](https://aws.amazon.com/solutions/case-studies/soasta-intuit/)
* [Johnson & Johnson](https://aws.amazon.com/solutions/case-studies/johnson-and-johnson/)
* [Lionsgate](https://aws.amazon.com/solutions/case-studies/lionsgate/)
* [mlbam](https://aws.amazon.com/solutions/case-studies/major-league-baseball-mlbam/)
* [NASA](https://aws.amazon.com/solutions/case-studies/nasa-jpl-curiosity/)
* [Netflix](https://aws.amazon.com/solutions/case-studies/netflix/)
* [Nike](https://web.archive.org/web/20150910200649/http://aws.amazon.com/solutions/case-studies/nike/)
* [Nokia](https://web.archive.org/web/20161210062336/https://aws.amazon.com/solutions/case-studies/nokia/)
* [PBS](https://aws.amazon.com/solutions/case-studies/pbs/)
* [Pfizer](https://web.archive.org/web/20161210034734/https://aws.amazon.com/solutions/case-studies/pfizer/)
* [Philips](https://aws.amazon.com/solutions/case-studies/philips/)
* [Reddit](https://web.archive.org/web/20150905070945/https://aws.amazon.com/solutions/case-studies/reddit/)
* [Samsung](https://aws.amazon.com/solutions/case-studies/samsung/)
* [Siemens](https://aws.amazon.com/solutions/case-studies/siemens/)
* [Slack](https://aws.amazon.com/solutions/case-studies/slack/)
* [Spotify](https://web.archive.org/web/20180608043124/https://aws.amazon.com/solutions/case-studies/spotify/)
* [Swiftkey](https://web.archive.org/web/20160410051253/https://aws.amazon.com/solutions/case-studies/swiftkey/)
* [The Weather Company](https://aws.amazon.com/solutions/case-studies/the-weather-company/)
* [Ticketmaster](https://aws.amazon.com/solutions/case-studies/ticketmaster/)
* [Time Inc](https://aws.amazon.com/solutions/case-studies/time-inc/)
* [Twilio](https://aws.amazon.com/solutions/case-studies/twilio/)
* [U.S. Department of State](https://aws.amazon.com/solutions/case-studies/exchangesconnect/)
* [Ubisoft](https://aws.amazon.com/solutions/case-studies/ubisoft/)
* [Yelp](https://aws.amazon.com/solutions/case-studies/yelp-docker/)
* [Zillow](https://aws.amazon.com/solutions/case-studies/zillow/)

## Social

*ブログ、ディスカッショングループ、会議、およびソーシャルメディア。*

<br/>
<p align="center">
  <img src="http://i.imgur.com/kRRBa1e.png">
</p>
<br/>

### Blogs

AWS ブログ：

* [Official Blog](https://aws.amazon.com/blogs/aws/)
    * [Brasil](https://aws.amazon.com/pt/blogs/aws-brasil/)
    * [China](https://aws.amazon.com/cn/blogs/china/)
    * [Germany](https://aws.amazon.com/de/blogs/germany/)
    * [Japan](https://aws.amazon.com/jp/blogs/news/)
    * [Korea](http://aws.amazon.com/ko/blogs/korea/)
* [DevOps](https://aws.amazon.com/blogs/devops/)
* [Architecture](https://aws.amazon.com/blogs/architecture/)
* [Big Data](https://aws.amazon.com/blogs/big-data/)
* [Compute](https://aws.amazon.com/blogs/compute/)
* [Mobile](https://aws.amazon.com/blogs/mobile/)
* [Messaging](https://aws.amazon.com/blogs/messaging-and-targeting/)
* [Java](https://aws.amazon.com/blogs/developer/category/programing-language/java/)
* [PHP](https://aws.amazon.com/blogs/developer/category/programing-language/php/)
* [Ruby](https://aws.amazon.com/blogs/developer/category/programing-language/ruby/)
* [.NET](https://aws.amazon.com/blogs/developer/category/programing-language/dot-net/)
* [Security](https://aws.amazon.com/blogs/security/)
* [Startup](https://medium.com/aws-activate-startup-blog)
* [Partner Network](https://aws.amazon.com/blogs/apn/)
* [SAP](https://aws.amazon.com/blogs/awsforsap/)

コミュニティブログ：

* [All Things Distributed](http://www.allthingsdistributed.com/) - ウェンナーヴォーゲル、AWS CTO
* [Things I Like...](http://jeff-barr.com/) - ジェフバール、AWS首席エヴァンゲリスト
* [Netflix Tech Blog](http://techblog.netflix.com/)
* [A Curated List of Engineering Blogs](https://github.com/kilimchoi/engineering-blogs)
* [AWS Geek](https://www.awsgeek.com/)

### Twitter Influencers

AWS ツイート：

* [@awscloud](https://twitter.com/awscloud) - 公式Twitterアカウント
* [@AWS_Partners](https://twitter.com/AWS_Partners)
* [@AWSIdentity](https://twitter.com/AWSIdentity)
* [@AWSMarketplace](https://twitter.com/AWSMarketplace)
* [@AWSreInvent](https://twitter.com/AWSreInvent) - re:Inventの公式Twitterアカウント
* [@AWSStartups](https://twitter.com/AWSStartups)
* [@ajassy](https://twitter.com/ajassy) - アンディ・ジャシー：副社長
* [@Ianmmmm](https://twitter.com/Ianmmmm) - イアン・マスギングハム - 技術エヴァンゲリスト
* [@jeffbarr](https://twitter.com/jeffbarr) - ジェフ・バール：エヴァンゲリスト
* [@mndoci](https://twitter.com/mndoci) - ディープアク・シング：EC2最高責任者
* [@mza](https://twitter.com/mza) - マット・ウッド：製品戦略
* [@Werner](https://twitter.com/Werner) - ヴェルナー・ヴォルクス：CTO
* [Community heroes, Evangelists, etc](https://twitter.com/awscloud/lists)

コミュニティ ツイート：

* [@kennwhite](https://twitter.com/kennwhite)
* [@esh](https://twitter.com/esh)
* [@garnaat](https://twitter.com/garnaat)
* [@quinnypig](https://twitter.com/quinnypig)
* [@awsgeek](https://twitter.com/awsgeek)

### Facebook Pages

AWS ページ：

* [amazonwebservices](https://www.facebook.com/amazonwebservices) - 公式Facebookページ
* [awsreinvent](https://www.facebook.com/awsreinvent) - re:Inventの公式Facebookページ

コミュニティ ページ：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

### YouTube Channels

AWS チャネル：

* [AmazonWebServices](https://www.youtube.com/user/AmazonWebServices)
* [AWSDeutsch](https://www.youtube.com/user/AWSAktuell)
* [AWSJapan](https://www.youtube.com/user/AmazonWebServicesJP)
* [AWSKorea](https://www.youtube.com/user/AWSKorea)
* [AWSLatinAmerica](https://www.youtube.com/channel/UCvaUAVzIIGsRNlUDWkQFCeA)
* [AWSTutorialSeries](https://www.youtube.com/user/awstutorialseries)
* [AWSWebinars](https://www.youtube.com/user/AWSwebinars)

コミュニティ チャネル：

* [Backspace Academy](https://www.youtube.com/channel/UCav3fsasRc5VOqvZiT5avgw)
* [Cloud Academy](https://www.youtube.com/channel/UCeRY0LppLWdxWAymRANTb0g/videos)
* [Linux Academy](https://www.youtube.com/user/pineheadtv/playlists)

### LinkedIn Groups

AWS ページ：

* [Amazon Web Services](https://www.linkedin.com/company/amazon-web-services)

コミュニティ グループ：

* [Amazon AWS Architects](https://www.linkedin.com/grp/home?gid=4387417)
* [Amazon AWS Architects, Engineers, Developers, Consultants, Entrepreneurs Experts](https://www.linkedin.com/grps?gid=3748455)
* [Amazon Web Services (AWS) for Business](https://www.linkedin.com/grps?gid=5122002)
* [Amazon Web Services Architects](https://www.linkedin.com/grps?gid=4233997)
* [Amazon Web Services Community Network](https://www.linkedin.com/grp/home?gid=49531)
* [Amazon Web Services Enthusiasts](https://www.linkedin.com/grps?gid=2485626)
* [Amazon Web Services Users](https://www.linkedin.com/grps?gid=86137)

### Subreddits

* [/r/aws/](https://www.reddit.com/r/aws/)
* [/r/AWS_cloud/](https://www.reddit.com/r/AWS_cloud/)

### Conferences

AWS セッション：

* [re:Invent](https://reinvent.awsevents.com/) - 年間ユーザー会議。このイベントにはキーノート発表、トレーニングおよび認定の機会、250以上の技術セッション、パートナー展示会、夜間イベントなどがあります
* [Summits](https://aws.amazon.com/summits/) - グローバルな1日イベントは、AWSプラットフォームについて新規顧客に教育し、既存顧客にAWSでの成功に必要な深い技術コンテンツを提供するためのイベントです
* [AWSome Day](https://aws.amazon.com/events/awsome-day/awsome-day-online/) - AWS教育チームの技術指導者が実施するグローバル1日イベントは、ITプロ、開発者および技術マネージャーがAWSクラウドに取り組むためのスタートを学ぶのに最適です

コミュニティ セッション：

* [Contribute](https://github.com/donnemartin/awesome-aws/blob/master/CONTRIBUTING.md)

## Latest KPIs and Stats

*最新のパフォーマンス指標およびその他の興味深い統計データ。*

<br/>
<p align="center">
  <img src="http://i.imgur.com/KP2TmJv.png">
</p>
<br/>

* Over 1 million customers active in past 30 days.<sup>[1](https://www.youtube.com/watch?v=D5-ifl7KJ00)</及
* $7B+ annual revenue run-rate business.<sup>[1](https://www.youtube.com/watch?v=D5-ifl7KJ00)</及
    * 81% year over year revenue growth.<sup>[1](https://www.youtube.com/watch?v=D5-ifl7KJ00)</及
* EC2 usage up 95% year over year.<sup>[1](https://www.youtube.com/watch?v=D5-ifl7KJ00)</及
* S3 data transfer up 120% year over year.<sup>[1](https://www.youtube.com/watch?v=D5-ifl7KJ00)</及
    * S3 holds trillions of objects and regularly peaks at 1.5 million requests per second.<sup>[2](http://highscalability.com/blog/2015/1/12/the-stunning-scale-of-aws-and-what-it-means-for-the-future-o.html)</及
* Database services usage up 127% year over year.<sup>[1](https://www.youtube.com/watch?v=D5-ifl7KJ00)</及
    * $1B annual revenue run-rate business.<sup>[1](https://www.youtube.com/watch?v=D5-ifl7KJ00)</及
* 2 million new EBS volumes created per day.<sup>[4](https://www.youtube.com/watch?v=OuyUbvtgfDk)</及
* Customers have launched more than 15 million Hadoop clusters.<sup>[3](http://www.forbes.com/sites/benkepes/2014/11/25/scale-beyond-comprehension-some-aws-numbers/)</及
* 102Tbps network capacity into a data center.<sup>[2](http://highscalability.com/blog/2015/1/12/the-stunning-scale-of-aws-and-what-it-means-for-the-future-o.html)</及
* 500+ major new features and services launched since 2014.<sup>[1](https://www.youtube.com/watch?v=D5-ifl7KJ00)</及
* All 14 other cloud providers combined have 1/5th the aggregate capacity of AWS.<sup>[2](http://highscalability.com/blog/2015/1/12/the-stunning-scale-of-aws-and-what-it-means-for-the-future-o.html)</及
* Every day, AWS adds enough new server capacity to support all of Amazon's global infrastructure when it was a $7B annual revenue enterprise (in 2004).<sup>[2](http://highscalability.com/blog/2015/1/12/the-stunning-scale-of-aws-and-what-it-means-for-the-future-o.html)</及

## Appendix of Core Services

*公式サービスの付録、サービスカテゴリごとに分類。*

### Services in Plain English

* [Amazon Web Services in Plain English](https://www.expeditedssl.com/aws-in-plain-english) - 面白く、教育的で、コミュニティの貢献です。

### Compute Services

* [Auto Scaling](https://aws.amazon.com/autoscaling/) - ポリシー、スケジュール、ヘルスチェックに基づいてEC2インスタンスの起動または終了を実行します。
* [Batch](https://aws.amazon.com/batch/) - 大規模なバッチジョブを実行します。
* [Blox](https://blox.github.io/) - ECS上でカスタムスケジューラを構築するためのオープンソースプロジェクトです。
* [EC2 Container Service (ECS)](https://aws.amazon.com/ecs/) - EC2インスタンス上でDockerコンテナをサポートします。
* [EC2 Systems Manager](https://aws.amazon.com/ec2/systems-manager/) - EC2およびオンプレミスシステムの簡単な設定と管理を実現します。
* [Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - クラウド上でのアプリケーションの迅速なデプロイと管理を提供します。
* [Elastic Compute Cloud (EC2)](http://aws.amazon.com/ec2/) - Xenを使用したスケーラブルな仮想プライベートサーバーを提供します。
* [Elastic GPUs](https://aws.amazon.com/ec2/Elastic-GPUs/) - EC2インスタンスに低コストのGPUを接続し、グラフィックスアクセラレーションを実現します。
* [Elastic Load Balancing (ELB)](https://aws.amazon.com/elasticloadbalancing/) - 入力されたトラフィックを複数のEC2インスタンスに自動的に分散します。
* [Lambda](https://aws.amazon.com/lambda/) - イベントに応じてコードを実行し、EC2インスタンスを自動的に管理します。
* [Lightsail](https://amazonlightsail.com/) - シンプルな仮想プライベートサーバーの起動と管理を実行します。
* [Virtual Private Cloud (VPC)](https://aws.amazon.com/vpc/) - EC2インスタンスを論理的に分離したセットを作成し、VPN接続を使って既存のネットワークに接続できるようにする

### Networking Services

* [Direct Connect](https://aws.amazon.com/directconnect/) - AWSへの専用接続を提供し、データの通過速度を速く、コストを削減します。
* [Elastic Load Balancing (ELB)](https://aws.amazon.com/elasticloadbalancing/) - 入力されたトラフィックを複数のEC2インスタンスに自動的に分散します。
* [Route 53](https://aws.amazon.com/route53/) - 高度に可用性があり、スケーラブルなドメイン名システム（DNS）ウェブサービスを提供します。
* [Virtual Private Cloud (VPC)](https://aws.amazon.com/vpc/) - EC2インスタンスを論理的に分離したセットを作成し、VPN接続を使って既存のネットワークに接続できるようにする

### Enterprise Applications

* [WorkDocs](https://aws.amazon.com/workdocs/) - 完全に管理され、安全な企業向けストレージおよび共有サービスを提供する
* [WorkMail](https://aws.amazon.com/workmail/) - 管理されたメールおよびカレンダーサービスを提供する
* [WorkSpaces](https://aws.amazon.com/workspaces/) - エンドユーザーにクラウドベースのデスクトップ体験を提供する
* [Workspaces Application Manager (WAM)](http://aws.amazon.com/workspaces/applicationmanager/) - WorkSpacesのデプロイおよび管理を簡易化する

### Analytics Services

* [Athena](https://aws.amazon.com/athena/) - S3上のデータを即時で検索できる
* [Data Pipeline](https://aws.amazon.com/datapipeline/) - サービス間のデータの処理および移動を介してワークロード管理を行う
* [Elastic MapReduce (EMR)](http://aws.amazon.com/elasticmapreduce/) - EC2およびS3上で実行されるHadoopおよびSparkフレームワークをホストする
* [Elasticsearch Service (ES)](https://aws.amazon.com/elasticsearch-service/) - 人気のあるオープンソース検索および分析エンジンであるElasticsearchを管理する
* [Glue](https://aws.amazon.com/glue/) - データストアへのデータの準備およびロードを行う
* [Kinesis](https://aws.amazon.com/kinesis/) - 大規模かつ分散されたデータストリーム上のリアルタイムデータ処理を提供する
* [Kinesis Analytics](https://aws.amazon.com/kinesis/analytics/) - 新しいプログラミングスキルを学ばずとも、ストリーミングデータに対して標準SQLクエリを書ける
* [Kinesis Firehose](https://aws.amazon.com/kinesis/firehose/) - ストリーミングデータをキャプチャし、自動的にS3およびRedshiftにロードする
* [Quicksight](https://aws.amazon.com/quicksight/) - 従来のBIソリューションの1/10のコストでクラウドパワードのビジネスインテリジェンスを提供する
* [Redshift](https://aws.amazon.com/redshift/) - 列ストレージとマルチノードコンピューティングを活用したペタバイト規模のデータウェアハウスを提供。

### Artificial Intelligence

* [Lex](https://aws.amazon.com/lex/) - 声またはテキストを用いて会話型インターフェースを構築する
* [Machine Learning](https://aws.amazon.com/machine-learning/) - 管理された機械学習技術を提供する
* [Polly](https://aws.amazon.com/polly/) - テキストを自然な声に変換する
* [Rekognition](https://aws.amazon.com/rekognition/) - ディープラーニングベースの画像分析

### Management Tools

* [CloudFormation](https://aws.amazon.com/cloudformation/) - その他のリソースのプロビジョニングにファイルベースのインターフェースを提供する
* [CloudTrail](https://aws.amazon.com/cloudtrail/) - すべての活動のログを提供します。
* [CloudWatch](https://aws.amazon.com/cloudwatch/) - AWSクラウドリソースおよびアプリケーションの監視を提供し、EC2から開始します。
* [Command Line Interface (CLI)](https://aws.amazon.com/cli/) - すべてのサービスを管理するためのCLIを提供。
* [Config](https://aws.amazon.com/config/) - すべてのリソースについての詳細なビューを提供します。
* [Management Console (AWS Console)](https://aws.amazon.com/console/) - すべてのサービスを管理するためのウェブベースインターフェースを提供します。
* [OpsWorks](https://aws.amazon.com/opsworks/) - EC2サービスの設定をChefを使用して提供します。
* [Personal Health Dashboard](https://aws.amazon.com/premiumsupport/phd/) - サービスの健康状態に関するあなたのパーソナライズされたビューを提供します。
* [Service Catalog](https://aws.amazon.com/servicecatalog/) - Service Catalogは、IT管理者が承認された製品のポートフォリオを作成・管理・配布し、最終ユーザーがパーソナライズされたポータルから必要な製品にアクセスできるようにします。

### Security and Identity Services

* [Certificate Manager](https://aws.amazon.com/certificate-manager/) - AWSサービスとの使用に必要なSSL/TLS証明書の容易なプロビジョニング、管理、デプロイを提供します。
* [CloudHSM](https://aws.amazon.com/cloudhsm/) - 企業、契約、規制のデータセキュリティに関する適合要件を満たすために、AWSクラウド内に専用のハードウェアセキュリティモジュール（HSM）アプライアンスを使用します。
* [Directory Service](https://aws.amazon.com/directoryservice/) - 既存のオンプレミスMicrosoft Active Directoryに接続するか、またはAWSクラウド内で新しいスタンドアローンディレクトリを設定するための管理サービスを提供します。
* [Identity and Access Management (IAM)](https://aws.amazon.com/iam/) - 認証インフラとしての暗黙的なサービスで、さまざまなサービスへのアクセス認証を実行します。
* [Inspector](https://aws.amazon.com/inspector/) - アプリケーションのセキュリティと適合性を向上させるための自動化されたセキュリ及評価サービスを提供します。
* [Key Management Service (KMS)](https://aws.amazon.com/kms/) - データを暗号化するために使用される暗号鍵の作成と管理を容易にする管理サービスを提供します。
* [Shield](https://aws.amazon.com/shield/) - 管理されたDDoS保護を提供します。
* [WAF](https://aws.amazon.com/waf/) - CloudFrontディストリビューションの監視と管理を行うウェブアプリケーションファイアウォールサービスを提供します。

### Internet of Things Service

* [IoT](https://aws.amazon.com/iot/) - インターネット接続されたもの（センサー、アクチュエータ、埋め込みデバイス、スマート家電など）とAWSクラウド間のMQTTおよびHTTPを介した安全かつ両方向の通信を可能にします。

### Mobile Services

* [API Gateway](https://aws.amazon.com/api-gateway/) - ウェブサービスAPIの公開・維持・セキュリティを提供するサービス。
* [Cognito](https://aws.amazon.com/cognito/) - ユーザー識別情報とデータの同期を提供します。
* [Device Farm](https://aws.amazon.com/device-farm/) - iOS、AndroidおよびFire OSアプリの物理デバイス上でアプリテストを行うサービスを提供します。
* [Mobile Analytics](https://aws.amazon.com/mobileanalytics/) - アプリの使用データを収集・可視化・理解するためのサービス。
* [Mobile Hub](https://aws.amazon.com/mobile/) - モバイルアプリの開発・テスト・監視を支援する統合コンソールを提供。
* [Pinpoint](https://aws.amazon.com/pinpoint/) - モバイルアプリ向けのターゲットプッシュ通知。
* [Simple Notification Service (SNS)](https://aws.amazon.com/sns/) - アプリケーション向けにホストされたマルチプロトコル「プッシュ」メッセージングを提供。

### Storage and Content Delivery Services

* [CloudFront](https://aws.amazon.com/cloudfront/) - リクエスターに近い場所にオブジェクトを配信するためのコンテンツ配信ネットワーク（CDN）。
* [Elastic Block Store (EBS)](https://aws.amazon.com/ebs/) - EC2用の持続的なブロックレベルストレージボリュームを提供。
* [Elastic File System (EFS)](https://aws.amazon.com/efs/) - EC2インスタンス向けのファイルストレージサービス。
* [Glacier](https://aws.amazon.com/glacier/) - コストが低く、長期的にデータを保存できるオプションを提供し、データのアーカイブに適している。
* [Import/Export](https://aws.amazon.com/importexport/) - AWSに大きなデータ量を移動する際の高速化を実現するため、輸送用のポータブルストレージデバイスを活用。
* [Simple Storage Service (S3)](https://aws.amazon.com/s3/) - ウェブサービスベースのストレージを提供。
* [Storage Gateway](https://aws.amazon.com/storagegateway/) - クラウドベースのバックアップを備えたiSCSIブロックストレージ仮想アプライアンス。

### Databases

* [Aurora](https://aws.amazon.com/rds/aurora/) - MySQLおよびPostgreSQLと互換性のある関係データベースで、パフォーマンスが向上。
* [DynamoDB](https://aws.amazon.com/dynamodb/) - SSDをバックアップとして採用した、スケーラブルで低遅延のNoSQLオンラインデータベースサービスを提供。
* [ElastiCache](https://aws.amazon.com/elasticache/) - ウェブアプリ向けのメモリキャッシュを提供（Memcached、Redis）。
* [Redshift](https://aws.amazon.com/redshift/) - 列ストレージとマルチノードコンピューティングを活用したペタバイト規模のデータウェアハウスを提供。
* [Relational Database Service (RDS)](https://aws.amazon.com/rds/) - MySQL、Oracle、SQL Server、PostgreSQL、MariaDBをサポートするスケーラブルなデータベースサーバーを提供。
* [Schema Conversion Tool](https://aws.amazon.com/documentation/SchemaConversionTool/) - OracleまたはMicrosoft SQL ServerデータベースからRDS MySQL DBインスタンスまたはAurora DBクラスタへのデータベーススキーマ変換を支援するアプリ。
* [SimpleDB](https://aws.amazon.com/simpledb/) - 開発者が構造化データに対してクエリを実行できるようにするサービス。

### Application Services

* [API Gateway](https://aws.amazon.com/api-gateway/) - ウェブサービスAPIの公開・維持・セキュリティを提供するサービス。
* [AppStream](https://aws.amazon.com/appstream/) - アプリおよびゲーム向けの柔軟で低遅延のストリーミングサービス。
* [CloudSearch](https://aws.amazon.com/cloudsearch/) - テキストコンテンツの基本的な全文検索とインデックス化を提供。
* [DevPay](https://aws.amazon.com/devpay/) - 請求書およびアカウント管理を提供。
* [Elastic Transcoder (ETS)](https://aws.amazon.com/elastictranscoder/) - S3にホストされた動画の動画変換を提供。
* [Flexible Payments Service (FPS)](https://payments.amazon.com/developer) - マイクロ決済のインターフェースを提供。
* [Simple Email Service (SES)](https://aws.amazon.com/ses/) - 大量送信および取引メール送信を提供。
* [Simple Notification Service (SNS)](https://aws.amazon.com/sns/) - アプリケーション向けにホストされたマルチプロトコル「プッシュ」メッセージングを提供。
* [Simple Queue Service (SQS)](https://aws.amazon.com/sqs/) - ウェブアプリケーション向けにホストされたメッセージキューを提供。
* [Simple Workflow (SWF)](https://aws.amazon.com/swf/) - スケーラブルで頑健なアプリケーションを構築するためのワークフローサービス。
* [Step Functions](https://aws.amazon.com/step-functions/) - 分散アプリケーションのコンポーネントを協調的に制御。

### Developer Tools

* [CodeBuild](https://aws.amazon.com/codebuild/) - コードの構築とテストを提供。
* [CodeCommit](https://aws.amazon.com/documentation/codecommit/) - ホストされたGitバージョン管理サービスを提供。
* [CodeDeploy](https://aws.amazon.com/codedeploy/) - EC2インスタンスへの自動コードデプロイを提供。
* [CodePipeline](https://aws.amazon.com/documentation/codepipeline/) - 継続的デリバリーサービスを提供。
* [Command Line Interface (CLI)](https://aws.amazon.com/cli/) - すべてのサービスを管理するためのCLIを提供。
* [X-Ray](https://aws.amazon.com/xray/) - アプリケーションの分析およびデバッグを提供。

### Miscellaneous Services

* [Fulfillment Web Service](https://aws.amazon.com/about-aws/whats-new/2008/03/19/announcing-amazon-fulfillment-web-service/) - 販売者がAmazonに商品を送受けるための販売者向けプログラムウェブサービスを提供。
* [Mechanical Turk](https://www.mturk.com/mturk/welcome) - 多数の人物が分散して行う小さな仕事の管理を提供。
* [Partner Network (APN)](https://aws.amazon.com/partners/) - パートナーに技術情報および販売・マーケティングサポートを提供し、ビジネス機会を拡大。
* [Product Advertising API](http://docs.aws.amazon.com/AWSECommerceService/latest/GSG/Welcome.html) - 製品データおよび電子商取引機能へのアクセスを提供。

## Credits

[Credits page](https://github.com/donnemartin/awesome-aws/blob/master/CREDITS.md)をチェックしてください。

## Other Awesome Lists

他の素晴らしいリストは[awesome](https://github.com/sindresorhus/awesome)および[awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)にあります。

## Contact Info

問題、質問、またはコメントについて議論したい場合は、自由に連絡してください。

連絡先は私の[GitHub page](https://github.com/donnemartin)にあります。

## License

*このリポジトリに提供しているコードおよびリソースは、オープンソースライセンスに基づいてあなたに提供されています。これは私の個人的なリポジトリであるため、あなたが受け取るコードおよびリソースのライセンスは私から来ていますが、私の雇用主（フェイスブック）からではありません。*

2017年 Donne Martin

クリエイティブ・コモンズ・アトリビューション・4.0・インターナショナル・ライセンス（CC BY 4.0）

http://creativecommons.org/licenses/by/4.0/
