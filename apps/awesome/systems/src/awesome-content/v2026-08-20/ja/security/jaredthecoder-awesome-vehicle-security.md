---
title: "Awesome Vehicle Security"
description: "Vehicle Securityを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-jaredthecoder-awesome-vehicle-security-readme-md"
---

# Awesome Vehicle Security

Vehicle Securityを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

# 目次 <a id="contents"></a>

- [関連リスト](#related-lists)
- [学習資料](#learn)
    - [記事](#articles)
    - [講演資料](#presentations)
    - [書籍](#books)
    - [研究論文](#research-papers)
    - [講座](#courses)
    - [ブログ](#blogs)
    - [Webサイト](#websites)
    - [ニュースレター](#newsletters)
    - [カンファレンス](#conferences)
    - [フォローすべき人物・組織](#who-to-follow)
    - [ポッドキャスト・エピソード](#podcasts-and-episodes)
        - [ポッドキャスト](#podcasts)
        - [エピソード](#episodes)
    - [その他](#miscellaneous)
- [プロジェクト](#projects)
- [ハードウェア](#hardware)
- [ソフトウェア](#software)
  - [アプリケーション](#applications)
  - [ライブラリ・ツール](#libraries-and-tools)
    - [C](#c)
    - [Java](#java)
    - [C++](#c++)
    - [Python](#python)
    - [Go](#go)
    - [JavaScript](#javascript)
- [企業・求人](#companies-and-jobs)
    - [Coordinated Disclosure](#coordinated-disclosure)
- [その他のAwesomeリスト](#other-awesome-lists)
- [コントリビューション](#contributing)

# 関連リスト <a id="related-lists"></a>

以下はカーハッキングで扱われる特定の通信プロトコルに関連するリストです。

- [Awesome CAN Bus - 車載通信プロトコルに特化した関連キュレーションリストです。 https://github.com/iDoka/awesome-canbus
- [Awesome LIN Bus - 車載通信プロトコルに特化した関連キュレーションリストです。 https://github.com/iDoka/awesome-linbus

# 学習資料 <a id="learn"></a>

## 記事 <a id="articles"></a>

- [How to hack a car — a quick crash-course](https://medium.freecodecamp.org/hacking-cars-a-guide-tutorial-on-how-to-hack-a-car-5eafcfbbb7ec) - カーファンのケニー・クチャーラが、あなたがすぐに始められるようになるための必要な情報だけを紹介。初めての人に最適なリソース！
- [Stopping a Jeep Cherokee on the Highway Remotely](https://www.wired.com/2015/07/hackers-remotely-kill-jeep-highway/) - 2015年のDEFCONで発表されたクリス・ヴァラセックとチャーリー・ミラーによる、ジープ車へのハッキングに関する重要な研究。
- [Troy Hunt on Controlling Nissans](https://www.troyhunt.com/controlling-vehicle-features-of-nissan/) - トライ・ハートがニッサン車の制御について述べる。
- [Tesla hackers explain how they did it at Defcon](http://www.cnet.com/roadshow/news/tesla-hackers-explain-how-they-did-it-at-def-con-23/) - DEFCON 23でのテスラ車へのハッキングに関する発表の概要。
- [Anatomy of the Rolljam Wireless Car Hack](http://makezine.com/2015/08/11/anatomy-of-the-rolljam-wireless-car-hack/) - ロールジャム rolling code 漏洩装置に関する概要。
- [IOActive's Tools and Data](http://blog.ioactive.com/2013/08/car-hacking-content.html) - クリス・ヴァラセックとチャーリー・ミラーが、より多くの人々が車のセキュリティ研究に参加できるようにするため、自らのツールやデータを公開。
- [Developments in Car Hacking](https://www.sans.org/reading-room/whitepapers/ICS/developments-car-hacking-36607) - SANS Reading Roomから、クリューの論文がスマート車技術のリスクと危険性を分析。
- [Car Hacking on the Cheap](http://www.ioactive.com/pdfs/IOActive_Car_Hacking_Poories.pdf) - クリス・ヴァラセックとIOActiveによる、リソースが少ない場合でも自車をハッキングできる白書。
- [Car Hacking: The definitive source](http://illmatics.com/carhacking.html) - チャーリー・ミラーとクリス・ヴァラセックが、すべてのツール、データ、研究ノート、論文を誰でも無料で公開。
- [Car Hacking on the cheap](https://community.rapid7.com/community/transpo-security/blog/2017/02/08/car-hacking-on-the-cheap) - クラッグ・スミスが、ELM327 Bluetoothドングルを使ってMetasploitのHWBrigeと連携する短い記事を書く。
- [Researchers tackle autonomous vehicle security](https://phys.org/news/2017-05-tackle-autonomous-vehicle.html) - テキサスA&M大学の研究者がインテリジェンスシステムのプロトタイプを開発。
- [Reverse engineering of the Nitro OBD2](https://blog.quarkslab.com/reverse-engineering-of-the-nitro-obd2.html) - CAN診断ツールの逆エンジニアリング。
- [Analysis of an old Subaru Impreza - Subaru Select Monitor v1 (SSM1)](https://p1kachu.pluggi.fr/project/automotive/2018/12/28/subaru-ssm1/) - 古いプロトコルを使って古いECUを掘り下げ、1997年のスバル・インプレザのスピード制限機能を無効化。
- [Car Hacking in 30 Minutes or Less](https://brysonpayne.com/2018/10/20/start-car-hacking-in-30-minutes-or-less/) - VirtualBoxとKali Linuxを使って、can-utils、ICSim、ScanTool、Wireshark、tcpdumpといった完全に無料のオープンソースソフトウェアとツールを使って車のハッキングを開始できる。

## 講演資料 <a id="presentations"></a>

- ["Hopping on the CAN Bus" from BlackHat Asia 2015](https://www.blackhat.com/asia-15/briefings.html#hopping-on-the-can-bus) - 2015年のBlackHat Asiaでの講演で、聴衆が自動車システムの理解を得るだけでなく、それらを攻撃するためのツールも手に入れるようにする。
- ["Drive It Like You Hacked It" from DEFCON 23](https://samy.pl/defcon2015/) - サム・カマーカーのDEFCON 23/2015講演とスライドで、ガレージのハッキング、自動車向けモバイルアプリのexploit、低コストツールで任意の車のロック解除を実現する内容。
- [Samy Kamkar on Hacking Vehicles with OnStar](https://www.youtube.com/watch?v=3olXUbS-prU&feature=youtu.be) - マイスペースのサム・ウームを背負った著名なハッカーのサム・カマーカーが、オンスターシステムを使った車のハッキングを探索。
- [Remote Exploitation of an Unaltered Passenger Vehicle](https://www.youtube.com/watch?v=OobLb1McxnI) - DEFCON 23でのクリス・ヴァラセックとチャーリー・ミラーによる、ジープ車にリモートでハッキングし、その車を完全に停止させる有名な講演。
- [Adventures in Automotive Networks and Control Units](https://www.youtube.com/watch?v=n70hIu9lcYo) - クリス・ヴァラセックとチャーリー・ミラーによるDEFCON 21での自動車ネットワークに関する講演。
- [Can You Trust Autonomous Vehicles?](https://www.youtube.com/watch?v=orWqKWvIW_0) - ジャンハオ・リウ、陳燕、文元・クウによるDEFCON 24での講演。
- [Ken Munro & Dave Lodge - Hacking the Mitsubishi Outlander & IOT](https://www.youtube.com/watch?v=YLBQdO6a5IQ) - 車載ネットワーク、ECU、診断、攻撃・防御研究を扱う講演資料です。 [Pen Test Partners](#who-to-follow)
- [FREE-FALL: HACKING TESLA FROM WIRELESS TO CAN BUS](https://www.blackhat.com/docs/us-17/thursday/us-17-Nie-Free-Fall-Hacking-Tesla-From-Wireless-To-CAN-Bus-wp.pdf) - Zeronights 2016以降のBlackHat講演： TencentおよびKEEN Security LabのSen Nie、Ling Liu、Yuefeng Duによるもの
- [Car Hacking 101](https://www.youtube.com/watch?v=P-mzo2X47sg) - Bugcrowd LevelUp 2017：Alan Mondによるもの
- [State of Automotive Cyber Safety, 2015](https://www.youtube.com/watch?v=g-a20ORka-A) - BSides Las Vegas 2015年におけるI Am The Cavalryセッションでの自動車ハッキングの現状、規制、業界の変化など
- [State of Automotive Cyber Safety, 2016](https://www.youtube.com/watch?v=WcObDVy2-1I) - BSides Las Vegas 2016年におけるI Am The Cavalryセッションでの自動車ハッキングの現状、規制、業界の変化など
- [How to Hack a Tesla Model S](https://www.youtube.com/watch?v=KX_0c9R4Fng) - DEF CON 23でのMarc RogersおよびKevin Mahaffeyによるテスラのハッキングに関する講演。テスラの共同創業者かつCTOであるJB Straubelが参加し、感謝の言葉を述べ、挑戦コインを提示する
- [Car Hacking Videos](http://tekeye.uk/automotive/cyber-security/car-hacking-videos) - 車のハッキングに関連するオンラインにある動画（40以上）を一覧にしたウェブページ。2007年のDEF CONでのエンジンECUのモーディング講演から始まり（例：2017年のKeen Securityによるテスラハッキング）
- [Self-Driving and Connected Cars: Fooling Sensors and Tracking Drivers](https://www.youtube.com/watch?v=C29UGFsIWVI) - Jonathan PetitによるBlack Hat講演。自動化および接続された車は輸送の次の進化であり、安全性、交通効率、運転体験を向上させる。この講演は2部に分けられる：1）自律自動車のセキュリティ、2）接続車のプライバシー。2015年
- [A Survey of Remote Automotive Attack Surfaces](https://www.youtube.com/watch?v=MAGacjNw0Sw) - Charlie MillerおよびChris ValasekによるBlack Hat講演。自動車セキュリティの懸念は、かつての周辺から主流へと移行しており、セキュリティ研究者が現代の車が局所およびリモート攻撃に脆弱であることを示している。車の攻撃面についての議論。2014年
- [Pentesting vehicles with YACHT (Yet Another Car Hacking Tool)](https://www.blackhat.com/docs/eu-16/materials/eu-16-Sintsov-Pen-Testing-Vehicles-With-Cantoolz.pdf) -A presentation that discusses different attack surfaces of a vehicle, then continues to describe an approach to car hacking along with tools needed to analyse and gather useful information.
- [How to drift with any car](https://www.youtube.com/watch?v=KU7gl1n1tIs) - CANハッキングの紹介および、実車をXboxコントローラとして使う方法
- [Car Infotainment Hacking Methodology and Attack Surface Scenario](https://www.youtube.com/watch?v=F0mYkI2FJ_4) - Jay TurlaによるDEF CON 26のPacket Hacking Village／Wall of Sheepでの発表、IVIへの攻撃やバグの探査、ハッキングに関するガイド
- [TR19: Automotive Penetration Testing with Scapy](https://www.youtube.com/watch?v=7D7uNqPWrXw) - Troopers Conference 2019で、Scapyを自動車ペネトレーションテストに利用する方法を概説した発表です。
- [Analysis and Defense of Automotive Networks](https://www.youtube.com/watch?v=a1huGwMjjd4) - BSides Knoxville 2020で、CANの仕組みとセキュリティ、侵入検知の候補手法を概説した発表です。
- [Remote Exploitation of Honda Cars](https://www.youtube.com/watch?v=y4Uzm-CTa0I&ab_channel=CarHackingVillage) - Honda City 5代目モデルに搭載されたHonda Connectアプリは、アクセス制御のためのAPIに弱いセキュリティメカニズムを採用しており、悪意あるユーザーがそのTelematics Control Unit（TCU）と相互作用することで、車のスタート、ロック／アンロックなどの操作をリモートで実行できる可能性がある
- [TR22: UDS Fuzzing and the Path to Game Over](https://www.youtube.com/watch?v=c_DqxHmH7kc) - UDS診断プロトコルのフズング手法。自動車業界における多数のパーセンテーションテストプロジェクトの結果として提示され、現実世界での実証例（PoC）とともに、Troopers Conference 2022で発表された
- [CCC - Horror Stories From the Automotive Industry](https://www.youtube.com/watch?v=rAA-agcNeeg) - 自動車業界における一般的な脆弱性の恐ろしい例。100以上のパーセンテーションテストがTier 1サプライヤーおよびOEMに実施された結果。自動車セキュリティの現状を意識を高める目的。さらに、重機車のバッテリー分離器とUDSプロトコルを用いて、自動化された弱いシードランダム性のexploitを実現し、ターゲットを完全にコントロールするPoC。Chaos Communication Camp、DeepSec 2023およびTroopers Conference 23で発表された
- [Car Hacking Scene in the PH: How Far We've Come](https://www.youtube.com/watch?v=JaF-_KYQ46A) - Car Hacking Village PH presents their first attempt on the main tracks for ROOTCON. This is a rundown of CHVPH's past security research to current research - 車載ネットワーク、ECU、診断、攻撃・防御研究を扱う講演資料です。
- [Analysis of an In-vehicular network: From CAN bus to infotainment](https://www.youtube.com/watch?v=4d-uhs2VLCQ) - この講演ではDiv0 CSQの3つのテストベンチが、接続車のさらなる機能を探索する様子を紹介。ROOTCON 17のCar Hacking Villageで発表されたもの
- [An overview of Automotive Defensive Engineering](https://www.youtube.com/watch?v=MfTNv9SXd-o) - 車ハッカーがECUおよび車体アーキテクチャに導入されている現代の防御措置を学ぶための講演。ROOTCON 17のCar Hacking Villageで発表されたもの
- [Hacking Back Your Car](https://www.youtube.com/watch?v=akMok3Hb-pE) - Kamel GhaliによるROOTCON 17での講演。車のハッキングにおける攻撃者の視点とその起源、過去数年間で各国でどのように使われてきたか、そしてその攻撃が可能になる技術的詳細を探索するもの
- [TR23: V2GEvil: Ghost in the wires](https://www.youtube.com/watch?v=JVWFfSmIlRY) - この研究は電動車のセキュリティ強化に貢献しており、特に電動車通信制御器（EVCC）における脆弱性の特定に焦点を当て、ツールV2GEvilの紹介を行う。オンボード充電（OBC）ポートからアクセス可能であり、今後の車のセキュリティにとって非常に重要な攻撃ベクトルである
- [DEF CON CHV - V2GEvil: Ghost in the wires](https://www.youtube.com/watch?v=Ui2etjRyrUE) - DEF CON 32 Car Hacking VillageでのPavel KhuntおよびThomas Sermpinisによる「V2GEvil: Ghost in the wires」講演の短縮・要約版
- [The hack, the crash and two smoking barrels. (And all the times I (almost) killed an engineer.)](https://www.youtube.com/watch?v=MDndWJxfP-U) - トーマス・セルミピンスが、世界最大のOEM企業の最新モデル車のブレインスロット検知センサーに関する発見を責任を持って公表するプロセスを紹介し、その結果OEM企業が彼が敵対国と協力していたと指摘した件について。自動車メーカーがセキュリティ業界に対してどのように対応しているか、今後の方向性、そしてより良い実践方法について、DEF CON 32でのステージで語られた物語。

## 書籍 <a id="books"></a>

- [2014 Car Hacker's Handbook](https://www.amazon.com/Car-Hackers-Manual-Craig-Smith/dp/0990490106) - 2014年に公開された無料ガイド。車のハッキングについて。
- [2016 Car Hacker's Handbook](https://www.amazon.com/Car-Hackers-Handbook-Penetration-Tester/dp/1593277032) - 車両セキュリティ、CAN、診断、組込みシステムを学ぶ書籍です。 [No Starch Press](https://www.nostarch.com/carhacking) [here](https://books.google.com/books?id=Ao_QCwAAQBAJ&lpg=PP1&dq=car%20hacking&pg=PP1#v=onepage&q&f=false)
- [A Comprehensible Guide to Controller Area Network](https://www.amazon.com/Comprehensible-Guide-Controller-Area-Network/dp/0976511606/ref=pd_sim_14_1?ie=UTF8&dpID=41-D9UhlE9L&dpSrc=sims&preST=_AC_UL160_SR124%2C160_&psc=1&refRID=3FH8N10610H0RX8SMB6K) - 2005年の古い書籍だが、車両内のCANバスとネットワークに関する包括的なガイドとして依然として有用。
- [智能汽车安全攻防大揭秘](https://www.amazon.cn/dp/B075QZXY7W)This book first introduced some basic knowledge of security for automotive R&D personnel, such as encryption and decryption, security authentication, digital signatures, common attack types, and methods. Then it introduced the working principles of some smart cars for security researchers, such as the automotive intranet. Protocol, network architecture, principle of X-By-Wire remote control system, common potential attack surface, etc. Finally, a detailed analysis of some actual automotive attack or security test cases, and defense analysis of the loopholes involved in the case during the analysis process.
- [Controller Area Network Prototyping with Arduino](https://www.amazon.com/Controller-Area-Network-Prototyping-Arduino/dp/1938581164/ref=pd_sim_14_2?ie=UTF8&dpID=51J27ZEcl9L&dpSrc=sims&preST=_AC_UL160_SR123%2C160_&psc=1&refRID=V42FKNW09QGVGHW7ZFRR) - この書籍は、Arduino上でCANアプリケーションをプロトタイピングする方法を解説しており、自車のCAN対応作業に役立つ。
- [Embedded Networking with CAN and CANopen](https://www.amazon.com/Embedded-Networking-CANopen-Olaf-Pfeiffer/dp/0929392787/ref=pd_sim_14_37?ie=UTF8&dpID=41UnLKYFpmL&dpSrc=sims&preST=_AC_UL160_SR122%2C160_&psc=1&refRID=V42FKNW09QGVGHW7ZFRR) - 2003年に出版された書籍で、CANに関する文献のギャップを埋め、CANネットワークや埋め込みシステムとの対応についてさらに学べる。
- [Inside Radio: An Attack and Defense Guide](https://www.amazon.com/Inside-Radio-Attack-Defense-Guide/dp/9811084467)This book discusses the security issues in a wide range of wireless devices and systems,Chapter 4 433/315MHz Communication (4.3　4.4 4.5 is about car keys Security)

## 研究論文 <a id="research-papers"></a>

- [Koscher et al. Experimental Security Analysis of a Modern Automobile, 2010](http://www.autosec.org/pubs/cars-oakland2010.pdf)
- [Comprehensive Experimental Analyses of Automotive Attack Surfaces, 2011](http://static.usenix.org/events/sec11/tech/full_papers/Checkoway.pdf)
- [Miller and Valasek](http://illmatics.com/carhacking.html) - 車両・自動運転・車載ネットワークのセキュリティを扱う研究論文です。
  - [Adventures in Automotive Networks and Control Units (aka car hacking)](http://illmatics.com/car_hacking.pdf)
  - [Car Hacking for Poories](http://illmatics.com/car_hacking_poories.pdf)
  - [A Survey of Remote Automotive Attack Surfaces, 2014](http://illmatics.com/remote%20attack%20surfaces.pdf)
  - [Remote Compromise of an Unaltered Passenger Vehicle (aka The Jeep Hack), 2015](http://illmatics.com/Remote%20Car%20Hacking.pdf)
  - [Advanced CAN Message Injection, 2016](http://illmatics.com/can%20message%20injection.pdf)
- [5-Star Automotive Cyber Safety Framework, 2015](https://iamthecavalry.org/5star)
- [A Vulnerability in Modern Automotive Standards and How We Exploited It](https://documents.trendmicro.com/assets/A-Vulnerability-in-Modern-Automotive-Standards-and-How-We-Exploited-It.pdf)
- [A Car Hacking Experiment: When Connectivity Meets Vulnerability](http://ieeexplore.ieee.org/abstract/document/7413993/)
- [Security issues and vulnerabilities in connected car systems](http://ieeexplore.ieee.org/abstract/document/7223297/)
- [Automobile Driver Fingerprinting, 2016](http://www.autosec.org/pubs/fingerprint.pdf)
- [Intrusion detection system based on the analysis of time intervals of CAN messages for in-vehicle network, 2016](https://ieeexplore.ieee.org/document/7427089)
- [Modeling Inter-Signal Arrival Times for Accurate Detection of CAN Bus Signal Injection Attacks](https://dl.acm.org/citation.cfm?id=3064816)
- [The Connected Car - 車両・自動運転・車載ネットワークのセキュリティを扱う研究論文です。 https://www.computest.nl/documents/9/The_Connected_Car._Research_Rapport_Computest_april_2018.pdf
- [CAN-D: A Modular Four-Step Pipeline for Comprehensively Decoding Controller Area Network Data](https://arxiv.org/pdf/2006.05993.pdf)
- [Time-Based CAN Intrusion Detection Benchmark](https://arxiv.org/pdf/2101.05781.pdf)
- [Addressing the Lack of Comparability & Testing in CAN Intrusion Detection Research: A Comprehensive Guide to CAN IDS Data & Introduction of the ROAD Dataset](https://arxiv.org/pdf/2012.14600.pdf)
- [On the Insecurity of Vehicles Against Protocol-Level Bluetooth Threats](https://hexhive.epfl.ch/publications/files/22WOOT.pdf)
- [Pavel, K. Vehicle On-Board Charging Security Scanner, 2024](https://dspace.cvut.cz/bitstream/handle/10467/113764/F8-DP-2024-Khunt-Pavel-thesis.pdf)

## 講座 <a id="courses"></a>

- [Udacity's Self Driving Car Engineer Course](https://github.com/udacity/self-driving-car) - 車両セキュリティを体系的または実践的に学ぶ講座です。 [here](https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd013)

## ブログ <a id="blogs"></a>

- [Keen Security Lab Blog](http://keenlab.tencent.com/en/) - 車両セキュリティの研究・技術情報を発信するブログです。

## Webサイト <a id="websites"></a>

- [Automotive Security Research Group](https://asrg.io/knowledge/) - 自動車セキュリティ研究グループ（ASRG）は、自動車製品のセキュリティソリューション開発を促進する非営利プロジェクトである。
- [OpenGarages](https://github.com/opengarages) - 現代の自動車システムを理解するために必要な公開アクセス、ドキュメンテーション、ツールを提供。
- [DEFCON Car Hacking Village](http://www.carhackingvillage.com/) - DEFCON 24での車のハッキング実習。
- [canbushack: Hack Your Car](http://www.canbushack.com/blog/index.php) - 車のハッキング手法に関するコース。
- [OWASP Internet of Things Project](https://www.owasp.org/index.php/OWASP_Internet_of_Things_Project#tab=Community) - OWASPが推進するIoTセキュリティプロジェクト。車から医療機器まで、さらにその先まで対応。
- [I Am The Cavalry](https://www.iamthecavalry.org/) - 車両セキュリティの資料、データ、ツールを提供するWebサイトです。 [Automotive 5-Star Cyber Safety Framework](https://iamthecavalry.org/5star)
- [Carloop Community](https://community.carloop.io/) - 車のハッキングに興味を持つ人々のコミュニティ。車をクラウドに接続するための活動を進める。
- [Python Security](http://www.pythoncarsecurity.com/) - Pythonを統合した特定の車両セキュリの機能を持つ車を閲覧・購入できるウェブサイト。
- [NIST Automotive Cybersecurity Community of Interest](https://csrc.nist.gov/Projects/auto-cybersecurity-coi) - NIST（NVD CVEデータベースおよび現代暗号標準を運営する組織）は、自動車セキュリティ分野の「コミュニティ・オブ・イントリスト」を運営しており、自動車業界、学術界、政府との間で「議論を促進し、意見やフィードバックを受け取る」ことを目的としている。

## ニュースレター <a id="newsletters"></a>

[Welcoming contributions](https://github.com/jaredmichaelsmith/awesome-vehicle-security/blob/master/contributing.md)!


## カンファレンス <a id="conferences"></a>

- [U.S. Automotve Cyber Security Summit](http://www.automotivecybersecurity.com/) [European Automotive Cyber Security Summit](https://automotive-cyber-security.iqpc.de/) - 車両セキュリティの研究・実践を扱うイベントです。
- [escar conference](https://www.escar.info/) - 車に搭載された埋め込みセキュリティ。ヨーロッパで10年以上開催されており、現在では米国およびアジアでもイベントが開催されている。
- [IT Security for Vehicles](https://www.vdi-wissensforum.de/en/event/it-security-for-vehicles/) - ドイツ工学会（VDI）が主催する会議。米国およびヨーロッパのOEM企業、Tier1企業なども参加。
- [Cyber Truck Challenge](https://www.cybertruckchallenge.org/) - 重い車両のセキュリティに関するテーマに焦点を当てた会議。重い車両およびサブシステムの実際の評価を含む。


## フォローすべき人物・組織 <a id="who-to-follow"></a>

- Chris Valasek: Security Lead at [UberATC](#companies-and-jobs)
    - [Twitter](https://twitter.com/nudehaberdasher)
    - [Website](http://chris.illmatics.com/about.html)
- Charlie Miller: Hacked the first Apple iPhone, now does car security.
    - [Twitter](https://twitter.com/0xcharlie)
- Samy Kamkar: Created MySpace Worm, RollJam, OwnStar.
    - [Twitter](https://twitter.com/samykamkar)
    - [Website](https://samy.pl)
- Justin Seitz: Author of Black Hat Python (No Starch Press).
    - [Twitter](https://twitter.com/jms_dot_py)
- Troy Hunt: Pluralsight author. Microsoft Regional Director and MVP for Developer Security. Creator of [haveibeenpwned](https://haveibeenpwned.com/).
    - [Twitter](https://twitter.com/troyhunt)
    - [Website](https://www.troyhunt.com/)
- Ken Munro: British researcher, works at Pen Test Partners; major interest in vehicle security
    - [Twitter](https://twitter.com/TheKenMunroShow)
- OpenGarages: Initiative to created Vehicle Research Labs around the world.
    - [Twitter](https://twitter.com/opengarages)
    - [Website](http://opengarages.org/index.php/Main_Page)
- Hackaday: Collaborative project hosting for hackers - 車両セキュリティの研究・情報発信を行う人物または組織です。
    - [Twitter](https://twitter.com/hackaday)
- Pen Test Partners: British penetration testing firm; several posts concern their disclosed car security vulns
    - [Twitter](https://twitter.com/pentestpartners)
    - [Website](https://www.pentestpartners.com/blog)
- I Am The Cavalry: Global grassroots (eg. volunteer) initiative focused on the intersection of security and human life/public safety issues, such as cars.
    - [Twitter](https://twitter.com/iamthecavalry)
    - [Website](https://iamthecavalry.org)
    - [Discussion Group](https://groups.google.com/forum/#!forum/iamthecavalry)
- Car Hacking Village
    - [Twitter](https://twitter.com/CarHackVillage)
    - [Website](https://www.carhackingvillage.com/)
- carfucar: Founder of Car Hacking Village and Speaker or Trainer
    - [Twitter](https://twitter.com/CarHackVillage)
- Ian Tabor / mintynet: Car Hacker, Car Hacking Village staff
    - [Twitter](https://twitter.com/mintynet)
    - [Website](https://www.mintynet.com/)    
- Daniel Öster: Dala's EV Repair, electric vehicle CAN hacking/upgrading
    - [Youtube](https://www.youtube.com/channel/UCc3g-KhOBoicgOrB4KkMeew)
    - [Website](https://dalasevrepair.fi/)

## ポッドキャスト・エピソード <a id="podcasts-and-episodes"></a>

車両セキュリティを主題とするポッドキャスト、または関連回を含む番組です。

### ポッドキャスト <a id="podcasts"></a>
- [Security Weekly](http://securityweekly.com/) - セキュリティのあらゆる分野をカバーする優れたポッドキャスト。一部のエピソードでは車からドローンまで車両セキュリティの部分に焦点を当てている。
- [TrustedSec Podcast](https://podcasts.apple.com/us/podcast/security-noise/id1428851782) - TrustedSecのメンバー（社会工学分野のリーダー）が運営するポッドキャスト。多くのエピソードで最近の車両の脆弱性や攻撃について解説している。
- [SANS Internet Storm Center](https://isc.sans.edu/) - ISCが運営する定期ポッドキャスト。最新の脆弱性やセキュリティニュースについて詳しく解説している。
- [Security Ledger](https://soundcloud.com/securityledger) - セキュリティ専門家についてのインタビューをテーマにしたポッドキャスト。

### エピソード <a id="episodes"></a>
- [Car Hacking with Craig Smith](http://softwareengineeringdaily.com/2015/09/02/car-hacking-with-craig-smith/) - ソフトウェアエンジニアリング・デイリーは、上記の『カー・ハッキング・ハンドブック』の著者であるクライグ・スミスと対話した素晴らしいエピソードを放送しました。
- [Big Bugs Podcast Episode 1: Auto Bugs - Critical Vulns found in Cars with Jason Haddix](https://blog.bugcrowd.com/big-bugs-podcast-episode-1) - ジェイソン・ハディックスが、自動車に見つかった主要な脆弱性について検証しています。
- [Hacking Under the Hood and Into Your Car](http://www.npr.org/2013/08/02/208270026/hacking-under-the-hood-and-into-your-car) - クリス・ヴァラセックとチャーリー・ミラーはNPRと対話し、自動車にハッキングする方法について説明しています。
- [Hacking Connected Vehicles with Chris Valasek of IOActive](https://soundcloud.com/securityledger/chris-valasek-of-ioactive) - クリス・ヴァラセックが、接続型自動車にハッキングする話題について語っています。

## その他 <a id="miscellaneous"></a>
- [Reverse Engineering Resources](https://github.com/ps1337/automotive-security-research)
- [Real ORNL Automotive Dynamometer (ROAD) CAN Intrusion Dataset](https://0xsam.com/road/)
- [CAN DoS Fuzzing Attack Video](https://www.youtube.com/shorts/80A5IhvwsJU)
- [ECU Reflashing Detector Demo](https://www.youtube.com/watch?v=HPpGzwWQY5Y)

# プロジェクト <a id="projects"></a>

- [Open Vehicle Monitoring System](https://github.com/openvehicles/Open-Vehicle-Monitoring-System) - 開発者や愛好家が自車に追加機能を追加し、リモートで制御できるよう、自車にハードウェアモジュール、サーバー、モバイルアプリを構築するコミュニティプロジェクトです。
- [Open Source Car Control Project](https://github.com/PolySync/OSCC) - オープンソース・カー・コントロール・プロジェクトは、後期モデルの自動車を自律走行研究開発用の自動車に変換するためのハードウェアおよびソフトウェアプロジェクトです。
- [Uptane](https://uptane.github.io/overview.html) - Uptaneは、自動車のコンピュータユニットに空中で配信されるソフトウェアを保護するオープンで安全なソフトウェアアップデートシステムであり、国家レベルの攻撃者による最善の努力にも耐えられる設計です。

# ハードウェア <a id="hardware"></a>

車両セキュリティ研究に利用できるオープンソース・独自ハードウェアの概要です。[この記事](http://makezine.com/2016/04/08/car-hacking-tools-trade/)では以下の選択肢の多くを紹介しています。

- [Arduino](https://www.arduino.cc/) - アリドインボードには、CAN対応デバイスに接続するために使えるシールドが多数あります。
    - [CANdiy-Shield](https://github.com/watterott/CANdiy-Shield)
    - [DFRobot CAN-BUS Shield For Arduino](http://www.dfrobot.com/index.php?route=product/product&product_id=1444)
    - [SparkFun CAN-BUS Shield](https://www.sparkfun.com/products/13262)
    - [arduino-canbus-monitor](https://github.com/latonita/arduino-canbus-monitor) - どのシールドを選んでも、独自のスニッフィングツールが必要です。これは、Arduino + 任意のMCP CANシールドと組み合わせて、多くの標準CANバス分析ソフトウェアパッケージやSocketCANを使用できるLawicel/SLCANプロトコルの実装です。
- [CANtact](https://cantact.io/cantact/users-guide.html) - 『オープンソース・カー・ツール』は、自車のハッキングを支援するツールです。購入可能であり、ガイドに従って自作することもできます。
- [Freematics OBD-II Telematics Kit](http://freematics.com/pages/products/arduino-telematics-kit-3/) - アリドインベースのOBD-II Bluetoothアダプタキットには、OBD-IIデバイスとデータログゲートが含まれており、GPS、加速度計、ジャイロ、温度センサーも搭載されています。
- [ELM327](https://www.elmelectronics.com/obdic.html) - 非常に安価で、CANデバイスに接続できる実用的なチップセットです。
- [GoodThopter12](http://goodfet.sourceforge.net/hardware/goodthopter12/) - 有名なハードウェアハッカーが設計したこのボードは、自動車ネットワークの探索に使える汎用ボードです。
- [USB2CAN](http://www.8devices.com/products/usb2can/) - 安価なUSBからCANへの接続ケーブルで、Linux上でデバイスを登録し、CANネットワークからのデータを取得できます。
- [Rinho Telematics](https://rinho.com.ar/en) - CANバス（J1930/FMS）を内蔵し、オフラインデータダウンロードにWiFiを備え、BLE 5.0センサーを搭載したGPSトラッカー。TraccarおよびWialonと互換性があります。
- [Intrepid Tools](http://store.intrepidcs.com/) - 高価だが、CANおよびその他の車両通信プロトコルの逆エンジニアリングに特化した非常に柔軟なツール。
- [Red Pitaya](http://redpitaya.com/) - オシロスコープ、信号発生器、スペクトルアナライザーなどの高価な測定ツールを置き換えることができます。Red PitayaにはLabViewおよびMatlabインターフェースがあり、自作ツールやアプリケーションを書くことも可能で、Arduinoシールドなどへの拡張もサポートしています。
- [ChipWhisperer](http://newae.com/tools/chipwhisperer/) - 電力分析やクロックグリッチなどのサイドチャネル攻撃に使用できるシステムです。
- [HackerSDR](https://greatscottgadgets.com/hackrf/) - 1MHzから6GHzまでの電波信号の送受信が可能なソフトウェア定義ラジオ周辺装置。現代および次世代ラジオ技術のテスト開発を可能にします。
- [Carloop](https://www.carloop.io/) - インターネットに自車を接続しやすいオープンソース開発キット。SocketCANおよびcan-utilsと互換性があり、OBD-IIからシリアルへのケーブルは不要です。
- [CANBadger](https://gutenshit.github.io/CANBadger/) - 自動車システムの逆エンジニアリングおよびテストに用いられるツール。CANBadgerはハードウェアとソフトウェアの両方を含む。メインインターフェースは、カスタムPCBに取り付けられたLPC1768/LPC1769プロセッサであり、2つのCANインターフェース、SDカード、ブリンクLED、いくつかのGPIOピン、周辺機器の電源供給、およびEthernetポートを提供する。
- [CANSPY](https://bitbucket.org/jcdemay/canspy) - セキュリティアудィターがCANデバイスを検証できるプラットフォーム。CANフレームのブロッキング、転送、変更を自動的にもしくはインタラクティブに実行できる。
- [CANBus Triple](https://canb.us/) - 汎用的なコントローラーネットワーク（CAN）のスイスアーマークと開発プラットフォーム。
- [USBtin](http://www.fischl.de/usbtin/) - USBtinは、CANバスを監視し、CANメッセージを送信できるシンプルなUSBからCANへのインターフェース。USBtinはUSB CDCクラスを実装し、ホストコンピュータに仮想COMポートを作成する。
- [OpenXC](http://openxcplatform.com/hardware.html) - OpenXCは、カスタムアプリケーションやプラグインモジュールを車に追加できるオープンソースハードウェアとソフトウェアの組み合わせ。車から開発者にまでデータを開放するため、標準的なよく知られたツールを使用している。フォードの研究者たちが開発したもので、2002年以降のMY車（標準OBD-IIインターフェース）すべてに適用可能。フォード自動車会社の研究者が協力し、車用の後市場ソフトウェアおよびハードウェアの作成に標準的な方法を確立した。
- [Macchina M2](https://www.macchina.cc/m2-introduction) - Macchina 2.0は、私たちの1.X世代のMacchinaを完全にリニューアルしたもの。目標は変わらない：使いやすく、完全にオープンで、極めて互換性の高い自動車インターフェースを構築すること。
- [PandwaRF](https://pandwarf.com/) - PandwaRFは、サブ1GHz帯域で動作する小型で持ち運び可能なRF分析ツール。AndroidデバイスまたはLinuxPCを介してRFのキャプチャ、分析、再送を可能にする。300〜928MHz帯域のASK/OOK/MSK/2-FSK/GFSK調製によるデータをすべてキャプチャできる。
- [CAN MITM Bridge by MUXSCAN](https://www.tindie.com/products/muxsan/can-mitm-bridge-3-port-rev-25/) - CANメッセージのMITMを行うツールで、車との簡単な相互作用を可能にする。
- [PiCCANTE](https://github.com/Alia5/PiCCANTE) - Open-source CAN hacking tool based on Raspberry Pi Pico [2] (W) - CAN、OBD-II、車載信号の接続・取得・送受信に利用する機器です。
- [AutoPi](https://github.com/autopi-io/autopi-core) - AutoPiドングル（ラズベリーパイベースのOBD-IIデバイス）のオープンソースコアソフトウェア。車のテレメトリック、CANバスデータ収集、自動車IoTアプリケーションに使用できる。

# ソフトウェア <a id="software"></a>

オープンソース・独自ソフトウェアと各言語のライブラリの概要です。[この記事](http://makezine.com/2016/04/08/car-hacking-tools-trade/)では以下の選択肢の多くを紹介しています。

## アプリケーション <a id="applications"></a>

車両の信号調査、セキュリティ検証、機能実験を支援するソフトウェアです。

- [Wireshark](https://www.wireshark.org/) - WireSharkはCAN通信の逆エンジニアリングに使用できる。
- [Kayak](http://kayak.2codeornot2code.org/) - CANバス診断および監視用のJavaアプリケーション。
- [UDSim](https://github.com/zombieCraig/UDSim/) - CANバスを監視し、通信を観察することで接続されているデバイスを自動的に学習できるGUIツール。
- [RomRaider](http://www.romraider.com/) - サブアーマのエンジン制御ユニット向けのオープンソースチューニングツール。データの表示・ログ記録およびECUのチューニングが可能。
- [Intrepid Tools](http://store.intrepidcs.com/) - 高価だが、CANおよびその他の車両通信プロトコルの逆エンジニアリングに特化した非常に柔軟なツール。
- [O2OO](http://web.archive.org/web/20201108091723/https://www.vanheusden.com/O2OO/) - ELM327と連携して、SQLiteデータベースにデータを記録し、グラフ表示に使用できる。また、GPSデータの読み取りもサポート。このツールを車に接続し、GoogleマップのKMLデータを使ってドライブの経路をマップに表示できる。
- [CANToolz](https://github.com/eik00d/CANToolz) - CANToolzはCANネットワークおよびデバイスの分析を行うためのフレームワーク。複数のモジュールをパイプラインに組み合わせることで構築される。
- [BUSMASTER](https://rbei-etas.github.io/busmaster/) -An Open Source tool to simulate, analyze and test data bus systems such as CAN, LIN, FlexRay.
- [BlackFlag ECU](https://github.com/bad-antics/blackflag-ecu) - プロフェッショナルなECU診断およびチューニングツール。OBD-IIスキャン、DTC読み取り、リアルタイムセンサー監視、リフレッシュ機能を備える。
- [OpenXC](http://openxcplatform.com/getting-started/index.html) - 車載通信の取得、解析、診断、ファジング、可視化を支援するアプリケーションです。 `Python` `Android`
- [openpilot](https://github.com/commaai/openpilot) - openpilotは、ホンダおよびアクラの車に適応したACC（アダプティブ・クルーズコントロール）およびLKAS（レーンキープアシストシステム）の機能を実行するオープンソースドライビングエージェント。
- [openalpr](https://github.com/openalpr/openalpr) - C++で書かれたオープンソースの自動車の車牌認識ライブラリ。C#、Java、Node.js、Go、Pythonでのバインディングを提供。
- [metasploit](https://community.rapid7.com/community/transpo-security/blog/2017/02/02/exiting-the-matrix) - 人気のmetasploitフレームワークが、ハードウェアブリッジセッションをサポートし、socketcanやSDRラジオなどのハードウェアデバイスにフレームワークの機能を拡張した。
- [Mazda AIO Tweaks](https://mazdatweaks.com/) - 多くのMazda MZD インフォテインメントシステムのチューニング用に、一括インストール/アンインストールツール
- [mazda_getInfo](https://github.com/shipcod3/mazda_getInfo) - USBポートがマツダ車のインフォテインメントシステムに攻撃の可能性があるという実証実験と、マツダのハックがどのように行われるか（CMUにおける既知のバグ）
- [talking-with-cars](https://github.com/P1kachu/talking-with-cars) - CAN関連スクリプト、および車をゲームパッドとして使うスクリプト
- [CANalyzat0r](https://github.com/schutzwerk/CANalyzat0r) - プロパティ車プロトコル向けのセキュリティ分析ツールキット
- [Tesla Mod](https://github.com/hypery11/flipper-tesla-fsd) - テスラCANバスツールキット（Flipper ZeroおよびESP32用）。ナグキラー、FSD領域解錠、トラックモード、BMSダッシュボード、ブレーキスパイクアラート、ハイビームストローブ、30以上のCANハンドラーを含む。オープンソース（GPL-3.0）

## ライブラリ・ツール <a id="libraries-and-tools"></a>

上記のアプリケーション区分に含まれないライブラリとツールです。

[Custom Applications SDK for Mazda Connect Infotainment System](https://github.com/flyandi/mazda-custom-application-sdk) - A micro framework that allows you to write and deploy custom applications for the Mazda Infotainment System.

### C <a id="c"></a>

- [SocketCAN Utils](https://github.com/linux-can/can-utils) - Linux上でSocketCANを使用するためのユーザースペースユーティリティ
- [vircar](https://github.com/dn5/vircar) - SocketCANに基づきCANメッセージを送信する仮想車のユーザースペース環境
- [dbcc](https://github.com/howerj/dbcc) - "dbccは、DBCファイルを主にCコードに変換するプログラムであり、CANメッセージのシリアライズおよびデシリアライズを行うことができる。" 既存の車のDBCファイルを使用することで、CANメッセージとCAN環境のプロパティを抽出するCコードに変換できる。

### C++ <a id="c++"></a>

- [High Level ViWi Service](https://github.com/iotbzh/high-level-viwi-service) - 高レベルのフォルクスワーグル CAN信号プロトコル実装
- [CanCat](https://github.com/atlas0fd00m/CanCat) - ライブCANデータとのインタラクションに使える「スイスアーマーク」。主なAPIインターフ及はPythonだが、C++で記述されている。
- [CANdevStudio](https://github.com/GENIVI/CANdevStudio) - CANバスシミュレーション用の開発ツール。CANdevStudioは、自動車開発者に、点火状態、ドア状態、リバースギアなどCAN信号をシミュレーションできる。
- [UnlockECU](https://github.com/jglim/UnlockECU) - 無料でオープンソースのECUセードキー解錠ツール

### Java <a id="java"></a>
- [ITS Geonetworking](https://github.com/alexvoronov/geonetworking) - Javaから車載通信・診断を扱うライブラリまたはツールです。

### Python <a id="python"></a>

- [CANard](https://github.com/ericevenchick/canard) - コントローラーアービーネットワークアプリケーション向けのPythonフレームワーク
- [Caring Caribou](https://github.com/CaringCaribou/caringcaribou/) - 車両セキュリティの*nmap*に相当するツール
- [c0f](https://github.com/zombieCraig/c0f/) - CAN通信のフィンガープリントツール。車両とのインタラクションテスト時に、CANネットワーク上の特定の信号を見つけるのに使える。
- [Python-CAN](https://github.com/hardbyte/python-can) - さまざまなCAN実装（SocketCANを含む）へのPythonインターフェース。Python 2.7.xまたは3.3.x以上を使用してCANネットワーク上で通信できる。
- [Python-OBD](https://github.com/brendan-w/python-OBD) - OBD-II車両ポートからリアルタイムセンサーデータを処理するためのPythonモジュール。ELM327 OBD-IIアダプタと互換性があり、Raspberry Piにも対応。
- [CanCat](https://github.com/atlas0fd00m/CanCat) - ライブCANデータとのインタラクションに使える「スイスアーマーク」。主なAPIインターフ及はPythonだが、C++で記述されている。
- [Scapy](https://github.com/secdev/scapy) - PythonからCAN・UDS・OBD-II等を扱うライブラリまたはツールです。 [automotive doc](https://scapy.readthedocs.io/en/latest/layers/automotive.html)
- [CanoPy](https://github.com/tbruno25/canopy) - リアルタイムでメッセージペイロードを可視化およびプロットするためのPython GUI。
- [canTot](https://github.com/shipcod3/canTot) - sploitkitに基づいたPythonベースのCLIフレームワーク。Metasploitと類似の使い方をしているため、使いやすい。これは、既知のCANバス脆弱性や面白いCANバスハックに特化したエクスプロイトフレームワークに相当する。
- [SocketCAN](https://python-can.readthedocs.io/en/master/interfaces/socketcan.html) Python interface to SocketCAN
- [canmatrix](https://github.com/ebroecker/canmatrix) Python module to work with CAN matrix files
- [Jumpstarter](https://github.com/jumpstarter-dev/jumpstarter) - UDS、DoIP、CANバスプロトコルに対応したハードウェアインザループテストフレームワークと自動車診断ドライバーを備えたもの
- [canopen](https://canopen.readthedocs.io/en/latest/) Python module to communicate with CANopen devices
- [cantools](https://github.com/eerimoq/cantools) Python module to decode and encode CAN messages using a DBC file
- [Caring Caribou Next](https://github.com/Cr0wTom/caringcaribounext) - 元のCaring Caribouプロジェクトのアップグレードおよび最適化されたバージョン
- [canarchy](https://github.com/hexsecs/canarchy) - CANarchyは、自動化、セキュリティ研究、エージェント駆動ワークフローに特化したストリームファーストCAN分析および操作ランタイム


### Go <a id="go"></a>

- [CANNiBUS](https://github.com/Hive13/CANiBUS/) - 研究者が同じ車両へ同時接続し、講習やチームでのリバースエンジニアリングを行えるGo製サーバーです。
- [CAN Simulator](https://github.com/carloop/simulator-program) - PiCAN2またはオープンソースの[CAN Simulatorボード](https://github.com/carloop/simulator)と組み合わせて使う、Raspberry Pi向けのGo製CANシミュレーターです。

### JavaScript <a id="javascript"></a>

- [NodeJS extension to SocketCAN](https://github.com/sebi2k1/node-can) - JavaScriptから車載通信を扱うライブラリまたはツールです。

# 企業・求人 <a id="companies-and-jobs"></a>

車両セキュリティ分野の企業と求人情報です。

- [UberATC](https://www.uber.com/us/en/autonomous/) - Uber Advanced Technologies Center（現Uber AV）- [info@uberatc.com](mailto:info@uberatc.com)
- [Tesla](https://www.tesla.com/careers/search#/filter/?keyword=security&department=1) - テスラが多様な役割においてセキュリティ専門家を採用している。特に、自転車のセキュリティ強化に注目。
- [Intrepid Control Systems](https://www.intrepidcs.com/jobs/) - 車両のリバースに向けたツールを構築するエムベディッドセキュリティ企業
- [Rapid7](https://www.rapid7.com/company/careers.jsp) - Rapid7は情報、コンピュータ、エムベディッドセキュリティ分野で業務を行っている
- [IOActive](http://www.ioactive.com/) - ハードウェアおよびエムベディッドシステムのパエンチングに取り組むセキュリティコンサルティング会社
- [Cohda Wireless](https://cohdawireless.com/) - V2X DSRCラジオおよびソフトウェア
- [VicOne](https://www.vicone.com/) - トレンドマイクロの子会社で自動車セキュリティに特化

## 協調的脆弱性開示 <a id="coordinated-disclosure"></a>

- [General Motors](https://hackerone.com/gm) on HackerOne - 自動車メーカーの脆弱性報告・協調的開示窓口です。
- [Stellantis](https://bugcrowd.com/stellantis) on Bugcrowd - 自動車メーカーの脆弱性報告・協調的開示窓口です。
- [Tesla Motors](https://bugcrowd.com/tesla) on Bugcrowd - 自動車メーカーの脆弱性報告・協調的開示窓口です。
- [ASRG](https://asrg.io/disclosure/) - ASRGの公開プロセスは、責任ある公開を行うためのプロセスであり、責任ある企業との直接連絡が不可能または反応がない場合に適用される
- [Zeekr](https://security.zeekrlife.com/vulnerability) - ZeekrおよびGeelyの責任ある公開プログラム


# その他のAwesomeリスト <a id="other-awesome-lists"></a>

関連するリストをまとめた一覧です。

- Security
  - [Application Security](https://github.com/paragonie/awesome-appsec)
  - [Security](https://github.com/sbilly/awesome-security)
  - [Capture the Flag](https://github.com/apsdehal/awesome-ctf)
  - [Malware Analysis](https://github.com/rshipp/awesome-malware-analysis)
  - [Android Security](https://github.com/ashishb/android-security-awesome)
  - [Hacking](https://github.com/carpedm20/awesome-hacking)
  - [Honeypots](https://github.com/paralax/awesome-honeypots)
  - [Incident Response](https://github.com/meirwah/awesome-incident-response)
- Meta
  - [awesome](https://github.com/sindresorhus/awesome)
  - [lists](https://github.com/jnv/lists)

# コントリビューション <a id="contributing"></a>

コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/jaredmichaelsmith/awesome-vehicle-security/blob/master/contributing.md)を確認してください。
