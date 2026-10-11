---
title: "Awesome Cosmos"
description: "Cosmos SDKの中核コンポーネント、クライアントライブラリ、IBCツール、ブロックエクスプローラー、チェーン開発・運用資料。"
licenseSource: "github-cosmos-awesome-cosmos-readme-md"
---

# Awesome Cosmos

Cosmos SDKは、Goでブロックチェーンアプリケーションを構築するためのモジュール型フレームワークです。Cosmos Hubの実装であるGaiaもCosmos SDKを使っています。中核コンポーネント、クライアントライブラリ、IBCツール、ブロックエクスプローラー、Cosmosチェーンの開発・運用資料を探せます。

免責事項: このリストはコミュニティが保守しており、いかなる公式組織の見解も反映しません。

## 中核コンポーネント

* [Cosmos Hub](https://github.com/cosmos/gaia)
* [Cosmos SDK](https://github.com/cosmos/cosmos-sdk/)
* [IBC Go](https://github.com/cosmos/ibc-go)
* [CometBFT](https://github.com/cometbft/cometbft)
* [CosmWasm](https://github.com/CosmWasm/cosmwasm)
* [CosmJS](https://github.com/cosmos/cosmjs)
* [Protobuf](https://buf.build/cosmos)
* [IAVL](https://github.com/cosmos/iavl)
* [ICS23](https://github.com/cosmos/ics23)

## ドキュメント

* [Cosmos Developer Portal](https://tutorials.cosmos.network)
* [Interchain Developer Academy](https://ida.interchain.io/)
* [Cosmos SDK](https://docs.cosmos.network/)
* [IBC](https://ibc.cosmos.com/)
* [CometBFT](https://docs.cometbft.com/)
* [Cosmos Hub](https://hub.cosmos.network/)
* [CosmWasm](https://docs.cosmwasm.com/docs/1.0/)
* [Cosmology](https://cosmology.tech/learn)

## クライアントライブラリ

### Go

* [Ignite CLI](https://github.com/ignite/cli) - 独立した安全なブロックチェーン上で暗号資産アプリケーションを構築・立ち上げ・保守する統合プラットフォーム。UIの導入、新しいCosmos SDKモジュールの作成、既存モジュールの利用を支援し、新しいCosmos SDKブロックチェーンのひな形を素早く作成。

### JavaScript

* [cosmos/cosmjs](https://github.com/cosmos/cosmjs) - Cosmos の JavaScript ライブラリ。
* [telescope](https://github.com/osmosis-labs/telescope) - CosmJS 上に構築された TypeScript ライブラリジェネレーター。
* [chainapsis/cosmosjs](https://github.com/chainapsis/cosmosjs) - Chainapsis の署名・API ライブラリ。
* [cosmos-client/cosmos-client-ts](https://github.com/cosmos-client/cosmos-client-ts) - Cosmos SDK ブロックチェーン向け JavaScript / TypeScript クライアント。
* [cosmology-tech/chain-registry](https://github.com/cosmology-tech/chain-registry) - 公式 Cosmos Chain Registry 用 npm パッケージ。
* [strangelove-ventures/graz](https://github.com/strangelove-ventures/graz) - ウォレット、署名処理を担うsigner、署名クライアントなどとやり取りするReactフック集。
* [cosmology-tech/create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) - Cosmos Web UIのひな形を作成する npm パッケージ。
* [cosmology-tech/cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) - Cosmos 向けウォレットコネクター。
* [nabla-studio/quirks](https://github.com/nabla-studio/quirks) - モバイルとブラウザーの両方で動作する Cosmos dApps 向けユニバーサルウォレットアダプター。
* [toschdev/bip44](https://github.com/toschdev/cosmos-bip44) - 開発・学習向けの JavaScript による Cosmos BIP44 実装。

### Python

* [cosmpy](https://github.com/fetchai/cosmpy) - Cosmos SDK ベースのブロックチェーンとやり取りする Python クライアントライブラリ。
* [pyCosmicWrap](https://github.com/ChihuahuaChain/pyCosmicWrap/) - Cosmos API/RPC向けPython 3ラッパー。
* [mospy](https://github.com/ctrl-Felix/mospy) - Cosmos SDK ベースコインのトランザクション作成・署名用 Python ライブラリ。
* [cosmospy-protobuf](https://github.com/ctrl-Felix/cosmospy-protobuf) - すべてのコンパイル済み protobuf ファイルを含む Python ライブラリ（gRPCに適している）。
* [fx-py-sdk](https://github.com/functionx/fx-py-sdk) - Cosmos Python クライアントライブラリ。

### Rust

* [CosmWasm/cosmwasm](https://github.com/CosmWasm/cosmwasm) - Cosmos SDK 向け WebAssembly スマートコントラクト。
* [iqlusioninc/stdtx](https://github.com/iqlusioninc/crates) - iqlusion によるオープンソース Rustクレート集。
* [peggyjv/ocular](https://github.com/peggyjv/ocular) - 快適な UX に焦点を当てた Cosmos SDK チェーン向けクライアントライブラリ。

## ブロックエクスプローラー

* [ATOMScan](https://atomscan.com)
* [Big Dipper](https://bigdipper.live) - [ソースコード](https://github.com/forbole/big-dipper-2.0-cosmos)
* [IOBScan](https://ibc.iobscan.io/)
* [Mintscan](https://www.mintscan.io)
    * [Cosmos Hubテストネット用Mintscan](https://cosmoshub-testnet.mintscan.io/cosmoshub-testnet)
* [NG Explorers](https://explorers.guru/)
* [Ping.pub](https://ping.pub) - [ソースコード](https://github.com/ping-pub/explorer)
* [Stake ID](https://stake.id)

### ビジュアルブロックエクスプローラー

Inter-Blockchain Communication (IBC) の転送アクティビティを表示します。マップは異なるブロックチェーン（Cosmos Hub ではゾーンと呼ばれます）間の IBC トランザクションを追跡し、Cosmos エコシステム全体の動向に関する正確な集計情報を表示します。

* [Map of Zones](https://mapofzones.com/?period=24) - [ソースコード](https://github.com/mapofzones)
* [Mintscan](https://hub.mintscan.io) - Cosmostationによるインターチェーンエクスプローラー。

### ターミナルブロックエクスプローラー

端末から Cosmos SDK ブロックチェーンを探索します。

* [gex](https://github.com/cosmos/gex) - GEX の端末内エクスプローラー。
* [cshtop](https://github.com/gsk967/cshtop) - Cosmos htop、端末上のブロック可視化ツール。
* [pvtop](https://github.com/blockpane/pvtop) - 端末上のコンセンサス可視化ツール。
* [tmtop](https://github.com/quokkastake/tmtop) - pvtop に着想を得た Htop 風コンセンサス可視化ツール。アップグレード情報の表示、コンシューマーチェーン・非 Cosmos チェーンの操作などに対応。

## チェーンレジストリ

ほとんどの Cosmos チェーンの標準化メタデータを含むレジストリです。

* [cosmos/chain-registry](https://github.com/cosmos/chain-registry/)
* [Cosmos directory](https://cosmos.directory) - [ソースコード](https://github.com/eco-stake/cosmos-directory)
* [cosmology-tech/chain-registry](https://github.com/cosmology-tech/chain-registry) - 公式 Cosmos Chain Registry 用 npm パッケージ。

## バリデーター

主要なブロックエクスプローラーはアクティブなバリデーターの一覧を提供します。バリデータープロファイルを確認する最も簡単な入り口はブロックエクスプローラーです。

* [Mintscanの一覧](https://www.mintscan.io/cosmos/validators)
* [ATOMScanの一覧](https://atomscan.com/validators)
* [BigDipperの一覧](https://cosmos.bigdipper.live/validators)
* [Kujira PODの一覧](https://pod.kujira.app/cosmoshub-4)

バリデーターを選ぶ際は自分で調査してください。ネットワークの分散性を高めるため、上位 20 以外のバリデーターへトークンを委任することを検討してください。
また、手数料0%のバリデーターや取引所のバリデーターを避けることも勧められています。

## Cosmos SDK モジュール

プロジェクトのモジュールドキュメントとサードパーティ製モジュールのディレクトリを参照してください。

* 本番利用向けモジュールは、[モジュール一覧](https://docs.cosmos.network/main/modules/)を参照してください。
* よく知られたサードパーティ製モジュールは、[Cosmod.xyz](https://cosmod.xyz)を参照してください。

## 監視
* [PANIC Monitoring and Alerting For Blockchains](https://github.com/SimplyVC/panic) - Cosmos SDK、Substrate、Chainlink ベースノード向けのオープンソース監視・アラートソリューション。
* [Prometheus Exporter](https://github.com/node-a-team/Cosmos-IE) - Cosmos SDK 向け統合 Prometheusエクスポーター。
* [Cosmos Chains Dashboard](https://github.com/zhangyelong/cosmos-dashboard) - Cosmos SDK・Tendermint ベースのブロックチェーンノードを監視する Grafana ダッシュボード。
* [Chain Pulse](https://github.com/informalsystems/chainpulse) - Prometheusエクスポーターを備え、中継されたIBCパケットを監視するツール。
* [missed-blocks-checker](https://github.com/QuokkaStake/missed-blocks-checker) - 複数の Cosmos チェーンでバリデーターの見逃しブロックを監視し、Telegramに通知するツール。
* [Nodes Checker](https://t.me/NodesGuru_bot) - ノードステータスをオンラインで確認し、バリデーターノードに問題があれば即時通知するツール。
* [Cosmon](https://github.com/iqlusioninc/cosmon) - Cosmos と他の Tendermint アプリケーション向け可観測性ツール。
* [Tenderduty](https://github.com/blockpane/tenderduty) - Tendermint チェーン用の包括的監視ツール。主にバリデーターがブロックを見逃した際の通知に使用。
* [UpgradesWatchdog](https://github.com/ChihuahuaChain/UpgradesWatchdog) - SoftwareUpgradeProposal・GitHub Releases 向け Telegram 監視ツール。
* [cosmos-node-exporter](https://github.com/QuokkaStake/cosmos-node-exporter.git) - ノード同期状態、Cosmovisor アップグレード、GitHub バージョン不一致のデータを収集する Prometheusエクスポーター。ノード運用者・バリデーター向け。
* [cosmos-wallets-exporter](https://github.com/QuokkaStake/cosmos-wallets-exporter.git) - ウォレット残高データを収集する Prometheusエクスポーター。残高が少なすぎる場合の通知に利用。
* [cosmos-validators-exporter](https://github.com/QuokkaStake/cosmos-validators-exporter.git) - バリデーターのデータ（見逃しブロック、委任者数、総ステーク量、順位など）を収集する Prometheusエクスポーター。
* [cosmos-validator-monitoring-service(CVMS)](https://github.com/cosmostation/cvms) - Cosmos アプリチェーンエコシステムのバリデーター向け統合監視システム。
* [cosmos-proposals-checker](https://github.com/QuokkaStake/cosmos-proposals-checker.git) - 複数の Cosmos チェーンで、ウォレットが提案に投票していない場合に通知するボット。
* [cosmos-transactions-bot](https://github.com/QuokkaStake/cosmos-transactions-bot.git) - 複数の Cosmos チェーンで購読したい任意のトランザクションについて通知を送るボット。

## インデクサー

* [Cosmscan](https://github.com/cosmscan/cosmscan-go) - Cosmos チェーン向けインデクサーエンジン。
* [interchain-indexer](https://github.com/Reecepbcups/interchain-indexer) - Python による Cosmos ブロックチェーンインデクサー。
* [Cosmos Indexer](https://github.com/DefiantLabs/cosmos-indexer) - Go による相関・直接データベースインデキシング機能を備えた汎用 DB スキーマインデクサー。
* [BDJuno](https://github.com/forbole/bdjuno) - RPC・gRPC エンドポイントから問い合わせた全チェーンのデータを PostgreSQL データベース内に保存し、その上にHasuraを使ったGraphQL APIを作成できるツール。

## フレームワーク

* [Cosmos SDK](https://github.com/cosmos/cosmos-sdk/) - Go で高い価値を持つパブリックブロックチェーンを構築するフレームワーク。
* [Orga](https://github.com/nomic-io/orga) - Rust による状態機械遷移向け ABCI フレームワーク。
* [CosmosSwift](https://github.com/CosmosSwift) - Tendermint コンセンサス上に Swift でブロックチェーンアプリケーションを構築。
* [ABCI-RS](https://github.com/devashishdxt/abci-rs) - ABCI アプリケーションを作成する Rustクレート。
* [CosmRS](https://github.com/cosmos/cosmos-rust/tree/main/cosmrs) - Rust で Cosmos ブロックチェーンアプリケーションを構築するフレームワーク。

## 仮想マシン

Cosmos SDK上で実行される仮想マシン向けのモジュールやフレームワークです。

* [Agoric SDK](https://github.com/Agoric/agoric-sdk) - Agoric JavaScript スマートコントラクトプラットフォーム。
* [CosmWasm](https://github.com/CosmWasm/cosmwasm) - WASM 仮想マシン・Rust スマートコントラクト。
* [Ethermint](https://github.com/evmos/ethermint) - Ethereum 仮想マシン。
* [Polaris](https://github.com/berachain/polaris) - モジュラーな Ethereum 仮想マシン。

## IBC

* [IBCprotocol.dev](https://ibcprotocol.dev/) - IBCプロトコルのウェブサイト。
* [Interchain Standards](https://github.com/cosmos/ibc/) - Cosmos ネットワーク・インターチェーンエコシステム向け Interchain Standards (ICS)。
* [cosmos/ibc-go](https://github.com/cosmos/ibc-go) - Go による Inter-Blockchain Communication プロトコル (IBC) 実装。
* [cosmos/ibc-rs](https://github.com/cosmos/ibc-rs) - Rust による Inter-Blockchain Communication (IBC) プロトコル実装。
* [interchaintest](https://github.com/strangelove-ventures/interchaintest) - IBC チェーン向け E2E テストフレームワーク。
* [cosmos/relayer](https://github.com/cosmos/relayer) - Go による IBCリレイヤー。
* [informalsystems/hermes](https://github.com/informalsystems/hermes) - Rust による IBCリレイヤー。
* [confio/ts-relayer](https://github.com/confio/ts-relayer) - TypeScript による IBCリレイヤー。
* [local-interchain](https://github.com/Reecepbcups/local-interchain) - 任意の OS 上でローカル IBC 開発環境を迅速に起動。
* [IBC-escrow-auditor](https://github.com/Cordtus/ibc-escrow) - 対向チェーンのIBCロックアップアカウントと照合し、オンチェーンのトークン量を確認・報告するスタンドアロンツール。

## テスト

* [interchaintest](https://github.com/strangelove-ventures/interchaintest) - IBC チェーン向け E2E テストフレームワーク。
* [atomkraft](https://github.com/informalsystems/atomkraft-cosmos) - Cosmos SDK ブロックチェーンの E2E テストフレームワーク。
* [python-iavl](https://github.com/crypto-com/python-iavl) - Python 実装の IAVL 検査ツール。
* [cosmos-sdk-codeql](https://github.com/crypto-com/cosmos-sdk-codeql) - 一般的な Cosmos SDK バグ向け CodeQL クエリ。
* [tm-load-test](https://github.com/informalsystems/tm-load-test) - CometBFT 負荷テストアプリケーション。
* [cosmosloadtester](https://github.com/orijtech/cosmosloadtester) - Cosmos SDK ブロックチェーン向け負荷テスター。
* [CometMock](https://github.com/informalsystems/CometMock) - エンドツーエンドテストにおける CometBFTとそのまま差し替えて使える代替実装。
* [quint](https://github.com/informalsystems/quint) - 快適なツール群を備えた実行可能仕様言語。
* [apalache](https://github.com/informalsystems/apalache) - TLA+・Quint 向けシンボリックモデルチェッカー APALACHE。

## テンプレート

Cosmos SDKブロックチェーンの構築を始めるためのテンプレートです。

* [ignite](https://github.com/cli) - UIの導入、新しいCosmos SDKモジュールの作成、既存モジュールの利用を支援し、新しいCosmos SDKブロックチェーンのひな形を素早く作成。
* [cosmosregistry/example](https://github.com/cosmosregistry/example) - Cosmos SDK モジュールのテンプレート・サンプルリポジトリ。
* [cosmosregistry/chain-minimal](https://github.com/cosmosregistry/chain-minimal) - 最小限の Cosmos SDK ブロックチェーンのテンプレート・サンプル。
* [spawn](https://github.com/rollchains/spawn) - テスト、GitHubとの連携、すぐに利用できるテストネットを備えた新しいCosmos SDKブロックチェーンを生成。

## ツール

### CLI

* [tmkms](https://github.com/iqlusioninc/tmkms) - Tendermint バリデーター向け鍵管理システム。
* [cosmosvisor](https://github.com/cosmos/cosmos-sdk/tree/main/cosmovisor#readme) - Cosmos SDK アプリケーションバイナリーのアップグレードを自動化。
* [cosmosvanity](https://github.com/hukkinj1/cosmosvanity) - Cosmosの任意の文字列パターンを含むアドレス（vanityアドレス）を生成する CLI ツール。
* [findaccount](https://github.com/blockpane/findaccount) - 同じアドレスを持つアカウントが複数の Cosmos チェーンに存在するかを調べるツール。
* [lens](https://github.com/strangelove-ventures/lens) - 中核 Cosmos-SDK モジュールをサポートする任意の Cosmos チェーンとやり取りする CLI ツール。
* [cosmology](https://github.com/cosmology-tech/cosmology) - Osmosis での暗号資産取引、流動性プール参加、ステーク報酬に使う CLI ツール。
* [multisig](https://github.com/informalsystems/multisig) - Cosmos SDK チェーンでマルチシグアカウントを管理する CLI ツール。
* [cosmos-genesis-tinkerer](https://github.com/hyphacoop/cosmos-genesis-tinkerer) - Cosmos genesis ファイルを変更する CLI ツール。
* [airdrop-tools](https://github.com/Reecepbcups/airdrop-tools) - 複数形式からさまざまなトークンを配布するのを支援する CLI スクリプト。
* [cosmos.nix](https://github.com/informalsystems/cosmos.nix) - Cosmos・CosmWasm 向け [Nix](https://nixos.org/) サポート。

### GUI

* [REStake](https://restake.app) - Authz を使う Cosmos ブロックチェーン向け自動複利アプリ（[ソースコード](https://github.com/eco-stake/restake)）。
* [Cosmfaucet](https://github.com/scalalang2/cosmfaucet) - Cosmos ベースブロックチェーン向けセルフホスト型フォーセット（トークン配布）サービス。
* [Cosmos Notifier](https://cosmos-notifier.decrypto.online) - Telegram・Discord 向けガバナンス通知ツール（[ソースコード](https://github.com/shifty11/cosmos-notifier)）。
* [Skip:Go](https://go.skip.build) - IBC トークン転送、自動スワップ、マルチホップルーティング（[ソースコード](https://github.com/skip-mev/skip-go-app)）。

### ボット

* [Cosmos Discord Faucet](https://github.com/0x4139/cosmos-discord-faucet) - Cosmos SDK ブロックチェーン向け設定可能なDiscordフォーセット（トークン配布ツール）。
* [Cosmos Discord Bot](https://github.com/okp4/discord-bot) - Cosmos SDK ブロックチェーン向け汎用 Discord ボット。
* [cosmos-proposals-checker](https://github.com/QuokkaStake/cosmos-proposals-checker.git) - 複数の Cosmos SDK チェーンで、ウォレットが提案に投票していない場合に通知するボット。
* [cosmos-transactions-bot](https://github.com/QuokkaStake/cosmos-transactions-bot.git) - 複数の Cosmos SDK チェーンで希望するフィルターに一致するトランザクションを通知するボット。
* [cosmos-balance-bot](https://github.com/Reecepbcups/cosmos-balance-bot) - 複数の Cosmos SDK チェーンで、設定した間隔でウォレット残高を通知するボット。
* [validator-stats-notifications](https://github.com/Reecepbcups/validator-stats-notifs) - 順位、時間の経過に伴う委任の推移、重複を除いた委任者を含む Discord 告知。
* [Secret Stashh NFT Bot](https://github.com/Reecepbcups/stashh-bot) - Secret Network NFT コレクションの販売、オークション、購入を通知する Discord ボット。
* [DAODAO Treasury Bot](https://github.com/Reecepbcups/dao-treasury-bot) - DAOの保有資産の法定通貨換算額を追跡する Discord ボット。
* [Cosmos Price Bot](https://github.com/Reecepbcups/cosmos-price-bot) - DEX を通じて任意の Cosmos トークンの米ドル価格をニックネームに設定する Discord ボット。

## ノード運用

### ユーティリティ

* [Cosmos Cache](https://github.com/Reecepbcups/cosmos-endpoint-cache) - 事前に定めた時間にわたって応答をキャッシュし、Cosmosへのクエリを最適化（正規表現を使用）。
* [cosmos-operator](https://github.com/strangelove-ventures/cosmos-operator) - Cosmos ノードを管理する Kubernetesオペレーター。
* [Wallet-generator](https://github.com/Cordtus/wallet_generator) - ニーモニックから鍵ペアとウォレットアドレス、秘密鍵から公開鍵とウォレットアドレス、公開鍵からウォレットアドレスを手動生成。任意のHDパス（コイン種別を含む）を指定可能。

## エコシステム

Cosmos SDKを使って構築されたプロジェクトは、[Cosmos Directory](https://cosmos.directory)で確認できます。

## ウォレット

Cosmos チェーンをサポートするウォレットの一覧は <https://cosmos.network/ecosystem/wallets> にあります。

## ブログ

エコシステムの成長とともにコンテンツも増えます。自分で調査し、興味を持ったプロジェクトをフォローしてください。

* [Cosmos とは？](https://cosmos.network/intro/)
* [Cosmos ブログ](https://blog.cosmos.network/)
* [Interchain Foundation ブログ](https://interchain-io.medium.com)

### 記事

* [Cosmos Dev Series: Cosmos ブロックチェーンのアップグレード](https://zerofruit.medium.com/cosmos-dev-series-cosmos-sdk-based-blockchain-upgrade-b5e99181554c)
* [ハードニングガイド](https://cyber.orijtech.com/scsec/cosmos-hardening)
* [フロントエンドを Cosmos ブロックチェーンへ接続する方法](https://dev.to/kikiding/how-to-connect-your-frontend-to-cosmos-blockchain-5fcn)
* [（それほど）スマートではない Cosmos: 一般的な Cosmos アプリ脆弱性の例](https://github.com/crytic/building-secure-contracts/tree/master/not-so-smart-contracts/cosmos)
* [Go コーディングガイド](https://cyber.orijtech.com/scsec/cosmos-go-coding-guide)
* [Cosmos セキュリティハンドブック — Part 1](https://www.faulttolerant.xyz/2024-01-16-cosmos-security-1)

## 関連

* [Awesome CosmWasm](https://github.com/InterWasm/cw-awesome)
