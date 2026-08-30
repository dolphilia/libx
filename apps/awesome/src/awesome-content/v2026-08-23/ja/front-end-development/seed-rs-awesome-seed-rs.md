---
title: "Awesome Seed RS"
description: "Seed RSを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-seed-rs-awesome-seed-rs-readme-md"
---

# Awesome Seed RS

Seed RSを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [公式リソース](#official-resources)
- [書籍](#books)
- [クイックスタート](#quickstarts)
- [バンドラー](#bundlers)
- [例](#examples)
- [Seed を使用するプロジェクト](#projects-using-seed)
- [ライブラリー](#libraries)
- [貢献](#contribute)

## 公式リソース

- ~~Homepage~~
- [GitHub repo](https://github.com/seed-rs/seed)
- [Forum](https://seed.discourse.group)
- [Chat](https://discord.gg/JHHcHp5)

## 書籍
- [Engineering Rust Web Applications](https://erwabook.com/) - Diesel、Rocket、Seed。
- [Porting a JS app to Rust](https://slowtec.de/posts/2019-12-20-porting-javascript-to-rust-part-1.html) - Rust で JavaScript アプリを WebAssembly へ移植する方法（ブログシリーズ）。

## クイックスタート

- [Default quickstart](https://github.com/seed-rs/seed-quickstart) - Rust ライブラリーのみを含みます。
- [Quickstart with Webpack](https://github.com/seed-rs/seed-quickstart-webpack) - 主な機能: 自動リロード、事前レンダリング、最小化、[TailwindCSS](https://tailwindcss.com/)、Typescript。

## バンドラー

- [Trunk](https://github.com/thedodd/trunk) - Rust 向け WASM ウェブアプリケーションバンドラー。
- [Web Bundler](https://github.com/panoptix-za/web-bundler) - 公開用の Seed SPA をバンドルします。
- [Seeder](https://github.com/MartinKavik/seeder) - 一つのコマンドを実行することで Seed アプリをセットアップし、開発サーバーを起動します。

## 例

- [RealWorld example](https://github.com/seed-rs/seed-rs-realworld) - 「あらゆるデモアプリの母」— [Medium.com](https://medium.com/) クローンの模範的なフルスタック実装。
- [Dark lang Realworld](https://github.com/MartinKavik/seed-realworld-darklang) - [Dark lang](https://darklang.com/) Realworld を統合した _Quickstart with Webpack_ 上の Seed Realworld 例。
- [Official examples](https://github.com/seed-rs/seed/tree/master/examples) - 公式リポジトリに含まれる小規模な例。
- [ERWA mytodo](https://github.com/seed-rs/erwa_mytodo) - Rust フルスタック例。Diesel、Rocket、Seed。
- [Template for GUIs with seed+gotham](https://gitlab.com/liketechnik/local-gui-seed-gotham) - Gotham、rust-embed、web-view、Seed を使ったローカル／デスクトップ GUI 向けの Electron のようなテンプレート。
- [Seeded Game of Life](https://github.com/arn-the-long-beard/seeded_game_of_life) - [tutorial](https://dev.to/arnthelongbeard/how-to-only-rust-for-web-frontend-1026) 付きで、[wasm tutorial](https://rustwasm.github.io/docs/book/) に着想を得た純粋な Rust によるライフゲーム。
- [Dota Underlord Perfect Build](https://github.com/warycat/dotawasm) - Dota Underlord で最適なデッキ構築を支援するアプリ。
- [Play Seed](https://ide.play-seed.dev) - 複数の既定例を備えたプレイグラウンド。

## Seed を使用するプロジェクト

- [AdEx Explorer](https://github.com/adexnetwork/adex-explorer) - AdEx 広告プロトコルのペイメントチャネルネットワークに関する厳選情報を表示します。
- [Kavik.cz](https://github.com/MartinKavik/kavik.cz) - オープンソースの個人ウェブサイト。
- [benxu.dev/blog](https://github.com/AlterionX/benxu-dev) - 比較的シンプルなオープンソースの個人ブログ。`Seed`、[`maud`](https://maud.lambda.xyz)、[`Rocket`](https://rocket.rs)、[`Diesel`](https://diesel.rs) で構築されています。
- ~~seed-rs.org~~ - Seed の公式ウェブサイト。
- [WeightRS](https://gitlab.com/mkroehnert/weightrs) - 体重を追跡するための、最小限でプライバシーに配慮したプログレッシブウェブアプリ。
- [Music composer](https://github.com/ethanboxx/planters-rdconf-hackathon-project) - 基本的な音楽作曲アプリ。
- [Play Seed](https://play-seed.dev) - Seed アプリをデモするプレイグラウンド、Play Seed に関するウェブサイト。
- [Typesync](https://typesync.rutrum.net) - 楽曲歌詞でタイピング速度をテストします。`Seed`、[`Rocket`](https://rocket.rs)、[`Diesel`](https://diesel.rs) を使用します。
- [CalcuPi](https://dvjn.github.io/CalcuPi) - 円周率の値を近似する美しいモンテカルロシミュレーション。
- [Love Letter Tracker](https://www.fosskers.ca/en/tools/love-letter) - カードゲーム _Love Letter_ の知識トラッカー。
- [Whatlang.org](https://whatlang.org/) - whatlang（言語認識ライブラリー）のインタラクティブデモ。
- [Pslink](https://pslink.teilgedanken.de) - 出版物での利用に焦点を置く URL 短縮ページ（[demo](https://demo.pslink.teilgedanken.de/app/)（ユーザー、パスワード: demo））。`Seed`、[`actix-web`](https://actix.rs/)、[`sqlx`](https://github.com/launchbadge/sqlx) を使用します。

## ライブラリー

- [Savory](https://gitlab.com/MAlrusayni/savory) - Seed に基づくユーザーインターフェースを構築するライブラリー。
- [seed-icons](https://crates.io/crates/seed-icons) - Seed ベースのアプリケーションに含めるアイコンコレクションを備えたライブラリー。
- [Seed Bootstrap](https://github.com/panoptix-za/seed-bootstrap) - [Bootstrap](https://getbootstrap.com/) CSS コンポーネントのコレクション。
- [seed_heroicons](https://github.com/mh84/seed_heroicons) - Seed ベースのアプリケーションに含める [Heroicons](https://heroicons.com/) を提供するライブラリー。

## 貢献

貢献を歓迎します。まず [contribution guidelines](https://github.com/seed-rs/awesome-seed-rs/blob/3f593f25ad8052807021776cbcc3617794bb35ac/contributing.md) をお読みください。
