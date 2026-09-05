---
title: "Awesome Docker"
description: "Dockerを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-veggiemonk-awesome-docker-readme-md"
---

# Awesome Docker

Dockerを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

# 目次



- [Projects](#projects)
    - [Engine \& Runtime](#engine--runtime)
    - [Building Images](#building-images)
        - [Builder](#builder)
        - [Base Images](#base-images)
        - [Dockerfile](#dockerfile)
        - [Linter](#linter)
    - [Image Lifecycle](#image-lifecycle)
        - [Registry](#registry)
        - [Registry CLI](#registry-cli)
        - [Image Scanning \& SBOM](#image-scanning--sbom)
        - [Supply Chain](#supply-chain)
    - [Running Containers](#running-containers)
        - [Composition](#composition)
        - [Orchestration](#orchestration)
        - [Deployment \& Platforms](#deployment--platforms)
        - [Garbage Collection](#garbage-collection)
    - [Networking \& Proxies](#networking--proxies)
        - [Networking](#networking)
        - [Reverse Proxy](#reverse-proxy)
    - [Storage \& Data](#storage--data)
    - [Observability](#observability)
    - [Security](#security)
    - [User Interfaces](#user-interfaces)
        - [Desktop](#desktop)
        - [Terminal](#terminal)
        - [Web](#web)
        - [IDE Integrations](#ide-integrations)
    - [Developer Workflow](#developer-workflow)
        - [API Client](#api-client)
        - [CI/CD](#cicd)
        - [Development Environment](#development-environment)
        - [Serverless](#serverless)
        - [Testing](#testing)
        - [Wrappers](#wrappers)
    - [In-Container Tooling](#in-container-tooling)
- [Learning Resources](#learning-resources)
    - [Where to Start](#where-to-start)
    - [Where to Start (Windows)](#where-to-start-windows)
    - [Books \& Tutorials](#books--tutorials)
    - [Awesome Lists](#awesome-lists)
    - [Demos and Examples](#demos-and-examples)
    - [Good Tips](#good-tips)
    - [Raspberry Pi \& ARM](#raspberry-pi--arm)
    - [Security Articles](#security-articles)
    - [Videos](#videos)
    - [Communities and Meetups](#communities-and-meetups)
        - [Brazilian](#brazilian)
        - [English](#english)
        - [Russian](#russian)
        - [Spanish](#spanish)
- [Stargazers over time](#stargazers-over-time)



<a id="projects"></a>
# プロジェクト

<a id="official-projects"></a>
## 公式プロジェクト

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - Dockerでマルチコンテナアプリケーションを定義し、実行する.
- [Docker Registry][distribution] - The Docker toolset to pack, ship, store, and deliver content

<a id="engine--runtime"></a>
## エンジンとランタイム

- [colima](https://github.com/abiosoft/colima) - macOS（およびLinux）向けのコンテナランタイム（最小設定で導入）
- [containerd](https://github.com/containerd/containerd) - オープンで信頼性の高いコンテナランタイム.
- [cri-o](https://github.com/cri-o/cri-o) - オープンコンテナイニシアティブに基づくKubernetesコンテナランタイムインターフェースの実装.
- [gVisor](https://github.com/google/gvisor) - コンテナ用アプリケーションカーネル.
- [lxc](https://github.com/lxc/lxc) - LXC - Linuxコンテナ.
- [Mocker](https://github.com/us/mocker) - Appleのコンテナ化フレームワークに基づくmacOS用Docker対応コンテナCLI
- [podman](https://github.com/containers/libpod) - Libpodはコンテナポッドを作成するためのライブラリ。Podmanの本家サイト。
- [runc](https://github.com/opencontainers/runc) - OCI仕様に従ってコンテナをスパウニングおよび実行するCLIツール.
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - OCIランタイム仕様との作業を行うためのツールのコレクション.
- [youki](https://github.com/youki-dev/youki) - Rustで書かれたコンテナランタイムで、OCIランタイム仕様を実装している.

<a id="building-images"></a>
## イメージの構築

<a id="builder"></a>
### ビルダー

**新しい**画像の作成を支援または簡略化するためのアプリケーション

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - `ansible`およびを活用するツール. `buildah`
- [apko](https://github.com/chainguard-dev/apko) - apkパッケージから作成される、宣言型のOCIイメージビルダー；再現性を設計上確保。
- [buildah](https://github.com/containers/buildah) - OCIイメージの作成を支援するツール。
- [BuildKit](https://github.com/moby/buildkit) - 並列処理、キャッシュ効率が高く、Dockerfileに依存しないビルダーツールキット。
- [buildx](https://github.com/docker/buildx) - BuildKitをバックエンドとして、マルチプラットフォームビルドをサポートする公式Docker CLIプラグイン。
- [cekit](https://github.com/cekit/cekit) - OpenShiftが異なるビルドエンジンを使用してベースイメージを構築するために使用するツール。
- [dlayer](https://github.com/orisano/dlayer) - Dockerイメージの層を分析するツール。
- [docker-companion](https://github.com/mudler/docker-companion) - Golangで書かれたコマンドラインツールで、Dockerイメージをスクラップおよび展開する。
- [docker-repack](https://github.com/orf/docker-repack) - Dockerイメージをより小さい、効率的なバージョンに再パッケージし、取得速度を著しく高速化。
- [DockerSlim](https://github.com/docker-slim/docker-slim) 肥満したDockerイメージを縮小し、最も小さなイメージを作成する。
- [earthly](https://github.com/earthly/earthly) - DockerfileとMakefileの構文を組み合わせたコンテナ化されたビルド自動化ツール。
- [essex](https://github.com/utensils/essex) - Dockerベースのプロジェクト向けのテンプレート：Essexはbashで書かれたCLIツールで、Makefileを駆動するワークフローを用いて、迅速にクリーンで一貫したDockerプロジェクトを構築できます。
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - Pythonの高レベルレシピからDockerfileを生成し、高性能コンピューティングコンポーネントの構成要素を含むようにします。
- [img](https://github.com/genuinetools/img) - スタンドアローン型であり、デーモンなし、権限なしのDockerfileおよびOCI互換のコンテナイメージビルダー
- [ko](https://github.com/ko-build/ko) - DockerfileなしでGoアプリケーションのビルドとデプロイをコンテナイメージとして行います。
- [nix2container](https://github.com/nlewo/nix2container) - NixでOCIイメージをビルドする際に、`docker load`のループを回避します。
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Hashicorpのツールでマシンイメージを構築し、chef、puppet、ansibleなどの構成管理ツールと統合されたDockerイメージを提供します。
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen:はPythonアプリケーション向けにプロダクション対応のDockerイメージを生成するためのテンプレートです。
- [RAUDI](https://github.com/cybersecsi/RAUDI) - 3rd partyソフトウェアの新しいリリース／アップデート／コミットがあるたびに、Dockerイメージを自動的に更新（およびオプションでDocker Hubにプッシュ）するツールです。
- [runlike](https://github.com/lavie/runlike) - 実行中のコンテナから、コマンドとオプションを生成します。 `docker run`
- [Whaler](https://github.com/P3GLEG/Whaler) - DockerイメージをDockerfileに逆転するためのプログラムです。


<a id="base-images"></a>
### ベースイメージ

最小限の構成、強化された、または用途に特化したコンテナベースイメージ

- [Chainguard Images](https://github.com/chainguard-images/images) - Wolfi上で構築された、最小限の署名済みSBOM認証済みコンテナイメージです。
- [distroless](https://github.com/GoogleContainerTools/distroless) - OSを除いた言語に特化したDockerイメージです。
- [melange](https://github.com/chainguard-dev/melange) - 宣言的なYAMLからapkパッケージをビルドし、apkoと使用可能にします。
- [pglayers](https://github.com/pglayers/pglayers) - 事前に準備されたPostgreSQL拡張機能を組み立て可能なDockerレイヤーとして提供。50以上の拡張機能、使用可能な組み合わせイメージ（フル、Azure対応）。
- [Wolfi](https://github.com/wolfi-dev/os) - コンテナ向けに設計されたUndistro Linux。glibcベースで、署名済み、毎日SBOMを提供。


<a id="dockerfile"></a>
### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) `dfg`は、さまざまな入力チャンネルを使用して有効なDockerfileを生成するGoライブラリおよび実行可能ファイルです。
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - ユニバーサルで効率的で軽量なDockerレシピを集約するリポジトリ。イメージはTravisのcronジョブにより毎日更新、テスト、公開されます。
- [Dofigen](https://github.com/lenra-io/dofigen) - YAMLまたはJSON形式の簡易な説明を使用してDockerfileを生成するツールです。
- [Trsuted Builds](https://dockerfile.github.io/) - 信頼できる自動Dockerビルド。Dockerfileプロジェクトは、さまざまな有名なオープンソースソフトウェアサービスのDockerfileを中央リポジトリとして維持しています。

<a id="linter"></a>
### リンター

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - 60以上のルール、品質スコア、セキュリティチェックを備えた軽量なDockerfileリーダー。
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - Dockerイメージのサイズを監視するためのツールです。
- [Hadolint](https://github.com/hadolint/hadolint) - Dockerfileのリントツールで、ベストプラクティスや一般的な誤りをチェックし、かつ`RUN`のインストラクションに書かれた任意のbashもリントできる。

<a id="image-lifecycle"></a>
## イメージのライフサイクル

<a id="registry"></a>
### レジストリ

Dockerイメージを安全に保管するためのサービス

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: Amazon Elastic Container Registry (ECR) は、開発者がDockerコンテナイメージを保存・管理・デプロイできる完全に管理されたDockerコンテナリジストリである。
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: DockerのプライベートリジストリをAzureの第一クラスリソースとして管理できる。
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: 全ての公開およびプライベートDockerリジストリ（他にもHelmチャートを含むKubernetesエコシステムなど）を第一クラスにサポートする、完全に管理されたパッケージ管理SaaS。無料プランが豊富で、オープンソースには完全無料である。
- [Container Registry Service](https://container-registry.com/) - :yen: チームや組織向けのハーバーベースのコンテナ管理ソリューションとしてのサービス。無料プランはプライベートリポジトリ用に1GBのストレージを提供。
- [Cycle.io](https://cycle.io/) - :yen: バレーメタルベースのコンテナホスティング。
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: DigitalOceanのコンテナリジストリ。
- [Docker Hub](https://hub.docker.com/) Docker Inc.が提供する。
- [Docker Registry v2][distribution] - The Docker toolset to pack, ship, store, and deliver content
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - p2p技術に基づいた効率的で安定かつ安全なファイル配布およびイメージアクセラレーションを提供。
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: Google Cloud Platform上での高速かつプライベートなDockerイメージストレージ。
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - Giteaに統合されたDockerリジストリ、プライベートかつ小規模なイメージホスティングに最適。
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - GitHubが提供するDockerイメージの保存と管理ソリューションで、GitHub Actionsとの密接な統合を実現。
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - イメージをGitLab CIで使用するためのリジストリに特化。
- [Granite Registry](https://granite.so/products/docker-registry) - :yen: プライベートDockerイメージを、それらを引き込むワークロードと共に保管し、スコープ別に読み取り専用および読み取り・書き込み可能なキーを提供。
- [Harbor](https://github.com/goharbor/harbor) オープンソースの信頼できるクラウドネイティブリジストリプロジェクトで、コンテンツの保存・署名・スキャンを実施。複製、ユーザー管理、アクセス制御、活動ログの監視をサポート。
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: アーティファクトリポジトリマネージャーであり、プライベートDockerリジストリとしても利用可能。
- [kontain.me](https://github.com/imjasonh/kontain.me) - 必要に応じてコンテナイメージリジストリで、イメージが引き出された際に構築・提供を行う。
- [Kraken](https://github.com/uber/kraken) - Uberの高度にスケーラブルなP2P Dockerリジストリで、数TBのデータを数秒で配布できる。
- [NORA](https://github.com/getnora-io/nora) - Docker、Maven、npm、Cargo、PyPIを含む複数プロトコルをサポートする軽量アーティファクトリジストリ。32MBのバイナリで実行可能。プルスルーキャッシュ、Web UI、Prometheusメトリクス、RBAC認証を提供。
- [nscr](https://github.com/jhstatewide/nscr) - 軽量で自立したコンテナリジストリで、簡単に実行・維持できる。
- [Quay.io](https://quay.io/) - :yen: プライベート Docker リポジトリの安全なホスティング。
- [Registryo](https://github.com/inmagik/registryo) - オンプレミス Docker リジストリ向けのUIおよびトークンベースの認証サーバー。
- [RepoFlow](https://www.repoflow.io) - Dockerを含むPyPI、Maven、npm、Helmなどの他のフォーマットをサポートするシンプルで使いやすいパッケージ管理プラットフォーム。スマート検索、組み込みのDockerイメージスキャン、そして自前ホスティングおよびクラウド利用向けの優れた無料オプションを提供。
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - ソフトウェアサプライチェーン全体におけるバイナリとビルドアーテファクトの管理。

<a id="registry-cli"></a>
### レジストリCLI

OCI/Dockerレジストリ内のイメージを検査・コピー・操作するためのデーモンなしコマンドラインツール

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - 軽量なCLIでリジストリイメージを操作する、`go-containerregistry`。
- [go-containerregistry](https://github.com/google/go-containerregistry) - コンテナリジストリとの対話に必要なGoライブラリおよびCLIツール（`crane`、`gcrane`、`registry`）。
- [oras](https://github.com/oras-project/oras) - 任意のOCIリジストリにOCIアーテファクトをプッシュおよびプルできる。
- [regctl](https://github.com/regclient/regclient) - デーモンなしのリジストリクライアント：OCIイメージのコピー、確認、変更、署名を行う。
- [skopeo](https://github.com/containers/skopeo) - リモートイメージリジストリとの対話：情報の取得、イメージのコピー、コンテンツの署名を行う。

<a id="image-scanning--sbom"></a>
### イメージスキャンとSBOM

画像の脆弱性スキャナー、SBOM生成ツール、ディジェストピンニングツール。商業的な製品は `:yen:` と記載。

- [Anchor](https://github.com/SongStitch/anchor/) - Dockerfile内の依存関係をピン留めることで、再現可能なビルドを確保するツール。
- [Anchor Enterprise](https://anchore.com/) - :yen: イメージにCVE脆弱性やカスタムセキュリティポリシーに対して分析を行う。
- [BomLens](https://github.com/sktelecom/bomlens) - コンテナイメージ（およびソースコード、バイナリ、ファームウェア）をCycloneDX SBOMにスキャンし、脆弱性、ライセンス、通知報告を提供。単一のDockerイメージとして配布され、Web UIを備える。
- [Clair](https://github.com/quay/clair) - ClairはアプリケーションおよびDockerコンテナ内の脆弱性の静的解析を行うオープンソースプロジェクト。
- [Docker Scout](https://github.com/docker/scout-cli) - Dockerの公式CLIでSBOM生成、脆弱性分析、ポリシー評価を行う。
- [Grype](https://github.com/anchore/grype) - コンテナイメージ、ファイルシステム、SBOMに対する脆弱性スキャンツール。
- [oscap-docker](https://github.com/OpenSCAP/openscap) - OpenSCAPはoscap-dockerツールを提供し、Dockerコンテナおよびイメージのスキャンに使用される。
- [pindock](https://github.com/deadnews/pindock) - Dockerfileおよびコンポジットファイル内のDockerイメージのハッシュをピン留めおよび更新する。
- [Syft](https://github.com/anchore/syft) - コンテナイメージおよびファイルシステムからソフトウェアバーチャルマテリアル（SBOM）を生成するCLIツールおよびライブラリ。
- [Trivy](https://github.com/aquasecurity/trivy) - Aqua Securityのオープンソースでシンプルかつ包括的なコンテナ脆弱性スキャナー（CIに適している）。

<a id="supply-chain"></a>
### サプライチェーン

コンテナイメージへの署名、認証、プロVENANCE。

- [cosign](https://github.com/sigstore/cosign) - OCIアーテファクトに対するコンテナ署名、検証、透明性ログ。
- [in-toto](https://github.com/in-toto/in-toto) - サプライチェーンアタステーションのフレームワーク；SLSAおよびプロヴァインスのコシングを支える
- [policy-controller](https://github.com/sigstore/policy-controller) - Kubernetesのアドミッションコントローラーがコンテナイメージにコシング署名を強制する
- [witness](https://github.com/in-toto/witness) - ビルドパイプラインにおけるイン・トゥ・アタステーションの生成と検証

<a id="running-containers"></a>
## コンテナの実行

<a id="composition"></a>
### 構成管理

- [Composerize](https://github.com/magicmark/composerize) - docker runコマンドをdocker-composeファイルに変換
- [ctk](https://github.com/ctk-hq/ctk) - コンテナベースのワークロード向けのビジュアルコンポーザ
- [kompose](https://github.com/kubernetes/kompose) - Docker ComposeからKubernetesへ変換
- [plash](https://github.com/ihucos/plash) - コンテナの実行とビルドエンジン—Docker内に実行される
- [podman-compose](https://github.com/containers/podman-compose) - podmanでdocker-compose.ymlを実行するスクリプト
- [Smalte](https://github.com/roquie/smalte) – Dockerコンテナ内で静的設定が必要なアプリケーションを動的に構成

<a id="orchestration"></a>
### オーケストレーション

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - CloudSlangはDockerプロセス自動化用のワークフローエンジン
- [docker rollout](https://github.com/Wowu/docker-rollout) - Docker Composeサービスのゼロダウンタイムデプロイメント
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Googleが提供するオープンソースなDockerコンテナのオーケストレーションシステム
- [Mesos](https://github.com/apache/mesos) - コンテナ・VM・物理ホストのリソース／ジョブスケジューラ
- [Nebula](https://github.com/nebula-orchestrator) - 大規模分散クラスタを管理するためのDockerオーケストレーションツール
- [Nomad](https://github.com/hashicorp/nomad) - 任意のスケールでアプリケーションを簡単にデプロイ可能。分散型・高可用性・データセンターアwareなスケジューラ
- [Rancher](https://github.com/rancher/rancher) - 生産環境でのDocker運用を完全にサポートするオープンソースプロジェクト
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - Swarm上で時間ベースのスケジュールでジョブを作成

<a id="deployment--platforms"></a>
### デプロイとプラットフォーム

自前で運用可能なクラウドプラットフォーム（PaaS/CaaS、デプロイ自動化）。商業的な製品は `:yen:` と記載。

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: EC2上のマネジメントサービスでDockerコンテナをサポート
- [Appfleet](https://appfleet.com/) - :yen: グローバルにコンテナサービスをデプロイ・マネジメントするエッジプラットフォーム；低遅延のためにトラフィックを最も近い場所にルーティング
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: 完全に管理されたKubernetesコンテナオーケストレーションサービス
- [blackfish](https://gitlab.com/blackfish/blackfish) - CoreOSをベースにしたVMで、開発および生産環境向けにSwarmクラスタを構築します
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD、ボートスワインデーモン — ディナミックに変化するコンテナ環境向けの動的設定ファイル作成ツールおよびサービスリロードツール
- [caprover](https://github.com/caprover/caprover) - [以前はCaptainDuckDuckと呼ばれていた] 自動スケーラブルWebサーバーパッケージ（自動Docker＋nginx）— Herokuを凌駕するサービス
- [Cloud 66](https://www.cloud66.com) - :yen: フルスタックホストされたコンテナ管理サービス
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: Google Cloud Runという管理サービスに、直接 `docker-compose.yaml` ファイルをデプロイします
- [Convox Rack](https://github.com/convox/rack) - Convox Rackは、専門的なインフラ自動化とDevOpsのベストプラクティスに基づいたオープンソースPaaSです
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - AWS、Render.comおよびDigitalOcean向けに、Dockerのrunおよびcommitをインフラとしてコードに変換します
- [doco-cd](https://github.com/kimdre/doco-cd) - 軽量なGitOpsおよび継続的デプロイツールで、ポーリングおよびウェブホークを用いてDocker ComposeプロジェクトおよびSwarmスタックをデプロイします
- [Dokku](https://github.com/dokku/dokku) - Dockerを活用したミニHerokuで、アプリケーションの開発およびライフサイクルの管理を支援します
- [Exoframe](https://github.com/exoframejs/exoframe) - Dockerを用いたシンプルなワンコマンドデプロイを可能にする、自前ホストツールです
- [Giant Swarm](https://www.giantswarm.io/) - :yen: シンプルなマイクロサービスインフラ。コンテナを数秒でデプロイできます
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: Google Cloud Computing上で[Kubernetes][kubernetes]を活用したDockerコンテナ
- [Grafeas](https://github.com/grafeas/grafeas) - コンテナに関するメタデータ（イメージやビルド詳細、セキュリティ脆弱性など）の共通API
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: Apache Mesosをベースにしたデータとコンテナを統合したプラットフォーム
- [OpenRun](https://github.com/openrundev/openrun) - DockerまたはKubernetesを使って、ウェブアプリのビルド、デプロイ、プロキシ、認証、自動停止を実行します
- [OpenShift][openshift] - An open source PaaS built on [Kubernetes][kubernetes] and optimized for Dockerized app development and deployment by [Red Hat](https://www.redhat.com/en)
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: Amazon Web ServicesおよびGoogle Cloud上で提供される完全に管理されたRed Hat® OpenShift®サービス
- [swarm-ansible](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Swarm-Ansibleは、Ansibleを用いて生産環境に適したSwarmクラスタを起動します。CIの自動化、監視、TraefikのSSL証明書およびシンプル認証の事前設定を提供し、プライベートレジストリなども備えています
- [SwarmManagement](https://github.com/hansehe/SwarmManagement) - Swarm ManagementはpipでインストールされるPythonアプリケーションで、Docker Swarmの管理を簡単に行うために、デプロイするスタックやネットワーク、設定、シークレットを記述する1つのYAMLファイルの設定を用います
- [Triton](https://www.joyent.com/) - :yen: 弾性的なコンテナネイティブインフラ
- [Tsuru](https://github.com/tsuru/tsuru) - Tsuruは拡張性があり、オープンソースのプラットフォームとしてのソフトウェアです
- [werf](https://github.com/werf/werf) - ウェルフは、Dockerイメージを効率的に構築し、GitOpsを用いてKubernetesにデプロイするためのCI/CDツールである。

<a id="garbage-collection"></a>
### ガベージコレクション

- [docker-custodian](https://github.com/Yelp/docker-custodian) - Dockerホストを整備し、清潔に保つ。
- [Docuum](https://github.com/stepchowfun/docuum) - Dockerイメージの「最も最近使われていない（LRU）」による削除。

<a id="networking--proxies"></a>
## ネットワークとプロキシ

<a id="networking"></a>
### ネットワーク

コンテナネットワーキング、オーバーレイネットワーク、DNS／サービス発見ブリッジ。

- [Calico][calico] - Calico is a pure layer 3 virtual network that allows containers over multiple docker-hosts to talk to each other.
- [docker-dns](https://github.com/bytesharky/docker-dns) - Dockerコンテナ向けの軽量DNSフォワーダー。ホスト上で、カスタムサフィックス（例：）付きのコンテナ名を解決し、サービス発見を簡素化。 `.docker`
- [Flannel](https://github.com/coreos/flannel/) - フラネルは、各ホストにサブネットを割り当てる仮想ネットワークであり、コンテナランタイムとの利用を可能にする。
- [netshoot](https://github.com/nicolaka/netshoot) - netshootコンテナは、Dockerネットワークの問題をトラブルシューティングするために、強力なネットワークツールを備えている。
- [Pipework](https://github.com/jpetazzo/pipework) - Linuxコンテナ向けのソフトウェア定義ネットワーク。Pipeworkは「シンプル」なLXCコンテナと、素晴らしいDockerと両方に対応。
- [registrator](https://github.com/gliderlabs/registrator) - Docker向けのサービス登録ブリッジ。

<a id="reverse-proxy"></a>
### リバースプロキシ

コンテナを意識したリバースプロキシ、イングレス、TLS終端フロントエンド（自動発見機能付き）

- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - オープンソースかつ次世代のウェブアプリケーションファイアウォール（WAF）。
- [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) - Caddyベースのリバースプロキシ。サービスまたはコンテナラベルで構成。
- [caddy-docker-upstreams](https://github.com/invzhi/caddy-docker-upstreams) - CaddyのDockerアップストリームモジュール。コンテナラベルで構成。
- [Docker Dnsmasq Updater](https://github.com/moonbuggy/docker-dnsmasq-updater) - Dockerコンテナホスト名を、リモートのdnsmasqサーバーに更新。
- [docker-flow-proxy](https://github.com/docker-flow/docker-flow-proxy) - 新しいサービスがデプロイされたか、またはサービスがスケーリングされたときに、プロキシを再構成。
- [Let's Encrypt Nginx-proxy Companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - nginx-proxyの軽量補助コンテナ。Let's Encrypt証明書の自動作成／再新を可能にする。
- [mesh-router](https://github.com/Yundera/mesh-router) - Dockerコンテナ向けの無料ドメイン（nsl.sh）プロバイダー。自動HTTPSルーティングを提供。Wireguard VPNを使用して、ネットワーク間でのサブドメインリクエストを安全にルーティング。自己ホストNASやクラウドデプロイに最適。
- [Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) - SSLを用いたウェブサービスのプロキシに美しいウェブインターフェースを提供。
- [nginx-proxy][nginxproxy] - Automated nginx proxy for Docker containers using docker-gen.
- [OpenResty Manager](https://github.com/Safe3/openresty-manager) - 最も使いやすく、強力で美しいOpenRestyマネージャー（Nginxの拡張版）。OpenResty Edgeのオープンソース代替。
- [Swarm Router](https://github.com/flavioaiello/swarm-router) - Dockerスワームモード向けのゼロ設定のサービス名ベースルーター。新しく、より安全なアプローチを採用。
- [Træfɪk](https://github.com/containous/traefik) - Docker、Mesos、Consul、Etcd向けの自動リバースプロキシおよびロードバランサー。

<a id="storage--data"></a>
## ストレージとデータ

- [Docker Volume Backup](https://github.com/offen/docker-volume-backup) Dockerボリュームをローカルに、またはS3互換ストレージにバックアップ。
- [Label Backup](https://github.com/resulgg/label-backup) - 軽量でDockerに対応したバックアップエージェント。Dockerのラベルに基づき、コンテナ化されたデータベース（PostgreSQL、MySQL、MongoDB、Redis）を自動的に検出・バックアップ。ローカルストレージおよびS3互換のストレージをサポートし、cron表現による柔軟なスケジューリングを提供。
- [Netshare](https://github.com/ContainX/docker-volume-netshare) Docker NFS、AWS EFS、CephおよびSamba/CIFSのボリュームプラグイン。
- [portworx](https://portworx.com) - :yen: パーティショニングされた、共有かつ複製可能なボリュームを目的とした分散ストレージソリューション。
- [quobyte](https://www.quobyte.com/) - :yen: Dockerボリュームドライバーを備えた、完全な障害耐性を備えた分散ファイルシステム。
- [resq](https://github.com/mashb1t/resq) - Resticを活用したDockerのボリューム、データベース、.envファイルへのバックアップ。コンテナを停止せずに実行可能。ローカル、SSH、またはS3互換ストレージに対応。
- [REX-Ray](https://github.com/rexray/rexray) ベンダーに依存しないストレージオーケストレーションエンジンを提供。主な設計目標は、Docker、Kubernetes、Mesos向けに持続可能なストレージを提供すること。

<a id="observability"></a>
## オブザーバビリティ

Dockerホスト、コンテナ、それらに実行されているサービスを監視。セルフホストとSaaSの組み合わせ；商業製品は `:yen:` で表記

- [ADRG](https://github.com/jaldertech/adrg) - cgroups v2を用いた動的Dockerリソース管理により、システム負荷を管理。
- [AppDynamics](https://github.com/Appdynamics/docker-monitoring-extension) - :yen: DockerリモートAPIからのメトリクスをUnixソケットまたはTCPで取得するDockerモニタリング拡張。
- [Autoheal](https://github.com/willfarrell/docker-autoheal) - 不健康なDockerコンテナを自動的にモニタリング・リスタート。
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: コンテナ化アプリケーション向けのDocker対応の観測スタックで、ログの集約と稼働状態モニタリングを提供。
- [cAdvisor](https://github.com/google/cadvisor) - 実行中のコンテナのリソース使用量とパフォーマンス特性を分析
- [Datadog](https://www.datadoghq.com/) - :yen: Docker、Kubernetes、Mesosを第一にサポートするフルスタックモニタリングサービス。
- [DLIA](https://github.com/zorak1103/dlia) - DLIAはAIを活用したDockerログモニタリングエージェントであり、大規模言語モデル（LLMs）を用いてコンテナログを知的に分析し、異常を検出、かつ時間軸上で文脈を含む洞察を提供。
- [docker-exporter](https://github.com/dlepaux/docker-exporter) - Rustで書かれた軽量Prometheusエクスポータ。ARM64（Raspberry Pi 5）でのcgroup v2メモリワークセットの正しく動作し、非rootで実行され、読み取り専用ソケットを使用し、空きメモリ約7MiB。
- [Docker-Sentinel](https://github.com/Will-Luck/Docker-Sentinel) - コンテナごとのポリシーに基づく自動更新、ロールバックの安全性、リアルタイムWebダッシュボードを提供。
- [DockProbe](https://github.com/deep-on/dockprobe) - 軽量なDockerモニタリングダッシュボード（1コンテナで実行）。リアルタイムメトリクス、6つの異常検知ルール、Telegramアラート、16の自動セキュリティスキャン。設定不要、約50MBのRAM。
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - プロセスレベルでのコンテナのI/Oモニタリング。
- [dockprom](https://github.com/stefanprodan/dockprom) - Prometheus、Grafana、cAdvisor、NodeExporterおよびAlertManagerを用いたDockerホストおよびコンテナのモニタリング。
- [Doku](https://github.com/amerkurev/doku) - Dokuは、Dockerのディスク使用量をモニタリングできるシンプルなウェブベースアプリケーション。
- [Dozzle](https://github.com/veggiemonk/awesome-docker/blob/1a39b59def0832471d79c2d2555d66481647bbaf/dozzle) - ブラウザまたはモバイルデバイスでリアルタイムでコンテナログをモニタリング。
- [Drydock](https://github.com/CodesWhat/drydock) - ウェブダッシュボードによるコンテナ更新モニタリング、23のレジストリプロバイダー、20の通知トリガー、分散型エージェントアーキテクチャ。
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: アジェンタのインストールや実行コマンドの変更なしでコンテナ化されたアプリケーションを監視
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - Docker、GrafanaおよびPrometheusスタック向けのテンプレート
- [InfraCanvas](https://github.com/bytestrix/InfraCanvas) - 任意のLinuxサーバー上のコンテナ、ポッド、ボリューム、ネットワークのリアルタイム可視化マップ。シングルバイナリ、ウェブソケットによるリアルタイム更新。
- [Maintenant](https://github.com/kolapsis/maintenant) - DockerおよびKubernetes向けの自動発見型インフラ監視。ラベルを用いてコンテナを自動検出し、エンドポイント監視、ハートビート、TLS証明書、リソースメトリクス、更新情報、および内蔵ステータスページを提供。シングルバイナリにSPAが内蔵。
- [Middleware](https://middleware.io/) - :yen: Dockerホスト、コンテナ、ログ、アプリケーションパフォーマンスを統合された可視化プラットフォームから監視
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: DevOpsおよびIT向けのDocker監視、SaaSのパーソナルホストモデル
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: システムコールを用いてコンテナの監視・アラート・トラブルシューティングを行うソフトウェアまたはSaaSサービス。DockerおよびKubernetes向けのコンテナ固有機能を備える。
- [Wiremap](https://github.com/codeofmario/wiremap) - マウントされたディスクイメージからDockerおよびcontainerdのコンテナ詳細を探索できる、自前ホスト型の可視化Dockerネットワークトポロジー探索ツール。リアルタイムログストリーミング、リアルタイム統計、内蔵ターミナル、コンテナ検証を提供。

<a id="security"></a>
## セキュリティ

コンテナの強化、ランタイムセキュリティ、ポリシー、コンプライアンス、フォレンジクス。セルフホストと商業製品の組み合わせ；商業製品は `:yen:` で表記

- [Aqua Security](https://www.aquasec.com) - :yen: どのプラットフォームでも開発からプロダクションまで、コンテナベースアプリケーションのセキュリティを確保
- [buildcage](https://github.com/dash14/buildcage) - Dockerビルド中に送出ネットワークアクセスを制限し、サプライチェーン攻撃を防止。Docker BuildxのドロップインBuildKitリモートドライバーとして動作し、GitHub Actionsで即時使用可能。
- [CetusGuard](https://github.com/hectorm/cetusguard) - CetusGuardはDockerデーモンソケットを保護するために、そのAPIエンドポイントへの呼び出しをフィルタリングするツール。
- [Checkov](https://github.com/bridgecrewio/checkov) - インフラアセンブリとしてのマニフェスト（Terraform、Kubernetes、Cloudformation、Helm、Dockerfile、Kustomize）に対する静的解析により、セキュリティミス設定を検出し、修正。
- [compose-lint](https://github.com/tmatens/compose-lint) - Docker Composeファイルに対してセキュリティミス設定をlint。プライベートコンテナ、未ピン留め画像、Dockerソケットマウント、明文認証情報 — OWASPおよびCIS Dockerベンチマークに基づく。
- [container-explorer](https://github.com/google/container-explorer) - マウントされたディスクイメージからDockerおよびcontainerdのコンテナ詳細を探索できるフォレインツール。
- [Deepfence Threat Mapper](https://github.com/deepfence/ThreatMapper) - Kubernetes、仮想マシン、サーバレス環境向けの強力なランタイム脆弱性スキャナー。
- [Den](https://github.com/us/den) - AIエージェント向けの自前ホスト型サンドボックスランタイム。セキュリティ強化、REST APIおよびウェブソケットサポート。
- [docker-bench-security](https://github.com/docker/docker-bench-security) - 数十のプロダクション環境におけるDockerコンテナデプロイメントに関するベストプラクティスをチェックするスクリプト。
- [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) - Docker APIソケットに細かくフィルタをかけるHAProxyベースのフィルタ。逆プロキシやホームラボスタックに制限されたソケットを公開するために広く使用されている。
- [KICS](https://github.com/checkmarx/kics) - インフラアセンブリのスキャンツール。開発サイクルの初期段階でセキュリティ脆弱性、コンプライアンス問題、インフラミス設定を検出し、拡張可能。
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen: （以前はTwistlock Security Suite）アプリケーションライフサイクル全体で脆弱性を検出し、コンテナイメージを強化し、セキュリティポリシーを強制。
- [segspec](https://github.com/dormstern/segspec) - Docker Compose、Kubernetesのマニフェスト、Helmチャート、その他設定ファイルからネットワーク依存関係を抽出し、Kubernetesのネットワークポリシーを生成する。エビデンストレースを含む。
- [Sysdig Falco](https://github.com/falcosecurity/falco) - Sysdig Falcoはオープンソースのコンテナセキュリティモニタリングツールであり、アプリケーション、コンテナ、ホスト、ネットワークの活動を監視し、不正な活動に対してアラートを発行できる。
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: Sysdig Secureは、行動監視と防御を通じて実行時セキュリティを提供し、オープンソースのSysdigに基づく深層フォレインスをインシデント対応に提供する。
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: Trend Micro DeepSecurityは、コンテナワークロードおよびホストに対する実行時保護を提供し、イメージの事前スキャンにより脆弱性、マルウェアおよびハードコードされたシークレットなどのコンテンツを特定できる。

<a id="user-interfaces"></a>
## ユーザーインターフェース

<a id="desktop"></a>
### デスクトップ

Dockerホストおよびクラスタの管理・監視を目的としたネイティブデスクトップアプリケーション

- [Docker DB Manager](https://github.com/AbianS/docker-db-manager) - Dockerデータベースコンテナを管理するデスクトップアプリ。視覚インターフェースとワンクリック操作を備える。
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - 公式のネイティブアプリ。WindowsおよびMacOSのみ対応。
- [Gantry (Desktop)](https://github.com/getgantry/gantry) - ネイティブなmacOSアプリ（SwiftUI、Electronなし）で、Dockerホスト（ローカルおよびSSH経由）の管理と監視を行う。ファレットダッシュボード、リアルタイムログと統計、実行ターミナル、ファイルブラウザ、AIエージェント向けにバンドルされたMCPサーバーを提供。
- [Simple Docker UI](https://github.com/felixgborrego/simple-docker-ui) - Electronに基づく。
- [Stevedore](https://github.com/slonopotamus/stevedore) - Windows向けの優れたDocker Desktopの代替品。LinuxおよびWindowsコンテナの両方をサポート。[slonopotamus](https://github.com/slonopotamus)。

<a id="terminal"></a>
### ターミナル

Docker用のTUI、CLIツール、およびシェル統合

- [bosun](https://github.com/psychedelicdevx/bosun) - Dockerのためのキーボード操作型ターミナルUI。Composeプロジェクトグループ、リアルタイムログ、統計、シェルアクセスを提供。
- [d4s](https://github.com/jr-k/d4s) - Dockerコンテナ、Composeスタック、Swarmサービスの管理に最適化された高速かつキーボード操作型ターミナルUI。K9sの利便性を備える。
- [dcinja](https://github.com/Falldog/dcinja) - Dockerコマンドライン環境向けのテンプレートエンジンで、非常に小型のバイナリサイズを持つ。
- [dctl](https://github.com/FabienD/docker-stack) - dctlは、開発者にとって便利なツールであり、ターミナル内のどこでもDocker Composeコマンドを実行できる。さらに、それ以上の機能を提供する。
- [decompose](https://github.com/s0rg/decompose) - Docker環境向けの逆エンジニアリングツール。
- [dive](https://github.com/wagoodman/dive) - Dockerイメージ内の各レイヤーを探索するツール
- [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - Docker CLIプラグインで、現在のディレクトリのREADME.mdファイルをDocker Hubにプッシュできる。QuayおよびHarborにも対応。
- [docker-captain](https://github.com/lucabello/docker-captain) - 複数のDocker Composeデプロイメントをスタイル豊かに管理できるフレンドリーなCLI。Typer、Rich、questionary、shによって駆動。
- [dockerfile-mode](https://github.com/spotify/dockerfile-mode) - Dockerfileの処理に用いるEmacsモード。
- [dockerfilegraph](https://github.com/patrickhoefler/dockerfilegraph) - マルチステージDockerfileを可視化。
- [dockly](https://github.com/lirantal/dockly) - Dockerコンテナの管理に用いるインタラクティブシェルUI。
- [DockMate](https://github.com/shubh-io/dockmate) - 軽量なターミナルベースのDockerおよびPodmanマネージャー。テキストベースのユーザーインターフェースを備える。
- [DockSTARTer](https://github.com/GhostWriters/DockSTARTer) - DockSTARTerは、Docker内で実行中のホームサーバーアプリケーションの開始を助けるツールです
- [DockTUI](https://github.com/strmax195-hue/docktui) - DockerおよびCompose向けの高速かつ依存関係のないターミナルダッシュボード
- [dockup](https://github.com/paulo-amaral/dockup) - Docker Engine + Compose v2、NVIDIA Container Toolkit、PodmanおよびApple containerのインストール・強化・維持を行うTUI。CISに基づいたセキュリティ診断を提供
- [dprs](https://github.com/durableprogramming/dprs) - 開発者向けのDockerコンテナ管理用TUI。リアルタイムログストリーミングとコンテナ管理をサポート
- [dry](https://github.com/moncho/dry) - Dockerコンテナ向けのインタラクティブCLI
- [easydocker](https://github.com/joao-zanutto/easydocker) - k9sを強くインスピレーションとして受け入れた、美しいBubbleTeaグラフィックスを活用したターミナルUI
- [goManageDocker](https://github.com/ajayd-san/gomanagedocker) - Dockerオブジェクトの表示と管理を行う高速TUI。意味のあるキーバインディングを提供し、VIMナビゲーションを標準でサポート
- [layerx](https://github.com/deveshctl/layerx) - コンテナイメージのレイヤーをTUIで確認 — ファイルシステムの差分を閲覧、ファイル内容をインラインで表示、サイズでソート、個別ファイルを抽出、CIで効率性のしきい値を設定。Docker、Podman、およびOCIアーカイブをサポート
- [lazydocker](https://github.com/jesseduffield/lazydocker) - Dockerのすべてを管理する、ラクierな方法。DockerおよびDocker-Compose向けのシンプルなターミナルUI。Go言語とgocuiライブラリで構成されています
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - DockerおよびPodmanコンテナのログ出力の読み取りとフィルタリングを行うインターフェース。[Dozzle](https://github.com/veggiemonk/awesome-docker/blob/1a39b59def0832471d79c2d2555d66481647bbaf/dozzle)のようにですが、ターミナルでサポートしており、フュージー検索、正規表現、出力カラーを提供
- [oxker](https://github.com/mrjackwills/oxker) - Dockerコンテナの表示と制御を行うシンプルなTUI
- [proco](https://github.com/shiwaforce/poco) - Procoは、Docker、Docker-Compose、Kubernetesプロジェクトの複雑さに関わらず、シンプルなYAML設定ファイルを使ってプロジェクトの見つけ方からローカル環境での初期化までを短くするためのツールです
- [scuba](https://github.com/JonathonReinhart/scuba) - Dockerコンテナを透明に使用してソフトウェアのビルド環境を封じ込める
- [supdock](https://github.com/segersniels/supdock) - Dockerの使用を少し視覚的にし、インタラクティブなプロンプトを提供
- [swarmcli](https://github.com/Eldara-Tech/swarmcli) - スワーム管理は思考の速さで — リアルタイムログストリーミング、コンテナへの即時シェルアクセス、スムーズなポートフォワーディング、必要に応じたシークレットの表示機能により、Docker Swarmの完全な制御を提供しつつ、あなたのワークフローを破壊しません
- [tdocker](https://github.com/pivovarit/tdocker) - 日常的なコンテナ操作のためのの代替ツール `docker ps`
- [wharf](https://github.com/idesyatov/wharf) - k9sをインスピレーションとして受け入れたDocker Compose向けTUI。VIMスタイルのナビゲーション、リアルタイムCPU/MEMモニタリング（ブレインチャート）、コンテナファイルブラウザ、SSHリモートホストサポート、コマンドモードを提供

<a id="web"></a>
### ウェブ

- [Arcane](https://github.com/getarcaneapp/arcane) - 誰にとっても使いやすい、現代的なDocker管理プラットフォーム
- [CASA](https://github.com/knrdl/casa) - 数個のコンテナの管理を同僚に委任する
- [Container Web TTY](https://github.com/wrfly/container-web-tty) - コンテナをウェブターミナルで接続する
- [Docker Commander](https://github.com/koduj-dev/docker-commander) - 自前でホストできるDockerの管理および監視UIで、複数ホスト対応、Compose管理、ログの集約、アラート、RBAC、脆弱性スキャン、MCP統合を提供する
- [Docker Registry Browser](https://github.com/klausmeyer/docker-registry-browser) - Docker Registry HTTP API v2のWebインターフェース
- [docker-swarm-visualizer](https://github.com/dockersamples/docker-swarm-visualizer) - Docker Swarm上でDockerサービスを可視化（デモ実行用）
- [dockge](https://github.com/louislam/dockge) - 使いやすく、反応性のある自前ホストDocker compose.yamlスタック管理ツール
- [DockScope](https://github.com/ManuelR-T/dockscope) - Dockerコンテナを3Dの依存関係グラフで可視化し、リアルタイムメトリクス、ログ、ブラウザ内ターミナルを提供
- [Komodo](https://github.com/mbecker20/komodo) - 複数サーバー上でソフトウェアを構築・デプロイできるツール
- [Portainer](https://github.com/portainer/portainer) - 軽量な管理UIでDockerホストまたはDocker Swarmクラスタを管理できる
- [Swarmpit](https://github.com/swarmpit/swarmpit) - SwarmpitはDocker Swarmクラスタに簡単で使いやすいインターフェースを提供し、スタック、サービス、シークレット、ボリューム、ネットワークなど、すべてを管理できます
- [usulnet](https://github.com/fr4nsys/usulnet) - システム管理者やDevOps向けの完全で現代的なDocker管理プラットフォーム。エンタープライズクラスのツール、CVEスキャナー、SSH、RDPをWeb上で提供など

<a id="ide-integrations"></a>
### IDE統合

- JetBrains IDEs (IntelliJ IDEA, GoLand, WebStorm, CLion etc.) has [built-in Docker plugin](https://www.jetbrains.com/help/idea/docker.html#managing-images)
- Eclipse [Docker Tooling plugin](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)
- [docker.el](https://github.com/Silex/docker.el) EmacsからDockerを管理できる

<a id="developer-workflow"></a>
## 開発ワークフロー

<a id="api-client"></a>
### APIクライアント

- [contajners](https://github.com/lispyclouds/contajners) - OCIコンテナエンジン向け、自然な構文、データ駆動、REPL対応のClojureクライアント
- [Docker Client for JVM](https://github.com/gesellix/docker-client) - JVM向けDockerリモートAPIクライアントライブラリ（Groovyで記述）
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - JavaScript用Docker APIクライアント（mobyリポジトリのSwagger API定義から自動生成）
- [docker-controller-bot](https://github.com/dgongut/docker-controller-bot) - Dockerコンテナを制御するTelegramボット
- [docker-maven-plugin](https://github.com/fabric8io/docker-maven-plugin) - MavenプラグインでDockerイメージの実行と作成
- [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - C#/.NET向けDockerリモートAPIのHTTPクライアント
- [Docker.Registry.DotNet](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - .NET（C#）によるDockerリジストリAPI（v2）とのインタラクション用クライアントライブラリ
- [dockerode](https://github.com/apocas/dockerode) - DockerリモートAPI向けNode.jsモジュール
- [go-dockerclient](https://github.com/fsouza/go-dockerclient/) - GoによるDockerリモートAPIのHTTPクライド
- [Gradle Docker plugin](https://github.com/gesellix/gradle-docker-plugin) - Gradle向けDockerリモートAPIプラグイン
- [Portainer stack utils](https://github.com/greenled/portainer-stack-utils) - ポートエイナーインスタンスからドッカーのスタックをデプロイ／更新／アンデプロイするためのBashスクリプト。ドッカーのコンポジットYAMLファイルから動作を実行。
- [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) - sbtから直接ドッカーイメージを作成。

<a id="cicd"></a>
### CI/CD

自前でホストするCIエンジン、ビルドアクセラレータ、Dockerワークフローをターゲットとしたホストサービス。商業製品は`:yen:`と表記。

- [Buddy](https://buddy.works) - :yen: Git、ビルド、デプロイツールを統合した強力なツール。開発を飛躍的に加速。
- [Captain](https://github.com/harbur/captain) - Gitワークフローをドッカーコンテナに変換し、継続的なデリバリーに備える。
- [CircleCI](https://circleci.com/) - :yen: ビルド環境からドッカーイメージをプッシュまたはプル、あるいはCircleCI上でコンテナをビルド・実行。
- [CodeFresh](https://octopus.com/codefresh) - :yen: ドッカーアプリケーションの端到端のビルド、テスト、共有。自動テストを実行。
- [ConcourseCI](https://concourse-ci.org) - :yen: DevOpsチーム向けのパイプライン中心のCI SaaSプラットフォーム。
- [Defang](https://github.com/DefangLabs/defang) - 好きなクラウドに数分でドッカーComposeをデプロイ。
- [Depot](https://depot.dev) - :yen: クラウド上で高速にドッカーイメージをビルド。極めて高速なコンピューティング、自動的な知能によるキャッシュ、ゼロ設定。
- [Diun](https://github.com/crazy-max/diun) - Dockerレジストリにイメージまたはリポジトリが更新されたときに通知を受信。
- [dockcheck](https://github.com/mag37/dockcheck) - ドッカーイメージの更新を確認し、プルせずに自動で選択された／すべてのコンテナを更新。通知、クリーニングなどもサポート。
- [Docker plugin for Jenkins](https://github.com/jenkinsci/docker-plugin/) - ドッカープラグインの目的は、ドッカーホストを使ってスレーブを動的にプロビジョニングし、1つのビルドを実行し、その後そのスレーブをダウンを実現すること。
- [Drone](https://github.com/drone/drone) - Docker上で構築された継続的統合サーバー。YAMLファイルで設定。
- [Gantry](https://github.com/shizunge/gantry) - 選択されたドッカー・スワーム・サービスを自動で更新。
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLabは、GitLabランナーを使用してコードのテスト、ビルド、デプロイを統合。
- [Jaypore CI](https://github.com/theSage21/jaypore_ci) - シンプルで非常に柔軟かつ強力なCI／CD／自動化システム。Pythonで構成。オフラインとローカルを最優先。
- [Kraken CI](https://github.com/Kraken-CI/kraken) - 現代的なCI／CD、オープンソース、オンプレミスシステム。スケーラビリティが高く、テストに焦点。その実行者にドッカーが含まれる。開発された。
- [Screwdriver](https://screwdriver.cd/) - :yen: ヤホーが開発した継続的デリバリー向けオープンソースビルドプラットフォーム。
- [Self Hosted Runner](https://github.com/youssefbrr/self-hosted-runner) - Linux、macOS、Windowsに対応したセルフホスト型GitHub Actionsランナーのドッカー化されたソリューション。
- [Semaphore CI](https://semaphore.io/) - :yen: 高性能クラウドCI。コンテナをビルド、テストし、生産環境へデプロイ。
- [Skipper](https://github.com/Stratoscale/skipper) - Gitリポジトリを簡単にDockerで構築できます。
- [Tekton CD](https://tekton.dev/) - クラウドネイティブなパイプラインリソース。
- [TravisCI](https://www.travis-ci.com/) - :yen: GitHubプロジェクト向けにホスティングされたCIでDockerサポートあり。

<a id="development-environment"></a>
### 開発環境

- [coder](https://github.com/coder/coder) - TerraformまたはDockerで駆動されたリモート開発マシン。
- [dde](https://github.com/whatwedo/dde) - Dockerに基づいたローカル開発環境ツールセット。
- [DIP](https://github.com/bibendi/dip) - docker-composeで構成されたアプリケーションに対して、簡易なプロビジョニングとインタラクションを行うCLIユーティリティ。
- [EnvCLI](https://github.com/EnvCLI/EnvCLI) - Node、Go、...のローカルインストールをプロジェクトごとのDockerコンテナに置き換えることができます。
- [Gebug](https://github.com/moshebe/gebug) - Docker化されたGoアプリケーションのデバッグを非常に簡単かつ安全に実現するツール。デバッガーやホットリロード機能を提供する。
- [HarborPilot](https://github.com/potterwhite/HarborPilot) - 埋め込みLinux開発（RK3588、RV1126、RK3568）向けの自動マルチプラットフォームDockerイメージビルダー。3層構成継承、PORT_SLOTベースのポート割り当て、およびクロスバージョンUbuntuサポート（20.04/22.04/24.04）を備えています。
- [Lando](https://github.com/lando/lando) - 開発者がプロジェクト開発に必要なサービスとツールを迅速に指定し、簡単に立ち上げられるようにするLando。
- [Laradock](https://github.com/laradock/laradock) - Dockerに基づいた完全なPHP開発環境。Nginx/Apache、PHP、MySQL、Redisなど、スワップ可能なComposeサービスで実行。
- [uniget](https://github.com/uniget-org/cli) - Uni(versal)get、コンテナツールおよびそれ以上のインストーラーとアップダーアー（以前はdocker-setup）。
- [Zsh-in-Docker](https://github.com/deluan/zsh-in-docker) - 1行でDockerコンテナ内にZsh、Oh-My-Zshおよびプラグインをインストールできます。

<a id="serverless"></a>
### サーバーレス

- [Apache OpenWhisk](https://github.com/apache/openwhisk) - イベントに応じてスケール可能な関数を実行するサーバレス、オープンソースのクラウドプラットフォーム。
- [Koyeb](https://www.koyeb.com/) - :yen: Koyebは、グローバルにアプリをデプロイできる開発者向けのサーバレスプラットフォーム。gitベースのデプロイ、ネイティブな自動スケーリング、グローバルエッジネットワーク、および組み込みのサービスメッシュと発見機能で、Dockerコンテナやウェブアプリ、APIをスムーズに実行できます。
- [OpenFaaS](https://github.com/openfaas/faas) - DockerおよびKubernetes向けの完全なサーバレス関数フレームワーク。

<a id="testing"></a>
### テスト

- [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) - イメージの構造を検証するためのフレームワーク。コマンドの出力やファイルシステムの内容をチェックすることで、イメージの構造を検証します。
- [dgoss](https://github.com/goss-org/goss/tree/master/extras/dgoss) - コマンド出力やファイルシステム内容をチェックするための、高速なYAMLベースのDockerコンテナ検証ツール。
- [Kurtosis](https://github.com/kurtosis-tech/kurtosis) - マルチコンテナテスト環境向けの合成型ビルドシステム。開発者に以下の機能を提供します：環境構成用の強力なPython風SDK、コンパイル時検証（環境の動作とセットアップの確認）、および環境実行、監視、デバッグ機能を備えたランタイム。
- [Pumba](https://github.com/alexei-led/pumba) - Docker向けの混沌テストツール。KubernetesおよびCoreOSクラスタにデプロイ可能です。

<a id="wrappers"></a>
### ラッパー

- [Hokusai](https://github.com/artsy/hokusai) - アプリケーション開発者向けのDocker＋Kubernetes CLI。アプリケーションをコンテナ化し、開発、テスト、リリースサイクルの全過程でライフサイクルを管理するために使用されます。From [artsy](https://github.com/artsy)。
- [Preevy](https://github.com/livecycle/preevy) - DockerおよびDocker Composeプロジェクト用のプレビューエンビローメント。変更をテストし、開発者や非開発者（製品／デザイン）からのフィードバックを得るために、CIパイプラインの一部としてクラウドプロバイダーにプルリクエストをデプロイする。
- [subuser](https://github.com/subuser-security/subuser) - Dockerでグラフィカルデスクトップアプリケーションを安全かつ移植性の高い方法で実行できるようにするツール。
- [udocker](https://github.com/indigo-dc/udocker) - root権限なしで、バッチまたはインタラクティブシステムでシンプルなDockerコンテナを実行するためのツール。
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - 良いスタート地点は である。 [vagrant-docker-example](https://github.com/bubenkoff/vagrant-docker-example)

<a id="in-container-tooling"></a>
## コンテナ内ツール

コンテナ内にインストールされているツールまたは、 [sidecar](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar)として実行されるように設計されたアプリケーション

- [cdebug](https://github.com/iximiuz/cdebug) - 実行中のコンテナをデバッグするための、一時的なサイドカーセーフティツール。Docker、containerd、Kubernetesと互換性を持つ。
- [ckron](https://github.com/nicomt/ckron) - Docker向けのクロントースタイルのジョブスケジューラ。
- [CoreOS][coreos] - Linux for Massive Server Deployments
- [docker-gen](https://github.com/jwilder/docker-gen) - Dockerコンテナのメタデータからファイルを生成する。
- [dockerize](https://github.com/powerman/dockerize) - Dockerコンテナ内でアプリケーションを実行するためのユーティリティ。
- [GoSu](https://github.com/tianon/gosu) - この特定のアプリケーションをこの特定のユーザーとして実行し、パイプラインから脱出する（エントリーポイントスクリプトツール）。
- [is-docker](https://github.com/sindresorhus/is-docker) - プロセスがDockerコンテナ内にあるかを確認する。
- [microcheck](https://github.com/tarampampam/microcheck) - Dockerコンテナ向けの軽量ヘルスチェックユーティリティ（httpcheckとcURLの9.3MBから75KBへ）—純Cで実装、http(s)、ポートチェック、並列実行が含まれる。
- [Ofelia](https://github.com/mcuadros/ofelia/) - Ofeliaは、Goで構築された現代的で軽量のDocker環境向けジョブスケジューラであり、古くからのcronを置き換えることを目的としている。コンテナラベルまたは設定ファイルからの構成をサポート。
- [su-exec](https://github.com/ncopa/su-exec) - シンプルなツールで、異なる権限でプログラムを実行する。プログラムは直接実行され、子プロセスとして実行されない（suやsudoのように）ため、TTYやシグナルの問題を回避する。なぜgosuを再構築するのか？これはgosuとほぼ同じことをするが、1.8MBから10KBにまで縮小されている。
- [supercronic](https://github.com/aptible/supercronic) - クロントーバーに適合するジョブ実行ツールで、コンテナ内で特別に設計されている。

<a id="learning-resources"></a>
# 学習資料

<a id="where-to-start"></a>
## はじめに

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) 開発およびデリバリーに用いられる、導入のための実用的な計画書。
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - マイクロサービスでアプリケーションを構築するための実用的かつプロジェクトベースのガイド。単一マイクロサービスのDockerイメージを作成し、プライベートコンテナレジストリに公開し、最終的にプロダクションKubernetesクラスタに完全なマイクロサービスアプリケーションをデプロイするまでをカバー。
- [Docker Curriculum](https://github.com/prakhar1989/docker-curriculum): Dockerに始めることを教える包括的なチュートリアル。Dockerの使い方と、AWSのElastic BeanstalkおよびElastic Container ServiceでDocker化されたアプリケーションをデプロイする方法を教えている。
- [Docker Documentation](https://docs.docker.com/): 公式ドキュメント。
- [Docker for beginners](https://github.com/groda/big_data/blob/master/docker_for_beginners.md): 初心者向けチュートリアル。Dockerの基本から学ぶ—from "Hello world!" からコンテナとの基本的な相互作用まで、根本的な概念についての簡単な説明を含む。
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) Dockerを初めて使う開発者やテスト者向けのDockerの紹介。（動画1時間40分、linux.conf.au 2019 — チェストヒート、ニュージーランドで記録）
- [Docker katas](https://github.com/eficode-academy/docker-katas) Dockerから「Hello Docker」という初歩的なステップから、サーバーにデプロイされるコンテナ化されたウェブアプリケーションまでを学ぶ一連の実験環境。
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4): Dockerについてのアニメーション付き概要解説。視覚的に分かりやすく、より複雑な学習資料に進むのを容易にします。
- [Docker Training](https://training.mirantis.com) - :yen:
- [Dockerlings](https://github.com/furkan/dockerlings): ターミナル内でDockerを学ぶ、現代的なTUIと短い練習問題付き。
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) フランス語のDevSecOpsサイトでDockerをマスターする専門セクション：基礎からベストプラクティスまで、コンテナの最適化やセキュリティ対策を含む。
- [Learn Docker](https://github.com/dwyl/learn-docker): ステップバイステップチュートリアルとその他のリソース（動画、記事、クイックリファレンス）
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - Dockerの主要なコンポーネントとそれらがどのように組み合わされているかを、初心者向けに概観する。多くの高品質な画像、例、リソースを含む。
- [Play With Docker](https://training.play-with-docker.com/): PWDは、初心者から上級者までDockerを学ぶための素晴らしい入り口。Dockerはブラウザ内で直接実行されます。
- [Practical Guide about Docker Commands in Spanish](https://github.com/brunocascio/docker-espanol) このスペイン語ガイドは、基本的なDockerコマンドの使用と現実の例を含んでいます。
- [Setting Python Development Environment with VScode and Docker](https://github.com/RamiKrispin/vscode-python): VScode、Docker、Dev Container拡張機能を使って、Python開発環境を構築するためのステップバイステップチュートリアル。
- [The Docker Handbook](https://docker-handbook.farhan.dev/) オープンソースの書籍で、Dockerの基本、ベストプラクティス、および一部の中級機能を学びます。この書籍は[fhsinchy/the-docker-handbook](https://github.com/fhsinchy/the-docker-handbook)にホストされており、プロジェクトは[fhsinchy/docker-handbook-projects](https://github.com/fhsinchy/docker-handbook-projects)リポジトリにホストされています。

**コツのまとめ**

- [eon01](https://github.com/eon01/DockerCheatSheet)
- [dimonomid](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent](https://github.com/wsargent/docker-cheat-sheet) (最も人気)

<a id="where-to-start-windows"></a>
## はじめに（Windows）

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - .NET Frameworkアプリケーションの種類を識別し、コンテナ化に適したものを選別する方法、そして「リフトアンドシフト」アプローチについて学びます。
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) Docker内でASP.NETおよびSQL Serverワークロードを実行するデモンストレーション
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) LinuxおよびWindowsコンテナでASP.NET Coreアプリケーションを実行する方法、[Docker for Windows][docker-for-windows]を使用。
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) 古いASP.NETアプリをコンテナ化し、Windowsコンテナで実行するための手順
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - 20分の概要、Dockerを使ってPowerShell、ASP.NET Core、ASP.NETアプリを実行する方法。
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Windowsコンテナの概要、Windows 10およびWindows Server 2016向けのQuick Startにまで掘り下げた説明

---

<a id="books--tutorials"></a>
## 書籍とチュートリアル

- [Cloud Native Landscape](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - Docker、コミュニティ、ツールに関する定期的な更新。
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - :yen: が、Dockerのコンテナ化、Dockerコンテナの実行、イメージ作成、Dockerfile、Dockerのオーケストレーション、セキュリティのベストプラクティスなどについて、実際のプロジェクトや事例研究を通じて学習し、Docker認定アソシエートの取得をサポートします。
- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - タグ [docker](https://www.codever.dev/bookmarks/t/docker) を使用してください。
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - Python用Dockerパッケージの詳細な記事のシリーズ。
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - Dockerを学ぶためのトップのオンラインチュートリアルとコースのキュレーションリスト。
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

<a id="awesome-lists"></a>
## Awesomeリスト

- [Awesome Compose](https://github.com/docker/awesome-compose) - Docker Composeのサンプル。
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container](https://github.com/Friz-zy/awesome-linux-containers) このリポジトリ以上の一般的なコンテナに関する情報。
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) 無料ソフトウェアのネットワークサービスおよびウェブアプリケーションのリスト。これらは、従来の方法（ローカルWebサーバーの設定とアプリケーションの実行）またはDockerコンテナ内で実行することでローカルにホストできます。
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade](https://github.com/cjbarber/ToolsOfTheTrade) SaaSおよびオンプレミスアプリケーションのリスト。

<a id="demos-and-examples"></a>
## デモとサンプル

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) Dockerを用いたローカル開発環境は、プロジェクトに必要なDevOps設定を縮小包装することで、新規メンバーの導入をスムーズにします。
- [Local Docker DB](https://github.com/alexmacarthur/local-docker-db) 多くのデータベース向けのDocker Composeのサンプルリスト。
- [Webstack-micro](https://github.com/ferbs/webstack-micro) Docker Composeを使ってAPIゲートウェイ、中央認証、バックグラウンドワーカー、WebSocketsをコンテナ化サービスとして構築するデモウェブアプリ。

<a id="good-tips"></a>
## 実践的なヒント

- [Docker Caveats](https://docker-saigon.github.io/post/Docker-Caveats/) 生産環境でのDockerの運用について（2016年4月11日作成）。
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](https://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

<a id="raspberry-pi--arm"></a>
## Raspberry PiとARM

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) Raspberry Pi用のSDカードに事前インストールされたイメージを含む、クラスタリング、スワーム、Dockerに関する大規模リソース。
- [Get Docker up and running on the RaspberryPi in three steps](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) IoT向けの現代的なDevOps、GitとDockerの活用。
- [Installing, running, using Docker on armhf (ARMv7) devices](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

<a id="security-articles"></a>
## セキュリティ記事

- [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)
- [CVE Scanning Alpine images with Multi-stage builds in Docker 17.05](https://github.com/tomwillfixit/alpine-cvecheck)
- [Docker Secure Deployment Guidelines](https://github.com/AonCyberLabs/Docker-Secure-Deployment-Guidelines)
- [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/)
- [Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare](https://www.slideshare.net/slideshow/docker-security-are-your-containers-tightly-secured-to-the-ship/43834790)
- [How CVE's are handled on Offical Docker Images](https://github.com/docker-library/official-images/issues/1448)
- [Lynis is an open source security auditing tool including Docker auditing](https://cisofy.com/lynis/)
- [Security Best Practices for Building Docker Images](https://linux-audit.com/tags/docker/)
- [Software Engineering Radio interview of Docker Security Team Lead (Diogo Mónica)](https://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/)
- [Ten Docker Image Security Best Practices Cheat Sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
- [Top ten most popular docker images each contain at least 30 vulnerabilities](https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/)
- [Tuning Docker with the newest security enhancements](https://opensource.com/business/15/3/docker-security-tuning)
- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

<a id="videos"></a>
## 動画

- [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06)
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) (Spanish)
- [Docker for Developers](https://www.youtube.com/watch?v=FdkNAjjO5yQ) (54:26)
- [Docker from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxD-btrjrqdEfQHbkZnQrmqE) (1:22:01)
- [Docker: How to Use Your Own Private Registry](https://www.youtube.com/watch?v=CAewZCBT4PI) (15:01)
- [Docker in Production](https://www.youtube.com/watch?v=Glk5d5WP6MI) (36:05)
- [Docker Primer to Docker Compose](https://www.youtube.com/watch?v=G-s2GXGAjTk) (1:56:45)
- [Docker Registry from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxAz3d4Fj3edq7UcxEhdTCBm) (44:40)
- [Docker Swarm from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxAY4gZd1Wl-GsLvg-e9Ap1e) (1:41:28)
- [Extending Docker with Plugins](https://vimeo.com/110835013) (15:21)
- [From Local Docker Development to Production Deployments](https://www.youtube.com/watch?v=7CZFpHUPqXw)
- [Introduction to Docker and containers](https://www.youtube.com/watch?v=ZVaRK10HBjo) (3:09:00)
- [Logging on Docker: What You Need to Know](https://vimeo.com/123341629) (51:27)
- [Performance Analysis of Docker - Jeremy Eder](https://www.youtube.com/watch?v=6f2E6PKYb0w) (1:36:58)
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) フリーウェブコース
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

<a id="communities-and-meetups"></a>
## コミュニティとミートアップ

<a id="brazilian"></a>
### ブラジル

- [Docker BR on Telegram](https://telegram.me/dockerbr)

<a id="english"></a>
### 英語

- [Docker Community](https://www.docker.com/community/)
- [Docker Events](https://www.docker.com/events/)
- [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [Docker Reddit Community](https://www.reddit.com/r/docker/)

<a id="russian"></a>
### ロシア語

- [Docker Russian-speaking Community](https://t.me/docker_ru)

<a id="spanish"></a>
### スペイン語

- [Docker Tips](https://dockertips.com/)

<a id="stargazers-over-time"></a>
## Stargazer数の推移

[![Stargazers over time](https://starchart.cc/veggiemonk/awesome-docker.svg?variant=adaptive)](https://starchart.cc/veggiemonk/awesome-docker)

[calico]: https://github.com/projectcalico/calico
[coreos]: https://github.com/coreos
[distribution]: https://github.com/docker/distribution
[docker-for-windows]: https://docs.docker.com/desktop/setup/install/windows-install/
[editreadme]: https://github.com/veggiemonk/awesome-docker/edit/master/README.md
[kubernetes]: https://kubernetes.io
[nginxproxy]: https://github.com/nginx-proxy/nginx-proxy
[openshift]: https://okd.io/
[sindresorhus]: https://github.com/sindresorhus/awesome
