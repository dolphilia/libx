---
title: "caesar0301/awesome-pcaptools"
description: "caesar0301/awesome-pcaptools の定本スナップショット"
licenseSource: "github-caesar0301-awesome-pcaptools-readme-md"
---

はじめに
------------

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

このプロジェクト自体にはソースコードやファイルを収録していません。ネットワークトラフィック研究でpcapファイルを処理するツールを一覧化しています。ほかのAwesomeリストについては https://github.com/sindresorhus/awesome を参照してください。

**ライセンス**: CC0 1.0 Universal（CC0 1.0）。


> * [Linuxコマンド](#linuxcmds)
> * [トラフィックキャプチャ](#capture)
> * [トラフィック分析・検査](#analysis)
> * [DNSユーティリティ](#dnstools)
> * [ファイル抽出](#fileextraction)
> * [関連プロジェクト](#others)



Linuxコマンド<a name="linuxcmds"></a>
--------------------------------------

* **Bmon**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/bmon-640x480.png>

* **Bwm-ng**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://a.fsdn.com/con/app/proj/bwmng/screenshots/10965.jpg/245/183/1>

* **CBM**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/cbm.png>

* **Collectl**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.cse.wustl.edu/~jain/cse567-08/ftp/hw/collectl.png>

* **Dstat**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.tecmint.com/wp-content/uploads/2016/09/Dstat-Linux-Monitoring.png>

* **Ifstat**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://community.linuxmint.com/img/screenshots/ifstat.png>

* **Iftop**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/iftop.png>

* **Iptraf-ng**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://wiki.ipfire.org/addons/iptraf-ng/iptraf-ng_monitor.png>

* **Jnettop**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://sourceforge.net/projects/jnettop/>、<https://web.archive.org/web/20130509072433if_/http://jnettop.kubs.info/wiki/?binary=internal%3A%2F%2F76195466cc3bca92f8de7b404e240844.gif>

* **Nethogs**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/nethogs.png>

* **Netload**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/netload.png>

* **Netwatch**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/netwatch.png>

* **Nload**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/nload.png>

* **Pktstat**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/pktstat.png>

* **Slurm**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/slurm.png>

* **Speedometer**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/speedometer.png>

* **Tcptrack**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/tcptrack.png>

* **Trafshow**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.binarytides.com/blog/wp-content/uploads/2014/03/trafshow.png>

* **Vnstat**: Linux上でネットワーク帯域や接続状況を監視するコマンドです。 参照: <https://www.howtoforge.com/images/vnstat/big/vnstat9.png>



トラフィックキャプチャ<a name="capture"></a>
---------------

* [Libpcap/Tcpdump](https://www.tcpdump.org/): tcpdumpの公式サイト、強力なコマンドラインパケット分析ツールであり、libpcapはネットワークトラフィックキャプチャ用のポータブルC/C++ライブラリである。

* [Deepfence PacketStreamer](https://github.com/deepfence/PacketStreamer): 高パフォーマンスのリモートパケットキャプチャおよび収集ツール。クラウドネイティブ環境向けのdistributed tcpdump。

* [Ngrep](https://github.com/jpr5/ngrep/): ngrepはGNU grepの主要な機能を提供し、ネットワーク層に適用するツールです。pcapを認識したツールで、パケットのデータペイロードに拡張された正規表現やヘキサデシマル表現を指定してマッチングできます。現在、Ethernet、PPP、SLIP、FDDI、Token RingおよびnullインターフェースでのTCP、UDP、ICMPを認識しており、tcpdumpやsnoopなどの一般的なパケットスヌーピングツールと同様にbpfフィルタ論理を理解しています。 [Screenshot](https://www.cyberciti.biz/media/new/cms/2012/12/ngrep.png)

* [clj-net-pcap](https://github.com/ruedigergad/clj-net-pcap): `clj-net-pcap`はClojure用のパケットキャプチャライブラリです。clj-net-pcapはjNetPcapを用い、jNetPcapの使いやすさを向上させるための補助機能を追加しています。2014年のCOMPSACWにおいて、[paper on clj-net-pcap](http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6903107)が公開されました。

* [jNetPcap](https://sourceforge.net/projects/jnetpcap/): jNetPcapはLinuxおよびWindowsで利用可能なJava用パケットキャプチャライブラリ。jNetPcapはlibpcapおよびWinPcapをそれぞれ活用し、Java Native Interface（JNI）を用いてlibpcap/WinPcapの機能を活用する。

* [Arkime](https://arkime.com/): Arkime（以前はMoloch）は、大規模でオープンソースであり、インデックスされたパケットキャプチャと検索ツールである。

* [n2disk](https://www.ntop.org/products/traffic-recording-replay/n2disk/): （商用）：多ギガビットネットワークトラフィック記録装置でインデックス機能を備えたもの。n2diskはネットワークトラフィック記録アプリケーションである。n2diskでは、適切なハードウェア上で10ギガビット/秒を超える速度でライブネットワークインターフェースからフルサイズのネットワークパケットをキャプチャし、ファイルに書き込み、パケットの損失なしで実行できる。

* [Netis Packet Agent](https://github.com/Netis/packet-agent): GREトンネルを介したリモートデータキャプチャユーティリティであり、NICインターフェースからパケットをキャプチャし、GREでエンカプセル化してリモートマシンに送信し、監視および分析を行うことができる。

* [OpenFPC](https://github.com/leonward/OpenFPC): OpenFPCは、軽量なフルパケットネットワークトラフィック記録およびバッファリングツールを提供するスクリプトセットである。設計目標は、専門知識のないユーザーがCOTSハードウェア上で分散型ネットワークトラフィック記録を導入し、既存のアラートおよびログツールと統合できるようにすることである。

* [PCAPdroid](https://github.com/emanuele-f/PCAPdroid): PCAPdroidは、rootなしでデバイスのネットワークトラフィックを監視およびエクスポートできるAndroidアプリである。トラフィックはPCAPフォーマットでダンプされ、Wiresharkなどの人気ツールで分析可能であり、リアルタイムでも可能である。組み込みのトラフィックモニタは、ユーザーおよびシステムアプリが作成した疑わしい接続を検知できる。

* [PF_RING](https://www.ntop.org/products/packet-capture/pf_ring/): PF_RINGは、パケットキャプチャ速度を劇的に向上させる新しいタイプのネットワークソケットである。Linux 2.6.32以降のカーネルで利用可能。カーネルをパッチする必要なし。PF_RING対応ドライバーによりパケットキャプチャ速度が向上する。

* [pmacct](https://github.com/pmacct/pmacct): マルチ用途のパッシブネットワークモニタリングツールの小さなセット。IPV4およびIPV6トラフィックをカウント、分類、集計、複製、エクスポートし、フォワーディングプレーンデータを処理する。BGPおよびBMPを介してコントロールプレーンデータを収集および相関。RPKIデータを収集および相関。ストリーミングテレメトリを介してインフラデータを収集する。

* [softflowd](https://github.com/irino/softflowd): libpcapを使用してネットワークインターフェースにプロミスキュアスにリスニングし、NetFlowデータをエクスポートするフローベースのネットワークモニタ。

* [TTT](https://www2.sonycsl.co.jp/person/kjc/kjc/software.html#ttt): （Tele Traffic Tapper）はtcpdumpの別の派生だが、リアルタイム、グラフィカル、リモートトラフィック監視が可能。tttはtcpdumpを置き換えるものではなく、tcpdumpで何を調べるべきかを助けるものである。tttはネットワークを監視し、時間帯内のトラフィックの主な貢献者を自動的に特定する。グラフはデフォルトで1秒ごとに更新される。

* [Yaf](https://tools.netsa.cert.org/yaf/yaf.html): 信頼性の高いソフトウェアであり、非常にしっかりしており、pcapからフロー記録を生成できる。これは、大きなpcapファイルをインデックス化するか、あるいはパケットキャプチャを行う際に非常に便利である。最新バージョンでは、ペイロードを抽出し、フロー記録に埋め込むことができる。

* [sharppcap](https://github.com/dotpcap/sharppcap): 完全に管理された、クロスプラットフォーム（Windows、Mac、Linux）の.NETライブラリで、ライブおよびファイルベースのデバイスからのパケットをキャプチャできる。libpcapおよびnpcapの信頼性と堅牢性を備えたラッパーである。

トラフィック分析・検査<a name="analysis"></a>
--------------------------------------------------
* [Brim](https://www.brimsecurity.com/): Brimは、Zeekログの豊かさとパケットの詳細を融合したツールである。Zeekログがほとんどの質問に迅速に答えられる一方で、詳細を掘り下げたいときに、パケットに即座にアクセスできる。Wiresharkは常に1クリックで利用可能である。

* [BruteShark](https://github.com/odedshimon/BruteShark): オープンソースでクロスプラットンのネットワークフォレンジック分析ツールであり、多くの機能を備えている。パスワード抽出、視覚的なネットワークマップ表示、TCPセッションの再構築、暗号化パスワードのハッシュ抽出、さらにはハッシュキャットフォーマットに変換してオフラインブートフォース攻撃を行うことができる。

* [AIEngine](https://bitbucket.org/camp0/aiengine): 次世代のインタラクティブ／プログラマブルパケット検査エンジンであり、人間の介入なしで学習可能、NIDS機能、DNSドメイン分類、ネットワークコレクタなど、多くの機能を備えている。AIEngineはネットワーク／セキュリティプロフェッショナルがトラフィックを識別し、NIDS、ファイアウォール、トラフィック分類などに使用するシグネチャを開発する際に支援する。

* [CapAnalysis](http://www.capanalysis.net/ca/): CapAnalysisは情報セキュリティ専門家、システム管理者、大量のキャプチャされたネットワークトラフィックを分析する必要があるすべての人々向けのウェブ可視化ツールです。ライブデモは[available](http://pcap.capanalysis.net/)で確認できます。

* [CapTipper](https://github.com/omriher/CapTipper): 悪意あるHTTPトラフィック探索

* [Chopshop](https://github.com/MITRECND/chopshop): MITREが開発したフレームワークで、アナリストがpynidsベースのデコーダおよび検出器の作成および実行を支援する。

* [CoralReef](https://www.caida.org/tools/measurement/coralreef/): CAIDAが開発したソフトウェアセットで、パッシブインターネットトラフィックモニタが収集したデータを分析する。libcoralというプログラミングライブラリを提供しており、libpcapに類似したもので、ATMおよび他のネットワークタイプに拡張されたものであり、CおよびPerlから利用可能。

* [DPDK](https://www.dpdk.org/): は、パケット処理を高速に実行するためのライブラリとドライバーのセットです。任意のプロセッサ上で動作できるように設計されています。最初にサポートされたCPUはインテルx86であり、現在はIBM Power 8、EZchip TILE-GxおよびARMにも拡張されています。主にLinuxユーザランドで動作します。FreeBSD向けのポートも提供されています。

* [DPKT](https://github.com/kbandla/dpkt): Pythonによるパケット生成・解析用のライブラリ

* [ECap](https://web.archive.org/web/20170715080351/https://bitbucket.org/nathanj/ecap/wiki/Home): (外部キャプチャ)は、ウェブフロントエンドを備えた分散型ネットワークスニファーです。2005年に以前に書かれたEcapですが、tcpdump-workersのメールリストに投稿された要望により、ここに登場します。興味があるなら、再開して更新してみるのも楽しいでしょう。

* [EtherApe](https://etherape.sourceforge.io/): は、ethermanをモデルにしたUnix用のグラフィカルネットワークモニタ。リンク層、IP、TCPモードを備え、ネットワーク活動をグラフィカルに表示します。ホストやリンクのサイズはトラフィックに応じて変化し、色分けされたプロトコルを表示します。Ethernet、FDDI、Token Ring、ISDN、PPPおよびSLIPデバイスをサポートしています。トラフィックのフィルタリングが可能で、ファイルからもネットワークからもトラフィックを読み取れます。

* [Ettercap](https://github.com/Ettercap/ettercap): は、ARPポイズニング（MITM攻撃の一種）を使用してトラフィックをキャプチャおよび解析するツールセットです（ネットワークを制御しているもののみで使用してください）

* [HttpSniffer](https://github.com/caesar0301/http-sniffer): マルチスレッドツールで、PCAPファイルからTCPフローの統計および埋め込まれたHTTPヘッダーをスニッフィングし、各TCPフローにHTTPが含まれている場合、JSON形式のテキストファイルにエクスポートします。

* [Ipsumdump](https://github.com/kohler/ipsumdump): TCP/IPダンプファイルを人間やプログラムが簡単に読み取れる自己説明型のASCIIフォーマットに要約します。ipsumdumpはネットワークインターフェースから、tcpdumpファイルから、既存のipsumdumpファイルからパケットを読み取ることができます。必要に応じて、tcpdumpまたはipsumdumpファイルを透明に圧縮解除します。また、トラフィックをランダムにサンプリングし、内容に基づいてフィルタリングし、IPアドレスを匿名化し、複数のダンプファイルのパケットをタイムスタンプで並べ替えます。さらに、実際のパケットデータを含むtcpdumpファイルを作成することも可能です。CLICKとして挿入モジュールを使用する場合も便利です。

* [ITA](https://web.archive.org/web/20181016104652/http://ita.ee.lbl.gov/html/traces.html): インターネットトラフィックアーカイブは、ACM SIGCOMMがスポンサリーする、インターネットネットワークトラフィックのトレースを広くアクセスできるようにする、モダレートなリポジトリです。これらのトレースは、ネットワークの動的性、使用特徴、成長パターンを研究するため、またトレース駆動シミュレーションの材料として利用できます。アーカイブは、原始的なトレースデータをより管理しやすい形式に変換するプログラム、合成トレースを生成するプログラム、およびトレースを分析するプログラムにも開放されています。

* [Joy](https://github.com/cisco/joy): joyは、暗号化されたトラフィック（例：HTTPSトラフィック）の分類を支援するために開発されたトラフィック分析およびパースツールです。pcapファイルを、キャプチャ統計や特徴に関する詳細を含むJSONファイルにパースできます。

* [Libcrafter](https://github.com/pellegre/libcrafter): C++用の高度なライブラリで、ネットワークパケットの作成とデコードを容易にします。ほとんどの一般的なネットワークプロトコルのパケットを作成またはデコードし、ネットワークに送信し、キャプチャし、リクエストとレスポンスをマッチングできます。

* [Libnet](https://github.com/libnet/libnet): ネットワークパケットの構成と処理を支援するルーチンのコレクションです。低レベルのネットワークパケットの整形、処理、注入に向けたポータブルなフレームワークを提供します。libnetはIP層およびリンク層でのポータブルパケット作成インターフェースを提供し、さらに多くの補助および補完機能を備えています。libnetを使用することで、迅速かつ簡単なパケットアセンブリアプリケーションを短時間で作成できます。

* [Libnids](http://libnids.sourceforge.net/): ラファル・ヴォイトズクが設計した、ネットワークインシデント検知システムのEコンポーネントの実装です。Linux 2.0.xのIPスタックをエミュレートしています。libnidsはIPデフラグメント、TCPストリームのアセンブリ、TCPポートスキャン検知を提供します。libnidsの最も価値のある特徴は信頼性です。複数のテストが行われ、libnidsが保護されたLinuxホストの動作を可能な限り正確に予測できることが証明されています。

* [Multitail](https://www.vanheusden.com/multitail/): 現在、tcpdump出力のカラーリングスケームが含まれており、フィルタリング、タイムスタンプをタイム文字列に変換するなど、多くの機能を提供しています。

* [Netsniff-ng](https://www.github.com/borkmann/netsniff-ng): Netsniff-ngは、無料のLinuxネットワークユーティリティのツールキットであり、あなたの日常的なLinuxネットワーク設定に便利なスイス軍刀です。

* [NetDude](http://netdude.sourceforge.net/): (ネットワークダンプデータディスプレイおよびエディタ)。ウェブページによると、「これは、tcpdumpトレースファイル内のパケットに対して詳細な変更を施すためのGUIベースのツールです。」

* [Network Expect](https://www.netexpect.org/): は、ネットワークトラフィックと相互作用できるツールを簡単に構築できるフレームワークです。スクリプトに従い、ネットワークにトラフィックを注入し、受信したネットワークトラフィックに基づいて決定を行い、それに応じた行動をとります。解釈可能な言語により分岐と高レベルの制御構造が提供され、ネットワークとの相互作用を制御します。Network Expectはパケットキャプチャにはlibpcap、パケット解析にはlibwireshark（Wiresharkプロジェクトから）を使用しています。（GPL、BSD/Linux/OSX）。

* [nfdump](https://github.com/phaag/nfdump): は、ネットワークデバイスからフローデータを収集・処理・分析するための強力なツールセットです。

* [NFStream](https://github.com/nfstream/nfstream): は、オンラインまたはオフラインのネットワークデータを扱う際に、簡単で直感的なデータ構造を提供するPythonフレームワークです。これは、実用的な現実世界のネットワークデータ分析においてPythonの基本的な高レベル構成ブロックとなることを目的としています。さらに、実験間のデータ再現性を確保するための一般的なネットワークデータ分析フレームワークとしての目標を持っています。

* [Ntop](http://www.ntop.org/): Ntopは、ネットワーク使用量を表示するネットワークトラフィックプローブで、人気のあるtop Unixコマンドと類似しています。Ntopはlibpcapに基づいており、UnixプラットフォームおよびWin32上でほぼすべてのプラットフォームで実行できるように設計されています。

* [Ntopng](https://www.ntop.org/products/traffic-analysis/ntop/): Ntopngは、オリジナルのNtopの次世代バージョンであり、ネットワーク使用量を表示するネットワークトラフィックプローブです。Ntopはlibpcapに基づいており、Unixプラットフォーム、MacOSXおよびWin32上でほぼすべてのプラットフォームで実行できるように設計されています。

* [Ostinato](https://ostinato.org/): Ostinatoは、パケットの作成・編集・再生およびトラフィック生成を行う、使いやすいGUIを備えたマルチプラットフォームツールです。拡張機能には、高速10G/25G/40Gトラフィック生成およびスクリプト・自動化用PythonAPIが含まれています。Windows、MacOS、LinuxおよびCML、EVE-NG、GNS3といったラボ環境でも動作します。

* [packemon](https://github.com/ddddddO/packemon): パケットモンスター（っ‘-’)╮=͟͟͞͞◒ ヽ( '-'ヽ) 任意の入力パケットを送信し、ネットワークインターフェース（デフォルト：eth0）上でパケットを監視するTUIツールです。

* [PacketQ](https://github.com/dotse/PacketQ): PCAPファイルに対して基本的なSQLフロントエンドを提供するツール。出力はJSON、CSV、XMLであり、組み込みのウェブサーバーとJSON-API、そして見やすいAJAXGUIを備えています。

* [Pcap2har](https://github.com/andrewf/pcap2har): dpktライブラリを使用して.PCAPネットワークキャプチャファイルをHTTPアーカイブファイルに変換するプログラムです。

* [PcapPlusPlus](https://github.com/seladb/PcapPlusPlus): PcapPlusPlusは、マルチプラットフォームのC++ネットワークスヌーピングおよびパケット解析・操作フレームワークです。軽量で効率的かつ使いやすいように設計されています。libpcap、WinPcap、DPDKおよびPF_RINGといった人気エンジンにC++ラッパーとして提供されています。また、Ethernet、IPv4、IPv6、ARP、VLAN、MPLS、PPPoE、GRE、TCP、UDP、ICMP、DNSおよびHTTPやSSL/TLSといったレイヤ7プロトコルを含む多くのプロトコルの解析・編集機能を備えています。

* [pcaptoparquet](https://github.com/nokia/pcaptoparquet): pcaptoparquetは、PCAPまたはPCAPNGファイルを構造化データ形式（主にApache Parquet）に変換するためのPythonパッケージです。このツールは、パケットデータを抽出・解読・変換し、分析および可視化に適したクエリ可能なデータセットに変換することを目的としています。ツールはコマンドラインおよびプログラムインターフェースをサポートしており、さまざまなネットワーク分析ワークフローへの統合が可能です。

* [pkt2flow](https://github.com/caesar0301/pkt2flow): パケットをフローに分類するためのシンプルなユーティリティです。非常にシンプルであり、一つのタスクしか目的としていません。深層パケットインスペクションやフロー分類において、特定のフローの特徴を分析することが一般的です。tcpflows、tcpslice、tcpsplitといった既存ツールを使用したが、これらはすべてトレースの量を減らす（要件に従う）か、パケットをフローのペイロードに類似させる（要件を超える）ように試みています。このようなツールは、さらに処理を加えることなくパケットをフローに分類するシンプルなツールは見つかりませんでした。

* [potiron](https://github.com/CIRCL/potiron): ネットワークキャプチャを標準化し、インデックス化し、豊かにし、可視化します。

* [pyshark](https://kiminewt.github.io/pyshark/): tsharkのPythonラッパーであり、wiresharkのディスカイセータを使用してPythonでのパケット解析を可能にします。多くのPythonパケット解析モジュールがありますが、このモジュールは実際にパケットを解析するのではなく、tshark（wiresharkのコマンドラインツール）がXMLをエクスポートできる機能を単に利用しています。

* [Sanitize](https://web.archive.org/web/20190210101529/http://ita.ee.lbl.gov/html/contrib/sanitize.html): Sanitizeは、tcpdumpトレースをセキュリティおよびプライバシーの懸念を軽減するために、ホストをリナンバーし、パケットのコンテンツを削除するための5つのBourneシェルスクリプトのコレクションです。各スクリプトはtcpdumpトレースファイルを入力として受け取り、標準出力に固定列形式の簡略化されたASCIIファイルを生成します。

* [Scapy](http://www.secdev.org/projects/scapy/): Scapyは、強力なインタラクティブパケット操作プログラムです。多くのプロトコルのパケットを生成または解読し、ネットワークに送信し、キャプチャし、リクエストとレスポンスをマッチングし、さらに多くの機能を提供できます。スキャン、トラッサート、プローブ、ユニットテスト、攻撃、ネットワーク発見（hping、nmapの85％、arpspoof、arp-sk、arping、tcpdump、tethereal、p0fなどに置き換えることができます）といった古典的なタスクを簡単に処理できます。また、他のツールが処理できない多くの特定タスク（無効なフレームの送信、自作802.11フレームの注入、技術の組み合わせ（VLANホップ＋ARPキャッシュポイズニング、WEP暗号化チャネルでのVOIP解読、…）など）においても非常に優れたパフォーマンスを発揮します。

* [SiLK](https://tools.netsa.cert.org/silk/): SiLK（インターネットレベル知識システム）は、大規模ネットワークのセキュリティ分析を支援するためのトラフィック分析ツールのコレクションです。SiLKツールセットは、ネットワークフローデータの効率的な収集、保存、および分析をサポートしています。

* [Sniff](http://www.thedumbterminal.co.uk/software/sniff.html): tcpdumpプログラムの出力を読みやすく、解析しやすいようにします。

* [Snort](https://www.snort.org/): Snortは、Sourcefire（現在はCiscoが所有）が開発したオープンソースネットワークインシデント防止および検出システム（IDS/IPS）です。署名、プロトコル、異常検出による検査の利点を組み合わせることで、Snortは世界中で最も広く導入されたIDS/IPS技術となっています。ダウンロード数は数百万件、登録ユーザーは約50万人とされ、SnortはIPSの標準として確立されています。

* [Socket Sentry](https://github.com/rhasselbaum/socket-sentry): Socket Sentryは、KDE Plasmaに組み込まれたリアルタイムネットワークトラフィックモニタリングツールで、iftopやnetstatといったツールの精神を反映しています。

* [Squey](https://squey.org): 大規模PCAPファイルを探索し、異常や弱い信号を検出するためのインタラクティブ可視化ソフトウェアです。

* [Suricata](https://suricata-ids.org): Suricataは、無料でオープンソースであり、成熟し、高速かつ堅牢なネットワーク脅威検出エンジンです。Suricataエンジンはリアルタイムインシデント検出（IDS）、インラインインシデント防止（IPS）、ネットワークセキュリティモニタリング（NSM）およびオフラインpcap処理を可能にします。

* [TCP-Reduce](http://ita.ee.lbl.gov/html/contrib/tcp-reduce.html): TCP-Reduceは、tcpdumpトレースを1行の要約に簡略化するためのBourneシェルスクリプトのコレクションです。スクリプトはTCP SYN/FIN/RSTパケットのみを確認します。トレース中にSYNパケットが含まれていない接続（トレースの初期部分にある接続など）は、要約に表示されません。内容が欠落しているパケット（ガベージパケット）はstderrに「bogon」として報告され、削除されます。場合によっては、シーケンス番号が変更されたリトランスミッションによって誤った大きな接続サイズが報告され、常に大きな接続（100MB以上）の妥当性を確認してください。

* [Tcpdpriv](http://ita.ee.lbl.gov/html/contrib/tcpdpriv.html): Tcpdprivは、ネットワークインターフェース（またはtcpdumpの-wオプションで作成されたトレースファイル）上で収集されたパケットから、ユーザーのデータやアドレスなどの機密情報を除去するためのプログラムです。TcpdprivはTCPおよびUDPのペイロードを削除し、他のプロトコルのすべてのIPペイロードを削除します。複数のアドレスシャッフル手法を実装しており、順次番号法およびその変種、アドレスプレフィックスを保持するハッシュ法を含みます。

* [Tcpflow](https://github.com/simsong/tcpflow): TCP接続（フロー）の送信データをキャプチャし、プロトコル分析やデバッグに適した形で保存するプログラムです。'tcpdump'のようなプログラムは、ワイヤー上で見られるパケットの概要を表示しますが、実際に送信されているデータを保存しません。一方、tcpflowは実際のデータストリームを再構成し、各フローを別ファイルに保存して後で分析できます。また、必要に応じて、各TCPフローごとにpcapフローを分離し、詳細な検証が可能です。[Original link](http://www.circlemud.org/jelson/software/tcpflow/)。

* [Tcplook](http://ita.ee.lbl.gov/html/contrib/tracelook.html): Tracelookは、tcpdumpの-wオプションで作成されたトレースファイルの内容をグラフィカルに閲覧するためのTcl/TKプログラムです。Tracelookはすべてのプロトコルを確認すべきですが、現在はTCP接続のみを確認しています。このプログラムは遅く、システムリソースを大量に消費します。

* [Tcpreplay](https://github.com/appneta/tcpreplay): libnet を使ってインターフェース上で pcap ファイルを再放送する.

* [Tcpslice](https://github.com/pyke369/tcpsplice): Tcpslice は tcpdump の -w フラグで生成されたパケットトレースファイルの一部を抽出するツールであり、複数のトレースファイルを結合し、あるいは時間に基づいて1つ以上のトレースファイルの一部を抽出できる.

* [Tcpsplit](https://github.com/pmcgleenon/tcpsplit): 1つの libpcap パケットトレースを、TCP接続の境界で分割して、TCP接続が2つのサブトレースに渡って分割されないようにするツール。これは、大規模なトレースファイルを詳細分析に適した形にし、トレースの一部にのみ分析を行うためのサブセットを作成する際に有用である.

* [Tcpstat](https://frenchfries.net/paul/tcpstat/): tcpstat は、vmstat がシステム統計を報告するように、ネットワークインターフェースの統計を報告するツール。tcpstat は特定のインターフェースを監視するか、あるいは以前に保存された tcpdump データをファイルから読み込むことで情報を取得する.

* [Tcptrace](https://github.com/blitz/tcptrace): オハイオ大学のシャウン・オステルマンが開発した、TCPダンプファイルの分析用ツール。入力として、tcpdump、snoop、etherpeek、HP Net Metrix、WinDump などの人気パケットキャプチャプログラムが生成するファイルを受け取ることができる。tcptrace は、各接続についてelapsed time、送受信されたバイトおよびセグメント、リトランスミッション、リターンタイム、ウィンドウアドバタイズ、スループットなど、さまざまな情報を持つ出力タイプを生成できる。また、さらに分析に必要なグラフも生成できる.

* [TraceWrangler](https://www.tracewrangler.com/): TraceWrangler は、Windows（またはWINEを使用してLinux）上で動作するネットワークキャプチャファイルツールキットであり、PCAPおよび新しいPCAPngファイルフォーマットをサポートしている。PCAPおよびPCAPngファイル（「トレースファイル」「キャプチャファイル」「パケットキャプチャ」とも呼ばれる）のセキュリティ上の情報の削除や匿名化を容易に実行できる。敏感なデータを削除または置き換えながら、使いやすさを確保している.

* [Tstat](http://tstat.tlc.polito.it/): ネットワークおよびトランスポートレベルのトラフィックパターンに関するいくつかの洞察を提供できる、パッシブなスニファー。非常に豊かなフロー機能を備えている.

* [WAND](https://research.wand.net.nz/): ウェイカト大学から開発された、libtrace をベースにしたネットワークトラフィック処理用のツールの素晴らしいコレクション。このプロジェクトに私は大いに好意を抱いている.

* [WinDivert](https://github.com/basil00/WinDivert): Windows用のユーザモードパケットインターセプション用のライブラリ.

* [WinDump](https://www.winpcap.org/windump/): Windows用のtcpdumpに相当するツールであり、WinPcapを使用する.

* [WinPcap](https://www.winpcap.org/): Guy Harris によるWinPcapおよびWinDumpの状態に関するメッセージの抜粋.

* [WireEdit](https://wireedit.com/): WireEdit は、ネットワークパケットの自由なデスクトップWYSIWYGエディタ。パケットの構造やエンコーディングルールを理解しなくても、任意のスタック層を「豊かなテキスト」として編集できる。入出力ファイルフォーマットは Pcap である.

* [Wireshark suit](https://wiki.wireshark.org/Tools): パケットアナライザおよびプロトコルデコーダをサポートする、よく知られたツールセット。また、一般的な使用に必要ないくつかの実用ツールおよびスクリプトも含まれている.

* [Xplot](http://www.xplot.org/): 1980年代後半に書かれた、TCPパケットトレースの分析を支援するプログラムxplot.

* [yaraPcap](https://github.com/kevthehermit/YaraPcap): HTTP PCAPをYARAで処理

* [yaraprocessor](https://github.com/MITRECND/yaraprocessor): yaraprocessor により、YARAは個別のパケットペイロードおよびそれらのペイロードの結合に対して実行可能。元々はChopshopで使用されたが、それなしでも使用できる.

* [Zeek](https://zeek.org/): pcapやネットワークトラフィックの分析・検査を支援するツールです。
「Zeekは、大規模環境での意味的なセキュリティ監視に重点を置いた、包括的なネットワークトラフィック分析基盤です。従来型の侵入検知・防止システムとは異なり、柔軟な枠組みによって詳細でカスタマイズ可能な監視を実現します。1990年代半ばから実運用され、20年以上の研究に支えられています。」

DNSユーティリティ <a name="dnstools"></a>
--------------------------------------------

* [dnsgram](https://doc.powerdns.com/authoritative/manpages/dnsgram.1.html): dnsgram は、間歇的なリゾルバーの失敗をデバッグするためのツール。1つ以上の入力PCAPファイルを受け取り、5秒ごとのセグメントの統計を生成し、間歇的なリゾルバー問題を研究できる.

* [dnsreplay](https://doc.powerdns.com/authoritative/manpages/dnsreplay.1.html): Dnsreplay は、記録された質問と回答を指定された名前サーバーに再実行し、その後、どの回答が一致したか、悪化または改善したかを報告する。そして、ダンプファイルに記録されたものと、実際のものとの回答およびその他のメトリクスを比較する.

* [dnsscan](https://doc.powerdns.com/authoritative/manpages/dnsscan.1.html): dnsscan は、1つ以上のPCAP形式のINFILEを受け取り、各クエリタイプごとのクエリ数のリストを生成する.

* [dnsscope](https://doc.powerdns.com/authoritative/manpages/dnsscope.1.html): dnsscope は、入力PCAPを受け取り、いくつかの簡単な統計を生成し、コンソールに出力する。

* [dnswasher](https://doc.powerdns.com/authoritative/manpages/dnswasher.1.html): dnswasherはPCAP形式の入力ファイルを受け取り、IPアドレスを暗号化しながらPCAPファイルとして出力します。これは、ユーザーのプライバシーを保護しつつ第三者とデータを共有する際に有用です。


ファイル抽出<a name="fileextraction"></a>
--------------------------------------------

* [Chaosreader](https://github.com/brendangregg/Chaosreader): snoopやtcpdumpログからTCP/UDP/...セッションをトレースし、アプリケーションデータを取得するための無料ツールです。これは「any-snarf」タイプのプログラムであり、ネットワークトラフィックログ内のキャプチャデータからtelnetセッション、FTPファイル、HTTP転送（HTML、GIF、JPEG、...）、SMTPメール、...などを取得します。すべてのセッションの詳細をリンクするHTMLインデックスファイルが作成され、telnet、rlogin、IRC、X11およびVNCセッションのリアルタイム再生プログラムや、画像報告、HTTP GET/POSTコンテンツ報告などのレポートが提供されます。

* [Dsniff](https://www.monkey.org/~dugsong/dsniff/): Dsniffはネットワーク監視およびパッチテストに使用されるツールの集合です。dsniff、filesnarf、mailsnarf、msgsnarf、urlsnarf、webspyは、興味深いデータ（パスワード、メール、ファイルなど）を無作為に監視します。arpspoof、dnsspoof、macofは、通常は攻撃者にアクセスできないネットワークトラフィック（例：レイヤー2スイッチングによるもの）を中継するためのツールです。sshmitmおよびwebmitmは、SSHおよびHTTPSセッションに対して、アドホックPKIにおける脆弱なバインディングを活用して、アクティブな「モンキーインザミッド」攻撃を実行します。

* [Foremost](https://github.com/jonstewart/foremost): ヘッダー、フッター、および内部データ構造に基づいてファイルを回復するためのコンソールプログラムです。このプロセスは一般的に「データカーリング」と呼ばれます。Foremostはdd、Safeback、Encaseなどによって生成されたイメージファイル、または直接ドライブに適用できます。ヘッダーおよびフッターは設定ファイルで指定できますが、あるいはコマンドラインスイッチを使用して、組み込みファイルタイプを指定できます。これらの組み込みタイプは、特定のファイルフォーマットのデータ構造を確認することで、より信頼性高く、速くファイルを回復できます。

* [Justniffer](https://onotelli.github.io/justniffer/): Justnifferはネットワークプロトコルアナライザーであり、ネットワークトラフィックをキャプチャし、カスタマイズされたログを生成できます。Apacheウェブサーバーログファイルをエミュレートし、応答時間のトレースを行い、HTTPトラフィックからすべての「インターセプトされた」ファイルを抽出できます。

* [NetworkMiner](https://www.netresec.com/index.ashx?page=NetworkMiner): NetworkMinerはWindows用のネットワークフォレンジック分析ツール（NFAT）ですが、Linux／Mac OS X／FreeBSDでも動作します。NetworkMinerは、ネットワークにトラフィックを送らないで、オペレーティングシステム、セッション、ホスト名、開いているポートなど、ネットワークの情報を検出するためのパッシブなネットワークスニファー／パケットキャプチャツールとして使用できます。また、PCAPファイルをパースし、オフライン分析を行うとともに、PCAPファイルから送信されたファイルおよび証明書を再生成・再構成できます。

* [pcapfex](https://github.com/vikwin/pcapfex): パケットキャプチャフォレンジック証拠エクストラクタ（pcapfex）は、パケットキャプチャファイルからファイルを検出し、抽出するツールです。その強みは、使いやすさにあります。PCAPファイルを提供するだけで、すべてのファイルを抽出しようとします。これは拡張可能なプラットフォームであり、追加のファイルタイプを認識・抽出できるように簡単に追加できます。

* [scalpel](https://github.com/sleuthkit/scalpel): Scalpelはオープンソースのデータカーリングツールです。

* [Snort](https://www.snort.org/): Sourcefireによって開発されたオープンソースネットワークインシデント防止および検知システム（IDS/IPS）で、現在はCiscoが所有しています。シグネチャ、プロトコル、異常検知に基づく検査の利点を組み合わせることで、Snortは世界中で最も広く導入されているIDS/IPS技術です。

* [Tcpick](http://tcpick.sourceforge.net/): テキストモードのスニファーであり、libpcapベースでTCPストリームを追跡、再構成、並び替えできます。Tcpickはキャプチャされたフローを異なるファイルに保存したり、ターミナルに表示したりでき、FTPやHTTP経由で送信されるファイルをスニファリングする際に有用です。ターミナルにすべてのストリームを表示でき、接続が終了した場合、ヘキサダンプ、ヘキサダンプ＋アスキー、印刷可能な文字のみ、rawモードなど、さまざまな表示モードで表示できます。

* [Tcpxtract](http://tcpxtract.sourceforge.net/): ファイルタイプのヘッダーおよびフッター（「カーリング」とも呼ばれる）に基づいてネットワークトラフィックからファイルを抽出するためのツールです。ファイルタイプのヘッダーおよびフッターに基づいてファイルを抽出することは、長年にわたるデータ回復技術です。

* [Xplico](http://www.xplico.org/about): Xplicoの目的は、インターネットトラフィックキャプチャからアプリケーションデータを抽出することです。たとえば、PCAPファイルからPOP、IMAP、SMTPプロトコルのメール、すべてのHTTPコンテンツ、SIPによるVoIP通話、FTP、TFTPなど、すべてのデータを抽出します。Xplicoはネットワークプロトコルアナライザーではありません。Xplicoはオープンソースのネットワークフォレンジック分析ツール（NFAT）です。XplicoはGNU一般公衆利用許諾（GPL）に基づいてリリースされ、一部のスクリプトはCreative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported（CC BY-NC-SA 3.0）ライセンスで提供されています。

USB
---
### キャプチャツール
* [usbmon](https://www.kernel.org/doc/Documentation/usb/usbmon.txt): LinuxカーネルのUSBパケットキャプチャを実行するためのサブシステムです。
* [USBPcap](https://github.com/desowin/usbpcap): Windows向けのソリューションです。

### 分析
* [USBPcapOdinDumper](https://github.com/KOLANICH/USBPcapOdinDumper): USBキャプチャを解析・変換するツールです。 参照: `usbmon`、`USBPcap`、<https://gitlab.com/BenjaminDobell/Heimdall>


関連プロジェクト<a name="others"></a>
--------------------------------------

* [BPF for Ultrix](https://www.tcpdump.org/other/bpfext42.tar.Z): Ultrix 4.2向けのBPFのディストリビューションで、ソースコードおよびバイナリモジュールが含まれています。

* [BPF+](https://andrewbegel.com/papers/bpf.pdf): Andrew Begel、Steven McCanne、およびSusan Grahamによる「一般化パケットフィルタアーキテクチャにおけるグローバルデータフロー最適化」に関する研究。

* [FFT-FGN-C](https://github.com/caesar0301/awesome-pcaptools/blob/d6f8b267e4359e693815bf6c331c4951577c6b6a/ftp:/ita.ee.lbl.gov/html/contrib/fft_fgn_c.html): 自己類似プロセスの一種である分数ガウシアンノイズを合成するためのプログラムです。このプログラムは高速ですが、近似値です。分数ガウシアンノイズは自己類似プロセスの一種にすぎません。このプログラムをネットワークトラフィックの合成に使用する際は、求めているトラフィックが他のプロセスでモデル化される方が適切である可能性があることに注意する必要があります。

* [Haka](http://www.haka-security.org/): セキュリティを目的としたオープンソース言語で、プロトコルを記述し、（リアルタイムでキャプチャされた）トラフィックにセキュリティポリシーを適用できます。Haka言語の範囲は二つあります。まず、不要なパケットをフィルタリング・変更・削除し、悪意ある活動をログ記録・報告するためのセキュリティルールを書くことができます。第二に、Hakaはネットワークプロトコルおよびその下位状態マシンを指定するための文法を備えています。

* [RIPE-NCC Hadoop for PCAP](https://github.com/RIPE-NCC/hadoop-pcap): Hadoop用のパケットキャプチャ（PCAP）ファイルを読み取るライブラリです。PCAPを読み取るコードをバンドルしています。MapReduceジョブ内でPCAPファイルをネイティブに読み取る用途があります。また、SQLのようなコマンドでPCAPをクエリできるHiveのシリアル化／デシリアライズ（SerDe）機能も備えています。

* [Traffic Data Repository at the WIDE Project](https://www2.sonycsl.co.jp/person/kjc/papers/freenix2000/): ネットワーク研究者および運用者にとって、ネットワークトラフィックのトレンドを把握し、その中にある異常を検出することがますます重要になっています。本論文は、WIDEプロジェクトにおける、バックボーントラフィックの詳細情報を含むトラフィックデータリポジトリを構築するための無料ツールセットを収集する継続的な努力について説明しています。トラフィックトレースはtcpdumpで収集され、プライバシー情報が削除された後、公開されます。ユーザーのプライバシーに関する問題を検討し、WIDEトラフィックリポジトリを構築するために使用されたツールについて述べ、IPv6導入初期段階における現在の状況と発見について報告します。

* [Usenix93 Paper on BPF](https://www.tcpdump.org/papers/bpf-usenix93.pdf): libpcapのインターフェースは、BSDパケットフィルタのアーキテクチャに基づいたフィルタリングメカニズムをサポートしています。BPFについては、1993年のWinter Usenix論文『The BSD Packet Filter: A New Architecture for User-level Packet Capture』に記述されています。


コントリビューター
------------

すべてのコントリビューターに感謝します ❤

[![awesome-pcaptools contributors](https://contrib.rocks/image?repo=caesar0301/awesome-pcaptools "awesome-pcaptools contributors")](https://github.com/caesar0301/awesome-pcaptools/graphs/contributors)
