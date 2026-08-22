---
title: "jetli/awesome-yew"
description: "jetli/awesome-yew の定本スナップショット"
licenseSource: "github-jetli-awesome-yew-readme-md"
---

# Awesome Yew [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="logo.svg" align="right" width="100" title="Awesome Yew">](https://github.com/yewstack/yew)

> Yew に関連する素晴らしいものを厳選したリストです。

[Yew](https://github.com/yewstack/yew) は、WebAssembly を使ったマルチスレッドのフロントエンドアプリを作成するための、Elm と React に着想を得たモダンな Rust フレームワークです。

コントリビューションを歓迎します。最初に[コントリビューションガイドライン](https://github.com/jetli/awesome-yew/blob/33d03a7b3eaf0b8feed3066fbd5c82d4caca06e4/CONTRIBUTING.md)をお読みください。

## 目次

- [公式](#official)
- [プロジェクト](#projects)
- [テンプレート](#templates)
- [クレート](#crates)
  - [コンポーネントライブラリ](#component-libraries)
  - [コンポーネント](#components)
  - [フック](#hooks)
  - [ユーティリティ](#utils)
  - [Wasm](#wasm)
- [ツール](#tooling)
- [記事](#articles)
- [書籍](#books)
- [代替](#alternatives)
- [関連リスト](#related-lists)

## 公式

- [Yew](https://github.com/yewstack/yew) - クライアント Web アプリを構築する Rust / WebAssembly フレームワーク。
- [ライブデモ](https://yew-todomvc.netlify.com) - todomvc のデモ。
- [サンプル](https://github.com/yewstack/yew/tree/master/examples) - 公式リポジトリに含まれる小規模なサンプル。
- [API ドキュメント](https://docs.rs/yew) - docs.rs 上のドキュメント。
- [Web サイト](https://yew.rs/) - 公式 Web サイト。
- [チャットルーム](https://discord.gg/VQck8X4) - 活発で、質問するのに適した場所です。
- [Reddit](https://www.reddit.com/r/yew_web/) - 専用の Subreddit。
- [資金面での貢献](https://opencollective.com/yew) - 資金面のコントリビューターになり、コミュニティの維持を支援できます。
- [Playground](https://play.yew.rs) - Yew のオンライン Playground。

## プロジェクト

- [Realworld example](https://github.com/jetli/rust-yew-realworld-example-app) - Rust + Yew + WebAssembly で構築された模範的な実世界アプリ。Yew の最新の `function components` と `hooks` を利用しています。[Tauri](https://github.com/tauri-apps/tauri) によるデスクトップアプリにも対応します。
- [webapp.rs](https://github.com/saschagrunert/webapp.rs) - 完全に Rust で書かれ、フロントエンドを Yew で構築した Web アプリケーション。
- [Rust-Full-Stack](https://github.com/steadylearner/Rust-Full-Stack) - テストしやすく動作する Rust コードと、その解説ブログ記事。
- [Bucket Questions](https://github.com/hgzimmerman/BucketQuestions) - 気軽なパーティーゲーム向けに、すべて Rust で書かれた Web アプリ。
- [web-view todomvc desktop app](https://github.com/Extrawurst/rust-webview-todomvc-yew) - WebAssembly にコンパイルされる todomvc に Yew を使い、Electron の代わりに [web-view](https://github.com/Boscop/web-view) で軽量（約 2 MB）なデスクトップアプリとしてバンドルするデモ。[web-view](https://github.com/Boscop/web-view) にも[デモ](https://github.com/Boscop/web-view/tree/master/examples#todo-yew)があります。
- [yew-react-example](https://github.com/hobofan/yew-react-example) - Yew コンポーネント内で React コンポーネントを使う Web アプリの作成方法を示すプロジェクト。
- [Kirk](https://github.com/stkevintan/Kirk) - Rust WebAssembly 製のブログ。
- [rust-async-wasm-demo](https://github.com/extraymond/rust-async-wasm-demo) - Web にデプロイできる、Rust と async を学ぶための小規模プロジェクト。
- [karaoke-rs](https://github.com/tarkah/karaoke-rs) - Rust 製のシンプルなネットワーク対応カラオケプレーヤー。
- [I Love Hue! (rs)](https://github.com/noc7c9/i-love-hue-rs) - モバイルゲーム I Love Hue を Yew（Rust）で再現。
- [yew-styles-page](https://github.com/spielrs/yew-styles-page) - Yew 向けフレームワークスタイルの初期プロジェクト。
- [caniuse.rs](https://github.com/jplatte/caniuse.rs) - Rust の機能検索。
- [Rust electron yew demo](https://github.com/Extrawurst/rust-electron-demo) - Rust ベースの Web アプリ（Yew）を Electron でネイティブアプリ化する例。
- [covplot](https://github.com/jbowens/covplot) - 世界の COVID-19 データを表示するライブグラフ。
- [Minesweeper](https://github.com/jgpaiva/minesweeper) - Rust、Yew、WebAssembly で構築されたマインスイーパー。
- [Freecell](https://github.com/Stigjb/freecell) - Rust と Yew で書かれたペイシェンスゲーム。
- [Yew-WebRTC-Chat](https://github.com/codec-abc/Yew-WebRTC-Chat) - Yew で作られたシンプルな WebRTC チャット。
- [Yew Fullstack Boilerplate](https://github.com/lukidoescode/yew-fullstack-boilerplate) - Rust でフルスタックアプリを作成するための、設計方針が明確なボイラープレート。
- [Chord Quiz](https://github.com/Stigjb/chord-quiz) - Rust/Yew/WebAssembly アプリでコードの聞き分けを練習。
- [RustMart](https://github.com/sheshbabu/rustmart-yew-example) - Rust、Wasm、Yew で書かれたシングルページアプリケーション（SPA）。
- [DevAndDev](https://github.com/alepez/devand) - 開発者がペアプログラミング相手を探せる Web サイト。Rust 製で、フロントエンドは Yew。
- [yew-octicons](https://github.com/io12/yew-octicons) - Yew プロジェクトで Octicons を簡単に使うためのインターフェース。
- [Pipe](https://github.com/pipe-fun/pipe) - タスク管理センターとなる Rust / Wasm クライアント Web アプリ。
- [note-to-yew](https://github.com/oovm/note-to-yew) - マークアップをオンラインで Yew マクロに変換。自身も Yew 製。
- [ASCII-Hangman](https://github.com/getreu/ascii-hangman) - ASCII アートのご褒美付きで設定可能な子ども向けハングマンゲーム。
- [dotdotyew](https://github.com/shaunbennett/dotdotyew) - Yew を使った[ドット投票](https://en.wikipedia.org/wiki/Dot-voting)。バックエンド API は Rust 製。
- [wasm-2048](https://github.com/dev-family/wasm-2048) - Rust と Yew で実装し、Wasm にコンパイルした 2048 ゲーム。
- [website-wasm](https://github.com/kamiyaa/website-wasm) - Yew/Wasm を通じて Rust で書かれた個人 Web サイト。
- [KeyPress](https://github.com/rayylee/keypress) - 中国語話者が英語を練習するための Rust WebAssembly Web サイト例。
- [yew-train-ticket](https://github.com/anthhub/yew-train-ticket) - Yew の最新フックと関数 API を基盤にした Rust WebAssembly [Web アプリ](http://118.190.37.169:8002)の例。コードスタイルは React Function Component に非常によく似ています。
- [yew-d3-example](https://github.com/ivanschuetz/yew-d3-example) - Yew で d3 チャートを表示する例。
- [Oxfeed](https://github.com/sanpii/oxfeed) - Yew フロントエンドを持つ Rust 製フィードリーダー。
- [Flow.er](https://github.com/LighghtEeloo/flow.er) - Todo リスト機能を統合したノートブックアプリ。Rust、WebAssembly、Yew、Trunk で開発。
- [Fullstack-Rust](https://github.com/vascokk/fullstack-rust) - Actix-web、Yew、Bulma CSS、Diesel を使ったフルスタック Rust アプリ（Connect5 ゲーム）。
- [Sea_battle](https://github.com/MAE664128/sea_battle) - 海戦ゲームのシンプルな例。Rust + Yew。
- [tide-async-graphql-mongodb](https://github.com/zzy/tide-async-graphql-mongodb) - wasm/yew フロントエンドを備えた GraphQL サービス向けの簡潔なボイラープレート。
- [surfer](https://github.com/zzy/surfer) - yew + graphql で構築されたブログ。[ライブデモサイト](https://niqin.com)あり。GraphQL サービスのバックエンドと Web アプリのフロントエンドを提供します。
- [qubit](https://abhimanyu003.github.io/qubit) - Rust と WebAssembly を基盤とする便利な電卓。[ライブデモ](https://abhimanyu003.github.io/qubit/)。
- [Paudle](https://github.com/pmsanford/paudle) - Josh Wardle による優れた単語ゲーム Wordle の再実装。
- [Rust algorithms](https://github.com/Jondolf/rust-algorithms) - さまざまなアルゴリズムを対話的に実装した Web サイト。
- [Marc Portfolio](https://gitlab.com/marcempunkt/maeurerdev) - ソフトウェア開発者のポートフォリオ。[ライブデモ](https://maeurer.dev/)。
- [zzhack](https://github.com/zzhack-stack/zzhack) - Rust と Yew を基盤とする個人ブログ。[ライブデモ](https://www.zzhack.fun/)。
- [Rquote](https://github.com/Altair-Bueno/rquote) - Rust と WebAssembly で構築され、Animechan API からアニメの引用を取得する Web アプリ。[ライブデモ](https://rquote.vercel.app/)。
- [yew-ssr-tide](https://github.com/zzy/yew-ssr-tide) - tide と surf を使った Yew のサーバーサイドレンダリング例。Yew の**開発版**が必要です。
- [yew-ssr-actix-web](https://github.com/zzy/yew-ssr-actix-web) - actix-web と reqwest を使った Yew のサーバーサイドレンダリング例。Yew の**開発版**が必要です。
- [PixelGuesser](https://github.com/tdooms/pixelguesser) - 画像の内容をできるだけ早く当てる実生活向けパーティーゲーム。
- [Crabtyper](https://github.com/brancobruyneel/crabtyper) - Rust で書かれたタイピング速度測定 Web アプリ。
- [We-Come Monorepo](https://github.com/kabinetkmitb/wecome) - wecome KM ITB のモノレポ。[ライブデモ](https://wecome-itb.com/)。
- [blog-rs](https://github.com/songday/blog-rs) - フロントエンドとバックエンドをすべて Rust で書いたブログシステム。バックエンドは Warp、フロントエンドは Yew（WASM）。
- [mb2](https://devctm.com) - Yew クライアントを備えたポーカーサーバー。クライアントを見るには `Demo` ボタン、続いて `Start` をクリックします。
- [Puzzle Cube](https://github.com/wainwrightmark/puzzle_cube) - Rust と Yew を使ったルービックキューブソルバー。[ライブデモ](https://wainwrightmark.github.io/puzzle_cube/)。
- [CubeShuffle](https://github.com/philipborg/CubeShuffle) - Rust、Yew、Bulma、Tauri で構築されたカードゲーム用シャッフルユーティリティ。
- [Rust Audio](https://github.com/austintheriot/audio) - ブラウザー内で Rust/WASM を使うリアルタイム音声処理／合成。[ライブデモ](https://austintheriot.github.io/audio/)。
- [Kiomet](https://github.com/SoftbearStudios/kiomet) - タワーを占領して領土を広げるオンラインリアルタイム戦略ゲーム。
- [Portfolio website](https://github.com/simbleau/website) - Spencer Imbleau によるアクセシビリティ組み込みのポートフォリオ SPA。
- [tchatche.rs](https://github.com/nag763/tchatchers) - Yew と Axum で構築された WebSocket チャットアプリ。
- [viz.rs](https://github.com/viz-rs/viz-rs.github.io) - viz Web フレームワークの Web サイト。[ライブデモ](https://viz.rs/)。
- [theiskaa.com](https://github.com/theiskaa/theiskaa.com) - Yew フレームワークの実世界での実装。[theiskaa.com で公開](https://theiskaa.com)。
- [live-ask.com](https://github.com/liveask/liveask) - リアルタイムのイベント／ミートアップ Q&A プラットフォーム。[live-ask.com で公開](https://live-ask.com)。
- [Sumi](https://github.com/vgwidt/sumi) - Yew と Actix で構築された複数ユーザー対応の課題追跡・ナレッジベースアプリ。
- [hurlurl](https://github.com/lucasmerlin/hurlurl) - ランダム化機能を持つリンク短縮サービス。[ライブデモ](https://hurlurl.com/)。
- [Macige](https://github.com/tramlinehq/macige) - モバイルアプリ開発向け CI ワークフロー生成ツール。[ライブデモ](https://macige.tramline.app)。
- [Spaceman](https://github.com/eliaperantoni/spaceman) - 快適に使え、見た目も美しいクロスプラットフォーム gRPC クライアント。
- [Crypto-helper](https://github.com/TheBestTvarynka/crypto-helper) - クライアント側でデータのハッシュ化、暗号化、署名ができる Web アプリ。JWT デバッガーも同梱。[Web サイト](https://crypto.qkation.com)。
- [zoom-rs](https://github.com/security-union/zoom-rs) - 研究目的で Rust により書かれた Zoom クローン。
- [Ubiquity](https://github.com/opensourcecheemsburgers/ubiquity) - Yew、Tauri、Tailwind、DaisyUI で構築されたオープンソースのクロスプラットフォーム Markdown エディター。[Web アプリ](https://ubiquity.rs)。
- [demo_web_zip_wasm](https://github.com/MAE664128/demo_web_zip_wasm) - WebAssembly を使い、ブラウザー内で ZIP アーカイブを作成するシンプルなサンプルプログラム。[ライブデモ](https://mae664128.github.io/demo_web_zip_wasm/)。
- [RustedLessPass](https://github.com/RustedLessPass/RustedLessPass) - ステートレスなパスワードマネージャー。[Web アプリ](https://rustedlesspass.github.io/)。
- [windows-terminal-theme-generator](https://github.com/LelouchFR/windows-terminal-theme-generator/) - Windows Terminal テーマの作成を簡単にします。[ライブデモ](https://windows-terminal-theme-generator.netlify.app/)
- [SandCat](https://github.com/Xu-Mj/sandcat) - 基本的な友人システム、1 対 1 チャット、グループチャット、1 対 1 の音声／ビデオ通話など、IM アプリの基本機能を主に実装。i18n に対応し、現在は中国語と英語を切り替えられます。
- [PinePods](https://github.com/madeofpendletonwool/PinePods) - 複数ユーザーに対応し、クライアントが接続する中央データベースを利用する Rust ベースのポッドキャスト管理システム。
- [0721](https://github.com/langyo/0721) - Rust で書かれた画像ホスティングエンジン。
- [Hikari](https://github.com/celestia-island/hikari) - あらゆるもののフロントエンド。
- [simply-view-image-for-python-debugging](https://github.com/elazarcoh/simply-view-image-for-python-debugging?tab=readme-ov-file) - Python のデバッグ時に画像変数の画像を簡単に表示する Visual Studio Code 拡張機能。
- [Mindsweeper](https://github.com/AlexBuz/mindsweeper) - 原則に基づいて再構成したマインスイーパー。[ライブデモ](https://alexbuz.github.io/mindsweeper/)。
- [scap-rs](https://github.com/emo-crab/scap-rs) - Rust で実装された National Vulnerability Database（NVD）。[ライブデモ](https://scap.kali-team.cn/)。
- [Sentry Relay](https://github.com/getsentry/relay) - Sentry SDK と Sentry サーバーの一部機能をプロキシプロセスへ移すサービス。
- [Syre](https://github.com/syre-data/syre) - 科学データの管理と洞察。
- [candle-wasm-examples](https://github.com/huggingface/candle) - Candle は、パフォーマンス（GPU 対応を含む）と使いやすさを重視した Rust 向けのミニマルな ML フレームワークです。オンラインデモ：[whisper](https://huggingface.co/spaces/lmz/candle-whisper)、[LLaMA2](https://huggingface.co/spaces/lmz/candle-llama2)、[T5](https://huggingface.co/spaces/radames/Candle-T5-Generation-Wasm)、[yolo](https://huggingface.co/spaces/lmz/candle-yolo)、[Segment
  Anything](https://huggingface.co/spaces/radames/candle-segment-anything-wasm)をお試しください。
- [chipbox](https://github.com/chipnertkj/chipbox) - Rust で書かれたオープンソースのデスクトップ DAW。
- [Taxy](https://github.com/picoHz/taxy/tree/main) - TCP/HTTP/TLS/WebSocket に対応し、WebUI を内蔵した Rust 製リバースプロキシサーバー。
- [Proxelar](https://github.com/emanuele-em/proxelar) - ネットワークトラフィックの可視化を目指す、初期段階の Rust ベース Man-in-the-Middle プロキシ。
- [diff.rs](https://github.com/xfbs/diff.rs) - Rust クレートのバージョン間差分を表示する Web アプリ。Yew で実装され、WebAssembly として完全にブラウザー内で動作します。[ライブデモ](https://diff.rs)。
- [konnektoren.help](https://github.com/Konnektoren/konnektoren-web-game) - ゲーム化された課題と地図ベースのインターフェースを備えた、ドイツ語文法学習用の対話型 Web アプリ。[Web アプリ](https://konnektoren.help)
- [layout-viewer](https://prideout.net/layout-viewer) - ズームとパン操作で集積回路のレイアウトを調査。
- [Google Wasefire](https://github.com/google/wasefire) - 開発者体験を重視した安全なファームウェアフレームワーク。
- [Apache Iggy](https://github.com/apache/iggy) - レーザー級の速度を持つ超高効率メッセージストリーミング。

## テンプレート

- [Create Yew App](https://github.com/jetli/create-yew-app) - コマンド `npx create-yew-app my-app` を 1 つ実行してモダンな Yew Web アプリをセットアップ。
- [yew-wasm-pack-template](https://github.com/yewstack/yew-wasm-pack-template) - wasm-pack と組み合わせる Yew プロジェクトの開始用テンプレート。
- [yew-wasm-pack-minimal](https://github.com/yewstack/yew-wasm-pack-minimal) - wasm-bindgen と wasm-pack を使う Yew プロジェクトの最小テンプレート。
- [yew-parcel-template](https://github.com/spielrs/yew-parcel-template) - Yew-Router と Parcel を備えた Awesome Yew アプリケーション。
- [yew-template-for-github-io](https://github.com/Ja-sonYun/yew-template-for-github-io) - CSS に Tailwind と webpack、ビルドと配信に Trunk を使い、github.io へ直接デプロイできる Yew プロジェクト用テンプレート。
- [tailwindcss-yew-template](https://github.com/vvcaw/tailwindcss-yew-template) - Yew で Tailwindcss を使うためのシンプルな構成。
- [axum-yew-setup](https://github.com/rksm/axum-yew-setup) - フルスタック Rust Web アプリ向けに Axum と Yew を設定するスタータープロジェクト。
- [rust-yew-axum-tauri-desktop](https://github.com/jetli/rust-yew-axum-tauri-desktop) - Rust + Yew + Axum + Tauri によるデスクトップアプリ向けフルスタック Rust 開発。
- [Yew PWA Minimal](https://github.com/fkohlgrueber/yew-pwa-minimal) - Yew を使った最小限の Progressive Web App。
- [Yew HTTP Starter](https://github.com/LeTurt333/yew_http_starter) - シンプルな HTTP メッセージと便利な補助コメントを備えた Yew テンプレート。
- [Yew minimlistic template](https://github.com/averichev/yew-starter-template) - Yew プロジェクトをすばやく始めるためのミニマルなテンプレート。

## クレート

### コンポーネントライブラリ

- [yew-mdc](https://github.com/dungeonfog/yew-mdc) - Yew フレームワーク向け Material Design Components。
- [muicss-yew](https://github.com/AlephAlpha/muicss-yew) - Yew フレームワーク向け MUI-CSS Components。
- [yew-bulma](https://github.com/kellpossible/yew-bulma) - Yew を使うプロジェクト向けに Bulma CSS ベースのコンポーネントを提供する Rust ライブラリ。
- [material-yew](https://github.com/hamza1311/material-yew) - Material Web Components の Yew ラッパー。
- [Yewprint](https://github.com/yewprint/yewprint) - blueprintjs.com の Yew 移植版。
- [ybc](https://github.com/thedodd/ybc) - Bulma CSS フレームワークを基盤とする Yew コンポーネントライブラリ。
- [patternfly-yew](https://github.com/ctron/patternfly-yew) - Yew 向け Patternfly コンポーネント。
- [yew-feather](https://github.com/pedrodesu/yew-feather) - Yew 向け Feather Icons コンポーネント。
- [tailwind-yew-builder](https://github.com/matiu2/tailwind-yew-builder) - docker-compose を使って Yew 向け Tailwind CSS をビルド。Trunk にも対応。
- [yew-components](https://github.com/angular-rust/yew-components) - Yew フレームワーク向け Material Design Components。
- [yew-chart](https://github.com/titanclass/yew-chart) - チャート描画用の SVG ベースコンポーネントを提供する Yew ベースのチャートライブラリ。
- [tailyew](https://github.com/fuzzycloud/tailyew) - DaisyUI（tailwindcss ベース）コンポーネントの Yew ラッパー。
- [yew-duskmoon-ui](https://github.com/gsmlg-dev/yew-duskmoon-ui) - Duskmoon UI コンポーネントライブラリ。`stylist` を使って CSS をコンポーネントへ埋め込むため、追加の CSS ファイルは不要です。[ライブデモ](https://gsmlg-dev.github.io/yew-duskmoon-ui/)。
- [yew-bootstrap](https://github.com/isosphere/yew-bootstrap) - Bootstrap 5 コンポーネントライブラリの Yew ラッパー。
- [Zu](https://github.com/RustVis/zu) - Material Design を実装した Yew Web コンポーネント。
- [yew-nav-link](https://github.com/RAprogramm/yew-nav-link) - アプリケーション内の現在のルートに基づき、アクティブ状態を認識するナビゲーションリンク。
- [Rust Lucide](https://lucide.rustforweb.org) - コミュニティ製の美しく一貫したアイコンツールキット Lucide の Yew 移植版。
- [Rust Radix](https://radix.rustforweb.org) - 高品質でアクセシブルな UI を構築するためのコンポーネント、アイコン、色、テンプレートのライブラリ Radix の Yew 移植版。
- [Rust shadcn/ui](https://shadcn-ui.rustforweb.org) - アプリへコピー＆ペーストできる美しいデザインのコンポーネントライブラリ shadcn/ui の Yew 移植版。

### コンポーネント

- [Yew Form](https://github.com/jfbilodeau/yew_form) - Yew でのフォーム処理を簡素化するコンポーネント。
- [yew-component-size](https://github.com/AircastDev/yew-component-size) - 親コンポーネントの幅／高さが変わるとイベントを発行する Yew コンポーネント。
- [yew-virtual-scroller](https://github.com/AircastDev/yew-virtual-scroller) - 仮想スクロール／スクロールウィンドウ化のための Yew コンポーネント。
- [yew-oauth2](https://github.com/ctron/yew-oauth2/) - 特定の CSS フレームワークに依存しない素の Yew OAuth2/OpenID Connect コンポーネント。
- [yew-scroll-area](https://github.com/MatchaChoco010/yew-scroll-area) - Yew 向けカスタムスクロール領域。

### フック

- [yew-hooks](https://github.com/jetli/yew-hooks) - [streamich/react-use](https://github.com/streamich/react-use) と [alibaba/hooks](https://github.com/alibaba/hooks) に着想を得た Yew 向けカスタム Hooks ライブラリ。
- [yew-side-effect](https://github.com/futursolo/yew-side-effect) - [react-side-effect](https://github.com/gaearon/react-side-effect) と [react-helmet](https://github.com/nfl/react-helmet) に着想を得た、Yew アプリケーションの副作用を調整するライブラリ。
- [Bounce](https://github.com/bounce-rs/bounce) - [Redux](https://github.com/reduxjs/redux) と [Recoil](https://github.com/facebookexperimental/Recoil) に着想を得た、Yew 向けの扱いやすい状態管理ライブラリ。
- [yewv](https://github.com/yewv/yewv) - パフォーマンスと簡潔さを最優先に構築された、非常に高速な Yew 向け状態管理モジュール。

### JavaScript ライブラリの移植

- [Plotly.rs](https://github.com/igiagkiozis/plotly) - 人気のある [Plotly](https://plotly.com/javascript/) チャートライブラリの Rust バインディング。
- [ag-grid-rs](https://github.com/mfreeborn/ag-grid-rs) - [AG Grid](https://www.ag-grid.com/javascript-data-grid/) データテーブルライブラリの Rust バインディング。
- [popper-rs](https://github.com/ctron/popper-rs/) - Rust 向け [Popper JS](https://popper.js.org/) バインディング。

### ユーティリティ

- [Yewdux](https://github.com/intendednull/yewdux) - Yew アプリ向けの Redux 風状態コンテナ。
- [reacty_yew](https://github.com/hobofan/reacty_yew) - TypeScript の型定義を介して React コンポーネントから Yew コンポーネントを生成。
- [styled-yew](https://github.com/IcyDefiance/styled-yew) - styled-components に似た Yew 向け CSS in Rust。
- [stylist-rs](https://github.com/futursolo/stylist-rs) - WebAssembly アプリケーション向け CSS-in-Rust スタイリングソリューション。
- [Yew Interop](https://github.com/Madoshakalaka/yew-interop) - Yew で JavaScript と CSS を非同期に読み込み。
- [Tailwind RS](https://github.com/oovm/tailwind-rs) - Rust の Tailwind スタイルトレーサー。JIT + AOT インタープリター。
- [yew-style-in-rs](https://github.com/MatchaChoco010/yew-style-in-rs) - Yew 向け Rust 製スコープ CSS。
- [yew_icons](https://github.com/finnbear/yew_icons) - Yew アプリへさまざまな SVG アイコン（Feather/Font Awesome/Octicons）を簡単に組み込み。
- [Yew-Template](https://github.com/INSAgenda/yew-template) - Yew 使用時に HTML と Rust コードを分離するためのクレート。
- [yew-nested-router](https://github.com/ctron/yew-nested-router) - Yew 0.20 に対応したネスト可能なルーター。
- [turf](https://github.com/myFavShrimp/turf) - CSS Modules に着想を得た、マクロベースのコンパイル時 SCSS トランスパイル、CSS 圧縮、クラス名一意化ツールチェーン。
- [browser-panic-hook](https://github.com/ctron/browser-panic-hook) - エンドユーザーに配慮した形で失敗を表示できる、ブラウザー環境向けパニックハンドラー。
- [Rust Floating UI](https://floating-ui.rustforweb.org/) - ツールチップ、ポップオーバー、ドロップダウンなどの「浮動」要素を作成するためのライブラリ。

### Wasm

- [wasm-bindgen](https://github.com/rustwasm/wasm-bindgen) - WebAssembly モジュールと JavaScript の高水準な連携を支援。
- [stdweb](https://github.com/koute/stdweb) - Web API の Rust バインディングを提供し、Rust と JavaScript の高度な相互運用を可能にします。
- [tauri-sys](https://github.com/JonasKruckenberg/tauri-sys) - wasm-bindgen を使うプロジェクト向けの Tauri API 生バインディング。

### フレームワーク

- [stackable](https://github.com/futursolo/stackable) - Yew 向けのフレームワーク体験。

## ツール

- [wasm-pack](https://github.com/rustwasm/wasm-pack) - Rust から WebAssembly への定番ワークフローツール。
- [wasm-pack-action](https://github.com/jetli/wasm-pack-action) - 実行ファイルをダウンロードして `wasm-pack` をインストールし、CI/CD を高速化する GitHub Action。
- [wasm-bindgen-action](https://github.com/jetli/wasm-bindgen-action) - 実行ファイルをダウンロードして `wasm-bindgen` をインストールし、CI/CD を高速化する GitHub Action。
- [cargo-web](https://github.com/koute/cargo-web) - クライアントサイド Web 向けの Cargo サブコマンド。
- [Trunk](https://github.com/thedodd/trunk) - Rust Wasm アプリケーションをビルド、バンドルし、Web へ配信。
- [trunk-action](https://github.com/jetli/trunk-action) - 実行ファイルをダウンロードして `Trunk` をインストールし、CI/CD を高速化する GitHub Action。
- [wabt](https://github.com/WebAssembly/wabt) - .wasm ファイルサイズを削減する `wasm-strip` と `wasm-objdump` を含む WebAssembly Binary Toolkit。
- [binaryen](https://github.com/WebAssembly/binaryen) - .wasm ファイルサイズを削減する `wasm-opt` を含む、WebAssembly 向けコンパイラー基盤・ツールチェーンライブラリ。
- [Tauri](https://github.com/tauri-apps/tauri) - 主要デスクトッププラットフォーム向けの小さく非常に高速なバイナリーを構築するフレームワーク。HTML、JS、CSS にコンパイルできる任意のフロントエンドフレームワークを UI 構築に統合できます。バックエンドは、フロントエンドから操作できる API を持つ Rust 製バイナリーです。
- [yew-fmt](https://github.com/schvv31n/yew-fmt) - Yew HTML を整形するための、設定可能な `rustfmt` 拡張。

## 記事

- [Yew で Rust フロントエンドを構築しよう](https://dev.to/deciduously/lets-build-a-rust-frontend-with-yew---part-1-3k2o)
- [Rust Yew の使い方](https://github.com/steadylearner/blog/tree/master/posts/Rust/How%20to%20use%20Rust%20Yew.md)
- [Rust でモーダルを使う方法](https://github.com/steadylearner/blog/tree/master/posts/Rust/How%20to%20use%20a%20modal%20in%20Rust.md)
- [Rust フロントエンドでルーターを使う方法](https://github.com/steadylearner/blog/tree/master/posts/Rust/How%20to%20use%20routers%20in%20Rust%20Frontend.md)
- [Rust フロントエンドをモジュール化する方法](https://github.com/steadylearner/blog/tree/master/posts/Rust/How%20to%20modulize%20your%20Rust%20Frontend.md)
- [Rust フロントエンドで NPM パッケージを使う方法](https://github.com/steadylearner/blog/tree/master/posts/Rust/How%20to%20use%20NPM%20packages%20with%20Rust%20Frontend.md)
- [Rust フロントエンドで Markdown を使う方法](https://github.com/steadylearner/blog/blob/master/posts/Rust/How%20to%20use%20markdown%20with%20code%20snippets%20in%20Rust%20Frontend.md)
- [Yew によるフルスタック Rust](https://github.com/steadylearner/blog/tree/master/posts/Rust/Fullstack%20Rust%20with%20Yew.md)
- [フルスタック Rust コードの書き方](https://github.com/steadylearner/blog/tree/master/posts/Rust/How%20to%20write%20Full%20Stack%20Rust%20code.md)
- [Rust Yew fetch API で YouTube vlog を表示する方法](https://github.com/steadylearner/blog/blob/master/posts/Rust/How%20to%20render%20a%20YouTube%20vlog%20with%20%20Rust%20Yew%20fetch%20API.md)
- [Rust Yew mounted API でブログ記事を表示する方法](https://github.com/steadylearner/blog/tree/master/posts/Rust/How%20to%20render%20blog%20posts%20with%20Rust%20Yew%20mounted%20API.md)
- [完全に Rust で作る Web アプリケーション](https://medium.com/@saschagrunert/a-web-application-completely-in-rust-6f6bdb6c4471)
- [Yew - Rust & WebAsse フロントエンドフレームワーク](https://sudonull.com/post/11627-Yew-Rust-WebAsse-frontend-framework)
- [Tauri と Yew を使って Rust でデスクトップアプリを作成](https://dev.to/stevepryde/create-a-desktop-app-in-rust-using-tauri-and-yew-2bhe)
- [Christopher Hunt と Kiki Carter による実世界アプリでの Yew コード解説動画](https://www.youtube.com/watch?v=ilrGIJGdqRo)
- [Yew に Tailwind を追加](https://mikekrisher.com/writings/yew_and_tailwind)

## コース

- [full-stack-todo-rust-course](https://github.com/brooks-builds/full-stack-todo-rust-course) - Yew のコースを含むフルスタック Rust コース。

## 書籍

- [The WebAssembly Book](https://rustwasm.github.io/docs/book/) - Web を扱い、.wasm ファイルを生成する方法。
- [The wasm-bindgen Guide](https://rustwasm.github.io/docs/wasm-bindgen/) - Rust と JavaScript API をバインドする方法。
- [The wasm-pack Guide](https://rustwasm.github.io/docs/wasm-pack/) - Rust 生成の WebAssembly をビルドし扱う方法。
- [Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust) - Yew でアプリを作成する章 `Advanced JavaScript Integration with Yew` を収録。
- [Creative Projects for Rust Programmers](https://www.oreilly.com/library/view/creative-projects-for/9781789346220/) - 第 5 章は `Creating a Client-Side WebAssembly App Using Yew`。
- [Server-Side WebAssembly](https://www.manning.com/books/server-side-webassembly) - WebAssembly コンポーネントと WebAssembly System Interface（WASI）を使って Web バックエンドを構築する方法。

## 代替

Yew チームは他のプロジェクトとのアイデア共有を歓迎しており、この刺激的な新技術の可能性を最大限に引き出すために互いに協力できると考えています。

- [Draco](https://github.com/utkarshkukreti/draco) - WebAssembly でクライアントサイド Web アプリケーションを構築する Rust ライブラリ。
- [Percy](https://github.com/chinedufn/percy) - Rust + WebAssembly でアイソモーフィック Web アプリを構築するモジュール式ツールキット。
- [Sauron](https://github.com/ivanceras/sauron) - Web アプリ構築用の HTML Web フレームワーク。
- [Seed](https://github.com/seed-rs/seed) - Web アプリを作成する Rust フレームワーク。
- [Smithy](https://github.com/rbalicki2/smithy) - Rust で WebAssembly アプリを構築するフレームワーク。
- [Dioxus](https://github.com/DioxusLabs/dioxus) - デスクトップ、Web、モバイル、SSR、LiveView などの UI を構築する、洗練された React 風ライブラリ。
- [Sycamore](https://github.com/sycamore-rs/sycamore) - Rust と WebAssembly で Web アプリを作成するリアクティブライブラリ。
- [Leptos](https://github.com/leptos-rs/leptos) - Rust で高速な Web アプリケーションを構築。

## 関連リスト

- [Awesome Rust and WebAssembly](https://github.com/rustwasm/awesome-rust-and-webassembly) - 優れた Rust・WebAssembly のプロジェクト、ライブラリ、ツール、リソースのリスト。
- [Awesome WebAssembly](https://github.com/mbasso/awesome-wasm) - WebAssembly エコシステムに関する優れたもののコレクション。
- [Awesome Rust](https://github.com/rust-unofficial/awesome-rust) - Rust のコードとリソースを厳選したリスト。
