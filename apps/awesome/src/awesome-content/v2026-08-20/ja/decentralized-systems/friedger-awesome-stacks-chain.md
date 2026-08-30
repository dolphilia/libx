---
title: "Awesome Stacks"
description: "Stacksを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-friedger-awesome-stacks-chain-readme-md"
---

# Awesome Stacks

Stacksを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [アプリ](#apps)
  - [ウォレット](#wallets)
  - [Stacks Webアプリケーション](#stacks-web-applications)
  - [ブロックチェーン命名システム](#blockchain-name-system)
  - [DeFi](#defi)
  - [ゲーム](#games)
  - [スタッキングアプリ](#stacking-apps)
- [Clarityリソース](#clarity-resources)
  - [開発者ツール](#developer-tools)
  - [コントラクト例](#example-contracts)
  - [ライブラリとプロトコル](#libraries--protocols)
  - [コントラクト](#contracts)
  - [非代替性トークン](#non-fungible-tokens)
  - [代替性トークン](#fungible-tokens)
  - [スタッキング](#stacking)
- [アプリ開発](#app-development)
  - [クライアントライブラリ](#client-libraries)
  - [CLI](#cli)
  - [インデックス・クエリーAPI](#indexing-and-querying-apis)
- [学習リソース](#learning-resources)
  - [ドキュメント](#documentation)
  - [動画](#videos)
  - [文書チュートリアル](#written-tutorials)
  - [書籍](#books)
  - [コース](#courses)
- [コミュニティ](#community)

## アプリ

### ウォレット

- [Asigna](https://asigna.io) - Bitcoin、Ordinals、BRC20、Stacks向けマルチシグウォレット。
- [Leather Wallet](https://leather.io/) - BitcoinとStacks Webアプリケーションへ接続するオープンソースウォレット。モバイルにも対応する。
- [OKX Web3 Wallet](https://web3.okx.com/download) - Stacksもサポートするマルチチェーンウォレット。
- [Xverse Wallet](https://www.xverse.app) - Bitcoin、STX、スタッキングを管理するモバイルウォレットアプリケーションとブラウザー拡張（部分的にオープンソース）。
- [WalletConnect](https://docs.reown.com/advanced/multichain/rpc-reference/stacks-rpc) - Wallet Connect（Reown）をStacksとともに利用する方法のドキュメント。

### Stacks Webアプリケーション

- [Hiro Explorer](https://explorer.hiro.so/?chain=mainnet) - Stacksブロックチェーン上の取引を確認するアプリケーション。
- [STXER](https://stxer.xyz/) - Stacks取引向けのエクスプローラー、デバッガー、シミュレーター。
- [Send Many](https://sendstx.com) - 一回の取引でSTXなどのトークンを多数の受取人へ送るアプリケーション。
- [Speed Spend](https://speed-spend.org) - テストネット上で動作するClarity実験のスイート（[ソース](https://github.com/friedger/speed-spend)）。
- [Blocksurvey](https://blocksurvey.io) - データ所有権とプライバシーに焦点を置くAI駆動の調査プラットフォーム。
- [AIBTC](https://aibtc.com/) - 測定可能なタスクに取り組むAIエージェントの協調ネットワーク。
- [FatStx](https://fatstx.github.io/) - たとえば税申告に使える年間取引ビューアー。

### ブロックチェーン命名システム

- [BNS V2](https://www.bnsv2.com/) - 取引履歴と分析を備えた、Stacks上のすべてのブロックチェーン名前空間のハブ。
- [btc.us](https://btc.us) - .btc名向けアプリケーション。
- [Owl.link](https://owl.link) - BNS名のリンクページを作成するアプリケーション。

### DeFi

- [Bitflow](https://www.bitflow.finance/) - 分散型取引所。
- [Velar](https://www.velar.co/) - 主要なBitcoin L2上でのスワップ、取引、資産立ち上げ。
- [Zest Protocol](https://www.zestprotocol.com/) - BitcoinとStacks上の分散型借入・貸付。
- [FakFun](https://fak.fun) - Bitcoin上に構築されたミームコインの交換、立ち上げ、ラッピング用プラットフォーム。
- [Alex Lab](https://app.alexlab.co) - DeFi向けサービスプラットフォーム。
- [Arkadiko Protocol](https://arkadiko.finance) - 自己返済型ローンに基づくステーブルコイン（USDA）。
- [Granite](https://granite.world/) - Bitcoinを担保に借りるための、ノンカストディアルで安全かつ分散型のBitcoin流動性プロトコル。
- [BSD](https://www.bsd.money/) - 過剰担保型貸付モデルでBitcoinに裏付けられた合成デジタルドル。
- [USDh](https://app.hermetica.fi) - ショート無期限先物ポジションと機関級カストディアンを用いる、Bitcoin裏付けの利回り付き合成ドル。
- [STXTools](https://stxtools.io/) - Stacks上のDeFi向けチャート、取引、価格アラート。
- [Stacks Pulse](https://www.stackspulse.com/) - Stacks DeFiのリアルタイム・オンチェーン統計。
- [Signal21](https://signal21.io/) - Bitcoin L1、L2、Dapps向けオンチェーン分析。
- [Lydian](https://app.lydian.xyz) - 分散型財務管理プロトコル（提供終了）。
- [CityCoins](https://minecitycoins.com) - 都市向けトークン（終了段階）。

### ゲーム

- [Stacks Degens](https://stacksdegens.com) - NFTで実現するレトログラフィックのカーレースゲーム。
- [Project Indigo](https://www.projectindigonft.com) - インタラクティブなストーリーとRPG体験。

### スタッキングアプリ

- [Stacking on Leather](https://app.leather.io/stacking) - Stacksトークンを直接またはプールでスタックするアプリ。
- [Fast pool](https://fastpool.org/) - 信頼を最小化したスタッキングプール。
- [PlanBetter pool](https://planbetter.com/) - Bitcoin報酬付きスタッキングプール。
- [Xverse pool](https://pool.xverse.app/) - Xverseモバイルアプリに組み込まれたスタッキングプール。
- [Stacking DAO](https://www.stackingdao.com/) - Stacks上の流動的スタッキング。
- [Lisa](https://app.lisalab.io) - リベースを使うStacks上の流動的スタッキング。
- [Stacking Tracker](https://stacking-tracker.com) - スタッキングと履歴データの概要（[ソースコード](https://github.com/StackingDAO/stacking-tracker)）。

## Clarityリソース

### 開発者ツール

- [Clarinet](https://github.com/hirosystems/clarinet) - CLIとしてパッケージ化されたClarityランタイム。Clarityスマートコントラクトの開発とテストを容易にする。
- [Clarigen](https://github.com/obylabs/clarigen) - Clarityスマートコントラクトと対話するTypeScriptコードを書くためのツール。
- [clarity.tools](https://clarity.tools) - ブラウザー内Clarity REPL。
- [ClarityGPT Prompt](https://claritygpt.com/) - チャットボットでスマートコントラクトを書く。
- [Hiro Platform](https://platform.hiro.so/) - ブラウザー内IDE。
- [secondlayer](https://github.com/ryanwaits/secondlayer) - Reactフックとテストユーティリティを備える、Clarityコントラクト向けTypeScriptコード生成。Clarigenに着想を得ている。

### コントラクト例

- [Source of Clarity](https://source-of-clarity.com) - 一部コメント付きでメインネットにデプロイされたすべてのClarityコントラクトの一覧。
- [Example Contracts](https://github.com/hirosystems/clarity-examples) - 独自のコントラクトを書く出発点となるサンプルスマートコントラクト集。
- [Audited Example Smart Contracts](https://github.com/clarity-lang/book/tree/main/projects) - セキュリティ監査済みの別のスマートコントラクト例コレクション。

### ライブラリとプロトコル

- [blaze](https://gist.github.com/r0zar/414e91d3e6769644981b4918141a1708) - 署名ベースの認可プロトコル。
- [uint256](https://github.com/KStasi/clarity-uint256-lib) - 値を256ビットへ変換するライブラリ。
- [clarity-bitcoin](https://github.com/friedger/clarity-bitcoin) - Bitcoin取引を検証するライブラリ。
- [STX20](https://github.com/fess-v/stx20-standard) - Stacks上でデジタルアーティファクトを作成・共有するプロトコル。

### コントラクト

- [CityCoin](https://github.com/citycoins/citycoin) - STX転送を使い比例確率で新しいコインをミントするPoX liteの実装。
- [SWAPR](https://github.com/psq/swapr) - Stacks 2.0およびClarity上のUniswap風実装。
- [FLEXR](https://github.com/psq/flexr) - Stacks向けのAmpleforth解釈。
- [ClarityDAO](https://github.com/friedger/clarity-dao) - ClarityにおけるMoloch DAOの変換実装。
- [NFT Marketplace](https://github.com/friedger/clarity-marketplace/blob/master/contracts/market.clar) - 取引可能な資産のマーケットプレイス用Clarityスマートコントラクト。
- [StackStarter](https://github.com/MarvinJanssen/stackstarter/blob/master/contracts/stackstarter.clar) - クラウドファンディング向けClarityスマートコントラクト。
- [Lightning Swaps](https://github.com/radicleart/clarity-rstack/blob/master/contracts/lightning-swaps-v1.clar) - Lightning Networkを使う不正防止スワップ。
- [Election Voting](https://github.com/elbaruni/clarity-election/blob/master/contracts/election.clar) - Clarityを用いる候補者向け基本投票。
- [DualX](https://github.com/westridgeblockchain/dualX) - 取引のためのDeFiエコシステムを実装するClarityコントラクト集。
- [ExecutorDAO](https://github.com/MarvinJanssen/executor-dao) - スマートコントラクトへDAO機能を組み込むClarityフレームワーク。
- [Digital Will](https://github.com/LoRdSoban/Cryptonomers) - 条件付き資金移転。
- [MultiSafe](https://github.com/Trust-Machines/multisafe) - Stacks（STX）とBitcoin（BTC）を管理する共有暗号資産保管庫。
- [Charisma](https://github.com/pointblankdev/dungeon-master) - Stacksブロックチェーン上でコミュニティが運営するミームコインDAO。

### 非代替性トークン

- [This is #1](https://www.thisisnumberone.com) - BitcoinとStacksブロックチェーン上に構築された最初のプロフェッショナルNFT（[コントラクト](https://explorer.hiro.so/txid/SP3QSAJQ4EA8WXEDSRRKMZZ29NH91VZ6C5X88FGZQ.thisisnumberone-v2?chain=mainnet)）。
- [Smart Contract GPT](https://github.com/Markeljan/stxgpt) - SIP-009コントラクトを作成するよう訓練されたチャットボット。

### 代替性トークン

- [Nothing](https://nothingtoken.xyz/) - 何もしない代替性トークン（[コントラクト](https://explorer.hiro.so/txid/SP32AEEF6WW5Y0NMJ1S8SBSZDAY8R5J32NBZFPKKZ.nope?chain=mainnet)）。

### スタッキング

- [Stacking Pools](https://github.com/friedger/clarity-stacking-pools) - スタッキングプール向けPoXのラッパーコントラクト。
- [Stacks Pools](https://github.com/degen-lab/stacks-pools) - 分散型スタッキングプール。

## アプリ開発

### クライアントライブラリ

- [Stacks.js](https://github.com/stx-labs/stacks.js) - Stacksブロックチェーンと対話するJavaScriptライブラリのモノレポ。
- [stacks.rs](https://github.com/52/stacks.rs) - Stacksブロックチェーンと対話するRustツールキット。
- [stacks.py](https://github.com/rohitverma007/stackspy) - Stacksブロックチェーンと対話するPythonライブラリ。
- [go-stacks](https://github.com/cbadawi/go-stacks) - stacksブロックチェーンと対話するGolang SDK。
- [x402 Stacks](https://www.x402stacks.xyz) - Stacksブロックチェーン上に支払いゲート付きAPIを構築するプロトコルとSDK。
- [Stacks Connect](https://github.com/stx-labs/connect) - アプリをStacksアカウントへ接続するライブラリ。
- [Sign-In With Stacks](https://github.com/pradel/sign-in-with-stacks/) - Sign-In with Stacksメッセージを作成・検証するライブラリ。

### CLI

- [@stacks/cli](https://github.com/stx-labs/stacks.js/tree/main/packages/cli) - 認証、ストレージ、取引と対話するためのコマンドラインインターフェース。

### インデックス・クエリーAPI

- [Stacks API](https://www.hiro.so/stacks-api) - ブロックチェーンと直接対話し、情報照会、取引ブロードキャスト、Stacks上でのプロジェクト拡張を行うホスト型API。
- [Quicknode](https://www.quicknode.com/chains/stx) - Quicknodeを使いStacksへ素早く簡単に接続するためのホスト型エンドポイント。
- [Self-Hosted Render](https://github.com/stacksfoundation/render-stacks) - Render上でStacksノードをセルフホストするワンクリックデプロイツール。
- [Self-Hosted Digital Ocean](https://marketplace.digitalocean.com/apps/stacks-blockchain) - Stacksノードを実行するDigital Ocean droplet。
- [Self-Hosted Docker](https://github.com/stacks-network/stacks-blockchain-docker) - DockerでセルフホストのStacksノードを実行するツール。
- [Stacks Monitoring](https://github.com/alexlmiller/stacks-monitoring) - Stacksノード向けGrafanaダッシュボード。

## 学習リソース

### ドキュメント

- [Official Stacks documentation](https://docs.stacks.co/) - Clarityの学習とStacksアプリ開発のためのドキュメントおよび開発者チュートリアル。
- [Hiro documentation](https://docs.hiro.so/) - 開発者に焦点を当てたドキュメント。
- [Stacks 101](https://stacks101.com) - コミュニティがキュレーションするSTX知識。

### 動画

- [Clarity 101](https://youtu.be/lXJutQqDq3w) - Clarityの設計原則の基礎を学ぶ。
- [Developer Registry 101](https://www.crowdcast.io/e/clarity-program) - Clarityスマートコントラクトをゼロから構築する方法を学ぶ。
- [How Clarity Prevents Common Smart Contract Vulnerabilities](https://www.youtube.com/watch?v=VYXhrwPsBws) - Clarityのセキュリティ原則の説明。
- [Proof of Transfer Whitepaper Reading with Muneeb Ali](https://www.youtube.com/watch?v=NY_eUrIcWOY&t=3s) - 著者によるProof of Transfer（PoX）ホワイトペーパーの概要。
- [Web3 for Bitcoin](https://www.crowdcast.io/e/web3-for-bitcoin/) - Stacks、その解決する問題、Bitcoinへのスマートコントラクト機能の導入、構築の始め方の概要。
- [Why Build on Stacks](https://www.youtube.com/watch?v=WaTMCremGwE) - Web3開発者が他のブロックチェーンプロトコルよりStacks上で構築したいと思う理由の概要。

### 文書チュートリアル

- [Bitcoin Primer](https://docs.stacks.co/tutorials/bitcoin-primer/introduction) - Bitcoin上でフルスタックDappsを構築する入門。
- [Understanding Stacks Post Conditions](https://dev.to/stacks/understanding-stacks-post-conditions-e65) - StacksのPost Conditionsを理解し利用するガイド。
- [Test-Driven Stacks Development with Clarinet](https://dev.to/stacks/test-driven-stacks-development-with-clarinet-2e4i) - ClarinetをテストとTDDに活用する方法を示すチュートリアル。
- [Build a DEX with Stacks](https://www.pointer.gg/tutorials/build-a-dex-with-stacks/56abb3a4-05c1-4608-b096-f82189e9f759) - フルスタック分散型取引所の構築を通じたStacks利用の詳細な導入。
- [Build a Stacks app with Remix](https://micro-stacks.dev/guides/with-remix) - Remix JSフレームワークとMicro-Stacksを使い、サーバーサイドレンダリングされたStacksアプリを作る方法。
- [Build a Stacks app with Next.js](https://micro-stacks.dev/guides/with-nextjs) - 上記Remixチュートリアルに似た、Next.jsとMicro-Stacksを使うチュートリアル。
- [Creating a Voting Contract](https://www.clearness.dev/01-voting-clarity-smart-contract/01-getting-started) - Clarityを使いシンプルな投票スマートコントラクトを作る方法を示す複数部構成のシリーズ。
- [Building an NFT with Stacks and Clarity](https://blog.developerdao.com/building-an-nft-with-stacks-and-clarity) - SIP-009標準を活用してClarityでNFTを作成する。
- [Order Book Contract Walkthrough](https://byzantion.hiro.so/) - Clarityで構築したオーダーブック・スマートコントラクトの解説。
- [NFT Tutorial](https://docs.hiro.so/tutorials/clarity-nft) - ClarityでNFTを作成する。

### 書籍

- [Clarity of Mind](https://book.clarity-lang.org/) - 予測可能で生産的なスマートコントラクトを書く。 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

### コース

- [Clarity Universe](https://clarity-lang.org/universe) - 自習コースまたは6週間の指導付きコホートとして提供される、包括的なClarity開発コース。

## コミュニティ

- [Discord](https://discord.gg/zrvWsQC) - StacksエコシステムのDiscord。
- [Twitter](https://twitter.com/stacks) - StacksエコシステムのTwitter。
- [YouTube](https://www.youtube.com/c/Blockstack) - StacksエコシステムのYouTube。
- [Official Stacks Forum](https://forum.stacks.org/) - Stacksコミュニティフォーラム。
- [r/stacks](https://www.reddit.com/r/stacks) - Stacksのsubreddit。

## 貢献

このリストへのコミュニティ貢献を歓迎します。貢献する前に[貢献ガイドライン](https://github.com/friedger/awesome-stacks-chain/blob/fd4cbc5fa6116652e62b3b29ecf2f266e447e090/contributing.md)をお読みください。
