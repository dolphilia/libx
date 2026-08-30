---
title: "secdev/awesome-scapy"
description: "secdev/awesome-scapy の正規スナップショット"
licenseSource: "github-secdev-awesome-scapy-readme-md"
---

# Awesome Scapy [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
<p align="center">
  <a href="https://scapy.net/"><img src="https://github.com/secdev/scapy/blob/master/doc/scapy_logo.png" width="200" alt="Scapy" /></a>
</p>

Python ベースの対話型パケット操作プログラム兼ライブラリ **[Scapy](https://scapy.net)** を使うツール、アドオン、記事、興味深いエクスプロイトを厳選したリストです。
[貢献](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsecdev%2Fawesome-scapy%2Fedit%2Fmain%2FREADME.md)はお気軽にどうぞ！

GitHub で [Scapy のトピックを探索](https://github.com/topics/scapy)することもできます。

## 目次

- [ツール](#tools)
- [エクスプロイト](#exploits)

## ツール

Scapy を多用する、または Scapy を拡張するツール。

娯楽
- [pwnagotchi](https://github.com/evilsocket/pwnagotchi) - Wi-Fi をハッキングして成長する AI ペット。とてもかわいいです。

DDoS
- [ufonet](https://github.com/epsylon/ufonet) - 追跡困難な DDoS 攻撃を送る独自のボットネットを作成。

Wi-Fi
- [trackerjacker](https://github.com/calebmadrigal/trackerjacker) - 生の 802.11 監視を通じて Wi-Fi ネットワークとデバイスを地図化・追跡。
- [wifiphisher](https://github.com/wifiphisher/wifiphisher) - 不正アクセスポイントを作成。

無線
- [WHAD](https://github.com/whad-team/whad-client) - さまざまな種類の無線攻撃を実行する強力なフレームワーク。

IPv6
- [Chiron](https://github.com/aatlasis/Chiron) - IPv6 セキュリティ評価フレームワーク。
- [mitm6](https://github.com/fox-it/mitm6) - IPv6 に対する中間者攻撃を実行。

計測
- [mtraceroute](https://github.com/rwhalb/mtraceroute) - 複数の traceroute 分析から見栄えのよいグラフを作成。
- [Network Security Toolkit（NST）](https://wiki.networksecuritytoolkit.org/nstwiki/index.php?title=HowTo_Use_The_Scapy:_Multi-Traceroute_-_MTR) - IP 位置情報と GUI 管理を備えた強化版 `mtraceroute` を収録。
- [netprobify](https://github.com/criteo/netprobify) - データセンター向けに作られたネットワーク調査ツール（用途はそれだけではありません）。TCP、UDP、ICMP で調査します。

プロトコル
- [Cotopaxi](https://github.com/Samsung/cotopaxi) - 特定の IoT ネットワークプロトコル（AMQP、CoAP、DTLS、HTCPCP、KNX、mDNS、MQTT、MQTT-SN、QUIC、RTSP、SSDP）を使う IoT デバイスのセキュリティテストツール群。
- [project-memoria-detector](https://github.com/Forescout/project-memoria-detector) - ネットワークデバイスが特定の組み込み TCP/IP スタックを実行しているか判定。
- [routopsy](https://github.com/sensepost/routopsy) - DRP と FHRP を攻撃するツールキット。
- [TorPylle](https://github.com/cea-sec/TorPylle) - OR（TOR）プロトコルの実装。

単体テスト
- [Linux Kernel](https://github.com/torvalds/linux/blob/master/tools/testing/selftests/tc-testing/plugin-lib/scapyPlugin.py) - Linux Traffic Control（tc）テストスイート。
- [OpenBSD](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsearch%3Fq%3Dscapy%2Brepo%253Aopenbsd%252Fsrc%2Bpath%253Aregress%252F%26type%3DCode%26ref%3Dadvsearch%26l%3D%26l%3D) - IPv6 スタックのテストスイート。
- [RIOT-OS](https://github.com/RIOT-OS/RIOT/search?l=Python&q=scapy&type=Code) - RIOT OS のネットワークテストスイート。

可視化
- [Scapy-Packet-Viewer](https://pypi.org/project/scapy-packet-viewer/) - tshark/mitmproxy に似た最小限のパケットビューアー。urwid ベース。

その他
- [aioblescan](https://github.com/frawau/aioblescan) - 広告された BLE 情報をスキャンしてデコード。
- [fenrir](https://github.com/Orange-Cyberdefense/fenrir-ocd) - 有線 802.1x 保護を回避。
- [flowsynth](https://github.com/secureworks/flowsynth) - ネットワークトラフィックを迅速にモデル化するツール。
- [Fragscapy](https://github.com/AMOSSYS/Fragscapy) - 送信ネットワークパケットの変更を自動化してネットワークプロトコルをファジング。
- [Habu](https://github.com/fportantier/habu) - 多数の小さなハッキングツールを備えたツールキット。その多くが Scapy を使用。
- [mirage](https://redmine.laas.fr/projects/mirage) - 無線通信のセキュリティ分析に特化した強力でモジュール式のフレームワーク。
- [netenum](https://github.com/redcode-labs/Netenum) - ネットワーク上の稼働ホストを受動的に発見するツール。
- [net-creds](https://github.com/DanMcInerney/net-creds) - インターフェース上のすべての機密データをスニッフィングして取得。
- [packetweaver](https://github.com/ANSSI-FR/packetweaver) - スクリプト整理とタスク順序制御のための Python フレームワーク。
- [p0f3plus](https://github.com/FlUxIuS/p0f3plus) - 追加の分析機能を備えた実装。
- [pysap](https://github.com/SecureAuthCorp/pysap) - 独自構築のフレームとツールを使って SAP と対話。
- [Responder](https://github.com/SpiderLabs/Responder) - LLMNR、NBT-NS、MDNS ポイズニングツール。
- [scapy\_unroot](https://github.com/scapy-unroot/scapy_unroot) - root 権限なしで Scapy を使うためのツール。
- [scapy-benchmarks](https://github.com/gpotter2/scapy-benchmarks) - Scapy の性能推移を追跡する小規模テストスイート。
- [sshame](https://github.com/HynekPetrak/sshame) - SSH 公開鍵認証を総当たりするツール。
- [TIDoS Framework](https://github.com/0xInfection/TIDoS-Framework) - 手動攻撃型ウェブアプリケーション侵入テストフレームワーク。
- [h2spacex](https://github.com/nxenon/h2spacex) - 単一パケット攻撃（HTTP/2 の競合状態）に利用できる、Scapy ベースの低レベル HTTP/2 ライブラリ。

## エクスプロイト

Scapy を使うエクスプロイトです。標準で含まれるものは数えません。

2024年

- [CVE-2024-20674](https://github.com/gpotter2/CVE-2024-20674) - リモートコード実行につながる Windows Kerberos バイパス。
- [PPPwn（CVE-2006-4304）](https://github.com/TheOfficialFloW/PPPwn) - PlayStation 4 の PPPoE リモートコード実行。

2022年

- [CVE-2021-28444](http://blog.champtar.fr/VLAN0_LLC_SNAP) - Windows Hyper-V のセキュリティ機能回避脆弱性。

2021年

- [CVE-2021-24086](https://blog.quarkslab.com/analysis-of-a-windows-ipv6-fragmentation-vulnerability-cve-2021-24086.html) - Windows の IPv6 フラグメンテーション脆弱性の分析。
- [fragattacks](https://github.com/vanhoefm/fragattacks) - フラグメンテーションと集約に対する攻撃。

2020年

- [CVE-2020-25577](https://blog.quarkslab.com/bad-neighbor-on-freebsd-ipv6-router-advertisement-vulnerabilities-in-rtsold-cve-2020-25577.html) - FreeBSD の Bad Neighbor：rtsold における IPv6 Router Advertisement 脆弱性。
- [CVE-2020-16898](https://blog.quarkslab.com/beware-the-bad-neighbor-analysis-and-poc-of-the-windows-ipv6-router-advertisement-vulnerability-cve-2020-16898.html) - Bad Neighbor に注意：Windows IPv6 Router Advertisement 脆弱性の分析と概念実証。

2019年
- [CVE-2019-5597](https://www.synacktiv.com/ressources/Synacktiv_OpenBSD_PacketFilter_CVE-2019-5597_ipv6_frag.pdf) - OpenBSD Packet Filter の IPv6 フラグメンテーション脆弱性。

2018年

- [CVE-2018-4407](https://github.com/r3dxpl0it/CVE-2018-4407) - XNU OS カーネル（iOS、macOS）のネットワークコードにおけるヒープバッファオーバーフロー。

2017年
- [krackattacks-scripts](https://github.com/vanhoefm/krackattacks-scripts) - クライアントまたはアクセスポイント（AP）が WPA2 に対する KRACK 攻撃の影響を受けるかテスト。

2016年
- [CVE-2016-6366](https://github.com/RiskSense-Ops/CVE-2016-6366) - Equation Group（NSA）が作成し Shadow Brokers が流出させた、Cisco ASA 向けリモートコード実行エクスプロイト EXTRABACON。

その他
- [isf](https://github.com/dark-lbp/isf) - ISF（Industrial Control System Exploitation Framework）。さまざまな産業用プロトコルのエクスプロイトを提供するスイート。
