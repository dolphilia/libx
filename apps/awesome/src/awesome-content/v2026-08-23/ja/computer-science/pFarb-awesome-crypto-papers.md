---
title: "pFarb/awesome-crypto-papers"
description: "pFarb/awesome-crypto-papers の正規スナップショット"
licenseSource: "github-pFarb-awesome-crypto-papers-readme-md"
---

<a id="awesome-crypto-papers"></a>
# Awesome Crypto Papers  [![Awesome](https://raw.githubusercontent.com/sindresorhus/awesome/d2005375894e77d69827b0e3c17073bbf6f062d7/media/badge.svg)](https://github.com/sindresorhus/awesome)

暗号技術の専門家ではない人のために、[暗号学](https://en.wikipedia.org/wiki/Cryptography)の論文、記事、チュートリアル、ハウツーを集めた厳選リストです。

<p align="center">
  <img src="https://github.com/pFarb/awesome-crypto-papers/blob/master/awesome-felix-big.jpg" style="width: 50%">
</p>

<a id="notes"></a>
### 注記

このリストは、暗号技術の知識レベルに応じた学習資料を提供することを目的としています。[Cossack Labs](https://www.cossacklabs.com) でエンジニアのオンボーディングを行う際、暗号技術を教え、特定の話題について読むべき資料を案内するために、同じ資料を繰り返し探していたことが作成のきっかけです。ほかの人にも役立つことを願っています。

データベース暗号化、安全な共有、各種方式のエンドツーエンド暗号化など、上位レベルのセキュリティシステムで暗号技術を利用し、その仕組み、失敗のしかた、攻撃手法を理解する必要がある人を対象とします。著名・重要・歴史的な論文だけを集めたリストではありません（該当する論文も多数含まれます）。必要な資料を把握している研究者や、専門家の指導の下で体系的に学ぶべき暗号研究者志望者を主対象にはしていません。

必読と思える資料を見つけ次第、段階的に拡充します。プルリクエストを歓迎します。

<a id="contents"></a>
## 目次

* [データセキュリティと暗号技術の入門](#introducing-people-to-data-security-and-cryptography)
  * [基礎：非エンジニア向け暗号技術](#simple-cryptography-for-non-engineers)
  * [エンジニア向けの短い入門](#brief-engineer-oriented-introductions)
* [個別のトピック](#specific-topcs)
  * [Hashing](#hashing) - 現代およびクラシックハッシュにおける重要な要素
  * [Secret key cryptography](#secret-key-cryptography) - すべての対称暗号に関する内容
  * [Cryptanalysis](#cryptanalysis) - 暗号システムへの攻撃
  * [Public key cryptography: General and DLP](#public-key-cryptography-general-and-dlp) - RSA、DHおよびその他のクラシック技術
  * [Public key cryptography: Elliptic-curve crypto](#public-key-cryptography-elliptic-curve-crypto) - ECC、実用的な暗号システムに焦点を当てる内容
  * [Zero Knowledge Proofs](#zero-knowledge-proofs) - 知識の証明およびその他の非開示暗号システム
  * [Math](#math) - 暗号文脈における有用な数学的資料
  * [Post-quantum cryptography](#post-quantum-cryptography) - 量子時代における暗号
* [書籍](#books)
* [講義と教育コース](#lectures-and-educational-courses)
* [オンライン暗号チャレンジ](#online-crypto-challenges)

<a id="the-list"></a>
## リスト

<a id="introducing-people-to-data-security-and-cryptography"></a>
### データセキュリティと暗号技術の入門

<a id="simple-cryptography-for-non-engineers"></a>
#### 基礎：非エンジニア向け暗号技術

* [Nuts and Bolts of Encryption: A Primer for Policymakers](https://www.cs.princeton.edu/~felten/encryption_primer.pdf)。
* [Keys under Doormats](https://dspace.mit.edu/bitstream/handle/1721.1/97690/MIT-CSAIL-TR-2015-026.pdf) - あるいは暗号がバックドアを設けられないべきである、世界中の暗号研究者による全員の委員会による論説

<a id="brief-introductions"></a>
#### 短い入門

* [An Overview of Cryptography](http://web.archive.org/web/20220918232416/https://www.garykessler.net/library/crypto.html) - ガリー・C・ケスラーによる
* [Using Encryption for Authentication in Large Networks](http://inst.eecs.berkeley.edu/~cs268/sp02/cached_papers/needham.pdf) - ニードハム、シュレーダー：これは暗号ベースの認証が開始される場所
* [Communication Theory of Secrecy Systems](http://web.archive.org/web/20201112040412/http://netlab.cs.ucla.edu/wiki/files/shannon1949.pdf) - クラウド・シャノンによる暗号の基本論文

<a id="general-cryptographic-interest"></a>
#### 暗号技術全般

* [Another Look at “Provable Security”](https://eprint.iacr.org/2004/152.pdf) - ネール・コブリッツらによる形式主義およびセキュリティ証明の直感的な背景に関する調査
* [The security impact of a new cryptographic library](https://cryptojedi.org/papers/coolnacl-20120725.pdf) - ダニエル・J・ベルストーン、タンジャ・ランゲ、ペーター・シュヴァブによるNaClに関する導入論文。暗号の実装およびセキュリティシステムにおける大きな構成要素としての使用に関する重要な側面を論じている

<hr>

<a id="specific-topics"></a>
### 個別のトピック

<a id="hashing"></a>
#### ハッシュ

* [FIPS 198-1: HMACs](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.198-1.pdf) - キーハッシュメッセージ認証コード（HMAC）に関するFIPS文書
* [FIPS 202: SHA3](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.202.pdf) - SHA-3標準：置換ベースハッシュおよび拡張出力関数
* [Birthday problem](https://en.wikipedia.org/wiki/Birthday_problem) - の背後にある数学の最もシンプルな説明 [birthday attack](https://en.wikipedia.org/wiki/Birthday_attack)
* [On the Security of HMAC and NMAC Based on HAVAL, MD4, MD5, SHA-0 and SHA-1](https://eprint.iacr.org/2006/187.pdf) - ジンスン・キムらによる異なるlegacy HMACスキームのセキュリティ分析
* [On the Security of Randomized CBC-MAC Beyond the Birthday Paradox Limit ](https://eprint.iacr.org/2001/074) - E. ジャルムズらによるランダム化CBC-MACのセキュリティ分析および、バースデイパラドックスに耐え、確実に完全セキュリティを達成する新しい構成法

<a id="secret-key-cryptography"></a>
#### 秘密鍵暗号

* [FIPS 197](http://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf) - AES FIPS文書
* [List of proposed operation modes of AES](http://csrc.nist.gov/groups/ST/toolkit/BCM/modes_development.html) - NISTが維持しています。
* [Recomendation for Block Cipher modes of operation: Methods and Techniques](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf)。
* [Stick figure guide to AES](http://www.moserware.com/2009/09/stick-figure-guide-to-advanced.html) - 上記の内容が少し難しかったか、あるいは良い笑いを求めていらっしゃる場合です。
* [Cache timing attacks on AES](http://cr.yp.to/antiforgery/cachetiming-20050414.pdf) - Daniel J. Bernsteinによる、暗号実装に対する優れた実用的な攻撃の設計例。
* [Cache Attacks and Countermeasures: the Case of AES](https://eprint.iacr.org/2005/271.pdf) - Dag Arne Osvik、Adi ShamirおよびEran TromerによるAESに対するサイドチャネル攻撃、別の視点。
* [Salsa20 family of stream ciphers](https://cr.yp.to/snuffle/salsafamily-20071225.pdf) - Daniel J. BernsteinによるSalsa20暗号の安全性に関する概説。
* [New Features of Latin Dances: Analysis of Salsa, ChaCha, and Rumba](https://eprint.iacr.org/2007/472.pdf) - Jean-Philippe AumassonらによるSalsa2-0暗号ファミリーの分析。
* [ChaCha20-Poly1305 Cipher Suites for Transport Layer Security (TLS)](https://tools.ietf.org/html/draft-ietf-tls-chacha20-poly1305-04) - Adam LangleyらによるChaCha暗号スイートファミリーのIETF草案。
* [AES submission document on Rijndael](https://csrc.nist.gov/csrc/media/projects/cryptographic-standards-and-guidelines/documents/aes-development/rijndael-ammended.pdf#page=1) - Joan DaemenとVincent RijmenによるRijndaelの原提案。
* [Ongoing Research Areas in Symmetric Cryptography](https://web.archive.org/web/20220209130448/https://www.ecrypt.eu.org/ecrypt1/documents/D.STVL.3-2.5.pdf) - ECRYPT暗号学ネットワークによる、秘密鍵暗号とハッシュ関数の研究概要。
* [The Galois/Counter Mode of Operation (GCM)](https://web.archive.org/web/20221007191258/https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.694.695&rep=rep1&type=pdf) - David A. McGrewおよびJohn ViegaによるGCMを導入した元論文。
* [The Security and Performance of the Galois/Counter Mode (GCM) of Operation](https://eprint.iacr.org/2004/193.pdf) - David A. McGrewおよびJohn ViegaによるGCMの設計、分析および安全性、特にAES GCMモードについて。
* [GCM Security Bounds Reconsidered](https://www.iacr.org/archive/fse2015/85400168/85400168.pdf) - Yuichi Niwa、Keisuke Ohashi、Kazuhiko Minematsu、Tetsu IwataによるAES GCMにおけるノンス生成の分析およびアルゴリズム（高いカウンターコンフリクト確率を考慮）。
* [Proxy-Mediated Searchable Encryption in SQL Databases Using Blind Indexes](https://eprint.iacr.org/2019/806.pdf) - Eugene Pilyankevich、Dmytro Kornieiev、Artem Storozhukによる既存の検索可能暗号方式の概要と、AES-GCM、ブラインドインデックス、Bloomフィルターを用いる方式の分析。
* [DES is not a group](https://link.springer.com/content/pdf/10.1007/3-540-48071-4_36.pdf) - DESの置換（各DES鍵に対する暗号化および復号）の集合が関数合成の下で閉じていないという、古いが価値のある数学的証明。これは、複数回のDES暗号化が単一のDES暗号化と同等ではないことを意味し、DESの置換集合によって生成される部分群のサイズは10^2499以上であり、DESに対する潜在的な攻撃が小さな部分群を活用するという可能性は極めて小さいことを示している。

<a id="cryptanalysis"></a>
#### 暗号解析

* [Differential Cryptanalysis of Salsa20/8](https://web.archive.org/web/20220710225943/https://www.ecrypt.eu.org/stream/papersdir/2007/010.pdf) - Yukiyasu Tsunooらによるストリーム暗号の暗号解析の素晴らしい例。
* [Slide Attacks on a Class of Hash Functions](https://eprint.iacr.org/2008/263) - M. Gorskiらによるハッシュ関数へのスライド攻撃（ブロック暗号の典型的な暗号解析手法）の適用。
* [Self-Study Course in Block Cipher Cryptanalysis](https://www.schneier.com/academic/archives/2000/01/self-study_course_in.html) - Bruce Schneierによる、ブロック暗号の暗号解析に関する既存文献を学生が学習できるように整理した試み。
* [Statistical Cryptanalysis of Block Ciphers](http://crypto.junod.info/phdthesis.pdf) - Pascal Junodによる。
* [Cryptanalysis of block ciphers and protocols](https://web.archive.org/web/20220929023539/http://www.cs.technion.ac.il/users/wwwb/cgi-bin/tr-info.cgi/2006/PHD/PHD-2006-04) - Elad Pinhas Barkanによる。
* [Too much crypto](https://eprint.iacr.org/2019/1492.pdf) - Jean-Philippe Aumassonによる対称暗号プリミティブの回数に関する分析および、少ない回数で実行すべき提案。
* [How to Break MD5 and Other Hash Functions](https://iacr.org/archive/eurocrypt2005/34940019/34940019.pdf) - Xiaoyun WangとHongbo Yuによる、MD5、MD4などのハッシュ関数に対するモジュラー差分衝突攻撃を扱った2005年の論文。
* [New attacks on Keccak-224 and Keccak-256](https://www.iacr.org/archive/fse2012/75490447/75490447.pdf) - Itai Dinur、Orr Dunkelman、Adi Shamirによる、差分技法と代数的技法を組み合わせたSHA-3への衝突攻撃を扱う2012年の論文。
* [A Single-Key Attack on the Full GOST Block Cipher](https://www.iacr.org/archive/fse2011/67330297/67330297.pdf) - ゴストブロック暗号に対する攻撃（「反射・ミッド・イン・ザ・ミドル攻撃」）で、2^225回の計算と2^32の既知平文を用いて鍵を回復できる、磯部孝則による。
* [Intro to Linear & Differential Cryptanalysis](http://www.cs.bc.edu/~straubin/crypto2017/heys.pdf) - 初心者向けに線形および微分暗号解析の技術を説明・実証する論文。
* [MEGA: Malleable Encryption Goes Awry](https://mega-awry.io/pdf/mega-malleable-encryption-goes-awry.pdf) - MEGAデータストレージに対する攻撃の概念実証版。実用性と悪用可能性を示す。[公式サイト](https://mega-awry.io/)。

<a id="public-key-cryptography-general-and-dlp"></a>
#### 公開鍵暗号：全般とDLP

* [New Directions in Cryptography](https://www-ee.stanford.edu/~hellman/publications/24.pdf) - ディフィーとヘルマンによる、公開鍵暗号および鍵交換/合意プロトコルを導入した論文。
* [RFC 2631: Diffie-Hellman Key Agreement](https://tools.ietf.org/html/rfc2631) - ディフィー・ヘルマン手法について、より工学的な視点で説明するもの。
* [A Method for Obtaining Digital Signatures and Public-Key Cryptosystems](https://people.csail.mit.edu/rivest/Rsapaper.pdf) -  RSAアルゴリズムを導入した元論文。
* [RSA Algorithm](http://www.di-mgt.com.au/rsa_alg.html) - RSAのすべてのビットについての教育的な説明。
* [Secure Communications Over Insecure Channels ](http://www.ralphmerkle.com/1974/PuzzlesAsPublished.pdf) - R. メルクルによる論文。『新しい暗号の方向性』より前に書かれたが、後に発表されたもの。ディフィー・ヘルマン鍵交換はそのメルクルシステムの実装である。
* [On the Security of Public Key Protocols](https://web.archive.org/web/20230902163042/https://www.cs.huji.ac.il/~dolev/pubs/dolev-yao-ieee-01056650.pdf) - ドレーヴ・ヤオモデルは、インタラクティブ暗号プロトコルの性質を証明するために用いられる形式モデル。
* [How to Share a Secret](https://github.com/arupmondal-cs/Crypto-Research/blob/master/Secret%20Sharing/shamirturing.pdf) - 秘密を共有するための安全な方法。
* [Twenty Years of Attacks on the RSA Cryptosystem](http://crypto.stanford.edu/~dabo/pubs/papers/RSA-survey.pdf) - RSAおよびその内部構造に対する攻撃に関する優れた調査、ダン・ボーンによる。
* [Remote timing attacks are practical](http://crypto.stanford.edu/~dabo/papers/ssl-timing.pdf) - 実際の暗号実装に対する攻撃の例、D. ボーン、D. ブルミーによる。
* [The Equivalence Between the DHP and DLP for Elliptic Curves Used in Practical Applications, Revisited](https://eprint.iacr.org/2005/307.pdf) - K. ベンタハールによる。
* [SoK: Password-Authenticated Key Exchange – Theory, Practice, Standardization and Real-World Lessons](https://eprint.iacr.org/2021/1492.pdf) - PAKEアルゴリズムの歴史および分類。
* [RSA, DH and DSA in the Wild](https://eprint.iacr.org/2022/048.pdf) - 非対称暗号の実装ミスがもたらした攻撃のコレクション。

<a id="public-key-cryptography-elliptic-curve-crypto"></a>
#### 公開鍵暗号：楕円曲線暗号

* [Elliptic Curve cryptography: A gentle introduction](http://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/)。
* [Explain me like I'm 5: How digital signatures actually work](http://blog.oleganza.com/post/162861219668/eli5-how-digital-signatures-actually-work) - EdDSAを簡潔かつ美しく説明するもの。
* [Elliptic Curve Cryptography: finite fields and discrete logarithms](http://andrea.corbellini.name/2015/05/23/elliptic-curve-cryptography-finite-fields-and-discrete-logarithms/)。
* [Detailed Elliptic Curve cryptography tutorial](https://www.johannes-bauer.com/compsci/ecc/)。
* [Elliptic Curve Cryptography: ECDH and ECDSA](http://andrea.corbellini.name/2015/05/30/elliptic-curve-cryptography-ecdh-and-ecdsa/)。
* [Elliptic Curve Cryptography: breaking security and a comparison with RSA](http://andrea.corbellini.name/2015/06/08/elliptic-curve-cryptography-breaking-security-and-a-comparison-with-rsa/)。
* [Elliptic Curve Cryptography: the serpentine course of a paradigm shift](http://eprint.iacr.org/2008/390.pdf) - 楕円曲線暗号（ECC）の開発および採用に関する歴史的調査。
* [Let's construct an elliptic curve: Introducing Crackpot2065](http://blog.bjrn.se/2015/07/lets-construct-elliptic-curve.html) - ECCをゼロから構築するための優れた例。
* [Explicit-Formulas Database](http://www.hyperelliptic.org/EFD/) - 楕円曲線の表現形態についての多くの文献
* [Curve25519: new Diffie-Hellman speed records](https://cr.yp.to/ecdh/curve25519-20060209.pdf) - Curve25519に関する論文
* [Software implementation of the NIST elliptic curves over prime fields](http://delta.cs.cinvestav.mx/~francisco/arith/julio.pdf) - M. Brown 他による楕円曲線暗号の実装例
* [High-speed high-security signatures](https://ed25519.cr.yp.to/ed25519-20110926.pdf) - Daniel J. Bernstein 他による ed25519 曲線における EdDSA署名に関する論文
* [Recommendations for Discrete Logarithm-Based Cryptography: Elliptic Curve Domain Parameters (NIST SP 800-186)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-186.pdf) - NISTが公表した楕円曲線を安全に実装するためのガイド。数学上の簡略化、最適化、誤ったアルゴリズム実装によるセキュリティリスクも扱う。[(2023年2月)](https://csrc.nist.gov/pubs/sp/800/186/final)
* [Biased Nonce Sense: Lattice Attacks against Weak ECDSA Signatures in Cryptocurrencies](https://eprint.iacr.org/2019/023.pdf) - ECDSAのnonceにおけるバイアスを分析・活用して秘密鍵を計算する方法
* [Minerva: The curse of ECDSA nonces](https://eprint.iacr.org/2020/728.pdf) - ECDSA署名から秘密鍵を回復するためのタイミングやビット長の漏洩を活用する方法
* [LadderLeak: Breaking ECDSA With Less Than One Bit Of Nonce Leakage](https://eprint.iacr.org/2020/615.pdf) - 160ビットの曲線ECDSAを、1ビット未満の漏洩で攻撃する方法

<a id="zero-knowledge-proofs"></a>
#### ゼロ知識証明

* [Proofs of knowledge](https://cseweb.ucsd.edu/~mihir/papers/pok.pdf) - 知識の証明と計算能力の証明に関する研究、M. Bellare と O. Goldreich による論文
* [How to construct zero-knowledge proof systems for NP](https://www.wisdom.weizmann.ac.il/~oded/gmw1.html) - ゴールドリッヒ、ミカリ、ウィグデルスによる古典的な論文
* [Proofs that yield nothing but their validity and a Methodology of Cryptographic protocol design](http://www.math.ias.edu/~avi/PUBLICATIONS/MYPAPERS/GMW86/GMW86.pdf) - 上記の論文に類するもの、ゴールドリッヒ、ミカリ、ウィグデルスによるもの
* [A Survey of Noninteractive Zero Knowledge Proof System and Its Applications](https://www.hindawi.com/journals/tswj/2014/560484/)。
* [How to Prove a Theorem So No One Else Can Claim It](https://web.archive.org/web/20211122040931/https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.469.9048&rep=rep1&type=pdf) - マヌエル・ブルムによる論文
* [Information Theoretic Reductions among Disclosure Problems](https://web.archive.org/http://crypto.cs.mcgill.ca/~crepeau/BCR86.pdf) - ブラスアウなどによる論文
* [Knowledge complexity of interactive proof systems](https://github.com/manjunath5496/Shafi-Goldwasser-Publications/blob/master/1989-siamjc.pdf) - ゴールドワッサー、ミカリ、ラックオフによる論文。ゼロ知識証明における「知識」の計算複雑性を定義するもの
* [A Survey of Zero-Knowledge Proofs with Applications to Cryptography](http://www.austinmohr.com/work/files/zkp.pdf) - 元のZKPプロトコルに関する素晴らしい導入
* [Zero Knowledge Protocols and Small Systems](https://web.archive.org/web/20220211100630/https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.26.585&rep=rep1&type=pdf) - ゼロ知識プロトコルに関する良い導入
* [Multi-Theorem Preprocessing NIZKs from Lattices](https://link.springer.com/chapter/10.1007%2F978-3-319-96881-0_25) - Sam Kim と David J. Wu による、格子ベースの事前処理モデルを用いた非相互ゼロ知識（NIZK）証明の構成

<a id="key-management"></a>
#### 鍵管理

* [Recommendation for Key Management – Part 1: General](http://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r4.pdf) - 鍵管理の目的と手順に関する方法論的に非常に関連のある文書
* [Selecting Cryptographic Key Sizes](https://link.springer.com/content/pdf/10.1007/s00145-001-0009-4.pdf) - 1999年の古典的な論文。対称暗号システム、RSA、ECCにおける鍵サイズの決定ガイドラインを示す、Arjen K. Lenstra と Eric R. Verheul によるもの

<a id="math"></a>
#### 数学

* [PRIMES is in P](https://www.cse.iitk.ac.in/users/manindra/algebra/primality_v6.pdf) - 入力数が素数か合成数かを決定する、絶対的に決定的かつ多項式時間のアルゴリズム

<a id="post-quantum-cryptography"></a>
#### 耐量子計算機暗号

* [Kyber and Dilithium](https://cryptography101.ca/kyber-dilithium) - NISTが2024年8月に標準化した、耐量子の格子ベース鍵カプセル化方式Kyber（ML-KEM）と署名方式Dilithium（ML-DSA）を解説する講義。
* [Post-quantum cryptography - dealing with the fallout of physics success](https://eprint.iacr.org/2017/314.pdf) - 後量子コンピュータによる攻撃に対抗する暗号システムを構築するために使える数学的タスクの概観。
* [Post-quantum cryptography](https://web.archive.org/web/20210510200628/https://www.researchgate.net/profile/Nicolas-Sendrier-2/publication/226115302_Code-Based_Cryptography/links/540d62d50cf2df04e7549388/Code-Based-Cryptography.pdf) - 後量子暗号についての導入。
* [Post-quantum RSA](https://cr.yp.to/papers/pqrsa-20170419.pdf) - ダニエル・ベルンシュタインが後量子時代においてRSAを守る方法を示した洞察。
* [MAYO: Practical Post-Quantum Signatures from Oil-and-Vinegar Maps](https://eprint.iacr.org/2021/1144.pdf) - 1997年にパタリンによって提唱されたオイルとワイン署名スキームは、最も古く、最もよく理解されている多変量二次署名スキームの一つである。性能と署名サイズにおいて優れている。本論文は、後量子時代におけるこのアルゴリズムの活用を強化することについて述べている。 [Official website](https://pqmayo.org/)。

<hr>

<a id="books"></a>
### 書籍

少し範囲外に見えるかもしれませんが、オンラインで全文を無料で読める書籍だけを掲載しています。連続した論文として読むこともできます。

* [A Graduate Course in Applied Cryptography](https://crypto.stanford.edu/~dabo/cryptobook/) - Dan BonehとVictor Shoupによる、暗号学、暗号解析、関連セキュリティのバランスの取れた入門コース。
* [Analysis and design of cryptographic hash functions, MAC algorithms and block ciphers](https://web.archive.org/web/20220209130435/https://www.esat.kuleuven.be/cosic/publications/thesis-16.pdf) - バート・ヴァン・ロマペイによる、さまざまな暗号およびハッシュ関数の設計と暗号解析に関する概観。
* [CrypTool book](https://www.cryptool.org/en/ctbook/) - 主に数学的に焦点を当てた暗号プロトコルの学習、使用、実験に関する情報。
* [Handbook of Applied Cryptography](https://cacr.uwaterloo.ca/hac/) - アルフレッド・J・メネゼス、パウル・C・ヴァン・オルシュト、スコット・A・ヴァンストーンによる。古典的な暗号学と暗号についての優れた導入。
* [The joy of Cryptography](http://web.engr.oregonstate.edu/~rosulekm/crypto/) - マイク・ロスルエクによる。非常に基本的な内容をよく解説している。ECCは含まれていない。
* [A Computational Introduction to Number Theory and Algebra](http://www.shoup.net/ntb/) - ビクトル・シュープによる、暗号学で普遍的に使われる数学についての優れた入門書。

<hr>

<a id="lectures-and-educational-courses"></a>
### 講義と教育コース

* [Understanding cryptography: A textbook for Students and Practitioners](http://www.crypto-textbook.com/) - テキストブック、素晴らしい講義、問題演習を含む。
* [Crypto101](https://www.crypto101.io/) - Crypto 101は、すべての年齢とスキルレベルのプログラマー向けに無料で提供される暗号学の導入コース。
* [A Course in Cryptography](https://www.cs.cornell.edu/courses/cs4830/2010fa/lecnotes.pdf) - ラファエル・パスとアヒ・シェラトによる講義ノート。
* [Lecture Notes on Cryptography](https://cseweb.ucsd.edu/~mihir/papers/gb.pdf) - シャフィ・ゴールドワーザー（MIT）、M. ベラレによる有名な暗号学講義セット。
* [Introduction to Cryptography by Christof Paar](https://www.youtube.com/watch?v=2aHkqB2-46k) - クリストフ・パール（ドイツのボーチム大学）による英語のビデオコース。
* [Cryptography I](https://www.coursera.org/learn/crypto) - スタンフォード大学のDan Boneh教授によるコース。[Cryptography II](https://www.coursera.org/learn/crypto2)はまだ開発中。
<hr>

<a id="online-crypto-challenges"></a>
### オンライン暗号チャレンジ

厳密には論文ではありませんが、暗号チャレンジは優れた教材です。

* [CryptoHack](https://cryptohack.org/)

* [Cryptopals crypto challenges](https://cryptopals.com/)。

* [id0-rsa crypto challenges](https://id0-rsa.pub/)。

* [MTC3](https://www.mysterytwisterc3.org/en/) - 難易度の異なる200以上の暗号課題、管理されたフォーラム、殿堂を備えるコンテスト。

<a id="license"></a>
## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲において、著者は本作品に関するすべての著作権および関連する権利を放棄しています。
