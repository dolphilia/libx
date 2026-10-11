---
title: Awesome Linux Containers
description: Linuxコンテナの仕様、実行基盤、ランタイム、イメージ操作、セキュリティの資料と、隔離やカーネル機構のメモ。
licenseSource: github-Friz-zy-awesome-linux-containers-readme-md
---
# Awesome Linux Containers<a id="目次"></a><a id="作者について"></a><a id="about-the-author"></a>

Linuxコンテナの仕様、クラウド基盤、OS、ランタイム、サンドボックス、イメージ操作ツール、ダッシュボード、セキュリティ資料を探すためのリストです。隔離、権限、コンテナが利用するカーネル機構についてのメモも含みます。

以下の名称、対応状況、セキュリティ上の説明、評価は固定原文に基づく当時の記述です。現在の提供状況や安全性を確認・保証するものではありません。

## 基盤団体 <a id="基盤技術"></a> <a id="foundations"></a>

* [Open Container Initiative](https://www.opencontainers.org/) - Linux Foundationの下に設けられる、軽量でオープンなガバナンス体制。コンテナ形式とランタイムに関するオープンな業界標準の策定を目的とする。

* [Cloud Native Computing Foundation](https://cncf.io/) - 技術的な価値とエンドユーザーの価値を基準に、インターネット規模のコンピューティングを踏まえた共通コンテナ技術の策定・普及を進める財団。

* [Cloud Foundry Foundation](https://www.cloudfoundry.org/foundation/) - 原文の紹介文は「クラウドは私たちの鋳造所」。

## 仕様 <a id="specifications"></a>

* [Open Container Specifications](https://github.com/opencontainers/specs) - Open Container Initiativeの仕様を策定するプロジェクト。原文では策定作業が進行中とされている。

* [App Container basics](https://github.com/coreos/rkt/blob/master/Documentation/app-container.md) - コンテナ内でのアプリケーション実行について、イメージ形式、ランタイム環境、探索プロトコルを定めるオープン仕様appcの基本。

* [Systemd Container Interface](https://wiki.freedesktop.org/www/Software/systemd/ContainerInterface/) - Linuxの基本構成要素を提供するsystemdのコンテナ向けインターフェース。systemdのシステム・サービスマネージャーはPID 1として動作し、システムの残りを起動する。原文はコンテナ実装でこれらのインターフェースをサポートすることを勧めている。

* [Nulecule Specification](https://github.com/projectatomic/atomicapp/tree/master/docs/spec) - 複雑なマルチコンテナアプリケーションとサービスをパッケージ化するパターン・モデル。依存関係すべてと、構築・デプロイ・監視・稼働中の管理に必要なオーケストレーションメタデータをコンテナイメージ内で参照する。

* [Oracle microcontainer manifesto](https://blogs.oracle.com/developers/the-microcontainer-manifesto) - 新しいコンテナ形式ではなく、セキュリティと安定性を高めるための特定のコンテナ構築手法。

* [Cloud Native Application Bundle Specification](https://github.com/deislabs/cnab-spec) - 設計上クラウドに依存しない分散アプリケーションを、バンドル・インストール・管理するためのパッケージ形式の仕様。

## クラウド <a id="clouds"></a>

* [Amazon EC2 Container Service](https://aws.amazon.com/ecs/) - Dockerコンテナに対応し、管理されたAmazon EC2インスタンスのクラスタでアプリケーションを実行できるコンテナ管理サービス。

* [Google Cloud Platform](https://cloud.google.com/container-engine/) - Kubernetesを基盤として、Google Cloud PlatformでDockerコンテナを実行。Google Container Engineは宣言された要件に基づき、管理された仮想マシンのクラスタへコンテナをスケジュールする。

* [Jelastic](http://jelastic.com/) - DevOps向けの統合クラウドソリューションとして提供される、制限のないPaaSとコンテナベースのIaaS。

* [Joyent](https://www.joyent.com/) - 負荷の厳しいリアルタイムWeb・モバイルアプリケーション向けの、高性能なコンテナネイティブのインフラ。

* [Kubernetes](http://kubernetes.io/) - Linuxコンテナのクラスタを一つのシステムとして管理し、開発を加速して運用を簡素化。

* [Mesosphere](https://mesosphere.com/) - データセンターやクラウド内の全マシンにまたがるDatacenter Operating System（DCOS）。共有リソース上へアプリケーション、サービス、ビッグデータ基盤を柔軟かつ高い拡張性でデプロイ。

* [OpenShift Origin](https://www.openshift.org/) - 継続的なアプリケーション開発とマルチテナントでのデプロイに最適化された[Kubernetes](http://kubernetes.io/)ディストリビューション。開発者・運用者向けのツールを加え、大小のチームによる迅速な開発、容易なデプロイとスケーリング、長期的なライフサイクル保守を支援。

* [Warden](https://github.com/cloudfoundry/warden) - 隔離され、一時的で、リソースを制御した環境を管理。オープンなPaaSプロジェクトCloud Foundryの一部。

* [Virtuozzo](https://virtuozzo.com) - Virtuozzoコンテナを基盤とし、パブリック・プライベートクラウドのベアメタルサーバーや仮想サーバーで実行できるプラットフォーム。社内IT・開発プロセスを自動化・最適化・高速化。

* [Rancher](http://rancher.com/) - 本番環境でのコンテナのデプロイと管理を行う、機能を一通り備えたオープンソースプラットフォーム。Kubernetes、Mesos、Docker Swarmの商用サポート付きディストリビューションを含み、さまざまなインフラでコンテナ化アプリケーションを実行。

* [Docker Swarm](https://docs.docker.com/engine/swarm/) - Dockerに組み込まれたクラスタリング機能。

* [Azure Container Service](https://azure.microsoft.com/en-us/services/container-service/) - 広く使われるオープンソースのツール・技術の構成をAzure向けに最適化するサービス。

* [CIAO](https://ciao-project.github.io/) - Intel Clear Linux OS向けのCloud Integrated Advanced Orchestrator。

* [Alibaba Cloud Container Service](https://www.alibabacloud.com/fr/product/container-service) - DockerとKubernetesによるコンテナ化アプリケーションのライフサイクル管理に対応する、高性能で拡張性の高いコンテナアプリケーション管理サービス。

* [Nomad](https://www.nomadproject.io/) - HashiCorp Nomadは、Linux、Windows、Macでアプリケーションやサービスをスケジュールする、単一バイナリのオープンソーススケジューラー。宣言的なジョブファイルで、仮想化・コンテナ化されたアプリケーションと単体のアプリケーションをスケジュール。

## オペレーティングシステム <a id="operating-systems"></a>

* [CoreOS](https://coreos.com/) - クラスタへのデプロイ向けに設計された軽量Linux OS。重要なアプリケーションに自動化、セキュリティ、拡張性を提供。

* [RancherOS](http://rancher.com/rancher-os/) - OS全体をDockerコンテナとして実行する、小さなLinuxディストリビューション。

* [Project Atomic](http://www.projectatomic.io/) - Linux Docker Kubernetes（LDK）アプリケーションスタック向けのプラットフォーム。変更しないインフラを用いて、コンテナ化アプリケーションをデプロイ・スケール。

* [Snappy Ubuntu Core](https://www.ubuntu.com/cloud/snappy) - 大規模なクラウドのコンテナデプロイ向けのシステム。原文が「世界で最も好まれるコンテナプラットフォーム」と評する環境へ、トランザクション更新を提供。

* [ResinOS](https://resinos.io/) - コンテナ向けに調整されたホストOS。原文では、信頼性を重視して設計され、本番運用で実証されていると紹介される。

* [Photon](https://github.com/vmware/photon) - 小さなフットプリントを目指し、VMwareプラットフォーム向けに調整された最小構成のLinuxコンテナホスト。仮想化環境でコンテナ化アプリケーションやLinuxアプリケーションを動かすための協力を呼びかけるプロジェクト。

* [Clear Linux Project](https://clearlinux.org) - Intelアーキテクチャ向けに、さまざまなクラウド用途を想定して構築されたディストリビューション。

* [CargOS](https://cargos.io/) - 速度、管理のしやすさ、セキュリティを目指す、Dockerホスト向けの軽量なオープンソースプラットフォーム。64ビットIntel/AMD CPU向けのリリース。

* [OSv](http://osv.io/) - クラウド向けに設計されたオープンソースOS。容易なデプロイ・管理と優れた性能を目指して、一から構築。

* [HypriotOS](http://blog.hypriot.com/about/) - Dockerの実行に最適化された、最小構成のDebianベースOS。Raspberry PiでDockerを容易に利用。

* [MCL](https://mcl.host) - コンテナ実行専用に一から構築された、最小構成のLinux OS（Minimal Container Linux）。約50MBで数秒以内に起動し、原文時点ではDocker実行に最適化。

## ハイパーバイザー <a id="hypervisors"></a>

* [Docker](https://github.com/veggiemonk/awesome-docker#cloud-infrastructure) - 開発者・システム管理者向けの、分散アプリケーションのためのオープンプラットフォーム。原文では「事実上の標準」と評されている。

* [LXD](https://github.com/lxc/lxd) - liblxcを基盤とするデーモン。LXCコンテナを管理するREST APIを提供。

* [OpenVZ](https://openvz.org/) - Linux向けのコンテナベースの仮想化。物理サーバー一台に、安全で隔離された複数のLinuxコンテナ（VEやVPSとも呼ばれる）を作成し、サーバー利用効率を高め、アプリケーション同士の競合を防止。

* [MultiDocker](https://github.com/marty90/multidocker) - 各ユーザーを独立したコンテナへ分離する、安全なマルチユーザーDockerマシンを作成。

* [Lithos](https://github.com/tailhook/lithos/) - サービス実行用のプロセススーパーバイザーとコンテナ化ツール。システムのinitとしてではなく、コンテナオーケストレーションを構築するための基礎ツールを目指す。

* [containerd](https://containerd.io/) - イメージの転送・保存から、コンテナの実行・監視・ネットワークまで、ライフサイクル全体を管理できるコンテナランタイム。

## コンテナ <a id="containers"></a>

* [runc](https://github.com/opencontainers/runc) - 原文がOCS仕様と呼ぶ仕様に従い、コンテナを生成・実行するCLIツール。

* [Bocker](https://github.com/p8952/bocker) - 約100行のBashで実装したDocker。

* [Rocket](https://github.com/coreos/rkt) - rkt（発音は「rock-it」）は、Linuxでアプリケーションコンテナを実行するCLI。組み合わせやすさ、安全性、速度を目指し、AppC仕様を基盤に設計。

* [LXC](https://github.com/lxc/lxc) - ツール、テンプレート、ライブラリ、言語バインディングの一式。低レベルで柔軟性が高く、上流カーネルがサポートするコンテナ機能のほぼすべてをカバー。

* [Vagga](https://github.com/tailhook/vagga) - VagrantとDockerに着想を得た、完全にユーザー空間で動作するコンテナエンジン。開発環境に特化。

* [libct](https://github.com/xemul/libct) - フロントエンドのプログラムから、コンテナのライフサイクル全体を操作するAPIを提供するコンテナ管理ライブラリ。

* [libvirt](https://libvirt.org/drvlxc.html) - 比較的新しいバージョンのLinuxや他のOSが持つ仮想化機能を操作する、大規模なツールキット。

* [systemd-nspawn](https://wiki.archlinux.org/index.php/Systemd-nspawn) - デバッグ、テスト、ビルド用に名前空間で隔離したコンテナを生成。[systemd](https://wiki.freedesktop.org/www/Software/systemd/)の一部。

* [porto](https://github.com/yandex/porto) - cgroups、名前空間、マウント、ネットワークなどのLinuxカーネル機構を、便利で信頼性のあるインターフェースから利用することを目指すツール。

* [udocker](https://github.com/indigo-dc/udocker) - root権限なしで、バッチ処理環境や対話的な環境において単純なコンテナを実行するための基本的なユーザーツール。

* [Let Me Contain That For You](https://github.com/google/lmctfy) - Googleのコンテナスタックのオープンソース版LMCTFY。Linuxアプリケーションコンテナを提供。

* [cc-oci-runtime](https://github.com/01org/cc-oci-runtime) - Intel Clear LinuxのOCI（Open Containers Initiative）互換ランタイム。

* [railcar](https://github.com/oracle/railcar) - Open Container Initiativeのランタイム仕様をRustで実装。参照実装runcに似ているが、すべてRustで書くことで、ガベージコレクターや複数スレッドのオーバーヘッドを必要とせずにメモリ安全性を確保。

* [Kata Containers](https://katacontainers.io/) - コンテナのエコシステムへシームレスに組み込める、非常に軽量な仮想マシンを構築するオープンソースプロジェクト。

* [plash](https://github.com/ihucos/plash/) - 軽量でroot権限を必要としないコンテナ。

* [runv](https://github.com/hyperhq/runv) - ハイパーバイザー（KVM、Xen、QEMU）を基盤とするOCIランタイム。隔離によるセキュリティ。

* [podman](https://github.com/containers/libpod) - コンテナのライフサイクル全体を管理。

* [firecracker](https://github.com/firecracker-microvm/firecracker) - ハードウェア仮想化によるセキュリティと隔離性を、コンテナの速度・柔軟性と組み合わせた軽量仮想マシンmicroVMでワークロードを実行。

* [sysbox](https://github.com/nestybox/sysbox) - 安全でroot権限を必要としないコンテナ・Podを作る「runc」。マイクロサービスに加え、VMで動作する大半のワークロード（systemd、Docker、Kubernetesなど）もシームレスに実行。

* [youki](https://github.com/containers/youki) - Rustで書かれたコンテナランタイム。

* [footloose](https://github.com/weaveworks/footloose) - 仮想マシンのように見えるコンテナ。

## サンドボックス <a id="sandboxes"></a>

* [Firejail](https://l3net.wordpress.com/projects/firejail/) - Linux名前空間、seccomp-bpf、Linux capabilitiesを使い、信頼できないアプリケーションの実行環境を制限してセキュリティ侵害のリスクを減らすSUIDサンドボックスプログラム。

* [NsJail](https://github.com/google/nsjail) - Linuxカーネルの名前空間、リソース制御、seccomp-bpfによるシステムコールのフィルタリングを使うプロセス隔離ツール。

* [Subuser](https://github.com/subuser-security/subuser) - Dockerを使ってLinuxデスクトップを保護。

* [Snappy](https://wiki.ubuntu.com/SecurityTeam/Specifications/SnappyConfinement) - Snappy Ubuntu Coreは、トランザクション更新に対応したUbuntuの形態。原文当時のUbuntuと同じライブラリを持つ最小サーバーイメージを使い、より単純な仕組みでアプリケーションを提供。

* [xdg-app](https://wiki.gnome.org/Projects/SandboxedApps) - Linux上でサンドボックス化したデスクトップアプリケーションを構築・配布・実行するシステム。

* [Bubblewrap](https://github.com/projectatomic/bubblewrap) - root権限なしでLinux名前空間を使ってアプリケーションをサンドボックス内で実行。setuidバイナリでユーザー名前空間を提供。

* [singularity](https://github.com/singularityware/singularity) - Linux向けの汎用アプリケーションコンテナ。

* [Lxroot](https://github.com/parke/lxroot) - Linuxの非rootユーザー向けに、chrootやDockerの代替となる、柔軟で軽量、より安全なツール。

## 名前空間などへの部分アクセス <a id="部分アクセス"></a> <a id="partial-access"></a>

* [nsenter](http://man7.org/linux/man-pages/man1/nsenter.1.html) - 他のプロセスの名前空間でプログラムを実行。util-linuxの一部。

* [ip-netns](http://man7.org/linux/man-pages/man8/ip-netns.8.html) - プロセスのネットワーク名前空間を管理。iproute2の一部。

* [unshare](http://man7.org/linux/man-pages/man1/unshare.1.html) - 一部の名前空間を親プロセスと共有せずにプログラムを実行。util-linuxの一部。

* [python-nsenter](https://github.com/zalando/python-nsenter) - setnsシステムコールでLinuxカーネルの名前空間（マウント、IPC、ネットワーク、PID、ユーザー、UTS）に入るPythonパッケージ。

* [butter](https://pypi.python.org/pypi/butter) - 低レベルのLinux機能（inotify、fanotify、timerfd、signalfd、eventfd、コンテナ）を操作する、asyncio対応のPythonライブラリ。

* [pyspaces](https://github.com/Friz-zy/pyspaces) - glibcを通してLinux名前空間を扱う、純粋なPythonによる実装。

* [CRIU](https://criu.org/Main_Page) - 実行中のアプリケーションやその一部を凍結し、ファイル群としてハードディスクへチェックポイント保存できるLinux向けツールCheckpoint/Restore In Userspace。DockerやLXCと統合してコンテナのライブマイグレーションを実現。

* [Moby](https://github.com/moby/moby) - Dockerが作成した、コンテナソフトウェア向けのツール部品を組み合わせる「レゴセット」。

## ファイルシステム・イメージ <a id="ファイルシステム"></a> <a id="filesystem"></a>

* [container-diff](https://github.com/GoogleCloudPlatform/container-diff) - コンテナイメージを分析・比較するツール。

* [buildah](https://github.com/projectatomic/buildah) - OCIコンテナイメージの構築を支援するツール。

* [skopeo](https://github.com/projectatomic/skopeo) - リモートのイメージレジストリから情報・イメージを取得し、コンテンツへ署名。

* [img](https://github.com/jessfraz/img) - 単独で動作し、デーモンや特権を必要としない、Dockerfile・OCI互換のコンテナイメージビルダー。

* [dgr](https://github.com/blablacar/dgr) - 「設定より規約」に基づき、App Container Images（ACI）とApp Container Pods（POD）の構築や実行時の設定を行うコマンドラインツール。

* [Whaler](https://github.com/P3GLEG/Whaler) - Dockerイメージをリバースエンジニアリングし、それを生成したDockerfileを復元するためのツール。

* [dive](https://github.com/wagoodman/dive) - Dockerイメージの各レイヤーを調べるツール。

* [go-containerregistry](https://github.com/google/go-containerregistry) - コンテナレジストリを操作するGoライブラリとCLI群。

* [kaniko](https://github.com/GoogleContainerTools/kaniko) - コンテナ内やKubernetesクラスタ内で、Dockerfileからコンテナイメージを構築するツール。

* [umoci](https://umo.ci/) - OCIコンテナイメージを操作するツール。初歩的なビルドツールとしても利用可能。

* [docker pushrm](https://github.com/christian-korneck/docker-pushrm) - 現在のディレクトリのREADME.mdをコンテナレジストリへpushするDocker CLIプラグイン。Docker Hub、Quay、Harborに対応。

## ダッシュボード <a id="dashboard"></a>

* [LXC-Web-Panel](https://lxc-webpanel.github.io/) - Ubuntu上のLXC向けWebパネル。

* [Liman](https://github.com/salihciftci/liman) - 基本的なDocker監視Webアプリケーション。

* [portainer](https://github.com/portainer/portainer) - 軽量なDocker管理UI。

* [swarmpit](https://github.com/swarmpit/swarmpit) - モバイルでも使いやすい、軽量なDocker Swarm管理UI。

## ベストプラクティス <a id="best-practices"></a>

* [The Twelve-Factor App](https://12factor.net/) - SaaS（Software as a Service）アプリケーションを構築するための方法論。

* [Container Best Practices](http://docs.projectatomic.io/container-best-practices/) - Project Atomicによる、コンテナベースのアプリケーションのアーキテクチャ、作成、管理を文書化する共同プロジェクト。

## セキュリティ <a id="security"></a>

### ツール <a id="tools"></a>

* [Docker bench security](https://github.com/docker/docker-bench-security) - 本番環境へのDockerコンテナのデプロイに関する、一般的なベストプラクティス数十項目を調べるスクリプト。
* [CoreOS Clair](https://coreos.com/blog/vulnerability-analysis-for-containers/) - コンテナ向けのオープンソースの脆弱性分析。
* [bane](https://github.com/jfrazelle/bane) - Dockerコンテナ用のカスタムAppArmorプロファイル生成ツール。
* [OpenSCAP](https://github.com/OpenSCAP/container-compliance) - 管理者・監査者による、セキュリティ基準の評価・測定・適用を支援する複数のツール。
* [drydock](https://github.com/zuBux/drydock) - 編集可能な監査テンプレートを使い、Dockerデーモンの設定とコンテナのセキュリティを柔軟に評価。
* [trireme](https://www.aporeto.com/trireme/) - DockerとKubernetes向けの、セグメンテーションによるセキュリティ。
* [goss](https://github.com/aelsabbahy/goss) - サーバーのテスト・検証を迅速かつ容易に行うツール。
* [sockguard](https://github.com/buildkite/sockguard) - アクセス制御と権限の分離を強制する、docker.sockのプロキシ。
* [gvisor](https://github.com/google/gvisor) - Goで書かれ、Linuxシステムのインターフェースの相当部分を実装するユーザー空間カーネル。アプリケーションとホストカーネルの間に隔離境界を設けるOCIランタイムrunscを含む。runscはDockerとKubernetesに統合され、サンドボックス化したコンテナを実行。
* [docker-explorer](https://github.com/google/docker-explorer/) - オフラインで取得したDockerデータのフォレンジック調査を支援するツール。
* [oci-seccomp-bpf-hook](https://github.com/containers/oci-seccomp-bpf-hook) - システムコールをトレースし、seccompプロファイルを生成するOCIフック。

### リンク <a id="links"></a>
* [CIS Security Benchmarks](https://benchmarks.cisecurity.org/about/)
* [Are Docker containers really secure?](https://opensource.com/business/14/7/docker-security-selinux)
* [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)
* [Docker, Linux Containers (LXC), and security](http://www.slideshare.net/jpetazzo/docker-linux-containers-lxc-and-security)
* [For containers, security is problem #1](http://www.itworld.com/article/2920349/security/for-containers-security-is-problem-1.html)
* [Linux Container Security](https://mjg59.dreamwidth.org/33170.html)
* [Ask HN: Best Linux sandbox?](https://news.ycombinator.com/item?id=10030868)
* [CIS Docker 1.6 Benchmark v1.0.0](https://benchmarks.cisecurity.org/tools2/docker/CIS_Docker_1.6_Benchmark_v1.0.0.pdf)
* [Understanding docker security and best practices](https://blog.docker.com/2015/05/understanding-docker-security-and-best-practices/)
* [Update on Ubuntu Phone security issue](https://insights.ubuntu.com/2015/10/15/update-on-ubuntu-phone-security-issue/)
* [Don't expose the Docker socket (not even to a container)](https://www.lvh.io/posts/dont-expose-the-docker-socket-not-even-to-a-container/)
* [RedHat Blog](http://rhelblog.redhat.com/?s=container&submit=Search)
  - [Introduction to Linux Containers](https://access.redhat.com/articles/1353593)
  - [What’s Next for Containers? User Namespaces](http://rhelblog.redhat.com/2015/07/07/whats-next-for-containers-user-namespaces/#more-1004)
  - [Architecting Containers Part 1: Why Understanding User Space vs. Kernel Space Matters](http://rhelblog.redhat.com/2015/07/29/architecting-containers-part-1-user-space-vs-kernel-space/)
  - [Architecting Containers Part 2: Why the User Space Matters](http://rhelblog.redhat.com/2015/09/17/architecting-containers-part-2-why-the-user-space-matters-2/)
  - [Secure Your Containers with this One Weird Trick](http://rhelblog.redhat.com/2016/10/17/secure-your-containers-with-this-one-weird-trick/)
* [Why you shouldn't use ENV variables for secret data](https://diogomonica.com/2017/03/27/why-you-shouldnt-use-env-variables-for-secret-data/)
* [When to use-Docker alternatives rkt and LXD](http://searchitoperations.techtarget.com/tip/When-to-use-Docker-alternatives-rkt-and-LXD)
* [The container is a lie](https://platform.sh/blog/2020/the-container-is-a-lie/)

### セキュリティ問題のレベル <a id="levels-of-security-problems"></a>

1) 通常のアプリケーション（固定原文のメモ）

* アプリケーションは常に信頼できないものとして扱う。そのことを意識する。
* SUIDビット：nosuidでマウント。
* 利用できるシステムコールをseccomp-bpfやgrsecで制限。
* 名前空間やファイルシステムのバグによる他のコンテナへの漏出：ユーザー名前空間を使い、各コンテナで外部のUIDを変える。たとえば、コンテナ内のUID 1000を外部の14293や15398へ対応付ける。SELinuxやAppArmorなどのセキュリティモジュールを利用。

2) cronやsshなどのシステムサービス

* rootとして実行：踏み台ホストやVMで隔離。
* /devを使用：devicesコントロールグループを利用。原文では、次のデバイスノードがコンテナ内にデフォルトで作成されるとされる。また、Dockerイメージはnodevでマウントされるため、イメージ内にあらかじめデバイスノードがあっても、コンテナ内のプロセスがそれを使ってカーネルと通信することはできないと説明されている：/dev/console、 /dev/null、 /dev/zero、 /dev/full、 /dev/tty*、 /dev/urandom、 /dev/random、 /dev/fuse。
* rootが必要な呼び出し：capabilitiesを利用し、特にcap_sys_adminに注意。原文がDockerで使われるものとして挙げるのは、chown、dac_override、fowner、kill、setgid、setuid、setpcap、net_bind_service、net_raw、sys_chroot、mknod、setfcap、audit_write。原文にはDockerが除去するcapabilitiesの一覧もあり、ここでは両一覧の重複も含めて原記載を保持する。除去するものの一覧と説明は次のとおり。  
  CAP_SETPCAP — プロセスのcapabilitiesを変更。  
  CAP_SYS_MODULE — カーネルモジュールを挿入・除去。  
  CAP_SYS_RAWIO — カーネルメモリを変更。  
  CAP_SYS_PACCT — プロセスアカウンティングを設定。  
  CAP_SYS_NICE — プロセスの優先度を変更。  
  CAP_SYS_RESOURCE — リソース制限を上書き。  
  CAP_SYS_TIME — システムクロックを変更。  
  CAP_SYS_TTY_CONFIG — ttyデバイスを設定。  
  CAP_AUDIT_WRITE — 監査ログへ書き込み。  
  CAP_AUDIT_CONTROL — 監査サブシステムを設定。  
  CAP_MAC_OVERRIDE — カーネルのMACポリシーを無視。  
  CAP_MAC_ADMIN — MACの構成を設定。  
  CAP_SYSLOG — カーネルのprintkの動作を変更。  
  CAP_NET_ADMIN — ネットワークを設定。  
  CAP_SYS_ADMIN — 広範な、包括的な権限。  
  /procと/sysについて、原文は読み取り専用（ro）での再マウント、cap_sys_adminの除去、SELinuxやAppArmorなどのセキュリティモジュールの利用を挙げる。これらのファイルシステムの一部は名前空間に対応している。Dockerが読み取り専用でマウントするものとして、 /sys、 /proc/sys、 /proc/sysrq-trigger、 /proc/irq、 /proc/busを挙げている。  
  コピーオンライトのファイルシステム：原文では、Dockerコンテナは基盤となるファイルシステムイメージを共有し、書き込みはコンテナ固有のファイルシステムへ行われると説明されている。同じ基盤イメージへ書き込んでも、一方のコンテナが他方の変更を見ることはなく、イメージの内容を変更して他のコンテナ内のプロセスへ影響させることもできない。
* UID 0：ユーザー名前空間で、UID 0を外部のランダムなUIDへ対応付ける。

3) デバイス・ネットワーク・ファイルシステムのシステムサービス

* root：より多くのサービスをコンテナ外のホストで動かす。慎重な扱いを要する機能を隔離し、非特権のコンテキストで実行。
* 完全な権限：カーネルレベルで隔離。

4) カーネルドライバー・ネットワークスタック・セキュリティポリシー

* 絶対的な権限：別のVMで実行。

5) イミュータブルインフラなどの一般的な手法

* コンテナを読み取り専用（ro）にする。
* 書き込み先を、小さく分離された、nosuidでマウントする読み書き可能（rw）な領域に限定。

[出典：Docker, Linux Containers (LXC), and security](http://www.slideshare.net/jpetazzo/docker-linux-containers-lxc-and-security)
[出典：Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)

### セキュリティ技術 <a id="technologies-for-security"></a>

原文は、Linux組み込みのセキュリティツールによる改善を説明し、[AppArmor](http://wiki.apparmor.net/index.php/Main_Page)、[SELinux](http://selinuxproject.org/page/Main_Page)、[Seccomp](http://man7.org/linux/man-pages/man2/seccomp.2.html)のポリシー、[Grsecurity](https://grsecurity.net/)、[コントロールグループ（cgroups）](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Resource_Management_Guide/ch01.html)、[カーネル名前空間](http://man7.org/linux/man-pages/man7/namespaces.7.html)を挙げています。原文当時のコンテナ技術の多くで、これらを利用できると説明されています。[出典：For containers, security is problem #1](http://www.itworld.com/article/2920349/security/for-containers-security-is-problem-1.html)。

原文では、seccompを導入しても、SELinuxのポリシーが名前空間ごとに設定されないため、コンテナ内でSELinuxは使えないとされています。一方で、LXCは各コンテナにAppArmorを使うのではないかという疑問も添えられています。また、[sVirt](http://selinuxproject.org/page/SVirt)をKVM向けのSELinuxとして挙げています。[出典：Linux Container Security](https://mjg59.dreamwidth.org/33170.html)。

原文が名前空間で分離されないものとして挙げる主要なカーネルサブシステムは次のとおりです。

- SELinux
- Cgroups
- /sys以下のファイルシステム
- /proc/sys、 /proc/sysrq-trigger、 /proc/irq、 /proc/bus

デバイスや構成要素についても、次のものは名前空間で分離されないと記されています。

- /dev/mem
- /dev/sd*のファイルシステムデバイス
- カーネルモジュール

原文は、特権プロセスからこれらのいずれかと通信したり攻撃したりできる場合、システムを制御できてしまうと警告しています。[出典：Are Docker containers really secure?](https://opensource.com/business/14/7/docker-security-selinux)。

## その他の情報源 <a id="another-information-sources"></a>

* [sysdig-container-ecosystem](https://github.com/draios/sysdig-container-ecosystem) - コンテナやマイクロサービスを巡って登場する多くの技術を、読者が把握できるよう支援するContainer Ecosystem Project。

* [doger.io](http://doger.io/) - Linuxコンテナの仕組みを詳しく記録する資料。コンテナや同様の機能を実装するプログラマーに加え、内部の動作を理解したいシステム管理者やユーザーも対象。
