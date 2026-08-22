---
title: "kareniel/awesome-evm-security"
description: "kareniel/awesome-evm-security の日本語訳（人手レビュー前）"
licenseSource: "github-kareniel-awesome-evm-security-readme-md"
---

# Awesome EVM Security [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![Awesome EVM Security](https://github.com/kareniel/awesome-evm-security/blob/c1713225eb3e67c800e4c281ed4e136ff75c25bb/awesome-evm-security.png)](https://github.com/kareniel/awesome-evm-security#readme)

[EVM](https://ethereum.org/en/developers/docs/evm/)は「Ethereum Virtual Machine」の略です。EVMはEthereumメインネットだけでなく、Layer 2プロトコル、サイドチェーン、EVM互換チェーンも支えています。

このリストは、情報セキュリティ管理の観点からEVMエコシステムを概観します。

## 目次

- [ガイド](#guides)
- [ガバナンス](#governance)
- [アーキテクチャ](#architecture)
- [標準](#standards)
- [システム資産](#system-assets)
- [脅威](#threats)
- [脆弱性](#vulnerabilities)
- [コントロール](#controls)
- [エコシステム](#ecosystem)

## ガイド
- [CryptoSec.info](https://cryptosec.info/) - 初心者がハッカーや詐欺師から資金を守る方法を学ぶための情報。
- [Simplified Roadmap for Blockchain Security](https://devansh.xyz/blockchain-security/2021/09/17/genesis-0x01.html) - ブロックチェーンセキュリティ分野に入るために知るべき、すべての基礎的な話題を扱う。
- [How to become a smart contract auditor](https://cmichel.io/how-to-become-a-smart-contract-auditor/) - 監査と監査人に関するよくある質問、および監査人が最初の仕事を得る方法。

## ガバナンス
- [A beginner's guide to DAOs](https://linda.mirror.xyz/Vh8K4leCGEO06_qSGx-vS5lvgUqhqkCz9ut81WwCP2o) - DAOとは何か、なぜ興味深いのか、どのようなユースケースがあるのかを高水準で概観する。
- [Deep DAO](https://deepdao.io/#/deepdao/dashboard) - 複数の指標を横断して主要DAOを一覧、ランク付け、分析する。
- [SAFT Agreements](https://saftproject.com/) - トークンの機能が開発される前に、トークンに関する権利を移転するために用いる商用契約。
- [Voting Options in DAOs](https://medium.com/daostack/voting-options-in-daos-b86e5c69a3e3) - DAOにおける投票オプション。
- [The Wyoming DAO bill](https://twitter.com/awrigh01/status/1369328856260354051) - Wyoming DAOに関するスレッド。
- [It Takes a Cryptonetwork](https://medium.com/primedao/it-takes-a-cryptonetwork-2ae9ab541c17) - DAO間関係に関するPrimeの戦略。
- [DAOs, Democracy and Governance](https://merkle.com/papers/DAOdemocracyDraft.pdf) - DAOに関するRalph Merkleの論文。

## アーキテクチャ
- [Shelling Out: The Origins of Money](https://nakamotoinstitute.org/shelling-out/) - 社会的取引コストを減らすうえでの収集品の価値を示す。
- [Foundations of Cryptoeconomic Systems](https://epub.wu.ac.at/7309/8/Foundations%20of%20Cryptoeconomic%20Systems.pdf) - 「暗号経済学」という用語が文脈依存である理由を探り、補完的なミクロ、メゾ、マクロの定義を提案する論文。
- [Towards a Practice of Token Engineering](https://blog.oceanprotocol.com/towards-a-practice-of-token-engineering-b02feeeff7ca) - トークン化エコシステムとそのインセンティブをどう設計し、分析・検証するか。
- [A Crash Course in Mechanism Design for Cryptoeconomic Applications](https://medium.com/blockchannel/a-crash-course-in-mechanism-design-for-cryptoeconomic-applications-a9f06ab6a976) - メカニズムデザインの基本概念を紹介し、暗号通貨の世界での有用性を示す。
- [WTF Is QF](https://wtfisqf.com/?grant=&grant=&grant=&grant=&match=1000) - 二次資金調達を簡潔に説明する。
- [Bonding Curves Explained](https://yos.io/2018/11/10/bonding-curves) - ボンディングカーブとは何か、またその潜在的な応用。

## 標準
- [DeFi Safety](https://www.defisafety.com/) - ベストプラクティスに基づくセキュリティスコアレビュー。
- [DASP Top 10 of 2018](https://dasp.co/) - Decentralized Application Security Projectの上位10脆弱性。
- [IVSCS](https://immunefi.com/severity-updated/) - Immunefi Vulnerability Severity Classification System。
- [Smart Contract Security Verification Standard](https://securing.github.io/SCSVS/) - 開発者、アーキテクト、セキュリティレビュアー、ベンダー向けに、スマートコントラクトのセキュリティを標準化するため作られた無償の14部構成チェックリスト。
- [Secureth guidelines](https://guidelines.secureth.org/) - ソフトウェアプロジェクトにおける異なる懸念と期待の全体像を示し、独自のソフトウェアエンジニアリングプロセスを策定する助けとなる。
- [CryptoCurrency Security Standard (CCSS)](https://cryptoconsortium.github.io/CCSS/) - 取引所、ウェブアプリケーション、暗号通貨保管ソリューションを含む、暗号通貨を利用するすべての情報システム向け要件セット。
- [The Solcurity Standard](https://github.com/Rari-Capital/solcurity) - Solidityスマートコントラクトのための、意見を反映したセキュリティおよびコード品質標準。

## システム資産
- [Security Considerations in the Solidity documentation](https://docs.soliditylang.org/en/v0.8.6/security-considerations.html) - いくつかの落とし穴と一般的なセキュリティ推奨事項を列挙する。
- [Ethereum 2.0 Specifications Security Audit Report](https://leastauthority.com/static/publications/LeastAuthority-Ethereum-2.0-Specifications-Audit-Report.pdf) - Least AuthorityによるEth2.0仕様のセキュリティ監査報告書。
- [Getting Deep Into EVM](https://hackernoon.com/getting-deep-into-evm-how-ethereum-works-backstage-ac7efa1f0015) - EVMの仕組みに関する究極の詳細な解説。
- [Ethereum EVM illustrated](https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf) - いくつかのメンタルモデルと実装を探究する。
- [Ethereum Blockspace: Who Gets What and Why](https://www.aniccaresearch.tech/blog/ethereum-blockspace-who-gets-what-and-why) - Ethereumブロックスペース市場の構造。
- [What Is Uniswap and How Does It Work?](https://academy.binance.com/en/articles/what-is-uniswap-and-how-does-it-work) - Uniswapとは何か、仕組み、Ethereumウォレットでトークンを簡単に交換する方法。
- [Scaling EVM (Ethereum Virtual Machine)](https://capitalgram.com/posts/scaling-evm/) - EVMベースのブロックチェーンアーキテクチャは、どれほど高速かつ遠くまで進めるか。
- [L2Beat](https://l2beat.com/) - 新興のレイヤー2（L2）技術に関する透明で検証可能な洞察。
- [The Non-Fungible Token Bible](https://opensea.io/blog/guides/non-fungible-tokens) - NFTについて知るべきすべて。
- [KEVM](https://github.com/kframework/evm-semantics) - K frameworkにおけるEVMの形式モデル。

## 脅威
- [Blockchain Graveyard](https://magoo.github.io/Blockchain-Graveyard/) - ブロックチェーンに関わる大規模なセキュリティ侵害または盗難をすべて集めたリスト。
- [List of Bitcoin Heists](https://bitcointalk.org/index.php?topic=576337) - 過去のBitcoin関連盗難の調査。
- [Blockchain Threat Intelligence](https://www.blockthreat.io/) - ブロックチェーン、DeFi、暗号通貨の脅威インテリジェンス、脆弱性、セキュリティツール、イベントに関する最新情報。
- [Rekt News](https://rekt.news/) - 調査報道、創造的な論評、インシデント分析。
- [DeFiYield's REKT db](https://defiyield.app/rekt-database) - 暗号資産ハック、エクスプロイト、詐欺のデータベース。
- [CryptoScamDB](https://cryptoscamdb.org/scams) - オープンソースデータベースで暗号通貨詐欺を追跡する。
- [Mudit Gupta's Twitter threads](https://mudit.blog/twitter-threads/) - Twitter上の初期分析と教育コンテンツ。
- [Flash Boys 2.0 Paper](https://ieeexplore.ieee.org/document/9152675) - 分散型取引所でのフロントランニング、マイナー抽出可能価値、コンセンサス不安定性。
- [MEV-explore](https://explore.flashbots.net/) - 「ダークフォレスト活動」とEthereumネットワークへの影響の重要性を、コミュニティが理解・定量化する助けとなる。
- [Flashloan monitor](https://monitor.blocksecteam.com/) - フラッシュローン取引を監視するダッシュボード。
- [Known Attacks](https://consensys.github.io/smart-contract-best-practices/known_attacks/) - Consensysによる、認識すべき既知攻撃のリスト。
- [Solidity Security](https://blog.sigmaprime.io/solidity-security.html) - 既知の攻撃ベクトルと一般的なアンチパターンの包括的リスト。

## 脆弱性
- [SWC Registry](https://swcregistry.io/) - Smart Contract Weakness Classificationとテストケース。
- [246 Findings](https://blog.trailofbits.com/2019/08/08/246-findings-from-our-smart-contract-audits-an-executive-summary/) - Trail of Bitsのスマートコントラクト監査から得られた246件の発見。
- [A Survey of Security Vulnerabilities in Ethereum Smart Contracts](https://arxiv.org/pdf/2105.06974.pdf) - 過去の悪用事例シナリオを分析し、ブロックチェーン技術のアプリケーション層に特有の8つの脆弱性を説明する。
- [List of Security Vulnerabilities](https://github.com/runtimeverification/verified-smart-contracts/wiki/List-of-Security-Vulnerabilities) - さまざまな情報源から集めた、一般的なスマートコントラクトセキュリティ脆弱性の包括的リスト。
- [List of Known Bugs](https://docs.soliditylang.org/en/v0.8.1/bugs.html) - Solidityコンパイラーで判明しているセキュリティ関連バグの一部をJSON形式で列挙するリスト。

## コントロール
- [Simple Security Toolkit](https://github.com/nascentxyz/simple-security-toolkit) - 特にプロトコルの初期版を開発・管理するチームに適する、Nascentチームの見解に基づく推奨事項。
- [Gnosis Safe](https://docs.gnosis-safe.io) - マルチシグ。各取引の実行に複数のチームメンバーの確認を要求し、企業暗号資産への不正アクセスを防ぐ助けとなる。
- [List of DeFi auditors](https://www.defisafety.com/auditors) - DeFiSafetyが維持するDeFi監査人のリスト。
- [State of DeFi Audits](https://medium.com/conflux-network/the-overlooked-element-of-defi-adoption-e3b29829e3da) - 新しいDeFiプロトコルを適切に保護して利用者を迎え入れるうえで、監査領域とその重要性を考察する記事。
- [Building Secure Contracts](https://github.com/crytic/building-secure-contracts/) - 安全なスマートコントラクトの書き方に関するTrail of Bitsのガイドラインとベストプラクティス。
- [Solidity Patterns](https://fravoll.github.io/solidity-patterns/) - スマートコントラクトプログラミング言語Solidityのパターンとベストプラクティスの集成。
- [Security Pattern for Ethereum and Solidity](https://docs.google.com/spreadsheets/d/1PF4QZudW6Z7EV4hqQfwPo3A43AVqPrsuzzzey5yRYcs/edit#gid=0) - Google Sheetsのチェックリスト。
- [Solidity Best Practices for Smart Contract Security](https://consensys.net/blog/developers/solidity-best-practices-for-smart-contract-security/) - Ethereumスマートコントラクトを堅牢にするためのConsensysの実践的助言。
- [CERtified](https://cer.live/) - サイバーセキュリティ評価による上位100取引所。
- [Smart Contract Security Registry](https://github.com/ethereum-lists/contracts) - チェーンとアドレスに基づきデプロイ済みコントラクトのインスタンスを、所属プロジェクトの一覧により特定する取り組み。
- [Forta](https://docs.forta.network/) - スマートコントラクト向けのコミュニティベース実行時セキュリティネットワーク。

## エコシステム
- [People to follow on Twitter](https://twitter.com/i/lists/1453086258436128770) - web3エコシステムとセキュリティ関係者を概観するTwitterリスト。
- [Videos to watch on YouTube](https://www.youtube.com/playlist?list=PLox242_JhiuEe64LzW1M8XpiQ2-N5bZsX) - web3セキュリティ動画のYouTubeプレイリスト。

## 脚注

### 関連項目

その他のAwesomeリスト:

- [Awesome BlockSec CTF](https://github.com/0xjeffsec/awesome-blocksec-ctf) - ブロックチェーンセキュリティのCapture the Flag（CTF）コンテスト。
- [Awesome Buggy ERC20 Tokens](https://github.com/sec-bit/awesome-buggy-erc20-tokens) - 影響を受けるトークンを伴うERC20スマートコントラクトの脆弱性。
- [Awesome Cryptoeconomics](https://github.com/jpantunes/awesome-cryptoeconomics) - 暗号経済学の研究・学習資料。
- [Awesome Zero-Knowledge Proofs (ZKP)](https://github.com/matter-labs/awesome-zero-knowledge-proofs) - Zero-Knowledge Proofs（ZKP）の学習に関する優れたものを集めたリスト。
- [Officer CIA's Ultimate DeFi Research Base](https://github.com/OffcierCia/ultimate-defi-research-base) - DeFIとブロックチェーンの研究論文・ツールを集めたリスト。
- [Awesome MEV resources](https://github.com/0xalpharush/awesome-MEV-resources)
