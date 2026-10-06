---
title: "Awesome Algorand"
description: "Algorandの学習教材、AlgoKit、言語別SDK、ウォレット、インフラサービス、アプリケーション基盤、標準を紹介します。"
licenseSource: "github-aorumbayev-awesome-algorand-readme-md"
---

# Awesome Algorand

[Algorand](https://www.algorand.co/)は、オープンソースのProof of Stakeブロックチェーンであり、スマートコントラクトの計算基盤です。公式資料とAlgoKit、学習教材、言語別SDK・開発ツール、ウォレット、インフラサービス、アプリケーション基盤、標準を紹介します。説明やメンテナンス状況の注記は、固定原文の時点の内容です。

関連資料として、[AwesomeAlgoのウェブサイト](https://awesomealgo.com)、[AwesomeAlgoのポッドキャスト](https://rss.com/podcasts/the-awesomealgo-podcast)、[CoinMarketCapのAlgorand市場情報](https://coinmarketcap.com/currencies/algorand/)も参照できます。

## 中核資料

### 公式資料

Algorandの公式資料です。

- [Algorand](https://algorandtechnologies.com/) - 公式サイト。

- [Algorand Foundation](https://algorand.foundation/) - Algorand Foundationの公式サイト。

- [Algorand FAQ](https://algorand.foundation/faq) - Algorand Foundationが管理するFAQ。

- [Algorand Governance](https://governance.algorand.foundation/) - Algorandのガバナンスプログラムの公式サイト。

- [Algorand開発者ポータル](https://dev.algorand.co/) - Algorandの公式開発者ポータル。

- [Algorandプロトコル仕様](https://github.com/algorandfoundation/specs) - Algorandプラットフォームのプロトコルレベルの仕様文書。

- [Algorand Discord](https://discord.com/invite/YgPTCVk) - Algorandの公式Discordサーバー。

### AlgoKit

AlgoKitは、Algorandネットワーク上で開発するための公式の統合ツールです。Algorand Foundationが管理しています。

- [algokit-cli](https://github.com/algorandfoundation/algokit-cli) - Algorandネットワーク上での開発に必要な機能をまとめたAlgoKitのCLI。

- [algokit-lora](https://lora.algokit.io/mainnet) - Algorandアプリケーションのテストに使う、ローカルネットワークの視覚的なエクスプローラーとアプリケーションビルダー。コントラクトの配備、状態の調査、トランザクションの作成に対応。

- [AlgoKit文書](https://dev.algorand.co/algokit/algokit-intro/) - Algorand AlgoKitの公式文書。

- [algokit-utils-py](https://github.com/algorandfoundation/algokit-utils-py) - Python用のAlgorand AlgoKitユーティリティ。

- [algokit-core](https://github.com/algorandfoundation/algokit-core) - 上位のAlgoKitツールを支える、複数言語向けの基盤機能。RustとFFIバインディングにより、暗号処理、エンコーディング、プロトコルロジックを提供。

- [algokit-utils-ts](https://github.com/algorandfoundation/algokit-utils-ts) - TypeScript用のAlgorand AlgoKitユーティリティ。

- [algokit-client-generator-py](https://github.com/algorandfoundation/algokit-client-generator-py) - Python用のAlgorand AlgoKit型付きクライアント生成器。

- [algokit-client-generator-ts](https://github.com/algorandfoundation/algokit-client-generator-ts) - TypeScript用のAlgorand AlgoKit型付きクライアント生成器。

- [puya](https://github.com/algorandfoundation/puya) - Pythonの構文でAlgorand Virtual Machine（AVM）上のコードを書ける、公式のPythonからTEALへのコンパイラー。

- [puya-ts](https://github.com/algorandfoundation/puya-ts) - puyaの中核コンパイラーを利用し、TypeScriptの構文でAVM上のコードを書ける、公式のTypeScriptからTEALへのコンパイラーフロントエンド。

- [algorand-python-testing](https://github.com/algorandfoundation/algorand-python-testing) - Algorandブロックチェーンとやり取りせずに、Algorand Pythonスマートコントラクトを単体テストするためのPythonライブラリ。

- [algorand-TypeScript-testing](https://github.com/algorandfoundation/algorand-TypeScript-testing) - Algorandブロックチェーンとやり取りせずに、Algorandスマートコントラクトを単体テストするためのTypeScriptライブラリ。

- [algokit-avm-vscode-debugger](https://github.com/algorandfoundation/algokit-avm-vscode-debugger) - AVMトレースを使い、Algorand Python、TypeScript、TealScript、生のTEALスマートコントラクトを行単位でデバッグするVSCode拡張。

### AlgoKitテンプレート

AlgoKitテンプレートは、Algorandアプリケーションの開発・配備に使う、開発開始用および本番利用向けの基本テンプレートです。プロジェクトをすばやく立ち上げ、アプリケーションのビジネスロジックに集中するための出発点になります。独自のテンプレートを作る一般的な手順は、[AlgoKitテンプレートの作成ガイド](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/tutorials/algokit-template.md)を参照してください。

- [algokit-python-template](https://github.com/algorandfoundation/algokit-python-template) - Pythonによるスマートコントラクトの開発・配備に、本番利用向けの基本構成を提供するAlgoKit公式のAlgorand Pythonテンプレート。

- [algokit-TypeScript-template](https://github.com/algorandfoundation/algokit-TypeScript-template) - TypeScriptによるスマートコントラクトの開発・配備に、本番利用向けの基本構成を提供するAlgoKit公式のAlgorand TypeScriptテンプレート。

- [algokit-react-frontend-template](https://github.com/algorandfoundation/algokit-react-frontend-template) - Algorandの依存関係を組み込んだ、Reactフロントエンドの開発・配備用の本番利用向け基本構成を提供するAlgoKit公式テンプレート。独立したAlgoKitフロントエンドテンプレートを実装する際の参考にもなる。

- [algokit-fullstack-template](https://github.com/algorandfoundation/algokit-fullstack-template) - Algorandの依存関係を組み込んだ、フルスタックアプリケーションの開発・配備用の本番利用向け基本構成を提供するAlgoKit公式テンプレート。独立した複数のAlgoKitテンプレートを1つのフルスタックプロジェクトへまとめる際の参考にもなる。

## 学習資料

Algorandの講座、チュートリアル、その他の学習資料です。

### 短期集中講座

- [Algorand School](https://github.com/cusma/algorand-school) - 短期集中講座のスライド。

- [Zero to Hero PyTeal](https://www.youtube.com/playlist?list=PLwRyHoehE435ttTjvFZA-DyqHYIYc26K_) - PyTealの短期集中講座の動画。

- [Algorand, efficient self-sustaining Blockchain](https://prismic-io.s3.amazonaws.com/algorandfoundationv2/d5407f96-8e7d-4465-9656-2abb558850a9_Proof+of+Stake+Blockchain+Efficiency+Framework.pdf) - Proof of Stakeブロックチェーンの効率性を評価する枠組み。

- [Algorand Efficiency](https://www.youtube.com/watch?v=e8s8Ui8vDaY) - Algorandの動作原理と効率性を解説。

- [Introduction to AVM and Applications](https://www.youtube.com/watch?v=fTAPLiPcj28) - Algorand Virtual Machineのアーキテクチャと、Algorandスマートコントラクト（アプリケーション）の入門。

- [Introduction to PyTeal](https://www.youtube.com/watch?v=zXDqJHK_Bqs) - Algorandスマートコントラクト開発用のPythonフレームワーク、PyTealの解説（[@matteojug](https://twitter.com/matteojug)と共演）。

- [PyTeal ABI Smart Contracts](https://www.youtube.com/watch?v=USLcyfVD_ws) - PyTealでAlgorand上のABI準拠スマートコントラクトを開発する方法。最終部分はライブコーディング（[@deanste](https://twitter.com/_deanste)と共演）。

- [Beaker](https://www.youtube.com/watch?v=031VvOxvuxY) - PyTealを基盤とする、Algorandスマートコントラクトの開発、クライアント、テスト用フレームワーク。ライブコーディング（[@HGKimChris](https://twitter.com/HGKimChris)と共演）。

- [Dissecting Algorand](https://medium.com/coinmonks/dissecting-algorand-e962f48f8c72) - Algorandの紹介と内部動作の分析。

- [Zero to Hero Blockchain Algorand](https://github.com/VKappaKV/Zero-To-Hero-blockchain-Algorand) - Algorand開発者向けの学習経路。

### 一般講座

これらの講座は、すべてのブロックチェーンシステムに関わる基礎知識を学びたい、まったくの初心者を対象としています。ブロックチェーンプロトコルの分野を理論的に理解することは、Algorand技術の学習を深めるための重要な前提になります。

- [Foundations of Blockchains](https://www.youtube.com/watch?v=KNJGPI0fuFA&list=PLEGCF-WLh2RLOHv_xUGLqRts_9JxrckiA) - コロンビア大学のコンピューター科学教授Tim Roughgardenによる、ブロックチェーンプロトコルの基本原理、概念、性質を解説する動画講座。

### チュートリアル

- [Lending pool using Reach](https://developer.algorand.org/tutorials/building-a-lending-pool-using-reach/) - Reach言語を使って貸付プールを構築するチュートリアル。

- [Creating a License Manager Contract](https://developer.algorand.org/tutorials/creating-a-license-manager-contract-utilizing-pyteal-and-inner-transactions/) - PyTEALとInner Transactionsの利用方法を説明するチュートリアル。

- [Stateless session management with the Pera wallet](https://developer.algorand.org/tutorials/stateless-session-management-with-the-pera-wallet/) - Next.jsとReduxを使ったPera Wallet接続の例。

- [AlgoMinter](https://developer.algorand.org/tutorials/algominter-a-web-app-for-minting-assets-using-python-algosigner-and-anvil-platform/) - Python、AlgoSigner、Anvil Platformで、アセットを発行するウェブアプリケーションを構築。

- [Getting Started with Django, Python, and Algorand](https://developer.algorand.org/solutions/getting-started-with-python-algorand-sdk-and-django/) - Algorand開発者ポータルのチュートリアル。

- [MultiSig with Algorand for Co-operative Groups](https://developer.algorand.org/tutorials/decentralised-co-operative-unions-algorand-multisignature-account/) - Algorandのマルチシグネチャアカウントを利用する分散型協同組合。

- [Adding Notes to Transactions](https://developer.algorand.org/tutorials/v2-read-and-write-transaction-note-field-python/) - PythonでトランザクションのNoteフィールドを読み書きする方法。

- [Create Assets with a Stateful Smart Contract](https://developer.algorand.org/solutions/using-stateful-smart-contract-to-create-algorand-standard-asset/) - ステートフルなスマートコントラクトを使ったAlgorand Standard Assetの作成。

- [Artificial Intelligence on Algorand](https://developer.algorand.org/solutions/artificial-intelligence-on-algorand/) - 機械学習で、Algorandブロックチェーン上のUSDCステーブルコインの取引量を予測するチュートリアル。

### コミュニティ資料

オープンソースプロジェクト、ユーティリティ、ニュースに関する資料です。

### プロジェクト

Algorand上に構築されたオープンソースプロジェクト、ブログ、ウェブサイトです。

- [arc3.xyz](https://github.com/barnjamin/arc3.xyz) - ARC3準拠のNFTを発行できるdApp。

- [Auction Demo](https://github.com/algorand/auction-demo) - スマートコントラクトを使う、オンチェーンNFTオークション。

- [Algorand Session Wallet](https://github.com/barnjamin/algorand-session-wallet) - 複数のウォレットで接続を保持できるセッションウォレット。

- [AlgoWorld-Contracts](https://github.com/algoworldNFT/algoworld-contracts) - AlgoWorldが使用するすべてのスマートコントラクトのコレクション。PyTealで実装。

- [AlgoWorld-Swapper](https://github.com/algoworldNFT/algoworld-swapper) - Algorand Smart Signaturesを利用した、無料で第三者への信頼を前提としないASA交換ツール。

- [WalletConnect Example DApp](https://github.com/algorand/walletconnect-example-dapp) - Algorand WalletConnectのデモ。

- [TinyBar App](https://github.com/aorumbayev/tinybar) - TinyManのASA価格を追跡する、小さなmacOSメニューバーアプリケーション。

- [algonim](https://github.com/cusma/algonim) - 原文でAlgorand初と紹介される、小規模なパズルゲーム。[@cusma](https://twitter.com/cusma_b)がPythonとPyTEALで実装。

- [algorealm](https://github.com/algorealm/algorealm) - Algorand Realmの王冠と王笏を獲得するゲーム。[@cusma](https://github.com/cusma)がPythonとPyTEALで実装。

- [algorealm-ui](https://github.com/algorealm/algorealm-ui) - @aorumbayevによる、algorealmのCLIゲームをウェブ上で動かすCLIエミュレーター版。

- [minter](https://github.com/algofishexe/minter) - コミュニティ標準ARC-69に従ってAlgorand NFTを一括発行。[@fish.exe](https://twitter.com/AlgofishExe)がNode.jsで実装。

- [algovanity](https://algovanity.com/) - [Ripe](https://github.com/Ripe/algovanity)によるAlgorandのバニティアドレス生成器。

- [galvanity](https://github.com/shmutalov/galvanity) - Go製のAlgorandバニティアドレス生成器。

- [genpyteal](https://github.com/runvnc/genpyteal) - おおむね通常のPythonからPyTealを生成。

- [AgorHash](https://github.com/bafio89/agorhash) - 公開型、パーミッションレス、分散型で、検閲できない自由な言論のプロトコルと原文で紹介されるプロジェクト。

- [QRCode Generator](https://github.com/emg110/algorand-qrcode) - Algorand ARC-26 URI用の汎用QRコード生成モジュール。

- [algofractals](https://github.com/aorumbayev/algofractals) - ARC69タグを埋め込んだ、ランダムに生成するマンデルブロ集合のフラクタルを発行。2023年12月31日にアーカイブ。

- [algorewards](https://algorewards.github.io/) - 無料で非公式のAlgorandガバナンス報酬計算ツール。GitHub Pagesで公開。

- [Pipeline-UI](https://github.com/headline-design/pipeline-ui) - Algorand dAppをすばやく配備するためのReact.js製コンポーネントライブラリ。

- [STOI](https://stoi.org/) - microDAOによって楽曲の所有権を分散化。

- [AlgoTables](https://algotables.github.io/) - Algorandエコシステムに参加し、ALGOを長期保有する人の日常的な利用を支援するツール群。

- [AlgoPing](https://github.com/aorumbayev/algoping) - AlgoExplorer、AlgoNodeなどの公開Algorandノードが正常でない場合に[ツイート](https://twitter.com/algoping)を投稿する、小さなcronジョブ。

- [staketaxcsv](https://github.com/hodgerpodger/staketaxcsv) - Algorandやその他のブロックチェーンの課税対象取引をCSVへ出力する、[stake.tax](https://stake.tax)のPythonバックエンド。

- [Automated Prediction Market Maker on Algorand](https://github.com/dspytdao/Algo_AMM) - [algoAMM.com](https://algoamm.com)で公開されているプロジェクトのバックエンドリポジトリ。

- [AlgoDepo](https://github.com/dspytdao/AlgoDepo) - Algorandの単一入金アプリケーション。

- [AlgoDeposit](https://github.com/dspytdao/AlgoDeposit) - AlgorandのAMMプールアプリケーション。

- [txnDuck](https://github.com/No-Cash-7970/txnDuck) - Algorandブロックチェーンのトランザクション作成ツール。

- [lazylora](https://github.com/aorumbayev/lazylora) - Algorandブロックチェーンを探索するターミナルUI。

- [wen-tools](https://github.com/LoafPickleWW/wen-tools) - Algorandの一括操作ツール。

- [algonoderewards](https://github.com/cryptomalgo/algonoderewards) - Nodely APIでAlgorandノードの報酬を追跡・可視化。

- [xGov-Guru](https://github.com/SilentRhetoric/xGov-Guru) - xGovの投票データと提案を閲覧するツール。

- [Algo Snow](https://dragmz.itch.io/algo-snow) - Algorandを題材とする、ブラウザー上の対話型ゲーム。

- [Algorand Mempool Visualizer](https://mempool.algorand.ing/) - Algorandのメモリプールへ入るトランザクションをリアルタイムで可視化。

- [AlgoRadio](https://algocities.pages.dev/landmark/allgoradio) - Algorandを題材とする実験的なラジオ体験。

- [Sign Zero](https://sign-zero.vercel.app/) - 認証と署名のフローを試す軽量なデモアプリケーション。

### AlgoKitコミュニティテンプレート

Algorandコミュニティのプロジェクトや個人が作成した、Algorandアプリケーションの開発・配備に使う、開発開始用および本番利用向けの基本テンプレートです。

- [algokit-tealish-template](https://github.com/aorumbayev/algokit-tealish-template) - tealishとalgojigを使うスマートコントラクトプロジェクトをすばやく開始する、AlgoKitコミュニティテンプレート。

- [algokit-goracle-template](https://github.com/GoracleNetwork/algokit_default_template) - goracleと連携するスマートコントラクトプロジェクトをすばやく開始する、AlgoKitコミュニティテンプレート。

- [algokit-subtopia-template](https://github.com/subtopia-algo/algokit-subtopia-template) - Subtopiaプラットフォームと連携するdAppのフロントエンドプロジェクトをすばやく開始する、AlgoKitコミュニティテンプレート。

## 開発とツール

開発用のクライアントライブラリ、ツール、コミュニティのユーティリティです。

## 言語別SDK・ツール

クライアントライブラリ、ツール、コミュニティのユーティリティを、実装言語別に分類しています。

### C/C++

- [vertices-algorand-sdk](https://github.com/vertices-network/c-vertices-sdk) - デバイスからブロックチェーンと容易にやり取りできる機能を開発者へ提供するVertices SDK。

- [unreal-algorand-sdk](https://github.com/Wisdom-Labs/Algorand-Unreal-Engine-SDK) - Algorandブロックチェーンプラットフォーム用の公式Unreal Engineプラグイン。

- [cplusplus-algorand-sdk](https://github.com/Wisdom-Labs/Algorand-CPlusPlus-SDK) - Algorandチェーン用のC++ SDK。

### Dart

- [dart-algorand-sdk](https://pub.dev/packages/algorand_dart) - Dart用のAlgorand SDK。

### Go

- [go-algorand](https://github.com/algorand/go-algorand) - AlgorandのGoによる公式実装。

- [go-algorand-sdk](https://github.com/algorand/go-algorand-sdk) - AlgorandのGo SDK。

- [conduit](https://github.com/algorand/conduit) - Algorandのデータパイプラインフレームワーク。

### PHP

- [php-algorand-sdk](https://github.com/ffsolutions/php-algorand-sdk) - [@ffsolutions](https://github.com/ffsolutions)が作成したAlgorand PHP SDK。

- [algorand-php](https://github.com/RootSoft/algorand-php) - [@RootSoft](https://github.com/RootSoft)が作成したAlgorand PHP SDK。

### Python

- [py-algorand-sdk](https://github.com/algorand/py-algorand-sdk) - AlgorandのPython SDK。

- [tinyman-py-sdk](https://github.com/tinymanorg/tinyman-py-sdk) - TinymanのPython SDK。

- [smart-asa](https://github.com/algorandlabs/smart-asa) - ARC-20に基づく、Smart ASAのPyTeal参照実装。

### <a id="javascript--typescript"></a>JavaScript・TypeScript

- [js-algorand-sdk](https://github.com/algorand/js-algorand-sdk) - AlgorandのJavaScript SDKと使用例。

- [algo-builder](https://github.com/scale-it/algo-builder) - Algorandアセットとスマートコントラクトの開発を自動化するフレームワーク。

- [algo-builder-templates](https://github.com/scale-it/algo-builder-templates) - Algo Builder用のdAppテンプレート。

- [algonaut.js](https://github.com/thencc/algonautjs) - フロントエンドdApp向けに扱いやすくした、TypeScript製のAlgo SDK。

- [perawallet-connect](https://github.com/perawallet/connect) - Pera Walletをウェブアプリケーションへ統合するJavaScript SDK。

- [defly-connect](https://github.com/blockshake-io/defly-connect) - Defly Walletをウェブアプリケーションへ統合するJavaScript SDK。

- [subtopia-js](https://github.com/subtopia-algo/subtopia-js) - Subtopiaプラットフォームとやり取りするための便利なインターフェースを提供する、Subtopia JavaScript SDK。

- [solid-algo-wallets](https://github.com/SilentRhetoric/solid-algo-wallets) - Algorand用のSolidJSウォレット統合ライブラリ。

### Java

- [java-algorand-sdk](https://github.com/algorand/java-algorand-sdk) - AlgorandのJava SDK。

### .NET

- [dotnet-algorand-sdk](https://github.com/RileyGe/dotnet-algorand-sdk) - [@RileyGe](https://github.com/RileyGe)が作成したAlgorand .NET SDK。

- [unity-algorand-sdk](https://github.com/CareBoo/unity-algorand-sdk) - ビデオゲームでAlgorandブロックチェーンを利用するためのUnity用SDK。

- [unity-algorand-sdk-based-on-net-sdk](https://github.com/Vytek/AlgorandUnitySDK) - RileyGeの.NET Algorand SDKを基盤として手早く実装した、簡易的なUnity SDK。

- [dotnet-alogrand-sdk (2)](https://github.com/FrankSzendzielarz/dotnet-algorand-sdk) - [@FrankSzendzielarz](https://github.com/FrankSzendzielarz)が管理するAlgorand .NET SDK。

- [dotnet-tinyman-sdk](https://github.com/geoffodonnell/dotnet-tinyman-sdk) - Tinymanの.NET SDK。

- [dotnet-yieldly-sdk](https://github.com/geoffodonnell/dotnet-yieldly-sdk) - Yieldlyの.NET SDK。

- [powershell-algorand-module](https://github.com/geoffodonnell/powershell-algorand-module) - AlgorandのPowerShellモジュール。

### Rust

- [rust-algorand-sdk](https://github.com/manuelmauro/algonaut) - AlgorandのRust SDK。

### Swift

- [algorand-wallet](https://github.com/algorand/algorand-wallet) - AlgorandウォレットのSwiftによる公式実装。

- [swift-algorand](https://github.com/CorvidLabs/swift-algorand) - async/awaitとSwiftの並行処理に対応する、Algorandブロックチェーン用のモダンなSwift SDK。

- [swift-algorand-sdk](https://github.com/Jesulonimi21/Swift-Algorand-Sdk) - Algorandブロックチェーンとやり取りするSwift SDK。

- [swift-algokit](https://github.com/CorvidLabs/swift-algokit) - Swift開発者向けのAlgoKitユーティリティ。

- [swift-arc](https://github.com/CorvidLabs/swift-arc) - NFT用のAlgorand ARCメタデータ標準を扱うSwiftライブラリ。

- [swift-mint](https://github.com/CorvidLabs/swift-mint) - Algorandブロックチェーン上でNFTを発行するSwiftライブラリ。

- [swift-algochat](https://github.com/CorvidLabs/swift-algochat) - Swiftによる、ハイブリッドECDHとPSKラチェットを使った、Algorand上のエンドツーエンド暗号化メッセージング。

### Ruby

- [TEALrb](https://github.com/joe-p/TEALrb) - Algorandスマートコントラクトを書くためのRuby DSL。2023年1月22日にアーカイブ。

## スマートコントラクト開発

### 言語とコンパイラー

- [pyteal](https://github.com/algorand/pyteal) - Pythonで記述するAlgorandスマートコントラクト。

- [reach](https://docs.reach.sh) - チェーンをまたぐ分散型アプリケーション（dApp）を構築するためのドメイン固有言語。

- [aqua-compiler](https://github.com/optio-labs/aqua-compiler) - TEALコードへコンパイルする、Algorandブロックチェーン用の表現力の高い高水準言語。

- [algoml](https://github.com/petitnau/algoml) - Algorandスマートコントラクトを記述し、TEALスクリプトへコンパイルするドメイン固有言語。

- [tealang](https://github.com/pzbitskiy/tealang) - Algorand ASC1とTEAL用の高水準言語。

- [tealish](https://tealish.tinyman.org) - 明瞭さを重視した手続き型のTEALを記述できる、読みやすいAlgorand VM言語。

- [TEALScript](https://github.com/algorand-devrel/TEALScript) - TypeScript本来の構文、ツール、IDEの支援機能を使って、Algorandスマートコントラクトを開発。

### フレームワークとユーティリティ

- [beaker](https://github.com/algorandfoundation/beaker) - Pythonらしい記法のスマートコントラクトフレームワーク。PyTEAL DSLのラッパー、クライアント、テスト用ユーティリティを提供。正規リポジトリ。

- [pyteal-utils](https://github.com/algorand/pyteal-utils) - PyTEALのユーティリティライブラリ。

- [avm-semantics](https://github.com/runtimeverification/avm-semantics) - KフレームワークによるAlgorand Virtual MachineとTEALの意味論。スマートコントラクトのテストと形式検証を支援。

- [d-asa](https://github.com/cusma/d-asa) - Debt Algorand Standard Application。ACTUS標準に準拠した債務商品（債券、貸付、コマーシャルペーパー）のトークン化に向けた参照実装とインターフェースを提供。

## CLI

- [AlgoRun](https://github.com/algorandfoundation/algorun) - Algorand MainNetの参加ノードを設定・起動する簡単なCLIユーティリティ。

## IDE

IDE用のクライアントライブラリ、ツール、コミュニティのプラグイン、統合機能です。

### vim

- [vim-algorand-teal](https://github.com/aldur/vim-algorand-teal) - AlgorandのTEALスマートコントラクト言語用に、vimへ最小限の構文強調表示を提供。

### IntelliJ

- [algoDEA](https://algodea-docs.bloxbean.com/) - Algorand用のIntelliJプラグイン。

### VSCode

- [Obsidian Labs/vscode-algorand](https://github.com/ObsidianLabs/vscode-algorand) - Algorand用のVS Code拡張。

- [optio-labs/teal-debugger-extension](https://github.com/optio-labs/teal-debugger-extension) - 最小限のAVM設定で、VSCode内でTEALをデバッグ。

### Visual Studio

- [Algorand Visual Studio Extension](https://github.com/FrankSzendzielarz/AlgorandVisualStudio) - C#によるTEALのコンパイルとAlgorandスマートコントラクト開発用のVisual Studio拡張。

## テストとデバッグ

- [graviton](https://github.com/algorand/graviton) - AlgorandのTEAL用ブラックボックステストツールキット。

- [algokit-avm-debugger](https://github.com/algorandfoundation/algokit-avm-debugger) - 高度なコントラクトデバッグツールを支える、独立したAVM Debug Adapter Protocol実装。

- [tealer](https://github.com/crytic/tealer) - コントラクトをすばやくレビューするための脆弱性検出器を備えた、静的TEAL解析ツール。

- [irulan](https://irulan.dev/) - スマートコントラクトを配備・テストするオープンソースのウェブアプリケーション（[ソースコード](https://github.com/thencc/irulan)）。

- [algojig](https://github.com/Hipo/algojig) - Algorandスマートコントラクトのテストツール。

- [tealinspector](https://github.com/Hipo/tealinspector) - Hipo labsによる、TEALコードをすばやく簡単にデバッグするツール。

- [swift-algotest](https://github.com/CorvidLabs/swift-algotest) - モックチェーンに対応する、Algorandスマートコントラクト用のSwiftテストフレームワーク。

## 配備と環境

- [Algorand Sandbox](https://github.com/algorand/sandbox) - Algorandの開発環境をすばやく作成・設定。

- [Algorand Sandbox Dev](https://github.com/MakerXStudio/algorand-sandbox-dev) - ローカル開発とCI/CDでの利用を高速化するDocker Hubイメージ。2024年1月2日にアーカイブ。

- [公式Algodコンテナー](https://hub.docker.com/r/algorand/algod) - Algorand Inc.によるAlgodのDocker Hubイメージ。

- [公式Conduitコンテナー](https://hub.docker.com/r/algorand/conduit) - Algorand Inc.によるConduitのDocker Hubイメージ。

## ウォレットとアセット操作

### ウォレットプロバイダー

Algorandのウォレット提供者の一覧です。網羅的な一覧ではなく、特定のウォレットを推奨するものでもありません。MyAlgoウォレットの利用者に対する[攻撃](https://twitter.com/myalgo_/status/1632862464244162560)を受け、関連SDKは原文のリストから除外されています。

- [Pera Wallet](https://github.com/perawallet) - モバイルとデスクトップの両方に対応する、オープンソースでコミュニティ主導のウォレット。原文では安全性を特徴として紹介。公式Algorand Walletを手がけたチームが管理。

- [Method Wallet](https://methodwallet.app/) - 原文で「きっと気に入る」と紹介されるAlgorandウォレット。

- [Defly Wallet](https://defly.app/) - 充実したDeFi機能群を統合したAlgorandウォレット。

- [Exodus](https://www.exodus.com/) - Algorandに対応する、複数の暗号資産用ウォレット。

- [A-Wallet](https://a-wallet.net/) - オープンソースでHTMLのみを使う、企業での利用に適したAlgorandウォレット。原文では安全性も特徴として紹介。

- [Liquid Auth](https://github.com/algorandfoundation/liquid-auth) - パスキーと暗号鍵ペアを結び付け、安全なピア間接続のためのP2Pシグナリングも提供する、セルフホスト型サービス。

- [Kibisis](https://github.com/kibis-is/web-extension) - ReactとTypeScriptで実装した、オープンソースのAlgorandウォレット用ブラウザー拡張。

### ウォレット開発

- [use-wallet](https://github.com/txnlab/use-wallet) - Algorand互換のウォレットをウェブアプリケーションで使うためのReactフック。[txnlab](https://www.txnlab.dev/)が開発。

- [use-wallet-js](https://github.com/TxnLab/use-wallet-js) - Algorandウォレットを分散型アプリケーションへ統合するTypeScriptライブラリ。

- [rsagg](https://github.com/dragmz/rsagg) - GPUによってAlgorandのバニティアドレス生成を高速化するRustライブラリ。

### ブロックチェーンエクスプローラー

Algorandのブロックチェーンエクスプローラーです。トランザクション、アカウント、アセットなどの閲覧に使います。

- [Allo](https://allo.info) - Nodelyによる、全ネットワークを対象とする統合Algorandエクスプローラー。

- [Pera Explorer](https://explorer.perawallet.app/) - [Pera Wallet](https://perawallet.app/)が開発した、AlgorandアカウントとAlgorand Standard Asset（ASA）のエクスプローラー。

- [Algorand Ballet](https://akaalias.github.io/algorand-ballet/) - Algorandアカウントの2Dグラフ。

- [Algorand Multiverse](https://algo3d.live/) - Algorandアカウントの3Dグラフ。

- [AlgoSurf](https://algo.surf/) - Algorandネットワークのエクスプローラー。`localhost`上のLocalNetに対応。

- [Algo Explorer](https://github.com/corvid-agent/algo-explorer) - リアルタイムのトランザクション監視に対応する、モダンなAlgorandブロックチェーンエクスプローラー。

### ポートフォリオ追跡

Algorandのポートフォリオ追跡ツールです。保有するアセットの価値の追跡を支援します。

- [CompX](https://app.compx.io/dashboard) - Algorandブロックチェーン上のアセット、報酬、イールドファーミング、トランザクション、NFTを、場所や時間を問わず追跡・検索。旧称Algogator.Finance。

- [ASA Stats](https://www.asastats.com/) - 最大5つのウォレットアドレスのAlgorandアセット評価額を集計する、統合ポートフォリオ追跡ツール。

### 名前サービス

人が読めるアドレスを提供する名前サービスです。

- [NFDomains](https://nf.domains/) - Algorandの名前サービスとNon-Fungible Domain（NFD）のマーケットプレイス。ウォレットアドレスに一意で読みやすい別名を提供。

## インフラとエコシステムサービス

### ノードとコンセンサス参加

- [Algorand - The Undocumented Docs](https://github.com/AlgoChads/algorand-undoc-docs) - アーカイブノード、Indexerの設定などに関する開発メモ。

- [Nodely](https://nodely.io) - 無料のノード・Indexer API、ノード運用のFAQ、ノード・Indexerの日次スナップショット。

- [Algorand Node UI](https://github.com/algorand/node-ui) - Algorandノードを遠隔管理するターミナルUI。

- [nodekit](https://github.com/algorandfoundation/nodekit) - Algorandノードをローカルで実行・管理するターミナルUI。

- [SubQuery](https://subquery.network) - Algorand向けの、オープンで高速、柔軟な分散型クロスチェーンデータIndexer（[開始ガイド](https://academy.subquery.network/quickstart/quickstart_chains/algorand.html)）。

- [AlloCTRL](https://github.com/AlgoNode/alloctrl) - ローカルマシンからノードと参加鍵を安全に管理するための、簡単なオープンソースダッシュボード。

- [reti](https://github.com/algorandfoundation/reti) - Algorandのコンセンサス報酬「The Reti」用のコントラクト、ノードデーモン、UI。分散型ステーキングプールによって参加を広げ、ネットワークの安全性を高める仕組み。

### ブロックチェーンブリッジ

Algorandと他のブロックチェーンの間で、アセットをチェーン間移転できるブリッジです。

- [Algomint](https://algomint.io/) - BTCとETHをAlgorandへつなぐ中央集権型ブリッジ。

- [Messina](https://messina.one/) - ALGOとETHの双方向ブリッジ。原文では、EthereumおよびERC-20トークンとAlgorandの相互運用を可能にするものとして紹介。

### オラクル

スマートコントラクトが現実世界とやり取りするためのオラクルです。

- [Gora](https://www.gora.io/) - Algorandブロックチェーンと現実世界をつなぐ分散型オラクルネットワーク。

### セキュリティ監査サービス

以下の企業を推奨することを目的とする一覧ではありません。監査の選択肢を調べる際は、十分に調査してください。Algorandエコシステムのスマートコントラクト監査を提供する、増えつつある多様な企業を紹介しています。

- [Certik](https://www.certik.com/ecosystems/algorand) - Algorandプロジェクト向けのWeb3セキュリティツール群。スマートコントラクト監査と、Skynet・SkyTraceによる分析を提供。

- [UlamLabs](https://www.ulam.io/software-services/smart-contract-audits) - ポーランドのブロックチェーン研究・開発企業。Algorandスマートコントラクトの監査サービスを提供。

- [Runtime Verification](https://runtimeverification.com/smartcontract) - Algofi、FolksFinance、Yieldlyなど、エコシステムの主要DeFi基盤を監査したチームによる、スマートコントラクトの解析と検証。

- [Immunebytes](https://www.immunebytes.com) - Algorandスマートコントラクトを保護するセキュリティ監査サービス。原文では信頼できる監査ソリューションとして紹介。

- [KudelskiSecurity](https://kudelskisecurity.com) - ブロックチェーンプロジェクトの本番運用やMainNetへの安全な移行を支援。ブロックチェーンとデジタル台帳技術のシステムの評価、設計、カスタマイズ、配備、管理を提供し、変化の速い市場でセキュリティを差別化の強みとする支援を原文で訴求。

- [algorand-ecosystem-audits](https://github.com/blockshake-io/algorand-ecosystem-audits) - [blockshake-io](https://blockshake.io)が管理する、Algorandエコシステムの監査報告のコレクション。収録報告を拡充。

- [Vantage Point Blockchain](https://www.vantagepoint.sg/contact-us) - Algorandエコシステムのスマートコントラクト監査、暗号資産ウォレット監査、その他の侵入テストを提供。顧客にはFolks.Finance、Pera、Algorand Foundation、Deflex（Defly/Alammex）、GARD、Venue.Oneなどが含まれる。報告にはvelocity.vantagepoint.algoで署名し、https://github.com/vantagepointreports/releases で公開。

- [Tenset Security](https://github.com/tenset-security/audits) - Web3セキュリティ研究者のチーム。安全性を徹底して追求し、Algorandプロジェクトで深刻度の高い脆弱性を発見した[実績](https://twitter.com/algoworld_nft/status/1691891473166279042)と、同エコシステムへの専門性・取り組みを原文で紹介。

### メトリクス・分析サービス

Algorandのメトリクスと分析のサービスです。

- [Algorand MainNetのメトリクス](https://metrics.algorand.org/) - オープンソースのAlgorandプロトコルの規模、安全性、分散化、採用状況を測定するダッシュボード。

- [Metrika](https://app.metrika.co/dashboard/algorand/) - Algorandネットワークの性能とアカウントの監視ツール。

- [Allo Metrics](https://metrics.allo.info/) - Algorand MainNetを数値で表示。

## SSI・DID・検証可能な資格情報

W3Cの分散型識別子、検証可能な資格情報、自己主権型アイデンティティに関するサービスプロジェクトです。

- [GoPlausible](https://goplausible.com) - Algorand上に構築されたW3C DID、検証可能な資格情報、ユーティリティNFTの[PLAUSIBLE protocol](https://github.com/GoPlausible)と、汎用W3C DID/URIリゾルバーの[ThisDID](https://thisdid.com)を提供。

## AIと機械学習

Algorandを利用するAI、機械学習、データ科学のプロジェクトです。

- [Algorand-GPT](https://chatgpt.com/g/g-izA6hnC93-algorand-gpt) - GoPlausibleがOpenAIのChatGPTプラットフォーム上に構築した、Algorandの専門アシスタント。原文では、Algorandのすべての文書とチェーンデータへアクセスできるものとして紹介。

- [DID-GPT](https://chatgpt.com/g/g-rOCQculZQ-did-gpt) - GoPlausibleがOpenAIのChatGPTプラットフォーム上に構築した、W3C DIDを解決するアシスタント。

- [algorand-mcp](https://github.com/GoPlausible/algorand-mcp) - GoPlausibleによるAlgorand Model Context Protocolのサーバーとクライアント。

- [algorand-remote-mcp](https://github.com/GoPlausible/algorand-remote-mcp) - Algorand用のリモートSSE MCPサーバーを提供するCloudflare Worker。

- [arcontextify](https://github.com/aorumbayev/arcontextify) - Algorand ARC-56からMCPサーバーへの変換ツール。

- [VibeKit](https://github.com/gabrielkuettel/vibekit) - AIコーディングアシスタントへ、Algorand上で開発するためのスキルとツールを提供するCLIとMCPサーバー。

- [corvid-agent](https://github.com/corvid-agent/corvid-agent) - Algorand上に構築された自律型AIエージェント基盤。暗号化したオンチェーンメッセージングを提供。

- [AlgoChat](https://github.com/corvid-agent/corvid-agent-chat) - AlgorandのトランザクションとPSKラチェットを使う、暗号化されたピア間チャットクライアント。

- [algorand-agent-skills](https://github.com/algorand-devrel/algorand-agent-skills) - Algorand DevRelによる、AIを用いたAlgorand開発用のAgent Skillsの正規コレクション。

## <a id="アプリケーション基盤と事例"></a>アプリケーション基盤と使用例

### DeFiプラットフォーム

Algorand上のDeFiプラットフォームとプロトコルです。特定のプロジェクトを推奨するためではなく、エコシステム全体の概要を示す一覧です。掲載プロジェクトへの投資や利用の前に、ご自身で調査してください。

- [Tinyman](https://tinyman.org/) - 分散型の取引プロトコル、AMM、プラットフォーム。

- [Pact](https://www.pact.fi/) - Algorandプロトコル上に構築された分散型自動マーケットメーカー（AMM）。

- [Lofty.ai](https://www.lofty.ai/) - トークン化した不動産への投資プラットフォーム。

- [Folks.finance](https://folks.finance/) - 分散型の資本市場プロトコル。

- [Cometa.farm](https://cometa.farm/) - 分散型の流動性提供サービス。

- [aramid.finance](https://www.aramid.finance/) - Algorand、Polygon、Ethereum、その他のEVMチェーンに対応する、分散型クロスチェーンプロトコル。

- [stabilitas.finance](https://stabilitas.finance/) - 購入、送金、価値の保存などに使うデジタルアセット。原文では安定性と安全性を特徴として紹介。

- [vestige.fi](https://vestige.fi/) - 主にAlgorand Standard Assetと流動性プールの追跡・動向把握に使う、分散型ツールのエコシステム。分散型の交換機能とローンチパッドも提供。

- [folks-router](https://github.com/Folks-Finance/folks-router) - Folks Financeによる、効率的な交換経路を選ぶAlgorand用SDK。

- [Folks-Finance/algorand-js-sdk](https://github.com/Folks-Finance/folks-finance-js-sdk) - Folks Financeの公式AlgorandプロトコルSDK。

- [DorkFi](https://dork.fi/) - AlgorandとVoi Networkをまたぐ借入・貸付プロトコル。過剰担保の貸付、WADステーブルコインの発行、UNITガバナンストークンを提供。

### NFTマーケットプレイス

Algorand上のNFTマーケットプレイスとギャラリーです。

- [Rand Gallery](https://www.randgallery.com/) - [Chris Antaki](https://github.com/ChrisAntaki)が開発した、Algorand Standard Asset（ASA）のエクスプローラーとマーケットプレイス。

- [AlgoGems](https://algogems.io/) - NFTコレクター向けの、Algorand Standard Asset（ASA）のマーケットプレイスと取引プラットフォーム。

- [AlgoMart](https://github.com/deptagency/algomart) - オープンソースのNFTマーケットプレイス用ホワイトラベルソリューション。

- [Flatter](https://www.flatternft.com/) - NFTアートとコレクションアイテムのマーケットプレイス。

- [NFT Gallery](https://github.com/corvid-agent/nft-gallery) - ARC標準に対応する、Algorand NFTギャラリーの閲覧ツール。

### 予測市場

Algorand上の予測市場と取引プラットフォームです。

- [Alpha Arcade](https://www.alphaarcade.com/) - Algorand上の予測市場プラットフォーム。

### サブスクリプション管理

Algorand上のサブスクリプション管理プラットフォームです。特定のプロジェクトを推奨するためではなく、エコシステム全体の概要を示す一覧です。掲載プロジェクトへの投資や利用の前に、ご自身で調査してください。

- [Subtopia](https://subtopia.io/) - Algorand上のdApp制作者向けの、分散型サブスクリプション管理プラットフォーム。サブスクリプション用の基盤を自ら所有・管理し、柔軟なプランや割引を設定して、Algoまたは任意のASAトークンで支払いを受け取れる。@aorumbayevが作成。

### 分散型投票

Algorandによるオンチェーン投票ツールです。

- [nft_voting_tool](https://github.com/algorandfoundation/nft_voting_tool) - Algorand Foundationの公式投票ツール。Algorandブロックチェーンで変更不能で改ざんできない投票を作成・実施するツールとして、原文で紹介。

## 標準

### Algorand Request for Comments

finalized（確定済み）のARCsで定義された標準と仕様です。全ARCsの一覧は[ARCの索引](https://arc.algorand.foundation)を参照してください。

- [ARC3](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0003.md) - 代替可能トークンと非代替可能トークンに関する、Algorand Standard Assetパラメーター規約の公式標準。

- [ARC4](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0004.md) - Application Binary Interface。

- [ARC32](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0032.md) - アプリケーション仕様。

- [ARC56](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0056.md) - 拡張・改善されたアプリケーション仕様。

- [ARC69](https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0069.md) - 複数あるAlgorand Standard Assetパラメーター規約の1つ。
