---
title: Awesome IPFS
description: IPFSの実装、アプリ、ブラウザー、開発・デバッグ用ツール、ホスティング基盤、ピン留めサービスと保守終了資料への案内。
licenseSource: github-ipfs-awesome-ipfs-readme-md
---
# Awesome IPFS<a id="目次"></a><a id="貢献"></a><a id="ライセンス"></a>

IPFSの実装、アプリ、ブラウザー、開発・デバッグ用ツール、ホスティング基盤、ピン留めサービスを探せます。保守状況、対応環境、料金、製品の主張は固定原文当時の記載です。

## 実装 <a id="implementations"></a>

IPFSは、用途に応じて最適化した複数のプロトコル実装の開発を促すオープンソースプロジェクトです。公式文書の[IPFS実装一覧](https://docs.ipfs.tech/concepts/ipfs-implementations/#popular-or-actively-maintained)を参照してください。

## アプリ <a id="apps"></a>

- [Agregore](https://github.com/AgregoreWeb/agregore-browser) - 分散ウェブ向けの最小限のブラウザー。ブラウザーの`fetch()` APIでIPFSからデータをダウンロード・アップロード。
- [Anytype](https://github.com/anyproto) - 制作者が所有権を取り戻せるように設計された、ノーコードのモジュール式ウェブビルダー。プライベートで、ローカル優先・P2P同期に対応したオープンなAnysyncプロトコルを基盤とする。
- [archiveweb.page](https://github.com/webrecorder/archiveweb.page) - IPFSに対応し、元のページを忠実に保存するChrome・Chromium系ブラウザー向けウェブアーカイブ拡張。
- [Autonomica "IPFS Social Proof"](https://github.com/IBM/ipfs-social-proof) - IDを作成し、公開したソーシャルメディアやウェブ上の証拠でそのIDを証明する、Keybaseに似たDapp。
- [brig](https://github.com/sahib/brig) - Git風のインターフェイスとFUSEファイルシステムによるファイル同期。
- [Diffuse](https://github.com/icidasset/diffuse) - IPFSノードや、ほかのクラウド・分散ストレージサービスに保存した音楽を再生。
- [Durin](https://durin.site/) - IPFSネットワーク上のコンテンツを閲覧・アップロードするモバイルアプリ。
- [Hardbin](https://github.com/jes/hardbin) - URLのフラグメントで復号鍵を渡す、暗号化されたテキスト共有サービス。
- [hyprspace](https://github.com/hyprspace/hyprspace) - IPFSとLibp2pを基盤とする、分散ネットワーク向けの軽量VPN。
- [InterPlanetary Wayback](https://github.com/oduwsdl/ipwb) - IPFSを使ったウェブアーカイブ（WARC）の索引作成と再生。
- [Interplanetary Wiki](https://github.com/jamescarlyle/ipfs-wiki) - IPFS上に構築されたWiki。
- [IPFessay](https://gitlab.com/stavros/IPFessay) - IPFSで検閲不能なエッセイを公開する方法として、原文が紹介するツール。
- [IPFS Desktop](https://github.com/ipfs-shipyard/ipfs-desktop) - 完全なIPFSノード、OSのメニューバー・タスクバーから使えるショートカット、ファイルマネージャー、ピアのマップ、コンテンツ閲覧機能を備えたデスクトップアプリ。
- [IPFS Share](https://github.com/ipfs-shipyard/ipfs-share-files) - IPFSを使い、ブラウザーから直接ファイルを共有。
- [ipfs-chat](https://github.com/SomajitDey/ipfs-chat) - 端末で使う暗号化チャットルーム。個別メッセージとチャット内の安全なファイル・ディレクトリ共有に対応。サーバーやブローカー、シグナリング・ランデブーサーバーが不要で、LANやインターネット上でNAT越えにより動作。
- [IPFS-FPS](https://github.com/underscoredLabs/webgl-ipfs-fps) - Unity、Fleek、Unstoppable Domans、Pinataで構築された、完全分散型の一人称視点シューティングゲーム。
- [killcord](https://github.com/nomasters/killcord) - 検閲に強いデッドマンスイッチ。
- [Mintter](https://github.com/MintterHypermedia/mintter) - 構造化され、深く相互リンクされたコンテンツをコミュニティで共同編集する、IPFS基盤のオープンなシステム。すべてのコンテンツに暗号署名と版管理を施し、IPFSで永続化すると原文は説明。
- [orbitchat.dev](https://github.com/cppshane/orbit-chat) - ウェブ上の簡素なチャットルーム。
- [Peer Web Site](https://github.com/Weedshaker/PeerWebSite) - ブラウザーからCSS・JSを含むHTMLサイトを送信し、動画や画像などを添付できるP2Pウェブホスティング。
- [Peergos](https://github.com/Peergos/Peergos) - エンドツーエンド暗号化による、P2Pのファイル保存・共有。
- [Planet](https://github.com/Planetable/Planet) - MacでIPFSを使い、分散型のブログやウェブサイトを構築・ホスト。
- [Plebbit](https://github.com/plebbit) - サーバーや管理者が不要な、P2P・オープンソースの分散型ソーシャルメディア。IPFS、Gossipsub、ブロックチェーンの名前システム（ENS、SNS）を基盤とし、無制限にスケールできると原文は説明。
- [PushToTalk](http://timothy.hobbs.cz/push-to-talk/index.html) - 音声エッセイを編集し、IPFSで公開。
- [Quiet](https://tryquiet.org/) - Tor接続上にプライベートなIPFSネットワークを構築する、プライバシー重視のエンドツーエンド暗号化チャットアプリ。デスクトップ版とiOS・Android版を提供。
- [TeaTime](https://github.com/bjesus/teatime) - IPFS、SQLite、GitHubを基盤とする、完全に静的な分散型ライブラリシステム。

## ブラウザー <a id="browsers"></a>

- [Agregore](https://github.com/AgregoreWeb/agregore-browser) - 分散ウェブ向けの最小限のブラウザー。ブラウザーの`fetch()` APIでIPFSからデータをダウンロード・アップロード。
- [Brave](https://brave.com/ipfs-support/) - 先進的な機能を備えた、プライバシー重視のブラウザー。
- [galacteek](https://github.com/pinnaculum/galacteek) - 分散ウェブ向けの、Qt5基盤のマルチプラットフォーム対応ブラウザー。
- [Opera](https://blogs.opera.com/tips-and-tricks/2021/02/opera-crypto-files-for-keeps-ipfs-unstoppable-domains/) - 2021年に`ipfs://`への対応を追加したブラウザー。

## ツール <a id="tools"></a>

- [create-ipfs-app](https://github.com/alexbakers/create-ipfs-app) - 1コマンドで分散型Web3アプリをセットアップ。
- [dScan](https://github.com/p2plabsxyz/dscan) - コンテンツをWeb3.Storageへアップロードし、CIDのQRコードを生成するブラウザー拡張。
- [dump-ipfs](https://github.com/quasarch/dump-ipfs) - 一般的なデータベース向けの、IPFSとFilecoinを利用した分散型の暗号化バックアップエージェント。
- [gatsby-plugin-ipfs](https://github.com/moxystudio/gatsby-plugin-ipfs) - アセットのパスを相対化し、GatsbyサイトのIPFSへのデプロイに対応。
- [git-ipfs-rehost](https://github.com/whyrusleeping/git-ipfs-rehost) - GitリポジトリをIPFS上でホストし直すスクリプト。
- [git-remote-ipfs](https://github.com/cryptix/git-remote-ipfs) - IPFSとの間でリポジトリをpush・pull。
- [Git IPFS Remote Bridge](https://github.com/ElettraSciComp/Git-IPFS-Remote-Bridge) - IPFSの分散データストレージ上でGitリポジトリをclone・push・fetch・自己ホスト・リリースできる、Python 3製のプログラム集。
- [go-orbit-db](https://github.com/berty/go-orbit-db) - サーバーレス・分散型P2PデータベースOrbitDBのGo移植版。元のJavaScript版との完全互換を目指す。
- [gomobile-ipfs](https://github.com/ipfs-shipyard/gomobile-ipfs) - Gomobileを使い、モバイルでIPFSとlibp2pを利用。
- [http2ipfs](https://github.com/jbenet/http2ipfs-web) - URLをIPFSノードへ追加するウェブツール。
- [IPDR](https://github.com/miguelmota/ipdr) - IPFSを基盤とするDockerレジストリ。
- [IPFS Setup Action](https://github.com/ibnesayeed/setup-ipfs) - go-ipfsをインストール・初期化し、GitHubのCI上にクロスプラットフォームのテスト環境を準備するGitHub Action。
- [ipfs-action](https://github.com/aquiladev/ipfs-action) - 静的ウェブサイトを配信するGitHub Action。
- [ipfs-add-from-encrypted](https://github.com/TroyWilson1/ipfs-add-from-encrypted) - ファイルまたはディレクトリをAES256で暗号化してからIPFSへ追加。
- [IPFS-boot](https://github.com/rhodey/IPFS-boot) - 更新時に利用者の同意が必要なIPFSウェブアプリを公開。
- [ipfs-companion](https://github.com/ipfs/ipfs-companion) - IPFSの資料やコンテンツへのアクセスを簡単にするブラウザー拡張。
- [ipfs-deploy](https://github.com/agentofuser/ipfs-deploy) - 設定不要で静的ウェブサイトをデプロイするCLI: cd my-static-website && npx @agentofuser/ipfs-deploy
- [ipfs-mount](https://github.com/richardschneider/net-ipfs-mount) - WindowsでIPFSをネットワークドライブとしてマウント。
- [ipfs-paste](https://github.com/jbenet/ipfs-paste) - 標準入力とクリップボードの内容をIPFSへ保存。
- [ipfs-pinner](https://github.com/wabarc/ipfs-pinner) - ファイルをIPFSのピン留めサービスへアップロードするツールキット。
- [ipfs-publish](https://github.com/auhau/ipfs-publish/) - GitのホスティングサービスからIPFSへ静的ウェブサイトを配信する、継続的デリバリー用ツール。
- [ipfs-screencap](https://github.com/jbenet/ipfs-screencap) - スクリーンショットを撮影してIPFSへ公開し、リンクをクリップボードへコピー。
- [ipfs-video-gateway](https://github.com/bneijt/ipfs-video-gateway) - クラウド上に自分のIPFSゲートウェイをcloud-initで構築し、ウェブ画面でコンテンツをピン留め。
- [ipfsecret](https://github.com/shlemph/ipfsecret) - 秘密のパスフレーズでIPFSファイルを暗号化・復号。
- [ipget](https://github.com/ipfs/ipget) - IPFS向けのwget。IPFS経由でファイルを取得し、ローカルへ保存。
- [IPLD Explorer](https://github.com/ipfs-shipyard/ipld-explorer) - ブラウザーからMerkle Forestを探索。
- [ipns-pin](https://github.com/justicenode/node-ipns-pin) - IPNS経由でコンテンツをピン留めするコマンドラインツール。
- [IPRedirect](https://github.com/JayBrown/IPRedirect) - IPFS/IPNSアドレスをローカルゲートウェイへ転送するユーザースクリプト。専用拡張のないブラウザーでも、ユーザースクリプトに対応していれば動作すると原文は説明。
- [iprfc](https://github.com/RTradeLtd/iprfc) - RFCをIPFSに保存し、RTradeLtd/Lensで索引を作成するIETF RFCダウンローダー。
- [mahuta](https://github.com/ConsenSys/Mahuta) - IPFS上のデータ収集・保存・索引作成と、全文検索・クエリ検索を提供する、マイクロサービス向けのプラグアンドプレイサービス。
- [Multiverse](https://github.com/multiverse-vcs/go-multiverse) - P2Pでのソフトウェア開発を可能にする分散型バージョン管理システム。
- [Omnipin](https://github.com/omnipin/omnipin) - 分散型ウェブサイトをデプロイするツールキット。
- [orbit-db](https://github.com/orbitdb/orbit-db) - IPFSをデータストレージに使い、IPFS Pubsubでピア間のデータベースを自動同期する、サーバーレス・分散型P2Pデータベース。
- [Pin Tweet to IPFS](https://github.com/meandavejustice/pin-tweet-to-ipfs) - ツイートのWebArchiveZipを作成し、IPFSネットワークへ追加するウェブ拡張。
- [Public Gateway Checker](https://github.com/ipfs/public-gateway-checker) - 公開ゲートウェイがオンラインかどうかを確認。
- [rivet](https://github.com/wabarc/rivet) - ウェブページをIPFSへアーカイブするツールキット。
- [sourcify](https://github.com/ethereum/sourcify) - Solidityコントラクトのソースコードを検証する分散型サービス。
- [SimpleAsWater Bot](https://github.com/simpleaswater/twitter-pinbot) - IPFS Clusterを使い、公開IPFSネットワークへツイートを追加・ピン留め・解除するTwitterボット。
- [solid-ipfs](https://github.com/Eximua/solid-ipfs) - Solidを使い、IPFSのハッシュを非公開または公開で保存。
- [Tellit](https://gitlab.com/terceranexus6/tellit) - キーペアまたはパスフレーズでファイルを暗号化してからアップロード。
- [VIPFS](https://github.com/Ideea-inc/vipfs) - VueアプリをIPFSへ公開。
- [wbipfs](https://github.com/wabarc/wbipfs) - ウェブページをIPFSへアーカイブするコマンドラインツールとGoパッケージのインターフェイス。
- [youtube2ipfs](https://github.com/dokterbob/youtube2ipfs) - YouTubeなどの動画プラットフォームから動画をダウンロードし、IPFSへ追加。

## デバッグツールと学習 <a id="debugging-tools--learning"></a>

- [IPFS Check](https://check.ipfs.network/)
- [Helia Identify](https://ipfs.fyi/identify)
- [CID Inspector](https://cid.ipfs.tech/)
- [File to UnixFS DAG](https://dag.ipfs.tech/)
- [IPLD Explorer](https://explore.ipld.io)
- [Public Gateway Checker](https://github.com/ipfs/public-gateway-checker)
- [IPNS Inspector](https://github.com/ipfs/ipns-inspector)

## サービスとプラットフォーム <a id="services--platforms"></a>

- [Apillon](http://apillon.io/) - IPFSゲートウェイ、Crustネットワーク経由のIPFSファイルのピン留め、サイト・アプリ向けのIPFSホスティングを提供するWeb3開発プラットフォーム。
- [Ceramic](https://ceramic.network/) - IPFSのコンテンツアドレス方式、暗号技術、ブロックチェーンのタイムスタンプを組み合わせ、データの安全性と検証可能性を保証すると原文は説明。
- [dAppling](https://www.dappling.network/) - GitHubからIPFSへの自動デプロイに対応したホスティングプラットフォーム。
- [Fileverse](https://fileverse.io/) - IPFSを基盤とする暗号化ファイル共有。ウォレットの有無にかかわらずファイルを共有可能。
- [Fleek](http://fleek.co/) - IPFS、Filecoin、Internet Computer上でサイトやアプリを構築・ホスト・保存するOpen Web開発プラットフォーム。
- [Fission](https://fission.codes) - スケーラブルで安全なアプリを構築するためのオープンソースプロトコルとマネージドソリューションを開発。
- [Matters.town](https://matters.town/) - 分散型のコンテンツ公開エコシステム。
- [Peergos](https://peergos.org) - 文書やメディアを保存・編集し、友人とファイルやフォルダーを共有できる、プライバシーを重視した交流のためのオンライン空間。

## ピン留めサービス <a id="pinning-services"></a>

- [4EVERLAND](https://www.4everland.org/) - フロントエンドのホスト、データ・NFT・ファイルの保存、IPFS経由の取得を簡単・迅速にする、IPFSインフラとツールを提供するピン留めサービス。
- [Filebase](https://filebase.com/) - IPFSへのデータのピン留めを簡単にするサービス。
- [lighthouse.storage](https://lighthouse.storage/) - プライバシー保護と暗号化機能を備えた、分散型のIPFSピン留めサービス。
- [NFT.Storage](https://nft.storage/) - IPFSとFilecoinを使った、NFT向けの無料の分散ストレージと帯域幅。固定原文当時の記載。
- [Pinata](https://pinata.cloud) - PinataのREST APIとIPFSツールキットでDappを構築・管理。
- [QuickNode](https://www.quicknode.com/ipfs) - IPFSゲートウェイとピン留め。
- [Storacha](https://storacha.network) - 大規模な分散データを扱うサービス。原文は「Super hot」と紹介。

## 保守終了プロジェクト <a id="stale-projects"></a>

原文は、参照用に[保守終了プロジェクトの一覧](https://github.com/ipfs/awesome-ipfs/blob/04fcfef57e6f233fa164cf7020e8e5f588a78675/stale.md)を別に用意しています。
