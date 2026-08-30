---
title: "Awesome Low Code"
description: "Low Codeを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-zenitysec-awesome-low-code-readme-md"
---

# Awesome Low Code

Low Codeを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [プラットフォーム](#platforms)
   - [市民開発・自動化プラットフォーム](#citizen-automation-and-development-platform)
   - [ローコードアプリケーションプラットフォーム](#low-code-application-platform)
   - [ビジネスプロセス管理](#business-process-management)
   - [ロボティック・プロセス・オートメーション](#robotic-process-automation)
   - [インテリジェント仮想エージェント](#intelligent-virtual-agent)
   - [Integration Platform as a Service](#integration-platform-as-a-service)
   - [ローコード API 管理プラットフォーム](#low-code-api-management-platform)
- [ツール、拡張機能、フレームワーク](#tools-extensions-and-frameworks)
- [参考資料](#reference-resources)
- [学習資料](#learning-resources)
- [サンプル、テンプレート、ソリューション](#samples-templates-and-solutions)
- [コミュニティ](#community)
- [ブログ](#blogs)
- [その他のリスト](#other-lists)

<a id="platforms"></a>
## プラットフォーム

<a id="citizen-automation-and-development-platform"></a>
### 市民開発・自動化プラットフォーム

コーディングスキルを必要とせず、直感的なドラッグ＆ドロップ操作を基盤とする業務ユーザー向け開発プラットフォームです。ここでいう市民開発者は職種名ではなく業務ユーザーを指します。IT部門を介さず、業務プロセスの自動化・効率化や個人の生産性向上を目的としたアプリを作成でき、通常は SaaS として利用されます。

- [Power Automate (Microsoft)](https://flow.microsoft.com/) - オンラインワークフローサービスで、最も一般的なアプリとサービス間のアクションを自動化します
- [Zapier](https://zapier.com/) - ユーザーが使っているアプリを簡単に接続・自動化できるようにします
- [Einstein Automate (Salesforce)](https://www.salesforce.com/products/platform/einstein-automate/) - 専門的な開発スキルが不要な状態で、ビジネスプロセスを簡単に自動化することで、従業員が重要な業務に集中できるようにします
- [Jira Automation (Atlassian)](https://www.atlassian.com/software/jira/features/automation) - Jira内のイベントに基づいて「もしAならばB」というルールを構築できる、コードなしのルール作成ツールです
- [Trello Power-Ups (Atlassian)](https://trello.com/power-ups/category/automation) - 柔軟な機能と統合により、チームが独自のビジネスニーズを満たすことができます
- [Flow (Zoho)](https://www.zoho.com/flow/) - コードを一切使わず、アプリを接続できる統合プラットフォームです
- [FormNX](https://formnx.com) - コードを書かずに無料でフォームを作成できるノーコードプラットフォームです。Webhook、Mailchimpとの統合も提供され、ウェブサイトやウェブアプリにフォームを簡単に埋め込むことができます
- [Postman Flows](https://learning.postman.com/docs/postman-flows/overview/#get-started-with-flows) - API中心のアプリを協働環境でプロトタイピング、開発、デプロイできる低コードエディタです。タスク自動化、システム統合、チーム内または世界中の他のメンバーにAPIを公開できるフローモジュールを作成できます。Postman API Networkで実現します

<a id="low-code-application-platform"></a>
### ローコードアプリケーションプラットフォーム

使いやすいドラッグ＆ドロップ操作により、追加のコーディングを最小限または不要にして、強力なエンタープライズアプリを構築できる高度な開発プラットフォームです。開発工程を簡素化して幅広い役割の人が参加できるため、開発を加速し、開発・保守コストも削減できます。通常は PaaS として提供されます。
- [Tabidoo](https://tabidoo.cloud/) - 成熟したワークフロー、権限管理、統合（REST API）を備えた強力な低コードプラットフォーム。多数の事前定義テンプレートあり。ユーザー数に対して料金はかかりません
- [Power Apps (Microsoft)](https://powerapps.com/) - データに簡単に接続し、Excelのような表現を使って論理を追加し、ウェブ、iOS、Androidデバイス上で実行できるアプリを数時間で作成できます
- [Power BI](https://powerbi.microsoft.com/) - 複数のソースからデータを統合し、対話的で没入感のあるダッシュボードやレポートを作成して、実用的な洞察とビジネス成果につなげます
- [Appian](https://appian.com/) - 組織が迅速に強力なアプリケーションを開発できる低コードソフトウェア開発プラットフォームを提供します
- [Mendix](https://mendix.com/) - マルチチャネルアプリケーションを大規模に作成し、継続的に改善できる高速で使いやすい高生産性プラットフォームです
- [OutSystems](https://www.outsystems.com/) - 企業レベルのアプリケーションを開発・デプロイ・運用できる低コードプラットフォームです
- [Now Platform (ServiceNow)](https://www.servicenow.com/now-platform.html) - 重要なアプリケーションを迅速に構築し、作成者が増える一方で複雑さを減らし、企業全体にスケールして、ユーザーが愛する体験を提供できます
- [Creator (Zoho)](https://www.zoho.com/creator/low-code-platform/) - コードを書かずに、ゼロからアプリケーションを構築できます
- [BettyBlocks](https://www.bettyblocks.com/) - イノベーション、柔軟性、エンパワーメントのためのトップクラスのノーコードプラットフォーム。モバイル、ビジネス、ウェブアプリを驚異的なスピードで作成できます
- [APEX (Oracle)](https://apex.oracle.com/en/platform/low-code/) - 世界クラスの機能を備えた、スケーラブルで安全な企業向けアプリケーションを開発できる低コード開発プラットフォーム。どこでもデプロイ可能です
- [Salesforce Platform, prev. Force.com (Salesforce)](https://www.salesforce.com/products/platform) - どこからでもクリックして作成し、すぐにリリースできます
- [KAI-Flow](https://www.kaiflow.io/) - KAI Flowは、複雑なAIワークフローの設計とスケーリングを目的としたオープンソース低コードプラットフォームです
- [n8n](https://n8n.io/) - ワークフロー自動化ツールで、多数の統合が可能であり、fair-codeライセンスを使用。
- [Linx](https:/linx.software) - 汎用的な低コードプラットフォームで、API、自動化、統合などのバックエンドを構築およびホスティングできる。
- [DronaHQ](https://www.dronahq.com/?ref=github-gs) - Webおよびモバイルアプリの内部アプリをドラッグ＆ドロップで構築できる低コードプラットフォーム。
- [ILLA Cloud](https://www.illacloud.com/) - 開発者が数分で内部ツールを構築できる低コードプラットフォーム。
- [Loopple](https://www.loopple.com) - ドラッグ＆ドロップでダッシュボードを構築できる低コードプラットフォーム。
- [Appsheet (Google)](https://about.appsheet.com/home/) - Google AppSheet は、豊富なプログラミング知識がなくてもカスタムのモバイル／ウェブアプリを作成できるノーコード開発プラットフォームです。ドラッグ＆ドロップ操作でアプリを構築し、各種データソースや API と連携してワークフローを自動化できます。
- [YepCode](https://yepcode.io) - サーバーレス環境でAPIおよびサービスを接続できる一括プラットフォーム。JavaScriptまたはPythonで直接作業が可能で、統合および自動化プロセスの開発、実行、監視が可能。
- [DronaHQ](https://www.dronahq.com/) - エンジニアチームおよび製品マネージャーが、内部ツール、カスタムユーザー体験、デジタル体験、自動化、カスタム管理パネル、運用アプリなど、10倍速く構築できる低コードプラットフォーム。
- [REI3](https://rei3.de/en/home) - オープンな低コードアプリケーションプラットフォーム。ほぼすべてのシステムで動作し、オンプレミスまたはクラウドで利用可能であり、個人および組織に対して無料。
- [Iotellect](https://iotellect.com) - IoT向けの低コードプラットフォームで、デバイス統合、データ収集、リアルタイム可視化ソリューションを構築可能。MQTT、OPC UA、Modbusなど50以上の工業プロトコルをサポートし、ドラッグ＆ドロップUIビルダーを備えている。
- [TemplateFox](https://pdftemplateapi.com/) - ドラッグ＆ドロップテンプレートエディタとREST APIを備えたPDF生成プラットフォーム。大量のドキュメント作成を自動化できる。
- [Rierino](https://rierino.com/) - 開発者ファーストのローコードプラットフォーム。視覚的なフロー設計、構成可能なアーキテクチャ、組み込み AI 機能を備え、企業向けバックエンドアプリ、マイクロサービス、API を構築・統合できます。無料でセルフホストできる Community Edition も提供されます。

<a id="business-process-management"></a>
### ビジネスプロセス管理

業務プロセスの合理化に特化したローコードアプリケーションプラットフォームです。使いやすいドラッグ＆ドロップ操作により、コーディング経験のない業務ユーザーでも複雑なワークフローや処理を自動化できます。自動化は通常、重要な業務プロセスを中心とするイベント駆動（トリガー）方式で構築され、SaaS またはオンプレミス製品として利用できます。

- [PegaSystems](https://www.pega.com/) - 企業向けの業務プロセスおよび顧客関係管理ソリューションを提供。
- [AgilePoint](https://agilepoint.com/) - AgilePointのデジタルプロセス自動化プラットフォームにより、ビジネスを変えるアイデアを数分で、月単位ではなくデプロイできる。
- [QuickBase](https://www.quickbase.com/) - より良い働き方のアイデアを、効率・情報活用・生産性を高めるアプリへ素早く変換できます。
- [Creatio](https://www.creatio.com/) - プロセス管理と CRM のための先進的なローコードプラットフォームを提供するグローバルソフトウェア企業です。
- [AuraQuantic](https://www.auraquantic.com/) - ビジネスユーザーが簡単にかつ迅速に無限のプロセスおよびアプリケーションを構築できるデジタルプラットフォーム。
- [Kintone](https://www.kintone.com/) - ビジネス変革に最適なパフォーマンスソフトウェアプラットフォーム。
- [ProntoForms](https://www.prontoforms.com/) - フィールド販売、フィールドサービス、フィールドデータ収集を自動化するモバイルビジネスソリューションを提供。
- [TrackVia](https://trackvia.com/) - 業務運用向けの先進的なローコードワークフロープラットフォーム。
- [NewGen](https://newgensoft.com/) - 複雑なコンテンツ中心のビジネスニーズを、1つの包括的なLow Codeプラットフォームで簡略化します。
- [Naologic](https://naologic.com/) - ビジネスユーザーとプロセスに特化した専門家が開発した生産性アプリケーションで、複雑なプロセスを簡素化・自動化します。

<a id="robotic-process-automation"></a>
### ロボティック・プロセス・オートメーション

人手のかかる作業をなくしてミスを防ぎ、人の注意を重要な業務へ集中させる自動化プラットフォームです。RPA は、エンドユーザーが構築するソフトウェアロボットによって反復的な手作業を自動化し、人と同様に SaaS やオンプレミスアプリを操作します。RPA 技術には、こうしたロボットの構築、配備、管理が含まれます。

- [Power Automate Desktop (Microsoft)](https://powerautomate.microsoft.com/en-us/robotic-process-automation/) - Power Automate DesktopのRPAデスクトップフローを使って、シンプルなデータ転送から複雑なビジネスプロセスまで、直接デスクトップから自動化できます。
- [Servicetrace RPA (Salesforce)](https://www.servicetrace.com/) - ロボットソリューションにおけるイノベーションを実現します。
- [Appian RPA](https://appian.com/platform/complete-automation/robotic-process-automation-rpa.html) - 人間、システム、データを1つのワークフローで統合し、RPAボットをオーケストレーションし、組織全体の自動化をスケーリングします。
- [Workato RPA](https://www.workato.com/modern-rpa) - インテリジェント自動化を支える統合型RPA。
- [UiPath](https://www.uipath.com/) - 繰り返し・時間のかかるタスク（データ入力やデータ処理など）を自動化できるロボットプロセス自動化（RPA）ソフトウェアのリーダー。そのプラットフォームには、自動化ワークフローのビジュアル設計者、ワークフローの実行用ロボット、パフォーマンスの監視・最適化に必要な分析ツールが含まれています。
- [AutomationAnywhere](https://www.automationanywhere.com/) - ルールベースの意思決定、機械学習、人工知能を組み合わせて業務を自動化できるロボットプロセス自動化（RPA）ソフトウェアの提供者。そのプラットフォームには、自動化の作成・展開に便利なユーザーインターフェースがあり、さまざまな部署や業界にわたって業務を自動化できます。
- [BluePrism](https://www.blueprism.com/) - 繰り返し・手動のタスク（データ入力など）を自動化できるロボットプロセス自動化（RPA）ソフトウェアの提供者。広範なコーディング知識を必要とせず、高負荷・複雑なタスクを処理できるデジタルワークフォースを備え、さまざまなシステムやアプリケーションとの統合が可能で、業務運営を効率化します。

<a id="intelligent-virtual-agent"></a>
### インテリジェント仮想エージェント

反復的でミスの起きやすい手作業を、より速く自動実行するためにユーザー自身が構築・設定するソフトウェアです。ボットは主にローコードプラットフォームのドラッグ＆ドロップ操作で構築されます。代表例として、メッセージングや音声プラットフォーム上でユーザーと対話し、意思決定や業務処理を支援するボットがあります。

- [Power Virtual Agents (Microsoft)](https://powervirtualagents.microsoft.com/) - 顧客、他の従業員、またはウェブサイトやサービスの訪問者からの質問に答えることができる強力なチャットボットを作成できます。
- [Workato Workbot](https://docs.workato.com/workbot/overview.html) - カスタマイズ可能なワークフローを構築できるボットプラットフォーム。
- [AnveVoice](https://anvevoice.app) - 1行の JavaScript 埋め込みでウェブサイトに導入できるノーコード AI 音声エージェント。50以上の言語をサポートし、コーディングスキルは不要です。

<a id="integration-platform-as-a-service"></a>
### Integration Platform as a Service

内製アプリやサードパーティ SaaS の連携方法を制御・簡素化・標準化するプラットフォームです。アプリ間のデータ共有や業務ワークフローの自動化を統制された形で実現し、ミスの起きやすい手作業を減らします。ソフトウェア開発者へ常に依存せず、より多様な役割の人が連携を構築できます。SaaS またはオンプレミス製品として導入できます。

- [Azure Logic Apps (Microsoft)](https://azure.microsoft.com/en-us/services/logic-apps/) - アプリケーション、データ、サービス、システムを統合した自動化ワークフローを作成・実行できるクラウドベースプラットフォーム。
- [MuleSoft (Salesforce)](https://mulesoft.com/) - どのシステムからもデータを接続し、つながった体験を構築できる統合・APIプラットフォームを提供します。
- [Workato](https://www.workato.com) - 規制とセキュリティを損なわずに、組織がより速く、賢く働くことを支援するエンタープライズ自動化プラットフォーム。

<a id="low-code-api-management-platform"></a>
### ローコード API 管理プラットフォーム

API エンドポイントの作成、管理、監視を含む、API ライフサイクル全体の管理に対応するローコードプラットフォームです。

- [MuleSoft](https://www.mulesoft.com/platform/api-management) - APIのライフサイクルを管理し、迅速にAPIを設計・テスト・公開できます。
- [Workato API Management](https://docs.workato.com/api-management.html) - 呼び出し可能なレシピをエンドポイントに変換し、エンドポイントをAPIコレクションに整理することで、他のレシピや第三者アプリからエンドポイントを簡単に見つけたり利用したりできるようになります。Workatoアカウントへのアクセスを必要としません。


<a id="tools-extensions-and-frameworks"></a>
## ツール、拡張機能、フレームワーク

### Power Platform (Microsoft)

- [XrmToolBox](https://github.com/MscrmTools/XrmToolBox) - Microsoft Dynamics CRM/365/Dataverse/PowerAppsのカスタマイズと設定を容易にする複数のツールを集めたアプリケーション。
- [Levelup for Dynamics CRM](https://github.com/rajyraman/Levelup-for-Dynamics-CRM) - Chrome、Edge ChromiumおよびFirefox拡張機能によるDynamics CRM/365/Power AppsのPowerユーザー向けツール。
- [Power Platform Adoption Framework](https://github.com/PowerPlatformAF/PowerPlatformAF) - 大規模かつエンタープライズレベルの組織で展開されているPower Platform上で、人々が美しい・有用なものを創出できるフレームワーク。
- [Flow & Power Apps Migrator](https://github.com/Zerg00s/FlowPowerAppsMigrator) - SharePointのデータソースをMS FlowおよびPowerAppsに変換し、任意の新しいテナントに移行します
- [SharePoint Workflow Converter](https://github.com/TracyGH/SharePointWorkflowConverter) - 従来の SharePoint 2010／2013 カスタムワークフロー定義ファイルを取得し、Power Automate フローをプログラムから作成する C# コンソールアプリの概念実証

<a id="reference-resources"></a>
## 参考資料

### Power Platform (Microsoft)

- [Power Platform Connectors](https://github.com/microsoft/PowerPlatformConnectors) - Microsoft Power Automate、Power Apps、Azure Logic Appsのコンネクタを収集するリポジトリ
- [Microsoft Power Fx](https://github.com/microsoft/Power-Fx) - Power Fxの低コードプログラミング言語

### Workato

- [Custom Connector Docs](https://github.com/workato/custom_connector_docs) - Workatoのカスタムコンネクタドキュメント用のソースファイル

<a id="learning-resources"></a>
## 学習資料

### Power Platform (Microsoft)

- [Power Fx Samples](https://github.com/pnp/powerfx-samples) - Power Fxの低コードプログラミング言語に関するサンプルを収録したリポジトリ
- [Power Apps & Azure Lab](https://github.com/microsoft/PowerApps-Azure-Lab) - PowerApps Azure Labをホストするリポジトリ
- [PL-900: Power Platform Fundamentals](https://github.com/MicrosoftLearning/PL-900-Microsoft-Power-Platform-Fundamentals) - Power Platform Fundamentalsコースの教材

### Workato

- [Embedding Guide](https://github.com/workato/full-embed-sample) - Workatoの埋め込み機能を使用するためのガイド例

<a id="samples-templates-and-solutions"></a>
## サンプル、テンプレート、ソリューション

### Power Platform (Microsoft)

- [Power Apps Samples](https://github.com/pnp/powerapps-samples) - カスタムコミュニティのMicrosoft Power Appサンプルを収録したリポジトリ
- [PowerApps Samples](https://github.com/Eickhel/PowerApps-samples) - Power Nimbusが提供するPower Appsのサンプル
- [Power Apps Branding Template](https://github.com/iAmManCat/PowerApps-Branding-Template) - 開発者を支援し、コントロール変更に費やされる時間を削減するためのテンプレート
- [SharePoint Power Platform Solutions](https://github.com/pnp/sp-power-platform-solutions) - SharePointのコンテキストで使用できるように設計されたPowerAppsのサンプル
- [Power Automate Samples](https://github.com/pnp/powerautomate-samples) - Microsoft Power Automate向けのカスタムコミュニティのサンプ連を収録したリポジトリ
- [Automatic travel time](https://github.com/wortell/PowerAutomate-AutomatischeReistijd) - Office 365カレンダーに自動的に移動時間を追加します
- [Message Center in Teams](https://github.com/ericsche/MCinTeams) - メッセージセンターの発表を収集し、Teamsチャンネルに投稿するためのシンプルなPowerAutomateソリューション
- [Consume Power BI](https://github.com/ferrybouwman/Power-BI-Read-Only-REST-API) - Power BIの非同期統合スキャンAPIを新しくリリースしたものを消費するためのPowerShellまたはPower Automate（Flow）ベースのソリューション
- [Post List Item To Twitter](https://github.com/vaibhav21791/PostListItemToTwitter) - SharePointリスト項目をTwitterに投稿し、メディアコンテンツを併せて表示するためのMicrosoft Power Automateフロー

### Workato

- [Solution Marketplace](https://www.workato.com/solutions) - Workatoおよびベンダーが構築した、すぐに使えるソリューションのカスタムリスト
- [Support History](https://support.workato.com/en/support/solutions) - 解決済みのサポートチケットを公開したリポジトリで、問題を解決するための支援を提供

<a id="community"></a>
## コミュニティ

### Power Platform (Microsoft)

- [Microsoft Power Apps Official Community](https://powerusers.microsoft.com/t5/Power-Apps-Community/ct-p/PowerApps1)
- [Microsoft Power Automate Official Community](https://powerusers.microsoft.com/t5/Microsoft-Power-Automate/ct-p/MPACommunity)
- [Microsoft Power Virtual Agents Official Community](https://powerusers.microsoft.com/t5/Power-Virtual-Agents-Community/ct-p/PVACommunity)
- [Microsoft Power BI Official Community](https://community.powerbi.com/)
- [PowP.Co Discord Community](https://powp.co/) - パワープラットフォーム愛好家たちのディスコードコミュニティ

### Workato

- [Workato Communities](https://community.workato.com/) - ワークアトの公式コミュニティサイト
- [Systematic](https://systematic.workato.com/) - ビジネスシステム向け唯一のコミュニティ

<a id="blogs"></a>
## ブログ

### Power Platform (Microsoft)

- [Zenity](https://zenity.io/blog) - ローコードのセキュリティとガバナンス
- [Addressing the Low Code Security Elephant in the Room](https://www.darkreading.com/edge-articles/addressing-the-low-code-security-elephant-in-the-room) - ローコードアプリケーションにおける共有責任モデル
- [PowPco](https://blog.powp.co/) - パワープラットフォーム関連すべてのコミュニティに一元的にアクセスできるコミュニティ

### Workato

- [The Connector](https://www.workato.com/the-connector/) - ワークアトのビジネスオートメーションに関するブログ

<a id="other-lists"></a>
## その他のリスト

### Power Platform (Microsoft)

- [Awesome Microsoft Power Platform](https://github.com/Power-Maverick/awesome-power-platform) - パワープラットフォームエコシステムに関する素晴らしいコンテンツのコレクション
- [Awesome No Code Low Code](https://github.com/valentin-vogel/awesome-nocode-lowcode) - パワープラットフォーム関連の素晴らしいノコード・ローコードリソースのコレクション
