---
title: "Awesome Algorand"
description: "Algorandを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-aorumbayev-awesome-algorand-readme-md"
---

# Awesome Algorand

Algorandを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [中核資料](#core-resources)
  - [公式資料](#official-resources)
  - [AlgoKit](#algokit)
  - [AlgoKitテンプレート](#algokit-templates)
- [学習資料](#learning-resources)
  - [短期集中講座](#crash-courses)
  - [一般講座](#general-courses)
  - [チュートリアル](#tutorials)
  - [コミュニティ資料](#community-resources)
  - [プロジェクト](#projects)
  - [AlgoKitコミュニティテンプレート](#algokit-community-templates)
- [開発とツール](#development--tools)
  - [言語別SDK・ツール](#language-sdks--tools)
  - [スマートコントラクト開発](#smart-contract-development)
  - [CLI](#cli)
  - [IDE](#ides)
  - [テストとデバッグ](#testing--debugging)
  - [配備と環境](#deployment--environment)
- [ウォレットとアセット操作](#wallets--asset-interaction)
  - [ウォレットプロバイダー](#wallet-providers)
  - [ウォレット開発](#wallet-development)
  - [ブロックチェーンエクスプローラー](#blockchain-explorers)
  - [ポートフォリオ追跡](#portfolio-trackers)
  - [名前サービス](#name-services)
- [インフラとエコシステムサービス](#infrastructure--ecosystem-services)
  - [ノードとコンセンサス参加](#nodes--consensus-participation)
  - [ブロックチェーンブリッジ](#blockchain-bridges)
  - [オラクル](#oracles)
  - [セキュリティ監査サービス](#security-auditing-services)
  - [メトリクス・分析サービス](#metrics-and-analytics-services)
- [SSI・DID・検証可能な資格情報](#ssi-did-and-verifiable-credentials)
- [AIと機械学習](#ai-and-machine-learning)
- [アプリケーション基盤と事例](#application-platforms--examples)
  - [DeFiプラットフォーム](#defi-platforms)
  - [NFTマーケットプレイス](#nft-marketplaces)
  - [予測市場](#prediction-markets)
  - [サブスクリプション管理](#subscription-management)
  - [分散型投票](#decentralized-voting)
- [標準](#standards)
  - [Algorand Request for Comments](#algorand-request-for-comments)

## 中核資料

### 公式資料

> 公式資料についての補足情報。

- [Algorand](https://algorandtechnologies.com/) - 公式ウェブサイト
- [Algorand Foundation](https://algorand.foundation/) - アルゴランド財団の公式ウェブサイト
- [Algorand FAQ](https://algorand.foundation/faq) - アルゴランド財団が維持するFAQ
- [Algorand Governance](https://governance.algorand.foundation/) - アルゴランドガバナンスプログラムの公式ウェブサイト
- [Algorand Developer Portal](https://dev.algorand.co/) - アルゴランド開発者向けポータル
- [Algorand Protocol Specs](https://github.com/algorandfoundation/specs) - アルゴランドプラットフォームのプロトコルレベル仕様書
- [Algorand Discord](https://discord.com/invite/YgPTCVk) - アルゴランドの公式Discordサーバー

### AlgoKit

> AlgoKitについての補足情報。

- [algokit-cli](https://github.com/algorandfoundation/algokit-cli) - アルゴランドネットワーク上で開発を行う開発者向けのワンストップツールであるアルゴランドAlgoKit CLI
- [algokit-lora](https://lora.algokit.io/mainnet) - アルゴランドアプリケーションのテスト用のローカルネットワークエクスプローラおよびアプリケーションビルダー（契約のデプロイ、状態の確認、取引の作成など）
- [AlgoKit Docs](https://dev.algorand.co/algokit/algokit-intro/) - アルゴランドAlgoKitの公式ドキュメンテーション
- [algokit-utils-py](https://github.com/algorandfoundation/algokit-utils-py) - アルゴランドAlgoKitのPython用ユーティリティ
- [algokit-core](https://github.com/algorandfoundation/algokit-core) - マルチ言語のコアプリミティブ（Rust + FFIバインディング）が、上位のAlgoKitツール（暗号、エンコーディング、プロトコル論理）を駆動
- [algokit-utils-ts](https://github.com/algorandfoundation/algokit-utils-ts) - アルゴランドAlgoKitのTypeScript用ユーティリティ
- [algokit-client-generator-py](https://github.com/algorandfoundation/algokit-client-generator-py) - アルゴランドAlgoKitのTypeScript用タイプクライアントジェネレーター
- [algokit-client-generator-ts](https://github.com/algorandfoundation/algokit-client-generator-ts) - アルゴランドの公式PythonからTEALへのコンパイラ。Python構文でアルゴランド仮想マシン（AVM）上で実行可能なコードを書けるようにする
- [puya](https://github.com/algorandfoundation/puya) - アルゴランドの公式TypeScriptからTEALへのコンパイラのフロントエンド。コアのpuyaコンパイラを活用し、TypeScript構文でアルゴランド仮想マシン（AVM）上で実行可能なコードを書けるようにする
- [puya-ts](https://github.com/algorandfoundation/puya-ts) - アルゴランドブロックチェーンにアクセスしなくても、アルゴランドPythonスマートコントラクトのユニットテストを行うためのPythonライブラリ
- [algorand-python-testing](https://github.com/algorandfoundation/algorand-python-testing) - アルゴランドブロックチェーンにアクセスしなくても、アルゴランドスマートコントラクトのユニットテストを行うためのTypeScriptライブラリ
- [algorand-TypeScript-testing](https://github.com/algorandfoundation/algorand-TypeScript-testing) - VSCode拡張機能。アルゴランドPython、TypeScript、TealScriptおよび原始TEALスマートコントラクトの行単位でのデバッグを、AVMトレースを介して実行可能にする
- [algokit-avm-vscode-debugger](https://github.com/algorandfoundation/algokit-avm-vscode-debugger) - AlgorandのPython、TypeScript、TealScriptおよびraw TEALスマートコントラクトの行ごとのデバッグに向けたVSCode拡張機能。AVMトレースを介して実行。

### AlgoKitテンプレート
> AlgoKitテンプレートについての補足情報。 関連資料: [Creating AlgoKit Templates](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/tutorials/algokit-template.md)。

- [algokit-python-template](https://github.com/algorandfoundation/algokit-python-template) - 公式AlgoKitのAlgorand Pythonテンプレートは、Pythonでスマートコントラクトを開発・デプロイするための生産環境に整備されたベースラインを提供します。
- [algokit-TypeScript-template](https://github.com/algorandfoundation/algokit-TypeScript-template) - 公式AlgoKitのAlgorand TypeScriptテンプレートは、TypeScriptでスマートコントラクトを開発・デプロイするための生産環境に整備されたベースラインを提供します。
- [algokit-react-frontend-template](https://github.com/algorandfoundation/algokit-react-frontend-template) - 公式Algo及Kit Reactフロントエンドテンプレートは、Algorand依存関係を統合したReactフロントエンドアプリケーションの開発・デプロイに必要な生産環境に整備されたベースラインを提供し、テンプレートビルダーがスタンドアローンアルゴキットフロントエンドテンプレートを実装する際の参考となるものです。
- [algokit-fullstack-template](https://github.com/algorandfoundation/algokit-fullstack-template) - 公式AlgoKitフルスタックテンプレートは、Algorand依存関係を統合したフルスタックアプリケーションの開発・デプロイに必要な生産環境に整備されたベースラインを提供し、テンプレートビルダーがスタンドアローンアルゴキットテンプレートを一つのフルスタックテンプレートプロジェクトに統合する方法を示す参考となるものです。

## 学習資料

> 学習資料についての補足情報。

### 短期集中講座

- [Algorand School](https://github.com/cusma/algorand-school) - クラッシュコーススライド資料。
- [Zero to Hero PyTeal](https://www.youtube.com/playlist?list=PLwRyHoehE435ttTjvFZA-DyqHYIYc26K_) - PyTealクラッシュコース動画講義。
- [Algorand, efficient self-sustaining Blockchain](https://prismic-io.s3.amazonaws.com/algorandfoundationv2/d5407f96-8e7d-4465-9656-2abb558850a9_Proof+of+Stake+Blockchain+Efficiency+Framework.pdf) - プルーフ・オブ・ステークブロックチェーン効率フレームワーク。
- [Algorand Efficiency](https://www.youtube.com/watch?v=e8s8Ui8vDaY) - Algorandの動作原理とその効率について。
- [Introduction to AVM and Applications](https://www.youtube.com/watch?v=fTAPLiPcj28) - Algorand仮想マシンアーキテクチャおよびAlgorandスマートコントラクト（アプリケーション）についての紹介。
- [Introduction to PyTeal](https://www.youtube.com/watch?v=zXDqJHK_Bqs) - PyTeal、アルゴランドスマートコントラクト開発用のPythonフレームワーク（with [@matteojug](https://twitter.com/matteojug)）の解説
- [PyTeal ABI Smart Contracts](https://www.youtube.com/watch?v=USLcyfVD_ws) - アルゴランド上で _ABI適合_ のスマートコントラクトを開発するためのPyTealの使用。最終ライブコーディングセクション（with [@deanste](https://twitter.com/_deanste)）
- [Beaker](https://www.youtube.com/watch?v=031VvOxvuxY) - アルゴランドスマートコントラクト開発用のフレームワーク、PyTealをベースにしたクライアントおよびテスト。ライブコーディングセッション（with [@HGKimChris](https://twitter.com/HGKimChris)）
- [Dissecting Algorand](https://medium.com/coinmonks/dissecting-algorand-e962f48f8c72) - Algorandの紹介およびその内部仕組みの分析。
- [Zero to Hero Blockchain Algorand](https://github.com/VKappaKV/Zero-To-Hero-blockchain-Algorand) - Algorand開発者向けのカスタム学習パス。


### 一般講座

> 一般講座についての補足情報。

- [Foundations of Blockchains](https://www.youtube.com/watch?v=KNJGPI0fuFA&list=PLEGCF-WLh2RLOHv_xUGLqRts_9JxrckiA) - コロンビア大学のコンピュータサイエンス教授ティム・ラウガーデンによる、ブロックチェーンプロトコルの基本原理、概念および性質を強調したビデオコース

### チュートリアル

- [Lending pool using Reach](https://developer.algorand.org/tutorials/building-a-lending-pool-using-reach/) - Reach言語を使って貸し出しプールを構築するチュートリアル。
- [Creating a License Manager Contract](https://developer.algorand.org/tutorials/creating-a-license-manager-contract-utilizing-pyteal-and-inner-transactions/) - PyTEALおよびインナートランザクションの利用方法に関するチュートリアル。
- [Stateless session management with the Pera wallet](https://developer.algorand.org/tutorials/stateless-session-management-with-the-pera-wallet/) - Pera WalletとNext.jsおよびReduxを組み合わせた接続例。
- [AlgoMinter](https://developer.algorand.org/tutorials/algominter-a-web-app-for-minting-assets-using-python-algosigner-and-anvil-platform/) - Python、AlgoSigner、Anvil Platformを使って資産を発行するウェブアプリを構築するチュートリアル。
- [Getting Started with Django, Python, and Algorand](https://developer.algorand.org/solutions/getting-started-with-python-algorand-sdk-and-django/) - Algorand開発者ポータルからのチュートリアル。
- [MultiSig with Algorand for Co-operative Groups](https://developer.algorand.org/tutorials/decentralised-co-operative-unions-algorand-multisignature-account/) - Algorandマルチシグネチャアカウントを用いた分散型協同連合。
- [Adding Notes to Transactions](https://developer.algorand.org/tutorials/v2-read-and-write-transaction-note-field-python/) - Pythonでトランザクションノートフィールドの読み書きを行うチュートリアル。
- [Create Assets with a Stateful Smart Contract](https://developer.algorand.org/solutions/using-stateful-smart-contract-to-create-algorand-standard-asset/) - ステートフルスマートコントラクトを使ってAlgorand標準資産を作成するチュートリアル。
- [Artificial Intelligence on Algorand](https://developer.algorand.org/solutions/artificial-intelligence-on-algorand/) - 機械学習を用いてAlgorandブロックチェーン上のUSDC安定通貨の取引量を予測するチュートリアル。

### コミュニティ資料

> コミュニティ資料についての補足情報。

### プロジェクト

> プロジェクトについての補足情報。

- [arc3.xyz](https://github.com/barnjamin/arc3.xyz) - ARC3に準拠したNFTの発行に使えるDapp
- [Auction Demo](https://github.com/algorand/auction-demo) - スマートコントラクトを用いたオンチェーンNFTオークション
- [Algorand Session Wallet](https://github.com/barnjamin/algorand-session-wallet) - セッションウォレットにより、複数のウォレット間で持続的なウォレット接続を可能にする
- [AlgoWorld-Contracts](https://github.com/algoworldNFT/algoworld-contracts) - AlgoWorldが使用するすべてのスマートコントラクトをPythonで記述したコレクション
- [AlgoWorld-Swapper](https://github.com/algoworldNFT/algoworld-swapper) - 無料かつ信頼性の高いASA交換ツール、アルゴランドスマートサインで駆動
- [WalletConnect Example DApp](https://github.com/algorand/walletconnect-example-dapp) - アルゴランドウォレットコンネクトデモ
- [TinyBar App](https://github.com/aorumbayev/tinybar) - TinyManからASA価格を追跡する、小さなmacOSメニューバーアプリ
- [algonim](https://github.com/cusma/algonim) - 最初のアルゴランドミニパズルゲーム。Python+PyTEALで書かれたもの（by [@cusma](https://twitter.com/cusma_b)）
- [algorealm](https://github.com/algorealm/algorealm) - アルゴランド王域の王冠と王杖を獲得！（Python+PyTEALで書かれたもの（by [@cusma](https://github.com/cusma)））
- [algorealm-ui](https://github.com/algorealm/algorealm-ui) - @aorumbayevが開発したalgorealm CLIゲームのWebCLIエミュレータ
- [minter](https://github.com/algofishexe/minter) - ARC-69コミュニティ標準に従ってアルゴランドNFTを大量に発行。Node.jsで書かれたもの（by [@fish.exe](https://twitter.com/AlgofishExe)）
- [algovanity](https://algovanity.com/) - アルゴランドのヴァニティアドレス生成ツール（by [Ripe](https://github.com/Ripe/algovanity)）
- [galvanity](https://github.com/shmutalov/galvanity) - Goベースのアルゴランドのカスタムアドレス生成ツール
- [genpyteal](https://github.com/runvnc/genpyteal) - (主に)通常のPythonからPyTealを生成
- [AgorHash](https://github.com/bafio89/agorhash) - 公開・許可なし・分散型・規制されない自由な発言プロトコル
- [QRCode Generator](https://github.com/emg110/algorand-qrcode) - アルゴランドARC-26URI用のユニバーサルQRコード生成モジュール
- [algofractals](https://github.com/aorumbayev/algofractals) - ランダムに生成されたマンデルブロット分画にARC69タグを埋め込みながらNFTを発行（2023年12月31日にアーカイブ）
- [algorewards](https://algorewards.github.io/) - 無料かつ非公式のアルゴランドガバナンス報酬計算ツール。GitHub Pages上にホストされている
- [Pipeline-UI](https://github.com/headline-design/pipeline-ui) - React.jsベースのコンポーネントライブラリでアルゴランドDappの迅速展開を可能にする
- [STOI](https://stoi.org/) - マイクロDAOを用いて歌の所有権が分散化された
- [AlgoTables](https://algotables.github.io/) - ALGOを保有し、アルゴランドエコシステムに参加する一般ユーザーを支援するツールセット
- [AlgoPing](https://github.com/aorumbayev/algoping) - 公開アルゴランドノード（AlgoExplorer、AlgoNodeなど）が正常でない場合に、 [tweet](https://twitter.com/algoping)を発行する、小さなクロントーク。
- [staketaxcsv](https://github.com/hodgerpodger/staketaxcsv) - アルゴランドおよびその他のブロックチェーン向けの課税取引CSVを生成するPythonバックエンド（by [stake.tax](https://stake.tax)）
- [Automated Prediction Market Maker on Algorand](https://github.com/dspytdao/Algo_AMM) - [algoAMM.com](https://algoamm.com)にホストされたプロジェクトを含むバックエンドリポジトリ
- [AlgoDepo](https://github.com/dspytdao/AlgoDepo) - シングルデポジットアプリ アルゴランド
- [AlgoDeposit](https://github.com/dspytdao/AlgoDeposit) - AMMプールアプリ アルゴランド
- [txnDuck](https://github.com/No-Cash-7970/txnDuck) - アルゴランドブロックチェーン向けの取引構築ツール
- [lazylora](https://github.com/aorumbayev/lazylora) - アルゴランドブロックチェーンを探索するためのターミナルUI
- [wen-tools](https://github.com/LoafPickleWW/wen-tools) - アルゴランド用の大量操作ツール
- [algonoderewards](https://github.com/cryptomalgo/algonoderewards) - Nodely APIを用いてアルゴランドノードの報酬を追跡・可視化
- [xGov-Guru](https://github.com/SilentRhetoric/xGov-Guru) - xGovの投票データおよび提言を閲覧するツール
- [Algo Snow](https://dragmz.itch.io/algo-snow) - アルゴランドテーマのインタラクティブブラウザベースゲーム
- [Algorand Mempool Visualizer](https://mempool.algorand.ing/) - アルゴランドメモリプールに進入する取引のリアルタイム可視化
- [AlgoRadio](https://algocities.pages.dev/landmark/allgoradio) - 実験的なアルゴランドテーマのラジオ体験
- [Sign Zero](https://sign-zero.vercel.app/) - 認証および署名フローを探索する軽量デモアプリ

### AlgoKitコミュニティテンプレート

> AlgoKitコミュニティテンプレートについての補足情報。

- [algokit-tealish-template](https://github.com/aorumbayev/algokit-tealish-template) - TealishとAlgojigを使用したスマートコントラクトプロジェクトの迅速開始用AlgoKitコミュニティテンプレート
- [algokit-goracle-template](https://github.com/GoracleNetwork/algokit_default_template) - Goracleとの相互作用を実行するスマートコントラクトプロジェクトの迅速開始用AlgoKitコミュニティテンプレ及
- [algokit-subtopia-template](https://github.com/subtopia-algo/algokit-subtopia-template) - Subtopiaプラットフォームとの相互作用を実行するDAppフロントエンドプロジェクトの迅速開始用AlgoKitコミュニティテンプレート

## 開発とツール

> 開発とツールについての補足情報。

### 言語別SDK・ツール

> 言語別SDK・ツールについての補足情報。

#### C/C++

- [vertices-algorand-sdk](https://github.com/vertices-network/c-vertices-sdk) - Vertices SDKは開発者にブロックチェーンとの相互作用を簡単に行えるようにするデバイスアクセスを提供します
- [unreal-algorand-sdk](https://github.com/Wisdom-Labs/Algorand-Unreal-Engine-SDK) - アルゴランドブロックチェーンプラットフォーム用の公式Unreal Engineプラグイン
- [cplusplus-algorand-sdk](https://github.com/Wisdom-Labs/Algorand-CPlusPlus-SDK) - アルゴランドチェーン用のC++ SDK：このリポジトリはアルゴランドチェーン上でC++ SDKを提供しています

#### Dart

- [dart-algorand-sdk](https://pub.dev/packages/algorand_dart) - DartアルゴランドSDK

#### Go

- [go-algorand](https://github.com/algorand/go-algorand) - アルゴランドの公式Go実装
- [go-algorand-sdk](https://github.com/algorand/go-algorand-sdk) - アルゴランドGolang SDK
- [conduit](https://github.com/algorand/conduit) - アルゴランドのデータパイプラインフレームワーク

#### PHP

- [php-algorand-sdk](https://github.com/ffsolutions/php-algorand-sdk) - アルゴランドPHPSDK（by [@ffsolutions](https://github.com/ffsolutions)）
- [algorand-php](https://github.com/RootSoft/algorand-php) - アルゴランドPHPSDK（by [@RootSoft](https://github.com/RootSoft)）

#### Python

- [py-algorand-sdk](https://github.com/algorand/py-algorand-sdk) - アルゴランドPython SDK
- [tinyman-py-sdk](https://github.com/tinymanorg/tinyman-py-sdk) - Tinyman Python SDK
- [smart-asa](https://github.com/algorandlabs/smart-asa) - ARC-20に基づくスマートASA PyTealのリファレンス実装

#### JavaScript & TypeScript

- [js-algorand-sdk](https://github.com/algorand/js-algorand-sdk) - アルゴランド JavaScript SDK およびサンプルコード
- [algo-builder](https://github.com/scale-it/algo-builder) - アルゴランド資産およびスマートコントラクトの開発を自動化するフレームワーク
- [algo-builder-templates](https://github.com/scale-it/algo-builder-templates) - Algo Builder向けのDAppテンプレート
- [algonaut.js](https://github.com/thencc/algonautjs) - フロントエンドDApp向けに簡単なアルゴSDK（TypeScript）
- [perawallet-connect](https://github.com/perawallet/connect) - Pera Walletをウェブアプリケーションに統合するJavaScript SDK
- [defly-connect](https://github.com/blockshake-io/defly-connect) - Defly Walletをウェブアプリケーションに統合するJavaScript SDK
- [subtopia-js](https://github.com/subtopia-algo/subtopia-js) - Subtopia JavaScript SDKがSubtopiaプラットフォームとのインタラクションを簡単に行えるインターフェースを提供
- [solid-algo-wallets](https://github.com/SilentRhetoric/solid-algo-wallets) - アルゴランド向けのSolidJSウォレット統合ライブラリ

#### Java

- [java-algorand-sdk](https://github.com/algorand/java-algorand-sdk) - アルゴランドJavaSDK

#### .NET

- [dotnet-algorand-sdk](https://github.com/RileyGe/dotnet-algorand-sdk) - アルゴランド.NETSDK（by [@RileyGe](https://github.com/RileyGe)）
- [unity-algorand-sdk](https://github.com/CareBoo/unity-algorand-sdk) - Unityでアルゴランドブロックチェーンを使用するアルゴランドSDK
- [unity-algorand-sdk-based-on-net-sdk](https://github.com/Vytek/AlgorandUnitySDK) - RileyGeによる.NETアルゴランドSDKをもとにした、簡易かつ粗いUnity SDK
- [dotnet-alogrand-sdk (2)](https://github.com/FrankSzendzielarz/dotnet-algorand-sdk) - アルゴランド.NETSDK（by [@FrankSzendzielarz](https://github.com/FrankSzendzielarz)）維持
- [dotnet-tinyman-sdk](https://github.com/geoffodonnell/dotnet-tinyman-sdk) - Tinyman .NET SDK
- [dotnet-yieldly-sdk](https://github.com/geoffodonnell/dotnet-yieldly-sdk) - Yieldly .NET SDK
- [powershell-algorand-module](https://github.com/geoffodonnell/powershell-algorand-module) - アルゴランドPowerShellモジュール

#### Rust

- [rust-algorand-sdk](https://github.com/manuelmauro/algonaut) - RustアルゴランドSDK

#### Swift

- [algorand-wallet](https://github.com/algorand/algorand-wallet) - アルゴランドウォレットのSwiftによる公式実装
- [swift-algorand](https://github.com/CorvidLabs/swift-algorand) - async/awaitおよびSwiftコンカレンシーをサポートする、現代的なアルゴランドブロックチェーン向けSwift SDK
- [swift-algorand-sdk](https://github.com/Jesulonimi21/Swift-Algorand-Sdk) - アルゴランドブロックチェーンとのインタラクションを可能にするSwift SDK
- [swift-algokit](https://github.com/CorvidLabs/swift-algokit) - Swift開発者向けのAlgoKitユーティリティ
- [swift-arc](https://github.com/CorvidLabs/swift-arc) - アルゴランドARCメタデータ標準（NFT用）を扱うSwiftライブラリ
- [swift-mint](https://github.com/CorvidLabs/swift-mint) - アルゴランドブロックチェーン上でNFTを発行するSwiftライブラリ
- [swift-algochat](https://github.com/CorvidLabs/swift-algochat) - Swiftで実装された、ハイブリッドECDHとPSKのランチングによるアルゴランド上での端末間暗号メッセージ

#### Ruby

- [TEALrb](https://github.com/joe-p/TEALrb) - アルゴランドスマートコントラクトを書くためのRubyDSL。（2023年1月22日にアーカイブ）


### スマートコントラクト開発

#### 言語とコンパイラー
- [pyteal](https://github.com/algorand/pyteal) - アルゴランドスマートコントラクトのPython実装
- [reach](https://docs.reach.sh) - クロスチェーン分散アプリケーション（DApp）を構築するためのドメイン特定言語
- [aqua-compiler](https://github.com/optio-labs/aqua-compiler) - アルゴランドブロックチェーン向けの表現力の高い高レベル言語で、TEALコードにコンパイルされる
- [algoml](https://github.com/petitnau/algoml) - アルゴランドスマートコントラクトを指定するためのドメイン特定言語で、TEALスクリプトにコンパイルされる
- [tealang](https://github.com/pzbitskiy/tealang) - アルゴランドASC1およびTEAL向けの高レベル言語
- [tealish](https://tealish.tinyman.org) - 読みやすさを重視した手続き的スタイルのアルゴランドVM言語で、TEALに焦点を当てたもの
- [TEALScript](https://github.com/algorand-devrel/TEALScript) - アルゴランドスマートコントラクト開発において、ネイティブなTypeScript構文、ツール、IDEサポートを提供

#### フレームワークとユーティリティ
- [beaker](https://github.com/algorandfoundation/beaker) - Python風のスマートコントラクトフレームワーク（PyTEAL DSLラッパー、クライアント＋テストユーティリティ）。（公式リポジトリ）
- [pyteal-utils](https://github.com/algorand/pyteal-utils) - PyTEALユーティリティライブラリ
- [avm-semantics](https://github.com/runtimeverification/avm-semantics) - アルゴランド仮想マシンとTEALセマンティクスのKフレームワークによる表現。スマートコントラクトのテストおよび形式検証を支援
- [d-asa](https://github.com/cusma/d-asa) - 債務アルゴランド標準アプリケーション。ACTUS基準に従った債務証券（債券、ローン、商業紙など）のトークン化を実現するリファレンス実装とインターフェースを提供


### CLI

- [AlgoRun](https://github.com/algorandfoundation/algorun) - アルゴランドメインネット参加ノードのセットアップと開始に必要なシンプルCLIツール


### IDE

> IDEについての補足情報。

#### vim

- [vim-algorand-teal](https://github.com/aldur/vim-algorand-teal) - アルゴランドのTEALスマートコントラクト言語向けのvim用最小限のシンタックスハイライト

#### IntelliJ

- [algoDEA](https://algodea-docs.bloxbean.com/) - アルゴランドIntelliJプラグイン

#### VSCode

- [Obsidian Labs/vscode-algorand](https://github.com/ObsidianLabs/vscode-algorand) - アルゴランドVS Code拡張機能
- [optio-labs/teal-debugger-extension](https://github.com/optio-labs/teal-debugger-extension) - VSCode内で最小のAVM設定でTEALをデバッグ

#### Visual Studio

- [Algorand Visual Studio Extension](https://github.com/FrankSzendzielarz/AlgorandVisualStudio) - C# TEALコンパイルおよびアルゴランドスマートコントラクト開発向けVisual Studio拡張


### テストとデバッグ

- [graviton](https://github.com/algorand/graviton) - アルゴランドのTEALブラックボックステストツールキット
- [algokit-avm-debugger](https://github.com/algorandfoundation/algokit-avm-debugger) - スタンドアローンのAVMデバッグアダプタプロトコル実装で、高度なコントラクトデバッグツールを実現
- [tealer](https://github.com/crytic/tealer) - 静的TEAL分析器で、脆弱性検出ツールセットを備え、迅速なコントラクトレビューを可能にする
- [irulan](https://irulan.dev/) - スマートコントラクトのデプロイ・テストを行うウェブアプリ（[open source! + PRs welcome](https://github.com/thencc/irulan)）
- [algojig](https://github.com/Hipo/algojig) - アルゴランドスマートコントラクトのテストツール
- [tealinspector](https://github.com/Hipo/tealinspector) - Hipo labsによるTEALコードの迅速かつ簡単なデバッグ
- [swift-algotest](https://github.com/CorvidLabs/swift-algotest) - モックチェーンをサポートするアルゴランドスマートコントラクト向けのSwiftテストフレームワーク


### 配備と環境

- [Algorand Sandbox](https://github.com/algorand/sandbox) - アルゴランド開発環境を迅速かつ簡単に作成・設定する方法
- [Algorand Sandbox Dev](https://github.com/MakerXStudio/algorand-sandbox-dev) - Docker Hub でのイメージ。ローカル開発やCI/CDでの利用を目的としたもの。（2024年1月2日でアーカイブ）
- [Official Algod Container](https://hub.docker.com/r/algorand/algod) - Algorand Inc. による Algod Docker Hub イメージ
- [Official Conduit Container](https://hub.docker.com/r/algorand/conduit) - Algorand Inc. による Conduit Docker Hub イメージ


## ウォレットとアセット操作

### ウォレットプロバイダー

> ウォレットプロバイダーについての補足情報。
> ウォレットプロバイダーについての補足情報。 関連資料: [attacks](https://twitter.com/myalgo_/status/1632862464244162560)。

- [Pera Wallet](https://github.com/perawallet) - モバイルおよびデスクトップデバイス向けの安全でオープンソースかつコミュニティが運営するウォレット。公式Algorandウォレット開発チームが維持しています。
- [Method Wallet](https://methodwallet.app/) - Algorandウォレットを愛でるあなたへ。
- [Defly Wallet](https://defly.app/) - Deflyは、Algorandウォレットに優れたDeFi機能を統合したウォレットです。
- [Exodus](https://www.exodus.com/) - マルチコインウォレットにAlgorand対応を備えたもの。
- [A-Wallet](https://a-wallet.net/) - AWalletは、オープンソースであり、HTMLのみを使用し、企業向けに最適化され、安全なAlgorandウォレットです。
- [Liquid Auth](https://github.com/algorandfoundation/liquid-auth) - パスキーを暗号鍵ペアにバインドし、安全なペア間接続を可能にする、セルフホストサービス。
- [Kibisis](https://github.com/kibis-is/web-extension) - ReactとTypeScriptで構成されたオープンソースAlgorandウォレットウェブ拡張機能。


### ウォレット開発

- [use-wallet](https://github.com/txnlab/use-wallet) - アルゴランド対応ウォレットをウェブアプリで使用するReacthooks。[txnlab](https://www.txnlab.dev/)が開発。
- [use-wallet-js](https://github.com/TxnLab/use-wallet-js) - 分散型アプリケーションにAlgorandウォレットを統合するためのTypeScriptライブラリ。
- [rsagg](https://github.com/dragmz/rsagg) - GPUで高速化されたAlgorand「ヴァニティ」アドレス生成を実現するRustライブラリ。


### ブロックチェーンエクスプローラー

> ブロックチェーンエクスプローラーについての補足情報。

- [Allo](https://allo.info) - Nodelyが提供する、すべてのネットワークをカバーする統合されたAlgorandエクスプローラー。
- [Pera Explorer](https://explorer.perawallet.app/) - アルゴランドアカウント、標準資産（ASA）エクスプローラー。[Pera Wallet](https://perawallet.app/)が開発
- [Algorand Ballet](https://akaalias.github.io/algorand-ballet/) - Algorandアカウントの2次元グラフ。
- [Algorand Multiverse](https://algo3d.live/) - Algorandアカウントの3次元グラフ。
- [AlgoSurf](https://algo.surf/) - アルゴランドネットワークエクスプローラー（`localhost`でローカルネットをサポート）
- [Algo Explorer](https://github.com/corvid-agent/algo-explorer) - リアルタイム取引モニタリングを備えた現代的なAlgorandブロックチェーンエクスプローラー。


### ポートフォリオ追跡

> ポートフォリオ追跡についての補足情報。

- [CompX](https://app.compx.io/dashboard) - Algorandブロックチェーン上で資産、報酬、ヤードファーミング、取引、NFTをどこでもいつでも追跡または検索できる。以前はAlgogator.Financeと呼ばれていた。
- [ASA Stats](https://www.asastats.com/) - 複数のウォレットアドレス（最大5つ）からAlgorand資産の評価を一括で把握できるポートフォリオトラッカー。


### 名前サービス

> 名前サービスについての補足情報。

- [NFDomains](https://nf.domains/) - アルゴランド名サービスおよびNFD（非代替ドメイン）マーケットプレイス — ウォレットアドレスにユニークかつ読みやすいエイリアスを提供


## インフラとエコシステムサービス

### ノードとコンセンサス参加

- [Algorand - The Undocumented Docs](https://github.com/AlgoChads/algorand-undoc-docs) - アーカイブノードおよびインデクサの設定に関する開発ノート（その他も含む）。
- [Nodely](https://nodely.io) - 無料ノード／インデクサAPI、ノードの運用に関するFAQ、ノード／インデクサの日々のスナップショット。
- [Algorand Node UI](https://github.com/algorand/node-ui) - リモートAlgorandノード管理用のターミナルUI
- [nodekit](https://github.com/algorandfoundation/nodekit) - ローカルでAlgorandノードを実行・管理するためのターミナルUI
- [SubQuery](https://subquery.network) - アルゴランド向けオープンで高速かつ柔軟で分散型のクロスチェーンデータインデクサ（[getting started guide](https://academy.subquery.network/quickstart/quickstart_chains/algorand.html)）
- [AlloCTRL](https://github.com/AlgoNode/alloctrl) - あなたのローカルマシンから、ノードおよび参加キーを安全に管理できるシンプルでオープンソースのダッシュボード
- [reti](https://github.com/algorandfoundation/reti) - Algorand「The Reti」のコンセンサスインセンティブに向けた契約、ノードデーモン、UI、これにより分散型ステーキングプールの参加拡大とネットワークセキュリティの強化が可能


### ブロックチェーンブリッジ

> ブロックチェーンブリッジについての補足情報。

- [Algomint](https://algomint.io/) - 中央集約型BTCおよびETHブリッジ（Algorandへ）
- [Messina](https://messina.one/) - ALGO — ETH 2方向Messina.oneブリッジにより、EthereumとERC-20トークンとのAlgorand間の相互運用性が可能になる


### オラクル

> オラクルについての補足情報。

- [Gora](https://www.gora.io/) - アルゴランドブロックチェーンと現実世界を接続する分散型オラクルネットワーク


### セキュリティ監査サービス

> セキュリティ監査サービスについての補足情報。

- [Certik](https://www.certik.com/ecosystems/algorand) - Web3セキュリティソリューション：スマートコントラクトのアудィットおよび分析（Skynet、SkyTrace）をAlgorandプロジェクトに提供
- [UlamLabs](https://www.ulam.io/software-services/smart-contract-audits) - ポーランドに拠点を置くブロックチェーンラボが提供するAlgorandスマートコントラクトのアудィットサービス
- [Runtime Verification](https://runtimeverification.com/smartcontract) - Algofi、FolksFinance、Yieldlyなど、エコシステム内の主要なDeFiプラットフォームをアудィットしたチームが提供するスマートコントラクト分析および検証
- [Immunebytes](https://www.immunebytes.com) - Algorandスマートコントラクトの信頼性の高いセキュリティアудィットを実施
- [KudelskiSecurity](https://kudelskisecurity.com) - ブロックチェーンプロジェクトを安全かつ成功裏にプロダクション環境またはメインネットへ移行。企業は、ブロックチェーンおよびデジタルレジストリ技術システムの評価、設計、カスタマイズ、展開および運用をサポートし、この動的な市場においてセキュリティを強力な差別化要因として活用できるようにします
- [algorand-ecosystem-audits](https://github.com/blockshake-io/algorand-ecosystem-audits) - アルゴランドエコシステムにおける増加するアудィットレポート。[blockshake-io](https://blockshake.io)が維持
- [Vantage Point Blockchain](https://www.vantagepoint.sg/contact-us) - アルゴランドエコシステムにおけるスマートコントラクトアドバイス、暗号ウォレットアドバイスおよびその他のパーセンテーションテストサービス。クライアントとしてFolks.Finance、Pera、アルゴランド財団、Deflex（Defly/Alammex）、GARD、Venue.Oneなど。レポートはvelocity.vantagepoint.algoによって署名され、(https://github.com/vantagepointreports/releases) で公開されています。
- [Tenset Security](https://github.com/tenset-security/audits) - ウェブ3セキュリティリサーチャーを構成するTenset Securityは、セキュリティの最適化を徹底的に追求しており、特にアルゴランドプロジェクトにおける重大な脆弱性の発見において専門性とコミットメントを強調。[proven track record of success](https://twitter.com/algoworld_nft/status/1691891473166279042)において高セグリティの脆弱性を発見。


### メトリクス・分析サービス

> メトリクス・分析サービスについての補足情報。

- [Algorand MainNet metrics](https://metrics.algorand.org/) - オープンソースAlgorandプロトコルの現在のスケール、セキュリティ、分散性、採用状況を測定するダッシュボード
- [Metrika](https://app.metrika.co/dashboard/algorand/) - Algorandネットワークのパフォーマンスおよびアカウントモニタリング
- [Allo Metrics](https://metrics.allo.info/) - Algorandメインネットの数値データ

## SSI・DID・検証可能な資格情報

> SSI・DID・検証可能な資格情報についての補足情報。

- [GoPlausible](https://goplausible.com) - [PLAUSIBLE protocol](https://github.com/GoPlausible)、W3C DIDs、検証可能な資格、ユーティリティNFTプロトコルをアルゴランド上で構築。また、[ThisDID](https://thisdid.com)を提供し、W3C DID/URIリゾルバーを提供。


## AIと機械学習

> AIと機械学習についての補足情報。

- [Algorand-GPT](https://chatgpt.com/g/g-izA6hnC93-algorand-gpt) - GoPlausibleがOpenAIのChatGPTプラットフォームを活用したAlgorandアシスタントエキスパート（すべてのAlgorandドキュメントおよびチェーンデータにアクセス）
- [DID-GPT](https://chatgpt.com/g/g-rOCQculZQ-did-gpt) - GoPlausibleがOpenAIのChatGPTプラットフォームを活用したW3C DIDリゾルバーアシスタント
- [algorand-mcp](https://github.com/GoPlausible/algorand-mcp) - GoPlausibleが開発したAlgorandモデルコンテキストプロトコル（サーバーおよびクライアント）
- [algorand-remote-mcp](https://github.com/GoPlausible/algorand-remote-mcp) - AlgorandリモートSSE MCPサーバー（Cloudflare Worker）
- [arcontextify](https://github.com/aorumbayev/arcontextify) - Algorand ARC-56からMCPサーバーへの変換ツール
- [VibeKit](https://github.com/gabrielkuettel/vibekit) - AIコードアシスタントがAlgorand上で開発を行うためのCLI＋MCPサーバー
- [corvid-agent](https://github.com/corvid-agent/corvid-agent) - アルゴランド上で構築された、暗号化されたオンチェーンメッセージングを備えた自律型AIエージェントプラットフォーム
- [AlgoChat](https://github.com/corvid-agent/corvid-agent-chat) - アルゴランド取引とPSKのランチングを用いた、暗号化されたピアツーピアチャットクライアント
- [algorand-agent-skills](https://github.com/algorand-devrel/algorand-agent-skills) - アルゴランド開発チームが提供する、AI支援開発用のエージェントスキルの標準コレクション


## アプリケーション基盤と事例

### DeFiプラットフォーム

> DeFiプラットフォームについての補足情報。

- [Tinyman](https://tinyman.org/) - 分散型取引プロトコル、AMMおよびプラットフォーム
- [Pact](https://www.pact.fi/) - アルゴランドプロトコル上で構築された分散型自動マーケットマーカー（AMM）
- [Lofty.ai](https://www.lofty.ai/) - 不動産投資をトークン化した投資プラットフォーム
- [Folks.finance](https://folks.finance/) - 分散型資本市場プロトコル
- [Cometa.farm](https://cometa.farm/) - 分散型リクエスト・アス・ア・サービス
- [aramid.finance](https://www.aramid.finance/) - アルゴランド、ポリゴン、イーサリアムおよびその他のEVMチェーンをサポートする分散型クロスチェーンプロトコル
- [stabilitas.finance](https://stabilitas.finance/) - 購入、送金、価値保存など、さまざまな用途に使える安定かつ安全なデジタル資産
- [vestige.fi](https://vestige.fi/) - 分散型エコシステムのツール群。主にアルゴランド標準資産およびリクエストプールのトレンドと監視を行うために使用される。このプラットフォームは、分散型スワップおよびローンチパッドプラットフォームを提供する。
- [folks-router](https://github.com/Folks-Finance/folks-router) - Folks Financeが提供するアルゴランド上での効率的なスワップルーティングSDK
- [Folks-Finance/algorand-js-sdk](https://github.com/Folks-Finance/folks-finance-js-sdk) - Folks Financeの公式アルゴランドプロトコルSDK
- [DorkFi](https://dork.fi/) - アルゴランドおよびVoiネットワーク上で構築されたクロスチェーンの借入・貸出プロトコル。特徴として、過剰保証貸出、WAD安定通貨の発行、UNITガバナンストークンがある。


### NFTマーケットプレイス

> NFTマーケットプレイスについての補足情報。

- [Rand Gallery](https://www.randgallery.com/) - アルゴランド標準資産（ASA）エクスプローラーおよびマーケットプレイス。[Chris Antaki](https://github.com/ChrisAntaki)が開発。
- [AlgoGems](https://algogems.io/) - NFTコレクターズ向けのアルゴランド標準資産（ASA）マーケットプレイスおよび取引プラットフォーム
- [AlgoMart](https://github.com/deptagency/algomart) - オープンソースNFTマーケットプレイスの白いラベルソリューション
- [Flatter](https://www.flatternft.com/) - NFTアートおよびコレクタブルマーケットプレイス
- [NFT Gallery](https://github.com/corvid-agent/nft-gallery) - アルゴランドNFTギャラリーブラウザ（ARC標準対応）

### 予測市場

> 予測市場についての補足情報。

- [Alpha Arcade](https://www.alphaarcade.com/) - アルゴランド上での予測市場プラットフォーム。

### サブスクリプション管理

> サブスクリプション管理についての補足情報。

- [Subtopia](https://subtopia.io/) - dApp開発者向けの分散型サブスクリプション管理プラットフォーム。サブスクリプションインフラを管理・所有し、柔軟なプランや割引を設定し、アルゴまたは任意のASAトークンで報酬を得る。@aorumbayevが開発。


### 分散型投票

> 分散型投票についての補足情報。

- [nft_voting_tool](https://github.com/algorandfoundation/nft_voting_tool) - アルゴランド財団の公式投票ツール。リポジトリには、アルゴランドブロックチェーンを用いた不変かつ改ざん不可能な投票の作成および実施を可能にする投票ツールが含まれる。


## 標準

### Algorand Request for Comments

> Algorand Request for Commentsについての補足情報。
> Algorand Request for Commentsについての補足情報。 関連資料: [here](https://arc.algorand.foundation)。

- [ARC3](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0003.md) - アルゴランド標準資産パラメータ規約（ファンクシブルおよびノンファンクシブルトークン用）
- [ARC4](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004.md) - アプリケーションバイナリインターフェース
- [ARC32](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0032.md) - アプリケーション規格
- [ARC56](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0056.md) - 拡張・改善されたアプリケーション規格
- [ARC69](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0069.md) - アルゴランド標準資産パラメータ規約のいくつかのうちの一つ


## 貢献

Contributions welcome! Read the [contribution guidelines](https://github.com/awesome-algorand/awesome-algorand/blob/main/contributing.md) first.

Special thanks to everyone who forked or starred the repository ❤️
