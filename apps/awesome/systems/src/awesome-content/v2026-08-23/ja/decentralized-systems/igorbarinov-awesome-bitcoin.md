---
title: "Awesome Bitcoin"
description: "Bitcoin開発者向けツール、ブロックチェーン・ウォレットAPI、各言語のライブラリ、スクリプト実験環境、フルノード、学習資料。"
licenseSource: "github-igorbarinov-awesome-bitcoin-readme-md"
---

# Awesome Bitcoin

ソフトウェア開発者向けに、Bitcoinのサービスやツールを紹介します。ブロックチェーン・ウォレットAPI、オープンソースウォレット、プライバシー関連プロジェクト、各言語のライブラリ、スクリプト実験環境、フルノードに加え、市場データAPI、ブロックチェーンデータ用ツール、書籍やコースなどの学習資料を探せます。

## ユーティリティ<a id="utilities"></a>
* [Nigiri](https://github.com/vulpemventures/nigiri/) - ElectrsとEsploraを含むBitcoin regtest環境をすばやく起動するCLI。faucetとpushコマンドも提供。
* [hal](https://github.com/stevenroose/hal) - rust-bitcoinを基盤とする多目的Bitcoin CLI。
* [BitKey](https://bitkey.io) - ネットワークから隔離した環境での取引に使える、Bitcoin用の多機能なLive USB。
* [PaperVault](https://github.com/boazeb/papervault) - AES-256-GCMとシャミールの秘密共有を用いた、オフラインで秘密情報を紙に保管するツール。閾値に基づく鍵分割を用い、印刷可能なシードフレーズの暗号化バックアップを作成。
* [Pycoin](https://github.com/richardkiss/pycoin) - PythonベースのBitcoinおよびアルトコインユーティリティライブラリ。
* [bx](https://github.com/libbitcoin/libbitcoin-explorer) - Bitcoinコマンドラインツール。
* [Deadhand Protocol](https://deadhandprotocol.com) - 暗号資産向けのデッドマンズスイッチ。シャミールの秘密共有でシードフレーズを保護し、相続を支援。
* [txwatcher](https://github.com/tsileo/txwatcher) - 小さなPythonユーティリティで、BlockchainのWebSocket APIを介してBitcoinアドレスを監視し、カスタムコールバックを実行。
* [hellobitcoin](https://github.com/prettymuchbryce/hellobitcoin) - シンプルなプログラムのコレクションで、Bitcoinウォレットを生成し、取引を作成・署名し、Bitcoinネットワーク上で取引を送信できる。
* [マイニングの可視化](https://yogh.io/landing/)
* [HD Wallet Scanner](https://github.com/alexk111/HD-Wallet-Scanner) - ギャップリミットを回避し、BitcoinのHDウォレット内で使用された全アドレスを検索。
* [`<qr-code>`](https://github.com/bitjson/qr-code) – フレームワークなし、依存関係なし、カスタマイズ可能でアニメーション可能なSVGベースの `<qr-code>` ウェブコンポーネント。
* [Bitcoin Serverless Donations](https://github.com/tombennet/bitcoin-serverless-donations) - XPUBから導出したアドレスをローテーションする、自己管理型のサーバーレス寄付ウィジェット。
* [BTC Tooling](https://github.com/douvy/btc-tooling) - リアルタイム価格データ、チャート、オーダーブック、市場要約、Twitter/Xの洞察、半減期カウントダウンデータを含むBitcoinダッシュボード。 [動作デモ](https://www.btctooling.com/)。
* [Chartscout](https://chartscout.io) - 複数の取引所でリアルタイムにBTCチャートパターンの検出と取引アラート。
* [Bitcoin Bottom Score](https://bitcoinbottom.app) - Bitcoinの相場サイクルが底を打つ確率をリアルタイムに追跡するツール。25のオンチェーン・マクロ指標（MVRV Z-Score、Puell Multiple、Hash Ribbon、ETFフロー）を日次のP(bottom)スコアに集約。無料で1日2回更新。
* [BTC Airgap Bridge](https://github.com/paranoid-qrypto/btc-airgap-bridge) - ネットワークから隔離したウォレットの署名済みBitcoin取引をブロードキャストする、100％クライアント側で動くツール。
* [SuperScalar MCP](https://github.com/8144225309/superscalar-mcp) - SuperScalarのBitcoin Lightningチャネルファクトリー向けMCPサーバー。ソフトフォークを必要とせず、一つの共有UTXOでN人のユーザーを受け入れ。
* [Lightning Memory](https://github.com/singularityjason/lightning-memory) - ビットコイン／ライトニング経済におけるAIエージェント向けオープンソースメモリレイヤー。L402支払いゲートウェイ、ベンダーの評判、支出の異常検出。
* [CryptoCalk](https://cryptocalk.com) - Bitcoinの収益性とオンチェーンデータの計算ツール：ASIC／GPUマイニングROI、ハッシュレート変換器、半減期カウントダウン、マイヤー倍率、ストックツーフロー（S2F）、レインボーチャート、利益／損失、DCAシミュレーター、税額推定ツール、清算価格。クライアントサイド、サインアップ不要、6言語対応。
* [Freedom Clock](https://freedomclock.io) - Bitcoinを考慮したFIRE計算ツール。売却・借入・借入後の売却という支出モデルに対応。貯蓄とビットコイン保有額を経済的自由を維持できる年数に変換。完全にローカル、アカウント不要、MITライセンス。また、オープンソースe-inkデスクデバイス（約30ドル）も提供。
* [dont-trust-verify](https://dont-trust-verify.com) - Bitcoin専用のクライアントサイドツールと自己管理教育。BIP-39検証、処理が進まない取引の確認、手数料見積もり、ウォレットインストーラーのSHA-256検証、自己管理スコアのクイズなど22種の計算・検証・デコードツールに加え、一次資料に基づくガイドとハードウェアウォレットレビューを提供。登録・トラッキング不要、英語・タイ語対応。

## ブロックチェーンAPIとWebサービス<a id="blockchain-api-and-web-services"></a>
* [3xpl.com](https://3xpl.com/) - 広告のない汎用ブロックエクスプローラー。
* [Bitquery.io](https://bitquery.io/) - 40以上のチェーンのリアルタイムストリーミングAPI、NFT API、資金フロー調査ツールを提供するブロックチェーンデータサービス。
* [block.io](https://block.io)
* [blockchair.com](https://blockchair.com/) - ユニバーサルブロックチェーンエクスプローラおよび検索エンジン。
* [BlockCypher](https://www.blockcypher.com)
* [Esplora](https://github.com/Blockstream/esplora) - セルフホスト型ブロックチェーンエクスプローラ。
* [Insight](https://insight.is)
* [Chain.com](https://chain.com)
* [Coinbase Wallet](https://wallet.coinbase.com/)
* [Chainradar API](https://github.com/yasaricli/chainradar-api) - ChainradarのブロックチェーンエクスプローラAPI。
* [One-Time Address](https://github.com/alexk111/One-Time-Address) - Bitcoinアドレスを共有するためのツール。
* [Cryptocurrency Alerting](https://cryptocurrencyalerting.com/blockchain-alerts.html) - ビットコインウォレット監視およびブロックチェーンアラート。
* [BTC Connect](https://developers.particle.network/reference/introduction-to-btc-connect) - ビットコインレイヤー1およびレイヤー2ウォレット接続とアカウント抽象化の一元化。
* [Tatum](https://tatum.io/blockchain-api) - Web3アプリケーション開発向けのブロックチェーン開発プラットフォームとデータAPI。
* [mempool.space](https://mempool.space/docs/api/rest) - オープンソースかつ自前で運用可能なREST、WebSocketおよびElectrum RPC API。
* [Bitview](https://bitview.space/) - オープンソースのビットコインコアデータ抽出ツールおよび可視化ツール（別名FOSS Glassnode）。
* [Maestro](https://www.gomaestro.org/) - リアルタイムブロックチェーンデータ、メンプール監視、イベント通知をサポートする高性能ビットコインRPCおよびUTXOインデクサーAPI。
* [OnFinality](https://onfinality.io/en/networks/bitcoin) - dApp、ウォレット、アナリティクス、バックエンドサービス向けのビットコインRPCエンドポイントおよびAPIアクセス。

## 市場データAPI<a id="market-data-api"></a>
* [CoinGapRadar](https://coingapradar.com) - 9か国を対象としたリアルタイム暗号資産プレミアム追跡ツール。キムチプレミアムや地域間価格差を監視でき、無料・登録不要。
* [CoinMetrics.io](https://docs.coinmetrics.io/) JSON形式のREST API（無料および有料）による市場データアクセス。またCSVデータファイルのダウンロードも可能
* [CoinPaprika](https://api.coinpaprika.com) 無料の暗号資産市場データAPI。12,000以上のコイン、350以上の取引所、ティッカー、OHLCV、過去の価格を提供。無料プランにはAPIキー不要。
* [Messari.io](https://messari.io/api) JSON形式のREST API（無料および有料）による市場データ、ニュース、メトリクス、プロフィールなどへのアクセス
* [PreReason](https://www.prereason.com) - REST APIで分析済みのBitcoin市場概要を提供。BTC価格、ハッシュレート、難易度、採掘コスト、上場企業30社の保有量と、Bitcoinに影響するマクロ指標（FRBのバランスシート、M2、国債利回り）を対象に、生の数値ではなく、トレンドの方向、信頼度スコア、市場局面の分類を返すAPI。無料プランあり。

## ウォレットAPI<a id="wallets-api"></a>
* [BitGo](https://developers.bitgo.com)
* [Coinbase](https://developers.coinbase.com)
* [Blockchain.com](https://www.blockchain.com/api)
* [BIP32](http://bip32.org)
* [walletOS](https://www.pinestreetlabs.com/walletos/)

## オープンソースウォレット<a id="open-source-wallets"></a>
* [Blue Wallet](https://bluewallet.io/)
* [CoPay by BitPay](https://copay.io/)
* [Coinb.in](https://coinb.in)
* [Coin Wallet](https://coin.space/)
* [Electrum](https://electrum.org/)
* [Green](https://blockstream.com/green/)
* [Sparrow](https://sparrowwallet.com/)
* [Wasabi Wallet](https://wasabiwallet.io/)

## プライバシープロジェクト<a id="privacy-projects"></a>
* [Joinmarket](https://github.com/JoinMarket-Org/joinmarket-clientserver) - 分散型CoinJoin実装。
* [Jam](https://jamapp.org/) - Joinmarket向けの使いやすいフロントエンド。

## ブロックチェーンエクスプローラー<a id="blockchain-explorers"></a>
* [3xpl.com](https://3xpl.com/bitcoin) - 広告のない汎用ブロックエクスプローラー。
* [Chain.so](http://chain.so)
* [Blockchain.com](https://blockchain.com)
* [Blockchair.com](https://blockchair.com/bitcoin) - ユニバーサルブロックチェーンエクスプローラおよび検索エンジン。
* [Blockstream.info](https://blockstream.info) - ブロックチェーンエクスプローラ（メインネット、テストネットおよびLiquid）。
* [Bitcoin Transaction Explorer](https://github.com/JornC/bitcoin-transaction-explorer)
* [Blockexplorer.com](https://blockexplorer.com)
* [Smartbit](https://www.smartbit.com.au)
* [mempool.space](https://mempool.space/) - オープンソースかつ自前で運用可能なブロックチェーン、メンプールおよびライトニングネットワークエクスプローラ。

## Cライブラリ<a id="c-libraries"></a>
* [libsecp256k1](https://github.com/bitcoin-core/secp256k1)
* [UltrafastSecp256k1](https://github.com/shrec/UltrafastSecp256k1) - 高性能 `secp256k1`エンジン。安定したC ABI、CPU、CUDA、OpenCL、組み込み環境、WebAssemblyを対象とする実装をサポート。

## C++ライブラリ<a id="c-libraries-1"></a>
* [Libbitcoin](https://libbitcoin.org/)
* [Libbitcoin](https://libbitcoin.info/) - ビットコインアプリケーションの構築に用いるクロスプラットフォームC++ライブラリセット。
* [libwally-core](https://github.com/ElementsProject/libwally-core)

## JavaScriptライブラリ<a id="javascript-libraries"></a>
* [Awesome CryptoCoinJS](https://github.com/cryptocoinjs/awesome-cryptocoinjs)
* [Bitcore Library](https://github.com/bitpay/bitcore/tree/v8.0.0/packages/bitcore-lib)
* [Bitcoinjs-lib](https://github.com/bitcoinjs/bitcoinjs-lib)
* [Cryptocoin](http://cryptocoinjs.com/#modules)
* [BlockTrail SDK NodeJS](https://github.com/blocktrail/blocktrail-sdk-nodejs)
* [bcoin](https://github.com/bcoin-org/bcoin) - Node.jsおよびブラウザ向けJavaScriptビットコインライブラリ。
* [Libauth](https://libauth.org/) – 軽量で依存関係なしのJavaScript/TypeScriptビットコインライブラリ
* [noble-curves](https://github.com/paulmillr/noble-curves) — secp256k1とSchnorrの純粋なTypeScript実装（監査済み）。
* [noble-secp256k1](https://github.com/paulmillr/noble-secp256k1) — secp256k1の代替実装：gzip圧縮後4KB。コメントが豊富で、アルゴリズムの仕組みを学ぶ上で非常に価値がある
* [scure-btc-signer](https://github.com/paulmillr/scure-btc-signer) — 監査済みの小規模なライブラリ。Bitcoin取引の作成・署名・デコードに対応。Schnorr、Taproot、UTXOおよびPSBTに対応
* [bitcoin-sdk-js](https://github.com/ChrisCho-H/bitcoin-sdk-js) — Node.js、ブラウザ、モバイル向けビットコインTypeScript/JavaScriptライブラリ。SegwitおよびTaproot対応
* [toll-booth](https://github.com/forgesworn/toll-booth) - Node.js向けHTTP 402支払いミドルウェア。任意のAPIにLightning、Cashu、ステーブルコインによる支払いを利用条件として設定でき、5種類のバックエンドを提供。
## PHPライブラリ<a id="php-libraries"></a>
* [PHP-OP_RETURN](https://github.com/coinspark/php-OP_RETURN)
* [BlockTrail PHP SDK](https://github.com/blocktrail/blocktrail-sdk-php)

## Rubyライブラリ<a id="ruby-libraries"></a>
* [Bitcoin-ruby](https://github.com/lian/bitcoin-ruby)
* [bitcoinrb](https://github.com/chaintope/bitcoinrb) - Ruby向けビットコインライブラリ。スクリプトインタープリターを含む。
* [bech32rb](https://github.com/azuchi/bech32rb) - Bech32およびBech32mのエンコード／デコードライブラリ。
* [bip-schnorrrb](https://github.com/chaintope/bip-schnorrrb) - ビットコイン向けSchnorr署名ライブラリ。

## Rustライブラリ<a id="rust-libraries"></a>
* [Bitcoin Dev Kit (BDK)](https://bitcoindevkit.org/) - クロスプラットフォームのモバイルウォレットを構築するための開発キット。
* [Rust Bitcoin](https://github.com/rust-bitcoin/rust-bitcoin) - データ構造やネットワークメッセージのシリアライズ・デシリアライズ、解析、操作に対応。
* [Lightning Dev Kit (LDK)](https://lightningdevkit.org/) - 完全なLightning実装をSDKとしてパッケージ。
* [Bithoven](https://github.com/ChrisCho-H/bithoven) - ビットコインスマートコントラクト向けの高水準の命令型言語。LR(1)パーサーを備え、コンパイル時の安全性を支える静的解析に対応。

## Pythonライブラリ<a id="python-libraries"></a>
* [BlockTrail SDK Python](https://github.com/blocktrail/blocktrail-sdk-python)
* [btctxstore](https://github.com/F483/btctxstore) - OP_RETURNを用いてビットコイン取引に情報を保存・取得するためのシンプルなライブラリ。
* [pybitcointools](https://github.com/vbuterin/pybitcointools) - ビットコイン署名と取引に関するPythonライブラリ。ビタリック・ブテリンが開発したプロジェクト。開発が終了した。
* [pycoin](https://github.com/richardkiss/pycoin) - ビットコインの鍵、署名、取引に関するPythonライブラリ。完全なVM実装と鍵（ku）および取引（tx）を操作するツールを含む。
* [bitcoin_tools](https://github.com/sr-gi/bitcoin_tools) - 取引およびスクリプト（標準およびカスタム）の構築と分析を行うPythonライブラリ。UTXOセット分析ツールを含む。複数の例と詳細なドキュメンテーションを提供。
* [pybtc](https://github.com/mohanson/pybtc) - Python BTCは、一般的なビットコイン操作に人間が使いやすいインターフェースを提供することを目的とした実験的プロジェクト。

## Javaライブラリ<a id="java-libraries"></a>
> Javaでも[Scalaライブラリ](#scala-libraries)を利用できます。
* [BitcoinJ](https://bitcoinj.github.io)
* [XChange](https://github.com/knowm/XChange) - 50以上のビットコイン取引所へ接続するためのシンプルかつ一貫したAPIを提供するライブラリ。
* [Bitcoin Spring Boot Starter](https://github.com/theborakompanioni/bitcoin-spring-boot-starter) - Spring Bootアプリケーションにおけるビットコイン統合。
* [bech32](https://github.com/NostrGameEngine/bech32) - Bech32およびBech32mのエンコード／デコードライブラリ。

## Scalaライブラリ<a id="scala-libraries"></a>
> Scalaでも[Javaライブラリ](#java-libraries)を利用できます。
* [Bitcoin-S](https://bitcoin-s.org) - Scala/JVM向けのビットコインアプリケーションツールキット。ビットコインデータ構造、取引署名、強く型付けされた `bitcoind`/Eclair RPCクライアントなどを含む。

## Swiftライブラリ<a id="swift-libraries"></a>
* [secp256k1.swift](https://github.com/GigaBitcoin/secp256k1.swift) - secp256k1アプリケーション向けのSwiftパッケージ。楕円曲線演算、Schnorr、ZKPなどビットコイン向けの機能を含む。

## .NETライブラリ<a id="net-libraries"></a>
* [NBitcoin](https://github.com/MetacoSA/NBitcoin) - .NETフレームワーク向けの包括的なビットコインライブラリ。
* [BitcoinLib](https://github.com/cryptean/bitcoinlib) - C#で提供されるBitcoin・アルトコイン向けの.NETライブラリとRPCラッパー。

## Haskellライブラリ<a id="haskell-libraries"></a>
* [Haskoin-core](https://github.com/haskoin/haskoin-core) - Haskoin Coreは、Haskellで書かれたビットコインおよびビットコインキャッシュ関数のライブラリ。

## プレイグラウンド<a id="playgrounds"></a>
* [Script Playground](https://www.crmarsh.com/script-playground/)
* [Bitcoin IDE](https://github.com/siminchen/bitcoinIDE) - 初心者向けのBitcoin Script。
* [Script Debugger](https://github.com/kallewoof/btcdeb)
* [Bitcore Playground](https://bitcore.io/playground/)
* [ニーモニックコード生成器](https://iancoleman.io/bip39/)
* [blockchain-demo](https://github.com/anders94/blockchain-demo/) - ブロックチェーン概念をウェブ上で体験できるデモンストレーション。
* [Bitcoin Script Debugger](https://github.com/liuhongchao/bitcoin4s) - 実際の取引に対してビットコインスクリプトの実行を可視化。
* [Bitauth IDE](https://ide.bitauth.com/) – ビットコイン契約用のインタラクティブ開発環境
* [ChainQuery Bitcoin RPC](https://chainquery.com) - 選択されたビットコインRPC APIコールを実行し、ブラウザ内で完全なRPCドキュメントを閲覧。
* [Bithoven IDE](https://bithoven-lang.github.io/bithoven/ide/) - Bithoven用のウェブIDE（Bithovenはビットコインスマート契約向けの高水準の命令型言語）。

## ブロックチェーンダンプ<a id="blockchain-dump"></a>
* [BitcoinDatabaseGenerator](https://github.com/ladimolnar/BitcoinDatabaseGenerator) - 高性能データ転送ツール。Bitcoin CoreのブロックチェーンファイルからSQL Serverデータベースへデータをコピー。
* [Blockparser+SQL](https://github.com/mcdee/blockparser) - 高速かつ簡易的なビットコインブロックチェーンパーサー。
* [BitcoinABE](https://github.com/bitcoin-abe/bitcoin-abe) - Abe：ビットコインおよび類似通貨向けのブロックブラウザ。
* [Chaingraph](https://github.com/bitauth/chaingraph/) – マルチノードブロックチェーンインデクサとGraphQL API

## フルノード<a id="full-nodes"></a>
* [btcd](https://github.com/btcsuite/btcd/) - 2013年から開発されているGo製のフルノード。
* [Bitcoin-ruby-node](https://github.com/mhanne/bitcoin-ruby-node) - bitcoin-ruby-blockchainを基盤とするBitcoinノード。
* [Fullnode](https://github.com/moneybutton/yours-bitcoin) - ビットコインのJavascript実装。
* [Bitcore Node](https://github.com/bitpay/bitcore-node) - BitPayによるbitcoindとnode.jsの接続。
* [Bitcore](https://github.com/bitpay/bitcore) - 固定原文では、以前のNode.jsライブラリからフルノードになったと紹介。
* [Bitcoin Core](https://bitcoincore.org/) - 元のC++によるビットコイン実装の直接の後継。

## 読み物<a id="read"></a>
* [A Gentle Introduction to Bitcoin Core Development](https://medium.com/bitcoin-tech-talk/a-gentle-introduction-to-bitcoin-core-development-fdc95eaee6b8)
* [Mastering Bitcoin](https://github.com/bitcoinbook/bitcoinbook)
* [Grokking Bitcoin](https://www.manning.com/books/grokking-bitcoin) - 詳細な技術書で、豊富な図解が含まれている。
* [Bitcoin Stackexchange](https://bitcoin.stackexchange.com)
* [Elliptic Curve Cryptography A Gentle Introduction](https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/)。
* [Bitcoin Programming with BitcoinJS and Bitcoin Core CLI](https://github.com/bitcoin-studio/Bitcoin-Programming-with-BitcoinJS)。
* [Bitcoin Protocol Development Curriculum - Chaincode Labs](https://github.com/chaincodelabs/bitcoin-curriculum)。
* [Lightning Network Protocol Development Curriculum - Chaincode Labs](https://github.com/chaincodelabs/lightning-curriculum)。
* [btcinformation.org / Developer Documentation](https://btcinformation.org/en/developer-documentation) - 開発者向けに役立つリソース、ガイド、参考資料を検索できる。

## コース<a id="course"></a>
* [Bitcoin & Cryptocurrency](http://bitcoinbook.cs.princeton.edu/)。

## 追加リソース<a id="additional-resources"></a>
* [@lopp / Bitcoin Developers](https://twitter.com/lopp/lists/bitcoin-developers) - Bitcoin実装やアプリケーション開発の経験を持つソフトウェア開発者の一覧。
* [@lopp / Lightning Developers](https://twitter.com/i/lists/981976067551490048) - LN実装やアプリケーション開発の経験を持つソフトウェア開発者の一覧。
* [Practical Bitcoin Info - Google Sheets](https://docs.google.com/spreadsheets/d/1Z3Ofa4P8097VWV70Z_bMqIMladngvm-Ck24ot9TDNmw/)。
* [A brief history of Bitcoin development...](https://www.youtube.com/watch?v=ZfFNce6CVsE)
* [bitcoin-resources.com](https://bitcoin-resources.com/) ビットコインのリソースのメタリスト、書籍、記事、ポッドキャストまで。
* [Jameson Lopp Bitcoin Resource List](https://www.lopp.net/bitcoin-information.html) J. Loppによる、非常に詳細なビットコインリソース一覧兼メタリスト。
* [Svrgnty.com: Everything Bitcoin](https://svrgnty.com/) Bitcoin資料の一覧。
* [River Learn](https://river.com/learn) ビットコインの基礎、投資、技術などを学べる教育リソース集。
* [BitcoinCompanies](https://bitcoincompanies.co/) - 企業のビットコイン保有額を示す地図とランキング。申告保有額と確認済み保有額を比較。
* [Learn me a Bitcoin - Greg Walker](https://learnmeabitcoin.com/) - ビットコイン開発者向け広範な学習リソース。
* [Bennet.org](https://bennet.org/) - ビットコインユーザー向けインタラクティブな技術ガイド。
* [Knowing Bitcoin](https://knowingbitcoin.com/) - ライトニングネットワーク、ウォレット、セキュリティ、プライバシー、ノードに関する214以上の詳細ガイドを含む、総合的なビットコイン教育。
* [Bitcoin.diy](https://bitcoin.diy) - Bitcoin専門の教材とハードウェアウォレットレビュー。初心者・中級者の自己管理（self-custody）に重点。
* [Bitcoin Institute](https://bitcoin-institute.pages.dev) - サトシ・ナカモトの一次資料を英語・日本語で収録するバイリンガルアーカイブ。フォーラム投稿、メール、メーリングリストのメッセージのそれぞれから原典へリンク。
