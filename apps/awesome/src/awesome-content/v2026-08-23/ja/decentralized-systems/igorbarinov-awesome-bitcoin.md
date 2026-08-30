---
title: "igorbarinov/awesome-bitcoin"
description: "igorbarinov/awesome-bitcoin の正規スナップショット"
licenseSource: "github-igorbarinov-awesome-bitcoin-readme-md"
---

<a id="awesome-bitcoin"></a>
Awesome Bitcoin（ビットコイン）
===============
ソフトウェア開発者向けのBitcoinサービスとツールを厳選したリストです。
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

<a id="list-of-content"></a>
## 目次

- [ユーティリティ](#utilities)
- [ブロックチェーンAPIとWebサービス](#blockchain-api-and-web-services)
- [ウォレットAPI](#wallets-api)
- [オープンソースウォレット](#open-source-wallets)
- [ブロックチェーンエクスプローラー](#blockchain-explorers)
- [Cライブラリ](#c-libraries)
- [C++ライブラリ](#c-libraries-1)
- [JavaScriptライブラリ](#javascript-libraries)
- [PHPライブラリ](#php-libraries)
- [Rubyライブラリ](#ruby-libraries)
- [Pythonライブラリ](#python-libraries)
- [Javaライブラリ](#java-libraries)
- [Scalaライブラリ](#scala-libraries)
- [Swiftライブラリ](#swift-libraries)
- [.NETライブラリ](#net-libraries)
- [Haskellライブラリ](#haskell-libraries)
- [プレイグラウンド](#playgrounds)
- [ブロックチェーンダンプ](#blockchain-dump)
- [フルノード](#full-nodes)
- [読み物](#read)
- [コース](#course)
- [追加リソース](#additional-resources)


<a id="utilities"></a>
## ユーティリティ
* [Nigiri](https://github.com/vulpemventures/nigiri/) - ElectrsとEsploraを含むBitcoin regtest環境をすばやく起動するCLI。faucetとpushコマンドも備えています。
* [hal](https://github.com/stevenroose/hal) - rust-bitcoinを基盤とする多目的Bitcoin CLI。
* [BitKey](https://bitkey.io) - オフライン取引に利用できる多目的なBitcoin Live USB。
* [PaperVault](https://github.com/boazeb/papervault) - AES-250-GCMとシャミールの秘密共有を用いた、紙ベースの離線秘密保存。シードフレーズの閾値分割による印刷可能な暗号化バックアップを作成。
* [Pycoin](https://github.com/richardkiss/pycoin) - PythonベースのBitcoinおよびアルトコインユーティリティライブラリ。
* [bx](https://github.com/libbitcoin/libbitcoin-explorer) - Bitcoinコマンドラインツール。
* [Deadhand Protocol](https://deadhandprotocol.com) - 暗黙の死のスイッチ：シードフレーズをシャミールの秘密共有で保護し、継承を確保。
* [txwatcher](https://github.com/tsileo/txwatcher) - 小さなPythonユーティリティで、ブロックチェーンウェブソケットAPIを介してBitcoinアドレスを監視し、カスタムコールバックを実行。
* [hellobitcoin](https://github.com/prettymuchbryce/hellobitcoin) - シンプルなプログラムのコレクションで、Bitcoinウォレットを生成し、取引を作成・署名し、Bitcoinネットワーク上で取引を送信できる。
* [Mining visualization](https://yogh.io/landing/)
* [HD Wallet Scanner](https://github.com/alexk111/HD-Wallet-Scanner) - あなたのBitcoin HDウォレット内の使用済みアドレスをすべて見つける。ギャップ制限を回避。
* [`<qr-code>`](https://github.com/bitjson/qr-code) – フレームワークなし、依存関係なし、カスタマイズ可能でアニメーション可能なSVGベースの `<qr-code>` ワンウェブコンポーネント。
* [Bitcoin Serverless Donations](https://github.com/tombennet/bitcoin-serverless-donations) - XPUBから導出したアドレスをローテーションする、自己管理型のサーバーレス寄付ウィジェット。
* [BTC Tooling](https://github.com/douvy/btc-tooling) - リアルタイム価格データ、チャート、オーダーブック、市場要約、Twitter/Xの洞察、ハーフイングカウントダウンデータを含むBitcoinダッシュボード。 [Live Demo](https://www.btctooling.com/)
* [Chartscout](https://chartscout.io) - 複数の取引所でリアルタイムにBTCチャートパターンの検出と取引アラート。
* [Bitcoin Bottom Score](https://bitcoinbottom.app) - リアルタイムのBitcoinサイクルの底確率トラッカー。25のオンチェーンおよびマクロシグナル（MVRV Zスコア、プエル・マルチプル、ハッシュ・リボン、ETFフロー）を1日1回の更新で統合し、毎日P(底)スコアを算出。無料。
* [BTC Airgap Bridge](https://github.com/paranoid-qrypto/btc-airgap-bridge) - air-gappedウォレットから署名済みビットコイン取引をブロードキャストする100％クライアントサイドツール
* [SuperScalar MCP](https://github.com/8144225309/superscalar-mcp) - SuperScalarビットコインライトニングチャネルファクトリのMCPサーバー——1つの共有UTXOにNユーザーを onboard できる、ソフトフォール不要
* [Lightning Memory](https://github.com/singularityjason/lightning-memory) - ビットコイン／ライトニング経済におけるAIエージェント向けオープンソースメモリレイヤー。L402支払いゲートウェイ、ベンダーの信頼性、支出異常検出
* [CryptoCalk](https://cryptocalk.com) - ビットコインの利益性とオンチェーン計算ツール：ASIC／GPUマイニングROI、ハッシュレート変換器、ハーフイングカウントダウン、マイヤー倍率、ストックツーフロー（S2F）、レインボーチャート、利益／損失、DCAシミュレーター、税額推定ツール、リクエスト価格。クライアントサイド、サインアップ不要、6言語対応
* [Freedom Clock](https://freedomclock.io) - 売却、借入、借入後に売却の支出モデルを備えたビットコイン認識FIRE計算ツール。貯蓄とビットコイン保有額を財政的自由の年数に変換。完全にローカル、アカウント不要、MITライセンス。また、オープンソースe-inkデスクデバイス（約$30）も提供
* [dont-trust-verify](https://dont-trust-verify.com) - Bitcoin専用のクライアントサイドツールと自己管理教育。BIP-39検証、停止トランザクション確認、手数料見積もり、ウォレットインストーラーのSHA-256検証、自己管理スコアなど22種の計算・検証・デコードツールに加え、一次資料に基づくガイドとハードウェアウォレットレビューを提供します。登録・追跡はなく、英語とタイ語に対応します。

<a id="blockchain-api-and-web-services"></a>
## ブロックチェーンAPIとWebサービス
* [3xpl.com](https://3xpl.com/) - 最も速く、広告なしのユニバーサルブロックエクスプローラ
* [Bitquery.io](https://bitquery.io/) - Bitqueryはブロックチェーンデータを提供し、40以上のチェーン、NFT API、および資金流れ調査ツールを備えたリアルタイムストリーミングAPIを提供
* [block.io](https://block.io)
* [blockchair.com](https://blockchair.com/) - ユニバーサルブロックチェーンエクスプローラおよび検索エンジン
* [BlockCypher](https://www.blockcypher.com)
* [Esplora](https://github.com/Blockstream/esplora) - セルフホスト型ブロックチェーンエクスプローラ
* [Insight](https://insight.is)
* [Chain.com](https://chain.com)
* [Coinbase Wallet](https://wallet.coinbase.com/)
* [Chainradar API](https://github.com/yasaricli/chainradar-api) - ChainradarのブロックチェーンエクスプローラAPI
* [One-Time Address](https://github.com/alexk111/One-Time-Address) あなたのビットコインアドレスを共有するより良い方法
* [Cryptocurrency Alerting](https://cryptocurrencyalerting.com/blockchain-alerts.html) - ビットコインウォレット監視およびブロックチェーンアラート
* [BTC Connect](https://developers.particle.network/reference/introduction-to-btc-connect) - ビットコインレイヤー1およびレイヤー2ウォレット接続とアカウント抽象化の一元化
* [Tatum](https://tatum.io/blockchain-api) - Web3アプリケーションを構築するためのブロックチェーン開発プラットフォーム。Web3開発者向けのブロックチェーンデータAPIの標準
* [mempool.space](https://mempool.space/docs/api/rest) - オープンソースかつ自前で運用可能なREST、WebSocketおよびElectrum RPC API
* [Bitview](https://bitview.space/) - オープンソースのビットコインコアデータ抽出ツールおよび可視化ツール（＝FOSS Glassnode）
* [Maestro](https://www.gomaestro.org/) - リアルタイムブロックチェーンデータ、メモリプール監視、イベント通知をサポートする高性能ビットコインRPCおよびUTXOインデックスAPI
* [OnFinality](https://onfinality.io/en/networks/bitcoin) - dApp、ウォレット、アナリティクス、バックエンドサービス向けのビットコインRPCエンドポイントおよびAPIアクセス

<a id="market-data-api"></a>
## 市場データAPI
* [CoinGapRadar](https://coingapradar.com) - 9か国を対象としたリアルタイム暗号資産プレミアム追跡ツール。キムチプレミアムや地域間価格差を監視でき、無料で登録不要です。
* [CoinMetrics.io](https://docs.coinmetrics.io/) JSON形式のREST API（無料および有料）による市場データアクセス。またCSVデータファイルのダウンロードも可能
* [CoinPaprika](https://api.coinpaprika.com) 無料の暗号資産市場データAPI。12,000以上のコイン、350以上の取引所、ティッカー、OHLCV、歴史価格を提供。無料プランにはAPIキー不要
* [Messari.io](https://messari.io/api) JSON形式のREST API（無料および有料）による市場データ、ニュース、メトリクス、プロフィールなどへのアクセス
* [PreReason](https://www.prereason.com) - REST APIを介した事前分析されたビットコイン市場概要。BTC価格、ハッシュレート、難易度、採掘コスト、財務準備金（30社公開）およびビットコインを動かすマクロシグナル（FEDのバランスシート、M2、国債利回り）をカバー。トレンド方向、信頼度スコア、レジム分類を返すのではなく、原始データではなく、分析結果を提供。無料プランあり

<a id="wallets-api"></a>
## ウォレットAPI
* [BitGo](https://developers.bitgo.com)
* [Coinbase](https://developers.coinbase.com)
* [Blockchain.com](https://www.blockchain.com/api)
* [BIP32](http://bip32.org)
* [walletOS](https://www.pinestreetlabs.com/walletos/)

<a id="open-source-wallets"></a>
## オープンソースウォレット
* [Blue Wallet](https://bluewallet.io/)
* [CoPay by BitPay](https://copay.io/)
* [Coinb.in](https://coinb.in)
* [Coin Wallet](https://coin.space/)
* [Electrum](https://electrum.org/)
* [Green](https://blockstream.com/green/)
* [Sparrow](https://sparrowwallet.com/)
* [Wasabi Wallet](https://wasabiwallet.io/)

<a id="privacy-projects"></a>
## プライバシープロジェクト
* [Joinmarket](https://github.com/JoinMarket-Org/joinmarket-clientserver) - 分散型CoinJoin実装
* [Jam](https://jamapp.org/) - Joinmarket向けユーザー中心のフロントエンド

<a id="blockchain-explorers"></a>
## ブロックチェーンエクスプローラー
* [3xpl.com](https://3xpl.com/bitcoin) - 最も速く、広告なしのユニバーサルブロックエクスプローラ
* [Chain.so](http://chain.so)
* [Blockchain.com](https://blockchain.com)
* [Blockchair.com](https://blockchair.com/bitcoin) - ユニバーサルブロックチェーンエクスプローラおよび検索エンジン
* [Blockstream.info](https://blockstream.info) - ブロックチェーンエクスプローラ（メインネット、テストネットおよびLiquid）
* [Bitcoin Transaction Explorer](https://github.com/JornC/bitcoin-transaction-explorer)
* [Blockexplorer.com](https://blockexplorer.com)
* [Smartbit](https://www.smartbit.com.au)
* [mempool.space](https://mempool.space/) - オープンソースかつ自前で運用可能なブロックチェーン、メモリプールおよびライトニングネットワークエクスプローラ

<a id="c-libraries"></a>
## Cライブラリ
* [libsecp256k1](https://github.com/bitcoin-core/secp256k1)
* [UltrafastSecp256k1](https://github.com/shrec/UltrafastSecp256k1) - 高性能 `secp256k1`エンジン。安定したC ABI、CPU、CUDA、OpenCL、埋め込み、WebAssemblyターゲットをサポート

<a id="c-libraries-1"></a>
## C++ライブラリ
* [Libbitcoin](https://libbitcoin.org/)
* [Libbitcoin](https://libbitcoin.info/) - ビットコインアプリケーションの構築に用いるクロスプラットフォームC++ライブラリセット
* [libwally-core](https://github.com/ElementsProject/libwally-core)

<a id="javascript-libraries"></a>
## JavaScriptライブラリ
* [Awesome CryptoCoinJS](https://github.com/cryptocoinjs/awesome-cryptocoinjs)
* [Bitcore Library](https://github.com/bitpay/bitcore/tree/v8.0.0/packages/bitcore-lib)
* [Bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib)
* [Cryptocoin](http://cryptocoinjs.com/#modules)
* [BlockTrail SDK NodeJS](https://github.com/blocktrail/blocktrail-sdk-nodejs)
* [bcoin](https://github.com/bcoin-org/bcoin) - Node.jsおよびブラウザ向けJavaScriptビットコインライブラリ
* [Libauth](https://libauth.org/) – 軽量で依存関係なしのJavaScript/TypeScriptビットコインライブラリ
* [noble-curves](https://github.com/paulmillr/noble-curves) — secp25及schnorrの純粋TypeScript実装（検証済み）
* [noble-secp256k1](https://github.com/paulmillr/noble-secp256k1) — secp256k1の代替実装：圧縮後4KBのみ。コメントが豊富で、アルゴリズムの仕組みを学ぶ上で非常に価値がある
* [scure-btc-signer](https://github.com/paulmillr/scure-btc-signer) — 検証済みかつ最小限のライブラリ。ビットコイン取引の作成、署名、解読をサポート。Schnorr、Taproot、UTXOおよびPSBTに対応
* [bitcoin-sdk-js](https://github.com/ChrisCho-H/bitcoin-sdk-js) — Node.js、ブラウザ、モバイル向けビットコインTypeScript/JavaScriptライブラリ。SegwitおよびTaproot対応
* [toll-booth](https://github.com/forgesworn/toll-booth) - Node.js向けHTTP 402支払いミドルウェア。Lightning、Cashu、または安定通貨による支払いで、APIのすべてをゲートを設ける。5つのバックエンドオプションを提供
<a id="php-libraries"></a>
## PHPライブラリ
* [PHP-OP_RETURN](https://github.com/coinspark/php-OP_RETURN)
* [BlockTrail PHP SDK](https://github.com/blocktrail/blocktrail-sdk-php)

<a id="ruby-libraries"></a>
## Rubyライブラリ
* [Bitcoin-ruby](https://github.com/lian/bitcoin-ruby)
* [bitcoinrb](https://github.com/chaintope/bitcoinrb) - Ruby向けビットコインライブラリ。スクリプトインタープリターやを含む
* [bech32rb](https://github.com/azuchi/bech32rb) - Bech32およびBech32mのエンコード／デコードライブラリ。
* [bip-schnorrrb](https://github.com/chaintope/bip-schnorrrb) - ビットコイン向けSchnorr署名ライブラリ

<a id="rust-libraries"></a>
## Rustライブラリ
* [Bitcoin Dev Kit (BDK)](https://bitcoindevkit.org/) - BDKを使用すれば、クロスプラットフォームのモバイルウォレットをスムーズに構築できます
* [Rust Bitcoin](https://github.com/rust-bitcoin/rust-bitcoin) - データ構造およびネットワークメッセージのデシリアライズ、パース、実行をサポート
* [Lightning Dev Kit (LDK)](https://lightningdevkit.org/) -  完全なLightning実装をSDKとしてパッケージ
* [Bithoven](https://github.com/ChrisCho-H/bithoven) -  ビットコインスマートコントラクト向けの高レベル命令言語。LR(1)パーサーを備え、コンパイル時安全性を確保する静的解析機能を備えている。

<a id="python-libraries"></a>
## Pythonライブラリ
* [BlockTrail SDK Python](https://github.com/blocktrail/blocktrail-sdk-python)
* [btctxstore](https://github.com/F483/btctxstore) - OP_RETURNを用いてビットコイン取引に情報を保存・取得するためのシンプルなライブラリ。
* [pybitcointools](https://github.com/vbuterin/pybitcointools) - ビットコイン署名と取引に関するPythonライブラリ。ビタリック・ブテリンが開発したプロジェクト。開発が終了した。
* [pycoin](https://github.com/richardkiss/pycoin) - ビットコインの鍵、署名、取引に関するPythonライブラリ。完全なVM実装と鍵（ku）および取引（tx）を操作するツールを含む。
* [bitcoin_tools](https://github.com/sr-gi/bitcoin_tools) - 取引およびスクリプト（標準およびカスタム）の構築と分析を行うPythonライブラリ。UTXOセット分析ツールを含む。複数の例と詳細なドキュメンテーションを提供。
* [pybtc](https://github.com/mohanson/pybtc) - Python BTCは、一般的なビットコイン操作に人間が使いやすいインターフェースを提供することを目的とした実験的プロジェクト。

<a id="java-libraries"></a>
## Javaライブラリ
> Note that you can also use [Scala libraries](#scala-libraries) in Java.
* [BitcoinJ](https://bitcoinj.github.io)
* [XChange](https://github.com/knowm/XChange) - 50以上のビットコイン取引所との相互作用を行うためのシンプルかつ一貫したAPIを提供するライブラリ。
* [Bitcoin Spring Boot Starter](https://github.com/theborakompanioni/bitcoin-spring-boot-starter) - Spring Bootアプリケーションにおけるビットコイン統合。
* [bech32](https://github.com/NostrGameEngine/bech32) - Bech32およびBech32mのエンコード／デコードライブラリ。

<a id="scala-libraries"></a>
## Scalaライブラリ
> Note that you can also use [Java libraries](#java-libraries) in Scala.
* [Bitcoin-S](https://bitcoin-s.org) - Scala/JVM向けのビットコインアプリケーションツールキット。ビットコインデータ構造、取引署名、強型 `bitcoind`/Eclair RPCクライアントなどを含む。

<a id="swift-libraries"></a>
## Swiftライブラリ
* [secp256k1.swift](https://github.com/GigaBitcoin/secp256k1.swift) - secp256k1アプリケーション向けのSwiftパッケージ。楕円曲線演算、スノール、ZKPなどビットコイン向けの機能を含む。

<a id="net-libraries"></a>
## .NETライブラリ
* [NBitcoin](https://github.com/MetacoSA/NBitcoin) - .NETフレームワーク向けの包括的なビットコインライブラリ。
* [BitcoinLib](https://github.com/cryptean/bitcoinlib) - C#で提供される最も完全で最新かつ実証済みのビットコインおよびアルトコイン向けのライブラリおよびRPCワッパー。

<a id="haskell-libraries"></a>
## Haskellライブラリ
* [Haskoin-core](https://github.com/haskoin/haskoin-core) - Haskoin Coreは、ハスケルで書かれたビットコインおよびビットコインキャッシュ関数のライブラリ。

<a id="playgrounds"></a>
## プレイグラウンド
* [Script Playground](https://www.crmarsh.com/script-playground/)
* [Bitcoin IDE](https://github.com/siminchen/bitcoinIDE) - ビットコインスクリプトの初心者向けガイド。
* [Script Debugger](https://github.com/kallewoof/btcdeb)
* [Bitcore Playground](https://bitcore.io/playground/)
* [Mnemonic Code generator](https://iancoleman.io/bip39/)
* [blockchain-demo](https://github.com/anders94/blockchain-demo/) - ブロックチェーン概念をウェブ上で体験できるデモンストレーション
* [Bitcoin Script Debugger](https://github.com/liuhongchao/bitcoin4s) - 実際の取引に対してビットコインスクリプトの実行を可視化
* [Bitauth IDE](https://ide.bitauth.com/) – ビットコイン契約用のインタラクティブ開発環境
* [ChainQuery Bitcoin RPC](https://chainquery.com) - 選択されたビットコインRPC APIコールを実行し、ブラウザ内で完全なRPCドキュメントを閲覧
* [Bithoven IDE](https://bithoven-lang.github.io/bithoven/ide/) -  Bithoven用のウェブIDE（Bithovenはビットコインスマート契約向けの高度な命令型言語）

<a id="blockchain-dump"></a>
## ブロックチェーンダンプ
* [BitcoinDatabaseGenerator](https://github.com/ladimolnar/BitcoinDatabaseGenerator) - 高性能データ転送ツール。ビットコインコアブロックチェーンファイルからSQLサーバーへのデータコピーに使用可能
* [Blockparser+SQL](https://github.com/mcdee/blockparser) - 高速かつ簡易的なビットコインブロックチェーンパーサー
* [BitcoinABE](https://github.com/bitcoin-abe/bitcoin-abe) - Abe：ビットコインおよび類似通貨向けのブロックブラウザ
* [Chaingraph](https://github.com/bitauth/chaingraph/) – マルチノードブロックチェーンインデクサとGraphQL API

<a id="full-nodes"></a>
## フルノード
* [btcd](https://github.com/btcsuite/btcd/) - 2013年からGoベースのフルノード
* [Bitcoin-ruby-node](https://github.com/mhanne/bitcoin-ruby-node) - ビットコイン-ruby-ブロックチェーンに基づいたビットコインノード
* [Fullnode](https://github.com/moneybutton/yours-bitcoin) - ビットコインのJavascript実装
* [Bitcore Node](https://github.com/bitpay/bitcore-node) - BitPayによるbitcoindとnode.jsの接続
* [Bitcore](https://github.com/bitpay/bitcore) - 元々はNode.jsライブラリのみだったが、現在はフルノードへ進化
* [Bitcoin Core](https://bitcoincore.org/) - 元のC++によるビットコイン実装の直接の後継

<a id="read"></a>
## 読み物
* [A Gentle Introduction to Bitcoin Core Development](https://medium.com/bitcoin-tech-talk/a-gentle-introduction-to-bitcoin-core-development-fdc95eaee6b8)
* [Mastering Bitcoin](https://github.com/bitcoinbook/bitcoinbook)
* [Grokking Bitcoin](https://www.manning.com/books/grokking-bitcoin) - 詳細な技術書で、豊富な図解が含まれている。
* [Bitcoin Stackexchange](https://bitcoin.stackexchange.com)
* [Elliptic Curve Cryptography A Gentle Introduction](https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/)。
* [Bitcoin Programming with BitcoinJS and Bitcoin Core CLI](https://github.com/bitcoin-studio/Bitcoin-Programming-with-BitcoinJS)。
* [Bitcoin Protocol Development Curriculum - Chaincode Labs](https://github.com/chaincodelabs/bitcoin-curriculum)。
* [Lightning Network Protocol Development Curriculum - Chaincode Labs](https://github.com/chaincodelabs/lightning-curriculum)。
* [btcinformation.org / Developer Documentation](https://btcinformation.org/en/developer-documentation) - 開発者向けに役立つリソース、ガイド、参考資料を検索できる。

<a id="course"></a>
## コース
* [Bitcoin & Cryptocurrency](http://bitcoinbook.cs.princeton.edu/)。

<a id="additional-resources"></a>
## 追加リソース
* [@lopp / Bitcoin Developers](https://twitter.com/lopp/lists/bitcoin-developers) - ビットコイン実装やアプリ開発に経験のあるソフトウェア開発者向け。
* [@lopp / Lightning Developers](https://twitter.com/i/lists/981976067551490048) - LN実装やアプリケーション開発に経験のあるソフトウェア開発者。
* [Practical Bitcoin Info - Google Sheets](https://docs.google.com/spreadsheets/d/1Z3Ofa4P8097VWV70Z_bMqIMladngvm-Ck24ot9TDNmw/)。
* [A brief history of Bitcoin development...](https://www.youtube.com/watch?v=ZfFNce6CVsE)
* [bitcoin-resources.com](https://bitcoin-resources.com/) ビットコインのリソースのメタリスト、書籍、記事、ポッドキャストまで。
* [Jameson Lopp Bitcoin Resource List](https://www.lopp.net/bitcoin-information.html) J. Loppによる、非常に詳細なビットコインリソース一覧兼メタリスト。
* [Svrgnty.com: Everything Bitcoin](https://svrgnty.com/) 厳選された優良なビットコインリソース一覧。
* [River Learn](https://river.com/learn) ビットコインの基礎、投資、技術などを学べる教育リソース集。
* [BitcoinCompanies](https://bitcoincompanies.co/) - 企業のビットコイン保有額を示す地図とランキング。申告保有額と確認済み保有額を比較できます。
* [Learn me a Bitcoin - Greg Walker](https://learnmeabitcoin.com/) - ビットコイン開発者向け広範な学習リソース
* [Bennet.org](https://bennet.org/) - ビットコインユーザー向けインタラクティブな技術ガイド
* [Knowing Bitcoin](https://knowingbitcoin.com/) - ライトニングネットワーク、ウォレット、セキュリティ、プライバシー、ノードに関する214以上の詳細ガイドを含む、総合的なビットコイン教育
* [Bitcoin.diy](https://bitcoin.diy) - Bitcoin専門の教材とハードウェアウォレットレビュー。初心者・中級者向けに自己管理（self-custody）を重視しています。
* [Bitcoin Institute](https://bitcoin-institute.pages.dev) - サトシ・ナカモトの一次資料を英語・日本語で収録するバイリンガルアーカイブ。フォーラム投稿、メール、メーリングリストのメッセージから原典へリンクします。
---

[awesome](https://github.com/sindresorhus/awesome) リストに着想を得ています。
BlockchainUの仲間たちによって作成されました。

---

<a id="license"></a>
### ライセンス

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲において、[Igor Barinov](https://github.com/igorbarinov/)はこの作品に関するすべての著作権および関連する権利を放棄しています。
