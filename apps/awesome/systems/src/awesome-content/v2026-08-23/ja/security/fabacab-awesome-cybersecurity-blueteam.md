---
title: "Awesome Cybersecurity Blue Team"
description: "Cybersecurity Blue Teamを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-fabacab-awesome-cybersecurity-blueteam-readme-md"
---

# Awesome Cybersecurity Blue Team

Cybersecurity Blue Teamを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [Automation and Convention](#automation-and-convention)
  - [Code libraries and bindings](#code-libraries-and-bindings)
  - [Security Orchestration, Automation, and Response (SOAR)](#security-orchestration-automation-and-response-soar)
- [Cloud platform security](#cloud-platform-security)
  - [Distributed monitoring](#distributed-monitoring)
  - [Kubernetes](#kubernetes)
  - [Service meshes](#service-meshes)
- [Communications security (COMSEC)](#communications-security-comsec)
- [DevSecOps](#devsecops)
  - [Application or Binary Hardening](#application-or-binary-hardening)
  - [Compliance testing and reporting](#compliance-testing-and-reporting)
  - [Dependency confusion](#dependency-confusion)
  - [Fuzzing](#fuzzing)
  - [Policy enforcement](#policy-enforcement)
  - [Supply chain security](#supply-chain-security)
- [Honeypots](#honeypots)
  - [Tarpits](#tarpits)
- [Host-based tools](#host-based-tools)
  - [Sandboxes](#sandboxes)
- [Identity and AuthN/AuthZ](#identity-and-authnauthz)
- [Incident Response tools](#incident-response-tools)
  - [IR management consoles](#ir-management-consoles)
  - [Evidence collection](#evidence-collection)
- [Network perimeter defenses](#network-perimeter-defenses)
  - [Firewall appliances or distributions](#firewall-appliances-or-distributions)
- [Operating System distributions](#operating-system-distributions)
- [Phishing awareness and reporting](#phishing-awareness-and-reporting)
- [Preparedness training and wargaming](#preparedness-training-and-wargaming)
  - [Post-engagement analysis and reporting](#post-engagement-analysis-and-reporting)
- [Security configurations](#security-configurations)
- [Security monitoring](#security-monitoring)
  - [Endpoint Detection and Response (EDR)](#endpoint-detection-and-response-edr)
  - [Network Security Monitoring (NSM)](#network-security-monitoring-nsm)
  - [Security Information and Event Management (SIEM)](#security-information-and-event-management-siem)
  - [Service and performance monitoring](#service-and-performance-monitoring)
  - [Threat hunting](#threat-hunting)
- [Threat intelligence](#threat-intelligence)
  - [Fingerprinting](#fingerprinting)
  - [Threat signature packages and collections](#threat-signature-packages-and-collections)
- [Tor Onion service defenses](#tor-onion-service-defenses)
- [Transport-layer defenses](#transport-layer-defenses)
  - [Overlay and Virtual Private Networks (VPNs)](#overlay-and-virtual-private-networks-vpns)
- [macOS-based defenses](#macos-based-defenses)
- [Windows-based defenses](#windows-based-defenses)
  - [Active Directory](#active-directory)

<a id="automation-and-convention"></a>
## 自動化と規約

- [Ansible Lockdown](https://ansiblelockdown.io/) - Ansibleのセキュリティテーマに関連する、検証済みかつ積極的に維持されているロールのキュレーションコレクション
- [Clevis](https://github.com/latchset/clevis) - 自動暗号解読を可能にするプラグインフレームワーク、よくTangクライアントとして使用
- [DShell](https://github.com/USArmyResearchLab/Dshell) - Pythonで構成された拡張可能なネットワークフォレnsic分析フレームワークで、ネットワークパケットキャプチャの解析を支援するプラグインの迅速開発を可能にする
- [Dev-Sec.io](https://dev-sec.io/) - サーバー強化フレームワークで、Ansible、Chef、Puppetによるさまざまなベースラインセキュリティ設定を提供
- [Password Manager Resources](https://github.com/apple/password-manager-resources) - パスワード管理をより良くするための協働型、コミュニティ参加型データとコード
- [peepdf](https://eternal-todo.com/tools/peepdf-pdf-analysis-tool) - スクリプト可能なPDFファイル分析ツール
- [PyREBox](https://talosintelligence.com/pyrebox) - QEMUに基づくPythonスクリプト可能な逆エンジニアリングサンドボックス
- [Watchtower](https://containrrr.dev/watchtower/) - Dockerコンテナベースのソリューションで、Dockerコンテナのベースイメージの自動更新を実現し、無人アップグレード体験を提供

### Code libraries and bindings

- [MultiScanner](https://github.com/mitre/multiscanner) - Pythonで構成されたファイル分析フレームワークで、ファイルセットの評価を自動的にツールセットで実行し、出力結果を集約する
- [Posh-VirusTotal](https://github.com/darkoperator/Posh-VirusTotal) - VirusTotal.comのAPIに接続するPowerShellインターフェース
- [censys-python](https://github.com/censys/censys-python) - CensysのREST APIに接続するPythonラッパー
- [libcrafter](https://github.com/pellegre/libcrafter) - 高レベルのC++ネットワークパケットスヌーピングおよび作成ライブラリ
- [python-dshield](https://github.com/rshipp/python-dshield) - Internet Storm Center/DShield APIに接続するPython的なインターフェース
- [python-sandboxapi](https://github.com/InQuest/python-sandboxapi) - マルウェアサンドボックスとの統合を実現するための最小限かつ一貫したPython API
- [python-stix2](https://github.com/oasis-open/cti-python-stix2) - 構造化脅威情報表現（STIX）JSONコンテンツのシリアル化およびデシリアル化に用いるPython API、および一般的なタスクに向けた上位レベルAPI

### Security Orchestration, Automation, and Response (SOAR)

参照も [Security Information and Event Management (SIEM)](#security-information-and-event-management-siem)、および [IR management consoles](#ir-management-consoles)。

- [Shuffle](https://shuffler.io/) - ITプロフェッショナルやブルチームメンバー向けのグラフィカルな一般化ワークフロー（自動化）ビルダー

<a id="cloud-platform-security"></a>
## クラウドプラットフォームのセキュリティ

参照も [asecure.cloud/tools](https://asecure.cloud/tools/)。

- [Aaia](https://github.com/rams3sh/Aaia) - Neo4jを用いてAWS IAMおよびOrganizationsをグラフ形式で可視化するツール
- [Falco](https://falco.org/) - コンテナ化アプリケーション、ホスト、ネットワークパケットフローにおける異常行動を検出するための行動監視ツール。Linuxカーネルの監視をベースにし、Kubernetesなどの実行時データで補強
- [Kata Containers](https://katacontainers.io/) - 軽量な仮想マシンを用いたセキュアなコンテナランタイム。コンテナのように動作・パフォーマンスが高く、ハードウェア仮想化技術を用いて強力なワークロード分離を実現する第二の防御層を提供
- [Principal Mapper (PMapper)](https://github.com/nccgroup/PMapper) - AWSにおけるIAM権限をスクリプトとライブラリで迅速に評価し、AWSアカウントまたはAWS組織のIAM設定におけるリスクを特定する
- [Prowler](https://github.com/toniblyx/prowler) - AWS-CLI コマンドに基づく Amazon Web Services アカウントのセキュリティ評価および強化ツール
- [Scout Suite](https://github.com/nccgroup/ScoutSuite) - マルチクラウドセキュリティ評価ツール。クラウド環境のセキュリティポジションを評価できるオープンソースツール
- [gVisor](https://github.com/google/gvisor) - Go言語で書かれたアプリケーションコア。Linuxシステムの大部分を実装し、アプリケーションとホストカーネルの間の隔离境界を提供

### Distributed monitoring

も参照ください [§ Service and performance monitoring](#service-and-performance-monitoring).

- [Cortex](https://cortexmetrics.io/) - Prometheus向けに水平スケーラブルで、高可用性、マルチテナント、長期保存を提供するストレージ
- [Jaeger](https://www.jaegertracing.io/) - マイクロサービスベースの分散システムの監視およびトラブルシューティングに用いられる分散トレースプラットフォームのバックエンド
- [OpenTelemetry](https://opentelemetry.io/) - クラウドネイティブソフトウェア向けの観測フレームワーク。アプリケーションパフォーマンスメトリクスをトレースバックエンドにエクスポートするためのツール、API、SDKのコレクション（以前はOpenTracingおよびOpenCensusプロジェクトが維持していた）
- [Prometheus](https://prometheus.io/) - SoundCloudで元に開発されたオープンソースなシステム監視およびアラートツール
- [Zipkin](https://zipkin.io/) - サービスアーキテクチャにおける遅延問題をトラブルシューティングするために必要なタイミングデータを収集するための分散トレースシステムのバックエンド

### Kubernetes

も参照ください [Kubernetes-Security.info](https://kubernetes-security.info/).

- [KubeSec](https://kubesec.io/) - Kubernetesのマニフェストを静的に分析するツール。ローカルで実行可能であり、Kubernetesのアドミッションコントローラーとして、あるいは独自のクラウドサービスとして実行可能
- [Kyverno](https://kyverno.io/) - Kubernetes向けのポリシーエンジン
- [Linkerd](https://linkerd.io/) - アプリケーション自体を変更しなくても、Kubernetesアプリケーションに観測性、信頼性、セキュリティを追加する超軽量のKubernetes専用サービスメッシュ
- [Managed Kubernetes Inspection Tool (MKIT)](https://github.com/darkbitio/mkit) - 管理されたKubernetesクラスタのオブジェクトおよびクラスタ内に実行中のワークロード／リソースの、多くのセキュリティ関連設定をクエリし、検証
- [Polaris](https://polaris.docs.fairwinds.com/) - Kubernetesのベストプラクティスをコードコミット、Kubernetesのアドミッションリクエスト、または既にクラスタに実行中のリソースに対してテストを実行して検証
- [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) - Kubernetesで一方向暗号化されたシークレットを管理するコントローラーおよびツール
- [certificate-expiry-monitor](https://github.com/muxinc/certificate-expiry-monitor) - TLS証明書の有効期限をPrometheusメトリクスとして公開するユーティリティ
- [k-rail](https://github.com/cruise-automation/k-rail) - Kubernetes向けのワークロードポリシー実行ツール
- [kube-forensics](https://github.com/keikoproj/kube-forensics) - クラスタ管理者が実行中のポッドおよびそのすべてのコンテナの現在の状態をダンプできるようにし、セキュリティ専門家がオフラインでフォレイン分析を行うことができる
- [kube-hunter](https://kube-hunter.aquasec.com/) - Kubernetesクラスタ内のセキュリティ問題を検出するためのテスト（"hunters"）を実行するオープンソースツール。外部（"攻撃者の視点"）またはクラスタ内から実行可能
- [kubernetes-event-exporter](https://github.com/opsgenie/kubernetes-event-exporter) - Kubernetesのよく見落とされるイベントをさまざまな出力にエクスポートし、観測性やアラートの目的で利用できるようにするユーテイリティ

### Service meshes

も参照ください [ServiceMesh.es](https://servicemesh.es/).

- [Consul](https://consul.io/) - 動的で分散されたインフラストラクチャを横断してアプリケーションを接続・設定し、Consul Connectにより、サービス間の通信を安全に実現し、TLS暗号化と識別ベースの認可を自動で適用するソリューション
- [Istio](https://istio.io/) - マイクロサービス間の統一された統合方法、トラフィックフローの管理、ポリシーの強制、テレメトリデータの集計を実現するオープンプラットフォーム

<a id="communications-security-comsec"></a>
## 通信セキュリティ（COMSEC）

も参照ください [Transport-layer defenses](#transport-layer-defenses).

- [GPG Sync](https://github.com/firstlookmedia/gpgsync) - 組織またはチーム内のすべてのメンバー間でOpenPGP公開鍵の配布、取り消し、更新を中央化し、自動化するシステム
- [Geneva (Genetic Evasion)](https://censorship.ai/) - 国レベルの審査を回避するための、パケット操作ベースの規制回避戦略を進化させる革新的な実験的遺伝アルゴリズム
- [GlobaLeaks](https://www.globaleaks.org/) - 誰でも簡単に安全な告発プラットフォームを構築・運用できる無料オープンソースソフトウェア
- [SecureDrop](https://securedrop.org/) - メディア組織やNGOが匿名のソースから安全に文書を受け取れるオープンソースの告発提出システム
- [Teleport](https://goteleport.com/) - エンジニアやセキュリティ専門家が、SSHサーバー、Kubernetesクラスタ、ウェブアプリケーション、データベースなど、すべての環境において一元化したアクセスを実現する機能

<a id="devsecops"></a>
## DevSecOps

も参照ください [awesome-devsecops](https://github.com/devsecops/awesome-devsecops).

- [Bane](https://github.com/genuinetools/bane) - Dockerコンテナ用のカスタムでより優れたAppArmorプロファイル生成ツール
- [BlackBox](https://github.com/StackExchange/blackbox) - Git/Mercurial/Subversionに秘密情報を暗号化して「静的状態」で保存する機能
- [Checkov](https://www.checkov.io/) - Terraform（インフラストラクチャアスコード）に対する静的解析ツールで、CISポリシー違反やクラウドセキュリティの誤設定を検出・防止
- [Cilium](https://cilium.io/) - DockerやKubernetesなどのLinuxコンテナ管理プラットフォームでデプロイされたアプリケーションサービス間のネットワーク接続を透明に安全に確保するオープンソースソフトウェア
- [Clair](https://github.com/coreos/clair) - アプリケーションコンテナ（例：Docker）イメージを通じて導入された脆弱性を検出するための静的解析ツール
- [CodeQL](https://securitylab.github.com/tools/codeql) - コードベース内の脆弱性を検出するために、コードをデータのように扱ったクエリを実行する機能
- [DefectDojo](https://www.defectdojo.org/) - DevOpsおよび継続的なセキュリ及格に特化したアプリケーション脆弱性管理ツール
- [Gauntlt](http://gauntlt.org/) - 定期的な継続インテグレーションビルドパイプライン中にペントテストを実行する機能
- [Git Secrets](https://github.com/awslabs/git-secrets) - Gitリポジトリにパスワードやその他の機密情報をコミットするのを防ぐ機能
- [SOPS](https://github.com/mozilla/sops) - YAML、JSON、ENV、INI、バイナリフォーマットをサポートし、AWS KMS、GCP KMS、Azure Key Vault、PGPで暗号化するファイル編集ツール
- [Snyk](https://snyk.io/) - オープンソースの依存関係およびコンテナイメージ内の脆弱性やライセンス違反を検出し、修正するツール
- [SonarQube](https://sonarqube.org) - 自動テスト中に詳細なレポートを提供し、新たに導入されたセキュリティ脆弱性に対してアラートを発行する継続的な検査ツール
- [Trivy](https://github.com/aquasecurity/trivy) - コンテナおよびその他のアーテファクトに対するシンプルかつ包括的な脆弱性スキャナー。継続インテグレーションパイプラインでの使用に適している。
- [Vault](https://www.vaultproject.io/) - APIキー、パスワード、証明書などの機密情報を、統一インターフェースを通じて安全にアクセスできるツール
- [git-crypt](https://www.agwa.name/projects/git-crypt/) - gitにおける透明ファイル暗号化；選択した保護対象のファイルはコミット時に暗号化され、チェックアウト時に復号される。
- [helm-secrets](https://github.com/jkroepke/helm-secrets) - Gitワークフローでシークレットを管理するHelmプラグインで、どこにでも保存可能であり、SOPSによってバックアップされている。
- [terrascan](https://runterrascan.io/) - インフラストラクチャアスコードツール向けの静的コード分析ツールで、コンプライアンスおよびセキュリティ違反を検出し、クラウドネイティブリソースのプロビジョニング前にリスクを軽減する。
- [tfsec](https://aquasecurity.github.io/tfsec/) - Terraformコード向けの静的分析セキュリティスキャナーで、ローカル環境およびCIパイプラインで実行可能。

### Application or Binary Hardening

- [DynInst](https://dyninst.org/dyninst) - バイナリインストルメンテーション、分析、変更に必要なツールで、バイナリパッチングに有用。
- [DynamoRIO](https://dynamorio.org/) - 実行中にプログラムのいかなる部分に対してもコード変換をサポートするランタイムコード操作システムで、プロセスレベルの仮想マシンとして実装されている。
- [Egalito](https://egalito.org/) - バイナリ再コンパイラおよびインストルメンテーションフレームワークで、通常のLinuxバイナリを完全に分解・変換・再生成可能であり、バイナリ強化およびセキュリティ研究に適用。
- [Valgrind](https://www.valgrind.org/) - 動的分析ツールの構築に用いるインストルメンテーションフレームワーク。

### Compliance testing and reporting

- [Chef InSpec](https://www.chef.io/products/chef-inspec) - セキュリティおよびコンプライアンスルールを記述する言語で、ITインフラに適用された自動テストとして実行され、非コンプライアンスを発見・報告する。
- [OpenSCAP Base](https://www.open-scap.org/tools/openscap-base/) - SCAPベースラインプロファイルに対してシステムを評価し、スキャンされたシステムのセキュリティ状態を報告するためのライブラリおよびコマンドラインツール（`oscap`）。

### Dependency confusion

も参照ください [§ Supply chain security](#supply-chain-security).

- [Dependency Combobulator](https://github.com/apiiro/combobulator) - 依存関係の混同漏洩や潜在的な攻撃を検出・防止するオープンソース、モジュラーかつ拡張可能なフレームワーク。
- [Confusion checker](https://github.com/sonatype-nexus-community/repo-diff) - あなたのリポジトリ間で同じ名前のアーティファクトが存在するかどうかをチェックするスクリプト。
- [snync](https://github.com/snyk-labs/snync) - 依存関係の混同によるサプライチェーンセキュリティ攻撃に脆弱であるかどうかを防止・検出する。

### Fuzzing

も参照ください [Awesome-Fuzzing](https://github.com/secfigo/Awesome-Fuzzing).

* [Atheris](https://pypi.org/project/atheris/) - libFuzzerに基づいたPython用のカバレッジガイド付きフュージングエンジンで、PythonコードおよびCPython用のネイティブ拡張もフュージング可能。
* [FuzzBench](https://google.github.io/fuzzbench/) - Google規模で実行される多様な現実世界ベンチマークを用いて、フュージングツールを評価する無料サービス。
* [OneFuzz](https://github.com/microsoft/onefuzz) - セルフホスト型のフュージングアスアサービス（FaaS）プラットフォーム。

### Policy enforcement

- [AllStar](https://github.com/ossf/allstar) - 組織またはリポジトリにインストールされたGitHubアプリで、セキュリティポリシーを設定・強制する。
- [Conftest](https://conftest.dev/) - 構造化された設定データに対してテストを書くことを支援するユーティリティ。
- [Open Policy Agent (OPA)](https://www.openpolicyagent.org/) - クラウドネイティブスタック全体におけるポリシーの一元化ツールセットおよびフレームワーク。
- [Regula](https://regula.dev/) - AWS、Azure、Google Cloud、Kubernetesのインフラコードテンプレート（Terraform、CloudFormation、K8sマニフェスト）に対して、Open Policy Agent/Regoを使用してセキュリティおよびコンプライアンスをチェック。
- [Tang](https://github.com/latchset/tang) - ネットワーク存在にデータをバインドするサーバー；特定（セキュア）ネットワークに接続されているクライアントに対してのみデータを提供する。

### Supply chain security

も参照ください [§ Dependency confusion](#dependency-confusion).

- [Grafeas](https://grafeas.io/) - ソフトウェアサプライチェーンの監視および管理を可能にするオープンなアーティファクトメタデータAPI。
- [Helm GPG (GnuPG) Plugin](https://github.com/technosophos/helm-gpg) - Helm向けのチャート署名および検証をGnuPGで実行。
- [Notary](https://github.com/theupdateframework/notary) - 人々がコンテンツを公開し、検証しやすくなるようにすることで、インターネットをより安全にする目的を持つ。
- [in-toto](https://in-toto.io/) - ソフトウェアサプライチェーンの整合性を確保するためのフレームワーク。

<a id="honeypots"></a>
## ハニーポット

もしこの項目に関連する他の項目があれば、 [awesome-honeypots](https://github.com/paralax/awesome-honeypots) を参照してください。

- [CanaryTokens](https://github.com/thinkst/canarytokens) - セルフホスト可能なハニーテンプレート生成器およびレポートダッシュボード；デモ版は [CanaryTokens.org](https://canarytokens.org/) で提供されている。
- [Kushtaka](https://kushtaka.org) - リソースが不足しているブルチーム向けの持続可能な一括ハニーポットおよびハニーテンプレートオーガナイザー。
- [Manuka](https://github.com/spaceraccoon/manuka) - 脅威行動者のリサーチ行動をモニタリングし、ブルチームに行動可能なインテリジェンスを生成するオープンソースインテリジェンス（OSINT）ハニーポット。

### Tarpits

- [Endlessh](https://github.com/skeeto/endlessh) - SSHのタープイットとして、無限に繰り返すバナーを遅く送信する。
- [LaBrea](http://labrea.sourceforge.net/labrea-info.html) - 使用されていないIP空間に対するARPリクエストに応答するプログラムで、偽のマシンとしての表示を作り、さらにリクエストに応答する際の速度を遅くすることでスキャナーやウルムなどを遅らせる。

<a id="host-based-tools"></a>
## ホストベースツール

- [Artillery](https://github.com/BinaryDefense/artillery) - LinuxおよびWindowsオペレーティングシステムを保護するための、ハニーポット、ファイルシステムモニタ、およびアラートシステムの組み合わせ。
- [Crowd Inspect](https://www.crowdstrike.com/resources/community-tools/crowdinspect-tool/) - Windowsシステム向けの無料ツールで、ネットワーク上で通信しているマルウェアの存在を警告する。
- [Fail2ban](https://www.fail2ban.org/) - コンピュータサーバーからブートフォース攻撃を防ぐためのインシデント防止ソフトウェアフレームワーク。
- [Open Source HIDS SECurity (OSSEC)](https://www.ossec.net/) - 完全にオープンソースで無料であり、機能が豊富なホストベースインストール検知システム（HIDS）。
- [Rootkit Hunter (rkhunter)](http://rkhunter.sourceforge.net/) - POSIX準拠のBashスクリプトで、ホストにマルウェアの兆候をスキャンする。
- [Shufflecake](https://shufflecake.net/) - Linux上で複数の隠されたファイルシステムを有する場合の、妥当な否定可能性を提供する。
- [USB Keystroke Injection Protection](https://github.com/google/ukip) - LinuxシステムでUSBキーストローク注入デバイスをブロッキングするデーモン。
- [chkrootkit](http://chkrootkit.org/) - GNU/Linuxシステム上でルートキットの兆候をローカルに検出する。

### Sandboxes

- [Bubblewrap](https://github.com/containers/bubblewrap) - 権限のないLinuxユーザーが使用できる、オペレーティングシステムまたはユーザーデータへのアクセスを制限できるサンドボックスツール。
- [Dangerzone](https://dangerzone.rocks/) - 危険なPDF、オフィスドキュメント、または画像を安全なPDFに変換する。
- [Firejail](https://firejail.wordpress.com/) - SUIDプログラムで、Linuxのnamespacesおよびseccomp-bpfを用いて信頼できないアプリケーションの実行環境を制限し、セキュリティバリアーのリスクを低減する

<a id="identity-and-authnauthz"></a>
## アイデンティティと認証・認可

- [Gluu Server](https://gluu.org/) - Webおよびモバイルアプリケーション向けの中央認証と承認を提供する、オープンソースソフトウェアによるクラウドネイティブコミュニティ配布版

<a id="incident-response-tools"></a>
## インシデント対応ツール

もしこの項目に関連する他の項目があれば、 [awesome-incident-response](https://github.com/meirwah/awesome-incident-response) を参照してください。

- [LogonTracer](https://github.com/JPCERTCC/LogonTracer) - Windowsイベントログを可視化・分析することで、悪意あるWindowsログインを調査
- [Volatility](https://www.volatilityfoundation.org/) - 高度なメモリフォレインスフレームワーク。
- [aws_ir](https://github.com/ThreatResponse/aws_ir) - セキュリティ準備が一切ない状態でも、インシデント対応を自動化する

### IR management consoles

もしこの項目に関連する他の項目があれば、 [Security Orchestration, Automation, and Response (SOAR)](#security-orchestration-automation-and-response-soar) を参照してください。

- [CIRTKit](https://github.com/opensourcesec/CIRTKit) - Viperに基づいたスクリプト可能なデジタルフォレンジクスおよびインシデント対応（DFIR）ツールキット
- [Fast Incident Response (FIR)](https://github.com/certsocietegenerale/FIR) - セキュリ及インシデントの管理プラットフォームで、セキュリティインシデントの作成、追跡、報告を容易に実行
- [Rekall](http://www.rekall-forensic.com/) - 高度なフォレンジクスおよびインシデント対応フレームワーク
- [TheHive](https://thehive-project.org/) - スケーラブルで無料のセキュリティインシデント対応プラットフォーム。SOC、CSIRT、CERTにとって生活を容易にし、MISPとの密接な統合を備える
- [threat_note](https://github.com/defpoint/threat_note) - Defense Point Securityが開発したWebアプリケーションで、セキュリティ研究者が自らの研究に関連するインジケーターを追加・取得できるようになる

### Evidence collection

- [AutoMacTC](https://github.com/CrowdStrike/automactc) - macOS上でさまざまなフォレンジクスアーテファクトにアクセスし、それらを解析し、分析に適したフォーマットで提示するためのモジュール化・自動化されたフォレンジクス初期調査収集フレームワーク
- [OSXAuditor](https://github.com/jipegit/OSXAuditor) - 無料のmacOSコンピュータフォレンジクスツール
- [OSXCollector](https://github.com/Yelp/osxcollector) - macOS向けのフォレンジクス証拠収集および分析ツールキット
- [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - WindowsのバッチスクリプトおよびUnixのBashスクリプトで、インシデント対応中にホストのフォレnsicデータを包括的に収集する
- [Margarita Shotgun](https://github.com/ThreatResponse/margaritashotgun) - コマンドラインユーティリティ（Amazon EC2インスタンスを使用する場合も、使用しない場合も動作）で、リモートメモリの取得を並列化する
- [Untitled Goose Tool](https://github.com/cisagov/untitledgoosetool) - SIEMがインジェストしていない環境でも、Azure/AzureAD/M365環境からクラウドアーテファクトをエクスポートし、完全な調査を実行できるように支援する

<a id="network-perimeter-defenses"></a>
## ネットワーク境界防御

- [Gatekeeper](https://github.com/AltraMayor/gatekeeper) - 最初のオープンソースの分散型拒否サービス（DDoS）保護システム
- [fwknop](https://www.cipherdyne.org/fwknop/) - ファイアウォールで、単一パケット認可（Single Packet Authorization）によりポートを保護する。
- [ssh-audit](https://github.com/jtesta/ssh-audit) - SSHサーバーのセキュリティポジションを改善するための簡単なツールで、迅速な改善提案を提供

### Firewall appliances or distributions

もしこの項目に関連する他の項目があれば、 [Wikipedia: List of router and firewall distributions](https://en.wikipedia.org/wiki/List_of_router_and_firewall_distributions) を参照してください。

- [IPFire](https://www.ipfire.org/) - IPCopからフォークされた、強化されたGNU/Linuxベースのルーターおよびファイアウォールディストリビューション
- [OPNsense](https://opnsense.org/) - pfSenseからフォークされた、強化されたFreeBSDベースのファイアウォールおよびルーティングプラットフォーム
- [pfSense](https://www.pfsense.org/) - m0n0wallからフォークされた、FreeBSDベースのファイアウォールおよびルーターディストリビューション

<a id="operating-system-distributions"></a>
## OSディストリビューション

- [Computer Aided Investigative Environment (CAINE)](https://caine-live.net/) - 多くのデジタルフォレンジクスおよび証拠収集ツールを事前インストールしたイタリア語GNU/Linuxライブディストリビューション
- [Security Onion](https://securityonionsolutions.com/) - インシデント検知、企業セキュリティモニタリング、ログ管理向けのオープンソースGNU/Linuxディストリビューション
- [Qubes OS](https://qubes-os.org/) - Xenハイパフォーマープロジェクトの上に構築されたデスクトップ環境で、各端末ユーザーのプログラムを独自の仮想マシン内で実行し、成功したマルウェアの影響範囲を厳しく制限するための厳密なセキュリティ制御を提供する。

<a id="phishing-awareness-and-reporting"></a>
## フィッシング啓発と報告

も参照：[awesome-pentest § Social Engineering Tools](https://github.com/fabacab/awesome-pentest#social-engineering-tools).

- [CertSpotter](https://github.com/SSLMate/certspotter) - SSLMateの証明書透明性ログモニタリングツールで、あなたのドメインのいずれかに対してSSL/TLS証明書が発行された場合にアラートを発行する。
- [Gophish](https://getgophish.com/) - 強力でオープンソースのフィッシングフレームワークで、組織のフィッシングへの暴露を簡単にテストできる。
- [King Phisher](https://github.com/securestate/king-phisher) - 現実世界のフィッシング攻撃をシミュレートして、ユーザーの意識をテスト・促進するツール。
- [NotifySecurity](https://github.com/certsocietegenerale/NotifySecurity) - ユーザーが怪しいメールをセキュリティチームに報告できるようにするOutlookの拡張機能。
- [Phishing Intelligence Engine (PIE)](https://github.com/LogRhythm-Labs/PIE) - フィッシング攻撃の検出および対応を支援するフレームワーク。
- [Swordphish](https://github.com/certsocietegenerale/swordphish-awareness) - （偽の）フィッシングキャンペーンを作成・管理できるプラットフォームで、怪しいメールを識別する能力を人々に訓練するためのもの。
- [mailspoof](https://github.com/serain/mailspoof) - SPFおよびDMARC記録にメールスプーフィングを許容する可能性のある問題をスキャンする。
- [phishing_catcher](https://github.com/x0rz/phishing_catcher) - Certificate Transparency Log（CTL）において、ドメイン名に基づいて怪しいTLS証明書が発行された場合を監視するための設定可能なスクリプト。サービスを使用する。 [CertStream](https://certstream.calidog.io/)

<a id="preparedness-training-and-wargaming"></a>
## 準備訓練とウォーゲーム

（アドバタイド・エミュレーション、脅威シミュレーション、または類似のものとして知られている。）

- [APTSimulator](https://github.com/NextronSystems/APTSimulator) - システムをAPT攻撃の被害者であるように見せることを可能にするツールセット。
- [Atomic Red Team](https://atomicredteam.io/) - セキュリティ制御をテストするためのシンプルかつ自動化可能なテストのライブラリ。
- [BadBlood](https://www.secframe.com/badblood/) - テスト（非生産）Windowsドメインにデータを埋め込み、セキュリティアナリストやエンジニアがツールを使用してActive Directoryのセキュリティを理解し、強化するための実践環境を構築する。
- [Caldera](https://caldera.mitre.org/) - MITREが開発したスケーラブルで自動化され、拡張可能な敵行動シミュレーションプラットフォーム。
- [Drool](https://www.dns-oarc.net/tools/drool) - パケットキャプチャファイルからDNSトラフィックを再現し、指定されたサーバーに送信することで、DNSへのDDoS攻撃をシミュレートし、通常のDNSクエリの測定を行う。
- [DumpsterFire](https://github.com/TryCatchHCF/DumpsterFire) - 再現性があり、時間遅延をもつ、分散型セキュリティイベントを構築できるモジュール化されたメニュー駆動型、マルチプラットフォームツール。Blue Teamの訓練やセンサー/アラートマッピングに使用。
- [Infection Monkey](https://www.guardicore.com/infectionmonkey/) - 既存の制御を検証し、攻撃者が現在のネットワークセキュリティのギャップをどのようにexploitするかを特定するためのオープンソースなブリッチと攻撃シミュレーション（BAS）プラットフォーム。
- [Metta](https://github.com/uber-common/metta) - 敵対的シミュレーションを行う自動化された情報セキュリティ準備ツール。
- [Network Flight Simulator (`flightsim`)](https://github.com/alphasoc/flightsim) - 悪意あるネットワークトラフィックを生成し、セキュリティチームによるセキュリティ制御の評価とネットワーク可視性の監査を支援するユーティリティ。
- [RedHunt OS](https://github.com/redhuntlabs/RedHunt-OS) - Ubuntuベースのオープンな仮想アプライアンス（`.ova`）で、複数の脅威シミュレーションツールおよび防衛ツールキットが事前設定されている。
- [Stratus Red Team](https://stratus-red-team.cloud/) - クラウド環境に対して、細かくかつ自立した形で攻撃技術をシミュレートする。『クラウド用の原子的な赤チーム™』と考える。
- [tcpreplay](https://tcpreplay.appneta.com/) - ネットワークトラフィックの編集および再放送を目的とした、無料のオープンソースツールのセット。元々、インシデント検出／防止システム向けに悪意あるトラフィックパターンの再放送を設計されたもの。

### Post-engagement analysis and reporting

- [RedEye](https://cisagov.github.io/RedEye/) - 赤チームと青チームの両方に支援を提供する分析ツール。コマンド＆コントロール活動の可視化や報告、攻撃経路の再現・デモンストレーション、ステークホルダーへの補修提案の明確な伝達を可能にする。

<a id="security-configurations"></a>
## セキュリティ設定

（デフォルトで安全な基準および実装されたベストプラクティスとして知られている。）

- [Bunkerized-nginx](https://github.com/bunkerity/bunkerized-nginx) - Webサイト向けの、NginX構成と、多くの防御技術を実装したスクリプトを含むDockerイメージ。

<a id="security-monitoring"></a>
## セキュリティ監視

- [Crossfeed](https://docs.crossfeed.cyber.dhs.gov/) - 組織のパブリックフロントエンドにおける攻撃面を継続的に探索・監視し、資産を発見し、潜在的なセキュリティ脆弱性を検出・フラグをつける。
- [Starbase](https://github.com/JupiterOne/starbase) - サービスやシステムから資産と関係性を収集し、直感的なグラフビューを提供することで、誰でもが行えるグラフベースのセキュリティ分析を可能にする。

### Endpoint Detection and Response (EDR)

- [Wazuh](https://wazuh.com/) - OSSEC HIDSのフォークに基づく、マルチプラットフォームのエージェントベースのオープンソースセキュリティモニタリング。

### Network Security Monitoring (NSM)

も参照：[awesome-pcaptools](https://github.com/caesar0301/awesome-pcaptools).

- [Arkime](https://github.com/arkime/arkime) - 現在のセキュリティインフラに追加して、ネットワークトラフィックを標準PCAP形式で保存・インデックス化し、高速かつインデックス化されたアクセスを提供する。
- [ChopShop](https://github.com/MITRECND/chopshop) - APTの技術をpynidsベースでデコーダーおよび検出器を作成・実行するためのアナリスト向けフレームワーク。
- [Maltrail](https://github.com/stamparm/maltrail) - 悪意あるネットワークトラフィック検出システム。
- [OwlH](https://www.owlh.net/) - Suricata、Zeek、Molochのライフサイクルを可視化することで、スケールしたネットワークIDSの管理を支援する。
- [Real Intelligence Threat Analysis (RITA)](https://github.com/activecm/rita) - Zeekログを読み込み、ベイビング、DNSトンネリングなど、さまざまな行動を検出するオープンソースネットワークトラフィック分析フレームワーク。
- [Respounder](https://github.com/codeexpress/respounder) - ネットワーク上にResponder LLMNR/NBT-NS/MDNSポイズンが存在するかを検出する。
- [Snort](https://snort.org/) - 広く導入されている、リアルタイムパケット分析、トラフィックログ、カスタムルールベーストリガーを実行する無料ソフトウェアIPS。
- [SpoofSpotter](https://github.com/NetSPI/SpoofSpotter) - スポォードされたNetBIOS名サービス（NBNS）応答をキャッチし、メールまたはログファイルにアラートを送信する。
- [Stenographer](https://github.com/google/stenographer) - インシデント検出および対応のための、パケットをディスクにバッファリングするフルパケットキャプチャツール。
- [Suricata](https://suricata-ids.org/) - 無料で、マルチプラットオーツ、オンラインおよびオフライン分析モードを備え、深層パケット検査機能を備え、Luaでスクリプト可能なIDS/IPS。
- [Tsunami](https://github.com/google/tsunami-security-scanner) - 高信頼で高リスクの脆弱性を検出するための、拡張可能なプラグインシステムを備えた汎用ネットワークセキュリティスキャナー。
- [VAST](https://github.com/tenzir/vast) - データ駆動型セキュリティ調査に用いる、無料かつオープンソースのネットワークテレメトリエンジン。
- [Wireshark](https://www.wireshark.org) - ネットワークトラブルシューティングやフォレインネットフロー分析に有用な、無料かつオープンソースのパケット分析ツール。
- [Zeek](https://zeek.org/) - セキュリティモニタリングに特化した強力なネットワーク分析フレームワーク（以前はBroと呼ばれていた）。
- [netsniff-ng](http://netsniff-ng.org/) -  フリーかつ高速のGNU/Linuxネットワークツールキットで、接続トラッキングツール（`flowtop`）、トラフィック生成ツール（`trafgen`）、および自治システム（AS）のトレースルートユーティリティ（`astraceroute`）などを含む。

### Security Information and Event Management (SIEM)

- [AlienVault OSSIM](https://www.alienvault.com/open-threat-exchange/projects) - 単一サーバーのオープンソースSIEMプラットフォームで、資産発見、資産インベントリ、行動監視、イベント相関を備え、AlienVault Open Threat Exchange（OTX）によって駆動されている。
- [Prelude SIEM OSS](https://www.prelude-siem.org/) - オープンソースで、エージェントレスなSIEMで、長年の歴史と複数の商業版を備え、任意のログ入力からセキュリティイベントの収集、標準化、およびアラートを提供し、多数のポピュラーなモニタリングツールに対応。

### Service and performance monitoring

も参照ください [awesome-sysadmin#monitoring](https://github.com/n1trux/awesome-sysadmin#monitoring).

- [Icinga](https://icinga.com/) - Nagiosのモジュラリデザインで、プラグイン可能なユーザーインタフェースとデータコネクタ、コレクタ、レポートツールの拡張セットを備える。
- [Locust](https://locust.io/) - Pythonコードでユーザーベイビリングを定義し、システムに数百万の同時ユーザーをスワームできるオープンソースの負荷テストツール。
- [Nagios](https://nagios.org) - 人気のネットワークおよびサービスモニタリングソリューションおよびレポートプラットフォーム。
- [OpenNMS](https://opennms.org/) - 無料かつ機能豊かなネットワークモニタリングシステムで、複数の設定、さまざまなアラートメカニズム（メール、XMPP、SMS）、および多数のデータ収集方法（SNMP、HTTP、JDBCなど）をサポート。
- [osquery](https://github.com/facebook/osquery) - macOS、Windows、Linux向けのオペレーティングシステムインストルメンテーションフレームワークで、OSを高性能の関係データベースとして暴露し、SQLのような構文でクエリできる。
- [Zabbix](https://www.zabbix.com/) - 大規模IT環境を監視するための成熟し、企業レベルのプラットフォーム。

### Threat hunting

（また、*hunt teaming* および *threat detection* と呼ばれる。）

も参照ください [awesome-threat-detection](https://github.com/0x4D31/awesome-threat-detection).

- [CimSweep](https://github.com/PowerShellMafia/CimSweep) - すべてのWindowsバージョンにわたるリモートインシデント対応およびハンティング作業を可能にするCIM/WMIベースのツールセット。
- [DeepBlueCLI](https://github.com/sans-blue-team/DeepBlueCLI) - Windowsイベントログを介してリモートでのハンティングチームを実行するPowerShellモジュール。
- [GRR Rapid Response](https://github.com/google/grr) - リモートライブフォレインスに焦点を当てたインシデント対応フレームワークで、資産にインストールされたPythonエージェントとPythonベースのサーバーインフラ構成により、アナリストが攻撃を迅速に分類し、リモートで分析を行うことができる。
- [Hunting ELK (HELK)](https://github.com/Cyb3rWard0g/HELK) - Elasticsearch、Logstash、Kafka、Kibanaに基づくすべての機能を備えた無料ソフトウェアによる脅威ハンティングスタックで、分析用にJupyter Notebookなどを含む各種組み込み統合を提供。
- [Logging Made Easy (LME)](https://www.cisa.gov/resources-tools/services/logging-made-easy) - 無料かつオープンなログ記録および保護モニタリングソリューション。
- [MozDef](https://github.com/mozilla/MozDef) - セキュリイントラント処理プロセスを自動化し、インシデントハンドラーのリアルタイム活動を支援。
- [PSHunt](https://github.com/Infocyte/PSHunt) - リモートエンドポイントにコンパイルインジケータや、システムの状態に関するより包括的な情報を収集するためのPowerShellモジュール。
- [PSRecon](https://github.com/gfoss/PSRecon) - リモートWindowsシステムを分析するPSHuntのようなツールで、その結果を自立したHTMLレポートとして生成。
- [PowerForensics](https://github.com/Invoke-IR/PowerForensics) - リモートハードディスクフォレインス分析を行うPowerShellベースのワンストッププラットフォーム。
- [Redline](https://www.fireeye.com/services/freeware/redline.html) - FireEye, Inc.が提供するエンドポイントの監視および分析ツールで、ホストベースの調査機能を備えたフリーソフトウェア。
- [rastrea2r](https://github.com/rastrea2r/rastrea2r) - 多数のエンドポイントにわたって疑わしいIOCsを迅速に分類するマルチプラットフォームツールで、アンチウイルスコンソールと統合。

<a id="threat-intelligence"></a>
## 脅威インテリジェンス

も参照ください [awesome-threat-intelligence](https://github.com/hslatman/awesome-threat-intelligence).

- [AttackerKB](https://attackerkb.com/) - フリーかつ公開のクラウドソーシングによる脆弱性評価プラットフォームで、高リスクのパッチ適用の優先順位付けを支援し、脆弱性の疲労を防ぐ
- [DATA](https://github.com/hadojae/DATA) - 認証フィッシングの分析および自動化ツールで、疑いのあるフィッシングURLを直接受け取るか、そのURLを含む観察されたネットワークトラフィックをトリガーする
- [Forager](https://github.com/opensourcesec/Forager) - Python3で構築されたマルチスレッドによる脅威情報収集ツールで、シンプルなテキストベースの設定とデータストレージを備え、使いやすさとデータの移行性を実現
- [GRASSMARLIN](https://github.com/nsacyber/GRASSMARLIN) - 産業制御システム（ICS）および監視制御およびデータ取得（SCADA）のIPネットワークの状況認識を提供し、ICS/SCADAネットワークのトポロジーおよびエンドポイントを無作為にマッピング・カウント・報告する
- [MLSec Combine](https://github.com/mlsecproject/combine) - 複数の脅威情報フィードソースを収集・統合し、カスタマイズ可能かつ標準化されたCSVベースのフォーマットに変換
- [Malware Information Sharing Platform and Threat Sharing (MISP)](https://misp-project.org/) - サイバーセキュリティインジケーターの収集、保存、配布、共有を行うオープンソースソフトウェアソリューション
- [Open Source Vulnerabilities (OSV)](https://osv.dev/) - オープンソースプロジェクト向けの脆弱性データベースとトリージインフラストラクチャで、オープンソースのメンテナーおよび利用者に支援を提供
- [Sigma](https://github.com/Neo23x0/sigma) - SIEMシステム向けの汎用シグネチャフォーマットで、関連するログイベントを簡潔に記述できるオープンシグネチャフォーマット
- [Threat Bus](https://github.com/tenzir/threatbus) - セキュリティツールを接続するための脅威情報配信レイヤーで、分散型の発行／購読メッセージブローカーを用いる
- [ThreatIngestor](https://github.com/InQuest/ThreatIngestor) - Twitter、RSSフィード、またはその他のソースから脅威フィードからIOCsを抽出・集計する拡張可能なツール
- [Unfetter](https://nsacyber.github.io/unfetter/) - MITREのATT&CKフレームワークを活用して、セキュリティポジションにおける防衛のギャップを特定
- [Viper](https://github.com/viper-framework/viper) - バイナリ分析および管理フレームワークで、マルウェアおよびエクスプロイトサンプルの整理を容易に可能にする
- [YARA](https://github.com/VirusTotal/yara) - マルウェア研究者に（限定されないが）マルウェアサンプルの特定および分類を支援するツールで、「ファイルパターンおよびシグネチャのためのスイス軍刀」と呼ばれる

### Fingerprinting

- [HASSH](https://github.com/salesforce/hassh) - 特定のクライアントおよびサーバーSSH実装を識別するためのネットワークフィンガープリント標準
- [JA3](https://ja3er.com/) - TLS実装のフィンガープリントおよびそのTLS実装に関するコミュニケーションに必要なSSL/TLSハンドシェイク設定を抽出

### Threat signature packages and collections

- [ESET's Malware IoCs](https://github.com/eset/malware-ioc) - ESETのさまざまな調査から導かれた脅威のインジケーター（IOCs）
- [FireEye's Red Team Tool Countermeasures](https://github.com/fireeye/red_team_tool_countermeasures) - FireEyeが2020年12月にセキュリティバリアを公開した後、FireEyeの内部Red Teamツールで実行された攻撃を検出するためのSnortおよびYARAルールのコレクション
- [FireEye's Sunburst Countermeasures](https://github.com/fireeye/sunburst_countermeasures) - バックドアを含むSolarWinds Orion NMS活動および関連脆弱性を検出するための、さまざまな言語によるIOCsのコレクション
- [YARA Rules](https://github.com/Yara-Rules/rules) - ITセキュリティ研究者が異なるYaraシグネチャを統合・分類・最新化を維持できる1つのリポジトリを持つ必要性をカバーするプロジェクト

<a id="tor-onion-service-defenses"></a>
## Tor Onionサービスの防御

も参照ください [awesome-tor](https://github.com/ajvb/awesome-tor).

- [OnionBalance](https://onionbalance.readthedocs.io/) - ロードバランシングを実現し、Onionサービスの耐性と信頼性を高めるために、単一の障害点を除去する
- [Vanguards](https://github.com/mikeperry-tor/vanguards) - バージョン3のオニオンサービスガード発見攻撃対策スクリプト（最終的にはTorコアに組み込まれる予定）

<a id="transport-layer-defenses"></a>
## トランスポート層の防御

- [Certbot](https://certbot.eff.org/) - からTLS証明書の発行および更新を自動化する無料ツール。さまざまなWebおよびメールサーバーソフトウェアの設定を可能にするプラグインを備えている。 [LetsEncrypt Root CA](https://letsencrypt.org/)
- [MITMEngine](https://github.com/cloudflare/mitmengine) - サーバー側でTLSの介入イベントを検知するためのGolangライブラリ。
- [Tor](https://torproject.org/) - 規制回避および匿名化されたオーバーレイネットワーク。分散型かつ暗号的に検証された名前サービス（`.onion`ドメイン）を提供し、発行者のプライバシーとサービスの可用性を向上させる。

### Overlay and Virtual Private Networks (VPNs)

- [Firezone](https://www.firezone.dev/) - WireGuardに基づくセルフホスト型VPNサーバー。MFAおよびSSOをサポート。
- [Headscale](https://github.com/juanfont/headscale) - Tailscaleコントロールサーバーのオープンソース、セルフホスト実装。
- [IPsec VPN Server Auto Setup Scripts](https://github.com/hwdsl2/setup-ipsec-vpn) - IPsecVPNサーバーを自作するためのスクリプト。IPsec/L2TP、Cisco IPsecおよびIKEv2をサポート。
- [Innernet](https://github.com/tonarino/innernet) - WireGuardを内部に採用した、セルフホスト型の無料ソフトウェアプライベートネットワークシステム。
- [Nebula](https://github.com/slackhq/nebula) - 完全にオープンソースかつセルフホスト型。パフォーマンス、シンプルさ、セキュリティに焦点を当てたスケーラブルオーバーレイネットワーキングツール。tincにインスパイアされたもの。
- [OpenVPN](https://openvpn.net/) - 長年にわたる無料ソフトウェアによるSSL/TLSベースのVPN。
- [OpenZITI](https://openziti.github.io/) - アプリケーションにゼロトラストを導入するためのオープンソースプロジェクト。オーバーレイネットワーク、アプリケーションのトンネリング、多数のSDKを活用。
- [Tailscale](https://tailscale.com/) - WireGuardに基づくマネージドフリーミアムメッシュVPNサービス。
- [WireGuard](https://www.wireguard.com/) - 非常にシンプルでありながら、高速かつ現代的なVPN。最先端の暗号技術を活用。
- [tinc](https://tinc-vpn.org/) - 完全にユーザー空間で実装された無料ソフトウェアのメッシュVPN。拡張可能なネットワーク空間、ブリッジされたEthernetセグメントなどをサポート。

<a id="macos-based-defenses"></a>
## macOS向け防御

も参照ください [drduh/macOS-Security-and-Privacy-Guide](https://github.com/drduh/macOS-Security-and-Privacy-Guide).

- [BlockBlock](https://objective-see.com/products/blockblock.html) - 一般的な永続化場所を監視し、永続化コンポーネントが追加された場合にアラートを発行することで、マルウェアのインストールを検出・防止。
- [LuLu](https://objective-see.com/products/lulu.html) - 無料のmacOSファイアウォール。
- [Santa](https://github.com/google/santa) - macOSにおける「悪い」または「良い」バイナリを管理する、許可／拒否リストシステム。
- [Stronghold](https://github.com/alichtman/stronghold) - macOSのセキュリティ設定をターミナルから簡単に設定
- [macOS Fortress](https://github.com/essandess/macOS-Fortress) - macOSにおけるカーネルレベル、OSレベル、クライアントレベルのセキュリティ機能の自動設定。プロキシプライベート化やアンチウイルススキャンを含む。

<a id="windows-based-defenses"></a>
## Windows向け防御

も参照ください [awesome-windows#security](https://github.com/Awesome-Windows/Awesome#security) および [awesome-windows-domain-hardening](https://github.com/PaulSec/awesome-windows-domain-hardening).

- [CobaltStrikeScan](https://github.com/Apr4h/CobaltStrikeScan) - Cobalt Strikeのベイスをファイルまたはプロセスメモリにスキャンし、その設定情報をパース。
- [HardenTools](https://github.com/securitywithoutborders/hardentools) - 危険なWindows機能を無効にするユーティリティ。
- [NotRuler](https://github.com/sensepost/notruler) - Microsoft Exchangeサーバーを侵害しようとする際に、 [Ruler](https://github.com/sensepost/ruler) オペレーションツールが使用するクライアント側ルールおよびVBScriptを有効にしたフォームを検出する。
- [Sandboxie](https://www.sandboxie.com/) - 無料でオープンソースの一般的なWindowsアプリケーションのサンドボックスユーティリティ。
- [Sigcheck](https://docs.microsoft.com/en-us/sysinternals/downloads/sigcheck) - Windowsホストのルート証明書ストアを、マイクロソフトの [Certificate Trust List (CTL)](https://docs.microsoft.com/en-us/windows/desktop/SecCrypto/certificate-trust-list-overview) と比較して監査する。
- [Sticky Keys Slayer](https://github.com/linuz/Sticky-Keys-Slayer) - ホスト名の一覧からWindows RDPセッションを確立し、アクセスツールのバックドアをスキャンし、発見された場合にアラートを発行する。
- [Windows Secure Host Baseline](https://github.com/nsacyber/Windows-Secure-Host-Baseline) - Windows 10の最新リリースを安全に展開および維持するために、自動化され、柔軟なアプローチを提供するグループポリシー対象、適合性チェック、設定ツール。
- [WMI Monitor](https://github.com/realparisi/WMI_Monitor) - 新たに作成されたWMI消費者およびプロセスを、Windowsアプリケーションイベントログに記録する。

### Active Directory

- [Active Directory Control Paths](https://github.com/ANSSI-FR/AD-control-paths) - Active Directoryの権限設定（「コントロール関係」）を可視化・グラフ化し、「CEOのメールを誰が読めるか？」といった監査質問を検討する。
- [PingCastle](https://www.pingcastle.com/) - Active Directoryの脆弱性検出および報告ツール。
- [PlumHound](https://github.com/PlumHound/PlumHound) - BloodHoundADのパスファインディングエンジンを活用することで、継続的なセキュリティライフサイクルにおいて、Active Directoryのセキュリティ脆弱性をより効果的に特定する。

<a id="license"></a>
## ライセンス

[![CC-BY](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg)](https://creativecommons.org/licenses/by/4.0/)

この作品は、[Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/)のライセンスで許可されています。
