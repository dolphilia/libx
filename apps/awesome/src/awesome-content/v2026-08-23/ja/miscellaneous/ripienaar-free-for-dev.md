---
title: "Awesome free-for.dev"
description: "free-for.devを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-ripienaar-free-for-dev-readme-md"
---

# Awesome free-for.dev

free-for.devを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

# Table of Contents


  * [Major Cloud Providers' Always-Free Limits](#major-cloud-providers)
  * [Cloud management solutions](#cloud-management-solutions)
  * [Analytics, Events, and Statistics](#analytics-events-and-statistics)
  * [APIs, Data and ML](#apis-data-and-ml)
  * [Artifact Repos](#artifact-repos)
  * [BaaS](#baas)
  * [Low-code Platform](#low-code-platform)
  * [CDN and Protection](#cdn-and-protection)
  * [CI and CD](#ci-and-cd)
  * [CMS](#cms)
  * [Code Generation](#code-generation)
  * [Code Quality](#code-quality)
  * [Code Search and Browsing](#code-search-and-browsing)
  * [Crash and Exception Handling](#crash-and-exception-handling)
  * [Data Visualization on Maps](#data-visualization-on-maps)
  * [Managed Data Services](#managed-data-services)
  * [Design and UI](#design-and-ui)
  * [Dev Blogging Sites](#dev-blogging-sites)
  * [DNS](#dns)
  * [Docker Related](#docker-related)
  * [Domain](#domain)
  * [Education and Career Development](#education-and-career-development)
  * [Email](#email)
  * [Feature Toggles Management Platforms](#feature-toggles-management-platforms)
  * [Font](#font)
  * [Forms](#forms)
  * [Generative AI](#generative-ai)
  * [IaaS](#iaas)
  * [IDE and Code Editing](#ide-and-code-editing)
  * [International Mobile Number Verification API and SDK](#international-mobile-number-verification-api-and-sdk)
  * [Issue Tracking and Project Management](#issue-tracking-and-project-management)
  * [Log Management](#log-management)
  * [Mobile App Distribution and Feedback](#mobile-app-distribution-and-feedback)
  * [Management Systems](#management-system)
  * [Messaging and Streaming](#messaging-and-streaming)
  * [Miscellaneous](#miscellaneous)
  * [Monitoring](#monitoring)
  * [PaaS](#paas)
  * [Package Build System](#package-build-system)
  * [Payment and Billing Integration](#payment-and-billing-integration)
  * [Privacy Management](#privacy-management)
  * [Screenshot APIs](#screenshot-apis)
  * [Flutter Related and Building IOS Apps without Mac](#flutter-related-and-building-ios-apps-without-mac)
  * [Search](#search)
  * [Security and PKI](#security-and-pki)
  * [Authentication, Authorization, and User Management](#authentication-authorization-and-user-management)
  * [Source Code Repos](#source-code-repos)
  * [Storage and Media Processing](#storage-and-media-processing)
  * [Tunneling, WebRTC, Web Socket Servers and Other Routers](#tunneling-webrtc-web-socket-servers-and-other-routers)
  * [Testing](#testing)
  * [Tools for Teams and Collaboration](#tools-for-teams-and-collaboration)
  * [Translation Management](#translation-management)
  * [Visitor Session Recording](#visitor-session-recording)
  * [Web Hosting](#web-hosting)
  * [Commenting Platforms](#commenting-platforms)
  * [Remote Desktop Tools](#remote-desktop-tools)
  * [Other Free Resources](#other-free-resources)

## Major Cloud Providers

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 28 frontend instance hours per day, nine backend instance hours per day
    * Cloud Firestore - 1GB storage, 50,000 reads, 20,000 writes, 20,000 deletes per day
    * Compute Engine - 1 non-preemptible e2-micro, 30GB HDD, 5GB snapshot storage (restricted to certain regions), 1 GB network egress from North America to all region destinations (excluding China and Australia) per month
    * Cloud Storage - 5GB, 1GB network egress
    * Cloud Shell - Web-based Linux shell/primary IDE with 5GB of persistent storage. 60-hour limit per week
    * Cloud Pub/Sub - 10GB of messages per month
    * Cloud Functions - 2 million invocations per month (includes both background and HTTP invocations)
    * Cloud Run - 2 million requests per month, 360,000 GB-seconds memory, 180,000 vCPU-seconds of compute time, 1 GB network egress from North America per month
    * Google Kubernetes Engine - No cluster management fee for one zonal cluster. Each user node is charged at standard Compute Engine pricing
    * BigQuery - 1 TB of querying per month, 10 GB of storage each month
    * Cloud Build - 120 build-minutes per day
    * [Google Colab](https://colab.research.google.com/) - 無料のJupyterノートブック開発環境
    * [Kaggle](https://www.kaggle.com/) - 4コアCPUと30GB RAMの計算環境（週間使用制限なし）。電話番号認証後、1台のNvidia Tesla P100 GPUまたは2台のNvidia Tesla T4 GPUを追加可能（週間使用制限30GPU時間）。身分認証後、1台のTPU v3-8（96コアCPU、330GB RAM）が20時間/週の使用制限で無料提供されます。詳細は [Technical Specifications](https://www.kaggle.com/docs/notebooks#technical-specifications) をご確認ください。
    * [ChromeRemoteDesktop](https://remotedesktop.google.com/) - Googleが提供する無料リモートデスクトップアプリ（デバイス数の制限がほとんどない）なので、Googleアカウントが必要です。
    * [Google AI Studio](https://aistudio.google.com/) - Gemini 3.5 Flash、Gemini 3 FlashおよびGemma 4モデルへの無料アクセス。Flashの無料プランでは1分間5回、1日20回、1分間250k入力トークンが利用可能。一方、Gemma 4の無料プランでは1分間30回、1日14.4k回、ただし（のみ）1分間16k入力トークンが利用可能。
    * Full, detailed list - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 月間1TBのエグリス、10MのHTTPリクエスト、月間2Mの関数呼び出し
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10個のカスタムメトリクスとアラーム、1MのAPIリクエスト、5GBのログデータのインジェスト、5GBのログデータアーカイブ
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 月間100分のビルド時間
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5人のアクティブユーザー、5,000リポジトリ/アカウント、月間50GBのストレージ、月間10Kリクエスト
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 月間1つのアクティブパイプライン
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GBのNoSQLデータベース
    * [Lambda](https://aws.amazon.com/lambda/) - 月間100万リクエスト
    * [SNS](https://aws.amazon.com/sns/) - 月間100万の公開数
    * [SES](https://aws.amazon.com/ses/) - 月間3,000メッセージ（6ヶ月分）
    * [SQS](https://aws.amazon.com/sqs/) - 月間100万のメッセージキューリクエスト
    * Full, detailed list - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com)
    * [App Service](https://azure.microsoft.com/services/app-service/) - 60CPU分/日を上限とする10個のWeb、モバイル、またはAPIアプリ
    * [Functions](https://azure.microsoft.com/services/functions/) - 月間100万リクエスト
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 高速かつ簡単で軽量な開発・テスト環境の有効化
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000個のオブジェクト
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 月間50,000件の保存ユーザー
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5人のアクティブユーザー、無制限のプライベートGitリポジトリ
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) - Linux、macOS、Windows向けオープンソースのための10個の無料並列ジョブと無制限分の分量
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 1日あたり8,000メッセージ
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 750時間、15GBのデータ処理および5規則（12ヶ月）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万件のプッシュ通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GBの出信（12ヶ月）
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GBのストレージと1,000RUsのプロビジョンドルーム
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) - SSL、認証/認可、カスタムドメインを無料で提供する静的アプリやサーバレス関数の構築・デプロイ・ホスティング
    * [Storage](https://azure.microsoft.com/services/storage/) - 100GBのLRS取引（Azure Files）、5GBのBlobストレージ、10GBのLRSアーカイブストレージ、2x64GB SSD（12ヶ月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（コンピュータビジョン、翻訳、顔検出、ボットなど）の無料プランを含む限定取引
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - AIベースの検索およびインデックスサービス、無料で10,000ドキュメントまで
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 管理されたKubernetesサービス、無料のクラスタ管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 1か月あたり10万回の操作
    * [Service Bus](https://azure.microsoft.com/products/service-bus/) - 750時間および1300万回の標準層ベースユニット（12ヶ月）
    * Full, detailed list - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * Compute
       - 2 AMD-based Compute VMs with 1/8 OCPU and 1 GB memory each
       - 2 Arm-based Ampere A1 cores and 12 GB of memory usable as one VM or up to 2 VMs
       - Instances will be reclaimed when [deemed idle](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)
    * Block Volume - 2 volumes, 200 GB total (used for compute)
    * Object Storage - 10 GB
    * Load balancer - 1 instance with 10 Mbps
    * Databases - 2 DBs, 20 GB each
    * Monitoring - 500 million ingestion data points, 1 billion retrieval datapoints
    * Bandwidth - 10 TB egress per month, speed limited to 50 Mbps on x64-based VM, 500 Mbps * core count on ARM-based VM
    * Public IP - 2 IPv4 for VMs, 1 IPv4 for load balancer
    * Notifications - 1 million delivery options per month, 1000 emails sent per month
    * Full, detailed list - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant database - 1 GB of data storage
    * Db2 database - 100MB of data storage
    * API Connect - 50,000 API calls per month
    * Availability Monitoring - 3 million data points per month
    * Log Analysis - 500MB of daily log
    * Full, detailed list - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [Application Services](https://www.cloudflare.com/plans/) - 無制限ドメイン数の無料DNS、DDoS保護、CDN、無料SSL、ファイアウォールルールおよびページルール、WAF、ボット対策、無料無制限レート制限（1ドメインあたり1ルール）、分析、メール転送
    * [Zero Trust & SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最大50ユーザー、24時間のアクティビティログ、3つのネットワーク場所
    * [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) -  ローカルに実行中のHTTPポートをtrycloudflare.comのランダムなサブドメイン経由でトンネル経由で公開可能。 [Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/)を使用し、アカウントは不要。より多くの機能（TCPトンネル、ロードバランシング、VPN）は [Zero Trust](https://www.cloudflare.com/products/zero-trust/) フリープランで利用可能。
    * [Workers](https://developers.cloudflare.com/workers/) - Cloudflareのグローバルネットワーク上で無料でサーバレスコードをデプロイ可能—1日あたり10万回のリクエスト。
    * [Workers KV](https://developers.cloudflare.com/kv) - 1日あたり10万回の読み取りリクエスト、1日あたり1,000回の書き込みリクエスト、1日あたり1,000回の削除リクエスト、1日あたり1,000回のリストリクエスト、1GBの保存データ
    * [R2](https://developers.cloudflare.com/r2/) - 1か月あたり10GB、1か月あたり100万件のクラスA操作、1か月あたり1000万件のクラスB操作
    * [D1](https://developers.cloudflare.com/d1/) - 1日あたり50万行の読み取り、1日あたり10万行の書き込み、1GBのストレージ
    * [Pages](https://developers.cloudflare.com/pages/) - Cloudflareの高速かつ安全なグローバルネットワーク上でウェブアプリを開発・デプロイできます。月間500回のビルド、100個のカスタムドメイン、統合SSL、無制限のアクセス席、無制限のプレビューデプロイメント、およびCloudflare Workersによるフルスタック機能を提供。
    * [Queues](https://developers.cloudflare.com/queues/) - 月間100万回の操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) - 月間1TBの無料（送信）トラフィック。

  * [Zoho](https://www.zoho.com) - メールサービスを開始したが、現在はさまざまなサービスを提供しており、そのうち一部が無料プランを提供しています。無料プランを提供するサービス一覧：
    * [Catalyst by Zoho](https://catalyst.zoho.com) -  豊富な [free tier](https://catalyst.zoho.com/free-tier.html)を備えたPaaS/フルスタッククラウドプラットフォーム
    * [Zoho Apptics](https://www.zoho.com/apptics/) - モバイル、ウェブ、デスクトップアプリのパフォーマンス監視、ユーザー行動分析、フィードバック収集を可能にする統合された実行可能な製品分析。無料プランは無制限で提供されています。
    * [Email](https://zoho.com/mail) 5人のユーザーまで無料。5GB/ユーザーおよび25MBの添付ファイル制限、1ドメイン。
    * [Zoho Assist](https://www.zoho.com/assist) - Zoho Assistの永遠無料プランには、1つの同時リモートサポートライセンスと、プロフェッショナルおよび従業員の使用に限界なしでアクセス可能な5つの未監視コンピュータライセンスが含まれます。
    * [Sprints](https://zoho.com/sprints) 5人のユーザーまで無料、5プロジェクト、500MBのストレージ。
    * [Docs](https://zoho.com/docs) - 5人のユーザーまで無料、1GBのアップロード制限および5GBのストレージ。Zoho Office Suite（Writer、Sheets、Show）が組み込まれています。
    * [Projects](https://zoho.com/projects) - 3人のユーザーまで無料、2プロジェクト、10MBの添付ファイル制限。同プランは [Bugtracker](https://zoho.com/bugtracker)にも適用されます。
    * [Connect](https://zoho.com/connect) - 25人のユーザーまで無料のチームコラボレーション。3グループ、3個のカスタムアプリ、3ボード、3マニュアル、10の統合、チャンネル、イベント、フォーラムを含む。
    * [Meeting](https://zoho.com/meeting) - 最大3人の参加者と10人のウェビナー参加者を対象としたミーティング。
    * [Vault](https://zoho.com/vault) - 個人向けにパスワード管理が利用可能です。
    * [Showtime](https://zoho.com/showtime) - リモートセッションのトレーニング用に最大5人の参加者を対象とした、もう一つのミーティングソフトウェア。
    * [Notebook](https://zoho.com/notebook) - Evernoteの無料代替品。
    * [Wiki](https://zoho.com/wiki) - 3人のユーザーまで無料、50MBのストレージ、無制限ページ、ZIPバックアップ、RSSおよびAtomフィード、アクセス制御、カスタマイズ可能なCSS。
    * [Subscriptions](https://zoho.com/subscriptions) - 20人の顧客/サブスクリプションまで無料の繰り返し請求管理。Zohoがすべての支払いホスティングを担当。過去40件のサブスクリプションメトリクスが保存されます。
    * [Checkout](https://zoho.com/checkout) - 3ページまでおよび最大50件の支払いをサポートする製品請求管理。
    * [Desk](https://zoho.com/desk) - 3人のアグリーティスト、プライベートな知識ベース、メールチケットを備えた顧客サポート管理。[Assist](https://zoho.com/assist)との統合により、1人のリモート技術者および5台の未監視コンピュータにアクセス可能です。
    * [Cliq](https://zoho.com/cliq) - チームチャットソフトウェア。100GBのストレージ、無制限のユーザー、チャンネルあたり100ユーザー、SSO対応。
    * [Campaigns](https://zoho.com/campaigns) - メールマーケティング
    * [Forms](https://zoho.com/forms) - フォーム作成者
    * [Sign](https://zoho.com/sign) - 紙のない署名
    * [Surveys](https://zoho.com/surveys) - オンライン調査
     * [Bookings](https://zoho.com/bookings) - 予約スケジューリング

**[⬆️ Back to Top](#table-of-contents)**

## Cloud management solutions

  * [Brainboard](https://www.brainboard.co) - 視覚的にクラウドインフラストラクチャを端から端まで構築・管理する協働ソリューション。
  * [Cloud 66](https://www.cloud66.com/) - 個人プロジェクト向け無料（1台のデプロイサーバー、1つの静的サイトを含む）。Cloud 66は、どのクラウドでもアプリケーションを構築・デプロイ・成長させるためのすべての機能を提供し、サーバーの煩雑な部分を省略します。
  * [deployment.io](https://deployment.io) - Deployment.ioはAWSでのデプロイを自動化する開発者向けツール。無料プランでは、1ユーザー（開発者）が無制限の静的サイト、ウェブサービス、環境をデプロイできます。月間10回のジョブ実行を無料で提供し、プレビューと自動デプロイも無料プランに含まれます。
  * [Parsivex](https://www.parsivex.com) - Parsivexは、AWSアカウント内の無駄なEC2、未接続のEBS、大きすぎるRDS、古くなったスナップショット、NATゲートウェイの過使用などすべてをスキャンします。無料プランでは、1つのAWSアカウントに対して月1回のスキャンを行い、月間の無駄量とカテゴリ別分解を返します。有料プランでは、項目別結果とスケジュールされた再スキャンにアクセスできます。
  * [Pulumi](https://www.pulumi.com/) - 現代的なインフラストラクチャとしてのコードプラットフォーム。既存のプログラミング言語やツールを使用して、クラウドインフラストラクチャを構築・デプロイ・管理できます。
  * [scalr.com](https://scalr.com/) - ScalrはTerraformによるインフラストラクチャと設定の管理において、協働と自動化をより効果的に実現するTerraform自動化および協働（TACO）製品です。フルTerraform CLIサポート、OPA統合、階層構成モデルを提供。SSOは課税されません。すべての機能が含まれます。月間50回までの実行が無料です。

**[⬆️ Back to Top](#table-of-contents)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) - 5ユーザーまでに無制限の公開・プライベートGitリポジトリ。CI/CD用のパイプラインを提供。
  * [Codeberg](https://codeberg.org/) - 無料でオープンソースプロジェクト向けに無制限の公開・プライベートGitリポジトリ（無制限の協力者を含む）。 [Forgejo](https://forgejo.org/)を採用。静的ウェブサイトホスティング（[Codeberg Pages](https://codeberg.page/)）。CI/CDホスティング（[Codeberg's CI](https://docs.codeberg.org/ci/)）。翻訳ホスティング（[Codeberg Translate](https://translate.codeberg.org/)）。パッケージおよびコンテナホスティング、プロジェクト管理、問題追跡を含む。
  * [framagit.org](https://framagit.org/) - FramagitはFramasoftが提供するGitLabベースのソフトウェアフォールディングで、CI、静的ページ、プロジェクトページ、問題追跡を提供。
  * [GitGud](https://gitgud.io) - 無制限のプライベートおよび公開リポジトリ。永久無料。GitLabおよびSapphireを採用。CI/CD、静的ホスティング、コンテナレジストリ、プロジェクト管理、問題追跡を含む。
  * [GitHub](https://github.com/) - 無制限の公開リポジトリおよび無制限のプライベートリポジトリ（無制限の協力者を含む）。CI/CD、開発環境、静的ホスティング、パッケージおよびコンテナホスティング、プロジェクト管理、AIコピオットを含む。
  * [gitlab.com](https://about.gitlab.com/) - 無制限の公開およびプライベートGitリポジトリ（最大5人の協力者まで）。CI/CD、静的ホスティング、コンテナレジストリ、プロジェクト管理、問題追跡を含む。
  * [heptapod.net](https://foss.heptapod.net/) - HeptapodはGitLab Community Editionのフレンドリーなフォークで、Mercurialのサポートを提供。
  * [pijul.com](https://pijul.com/) - 無制限の無料オープンソース分散版制御システム。特徴は、パッチ理論に基づくもので、学習・使用・配布が容易です。git/hg/svn/darcsの多くの問題を解決します。
  * [projectlocker.com](https://projectlocker.com) - 1つの無料プライベートプロジェクト（GitおよびSubversion）と50MBのスペース
  * [RocketGit](https://rocketgit.com) - Gitに基づくリポジトリホスティング。公開およびプライベートリポジトリは無制限。
  * [savannah.gnu.org](https://savannah.gnu.org/) - フリーソフトウェアプロジェクト（GNUプロジェクト）向けの協働ソフトウェア開発管理システム
  * [savannah.nongnu.org](https://savannah.nongnu.org/) - フリーソフトウェアプロジェクト（非GNUプロジェクト）向けの協働ソフトウェと開発管理システム

**[⬆️ Back to Top](#table-of-contents)**

## APIs, Data, and ML

  * [Abstract API](https://www.abstractapi.com) - IP地理位置、電話番号検証、メール検証など、さまざまな用途向けのAPIセット
  * [AlphaAI](https://alphai.io/developers) - 金融ニュースAPIおよびMCPサーバー。各記事には、銘柄別影響分析、カテゴリ、1〜10の関連度スコアが付与され、SECフォーム4の内部取引情報はスコア付きイベントとして処理される。無料プランには、RESTおよびMCPそれぞれで分に20回、1日あたり100回のリクエストが含まれ、クレジットカードは不要。
  * [AnyHook](https://anyhook.net) - インバウンドウェブhookリレー：Stripe、GitHub、またはLINEボットのウェブhookをこのサービスに設定し、各イベントをストレージし、あなたのハンドラーに配信し、エンドポイントがダウンした場合に自動的にリトライし、再現可能なログを保持します。APIからエンドポイントを作成可能で、アカウントは不要。無料プランには1か月3,000イベント、1アプリ、3回リトライ、3日間の保存期間が含まれ、クレジットカードは不要。
  * [Apify](https://www.apify.com/) - ウェブスクレイピングおよび自動化プラットフォーム。任意のウェブサイトにAPIを作成し、データを抽出できます。事前準備済みのスクレイピングツール、統合プロキシ、カスタムソリューションを提供。無料プランには毎月$5のプラットフォームクレジットが含まれます。
  * [APITemplate.io](https://apitemplate.io) - シンプルなAPIまたはZapierやAirtableなどの自動化ツールを使って、画像やPDFドキュメントを自動生成できます。CSS/HTMLは不要です。無料プランには1か月50枚の画像と3つのテンプレートが含まれます。
  * [APIVerve](https://apiverve.com) - 120以上のAPIに即時アクセスが可能。品質、一貫性、信頼性を意識して構築されています。無料プランでは1か月50個のAPIトークンまでが提供されます。（2025-06-25に停止可能性あり）
  * [Arize AI](https://arize.com/) - モデル監視およびデータ品質やパフォーマンスズレなどの問題の原因特定に向けた機械学習の可視化。無料プランでは2モデルまでが対応。
  * [Beeceptor](https://beeceptor.com) - ノーコード、クラウドベースのプラットフォーム。複数プロトコル（REST、SOAP、gRPC、GraphQL）のAPIをモックおよびデバッグできる。ルールベースの論理、CRUD、状態付きモック、プロキシ、CORS管理を提供し、より迅速な統合とテストを実現。無料プランには1日50回のリクエストが含まれ、誰でもダッシュボードURLを共有することで、提出されたリクエストとレスポンスを閲覧可能です。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 現代ウェブ向けの高速かつ正確な無料API（無制限または10K〜50K回/月）を提供。IP地理位置、逆地理コード、ネットワーク洞察、メールおよび電話番号検証、クライアント情報など。
  * [Brave Search API](https://brave.com/search/api/) - 独立したウェブ、ニュース、画像、動画検索およびAI/LLMコンテキストAPI。RAGパイプラインやAIエージェントに適しています。無料プランには毎月$5のクレジットが含まれ（クレジットカードによる確認が必要）。
  * [Browse AI](https://www.browse.ai) - ウェブ上のデータの抽出および監視。1か月1,000クレジットが無料で提供され、1,000個の同時リクエストに相当。
  * [Calendarific](https://calendarific.com) - 200以上の国を対象としたエンタープライズクラスの公開休日APIサービス。無料プランには1か月500回の呼び出しを提供。
  * [Canopy](https://www.canopyapi.co/) - Amazon.comの商品、検索、カテゴリデータ向けのGraphQL API。無料プランには1か月100回の呼び出しを提供。
  * [CarAPI.dev](https://carapi.dev) - 包括的な自動車データAPI。VIN解読、盗難車チェック、車両価格評価、検査データなど。無料プランにはすべての9エンドポイントで1か月100回のリクエストが含まれます。
  * [CatchDoms](https://catchdoms.com) - 16のマーケットプレイスから取得された期限切れおよび価格下落ドメインリストを集約。SEO強化（バックリンク、トラストフロー、Wayback履歴）および品質スコアを提供。無料プラン：10件の解錠リスト、5件の好意リスト、3件の保存検索。登録時に7日間のプロトライアルが提供され、完全なREST APIおよびMCPサーバーへのアクセスが可能。
  * [Cloudmersive](https://cloudmersive.com/) - ドキュメント変換、ウイルススキャンなど、広範なAPIライブラリへのフルアクセスを提供するユーティリティAPIプラットフォーム。月間600回のリクエスト、北米AZ地域のみ、最大ファイルサイズ2.5MB。
  * [Colaboratory](https://colab.research.google.com) - 無料のウェブベースPythonノートブック環境（Nvidia Tesla K80 GPU搭載）
  * [CometML](https://www.comet.com/site/) - 実験記録、モデルプロダクション管理、モデル登録、完全なデータリネスをカバーするMLOpsプラットフォーム。個人および学術研究者向け無料。
  * [Commerce Layer](https://commercelayer.io) - コンポジブルなコンメルスAPI。任意のフロントエンドから注文の作成・配置・管理が可能。開発者プランでは月間100件の注文と最大1,000SKUが無料で利用可能。
  * [Composio](https://composio.dev/) - AIエージェントおよびLLM向けの統合プラットフォーム。アグエントインターネット上の200以上のツールを統合可能。
  * [Conversion Tools](https://conversiontools.io/) - ドキュメント、画像、動画、音声、eBookを対象としたオンラインファイル変換サービス。REST APIが提供され、Node.js、PHP、Python向けのライブラリも用意。50GBまでのファイルサポート（有料プラン）。無料プランではファイルサイズ（20MB）および変換回数（1日30回、月300回）が制限される。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 国、地域、都道府県、市区町村、郵便番号など、幅広い情報を提供するAPIおよびマイクロサービス。無料プランでは1日100回のリクエストまでが対象。
  * [Coupler](https://www.coupler.io/) - アプリ間のデータ統合ツール。リアルタイムダッシュボードやレポートを作成し、値を変換・操作し、洞察を収集・バックアップできる。無料プランでは1ユーザー、データ接続、データソース、データ宛先までが制限される。また、データの再読み込みは手動で必要。
  * [CraftMyPDF](https://craftmypdf.com) - 再利用可能なテンプレートからPDFドキュメントを自動生成。ドロップ＆ドロップエディタとシンプルなAPIを提供。無料プランでは月間100件のPDFと3つのテンプレートが提供される。
  * [Cube](https://cube.dev/) - Cubeは、現代のデータストアからデータを取得し、一貫した定義に整理し、すべてのアプリケーションに提供するデータエンジニアやアプリ開発者向けツール。Cube Cloudを活用することで、最も効率的にCubeを使用できる。無料プランでは1日1,000クエリまでが制限される。
  * [CurlHub](https://curlhub.io) - API呼び出しの検証およびデバッグ用プロキシサービス。無料プランでは月間10,000リクエストまでが対象。
  * [CurrencyScoop](https://currencyscoop.com) - フィンテックアプリ向けリアルタイム通貨データAPI。無料プランでは月間5,000回の呼び出しまでが対象。
  * [CustomJS](https://www.customjs.io) - HTMLからPDF、PDFからPNG／テキストおよびPDFのマージ／抽出／マージAPI。無料プランでは月間600回の呼び出しまでが対象。
  * [Data Fetcher](https://datafetcher.com) - AirtableにアプリまたはAPIに接続できる。コードなしで接続可能。APIリクエストを実行するためのPostman風インターフェース。数十のアプリとの事前構築された統合あり。無料プランでは月間100回の実行が可能。
  * [Data Miner](https://dataminer.io/) - ウェブページからCSVまたはExcel形式でデータを抽出するためのブラウザ拡張機能（Google Chrome、MS Edge対応）。無料プランでは月間500ページまでが対象。
  * [Dataimporter.io](https://www.dataimporter.io) - Salesforceへのデータ接続、クリーニング、インポートを行うツール。無料プランでは月間20,000件のレコードまでが対象。
  * [Datalore](https://datalore.jetbrains.com) - JetBrainsによるPythonノートブック。月間10GBのストレージと120時間の実行時間提供。
  * [DB Designer](https://www.dbdesigner.net/) - クラウドベースのデータベーススキーマ設計およびモデリングツール。無料のスタートプランでは2つのデータベースモデルと各モデルに10テーブルまでが対象。
  * [DB-IP](https://db-ip.com/api/free) - 1IPあたり1日1,000リクエストの無料IP地理位置API。また、CC-BY 4.0ライセンスに基づくライトデータベースも無料。
  * [DeepAR](https://developer.deepar.ai) - あらゆるプラットフォームに対応する拡張現実用顔フィルター。1つのSDKで提供。無料プランでは月間10人のアクティブユーザー（MAU）までが対象で、最大4人の顔を追跡可能。
  * [Deepnote](https://deepnote.com) - 新しいデータサイエンスノートブック。Jupyterはリアルタイムコラボレーションに対応し、クラウド上で実行可能。無料プランでは個人プロジェクトは無制限、基本マシン（5GB RAM、2vCPU）は無制限、編集者数3人までのチームが対象。
  * [Compare JSON](https://comparejson.com) - JSONデータ構造間の差分を比較できるオンラインツールで、JSONデータ内の差分を迅速に特定できます。
  * [Disease.sh](https://disease.sh/) - コロナウイルス関連アプリ開発に必要な正確なデータを提供する無料APIです。
  * [Doczilla](https://www.doczilla.app/) - HTML/CSS/JSコードからスクリーンショットやPDFを直接生成できるSaaS API。無料プランでは月に250ドキュメントまで可能です。
  * [Doppio](https://doppio.sh/) - PDFやスクリーンショットの生成とプライベートストレージを可能にするマネージドAPI。無料プランでは月に400件まで可能です。
  * [DocPenny](https://docpenny.com) - テンプレート、Webhook配信、クレジット制のHTMLからPDFへのドキュメント生成。無料プランは月に50クレジット（クレジットカード不要）。
  * [Doqlo](https://doqlo.com/) - CSVからWebアプリまたは公開APIを使って、大量に埋め込み、メールマージを行うPDFフォーム。無料プランは月に100出力PDFまで可能です。
  * [drawDB](https://drawdb.app/) - サインアップ不要の無料かつオープンソースのオンラインデータベース図編集ツール。
  * [DynamicDocs](https://advicement.io) - LaTeXテンプレートに基づいてPDFドキュメントを生成するJSONからPDFAPI。無料プランは月に50回API呼び出しまでで、テンプレートライブラリにアクセス可能です。
  * [Earnings Feed](https://earningsfeed.com/api) - リアルタイムのSEC提出書類、内部取引、機関保有情報API。無料プランは分間15回までです。
  * [Export SDK](https://exportsdk.com) - ドラッグ＆ドロップテンプレートエディタを備えたPDF生成API。SDKとノコード統合を提供。無料プランは月に250ページ、無制限ユーザー、3テンプレートまでです。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) - HTTPリクエストを送信できる無料ウェブベースのHTTPクライアント。
  * [Financial Data](https://financialdata.net/) - 株価および金融データAPI。無料プランは日間300リクエストまでです。
  * [finlight](https://finlight.me) - リアルタイムの金融ニュースAPI。エンティティ解決（ティッカー、ISIN）および感情タグ付けを提供。REST、WebSocket、Webhook、MCPサーバーで利用可能。無料プラン：RESTおよびMCPで月に5,000リクエスト、12時間遅延の記事、クレジ及不要。
  * [Firecrawl](https://www.firecrawl.dev/) - ウェブサイトをスクレイピングし、クリーンなLLM用マーカーまたは構造化データに変換するAPI。JavaScriptレンダリング、プロキシ、レート制限を処理。無料プランは月に1,000クレジット（クレジットカード不要）です。
  * [FormatJSONOnline.com](https://formatjsononline.com) - JSONデータのフォーマット、検証、比較、ミニフィケーションを即時に行える無料ブラウザベースツール。
  * [FraudLabs Pro](https://www.fraudlabspro.com) - クレジットカード決済の詐欺を検出する注文取引のスクリーニング。このREST APIは、注文の入力パラメータに基づいてすべての詐欺特徴を検出します。無料マイクロプランは月に500取引までです。
  * [FreeIPAPI](https://freeipapi.com) - 商業および非商業ユーザー向けの無料、高速、信頼性の高いIP地理位置API（JSON形式）。
  * [Geolocated.io](https://geolocated.io) - マルチ連携サーバーを備えたIP地理位置API。無料プランは日間2,000リクエストまでです。
  * [Hex](https://hex.tech/) - ノートブック、データアプリ、知識ライブラリ向けの協働データプラットフォーム。無料コミュニティプランは5プロジェクトまでです。
  * [Hook0](https://www.hook0.com/) - Hook0はWebhook-as-a-service（WaaS）のオープンソースツールで、オンライン製品がWebhookを提供しやすくなります。無料で1日100イベントまで送信可能で、7日間の履歴を保持します。
  * [Hoppscotch](https://hoppscotch.io) - 無料・高速・美しいAPIリクエストビルダー
  * [HS Ping](https://hsping.com) - マルチ国対応のHS（ハーモニズドシステム）およびHTS（ハーモニズドターフィー・システム）コード検索API。無料プランでは1日100回まで検索可能です。
  * [huggingface.co](https://huggingface.co) - Pytorch、TensorFlow、JAX向けのNLPモデルの構築・学習・デプロイ。月間30,000文字までの無料プラン。
  * [Insomnia](https://insomnia.rest) - RESTおよびGraphQLをサポートするAPIクライアント。オープンソースでAPI設計とテストが可能。
  * [Inngest](https://www.inngest.com) - TypeScript、Python、Go向けの持続可能な実行とイベント駆動型ワークフロー。ホビープランは無料で、月間50,000回の実行、5つの並列ステップ、500,000件のイベントの受入、クレジットカード不要。
  * [Invantive Cloud](https://cloud.invantive.com/) - Exact Online、Twinfield、ActiveCampaignまたはVismaなどの70以上の（クラウド）プラットフォームにアクセス可能。Invantive SQLまたはOData4（通常はPower BIまたはPower Query）を使用。データの複製と交換機能を備えています。開発者および実装コンサルタント向け無料プラン。特定のプラットフォームではデータ量に制限があるものの無料提供。
  * [IP Geolocation API by ipwho.org](https://ipwho.org/) - 1日2,000回の無料リクエスト。高速かつ企業レベルのAPIで、企業向け価格ではなく利用可能。開発者、企業、政府、教育機関のクライアントから信頼されています。12以上の地域にサーバーを展開しています。
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) - AbstractのIP地理位置API — 1,000回の無料リクエストを提供。
  * [IP Geolocation](https://ipgeolocation.io/) - IP地理位置API — 開発者向けの永久無料プラン（1日1,000リクエストまで）。
  * [ip-api](https://ip-api.com) - IP地理位置API — 非営利利用向け無料プラン。APIキー不要。無料プランでは、同じIPアドレスからのリクエストは1分間に45回まで。
  * [IP.City](https://ip.city) - 1日100回の無料IP地理位置リクエスト
  * [IP2Location.io](https://www.ip2location.io/) - フリーミアム、高速かつ信頼性の高いIP地理位置API。都市名、座標、ISP、ASNなどデータを提供。無料プランには月間50,000クレジットが含まれます。IP2Location.ioでは、月間500回の無料WHOISおよびホストドメイン検索も提供。ドメイン登録情報を確認し、特定のIPにホストされているドメインを検索可能です。より多くの機能を提供する有料プランにアップグレードできます。
  * [Proxmint GeoIP](https://proxmint.com/tools/ip-lookup) — 無料IP → 国/都市/ASN JSON API。キー不要、CORSが開かれています。MaxMind GeoLite2。
  * [ip2geo.dev](https://ip2geo.dev) - IPアドレスから都市、国、時帯、ASN、通貨などの位置データに変換するAPI。無料プランには月間1,000リクエストが含まれます。
  * [ipaddress.sh](https://ipaddress.sh) - 異なる [formats](https://about.ipaddress.sh/) でのパブリックIPアドレスを取得できるシンプルなサービス。
  * [ipapi.is](https://ipapi.is/) - 開発者向け開発者向けの信頼性の高いIPアドレスAPI。最も優れたホスティング検出機能を備えています。無料プランではサインアップなしで1,000回の検索が可能です。
  * [ipapi](https://ipapi.co/) - Kloudend, IncによるIPアドレス位置API — AWS上で構築された信頼性の高い地理位置API。Fortune 500企業から信頼されています。無料プランではサインアップなしで月間30,000回の検索が可能です（1日1,000回）。
  * [ipbase.com](https://ipbase.com) - IP地理位置API — 月間150回の無料プランを提供。
  * [IPinfo](https://ipinfo.io/) - 高速かつ正確で無料（月間50,000回まで）のIPアドレスデータAPI。地理位置、企業、キャリア、IP範囲、ドメイン、悪用連絡先などに関する詳細を提供。すべての有料APIは無料で試用可能です。
  * [IPLocate](https://www.iplocate.io) - IP地理位置API — 1日1,000回まで無料。プロキシ／VPN／ホスティング検出、ASNデータ、IPから企業へのマッピングなども提供。IPLocateは、月間無料でダウンロード可能なIPから国およびIPからASNデータベース（CSVまたはGeoIP対応MMDB形式）も提供しています。
  * [IPTrace](https://iptrace.io) - 驚くほどシンプルなAPIで、ビジネスに信頼性と便利なIP地理情報データを提供。月間50,000回の無料リクエスト。
  * [JSON IP](https://getjsonip.com) - リクエストされたクライアントのパブリックIPアドレスを返す。無料プランには登録不要。CORSにより、ブラウザからクライアントサイドのJavaScriptでデータを取得可能。クライアントおよびサーバーIPの変化を監視するサービスに有用。リクエスト無制限。
  * [JSON to Table](https://jsontotable.org) - JSONをインタラクティブなテーブルに変換し、迅速に閲覧・編集・共有できる。
  * [JSON2Video](https://json2video.com) - 動画編集APIで、マーケティングやSNS動画を自動化。コードなしでプログラム的にも実行可能。
  * [JSONGrid](https://jsongrid.com) - 複雑なJSONデータを視覚的に表示・編集・フィルタリングし、美しいテーブルグリッドに変換。リンクでJSONデータを保存・共有。
  * [JSONing](https://jsoning.com/api/) - JSONオブジェクトから仮のREST APIを作成し、HTTPステータスコード、ヘッダー、レスポンスボディをカスタマイズ。
  * [JSONSwiss](https://www.jsonswiss.com/) - JSONSwissは、強力なオンラインJSON閲覧・編集・検証ツール。AIによる修復、ツリービュー、テーブルビュー、12以上のプログラミング言語でのコード生成、JSONをCSV、XML、YAML、プロパティなどに変換可能。
  * [KillBait API](https://killbait.com/api/doc) - KillBait APIは、URLを提出してコンテンツ評価を行い、クリックバイトの可能性を検出・記事を分類する機能を提供。APIは中程度の発信頻度に設計されており、1時間1回、1日10回の制限がある。メディアパートナーは高い制限を申請可能。
  * [Kreya](https://kreya.app) - 無料のgRPC GUIクライアントでgRPC APIを呼び出し・テスト可能。サーバーリフレクションによりgRPC APIをインポート可能。
  * [LoginLlama](https://loginllama.app) - ログインセキュリティAPIで、不正・怪しいログインを検出し、顧客に通知。月間1,000回のログインまで無料。
  * [Market Data API](https://www.marketdata.app) - 株式、オプション、投資信託など、実時間および歴史データを提供。無料永遠APIプランは、毎日100回のAPIリクエストを無料で提供。
  * [Maxim AI](https://getmaxim.ai/) - AIアグエントのシミュレーション、評価、観察を行う。Maximは、AIアグエントの信頼性の高い配信と>5倍速い開発を支援する、端到端の評価・観察プラットフォーム。インディーデベロッパーおよび小規模チーム（3席まで）に無料で提供。
  * [microlink.io](https://microlink.io/) - 任意のウェブサイトをデータに変換。メタタグの標準化、美しさのリンクプレビュー、スクレイピング機能、またはスクリーンショットサービスを提供。毎日50回リクエスト、毎日無料。
  * [Mintlify](https://mintlify.com) - APIドキュメンテーションの現代的な標準。美しい且つ保守しやすいUIコンポーネント、アプリ内検索、インタラクティブなプレイグランド。1編集者分無料。
  * [MockAPI](https://www.mockapi.io/) - MockAPIは、APIを迅速にモックアップし、カスタムデータを生成し、RESTフルインターフェースで操作できるシンプルなツール。これはプロトタイピング・テスト・学習用のツールとして設計されている。無料プランは1プロジェクト/2リソースまで。
  * [Mockerito](https://mockerito.com/) - 無料のモックREST APIサービス。9のドメイン（電子商取引、金融、医療、教育、採用、ソーシャルメディア、株式市場、天気、航空）にわたって現実的なデータを提供。登録不要、APIキー不要、リクエスト無制限。フロントエンドプロトタイピング、APIテスト、ウェブ開発の学習・指導に最適。
  * [Mockfly](https://www.mockfly.dev/) - Mockflyは、APIモックと機能フラグ管理に信頼できる開発ツール。直感的なインターフェースでモックAPIを迅速に生成・制御可能。無料プランは1日500リクエストまで。
  * [Mocko.dev](https://mocko.dev/) - APIをプロキシし、クラウド上でモックするエンドポイントを選択し、トラフィックを確認。無料で提供。開発および統合テストを高速化。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) -  複数ノードでエクスイットIPアドレスを確認し、異なるグローバル地域やサービスがどのようにIPを認識しているかを理解するための無料ツール。制御DなどのルールベースのDNS分割ツールのテストに有用。
  * [NASdisks Drive Data API](https://www.nasdisks.com/data/) - 無料、キー不要、CORS対応のAPI。NAS HDD/SSD仕様、モデルごとのCMR/SMR分類、Backblazeドライブ統計から導出された年間故障率。JSONまたはCSVを返す。CC BY 4.0、登録不要。
  * [News API](https://newsapi.org) - ウェブ上でコードでニュースを検索し、JSON結果を取得。開発者には1日100回の無料クエリが提供されます。記事は24時間の遅延があります。
  * [numlookupapi.com](https://numlookupapi.com) - 無料の電話番号検証API - 月間100回の無料リクエスト。
  * [OCR.Space](https://ocr.space/) - OCR APIは画像やPDFファイルを解析し、JSON形式でテキスト結果を返します。月間25,000回のリクエストが無料で、ファイルサイズ制限は1MBです。
  * [OpenAPI3 Designer](https://openapidesigner.com/) - 視覚的にOpen API 3の定義を作成できます（無料）。
  * [Parseur](https://parseur.com) - 月20ページ無料：PDFやメールからデータを抽出。AI駆動。完全なAPIアクセス。
  * [PDF-API.io](https://pdf-api.io) - PDF自動化API、視覚的なテンプレートエディタ、HTMLからPDFへの変換、動的データ統合、PDFレンダリングをAPIで実現。無料プランには1つのテンプレートと月100件のPDFが含まれます。
  * [PDFBolt](https://pdfbolt.com) - プライバシーを重視した開発者向けPDF生成API。ストリップのドキュメンテーションを採用し、月500回の無料PDF変換を提供。
  * [Pexafy](https://pexafy.com) - 9つの無料写真ソース（Unsplash、Pexels、Pixabay、Kaboompicsなど）を対象とした意味論的画像検索API。900万以上の写真を1つのJSONスキーマで統合し、各ソースごとに1つの統合ではなく。自然言語によるクエリ、逆画像検索、色、方向、ライセンスフィルター。読み取りエンドポイントでCORSが開放されているため、ブラウザから実行可能です。無料プランには月5,000リクエストと1キーが含まれ、アプリレビューは不要です。
  * [Pixela](https://pixe.la/) - 無料のdaystreamデータベースサービス。すべての操作はAPIで実行可能。ヒートマップや線グラフによる可視化も可能です。
  * [Posthook](https://posthook.io) - 将来の時間にWebhookをスケジュールし、自動リトライ、配信トラッキング、失敗アラートを提供。無料プランには月1,000のWebhookが含まれます。
  * [Postman](https://postman.com) - Postmanでワークフローを簡素化し、より良いAPIを速やかに作成。Postmanアプリは永遠に無料で利用可能です。Postmanクラウド機能も、特定の制限のもとで永遠に無料です。
  * [PrefectCloud](https://www.prefect.io/cloud/) - データフロー自動化の完全なプラットフォーム。無料プランには5つのデプロイ済みワークフローと月500分のサーバレスコンピューティングクレジットが含まれます。
  * [Preset Cloud](https://preset.io/) - ホストされたApache Supersetサービス。5人のユーザー以下のチームには永遠に無料で利用可能。無コードチャートビルダー、協働SQLエディタを備え、無制限のダッシュボードとチャートを提供。
  * [ProxySentry](https://proxysentry.io/) - 住宅プロキシやVPNを検出するIP API。ProxySentry.ioはrapidapi.com上で月10kリクエストの無料プランを提供。
  * [Reducto](https://reducto.ai) - 任意の非構造化ドキュメント（PDF、XLSX、JPG、PPTXなど）を構造化されたJSONデータに変換。データのパース、抽出、PDFフォームの編集が可能です。無料プランには15kの無料クレジットと支払い制のプランが提供されます。
  * [Rendi](https://rendi.dev) - FFmpeg API - FFmpegのREST API。インフラストラクチャを扱わずにオンラインでFFmpegを実行。無料プランには月間処理量と4vCPUが提供されます。
  * [RequestBin.com](https://requestbin.com) - HTTPリクエストを送信できる無料エンドポイントを作成。そのエンドポイントに送信されたすべてのHTTPリクエストは、関連するペイロードとヘッダーとともに記録され、Webhookやその他のサービスからの推奨を観察できます。
  * [ROBOHASH](https://robohash.org/) - 任意のテキストからユニークでカッコイイ画像を生成するウェブサービス。
  * [Scraper's Proxy](https://scrapersproxy.com) - シンプルなHTTPプロキシAPIによるスクレイピング。匿名でスクレイピングでき、制限やブロック、CAPTCHAの心配が不要です。月間最初の100回の成功したスクレイピングが無料で、JavaScriptレンダリングも含まれます（サポートに連絡すればさらに利用可能）。
  * [ScrapingAnt](https://scrapingant.com/) - ヘッドレスChromeスクレイピングAPIと無料のチェックプロキシサービス。JavaScriptレンダリング、プレミアム回転プロキシ、CAPTCHA回避。無料10,000APIクレジット。
  * [SerpApi](https://serpapi.com/) - リアルタイム検索エンジンのスクレイピングAPI。Google、YouTube、Bing、Baidu、Walmartなど多くのサービスに対して構造化されたJSON結果を返します。無料プランには月間100回の成功したAPI呼び出しを含みます。
  * [Simplescraper](https://simplescraper.io) - 各操作後にWebhookをトリガーします。無料プランには月間100のクラウドスクレイピングクレジットを含みます。
  * [Geekflare API](https://geekflare.com/api/) - Geekflare APIは、ウェブサイトをMarkdownにスクレイピングしたり、スクリーンショットを撮ったり、TLSスキャンやDNSリゾルブを実行したり、ロード時間のテストなどを可能にします。無料プランでは月間500のAPIクレジット（例：500件のDNSリゾルブ、250件のウェブスクレイピング、または100件のスクリーンショット）が提供されます。See [credit mapping](https://docs.geekflare.com/api/api-credit-mapping)。
  * [SmartParse](https://smartparse.io) - SmartParseは、データ移行およびCSVからAPIへのプラットフォームで、開発者向けの時間とコストを節約するツールを提供します。無料プランには月間300のプロセッシングユニット、ブラウザアップロード、データの隔離、回路ブレーカー、ジョブアラートが含まれます。
  * [Sofodata](https://www.sofodata.com/) - CSVファイルから安全なRESTフルAPIを作成できます。CSVファイルをアップロードし、そのAPIを即座にアクセスできるようにすることで、アプリ開発を加速します。無料プランには2つのAPIと月間2,500回のAPI呼び出しを含みます。クレジットカードは必要ありません。
  * [Sqlable](https://sqlable.com/) - 無料のオンラインSQLツールのコレクション。SQLフォーマッタとバリデーター、SQL正規表現テスト、偽データ生成器、インタラクティブなデータベースプレイグラウンドを含みます。
  * [Svix](https://www.svix.com/) - Webhookサービス。月間最大50,000メッセージを無料で送信できます。
  * [Tavily AI](https://tavily.com/) - オンライン検索および迅速な洞察と包括的な調査を行うAPI。調査結果の整理機能を備えています。無料プランは月間1,000リクエストを提供し、クレジットカードは不要です。
  * [TemplateFox](https://pdftemplateapi.com) - 視覚テンプレートエディタ、動的データマージ、7言語のSDKを備えたPDF生成API。無料プランには月間60のPDFと3つのテンプレートが含まれます。
  * [The IP API](https://theipapi.com/) - IP地理位置API。日間1,000回の無料リクエストを提供。IPアドレスの位置情報（国、都市、地域など）を提供します。
  * [TinyMCE](https://www.tiny.cloud) - 豊かなテキスト編集API。基本機能は無制限で無料です。
  * [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - 天気APIの無料プランを提供。正確で最新の天気予報を提供し、グローバルカバレッジ、歴史データ、天気モニタリングソリューションを備えています。
  * [Treblle](https://www.treblle.com) - Treblleは、チームがAPIを構築・配布・管理できるように支援します。高度なAPIログ集約、可視化、ドキュメント、デバッグ機能を提供します。すべての機能が無料ですが、無料プランでは月間最大250,000リクエストまで制限されます。
  * [Trophy](https://trophy.so) - Trophyは、消費者アプリ向けのゲーム化レイヤーです。事前作成されたAPIとオープンソースUIコンポーネントを使用して、達成状況、連続性、ポイント、ランキングなどを提供できます。月間最大1,000人のアクティブユーザーまで無料です。
  * [UniRateAPI](https://unirateapi.com) - 590以上の通貨および暗号資産のリアルタイム為替率。無料プランではAPI呼び出しは無制限で、開発者や金融アプリに最適です。
  * [vatcheckapi.com](https://vatcheckapi.com) - シンプルで無料のVAT番号検証API。月間150回の検証が無料です。
  * [vatnode](https://vatnode.dev) - EUのVAT番号検証REST API。VIESおよび国別税務登録機関のバックアップを提供し、審計記録に必要な公式VIES相談番号を返します。無料プランは月間100回の検証を提供し、クレジットカードは不要です。
  * [WeatherXu](https://weatherxu.com/) - 現在の状態、時間ごとの予報、日ごとの予報、および天気警報を含むグローバル天気データ。AIモデルとMLシステムを活用し、複数の天気モデルを分析・統合することで、予報精度を向上させます。無料プランには月間10,000回のAPI呼び出しを含みます。
  * [WebScraping.AI](https://webscraping.ai) - 組み込みパーサー、Chromeレンダリング、プロキシを備えたシンプルなウェブスクレイピングAPI。月間2,000回の無料API呼び出しを提供します。
  * [Weights & Biases](https://wandb.ai) - 開発者を第一に考えるMLOpsプラットフォーム。実験記録、データセットバージョン管理、モデル管理により、より良いモデルを速く構築できます。無料プランは個人プロジェクト限定で、100GBのストレージが含まれます。
  * [What Is My IP](https://whatismyip.help) - パブリックIPv4およびIPv6アドレスと関連するリクエストデータをAPIでチェックできる無料サービス。自動化、スクリプト、ネットワークトラブルシューティング用に異なる出力フォーマットを提供。
  * [What The Diff](https://whatthediff.ai) - AIを活用したコードレビューアシスタント。無料プランは月間25,000トークン（約10件のPR）の制限あり。
  * [XFlux](https://www.xfluxapi.com) - X/TwitterのREST API（プロフィール、検索、タイムライン）およびアカウントモニタリング。無料プラン：月間1,000回API呼び出し、1つのモニタリング、即時APIキー。有料プラン（月19ドル以上）からはHTTPウェブホークを提供。
  * [wolfram.com](https://wolfram.com/language/) - クラウド上に組み込まれた知識ベースアルゴリズム。
  * [wrapapi.com](https://wrapapi.com/) - 任意のウェブサイトをパラメータ化されたAPIに変換。月間30,000回API呼び出し。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) - ヘッドレスブラウザ、リジッドIP、シンプルな価格設定のウェブスクレイピングAPI。月間1,000回無料API呼び出し。学生および非営利団体には追加クレジットを提供。
  * [Zipcodebase](https://zipcodebase.com) - 無料の郵便番号API、世界中の郵便番号データへのアクセス。月間5,000回無料リクエスト。
  * [Zip-Codes](https://www.zip-codes.com/api/) - 米国およびカナダの郵便番号のREST API。住所検証、半径検索、カウンシップの人口統計データを提供。日間2,500回無料リクエスト。
  * [Zipcodestack](https://zipcodestack.com) - 無料の郵便番号APIおよび郵便番号検証。月間10,000回無料リクエスト。
  * [Zuplo](https://zuplo.com/) - 無料のAPIマネジメントプラットフォーム。APIの設計、開発、Edgeにデプロイが可能。APIキー認証、レート制限、開発者ドキュメント、収益化を任意のAPIに数分で追加可能。OpenAPIネイティブで、Web標準APIおよびTypeScriptで完全にプログラマブル。無料プランでは最大10プロジェクト、無制限の生産環境、月間100万リクエスト、10GBのエグリッジが提供。
  * [Metashot](https://metashot.io) — Open Graph（OG）ソーシャルプレビュー画像生成API。URLパラメータでTwitter、LinkedIn、Facebook向けの動的1200×630画像を生成。Cloudflare Workersでエッジキャッシュ。無料プラン：月間1,000回レンダリング。有料プラン：月12ドル以上。

**[⬆️ Back to Top](#table-of-contents)**

## Artifact Repos

  * [Gemfury](https://gemfury.com) - Maven、PyPi、NPM、Go Module、Nuget、APT、RPMリポジトリのプライベートおよびパブリックリポジトリ。公開プロジェクトには無料。
  * [jitpack.io](https://jitpack.io/) - GitHub上でのJVMおよびAndroidプロジェクト向けMavenリポジトリ。公開プロジェクトには無料。
  * [paperspace](https://www.paperspace.com/) - AIモデルの構築とスケーリング、AIアプリケーションの開発・訓練・デプロイ。無料プラン：公開プロジェクト、5GBストレージ、基本インスタンス。
  * [RepoFlow](https://repoflow.io) - RepoFlowはnpm、PyPI、Docker、Go、Helmなどに対応したパッケージ管理を簡素化。クラウドまたは個人用に自前ホストで利用可能。無料体験：10GBストレージ、10GB帯域、100パッケージ、無制限ユーザー。
  * [RepoForge](https://repoforge.io) - Python、Debian、NPMパッケージおよびDockerレジストリ向けプライベートクラウドホスティングリポジトリ。オープンソース／公開プロジェクトには無料プラン。
  * [repsy.io](https://repsy.io) - 1GBの無料プライベート／パブリックMavenリポジトリ。

**[⬆️ Back to Top](#table-of-contents)**

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 個人および協働開発用の無料クラウドベースコードスニペットマネージャー。
  * [BookmarkOS.com](https://bookmarkos.com) - 無料のすべての機能を備えたブックマークマネージャー、タブマネージャー、タスクマネージャー。カスタマイズ可能なオンラインデスクトップにフォルダの協働機能を備える。
  * [Braid](https://www.braidchat.com/) - チーム向けのチャットアプリ。公開アクセスグループには無料、無制限ユーザー、履歴、統合機能を提供。また、自前ホスト可能なオープンソースバージョンも提供。
  * [Calendly](https://calendly.com) - Calendlyは、会議の調整とスケジューリングを行うツールです。無料プランでは、1ユーザーあたり1カレンダー接続と無制限のセッションが提供されます。デスクトップおよびモバイルアプリも提供されています。
  * [cally.com](https://cally.com/) - 会議の最適な時間と日程を簡単に見つけることができます。使いやすく、小規模から大規模グループまでに最適です。
  * [cDox](https://cdox.ca) - カナダにホストされたプライベートドキュメントエディタ。文章を書く、フォーマットする、協力して編集し、公開リンクでドキュメントを公開できます。データはAIのトレーニングに使われません。無料プランには50MBのストレージ、最大3つの公開リンク、PDF・Word・Markdownへのエクスポートが含まれます。
  * [Chanty.com](https://chanty.com/) - ChantyはSlackの代替案です。小規模チーム（10人まで）向けに永遠に無料のプランを提供しており、公開およびプライベートな会話は無制限、検索可能な履歴、無制限の1対1オーディオ通話、無制限の音声メッセージ、10の統合、チームあたり20GBのストレージが含まれます。
  * [DevToolLab](https://devtoollab.com) - オンライン開発ツールで、すべての基本ツールに無料アクセスが可能で、各ツールに対して1件の自動保存が可能で、標準的な処理速度、コミュニティサポートが提供されます。
  * [Discord](https://discord.com/) - 公開・プライベートルームでのチャット。マーカードテキスト、音声、動画、スクリーン共有機能。無制限ユーザー向けに無料です。
  * [Dubble](https://dubble.so/) - 無料のステップバイステップガイド作成ツール。スクリーンショットを撮影し、プロセスを記録し、チームと協力できます。また、非同期スクリーン録画もサポートしています。
  * [Duckly](https://duckly.com/) - チームとリアルタイムで話す・協力できます。IDEやターミナル共有、音声、動画、スクリーン共有を活用。小規模チーム向けに無料です。
  * [element.io](https://element.io/) - Matrixに構築された分散型かつオープンソースのコミュニケーションツール。グループチャット、ダイレクトメッセージ、暗号化されたファイル転送、音声・動画チャット、その他サービスとの簡単な統合が可能です。
  * [evernote.com](https://evernote.com/) - 情報の整理を行うツール。ノートを共有し、他者と協力できます。
  * [Fibery](https://fibery.io/) - 接続されたワークスペースプラットフォーム。1ユーザー向けに無料で、最大2GBのディスクスペースが提供されます。
  * [Fibo](https://fibo.dev) - アジャイルチーム向けの無料オンラインリアルタイムスクラムポーカーツール。メンバー数に制限なくストーリーポイントを推定し、より迅速な計画が可能になります。
  * [Fizzy](https://www.fizzy.do/) - プロジェクト管理および問題追跡用のカンバンベースプラットフォーム。公開ボードを作成し、Webhookを設定し、カードスタンプを使用し、無制限のユーザーを追跡できます。最大1000アイテムまで無料で利用可能です。
  * [flat.social](https://flat.social) - チームのミーティングやハッピーハウスのためのカスタマイズ可能なインタラクティブスペース。無制限のミーティング、最大8人の同時参加まで無料です。
  * [flock.com](https://flock.com) - チーム間のコミュニケーションをより速くするツール。無制限のメッセージ、チャンネル、ユーザー、アプリ、統合が無料です。
  * [GhostChat](https://ghostchat.dev) - プライバシーを最優先としたウェブサイト向けライブチャットウィジェット（約15KB、クッキーなし、トラッキングなし）。無料プランには1サイト、無制限のメッセージ、30日間の履歴、Gmailのスレッド、事前設定された応答、プッシュ通知が含まれます。
  * [GitBook](https://www.gitbook.com/) - 技術知識の収集と記録を行うプラットフォーム — プロダクトドキュメントから内部知識ベース、APIまで。個人開発者向けの無料プランが提供されます。
  * [GitDailies](https://gitdailies.com) - GitHub上のチームのCommitおよびPull Request活動の日々のレポート。プッシュビジュアライザー、同僚間の認知システム、カスタムアラートビルダーを含みます。無料プランでは無制限のユーザー、3リポジトリ、3アラート設定が提供されます。
  * [gitter.im](https://gitter.im/) - GitHub向けのチャット。公開およびプライベートルームは無制限で、最大25人のチームまで無料です。
  * [gokanban.io](https://gokanban.io) - 登録不要の文法ベースのカンバンボード。高速利用が可能で、無料で制限なしです。
  * [Hackmd.io](https://hackmd.io/) - リアルタイムでの協働と書くツール。マークダウン形式のドキュメントやファイルに特化。Google Docsに似たものだが、マークダウンファイル用。無料で無制限の「ノート」が利用可能。ただし、プライベートノートやテンプレートの協働者（招待対象）数には制限がある [will be limited](https://hackmd.io/pricing)。
  * [HeySpace](https://hey.space) - チャット、カレンダー、タイムライン、ビデオ会議を備えたタスク管理ツール。5ユーザーまで無料。
  * [Huly](https://huly.io/) - すべてを統合したプロジェクト管理プラットフォーム（Linear、Jira、Slack、Notion、Motionの代替品）—無制限ユーザー、10GBのストレージ（ワークスペースごと）、10GBのビデオ（オーディオ）トラフィック。
  * [Keybase](https://keybase.io/) - KeybaseはSlackのFOSS（自由ソフトウェア）代替品であり、家族、コミュニティ、企業まで、すべてのチャットとファイルを安全に保管します。
  * [Knocket](https://trtc.io/solutions/knocket) - インディーデベロッパーおよび小規模チーム向けの無料で永遠に利用可能な連絡層：ウェブサイトおよびモバイルアプリ（iOS/Android/Flutter/React NativeをWebViewでサポート）にライブチャットウィジェット、共有連絡ページ（SNS、予約リンク、ブログを含むLinktree風）、統一されたTelegram／メールインボックス。Telegramから直接返信可能（ダッシュボード不要）。会議スケジューラー、多言語対応、ライト／ダークテーマ。補助的なオープンソースAI自動返信アグエント。広告なし、席制限なし。
  * [Linkinize](https://linkinize.com) - チーム向けのブックマーク管理ツール。タグ付け、複数ワークスペース、協働機能を備えています。無料プランには4ワークスペースと10人のチームメンバーが含まれます。
  * [Lockitbot](https://www.lockitbot.com/) - Slack内のルーム、開発環境、サーバーなど、共有リソースを予約・ロックできる。最大2つのリソースまで無料。
  * [meet.jit.si](https://meet.jit.si/) - ワンクリックでビデオ会話とスクリーン共有が可能。無料。
  * [Miro](https://miro.com/) - 分散チーム向けにスケーラブルで安全かつデバイスを越えて使える、企業向けの協働白板。無料プランを提供。
  * [Notion](https://www.notion.so/) - Notionは、マークダウンをサポートするノート作成および協働アプリで、タスク、ウィキ、データベースを統合。企業はこのアプリを、ノート作成、プロジェクト管理、タスク管理のすべてを統合したワークスペースとして説明しています。また、プラットフォームを跨いだアプリケーションだけでなく、ほとんどのウェブブラウザからアクセス可能です。
  * [Nuclino](https://www.nuclino.com) - すべてのチームの知識、ドキュメント、ノートを管理する軽量かつ協働可能なウィキ。無料プランにはすべての基本機能が含まれ、最大50項目と5GBのストレージまで。
  * [OnlineInterview.io](https://onlineinterview.io/) - 埋め込み型のビデオチャット、ドローイングボード、オンラインコードエディタを備えた無料コード面接プラットフォーム。ブラウザ上でコードをコンパイル・実行できる。1クリックでリモート面接ルームを作成可能。
  * [paste.sh](https://paste.sh/) - JavaScriptと暗号技術を用いたシンプルなペーストサイト。
  * [Pastefy](https://pastefy.app/) - 美しいシンプルなペーストサイト。オプションでクライアント暗号化、マルチタブペースト、API、強調表示されたエディタなども備えています。
  * [Pendulums](https://pendulums.io/) - Pendulumsは、使いやすいインターフェースと価値ある統計を備えた、時間管理を効果的に行うための無料時間計測ツール。
  * [Proton Pass](https://proton.me/pass) - メールアドレスの別名、2FA認証、共有、パスキーを内蔵したパスワードマネージャー。ウェブ、ブラウザ拡張、モバイルアプリ、デスクトップで利用可能。
  * [Pullflow](https://pullflow.com) - PullflowはGitHub、Slack、VS Code間のAI強化コードレビュー協働プラットフォームを提供。
  * [Pumble](https://pumble.com) - 無料のチームチャットアプリ。ユーザー数およびメッセージ履歴は無制限で、永遠に無料。
  * [Quidlo Timesheets](https://www.quidlo.com/timesheets) - チーム向けのシンプルなタイムシートおよび時間管理アプリ。無料プランには、最大10人のユーザーまで時間管理とレポート生成機能が含まれます。
  * [Raindrop.io](https://raindrop.io) - macOS、Windows、Android、iOS、Web向けのプライベートかつ安全なブックマークアプリ。無料で無制及のブックマークと協働が可能。
  * [Reezn.io](https://reezn.io/) - チーム向けの仕様駆動開発ワークフロー：レビューを左にシフトし、コードが書かれる前に問題を検出することで、コードレビューで問題が積み重なるのを防ぎます。開発の過程でビジネスの知識グラフを構築し、AIアグエントが将来の機能に活用します。無料プラン：3席、1プロジェクト、月5機能。
  * [Revolt.chat](https://revolt.chat/) - [Discord](https://discord.com/)のオープンソース代替品で、プライバシーを尊重します。また、Discordの多数の特許技術を無料で提供しています。Revoltは、安全で高速であり、100％無料のすべてを一括で提供するアプリケーションです。すべての機能が無料です。また、（公式および非公式）プラグインのサポートを備え、ほとんどの主流チャットアプリとは異なります。
  * [Rocket.Chat](https://rocket.chat/) - オムニチャネル機能を備えたオープンソースコミュニケーションプラットフォーム。Matrix連携、他アプリとのブリッジ、無制限メッセージ、完全なメッセージ履歴。
  * [ruttl.com](https://ruttl.com/) - ウェブサイト、PDF、画像に対するデジタルフィードバックを収集するための最適なすべてを一括で提供するフィードバックツール。
  * [Screen Sharing via Browser](https://screensharing.net) - 無料のスクリーン共有ツール。ブラウザから直接協働者と画面を共有できます。ダウンロードや登録が不要です。無料。
  * [seafile.com](https://www.seafile.com/) - プライベートまたはクラウドストレージ、ファイル共有、同期、ディスカッション。クラウド版は1GBのみ。
  * [SiteDots](https://sitedots.com/) - ウェブサイトプロジェクトのフィードバックを直接ウェブサイト上に共有できます。エミュレーション、キャンバス、ワークアラウンドなし。完全に機能する無料プラン。
  * [Slab](https://slab.com/) - チーム向けの現代的な知識管理サービス。10人のユーザーまで無料。
  * [slack.com](https://slack.com/) - 無制限ユーザーに対応する無料プラン（一部機能制限あり）
  * [StatusPile](https://www.statuspile.com/) - ステータスページのステータスページ。あなたの上流プロバイダーのステータスページを追跡できますか？
  * [Stickies](https://stickies.app/) - ブレインストーミング、コンテンツキュレーション、ノート作成に使用される視覚的な協働アプリ。3つのウォールまで無料、無制限ユーザー、1GBストレージ。
  * [MeetBackdrops](https://meetbackdrops.com) - Zoom、Microsoft Teams、Google Meetでのビデオ会議に無料のHD仮想背景。1,000以上のスタジオデザイン環境。登録不要。
  * [talky.io](https://talky.io/) - 無料のグループビデオチャット。匿名。ペア間。プラグイン、登録、支払い不要。
  * [Teamcamp](https://www.teamcamp.app) - ソフトウェア開発企業向けのすべてを一括で提供するプロジェクト管理アプリケーション。
  * [Teamhood](https://teamhood.com/) - 無料のプロジェクト、タスク、問題追跡ソフト。カンバンにスイムレーンをサポートし、完全なスクラム実装を提供。時間追跡を統合。5人のユーザーおよび3プロジェクトポートフォリオまで無料。
  * [Teamplify](https://teamplify.com) - チーム開発プロセスをTeam AnalyticsとSmart Daily Standupで改善。リモートファーストチーム向けの完全機能の休暇管理を提供。5人のユーザーまでの小さなグループに無料。
  * [Telegram](https://telegram.org/) - Telegramは、速く信頼性の高いメッセージと通話をお探しの方に最適です。ビジネスユーザーおよび小さなチームは、大きなグループ、ユーザー名、デスクトップアプリ、強力なファイル共有オプションに好印象をもたらすでしょう。
  * [Tencent RTC](https://trtc.io/) - 騰訊リアルタイム通信（TRTC）は、グループの音声・動画会議に向けたソリューションを提供します。初年度は月間10,000分無料。
  * [TimeCamp](https://www.timecamp.com/) - 無制限ユーザー向けの無料時間追跡ソフトウェア。Jira、Trello、AsanaなどPMツールと簡単に統合できます。
  * [tldraw.com](https://tldraw.com) -  無料のオープンソースの白板および図解ツール。知能ある矢印、スナップ、ステッキノート、SVGエクスポート機能を備えます。マルチプレイヤーモードで協働編集が可能です。また、公式なVS Code拡張機能も無料で提供されています。
  * [transfernow](https://www.transfernow.net/) - ファイルの転送と共有に最もシンプルで速く安全なインターフェース。サブスクリプションを必要としないで、写真、動画、その他の大容量ファイルを送信可能。
  * [Tugboat](https://tugboat.qa) - すべてのユーザーに無料で提供される、すべてのプルリクエストを自動化してオンデマンドでプレビュー。非営利団体には無料のナノプランが付随。
  * [twist.com](https://twist.com) - 会話が整理され、主題に沿ったチームコミュニケーションアプリ。無料および無制限プランが利用可能。対象チームには割引が提供される。
  * [userforge.com](https://userforge.com/) - 相互に接続されたオンラインプロフィール、ユーザーストーリー、コンテキストマッピング。デザインと開発の連携を助け、最大3プロフィールと2人の協力者まで無料。
  * [Visual Debug](https://visualdebug.com) - より良いクライアントと開発者間のコミュニケーションを実現する視覚フィードバックツール
  * [Webex](https://www.webex.com/) - 無料プランで40分間、100人の参加者に対応するビデオ会議
  * [Webvizio](https://webvizio.com) - ウェブサイトフィードバックツール、ウェブサイトレビューソフトウェア、バグ報告ツール。ライブウェブサイトやウェブアプリ、画像、PDF、デザインファイル上でタスクを直接管理するためのウェブ開発協働をスムーズに。
  * [whereby.com](https://whereby.com/) - 1クリックでビデオ会話が可能（以前はappear.inと呼ばれていた）。
  * [windmill.dev](https://windmill.dev/) - Windmillは、最小限のPythonおよびTypeScriptスクリプトから、生産レベルの複数ステップ自動化および内部アプリを迅速に構築できるオープンソース開発プラットフォーム。無料ユーザーは、最大で3つの非プレミアムワークスペースを作成し、メンバーとして参加できる。
  * [wistia.com](https://wistia.com/) - 視聴者分析、HD動画配信、マーケティングツールを備えた動画ホスティング。25本の動画とWistiaブランドプレイヤーを提供。
  * [wormhol.org](https://www.wormhol.org/) - シンプルなファイル共有サービス。5GBまで無制限にファイルを共有可能で、希望する人数のペアと共有できる。
  * [Wormhole](https://wormhole.app/) - 5GBまでのファイルを、終端間暗号化で最大24時間まで共有可能。5GBを超えるファイルは、ペア間直接送信するためのペアトランスファーを使用。
  * [zoom.us](https://zoom.us/) - 安全なビデオおよびウェブ会議の追加機能が提供。無料プランは40分まで制限。
  * [Zulip](https://zulip.com/) - ユニークなメール風のスレッドモデルによるリアルタイムチャット。無料プランには10,000件の検索履歴と5GBまでのファイルストレージが含まれ、また、セルフホスト可能なオープンソースバージョンも提供。
  * [RightFeature](https://rightfeature.com/) - 顧客からのフィードバックを簡単に収集し、そのフィードバックを製品開発のルートマップに変換。実際にユーザーにとって重要な機能を収集、優先順位を決定し、実装する。
  * [Zeitio](https://zeitio.com/) - フリーランスや小さなチーム向けの時間記録と請求書作成。無料プランには1ユーザー、3つのアクティブプロジェクト、月間3請求書が含まれる。

**[⬆️ Back to Top](#table-of-contents)**

## CMS

  * [Contentful](https://www.contentful.com/) - ヘッドレスCMS。クラウド上のコンテンツ管理および配信API。無料のコミュニティスペース1つが提供され、5ユーザー、25Kレコード、48コンテンツタイプ、2ロケールが含まれる。
  * [Cosmic](https://www.cosmicjs.com/) - ヘッドレスCMSおよびAPIツールキット。開発者向けの無料個人プランが提供される。
  * [Crystallize](https://crystallize.com) - ヘッドレスPIMにeコマースサポートを備え、組み込みのGraphQL API。無料版には無制限のユーザー、1000アイテムのカタログ、月間5GBの帯域、月間25kのAPI呼び出しを含む。
  * [DatoCMS](https://www.datocms.com/) - 小規模プロジェクト向けに無料プランを提供。DatoCMSはGraphQLベースのCMS。低レベルプランでは月間100kの呼び出しを提供。
  * [Hygraph](https://hygraph.com/) - 小規模プロジェクト向けに無料プランを提供。GraphQLを最初に導入。古来のソリューションから離脱し、GraphQL本体のヘッドレスCMSへ移行し、オムニチャネルコンテンツAPIを最初に提供。
  * [Prismic](https://www.prismic.io/) - ヘッドレスCMS。完全にホスティングされ、スケーラブルなAPIを備えたコンテンツ管理インターフェース。コミュニティプランは、1ユーザーに対してAPI呼び出し、ドキュメント、カスタムタイプ、アセット、ロケールのすべてを無制限に提供。次プロジェクトに必要なすべての機能。オープンコンテンツ／オープンソースプロジェクトには、より大きな無料プランが提供されている。
  * [Sanity.io](https://www.sanity.io/) - 構造化コンテンツを扱うプラットフォーム。オープンソースの編集環境とリアルタイムホスティングデータストアを備える。無制限のプロジェクト数。無制限の管理者ユーザー、3人の非管理者ユーザー、2つのデータセット、50万件のAPI CDNリクエスト、10GBの帯域幅、5GBのアセットが1プロジェクトあたり無料で提供される。
  * [Solo](https://soloist.ai) - マゾラの無料AIウェブサイト作成ツール。ビジネス向けにシンプルな入力で美しいウェブサイトを作成。無料カスタムドメイン、クレジットカード不要。
  * [Squidex](https://squidex.io/) - 小規模プロジェクト向けに無料プランを提供。API／GraphQLを最初に導入。オープンソースであり、イベントソースに基づいている（すべての変更を自動的に記録）。
  * [Storyblok](https://www.storyblok.com) - 開発者とマーケター向けのヘッドレスCMS。すべての現代フレームワークと互換性がある。コミュニティ（無料）プランは、マネジメントAPI、ビジュアルエディタ、10種類のソース、カスタムフィールドタイプ、国際化（無制限の言語／ロケール）、アセットマネージャー（最大2500アセット）、画像最適化サービス、検索クエリ、Webhook、月間250GBのトラフィックが無料で提供される。
  * [TinaCMS](https://tina.io/) - Forestry.ioを置き換える。Markdown、MDX、JSONをサポートするGitベースのオープンソースヘッドレスCMS。基本プランは無料で、2名のユーザーが利用可能。
  * [WPJack](https://wpjack.com) - クラウド上のWordPressを5分以内にセットアップ！無料プランには1サーバー、2サイト、無料SSL証明書、無制限のcronジョブが含まれる。時間制限や期限なし。あなたのウェブサイト、あなたのスタイル。

**[⬆️ Back to Top](#table-of-contents)**

## Code Generation

* [Appinvento](https://appinvento.io/) - 無料のノコードアプリ作成ツール。自動生成されたバックエンドソースコードへの完全なアクセスを提供し、無制限のAPIとルートをサポート。無料プランには3プロジェクトと5テーブルが含まれる。
* [DhiWise](https://www.dhiwise.com/) - Figmaのデザインを動的なFlutterおよびReactアプリケーションに変換。コード生成技術は、プロダクションレベルのモバイルおよびウェブ体験の構築ワークフローを最適化するように設計されている。
* [Karbon Sites](https://www.karbonsites.space) - テキストプロンプト、スケッチ、または履歴書からプロダクションレベルのフロントエンドコードを生成するAI駆動のサイト作成ツールとエディタ。特徴には、ネイティブAndroid（APK）エクスポートと月間5回の生成（カスタムGeminiAPIキーで無制限）が含まれる。
* [Metalama](https://www.postsharp.net/metalama) - C#に特化したツール。コンパイル中にプレートコードを即座に生成し、ソースコードを清潔に保つ。オープンソースプロジェクトには無料。商業利用に適した無料プランには最大3つのアスペクトが含まれる。
* [Supermaven](https://www.supermaven.com/) - VS Code、JetBrains、Neovim向けの高速AIコード補完プラグイン。無料プランは、インライン補完を無制限に提供し、極めて低い遅延を重視。
* [v0.dev](https://v0.dev/) - Vercelが開発したv0は、shadcn/uiとTailwind CSSを使用してコピー＆ペーストに適したReactコードを生成。クレジットシステムを採用し、初期1,200クレジットと月間200クレジットが無料で提供される。

**[⬆️ Back to Top](#table-of-contents)**

## Code Quality

  * [beanstalkapp.com](https://beanstalkapp.com/) - コードの作成、レビュー、デプロイを一貫したワークフローで提供。1ユーザー向けの無料アカウントと1リポジトリ（100MBのストレージ）が提供される。
  * [codacy.com](https://www.codacy.com/) - PHP、Python、Ruby、Java、JavaScript、Scala、CSS、CoffeeScript向けの自動コードレビュー、公開およびプライベートリポジトリに無制限で無料。
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - DevOps向けの自動化されたインフラコードレビューツール。GitHub、Bitbucket、GitLab（セルフホスティングも含む）と統合。標準言語に加え、Ansible、Terraform、CloudFormation、Kubernetesなども分析。 （オープンソース無料）
  * [codecov.io](https://codecov.io/) - オープンソースおよび1つのプライベートリポジトリ向けのコードカバレッジツール（SaaS）を無料提供。
  * [CodeFactor](https://www.codefactor.io) - Git向けの自動コードレビュー。無料版には無制限のユーザー、公開リポジトリ、1つのプライベートリポジトリが含まれる。
  * [coderabbit.ai](https://coderabbit.ai) - GitHub/GitLabとの統合を可能にするAI駆動コードレビューツール。無料プランには1時間あたり200ファイル、1時間あたり3件のレビュー、1時間あたり50件の会話が含まれる。オープンソースプロジェクトには永遠に無料。
  * [CodSpeed](https://codspeed.io) - CIパイプラインにおけるパフォーマンストラッキングを自動化。デプロイ前に、正確で一貫したメトリクスによりパフォーマンスの回帰を検出。オープンソースプロジェクトには永遠に無料。
  * [coveralls.io](https://coveralls.io/) - テストカバレッジレポートの表示、オープンソース向け無料
  * [deepscan.io](https://deepscan.io) - JavaScriptコードにおける実行時エラーを自動で検出する高度な静的解析、オープンソース向け無料
  * [DeepSource](https://deepsource.io/) - DeepSourceはソースコードの変更を継続的に分析し、セキュリティ、パフォーマンス、アンチパターン、バグリスク、ドキュメンテーション、スタイルなどカテゴリに分類された問題を検出し、修正します。GitHub、GitLab、Bitbucketとのネイティブ統合。
  * [DiffText](https://difftext.com) - 2つのコードブロックの差分を瞬時に検出。完全に無料で利用可能です。
  * [eversql.com](https://www.eversql.com/) - EverSQL - データベース最適化のトッププラットフォーム。あなたのデータベースとSQLクエリに関する重要な洞察を自動で提供。
  * [gerrithub.io](https://review.gerrithub.io/) - GitHubリポジトリ向けのGerritコードレビュー、無料
  * [goreportcard.com](https://goreportcard.com/) - Goプロジェクト向けのコード品質、オープンソース向け無料
  * [gtmetrix.com](https://gtmetrix.com/) - ウェブサイトの最適化に向けたレポートと詳細な推奨事項
  * [holistic.dev](https://holistic.dev/) - Postgresql最適化用のトップ静的コード分析ツール。パフォーマンス、セキュリティ、アーキテクチャに関するデータベース問題の自動検出サービス
  * [houndci.com](https://houndci.com/) - GitHubのコミットにコード品質に関するコメント、オープンソース向け無料
  * [reviewable.io](https://reviewable.io/) - GitHubリポジトリ向けのコードレビュー、公開または個人リポジトリ向け無料
  * [scan.coverity.com](https://scan.coverity.com/) - Java、C/C++、C#、JavaScript向けの静的コード分析、オープンソース向け無料
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) - 継続的なチェックプラットフォーム、オープンソース向け無料
  * [semanticdiff.com](https://app.semanticdiff.com/) - GitHubのプルリクエストおよびコミット向けのプログラミング言語を認識した差分、公開リポジトリ向け無料
  * [shields.io](https://shields.io) - オープンソースプロジェクト向けの品質メタデータバッジ
  * [sonarcloud.io](https://sonarcloud.io) - Java、JavaScript、C/C++、C#、VB.NET、Objective-C、Swift、Python、Groovyなど、さらに多くの言語に対応した自動ソースコード分析、オープンソース向け無料

**[⬆️ Back to Top](#table-of-contents)**

## Code Search and Browsing

  * [CodeKeep](https://codekeep.io) - Google Keep for Code Snippets。コードスニペットを整理・発見・共有。強力なコードスクリーンショットツールとプリセットテンプレート、リンク機能を備えています。
  * [libraries.io](https://libraries.io/) - 32のパッケージマネージャーに対応した検索と依存関係の更新通知、オープンソース向け無料
  * [Namae](https://namae.dev/) - GitHub、GitLab、Heroku、Netlifyなど、多くのサイトでプロジェクト名の存在を検索。
  * [tickgit.com](https://www.tickgit.com/) - 表面 `TODO` コメント（およびその他のマーカー）を用いて、改善すべきコードの領域を特定する.

**[⬆️ Back to Top](#table-of-contents)**

## CI and CD

  * [appcircle.io](https://appcircle.io) - Windows用のCDサービス。オープンソース向け無料
  * [appveyor.com](https://www.appveyor.com/) - モバイルアプリ向けCI/CD。ネイティブまたはハイブリッドアプリに対応。月間200回の無料ビルド、10分のビルド時間、2人のチームメンバー。オープンソースプロジェクトには45分のビルド時間、1つの並列ビルド、無制限のチームサイズが付与されます.
  * [bitrise.io](https://www.bitrise.io/) - 5プロジェクト無料、1つの並列実行（月間120回実行）を提供するCI/CDサービス
  * [buddy.works](https://buddy.works/) - 3人のユーザーおよび月間5,000ジョブ分の実行時間無料のCIパイプライン。テスト分析の開発者プランは月間10万回のテスト実行を提供し、オープンソースプロジェクトにはさらに無料の機能が含まれます.
  * [Buildkite](https://buildkite.com) - 20ユーザー未満および10インスタンスのデータベースに対応するデータベースCI/CDおよびDevOps。無料プラン
  * [bytebase.com](https://www.bytebase.com/) - GitHub、GitLab、BitBucketリポジトリに搭載されたホスト型CI/CDサービスのすべての機能を含む包括的な無料プラン。複数のリソースクラス、Docker、Windows、Mac OS、ARM実行者、ローカルランナー、テスト分割、Dockerレイヤーキャッシュ、およびその他の高度なCI/CD機能が提供されます。月間実行時間は最大6000分まで無料、協力者無制限、プライベートプロジェクトでの並列ジョブは30個まで、オープンソースプロジェクトには月間最大8万回の無料ビルド分が提供されます.
  * [CircleCI](https://circleci.com/) - 公開GitHubリポジトリ向け無料
  * [cirun.io](https://cirun.io) - 月間500ビルド分無料
  * [codemagic.io](https://codemagic.io/) - 1プロジェクトで1日10回デプロイ（月間30ビルド分）
  * [deployhq.com](https://www.deployhq.com/) - AWS/GCP/Azureにアプリを30分以内にデプロイ。任意のクラウド上で標準化されたアプリ環境を構築し、組み込みの継続的デプロイ自動化と高度な可観測性を提供。無料プランは1ユーザーおよび1アプリ環境まで対応します.
  * [LocalOps](https://localops.co/) - ワークフロー自動化ツールは、UIを用いてアプリを接続し、ワークフローを自動化できます。多くのアプリおよび最も人気のあるAPIをサポート。公開GitHubリポジトリ向け無料、無料プランは100MB、1000操作、最小間隔15分を提供します.
  * [Make](https://www.make.com/en) - GitHub向けワークフロー自動化およびマージキュー - 公開GitHubリポジトリ向け無料
  * [Mergify](https://mergify.com) - Nx Cloudは、リモートキャッシュ、マシン間のタスク分散、さらにはe2eテスト実行の自動分割といった機能を備えたCIで、モノリスリポジトリの処理を高速化します。30人の参加者まで無料プランを提供し、150,000のクレジットを含んでいます.
  * [Nx Cloud](https://nx.dev/ci) - リアルタイムスケーリングSpikeインスタンスを用いてGitHub ActionsおよびGitLab CIパイプラインをスマートに実行。無料プランには400vCPU分、800GB分、高パフォーマンスランナー（1つのジョブあたり12vCPUおよび32GBRAM）での10つの並列ジョブが含まれます.
  * [RunMyJob](https://runmyjob.io) - GitHub Actionsの実行速度を2倍にし、月間3,000ビルド分を無料で提供します.
  * [Shipfox](https://www.shipfox.io/) - インフラコードの管理プラットフォーム。無料プランには、IaCの協働、Terraformモジュールレジストリ、ChatOps統合、Open Policy Agentによる継続的なリソースコンプライアンス、SAML 2.0によるSSO、およびパブリックワーカーポールへのアクセス（月間最大200分）が含まれます.
  * [Spacelift](https://spacelift.io/) - 各ブランチに1つのVMを作成し、アプリを一意のURLから利用可能にし、公開およびプライベートリポジトリは無制限、VMサイズは最大2GBまで。
  * [Squash Labs](https://www.squash.io/) - Terramateは、Terraform、OpenTofu、Terragruntなどのインフラコード（IaC）ツールのオーケストレーションおよび管理プラットフォームです。2人のユーザーまで無料で、すべての機能が提供されます。
  * [Terramate](https://terramate.io/) - テラマートは、Terraform、OpenTofu、Terragruntなどのインフラストラクチャアスコード（IaC）ツール向けのオーケストレーションおよび管理プラットフォームです。無料プランは2名まで対応し、すべての機能が含まれます。
  * [Terrateam](https://terrateam.io) - GitOpsを前提としたTerraformの自動化。プルリクエストを駆動するワークフロー、自前ホストランナーによるプロジェクト分離、および順序付き操作を実現するレイヤード実行。3ユーザーまで無料。
  * [Trigger.dev](https://trigger.dev) - オープンソースのバックグラウンドジョブおよびAIエージェントプラットフォーム。タスクは中断されず、リアルタイムで実行。無料プランには月5ドルのコンピュートクレジット、20個の同時実行、無制限のタスク、5人のチームメンバー、10のスケジュール、1日分のログ保存が含まれる。

**[⬆️ Back to Top](#table-of-contents)**

## Testing

  * [Appetize](https://appetize.io) - AndroidおよびiOSアプリのテストを、ブラウザ内に直接実行できるクラウドベースのAndroid端末／タブレットエミュレーターおよびiPhone/iPadシミュレーターを使用。無料プランには月30分の使用時間と2つの同時セッションが含まれる。アプリサイズには制限なし。
  * [Argos](https://argos-ci.com) - 開発者向けのオープンソース視覚テスト。無制限のプロジェクト、月5,000枚のスクリーンショット。オープンソースプロジェクトには無料。
  * [Bencher](https://bencher.dev/) - すべての公開プロジェクトに無料で提供される継続的なベンチマークツールセット。CIパフォーマンスのリグレッションを検出。
  * [BugBug](https://bugbug.io/) - ウェブアプリケーション向けの軽量テスト自動化ツール。学習が簡単で、コーディングを必要としない。自分のコンピュータ上で無制限のテストを無料で実行可能。さらに、クラウドモニタリングとCI/CD統合は月額料金で追加で利用可能。
  * [checkbot.io](https://www.checkbot.io/) - ウェブサイトが50以上のSEO、スピード、セキュリティのベストプラクティスを遵守しているかをテストするブラウザ拡張機能。小型ウェブサイト向けの無料プラン。
  * [Checkly](https://checklyhq.com) - 現代のDevOps向けのコード中心の合成モニタリング。従来のプロバイダーに比べて格段に安い価格でAPIやアプリのモニタリングが可能。Monitoring as CodeプロセスとPlaywrightを活用。開発者向けに豊かな無料プランを提供。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - APIが指定ドメインに対してCORSを有効にしているかを確認し、ギャップを特定するための開発者およびAPIテスト用の無料ツール。実行可能な洞察を提供。
  * [cypress.io](https://www.cypress.io/) - ブラウザ内で実行可能な何でもを高速かつ簡単にテスト。Cypress Test Runnerは常に無料でオープンソースであり、制限なし。Cypress Dashboardはオープンソースプロジェクト向けに5ユーザーまで無料。
  * [everystep-automation.com](https://www.everystep-automation.com/) - ウェブブラウザ内で行ったすべてのステップを記録・再現し、スクリプトを生成。無料プランでは選択肢が少ない。
  * [gridlastic.com](https://www.gridlastic.com/) - Selenium Gridテスト。無料プランでは最大4つのSeleniumノード、10回のグリッド開始、月4,000分のテスト実行が可能。
  * [katalon.com](https://katalon.com) - さまざまなテスト成熟度レベルを持つチームに適したテストプラットフォームを提供。Katalon Studio、TestOps（視覚テスト無料）、TestCloud、Katalon Recorderが含まれる。
  * [Keploy](https://keploy.io/) - Keployは開発者向けの機能テストツールキット。API呼び出しの記録により、APIのE2Eテスト（KTests）が生成され、モックまたはスタブ（KMocks）も作成可能。オープンソースプロジェクトには無料。
  * [Lastest](https://lastest.cloud) - 速く、安全に、信頼できるテストを実行。AIを活用した視覚検証と信頼できるテスト。無料プラン：1プロジェクト、月500ランナー分の実行時間、1つの同時実行、クレジットカード不要。
  * [loadmill.com](https://www.loadmill.com/) - ネットワークトラフィックを分析して自動的にAPIおよびロードテストを作成。最大60分間、最大50人の同時ユーザーをシミュレート。月額無料。
  * [lost-pixel.com](https://lost-pixel.com) - Storybook、Ladle、Histoireのストーリーおよびウェブアプリの総合的な視覚リグレッションテスト。無制限のチームメンバー、オープンソースプロジェクトには完全無料、月7,000枚のスナップショット。
  * [pagegym.com](https://pagegym.com) - ロード行動およびページスピードの分析・最適化ツール。無料プランでは1日10テスト、週5実験、月15GBの最大データ受入が可能。
  * [percy.io](https://percy.io) - 任意のウェブアプリ、静的サイト、スタイルガイド、コンポーネントライブラリに視覚テストを追加。無制限のチームメンバー、デモアプリ、無制限のプロジェクト、月5,000枚のスナップショット。
  * [qase.io](https://qase.io) - 開発者および品質保証チーム向けのテスト管理システム。テストケースの管理、テスト実行の作成、テスト実行、欠陥の追跡、影響度の測定が可能。無料プランにはすべての基本機能が含まれ、添付ファイルは500MBまで、最大3ユーザーまで。
  * [Repeato](https://repeato.app/) - ノコードで構築されたモバイルアプリの自動テストツール。コンピュータビジョンとAIをベースに構築されており、ネイティブアプリ、Flutter、React Native、Web、Ionic、その他多数のアプリフレームワークに対応。無料プランはiOSで10テスト、Androidで10テストまでに制限されているが、有料プランのほとんどの機能を含み、無制限のテスト実行が可能。
  * [Requestly](https://requestly.com/) - HTTPリクエストを遮断、転送、モックするオープンソースChrome拡張機能。
    [Debugger](https://requestly.com/products/web-debugger/)、[Mock Server](https://requestly.com/products/mock-server/)、[API Client](https://requestly.com/products/api-client/)、[Session Recording](https://requestly.com/products/session-book/)を提供。URL転送、HTTPヘッダー変更、APIモック、JavaScript挿入、GraphQL変更、モックAPI生成、ネットワーク・コンソールログ付きセッション記録に対応。無料プランは10ルールまでで、オープンソース利用は無料。
  * [seotest.me](https://seotest.me/) - ページごとのSEOをチェックする無料ウェブサイトテストツール。1日あたり10回のウェブサイトのクロールが無料。SEO学習用のリソースや、どの技術のサイトでも適用可能なページSEO改善方法のアドバイスを提供。
  * [Sherlo](https://sherlo.io) - React Nativeアプリ向けの視覚的リグレッションテスト。無料プラン：月間1,000スナップショット、iOSおよびAndroidシミュレーター対応。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - CodePenに似たクロスブラウザテストツール。UI-liciousではテストをユーザーストーリーのように記述でき、UI-licious Snippetsという無料プラットフォームを提供。Chrome上で無登録で3分以内のテストを無制限に実行可能。バグを見つけた場合、テストのユニークURLをコピーして開発者に正確に再現方法を示せる。
  * [SSR (Server-side Rendering) Checker](https://www.crawlably.com/ssr-checker/) - 任意のURLのSSR（サーバーサイドレンダリング）を確認。ページのサーバーレンダリング版と通常版を視覚的に比較することで確認。
  * [testingbot.com](https://testingbot.com/) - Seleniumブラウザおよびデバイストesting、[free for Open Source](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 自動テスト結果の公開用ダッシュボードと、GitHubを用いた手動テストをコードとして実装するためのフレームワーク。サービスは[free for Open Source](https://github.com/marketplace/testspace-com)であり、月間450件の結果をカバー。
  * [tesults.com](https://www.tesults.com) - テスト結果の報告およびテストケース管理。人気テストフレームワークとの統合。オープンソースソフトウェア開発者、個人、教育者、小規模チームがスタートする際には、基本的な無料プロジェクトを超えて割引または無料のオファーをリクエスト可能。
  * [UseWebhook.com](https://usewebhook.com) - ブラウザからWebhookをキャプチャし、検証。ローカルホストに転送、または履歴から再実行可能。無料で利用可能。
  * [Vaadin](https://vaadin.com) - JavaまたはTypeScriptでスケーラブルなUIを構築し、統合されたツール、コンポーネント、デザインシステムを活用して、開発スピードを向上させ、設計品質を高め、開発プロセスを簡素化。無制限のプロジェクト、5年間の無料メンテナンス付き。
  * [webhook.site](https://webhook.site) - カスタムURLでWebhook、外部HTTPリクエスト、またはメールを検証。一時的なURLとメールアドレスは常に無料。
  * [websitepulse.com](https://www.websitepulse.com/tools/) - さまざまな無料のネットワークおよびサーバーツール。
  * [kogiQA](https://kogiqa.com) - セレクタを必要としないウェブUI自動化ツール。すべての開発者が月間500アクションを無料で利用可能。

**[⬆️ Back to Top](#table-of-contents)**

## Security and PKI

  * [aikido.dev](https://www.aikido.dev) - すべてのアプリセキュリティプラットフォーム。SCA、SAST、CSPM、DAST、セクレット、IaC、マルウェア、コンテナスキャン、EOLなど。無料プランには2ユーザー、10リポジトリ、1クラウド、2コンテナ、1ドメインのスキャンが含まれる。
  * [CertKit](https://www.certkit.io/certificate-management) - SSL証明書の発行、更新、監視を管理。証明書透明性ログを検索。ベータ版後は3証明書と1ユーザーまで無料。
  * [CertObserver CT Search](https://certobserver.com/ct-search) - 証明書透明性ログに記録された公開SSL/TLS証明書を検索。CT検索は無料だが、CT監視は無料ではない。
  * [CertPost](https://www.certpost.ai) - ポート443またはカスタムポート（SMTP/IMAP）でのリアルタイムSSL/TLS証明書監視。通信中に提供された証明書を読み取り、完全なチェーン検証を行い、期限前にメールまたはWebhookでアラートを発行。無料プランには3つの証明書が永遠に監視可能。
  * [Corgea](https://corgea.com/) - +20の言語とフレームワークで不安全なコードやパッケージを検出・検証・修正する自動セキュリティプラットフォーム。無料プランには1ユーザーと2リポジトリが含まれる。
  * [crypteron.com](https://www.crypteron.com/) - クラウド中心の開発者向けセキュリティプラットフォーム。.NETおよびJavaアプリケーションにおけるデータ漏洩を防止。
  * [CyberChef](https://gchq.github.io/CyberChef/) - シンプルで直感的なウェブアプリ。複雑なツールやプログラミング言語を使わずにデータの解析・暗号化／解読を行うことができます。暗号・暗号化のためのスイス軍刀のようなツール。すべての機能が無料で利用可能で、制限はありません。必要であればオープンソースで自前でホストできます。
  * [Datree](https://www.datree.io/) - Kubernetesの誤設定を防ぐためのオープンソースCLIツール。マニフェストやHelmチャートがベストプラクティスおよび組織のポリシーを遵守することを確実にします
  * [Dependabot](https://dependabot.com/) - Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（MavenおよびGradle）、.NET、Go、Elm、Docker、Terraform、Git Submodules、GitHub Actionsなど、多くの言語の自動依存関数の更新
  * [DJ Checkup](https://djcheckup.com) - Djangoサイトのセキュリティ脆弱性を自動チェックで検出。Pony Checkupサイトからフォークされたものです。
  * [Doppler](https://doppler.com/) - アプリケーションのシークレットと設定を管理するユニバーサルシークレットマネージャー。複数のクラウドプロバイダーとの同期をサポート。5ユーザーまで無料で、基本的なアクセス制御が可能です。
  * [Dotenv](https://dotenv.org/) - .envファイルを安全に、迅速に同期。Slackやメールなどの不安全なチャネルで.envファイルを共有しないようにし、重要な.envファイルをもう一度失うことはありません。3人のチームメイトまで無料です。
  * [GitGuardian](https://www.gitguardian.com) - ソースコードにシークレットを残さないための自動シークレット検出と修正。Gitリポジトリに350以上のタイプのシークレ及センシティブファイルをスキャン。個人および開発者25名以下のチームに無料です。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 公開GitHubリポジトリ、gist、イシュー、コメントの2000万件の公開シークレットを検索。無料。
  * [Have I been pwned?](https://haveibeenpwned.com) - ブレーキの情報を取得するREST API。
  * [HimitsuShell](https://himitsushell.com) - シェルスクリプトのDRMコンパイラ。シェルスクリプトを埋め込みシェルインタープリターやデバッグ防止技術（shcの代替）を使ってオブフスクバイナリに変換。無制限のウェブ版が無料です。
  * [hostedscan.com](https://hostedscan.com) - ウェブアプリ、サーバー、ネットワークの脆弱性スキャンツール。月間10回まで無料スキャン。
  * [Infisical](https://infisical.com/) - チームおよびインフラストラクチャの開発者シークレットを管理できるオープンソースプラットフォーム：ローカル開発からステージング／プロダクション環境の3rdパーティサービスまで。開発者5名まで無料です。
  * [inspect.software](https://inspect.software/) - 自動化されたオープンソースリポジトリの監査の公開記録：セキュリティポジション、メンテナンス性、依存関係の健康状態、悪意のあるパッケージチェック。バージョン管理された手法と評価バッジを備えています。無料プラン：すべての公開レポートへのフルアクセス、公開利益閾値（500スター以上、50フォーカス以上、または250スター以上の組織所有）を超えるリポジトリの自動カバー、埋め込みバッジ、および閾値未満リポジトリへの100ポイント（5回の検査）の初期クレジット。
  * [Internet.nl](https://internet.nl) - IPv6、DNSSEC、HTTPS、DMARC、STARTTLS、DANEなどの現代的なインターネット標準のテスト
  * [IntoDNS.ai](https://intodns.ai) - SPF、DKIM、DMARC、DNSSEC、BIMI、MTA-STS、および40以上のブラックリストをAIによる説明と修正提案でチェックするDNSおよびメールセキュリティ分析ツール。100％無料、登録不要。
  * [letsencrypt.org](https://letsencrypt.org/) - すべての主要ブラウザで信頼されるSSL認証局の無料証明書
  * [meterian.io](https://www.meterian.io/) - Java、JavaScript、.NET、Scala、Ruby、NodeJSプロジェクトの依存関係におけるセキュリティ脆弱性をモニタリング。1つのプライベートプロジェクトは無料で、オープンソースプロジェクトは無制限。
  * [Mozilla Observatory](https://observatory.mozilla.org/) - サイトのセキュリティ脆弱性を検出し、修正します。
  * [Otterwatch](https://otterwatch.dev/) - 毎日のSSL/TLS証明書監視：有効期限アラート（30/7/1日）、チェーンおよびOCSPのリコールチェック、証明書の透明性発行履歴。5ドメインまで、永続無料。クレジットカードの入力不要。
  * [Protectumus](https://protectumus.com) - PHPの無料ウェブサイトセキュリティチェック、サイトウイルス対策、サーバーファイアウォール（WAF）。無料プランの登録ユーザーにはメール通知が提供されます。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) - パブリッククラウドを標的とする信頼度の高い侵害指標（IOC）。一部はGitHub（https://github.com/unknownhad/AWSAttacks ）で公開され、完全版はAPIから利用可能。
  * [pyup.io](https://pyup.io) - Pythonの依存関係をセキュリティ脆弱性の監視と自動更新。1つのプライベートプロジェクトには無料、オープンソースプロジェクトには無制限。
  * [qualys.com](https://www.qualys.com/community-edition) - ウェブアプリの脆弱性を検出、OWASPリスクの審査
  * [SikkerKey](https://sikkerkey.com) - マシン認証されたシークレットマネージャー。2プロジェクト、2台の起動マシン、20のシークレット、7日間のログ保持が無料。
  * [Smart Grow Vault](https://vault.smart-grow.app/) - 環境変数およびシークレットの管理に必要なエンタープライズレベルのプラットフォーム。無料プランには1プロジェクトあたり3アプリケーションと150のシークレットまでが含まれる。
  * [Socket](https://socket.dev) - 個人開発者、小さなチーム、オープンソースプロジェクト向けのサプライチェーンセキュリティ。無料アプリとファイアウォールCLIツールにより、コードから脆弱で悪意ある依存関係を防ぐ。70以上のサプライチェーンリスクインジケーターを検出。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) - 任意のSSLウェブサーバーの設定を詳細に分析
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 無料のウェブサイトセキュリティチェックとマルウェアスキャナー
  * [TestTLS.com](https://testtls.com) - SSL/TLSサービスのセキュアサーバー設定、証明書、チェーンなどについてテスト。HTTPSに限定されない。
  * [Virgil Security](https://virgilsecurity.com/) - あなたのデジタルソリューションに終端まで暗号化、データベース保護、IoTセキュリティなどを実装するためのツールとサービス。250ユーザーまでのアプリケーションには無料。

**[⬆️ Back to Top](#table-of-contents)**

## Authentication, Authorization, and User Management

  * [360username](https://360username.com/) - 90以上のソーシャルプラットフォームを検索し、一致するプロフィールを特定するための無料ツール。
  * [Aserto](https://www.aserto.com) - アプリケーションおよびAPI向けの細かい認可サービス。月間アクティブユーザー（MAU）1000まで無料、認可インスタンス100まで無料。
  * [asgardeo.io](https://wso2.com/asgardeo) - SSO、MFA、パスワードレス認証などとのシームレス統合。フロントエンドおよびバックエンドアプリ向けSDKを含む。月間アクティブユーザー（MAU）1000まで無料、5つのアイデンティティプロバイダーまで無料。
  * [Auth0](https://auth0.com/) - ホスト型SSO。無料プランには25,000MAU、無制限のソーシャル接続、カスタムドメイン、その他も含まれる。
  * [Authgear](https://www.authgear.com) - アプリケーションにパスワードレス認証、OTP、2FA、SSOを数分で導入。すべてのフロントエンドが含まれる。月間アクティブユーザー（MAU）5000まで無料。
  * [Authress](https://authress.io/) - 認証ログインとアクセス制御、プロジェクトごとに無制限のアイデンティティプロバイダー。Facebook、Google、Twitterなど。最初の1000回のAPI呼び出しは無料。
  * [Authy](https://authy.com) - 複数デバイスでの2段階認証（2FA）およびバックアップ。Google Authenticatorのドロップイン置き換え。成功した認証100回まで無料。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - アクセスポリシーの作成、テスト、デプロイに必要な完全な認可管理システム。細かい認可とアクセス制御が無料。月間アクティブプラインシパル100まで。
  * [Clerk](https://clerk.com) - ユーザー管理、認証、2FA/MFA、サインイン、サインアップ、ユーザープロフィールなどに用意されたプリビルトUIコンポーネント。無料プランには無制限のアプリケーション、アプリ毎に50,000MRU制限、3つのダッシュボードシートなども含まれる。
  * [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak イデンティティおよびアクセス管理サービス。ユーザー100まで、1リーンまで無料。
  * [Descope](https://www.descope.com/) - 高度にカスタマイズ可能な認証フローを提供。ノーコードおよびAPI/SDKによるアプローチを備え、月間7,500アクティブユーザー無料、50テナント（SAML/SSOテナントまで5個）
  * [duo.com](https://duo.com/) - ウェブサイトまたはアプリ向けの2要素認証（2FA）。10ユーザーまで無料、すべての認証方法、無制限の統合、ハードウェアトークンをサポート
  * [Kinde](https://kinde.com/) - 数分であなたの製品に統合できるシンプルかつ堅牢な認証。7,500無料アクティブユーザー（MAU）でスタートできるすべての必要な機能
  * [logintc.com](https://www.logintc.com/) - プッシュ通知による2要素認証（2FA）。10ユーザーまで無料、VPN、ウェブサイト、SSHをサポート
  * [Logto](https://logto.io/) - あなたの製品のユーザー識別を開発・安全に管理（認証および承認）。5,000MAUまで無料、オープンソースのセルフホストオプションも提供
  * [MojoAuth](https://mojoauth.com/) - MojoAuthにより、ウェブ、モバイル、またはアプリケーションにパスワードなし認証を数分で実装できます
  * [Okta](https://developer.okta.com/signup/) - ユーザー管理、認証、承認。月間100アクティブユーザーまで無料
  * [Ory](https://ory.sh/) - 認証（AuthN）／承認（AuthZ）／OAuth2.0／ゼロトラストを管理するセキュリティプラットフォーム。開発者向けの永遠無料アカウント、すべてのセキュリティ機能、無制限のチームメンバー、日間200アクティブユーザー、月間25kの許可チェック
  * [Permit.io](https://permit.io) - RBAC、ABAC、ReBACをサポートし、スケーラブルなマイクロサービスにリアルタイムで更新可能な承認-as-a-serviceプラットフォーム。ノーコードポリシーUIを備え、月間1,000アクティブユーザー無料プランを提供
  * [Phase Two](https://phasetwo.io) - Keycloak オープンソース認証とアクセス管理。最大1,000ユーザーまで無料リーン、最大10のSSO接続をサポート。Phase TwoのKeycloak強化コンテナを活用し、[Organization](https://phasetwo.io/product/organizations/)拡張を含む
  * [PropelAuth](https://propelauth.com) - 数行のコードで企業規模の顧客に販売可能。200ユーザーまで無料、10,000件のトランザクションメール（ウォーターマークブランド："Powered by PropelAuth"）を提供
  * [Scalekit](https://scalekit.com) - B2B SaaS向けの企業SSO（SAML、OIDC）、SCIMプロビジョニング、ソーシャルログイン。無料プランには100万MAU、100組織、1つのSSO接続、1つのSCIM接続を含む
  * [Stack Auth](https://stack-auth.com) - 認証が苦手な開発者にも最適なオープンソース認証。5分でスタートできる、自社サーバーで無料でホスト可能、または管理型SaaS版（10,000月間アクティブユーザー無料）を提供
  * [Stytch](https://www.stytch.com/) - すべての認証および詐欺防止APIおよびSDKを提供する一元化プラットフォーム。無料プランには月間10,000アクティブユーザー、無制限の組織、5のSSOまたはSCIM接続、1,000のM2Mトークンを含む
  * [SuperTokens](https://supertokens.com/) - アプリにネイティブに統合可能なオープンソースユーザー認証。ユーザーおよび開発者体験をコントロールしながら、迅速にスタートできる。5,000MAUまで無料
  * [WorkOS](https://workos.com/) - 最大100万MAUまで無料のユーザー管理および認証。メール＋パスワード、ソーシャル認証、マジック認証、MFAなどに対応
  * [ZITADEL Cloud](https://zitadel.com) - あなたのビジネスに合ったユーザーおよびアクセス管理を提供。マルチテナント（B2B）用途をサポート。最大25,000件の認証リクエストまで無料。すべてのセキュリティ機能（OTP、パスワードなし、ポリシーなど）が無料（支払い壁なし）


**[⬆️ Back to Top](#table-of-contents)**

## Mobile App Distribution and Feedback

  * [Appho.st](https://appho.st) - モバイルアプリホスティングプラットフォーム。無料プランには5アプリ、月間50ダウンロード、最大100MBのファイルサイズを含む
  * [Diawi](https://www.diawi.com) - iOSおよびAndroidアプリをデバイスに直接デプロイ。無料プランにはアプリアップロード、パスワード保護リンク、1日有効期限、10回のインストールを含む
  * [GetUpdraft](https://www.getupdraft.com) - テスト用にモバイルアプリを配布。無料プランには1つのアプリプロジェクト、3つのアプリバージョン、500MBのストレージ、月間100回のアプリインストールを含む
  * [InstallOnAir](https://www.installonair.com) - iOSおよびAndroidアプリを空中で配布可能。無料プラン：無制限のアップロード、プライベートリンク、ゲスト用2日有効期限、登録ユーザー用60日有効期限。
  * [Loadly](https://loadly.io) - iOSおよびAndroidベータアプリ配布サービスは、無制限ダウンロード、高速ダウンロード、無制限アップロードを提供する完全無料サービスです。
  * [DistApp](https://distapp.app) - Android、iOSおよびデスクトップアプリの管理と配布が可能。テストや自前配布に便利。2アプリ、1組織、100MBストレージ、無制限ダウンロードで無料体験。または、自前ホストも可能です。

**[⬆️ Back to Top](#table-of-contents)**

## Management System

  * [bitnami.com](https://bitnami.com/) - IaaSに準備されたアプリをデプロイ。1つのAWSマイクロインスタンスの管理が無料。
  * [Esper](https://esper.io) - Androidデバイス向けMDMおよびMAMサービス。1ユーザーライセンスで100デバイス無料、アプリストレージ25MB。
  * [jamf.com](https://www.jamf.com/) -  iPad、iPhone、Mac向けデバイス管理サービス。3デバイス無料。
  * [Miradore](https://miradore.com) - デバイス管理サービス。デバイスファイットを常に最新に保ち、無制限のデバイスを無料で利用可能。無料プランでは基本機能が提供されます。
  * [ploi.io](https://ploi.io/) - サーバー管理ツールでサーバーおよびサイトの簡単な管理とデプロイが可能。1サーバーまで無料。
  * [runcloud.io](https://runcloud.io/) - PHPプロジェクトに特化したサーバー管理。1サーバーまで無料。
  * [serveravatar.com](https://serveravatar.com) - PHPベースのウェブサーバーの管理と監視を自動設定で行う。1サーバーまで無料。
  * [xcloud.host](https://xcloud.host) - ユーザーインターフェースが使いやすいサーバー管理およびデプロイプラットフォーム。1サーバーまで無料プランが提供されています。

**[⬆️ Back to Top](#table-of-contents)**

## Messaging and Streaming

  * [Ably](https://www.ably.com/) - リアルタイムメッセージングサービス（存在確認、持続性、確実な配信）。無料プランでは月間300万メッセージ、100のピーク接続、100のピークチャンネルが含まれます。
  * [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQとしてのサービス。Little Lemurプラン：月間最大100万メッセージ、同時接続最大20、キュー最大100、キュー内のメッセージ最大10,000、複数ノードを異なるAZで展開可能。
  * [courier.com](https://www.courier.com/) - プッシュ、アプリ内、メール、チャット、SMS、その他メッセージチャネルに統一APIを提供。テンプレート管理なども備えています。無料プランでは月間10,000メッセージが含まれます。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - スケーラブルで安全なサーバーレスMQTTブローカー。1分間100万セッションを月間無料（クレジットカード不要）。
  * [Engage](https://engage.so/) - SaaS向けの総合的な顧客エンゲージメントおよび自動化ツール（メール、プッシュ、SMS、製品ツアー、バナーなど）。月間1,000人のアクティブユーザーまで無料。
  * [engagespot.co](https://engagespot.co/) - 開発者向けマルチチャネル通知インフラ。アプリ内、メール、SMS、Slack、プッシュなど複数チャネルに1回のAPI呼び出しで送信可能。無料プランでは月間10,000メッセージが含まれます。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - MQTTデバイスをクラウドネイティブIoTメッセージブローカーに接続。最大100デバイスまで接続可能（クレジットカード不要）で永遠に無料。
  * [httpSMS](https://httpsms.com) - Android電話をSMSゲートウェイとして使用し、テキストメッセージを送受信。月間最大200メッセージまで無料。
  * [knock.app](https://knock.app) - 開発者向け通知インフラ。アプリ内、メール、SMS、Slack、プッシュなど複数チャネルに1回のAPI呼び出しで送信可能。無料プランでは月間10,000メッセージが含まれます。
  * [Novu.co](https://novu.co) - 開発者向けのオープンソース通知インフラ。すべての通信チャネル（メール、SMS、ダイレクト、アプリ内、プッシュ）を一か所で管理できるシンプルなコンポーネントとAPI。無料プランには月間30,000件の通知と90日間の保存が含まれます。
  * [Pingram.io](https://www.pingram.io/) - 5分で通信インフラを構築。無料プランには：100件のSMSおよび電話、3,000件のメール、プッシュ、Slack、MS Teams、WhatsAppなど、さらに多くのサービスが含まれます。
  * [Pocket Alert](https://pocketalert.app) - iOSおよびAndroidデバイスへのプッシュ通知を送信。APIまたはWebhook経由で簡単に統合し、すべてのアラートについて完全なコントロールを維持できます。無料プラン：1デバイスおよび1アプリに1日50メッセージまで。
  * [pubnub.com](https://www.pubnub.com/) - Swift、Kotlin、Reactによるメッセージング。月間100万件の取引。1取引に複数メッセージが含まれる場合があります。
  * [pusher.com](https://pusher.com/) - リアルタイムメッセージングサービス。最大100の同時接続と1日20万件のメッセージまで無料。
  * [scaledrone.com](https://www.scaledrone.com/) - リアルタイムメッセージングサービス。最大20の同時接続と1日1万件のイベントまで無料。
  * [SMSGate](https://sms-gate.app) - Android™向けSMSゲートウェイにより、クラウドルーティングを用いてデバイスを通じてSMSの送受信が可能。完全無料のクラウドサービス（10,000件以上のメッセージ使用時には品質を維持するための推奨通知が適用されます）。
  * [SuprSend](https://www.suprsend.com/) - SuprSendは、API中心のアプローチにより、製品通知を簡素化する通知インフラです。1つの通知APIで、トランザクション通知、クローン通知、エンゲージメント通知を複数チャネルで作成・配信できます。無料プランでは月間10,000件の通知が提供され、ダイジェスト、バッチ、マルチチャネル、プレファレンス、テナント、ブロードキャストなど、さまざまなワークフローノードが含まれます。
  * [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io) としてのサービス。グローバル、AWS、GCP、Azure。無料で利用可能。メッセージサイズ4k、アクティブ接続50、月間5GBのデータが含まれます。
  * [webpushr](https://www.webpushr.com/) - Web Push通知 - 最大10,000人のサブスクリプションまで無料。プッシュ通知は無制限、ブラウザ内メッセージも可能
  * [vask](https://vask.dev) - リアルタイムメッセージングサービス。Pusherと互換。開発用プランはローカル開発に限定され、無料で100の同時接続、月間100万件のブロードキャスト、無制限のクライアントイベント、32kbのメッセージサイズが提供されます。

**[⬆️ Back to Top](#table-of-contents)**

## Log Management

  * [bugfender.com](https://bugfender.com/) - 1日あたり10万行のログまで無料。24時間の保存が可能
  * [log.dog](https://log.dog/) - LogDogはiOSおよびAndroid向けのリモートデバッグ／ログ収集SDK（Web UI付き）。リアルタイムですべてのログ、リクエスト、イベントをキャプチャし、それらをインターセプトできる。月間100MBまでのログが無料。
  * [logflare.app](https://logflare.app/) - アプリごとに月間12,960,000件まで無料。3日間の保存が可能
  * [logtail.com](https://logtail.com/) - ClickHouseベースのSQL互換ログ管理。月間1GBまで無料。3日間の保存が可能。
  * [logzab.com](https://logzab.com/) - アクティビティログの管理システム。月間1,000件のユーザー活動ログまで無料。1ヶ月間の保存が可能。5プロジェクトまで対応。
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) - Manage Engineによるログ管理サービス。無料プランでは50GBのストレージと15日間の保存、7日間の検索が提供されます。
  * [openobserve.ai](https://openobserve.ai/) - 月間200GBのインジェストが無料。15日間の保存が可能
  * [Smart Grow Logs](https://logs.smart-grow.app/) - 端末間のログ管理プラットフォーム。端末間暗号化、リアルタイムアラート、マルチプラットフォームSDKを備えています。無料プランでは1日3,000件のログまで対応。

**[⬆️ Back to Top](#table-of-contents)**

## Translation Management

  * [AutoLocalise.com](https://www.autolocalise.com/) - 翻訳ファイルを管理せずに即時ローカライズ。月間10,000文字まで無料。無制限の言語対応
  * [crowdin.com](https://crowdin.com/) - 無制限のプロジェクト、無制限の文字列、そしてコラボレーターをOpen Sourceで提供
  * [Free PO editor](https://pofile.net/free-po-editor) - 誰でも無料
  * [Lingo.dev](https://lingo.dev) - ウェブおよびモバイルのローカライゼーション用のオープンソースAI駆動CLI。自社のLLMを使用するか、または月間10,000語まで無料でLingo.devが管理するローカライゼーションエンジンを利用できます
  * [lingohub.com](https://lingohub.com/) - 最大3ユーザーまで無料、オープンソースには常に無料
  * [Localhero.ai](https://localhero.ai) - すべてのプルリクエストに対して自動でブランドに合った翻訳を実行し、語彙表と翻訳記憶を活用。1プロジェクトあたり、月間250翻訳クレジット（約4,000語）無料
  * [localazy.com](https://localazy.com) - 1000語のソース言語文字列まで無料、無制限の言語、無制限のコラボレーター、スタートアップおよびオープンソース向けのプラン無料
  * [Localit](https://localit.io) - 高速かつ開発者向けのローカライゼーションプラットフォーム。GitHub/GitLabとのシームレスな統合、AI支援および手動翻訳、そして豊富な無料プラン（2ユーザー、500キー、無制限プロジェクトを含む）
  * [localizely.com](https://localizely.com/) - オープンソースには無料
  * [Loco](https://localise.biz/) - 最大2000翻訳まで無料、無制限の翻訳者、プロジェクトあたり10言語、プロジェクトあたり1000個の翻訳可能なアセット
  * [POEditor](https://poeditor.com/) - 最大1000文字列まで無料
  * [SimpleLocalize](https://simplelocalize.io/) - 最大100翻訳キーまで無料、無制限の文字列、無制限の言語、スタートアップ向けプラン無料
  * [Texterify](https://texterify.com/) - 1ユーザーまで無料
  * [Tolgee](https://tolgee.io) - 制限された翻訳を提供するSaaSサービス、そして永遠に無料のセルフホスト版
  * [transifex.com](https://www.transifex.com/) - オープンソースには無料

**[⬆️ Back to Top](#table-of-contents)**

## Monitoring

  * [Pingzo](https://www.pingzoapp.com) - 無料プランは1回の稼働/API監視（15分間隔）と即時メール通知を提供
  * [Accesserty Pulse](https://accesserty.com/en/pulse) - Accesserty Pulseはライブウェブサイトの相互作用信号と検出可能なアクセシビリティリスクをモニタリング。誰でも無料プランを提供し、14日間のプロ体験版を提供
  * [AlertKick](https://www.alertkick.com) - サーバーのセキュリティ（Linux向けeBPFエージェント）、稼働状態監視、オンコールアラート／ステータスページを1製品で提供。無料プランには10個の稼働監視とハートビート、5分間隔、7日間の保存を含む
  * [assertible.com](https://assertible.com) - 自動APIテストおよび監視。チームおよび個人向けの無料プランを提供
  * [Better Stack](https://betterstack.com/better-uptime) - 稼働状態監視、インシデント管理、オンコールスケジュール／アラート、ステータスページを1製品で提供。無料プランには10個の監視、3分間隔、ステータスページを含む
  * [bleemeo.com](https://bleemeo.com) - 3サーバーまで無料、5個の稼働監視、無制限ユーザー、無制限ダッシュボード、無制限アラートルール
  * [checklyhq.com](https://checklyhq.com) - オープンソースのE2E／合成監視と深層API監視。開発者向け。無料プランは1ユーザー、1万APIおよびネットワーク／1,500回ブラウザチェック実行。
  * [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - URLまたはウェブサイトのCore Web Vitals履歴を検索。
  * [cronitor.io](https://cronitor.io/) - cronジョブ、ウェブサイト、APIなどへのパフォーマンス分析と稼働状態監視。無料プランは5台のモニタリングに対応。
  * [datadoghq.com](https://www.datadoghq.com/) - 最大5ノードまで無料
  * [deadmanssnitch.com](https://deadmanssnitch.com/) - cronジョブの監視。1つの無料スニッチ（モニタ）を提供。他者を招待して登録させれば追加可能
  * [downtimemonkey.com](https://downtimemonkey.com/) - 60個の稼働状態モニタ、5分間隔。メール、Slackによるアラート。
  * [drumbeats.io](https://drumbeats.io/) - cron、ハートビート、稼働状態監視に加え、インシデント管理とステータスページ。無料プランは最大50モニタ、1分間隔、無制限チーム参加に対応。
  * [economize.cloud](https://economize.cloud) - Economizeは、クラウドインフラストラクチャのコストを明確にすることで、クラウドリソースを最適化し、その結果を報告します。月間Google Cloud Platformでの支出が5,000ドルまで無料。
  * [fivenines.io](https://fivenines.io/) - Linuxサーバー監視。リアルタイムダッシュボードとアラート機能。最大5サーバーまで、60秒間隔で無料。クレジットカード不要。
  * [FlareWarden](https://flarewarden.com) - 稼働状態、コンテンツ、依存関係、SSL監視。複数地域での検証とステータスページ。無料プランには15モニタ、5分間隔、90日間の履歴が含まれる。
  * [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloudは、メトリクスとログをGrafanaと統合した可視化プラットフォームです。無料プラン：3ユーザー、10ダッシュボード、100アラート、メトリクスはPrometheusおよびGraphite（10,000シリーズ、14日間保存）、ログはLoki（50GBのログ、14日間保存）
  * [healthchecks.io](https://healthchecks.io) - cronジョブやバックグラウンドタスクの監視。最大20チェックまで無料。
  * [incidenthub.cloud](https://incidenthub.cloud/) - クラウドおよびSaaSのステータスページ集計サービス。20モニタと2通知チャンネル（SlackおよびDiscord）は永久無料。
  * [inspector.dev](https://www.inspector.dev) - 1分以内に完全なリアルタイム監視ダッシュボードを提供。無料プランは永久に利用可能。
  * [instatus.com](https://instatus.com) - 10秒で美しいステータスページを取得。無制限のサブスクリプションと無制限のチームで永久無料。
  * [isitdownstatus.com](https://isitdownstatus.com) – 公開JSON APIにより、500以上のサービス（GitHub、Stripe、AWSなど）のリアルタイムステータスを取得。認証不要、CORS対応。
  * [linkok.com](https://linkok.com) - オンラインで破損したリンクをチェック。小型ウェブサイト（100ページまで）は無料。オープンソースプロジェクトは完全無料。
  * [loader.io](https://loader.io/) - 制限付きの無料ロードテストツール
  * [MarionetteOps.com](https://www.marionetteops.com/) - サーバー監視、公開ステータスページ、サービス稼働状態監視。
  * [Middleware.io](https://middleware.io/) -  ミドルウェア可視化プラットフォームは、アプリケーションとスタックのすべての状態を可視化し、スケールした問題の監視と診断を可能にします。開発者コミュニティ向けの無料プランは、ログ監視（最大100万ログイベント）、インフラストラクチャ監視およびAPM（最大2ホスト）を提供。
  * [MonitorMonk](https://monitormonk.com) - シンプルな稼働状態監視と美しいステータスページ。フォーリーフリープランでは、HTTPS、キーワード、SSLおよび応答時間監視が10サイトまたはAPIエンドポイントに対応し、2つのダッシュボード／ステータスページを提供します。
  * [netdata.cloud](https://www.netdata.cloud/) - Netdataはリアルタイムメトリクスを収集するオープンソースツールです。成長中の製品であり、GitHubにもあります！
  * [newrelic.com](https://www.newrelic.com) - エンジニアがより完璧なソフトウェアを作成できるように設計されたニューアーリックの可視化プラットフォーム。モノリスからサーバレスまで、すべてをインストルメントし、分析・トラブルシューティング・最適化を行うことができます。無料プランでは1か月100GBのデータインジェスト、1人の無料フルアクセスユーザー、無制限のプライマリユーザーが提供されます。
  * [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNotはウェブサイトおよびAPIの稼働状態監視、cronジョブやスケジュールタスクの監視、ステータスページの提供を行います。最初の5つのチェック（3分間隔）は無料です。無料プランではSlack、Discord、メールでアラートを送信します。
  * [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) - 中国のグレートファイアウォールによってサイトがブロッキングされているかを確認します。中国のサーバーと米国サーバーが検出したDNS結果およびASN情報を比較することで、DNS汚染を特定します。
  * [pagecrawl.io](https://pagecrawl.io/) -  ウェブサイトの変更を監視、最大6台のモニタリングまで無料で日間チェックが可能です。
  * [pagertree.com](https://pagertree.com/) - アラートおよびオンキャル管理に必要なシンプルなインターフェース。無料プランは最大5ユーザーまでです。
  * [phare.io](https://phare.io/) - 稼働状態監視は、無制限のプロジェクトおよびステータスページに対し、最大100,000イベントまで無料です。
  * [pingbreak.com](https://pingbreak.com/) - 現代的な稼働状態監視サービス。無制限のURLをチェックし、Discord、Slack、またはメールでダウンタイム通知を受け取れます。
  * [Pingmeter.com](https://pingmeter.com/) - 5つの稼働状態モニタリング（10分間隔）。SSH、HTTP、HTTPS、および任意のカスタムTCPポートを監視します。
  * [pingpong.one](https://pingpong.one/) - 高度なステータスページプラットフォームに監視機能を備えています。無料プランには、SSLサブドメインを用いた1つのパブリックカスタマイズ可能なステータスページが含まれます。プロプランはオープンソースプロジェクトおよび非営利団体に無料で提供されます。
  * [Prismix](https://prismix.dev) - 75以上のAIサービス（OpenAI、Anthropic、Gemini、Mistralなど）のリアルタイム運用状態を返すREST API（GET /api/v1/statuses）が無料で利用可能。認証不要。[プロプラン（月額10ドル）で無料プランが提供されます]
  * [Pulsetic](https://pulsetic.com) - 10モニタリング、6か月分の履歴データ、無制限のステータスページ、カスタムドメインが含まれます！無制限の時間とメールアラートも無料です。クレジットカードは必要ありません。
  * [robusta.dev](https://home.robusta.dev/) - Prometheusに基づいた強力なKubernetes監視。自前でPrometheusを導入するか、すべてを一括でインストールできます。無料プランでは最大20ノードのKubernetesが対応。Slack、Microsoft Teams、Discordなどへのアラートが可能。PagerDuty、OpsGenie、VictorOps、DataDogなど多くのツールとの統合も可能です。
  * [Runframe](https://runframe.io/) - オンキャルアラート、インシデント管理、公開／プライベートステータスページ。無料プランでは最大5ユーザー、1チーム、1オンキャルスケジュール、基本的なステータスページ、インシデントライフサイクル、Slackネイティブインシデントレスポンスが含まれます。
  * [Servervana](https://servervana.com) - 大規模プロジェクトやチームに対応した高度な稼働状態監視。HTTP監視、ブラウザベース監視、DNS監視、ドメイン監視、ステータスページなども提供します。無料プランには10個のHTTPモニタリング、1個のDNSモニタリング、1つのステータスページが含まれます。
  * [Simple Observability](https://simpleobservability.com) - メトリクスとログを統合した強力なサーバー監視プラットフォーム。設定の複雑さがありません。1サーバーまで無料です。
  * [sitesure.net](https://sitesure.net) - ウェブサイトおよびcron監視 — 2モニタリング無料
  * [skylight.io](https://www.skylight.io/) - 最初の100,000リクエスト（Railsのみ）無料
  * [statuscake.com](https://www.statuscake.com/) - ウェブサイト監視、無制限のテストが無料（制限あり)
  * [statusgator.com](https://statusgator.com/) - ステータスページ監視、3台の監視が無料
  * [supaguard.app](https://supaguard.app/) - 20以上のグローバル地域から構成された合成監視。無料プランには、AIによる自己修復と自動テスト生成を含む1,000回のブラウザチェック/月が含まれます。
  * [superlog.sh](https://superlog.sh/) - オープンソースのOpenTelemetry可視化（トレース、ログ、メトリクス）とAIアグエントによる事故調査。無料プランには月間100万トレース、500万ログ、1億メトリクスポイント（30日間保存）が含まれ、クレジットカードは不要。完全にオープンソースで、自前でホスト可能。
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) - サーバー監視、稼働状態監視、DNSおよびドメイン監視。無料で10台のサーバー、10件の稼働状態、10件のドメインを監視できます。
  * [syagent.com](https://syagent.com/) - 非商業用途の無料サーバー監視サービス、アラートとメトリクスを提供。
  * [UptimeObserver.com](https://uptimeobserver.com) - 20件の稼働状態監視（5分間隔）とカスタマイズ可能なステータスページ（商業利用も可能）を無料で提供。メールおよびTelegramによる無制限リアルタイム通知を楽しめます。クレジットカードは必要ありません。
  * [uptimetoolbox.com](https://uptimetoolbox.com/) - 5サイト分の無料監視（3分間隔）、公開ステータスページを提供。
  * [Wachete](https://www.wachete.com) - 5ページを監視し、24時間ごとにチェック。
  * [Xitoring.com](https://xitoring.com/) - 稼働状態監視：20件無料、LinuxおよびWindowsサーバー監視：5件無料、ステータスページ：1件無料 — モバイルアプリ、複数の通知チャネル、その他多数の機能！
  * [UptimeRobot](https://uptimerobot.com/) - ハobbyプロジェクト向けの無料稼働状態監視。50件の監視（5分間隔）を提供し、HTTP、ping、ポート、キーワード監視をサポート。

**[⬆️ Back to Top](#table-of-contents)**

## Crash and Exception Handling

  * [Axiom](https://axiom.co/) - 30日間保存を含むログを最大0.5TBまで保存。Vercelなどのプラットフォームとの統合およびメール／Discord通知を含む高度なデータクエリを提供。
  * [Bugsink](https://www.bugsink.com/) - Sentry-SDKとの互換性のあるエラー追跡。月間5,000件まで無料、または自前ホスト時に無制限使用。
  * [bugsnag.com](https://www.bugsnag.com/) - 初期トライアル後の月間2,000件まで無料
  * [CatchJS.com](https://catchjs.com/) - スクリーンショットとクリックトレースを含むJavaScriptエラー追跡。オープンソースプロジェクト向けに無料。
  * [elmah.io](https://elmah.io/) - ウェブ開発者向けのエラー記録と稼働状態監視。オープンソースプロジェクト向けに無料の小規模ビジネスサブスクリプションを提供。
  * [Embrace](https://embrace.io/) - モバイルアプリ監視。小規模チーム向けに年間100万ユーザーセッションまで無料。
  * [exceptionless](https://exceptionless.com) - リアルタイムエラー、機能、ログ報告など。月間3,000イベント／1ユーザーまで無料。オープンソースで、無制限使用に自前ホストが簡単。
  * [GlitchTip](https://glitchtip.com/) - シンプルでオープンソースのエラー追跡。オープンソースSentry SDKと互換。月間1,000イベントまで無料、または自前ホスト時に無制限使用。
  * [honeybadger.io](https://www.honeybadger.io) - 例外、稼働状態、クローン監視。小規模チームおよびオープンソースプロジェクト向け（月間12,000エラーまで）無料。
  * [Jam](https://jam.dev) - ワンクリックで開発者向けのバグ報告。無料プランには無制限のジャムが含まれます。
  * [memfault.com](https://memfault.com) - クラウドデバイスの可視化とデバッグプラットフォーム。 [Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)、[Laird](https://app.memfault.com/register-laird) 用の無料100デバイス。
  * [rollbar.com](https://rollbar.com/) - 例外およびエラー監視、月5,000エラー無料プラン、無制限ユーザー、30日間の保存
  * [Semaphr](https://semaphr.com) - モバイルアプリ向けのすべてを一括で制御できる無料ツール。
  * [sentry.io](https://sentry.io/) - Sentryはリアルタイムでアプリの例外を追跡しており、無料プランを提供。月5,000エラー、1ユーザーまで無料。セルフホストの場合、無制限使用。
  * [Whitespace](https://whitespace.dev) - ブラウザ内にワンクリックでバグ報告。個人使用向け無制限録画の無料プラン。

**[⬆️ Back to Top](#table-of-contents)**

## Search

  * [algolia.com](https://www.algolia.com/) - タイプミスを許容し、関連性とUIライブラリを備えたホストされた検索ソリューション。無料「Build」プランには100万ドキュメントと1万検索/月が含まれる。また、も無料提供。 [developer documentation search](https://docsearch.algolia.com/)
  * [bonsai.io](https://bonsai.io/) - 無料1GBメモリと1GBストレージ
  * [CommandBar](https://www.commandbar.com/) - 統合検索バー（アーサービス）：ウェブベースのUIウィジェット／プラグインで、ユーザーが製品内のコンテンツ、ナビゲーション、機能などを検索できるようになります。これは発見性を高めます。月間アクティブユーザー1,000まで無料、無制限コマンド。
  * [searchly.com](https://www.searchly.com/) - 無料2インデックスと20MBストレージ

**[⬆️ Back to Top](#table-of-contents)**

## Education and Career Development

  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - セキュリティ、ネットワーク、Pythonなどに関する認定に合わせた無料コースを提供。
  * [CloudCertPrep](https://cloudcertprep.io) - CLF-C02向けのAWS認定練習試験（1,050問以上）を無料で提供。タイム制限された模擬試験、ドメイン練習、間隔繰り返し、進捗管理を備えています。
  * [CodeTrain](https://codetrain.ai) - AIによるコーディングチューター。あなたのコードベースに学びを提供し、コードを自動で書くことはありません。無料プラン：月10回のブラウザ内レッスン、Python/JSはクライアントサイドで実行、カード不要。
  * [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - 業界トップの専門家による短い無料講座。1時間以内で最新の生成AIツールと技術に実践的に触れられます。
  * [DevNet Academy](https://devnet-academy.com/) - Cisco DevNet Expert / CCIE Automation認定向けの無料、自習型トレーニング。Python ClickとFlask-RESTxをカバー。
  * [Django-tutorial.dev](https://django-tutorial.dev) - Djangoを最初のフレームワークとして学ぶための無料オンラインガイドを提供し、ユーザーが書いた記事に無料フォローリンクを提供。
  * [edX](https://www.edx.org/) - 世界トップの250機関（ハーバード大学、MITなど）から4,000以上を提供する無料オンラインコース。コンピュータサイエンス、エンジニアリング、データサイエンスに特化。
  * [Exercism](https://exercism.org) - データ分析、情報セキュリティ、ウェブ開発などに関する無料オープンソースコースと認定。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - React、Node.js、GraphQL、TypeScriptなどによる現代的なウェブ開発に関する大学レベルの無料コース。完全オンラインで、自習型。
  * [FreeCodeCamp](https://www.freecodecamp.org/) - 無料プラットフォーム。経験豊富なプロの履歴書テンプレート多数。完全にクローン・編集・ダウンロード可能で、ATS最適化済み。
  * [Full Stack Open](https://fullstackopen.com/en/) - データ分析、情報セキュリティ、ウェブ開発などに関する無料オープンソースコースと認定を提供。","現代的なウェブ開発に関する大学レベルの無料コース。React、Node.js、GraphQL、TypeScriptなど。完全オンラインで、自習型。
  * [Interactive CV](https://interactive-cv.com) - AIによる履歴書作成ツールで、リアルタイム編集とATS最適化が可能。無料プランには、自動的にCVをハーバード、ユーロパスなどのプレミアムテンプレートに変換、PDF出力、無制限の職種情報追跡、チャットや音声による履歴書共有が含まれる。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - HTML/CSS、JavaScriptおよびSQLの基礎から高度な知識までを学べる無料オンラインガイド。
  * [LabEx](https://labex.io) - Linux、DevOps、サイバーセキュリティ、プログラミング、データサイエンスなど、インタラクティブな実験と実際のプロジェクトを通じてスキルを習得。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - MIT OpenCourseWareは、2500以上のMIT講義の資料をオンラインで公開し、世界中の学習者や教育者に知識を無料で提供するサービス。YouTubeチャンネルは [@mitocw](https://www.youtube.com/@mitocw/featured) で見られます。
  * [Reactive Resume](https://rxresu.me) - 無料で利用可能なオープンソースの履歴書作成ツール。テンプレートは数十種類あり、PDF、DOCXに変換可能で、履歴書の公開共有リンク（オプトイン）を提供。
  * [Roadmap.sh](https://roadmap.sh) - ブロックチェーンからUXデザインまで、開発のすべての側面をカバーする無料学習マップ。
  * [The Odin Project](https://www.theodinproject.com/) - JavaScriptおよびRubyを焦点にしたウェブ開発向けカリキュラムを備えた無料オープンソースプラットフォーム。
  * [W3Schools](https://www.w3schools.com/) - HTML、CSS、JavaScriptなどウェブ開発技術に関する無料チュートリアルを提供。

**[⬆️ Back to Top](#table-of-contents)**

## Email

  * [10minutemail](https://10minutemail.com) - テスト用の無料、一時的なメールアドレス。
  * [AhaSend](https://ahasend.com) - トランザクショナルメールサービス。月間1000件まで無料。ドメイン、チームメンバー、Webhook、メッセージルートは無料プランで無制限。
  * [AnonAddy](https://anonaddy.com) - オープンソースの匿名メール転送サービス。無制限のメールアリアを無料で作成可能。
  * [anon.li Alias](https://anon.li/alias) - オープンソース、匿名のメールアリア／転送ソリューション。PGP暗号化、返信機能を備え、無料プランでは10個のランダムアリアと1個のカスタムアリアを提供。開発者APIおよびCLIも提供。
  * [Antideo](https://www.antideo.com) - 無料プランでは1時間あたり10回のAPIリクエスト。メールアドレス、IP、電話番号の検証が可能。クレジットカードは不要。
  * [Anypost](https://anypost.com) - トランザクショナルおよびブロードキャストメールAPI。月間3,000件まで無料。それ以降は1,000件あたり8セントまで低価格。
  * [Atomic Mail](https://atomicmail.ai) - AIエージェント向けに設計されたメール。完全無料。プログラムによるインボックス作成、カスタムドメイン、JMAP標準（RFC 8620/8621）での完全送受信。ホストされたMCPサーバーも提供。実際のメールボックスサービスであり、一時的または使い捨てのメールではない。
  * [Brevo](https://www.brevo.com/) - 月間9,000件、日間300件まで無料。
  * [Bump](https://bump.email/) - 無料で10個のBumpメールアドレス、1つのカスタムドメインを提供。
  * [Burnermail](https://burnermail.io/) - 無料で5個のBurnerメールアドレス、1つのメールボックス、7日間のメール履歴を提供。
  * [Buttondown](https://buttondown.email/) - ニュースレターサービス。最大100人のサブスクリプションまで無料。
  * [Canny Pigeons](https://cannypigeons.com/) - DMARC監視プラットフォーム。DNSのズレ検知、IP脅威情報、無制限ユーザー対応。最初のドメインは無料。クレジットカードは不要。
  * [Conduit](https://conduit.email/) - 受信メールをWebhookに変換し、メールからAPIをトリガーできます。このサービスは完全に無料です。
  * [Contact.do](https://contact.do/) - リンク内の連絡フォーム（bitlyによる連絡フォーム）
  * [debugmail.io](https://debugmail.io/) - 開発者向けの簡単なテストメールサーバー
  * [dkimvalidator.com](https://dkimvalidator.com/) - メールのDNS/SPF/DKIM/DMARC設定が正しいかをテスト、roundsphere.comによる無料サービス
  * [DNSExit](https://dnsexit.com/) - ドメイン下のメールアドレスを最大2つ無料で利用可能で、100MBのストレージスペースを提供。IMAP、POP3、SMTP、SPF/DKIM対応。
  * [EmailGuard](https://emailguard.lazrek.net/) - 削除可能なメールアドレスをブロックし、タイポを検出し、MXレコードをAPIで検証。月間100回無料リクエスト。
  * [EmailJS](https://www.emailjs.com/) - これは完全なメールサーバーではありません。これは、認証情報を公開せずにクライアントからメールを送信できるメールクライアントです。無料プランでは月間200リクエスト、2つのメールテンプレート、リクエストサイズ最大50Kb、履歴が限定的に保存されます。
  * [EmailLabs.io](https://emaillabs.io/en) - 月間最大9,000メールを無料で送信可能、日間最大300メール。
  * [EmailQo Email Infrastructure Grader](https://emailqo.com/email-grader) - SPF、DKIM、DMARCおよびメールサーバー設定をチェックする無料メールインフラグレーダー。スコアは100点満点で、登録不要。
  * [EmailOctopus](https://emailoctopus.com) - 月間最大2,500サブスクリプションと10,000メール無料
  * [Emailvalidation.io](https://emailvalidation.io) - 月間100回のメール検証無料
  * [Emitlo](https://emitlo.com) - 月間12,000メール無料、メールAPIおよびSMTP、SPF/DKIM/DMARC対応、クレジットカードは不要。
  * [EtherealMail](https://ethereal.email) - Etherealは仮のSMTPサービスで、主にNodemailerおよびEmailEngineユーザー（ただし限定されない）向けです。これは完全に無料の非取引メールサービスであり、メッセージは配信されません。
  * [forwardemail.net](https://forwardemail.net) - カスタムドメイン向けの無料メールフォワーディング。ドメイン名を使って無限にメールアドレスを作成・フォワーディングできます（**注意**：.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.workなどのTLDを使用する場合、スパムのため料金が必要です）
  * [Imitate Email](https://imitate.email) - ビルド/テストおよびCI/CD環境でのメール機能をテストするためのサンドボックスメールサーバー。無料アカウントは毎日15メールまで無制限に利用可能です。
  * [ImprovMX](https://improvmx.com) - 無料メールフォワーディング。
  * [Inboxes App](https://inboxesapp.com) - 1日3つの一時的なメールアドレスを作成し、Chrome拡張機能から使用後に削除できます。サインアップフローのテストに最適です。
  * [inboxkitten.com](https://inboxkitten.com/) - 無料の一時的な/削除可能なメールインボックス。メールは最大3日間自動で削除されます。オープンソースで、自前でホスト可能。
  * [KaiMail](https://kaimail.net) - ARC/DKIM署名付きのカスタムドメイン向けメールフォワーディング。無料プランには1ドメイン、1メールボックス、月間300メール、メッセージサイズ最大1MBが含まれます。メール受信Webhookも提供されます。オープンソースプロジェクト向けの特別プランあり。
  * [mail-tester.com](https://www.mail-tester.com) - メールのDNS/SPF/DKIM/DMARC設定が正しいかをテスト、月間20回無料。
  * [Maileroo](https://maileroo.com) - SMTPリレーと開発者向けメールAPI。月間5,000件まで、無制限ドメイン、無料メール検証、ブラックリストモニタリング、メールテストなど。
  * [mailcatcher.me](https://mailcatcher.me/) - メールをキャッチし、ウェブインターフェースで提供。
  * [mailchannels.com](https://www.mailchannels.com) - REST APIおよびSMTP統合のメールAPI。月間3,000件まで無料。
  * [Mailcheck.ai](https://www.mailcheck.ai/) - ユーザーが一時的なメールアドレスでサインアップできないようにする。1時間あたり120回リクエスト（月間約86,400回）
  * [Maildroppa](https://maildroppa.com) - 最大100名のサブスクリプターと無制限のメール送信および自動化を無料で提供。
  * [MailerLite.com](https://www.mailerlite.com) - 月間1,000名のサブスクリプター、月間12,000件のメールを無料で提供
  * [MailerSend.com](https://www.mailersend.com) - メールAPI、SMTP、月間500件のトランザクショナルメール無料、1日100回APIリクエスト
  * [mailinator.com](https://www.mailinator.com/) - 任意のインボックスを使用できる無料公開メールシステム
  * [Mailjet](https://www.mailjet.com/) - 月間6,000件のメールを無料で提供（1日200件の送信制限）
  * [mailsac.com](https://mailsac.com) - 一時メールテスト用の無料API、公開メールホスティング、送信元キャプチャ、メール→Slack/ウェブソケット/ウェブホーク（月間1,500回API制限）
  * [Mailtrap.io](https://mailtrap.io/) - メールAPIおよびSMTP、月間4,000件のメールを無料で提供（1日150件まで）。メールマーケティングには500件のコンタクトと月間1,500件のメール、メールサンドボックスには月間50件のテストメール、1つのサンドボックス、最大10件の保存メールを提供。
  * [Mutant Mail](https://www.mutantmail.com/) - 無料10メールID、1ドメイン、1メールボックス。すべてのメールIDに1つのメールボックス。
  * [OneSignal](https://onesignal.com/) - 月間10,000件のメールを無料で提供。クレジットカードは不要。
  * [Orbisearch](https://orbisearch.com) - 無料の大量メール検証、1日100回の検証、登録不要。
  * [Parsio.io](https://parsio.io) - 無料メールパーサー（メールをフォワードし、データを抽出してあなたのサーバーに送信）
  * [Plunk](https://useplunk.com) - 月間3,000件のメールを無料で提供
  * [Postmark](https://postmarkapp.com/) - 月間100件のメールを無料で提供、週間DMARCの無制限通知。
  * [Proton Mail](https://proton.me/mail) -  無料の安全なメールアカウントサービスプロバイダー。内蔵の端末から端末までの暗号化。無料1GBストレージ。
  * [Reloop](https://reloop.sh) - 開発者向けトランザクショナルメールAPIおよびSMTP。無料プラン：月間3,000件、1日200件、カスタムドメイン1つ、アグエントインボックス1つ。
  * [Resend](https://resend.com) - 開発者向けトランザクショナルメールAPI。月間3,000件、1日100件無料、カスタムドメイン1つ。
  * [SendBridge Mail Tester](https://sendbridge.com/mail-tester) — 無料のメール配信テスト（登録不要）。一時的なインボックスアドレスを生成し、SPF、DKIM、DMARC、Rspamdのスパムスコア、23以上のRBLブラックリスト、逆DNS、コンテンツ品質を分析。無制限のテスト、結果は数秒で、共有可能なレポートページ。
  * [Sender](https://www.sender.net) - 月間15,000メールまで、最大2,500人の購読者
  * [Sendpulse](https://sendpulse.com) - 月間500人の購読者、月間15,000メールまで無料
  * [SendStreak](https://www.sendstreak.com/) - SMTPサーバー（例：AWS、Maileroo、Gmail）にテンプレート、自動化、履歴などを追加するメールフレームワークサービス。日間100メールまで無料、時間制限なし。
  * [SimpleLogin](https://simplelogin.io/) - オープンソースで自前で運用可能なメールアリア／転送解決策。無料10アリア、無制限の帯域、無制限の返信／送信。教育関係者（学生、研究者など）向け無料。
  * [Substack](https://substack.com) - 無制限の無料ニュースレターサービス。料金を請求するまで無料。
  * [Suped](https://www.suped.com/) - 使いやすいDMARC監視プラットフォーム。無料プランは1ドメインをカバーし、月間1,000メールまで対応。
  * [Sweego](https://www.sweego.io/) - 開発者向けのヨーロッパのトランザクショナルメールAPI。日間100メールまで無料。
  * [temp-mail.io](https://temp-mail.io) - 複数メールを同時に生成し、転送可能な一時的なメールサービス。
  * [Temp-Mail.org](https://temp-mail.org/en/) - 複数ドメインを用いた一時メールサービス。ページを再読み込みたびにメールアドレスが更新されます。完全無料で、サービス料金は一切ありません。
  * [TempMailDetector.com](https://tempmaildetector.com/) - 月間200メールまで無料で確認し、メールが一時的かどうかを確認。
  * [trashmail.com](https://www.trashmail.com) - 転送機能と自動アドレス期限切れを備えた無料の一時メールアドレス。
  * [Tuta](https://tuta.com/) - 内蔵された端末から端末への暗号化、広告なし、トラッキングなしの安全なメールアカウントサービス。無料1GBストレージ、1カレンダー（Tutaも [paid plan](https://tuta.com/pricing) を提供）。Tutaはまた部分的に [open source](https://github.com/tutao/tutanota) であるため、自前で運用が可能です。
  * [Verifalia](https://verifalia.com/email-verification-api) - リアルタイムメール確認API。メールボックス確認と一時メールアドレス検出を提供。日間25件まで無料のメール確認。
  * [verimail.io](https://verimail.io/) - 大量およびAPIによるメール確認サービス。月間100件まで無料。
  * [Waitlio](https://waitlio.com/) - 製品リリース向けのウェイトリスト管理ソフトウェア。ブランド化されたウェイトリストページを作成し、メール購読者を収集・確認し、タグと分析を用いてサインアップを管理。無料プランには月間100人の購読者、1つのウェイトリスト、APIアクセスが含まれます。
  * [Wraps](https://wraps.dev) - メール自動化ワークフロー、5,000件のイベントを追跡、無制限の連絡先。無料。
  * [ZeroSMTP](https://github.com/msgwing/ZeroSMTP) - msgwing.comドメインでの無料SMTPリレー、日間200メールまで、有料プランなし。共有された@msgwing.comアドレスから送信のみ（カスタムドメイン不可）。15言語の即時実行コード例およびWindows Server／Linux／ネットワークプリンター設定ガイドを提供。

**[⬆️ Back to Top](#table-of-contents)**

## Feature Toggles Management Platforms

  * [Abby](https://www.tryabby.com) - オープンソースの機能フラグおよびA/Bテスト。設定をコード化し、完全に型付けされたTypeScript SDKを提供。Next.jsおよびReactなどのフレームワークとの強い統合。豊富な無料プランと安価なスケーリングオプション。
  * [ConfigCat](https://configcat.com) - ConfigCatは開発者向けの機能フラグサービスで、チーム規模無制限、優れたサポート、適切な価格。無料プランは最大10のフラグ、2環境、1製品、月間500万リクエストまで。
  * [Flagsmith](https://flagsmith.com) - 機能を確実にリリース。ウェブ、モバイル、サーバーサイドアプリケーションにおける機能フラグを一元管理。ホストされたAPIを利用、自社のプライベートクラウドにデプロイ、またはオンプレミスで実行。
  * [GrowthBook](https://growthbook.io) - ベイズ統計解析エンジンを内蔵したオープンソースの機能フラグおよびA/Bテストプロバイダー。3ユーザーまで無料。機能フラグと実験は無制限。
  * [Rollgate](https://rollgate.io) - EUにホストされた機能フラグ管理サービス。スケジュールリリース、即時ロールバック、A/Bテストをサポート。12のSDKが含まれる。月間APIリクエスト50万件まで無料。機能フラグは無制限。チームメンバーは3名まで。クレジットカードは不要。
  * [Hypertune](https://www.hypertune.com) - 型安全な機能フラグ、A/Bテスト、分析、アプリ設定、Gitスタイルのバージョン管理、同期型、メモリ内、ローカル評価。5名までのチームメンバーまで無料。機能フラグとA/Bテストは無制限。
  * [Statsig](https://www.statsig.com) - 機能管理、A/Bテスト、分析などに最適なプラットフォーム。豊富な無料プランは、席、機能フラグ、実験、動的設定をすべて無制限に提供し、月間100万イベントまでサポート。
  * [Toggled.dev](https://www.toggled.dev) - 企業向け、スケーラブルなマルチリージョン機能トグル管理プラットフォーム。無料プランは10個の機能フラグ、2環境まで。リクエストは無制限。SDK、分析ダッシュボード、リリースカレンダー、Slack通知、その他すべての機能が無制限無料プランに含まれる。


**[⬆️ Back to Top](#table-of-contents)**

## Font

  * [Befonts](https://befonts.com/) - 個人または商業用途に使える複数の独自フォントを提供。
  * [Bunny](https://fonts.bunny.net) - プライバシー志向のGoogleフォント
  * [dafont](https://www.dafont.com/) - このサイトに掲載されているフォントは、作者の財産であり、無料ソフト、シェアウェア、デモ版、または公有領域のものである。
  * [Everything Fonts](https://everythingfonts.com/) - 複数のツールを提供；@font-face、単位変換、フォントヒンター、フォント提出者。
  * [Font of web](https://fontofweb.com/) - ウェブサイトに使われているすべてのフォントを特定し、その使用方法を把握。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 商業用途に許可された無料フォント。手選別されたフォントを、使いやすいフォーマットで提供。
  * [FontGet](https://www.fontget.com/) - ダウンロード可能なフォントが豊富に用意されており、タグで整然と並べられている。
  * [fonts.xz.style](https://fonts.xz.style/) - CSSを使ってウェブサイトにフォントファミリーを配信するための無料かつオープンソースサービス。
  * [Fontsensei](https://fontsensei.com/) - ユーザーがタグ付けしたオープンソースGoogleフォント。CJK（中国、日本、韓国）フォントタグを含む。
  * [Fontshare](https://www.fontshare.com/) - 無料フォントサービス。プロフェッショナルな品質のフォントを豊富に収集。個人および商業用途で100％無料。
  * [Google Fonts](https://fonts.google.com/) - 多くの無料フォントは、ダウンロードまたはGoogleのCDNへのリンクで、ウェブサイトに簡単にインストールできる。

**[⬆️ Back to Top](#table-of-contents)**

## Forms

  * [FabForm](https://fabform.io/) - 知能ある開発者向けのバックエンドプラットフォーム。無料プランは月間250件のフォーム提出まで。フレンドリーで現代的なGUI。Google Sheets、Airtable、Slack、メールなどに統合可能。
  * [Feathery](https://feathery.io) - 強力で開発者向けのフォームビルダー。サインアップ・ログイン、ユーザーのオンボーディング、支払いフロー、複雑な金融アプリケーションなどを作成可能。無料プランは月間250件の提出まで、5つのアクティブフォームまで。
  * [feedback.fish](https://feedback.fish/) - 無料プランでは合計25件のフィードバック提出を収集可能。ReactおよびVueコンポーネントとの統合が容易。
  * [FluidForms](https://fluidforms.ai/) - フォームビルダーとバックエンド。AIによる論理を搭載。無料プランには月間100件の応答、無制限のフォーム（AI生成フォームを含む）、Webhook、埋め込みが含まれます。
  * [Form.taxi](https://form.taxi/) - HTMLフォームの提出用エンドポイント。通知、スパムブロッカー、GDPR対応データ処理を備えています。基本的な使用には無料プランが提供されます。
  * [Formcarry.com](https://formcarry.com) - HTTP POSTフォームエンドポイント。無料プランでは月間100件の提出が許可されます。
  * [Formester.com](https://formester.com) - ウェブサイトに独自の見た目を持つフォームを共有・埋め込みできます。作成可能なフォームの数やプランによって制限される機能はありません。月間100件まで無料で応答を受け付けます。
  * [Forminit](https://forminit.com/) - 開発者向けヘッドレスフォームバックエンド。無料プランでは月間100件のフォーム提出（ファイルアップロード、サーバー側フィールド検証、メール通知、スパム保護、Zapier）が許可されます。
  * [FormKeep.com](https://www.formkeep.com/) - 無制限のフォーム、月間50件の提出、スパム保護、メール通知、ドラッグ＆ドロップデザイナー（HTMLをエクスポート可能）。さらに、カスタムフィールドルール、チーム、Google Sheets、Slack、ActiveCampaign、Zapierとの統合が可能です。
  * [Form Plume](https://formplume.com) - Form PlumeはHTMLおよびJavaScriptフォーム向けのフォームバックエンドです。1つのエンドポイントでスパムフィルタ、メール通知、ファイルアップロード、Webhook、そしてクリーンなインボックスが提供されます。月間500件まで無料です。
  * [formlets.com](https://formlets.com/) - オンラインフォーム、無制限のシングルページフォーム／月、月間100件の提出、メール通知。
  * [forms.app](https://forms.app/) - 条件付き論理、自動スコア計算、AIなどの強力な機能を備えたオンラインフォームを作成。無料プランでは最大100件の応答を収集でき、ウェブサイトに埋め込み、またはリンクで使用できます。
  * [formspark.io](https://formspark.io/) -  フォームからメールへ送信サービス。無料プランでは無制限のフォーム、月間250件の提出、カスタマーサポートチームによるサポートが可能です。
  * [Formspree.io](https://formspree.io/) - HTTP POSTリクエストでメールを送信。無料プランでは1フォームあたり月間50件まで制限されます。
  * [Formsubmit.co](https://formsubmit.co/) - HTMLフォーム向けの簡単なエンドポイント。無料で利用可能。登録不要です。
  * [Formware.io](https://formware.io/) - コードを書かなくても、数秒で完全にレスポンス性を持ち、魅力的なフォームを作成できます。無制限の応答を無料で収集できます！
  * [HeroTofu.com](https://herotofu.com/) - ボット検出と暗号化アーカイブを備えたフォームバックエンド。提出内容をUIからメール、Slack、Zapierへ転送。独自のフロントエンドを使用可能。サーバーコードは不要です。無料プランでは無制限のフォームと月間100件の提出が可能です。
  * [HeyForm.net](https://heyform.net/) - ドラッグ＆ドロップによるオンラインフォームビルダー。無料プランでは無制限のフォームを作成し、無制限の提出を収集できます。事前作成テンプレート、スパム防止、100MBのファイルストレージが備わっています。
  * [Jotform.com](https://jotform.com/) - 無料でオンラインフォームを作成し、提出を収集、支払いを受け入れ、ワークフローを自動化し、組み込みの電子署名で文書を署名できます。無料プランには5フォーム、月間100件の提出、10件の電子署名文書、10件の支払い提出が含まれます。
  * [Kwes.io](https://kwes.io/) - 機能豊かなフォームエンドポイント。静的サイトとの組み合わせが非常に効果的です。無料プランでは1サイト、月間50件の提出までが含まれます。
  * [Pageclip](https://pageclip.co/) - 無料プランでは1サイト、1フォーム、月間1,000件の提出が可能です。
  * [SimplePDF.eu](https://simplepdf.eu/embed) - ウェブサイトにPDFエディタを埋め込み、任意のPDFを埋め込みフォームに変換できます。無料プランでは無制限のPDFが利用可能で、1PDFあたり3件まで提出可能です。
  * [smartforms.dev](https://smartforms.dev/) - ウェブサイト向け強力で使いやすいフォームバックエンド。永遠無料プランでは月間50件の提出、250MBのファイルストレージ、Zapier統合、CSV/JSONエクスポート、カスタムリダイレクト、カスタム応答ページ、TelegramおよびSlackボット、メール通知（1件）が提供されます。
  * [staticforms.xyz](https://www.staticforms.xyz/) - HTMLフォームをサーバー側コードなしで簡単に統合できます。ユーザーがフォームを提出した後、フォームの内容を含むメールが登録されたアドレスに送信されます。
  * [Survicate](https://survicate.com/) - すべてのソースからのフィードバックを取得し、フォローアップ調査を1つのツールで送信できます。AIでフィードバックを自動分析し、洞察を抽出します。無料のメール、ウェブサイト、製品内、モバイル調査、AI調査作成ツール、月間25件の反応を提供します。
  * [Tally.so](https://tally.so/) - すべての機能の99％が無料です。無料プランでは、無制限のフォーム、無制限の提出、メール通知、フォームロジック、支払いの収集、ファイルアップロード、カスタムありがとうページなど、多数の機能が利用できます。
  * [Typeform.com](https://www.typeform.com/) - ウェブサイトに美しく設計されたフォームを表示できます。無料プランでは、1フォームあたり10フィールドまで、月間100件の反応までです。
  * [Vidhook](https://vidhook.io/) - 高反応率を実現する魅力的な調査でフィードバックを収集できます。無料プランには1つのアクティブ調査、調査あたり25件の反応、カスタマイズ可能なテンプレートが含まれます。
  * [WaiverStevie.com](https://waiverstevie.com) - REST APIを備えた電子署名プラットフォーム。ウェブホークで通知を受け取れます。無料プランでは署名された文書に水印が表示されますが、無制限の封筒と署名を許可します。
  * [Web3Forms](https://web3forms.com) - バックエンドコードを書かずに静的・JAMStackウェブサイトにコンタクトフォームを設置できます。無料プランでは無制限のフォーム、無制限のドメイン、月間250件の提出までです。
  * [Wufoo](https://www.wufoo.com/) - ウェブサイト上で使用できる簡易フォーム。無料プランでは月間100件の提出までです。
  * [FormNX](https://FormNX.com/) - 無制限のフォームと無制限の提出を無料で利用できます。プロフェッショナルに設計された1000以上のフォームテンプレートを使用したり、ゼロからフォームを作成できます。メール通知、フォームロジック、支払いの収集、ファイルアップロード、カスタムありがとうページなど、多数の機能が利用できます。

**[⬆️ Back to Top](#table-of-contents)**

## Generative AI

  * [Arize AX](https://arize.com) - AIエンジニアリングプラットフォームでAIエンジニアやPMがAIアプリケーションやエージェントを評価・観察できます。内蔵されたAlyxエージェントを活用。無料製品には25,000スパンと月間1GBのインゴージング量が含まれます。
  * [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) - AIによるオーディオ強化SaaS。ノイズやエコーを除去しつつ、自然な声の明瞭さを維持します。完全無料：無制限のワンクリック強化、ログイン不要、MP3/WAV/FLAC対応
  * [Braintrust](https://www.braintrustdata.com/) - Gen AI向けのEvals、プロンプトプレイスト、データ管理。無料プランでは週間1,000件のプライベートEvalsまで提供します。
  * [Clair](https://askclair.ai/) - 臨床AIリファレンス。学生はプロフェッショナルツールセットに無料アクセスできます。ツールセットにはOpen Search、臨床要約、医療レビュー、薬品相互作用、ICD-10コード、およびステークホルダーが含まれます。さらに、プロフェッショナルツールセットの無料体験が提供されます。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 開発および生産ライフサイクル全体でLLMアプリケーションを評価、テスト、デプロイできます。 [#opensource](https://github.com/comet-ml/opik/)
  * [Future AGI](https://futureagi.com) - LLMおよびAIエージェントアプリの評価、観察、改善を行うオープンソースプラットフォーム。トレース、評価、シミュレーション、ガードレールを備えています。無料プランには50GBのストレージ、2K評価クレジット、月間10万AIゲートウェイリクエスト、100万トークンのテキストエージェントシミュレーション、60分のボイスシミュレーション、無制限のプロジェクト/シート、$0プラットフォームコストでのBYOK LLM-as-judgeが含まれます。 [#opensource](https://github.com/future-agi/future-agi)
  * [Gonka Broker](https://gonkabroker.com/) - オープンソースモデルをデシデーライズされたGonka.ai GPUネットワークで提供するOpenAI互換API。月間100万以上の無料トークン。多くのAIツールとの簡単な統合が可能です。
  * [Keywords AI](https://keywordsai.co) - 最も優れたLLM監視プラットフォーム。200以上のLLMを2行のコードで呼び出す1つのフォーマット。月間10,000件の無料リクエストとプラットフォーム機能の無料提供！
  * [Langfuse](https://langfuse.com/) - オープンソースLLMエンジニアリングプラットフォームで、チームがLLMアプリケーションの共同デバッグ、分析、イテレーションを支援します。無料プランには月間50,000の観測値とすべてのプラットフォーム機能が含まれます。 [#opensource](https://github.com/langfuse/langfuse)
  * [LangWatch](https://langwatch.ai) - AIチームがLLMアプリケーションの信頼性、コスト効率、パフォーマンスを測定・監視・最適化できるLLMOpsプラットフォーム。強力なDSPyコンポーネントにより、エンジニアと非技術チームの間のスムーズな協力が可能になり、GenAI製品のチューニングとプロダクション化を支援します。無料プランにはすべてのプラットフォーム機能、月間1,000のトレース、1つのワークフローDSPy最適化が含まれます。 [#opensource](https://github.com/langwatch/langwatch)
  * [Latitude](https://latitude.so) - オープンソース（MIT）LLM可視化および評価プラットフォーム。生産環境におけるAIエージェントのトレース、監視、評価を実施します。無料スタータープランには月間20,000クレジット、30日間のデータ保存、無制限のシートが含まれます。 [#opensource](https://github.com/latitude-dev/latitude-llm)
  * [Lumenfall.ai](https://lumenfall.ai/) - AIメディアゲートウェイ。OpenAI互換APIを介して、主要な画像生成モデルに統一されたアクセスを提供。プラットフォーム自体は無料で、マージンもなし、サブスクリプション料もなし。ほとんどのモデルの推論コストは提供元の価格で請求されるが、FLUX.1 [schnell] FP8は登録ユーザーに対して永遠に無料で無制限に使用可能。組み込みのフェイルオーバーと提供元の耐性が備わっている。
  * [Maxim](https://www.getmaxim.ai) - LLMの評価と可視化プラットフォーム。アグエントシミュレーションとプロンプトプレイグランドを提供。無料プランは月間10,000ログを提供し、プロンプトプレイグランド、シミュレーション、評価にBYOK（Bring Your Own Key）を適用可能。
  * [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.aiは、Azure OpenAI、DeepSeek、Google Geminiモデルに対して100,000語の無料提供を実施しており、ユーザーがコード生成、深層研究、画像生成といった強力なツールにアクセスできるようにしている。
  * [OpenRouter](https://openrouter.ai/models?q=free) - さまざまな無料AIモデルを提供。DeepSeek R1、V3、Llama、Moonshot AIが含まれる。これらのモデルは自然言語処理に優れ、多様な開発ニーズに適している。ただし、これらのモデルは無料で利用可能であるものの、レート制限が適用される。さらに、OpenRouterはクラウド、OpenAI、Grok、Gemini、Novaなどのより高度な要件に適した有料モデルを提供している。
  * [Pollinations.AI](https://pollinations.ai/) - 使いやすい無料画像生成AI。無料APIが利用可能。サインアップやAPIキーの登録は不要であり、ウェブサイトやワークフローへの統合に複数のオプションがある。 [#opensource](https://github.com/pollinations/pollinations)
  * [Portkey](https://portkey.ai/) - Gen AIアプリ向けのコントロールパネル。可視化ツールとAIゲートウェイを備えている。月間10,000件までのリクエストを無料で送信・ログ記録可能。
  * [ReportGPT](https://ReportGPT.app) - AIを活用した執筆アシスタント。プラットフォーム全体が無料であり、ユーザーが自らのAPIキーを提供する限り利用可能。
  * [telemetry.dev](https://telemetry.dev) - OpenTelemetryに基づいたAI/LLMアプリの可視化。トークン、コスト、遅延、エラーを含めてモデル呼び出しとツールステップをトレース。任意の言語からHTTPでOTLPを送信可能またはTypeScriptのSDKを使用可能。無料プランは月間10,000スパン、7日間の保存、1プロジェクト、2席を提供し、クレジットカードの必要なし。
  * [Transcript LOL](https://transcript.lol/) - AIを用いて音声や動画をテキストに変換。LLMを用いて要約やその他の洞察を生成。無料プランは1日あたり2回のトランスクリプションを提供。ファイルのアップロード、音声ノートの録音、YouTube、Instagramなどからのリンクの使用が可能。無料版はWhatsApp、Telegram、Google Drive、Dropbox、Box、OneDriveなどのクラウドストレージからファイルを直接インポートできる。APIキーは不要。登録後すぐに使用可能。また、モバイル、デスクトップ、Chromebook向けアプリも提供。
  * [Zenable](https://zenable.io) - Cursor、Windsurf、Copilotなどのツールからの出力に対して、企業の品質およびコンプライアンス基準を満たすように、ポリシーとしてコードを用いたガードレールで即時自動修正を行う。無料プランは1日100回のMCPサーバーへのツール呼び出しと、GitHubアプリによる1日25回の自動プルリクエストレビューを提供。

**[⬆️ Back to Top](#table-of-contents)**

## CDN and Protection

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) - bootstrap、bootswatchおよびfontawesome.io向けのCDN
  * [CacheFly](https://portal.cachefly.com/signup/free2023) - 月間最大5TBの無料CDNトラフィック、19コアのポップアップ、1ドメイン、ユニバーサルSSLを提供
  * [cdnjs.com](https://cdnjs.com/) - シンプル。高速。信頼性が高い。コンテンツ配信の最高峰。cdnjsは11％以上のウェブサイトが信頼している無料かつオープンソースのCDNサービスで、Cloudflareによって運営されている。
  * [developers.google.com](https://developers.google.com/speed/libraries/) - Googleホストされたライブラリは、最も人気のあるオープンソースJavaScriptライブラリのコンテンツ配信ネットワーク
  * [Gcore](https://gcorelabs.com/) - グローバルコンテンツ配信ネットワーク。月間1TBおよび100万リクエストが無料で、無料DNSホスティングも提供
  * [jsdelivr.com](https://www.jsdelivr.com/) - 無料で高速かつ信頼性の高いオープンソースCDN。npm、GitHub、WordPress、Denoなどに対応。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) - Microsoft Ajax CDNは、jQueryなどの人気のある第三者JavaScriptライブラリを提供し、Webアプリケーションに簡単に追加できるようにしている
  * [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) - 無料DDoS保護
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) - 無料DDoS保護およびSSL証明書
  * [PromoProxy](https://promoproxy.net/) - 無料クラウドセキュリティウェブゲートウェイ。無料プランは最大5ユーザーおよび1日あたり1GBを提供
  * [raw.githack.com](https://raw.githack.com/) - **rawgit.com** の現代的な代替品。Cloudflare を使ってファイルをホスティングするだけのサービス
  * [Skypack](https://www.skypack.dev/) - 100％ネイティブな ES モジュール JavaScript CDN。月間100万リクエストまで無料。
  * [statically.io](https://statically.io/) - GitHub、GitLab、Bitbucket のリポジトリ、WordPress関連のアセット、画像用のCDN
  * [Stellate](https://stellate.co/) - Stellateは、GraphQL API用の高速で信頼性の高いCDNであり、2サービス無料。
  * [toranproxy.com](https://toranproxy.com/) - PackagistおよびGitHubのプロキシ。CDが決して失敗しない。個人利用向け無料、1人の開発者、サポートなし
  * [UNPKG](https://unpkg.com/) - npm上にあるすべてのコンテンツ用のCDN
  * [weserv](https://images.weserv.nl/) - 画像キャッシュとリサイズサービス。世界中のキャッシュで画像を即時操作可能。

**[⬆️ Back to Top](#table-of-contents)**

## PaaS

  * [ampt.dev](https://getampt.com/) - Amptは、AWS上でJavaScriptアプリを構築・デプロイ・スケーリングできるサービス。無料プレビュープランには、時間単位で500回、日単位で2,500回、月単位で50,000回の呼び出しを含む。カスタムドメインは有料プランのみで利用可能。
  * [anvil.works](https://anvil.works) - Pythonだけを使ってWebアプリ開発。無料プランにはアプリ数無制限、タイムアウト30秒。
  * [Apply.build](https://apply.build/) - 0.5 vCPU / 512 MiB RAM、ヨーロッパサーバー、自動ファイアウォール、リアルタイムパフォーマンスメトリクスを備えた無料プランでGitHubアプリを構築・デプロイ。Node.js、Python、Go、Java、静的サイト、マイクロサービスなど、さまざまな環境で動作。
  * [appwrite](https://appwrite.io) - プロジェクト数無制限（プロジェクトの停止なし）、WebSocket対応、認証サービスを提供。無料プランでは1データベース、3バケット、5関数まで。
  * [Clever Cloud](https://clever.cloud) - ヨーロッパのPaaSで自動デプロイ、自動スケーリング、管理されたデータベース、Gitベースのワークフローを提供。登録時に€20の無料クレジット、限定されたDEVプラン（無料MySQLおよびPostgreSQLデータベース）、HeptapodやFS Bucketsなどのサービスの無料割引を含む。
  * [Choreo](https://wso2.com/choreo/) - AIネイティブな内部開発者プラットフォームとしてのサービス。無料プランには最大5コンポーネントと月額100ドルのクレジットが含まれる。
  * [codenameone.com](https://www.codenameone.com/) - Java/Kotlin開発者向けのオープンソース、マルチプラットフォーム、モバイルアプリ開発ツールチェーン。商業利用無料、プロジェクト数無制限。
  * [Cohesivity](https://cohesivity.ai) - AIエージェント向けに設計されたヘッドレスバックエンドとサービス。ホスティング、データベース、ストレージ、LLM、第三者APIを提供。エージェント登録。無料プランには10プロジェクト、10万エッジリクエスト、10GBオブジェクトストレージ、100メール、AIおよび検索用の月額5ドルクレジットが含まれる。
  * [Daestro](https://daestro.com) - クラウドプロバイダーおよびオンプレミスで計算ジョブを実行。無料プランには最大10の並列ジョブ実行、2回の計算スパーン、セルフホスト計算、1つのクラウドプロバイダー、1つのコンテナレジストリ、1つのクロントークンが含まれる。
  * [Deno Deploy](https://deno.com/deploy) - 世界中でエッジにJavaScript、TypeScript、WebAssemblyを実行する分散システム。無料プランには日間10万リクエスト、月間100GiBデータ転送が含まれる。
  * [domcloud.co](https://domcloud.co) - GitHub、SSH、MariaDB/Postgresデータベースを備えたCI/CDを提供するLinuxホスティングサービス。無料版には1GBストレージと1GBネットワーク/月の制限があり、無料ドメインに限定される。
  * [encore.dev](https://encore.dev/) - 静的解析を用いたバックエンドフレームワーク。自動インフラ、ボイラープレートなしコードなどを提供。ハブプロジェクト用の無料クラウドホスティングを含む。
  * [flightcontrol.dev](https://flightcontrol.dev/) - GitHubリポジトリのGitプッシュスタイルのワークフローで、あなたのAWSアカウントにウェブサービス、データベースなどをデプロイ。1人の開発者を有する個人GitHubリポジトリユーザー向けの無料プラン。AWSコストはAWSで請求されますが、クレジットやAWS無料プランを利用可能です。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir は、常に稼働する無料インスタンスと、Elixir/Phoenix アプリ向けに制限された 2 つの接続、10,000 行、バックアップなしの無料トiers の PostgreSQL データベースを提供します
  * [Northflank](https://northflank.com) - 強力な UI、API および CLI を使って、マイクロサービス、ジョブ、管理されたデータベースを構築・デプロイできます。バージョン管理や外部 Docker レジストリからコンテナをスムーズにスケーリングできます。無料トiers には、2 つのサービス、2 つのクロントasks および 1 つのデータベースが含まれます
  * [Ownkube](https://ownkube.io) - あなたの AWS アカウントに無料で k3s のシングルノードを提供。git push でアプリ、データベース、ワーカーを実行できます。AWS クレジットを最適に使用できます
  * [pipedream.com](https://pipedream.com) - 開発者向けの統合プラットフォーム。任意のトリガーに基づいて、任意のワークフローを構築できます。ワークフローは実行できるコードです [for free](https://docs.pipedream.com/pricing/)。サーバーやクラウドリソースの管理は不要です
  * [pythonanywhere.com](https://www.pythonanywhere.com/) - クラウド上の Python アプリのホスティング。初心者向けアカウントは無料で、your-username.pythonanywhere.com ドメインに 1 つの Python ワークアプリケーション、512MB のプライベートファイルストレージ、1 つの MySQL データベースが提供されます
  * [Runsite](https://runsite.app/) - ドイツに設置されたヨーロッパの PaaS。GitHub からの自動デプロイが可能で、ウェブサービスや静的サイト（1 ワーク 0.1 vCPU/256 MB 無料）、管理された PostgreSQL および Valkey(Redis)（30 日無料）、トランザクショナルメール（月間 3,000 件無料）、S3 互換ストレージ（5 GB 無料）が提供されます。ウェブサイトのスタートに必要なすべての機能が備わっています
  * [Val Town](https://www.val.town) - スクリプト、HTTP エンドポイント、クロントasks に使える協働型 TypeScript/JavaScript サーバレスプラットフォーム。無料プランには、無制限の公開値、15 分間のクロントasks インターバル、1 分のウォールクロック時間ごとに実行、3 日間のログ保存が含まれます。無料プランではカスタムドメインは提供されません
  * [WunderGraph](https://cloud.wundergraph.com) - 現代的な API を迅速に構築・配布・管理できるオープンソースプラットフォーム。組み込みの CI/CD、GitHub インテグレーション、自動 HTTPS が提供されます。最大 3 プロジェクト、1GB のエグリッジ、月間 300 分のビルド時間までが、[free plan](https://wundergraph.com/pricing) で提供されます
  * [YepCode](https://yepcode.io) - サーバレス環境で API とサービスを接続する一括プラットフォーム。NoCode ツールの柔軟性とメリットを提供しつつ、プログラミング言語の力を活かしたプラットフォームです。無料トiers には [1.000 yeps](https://yepcode.io/pricing/) が含まれます

**[⬆️ Back to Top](#table-of-contents)**

## BaaS

  * [Activepieces](https://www.activepieces.com) - アプリのバックエンドに複数のアプリを接続する自動化フローを構築できます。たとえば、アプリ内でイベントが発生したときに、Slack にメッセージを送信または Google スプレッドシートに行を追加できます。月間 5,000 件までのタスクが無料です
  * [back4app.com](https://www.back4app.com) - Back4App は、Parse プラットフォームに基づいた使いやすい、柔軟でスケーラブルなバックエンドです
  * [backendless.com](https://backendless.com/) - モバイルおよびウェブの Baas。1GB のファイルストレージが無料で、月間 50,000 回のプッシュ通知、テーブル内の 1,000 個のデータオブジェクトが提供されます
  * [connectycube.com](https://connectycube.com) - 無制限のチャットメッセージ、P2P 音声・動画通話、ファイル添付、プッシュ通知。アプリユーザーが 1,000 人までなら無料です
  * [convex.dev](https://convex.dev/) - 反応型バックエンドとしてのサービス。データ（関係を持つドキュメントおよびシリアル化された ACID トランザクション）のホスティング、サーバレス関数、WebSockets を使って複数のクライアントに更新をストリーミングできます。小規模プロジェクト向けに無料。最大 1M レコード、月間 5M 回の関数呼び出しまでです
  * [ETLR](https://etlr.io) - YAML を使って自動化スクリプトを定義・バージョン管理・デプロイできます。ドラッグアンドドロップツールの代替として開発者向けに設計されています。スケジュールタスク、AI エージェント、インフラモニタリングに使用可能です。無料トiers には月間 100 クレジットが含まれます
  * [Flutter Flow](https://flutterflow.io) - コードを1行も書かずに Flutter アプリの UI を構築できます。また、Firebase インテグレーションも提供されています。無料プランには UI ビルダーおよび無料テンプレートへのフルアクセスが含まれます
  * [getstream.io](https://getstream.io/) - スケーラブルなインアプリチャット、メッセージ、動画および音声、フィードを数時間で構築できます。週にかかる作業を数時間で完了できます
  * [IFTTT](https://ifttt.com) - お気に入りのアプリやデバイスを自動化できます。無料 2 つの Applets
  * [Integrately](https://integrately.com) - 面倒なタスクを1クリックで自動化できます。無料 100 タスク、15 分
  * [LeanCloud](https://leancloud.app/) - モバイルバックエンド。1GB のデータストレージ、256MB インスタンス、日間 3,000 回の API リクエスト、日間 10,000 回のプッシュ通知が無料です。（API は Parse プラットフォームと非常に似ています）
  * [nhost.io](https://nhost.io) - ウェブおよびモバイルアプリ向けのサーバーレスバックエンド。無料プランにはPostgreSQL、GraphQL（Hasura）、認証、ストレージ、サーバーレス関数が含まれます。
  * [onesignal.com](https://onesignal.com/) - 無制限の無料プッシュ通知。月間10,000件のメール送信、無制限の連絡先、自動暖房（Auto Warm Up）へのアクセス。
  * [paraio.com](https://paraio.com) - 柔軟な認証、全文検索、キャッシュを備えたバックエンドサービスAPI。1アプリ分の無料プラン、1GBのアプリデータ。
  * [pubnub.com](https://www.pubnub.com/) - 月間100万件まで無料のプッシュ通知、100台のアクティブデバイスまで。
  * [pusher.com](https://pusher.com/beams) - 月間2,000人のアクティブユーザー向けに無料のプッシュ通知。iOSおよびAndroidデバイス向けの1つのAPI。
  * [simperium.com](https://simperium.com/) - データをどこでも瞬時に自動で移動。マルチプラットフォーム対応、構造化データの無制限送信とストレージ、月間最大2,500ユーザー。
  * [snill.ai](https://snill.ai) - AIノコードプラットフォーム。自然言語で記述した内容を、関係データベース、ダッシュボード、ワークフロー、REST API、Webhookを含む完全なビジネスシステムに変換。シングルオペレーター向けの無料プランには2アプリ、1,000レコード、1日10回のAIリクエストが含まれます。
  * [Supabase](https://supabase.com) - オープンソースのFirebaseの代替としてバックエンドを構築。無料プランには認証、リアルタイムデータベース、オブジェクトストレージが含まれます。
  * [tyk.io](https://tyk.io/) - 認証、クォータ、モニタリング、分析を備えたAPI管理。無料クラウドサービス。
  * [zapier.com](https://zapier.com/) - 使っているアプリを接続してタスクを自動化。15分間ごとに5つのZAP、月間100タスク、更新時間、5つのアクティブな自動化、Webhook。


**[⬆️ Back to Top](#table-of-contents)**

## Low-code Platform

  * [appsmith](https://www.appsmith.com/) - 低コードプロジェクトで管理画面、内部ツール、ダッシュボードを構築。15以上のデータベースおよび任意のAPIと統合。
  * [BudiBase](https://budibase.com/) - Budibaseは、PostgreSQL、MySQL、MSSQL、MongoDB、REST API、Docker、K8sをサポートするオープンソースの低コードプラットフォームで、数分で内部アプリを構築できます。
  * [Clappia](https://www.clappia.com) - カスタマイズ可能なモバイルおよびウェブアプリを用いてビジネスプロセスアプリケーションを構築するための低コードプラットフォーム。ドラッグ＆ドロップインターフェースを備え、オフライン対応、リアルタイム位置追跡、各種サードパーティサービスとの統合を提供。
  * [lil'bots](https://www.lilbots.io/) - OpenAI、Anthropic、Firecrawlなど、組み込みの無料APIを活用してオンラインでスクリプトを書く・実行。AIエージェントや内部ツールの構築やチーム内での共有に最適。無料プランにはAPIへの完全アクセス、AIコーディングアシスタント、月間10,000回の実行クレジットが含まれます。
  * [manubes](https://www.manubes.com) - 産業生産管理に特化した強力なノコードクラウドプラットフォーム。1ユーザー向け無料プラン、月間100万件のワークフロー活動（[also available in german](https://www.manubes.de)）。
  * [Mendix](https://www.mendix.com/) - 企業向けの迅速アプリ開発、無制限アクセス可能なサンドボックス環境、全ユーザー対応、アプリごとに0.5GBのストレージと1GBのRAM。また、無料プランではStudioおよびStudio Pro IDEが利用可能です。
  * [outsystems.com](https://www.outsystems.com/) - オンプレミスまたはクラウド環境向けの企業ウェブ開発PaaS。無料の「個人環境」は、無制限のコードと最大1GBのデータベースを提供。
  * [ReTool](https://retool.com/) - 内部アプリを構築するための低コードプラットフォーム。Retoolは非常にカスタマイズ可能。JavaScriptおよびAPIで書けるものなら、Retoolで作成可能です。無料プランでは月間5ユーザーまで、無制限のアプリおよびAPI接続が可能です。
  * [ToolJet](https://www.tooljet.com/) - データベース、クラウドストレージ、GraphQL、APIエンドポイント、Airtableなどに接続し、ドラッグ＆ドロップでアプリを構築するための拡張可能な低コードフレームワーク。
  * [UI Bakery](https://uibakery.io) - カスタムウェブアプリの迅速構築を可能にする低コードプラットフォーム。JavaScript、Python、SQLを用いてUIをドラッグ＆ドロップで構築できる高カスタマイズ性を提供。クラウドおよびセルフホストソリューションが利用可能。月間5ユーザーまで無料。

**[⬆️ Back to Top](#table-of-contents)**

## Web Hosting

  * [Alwaysdata](https://www.alwaysdata.com/) - 1GB無料のウェブホスティングを提供。MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rustに対応。カスタムウェブサーバーをサポートし、FTP、WebDAV、SSHでアクセス可能。メールボックス、メールリスト、アプリインストーラーを標準で提供。無料プランにはカスタムドメインは含まれない。
  * [Awardspace.com](https://www.awardspace.com) - 無料ウェブホスティング＋無料の短いドメイン、PHP、MySQL、アプリインストーラー、メール送信、広告なし。
  * [boomurl](https://boomurl.com) - HTML/マーカード/画像/PDFまたは全体のフォルダを静的サイトとして、アカウントなしで即時HTTPSURLに公開。無料プランには小さなバナーが表示される。カスタムドメインに対応。
  * [Bubble](https://bubble.io/) - コードなしでウェブおよびモバイルアプリをビジュアルプログラミングで構築。Bubbleブランドで無料提供。
  * [dAppling Network](https://www.dappling.network/) - Web3フロントエンド向けの分散型ウェブホスティングプラットフォーム。稼働時間とセキュリティを向上させ、ユーザーに追加のアクセスポイントを提供。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - App Platformのスタータープランで、3つの静的サイトを無料で構築・デプロイできる。
  * [FreeFlarum](https://freeflarum.com/) - コミュニティが支援する無料Flarumホスティング（最大250ユーザーまで）。フッターの水印を消すために寄付が必要。
  * [Harvis.dev](https://harvis.dev) - CLI（）を用いた静的サイトホスティング。設定ファイルやビルドステップは不要。無料サブドメイン、無料フォーム投稿コレクション、GitHub Actions統合、CloudFlare CDN、無料SSLを提供。 `npx harvis`
  * [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/) - 最大100の静的サイトを無料でデプロイ可能。カスタムドメインとSSL、月間100GBの帯域、260以上のCloudflare CDNリージョンを提供。
  * * [Koyeb](https://www.koyeb.com/) - サーバレスプラットフォーム。無料のHobbyプランにより、月間550時間の無料コンピュート時間（無料プランは512MB RAM）、1つの無料PostgreSQLデータベース、カスタムドメインSSLを提供。
  * [MDB GO](https://mdbgo.com/) - 1プロジェクト用の無料ホスティング。2週間のコンテナTTL、各プロジェクト500MB RAM、SFTPで1GBディスクスペース。
  * [Mirin](https://mirin.com) - React、Vue、またはSvelteで開発されたコンポーネントサイト向けのウェブプラットフォーム。ビジュアル編集、フォーム、分析、グローバルCDNホスティングを提供。無料プランには無制限ページと投稿が含まれる。
  * [Neocities](https://neocities.org) - 静的サイト、1GB無料ストレージ、200GB帯域。
  * [Netlify](https://www.netlify.com/) - 月間300クレジット（30GB帯域相当）で静的サイトやアプリのビルド、デプロイ、ホスティングが無料。
  * [PandaStack](https://www.pandastack.io/) - 開発者向けエコシステム。静的ウェブホスティング、コンテナベースホスティング、WordPressなど、多数の管理アプリが数クリックで利用可能。1つの無料ウェブホスティング（静的またはコンテナベース）と1つの無料データベース（100GB帯域、月間300ビルド分）を提供。
  * [pantheon.io](https://pantheon.io/) - DrupalおよびWordPressホスティング、自動化されたDevOps、スケーラブルインフラ。開発者およびアグリーティー向け無料。カスタムドメインは含まれない。
  * [Qoddi](https://qoddi.com) - Herokuに類するPaaSサービス。開発者中心のアプローチと包括的な機能を提供。静的アセット、ステージング、開発アプリの無料プランを提供。
  * [readthedocs.org](https://readthedocs.org/) - バージョン管理、PDF生成など、無料ドキュメントホスティング。
  * [render.com](https://render.com) - 統合クラウドでアプリとサイトを構築・実行。無料SSL、グローバルCDN、プライベートネットワーク、Gitからの自動デプロイ、ウェブサービス、データベース、静的ウェブページの完全無料プランを提供。
  * [Revdoku](https://revdoku.com/) — ChatGPT、Claude、CodexなどのAIエージェントからファイル、レポート、カスタムマイクロサイトを公開またはパスワード保護されたウェブサイトとして発行可能。無料プラン：2GBストレージ、2つのライブサイト/アプリ、1つのデータベース（25MB）、3つのAI接続、1,000ファイル/バケット（100MB/ファイル）、基本的な分析。
  * [ShipStatic](https://shipstatic.com) - 静的ホスティングでAIエージェントが自ら動く: `npx @shipstatic/ship ./dist` そしてサイトはライブで、インストール不要、サインアップ不要、リポジトリ不要、ビルド不要。MCP、SDKおよびAPIも提供。無料アカウントはサイトを永続的に保持し、自動HTTPS、グローバルエッジ配信、無制限帯域幅を提供；カスタムドメインは有料。
  * [SourceForge](https://sourceforge.net/) - オープンソースソフトウェアの検索・作成・公開を無料で行う
  * [surge.sh](https://surge.sh/) - フロントエンド開発者向けの静的ウェブ配信。無制限のサイト数とカスタムドメイン対応
  * [tilda.cc](https://tilda.cc/) - 1サイト、50ページ、50MBストレージ、170以上の可用ブロックの中から主な事前定義されたブロックのみ、フォントやアイコン、カスタムドメインなし
  * [Vercel](https://vercel.com/) - SSLを無料で、グローバルCDN、そして各回の `git push` ごとにユニークなプレビューURLを提供して、Webアプリの構築・デプロイ・ホスティングを行います。Next.jsやその他の静的サイトジェネレーターに最適。
  * [Versoly](https://versoly.com/) - SaaS向けウェブサイトビルダー—無制限のウェブサイト、70以上のブロック、5つのテンプレート、カスタムCSS、アイコン、SEO、フォーム。カスタムドメインなし。
* [Stormkit](https://www.stormkit.io) - 自前ホスティング可能なVercelの代替品。現代的なフロントエンドおよびJavaScriptアプリケーションの構築、ホスティング、デプロイに最適。無料プランには1アプリ、50GB帯域幅、無制限のカスタムドメイン、無料SSLが含まれます。

**[⬆️ Back to Top](#table-of-contents)**

## DNS

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflareが提供する高速かつ安全な無料パブリックDNSリゾルバー（DNSクエリを暗号化）です。インターネットプロバイダーによるDNSブロッキングを回避し、DNSクエリの監視を防止し、。また、 にも利用可能です。注意：DNSリゾルバーであり、DNSホスティングサービスではありません。 [to block adult & malware content](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families) [via API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)
  * [1984.is](https://www.1984.is/product/freedns/) - APIを備えた無料DNSサービスおよび多くのその他の無料DNS機能を提供。
  * [cloudns.net](https://www.cloudns.net/) - 1ドメインまで無料のDNSホスティング（50レコードまで）
  * [deSEC](https://desec.io) - APIをサポートした安全に設計された無料DNSホスティング。オープンソースソフトウェア上で実行され、 によってサポートされています。 [SSE](https://www.securesystems.de/)
  * [dns.he.net](https://dns.he.net/) - 動的DNSをサポートした無料DNSホスティング
  * [dnspod.com](https://www.dnspod.com/) - 無料DNSホスティング
  * [duckdns.org](https://www.duckdns.org/) - 無料動的DNS（無料プランで最大5ドメイン）。さまざまな設定に合わせた設定ガイドを提供。
  * [Dynv6.com](https://dynv6.com/) - 動的DNSをサポートし、多くのDNSレコードタイプ（CNAME、MX、SPF、SRV、TXTなど）の管理を可能にする無料DNSサービス。 [API support](https://dynv6.com/docs/apis)
  * [freedns.afraid.org](https://freedns.afraid.org/) - 無料DNSホスティング。また、多数の公開ユーザー [contributed domains](https://freedns.afraid.org/domain/registry/) に基づく無料サブドメインを提供。登録後、「サブドメイン」メニューから無料サブドメインを取得できます。
  * [Glauca](https://docs.glauca.digital/hexdns/) - 最大3ドメインまで無料DNSホスティングおよびDNSSEC対応
  * [Hetzner](https://www.hetzner.com/dns-console) - Hetznerから提供されるAPIをサポートした無料DNSホスティング
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - Huaweiが提供する無料DNSホスティング
  * [LocalCert](https://localcert.net) - 公開CAと互換性のあるプライベートネットワーク内で使用可能な無料 `.localcert.net` サブドメイン
  * [luadns.com](https://www.luadns.com/) - 無料DNSホスティング、3ドメイン、すべての機能で適切な制限
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) - 無料DNS。ドメイン数に制限なし
  * [nextdns.io](https://nextdns.io) - DNSベースのファイアウォール、月間300,000件の無料クエリ
  * [noip.at](https://noip.at/) - 登録・トラッキング・ログ・広告なしの無料DDNSサービス。ドメイン数に制限なし。
  * [noip](https://www.noip.com/) - 30日ごとに確認を受けることで、最大3ホスト名を無料で提供する動的DNSサービス
  * [sslip.io](https://sslip.io/) - ホスト名にIPアドレスを埋め込んだクエリに対して、そのIPアドレスを返す無料DNSサービス
  * [zilore.com](https://zilore.com/en/dns) - 5ドメイン分の無料DNSホスティング
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) - 動的DNS対応の無料DNSホスディングサービス
  * [Zonomi](https://zonomi.com/) - 即時DNSプロパゲーションを実現する無料DNSホスティングサービス。無料プラン：1DNSゾーン（ドメイン名）と最大10件のDNSレコード

**[⬆️ Back to Top](#table-of-contents)**

## Domain

  * [DigitalPlat](https://domain.digitalplat.org) - 無料サブドメイン
  * [DNSHE](https://www.dnshe.com/) - 複数ドメイン接頭語での無料サブドメイン登録、カスタムネームサーバー対応
  * [isroot.in](https://isroot.in) - 無料isroot.inサブドメイン
  * [pp.ua](https://nic.ua/) - 無料pp.uaサブドメイン

**[⬆️ Back to Top](#table-of-contents)**

## IaaS

  * [4EVERLAND](https://www.4everland.org/) - AWS S3 - API、インターフェース操作、CLI、その他アップロード方法と互換性あり。IPFSおよびArweaveネットワークからファイルを安全かつ効率的にアップロード・ストレージできる。登録ユーザーにはIPFSストレージ6GBおよびArweaveストレージ300MBが無料提供。Arweaveファイルアップロードサイズが150KB未満の場合はすべて無料。
  * [backblaze.com](https://www.backblaze.com/b2/) - Backblaze B2クラウドストレージ。無期限10GB（Amazon S3に類似）のオブジェクトストレージ無料
  * [filebase.com](https://filebase.com/) - ブロックチェーンを活用したS3互換オブジェクトストレージ。無期限5GBの無料ストレージ
  * [Modal](https://modal.com) - AI駆動型IaaS。計算およびストレージが豊富。月間無料クレジット30ドル（特定アカウントでは5ドルまで）

**[⬆️ Back to Top](#table-of-contents)**

## Managed Data Services

  * [8base.com](https://www.8base.com/) - 8baseはJavaScript開発者向けにMySQLおよびGraphQLをベースに構築されたフルスタック低コード開発プラットフォーム。UIアプリビルダーを使ってウェブアプリケーションを迅速に構築し、スケーリングも容易にできる。無料プランには、2,500行、500GBストレージ、1GB/hのサーバレスコンピューティング、および5人のクライアントアプリユーザーが含まれる。
  * [airtable.com](https://airtable.com/) - スプレッドシートのように見えるが、関係データベースであり、無制限のベース、1,200行/ベース、月間1,000件のAPIリクエスト
  * [Aiven](https://aiven.io/) - Aivenはオープンソースデータプラットフォーム上で無料のPostgreSQL、MySQLおよびValkey（Redis対応）プランを提供。1CPU、1GBRAM、PostgreSQLおよびMySQLでは1GBストレージ。より広範なプランへの移行またはクラウド間の移行が容易。
  * [BackupDrill](https://backupdrill.com) - Supabaseプロジェクトを自社のS3/R2/B2バケットにバックアップし、スケジュールされた復旧練習を実行してバックアップが復旧できるかを確認します。最初のバックアップ時に、1プロジェクト分の週間バックアップと1回の復旧練習を無料で提供します。
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) - 無料プランでは月間5000万RUsおよび10GiBのストレージ（15ドル相当）が無料です。（[What's the Request Units](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
  * [codehooks.io](https://codehooks.io/) - 使いやすいJavaScriptのサーバレスAPI/バックエンドとNoSQLデータベースサービス。関数、MongoDB風のクエリ、キー/バリュー検索、ジョブシステム、リアルタイムメッセージ、ワーカーファイア、強力なCLI、ウェブベースのデータマネージャーを備えています。無料プランでは5GBのストレージと分間60回のAPI呼び出しを提供。2人の開発者が含まれます。クレジットカードの必要なし。
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 開発者がIoTからAIまで次世代アプリケーションを構築できるように設計された、永遠に無料の完全管理型データベースクラスタをデプロイ。1ノードと8GBストレージ。
  * [CrateDB](https://crate.io/) - 分散型オープンソースSQLデータベース。リアルタイム分析用。[Free Tier CRFREE](https://crate.io/lp-crfree)：1ノード、2CPU、2GiBメモリ、8GiBストレージ。組織ごとに1クラスタ、支払い方法不要。
  * [filess.io](https://filess.io) - filess.ioは、MySQL、MariaDB、MongoDB、PostgreSQLのいずれかのDBMSで最大10MBのデータベースを2つ作成できる無料プラットフォームです。
  * [InfluxDB](https://www.influxdata.com/) - タイムシリーズデータベース。無料で3MB/5分の書き込み、30MB/5分の読み取り、10,000個の系列まで。
  * [Layerbase](https://layerbase.com/) - 2つの無料管理型データベースを提供。選択肢：Postgres、MariaDB、Redis、Valkey、DuckDB、SQLite、libSQL、TypeDB。すべてTLS対応。8つのエンジンのうち7つが無料。1データベースあたり1ブランチ。無料プランでは1日10GB、週50GB、月150GBまでのスループット制限あり。高級プランではさらに10のエンジンが利用可能（メートルなし）。
  * [MemCachier](https://www.memcachier.com/) - 管理型Memcacheサービス。最大25MBまで無料。1プロキシサーバー、基本的な分析機能付き。
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - 無料プランでは512MBを提供。
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) - 管理型ネイティブグラフDBMS／分析プラットフォーム。Cypherクエリ言語とREST APIを備えています。グラフサイズの制限（20万ノード、40万関係）。
  * [Neon](https://neon.tech/) - 管理型PostgreSQL。1プロジェクトあたり0.5GBストレージ、100プロジェクト、1プロジェクトあたり10ブランチ、無制限のデータベース、常に利用可能なメインブランチ（5分経過後に自動停止）、非メインブランチの計算時間は月間合計20時間。
  * [Nile](https://www.thenile.dev/) - B2Bアプリ向けPostgreSQLプラットフォーム。無制限データベース、常に利用可能（シャットダウンなし）、合計1GBストレージ、5000万クエリトークン、自動スケーリング、無制限のベクトル埋め込み。
  * [Prisma Postgres](https://prisma.io/postgres) - unikernelベースで裸マシン上で実行される高速ホスティングPostgreSQL。合計500MBストレージ、5データベース、Prisma ORMと統合。
  * [Qdrant](https://qdrant.tech/) - ベクトルデータベース。データ埋め込み用。1ノードクラスタ、0.5vCPU、1GBRAM、4GBディスク。
  * [restdb.io](https://restdb.io/) - 高速かつシンプルなNoSQLクラウドデータベースサービス。restdb.ioではスキーマ、関係、自動RESTAPI（MongoDB風クエリ）、効率的なマルチユーザー管理UIを提供。無料プランでは3ユーザー、2500レコード、1秒あたり1APIリクエストまで。
  * [SeaTable](https://seatable.io/) - 海ファイルチームが開発した柔軟性とスプレッドシートのようなデータベース。無制限テーブル、2000行、1ヶ月のバージョン管理、最大25人のチームメンバーまで。
  * [skyvia.com](https://skyvia.com/) - クラウドデータプラットフォームは無料プランを提供し、すべてのプランがベータ期間中は完全に無料です。
  * [StackBy](https://stackby.com/) - スプレッドシートの柔軟性、データベースの強力さ、そしてお気に入りのビジネスアプリとの組み込み統合を備えた1つのツール。無料プランには無制限ユーザー、10スタック、1スタックあたり2GBの添付ファイルが含まれます。
  * [Tinybird](https://tinybird.co) - サーバレス管理型ClickHouse。HTTP経由の接続なしデータインジェストをサポートし、SQLクエリを管理型HTTPAPIとして公開できます。無料プランには時間制限なし。10GBストレージ＋1日1000回APIリクエスト。
  * [Turso by ChiselStrike](https://turso.tech/) - TursoはエッジデータベースにおけるSQLite開発体験です。Tursoは、無料で利用可能なスタートプランを提供し、合計9GBのストレージ、最大500のデータベース、最大3つの場所、月間10億行の読み取り、およびSQLiteによるローカル開発サポートを提供しています。
  * [Upstash](https://upstash.com/) - サーバレスRedisで、月間50万コマンドまで無料、最大256MBのデータベースサイズ、および20の同時接続を提供します。

**[⬆️ Back to Top](#table-of-contents)**

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  * [cname.dev](https://cname.dev/) - 無料かつ安全な動的リバースプロキシサービスを提供します。
  * [conveyor.cloud](https://conveyor.cloud/) - Visual Studio拡張機能により、IIS Expressをローカルネットワークに公開、またはトンネルを通じて公開URLにアクセスできます。
  * [Expose](https://expose.dev/) - ローカルサイトを安全なトンネルで公開できます。無料プランには、EUサーバー、ランダムなサブドメイン、および単一ユーザーが含まれます。
  * [Hamachi](https://www.vpn.net/) - LogMeIn HamachiはホストされたVPNサービスで、無料プランにより5人まで無制限にネットワークを拡張し、LANのようなネットワークを分散チームに安全に拡張できます。
  * [Hookdeck](https://hookdeck.com/pricing) - どこからでもWebhookの開発、テスト、監視が可能です。月間10万リクエストと10万回の試行、3日間の保存を提供します。
  * [localhost.run](https://localhost.run/) - ローカルで実行中のサーバーをトンネルを通じて公開URLに公開できます。
  * [localtonet](https://localtonet.com/) - HTTP、TLS、TCP、UDP、ファイルサーバー（デフォルト、SFTP、WebDAV）、プロキシトンネル（HTTP、SOCKS5、Shadowsocks、VLESS）のマルチプロトコルトンネリングを提供します。無料プラン：1トンネル、月間1GBの帯域、30分のタイムアウト（HTTPトンネルを除く）。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) - ローカルで実行中のサーバーをトンネルを通じて公開URLに公開できます。無料ホスティング版、および。 [open source](https://github.com/localtunnel/localtunnel)
  * [LocalXpose](https://localxpose.io) - ローカルサーバーをインターネットに公開できるリバースプロキシです。無料プランには15分のトンネル寿命が含まれます。
  * [ngrok.com](https://ngrok.com/) - ローカルで実行中のサーバーをトンネルを通じて公開URLに公開できます。
  * [Pinggy](https://pinggy.io) - ローカルホストの公開URLを1コマンドで取得可能で、ダウンロード不要。HTTPS / TCP / TLSトンネル。無料プランには60分のトンネル寿命が含まれます。
  * [Radmin VPN](https://www.radmin-vpn.com/) - VPNを活用したLANのようなネットワークにより複数のコンピュータを接続できます。無制限のペア。 （Hamachiの代替案）
  * [serveo](https://serveo.net/) - ローカルサーバーをインターネットに公開できます。インストール不要、登録不要。無料サブドメイン、制限なし。
  * [stun:global.stun.twilio.com:3478?transport=udp](https://github.com/ripienaar/free-for-dev/blob/9bbbee10f82d78e6584172cf230a5e7f4f551194/stun:global.stun.twilio.com:3478?transport=udp) - Twilio STUN
  * [stun:stun.l.google.com:19302](https://github.com/ripienaar/free-for-dev/blob/9bbbee10f82d78e6584172cf230a5e7f4f551194/stun:stun.l.google.com:19302) - Google STUN
  * [Tailscale](https://tailscale.com/) - ゼロ設定VPN、オープンソースのWireGuardプロトコルを使用。MacOS、iOS、Windows、Linux、Androidデバイスにインストール可能。個人利用向け無料プランは100デバイスと3ユーザーまでです。
  * [webhookrelay.com](https://webhookrelay.com) - すべてのWebhookを公開または内部（例：ローカルホスト）の宛先へ管理、デバッグ、分配、プロキシできます。また、プライベートネットワーク内のサーバーをトンネル経由で公開し、公開HTTPエンドポイント（`https://yoursubdomain.webrelay.io <----> http://localhost:8080` ）を取得できます。
  * [Xirsys](https://www.xirsys.com/pricing/) - 無制限のSTUN利用＋月間500MBのTURN帯域、帯域制限あり、単一の地理的領域。
  * [ZeroTier](https://www.zerotier.com) - FOSSが管理する仮想Ethernetサービス。無料プランでは25クライアント分の端末から端末まで暗号化されたネットワークを無制限に提供。デスクトップ／モバイル／NA用クライアント；プライベートネットワークのカスタムルーティングルールの設定および新クライアントノードの承認に向けたウェブインターフェース

**[⬆️ Back to Top](#table-of-contents)**

## Issue Tracking and Project Management

  * [acunote.com](https://www.acunote.com/) - 5名までのチームメンバー向けの無料プロジェクト管理およびSCRUMソフトウェア
  * [asana.com](https://asana.com/) - 協力者を含むプライベートプロジェクトには無料
  * [Backlog](https://backlog.com) - チームが素晴らしいプロジェクトをリリースするために必要なすべての機能を1つのプラットフォームで提供。無料プランでは1プロジェクト、10ユーザー、100MBのストレージを提供。
  * [Basecamp](https://basecamp.com/personal) - タスク管理、マイルストーン管理、フォーラムのようなメッセージング、ファイル共有、時間記録。最大3プロジェクト、20ユーザー、1GBのストレージ。
  * [bitrix24.com](https://www.bitrix24.com/) - 社内ネットワークおよびプロジェクト管理ツール。無料プランではユーザー数に制限なし、5GBのストレージを提供。
  * [cacoo.com](https://cacoo.com/) - オンラインリアルタイム図表：フローチャート、UML、ネットワーク。無料プランでは最大15ユーザー／図表、25枚まで。
  * [clickup.com](https://clickup.com/) - プロジェクト管理ツール。無料およびプレミアム版（クラウドストレージあり）。モバイルアプリケーションおよびGit統合が利用可能。
  * [Clockify](https://clockify.me) - プロジェクト間の作業時間の記録を行うタイムトラッカーとタイムシートアプリ。ユーザー数は無制限で、無料で利用可能。
  * [Cloudcraft](https://cloudcraft.co/) - Cloudcraftの視覚設計ツールで、AWSに最適化された知能付きコンポーネントがリアルタイムデータを表示するため、数分でプロフェッショナルなアーキテクチャ図を作成可能。無料プランでは、1ユーザー用の無制限プライベート図を提供。
  * [Confluence](https://www.atlassian.com/software/confluence) - Atlassianのコンテンツ協働ツールは、チームの協働と知識共有を効率的に支援します。無料プランは最大10ユーザーまで対応。
  * [Crosswork](https://crosswork.app/) - 多機能なプロジェクト管理プラットフォーム。無料プランでは最大3プロジェクト、ユーザー数無制限、1GBストレージを提供。
  * [diagrams.net](https://app.diagrams.net/) - Google Drive、OneDrive、Dropboxにローカルに保存されたオンライン図表。すべての機能およびストレージレベルが無料。
  * [easyretro.io](https://www.easyretro.io/) - シンプルで直感的なスプリントリトロスペクティブツール。無料プランでは月間3つの公開ボードと1つのボードごとの調査を提供。
  * [freedcamp.com](https://freedcamp.com/) - タスク、ディスカッション、マイルストーン、時間記録、カレンダー、ファイル、パスワードマネージャー。無料プランではプロジェクト、ユーザー、ファイルストレージが無制限。
  * [GForge](https://gforge.com) - 複雑なプロジェクト向けのプロジェクト管理および問題追跡ツールセット。自前サーバーおよびSaaSのオプションあり。SaaSの無料プランでは最初の5ユーザーが無料で、オープンソースプロジェクトには無料。
  * [gleek.io](https://www.gleek.io) - 開発者向けのキーワードから図を生成する無料ツール。非公式なUMLクラス、オブジェクト、エンティティ関係図を作成可能。
  * [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL Inspectorは、2つのGraphQLスキーマ間の変更をリストとして出力。すべての差異が正確に説明され、破壊的、非破壊的、危険な変更として明示。
  * [Helploom](https://helploom.com) - 無料で常に利用可能なライブチャットを備えた顧客サポートソフトウェア。シンプル、軽量で美しい。設定は単純なコピー＆ペーストスクリプトで完了。開発者が開発した。
  * [HeyRetro](https://heyretro.io/) - リアルタイムスプリントリトロスペクティブプラットフォーム。投票、タイマー、調査、ゲスト協働、アイスブレイクゲームを備えている。常に無料プランでは月間1ボード、匿名調査、ゲストリンク共有を提供。
  * [Hygger](https://hygger.io) - プロジェクト管理プラットフォーム。無料プランはユーザー、プロジェクト、ボードに制限なしで、ストレージ100MBまで提供。
  * [Ilograph](https://www.ilograph.com/) -  インタラクティブな図解により、ユーザーはインフラストラクチャを複数の視点と詳細レベルから見ることができます。チャートはコードで表現可能です。無料プランでは、無制限のプライベート図解を提供し、最大3人の閲覧者を許可。
  * [Jira](https://www.atlassian.com/software/jira) - 多くの企業環境で使用されている高度なソフトウェア開発プロジェクト管理ツール。無料プランは最大10ユーザーまで対応。
  * [kan.bn](https://kan.bn/) - 強力で柔軟なカンバンアプリで、仕事の整理、進捗の追跡、成果の達成をすべて1か所で実現します。無料プランは1ユーザーまでで、ボード、リスト、カードは無制限。
  * [kanbanflow.com](https://kanbanflow.com/) - ボードベースのプロジェクト管理。無料プランとプレミアムプランの2種類あり、プレミアムプランはより多くのオプションを提供。
  * [kanbantool.com](https://kanbantool.com/) - カンバンボードベースのプロジェクト管理。無料プランでは2つのボードと2人のユーザーを提供し、添付ファイルやファイルは対応なし。
  * [Kitemaker.co](https://kitemaker.co) - Slack、Discord、Figma、Githubなどでの製品開発プロセスのすべてのフェーズで協働し、作業の進捗を追跡できます。ユーザー数・スペース数は無制限。無料プランは最大250件の作業項目まで対応。
  * [Kiter.app](https://www.kiter.app/) - 誰でも自分の求人活動を整理し、面接、機会、つながりを追跡できます。強力なウェブアプリとChrome拡張機能。完全無料。
  * [Kumu.io](https://kumu.io/) -  アニメーション、装飾、フィルター、クラスタリング、スプレッドシートのインポートなど、関係性マップを提供。無料プランでは公開プロジェクトは無制限。グラフサイズは無制限。学生向けのプライベートプロジェクトは無料。ファイルを公開せずに利用したい場合は、サンドボックスモードが利用可能です。（アップロード、編集、ダウンロード、削除を可能に）。
  * [leiga.com](https://www.leiga.com/) - LeigaはAIを活用したSaaS製品で、プロジェクトを自動的に管理し、チームの集中力を高め、プロジェクトの進捗を計画通りに確保します。最大10ユーザーまで無料で、カスタムフィールド20、ストレージ2GB、AIによる動画記録は1動画あたり5分まで、自動化は月間20回/ユーザーまで。
  * [Linear](https://linear.app/) - シンプルなインターフェースを備えた問題追跡ツール。メンバーは無制限、ファイルアップロードサイズは最大10MB、問題件数は250件（アーカイブを除く）。
  * [Lucidchart](https://www.lucidchart.com/) - 協働機能を備えたオンライン図解ツール。無料プランでは3つの編集可能なドキュメント、100のプロフェッショナルテンプレート、基本的な協働機能を提供。
  * [MeisterTask](https://www.meistertask.com/) - チーム向けのオンラインタスク管理。プロジェクトは最大3件まで、プロジェクトメンバーは無制限。
  * [MeuScrum](https://www.meuscrum.com/en) - 無料のオンラインスクラムツール（カンバンボードあり）
  * [nTask](https://www.ntaskmanager.com/) - チームが協働し、計画、分析、日常のタスクを管理できるプロジェクト管理ソフトウェア。エッセンシャルプランは永遠に無料で、ストレージ100MB、ユーザー/チーム5名まで。作業スペース、会議、割り当て、タイムシート、問題追跡は無制限。
  * [Plane](https://plane.so/) - Planeはシンプルで拡張性の高いオープンソースプロジェクトおよび製品管理ツールです。メンバーは無制限、ファイルアップロードサイズは最大5MB、問題件数は1000件まで。
  * [planitpoker.com](https://www.planitpoker.com/) - 無料のオンラインプランニングポーカー（見積もりツール）
  * [point.poker](https://www.point.poker/) - オンラインプランニングポーカー（合意ベースの見積もりツール）。ユーザー、チーム、セッション、ラウンド、投票はすべて無制限。登録不要。
  * [Pulse.red](https://pulse.red) - プロジェクト用の無料ミニマリズムタイムトラッカーとタイムシートアプリ。
  * [ScrumFast](https://www.scrumfast.com) - 非常に直感的なインターフェースのスクラムボード。ユーザーは最大5人まで無料。
  * [Sflow](https://sflow.io) - sflow.ioは、アジャイルなソフトウェア開発、マーケティング、販売、顧客サポート、特にアウトソーシングや跨組織協働プロジェクトに特化したプロジェクト管理ツールです。無料プランは最大3プロジェクトと5名まで対応します。
  * [Shake](https://www.shakebugs.com/) - モバイルアプリ向けのアプリ内バグ報告およびフィードバックツール。無料プランは1アプリあたり月10件のバグ報告まで対応します。
  * [Shortcut](https://shortcut.com/) - プロジェクト管理プラットフォーム。最大10名まで無料で利用可能です。
  * [taiga.io](https://taiga.io/) - スタートアップやアジャイル開発者向けのプロジェクト管理プラットフォーム。オープンソース向け無料提供
  * [taskade.com](https://www.taskade.com/) - リアルタイムで協働できるタスクリストとチーム構成図。無料プランは1ワークスペース（無制限のタスクとプロジェクト）、1GBのファイルストレージ、1週間のプロジェクト履歴、およびビデオ会議の5人の参加者まで対応します。
  * [Teaminal](https://www.teaminal.com) - リモートチーム向けのスタンドアップ、リトロ、スプリント計画ツール。最大15名まで無料で利用可能です。
  * [teamwork.com](https://teamwork.com/) - プロジェクト管理とチームチャット。最大5名と2プロジェクトまで無料で利用可能です。プレミアムプランも提供されています。
  * [teleretro.com](https://www.teleretro.com/) - シンプルで楽しいリトロツール。アイスブレイク、GIF、エモジを備えています。無料プランには3回のリトロと無制限のメンバーが含まれます。
  * [Tenzu](https://tenzu.net/) - アジャイルチーム向けの軽量プロジェクト管理ツール。SaaSは無料貢献に依存しており、ユーザーは常に0を選び可能で、機能の支払い壁はありません {[more details](https://tenzu.net/pricing/)}
  * [titanapps.io](https://titanapps.io/) - Jiraおよびmonday.com向けのプロダクティビティツール。問題やタスク内に構造化されたチェックリスト、テンプレート、承認を提供。小規模チーム向けの無料プランが提供されています。
  * [todoist.com](https://todoist.com/) - 協働および個人タスク管理。無料プランには：5つのアクティブプロジェクト、プロジェクト内の5名のユーザー、5MBまでのファイルアップロード、3つのフィルター、1週間の活動履歴が含まれます。
  * [Toggl](https://toggl.com/) - 2つの無料プロダクティビティツールを提供。 [Toggl Track](https://toggl.com/track/)は時間管理とトラッキングアプリで、フリープランによりフリーランスを想定したスムーズな時間トラッキングとレポートを提供。無制限のトラッキング記録、プロジェクト、クライアント、タグ、レポートなどすべてが対応。そして [Toggl Plan](https://toggl.com/plan/)はタスク計画ツールで、シングル開発者向けの無料プランを提供し、無制限のタスク、マイルストーン、タイムラインをサポートします。
  * [trello.com](https://trello.com/) - ボードベースのプロジェクト管理。無制限の個人ボード、10のチームボード。
  * [Tweek](https://tweek.so/) - シンプルな週間ToDoカレンダーとタスク管理。
  * [Wikifactory](https://wikifactory.com/) - プロダクト設計サービス（プロジェクト、VCSおよび問題）。無料プランでは無制限のプロジェクトと協力者、3GBストレージが提供されます。
  * [Yodiz](https://www.yodiz.com/) - アジャイル開発と問題追跡。最大3名まで無料で利用可能です。無制限のプロジェクト。
  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) - FOSSプロジェクトおよびプライベートプロジェクト（最大3名まで）向けの無料ホスティングYouTrack（InCloud）。時間トラッキングとアジャイルボードを含みます
  * [zenhub.com](https://www.zenhub.com) - GitHub内に唯一のプロジェクト管理ソリューション。公開リポジトリ、オープンソース、非営利組織向け無料提供
  * [zenkit.com](https://zenkit.com) - プロジェクト管理と協働ツール。最大5名まで無料で利用可能で、5GBの添付ファイルが対応します。
  * [Zube](https://zube.io) - プロジェクト管理ツール。無料プランは4プロジェクトと4名まで対応。GitHub統合が利用可能です。

**[⬆️ Back to Top](#table-of-contents)**

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 無料のファイル共有プラットフォームで、速度、帯域幅、ファイル数、ダウンロード回数などに制限なし。主にAndroid開発に関連するファイル（APKビルド、カスタムROMや変更など）を対象としているが、他のファイルも受け入れているようだ。
  * [anon.li Drop](https://anon.li/drop) - ゼロ知識E2EEファイル共有。クライアント側でAES-256-GCM暗号化を行い、サーバー側でのデータアクセスは一切ない。ウェブサイト、CLIまたはAPIから5GBまでのファイルの無料アップロードが可能で、最大有効期限は3日まで。
  * [borgbase.com](https://www.borgbase.com/) - シンプルで安全なオフサイトバックアップホスティング。10GBの無料バックアップスペースと2つのリポジトリを提供。
  * [cloudinary.com](https://cloudinary.com/) - 画像のアップロード、強力な操作、ストレージ、配信をサイトやアプリに提供。Ruby、Python、Java、PHP、Objective-Cなど多くのライブラリに対応。無料プランには月間25クレジットが含まれており、1クレジットは1,000の画像変換、1GBのストレージ、または1GBのCDN使用に相当。
  * [degoo.com](https://degoo.com/) - AIベースのクラウドストレージ。無料で最大20GB、3台のデバイス、5GBのリファラルボーナス（90日間のアカウント不活性期間）。
  * [dlvr.sh](https://dlvr.sh/) - エージェントや自動化用の一時ファイル配信。無料プランには24時間ごとに10回の配信が含まれており、API、MCP、CLIアクセスが可能。
  * [Dropshare](https://dropsha.re) - ゼロ知識ファイル共有。端末間でAES-256-GCM暗号化を行い、クライアント側での処理とサーバー側でのデータアクセスが一切ない。1GBまでのファイルの無料アップロードが可能で、データ収集は行われない。
  * [embed.ly](https://embed.ly/) - ウェブページにメディアを埋め込み、レスポンシブな画像スケーリング、ウェブページから要素を抽出するAPIを提供。月間5,000URLまで無料。15リクエスト/秒。
  * [Ente](https://ente.io/) - Enteは、写真、動画、2FAセクレットを端末間暗号化したクラウドサービス。また、自前ホスティングも可能で、無料プランは10GBを提供。無料プランのユーザーには、データの単一レプリケーションのみが保持される。
  * [FileShot.io](https://fileshot.io) - ゼロ知識暗号化ファイル共有。AES-256-GCMによるブラウザ側暗号化により、アップロード前にブラウザ内でファイルが暗号化される。送信者や受信者にアカウントは不要。自前ホスティング可能（MITオープンソース）。無料プランにはファイルサイズ制限なしで無制限アップロードが可能。
  * [file.io](https://www.file.io) - 2GBのファイルストレージ。ファイルは1回ダウンロード後に自動削除される。REST APIでストレージとやり取り可能。リクエスト制限は1分間に1回。
  * [freetools.site](https://freetools.site/) - 無料オンラインツール。ドキュメント、画像、音声、動画など、さまざまなファイルの変換や編集が可能。
  * [getpantry.cloud](https://getpantry.cloud/) - シンプルなJSONデータストレージAPI。個人プロジェクト、ハッカソン、モバイルアプリなどに最適！
  * [GoFile.io](https://gofile.io/) - ウェブUIおよびAPIを介して利用可能な無料ファイル共有およびストレージプラットフォーム。ファイルサイズ、帯域幅、ダウンロード回数などに制限なし。ただし、ファイルが無活性（10日以上ダウンロードなし）になると削除される。
  * [gumlet.com](https://www.gumlet.com/) - 画像および動画のホスティング、処理、ストリーミングをCDNで提供。動画については月間250GB、画像については月間30GBの無料プランを提供。
  * [hyperserve.io](https://hyperserve.io/) - 開発者向けの動画バックエンドAPI：ユーザーがアップロードするフォーマットをすべて受け入れ、MP4に変換し、CDNを介してグローバルに配信。無料プランには50本の動画、1ファイルあたり1GB、月間250GBの帯域幅が含まれる。
  * [icedrive.net](https://www.icedrive.net/) - シンプルなクラウドストレージサービス。10GBの無料ストレージを提供。
  * [image-charts.com](https://www.image-charts.com/) - 水印付きの画像チャート生成を無制限に。
  * [ImageEngine](https://imageengine.io/) - ImageEngineは使いやすいグローバル画像CDN。60秒以内にセットアップ可能。AVIFおよびJPEGXL対応。WordPress、Magento、React、Vueなどへのプラグインも提供。無料開発者アカウントを取得 [here](https://imageengine.io/developer-program/)。
  * [imagekit.io](https://imagekit.io) - 自動最適化、リアルタイム変換、ストレージを提供する画像CDN。既存の環境に数分で統合可能。無料プランには月間20GBの帯域幅が含まれる。
  * [ImgBB](https://imgbb.com/) - ImgBBは無制限の画像ホスティングサービスです。画面のどこかに画像をドラッグ＆ドロップしてください。1枚あたり32MBまで。画像をアップロード後、直接リンク、BBCodeおよびHTMLサムネイルを受信できます。ログインするとアップロード履歴を確認できます。
  * [Imgbot](https://github.com/marketplace/imgbot) - Imgbotは、あなたの画像を最適化し、時間を節約するためのフレンドリーなロボットです。最適化された画像は、品質を犠牲にせずにファイルサイズを小さくできます。オープンソース向けは無料です。
  * [imgen](https://www.jitbit.com/imgen/) - オペングラフ画像用の即時画像生成API（背景にテキスト、ロゴ）：無料、水印なし、CDN対応
  * [imgix](https://www.imgix.com/) - 画像キャッシュ、管理およびCDN。無料プランには元画像1000枚、無限の変換、100GBの帯域幅が含まれます
  * [internxt.com](https://internxt.com) - Internxt Driveは、絶対的なプライバシーと無条件のセキュリティを基盤とするゼロ知識ファイルストレージサービスです。登録すると、永遠に10GB無料になります！
  * [kraken.io](https://kraken.io/) - ウェブサイトのパフォーマンス向けの画像最適化サービス、無料プランは1MBまでファイルサイズをサポート
  * [LibreQR](https://libreqr.com) - プライバシーとトラッキングなしの無料QRコード生成器。データ収集なしで無料で利用可能です。
  * [MConverter](https://mconverter.eu/) - 複数ファイルを一括で変換。多くのフォーマット（包括 [AVIF](https://mconverter.eu/convert/to/avif/) および JXL）をサポート。動画から画像フレームを抽出。PDFを圧縮。24時間あたり15ファイルまで無料、各ファイル最大100MB、8ファイルのブロックで処理されます。
  * [nitropack.io](https://nitropack.io/) - サイトのスピードを自動で高速化。完全なフロントエンド最適化（キャッシュ、画像およびコード最適化、CDN）を提供。月間5,000ページビューまで無料
  * [npoint.io](https://www.npoint.io/) - JSONストアと協働スキーマ編集
  * [MantleDB](https://mantledb.sh) - スクリプトやミニアプリ用の匿名JSONストレージ。登録不要。アップデートはMaster AID、公開取得はRead-Only RIDを使用。無料プランには1バケット（1MB制限）と72時間の無活動スキャブ政策が含まれます。
  * [otixo.com](https://www.otixo.com/) - すべてのクラウドストレージファイルを1か所から暗号化、共有、コピー、移動できます。基本プランでは無制限のファイル転送が可能で、最大ファイルサイズは250MB、5つの暗号化ファイルを許可
  * [packagecloud.io](https://packagecloud.io/) - YUM、APT、RubyGemおよびPyPI向けのホストされたパッケージリポジトリ。リクエストにより限定された無料プランおよびオープンソースプランが提供されます
  * [pcloud.com](https://www.pcloud.com/) - クラウドストレージサービス。最大10GBの無料ストレージ
  * [Pinata IPFS](https://pinata.cloud) - PinataはIPFS上でファイルをアップロード・管理する最もシンプルな方法です。親しみやすいユーザーインターフェースとIPFS APIにより、Pinataはプラットフォーム、クリエイター、コレクターにとって最も使いやすいIPFSピンサービスです。1GBのストレージが無料で、APIへのアクセスも可能です。
  * [plot.ly](https://plot.ly/) - データを可視化し、共有できます。無料プランには無制限の公開ファイルと10個のプライベートファイルが含まれます
  * [podio.com](https://podio.com/) - 5人のチームでPodioを使用し、基本プランの機能（ユーザー管理を除く）を試用できます
  * [Proton Drive](https://proton.me/drive) - ファイルおよび重要なドキュメント向けの超高セキュリティクラウドストレージ。無料プランでは5GBのストレージが提供されます。
  * [QRtracer](https://qrtracer.io) - 広告なしで信頼性を重視した無料QRコード生成器。内蔵スキャン分析、大量生成、ブランドカスタマイズを備えています。
  * [QuickChart](https://quickchart.io) - 埋め込み可能な画像チャート、グラフ、QRコードを生成できます
  * [redbooth.com](https://redbooth.com) - P2Pファイル同期、2ユーザーまで無料
  * [resmush.it](https://resmush.it) - reSmush.itは画像最適化を提供する無料APIです。WordPress、Drupal、Magentoなどの一般的なCMSに実装されています。reSmush.itは70億以上の画像を処理済みであり、今も無料で利用可能です。
  * [sirv.com](https://sirv.com/) - スマート画像CDNで、即時画像最適化とサイズ変更を提供。無料プランには500MBのストレージと2GBの帯域が含まれます。
  * [SlingSite](https://slingsite.github.io) - すべての最適化された画像と動画を作成。無料で、大量に。各画像に対して、以下のフォーマットが提供されます：デスクトップ、タブレット、モバイルの3つの選択サイズでのAVIF、WEBP、JPG。動画に関しては：VP9コーデックのWebM、HEVC（H.265）コーデックのMP4、AVC（H.264）コーデックのMP4、および最初のフレームから作成されたカバー画像を含みます。
  * [sync.com](https://www.sync.com/) - 端末から端末まで（End-to-End）のクラウドストレージサービス。5GBの無料ストレージ
  * [tinypng.com](https://tinypng.com/) - PNGおよびJPEG画像の圧縮とサイズ変更API。月間500回の圧縮が無料です
  * [transloadit.com](https://transloadit.com/) - 動画、音声、画像、ドキュメントのファイルアップロードとエンコードを処理。オープンソース、NPO、学生向けにはGitHub Student Developer Packにより無料。商業用途にはテスト用に2GBの無料プランを提供。
  * [twicpics.com](https://www.twicpics.com) - レスポンシブ画像サービス。画像CDN、メディア処理API、フロントエンドライブラリを提供し、画像最適化を自動化します。月間3GBまでのトラフィック分は無料です。
  * [uploadcare.com](https://uploadcare.com/hub/developers/) - Uploadcareは、最先端アルゴリズムに基づく最強のツールキットを備えたメディアパイプラインを提供します。すべての機能が開発者向けに無料で利用可能です：ファイルアップロードAPIとUI、画像CDNおよびオリジンサービス、適応配信、スマート圧縮。無料プランには3000回のアップロード、3GBのトラフィック、3GBのストレージが含まれます。
  * [VaocherApp QR Code Generator](https://www.vaocherapp.com/qr-code-generator) - ギフトカード、ギフト券、プロモーション用のカスタムQRコードを簡単に作成。カスタムスタイル、色、ロゴなどに対応。

**[⬆️ Back to Top](#table-of-contents)**

## Design and UI

  * [Beste](https://beste.co) - shadcn/uiブロックに基づく構成中心のウェブサイトビルダー。無料プランでは、自社のカスタムドメインを接続でき、無制限のページ、多言語対応、ブログ、フォーム、ホスティングが含まれます。
  * [BoxySVG](https://boxy-svg.com) - SVGを描画し、SVG、PNG、jpeg、その他フォーマットでエクスポートできる無料インストール可能なウェブアプリ。
  * [BrandIcons](https://brandicons.dev) - Favicon API。アイコンがなく、ウェブサーバーさえないドメインにもAIによる発見を提供。無料プランには月間500,000回のリクエストが含まれ、出典を明記します。
  * [Calendar Icons Generator](https://calendariconsgenerator.app/) - 1クリックで1年分のユニークアイコンを生成。完全無料
  * [Canva](https://canva.com) - オンラインデザインツールで視覚コンテンツを作成。
  * [CodedThemes](https://codedthemes.com/) - 優れた設計された管理ダッシュボードとUIキットを提供し、現代的なウェブ開発を簡素化・加速します。
  * [Excalidraw](https://excalidraw.com/) - 無料オンラインドローイングドキュメントページ。ローカル保存とエクスポートをサポート。
  * [figma.com](https://www.figma.com) - チーム向けのオンライン協働デザインツール。無料プランには無制限のファイルと閲覧者、最大2人の編集者と3つのプロジェクトが含まれます。
  * [Flows](https://flows.sh/) - 完全にカスタマイズ可能な製品採用プラットフォーム。オンボーディングとユーザー参加体験を構築できます。月間250人のユーザーまで無料。
  * [landen.co](https://www.landen.co) - スタートアップ向けに美しいウェブサイトやリターゲティングページを作成・編集・公開。コードなし。無料プランでは1サイトを完全にカスタマイズし、ウェブ上に公開できます。
  * [lensdump.com](https://lensdump.com/) - 無料のクラウド画像ホスティング
  * [Logo.dev](https://www.logo.dev) - 4400万以上のブランドをサポートする会社ロゴAPI。URLを呼び出すように簡単です。最初の10,000回のAPI呼び出しは無料です。
  * [marvelapp.com](https://marvelapp.com/) - デザイン、プロトタイピング、協働機能。無料プランは1人のユーザーと1つのプロジェクトまでに制限されています。
  * [Mindmup.com](https://www.mindmup.com/) - 無制限のマインドマップが無料で利用可能で、クラウドに保存できます。あなたのマインドマップは、どこからでも、いつでも、どんなデバイスからでもすぐにアクセスできます。
  * [Mockplus iDoc](https://www.mockplus.com/idoc) - Mockplus iDocは、強力なデザイン協働および手渡しツールです。無料プランには3人のユーザーと5つのプロジェクトが含まれ、すべての機能が利用可能です。
  * [photopea.com](https://www.photopea.com) - 無料の高度なオンラインデザインエディタ。Adobe Photoshop UIをサポートし、PSD、XCF、Sketch形式に対応（Adobe Photoshop、Gimp、Sketchアプリ）。
  * [Plasmic](https://www.plasmic.app/) - 高速かつ使いやすい、強力なウェブデザインツールおよびページビルダー。コードベースに統合可能です。レスポンシブページや複雑なコンポーネントを作成し、オプションでコードを追加し、プロダクションサイトやアプリに公開できます。
  * [Proto.io](https://www.proto.io) - コーディングなしで完全にインタラクティブなUIプロトタイピングを作成できます。無料トライアルが終了した後、無料プランが提供されます。無料プランには1人のユーザー、1つのプロジェクト、5つのプロトタイピング、100MBのオンラインストレージ、およびproto.ioアプリのプレビューが含まれます。
  * [Quant Ux](https://quant-ux.com/) - Quant Uxはプロトタイピングおよびデザインツールです。完全に無料であり、オープンソースです。
  * [Shadcn Studio](https://shadcnstudio.com/theme-editor) - 異なるコンポーネントとレイアウトでのテーマ変更をプレビューできます。
  * [smartmockups.com](https://smartmockups.com/) - 製品プロトタイプを作成。200個の無料プロトタイプが提供されます。
  * [SVGicons.com](https://svgicons.com/) - 312,000以上のオープンソースSVGアイコンの無料検索エンジン。即時使用可能なSVG、React、Vue、HTML、CSSコードを提供します。
  * [TeleportHQ](https://teleporthq.io/) - 低コードフロントエンドデザイン＆開発プラットフォーム。TeleportHQは、即座に作成・公開できるヘッドレス静的ウェブサイトの協働プラットフォームです。3つの無料プロジェクト、無制限の協働者、無料コードエクスポートが提供されます。
  * [Unicorn Platform](https://unicornplatform.com/) - ホスティング付きの簡単なランディングページビルダー。1つのウェブサイトが無料で利用可能です。
  * [Updrafts.app](https://updrafts.app) - TailwindCSSベースのデザインに合わせたWYSIWYGウェブサイトビルダー。非商業用途に無料です。
  * [Webflow](https://webflow.com) - アニメーション付きWYSIW便携サイトビルダーとホスティング。2つのプロジェクトまで無料です。
  * [Webstudio](https://webstudio.is/) - Webflowのオープンソース代替ツール。無料プランではドメイン上で無制限のウェブサイトが利用可能です。カスタムドメインで5サイト。月間20,000ページビュー。2GBのアセットストレージ。
  * [whimsical.com](https://whimsical.com/) - 協働可能なフローチャート、ワイヤーフレーム、ステッキノート、マインドマップ。最大4つの無料ボードを作成できます。
  * [Zeplin](https://zeplin.io/) - デザイナーと開発者の協働プラットフォーム。デザイン、アセット、スタイルガイドを共有できます。1つのプロジェクトまで無料です。
  * [WrapPixel](https://www.wrappixel.com/) - 高品質の無料およびプレミアムAdminダッシュボードテンプレートをダウンロード！Angular、React、VueJs、NextJS、NuxtJSで作成されたテンプレートです！HTMLテーマとUIキットでアプリケーション開発を早めましょう！
  * [Themeselection](https://themeselection.com/) - 選ばれた高品質で、現代的なデザイン、プロフェッショナルかつ使いやすい無料Adminダッシュボードテンプレート
  * [AdminMart](https://adminmart.com/) - Angular、Bootstrap、React、VueJs、NextJS、NuxtJSで作成された高品質無料およびプレミアムAdminダッシュボードおよびウェブサイトテンプレート

**[⬆️ Back to Top](#table-of-contents)**

## Data Visualization on Maps

  * [Clockwork Micro](https://clockworkmicro.com/) - 正確に動作するマップツール。月間5万件の無料クエリ（マップタイル、db2vector、標高データ）
  * [Foursquare](https://developer.foursquare.com/) - Places APIおよびPilgrim SDKによる場所発見、施設検索、コンテキスト意識型コンテンツ
  * [geoapify.com](https://www.geoapify.com/) - ベクターマップタイルおよびレターマップタイル、地名検索、場所情報、ルート計算、等高線API。月間3,000件の無料リクエスト
  * [geocod.io](https://www.geocod.io/) - APIまたはCSVアップロードによる地名検索。月間2,500件の無料クエリ
  * [geocodify.com](https://geocodify.com/) - APIまたはCSVアップロードによる地名検索および地名解析。月間10,000件の無料クエリ
  * [geojs.io](https://www.geojs.io/) - 高可用性のREST/JSON/JSONP IP地名検索API
  * [Geokeo api](https://geokeo.com) - 言語訂正を含む地名検索API。世界全域対応。日間2,500件の無料クエリ
  * [graphhopper.com](https://www.graphhopper.com/) - ルート計算、ルート最適化、距離マトリクス、地名検索、マップマッチングに向けた無料開発パッケージを提供
  * [here](https://developer.here.com/) - マップおよび場所意識アプリ向けAPIおよびSDK。月間25万件の取引が無料。
  * [IP Geolocation](https://ipgeolocation.io/) - 無料DEVELOPERプランが提供され、月間30,000件のリクエストが可能。
  * [ipstack](https://ipstack.com/) - IPアドレスを用いてウェブサイト訪問者を特定および識別
  * [LatLng](https://www.latlng.work) - 地名検索、逆地名検索、場所情報、静的マップ、ベクターマップタイルAPI。無料プランには日間3,000件の地名検索、300件の逆地名検索、100件の静的マップ画像が含まれる。
  * [locationiq.com](https://locationiq.com/) - 地名検索、マップ、ルート計算API。日間5,000件の無料リクエスト。
  * [mapbox.com](https://www.mapbox.com/) - マップデータを表示するためのマップ、地理空間サービスおよびSDK。
  * [maps.stamen.com](https://maps.stamen.com/) - 無料マップタイルおよびタイルホスティング。
  * [maptiler.com](https://www.maptiler.com/cloud/) - ベクターマップ、マップサービスおよびSDKによるマップ可視化。無料ベクターマップタイルは週ごとに更新され、4つのマップスタイルが提供される。
  * [nominatim.org](https://nominatim.org/) - OpenStreetMapの無料地名検索サービス。世界全域の住所検索および逆地名検索機能を提供。
  * [opencagedata.com](https://opencagedata.com) - OpenStreetMapおよびその他のオープン地理ソースを統合した地名検索API。日間2,500件の無料クエリ。
  * [osmnames](https://osmnames.org/) - 地名をウェブページの人気度に基づいて検索結果に並べる地理コーディング
  * [positionstack](https://positionstack.com/) - 世界中の場所や座標に対して無料の地理コーディング。個人使用には月に25,000回のリクエストが無料。
  * [stadiamaps.com](https://stadiamaps.com/) - 地図タイル、ルーティング、ナビゲーション、その他地理空間API。非営利利用およびテストには、1日あたり2,500回の地図ビューとAPIリクエストが無料。

**[⬆️ Back to Top](#table-of-contents)**

## Package Build System

  * [build.opensuse.org](https://build.opensuse.org/) - 複数のディストリビューション（SUSE、EL、Fedora、Debianなど）向けのパッケージビルドサービス。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) - FedoraおよびEL向けのモックベースのRPMビルドサービス。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) - UbuntuおよびDebian向けのビルドサービス。

**[⬆️ Back to Top](#table-of-contents)**

## IDE and Code Editing


  * [Android Studio](https://developer.android.com/studio) - Android Studioは、すべてのAndroidデバイス上でアプリを開発するための最も速いツールを提供します。オープンソースIDEは誰でも無料で利用可能で、最高のAndroidアプリ開発環境です。Windows、Mac、Linux、さらにはChromeOSにも対応！
  * [AndroidIDE](https://m.androidide.com/) - Androidデバイス上で実際のGradleベースのAndroidアプリを開発できるオープンソースIDE。
  * [Apache Netbeans](https://netbeans.apache.org/) - 開発環境、ツールプラットフォーム、アプリフレームワーク。
  * [apiary.io](https://apiary.io/) - 即時APIモックと生成されたドキュメントを備えた協働設計API（無制限のAPIブループリントと無制限のユーザー、1つの管理者アカウント、ホストされたドキュメントが無料）。
  * [BBEdit](https://www.barebones.com/) - BBEditはmacOS向けの人気で拡張性の高いエディタです。無料モードは [powerful core feature set](https://www.barebones.com/products/bbedit/comparison.html) を提供し、高度な機能へのアップグレードパスを提供します。
  * [Binder](https://mybinder.org/) - Gitリポジトリをインタラクティブなノートブックのコレクションに変換します。これは無料の公開サービスです。
  * [BlueJ](https://bluej.org) - 初心者向けに設計された無料のJava開発環境。世界中で数百万人が使用しています。Oracleが提供し、シンプルなGUIで初心者をサポート。
  * [Brackets](https://brackets.io/) - Bracketsはウェブ開発に特化したオープンソーステキストエディタです。軽量で使いやすく、高度にカスタマイズ可能です。
  * [cacher.io](https://www.cacher.io) - ラベル付きコードスニペットの整理ツール。100以上のプログラミング言語に対応。
  * [cocalc.com](https://cocalc.com/) - クラウド上の協働計算。ブラウザでフルUbuntuにアクセス可能で、協働機能と数学、科学、データサイエンス向けの多くの無料ソフトウェアが内蔵されています。Python、LaTeX、Jupyterノートブック、SageMath、scikitlearnなど、事前インストール済み。
  * [Code::Blocks](https://codeblocks.org) - 無料のFortranおよびC/C++ IDE。オープンソースで、Windows、macOS、Linuxで動作。
  * [Codeground](https://codeground.ai/) - 15以上の言語およびPostgres、MySQL、MongoDB、Redisに対応する無料ブラウザIDEおよびプレイグランド。共有可能なスニペット、コーディングインタビュー、クラウドワークスペースを提供。プレイグランドはインストール不要で無料。
  * [codiga.io](https://codiga.io/) - IDE内でコードスニペットを検索・定義・再利用できるコーディングアシスタント。個人および小規模組織向けに無料。
  * [Components.studio](https://webcomponents.dev/) - コードコンポーネントを孤立させ、ストーリーで可視化し、テストし、npmに公開できる。
  * [Eclipse Che](https://www.eclipse.org/che/) - WebベースかつKubernetesネイティブのIDE。複数言語対応で開発チーム向け。オープンソースかつコミュニティが中心。Red Hatがホスティングするオンラインインスタンスは [workspaces.openshift.com](https://workspaces.openshift.com/) にあります。
  * [ForgeCode](https://forgecode.dev/) - Claude、GPT4シリーズ、Grok、Deepseek、Geminiおよびすべてのフロンティアモデルに対応したAI搭載ペアプログラマー。CLIと任意のIDEとネイティブに統合。無料プランには基本的なAIモデルのローカル処理が含まれます。
  * [GetVM](https://getvm.io) - 即時無料のLinuxおよびIDEのChromeサイドバー。無料プランには1日5台のVMが含まれます。
  * [JDoodle](https://www.jdoodle.com) - 60以上のプログラミング言語に対応するオンラインコンパイラとエディタ。無料プランではREST APIコードのコンパイルに1日200クレジットまで使用可能です。
  * [jetbrains.com](https://jetbrains.com/products.html) - 生産性ツール、IDEおよびデプロイツール（つまり [IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/) など）。学生、教師、オープンソースおよびユーザーグループには無料ライセンスが提供されます。
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - 一部のREST APIエンドポイントがJSON形式で偽データを返します。ソースコードも提供しており、ローカルサーバーを実行したい場合にご利用いただけます。
  * [Lazarus](https://www.lazarus-ide.org/) - Lazarusは、Delphiと互換性のあるクロスプラットフォームIDEで、迅速なアプリケーション開発を支援します。
  * [MarsCode](https://www.marscode.com/) - 無料のAIを活用したクラウドベースIDE。
  * [micro-jaymock](https://micro-jaymock.now.sh/) - 小さなAPIモックマイクロサービスで偽JSONデータを生成します。
  * [mockaroo](https://mockaroo.com/) - Mockarooは、CSV、JSON、SQL、Excel形式で現実的なテストデータを生成できます。また、バックエンドAPIのモックを作成することも可能です。
  * [Mocklets](https://mocklets.com) - HTTPベースのモックAPIシミュレーターで、APIをシミュレートし、並列開発やより包括的なテストを可能にします。無期限無料プランが提供されています。
  * [OneCompiler](https://onecompiler.com/) - 70以上の言語（Java、Python、C++、JavaScriptを含む）に対応する無料オンラインコンパイラ。
  * [OnlineGDB](https://onlinegdb.com) - 40以上の言語をサポートし、多数のライブラリが事前にインストールされた無料オンラインIDE。デバッグ機能、フラグ、チュートリアル、Q&Aページも備えています！
  * [pterocos](https://pterocos.eu.org) - フロントエンド開発者向けの無料オープンソースブラウザベースのコーディング環境。HTML、CSS、JSをVS Codeレベルのエディタ（Monaco）で作成し、リアルタイムプレビュー、SCSS/TypeScript/Babel対応、デバッグおよび提案を支援するAIチャットアシスタントを備えています。すべてのプロジェクトはローカルストレージに保存されます。永久無料 – アカウントは必要ありません。
  * [Paiza](https://paiza.cloud/en/) - 何も設定不要でブラウザ上でウェブアプリを開発できます。無料プランでは1サーバー（24時間のライフタイム）、1日4時間の実行時間、2コアCPU、2GBRAM、1GBストレージが提供されます。
  * [PHPSandbox](https://phpsandbox.io/) - PHP向けのオンライン開発環境
  * [Replit](https://replit.com/) - さまざまなプログラミング言語に対応するクラウドコーディング環境。
  * [RunMat](https://runmat.com/sandbox) - GPUを活用した数値計算IDE。ブラウザ上でMATLAB構文の.mファイルを書く・実行可能。WebAssemblyおよびWebGPUを活用した自動GPU加速。インストール不要、アカウント不要、ライセンス費用もなし。オープンソースランタイムでCLI、NPMパッケージ、Jupyterカーネル対応。
  * [SoloLearn](https://code.sololearn.com) - コードスニペットを実行できるクラウドプログラミングプレイグラウンド。複数のプログラミング言語に対応。コードの実行には登録不要ですが、プラットフォーム上にコードを保存する場合は登録が必要です。また、初心者および中級者向けの無料コースも提供しています。
  * [stackblitz.com](https://stackblitz.com/) - オンライン/クラウドコードIDEでフルスタックアプリの作成、編集、デプロイが可能です。任意のポピュラーなNode.jsベースのフロントエンドおよびバックエンドフレームワークに対応。新しいプロジェクトを作成するためのショートリンク：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Textは、コーディングやテキスト編集タスクに利用される、人気があり、柔軟かつ高度にカスタマイズ可能なテキストエディタです.
  * [Visual Studio Code](https://code.visualstudio.com/) - コードエディタが現代のウェブおよびクラウドアプリケーションの開発とデバッグに最適化され、マイクロソフトによって開発されています.
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) - 数千もの拡張機能を備えた完全機能のIDE。iOSおよびAndroid向けのマイクロソフト拡張機能がダウンロード可能。デスクトップ、ウェブ、クラウド開発、複数言語対応（C#、C++、JavaScript、Python、PHPなど）.
  * [VSCodium](https://vscodium.com/) - マイクロソフトのエディタVSCodeのコミュニティが運営する、テレメトリやトラッキングを一切行わず、無料ライセンスで配布されるバイナリ版
  * [wakatime.com](https://wakatime.com/) - テキストエディタプラグインを使って、あなたのコーディング活動に関する定量データを取得。無料プランは限定されています.
  * [Wave Terminal](https://waveterm.dev/) - Waveは、スムーズなワークフローを実現するオープンソース・クロスプラットフォームのターミナル。何でもインラインでレンダリング。セッションと履歴を保存。オープンウェブ標準で構成されています。macOSおよびLinux対応.

**[⬆️ Back to Top](#table-of-contents)**

## Analytics, Events and Statistics

  * [amplitude.com](https://amplitude.com/) - 月間100万件のイベント、最大2アプリ
  * [AppFit](https://appfit.io) - AppFitは、分析と製品更新のシームレスなクロスプラットフォーム管理を支援する包括的な分析および製品管理ツール。無料プランには月間10,000件のイベント、製品ジャーナル、週次洞察が含まれます.
  * [Aptabase](https://aptabase.com) - オープンソース、プライバシーに配慮したモバイルおよびデスクトップアプリ向けのシンプルな分析。Swift、Kotlin、React Native、Flutter、Electronなど、多数のSDKを提供。月間最大20,000件のイベントまで無料です.
  * [Avo](https://avo.app/) - シンプルな分析リリースワークフロー。シングルソースオブトラウスのトラッキングプラン、型安全な分析トラッキングライブラリ、アプリ内デバッグ、データ可観測性により、リリース前にすべてのデータ問題を検出。2名のワークスペースメンバーおよび1時間のデータ可観測性リターンが無料です.
  * [Beampipe.io](https://beampipe.io) - Beampipeは、シンプルでプライバシーに配慮したウェブ分析ツール。最大5ドメインおよび月間10,000ページビューまで無料です.
  * [Census](https://www.getcensus.com/) - 逆ETLおよび運用分析プラットフォーム。データウェアハウスから10フィールドを同期し、Salesforce、Zendesk、Amplitudeなど60以上のSaaSに連携します.
  * [Clicky](https://clicky.com) - ウェブサイト分析プラットフォーム。無料プランは1サイトに対し、3000ビューの分析を提供します.
  * [counter.dev](https://counter.dev) - ウェブ分析をシンプルにし、プライバシーに配慮した分析を実現。無料または寄付で利用可能。
  * [DocBeacon](https://docbeacon.io) - 安全なドキュメント共有機能にドキュメントトラッキングとエンゲージメント分析を備えます。無料プランでは、最大20のPDFドキュメント（10MBまで）、10人の連絡先、ドキュメントごとに最大2回の共有が可能で、ビュー、ダウンロード、時間、エンゲージメントに関する基本的な分析が提供されます.
  * [Dwh.dev](https://dwh.dev) - データクラウド可観測性ソリューション（Snowflake）。個人利用向け無料です.
  * [Expensify](https://www.expensify.com/) - 支出報告、個人向けの承認ワークフローを無料で提供
  * [getinsights.io](https://getinsights.io) - プライバシーに配慮した、クッキーなしの分析。月間最大3,000件のイベントまで無料です.
  * [Gizmo Analytics](https://gizmoanalytics.io/) - 多くのサイトを管理する人のためのシンプルな分析。手動でインストールするか、ClaudeまたはCursorが代わりに実行できます。月間最大10,000件のイベントまで無料です.
  * [GoatCounter](https://www.goatcounter.com/) - GoatCounterは、ホスティングサービス（非営利利用者向け無料）またはセルフホスティングアプリとして提供されるオープンソースのウェブ分析プラットフォームです。Google AnalyticsやMatomoの代替として、使いやすく、意味のあるプライバシーに配慮したウェブ分析を提供します。無料プランは非営利利用者向けであり、無制限のサイト数、6か月間のデータ保存、月間10万ページビューが含まれます。
  * [Google Analytics](https://analytics.google.com/) - Google Analytics
  * [heap.io](https://heap.io) - iOSやウェブアプリにおけるユーザー行動を自動的にキャプチャ。月間10,000セッションまで無料。
  * [Hightouch](https://hightouch.com/) - Hightouchは、データウェアハウスからCRM、マーケティング、サポートツールへ顧客データを同期するためのReverse ETLプラットフォームです。無料プランでは、1つの目的地へデータを同期できます。
  * [HitKeep](https://hitkeep.com/) - プライバシーに配慮したオープンソースのウェブおよび製品分析プラットフォーム。無料クラウドプランでは、3サイト、3チームメンバー、60日間のデータ保存、AI分析、目標、フューリー、イベント、ヒットが提供されます。
  * [Hotjar](https://hotjar.com) - ウェブサイト分析とレポート。無料プランでは1日2,000ページビューまで。1日100スナップショット（最大容量：300）。3つのスナップショットヒートマップは365日間保存可能です。チームメンバーは無制限。アプリ内およびスタンドアローンの調査、フィードバックウィジェット（スクリーンショット付き）も提供。無料プランでは3つの調査と3つのフィードバックウィジェットを作成可能で、月間20件の反応を収集できます。
  * [LogSpot](https://logspot.io) - 完全な統合されたウェブおよび製品分析プラットフォーム。埋め込み分析ウィジェットおよび自動化されたロボット（Slack、Telegram、Webhook）を含む。無料プランでは月間10,000イベントまで。
  * [Mixpanel](https://mixpanel.com/) - 月間100,000ユーザーを追跡、無制限のデータ履歴と席数、米国または欧州データリジデンシー
  * [Moesif](https://www.moesif.com) - RESTおよびGraphQL向けAPI分析。月間500,000回までの無料API呼び出し
  * [PostHog](https://posthog.com) - 月間100万イベントまでを無料で提供する製品分析ツールセット。また、アプリ内調査は無制限で、月間250件の反応を収集できます。
  * [Repohistory](https://repohistory.com) - 14日以上前のGitHubリポジトリのトラフィック履歴を追跡するための美しいダッシュボード。無料プランでは、1つのリポジトリのトラフィックを監視できます。
  * [Row Zero](https://rowzero.io) - 非常に高速な接続済みスプレッドシート。データベース、S3、APIに直接接続。数百万行のデータをインポート、分析、グラフ化、共有できます。無料で3冊（永遠に）のワークブックを提供。
  * [Rybbit](https://rybbit.io) - Google Analyticsのオープンソースかつクッキーなし代替品で、10倍以上直感的。無料プランでは月間3,000イベントまで。
  * [Seline](https://seline.so) - Selineはシンプルでプライベートなウェブサイトおよび製品分析ツール。クッキーなし、軽量、独立運営。無料プランでは月間3,000イベントまで提供され、ダッシュボード、ユーザーの旅、フューリーなどすべての機能にアクセスできます。
  * [StatCounter](https://statcounter.com/) - ウェブサイトビュー分析。無料プランでは、500人の最新訪問者を分析できます。
  * [Statsig](https://statsig.com) - 分析、機能フラグ、A/Bテストを一括で提供するプラットフォーム。月間100万件までのイベントは無料。
  * [TraceLog](https://tracelog.io/) - ECサイト向けAI分析。自然言語で分析に関する質問を投げ、実行可能な提案を受けて収益を成長させるAI分析を活用。月間10,000イベントまで無料。
  * [Trackingplan](https://www.trackingplan.com/) - デジタル分析、マーケティングデータおよびピクセルの問題を自動検出、最新のトラッキングプランを維持し、スムーズな協働を促進。コードを書かずに、本番環境にデプロイするか、リグレッションテストに分析カバレッジを追加できます。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - Google Analyticsの軽量かつプライバシーに配慮した無料代替品。無制限ページビュー、無制限訪問者、無制限ページヒートマップおよび目標トラッキング。3ドメインまで無料で、各ドメイン600セッションリプレイまで。
  * [Umami](https://umami.is/) - Google Analyticsのシンプルで高速かつプライバシーに配慮したオープンソース代替品。
  * [usabilityhub.com](https://usabilityhub.com/) - 実際のユーザーにデザインやモックアップをテストし、訪問者を追跡。1ユーザーまで無料、無制限テスト。

**[⬆️ Back to Top](#table-of-contents)**

## Visitor Session Recording

  * [FullStory.com](https://www.fullstory.com) - 月間1,000セッション、1ヶ月のデータ保存、3ユーザー席。詳細情報 [here](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [howuku.com](https://howuku.com) - ユーザーのインタラクション、エンゲージメント、イベントを追跡。月間5,000回の訪問まで無料
  * [inspectlet.com](https://www.inspectlet.com/) - 1つのウェブサイトに対して月間2,500セッション無料
  * [LogRocket.com](https://www.logrocket.com) - 30日間のリテンション、エラートラッキング、ライブモードを含む月間1,000セッション無料
  * [Microsoft Clarity](https://clarity.microsoft.com/) - セッション記録は完全無料。「トラフィック制限」「プロジェクト制限」「サンプリング」なし
  * [mouseflow.com](https://mouseflow.com/) - 1つのウェブサイトに対して月間500セッション無料
  * [OpenReplay.com](https://www.openreplay.com) - オープンソースのセッション再現機能を備え、開発ツールによるバグ再現、リアルタイムサポート用のライブセッション、製品分析ツールセットを提供。すべての機能にアクセス可能で、月間1,000セッション、7日間リテンション対応
  * [Reactflow.com](https://www.reactflow.com/) - 各サイトあたり：1日1,000ページビュー、3つのヒートマップ、3つのウィジェット、無料のバグトラッキング
  * [smartlook.com](https://www.smartlook.com/) - ウェブおよびモバイルアプリ向けの無料パッケージ（月間1,500セッション）、3つのヒートマップ、1つのファンネル、1か月分のデータ履歴
  * [UXtweak.com](https://www.uxtweak.com/) - 訪問者があなたのウェブサイトやアプリをどのように使用しているかを記録・確認。小型プロジェクト向けに無制限時間無料

**[⬆️ Back to Top](#table-of-contents)**

## International Mobile Number Verification API and SDK

  * [numverify](https://numverify.com/) - グローバル電話番号のバリデーションおよび検索JSON API。月間100回のAPIリクエスト無料
  * [veriphone](https://veriphone.io/) - グローバル電話番号の確認を無料・高速・信頼性の高いJSON APIで提供。月間1,000回のリクエスト無料

**[⬆️ Back to Top](#table-of-contents)**

## Payment and Billing Integration

  * [Adapty.io](https://adapty.io/) - iOS、Android、React Native、Flutter、Unity、またはウェブアプリ向けのモバイルアプリ内購入統合用オープンソースSDK。月間売上10,000ドルまで無料。
  * [AllRatesToday](https://allratestoday.com) - 150以上の通貨に対応したリアルタイム中間市場為替レート。公式JavaScript、Python、PHP SDKを提供。無料プランはHTTPSで月間300リクエスト。
  * [Codex](https://www.codex.io) - リアルタイムの暗号資産および予測市場データAPI（価格、チャート、取引、ウォレット残高、トレンドデータなど）。無料プランは月間10,000リクエストを提供。クレジットカードまたは暗号資産による認証が必要。
  * [Churnkey](https://churnkey.co) - サブスクリプションビジネス向けのキャンセルフロー（オープンソース）、離脱メトリクス、収益分析。永遠に無料。
  * [CoinMarketCap](https://coinmarketcap.com/api/) - 暗号資産市場データを提供（最新の暗号資産および法定通貨の為替レート）。無料プランは月間10Kコールクレジットを提供。
  * [Currencyapi](https://currencyapi.com) - 無料の為替変動および為替レートデータAPI。月間300リクエスト無料、プライベート使用時1分あたり10リクエスト。
  * [CurrencyApi](https://currencyapi.net/) - 物理通貨および暗号資産のリアルタイム為替レートをJSONおよびXMLで提供。無料プランは月間1,250リクエストを提供。
  * [CurrencyFreaks](https://currencyfreaks.com/) - 現在および過去の為替レートを提供。無料DEVELOPERプランあり（月間1,000リクエスト）。
  * [currencylayer](https://currencylayer.com/) - ビジネス向けの信頼性の高い為替レートおよび為替変換。月間100リクエスト無料。
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 使いやすい通貨換算JSON API。無料プランは1日1回更新され、月間1,500リクエストまでが制限されます。
  * [Exchange Rate API](https://exchange-rateapi.com) - 160以上の通貨に対応するリアルタイム通貨レート。60秒間隔で更新され、公式SDKも提供されています。無料プランには月間300リクエストが含まれます。
  * [FraudLabsPRO](https://www.fraudlabspro.com) - 販売者に支払いの詐欺やリターンを防ぐサポートを提供します。無料のマイクロプランは月間500クエリまでが提供されます。
  * [FxRatesAPI](https://fxratesapi.com) - リアルタイムおよび過去の為替レートを提供します。無料プランでは著作権表示が必要です。
  * [Moesif API Monetization](https://www.moesif.com/) - APIの利用量に基づいた課金で収益を創出できます。Stripe、Chargebeeなどに接続可能です。無料プランには月間30,000イベントが含まれます。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) - 訪問者の位置に基づいて価格を自動調整し、グローバルに事業を拡大し、新たな市場に進出できます（購買力パリティ）。無料プランには月間7,500リクエストが含まれます。
  * [Qonversion](https://qonversion.io/) - iOS、Android、React Native、Flutter、Unity、Cordova、Stripe、Webなどすべてのプラットフォームに対応する、ワンストップのサブスクリプション管理プラットフォーム。分析、A/Bテスト、Apple Search Ads、リモート設定、インアプリ購入および収益化の最適化ツールを提供。無料プランでは月間10,000ドルの収益を追跡できます。
  * [RevenueCat](https://www.revenuecat.com/) - iOSおよびAndroid向けのインアプリ購入およびサブスクリプションのホスティングバックエンド。無料プランでは月間2,500ドルの収益を追跡できます。
  * [vatlayer](https://vatlayer.com/) - 即時VAT番号検証およびEUのVATレートAPI。月間100リクエストが無料です。

**[⬆️ Back to Top](#table-of-contents)**

## Docker Related

  * [Appish](https://appi.sh/) - デモ用にDockerコンテナをホストするには、docker pushで完了。無料プランには2時間セッションの1スロットが含まれます。
  * [Container Registry Service](https://container-registry.com/) - Harborベースのコンテナ管理ソリューション。無料プランではプライベートリポジトリに1GBのストレージが提供されます。
  * [Docker Hub](https://hub.docker.com) - 1つの無料プライベートリポジトリと無制限の公開リポジトリでDockerイメージを構築・保存できます。
  * [quay.io](https://quay.io/) - 無制限の無料公開リポジトリでコンテナイメージを構築・保存できます。
  * [ttl.sh](https://ttl.sh/) - 匿名かつ一時的なDockerイメージレジストリ。

**[⬆️ Back to Top](#table-of-contents)**

## Dev Blogging Sites

  * [AyeDot](https://ayedot.com/) - 現代的なマルチメディア短形式のミニブログとして、世界にあなたのアイデア、知識、ストーリーを無料で共有できます。
  * [BearBlog](https://bearblog.dev/) - ミニマリストな、Markdownベースのブログおよびウェブサイトビルダー。
  * [Dev.to](https://dev.to/) - プログラマがアイデアを共有し、お互いを成長させる場所。
  * [Hashnode](https://hashnode.com/) - 開発者向けの手軽なブログソフトウェア。
  * [Medium](https://medium.com/) - あなたが大切にしていることについて、より深く考えられるようになります。
  * [JustBlogged](https://justblogged.com) - カスタムドメインをサポートする無料ブログプラットフォームおよび高速グローバルパフォーマンス。

**[⬆️ Back to Top](#table-of-contents)**

## Commenting Platforms

  * [GraphComment](https://graphcomment.com/) - GraphCommentは、ウェブサイトの利用者から活発なコミュニティを構築するためのコメントプラットフォームです。
  * [IntenseDebate](https://intensedebate.com/) - WordPress、Tumblr、Blogger、その他多くのウェブサイトプラットフォーム向けに、機能豊富なコメントシステムです。
  * [Remarkbox](https://www.remarkbox.com/) - オープンソースのホストコメントプラットフォーム。"いくつかのドメインに1人のモデレーターを提供し、行動および外観について完全な制御"を、いくらでも支払ってご利用ください。
  * [Utterances](https://utteranc.es/) - GitHubのIssuesに基づく軽量なコメントウィジェット。ブログのコメント、WikiページなどにGitHub Issuesを使用してください！

**[⬆️ Back to Top](#table-of-contents)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) - AWS LambdaとChromeに基づくスクリーンショットAPI。全ページを処理し、タイムスタンプやビューのサイズを取得します。
  * [microlink.io](https://microlink.io/) - どんなウェブサイトでも、メタタグの標準化、美しさのリンクプレビュー、スクレイピング機能、またはスクリーンショットサービスとしてデータに変換します。毎日50回のリクエストは無料です。
  * [PhantomJsCloud](https://PhantomJsCloud.com) - ブラウザ自動化とページレンダリング。無料プランでは1日500ページまで対応。2017年から無料プランを提供しています。
  * [screenshotbase.com](https://screenshotbase.com) - 月間300回の無料スクリーンショット。任意のURLからスクリーンショットを取得できます。高速で無料かつスケーラブルです。
  * [screenshotlayer.com](https://screenshotlayer.com/) - どんなウェブサイトの高度にカスタマイズ可能なスナップショットを取得できます。月間100回の無料スナップショット。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) - 月間100回のスナップショットを取得できます（PNG、GIF、JPGを含む）。ホームページだけでなく、全ページを取得できます。
  * [Screenshot Scout](https://screenshotscout.com/) - 開発者向けスクリーンショットAPI。1リクエストで任意のURLからクリーンでプロダクション対応のスクリーンショットを取得できます。無料プランでは月間200回のスクリーンショットが提供されます。
  * [Shotpipe](https://shotpipe.io) - 静的サイト向けのスクリーンショットとOpen Graph画像API。無料プランでは月間100回のレンダリングが提供され、カードは不要です。キャッシュされたレンダリングは無料です。
  * [SnapAPI](https://snapapi.pics) - スクリーンショット、動画記録、PDF生成、ウェブデータ抽出API。無料プランでは月間20含むスクリーンショットが提供されます。
  * [thumbnail.ws](https://thumbnail.ws) - ウェブサイトのサムネイル生成用API。無料プランでは月間1,000回のリクエストが提供されます。

**[⬆️ Back to Top](#table-of-contents)**

## Flutter Related and Building IOS Apps without Mac

  * [CodeMagic](https://codemagic.io/) - Codemagicは、モバイルアプリ向けの完全にホストされ、管理されたCI/CDツールです。GUIベースのCI/CDツールを使って、ビルド、テスト、デプロイを行えます。無料プランでは月間500分の無料利用と、2.3GHz、8GB RAMのMac Miniインスタンスが提供されます。
  * [FlutLab](https://flutlab.io/) - FlutLabは、現代的なFlutterオンラインIDEであり、クロスプラットフォームプロジェクトの作成、デバッグ、構築を行う最適な場所です。Flutterを使ってiOS（Macなし）およびAndroidアプリを構築できます。
  * [FlutterFlow](https://flutterflow.io/) -  FlutterFlowは、ブラウザベースのドラッグ＆ドロップインターフェースで、Flutterを使ってモバイルアプリを構築するツールです。

**[⬆️ Back to Top](#table-of-contents)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - プライバシー設計の実現を支援するための監査と継続的なワークフローを提供し、組織がGDPRおよびその他の規制に準拠できるようにします。無料プランは小型チームに限定され、SaaS版のみが提供されます。
  * [Concord](https://www.concord.tech/) - 完全なデータプライバシープラットフォーム。同意管理、プライバシー要請処理（DSARs）、データマッピングを含みます。無料プランには基本的な同意管理機能が含まれており、さらに高度なプランも無料でオープンソースプロジェクトに提供されます。
  * [Cookiefirst](https://cookiefirst.com/) - Cookieバナー、監査、マルチ言語同意管理ソリューション。無料プランでは1回のスキャンと1つのバナーが提供されます。
  * [Iubenda](https://www.iubenda.com/) - プライバシーやクッキー政策および同意管理。無料プランでは、プライバシーやクッキーポリシーが限定的であり、クッキーバナーも表示されます。
  * [Ketch](https://www.ketch.com/) - 同意管理およびプライバシーフレームワークツール。無料プランでは、ほとんどの機能が提供されますが、訪問者数には制限があります。

**[⬆️ Back to Top](#table-of-contents)**

## Miscellaneous

  * [BinShare.net](https://binshare.net) - コードやバイナリを生成・共有。Twitter／Facebook投稿用に美しい画像として、またはチャットやフォーラム用にリンクとして共有可能です。
  * [Blynk](https://blynk.io) - IoTデバイスの制御・構築・評価を可能にするSaaSサービス。無料開発者プランは5デバイスまで、無料クラウドとデータストレージを提供。モバイルアプリも提供されています。
  * [cron-job.org](https://cron-job.org) - オンラインのクロントークサービス。無制限のジョブは無料です。
  * [Cronhooks](https://cronhooks.io/) - タイムスケジュールまたは繰り返しのWebhookを設定。無料プランでは、5つのアドホックスケジュールが許容されます。
  * [datelist.io](https://datelist.io) - オンライン予約／予約スケジュールシステム。月間5件まで無料で利用可能で、1カレンダーを含みます。
  * [FOSSA](https://fossa.com/) - 第三者コード、ライセンス準拠、脆弱性に関するスケーラブルかつ端末から端末までの一貫した管理。
  * [Hook Relay](https://www.hookrelay.dev/) - アプリにウェブhookを追加する手間を省き、お任せサービスのキュー、リトライ（バックオフ）、ログ機能を提供。無料プランでは1日100件の配信、14日間の保管、3つのhookエンドポイントが提供されます。
  * [Hosting Checker](https://hostingchecker.co) - 任意のドメイン、ウェブサイト、IPアドレスのホスティング情報を（ASN、ISP、場所など）確認。また、複数のホスティングおよびDNS関連ツールも提供。
  * [newreleases.io](https://newreleases.io/) - GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust CargoおよびDocker Hubからの新バージョンリリースにメール、Slack、Telegram、Discord、カスタムWebhookによる通知を受信。
  * [PDFMonkey](https://www.pdfmonkey.io/) - PDFテンプレートをダッシュボードで管理し、動的データをAPIで呼び出し、PDFをダウンロード。月間300件の無料ドキュメントを提供。
  * [Pika Code Screenshots](https://pika.style/templates/code-image) - コードスニペットやVSCodeから、カスタマイズ可能な美しいスクリーンショットを生成。
  * [QuickType.io](https://quicktype.io/) - JSON、スキーマ、GraphQLから、データの迅速かつ安全な処理に必要なモデル／クラス／型／インターフェースおよびシリアライザを自動生成。JSONを任意の言語で美しい、型安全なコードに変換。
  * [readme.com](https://readme.com/) - オープンソース向けの無料で利用可能な美しいドキュメンテーション。
  * [redirect.pizza](https://redirect.pizza/) - HTTPS対応のリダイレクトを簡単に管理。無料プランでは10つのソースと月間10万回のヒットが提供されます。
  * [redirection.io](https://redirection.io/) - ビジネス、マーケティング、SEO向けのHTTPリダイレクト管理用SaaSツール。
  * [redirs.com](https://www.redirs.com/) — 自動SSL、分析、URLパス転送を備えた簡単なドメインリダイレクト。基本的な利用（5ドメインまで）は無料。
  * [RedirHub](https://www.redirhub.com/) - カスタムネームサーバー、エッジネットワーク、HTTPS、リンク監視を備えたAPI中心のURLリダイレクトインフラ。無料プランでは2ホスト名、月間10万リクエスト、自動SSL、パス転送、REST APIアクセスが提供されます。
  * [ReqBin](https://reqbin.com/) - オンラインでHTTPリクエストを送信。よく使われるリクエストメソッドにはGET、POST、PUT、DELETE、HEADがあります。ヘッダーおよびトークン認証をサポート。基本的なログインシステムを備えて、リクエストを保存できます。
  * [Smartcar API](https://smartcar.com) - 車の位置を確認し、燃料タンクやバッテリーの残量、オドメーター、ドアのロック／アンロックなどを取得できるAPI
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 指定された経度と緯度における日出と日没の時間の取得
  * [superfeedr.com](https://superfeedr.com/) - リアルタイムのPubSubHubbub準拠フィード、エクスポート、分析。カスタマイズが少ない場合、無料
  * [SurveyMonkey.com](https://www.surveymonkey.com) - オンライン調査を作成。結果をオンラインで分析。無料プランでは1つの調査に最大10問、100件の回答まで。
  * [SYNCDATE](https://syncdate.app) - Googleカレンダーとの両方向同期。無料プラン：2アカウント、イベントは無制限。
  * [UUID Generator](https://newuuid.com/) - エンタープライズクラスの品質で、UUID v1、UUID v4、UUID v7、GUID、Nil UUID、CUID v1/v2、NanoID、ULIDを即座に生成
  * [Versionfeeds](https://versionfeeds.com) - あなたの好きなソフトウェアのリリースに合わせたカスタムRSSフィード。プログラミング言語、ライブラリ、または愛用ツールの最新バージョンを1つのフィードで確認。（最初の3フィードは無料）

**[⬆️ Back to Top](#table-of-contents)**

## Remote Desktop Tools

  * [Parsec](https://parsec.app/) - 無制限のデバイスへのインストールが無料（個人使用）で、1つのデバイスに同時に最大20の接続を許可。（ゲームや低遅延作業に最適）
  * [AnyDesk](https://anydesk.com) -  3台のデバイスまで無料。セッションの数や期間に制限なし
  * [Getscreen.me](https://getscreen.me) -  2台のデバイスまで無料。セッションの数や期間に制限なし
  * [RemSupp](https://remsupp.com) - オンデマンドサポートとデバイスへの永続アクセス（無料プラン：1日2回のセッション）
  * [RustDesk](https://rustdesk.com/) - 誰でも使えるオープンソースの仮想/リモートデスクトップインフラ

**[⬆️ Back to Top](#table-of-contents)**

## Other Free Resources

  * [get.localhost.direct](https://get.localhost.direct) - より良い `*.localhost.direct` ワイルドカード公開CA署名SSL証明書（ローカル開発用）とサブドメイン対応
  * [GitHub Education](https://education.github.com/pack) - 学生向けの無料サービスのコレクション。登録が必要。
  * [Glob tester](https://globster.xyz/) - グロブパターンを設計・テストできるウェブサイト。また、グロブパターンを学ぶためのリソースも提供。
  * [Killer Coda](https://killercoda.com/) -  ブラウザ内に設置されたインタラクティブなプレイグランドで、Linux、Kubernetes、コンテナ、プログラミング、DevOps、ネットワークを学習。
  * [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) - Microsoft 365プラットフォーム向けに解決策を構築するために必要な無料サンドボックス、ツール、その他リソースを提供。サブスクリプションは90日間の [Microsoft 365 E5 Subscription](https://www.microsoft.com/microsoft-365/enterprise/e5)（Windowsは除く）で、継続可能。開発活動（テレメトリデータとアルゴリズムで測定）がある場合、自動更新されます。
  * [MySQL Visual Explain](https://mysqlexplain.com) - 理解しやすく、無料のMySQL EXPLAIN出力可視化ツールで遅いクエリを最適化。
  * [RedHat for Developers](https://developers.redhat.com) - Red Hat製品（RHEL、OpenShift、CodeReadyなど）への無料アクセス。開発者専用。個人プランのみ。参考用の無料電子書籍も提供。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) - 無料でテストSMSを送受信。
  * [SimpleBackups.com](https://simplebackups.com/) - サーバーおよびデータベース（MySQL、PostgreSQL、MongoDB）のバックアップ自動化サービス。AWS、DigitalOcean、Backblazeといったクラウドストレージプロバイダーに直接保存。1回のバックアップ分を無料プランで提供。
  * [SimpleRestore](https://simplerestore.io) - 手間なくMySQLのバックアップを復元。コードやサーバーなしで、任意のリモートデータベースにMySQLのバックアップを復元。
  * [SnapShooter](https://snapshooter.com/) - DigitalOcean、AWS、LightSail、Hetzner、Exoscale向けのバックアップソリューション。S3ベースのストレージに直接データベース、ファイルシステム、アプリケーションのバックアップをサポート。1リソースに対して毎日バックアップを実施する無料プランを提供。

**[⬆️ Back to Top](#table-of-contents)**
