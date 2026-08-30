---
title: "Awesome Terraform"
description: "Terraformを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-shuaibiyy-awesome-terraform-readme-md"
---

# Awesome Terraform

Terraformを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 

- [凡例](#legend)
- [公式リソース](#official-resources)
- [コミュニティ](#community)
- [書籍](#books)
- [学習](#learning-and-studying)
- [アプリ](#apps)
- [チュートリアルとブログ記事](#tutorials-and-blog-posts)
  - [初心者向けガイド](#beginner-guides)
  - [カスタムプロバイダーの作成](#writing-custom-providers)
  - [ハウツー](#how-to)
  - [複数環境の構成](#multi-environment-configuration)
  - [Azure](#azure)
  - [AWS](#aws)
  - [Google Cloud](#google-cloud)
  - [その他](#miscellaneous)
- [コミュニティモジュール](#community-modules)
- [セルフホスト型レジストリ](#self-hosted-registries)
- [マネージドレジストリ](#managed-registries)
- [プロバイダー](#providers)
  - [HashiCorpサポートのプロバイダー](#hashicorp-supported-providers)
  - [ベンダーサポートのプロバイダー](#vendor-supported-providers)
  - [コミュニティプロバイダー](#community-providers)
- [テスト](#testing)
- [ツール](#tools)
  - [CI](#ci)
  - [VS Code拡張](#vs-code-extensions)
- [ライブラリ](#libraries)
- [ボイラープレート](#boilerplates)
- [セルフホスト型Terraformプラットフォーム](#self-hosted-terraform-platforms)
- [マネージドTerraformプラットフォーム :heavy\_dollar\_sign:](#managed-terraform-platforms-heavy_dollar_sign)
- [Terraform Enterprise向けツール](#terraform-enterprise-tooling)
- [動画](#videos)
- [エディタープラグイン](#editor-plugins)
- [ライセンス](#license)

## 凡例

- _terraform >= 0.12_ と非互換 :ghost:
- 開発放棄 :skull:
- 商用 :heavy_dollar_sign:

## 公式リソース

- [Hashicorp Terraform Blog](https://www.hashicorp.com/en/blog/products/terraform)
- [Introduction to Terraform](https://developer.hashicorp.com/terraform/intro)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [Terraform learn](https://developer.hashicorp.com/terraform/tutorials)

## コミュニティ

- [weekly.tf - Terraform Weekly Newsletter](https://www.weekly.tf/) - テラフォームのニュース、オープンソースプロジェクト、発表、およびディスカッションをカバーする週間ニュースレター
- [Complete Terraform documentation as PDF files (Updated nightly)](https://github.com/antonbabenko/terraform-docs-as-pdf) :skull:
- [Terraform AWS Modules](https://github.com/terraform-aws-modules) + [meta-configurations repository](https://github.com/terraform-aws-modules/meta)
- [Terraform Bug Tracker](https://github.com/hashicorp/terraform/issues)
- [Terraform Cheatsheet](https://vivid-badger-c30.notion.site/Terraform-Cheatsheet-352d7b505fb980618d5de73aa086d1d4)
- [Terraform Community Modules](https://github.com/terraform-community-modules)
- [Terraform Twitter Community](https://twitter.com/i/communities/1501688565884928007) 
- [Terraform Discuss](https://discuss.hashicorp.com/c/terraform-core/27)
- [Terraform Provider/Module Registry](https://registry.terraform.io/)
- [Terraform PDF Doc](https://github.com/dohsimpson/terraform-doc-pdf) :skull:
- [Terraform Roadmap](https://roadmap.sh/terraform)
- [The Ultimate Terraform Cheatsheet for DevOps Engineers](https://atulcodes.hashnode.dev/ultimate-terraform-cheatsheet-devops)
- [Terragrunt Reference Architecture](https://github.com/antonbabenko/terragrunt-reference-architecture) :skull:
- [The Claude Agent Skill for Terraform and OpenTofu - testing, modules, CI/CD, and production patterns](https://github.com/antonbabenko/terraform-skill) - Claude CodeによるテラフォームとOpenTofuのスキル — テスト、モジュール設計、CI/CDワークフロー、および生産環境パターン
- [awesome-terraform-compliance](https://github.com/antonbabenko/awesome-terraform-compliance) - テラフォームのコンプライアンスおよびセキュリティに関するツール、フレームワーク、リソースのキュレーションリスト
- 言語別コミュニティ:
  - [Telegram（ウクライナ語コミュニティ）](https://t.me/terraform_ukraine)

## 書籍

- [Big Little Book On Terraform](https://www.amazon.com/Big-Little-Book-Terraform-Omos-ebook/dp/B07PWYPNX8/)
- [Bootstrapping Microservices with Docker, Kubernetes, and Terraform, Second Edition](https://www.manning.com/books/bootstrapping-microservices-second-edition)
- [Deep-Dive Terraform on Azure](https://link.springer.com/book/10.1007/978-1-4842-7328-9)
- [Getting Started with Terraform, 2nd ed.](https://www.amazon.com/Getting-Started-Terraform-production-infrastructure/dp/1788623533/)
- [HashiCorp Infrastructure Automation Certification Guide](https://www.amazon.com/HashiCorp-Infrastructure-Automation-Certification-Guide-ebook/dp/B092KM7LXC/)
- [IaC starting with Terraform (Korean)](https://product.kyobobook.co.kr/detail/S000202478097)
- [Infrastructure as Code](https://www.oreilly.com/library/view/infrastructure-as-code/9781491924334/)
- [Patterns and Practices for Infrastructure as Code: With examples in Python and Terraform](https://www.manning.com/books/infrastructure-as-code-patterns-and-practices)
- [Terraform Best Practices](https://www.terraform-best-practices.com/) - [open-source ebook](https://github.com/antonbabenko/terraform-best-practices)
- [Terraform Cookbook](https://www.amazon.com/Terraform-Cookbook-Efficiently-Infrastructure-platforms/dp/1800207557)
- [Terraform for Ops e-book](https://www.terraformforops.com)
- [Terraform in Action](https://www.manning.com/books/terraform-in-action)
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth)
- [Terraform: Up & Running, 3rd ed.](https://www.terraformupandrunning.com/)
- [The Terraform Book](https://terraformbook.com/)

## 学習

- [Terraform Academy](https://www.terraformacademy.app) - インタラクティブなTerraform／IaC学習プラットフォーム。実践型ラボ、認定準備（HashiCorp、AWS、GCP、Azure、Docker、Kubernetes、GitOps）、AIによるコーチング、進捗の追跡が可能。詳しくは下記の [SRE Pro Tips blog](https://www.terraformacademy.app/protips/?cat=sre-pro-tips) およびモバイル/PWAアプリをご覧ください。
- [compliance.tf docs](https://compliance.tf/docs/) - SOC 2、PCI DSS、HIPAA、NIST 800-53、35以上他のコンプライアンス制御の無料Terraform実装 — 適切なインフラコードを書くためのオープンリファレンス。

## アプリ

外出先でもTerraformを学習・利用できるモバイル、デスクトップ、PWAアプリです。

- [Terraform Academy — iOS](https://apps.apple.com/us/app/terraform-academy/id6745738634) - テラフォームアカデミーのインタラクティブ学習プラットフォーム用のネイティブiOSアプリ。実践実験、認定準備（HashiCorp、AWS、GCP、Azure、Docker、Kubernetes、GitOps）、AIコーチング、およびデバイス間の進捗同期機能を備えている
- [Terraform Academy — Android](https://play.google.com/store/apps/details?id=com.terraformacade1.app) - テラフォームアカデミー学習プラットフォーム用のネイティブAndroidアプリ。iOSおよびウェブ版と同様の実践実験、認定準備、AIコーチングを提供
- [Terraform Academy — PWA / Web App](https://www.terraformacademy.app/) - テラフォームアカデミーのインストール可能なプログレッシブウェブアプリ版。オフラインで動作し、どのプラットフォームにもホームスクリーンにインストール可能であり、モバイルアプリとの進捗同期が可能

## チュートリアルとブログ記事

### 初心者向けガイド

- [A Comprehensive Guide to Terraform](https://www.gruntwork.io/blog/a-comprehensive-guide-to-terraform) - 『Terraform: Up & Running』の著者が執筆したブログ記事シリーズ。読者がテラフォームの基礎から実際の現場での使用までを学べる
- [Using Terraform for Cloud Deployments - Part 1](https://dev.to/koenighotze/using-terraform-for-cloud-deployments---part-1) - EC2インスタンスのプロビジョニング
- [Hello, world: The Fargate/Terraform tutorial I wish I had](https://section411.com/2019/07/hello-world/) - ゼロからECS Fargateクラスタを構築するためのブログ記事
- [Terraform Security Guide](https://sysdig.com/blog/terraform-security-best-practices/) - テラフォームを使用する際のセキュリティベストプラクティスを説明するブログ記事
- [Building a SaaS API? Don't Forget Your Terraform Provider](https://www.speakeasy.com/blog/build-terraform-providers) - なぜテラフォームプロバイダーを作るべきか
- [Complete Terraform Course in French (Free)](https://blog.stephane-robert.info/docs/infra-as-code/provisionnement/terraform/introduction/) - フランス語で提供される、初心者から上級者までをカバーする総合的な無料コース。実践的な例とベストプラクティスを含む

### カスタムプロバイダーの作成

- [Creating custom terraform providers](https://blog.pelo.tech/creating-custom-terraform-providers-341311823fa2) - カスタムプロバイダーを作成するためのガイド
- [Writing a Terraform provider](https://web.archive.org/web/20220516140659/http://blog.jfabre.net/2017/01/22/writing-terraform-provider/) - カスタムプロバイダーを作成するためのガイド
- [カスタムプロバイダーの作成](https://developer.hashicorp.com/terraform/plugin/sdkv2) - カスタムプロバイダーを作成するための公式ドキュメンテーション
- [Terraform Provider Code generation](https://www.speakeasy.com/docs/terraform/create-terraform) - OpenAPI仕様（ベンダーサポート）からテラフォームプロバイダーを生成するためのガイド（ベンダーサポート）

### ハウツー

- [How To Write OPA for Terraform](https://scalr.com/learning-center/opa-series-part-1-open-policy-agent-and-terraform) - Open Policy Agentを使用して、テラフォームのプランにポリシーを評価・強制する方法
- [Deploying Discourse with Terraform](https://www.hashicorp.com/en/blog/deploying-discourse-with-terraform) - 1コマンドでDigitalOcean上でDiscourseの実行インスタンスを構築する方法を示す
- [Deploying Django to AWS ECS with Terraform](https://testdriven.io/blog/deploying-django-to-ecs-with-terraform/) - DjangoアプリをECS上で実行するために必要なAWSインフラを構築するためのテラフォームの使用方法を解説
- [Easily Deploy A Seneca Microservice to ECS with Wercker and Terraform: Part I](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-i/) - , [II](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-ii/) & [III](https://chiefy.github.io/easily-deploy-a-seneca-microservice-to-ecs-with-wercker-and-terraform-part-iii/) - マイクロサービスのデプロイパイプラインにTerraformが組み込まれる様子を示しています。
- [Terraform for a Highly Available VPN between AWS and Azure](https://web.archive.org/web/20210616132857/https://deployeveryday.com/2020/04/13/vpn-aws-azure-terraform.html) - AWSとAzure間の高可用性VPNをデプロイするためのテラフォームコード
- [Terraforming 1Password](https://1password.com/blog/terraforming-1password) - 1PasswordがCloudFormationからTerraformに移行した方法
- [Tutorial: How to Use Terraform to Deploy OpenStack Workloads](https://web.archive.org/web/20170611135511/http://www.stratoscale.com/blog/openstack/tutorial-how-to-use-terraform-to-deploy-openstack-workloads/) - OpenStack Terraformプロバイダーを使ってWebサーバーをデプロイする際の簡単さを示す
- [Zero Downtime Updates with HashiCorp Terraform](https://www.hashicorp.com/en/blog/zero-downtime-updates-with-terraform) - インフラのゼロダウンタイムを確保する方法
- [Google Cloud Platform for 10$ a month using terraform](https://github.com/nufailtd/terraform-budget-gcp) - Terraformを使って安全なGoogle Kubernetesクラスタ、Google Cloud Runサービスおよびその他のインフラ要素を構築する方法を、月額 [10$](https://nufailtd.github.io/budget-gcp/) 未満で示しています。
- [Infracost + Terraform + GitHub Actions = Automate Cloud Cost Management](https://medium.com/better-programming/infracost-terraform-github-actions-automate-cloud-cost-management-a62b329f2834) - Infracostをガードレールとして活用して、Terraform開発中にクラウドコストを管理する方法
- [How To Wrap Your Terraform Provider for Pulumi](https://www.speakeasy.com/blog/pulumi-terraform-provider) - TerraformプロバイダーをPulumi向けに整備する方法
- [How to Build an AWS Account Vending Machine](https://medium.com/@StackGuardian/how-to-build-an-aws-account-vending-machine-by-stackguardian-f2895e35a27b) - StackGuardianによってオーケストレーションされたTerraformスタックを用いて、AWSアカウントのライフサイクルを自動化し、SSMベースの割り当て、EventBridgeによるクリーンアップトリガー、Tirithポリシーの実行を行う

### 複数環境の構成

- [Terraform Design Patterns: the Terrafile](https://bensnape.com/2016/01/14/terraform-design-patterns-the-terrafile/) - Terraformプロジェクト内のTerraformモジュールとそのバージョンをTerrafileで管理する方法
- [Terraform, VPC, and why you want a tfstate file per env](https://charity.wtf/2016/03/30/terraform-vpc-and-why-you-want-a-tfstate-file-per-env/) - 複数環境を含む大きなプロジェクトでTerraformを使用する際の注意点とそれらを回避する方法
- [Using Pipelines to Manage Environments with Infrastructure as Code](https://medium.com/@kief/https-medium-com-kief-using-pipelines-to-manage-environments-with-infrastructure-as-code-b37285a1cbf5) - 環境間のインフラ変更を処理するためのパイプラインの構築方法についてのさまざまなアプローチを説明

### Azure

- [Learning HashiCorp Terraform](https://web.archive.org/web/20201108000713/https://www.g10s.io/hashicorp-terraform/) - Azureに関するガイド
- [New Terraform Azure Automation Resources](https://bgelens.nl/terraform-automation-resources/) - Azure Automation
- [Terraforming Azure PaaS](https://devkimchi.com/2019/01/21/terraforming-azure-paas/) - Azure上でPaaSリソースをデプロイする方法

### AWS

- [AWS Lambda the Terraform Way](https://github.com/nsriram/lambda-the-terraform-way) - AWS Lambdaの詳細な理解（関数の実行を越えて）をTerraformを使って行う。また、S3、API Gateway、DynamoDB、Kinesis、SQSとの統合ガイドも含まれる
- [Managing AWS Lambda Functions with Terraform](https://spacelift.io/blog/terraform-aws-lambda) - AWS Lambdaがどのような用途に使われるか、そしてTerraformを使ってAWS Lambda関数を管理する方法

### Google Cloud

- [Managing infrastructure as code with Terraform, Cloud Build, and GitOps](https://docs.cloud.google.com/docs/terraform/resource-management/managing-infrastructure-as-code) - Terraform、Cloud Build、GitOpsを用いてインフラコードをセットアップ・管理する方法
- [Getting started with Terraform on Google Cloud](https://docs.cloud.google.com/docs/terraform/create-vm-instance) - Google Cloud上でVMを作成し、基本的なPython Flaskサーバーを開始する方法
- [Managing Cloud Infrastructure with Terraform](https://www.skills.google/course_templates/746) - Terraformを使ってKubernetes Load Balancer Serviceをデプロイ、TerraformでHTTPSベースのコンテンツベースロードバランサーを構築、Terraformによるモジュラーロードバランシング（地域ロードバランサー、カスタムプロバイダー、Cloud SQL）、Google CloudとAWS間のVPNをTerraformで構築する方法
- [Hashicorp Terraform Tutorials for Google Cloud](https://developer.hashicorp.com/terraform/tutorials/gcp-get-started) - Google Cloud上でTerraformを始める方法
- [IAC - Terraform and Terragrunt on Google Cloud](https://www.academeez.com/courses/terraform) - Terraform/OpenTofuとTerragruntを使ってGoogle Cloud上でインフラを構築するオープンソースMITライセンスのコース
- [Self-host n8n on Google Cloud Run](https://github.com/datawranglerai/self-host-n8n-on-gcr) - Terraformによる構成と、Cloud Run上でn8nワークフロー自動化をデプロイするためのガイド（Cloud SQL、Secret Manager、オプションのRedisによるQueue Mode）

### その他

- [Sharing data between Terraform configurations](https://web.archive.org/web/20230927082422/https://jamesmckay.net/2016/09/sharing-data-between-terraform-configurations/) - Terraformの構成間でデータを共有する方法を示す.
- [The Segment AWS Stack](https://web.archive.org/web/20250322120753/https://segment.com/blog/the-segment-aws-stack/) - Terraformで構築されたインフラが [The Million Dollar Engineering Problem](https://segment.com/blog/the-million-dollar-eng-problem/) で解決した問題の裏側を示しています。 [Segment](https://segment.com/)
- [Top 3 Terraform Testing Strategies for Ultra-Reliable Infrastructure-as-Code](https://www.contino.io/insights/top-3-terraform-testing-strategies-for-ultra-reliable-infrastructure-as-code)
- [Two Weeks with Terraform](https://charity.wtf/2016/02/23/two-weeks-with-terraform/) - Terraformを実際に使用した経験と、運用上の知見をまとめたもの.
- [Terraform: Beyond the Basics with AWS](https://aws.amazon.com/blogs/apn/terraform-beyond-the-basics-with-aws/) - Terra及でサンプルAWSアーキテクチャをプロビジョニングするデモの説明.
- [Terraform cost estimation](https://github.com/antonbabenko/terraform-cost-estimation) - Terraformプラン（0.12以降）またはステートファイルから匿名で無料のコスト見積もり。ブラウザでも [terraform-cost-estimation.com](https://terraform-cost-estimation.com) で利用可能です。
- [How to Debug Terraform Projects: Tutorial](https://spacelift.io/blog/terraform-debug)

## コミュニティモジュール

ここにないコミュニティモジュールは[Terraform Module Registry](https://registry.terraform.io/)を参照してください。

- [nis2shield/infrastructure](https://github.com/nis2shield/infrastructure) - 自動化されたNIS2準拠と安全なインフラデプロイメントを実現するTerraformモジュール.
- [rancher-terraform-digitalocean](https://github.com/lunagt/rancher-terraform-digitalocean) - Digitalocean上のRancherサーバー.
- [segmentio/stack](https://github.com/segmentio/stack) - AWS、Docker、ECSを用いたプロダクションインフラの構成. :skull:
- [terraform-aws-account-lookup](https://github.com/be-bold/terraform-aws-account-lookup) - このTerraformモジュールは、AWSアカウントをクエリし、さまざまなマッピングまたは完全リストとして出力できるほか、アカウントリストに検索フィルタを適用し、既存のタグでアカウントをグループ化することができる（サブモジュールを使用）.
- [terraform-aws-alb](https://github.com/terraform-aws-modules/terraform-aws-alb) - AWS上でのアプリケーションロードバランサーの作成（検証済みモジュール）.
- [terraform-aws-appconfig](https://github.com/terraform-aws-modules/terraform-aws-appconfig) - AWS上でのAWS AppConfigリソースの作成.
- [terraform-aws-atlantis](https://github.com/terraform-aws-modules/terraform-aws-atlantis) - AWS Fargate上で実行する [Atlantis](https://runatlantis.io) 用のTerraform構成の作成。GitHub、GitLab、BitBucketがサポートされている.
- [terraform-aws-autoscaling](https://github.com/terraform-aws-modules/terraform-aws-autoscaling) - AWS上での自動スケーリンググループと起動設定の作成（検証済みモジュール）.
- [terraform-aws-customer-gateway](https://github.com/terraform-aws-modules/terraform-aws-customer-gateway) - AWS上の顧客ゲートウェイの作成.
- [terraform-aws-datadog-forwarders](https://github.com/terraform-aws-modules/terraform-aws-datadog-forwarders) - AWS上でログ／メトリクスをDatadogに転送するためのリソースの作成.
- [terraform-aws-dms](https://github.com/terraform-aws-modules/terraform-aws-dms) - AWS上でのAWS DMS（データベース移行サービス）リソースの作成.
- [terraform-aws-dynamodb-table](https://github.com/terraform-aws-modules/terraform-aws-dynamodb-table) - AWS上のDynamoDBテーブルの作成.
- [terraform-aws-ec2-instance](https://github.com/terraform-aws-modules/terraform-aws-ec2-instance) - AWS上のEC2インスタンスの作成.
- [terraform-aws-ecr](https://github.com/cloudposse/terraform-aws-ecr) - AWS ECR上のDockerコンテナレジストリの管理.
- [terraform-aws-ecs](https://github.com/terraform-aws-modules/terraform-aws-ecs) - AWS上のAWS ECSリソースの作成.
- [terraform-aws-efs](https://github.com/cloudposse/terraform-aws-efs) - EFSファイルシステムの定義.
- [terraform-aws-eks](https://github.com/terraform-aws-modules/terraform-aws-eks) - AWS上のエラスティックキーテンプレートサービスの作成（非常に人気のあるモジュール）.
- [terraform-aws-elb](https://github.com/terraform-aws-modules/terraform-aws-elb) - AWS にエラスティックロードバランサを構築（検証済みモジュール）
- [terraform-aws-eventbridge](https://github.com/terraform-aws-modules/terraform-aws-eventbridge) - AWS に EventBridge リソースを構築
- [terraform-aws-jenkins-ha-agents](https://github.com/neiman-marcus/terraform-aws-jenkins-ha-agents) - EC2ベースの Jenkins 部署（HA（スポット）エージェント）。EFS で実行し、変更不可能性を確保。完全にカスタマイズ可能で、適切なデフォルト値を提供。
- [terraform-aws-jenkins](https://github.com/cloudposse-archives/terraform-aws-jenkins) - Jenkins で Docker イメージを構築し、ECR リポジトリに保存し、Docker スタックを実行する Elastic Beanstalk にデプロイ。 :skull:
- [terraform-aws-key-pair](https://github.com/cloudposse/terraform-aws-key-pair) - SSH キーペア（公開/秘密鍵）を自動生成
- [terraform-aws-lambda-auto-package](https://github.com/nozaq/terraform-aws-lambda-auto-package) - Lambda 関数を定義する Terraform モジュール。ソースファイルが自動的に構築・パッケージ化され、Lambda 部署に使用。
- [terraform-aws-lambda](https://github.com/terraform-aws-modules/terraform-aws-lambda) - Terraform モジュール。依存関係を構築・パッケージ化し、AWS Lambda リソースを無数の組み合わせで作成。
- [terraform-aws-managed-service-prometheus](https://github.com/terraform-aws-modules/terraform-aws-managed-service-prometheus) - AWS に Prometheus（AMP）管理サービスリソースを構築
- [terraform-aws-modules](https://github.com/terraform-aws-modules) - コミュニティがサポートする Terraform AWS モジュールのコレクション（公式 AWS モジュールを含む）
- [terraform-aws-msk-kafka-cluster](https://github.com/terraform-aws-modules/terraform-aws-msk-kafka-cluster) - AWS に MSK（Kafka の管理ストリーミング）リソースを構築
- [terraform-aws-notify-slack](https://github.com/terraform-aws-modules/terraform-aws-notify-slack) - SNS テーマと Lambda 関数を作成し、Slack に通知を送信
- [terraform-aws-postgresql-rds](https://github.com/azavea/terraform-aws-postgresql-rds) - RDS に PostgreSQL を構築
- [terraform-aws-rds-aurora](https://github.com/terraform-aws-modules/terraform-aws-rds-aurora) - AWS に Aurora クラスタリソースを構築（検証済みモジュール）
- [terraform-aws-rds-proxy](https://github.com/terraform-aws-modules/terraform-aws-rds-proxy) - AWS に RDS プロキシリソースを構築
- [terraform-aws-rds](https://github.com/terraform-aws-modules/terraform-aws-rds) - AWS に RDS リソースを構築（検証済みモジュール）
- [terraform-aws-redshift](https://github.com/terraform-aws-modules/terraform-aws-redshift) - AWS に Redshift リソースを構築
- [terraform-aws-route53](https://github.com/terraform-aws-modules/terraform-aws-route53) - AWS に Route53 リソースを構築
- [terraform-aws-s3-bucket](https://github.com/terraform-aws-modules/terraform-aws-s3-bucket) - AWS に S3 バケットリソースを構築
- [terraform-aws-secure-baseline](https://github.com/nozaq/terraform-aws-secure-baseline) - CIS Amazon Web Services Foundations に基づく安全なベースライン設定を AWS アカウントに設定
- [terraform-aws-security-group](https://github.com/terraform-aws-modules/terraform-aws-security-group) - AWS に EC2-VPC セキュリティグループを構築（検証済みモジュール）
- [terraform-aws-ssh-bastion-service](https://github.com/joshuamkite/terraform-aws-ssh-bastion-service) - AWS に SSH バスティオンをステートレスサービスとしてデプロイするための Terraform プランを実行する
- [terraform-aws-transit-gateway](https://github.com/terraform-aws-modules/terraform-aws-transit-gateway) - AWS にトランジットゲートウェイリソースを作成する
- [terraform-aws-vpc](https://github.com/terraform-aws-modules/terraform-aws-vpc) - AWS に VPC リソースを作成する（検証済みで非常に人気のあるモジュール）
- [terraform-aws-vpn-gateway](https://github.com/terraform-aws-modules/terraform-aws-vpn-gateway) - AWS に VPN ゲートウェイリソースを作成する
- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Microsoft が所有する公式な Azure 用検証済み Terraform モジュールコレクション。一貫したインフラデプロイに必要な WAF のベストプラクティスを定義している
- [terraform-azurerm-aks](https://github.com/kjanshair/terraform-azurerm-aks) - Azure に AKS リソースを作成する
- [terraform-azurerm-iis](https://github.com/ghostinthewires/terraform-azurerm-iis-install) - Azure VM インスタンスに IIS サーバーをインストールする
- [terraform-azurerm-mysql](https://github.com/foreverXZC/terraform-azurerm-mysql) - Azure に MySQL データベースを作成する
- [terraform-azurerm-redis](https://github.com/rahulkhengare/terraform-azurerm-redis) - Azure に Redis を作成する
- [terraform-azurerm-sqlserver](https://github.com/metadevpro/terraform-azurerm-sqlserver-seed) - Azure に SQL Server データベースを作成する
- [terraform-cloudflare-maintenance](https://github.com/adinhodovic/terraform-cloudflare-maintenance) - Cloudflare Workers を使用してメンテナンスページを作成するモジュール
- [terraform-digitalocean-droplet](https://registry.terraform.io/modules/terraform-digitalocean-modules/droplet/digitalocean/latest) - DigitalOcean Droplets および関連リソースを管理するための Terraform モジュール
- [terraform-ecs-jenkins](https://github.com/shuaibiyy/terraform-ecs-jenkins) - Terraform を使って AWS ECS に Jenkins をプロビジョニングする
- [terraform-gce-atlantis](https://github.com/runatlantis/terraform-gce-atlantis) - Google Compute Engine で を実行するための Terraform 設定を作成する [Atlantis](https://runatlantis.io)
- [terraform-google-project-factory](https://github.com/terraform-google-modules/terraform-google-project-factory) - 共有 VPC、IAM、API などを使った、Google Cloud Platform のプロジェクト作成と構成（意見に基づく）
- [terraform-kubestack](https://github.com/kbst/terraform-kubestack) - Kubestack は、Kubernetes プラットフォームエンジニアリングチームが、1つの Terraform コードベースでクラウドネイティブスタック全体を定義し、GitOps を通じて安全にプラットフォームを継続的に進化させるためのフレームワーク
- [terraform-linode-k8s](https://registry.terraform.io/modules/linode/k8s/linode/latest) - Linode インスタンスに Kubernetes をインストールする
- [terraform-nixos](https://github.com/nix-community/terraform-nixos) - NixOS をデプロイするための Terraform モジュールセット
- [terraform-static-website-s3-cloudfront](https://github.com/sergej-brazdeikis/terraform-static-website-s3-cloudfront) - 変数に基づいて AWS S3 および Cloudfront を使用して静的ウェブサイトを作成する
- [tf_aws_bastion_s3_keys](https://github.com/terraform-community-modules/tf_aws_bastion_s3_keys) - AWS EC2 にバスティオンホストを作成する
- [typhoon](https://github.com/poseidon/typhoon) - 最小限で無料のKubernetes配布版とTerraform

## セルフホスト型レジストリ

- [anthology](https://github.com/erikvanbrakel/anthology) - 公式リジストリの代替としてのプライベートTerraformリジストリの実装
- [boring-registry](https://github.com/boring-registry/boring-registry) - APIキー認証とブロブストレージ対応のプライベートTerraformモジュール/プロバイダーリジストリ
- [citizen](https://github.com/outsideris/citizen) - プライベートTerraformモジュール/プロバイダーリジストリ
- [nrkno/terraform-registry](https://github.com/nrkno/terraform-registry) - モジュールストアバックエンドを備えたプライベートTerraformリジストリ
- [petra](https://github.com/devoteamgcloud/petra) - プライベートTerraformリジストリマネージャー
- [philips-labs/terraform-registry](https://github.com/philips-labs/terraform-registry) - GitHub上にホストされた任意のTerraformプロバイダーリリースを提供するTerraformリジストリ
- [tapir](https://github.com/PacoVK/tapir) - プライベートTerraformリジストリ
- [terraform-simple-registry](https://github.com/apparentlymart/terraform-simple-registry) - Terraformリジストリプロトコルのシンプルな実装
- [terramantle.dev](https://terramantle.dev) - モジュールとステートの洞察に焦点を当て、依存関係管理を解決するリジストリ
- [Terrareg](https://github.com/matthewjohn/terrareg) - Terraformモジュールリジストリ
- [terustry](https://github.com/veepee-oss/terustry) - GitLabまたはGitHubのリリースをプロキシとして機能するオープンソースTerraformプロバイダーリジストリ
- [terralist](https://github.com/terralist/terralist) - REST APIから管理可能なモジュールおよびプロバイダーのプライベートTerraformリジストリ

## マネージドレジストリ

- [Azure Verified Modules](https://azure.github.io/Azure-Verified-Modules/) - Microsoftが提供する公式なプロジェクトで、Azureリソースおよびアーキテクチャパターンに対する検証済み、規格準拠のTerraform（およびBicep）モジュールが提供され、Well-Architected Frameworkと一致
- [cloudsmith](https://docs.cloudsmith.com/formats/terraform-modules-repository) - 内部および外部クライアント向けのマネージドパッケージホスティング。 :heavy_dollar_sign:
- [Terramantle](https://terramantle.dev) - 深層モジュール洞察、依存関係マッピング、ステート可視性を備えたプライベートTerraform/OpenTofuリジストリ

## プロバイダー

### HashiCorpサポートのプロバイダー

- [terraform-provider-aws](https://github.com/hashicorp/terraform-provider-aws) - Amazon Web Services向けプロバイダー
- [terraform-provider-azurerm](https://github.com/hashicorp/terraform-provider-azurerm) - Azure向けプロバイダー
- [terraform-provider-docker](https://github.com/hashicorp/terraform-provider-docker) - Docker向けプロバイダー。 :skull:
- [terraform-provider-google](https://github.com/hashicorp/terraform-provider-google) - Google Cloud Platform向けプロバイダー。
- [terraform-provider-helm](https://github.com/hashicorp/terraform-provider-helm) - Helm 用プロバイダー
- [terraform-provider-kubernetes](https://github.com/hashicorp/terraform-provider-kubernetes) - Kubernetes 用プロバイダー
- [terraform-provider-vsphere](https://github.com/vmware/terraform-provider-vsphere) - VMware vSphere 用プロバイダー

### ベンダーサポートのプロバイダー

- [terraform-provider-alicloud](https://github.com/aliyun/terraform-provider-alicloud) - Alibaba Cloud 用プロバイダー
- [terraform-provider-artifactory](https://github.com/jfrog/terraform-provider-artifactory) - [JFrog Artifactory](https://jfrog.com/artifactory/) のプロバイダー。
- [terraform-provider-atlas](https://github.com/ariga/terraform-provider-atlas) - [Atlas](https://atlasgo.io/) のプロバイダー。
- [terraform-provider-azapi](https://github.com/Azure/terraform-provider-azapi) - Azure Resource Manager REST API 用プロバイダー
- [terraform-provider-azuredevops](https://github.com/microsoft/terraform-provider-azuredevops) - Azure DevOps (VSTS) 用プロバイド
- [terraform-provider-buildkite](https://github.com/buildkite/terraform-provider-buildkite) - Buildkite 用プロバイダー
- [terraform-provider-checkly](https://github.com/checkly/terraform-provider-checkly) - APIおよびE2Eモニタリング用の [Checkly](https://www.checklyhq.com) リソースの管理。
- [terraform-provider-coder](https://github.com/coder/terraform-provider-coder) - [Coder](https://coder.com) のプロバイダー。
- [terraform-provider-confluent](https://github.com/confluentinc/terraform-provider-confluent) - Confluent 用プロバイダー
- [terraform-provider-datadog](https://github.com/DataDog/terraform-provider-datadog) - Datadog 用プロバイダー
- [terraform-provider-devhelm](https://github.com/devhelmhq/terraform-provider-devhelm) - [DevHelm](https://devhelm.io) のアップタイムモニタリングプロバイダー — モニターチャンネル、アラートチャンネル、ステータスページをコードで管理できます。
- [terraform-provider-digitalocean](https://github.com/digitalocean/terraform-provider-digitalocean) - DigitalOcean 用プロバイダー
- [terraform-provider-dominos](https://github.com/nat-henderson/terraform-provider-dominos) - Dominos Pizza 用プロバイダー
- [terraform-provider-elasticstack](https://github.com/elastic/terraform-provider-elasticstack) - Elasticsearch および Kibana 用プロバイダー
- [terraform-provider-env0](https://github.com/env0/terraform-provider-env0) - [env0](https://www.env0.com/) のプロバイダー。
- [terraform-provider-github](https://github.com/integrations/terraform-provider-github) - GitHub 用プロバイダー
- [terraform-provider-gitlab](https://github.com/gitlabhq/terraform-provider-gitlab) - GitLab 用プロバイダー
- [terraform-provider-graphql](https://github.com/sullivtr/terraform-provider-graphql) - GraphQL クエリおよびミュテーション 用プロバイダー
- [terraform-provider-hcloud](https://github.com/hetznercloud/terraform-provider-hcloud) - Hetzner Cloud 用プロバイダー
- [terraform-provider-healthchecksio](https://github.com/kristofferahl/terraform-provider-healthchecksio) - healthchecks.io リソース管理用プロバイダー
- [terraform-provider-heroku](https://github.com/heroku/terraform-provider-heroku) - Heroku 用プロバイダー
- [terraform-provider-ibm](https://github.com/IBM-Cloud/terraform-provider-ibm) - IBM Cloud 用プロバイダー
- [terraform-provider-iterative](https://github.com/iterative/terraform-provider-iterative) - 機械学習を意識した Terraform プラグイン
- [terraform-provider-k8s](https://github.com/banzaicloud/terraform-provider-k8s) - シンプルなKubernetesプロバイダー。任意のマニフェストと互換性がある。
- [terraform-provider-keycloak](https://github.com/keycloak/terraform-provider-keycloak) - [Keycloak](https://www.keycloak.org/) の設定を管理するプロバイダー。
- [terraform-provider-linode](https://github.com/btobolaski/terraform-provider-linode) - Linode用のプロバイダー。
- [terraform-provider-openstack](https://github.com/terraform-provider-openstack/terraform-provider-openstack) - OpenStack用のプラグイン。
- [terraform-provider-panos](https://github.com/PaloAltoNetworks/terraform-provider-panos) - [Palo Alto Networks next-generation firewalls](https://www.paloaltonetworks.com/network-security) のプロバイダー。
- [terraform-provider-phare](https://github.com/phare/terraform-provider-phare) - [Phare](https://phare.io)向けTerraformプロバイダー。
- [terraform-provider-planetscale](https://github.com/planetscale/terraform-provider-planetscale) - VitessとPostgresに対応する[PlanetScale](https://planetscale.com)向けTerraformプロバイダー。
- [terraform-provider-qovery](https://github.com/Qovery/terraform-provider-qovery) - [Qovery](https://www.qovery.com/) のプロバイダー — AWS、GCP、Azure、ScalewayでのKubernetesデプロイ、環境、アプリケーション、データベース、Helmチャート、Terraformサービスを管理できます。
- [terraform-provider-pingdom](https://github.com/russellcardullo/terraform-provider-pingdom) - Pingdomリソースの管理用プロバイダー。 :skull:
- [terraform-provider-rancher2](https://github.com/rancher/terraform-provider-rancher2) - Rancher v2用のプロバイダー。
- [terraform-provider-scalr](https://github.com/Scalr/terraform-provider-scalr) - [Scalr](https://www.scalr.com/) のプロバイダー。
- [terraform-provider-secrethub](https://github.com/secrethub/terraform-provider-secrethub) - SecretHub用のプロバイダー。 :skull:
- [terraform-provider-sigsci](https://github.com/signalsciences/terraform-provider-sigsci) - Signal Sciences用のプロバイダー。
- [terraform-provider-snowflake](https://github.com/snowflakedb/terraform-provider-snowflake) - Snowflakeデータウェアハウス用のプロバイダー。
- [terraform-provider-spinnaker](https://github.com/armory-io/terraform-provider-spinnaker) - [Spinnaker](https://spinnaker.io/) のプロバイダー。
- [terraform-provider-spotinst](https://github.com/spotinst/terraform-provider-spotinst) - spotinst用のプロバイダー。
- [terraform-provider-stripe](https://github.com/franckverrot/terraform-provider-stripe) - Stripe用のプロバイダー。
- [terraform-provider-ucloud](https://github.com/ucloud/terraform-provider-ucloud) - UCloudリソースの管理用プロバイダー。
- [terraform-provider-uptimerobot](https://github.com/louy/terraform-provider-uptimerobot) - uptimerobotリソースの管理用プロバイダー。 :skull:
- [terraform-provider-vaulted](https://github.com/sumup-oss/terraform-provider-vaulted) - GitなどのSCMに保存可能な、Terraformによる暗号化されたHashiCorp Vaultのシークレット。
- [terraform-provider-scp](https://github.com/splunk/terraform-provider-scp) - Splunk Cloud Platform用のプロバイダー。

### コミュニティプロバイダー

- [terraform-provider-docker](https://github.com/kreuzwerker/terraform-provider-docker) - Terraform Dockerプロバイダー。
- [terraform-provider-minio](https://github.com/aminueza/terraform-provider-minio) - MinIO S3バケットとIAMユーザーの管理用Terraformプロバイダー。
- [terraform-provider-proxmox](https://github.com/Telmate/terraform-provider-proxmox) - Proxmox用のTerraformプロバイダー。
- [terraform-provider-terracurl](https://github.com/devops-rob/terraform-provider-terracurl) - ターゲットエンドポイントへの管理用および未管理API呼び出しを可能にするプロバイダー。
- [terraform-provider-uname](https://github.com/julienlevasseur/terraform-provider-uname) - Terraform用のUnameプロバイダー。
- [terraform-provider-value](https://github.com/pseudo-dynamic/terraform-provider-value) - Terraform用の値プロバイダー。
- [terraform-provider-multipass](https://github.com/todoroff/terraform-provider-multipass) - マルチパス向けのTerraformプロバイダー
- [terraform-provider-openrouter](https://github.com/cloudopsworks/terraform-provider-openrouter) - OpenRouterをコードで管理：ワークスペース、ガードレール、支出制限付きAPIキー、および組織メンバー。Terraform + OpenTofu
- [terraform-provider-plancost](https://github.com/plancost/terraform-provider-plancost) - Azureのコスト見積もりおよびコストガードレール向けのTerraformプロバイダー
- [terraform-provider-coolify](https://github.com/coolify-terraform/terraform-provider-coolify) - Coolify向けのTerraformプロバイダー

## テスト

- [clarity](https://github.com/xchapter7x/clarity) - Terraform用の宣言型テストフレームワーク。 :skull:
- [kitchen-terraform](https://github.com/newcontext-oss/kitchen-terraform) - Test Kitchenプラグインを提供し、Terraform構成の収束とInSpecコントロールによる結果の検証を可能にする。 :skull:
- [rspec-terraform](https://github.com/bsnape/rspec-terraform) - Terraformモジュール向けのRSpecテスト。 :skull:
- [terraform_validate](https://github.com/elmundio87/terraform_validate) - Terraformにおけるユーザー定義基準の遵守を支援。 :skull:
- [terraform-compliance](https://github.com/terraform-compliance/cli) - Terraformファイル向けのBDDテスト。
- [terratest](https://github.com/gruntwork-io/terratest) - TerratestはGoライブラリで、インフラコードの自動テストをより簡単にします。

## ツール

- [AIaC](https://github.com/gofireflyio/aiac) - 人工知能を用いたインフラアセンブリ生成ツール
- [AirIAM](https://github.com/bridgecrewio/AirIAM) - AWS IAMの最小権限を実現するTerraform実行フレームワークツール
- [asdf](https://github.com/asdf-community/asdf-hashicorp) - [asdf](https://github.com/asdf-vm/asdf)バージョンマネージャー向けHashiCorpプラグイン。
- [astro](https://github.com/uber/astro/) - 複数のTerraform実行を1コマンドで管理するツール。 :ghost:
- [atlantis](https://github.com/runatlantis/atlantis) - GitHubを介したTerraformの協働開発を統合したワークフロー。
- [atmos](https://github.com/cloudposse/atmos) - 深くマージされたYAMLをモジュール入力に変換する汎用ツール。
- [aws2tf](https://github.com/aws-samples/aws2tf) - 既存のAWSリソースのインポートを自動化し、Terraform HCLコードを出力。
- [aztfexport](https://github.com/Azure/aztfexport) - 既存のAzureリソースをTerraformの管理下に導入するツール。
- [balcony](https://oguzhan-yilmaz.github.io/balcony/) - AWS APIの読み取りを簡単に行うCLIツール。また、Terraformのインポートブロックおよび実際のTerraformリソースコードを生成。
- [blast radius](https://github.com/28mm/blast-radius) - Terraformの依存関係グラフをインタラクティブに可視化。 :skull:
- [cf-terraforming](https://github.com/cloudflare/cf-terraforming) - 既存のCloudflareリソースをterraformingするためのコマンドラインツール。
- [cfnctl](https://github.com/rogerwelin/cfnctl) - Cfnctl は AWS Cloudformation に Terraform CLI の体験を提供する.
- [Checkov](https://github.com/bridgecrewio/checkov/) - Terraform>=0.12 用の Terraform 静的解析ツール
- [cloud-audit](https://github.com/gebalamariusz/cloud-audit) - AWS セキュリティ診断 CLI で、誤設定の修正に Terraform コードを生成するリメディエーションエンジン.
- [Coder](https://coder.com/) - Coder は、Terraform を使ってあなたのインフラにソフトウェア開発環境をプロビジョニングする.
- [coretech/terrafile](https://github.com/coretech/terrafile) - GitHub から外部モジュールを体系的に管理するツール（Goで記述）. :skull:
- [driftctl](https://github.com/snyk/driftctl) - インフラのずれを検出・追跡・アラートする. :skull:
- [drifthound](https://github.com/drifthoundhq/drifthound) - 歴史的トレーキングと通知を含む継続的なインフラずれ検出.
- [dxw/terrafile](https://github.com/dxw/terrafile) - GitHub から外部モジュールを体系的に管理するツール（Rubyで記述）.
- [flora](https://github.com/ketchoop/flora) - Terraform バージョンマネージャー.
- [fogg](https://github.com/chanzuckerberg/fogg) - Terraform リポジトリの管理における無駄な手間を削減するツール.
- [former2](https://github.com/iann0036/former2) - AWS アカウント内の既存リソースから Terraform コンフィギュレーションを生成する.
- [fuzzy-terraform-rm](https://github.com/paololazzari/fuzzy-terraform-rm) - Terraform のステートからリソースを削除するためのファジー検索コマンドラインツール.
- [gaia](https://github.com/gaia-app/gaia) - Gaia は、モジュールと自社サービスインフラのための Terraform 🌍 UI であり、👨‍💻 自主的なインフラ運用を可能にする. :skull:
- [hcl2json](https://github.com/tmccombs/hcl2json) - HCL2 を JSON に変換する.
- [hcldump](https://github.com/magodo/hcldump) - HCL (v2) の抽象構文木をダンプする.
- [hcledit (mercari)](https://github.com/mercari/hcledit) - HCL コンフィギュレーションを編集するための Go パッケージ
- [hcledit (minamijoyo)](https://github.com/minamijoyo/hcledit) - HCL 用のコマンドラインエディタ.
- [hclgrep](https://github.com/magodo/hclgrep) - HCL(v2) に基づく構文検索ツール.
- [hq](https://github.com/miller-time/hq) - コマンドライン用の HCL プロセッサ
- [iam-policy-json-to-terraform](https://github.com/flosell/iam-policy-json-to-terraform) - JSON 形式の IAM ポリシーを Terraform aws_iam_policy_document に変換する小さなツール
- [Infracost](https://github.com/infracost/infracost) - TerraformにおけるCLIおよびプルリクエストでのクラウドコスト見積もり
- [inframap](https://github.com/cycloidio/inframap) - tfstateまたはHCLを読み込み、各プロバイダーごとに独自のグラフを生成し、最も重要または関連性の高いリソースのみを表示
- [InfraScan](https://infrascan.soldevelo.com) - Terraform、AWS、Kubernetesのコストおよびセキュリティ分析を支援する高度なインフラオーバービュア
- [InfraSketch](https://infrasketch.cloud) - AWSおよびAzureをサポートする、サインアップ不要・認証不要のブラウザベースツール。Terraform HCLおよびDocker Composeをアーキテクチャ図として可視化
- [json2hcl](https://github.com/kvz/json2hcl) - JSONとHCLの相互変換。 :ghost:
- [k2tf](https://github.com/sl1pm4t/k2tf) - Kubernetes YAMLからTerraform HCLへの変換ツール
- [Kapitan](https://github.com/kapicorp/kapitan) - インベントリドリブンテンプレートからTerraform/OpenTofu JSONおよびその他のインフラ設定を生成
- [KICS](https://github.com/Checkmarx/kics) - IaCプロジェクトにセキュリティ脆弱性、コンプライアンス問題、インフラ構成ミスをスキャン。現在はTerraformプロジェクト、Kubernetesマニフェスト、Dockerfile、AWS CloudFormationテンプレート、Ansibleプレイブックに対応
- [layerform](https://github.com/briefercloud/layerform) - Layerformはエンジニアが.plain .tfファイルを使用して再利用可能な環境スタックを作成するためのツール。複数の"ステージング"環境に最適。 :skull:
- [library.tf](https://library.tf) - Library.tfは、TerraformおよびOpenTofuのリジストリ情報を提供するだけでなく、意思決定に必要なすべての洞察を提供するように設計されています。サポートおよび維持されているモジュールやプロバイダーを迅速に特定し、バグが多すぎるものを除外できます.
- [modules.tf-lambda](https://github.com/antonbabenko/modules.tf-lambda) - 視覚的な図を [Cloudcraft.co](https://cloudcraft.co) で作成した後、インフラとしてのコードを Terraform に生成するツール
- [para](https://github.com/paraterraform/para) - Terraform/Terragrunt用の欠けた3rdパーティプラグインマネージャーであり、「スイス軍刀」のようなツール。すべてのワークフローを1つのツールで実現。 :skull:
- [pike](https://github.com/jamesWoolfenden/pike) - Pikeは、Terraformを構築するために必要な権限またはIAMポリシーを計算します
- [pipeform](https://github.com/magodo/pipeform) - TerraformのランタイムTUI
- [platform-skills](https://github.com/nitinjain999/platform-skills) - Terraform用のAI支援フィールドハンドブック：IAMの最小権限レビュー、影響範囲分析、ステート影響、プロバイダー制約、ロールバック計画。Claude、Codex、Cursor、Copilotプラグインとして動作
- [pluralith](https://www.pluralith.com/) - Terraformのステート可視化およびインフラの自動ドキュメンテーション生成。 :heavy_dollar_sign:
- [pre-commit-terraform](https://github.com/antonbabenko/pre-commit-terraform) - TerraformおよびTerragrunt用のpre-commit git hook：自動フォーマット、バリデーション、ドキュメント更新、セキュリティチェック、コスト見積もりなど
- [pretf](https://github.com/raymondbutcher/pretf) - Python で Terraform の設定を生成する drop-in ツール。 [pretf documentation](https://pretf.readthedocs.io/en/latest/) :skull: を参照
- [prettyplan for TF 0.12+](https://github.com/cloudandthings/terraform-pretty-plan) - TF 0.12+ 用の Prettyplan ([available online here](https://cloudandthings.github.io/terraform-pretty-plan/)) は、大きな Terraform プランを簡単に閲覧できるための小さなツール
- [prettyplan](https://github.com/chrislewisdev/prettyplan) - Prettyplan ([available online here](https://chrislewisdev.github.io/prettyplan/)) は、大きな Terraform プランを簡単に閲覧できるための小さなツール。 :ghost:
- [pug](https://github.com/leg100/pug) - Terraformのプロフェッショナルユーザー向けのターミナルUI
- [pytest-terraform](https://github.com/cloud-custodian/pytest-terraform) - pytest Terraformプラグイン（フィクスチャとオフラインリプレイをサポート）
- [python-terrafile](https://github.com/claranet/python-terrafile) - Githubから外部モジュールをシステム的に管理し、Terraformで使用可能にする
- [regula](https://github.com/fugue/regula) - デプロイ前にTerraformのインフラコードがAWS、Azure、Google Cloudでのセキュリティ設定誤りやコンプライアンス違反を評価
- [redc](https://github.com/wgpsec/redc) - テラフォーム上で構築された次世代のリッドチームインフラ自動化ツール。アリババクラウド、騰訊クラウド、AWSなど、マルチクラウドデプロイメントをサポートし、1コマンドでリッドチーム環境の作成・設定・破壊を実行可能。
- [renovate-config](https://github.com/SpotOnInc/renovate-config) - Renovatebot用の共有可能な設定プレセット。特にDevOps関係者に便利。
- [Riftmap](https://riftmap.dev) - Terraform、Docker、Helmなど複数リポジトリのインフラ構成をスキャンし、何が何に依存しているか、変更時に何が破壊されるかを可視化するマルチリポジトリ依存関係と変更影響エンジン。
- [rover](https://github.com/im2nguyen/rover) - インタラクティブなテラフォームのステートと設定エクスプローラ。
- [ruby-terraform](https://github.com/infrablocks/ruby_terraform) - テラフォームコマンドを呼び出すためのシンプルなRubyラッパー。
- [ReleaseRun Terraform Provider Matrix](https://releaserun.com/tools/terraform-checker/) - テラフォームとOpenTofuのバージョンごとのプロバイダー互換性を確認できる無料ブラウザツール。
- [sato](https://github.com/JamesWoolfenden/sato) - Satoは、あなたの古くからのCloudFormationをテラフォームに変換するためのツール。
- [scenery](https://github.com/dmlittle/scenery) - もう一つのテラフォームプラン出力の整形ツール。 :ghost: :skull:
- [scratchrelaxtv](https://github.com/YakDriver/scratchrelaxtv) - モジュール開発を支援するシンプルな Python ツール - から変数を抽出して を生成し、 からモジュール使用のスタブを作成 `main.tf` `variables.tf` `variables.tf`
- [serverless.tf - Doing serverless with Terraform](https://serverless.tf/) - serverless.tf は、AWS 上で Terraform を使用してサーバレスアプリケーションおよびインフラを開発・構築・デプロイ・セキュリティを確保するための意見を反映したオープンソースフレームワーク。 [Read more](https://github.com/antonbabenko/serverless.tf)
- [ReleaseRun Terraform Security Scanner](https://releaserun.com/tools/terraform-security/) - `.tf` ファイル向けの無料ブラウザベーススキャナー。ハードコードされた認証情報、0.0.0.0/0 への開いているポート、公開S3/RDS、暗号化されていないストレージ、削除保護の欠如をチェック。A-Fランク。インストール不要。
- [Shieldly](https://github.com/shieldly-io/cli) - テラフォームで生成されたIAMポリシーおよびCloudFormationに対するAIによるセキュリティ分析。リスクのある権限の理由と修正方法を説明。無料プラン、CLIおよびGitHub Action対応。
- [Shisho](https://github.com/flatt-security/shisho) - テラフォーム用の軽量な静的分析ツール。
- [Speakeasy](https://www.speakeasy.com/) - OpenAPI仕様からテラフォームプロバイダーを生成するツール。
- [stacks](https://github.com/cisco-open/stacks) - Stacks、テラフォームコードの事前処理ツール。
- [tads-boilerplate](https://github.com/Thomvaill/tads-boilerplate) - Ansibleとテラフォームの強みとDocker Swarmのシンプルさを組み合わせたもの＝インフラアセンブリとDevOpsのベストプラクティス。
- [tau](https://github.com/avinor/tau) - Tauは、テラフォームの上に構築された薄いラッパーで、複数のデプロイメント、依存関係、シークレットを管理可能。 :skull:
- [tenv](https://github.com/tofuutils/tenv) - OpenTofu/Terraform/Terragruntのバージョン管理ツール。
- [terraboard](https://github.com/camptocamp/terraboard) - テラフォームのステートを確認できるウェブダッシュボード。
- [terraboot](https://github.com/MastodonC/terraboot) - テラフォーム構成を生成し、実行できるDSL。
- [terracognita](https://github.com/cycloidio/terracognita) - 既存のクラウドプロバイダーから読み込み（逆テラフォーム）し、インフラアセンブリとしてテラフォーム構成に変換。
- [terracost](https://github.com/cycloidio/terracost) - テラフォームでCLI上でクラウドコストを推定。
- [terracove](https://elementtech.github.io/terracove/) - テラフォームの差分とカバレッジを再帰的にテストするツール。
- [TerraDepot](https://github.com/derBroBro/TerraDepot) - Terraform のステートリポジトリ。デフォルトの HTTP リモートバックエンドに基づく。AWS S3 に格納された tfstate の中央管理を可能にする。
- [terradozer](https://github.com/chenrui333/terradozer) - 構成ファイルなしで Terraform を削除。
- [terraeasy](https://github.com/jaceq/terraeasy) - 使いやすいTerraformラッパー。
- [terraform-ai-skills](https://github.com/anmolnagpal/terraform-ai-skills) - GitHub Copilot、Claude、ChatGPT 用の AI プラグイン。AWS、GCP、Azure、DigitalOcean における10〜200以上のリポジトリで、プロバイダーのアップグレード、ワークフローの標準化、リリースを自動化。
- [terraform-aws-clickops-notifier](https://github.com/cloudandthings/terraform-aws-clickops-notifier) - AWS コンソールでのアクションが行われた際に通知を受ける。
- [terraform-bundle](https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle) - Terraform バイナリおよびプロバイダーバイナリを含むバンドルを簡単に構築。CI および空のネットワーク環境での Terraform Enterprise に便利。
- [terraform-cdk](https://github.com/hashicorp/terraform-cdk) - Terraform 用の CDK（クラウド開発キット）は、開発者が慣れたプログラミング言語を使ってクラウドインフラを定義し、HashiCorp Terraform でプロビジョニングできるようにする。
- [terraform-cleaner](https://github.com/sylwit/terraform-cleaner) - あなたの Terraform モジュールに使われていない変数を検出するための小さなユーティリティ。
- [terraform-credentials-vault](https://github.com/oulman/terraform-credentials-vault) - Terraform の「認証ヘルパー」プラグイン。Terraform ナイティブサービス（プライベートモジュールレジストリ、Terraform Cloud など）の認証情報を環境変数で提供できるようにする。
- [terraform-diff](https://github.com/contentful-labs/terraform-diff) - Terraform plan と apply をどこで実行すべきか、常に把握できる！
- [terraform-docs](https://github.com/terraform-docs/terraform-docs) - Terraform モジュールからドキュメントを生成するための迅速なユーティリティ。
- [terraform-graph-beautifier](https://github.com/pcasteran/terraform-graph-beautifier) - terraform graph コマンドのほとんど使えない出力を、より意味のあるものに変換するためのコマンドラインツール。
- [terraform-iam-policy-validator](https://github.com/awslabs/terraform-iam-policy-validator) - CLI は Terraform テンプレート内の AWS IAM ポリシーを、AWS IAM のベストプラクティスに照らして検証する。
- [terraform-landscape](https://github.com/coinbase/terraform-landscape) - *(0.11 およびそれ以前のみ)* Terraform の plan 出力を読みやすく、理解しやすいように改善。
- [terraform-operator](https://github.com/GalleyBytes/terraform-operator) - Kubernetes の CRD で Terraform の操作を管理する。
- [terraform-plan-parser](https://github.com/lifeomic/terraform-plan-parser) - `terraform plan` からの stdout を解析し、JSON に変換するためのコマンドラインツールおよび JavaScript API。:ghost:
- [terraform-provisioner](https://github.com/shuaibiyy/terraform-provisioner) - 同じ Terraform スクリプトの複数回のプロビジョニングを管理するツール。
- [terraform-rake-tasks](https://github.com/gina-alaska/terraform-rake-tasks) - Terraform プランを管理するための共有 Rake タスク。
- [terraform-repl](https://github.com/paololazzari/terraform-repl) - Terraformコンソールの対話操作を改善するコンソールラッパー。
- [Terraform-Visual](https://github.com/hieven/terraform-visual) - Terraform プランを可視化するシンプルで強力なツール。
- [terravision](https://github.com/patrickchugh/terravision) - Terraformコードから公式AWS/Azure/GCPアイコンと設計基準を用いてプロフェッショナルなクラウドアーキテクチャ図を生成。CI/CD統合で100％クライアントサイド実行。
- [terraform.py](https://github.com/mantl/terraform.py) - TerraformのステートファイルをパースするAnsibleの動的インベントリスクリプト。 :skull:
- [terraformer](https://github.com/chenrui333/terraformer) - 既存インフラからTerraformファイルを生成するCLIツール。インフラからコードへ。多数のプロバイダーをサポート。
- [terraforming](https://github.com/dtan4/terraforming) - 既存のAWSリソースをTerraformスタイル（tf、tfstate）にエクスポート。 `terraformer` に類似。 :skull:
- [terraformize](https://github.com/naorlivne/terraformize) - シンプルなREST APIエンドポイントを用いてTerraformモジュールを適用・削除。 :skull:
- [terraformsh](https://github.com/pwillis-els/terraformsh) - Bashで書かれたラッパーツールでCLIのユーザーエクスペリエンスを簡易化し、DRYな階層構成を実現。
- [terragrunt-atlantis-config](https://github.com/transcend-io/terragrunt-atlantis-config) - Terragruntプロジェクト用にAtlantis設定を生成。
- [terragrunt](https://github.com/gruntwork-io/terragrunt) - TerragruntはTerraformの軽量ラッパーであり、Terraform設定をDRYに保ち、複数のTerraformモジュールを扱い、リモートステートを管理するための追加ツールを提供。
- [terrahelp](https://github.com/opencredo/terrahelp) - Terraformとの作業時に補助的な機能を提供するコマンドラインツール。
- [terrahub](https://github.com/tfxor/terrahub) - TerraHubはTerraformの自動化およびオーケストレーションツール。console.terrahub.ioにシームレスに統合され、リアルタイムなTerraform実行を表示し、過去のTerraform実行の監視・報告機能を備えたエンタープライズ向けGUIを提供。 :heavy_dollar_sign:
- [terramagic](https://github.com/miltlima/terramagic) - Pythonで書かれたフォルダとTerraformファイルの自動作成用のウィザードツール！
- [terramate](https://github.com/terramate-io/terramate) - 複数のTerraformスタックを管理するツールで、変更検知とコード生成をサポート。
- [terrap-cli](https://github.com/sirrend/terrap-cli) - Terrapはインフラをスキャンし、必要な変更を特定する強力なCLIツール。
- [terrars](https://github.com/andrewbaxter/terrars) - TerrarsはRustでTerraformスタックを構築するツール。CDKの代替案。
- [terrascan](https://github.com/tenable/terrascan) - Terraformテンプレートの静的コード分析におけるセキュリティおよびベストプラクティステストのコレクション
- [terrascope](https://github.com/spilliams/terrascope) - Terraformのモノリスを対象としたオーケストレーションツール。
- [terrashine](https://isawan.github.io/terrashine/) - TerrashineはTerraformプロバイダーのミラー1実装であり、プロバイダーが要求された際に自動的に依存関係をキャッシュすることで動作。
- [terraspace](https://terraspace.cloud) - Terraformフレームワーク
- [terrastate](https://github.com/rohinivsenthil/terrastate) - Visual Studio Code拡張機能で、ワークスペース内のTerraformリソースを監視・デプロイ・削除。
- [terratag](https://github.com/env0/terratag) - TerratagはTerraformユーザーがAWS、Azure、GCPのすべてのリソースに対して自動的にタグを作成・維持できるCLIツール。
- [tf-init-booster](https://github.com/hayorov/terraform-init-booster) - Terraformモジュールのダウンロードを高速化する、Terraform実行前のルーチン。
- [tf-profile](https://github.com/datarootsio/tf-profile/) - Terraformの実行に対してプロファイラー。グローバル統計、リソースレベルの統計、または可視化を生成。
- [tf-summarize](https://github.com/dineshba/tf-summarize) - Terraform planの要約を表示するコマンドラインツール
- [tf-why](https://github.com/Raj-glitch-max/tf.why) - CloudTrailの検索を介して、TerraformのドリフトをAWSのアクターに割り当てるCLIツール
- [tfaction](https://github.com/suzuki-shunsuke/tfaction) - 意見をもつTerraformワークフロー向けのGitHub Actionsコレクション
- [tfautomv](https://github.com/busser/tfautomv) - 痛みなくリファクタリングを行うために、Terraform `moved` ブロックを自動生成
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) - planおよびapplyの結果をプルリクエストコメントとして通知するCLIツール
- [tfedit](https://github.com/minamijoyo/tfedit) - Terra及のリファクタリングツール
- [tfenv](https://github.com/tfutils/tfenv) - rbenvにインスパイアされたTerraformバージョンマネージャー
- [tfgen](https://github.com/0xDones/tfgen) - 一貫性のあるコードベースとDRYを実現するTerraformコードジェネレーター
- [tfgpt](https://github.com/flavius-dinu/tfgpt) - Terraformコマンドや概念に対する説明をOpenAIのGPT-3.5 Turboと統合するCLIツール
- [tfimport](https://github.com/coolapso/tfimport) - 既存インフラをtfstateに自動インポートするCLIツール
- [tfjson](https://github.com/palantir/tfjson) - Terraformプランファイルを読み込み、JSON形式で出力するユーティリティ。 :skull:
- [tfk8s](https://github.com/jrhouston/tfk8s) - Kubernetes YAMLマニフェストをTerraform HCLに変換するツール
- [tflint](https://github.com/terraform-linters/tflint) - `terraform plan`で検出できないエラーを検出するTerraformのリントツール
- [tfmake](https://github.com/tfmake/tfmake) - makeの力を活かしたTerraformの自動化
- [tfmask](https://github.com/cloudposse-archives/tfmask) - Terraform ツールで `terraform plan` および `terraform apply` :skull: から選択された出力情報をマスク
- [tfmigrate](https://github.com/minamijoyo/tfmigrate) - GitOps向けのTerraformステート移行ツール
- [tfmigrator](https://github.com/tfmigrator/cli) - Terraform設定とステートの移行を支援するGoライブラリとCLIツール
- [tfmv](https://github.com/suzuki-shunsuke/tfmv) - Terraformリソースの名前を変更し、移動ブロックを生成するツール
- [tfocus](https://github.com/nwiizo/tfocus) - tfocusは、特定のリソースに対してTerraformのplan/applyを選択・実行する超インタラクティブなツール。これは「緊急ツール」として考えられる。日常的な使用には向いていない。
- [tfprovidercheck](https://github.com/suzuki-shunsuke/tfprovidercheck) - 悪意あるTerraformプロバイダーが実行されないよう防ぐCLIツール
- [tfproviderlint](https://github.com/bflad/tfproviderlint) - Terraformプロバイダーのリントツール
- [tfrepl](https://github.com/ysoftwareab/tfrepl) - TerraformのREPLで、完全なシェル体験を提供。Readlineベース。依存関係なし。設定変更を保存。履歴を表示。
- [tfreveal](https://github.com/breml/tfreveal) - Terraformのプランを表示するためのユーティリティ。すべての秘密（センシティブ）値が明らかになる。
- [tfscaffold](https://github.com/tfutils/tfscaffold) - マルチ環境・マルチコンポーネントを管理するTerraformで構築されたAWSインフラの制御フレームワーク。
- [tfschema](https://github.com/minamijoyo/tfschema) - Terraformプロバイダー用のスキーマインスペクタ。
- [tfsec](https://github.com/aquasecurity/tfsec) - Terraformの静的解析ツール。Terraform <0.12 および >=0.1及びHCLパーサーとの直接統合により、より良い結果を提供。
- [tfsort](https://github.com/AlexNabokikh/tfsort) - Terraformの変数と出力の並べ替えを行うCLIユーティリティ。
- [tftarget](https://github.com/future-architect/tftarget) - `terraform xxx -target={...}` をインタラクティブに実行するCLIツール
- [tftree](https://github.com/busser/tftree) - あなたのターミナルにTerraformモジュールの呼び出しスタックを表示。
- [tftui](https://github.com/idoavrah/terraform-tui) - Terraformのステートを表示するためのテキストユーザーインターフェース。
- [tfupdate](https://github.com/minamijoyo/tfupdate) - Terraformの設定ファイル内のバージョン制約を更新。
- [tfvar](https://github.com/shihanng/tfvar) - tfvarはTerraformの設定ファイルまたはモジュールをスキャンし、選択されたフォーマット（tfvar、環境変数など）に変数を抽出して編集可能にする。
- [tfvaultenv](https://github.com/oulman/tfvaultenv) - tfvaultenvはHashiCorp Vaultからシークレットを読み取り、さまざまなTerraformプロバイダー向けに環境変数として出力。
- [tfwrapper](https://github.com/manheim/tfwrapper) - Hashicorp Terraformを適切に実行するためのRubygem（rakeタスクを提供）。
- [tfmcp](https://github.com/nwiizo/tfmcp) - Model Context Protocol（MCP）を介してTerraformとインタラクションを行うCLIツール。ClaudeのようなAIアシスタントがTerraform環境を管理・運用できるようにする。
- [tgf](https://github.com/coveooss/tgf) - TerragruntをDockerで実行するためのTerragruntのフロントエンド。
- [threatcl](https://github.com/threatcl/threatcl) - HCLでThreat Modelを記述する。
- [tofuenv](https://github.com/tofuutils/tofuenv) - tfenvにインスパイアされたOpenTofuバージョンマネージャー。
- [tpm](https://github.com/Madh93/tpm) - Terraformプロバイダー向けのパッケージマネージャー。
- [travelgrunt](https://github.com/ivanilves/travelgrunt) - [mono]リポジトリ内で疲労感なくcdできる！
- [trupositive](https://github.com/trupositive-ai/trupositive) - すべてのTerraform管理リソースにGitメタデータ（コミットSHA、ブランチ、リポジトリ）を自動的に注入するゼロ設定のラッパー。
- [validIaC](https://github.com/gofireflyio/validiac) - ValidIaCは、Terraformのベストプラクティス、清潔さ、セキュリティを確保するための最適なオープンソースツールを組み合わせたツール。
- [xterrafile](https://github.com/devopsmakers/xterrafile) - モジュールリジストリ、Git、またはローカルディレクトリから外部モジュールを体系的に管理し、Terraform（Goで書かれた）で使用可能にする。 :skull:
- [yj](https://github.com/sclevine/yj) - CLI - YAML、TOML、JSON、HCLの間を変換。マップの順序を保持。
- [yor](https://github.com/bridgecrewio/yor) - インフラコードフレームワーク（Terraform、Cloudformation、Serverless）の自動タグ付けとトレース。
- [zephy](https://github.com/henrybravo/zephy) - クラウドのリソースタグ戦略が不十分な場合、サブスクリプションにデプロイされたAzureリソースとTerraform Enterprise（HCPおよびセルフホスト）ワークスペースで管理されているリソースを比較。

### CI

- [setup-terraform](https://github.com/hashicorp/setup-terraform) - GitHub ActionsワークフローにTerraform CLIをセットアップ。
- [terraform-plan](https://github.com/cds-snc/terraform-plan) - GitHub ActionでTerra及プランを実行し、変更内容をコメントに追加。
- [terraform-risk-assessor](https://github.com/Liam-Johnston/terraform-risk-assessor) - Terraformプラン変更をAIで分析し、プルリクエストにリスク評価コメントを付加するGitHub Action。

### VS Code拡張

- [HashiCorp Terraform](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform)
- [vscode-terraform-live-graph](https://github.com/adamiBs/vscode-terraform-live-graph) - Terraform Live Graph Extension for Visual Studio Codeは、コードを書いている間におこなうリアルタイムTerraformグラフを生成できるプラグイン。
- [tf-nav](https://marketplace.visualstudio.com/items?itemName=owenrumney.tf-nav) - Terraform Navigation Extensionは、ファイルタイプごとにリソースをインデックス化し、簡単にナビゲートできるツリー表示を提供。

## ライブラリ

- [hcl-rs](https://github.com/martinohmann/hcl-rs) - Rustで書かれたHCLパーサーとエンコーダー（serde対応）
- [hcl4j](https://github.com/wondrify/hcl4j) - JavaでのHCLパーサー
- [nu_plugin_hcl](https://github.com/Yethal/nu_plugin_hcl) - Terraformをプログラムから扱うためのライブラリです。 [Nushell](https://github.com/nushell/nushell)
- [pyhcl](https://github.com/virtuald/pyhcl) - PythonでのHCLパーサー
- [python-hcl2](https://github.com/amplify-education/python-hcl2/) - PythonでのHC2パーサー
- [rhcl](https://github.com/winebarrel/rhcl) - 純粋なRuby HCLパーサー :skull:
- [tree-sitter-hcl](https://github.com/tree-sitter-grammars/tree-sitter-hcl) - tree-sitter用のHCL文法

## ボイラープレート

- [Solo-Engineer Stack](https://github.com/sarmakska/terraform-stack) - Terraformプロジェクト向けの雛形・構成例です。 関連コード: `terraform apply`。
- [Terraform Generator](https://github.com/sudokar/generator-tf-module) - terratestおよびkitchen-terraformをサポートする新しいTerraformモジュールまたはプロジェクトのスケルトン
- [Terraform GitOps Framework](https://www.kubestack.com) - AKS、EKS、GKE Kubernetesクラスタに対して信頼性の高い自動化を構築するために必要なすべての機能を一つの無料かつオープンソースのフレームワークで提供。

## セルフホスト型Terraformプラットフォーム

- [Lynx](https://github.com/clivern/lynx) - 高速、安全で信頼性の高いTerraformバックエンド。ユーザーに親しみやすいダッシュボード、プロジェクトおよび環境管理、ステートバージョン管理、ロックおよびスナップショット対応。
- [OTF](https://github.com/leg100/otf) - オープンなTerraformingフレームワーク、Terraform Enterpriseのオープンソース代替品であり、Terraform CLIの完全な統合を提供。
- [Terrakube](https://docs.terrakube.io) - Terraform Enterpriseのオープンソース代替品で、プライベートレジストリ、リモートステート、カスタムフロー、スケジュールされたワークスペース、視覚化されたステートをサポート。
- [Digger](https://digger.dev) - Terraform Cloud へのオープンソース代替品 - CI で Terraform のプランと適用ジョブを実行します。
- [cloud-concierge](https://github.com/dragondrop-cloud/cloud-concierge) - オープンソースで、未管理リソースを Terraform にコーディフィケートし、変化を検知し、クラウドコストおよびセキュリティ分析を、プルリクエストとして提供します。
- [Stack-Lifecycle-Deployment](https://github.com/D10S0VSkY-OSS/Stack-Lifecycle-Deployment) - クラウドに使用・プロビジョニングされたリソースの完全なライフサイクルを定義・管理するオープンソースソリューション。
- [Burrito](https://github.com/padok-team/burrito) - TACoS Kubernetes Operator - 「Terraform 用の ArgoCD」
- [Terrateam](https://terrateam.io) - Terraform Cloud/Enterprise へのオープンソース代替品。GitOps を中心に、GitHub とのネイティブ統合を備え、スケーラビリティ、セキュリティ、信頼性を設計しています。


## マネージドTerraformプラットフォーム :heavy_dollar_sign:

- [compliance.tf](https://compliance.tf) - Terraformワークフローを提供するマネージドプラットフォームです。 関連コード: `terraform plan`。
- [ControlMonkey](https://www.controlmonkey.io/) - Terraform/OpenTofu コード生成、クラウドインベントリ、IaC カバレッジを備えた Terraform Cloud への代替品。事前設定されたポリシー、変化の修正、ClickOps アクティビティスキャナーを含みます。 :heavy_dollar_sign:
- [Firefly](https://www.firefly.ai/) - CI ツールを活用した Terraform Cloud への代替品。Firefly プラットフォームは、クラウドをスキャンし、IaC カバレッジおよび変化検知を評価します。 :heavy_dollar_sign:
- [Scalr](https://www.scalr.com/) - Terraform Enterprise への代替品。OPA インテグレーション、組織構造、カスタムフック、他の DevOps プラットフォームとのネイティブ統合、および中央集約型レポート機能を備えています。 :heavy_dollar_sign:
- [Stategraph](https://stategraph.com) - Terraform と OpenTofu に状態ファイルのボトルネックをなくします。フラットな状態ファイルを実際のデータベースに置き換え、チームは並行してプランを実行し、状態は SQL でクエリ可能になり、プランは数分から数秒に短縮されます。 :heavy_dollar_sign:
- [env0](https://www.env0.com/) - Terraform Cloud/Enterprise への代替品。OPA インテグレーション、カスタムフロー、Terragrunt のサポートを備えています。 :heavy_dollar_sign:
- [Brainboard](https://www.brainboard.co) - AWS、GCP、Azure といった任意のクラウドプロバイダーから始めて、現代的なクラウドインフラを視覚的に設計・デプロイ・管理します。 :heavy_dollar_sign:
- [Spacelift](https://spacelift.io/) - Terraform Cloud/Enterprise への代替品。Terraform 用の協働インフラデリバリープラットフォーム。 :heavy_dollar_sign:
- [StackGuardian](https://stackguardian.io/) - 既存のクラウドリソースを IaC に変換するインフラコーディフィケーションおよびオーケストレーションプラットフォーム。Tirith、OPA、Checkov を用いたポリシー駆動型ワークフローを備え、プライベートランタイムおよびノーコードテンプレートのサポートを提供します。 :heavy_dollar_sign:

## Terraform Enterprise向けツール

- [terraform-enterprise-cli](https://github.com/skierkowski/terraform-enterprise-cli) - Terraform Enterprise のコマンドラインインターフェース。
- [terraform-enterprise-client](https://github.com/skierkowski/terraform-enterprise-client) - Terraform Enterprise API の Ruby クライアントおよびコマンドラインツール。
- [terraform-enterprise-migrator](https://github.com/sil-org/tfc-ops) - Terraform Enterprise 環境を旧バージョンから新しいバージョンへ移行するためのスクリプト。

## 動画

- [Your Weekly Dose of Terraform](https://www.youtube.com/channel/UCGH0yYPvlCN1VjSFMGVmFgQ) - Terraform に関するニュース、レビュー、インタビュー、Q&A、ライブコーディング、および一部のハッキングを週に1回配信するユーチューブチャンネル。
- [Terraform explained in 15 mins](https://www.youtube.com/watch?v=l5k1ai_GBDE) - 15分で Terraform を解説。
- [Terraform Course](https://www.youtube.com/watch?v=SLB_c_ayRMo) - AWS クラウドインフラを自動化。
- [How to Build Reusable, Composable, Battle tested Terraform Modules](https://www.youtube.com/watch?v=LVgP63BkhKQ) - Yevgeniy Brikman が、再利用可能で、組み立て可能で、テスト可能な Terraform コードを書く方法について話します。このプレゼンテーションは Terraform モジュールに焦点を当てていますが、Terraform が解決しようとした問題についての簡潔で明確な説明と、Terraform の基本的なデモ（約39分、2017年10月）を提供しています。
- [Building Scalable, Repeatable Infrastructure in the Cloud with Terraform](https://www.youtube.com/watch?v=cG7pcksTAnY) - Terraformがインフラとしてコードを実現する方法を、AWS上でTeamCityをデプロイする事例で示す
- [Creating a Google Compute Instance with Terraform](https://www.youtube.com/watch?v=fo3VX33Zx0c) - Terraformコードを使ってGoogle Compute Instanceを作成する例
- [Creating a Terraform Provider for Just About Anything](https://www.hashicorp.com/resources/creating-terraform-provider-for-anything) - このガイドをもとに、Terraformプロバイダーに貢献する方法や、自作する方法を学ぶ
- [Evolving Your Infrastructure with Terraform](https://www.youtube.com/watch?v=wgzgVm7Sqlk) - OpenCredoのCTOが、興味深い事例をもとに、Terraformが現実世界でどのように使われるかを詳しく解説
- [Going Multi-Cloud with Terraform and Nomad](https://www.youtube.com/watch?v=e42A4aBZUkQ).
- [How to Extend the Terraform Provider List](https://www.youtube.com/watch?v=2BvpqmFpchI) - このセッションでは、PaulがTerra及のプロバイダーを作成するプロセスを解説
- [Orchestrating Containers with Terraform and Consul](https://www.infoq.com/presentations/terraform-consul/) - Mitchell Hashimotoが、Terraformを使ってコンテナ化されたワークロードをデプロイし、スケーリングする方法を示す
- [Production ChaosMonkey with Terraform](https://www.youtube.com/watch?v=CPI6W3LK0-g) - DigitalOceanがTerraformを使って生産環境の統合テストを実行する方法
- [Running a Terraform Environment at Scale](https://www.youtube.com/watch?v=3JVGSq7QIS0) - 数百のAWSアカウントでTerraformをスケールして実行する方法
- [Setup Continuous Integration for a Terraform module](https://www.youtube.com/watch?v=vuJ6bjYKUcA) - CIとKitchen-Terraformを組み合わせて、Google Compute Instanceを作成するTerraformモジュールをテスト・タグ・公開する例
- [State of Terraform Providerland](https://www.youtube.com/watch?v=ar1PF5iDtbg) - Terraformプロバイダーの仕組みと、それを作成する方法を学ぶ
- [Terraform At Scale](https://www.youtube.com/watch?v=RldRDryLiXs) - SegmentがTerraformを使用する方法
- [Terraform w/ Lee Trout](https://www.youtube.com/watch?v=p2ESyuqPw1A) - 開発パターンと、Terraformコードを効果的に構成する方法に焦点を当てる
- [Terraforming the Composable World](https://www.youtube.com/watch?v=cHrOXPatFeg) - Terraformとオンプレミスの裸マシンプロビジョニングを統合する
- [Test and verify a Google Compute Instance with Kitchen-Terraform](https://www.youtube.com/watch?v=kiH3-LEveek) - Kitchen-Terraformを使って、Google Computeを生成するTerraformコードをテストする例
- [Untangling Terraform Through Refactoring](https://www.youtube.com/watch?v=OH6iDKaXpZs) - Terraformコードを慎重にリファクタリングし、リスクを最小限に抑える方法を学ぶ
- [Complete Terraform Course - From BEGINNER to PRO! (Learn Infrastructure as Code)](https://www.youtube.com/watch?v=7xngnjfIlK4) - 初心者からプロまで、クラウドプロバイダーに偏らず、一般的なアプローチで構成された完全なコース

## エディタープラグイン

- [Emacs terraform-mode](https://github.com/hcl-emacs/terraform-mode)
- [Intellij](https://plugins.jetbrains.com/plugin/7808-terraform-and-hcl)
- [Terraform-ls](https://github.com/hashicorp/terraform-ls)（Terraform Language Server）
- [Terraform-lsp](https://github.com/juliosueiras/terraform-lsp)（Terraform向けLanguage Server Protocol）
- [vim-hcl](https://github.com/jvirtanen/vim-hcl) - Terraform・HCL編集を支援するエディタープラグインです。
- [Vim-Terraform-Completion](https://github.com/juliosueiras/vim-terraform-completion)
- [Vim-Terraform](https://github.com/hashivim/vim-terraform)

## ライセンス

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法令で認められる範囲において、Shuaib Yunusは本作品に関するすべての著作権および関連・隣接する権利を放棄しています。
