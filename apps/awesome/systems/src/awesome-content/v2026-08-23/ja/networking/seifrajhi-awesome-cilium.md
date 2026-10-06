---
title: "Awesome Cilium"
description: "Ciliumのネットワークとセキュリティに関する参考文書、関連プロジェクト、記事、イベント、コミュニティ、実習資料。"
licenseSource: "github-seifrajhi-awesome-cilium-readme-md"
---

# Awesome Cilium

Ciliumは、コンテナー化されたアプリケーション、マイクロサービス、仮想マシンにネットワークとセキュリティの機能を提供するオープンソースのプロジェクトです。このリストでは、参考文書、関連プロジェクト、記事とプレゼンテーション、コミュニティのイベントや交流先、実習を通じて学べる資料を探せます。

固定原文では、[Cilium](https://docs.cilium.io/en/stable)が最近[eBPFのサイトebpf.io](https://ebpf.io/)を公開したと紹介しています。このサイトを高く評価し、このリストと似た役割を持つと説明しています。[eBPF入門](https://ebpf.io/what-is-ebpf)も掲載されています。

## 参考資料 <a id="参照ドキュメント"></a>

- [公式サイト](https://cilium.io) - [Isovalent](https://isovalent.com/)が当初作成したCiliumの公式サイト。
- [公式GitHubリポジトリ](https://github.com/cilium) - CiliumプロジェクトのGitHubリポジトリ。
- [AWS EKSへのCilium導入レシピ集](https://github.com/littlejo/cilium-eks-cookbook) - EKSにCiliumをインストールする複数の方法。
- [Cilium Certified Associate学習ガイド](https://github.com/isovalent/CCA-Study-Guide) - CNCFのCilium Certified Associate（CCA）試験に向けて、Ciliumコミュニティの学習を支援するガイド。

## Cilium関連プロジェクト <a id="cilium-関連プロジェクト"></a>

- [Cilium](https://github.com/cilium/cilium) - Kubernetes、Docker、Mesosなどの各種コンテナーランタイム向けネットワークプラグイン。eBPFなどのLinuxカーネル機能を使い、アプリケーションの通信と負荷分散を提供する。固定原文では高速かつ安全と説明されている。
- [eBPF](https://github.com/cilium/ebpf) - Linuxカーネルで動的かつプログラム可能なパケットフィルタリングとネットワーク分析を可能にする技術。
- [Cilium Proxy](https://github.com/cilium/proxy) - KubernetesのPodへ自動で組み込めるHTTP、TCP、gRPCプロキシ。負荷分散、ヘルスチェック、L7の可視化を提供する。固定原文では高性能と説明されている。
- [Cilium Cluster Mesh](https://docs.cilium.io/en/v1.9/gettingstarted/clustermesh/) - 固定原文では、暗号化トンネルで複数のKubernetesクラスターを安全に接続し、強固なセキュリティ境界を維持しながら、クラスター間のシームレスな通信とサービス検出を可能にすると説明されている。
- [Hubble](https://github.com/cilium/hubble) - Ciliumコミュニティが開発した、ネットワークの可視化・監視ツール。トラフィックをリアルタイムで可視化し、アプリケーションの動作把握、接続問題の調査、ネットワークセキュリティポリシーの適用を可能にする。
- [Cilium Operator](https://docs.cilium.io/en/stable/internals/cilium_operator/) - Kubernetesクラスター内でのCiliumのデプロイと管理を簡素化するKubernetesオペレーター。Ciliumエージェントのデプロイ、eBPFポリシーの設定、アップグレード処理などを自動化する。
- [Tetragon](https://github.com/cilium/tetragon) - 実行時のセキュリティ制御と可観測性を提供するツール。
- [Cilium Mesh](https://isovalent.com/blog/post/introducing-cilium-mesh/) - クラウド、オンプレミス、エッジで稼働するKubernetesワークロード、仮想マシン、物理サーバーを接続するツール。
- [NetworkPolicy Editor](https://editor.networkpolicy.io/) - Kubernetesのネットワークポリシーを作成・可視化・共有するツール。
- [Cilium向けPrometheusとGrafana](https://github.com/cilium/cilium/tree/main/examples/kubernetes/addons/prometheus) - Ciliumのメトリクスを収集してPrometheusに保存し、分析やアラートに利用するツール。
- [Cilium Helm Chart](https://artifacthub.io/packages/helm/cilium/cilium) - KubernetesにCiliumをデプロイするためのHelmチャート。
- [OpenTelemetry向けHubbleアダプター](https://github.com/cilium/hubble-otel) - OpenTelemetry Collectorを使ってHubbleのフローデータをエクスポートするツール。
- [Packet, where are you?](https://github.com/cilium/pwru) - eBPFを基盤とするLinuxカーネルのネットワークデバッガー。
- [Coroot](https://github.com/coroot/coroot) - テレメトリデータを対処に役立つ情報へ変え、アプリケーションの問題を迅速に特定・解決する作業を支援するツール。
- [Pixie](https://github.com/pixie-io/pixie) - Kubernetesネイティブのアプリケーション可観測性ツール。固定原文ではすぐに利用できると説明されている。
- [caretta](https://github.com/groundcover-com/caretta) - Grafanaで使えるK8sサービスの依存関係マップ。固定原文ではすぐに利用できると説明されている。
- [Netreap](https://github.com/cosmonic-labs/netreap) - Nomad向けのCiliumコントローラー実装。
- [Gloo Network](https://www.solo.io/products/gloo-network/) - eBPFを基盤とするCilium-CNIで、現代のアプリケーションにネットワーク、パケットフィルタリング、可観測性を提供するツール。
- [ルーティングでiptablesに代えてBpfilterを使う](https://www.admin-magazine.com/Archive/2019/50/Bpfilter-offers-a-new-approach-to-packet-filtering-in-Linux) - Linuxのパケットフィルタリングに対するBpfilterの新しいアプローチを扱う資料。

[コンテナーネットワークの比較図](https://github.com/seifrajhi/awesome-cilium/assets/26981510/b2236520-ea4c-400d-a5fd-15850a8bf420)：両側のPodには、Process、Socket、iptables INPUT、Linux Routing、iptables PREROUTING mangle、iptables Conntrack、ホストに接続するvethが描かれています。標準構成のホスト側にはiptables FORWARD、POSTROUTINGのmangleとnat、PREROUTINGのnatとmangle、Conntrack、Linux Routing、eth0があり、iptablesとConntrackのオーバーヘッド、vethペアのコンテキスト切り替えのオーバーヘッドが注記されています。CiliumのeBPF構成ではホスト側のiptablesとConntrackが灰色で示され、eth0からeBPF Host Routingを介してvethへ接続し、Linux Routingへの経路を破線で示しています。Pod側のiptablesの処理要素は残っています。

- [ノード間のトラフィック制御](https://docs.cilium.io/en/latest/network/kubernetes/policy/#ciliumclusterwidenetworkpolicy) - 名前空間に属さずクラスター全体に適用するポリシー。ノードを送信元と送信先に指定できる。
- [BPFとXDPのリファレンスガイド](http://docs.cilium.io/en/latest/bpf/) - Ciliumプロジェクトによるガイド。
- [カーネルコミュニティがiptablesをBPFに置き換える理由](https://cilium.io/blog/2018/04/17/why-is-the-kernel-community-replacing-iptables/) - eBPFとbpfilterの動機を説明するCiliumのブログ記事。使用例と、eBPFやbpfilterを使う他のプロジェクトへのリンクを掲載。
- [Bpfilter：eBPFを使うLinuxファイアウォール](https://qmo.fr/docs/talk_20180316_frnog_bpfilter.pdf) - eBPFの背景と、bpfilterとiptablesの比較を扱うQuentin Monnetの講演スライド。
- [Cilium：BPFとXDPによるコンテナーのネットワークとセキュリティ](http://www.slideshare.net/ThomasGraf5/clium-container-networking-with-bpf-xdp) - ロードバランサーの使用例を扱う資料。
- [Cilium：BPFとXDPによるコンテナーのネットワークとセキュリティ](http://www.slideshare.net/Docker/cilium-bpf-xdp-for-containers-66969823) - [動画](https://www.youtube.com/watch?v=TnJF7ht3ZYc&list=PLkA60AVN3hh8oPas3cq2VA9xB7WazcIgs)。
- [Cilium：BPFとXDPによる高速なIPv6コンテナーネットワーク](http://www.slideshare.net/ThomasGraf5/cilium-fast-ipv6-container-networking-with-bpf-and-xdp) - BPFとXDPによる高速なIPv6コンテナーネットワークを扱う資料。
- [Cilium：コンテナー向けのBPFとXDP](https://fosdem.org/2017/schedule/event/cilium/) - コンテナー向けのBPFとXDPを扱う資料。
- [Learning eBPFの書籍資料](https://github.com/lizrice/learning-ebpf) - O'Reilly刊のLearning eBPFに掲載されたサンプル用の仮想マシン設定。

## 記事とプレゼンテーション

- [Kubernetesクラスター内のeBPFログ分析](https://www.parseable.io/blog/ebpf-log-analytics) - CiliumのTetragonでeBPFによるファイルアクセスログを取得し、アラートや追加分析のためにParseableへ送信する方法。
- [Cilium入門](https://www.youtube.com/watch?v=80OYrzS1dCA) - IsovalentのThomas GrafとLiz Riceによる、eBPFとCiliumに関する幅広い話題を扱うライブ配信。
- [Cilium CNI](https://medium.com/itnext/cilium-cni-a-comprehensive-deep-dive-guide-for-networking-and-security-enthusiasts-588afbf72d5c) - ネットワークとセキュリティに関心がある人向けの包括的な詳解ガイド。
- [KubernetesのネットワークにCiliumを使う](https://blog.palark.com/why-cilium-for-kubernetes-networking/) - 著者らがCiliumを利用し、好んでいる理由を説明する記事。
- [Ciliumの一般的な入門](https://opensource.googleblog.com/2016/11/cilium-networking-and-security.html) - Ciliumを紹介する資料。
- [Thomas Grafへのインタビューポッドキャスト](http://blog.ipspace.net/2016/10/fast-linux-packet-forwarding-with.html) - 2016年10月にIvan PepelnjakがThomas Grafへ、eBPF、P4、XDP、Ciliumについて聞いたインタビュー。
- [eBPFがサービスメッシュを効率化する仕組み](https://thenewstack.io/how-ebpf-streamlines-the-service-mesh/) - eBPFによってサービスメッシュを簡素化し、データプレーンを効率的でデプロイしやすくする方法を探る記事。
- [Amazon VPC CNIからCiliumへ無停止で移行する](https://medium.com/codex/migrate-to-cilium-from-amazon-vpc-cni-with-zero-downtime-493827c6b45e) - ダウンタイムなしでAmazon VPC CNIからCiliumへ移行する方法。
- [Oracle CloudのCilium CNIとOKE](https://medium.com/oracledevs/cni-adventures-with-kubernetes-on-oracle-cloud-cilium-5c6f011746d5) - Oracle CloudでCilium CNIとOKEを使うKubernetesネットワークを扱う記事。
- [Azure Kubernetes Service（AKS）のCilium](https://learn.microsoft.com/en-us/azure/aks/azure-cni-powered-by-cilium) - Azure Kubernetes Service（AKS）で、Ciliumを基盤とするAzure CNIを構成する方法。
- [eCHO Newsニュースレター](https://www.linkedin.com/newsletters/echo-news-6937495018668482560/) - eBPFとCiliumの話題をまとめるeCHO news。原文の配信頻度はbi-weeklyで、週2回か隔週かは明確にされていません。
- [eBPFとXDPを学ぶ](https://naftalyava.com/example-xdp-ebpf-code-for-handling-ingress-traffic/) - XDPを使い始めるための基本的な例。
- [eBPF：Linuxカーネルを再考する](https://docs.google.com/presentation/d/1AcB4x7JCWET0ysDr0gsX-EIdQSTyBtmi6OAW7bE0jm0/edit#slide=id.g6e43ab8f8d_0_612) - eBPFによってLinuxカーネルにもたらされるJavaScriptのような機能を扱う資料。
- [TetragonとYAMLでCVEの問題を防ぐ](https://djalal.opendz.org/post/prevent-kernel-overlayfs-ubuntu-cves-with-yaml/) - YAML（bpf）でUbuntuカーネルのoverlayfsを通じた権限昇格を防ぐ方法。
- [CiliumとIstio](https://www.solo.io/blog/cilium-1-14-istio/) - Cilium 1.14とIstioを手短に紹介する資料。
- [Cilium：EKSのPod向けセキュリティグループを使うパケット経路の解説](https://medium.com/@amitmavgupta/security-groups-for-pods-in-eks-cilium-and-networking-f809cf72fc31) - EKSでPod向けセキュリティグループを使ったパケット経路を解説する記事。
- [Ciliumの相互認証を自分で設定する](https://xxradar.medium.com/cilium-mutual-auth-diy-5d5036a82cf9) - 自分で管理するKubernetesクラスターにCiliumとmTLSを設定するための簡単なガイド。
- [Cilium：kube-proxyを使わずAKSにBYOCNIで導入する](https://medium.com/@amitmavgupta/installing-cilium-in-azure-kubernetes-service-byocni-with-no-kube-proxy-825b9007b24b) - CiliumをBYOCNIモードで導入し、iptablesと比較してeBPFの機能を利用する方法。固定原文ではシームレスに導入できると説明されている。
- [Cilium BGPコントロールプレーンを使うKubernetesの負荷分散サービス](https://medium.com/@valentin.hristev/kubernetes-loadbalance-service-using-cilium-bgp-control-plane-8a5ad416546a) - 最小構成のK3s Kubernetesクラスターで、Ciliumを使って負荷分散サービスへの対応を実現する手順。
- [CiliumによるeBPFベースのネットワーク](https://b-nova.com/en/home/content/ebpf-based-networking-with-cilium) - 何であり、何ができるかを説明する資料。
- [Red Hat OpenShiftへのCiliumのデプロイ](https://isovalent.com/blog/post/deploying-red-hat-openshift-with-cilium/) - CiliumとRed Hat OpenShiftをデプロイするチュートリアル。
- [TerraformとHelmでCiliumを導入し、GitOpsとKarpenterを使うEKSクラスター構築](https://aws.plainenglish.io/architecting-for-resilience-crafting-opinionated-eks-clusters-with-karpenter-cilium-cluster-mesh-c87cee1df934) - KarpenterとCilium Cluster Meshを使い、設計方針を定めて耐障害性を高めるEKSクラスターの構築。TerraformとHelmによるCilium導入、GitOpsへの対応、Karpenterによる資源の効率利用と費用削減を扱う。
- [Ciliumを使うKubernetes Gateway API](https://kubito.dev/posts/kubernetes-gateway-api-cilium/) - Kubernetes環境でGateway APIを利用するためにCiliumを効果的に構成する方法。
- [Red Hat OpenShiftSDN／OVN-KubernetesからCiliumへの移行](https://veducate.co.uk/migrate-red-hat-openshiftsdn-ovn-kubernetes-cilium/) - OpenShiftSDNまたはOVN-KubernetesからCiliumへ移行する手順。
- [Cilium CNIとUbuiqiti Edge Routerによる基本的なL4負荷分散](https://www.viktorious.nl/2024/01/05/setup-basic-l4-load-balancing-with-cilium-cni-and-ubuiqiti-edge-router/) - Cilium CNIとUbuiqiti Edge Routerで基本的なL4負荷分散を設定する方法。

## コミュニティイベント

- [CiliumCon](https://cilium.io/events/) - Ciliumのユーザー、貢献者、新しいコミュニティ参加者向けに、別のイベントと併催される終日のイベント。
- [Isovalent Security Summer School 2023](https://isovalent.com/events/2023-07-security-summer-school/) - 実習付きのオンラインセキュリティサマースクール。Cilium、Tetragon、HubbleでKubernetesのセキュリティを改善する方法を学ぶ。
- [IsovalentのCilium関連イベント](https://isovalent.com/events/) - 固定原文では、多様な立場、革新的な企業、大きなアイデアを取り上げると紹介されているイベント。

## コミュニティ <a id="コミュニティとコントリビュート"></a>

- [Slackチャンネル](https://cilium.herokuapp.com/) - リアルタイムの会話や短い質問に使えるCiliumのSlackワークスペース。
- [Twitter](https://twitter.com/ciliumproject) - Ciliumのニュースと発表を読めるTwitterアカウント。
- [YouTube](https://www.youtube.com/c/eBPFCiliumCommunity) - CiliumとeBPFコミュニティの動画。
- [Ciliumの貢献者](https://github.com/cilium/cilium/graphs/contributors) - Ciliumのmainブランチへの貢献者情報。

## ハンズオン教材 <a id="ハンズオンコンテンツ"></a>

- [IsovalentのCilium資料ライブラリ](https://isovalent.com/resource-library/) - 動画、事例、ブログ、書籍、実習、アナリストレポートを探せる資料集。
- [Cilium Learning Tracks](https://isovalent.com/learning-tracks/) - クラウドネットワークエンジニア、セキュリティ専門家、プラットフォームエンジニア、サービスメッシュのプラットフォーム運用担当者、クラウドアーキテクト向けの学習コース。
- [K0S Cilium Playground](https://github.com/xinity/k0s_cilium_playground) - 全体がBashを基盤とし、Cluster Meshを有効にしたk0s Ciliumの実験環境。
- [Kubernetes Unpackedポッドキャスト](https://packetpushers.net/podcast/kubernetes-unpacked-022-kubernetes-networking-and-abstraction-with-cilium-and-ebpf/) - Kubernetes Unpackedの第022回。CiliumとeBPFによるKubernetesのネットワークと抽象化を扱う。
- [Cluster Meshへの第一歩：KubernetesにCilium CNIを導入・構成する](https://www.youtube.com/watch?v=z8Kifl3M3LU&list=PLQpKr4_0p0jEIGtCeV4VcGd_-Jf49e1JY) - Cilium CNIをインストール・構成し、複数のKubernetesクラスターにまたがる高度なCluster Mesh機能を有効にする方法。
- [CiliumとSPIREの統合](https://github.com/accuknox/cilium-spire-tutorials) - CiliumとSPIREを統合するチュートリアル。
- [Ciliumのネットワークポリシーライブラリ](https://github.com/kubearmor/policy-templates/tree/main) - KubeArmorとCilium向けのシステム・ネットワークポリシーテンプレートをコミュニティがまとめたリスト。
- [Cilium Network Policies向けKyvernoポリシー](https://github.com/adobeSlash/cilium-kyverno) - Ciliumネットワークポリシーの作成を制御するKyvernoポリシーの例。
