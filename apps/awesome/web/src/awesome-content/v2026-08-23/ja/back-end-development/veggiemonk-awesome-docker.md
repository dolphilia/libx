---
title: "Awesome Docker"
description: "Dockerのランタイム、イメージのビルドとレジストリ、デプロイ、ネットワーク、ストレージ、監視、セキュリティ、操作画面、学習資料。"
licenseSource: "github-veggiemonk-awesome-docker-readme-md"
toc:
  maxLevel: 4
---

# Awesome Docker

Dockerは、コンテナ化したアプリケーションのビルド・配布・実行を支えるツールを提供します。このリストでは、コンテナランタイム、イメージ管理、デプロイ用プラットフォーム、ネットワーク、ストレージ、監視、セキュリティ、操作画面、学習資料を探せます。

プロジェクト一覧は、Dockerを使うだけのアプリケーションではなく、Dockerとの統合によって価値を持つオープンソースのツールを掲載することを目指しています。商用の項目には「商用」と記し、無料枠などの料金条件も説明に残しています。

プラットフォームの概要は、Dockerによる[Dockerとは](https://www.docker.com/why-docker/)を参照してください。

## プロジェクト <a id="projects"></a>

### 公式プロジェクト <a id="official-projects"></a>

- [Moby](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose](https://github.com/docker/compose/) - Dockerで複数コンテナからなるアプリケーションを定義・実行。
- [Docker Registry][distribution] - コンテンツのパッケージ化、配布、保存、提供を行うDockerツール群。

### エンジンとランタイム <a id="engine--runtime"></a>

- [colima](https://github.com/abiosoft/colima) - 最小限の設定で使える、macOSおよびLinux向けのコンテナランタイム。
- [containerd](https://github.com/containerd/containerd) - オープンで信頼性の高いコンテナランタイム。
- [cri-o](https://github.com/cri-o/cri-o) - Open Container Initiativeに基づく、Kubernetes Container Runtime Interfaceの実装。
- [gVisor](https://github.com/google/gvisor) - コンテナ向けのアプリケーションカーネル。
- [lxc](https://github.com/lxc/lxc) - LXC（Linux Containers）。
- [Mocker](https://github.com/us/mocker) - AppleのContainerizationフレームワークを基盤とする、macOS向けのDocker互換コンテナCLI。
- [podman](https://github.com/containers/libpod) - コンテナポッドを作成するライブラリLibpodと、Podmanのリポジトリ。
- [runc](https://github.com/opencontainers/runc) - OCI仕様に従ってコンテナを生成・実行するCLIツール。
- [runtime-tools](https://github.com/opencontainers/runtime-tools) - OCIランタイム仕様を扱うツール群。
- [youki](https://github.com/youki-dev/youki) - OCIランタイム仕様を実装する、Rust製のコンテナランタイム。

### イメージの構築 <a id="building-images"></a>

#### ビルダー <a id="builder"></a>

新しいイメージのビルドを支援・簡略化するアプリケーション。

- [ansible-bender](https://github.com/ansible-community/ansible-bender) - `ansible`と`buildah`を利用するツール。
- [apko](https://github.com/chainguard-dev/apko) - apkパッケージからOCIイメージを作成する宣言型ビルダー。再現可能になるように設計。
- [buildah](https://github.com/containers/buildah) - OCIイメージのビルドを支援するツール。
- [BuildKit](https://github.com/moby/buildkit) - 並行処理と効率的なキャッシュに対応し、Dockerfileに依存しないビルダーツールキット。
- [buildx](https://github.com/docker/buildx) - BuildKitを基盤とする、マルチプラットフォームビルド用の公式Docker CLIプラグイン。
- [cekit](https://github.com/cekit/cekit) - OpenShiftがさまざまなビルドエンジンでベースイメージを作成するために使うツール。
- [dlayer](https://github.com/orisano/dlayer) - Dockerのレイヤー分析ツール。
- [docker-companion](https://github.com/mudler/docker-companion) - Dockerイメージのレイヤー統合と展開を行う、Go製のコマンドラインツール。
- [docker-repack](https://github.com/orf/docker-repack) - Dockerイメージを小さく効率的な形に再パッケージし、プルを高速化。
- [DockerSlim](https://github.com/docker-slim/docker-slim) - 大きなDockerイメージを、可能な限り小さくすることを目指して縮小。
- [earthly](https://github.com/earthly/earthly) - DockerfileとMakefileを組み合わせた構文による、コンテナ化されたビルド自動化。
- [essex](https://github.com/utensils/essex) - Dockerベースのプロジェクト向けの雛形。Bash製のCLIで、Makefileを使うワークフローにより、整理された一貫性のあるDockerプロジェクトをすばやくセットアップ。
- [HPC Container Maker](https://github.com/NVIDIA/hpc-container-maker) - 高レベルのPythonレシピからDockerfileを生成。高性能計算のコンポーネント向けの構成要素を含む。
- [img](https://github.com/genuinetools/img) - 単独で動作し、デーモン不要で非特権実行できる、DockerfileおよびOCI互換のコンテナイメージビルダー。
- [ko](https://github.com/ko-build/ko) - Dockerfileを使わず、Goアプリケーションをコンテナイメージとしてビルド・デプロイ。
- [nix2container](https://github.com/nlewo/nix2container) - `docker load`による往復処理を行わず、NixでOCIイメージをビルド。
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - HashiCorpによるマシンイメージの作成ツール。Dockerイメージも対象とし、Chef、Puppet、Ansibleなどの構成管理ツールと連携。
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - 商用。Pythonアプリケーション向けに、本番用のDockerイメージを作成するテンプレート。
- [RAUDI](https://github.com/cybersecsi/RAUDI) - 第三者製ソフトウェアに新しいリリース、更新、コミットがあるたびにDockerイメージを自動更新。Docker Hubへのプッシュも任意で実行可能。
- [runlike](https://github.com/lavie/runlike) - 実行中のコンテナから`docker run`のコマンドとオプションを生成。
- [Whaler](https://github.com/P3GLEG/Whaler) - Dockerイメージを解析し、Dockerfileを復元するプログラム。

#### ベースイメージ <a id="base-images"></a>

最小構成、セキュリティ強化、用途別のコンテナベースイメージ。

- [Chainguard Images](https://github.com/chainguard-images/images) - Wolfiを基盤に作成された、最小構成で署名済みのコンテナイメージ。SBOMのアテステーションを備える。
- [distroless](https://github.com/GoogleContainerTools/distroless) - OSを除いた、言語別のDockerイメージ。
- [melange](https://github.com/chainguard-dev/melange) - apkoで使うapkパッケージを宣言的なYAMLからビルド。
- [pglayers](https://github.com/pglayers/pglayers) - 組み合わせ可能なDockerレイヤーとして提供する、事前ビルド済みのPostgreSQL拡張機能。50以上の拡張機能と、すぐに使える統合イメージ（全機能版、Azure互換版）を提供。
- [Wolfi](https://github.com/wolfi-dev/os) - コンテナ向けに設計されたUndistro Linux。glibcを基盤とし、署名と日次のSBOMを提供。

#### Dockerfile

- [Dockerfile Generator](https://github.com/ozankasikci/dockerfile-generator) - さまざまな入力経路から有効なDockerfileを生成する、Goライブラリおよび実行ファイルの`dfg`。
- [Dockershelf](https://github.com/Dockershelf/dockershelf) - 汎用的で効率的かつ軽量なDockerレシピを集めたリポジトリ。Travisのcronジョブでイメージを毎日更新・テスト・公開。
- [Dofigen](https://github.com/lenra-io/dofigen) - YAMLまたはJSONによる簡潔な記述からDockerfileを生成。
- [Trusted Builds](https://dockerfile.github.io/) - Trusted Automated Docker Builds。Dockerfile Projectが、Dockerコンテナで実行できるさまざまなオープンソースサービスのDockerfileを中央リポジトリで管理。

#### リンター <a id="linter"></a>

- [Dockadvisor](https://github.com/deckrun/dockadvisor) - 60以上のルール、品質スコア、セキュリティチェックを備えた軽量Dockerfileリンター。
- [docker-image-size-limit](https://github.com/wemake-services/docker-image-size-limit) - Dockerイメージのサイズを監視するツール。
- [Hadolint](https://github.com/hadolint/hadolint) - 推奨事項やよくある誤りを検査するDockerfileリンター。`RUN`命令内のBashも検査。

### イメージのライフサイクル <a id="image-lifecycle"></a>

#### レジストリ <a id="registry"></a>

Dockerイメージを保存するサービス。

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - 商用。Dockerコンテナイメージの保存・管理・デプロイに使う、完全マネージド型のレジストリECR。
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - 商用。DockerのプライベートレジストリをAzureのリソースとして管理。
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - 商用。公開・非公開のDockerレジストリや、Kubernetes向けのHelmチャートなどを扱う、完全マネージド型のパッケージ管理SaaS。無料枠があり、オープンソースプロジェクトでは無料。
- [Container Registry Service](https://container-registry.com/) - 商用。チームや組織向けに、Harborを基盤とするコンテナ管理をサービスとして提供。無料枠には非公開リポジトリ用の1 GBストレージを含む。
- [Cycle.io](https://cycle.io/) - 商用。ベアメタル環境でのコンテナホスティング。
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - 商用。DigitalOceanのコンテナレジストリ。
- [Docker Hub](https://hub.docker.com/) - Docker Inc.が提供。
- [Docker Registry v2][distribution] - コンテンツのパッケージ化、配布、保存、提供を行うDockerツール群。
- [Dragonfly](https://github.com/dragonflyoss/Dragonfly2) - P2P技術による、効率的で安定した安全なファイル配布とイメージ配信の高速化。
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - 商用。Google Cloud Platformで使う、高速なプライベートDockerイメージストレージ。
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - プライベートな小規模イメージホスティング向けに、Giteaへ統合されたDockerレジストリ。
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - Dockerイメージの保存・管理に使うGitHubのサービス。GitHub Actionsと密接に連携。
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - GitLab CIでのイメージ利用に重点を置くレジストリ。
- [Granite Registry](https://granite.so/products/docker-registry) - 商用。プライベートDockerイメージを、それをプルするワークロードとともに保存。スコープ付きの読み取り専用キーと読み書き用キーを提供。
- [Harbor](https://github.com/goharbor/harbor) - コンテンツの保存・署名・スキャンを行う、オープンソースのクラウドネイティブレジストリ。レプリケーション、ユーザー管理、アクセス制御、操作監査に対応。
- [JFrog Artifactory](https://jfrog.com/artifactory/) - 商用。アーティファクトリポジトリの管理ツール。プライベートDockerレジストリとしても利用可能。
- [kontain.me](https://github.com/imjasonh/kontain.me) - イメージのプル時にビルドして提供する、オンデマンド型のコンテナイメージレジストリ。
- [Kraken](https://github.com/uber/kraken) - Uberによる拡張性の高いP2P Dockerレジストリ。原文では、TB単位のデータを数秒で配布すると説明。
- [NORA](https://github.com/getnora-io/nora) - Docker、Maven、npm、Cargo、PyPIを扱う、軽量なマルチプロトコルのアーティファクトレジストリ。単一の32MBバイナリに、プルスルーキャッシュ、Web UI、Prometheusメトリクス、RBAC認証を搭載。
- [nscr](https://github.com/jhstatewide/nscr) - 軽量で自己完結したコンテナレジストリ。
- [Quay.io](https://quay.io/) - 商用。プライベートDockerリポジトリの安全なホスティング。
- [Registryo](https://github.com/inmagik/registryo) - オンプレミスのDockerレジストリ向けのUIと、トークン認証サーバー。
- [RepoFlow](https://www.repoflow.io) - Docker、PyPI、Maven、npm、Helmに対応するパッケージ管理プラットフォーム。スマート検索、組み込みのDockerイメージスキャンを備え、セルフホストとクラウド利用の両方に無料の選択肢を用意。
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - ソフトウェアサプライチェーン全体のバイナリとビルド成果物を管理。

#### レジストリCLI <a id="registry-cli"></a>

OCI/Dockerレジストリのイメージを検査・コピー・操作する、デーモン不要のコマンドラインツール。

- [crane](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - `go-containerregistry`の、レジストリ内のイメージを操作する軽量CLI。
- [go-containerregistry](https://github.com/google/go-containerregistry) - コンテナレジストリを扱うGoライブラリとCLIツール（`crane`、`gcrane`、`registry`）。
- [oras](https://github.com/oras-project/oras) - 任意のOCIアーティファクトをOCIレジストリへプッシュ・プル。
- [regctl](https://github.com/regclient/regclient) - デーモン不要のレジストリクライアント。OCIイメージのコピー、検査、変更、署名を実行。
- [skopeo](https://github.com/containers/skopeo) - リモートのイメージレジストリから情報を取得し、イメージをコピー、コンテンツに署名。

#### イメージスキャンとSBOM <a id="image-scanning--sbom"></a>

イメージの脆弱性スキャナー、SBOM生成ツール、ダイジェストの固定ツール。

- [Anchor](https://github.com/SongStitch/anchor/) - Dockerfile内の依存関係を固定し、再現可能なビルドを支援。
- [Anchor Enterprise](https://anchore.com/) - 商用。イメージのCVE脆弱性を分析し、独自のセキュリティポリシーに照らして評価。
- [BomLens](https://github.com/sktelecom/bomlens) - コンテナイメージに加え、ソース、バイナリ、ファームウェアをスキャンしてCycloneDX SBOMを作成。脆弱性、ライセンス、告知事項のレポートを提供。Web UI付きの単一Dockerイメージとして配布。
- [Clair](https://github.com/quay/clair) - appcおよびDockerコンテナの脆弱性を静的解析する、オープンソースプロジェクト。
- [Docker Scout](https://github.com/docker/scout-cli) - SBOM生成、脆弱性分析、ポリシー評価に使うDocker公式CLI。
- [Grype](https://github.com/anchore/grype) - コンテナイメージ、ファイルシステム、SBOMの脆弱性スキャナー。
- [oscap-docker](https://github.com/OpenSCAP/openscap) - Dockerコンテナとイメージのスキャンに使う、OpenSCAPのoscap-dockerツール。
- [pindock](https://github.com/deadnews/pindock) - DockerfileとComposeファイル内のDockerイメージのダイジェストを固定・更新。
- [Syft](https://github.com/anchore/syft) - コンテナイメージとファイルシステムからソフトウェア部品表（SBOM）を生成するCLIツールとライブラリ。
- [Trivy](https://github.com/aquasecurity/trivy) - Aqua Securityによる、コンテナ向けのオープンソース脆弱性スキャナー。CIにも利用可能。

#### サプライチェーン <a id="supply-chain"></a>

コンテナイメージの署名、アテステーション、来歴情報。

- [cosign](https://github.com/sigstore/cosign) - OCIアーティファクトのコンテナ署名、検証、透明性ログ。
- [in-toto](https://github.com/in-toto/in-toto) - サプライチェーンのアテステーションを扱うフレームワーク。SLSAとcosignの来歴情報を支える。
- [policy-controller](https://github.com/sigstore/policy-controller) - コンテナイメージへのcosign署名を必須にする、Kubernetesのアドミッションコントローラー。
- [witness](https://github.com/in-toto/witness) - ビルドパイプライン全体でin-totoアテステーションを生成・検証。

### コンテナの実行 <a id="running-containers"></a>

#### 構成管理 <a id="composition"></a>

- [Composerize](https://github.com/magicmark/composerize) - docker runコマンドをdocker-composeファイルへ変換。
- [ctk](https://github.com/ctk-hq/ctk) - コンテナベースのワークロードを視覚的に構成するツール。
- [kompose](https://github.com/kubernetes/kompose) - Docker ComposeからKubernetesへ変換。
- [plash](https://github.com/ihucos/plash) - Docker内で動作する、コンテナの実行・ビルドエンジン。
- [podman-compose](https://github.com/containers/podman-compose) - podmanでdocker-compose.ymlを実行するスクリプト。
- [Smalte](https://github.com/roquie/smalte) - Dockerコンテナ内で静的な設定を必要とするアプリケーションを動的に設定。

#### オーケストレーション <a id="orchestration"></a>

- [CloudSlang](https://github.com/CloudSlang/cloud-slang) - Dockerの処理を自動化するワークフローエンジン。
- [docker rollout](https://github.com/Wowu/docker-rollout) - Docker Composeのサービスを無停止でデプロイ。
- [Kubernetes](https://github.com/kubernetes/kubernetes) - Googleによる、Dockerコンテナ向けのオープンソースのオーケストレーションシステム。
- [Mesos](https://github.com/apache/mesos) - コンテナ、仮想マシン、物理ホストのリソースとジョブを管理するスケジューラー。
- [Nebula](https://github.com/nebula-orchestrator) - 大規模な分散クラスターを管理するDockerオーケストレーションツール。
- [Nomad](https://github.com/hashicorp/nomad) - アプリケーションをデプロイする、分散型で高可用性を備え、データセンターを認識するスケジューラー。
- [Rancher](https://github.com/rancher/rancher) - 本番環境でDockerを運用するための総合的なプラットフォームを提供する、オープンソースプロジェクト。
- [Swarm-cronjob](https://github.com/crazy-max/swarm-cronjob) - Swarmで時刻に基づくスケジュールに従ってジョブを作成。

#### デプロイとプラットフォーム <a id="deployment--platforms"></a>

セルフホスト型とマネージド型のクラウドプラットフォーム（PaaS/CaaS、デプロイの自動化）。

- [Amazon ECS](https://aws.amazon.com/ecs/) - 商用。Dockerコンテナに対応する、EC2上の管理サービス。
- [Appfleet](https://appfleet.com/) - 商用。コンテナ化したサービスを世界各地へデプロイ・管理するエッジプラットフォーム。最寄りの拠点へ通信を振り分け、遅延を抑制。
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - 商用。完全マネージド型のKubernetesコンテナオーケストレーションサービス。
- [blackfish](https://gitlab.com/blackfish/blackfish) - 開発・本番向けのSwarmクラスターを構築する、CoreOSの仮想マシン。
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - 変化するコンテナ環境に合わせて動的に設定ファイルを書き出し、サービスを再読み込みするデーモン。
- [caprover](https://github.com/caprover/caprover) - 旧称CaptainDuckDuck。Dockerとnginxを使う、自動化された拡張可能なWebサーバーパッケージ。Herokuに似たデプロイ用プラットフォームを提供。
- [Cloud 66](https://www.cloud66.com) - 商用。フルスタックのコンテナ管理をホスティングサービスとして提供。
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - 商用。`docker-compose.yaml`ファイルを、マネージドサービスのGoogle Cloud Runへ直接デプロイ。
- [Convox Rack](https://github.com/convox/rack) - インフラの自動化とDevOpsの実践を基盤とする、オープンソースPaaS。
- [docker-to-iac](https://github.com/deploystackio/docker-to-iac) - docker runとcommitを、AWS、Render.com、DigitalOcean向けのInfrastructure as Codeテンプレートへ変換。
- [doco-cd](https://github.com/kimdre/doco-cd) - ポーリングとWebhookを使ってDocker ComposeのプロジェクトとSwarmスタックをデプロイする、軽量なGitOps・継続的デプロイツール。
- [Dokku](https://github.com/dokku/dokku) - アプリケーションの構築とライフサイクル管理を支援する、Dockerを使った小規模なHeroku型プラットフォーム。
- [Exoframe](https://github.com/exoframejs/exoframe) - Dockerを使い、単一のコマンドでデプロイできるセルフホスト型ツール。
- [Giant Swarm](https://www.giantswarm.io/) - 商用。マイクロサービス基盤。原文では、コンテナを数秒でデプロイすると説明。
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - 商用。[Kubernetes][kubernetes]を基盤とする、Google Cloud Computing上のDockerコンテナ。
- [Grafeas](https://github.com/grafeas/grafeas) - イメージやビルドの詳細、セキュリティ脆弱性など、コンテナのメタデータを扱う共通API。
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - 商用。Apache Mesosを基盤とする、データとコンテナの統合プラットフォーム。
- [OpenRun](https://github.com/openrundev/openrun) - DockerまたはKubernetesでWebアプリをビルド・デプロイし、プロキシ、認証、自動一時停止を実行。
- [OpenShift][openshift] - [Kubernetes][kubernetes]を基盤とし、[Red Hat](https://www.redhat.com/en)がDocker化アプリケーションの開発・デプロイ向けに最適化した、オープンソースPaaS。
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - 商用。Amazon Web ServicesとGoogle Cloud上の、完全マネージド型Red Hat® OpenShift®サービス。
- [swarm-ansible](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Ansibleで本番用のSwarmクラスターをセットアップ。CIの自動化、監視ツール、SSL証明書とsimple-authを事前設定したTraefik、プライベートレジストリを備える。
- [SwarmManagement](https://github.com/hansehe/SwarmManagement) - pipでインストールするPythonアプリケーション。デプロイするスタック、作成するネットワーク・設定・シークレットを単一のYAMLファイルに記述して、Docker Swarmを管理。
- [Triton](https://www.joyent.com/) - 商用。柔軟に拡張・縮小できる、コンテナを基盤とするインフラ。
- [Tsuru](https://github.com/tsuru/tsuru) - 拡張可能なオープンソースPaaSソフトウェア。
- [werf](https://github.com/werf/werf) - Dockerイメージを効率的にビルドし、GitOpsでKubernetesへデプロイするCI/CDツール。

#### ガベージコレクション <a id="garbage-collection"></a>

- [docker-custodian](https://github.com/Yelp/docker-custodian) - Dockerホストを整理するツール。
- [Docuum](https://github.com/stepchowfun/docuum) - 最後に使われた時刻が最も古いイメージから削除する、DockerイメージのLRU管理。

### ネットワークとプロキシ <a id="networking--proxies"></a>

#### ネットワーク <a id="networking"></a>

コンテナのネットワーク、オーバーレイネットワーク、DNSとサービス検出の連携。

- [Calico][calico] - 複数のDockerホスト上のコンテナ同士で通信できる、レイヤー3のみの仮想ネットワーク。
- [docker-dns](https://github.com/bytesharky/docker-dns) - Dockerコンテナ向けの軽量DNSフォワーダー。ホスト上で任意の接尾辞（例：`.docker`）を付けたコンテナ名を解決し、サービス検出を簡略化。
- [Flannel](https://github.com/coreos/flannel/) - コンテナランタイムで使うサブネットを各ホストへ割り当てる仮想ネットワーク。
- [netshoot](https://github.com/nicolaka/netshoot) - Dockerネットワークの問題調査を支援する、ネットワークツール入りのコンテナ。
- [Pipework](https://github.com/jpetazzo/pipework) - Linuxコンテナ向けのソフトウェア定義ネットワーク。通常のLXCコンテナとDockerに対応。
- [registrator](https://github.com/gliderlabs/registrator) - Docker向けのサービスレジストリ連携。

#### リバースプロキシ <a id="reverse-proxy"></a>

コンテナを認識するリバースプロキシ、イングレス、自動検出機能を備えたTLS終端のフロントエンド。

- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - オープンソースのWeb Application Firewall（WAF）。
- [caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) - サービスやコンテナのラベルで設定する、Caddyを基盤とするリバースプロキシ。
- [caddy-docker-upstreams](https://github.com/invzhi/caddy-docker-upstreams) - コンテナのラベルで設定する、Caddy用のDockerアップストリームモジュール。
- [Docker Dnsmasq Updater](https://github.com/moonbuggy/docker-dnsmasq-updater) - リモートのdnsmasqサーバーをDockerコンテナのホスト名で更新。
- [docker-flow-proxy](https://github.com/docker-flow/docker-flow-proxy) - 新しいサービスのデプロイ時やサービスの拡張時に、プロキシを再設定。
- [Let's Encrypt Nginx-proxy Companion](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - nginx-proxy用の軽量な補助コンテナ。Let's Encrypt証明書を自動的に作成・更新。
- [mesh-router](https://github.com/Yundera/mesh-router) - Dockerコンテナ向けの無料ドメイン（nsl.sh）と、自動HTTPSルーティングを提供。Wireguard VPNでネットワークをまたぐサブドメインへのリクエストを安全に振り分ける。セルフホストのNASやクラウドへのデプロイ向け。
- [Nginx Proxy Manager](https://github.com/jc21/nginx-proxy-manager) - SSLを使うWebサービスのプロキシを管理するWeb UI。
- [nginx-proxy][nginxproxy] - docker-genを使い、Dockerコンテナ用のnginxプロキシを自動設定。
- [OpenResty Manager](https://github.com/Safe3/openresty-manager) - nginxの拡張版であるOpenRestyを管理するツール。OpenResty Edgeのオープンソース代替。
- [Swarm Router](https://github.com/flavioaiello/swarm-router) - セキュリティを重視した、Docker Swarmモード用のサービス名ベースの設定不要なルーター。
- [Træfɪk](https://github.com/containous/traefik) - Docker、Mesos、Consul、Etcd向けの自動リバースプロキシとロードバランサー。

### ストレージとデータ <a id="storage--data"></a>

- [Docker Volume Backup](https://github.com/offen/docker-volume-backup) - Dockerボリュームをローカルまたは任意のS3互換ストレージへバックアップ。
- [Label Backup](https://github.com/resulgg/label-backup) - Dockerのラベルに基づき、コンテナ化したデータベース（PostgreSQL、MySQL、MongoDB、Redis）を自動検出してバックアップする軽量エージェント。ローカルとS3互換ストレージに対応し、cron式で柔軟に実行時刻を設定。
- [Netshare](https://github.com/ContainX/docker-volume-netshare) - Docker向けのNFS、AWS EFS、Ceph、Samba/CIFSボリュームプラグイン。
- [portworx](https://portworx.com) - 商用。永続的で共有・複製可能なボリュームを提供する、分散型ストレージ。
- [quobyte](https://www.quobyte.com/) - 商用。Dockerボリュームドライバーを備えた、完全な耐障害性を持つ分散ファイルシステム。
- [resq](https://github.com/mashb1t/resq) - Resticを基盤とする、Dockerのボリューム、データベース、.envファイルのバックアップ。コンテナを停止しても、停止せずにも実行可能。ローカル、SSH、任意のS3互換ストレージに対応。
- [REX-Ray](https://github.com/rexray/rexray) - ベンダーに依存しないストレージオーケストレーションエンジン。Docker、Kubernetes、Mesos向けの永続ストレージ提供を主な設計目標とする。

### オブザーバビリティ <a id="observability"></a>

Dockerホスト、コンテナ、コンテナ内のサービスを監視するツール。セルフホスト型とSaaSを掲載しています。

- [ADRG](https://github.com/jaldertech/adrg) - cgroups v2でシステム負荷を管理する、動的なDockerリソース制御ツール。
- [AppDynamics](https://github.com/Appdynamics/docker-monitoring-extension) - 商用。UnixソケットまたはTCPを介し、Docker Remote APIからメトリクスを収集するDocker監視拡張。
- [Autoheal](https://github.com/willfarrell/docker-autoheal) - 正常ではないDockerコンテナを監視し、自動再起動。
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - 商用。コンテナ化したアプリケーションのログ集約と稼働監視を行う、Docker対応のオブザーバビリティ基盤。
- [cAdvisor](https://github.com/google/cadvisor) - 実行中のコンテナのリソース使用量と性能特性を分析。
- [Datadog](https://www.datadoghq.com/) - 商用。Docker、Kubernetes、Mesosの対応を重視する、フルスタックの監視サービス。
- [DLIA](https://github.com/zorak1103/dlia) - 大規模言語モデル（LLM）でコンテナログを分析し、異常を検出して、時間の経過に伴う文脈を踏まえた情報を提示するDockerログ監視エージェント。
- [docker-exporter](https://github.com/dlepaux/docker-exporter) - Rust製の軽量なDockerコンテナメトリクス用Prometheusエクスポーター。ARM64（Raspberry Pi 5）でcgroup v2のメモリワーキングセットを正しく計測。非rootで読み取り専用ソケットを使い、待機時のRAM使用量は約7 MiB。
- [Docker-Sentinel](https://github.com/Will-Luck/Docker-Sentinel) - コンテナごとのポリシーと安全なロールバック機能を備えた自動更新。リアルタイムのWebダッシュボードを提供。
- [DockProbe](https://github.com/deep-on/dockprobe) - 単一コンテナで動作する軽量なDocker監視ダッシュボード。リアルタイムメトリクス、6つの異常検出ルール、Telegram通知、16の自動セキュリティスキャンを搭載。設定不要、RAM使用量は約50MB。
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - コンテナのI/Oをプロセス単位で監視。
- [dockprom](https://github.com/stefanprodan/dockprom) - Prometheus、Grafana、cAdvisor、NodeExporter、AlertManagerによるDockerホストとコンテナの監視。
- [Doku](https://github.com/amerkurev/doku) - Dockerのディスク使用量を監視する、シンプルなWebアプリケーション。
- [Dozzle](https://github.com/veggiemonk/awesome-docker/blob/1a39b59def0832471d79c2d2555d66481647bbaf/dozzle) - ブラウザーやモバイル端末で、コンテナログをリアルタイムに監視。
- [Drydock](https://github.com/CodesWhat/drydock) - Webダッシュボードと分散エージェント構成によるコンテナ更新の監視。23のレジストリ提供元と20の通知トリガーに対応。
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - 商用。エージェントの導入や実行コマンドの変更をせず、コンテナ化したアプリケーションを監視。
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - Docker、Grafana、Prometheusの構成向けのテンプレート。
- [InfraCanvas](https://github.com/bytestrix/InfraCanvas) - 任意のLinuxサーバー上のコンテナ、ポッド、ボリューム、ネットワークを可視化するリアルタイムのマップ。単一バイナリで、WebSocketによる更新を提供。
- [Maintenant](https://github.com/kolapsis/maintenant) - DockerとKubernetes向けの自動検出型インフラ監視。ラベルでコンテナを検出し、エンドポイント監視、ハートビート、TLS証明書、リソースメトリクス、更新情報、内蔵ステータスページを提供。SPAを組み込んだ単一バイナリ。
- [Middleware](https://middleware.io/) - 商用。Dockerホスト、コンテナ、ログ、アプリケーションの性能を統合されたオブザーバビリティ基盤で監視。
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - 商用。DevOps・IT向けのDocker監視。ホスト単位の課金モデルを採用するSaaS。
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - 商用。システムコールでコンテナを監視し、通知・問題調査を行うソフトウェアまたはSaaS。DockerとKubernetes向けのコンテナ固有の機能を搭載。
- [Wiremap](https://github.com/codeofmario/wiremap) - Dockerネットワークのトポロジーを視覚的に探索するセルフホスト型ツール。リアルタイムのログ配信、統計、埋め込みターミナル、コンテナの詳細確認に対応。

### セキュリティ <a id="security"></a>

コンテナのセキュリティ強化、実行時の保護、ポリシー、コンプライアンス、フォレンジック調査。セルフホスト型と商用のツールを掲載しています。

- [Aqua Security](https://www.aquasec.com) - 商用。あらゆるプラットフォームで、開発から本番までのコンテナ化アプリケーションを保護。
- [buildcage](https://github.com/dash14/buildcage) - Dockerビルド時の外向きネットワークアクセスを制限し、サプライチェーン攻撃を防止。Docker Buildx用の差し替え可能なBuildKitリモートドライバーとして動作し、すぐに使えるGitHub Actionsを提供。
- [CetusGuard](https://github.com/hectorm/cetusguard) - APIエンドポイントへの呼び出しをフィルタリングし、Dockerデーモンのソケットを保護するツール。
- [Checkov](https://github.com/bridgecrewio/checkov) - Infrastructure as Codeのマニフェスト（Terraform、Kubernetes、CloudFormation、Helm、Dockerfile、Kustomize）を静的解析し、セキュリティの設定不備を検出・修正。
- [compose-lint](https://github.com/tmatens/compose-lint) - OWASPとCIS Docker Benchmarkに基づき、Docker Composeファイルのセキュリティ設定不備を検査。特権コンテナ、固定されていないイメージ、Dockerソケットのマウント、平文の認証情報を対象とする。
- [container-explorer](https://github.com/google/container-explorer) - マウントしたディスクイメージからDockerとcontainerdのコンテナ詳細を探索する、フォレンジック調査用ツール。
- [Deepfence Threat Mapper](https://github.com/deepfence/ThreatMapper) - Kubernetes、仮想マシン、サーバーレス環境向けの、実行時の脆弱性スキャナー。
- [Den](https://github.com/us/den) - Dockerコンテナを使う、AIエージェント向けのセルフホスト型サンドボックスランタイム。セキュリティ強化、REST API、WebSocketに対応。
- [docker-bench-security](https://github.com/docker/docker-bench-security) - 本番環境でDockerコンテナをデプロイする際の、よく使われる推奨事項を数十項目検査するスクリプト。
- [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) - Docker APIソケットへの呼び出しを細かく制御する、HAProxyを基盤とするフィルター。リバースプロキシやホームラボの構成へ、制限付きソケットを公開する用途で使われる。
- [KICS](https://github.com/checkmarx/kics) - 開発の初期段階でセキュリティ脆弱性、コンプライアンス上の問題、インフラ設定不備を検出するInfrastructure as Codeスキャナー。追加のポリシーへ拡張可能。
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - 商用。旧称Twistlock Security Suite。アプリケーションのライフサイクル全体で、脆弱性の検出、コンテナイメージの強化、セキュリティポリシーの適用を行う。
- [segspec](https://github.com/dormstern/segspec) - Docker Compose、Kubernetesのマニフェスト、Helmチャートなどの設定からネットワーク依存関係を抽出し、根拠を追跡できるKubernetes NetworkPolicyを生成。
- [Sysdig Falco](https://github.com/falcosecurity/falco) - アプリケーション、コンテナ、ホスト、ネットワークの動作を監視し、許可されていない動作を通知する、オープンソースのコンテナセキュリティ監視ツール。
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - 商用。振る舞いの監視と防御による実行時セキュリティを提供。インシデント対応向けに、オープンソースのSysdigに基づく詳細なフォレンジック調査機能を搭載。
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - 商用。コンテナのワークロードとホストの実行時保護を提供。イメージの実行前スキャンで、脆弱性、マルウェア、ハードコードされたシークレットなどを検出。

### ユーザーインターフェース <a id="user-interfaces"></a>

#### デスクトップ <a id="desktop"></a>

Dockerホストとクラスターを管理・監視する、ネイティブのデスクトップアプリケーション。

- [Docker DB Manager](https://github.com/AbianS/docker-db-manager) - 視覚的な操作画面とワンクリック操作でDockerのデータベースコンテナを管理する、デスクトップアプリ。
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - 公式のネイティブアプリ。WindowsとmacOSのみ対応。
- [Gantry (Desktop)](https://github.com/getgantry/gantry) - ローカルとSSH経由のDockerホストを管理・監視する、macOSのネイティブアプリ（SwiftUI製、Electron不使用）。複数ホストをまとめるダッシュボード、リアルタイムのログと統計、コマンド実行ターミナル、ファイルブラウザー、AIエージェント向けの同梱MCPサーバーを提供。
- [Simple Docker UI](https://github.com/felixgborrego/simple-docker-ui) - Electron製のアプリ。
- [Stevedore](https://github.com/slonopotamus/stevedore) - Windows向けのDocker Desktop代替。LinuxコンテナとWindowsコンテナの両方に対応。[slonopotamus](https://github.com/slonopotamus)によるツール。

#### ターミナル <a id="terminal"></a>

Docker用のTUI、CLIツール、シェル連携。

- [bosun](https://github.com/psychedelicdevx/bosun) - Composeプロジェクトのグループ化、リアルタイムのログと統計、シェルアクセスを備えた、キーボード操作型のDocker用ターミナルUI。
- [d4s](https://github.com/jr-k/d4s) - Dockerコンテナ、Composeスタック、Swarmサービスを管理する、高速でキーボード操作型のターミナルUI。K9sのような操作性を提供。
- [dcinja](https://github.com/Falldog/dcinja) - Dockerのコマンドライン環境向けの、小さなバイナリのテンプレートエンジン。
- [dctl](https://github.com/FabienD/docker-stack) - ターミナル内のどこからでもDocker Composeの全コマンドを実行できるCLIツール。その他の機能も提供。
- [decompose](https://github.com/s0rg/decompose) - Docker環境のリバースエンジニアリングツール。
- [dive](https://github.com/wagoodman/dive) - Dockerイメージの各レイヤーを探索するツール。
- [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - 現在のディレクトリにあるREADME.mdをDocker HubへプッシュするDocker CLIプラグイン。QuayとHarborにも対応。
- [docker-captain](https://github.com/lucabello/docker-captain) - Typer、Rich、questionary、shを使い、複数のDocker Composeデプロイを管理するCLI。
- [dockerfile-mode](https://github.com/spotify/dockerfile-mode) - Dockerfileを扱うEmacsモード。
- [dockerfilegraph](https://github.com/patrickhoefler/dockerfilegraph) - マルチステージDockerfileを可視化。
- [dockly](https://github.com/lirantal/dockly) - Dockerコンテナを管理する、対話型のシェルUI。
- [DockMate](https://github.com/shubh-io/dockmate) - テキストUIを備えた、軽量なターミナル用Docker・Podman管理ツール。
- [DockSTARTer](https://github.com/GhostWriters/DockSTARTer) - Dockerで動作するホームサーバーアプリの導入を支援。
- [DockTUI](https://github.com/strmax195-hue/docktui) - DockerとCompose向けの、高速で依存パッケージ不要のターミナルダッシュボード。
- [dockup](https://github.com/paulo-amaral/dockup) - コンテナランタイムの導入、セキュリティ強化、保守を行うTUI。Docker EngineとCompose v2、NVIDIA Container Toolkit、Podman、Apple containerを対象とし、CISに着想を得たセキュリティ監査を提供。
- [dprs](https://github.com/durableprogramming/dprs) - リアルタイムのログ配信とコンテナ管理を備えた、開発者向けのDocker管理TUI。
- [dry](https://github.com/moncho/dry) - Dockerコンテナ向けの対話型CLI。
- [easydocker](https://github.com/joao-zanutto/easydocker) - k9sに着想を得て、BubbleTeaの描画機能を使うターミナルUI。
- [goManageDocker](https://github.com/ajayd-san/gomanagedocker) - キーバインドでDockerオブジェクトを表示・管理するTUI。VIM式の操作にも対応。
- [layerx](https://github.com/deveshctl/layerx) - コンテナイメージのレイヤーを調べるTUI。ファイルシステムの差分、ファイル内容のインライン表示、サイズ順の並べ替え、個別ファイルの抽出、効率のしきい値によるCIの判定に対応。Docker、Podman、OCIアーカイブを扱う。
- [lazydocker](https://github.com/jesseduffield/lazydocker) - Dockerとdocker-compose向けのターミナルUI。Goとgocuiライブラリで実装。
- [lazyjournal](https://github.com/Lifailon/lazyjournal) - [Dozzle](https://github.com/veggiemonk/awesome-docker/blob/1a39b59def0832471d79c2d2555d66481647bbaf/dozzle)に似た、Docker・Podmanコンテナのログを読むターミナル用UI。あいまい検索と正規表現による絞り込み、色付き出力に対応。
- [oxker](https://github.com/mrjackwills/oxker) - Dockerコンテナを表示・制御するシンプルなTUI。
- [proco](https://github.com/shiwaforce/poco) - YAML設定ファイルで、さまざまな複雑さのDocker、Docker-Compose、Kubernetesプロジェクトを整理・管理。プロジェクトの検索からローカル環境の初期化までの手順を短縮。
- [scuba](https://github.com/JonathonReinhart/scuba) - Dockerコンテナの利用を意識せずに、ソフトウェアのビルド環境をコンテナへ封じ込めるツール。
- [supdock](https://github.com/segersniels/supdock) - 対話型プロンプトでDockerを視覚的に操作。
- [swarmcli](https://github.com/Eldara-Tech/swarmcli) - リアルタイムのログ配信、コンテナへのシェルアクセス、ポート転送、必要時のシークレット表示を備えたDocker Swarm管理ツール。
- [tdocker](https://github.com/pivovarit/tdocker) - 日常的なコンテナ操作に使う、`docker ps`の代替。
- [wharf](https://github.com/idesyatov/wharf) - k9sに着想を得たDocker Compose用TUI。Vim式操作、点字文字を使うグラフでのリアルタイムCPU・メモリ監視、コンテナのファイルブラウザー、SSHによるリモートホスト接続、コマンドモードを提供。

#### ウェブ <a id="web"></a>

- [Arcane](https://github.com/getarcaneapp/arcane) - Docker管理プラットフォーム。
- [CASA](https://github.com/knrdl/casa) - 少数のコンテナの管理を同僚へ任せるためのツール。
- [Container Web TTY](https://github.com/wrfly/container-web-tty) - Web端末でコンテナへ接続。
- [Docker Commander](https://github.com/koduj-dev/docker-commander) - 複数ホストに対応する、セルフホスト型Docker管理・監視UI。Compose管理、ログ集約、通知、RBAC、脆弱性スキャン、MCP連携を提供。
- [Docker Registry Browser](https://github.com/klausmeyer/docker-registry-browser) - Docker Registry HTTP API v2のWeb UI。
- [docker-swarm-visualizer](https://github.com/dockersamples/docker-swarm-visualizer) - Docker Swarm上のDockerサービスを可視化。デモの実行向け。
- [dockge](https://github.com/louislam/dockge) - compose.yamlのスタックを管理する、リアクティブなセルフホスト型Docker管理ツール。
- [DockScope](https://github.com/ManuelR-T/dockscope) - Dockerコンテナを3Dの依存関係グラフで表示。リアルタイムのメトリクス、ログ、ブラウザー内のターミナルを提供。
- [Komodo](https://github.com/mbecker20/komodo) - 多数のサーバー上でソフトウェアをビルド・デプロイするツール。
- [Portainer](https://github.com/portainer/portainer) - DockerホストやDocker Swarmクラスターを管理する軽量UI。
- [Swarmpit](https://github.com/swarmpit/swarmpit) - Docker Swarmクラスター用のUI。スタック、サービス、シークレット、ボリューム、ネットワークなどを管理。
- [usulnet](https://github.com/fr4nsys/usulnet) - システム管理者とDevOps向けのDocker管理プラットフォーム。企業向けのツール、CVEスキャナー、Web上のSSHとRDPを提供。

#### IDE統合 <a id="ide-integrations"></a>

- JetBrains IDE（IntelliJ IDEA、GoLand、WebStorm、CLionなど）の[組み込みDockerプラグイン](https://www.jetbrains.com/help/idea/docker.html#managing-images)。
- Eclipseの[Docker Toolingプラグイン](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)。
- [docker.el](https://github.com/Silex/docker.el) - EmacsからDockerを管理。

### 開発ワークフロー <a id="developer-workflow"></a>

#### APIクライアント <a id="api-client"></a>

- [contajners](https://github.com/lispyclouds/contajners) - Clojureの慣用的な書き方とデータ駆動に対応し、REPLで扱いやすいOCIコンテナエンジンのクライアント。
- [Docker Client for JVM](https://github.com/gesellix/docker-client) - Groovy製の、JVM向けDocker Remote APIクライアントライブラリ。
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - MobyリポジトリのSwagger API定義から自動生成する、JavaScript向けのDocker APIクライアント。
- [docker-controller-bot](https://github.com/dgongut/docker-controller-bot) - Dockerコンテナを操作するTelegramボット。
- [docker-maven-plugin](https://github.com/fabric8io/docker-maven-plugin) - Dockerイメージの実行・作成用のMavenプラグイン。
- [Docker.DotNet](https://github.com/Microsoft/Docker.DotNet) - Docker Remote API用のC#/.NET HTTPクライアント。
- [Docker.Registry.DotNet](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - Docker Registry API v2を扱う.NET（C#）クライアントライブラリ。
- [dockerode](https://github.com/apocas/dockerode) - Docker Remote API用のNode.jsモジュール。
- [go-dockerclient](https://github.com/fsouza/go-dockerclient/) - Docker Remote API用のGo HTTPクライアント。
- [Gradle Docker plugin](https://github.com/gesellix/gradle-docker-plugin) - Gradle用のDocker Remote APIプラグイン。
- [Portainer stack utils](https://github.com/greenled/portainer-stack-utils) - docker-composeのYAMLファイルに基づき、Portainer内のDockerスタックをデプロイ・更新・デプロイ解除するBashスクリプト。
- [sbt-docker](https://github.com/marcuslonnberg/sbt-docker) - sbtから直接Dockerイメージを作成。

#### CI/CD

Dockerのワークフロー向けの、セルフホスト型CIエンジン、ビルドの高速化ツール、ホスティング型サービス。

- [Buddy](https://buddy.works) - 商用。Git、ビルド、デプロイのツールを一つのサービスへ統合。
- [Captain](https://github.com/harbur/captain) - 継続的デリバリーに備えて、GitのワークフローをDockerコンテナへ変換。
- [CircleCI](https://circleci.com/) - 商用。ビルド環境からDockerイメージをプッシュ・プル。CircleCI上でのコンテナのビルド・実行にも対応。
- [CodeFresh](https://octopus.com/codefresh) - 商用。Dockerアプリケーションのビルドからテスト、共有までを扱い、自動テストを提供。
- [ConcourseCI](https://concourse-ci.org) - 商用。DevOpsチーム向けの、パイプライン中心のCI SaaSプラットフォーム。
- [Defang](https://github.com/DefangLabs/defang) - Docker Composeをクラウドプラットフォームへデプロイ。原文では、数分で実行できると説明。
- [Depot](https://depot.dev) - 商用。自動キャッシュと設定不要の、クラウドでのDockerイメージビルド。
- [Diun](https://github.com/crazy-max/diun) - Dockerレジストリでイメージやリポジトリが更新されたときに通知。
- [dockcheck](https://github.com/mag37/dockcheck) - イメージをプルせずにDockerイメージの更新有無を調べ、その後、選択したコンテナまたはすべてのコンテナを自動更新するスクリプト。通知と不要データの削除も提供。
- [Docker plugin for Jenkins](https://github.com/jenkinsci/docker-plugin/) - Dockerホスト上にビルド用の実行ノードを動的に用意し、単一のビルドを実行してから、そのノードを削除するプラグイン。
- [Drone](https://github.com/drone/drone) - Dockerを基盤とし、YAMLファイルで設定する継続的インテグレーションサーバー。
- [Gantry](https://github.com/shizunge/gantry) - 選択したDocker Swarmのサービスを自動更新。
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLabのCIで、コードのテスト、ビルド、デプロイを実行するランナー。
- [Jaypore CI](https://github.com/theSage21/jaypore_ci) - Pythonで設定し、オフラインとローカルでの利用を重視するCI/CD・自動化システム。
- [Kraken CI](https://github.com/Kraken-CI/kraken) - テストを重視する、拡張可能なオープンソースのオンプレミスCI/CDシステム。Dockerの実行機構を備える。
- [Screwdriver](https://screwdriver.cd/) - 商用。継続的デリバリー向けの、Yahooによるオープンソースのビルドプラットフォーム。
- [Self Hosted Runner](https://github.com/youssefbrr/self-hosted-runner) - Linux、macOS、Windowsに対応する、セルフホスト型GitHub ActionsランナーのDocker化された構成。
- [Semaphore CI](https://semaphore.io/) - 商用。コンテナをビルド・テストして本番へ配信する、高性能なクラウドCI。
- [Skipper](https://github.com/Stratoscale/skipper) - GitリポジトリをDocker化。
- [Tekton CD](https://tekton.dev/) - クラウドネイティブなパイプラインのリソース。
- [TravisCI](https://www.travis-ci.com/) - 商用。Dockerに対応する、GitHubプロジェクト向けのホスティング型CI。

#### 開発環境 <a id="development-environment"></a>

- [coder](https://github.com/coder/coder) - TerraformまたはDockerを基盤とする、リモートの開発マシン。
- [dde](https://github.com/whatwedo/dde) - Dockerを基盤とするローカル開発環境のツール群。
- [DIP](https://github.com/bibendi/dip) - docker-composeで設定したアプリケーションのプロビジョニングと操作を簡略化するCLI。
- [EnvCLI](https://github.com/EnvCLI/EnvCLI) - ローカルへ導入するNodeやGoなどを、プロジェクトごとのDockerコンテナへ置き換えるツール。
- [Gebug](https://github.com/moshebe/gebug) - Docker化したGoアプリケーション向けの、デバッガーとホットリロード機能を備えたデバッグツール。
- [HarborPilot](https://github.com/potterwhite/HarborPilot) - 組み込みLinux開発（RK3588、RV1126、RK3568）向けの、自動マルチプラットフォームDockerイメージビルダー。3層の設定継承、PORT_SLOTによるポート割り当て、Ubuntuの複数版（20.04/22.04/24.04）に対応。
- [Lando](https://github.com/lando/lando) - プロジェクトの開発に必要なサービスとツールを指定し、起動。
- [Laradock](https://github.com/laradock/laradock) - Dockerを基盤とするPHP開発環境。入れ替え可能なComposeサービスとしてNginx/Apache、PHP、MySQL、Redisなどを実行。
- [uniget](https://github.com/uniget-org/cli) - コンテナ関連のツールなどを導入・更新するUni(versal)get。旧称docker-setup。
- [Zsh-in-Docker](https://github.com/deluan/zsh-in-docker) - 単一コマンドで、Dockerコンテナ内へZsh、Oh-My-Zsh、プラグインを導入。

#### サーバーレス <a id="serverless"></a>

- [Apache OpenWhisk](https://github.com/apache/openwhisk) - イベントに応じて関数を実行し、任意の規模に対応する、オープンソースのサーバーレスクラウドプラットフォーム。
- [Koyeb](https://www.koyeb.com/) - 商用。世界各地へアプリをデプロイするサーバーレスプラットフォーム。Gitベースのデプロイ、組み込みの自動スケーリング、世界各地のエッジネットワーク、組み込みのサービスメッシュとサービス検出により、Dockerコンテナ、Webアプリ、APIを実行。
- [OpenFaaS](https://github.com/openfaas/faas) - DockerとKubernetes向けの総合的なサーバーレス関数フレームワーク。

#### テスト <a id="testing"></a>

- [Container Structure Test](https://github.com/GoogleContainerTools/container-structure-test) - コマンド出力やファイルシステムの内容を確認して、イメージの構造を検証するフレームワーク。
- [dgoss](https://github.com/goss-org/goss/tree/master/extras/dgoss) - Dockerコンテナを検証する、高速なYAMLベースのツール。
- [Kurtosis](https://github.com/kurtosis-tech/kurtosis) - 複数コンテナのテスト環境向けの、組み合わせ可能なビルドシステム。環境設定用のPython風SDK、環境の動作とセットアップを検証するコンパイル時の検査機構、環境の実行・監視・デバッグを行うランタイムを提供。
- [Pumba](https://github.com/alexei-led/pumba) - Docker向けのカオステストツール。KubernetesとCoreOSのクラスターへデプロイ可能。

#### ラッパー <a id="wrappers"></a>

- [Hokusai](https://github.com/artsy/hokusai) - アプリケーションをコンテナ化し、開発・テスト・リリースを通じてライフサイクルを管理する、開発者向けのDockerとKubernetesのCLI。[artsy](https://github.com/artsy)によるツール。
- [Preevy](https://github.com/livecycle/preevy) - DockerとDocker Composeプロジェクトのプレビュー環境。CIパイプラインの一部として、利用するクラウドプロバイダーへプルリクエストをデプロイし、変更をテストして、開発者とそれ以外の担当者（製品・デザイン）から意見を集める。
- [subuser](https://github.com/subuser-security/subuser) - Docker内でGUIのデスクトップアプリケーションを、安全で移植可能な形で実行するためのツール。
- [udocker](https://github.com/indigo-dc/udocker) - root権限を使わず、バッチ処理や対話型のシステムでシンプルなDockerコンテナを実行するツール。
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - 導入例として、[vagrant-docker-example](https://github.com/bubenkoff/vagrant-docker-example)を参照。

### コンテナ内ツール <a id="in-container-tooling"></a>

コンテナ内へ導入するツールや、[サイドカー](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar)として実行するアプリケーション。

- [cdebug](https://github.com/iximiuz/cdebug) - 一時的なサイドカーで実行中のコンテナをデバッグする多機能ツール。Docker、containerd、Kubernetesに対応。
- [ckron](https://github.com/nicomt/ckron) - Docker用のcron型ジョブスケジューラー。
- [CoreOS][coreos] - 大規模なサーバー配備向けのLinux。
- [docker-gen](https://github.com/jwilder/docker-gen) - Dockerコンテナのメタデータからファイルを生成。
- [dockerize](https://github.com/powerman/dockerize) - Dockerコンテナ内でアプリケーションを実行する手順を簡略化するユーティリティー。
- [GoSu](https://github.com/tianon/gosu) - 指定したユーザーで指定したアプリケーションを起動し、以後の実行処理には介在しない、エントリーポイントスクリプト用ツール。
- [is-docker](https://github.com/sindresorhus/is-docker) - プロセスがDockerコンテナ内で動作しているか確認。
- [microcheck](https://github.com/tarampampam/microcheck) - 純粋なCで実装した、Dockerコンテナ用の軽量ヘルスチェックツール。httpcheckはcURLの9.3 MBに対して75 KB。HTTP(S)、ポートのチェック、並列実行に対応。
- [Ofelia](https://github.com/mcuadros/ofelia/) - 従来のcronの代替を目指す、Go製の軽量なDocker環境用ジョブスケジューラー。コンテナのラベルや設定ファイルから設定可能。
- [su-exec](https://github.com/ncopa/su-exec) - 異なる権限でプログラムを直接実行するツール。suやsudoのような子プロセスを作らず、TTYとシグナルの問題を回避。gosuとほぼ同じ処理を行い、サイズはgosuの1.8MBに対して10kb。
- [supercronic](https://github.com/aptible/supercronic) - コンテナ内での実行向けに設計した、crontab互換のジョブ実行ツール。

## 学習資料 <a id="learning-resources"></a>

### はじめに <a id="where-to-start"></a>

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) - 開発・配信でDockerを使う利点と、導入に向けた実践的な道筋。
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - マイクロサービスのアプリケーション構築を、プロジェクトを通じて学ぶ実践的なガイド。単一サービスのDockerイメージ作成とプライベートレジストリへの公開から、本番のKubernetesクラスターへのマイクロサービス全体のデプロイまでを扱う。
- [Docker Curriculum](https://github.com/prakhar1989/docker-curriculum) - Docker入門の総合的なチュートリアル。Dockerの使い方と、AWSのElastic Beanstalk・Elastic Container ServiceへのDocker化アプリのデプロイを解説。
- [Docker公式ドキュメント](https://docs.docker.com/) - 公式ドキュメント。
- [Docker for beginners](https://github.com/groda/big_data/blob/master/docker_for_beginners.md) - 「Hello world!」からコンテナの基本操作までを学ぶ初心者向けのチュートリアル。基礎となる概念も平易に解説。
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) - Dockerを初めて使う開発者とテスト担当者向けの入門。動画1時間40分。ニュージーランドのクライストチャーチで開催されたlinux.conf.au 2019で収録。
- [Docker katas](https://github.com/eficode-academy/docker-katas) - 「Hello Docker」から、コンテナ化したWebアプリをサーバーへデプロイするまでを学ぶ、一連の演習。
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4) - Dockerの概要をアニメーションで紹介。より詳しい学習資料へ進む前に、視覚的に要点を把握するための入門。
- [Docker研修](https://training.mirantis.com) - 商用。
- [Dockerlings](https://github.com/furkan/dockerlings) - TUIと短い演習を使い、ターミナル内でDockerを学ぶ教材。
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) - フランス語のDevSecOpsサイトのDocker解説。基礎から推奨事項まで、コンテナの最適化とセキュリティ強化も扱う。
- [Learn Docker](https://github.com/dwyl/learn-docker) - 手順を追って学ぶチュートリアルと、動画、記事、チートシートなどの資料。
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - Dockerの主な構成要素とそれらの関係を、初心者向けに概説。画像、例、資料を提供。
- [Play With Docker](https://training.play-with-docker.com/) - ブラウザー内でDockerを直接実行。初心者から上級者向けの資料を提供。
- [Practical Guide about Docker Commands in Spanish](https://github.com/brunocascio/docker-espanol) - Dockerの基本コマンドを実際の例で解説する、スペイン語のガイド。
- [Setting Python Development Environment with VScode and Docker](https://github.com/RamiKrispin/vscode-python) - VScode、Docker、Dev Container拡張を使い、Docker化したPython開発環境を構築する手順。
- [The Docker Handbook](https://docker-handbook.farhan.dev/) - Dockerの基礎、推奨事項、中級の機能の一部を解説するオープンソースの書籍。書籍は[fhsinchy/the-docker-handbook](https://github.com/fhsinchy/the-docker-handbook)、サンプルプロジェクトは[fhsinchy/docker-handbook-projects](https://github.com/fhsinchy/docker-handbook-projects)で公開。

チートシート

- [eon01](https://github.com/eon01/DockerCheatSheet)
- [dimonomid](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent](https://github.com/wsargent/docker-cheat-sheet)

### はじめに（Windows） <a id="where-to-start-windows"></a>

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - .NET Frameworkアプリの中からコンテナ化に適した種類を見分ける方法と、コンテナ化のリフトアンドシフト方式を解説。
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) - Docker内でASP.NETとSQL Serverのワークロードを実行するデモ。
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) - [Docker for Windows][docker-for-windows]を使い、LinuxとWindowsのコンテナでASP.NET Coreアプリを実行。
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) - 既存のASP.NETアプリをDocker化し、Windowsコンテナで実行する手順。
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - DockerでPowerShell、ASP.NET Core、ASP.NETのアプリを実行する方法を紹介する、20分の概要動画。
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) - Windowsコンテナの概要と、Windows 10・Windows Server 2016向けの入門手順。

### 書籍とチュートリアル <a id="books--tutorials"></a>

- [Cloud Native Landscape](https://github.com/cncf/landscape)
- [Dockerブログ](https://www.docker.com/blog/) - Docker、コミュニティ、ツールに関する定期的な情報。
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - 商用。実践的なプロジェクトと事例を通じ、コンテナ化、コンテナの実行、イメージ作成、Dockerfile、オーケストレーション、セキュリティの実践を学ぶ講座。Docker Certified Associateの受験準備向け。
- [Docker開発のブックマーク](https://www.codever.dev/search?q=docker) - [docker](https://www.codever.dev/bookmarks/t/docker)タグで探せるブックマーク。
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - PythonアプリのDockerパッケージ化について詳しく解説する、一連の記事。
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - オンラインのDockerチュートリアルと講座の一覧。
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

### Awesomeリスト <a id="awesome-lists"></a>

- [Awesome Compose](https://github.com/docker/awesome-compose) - Docker Composeのサンプル。
- [Awesome Kubernetes](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container](https://github.com/Friz-zy/awesome-linux-containers) - このDockerリストより広い範囲の、コンテナ全般に関する資料。
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) - 自由ソフトウェアのネットワークサービスとWebアプリのリスト。ローカルWebサーバーにアプリを設置する従来の方法や、Dockerコンテナでセルフホスト可能。
- [Awesome Sysadmin](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade](https://github.com/cjbarber/ToolsOfTheTrade) - SaaSとオンプレミスのアプリケーション一覧。

### デモとサンプル <a id="demos-and-examples"></a>

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) - プロジェクトに必要なDevOps環境を設定としてまとめ、参加時の導入を簡略化するDockerベースのローカル開発環境。
- [Local Docker DB](https://github.com/alexmacarthur/local-docker-db) - さまざまなデータベース用のdocker-composeサンプル一覧。
- [Webstack-micro](https://github.com/ferbs/webstack-micro) - Docker ComposeでAPIゲートウェイ、集中認証、バックグラウンドワーカー、WebSocketをコンテナ化したサービスとして構成する、デモ用Webアプリ。

### 実践的なヒント <a id="good-tips"></a>

- [Docker Caveats](https://docker-saigon.github.io/post/Docker-Caveats/) - 本番環境でDockerを使う際に知っておくべき事項。2016年4月11日執筆。
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](https://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

### Raspberry PiとARM <a id="raspberry-pi--arm"></a>

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) - クラスター、Swarm、Docker、Raspberry Pi用の事前導入済みSDカードイメージに関する資料。
- [Get Docker up and running on the RaspberryPi in three steps](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) - GitとDockerを使う、IoT向けのDevOps。
- [Installing, running, using Docker on armhf (ARMv7) devices](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

### セキュリティ記事 <a id="security-articles"></a>

- [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)
- [CVE Scanning Alpine images with Multi-stage builds in Docker 17.05](https://github.com/tomwillfixit/alpine-cvecheck)
- [Docker Secure Deployment Guidelines](https://github.com/AonCyberLabs/Docker-Secure-Deployment-Guidelines)
- [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/)
- [Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare](https://www.slideshare.net/slideshow/docker-security-are-your-containers-tightly-secured-to-the-ship/43834790)
- [How CVE's are handled on Offical Docker Images](https://github.com/docker-library/official-images/issues/1448)
- [Lynis](https://cisofy.com/lynis/) - Dockerの監査にも対応する、オープンソースのセキュリティ監査ツール。
- [Security Best Practices for Building Docker Images](https://linux-audit.com/tags/docker/)
- [Software Engineering Radio interview of Docker Security Team Lead (Diogo Mónica)](https://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/)
- [Ten Docker Image Security Best Practices Cheat Sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
- [Top ten most popular docker images each contain at least 30 vulnerabilities](https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/)
- [Tuning Docker with the newest security enhancements](https://opensource.com/business/15/3/docker-security-tuning)
- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

### 動画 <a id="videos"></a>

- [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06)
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) - スペイン語。
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
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) - Udacityの無料講座。
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

### コミュニティとミートアップ <a id="communities-and-meetups"></a>

#### ブラジル <a id="brazilian"></a>

- [TelegramのDocker BR](https://telegram.me/dockerbr)

#### 英語 <a id="english"></a>

- [Dockerコミュニティ](https://www.docker.com/community/)
- [Dockerイベント](https://www.docker.com/events/)
- [Dockerオンラインミートアップ](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [RedditのDockerコミュニティ](https://www.reddit.com/r/docker/)

#### ロシア語 <a id="russian"></a>

- [ロシア語のDockerコミュニティ](https://t.me/docker_ru)

#### スペイン語 <a id="spanish"></a>

- [Docker Tips](https://dockertips.com/)

[calico]: https://github.com/projectcalico/calico
[coreos]: https://github.com/coreos
[distribution]: https://github.com/docker/distribution
[docker-for-windows]: https://docs.docker.com/desktop/setup/install/windows-install/
[kubernetes]: https://kubernetes.io
[nginxproxy]: https://github.com/nginx-proxy/nginx-proxy
[openshift]: https://okd.io/
