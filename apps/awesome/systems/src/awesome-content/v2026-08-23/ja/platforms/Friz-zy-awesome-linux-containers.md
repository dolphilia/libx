---
title: "Awesome Linux Containers"
description: "Linux Containersを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-Friz-zy-awesome-linux-containers-readme-md"
---

# Awesome Linux Containers

Linux Containersを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

* [作者について](#About-the-Author)
* [基盤技術](#foundations)
* [仕様](#specifications)
* [クラウド](#clouds)
* [オペレーティングシステム](#operating-systems)
* [ハイパーバイザー](#hypervisors)
* [コンテナ](#containers)
* [サンドボックス](#sandboxes)
* [部分アクセス](#partial-access)
* [ファイルシステム](#filesystem)
* [ダッシュボード](#dashboard)
* [ベストプラクティス](#best-practices)
* [セキュリティ](#security)
  - [ツール](#tools)
  - [リンク](#links)
  - [セキュリティ問題のレベル](#levels-of-security-problems)
  - [セキュリティ技術](#technologies-for-security)
* [その他の情報源](#another-information-sources)

<a id="about-the-author"></a>
## 作者について

こんにちは、皆さん！私の名前はフィリップです。2012年から、私は高負荷分散システムやサービス、セキュリティ、監視、継続的なデプロイメントおよびリリース管理（DevOps分野）に関わってきました。

私の趣味の一つは、DevOpsソリューションの開発およびオープンソースコミュニティへの貢献です。私の知識や経験を共有することで、自分自身および他の人々の時間を節約し、協力と学びの文化を育てようとしています。

私は、プーチンと緊密な関係を持つ独裁者ルカシェンコの抑圧的体制に対する[抗議活動](https://en.wikipedia.org/wiki/2020%E2%80%932021_Belarusian_protests)に参加したため、故郷ベラルーシを離れざるを得ませんでした。それ以来、他国で一から生活を築いています。

もし、あなたのプロジェクトを強化するために、熟練したDevOpsリーダーやアーキテクトを探しているなら、私はあなたに [LinkedIn](https://www.linkedin.com/in/filipp-frizzy-289a0360/) でつながっていただけます。また、 [GitHub](https://github.com/Friz-zy/) での私の貴重な貢献をぜひご確認ください。一緒に協力し、素晴らしいソリューションを一緒に創りましょう :)

<a id="foundations"></a>
## 基盤技術

* [OPEN CONTAINER INITIATIVE](https://www.opencontainers.org/)
オープンコンテナイニシアティブは、Linuxフンドエーションの下で設立される軽量かつオープンな統治構造であり、コンテナフォーマットおよびランタイムに関するオープンな業界標準の創出を目的としている。
* [Cloud Native Computing Foundation](https://cncf.io/)
クラウドネイティブコンピューティングファウンデーションは、技術的価値と最終ユーザーの価値に基づき、インターネット規模のコンピューティングにインスパイアされた、新しい共通コンテナ技術の創出と普及を担う。
* [Cloud Foundry Foundation](https://www.cloudfoundry.org/foundation/)
クラウドは私たちの工場である。

<a id="specifications"></a>
## 仕様

* [Open Container Specifications](https://github.com/opencontainers/specs)
このプロジェクトはオープンコンテナイニシアティブの仕様書を書く場である。これは進行中のプロジェクトである。
* [App Container basics](https://github.com/coreos/rkt/blob/master/Documentation/app-container.md)
アプリケーションコンテナ（appc）は、アプリケーションをコンテナ内で実行する際のいくつかの側面を定義するオープン仕様である：イメージフォーマット、ランタイム環境、および発見プロトコル。
* [Systemd Container Interface](https://wiki.freedesktop.org/www/Software/systemd/ContainerInterface/)
SystemdはLinuxシステムの基本的な構成要素を提供するツールセットであり、システムとサービスマネージャーとしてPID 1を実行し、システムの残りの部分を開始する。コンテナソリューションを開発する際には、以下のインターフェースをサポートすることを検討してください。
* [Nulecule Specification](https://github.com/projectatomic/atomicapp/tree/master/docs/spec)
Nuleculeは、複雑なマルチコンテナアプリケーションやサービスのパッケージングパターンとモデルを定義し、そのすべての依存関係を含む、コンテナイメージにオーケストレーションメタデータを記録することで、構築、デプロイ、監視、およびアクティブな運用管理を可能にする。
* [Oracle microcontainer manifesto](https://blogs.oracle.com/developers/the-microcontainer-manifesto)
これは新しいコンテナフォーマットではなく、単にセキュリティと安定性の観点からより良い構築方法を提供する特定のコンテナ構築手法である。
* [Cloud Native Application Bundle Specification](https://github.com/deislabs/cnab-spec)
分散アプリケーションのバンドル、インストール、管理を行うためのパッケージフォーマット仕様であり、設計上クラウドに依存しないものである。

<a id="clouds"></a>
## クラウド

* [Amazon EC2 Container Service ](https://aws.amazon.com/ecs/)
Dockerコンテナをサポートし、Amazon EC2インスタンスの管理されたクラスタ上でアプリケーションを簡単に実行できるコンテナ管理サービス。
* [Google Cloud Platform](https://cloud.google.com/container-engine/)
Google Cloud Platform上でKubernetesを活用したDockerコンテ連携。Google Container Engineは、宣言されたニーズに基づき、仮想マシンの管理されたクラスタ上でコンテナを積極的にスケジュールする。
* [Jelastic](http://jelastic.com/)
DevOps向けの共同クラウドソリューションによる無制限のPaaSおよびコンテナベースのIaaS。
* [Joyent](https://www.joyent.com/)
今日のリアルタイムWebおよびモバイルアプリケーションに求められる高性能なコンテナネイティブインフラ。
* [Kubernetes](http://kubernetes.io/)
Linuxコンテナのクラスタを1つのシステムとして管理することで、開発を加速し、運用を簡素化する。
* [Mesosphere](https://mesosphere.com/)
MesosphereデータセンターOS（DCOS）は、データセンターまたはクラウド内のすべてのマシンをカバーする新しいタイプのオペレーティングシステムであり、共有リソース上でアプリケーション、サービス、ビッグデータインフラを高柔軟性かつ高スケーラブルにデプロイできる。
* [OpenShift Origin](https://www.openshift.org/)
OpenShift Originは、継続的なアプリケーション開発およびマルチテナントデプロイに最適化された [Kubernetes](http://kubernetes.io/)の配布版であり、Kubernetesの上に開発者および運用中心のツールを追加することで、迅速なアプリケーション開発、簡単なデプロイとスケーリング、および小中規模チームの長期的なライフサイクルメンテナンスを可能にする。
* [Warden](https://github.com/cloudfoundry/warden)
隔離された、一時的な、リソース制御された環境を管理する。クラウドファウンデリ―のオープンプラットフォームアスアサービスプロジェクトの一部。
* [Virtuozzo](https://virtuozzo.com)
Virtuozzoコンテナに基づいたプラットフォームで、公開またはプライベートクラウド内の任意のベアメタルまたは仮想サーバー上に簡単に実行可能であり、内部ITおよび開発プロセスを自動化・最適化・加速する。
* [Rancher](http://rancher.com/)
Rancherは、生産環境でのコンテナのデプロイと管理を行うための完全なオープンソースプラットフォームであり、Kubernetes、Mesos、Docker Swarmの商業的にサポートされた配布版を含んでおり、あらゆるインフラ上でコンテナ化アプリケーションを簡単に実行できる。
* [Docker Swarm](https://docs.docker.com/engine/swarm/)
Docker SwarmはDockerのネイティブなクラスタリングである。
* [Azure Container Service](https://azure.microsoft.com/en-us/services/container-service/)
Azure Container Serviceは、Azure向けに特に最適化された、人気のあるオープンソースツールおよび技術の構成を提供します。
* [CIAO](https://ciao-project.github.io/)
 Intel Clear Linux OS向けのクラウド統合型高度なオーケストレータ。
* [Alibaba Cloud Container Service](https://www.alibabacloud.com/fr/product/container-service)
Container Serviceは、DockerおよびKubernetesを使用してコンテナ化アプリケーションのライフサイクルを管理できる、高性能かつスケーラブルなコンテナアプリケーション管理サービスです。
* [Nomad](https://www.nomadproject.io/)
 HashiCorp Nomadは、Linux、Windows、Macでアプリケーションとサービスをスケジュールする1つのバイナリです。これは、仮想化、コンテナ化、スタンドアローンアプリケーションをスケジュールするためのオープンソーススケジューラであり、宣言型のジョブファイルを使用します。

<a id="operating-systems"></a>
## オペレーティングシステム

* [CoreOs](https://coreos.com/)
クラスタデプロイメントに最適化された軽量Linuxオペレーティングシステムで、自動化、セキュリティ、スケーラビリティを提供し、最も重要なアプリケーションをサポートします。
* [RancherOS](http://rancher.com/rancher-os/)
RancherOSは、すべてのOSをDockerコンテナとして実行する、非常に小さなLinuxディストリビューションです。
* [Project Atomic](http://www.projectatomic.io/)
Project Atomicは、Linux Docker Kubernetes (LDK) アプリケーションスタックの最適なプラットフォームを提供します。変更不可能なインフラストラクチャを使用して、コンテナ化アプリケーションのデプロイとスケーリングを行います。
* [Snappy Ubuntu Core](https://www.ubuntu.com/cloud/snappy)
Ubuntu Coreは、大規模なクラウドコンテナデプロイメントに最適なシステムで、世界の最も人気のあるコンテナプラットフォームにトランザクショナルアップデートを提供します。
* [ResinOS](https://resinos.io/)
コンテナに特化したホストOSで、信頼性が高く、実際の運用環境で検証されています。
* [Photon](https://github.com/vmware/photon)
Photon OSは、VMwareプラットフォームに最適化された、最小限のLinuxコンテナホストです。Photonは、仮想環境におけるコンテナ化およびLinuxアプリケーションの実行を促進するための協働を促進する目的で設計されています。
* [Clear Linux Project](https://clearlinux.org)
Intelアーキテクチャ向けのClear Linuxプロジェクトは、さまざまなクラウド用途に構築されたディストリビューションです。
* [CargOS](https://cargos.io/)
CargOSは、Dockerホスト向けの新しい軽量かつオープンソースのプラットフォームで、スピード、管理性、セキュリティを目標としています。リリースは64ビットIntel/AMDCPU向けに構築されています。
* [OSv](http://osv.io/)
OSvは、クラウド向けに設計されたオープンソิースオペレーティングシステムです。基本から構築され、簡単なデプロイと管理が可能であり、優れたパフォーマンスを実現します。
* [HypriotOS](http://blog.hypriot.com/about/)
Dockerを実行するため最適化された、Debianベースの軽量Linuxオペレーティングシステムで、Raspberry Pi上でDockerを使うことを非常に簡単に行えます。
* [MCL](https://mcl.host)
MCL (*Minimal Container Linux*) は、コンテナを実行するために特別に設計された、ゼロから構築された最小限のLinuxOSです。サイズは約50MBで、数秒以内に起動します。現在はDockerの実行に最適化されています。

<a id="hypervisors"></a>
## ハイパーバイザー

* [Docker](https://github.com/veggiemonk/awesome-docker#cloud-infrastructure)
開発者およびシステム管理者向けの分散アプリケーション向けのオープンプラットフォーム。**標準的な事実**。
* [LXD](https://github.com/lxc/lxd)
LXCコンテナを管理するためのデーモンで、REST APIを提供します。
* [OpenVZ](https://openvz.org/)
OpenVZはLinux向けのコンテナベースの仮想化です。OpenVZは1つの物理サーバー上で複数の安全で分離されたLinuxコンテナ（VPSまたはVEと呼ばれる）を作成し、サーバーの利用効率を高め、アプリケーションの衝突を防ぎます。
* [MultiDocker](https://github.com/marty90/multidocker)
各ユーザーが独立したコンテナに分離された、安全なマルチユーザーDockerマシンを作成します。
* [Lithos](https://github.com/tailhook/lithos/)
Lithosは、サービスを実行するためのプロセス監視ツールおよびコンテナ化ツールです。システムの初期化としてではなく、コンテナオーケストレーションを構築するための基本的なツールとして設計されています。
* [containerd](https://containerd.io/)
コンテナランタイムで、イメージの転送・ストレージからコンテナの実行、監視、ネットワークまでを完全に管理できるもの。

<a id="containers"></a>
## コンテナ

* [runc](https://github.com/opencontainers/runc)
runcは、OCS仕様に従ってコンテナを生成・実行するためのCLIツール。
* [Bocker](https://github.com/p8952/bocker)
Dockerは約100行のbashで実装されたもの。
* [Rocket](https://github.com/coreos/rkt)
rkt（「rock-it」と発音）はLinux上でアプリケーションコンテナを実行するためのCLIツール。rktは組み立て可能で、安全かつ高速に設計されている。AppC仕様に基づいている。
* [LXC](https://github.com/lxc/lxc)
LXCは、よく知られたツール、テンプレート、ライブラリおよび言語バインディングのセット。非常に低レベルであり、非常に柔軟で、上流のカーネルがサポートしているほぼすべてのコンテナ機能をカバーしている。
* [Vagga](https://github.com/tailhook/vagga)
Vaggaは、VagrantおよびDockerにインスパイアされた、完全にユーザースペースに配置されたコンテナエンジンで、開発環境に特化している。
* [libct](https://github.com/xemul/libct)
Libctは、コンテナ管理用のライブラリで、フロントエンドプログラムがコンテナのライフサイクル全体を管理するための便利なAPIを提供する。
* [libvirt](https://libvirt.org/drvlxc.html)
近年のLinux（およびその他のOS）の仮想化機能にインタラクションするための大きなツールキット。
* [systemd-nspawn](https://wiki.archlinux.org/index.php/Systemd-nspawn)
デバッグ、テスト、ビルド用に名前空間コンテナを生成する。[systemd](https://wiki.freedesktop.org/www/Software/systemd/)の一部。
* [porto](https://github.com/yandex/porto)
Portoの主な目標は、cgroups、名前空間、マウント、ネットワークなど、複数のLinuxカーネルメカニズムを安全かつ便利にインターフェース化すること。
* [udocker](https://github.com/indigo-dc/udocker)
root権限なしで、バッチまたはインタラクティブシステム上でシンプルなコンテナを実行するための基本的なユーザツール。
* [Let Me Contain That For You](https://github.com/google/lmctfy)
LMCTFYは、Googleのコンテナスタックのオープンソース版で、Linuxアプリケーションコンテナを提供する。
* [cc-oci-runtime](https://github.com/01org/cc-oci-runtime)
Intel Clear LinuxのOCI（Open Containers Initiative）互換ランタイム。
* [railcar](https://github.com/oracle/railcar)
Railcarは、Open Containers Initiativeのランタイム仕様をRustで実装したもの。runcの参照実装に似ているが、Rustで完全に実装されており、メモリ安全を確保し、ガベージコレクタや複数スレッドのオーバーヘッドを必要としない。
* [Kata Containers](https://katacontainers.io/)
Kata Containersは、非常に軽量な仮想マシンを構築する新しいオープンソースプロジェクトで、コンテナ生態系にスムーズに統合される。
* [plash](https://github.com/ihucos/plash/)
軽量かつrootなしのコンテナ。
* [runv](https://github.com/hyperhq/runv)
仮想化ベース（KVM、Xen、QEMU）のOCIランタイム。セキュリティは隔離によって実現される。
* [podman](https://github.com/containers/libpod)
コンテナライフサイクの完全な管理。
* [firecracker](https://github.com/firecracker-microvm/firecracker)
Firecrackerは、軽量な仮想マシン（microVM）でワークロードを実行し、ハードウェア仮想化技術によるセキュリティと隔離性と、コンテナのスピードと柔軟性を組み合わせる。
* [sysbox](https://github.com/nestybox/sysbox)
Sysboxは、「runc」と同様に、安全（rootなし）なコンテナやポッドを作成し、マイクロサービスだけでなく、VMで実行されるほとんどのワークロード（例：systemd、Docker、Kubernetes）をスムーズに実行する。
* [youki](https://github.com/containers/youki)
Rustで書かれたコンテナランタイム
* [footloose](https://github.com/weaveworks/footloose)
仮想マシンに見えるコンテナ

<a id="sandboxes"></a>
## サンドボックス

* [Firejail](https://l3net.wordpress.com/projects/firejail/)
FirejailはSUIDサンドボックスプログラムであり、Linux名前空間、seccomp-bpfおよびLinux機能を用いて信頼できないアプリケーションの実行環境を制限することで、セキュリティの侵害リスクを低減する
* [NsJail](https://github.com/google/nsjail)
NsJailはLinux向けのプロセス分離ツールであり、Linuxカーネルの名前空間、リソース制御、およびseccomp-bpfシステムコールフィルタサブシステムを活用している
* [Subuser](https://github.com/subuser-security/subuser)
DockerでLinuxデスクトップを安全に
* [Snappy](https://wiki.ubuntu.com/SecurityTeam/Specifications/SnappyConfinement)
Snappy Ubuntu Coreは、トランザクションアップデートを採用した新しいUbuntuのバージョンであり、今日のUbuntuと同じライブラリを備えた最小サーバーイメージだが、アプリケーションはよりシンプルなメカニズムで提供されている
* [xdg-app](https://wiki.gnome.org/Projects/SandboxedApps)
xdg-appはLinux上でサンドボックスされたデスクトップアプリケーションを構築・配布・実行するためのシステム
* [Bubblewrap](https://github.com/projectatomic/bubblewrap)
root権限なしでLinux名前空間を使ってアプリケーションを実行できる。setuidバイナリによりユーザー名前空間が提供される
* [singularity](https://github.com/singularityware/singularity)
Linux用のユニバーサルアプリケーションコンテナ
* [Lxroot](https://github.com/parke/lxroot)
Lxrootは、chrootおよび/またはDockerの非rootユーザー向けの柔軟で軽量かつ安全な代替ツール

<a id="partial-access"></a>
## 部分アクセス

* [nsenter](http://man7.org/linux/man-pages/man1/nsenter.1.html)
他のプロセスの名前空間を使ってプログラムを実行。util-linuxの一部
* [ip-netns](http://man7.org/linux/man-pages/man8/ip-netns.8.html)
プロセスネットワーク名前空間の管理。iproute2の一部
* [unshare](http://man7.org/linux/man-pages/man1/unshare.1.html)
親プロセスと未共有の一部の名前空間を使ってプログラムを実行。util-linuxの一部
* [python-nsenter](https://github.com/zalando/python-nsenter)
このPythonパッケージは、"setns"システムコールを実行することで、Linuxカーネルの名前空間（マウント、IPC、ネット、PID、ユーザー、UTS）にアクセスできる
* [butter](https://pypi.python.org/pypi/butter)
asyncio対応のPythonライブラリで、低レベルのLinux機能（inotify、fanotify、timerfd、signalfd、eventfd、コンテナ）にインターフェースを提供
* [pyspaces](https://github.com/Friz-zy/pyspaces)
glibcを介してLinux名前空間と連携する、純粋Pythonによるもの
* [CRIU](https://criu.org/Main_Page)
ユーザー空間でのチェックポイント/復元はLinuxオペレーティングシステム向けのソフトウェアツールであり、このツールを使うことで、実行中のアプリケーション（またはその一部）を一時停止し、ハードディスクにファイルとしてチェックポイントを保存できる。CRIUはDockerおよびLXCと統合され、コンテナのライブ移動を実現している
* [Moby](https://github.com/moby/moby)
Dockerが開発したコンテナソフトウェアのための「積み木セット」のようなツールコンポーネント

<a id="filesystem"></a>
## ファイルシステム

* [container-diff](https://github.com/GoogleCloudPlatform/container-diff)
コンテナイメージの分析および比較を行うツール
* [buildah](https://github.com/projectatomic/buildah)
OCIコンテナイメージの構築を支援するツール
* [skopeo](https://github.com/projectatomic/skopeo)
リモートイメージレジストリと連携して、情報やイメージの取得、コンテンツの署名を行う
* [img](https://github.com/jessfraz/img)
スタンドアローン型であり、デーモンなし、権限なしのDockerfileおよびOCI互換のコンテナイメージビルダー
* [dgr](https://github.com/blablacar/dgr)
構成の規約に基づいて、アプリケーションコンテナイメージ（ACI）およびアプリケーションコンテナポッド（POD）を構築・設定するためのコマンドラインツール
* [Whaler](https://github.com/P3GLEG/Whaler)
Whalerは、Dockerイメージをその生成したDockerfileに逆エンジニアリングするためのツールである
* [dive](https://github.com/wagoodman/dive)
Dockerイメージ内の各レイヤーを探索するツール
* [go-containerregistry](https://github.com/google/go-containerregistry)
コンテナレジストリとの作業を行うためのGoライブラリおよびCLIツール
* [kaniko](https://github.com/GoogleContainerTools/kaniko)
Kanikoは、Dockerfile内に存在するコンテナイメージを構築するためのツールで、コンテナまたはKubernetesクラスタ内で実行可能
* [umoci](https://umo.ci/)
UmociはOCIコンテナイメージを操作するツールであり、基本的なビルドツールとして使用可能
* [docker pushrm](https://github.com/christian-korneck/docker-pushrm)
現在のディレクトリにあるREADME.mdファイルをコンテナレジストリにプッシュできるDocker CLIプラグイン。Docker Hub、Quay、Harborに対応。


<a id="dashboard"></a>
## ダッシュボード

* [LXC-Web-Panel](https://lxc-webpanel.github.io/)
UbuntuでのLXC用のウェブパネル
* [Liman](https://github.com/salihciftci/liman)
基本的なDocker監視用ウェブアプリケーション
* [portainer](https://github.com/portainer/portainer)
軽量なDocker管理UI
* [swarmpit](https://github.com/swarmpit/swarmpit)
モバイル対応の軽量Docker Swarm管理UI

<a id="best-practices"></a>
## ベストプラクティス

* [The Twelve-Factor App](https://12factor.net/)
12ファクターアプリは、ソフトウェアアセンブリアプリケーションを構築するための手法である
* [Container Best Practices](http://docs.projectatomic.io/container-best-practices/)
Project Atomicによるコンテナベースアプリケーションのアーキテクチャ、作成、管理に関するドキュメンテーションを共同で行うプロジェクト

<a id="security"></a>
## セキュリティ

<a id="tools"></a>
### ツール

* [Docker bench security](https://github.com/docker/docker-bench-security)
Dockerベンチセキュリティは、生産環境でのDockerコンテナデプロイに必要な数十のベストプラクティスをチェックするスクリプトである
* [CoreOS Clair](https://coreos.com/blog/vulnerability-analysis-for-containers/)
あなたのコンテナに対するオープンソースの脆弱性分析
* [bane](https://github.com/jfrazelle/bane)
Dockerコンテナ用のカスタムAppArmorプロファイル生成ツール
* [OpenSCAP](https://github.com/OpenSCAP/container-compliance)
OpenSCAPエコシステムは、管理者および審査者にセキュリティベースラインの評価、測定および実行を支援する複数のツールを提供する
* [drydock](https://github.com/zuBux/drydock)
Drydockは、編集可能な監査テンプレートを使用し、Dockerデーモン設定とコンテナのセキュリティを柔軟に評価する方法を提供する
* [trireme](https://www.aporeto.com/trireme/)
DockerおよびKubernetes向けのセグメンテーションによるセキュリティ
* [goss](https://github.com/aelsabbahy/goss)
サーバーのテスト／検証を迅速かつ簡単に行う
* [sockguard](https://github.com/buildkite/sockguard)
docker.sockに対するプロキシで、アクセス制御と分離された権限を強制する
* [gvisor](https://github.com/google/gvisor)
gVisorはGo言語で書かれたユーザースペースのカーネルで、Linuxシステムの大部分を実装している。Open Container Initiative（OCI）のランタイムであるrunscを含み、アプリケーションとホストカーネルの間で分離境界を提供する。runscランタイムはDockerおよびKubernetesと統合されており、サンドボックス化されたコンテナを簡単に実行できる。
* [docker-explorer](https://github.com/google/docker-explorer/)
オフラインのDocker取得を調査するためのツール
* [oci-seccomp-bpf-hook](https://github.com/containers/oci-seccomp-bpf-hook)
OCIのホックで、システムコールをトレースし、seccompプロファイルを生成する

<a id="links"></a>
### リンク
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

<a id="levels-of-security-problems"></a>
### セキュリティ問題のレベル

1) リアルなアプリケーション

* always untrusted -> know it
* suid bit -> mount with nosuid
* limit available syscall -> seccomp-bpf, grsec
* leak to another container (bug in namespaces, filesystem) -> user namespaces with different uid inside for each container: 1000 in container - 14293 and 15398 outside; security modules like selinux or apparmor

2) cron、sshなどのシステムサービス

* run as root -> isolate via bastion host or vm
* using /dev -> "devices" control group
The following device nodes are created in the container by default.
The Docker images are also mounted with nodev, which means that even if a device node was pre-created in the image, it could not be used by processes within the container to talk to the kernel.
/dev/console,/dev/null,/dev/zero,/dev/full,/dev/tty*,/dev/urandom,/dev/random,/dev/fuse
* root calls -> capabilities (cap_sys_admin warning!)
Here is the current list of capabilities that Docker uses: chown, dac_override, fowner, kill, setgid, setuid, setpcap, net_bind_service, net_raw, sys_chroot, mknod, setfcap, and audit_write.
Docker removes several of these capabilities including the following:
CAP_SETPCAP 	Modify process capabilities
CAP_SYS_MODULE 	Insert/Remove kernel modules
CAP_SYS_RAWIO 	Modify Kernel Memory
CAP_SYS_PACCT 	Configure process accounting
CAP_SYS_NICE 	Modify Priority of processes
CAP_SYS_RESOURCE 	Override Resource Limits
CAP_SYS_TIME 	Modify the system clock
CAP_SYS_TTY_CONFIG 	Configure tty devices
CAP_AUDIT_WRITE 	Write the audit log
CAP_AUDIT_CONTROL 	Configure Audit Subsystem
CAP_MAC_OVERRIDE 	Ignore Kernel MAC Policy
CAP_MAC_ADMIN 	Configure MAC Configuration
CAP_SYSLOG 	Modify Kernel printk behavior
CAP_NET_ADMIN 	Configure the network
CAP_SYS_ADMIN 	Catch all
uses /proc, /sys -> remount ro, drop cap_sys_admin; security modules like selinux or apparmor; some part of this fs are "namespace-aware"
Docker mounts these file systems into the container as "read-only" mount points.
. /sys
. /proc/sys
. /proc/sysrq-trigger
. /proc/irq
. /proc/bus
Copy-on-write file systems
Docker uses copy-on-write file systems. This means containers can use the same file system image as the base for the container. When a container writes content to the image, it gets written to a container specific file system. This prevents one container from seeing the changes of another container even if they wrote to the same file system image. Just as important, one container can not change the image content to effect the processes in another container.
* uid 0 -> user namespaces, uid 0 mappet to random uid outside

3) デバイス、ネットワーク、ファイルシステムなどのシステムサービス

* root -> more of services should work on host outside; isolate sensitive functions, run as non-privileged context
* full privileges -> isolate on kernel level

4) カーネルドライバー、ネットワークスタック、セキュリティポリシー

* absolute privileges -> run it in separate vm

5) 一般的なもの、変更不可能なインフラ

* container is ro
* write to small separate rw nosuid part

[src](http://www.slideshare.net/jpetazzo/docker-linux-containers-lxc-and-security)
[src](https://opensource.com/business/14/9/security-for-docker)

<a id="technologies-for-security"></a>
### セキュリティ技術

状況は改善されている。たとえば、ほとんどの現代のコンテナ技術は、Linuxが内蔵しているセキュリティツールを活用できる。これらのツールには、
[AppArmor](http://wiki.apparmor.net/index.php/Main_Page), [SELinux](http://selinuxproject.org/page/Main_Page) および [Seccomp](http://man7.org/linux/man-pages/man2/seccomp.2.html) ポリシー;
[Grsecurity](https://grsecurity.net/);
[Control groups (cgroups)](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Resource_Management_Guide/ch01.html);
[Kernel namespaces](http://man7.org/linux/man-pages/man7/namespaces.7.html)
[src](http://www.itworld.com/article/2920349/security/for-containers-security-is-problem-1.html)

もちろん、あなたはseccompを導入していますが、コンテナ内でselinuxを使用することはできません。なぜなら、ポリシーがネームスペースごとに設定されていないからです（?? lxcは各コンテナに対してapparmoreを使用しています...）
[sVirt](http://selinuxproject.org/page/SVirt) - selinux for kvm
[src](https://mjg59.dreamwidth.org/33170.html)

Major kernel subsystems are not namespaced like:
- SELinux
- Cgroups
- file systems under /sys
- /proc/sys, /proc/sysrq-trigger, /proc/irq, /proc/bus

Devices are not namespaced:
- /dev/mem
- /dev/sd* file system devices
- kernel modules

もし、これらのいずれかを特権プロセスとして通信したり攻撃できれば、システムを完全に制御できるのです。
[src](https://opensource.com/business/14/7/docker-security-selinux)

<a id="another-information-sources"></a>
## その他の情報源

* [sysdig-container-ecosystem](https://github.com/draios/sysdig-container-ecosystem)
コンテナやマイクロサービス周りの素晴らしい新しい技術のエコシステムは、少なくとも少し過剰に感じられる。私たちは、それらを少しでも助けられるかもしれないと考えた。ようこそ、コンテナエコシステムプロジェクトへ。
* [doger.io](http://doger.io/)
このページは、Linux上でコンテナの仕組みについての詳細を記録しようとするものである。これは、プログラム開発者がコンテナを実装したり、自らのコードにコンテナのような機能を導入するためのものにとどまらず、システム管理者やユーザーが、コンテナが内部でどのように動作しているかを理解するためのものでもある。
