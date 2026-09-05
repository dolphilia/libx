---
title: "Awesome Password Cracking"
description: "Password Crackingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-n0kovo-awesome-password-cracking-readme-md"
---

# Awesome Password Cracking

Password Crackingを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [Awesome Password Cracking  ](#awesome-password-cracking--)
  - [目次](#contents)
  - [書籍](#books)
  - [クラウド](#cloud)
  - [変換](#conversion)
  - [Hashcat](#hashcat)
    - [自動化](#automation)
    - [分散解析](#distributed-cracking)
    - [ルール](#rules)
    - [ルールツール](#rule-tools)
    - [ウェブインターフェース](#web-interfaces)
  - [John the Ripper](#john-the-ripper)
  - [その他](#misc)
    - [著名な人物](#notable-people)
  - [ウェブサイト](#websites)
    - [コミュニティ](#communities)
    - [検索サービス](#lookup-services)
  - [ワードリストツール](#wordlist-tools)
    - [分析](#analysis)
    - [生成・操作](#generationmanipulation)
  - [ワードリスト](#wordlists)
    - [言語別](#laguage-specific)
    - [その他](#other)
  - [特定ファイル形式](#specific-file-formats)
    - [PDF](#pdf)
    - [JKS](#jks)
    - [ZIP](#zip)
  - [機械学習／AI](#machine-learning--ai)
  - [研究](#research)
    - [記事とブログ投稿](#articles-and-blog-posts)
    - [論文](#papers)
    - [講演](#talks)

## 書籍

- [Hash Crack: Password Cracking Manual (v3)](https://www.amazon.com/-/en/Joshua-Picolet/dp/1793458618) - パスワード監査・回復手法を扱う書籍です。

## クラウド

- [Cloud_crack](https://github.com/lordsaibat/Cloud_crack) - TerraformとAWSを使ってパスワードをクラックする
- [Cloudcat](https://github.com/stormfleet/cloudcat) - ハッシュクラッキング用のクラウドインフラの自動作成を実行するスクリプト
- [Cloudstomp](https://github.com/Fmstrat/cloudstomp) - 高CPU/GPUアプリケーション向けに、最も安い価格でEC2上でインスタンスを自動展開するプラグインの利用
- [Cloudtopolis](https://github.com/JoelGMSec/Cloudtopolis) - Google Cloud Shellプラットフォーム上でHashtopolisのインストールとプロビジョニングを、迅速かつ完全に無人で実行するツール（また、無料！）
- [NPK](https://github.com/c6fc/npk) - NPKは、AWSにおけるCognito、DynamoDB、S3をすべて無サーバー構成で構成した、分散型ハッシュクラッキングプラットフォーム
- [Penglab](https://github.com/mxrch/penglab) - Google Colabをハッシュクラッキングに悪用
- [Rook](https://github.com/JumpsecLabs/Rook) - GPUベースのパスワードクラッキングに使用するAWS p3インスタンスの自動作成

## 変換

- [7z2hashcat](https://github.com/philsmd/7z2hashcat) - パスワード保護された.7zアーカイブ（および.sfxファイル）から情報を抽出し、それらの「ハッシュ」をhashcatでクラッキングできるようにする
- [MacinHash](https://github.com/jmagers/MacinHash) - macOSのplistパスワードファイルをパスワードクラッカー用のハッシュファイルに変換
- [NetNTLM-Hashcat](https://github.com/ins1gn1a/NetNTLM-Hashcat) - John The Ripper/Cain形式のハッシュ（単一または大量）をHashCatに適合する形式に変換
- [Rubeus-to-Hashcat](https://github.com/PwnDexter/Rubeus-to-Hashcat) - Rubeusのkerberoasting出力のフォーマットをHashCatが読み取れる形式に変換
- [WINHELLO2hashcat](https://github.com/Banaanhangwagen/WINHELLO2hashcat) - このツールにより、WINDOWS HELLO PINから「ハッシュ」を抽出できる。このハッシュはHashCatでクラッキング可能。
- [bitwarden2hashcat](https://github.com/0x6470/bitwarden2hashcat) - BitwardenのデータをHashCatに適したハッシュ形式に変換するツール
- [hc\_to\_7z](https://github.com/philsmd/hc_to_7z) - 7-ZipのHashCatハッシュを元に7zアーカイブに戻す
- [hcxtools](https://github.com/ZerBea/hcxtools) - cap/pcap/pc及ng（gz圧縮）のWiFiダンプファイルをHashCat形式に変換するポータブルソリューション
- [itunes_backup2hashcat](https://github.com/philsmd/itunes_backup2hashcat) - Manifest.plistファイルから必要な情報を抽出し、HashCatに適合するハッシュ形式に変換
- [mongodb2hashcat](https://github.com/philsmd/mongodb2hashcat) - MongoDBデータベースサーバーからSCRAM-SHA-1（-m 24100）またはSCRAM-SHA-256（-m 24200）に適合するハッシュ形式に変換

## Hashcat

*[Hashcat](https://github.com/hashcat/hashcat) は「世界最速かつ最先端のパスワード回復ユーティリティ」です。以下はHashcatに直接関係するプロジェクトです。*

- [Autocrack](https://github.com/pry0cc/autocrack) - ハッシュクラッキングを自動的に、および軽量自動で実行するクライアントとサーバーツールのセット
- [docker-hashcat](https://github.com/dizcza/docker-hashcat) - Ubuntu 18.04でCUDA、OpenCL、POCLを搭載した最新のhashcat Docker
- [Hashcat-Stuffs](https://github.com/xfox64x/Hashcat-Stuffs) - hashcat用のリストやツールのコレクション
- [hashcat-utils](https://github.com/hashcat/hashcat-utils/) - 高度なパスワードクラッキングに役立つ小さなユーティリティ
- [Hashfilter](https://github.com/bharshbarger/Hashfilter) - ハッシュキャットのポーファイルを読み込み、異なるタイプをSQLiteデータベースにパース
- [known_hosts-hashcat](https://github.com/chris408/known_hosts-hashcat) - ハッシュキャットでSSHのknown_hostsファイルをクラッキングするためのガイドとツール
- [pyhashcat](https://github.com/f0cker/pyhashcat) - ハッシュキャットのPython C APIバインディング

### 自動化

- [autocrack](https://github.com/timbo05sec/autocrack) - ハッシュキャットのラッパーでクラッキングプロセスを自動化する
- [hat](https://github.com/sp00ks-git/hat) - 一般的なワードリストとルールを用いた自動化されたハッシュキャットツールで、ハッシュクラッキングのプロセスを短縮
- [hate_crack](https://github.com/trustedsec/hate_crack) - TrustedSecチームによるハッシュキャットを用いたクラッキング手法の自動化ツール
- [Naive hashcat](https://github.com/brannondorsey/naive-hashcat) - Naive hashcatは、ナチュラルなパラメータや攻撃タイプを事前に設定した即插即用スクリプト

### 分散解析

- [CrackLord](https://github.com/jmmcatee/cracklord) - パスワードクラッキングのキューとリソースシステム
- [fitcrack](https://github.com/nesfit/fitcrack) - ハッシュキャットベースの分散パスワードクラッキングシステム
- [Hashstation](https://github.com/hashstation/hashstation) - Hashstationは、BOINCベースの分散パスワードクラッキングシステムで、内蔵されたウェブインターフェースを備えている
- [Hashtopolis](https://github.com/hashtopolis/server) - マルチプラットフォームのクライアントサーバーツールで、複数のコンピュータにハッシュキャットタスクを分散
- [Kraken](https://github.com/arcaneiceman/kraken) - マルチプラットフォームの分散ブートストラップパスワードクラッキングシステム

### ルール

- [clem9669 rules](https://github.com/clem9669/hashcat-rule) - ハッシュキャットまたはジョン向けのルール
- [hashcat rules collection](https://github.com/narkopolo/hashcat-rules-collection) - おそらく存在する中で最も大きなハッシュキャットルールコレクション
- [Hob0Rules](https://github.com/praetorian-inc/Hob0Rules) - 統計と業界パターンに基づいたハッシュキャット向けのパスワードクラッキングルール
- [Kaonashi](https://github.com/kaonashi-passwords/Kaonashi) - Kaonashiプロジェクト（RootedCON 2019）から得られたワードリスト、ルール、マスク
- [nsa-rules](https://github.com/NSAKEY/nsa-rules) - クラッキングされたパスワードから生成されたハッシュキャット向けのパスワードクラッキングルールとマスク
- [nyxgeek-rules](https://github.com/nyxgeek/nyxgeek-rules) - ハッシュキャットおよびジョン・ザ・リッパー向けのカスタムパスワードクラッキングルール
- [OneRuleToRuleThemAll](https://github.com/NotSoSecure/password_cracking_rules) - "すべてのパスワードをクラッキングする1つのルール。あるいは少なくとも我々はそう願っている。"
- [OneRuleToRuleThemStill](https://github.com/stealthsploit/OneRuleToRuleThemStill) - "私のオリジナルのOneRuleToRuleThemAllハッシュキャットルールをリニューアル・アップデートしたバージョンです。"
- [pantagrule](https://github.com/rarecoil/pantagrule) - 実世界の脆弱なパスワードから生成された大きなハッシュキャットルールセット。

### ルールツール

- [duprule](https://github.com/mhasbini/duprule) - 重複するハッシュキャットルールを検出・フィルタリング。
- [ruleprocessorY](https://github.com/TheWorkingDeveloper/ruleprocessorY) - ハッシュキャットに特化した次世代ルールプロセッサ。マルチバイト文字をサポートしており、複雑な構文に対応。

### ウェブインターフェース

- [crackerjack](https://github.com/ctxis/crackerjack) - CrackerJackはPythonで開発されたハッシュキャットのウェブGUI。
- [CrackQ](https://github.com/f0cker/crackq) - Pythonによるハッシュキャットのクラッキングキューシステム。
- [hashpass](https://github.com/dj-zombie/hashpass) - ハッシュキャット用のハッシュクラッキングウェブアプリケーションとサーバー。
- [Hashview](https://github.com/hashview/hashview) - パスワードクラッキングと分析用のウェブフロントエンド。
- [Wavecrack](https://github.com/wavestone-cdt/wavecrack) - Wavestoneが開発したハッシュキャットによるパスワードクラッキングのウェブインターフェース。
- [WebHashCat](https://github.com/hegusung/WebHashcat) - WebHashcatは、ハッシュキャットのパスワードクラッキングツールに非常にシンプルで効率的なウェブインターフェース。

## John the Ripper

*[John the Ripper](https://github.com/openwall/john) は、多くのOSで利用できるオープンソースのパスワードセキュリティ監査・回復ツールです。以下はJohn the Ripperに直接関係するプロジェクトです。*

- [BitCracker](https://github.com/e-ago/bitcracker) - BitCrackerは、BitLockerで暗号化されたメモリ単位に適用される最初のオープンソースパスワードクラッキングツール。
- [johnny](https://github.com/openwall/johnny) - ジョン・ザ・リッパーへのGUIフロントエンド。

## その他

- [Hashes](https://github.com/zefr0x/hashes) - ハッシュアルゴリズムを特定（Name That HashのGUIフロントエ及）。
- [hashgen](https://github.com/cyclone-github/hashgen) - Hashgenは、Goで書かれたシンプルで非常に高速なCLIハッシュジェネレーターであり、Linux、WindowsおよびMacでクロスコンパイル可能。
- [Name That Hash](https://github.com/HashPals/Name-That-Hash) - ハッシュの種類が分からない？Name That Hashはそのハッシュタイプを特定します！MD5、SHA256および300以上のハッシュを識別。便利なウェブアプリが付属。

### 著名な人物

- Alotdv - [Twitter](https://twitter.com/AlongExc).
- Clem9669 - [GitHub](https://github.com/clem9669).
- Coolbry95 - [GitHub](https://github.com/coolbry95) / [Twitter](https://twitter.com/coolbry95).
- Dakykilla - [GitHub](https://github.com/dakykilla) / [Twitter](https://twitter.com/dakykilla).
- Dropdeadfu - [GitHub](https://github.com/dropdeadfu) / [Twitter](https://twitter.com/dropdeadfu).
- Epixoip - [GitHub](https://github.com/epixoip) / [Mastodon](https://infosec.exchange/@epixoip) / [Twitter](https://twitter.com/jmgosney).
- Evilmog - [GitHub](https://github.com/evilmog/) / [Mastodon](https://infosec.exchange/@evilmog) / [Twitter](https://twitter.com/Evil_Mog).
- Hydraze - [GitHub](https://github.com/Hydraze) / [Mastodon](https://infosec.exchange/@hydraze) / [Twitter](https://twitter.com/Hydraze).
- JakeWnuk - [GitHub](https://github.com/jakewnuk).
- Kontrast23 - [GitHub](https://github.com/kontrast23) / [Twitter](https://twitter.com/marco_preuss).
- M3g9tr0n - [GitHub](https://github.com/m3g9tr0n) / [Twitter](https://twitter.com/m3g9tr0n).
- Matrix - [GitHub](https://github.com/matrix) / [Twitter](https://twitter.com/gm4tr1x).
- Minga - [Twitter](https://twitter.com/mingadotcom).
- N0kovo - [GitHub](https://github.com/n0kovo) / [Mastodon](https://infosec.exchange/@n0kovo) / [Twitter](https://twitter.com/n0kovos).
- NSAKEY - [GitHub](https://github.com/NSAKEY) / [Twitter](https://twitter.com/_NSAKEY) / [Website](https://abigisp.com/).
- NullMode - [GitHub](https://github.com/NullMode) / [Mastodon](https://infosec.exchange/@nullmode_@twtr.plus) / [Twitter](https://twitter.com/nullmode_).
- Paule965 - [Twitter](https://twitter.com/paule965).
- Philsmd - [GitHub](https://github.com/philsmd) / [Twitter](https://twitter.com/philsmd).
- Roycewilliams - [GitHub](https://github.com/roycewilliams) / [Mastodon](https://infosec.exchange/@tychotithonus) / [Twitter](https://twitter.com/TychoTithonus).
- RuraPenthe - [GitHub](https://github.com/bitcrackcyber) / [Mastodon](https://infosec.exchange/@rurapenthe) / [Twitter](https://twitter.com/RuraPenthe0).
- S3in!c - [GitHub](https://github.com/s3inlc) / [Mastodon](https://infosec.exchange/@s3inlc) / [Twitter](https://twitter.com/s3inlc).
- Tehnlulz - [GitHub](https://github.com/tehnlulz) / [Twitter](https://twitter.com/tehnlulz).
- The_Mechanic - [GitHub](https://github.com/th3mechanic) / [Twitter](https://twitter.com/th3_m3chan1c).
- ToXiC - [Twitter](https://twitter.com/yiannistox).
- Undeath - [GitHub](https://github.com/undeath).
- Unix-ninja - [GitHub](https://github.com/unix-ninja) / [Mastodon](https://infosec.exchange/@unix_ninja@twitterbridge.jannis.rocks) / [Twitter](https://twitter.com/unix_ninja).
- Xan - [GitHub](https://github.com/Xanadrel) / [Mastodon](https://infosec.exchange/@Xanadrel) / [Twitter](https://twitter.com/Xanadrel).

## ウェブサイト

### コミュニティ

- [hashcat Forum](https://hashcat.net/forum/) - ハッシュキャット開発者のフォーラム。
- [Hashmob](https://hashmob.net/) - パスワード回復コミュニティの成長を目指しており、暗号愛好家たちの協働の中心となることを目指す。大きなワードリストコレクションと、検索サービスも提供。
- [Hashkiller Forum](https://forum.hashkiller.io/) - パスワードクラッキングフォーラムで登録ユーザーは20,000人以上。

### 検索サービス

- [CMD5](https://www.cmd5.org/) - オンラインでMD5／sha1／mysql／sha256の暗号化および復号サービスを提供。
- [CrackStation](https://crackstation.net/) - 無料のハッシュ検索サービスで、ワードリストも提供。
- [gohashmob](https://github.com/n0kovo/gohashmob) - HashMob API を使ってハッシュを迅速に検索できる Go CLI アプリ
- [Hashes.com](https://hashes.com/) - 有料機能を備えたハッシュ検索サービス
- [Hashkiller](https://hashkiller.io/) - フォーラムを備えたハッシュ検索サービス
- [Online Hash Crack](https://www.onlinehashcrack.com/) - クラウドベースのパスワード回復サービス

## ワードリストツール

*ワードリストを分析、生成、操作するツールです。*

### 分析

- [PACK](https://github.com/iphelix/pack) - パスワードリストの分析を支援するユーティリティのコレクション。マスク、ルール、文字セット、その他パスワード特性のパターン検出を用いて、パスワードクラッキングを強化する。
- [password-smelter](https://github.com/TheTechromancer/password-smelter) - hashcat などからパスワードを読み取り、HTML、Markdown、XLSX、PNG、JSON に出力。ダークテーマとライトテーマをサポート。パスワードストレッチャーとの相性が良い。
- [password-stretcher](https://github.com/thetechromancer/password-stretcher) - ウェブサイト、ファイル、または stdin から「不快な量」のパスワードを生成。パスワードスマルターとの相性が良い。
- [pcfg_cracker](https://github.com/lakiw/pcfg_cracker) - ユーザーのパスワード作成習慣を機械学習で特定するプロジェクト。
- [Pipal](https://github.com/digininja/pipal) - THE パスワードアナライザー。
- [Graphcat](https://github.com/Orange-Cyberdefense/graphcat) - パスワードクラッキング結果に基づいてグラフやチャートを生成。

### 生成・操作

- [accent_permutator](https://github.com/cyclone-github/accent_permutator) - ASCII / UTF-8 の文字を「o」のようなアクセント文字（例：ò）に変換するツール。
- [anew](https://github.com/tomnomnom/anew) - stdin から行を読み取り、ファイルに追加するが、すでにファイルに存在する行は無視。新しい行も stdout に出力するため、重複を削除する tee -a に似ている。
- [bopscrk](https://github.com/r3nt0n/bopscrk) - ターゲット攻撃に適したスマートで強力なワードリストを生成。歌詞の取得とさまざまな変換を含む。
- [common-substr](https://github.com/sensepost/common-substr) - 入力テキストから最も頻出する部分文字列を抽出するシンプルツール。パスワードクラッキングに特化。
- [Crunch](https://sourceforge.net/projects/crunch-wordlist/) - Crunch は、標準の文字セットまたはユーザーが指定した文字セットを指定できるワードリスト生成ツール。すべての可能な組み合わせと順列を生成できる。
- [CUPP](https://github.com/Mebus/cupp) - 誕生日、ニックネーム、住所、ペットや親族の名前など、ユーザープロフィールデータを使ってワードリストを生成できるツール。
- [duplicut](https://github.com/nil0x42/duplicut) - 非常に大きなワードリストから重複を削除（ソートせずに）——辞書ベースのパスワードクラッキングに適する。
- [Gorilla](https://github.com/d4rckh/gorilla) - 変異を使ってワードリストを生成または既存のワードリストを拡張するツール。
- [Gramify](https://github.com/TheWorkingDeveloper/gramify) - 単語、文字、または文字セットに基づいてワードリストの n-gram を生成。オフラインパスワード攻撃やデータ分析に使用。
- [Elpscrk](https://github.com/D4Vinci/elpscrk) - Elpscrk は cupp に似ているが、順列と統計に基づき、メモリ効率が良い。
- [Keyboard-Walk-Generators](https://github.com/Rich5/Keyboard-Walk-Generators) - キーボードウォー辞書を生成するためのツール
- [kwprocessor](https://github.com/hashcat/kwprocessor) - 設定可能なベース文字、キーマップ、ルートを備えた高度なキーボードウォー生成器
- [maskprocessor](https://github.com/hashcat/maskprocessor/) - 各位置に設定可能な文字セットを備えた高性能ワードジェネレーター
- [maskuni](https://github.com/flbdx/maskuni) - ハッシュキャットのマスクジェネレーターの精神を踏襲し、ユニコードをサポートするスタンドアローン高速ワードジェネレーター
- [Mentalist](https://github.com/sc0tfree/mentalist) - Mentalistは、パスワード構成における人間の一般的なパラダイムを活用したグラフィカルなワードリスト生成ツールであり、フルワードリストやハッシュキャットおよびジョン・ザ・リッパーに適合するルールを出力可能
- [PTT](https://github.com/JakeWnuk/ptt) - パスワード変換ツール（ptt）は、パスワードクラッキングに設計された柔軟なユーティリティであり、カスタムルールや変換の作成、ワードリストの生成を可能にし、ファイル、URL、標準入力からのデータ処理をサポートし、クラッキングワークフローを簡素化
- [Phraser](https://github.com/Sparell/Phraser) - n-gramおよびマーカーチェーンを用いたフレーズジェネレーターで、パスフレーズクラッキングに必要なフレーズを生成
- [princeprocessor](https://github.com/hashcat/princeprocessor) - PRINCEアルゴリズムを用いたスタンドアローンパスワード候補ジェネレーター
- [Rephraser](https://github.com/travco/rephraser) - マーカーチェーンを用いたPythonベースのPhraserの再構築で、言語的に正しいパスワードクラッキングを実現
- [Rling](https://github.com/Cynosureprime/rling) - RLI Next Gen（Rling）は、ハッシュキャットのユーティリティに含まれるrliの高速マルチスレッド、機能豊かな代替ツール
- [statsprocessor](https://github.com/hashcat/statsprocessor/) - 各位置にマーカーチェーンを用いたワードジェネレーター
- [StringZilla](https://github.com/ashvardanian/StringZilla) - 長文字列およびマルチギガバイトファイルにおける、PythonおよびCでの最速の文字列ソート、検索、分割、シャッフル
- [TTPassGen](https://github.com/tp7309/TTPassGen) - ブレートフォース、組み合わせ、複雑なルールモードなど、柔軟かつスクリプト可能なパスワード辞書ジェネレーター
- [token-reverser](https://github.com/dariusztytko/token-reverser) - セキュリティトークンをクラッキングするためのワードリスト生成ツール
- [WikiRaider](https://github.com/NorthwaveSecurity/wikiraider) - WikiRaiderは、ウィキペディアの国ごとのデータベースに基づいてワードリストを生成するツール

## ワードリスト

### 言語別

- [Albanian wordlist](https://github.com/its0x08/albanian-wordlist) - 名前、姓、そして一部のアルバニア文学の組み合わせ
- [Danish Phone Wordlist Generator](https://github.com/narkopolo/danish_phone_wordlist_generator) - このツールは、デンマークの電話番号（地域および/または使用方法：モバイル、固定電話など）のワードリストを生成可能であり、パスワードクラッキングやデンマークのターゲットに対するフュージングに有用
- [Danish Wordlists](https://github.com/narkopolo/danish-wordlists) - デンマークのパスワードクラッキングに用いるためのデンマーク語ワードリストのコレクション
- [French Wordlists](https://github.com/clem9669/wordlists) - このプロジェクトは、人間がベースパスワードとして使う可能性のあるすべての内容についてのフランス語ワードリストを提供することを目的としている

### その他

- [Packet Storm Wordlists](https://packetstormsecurity.com/Crackers/wordlists/page1/) - 複数の言語にわたる多様なワードリストの大きなコレクション
- [Rocktastic](https://labs.nettitude.com/tools/rocktastic/) - 野生で観察されたパスワードとパターンの多くの変形を含む
- [RockYou2021](https://github.com/ohmybahgosh/RockYou2021.txt) - RockYou2021.txtは、さまざまな単語リストから編集された巨大な単語リストである
- [WeakPass](https://weakpass.com/) - 大きな単語リストの収集

## 特定ファイル形式

### PDF

- [pdfrip](https://github.com/mufeedvh/pdfrip) - PDFの認可済みパスワード回復を支援するツールです。

### JKS

- [JKS private key cracker](https://github.com/floyd-fuh/JKS-private-key-cracker-hashcat) - JKS秘密鍵の認可済みパスワード回復を支援するツールです。

### ZIP

- [bkcrack](https://github.com/kimci86/bkcrack) - バイハムとコッカーより導入された既知の平文攻撃により、古いZIP暗号化をクラック
- [frackzip](https://github.com/hyc/fcrackzip) - 暗号化されたZIPアーカイブをクラックするための小さなツール

## 機械学習／AI

- [adams](https://github.com/TheAdamProject/adams) - 深層学習と動的辞書を用いた現実世界のパスワード強度におけるバイアスの削減
- [neural network cracking](https://github.com/cupslab/neural_network_cracking) - ニューラルネットワークを用いたパスワードクラックのコード
- [RNN-Passwords](https://github.com/gehaxelt/RNN-Passwords) - char-rnnを用いてパスワードを学習し、推測する
- [rulesfinder](https://github.com/synacktiv/rulesfinder) - このツールは、与えられた辞書とパスワードのリストに対して、John the RipperまたはHashcat用の効率的なパスワードマングリングルールを発見する
- [PassGPT](https://github.com/javirandor/passgpt) - PassGPTは、パスワードの漏洩データからゼロから訓練されたGPT-2モデルである
- [SePass: Semantic Password Guessing using k-nn Similarity Search in Word Embeddings](https://github.com/Knuust/SePass) - 単語埋め込みを用いて、パスワードリスト内の意味的相関を発見・活用するパスワード推測手法

## 研究

### 記事とブログ投稿

- [Optimizing Wordlists with Masks](https://jakewnuk.com/posts/optimizing-wordlists-w-masks/)
- [Purple Rain Attack - Password Cracking With Random Generation](https://www.netmux.com/blog/purple-rain-attack)
- [Smashing Hashes with Token Swapping Attacks](https://jakewnuk.com/posts/token-swapping-attack/)
- [Bcrypt at 25: A Retrospective on Password Security](https://www.usenix.org/publications/loginonline/bcrypt-25-retrospective-password-security)

### 論文

- [PassGPT: Password Modeling and (Guided) Generation with LLMs](https://arxiv.org/abs/2306.01545)
- [Password Cracking Using Probabilistic Context-Free Grammars (2009)](https://www.researchgate.net/publication/220713709_Password_Cracking_Using_Probabilistic_Context-Free_Grammars)
- [Fast, Lean, and Accurate: Modeling Password Guessability Using Neural Networks (2016)](https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/melicher)
- [PassGAN: A Deep Learning Approach for Password Guessing (2017)](https://arxiv.org/pdf/1709.00440)
- [GENPass: A General Deep Learning Model for Password Guessing with PCFG Rules and Adversarial Generation (2018)](https://ieeexplore.ieee.org/document/8422243)
- [Generating Optimized Guessing Candidates toward Better Password Cracking from Multi-Dictionaries Using Relativistic GAN (2020)](https://www.mdpi.com/2076-3417/10/20/7306/htm)
- [Reducing Bias in Modeling Real-world Password Strength via Deep Learning and Dynamic Dictionaries (2020)](https://arxiv.org/abs/2010.12269)
- [PassFlow: Guessing Passwords with Generative Flows (2021)](https://arxiv.org/abs/2105.06165)
- [GNPassGAN: Improved Generative Adversarial Networks For Trawling Offline Password Guessing (2022)](https://arxiv.org/pdf/2208.06943)
- [The Revenge of Password Crackers: Automated Training of Password Cracking Tools (2022)](https://doi.org/10.1007/978-3-031-17146-8_16)
- [A Systematic Review on Password Guessing Tasks (2023)](https://doi.org/10.3390/e25091303)
- [Harder, better, faster, stronger: Optimising the performance of context-based password cracking dictionaries (2023)](https://doi.org/10.1016/j.fsidi.2023.301507)
- [Confident Monte Carlo: Rigorous Analysis of Guessing Curves for Probabilistic Password Models (2023)](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10179365)
- [Improving Real-world Password Guessing Attacks via Bi-directional Transformers (2023)](https://www.usenix.org/conference/usenixsecurity23/presentation/xu-ming)
- [Mangling Rules Generation With Density-Based Clustering for Password Guessing (2023)](https://annas-archive.pk/scidb/10.1109/tdsc.2022.3217002/)
- [No Single Silver Bullet: Measuring the Accuracy of Password Strength Meters (2023)](https://www.usenix.org/system/files/usenixsecurity23-wang-ding-silver-bullet.pdf)
- [Optimizing The Computation Of Password Hashes (2023)](https://helda.helsinki.fi/server/api/core/bitstreams/23a37f74-a162-4473-b894-5da77f0627d1/content)
- [PGTCN: A Novel Password-Guessing Model Based On Temporal Convolution Network (2023)](https://annas-archive.pk/scidb/10.1016/j.jnca.2023.103592/)
- [Towards a Rigorous Statistical Analysis of Empirical Password Datasets (2023)](https://ieeexplore.ieee.org/document/10179431)
- [Enhancing The Resistance Of Password Hashing Using Binary Randomization Through Logical Gates (2024)](http://doi.org/10.11591/ijece.v14i5.pp5400-5407)
- [GuessFuse: Hybrid Password Guessing With Multi-View (2024)](https://ieeexplore.ieee.org/document/10466588)
- [PassRVAE: Improved Trawling Attacks via Recurrent Variational Autoencoder (2024)](https://dl.acm.org/doi/10.1145/3673277.3673295)
- [Prob-Hashcat: Accelerating Probabilistic PasswordGuessing with Hashcat by Hundreds of Times (2024)](https://dl.acm.org/doi/epdf/10.1145/3678890.3678919)
- [Reinforcing Cybersecurity With Bloom Filters: A Novel Approach To Password Cracking Efficiency (2024)](https://doi.org/10.1186/s13635-024-00183-2)
- [Beyond The Dictionary Attack: Enhancing Password Cracking Efficiency Through Machine Learning-Induced Mangling Rules (2025)](https://doi.org/10.1016/j.fsidi.2025.301865)
- [MAYA: Addressing Inconsistencies in Generative Password Guessing through a Unified Benchmark (2025)](https://arxiv.org/abs/2504.16651)
- [Password Guessing Using Large Language Models (2025)](https://www.usenix.org/system/files/usenixsecurity25-zou-yunkai.pdf)
- [PassRecover: A Multi-FPGA System for End-to-End Offline Password Recovery Acceleration (2025)](https://doi.org/10.3390/electronics14071415)
- [When Intelligence Fails: An Empirical Study on Why LLMs Struggle with Password Cracking (2025)](https://arxiv.org/abs/2510.17884)
- [Success Rates Doubled with Only One Character: Mask Password Guessing (2025)](https://doi.org/10.14722/ndss.2026.241059)
- [PGMaP: Password Generation Based On Mask Prediction (2026)](https://linkinghub.elsevier.com/retrieve/pii/S0957417426002319)
- [Improving targeted password guessing attacks by using personally identifiable information and old password (2026)](https://doi.org/10.1186/s42400-025-00430-0)

### 講演

- [BSides Cayman Islands 2024 - No Cap Cracking: Improving Offline Hash Recovery Methodologies](https://jakewnuk.com/static/No%20Cap%20Cracking%20Improving%20Offline%20Hash%20Recovery%20Methodologies.pdf)
- [BSides Cayman Islands 2023 - Leveling Up Password Attacks with Breach Data](https://jakewnuk.com/static/Leveling%20Up%20Password%20Attacks%20with%20Breach%20Data.pdf)
- [DEF CON Safe Mode Password Village - Getting Started with Hashcat](https://www.youtube.com/watch?v=MBTJ8f6Fsmg)
- [DEF CON Safe Mode Password Village - Jeremi Gosney - Cracking at Extreme Scale](https://www.youtube.com/watch?v=4Ell1Tt23NI)
- [DEF CON 28 Safe Mode Password Village – 'Let's Crack RockYou Without Using rockyou txt'](https://www.youtube.com/watch?v=8FtXntEsZdU)
- [SecTor 2019 - Will Hunt - Hashes, Hashes Everywhere, But All I See Is Plaintext](https://sector.ca/sessions/hashes-hashes-everywhere-but-all-i-see-is-plaintext/)
- [Tailored, Machine Learning-driven Password Guessing Attacks and Mitigation at DefCamp](https://www.youtube.com/watch?v=iK6ZbD6v9Gg)
- [UNHash - Methods for better password cracking](https://media.ccc.de/v/31c3_-_5966_-_en_-_saal_1_-_201412292245_-_unhash_-_methods_for_better_password_cracking_-_tonimir_kisasondi)
- [USENIX Security '23 - No Single Silver Bullet: Measuring the Accuracy of Password Strength Meters](https://www.youtube.com/watch?v=0vhoAaqGYV8)
- [USENIX Security '23 - Improving Real-World Password Guessing Attacks via Bi-Directional Transformers](https://www.youtube.com/watch?v=kE7dEUcPtU0)
- [USENIX Security '21 - Reducing Bias in Modeling Real-world Password Strength via Deep Learning and Dynamic Dictionaries](https://www.youtube.com/watch?v=Jvp3UTdCeag)
- [USENIX Security '16 - Fast, Lean, and Accurate: Modeling Password Guessability Using Neural Networks](https://www.youtube.com/watch?v=GgaZ_LxsL_8)
