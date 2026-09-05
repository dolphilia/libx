---
title: "Awesome V"
description: "Vを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-vlang-awesome-v-readme-md"
---

# Awesome V

Vを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

- [アプリケーション](#applications)
	- [ビルドシステム](#build-systems)
	- [コマンドライン](#command-line)
	- [エディター](#editors)
	- [ゲーム](#games)
	- [グラフィックス](#graphics)
	- [インタープリター／コンパイラー](#interpreterscompilers)
	- [OS／カーネル](#operating-systemskernels)
	- [パッケージマネージャー](#package-managers)
	- [プロジェクト管理](#project-management)
	- [シリアライズ](#serialization)
	- [ユーティリティ](#utilities)
	- [Web](#web)
- [ライブラリ](#libraries)
	- [音声](#audio)
	- [自動化](#automation)
	- [コマンドラインインターフェース（CLI）／端末／シェル](#command-line-interface-cli--terminal--shell)
	- [データベースクライアント](#database-clients)
	- [Discord](#discord)
	- [イベント処理](#eventing)
	- [ファイル処理](#file-handling)
	- [ゲーム開発](#game-development)
	- [グラフィックス](#graphics-1)
	- [相互運用](#interoperability)
	- [IRC](#irc)
	- [ネットワーク](#networking)
	- [オペレーティングシステム](#operating-system)
	- [科学技術計算](#scientific-computing)
	- [シリアル通信](#serial-communications)
	- [電気通信](#telecommunications)
	- [Telegram](#telegram)
	- [テキスト処理](#text-processing)
	- [UIツールキット](#user-interface-toolkits)
	- [ユーティリティ](#utility)
	- [Web](#web-1)
- [その他](#other)
	- [記事](#articles)
	- [書籍](#books)
	- [コミュニティ](#communities)
	- [エディタープラグイン](#editor-plugins)
	- [フォーラム](#forums)
	- [GitHub Actions](#github-actions)
	- [GitHubテンプレート](#github-templates)
	- [V対応IDE](#ides-with-v)
	- [V対応オンラインIDE](#online-ides-with-v)
	- [OSとOS開発例](#operating-systems--os-development-examples)
	- [パターン](#patterns)
	- [プログラミングコンテスト](#programming-contests)
	- [シンタックスハイライト](#syntax-highlighting)
	- [チュートリアル](#tutorials)
	- [動画](#videos)
	- [コントリビューター](#contributors)

## アプリケーション <a id="applications"></a>

### ビルドシステム <a id="build-systems"></a>

- [clockwork](https://github.com/emmathemartian/clockwork) - Vで書かれた言語に依存しないビルドツール
- [vab](https://github.com/vlang/vab) - Android用アプリケーションのビルドとパッケージ化に使われる公式Vツール
- [vab-sdl](https://github.com/larpon/vab-sdl) - `vab` 用にスタンドアローンおよび追加コマンドを提供し、SDL2およびSDL3ベースのアプリケーションを構築・パッケージ化するもの。`vlang/sdl` をインポートするもの。

### コマンドライン <a id="command-line"></a>

- [amdim](https://github.com/tailsmails/amdim) - 画面の明るさを0%未満に設定できる
- [anyside](https://github.com/tailsmails/anyside) - トランスポートに依存しない暗号通信トンネルサンドボックスおよびプロトコルゲートウェイ
- [crepl](https://github.com/l1mey112/crepl) - 入力しながら即座にCコードをコンパイル・実行できる
- [dnshammer](https://github.com/tailsmails/dnshammer) - DNSキャッシュのタイミング差にデータを暗号化する暗号通信チャネル
- [envelop](https://github.com/tailsmails/envelop) - 実際のウェブトラフィックを隠すためにバックグラウンドHTTP HEADリクエストを生成する
- [fastgit](https://github.com/tailsmails/fastgit) - Vで書かれたコマンドラインツール。GitHubリポジトリのアップロード、同期、変更を自動化・簡易化する。
- [fdup](https://github.com/gechandesu/fdup) - 重複ファイルの検出と削除
- [gatevay](https://github.com/tailsmails/gatevay) - 軽量かつマルチゲートウェイのSOCKS5プロキシツール
- [github-releases](https://github.com/Dracks/repo-download-asset) - GitHubリリース（またはワークフロー内のアセット）に公開されたアプリケーションを追跡し、ダウンロードするCLIツール
- [HN-top](https://github.com/BafS/hn-top) - ハッカー・ニュースの最新ニュースをリストアップするシンプルなコマンド
- [httest](https://github.com/gechandesu/httest) - CGI対応のHTTPテストサーバー。バックエンドのモック、リクエストの確認、遅延や失敗のシミュレーションに使用。
- [klonol](https://github.com/hungrybluedev/klonol) - GitHubおよびGiteaに属するあなたのすべてのGitリポジトリを「クローンすべて」するためのCLIツール。
- [lagger](https://github.com/tailsmails/lagger) - アプリケーション層で現実世界のネットワーク劣化をシミュレーションする動的ネットワーク遅延およびパケット損失シミュレーションプロキシ
- [lsv](https://github.com/mike-ward/lsv) - `ls` のファイルリストを、exa、eza、lsd、pls、natls、ls-goなどに似た精神で提供するもの。
- [minimax-v](https://github.com/whiter001/minimax-v) - V言語で実装されたローカルAIエージェントランタイム
- [mushroomtek](https://github.com/tailsmails/mushroomtek) - グリッドの心配はいらない、あなたはただの半径（アンチ-IMSIキャッチャー／アンチ-トリアングレーション…）。
- [musicc](https://github.com/tailsmails/musicc) - 軽量かつ高性能なコマンドライン音楽コンパイラ
- [netprint](https://github.com/tailsmails/netprint) - 環境変化やトラフィックの遮断を検知する低レベルネットワークテレメトリおよび異常検知ツール
- [newfolder](https://github.com/tailsmails/newfolder) - 軽量かつ高性能なコマンドラインストーマグラフィ、ファイルの暗号化、安全なメタデータ破壊ワークステーション。Vで書かれた。
- [oscall](https://github.com/tailsmails/oscall) - Vで書かれた、ネイティブな低レベルのCLIユーティリティで、任意のC/C++関数の検証、読み込み、動的に実行を行う
- [pfjson](https://github.com/fleximus/pfjson) - OpenBSD Packet Filter設定ファイル（`pf.conf`）をJSONに変換し、逆に変換するためのCLIツール。
- [PhoneSnatchProof](https://github.com/tailsmails/PhoneSnatchProof) - アプリケーションデータを暗号化し、RAM上に保持（バックアップあり）するファイルシステム
- [pixviper](https://github.com/tailsmails/pixviper) - Vで書かれた並列テンプレートマッチングおよびデレデクション調査ツール
- [portctl](https://github.com/apoprotsky/portctl) - Portainer APIを使用してDocker Swarmリソースを管理するCLIツール
- [runner](https://github.com/Naheel-Azawy/runner) - 複数のプログラミング言語で書かれたコードの実行・コンパイルを自動化するツール
- [salty](https://github.com/tailsmails/salty) - Vで書かれた軽量なコマンドラインツールで、安全なデータ暗号化、深層圧縮、ステガノグラフィーのようなフォーマットの暗号化を行う
- [sockslender](https://github.com/tailsmails/sockslender) - Vで書かれた軽量かつ高速なSOCKS5プロキシフェイルオーバーツール
- [stripshot](https://github.com/tailsmails/stripshot) - スクリーンショットからデバイス／OSのフィンガープリントを削除
- [symlinker](https://github.com/serkonda7/symlinker) - Linux用のシンボリックリンクを管理する小さなツール
- [timingless](https://github.com/tailsmails/timingless) - アプリケーションとTorの間にあるSOCKS5プロキシで、一定の帯域幅を強制し、トラフィックのタイミング解析を防ぐ
- [v-terminal-apps](https://github.com/cogrow4/V-Terminal-Apps) - Vで書かれた高品質なターミナルアプリケーションのコレクション。ジョブプランナー、計算機、ノート、ファイルブラウザ、クイズゲーム、予算トラッカー、P2Pチャット（WIP）、ポモドーロタイマーを含む
- [v_llama_cpp](https://github.com/sakana-ctf/v_llama_cpp) - Llama.cpp向けの軽量Vラッパーで、効率的なLLM実行を可能にする
- [vast](https://github.com/lydiandy/vast) - vlang向けのシンプルなツール、vソースファイルをAST JSONファイルに変換
- [vcli](https://github.com/changhz/vcli) - [guideline](https://blog.vlang.io/the-complete-beginners-guide-to-cli-apps-in-v/) に基づいてフォルダ構造を生成するCLIツール。
- [verve](https://github.com/MohammadMD1383/verve) - シンプルで高速な静的ファイルサーバー
- [vfc](https://github.com/Ict00/vfc) - シンプルなTUIファイルマネージャー、Vで作成
- [vfetch](https://github.com/carlosqsilva/vfetch) - macOSのシステム情報取得ツール（Vで書かれた）
- [vgoogle](https://github.com/changhz/vgoogle) - ターミナル上でGoogle検索を行う
- [vin](https://github.com/DeoDorqnt387/vin) - V向けの基本的なコマンドラインインターフェース
- [vin32](https://github.com/tailsmails/vin32) - シンプルなWindows CヘッダーファイルからV言語のバインディングを生成する、基本的なヒューリスティックベースのCLIツール
- [vinit](https://github.com/pranavbaburaj/vinit) - vプロジェクトを生成するツール
- [vLogQL](https://github.com/lmangani/vLogQL) - ログクエリAPIを問い合わせるための小さなコマンドラインツール
- [vlsh](https://github.com/vlshcc/vlsh) - Vで書かれた*nixシェル（パイプ、プラグイン、マルチモードなど）
- [vqrcode](https://github.com/carlosqsilva/vqrcode) - QRコードを作成・編集するCLIツール
- [vsnap](https://github.com/skandhas/vsnap) - リスクのある編集前にファイルを保存・復元するための小さなローカルスナップショットツール。Gitより軽量で、明示的なパスに基づいている。
- [vspect](https://github.com/zakuro9715/vspect) - vlangソースファイルを確認するツール。（アーカイブ済）
- [vsqlite](https://github.com/quaesitor-scientiam/vsqlite) - 純粋なVで書かれたSQLite CLIおよびモジュールのリプレースツール
- [vtrace](https://github.com/tailsmails/vtrace) - Vプログラミング言語向けの自動実行トレーサーおよびステップバイステップソースコードインストルメンター
- [vzcc](https://github.com/malisipi/vzcc) - Zig CCをベースにしたV向けのCLIクロスコンパイラツール
- [waterjail](https://github.com/tailsmails/waterjail) - 軽量かつ精密なSeccomp-BPF動的セキュリティサンドボックスおよび分析ツール（Vで書かれた）
- [zilch](https://github.com/mike-ward/zilch) - インストーラの面白いかつ楽しいシミュレーション

### エディター <a id="editors"></a>

- [lilly](https://github.com/tauraamui/lilly) - TUIエディタおよびVIM／Neovimの代替ツール
- [polygon-editor](https://github.com/ArtemkaKun/polygon-editor) - スプライト検索を用いて2D多角形を作成・編集するツール（Vで作成）
- [text_editor](https://github.com/vlang/v/blob/master/examples/term.ui/text_editor.v) - 公式Vの例から作成された小さなテキストエディタ
- [ved](https://github.com/vlang/ved) - 1MBのテキストエディタ（Vで書かれており、ハードウェアアクセラレーションによるテキストレンダリングを採用）。コンパイル時間は1秒未満。
- [vee](https://github.com/Larpon/vee) - Vエディタエンジン。Vモジュールでテキストエディタの本質を提供。[TUI editor example](https://github.com/Larpon/vee/blob/master/examples/tuieditor/) が含まれる。
- [volt](https://github.com/Volt-Editor-Team/volt) - 完全な機能を備えたテキ敦エディタ（Vlangで完全に構築）。
- [vPDF](https://github.com/vlang/pdf) - Vプログラミング言語を用いてPDFファイル作成を簡易化するモジュール
- [vro](https://github.com/undivisible/vro) - <0.5MBのマイクロ風の基本テキストエディタ。MicroのYAMLハイライトに適合。

### ゲーム <a id="games"></a>

- [Boundstone](https://github.com/organization/boundstone) - 高パフォーマンス／高速コンパイル／軽量のMinecraft：ベッドロックエディションサーバー
- [Dino](https://github.com/egevtech/dino) - Vで書かれたシンプルなコンソールアーケードゲーム（ディノを操作し、カクテスや鳥を避けます）
- [flappylearning-v](https://github.com/vlang/v/tree/master/examples/flappylearning) - vで書かれたシンプルなフラッピー学習デモ
- [Kurarin](https://github.com/FireRedz/kurarin) - Vで作成されたosu! ビートマップビジュアライザ。[Example video](https://p153.p0.n0.cdn.getcloudapp.com/items/6quvQjb5/ce3ea737-eb29-4b8c-a5f3-65a804a2f56f.mp4) で作成。
- [minesweeper](https://github.com/ali-furkan/minesweeper-v) - vlangで書かれたシンプルなマインスイーパーゲーム
- [Puzzle Vibes](https://github.com/Larpon/puzzle_vibes) - Vで作成された、jigsawのようなパズルゲーム。`shy` を使用。
- [vchess](https://github.com/hedgeg0d/vchess) - Vプログラミング言語で書かれたチェスゲーム
- [v-pong](https://github.com/thebigsmileXD/v-pong) - Vの力によって再び生き返ったクラシックなパドルゲーム

### グラフィックス <a id="graphics"></a>

- [mpv-v](https://github.com/xjunko/mpv-v) - 世界で最もシンプルなビデオプレイヤー
- [vpaint](https://github.com/pisaiah/vpaint) - Vで書かれたMS-Paintの代替ツール
- [vRayTracer](https://github.com/ali-raheem/vraytracer) - Vで書かれたシンプルなレイトレーサー

### インタープリター／コンパイラー <a id="interpreterscompilers"></a>

- [Aixt](https://github.com/fermarsan/aixt) - Vベースの言語を用いたマイクロコントローラ向けプログラミングフレームワーク
- [cotowali](https://github.com/cotowali/cotowali) - POSIX shに変換される静的型のスクリプティング言語
- [monkey_v](https://github.com/Delta456/monkey_v) - [Thorsten Ball's Monkey Language](https://interpreterbook.com/) のVでの実装。
- [papyrus-compiler](https://github.com/russo-2025/papyrus-compiler) - ベテランスのPapyrusスクリプティング言語（スカイリムSE/AE）向けオープンソースコンパイラ
- [stas](https://github.com/l1mey112/stas/tree/0.1.0-v-compiler) - スタックベースのコンパイル言語。ブートストラップコンパイラはVで書かれた
- [v](https://github.com/vlang/v) - V自身の言語。シンプルで高速かつ安全なコンパイル言語で、維持可能なソフトウェアを開発できる
- [vas](https://github.com/v420v/vas) - Vで書かれたシンプルなx86-6及アセンブラー
- [vbf](https://github.com/vpervenditti/vbf) - brainfuckのインタープリターやコンパイラ
- [vcc](https://github.com/lemoncmd/vcc) - Vで書かれたCコンパイラ
- [Vork](https://github.com/Itay2805/Vork) - Pythonで書かれたVの代替コンパイラ／インタープリターサイド

### OS／カーネル <a id="operating-systemskernels"></a>

- [Vinix](https://github.com/vlang/vinix) - Vで書かれた小さなシンプルなOS。bashを実行可能
- [V-Unikernel](https://github.com/vlang/unikernel) - ユニケルンは、依存するオペレーティングシステムコードと静的にリンクされたコンピュータプログラムである

### パッケージマネージャー <a id="package-managers"></a>

- [vpm](https://github.com/vlang/vpm) - V言語用のパッケージ管理ツール。Vで書かれたもの。

### プロジェクト管理 <a id="project-management"></a>

- [Lenra template](https://github.com/lenra-io/template-v) - Lenraプラットフォーム向けVアプリを書くためのLenraテンプレート
- [vset](https://github.com/mulh8377/vset) - Vプロジェクト向けのプロジェクト設定および構成ツール

### シリアライズ <a id="serialization"></a>

- [ini-v](https://github.com/ldedev/ini-v) - ini/cfgファイルを操作するためのシンプルかつ実用的なモジュール
- [maple](https://github.com/emmathemartian/maple) - Vで書かれた非常にシンプルなキー値設定形式
- [v-toxml](https://github.com/radare/v-toxml) - V用のXMLシリアライズライブラリ
- [vgura](https://github.com/gura-conf/vgura) - V用の公式Guraパーサー
- [vlang-yaml](https://github.com/jdonnerstag/vlang-yaml) - V本体によるYAML読み込みライブラリ（YAMLからJSONへの変換を含む）
- [vproto](https://github.com/emily33901/vproto) - VにおけるProtobufコンパイラとランタイム

### ユーティリティ <a id="utilities"></a>

- [boj-server](https://github.com/hyperpolymath/boj-server) - Vで構築された統合開発ツールサーバー。ネットワークアダプタ層を用いて、REST（ポート7700）、gRPC（ポート7701）、GraphQL（ポート7702）を1つのVコードベースから公開。Zig FFIで18の機能カートリッジが読み込まれ、Idris2で検証されたインターフェースを備える。
- [emoji-mart-desktop](https://github.com/ttytm/emoji-mart-desktop) - VとwebviewおよびSvelteKitで作成されたエモジーピッカー
- [qptorrent](https://github.com/qptorrent/qptorrent) - V＋vlang/guiで書かれた極めてシンプルなGUI/CLIビットTorrentクライアント
- [raur](https://github.com/Matejsdevelopment/raur) - Vlangで書かれたシンプルなArchユーザーリポジトリ（AUR）ヘルパー
- [unix-emulators-win](https://github.com/Ddiidev/unix-emulators-win) - Windows用に16のUNIXユーティリティをVで再実装したコレクション
- [v-nodejs-addon](https://github.com/fanlia/v-nodejs-addon) - VでNode.jsアドオンを作成する方法のデモ

### Web <a id="web"></a>

- [Gitly](https://github.com/vlang/gitly) - GitHub/GitLabに代わる軽量かつ高速なSCM（ソース管理）ツール（Vで書かれた）
- [gitval](https://github.com/davlgd/gitval) - Gitリポジトリを対象とした静的サイトジェネレーター（Vで書かれた）
- [Heroku Buildpack for V](https://github.com/zztkm/heroku-buildpack-v) - Heroku上でVアプリをデプロイ
- [highlighter](https://codeberg.org/tamer/highlighter) - ビルド時またはCLIツールを通じてHTMLファイルにシンタックスハイライトを挿入
- [Mantis](https://github.com/khalyomede/mantis) - Vで書かれたウェブフレームワーク
- [Mustela](https://github.com/filipos800/mustela) - 極めて高速な静的サイトジェネレーター（SSG）（スピード＞9,000ページ/秒、データの完全な自社所有を実現）
- [rr-dl](https://github.com/dy-tea/rr-dl) - Royal-Road小説ダウンローダー
- [Tiniest Veb Server](https://github.com/davlgd/tVeb) - 1MB未満の静的ホスティングWebサーバー。Vで書かれており、`veb` をベースにしている。🍃
- [v-admin-skeleton](https://github.com/xiusin/v-system-skeleton) - Vで書かれたバックエンドの骨格
- [v-vite starter](https://github.com/v-vite/starter) - Vebアプリケーション向けのスタートキット（Vite.jsで事前設定済み）
- [vblog](https://github.com/scurty-labs/vblog) - シンプルで、高速かつ反応が速いブログシステム。
- [Vebview.JS](https://github.com/malisipi/Vebview.JS) - Electron/Neutralino.JSをVで実装した代替品。
- [Verne](https://github.com/davlgd/Verne) - 有名なフランス作家にちなんで命名された他の静的サイトジェネレーター。
- [vico_bot](https://github.com/KArjmand/vico_bot) - 軽量で、自前でホストできるAIチャットボット。記憶が持続し、ツール呼び出しも可能。
- [Vieter](https://github.com/ChewingBever/vieter) - Arch Linuxのリポジトリサーバーおよびパッケージビルドシステム。Vで書かれたもの。
- [Vlang Benchmarks Visualization](https://github.com/ArtemkaKun/VlangBenchmarksVisualization) - *[Is V still fast?](https://fast.vlang.io/)* 用の華やかな統計とグラフ。
- [vorum](https://github.com/vlang/vorum) - Vで書かれたオープンソースのブログ／フォーラムソフトウェア。
- [vss](https://github.com/vssio/vss) - 使いやすい静的サイトジェネレーター。
- [VTik](https://github.com/Sharqo78/VTik) - TikTokおよびTwitterの動画をダウンロードするアプリ（CLI／Telegramボット）。

## ライブラリ <a id="libraries"></a>

### 音声 <a id="audio"></a>

- [miniaudio](https://github.com/larpon/miniaudio) - 優れたminiaudio C音声ライブラリへのバインディング。
- [vave](https://github.com/thecodrr/vave) - VでWAVファイルを読み書きできる非常にシンプルなライブラリ。🌊
- [vspeech](https://github.com/thecodrr/vspeech) - MozillaのDeepSpeech TensorFlowベースの音声認識ライブラリへの完全なVバインディング。📢📜

### 自動化 <a id="automation"></a>

- [v-webdriver](https://github.com/quaesitor-scientiam/v-webdriver) - W3CのWebDriverプロトコルをV言語で実装したブラウザ自動化ライブラリ。
- [vrobot](https://github.com/eioo/vrobot) - V用のデスクトップ自動化。Windowsのみ対応。

### コマンドラインインターフェース（CLI）／端末／シェル <a id="command-line-interface-cli--terminal--shell"></a>

- [bartender](https://github.com/tobealive/bartender) - Vのターミナルアプリケーション向けにカスタマイズ可能な進行状況表示。
- [boxx](https://github.com/thecodrr/boxx) - 高度にカスタマイズ可能なターミナルボックスを作成できる！📦
- [lol](https://github.com/0xLeif/lol) - lolcat（テキスト／キャラクターのリズム色付け）のV版。
- [progressbar](https://github.com/Waqar144/progressbar) - CLIでプログレスバーを作成するための使いやすいVライブラリ。
- [spinners](https://github.com/rhygg/spinners) - ターミナルにスピンナーを作成！
- [termtable](https://github.com/serkonda7/termtable) - Vターミナルテーブル：ターミナル上でテーブルを表示するためのシンプルかつ高度にカスタマイズ可能なライブラリ。
- [vargs](https://github.com/nedpals/vargs) - argvのような配列から引数をパースするためのVライブラリ。（アーカイブ済み）
- [vesseract](https://github.com/barrack-obama/vesseract) - テッサレント-OCR（光学文字認識）用のVのラッパー

### データベースクライアント <a id="database-clients"></a>

- [firebird](https://github.com/einar-hjortdal/firebird) - フィアブールSQL用のクライアント
- [mongodb](https://github.com/vlang/mongo) - V用のMongoDBドライバー
- [redict](https://github.com/einar-hjortdal/redict) - リデックスのLGPL-3.0のみ対応のフォーク（リデックス<=7.2.4と互換）用のクライアント
- [redis](https://github.com/patrickpissurno/vredis) - Vで書かれたV用のリデックスクライアント
- [vduckdb](https://github.com/rodabt/vduckdb) - V用のダックDBクライアントラッパー
- [vmemcached](https://github.com/blacktrub/vmemcached) - Vで書かれたメモキャッシュクライアント
- [vredis](https://github.com/xiusin/vredis) - シンプルで使いやすく、充実したリデックスクライアント
- [vsql](https://github.com/lydiandy/vsql) - V用のSQLクエリビルダー

### Discord <a id="discord"></a>

- [discord.v](https://github.com/Terisback/discord.v) - 使いやすいディスコードボットライブラリ
- [discordwebhook](https://github.com/ysdragon/discordwebhook) - ウェブホークを介してディスコードメッセージを送るためのシンプルなインターフェース
- [kitten](https://github.com/geniushq/kitten) - ディスコードAPI用のシンプルなライブラリ（ボットの作成用）
- [viscord](https://github.com/vlang/viscord) - ディスコードゲートウェイに接続するための、かなり基本的なライブラリ
- [vord](https://github.com/9xN/vord) - ユーザーアカウントエンドポイントとゲートウェイとのやり取りに使うライブラリ（セルフボット、カスタムクライアントなど）

### イベント処理 <a id="eventing"></a>

- [eventbus](https://github.com/vlang/v/tree/master/vlib/eventbus) - V用のシンプルなイベントバスシステム
- [rxv](https://github.com/ulises-jeremias/rxv) - V言語用の反応型拡張。非同期イベントストリームを、生成、フィルタ、変換、集計、時系列、結合などのオペレーターで構成可能

### ファイル処理 <a id="file-handling"></a>

- [v-mime](https://github.com/nedpals/v-mime) - V用のMIME検出ライブラリ。
- [vmon](https://github.com/Larpon/vmon) - ディレクトリ内のファイル変更を非同期で監視。このモジュールは本質的に`septag/dmon` のVラッパーであり、Windows、macOS、Linuxで動作する。

### ゲーム開発 <a id="game-development"></a>

- [chipmunk2d](https://github.com/larpon/chipmunk2d) - チップマウンク2D物理ライブラリのV用ラッパー
- [engine](https://github.com/LouisSchmieder/engine) - WIP Vulkan（Vで書かれた）
- [raylib.v](https://github.com/irishgreencitrus/raylib.v) - [raylib](https://www.raylib.com) への更新されたVバインディング。完全なクロスプラットフォーム対応の計画がある。
- [sdl2test](https://github.com/nsauzede/sdl2test) - SDL2とVを使った、包括的なテストと例のセット
- [shy](https://github.com/Larpon/shy) - Vで創造的に働くために役立つ基盤
- [V_ecs](https://github.com/mohamedLT/V_ecs) - Vで作成されたECSライブラリ。Bevy ECSをインスピレーションとして作成。
- [vraylib](https://github.com/mohamedLT/vraylib) - 素晴らしいraylibライブラリへのVのラッパー。
- [vraylib](https://github.com/MajorHard/vraylib) - Cゲーム開発フレームワークであるraylibへのVのラッパー（バインディング）。
- [wren](https://github.com/larpon/wren) - 非常に優れたWrenスクリプティング言語へのVのラッパー（バインディング）。

### グラフィックス <a id="graphics-1"></a>

- [sdl](https://github.com/vlang/sdl) - Vにおける公式SDL2およびSDL3のバインディング。
- [sgldraw](https://github.com/larpon/sgldraw) - `sokol.sgl` をベースにした、実時間ベクターレンダリングを実現するVモジュール（実験的）。
- [svgg](https://github.com/Avocadocs/svgg) - SVGファイルを読み込み、再構成して`gg.Image` オブジェクトに変換するVモジュール。
- [V Earcut](https://github.com/Larpon/earcut) - ホール、歪んだ多角形、退化、自己交差を扱うための高速（リアルタイム）多角形三角化ライブラリ。[mapbox/Earcut](https://github.com/mapbox/earcut) をベースにしている。
- [vglyph](https://github.com/vlang/vglyph) - Pango、FreeType、Sokolをベースにした、Vプログラミング言語用の高性能テキストレンダリングエンジン。
- [viup](https://github.com/kjlaw89/viup) - Cベースの跨プラットフォームUIライブラリIUPへのVのラッパー。
- [vsdl](https://github.com/kjlaw89/vsdl) - CベースのSDLライブラリへのVのラッパー。
- [V_sokol_gp](https://github.com/mohamedLT/V_sokol_gp) - sokol_gpライブラリへのVのラッパー。2Dグラフィックスを簡単に高速に作成できる。
- [vbmp](https://github.com/dy-tea/vbmp) - ビットマップファイルの読み書き。
- [voronoi](https://github.com/larpon/voronoi) - [JCash/voronoi](https://github.com/JCash/voronoi) のVラッパー。
- [vqoi](https://github.com/Le0Developer/vqoi) - V: QOI - 「Quite OK Image」と呼ばれる、高速かつ損失なし画像圧縮フォーマット。
- [vsdl2](https://github.com/nsauzede/vsdl2) - libSDL2のラッパー。
- [vsl.vcl](https://github.com/vlang/vsl/tree/main/vcl#readme) - VCLはOpenCLを用いたプログラムの高レベルな書き方。VでOpenCLのバインディングを提供。GPU計算を簡単にするために、いくつかの抽象化（スガ）を提供。Vの並列処理とチャンネルを活用。
- [vsl.plot](https://github.com/vlang/vsl/tree/main/plot#readme) - VSL用のプロットモジュール。85以上の例を提供。線グラフ、散点図、3D表面、棒グラフ、箱ひげ図、ヒストグラム、ヒートマップなどを作成可能。

### 相互運用 <a id="interoperability"></a>

- [jni](https://github.com/larpon/jni) - CのJava Native Interface（デスクトップ＋Android）へのVのラッパー。
- [vjsx](https://github.com/guweigang/vjsx) - quickjs JavaScriptエンジンへのVのバインディング。V内でJavaScriptを実行可能。
- [vphp](https://github.com/guweigang/vphp) - VlangでPHP拡張をネイティブに構築するためのVlangライブラリ。

### IRC <a id="irc"></a>

- [vitric](https://github.com/m-242/vitric) - 透過的なIRCライブラリ。

### ネットワーク <a id="networking"></a>

- [netaddr](https://github.com/gechandesu/netaddr) - IPv4、IPv及MAC（EUI-48、EUI-64）アドレス操作ライブラリ。
- [netio](https://github.com/gechandesu/netio) - V向けの低レベルネットワークライブラリ。ソケットの制御をより細かく可能にする。
- [netr](https://github.com/tailsmails/netr) - Vで書かれたモジュール化された、ゼロ依存の原始ソケットおよびネットワークパケット作成ライブラリ。
- [vibe](https://github.com/tobealive/vibe) - libcurlをラップするライブラリを要求。高速かつ信頼性の高いリクエストを可能にし、より高いレベルのAPIを提供。
- [vmq](https://github.com/jordan-bonecutter/vmq) - [ZMQ](https://zeromq.org/)（ゼロMQ、ØMQ、0MQ：高性能非同期メッセージングライブラリ）向けのVラッパー。

### オペレーティングシステム <a id="operating-system"></a>

- [clipboard](https://github.com/vlang/v/tree/master/vlib/clipboard) - OSのクリップボードとの相互作用に用いるVモジュール。完全にプラットフォームを越えて動作。
- [mmap](https://github.com/jdonnerstag/vlang-mmap) - LinuxおよびWindowsでのメモリマッピングをV言語で本質的にサポート。
- [rgc](https://github.com/tailsmails/rgc) - Vで使用する軽量かつ並列なリソースガベージコレクタ。
- [vcomp](https://github.com/tailsmails/vcomp) - vlang用の軽量なLinux Seccomp（セキュアコンピューティングモード）BPFフィルタラッパー。
- [vlipboard](https://github.com/asvvvad/vlipboard) - WaylandおよびTermux対応のクリップボードを簡単に使うラッパー。
- [winreg](https://github.com/ldedev/WindowsRegistry) - MS Windows レジストリAPI。（WIP）

### 科学技術計算 <a id="scientific-computing"></a>

- [vnm](https://github.com/tailsmails/vnm) - V言語で書かれたミニマリズムのニューラルネットワークライブラリ。
- [vplot](https://github.com/erdetn/vplot) - V 用の GNU Plot のラッパー (`gnuplot_i`)。
- [vsl](https://github.com/vlang/vsl) - さまざまなモジュールを備えた科学ライブラリ。ほとんどのモジュールは純V定義を提供しているが、Cライブラリなどをラップするモジュールを含め、高性能計算を可能にするほか、OpenBLAS、LAPACKE、MPI、OpenCLなど他のライブラリについても意見を反映したラッパーを提供。
- [vsl.fft](https://github.com/vlang/vsl/tree/main/fft#readme) - VSL用の高速フーリエ変換モジュール。実数および複素数のFFTを含み、複数のバックエンドオプションを提供。
- [vsl.ml](https://github.com/vlang/vsl/tree/main/ml#readme) - VSL用の機械学習モジュール。K-平均、KNN、線形／ロジスティック回帰、SVM、決定木、ランダムフォレストなどがある。
- [vsl.quaternion](https://github.com/vlang/vsl/tree/main/quaternion#readme) - VSL用のクォータニオン数学モジュール。3D回転、球面線形補間（slerp）、ジュリア分画生成をサポート。
- [vstats](https://github.com/rodabt/vstats) - Vで完全に書き直された、依存関係のない線形代数、統計学、機械学習ライブラリ。
- [vtl](https://github.com/vlang/vtl) - V Tensor Libraryは、n次元データ構造をサポートする数値計算ライブラリで、VSLによってバックエンドを提供。
- [vtl.autograd](https://github.com/vlang/vtl/tree/main/autograd#readme) - VTL用の自動微分モジュール。機械学習および最適化における勾配計算を可能にする。
- [vtl.datasets](https://github.com/vlang/vtl/tree/main/datasets#readme) - VTL用のデータセットモジュール。機械学習ベンチマークおよびチュートリアル用の組み込みデータセットを提供。
- [vtl.nn](https://github.com/vlang/vtl/tree/main/nn#readme) - VTL用のニューラルネットワークモ及。層、活性化関数、最適化手法を使って深層学習モデルを構築および訓練できる。
- [NeuralNetworks-V-Module](https://github.com/Eliyaan/NeuralNetworks-V-Module) - これはニューラルネットワークを作成するVモジュール。

### シリアル通信 <a id="serial-communications"></a>

- [vi2c](https://github.com/erdetn/vi2c) - Linux用のI2Cシリアル通信用の小さな（ラッパー）ライブラリ（Vで書かれた）。
- [vserialport](https://github.com/erdetn/vserialport) - V 用の [libserialport](https://sigrok.org/wiki/Libserialport) のラッパー。
- [vserialx](https://github.com/erdetn/vserialx) - Linux用の小さな（ラッパー）シリアル通信ライブラリ（Vで書かれた）。

### 電気通信 <a id="telecommunications"></a>

- [vagi](https://github.com/Ouri028/vagi) - Asterisk FastAGI ライブラリ（V で書かれた）。

### Telegram <a id="telegram"></a>

- [velegram](https://github.com/tailsmails/velegram) - TDLib（Telegram Database Library）用のV言語のラッパー
- [vgram](https://github.com/dariotarantini/vgram) - Telegramボット用のライブラリ

### テキスト処理 <a id="text-processing"></a>


- [ascii_robot](https://github.com/Delta456/ascii_robot) - Vで書かれたASCIIロボット生成ツール
- [chalk](https://github.com/etienne-napoleone/chalk) - ターミナル内の文字列を色付けする
- [cjson](https://github.com/lydiandy/cjson) - cJSONをvlang用にラップ
- [crayon](https://github.com/thecodrr/crayon) - ターミナル出力にピカソ風に描く 🖍️🎨
- [iconv](https://github.com/fanlia/iconv) - iconvをvlang用にラップ
- [pcre2](https://github.com/srackham/pcre2) - PCRE正規表現を処理するためのライブラリ
- [read_xlsx_v](https://github.com/fanlia/read_xlsx_v) - vlangでxlsxを読み込む
- [Rosie-RPL](https://github.com/jdonnerstag/vlang-rosie) - ロシーパターン言語（RPL）の実装
- [slugify](https://github.com/einar-hjortdal/slugify) - Unicode文字列をURLに適した人間が読めるASCIIスラグに変換
- [text-processing](https://github.com/ArtemkaKun/text-processing) - Vのテキスト処理ライブラリ。テキストデータを操作するための一般的なツールを含む
- [v-regex](https://github.com/spytheman/v-regex) - V用のシンプルな正規表現ライブラリ
- [vsoup](https://github.com/marcalc/vsoup) - Lexborを用いた、JSoup風の高速HTML5パーサーとDOM操作ライブラリ
- [vxml](https://github.com/i582/vxml) - XMLをDOMにパースするための純Vライブラ特
- [whisker](https://github.com/hungrybluedev/whisker) - Mustacheにインスパイアされた、高速かつ堅牢なテンプレートエンジン
- [xlsx](https://github.com/hungrybluedev/xlsx) - Microsoft Excelファイルの読み書き用のVライブラリ
- [lexical_uuid](https://github.com/einar-hjortdal/lexical_uuid) - 辞書順に並べられるユニバーサルに一意な識別子

### UIツールキット <a id="user-interface-toolkits"></a>

- [bobatea](https://github.com/tauraamui/bobatea) - Bubble TeaにインスパイアされたTUIフレームワーク
- [iUI](https://github.com/isaiahpatton/ui) - JavaのSwingの構文にインスパイアされた、イサヤのマルチプラットフォームGUIライブラリ
- [mui](https://github.com/malisipi/mui) - Windows、Linux、AndroidおよびWeb向けのクロスプラットフォームUIライブラリ
- [V UI](https://github.com/vlang/ui) - Windows、macOS、Linux、Android、iOSおよびWeb向けの統合クロスプラットフォームUIツールキット
- [vgtk3](https://github.com/vgtk/vgtk3) - VにおいてGTK3のラッパー
- [vig](https://github.com/nsauzede/vig) - [Dear ImGui](https://github.com/ocornut/imgui) GUI ツールキットへのバインディング。
- [vnk](https://github.com/nsauzede/vnk) - [Nuklear](https://github.com/vurtun/nuklear) GUI ツールキットへのバインディング。
- [V-WebUI](https://github.com/webui-dev/v-webui) - WebUIのラッパー。VのバックエンドとHTML5のフロントエンドを用いて、任意のウェブブラウザをGUIとして使うための軽量ライブラリ
- [webview](https://github.com/ttytm/webview) - webviewのバインディング。現代的なクロスプラットフォームGUIアプリケーションを構築するための小さなライブラリ。Vと現代的なウェブ技術を組み合わせることで、グラフィカルユーザーインターフェースを設計できる。

### ユーティリティ <a id="utility"></a>

- [dialog](https://github.com/ttytm/dialog) - システムダイアログを開くためのクロスプラット窓のユーティリティライブラリ（ファイルを開く、メッセージボックス、カラーピッカーなど）
- [dotenv](https://github.com/einar-hjortdal/dotenv) - 開発用に.envファイルから環境変数を読み込む
- [json2v](https://github.com/ldedev/Json2V) - VlangでJSONを構造体に変換
- [objc](https://github.com/magic003/objc) - Objective-CランタイムへのVのバインディング
- [range](https://github.com/Delta456/range) - Pythonのrange()の機能をVに実装
- [structlog](https://github.com/gechandesu/structlog) - V向けの構造化ログライブラリ
- [V-crypto](https://github.com/bstnbuck/V-crypto) - 追加の暗号アルゴリズムの実装
- [vaker](https://github.com/ChAoSUnItY/vaker) - Vで書かれた軽量なコンパイル時生成データファイカー
- [vanadium](https://github.com/tailsmails/vanadium) - Vプログラミング言語におけるアダレベルのランタイム安全性
- [vdotenv](https://github.com/zztkm/vdotenv) - .envファイルのサポート（環境変数を読み込む）
- [vhs](https://github.com/KevinDaSilvaS/vhs) - Vで実装されたHaskellのプリリュードリスト関数（zip、zipwith、headなど）
- [VInstall](https://github.com/malisipi/VInstall) - クロスプラットフォームインストーラー作成ツール
- [vop](https://github.com/tailsmails/vop) - メッセージ伝達型オブジェクトプロトコル。動的プロパティ管理とクロージャーに基づく状態封じ込みを提供。
- [votp](https://github.com/OdaiGH/votp) - vにおけるTOTPおよびHOTPの実装

### Web <a id="web-1"></a>

- [blobly](https://github.com/einar-hjortdal/blobly) - 中央ファイルサーバー
- [jsonrpcv](https://github.com/Te4nick/jsonrpcv) - 純粋なVで実装されたJSON-RPC 2.0のクライアント・サーバー実装
- [pico.v](https://github.com/S-YOU/pico.v) - picoevとpicohttpparserをベースにしたVによるウェブサーバー
- [sessions](https://github.com/einar-hjortdal/sessions) - ウェブフレームワークに依存しないセッションライブラリ
- [v-jsonrpc](https://github.com/nedpals/v-jsonrpc) - V上で書かれた基本的なJSON-RPC 2.0準拠サーバー
- [v-jwt](https://github.com/deatil/v-jwt) - vlang用のJWT（JSON Web Token）ライブラリ
- [v-sm3](https://github.com/deatil/v-sm3) - vlang用のSM3ハッシュ関数
- [validate](https://github.com/endeveit/v-validate) - Vで文字列を検証するためのシンプルなライブラリ
- [valval](https://github.com/taojy123/valval) - Vで書かれたウェブフレームワーク、vwebによる改善
- [vcurrency](https://github.com/mehtaarn000/vcurrency) - [https://api.exchangeratesapi.io](https://api.exchangeratesapi.io) 用の API ラッパー（V で書かれた）。
- [veb](https://github.com/vlang/v/tree/master/vlib/veb) - Vの標準ウェブフレームワーク
- [vest](https://github.com/alexferl/vest) - VでのRESTクライアント
- [vex](https://github.com/nedpals/vex) - ExpressおよびSinatraにインスパイアされたVによるウェブフレームクーツ
- [vigest](https://github.com/withs/vigest) - ダイジェスト認証用のシンプルなクライアント（Vで書かれた）
- [vite.v](https://github.com/siguici/vite.v) - Veb アプリケーション向けの [Vite.js](https://vite.dev) のシームレス統合。
- [vxbloauth](https://github.com/WolvesFortress/vxbl-oauth) - vweb用の最小限のXbox Live認証ライブラリ
- [west](https://github.com/Dracks/West) - vwebをモジュールと依存関係注入のように動作させるためのラッパー

## その他 <a id="other"></a>

### 記事 <a id="articles"></a>

- [An introduction to V](https://simonknott.de/articles/VLang.html)
- [How To Make A V Compiler Backend](https://l-m.dev/cs/how_to_make_a_v_backend) - Vの新しいコードジェネレータバックエンドを書くためのガイド
- [The V WebAssembly Compiler Backend, Rewritten](https://l-m.dev/cs/the_v_webassembly_compiler_backend_rewrite) - 外部依存なしでVのWebAssemblyバックエンドをリライト

### 書籍 <a id="books"></a>

- [Getting Started with V Programming - Navule Pavan Kumar Rao - Packt 2021 Dec](https://www.amazon.com/Getting-Started-Programming-end-end-ebook/dp/B09FKK3JL7/ref=sr_1_1?keywords=Getting+started+with+V+programming&qid=1639480830&sr=8-1) - V に関する入門書。

### コミュニティ <a id="communities"></a>

- [V Community](https://github.com/v-community)

### エディタープラグイン <a id="editor-plugins"></a>

- [tree-sitter-v](https://github.com/undivisible/tree-sitter-v) - V 言語用の Tree-sitter 文法。現代 API を備えたメンテナンスフォーク、crates.io パッケージ、244 のノードタイプ。

#### Atom <a id="atom"></a>

- [language-v](https://github.com/Cutlery-Drawer/language-v) - Atom 用の V 言語サポート（vscode-vlang のポート）。

#### Emacs <a id="emacs"></a>

- [v-mode](https://github.com/damon-kwok/v-mode) - Emacs 用の V 言語のマジャーモード。
- [vlang-mode.el](https://github.com/Naheel-Azawy/vlang-mode.el) - Emacs 用の V 言語のマジャーモード。

#### Pulsar <a id="pulsar"></a>

- [language-v](https://packages.pulsar-edit.dev/packages/language-v) - Atom 用の V 言語のシンタックスハイライト（vscode-vlang のポート）（atom.io から移行）。

#### Sublime Text 3 <a id="sublime-text-3"></a>

- [sublime-v](https://github.com/onerbs/sublime-v) - Sublime Text 3用のVプログラミング言語向けの完全機能パッケージ
- [vlang-sublime](https://github.com/oversoul/vlang-sublime) - Sublime Text 3におけるVlangプログラミング言語のサポート

#### VS Code <a id="vs-code"></a>

- [vscode-vlang](https://github.com/vlang/vscode-vlang) - Visual Studio Code向けのV言語拡張
- [v-analyzer](https://github.com/vlang/v-analyzer) - Vプログラミング言語向けのIDE機能をVS Codeに導入

#### Vim <a id="vim"></a>

- [v-vim](https://github.com/ollykel/v-vim) - VのシンタックスハイライトをVimでサポート
- [vim-v](https://github.com/cheap-glitch/vim-v) - Vプログラミング言語用の高品質シンタックスハイライト
- [vim-vtools](https://github.com/zakuro9715/vim-vtools) - V用のVimツール、自動フォーマットを含む

#### Zed <a id="zed"></a>
- [zed-v](https://github.com/lv37/zed-v) - Zed での V シンタックスハイライトのサポート。

### フォーラム <a id="forums"></a>

- [r/vlang](https://www.reddit.com/r/vlang)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vlang)

### GitHub Actions <a id="github-actions"></a>

- [action-create-v-docs](https://github.com/marketplace/actions/create-documentation-for-v-modules) - V モジュールのドキュメント作成用の GitHub アクション。
- [setup-v](https://github.com/vlang/setup-v) - GitHub アクション（V をインストール・使用するため）がワークフローに利用可能。[marketplace](https://github.com/marketplace/actions/setup-vlang) で提供。

### GitHubテンプレート <a id="github-templates"></a>

- [v-project-basement](https://github.com/ArtemkaKun/v-project-basement) - すべての V プロジェクトに必要なベース、V プロジェクト用のユニバーサル最小 GitHub CI スクリプトとイシューテンプレートを含む。

### V対応IDE <a id="ides-with-v"></a>

- [Vide](https://github.com/IsaiahPatton/Vide)

### V対応オンラインIDE <a id="online-ides-with-v"></a>

- [V Playground](https://play.vlang.io)
- [V Playground (old)](https://v-wasm.now.sh/)

### OSとOS開発例 <a id="operating-systems--os-development-examples"></a>

- [limine-v-template](https://github.com/plos-clan/limine-v-template) - Limineに準拠したカーネルを構築するためのシンプルなテンプレート
- [Simple Linux kernel module example](https://github.com/spytheman/simple_kernel_module_in_v) - Vを使用した非常にシンプルなLinuxカーネルモジュールの作成とテスト

### パターン <a id="patterns"></a>

- [MVU.v](https://github.com/ArtemkaKun/MVU.v) - V 言語で MVU パターン（The Elm Architecture）を実装。

### プログラミングコンテスト <a id="programming-contests"></a>

- [Advent of Code 2019](https://github.com/mvlootman/aoc2019) - Advent of Code 2019の解決策（Vで）
- [Advent of Code 2022](https://github.com/vlang/adventofcode) - Advent of Code 2022の解決策（Vで）
- [Rosetta Code in V](https://rosettacode.org/wiki/Category:V_(Vlang)) - Rosetta Codeの課題をVで実装
- [SoloLearn Coding Challenges](https://github.com/Serkonda/v-sololearn-coding-challenges) - SoloLearnのコーディングチャレンジをVで実装

### シンタックスハイライト <a id="syntax-highlighting"></a>

- [kate-syntax-highlight-v](https://github.com/Larpon/kate-syntax-highlight-v) - [Kate](https://kate-editor.org/) 用の V シンタックスハイライト。
- [scite-v-support](https://github.com/sunnylcw/scite-v-support) - [SciTE](https://www.scintilla.org/SciTE.html) 用の V シンタックスハイライト。

### チュートリアル <a id="tutorials"></a>

- [Learn V in Y Minutes](https://github.com/v-community/learn_v_in_y_minutes)
- [V by Example](https://github.com/v-community/v_by_example) - V書として[GitBook](https://v-community.gitbook.io/v-by-example/)。
- [V for Node Devs](https://github.com/Thigidu/vlang-for-nodejs-developers) - Node.js開発者向けのVlang
- [V learning notes](https://github.com/lydiandy/vlang_note) - 中国語の個人学習ノート

### 動画 <a id="videos"></a>

- [The V Programming Language](https://www.youtube.com/channel/UCLZIElNyubHOvbfudT7KS1A)
- [V Programming Tutorials](https://www.youtube.com/watch?v=BVCuZ7z7GMY&list=PLEPMhdsq-gNpFr40A-ZnX-Hu9l-Sp5Oc_)

### コントリビューター <a id="contributors"></a>

<a href="https://github.com/ulises-jeremias/awesome-v/contributors">
  <img alt="Contributors" src="https://contrib.rocks/image?repo=ulises-jeremias/awesome-v"/>
</a>

[contributors-img](https://contrib.rocks)で生成されています。
