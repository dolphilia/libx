---
title: "Awesome Embedded and IoT Security"
description: "Embedded and IoT Securityを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-fkie-cad-awesome-embedded-and-iot-security-readme-md"
---

# Awesome Embedded and IoT Security

Embedded and IoT Securityを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [ソフトウェアツール](#software-tools)
  - [分析フレームワーク](#analysis-frameworks)
  - [分析ツール](#analysis-tools)
  - [抽出ツール](#extraction-tools)
  - [支援ツール](#support-tools)
  - [その他のツール](#misc-tools)
- [ハードウェアツール](#hardware-tools)
  - [Bluetooth BLEツール](#bluetooth-ble-tools)
  - [ZigBeeツール](#zigbee-tools)
  - [SDRツール](#sdr-tools)
  - [RFID NFCツール](#rfid-nfc-tools)
- [書籍](#books)
- [研究論文](#research-papers)
- [ケーススタディ](#case-studies)
- [無料トレーニング](#free-training)
- [ウェブサイト](#websites)
  - [ブログ](#blogs)
  - [チュートリアルと技術的背景](#tutorials-and-technical-background)
  - [YouTubeチャンネル](#youtube-channels)
- [カンファレンス](#conferences)
- [貢献](#contribute)
- [ライセンス](#license)

## ソフトウェアツール

組み込み機器・IoT機器およびファームウェアを分析するためのソフトウェアツールです。

### 分析フレームワーク

- [EXPLIoT](https://gitlab.com/expliot_framework/expliot) - Metasploitに似た、IoTに特化したペンテストフレームワーク。
- [FACT - The Firmware Analysis and Comparison Tool](https://fkie-cad.github.io/FACT_core/) - ファームウェアの抽出、各種プラグインを用いた分析、異なるファームウェアバージョンの比較を含む、フル機能の静的解析フレームワーク。
  - [Improving your firmware security analysis process with FACT](https://passthesalt.ubicast.tv/videos/improving-your-firmware-security-analysis-process-with-fact/) - FACTに関するカンファレンス講演 :tv:。
- [FwAnalyzer](https://github.com/cruise-automation/fwanalyzer) - カスタマイズしたルールに基づいてファームウェアのセキュリティを分析します。CIに似たDevSecOpsの追加ステップとして意図されています。
- [HAL – The Hardware Analyzer](https://github.com/emsec/hal) - ゲートレベルのネットリストを対象とする包括的なリバースエンジニアリングおよび操作フレームワーク。
- [HomePWN](https://github.com/ElevenPaths/HomePWN) - IoT機器のペンテスト向けスイスアーミーナイフ。
- [IoTSecFuzz](https://gitlab.com/invuls/iot-projects/iotsecfuzz) - ハードウェア、ソフトウェア、通信の各IoT層に対するセキュリティ分析を自動化するフレームワーク。
- [Killerbee](https://github.com/riverloopsec/killerbee) - ZigBeeおよびIEEE 802.15.4ネットワークをテスト・監査するフレームワーク。
- [PRET](https://github.com/RUB-NDS/PRET) - プリンター悪用ツールキット。
- [Routersploit](https://github.com/threat9/routersploit) - 組み込み機器の悪用に特化したフレームワーク。

### 分析ツール

- [Binwalk](https://github.com/ReFirmLabs/binwalk) - バイナリから「興味深い」ものを探索し、任意のファイルを抽出します。
- [cwe\_checker](https://github.com/fkie-cad/cwe_checker) - バイナリ実行ファイル中の脆弱なパターンを検出します。x86、ARM、MIPSのELFをサポートし、ベアメタルは実験的にサポートします。
- [emba](https://github.com/e-m-b-a/emba) - 組み込み機器のLinuxベースのファームウェアを分析します。
- [Firmadyne](https://github.com/firmadyne/firmadyne) - ファームウェアをエミュレートし、ペンテストを試みます。
- [Firmwalker](https://github.com/craigz28/firmwalker) - 抽出済みファームウェアイメージから、興味深いファイルと情報を検索します。
- [Firmware Slap](https://github.com/ChrisTheCoolHut/Firmware_Slap) - 共記号解析と関数クラスタリングにより、ファームウェアの脆弱性を発見します。
- [Ghidra](https://ghidra-sre.org/) - CPUアーキテクチャとエンディアンを指定して任意のバイナリを扱える、ソフトウェアリバースエンジニアリングスイート。
- [Radare2](https://github.com/radare/radare2) - 一般的な形式と任意のバイナリも扱えるソフトウェアリバースエンジニアリングフレームワークで、充実したコマンドラインツールセットを備えます。
- [Trommel](https://github.com/CERTCC/trommel) - 抽出済みファームウェアイメージから、興味深いファイルと情報を検索します。

### 抽出ツール

- [FACT Extractor](https://github.com/fkie-cad/fact_extractor) - コンテナ形式を自動検出し、対応する抽出ツールを実行します。
- [Firmware Mod Kit](https://github.com/rampageX/firmware-mod-kit/wiki) - 複数のコンテナ形式向け抽出ツール。
- [The SRecord package](http://srecord.sourceforge.net/) - EPROMファイルを操作するツール群（多数のバイナリ形式を変換可能）。

### 支援ツール

- [JTAGenum](https://github.com/cyphunk/JTAGenum) - ArduinoへJTAG機能を追加します。
- [OpenOCD](http://openocd.org/) - 無料かつオープンなオンチップデバッグ、インシステムプログラミング、バウンダリスキャン用ツール。

### その他のツール

- [Cotopaxi](https://github.com/Samsung/cotopaxi) - 特定のIoTネットワークプロトコルを使用する、Internet of Things機器のセキュリティテスト向けツールセット。
- [dumpflash](https://github.com/ohjeongwook/dumpflash) - 低レベルのNAND Flashダンプおよび解析ユーティリティ。
- [flashrom](https://github.com/flashrom/flashrom) - フラッシュチップを検出、読み込み、書き込み、検証、消去するツール。
- [Samsung Firmware Magic](https://github.com/chrivers/samsung-firmware-magic) - Samsung SSDファームウェア更新を復号します。

## ハードウェアツール

- [Bus Blaster](http://dangerousprototypes.com/docs/Bus_Blaster) - [UART](https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter)や[JTAG](https://en.wikipedia.org/wiki/JTAG)などのハードウェアデバッグポートを検出して操作します。
- [Bus Pirate](http://dangerousprototypes.com/docs/Bus_Pirate) - UARTおよびJTAGのようなハードウェアデバッグポートを検出して操作します。
- [Shikra](https://int3.cc/products/the-shikra) - UARTやJTAGなどのハードウェアデバッグポートを検出して操作します。ほかのプロトコルにも対応します。
- [JTAGULATOR](http://www.grandideastudio.com/jtagulator/) - JTAGのピン配置をすばやく検出します。
- [Saleae](https://www.saleae.com/) - 多数のプロトコルをサポートする使いやすいロジックアナライザー :euro:。
- [Ikalogic](https://www.ikalogic.com/pages/logic-analyzer-sp-series-sp209) - Saleaeロジックアナライザーの代替品 :euro:。
- [HydraBus](https://hydrabus.com/hydrabus-1-0-specifications/) - NFC機能を持つBus Pirateに似た、オープンソースのマルチツールハードウェア。
- [ChipWhisperer](https://newae.com/chipwhisperer/) - グリッチ攻撃およびサイドチャネル攻撃を検出します。
- [Glasgow](https://github.com/GlasgowEmbedded/Glasgow) - さまざまなデジタルインターフェースを探索・デバッグするためのツール。
- [J-Link](https://www.segger.com/products/debug-probes/j-link/models/model-overview/) - 複数の異なるCPUコア向けUSB給電JTAGデバッグプローブ :euro:。

### Bluetooth BLEツール

- [UberTooth One](https://greatscottgadgets.com/ubertoothone/) - Bluetooth実験に適したオープンソースの2.4 GHz無線開発プラットフォーム。
- [Bluefruit LE Sniffer](https://www.adafruit.com/product/2269) - 使いやすいBluetooth Low Energyスニファー。

### ZigBeeツール

- [ApiMote](http://apimote.com) - IEEE 802.15.4/ZigBeeシステムのセキュリティを学び評価するためのZigBeeセキュリティ研究用ハードウェア。Killerbee互換。
- Atmel RZUSBstick - 販売終了製品。持っていれば幸運です。IEEE 802.15.4、6LoWPAN、ZigBeeネットワークを含む幅広い低消費電力無線アプリケーション向けの開発、デバッグ、デモ用ツール。Killerbee互換。
- [Freakduino](https://freaklabsstore.com/index.php?main_page=product_info&cPath=22&products_id=219&zenid=fpmu2kuuk4abjf6aurt3bjnfk4) - IEEE 802.15.4プロトコルスニファーに変換できる、低コストのバッテリー駆動無線Arduinoボード。

### SDRツール

- [RTL-SDR](https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/) - 初心者向けの最も安価なSDR。500 kHzから1.75 GHzまでのライブ無線信号周波数を受信する、コンピュータベースのラジオスキャナーです。
- [HackRF One](https://greatscottgadgets.com/hackrf/) - 1 MHzから6 GHzまでの無線信号を送信または受信できるソフトウェア定義無線周辺機器（半二重）。
- [YardStick One](https://greatscottgadgets.com/yardstickone/) - 半二重のサブ1 GHz無線トランシーバー。
- [LimeSDR](https://www.crowdsupply.com/lime-micro/limesdr) - 100 KHzから3.8 GHzまでの無線信号を送信または受信できるソフトウェア定義無線周辺機器（全二重）。
- [BladeRF 2.0](https://www.nuand.com/bladerf-2-0-micro/) - 47 MHzから6 GHzまでの無線信号を送信または受信できるソフトウェア定義無線周辺機器（全二重）。
- [USRP B Series](https://www.ettus.com/product-categories/usrp-bus-series/) - 70 MHzから6 GHzまでの無線信号を送信または受信できるソフトウェア定義無線周辺機器（全二重）。

### RFID NFCツール

- [Proxmark 3 RDV4](https://www.proxmark.com/) - 低周波（125kHz）から高周波（13.56MHz）タグまで扱える、強力な汎用RFIDツール。
- [ChamaleonMini](http://chameleontiny.com/) - NFCセキュリティ分析向けのプログラム可能で携帯できるツール。
- [HydraNFC](https://hydrabus.com/hydranfc-1-0-specifications/) - 読み取り、書き込み、クラック、スニッフィング、エミュレーションを行える強力な13.56MHz RFID / NFCプラットフォーム。

## 書籍

- 2020, Fotios Chantzis, Evangel Deirme, Ioannis Stais, Paulino Calderon, Beau Woods: [Practical IoT Hacking](https://www.amazon.com/Fotios-Chantzis-ebook/dp/B085BVVSN6/)
- 2020, Jasper van Woudenberg, Colin O'Flynn: [The Hardware Hacking Handbook: Breaking Embedded Security with Hardware Attacks](https://nostarch.com/hardwarehacking)
- 2019, Yago Hansen: [The Hacker's Hardware Toolkit: The best collection of hardware gadgets for Red Team hackers, Pentesters and security researchers](https://github.com/yadox666/The-Hackers-Hardware-Toolkit/blob/master/TheHackersHardwareToolkit.pdf)
- 2019, Aditya Gupta: [The IoT Hacker's Handbook: A Practical Guide to Hacking the Internet of Things](https://www.apress.com/us/book/9781484242995)
- 2018, Mark Swarup Tehranipoor: [Hardware Security: A Hands-on Learning Approach](https://www.elsevier.com/books/hardware-security/bhunia/978-0-12-812477-2)
- 2018, Mark Carney: [Pentesting Hardware - A Practical Handbook (DRAFT)](https://github.com/unprovable/PentestHardware)
- 2018, Qing Yang, Lin Huang [Inside Radio: An Attack and Defense Guide](https://link.springer.com/book/10.1007/978-981-10-8447-8)
- 2017, Aditya Gupta, Aaron Guzman: [IoT Penetration Testing Cookbook](https://www.packtpub.com/networking-and-servers/iot-penetration-testing-cookbook)
- 2017, Andrew Huang: [The Hardware Hacker: Adventures in Making and Breaking Hardware](https://nostarch.com/hardwarehackerpaperback)
- 2016, Craig Smith: [The Car Hacker's Handbook: A Guide for the Penetration Tester](https://nostarch.com/carhacking)
- 2015, Keng Tiong Ng: [The Art of PCB Reverse Engineering](https://visio-for-engineers.blogspot.com/p/order.html)
- 2015, Nitesh Dhanjan: [Abusing the Internet of Things: Blackouts, Freakouts, and Stakeouts](https://shop.oreilly.com/product/0636920033547.do)
- 2015, Joshua Wright , Johnny Cache: [Hacking Wireless Exposed](https://www.mhprofessional.com/9780071827638-usa-hacking-exposed-wireless-third-edition-group)
- 2014, Debdeep Mukhopadhyay: [Hardware Security: Design, Threats, and Safeguards](https://www.taylorfrancis.com/books/9780429066900)
- 2014, Jack Ganssle: [The Firmware Handbook (Embedded Technology)](https://www.elsevier.com/books/the-firmware-handbook/ganssle/978-0-7506-7606-9)
- 2013, Andrew Huang: [Hacking the XBOX](https://nostarch.com/xboxfree)

## 研究論文

- 2020, Oser et al: [SAFER: Development and Evaluation of an IoT Device Risk Assessment Framework in a Multinational Organization](https://dl.acm.org/doi/abs/10.1145/3414173)
- 2019, Agarwal et al: [Detecting IoT Devices and How They Put Large Heterogeneous Networks at Security Risk](https://www.mdpi.com/1424-8220/19/19/4107)
- 2019, Almakhdhub et al: [BenchIoT: A Security Benchmark for the Internet of Things](https://nebelwelt.net/publications/files/19DSN.pdf)
- 2019, Alrawi et al: [SoK: Security Evaluation of Home-Based IoT Deployments](https://alrawi.github.io/static/papers/alrawi_sok_sp19.pdf)
- 2019, Abbasi et al: [Challenges in Designing Exploit Mitigations for Deeply Embedded Systems](https://ieeexplore.ieee.org/abstract/document/8806725)
- 2019, Song et al: [PeriScope: An Effective Probing and Fuzzing Framework for the Hardware-OS Boundary](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04A-1_Song_paper.pdf)
- 2018, Muench et al: [What You Corrupt Is Not What You Crash: Challenges in Fuzzing Embedded Devices](http://www.eurecom.fr/en/publication/5417/download/sec-publi-5417.pdf)
- 2017, O'Meara et al: [Embedded Device Vulnerability Analysis Case Study Using Trommel](https://resources.sei.cmu.edu/library/asset-view.cfm?assetid=509271)
- 2017, Jacob et al: [How to Break Secure Boot on FPGA SoCs through Malicious Hardware](https://eprint.iacr.org/2017/625.pdf)
- 2017, Costin et al: [Towards Automated Classification of Firmware Images and Identification of Embedded Devices](http://s3.eurecom.fr/docs/ifip17_costin.pdf)
- 2016, Kammerstetter et al: [Embedded Security Testing with Peripheral Device Caching and Runtime Program State Approximation](https://www.thinkmind.org/download.php?articleid=securware_2016_2_10_30082)
- 2016, Chen et al: [Towards Automated Dynamic Analysis for Linux-based Embedded Firmware](https://www.dcddcc.com/docs/2016_paper_firmadyne.pdf)
- 2016, Costin et al: [Automated Dynamic Firmware Analysis at Scale: A Case Study on Embedded Web Interfaces](http://s3.eurecom.fr/docs/asiaccs16_costin.pdf)
- 2015, Shoshitaishvili et al:[Firmalice - Automatic Detection of Authentication Bypass Vulnerabilities in Binary Firmware](https://www.ndss-symposium.org/wp-content/uploads/2017/09/11_1_2.pdf)
- 2015, Papp et al: [Embedded Systems Security: Threats, Vulnerabilities, and Attack Taxonomy](http://www.cse.psu.edu/~pdm12/cse597g-f15/readings/cse597g-embedded_systems.pdf)
- 2014, Zaddach et al: [Avatar: A Framework to Support Dynamic Security Analysis of Embedded Systems' Firmwares](http://www.eurecom.fr/en/publication/4158/download/rs-publi-4158.pdf)
- 2014, Alimi et al: [Analysis of embedded applications by evolutionary fuzzing](http://ieeexplore.ieee.org/document/6903734/)
- 2014, Costin et al: [A Large-Scale Analysis of the Security of Embedded Firmwares](http://www.s3.eurecom.fr/docs/usenixsec14_costin.pdf)
- 2013, Davidson et al: [FIE on Firmware: Finding Vulnerabilities in Embedded Systems using Symbolic Execution](https://www.usenix.org/system/files/conference/usenixsecurity13/sec13-paper_davidson.pdf)

## ケーススタディ

- [Binary Hardening in IoT products](https://cyber-itl.org/2019/08/26/iot-data-writeup.html)
- [Cracking Linksys “Encryption”](http://www.devttys0.com/2014/02/cracking-linksys-crypto/)
- [Deadly Sins Of Development](https://youtu.be/nXyglaY9N9w) - 現実の不適切な実装例を複数紹介するカンファレンス講演 :tv:。
- [Dumping firmware from a device's SPI flash with a buspirate](https://www.iotpentest.com/2019/06/dumping-firmware-from-device-using.html)
- [Hacking the DSP-W215, Again](http://www.devttys0.com/2014/05/hacking-the-dspw215-again/)
- [Hacking the PS4](https://cturt.github.io/ps4.html) - PS4のセキュリティの入門。
- [IoT Security@CERN](https://doi.org/10.5281/zenodo.1035034)
- [Multiple vulnerabilities found in the D-link DWR-932B](https://pierrekim.github.io/blog/2016-09-28-dlink-dwr-932b-lte-routers-vulnerabilities.html)
- [Pwning the Dlink 850L routers and abusing the MyDlink Cloud protocol](https://pierrekim.github.io/blog/2017-09-08-dlink-850l-mydlink-cloud-0days-vulnerabilities.html)
- [PWN Xerox Printers (...again)](https://www.fkie.fraunhofer.de/content/dam/fkie/de/documents/xerox_phaser_6700_white_paper.pdf)
- [Reversing Firmware With Radare](https://www.bored-nerds.com/reversing/radare/automotive/2019/07/07/reversing-firmware-with-radare.html)
- [Reversing the Huawei HG533](http://jcjc-dev.com/2016/04/08/reversing-huawei-router-1-find-uart/)

## 無料トレーニング

- [CSAW Embedded Security Challenge 2019](https://github.com/TrustworthyComputing/csaw_esc_2019) - CSAW 2019 Embedded Security Challenge（ESC）。
- [Embedded Security CTF](https://microcorruption.com) - Microcorruptionによる組み込みセキュリティCTF。
- [Hardware Hacking 101](https://github.com/rdomanski/hardware_hacking/tree/master/my_talks/Hardware_Hacking_101) - BSides Munich 2019のワークショップ。
- [IoTGoat](https://github.com/scriptingxss/IoTGoat) - OpenWrtを基にした、意図的に脆弱なファームウェア。
- [Rhme-2015](https://github.com/Riscure/RHme-2015) - 最初のriscure Hack meハードウェアCTFチャレンジ。
- [Rhme-2016](https://github.com/Riscure/Rhme-2016) - Riscure Hack me 2は低レベルハードウェアCTFチャレンジです。
- [Rhme-2017/2018](https://github.com/Riscure/Rhme-2017) - Riscure Hack Me 3の組み込みハードウェアCTF 2017-2018。

## ウェブサイト

- [Hacking Printers Wiki](http://hacking-printers.net/wiki/index.php/Main_Page) - プリンターに関するあらゆる情報。
- [OWASP Embedded Application Security Project](https://owasp.org/www-project-embedded-application-security/) - 開発のベストプラクティスとハードウェア・ソフトウェアツールのリスト。
- [OWASP Internet of Things Project](https://owasp.org/www-project-internet-of-things/) - IoTの一般的な脆弱性と攻撃対象領域。
- [Router Passwords](https://192-168-1-1ip.mobi/default-router-passwords-list/) - メーカー別に並べた既定ログイン資格情報のデータベース。
- [Siliconpr0n](https://siliconpr0n.org/) - ICリバースエンジニアリングに関するWiki／アーカイブ。

### ブログ

- [RTL-SDR](https://www.rtl-sdr.com/)
- [/dev/ttyS0's Embedded Device Hacking](http://www.devttys0.com/blog/)
- [Exploiteers](https://www.exploitee.rs/)
- [Hackaday](https://hackaday.com)
- [jcjc's Hack The World](https://jcjc-dev.com/)
- [Quarkslab](https://blog.quarkslab.com/)
- [wrong baud](https://wrongbaud.github.io/)
- [Firmware Security](https://firmwaresecurity.com/)
- [PenTestPartners](https://www.pentestpartners.com/internet-of-things/)
- [Attify](https://blog.attify.com/)
- [Patayu](https://payatu.com/blog)
- [GracefulSecurity - Hardware tag](https://gracefulsecurity.com/category/hardware/)
- [Black Hills - Hardware Hacking tag](https://www.blackhillsinfosec.com/tag/hardware-hacking/)

### チュートリアルと技術的背景

- [Azeria Lab](https://azeria-labs.com/) - ARM関連の各種チュートリアル。
- [JTAG Explained](https://blog.senr.io/blog/jtag-explained#) - 保護されたログインシェルにおけるUARTおよびJTAGのバイパスを解説します。
- [Reverse Engineering Serial Ports](http://www.devttys0.com/2012/11/reverse-engineering-serial-ports/) - PCB上のデバッグパッドの見つけ方を詳しく解説するチュートリアル。
- [UART explained](https://www.mikroe.com/blog/uart-serial-communication) - UARTプロトコルの詳細な説明。

### YouTubeチャンネル

- [Flashback Team](https://www.youtube.com/c/FlashbackTeam) - 組み込み機器の脆弱性を発見・悪用する方法を段階的に解説するハッカー二人組。
- [StackSmashing](https://www.youtube.com/c/stacksmashing) - 組み込み機器のリバースエンジニアリングとハードウェアハッキング。

## カンファレンス

組み込みおよびIoTセキュリティに焦点を当てたカンファレンスです。

- [Hardwear.io](https://hardwear.io/)
  - EU、ハーグ、9月。
  - 米国、サンタクララ、6月。

## 貢献

貢献を歓迎します。まず[貢献ガイドライン](https://github.com/fkie-cad/awesome-embedded-and-iot-security/blob/fbd0301e6690a21d98ca8d565c0657aae0fba339/contributing.md)を読んでください。

## ライセンス

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で可能な限り、Fraunhofer FKIEはこの著作物に関するすべての著作権および関連する権利または隣接権を放棄しています。
