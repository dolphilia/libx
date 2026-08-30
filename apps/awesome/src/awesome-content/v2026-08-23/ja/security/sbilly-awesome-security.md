---
title: "sbilly/awesome-security"
description: "セキュリティのソフトウェア、資料、書籍、運用資源を分類した定本スナップショット"
licenseSource: "github-sbilly-awesome-security-readme-md"
---

# セキュリティのAwesomeリスト <a id="awesome-security"></a>

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

セキュリティに関する優れたソフトウェア、ライブラリ、文書、書籍、資料を集めたリストです。

着想元: [awesome-php](https://github.com/ziadoz/awesome-php), [awesome-python](https://github.com/vinta/awesome-python).

[コントリビューター](https://github.com/sbilly/awesome-security/graphs/contributors)の皆さんに感謝します。著名な資料を分類し、コミュニティ主導で収集することが目標です。

- [Awesome Security](#awesome-security)
  - [ネットワーク](#network)
    - [スキャン／ペネトレーションテスト](#scanning--pentesting)
    - [監視／ログ](#monitoring--logging)
    - [IDS／IPS／ホストIDS／ホストIPS](#ids--ips--host-ids--host-ips)
    - [ハニーポット／ハニーネット](#honey-pot--honey-net)
    - [完全パケットキャプチャ／フォレンジック](#full-packet-capture--forensic)
    - [スニファー](#sniffer)
    - [セキュリティ情報・イベント管理](#security-information--event-management)
    - [VPN](#vpn)
    - [高速パケット処理](#fast-packet-processing)
    - [ファイアウォール](#firewall)
    - [スパム対策](#anti-spam)
    - [Docker](#docker-images-for-penetration-testing--security)
  - [エンドポイント](#endpoint)
    - [ウイルス／マルウェア対策](#anti-virus--anti-malware)
    - [コンテンツ無害化・再構成](#content-disarm--reconstruct)
    - [構成管理](#configuration-management)
    - [認証](#authentication)
    - [モバイル／Android／iOS](#mobile--android--ios)
    - [フォレンジック](#forensics)
  - [脅威インテリジェンス](#threat-intelligence)
  - [ソーシャルエンジニアリング](#social-engineering)
  - [Web](#web)
    - [組織](#organization)
    - [Webアプリケーションファイアウォール](#web-application-firewall)
    - [スキャン／ペネトレーションテスト](#scanning--pentesting-1)
    - [実行時アプリケーション自己防御](#runtime-application-self-protection)
    - [開発](#development)
  - [レッドチーム基盤の配備](#red-team-infrastructure-deployment)
  - [エクスプロイトとペイロード](#exploits--payloads)
  - [ユーザビリティ](#usability)
  - [ビッグデータ](#big-data)
  - [DevOps](#devops)
  - [ターミナル](#terminal)
  - [オペレーティングシステム](#operating-systems)
    - [オンライン資料](#online-resources)
  - [データストア](#datastores)
  - [不正防止](#fraud-prevention)
  - [電子書籍](#ebooks)
  - [ほかのAwesomeリスト](#other-awesome-lists)
    - [ほかのセキュリティAwesomeリスト](#other-security-awesome-lists)
    - [ほかの一般的なAwesomeリスト](#other-common-awesome-lists)
  - [Contributing](#contributing)

------

## ネットワーク <a id="network"></a>

### ネットワーク設計

- [Network-segmentation-cheat-sheet](https://github.com/sergiomarotco/Network-segmentation-cheat-sheet) - このプロジェクトは、企業のネットワークをセグメンテーションするためのベストプラクティスを公開することを目的としています。一般的に、このプロジェクト内のスケームは、どのような企業にも適しています。

### スキャン／ペネトレーションテスト <a id="scanning--pentesting"></a>

- [OpenVAS](http://www.openvas.org/) - OpenVASは、複数のサービスとツールを構成するフレームワークで、包括的かつ強力な脆弱性スキャンおよび脆弱性管理ソリューションを提供しています。
- [Metasploit Framework](https://github.com/rapid7/metasploit-framework) - リモートターゲットマシンに対してエクスプロイトコードを開発・実行するためのツール。その他重要なサブプロジェクトには、オペコードデータベース、シェルコードアーカイブおよび関連研究が含まれます。
- [Kali](https://www.kali.org/) - Kali Linuxは、デジタルフォレインスとパーセントテストに特化したDebian派生のLinuxディストリビューションです。Kali Linuxには、nmap（ポートスキャナー）、Wireshark（パケットアナライザー）、John the Ripper（パスワードクラッカー）、Aircrack-ng（無線LANのパーセントテスト用ソフトウェアセット）など、多数のパーセントテストプログラムが事前インストールされています。
- [tsurugi](https://tsurugi-linux.org/) - DFIR調査、マルウェア分析およびOSINT活動を支援するための高度にカスタマイズされたLinuxディストリビューション。Ubuntu 20.04（64ビット、5.15.12カスタムカーネル）に基づいています。
- [pig](https://github.com/rafael-santiago/pig) - Linuxのパケット作成ツール。
- [scapy](https://github.com/gpotter2/awesome-scapy) - Scapy：Pythonベースのインタラクティブパケット操作プログラムおよびライブラリ。
- [Pompem](https://github.com/rfunix/Pompem) - Pompemは、主要なデータベースにおけるエクスプロイトの自動検索を行うオープンソースツールです。Pythonで開発され、高度な検索システムを備え、パーセントテストや倫理的ハッカーの業務を円滑にします。現在のバージョンでは、Exploit-db、1330day、Packetstorm Securityなどのデータベースでの検索を行います。
- [Nmap](https://nmap.org) - Nmapは、ネットワークの発見およびセキュリティ診断に用いる無料かつオープンソースのツールです。
- [Amass](https://github.com/owasp-amass/amass) - Amassは、最大の多様なデータソースをスクレイピング、再帰ブートフォース、ウェブアーカイブのクロール、名前の並べ替えおよび変更、逆DNSスキャンなど、さまざまな技術を用いてDNSサブドメインの列挙を行うツールです。
- [Anevicon](https://github.com/rozgo/anevicon) - UDPベースの最も強力なロードジェネレーターで、Rustで書かれています。
- [Finshir](https://github.com/isgasho/finshir) - コルーチンを用いた低速かつ遅延したトラフィックジェネレーターで、Rustで書かれています。
- [Legion](https://github.com/GoVanguard/legion) - 半自動で開発および調査を行うネットワークパーセントテストフレームワーク。
- [Lonkero](https://github.com/bountyyfi/lonkero) - 企業レベルのウェブ脆弱性スキャナーで、60以上の攻撃モジュールを備え、パーセントテストおよびセキュリティ評価にRustで構築されています。
- [Sublist3r](https://github.com/aboul3la/Sublist3r) - パーセントテストを行うための高速サブドメイン列挙ツール。
- [RustScan](https://github.com/RustScan/RustScan) - Rustで開発された高速Nmapスキャン。17分のNmapスキャンを19秒に短縮します。
- [Boofuzz](https://github.com/jtpereyda/boofuzz) - フュージングエンジンおよびフュージングテストフレームワーク。
- [monsoon](https://github.com/RedTeamPentesting/monsoon) - 非常に柔軟で高速なインタラクティブHTTP列挙およびフュージング。
- [Netz](https://github.com/spectralops/netz) - zgrab2などを使って、インターネット全体の誤設定を発見します。
- [Deepfence ThreatMapper](https://github.com/deepfence/ThreatMapper) - Apache v2、Kubernetes、仮想マシンおよびサーバレス環境向けの強力な実行時脆弱性スキャナー。
- [Deepfence SecretScanner](https://github.com/deepfence/SecretScanner) - コンテナイメージおよびファイルシステム内のシークレットやパスワードを発見します。
- [Cognito Scanner](https://github.com/padok-team/cognito-scanner) - Cognito AWSインスタンスに対するペントエステス用CLIツール。不適切なアカウント作成、アカウントオーラ、アイデンティティプールの昇格という3つの攻撃を実装している

### 監視／ログ <a id="monitoring--logging"></a>
- [BoxyHQ](https://github.com/retracedhq/retraced) - セキュリティおよびコンプライアンスのアудィットログを収集するオープンソースAPI
- [justniffer](http://justniffer.sourceforge.net/) - Justnifferはネットワークプロトコルアナライザであり、ネットワークトラフィックをキャプチャし、カスタマイズされたログを生成できる。Apacheウェブサーバーログファイルをエミュレートし、応答時間の追跡を行い、HTTPトラフィックからすべての"インターセプトされた"ファイルを抽出できる
- [httpry](http://dumpsterventures.com/jason/httpry/) - httpryはHTTPトラフィックを表示およびログに記録するための専門的なパケットスニファー。自らの分析を行う目的ではなく、トラフィックをキャプチャし、パースし、ログに記録して後で分析するためのツールとして設計されている。リアルタイムでトラフィックを表示しながらパースするか、または出力ファイルにログを記録するデーモンプロセスとして実行できる。極めて軽量かつ柔軟に設計されており、さまざまなアプリケーションに簡単に適応できるようにしている
- [ngrep](http://ngrep.sourceforge.net/) - ngrepはGNU grepの一般的な機能を提供することを目的としており、ネットワーク層に適用している。ngrepはpcapを認識するツールであり、パケットのデータペイロードに対して拡張された正規表現または16進表現を指定してマッチングできる。現在、Ethernet、PPP、SLIP、FDDI、Token Ringおよびnullインターフェース上でIPv4/6、TCP、UDP、ICMPv4/6、IGMPおよびRawを認識しており、BPFフィルタ論理をtcpdumpやsnoopといった一般的なパケットスニファツールと同様に理解している
- [passivedns](https://github.com/gamelinux/passivedns) - DNSレコードをパッシブに収集するツールで、インシデント対応、ネットワークセキュリティモニタリング（NSM）および一般的なデジタルフォレンジックに貢献する。PassiveDNSはインターフェースからのトラフィックをスヌーフしたり、pcapファイルを読み込み、DNSサーバーからの応答をログファイルに出力する。PassiveDNSは、メモリ内にダブリングされたDNS応答をキャッシュ／集約し、ログファイル内のデータ量を減らしつつ、DNS応答の本質を失わずに保持する
- [sagan](http://sagan.quadrantsec.com/) - Saganは、ログ（syslog／イベントログ／snmptrap／netflowなど）を「Snortのような」エンジンとルールで分析する
- [ntopng](http://www.ntop.org/products/traffic-analysis/ntop/) - Ntopngはネットワークトラフィックのプローブであり、ネットワーク使用量を表示しており、人気のあるtop Unixコマンドが行うような表示を行う
- [Fibratus](https://github.com/rabbitstack/fibratus) - FibratusはWindowsカーネルの探索およびトレースを行うツール。Windowsカーネルの活動の大部分をキャプチャできる。すなわちプロセス／スレッドの作成および終了、ファイルシステムI/O、レジストリ、ネットワーク活動、DLLのロード／アンロードなど。Fibratusは非常にシンプルなCLIを持ち、カーネルイベントストリームコレクタの開始、カーネルイベントフィルタの設定、または軽量なPythonモジュール（filaments）の実行を可能にする
- [opensnitch](https://github.com/evilsocket/opensnitch) - OpenSnitchはLittle SnitchアプリケーションファイアウォールのGNU/Linux版
- [wazuh](https://github.com/wazuh/wazuh) - Wazuhは、脅威の防止、検出、対応を行う無料かつオープンソースプラットフォーム。ファイルシステムの変更、システムコール、インベントリの変更を監視できる
- [Matano](https://github.com/matanolabs/matano) - AWS上で提供されるオープンソースのサーバレスセキュリティラケプラットフォーム。Apache Icebergデータラケにセキュリティデータをイングレスし、ストレージし、分析し、リアルタイムPython検出をコードとして実行可能
- [Falco](https://falco.org/) - クラウドネイティブなランタイムセキュリティプロジェクトであり、Kubernetesの脅威検出エンジンとして、現在はCNCFに統合されている
- [VAST](https://github.com/tenzir/vast) - 構造化イベントデータを対象としたオープンソースセキュリティデータパイプラインエンジン。高量データのイングレス、コンパクション、取得をサポート。セキュリティコンテンツの実行、ガイドされた脅威調査、大規模調査に特化
- [Substation](https://github.com/brexhq/substation) - SubstationはGoで書かれたクラウドネイティブなデータパイプラインおよび変換ツールキット
- [Sigma2KQL](https://github.com/Khadinxc/Sigma2KQL) - SIGMAルールをKQLに変換したすべてのルールのリポジトリで、週に1回スケジュールされ、リポジトリを更新し、SIGMAルールリポジトリの最新バージョンと一致するようにする
- [Sigma2SPL](https://github.com/Khadinxc/Sigma2SPL) - SIGMAルールをSPLに変換したすべてのルールのリポジトリで、週に1回スケジュールされ、リポジトリを更新し、SIGMAルールリポジトリの最新バージョンと一致するようにする
- [TerraSigma](https://github.com/Khadinxc/TerraSigma) - SIGMAルールをMicrosoft Sentinel Terraformスケジュール分析リソースに変換したすべてのルールのリポジトリで、週に1回スケジュールされ、リポジトリを更新し、SIGMAルールリポジトリの最新バージョンと一致するようにする。ルールに対して適切なエンティティマッピングが完了しており、リポジトリがプラグアンドプレイに対応している

### IDS／IPS／ホストIDS／ホストIPS <a id="ids--ips--host-ids--host-ips"></a>

- [Snort](https://www.snort.org/) - Snortは1998年にマーティン・ロースが開発した無料かつオープンソースのネットワークインシデント防止システム（NIPS）およびネットワークインシデント検出システム（NIDS）。現在はSourcefire（ロースが創設者およびCTO）によって開発されている。2009年にSnortはInfoWorldのオープンソース殿堂に選ばれ、『すべての時代で最も偉大なオープンソースソフトウェアの一つ』として評価された
- [Zeek](https://zeek.org/) - Zeekは、典型的なIDSとは大きく異なる強力なネットワーク分析フレームワーク
  - [zeek2es](https://github.com/corelight/zeek2es) - ZeekのログをElastic/OpenSearchに変換するオープンソースツールです。ZeekのTSVログから純粋なJSONを出力することもできます！
- [DrKeithJones.com](https://drkeithjones.com) - サイバーセキュリティおよびネットワークセキュリティモニタリングに関するブログ
- [OSSEC](https://ossec.github.io/) - 包括的なオープンソースHIDS。やや難解ですが、機能の理解には少し時間がかかります。ログ分析、ファイルの整合性チェック、ポリシー監視、ルートキット検出、リアルタイムアラート、アクティブレスポンスを実行します。Linux、MacOS、Solaris、HP-UX、AIX、Windowsなど、多くのオペレーティングシステムで動作します。十分なドキュメンテーションが用意されています。中規模から大規模なデプロイメントに最適です。
- [Suricata](http://suricata-ids.org/) - Suricataは、高性能なネットワークIDS、IPSおよびネットワークセキュリティモニタリングエンジンです。オープンソースであり、オープン情報セキュリティ財団（OISF）というコミュニティ運営の非営利団体が所有しています。Suric及はOISFおよびそのサポートベンダーによって開発されています。
- [Security Onion](http://blog.securityonion.net/) - Security Onionは、インシデント検知、ネットワークセキュリティモニタリング、ログ管理用のLinuxディストリビューションです。Ubuntuに基づいており、Snort、Suricata、Zeek、OSSEC、Sguil、Squert、Snorby、ELSA、Xplico、NetworkMinerなど、多くのセキュリティツールを内蔵しています。使いやすいセットアップウィザードにより、企業向けに数分で分散センサーの軍団を構築できます！
- [sshwatch](https://github.com/marshyski/sshwatch) - SSH向けのIPS。DenyHostsに類似し、Pythonで記述されています。また、攻撃中の攻撃者の情報をログに収集できます。
- [Stealth](https://fbb-git.gitlab.io/stealth/) - ファイルの整合性チェックツールで、ほとんど残らない痕跡を残します。コントローラーは別のマシンから実行され、攻撃者がファイルシステムが定義された擬似ランダム間隔でSSHでチェックされていることを知ることは非常に難しいです。中小規模デプロイメントに強く推奨されています。
- [AIEngine](https://bitbucket.org/camp0/aiengine) - AIEngineは、人間の介入なしに学習できる次世代のインタラクティブ／プログラム可能なPython/Ruby/Java/Luaパケット検査エンジンで、NIDS（ネットワークインシデント検出システム）機能、DNSドメイン分類、ネットワークコレクタ、ネットワークフォレンジックなど、多くの機能を備えています。
- [Denyhosts](http://denyhosts.sourceforge.net/) - SSHの辞書ベース攻撃やブートフォース攻撃を防ぐ。
- [Fail2Ban](http://www.fail2ban.org/wiki/index.php/Main_Page) - ログファイルをスキャンし、悪意ある行動を示すIPに対して行動をとる。
- [SSHGuard](http://www.sshguard.net/) - SSH以外のサービスの保護に用いるC言語で書かれたソフトウェア
- [Lynis](https://cisofy.com/lynis/) - Linux/Unix向けのオープンソースセキュリティ診断ツール。
- [CrowdSec](https://github.com/crowdsecurity/crowdsec) - CrowdSecは、無料で現代的かつ協働な行動検出エンジンであり、グローバルIP評価ネットワークと組み合わせられています。Fail2Banの哲学を踏襲していますが、IPv6対応であり、60倍速（Go対Python）です。ログをGrokパターンでパースし、YAMLシナリオで行動を特定します。CrowdSecは現代のクラウド／コンテナ／VMベースのインフラに設計されています（検出と対応を分離）。検出された場合、さまざまなブouncer（ファイアウォールブロック、nginx HTTP 403、キャプチャなど）で脅威を対応でき、攻撃的なIPはCrowdSecにキュレーションされ、すべてのユーザー間で共有され、コミュニティをさらに強化します。
- [wazuh](https://github.com/wazuh/wazuh) - Wazuhは、脅威防止、検出、対応を目的とした無料かつオープンソースのXDRプラットフォームです。オンプレミス、仮想化、コンテナ化、クラウドベースの環境におけるワークロードを保護できます。すべてのデプロイメントに最適なツールで、SIEM機能（インデックス＋検索＋WUI）を備えています。

### ハニーポット／ハニーネット <a id="honey-pot--honey-net"></a>

- [awesome-honeypots](https://github.com/paralax/awesome-honeypots) - ホネイポットのcanonicalなawesomeリスト。
- [HoneyPy](https://github.com/foospidy/HoneyPy) - HoneyPyは、低〜中程度の相互作用ホネイポットです。簡単なデプロイ、機能拡張（プラグイン）、カスタム設定を適用できるように設計されています。
- [Conpot](http://conpot.org/) - ICS/SCADAホネイポット。Conpotは、低相互作用のサーバー側工業制御システムホネイポットで、簡単なデプロイ、変更、拡張が可能です。一般的な工業制御プロトコルを提供することで、自らのシステムを構築するための基本を提供し、複雑なインフラをエミュレートして、攻撃者に大きな工業施設を見つけたと錯覚させます。デシート能力を高めるために、カスタムのHMI（人間と機械のインターフェース）を提供し、ホネイポットの攻撃面を拡大できます。サービスの応答時間を人工的に遅延させることで、常に負荷がかかっているシステムの挙動を模倣できます。完全なプロトコルスタックを提供しているため、ConpotはプロダクティブなHMIでアクセス可能であり、実際のハードウェアと拡張可能です。ConpotはHoneynetプロジェクトの下で開発され、いくつかの大きな巨人の肩の上にあります。
- [Amun](https://github.com/zeroq/amun) - AmunはPythonベースの低相互作用ホネイポットです。
- [Glastopf](http://glastopf.org/) - Glastopfは、ウェブアプリケーションへの攻撃をターゲットとしたデータを収集するために、数千の脆弱性をエミュレートするホネイポットです。その原理は非常にシンプルです：攻撃者がウェブアプリケーションを悪用している場合、適切な応答を返します。
- [Kippo](https://github.com/desaster/kippo) - Kippoは、ブートフォース攻撃をログに記録し、最も重要なのは攻撃者が実行したすべてのシェルインタラクションを記録するための中程度相互作用のSSHホネイポットです。
- [Kojoney](http://kojoney.sourceforge.net/) - Kojoneyは、SSHサーバをエミュレートする低レベルのインタラクションハニポットです。このデーモンは、Twisted Conchライブラリを使用してPythonで記述されています。
- [HonSSH](https://github.com/tnich/honssh) - HonSSHは、高インタラクションハニポットソリューションです。HonSSHは攻撃者とハニポットの間に配置され、それらの間を2つの別々のSSH接続を作成します。
- [Bifrozt](http://sourceforge.net/projects/bifrozt/) - Bifroztは、DHCPサーバを備えたNATデバイスで、通常は1つのNICがインターネットに直接接続され、もう1つのNICが内部ネットワークに接続されています。Bifroztが他の標準NATデバイスと異なる点は、攻撃者とあなたのハニポットの間で透明なSSHv2プロキシとして動作できる点です。Bifro的内部ネットワークにSSHサーバをデプロイした場合、すべての相互作用がTTYファイルに明文でログ記録され、後で閲覧可能になり、ダウンロードされたファイルのコピーもキャプチャされます。この機能が働くために、追加ソフトウェアのインストールや、カーネルモジュールのコンパイル、あるいは内部SSHサーバに特定のOSバージョンやタイプのインストールは必要ありません。このシステムは、送出トラフィックを一定数のポートに制限し、その制限を超えた場合に送出パケットを開始してドロップします。
- [HoneyDrive](http://bruteforce.gr/honeydrive) - HoneyDriveは、最も優れたハニポットLinuxディストリビューションです。これはXubuntu Desktop 12.04.4 LTSエディションがインストールされた仮想アプライアンス（OVA）です。これはKippo SSHハニポット、DionaeaおよびAmunマルウェアハニポット、Honeyd低インタラクションハニポット、GlastopfウェブハニポットおよびWordpot、Conpot SCADA/ICSハニポット、ThugおよびPhoneyCハニクライアントなど、10以上の事前インストールおよび事前設定済みのハニポットソフトウェアパッケージを含んでいます。さらに、データを分析・可視化・処理するための多くの有用な事前設定済みスクリプトやユーティリティも含まれており、Kippo-Graph、Honeyd-Viz、DionaeaFR、ELKスタックなどがあります。最後に、このディストリビューションには、ほぼ90の有名なマルウェア分析、フォレンジックおよびネットワークモニタリング関連ツールが含まれています。
- [Cuckoo Sandbox](http://www.cuckoosandbox.org/) - Cuckoo Sandboxは、怪しいファイルの分析を自動化するオープンソースソフトウェアです。これには、悪意のあるプロセスが孤立環境で実行される際の行動を監視するためのカスタムコンポーネントが使われています。
- [T-Pot Honeypot Distro](http://dtag-dev-sec.github.io/mediator/feature/2017/11/07/t-pot-17.10.html) - T-PotはUbuntu Server 16/17.x LTSのネットワークインストーラーに基づいています。ハーネイプットデーモンおよびその他のサポートコンポーネントはすべてDockerでコンテナ化されています。これにより、同じネットワークインターフェース上で複数のハーネイプットデーモンを実行しつつ、小さなフットプリントを維持し、各ハーネイプットを独自の環境に閉じ込めることが可能になります。Ubuntuベースのインストール - [T-Pot Autoinstall](https://github.com/dtag-dev-sec/t-pot-autoinstall) - このスクリプトは、新規のUbuntu 16.04.x LTS（64bit）上でT-Pot 16.04/17.10をインストールします。これはホストされたサーバー上で使用される予定であり、Ubuntuベースのイメージが与えられ、カスタムISOイメージのインストールができない状況に適しています。VMware上でvanilla Ubuntu 16.04.3で成功テスト済みです。

### 完全パケットキャプチャ／フォレンジック <a id="full-packet-capture--forensic"></a>

- [tcpflow](https://github.com/simsong/tcpflow) - tcpflowは、TCP接続（フロー）の一部として送信されたデータをキャプチャし、プロトコル分析やデバッグに適した形でデータを保存するプログラムです。各TCPフローは個別のファイルに保存されます。したがって、典型的なTCPフローは、それぞれの方向に1つのファイルに保存されます。tcpflowは、保存された'tcpdump'パケットフローを処理することもできます。
- [Deepfence PacketStreamer](https://github.com/deepfence/PacketStreamer) - 高パフォーマンスのリモートパケットキャプチャおよび収集ツール、クラウドネイティブ環境向けのtcpdumpの分散版。
- [Xplico](http://www.xplico.org/) - Xplicoの目的は、インターネットトラフィックキャプチャから含まれるアプリケーションデータを抽出することです。たとえば、pcapファイルからXplicoは各メール（POP、IMAP、SMTPプロトコル）、すべてのHTTPコンテンツ、各VoIP通話（SIP）、FTP、TFTPなど、すべてを抽出します。Xplicoはネットワークプロトコル分析ツールではありません。Xplicoはオープンソースのネットワークフォレンジック分析ツール（NFAT）です。
- [Moloch](https://github.com/aol/moloch) - Molochは、オープンソースの大規模IPv4パケットキャプチャ（PCAP）、インデックスおよびデータベースシステムです。PCAPのブラウジング、検索、エクスポートに簡単なウェブインターフェースが提供されています。APIが公開されており、PCAPデータおよびJSON形式のセッションデータを直接ダウンロードできます。シンプルなセキュリティはHTTPSおよびHTTPダイジェストパスワードサポート、またはApacheを前段に使用することで実現されます。MolochはIDSエンジンを置き換えるものではなく、それらと並行して動作し、すべてのネットワークトラフィックを標準PCAP形式で保存・インデックスし、高速アクセスを提供します。Molochは複数のシステムに展開可能で、複数ギガビット/秒のトラフィックを処理できるように設計されています。
- [OpenFPC](http://www.openfpc.org) - OpenFPCは、軽量なフルパケットネットワークトラフィックレコーダーおよびバッファリングシステムを提供するツールセットです。設計目標は、専門知識のないユーザーがCOTSハードウェアに分散型ネットワークトラフィックレコーダーをデプロイし、既存のアラートおよびログ管理ツールと統合できるようにすることです。
- [Dshell](https://github.com/USArmyResearchLab/Dshell) - Dshellはネットワークフォレンジック分析フレームワークです。ネットワークパケットキャプチャの解析をサポートするプラグインの迅速開発を可能にします。
- [stenographer](https://github.com/google/stenographer) - Stenographerは、すべてのパケットを一時的にディスクにスプールし、そのパケットのサブセットに対してシンプルかつ高速にアクセスできるパケットキャプチャソリューションです。

### スニファー <a id="sniffer"></a>

- [wireshark](https://www.wireshark.org) - Wiresharkは無料かつオープンソースのパケットアナライザです。ネットワークトラブルシューティング、分析、ソフトウェアおよび通信プロトコル開発、教育に使用されます。Wiresharkはtcpdumpと非常に似ていますが、グラフィカルなフロントエンドを備え、いくつかの組み込みのソートおよびフィルタオプションがあります。
- [netsniff-ng](http://netsniff-ng.org/) - netsniff-ngは無料のLinuxネットワークツールキットであり、あなたが日々使うLinuxネットワークのためのスイス軍刀のようなツールです。パケット受信および送信において、カーネルがパケットをカーネル空間からユーザースペースにコピーする必要がないため、パフォーマンスが向上しています。
- [Live HTTP headers ](https://addons.mozilla.org/en-US/firefox/addon/http-header-live/) - Live HTTP headersは、ブラウザのリクエストをリアルタイムで確認できる無料Firefox拡張機能です。リクエストのすべてのヘッダーを表示し、実装におけるセキュリティの弱点を発見するために使用できます。

### セキュリティ情報・イベント管理 <a id="security-information--event-management"></a>

- [Prelude](https://www.prelude-siem.org/) - Preludeは、ユニバーサルな「セキュリティ情報およびイベント管理」（SIEM）システムです。Preludeは、製品ブランドやライセンスに関わらず、すべてのセキュリティ関連イベントを収集し、標準化し、分類し、集計し、相関し、報告します。Preludeは「エージェントレス」です。
- [OSSIM](https://www.alienvault.com/open-threat-exchange/projects) - OSSIMは、セキュリティプロフェッショナルがSIEM提供から必要とするすべての機能を提供します——イベント収集、標準化、および相関。
- [FIR](https://github.com/certsocietegenerale/FIR) - Fast Incident Responseは、サイバーセキュリティインシデント管理プラットフォームです。
- [LogESP](https://github.com/dogoncouch/LogESP) - オープンソースSIEM（セキュリティ情報およびイベント管理システム）。
- [wazuh](https://github.com/wazuh/wazuh) - Wazuhは、脅威検知、インテグリティモニタリング、インシデント対応およびコンプライアンスを目的とした無料、オープンソースかつ企業向けのセキュリティモニタリングソリューションです。OpenSearchのフォークとカスタムWUIをサポートすることで、多くのデータと連携します。
- [VAST](https://github.com/tenzir/vast) - 構造化イベントデータを対象としたオープンソースセキュリティデータパイプラインエンジン。高量データのイングレス、コンパクション、取得をサポート。セキュリティコンテンツの実行、ガイドされた脅威調査、大規模調査に特化
- [Matano](https://github.com/matanolabs/matano) - AWS上で提供されるオープンソースのサーバレスセキュリティラケプラットフォーム。Apache Icebergデータラケにセキュリティデータをイングレスし、ストレージし、分析し、リアルタイムPython検出をコードとして実行可能

### VPN <a id="vpn"></a>

- [OpenVPN](https://openvpn.net/) - OpenVPNは、仮想プライベートネットワーク（VPN）技術を実装し、ルーティングまたはブリッジ構成における点対点またはサイト対サイト接続およびリモートアクセス機能を構築するオープンソースソフトウェアアプリケーション。SSL/TLSを用いたカスタムセキュリティプロトコルを採用している。
- [Firezone](https://github.com/firezone/firezone) - WireGuardに基づいたLinux用オープンソースVPNサーバーおよびエグリスファイアウォール。企業のプライベートネットワークへの安全なリモートアクセスを簡単に管理できる。Firezoneはセットアップが簡単（すべての依存関係がChef Omnibusでバンドルされている）、安全で、パフォーマンスに優れ、自前でホスト可能。
- [TorForge](https://github.com/jery0843/torforge) - 高度な透明なTorプロキシ。カーネルレベルのiptableスルーリング、後量子暗号（Kyber768）、キルスイッチ、ステゴグラフィモード、AIによる回路選択を備えたプロキシ。

### 高速パケット処理 <a id="fast-packet-processing"></a>

- [DPDK](http://dpdk.org/) - DPDKは、高速パケット処理を実現するためのライブラリとドライバーのセット。
- [PFQ](https://github.com/pfq/PFQ) - PFQは、Linuxオペレーティングシステム向けに設計された機能ネットワークフレームワークで、効率的なパケットキャプチャ／送信（10G以上）、カーネル内での機能処理、およびソケット／エンドポイント間のパケットルーティングを可能にする。
- [PF_RING](http://www.ntop.org/products/packet-capture/pf_ring/) - PF_RINGは、パケットキャプチャ速度を劇的に向上させる新しいタイプのネットワークソケット。
- [PF_RING ZC (Zero Copy)](http://www.ntop.org/products/packet-capture/pf_ring/pf_ring-zc-zero-copy/) - PF_RING ZC（ゼロコピー）は、パケットサイズに関わらず、1/10 Gbitラインレートのパケット処理（受信および送信）を実現できる柔軟なパケット処理フレームワーク。インターリーブプロセス間およびVM（KVM）間の通信に適用されるゼロコピー操作を実装している。
- [PACKET_MMAP/TPACKET/AF_PACKET](https://elixir.bootlin.com/linux/latest/source/Documentation/networking/packet_mmap.rst) - Linuxにおけるキャプチャおよび送信プロセスのパフォーマ及を向上させるために、PACKET_MMAPを使用することは問題ない。
- [netmap](http://info.iet.unipi.it/~luigi/netmap/) - netmapは、高速パケットI/Oを実現するフレームワーク。その同伴ソフトウェアスイッチVALEとともに、1つのカーネルモジュールとして実装され、FreeBSD、Linux、そして現在はWindowsにも提供されている。

### ファイアウォール <a id="firewall"></a>

- [pfSense](https://www.pfsense.org/) - FreeBSDベースのファイアウォールおよびルーターのディストリビューション。
- [OPNsense](https://opnsense.org/) - オープンソースで使いやすく、構築も簡単なFreeBSDベースのファイアウォールおよびルーティングプラットフォーム。OPNsenseは、高価な商用ファイアウォールに含まれる機能のほとんどを提供し、多くの場合、それ以上の機能を備えている。商用製品の豊かな機能セットを、オープンかつ検証可能なソースで提供している。
- [fwknop](https://www.cipherdyne.org/fwknop/) - ファイアウォールで、単一パケット認可（Single Packet Authorization）によりポートを保護する。

### スパム対策 <a id="anti-spam"></a>

- [Spam Scanner](https://github.com/spamscanner) - [@niftylettuce](https://github.com/niftylettuce)によるアンチスパムスキャンサービスおよびアンチスパムAPI。
- [rspamd](https://github.com/rspamd/rspamd) - 高速で無料かつオープンソースのスパムフィルタリングシステム。
- [SpamAssassin](https://spamassassin.apache.org/) - 多様な検出技術を用いた強力で人気のあるメールスパムフィルタ。
- [Scammer-List](https://scammerlist.now.sh/) - 無料のオープンソースAIベースのスキャンおよびスパム検出ツール（無料APIを提供）。

### ペネトレーションテスト・セキュリティ用Dockerイメージ <a id="docker-images-for-penetration-testing--security"></a>

- `docker pull kalilinux/kali-linux-docker` [official Kali Linux](https://hub.docker.com/r/kalilinux/kali-linux-docker/)
- `docker pull owasp/zap2docker-stable` - [official OWASP ZAP](https://github.com/zaproxy/zaproxy)
- `docker pull wpscanteam/wpscan` - [official WPScan](https://hub.docker.com/r/wpscanteam/wpscan/)
- `docker pull remnux/metasploit` - [docker-metasploit](https://hub.docker.com/r/remnux/metasploit/)
- `docker pull citizenstig/dvwa` - [Damn Vulnerable Web Application (DVWA)](https://hub.docker.com/r/citizenstig/dvwa/)
- `docker pull wpscanteam/vulnerablewordpress` - [Vulnerable WordPress Installation](https://hub.docker.com/r/wpscanteam/vulnerablewordpress/)
- `docker pull hmlio/vaas-cve-2014-6271` - [Vulnerability as a service: Shellshock](https://hub.docker.com/r/hmlio/vaas-cve-2014-6271/)
- `docker pull hmlio/vaas-cve-2014-0160` - [Vulnerability as a service: Heartbleed](https://hub.docker.com/r/hmlio/vaas-cve-2014-0160/)
- `docker pull opendns/security-ninjas` - [Security Ninjas](https://hub.docker.com/r/opendns/security-ninjas/)
- `docker pull diogomonica/docker-bench-security` - [Docker Bench for Security](https://hub.docker.com/r/diogomonica/docker-bench-security/)
- `docker pull ismisepaul/securityshepherd` - [OWASP Security Shepherd](https://hub.docker.com/r/ismisepaul/securityshepherd/)
- `docker pull danmx/docker-owasp-webgoat` - [OWASP WebGoat Project docker image](https://hub.docker.com/r/danmx/docker-owasp-webgoat/)
- `docker-compose build && docker-compose up` - [OWASP NodeGoat](https://github.com/owasp/nodegoat#option-3---run-nodegoat-on-docker)
- `docker pull citizenstig/nowasp` - [OWASP Mutillidae II Web Pen-Test Practice Application](https://hub.docker.com/r/citizenstig/nowasp/)
- `docker pull bkimminich/juice-shop` - [OWASP Juice Shop](https://hub.docker.com/r/bkimminich/juice-shop)
- `docker pull jeroenwillemsen/wrongsecrets`- [OWASP WrongSecrets](https://hub.docker.com/r/jeroenwillemsen/wrongsecrets)
- `docker run -dit --name trd -p 8081:80 cylabs/cy-threat-response` - [Cyware Threat Response Docker](https://hub.docker.com/r/cylabs/cy-threat-response)
- `docker-compose -d up` - [cicd-goat](https://github.com/cider-security-research/cicd-goat)

## エンドポイント <a id="endpoint"></a>

### ウイルス／マルウェア対策 <a id="anti-virus--anti-malware"></a>

- [Fastfinder](https://github.com/codeyourweb/fastfinder) - 高速かつカスタマイズ可能なマルチプラットフォームの異常ファイル検出ツール。MD5／SHA1／SHA256ハッシュ、文字列／ワイルドカード、正規表現、YARAルールをサポート。Windows／Linuxホストに簡単にパッケージ化して展開可能。
- [Linux Malware Detect](https://www.rfxn.com/projects/linux-malware-detect/) - 共有ホスティング環境における脅威に対応したLinux向けマルウェアスキャナー。
- [LOKI](https://github.com/Neo23x0/Loki) - シンプルな脅威インジケーターおよびインシデント対応スキャナー。
- [rkhunter](http://rkhunter.sourceforge.net/) - Linux用のルートキット検出ツール
- [ClamAv](http://www.clamav.net/) - ClamAV®は、トロイの木馬、ウイルス、マルウェアおよびその他の悪意ある脅威を検出するオープンソースのウイルス対策エンジンです

### コンテンツ無害化・再構成 <a id="content-disarm--reconstruct"></a>

- [DocBleach](https://github.com/docbleach/DocBleach) - オープンソースのコンテンツ消毒・再構成ソフトウェアで、オフィス、PDFおよびRTFドキュメントを消毒します。

### 構成管理 <a id="configuration-management"></a>

- [Fleet device management](https://github.com/fleetdm/fleet) - Fleetは、サーバーおよびワークステーション向けの軽量かつプログラマブルなテレメトリプラットフォームです。すべてのデバイスおよびオペレーティングシステムから、包括的かつカスタマイズ可能なデータを取得できます
- [Rudder](http://www.rudder-project.org/) - Rudderは、ITインフラの自動化およびコンプライアンスを、Webベースで簡単に操作できる、役割ベースのソリューションです。一般的なシステム管理タスク（インストール、設定）を自動化；設定の維持（一度設定すればよいが、設定が正しいことを確認し、自動的に修正できるようにする方が良い）を実現；すべての管理ノードのインベントリを管理；ノードおよびその設定の構成をWebインターフェースで設定・管理；設定および/またはノード別にコンプライアンスレポートを生成します

### 認証 <a id="authentication"></a>

- [google-authenticator](https://github.com/google/google-authenticator) - Google Authenticatorプロジェクトは、複数のモバイルプラットフォーム向けの一時パスコード生成器およびプラグイン認証モジュール（PAM）を含んでいます。一時パスコードは、開発者による認証イニシアティブ（OATH）によって開発されたオープンスタンダードを使用して生成されます（これはOAuthとは無関係です）。これらの実装は、RFC 4226で指定されたHMACベースの一時パスワード（HOTP）アルゴリズムおよびRFC 6238で指定されたタイムベースの一時パスワード（TOTP）アルゴリズムをサポートしています。[Tutorials: How to set up two-factor authentication for SSH login on Linux](http://xmodulo.com/two-factor-authentication-ssh-login-linux.html)
- [Stegcloak](https://github.com/kurolabs/stegcloak) - どのような書かれたテキストにもデジタル認証を安全に割り当てます

### モバイル／Android／iOS <a id="mobile--android--ios"></a>

- [android-security-awesome](https://github.com/ashishb/android-security-awesome) - Androidセキュリティに関連するリソースのコレクション。大学および産業界では、Androidアプリの動的解析、静的解析および逆エンジニアリングを行うためのツールの開発が進んでいます
- [SecMobi Wiki](http://wiki.secmobi.com/) - モバイルセキュリティリソースのコレクション。記事、ブログ、書籍、グループ、プロジェクト、ツール、会議を含みます。*
- [OWASP Mobile Security Testing Guide](https://github.com/OWASP/owasp-mstg) - モバイルアプリセキュリティテストおよび逆エンジニアリングに関する包括的なマニュアル
- [OSX Security Awesome](https://github.com/kai5263499/osx-security-awesome) - OSXおよびiOSセキュリティリソースのコレクション
- [Themis](https://github.com/cossacklabs/themis) - 高度なマルチプラットフォーム暗号フレームワーク。センシティブなデータの保護に適しており、前向きセキュリティを備えた安全なメッセージングとAES25及GCMによる安全なデータストレージを提供し、端末間暗号化アプリケーションの構築に適しています
- [Mobile Security Wiki](https://mobilesecuritywiki.com/) - モバイルセキュリティリソースのコレクション
- [Apktool](https://github.com/iBotPeaches/Apktool) - Android APKファイルの逆エンジニアリングに使用するツール
- [jadx](https://github.com/skylot/jadx) - Android DexおよびApkファイルからJavaソースコードを生成するコマンドラインおよびGUIツール
- [enjarify](https://github.com/Storyyeller/enjarify) - Dalvikバイナリコードを同等のJavaバイナリコードに変換するツール
- [Android Storage Extractor](https://github.com/51j0/Android-Storage-Extractor) - Androidアプリケーションのローカルデータストレージをワンクリックで抽出するツール
- [Quark-Engine](https://github.com/quark-engine/quark-engine) - オブフュセーションを無視したAndroidマルウェア評価システム
- [dotPeek](https://www.jetbrains.com/decompiler/) - ReSharperのバンドルデコンパイラをベースにした、無料のスタンドアローンツール
- [hardened_malloc](https://github.com/GrapheneOS/hardened_malloc) - 現代システム向けに設計された強化されたアロケーター。AndroidのBionic libcに統合されており、muslおよびglibcと組み合わせて、他のLinuxベースのプラットフォームで動的に使用できる動的ライブラリとして利用可能です。今後、より多くのポート可能性および統合が見込まれます
- [AMExtractor](https://github.com/ir193/AMExtractor) - AMExtractorは、キーノードソースコードなしでも、Androidデバイスの物理的内容をダンプできます
- [frida](https://github.com/frida/frida) - 開発者、逆エンジニア、セキュリティリサーチャー向けの動的インストルメンテーションツールキット
- [UDcide](https://github.com/UDcide/udcide) - Androidマルウェア行動編集ツール
- [reFlutter](https://github.com/ptswarm/reFlutter) - フラッターリバースエンジニアリングフレームワーク

### フォレンジック <a id="forensics"></a>

- [grr](https://github.com/google/grr) - GRR リアルレスポンスは、リモートで実行可能なフォレインスのためのインシデントレスポンスフレームワークです。
- [Volatility](https://github.com/volatilityfoundation/volatility) - Pythonベースのメモリ抽出および分析フレームワーク。
- [mig](http://mig.mozilla.org/) - MIGは、リモートエンドポイントに対して調査を行うためのプラットフォームです。調査者は、多数のシステムから情報を並列で取得できるため、インシデントや日々のセキュリティ運用の調査を加速できます。
- [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - *ir-rescue* は、インシデントレスポンス中にホストのフォレインスデータを包括的に収集するためのWindowsバッチスクリプトおよびUnix Bashスクリプトです。
- [Logdissect](https://github.com/dogoncouch/logdissect) - ログファイルおよびその他のデータの分析に用いるCLIツールおよびPython API。
- [Meerkat](https://github.com/TonyPhipps/Meerkat) - 脅威調査およびインシデントレスポンス用のPowerShellベースのWindowsアーティファクト収集ツール。
- [Rekall](https://github.com/google/rekall) - Rekallフレームワークは、ApacheおよびGNU一般公衆ライセンスに基づくPythonで実装された、完全にオープンなツールの集合体であり、コンピュータシステムのデジタルアーティファクトの抽出および分析を行うためのフレームワークです。
- [LiME](https://github.com/504ensicsLabs/LiME.git) - Linuxメモリエクストラクタ
- [Maigret](https://github.com/soxoj/maigret) - Maigretは、ユーザー名のみから個人のファイルを収集し、多数のサイトに存在するアカウントを確認し、ウェブページからすべての可用情報を収集します。

## 脅威インテリジェンス <a id="threat-intelligence"></a>

- [abuse.ch](https://www.abuse.ch/) - ZeuSトラッカー／SpyEyeトラッカー／Palevoトラッカー／Feodoトラッカーは、世界中のコマンド＆コントロールサーバー（ホスト）を追跡し、ドメインおよびIPアドレスのブロックリストを提供します。
- [Cyware Threat Intelligence Feeds](https://cyware.com/community/ctix-feeds) - Cywareの脅威インテリジェンスフィードは、幅広いオープンかつ信頼できるソースから得られた価値ある脅威データを統合し、実時間で悪意あるマルウェアハッシュ、IPアドレス、ドメインに関する価値あるかつ実行可能な脅威インテリジェンスを提供します。当社の脅威インテリジェンスフィードはSTIX 1.xおよび2.0と完全に互換性を持ち、世界中で発見された悪意あるマルウェアに関する最新情報がリアルタイムで提供されます。
- [Emerging Threats - Open Source](http://doc.emergingthreats.net/bin/view/Main/EmergingFAQ) - Emerging Threatsは10年前に、SuricataおよびSNORT®ルール、ファイアウォールルール、その他IDSルールセットの収集を行うオープンソースコミュニティとして始まりました。そのオープンソースコミュニティは、インターネットセキュリティにおいて依然として重要な役割を果たしており、毎日20万以上のアクティブユーザーがルールセットをダウンロードしています。ETOpenルールセットは、基本的なガイドラインに従えば、誰でも利用可能であり、いつでもダウンロード可能です。
- [PhishTank](http://www.phishtank.com/) - PhishTankは、インターネット上のフィッシングに関するデータおよび情報を共有する協働プラットフォームです。また、PhishTankは開発者および研究者に、フィッシング対策データをアプリケーションに統合するためのオープンAPIを提供しており、無料で利用可能です。
- [SBL / XBL / PBL / DBL / DROP / ROKSO](http://www.spamhaus.org/) - Spamhausプロジェクトは、インターネット上のスパム活動およびその源を追跡し、インターネットネットワークに対して信頼できるリアルタイムスパム防止保護を提供し、法執行機関と協力して世界中でスパムおよびマルウェアグループを特定・追跡し、政府に対して効果的なスパム対策法を推進する国際的な非営利組織です。
- [Internet Storm Center](https://www.dshield.org/reports.html) - ISCは、Li0nウイルスの成功した検出、分析および広範な警告の後、2001年に設立されました。現在、ISCは数千人のインターネットユーザーおよび組織に無料の分析および警告サービスを提供しており、インターネットサービスプロバイダーと協力して最も悪意ある攻撃者に立ち向かっています。
- [AutoShun](https://www.autoshun.org/) - AutoShunはSnortプラグインであり、SnortのIDSログを中央サーバーに送信することで、あなたのセンサーのログと世界中の他のSnortセンサー、ハーネット、メールフィルタの攻撃を関連付けます。
- [DNS-BH](http://www.malwaredomains.com/) - DNS-BHプロジェクトは、マルウェアおよびスパイウェアの配信に使われるドメインをリストアップし、維持します。このプロジェクトは、これらのドメインに対してリクエストが来たら、ローカルホストに対して偽の応答を返すためのBindおよびWindowsゾーンファイルを作成し、多くのスパイウェアのインストールおよび報告を防ぎます。
- [AlienVault Open Threat Exchange](http://www.alienvault.com/open-threat-exchange/dashboard) - AlienVault Open Threat Exchange（OTX）は、悪意あるIPアドレスによって引き起こされるデータ損失、サービス障害、システム侵害からネットワークを守るためのツールです。
- [Tor Bulk Exit List](https://metrics.torproject.org/collector.html) - Torネットワーク内のデータ収集サービスCollecTor。CollecTorは、公開Torネットワーク内のさまざまなノードとサービスからデータを取得し、世界に提供します。Torネットワークに関する研究を行う場合、またはTorネットワークデータを使用するアプリケーションを開発する場合、ここがスタート地点です。[TOR Node List](https://www.dan.me.uk/tornodes) / [DNS Blacklists](https://www.dan.me.uk/dnsbl) / [Tor Node List](http://torstatus.blutmagie.de/)
- [leakedin.com](http://www.leakedin.com/) - leakedin.comの主な目的は、データの喪失リスクについて訪問者に認識させることです。このブログは、pastebin.comなどのサイトで失われたり公開されたデータのサンプルをまとめています。
- [FireEye OpenIOCs](https://github.com/fireeye/iocs) - ファイアアイの公開された脅威指標（IOCs）
- [OpenVAS NVT Feed](http://www.openvas.org/openvas-nvt-feed.html) - ネットワーク脆弱性テスト（NVT）の公開フィード。これは2014年4月時点で35,000以上のNVTを含み、日々増加している。このフィードはOpenVASのデフォルト設定として構成されている。
- [Project Honey Pot](http://www.projecthoneypot.org/) - プロジェクトハニーポットは、スパマーおよびその使用するスパムボットを特定するための最初かつ唯一の分散型システムである。プロジェクトハニーポットシステムを使用することで、サイト訪問者の時間とIPアドレスにカスタムタグを付与したアドレスをインストールできる。これらのアドレスのいずれかがメールを受け取った場合、そのメッセージがスパムであるだけでなく、アドレスが収集された正確な時間とその収集したIPアドレスを特定できる。
- [virustotal](https://www.virustotal.com/) - VirusTotalは、グーグルの傘下にある無料オンラインサービスで、ファイルやURLを分析し、ウイルス、ウィルス、トロイドおよびその他の悪意のあるコンテンツがアンチウイルスエンジンやウェブスキャナーによって検出されたかどうかを識別する。同時に、スキャンによって無害と判断されたリソースが悪意のあるものとして検出された場合（偽陽性）を検出する手段としても利用できる。
- [IntelMQ](https://github.com/certtools/intelmq/) - IntelMQは、CERTがセキュリティフィード、ペーストビン、ツイートなどを収集・処理するために使用するソリューションです。これは、欧州CERTが複数のインフォセクイベントで概念設計したコミュニティドリブンのイニシアティブIHAP（インシデントハンドリング自動化プロジェクト）です。その主な目的は、インシデントレスポンダーに脅威情報の収集・処理を容易にし、CERTのインシデントハンドリングプロセスを改善することです。[ENSIA Homepage](https://www.enisa.europa.eu/activities/cert/support/incident-handling-automation)
- [CIFv2](https://github.com/csirtgadgets/massive-octo-spice) - CIFは、サイバー脅威インテリジェンス管理システムである。CIFは、多数のソースから得られた悪意のある脅威情報を統合し、その情報をインシデント対応（ID）、検出（IDS）および緩和（ルート切断）に活用できるようにする。
- [MISP - Open Source Threat Intelligence Platform ](https://www.misp-project.org/) - MISP脅威共有プラットフォームは、脅威情報（サイバーセキュリティインジケーターを含む）の共有を支援する無料かつオープンソースのソフトウェアです。脅威情報の収集、共有、保存および一致を目的としたプラットフォームです。攻撃のインジケーター、脅威情報、金融詐欺情報、脆弱性情報、さらには反テロ情報も含みます。MISPプロジェクトには、ソフトウェア、共通ライブラリ（[taxonomies](https://www.misp-project.org/taxonomies.html)、[threat-actors and various malware](https://www.misp-project.org/galaxy.html)）、新しい情報を共有するための広範なデータモデル（[objects](https://www.misp-project.org/objects.html)）およびデフォルトの[feeds](https://www.misp-project.org/feeds/)が含まれます。
- [PhishStats](https://phishstats.info/) - IP、ドメイン、ウェブサイトタイトルの検索によるフィッシング統計情報
- [Threat Jammer](https://threatjammer.com) - 開発者、セキュリティエンジニア、その他IT専門職が、さまざまなソースからのキュレーションされた脅威インテリジェンスデータにアクセスできるREST APIサービス。
- [Cyberowl](https://github.com/karimhabush/cyberowl) - さまざまなソースから現在報告されている最も頻繁なセキュリティインシデントのタイプに関する毎日の要約。

## ソーシャルエンジニアリング <a id="social-engineering"></a>

- [Gophish](https://getgophish.com/) - オープンソースのフィッシングフレームワーク。

## Web <a id="web"></a>

### 組織 <a id="organization"></a>

- [OWASP](http://www.owasp.org) - オープンウェブアプリケーションセキュリティプロジェクト（OWASP）は、ソフトウェアのセキュリの向上を目的とした、世界規模の非営利慈善団体（501(c)(3)）である。
- [Portswigger](https://portswigger.net) - ポートスウィッガーは、ウェブアプリケーションセキュリティ、テストおよびスキャンに向けたツールを提供する。幅広いセキュリティツールから選択し、最新の脆弱性を特定できる。

### Webアプリケーションファイアウォール <a id="web-application-firewall"></a>

- [ModSecurity](http://www.modsecurity.org/) - モードセキュリティは、リアルタイムでのウェブアプリケーション監視、ログ記録、アクセス制御を行うためのツールキットである。
- [BunkerWeb](https://github.com/bunkerity/bunkerweb) - BunkerWebは、モードセキュリティWAF、HTTPS（透明なLet's Encryptのリニューアル）、異常な行動に基づく自動ブロック、ボットおよび悪質IPのブロック、接続制限、最先端のセキュリティ設定、Web UIなどを備えたフル機能のオープンソースウェブサーバーである。
- [NAXSI](https://github.com/nbs-system/naxsi) - NAXSIは、NGINX向けのオープンソース・ハイパフォーマンス・ルールメンテナンスの低いWAFであり、NAXSIとはNginx Anti Xss & Sql Injectionの略である。
- [sql_firewall](https://github.com/uptimejp/sql_firewall) - PostgreSQL用のSQLファイアウォール拡張
- [ironbee](https://github.com/ironbee/ironbee) - IronBeeは、ユニバーサルウェブアプリケーションセキュリティセンサーを構築するためのオープンソースプロジェクトである。IronBeeは、ウェブアプリケーションをセキュリティ化するためのシステム開発フレームワークであり、ウェブアプリケーションファイアウォール（WAF）を構築するためのフレームワークである。
- [Curiefense](https://github.com/curiefense/curiefense) - Curiefenseは、幅広い自動ウェブセキュリティツールを提供しており、Envoy ProxyにWAFを含む。
- [open-appsec](https://github.com/openappsec/openappsec) - open-appsecは、ウェブアプリケーションおよびAPIに対する脅威を事前に自動的に防止するオープンソース機械学習セキュリティエンジンである。

### スキャン／ペネトレーションテスト <a id="scanning--pentesting-1"></a>

- [Spyse](https://spyse.com/) - スキャン／ペネトレーションテストに関するソフトウェア、資料、またはサービスです。
提供データ: IPv4ホスト、サブドメイン／ドメイン／WHOIS、ポート／バナー／プロトコル、技術、OS、AS、広範なSSL/TLSデータベースなど。
- [sqlmap](http://sqlmap.org/) - sqlmapは、SQLインジェクションの脆弱性を検出・exploitし、データベースサーバーを制御するプロセスを自動化するオープンソースのパーセンテーションテストツールである。強力な検出エンジン、パーセンテーションテスト専門の多くの機能、データベースのフィンガープリントからデータの取得、ファイルシステムへのアクセス、OS上のコマンド実行まで、幅広いスイッチを備えている。
- [ZAP](https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project) - ゼッド攻撃プロキシ（ZAP）は、ウェブアプリケーションの脆弱性を特定するための使いやすい統合パーセンテーションテストツールである。幅広いセキュリティ経験を持つ人々が使用できるように設計されており、開発者や機能テスト担当者にとって特に適している。ZAPは自動スキャナーを提供し、手動でセキュリティ脆弱性を特定するためのツールセットも備えている。
- [OWASP Testing Checklist v4](https://www.owasp.org/index.php/Testing_Checklist) - ウェブ脆弱性評価時にテストするためのいくつかのコントロールのリスト。マーカー版は [here](https://github.com/amocrenco/owasp-testing-checklist-v4-markdown/blob/master/README.md) で見つかります。
- [w3af](http://w3af.org/) - w3afは、ウェブアプリケーション攻撃および審査フレームワークである。このプロジェクトの目的は、すべてのウェブアプリケーションの脆弱性を特定し、exploitすることで、ウェブアプリケーションのセキュリティを強化するためのフレームの構築である。
- [Recon-ng](https://github.com/lanmaster53/recon-ng) - リコン-ngはPythonで書かれたフル機能のウェブリコンダクションフレームワークであり、メタスプロイトフレームワークと似た見た目を持つ。
- [PTF](https://github.com/trustedsec/ptf) - パーセンテーションテスト者フレームワーク（PTF）は、最新のツールに対してモジュラーなサポートを提供する方法である。
- [Infection Monkey](https://github.com/guardicore/monkey) - ネットワークのマッピング／パーセンテーションテストを行う半自動のパーセンテーションテストツール。人間の攻撃者をシミュレートする。
- [ACSTIS](https://github.com/tijme/angularjs-csti-scanner) - ACSTISは、AngularJSクライアントサイドテンプレートインジェクション（CSTI、またはサンドボックスエスケープ、サンドボックスバイパスと呼ばれる場合もある）を特定するためのウェブアプリケーションスキャンツールである。単一のリクエストのスキャンをサポートしているだけでなく、AngularJS CSTI脆弱性を全体のウェブアプリケーションにわたってクロールできる。
- [padding-oracle-attacker](https://github.com/KishanBagaria/padding-oracle-attacker) - padding-oracle-attackerは、CBCモードで暗号化されたデータを復号するためのパディングオーラル攻撃を簡単に実行できるCLIツールおよびライブラリであり、並列ネットワークリクエストをサポートし、美しく設計されたUIを提供する。
- [is-website-vulnerable](https://github.com/lirantal/is-website-vulnerable) - ウェブサイトのフロントエンドJavaScriptライブラリに公開されているセキュリティ脆弱性を検出する。
- [PhpSploit](https://github.com/nil0x42/phpsploit) - ウェブサーバーに悪意のあるPHPワンライナーを用いて静かに永続化されるフル機能のC2フレームワーク。スパイクのための永続化、権限昇格および事後exploitation機能を多数備えている。
- [Keyscope](https://github.com/SpectralOps/keyscope) - Keyscopeは、Rustで構築された、複数のSaaSベンダーにおけるアクティブなシークレットを検証するための拡張可能なキーおよびシークレット検証ツールである。
- [Cyclops](https://github.com/v8blink/Chromium-based-XSS-Taint-Tracking) - サイクロプスはXSS検出機能を備えたウェブブラウザであり、クロムベースのXSS検出ツールで、ソースからシンクまでの流れを特定する。
- [Scanmycode CE (Community Edition)](https://github.com/marcinguy/scanmycode-ce) - 多くのツール／スキャナを用いてコードスキャン／SAST／静的解析／リントを行い、1レポートで結果を提供。現在サポートしているのは：PHP、Java、Scala、Python、Ruby、JavaScript、GO、シークレットスキャン、デプロイメントコンフリクト、トロイアンソース、オープンソースおよびプロプライエタリーチェック（合計約1000チェック）。
- [recon](https://github.com/rusty-ferris-club/recon) - コンテンツ分類および処理を用いてファイル、コード、マルウェアをSQLでクエリするための、高速なRustベースのCLIツール。セキュリティ専門家向け。
- [CakeFuzzer](https://github.com/Zigrin-Security/CakeFuzzer) - CakePHPベースのウェブアプリケーション向けの最終的なウェブアプリケーションセキュリティテストツール。CakeFuzzerは、事前に定義された攻撃をランダムに変更した後に実行する。CakePHPフレームワークの深い理解を活かし、アプリケーションのすべての潜在的なエントリポイントに対して攻撃を実行する。
- [Artemis](https://github.com/CERT-Polska/Artemis/) - モジュラリティを備えた脆弱性スキャナーで、自動報告生成機能を備えている。
- [Trust Scan](https://github.com/undeadlist/trust-scan) - WHOIS、SSL、脅威情報（URLhaus、PhishTank、Spamhaus）、および40以上のスキャン/フィッシングパターン検出を備えたURLセキュリティスキャナー。OllamaによるオプションのAI分析を含みます。（[Demo](https://aibuilds.net)）
- [react2shell-scanner](https://github.com/nxgn-kd01/react2shell-scanner) - ReactサーバーコンポーネントにおけるCVE-2025-55182（React2Shell）RCE脆弱性を検出。React 19.xおよびNext.jsプロジェクトにおいて、重大なリモートコード実行の欠陥をスキャンする。
- [shai-hulud-scanner](https://github.com/nxgn-kd01/shai-hulud-scanner) - Shai Hulud 2.0 npmサプライチェーン攻撃によって影響を受けた796以上のパッケージから、侵害の指標を検出。悪意のあるファイル、ハッシュ、パターンに対して包括的なセキュリティチェックを行う。


### 実行時アプリケーション自己防御 <a id="runtime-application-self-protection"></a>

- [Sqreen](https://www.sqreen.io/) - Sqreenはソフトウェアチーム向けのランタイムアプリケーションセフプロテクション（RASP）ソリューションである。アプリ内にインストールされたエージェントがアプリをインストルメント化し、監視を行う。不審なユーザー行動は報告され、コード変更やトラフィックリダイレクトなしに実行時において攻撃がブロッキングされる。
- [OpenRASP](https://github.com/baidu/openrasp) - 百度（Baidu）が積極的に維持しているオープンソースRASPソリューション。コンテキスト認識アルゴリズムにより、ほぼゼロの誤検出を達成。また、サーバー負荷が高いため、パフォーマンスは3％未満の低下を観測している。

### 開発 <a id="development"></a>

- [API Security in Action](https://www.manning.com/books/api-security-in-action) - APIセキュリティを含む書籍。セキュリティ開発、トークンベース認証、JSON Web Tokens、OAuth 2、Macaroonsについて解説。（早期アクセス、継続的に公開、最終リリースは2020年夏）
- [Secure by Design](https://www.manning.com/books/secure-by-design?a_aid=danbjson&a_bid=0b3fac80) - セキュリティ脆弱性が少なくなる設計パターンおよびコーディングスタイルを特定する書籍。 （早期アクセス、継続的に公開、最終リリースは2017年秋）
- [Understanding API Security](https://www.manning.com/books/understanding-api-security) - APIセキュリティが現実世界でどのように機能するかを示す無料電子書籍サンプル。APIの構成方法とOAuthプロトコルがセキュリティを守る方法を示す。
- [OAuth 2 in Action](https://www.manning.com/books/oauth-2-in-action) - OAuth 2の実用的な使用方法と展開について、クライアント、認可サーバー、リソースサーバーの視点から解説する書籍。
- [OWASP ZAP Node API](https://github.com/zaproxy/zap-api-nodejs) - NodeJSアプリケーション内でOWASP Zed Attack Proxy（ZAP）を活用するための公式API。
- [GuardRails](https://github.com/apps/guardrails) - GitHubアプリでプルリクエストにセキュリティフィードバックを提供する。
- [Bearer](https://github.com/Bearer/bearer) - コードにセキュリティリスクや脆弱性が含まれているかを検査し、機密データの暴露を防ぐ。
- [Checkov](https://github.com/bridgecrewio/checkov/) - インフラストラクチャアスコード（Terraform）向けの静的解析ツール。
- [TFSec](https://github.com/tfsec/tfsec/) - インフラストラクチャアスコード（Terraform）向けの静的解析ツール。
- [KICS](https://github.com/Checkmarx/kics) - IaCプロジェクトに対してセキュリティ脆弱性、コンプライアンス問題、インフラ構成ミスをスキャン。現在はTerraformプロジェクト、Kubernetesマニフェスト、Dockerファイル、AWS CloudFormationテンプレート、Ansibleプレイブックに対応。
- [Insider CLI](https://github.com/insidersec/insider) - GoLangで書かれたオープンソースの静的アプリケーションセキュリティテストツール（SAST）。Java（MavenおよびAndroid）、Kotlin（Android）、Swift（iOS）、.NETフルフレームワーク、C#およびJavaScript（Node.js）に対応。
- [Full Stack Python Security](https://www.manning.com/books/full-stack-python-security) - Python開発者向けのセキュリの総合的な見解。
- [Making Sense of Cyber Security](https://www.manning.com/books/making-sense-of-cyber-security) - セキュリティ戦略を計画または実施するすべての人に向けた、専門用語を一切使わず、実用的なセキュリティの基本概念、用語、技術を解説するガイド。 （早期アクセス、継続的に公開、2022年初頭に最終リリース）
- [Security Checklist by OWASP](https://owasp.org/www-project-application-security-verification-standard/) - OWASPが提供するウェブアプリケーションテストにおける保証レベルに基づくチェックリスト。アーキテクチャ、IAM、クリーンアップ、暗号化、セキュア設定など、複数のテーマをカバー。
- [Pompelmi](https://github.com/pompelmi/pompelmi) - MIMEスニフ、ZIPボム保護、オプションのYARAルールを備えたNode.jsファイルアップロードマルウェアスキャナー。

## エクスプロイトとペイロード <a id="exploits--payloads"></a>

- [PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) - ウェブアプリケーションセキュリティおよびペントテスト/CTF向けの有用なペイロードとバイパスのリスト

## レッドチーム基盤の配備 <a id="red-team-infrastructure-deployment"></a>

- [Redcloud](https://github.com/khast3x/Redcloud) - Dockerを用いた自動Red Teamインフラデプロイメント。
- [Axiom](https://github.com/pry0cc/axiom) - Axiomは、マルチクラウド環境での効率的な作業を可能にする動的インフラフレームワークであり、攻撃と防御のセキュリティに焦点を当てた再現可能なインフラの構築とデプロイを支援。

## ブルーチーム基盤の配備 <a id="blue-team-infrastructure-deployment"></a>

- [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - セキュリティソリューションのセットアップ、設定、使用を自動化するCLIプログラム。

## ユーザビリティ <a id="usability"></a>

- [Usable Security Course](https://pt.coursera.org/learn/usable-security) - Coursera上の実用的なセキュリティコース。セキュリティとユーザビリティの交差点について学びたい人には非常に良いです。

## ビッグデータ <a id="big-data"></a>

- [data_hacking](https://github.com/ClickSecurity/data_hacking) - IPython、Pandas、Scikit Learnを用いてセキュリティデータを最大限に活用する例。
- [hadoop-pcap](https://github.com/RIPE-NCC/hadoop-pcap) - パケットキャプチャ（PCAP）ファイルを読み取るHadoopライブラリ。
- [Workbench](http://workbench.readthedocs.org/) - セキュリティ研究開発チーム向けのスケーラブルなPythonフレームワーク。
- [OpenSOC](https://github.com/OpenSOC/opensoc) - OpenSOCは、さまざまなオープンソースビッグデータ技術を統合し、セキュリティモニタリングと分析のための中央集約型ツールを提供。
- [Apache Metron (incubating)](https://github.com/apache/incubator-metron) - Metronは、さまざまなオープンソースビッグデータ技術を統合し、セキュリティモニタリングと分析のための中央集約型ツールを提供。
- [Apache Spot (incubating)](https://github.com/apache/incubator-spot) - Apache Spotは、フローおよびパケット分析から得られる洞察を活用するオープンソースソフトウェア。
- [binarypig](https://github.com/endgameinc/binarypig) - Hadoopにおけるスケーラブルなバイナリデータ抽出。Pigを用いたマルウェア処理と解析、Django、Twitter Bootstrap、Elasticsearchを用いた探索
- [Matano](https://github.com/matanolabs/matano) - AWS上で提供されるオープンソースのサーバレスセキュリティラケプラットフォーム。Apache Icebergデータラケにセキュリティデータをイングレスし、ストレージし、分析し、リアルタイムPython検出をコードとして実行可能
- [VAST](https://github.com/tenzir/vast) - 構造化イベントデータを対象としたオープンソースセキュリティデータパイプラインエンジン。高量データのイングレス、コンパクション、取得をサポート。セキュリティコンテンツの実行、ガイドされた脅威調査、大規模調査に特化

## DevOps <a id="devops"></a>

- [Securing DevOps](https://manning.com/books/securing-devops) - DevOpsにおけるセキュリティ技術に関する書籍。ウェブアプリケーションおよびそのインフラのセキュリティを確保する最先端の実践をレビュー
- [ansible-os-hardening](https://github.com/dev-sec/ansible-os-hardening) - OS強化用のAnsibleの役割
- [Trivy](https://github.com/aquasecurity/trivy) - コンテナおよびその他のアーテファクト向けのシンプルかつ包括的な脆弱性スキャナー。CIに適している
- [Preflight](https://github.com/spectralops/preflight) - CIおよびその他のシステムにおけるサプライチェーン攻撃を軽減するために、スクリプトおよび実行ファイルの検証を支援
- [Teller](https://github.com/spectralops/teller) - DevOpsおよび開発者向けのシークレット管理ツール。複数のフォールドとキーストアからシークレットを一元管理可能
- [cve-ape](https://github.com/baalmor/cve-ape) - テストおよびCI環境に埋め込むことができる、非侵襲的なCVEスキャナー。ローカルに保存されたCVEデータベースを用いてパッケージリストおよび個別パッケージの既存CVEをスキャン可能。また、OT/ICSなどにオフラインCVEスキャナーとして使用可能
- [Selefra](https://github.com/selefra/selefra) - マルチクラウドおよびSaaS向けのオープンソースポリシー・アズ・コードソフトウェア。多クラウドおよびSaaSの分析を提供

## ターミナル <a id="terminal"></a>

* [shellfirm](https://github.com/kaplanelad/shellfirm) - It is a handy utility to help avoid running dangerous commands with an extra approval step. You will immediately get a small prompt challenge that will double verify your action when risky patterns are detected.
* [shellclear](https://github.com/rusty-ferris-club/shellclear) - It helps you to Secure your shell history commands by finding sensitive commands in your all history commands and allowing you to clean them.


## オペレーティングシステム <a id="operating-systems"></a>

### プライバシーとセキュリティ <a id="privacy--security"></a>

- [Qubes OS](https://www.qubes-os.org/) - Qubes OSは、単一ユーザー用のデスクトップコンピューティングに特化した無料かつオープンソースのセキュリティ指向のオペレーティングシステム
- [Whonix](https://www.whonix.org) - 匿名性を重視したオペレーティングシステム
- [Tails OS](https://tails.boum.org/) - タイルは、監視や規制を防ぐためのポータブルオペレーティングシステム

### オンライン資料 <a id="online-resources"></a>

- [Security related Operating Systems @ Rawsec](https://inventory.raw.pm/operating_systems.html) - セキュリ及関連オペレーティングシステムの完全リスト
- [Best Linux Penetration Testing Distributions @ CyberPunk](https://www.cyberpunk.rs/category/pentest-linux-distros) - 主要なパーセンテーションテストディストリビューションの説明
- [Security @ Distrowatch](http://distrowatch.com/search.php?category=Security) - オープンソースオペレーティングシステムについてのウェブサイト。その評価や最新情報を提供
- [Hardening Windows 10](https://www.hardenwindows10forsecurity.com/) - Windows 10の強化ガイド

## データストア <a id="datastores"></a>

- [databunker](https://databunker.org/) - Databunkerは、個人データを格納するためのアドレス帳の強化版。GDPRおよび暗号化は標準搭載。
- [acra](https://github.com/cossacklabs/acra) - データベースセキュリティソリューション：データ保護用プロキシ、透明な"リアルタイム"データ暗号化、データマスク、トークン化、SQLファイアウォール（SQLインジェクション防止）、インシデント検知システム
- [blackbox](https://github.com/StackExchange/blackbox) - GPGを用いてVCSリポジトリにシークレットを安全に保存
- [confidant](https://github.com/lyft/confidant) - AWS DynamoDBにシークレットを保存し、静的暗号化を実施し、IAMと統合
- [dotgpg](https://github.com/ConradIrwin/dotgpg) - 生産環境のシークレットや共有パスワードを安全かつ簡単にバックアップおよびバージョン管理できるツール
- [redoctober](https://github.com/cloudflare/redoctober) - 2人ルール方式のファイル暗号化および復号を実現するサーバー
- [aws-vault](https://github.com/99designs/aws-vault) - OSX Keychainまたは暗号化ファイルにAWS認証情報を保存
- [credstash](https://github.com/fugue/credstash) - AWS KMSとDynamoDBを使用してシークレットを保存
- [chamber](https://github.com/segmentio/chamber) - AWS KMSとSSM Parameter Storeを使用してシークレの保存
- [Safe](https://github.com/starkandwayne/safe) - Vault CLIを読み書きしやすくするVault CLI
- [Sops](https://github.com/mozilla/sops) - YAML、JSON、BINARY形式をサポートする暗号化ファイルエディタで、AWS KMSおよびPGPで暗号化
- [passbolt](https://www.passbolt.com/) - チームが待っていたパスワードマネージャー。無料、オープンソース、拡張可能、OpenPGPに基づく
- [passpie](https://github.com/marcwebbie/passpie) - マルチプラットフォームのコマンドラインパスワードマネージャー
- [Vault](https://www.vaultproject.io/) - 環境およびアプリケーションシークレットを安全に保管できる暗号化データストア
- [LunaSec](https://github.com/lunasec-io/lunasec) - PIIを扱うデータベースで自動暗号化／トークン化、データ処理に用いるセーフボックスコンポーネント、および中央集約型認可制御を備えたもの

## 不正防止 <a id="fraud-prevention"></a>

- [FingerprintJS](https://github.com/fingerprintjs/fingerprintjs) - ユーザーがデータストレージを削除しても、ブラウザやハイブリッドモバイルアプリケーションのユーザーを特定できる。アカウントの不正アクセス、アカウント共有、繰り返し悪意ある行動を検出できる
- [FingerprintJS Android](https://github.com/fingerprintjs/fingerprint-android) - Androidアプリケーションユーザーを特定できる。ユーザーがデータストレージを削除しても、アカウントの不正アクセス、アカウント共有、繰り返し悪意ある行動を検出できる

## 電子書籍 <a id="ebooks"></a>

- [Holistic Info-Sec for Web Developers](https://holisticinfosecforwebdevelopers.com/) - Web開発者およびDevOpsエンジニアが、堅牢で信頼性があり、維持可能かつ安全なソフトウェア、ネットワーク、その他を継続的に、正確に、驚きなくデリバリーするために必要な知識を広く深くカバーした無料ダウンロード可能な書籍シリーズ
- [Docker Security - Quick Reference: For DevOps Engineers](https://binarymist.io/publication/docker-security/) - Dockerのセキュリティデフォルトについての理解、それらを改善する方法（理論と実践）、そして多くのツールと技術についての書籍
- [How to Hack Like a Pornstar](https://books2read.com/u/bWzdBx) - BANKへの侵入プロセスをステップバイステップで解説、Sparc Flow、2017
- [How to Hack Like a Legend](https://amzn.to/2uWh1Up) - 秘密のオフショア企業への侵入を描いたハッカーの物語、Sparc Flow、2018
- [How to Investigate Like a Rockstar](https://books2read.com/u/4jDWoZ) - 実際の危機を体験して、フォレンジック分析の秘訣を習得、Sparc Flow、2017
- [Real World Cryptography](https://www.manning.com/books/real-world-cryptography) - この早期アクセス書籍は、システムおよびアプリケーションのすべてのレベルでセキュリティを理解し、適用するための応用的な暗号技術を教える
- [AWS Security](https://www.manning.com/books/aws-security?utm_source=github&utm_medium=organic&utm_campaign=book_shields_aws_1_31_20) - このプレリリース書籍は、AWSのセキュリティに関する一般的な問題と、アクセスポリシー、データ保護、監査、継続的な監視、および事故対応に関するベストプラクティスをカバーしています。
- [The Art of Network Penetration Testing](https://www.manning.com/books/the-art-of-network-penetration-testing) - 企業ネットワーク上で自らのパーセンテーションテストを実行するための実践的なガイド書。 （プレリリース、継続的に公開、最終リリースは2020年12月）
- [Spring Boot in Practice](https://www.manning.com/books/spring-boot-in-practice) - 実用的なガイド書で、数十の関連するシナリオを問題・解決・議論の形式でわかりやすく提示しています。（プレリリース、継続的に公開、最終リリースは2021年秋）
- [Self-Sovereign Identity](https://www.manning.com/books/self-sovereign-identity) - SSIが私たちはデジタル署名された認証を受けることができ、それらをプライベートなウォレットに保管し、オンラインでのアイデンティティを安全に証明できるようにする方法についての書籍。（プレリリース、継続的に公開、最終リリースは2021年秋）
- [Data Privacy](https://www.manning.com/books/data-privacy) - スケールで技術的なプライバシーソリューションとツールを実装する方法を学ぶ書籍。（プレリリース、継続的に公開、最終リリースは2022年1月）
- [Cyber Security Career Guide](https://www.manning.com/books/cyber-security-career-guide) - サイバーセキュリティのキャリアをスタートさせるために、既存の技術的および非技術的スキルをどう活かすかを学ぶ。（プレリリース、継続的に公開、最終リリースは2022年夏）
- [Secret Key Cryptography](https://www.manning.com/books/secret-key-cryptography) - 暗号技術および秘密鍵手法についての書籍。（プレリリース、継続的に公開、最終リリースは2022年夏）
- [The Security Engineer Handbook](https://securityhandbook.io/) - セキュリティチームでの働き方に関する「やるべきこと」「やるべきでないこと」、そして日々のセキュリティエンジニアとしての業務に役立つ多くのコツやヒントについて述べた短い読書。
- [Cyber Threat Hunting](https://www.manning.com/books/cyber-threat-hunting) - サイバー脅威の捜索に関する実践的なガイド。
- [Edge Computing Technology and Applications](https://www.manning.com/books/edge-computing-technology-and-applications) - エッジコンピューティング戦略を構築するためのビジネスおよび技術的な基礎についての書籍。
- [Spring Security in Action, Second Edition](https://www.manning.com/books/spring-security-in-action-second-edition) - セキュリティを最初から確保されたSpringアプリケーションの設計と開発についての書籍。
- [Azure Security](https://www.manning.com/books/azure-security-2) - Microsoft Azureのネイティブなセキュリティサービスについての実用的なガイド。
- [Node.js Secure Coding: Defending Against Command Injection Vulnerabilities](https://www.nodejs-security.com) - Node.jsでのセキュアなコーディング規則を学ぶために、現実のnpmパッケージに対してコマンドインジェクション攻撃を実行し、脆弱なコードを分析する。
- [Node.js Secure Coding: Prevention and Exploitation of Path Traversal Vulnerabilities](https://www.nodejs-security.com/book/path-traversal) - Node.jsでのセキュアなコーディングをマスターするため、現実の脆弱な依存関係を使用し、実際にPath Traversal脆弱性に対するセキュアなコーディング技術を体験する。
- [Grokking Web Application Security](https://www.manning.com/books/grokking-web-application-security) - 攻撃に耐えうる、そしてどんな攻撃にも備えられたウェブアプリケーションを構築する方法についての書籍。

## ほかのAwesomeリスト <a id="other-awesome-lists"></a>

### ほかのセキュリティAwesomeリスト <a id="other-security-awesome-lists"></a>

- [Android Security Awesome](https://github.com/ashishb/android-security-awesome) - Androidセキュリティに関連するリソースのコレクション。
- [Awesome ARM Exploitation](https://github.com/HenryHoggard/awesome-arm-exploitation) - ARMのexploitationに関連するリソースの厳選リスト。
- [Awesome CTF](https://github.com/apsdehal/awesome-ctf) - CTFフレームワーク、ライブラリ、リソース、ソフトウェアの厳選リスト。
- [Awesome Cyber Skills](https://github.com/joe-shenouda/awesome-cyber-skills) - 合法的かつ安全にサイバーセキュリティスキルを訓練できるハッキング環境の厳選リスト。
- [Awesome Personal Security](https://github.com/Lissy93/personal-security-checklist) - デジタルセキュリティおよびプライバシーに関するヒントと、さらに詳しいリソースへのリンクを含む厳選リスト。
- [Awesome Hacking](https://github.com/carpedm20/awesome-hacking) - 人気のハッキングチュートリアル、ツール、リソースを厳選したリスト
- [Awesome Honeypots](https://github.com/paralax/awesome-honeypots) - ハーネイプットのリソースを一覧にした素晴らしいリスト
- [Awesome Malware Analysis](https://github.com/rshipp/awesome-malware-analysis) - 悪意のあるソフトウェアの分析ツールおよびリソースを厳選したリスト
- [Awesome Security Newsletters](https://github.com/TalEliyahu/awesome-security-newsletters) - セキュリティニュースをメールで最新に保つために使える素晴らしいニュースレター一覧
- [Awesome PCAP Tools](https://github.com/caesar0301/awesome-pcaptools) - コンピュータサイエンス分野の他の研究者たちが開発したネットワークトレース処理用ツールのコレクション
- [Awesome Pentest](https://github.com/enaqx/awesome-pentest) - パーセンテーションテストのリソース、ツール、その他素晴らしいものの一覧
- [Awesome Privacy](https://github.com/lissy93/awesome-privacy) - プライバシーを尊重するソフトウェアおよびサービスを厳選したリスト
- [Awesome Linux Containers](https://github.com/Friz-zy/awesome-linux-containers) - Linuxコンテナフレームワーク、ライブラリ、ソフトウェアを厳選したリスト
- [Awesome Incident Response](https://github.com/meirwah/awesome-incident-response) - インシデント対応に必要なリソースの一覧
- [Awesome Web Hacking](https://github.com/infoslack/awesome-web-hacking) - ウェブアプリケーションセキュリティについて学びたいが、スタート地点がわからない人のために作られたリスト
- [Awesome Electron.js Hacking](https://github.com/doyensec/awesome-electronjs-hacking) - Electron.js（不）安全性に関する素晴らしいリソースを厳選したリスト
- [Awesome Threat Intelligence](https://github.com/hslatman/awesome-threat-intelligence) - 脅威インテリジェンスに関するリソースを厳選したリスト
- [Awesome Threat Modeling](https://github.com/redshiftzero/awesome-threat-modeling) - 脅威モデリングに関するリソースを厳選したリスト
- [Awesome Pentest Cheat Sheets](https://github.com/coreb1t/awesome-pentest-cheat-sheets) - パーセンテーションテストに役立つチートシートのコレクション
- [Awesome Industrial Control System Security](https://github.com/mpesen/awesome-industrial-control-system-security) - 工業制御システム（ICS）セキュリティに関するリソースを厳選したリスト
- [Awesome YARA](https://github.com/InQuest/awesome-yara) - 素晴らしいYARAルール、ツール、人々を厳選したリスト
- [Awesome Threat Detection and Hunting](https://github.com/0x4D31/awesome-threat-detection) - 脅威検知およびハンティングに関するリソースを厳選したリスト
- [Awesome Container Security](https://github.com/kai5263499/container-security-awesome) - コンテナ構築およびランタイムセキュリティに関する素晴らしいリソースを厳選したリスト
- [Awesome Crypto Papers](https://github.com/pFarb/awesome-crypto-papers) - 暗号学に関する論文、記事、チュートリアル、ハウツーを厳選したリスト
- [Awesome Shodan Search Queries](https://github.com/jakejarvis/awesome-shodan-queries) - Shodan.ioに挿入できる興味深い、面白い、悲しい検索クエリのコレクション
- [Awesome Censys Queries](https://github.com/thehappydinoa/awesome-censys-queries) - Censys Search Queries の興味深いかつ奇妙な一覧
- [Awesome Anti Forensics](https://github.com/remiflavien1/awesome-anti-forensic) - フォレnsics活動を防ぐために使われる素晴らしいツールのコレクション
- [Awesome Security Talks & Videos](https://github.com/PaulSec/awesome-sec-talks) - 年ごとに、そして会議ごとに分類された、素晴らしいセキュリティセッションの一覧
- [Awesome Bluetooth Security](https://github.com/engn33r/awesome-bluetooth-security) - Bluetoothセキュリティリソースの一覧
- [Awesome WebSocket Security](https://github.com/PalindromeLabs/awesome-websocket-security) - WebSocketセキュリティリソースの一覧
- [Security Acronyms](https://github.com/cloudsecurelab/security-acronyms) - セキュリティに関連する略語や概念の一覧
- [Awesome SOAR](https://github.com/correlatedsecurity/Awesome-SOAR) - サイバーセキュリティの「セキュリティオーケストレーション、自動化および反応（SOAR）」に関するリソースの一覧
- [Awesome Security Hardening](https://github.com/decalage2/awesome-security-hardening) - セキュリ及強化ガイド、ベストプラクティス、チェックリスト、ベンチマーク、ツール、その他リソースの一覧

### ほかの一般的なAwesomeリスト <a id="other-common-awesome-lists"></a>

ほかの優れたAwesomeリスト:

- [awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness) - awesome-* または *-awesome のリスト
- [lists](https://github.com/jnv/lists) - GitHub上でキュレーションされた（awesome）リストの定番一覧
- [Movies For Hacker](https://github.com/k4m4/movies-for-hackers) - すべてのハッカーとサイバーパンクが見なければならない映画の一覧
- [Awesome Self-Hosted](https://github.com/awesome-selfhosted/awesome-selfhosted)
- [Awesome Analytics](https://github.com/0xnr/awesome-analytics)
- [Awesome Sysadmin](https://github.com/awesome-foss/awesome-sysadmin)

## [コントリビューション](https://github.com/sbilly/awesome-security/blob/51b613c02b8801d23c0d2b8d9dc7b40d15c1b16e/contributing.md) <a id="contributing"></a>

コントリビューションを歓迎します。
