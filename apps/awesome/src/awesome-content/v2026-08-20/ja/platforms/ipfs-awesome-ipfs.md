---
title: "Awesome IPFS"
description: "IPFSを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-ipfs-awesome-ipfs-readme-md"
---

# Awesome IPFS

IPFSを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [実装](#implementations)
- [アプリ](#apps)
- [ブラウザー](#browsers)
- [ツール](#tools)
- [デバッグツール・学習](#debugging-tools--learning)
- [サービス・プラットフォーム](#services--platforms)
- [ピニングサービス](#pinning-services)
- [古いプロジェクト](#stale-projects)
- [コントリビュート](#contribute)
- [ライセンス](#license)

## 実装
IPFS は、各種ユースケースに最適化しようとする複数のプロトコル実装の開発を促進するオープンソースプロジェクトです。

IPFS ドキュメントの[IPFS implementations](https://docs.ipfs.tech/concepts/ipfs-implementations/#popular-or-actively-maintained)一覧を確認してください。

## アプリ

- [Agregore](https://github.com/AgregoreWeb/agregore-browser) - 分散 Web 向け最小 Web ブラウザー。ブラウザーの `fetch()` API を使い IPFS からデータをダウンロード・アップロードできます。
- [Anytype](https://github.com/anyproto) - クリエイターに所有権を戻すよう設計されたノーコード・モジュール式 Web ビルダー。プライベートで local-first、p2p 同期、オープンな Anysync プロトコル上に構築。
- [archiveweb.page](https://github.com/webrecorder/archiveweb.page) - IPFS をサポートする Chrome・Chromium ベースブラウザー向け高忠実度 Web アーカイブ拡張。
- [Autonomica "IPFS Social Proof"](https://github.com/IBM/ipfs-social-proof) - ID 作成と公開ソーシャルメディア・Web proofs による ID 証明のための Keybase 風 Dapp。
- [brig](https://github.com/sahib/brig) - git 風インターフェイス・FUSE filesystem によるファイル同期。
- [Diffuse](https://github.com/icidasset/diffuse) - IPFS node または他のクラウド／分散ストレージサービスから音楽を再生。
- [Durin](https://durin.site/) - IPFS ネットワーク上のコンテンツへアクセス・アップロードするモバイルアプリ。
- [Hardbin](https://github.com/jes/hardbin) - URL fragment で復号鍵を渡す暗号化 pastebin。
- [hyprspace](https://github.com/hyprspace/hyprspace) - 真に分散したネットワークのため IPFS + Libp2p 上に構築された軽量 VPN。
- [InterPlanetary Wayback](https://github.com/oduwsdl/ipwb) - IPFS を使う Web Archive（WARC）の索引化・再生。
- [Interplanetary Wiki](https://github.com/jamescarlyle/ipfs-wiki) - IPFS 上に構築された Wiki。
- [IPFEssay](https://gitlab.com/stavros/IPFessay) - IPFS で検閲不能なエッセイを公開する簡単な方法。
- [IPFS Desktop](https://github.com/ipfs-shipyard/ipfs-desktop) - 便利なデスクトップアプリで IPFS の全機能を提供。完全な IPFS node、便利な OS メニューバー／タスクバーショートカット、オールインワンファイルマネージャー、peer map、content explorer を備えます。
- [IPFS Share](https://github.com/ipfs-shipyard/ipfs-share-files) - ブラウザーから IPFS を使い直接ファイルを共有。
- [ipfs-chat](https://github.com/SomajitDey/ipfs-chat) - 端末ベースの暗号化チャットルーム。プライベートメッセージと安全なチャット内ファイル／ディレクトリ共有を可能にします。サーバー／broker 不要（signaling/rendezvous server 不要）。LAN／インターネット（NAT-traversal）で動作。
- [IPFS-FPS](https://github.com/underscoredLabs/webgl-ipfs-fps) - 完全分散型一人称シューティング。Unity、Fleek、Unstoppable Domans、Pinata で構築。
- [killcord](https://github.com/nomasters/killcord) - 検閲に強い deadman's switch。
- [Mintter](https://github.com/MintterHypermedia/mintter) - コミュニティが構造化され深くリンクされたコンテンツで協働できる、IPFS 上に構築されたオープンシステム。すべてのコンテンツは暗号署名、バージョン管理され、IPFS で永続化されます。
- [orbitchat.dev](https://github.com/cppshane/orbit-chat) - Web 上の超シンプルなチャットルーム。
- [Peer Web Site](https://github.com/Weedshaker/PeerWebSite) - 指先ひとつで Peer to Peer Web Site ホスティング！ブラウザーから完全機能 HTML（CSS、JS を含む）サイトを送信し、動画、画像などのファイルを添付。
- [Peergos](https://github.com/Peergos/Peergos) - エンドツーエンド暗号化されたピアツーピアファイルストレージ・共有。
- [Planet](https://github.com/Planetable/Planet) - Mac 上で IPFS により分散ブログ・Web サイトを構築・ホスト。
- [Plebbit](https://github.com/plebbit) - ピアツーピア・オープンソースで、サーバーレス、管理者不要、無限にスケール可能なソーシャルメディアプラットフォーム。IPFS、Gossipsub、Blockchain namesystems（ENS、SNS）上に構築。
- [PushToTalk](http://timothy.hobbs.cz/push-to-talk/index.html) - 音声エッセイを編集し、IPFS で公開。
- [Quiet](https://tryquiet.org/) - Tor 接続上でプライベート IPFS ネットワークを実行する、プライバシー重視のエンドツーエンド暗号化チャットアプリ。デスクトップ・モバイル iOS・Android アプリを利用可能。
- [TeaTime](https://github.com/bjesus/teatime) - IPFS、SQLite、GitHub により強化された完全静的分散ライブラリシステム。

## ブラウザー
IPFS 統合を持つ Web ブラウザーの一覧
- [Agregore](https://github.com/AgregoreWeb/agregore-browser) - 分散 Web 向け最小 Web ブラウザー。ブラウザーの `fetch()` API を使い IPFS からデータをダウンロード・アップロードできます。
- [Brave](https://brave.com/ipfs-support/) - 多くの将来志向機能を持つプライバシー重視ブラウザー。
- [galacteek](https://github.com/pinnaculum/galacteek) - 分散 Web 向けマルチプラットフォーム Qt5 ベースブラウザー。
- [Opera](https://blogs.opera.com/tips-and-tricks/2021/02/opera-crypto-files-for-keeps-ipfs-unstoppable-domains/) - Opera ブラウザーは2021年に `ipfs://` をサポート。


## ツール

- [create-ipfs-app](https://github.com/alexbakers/create-ipfs-app) - 1コマンド実行で分散 web3 アプリをセットアップ。
- [dScan](https://github.com/p2plabsxyz/dscan) - Web3.Storage へコンテンツをアップロードし、CIDs の QR コードを生成するブラウザー拡張。
- [dump-ipfs](https://github.com/quasarch/dump-ipfs) - IPFS・Filecoin がサポートする人気データベース向け分散暗号化バックアップエージェント。
- [gatsby-plugin-ipfs](https://github.com/moxystudio/gatsby-plugin-ipfs) - アセットを相対化して Gatsby Web サイトの IPFS へのデプロイをサポート。
- [git-ipfs-rehost](https://github.com/whyrusleeping/git-ipfs-rehost) - git リポジトリを ipfs で再ホストするスクリプト。
- [git-remote-ipfs](https://github.com/cryptix/git-remote-ipfs) - リポジトリを IPFS から／へ push/pull。
- [Git IPFS Remote Bridge](https://github.com/ElettraSciComp/Git-IPFS-Remote-Bridge) - IPFS 分散データストレージ上で Git ユーザーがリポジトリを clone、push、fetch、セルフホスト、リリースできる Python 3 製プログラム集。
- [go-orbit-db](https://github.com/berty/go-orbit-db) - 元の JavaScript 版と完全互換を目指す OrbitDB の Golang ポート。OrbitDB はサーバーレス分散ピアツーピアデータベースです。
- [gomobile-ipfs](https://github.com/ipfs-shipyard/gomobile-ipfs) - Gomobile によるモバイル向け IPFS・libp2p。
- [http2ipfs](https://github.com/jbenet/http2ipfs-web) - URL を IPFS node へ追加するシンプルな Web ツール。
- [IPDR](https://github.com/miguelmota/ipdr) - IPFS バックアップ Docker Registry。
- [IPFS Setup Action](https://github.com/ibnesayeed/setup-ipfs) - GitHub CI platform でクロスプラットフォームテスト環境を準備する go-ipfs のインストール・初期化用 GitHub Action。
- [ipfs-action](https://github.com/aquiladev/ipfs-action) - 静的 Web サイト配信向け GitHub Action。
- [ipfs-add-from-encrypted](https://github.com/TroyWilson1/ipfs-add-from-encrypted) - AES256 でファイル・ディレクトリを暗号化してから IPFS へ追加。
- [IPFS-boot](https://github.com/rhodey/IPFS-boot) - ユーザー同意を必要とする IPFS webapps を公開。
- [ipfs-companion](https://github.com/ipfs/ipfs-companion) - IPFS リソースへのアクセスを簡素化するブラウザー拡張。
- [ipfs-deploy](https://github.com/agentofuser/ipfs-deploy) - 静的 Web サイトをデプロイするゼロ設定 CLI: cd my-static-website && npx @agentofuser/ipfs-deploy
- [ipfs-mount](https://github.com/richardschneider/net-ipfs-mount) - Windows 上で IPFS をマップドドライブとしてマウント。
- [ipfs-paste](https://github.com/jbenet/ipfs-paste) - stdin・クリップボードを IPFS へ貼り付け。
- [ipfs-pinner](https://github.com/wabarc/ipfs-pinner) - ファイルを IPFS ピニングサービスへアップロードする支援ツールキット。
- [ipfs-publish](https://github.com/auhau/ipfs-publish/) - Git providers から IPFS への静的 Web サイト配信用 Continuous Delivery ツール。
- [ipfs-screencap](https://github.com/jbenet/ipfs-screencap) - スクリーンショットを取得、IPFS へ公開、リンクをクリップボードへコピー。
- [ipfs-video-gateway](https://github.com/bneijt/ipfs-video-gateway) - クラウドプロバイダー上で自分の IPFS gateway を Cloud-init し、シンプルな Web インターフェイスでコンテンツを容易にピン留め。
- [ipfsecret](https://github.com/shlemph/ipfsecret) - 秘密のパスフレーズで IPFS ファイルを暗号化・復号。
- [ipget](https://github.com/ipfs/ipget) - :satellite: IPFS 用 wget: IPFS 経由でファイルを取得しローカル保存。
- [IPLD Explorer](https://github.com/ipfs-shipyard/ipld-explorer) - ブラウザーから Merkle Forest を探索。
- [ipns-pin](https://github.com/justicenode/node-ipns-pin) - ipns 経由で物をピン留めするコマンドラインツール。
- [IPRedirect](https://github.com/JayBrown/IPRedirect) - IPFS/IPNS アドレスをローカル gateway へリダイレクトするブラウザーユーザースクリプト。拡張がまだ書かれておらず userscripts をサポートする任意ブラウザーで動作。
- [iprfc](https://github.com/RTradeLtd/iprfc) - RFC を IPFS に保存し RTradeLtd/Lens で索引化する IETF RFC ダウンローダー。
- [mahuta](https://github.com/ConsenSys/Mahuta) - IPFS 上のデータを収集、保存、索引化し、検索機能（全文、クエリ）を提供する、マイクロサービスアーキテクチャ向けプラグアンドプレイサービス。
- [Multiverse](https://github.com/multiverse-vcs/go-multiverse) - ピアツーピアソフトウェア開発を可能にする分散バージョン管理システム。
- [Omnipin](https://github.com/omnipin/omnipin) - 究極の分散 Web サイトデプロイツールキット。
- [orbit-db](https://github.com/orbitdb/orbit-db) - IPFS をデータストレージ、IPFS Pubsub を peers との自動データベース同期に使う、サーバーレス分散ピアツーピアデータベース。
- [Pin Tweet to IPFS](https://github.com/meandavejustice/pin-tweet-to-ipfs) - ツイートの WebArchiveZip を作成して IPFS ネットワークへ追加する Web 拡張。
- [Public Gateway Checker](https://github.com/ipfs/public-gateway-checker) - 公開ゲートウェイのオンライン状態を確認。
- [rivet](https://github.com/wabarc/rivet) - Web ページを IPFS にアーカイブしやすくするツールキット。
- [sourcify](https://github.com/ethereum/sourcify) - 分散型 Solidity コントラクトのソースコード検証サービス。
- [SimpleAsWater Bot](https://github.com/simpleaswater/twitter-pinbot) - IPFS Cluster を使ってツイートを公開 IPFS ネットワークに追加・ピン留め・解除する Twitter ボット。
- [solid-ipfs](https://github.com/Eximua/solid-ipfs) - Solid を使い、IPFS Hash を非公開または公開で保存。
- [Tellit](https://gitlab.com/terceranexus6/tellit) - キーペアまたはパスフレーズでファイルを暗号化してからアップロード。
- [VIPFS](https://github.com/Ideea-inc/vipfs) - Vue アプリを IPFS へ簡単に公開。
- [wbipfs](https://github.com/wabarc/wbipfs) - Wayback の Web ページを IPFS に保存するコマンドラインツール兼 Go パッケージインターフェイス。
- [youtube2ipfs](https://github.com/dokterbob/youtube2ipfs) - YouTube（および類似動画プラットフォーム）から動画をダウンロードし、IPFS へ追加。

## デバッグツールと学習

- [IPFS Check](https://check.ipfs.network/)
- [Helia Identify](https://ipfs.fyi/identify)
- [CID Inspector](https://cid.ipfs.tech/)
- [File to UnixFS DAG](https://dag.ipfs.tech/)
- [IPLD Explorer](https://explore.ipld.io)
- [Public Gateway Checker](https://github.com/ipfs/public-gateway-checker)
- [IPNS Inspector](https://github.com/ipfs/ipns-inspector)

## サービスとプラットフォーム

- [Apillon](http://apillon.io/) - Crust ネットワーク経由の IPFS ゲートウェイ・IPFS ファイルピン留め、Web サイト・アプリ向けの IPFS ホスティングを提供する Web3 開発プラットフォーム。
- [Ceramic](https://ceramic.network/) - IPFS のコンテンツアドレス指定、先進的な暗号技術、ブロックチェーンのタイムスタンプを組み合わせ、データの安全性と検証可能性を保証。
- [dAppling](https://www.dappling.network/) - GitHub から IPFS への自動デプロイを備えたホスティングプラットフォーム。
- [Fileverse](https://fileverse.io/) - IPFS を基盤とする暗号化ファイル共有。ウォレットの有無にかかわらず任意のファイルを共有可能。
- [Fleek](http://fleek.co/) - IPFS、Filecoin、Internet Computer 上でサイト・アプリを構築、ホスト、保存するための Open Web 開発プラットフォーム。
- [Fission](https://fission.codes) - 開発者がスケーラブルで安全なソフトウェアアプリケーションを構築できるようにする、オープンソースプロトコルとマネージドソリューションを開発。
- [Matters.town](https://matters.town/) - 分散型コンテンツ公開エコシステム。
- [Peergos](https://peergos.org) - 非公開ながらソーシャルなオンライン空間。文書・メディアを保存・編集し、友人とファイルやフォルダーを共有。

## ピン留めサービス

- [4EVERLAND](https://www.4everland.org/) - フロントエンドのホスト、データ・NFT・ファイルの保存、IPFS によるデータ取得をより簡単・迅速にする IPFS インフラとツールを提供するピン留めサービス。
- [Filebase](https://filebase.com/) - 難しい IPFS へのデータピン留めを簡素化。
- [lighthouse.storage](https://lighthouse.storage/) - プライバシー・暗号化機能を備えた分散型 IPFS ピン留めサービス。
- [NFT.Storage](https://nft.storage/) - IPFS・Filecoin 上の NFT 向け無料分散ストレージと帯域幅。
- [Pinata](https://pinata.cloud) - Pinata の REST API と IPFS ツールキットで dapp を構築・管理。
- [QuickNode](https://www.quicknode.com/ipfs) - IPFS ゲートウェイとピン留め。
- [Storacha](https://storacha.network) - 大規模に利用できる高速な分散データ。

## 保守終了プロジェクト

参照用に、すでに保守されていないプロジェクトの一覧を維持しています。この一覧に保守終了のものがあれば、エントリーを [stale.md](https://github.com/ipfs/awesome-ipfs/blob/04fcfef57e6f233fa164cf7020e8e5f588a78675/stale.md) へ移動する PR を送信し、必要に応じてインデントしたコメントで保守終了と判定した理由を追加してください。

[保守終了プロジェクトの一覧はこちら](https://github.com/ipfs/awesome-ipfs/blob/04fcfef57e6f233fa164cf7020e8e5f588a78675/stale.md)

## 貢献

貢献を歓迎します！

[**貢献ガイドライン**](https://github.com/ipfs/awesome-ipfs/blob/04fcfef57e6f233fa164cf7020e8e5f588a78675/CONTRIBUTING.md) を参照してください。

## ライセンス

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
