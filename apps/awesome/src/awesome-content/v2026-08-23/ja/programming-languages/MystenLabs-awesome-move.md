---
title: "Awesome Move"
description: "Moveを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-MystenLabs-awesome-move-readme-md"
---

# Awesome Move

Moveを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [概要](#overview)
- [Moveを利用するブロックチェーン](#move-powered-blockchains)
- [書籍](#books)
- [チュートリアル](#tutorials)
- [コミュニティ](#community)
- [コード](#code)
  - [代替可能トークン](#fungible-tokens)
  - [非代替性トークン](#non-fungible-tokens)
  - [分散型アイデンティティ](#decentralized-identity)
  - [DeFi](#defi)
  - [SocialFi](#socialfi)
  - [オンチェーンガバナンス](#on-chain-governance)
  - [クロスチェーンブリッジ](#cross-chain-bridge)
  - [アカウント](#accounts)
  - [フレームワーク](#frameworks)
  - [ライブラリ](#libraries)
  - [その他](#miscellaneous)
- [ツール](#tools)
- [IDEs](#ides)
- [パッケージマネージャー](#package-managers)
- [ウォレット](#wallets)
- [SDKs](#sdks)
- [論文](#papers)
  - [言語設計](#language-design)
  - [静的解析と検証](#static-analysis-and-verification)
- [動画](#videos)
- [スライド](#slides)
- [ポッドキャスト](#podcasts)
- [ブログ記事](#blog-posts)
- [セキュリティ](#security)

<a id="overview"></a>
## 概要

- [Installation](https://github.com/move-language/move/tree/main/language/tools/move-cli#installation)
- [Problem Statement](https://github.com/mystenlabs/awesome-move/blob/main/docs/problem_statement.md#problem-statement)

<a id="move-powered-blockchains"></a>
## Moveを利用するブロックチェーン

- [Sui](https://github.com/MystenLabs/sui) - 高スループット、低レイテンシー、Moveによる資産指向プログラミングモデルを備えた次世代スマートコントラクトプラットフォーム（[開発ネット](https://medium.com/mysten-labs/sui-devnet-public-release-a2be304ff36b)）。
- [0L](https://github.com/OLSF/libra) - 中立的な複製状態機械の参照実装。Libra／Diem技術から派生（[メインネット](https://0l.network/)）。
- [Starcoin](https://github.com/starcoinorg/starcoin) - レイヤー化によって拡張するスマートコントラクト・ブロックチェーンネットワーク（[メインネット](https://stcscan.io/)）。
- [Aptos](https://github.com/aptos-labs/aptos-core) - 安全でスケーラブルなレイヤー1ブロックチェーンを目指す実装（[メインネット](https://explorer.aptoslabs.com/?network=mainnet)）。
- [Pontem](https://github.com/pontem-network/pontem) - MoveVMを搭載したSubstrateベースのパラチェーン（[テストネット](https://polkadot.js.org/apps/?rpc=wss://testnet.pontem.network/ws#/explorer)）。
- [Celo](https://github.com/celo-org/celo-blockchain) - EVMとMoveVMを備えたブロックチェーン（[近日対応](https://www.businesswire.com/news/home/20210921006104/en/Celo-Sets-Sights-On-Becoming-Fastest-EVM-Chain-Through-Collaboration-With-Mysten-Labs)）。
- [Diem](https://github.com/diem/diem) - Metaが開発した元祖Moveベースのブロックチェーン（旧FacebookのLibra、開発終了）。
- [ChainX](https://github.com/chainx-org/ChainX) - WASMとEVMに対応し、MoveVMにも対応するBitcoinレイヤー2スマートコントラクトネットワーク（[メインネット](https://scan.chainx.org)）。

<a id="books"></a>
## 書籍

- [Move Book](https://move-language.github.io/move/) - Moveコアチームが保守するMoveの書籍（[中国語](https://github.com/move-language/move/tree/main/language/documentation/book/translations/move-book-zh)）。
- [Move Book](https://move-book.com/) - [@damirka](https://github.com/damirka)が保守するMoveの書籍（[中国語](https://move-book.com/cn/)）。
- [Move Patterns](https://www.move-patterns.com/) - Moveソフトウェア設計パターンに関する書籍を[@villesundell](https://github.com/villesundell)が維持。
- [Sui Move by Example](https://examples.sui.io/) - SuiのMove変種に関する書籍を[@MystenLabs](https://github.com/MystenLabs)が維持。

<a id="tutorials"></a>
## チュートリアル

- [Implementing, testing, and verifying a fungible token](https://github.com/move-language/move/tree/main/language/documentation/tutorial) - Moveコアチームが維持。
- [Programming with objects](https://docs.sui.io/build/programming-with-objects) - Suiチームが維持。
- [Move and SmartContract Development](https://starcoinorg.github.io/starcoin-cookbook/docs/move/) - Starcoinチームが維持。
- [Move Language](https://imcoding.online/courses/move-language) - 誰でも無料で利用できる対話型Move言語コース。[imcoding.online](https://imcoding.online)が保守（[中国語](https://imcoding.online/courses/move-language?lng=zh)）。

<a id="community"></a>
## コミュニティ

- [Move Language Discord](https://discord.gg/cPUmhe24Mz)
- [Move @ Sui by Mysten Labs Discord](https://discord.gg/sui)
- [Move @ 0L Discord](https://discord.gg/0lnetwork)
- [Move @ Starcoin Discord](https://discord.gg/starcoin)
- [Move @ Aptos Discord](https://discord.gg/aptoslabs)
- [MoveChina](https://move-china.com) - 中国におけるMoveプログラミング言語の最大コミュニティ。

<a id="code"></a>
## コード

Moveで書かれたコード。

<a id="fungible-tokens"></a>
### 代替可能トークン

- [Fungible token examples](https://github.com/MystenLabs/sui/tree/main/sui_programmability/examples/fungible_tokens) - Suiから提供される複数のトークン実装例。
- [BasicCoin](https://github.com/move-language/move/tree/main/language/documentation/examples/experimental/basic-coin) - [ERC20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)に似た機能を持つ仮想トークンの実装例。
- [Diem](https://github.com/OLSF/libra/blob/main/language/diem-framework/modules/Diem.move) - 許可された発行・消去を備えたERC20に類するトークン。この[spec](https://github.com/diem/dip/blob/main/dips/dip-20.md)も参照。0L上でデプロイ。
- [Token](https://github.com/starcoinorg/starcoin-framework/blob/main/sources/Token.move) - 別の ERC20 風トークン。スタークォイン上でデプロイ。
- [GAS](https://github.com/OLSF/libra/blob/main/language/diem-framework/modules/0L/GAS.move) - ダイム標準をインスタンス化したトークン。0L上でデプロイ。
- [STC](https://github.com/starcoinorg/starcoin-framework/blob/main/sources/STC.move) - スタークォイン標準をインスタンス化したトークン。スタークォイン上でデプロイ。
- [STAR](https://github.com/Elements-Studio/starswap-core/blob/master/sources/gov/STAR.move) - AMM＋DEXエコシステムを支えるStarswap dAppのガバナンストークン。Starcoin上にデプロイ。
- [XUSDT](https://github.com/Elements-Studio/poly-stc-contracts/blob/master/sources/asset/erc20/XUSDT.move) - Starcoin上のUSDTマップドアセット。
- [XETH](https://github.com/Elements-Studio/poly-stc-contracts/blob/master/sources/asset/erc20/XETH.move) - Starcoin上のETHマップドアセット。
- [WEN stablecoin](https://github.com/wenwenprotocol/wen-protocol) - スタークォイン上でデプロイ。
- [FAI stablecoin](https://github.com/BFlyFinance/FAI) - 過剰担保型の安定通貨。スタークォイン上でデプロイ。
- [FLY stablecoin](https://github.com/BFlyFinance/FLY) - フォークされたOHMの実装。スタークォイン上でデプロイ。
- [Synthetic token backed by a basket containing a reserve of other tokens](https://github.com/OLSF/libra/blob/main/language/diem-framework/modules/XDX.move) - ダイムから。
- [XBTC](https://github.com/OmniBTC/OmniBridge/blob/main/aptos/bridge/sources/xbtc.move) - Aptos上のBTCミラー資産。
- [XBTC](https://github.com/OmniBTC/OmniBridge/blob/main/sui/bridge/sources/xbtc.move) - Sui上のBTCミラー資産。

<a id="non-fungible-tokens"></a>
### 非代替性トークン

- [NFT examples](https://github.com/MystenLabs/sui/tree/main/sui_programmability/examples/nfts) - Suiからの複数NFTの例実装。
- [NFT](https://github.com/starcoinorg/starcoin-framework/blob/main/sources/NFT.move) - ERC721風トークン。スタークォイン上でデプロイ。
- [Merkle Airdrop](https://github.com/starcoinorg/starcoin-framework/blob/main/sources/MerkleNFT.move) - 大量のNFTをエアドロップするためのユーティリティ。スタークォイン上でデプロイ。
- [NFT](https://github.com/diem/diem/blob/main/diem-move/diem-framework/experimental/sources/NFT.move) - ハイブリッドERC721/ERC1155風トークンの実装。ダイムから。
- [BARS](https://github.com/diem/diem/blob/main/diem-move/diem-framework/experimental/sources/BARS.move) - このハイブリッド標準をインスタンス化したNFT。ダイムから。
- [MultiToken](https://github.com/diem/diem/blob/main/diem-move/diem-framework/experimental/sources/MultiToken.move) - ERC1155風トークン。ダイムから。
- [NFTGallery](https://github.com/diem/diem/blob/main/diem-move/diem-framework/experimental/sources/NFTGallery.move) - 複数の同じタイプのNFTを保有するためのユーティリティ。ダイムから。
- [NFT Protocol](https://github.com/Origin-Byte/nft-protocol) - NFTプロトコルおよびコレクションフレームワーク。OriginByteから。
- [Suia](https://github.com/Mynft/suia) - スイネットワーク上での最初のPOAPアプリケーション

<a id="decentralized-identity"></a>
### 分散型アイデンティティ
- [aptos-cid](https://github.com/coming-chat/aptos-cid) - コインイングチャットの基本となるアカウントシステムであるアプトスにおける分散型識別情報
- [MoveDID](https://github.com/NonceGeek/MoveDID) - MoveDIDは、Aptos、スイ、スタークォインなどMoveベースのブロックチェーンネットワークに適合するDIDプロトコルであり、[NonceGeek](https://github.com/NonceGeek)によって維持されている


<a id="defi"></a>
### DeFi

- [DeFi examples](https://github.com/MystenLabs/sui/tree/main/sui_programmability/examples/defi) - スイネットワーク上の複数のDeFi実装例
- [CoinSwap](https://github.com/move-language/move/tree/main/language/documentation/examples/experimental/coin-swap) - トークン2種を含む、風のリクエストプールの玩具的な実装 [Uniswap](https://uniswap.org/)
- [Starswap](https://github.com/Elements-Studio/starswap-core) - ユニスワップ風のDEX。スタークォインにデプロイされている
- [Offer](https://github.com/move-language/move/blob/main/language/move-stdlib/nursery/sources/offer.move) - 任意の資産ペア間の原子的交換の一般実装
- [AptosRedPacket](https://github.com/coming-chat/aptos-red-packet) - アプトス上でプライベートチャットと暗号化されたウォレットを組み合わせた赤包ソーシャルアプリ
- [SuiRedPacket](https://github.com/coming-chat/sui-red-packet) - スイネットワーク上でプライベートチャットと暗号化されたウォレットを組み合わせた赤包ソーシャルアプリ
- [AptosAMMswap](https://github.com/OmniBTC/Aptos-AMM-swap) - オミンブイチチームが開発したアプトスAMMスワップ
- [SuiAMMswap](https://github.com/OmniBTC/Sui-AMM-swap) - オミンブイチチームが開発したスイAMMスワップ
- [AptosOmniSwap](https://github.com/OmniBTC/OmniSwap/tree/main/aptos) - クロスチェーン相互運用プロトコルウォームホールに基づく、アプトスとEVMチェーン（ETH/BSC/AVAXなど）間のワンクリックスワップ
- [DolaProtocol](https://github.com/OmniBTC/DolaProtocol) - 単一コインプールを核として、ウォームホール、レイヤーゼロなどのクロスチェーンメッセージングプロトコルをブリッジとし、スイ公開チェーンを決済センターとする、分散型オムチーンリクエスト集約プロトコル
- [ObjectMarket](https://github.com/coming-chat/object-market) - スイネットワーク上のユニークオブジェクト取引マーケットプレイス

<a id="socialfi"></a>
### SocialFi
- [Dmens](https://github.com/coming-chat/Dmens) - スイネットワーク上で構築されたブロックチェーンTwitterプロトコルであるデジタルモーメント

<a id="on-chain-governance"></a>
### オンチェーンガバナンス

- [ValidatorUniverse](https://github.com/OLSF/libra/blob/main/language/diem-framework/modules/0L/ValidatorUniverse.move) - バリデーターセットの管理。0Lにデプロイされている
- [Oracle](https://github.com/OLSF/libra/blob/main/language/diem-framework/modules/0L/Oracle.move) - オンチェーンコミュニティ投票用。0Lにデプロイされている
- [DAO](https://github.com/starcoinorg/starcoin-framework/blob/main/sources/Dao.move) - オンチェーン提言および投票用。スタークォインにデプロイされている
- [DiemSystem](https://github.com/diem/diem/blob/main/diem-move/diem-framework/DPN/sources/DiemSystem.move) - バリデーターセットの管理。ディームから
- [Vote](https://github.com/diem/diem/blob/main/diem-move/diem-framework/experimental/sources/Vote.move) - オンチェーン投票。ディームから

<a id="cross-chain-bridge"></a>
### クロスチェーンブリッジ

- [Poly Bridge](https://github.com/Elements-Studio/poly-stc-contracts) - MoveとEVM間の最初のクロスチェーンブリッジ。スタークォイン上でデプロイされている。
- [OmniBTC Bridge](https://github.com/OmniBTC/OmniBridge) - ビットコインとMove言語の公開チェーン（アプトスやスイなど）間のブリッジ。超軽量ノードをベースにしている。

<a id="accounts"></a>
### アカウント

- [Account](https://github.com/diem/diem/blob/main/diem-move/diem-framework/core/sources/Account.move) - ディエムを駆動するチェーン向けの一般アカウント。ディエムから。
- [DiemAccount](https://github.com/OLSF/libra/blob/main/language/diem-framework/modules/DiemAccount.move) - 上記実装のフォーク。0L由来。
- [Account](https://github.com/starcoinorg/starcoin-framework/blob/main/sources/Account.move) - 上記実装のフォーク。Starcoin由来。

<a id="frameworks"></a>
### フレームワーク

Moveの**フレームワーク**は、チェーンの生成状態に含まれるMoveモジュールの集合である。
これらのモジュールは、アカウント、通貨といった基本的な概念を実装するものが多い。
ブロックチェーン固有のフレームワークロジックを、Move言語の一般機能から分離できる点が、Moveのプラットフォームに依存しない設計の重要な部分である。

- [Sui Framework](https://github.com/MystenLabs/sui/tree/main/crates/sui-framework)
- [Aptos Framework](https://github.com/aptos-labs/aptos-core/tree/main/aptos-move/framework)
- [0L Framework](https://github.com/OLSF/libra/tree/main/language/diem-framework/modules/0L)
- [Starcoin Framework](https://github.com/starcoinorg/starcoin-framework)
- [Diem Framework](https://github.com/diem/diem/tree/main/diem-move/diem-framework/DPN)

<a id="libraries"></a>
### ライブラリ

- [Move standard library](https://github.com/move-language/move/tree/main/language/move-stdlib) - すべてのMoveを実行するプラットフォームで使用されるべき（ただし必須ではない）ユーティリティ。Moveリポジトリから。
- [Move nursery](https://github.com/move-language/move/tree/main/language/move-stdlib/nursery) - 標準ライブラリに進化する可能性のある実験的モジュール。Moveリポジトリから。
- [Decimal](https://github.com/OLSF/libra/blob/main/language/diem-framework/modules/0L/Decimal.move) - 小数値の効率的な実装。0Lから。
- [Math](https://github.com/starcoinorg/starcoin-framework/blob/main/sources/Math.move) - 数学ユーティリティ関数。スタークォインから。
- [Compare](https://github.com/move-language/move/blob/main/language/move-stdlib/nursery/sources/compare.move) - 多変数比較（つまり、同じ型の2つのMove値を比較）。ナーブリから。
- [Vault](https://github.com/move-language/move/blob/main/language/move-stdlib/nursery/sources/vault.move) - 能力に関するライブラリ。ナーブリから。
- [ACL](https://github.com/move-language/move/blob/main/language/move-stdlib/nursery/sources/acl.move) - リストベースのアクセス制御に関するライブラリ。ナーブリから。
- [TaoHe](https://github.com/taoheorg/taohe) - ネスト可能なMoveリソースを収集したコレクション。
- [Starcoin Framework Commons](https://github.com/starcoinorg/starcoin-framework-commons) - スタークォインフレームワーク上でMoveコモンズユーティリティを提供するライブラリ。スタークォインから。
- [Movemate](https://github.com/pentagonxyz/movemate) - アプトスおよびスイ向けのスマートコントラクトビルディングブロック（数学ユーティリティ、ガバナンスコントラクト、エスクローなど）。ペンタゴンチームが維持。
- [Move cron parser](https://github.com/snowflake-so/move-cron-parser#readme) - クロントレード表現をパースするためのライブラリ。スノーフレークネットワークチームが維持。

<a id="miscellaneous"></a>
### その他

- [Move-on-EVM](https://github.com/move-language/move/tree/main/language/evm) - MoveソースコードをEVMバイナリコードにコンパイルするための実験プロジェクト。
- [aoc-move](https://github.com/whonore/aoc-move) - Moveで書かれたアドベンチャーコードの解決策に、一部の形式的検証を含む。

<a id="tools"></a>
## ツール

- [Move Package Manager](https://github.com/move-language/move/tree/main/language/tools/move-cli) - Move向けの `cargo` または `npm` に似たもの：Moveの構築、実行、テスト、デバッグ、検証を行うための1つのCLI（およびその他のツールに接続するためのRust API）。 [packages](https://move-language.github.io/move/)。Moveコアチームが維持。
- [Move Prover](https://github.com/move-language/move/tree/main/language/move-prover) - Moveソースコードで記述されたユーザー定義仕様の形式的検証。Moveコアチームが維持。
- [Move Read/Write Set Analyzer](https://github.com/move-language/move/tree/main/language/tools/read-write-set) - Moveプログラムが触れるグローバルメモリの上界を計算するための静的解析ツール。Move核心チームが維持している。
- [Move Playground JS Library](https://github.com/imcoding-online/js-move-playground) - ブラウザ向けのJavaScriptライブラリとして[Move Playground by Pontem](https://playground.pontem.network/)をラップ。自作のMove Playgroundを構築できる。
- [go-sui-indexer](https://github.com/coming-chat/go-sui-indexer) - Suiノードからデータを提供するオフフルノードサービス。

<a id="ides"></a>
## IDE

- [Move VS Code plugin](https://marketplace.visualstudio.com/items?itemName=move.move-analyzer) - Move核心チーム（[source code](https://github.com/move-language/move/tree/main/language/move-analyzer)）が維持している。
- [Move IntelliJ plugin](https://plugins.jetbrains.com/plugin/14721-move-language) - Pontemチーム（[source code](https://github.com/pontem-network/intellij-move)）が維持している。
- [Move Playground](https://playground.pontem.network/) - Move用の[Remix](https://remix.ethereum.org/)に似たもの。Web IDEのアルファ版。[instructions](https://gist.github.com/borispovod/64b6d23741d8c1f4b0b958a3a74aa68d)を参照。Pontemチームが維持している。
- [Starcoin IDE](https://marketplace.visualstudio.com/items?itemName=starcoinorg.starcoin-ide) - Starcoinチーム（[source code](https://github.com/starcoinorg/starcoin-ide)）が維持している。
- [Move Vim](https://github.com/rvmelkonian/move.vim) - [@rvmelkonian](https://github.com/rvmelkonian/)が維持している。
- [move-mode](https://github.com/amnn/move-mode) - Emacs用のマジョーム。[@amnn](https://github.com/amnn/)が維持している。

<a id="package-managers"></a>
## パッケージマネージャー
- [Movey](https://www.movey.net/) - Moveパッケージのcrates.ioスタイルのリポジトリ。

<a id="wallets"></a>
## ウォレット

- [StarMask](https://github.com/starcoinorg/starmask-extension) - Starcoinブロックチェーン用のウォレット。Starcoinチーム（[Chrome Webstore](https://chrome.google.com/webstore/detail/starmask/mfhbebgoclkghebffdldpobeajmbecfk?hl=en)）が維持している。
- [Sui Wallet](https://github.com/MystenLabs/sui/tree/main/apps/wallet) - Sui（[Chrome Webstore](https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil)）向けのChrome（v88以降）拡張機能ウォレット。
- [Pontem Wallet](https://github.com/pontem-network/pontem-wallet) - Pontemチーム（[Chrome Webstore](https://chrome.google.com/webstore/detail/pontem-wallet/phkbamefinggmakgklpkljjmgibohnba)）が開発するAptosネットワーク向けウォレット拡張機能。
- [Fewcha Aptos Wallet](https://github.com/fewcha-wallet/fewcha.app) - レイヤー1ブロックチェーンAptos（[Chrome Webstore](https://chrome.google.com/webstore/detail/fewcha-aptos-wallet/ebfidpplhabeedpnhjnobghokpiioolj)）のウォレット。
- [bcs-js](https://github.com/pontem-network/lcs-js) - Moveが使用する[BCS](https://github.com/diem/bcs)シリアル化スキームのJavaScript実装。ウォレット実装に役立つ可能性がある。
- [ComingChat](https://coming.chat/) - 分散型ソーシャルフィナンス／Web3ポータル。SuiやAptosなどの公開チェーンウォレットをサポート。
- [Suiet Wallet](https://github.com/suiet/suiet) - Sui向けオープンソースウォレット。（[Chrome Webstore](https://chrome.google.com/webstore/detail/suiet/khpkpbbcccdmmclmpigdgddabeilkdpd), [Website](https://suiet.app)）
- [Ethos Wallet](https://github.com/EthosWallet/chrome-extension) - Sui向けオープンソースChrome拡張機能ウォレット。（[Chrome Webstore](https://chrome.google.com/webstore/detail/ethos-sui-wallet/mcbigmjiafegjnnogedioegffbooigli), [Website](https://ethoswallet.xyz/)）

<a id="wallet-adapters"></a>
### ウォレットアダプター

- [Sui Wallet](https://github.com/MystenLabs/sui/tree/main/sdk/wallet-adapter) - Suiウォレットアダプタ。
- [Suiet Wallet](https://github.com/suiet/wallet-adapter) - Suietウォレットアダプタ。

<a id="wallet-kits"></a>
### ウォレットキット

- [Suiet Wallet Kit](https://github.com/suiet/wallet-kit) - パッケージはすべてのSuiウォレットに対応し、カスタマイズ可能なUIを提供します。
- [Ethos Connect](https://github.com/EthosWallet/ethos-connect) - Sui上ですべてのウォレットとウォレットなしユーザーをサポートするための、内蔵されたウォレットアダプタとメールオプションを備えたUI。

<a id="sdks"></a>
## SDK

<a id="sui-sdks"></a>
### Sui SDK
- [Rust SDK](https://docs.sui.io/devnet/build/rust-sdk) (公式)
- [TS/JS SDK](https://github.com/MystenLabs/sui/tree/main/sdk/typescript) (公式)
- [Golang SDK 1](https://github.com/coming-chat/go-sui-sdk) (コミュニティ)
- [Golang SDK 2](https://github.com/block-vision/sui-go-sdk) (コミュニティ)
- [Python SDK](https://github.com/FrankC01/pysui) (コミュニティ)
- [Java SDK](https://github.com/GrapeBaBa/sui4j) (コミュニティ)
- [Kotlin SDK](https://github.com/cosmostation/suikotlin) (コミュニティ)
- [C# SDK](https://github.com/naami-finance/SuiNet) (コミュニティ)

<a id="sui-dapps-sdks"></a>
### Sui dApp SDK
- [OmniSwap-Sui-SDK](https://github.com/OmniBTC/OmniSwap-Sui-SDK) (コミュニティ)

<a id="other-network-sdks"></a>
### その他のネットワークSDK
- [Aptos Golang SDK](https://github.com/coming-chat/go-aptos-sdk) (コミュニティ)

<a id="papers"></a>
## 論文

<a id="language-design"></a>
### 言語設計

- [Move: A Language With Programmable Resources](https://developers.diem.com/papers/diem-move-a-language-with-programmable-resources/2019-06-18.pdf) - これは2018年に公開された最初のMoveの白書です。多くの項目は現在では古くなっています（たとえば、バイトコード指令の文法や説明）。しかし、最初の2つのセクションは、アセットをプログラムする難しさと、Moveがそれらをどのように解決しているかを説明しているため、読む価値があります。
- [Robust Safety for Move](https://arxiv.org/abs/2110.05043)
- [The Move Borrow Checker](https://arxiv.org/abs/2205.05181)
- [Resources: A Safe Language Abstraction for Money](https://arxiv.org/abs/2004.05106)

<a id="static-analysis-and-verification"></a>
### 静的解析と検証

- [Fast and Reliable Formal Verification of Smart Contracts with the Move Prover](https://arxiv.org/abs/2110.08362)
- [The Move Prover](https://research.facebook.com/publications/the-move-prover/)
- [Verification of Programs Written in Libra's Move Language](https://ethz.ch/content/dam/ethz/special-interest/infk/chair-program-method/pm/documents/Education/Theses/Constantin_M%C3%BCller_MS_Report.pdf)
- [Exact and Linear-Time Gas-Cost Analysis](https://research.facebook.com/publications/exact-and-linear-time-gas-cost-analysis/)

<a id="videos"></a>
## 動画

- [The Move Programming Language](https://youtu.be/J1U_0exNFu0)
- [Move on Sui](https://www.youtube.com/watch?v=xMsE1X4wio4)
- [Move on Aptos](https://www.youtube.com/watch?v=gvRJdJTQd8U)
- [Move: A Safe Language for Programming with Money](https://www.youtube.com/watch?v=EG2-7bQNPv4&ab_channel=FieldsInstitute) - [@sblackshear](https://github.com/sblackshear)における [Fields Institute Blockchain](http://www.fields.utoronto.ca/activities/seminar_series/blockchain-research-seminar-series)研究セミナーシリーズの発表。
- [Formal Verification of Move Programs for the Libra Blockchain](http://www.fields.utoronto.ca/talks/Formal-verification-Move-programs-Libra-blockchain) - [@DavidLDill](https://github.com/DavidLDill)における [Fields Institute Blockchain](http://www.fields.utoronto.ca/activities/seminar_series/blockchain-research-seminar-series)研究セミナーシリーズの発表。
- [Move for the Masses](https://www.youtube.com/watch?v=b_2jZ4YEfWc) - [Converge '22](https://converge.circle.com/event/4ea0d06f-3900-4b6d-a9cd-aeaedda9ef2e/summary)での講演。

<a id="slides"></a>
## スライド
- [Move deep dive](https://docs.google.com/presentation/d/1Tb2iZD0xrQSlwXIJNL1djNYc0_p0szfB2STgURgHgls/edit?usp=sharing)
- [Move overview](https://docs.google.com/presentation/d/1gU-M42Juz7ARc61unPXphJ_BX1OlQrBwR1VdaPT4M5w/edit?usp=sharing) - [Reasoning About Financial Systems](https://reasoningaboutfinancialsystems.org/)ワークショップのスライド。 [SBC '22](https://cbr.stanford.edu/sbc22/)

<a id="podcasts"></a>
## ポッドキャスト

- [Move and Sui with Sam Blackshear from Mysten Labs](https://zeroknowledge.fm/228-2/)
- [Move AMA covering Move origin story](https://twitter.com/i/spaces/1jMKgepNOleJL)

<a id="blog-posts"></a>
## ブログ記事
- [Comparing Move and Rust smart contract development](https://medium.com/@kklas/smart-contract-development-move-vs-rust-4d8f84754a8f)
- [Comparing Diem-style Move and Sui Move](https://sui.io/resources-move/why-we-created-sui-move)

<a id="security"></a>
## セキュリティ
- [Aptos-movevm Denial of Service Vulnerability](https://medium.com/numen-cyber-labs/analysis-of-the-first-critical-0-day-vulnerability-of-aptos-move-vm-8c1fd6c2b98e)

<a id="contributing"></a>
## 貢献

ご貢献を歓迎！まず [contribution guidelines](https://github.com/MystenLabs/awesome-move/blob/f7caa001474bfa8ba9a43b1eadc53395febc7ea5/CONTRIBUTING.md) を読んでください。
