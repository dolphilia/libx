---
title: "Awesome Cryptography"
description: "Cryptographyを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-sobolevn-awesome-cryptography-readme-md"
---

# Awesome Cryptography

Cryptographyを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次



- [Theory](#theory)
  - [Algorithms](#algorithms)
    - [Symmetric encryption](#symmetric-encryption)
    - [Asymmetric encryption](#asymmetric-encryption)
    - [Hash functions](#hash-functions)
  - [Articles](#articles)
  - [Books](#books)
  - [Courses](#courses)
  - [Other lists](#other-lists)
- [Tools](#tools)
  - [Standalone](#standalone)
  - [Plugins](#plugins)
    - [Git](#git)
  - [Playgrounds](#playgrounds)
- [Frameworks and Libs](#frameworks-and-libs)
  - [C](#c)
  - [C#](#c-sharp)
  - [C++](#c-1)
  - [Clojure](#clojure)
  - [Common Lisp](#common-lisp)
  - [Delphi](#delphi)
  - [Elixir](#elixir)
  - [Erlang](#erlang)
  - [Golang](#go)
  - [Haskell](#haskell)
  - [Haxe](#haxe)
  - [Java](#java)
  - [JavaScript](#javascript)
  - [Julia](#julia)
  - [Lua](#lua)
  - [OCaml](#ocaml)
  - [Objective-C](#objective-c)
  - [PHP](#php)
  - [Python](#python)
  - [R](#r)
  - [Ruby](#ruby)
  - [Rust](#rust)
  - [Scala](#scala)
  - [Scheme](#scheme)
  - [Swift](#swift)
- [Resources](#resources)
  - [Blogs](#blogs)
  - [Mailing lists](#mailing-lists)
  - [Web-tools](#web-tools)
  - [Web-sites](#web-sites)
- [Contributing](#contributing)
- [License](#license)



- - -

<a id="theory"></a>
## 理論

### Algorithms

#### Symmetric encryption

- [3DES](https://en.wikipedia.org/wiki/Triple_DES) - 対称鍵ブロック暗号（またはトリプルデータ暗号化アルゴリズム（TDEAまたはトリプルDEA）で、各データブロックに対してデータ暗号化標準（DES）暗号アルゴリズムを3回適用するもの。
- [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) - 対称鍵ブロック暗号アルゴリズムおよび米国政府が安全かつ分類データの暗号化および復号に採用した標準（別名Rijndael）。
- [Blowfish](https://en.wikipedia.org/wiki/Blowfish_(cipher)) - 1993年にブリュース・シュネイアが設計した対称鍵ブロック暗号。設計上の特徴には、鍵に依存するSブロックと非常に複雑な鍵スケジュールが含まれる。

#### Asymmetric encryption

- [DH](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange) - 公開チャネルを介して暗号鍵を安全に交換する方法。RSAとは異なり、ディフィー・ヘルマン鍵交換は暗号化ではなく、二つの参加者間で共有秘密値を合意するための手段に過ぎず。生成された鍵が完全に擬似乱数であるため、DH鍵交換は前向きセキュリティ（）を提供できる。 https://en.wikipedia.org/wiki/Forward_secrecy
- [ECC](https://en.wikipedia.org/wiki/Elliptic-curve_cryptography) - 有限体上の楕円曲線の代数構造に基づく公開鍵暗号システム。
- [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) - 最初の実用的な公開鍵暗号システムの一つであり、安全なデータ伝送に広く用いられている。RSAでは、この非対称性は、二つの大きな素数の積を因数分解するという実用的な困難さに基づいている、因数分解問題に依存している。

#### Transform Encryption

- [Transform Encryption (aka Proxy Re-Encryption)](https://docs.ironcorelabs.com/concepts/transform-encryption) - 変換暗号は、受信者に暗号化するための鍵、暗号文を復号するための鍵、そして一つの受信者に暗号化された暗号文を別の受信者に復号できるように変換するための鍵の3つの数学的に関連する鍵を使用する。

#### Hash functions

- [MD5](https://en.wikipedia.org/wiki/MD5) - 128ビットのハッシュ値を生成する広く使われているハッシュ関数。MD5は元々暗号ハッシュ関数として設計されたが、多くの脆弱性が見つかり、現在はデータの整合性を確認するためのチェックサムとしてのみ使用できるが、意図しない損傷に対してのみ。
- [SHA1](https://en.wikipedia.org/wiki/SHA-1) -  米国国家安全保障局（NSA）が設計した暗号ハッシュ関数。SHA-1は160ビットのハッシュ値（メッセージディジェスト）を生成する。SHA-1は現在、資金の豊富な相手に対しては安全ではないとされている。
- [SHA2](https://en.wikipedia.org/wiki/SHA-2) - 米国国家安全保障局（NSA）が設計したハッシュ関数のセット。SHA-256とSHA-512はそれぞれ32ビットと64ビットのワードで計算される新しいハッシュ関数であり、異なるシフト量と加算定数を使用しているが、構造はほぼ同一であり、輪数の数だけが異なる。
- [SHA3](https://en.wikipedia.org/wiki/SHA-3) - 変動サイズの入力データから固定サイズの出力（通常224、256、384、または512ビット）を生成する暗号ハッシュ関数。これは量子コンピュータによる攻撃に耐えられるように設計されたSHA-3ファミリーの暗号アルゴリズムの一部であり、前像抵抗性、二重前像抵抗性、および衝突抵抗性といったセキュリティ特性を提供する。

### Articles

- [How to Generate Secure Random Numbers in Various Programming Languages](https://paragonie.com/blog/2016/05/how-generate-secure-random-numbers-in-various-programming-languages)。
- [Password Insecurity](https://www.netlogix.at/news/artikel/password-insecurity-part-1/) - パスワードセキュリティに興味があるすべての人向けに書かれた記事。
- [Secure Account Recovery Made Simple](https://paragonie.com/blog/2016/09/untangling-forget-me-knot-secure-account-recovery-made-simple)。

### Books

- [A Graduate Course in Applied Cryptography](https://crypto.stanford.edu/~dabo/cryptobook/) - 暗号におけるさまざまなタスクに向けた多くの構成を扱った書籍。
- [An Introduction to Mathematical Cryptography](http://www.math.brown.edu/~jhs/MathCryptoHome.html) - 現代暗号の導入。
- [Applied Cryptography: Protocols, Algorithms and Source Code in C](https://www.wiley.com/en-ie/Applied+Cryptography%3A+Protocols%2C+Algorithms+and+Source+Code+in+C%2C+20th+Anniversary+Edition-p-9781119439028) - この暗号の古典的書籍は、現代暗号についての包括的な調査を提供する。
- [Crypto101](https://www.crypto101.io/) - Crypto 101は暗号に関する導入コース。
- [Cryptography Engineering](https://www.schneier.com/books/cryptography_engineering/) - 現実世界で機能する暗号プロトコルを構築する方法を学ぶ。
- [Handbook of Applied Cryptography](https://cacr.uwaterloo.ca/hac/) - この書籍はプロフェッショナルな暗号学者のための参考書として意図されている。
- [Introduction to Modern Cryptography](http://www.cs.umd.edu/~jkatz/imc.html) - 現代的なコンピュータサイエンスの視点から書かれた暗号の初級レベルの解説。
- [OpenSSL Cookbook](https://www.feistyduck.com/library/openssl-cookbook/) - OpenSSLに関する書籍。
- [Practical Cryptography for Developers](https://cryptobook.nakov.com) - 現代暗号（ハッシュ、MACコード、対称および非対称暗号、鍵交換、楕円曲線、デジタル署名）についての開発者向けの書籍で、多くのコード例が含まれている
- [Real World Cryptography](https://www.manning.com/books/real-world-cryptography/) - 本書は、システムおよびアプリケーションのすべてのレベルにおけるセキュリティを理解し、適用するための応用暗号技術を教える
- [Security Engineering](http://www.cl.cam.ac.uk/~rja14/book.html) - カナダ・カーヴィン大学のコンピュータセキュリティ教授ロス・アンダーソンが執筆した、非常に優れた教科書
- [Serious Cryptography](https://nostarch.com/seriouscrypto) - ジャン＝フィリップ・アマッソンによる『現代暗号の実用入門』
- [The Code Book](https://simonsingh.net/books/the-code-book/) - 本書は暗号の歴史を網羅しており、古代から現代の暗号技術までをカバー。最後に演習問題があり、その解答には10,000ドルの報酬が与えられた
- [The Cryptoparty Handbook](https://unglue.it/work/141611/) - 本書はコンピュータおよびインターネットセキュリティのさまざまなテーマについての包括的なガイドを提供
- [Understanding Cryptography](http://www.crypto-textbook.com/) - よく見過ごされがちだが、初心者にとって非常に有益な書籍。各章の最後に多くの演習問題が含まれており、概念の強化やアイデアの定着を目的としている

### Courses

- [A Self-Study Course In Block-Cipher Cryptanalysis](https://www.schneier.com/wp-content/uploads/2016/02/paper-self-study.pdf) - ブライス・シュネイアが執筆した論文は、ブロック暗号の暗号解析に関する既存文献を学生が学習できるように整理している
- [Applied Cryptography](https://www.udacity.com/course/applied-cryptography--cs387) - 暗号は、クレジットカードの支払いから電話の利用まで、私たちの日常に存在している。コンピュータにおけるパズルの作成と解き方について学ぼう
- [Crypto Strikes Back!](https://www.youtube.com/watch?v=ySQl0NhW1J0) - この講演では、広く導入されているシステムにおける暗号脆弱性と、最小のミスが災害を引き起こした事例について述べる
- [Cryptography](https://www.coursera.org/learn/cryptography) - マーリン大学コロンビアパーキーの暗号学に関する実用的なコース
- [Cryptography - Stanford University](http://online.stanford.edu/course/cryptography) - 本書は暗号の基本的な構成要素の内部仕組みと、正しい使用方法を説明し、学生が暗号構成の安全性について考える方法や、それらを現実のアプリケーションに応用する方法を学ぶことができる
- [Cryptography 101: Building Blocks](https://cryptography101.ca/crypto101-building-blocks/) - アルフレッド・メネゼスによる初級コース（2024年秋）は、基本的な暗号構成要素（対称鍵暗号、ハッシュ関数、MAC、認証暗号、公開鍵暗号、署名、鍵合意、RSA、楕円曲線暗号）をカバーしている
- [Cryptography I](https://www.coursera.org/learn/crypto) - コースは、共有鍵を持つ2つの参加者が、強力な敵が通信を監視・改ざんする場合でも安全に通信できる方法について詳細に説明し、多くの実際のプロトコルを検討し、既存システムの誤りを分析する
- [Cybrary Cryptography](https://www.cybrary.it/course/cryptography/) - このオンラインコースでは、暗号がセキュリティの柱であり、暗号化手法（暗号、公開鍵または秘密鍵）を用いることで、個人または機密情報を不正アクセスから保護できることが説明される
- [Harvard's Cryptography Lecture notes](https://intensecrypto.org/) - ハーバード大学のCS127向けの初級だが、スピードが速い大学院・初級修士課程の暗号学講義
- [Journey into cryptography](https://www.khanacademy.org/computing/computer-science/cryptography) - カーンアカデミーの暗号学コース
- [Practical Aspects of Modern Cryptography](http://courses.cs.washington.edu/courses/csep590/06wi/) - 現代暗号の実用的側面、2006年冬、ワシントン大学CSE
- [Theory and Practice of Cryptography](https://www.youtube.com/watch?v=ZDnShu5V99s) - 現代暗号入門、実際の暗号利用およびグーグルでの応用、セキュリティ証明とセキュリティ定義、暗号学の特別トピック

### Other lists

- [Awesome crypto-papers](https://github.com/pFarb/awesome-crypto-papers) – 暗号学に関する論文、記事、チュートリアル、ハウツーを厳選したリスト
- [Awesome HE](https://github.com/jonaschn/awesome-he) – 同調暗号ライブラリ、ソフトウェア、リソースのキュレーションリスト
- [TLS Cipher Suites](https://stellastra.com/cipher-suite) - TLSの暗号化方式とそのセキュリティ評価のリスト

<a id="tools"></a>
## ツール

### Standalone

- [Bcrypt](http://bcrypt.sourceforge.net/) - マルチプラットフォーム対応のファイル暗号化ツール
- [blackbox](https://github.com/StackExchange/blackbox) - Git/Mercurial/Subversionに秘密情報を安全に保管
- [certbot](https://github.com/certbot/certbot) - 以前はLet's Encrypt Clientとして知られ、EFFがLet's Encryptから証明書を取得し、（オプションで）サーバーにHTTPSを自動有効化するためのツール。また、ACMEプロトコルを使用する他のCAにもクライアントとして機能できる。
- [Coherence](https://github.com/liesware/coherence/) - 現代ウェブアプリ向けの暗号化サーバー
- [cryptomator](https://github.com/cryptomator/cryptomator) - マルチプラットフォームでのクラウドファイルのクライアントサイド透明暗号化
- [Databunker](https://databunker.org/) - GDPRおよびCCPAに準拠した個人データやPIIのAPIベースのストレージサービス
- [gpg](https://www.gnupg.org/) - OpenPGP標準の完全かつ無料な実装。データや通信の暗号化・署名を可能にし、多様な鍵管理機能を備えている。GnuPGはコマンドラインツールであり、他のアプリケーションとの容易な統合を可能にする機能を備えている。
- [ironssh](https://github.com/IronCoreLabs/ironssh) - sftp/scpで転送されたファイルを端末から端末まで暗号化し、選択的に他の人に共有。自動鍵管理は任意のSSHサーバーと互換。暗号化されたファイルはGPGと互換。
- [Nipe](https://github.com/GouveaHeitor/nipe) - Nipeは、Torネットワークをデフォルトのゲートウェイに設定するためのスクリプト。
- [sops](https://github.com/mozilla/sops) - sopsはYAML、JSON、BINARY形式をサポートする暗号化ファイルエディタで、AWS KMS、GCP KMS、Azure Key Vault、PGPで暗号化できる。
- [ves](https://ves.host/docs/ves-util) - クラウドリポジトリを介した端末間暗号化共有、鍵の喪失時に友人のネットワークを介した安全な回復。

### Plugins

#### Git

- [git-crypt](https://github.com/AGWA/git-crypt) - Git内の透明なファイル暗号化。
- [git-secret](https://sobolevn.github.io/git-secret/) - Gitリポジトリ内にプライベートデータを保存するためのBashツール。

### Playgrounds

- [Cryptography Playground](https://vishwas1.github.io/crypto/index.html#/crypto) - ハッシュ、対称暗号、非対称暗号、ZKPなど、暗号学の基本概念を学習・体験できるシンプルなウェブツール。

<a id="frameworks-and-libs"></a>
## フレームワークとライブラリ

### C

- [crypto-algorithms](https://github.com/B-Con/crypto-algorithms) - AESやSHA-1などの標準暗号アルゴリズムの基本的な実装。
- [libgcrypt](http://directory.fsf.org/wiki/Libgcrypt) - GnuPGの分離モジュールとして開発された暗号化ライブラリ。
- [libkcapi](https://github.com/smuellerDD/libkcapi) - Linuxカーネル暗号APIのユーザースペースインターフェースライブラリ。
- [libsodium](https://github.com/jedisct1/libsodium) - 現代的で使いやすい暗号化ライブラド。
- [libtomcrypt](https://github.com/libtom/libtomcrypt) - 比較的包括的で、モジュール化され、ポータブルな暗号化ツールキット。
- [libVES.c](https://github.com/vesvault/libVES.c) - クラウドリポジトリを介した端末間暗号化共有、鍵の喪失時に友人のネットワークを介した安全な回復。
- [milagro-crypto-c](https://github.com/apache/incubator-milagro-crypto-c) - 小さな、自立型で高速なオープンソース暗号ライブラリ。RSA、ECDH、ECIES、ECDSA、AES-GCM、SHA2、SHA3およびペアリングベース暗号をサポート。
- [monocypher](https://monocypher.org) - 小さな、ポータブルで使いやすい暗号ライブラリ。libsodiumおよびTweetNaClを参考にしたもの。
- [NaCl](https://nacl.cr.yp.to/) - ネットワーク通信、暗号化、復号、署名などに最適な高速ライブラリ。
- [nettle](https://github.com/gnutls/nettle) - 暗号ライブラリとして、あらゆるコンテキストに簡単に組み込むことが可能な設計を採用。オブジェクト指向言語（C++、Python、Pikeなど）の暗号ツールキット、LSHやGNUPGなどのアプリケーション、さらにはカーネル空間にも適用可能。
- [OpenSSL](https://github.com/openssl/openssl) - TLS/SSLおよび暗号ライブラリ。
- [PolarSSL](https://tls.mbed.org/) - PolarSSLは、開発者が自らの（埋め込み）製品に暗号機能およびSSL/TLS機能を組み込むことを、極めて簡単にする。これにより、最小限のコード量でその機能を実現できる。
- [RHash](https://github.com/rhash/RHash) - ハッシュ値の計算に非常に便利なツール。
- [themis](https://github.com/cossacklabs/themis) - データの保存（AES）、安全なメッセージ送信（ECC＋ECDSA／RSA＋PSS＋PKCS#7）、セッションベースの前向きセキュリティデータ交換（ECDH鍵交換、ECCおよびAES暗号化）をサポートする、高度な暗号ライブラリ。多くの言語およびプラットフォームに移植されており、クライアント・サーバーインフラに適している。
- [tiny-AES128-C](https://github.com/kokke/tiny-AES128-C) - C言語での小さなポータブルAES128。
- [wolfSSL](https://github.com/wolfSSL/wolfssl) - 埋め込みデバイスとクラウド間のTLS/SSLの小さな、高速でポータブルな実装。
- [XKCP](https://github.com/XKCP/XKCP) — Keccakチームが定めた暗号スキームの自由でオープンソースな実装を集めたリポジトリ。
- [xxHash](https://github.com/Cyan4973/xxHash) - 極めて高速なハッシュアルゴリズム。

### C++

- [=nil; Crypto3](https://github.com/NilFoundation/crypto3) - C++17で構成された現代的な暗号化ソリューション（ブロック暗号からしきい値暗号、zk証明システムなどまでを含む完全な応用暗号化ソリューション）。
- [Botan](https://botan.randombit.net/) - `C++20`で書かれた暗号ライブラリ。
- [cryptopp](https://github.com/weidai11/cryptopp) - Crypto++は、暗号スキームを備えた無料のC++クラスライブラリ。
- [HElib](https://github.com/shaih/HElib) - 同型暗号（HE）を実装するソフトウェアライブラリ。
- [Nettle](http://www.lysator.liu.se/~nisse/nettle/) - 低レベルの暗号ライブラリ。
- [s2n](https://github.com/awslabs/s2n) - TLS/SSLプロトコルの実装。

### C-sharp

- [Bouncy Castle](https://bouncycastle.org/csharp/index.html) - 用途に応じた暗号ライブラリ。
- [libsodium-net](https://github.com/adamcaudill/libsodium-net) - 安全な暗号ライブラリ。libsodiumの.NET向けの移植版。
- [Microsoft .NET Framework Cryptography Model](https://docs.microsoft.com/en-us/dotnet/standard/security/cryptography-model) - .NET Framework で実装された多くの標準暗号アルゴリズム
- [PCLCrypto](https://github.com/AArnott/PCLCrypto) - プラットフォームで実装されたアルゴリズムに対する暗号APIを提供し、それらをポータブルなライブラリに公開する
- [SecurityDriven.Inferno](https://github.com/sdrapkin/SecurityDriven.Inferno) - .NETの暗号処理を正しく実現
- [StreamCryptor](https://github.com/bitbeans/StreamCryptor) - libsodiumとprotobufを用いたストリーム暗号化・復号

### Clojure

- [buddy-core](https://funcool.github.io/buddy-core/latest/) - 暗号API
- [clj-crypto](https://github.com/macourtney/clj-crypto/) - Bouncy Castleのラッパー
- [pandect](https://github.com/xsc/pandect) - Clojure向けの高速かつ使いやすいメッセージダイジェスト、チェックサム、HMACライブラリ
- [secrets.clj](https://github.com/lk-geimfari/secrets.clj) - Clojureで暗号的に強固な乱数を生成するためのライブラリ。パスワード、アカウント認証、セキュリティトークン、関連するシークレットなどのデータの管理に適している。

### Common Lisp

- [crypto-shortcuts](https://github.com/Shinmera/crypto-shortcuts) - 一般的な暗号関数のコレクション
- [ironclad](http://method-combination.net/lisp/ironclad/) - 一般的な暗号ショートカットのコレクション
- [trivial-ssh](https://github.com/eudoxia0/trivial-ssh) - Common Lisp向けのSSHクライアントライブラリ（libssh2に基づく）

### Delphi

- [DelphiEncryptionCompendium](https://github.com/winkelsdorf/DelphiEncryptionCompendium/releases) - Delphi向けの暗号ライブラリ
- [LockBox](https://sourceforge.net/projects/tplockbox/) - LockBox 3はDelphi向けの暗号ライブラリ
- [SynCrypto](https://github.com/synopse/mORMot/blob/master/SynCrypto.pas) - 高速暗号処理（ハッシュと暗号化）アルゴリズムを実装。AES、XOR、RC4、ADLER32、MD5、SHA1、SHA256を含み、速度最適化済み
- [TForge](https://bitbucket.org/sergworks/tforge) - TForgeはDelphiで書かれたオープンソース暗号ライブラリで、FPCと互換性がある

### Elixir

- [cipher](https://github.com/rubencaro/cipher) - Elixir用の暗号ライブラリ。任意のバイナリを暗号化／復号。
- [cloak](https://github.com/danielberkompas/cloak) - Ectoとの暗号化の利用を簡単にするためのCloak
- [comeonin](https://github.com/elixircnx/comeonin) - Elixir向けのパスワード認証（bcrypt）ライブラリ
- [elixir-rsa](https://github.com/trapped/elixir-rsa) - `:public_key` Elixir向けの暗号ラッパー
- [elixir_tea](https://github.com/keichan34/elixir_tea) - ElixirでのTEA実装。
- [ex_crypto](https://github.com/ntrepid8/ex_crypto) - Elixir向けErlang `:crypto` および `:public_key` モジュールのラッパー。多くの暗号関数に対して適切なデフォルト値を提供し、それらの利用を容易にする
- [exgpg](https://github.com/rozap/exgpg) - Elixirからgpgを使用する。
- [pot](https://github.com/yuce/pot) - Google Authenticatorと互換性のあるワンタイムパスワードを生成するErlangライブラリ。
- [siphash-elixir](https://github.com/zackehh/siphash-elixir) - ElixirでのSipHashハッシュファミリーの実装。

### Erlang

- [crypto](http://erlang.org/doc/apps/crypto/) - メッセージダイジェストの計算用関数、および暗号化・復号用関数
- [public_key](http://erlang.org/doc/man/public_key.html) - 公開鍵インフラを扱うための関数を提供します。

### Go

- [crypto](https://golang.org/pkg/crypto/) - 公式ウェブサイトリソース
- [dkeyczar](https://github.com/dgryski/dkeyczar) - GoogleのKeyczar暗号ライブラリのGoへのポート。
- [gocrypto](https://github.com/kisom/gocrypto) - 『Goで実践的な暗号』書籍の例コード。
- [goThemis](https://github.com/cossacklabs/themis/wiki/Go-Howto) - ThemisへのGoのラッパー。データの保存（AES）、安全なメッセージ送信（ECC + ECDSA / RSA + PSS + PKCS#7）、セッション指向の前向きセキュリティデータ交換（ECDH鍵交換、ECCおよびAES暗号化）向けの高度な暗号ライブラリ。
- [kyber](https://github.com/dedis/kyber) - Go言語向けの高度な暗号ライブラリ。


### Haskell

- [Cryptography](http://hackage.haskell.org/packages/#cat:Cryptography) - Hackageの協働リスト。
- [Cryptography & Hashing](https://wiki.haskell.org/Applications_and_libraries/Cryptography) - Haskellの公式ウェブサイト。
- [cryptol](https://github.com/GaloisInc/cryptol) - 暗号の言語。
- [Cryptonite](https://hackage.haskell.org/package/cryptonite) - Haskellにおける暗号プリミティブのリポジトリ。
- [HsOpenSSL](https://github.com/phonohawk/HsOpenSSL) - Haskel向けのOpenSSLバインディング。
- [scrypt](https://github.com/informatikr/scrypt) - Colin Percivalのscrypt実装へのHaskellのバインディング。

### Haxe

- [haxe-crypto](http://lib.haxe.org/p/haxe-crypto/) - Haxe暗号ライブラリ。

### JavaScript

- [asmCrypto](https://github.com/vibornoff/asmcrypto.js/) - パフォーマンスを意識した、人気暗号ユーティリティのJavaScript実装。
- [bcrypt-Node.js](https://github.com/shaneGirish/bcrypt-Node.js) - Node.js向けのbcryptのネイティブ実装。
- [cifre](https://github.com/openpeer/cifre) - 現代のクライアントサイドJavaScript向けの高速暗号ツールキット。
- [closure-library](https://github.com/google/closure-library/tree/master/closure/goog/crypt) - Googleの共通JavaScriptライブラリ。
- [cryptico](https://github.com/wwwtyro/cryptico) - RSAおよびAESを用いたJavaScript向けの使いやすい暗号システム。
- [crypto-js](https://github.com/brix/crypto-js) - JavaScriptにおける暗号標準のライブラリ。
- [cryptojs](https://github.com/gwjjeff/cryptojs) - Node.js向けの標準かつ安全な暗号アルゴリズムを提供。
- [forge](https://github.com/digitalbazaar/forge) - JavaScriptにおけるTLSのネイティブ実装および、暗号ベースおよびネットワーク負荷の大きいウェブアプリを書くためのツール。
- [IronNode](https://docs.ironcorelabs.com/ironnode-sdk/overview) - 変換暗号ライブラリ、プロキシ再暗号化の一種で、ユーザーまたはグループに暗号化し、Node.jsアプリに強力なデータ制御を簡単に追加できる。
- [IronWeb](https://docs.ironcorelabs.com/ironweb-sdk/overview) - 変換暗号ライブラリ、プロキシ再暗号化の一種で、ブラウザ上で安全に終端まで暗号化を管理できる。
- [javascript-crypto-library](https://github.com/clipperz/javascript-crypto-library) - JavaScript暗号ライブラリは、ウェブ開発者に広範で効率的な暗号関数を提供する。
- [js-nacl](https://github.com/tonyg/js-nacl) - Emscriptenでコンパイルされたlibsodiumのルーチンに対する純粋JavaScriptの高レベルAPI。
- [jsencrypt](https://github.com/travist/jsencrypt) - OpenSSLのRSA暗号化、復号、鍵生成を行うJavaScriptライブラリ。
- [JShashes](https://github.com/h2non/jshashes) - Node.jsおよびブラウザ向けの高速かつ依存関係のない暗号ハッシュライブラリ（MD5、SHA1、SHA256、SHA51、RIPEMD、HMACをサポート）。
- [jsrsasign](https://github.com/kjur/jsrsasign) - 'jsrsasign'（RSA-Sign JavaScriptライブラリ）は、RSA/RSAPSS/ECDSA/DSA署名および検証をサポートするオープンソース無料暗号ライブラリ。
- [jsThemis](https://github.com/cossacklabs/themis/wiki/Nodejs-Howto) - ThemisへのJavaScriptラッパー。データの保存（AES）、安全なメッセージ送信（ECC + ECDSA / RSA + PSS + PKCS#7）、セッション指向の前向きセキュリティデータ交換（ECDH鍵合意、ECCおよびAES暗号化）を提供する高レベル暗号ライブラリ。
- [libsodium.js](https://github.com/jedisct1/libsodium.js) - libsodiumを純粋JavaScriptにコンパイルし、使いやすいラッパーを提供。
- [libVES.js](https://github.com/vesvault/libVES) - クラウドリポジトリを介した端末間暗号化共有、鍵の喪失時に友人のネットワークを介した安全な回復。
- [micro-rsa-dsa-dh](https://github.com/paulmillr/micro-rsa-dsa-dh) - 古い暗号アルゴリズムの最小実装：RSA、DSA、DH、ElGamal。
- [milagro-crypto-js](https://github.com/apache/incubator-milagro-crypto-js) - MCJSは、外部依存関係（ランダムシードソースを除く）を持たない、規格準拠のJavaScript暗号ライブラリ。Node.jsおよびブラウザに対応。RSA、ECDH、ECIES、ECDSA、AES-GCM、SHA2、SHA3、ペアリングベース暗号、New Hopeをサポート。
- noble - high-security, easily auditable set of contained cryptographic libraries and tools. Zero dependencies each.
  - [noble-ciphers](https://github.com/paulmillr/noble-ciphers) — 暗号化方式、AES-SIV、Salsa20、ChaCha、Poly1305およびFF1を含む。
  - [noble-curves](https://github.com/paulmillr/noble-curves) — 楕円曲線暗号、ウェイエルストラス、エドワーズ、モンゴメリー曲線、ペアリング、曲線へのハッシュ、ポセイドンハッシュ、スノール、secp256k1、ed25519、ed448、p521、bn254、bls12-381など。また4kb [noble-secp256k1](https://github.com/paulmillr/noble-secp256k1)、[noble-ed25519](https://github.com/paulmillr/noble-ed25519)。
  - [noble-hashes](https://github.com/paulmillr/noble-hashes) — SHA2、SHA3、RIPEMD、BLAKE2/3、HMAC、HKDF、PBKDF2、ScryptおよびArgon2id。
  - [noble-post-quantum](https://github.com/paulmillr/noble-post-quantum) — ML-KEM、ML-DSA、SLH-DSA（CRYSTALS-Kyber、CRYSTALS-Dilithium、Sphincs+）およびハイブリッド方式。
- [node.bcrypt.js](https://github.com/ncb000gt/node.bcrypt.js) - Node.js向けのbcrypt。
- [OpenPGP.js](https://github.com/openpgpjs/openpgpjs) - JavaScript向けのOpenPGP実装。
- [PolyCrypt](https://github.com/polycrypt/polycrypt) - WebCrypto APIの純粋JavaScript実装。
- [rusha](https://github.com/srijs/rusha) - 大規模バイナリデータに適した高性能純粋JavaScript SHA1実装で、ネイティブ速度の半分まで達する。
- [sjcl](https://github.com/bitwiseshiftleft/sjcl) - スタンフォードJavaScript暗号ライブラリ
- [TweetNaCl.js](https://github.com/dchest/tweetnacl-js) - TweetNaCl / NaClのJavaScript版。現代のブラウザおよびNode.js向けに開発されたもの
- [URSA](https://github.com/quartzjer/ursa) - Node.js向けのRSA公開鍵／秘密鍵OpenSSLバインディング


### Java

- [Apache Shiro](http://shiro.apache.org/) - 認証、認可、暗号化、セッション管理を実行
- [Bouncy Castle](https://www.bouncycastle.org/java.html) - 用途の広い暗号ライブラリ。JCAプロバイダーとして、基本的なヘルパーからPGP/SMIME操作まで幅広い機能を提供
- [Flexiprovider](http://www.flexiprovider.de/) - Java暗号アーキテクチャ向けの強力なツールキット
- [GDH](https://github.com/maxamel/GDH) - Vert.xフレームワークに基づく複数参加者向けの一般化Diffie-Hellman鍵交換Javaライブラリ
- [Google Tink](https://github.com/tink-crypto/tink-java) - 小さな暗号ライブラリで、安全かつシンプルで、迅速に一般的な暗号タスクを実行できる
- [Java Themis](https://github.com/cossacklabs/themis/wiki/Java-and-Android-Howto) - ThemisのJava/Androidラッパー。データの保存（AES）、安全なメッセージ送信（ECC + ECDSA / RSA + PSS + PKCS#7）、セッション指向の前向きセキュリティデータ交換（ECDH鍵交換、ECC & AES暗号化）を提供する高レベル暗号ライブラリ
- [jbcrypt](http://www.mindrot.org/projects/jBCrypt/) - OpenBSD Blowfishパスワードハッシュアルゴリズムの実装であるjBCrypt
- [Keycloak](https://github.com/keycloak/keycloak) - 現代アプリケーションおよびサービス向けのオープンソースIDおよびアクセス管理
- [pac4j](https://github.com/pac4j/pac4j) - セキュリティエンジン
- [Password4j](https://github.com/Password4j/password4j) - パスワードのハッシュおよびチェックに、異なる鍵導出関数（KDF）および暗号ハッシュ関数（CHF）を用いた、Java向けの使いやすい暗号ライブラリ
- [Project Kalium](http://abstractj.github.io/kalium/) - Networking and Cryptography（NaCl）ライブラリへのJavaバインディング。libsodiumの優れた機能を備えている
- [scrypt](https://github.com/wg/scrypt) - scrypt鍵導出関数の純Java実装およびC実装へのJNIインターフェース。SSE2最適化バージョンも含む
- [securitybuilder](https://github.com/tersesystems/securitybuilder) - JCA/JSSEオブジェクトに対するフロントエンドビルダーAPI



### Julia

- [Crypto.jl](https://github.com/danielsuo/Crypto.jl) - OpenSSLをラップしたライブラリだが、参照用に純Julia実装も提供
- [MbedTLS.jl](https://github.com/JuliaWeb/MbedTLS.jl) - mbed TLSおよび暗号Cライブラリをラップしたラッパー
- [Nettle.jl](https://github.com/staticfloat/Nettle.jl) - nettle暗号ハッシュ／暗号化ライブラリをJuliaでラップしたライブラリ。MD5、SHA1、SHA2ハッシュおよびHMAC機能、AES暗号化／復号を提供
- [SHA.jl](https://github.com/staticfloat/SHA.jl) - パフォーマンスに優れた、100％ネイティブJuliaのSHA1、SHA2-{2及256、384、512}実装

### Lua

- [lua-lockbox](https://github.com/somesocks/lua-lockbox) - 純粋なLuaで書かれた暗号プリミティブのコレクション
- [LuaCrypto](https://github.com/mkottman/luacrypto) - OpenSSLへのLuaのバインディング。

### OCaml

- [Digestif](https://github.com/mirage/digestif) - CおよびOCamlで実装されたさまざまな暗号プリミティブを提供するツールボックス
- [ocaml-tls](https://github.com/mirleft/ocaml-tls) - 純粋OCamlによるTLS

### Objective-C

- [CocoaSecurity](https://github.com/kelp404/CocoaSecurity) - AES、MD5、SHA1、SHA224、SHA256、SHA384、SHA512、Base64、Hex
- [ObjC Themis](https://github.com/cossacklabs/themis/wiki/Objective-C-Howto) - iOSおよびmacOS向けThemis用のObjCラッパー。データの保存（AES）、安全なメッセージング（ECC＋ECDSA／RSA＋PSS＋PKCS#7）、セッション指向かつ前向きセキュリティのデータ交換（ECDH鍵合意、ECCおよびAES暗号化）を提供する高度な暗号ライブラリ
- [ObjectivePGP](https://github.com/krzyzanowskim/ObjectivePGP) - ObjectivePGPはiOSおよびmacOS向けのOpenPGPプロトコルの実装。OpenPGPは最も広く使われているメール暗号化標準である
- [RNCryptor](https://github.com/RNCryptor/RNCryptor) - iOSおよびMac向けのCCCryptor（AES暗号化）ラッパー


### PHP

- [halite](https://paragonie.com/project/halite) - `libsodium`を用いた簡単な暗号化ライブラリ
- [libsodium-laravel](https://github.com/scrothers/libsodium-laravel) - `libsodium`を用いたLaravelパッケージ抽象化
- [PHP Encryption](https://github.com/defuse/php-encryption) - PHPでキーまたはパスワードを使ってデータを暗号化するためのライブラリ
- [PHP Themis](https://github.com/cossacklabs/themis/wiki/PHP-Howto) - Themis用のPHPラッパー。データの保存（AES）、安全なメッセージング（ECC＋ECDSA／RSA＋PSS＋PKCS#7）、セッション指向かつ前向きセキュリティのデータ交換（ECDH鍵合意、ECCおよびAES暗号化）を提供する高度な暗号ライブラリ
- [TCrypto](https://github.com/timoh6/TCrypto) - TCryptoはシンプルで柔軟なPHP5.3以降のメモリ内キー値ストレージライブラリ

### Python

- [bcrypt](https://github.com/pyca/bcrypt) - ソフトウェアおよびサーバー向けの現代的なパスワードハッシュ機能
- [charm](https://github.com/JHUISI/charm) - 暗号システムの迅速なプロトタイピングを可能にするフレームワーク
- [Crypto-Vinaigrette](https://github.com/aditisrinivas97/Crypto-Vinaigrette) - デジタル署名用の量子抵抗型非対称鍵生成ツール
- [cryptography](https://cryptography.io/en/latest/) - 暗号レシピおよびプリミティブを公開するPythonライブラリ
- [cryptopy](https://sourceforge.net/projects/cryptopy/) - 暗号アルゴリズムおよびアプリケーションの純粋Python実装
- [django-cryptography](https://github.com/georgemarshall/django-cryptography) - Djangoでデータを簡単に暗号化できる
- [ecdsa](https://github.com/tlsfuzzer/python-ecdsa) - ECDSAおよびECDHをサポートするシンプルなECC実装
- [hashids](https://github.com/davidaurelio/hashids-python) - [hashids](http://hashids.org)のPython実装
- [paramiko](http://www.paramiko.org/) - PythonによるSSHv2プロトコルの実装で、クライアントおよびサーバー機能を提供します
- [Privy](https://github.com/ofek/privy) - パスワードでデータを安全に保護するための簡単で高速なライブラリ
- [pycryptodome](https://github.com/Legrandin/pycryptodome) - 低レベルの暗号プリミティブを含む、自立したPythonパッケージ
- [PyElliptic](https://github.com/yann2192/pyelliptic) - PythonによるOpenSSLラッパー。ECC、AES、HMAC、Blowfishによる現代暗号に対応
- [pynacl](https://github.com/pyca/pynacl) - Pythonによるネットワーキングと暗号化（NaCl）ライブラリへのバインディング
- [pythemis](https://github.com/cossacklabs/themis/wiki/Python-Howto) - ThemisへのPythonラッパー。データの保存（AES）、安全なメッセージング（ECC＋ECDSA／RSA＋PSS＋PKCS#7）、セッション指向の前向きセキュリティデータ交換（ECDH鍵合意、ECCおよびAES暗号化）を提供する高度な暗号ライブラリ

### R

- [rscrypt](https://github.com/rstudio/rscrypt) - scrypt暗号関数のコレクションを含むパッケージ

### Ruby

- [bcrypt-ruby](https://github.com/codahale/bcrypt-ruby) - OpenBSDのbcrypt()パスワードハッシュアルゴリズムへのRubyバインディング。ユーザーのパスワードの安全なハッシュを簡単に保存できるようにします
- [RbNaCl](https://github.com/cryptosphere/rbnacl) - Networking and Cryptography（NaCl）ライブラリへのRubyバインディング
- [Ruby Themis](https://github.com/cossacklabs/themis/wiki/Ruby-Howto) - ThemisへのRubyラッパー。データの保存（AES）、安全なメッセージング（ECC＋ECDSA／RSA＋PSS＋PKCS#7）、セッション指向の前向きセキュリティデータ交換（ECDH鍵合意、ECCおよびAES暗号化）を提供する高度な暗号ライブラリ

### Rust

- [AEADs](https://github.com/RustCrypto/AEADs) - 関連データを伴った認証暗号アルゴリズム：高度な暗号化暗号
- [BLAKE3](https://github.com/BLAKE3-team/BLAKE3) - BLAKE3暗号ハッシュ関数の公式RustおよびC実装
- [botan-rs](https://github.com/randombit/botan-rs) - Rust向けのBotanバインディング
- [cryptoballot](https://github.com/cryptoballot/cryptoballot) - 暗号的に安全なオンライン投票
- [dalek cryptography](https://github.com/dalek-cryptography/) - ECC、Bulletproofsなどに対する高速かつ安全な中間レベルAPI
- [dryoc](https://github.com/brndnmtthws/dryoc) - 純Rustによる汎用暗号ライブラリで、libsodiumのプリミティブを実装
- [elliptic-curves](https://github.com/RustCrypto/elliptic-curves) - 純Rustによる楕円曲線実装のコレクション：NIST P-224、P-256、P-384、P-521、secp256k1、SM2
- [formats](https://github.com/RustCrypto/formats) - 暗号関連フォーマットのエンコーダ／デコーダ：DER、PEM、PKCS、PKIX
- [hashes](https://github.com/RustCrypto/hashes) - 純Rustで書かれた暗号ハッシュ関数のコレクション
- [mundane](https://github.com/google/mundane) - BoringSSLをバックアップするRust暗号ライブラリで、誤用が難しく、使いやすく、パフォーマンスに優れる
- [ockam](https://github.com/ockam-network/ockam) - Rustによる端末から端末まで（E2E）の暗号化と相互認証を実現するライブラリ
- [octavo](https://github.com/libOctavo/octavo) - 高度にモジュール化・設定可能なハッシュと暗号化ライブラリ
- [orion](https://github.com/orion-rs/orion) - 純粋Rustで書かれた暗号化ライブラリ。使いやすく、安全な暗号を提供することを目指しており、unsafeコードの使用を最小限に抑えようとしている
- [password-hashes](https://github.com/RustCrypto/password-hashes) - 純粋Rustで書かれたパスワードハッシュアルゴリズム（パスワードベースの鍵導出関数）のコレクション
- [proteus](https://github.com/wireapp/proteus) - ヘッダー鍵を使わないRustによるAxolotlプロトコル実装
- [rage](https://github.com/str4d/rage) - シンプルで現代的かつ安全なファイル暗号化ツール。Ageフォーマットを使用。
- [recrypt](https://github.com/IronCoreLabs/recrypt-rs) - 純粋Rustで実装されたマルチホッププロキシ再暗号化スキーム（トランスフォーム暗号）の暗号基本構成を実現するライブラリ
- [ring](https://github.com/briansmith/ring) - RustとBoringSSLの暗号基本構成を用いた安全で高速かつ小型の暗号化ライブラリ
- [ronkathon](https://github.com/pluto/ronkathon) - 教育的で数学的に透明性があり、よくドキュメント化されたRustによる暗号化
- [rust-crypto](https://github.com/DaGenix/rust-crypto) - さまざまな暗号アルゴリズムの主に純粋R及Rustによる実装
- [rust-openssl](https://github.com/sfackler/rust-openssl) - Rust向けのOpenSSLのバインディング
- [rustls](https://github.com/ctz/rustls) - Rustlsは、Rustで書かれた新しい現代的なTLSライブラリ
- [signatures](https://github.com/RustCrypto/signatures) - 暗号署名アルゴリズム：DSA、ECDSA、Ed25519
- [snow](https://github.com/mcginty/snow?tab=readme-ov-file) - Trevor Perrinの [Noise Protocol](https://noiseprotocol.org/noise.html) を純粋Rustで実装したもの
- [sodiumoxide](https://github.com/dnaq/sodiumoxide) - Sodium Oxide：Rust向けの高速暗号ライブラリ（libsodiumとのバインディング）
- [suruga](https://github.com/klutzy/suruga) - RustによるTLS 1.2実装
- [webpki](https://github.com/briansmith/webpki) - RustによるWeb PKI TLS X.509証明書の検証

### Scala

- [recrypt](https://github.com/IronCoreLabs/recrypt) - Scala向けのトランスフォーム暗号ライブラリ
- [scrypto](https://github.com/input-output-hk/scrypto) - Scala向けの暗号基本構成
- [tsec](https://github.com/jmcardon/tsec) - 型安全で機能的で汎用的なセキュリティおよび暗号化ライブラリ

### Scheme

- [chicken-sodium](https://github.com/caolan/chicken-sodium) - libsodium キーワードライブラリへの Chicken Scheme のバインディング
- [crypto-tools](https://wiki.call-cc.org/eggref/5/crypto-tools) - Chicken Scheme 用の有用な暗号プリミティブ
- [guile-gnutls](https://gitlab.com/gnutls/guile/) - GNU Guile 用の GnuTLS バインディング
- [guile-ssh](https://github.com/artyom-poptsov/guile-ssh) - GNU Guile 用の libssh バインディング
- [industria](https://gitlab.com/weinholt/industria) - 暗号プリミティブ、OpenSSH、DNS を含む多様なコレクション

### Swift

- [CryptoSwift](https://github.com/krzyzanowskim/CryptoSwift) - Swiftプログラミング言語で実装されたSwiftによる暗号関連関数およびヘルパー.
- [IDZSwiftCommonCrypto](https://github.com/iosdevzone/IDZSwiftCommonCrypto) - Swift で書かれた Apple の [CommonCrypto](https://opensource.apple.com/source/CommonCrypto/) ライブラリのラッパー
- [OpenSSL](https://github.com/Zewo/OpenSSL) - macOS および Linux 用の Swift OpenSSL
- [SweetHMAC](https://github.com/jancassio/SweetHMAC) - HMAC アルゴリズムを使って文字列を暗号化するための、小さなかつ使いやすい Swift クラス
- [Swift-Sodium](https://github.com/jedisct1/swift-sodium) - iOS および macOS 用の Sodium ライブラリへの Swift インターフェース
- [SwiftSSL](https://github.com/SwiftP2P/SwiftSSL) - Swift での洗練された暗号ツールキット
- [SwiftThemis](https://github.com/cossacklabs/themis/wiki/Swift-Howto) - iOS および macOS 用の Themis の Swift ラッパー。データの保存（AES）、安全なメッセージング（ECC + ECDSA / RSA + PSS + PKCS#7）、セッション指向の前向きセキュリティデータ交換（ECDH キー交換、ECC および AES 暗号化）のための高レベル暗号ライブラリ

<a id="resources"></a>
## リソース

### Blogs

- [A Few Thoughts on Cryptographic Engineering](http://blog.cryptographyengineering.com/) - 暗号に関するいくつかの思い付き
- [Bristol Cryptography Blog](http://bristolcrypto.blogspot.co.uk/) - ブリスホール大学暗号研究グループの公式ブログ。これはグループブログであり、主に暗号学者および暗号学生向けです
- [Charles Engelke's Blog](https://blog.engelke.com/tag/webcrypto/) - WebCrypto ブログ記事
- [Root Labs rdist](https://rdist.root.org/) - Nate Lawson とその共著者がハードウェア実装、暗号時系列攻撃、DRM、そして Commodore 64 について書いている
- [Salty Hash](https://blog.ironcorelabs.com) - 暗号化、データ管理、プライバシー、セキュリティに関するトピックをカバー
- [Schneier on security](https://www.schneier.com/) - 最も古いかつ最も有名なセキュリティブログの一つ。ブリュースはブロック暗号解析から空港セキュリティまでさまざまなトピックをカバーしています

### Mailing lists

- [metzdowd.com](http://www.metzdowd.com/mailman/listinfo/cryptography) - "Cryptography" は暗号技術およびその政治的影響に特化した低ノイズのマイルドなメーリングリストです
- [Modern Crypto](https://moderncrypto.org/) - 現代暗号実践に関するディスカッションのフォーラム
- [randombit.net](https://lists.randombit.net/mailman/listinfo/cryptography) - 暗号に関する一般論議のリスト、特に技術的側面

### Web-tools

- [Boxentriq](https://www.boxentriq.com/code-breaking) - ヴィジェネール、ベアフォート、キーデカル、置換暗号など、最も頻繁に使われる暗号の解析およびコードブレイクに使える簡単なツールが用意されています
- [Cryptolab](http://manansingh.github.io/Cryptolab-Offline/cryptolab.html) - 暗号関連のツールのセットです
- [CrypTool](http://www.cryptool-online.org/) - さまざまな暗号、暗号化手法および解析ツールが紹介され、多くの場合、図解例とともに提示されています
- [CyberChef](https://gchq.github.io/CyberChef/) - 暗号化、エンコード、圧縮、データ解析を行うウェブアプリです
- [factordb.com](http://factordb.com/) - Factordb.comは、任意の数の既知の因数分解を保存するツールです
- [keybase.io](https://keybase.io/) - Keybaseは、あなたのアイデンティティと公開鍵を相互にマッピングします

### Web-sites

- [Applied Crypto Hardening](https://bettercrypto.org/) - ウェブサーバーなどのセキュリティを確保するための、すでに用意されたベストプラクティスの例が多数あります
- [Cryptocurrencies Dashboard](https://dashboard.nbshare.io/apps/reddit/top-crypto-subreddits/) - Redditで話題になっている最も活発な暗号通貨のダッシュボードです
- [Cryptography Stackexchange](http://crypto.stackexchange.com/) - Cryptography Stack Exchangeは、ソフトウェア開発者、数学専門家など、暗号に興味を持つ人々向けの質問と回答サイトです
- [Cryptohack](https://cryptohack.org/) - インタラクティブな暗号チャレンジが多数用意されたプラットフォームで、Cryptopalsに似ています
- [Cryptopals Crypto Challenges](http://cryptopals.com/) - 応用型暗号チャレンジシリーズで、非常に基本的な課題（例：16進数から64進数への変換課題）から始まり、難易度を徐々に高め、抽象代数学に至るまで進化します
- [Eliptic Curve Calculator](https://paulmillr.com/noble/#demo) - 楕円曲線の公開鍵および署名を計算できるシンプルなフォーム。特徴には、カスタム曲線の作成や異なる署名タイプの選択が含まれます
- [Garykessler Crypto](http://www.garykessler.net/library/crypto.html) - 暗号学の概要です
- [IACR](https://www.iacr.org/) - 国際暗号研究協会は、暗号学および関連分野の研究を進めるための非営利科学団体です
- [Learn Cryptography](https://learncryptography.com/) - 人々が日々使っているが気づかない暗号システムが、プライバシーを守るためにどのように機能しているかを理解できるように支援しています
- [Subreddit of Cryptography](https://www.reddit.com/r/cryptography/) - このRedditのサブレディは、強力な暗号の理論および実用に関するリンクやディスカッションを目的としています
- [TikZ for Cryptographers](https://www.iacr.org/authors/tikz/) - LaTeXで書かれた研究論文やプレゼンテーションに使える、一般的な暗号関数のブロック図のコレクションです
- [WebCryptoAPI](https://www.w3.org/TR/WebCryptoAPI/) - この仕様は、ウェブアプリケーションにおける基本的な暗号操作（ハッシュ化、署名生成および検証、暗号化および復号）を行うJavaScript APIを説明しています

<a id="contributing"></a>
## コントリビューション

ご寄稿は常に歓迎です！まず[contribution guidelines](https://github.com/sobolevn/awesome-cryptography/blob/master/CONTRIBUTING.md)をご確認ください

<a id="license"></a>
## ライセンス

`awesome-cryptography` による [@sobolevn](https://github.com/sobolevn)

法的に可能である範囲内で、CC0を`awesome-cryptography`に付随させた人物は、`awesome-cryptography`に関してすべての著作権および関連又は隣接権を放棄した。

この作品と共に、CC0の法的文書のコピーを受領すべきである。受領していない場合は、[https://creativecommons.org/publicdomain/zero/1.0/](https://creativecommons.org/publicdomain/zero/1.0/)を参照のこと。
