---
title: "Awesome Scapy"
description: "Scapyを利用・拡張するツールとアドオン、エクスプロイト実装、脆弱性の分析。"
licenseSource: "github-secdev-awesome-scapy-readme-md"
---

# Awesome Scapy

[Scapy](https://scapy.net)は、Pythonを基盤とする対話型のパケット操作プログラム・ライブラリです。このリストでは、Scapyを利用・拡張するツールとアドオン、エクスプロイト実装、脆弱性の分析を探せます。[GitHubのScapyトピック](https://github.com/topics/scapy)も参照できます。

## ツール

Scapyを多用する、または拡張するツール。

### 娯楽
- [pwnagotchi](https://github.com/evilsocket/pwnagotchi) - Wi-Fiをハッキングして成長するAIペット。固定原文ではとてもかわいいと紹介されている。

### DDoS
- [ufonet](https://github.com/epsylon/ufonet) - 独自のボットネットを作成してDDoS攻撃を送るツール。固定原文では攻撃を追跡できないと説明している。

### Wi-Fi
- [trackerjacker](https://github.com/calebmadrigal/trackerjacker) - 生の802.11通信の監視を通じてWi-Fiネットワークとデバイスをマッピング・追跡するツール。
- [wifiphisher](https://github.com/wifiphisher/wifiphisher) - 不正なアクセスポイントを作成するツール。

### 無線
- [WHAD](https://github.com/whad-team/whad-client) - さまざまな種類の無線攻撃を行うフレームワーク。固定原文では強力と紹介されている。

### IPv6
- [Chiron](https://github.com/aatlasis/Chiron) - IPv6のセキュリティ評価フレームワーク。
- [mitm6](https://github.com/fox-it/mitm6) - IPv6に対する中間者（MiTM）攻撃を行うツール。

### 計測
- [mtraceroute](https://github.com/rwhalb/mtraceroute) - 複数のtracerouteの分析結果からグラフを作成するツール。固定原文では見栄えがよいと紹介されている。
- [Network Security Toolkit (NST)](https://wiki.networksecuritytoolkit.org/nstwiki/index.php?title=HowTo_Use_The_Scapy:_Multi-Traceroute_-_MTR) - IPの位置情報とGUI管理を備えた強化版の `mtraceroute` を収録。
- [netprobify](https://github.com/criteo/netprobify) - データセンター向けに設計されたネットワーク調査ツール。他の用途でも利用でき、TCP、UDP、ICMPで調査する。

### プロトコル
- [Cotopaxi](https://github.com/Samsung/cotopaxi) - AMQP、CoAP、DTLS、HTCPCP、KNX、mDNS、MQTT、MQTT-SN、QUIC、RTSP、SSDPという特定のIoTネットワークプロトコルを使うIoTデバイスのセキュリティテストツール群。
- [project-memoria-detector](https://github.com/Forescout/project-memoria-detector) - ネットワークデバイスが特定の組み込みTCP/IPスタックを実行しているかを判定するツール。
- [routopsy](https://github.com/sensepost/routopsy) - DRPとFHRPを攻撃するツールキット。
- [TorPylle](https://github.com/cea-sec/TorPylle) - OR（TOR）プロトコルの実装。

### 単体テスト
- [Linux Kernel](https://github.com/torvalds/linux/blob/master/tools/testing/selftests/tc-testing/plugin-lib/scapyPlugin.py) - Linux Traffic Control（tc）のテストスイート。
- [OpenBSD](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsearch%3Fq%3Dscapy%2Brepo%253Aopenbsd%252Fsrc%2Bpath%253Aregress%252F%26type%3DCode%26ref%3Dadvsearch%26l%3D%26l%3D) - IPv6スタックのテストスイート。
- [RIOT-OS](https://github.com/RIOT-OS/RIOT/search?l=Python&q=scapy&type=Code) - RIOT OSのネットワークテストスイート。

### 可視化
- [Scapy-Packet-Viewer](https://pypi.org/project/scapy-packet-viewer/) - tsharkとmitmproxyに似た最小限のパケットビューアー。urwidを基盤とする。

### その他
- [aioblescan](https://github.com/frawau/aioblescan) - BLEのアドバタイズ情報をスキャンしてデコードするツール。
- [fenrir](https://github.com/Orange-Cyberdefense/fenrir-ocd) - 有線通信の802.1x保護を回避するツール。
- [flowsynth](https://github.com/secureworks/flowsynth) - ネットワークトラフィックを迅速にモデル化するツール。
- [Fragscapy](https://github.com/AMOSSYS/Fragscapy) - 送信するネットワークパケットの変更を自動化し、ネットワークプロトコルをファジングするツール。
- [Habu](https://github.com/fportantier/habu) - 多数の小さなハッキングツールを備えたツールキット。その多くがScapyを使用する。
- [mirage](https://redmine.laas.fr/projects/mirage) - 無線通信のセキュリティ分析に特化したモジュール式フレームワーク。固定原文では強力と紹介されている。
- [netenum](https://github.com/redcode-labs/Netenum) - ネットワーク上の稼働ホストを受動的に発見するツール。
- [net-creds](https://github.com/DanMcInerney/net-creds) - インターフェース上の機密データをスニッフィングして取得するツール。固定原文では対象をすべての機密データとしている。
- [packetweaver](https://github.com/ANSSI-FR/packetweaver) - スクリプトの整理とタスクの順序制御を行うPythonフレームワーク。
- [p0f3plus](https://github.com/FlUxIuS/p0f3plus) - 追加の分析機能を備えたp0f3の実装。
- [pysap](https://github.com/SecureAuthCorp/pysap) - 独自に構築したフレームとツールを使ってSAPとやり取りするツール。
- [Responder](https://github.com/SpiderLabs/Responder) - LLMNR、NBT-NS、MDNSのポイズニングツール。
- [scapy\_unroot](https://github.com/scapy-unroot/scapy_unroot) - root権限なしでScapyを使うためのツール群。
- [scapy-benchmarks](https://github.com/gpotter2/scapy-benchmarks) - Scapyの性能推移を追跡する小規模なテストスイート。
- [sshame](https://github.com/HynekPetrak/sshame) - SSHの公開鍵認証を総当たりするツール。
- [TIDoS Framework](https://github.com/0xInfection/TIDoS-Framework) - 手動で攻撃を行うWebアプリケーションのペネトレーションテスト用フレームワーク。
- [h2spacex](https://github.com/nxenon/h2spacex) - Scapyを基盤とする低レベルのHTTP/2ライブラリ。Single Packet Attack（HTTP/2の競合状態を利用する攻撃）に利用できる。

## エクスプロイト

Scapyを利用するエクスプロイト。Scapyに標準で含まれるものは対象外です。

### 2024年

- [CVE-2024-20674](https://github.com/gpotter2/CVE-2024-20674) - リモートコード実行（RCE）につながるWindows Kerberosのバイパス。
- [PPPwn (CVE-2006-4304)](https://github.com/TheOfficialFloW/PPPwn) - PlayStation 4のPPPoEによるリモートコード実行（RCE）。

### 2022年

- [CVE-2021-28444](http://blog.champtar.fr/VLAN0_LLC_SNAP) - Windows Hyper-Vのセキュリティ機能を回避する脆弱性。

### 2021年

- [CVE-2021-24086](https://blog.quarkslab.com/analysis-of-a-windows-ipv6-fragmentation-vulnerability-cve-2021-24086.html) - WindowsのIPv6フラグメンテーション脆弱性の分析。
- [fragattacks](https://github.com/vanhoefm/fragattacks) - フラグメンテーションと集約に対する攻撃。

### 2020年

- [CVE-2020-25577](https://blog.quarkslab.com/bad-neighbor-on-freebsd-ipv6-router-advertisement-vulnerabilities-in-rtsold-cve-2020-25577.html) - FreeBSDのBad Neighbor：rtsoldにおけるIPv6ルーター広告の脆弱性。
- [CVE-2020-16898](https://blog.quarkslab.com/beware-the-bad-neighbor-analysis-and-poc-of-the-windows-ipv6-router-advertisement-vulnerability-cve-2020-16898.html) - Bad Neighborへの注意喚起：WindowsのIPv6ルーター広告の脆弱性に関する分析と概念実証。

### 2019年
- [CVE-2019-5597](https://www.synacktiv.com/ressources/Synacktiv_OpenBSD_PacketFilter_CVE-2019-5597_ipv6_frag.pdf) - OpenBSD Packet FilterのIPv6フラグメンテーション脆弱性。

### 2018年

- [CVE-2018-4407](https://github.com/r3dxpl0it/CVE-2018-4407) - XNU OSカーネル（iOSとmacOS）のネットワークコードにおけるヒープバッファオーバーフロー。

### 2017年
- [krackattacks-scripts](https://github.com/vanhoefm/krackattacks-scripts) - クライアントまたはアクセスポイント（AP）がWPA2に対するKRACK攻撃の影響を受けるかをテストするツール。

### 2016年
- [CVE-2016-6366](https://github.com/RiskSense-Ops/CVE-2016-6366) - Cisco ASA向けのリモートコード実行エクスプロイトEXTRABACON。固定原文ではEquation Group（NSA）が作成し、Shadow Brokersが流出させたと説明している。

### その他
- [isf](https://github.com/dark-lbp/isf) - ISF（Industrial Control System Exploitation Framework）。さまざまな産業用プロトコルのエクスプロイトを提供するスイート。
