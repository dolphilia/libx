---
title: "Awesome J2ME"
description: "J2MEを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-hstsethi-awesome-j2me-readme-md"
---

# Awesome J2ME

J2MEを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [コミュニティ](#communities)
- [開発](#development)
   - [IDE](#ides)
   - [SDK](#sdks)
- [エミュレーター](#emulators)
- [金融](#finance)
- [ハードウェア](#hardware)
- [ネイティブソフトウェア](#native-software)
   - [アプリ](#apps)
   - [ビデオゲーム](#video-games)
- [関連プロジェクト](#related-projects)
- [リバースエンジニアリング](#reverse-engineering)
   - [デコンパイラー](#decompilers)
- [チュートリアル](#tutorials)
    - [学術記事](#academic-articles)

## コミュニティ

- [HackClub Retrospect J2ME](https://retrospect.hackclub.com/j2me) - Hackclub による J2ME 開発コンテスト。リソース欄に Awesome J2ME を掲載。
- [Kahvibreak Discord](https://discord.gg/8TgbHAG) - J2ME ゲームの保存に焦点を当てた Discord コミュニティ。
- [Ketai Wiki](https://keitaiwiki.com/wiki/KeitaiWiki) - 日本で発売された Android/iPhone 以前のフィーチャーフォン（keitai）のゲームをカタログ化する Wiki。
- [r/J2MEGaming](https://reddit.com/r/j2megaming) - J2ME、Symbian、関連プラットフォームの Reddit コミュニティ。

## 開発

- [Cibyl](https://github.com/SimonKagstrom/cibyl) - C、Objective-C、C++、おそらく Fortran で書かれたプログラムを J2ME 携帯電話用にコンパイル・実行する環境。
- [NN JSON](https://github.com/shinovon/NNJSON) - CLDC 1.1 用 JSON パーサー。
- [NN JSON CLDC 1.0](https://github.com/gtrxAC/discord-j2me/tree/main/src/cc/nnproject/json) - CLDC 1.0 向けに修正した NN JSON。
- [J2ME Game Script Engine](https://j2megamescript.sourceforge.net/) - BASIC 風スクリプト言語を備え、柔軟な J2ME ゲームを構築する軽量スクリプトインタープリター。J2SE/J2ME/Win C++ で動作。
- [J2ME Gradle template](https://gitea.bedohswe.eu.org/pixtaded/j2me-hello-gradle) - Microemulator を使用する J2ME 開発用 Gradle テンプレート。
- [Lightweight User Interface Toolkit(LWUIT)](https://en.wikipedia.org/wiki/Lightweight_User_Interface_Toolkit) - J2ME 向けの Swing に着想を得たウィジェットツールキット。

### IDE

- [Eclipse](https://archive.eclipse.org/eclipse/downloads) - Eclipse IDE の全バージョンのアーカイブ。
- [NetBeans 6.1](https://archive.org/download/netbeans-olds/6.1) - MIDP 開発環境のセットアップに必要な Mobility-pack、通常の NetBeans、Java-ME SDK。

### SDK

- [Extra Transit Mobile Interaction Suite](http://web.archive.org/web/20070210202710/http://www.extransit.com) - インターネットベースアプリの開発に特化した J2ME 用 IDE・SDK。
- [Hecl](https://www.hecl.org) - J2ME ベース端末で実行可能な Java ベースのモバイルスクリプト言語。
- [J2ME Polish](https://github.com/Enough-Software/j2mepolish) - Blackberry、Symbian を含む複数プラットフォーム向けビルドをサポートする、Ant ベースのオープンソース J2ME ビルドツール。
- [MBooster](https://web.archive.org/web/20070314004015/http://innaworks.com/mBooster.html) - .jar ファイル向け最適化スイート。画像、音声、zip の圧縮と API 呼び出しの最適化を行います。
- [Micro Code](https://web.archive.org/web/20061225061546/http://j2me-device-db.sourceforge.net/pmwiki/index.php?n=Main.HomePage) - 100 以上の端末をサポートする J2ME 向けクロスデバイス開発フレームワーク。
- [Sony Ericsson](https://archive.org/details/semc_java_me_cldc_sdk.2-5-0-6) - 各種 Sony Ericsson 端末をサポート。Mascot capsule ソフトウェアも実行可能。
- [Soap ME](https://dl.acm.org/doi/abs/10.1145/1462802.1462805) - 動的開発を支援する SOAP 準拠 Web サービスコンテナー。
- [Sun Java Me SDK](https://www.oracle.com/java/technologies/javame-sdk/java-me-sdk-v30.html) [mirror](https://archive.org/details/sun_java_me_sdk-3_0-win) - CLDC/MIDP 開発を統合する WTK の後継。
- [Sun WTK](https://www.oracle.com/java/technologies/java-archive-downloads-javame-downloads.html#sun_java_wireless_toolkit-2.5.2_01) - Sun による公式 J2ME SDK。

## エミュレーター

- [FreeJ2ME](https://github.com/hex007/freej2me) - LibRetro、AWT、SDL2 フロントエンドを備えた J2ME エミュレーター。
- [FreeJ2ME Plus](https://github.com/TASEmulators/freej2me-plus) - FreeJ2ME の活発なフォーク。
- [J2ME Loader](https://github.com/nikita36078/J2ME-Loader) - Android 用 J2ME エミュレーター。
- [JL Mod](https://github.com/woesss/JL-Mod) - Mascot capsule v3 をサポートする J2ME loader のフォーク。
- [JS2 J2ME](https://github.com/szatkus/js2me) - Firefox OS 用 J2ME エミュレーター。
- [KEmulator nnmod](https://github.com/shinovon/KEmulator) - KEmulator 1.0.3 に基づく Java 製オープンソース J2ME エミュレーター。
- [PSPKvm](https://sourceforge.net/projects/pspkvm/) - PSP 用 J2ME エミュレーター。
- [SquirrelJME](https://github.com/squirreljme/squirreljme) - 組込み・IoT 機器用 Java ME 8 仮想マシン。

## 金融

- [Glu Mobile 10-K archive](https://www.sec.gov/edgar/search/#/dateRange=all&category=custom&entityName=0001366246&forms=10-K) - IPO（2007年）から買収（2021年）までの Glu Mobile の 10-K アーカイブ。流通手段・地域別収益、経営陣コメント、ゲームポートフォリオなどを収録。
- [UPI 123PAY](https://www.npci.org.in/what-we-do/upi-123pay/product-overview) - NPCI によるフィーチャーフォン向け公式 Unified Payment Interface（UPI）決済ソリューション。インターネット不要。インドのみ対応。

## ハードウェア

- [Mobile Phone Museum](https://mobilephonemuseum.com/about) - 携帯電話の登録慈善団体・博物館。250 ブランドを超える 2,800 以上のモデルを所蔵。

## ネイティブソフトウェア

### アプリ

- [Discord J2ME](https://github.com/gtrxAC/discord-j2me) - HTTP・ゲートウェイ接続にプロキシサーバーを使う非公式 J2ME 向け Discord クライアント。
- [Hotpants](https://github.com/baumschubser/hotpants/) - HOTP/TOTP クライアント。
- [J2ME Emu Software](https://archive.org/details/j2me-emuSoftware) - J2ME 上で動作する各種エミュレーターの実行ファイルとソースコード。
- [Jtube](https://github.com/shinovon/JTube) - Invidious API ベースの YouTube クライアント。
- [MeBoy](http://arktos.se/meboy) - 音声、カラー、セーブステート付き GBC エミュレーションをサポート。
- [Telegram Micro](https://github.com/faissaloo/telegram-micro) - Telegram クライアント。
- [VK4ME](https://github.com/VK4ME/client)  - CLDC 1.1 と MIDP 2.0 をサポートする端末向けの、ロシア SNS VK 用非公式クライアント。
- [W4ME Station](https://github.com/mulfyx/w4me-station) - CLDC 1.1 / MIDP 2.0 携帯向け WASM-4 ランタイム。バンドル済みカートリッジと外部 `.wasm` ファイル読み込みをサポート。
- [Opera FTP Archive](https://ftp.opera.com/pub/opera) - 対応するすべてのプラットフォーム向け Opera ブラウザー各版の公式 FTP アーカイブ。
- [Pocket Gopher](https://github.com/felixp7/pocket-gopher) - J2ME 向けオープンソース Gopher／Gopher+ クライアント。

### ビデオゲーム

- [Gravity Defied CPP](https://github.com/rgimad/gravity_defied_cpp) - 同名 J2ME ゲームの C++、SDL2 移植版。
- [Kahvibreak](https://bluemaxima.org/kahvibreak) - J2ME ゲーム集。
- [Moby Games](https://www.mobygames.com/platform/j2me) - 公式ストアへのリンクを持つ J2ME ゲームのデータベース。
- [The "New" J2ME software archive](https://archive.org/details/96x65pixels_j2me) - 分類済みの 74GB 以上の J2ME ゲームコレクション。
- [Nowhere Dialogues](https://gist.github.com/hstsethi/d4ef0c9f0710e5b713d1beb2ff93a1ce) - 2007年の J2ME ゲーム Nowhere の台詞。キャラクター名をリバースエンジニアリング。
- [J2ME Games at MyAbandonware](https://www.myabandonware.com/browse/platform/j2me) - 直接ダウンロード可能な放棄された J2ME ゲームのキュレーション済みカタログ。
- [J2ME Games Speedruns](https://www.speedrun.com/games?platform=nzel5r6q) - J2ME ゲームに関する全スピードラン、ガイド、議論、画面録画の一覧。

## 関連プロジェクト

- [Awesome Symbian](https://github.com/hstsethi/awesome-symbian) - 2000年代初頭に人気だった ARM 向けで、現在は廃止されたモバイル OS Symbian に関する Awesome List。J2ME アプリをサポート。
- [Cell Phone Game Preservation Wiki](https://cellphonegamespreservation.miraheze.org/wiki/Main_Page) - エミュレーションとゲームダンプを含む、携帯電話保存に特化した Wiki。
- [J2ME Fandom](https://j2me.fandom.com/wiki) - J2ME に関するあらゆる事項の Wiki。
- [J2ME Preservation](https://github.com/j2me-preservation/j2me-preservation) - 各種 J2ME ソフトウェアのアーカイブ。
- [Legacy Portable Computing Wiki](https://lpcwiki.miraheze.org) - 旧式モバイル機器の知識とコンテンツ保存に特化した、頻繁に更新される Wiki。

## リバースエンジニアリング

- [PyLng](https://github.com/CakesTwix/pylng) - Python 製 HandyGames .lng ファイルパーサー。

### デコンパイラー

- [Fernflower](https://github.com/fesh0r/fernflower) - JetBrains の解析的 Java デコンパイラー。
- [Jd Decompiler](https://java-decompiler.github.io) - Java 5 以降をサポートする Java デコンパイラー。
- [Javadecompilers.com](https://www.javadecompilers.com) - 各種デコンパイラーをサポートするオンライン Java デコンパイラー。
- [Recaf](https://github.com/Col-E/Recaf) - 複数のデコンパイラーをサポートするバイトコードエディター。
- [Vineflower](https://github.com/vineflower/vineflower) - 出力品質を改善した Fernflower デコンパイラーのフォーク。
- [Sporeflower](https://github.com/hourianto/sporeflower) - J2ME 用に特別調整された Vineflower デコンパイラーのフォーク。

## チュートリアル

- [J2ME In Nutshell](https://www.oreilly.com/library/view/j2me-in-a/059600253X) - 「CLDC、CDC、KVM などを扱う、マイクロエディションプログラミングの『アルファベットスープ』への堅実で率直なリファレンス」。
- [Revive Nokia N95](https://github.com/domib97/revive.nokia.n95) - レガシーな Nokia N95 を復活させ、そのために開発するクイックガイド。
- [J2ME Docs](https://nikita36078.github.io/J2ME_Docs) - J2ME と一部ベンダー固有 API のドキュメント。
- [Java ME 3.4 Developer's Guide for NetBeans on Windows](https://docs.oracle.com/javame/dev-tools/jme-sdk-3.4/nb/html/toc.htm) - SDK 3.4 の公式チュートリアル、Windows 上の NetBeans 向け版。
- [J2ME Performance Tips](https://web.archive.org/web/20050223040231/https://www.javaperformancetuning.com/tips/j2me.shtml#REF25) - J2ME 開発に固有のパフォーマンス最適化のヒント。
- [Basic Java Examples](https://web.archive.org/web/20121102161050/http://www.java-tips.org/java-me-tips/midp/page3.html) - Java ME と MIDP 開発の基本例。
- [General Java Optimization Tips](https://web.archive.org/web/20050215222448/http://www-2.cs.cmu.edu/~jch/java/) - 基礎的な Java パフォーマンス最適化手法。
- [Basic Java Performance Good Practices](https://web.archive.org/web/19970607121931/http://www.javaworld.com/javaworld/jw-04-1997/jw-04-optimize.html) - Java パフォーマンスのベストプラクティスに関する初期のリファレンスガイド。
- [The JavaTM Virtual Machine Specification Second Edition](https://web.archive.org/web/19990508124421/http://java.sun.com/docs/books/vmspec/2nd-edition/html/VMSpecTOC.doc.html) - 仮想マシン内部を扱う公式 JVM 仕様ドキュメント。
- [Sony Ericsson Development Tips and Tricks](https://web.archive.org/web/20061006072043/http://developer.sonyericsson.com/site/global/techsupport/tipstrickscode/java/p_java.jsp) - Sony Ericsson による端末固有の開発ガイドラインと最適化手法。
- [Nokia/Microsoft Mobile Developer Slideshare](https://www.slideshare.net/nokia-developer) - Asha と Series 40 を含む Nokia プラットフォーム向けアプリ開発のプレゼンテーション。

### 学術記事

- [A Testing Method for Java ME Software](https://doi.org/10.1109/EmbeddedCom-ScalCom.2009.21) - J2ME の各種単体テスト手法をレビューし、NetBeans 向けの独自手法を紹介。
- [Automated GUI Testing for J2ME Software Based on FSM](https://ieeexplore.ieee.org/abstract/document/5341641) - FSM に基づき LCDUI J2ME アプリのテストを自動化する技法を紹介。
- [Developing Jini applications using J2ME technology](https://dl.acm.org/doi/abs/10.5555/507165) - Jini と J2ME を使うネットワークアプリケーション開発の書籍。
- [Distributed Gaming using J2ME and XML](https://www.cs.sjsu.edu/faculty/pollett/masters/Semesters/Fall03/Rekha/CS297Report.pdf) - Oracle XML データベースを利用したゲーム向けクロスプラットフォーム作成の報告書。
- [Experiences of Implementing BitTorrent on Java ME Platform](https://ieeexplore.ieee.org/abstract/document/4446557) - Nokia S40 向け BitTorrent クライアント実装の詳細報告。方法論と結果を収録。
- [Networked J2ME Applications](https://www.mooreds.com/midp/midp.htm) - ネットワーク化された MIDP 1.0 アプリ構築の各側面を探る論文。
- [JSR 184: M3G Specification](https://jcp.org/en/jsr/detail?id=184) - J2ME 端末向け 3D グラフィック機能のファイル形式・APIである Mobile Graphics 3D Graphics API（M3G）の仕様。即時と保持の2モードがあり、前者は OpenGL ES と互換です。
