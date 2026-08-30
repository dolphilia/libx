---
title: "Awesome Cilium"
description: "Ciliumを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-seifrajhi-awesome-cilium-readme-md"
---

# Awesome Cilium

Ciliumを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [参照ドキュメント](#reference-documentation)
- [Cilium 関連プロジェクト](#cilium-related-projects)
- [記事とプレゼンテーション](#articles-and-presentations)
- [コミュニティイベント](#community-events)
- [コミュニティとコントリビュート](#community-and-contributing)
- [ハンズオンコンテンツ](#hands-on-contents)

## 参照ドキュメント

- [Website](https://cilium.io) - もともと[Isovalent](https://isovalent.com/)が作成した Cilium の公式サイト。
- [Official GitHub repository](https://github.com/cilium) - Cilium プロジェクトの GitHub リポジトリ。
- [A cookbook of installing Cilium on AWS EKS](https://github.com/littlejo/cilium-eks-cookbook) - EKS に Cilium をインストールする複数の方法。
- [Cilium Certified Associate Study Guide](https://github.com/isovalent/CCA-Study-Guide) - Cilium コミュニティが CNCF の Cilium Certified Associate（CCA）試験を準備するための学習ガイド。

## Cilium 関連プロジェクト

- [Cilium](https://github.com/cilium/cilium) - Kubernetes、Docker、Mesos など各種コンテナーランタイム向けネットワーキングプラグイン。eBPF など Linux カーネル機能を利用し、アプリケーションに高速かつ安全なネットワーキング・ロードバランシングを提供。
- [eBPF](https://github.com/cilium/ebpf) - Linux カーネルで動的・プログラム可能なパケットフィルタリングとネットワーク分析を可能にする技術。
- [Cilium Proxy](https://github.com/cilium/proxy) - Kubernetes pods へ自動注入可能な高性能 HTTP、TCP、gRPC プロキシ。ロードバランシング、ヘルスチェック、L7 可視性を提供。
- [Cilium Cluster Mesh](https://docs.cilium.io/en/v1.9/gettingstarted/clustermesh/) - 暗号化トンネルを使って複数 Kubernetes クラスターを安全に接続。強いセキュリティ境界を維持しつつ、クラスター横断のシームレスな通信・サービス検出を可能にします。
- [Hubble](https://github.com/cilium/hubble) - Cilium コミュニティ製ネットワーク可視性・監視ツール。ネットワークトラフィックをリアルタイムに可視化し、アプリケーション動作の洞察、接続問題のトラブルシューティング、ネットワークセキュリティポリシーの適用を可能にします。
- [Cilium Operator](https://docs.cilium.io/en/stable/internals/cilium_operator/) - Kubernetes クラスター内の Cilium デプロイ・管理を簡素化する Kubernetes operator。Cilium agents のデプロイ、eBPF ポリシー設定、アップグレード処理を自動化。
- [Tetragon](https://github.com/cilium/tetragon) - ランタイムセキュリティ強制・可観測性ツール。
- [Cilium Mesh](https://isovalent.com/blog/post/introducing-cilium-mesh/) - クラウド、オンプレミス、エッジで動く Kubernetes workloads、仮想マシン、物理サーバーを接続。
- [NetworkPolicy Editor](https://editor.networkpolicy.io/) - Kubernetes ネットワークポリシーを作成、可視化、共有。
- [Prometheus & Grafana for Cilium](https://github.com/cilium/cilium/tree/main/examples/kubernetes/addons/prometheus) - Cilium からメトリクスを収集し、分析・アラートのため Prometheus に保存。
- [Cilium Helm Chart](https://artifacthub.io/packages/helm/cilium/cilium) - Kubernetes 上へ Cilium をデプロイするための Helm chart。
- [Hubble adaptor for OpenTelemetry](https://github.com/cilium/hubble-otel) - OpenTelemetry collector を使う Hubble flow data のエクスポートを有効化。
- [Packet, where are you?](https://github.com/cilium/pwru) - eBPF ベース Linux カーネルネットワーキングデバッガー。
- [Coroot](https://github.com/coroot/coroot) - テレメトリデータを実行可能な洞察へ変え、アプリケーション問題の迅速な特定・解決を支援。
- [Pixie](https://github.com/pixie-io/pixie) - 即時の Kubernetes ネイティブアプリケーション可観測性。
- [caretta](https://github.com/groundcover-com/caretta) - Grafana ですぐに使える K8s サービス依存関係マップ。
- [Netreap](https://github.com/cosmonic-labs/netreap) - Nomad 向け Cilium controller 実装。
- [Gloo Network](https://www.solo.io/products/gloo-network/) - eBPF により強化された Cilium-CNI を有効にし、モダンアプリケーション向けネットワーキング、パケットフィルタリング、可観測性を提供。
- [Bpfilter instead of iptables for routing](https://www.admin-magazine.com/Archive/2019/50/Bpfilter-offers-a-new-approach-to-packet-filtering-in-Linux) - Bpfilter は Linux のパケットフィルタリングに新しいアプローチを提供。

![image](https://github.com/seifrajhi/awesome-cilium/assets/26981510/b2236520-ea4c-400d-a5fd-15850a8bf420)

- [Inter-node traffic control](https://docs.cilium.io/en/latest/network/kubernetes/policy/#ciliumclusterwidenetworkpolicy) - クラスター全体に適用できる（非 namespaced）ポリシーで、ノードを送信元・送信先として指定できます。
- [BPF and XDP Reference Guide](http://docs.cilium.io/en/latest/bpf/) - Cilium プロジェクトによるガイド。
- [Why is the kernel community replacing iptables with BPF?](https://cilium.io/blog/2018/04/17/why-is-the-kernel-community-replacing-iptables/) - eBPF・bpfilter の動機、例、eBPF・bpfilter を使う他プロジェクトへのリンクを扱う Cilium ブログ記事。
- [Bpfilter: Linux firewall with eBPF sauce](https://qmo.fr/docs/talk_20180316_frnog_bpfilter.pdf) - eBPF の背景と bpfilter・iptables 比較を扱う Quentin Monnet の講演スライド。
- [Cilium: Networking & Security for Containers with BPF & XDP](http://www.slideshare.net/ThomasGraf5/clium-container-networking-with-bpf-xdp) - ロードバランサーのユースケースを紹介。
- [Cilium: Networking & Security for Containers with BPF & XDP](http://www.slideshare.net/Docker/cilium-bpf-xdp-for-containers-66969823) - [Video](https://www.youtube.com/watch?v=TnJF7ht3ZYc&list=PLkA60AVN3hh8oPas3cq2VA9xB7WazcIgs)。
- [Cilium: Fast IPv6 container Networking with BPF and XDP](http://www.slideshare.net/ThomasGraf5/cilium-fast-ipv6-container-networking-with-bpf-and-xdp) - BPF・XDP による高速 IPv6 コンテナネットワーキング。
- [Cilium: BPF & XDP for containers](https://fosdem.org/2017/schedule/event/cilium/) - コンテナー向け BPF・XDP。
- [Learning ebpf book](https://github.com/lizrice/learning-ebpf) - O'Reilly 出版の Learning eBPF！サンプル用 VM config を掲載。

## 記事とプレゼンテーション

- [eBPF log analytics in your Kubernetes cluster](https://www.parseable.io/blog/ebpf-log-analytics) - Cilium の Tetragon を利用して eBPF ベースのファイルアクセスログを収集し、アラート・追加分析のため Parseable へ送信。
- [Introduction to Cilium](https://www.youtube.com/watch?v=80OYrzS1dCA) - Isovalent の Thomas Graf・Liz Rice による、eBPF と Cilium 関連すべてを扱うライブ配信。
- [Cilium CNI](https://medium.com/itnext/cilium-cni-a-comprehensive-deep-dive-guide-for-networking-and-security-enthusiasts-588afbf72d5c) - ネットワーキング・セキュリティ愛好家向け包括的ディープダイブガイド。
- [Cilium for Kubernetes networking](https://blog.palark.com/why-cilium-for-kubernetes-networking/) - 使用・愛用する理由。
- [A generic introduction to Cilium](https://opensource.googleblog.com/2016/11/cilium-networking-and-security.html) - Cilium の一般的な紹介。
- [A podcast interviewing Thomas Graf](http://blog.ipspace.net/2016/10/fast-linux-packet-forwarding-with.html) - Ivan Pepelnjak が Thomas へ、2016年10月の eBPF、P4、XDP、Cilium についてインタビュー。
- [How eBPF streamlines the service mesh](https://thenewstack.io/how-ebpf-streamlines-the-service-mesh/) - eBPF が service mesh を合理化し、データプレーンをより効率的でデプロイしやすくする方法を探る。
- [From Amazon VPC CNI to Cilium with zero downtime](https://medium.com/codex/migrate-to-cilium-from-amazon-vpc-cni-with-zero-downtime-493827c6b45e) - ダウンタイムなしで Amazon VPC CNI から Cilium へ移行。
- [Cilium CNI and OKE on Oracle Cloud](https://medium.com/oracledevs/cni-adventures-with-kubernetes-on-oracle-cloud-cilium-5c6f011746d5) - Oracle Cloud 上の Cilium CNI・OKE による Kubernetes ネットワーキング。
- [Cilium in Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/azure-cni-powered-by-cilium) - Azure Kubernetes Service（AKS）で Cilium 強化 Azure CNI を構成。
- [eCHO News NEWSLETTER](https://www.linkedin.com/newsletters/echo-news-6937495018668482560/) - eBPF・Cilium 関連すべての隔週まとめ eCHO news。
- [Exploring eBPF and XDP](https://naftalyava.com/example-xdp-ebpf-code-for-handling-ingress-traffic/) - XDP の始め方に関する基本例。
- [eBPF - Rethinking the Linux Kernel](https://docs.google.com/presentation/d/1AcB4x7JCWET0ysDr0gsX-EIdQSTyBtmi6OAW7bE0jm0/edit#slide=id.g6e43ab8f8d_0_612) - Linux Kernel に JavaScript 風の eBPF 機能を追加。
- [Learn how Tetragon can stop CVEs with YAML](https://djalal.opendz.org/post/prevent-kernel-overlayfs-ubuntu-cves-with-yaml/) - YAML（bpf）により Ubuntu kernels の overlayfs 権限昇格を防止。
- [Cilium + Istio](https://www.solo.io/blog/cilium-1-14-istio/) - Istio を使った Cilium 1.14 のクイックツアー。
- [Cilium: Decoding the packet path with security groups for pods in EKS](https://medium.com/@amitmavgupta/security-groups-for-pods-in-eks-cilium-and-networking-f809cf72fc31) - EKS で pods 向けセキュリティグループを使うパケットパスを解読。
- [Cilium mutual auth … DIY](https://xxradar.medium.com/cilium-mutual-auth-diy-5d5036a82cf9) - 自己管理 Kubernetes クラスターで Cilium・mtls を設定するクイックガイド。
- [Istio service mesh with ALB in EKS](https://medium.com/@amitmavgupta/installing-cilium-in-azure-kubernetes-service-byocni-with-no-kube-proxy-825b9007b24b) - Cilium を BYOCNI モードでシームレスに導入し、iptables と比べ eBPF 機能を活用。

- [Kubernetes LoadBalance service using Cilium BGP control plane](https://medium.com/@valentin.hristev/kubernetes-loadbalance-service-using-cilium-bgp-control-plane-8a5ad416546a) - 最小の K3s Kubernetes クラスターで、ロードバランサーサービスの Cilium ベースサポートを作る過程を説明。
- [eBPF-based networking with Cilium](https://b-nova.com/en/home/content/ebpf-based-networking-with-cilium) - それは何で、何ができるのか？
- [Deploying Red Hat OpenShift with Cilium](https://isovalent.com/blog/post/deploying-red-hat-openshift-with-cilium/) - Cilium・Red Hat OpenShift デプロイのチュートリアル。
- [Setting up EKS Amazon clusters, adding Cilium to projects using Terraform and Helm, supporting GitOps, and using Karpenter for efficient resource utilization and cost savings](https://aws.plainenglish.io/architecting-for-resilience-crafting-opinionated-eks-clusters-with-karpenter-cilium-cluster-mesh-c87cee1df934) - 回復性のための設計: Karpenter・Cilium Cluster Mesh を使う意見を持った EKS クラスターの構築。
- [Kubernetes Gateway API with Cilium](https://kubito.dev/posts/kubernetes-gateway-api-cilium/) - Kubernetes 環境で Gateway API を設定するため Cilium を効果的に構成するガイダンス。
- [How to migrate from Red Hat OpenShiftSDN/OVN-Kubernetes to Cilium](https://veducate.co.uk/migrate-red-hat-openshiftsdn-ovn-kubernetes-cilium/) - OpenShiftSDN または OVN-Kubernetes から Cilium へ移行する段階的手順。
- [Setup basic L4 load balancing with Cilium CNI and Ubuiqiti Edge Router](https://www.viktorious.nl/2024/01/05/setup-basic-l4-load-balancing-with-cilium-cni-and-ubuiqiti-edge-router/) - Cilium CNI と Ubuiqiti Edge Router による基本 L4 ロードバランシングの設定。

## コミュニティイベント

- [CiliumCon](https://cilium.io/events/) - Cilium ユーザー、コントリビューター、新しいコミュニティメンバー向け終日 co-located event。
- [Isovalent Security Summer School 2023](https://isovalent.com/events/2023-07-security-summer-school/) - ハンズオンラボ付きバーチャル Security Summer School。Cilium、Tetragon、Hubble が Kubernetes セキュリティを改善する方法を学ぶ。
- [Isovalent's cilium related events](https://isovalent.com/events/) - 多様な声、革新的企業、大きなアイデアを扱うイベント。

## コミュニティとコントリビュート

- [Slack channel](https://cilium.herokuapp.com/) - ライブ会話・素早い質問には Cilium Slack workspace へ参加。
- [Twitter](https://twitter.com/ciliumproject) - 最新ニュース・発表のため Twitter で Cilium をフォロー。
- [YouTube](https://www.youtube.com/c/eBPFCiliumCommunity) - Cilium・eBPF コミュニティの動画を視聴。
- [Contributors](https://github.com/cilium/cilium/graphs/contributors) - main へのコントリビューション。

## ハンズオンコンテンツ

- [Isovalent library for Cilium](https://isovalent.com/resource-library/) - 動画、ケーススタディ、ブログ、書籍、ラボ、アナリストレポートを探す。
- [Cilium Learning Tracks](https://isovalent.com/learning-tracks/) - クラウドネットワークエンジニア、セキュリティ専門家、プラットフォームエンジニア、プラットフォーム ops（service mesh）、クラウドアーキテクト向けトラック。
- [K0S Cilium Playground](https://github.com/xinity/k0s_cilium_playground) - Clustermesh 有効の完全な bash ベース k0s Cilium playground。
- [Podcast: Kubernetes Unpacked Podcast](https://packetpushers.net/podcast/kubernetes-unpacked-022-kubernetes-networking-and-abstraction-with-cilium-and-ebpf/) - Kubernetes Unpacked 022: Cilium・eBPF による Kubernetes ネットワーキング・抽象化。
- [From Zero to Cluster Mesh: Installing and Configuring Cilium CNI on Kubernetes](https://www.youtube.com/watch?v=z8Kifl3M3LU&list=PLQpKr4_0p0jEIGtCeV4VcGd_-Jf49e1JY) - Cilium CNI をインストール・構成し、Kubernetes クラスター横断で高度な cluster mesh 機能を有効にする方法。
- [Cilium and SPIRE integration](https://github.com/accuknox/cilium-spire-tutorials) - Cilium・SPIRE 統合のチュートリアル。
- [Cilium Network policies Library](https://github.com/kubearmor/policy-templates/tree/main) - KubeArmor・Cilium 向けシステム・ネットワークポリシーテンプレートのコミュニティキュレーション済みリスト。
- [Kyverno policies for Cilium Network Policies](https://github.com/adobeSlash/cilium-kyverno) - Cilium ネットワークポリシーの作成を制御する Kyverno ポリシーの例。

## コントリビュート

> 注: Cilium は刺激的な技術であり、そのエコシステムは絶えず進化しています。この awesome リストを最新に保ち、可能な限りシグナル対ノイズ比を改善するため、_あなた_の助けを歓迎します。[フィードバック](https://github.com/seifrajhi/awesome-cilium/issues)を自由にお寄せください。

_コントリビュート前に[コントリビューションガイドライン](https://github.com/seifrajhi/awesome-cilium/blob/816653dbaaaae80cbe0a83751c2b994688ced7ab/CONTRIBUTING.md)を読んでください。_
