---
title: "ashishb/android-security-awesome"
description: "ashishb/android-security-awesome の正規スナップショット"
licenseSource: "github-ashishb-android-security-awesome-readme-md"
---

<a id="android-security-awesome"></a>
# android-security-awesome ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

[![Star History Rank](https://api.star-history.com/badge?repo=ashishb/android-security-awesome&theme=dark)](https://www.star-history.com/ashishb/android-security-awesome)

[![Link Liveness Checker](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml)

[![Lint Shell scripts](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml)
[![Lint Markdown](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml)
[![Lint YAML](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml)
[![Lint GitHub Actions](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml)
![GitHub contributors](https://img.shields.io/github/contributors/ashishb/android-security-awesome)

Androidセキュリティ関連資料のコレクションです。

1. [ツール](#tools)
1. [学術・研究・出版物・書籍](#academic)
1. [エクスプロイト・脆弱性・バグ](#exploits)

<a id="tools"></a>
## ツール

<a id="online-analyzers"></a>
### オンライン解析サービス

1. [Appknox](https://www.appknox.com/) - 無料ではありません
1. [Virustotal](https://www.virustotal.com/)
1. [NowSecure Lab Automated](https://www.nowsecure.com/blog/2016/09/19/announcing-nowsecure-lab-automated/) - AndroidおよびiOSのモバイルアプリに対するモバイルアプリセキュリティテスト用のエンタープライズツール。クラウド上で実際のデバイスで動的および静的分析を自動化し、結果を数分以内に返す。無料ではありません
1. [App Detonator](https://appdetonator.run/) - APKバイナリを分解して、アプリ開発者、署名、ビルド、マニフェストなどのソースコードレベルの詳細を提供。3分析/日無料枠。
1. [Pithus](https://beta.pithus.org/) - オープンソースのAPKアナライザ。現在はベータ版であり、静的分析に限定されている。Yaraルールを使ってマルウェアを検出可能。さらに 。 [here](https://beta.pithus.org/about/)
1. [Oversecured](https://oversecured.com/) - AndroidおよびiOSアプリ向けのエンタープライズ脆弱性スキャナー。アプリ所有者および開発者に、開発プロセスにOversecuredを統合することで、モバイルアプリの各新バージョンを安全に保つ機能を提供。無料ではありません
1. [AppSweep by Guardsquare](https://appsweep.guardsquare.com/) - 開発者向けの無料かつ高速なAndroidアプリセキュリティテスト
1. [Koodous](https://koodous.com) - Androidサンプルの広範なリポジトリに対して静的・動的マルウェア分析を行い、公開およびプライベートYaraルールで検証。
1. [Immuniweb](https://www.immuniweb.com/mobile/)「OWASP Mobile Top 10テスト」「モバイルアプリプライバシーチェック」「アプリ許可テスト」を実施。無料プランは登録後、1日4回テスト（報告付き）
1. [ANY.RUN](https://app.any.run/) - Androidアプリ分析をサポートするインタラクティブなクラウドベースのマルウェア分析プラットフォーム。無料プランは限定されている。
1. ~~[BitBaan](https://malab.bitbaan.com/)~~
1. ~~[AVC UnDroid](http://undroid.av-comparatives.info/)~~
1. ~~[AMAaaS](https://amaaas.com) - 無料Androidマルウェア分析サービス。ベアメタルサービスで、Androidアプリの静的および動的分析を提供。[MalwarePot](https://malwarepot.com/index.php/AMAaaS)の製品。
1. ~~[AppCritique](https://appcritique.boozallen.com) - Android APKをアップロードして、包括的な無料セキュリティ評価を受けることができます。
1. ~~[NVISO ApkScan](https://apkscan.nviso.be/) - 2019年10月31日まで運用終了
1. ~~[Mobile Malware Sandbox](http://www.mobilemalware.com.br/analysis/index_en.php)~~
1. ~~[IBM Security AppScan Mobile Analyzer](https://appscan.bluemix.net/mobileAnalyzer) - 無料ではありません
1. ~~[Visual Threat](https://www.visualthreat.com/) - Androidアプリアナライザとしてはもう存在しない
1. ~~[Tracedroid](http://tracedroid.few.vu.nl/)~~
1. ~~[habo](https://habo.qq.com/) - 10回/日
1. ~~[CopperDroid](http://copperdroid.isg.rhul.ac.uk/copperdroid/)~~
1. ~~[SandDroid](http://sanddroid.xjtu.edu.cn/)~~
1. ~~[Stowaway](http://www.android-permissions.org/)~~
1. ~~[Anubis](http://anubis.iseclab.org/)~~
1. ~~[Mobile app insight](http://www.mobile-app-insight.org)~~
1. ~~[Mobile-Sandbox](http://mobile-sandbox.com)~~
1. ~~[Ijiami](http://safe.ijiami.cn/)~~
1. ~~[Comdroid](http://www.comdroid.org/)~~
1. ~~[Android Sandbox](http://www.androidsandbox.net/)~~
1. ~~[Foresafe](http://www.foresafe.com/scan)~~
1. ~~[Dexter](https://dexter.dexlabs.org/)~~
1. ~~[MobiSec Eacus](http://www.mobiseclab.org/eacus.jsp)~~
1. ~~[Fireeye](https://fireeye.ijinshan.com/)- 最大60MB 1日あたり15回~~
1. ~~[approver](https://approver.talos-sec.com/) - 承認者はAndroidおよびiOSアプリ向けの完全自動化されたセキュリティ分析およびリスク評価プラットフォームです。無料ではありません。~~
1. ~~[Fraunhofer App-ray](http://app-ray.co/) - 有効期限切れのドメイン~~
1. ~~[AndroTotal](http://andrototal.org/) - 死んでいる~~

<a id="static-analysis-tools"></a>
### 静的解析ツール

1. [Androwarn](https://github.com/maaaaz/androwarn/) - Androidアプリが開発する潜在的な悪意ある行動を検出し、ユーザーに警告を発行します。
1. [ApkAnalyser](https://github.com/sonyxperiadev/ApkAnalyser)
1. [APKInspector](https://github.com/honeynet/apkinspector/)
1. [Droid Intent Data Flow Analysis for Information Leakage](https://insights.sei.cmu.edu/library/didfail/)
1. [DroidLegacy](https://bitbucket.org/srl/droidlegacy)
1. [FlowDroid](https://blogs.uni-paderborn.de/sse/tools/flowdroid/)
1. [Android Decompiler](https://www.pnfsoftware.com/) – 無料ではありません
1. [PSCout](https://security.csl.toronto.edu/pscout/) - Android OSソースコードから許可規格を静的解析により抽出するツール
1. [Amandroid](http://amandroid.sireum.org/)
1. [SmaliSCA](https://github.com/dorneanu/smalisca) - Smali 静的コード解析
1. [CFGScanDroid](https://github.com/douggard/CFGScanDroid) - コントロールフロー図（CFG）を悪意あるアプリのコントロールフロー図（CFG）と比較してスキャンします
1. [Madrolyzer](https://github.com/maldroid/maldrolyzer) - アクション可能なデータ（C&C、電話番号など）を抽出
1. [ConDroid](https://github.com/JulianSchuette/ConDroid) - アプリのシンボリック実行とコンクリート実行を組み合わせて実行
1. [DroidRA](https://github.com/serval-snt-uni-lu/DroidRA)
1. [RiskInDroid](https://github.com/ClaudiuGeorgiu/RiskInDroid) - アプリの権限に基づくリスクを計算するツール。オンラインデモが提供されている。
1. [SUPER](https://github.com/SUPERAndroidAnalyzer/super) - 安全で統一され、強力かつ拡張可能なRust Android Analyzer
1. [ClassyShark](https://github.com/google/android-classyshark) - スタンドアローンバイナリ検査ツール。任意のAndroid実行ファイルをブラウズし、重要な情報を表示できる。
1. [StaCoAn](https://github.com/vincentcox/StaCoAn) - 開発者、バグバウンティハンター、倫理的ハッカーがモバイルアプリの静的コード分析を行うために使用できるクロスプラットフォームツール。ユーザーインターフェースにおいて使いやすさとグラフィカルガイドが大きな焦点に。
1. [JAADAS](https://github.com/flankerhqd/JAADAS) - Androidアプリにおける脆弱性を検出するための、プロセス内およびプロセス間のプログラム分析ツール。SootとScalaに基づいている
1. [Quark-Engine](https://github.com/quark-engine/quark-engine) - オブフュセーションを無視するAndroidマルウェア評価システム
1. [One Step Decompiler](https://github.com/b-mueller/apkx) - ラズイユーザー向けのAndroid APKデコンパイル
1. [APKLeaks](https://github.com/dwisiswant0/apkleaks) - APKファイルに含まれるURI、エンドポイントおよびシークレットをスキャン
1. [Mobile Audit](https://github.com/mpast/mobileAudit) - Android APKにおける静的分析およびマルウェア検出を行うウェブアプリケーション
1. [Detekt](https://github.com/detekt/detekt) - Kotlinの静的コード分析
1. [APKdevastate](https://github.com/rafigk2v9c/APKdevastate/) - RATによるAPKペイロードの高度な分析ソフトウェア
1. ~~[Smali CFG generator](https://github.com/EugenioDelfa/Smali-CFGs)~~
1. ~~[Several tools from PSU](http://siis.cse.psu.edu/tools.html)~~
1. ~~[SPARTA](https://www.cs.washington.edu/sparta) - 情報フローセキュリティポリシーを満たしているかを検証（証明）する。に基づいている [Checker Framework](https://types.cs.washington.edu/checker-framework/)

<a id="app-vulnerability-scanners"></a>
### アプリ脆弱性スキャナー

1. [QARK](https://github.com/linkedin/qark/) - LinkedInのQARKはアプリ開発者向けにセキュリティ問題をスキャンするツール
1. [AndroBugs](https://github.com/AndroBugs/AndroBugs_Framework)
1. [Nogotofail](https://github.com/google/nogotofail)
1. [Ostorlab](https://ostorlab.co) - Ostorlabの無料版は、Android Playストア、iOS AppStore、Huawei AppGalleryでのアプリをスキャン
1. ~~[Devknox](https://devknox.io/) - 安全なAndroidアプリを構築するためのIDEプラグイン。もうメンテナンスされていない。

<a id="dynamic-analysis-tools"></a>
### 動的解析ツール

1. [Android DBI frameowork](http://www.mulliner.org/blog/blosxom.cgi/security/androiddbiv02.html)
1. [Androl4b](https://github.com/sh4hin/Androl4b)- Androidアプリの評価、逆エンジニアリング、マルウェア分析を行うための仮想マシン
1. [House](https://github.com/nccgroup/house)- ハウス：Fridaを用いてPythonで書かれたWebGUIを備えた実行時モバイルアプリケーション分析ツールキット
1. [Mobile-Security-Framework MobSF](https://github.com/MobSF/Mobile-Security-Framework-MobSF) - モバイルセキュリティフレームワークは、静的・動的分析およびWebAPIテストを実行できる、Android/iOS対応の自動化されたパッチテストフレームワークであり、高度に知能化されたオープンソースツールです
1. [Droidbox](https://github.com/pjlantz/droidbox)
1. [Drozer](https://github.com/mwrlabs/drozer)
1. [Xposed](https://forum.xda-developers.com/xposed/xposed-installer-versions-changelog-t2714053) - スタブベースのコードインジェクションを行うことと同等だが、バイナリに変更を加えることなし
1. [Inspeckage](https://github.com/ac-pm/Inspeckage) - Androidパッケージインスペクターアンダーソン：APIハック、未公開アクティビティの開始などによる動的分析（Xposedモジュール）
1. [Android Hooker](https://github.com/AndroidHooker/hooker) - 動的Javaコードインストルメンテーション（Substrateフレームワークが必要）
1. [ProbeDroid](https://github.com/ZSShen/ProbeDroid) - 動的Javaコードインストルメンテーション
1. [DECAF](https://github.com/sycurelab/DECAF) - QEMUに基づく動的実行可能コード分析フレームワーク（DroidScopeは現在DECAFの拡張として機能）
1. [CuckooDroid](https://github.com/idanr1986/cuckoo-droid) - Cuckooサンドボックス向けのAndroid拡張
1. [Mem](https://github.com/MobileForensicsResearch/mem) - Androidのメモリ分析（rootが必要）
1. [Crowdroid](http://www.ida.liu.se/labs/rtslab/publications/2011/spsm11-burguera.pdf) – 実際のツールが見つかりません
1. [AuditdAndroid](https://github.com/nwhusted/AuditdAndroid) – auditdのAndroid版、現在は積極的な開発が行われていない
1. [Android Security Evaluation Framework](https://code.google.com/p/asef/) - 現在は積極的な開発が行われていない
1. [Aurasium](https://github.com/xurubin/aurasium) – バイナリコードのリライトおよび場所による参照モニタリングを用いたAndroidアプリケーションの実用的なセキュリティポリシーの実行
1. [Android Linux Kernel modules](https://github.com/strazzere/android-lkms)
1. [StaDynA](https://github.com/zyrikby/StaDynA) - 動的コード更新機能（動的クラスロードおよびリフレクション）が存在する状況下でのセキュリティアプリ分析を支援するシステム。このツールは、Androidアプリケーションの静的および動的分析を組み合わせることで、隠されたまたは更新された動作を明らかにし、その情報を静的分析結果に追加します
1. [DroidAnalytics](https://github.com/zhengmin1989/DroidAnalytics) - 不完全
1. [Vezir Project](https://github.com/oguzhantopgul/Vezir-Project) - モバイルアプリケーションパッチテストおよびモバイルマルウェア分析用の仮想マシン
1. [MARA](https://github.com/xtiankisutsa/MARA_Framework) - モバイルアプリケーションの逆エンジニアリングおよび分析フレームワーク
1. [Taintdroid](http://appanalysis.org) - AOSPのコンパイルが必要
1. [ARTist](https://artist.cispa.saarland) - AndroidアプリおよびAndroidのJavaミドルウェア向けの柔軟なオープンソースインストルメンテーションおよびハイブリッド分析フレームキット。これはAndroid実行時（ART）コンパイラに基づいており、デバイス上でコンパイル中にコードを変更します
1. [Android Malware Sandbox](https://github.com/Areizen/Android-Malware-Sandbox)
1. [AndroPyTool](https://github.com/alexMyG/AndroPyTool) - Android APKから静的および動的特徴を抽出するツール。DroidBox、FlowDroid、Strace、AndroGuard、VirusTotal分析などの異なる有名なAndroidアプリ分析ツールを組み合わせています
1. [Runtime Mobile Security (RMS)](https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security) - 実行時におけるAndroidおよびiOSアプリの操作を支援する強力なウェブインターフェース
1. [PAPIMonitor](https://github.com/Dado1513/PAPIMonitor) – PAPIMonitor（Androidアプリ向けPython APIモニタ）は、FridaをベースにしたPythonツールで、アプリ実行中にユーザーが選択したAPIをモニタリングすることができる
1. [Android_application_analyzer](https://github.com/NotSoSecure/android_application_analyzer) - このツールは、Androidアプリのローカルストレージ内の内容を分析するためのもの
1. [Decompiler.com](https://www.decompiler.com/) - オンラインAPKおよびJavaデコンパイラ
1. [friTap](https://github.com/fkie-cad/friTap)- FridaでSSL/TLS接続をインターセプトし、AndroidでTLS鍵の抽出およびTLSペイロードのPCAP形式でのリアルタイム解読を可能にする
1. [HacknDroid](https://github.com/RaffaDNDM/HacknDroid) - Androidデバイスとの相互作用を自動化し、モバイルアプリパッチテスト（MAPT）のタスクを支援するツール
1. [adbsploit](https://github.com/mesquidar/adbsploit) - ADBを介してデバイスを攻撃するためのツール
1. [Brida](https://github.com/federicodotta/Brida) - Burp Suite拡張機能で、BurpとFridaの橋渡しを実現し、アプリ自体のメソッドを操作しながら、アプリとバックエンドサービス／サーバー間の通信を改ざんできる
1. [MPT](https://github.com/ByteSnipers/mobile-pentest-toolkit) - MPT（モバイルパッチテストツールキット）は、Androidパッチテストプロセスにおいて必須のソリューションです。このツールは、セキュリティタスクの自動化を可能にします
1. [Andriller](https://github.com/den4uk/andriller) - スマートフォン向けのフォレインツールを収録したソフトウェアユーティリティ。Androidデバイスから読み取り専用かつフォレインに適合した非破壊的な取得を行う
1. [Mira](https://github.com/vwww-droid/Mira) - 第三者のAndroidおよびiOSアプリ向けの実行時保護分析プラットフォーム。AIがホストアプリ側のシェル、Java、ネイティブ、Frida機能を活用し、環境リスクの検出および強化検証を行う
1. [FlutterTap](https://github.com/script-or-script/FlutterTap) - zigiskモジュールで、内のBoringSSL証明書検証を回避し、選択されたFlutterアプリのトラフィックをプロキシにリダイレクト。リブート後も継続し、Fridaセッション、ケーブル、リスニングポートのいずれも不要 `libflutter.so`
1. ~~[AppUse](https://appsec-labs.com/AppUse/) – パッチテスト用のカスタムビルド
1. ~~[Appie](https://manifestsecurity.com/appie/) - Appieは、Androidパッチテスト環境として事前に設定されたソフトウェアパッケージです。完全にポータブルであり、USBメモリやスマートフォンに持ち運べます。これは、Androidアプリセキュリティ評価に必要なすべてのツールを一括で提供する解決策であり、既存の仮想マシンに代替する素晴らしい選択肢です
1. ~~[Android Tamer](https://androidtamer.com/) - Androidセキュリティプロフェッショナル向けの仮想／リアルプラットフォーム
1. ~~[Android Malware Analysis Toolkit](http://www.mobilemalware.com.br/amat/download.html) - （Linuxディストリビューション）以前は、これは[online analyzer](http://dunkelheit.com.br/amat/analysis/index_en.php)であった
1. ~~[Android Reverse Engineering](https://redmine.honeynet.org/projects/are/wiki) – ARE（Android逆エンジニアリング）は、現在の開発が行われていない
1. ~~[ViaLab Community Edition](https://www.nowsecure.com/blog/2014/09/09/introducing-vialab-community-edition/)~~
1. ~~[Mercury](https://labs.mwrinfosecurity.com/tools/2012/03/16/mercury/)~~
1. ~~[Cobradroid](https://thecobraden.com/projects/cobradroid/) – マルウェア分析用のカスタムイメージ

<a id="reverse-engineering"></a>
### リバースエンジニアリング

1. [Smali/Baksmali](https://github.com/JesusFreke/smali) – apkのデコンパイル
1. [emacs syntax coloring for smali files](https://github.com/strazzere/Emacs-Smali)
1. [vim syntax coloring for smali files](http://codetastrophe.com/smali.vim)
1. [AndBug](https://github.com/swdunlop/AndBug)
1. [Androguard](https://github.com/androguard/androguard) – 強力で、他のツールと良好に統合されている
1. [Apktool](https://github.com/iBotPeaches/Apktool) – コンパイル／デコンパイルに非常に役立つ（smaliを使用）
1. [Android Framework for Exploitation](https://github.com/appknox/AFE)
1. [Bypass signature and permission checks for IPCs](https://github.com/iSECPartners/Android-KillPermAndSigChecks)
1. [Android OpenDebug](https://github.com/iSECPartners/Android-OpenDebug) – デバイス上のアプリケーションをデバッグ可能にする（Cydia Substrateを使用）
1. [Dex2Jar](https://github.com/pxb1988/dex2jar) - dexからjarへの変換ツール
1. [Enjarify](https://github.com/google/enjarify) - Googleから提供されるdexからjarへの変換ツール
1. [Dedexer](https://sourceforge.net/projects/dedexer/)
1. [Fino](https://github.com/sysdream/fino)
1. [Frida](https://www.frida.re/) - アプリケーションを探索するためのJavaScriptのインジェクションと、そのための [GUI tool](https://github.com/antojoseph/diff-gui)
1. [Indroid](https://bitbucket.org/aseemjakhar/indroid) – スレッドインジェクションキット
1. [Introspy](https://github.com/iSECPartners/Introspy-Android)
1. [Jad]( https://varaneckas.com/jad/) - Javaのデコンパイラ
1. [JD-GUI](https://github.com/java-decompiler/jd-gui) - Javaのデコンパイラ
1. [CFR](http://www.benf.org/other/cfr/) - Javaのデコンパイラ
1. [Krakatau](https://github.com/Storyyeller/Krakatau) - Javaのデコンパイラ
1. [FernFlower](https://github.com/fesh0r/fernflower) - Javaのデコンパイラ
1. [Redexer](https://github.com/plum-umd/redexer) – apkの操作
1. [Simplify Android deobfuscator](https://github.com/CalebFenton/simplify)
1. [Bytecode viewer](https://github.com/Konloch/bytecode-viewer)
1. [Radare2](https://github.com/radare/radare2)
1. [Jadx](https://github.com/skylot/jadx)
1. [Dwarf](https://github.com/iGio90/Dwarf) - リバースエンジニアリング用のGUI
1. [Andromeda](https://github.com/secrary/Andromeda) - 別の基本的なコマンドラインリバースエンジニアリングツール
1. [apk-mitm](https://github.com/shroudedcode/apk-mitm) - Android APKファイルをHTTPS検証に備えるためのCLIアプリケーション
1. [Noia](https://github.com/0x742/noia) - シンプルなAndroidアプリケーションのサンドボックスファイルブラウザツール
1. [Obfuscapk](https://github.com/ClaudiuGeorgiu/Obfuscapk) — Obfuscapkは、ソースコードを必要とせずにAndroidアプリを暗号化するためのモジュラリーツールです
1. [ARMANDroid](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid) - ARMAND（マルチパターンによる再パッケージ防止、ネイティブ検出に基づく改ざん防止）は、ソースコードを必要とせずにapkファイルに論理爆弾と改ざん検出ノードを直接埋め込む、新しい改ざん防止保護スキームです
1. [MVT (Mobile Verification Toolkit)](https://github.com/mvt-project/mvt) - AndroidおよびiOSデバイスの潜在的な侵害を特定するために役立つフォレnsicトレースを収集するプロセスを簡略化・自動化するためのユーティリティのコレクション
1. [Dexmod](https://github.com/google/dexmod) - Androidアプリケーションの静的解析を支援するために、DEX（Dalvik Executable）ファイル内のDalvikバイナリコードをパッチするためのツール
1. [odex-patcher](https://github.com/giacomoferretti/odex-patcher) - OATファイルをパッチすることで、任意のコードを実行
1. [PhoneSpolit-Pro](https://github.com/AzeemIdrisi/PhoneSploit-Pro) - ADBおよびMetasploit Frameworkを用いてAndroidデバイスをリモートで攻撃し、Meterpreterセッションを取得するための一括ハッキングツール
1. [APKLab](https://github.com/APKLab/APKLab) - VS Code用のAPK分析プラグイン
1. ~~[IntentSniffer](https://www.nccgroup.com/us/our-research/intent-sniffer/)~~
1. ~~[Procyon](https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler) - Javaデコンパイラ~~
1. ~~[Smali viewer](http://blog.avlyun.com/wp-content/uploads/2014/04/SmaliViewer.zip)~~
1. ~~[ZjDroid](https://github.com/BaiduSecurityLabs/ZjDroid)~~, ~~[fork/mirror](https://github.com/yangbean9/ZjDroid)~~
1. ~~[Dare](http://siis.cse.psu.edu/dare/index.html) – .dexファイルを.classファイルに変換するツール~~

<a id="fuzz-testing"></a>
### ファジング

1. [Radamsa Fuzzer](https://github.com/anestisb/radamsa-android)
1. [Honggfuzz](https://github.com/google/honggfuzz)
1. [An Android port of the Melkor ELF fuzzer](https://github.com/anestisb/melkor-android)
1. [Media Fuzzing Framework for Android](https://github.com/fuzzing/MFFA)
1. [AndroFuzz](https://github.com/jonmetz/AndroFuzz)
1. [QuarksLab's Android Fuzzing](https://github.com/quarkslab/android-fuzzing)
1. ~~[IntentFuzzer](https://www.nccgroup.trust/us/about-us/resources/intent-fuzzer/)~~

<a id="app-repackaging-detectors"></a>
### アプリ再パッケージ検出

1. [FSquaDRA](https://github.com/zyrikby/FSquaDRA) - アプリリソースのハッシュ比較に基づいて、リパッケージされたAndroidアプリを検出するツール

<a id="market-crawlers"></a>
### マーケットクローラー

1. [Google Play crawler (Java)](https://github.com/Akdeniz/google-play-crawler)
1. [Google Play crawler (Python)](https://github.com/egirault/googleplay-api)
1. [Google Play crawler (Node)](https://github.com/dweinstein/node-google-play) - 公式Google Playストアからアプリの詳細を取得し、アプリをダウンロード
1. [Aptoide downloader (Node)](https://github.com/dweinstein/node-aptoide) - Aptoideという第三パーティAndroidストアからアプリをダウンロード
1. [Appland downloader (Node)](https://github.com/dweinstein/node-appland) - Applandという第三パーティAndroidストアからアプリをダウンロード
1. [PlaystoreDownloader](https://github.com/ClaudiuGeorgiu/PlaystoreDownloader) - PlaystoreDownloaderは、Google PlayストアからAndroidアプリを直接ダウンロードするツールであり、初期（一度限り）の設定後、アプリのパッケージ名を指定することでアプリをダウンロード可能
1. [APK Downloader](https://apkcombo.com/apk-downloader/) 特定のAndroidデバイス設定に基づいてGoogle PlayストアからAPKをダウンロードするオンラインサービス
1. ~~[Apkpure](https://apkpure.com/) - オンラインAPKダウンローダー。また、自社アプリを提供しています。~~

<a id="misc-tools"></a>
### その他のツール

1. [smalihook](http://androidcracking.blogspot.com/2011/03/original-smalihook-java-source.html)
1. [AXMLPrinter2](http://code.google.com/p/android4me/downloads/detail?name=AXMLPrinter2.jar) - バイナリXMLファイルを人間が読めるXMLファイルに変換するツール
1. [adb autocomplete](https://github.com/mbrubeck/android-completion)
1. [mitmproxy](https://github.com/mitmproxy/mitmproxy)
1. [dockerfile/androguard](https://github.com/dweinstein/dockerfile-androguard)
1. [Android Vulnerability Test Suite](https://github.com/AndroidVTS/android-vts) - android-vtsはデバイスに存在する脆弱性をスキャンする
1. [AppMon](https://github.com/dpnishant/appmon)- AppMonは、ネイティブなmacOS、iOS、AndroidアプリのシステムAPI呼び出しを監視および操作するための自動化フレームワークです。これはFridaに基づいています。
1. [Internal Blue](https://github.com/seemoo-lab/internalblue) - ブロードコムのBluetoothコントローラーの逆エンジニアリングに基づくBluetooth実験フレームワーク
1. [Android Mobile Device Hardening](https://github.com/SecTheTech/AMDH) - AMDHは、デバイスの設定をスキャンし、強化し、権限に基づいて有害なインストールアプリをリストアップします。
1. [NullKia](https://github.com/bad-antics/nullkia) - 18社のメーカーをサポートする包括的なモバイルセキュリティフレームワーク。ベースバンドのexploit、セルラーセキュリティ、TEE/TrustZoneの研究、およびブートROMの抽出ツールを含みます。
1. [Firmware Extractor](https://github.com/AndroidDumps/Firmware_extractor) - 指定されたアーカイブをイメージに展開
1. [ARMv7 payload that provides arbitrary code execution on MediaTek bootloaders](https://github.com/R0rt1z2/kaeru)
1. [DroidGround](https://github.com/SECFORCE/droidground) - Android CTFチャレンジに使える柔軟なプラットフォーム
1. [sundaysec/Android-Exploits](https://github.com/sundaysec/Android-Exploits) - Androidのエクスプロイトとハックを収集したコレクション
1. [Spectre](https://github.com/thomasbuilds/Spectre) - リーダーフレームワーク。リコネクトおよび攻撃機能を備え、デバイス上でセルラー、Wi-Fi、Bluetooth LE、GNSSを監視。BLE GATTインスペクタ、iBeaconブロードキャスト、ローカルネットワーク発見機能を備えています。
1. ~~[Android Device Security Database](https://www.android-device-security.org/client/datatable) - Androidデバイスのセキュリティ機能データベース~~
1. ~~[Opcodes table for quick reference](http://ww38.xchg.info/corkami/opcodes_tables.pdf)~~
1. ~~[APK-Downloader](http://codekiem.com/2012/02/24/apk-downloader/)~~ - 今となっては死んでいるようです
1. ~~[Dalvik opcodes](http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html)~~

<a id="vulnerable-applications-for-practice"></a>
### 演習用の脆弱なアプリ

1. [Damn Insecure Vulnerable Application (DIVA)](https://github.com/payatu/diva-android)
1. [Vuldroid](https://github.com/jaiswalakshansh/Vuldroid)
1. [ExploitMe Android Labs](http://securitycompass.github.io/AndroidLabs/setup.html)
1. [GoatDroid](https://github.com/jackMannino/OWASP-GoatDroid-Project)
1. [Android InsecureBank](https://github.com/dineshshetty/Android-InsecureBankv2)
1. [Insecureshop](https://github.com/optiv/insecureshop)
1. [Oversecured Vulnerable Android App (OVAA)](https://github.com/oversecured/ovaa)
1. [Injured Android - CTF](https://github.com/B3nac/InjuredAndroid)

<a id="academic"></a>
## 学術・研究・出版物・書籍

<a id="research-papers"></a>
### 研究論文

1. [Exploit Database](https://www.exploit-db.com/papers/)
1. [Android security-related presentations](https://github.com/jacobsoo/AndroidSlides)
1. [A good collection of static analysis papers](https://tthtlc.wordpress.com/2011/09/01/static-analysis-of-android-applications/)

<a id="books"></a>
### 書籍

1. [SEI CERT Android Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/android/Android+Secure+Coding+Standard)

<a id="others"></a>
### その他

1. [OWASP Mobile Security Testing Guide Manual](https://github.com/OWASP/owasp-mstg)
1. [doridori/Android-Security-Reference](https://github.com/doridori/Android-Security-Reference)
1. [android app security checklist](https://github.com/b-mueller/android_app_security_checklist)
1. [Mobile App Pentest Cheat Sheet](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)
1. [Android Reverse Engineering 101 by Daniele Altomare (Web Archive link)](https://web.archive.org/web/20180721134044/http://www.fasteque.com:80/android-reverse-engineering-101-part-1/)
1. ~~[Mobile Security Reading Room](https://mobile-security.zeef.com) - モバイルペネトレーションテスト、モバイルマルウェア、モバイルフォレインス、およびモバイルセキュリングに関連するあらゆるトピックについて、よく分類された技術資料を収録したリーディングルーム~~

<a id="exploits"></a>
## エクスプロイト・脆弱性・バグ

<a id="list"></a>
### 一覧

1. [Android Security Bulletins](https://source.android.com/security/bulletin/)
1. [Android's reported security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-19997/Google-Android.html)
1. [OWASP Mobile Top 10 2016](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)
1. [Exploit Database](https://www.exploit-db.com/search/?action=search&q=android) - 検索をクリック
1. [Vulnerability Google Doc](https://docs.google.com/spreadsheet/pub?key=0Am5hHW4ATym7dGhFU1A4X2lqbUJtRm1QSWNRc3E0UlE&single=true&gid=0&output=html)
1. [Google Android Security Team’s Classifications for Potentially Harmful Applications (Malware)](https://source.android.com/security/reports/Google_Android_Security_PHA_classifications.pdf)
1. ~~[Android Devices Security Patch Status](https://kb.androidtamer.com/Device_Security_Patch_tracker/)~~

<a id="malware"></a>
### マルウェア

1. [androguard - Database Android Malware wiki](https://code.google.com/p/androguard/wiki/DatabaseAndroidMalwares)
1. [Android Malware Github repo](https://github.com/ashishb/android-malware)
1. [Android Malware Genome Project](http://www.malgenomeproject.org/) - 1260のマルウェアサンプルを49の異なるマルウェアファミリーに分類しており、研究目的で無料です。
1. [Contagio Mobile Malware Mini Dump](http://contagiominidump.blogspot.com)
1. [Drebin](https://www.sec.tu-bs.de/~danarp/drebin/)
1. [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - 特定のAPKパッケージがインフォスティーラーマルウェア攻撃で compromise されたかどうかを示す、無料のサイバー犯罪インテリジェンスツールセット。
1. [Kharon Malware Dataset](http://kharon.gforge.inria.fr/dataset/) - 7つのマルウェアが逆エンジニアリングされ、記録されています。
1. [Android Adware and General Malware Dataset](https://www.unb.ca/cic/datasets/android-adware.html)
1. [AndroZoo](https://androzoo.uni.lu/) - AndroZooは、複数のソースから集めたAndroidアプリケーションのコレクションであり、公式Google Playアプリ市場を含みます。
1. ~~[Android PRAGuard Dataset](http://pralab.diee.unica.it/en/AndroidPRAGuardDataset) - データセットには、MalGenomeおよびContagio Minidumpデータセットを7つの異なるオブフスケーション技術で暗号化した10479サンプルが含まれています。~~
1. ~~[Admire](http://admire.necst.it/)~~

<a id="bounty-programs"></a>
### バグ報奨金プログラム

1. [Android Security Reward Program](https://www.google.com/about/appsecurity/android-rewards/)

<a id="how-to-report-security-issues"></a>
### セキュリティ問題の報告方法

1. [Android - reporting security issues](https://source.android.com/security/overview/updates-resources.html#report-issues)
1. [Android Reports and Resources](https://github.com/B3nac/Android-Reports-and-Resources) - AndroidにおけるHackeroneで公開された報告書およびその他のリソースの一覧

<a id="contributing"></a>
## 貢献

Your contributions are always welcome!

<a id="-citation"></a>
## 📖 引用

```bibtex
@misc{
  author = {Ashish Bhatia - ashishb.net},
  title = {The most comprehensive collection of Android Security related resources},
  year = {2025},
  publisher = {GitHub},
  journal = {GitHub repository},
  howpublished = {\url{https://github.com/ashishb/android-security-awesome}}
}
```

This repository has been cited in [10+ papers](https://scholar.google.com/scholar?q=github.com%2Fashishb%2Fandroid-security-awesome)
