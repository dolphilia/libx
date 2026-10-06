---
title: "Awesome Sitecore"
description: "コンテンツ編集、ヘッドレス開発、SDK、XM Cloudなど、Sitecoreの拡張とデプロイに関するGitHubプロジェクト。"
licenseSource: "github-MartinMiles-Awesome-Sitecore-readme-md"
---

# Awesome Sitecore

[Sitecore](https://sitecore.com)は、複数のウェブサイトを一か所で管理するためのデジタルプラットフォームです。マーケティングツールは、CRM、トラッキング、POSなどの機器やシステムから顧客情報を提供します。デスクトップ、モバイル、API、ソーシャルメディアなど、複数のチャネルへコンテンツを届けられます。多数の拡張ポイントを備え、オンプレミスとクラウドへのデプロイに対応します。このリストは、Sitecore関連のGitHubプロジェクトを拡張とデプロイの分野別に分類し、分析、コマース、コンテンツ編集、ヘッドレス開発、SDK、XM Cloudなどを扱います。

このリストはGitHubリポジトリの分類とレビューを扱います。[Sitecore Link](https://Sitecore.Link)のナレッジベースには、記事、ブログ投稿、動画、Q&Aがまとめられています。

## 分析 <a id="analytics"></a>

- [Sitecore Goal Description](https://github.com/islaytitans/SitecoreGoalDescription) - Experience Profileにゴールの説明を表示する。
- [Sitecore Goal Conversion Demo](https://github.com/martinrayenglish/GoalConversions.Demo) - 訪問者の操作で発生したゴールを、セッション終了後に取得する方法を示すデモ。取得データを外部システムへ送ることで、顧客や見込み客のサイト上の行動をマーケティング担当者へ伝えられる。
- [Custom Timeline Eras](https://github.com/coreyasmith/sitecore-custom-timeline-eras) - 成果を発生させ、カスタムの成果をExperience Profileのタイムライン上に期間（era）として表示する方法を示す。

## 監査とパフォーマンス <a id="audit-and-performance"></a>

- [Skillcore.Stats](https://github.com/marek-musielak/Skillcore.Stats) - Sitecore MVCの全レンダリングとAPI呼び出しについて、詳細な処理時間を収集する。
- [Sitecore.Boost](https://github.com/cardinal252/Sitecore.Boost) - Sitecoreプラットフォームの性能を改善するためのパッチ候補集。その多くは本番のSitecoreインスタンスで稼働している。
- [Sitecore.Cleanup](https://github.com/martinrayenglish/Sitecore.Cleanup) - Event Queue、Publish Queue、Historyの各テーブルを3つのエージェントで監視し、設定したしきい値を超えないようにする。
- [SitecoreDXG: The Documentation Experience Generator](https://github.com/zkniebel/SitecoreDXG) - SitecoreUML系の、Sitecoreテンプレート構成を可視化して文書化するツール。SitecoreUMLの基盤でもあるStarUMLのオープンソースAPIを利用し、SitecoreUML Service for Sitecoreを備えた既存のSitecoreインスタンスから、テンプレートのデータモデル構成図とHTMLドキュメントを生成する。PaaS環境とそれ以外の環境に対応。
- [sitecore-assembly-lists](https://github.com/richardszalay/sitecore-assembly-lists) - Sitecoreは8.2 Update 5以降のリリースでアセンブリ一覧を提供している。このツールは、一覧とインストール済み環境との照合や、開発中の一覧の検証を行う。

## Azure

- [Sitecore用ARMテンプレート](https://github.com/Sitecore/Sitecore-Azure-Quickstart-Templates) - 現在利用可能なSitecore用のAzure Resource Managerテンプレート一式。
- [Sitecore Azure Scripts](https://github.com/robhabraken/Sitecore-Azure-Scripts) - 独自スクリプトのテンプレートやひな型として使える、Azure関連のPowerShellスクリプトとARMテンプレート。
- [Sitecore Azure Content](https://github.com/olegburov/Sitecore-Azure-Content) - Azureサービスを利用し、SitecoreソリューションをMicrosoft Azureへ自動デプロイする方法の記事。
- [Sitecore Advanced Azure Devops](https://github.com/JeffDarchuk/AdvancedSitecoreAzureDevops) - Azure上のSitecoreを拡張するための柔軟で汎用的なスクリプト。有効なPowerShell Azureセッションが接続され、利用できることが必要。
- [Language Understanding（LUIS）のサンプル](https://github.com/Azure-Samples/cognitive-services-language-understanding) - Language Understanding Intelligent Service（LUIS）のサンプル。
- [Sitecore Media Azure Blob Storage provider](https://github.com/ivansharamok/Sitecore.Media.AzureBlobStorage) - SitecoreメディアライブラリのアセットをAzure Blob Storageアカウントへ保存する。
- [CloudMediaLibrary](https://github.com/jammykam/Sitecore-CloudMediaLibrary) - Sitecoreメディアライブラリのアセットをクラウドストレージに保存し、そこから配信する。
- [SitecoreCognitiveServices](https://github.com/smithc/SitecoreCognitiveServices) - Microsoft Cognitive ServicesをSitecoreへ統合するSDK。
- [Sitecore Publishing Service用Azureテンプレート](https://github.com/coreyasmith/sitecore-publishing-service-azure-templates) - Sitecore Azure PaaS環境にSitecore Publishing ServiceをインストールするためのAzure Resource Manager（ARM）テンプレート。
- [Sitecore Diagnostics](https://github.com/BasLijten/SitecoreDiagnostics) - Application Insightsを使うSitecoreの診断。
- [Application Insights Annotations](https://github.com/BasLijten/sitecore-application-insights-annotations) - Application Insightsの注釈を作成する。

## キャッシュ <a id="cache"></a>

- [Cache Tuner](https://github.com/KayeeNL/CacheTuner) - Sitecoreのキャッシュガイドにあるルールを実装したモジュール。
- [Caching Manager](https://github.com/jbluemink/SitecoreCachingManager) - Sitecore 10のキャッシュを管理するコンソール。
- [Cache Processing Instance](https://github.com/ParTech/Cache-Processing-Instance) - HTMLキャッシュ処理専用インスタンスの概念実証。
- [ExperienceEditorCache](https://github.com/marek-musielak/Skillcore.ExperienceEditorCache) - Sitecore Experience Editorでの作業をしやすくするキャッシュモジュール。
- [ManualHtmlCacheClearer](https://github.com/TwentyGotoTen/ManualHtmlCacheClearer) - Sitecoreクライアントから、ローカルとリモートのインスタンスの指定したHTMLキャッシュを消去する。
- [CacheCounters](https://github.com/matthewkenny/CacheCounters) - Sitecoreのキャッシュ容量の情報をWindowsパフォーマンスカウンターへ出力する。
- [Sitecore Rules-Based Output Caching](https://github.com/zkniebel/Sitecore-Advanced-Output-Caching) - ルールに基づいてSitecoreの出力キャッシュを分ける機能。パーソナライズされたコンポーネントや、キャッシュを分けるために複雑な判定が必要なコンポーネントをキャッシュできる。
- [Dictionary Flush Partial Cache](https://github.com/jbluemink/DictionaryFlushPartialCache) - Sitecore Dictionaryのアイテムが変わったときに、部分HTMLキャッシュをフラッシュする。

## CDP

- [Sitecore CDP Serializer](https://github.com/dylanyoung-dev/sitecore-cdp-serializer) - CDPとPersonalizeのアセットをハードディスクへシリアライズし、復元するためのNode.jsツール。

## コマース <a id="commerce"></a>

- [Reference Storefront](https://github.com/Sitecore/Reference-Storefront) - Sitecoreのリファレンスストアフロント。
- [Commerce Sample Plugins](https://github.com/Sitecore/SitecoreCommerce) - Sitecore Commerceプラグインのサンプルコード。対象はXC 9.0.3と9.1。
- [HabitatHome Commerce](https://github.com/Sitecore/Sitecore.HabitatHome.Commerce) - Helixの設計原則に従い、XPとXC上でSXAを使って構築した例。
- [sitecore-commerce-configuration](https://github.com/richardszalay/sitecore-commerce-configuration) - Sitecore Commerce Engineの設定を構成し、初期化するためのツール。
- [Plumber for Sitecore Commerce](https://github.com/richardszalay/plumber-sc) - Sitecore Commerce Engineの設定を閲覧するツール。
- [Short Confirmation Codes](https://github.com/dsolovay/ShortConfirmationCodes) - 6文字の確認コードをランダムに生成する（文字数は設定可能）。重複を避けるため、コマースデータベースで追跡する。標準の25文字の確認コードよりも短く、サポートの通話で伝えやすく、一部の利用者にとって扱いやすい。
- [Sitecore Commerce Engine Fedex plugin](https://github.com/XCentium/SC-Plugin-FedEx) - 配送方法としてFedExを組み込む。
- [Sitecore Commerce Engine USPS plugin](https://github.com/XCentium/SC-Plugin-USPS) - 配送方法としてUSPSを組み込む。
- [Sitecore Commerce Engine UPS Address Validation plugin](https://github.com/XCentium/SC-Plugin-UPS-Address-Validation) - 配送先住所や請求先住所を検証し、円滑な商品配送を支援する。

## 構成 <a id="configuration"></a>

- [Sitecore configuration consolidator (offline ShowConfig)](https://github.com/ParTech/ScShowConfig) - インクルードファイルを含めてSitecoreの設定を統合するシンプルなコンソールアプリ。
- [XDT Transform playground](https://akarzazi.github.io/xdt-playground) - .NET設定ファイルのXDT変換を試すためのIDE。

## コンテナー <a id="containers"></a>

- [Sitecore Dockerイメージのリポジトリ](https://github.com/Sitecore/docker-images) - Sitecoreの最新バージョン向けに独自のDockerイメージを構築する。
- [Windows Docker Machine](https://github.com/StefanScherer/windows-docker-machine) - MacBookでWindowsコンテナーを使うためのDocker Machineを作成するVagrant環境。Docker DesktopのLinuxコンテナーとWindowsコンテナーを切り替えられる。
- [Sitecore Containers Prerequisites](https://github.com/nickwesselman/sitecore-containers-prerequisites) - マシンのSitecoreコンテナーとの互換性を調べ、Hyper-Vを有効にし、Sitecore 10.1を含むソフトウェアをダウンロードしてインストールする。
- [Sitecore Docker Examples](https://github.com/Sitecore/docker-examples) - Sitecore 10.*の最新バージョン向けの公式Dockerイメージ例。getting-startedのXP0コンテナー環境を含む。
- [コンテナーのデプロイ](https://github.com/Sitecore/container-deployment) - さまざまな方法でSitecoreコンテナーをデプロイする例。
- [Lighthouse Demo](https://github.com/Sitecore/Sitecore.Demo.Platform) - SXA 10.0を使う最新のXP 10.0デモ。Dockerコンテナー内にのみデプロイできる。
- [Sitecore MVP](https://github.com/Sitecore/MVP-Site) - Sitecore 10とSXAを使い、コンテナー内で動く実際のSitecore MVPウェブサイトのソースコード。
- [Packer for Sitecore](https://github.com/asmagin/sitecore-packer) - Windows上のIISとSQL Server、SOLR、Sitecore 9.0を使うローカルSitecoreホスティング環境用のPackerテンプレート。Chefで構成し、VirtualBox用の仮想マシンイメージとVagrant boxを生成する。
- [Docker SOLR with SSL](https://github.com/LaubPlusCo/docker-solr-ssl) - 生成した証明書を使い、SSL対応のSolrを動かすLinuxコンテナーをホスト上に構成する。
- [Sitecore Docker Tools](https://github.com/sitecore/docker-tools) - Docker環境のSitecore開発を支援するユーティリティ集。コンテナービルド時に使える開発スクリプトとエントリーポイントを備えたイメージと、コンテナーホストでSitecoreのDocker環境を初期化する関数を備えたPowerShellモジュールからなる。
- [Konabos Docker Examples](https://github.com/konabos/konabos-docker-examples) - Sitecoreの公式提供範囲を補う、Composeファイルと関連設定のサンプル。
- [Container Asset Image Creator Module](https://github.com/KayeeNL/sitecore-module-docker-asset-image-creator) - 指定したSitecoreモジュールのDocker Asset Imageを自動作成するスクリプト。
- [コンテナーとAKS](https://github.com/bplasmeijer/Sitecore-Symposium-2020-Containers-AKS) - Sitecore 10をAzure AKSへ展開する。
- [PaaS to AKS](https://github.com/robhabraken/paas-to-aks) - Sitecore用のAzure PaaS構成から、Sitecore 10.0.*をAzure AKSへデプロイするためのひな型プロジェクト。本番でSitecore Kubernetesを動かすために必要な外部データサービスのARMテンプレートと、AKS上のSitecore環境全体をInfrastructure as Codeで構成するためのスクリプトを含む。
- [Sitecore Deployment on Kubernetes Example](https://github.com/georgechang/sitecore-k8s) - Sitecore 10.1 XP0をSolrCloudとともにAKSへデプロイする例。構成は、Sitecore 10.1 XP0、Microsoft SQL Server 2019、Zookeeper 3.4（3レプリカ）、Solr 8.4（3レプリカ）。
- [Sitecore Module Docker Asset Image Creator](https://github.com/KayeeNL/sitecore-module-docker-asset-image-creator) - 指定したSitecoreモジュールのDocker Asset Imageを自動作成するスクリプト。
- [Test Sitecore Packages](https://github.com/michaellwest/test-sitecore-packages) - Dockerイメージのビルド中やコンテナー起動後にパッケージをインストールする方法を提供する。モジュール開発者や、標準状態のXMインスタンスでビルド成果物を検証するチーム向け。XM、SPE、SXA、任意のカスタムモジュールのzip/scwdpファイル、一般的なzipファイルに対応。

## Content Hub

- [Content Hub CLI](https://github.com/Sitecore/content-hub-cli) - Sitecore Content Hub CLIのソースコードを収録するリポジトリ。
- [Sitecore Content Hub Importer](https://github.com/vasiliyfomichev/content-hub-importer) - さまざまなデータソースからSitecore Content Hubへ画像アセットをインポートする。
- [schguild](https://github.com/sitecoreguild/schguild) - Sitecore Content Hubの学習と作業を支援するツールとサンプルコード。
- [Sitecore.ContentHub.Twitter](https://github.com/josedbaez/Sitecore.ContentHub.Twitter) - Sitecore Content Hub CMPからツイートする方法を示す。
- [Sitecore.SharedSource.CMP.Connector.Extensions](https://github.com/josedbaez/Sitecore.SharedSource.CMP.Connector.Extensions) - Sitecore CMP 2.0.0向けのSitecore Connectを拡張する。CMPエンティティに設定した画像を、Sitecore Connect™ for Sitecore DAM 2.0.0が使うXML形式で同期できるようにするために必要なモジュール。
- [Next.jsとGraphQLを使うContent Hubスターターキット](https://github.com/konabos/Next.js-Starter-kit-using-GraphQL-and-Sitecore-Content-Hub-Content-as-a-Service) - Content Hub用のヘッドレススターターキット。
- [Focal point cropping](https://github.com/robhabraken/content-hub-focal-point-cropping) - Content Hub用の、焦点を基準とする画像の切り抜き。
- [Content Hub用Visual Studioソリューションの例](https://github.com/Sitecore/ContentHub-VS-Solution-Example) - Content Hub開発の基盤としてダウンロードして使えるVisual Studioソリューションの例。IntelliSense、スクリプト同期、デバッグ、ユニットテストを備える。

## Content Hub One

- [Content Hub ONEの活用例](https://github.com/Sitecore/contenthubone-examples) - Content Hub Oneを使うさまざまな例。
- [Sitecore.Demo.CHONE](https://github.com/Sitecore/Sitecore.Demo.CHONE) - Sitecore Demo Solutionsチームが構築したContent Hub ONEの全デモを収録するリポジトリ。PLAY MediaのNext.jsウェブサイトと携帯電話向けアプリを含む。
- [Content Hub ONE用Next.JSスターターキット](https://github.com/Sitecore/content-hub-one-nextjs-starterkit) - GraphQLのJSON出力をリッチテキスト、メディアフィールド、参照のHTMLへ変換するなどの補助機能を備えたスターターキット。顧客プロジェクトの出発点に使える小規模な実装例も含む。

## Content SDK

- [Sitecore Content SDK](https://github.com/Sitecore/content-sdk) - Sitecore Content SDKの利用を始めるための、全パッケージとテンプレートのソースコード。
- [XM Cloudフロントエンドアプリのスターターキット](https://github.com/Sitecore/xmcloud-starter-js) - Sitecore XM Cloud開発向けのContent SDKリポジトリ。複数のNext.jsスターターキットと、NodeプロキシアプリやSPAスターターアプリを含むSPA Startersモノレポを収録する。

## コンテンツ検索 <a id="content-search"></a>

- [Sitecore spatial geojson polygons](https://github.com/josedbaez/sitecore-spatial-geojson-polygons) - Solrインデックス内のGeoJSONポリゴンと交差する地点を検索するためのLINQ拡張。デモには空間フィールド付きのテンプレート、OpenStreetMapの複数都市のポリゴンを持つサンプルアイテム、クエリ文字列の緯度・経度を読み取って該当アイテムのポリゴンを返すコントローラーレンダリングがある。たとえばBig Benの座標を渡すとLondonを返す。
- [Sitecore Solr Schema](https://github.com/konabos/solr-sitecore-schema) - Solr 8.1.1と8.4.0向けのSitecore configset（スキーマ）。
- [Search Index Builder](https://github.com/jermdavis/SearchIndexBuilder) - Sitecoreウェブアプリの外部から検索インデックスを再構築するツール。特に長時間のビルドに適している。
- [SolrCloud Install Scripts](https://github.com/jermdavis/SolrCloud-Helpers) - WindowsにSolrCloudクラスターをインストールするためのPowerShellスクリプトライブラリ。
- [Docker SolrCloud for Sitecore 10](https://github.com/jermdavis/Sitecore-SolrCloud-Docker) - Docker上のSitecore 10インスタンスで使えるSolrCloudコンテナーを作成する。Sitecore Docker ExamplesリポジトリのSolrコンテナーファイルを調整したもので、標準のsolrサービスを置き換えられる。
- [Sitecore SolrProxy](https://github.com/Antonytm/Sitecore.SolrProxy) - Sitecore CMにしかアクセスできない場合に、Solr管理コンソールへアクセスするツール。
- [Common Sitecore ContentSearch extensions](https://github.com/LaubPlusCo/LaubPlusCo.Common.ContentSearch) - Sitecore ContentSearchの共通拡張。Sitecoreにインストールされた全言語をSolrの管理スキーマへ追加するPopulateSolrSchemaパイプラインプロセッサなどを含む。
- [Sitecore Computed Search](https://github.com/martinrayenglish/Sitecore-Computed-Search) - 計算済み検索フィールドをインデックスへ宣言できる検索開発支援ツール。指定範囲のアイテムの対象フィールド値や、その表示を構成する特定テンプレートのアイテムのフィールド値を取り込み、保存できる。計算済みフィールドに検索ブーストの重みを付け、内容に合致する検索語を結果で優先表示できる。
- [sitecore-azure-search-compat](https://github.com/richardszalay/sitecore-azure-search-compat) - SitecoreとAzure Searchの互換性パッチ。

## データ <a id="data"></a>

- [SitecoreDataImporter](https://github.com/markstiles/SitecoreDataImporter) - データベースのデータとSitecoreのコンテンツをSitecoreへインポートする。
- [SitecoreEzImporter](https://github.com/dresser/SitecoreEzImporter) - SPEAK UIを使うSitecore CMS用のデータインポートツール。

## Data Exchange Framework

- [Sitecore Data Exchange Framework用ガター](https://github.com/KayeeNL/Sitecore.DataExchange.Gutters) - DEF向けの3つのガター（ツリー内アイテムの状態などを示す表示欄）。コンテキストアイテムについて、`ItemDisabled`、`PipelineBatch`、`PipelineStep`を表示する。
- [Data Exchange Frameworkのドキュメント](https://github.com/Sitecore/Data-Exchange-Framework-Docs) - Sphinxで生成したSitecore Data Exchange Frameworkのドキュメント。

## デモ <a id="demo"></a>

- [Sitecore Habitat](https://github.com/Sitecore/Habitat) - Helixの設計原則に基づくSitecoreソリューションの例。更新と保守は終了しており、Sitecore Helix Examplesへ置き換えられている。
- [Sitecore Helix Examples](https://github.com/Sitecore/Helix.Examples) - さまざまなツールや業務シナリオでSitecore Helixの実践を示す例。既存の例よりも幅広い実装形式と要件を示すことを目的とする。
- [Lighthouse Demo](https://github.com/Sitecore/Sitecore.Demo.Platform) - SXA 10.0を使う最新のXP 10.0デモ。Dockerコンテナー内にのみデプロイできる。
- [Sitecore.Demo.Headless](https://github.com/Sitecore/Sitecore.Demo.Headless) - Sitecore JSS PWAのデモ素材と、今後のSitecore Headless関連のデモ素材。
- [Sitecore MVP](https://github.com/Sitecore/MVP-Site) - Sitecore 10とSXAを使い、コンテナー内で動く実際のSitecore MVPウェブサイトのソースコード。
- [Sitecore.HabitatHome.Utilities](https://github.com/Sitecore/Sitecore.HabitatHome.Utilities) - Sitecore Experience Platform、Experience Commerce、各種モジュールのインストール、インスタンスのウォームアップやセキュリティ強化などを支援するユーティリティとスクリプトの例。
- [Sitecore.HabitatHome.Commerce](https://github.com/Sitecore/Sitecore.HabitatHome.Commerce) - 外部の貢献者やパートナーが参加するデモ素材。
- [Sitecore.HabitatHome.Omni](https://github.com/Sitecore/Sitecore.HabitatHome.Omni) - Sitecore JSS PWAのデモ素材と、今後のSitecore Omni関連のデモ素材を共有する。
- [Sitecore.Demo.Group](https://github.com/Sitecore/Sitecore.Demo.Group) - Habitat Groupのデモサイト。Habitatベースのデモを作る開発者向けの例。
- [Sitecore User Group UK](https://github.com/steviemcg/scuguk) - Gitを唯一の正本とし、Netlifyの継続的デプロイとCDN配信を使うJAMstack構成のデモ。Gatsby v2で構築されている。
- [Sitecore DXP Demo](https://github.com/Sitecore/Sitecore.Demo.Edge) - XM、Experience Edge、Content Hub DAMとCMP、Content Hub Edge、JSS、CDP、Sitecore Personalize、Next.js、Vercelのデモ。
- [Sitecore Developer Portal](https://github.com/Sitecore/developer-portal) - Next.js、TypeScript、Tailwind CSSで構築し、VercelでホストするSitecore開発者ポータル。静的サイト生成（SSG）で全ページをビルド時に作成し、ページ内容の変更時にはIncremental Static Regeneration（ISR）でアプリを自動更新する。多くのページはMarkdownで書かれ、ビルド時にHTMLへ変換される。画像はSitecore DAMで管理し、CDNへ公開する。
- [Play Summit](https://github.com/Sitecore/Sitecore.Demo.XmCloud.PlaySummit) - XM Cloud、Content Hub DAM、CMP、Next.jsとVercelでのホスティングなどを使うPlay Summitのデモ。
- [Verticals](https://github.com/Sitecore/Sitecore.Demo.XMCloud.Verticals) - XM Cloudのコンテンツ管理とサイト管理の機能を中心とした、ヘッドレスの複数サイト向けソリューション。特定業界向けに容易にカスタマイズできるサンプルサイトを含む。
- [Developer Portal](https://github.com/Sitecore/developer-portal) - Next.js、TypeScript、Tailwind CSSで構築し、VercelでホストするSitecore開発者ポータル。静的サイト生成で全ページをビルド時に作成し、ページ内容の変更時にはIncremental Static Regeneration（ISR）でアプリを自動更新する。多くのページはMarkdownで書かれ、ビルド時にHTMLへ変換される。画像はSitecore DAMで管理し、CDNへ公開する。

## デプロイ <a id="deployment"></a> <a id="配備"></a>

- [PostDeploySteps](https://github.com/jst-cyr/NonlinearPostDeploySteps) - TDSと組み合わせるデプロイ後処理。処理を呼び出すTDSのプロジェクト例、デプロイ後処理の取り込み方を示すウェブプロジェクト例、ソリューションへ追加できるDeployStepクラスライブラリを含む。
- [Sitecore Devops with AppVeyor](https://github.com/steviemcg/Sitecore.Devops.AppVeyor) - オープンソースのSitecoreモジュールを開発し、クラウドでホストされる継続的デリバリーサービスのAppVeyorへ連携する方法を示すサンプルソリューション。
- [Cake.Sitecore](https://github.com/asmagin/Cake.Sitecore) - HelixベースのSitecoreプロジェクトのCI/CD設定を簡略化する、ビルド前に使う[CAKE build]タスクのセット。

## Edge

- [Sitecore Demo Edge](https://github.com/Sitecore/Sitecore.Demo.Edge) - Content HubとExperience Management向けのSitecore Edgeを主に扱うリポジトリ。

## 編集 <a id="editing"></a>

- [Sitecore Sweep](https://github.com/Kasaku/Sitecore.Sweep) - アイテム内のHTMLを自動的に整理する、シンプルで拡張可能なSitecoreモジュール。

## コンテンツエディターの拡張 <a id="extending-content-editor"></a>

- [バージョンのコピー機能](https://github.com/ParTech/Copy-Version) - アイテム全体ではなく最新バージョンをコピーして貼り付けるコマンドをContent Editorへ追加する。インストール後は、コンテンツツリーのコンテキストメニューからCopy versionとPaste versionを使える。
- [アイテムを開くコマンド](https://github.com/ParTech/Browse-Command) - Sitecoreのコンテンツツリーからアイテムを新しいブラウザーウィンドウで開くコマンド。標準のPreviewコマンドと異なり、プレビューモードへ入らずに開く。
- [子孫の展開コマンド](https://github.com/ParTech/Expand-Descendants-Command#expand-descendants-command) - Sitecoreのコンテンツツリーで、アイテムの全子孫を展開するコマンドを追加する。
- [Environment Styler for Sitecore](https://github.com/jammykam/Environment-Styler-for-Sitecore) - Sitecoreのログイン画面とヘッダーリボンに、環境別のスタイルと文字を表示する。
- [InsertOptionsLoophole](https://github.com/TwentyGotoTen/InsertOptionsLoophole) - Sitecoreユーザーによる挿入オプションの制限の回避を防ぐ。
- [ScopeToThis](https://github.com/ianjohngraham/Coreblimey.ScopeToThis) - Sitecore Content Editorのツリーに、Visual StudioのScope to Thisのように対象へ範囲を絞る機能を追加する。
- [DeviceEditorShortcuts](https://github.com/MartinMiles/DeviceEditorShortcuts) - Device Editorの作業を支援する。対象コンポーネントにデータソースが設定されていればそれを表示し、ポップアップをクリックしてプレビューできる。
- [DmsGutters](https://github.com/markvanaalst/Sitecore.SharedSource.DmsGutters) - テスト済みのアイテムとパーソナライズされたアイテムを示すContent Editorのガター（ツリー横の表示欄）。
- [Move Validator](https://github.com/Velir/Sitecore-MoveValidator) - 挿入オプションに基づき、アイテムを新しい場所へ移動できるか検証する。
- [SitecoreFieldSuite](https://github.com/Velir/SitecoreFieldSuite) - Sitecoreのコンテンツ作成を支援するツール。5つのフィールド型を改良し、Imagesフィールド、参照アイテムの自動公開、Edit Form、Go to Itemボタン、Field Gutterなどの機能を追加する。
- [Sitecore Smart Commands](https://github.com/AlenPelin/Sitecore-Smart-Commands) - Content Editorにコピー、複製、クローンの拡張コマンドを追加し、標準で不足している機能を補う共有ソースのモジュール。
- [CopyPageToVersions](https://github.com/merkle-open/SitecoreCopyPageToVersions) - Content EditorとExperience Editorの拡張。指定バージョンのページを、選択した複数の言語バージョンへコピーするダイアログを提供する。ページのレンダリングが参照する全データソースもコピー対象に含む。
- [Sitecore-TinyMCERTE](https://github.com/EmanueleCiriachi/Sitecore-TinyMCERTE) - 標準のエディターをTiny MCE Editorへ置き換えるSitecoreコントロール。

## フィールド <a id="fields"></a>

- [Sitecore.Foundation.Fields](https://github.com/MartinMiles/Sitecore.Foundation.Fields) - Sitecoreソリューションですぐ使えるカスタムフィールド集。
- [LinkList](https://github.com/josedbaez/Monoco.CMS.FieldTypes) - Sitecore用のLinkListフィールド型。
- [CrossDatabaseTreeListField](https://github.com/ivansharamok/CrossDatabaseTreeListField) - データベースをまたぐ参照に対応したTreelistフィールドの拡張。
- [LimitedText Field](https://github.com/ParTech/LimitedText-Field-Controls) - Content EditorにSingle-Line Text LimitedとMulti-Line Text Limitedの2つのフィールド型を追加する。既存のテキストフィールドの全機能を継承し、最大文字数の設定と、編集中の残り文字数の表示を追加する。
- [CustomFields](https://github.com/AlexanderDavyduk/CustomFields) - NameValueDropLists、NameValueDropListsField、NameValueDroplist、NameValueDroplistField、SortableMultilist、SortableMultilistField、TimeZonesDropListというフィールド群。
- [YouTube動画選択フィールド](https://github.com/pveller/BrainJocks.YouTubeVideoField) - Sitecore用のYouTube動画選択フィールド。
- [Hide Dependent Fields Controls](https://github.com/jammykam/Hide-Dependent-Fields) - 選択値に応じて後続の兄弟フィールドを隠す、Checkbox、Droplist、Droplinkのフィールド型をContent Editorへ追加する。各コントロールは対応する標準のSitecoreコントロールを継承し、必要なUI機能を追加する。
- [icon-selector-field](https://github.com/Wesley-Lomax/icon-selector-field) - Sitecore用のカスタムアイコン選択フィールド。
- [ImageSelector](https://github.com/markvanaalst/Sitecore.SharedSource.ImageSelector) - TreeListExに基づき、複数画像の選択とプレビューを行うSitecoreフィールド。

## フォーム <a id="forms"></a>

- [Sitecore-Forms-Extensions](https://github.com/bartverdonck/Sitecore-Forms-Extensions) - フォーム作成機能に、メール送信、期間の検証、リストへの登録、条件、Azure Blob Storageプロバイダーなどを追加する。
- [WFFM Conversion Tool](https://github.com/afaniuolo/WFFM-Conversion-Tool) - Web Forms For Marketers（WFFM）のアイテムとそのデータを、Sitecore Formsへ自動変換・移行するコンソールアプリ。
- [SendMail for Experience Forms](https://github.com/KayeeNL/Sitecore.ExperienceForms.Modules.SendMail) - Sitecore 9 FormsへSend E-mailアクションを追加する。MainUtil.SendMailメソッドでSMTPサーバーを使い、HTMLまたはプレーンテキスト形式のメールを送信する。
- [Forms Cloud Upload](https://github.com/jbluemink/Sitecore-Forms-Cloud-Upload) - Azure Storage QueueとAzure Storage Blobを使い、Sitecore 9.3以降のフォームでアップロードされたデータを、Azure Key Vaultのキーで暗号化して保存する。機密データのアップロードに関する要件への対応を支援できる。

## フレームワーク <a id="frameworks"></a>

- [NitroNet for Sitecore](https://github.com/merkle-open/NitroNetSitecore) - Razor Viewの代わりにHandlebarsのフロントエンドをSitecoreへ組み込むためのツール。機能を失わずにあらゆる表示シナリオを扱い、生産性を向上させる。

## GraphQL

- [Sitecore GraphQL Import](https://github.com/jbluemink/Sitecore-GraphQL-Import) - Sitecore GraphQL APIの機能を示すC#コンソールアプリのデモ。アイテムの取得、ウェブサイト一覧の取得、サンプルアイテムの挿入、メディアファイルのアップロードなどを扱う。

## JAMstack

- [GraphQLとSitecore Experience Edge for Content Hubを使うNext.jsスターターキット](https://github.com/konabos/Next.js-Starter-kit-using-GraphQL-and-Sitecore-Content-Hub-Content-as-a-Service) - 最新のContent Hubのデモインスタンスを使い、React上のNextJSでSitecore Experience EdgeのContent as a Serviceを利用する例。
- [Uniform・JSS・Next.jsスターターキット](https://github.com/uniformdev/sitecore-jss-nextjs-starterkit) - 新規プロジェクトを始めるための、Uniform、JSS、Next.JSのスターターキット。コンテンツアイテムと必要な設定ファイルを含む。

## JSS

- [sugcon-2019-jss-examples](https://github.com/chaturangar/sugcon-2019-jss-examples) - SugCon 2019のJSSサンプル。
- [SitecoreQL](https://github.com/kmazzoni/SitecoreQL) - Sitecore用のGraphQL実装。たとえばSitecoreのContent Search APIへクエリを実行できる。
- [JSS React Starter Application](https://github.com/altola/sitecore-jss-react-basic) - [JSSの一次ドキュメント](https://jss.sitecore.net)で最新のJSSドキュメントを参照できる。
- ['Hello World' Starter for Sitecore JSS Tech Preview 4](https://github.com/altola/sitecore-jss-react-starter) - GraphQLを含まないSitecore JSSのHello Worldスターター。
- [Extensible JSON Renderings](https://github.com/coreyasmith/jss-extensible-json-renderings) - Sitecore JavaScript ServicesのJSONレンダリングを拡張する。
- [JavaScript Services Anti-Forgery Tokens](https://github.com/coreyasmith/jss-anti-forgery-tokens) - 標準の検証機能を使い、MVCとWeb APIの両コントローラーでSitecore JavaScript Servicesへ.NETの偽造防止トークンを組み込むサンプル。デモAPIは非接続モードでも完全にモックされており、接続モードと非接続モードの両方での動作を示す。
- [How to GraphQL](https://github.com/kamsar/howtographql) - GraphQLを学ぶフルスタックのチュートリアルサイト。
- [JSS with Vue.js](https://github.com/KayeeNL/sitecore-jss-getting-started-vuejs) - Vue.jsを使うJSSのスターターテンプレート。
- [Headless Examples](https://github.com/Sitecore/headless-examples) - JSSの埋め込みアプリや、フェデレーション認証を使うNext.jsなどの例を収録するリポジトリ。
- [SVG Images for JSS](https://github.com/KayeeNL/Sitecore.Extensions.JSS.SVG) - Sitecore JSSでSVGタグによって描画する画像を扱えるようにする。
- [jss21.4-nextjs-storybook7.4](https://github.com/jflheureux/jss21.4-nextjs-storybook7.4) - Storybook 7.4を段階的に追加した、Sitecore JSS 21.4のNext.jsサンプルアプリ。作業過程をコミット履歴で確認できる。

## ヘッドレス <a id="headless"></a>

- [サンプル](https://github.com/uniformdev/sitecore-jss-nextjs-starterkit) - ヘッドレスのサンプル。
- [XM Cloud用Angular JSSスターターキット](https://github.com/Sitecore/jss/tree/release/22.0.0/packages/create-sitecore-jss/src/templates/angular-xmcloud) - XM Cloud用のSitecore JSS Angularスターターアプリ。

## Helix

- [Sitecore Helixのドキュメント](https://github.com/Sitecore/Helix.Docs) - Sitecore HelixでSitecoreを開発するための公式ガイドラインと推奨事項。
- [Sitecore Helix Examples](https://github.com/Sitecore/Helix.Examples) - さまざまなツールや業務シナリオでSitecore Helixの実践を示す例。既存の例よりも幅広い実装形式と要件を示すことを目的とする。
- [Helixbase](https://github.com/muso31/Helixbase) - 新規プロジェクト向けのSitecore Helixベースのソリューション。
- [Sitecore Foundation](https://github.com/Avanade/SitecoreFoundation) - Helixのモジュール構成の設計原則に従うSitecoreフレームワーク。Feature層とFoundation層の多数のモジュールや、Project層の再利用可能なCommonを含む。
- [Helixのモジュールとソリューションのテンプレート例](https://github.com/LaubPlusCo/Helix-Templates) - Sitecore HelixのVisual Studioテンプレート拡張用のテンプレート。
- [Helixのフロントエンド開発例](https://github.com/LaubPlusCo/helix-frontend-example) - Sitecore Helixソリューション向けのシンプルなフロントエンド開発環境の例。
- [Helix Publishing Pipeline](https://github.com/richardszalay/helix-publishing-pipeline) - Helixソリューションを一つの単位として公開し、ビューや設定パッチなど、各モジュールの内容を自動的に含める。ローカル開発用のデプロイの最適化と案内も含む。標準のWeb Publishing Pipelineを拡張しており、Visual Studioやコマンドラインから、対応する各ターゲット（パッケージ、ファイルシステム、Azure、Docker）に公開できる。
- [CustomLinkProvider](https://github.com/TwentyGotoTen/CustomLinkProvider) - カスタムのSitecoreリンクプロバイダーを非Helix構成からHelix構成へ移す例。
- [Elision](https://github.com/sitecore-elision) - Helixの原則を実装したオープンソースのSitecore開発支援ツール。
- [Helixify](https://github.com/konabos/Konabos.Helixify) - 任意のSitecoreプロジェクトへ即座にHelix互換性を追加するためのモジュール。
- [Sitecore Foundation](https://github.com/Avanade/SitecoreFoundation) - Avanadeによる、Helixのモジュール構成の設計原則に従うSitecoreフレームワーク。
- [PLAY Summit Demo](https://github.com/Sitecore/Sitecore.Demo.Edge) - XM、Experience Edge、Content Hub DAMとCMP、Content Hub Edge、JSS、CDP、Sitecore Personalize、Next.js、Vercelのデモ。

## アイコン <a id="icons"></a>

- [追加の人アイコン](https://github.com/jermdavis/ExtraPeopleIcons) - Sitecoreインスタンスに追加する人のアイコン。
- [sitecore-icon-build](https://github.com/richardszalay/sitecore-icon-build) - Sitecoreアイコンのzipアーカイブを作成し、公開するウェブサイトへ組み込むMSBuild拡張。
- [Sitecore Icons](https://github.com/Antonytm/sitecore-icons) - 1,800以上のFAアイコンと2,500以上のMUIアイコンを、それぞれ4色（黒、青、緑、赤）で提供するインストール可能なコレクション。

## 連携 <a id="integration"></a> <a id="統合"></a>

- [Integration Blueprints](https://github.com/Sitecore/Integration-Blueprints) - Sitecore製品同士や、第三者のシステムとの連携を示すサンプルコード。

## アイテムリソースファイル <a id="item-resource-files"></a>

- [Sitecore IAR Management](https://github.com/GAAOPS/Sitecore.IAR.Management) - アイテムをリソースとして管理するためのPowerShellスクリプト。
- [Sitecore Item as Resource Explorer](https://github.com/GAAOPS/Sitecore.Protobuf.Browser) - Sitecoreの静的データベースファイル（.dat）を閲覧するWPFアプリ。

## 言語 <a id="languages"></a>

- [Sitecore Item Translator](https://github.com/adoprog/Sitecore-Item-Translator) - Google Translateを組み込み、ボタン操作で対応する任意の言語へテキストを翻訳するアイテム翻訳モジュール。
- [Sitecore Item Versioner](https://github.com/aquasonic/SitecoreItemVersioner) - Content Editorのバージョン操作グループへリボンを追加し、設定済みの全言語で最初のアイテムバージョンを作成できるようにする。
- [CopyPageToVersions](https://github.com/merkle-open/SitecoreCopyPageToVersions) - Content EditorとExperience Editorの拡張。指定バージョンのページを、選択した複数の言語バージョンへコピーするダイアログを提供する。ページのレンダリングが参照する全データソースもコピー対象に含む。

## ログ <a id="logging"></a>

- [SitecoreRollingLogFileAppender](https://github.com/ivansharamok/SitecoreRollingLogFileAppender) - ログファイルのサイズ上限を設定できる、Sitecore用Log4net RollingLogFileAppender。
- [RabbitMQ.GEFL.Appender for Sitecore](https://github.com/asmagin/Sitecore.Logger.RabbitMQ.GelfAppender) - Sitecore.Logger用のRabbitMQログアダプターの実装。
- [Logging To Logentries](https://github.com/jammykam/Sitecore.Logentries) - アプリのログをLogentriesへ出力する設定。NLog、Log4net、Serilogなどに対応。
- [Namics.Foundation.Logger](https://github.com/merkle-open/Namics.Foundation.Logger) - 柔軟な設定でログを出力するための静的メソッド集。

## 保守 <a id="maintenance"></a>

- [Admin Scripts for Development and Deploying](https://github.com/jbluemink/Sitecore-Admin-Scripts-for-Development-and-Deploying) - `/admin`フォルダーの追加機能。AddAdminUser、AddEditorUser、ResetAdminPassword、FillDbWithExtranetUser、InstallUpdatePackage、InstallZipPackage、ParameterDrivenPublish、IsPublishTaskRunningを含む。
- [Sitecore Instance Manager](https://github.com/Sitecore/Sitecore-Instance-Manager) - 9.xに対応するSitecore Instance Manager。
- [Sifon](https://github.com/MartinMiles/Sifon) - XCとリモートマシンの操作に対応したバックアップ・復元ツール。プラグインを組み込めるインターフェースを備え、日常作業のさまざまな場面を扱うプラグインを提供する。

## マーケットプレイス <a id="marketplace"></a>

- [Sitecore Marketplace Starter](https://github.com/Sitecore/marketplace-starter) - Marketplaceの拡張を構築するためのスターターテンプレート。Custom Field、Dashboard Widget、Fullscreen、Pages Context Panel、Standaloneの5つの拡張ポイントを示す。それぞれに独自のUIがあり、Sitecore Marketplace SDKと連携する。
- [Google Analytics](https://github.com/Sitecore/marketplace-google-analytics) - XM Cloud環境へGoogle Analyticsを組み込む。ページビューとアクティブユーザーの指標を含むリアルタイムの分析データを、Sitecoreの操作画面内で可視化する。
- [Icon Picker](https://github.com/Sitecore/marketplace-icon-picker) - カスタムフィールドの拡張を作る方法を示す、Marketplaceのアイコン選択アプリのサンプル。

## メディア <a id="media"></a>

- [Autocropper](https://github.com/zkniebel/Autocropper) - 事前に定めたサイズと指定した基準点に基づき、レスポンシブサイト用に画像の切り抜き版を自動生成する。
- [Media-Framework-Brightcove-Edition](https://github.com/Sitecore/Media-Framework-Brightcove-Edition) - Sitecore Media Framework用のBrightcoveコネクター。
- [YouTube連携モジュール](https://github.com/ivansharamok/YouTube-Integration) - YouTubeチャンネルの動画をサイトに表示するモジュール。メディアライブラリのYouTubeフォルダーへチャンネル名を入力すると、全動画がアイテムとして表示される。チャンネルに動画を追加すると、メディアライブラリ側のチャンネルも自動更新される。
- [Shrink](https://github.com/robhabraken/shrink) - ディスク使用量を調べるツールのように、メディアライブラリの使用状況を表示する。使用中・公開中のアイテムも示し、データベース容量を不要に使っているメディアを見つけられる。ライブラリを整理するための複数の方法を提供する。
- [Dianoga](https://github.com/kamsar/Dianoga) - Sitecoreメディアライブラリの画像を自動最適化し、配信画像のサイズを8～70％削減する。画像が要求されると、メディアキャッシュへ入った直後の画像データにmozjpeg、PNGOptimizer、SVGO、WebPのいずれかを自動実行する。

## .NET Coreヘッドレス <a id="net-core-headless"></a>

- [Netcore Auth](https://github.com/robearlam/sitecore-netcore-auth) - .NET CoreのヘッドレスSitecoreアプリで認証を有効にする方法を示すリポジトリ。

## ORM

- [Glass.Mapper](https://github.com/mikeedwards83/Glass.Mapper) - Glass.Sitecore.Mapperを再開発したプロジェクト。複数のCMSでの動作を含め、より堅牢で柔軟なソリューションを目指す。
- [TemplateModelHelper](https://github.com/lowedown/TemplateModelHelper) - Glass.Mapperなどでマッピングした、生成済みSitecoreテンプレートモデル用のヘルパーメソッド。生成モデルを使ったSitecoreデータベースへのクエリを容易にすることが主な目的。
- [TDS-T4-Model-Generation](https://github.com/Sitecore/TDS-T4-Model-Generation) - TDS用のT4モデル生成。
- [Sitecore.CodeGenerator](https://github.com/ParTech/sitecore.codegenerator) - TDSを使わず、T4テンプレートからGlass Mapperのインターフェースを生成する。
- [Synthesis](https://github.com/blipson89/Synthesis) - Sitecore用のオブジェクトマッピングフレームワーク。従来の開発より短時間で、信頼性と保守性の高いサイトを作るためのツール。Sitecoreや.NETの開発者が理解しやすい、強く型付けされたテンプレートオブジェクト生成器を備える。Synthesis.MvcパッケージでSitecore MVCへ統合し、ビューのレンダリングモデルの提供や、コントローラーレンダリングのIoC依存関係として利用できる。

## その他 <a id="other"></a>

- [License Expiration Module 2.0](https://github.com/KayeeNL/Sitecore.License.Expiration.Module) - Sitecoreライセンスの有効期限を確認し、期限が近づくとContent Editorに警告を表示するかメールを送る、または両方を行う。
- [Sitecore.SharedSource.JohnWest](https://github.com/jammykam/Sitecore.SharedSource.JohnWest) - John Westのブログ記事によるSitecoreプロトタイプのコードサンプル集。
- [BLAZOR + SITECORE](https://github.com/GoranHalvarsson/SitecoreBlazor) - HELIXの考え方に従い、Sitecoreアプリをクライアント側で動かせるようにする。
- [Sitecore.SampleMvc](https://github.com/coreyasmith/Sitecore.SampleMvc) - 標準のSitecoreサンプルサイトのコードをMVC版にしたもの。標準版はWeb FormsとXSLTで構築されている。
- [Sitecore TokenManager](https://github.com/JeffDarchuk/SCTokenManager) - 任意の種類のコンテンツをRTEフィールドへ動的に挿入するためのフレームワーク。
- [sxp-notifications](https://github.com/michaellwest/westco-sxp-notifications) - Sitecoreのユーザーへブラウザー通知を送る。
- [Sitecore Redis Session Provider](https://github.com/boro2g/Sitecore-Redis-Session-Provider) - Sitecore用Redisセッションプロバイダーの実装。

## パッケージ化 <a id="packaging"></a>

- [Package Autoloader](https://github.com/JeffDarchuk/PackageAutoloader) - デプロイの一部としてSitecoreパッケージを自動適用し、コンテンツを投入するツール。
- [Sitecore.Ship](https://github.com/kevinobee/Sitecore.Ship) - HTTPリクエストでSitecoreの更新パッケージをインストールする軽量な仕組み。
- [UpdatePackageInstaller](https://github.com/HedgehogDevelopment/UpdatePackageInstaller) - コマンドラインからSitecoreへ更新パッケージをインストールする。
- [Sitecore Package Deployer](https://github.com/HedgehogDevelopment/SitecorePackageDeployer) - Sitecoreサーバーのファイルシステム上のフォルダーから、Sitecore Jobを使って更新パッケージを自動デプロイする。
- [パッケージインストール検証の簡略化](https://github.com/michaellwest/test-sitecore-packages) - パッケージをWDPへ変換してインストールし、インストール結果を検証する。

## パイプライン <a id="pipelines"></a>

- [Pipeline Performance Monitor](https://github.com/ParTech/Pipeline-Performance-Monitor) - Sitecoreパイプラインの実行時間を測定するシンプルなツール。
- [Sitecore Processor Dependency Injection](https://github.com/coreyasmith/Sitecore.ProcessorDi) - Sitecoreのパイプラインプロセッサで依存性注入を行う例を示すシンプルなプロジェクト。

## 公開 <a id="publishing"></a>

- [Scheduled Publishing](https://github.com/HedgehogDevelopment/SCScheduledPublishing) - コンテンツ編集者が、アイテムの公開を将来の時点まで遅らせるための機能。
- [AdvancedPublishDialog](https://github.com/Sitecore/AdvancedPublishDialog) - 標準の公開ダイアログを拡張したもの。
- [Publishing Service用Azureテンプレート](https://github.com/coreyasmith/sitecore-publishing-service-azure-templates) - Sitecore Azure PaaS環境へSitecore Publishing ServiceをインストールするARMテンプレートと、必要なWeb Deployment Packageを作るスクリプト。
- [Publishing ServiceをインストールするSIFスクリプト](https://github.com/KayeeNL/sitecore-sif-autoinstall-publishingservice) - Sitecore Install Framework（SIF）を使い、ContentManagementインスタンスまたはStandAloneインスタンスへPublishing ServiceとPublishing Moduleを自動インストールするPowerShellスクリプト。
- [Publish Viewer](https://github.com/mikeedwards83/Glass.PublishViewer) - Sitecore Publishing CM Serverの公開キューを監視し、状態を確認して、必要に応じて公開ジョブを取り消す。キューへ入った時刻、ジョブの開始時刻、キュー内での所要時間、公開件数、1アイテム当たりの平均公開時間、公開ジョブの全メッセージなどを確認できる。
- [Sitecore Power Publish](https://github.com/robhabraken/sitecore-power-publish) - 3種類の操作を提供する。1）Publishボタンは、公開制限のItemタブにあるPublishableの設定にかかわらず、アイテムを強制的に公開する。まだ公開されていないリンク先ページは公開せず、表示に必要なメディアライブラリのアイテムやフィールド内のデータソースなどのリソースを公開する。使用するテンプレートやレイアウトが未公開なら、それらも公開する。2）Unpublishボタンは1クリックで公開を解除する。Publishableを外し、子アイテムを含まない完全なRepublishを行う。3）Publishing Stateボタンは全公開先の状態を示す。最新なら緑、公開後にアイテムが変わっていればオレンジ、公開先にアイテムがなければ赤の点を表示する。編集者は公開先ごとに詳細な状態を確認できる。

## ルール <a id="rules"></a>

- [Page Rules](https://github.com/marek-musielak/Marek.Musielak.PageRules) - 訪問者が閲覧するページごとに、カスタムのSitecoreルールを作成する。利用例は、利用規約ページを読まずにコンテストページを見ようとする訪問者、特定日以降にだけアクセスさせたいページ、GEO IPデータによるホームページの言語切替、翻訳がまだないページなど。
- [ItemNamingRules](https://github.com/seankearney/Sitecore-ItemNamingRules) - ルールエンジンでアイテム名の規則を自動化する条件とアクション。コンテンツツリーのブランチごとに異なる命名規則を適用できる。
- [MenuItemRules](https://github.com/jammykam/Konabos.SharedSource.MenuItemRules) - ルールに基づくコンテキストアイテムメニューの表示制御。
- [Sitecore adaptive rules](https://github.com/boro2g/sitecore-adaptive-rules) - 条件とアクションのプロパティが互いに依存する場合に役立つ、Sitecoreルールエンジン用の適応型ルール。
- [Organize Insert Options Rules](https://github.com/coreyasmith/OrganizeInsertOptionsRules) - uiGetMastersパイプライン用のプロセッサ。コンテンツツリーでInsert Options Rulesを任意に整理できる。
- [Conditional Placeholder Settings](https://github.com/matthewkenny/ConditionalPlaceholderSettings) - Sitecoreの既存のプレースホルダー設定機能を、ルールエンジンから扱うためのモジュール。
- [Sitecore Adaptive Rules](https://github.com/adamconn/sitecore-adaptive-rules) - 条件とアクションのプロパティに相互依存がある場合に役立つ、適応型ルールをルールエンジンへ追加する。

## SDK

- [JSS](https://github.com/Sitecore/jss) - Sitecore JavaScript Services SDKの公式リポジトリ。
- [Content SDK](https://github.com/Sitecore/content-sdk) - XM CloudでSitecore Content SDKの利用を始めるための、全パッケージとテンプレートのソースコード。
- [ASP.NET Core SDK](https://github.com/Sitecore/ASP.NET-Core-SDK) - Sitecore DXPとXM Cloud用の公式オープンソースASP.NET Core SDK。
- [Marketplace SDK](https://github.com/Sitecore/sitecore-marketplace-sdk) - Sitecore Marketplace SDKの3つの主要パッケージを収録する。iframe内で動くクライアントアプリ、コアSDK、XMCモジュールで、システムの機能を拡張する。

## セキュリティ <a id="security"></a>

- [セキュリティヘッダー](https://github.com/GuitarRich/SXA.SecurityHeaders) - SXAを例にレスポンスのセキュリティヘッダーの実装を示す。SXAに限定されず、Helix一般に適用できる。
- [SI Snitch](https://github.com/KayeeNL/SI-Snitch) - Sitecore Identityで変換された後にSitecoreへ渡されるクレームを読み取るデバッグツール。受け取るクレームとその形式の確認や、Sitecore Identityのグループ変換が正しく処理されているかの確認に役立つ。
- [MasterKey](https://github.com/islaytitans/MasterKey) - Sitecoreアイテムのロックを解除するモジュール。
- [Security Rights Reporting](https://github.com/jbluemink/Sitecore-Security-Rights-Reporting) - 全ユーザーと全権限をグリッドで表示するモジュール。エクスポート機能を備える。
- [Sitecore Delete Access Rights](https://github.com/mikaelnet/sitecore-access-rights) - item:removeVersionアクセス権を有効にし、アイテム全体の削除を許可せずに、個々のバージョンを削除できるようにする。また、アイテムに明示的な削除拒否が設定されていなければ、最初の作成者が自分のアイテムを削除できる。
- [ASP.NET 2.0 Membership Database as Identity Server User Store](https://github.com/Sitecore/sitecore-identityserver-contrib-membership) - 既存システムのユーザーデータを保存したASP.NET 2.0メンバーシップデータベースに対して、ログインとパスワードを検証する。
- [Certz](https://github.com/michaellwest/certz) - 証明書管理を簡略化する、mkcertの代替ツール。.NET 7で構築し、自己完結型のexeへコンパイルされている。

## SEO

- [301 Redirect Module](https://github.com/thecadams/301RedirectModule) - Sitecoreの301リダイレクトモジュールの改良版。
- [SitecoreSitemapXML](https://github.com/JimmieOverby/SitecoreSitemapXML) - sitemaps.orgのスキーマに従うサイトマップを生成し、検索エンジンへ送信する。
- [Sitemap Generator](https://github.com/jermdavis/SitemapGenerator) - サイトマップ生成用の、Sitecore、FakeDB、TDS、Cloud Buildを使うプロジェクト例。
- [Sitecore Solr](https://github.com/bigredmachine/sitecore-solr) - SitecoreのSolrプロバイダーを拡張するコードの例。
- [URL Rewriter Module](https://github.com/ParTech/Url-Rewriter) - 管理者や編集者がSitecoreクライアントからURL書換えルールを管理する。ホスト名、相対URL、絶対URLの書換えに対応。
- [RedirectManager](https://github.com/AlexanderDavyduk/Sitecore-RedirectManager) - Sitecore用のリダイレクト管理ツール。
- [URL Rewrite](https://github.com/iamandycohen/UrlRewrite) - Redirect / Rewriteモジュールを特定サイト向けにした版。

## シリアライズ <a id="serialization"></a>

- [Rainbow](https://github.com/SitecoreUnicorn/Rainbow) - Sitecoreのシリアライズ形式とファイルシステム構成を完全に置き換えることを目的とした、高度なシリアライズライブラリ。異なるソース間のアイテム比較にも対応する。
- [Unicorn](https://github.com/SitecoreUnicorn/Unicorn) - Sitecoreのテンプレート、レンダリング、その他のデータベースアイテムを、インスタンス間で移すツール。アイテムをシリアライズしてコードとともにディスクへ保存し、コードベースに必要なデータベースアイテムをソース管理へ含める。
- [Sidekick](https://github.com/JeffDarchuk/SitecoreSidekick) - AngularJSに基づくマイクロサービス構成の操作用フレームワーク。
- [Rhino](https://github.com/kamsar/Rhino) - Sitecore用の実験的なシリアライズデータプロバイダー。

## Sitecore Host

- [Sitecore Host Quick Start](https://github.com/sitecoreguild/SitecoreHostQuickStart/tree/develop) - 独自のSitecore Hostアプリを作り始めるための基本テンプレート集。
- [Hostbase](https://github.com/muso31/Hostbase) - Sitecore Hostアプリの出発点として使えるソリューション例。現在はIdentityServer Host内のプラグインとして動く。単独のSitecore Hostアプリが一般に利用可能になったら更新する予定。
- [Sitecore Host Plugins](https://github.com/JuliusAngwenyi/SitecoreHostPlugins) - Sitecore Identity Serverを拡張するためのSitecore Hostプラグイン。
- [基本的なSitecore Hostアプリ](https://github.com/georgechang/schost-basic) - デモ用ウェブページを表示する基本的なSitecore Hostアプリ。


## Sitecore Search

- [Sitecore Search Starter Kit](https://github.com/Sitecore/Sitecore-Search-TS-SDK-Starter-Kit) - Sitecore Search JS SDKでSitecore Searchサービスと連携し、イベント追跡に対応するコンテンツウェブサイトの実装例。
  
## Sitecore Send

- [Sitecore Send Postman Collection](https://github.com/neilkillen/SitecoreSendPostmanCollection) - Sitecore Send APIのBlueprint仕様を、Postmanで使うOpen APIへ変換したコレクション。

## SPE（Sitecore PowerShell Extension） <a id="spe-sitecore-powershell-extension"></a>

- [Sitecore PowerShell Book](https://github.com/SitecorePowerShell/Book) - Sitecore PowerShellの全ドキュメントをまとめた書籍。
- [Sitecore PowerShell](https://github.com/SitecorePowerShell) - Sitecore PowerShell Initiativeの公式GitHub。
- [Sitecore.Utilities](https://github.com/alan-null/Sitecore.Utilities) - Sitecore PowerShell Extensions用の小規模モジュール集。
- [SPE Content Migrator](https://github.com/michaellwest/Spe-Content-Migrator) - SPEを使い、Sitecoreインスタンス間でコンテンツを移行するスクリプト。

## SPEAK

- [Speak 3スターターテンプレート](https://github.com/Mitya88/SitecoreSpeak3StarterProject) - Angular CLI 1.2.7で生成したSpeak 3のスターターテンプレート。
- [Sitecore Speak UI Library](https://github.com/Mitya88/SitecoreSpeakUILibrary) - Angular CLI 1.2.7で生成したSpeak 3のコンポーネント。
- [SitecoreDataImporter](https://github.com/komainu85/SitecoreDataImporter) - CSV、JSON、XMLをSitecoreアイテムへインポートするSPEAKアプリ。

## SXA（Sitecore Experience Accelerator） <a id="sxa-sitecore-experience-accelerator"></a>

- [Sitecore Experience Accelerator index](https://github.com/alan-null/SXA.Index) - SXAのドキュメント一式。
- [SXA Styleguide](https://github.com/markvanaalst/SXA.Styleguide) - SXAの内部動作とベストプラクティスを説明する、SXAベースの学習サイト。
- [SXA.Styleguide.Frontend](https://github.com/markvanaalst/SXA.Styleguide.Frontend) - サイトを動かすための全フロントエンドコード。SXAテーマとScribanテンプレートの2部分からなる。フォルダー構成はSXA Creative Exchangeの出力に倣い、テーマと各Scribanテンプレートのソースを収録する。
- [SXA.Foundation.Variants](https://github.com/MartinMiles/SXA.Foundation.Variants) - カスタムのSXAレンダリングバリアントと、ソリューションで使える関連機能のコレクション。
- [SXA Reference](https://github.com/alan-null/XA.Reference) - Sitecore Experience Acceleratorを基盤とするSitecoreプロジェクト例。
- [SXA.HealthCheck](https://github.com/alan-null/SXA.HealthCheck) - SXAサイトの状態を調べるPowerShellスクリプト。各検証ステップでソリューション内の異なる要素をチェックし、解決方法を提示する。
- [Global Field Validator](https://github.com/JeffDarchuk/SxaGlobalFieldValidator) - テンプレートのフィールド単位ではなく、サイト全体でフィールドを検証するSXAモジュール。
- [Scriban構文の色付けと自動補完](https://github.com/AdamNaj/SitecoreScriban-vscode) - Visual Studio Code用の拡張。Scriban構文の色付けと、既知のオブジェクトに対するIntelliSenseを提供する。
- [Westco SXA Extensions](https://github.com/michaellwest/westco-sxa-extensions) - Sitecore Experience Accelerator（SXA）の拡張。
- [docker-sxa-node](https://github.com/michaellwest/docker-sxa-node) - NodeをインストールしたDockerコンテナー内でSXA CLIを使う例。
- [SXAのセキュリティヘッダー](https://github.com/GuitarRich/SXA.SecurityHeaders) - SXAを例にレスポンスのセキュリティヘッダーの実装を示す。SXAに限定されず、Helix一般に適用できる。
- [SXA.Platform.Assemblies](https://github.com/konabos/SXA.Platform.Assemblies) - SXA v1.6まで遡るアセンブリ一覧と、独自の一覧を生成するPowerShellスクリプト。

## テスト <a id="testing"></a>

- [Sitecore FakeDb](https://github.com/sshushliapin/Sitecore.FakeDb) - メモリ内でSitecoreコンテンツを作成・操作する単体テスト用フレームワーク。コンテンツツリー全体ではなく、必要最小限のテストデータに絞り、初期化の手間を抑える。
- [Minq](https://github.com/valtech/minq) - SitecoreとSitecore MVC向けの、モックとLINQに対応する機能。

## テンプレート <a id="templates"></a>

- [Token Set](https://github.com/retohugi/SitecoreExtension-TokenSet) - Sitecore Data Templates用の追加の標準値トークン。将来の日付や、クエリを実行して得た値を扱う。

## ツール <a id="tooling"></a>

- [Terminal DevEx Improvements](https://github.com/Sitecore/Windows-Terminal-DevEx-improvements) - Sitecoreのブランドを使ったWindows TerminalとVS Codeのテーマ・プロファイル。XM Cloudの作業を支援する、自動補完、コマンド履歴一覧、ディレクトリ操作の改善などを提供する。

## Universal Tracker

- [UniversalTracker SDK](https://github.com/Sitecore/Sitecore.UniversalTracker.MobileSDK) - クライアント側の.NETアプリ向けに、インタラクションとイベントを書き込むAPIを提供する.NET Standardライブラリ。Universal Trackerサービスとアプリを結び、HTTPリクエストやJSONレスポンスを直接扱わずに、ネイティブオブジェクトを使えるようにする。

## Web API <a id="webapi"></a>

- [Sitecore Endpoints](https://github.com/MartinMiles/Sitecore.Endpoints) - HelixのFeatureとして実装した、Sitecore Services ClientとSitecore WebApiのすぐ使えるサンプル。
- [Odata.SitecoreExample](https://github.com/ianjohngraham/Odata.SitecoreExample) - Sitecore oDataリポジトリの例。
- [Web APIのセッション対応ルート](https://github.com/coreyasmith/WebApiEnableSessionHandler) - Web API 2のセッションを有効にするSitecoreパイプラインプロセッサとHttpRouteCollectionの拡張。
- [Sitecore Shared Source: Web API Client](https://github.com/thinkfreshnick/SitecoreSharedSource) - Sitecore WebAPIクライアント。
- [Sitecore Services Client Publish](https://github.com/peplau/SscPublish) - アイテムやツリーのSitecoreでの公開を安全に呼び出すWeb APIメソッド。

## ワークフロー <a id="workflows"></a>

- [DynamicWorkflows](https://github.com/ivansharamok/DynamicWorkflows) - ルールエンジンに基づくワークフロー管理ツール。

## xConnectとxDB <a id="xconnect-and-xdb"></a>

- [XConnectTutorial](https://github.com/jst-cyr/XConnectTutorial) - Sitecoreのドキュメントに基づき、xConnect APIの一般的な操作を学ぶチュートリアルリポジトリ。Martina WelanderのGetting Startedチュートリアルなどのドキュメントによるコードを使う。
- [XConnectHelper](https://github.com/lowedown/xConnectHelper) - xConnectをデバッグするための多機能ツール。現在の追跡セッションのデータ、最後のページビューで発生したゴールとイベントを表示する。接続・証明書・設定を検証する状態チェック、現在のセッションへの識別子と基本連絡先データの設定、即時処理のためのセッションのフラッシュも行う。
- [XdbTracker](https://github.com/lowedown/XdbTracker) - クライアント側からSitecoreのイベント、ゴール、成果を発生させるAPIとJavaScript関数。
- [Experience Generator](https://github.com/Sitecore/xGenerator) - 設定可能なパターンで、Sitecoreサイトへ実際の利用に似たトラフィックを生成する。
- [xconnect-odata-proxy](https://github.com/ianjohngraham/xconnect-odata-proxy) - Sitecore 9のxConnect oData APIへアクセスするためのシンプルなNode.jsプロキシ。
- [xConnectDeployer](https://github.com/boro2g/xConnectDeployer) - Marketing Automation Engineをデプロイするコンソールアプリの例。
- [Right To Be Forgotten](https://github.com/steviemcg/SitecoreComms.RTBF) - Marketing Automation Action用の、忘れられる権利の処理を実行するプラグイン。

## XM Cloud

- [Next.js Styleguide for XM Cloud](https://github.com/sitecorelabs/XmCloudNextJsJssStyleguide) - Sitecore Containers、Sitecore Next.js SDK、Sitecore Content Serializationを学び、使い始めるためのソリューション。
- [Play Summit](https://github.com/Sitecore/Sitecore.Demo.XmCloud.PlaySummit) - XM Cloud、Content Hub DAM、CMP、Next.jsとVercelでのホスティングなどを使うPlay Summitのデモ。
- [XM Cloud Starter Kit](https://github.com/sitecorelabs/xmcloud-foundation-head) - XM Cloud、SXA、Next.jsを学び、使い始めるためのソリューション。
- [XM Cloud Introduction](https://github.com/Sitecore/XM-Cloud-Introduction) - SitecoreのTechnical Marketing Teamが管理するXM Cloudサイト群のコード。新しいMVPウェブサイトと、SUGCONイベントの3つのウェブサイトを含む。
- [FEaaS BYOC Example](https://github.com/Sitecore/feaas-nextjs-example) - ベストプラクティスに従うBYOCコンポーネントの例を示すリポジトリ。
- [Sitecore GraphQL Import](https://github.com/jbluemink/Sitecore-GraphQL-Import) - Sitecore GraphQL APIの機能を示すコンソールアプリ。アイテムの取得、ウェブサイト一覧の取得、サンプルアイテムの挿入、メディアファイルのアップロードなどを扱う。
- [Verticals](https://github.com/Sitecore/Sitecore.Demo.XMCloud.Verticals) - XM Cloudのコンテンツ管理とサイト管理の機能を中心とした、ヘッドレスの複数サイト向けソリューション。特定業界向けに容易にカスタマイズできるサンプルサイトを含む。
- [Node XM Cloud Proxy](https://github.com/Sitecore/jss/tree/release/22.0.0/packages/create-sitecore-jss/src/templates/node-xmcloud-proxy) - XM CloudのNext.jsスターターキットと同等のバックエンド機能を提供するNodeプロキシアプリ。新しいAngularスターターを支援するために導入された。全SPAフレームワークを対象に設計され、ReactやVueのアプリも動かせる。他のフロントエンドフレームワーク用のJSSスターターキットを今後構築するための基盤となる。
