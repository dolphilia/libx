---
title: "Awesome Sitecore"
description: "Sitecoreを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-MartinMiles-Awesome-Sitecore-readme-md"
---

# Awesome Sitecore

Sitecoreを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [分析](#analytics)
- [監査とパフォーマンス](#audit-and-performance)
- [Azure](#azure)
- [キャッシュ](#cache)
- [CDP](#cdp)
- [コマース](#commerce)
- [構成](#configuration)
- [コンテナー](#containers)
- [Content Hub](#content-hub)
- [Content Hub One](#content-hub-one)
- [Content SDK](#content-sdk)
- [コンテンツ検索](#content-search)
- [データ](#data)
- [Data Exchange Framework](#data-exchange-framework)
- [デモ](#demo)
- [配備](#deployment)
- [Edge](#edge)
- [編集](#editing)
- [コンテンツエディターの拡張](#extending-content-editor)
- [フィールド](#fields)
- [フォーム](#forms)
- [フレームワーク](#frameworks)
- [GraphQL](#graphql)
- [JAMstack](#jamstack)
- [JSS](#jss)
- [ヘッドレス](#headless)
- [Helix](#helix) 
- [アイコン](#icons)
- [統合](#integration)
- [アイテムリソースファイル](#item-resource-files)
- [言語](#languages)
- [ログ](#logging)
- [保守](#maintenance)
- [マーケットプレイス](#marketplace)
- [メディア](#media)
- [.NET Coreヘッドレス](#net-core-headless)
- [ORM](#orm) 
- [その他](#other)
- [パッケージ化](#packaging)
- [パイプライン](#pipelines)
- [公開](#publishing)
- [ルール](#rules)
- [SDK](#sdk)
- [セキュリティ](#security) 
- [SEO](#seo) 
- [シリアライズ](#serialization) 
- [Sitecore Host](#sitecore-host)
- [Sitecore Search](#sitecore-search) 
- [Sitecore Send](#sitecore-send) 
- [SPE（Sitecore PowerShell Extension）](#spe-sitecore-powershell-extension)
- [SPEAK](#speak)
- [SXA（Sitecore Experience Accelerator）](#sxa-sitecore-experience-accelerator)
- [テスト](#testing)
- [テンプレート](#templates)
- [ツール](#tooling)
- [Universal Tracker](#universal-tracker)
- [Web API](#webapi) 
- [ワークフロー](#workflows)
- [xConnectとxDB](#xconnect-and-xdb)
- [XM Cloud](#xm-cloud)

> **Awesome Sitecore**は、役立つGitHubリポジトリの分類とレビューに限定したリストです。
>
> 記事、ブログ投稿、動画、Q&Aを含む包括的な一覧は、[Sitecore Link](https://Sitecore.Link)ナレッジベースを参照してください。

## 分析

- [Sitecore Goal Description](https://github.com/islaytitans/SitecoreGoalDescription) - 経験プロフィールにゴールの説明を表示する
- [Sitecore Goal Conversion Demo](https://github.com/martinrayenglish/GoalConversions.Demo) - 訪問者がサイトに交互作用した際にトリガーされたゴールデータを、セッション終了後も取得し、外部システムに送信することで、マーケターに顧客やリードがサイト上で何をしているかを通知する方法を示す
- [Custom Timeline Eras](https://github.com/coreyasmith/sitecore-custom-timeline-eras) - Sitecoreの経験プロフィールのタイムラインに、カスタム結果をエラスとして表示し、結果をトリガーする方法を示す

## 監査とパフォーマンス

- [Skillcore.Stats](https://github.com/marek-musielak/Skillcore.Stats) - Sitecore MVCのレンダリングやAPI呼び出しに関するすべての詳細なタイム情報の収集
- [Sitecore.Boost](https://github.com/cardinal252/Sitecore.Boost) - このリポジトリには、Sitecoreプラットフォームのパフォーマンス向上に向けた多くのパッチが含まれており、その多くは現行のSitecoreインスタンスで運用中です
- [Sitecore.Cleanup](https://github.com/martinrayenglish/Sitecore.Cleanup) - このモジュールは、イベントキュー、発行キュー、履歴テーブルの3つのモニタリングエージェントから構成されており、それぞれのキューが設定されたしきい値を超えないように監視します
- [SitecoreDXG: The Documentation Experience Generator](https://github.com/zkniebel/SitecoreDXG) - SitecoreUMLファミリーから提供されるSitecoreテンプレートアーキテクチャの可視化およびドキュメンテーションツール。StarUML（SitecoreUMLもそのベースにしている）に関連するオープンソースAPIを活用し、Sitecoreインスタンス（PaaSおよび非PaaSいずれも対応）に存在するSitecoreUMLサービスをもとに、テンプレートデータモデルアーキテクチャ図およびHTMLドキュメンテーションを生成できるように支援しています
- [sitecore-assembly-lists](https://github.com/richardszalay/sitecore-assembly-lists) - Sitecoreが8.2 Update 5以降のリリースからアセンブリ一覧情報を提供開始しました。このプロジェクトは、インストール時のアセンブリ一覧の検証および開発プロセス中のアセンブリ一覧の検証を行うためのツールを提供します

## Azure

- [ARM templates for Sitecore](https://github.com/Sitecore/Sitecore-Azure-Quickstart-Templates) - 現在利用可能なすべてのAzureリソースマネージャーテンプレート
- [Sitecore Azure Scripts](https://github.com/robhabraken/Sitecore-Azure-Scripts) - Azureに関連するPowerShellスクリプトおよびARMテンプレート。これらは、あなたのスクリプトやニーズに使用するテンプレートまたはベースラインとして活用できます
- [Sitecore Azure Content](https://github.com/olegburov/Sitecore-Azure-Content) - Microsoft AzureクラウドプラットフォームへのSitecoreソリューションの自動デプロイ方法に関する記事
- [Sitecore Advanced Azure Devops](https://github.com/JeffDarchuk/AdvancedSitecoreAzureDevops) - Azure上でSitecoreを拡張するための柔軟かつ汎用的なスクリプト（有効なPowerShell Azureセッションが接続され、利用可能である必要があります）
- [Language Understanding (LUIS) Samples](https://github.com/Azure-Samples/cognitive-services-language-understanding) - 言語理解インテリジェントサービス（LUIS）のサンプル
- [Sitecore Media Azure Blob Storage provider](https://github.com/ivansharamok/Sitecore.Media.AzureBlobStorage) - SitecoreメディアライブラリのアセットをAzure Blobストレージアカウントに保存できるようにする
- [CloudMediaLibrary](https://github.com/jammykam/Sitecore-CloudMediaLibrary) - Sitecoreメディアライブラのアセットをクラウドストレージに保存し、提供できるようにする
- [SitecoreCognitiveServices](https://github.com/smithc/SitecoreCognitiveServices) - Microsoftの認知サービスをSitecoreに統合するSDK
- [Sitecore Publishing Service Azure Templates](https://github.com/coreyasmith/sitecore-publishing-service-azure-templates) - Azureリソースマネージャー（ARM）テンプレートで、Sitecore Azure PaaS環境にSitecore発行サービスをインストールする
- [Sitecore Diagnostics](https://github.com/BasLijten/SitecoreDiagnostics) - Sitecore診断をApplication Insightsを使用して行う
- [Application Insights Annotations](https://github.com/BasLijten/sitecore-application-insights-annotations) - App Insightsのアノテーションを作成する

## キャッシュ

- [Cache Tuner](https://github.com/KayeeNL/CacheTuner) - このモジュールは、Sitecoreキャッシュガイドに記載されたルールを実装したもの
- [Caching Manager](https://github.com/jbluemink/SitecoreCachingManager) - Sitecore 10のキャッシュ管理を簡単に行えるコンソール
- [Cache Processing Instance](https://github.com/ParTech/Cache-Processing-Instance) - 専用のHTMLキャッシュ処理インスタンスの概念実証
- [ExperienceEditorCache](https://github.com/marek-musielak/Skillcore.ExperienceEditorCache) - Sitecore Experience Editorとの作業をより快適にするキャッシュモジュール
- [ManualHtmlCacheClearer](https://github.com/TwentyGotoTen/ManualHtmlCacheClearer) - Sitecoreクライアントからローカルおよびリモートインスタンスの特定のHTMLキャッシュをクリア
- [CacheCounters](https://github.com/matthewkenny/CacheCounters) - Sitecoreキャッシュサイズ情報をWindowsパフォーマンスカウンターに報告
- [Sitecore Rules-Based Output Caching](https://github.com/zkniebel/Sitecore-Advanced-Output-Caching) - ルールベースのSitecore出力キャッシュの変動サポートを提供し、パーソナライズされたコンポーネントや複雑なキャッシュ変動論理が必要な他のコンポーネントのキャッシュを可能にする
- [Dictionary Flush Partial Cache](https://github.com/jbluemink/DictionaryFlushPartialCache) - Sitecore辞書項目の変更時に部分HTMLキャッシュをフラッシュ

## CDP

- [Sitecore CDP Serializer](https://github.com/dylanyoung-dev/sitecore-cdp-serializer) - Node.jsツールで、CDPおよびPersonalizeアセットをハードディスクにシリアライズし、その内容を元に戻すことを目的としたもの。

## コマース

- [Reference Storefront](https://github.com/Sitecore/Reference-Storefront) - Sitecore リファレンス ストアフロント
- [Commerce Sample Plugins](https://github.com/Sitecore/SitecoreCommerce) - Sitecore Commerce Pluginsのサンプルコード（XC 9.0.3および9.0.1向け）
- [HabitatHome Commerce](https://github.com/Sitecore/Sitecore.HabitatHome.Commerce) - XPおよびXC上でHelixアーキテクチャの原則を適用したSXAによる例
- [sitecore-commerce-configuration](https://github.com/richardszalay/sitecore-commerce-configuration) - Sitecore Commerce Engineの設定を構成および起動するためのツール
- [Plumber for Sitecore Commerce](https://github.com/richardszalay/plumber-sc) - Sitecore Commerce Engine設定を確認するツール
- [Short Confirmation Codes](https://github.com/dsolovay/ShortConfirmationCodes) - 6桁の確認コード（設定可能）をランダムに生成し、コンメルスデータベースに追跡することで、衝突を回避。短いコードはサポート通話や一部のクライアントにとって、デフォルトの25桁の確認コードよりも使いやすい場合がある
- [Sitecore Commerce Engine Fedex plugin](https://github.com/XCentium/SC-Plugin-FedEx) - ユーザーがFedExを輸送方法として統合できる機能
- [Sitecore Commerce Engine USPS plugin](https://github.com/XCentium/SC-Plugin-USPS) - ユーザーがUSPSを輸送方法として統合できる機能
- [Sitecore Commerce Engine UPS Address Validation plugin](https://github.com/XCentium/SC-Plugin-UPS-Address-Validation) - 輸送先住所または請求先住所の検証を可能にし、商品の配送体験を向上させる

## 構成

- [Sitecore configuration consolidator (offline ShowConfig)](https://github.com/ParTech/ScShowConfig) - Sitecore設定ファイルを統合するシンプルなコンソールアプリ
- [XDT Transform playground)](https://akarzazi.github.io/xdt-playground) - .NET設定ファイルのXDT変換を試行・テストできるIDE環境

## コンテナー

- [Repository of Sitecore Docker images](https://github.com/Sitecore/docker-images) - Sitecoreの最新バージョン向けに独自のDockerイメージを構築できる
- [Windows Docker Machine](https://github.com/StefanScherer/windows-docker-machine) - MacBook上でWindowsコンテナを使用できるDockerマシンを構築するVagrant環境
- [Sitecore Containers Prerequisites](https://github.com/nickwesselman/sitecore-containers-prerequisites) - サイトコアコンテナの互換性を確認し、Hyper-Vを有効にし、Sitecore 10.1を含むソフトウェアをダウンロードしてインストール
- [Sitecore Docker Examples](https://github.com/Sitecore/docker-examples) - Sitecore 10.*の最新バージョン向けの公式Docker例イメージ。'getting-started' XP0コンテナ環境を含む。
- [Container Deployment](https://github.com/Sitecore/container-deployment) - Sitecoreコンテナのデプロイ方法をさまざまな方法で示す例。
- [Lighthouse Demo](https://github.com/Sitecore/Sitecore.Demo.Platform) - 最新のXP 10.0デモ（SXA 1-0を使用）。Dockerコンテナ内でのみ展開可能。
- [Sitecore MVP](https://github.com/Sitecore/MVP-Site) - Sitecore 10とSXAを用いてコンテナ内で動作する実際のSitecore MVPサイトのソースコード。
- [Packer for Sitecore](https://github.com/asmagin/sitecore-packer) - リポジトリには、Windows上でIISとSQL Serverを搭載したローカルSitecoreホスティング環境のPackerテンプレートが含まれており、SOLRとSitecore 9.0を用いて仮想マシンイメージおよびVirtualBox用のVagrantボックスを生成。
- [Docker SOLR with SSL](https://github.com/LaubPlusCo/docker-solr-ssl) - SSLを使用したSolrを搭載したホスト上でLinuxコンテナを簡単な設定で構築する。
- [Sitecore Docker Tools](https://github.com/sitecore/docker-tools) - SitecoreをDocker環境で開発する際の開発体験を向上させるユーティリティセット。Sitecoreコンテナビルド時に使用できる開発スクリプトとエントリーポイント、およびSitecoreコンテナホスト上でSitecore Docker環境を初期化するためのPowerShellモジュール。
- [Konabos Docker Examples](https://github.com/konabos/konabos-docker-examples) - Sitecoreが公式に提供しているもの以外のサンプルコンポジットファイルおよび関連設定。
- [Container Asset Image Creator Module](https://github.com/KayeeNL/sitecore-module-docker-asset-image-creator) - 指定されたSitecoreモジュールに対してDocker Asset Imageの自動作成を処理するスクリプト。
- [Containers & AKS](https://github.com/bplasmeijer/Sitecore-Symposium-2020-Containers-AKS) - Sitecore 10をAzure AKSへさらに進化させる。
- [PaaS to AKS](https://github.com/robhabraken/paas-to-aks) - Sitecore 10.0.*をAzure AKSにデプロイするためのテンプレートプロジェクト。Azure PaaSアーキテクチャから導入されたもので、Sitecoreを運用するためのARMテンプレート（外部データサービス）と、Sitecore k8sを生産環境で運用するために必要なスクリプト、およびSitecoreをAKS上で運用するための完全なインフラストラクチャ-as-Codeセットアップをサポート。
- [Sitecore Deployment on Kubernetes Example](https://github.com/georgechang/sitecore-k8s) - Sitecore 10.1 XP0をAKSにSolrCloudでデプロイする例。以下のデプロイが行われる：1) Sitecore 10.1 XP0；2) Microsoft SQL Server 2019；3) Zookeeper 3.4（3レプリケーション）；4) Solr 8.4（3レプリケーション）
- [Sitecore Module Docker Asset Image Creator](https://github.com/KayeeNL/sitecore-module-docker-asset-image-creator) - 指定されたSitecoreモジュールに対してDocker Asset Imageの自動作成を処理するスクリプト
- [Test Sitecore Packages](https://github.com/michaellwest/test-sitecore-packages) - Dockerイメージのビルドまたはコンテナの起動後にパッケージを迅速かつ簡単にインストールできる方法を提供。モジュール開発者や、XMの標準インスタンスでビルドアーティファクトが正常に動作することを確認する必要があるチームに有効。XM、SPE、SXA、および任意のカスタムモジュールZIP/scwdpまたは一般のZIPファイルをサポート。

## Content Hub

- [Content Hub CLI](https://github.com/Sitecore/content-hub-cli) - Sitecore Content Hub CLIのソースコードを含むリポジトリ。
- [Sitecore Content Hub Importer](https://github.com/vasiliyfomichev/content-hub-importer) - Sitecore Content Hub Asset Importer：さまざまなデータソースから画像資産をSitecore Content Hubにインポートできる。
- [schguild](https://github.com/sitecoreguild/schguild) - Sitecore Content Hubの学習や作業を支援するツールおよびサンプルコードを提供。
- [Sitecore.ContentHub.Twitter](https://github.com/josedbaez/Sitecore.ContentHub.Twitter) - Sitecore Content Hub CMPからツイートする方法を示す。
- [Sitecore.SharedSource.CMP.Connector.Extensions](https://github.com/josedbaez/Sitecore.SharedSource.CMP.Connector.Extensions) - Sitecore CMP 2.0.0向けのSitecore Connectを拡張し、CMPエンティティに設定された画像をSitecore Connect™がSitecore DAM 2.0.0で使用するXMLフォーマットで同期できるようにする。このモジュールは必須。
- [Starter Kit for Content Hub with Next.js and GraphQL](https://github.com/konabos/Next.js-Starter-kit-using-GraphQL-and-Sitecore-Content-Hub-Content-as-a-Service) - コンテンツ・ハブ・ヘッドレス・スタートキット
- [Focal point cropping](https://github.com/robhabraken/content-hub-focal-point-cropping) - コンテンツ・ハブ用のフォーカルポイントカropping
- [VS Solution Example for Content Hub](https://github.com/Sitecore/ContentHub-VS-Solution-Example) - Visual Studioソリューションの例（ダウンロード可能）で、コンテンツ・ハブ開発をベースに構築できるように、インテリセンス、スクリプトの同期、デバッグ、ユニットテストを提供

## Content Hub One

- [Content Hub ONE examples](https://github.com/Sitecore/contenthubone-examples) - コンテンツ・ハブ・ワンを用いたさまざまな例のセット
- [Sitecore.Demo.CHONE](https://github.com/Sitecore/Sitecore.Demo.CHONE) - サイトコア・デモ・ソリューションチームが作成したコンテンツ・ハブ・ワンのすべてのデモのリポジトリ。PLAY メディア Next.js ウェブサイトおよびPLAY メディア モバイルアプリケーションを含む。
- [Content Hub ONE Next.JS Starter Kit](https://github.com/Sitecore/content-hub-one-nextjs-starterkit) - スタートキットには、GraphQL JSON出力のHTMLへの変換（富テキスト、メディアフィールド、参照）などのヘルプ機能が含まれており、開発者が自社プロジェクトを開始する際に使える小さな実装例も含まれている。

## Content SDK

- [Sitecore Content SDK](https://github.com/Sitecore/content-sdk) - すべてのサイトコア・コンテンツ・SDKパッケージおよびテンプレートのソースコード。サイトコア・コンテンツ・SDKの使用を開始するためのサポート。
- [XM Cloud Front End Application Starter Kits](https://github.com/Sitecore/xmcloud-starter-js) - このコンテンツ・SDKリポジトリには、サイトコア・XMクラウド開発用の複数のNext.jsスタートキットおよびSPAスタートアップ（ノードプロキシアプリケーションとSPAスタートアップアプリを含む）が含まれている。

## コンテンツ検索

- [Sitecore spatial geojson polygons](https://github.com/josedbaez/sitecore-spatial-geojson-polygons) - SolrインデックスにGeoJson多角形を交差するポイントをクエリできるLINQ拡張の実装。デモには、空間フィールドを備えたテンプレート、OpenStreetMapからいくつかの都市をカバーする多角形を持つサンプルアイテム、およびクエリ文字列から緯度経度を読み取り、見つかったアイテムの多角形を返すコントローラーが含まれている。
- [Sitecore Solr Schema](https://github.com/konabos/solr-sitecore-schema) - Solr 8.1.1および8.4.0用のサイトコア設定セット（スキーマ）
- [Search Index Builder](https://github.com/jermdavis/SearchIndexBuilder) - Sitecoreウェブアプリの外側から検索インデックスを再構築できるツール。特に長時間のビルドに適している。
- [SolrCloud Install Scripts](https://github.com/jermdavis/SolrCloud-Helpers) - Windows上でSolrクラスタのインストールを支援するPowerShellスクリプトライブラリ
- [Docker SolrCloud for Sitecore 10](https://github.com/jermdavis/Sitecore-SolrCloud-Docker) - Dockerで使用できるSolrクラウドコンテナを作成。このファイルは、サイトコアDocker例リポジトリ内のSolrコンテナファイルから調整されたもの。サイトコアが提供するデフォルトの"solr"サービスは、これらのファイルで置き換え可能。
- [Sitecore SolrProxy](https://github.com/Antonytm/Sitecore.SolrProxy) - Sitecore CMにアクセスできる場合のみ、Solr管理コンソールへの簡単なアクセスツール。
- [Common Sitecore ContentSearch extensions](https://github.com/LaubPlusCo/LaubPlusCo.Common.ContentSearch) - サイトコアコンテンツ検索に共通の拡張機能。ここに、PopulateSolrSchemaパイプラインプロセッサが含まれており、サイトコアにインストールされたすべての言語がSolr管理スキーマに追加されるようにする。
- [Sitecore Computed Search](https://github.com/martinrayenglish/Sitecore-Computed-Search) - インデックス検索開発アクセラレーター。開発者は、インデックスに計算検索フィールドを宣言できるようになり、その範囲内のアイテムのターゲットフィールド値や、そのプレゼンテーションに含まれる特定のテンプレートのアイテムのフィールド値をキャプチャ・ストレージできる。さらに、これらの計算フィールドに検索ブーストを適用することで、コンテンツマッチング検索語を検索結果に強調できる。
- [sitecore-azure-search-compat](https://github.com/richardszalay/sitecore-azure-search-compat) - サイトコア＋Azure検索用の互換性パッチ

## データ

- [SitecoreDataImporter](https://github.com/markstiles/SitecoreDataImporter) - データベースデータおよびサイトコアコンテンツをサイトコアにインポートするために使用。
- [SitecoreEzImporter](https://github.com/dresser/SitecoreEzImporter) - SPEAK UIを使用したサイトコアCMS用のデータインポートツール。

## Data Exchange Framework

- [Gutters for Sitecore Data Exchange Framework](https://github.com/KayeeNL/Sitecore.DataExchange.Gutters) - DEF用に3つのグリットを収集し、ツリー内のアイテムのコンテキスト項目を迅速に解決するためのもの：`ItemDisabled`、`PipelineBatch`および`PipelineStep`。
- [Data Exchange Framework Docs](https://github.com/Sitecore/Data-Exchange-Framework-Docs) - Sphinxを使用して生成されたSitecore Data Exchange Frameworkドキュメント。

## デモ
- [Sitecore Habitat](https://github.com/Sitecore/Habitat) - Habitatは、ヘルキスアーキテクチャの原則に基づいたサイトコアの例ソリューション。更新またはメンテナンスされず、サイトコア・ヘルキス・例を代わりにしている。
- [Sitecore Helix Examples](https://github.com/Sitecore/Helix.Examples) - さまざまなツールやビジネスシナリオにおけるサイトコアヘルキスの実装例を示すデモンストレーション。既存の例よりも多様な実装タイプや要件を示すことを目的としています。
- [Lighthouse Demo](https://github.com/Sitecore/Sitecore.Demo.Platform) - 最新のXP 10.0デモ（SXA 1-0を使用）。Dockerコンテナ内でのみ展開可能。
- [Sitecore.Demo.Headless](https://github.com/Sitecore/Sitecore.Demo.Headless) - Sitecore JSS PWAデモ資産および将来の「Sitecore Headless」関連デモ資産。
- [Sitecore MVP](https://github.com/Sitecore/MVP-Site) - Sitecore 10とSXAを用いてコンテナ内で動作する実際のSitecore MVPサイトのソースコード。
- [Sitecore.HabitatHome.Utilities](https://github.com/Sitecore/Sitecore.HabitatHome.Utilities) - Sitecore Experience Platformのインストール、Sitecore Experience Commerceのインストール、Sitecoreモジュールのインストール、Sitecoreインスタンスのウォームアップ、Sitecoreインスタンスのセキュリティ強化など、さまざまな作業を支援するユーティリティやスクリプトのコレクション。
- [Sitecore.HabitatHome.Commerce](https://github.com/Sitecore/Sitecore.HabitatHome.Commerce) - 外部の貢献者やパートナーが提供したデモ資産。
- [Sitecore.HabitatHome.Omni](https://github.com/Sitecore/Sitecore.HabitatHome.Omni) - Sitecore JSS PWAデモ資産および将来の「Sitecore Omni」関連デモ資産を共有。
- [Sitecore.Demo.Group](https://github.com/Sitecore/Sitecore.Demo.Group) - Habitat Groupデモサイト — Habitatベースのデモの開発者向け例。
- [Sitecore User Group UK](https://github.com/steviemcg/scuguk) - Gitをシングルソースオブトラウスとして、Netlifyによる継続的デプロイおよびCDN配信を活用し、Gatsby v2で構築されたJAMstackアーキテクチャのデモ。
- [Sitecore DXP Demo](https://github.com/Sitecore/Sitecore.Demo.Edge) - XM、Experience Edge、Content Hub DAMおよびCMP、Content Hub Edge、JSS、CDP、Sitecore Personalize、Next.jsおよびVerc等のデモ
- [Sitecore Developer Portal](https://github.com/Sitecore/developer-portal) - Sitecore開発者ポータルはNext.js、TypeScript、Tailwind CSSで構成され、Vercel上でホスティングされている。すべてのページはビルド時に静的サイト生成（SSG）によって作成され、ページコンテンツの変更時に自動的にアプリを更新するためのインクリメンタル・スタティック・リジェネレーション（ISR）を活用している。多くのページはMarkdownで記述され、ビルド時にHTMLに変換される。使用する画像はSitecore DAMで管理され、CDNに公開される。
- [Play Summit](https://github.com/Sitecore/Sitecore.Demo.XmCloud.PlaySummit) - Play Summitデモ（XM Cloud、Content Hub DAM、CMP、Next.jsとVercelでのホスティングなど）。
- [Verticals](https://github.com/Sitecore/Sitecore.Demo.XMCloud.Verticals) - XM Cloudコンテンツとサイト管理機能に焦点を当てたヘッドレスマルチサイトソリューション。特定業界向けに簡単にカスタマイズ可能なサンプルサイトを含む。
- [Developer Portal](https://github.com/Sitecore/developer-portal) - Sitecoreのデモに関するプロジェクト・ツール。
 CDNへ公開されます。

## 配備

- [PostDeploySteps](https://github.com/jst-cyr/NonlinearPostDeploySteps) - TDSと使用するポストデプロイステップ。1）TDSの例プロジェクト（ポストデプロイステップをトリガーする）；2）デプロイステップを読み込むためのサンプルWebプロジェクト；3）ソリューションに追加できるDeployStepクラスライブラリ。
- [Sitecore Devops with AppVeyor](https://github.com/steviemcg/Sitecore.Devops.AppVeyor) - オープンソースのSitecoreモジュールの開発方法を示すサンプルソリューション。AppVeyor（クラウド上にホスティングされた継続デリバリーソリューション）と連携する方法を示す。
- [Cake.Sitecore](https://github.com/asmagin/Cake.Sitecore) - HelixベースのSitecoreプロジェクトのCI/CD構成を簡略化するために使用できる、事前ビルド[CAKEビルド]タスクのセットを提供。

## Edge

- [Sitecore Demo Edge](https://github.com/Sitecore/Sitecore.Demo.Edge) - Sitecore Edge for Content HubおよびExperience Managementの主なリポジトリ。

## 編集

- [Sitecore Sweep](https://github.com/Kasaku/Sitecore.Sweep) - Sitecore向けのシンプルかつ拡張可能なモジュールで、アイテム内のHTMLの自動クリーニングを実現。

## コンテンツエディターの拡張

- [Copy Version module](https://github.com/ParTech/Copy-Version) - コンテンツエディタにコマンドを追加し、ユーザーがアイテムの最新バージョンをコピー・ペーストできるようにする。インストール後、コンテンツツリーのコンテキストメニューから「バージョンのコピー」と「バージョンのペースト」コマンドが利用可能になる。
- [Browse Command](https://github.com/ParTech/Browse-Command) - コンテンツツリーからアイテムを開くためのコマンドを追加。Sitecoreでは標準でこの機能は提供されていない（プレビューコマンドを除く）が、プレビューモードに入るのではなく、アイテムを開くことができるようになる。
- [Expand Descendants Command](https://github.com/ParTech/Expand-Descendants-Command#expand-descendants-command) - コンテンツツリーからアイテムのすべての子孫を展開できるコマンドを追加。
- [Environment Styler for Sitecore](https://github.com/jammykam/Environment-Styler-for-Sitecore) - Sitecoreのログイン画面およびヘッダーのスタイル（およびテキスト）を環境ごとに設定。
- [InsertOptionsLoophole](https://github.com/TwentyGotoTen/InsertOptionsLoophole) - サイトコアのユーザーが挿入オプションをスキップするのを防ぐ
- [ScopeToThis](https://github.com/ianjohngraham/Coreblimey.ScopeToThis) - サイトコアコンテンツエディタのツリー上で、Visual Studioのように「このスコープに」の機能を提供
- [DeviceEditorShortcuts](https://github.com/MartinMiles/DeviceEditorShortcuts) - デバイスエディタにおける生産性向上のため、データソースが特定のコンポーネントに設定されている場合にデータソースを表示し、ポップアップクリックでプレビューを行う
- [DmsGutters](https://github.com/markvanaalst/Sitecore.SharedSource.DmsGutters) - コンテンツエディタのグリットにテスト済みおよびパーソナライズされたアイテムを示す
- [Move Validator](https://github.com/Velir/Sitecore-MoveValidator) - 挿入オプションに基づいてアイテムが新しい場所に移動できるかどうかを検証
- [SitecoreFieldSuite](https://github.com/Velir/SitecoreFieldSuite) - サイトコアのユーザーに、コンテンツ作成に対してよりスムーズで情報的なアプローチを提供。これは、5つのフィールドタイプをリバイバルし、画像フィールドを導入し、参照アイテムの自動配信を可能にし、編集フォーム、アイテムへ移動ボタン、フィールドグリットといった新機能を追加することで達成される
- [Sitecore Smart Commands](https://github.com/AlenPelin/Sitecore-Smart-Commands) - コンテンツエディタにスマートなコピー、複製、クローンコマンドを含む共有ソースモジュール。これにより、デフォルトで欠落していた機能を実装する
- [CopyPageToVersions](https://github.com/merkle-open/SitecoreCopyPageToVersions) - コンテンツエディタおよび経験エディタに拡張し、コンテンツエディタが特定のバージョンのページを、選択可能な言語バージョンのリストにコピーできるダイアログを提供します。ページレンダリングで参照されているすべてのデータソースも含みます。
- [Sitecore-TinyMCERTE](https://github.com/EmanueleCiriachi/Sitecore-TinyMCERTE) - サイトコアコントロールで、デフォルトのエディタをTiny MCEエディタに置き換える

## フィールド

- [Sitecore.Foundation.Fields](https://github.com/MartinMiles/Sitecore.Foundation.Fields) - Sitecoreソリューションに即座に使えるカスタムフィールドのコレクション
- [LinkList](https://github.com/josedbaez/Monoco.CMS.FieldTypes) - サイトコアリンクリストフィールドタイプ
- [CrossDatabaseTreeListField](https://github.com/ivansharamok/CrossDatabaseTreeListField) - クロスデータベース参照をサポートする拡張されたTreelistフィールド
- [LimitedText Field](https://github.com/ParTech/LimitedText-Field-Controls) - サイトコアコンテンツエディタに、シングルラインテキスト制限とマルチラインテキスト制限の2つの新しいフィールドタイプを追加。両方とも既存のテキストフィールドコントロールからすべての機能を継承し、フィールドに最大許容値を設定できるようにし、編集中に残りの文字数をユーザーに通知する
- [CustomFields](https://github.com/AlexanderDavyduk/CustomFields) - NameValueDropLists、NameValueDropListsField、NameValueDroplist、NameValueDroplistField、SortableMultilist、SortableMultilistField、TimeZonesDropListフィールドの選択
- [YouTube Video Picker Field](https://github.com/pveller/BrainJocks.YouTubeVideoField) - サイトコア用のYouTube動画選択フィールドの完全に動作するソリューション
- [Hide Dependent Fields Controls](https://github.com/jammykam/Hide-Dependent-Fields) - サイトコアコンテンツエディタに、選択された値に応じて次の兄弟フィールドを非表示にするチェックボックス、ドロップリスト、ドロプラインフィールドタイプを追加。すべてのコントロールは、同等のサイトコアコントロールから継承し、必要なUI強化を追加する
- [icon-selector-field](https://github.com/Wesley-Lomax/icon-selector-field) - サイトコア用のカスタムアイコン選択フィールド
- [ImageSelector](https://github.com/markvanaalst/Sitecore.SharedSource.ImageSelector) - サイトコア用の画像選択フィールドで、TreeListExフィールドに基づいて複数の画像を選択・プレビューを行う

## フォーム

- [Sitecore-Forms-Extensions](https://github.com/bartverdonck/Sitecore-Forms-Extensions) - フォーム作成者に、メール送信、期間検証、リストのサブスクリプション、条件、Azure Blobストレージプロバイダーなど、多くの機能を追加
- [WFFM Conversion Tool](https://github.com/afaniuolo/WFFM-Conversion-Tool) - Web Forms For Marketers（WFFM）アイテムおよびそのデータをSitecoreフォームに変換・移行するための自動化されたコンソールアプリケーション
- [SendMail for Experience Forms](https://github.com/KayeeNL/Sitecore.ExperienceForms.Modules.SendMail) - サイトコア9フォームに新しい「Eメール送信アクション」を追加し、MainUtil.SendMailメソッドを使用してEメールを送信できるようにします。このメソッドは、HTMLまたはプレーンテキスト形式でSMTPサーバーを介してEメールを送信します。
- [Forms Cloud Upload](https://github.com/jbluemink/Sitecore-Forms-Cloud-Upload) - Azure Storage QueueおよびAzure Storage Blobを使用して、サイトコア9.3以降のフォームアップロードデータを暗号化して保存できます。Azure Key Vaultから取得したキーを使用することで、ユーザーがセンシティブなデータをアップロードした際に、コンプライアンスを確保できます。

## フレームワーク

- [NitroNet for Sitecore](https://github.com/merkle-open/NitroNetSitecore) - すべてのプレゼンテーションシナリオを処理し、Razor ViewではなくHandlebarsフロントエンドをSitecoreに統合するためのもので、機能の損失なく生産性を向上させる。

## GraphQL

- [Sitecore GraphQL Import](https://github.com/jbluemink/Sitecore-GraphQL-Import) - Sitecore GraphQL APIのさまざまな機能を示すC#コンソールアプリデモ。Sitecoreアイテムの取得、ウェブサイト一覧の取得、サンプルアイテムの挿入、メディアファイルのアップロードなどが含まれる。

## JAMstack

- [Next.js Starter kit using GraphQL and Sitecore Experience Edge for Content Hub](https://github.com/konabos/Next.js-Starter-kit-using-GraphQL-and-Sitecore-Content-Hub-Content-as-a-Service) - Sitecore Experience Edge Content as-a-Serviceアプローチの素晴らしい例で、ReactをベースにNextJSを使用し、最新のContent Hubのデモインスタンスを活用しています。
- [Uniform, JSS and Next.js starter kit](https://github.com/uniformdev/sitecore-jss-nextjs-starterkit) - Uniform、JSS、Next.JSのスターターキットにコンテンツアイテムと必要な設定ファイルを含み、シンプルなプロジェクトを開始するのに最適です。

## JSS

- [sugcon-2019-jss-examples](https://github.com/chaturangar/sugcon-2019-jss-examples) - SugCon 2019のJSSサンプル。
- [SitecoreQL](https://github.com/kmazzoni/SitecoreQL) - サイトコア向けのGraphQL実装例。たとえば、サイトコアのコンテンツ検索APIに対してクエリを実行できます。
- [JSS React Starter Application](https://github.com/altola/sitecore-jss-react-basic) - 最新のJSSドキュメントについては、主なJSSドキュメント (https://jss.sitecore.net) を参照してください。
- ['Hello World' Starter for Sitecore JSS Tech Preview 4](https://github.com/altola/sitecore-jss-react-starter) - GraphQLを含まないサイトコアJSSの「Hello World」スターター。
- [Extensible JSON Renderings](https://github.com/coreyasmith/jss-extensible-json-renderings) - サイトコアJavaScriptサービスにおけるJSONレンダリングの拡張。
- [JavaScript Services Anti-Forgery Tokens](https://github.com/coreyasmith/jss-anti-forgery-tokens) - .NETのアンチフォージェリトークンをサイトコアJavaScriptサービスでMVCおよびWeb APIコントローラーにおいて使用する方法を示すサンプルリポジトリ。デモAPIは、離線モードで完全にモックされています。これにより、離線および接続モードでの機能がどのように動作するかを示しています。
- [How to GraphQL](https://github.com/kamsar/howtographql) - GraphQLについて学ぶためのフルスタックチュートリアルサイト。
- [JSS with Vue.js](https://github.com/KayeeNL/sitecore-jss-getting-started-vuejs) - Vue.jsフレームワークを使用したJSSのスタートテンプレート。
- [Headless Examples](https://github.com/Sitecore/headless-examples) - 価値あるサンプルを含むリポジトリ、たとえばJSS埋め込みアプリやフェデレート認証を使用したNext.js。
- [SVG Images for JSS](https://github.com/KayeeNL/Sitecore.Extensions.JSS.SVG) - サイトコアJSSでSVGタグによってレンダリングされた画像に対応する機能を追加します。
- [jss21.4-nextjs-storybook7.4](https://github.com/jflheureux/jss21.4-nextjs-storybook7.4) - Storybook 7.4を段階的に追加したサイトコアJSS 21.4のNext.jsサンプルアプリケーション。コミット履歴に記録されています。

## ヘッドレス

- [Sample](https://github.com/uniformdev/sitecore-jss-nextjs-starterkit) - ヘッドレスサンプルTODO
- [Angular JSS starter kit for XM Cloud](https://github.com/Sitecore/jss/tree/release/22.0.0/packages/create-sitecore-jss/src/templates/angular-xmcloud) - サイトコアJSS Angularスターターキットアプリ（XMクラウド用）。

## Helix

- [Sitecore Helix Documentation](https://github.com/Sitecore/Helix.Docs) - サイトコアヘルキスにおける開発ガイドおよび推奨事項（公式）。
- [Sitecore Helix Examples](https://github.com/Sitecore/Helix.Examples) - さまざまなツールやビジネスシナリオにおけるサイトコアヘルキスの実装例を示すデモンストレーション。既存の例よりも多様な実装タイプや要件を示すことを目的としています。
- [Helixbase](https://github.com/muso31/Helixbase) - グリーンフィールドプロジェクト向けのサイトコアヘルキスベースのソリューション。
- [Sitecore Foundation](https://github.com/Avanade/SitecoreFoundation) - サイトコアフレームワークは、ヘルキスモジュールアーキテクチャ設計原則に従っています。多くの機能層および基礎層モジュール、またプロジェクト層の再利用可能な共通モジュールを含んでいます。
- [Helix example Module & Solution templates](https://github.com/LaubPlusCo/Helix-Templates) - Sitecore Helix Visual Studio テンプレート拡張のテンプレート
- [Helix frontend development example](https://github.com/LaubPlusCo/helix-frontend-example) - Sitecore Helix ソリューション向けのシンプルなフロントエンド開発セットアップ
- [Helix Publishing Pipeline](https://github.com/richardszalay/helix-publishing-pipeline) - Helix ソリューションを1つの単位として公開できるようにし、モジュール（ビュー、設定パッチなど）のコンテンツが自動的に含まれるようにします。また、ローカル開発環境でのデプロイに関する最適化とガイドラインを提供しています。標準のWeb Publishing Pipelineを拡張しているため、パッケージ、ファイルシステム、Azure、Dockerなど、すべてのサポート対象ターゲットに対して、Visual Studioまたはコマンドラインから動作します。
- [CustomLinkProvider](https://github.com/TwentyGotoTen/CustomLinkProvider) - カスタム Sitecore リンクプロバイダーを非HelixからHelixに変換するデモ
- [Elision](https://github.com/sitecore-elision) - Helixの原則を実装したオープンソース Sitecore アクセラレーター
- [Helixify](https://github.com/konabos/Konabos.Helixify) - このモジュールは、任意のSitecoreプロジェクトに即時的なHelix互換性を追加するように設計されています。
- [Sitecore Foundation](https://github.com/Avanade/SitecoreFoundation) - Avanadeが提供するSitecore Frameworkは、Helixモジュラー設計原則に従っています。
- [PLAY Summit Demo](https://github.com/Sitecore/Sitecore.Demo.Edge) - XM、Experience Edge、Content Hub DAMおよびCMP、Content Hub Edge、JSS、CDP、Sitecore Personalize、Next.jsおよびVerc等のデモ

## アイコン

- [Extra People Icons](https://github.com/jermdavis/ExtraPeopleIcons) - Sitecoreインスタンスに追加の「人」アイコンを提供します。
- [sitecore-icon-build](https://github.com/richardszalay/sitecore-icon-build) - SitecoreアイコンのZIPアーカイブをビルドし、公開されたウェブサイトに含めるためのMSBuild拡張。
- [Sitecore Icons](https://github.com/Antonytm/sitecore-icons) - 1800以上のFAと2500以上のMUIアイコン（黒、青、緑、赤）を含むインストール可能なコレクション。

## 統合

- [Integration Blueprints](https://github.com/Sitecore/Integration-Blueprints) - Sitecore製品同士の統合、および第三者システムとの統合を示すサンプルコード。

## アイテムリソースファイル

- [Sitecore IAR Management](https://github.com/GAAOPS/Sitecore.IAR.Management) - アイテムをリソースとして管理するためのPowerShellスクリプト。
- [Sitecore Item as Resource Explorer](https://github.com/GAAOPS/Sitecore.Protobuf.Browser) - Sitecoreの静的データベースファイル（.dat）をブラウズできるWPFアプリケーション。

## 言語

- [Sitecore Item Translator](https://github.com/adoprog/Sitecore-Item-Translator) - アイテム翻訳モジュールは、Google翻訳をシームレスに統合しており、ボタンを押すだけでGoogle翻訳がサポートするすべての言語にテキストを翻訳できます。
- [Sitecore Item Versioner](https://github.com/aquasonic/SitecoreItemVersioner) - コンテンツエディタのバージョンのチャンクに新しいリボンを追加します。新しいリボンにより、初期設定時にすべての設定言語でアイテムバージョンを作成できます。
- [CopyPageToVersions](https://github.com/merkle-open/SitecoreCopyPageToVersions) - コンテンツエディタおよび経験エディタに拡張し、コンテンツエディタが特定のバージョンのページを、選択可能な言語バージョンのリストにコピーできるダイアログを提供します。ページレンダリングで参照されているすべてのデータソースも含みます。

## ログ

- [SitecoreRollingLogFileAppender](https://github.com/ivansharamok/SitecoreRollingLogFileAppender) - Sitecore用のLog4net RollingLogFileAppenderで、ログファイルのサイズを制限できます。
- [RabbitMQ.GEFL.Appender for Sitecore](https://github.com/asmagin/Sitecore.Logger.RabbitMQ.GelfAppender) - Sitecore.Logger用のRabbitMQログアダプタの実装。
- [Logging To Logentries](https://github.com/jammykam/Sitecore.Logentries) - アプリケーションをLogentriesにログ出力するように設定（NLog、Log4net、Serilogなどに対応）。
- [Namics.Foundation.Logger](https://github.com/merkle-open/Namics.Foundation.Logger) - ログ出力に使用できる柔軟なオプションを備えた静的メソッドのセットを提供。

## 保守

- [Admin Scripts for Development and Deploying](https://github.com/jbluemink/Sitecore-Admin-Scripts-for-Development-and-Deploying) - `/admin`フォルダの追加機能：AddAdminUser、AddEditorUser、ResetAdminPassword、FillDbWithExtranetUser、InstallUpdatePackage、InstallZipPackage、ParameterDrivenPublishおよびIsPublishTaskRunning。
- [Sitecore Instance Manager](https://github.com/Sitecore/Sitecore-Instance-Manager) - 伝説的な Sitecore Instant Manager、現在は 9.x バージョンに対応。
- [Sifon](https://github.com/MartinMiles/Sifon) - XC およびリモートマシンでのバックアップ・リカバリーツール。優れたプラグインインターフェースを備えている。Sifon は、日々の業務に必要な多くの側面をカバーするプラグインを備えた非常に強力な拡張システムを備えている。

## マーケットプレイス
- [Sitecore Marketplace Starter](https://github.com/Sitecore/marketplace-starter) - Marketplace拡張を構築するためのスタートテンプレート。5つの拡張ポイントを示しており、カスタムフィールド、ダッシュボードウィジェット、フルスクリーン、ページコンテキストパネル、スタンドアローンのそれぞれが独自のUIを持ち、Sitecore Marketplace SDKと統合されている。
- [Google Analytics](https://github.com/Sitecore/marketplace-google-analytics) - XM Cloud環境におけるGoogle Analyticsのシームレスな統合。このモジュールは、ページビューおよびアクティブユーザーのメトリクスなどのリアルタイム分析データを、Sitecore体験内に直接表示します。
- [Icon Picker](https://github.com/Sitecore/marketplace-icon-picker) - Marketplaceアイコンピッカー - カスタムフィールド拡張の作成方法を示すサンプルアプリケーション。

## メディア

- [Autocropper](https://github.com/zkniebel/Autocropper) - プレ定義されたサイズと指定された原点に基づき、レスポンシブサイト向けにカットされた画像のバージョンを自動生成。
- [Media-Framework-Brightcove-Edition](https://github.com/Sitecore/Media-Framework-Brightcove-Edition) - Brightcove と Sitecore Media Framework の接続。
- [YouTube Integration module](https://github.com/ivansharamok/YouTube-Integration) - YouTubeチャンネルの動画をサイト上に表示するための簡単な方法。YouTube統合モジュールがまさにその答えかもしれません。メディアライブラリにはYouTubeフォルダがあり、チャンネル名を入力すると、そのチャンネル内のすべての動画がアイテムとして表示され、新たにチャンネルに動画をアップロードした場合、メディアライブラリ内のチャンネ及が自動的に更新されます。
- [Shrink](https://github.com/robhabraken/shrink) - メディアライブラリの使用状況をディスク使用量統計ビューのように表示し、使用・公開されているアイテムを確認することで、データベースに不要に占有しているメディアアイテムを簡単に特定し、メディアライブラリの整理に複数の方法を提供します。
- [Dianoga](https://github.com/kamsar/Dianoga) - Sitecoreメディアライブラリ向けの自動画像最適化ツール。Sitecoreから提供される画像のサイズを8～70％削減。完全に自動実行。メディア画像が要求された際、Dianogaはその画像データがSitecoreメディアキャッシュに格納された直後に、mozjpeg、PNGOptimizer、SVGOまたはWebPを自動的に実行します。

## .NET Coreヘッドレス

- [Netcore Auth](https://github.com/robearlam/sitecore-netcore-auth) - .NET CoreヘッドレスSitecoreアプリケーションにおける認証を有効にする方法を示すリポジトリ。

## ORM

- [Glass.Mapper](https://github.com/mikeedwards83/Glass.Mapper) - Glass.Mapperは、非常に人気のあるGlass.Sitecore.Mapperプロジェクトのリデベロップメントです。このプロジェクトは、複数のCMSとの互換性を持つより強固で柔軟なソリューションを提供することを目的としています。
- [TemplateModelHelper](https://github.com/lowedown/TemplateModelHelper) - Sitecoreテンプレートモデル（Glass.Mapperまたはその他のフレームワークでマッピング）との作業に使用するヘルパーメソッド。主な目的は、開発者がSitecoreデータベースを生成されたテンプレートモデルを使って簡単にクエリできるようにすること。
- [TDS-T4-Model-Generation](https://github.com/Sitecore/TDS-T4-Model-Generation) - TDSにおけるT4モデル生成。
- [Sitecore.CodeGenerator](https://github.com/ParTech/sitecore.codegenerator) - TDSなしでT4テンプレートを使用してGlass Mapperインターフェースを生成。
- [Synthesis](https://github.com/blipson89/Synthesis) - Sitecore向けのオブジェクトマッピングフレームワーク。これにより、従来のSitecore開発に比べて開発時間を短縮し、より信頼性高く保守性の高いサイトを構築できます。Sitecoreまたは従来の.NET開発者にとっても理解しやすい、強型テンプレートオブジェクトジェネレーターです。Sitecore MVC（Synthesis.Mvcパッケージ経由）に自然に統合され、ViewレンダリングモデルプロバイダーおよびコントローラーレンダリングのIoC依存性として機能します。

## その他

- [License Expiration Module 2.0](https://github.com/KayeeNL/Sitecore.License.Expiration.Module) - Sitecoreライセンスの有効期限を確認し、コンテンツエディタに警告メッセージを表示または/および有効期限が近づいた際にメールを送信します。
- [Sitecore.SharedSource.JohnWest](https://github.com/jammykam/Sitecore.SharedSource.JohnWest) - John Westのブログ記事から導入されたSitecoreプロトタイプのコードサンプルのコレクション。
- [BLAZOR + SITECORE](https://github.com/GoranHalvarsson/SitecoreBlazor) - Sitecoreアプリケーションのクライアントサイドを実行できるようにする機能。また、HELIXコンセプトに従った、シンプルな方法を提供します。
- [Sitecore.SampleMvc](https://github.com/coreyasmith/Sitecore.SampleMvc) - デフォルトでWebフォームとXSLTで構築されたSitecoreサンプルサイトのMVCバージョン。
- [Sitecore TokenManager](https://github.com/JeffDarchuk/SCTokenManager) - RTEフィールドに動的にコンテンツを注入できるフレームワーク。
- [sxp-notifications](https://github.com/michaellwest/westco-sxp-notifications) - サイトコアにブラウザ通知を送信する
- [Sitecore Redis Session Provider](https://github.com/boro2g/Sitecore-Redis-Session-Provider) - サイトコア Redis セッションプロバイダーの実装

## パッケージ化

- [Package Autoloader](https://github.com/JeffDarchuk/PackageAutoloader) - デプロイの一部としてコンテンツをハイドレートするためのサイトコアパッケージを自動適用するツール
- [Sitecore.Ship](https://github.com/kevinobee/Sitecore.Ship) - HTTPリクエストを用いてサイトコアアップデートパッケージを軽量にインストールする方法
- [UpdatePackageInstaller](https://github.com/HedgehogDevelopment/UpdatePackageInstaller) - コマンドラインからサイトコアにアップデートパッケージをインストールする
- [Sitecore Package Deployer](https://github.com/HedgehogDevelopment/SitecorePackageDeployer) - サイトコアサーバー上のファイルシステムフォルダからアップデートパッケージを自動でデプロイするためのサイトコアジョブを使用する
- [Simplified testing of package installations](https://github.com/michaellwest/test-sitecore-packages) - パッケージのインストールを確認するためにパッケージをWDPに変換してインストールする

## パイプライン

- [Pipeline Performance Monitor](https://github.com/ParTech/Pipeline-Performance-Monitor) - サイトコアパイプラインの実行時間の測定に用いるシンプルなソリューション
- [Sitecore Processor Dependency Injection](https://github.com/coreyasmith/Sitecore.ProcessorDi) - サイトコアパイプラインプロセッサにおけるデプロイインジェクションを示すシンプルなプロジェクト

## 公開

- [Scheduled Publishing](https://github.com/HedgehogDevelopment/SCScheduledPublishing) - コンテンツエディタが、アイテムの発行を将来の時点に遅らせるオプションを提供する
- [AdvancedPublishDialog](https://github.com/Sitecore/AdvancedPublishDialog) - 拡張された標準発行ダイアログ
- [Publishing Service Azure Templates](https://github.com/coreyasmith/sitecore-publishing-service-azure-templates) - Azure PaaS環境におけるサイトコア発行サービスをインストールするARMテンプレートと、必要なWebデプロイパッケージを作成するスクリプト
- [SIF scripts to install Publishing Service](https://github.com/KayeeNL/sitecore-sif-autoinstall-publishingservice) - Sitecore Install Framework (SIF) を使用して、コンテンツマネジメントインスタンスまたはスタンドアローンインスタンス上に発行サービスと発行モジュールを自動インストールするPowerShellスクリプト
- [Publish Viewer](https://github.com/mikeedwards83/Glass.PublishViewer) - サイトコア発行CMサーバー上の発行キューを監視し、現在の状態を確認し、必要に応じて発行ジョブをキャンセルできる
- [Sitecore Power Publish](https://github.com/robhabraken/sitecore-power-publish) - 発行ボタンが、アイテムの発行を強制し、アイテムタブの発行可能なオプションの状態に関わらず、発行を行う。1) この機能は、サイト内のリンクページを発行していない場合にのみ発行せず、メディアライブラリアイテムやアイテムフィールドに使用されるデータソースなどのリソースのみを発行する。これらのリソースは、アイテムを正しく表示するために必要である。この方法は、現在のアイテムがまだ発行されていない場合でも、そのアイテムが使用するテンプレートやレイアウトを発行する。2) 発行解除ボタンは、1クリックでアイテムを発行解除できる。発行制限のアイテムタブ上の発行可能なオプションをチェックを外し、その後、完全な再発行（サブアイテムを含まない）でアイテムを発行する。3) 発行状態ボタンは、すべての発行ターゲットの発行状態を表示する。発行ターゲットが最新である場合、緑のドットが表示される。アイテムが発行ターゲットに発行され、その後アイテムが変更された場合、オレンジのドットが表示される（発行されたが、最新ではない）。発行ターゲットに現在のアイテムがまったく存在しない場合、赤のドットが表示される。この機能により、コンテンツエディタは、すべての発行ターゲットに対してコンテンツが実際に発行されているかどうかを詳細に確認できる。

## ルール

- [Page Rules](https://github.com/marek-musielak/Marek.Musielak.PageRules) - 訪問者が閲覧するページごとにカスタムサイトコアルールを作成できる。ユーザーがT&Cページを読んでいない場合、コンテストページを表示したい？特定の日付以降にページにアクセスできるようにしたい？GEO IPデータを使ってホームページの言語を自動的に変更したい？ページの翻訳が準備されていない場合、サイトコアルールエンジンでは、すべての可能性が開かれる！
- [ItemNamingRules](https://github.com/seankearney/Sitecore-ItemNamingRules) - ルールエンジンがアイテム名規則を自動化するために必要な条件とアクションを提供する。ItemNamingRulesプロジェクトを使用して、コンテンツツリーの異なるブランチに異なるアイテム名規則を適用できる。
- [MenuItemRules](https://github.com/jammykam/Konabos.SharedSource.MenuItemRules) - ルールベースのコンテキストアイテムメニューの表示制御。
- [Sitecore adaptive rules](https://github.com/boro2g/sitecore-adaptive-rules) - サイトコアルールエンジンにアダプティブルールをサポートする。条件とアクションのプロパティが互いに依存している場合に特に有用。
- [Organize Insert Options Rules](https://github.com/coreyasmith/OrganizeInsertOptionsRules) - uiGetMastersパイプラインに適用されるパイプラインプロセッサで、コンテンツツリー内でInsert Options Rulesを任意に組織できる。
- [Conditional Placeholder Settings](https://github.com/matthewkenny/ConditionalPlaceholderSettings) - Sitecore ルールエンジンが、既存のプレースホルダー設定機能をサポートできるようにするモジュール
- [Sitecore Adaptive Rules](https://github.com/adamconn/sitecore-adaptive-rules) - 条件やアクションのプロパティに相互依存がある場合に便利なアダプティブルールのルールエンジンサポート

## SDK
- [JSS](https://github.com/Sitecore/jss) - Sitecore JavaScript Services SDK の公式リポジトリ
- [Content SDK](https://github.com/Sitecore/content-sdk) - Sitecore Content SDK のすべてのパッケージおよびテンプレートのソースコード。XM Cloud での Sitecore Content SDK の利用を開始するためのサポートを提供します
- [ASP.NET Core SDK](https://github.com/Sitecore/ASP.NET-Core-SDK) - Sitecore DXP および XM Cloud 用の公式オープンソース ASP.NET Core SDK
- [Marketplace SDK](https://github.com/Sitecore/sitecore-marketplace-sdk) - Sitecore Marketplace SDK は、クライアントアプリケーション（iframe内で実行）、コアSDK、およびXMCモジュールの3つの主要パッケージをホストしており、システムの機能を拡張します

## セキュリティ

- [Securty Headers](https://github.com/GuitarRich/SXA.SecurityHeaders) - SXAにおける応答セキュリティヘッダーの実装例を示しているが、実際にはHelixに限らず一般的なものである.
- [SI Snitch](https://github.com/KayeeNL/SI-Snitch) - Sitecore IdentityからSitecoreに渡された主張（claims）を変換後、読み取るためのデバッグツール。Sitecoreが取得している主張（およびその形式）を確認し、Sitecore Identityでのグループ変換が適切に処理されているかを確認するのに役立ちます
- [MasterKey](https://github.com/islaytitans/MasterKey) - Sitecoreアイテムのロックを解除するためのモジュール
- [Security Rights Reporting](https://github.com/jbluemink/Sitecore-Security-Rights-Reporting) - すべてのユーザーとその権限をフレンドリーに表示し、エクスポート機能を備えたグリッドを示すモジュール
- [Sitecore Delete Access Rights](https://github.com/mikaelnet/sitecore-access-rights) - "item:removeVersion"アクセス権を有効にし、著者が個々のアイテムバージョンを削除できるようにする（アイテム全体を削除する権限を著者に与えない）。また、アイテムの作成者自身が、明示的に削除アクセス権を適用されていない限り、自分のアイテムを削除できるようにします
- [ASP.NET 2.0 Membership Database as Identity Server User Store](https://github.com/Sitecore/sitecore-identityserver-contrib-membership) - 既存のASP.NET 2.0メンバーシップデータベースに保存されたユーザー情報に基づき、ユーザーのログインとパスワードを検証します
- [Certz](https://github.com/michaellwest/certz) - .net 7に基づいて構築され、自立型のexeにコンパイルされたユーティリティ。証明書管理を簡便にし、mkcertよりも優れた代替手段として提供されます

## SEO

- [301 Redirect Module](https://github.com/thecadams/301RedirectModule) - Sitecore 301リダイレクトモジュールの改善版
- [SitecoreSitemapXML](https://github.com/JimmieOverby/SitecoreSitemapXML) - sitemaps.orgが定義したスキーマに準拠したサイトマップを生成し、検索エンジンに提出します
- [Sitemap Generator](https://github.com/jermdavis/SitemapGenerator) - Sitecore / FakeDB / TDS / Cloud Build によるサイトマップ生成の例プロジェクト
- [Sitecore Solr](https://github.com/bigredmachine/sitecore-solr) - Sitecore Solrプロバイダーを拡張する方法の例コード
- [URL Rewriter Module](https://github.com/ParTech/Url-Rewriter) - 管理者または編集者がSitecoreクライアント内でURLリライトルールを管理できるようにする機能。ホスト名、相対URL、絶対URLのリライトをサポートします
- [RedirectManager](https://github.com/AlexanderDavyduk/Sitecore-RedirectManager) - Sitecore用のリダイレクトマネージャー
- [URL Rewrite](https://github.com/iamandycohen/UrlRewrite) - リダイレクト／リライトモジュールのサイトごとのバージョン

## シリアライズ

- [Rainbow](https://github.com/SitecoreUnicorn/Rainbow) - Sitecore用の高度なシリアライズライブラリで、Sitecoreのシリアライズフォーマットおよびファイルシステム構成を完全に置き換えるように設計されており、複数のソース間でのアイテム比較を可能にします。
- [Unicorn](https://github.com/SitecoreUnicorn/Unicorn) - Sitecoreでテンプレートやレンダリング、その他データベースアイテムを異なるSitecoreインスタンス間で移動する際の問題を解決するためのユーティリティ。Sitecoreアイテムのシリアライズコピーをディスクに書き出し、コードとともに保存することで、特定のコードベースに必要なデータベースアイテムのコピーがソースコントロールに一緒に含まれるようにします。
- [Sidekick](https://github.com/JeffDarchuk/SitecoreSidekick) - AngularJSベースのマイクロサービスアーキテクチャの運用に用いるフレームワーク。
- [Rhino](https://github.com/kamsar/Rhino) - Sitecore用の実験的なシリアライズデータプロバイダー。

## Sitecore Host

- [Sitecore Host Quick Start](https://github.com/sitecoreguild/SitecoreHostQuickStart/tree/develop) - 独自のSitecoreホストアプリケーションの開発を開始するための基本的なテンプレートセット。
- [Hostbase](https://github.com/muso31/Hostbase) - Sitecore Hostの例として利用できるソリューション。現在はIdentityServer Hostにプラグインとして動作しており、独立したSitecore Hostアプリケーションが一般に利用可能になるまで更新されます。
- [Sitecore Host Plugins](https://github.com/JuliusAngwenyi/SitecoreHostPlugins) - Sitecore Identity Serverを拡張するためのSitecore Hostプラグイン。
- [Basic Sitecore Host Application](https://github.com/georgechang/schost-basic) - 基本的なSitecore Hostアプリケーションでデモウェブページを表示します。


## Sitecore Search

- [Sitecore Search Starter Kit](https://github.com/Sitecore/Sitecore-Search-TS-SDK-Starter-Kit) - ウェブサイトの例：このリポジトリには、Sitecore Search JS SDKを用いてSitecore Searchサービスと統合し、イベントトラッキングをサポートするコンテンツウェブサイトの実装例が含まれる。
  
## Sitecore Send

- [Sitecore Send Postman Collection](https://github.com/neilkillen/SitecoreSendPostmanCollection) - Sitecore Send API Blueprint仕様をOpen APIに変換したPostmanコレクション。

## SPE（Sitecore PowerShell Extension）

- [Sitecore PowerShell Book](https://github.com/SitecorePowerShell/Book) - Sitecore PowerShellに関するすべてのドキュメンテーションを含む書籍。
- [Sitecore PowerShell](https://github.com/SitecorePowerShell) - Sitecore PowerShell Initiativeの公式GitHubリポジトリ。
- [Sitecore.Utilities](https://github.com/alan-null/Sitecore.Utilities) - Sitecore PowerShell Extensions用の小さなモジュールのセット。
- [SPE Content Migrator](https://github.com/michaellwest/Spe-Content-Migrator) - SPEを用いてSitecoreインスタンス間のコンテンツを移行するためのスクリプト。

## SPEAK

- [Speak 3 starter template](https://github.com/Mitya88/SitecoreSpeak3StarterProject) - Speak 3のスタートテンプレート（Angular CLI 1.2.7で生成）。
- [Sitecore Speak UI Library](https://github.com/Mitya88/SitecoreSpeakUILibrary) - Speak 3のコンポーネント（Angular CLI 1.2.7で生成）。
- [SitecoreDataImporter](https://github.com/komainu85/SitecoreDataImporter) - CSV / JSON / XMLをSitecoreアイテムにインポートするためのSPEAKアプリケーション。

## SXA（Sitecore Experience Accelerator）

- [Sitecore Experience Accelerator index](https://github.com/alan-null/SXA.Index) - SXAに関するすべてのドキュメンテーション。
- [SXA Styleguide](https://github.com/markvanaalst/SXA.Styleguide) - SXAをベースにした教育サイトで、内部仕組みを説明し、ベストプラクティスを示します。
- [SXA.Styleguide.Frontend](https://github.com/markvanaalst/SXA.Styleguide.Frontend) - サイトを実行するために必要なすべてのフロントエンドコードを保持するリポジトリ。このリポジトリは2つの部分から構成されており、SXAテーマとサイト上で使用されるScribanテンプレートです。このリポジトリで使われるフォルダ構成はSXA Creative Exchangeの出力を模倣しており、テーマと個別のScribanテンプレートのソースコードが見つかります。
- [SXA.Foundation.Variants](https://github.com/MartinMiles/SXA.Foundation.Variants) - カスタムSXAレンダリングバリエーションや、あなたのソリューションに役立つ他の有用な要素を集めたコレクション。
- [SXA Reference](https://github.com/alan-null/XA.Reference) - Sitecore Experience AcceleratorをベースにしたSitecoreプロジェクトの例。
- [SXA.HealthCheck](https://github.com/alan-null/SXA.HealthCheck) - SXAサイトのヘルスステータスを確認するPower Shellスクリプトは、バリデーションステップを含み、それぞれがSXAソリューション内の異なる項目をチェックし、解決策を提供する.
- [Global Field Validator](https://github.com/JeffDarchuk/SxaGlobalFieldValidator) - サイトレベルでのフィールドのバリデーションを行うSXAモジュール（テンプレートフィールドレベルではなく）.
- [Scriban syntax coloring and auto completion](https://github.com/AdamNaj/SitecoreScriban-vscode) - Visual Studio CodeにおけるScriban構文の色付けとインテリセンスを提供する、既知のオブジェクト向けの拡張機能.
- [Westco SXA Extensions](https://github.com/michaellwest/westco-sxa-extensions) - Sitecore Experience Accelerator (SXA)拡張機能.
- [docker-sxa-node](https://github.com/michaellwest/docker-sxa-node) - Dockerコンテナ内でNodeがインストールされた状態でSXA CLIを使用する例を示す.
- [SXA Securty Headers](https://github.com/GuitarRich/SXA.SecurityHeaders) - SXAにおける応答セキュリティヘッダーの実装例を示しているが、実際にはHelixに限らず一般的なものである.
- [SXA.Platform.Assemblies](https://github.com/konabos/SXA.Platform.Assemblies) - SXA v1.6以降のアセンブリリストと、それらを生成するPowerShellスクリプト.

## テスト

- [Sitecore FakeDb](https://github.com/sshushliapin/Sitecore.FakeDb) - Sitecore用のユニットテストフレームワークで、Sitecoreコンテンツの作成と操作をメモリ上で行い、テストコンテンツの初期化にかかる努力を最小限に抑え、最小限のテストデータに焦点を当てることを設計している.
- [Minq](https://github.com/valtech/minq) - SitecoreおよびSitecore MVC向けのモック可能かつLINQ対応機能.

## テンプレート

- [Token Set](https://github.com/retohugi/SitecoreExtension-TokenSet) - Sitecoreデータテンプレートに追加の標準値トークンを提供。将来の日付やクエリ実行による値取得を含む。

## ツール

- [Terminal DevEx Improvements](https://github.com/Sitecore/Windows-Terminal-DevEx-improvements) - SitecoreブランドのWindows TerminalおよびVS Codeテーマとプロファイル。XM Cloudでの作業を支援するツール（自動補完、コマンド履歴リスト、ディレクトリ改善など）を解禁。

## Universal Tracker

- [UniversalTracker SDK](https://github.com/Sitecore/Sitecore.UniversalTracker.MobileSDK) - .NET Standardライブラリで、クライアント.NETアプリケーションがUniversal Trackerサービスとアプリケーションを接続するためのインタラクションおよびイベント書き込みAPIを提供。ユーザーがHTTPリクエストやJSONレスポンスではなく、ネイティブオブジェクトと対話できるようにするインターフェース。

## Web API

- [Sitecore Endpoints](https://github.com/MartinMiles/Sitecore.Endpoints) - Sitecore Services ClientおよびSite-WebAPIをHelix機能として実装した、即座に使用できるサンプルコード.
- [Odata.SitecoreExample](https://github.com/ianjohngraham/Odata.SitecoreExample) - Sitecore oDataリポジトリの例.
- [Web API Session-Enabled Routes](https://github.com/coreyasmith/WebApiEnableSessionHandler) - SitecoreパイプラインプロセッサおよびHttpRouteCollectionへの拡張により、Web API 2でのセッションを有効にする.
- [Sitecore Shared Source: Web API Client](https://github.com/thinkfreshnick/SitecoreSharedSource) - Sitecore WebAPIクライアント.
- [Sitecore Services Client Publish](https://github.com/peplau/SscPublish) - Web APIメソッドで、アイテムまたはツリーのSitecoreの公開を安全にトリガーする.

## ワークフロー

- [DynamicWorkflows](https://github.com/ivansharamok/DynamicWorkflows) - ルールエンジンベースのワークフロー管理ツール。

## xConnectとxDB

- [XConnectTutorial](https://github.com/jst-cyr/XConnectTutorial) - Martina Welanderの"Getting Started"チュートリアルおよびその他の優れたドキュメントに基づくコードから、xConnect APIとの一般的な相互作用をユーザーに導くチュートリアルリポジトリ.
- [XConnectHelper](https://github.com/lowedown/xConnectHelper) - xConnectのデバッグに使えるスイス軍刀。機能：現在のトラッキングセッションデータの確認、最後のページビューでトリガーされた目標およびイベントの表示、xConnect設定（接続、証明書、設定）の検証を行うステータスチェック、現在のセッションに識別子および基本的なコンタクトデータを設定、現在のセッションをフラッシュして即時処理を行う.
- [XdbTracker](https://github.com/lowedown/XdbTracker) - APIおよびjs関数により、クライアント側でSitecoreイベント／目標／結果をトリガーできるようにする.
- [Experience Generator](https://github.com/Sitecore/xGenerator) - Sitecoreサイト向けに設定可能なパターンで「現実に見える」トラフィックを生成する.
- [xconnect-odata-proxy](https://github.com/ianjohngraham/xconnect-odata-proxy) - Sitecore 9でxConnectのoData APIにアクセスするためのシンプルなNode.jsプロキシ.
- [xConnectDeployer](https://github.com/boro2g/xConnectDeployer) - Marketing Automation Engineをデプロイするために使えるコンソールアプリケーションの例.
- [Right To Be Forgotten](https://github.com/steviemcg/SitecoreComms.RTBF) - マーケティングオートメーションアクション向けの「実行権リクエストを忘れさせる」プラグイン

## XM Cloud

- [Next.js Styleguide for XM Cloud](https://github.com/sitecorelabs/XmCloudNextJsJssStyleguide) - 開発者たちがSitecore Containers、Sitecore Next.js SDK、Site及Content Serializationに迅速に学び、始められるよう支援するためのソリューション
- [Play Summit](https://github.com/Sitecore/Sitecore.Demo.XmCloud.PlaySummit) - XM Cloud、Content Hub DAM、CMP、VerselホスティングによるNext.jsを含むPlay Summitデモ
- [XM Cloud Starter Kit](https://github.com/sitecorelabs/xmcloud-foundation-head) - XMCLoud + SXA + Next.jsに迅速に学び、始められるよう支援するためのソリューション
- [XM Cloud Introduction](https://github.com/Sitecore/XM-Cloud-Introduction) - Sitecoreの技術マーケティングチームが管理するXM Cloudサイトシリーズのコードベース：新MVPウェブサイトおよびSUGCONイベントの3ウェブサイト
- [FEaaS BYOC Example](https://github.com/Sitecore/feaas-nextjs-example) - ベストプラクティスを用いたBYOCコンポーネントの例を示すリポジトリ
- [Sitecore GraphQL Import](https://github.com/jbluemink/Sitecore-GraphQL-Import) - Sitecore GraphQL APIのさまざまな機能を実証するコンソールアプリケーション。Sitecoreアイテムの取得、ウェブサイト一覧の取得、サンプルアイテムの挿入、メディアファイルのアップロードなどが含まれる。
- [Verticals](https://github.com/Sitecore/Sitecore.Demo.XMCloud.Verticals) - XM Cloudコンテンツとサイト管理機能に焦点を当てたヘッドレスマルチサイトソリューション。特定業界向けに簡単にカスタマイズ可能なサンプルサイトを含む。
- [Node XM Cloud Proxy](https://github.com/Sitecore/jss/tree/release/22.0.0/packages/create-sitecore-jss/src/templates/node-xmcloud-proxy) - Nodeプロキシアプリケーションは、XM Cloud向けNext.jsスタートキットに相当するバックエンド機能と機能を提供する。新しいAngularスタートキットをサポートするために導入された。このプロキシはすべてのSPAフレームワークと互換性があり、ReactやVueアプリケーションの実行にも利用可能であり、今後のJSSスタートキットの開発に備える土台を提供する。
