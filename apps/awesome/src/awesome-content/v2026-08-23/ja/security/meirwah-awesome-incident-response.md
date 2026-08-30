---
title: "meirwah/awesome-incident-response"
description: "セキュリティインシデント対応とDFIRのツール・資料を集めた厳選リスト"
licenseSource: "github-meirwah-awesome-incident-response-readme-md"
---

<a id="awesome-incident-response"></a>
# Awesome Incident Response [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Check URLs](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml/badge.svg)](https://github.com/meirwah/awesome-incident-response/actions/workflows/check_urls.yml)

> セキュリティアナリストと[DFIR](http://www.acronymfinder.com/Digital-Forensics%2c-Incident-Response-%28DFIR%29.html)チームを支援する、セキュリティインシデント対応のツールと資料の厳選リストです。

デジタルフォレンジクスおよびインシデントレスポンス（DFIR）チームは、組織のセキュリティインシデント対応を担います。証拠の収集、影響の修復、再発防止策の導入などがその役割です。

<a id="contents"></a>
## 目次

- [Adversary Emulation](#adversary-emulation)
- [All-In-One Tools](#all-in-one-tools)
- [Books](#books)
- [Communities](#communities)
- [Disk Image Creation Tools](#disk-image-creation-tools)
- [Evidence Collection](#evidence-collection)
- [Incident Management](#incident-management)
- [Knowledge Bases](#knowledge-bases)
- [Linux Distributions](#linux-distributions)
- [Linux Evidence Collection](#linux-evidence-collection)
- [Log Analysis Tools](#log-analysis-tools)
- [Memory Analysis Tools](#memory-analysis-tools)
- [Memory Imaging Tools](#memory-imaging-tools)
- [OSX Evidence Collection](#osx-evidence-collection)
- [Other Lists](#other-lists)
- [Other Tools](#other-tools)
- [Playbooks](#playbooks)
- [Process Dump Tools](#process-dump-tools)
- [Sandboxing/Reversing Tools](#sandboxingreversing-tools)
- [Scanner Tools](#scanner-tools)
- [Timeline Tools](#timeline-tools)
- [Videos](#videos)
- [Windows Evidence Collection](#windows-evidence-collection)

<a id="ir-tools-collection"></a>
## インシデント対応ツール集

<a id="adversary-emulation"></a>
### 攻撃者エミュレーション

* [APTSimulator](https://github.com/NextronSystems/APTSimulator) - Windows バッチスクリプトで、ツールと出力ファイルを用いてシステムを攻撃されたように見せます
* [Atomic Red Team (ART)](https://github.com/redcanaryco/atomic-red-team) - MITRE ATT&CK フレームワークにマッピングされた小型かつ高柔軟性の検出テスト
* [AutoTTP](https://github.com/jymcheong/AutoTTP) - 自動化された戦術・技術・手順。複雑なシーケンスを手動で繰り返すことで、リグレッションテストや製品評価、研究者向けデータ生成を実現
* [Caldera](https://github.com/mitre/caldera) - Windowsエンタープライズネットワークで侵入後の攻撃行動を実行する自動敵対者エミュレーションシステム。MITRE ATT&CK™に基づく事前設定済みの敵対者モデルから計画を生成します
* [DumpsterFire](https://github.com/TryCatchHCF/DumpsterFire) - 再現可能で時間差のある分散セキュリティイベントを構築する、モジュール式・メニュー駆動・クロスプラットフォーム対応ツール。ブルーチームの訓練やセンサー／アラート対応付け、レッドチームによる模擬インシデントの作成に利用できます
* [Metta](https://github.com/uber-common/metta) - 敵対シミュレーションを実施する情報セキュリティ準備ツール
* [Network Flight Simulator](https://github.com/alphasoc/flightsim) - 悪意のあるネットワークトラフィックを生成する軽量ユーティリティ。セキュリティチームがセキュリティコントロールやネットワーク可視性を評価する際に活用
* [Red Team Automation (RTA)](https://github.com/endgameinc/RTA) - RTAは、ブルーチームがMITRE ATT&CKに基づいた悪意ある技術を用いて検出能力をテストできるスクリプトフレームワークを提供します
* [RedHunt-OS](https://github.com/redhuntlabs/RedHunt-OS) - 敵対行動シミュレーションおよび脅威ハンティング用の仮想マシン

<a id="all-in-one-tools"></a>
### オールインワンツール

* [Belkasoft Evidence Center](https://belkasoft.com/ec) -  ツールキットは、ハードディスク、ドライブイメージ、メモリダンプ、iOS、BlackberryおよびAndroidのバックアップ、UFED、JTAGおよびチップオフダンプを分析することで、複数のソースからデジタル証拠を迅速に抽出します
* [CimSweep](https://github.com/PowerShellMafia/CimSweep) - CIM/WMIベースのツールセットで、すべてのWindowsバージョンに対して、インシデント対応および脅威ハンティングをリモートで実行できるようになります
* [CIRTkit](https://github.com/byt3smith/CIRTKit) - CIRTKitは、ツールの集合にとどまらず、インシデント対応およびフォレンジック調査プロセスの継続的な統合を支援するフレームワークです
* [Cyber Triage](http://www.cybertriage.com) - ホストデータを収集・分析して侵害の有無を判断します。スコアリングと推奨エンジンにより重要なアーティファクトへ素早く絞り込み、収集ツール、ディスクイメージ、KAPEなどのデータを取り込めます。Sleuth Kit Labsが開発しています
* [Cynative](https://github.com/cynative/cynative) - インフラ向けの詳細調査エージェント。安全な読み取り専用方式でAWS、GCP、Azure、Kubernetes、GitHub、GitLabを対象にします
* [Dissect](https://github.com/fox-it/dissect) - 多様なディスク／ファイル形式のフォレンジックアーティファクトへ高速にアクセスして分析する、Fox-IT開発のDFIRフレームワーク兼ツールセット
* [Doorman](https://github.com/mwielgoszewski/doorman) - osqueryのフリート管理ツール。TLS設定、ログ、分散読み書きエンドポイントを使い、端末群のosquery設定を低負荷で遠隔管理できます
* [Falcon Orchestrator](https://github.com/CrowdStrike/falcon-orchestrator) - 拡張可能なWindowsベースアプリケーション。ワークフロー自動化、ケース管理、セキュリティ対応機能を提供します
* [Flare](https://github.com/fireeye/flare-vm) - 完全にカスタマイズ可能なWindowsベースのセキュリティディストリビューション。マルウェア解析、インシデント対応、ペネトレーションテストに使用できます
* [Fleetdm](https://github.com/fleetdm/fleet) - セキュリティ専門家向けに設計された最先端ホストモニタリングプラットフォーム。Facebookが検証済みのosqueryプロジェクトを活用し、Fleetdmは継続的なアップデート、機能、大きな質問への迅速な回答を提供します
* [GRR Rapid Response](https://github.com/google/grr) - リモートライブフォレンジック向けのインシデント対応フレームワーク。対象システムにPythonエージェントを導入し、Pythonサーバー基盤から管理・通信します。付属のPython APIクライアントに加え、[PowerGRR](https://github.com/swisscom/PowerGRR)はWindows、Linux、macOS対応のPowerShell APIクライアントを提供します
* [IRIS](https://github.com/dfir-iris/iris-web) - IRISは、インシデントレスポンスアナリスト向けのウェブ協働プラットフォームで、技術レベルでの調査を共有できるようにしています。
* [Kuiper](https://github.com/DFIRKuiper/Kuiper) - デジタルフォレンジクス調査プラットフォーム
* [Limacharlie](https://www.limacharlie.io/) - エンドポイントセキュリティプラットフォームで、複数の小さなプロジェクトが協力して構成されており、Windows、OSX、Linux、AndroidおよびiOSを含むマルチプラットフォームでの低レベル環境を提供し、機能を拡張するためにメモリに追加モジュールを管理・展開できるようにしています。
* [Matano](https://github.com/matanolabs/matano): AWS上で動作するオープンソースのサーバーレスセキュリティデータレイク。Apache Icebergデータレイクへセキュリティデータを取り込み、保存・分析し、Pythonによるリアルタイム検出をコードとして実行できます
* [MozDef](https://github.com/mozilla/MozDef) - セキュリティインシデントの処理プロセスを自動化し、インシデントハンドラーのリアルタイム活動を支援します。
* [MutableSecurity](https://github.com/MutableSecurity/mutablesecurity) - セキュリティソリューションのセットアップ、設定、使用を自動化するCLIプログラム。
* [nightHawk](https://github.com/biggiesmallsAG/nightHawkResponse) - ElasticSearchをバックエンドとして使用し、Redlineコレクションをインジェストするための、非同期フォレンジクスデータ表示用アプリケーション。
* [Open Computer Forensics Architecture](http://sourceforge.net/projects/ocfa/) - 別の一般的な分散型オープンソースコンピュータフォレンジクスフレームワーク。このフレームワークはLinuxプラットフォーム上で構築され、データをPostgreSQLデータベースに保存しています。
* [osquery](https://osquery.io/) - SQLに似たクエリ言語を使って、LinuxおよびmacOSインフラについて簡単に質問できるようにし、提供された*インシデントレスポンスパック*により、侵入の検出と対応を支援します。
* [Redline](https://www.fireeye.com/services/freeware/redline.html) - ユーザーにホスト調査機能を提供し、メモリおよびファイル分析を通じて悪意のある活動の兆候を検出し、脅威評価プロファイルの開発を可能にします。
* [SOC Multi-tool](https://github.com/zdhenard42/SOC-Multitool) - セキュリティ担当者の調査を簡素化する、強力で使いやすいブラウザー拡張機能。
* [The Sleuth Kit & Autopsy](http://www.sleuthkit.org) - UnixおよびWindowsベースのツールで、コンピュータのフォレンジクス分析を支援します。複数のツールが提供されており、デジタルフォレンジクス分析に役立ちます。これらのツールは、ディスクイメージの分析、ファイルシステムの詳細分析、その他さまざまな分析を支援します。
* [TheHive](https://thehive-project.org/) - スケーラブルで3つの機能を統合したオープンソースかつ無料のソリューションで、SOC、CSIRT、CERTおよび迅速に調査・対応が必要なセキュリティインシデントを扱う情報セキュリティ実務者にとって、業務を楽にするように設計されています。
* [VanGuard](https://github.com/ridgelinecyberdefence/vanguard) - クロスプラットフォーム対応のインシデント対応ツールキット。単一のインストール不要バイナリに28の事前定義済みケースを備え、メモリ、ディスク、ネットワーク、クラウドのアーティファクトを収集してタイムラインを自動生成します。
* [Velociraptor](https://github.com/Velocidex/velociraptor) - エンドポイントの可視性と収集ツール
* [X-Ways Forensics](http://www.x-ways.net/forensics/) - ディスクのクローンおよびイメージ作成に使用されるフォレンジクスツール。削除されたファイルやディスクの分析を可能にします。
* [Zentral](https://github.com/zentralopensource/zentral) - osqueryの強力なエンドポイントインベントリ機能と柔軟な通知およびアクションフレームワークを組み合わせたツール。これにより、OS XおよびLinuxクライアント上の変更を特定し、反応できるようになります。

<a id="books"></a>
### 書籍

* [Applied Incident Response](https://www.amazon.com/Applied-Incident-Response-Steve-Anson/dp/1119560268/) - Steve Ansonによるインシデントレスポンスに関する書籍。
* [Art of Memory Forensics](https://www.amazon.com/Art-Memory-Forensics-Detecting-Malware/dp/1118825098/) - Windows、Linux、Macのメモリにおけるマルウェアおよび脅威の検出。
* [Crafting the InfoSec Playbook: Security Monitoring and Incident Response Master Plan](https://www.amazon.com/Crafting-InfoSec-Playbook-Security-Monitoring/dp/1491949406) - Jeff Bollinger、Brandon EnrightおよびMatthew Valitesによるもの。
* [Digital Forensics and Incident Response: Incident response techniques and procedures to respond to modern cyber threats](https://www.amazon.com/Digital-Forensics-Incident-Response-techniques/dp/183864900X) - Gerard Johansenによるもの。
* [Introduction to DFIR](https://medium.com/@sroberts/introduction-to-dfir-d35d5de4c180/) - Scott J. Robertsによるもの。
* [Incident Response & Computer Forensics, Third Edition](https://www.amazon.com/Incident-Response-Computer-Forensics-Third/dp/0071798684/) - インシデントレスポンスに関する定番ガイド
* [Incident Response Techniques for Ransomware Attacks](https://www.amazon.com/Incident-Response-Techniques-Ransomware-Attacks/dp/180324044X) - ransomware攻撃に対するインシデントレスポンス戦略を構築するための優れたガイド。オレグ・スカルキンによる。
* [Incident Response with Threat Intelligence](https://www.amazon.com/Incident-response-Threat-Intelligence-intelligence-based/dp/1801072957) - 脅威インテリジェンスをもとにインシデントレスポンス計画を構築するための優れた参考書。ロベルト・マルティネスによる。
* [Intelligence-Driven Incident Response](https://www.amazon.com/Intelligence-Driven-Incident-Response-Outwitting-Adversary-ebook-dp-B074ZRN5T7/dp/B074ZRN5T7) - スコット・J・ロバーツ、レベカ・ブラウンによる。
* [Operator Handbook: Red Team + OSINT + Blue Team Reference](https://www.amazon.com/Operator-Handbook-Team-OSINT-Reference/dp/B085RR67H5/) - インシデントレスポンダーにとって優れた参考書。
* [Practical Memory Forensics](https://www.amazon.com/Practical-Memory-Forensics-Jumpstart-effective/dp/1801070334) - メモリフォレインスの実践に関する定番ガイド。スベトラナ・オストロブスカヤとオレグ・スカルキンによる。
* [The Practice of Network Security Monitoring: Understanding Incident Detection and Response](http://www.amazon.com/gp/product/1593275099) - リチャード・ビートリッチによるIR（インシデントレスポンス）の書籍。

<a id="communities"></a>
### コミュニティ

* [Digital Forensics Discord Server](https://discordapp.com/invite/JUqe9Ek) - 法執行機関、民間企業、フォレンジックベンダーからなる8,000人以上の専門職のコミュニティ。また、多くの学生やハブリーツも！ガイド [here](https://aboutdfir.com/a-beginners-guide-to-the-digital-forensics-discord-server/)。
* [Slack DFIR channel](https://dfircommunity.slack.com) - Slack DFIRコミュニティチャンネル - [Signup here](https://start.paloaltonetworks.com/join-our-slack-community)。

<a id="disk-image-creation-tools"></a>
### ディスクイメージ作成ツール

* [AccessData FTK Imager](http://accessdata.com/product-download/?/support/adownloads#FTKImager) - ディスクの種類に関わらず、回収可能なデータをプレビューするためのフォレンジックツール。FTK Imagerは、32ビットおよび64ビットシステムにおいて、ライブメモリおよびページングファイルの取得も可能。
* [Bitscout](https://github.com/vitaly-kamluk/bitscout) - ビッツカウト（Bitscout）は、ヴィタリ・カムルクが開発したツールで、完全に信頼できるカスタマイズ可能なライブCD/LiveUSBイメージを構築できます。これは、リモートデジタルフォレンジック（あるいは、あなたの選択した他のタスク）に使用できるように設計されています。システム所有者にとって透明で監視可能であり、フォレンジック的に正確でカスタマイズ可能かつコンパクトです。
* [GetData Forensic Imager](http://www.forensicimager.com/) - Windowsベースのプログラムで、フォレンジックイメージを次の一般的なフォレンジックファイルフォーマットのいずれかに取得、変換、または検証できます。
* [Guymager](http://guymager.sourceforge.net) - Linux上でメディア取得に使用できる無料のフォレンジックイメージツール。
* [Magnet ACQUIRE](https://www.magnetforensics.com/magnet-acquire/) - Magnet ForensicsのACQUIREは、Windows、Linux、OS Xおよびモバイルオペレーティングシステム上でさまざまなディスク取得を実行できます。

<a id="evidence-collection"></a>
### 証拠収集

* [Acquire](https://github.com/fox-it/acquire) - Acquireは、ディスクイメージまたはライブシステムから、フォレンジックアーテファクトを迅速に収集し、軽量コンテナに格納するツールです。これにより、Acquireはデジタルフォレンジックの初期評価プロセスを短縮するなど、非常に優れたツールとなります。可能な場合、Acquireは [Dissect](https://github.com/fox-it/dissect) を使用して、原始ディスクからその情報を収集します。
* [artifactcollector](https://github.com/forensicanalysis/artifactcollector) - アーテファクトコレクタープロジェクトは、システム上でフォレンジックアーテファクトを収集するソフトウェアを提供しています。
* [bulk_extractor](https://github.com/simsong/bulk_extractor) - ディスクイメージ、ファイル、またはファイルディレクトリをスキャンし、ファイルシステムやファイルシステム構造をパースせずに有用な情報を抽出するコンピュータフォレンジックツール。ファイルシステム構造を無視するため、このプログラムは速度と徹底性において特徴づけられます。
* [Cold Disk Quick Response](https://github.com/rough007/CDQR) - フォレンジックイメージファイル（`dd`、E01、`.vmdk`など）を迅速に分析するためのパーサーの一覧を簡潔にまとめたもので、9つのレポートを出力します。
* [CyLR](https://github.com/orlikoski/CyLR) - CyLRツールは、NTFSファイルシステムを持つホストから迅速かつ安全にフォレンジックアーテファクトを収集し、ホストへの影響を最小限に抑えます。
* [Forensic Artifacts](https://github.com/ForensicArtifacts/artifacts) - デジタルフォレンジックアーテファクトリポジトリ
* [ir-rescue](https://github.com/diogo-fernan/ir-rescue) - WindowsのバッチスクリプトおよびUnixのBashスクリプトで、インシデント対応中にホストのフォレnsicデータを包括的に収集する
* [Live Response Collection](https://www.brimorlabs.com/tools/) - Windows、OSX、\*nixベースのオペレーティングシステムから揮発性データを自動的に収集するツール
* [Margarita Shotgun](https://github.com/ThreatResponse/margaritashotgun) - コマンドラインユーティリティ（Amazon EC2インスタンスを使用する場合も、使用しない場合も動作）で、リモートメモリの取得を並列化する
* [SPECTR3](https://github.com/alpine-sec/SPECTR3) - ポータブルなiSCSI読み取りアクセスを用いて、リモート証拠を取得・分類・調査
* [UAC](https://github.com/tclahr/uac) - UAC（Unix-like Artifacts Collector）は、インシデント対応用のライブレスポンス収集スクリプトであり、AIX、Android、ESXi、FreeBSD、Linux、macOS、NetBSD、NetScaler、OpenBSDおよびSolarisシステムのアーテファクトを、本機のバイナリおよびツールを活用して自動的に収集する

<a id="incident-management"></a>
### インシデント管理

* [Catalyst](https://github.com/SecurityBrewery/catalyst) - 無料のSOARシステムで、アラート処理およびインシデント対必プロセスを自動化する
* [CyberCPR](https://www.cybercpr.com) - GDPR準拠を支援するために、センシティブなインシデントを処理する際に「必要な知識」を内蔵したコミュニティおよび商業用インシデント管理ツール
* [Cyphon](https://medevel.com/cyphon/) - Cyphonは、インシデント管理における多くの関連タスクを1つのプラットフォームで統合することで、煩雑さを解消し、イベントの受信・処理・分類を行い、分析ワークフロー全体にわたる包括的なソリューションを提供する。データを集約し、アラートをまとめて優先順位付けし、アナリストがインシデントを調査・記録できるようにする
* [CORTEX XSOAR](https://www.paloaltonetworks.com/cortex/xsoar) - パロアルトのセキュリティオーケストレーション、自動化および対応プラットフォームで、インシデントライフサイクル管理および多くの統合により自動化を強化
* [DFTimewolf](https://github.com/log2timeline/dftimewolf) - フォレnsicデータ収集、処理およびデータエクスポートをオーケストレーションするためのフレームワーク
* [DFIRTrack](https://github.com/dfirtrack/dfirtrack) - インシデント対応トラッキングアプリケーションで、1つ以上のインシデントをケースおよびタスクを通じて管理し、多くの影響を受けるシステムとアーテファクトを扱う
* [Fast Incident Response (FIR)](https://github.com/certsocietegenerale/FIR/) - 柔軟性とスピードを意識したセキュリティインシデント管理プラットフォーム。セキュリティインシデントの作成、追跡、報告を容易にし、CSIRT、CERT、SOCなどに有効である
* [RTIR](https://www.bestpractical.com/rtir/) - インシデント対応用のリクエストトラッカー（RTIR）は、コンピュータセキュリティチーム向けのオープンソースインシデント対応システムであり、世界中の10以上のCERTおよびCSIRTチームと協力し、インシデント報告の増加に対応するサポートを提供。RTIRはRequest Trackerのすべての機能をベースに構築している
* [Sandia Cyber Omni Tracker (SCOT)](https://github.com/sandialabs/scot) - 柔軟性と使いやすさに焦点を当てたインシデント対応および知識収集ツール。我々の目標は、ユーザーに負担をかけずにインシデント対応プロセスに価値を加えることである
* [Shuffle](https://github.com/frikky/Shuffle) - 一般用途のセキュリティ自動化プラットフォームで、アクセシビリティに焦点を当てている
* [threat_note](https://github.com/defpoint/threat_note) - 軽量な調査ノートで、セキュリティ研究者がその研究に関連するインジケータを登録および取得できるようになる
* [Zenduty](https://www.zenduty.com) - Zendutyは、インシデント管理プロセス全体にわたるアラート通知、オンコール管理および対応オーケストレーションを提供する革新的なインシデント管理プラットフォームであり、チームがインシデント管理ライフサイクルにおいてより高い制御と自動化を実現できる

<a id="knowledge-bases"></a>
### ナレッジベース

* [Digital Forensics Artifact Knowledge Base](https://github.com/ForensicArtifacts/artifacts-kb) - デジタルフォレンジックアーテファクト知識ベース
* [Windows Events Attack Samples](https://github.com/sbousseaden/EVTX-ATTACK-SAMPLES) - Windowsイベント攻撃サンプル
* [Windows Registry Knowledge Base](https://github.com/libyal/winreg-kb) - Windowsレジストリ知識ベース

<a id="linux-distributions"></a>
### Linuxディストリビューション

* [The Appliance for Digital Investigation and Analysis (ADIA)](https://forensics.cert.org/#ADIA) - VMwareベースのアプライアンスで、デジタル調査および取得に使用され、完全に公開ドメインソフトウェアから構成されている。ADIAに含まれるツールには、Autopsy、Sleuth Kit、Digital Forensics Framework、log2timeline、Xplico、Wiresharkがある。システムのメンテナンスの大部分はWebminを使用している。小型から中規模のデジタル調査および取得に設計されている。このアプライアンスはLinux、Windows、Mac OSで動作する。i386（32ビット）およびx86_6等（64ビット）のバージョンが提供されている。
* [Computer Aided Investigative Environment (CAINE)](http://www.caine-live.net/index.html) - 調査中に利用者に支援を提供する多くのツールが含まれており、証拠収集を含む。
* [CCF-VM](https://github.com/rough007/CCF-VM) - CyLR CDQR Forensics Virtual Machine (CCF-VM)：収集データのパースを一括で実行し、標準的な検索を内蔵して簡単に検索可能にし、単一および複数ホストの同時検索を可能にする総合的なソリューション。
* [NST - Network Security Toolkit](https://sourceforge.net/projects/nst/files/latest/download?source=files) - ネットワークセキュリティプロフェッショナルに役立つ、多くのベストオブブリードオープンソースネットワークセキュリティアプリケーションを収録したLinuxディストリビューション。
* [NullSec Linux](https://github.com/bad-antics/nullsec-linux) - 140以上の事前インストールされた証拠および攻撃セキュリティツール、カスタム強化されたカーネル、統合されたインシデントレスポンスワークフローを備えたセキュリティに特化したLinuxディストリビューション。
* [PALADIN](https://sumuri.com/software/paladin/) - さまざまな証拠作業を、証拠的に正確に実行できるように設計された改良されたLinuxディストリビューション。多くのオープンソース証拠ツールが内蔵されている。
* [Security Onion](https://github.com/Security-Onion-Solutions/security-onion) - ネットワークセキュリティモニタリングに特化したLinuxディストリビューションで、高度な分析ツールを備えている。
* [SANS Investigative Forensic Toolkit (SIFT) Workstation](http://digital-forensics.sans.org/community/downloads) - 最先端のオープンソースツールを用いて、インシデントレスポンスおよび深刻なデジタル証拠技術を実現できることが示されている。これらのツールは無料で利用可能であり、頻繁に更新されている。

<a id="linux-evidence-collection"></a>
### Linuxの証拠収集

* [FastIR Collector Linux](https://github.com/SekoiaLab/Fastir_Collector_Linux) - FastIR for Linuxは、ライブLinux上でさまざまなアーテファクトを収集し、結果をCSVファイルに記録する。
* [MAGNET DumpIt](https://github.com/MagnetForensics/dumpit-linux) - Rustで書かれたLinux用の高速メモリ取得オープンソースツール。Linuxマシンの完全なメモリクラッシュダンプを生成する。

<a id="log-analysis-tools"></a>
### ログ解析ツール

* [AppCompatProcessor](https://github.com/mbevilacqua/appcompatprocessor) - AppCompatProcessorは、企業規模のAppCompat / AmCacheデータから、従来のスタックやグリッピング技術を超えて追加の価値を抽出するために設計されている。
* [APT Hunter](https://github.com/ahmedkhlief/APT-Hunter) - APT-HunterはWindowsイベントログ向けの脅威検出ツール。
* [Chainsaw](https://github.com/countercept/chainsaw) - Chainsawは、Windowsイベントログ内の脅威を迅速に特定するための強力な「初回対応」機能を提供する。
* [Event Log Explorer](https://eventlogxp.com/) - ログファイルおよびその他のデータを迅速に分析するためのツール。
* [Event Log Observer](https://lizard-labs.com/event_log_observer.aspx) - Microsoft Windowsイベントログに記録されたイベントを表示、分析、監視するためのGUIツール。
* [Hayabusa](https://github.com/Yamato-Security/hayabusa) - Hayabusaは、日本のYamato Securityグループが開発したWindowsイベントログ用の高速証拠タイムライン生成ツールおよび脅威検出ツール。
* [Kaspersky CyberTrace](https://support.kaspersky.com/13850) - 脅威データフィードとSIEMソリューションを統合する脅威インテリジェンス融合および分析ツール。ユーザーは、既存のセキュリティ運用プロセスにおけるセキュリティ監視およびインシデントレポート（IR）活動に、即座に脅威インテリジェンスを活用できる。
* [Log Parser Lizard](https://lizard-labs.com/log_parser_lizard.aspx) - 構造化されたログデータ（サーバーログ、Windowsイベント、ファイルシステム、Active Directory、log4netログ、カンマまたはタブで区切られたテキスト、XMLまたはJSONファイル）に対してSQLクエリを実行。また、Microsoft LogParser 2.2のGUIを提供し、構文エディタ、データグリッド、チャート、ピボットテーブル、ダッシュボード、クエリマネージャなど、強力なUI要素を備えている。
* [Lorg](https://github.com/jensvoid/lorg) - 高度なHTTPDログファイルのセキュリティ分析および証拠分析を行うためのツール。
* [Logdissect](https://github.com/dogoncouch/logdissect) - ログファイルおよびその他のデータの分析に用いるCLIツールおよびPython API。
* [NullSec LogReaper](https://github.com/bad-antics/nullsec-logreaper) - マルチフォーマットパース、パターンマッチング、タイムライン再構築、インシデントレスポンス用の異常検知を備えた高速ログ分析および証拠ツール。
* [LogonTracer](https://github.com/JPCERTCC/LogonTracer) - Windowsログインの悪意ある行動を可視化・分析するためのツール
* [Sigma](https://github.com/SigmaHQ/sigma) - 既に広範なルールセットを備えたSIEMシステム向けの一般形式の署名
* [StreamAlert](https://github.com/airbnb/streamalert) - サーバレスでリアルタイムログデータ分析フレームワーク。カスタムデータソースを吸収し、ユーザーが定義した論理でアラートをトリガーできる。
* [SysmonSearch](https://github.com/JPCERTCC/SysmonSearch) - SysmonSearchは、イベントログの集計により、Windowsイベントログ分析をより効果的かつ時間短縮できる。
* [WELA](https://github.com/Yamato-Security/WELA) - Windowsイベントログ分析用のスイス軍刀のようなツール。
* [Zircolite](https://github.com/wagga40/Zircolite) - EVTXまたはJSON形式のためのスタンドアローンかつ高速のSIGMAベースの検出ツール。

<a id="memory-analysis-tools"></a>
### メモリ解析ツール

* [AVML](https://github.com/microsoft/avml) - Linux用のポータブルな揮発性メモリ取得ツール。
* [Evolve](https://github.com/JamesHabben/evolve) - Volatilityメモリフォレインスフレームワーク向けのウェブインターフェース。
* [inVtero.net](https://github.com/ShaneK2/inVtero.net) - Windows x64向けの高度なメモリ分析ツールで、ネストされた仮想化環境をサポート。
* [LiME](https://github.com/504ensicsLabs/LiME) - LinuxおよびLinuxベースデバイスから揮発性メモリを取得できるロード可能なカーネルモジュール（LKM）。かつてはDMDと呼ばれていた。
* [MalConfScan](https://github.com/JPCERTCC/MalConfScan) - MalConfScanはVolatilityプラグインであり、既知のマルウェアの設定データを抽出する。Volatilityはインシデントレスポンスおよびマルウェア分析用のオープンソースメモリフォレインスフレームワークである。このツールはメモリイメージ内でマルウェアを検索し、設定データをダンプする機能を備えている。さらに、悪意のあるコードが参照する文字列をリストアップする機能を持つ。
* [Memoryze](https://www.fireeye.com/services/freeware/memoryze.html) - インシデントレスポンダーがライブメモリ内で悪意を発見するための無料メモリフォレインスソフトウェア。Memoryzeはメモリイメージの取得および/または分析を行い、ライブシステムではページファイルを分析に含めることが可能。
* [Memoryze for Mac](https://www.fireeye.com/services/freeware/memoryze.html) - Memoryze for MacはMemoryzeのMac版。ただし、機能数は少ない。
* [MemProcFS] (https://github.com/ufrisk/MemProcFS) - MemProcFS is an easy and convenient way of viewing physical memory as files in a virtual file system.
* [Orochi](https://github.com/LDO-CERT/orochi) - Orochiは、協働的なメモリダンプ分析を行うためのオープンソースフレームワーク。
* [Rekall](http://www.rekall-forensic.com/) - 揮発性メモリ（RAM）サンプルからデジタルアーテファクトを抽出するためのオープンソースツール（およびライブラリ）。
* [Volatility](https://github.com/volatilityfoundation/volatility) - 高度なメモリフォレインスフレームワーク。
* [Volatility 3](https://github.com/volatilityfoundation/volatility3) - 揮発性メモリ取得フレームワーク（Volatilityの後継）。
* [VolatilityBot](https://github.com/mkorman90/VolatilityBot) - 研究者向けの自動化ツール。バイナリ抽出フェーズのすべての推測と手動作業を省き、メモリ分析調査の初期段階で調査者に支援を提供。
* [VolDiff](https://github.com/aim4r/VolDiff) - Volatilityを基にしたマルウェアメモリフットプリント分析。
* [WindowsSCOPE](http://www.windowsscope.com/windowsscope-cyber-forensics/) - 揮発性メモリ分析用のメモリフォレインスおよび逆エンジニアリングツール。Windowsカーネル、ドライバー、DLL、仮想および物理メモリの分析を可能にする。

<a id="memory-imaging-tools"></a>
### メモリイメージ取得ツール

* [Belkasoft Live RAM Capturer](http://belkasoft.com/ram-capturer) - 小さな無料のフォレインツールで、アクティブなアンチデバグやアンチダンプシステムによって保護された場合でも、コンピュータの揮発性メモリのすべての内容を信頼性高く抽出できる
* [Linux Memory Grabber](https://github.com/halpomeranz/lmg/) - Linuxメモリのダンプとボリューティプロファイルの作成用スクリプト
* [MAGNET DumpIt](https://www.magnetforensics.com/resources/magnet-dumpit-for-windows) - Windows（x86、x6要、ARM64）向けの高速メモリ取得ツール。Windowsマシンの完全なメモリクラッシュダンプを生成できる
* [Magnet RAM Capture](https://www.magnetforensics.com/free-tool-magnet-ram-capture/) - 容疑者のコンピュータの物理メモリをキャプチャするための無料イメージツール。最新バージョンのWindowsに対応
* [OSForensics](http://www.osforensics.com/) - 32ビットおよび64ビットシステムでのライブメモリ取得ツール。個々のプロセスのメモリ空間または物理メモリダンプを取得できる

<a id="osx-evidence-collection"></a>
### macOSの証拠収集

* [Knockknock](https://objective-see.com/products/knockknock.html) - OSXで自動実行されるスクリプト、コマンド、バイナリなど、持続的な項目を表示
* [macOS Artifact Parsing Tool (mac_apt)](https://github.com/ydkhatri/mac_apt) - ライブマシン、ディスクイメージ、個別アーテファクトファイルに対応するプラグインベースのフォレインフレームワーク。迅速なMacの初期診断に使用可能
* [OSX Auditor](https://github.com/jipegit/OSXAuditor) - 無料のMac OS Xコンピュータフォレインツール
* [OSX Collector](https://github.com/yelp/osxcollector) - OSX Auditorのライブレスポンス用の派生ツール
* [The ESF Playground](https://themittenmac.com/the-esf-playground/) - Apple Endpoint Security Framework（ESF）内のイベントをリアルタイムで表示するツール

<a id="other-lists"></a>
### その他のリスト

* [Awesome Event IDs](https://github.com/stuhli/awesome-event-ids) - デジタルフォレインとインシデントレスポンスに有用なイベントIDリソースのコレクション
* [Awesome Forensics](https://github.com/cugu/awesome-forensics) - 素晴らしいフォレイン分析ツールとリソースの厳選リスト
* [Didier Stevens Suite](https://github.com/DidierStevens/DidierStevensSuite) - ツールコレクション
* [Eric Zimmerman Tools](https://ericzimmerman.github.io/) - SANSインスティテュートの講師であるエリック・ジンザーマンが作成した最新のフォレインツールリスト
* [List of various Security APIs](https://github.com/deralexxx/security-apis) - セキュリティ用途のための公開JSON APIの集まり

<a id="other-tools"></a>
### その他のツール

* [Cortex](https://thehive-project.org) - Cortexは、IPアドレスやメールアドレス、URL、ドメイン名、ファイル、ハッシュなど、観測可能な項目をWebインターフェースで1つずつまたは大量に分析できる。また、REST APIを用いて分析操作を自動化できる。
* [Crits](https://crits.github.io/) - 分析エンジンとサイバーセキュリティ脅威データベースを組み合わせたウェブベースツール
* [Diffy](https://github.com/Netflix-Skunkworks/diffy) - NetflixのSIRTが開発したDFIRツール。インシデント中にクラウドインスタンス（現在はAWS上のLinuxインスタンス）の侵害範囲を迅速にスコープし、基準との差異を表示することで、インスタンスの追跡対応を効率的に実行できる
* [domfind](https://github.com/diogo-fernan/domfind) - PythonによるDNSサーチャー。異なるTLDの下で同じドメイン名を発見できる
* [Fileintel](https://github.com/keithjjones/fileintel) - ファイルハッシュごとのインテリジェンスを取得する
* [HELK](https://github.com/Cyb3rWard0g/HELK) - 脅威調査プラットフォーム
* [Hindsight](https://github.com/obsidianforensics/hindsight) - Google Chrome／Chromium向けのインターネット履歴のフォレインス
* [Hostintel](https://github.com/keithjjones/hostintel) - ホストごとのインテリジェンスの取得
* [IPASIS](https://ipasis.com/) - リアルタイムIPの信頼性およびメール検証API。不審な相互作用を調査する際に使用し、1回のAPI呼び出しでVPN/プロキシ/Torの検出とメールリスク評価を組み合わせた相互作用信頼スコア（0～100）を返す。
* [imagemounter](https://github.com/ralphje/imagemounter) - フォレインスディスクイメージの（アン）マウントを容易にするコマンドラインツールおよびPythonパッケージ
* [Kansa](https://github.com/davehull/Kansa/) - PowerShellによるモジュラリティを持つインシデント対応フレームワーク
* [MFT Browser](https://github.com/kacos2000/MFT_Browser) - MFTディレクトリツリーの再構成および記録情報
* [Munin](https://github.com/Neo23x0/munin) - VirusTotalおよびその他のサービス向けのオンラインハッシュチェック
* [PowerSponse](https://github.com/swisscom/PowerSponse) - PowerSponseは、セキュリティインシデント対応中にターゲットされた制御および修復を行うために開発されたPowerShellモジュール
* [PyaraScanner](https://github.com/nogoodconfig/pyarascanner) - マルウェアゾーンやインシデント対応向けに、マルチスレッドで多数ルールと多数ファイルを扱うシンプルなYARAスキャンPythonスクリプト
* [rastrea2r](https://github.com/rastrea2r/rastrea2r) - Windows、LinuxおよびOS XでYARAを使用してIOCsをディスクおよびメモリにスキャンできる。
* [RaQet](https://raqet.github.io/) - リモートコンピュータ（クライアント）を再起動させ、意図的に構築されたフォレインスOSで実行した場合に、そのディスクをトリージできる、非標準のリモート取得およびトリージツール
* [Raccine](https://github.com/Neo23x0/Raccine) - シンプルなランサムウェア保護
* [Stalk](https://www.percona.com/doc/percona-toolkit/2.2/pt-stalk.html) - 問題が発生した際にMySQLに関するフォレインスデータを収集
* [Scout2](https://nccgroup.github.io/Scout2/) - Amazon Web Services管理者が環境のセキュリティ状態を評価できるセキュリティツール
* [Stenographer](https://github.com/google/stenographer) - パケットキャプチャソリューション。すべてのパケットを迅速にディスクにスプールし、そのパケットのサブセットに対してシンプルかつ高速にアクセスできるようにする。可能な限り多くの履歴を保存し、ディスク使用量を管理し、上限に達した場合に削除する。インシデント発生前後におけるトラフィックをキャプチャするのに最適であり、すべてのネットワークトラフィックを明示的に保存する必要がない。
* [sqhunter](https://github.com/0x4d31/sqhunter) - osqueryおよびSalt Open（SaltStack）に基づく脅威調査ツール。osqueryのTLSプラグインなしで、即時または分散されたクエリを実行できる。sqhunterは、オープンネットワークソケットをクエリし、脅威インテリジェンスソースと比較できる。
* [sysmon-config](https://github.com/SwiftOnSecurity/sysmon-config) - Sysmon設定ファイルテンプレート（デフォルトで高品質イベントトレース）
* [sysmon-modular](https://github.com/olafhartong/sysmon-modular) - Sysmon設定モジュールのリポジトリ
* [traceroute-circl](https://github.com/CIRCL/traceroute-circl) - CSIRT（またはCERT）運営者向けに拡張されたトレースルート。通常、CSIRTチームはIPアドレスを受信してインシデントを処理する必要がある。ルクセンブルクのコンピュータ緊急対応センターによって作成
* [X-Ray 2.0](https://www.raymond.cc/blog/xray/) - Windowsユーティリティ（維持されていないまたは長期間維持されていない）によるウイルスサンプルのAVベンダーへの提出

<a id="playbooks"></a>
### プレイブック

* [AWS Incident Response Runbook Samples](https://github.com/aws-samples/aws-incident-response-runbooks/tree/0d9a1c0f7ad68fb2c1b2d86be8914f2069492e21) - AWS IR Runbookサンプル。各実行体に合わせてカスタマイズされるべきもの。サンプルは「DoSまたはDDoS攻撃」、「認証情報の漏洩」、「Amazon S3バケットへの意図しないアクセス」の3つ。
* [Counteractive Playbooks](https://github.com/counteractive/incident-response-plan-template/tree/master/playbooks) - 反対行動PLaybooksのコレクション
* [GuardSIght Playbook Battle Cards](https://github.com/guardsight/gsvsoc_cirt-playbook-battle-cards) - サイバーインシデントレスポンスPLaybookバトルカードのコレクション
* [IRM](https://github.com/certsocietegenerale/IRM) - CERTソーシエテ・ジェネラルによるインシデントレスポンス手法のドキュメント
* [PagerDuty Incident Response Documentation](https://response.pagerduty.com/) - PagerDutyインシデントレスポンスプロセスの一部を説明するドキュメント。インシデントの準備、およびその際とその後の対応についての情報も提供。ソースは [GitHub](https://github.com/PagerDuty/incident-response-docs) に公開。
* [Phantom Community Playbooks](https://github.com/phantomcyber/playbooks) - Splunk用のPhantomコミュニティPLaybooksだが、他の用途にもカスタマイズ可能。
* [ThreatHunter-Playbook](https://github.com/OTRF/ThreatHunter-Playbook) - ハンティングキャンペーンのための技術や仮説の開発を支援するPLaybook。

<a id="process-dump-tools"></a>
### プロセスダンプツール

* [Microsoft ProcDump](https://docs.microsoft.com/en-us/sysinternals/downloads/procdump) - 実行中のWin32プロセスのメモリイメージを即座にダンプ。
* [PMDump](http://www.ntsecurity.nu/toolbox/pmdump/) - プロセスのメモリコンテンツをファイルにダンプできるツールであり、プロセスを停止せずに実行可能。

<a id="sandboxingreversing-tools"></a>
### サンドボックス／リバースエンジニアリングツール

* [Any Run](https://app.any.run/) - 動的および静的調査を用いて、あらゆるタイプの脅威に対してインタラクティブなオンラインマルウェア分析サービス。
* [CAPA](https://github.com/mandiant/capa) - 実行ファイル内の機能を検出。PE、ELF、.NETモジュール、またはシェルコードファイルに対して実行し、そのプログラムが何をできるかを示す。
* [CAPEv2](https://github.com/kevoreilly/CAPEv2) - マルウェアの構成とペイロードの抽出。
* [Cuckoo](https://github.com/cuckoosandbox/cuckoo) - オープンソースかつ高度にカスタマイズ可能なサンドボックスツール。
* [Cuckoo-modified](https://github.com/spender-sandbox/cuckoo-modified) - コミュニティが開発した、大幅に改良されたCuckooのフォーク。
* [Cuckoo-modified-api](https://github.com/keithjjones/cuckoo-modified-api) - Cuckooを改良したサンドボックスを制御するためのPythonライブラリ。
* [Cutter](https://github.com/rizinorg/cutter) - rizinをベースにした無料かつオープンソースの逆エンジニアリングプラットフォーム。
* [Ghidra](https://github.com/NationalSecurityAgency/ghidra) - ソフトウェア逆エンジニアリングフレームワーク。
* [Hybrid-Analysis](https://www.hybrid-analysis.com/) - CrowdStrikeによる無料かつ強力なオンラインサンドボックス。
* [Intezer](https://analyze.intezer.com/#/) - Intezer AnalyzeはWindowsバイナリに深く入り込み、既知の脅威とのマイクロコードの類似性を検出し、正確かつ理解しやすい結果を提供する。
* [Joe Sandbox (Community)](https://www.joesandbox.com/) - ジョー・サンドボックスは、Windows、Android、Mac OS、Linux、およびiOSで異常な活動を示す可能性のあるファイルやURLを検出・分析し、包括的かつ詳細な分析レポートを提供する。
* [Mastiff](https://github.com/KoreLogicSecurity/mastiff) - 複数のファイルフォーマットからキーチャラクテリスティクスを抽出するプロセスを自動化する静的分析フレームワーク。
* [Metadefender Cloud](https://www.metadefender.com) - 無料の脅威インテリジェンスプラットフォームで、ファイルのマルチスキャン、データクリーンアップ、脆弱性評価を提供。
* [Radare2](https://github.com/radareorg/radare2) - 逆エンジニアリングフレームワークおよびコマンドラインツールセット。
* [Reverse.IT](https://www.reverse.it/) - クラウドストレージによるハイブリッド分析ツールの代替ドメイン（クラウドストライク提供）。
* [Rizin](https://github.com/rizinorg/rizin) - UNIX風の逆エンジニアリングフレームドワークおよびコマンドラインツールセット。
* [StringSifter](https://github.com/fireeye/stringsifter) - マレウス分析において関連性の高い文字列をランキングするマシンラーニングツール。
* [Threat.Zone](https://app.threat.zone) - クラウドベースの脅威分析プラットフォームで、研究者向けにサンドボックス、CDR、インタラクティブ分析を提供。
* [Valkyrie Comodo](https://valkyrie.comodo.com) - Valkyrieは、ファイルから実行時の行動と数百の特徴を用いて分析を行う。
* [Viper](https://github.com/viper-framework/viper) - Pythonベースのバイナリ分析および管理フレームワークで、CuckooおよびYARAと良好に連携。
* [Virustotal](https://www.virustotal.com) - 無料のオンラインサービスで、ファイルおよびURLを分析し、アンチウイルスエンジンやウェブスキャナが検出するウイルス、웜、トロイドおよびその他の悪意あるコンテンツを特定。
* [Visualize_Logs](https://github.com/keithjjones/visualize_logs) - ログ（Cuckoo、Procmonなど）の可視化ライブラリおよびコマンドラインツール（オープンソース）。
* [Yomi](https://yomi.yoroi.company) - 無料のマルチサンドボックスで、Yoroiが管理・ホスティング。

<a id="scanner-tools"></a>
### スキャンツール

* [Fenrir](https://github.com/Neo23x0/Fenrir) - シンプルなIOCスキャナー。Linux/Unix/OSXシステムでIOCをbashでスキャンできる。THORおよびLOKIの開発者によって作成。
* [LOKI](https://github.com/Neo23x0/Loki) - 無料のインシデント対応スキャナ。エンドポイントをYARAルールやその他のインジケーター（IOCs）でスキャン。
* [Spyre](https://github.com/spyre-project/spyre) - Goで書かれたシンプルなYARAベースのIOCスキャナー。

<a id="timeline-tools"></a>
### タイムラインツール

* [Aurora Incident Response](https://github.com/cyb3rfox/Aurora-Incident-Response) - インシデントの詳細なタイムラインを簡単に構築できるプラットフォーム。
* [Highlighter](https://www.fireeye.com/services/freeware/highlighter.html) - Fire/Mandiantから提供される無料ツールで、ログやテキストファイルを可視化し、キーワードやフレーズに該当する領域をグラフィック上で強調。感染のタイムラインやコンパーム後の行動を把握に適している。
* [Morgue](https://github.com/etsy/morgue) - Etsyが開発したPHPベースのウェブアプリで、事後分析を管理。
* [Plaso](https://github.com/log2timeline/plaso) -  ツールlog2timelineのPythonベースのバックエンドエンジン。
* [Timesketch](https://github.com/google/timesketch) - オープンソースの協働的なフォレンジックタイムライン分析ツール

<a id="videos"></a>
### 動画

* [The Future of Incident Response](https://www.youtube.com/watch?v=bDcx4UNpKNc) - ブラス・シュネイアがOWASP AppSecUSA 2015で発表したツール

<a id="windows-evidence-collection"></a>
### Windowsの証拠収集

* [AChoir](https://github.com/OMENScan/AChoir) - Windows用ライブ取得ユーティリティのスクリプト作成プロセスを標準化・簡略化するためのフレームワーク／スクリプティングツール
* [Crowd Response](http://www.crowdstrike.com/community-tools/) - インシデント対応やセキュリティ対応に必要なシステム情報を収集するための軽量なWindowsコンソールアプリケーション。多数のモジュールと出力フォーマットを備えている。
* [Cyber Triage](http://www.cybertriage.com) - サイバートリージュは、無料で使用できる軽量収集ツールを備えている。ソースファイル（例：レジストリのヒーブ、イベントログ）を収集するだけでなく、ライブホスト上でそれらを解析し、スタートアップ項目、スケジュールタスクなどに参照される実行ファイルも収集できる。出力はJSONファイルであり、これを無料版のサイバートリージュにインポートできる。サイバートリージュはSleuth Kit Labsが開発しており、Autopsyも同社が開発している。
* [DFIR ORC](https://dfir-orc.github.io/) - MFT、レジストリハイブ、イベントログなどの重要なアーティファクトを確実に解析・収集する専用ツール群。データ収集に特化し分析は行わず、実行中のWindowsマシンからフォレンジックに適したスナップショットを作成します。ソースコードは[GitHub](https://github.com/DFIR-ORC/dfir-orc)で公開されています。
* [FastIR Collector](https://github.com/SekoiaLab/Fastir_Collector) - ライブWindowsシステム上で異なるアーテファクトを収集し、結果をCSVファイルに記録するツール。これらのアーテファクトの分析により、早期の攻撃が検出できる。
* [Fibratus](https://github.com/rabbitstack/fibratus) - Windowsカーネルの探索およびトレースを行うツール。
* [Hoarder](https://github.com/muteb/Hoarder) - フォレンジックまたはインシデント対応調査に必要な最も価値の高いアーテファクトを収集する。
* [IREC](https://binalyze.com/products/irec-free/) - すべてのインシデント対応証拠を一括収集するツール。RAMイメージ、$MFT、イベントログ、WMIスクリプト、レジストリヒーブ、システムの復元ポイントなど、多くのデータを収集。無料で利用可能で、高速かつ使いやすい。
* [Invoke-LiveResponse](https://github.com/mgreen27/Invoke-LiveResponse) -  Invoke-LiveResponseは、ターゲットに限定された収集を行うライブレスポンスツール。
* [IOC Finder](https://www.fireeye.com/services/freeware/ioc-finder.html) - マディアンから提供される無料ツール。ホストシステムデータの収集およびインジケーター・オブ・コンパーム（IOCs）の存在確認を報告。Windows専用。メンテナンスが終了。Windows 7／Windows Server 2008 R2まで完全にサポートされている。
* [IRTriage](https://github.com/AJMartel/IRTriage) - インシデント対応トリージ - Windows証拠収集によるフォレンジック分析。
* [KAPE](https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape) - エリック・ズィーマンが開発したKrollアーテファクトパーサーおよびエクストラクタ（KAPE）。最も一般的なデジタルアーテファクトを検出し、迅速に解析するトリージツール。時間に余裕がない場合に非常に優れており、徹底的である。
* [LOKI](https://github.com/Neo23x0/Loki) - 無料のインシデント対応スキャナ。エンドポイントをYARAルールやその他のインジケーター（IOCs）でスキャン。
* [MEERKAT](https://github.com/TonyPhipps/Meerkat) - Windows向けのPowerShellベースのトリージおよび脅威調査ツール。
* [Panorama](https://github.com/AlmCo/Panorama) - ライブWindowsシステムでの迅速なインシデント概要。
* [PowerForensics](https://github.com/Invoke-IR/PowerForensics) - PowerShellを使用したライブディスクフォレンジックプラットフォーム。
* [PSRecon](https://github.com/gfoss/PSRecon/) - PSReconは、PowerShell（v2以降）を使用してリモートWindowsホストからデータを収集し、データをフォルダに整理し、すべての抽出データをハッシュ処理し、PowerShellおよび各種システムプロパティもハッシュ処理し、その後セキュリティチームにデータを送信する。データは共有フォルダに送信、メールで送信、またはローカルに保存できる。
* [RegRipper](https://github.com/keydet89/RegRipper3.0) - レジストリからキー、値、データなどの情報を抽出・解析するためのオープンソースツール。Perlで記述されている。
