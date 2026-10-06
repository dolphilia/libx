---
title: "Awesome Golem"
description: "Golemのプロジェクト、統計、ツール、学習資料とアーカイブ。"
licenseSource: "github-golemfactory-awesome-golem-readme-md"
toc:
  maxLevel: 4
---

# Awesome Golem

Golemの利用者は、Rustによる参照実装Yagnaを実行します。利用者が集まって構成するGolem Networkは、計算資源を売買するP2P市場です。利用者は、使っていない資源を販売するプロバイダー、タスクの実行に必要な資源を購入するリクエスター、またはその両方の役割を担えます。このコミュニティがまとめたリストは、Golemのプロジェクト、ネットワーク統計、開発者・プロバイダー向けツール、学習資料、アーカイブされたアプリを扱います。


## Golem

- [Golem Network Platform](https://www.golem.network/platform) - Golem Network 公式ウェブサイトで Golem プラットフォームについて学びます。
- [Golem Network Discord](https://chat.golem.network/) - Discord で Golem Network コミュニティに参加し、チームと直接交流します。
- [Reddit](https://reddit.com/r/GolemProject) - Reddit プラットフォーム上の Golem Network ディスカッション。
- [Twitter](https://twitter.com/golemproject) - Golem Project の Twitter。
- [Blog](http://blog.golemproject.net/) - 発表・概要・更新を伝える公式ブログ。原文では、この情報の最も信頼できる情報源と紹介されています。

## ネットワーク統計

- [Golem Network Stats](https://stats.golem.network) - Golem Network のタスク・プロバイダーリソース使用率を追跡する統計。
- [Golem Stats backend](https://github.com/cryptobench/golem-stats-backend) - API エンドポイント URL を含む Golem Network Statistics ページのバックエンド。
- [Stats APIドキュメント](https://docs.stats.golem.network/) - Golem Network Stats ページがデータ表示に使う API エンドポイント。

## Golem プロジェクト

### GPU プロバイダー

原文では、Golem NetworkをGPUワークロードに対応させるプロジェクトと説明しています。状況の確認先として、[Discord](https://chat.golem.network/)の#golem-projects内にある専用GPU Providerチャンネルのピン留めメッセージを案内しています。

### Golem 上の Ray

[Ray on Golem](https://github.com/golemfactory/ray-on-golem) は、Python 開発者が Golem Network へより容易にアクセスできるようにするための、分散コンピューティングフレームワーク Ray との統合です。

### golem-js — Golem の JS SDK

[golem-js](https://github.com/golemfactory/golem-js) は、開発者が Node.js またはブラウザーコンテキストで動作する Golem アプリケーションを作れるようにするためのライブラリ、開発者ツール・ドキュメント群です。

### Jupyter on Golem

[Jupyter on Golem](https://github.com/golemfactory/golem-kernel-python) は、Golem Network で利用可能な分散リソースを使って Python Notebook を実行できるようにする JupyterLab Python カーネルです。 

### Golem 上のレンダリング

原文では、Reality Gamesとの緊密な協力により開発したサービスと説明しています。Golemのプロバイダーを稼働させ、ERC-1155トークンの（web2）所有証明として、利用者に合わせた建物アニメーションをレンダリングします。[サービス](https://reality.golem.network/)を参照してください。


### レピュテーションシステム

レピュテーションシステムの目的は、誰でも何らの識別もなくプロバイダー・リクエスターとして参加できるネットワークにおける、信頼と信頼性の課題へ取り組むことです。このシステムは、ネットワーク参加者間の安全で信頼できるやり取りを実現することを目標に、信頼の枠組みを確立しようとしています。

## エコシステム

### ブロックチェーン自動化（別名 Emeth.xyz）

Emeth は DeFi（分散型金融）のポートフォリオ管理とブロックチェーン自動化を専門としています。Golem の技術を活用し、DeFi 投資管理の自動化・簡素化のためのツールを提供します。このプラットフォームは DeFi 分野での運用の容易さ・効率を高めることに焦点を当て、初心者・経験豊富な DeFi ユーザー双方のニーズを満たす、ユーザーフレンドリーなインターフェースと高度な分析を組み合わせています。

## 開発者・リクエスター向けリソース

- [Golem Docs](https://docs.golem.network/) - Golem 向けマニュアル（リクエスター・プロバイダー双方）。
- [Python APIリファレンス](https://yapapi.readthedocs.io/) - Yapapi API リファレンス。
- [リリース一覧](https://github.com/golemfactory/yagna/releases) - Yagna の GitHub リリース。
- [JSリクエスターのクイックスタート](https://docs.golem.network/docs/quickstarts/js-quickstart) - すぐに開始して、Golem 上で最初のタスク・リクエストを作成します。
- [Stack OverflowのYagnaタグ](https://stackoverflow.com/questions/tagged/yagna) - 回答してほしい興味深い質問がある場合は Yagna タグを使います。


## プロバイダー向けリソース

- [プロバイダー向けチュートリアル](https://docs.golem.network/docs/providers/provider-installation) - ハンドブックを使って Golem Network のプロバイダーとして開始します。
- [Yagna-binaries for aarch64](https://github.com/MarijnStevens/yagna-binaries) - Raspberry Pi などのシステムでプロバイダーとして動作できるよう、64 ビット ARM アーキテクチャ向けにビルド。
- [プロバイダーノードの価格を自動更新](https://gist.github.com/sv3t0sl4v/28f896752edc9e20347ffc6d8cefe74c) - stats.golem.network の価格中央値を確認し、プロバイダーノードの価格に関する三つの値すべてを更新するスクリプト。
- [Golem Price Updater](https://github.com/jedbrooke/golem-price-updater) - 現在の GLM 価格に基づき Golem ノードの価格を自動調整。

### 監視

- [Golem Provider dashboard](https://github.com/vciancio/golem-dashboard) - SSH で接続せずにプロバイダーノードのステータスを迅速に収集する ReactJS ダッシュボード。
- [Golem Provider dashboard backend / GolemBar](https://github.com/vciancio/golem-node-server) - プロバイダーからデータを収集し、上記ダッシュボードプロジェクトで利用する Flask バックエンド。

### プロビジョニング

- [Ansible ya_provider](https://galaxy.ansible.com/golemfactory/ya_provider) - 最小限の設定で Golem プロバイダーを自動デプロイする Ansible ロール。
- [Golem Provider Terraform](https://github.com/nemani/golem-provider-terraform) - クラウドプロバイダーへ Golem Provider を自動デプロイし、Prometheus による監視を設定する Terraform スクリプト。
- [Automatic Golem](https://github.com/r34x/Automatic-Golem) - プロセスを案内するシンプルな手順・ログで Golem Provider をセットアップ。
- [Golem Provider Node](https://github.com/alexandre-abrioux/golem-node) - Docker コンテナー内でプロバイダーをすばやく実行開始するのを支援するノードの Docker 版。
- [Golem Provider node](https://github.com/blue-notes-robot/golem-node) - ENV 変数から設定ファイルを動的生成し、起動するレプリカ数を指定できる、上記alexandre-abriouxプロジェクトのフォーク。

## 学習リソース

### プレゼンテーションとワークショップ資料

- [Golem: JavaScript による分散並列コンピューティング](https://www.youtube.com/watch?v=2iUhqOJUsoI) - Golem Network を基盤にした JavaScript による分散並列コンピューティングについての Grzegorz Godlewski のプレゼンテーション（meet.js Summit 2023）。
- [Golem: 0xHack における Jakub Mazurek によるアーキテクチャ、SDK、ヒント](https://youtu.be/1UoZWC9XI2g) - Python・JS のコーディング経験がある任意の開発者が、Golem 上で動作するアプリケーション構築を開始する方法を深掘りするライブワークショップ。
  

### Golem の The Next Milestone ブログシリーズを解き明かす

- [Golem の The Next Milestone を解き明かす](https://blog.golemproject.net/next-milestone) - Golem の Yagna 実装の紹介。
- [Golem の The Next Milestone を解き明かす、Part II](https://blog.golemproject.net/next-milestone-part-ii/) - Golem の新実装 Yagna の基盤を構成する、基本的なアーキテクチャ概念。
- [Golem の The Next Milestone を解き明かす、Part III](https://blog.golemproject.net/next-milestone-part-iii/) - Golem の参照アーキテクチャの要素と、それらがどのように相互作用して Golem Network という機能するエコシステムを形成するかを示します。

### GitHub Digest ブログシリーズ

- [Golem GitHub Digest #1](https://blog.golemproject.net/golem-github-digest-1/) - Golem リポジトリを理解する。
- [Golem GitHub Digest #2](https://blog.golemproject.net/golem-github-digest-2/) - Golem リポジトリを深掘りする。
- [Golem GitHub Digest #3](https://blog.golemproject.net/golem-github-digest-3/) - Golem リポジトリの Pull Request を深掘りする。
- [Golem GitHub Digest #4](https://blog.golemproject.net/golem-github-digest-4/) - Golem リポジトリの最新リリースを深掘りする。
- [Golem GitHub Digest #5](https://blog.golemproject.net/golem-github-digest-5/) - Golem アルファテストネットを深掘りする。
- [Golem GitHub Digest #6](https://blog.golemproject.net/golem-github-digest-6/) - Golem 向け SGX 概念実証。
- [Golem GitHub Digest #7](https://blog.golemproject.net/golem-github-digest-7/) - Golem マーケットプレイスの分散化。
- [Golem GitHub Digest #8](https://blog.golemproject.net/golem-github-digest-8/) - Awesome Golem と Alpha 3 への次のステップ。
- [Golem GitHub Digest #9](https://blog.golemproject.net/golem-github-digest-9/) - AMD プロバイダーサポート、ネットワークメトリクス、改善された提案処理。
- [Golem GitHub Digest #10](https://blog.golemproject.net/golem-github-digest-10/) - コミュニティフィードバックによる改善。
- [Golem GitHub Digest #11](https://blog.golemproject.net/golem-github-digest-11/) - 簡単なログ収集。
- [Golem GitHub Digest #12](https://blog.golemproject.net/golem-github-digest-12/) - 原文では、メインネットへの移行とフィードバックの収集を伝えています。
- [Golem GitHub Digest #13](https://blog.golemproject.net/golem-github-digest-13/) - Golem コミュニティの助けにより、より速く進む。
- [Golem GitHub Digest #14](https://blog.golemproject.net/golem-github-digest-14/) - 次のメジャーリリースに向けて。
- [Golem GitHub Digest #15](https://blog.golemproject.net/golem-github-digest-15/) - Awesome、Goth の改善、Beta 3 に向けて。
- [Golem GitHub Digest #16](https://blog.golemproject.net/golem-github-digest-16/) - VPN、リクエスター向け ARM バイナリー、カスタム使用カウンター。



## アーカイブ

### アプリ

- [Chess On Golem](https://chessongolem.app/) - オープンソースチェスエンジン Stockfish を使い、ネットワークのプロバイダーと対戦するホスト型チェスアプリ。
- [Go le' Machin](https://github.com/DEUTSCHKLUB/go-le-m) - 複数画像をアップロードして一括操作を適用できる、ウェブベースの一括画像エディター。

#### Docker

- [Golem Requestor Node](https://github.com/DerekJarvis/general-golem) - Docker 化されたリクエスター環境。Python スクリプトを渡すとデーモンを設定して実行します。

#### テスト

- [Golem Test Harness (Goth)](https://github.com/golemfactory/goth) - 開発プロセスを高速化し、アプリケーション作成者にとってより快適にすることを目的とするツール。
- [Golem-afl](https://github.com/sladecek/golem-afl) - 実験的なテストファジングフレームワーク。セキュリティホールの発見を支援します。
- [Golem Cargo Test](https://github.com/sladecek/golem_cargo_test) - Rust プロジェクト向け適応型分散テスト実行器。
- [Golem CI](https://github.com/hhio618/golem-ci) - 分散タスクパイプライン。
- [Golem SLATE](https://github.com/deutschklub/golem-slate) - Golem SLATEのオープンソースリポジトリ。固定原文には上のアプリ節への説明参照がありますが、その説明は固定文書内にありません。
- [ThorgPress](https://github.com/figurestudios/thorgpress) - プロバイダーをベンチマークし、マーケットプレイスの表示からは把握できない能力も評価するツール。

#### VPN

- [Yagna httpx client](https://github.com/golemfactory/ya-httpx-client/tree/johny-b/vpn) - 他の HTTP サーバーと通信するのと同じ方法でプロバイダーベース HTTP サーバーと通信する、Yagna 上の VPN 利用を実演。
- [Golem Provider with network access](https://github.com/jedbrooke/golem-network-requestor) - 実行中のプロバイダーの HTTP プロキシとして動作し、より広いインターネットへアクセスできるようにするリクエスター。

#### ゲーム

- [Golem Sudoku](https://github.com/Dodecane/golem-sudoku) - サイズバリエーションを備えた数独ゲーム。
- [HSOG-requester](https://github.com/ChrisHelmsC/hsog-requestor) - 多数のシミュレーションゲームを実行し、HearthStone コミュニティのデッキ設計・構築を支援します。
- [ChessOnGolem](https://github.com/broadcastmonkey/ChessOnGolem) - 最初のアプリ節で説明した Chess のオープンソースリポジトリ。Golem バックエンドを通じて二つの AI が対戦する React フロントエンドを含みます。
- [Golem Fleet Battle Simulator](https://github.com/UnfortuN8/Golem-Fleet-Battle-Simulator) - 対立する二つの宇宙船艦隊間の戦闘結果を計算するシステム。iOS ゲーム Rock Paper Frigate で PvP 艦隊戦の結果決定に使われます。

#### CLI ツール

- [Golem Completion Engine](https://github.com/krunch3r76/gc__enhanced_completion) - golemsp・yagna 向けのコンテキストヘルプを提供して組み込み補完を拡張する、強化版 bash 補完エンジン。
- [Golocity](https://github.com/davidstyers/golocity) - たった二つのコマンドで Docker 化されたアプリケーションを Golem Network 上に構築・デプロイ。
- [gc__push_image](https://github.com/figurestudios/gc__push_image) - GVMI イメージを Skynet へ公開し、セルフホストせず、制御を手放すこともなくimage_urlを変更可能にする CLI ツール。

#### 動画トランスコードと編集

- [Golem Network Video Transcoder](https://github.com/Doc-Saintly/golem-video) - 動画をトランスコードするサンプルアプリ。トランスコードプロファイルを選び、動画をアップロードします。
- [Golem Transcoding requestor](https://github.com/Edhendil/golem-transcoding) - 動画ファイルを入力として受け、異なる形式へトランスコードする React + Spring ベースウェブアプリ。
- [Golem Auto Editor](https://github.com/jedbrooke/golem-auto-editor) - Auto-Editor を実行して一部の動画編集機能を自動実行し、動画処理を Golem へオフロード。

#### データ分析
- [Coacervate](https://github.com/pryce-turner/coacervate/) - ゲノム解析を容易に実行できる、無料でオープンソースの公共財。原文では、実行先を非常に低コストのグローバルスーパーコンピューターと紹介しています。画期的な研究に必要な知識やインフラをより多くの人が利用できるようにすることを目的としています。
- [Flan](https://github.com/nestorbonilla/flan) - 世界中の数百万の貿易額レコードをカスタム分析し、注意すべき部門について明確なガイドラインを提供する起業家向けツール。
- [Golem Lorenz-attractor](https://github.com/hhio618/golem-lorenz-attractor) - 時間経過に伴う粒子の軌道を記述する、三つの結合された一次非線形微分方程式系。
- [Golem Geomandel](https://github.com/Edhendil/golem-geomandel) - 単一点を中心とし、各画像でズームを増加させるマンデルブロ集合画像のシーケンスを生成する Python スクリプト。
- [Golem COVID](https://github.com/iRhonin/golem-covid) - COVIDに関連する人口100万人当たりの新規死亡数を示す画像を作成。すべての画像生成後に集めて GIF を作成します。
- [Golem Parallel Matplotlib](https://github.com/CoeJoder/golem-parallel-matplotlib) - ヒト被験者の概日リズム測定に対して各種統計分析を実行。
- [Full-Text Search Engine](https://github.com/niklr/golem-fulltext-search) - テキストファイルを検索する検索エンジンサービス。

#### データシミュレーション

- [cadCAD Golem](https://github.com/rogervs/cadcadgolem) - シミュレーションワークロードを複数 Golem ノードへディスパッチする cadCAD 用パッケージラッパー。Jupyter Notebook をサポート。
- [Golem Array](https://github.com/johngrantuk/golem-array) - アンテナアレイの設計・シミュレーション。
- [Limit visualization](https://github.com/vporton/limit-visualization) - さまざまな極限を持つグラフをプロット。不連続グラフをサポート。
- [GolemGraphWavePair](https://github.com/smiley1983/golemGraphWavePair) - グラフフレームを生成し、アニメーションへ結合します。
- [Golemized strong-gravitational-lense](https://github.com/rezahsnz/golemized-strong-gravitational-lense) - 重力レンズと呼ばれる物理現象をシミュレートする、シンプルな分散コンピューティングハック。

#### データ最適化

- [Golem or-tools](https://github.com/Doc-Saintly/golem-ortools) - or-tools の制約プログラミングライブラリを使用して問題を解決します。
- [No more COFUD](https://github.com/DEUTSCHKLUB/no-more-COFUD) - 人々の間に2メートルの距離を保ちながら、空間に最大人数を収容する方法を計算します。
- [Mutta Puffs](https://github.com/DeveloperInProgress/Mutta-Puffs) - 集団ベースのシミュレーテッドアニーリングを用いて、指定チーム群の巡回トーナメント問題を解くスポーツリーグスケジューラー。

#### 機械学習
- [DeML-Golem](https://github.com/anshuman73/DeML-Golem) - 連合学習でサブステップモデルを結合する分散型機械学習。異なるプロバイダーノードで学習したモデルを完全なモデルにします。
- [Golem Image Classifier](https://github.com/ControlCplusControlV/Golem-Image-Classifier) - 稼働中のサービスを通じて画像を学習・分類します。

#### ディープラーニング
- [Mlg](https://github.com/rezahsnz/mlg) - ImageNet データセットで事前学習した一般的な CNN を分散する、CNN 予測サービス向けディープラーニングアプリケーション。
- [Deepart Golem](https://github.com/echinocacti/deepart_golem) - TensorFlow アプリを実行し、コンテンツ画像とスタイル画像をアップロードして、分散コンピューティングでアートを生成します。

#### RNG
- [Gandom](https://github.com/rezahsnz/gandom) - プロバイダーからランダムストリームを抽出します。Chaos マシンに基づくものと Sodium を利用するもの、二つの PRNG をサポートします。
- [Entropythief](https://github.com/krunch3r76/entropythief) - Linux のエントロピーソースまたは Intel の RDRAND CPU 命令を利用し、複数プロバイダーから安価にランダムエントロピーを取得します（Gandom に着想）。

#### パスワード復元
- [Golem-JTR](https://github.com/hhio618/golem-jtr) - John The Ripper を実行してパスワードを復元します。
- [Yacat](https://docs.golem.network/docs/creators/python/tutorials/task-example-2-hashcat) - Hashcat によるパスワード復元を段階的に行います。

#### DeFi

- [Golem Staking Pool incentivize system for GLM holders](https://github.com/masaun/GLM-stake-pool) - GLM トークン保有者にイールドファーミングの機会を提供するスマートコントラクト。
- [Magic-doll](https://github.com/bakaoh/magic-doll) - Sumer は、Splinterland カードを委任して受動的収入を得られる DeFi アプリケーションです。その中核である `Kyle` は、各試合に最適なチームを選ぶ計算をすべて実行する Golem アプリです。

#### ユーザーインターフェース

- [Golem UI](https://github.com/shri4net/golem-hackathon-2020) - Yagna 用の Electron ユーザーインターフェース。

#### その他

- [Gc__ListOffers](https://github.com/krunch3r76/gc__listoffers) - GUI で Golem Network 上のプロバイダーの提供条件を一覧表示します。
- [gvm-vim](https://github.com/canokaue/gvm-vim) - VIM エディターをコンパイルするための Golem 化 Docker イメージ。
- [Golem Image Sharpening](https://github.com/visualNext/golem) - 画像をシャープ化するツール。
- [Filterms](https://github.com/krunch3r76/filterms) - Golem リクエスター（yapapi）としてのホワイトリスト・ブラックリスト用マーケット戦略。
- [golem-bulk-image-handler](https://github.com/figurestudios/golem-bulk-image-handler) - 入力画像を受け取り、Pillow ライブラリで多様な方法により処理します。
