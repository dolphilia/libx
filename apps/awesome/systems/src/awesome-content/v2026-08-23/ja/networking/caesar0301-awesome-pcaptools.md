---
title: "Awesome PCAPTools"
description: "Linuxの帯域監視、パケット取得・解析、DNSトレース、ファイル抽出、USB取得のツールと関連研究。"
licenseSource: "github-caesar0301-awesome-pcaptools-readme-md"
---

# Awesome PCAPTools

Linuxの帯域監視、ネットワークトラフィックの取得・解析、DNSトレースの処理、キャプチャからのファイル抽出に使うツールを紹介します。USBの取得・解析、パケットフィルター、トラフィック合成、研究論文も扱うリンク集であり、ツールのコードやファイル自体は提供しません。

## Linuxコマンド<a id="linuxcmds"></a>

* Bmon: Bandwidth Monitor。nloadに似たツールで、システム上の全ネットワークインターフェースのトラフィック負荷を表示。グラフとパケット単位の詳細欄も備える。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/bmon-640x480.png)

* Bwm-ng: Bandwidth Monitor Next Generation。利用可能な全ネットワークインターフェースについて、送受信データの速度をリアルタイムで簡潔に表示する負荷モニター。 [画面例](https://a.fsdn.com/con/app/proj/bwmng/screenshots/10965.jpg/245/183/1)

* CBM: Color Bandwidth Meter。ネットワークインターフェースのトラフィック量を表示する小さな帯域モニター。追加オプションはなく、トラフィック統計をリアルタイムで更新。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/cbm.png)

* Collectl: dstatに似た形式でシステム統計を表示し、CPU、メモリ、ネットワークなど各種資源の統計を収集。リンク先の画面例はネットワーク使用量と帯域の表示を示す。 [画面例](https://www.cse.wustl.edu/~jain/cse567-08/ftp/hw/collectl.png)

* Dstat: Python製のツールで、各種システム統計をバッチ形式で表示し、CSVなどのファイルに記録。リンク先の画面例はネットワーク帯域の表示を示す。 [画面例](https://www.tecmint.com/wp-content/uploads/2016/09/Dstat-Linux-Monitoring.png)

* Ifstat: ネットワーク帯域をバッチ形式で表示。出力は記録しやすく、他のプログラムやユーティリティで解析しやすい形式。 [画面例](https://community.linuxmint.com/img/screenshots/ifstat.png)

* Iftop: 個々のソケット接続で流れるデータを計測し、Nloadとは異なる方式で動作。pcapライブラリでネットワークアダプターの送受信パケットを取得し、サイズと個数から使用帯域を算出。接続ごとの帯域を表示できる一方、対応するプロセス名やIDは表示できない。pcapフィルターで指定したホスト接続だけに絞って帯域使用量を表示可能。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/iftop.png)

* Iptraf-ng: 対話式で色分け表示するIP LANモニター。個々の接続とホスト間のデータ量を表示。固定原文では、開発が終了したiptrafから派生し、保守が続くフォークとして紹介。 [画面例](https://wiki.ipfire.org/addons/iptraf-ng/iptraf-ng_monitor.png)

* Jnettop: [Jnettop](https://sourceforge.net/projects/jnettop/) — 実行ホストを通過するトラフィックを取得し、使用帯域順にストリームを表示するトラフィック可視化ツール。 [画面例](https://web.archive.org/web/20130509072433if_/http://jnettop.kubs.info/wiki/?binary=internal%3A%2F%2F76195466cc3bca92f8de7b404e240844.gif)

* Nethogs: プロセスごとの帯域使用量を表示し、使用量の多い順に並べる小さな「net top」ツール。帯域が急増した際の原因プロセスの特定に利用でき、PID、ユーザー、プログラムのパスを表示。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/nethogs.png)

* Netload: 現在のトラフィック負荷と、プログラム起動後の総転送バイト数を簡潔に表示。その他の機能はなく、netdiagに含まれる。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/netload.png)

* Netwatch: netdiagに含まれるツールで、ローカルホストとリモートホスト間の接続、および各接続のデータ転送速度を表示。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/netwatch.png)

* Nload: 受信と送信のトラフィックを別々に監視するコマンドラインツール。スケールを調整できるグラフも表示。使い方は簡単で、多数のオプションは備えない。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/nload.png)

* Pktstat: 有効な全接続と各接続のデータ転送速度をリアルタイムで表示。TCPやUDPなど接続の種類に加え、HTTPリクエストがある場合はその詳細も表示。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/pktstat.png)

* Slurm: デバイスの統計とASCIIグラフを表示するネットワーク負荷モニター。c、s、lキーで切り替える3種類のグラフに対応。機能は簡潔で、それ以外の負荷の詳細は表示しない。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/slurm.png)

* Speedometer: 指定インターフェースの受信・送信トラフィックをグラフで表示する小さなツール。原文ではグラフの見た目がよいと紹介。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/speedometer.png)

* Tcptrack: iftopに似たツールで、pcapライブラリでパケットを取得し、接続ごとの使用帯域などの統計を算出。標準的なpcapフィルターで特定の接続を監視可能。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/tcptrack.png)

* Trafshow: 現在有効な接続、プロトコル、各接続の転送速度を表示。pcap形式のフィルターで接続を絞り込み可能。 [画面例](https://www.binarytides.com/blog/wp-content/uploads/2014/03/trafshow.png)

* Vnstat: 他の多くのツールと異なり、バックグラウンドのサービス／デーモンで転送データ量を継続的に記録。その記録からネットワーク使用量の履歴レポートを作成可能。 [画面例](https://www.howtoforge.com/images/vnstat/big/vnstat9.png)

## トラフィックキャプチャ<a id="capture"></a>

* [Libpcap/Tcpdump](https://www.tcpdump.org/): コマンドラインのパケット解析ツールtcpdumpと、ネットワークトラフィックを取得する移植性のあるC/C++ライブラリlibpcapの公式サイト。

* [Deepfence PacketStreamer](https://github.com/deepfence/PacketStreamer): クラウドネイティブ環境向けのリモートパケット取得・収集ツール。固定原文では高性能な分散型tcpdumpと紹介。

* [Ngrep](https://github.com/jpr5/ngrep/): GNU grepの一般的な機能の多くをネットワーク層に適用。pcapに対応し、拡張正規表現や16進数の表現でパケットのデータペイロードを照合。固定原文ではEthernet、PPP、SLIP、FDDI、Token Ring、nullインターフェース上のTCP、UDP、ICMPに対応すると説明。tcpdumpやsnoopと同様のBPFフィルター論理にも対応。 [画面例](https://www.cyberciti.biz/media/new/cms/2012/12/ngrep.png)

* [clj-net-pcap](https://github.com/ruedigergad/clj-net-pcap): Clojure用のパケット取得ライブラリ。`clj-net-pcap`はjNetPcapを利用し、使いやすくする補助機能を追加。[clj-net-pcapに関する論文](http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6903107)はCOMPSACW 2014で発表。

* [jNetPcap](https://sourceforge.net/projects/jnetpcap/): LinuxとWindowsで利用できるJava用パケット取得ライブラリ。libpcapまたはWinPcapの機能をJava Native Interface（JNI）経由で利用。

* [Arkime](https://arkime.com/): 旧称Moloch。大規模でオープンソースの、インデックス付きパケット取得・検索ツール。

* [n2disk](https://www.ntop.org/products/traffic-recording-replay/n2disk/): 商用の、インデックス機能を備えたマルチギガビットのネットワークトラフィック記録ツール。ライブのネットワークインターフェースから完全長のパケットを取得してファイルに書き込み。固定原文では、適切なハードウェアで10 Gigabit/sを超える速度でもパケット損失なしで取得できると説明。

* [Netis Packet Agent](https://github.com/Netis/packet-agent): GREトンネルを利用するリモートデータ取得ツール。NICからパケットを取得し、GREでカプセル化して、監視・解析用のリモートマシンへ送信。

* [OpenFPC](https://github.com/leonward/OpenFPC): 軽量なフルパケットのトラフィック記録・バッファリングを提供するスクリプト群。専門知識のない利用者が市販の汎用ハードウェア（COTS）で分散型トラフィック記録を導入し、既存のアラート・ログツールと統合できることを目指す。

* [PCAPdroid](https://github.com/emanuele-f/PCAPdroid): root権限なしで端末のネットワークトラフィックを監視・エクスポートするAndroidアプリ。PCAP形式に出力し、Wiresharkなどでリアルタイムにも解析可能。内蔵モニターでユーザーアプリやシステムアプリによる疑わしい接続を検出。

* [PF_RING](https://www.ntop.org/products/packet-capture/pf_ring/): 固定原文でパケット取得速度を大幅に向上させると紹介されるネットワークソケットの実装。Linuxカーネル2.6.32以降に対応し、カーネルへのパッチは不要。PF_RING対応ドライバーで取得をさらに高速化。

* [pmacct](https://github.com/pmacct/pmacct): 多目的のパッシブネットワーク監視ツール群。IPv4/IPv6トラフィックなど転送プレーンのデータを計数・分類・集計・複製・エクスポート。BGP/BMP経由で制御プレーンのデータを収集して相関付け、RPKIデータも収集・相関付け。Streaming Telemetry経由でインフラのデータを収集。

* [softflowd](https://github.com/irino/softflowd): libpcapを使い、ネットワークインターフェースをプロミスキャスモードで監視してNetFlowデータを出力する、フロー単位のネットワークモニター。

* [TTT](https://www2.sonycsl.co.jp/person/kjc/kjc/software.html#ttt): Tele Traffic Tapper。tcpdumpの派生で、リアルタイムのグラフィカルなリモートトラフィック監視に対応。tcpdumpの代替ではなく、tcpdumpで調べる対象を見つけるための補助。時間窓内でトラフィック量の大きい対象を自動抽出し、既定では1秒ごとにグラフを更新。

* [Yaf](https://tools.netsa.cert.org/yaf/yaf.html): 固定原文で信頼性が高いと紹介される、pcapからフローレコードを生成するソフトウェア。大きなpcapの索引付けやパケット取得に利用。原文が最近の版として説明する版では、ペイロードの抽出とフローレコードへの格納にも対応。

* [sharppcap](https://github.com/dotpcap/sharppcap): Windows、Mac、Linuxに対応する完全マネージドの.NETライブラリ。ライブのデバイスとファイルベースのデバイスからパケットを取得。libpcapとnpcapのラッパーで、固定原文では信頼性と堅牢性を評価。

## トラフィック分析・検査<a id="analysis"></a>
* [Brim](https://www.brimsecurity.com/): Zeekログの豊富な情報と、パケットの詳細を組み合わせるツール。固定原文では両方の利点を備えると紹介。Zeekログで多くの疑問を素早く調べ、詳細が必要な際にはパケットへすぐアクセスし、Wiresharkを1クリックで開ける。

* [BruteShark](https://github.com/odedshimon/BruteShark): オープンソースでクロスプラットフォームのネットワークフォレンジック解析ツール。パスワード抽出、視覚的なネットワークマップ、TCPセッションの復元、暗号化パスワードのハッシュ抽出に対応。ハッシュをHashcat形式に変換してオフラインの総当たり攻撃にも利用可能。

* [AIEngine](https://bitbucket.org/camp0/aiengine): 固定原文で次世代と紹介される対話式・プログラム制御可能なパケット検査エンジン。人の介入なしでの学習、NIDS機能、DNSドメイン分類、ネットワーク収集などに対応。ネットワーク・セキュリティの専門家によるトラフィックの識別と、NIDS、ファイアウォール、トラフィック分類器などのシグネチャ作成を支援。

* [CapAnalysis](http://www.capanalysis.net/ca/): 情報セキュリティの専門家、システム管理者など、大量の取得済みネットワークトラフィックを解析する人向けのWeb可視化ツール。[実行デモ](http://pcap.capanalysis.net/)で試用可能。

* [CapTipper](https://github.com/omriher/CapTipper): 悪意のあるHTTPトラフィックを調べるツール。

* [Chopshop](https://github.com/MITRECND/chopshop): MITRE製のフレームワーク。APTの攻撃手法を扱うpynidsベースのデコーダー・検出器の作成と実行を支援。

* [CoralReef](https://www.caida.org/tools/measurement/coralreef/): CAIDA製の、パッシブなインターネットトラフィック監視で収集したデータを解析するソフトウェア群。libpcapに似て、ATMなど他のネットワーク形式へ拡張したlibcoralライブラリを提供。CとPerlから利用可能。

* [DPDK](https://www.dpdk.org/): 高速なパケット処理のためのライブラリとドライバー群。任意のプロセッサーで動作するよう設計され、最初の対応CPUはIntel x86。固定原文ではIBM Power 8、EZchip TILE-Gx、ARMへの対応も記載。主にLinuxのユーザー空間で動作し、一部の機能はFreeBSDへ移植。

* [DPKT](https://github.com/kbandla/dpkt): Python用のパケット生成・解析ライブラリ。

* [ECap](https://web.archive.org/web/20170715080351/https://bitbucket.org/nathanj/ecap/wiki/Home): External Capture。Webフロントエンドを備えた分散型ネットワークスニファー。2005年に作成され、tcpdump-workersメーリングリストでの要望に応えて紹介。原文の作者は、需要があれば開発を再開したいと述べている。

* [EtherApe](https://etherape.sourceforge.io/): ethermanをモデルにしたUnix用のグラフィカルネットワークモニター。リンク層、IP、TCPの各モードを備え、通信量に応じてホストとリンクの大きさを変え、プロトコルを色分け表示。Ethernet、FDDI、Token Ring、ISDN、PPP、SLIPデバイスに対応。トラフィックを絞り込み、ファイルからもライブのネットワークからも読み込み可能。

* [Ettercap](https://github.com/Ettercap/ettercap): ARPポイズニング（中間者攻撃の一種）を用いたトラフィック取得・解析ツール群。自分で管理するネットワークでのみ使用すること。

* [HttpSniffer](https://github.com/caesar0301/http-sniffer): PCAPファイルからTCPフローの統計とHTTPヘッダーを取得するマルチスレッドのツール。HTTPを運ぶ各TCPフローをJSON形式のテキストファイルへ出力。

* [Ipsumdump](https://github.com/kohler/ipsumdump): TCP/IPダンプファイルを、人やプログラムが読みやすい自己記述型のASCII形式に要約。ネットワークインターフェース、tcpdumpファイル、既存のipsumdumpファイルからパケットを読み込み、必要なら自動的に展開。無作為抽出、内容による絞り込み、IPアドレスの匿名化、複数ダンプの時刻順の並べ替えに対応。実際のパケットデータを含むtcpdumpファイルの作成や、CLICKへのモジュールとしての組み込みも可能。

* [ITA](https://web.archive.org/web/20181016104652/http://ita.ee.lbl.gov/html/traces.html): ACM SIGCOMMが支援する、管理者が内容を審査するInternet Traffic Archive。インターネットトラフィックのトレースを広く提供し、ネットワークの動態・使用特性・成長パターンの研究やトレース駆動シミュレーションに利用。生トレースを扱いやすくするプログラム、合成トレース生成やトレース解析のプログラムも受け入れる。

* [Joy](https://github.com/cisco/joy): HTTPSなど暗号化された通信の分類を支援するために開発された、トラフィック解析・構文解析ツール。pcapを、取得統計や特徴の詳細を含むJSONファイルへ変換。

* [Libcrafter](https://github.com/pellegre/libcrafter): ネットワークパケットの生成・デコードを容易にするC++用の高水準ライブラリ。一般的なプロトコルのパケットを生成・デコードし、ネットワークへ送信、取得、要求と応答の照合が可能。

* [Libnet](https://github.com/libnet/libnet): ネットワークパケットの組み立てと処理を支援するルーチン群。低水準のパケット整形・処理・注入に移植性のある枠組みを提供。IP層とリンク層のパケット生成インターフェースに加え、補助・補完機能を備え、簡単なパケット組み立てアプリを短時間で作成可能。

* [Libnids](http://libnids.sourceforge.net/): Rafal Wojtczukが設計したネットワーク侵入検知システムのEコンポーネントの実装。Linux 2.0.xのIPスタックを模倣し、IPの断片再構成、TCPストリームの組み立て、TCPポートスキャン検出に対応。固定原文では信頼性を重視し、保護対象のLinuxホストの挙動をできる限り正確に予測することをテストで確認したと説明。

* [Multitail](https://www.vanheusden.com/multitail/): tcpdump出力の監視用カラースキームを含むツール。フィルタリングや、タイムスタンプから時刻文字列への変換などにも対応。

* [Netsniff-ng](https://www.github.com/borkmann/netsniff-ng): 自由に利用できるLinux用ネットワークユーティリティのツールキット。日常のLinuxネットワーク作業を幅広く扱う。

* [NetDude](http://netdude.sourceforge.net/): NETwork DUmp data Displayer and Editor。元のWebページでは、tcpdumpのトレースファイル内のパケットを詳細に変更できるGUIツールと説明。

* [Network Expect](https://www.netexpect.org/): ネットワークトラフィックとやり取りするツールを作るフレームワーク。スクリプトに従ってトラフィックを注入し、受信内容に基づいて判断・実行。インタープリター型言語の分岐と高水準の制御構造でやり取りを制御。取得にはlibpcap、パケットの詳細解析にはWiresharkのlibwiresharkを利用。GPL、BSD/Linux/OSX対応。

* [nfdump](https://github.com/phaag/nfdump): ネットワークデバイスからフローデータを収集・処理・解析するツール群。

* [NFStream](https://github.com/nfstream/nfstream): オンライン・オフラインのネットワークデータを簡単かつ直感的に扱うため、高速で柔軟、表現力のあるデータ構造を提供するPythonフレームワーク。実用的なPythonネットワークデータ解析の高水準の基盤を目指し、研究者が実験間でデータを再現できる共通の解析フレームワークも目標とする。

* [Ntop](http://www.ntop.org/): Unixのtopコマンドに似た方法でネットワーク使用量を表示するトラフィックプローブ。libpcapを基盤とし、ほぼすべてのUnix環境とWin32で動作することを目指した移植性のある実装。

* [Ntopng](https://www.ntop.org/products/traffic-analysis/ntop/): 元のntopの次世代版で、Unixのtopコマンドに似た方法でネットワーク使用量を表示するトラフィックプローブ。固定原文ではntopをlibpcapベースの移植性のある実装とし、ほぼすべてのUnix環境、MacOSX、Win32での動作を目指すと説明。

* [Ostinato](https://ostinato.org/): 直感的なGUIを備えたパケット生成、pcap編集・再生、トラフィック生成ツール。追加機能には10/25/40Gの高速トラフィック生成と、スクリプト・自動化用Python APIがある。Windows、MacOS、Linuxに加え、CML、EVE-NG、GNS3の実験環境でも動作。

* [packemon](https://github.com/ddddddO/packemon): 任意の入力からパケットを送信し、任意のネットワークインターフェース上でパケットを監視するTUIツール。既定のインターフェースはeth0。

* [PacketQ](https://github.com/dotse/PacketQ): PCAPファイルへの基本的なSQLフロントエンドを提供。JSON、CSV、XMLを出力し、JSON API付きの内蔵WebサーバーとAJAX GUIも備え、原文ではGUIの見た目がよいと紹介。

* [Pcap2har](https://github.com/andrewf/pcap2har): dpktライブラリで.pcapのネットワークキャプチャファイルをHTTP Archiveファイルへ変換するプログラム。

* [PcapPlusPlus](https://github.com/seladb/PcapPlusPlus): 軽量で効率的に使いやすくすることを目指した、複数環境対応のC++ネットワーク取得・パケット解析・操作フレームワーク。libpcap、WinPcap、DPDK、PF_RINGのC++ラッパー。Ethernet、IPv4、IPv6、ARP、VLAN、MPLS、PPPoE、GRE、TCP、UDP、ICMP、DNS、およびHTTPやSSL/TLSなど第7層プロトコルの解析・編集に対応。

* [pcaptoparquet](https://github.com/nokia/pcaptoparquet): PCAP/PCAPNGを主にApache Parquetなどの構造化データへ変換するPythonパッケージ。パケットを抽出・デコード・変換し、解析や可視化に適した問い合わせ可能なデータセットを作成。コマンドラインとプログラムからの利用に対応し、各種ネットワーク解析の作業へ組み込み可能。

* [pkt2flow](https://github.com/caesar0301/pkt2flow): 追加の処理をせず、パケットをフローに分類することだけを目的とした簡潔なツール。DPIやフロー分類で特定フローの特徴を調べるために利用。原文の作者はtcpflows、tcpslice、tcpsplitを試したが、トレース量を減らす処理では要件を満たさず、フローのペイロードへ再構成する処理では要件を超え、単純に分類する既成ツールを見つけられなかったと説明。

* [potiron](https://github.com/CIRCL/potiron): ネットワークキャプチャを正規化、索引付け、情報補完、可視化するツール。

* [pyshark](https://kiminewt.github.io/pyshark/): Wiresharkのディセクターを使うtsharkのPythonラッパー。自らパケットを解析するPythonモジュールとは異なり、Wiresharkのコマンドラインツールtsharkが解析結果をXMLで出力する機能を利用。

* [Sanitize](https://web.archive.org/web/20190210101529/http://ita.ee.lbl.gov/html/contrib/sanitize.html): セキュリティとプライバシーへの配慮のため、ホストの番号を振り直し、パケット内容を除いてtcpdumpトレースを縮約する5つのBourneシェルスクリプト。各スクリプトはトレースファイルを入力し、固定列形式の縮約したASCIIファイルを標準出力へ出力。

* [Scapy](http://www.secdev.org/projects/scapy/): 対話式のパケット操作プログラム。多数のプロトコルのパケットを生成・デコードし、送信、取得、要求・応答の照合などに対応。スキャン、traceroute、プローブ、ユニットテスト、攻撃、ネットワーク探索を扱う。固定原文ではhping、nmapの85%、arpspoof、arp-sk、arping、tcpdump、tethereal、p0fなどを代替できると説明。無効フレームの送信、独自802.11フレームの注入、VLANホッピングとARPキャッシュポイズニングの組合せ、WEP暗号化チャネル上のVoIPデコードなどにも対応すると紹介。

* [SiLK](https://tools.netsa.cert.org/silk/): System for Internet-Level Knowledge。大規模ネットワークのセキュリティ解析を支援するトラフィック解析ツール群。フローデータの効率的な収集・保存・解析に対応。

* [Sniff](http://www.thedumbterminal.co.uk/software/sniff.html): tcpdumpの出力を読みやすく、解析しやすくするツール。

* [Snort](https://www.snort.org/): Sourcefire製のオープンソースの侵入検知・防止システム（IDS/IPS）。固定原文ではSourcefireはCisco傘下と説明。シグネチャ、プロトコル、異常に基づく検査を組み合わせる。原文では世界で最も広く導入されたIDS/IPSで、ダウンロード数は数百万、登録利用者は約500,000人、IPSの事実上の標準と紹介。

* [Socket Sentry](https://github.com/rhasselbaum/socket-sentry): iftopやnetstatと同様の考え方に基づく、KDE Plasma用のリアルタイムネットワークトラフィックモニター。

* [Squey](https://squey.org): 大きなPCAPを対話的に可視化し、異常や微弱な兆候を探るソフトウェア。

* [Suricata](https://suricata-ids.org): 無料でオープンソースのネットワーク脅威検知エンジン。固定原文では成熟度、速度、堅牢性を評価。リアルタイムの侵入検知（IDS）、インラインの侵入防止（IPS）、ネットワークセキュリティ監視（NSM）、オフラインpcap処理に対応。

* [TCP-Reduce](http://ita.ee.lbl.gov/html/contrib/tcp-reduce.html): tcpdumpトレース内のTCP接続を1接続1行に要約するBourneシェルスクリプト群。TCP SYN/FIN/RSTパケットだけを調べるため、トレース開始時に既に継続中の接続など、SYNが記録されていない接続は要約に含まれない。内容が欠けたパケットはbogonとして標準エラー出力へ報告し、破棄。シーケンス番号が変わる再送で、誤って非常に大きい接続サイズを報告する場合があるため、100 MB以上など大きな接続は必ず妥当性を確認すること。

* [Tcpdpriv](http://ita.ee.lbl.gov/html/contrib/tcpdpriv.html): ネットワークインターフェース、またはtcpdumpの-w引数で保存したトレース内のパケットから、利用者データやアドレスなどの機密情報を除去。TCP/UDPではペイロードを、それ以外のプロトコルではIPペイロード全体を除去。順次番号付けとその派生手法、アドレスのプレフィックスを維持するハッシュ法など、複数のアドレス攪乱手法を実装。

* [Tcpflow](https://github.com/simsong/tcpflow): TCP接続のデータを取得し、プロトコル解析・デバッグ用に保存。通常は実データを保存せずパケットの要約を示すtcpdumpと異なり、データストリームを復元し、各フローを別ファイルへ保存。必要ならpcapをTCPフローごとに分離して詳細な検査にも利用可能。[元のリンク](http://www.circlemud.org/jelson/software/tcpflow/)。

* [Tcplook](http://ita.ee.lbl.gov/html/contrib/tracelook.html): tcpdumpの-w引数で作成したトレースをグラフィカルに表示するTcl/TkプログラムTracelook。全プロトコルを調べる構想だが、固定原文ではTCP接続だけに対応。動作は遅く、システム資源を大量に使用すると記載。

* [Tcpreplay](https://github.com/appneta/tcpreplay): libnetを使い、インターフェース上でpcapファイルを再生。

* [Tcpslice](https://github.com/pyke369/tcpsplice): tcpdumpの-wフラグで取得したパケットトレースから一部を抽出。複数のトレースを結合し、1つ以上のトレースから時刻に基づいて一部を抽出可能。

* [Tcpsplit](https://github.com/pmcgleenon/tcpsplit): 単一のlibpcapトレースをTCP接続の境界で複数に分割し、1接続が2つのサブトレースに分かれないようにするツール。大きなトレースを詳細に調べやすくし、一部だけを解析するための部分集合を作成可能。

* [Tcpstat](https://frenchfries.net/paul/tcpstat/): vmstatがシステム統計を表示するのと同様に、ネットワークインターフェースの統計を表示。特定インターフェースを監視するか、保存済みのtcpdumpデータをファイルから読み込んで情報を取得。

* [Tcptrace](https://github.com/blitz/tcptrace): Ohio UniversityのShawn OstermannによるTCPダンプ解析ツール。tcpdump、snoop、etherpeek、HP Net Metrix、WinDumpなどの取得ファイルを読み込み、接続ごとの経過時間、送受信バイト数・セグメント数、再送、往復時間、ウィンドウ広告、スループットなど各種出力を生成。詳細解析用のグラフも作成可能。

* [TraceWrangler](https://www.tracewrangler.com/): Windows、またはWINEを使うLinuxで動作するネットワークキャプチャファイル用ツール群。PCAPと、固定原文でWiresharkの新しい標準形式と説明されるPCAPngに対応。主な用途は、PCAP/PCAPngの機密データを簡単な操作で除去・置換し、匿名化すること。これらはトレースファイル、キャプチャファイル、パケットキャプチャとも呼ばれる。

* [Tstat](http://tstat.tlc.polito.it/): ネットワーク層とトランスポート層のトラフィックパターンを把握するため、多数のフロー特性を提供するパッシブスニファー。

* [WAND](https://research.wand.net.nz/): University of Waikatoによる、libtraceを基盤としたネットワークトラフィック処理ツール群。原文の作者が推奨するプロジェクト。

* [WinDivert](https://github.com/basil00/WinDivert): Windowsのユーザーモードでパケットを傍受するライブラリ。

* [WinDump](https://www.winpcap.org/windump/): WinPcapを使う、Windows用のtcpdump相当のツール。

* [WinPcap](https://www.winpcap.org/): WinPcapとWinDumpの状況についてのGuy Harrisによるメッセージの抜粋。

* [WireEdit](https://wireedit.com/): 無料のデスクトップ用WYSIWYGパケットエディター。パケットの構文や符号化規則の知識がなくても、任意のスタック層をリッチテキストのように編集。入出力のファイル形式はPcap。

* [Wireshark suite](https://wiki.wireshark.org/Tools): パケット解析とプロトコルのデコードを支援するツール群。一般的な用途向けの実用ツールやスクリプトも含む。

* [Xplot](http://www.xplot.org/): TCPパケットトレースの解析を支援するため、1980年代後半に作成されたxplot。

* [yaraPcap](https://github.com/kevthehermit/YaraPcap): YARAでHTTPのPCAPを処理。

* [yaraprocessor](https://github.com/MITRECND/yaraprocessor): YARAを個々のパケットペイロードや、その一部または全部を連結したデータに適用。元はChopshop向けだが、Chopshopなしでも利用可能。

* [Zeek](https://zeek.org/): 旧称Bro。小規模なホームオフィスから大規模で高速な研究・商用ネットワークまで、解析担当者に簡潔で忠実度の高いトランザクションログ、ファイル内容、自由に調整した出力を提供するオープンソース基盤。固定原文のFAQでは、大規模環境での通信の意味に着目したセキュリティ監視を重視すると説明。従来の侵入検知・防止システムと比較されるが、柔軟な枠組みにより、従来システムの範囲を超える詳細な監視を利用者が構成できるとしている。原文は1990年代半ばからの実運用と20年以上の研究に言及し、詳細資料としてZeek OverviewとWhy Choose Zeek?を挙げている。

## DNSユーティリティ<a id="dnstools"></a>

* [dnsgram](https://doc.powerdns.com/authoritative/manpages/dnsgram.1.html): 断続的なリゾルバー障害を調べるデバッグツール。1つ以上のPCAPファイルを読み込み、5秒区間ごとの統計で障害を調査。

* [dnsreplay](https://doc.powerdns.com/authoritative/manpages/dnsreplay.1.html): 記録済みの問い合わせと応答を指定ネームサーバーで再生し、一致した応答、悪化した応答、改善した応答の割合を報告。実際の応答や他の指標をダンプファイルの記録と比較。

* [dnsscan](https://doc.powerdns.com/authoritative/manpages/dnsscan.1.html): 1つ以上のPCAP形式のINFILEを読み込み、問い合わせ種別ごとのクエリ数を一覧にするツール。

* [dnsscope](https://doc.powerdns.com/authoritative/manpages/dnsscope.1.html): PCAPを読み込み、簡単な統計を生成してコンソールへ出力。

* [dnswasher](https://doc.powerdns.com/authoritative/manpages/dnswasher.1.html): PCAPファイルを読み込み、エンドユーザーのIPアドレスを難読化したPCAPを出力。利用者のプライバシー保護を図りながら第三者とデータを共有するためのツール。

## ファイル抽出<a id="fileextraction"></a>

* [Chaosreader](https://github.com/brendangregg/Chaosreader): snoopやtcpdumpのログからTCP/UDPなどのセッションを追跡し、アプリケーションデータを取り出す無料ツール。取得ログからtelnetセッション、FTPファイル、HTTP転送のHTML/GIF/JPEG、SMTPメールなど各種データを抽出する「any-snarf」型のプログラム。全セッションの詳細へのリンク付きHTML索引を作成し、telnet、rlogin、IRC、X11、VNCセッションのリアルタイム再生プログラムや、画像・HTTP GET/POST内容のレポートを提供。

* [Dsniff](https://www.monkey.org/~dugsong/dsniff/): ネットワーク監査と侵入テストのツール群。dsniff、filesnarf、mailsnarf、msgsnarf、urlsnarf、webspyは、パスワード、メール、ファイルなどをパッシブに監視。arpspoof、dnsspoof、macofは、レイヤー2スイッチングなどで通常は攻撃者が取得できないトラフィックの傍受を支援。sshmitmとwebmitmは、アドホックPKIの弱い結び付けを悪用し、リダイレクトされたSSH/HTTPSセッションへの能動的な中間者攻撃を実装。

* [Foremost](https://github.com/jonstewart/foremost): ヘッダー、フッター、内部データ構造からファイルを復元するコンソールツール。この手法はデータカービングと呼ばれる。dd、Safeback、Encaseなどが作成するイメージファイルや、ドライブそのものを対象にできる。ヘッダーとフッターを設定ファイルで指定するほか、コマンドラインのスイッチで組み込みのファイル形式を指定可能。組み込み形式ではデータ構造を調べ、復元の信頼性と速度を高める。

* [Justniffer](https://onotelli.github.io/justniffer/): ネットワークトラフィックを取得し、形式を調整したログを生成するプロトコル解析ツール。ApacheのWebサーバーログを再現し、応答時間を追跡し、HTTPトラフィックから傍受した全ファイルを抽出。

* [NetworkMiner](https://www.netresec.com/index.ashx?page=NetworkMiner): Windows用のネットワークフォレンジック解析ツール（NFAT）で、Linux/Mac OS X/FreeBSDでも動作。パッシブなスニファー・パケット取得ツールとして、ネットワークへトラフィックを送信せずOS、セッション、ホスト名、開いているポートなどを検出。PCAPのオフライン解析や、送信されたファイル・証明書の再構成にも対応。

* [pcapfex](https://github.com/vikwin/pcapfex): Packet CAPture Forensic Evidence eXtractor。パケットキャプチャからファイルを見つけて抽出するツール。原文では使いやすさを特徴とし、pcapを渡すだけで全ファイルの抽出を試みると説明。拡張可能な設計で、認識・抽出するファイル形式を追加可能。

* [scalpel](https://github.com/sleuthkit/scalpel): オープンソースのデータカービングツール。

* [Snort](https://www.snort.org/): Sourcefire製のオープンソースの侵入検知・防止システム（IDS/IPS）。固定原文ではSourcefireはCisco傘下と説明。シグネチャ、プロトコル、異常に基づく検査を組み合わせ、原文では世界で最も広く導入されたIDS/IPSと紹介。

* [Tcpick](http://tcpick.sourceforge.net/): libpcapベースのテキストモードのスニファー。TCPストリームを追跡・再構成・並べ替えし、フローを別々のファイルへ保存するか端末へ表示。FTPやHTTPで転送されるファイルの取得に利用。接続終了時にはストリーム全体を、16進ダンプ、16進ダンプ＋ASCII、印字可能文字のみ、rawモードなどで表示可能。

* [Tcpxtract](http://tcpxtract.sourceforge.net/): ファイルのシグネチャに基づき、ネットワークトラフィックからファイルを抽出するツール。形式固有のヘッダーとフッターで抽出するカービングは、以前から使われるデータ復元手法。

* [Xplico](http://www.xplico.org/about): ネットワークプロトコル解析ツールではなく、オープンソースのネットワークフォレンジック解析ツール（NFAT）。インターネットトラフィックのキャプチャから、POP/IMAP/SMTPの各メール、全HTTPコンテンツ、SIPの各VoIP通話、FTP、TFTPなどのアプリケーションデータを抽出。GNU General Public Licenseで提供され、一部のスクリプトはCreative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported（CC BY-NC-SA 3.0）で提供。

## USB
### キャプチャツール
* [usbmon](https://www.kernel.org/doc/Documentation/usb/usbmon.txt): USBパケットを取得するLinuxカーネルのサブシステム。
* [USBPcap](https://github.com/desowin/usbpcap): Windows向けのUSB取得ソリューション。

### 分析
* [USBPcapOdinDumper](https://github.com/KOLANICH/USBPcapOdinDumper): Odinや[Heimdall](https://gitlab.com/BenjaminDobell/Heimdall)でAndroid端末へ書き込む際に取得した、`usbmon`や`USBPcap`のフレーム形式を含む.pcapを、フレームのペイロードを格納したファイル群へ変換。リバースエンジニアリングに利用でき、モジュール構造により他のアプリケーション形式へも容易に転用可能。

## 関連プロジェクト<a id="others"></a>

* [BPF for Ultrix](https://www.tcpdump.org/other/bpfext42.tar.Z): Ultrix 4.2用のBPF配布物。ソースコードとバイナリモジュールを含む。

* [BPF+](https://andrewbegel.com/papers/bpf.pdf): Andrew Begel、Steven McCanne、Susan Grahamによる、汎用パケットフィルターのアーキテクチャで大域的なデータフロー最適化を利用する研究。

* [FFT-FGN-C](ftp://ita.ee.lbl.gov/html/contrib/fft_fgn_c.html): 自己相似過程の一種である分数ガウス雑音を合成するプログラム。高速だが近似的。分数ガウス雑音は自己相似過程の一つにすぎず、ネットワークトラフィックを合成する場合、対象を別の過程でモデル化する方が適切な可能性がある点に注意。

* [Haka](http://www.haka-security.org/): 取得中のトラフィックに対してプロトコルを記述し、セキュリティポリシーを適用するオープンソース言語。不要なパケットの絞り込み・変更・破棄、悪意のある活動の記録・報告を行うルールを記述可能。ネットワークプロトコルと、その基礎となる状態機械を定義する文法も提供。

* [RIPE-NCC Hadoop for PCAP](https://github.com/RIPE-NCC/hadoop-pcap): PCAPを読み込むHadoopライブラリで、読み込み用コードを同梱。MapReduceジョブ内でPCAPを直接読み込める。SQLのようなコマンドでPCAPを問い合わせるためのHive Serializer/Deserializer（SerDe）も提供。

* [Traffic Data Repository at the WIDE Project](https://www2.sonycsl.co.jp/person/kjc/papers/freenix2000/): WIDEプロジェクトで、バックボーントラフィックの詳細を収録するリポジトリの構築に向け、無料のツール群を集めた取組を扱う論文。研究者・運用者による傾向把握と異常発見を背景に、tcpdumpで取得したトレースからプライバシーに関わる情報を除いて公開。利用者のプライバシー問題と構築に使ったツールを検討し、IPv6導入の初期段階での状況と知見を報告。

* [Usenix93 Paper on BPF](https://www.tcpdump.org/papers/bpf-usenix93.pdf): libpcapのフィルタリングはBSD Packet Filterのアーキテクチャに基づく。BPFを説明する1993年Winter Usenixの論文The BSD Packet Filter: A New Architecture for User-level Packet Capture。
