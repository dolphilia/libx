---
title: "Awesome Devsecops"
description: "Devsecopsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-TaptuIT-awesome-devsecops-readme-md"
---

# Awesome Devsecops

Devsecopsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>
- [資料](#resources)
  - [記事](#articles)
  - [書籍](#books)
  - [コミュニティ](#communities)
  - [カンファレンス](#conferences)
  - [ニュースレター](#newsletters)
  - [ポッドキャスト](#podcasts)
  - [セキュア開発ガイドライン](#secure-development-guidelines)
  - [セキュア開発ライフサイクルのフレームワーク](#secure-development-lifecycle-framework)
  - [ツールチェーン](#toolchains)
  - [トレーニング](#training)
  - [Wiki](#wikis)
- [ツール](#tools)
  - [依存関係管理](#dependency-management)
  - [動的解析](#dynamic-analysis)
  - [Infrastructure as Code解析](#infrastructure-as-code-analysis)
  - [意図的に脆弱なアプリケーション](#intentionally-vulnerable-applications)
  - [監視](#monitoring)
  - [シークレット管理](#secrets-management)
  - [シークレットスキャン](#secrets-scanning)
  - [静的解析](#static-analysis)
  - [サプライチェーンセキュリティ](#supply-chain-security)
  - [脅威モデリング](#threat-modelling)
- [関連リスト](#related-lists)

## 資料 <a id="resources"></a>

### 記事 <a id="articles"></a>

- [Our Approach to Employee Security Training](https://www.pagerduty.com/blog/security-training-at-pagerduty/) - _Pager Duty_ - 企業内でのセキュリティトレーニングを実施するためのガイドライン
- [DevSecOps: Making Security Central To Your DevOps Pipeline](https://spacelift.io/blog/what-is-devsecops) - _Spacelift_ - 記事でDevSecOpsが達成しようとする目的、その利点、およびDevSecOpsのライフサイクルについて説明

### 書籍 <a id="books"></a>

- [Alice and Bob Learn Application Security](https://www.wiley.com/en-gb/Alice+and+Bob+Learn+Application+Security-p-9781119687405) - セキュア開発を体系的に学ぶための書籍です。

### コミュニティ <a id="communities"></a>

- [DevSecCon](https://www.devseccon.com/) - _Snyk_ - DevSecOpsに特化したカンファレンス、ブログ、ポッドキャスト、Discordが運営されているコミュニティ
- [TAG Security](https://tag-security.cncf.io/) - _Cloud Native Computing Foundation_ - TAG Securityは、クラウドネイティブエコシステムにおけるオペレーター、管理者、開発者、最終ユーザーのための安全なアクセス、ポリシー制御、安全性を実現するリソースの発見と開発を促進する協力活動を支援

### カンファレンス <a id="conferences"></a>

- [AppSec Day](https://appsecday.io/) - _OWASP_ - OWASPが主催するオーストラリアのアプリケーションセキュリティカンファレンス
- [DevSecCon](https://www.devseccon.com/) - _Snyk_ - Snykが運営するDevSecOpsカンファレンスのネットワーク

### ニュースレター <a id="newsletters"></a>

- [Shift Security Left](https://shift-security-left.curated.co/) - セキュア開発に関する定期刊行物です。

### ポッドキャスト <a id="podcasts"></a>

- [Absolute AppSec](https://absoluteappsec.com/) - _Seth Law & Ken Johnson_ - アプリケーションセキュリの現状や特定のテーマに関するディスカッション
- [Application Security Podcast](https://podcast.securityjourney.com/) - _Security Journey_ - 行業の専門家にインタビューを行い、特定のアプリケーションセキュリティコンセプトについて解説
- [BeerSecOps](https://blog.aquasec.com/devsecops-podcasts) - _Aqua Security_ - Dev、Sec、Opsの壁を崩し、これらの分野をカバーするテーマについて議論
- [DevSecOps Podcast Series](https://soundcloud.com/owasp-podcast) - _OWASP_ - テクノロジーのリーダーや実務家とのディスカッションを通じて、開発ライフサイクルにセキュリティを統合
- [The Secure Developer](https://www.mydevsecops.io/the-secure-developer-podcast) - _Snyk_ - ソフトウェア開発者向けのセキュリティツールとベストプラクティスについてのディスカッション

### セキュア開発ガイドライン <a id="secure-development-guidelines"></a>

- [Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/) - _OWASP_ - 開発者に安全なウェブアプリケーションを設計・開発するためのセキュリティ要件とコントロールのフレームワーク
- [Coding Standards](https://wiki.sei.cmu.edu/confluence/display/seccode/SEI+CERT+Coding+Standards) - _CERT_ - C、C++、JavaおよびAndroid開発向けの安全な開発基準のコレクション
- [Fundamental Practices for Secure Software Development](https://safecode.org/wp-content/uploads/2018/03/SAFECode_Fundamental_Practices_for_Secure_Software_Development_March_2018.pdf) - _SAFECode_ - SDLCの各段階で実施すべき重要な安全な開発実践に関するガイドライン
- [Proactive Controls](https://owasp.org/www-project-proactive-controls/) - _OWASP_ - OWASPがすべてのソフトウェア開発プロジェクトに導入すべきトップ10セキュリティ対策リスト
- [Secure Coding Guidelines](https://wiki.mozilla.org/WebAppSec/Secure_Coding_Guidelines) - _Mozilla_ - 安全なウェブアプリケーション開発に必要な具体的な安全開発基準を含むガイドライン
- [Secure Coding Practices Quick Reference Guide](https://owasp.org/www-pdf-archive/OWASP_SCP_Quick_Reference_Guide_v2.pdf) - _OWASP_ - 安全な開発基準が遵守されているかを確認するためのチェックリスト

### セキュア開発ライフサイクルのフレームワーク <a id="secure-development-lifecycle-framework"></a>

- [Building Security In Maturity Model (BSIMM)](https://www.bsimm.com/framework.html) - _Synopsys_ - トップのソフトウェアセキュリティプロジェクトから得られたデータを観察・分析した結果に基づくソフトウェアセキュリティフレームワーク
- [Secure Development Lifecycle](https://www.microsoft.com/en-us/securityengineering/sdl/practices) - _Microsoft_ - 安全な開発ライフサイクルを構成するツールと実務のコレクション
- [Secure Software Development Framework](https://csrc.nist.gov/CSRC/media/Publications/white-paper/2019/06/07/mitigating-risk-of-software-vulnerabilities-with-ssdf/draft/documents/ssdf-for-mitigating-risk-of-software-vulns-draft.pdf) - _NIST_ - 安全な開発ライフサイクルに必要な実践、タスク、実装例を含むフレームワーク
- [Software Assurance Maturity Model](https://github.com/OWASP/samm) - _OWASP_ - セキュアな開発ライフサイクルの成熟度を測定・改善するためのフレームワーク。

### ツールチェーン <a id="toolchains"></a>

- [Cloud Security and DevSecOps Best Practices _and_ Securing Web Application Technologies (SWAT) Checklist](https://www.sans.org/posters/cloud-security-devsecops-best-practices/) - _SANS_ - ウェブアプリケーションセキュリティ技術（SWAT）チェックリスト、SANSクラウドセキュリティカリキュラム、クラウドセキュリ及トップ10、トップ12Kubernetes脅威、セキュアなDevOpsツールチェーンを含むポスター。
- [Periodic Table of DevOps Tools](https://xebialabs.com/periodic-table-of-devops-tools/) - _XebiaLabs_ - ツール機能によって分類されたDevSecOpsツールのコレクション。

### トレーニング <a id="training"></a>

- [Application Security Education](https://github.com/duo-labs/appsec-education) - _Duo Security_ - Duoアプリケーションセキュリティチームが作成したトレーニング資料。初級および高度なトレーニングプレゼンテーションと実践型ラボを含む。
- [Cybrary](https://www.cybrary.it/) - _Cybrary_ - サブスクリプション型オンラインコースで、セキュリティとDevSecOpsに特化したカテゴリを提供。
- [PentesterLab](https://pentesterlab.com/) - _PentesterLab_ - シンプルかつ高度なウェブ脆弱性を理解・悪用するための実践型ラボ。
- [Practical DevSecOps](https://www.practical-devsecops.com) - _Practical DevSecOps_ - 行業の専門家が提供するDevSecOpsの概念・ツール・技術を学び、最先端のブラウザベースの実践ラボを用いたDevSecOpsを体験。
- [SafeStack](https://academy.safestack.io/) - _SafeStack_ - ソフトウェア開発チーム向けのセキュリティトレーニング。個人や小規模チーム、大規模組織まで対応可能な設計。
- [Secure Code Warrior](https://www.securecodewarrior.com/) - _Secure Code Warrior_ - ゲーム化された実践型セキュア開発トレーニング。コース、評価、トーナメントに対応。
- [SecureFlag](https://www.secureflag.com/platform.html) - _OWASP_ - 開発者およびビルド／リリースエンジニア向けの実践的なセキュアコーディングトレーニング。
- [Security Training for Engineers](https://sudo.pagerduty.com/for_engineers/) - _Pager Duty_ - PagerDutyが作成・オープンソース化したプレゼンテーション。ソフトウェアエンジニア向けのセキュリティトレーニングを提供。
- [Security Training for Everyone](https://sudo.pagerduty.com/for_everyone/) - _Pager Duty_ - PagerDutyが作成・オープンソース化したプレゼンテンション。従業員向けのセキュリティトレーニングを提供。
- [Semgrep Academy](https://academy.semgrep.dev/) - _Semgrep_ - APIセキュリティ、セキュアコーディング、アプリケーションセキュリティなどに関する無料で即時提供可能なコース。
- [Web Security Academy](https://portswigger.net/web-security) - _PortSwigger_ - 一般的なウェブ脆弱性を学習・悪用するための資料とラボセット。
- [WeHackPuple](https://wehackpurple.com/) - _WeHackPurple_ - アプリケーションセキュリティ理論と実践的な技術講座を教えるオンラインコース。

### Wiki <a id="wikis"></a>

- [DevSecOps Hub](https://snyk.io/devsecops/) - _Snyk_ - DevSecOpsの重要な概念、プロセス、技術についての紹介。
- [SecureFlag Knowledge Base](https://knowledge-base.secureflag.com/) - _OWASP_ - ソフトウェア脆弱性に関する情報とそれらを防止する方法についてのリポジトリ。

## ツール <a id="tools"></a>

### 依存関係管理 <a id="dependency-management"></a>

オープンソースパッケージは開発を速める一方、既知の脆弱性も取り込み得ます。依存関係管理ツールは、脆弱なパッケージの特定と更新を支援します。

- [Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper) - Apache v2, Kubernetes、仮想マシン、サーバレス環境向けの強力なランタイム脆弱性スキャナー。
- [Dependabot](https://dependabot.com/) - _GitHub_ - GitHubリポジトリに自動的に脆弱性をスキャンし、修正済みの依存関係をマージするためのプルリクエストを作成。
- [Dependency-Check](https://owasp.org/www-project-dependency-check/) - _OWASP_ - CLIまたはビルドサーバープラグインを使用して、公開された脆弱性を検出するための依存関係スキャン。
- [Dependency-Track](https://dependencytrack.org/) - _OWASP_ - 多くのプロジェクトにおける、脆弱性のある依存関係の量と深刻度を時間軸で監視する。
- [JFrog XRay](https://jfrog.com/xray/) - _JFrog_ - JFrog Artifactory に保存されたアーティファクトに対するセキュリティおよびコンプライアンス分析。
- [NPM Audit](https://docs.npmjs.com/cli/audit) - _NPM_ - npm CLI に組み込まれた Node.js パッケージに対する脆弱性パッケージの審査。
- [Renovate](https://renovate.whitesourcesoftware.com/) - _WhiteSource_ - CLI または Git リポジトリアプリを使用して、複数のフレームワークおよび言語のソフトウェア依存関係を自動的に監視・更新。
- [Requires.io](https://requires.io/) - _Olivier Mansion & Alexis Tabary_ - Python プロジェクトにおける脆弱性のある依存関係の自動監視およびアップグレード。
- [Snyk Open Source](https://snyk.io/product/open-source-security-management/) - _Snyk_ - Snyk の専用脆弱性データベースを用いて、脆弱性のある依存関係の自動監視およびアップグレード。

### 動的解析 <a id="dynamic-analysis"></a>

動的解析セキュリティテスト（DAST）は、実行中のアプリケーションへスキャナーが接続し、攻撃を模倣してXSS、SQLインジェクション、CSRF、情報漏えいなどを検出するブラックボックス試験です。

- [Automatic API Attack Tool](https://github.com/imperva/automatic-api-attack-tool) - _Imperva_ - API スペックに基づいてAPIに対して自動的なセキュリティスキャンを実行。
- [BurpSuite Enterprise Edition](https://portswigger.net/burp/enterprise) - _PortSwigger_ - ペンテストに広く使用されているBurpSuiteのウェブアプリケーション脆弱性スキャナーに、CI/CD統合および複数ウェブアプリケーションに対する継続的な監視を追加。
- [Gauntlt](https://github.com/gauntlt/gauntlt) - _Gauntlt_ - Gherkin構文で定義されたセキュリティツールとテスト出力を使って、セキュリティスキャンを実行するための行動駆動開発フレームワーク。
- [Netz](https://github.com/spectralops/netz) - _Spectral_ - zgrab2などを使って、インターネット全体の誤設定を発見。
- [RESTler](https://github.com/microsoft/restler-fuzzer) - _Microsoft_ - 論文を検証した研究に基づく状態を保持するRESTフルAPIスキャナー。
- [SSL Labs Scan](https://github.com/ssllabs/ssllabs-scan) - _SSL Labs_ - SSL / TLS設定に関する問題を自動スキャン。
- [Zed Attack Proxy (ZAP)](https://github.com/zaproxy/zaproxy) - _OWASP_ - オープンソースのウェブアプリケーション脆弱性スキャナーで、CI/及CD統合用APIを含む。

### Infrastructure as Code解析 <a id="infrastructure-as-code-analysis"></a>

Infrastructure as Codeは一貫した環境への配備を可能にします。その定義を静的・動的に解析することで、脆弱な依存関係、ハードコードされたシークレット、安全でない設定、意図しないセキュリティ変更を検出できます。

#### 複数プラットフォーム <a id="multi-platform"></a>

- [Checkov](https://github.com/bridgecrewio/checkov) - _Bridgecrew_ - Terraform、AWS CloudFormationおよびKubernetesテンプレートにおける不適切な設定をスキャン。
- [KICS](https://github.com/Checkmarx/kics) - _Checkmarx_ - 開発サイクルの初期段階でセキュリティ脆弱性、コンプライアンス問題、インフラミス設定を検出。
- [Spectral DeepConfig](https://spectralops.io/blog/spectral-launches-deepconfig-to-ensure-no-misconfiguration-at-all-layers-of-software/) - _Spectral_ - コミット時点からインフラおよびアプリケーションの誤設定を検出。
- [Terrascan](https://github.com/accurics/terrascan) - _Accurics_ - インフラコード（IaC）全体におけるコンプライアンスおよびセキュリティ違反を検出し、クラウドネイティブインフラのプロビジョニング前にリスクを軽減。


#### CloudFormation <a id="cloud-formation"></a>
- [Cfn Nag](https://github.com/stelligent/cfn_nag) - CloudFormation定義を検査するツールです。


#### コンテナー <a id="containers"></a>
- [Clair](https://github.com/quay/clair) - _Red Hat_ - パブリックに公開された脆弱性を検出するアプリケーションコンテナおよびDockerコンテナのスキャン。
- [Dagda](https://github.com/eliasgranderubio/dagda/) - _Elías Grande_ - DockerコンテナにインストールされたOSおよびソフトウェア依存関係のバージョンを、公開された脆弱性データベースと比較し、またウイルススキャンを実行。
- [Docker-Bench-Security](https://github.com/docker/docker-bench-security) - _Docker_ - Docker Bench for Securityは、生産環境におけるDockerコンテナのデプロイに必要な数十のベストプラクティスをチェックするスクリプト。
- [Grype](https://github.com/anchore/grype/) - _Anchore_ - コンテナイメージおよびファイルシステム向けに統合しやすいオープンソースの脆弱性スキャンツール
- [Hadolint](https://github.com/hadolint/hadolint) - _Hadolint_ - Dockerfileに対して既知のルールをチェックし、RUNステートメント内のbashコードを検証
- [Snyk Container](https://snyk.io/product/container-vulnerability-management/) - _Snyk_ - CI/CD中にまたは継続的な監視により、DockerおよびKubernetesアプリケーションのセキュリティ脆弱性をスキャン
- [Trivy](https://github.com/aquasecurity/trivy) - _Aqua Security_ - コンテナ向けにシンプルかつ包括的な脆弱性スキャナー


#### Terraform <a id="terraform"></a>
- [Regula](https://github.com/fugue/regula) - _Fugue_ - 部署前にTerraformのインフラコードに潜在するセキュリティミス設定やコンプライアンス違反を評価
- [Terraform Compliance](https://terraform-compliance.com/) - _terraform-compliance_ - Terraformに対する軽量でセキュリティおよびコンプライアンスに焦点を当てたテストフレームワーク。インフラアスコードのネガティブテスト能力を可能にする
- [Tfsec](https://github.com/liamg/tfsec) - _Liam Galvin_ - Terraformテンプレートに対してセキュリ的ミス設定やAWS、Azure、GCPのセキュリティベストプラクティスに非対応を検出


#### Kubernetes <a id="kubernetes"></a>
- [Kubescape](https://kubescape.io/) - _Cloud Native Computing Foundation_ - IDE、CI/CDパイプライン、クラスタ向けのオープンソースKubernetesセキュリティプラットフォーム
- [Kube-Score](https://github.com/zegl/kube-score) - _Gustav Westling_ - Kubernetesオブジェクト定義に対してセキュリティおよびパフォーマンスミス設定を検出
- [Kubectrl Kubesec](https://github.com/controlplaneio/kubectl-kubesec) - _ControlPlane_ - kubesec.io向けのプラグインでKubernetesリソースのセキュリティリスク分析を行う

#### Ansible <a id="ansible"></a>
- [Ansible-Lint](https://github.com/ansible-community/ansible-lint) - Ansible構成を検査するツールです。

### 意図的に脆弱なアプリケーション <a id="intentionally-vulnerable-applications"></a>

意図的に脆弱なアプリケーションは、セキュリティ試験が正しく失敗するかの確認、一般的な脆弱性の仕組みの理解、攻撃技術の練習に利用できます。

- [Bad SSL](https://github.com/chromium/badssl.com) - _The Chromium Project_ - SSL/TLS設定が不十分な複数のウェブサーバーを含むコンテナ。ツールのテストに有用
- [Cfngoat](https://github.com/bridgecrewio/cfngoat) - _Bridgecrew_ - AWSで意図的に不安全なサービスを構成するCloud Formationテンプレート。上記のCloud Formationインフラアスコード分析ツールのテストに最適
- [CI/CD Goat](https://github.com/cider-security-research/cicd-goat) - _Cider Security_ - 意図的に脆弱なCI/CD環境。複数の課題を通じてCI/CDセキュリティを学習できる
- [Damn Vulnerable Web App](http://www.dvwa.co.uk/) - _Ryan Dewhurst_ - ワンウェイアプリケーションで、一般的なウェブ脆弱性を理解および悪用するための安全な環境を提供
- [Juice Shop](https://github.com/bkimminich/juice-shop) - _OWASP_ - OWASPトップ10のセキュリティ脆弱性を含むウェブアプリケーション
- [Kubernetes Goat](https://github.com/madhuakula/kubernetes-goat) - _Madhu Akula_ - 意図的に脆弱なクラスタ環境。Kubernetesセキュリティを学習および実践できる
- [NodeGoat](https://github.com/OWASP/NodeGoat) - _OWASP_ - Node.jsのウェブアプリケーションで、一般的なセキュリティ脆弱性の対応方法を示し、解決策を提供
- [Pentest-Ground](https://pentest-ground.com/) - _Pentest-Tools.com_ - Pentest-Groundは、意図的に脆弱なウェブアプリケーションおよびネットワークサービスを備えた無料のプラットフォーム
- [Terragoat](https://github.com/bridgecrewio/terragoat) - _Bridgecrew_ - AWS、AzureおよびGCPで意図的に不安全なサービスを構成するTerraformテンプレート。上記のTerraformインフラアスコード分析ツールのテストに最適
- [Vulnerable Web Apps Directory](https://owasp.org/www-project-vulnerable-web-applications-directory) - _OWASP_ - 学習目的の脆弱性のあるウェブアプリケーションのコレクション。
- [WrongSecrets](https://github.com/OWASP/wrongsecrets) - _OWASP_ - センスを用いた脆弱性アプリケーションと、その使用方法を示す例


### 監視 <a id="monitoring"></a>
リリース前の試験と堅牢化だけでは不十分です。本番ソフトウェアの利用状況、性能、エラーを監視し、悪意ある挙動や対応すべき潜在的欠陥を捉える必要があります。

- [Csper](https://csper.io/report-uri) - _Csper_ - コンテンツセキュリティポリシー（CSP）のツールセットで、ポリシーのテスト、CSP報告のモニタリング、メトリクスとアラートを提供
- [Streamdal](https://streamdal.com) - _Streamdal_ - アプリケーションコードにプライバシー制御を埋め込み、PIIがシステムに入り出ていく際に検出・監視し、意図しないデータベース、データストリーム、パイプラインに到達させない

### シークレット管理 <a id="secrets-management"></a>

ソフトウェアはリソースへのアクセスにパスワード、APIキー、証明書、接続文字列を必要としますが、コードベースへの保存は危険です。シークレット管理ツールは安全な保存・アクセス・管理手段を提供します。

- [Ansible Vault](https://docs.ansible.com/ansible/latest/user_guide/vault.html) - _Ansible_ - Ansibleパイプライン内でセクレットを安全に保管
- [AWS Key Management Service (KMS)](https://aws.amazon.com/kms/) - _Amazon AWS_ - AWS内で暗号化キーを作成・管理
- [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) - _Amazon AWS_ - AWS内でアプリケーションセクレットを安全に保管・取得可能に
- [Azure Key Vault](https://azure.microsoft.com/en-au/services/key-vault/) - _Microsoft Azure_ - Azure内でセクレットを安全に保管
- [BlackBox](https://github.com/StackExchange/blackbox) - _StackExchange_ - コードリポジトリ内に認証情報の暗号化
- [Chef Vault](https://github.com/chef/chef-vault) - _Chef_ - Chef内でセクレ及を安全に保管
- [CredStash](https://github.com/fugue/credstash) - _Fugue_ - AWS内でKMSとDynamoDBを使用して、セクレットを安全に保管
- [CyberArk Application Access Manager](https://www.cyberark.com/products/privileged-account-security-solution/application-access-manager/) - _CyberArk_ - アプリケーション向けのセクレット管理ツール（セクレットの回転と監査を含む）
- [Docker Secrets](https://docs.docker.com/engine/swarm/secrets/) - _Docker_ - Dockerスワーム内でセクレットの保管とアクセス管理
- [Git Secrets](https://github.com/awslabs/git-secrets) - _Amazon AWS_ - gitリポジトリをスキャンし、コードやコミットメッセージに含まれるセクレットを検出
- [Gopass](https://github.com/gopasspw/gopass) - _Gopass_ - Gitとgpgを使用するチーム向けのパスワードマネージャー。暗号化されたファイルとリポジトリにセクレットを管理
- [Google Cloud Key Management Service (KMS)](https://cloud.google.com/kms) - _Google Cloud Platform_ - GCP内でセクレットを安全に保管
- [HashiCorp Vault](https://www.vaultproject.io/) - _HashiCorp_ - UI、CLI、またはHTTP APIを用いてセクレットを安全に保管
- [Keyscope](https://github.com/SpectralOps/keyscope) - _Spectral_ - KeyscopeはRustで構築されたオープンソースのキーとセクレットのワークフローツール（検証、無効化など）
- [Pinterest Knox](https://github.com/pinterest/knox) - _Pinterest_ - セクレットの安全な保管、回転、監査
- [Secrets Operations (SOPS)](https://github.com/mozilla/sops) - _Mozilla_ - YAML、JSON、ENV、INI、BINARYファイルに保存されたキーを暗号化
- [Teller](https://github.com/spectralops/teller) - _Spectral_ - 開発者向けのセクレット管理ツール - セクレットの操作はコマンドラインで行う


### シークレットスキャン <a id="secrets-scanning"></a>

非公開リポジトリであっても、ソース管理は認証情報、APIキー、トークンの安全な保管場所ではありません。スキャンによりコミット前の混入防止や、既存履歴からの検出・除去を支援できます。

- [CredScan](https://secdevtools.azurewebsites.net/helpcredscan.html) - _Microsoft_ - Azure DevOps パイプライン内のタスクとして実行できる、認証情報のスキャンツール。
- [Detect Secrets](https://github.com/Yelp/detect-secrets) - _Yelp_ - （驚くべきことに）コードベース内のシークレットを検出するための適切な名前のモジュール。
- [GitGuardian](https://www.gitguardian.com/) - _GitGuardian_ - 公開およびプライベートなGitリポジトリに存在するシークレットをスキャンおよびモニタリングするウェブベースのソリューション。
- [Gitleaks](https://github.com/zricethezav/gitleaks) - _Zachary Rice_ - Gitleaksは、Gitリポジトリ内のハードコードされたシークレット（パスワード、APIキー、トークンなど）を検出するSASTツール。
- [git-secrets](https://github.com/awslabs/git-secrets) - _AWS Labs_ - コミット、コミットメッセージ、マージに含まれるシークレットをスキャン。AWSのシークレットパターンにネイティブ対応、他のパターンにも設定可能。
- [Nightfall](https://nightfall.ai/solutions/product/github) - _Nightfall_ - GitHubリポジトリを含む複数のSDLCツールにおけるセンシティブデータの漏洩をモニタリングするウェブベースプラットフォーム。
- [Repo-supervisor](https://github.com/auth0/repo-supervisor) - _Auth0_ - CLI、Dockerコンテナ、またはAWS Lambdaで実行できるシークレ及スキャンツール。
- [SpectralOps](https://spectralops.io) - _Spectral_ - 自動化されたコードセキュリティ、シークレット、トークンおよびセンシティブデータのスキャン。
- [truffleHog](https://github.com/trufflesecurity/truffleHog) - _Truffle Security_ - Gitリポジトリを検索し、コミット履歴やブランチに深く掘り下げてシークレットを検出。

### 静的解析 <a id="static-analysis"></a>

静的解析セキュリティテスト（SAST）は対象を実行せず、危険な関数、ハードコードされたシークレット、設定問題等を検出します。IDEプラグインやCLIとしてCI/CDへ統合されることがあります。


#### 複数言語対応 <a id="multi-language-support"></a>

- [DevSkim](https://github.com/microsoft/DevSkim) - _Microsoft_ - 多くのプログラミング言語向けにセキュリティ分析を提供するIDEプラグイン、CLIおよびその他のツールのセット。
- [Graudit](https://github.com/wireghoul/graudit/) - _Eldar Marcussen_ - カスタムまたは事前設定されたregexシグネチャを使ってソースコードをスキャンし、潜在的なセキュリティ脆弱性を検出。
- [Hawkeye](https://github.com/hawkeyesec/scanner-cli) - _Hawkeyesec_ - プロジェクトセキュリティ、脆弱性および一般的なリスクを強調するモジュール化されたCLIツール。
- [LGTM](https://lgtm.com/) - _Semmle_ - カスタムまたは組み込みのCodeQLクエリを使ってコード内のセキュリティ脆弱性をスキャンおよびモニタリング。
- [RIPS](https://www.ripstech.com/) - _RIPS Technologies_ - PHP、JavaおよびNode.jsプロジェクト向けの自動化された静的解析。
- [SemGrep](https://semgrep.dev/) - _r2c_ - Semgrepは、エディタ、コミット、CI時にバグを検出し、コード標準を強制する高速かつオープンソースの静的解析ツール。
- [SonarLint](https://www.sonarlint.org/) - _SonarSource_ - IDEプラグインで、潜在的なセキュリティ問題、コード品質問題およびバグを強調。
- [SonarQube](https://www.sonarqube.org/) - _SonarSource_ - 多様な言語に対応したコードのセキュリティおよび品質問題をスキャン。


#### C / C++ <a id="c-c++"></a>

- [FlawFinder](https://github.com/david-a-wheeler/flawfinder) - C/C++コードのセキュリティ問題を解析するツールです。


#### C# <a id="c#"></a>

- [Puma Scan](https://github.com/pumasecurity/puma-scan) - C#コードのセキュリティ問題を解析するツールです。


#### 設定ファイル <a id="configuration-files"></a>
- [Conftest](https://github.com/instrumenta/conftest) - _Instrumenta_ - カスタムテストを作成し、任意の設定ファイルに存在するセキュリティ脆弱性をスキャン。
- [Selefra](https://github.com/selefra/selefra) - _Selefra_ - マルチクラウドおよびSaaS向けのオープンソースポリシー・アズ・コードソフトウェアで、アナリティクスを提供。


#### Java <a id="java"></a>

- [Deep Dive](https://discotek.ca/deepdive.xhtml) - _Discotek.ca_ - JVMデプロイユニット（Ear、War、Jar、APK）向けの静的解析。
- [Find Security Bugs](https://github.com/find-sec-bugs/find-sec-bugs/) - _OWASP_ - Java Webアプリケーションのセキュリティ診断用SpotBugsプラグイン。Eclipse、IntelliJ、Android StudioおよびSonarQubeに対応。
- [SpotBugs](https://github.com/spotbugs/spotbugs) - _SpotBugs_ - Javaアプリケーション向けの静的コード分析ツール。


#### JavaScript <a id="javascript"></a>

- [ESLint](https://eslint.org/) - JavaScriptコードのセキュリティ問題を解析するツールです。


#### Go <a id="go"></a>

- [Golang Security Checker](https://github.com/securego/gosec) - Goコードのセキュリティ問題を解析するツールです。


#### .NET <a id=".net"></a>

- [Security Code Scan](https://github.com/security-code-scan/security-code-scan) - .NETコードのセキュリティ問題を解析するツールです。


#### PHP <a id="php"></a>

- [Phan](https://github.com/phan/phan) - _Phan_ - PHPアプリケーション向けの広範な静的分析ツール。セキュリティスキャン機能も一部対応。
- [PHPCS Security Audit](https://github.com/FloeDesignTechnologies/phpcs-security-audit) - _Floe_ - PHP向けの静的分析ツール。PHP、Drupal 7およびPHP関連のCVEに関するルールを提供。
- [Progpilot](https://github.com/designsecurity/progpilot) - _Design Security_ - PHPソースコード向けの静的分析ツール。


#### Python <a id="python"></a>

- [Bandit](https://github.com/PyCQA/bandit) - Pythonコードのセキュリティ問題を解析するツールです。


#### Ruby <a id="ruby"></a>

- [Brakeman](https://github.com/presidentbeef/brakeman) - _Justin Collins_ - Ruby on Railsアプリケーションにおけるセキュリティ脆弱性を検出する静的分析ツール。
- [DawnScanner](https://github.com/thesp0nge/dawnscanner) - _Paolo Perego_ - RubyスクリプトおよびWebアプリケーション向けのセキュリティスキャンツール。Ruby on Rails、SinatraおよびPadrinoフレームワークに対応。


### サプライチェーンセキュリティ <a id="supply-chain-security"></a>

サプライチェーン攻撃はCIツールや実行される外部コードなど、SDLCの第三者要素を狙います。関連ツールはこうした攻撃への防御を支援します。

- [Harden Runner GitHub Action](https://github.com/step-security/harden-runner) - _StepSecurity_ - GitHubホストされたランナー（Ubuntu VM）にセキュリティエージェントをインストールし、資格情報の漏洩防止、コンパイル依存関係やツールの侵害検出、ビルド中のソースコードの改ざん検出を行う。
- [Overlay](https://github.com/os-scar/overlay) - _SCAR_ - 開発者がオープンソースパッケージを選択する前に、そのパッケージのリスクを評価するためのブラウザ拡張機能。
- [Preflight](https://github.com/spectralops/preflight) [Codecov hack](https://spectralops.io/blog/credentials-risk-supply-chain-lessons-from-the-codecov-breach/) - ソフトウェア供給網への攻撃を検出・防止するツールです。
- [Sigstore](https://www.sigstore.dev/) [fulcio](https://github.com/sigstore/fulcio) [cosign](https://github.com/sigstore/cosign) [rekor](https://github.com/sigstore/rekor) - ソフトウェア供給網への攻撃を検出・防止するツールです。
- [Syft](https://github.com/anchore/syft/) - _Anchore_ - コンテナイメージおよびファイルシステムからソフトウェアの材料リスト（SBOM）を生成するCLIツール。

### 脅威モデリング <a id="threat-modelling"></a>

脅威モデリングは、価値ある対象へのリスクとなる脅威、脆弱性、攻撃経路を特定し、緩和策となるセキュリティ制御を設計・実装・検証するための工学的作業です。

- [Awesome Threat Modelling](https://github.com/hysnsec/awesome-threat-modelling) - _Practical DevSecOps_ - テストモデルに関するリソースを厳選したリスト。
- [SecuriCAD](https://www.foreseeti.com/) - _Forseeti_ - ITインフラのためのリスクモデルと攻撃シミュレーションツール。
- [IriusRisk](https://iriusrisk.com/) - _IriusRisk_ - リスクモデルを描画し、リスクおよび対策を記録し、リスクを管理するツール。
- [Raindance Project](https://github.com/devsecops/raindance) - _DevSecOps_ - 攻撃マップを用いて、攻撃面およびコンパウンドを引き起こす可能性のある敵の戦略を特定する。
- [SD Elements](https://www.securitycompass.com/sdelements/threat-modeling/) - _Security Compass_ - リスクを特定・評価し、実行可能なタスクを生成し、関連するチケットを追跡する。
- [Threat Dragon](https://owasp.org/www-project-threat-dragon/) - _OWASP_ - リスクモデルの図示ツール。
- [Threat Modelling Tool](https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling) - _Microsoft_ - リスクモデルの図示ツ及。
- [Threatspec](https://threatspec.org/) - _Threatspec_ - リスクモデルをコードとして定義する。

## 関連リスト <a id="related-lists"></a>

- [Awesome Dynamic Analysis](https://github.com/analysis-tools-dev/dynamic-analysis/) - _Matthias Endler_ - ディナミック分析ツールおよびコード品質チェックツールのコレクション。
- [Awesome Platform Engineering](https://github.com/shospodarets/awesome-platform-engineering/) - _Platform Engineering_向けのソリューション、ツールおよびリソースの厳選リスト。
- [Awesome Static Analysis](https://github.com/analysis-tools-dev/static-analysis/) - _Matthias Endler_ - 静的解析ツールおよびコード品質チェックツールのコレクション。
- [Awesome Threat Modelling](https://github.com/hysnsec/awesome-threat-modelling) - _Practical DevSecOps_ - 威脅モデリングリソースの選定リスト。
- [Vulnerable Web Apps Directory](https://owasp.org/www-project-vulnerable-web-applications-directory) - _OWASP_ - 学習目的の脆弱性のあるウェブアプリケーションのコレクション。
