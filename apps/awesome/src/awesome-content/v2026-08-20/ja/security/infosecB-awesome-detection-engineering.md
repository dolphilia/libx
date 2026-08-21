---
title: "infosecB/awesome-detection-engineering"
description: "infosecB/awesome-detection-engineering の定本スナップショット"
licenseSource: "github-infosecB-awesome-detection-engineering-readme-md"
---

# Awesome Detection Engineering [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

ディテクションエンジニアリングは、個人または組織に悪影響を及ぼす前に悪意ある、または無許可の活動を積極的に特定することを目的として、検知コントロールを設計・実装・運用するサイバーセキュリティ防御プログラムの戦術的機能です。

貢献を歓迎します。プルリクエストを送る前に、必ず[貢献ガイドライン](https://github.com/infosecB/awesome-detection-engineering/blob/main/contributing.md)を注意深く確認してください。

## 目次

- [概念とフレームワーク](#concepts--frameworks)
- [検知コンテンツとシグネチャ](#detection-content--signatures)
- [ログ、監視、データソース](#logging-monitoring--data-sources)
- [一般リソース](#general-resources)

## 概念とフレームワーク

- [MITRE ATT&CK](https://attack.mitre.org/) - 現実世界の観察に基づく、敵対者の戦術・技法・手順の基盤フレームワーク。
- [Alerting and Detection Strategies (ADS) Framework | Palantir](https://github.com/palantir/alerting-detection-strategy-framework) - 効果的な検知コンテンツを作成・文書化するための青写真。
- [Detection Engineering Maturity Matrix | Kyle Bailey](https://detectionengineering.io) - 組織のディテクションエンジニアリングプログラム全体の成熟度を測定するための詳細なマトリクス。
- [Detection Maturity Level (DML) Model | Ryan Stillions](http://ryanstillions.blogspot.com/2014/04/the-dml-model_21.html) - 組織の脅威検知プログラムの成熟度を8つの異なるレベルで定義・説明します。
- [The Pyramid of Pain | David J Bianco](http://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html) - 侵害の痕跡のさまざまな分類と、脅威アクター検知における有効性の水準を説明するモデル。
- [Cyber Kill Chain | Lockheed Martin](https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html) - サイバー攻撃で一般的に観察される7段階を概説するLockheed Martinのフレームワーク。
- [MaGMa (Management, Growth and Metrics & Assessment) Use Case Defintion Model](https://www.betaalvereniging.nl/wp-content/uploads/2026/03/FI-ISAC-use-case-framework-verkorte-versie.pdf) - 脅威検知ユースケースを定義するビジネス中心のアプローチ。
- [Synthetic Adversarial Log Objects (SALO) | Splunk](https://github.com/splunk/salo) - ログイベントを引き起こすインフラやアクションなしにログイベントを生成するためのフレームワーク。
- [The Zen of Security Rules | Justin Ibarra](https://br0k3nlab.com/resources/zen-of-security-rules/) - 高品質な検知コンテンツ作成の普遍的な原則となる19の格言を概説します。
- [Blue-team-as-Code - the Spiral of Joy | Den Iuzvyk, Oleg Kolesnikov](https://sansorg.egnyte.com/dl/KTc16ldiqv) - ログを用いる実世界のレッドチーム検知自動化から得たBlue-Team-as-Codeの教訓。
- [Detection Development Lifecycle | Haider Dost et al.](https://medium.com/snowflake/detection-development-lifecycle-af166fffb3bc) - SnowflakeによるDetection Development Lifecycleの実装。
- [Threat Detection Maturity Framework | Haider Dost of Snowflake](https://medium.com/snowflake/threat-detection-maturity-framework-23bbb74db2bc) - 脅威検知プログラムの成功を測定する成熟度マトリクス。
- [Elastic's Detection Engineering Behavior Maturity Model](https://www.elastic.co/security-labs/elastic-releases-debmm) - 脅威検知プログラムの成熟度を測定するElasticの定性的・定量的アプローチ。
- [Detection Engineering AI Maturity Framework | Brendan Chamberlain](https://infosecb.github.io/detection-engineering-ai-maturity/) - 基盤から検知ライフサイクルまで、組織がディテクションエンジニアリングプログラム全体でAIとLLMをどのように適用するかを評価する、10次元・4成熟度レベルのコミュニティフレームワーク。
- [Prioritizing Detection Engineering | Ryan McGeehan](https://medium.com/starting-up-security/prioritizing-detection-engineering-b60b46d55051) - 長年のディテクションエンジニアが、ディテクションエンジニアリングプログラムをゼロから構築する方法を概説します。
- [Detection Engineering Field Manual | Zack Allen](https://www.detectionengineering.net/s/field-manual) - ディテクションエンジニアリングの多様な基盤コンポーネントを探究する一連の投稿。
- [Open Threat Informed Detection Engineering aka OpenTide'](https://github.com/OpenTideHQ) - CTIを、脅威ベクターと検知目標を組み合わせた実行可能な検知カバレッジグラフへ変換し、検知asコードのデプロイシステムで検知ライブラリ全体を中央リポジトリから管理するために欧州委員会が作成・維持する統合ディテクションエンジニアリング運用フレームワーク。OpenTide形式は検知カバレッジの測定・拡張を目指し、ルールデプロイエンジンは完全に拡張可能で、複数プラットフォームを並行してサポートします。OpenTideは単一DEチーム内の主フレームワークとしても、データ交換を容易にするSOC全体の共通形式としても機能します。
- [ThreatMapper | Andrey Pautov](https://github.com/anpa1200/threatmapper) - 脅威レポートをATT&CKへ対応付け、グループ・キャンペーンとのTTP重複を比較し、検知ギャップを特定してアナリスト向け出力をエクスポートするCTI-to-detectionワークベンチ。
- [ZettelForge](https://github.com/rolandpg/zettelforge) - Sigma・YARAルールを第一級のメモリエンティティとして扱い、LLMルール解説、CTIエンティティのSTIX 2.1ナレッジグラフ、検知するアクター・技法とルールを接続するオフライン優先RAGを備えたエージェント型メモリシステム。Python、MIT。

## 検知コンテンツとシグネチャ

- [Rulehound](https://rulehound.com) - 公開されているオープンソース脅威検知ルールセットのインデックス。
- [MITRE Cyber Analytics Repository (CAR)](https://car.mitre.org) - MITREが保守する検知コンテンツのリポジトリ。
- [CAR Coverage Comparision](https://car.mitre.org/coverage/) - MITRE ATT&CK技法IDと、利用可能なSplunk Security Content、Elastic検知ルール、Sigmaルール、CARコンテンツへのリンクのマトリクス。
- [Sigma Rules](https://github.com/SigmaHQ/sigma) - すぐ利用できる検知コンテンツのSigmaリポジトリ。コンテンツは大半のSIEMで使える形式へ変換できます。
- [Sigma rule converter](https://sigconverter.io/) - 大半のSIEMで利用できる検知コンテンツに変換可能なオープンソースツール。
- [RSigma | Timescale](https://github.com/timescale/rsigma) - パーサー、評価エンジン、ルール変換、ストリーミングランタイム、リンター、CLI、MCP、LSPを備える完全なSigmaディテクションエンジニアリングツールキット。
- [AttackRuleMap](https://attackrulemap.com) - オープンソース検知ルールとatomic testの対応付け。
- [Splunk Security Content](https://github.com/splunk/security_content) - 他のツール用にも調整可能な、Splunkのオープンソースで頻繁に更新される検知コンテンツ。
- [Elastic Detection Rules](https://github.com/elastic/detection-rules/tree/main/rules) - Elastic SIEM向けにネイティブ記述されたElasticの検知ルール。Uncoderにより他のSIEM向けに容易に変換できます。
- [Elastic Endpoint Behavioral Rules](https://github.com/elastic/protections-artifacts/tree/main/behavior/rules) - Elasticエンドポイントエージェント向けにネイティブ記述されたEQLによるエンドポイント行動（防止）ルール。
- [Agent Threat Rules (ATR)](https://github.com/Agent-Threat-Rule/agent-threat-rules) - エージェント層向けのSigma・YARAのような、AIエージェントとMCPへの攻撃（プロンプトインジェクション、ツールポイズニング、コンテキスト流出）に対するオープンMIT検知ルール標準。各ルールにOWASP LLM/Agentic・MITRE ATLASの対応付けがあります。
- [Elastic Yara Signatures](https://github.com/elastic/protections-artifacts/tree/main/yara/rules) - Elasticエンドポイントエージェント上で実行されるElasticのYARAシグネチャ。
- [Elastic Endpoint Ransomware Artifact](https://github.com/elastic/protections-artifacts/blob/main/ransomware/artifact.lua) - Elasticエンドポイントエージェント上で実行されるElasticのランサムウェアアーティファクト。
- [Chronicle (GCP) Detection Rules](https://github.com/chronicle/detection-rules) - Chronicle Platform向けにネイティブ記述されたChronicleの検知ルール。
- [Exabeam Content Library](https://github.com/ExabeamLabs/Content-Library-CIM2) - Exabeam Common Information Modelと互換性を持つ、Exabeamの標準搭載検知コンテンツ。
- [Panther Labs Detection Rules](https://github.com/panther-labs/panther-analysis/tree/main/rules) - Panther Labのネイティブ検知ルール。
- [Anvilogic Detection Armory](https://github.com/anvilogic-forge/armory) - Anvilogicによるオープンソースで公開利用可能な検知コンテンツ。
- [AWS GuardDuty Findings](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_finding-types-active.html) - すべてのAWS GuardDuty検出結果、その説明、関連するデータソースの一覧。
- [GCP Security Command Center Findings](https://docs.cloud.google.com/security-command-center/docs/concepts-security-sources#threats) - すべてのGCP Security Command Center検出結果、その説明、関連するデータソースの一覧。
- [Azure Defender for Cloud Security Alerts](https://learn.microsoft.com/en-us/azure/defender-for-cloud/alerts-reference) - すべてのAzure Security for Cloudアラート、その説明、関連するデータソースの一覧。
- [Center for Threat Informed Defense Security Stack Mappings](https://github.com/center-for-threat-informed-defense/security-stack-mappings) - クラウドコンピューティングプラットフォーム（Azure、AWS）の組み込み検知機能とMITRE ATT&CKフレームワークへの対応付けを説明します。
- [Detection Engineering with Splunk](https://github.com/west-wind/Threat-Hunting-With-Splunk) - SPLで検知分析を共有するためのGitHubリポジトリ。
- [Google Cloud Security Analytics](https://github.com/GoogleCloudPlatform/security-analytics) - クラウド利用の監査とGoogle Cloud上のデータ・ワークロードの脅威検知のためのサンプルセキュリティ分析を集める、コミュニティ主導のリスト。
- [KQL Advanced Hunting Queries & Analytics Rules](https://github.com/Bert-JanP/Hunting-Queries-Detection-Rules) - Microsoft Defender for Endpoint、Defender for Identity、Defender for Cloud Apps向けのエンドポイント検知とハンティングクエリのリスト。
- [Sigma2KQL](https://github.com/Khadinxc/Sigma2KQL) - 週次スケジュールでリポジトリを更新し、最新のSIGMAルールリポジトリと整合させる、KQLへ変換済みの全SIGMAルールのリポジトリ。
- [TerraSigma](https://github.com/Khadinxc/TerraSigma) - Microsoft Sentinel Terraform Scheduled分析リソースへ変換済みの全SIGMAルールのリポジトリ。週次で更新して最新のSIGMAルールリポジトリと整合させ、すぐ利用できるようルールの適切なエンティティマッピングを行います。
- [Detections Digest | Sergey Polzunov](https://detections-digest.rulecheck.io) - ここに掲載された多数の人気検知コンテンツソースからの更新を扱うニュースレター。

## ログ、監視、データソース

- [Windows Logging Cheatsheets](https://www.malwarearchaeology.com/cheat-sheets) - 複数のチートシートが、さまざまな粒度におけるWindows Eventログ記録の推奨事項を概説します。
- [Linux auditd Detection Ruleset](https://github.com/Neo23x0/auditd/blob/master/audit.rules) - 脅威検知ユースケースに必要なテレメトリーを生成するLinux auditdルールセット。
- [MITRE ATT&CK Data Sources Blog Post](https://medium.com/mitre-attack/defining-attack-data-sources-part-i-4c39e581454f) - MITREが、さまざまなデータソースとMITRE ATT&CKフレームワークにあるTTPとの関係を説明します。
- [MITRE ATT&CK Data Sources List](https://attack.mitre.org/datasources/) - v10の一部としてMITRE ATT&CKへ追加されたデータソースオブジェクト。
- [Splunk Common Information Model (CIM)](https://docs.splunk.com/Documentation/CIM/5.0.0/User/Overview) - セキュリティデータの正規化フレームワークとして用いられるSplunkの独自モデル。
- [Elastic Common Schema](https://www.elastic.co/docs/reference/ecs/ecs-getting-started) - セキュリティデータの正規化フレームワークとして用いられるElasticの独自モデル。
- [Exabeam Common Information Model](https://github.com/ExabeamLabs/CIMLibrary) - セキュリティデータの正規化フレームワークとして用いられるExabeamの独自モデル。
- [Open Cybersecurity Schema Framework (OCSF)](https://schema.ocsf.io/categories?extensions) - オープンソースのセキュリティデータソース・イベントスキーマ。
- [osquery | Facebook](https://osquery.io) - OSデータをリレーショナルテーブルとして公開し、クエリ・検知を可能にするSQL駆動のオペレーティングシステム計測・監視・分析フレームワーク。
- [Loghub](https://github.com/logpai/loghub) - 研究・テスト向けに無償公開されているオープンソースのセキュリティデータソース。
- [Elastalert | Yelp](https://github.com/YelpArchive/elastalert) - Elasticsearch内データの異常、急増、その他の対象パターンについてアラートを発するシンプルなフレームワーク。
- [Matano](https://github.com/matanolabs/matano) - AWS上の脅威ハンティング、Python検知asコード、インシデント対応のための、オープンソース・クラウドネイティブなセキュリティレイクプラットフォーム（SIEM代替）。
- [Microsoft XDR Advanced Hunting Schema](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-schema-tables) - 複数テーブルのクエリに役立つ、高度なハンティングスキーマ。デバイス、アラート、IDなどのエンティティ種別に関するイベント情報と詳細を持つテーブル・列を含みます。
- [InnerWarden](https://github.com/InnerWarden/innerwarden) - 38個のeBPFフック、48個の検出器、23個の相関ルールによるリアルタイムの脅威検知・対応を行うLinux向け自律型セキュリティエージェント。
- [Rustinel | Karib0u](https://github.com/Karib0u/rustinel) - ETW/eBPFテレメトリーを収集し、Sigma・YARA・IOC検知を評価するWindows・Linux向けオープンソースのエンドポイント検知エンジン。
- [SOCTalk](https://github.com/soctalk/soctalk) - Wazuh上に構築された、MSP・MSSP向けのオープンソースLLM駆動SOC自動化プラットフォーム。人間参加型レビュー、マルチテナント分離、決定論的実行を基盤とするノーコードトリアージポリシーエディタを備えた二層AIパイプラインを通じ、アラートをトリアージ・調査・エスカレーションします。Apache 2.0。

## 一般リソース

- [ATT&CK Navigator | MITRE](https://mitre-attack.github.io/attack-navigator/enterprise/) - 検知カバレッジ、可視性、その他の取り組みとATT&CKフレームワークとの関係を追跡するために利用できるMITREのオープンソースツール。
- [Detection Engineering Weekly | Zack Allen](https://www.detectionengineering.net) - ディテクションエンジニアリングのニュースとハウツーを扱うニュースレター。
- [Detection Engineering Twitter List | Zack Allen](https://x.com/i/lists/1629936556298436608) - ディテクションエンジニアリングのオピニオンリーダーを集めたTwitterリスト。
- [DETT&CT: MAPPING YOUR BLUE TEAM TO MITRE ATT&CK™](https://www.mbsecure.nl/blog/2019/5/dettact-mapping-your-blue-team-to-mitre-attack) - セキュリティデータの可視性と検知カバレッジをMITRE ATT&CKフレームワークに照らして測定する方法論を概説します。
- [Awesome Kubernetes (K8s) Threat Detection](https://github.com/jatrost/awesome-kubernetes-threat-detection) - Kubernetes（K8s）の脅威検知に特化した別のAwesome List。
- [Detection and Response Pipeline](https://github.com/0x4D31/detection-and-response-pipeline) - 実世界の例を含む、検知・対応パイプラインの各コンポーネント向けツールのリスト。
- [Living Off the Living Off the Land](https://lolol.farm) - landで生き延びるためのリソース集。
- [Detection at Scale Podcast | Jack Naglieri](https://podcasts.apple.com/us/podcast/detection-at-scale/id1582584270) - この専門分野の多数のオピニオンリーダーが登場する、ディテクションエンジニアリングに焦点を当てたポッドキャスト。
- [Cloud Threat Landscape | Wiz](https://threats.wiz.io/all-techniques) - クラウド環境を侵害したことが知られる脅威アクター、その武器庫にあるツール・技法、標的にしがちな技術を掲載する、クラウドディテクションエンジニアリングに焦点を当てたデータベース。
- [CTI Analyst Field Manual | Andrey Pautov](https://1200km.com/cti-analyst-field-manual/) - 証拠ラベル、ソース信頼性、ATT&CKマッピングゲート、ハンティング仮説、検知バックログのワークフローを扱う実践的なCTI-to-detectionリファレンス。
- [Splunk ES Correlation Searches Best Practices | OpsTune](https://github.com/inodee/threathunting-spl/blob/master/Splunk%20ES%20Correlation%20Searches%20Best%20Practices%20v1.3.pdf) - Splunk Enterprise Securityアプリで高品質な検知コンテンツを作成するための非常に詳細なガイド。
- [How Google Does It: Making threat detection high-quality, scalable, and modern | Anton Chuvakin, Tim Nguyen](https://cloud.google.com/transform/how-google-does-it-modernizing-threat-detection) - Googleのチームが、高品質でスケーラブル、かつ現代的な脅威検知プログラムを構築する5つの主要原則を紹介します。
- [SOCLabs](https://www.soc-labs.top/) - 実際の脅威データと一般的なSIEMクエリ言語のサポートにより、検知ルール作成と脅威ハンティングを実践的に学習・練習できるブルーチーム・ディテクションエンジニア向けラボ。
