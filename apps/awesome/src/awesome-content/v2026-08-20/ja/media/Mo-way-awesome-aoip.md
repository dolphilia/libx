---
title: "Awesome Audio Over IP"
description: "Audio Over IPを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。"
licenseSource: "github-Mo-way-awesome-aoip-readme-md"
---

# Awesome Audio Over IP

Audio Over IPを扱う資料や関連プロジェクトをまとめたAwesomeリストです。 上流ではアーカイブ済み、または更新終了と案内されています。

## 目次

- [ツール](#tools)
- [組織](#organizations)
- [教育](#education)
- [標準](#standards)

## ツール

- [Network Audio Controller](https://github.com/chris-ritsen/network-audio-controller) - コマンドラインでのリバースエンジニアリングされた Dante Controller。
- [Pipewire AES67](https://gitlab.freedesktop.org/pipewire/pipewire/-/wikis/AES67) - AES67 ストリームを Linux 上でネイティブオーディオデバイスとして表示する。
- [Merging ALSA RAVENNA/AES67 Driver](https://bitbucket.org/MergingTechnologies/ravenna-alsa-lkm/src/master/) - 貢献を受け付けないオープンソースドライバー。
- [AES67 Linux Daemon](https://github.com/bondagit/aes67-linux-daemon) - オープンソース Web サーバーを持つ Merging ドライバーのフォーク。
- [AES67 Monitor](https://github.com/philhartung/aes67-monitor) - クロスプラットフォーム AES67 監視アプリ。
- [JackTrip](https://jacktrip.github.io/jacktrip/) - LAN・WAN 経由でリアルタイムオーディオを伝送するオープンソースツール。
- [LinuxPTP](https://linuxptp.sourceforge.net/) - Linux 向け PTP IEEE 1588。`ptp4l` や `phc2sys` などのさまざまなツールを提供する。
- [PAM](https://github.com/martim01/pam) - FOSS の AES67 対応オーディオモニター。
- [Snapcast](https://github.com/badaix/snapcast/tree/develop) - カスタム TCP ベースプロトコルを用いる、Sonos のようなマルチルームソリューション向け FOSS プロジェクト。
- [Ravennakit SDK](https://github.com/soundondigital/ravennakit) - AES67、RAVENNA、ST2110-30 を使用するプロフェッショナルネットワークオーディオ向けクロスプラットフォーム C++ SDK を提供する。
- [Inferno](https://gitlab.com/lumifaza/inferno) - Rust による Dante AoIP のオープンソース実装（[GitHub mirror](https://github.com/teodly/inferno/)）。
- [ROC-streaming](https://roc-streaming.org/) - UDP・RTP を用いて IP ネットワーク経由でオーディオをストリーミングする、リアルタイムストリーミング特化ツール。一方の端にストリームを書き、もう一方から読み取る。Roc がすべての複雑さを処理する。

### クローズドソース

- [Aneman](https://www.merging.com/aneman/) - **A**udio **NE**twork **MAN**ager。Dante controller に相当する Ravenna 向けツール。
- [PTP Track Hound](https://www.ptptrackhound.com/) - PTP ネットワークトラフィック分析ツール（クロスプラットフォーム、基本無料版あり）。

## 組織

- [IPMX](https://ipmx.io/about/) - 制御、コピー保護、接続管理、セキュリティのためのオープン標準・仕様の提案セット。
- [Audinate](https://audinate.com) - 同社のプロプライエタリ Dante 技術は、AoIP ソリューションとして圧倒的に人気がある。
- [Ravenna](https://www.ravenna-network.com/) - Dante よりオープンな、2 番目に人気の AoIP ソリューション。

## 教育

- [Networked Audio Products](https://rhconsulting.uk/blog/) - 毎年実施される AoIP 製品の国勢調査（現在: [2025](https://rhconsulting.uk/blog/networked-audio-products-2025/)）。
- [Dante Certification](https://www.getdante.com/resources/training/dante-certification-program/) - Dante を理解することは AoIP の理解に役立つ。トレーニングにはアカウントが必要。レベル 1 とレベル 2 を推奨。
- [Ravenna Resources](https://www.ravenna-network.com/resources/) - Ravenna、AES67、SMPTE 2110、PTP、IPMX について Andreas Hildebrand によるウェビナー・スライド。
- [Connecting Dante with AES67](https://download.yamaha.com/files/tcm:39-868466/) - Dante デバイスとの間で AES67 を設定する。Yamaha のこのガイドには Audinate ドキュメントにない複雑な点が含まれる。

## 標準

- [AES67](https://www.aes.org/publications/standards/search.cfm?docID=96)、公開[ドラフト](https://aes2.org/standards-blog/call-for-comment-on-draft-revised-aes67-xxxx-high-performance-streaming-audio-over-ip-interoperability/) - Audio over IP のオープン標準。
- [NMOS](https://github.com/AMWA-TV/nmos) - ネットワークメディアデバイスを制御する REST API。
- [SMPTE ST 2110-30](https://www.smpte.org/standards/st2110)、公開[版](https://pub.smpte.org/latest/st2110-30/st2110-30-2017.pdf) - 映像ストリーム内の AES67 ベースオーディオ伝送。AES67 にいくつかの内容を追加する。

## 脚注

- [AES67 Wishlist](https://gist.github.com/njh/c9196c465ea33ae9f97db782870464ef) - このリストの着想となった AES67 ソフトウェア向け人気ウィッシュリスト。
- [Curated Web Page](https://aes67.app/resources) - Philipp Hartung による読み取り専用の「AES67 リソースの厳選リスト」。
- [Awesome Audiovisual](https://github.com/stingalleman/awesome-audiovisual) - 少し AoIP を含む AV リスト。
- [Awesome Broadcasting](https://github.com/ebu/awesome-broadcasting) - 少し AoIP を含む EBU リスト。
