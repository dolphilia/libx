---
title: "Awesome Seed RS"
description: "RustとWebAssemblyのSeed向けに、公式資料、書籍、クイックスタート、バンドラー、実装例、プロジェクト、UIライブラリーを案内します。"
licenseSource: "github-seed-rs-awesome-seed-rs-readme-md"
---

# Awesome Seed RS

Seedは、WebAssemblyで動くWebアプリを作るためのオープンソースのRustフレームワークです。公式資料、書籍、クイックスタート、バンドラー、実装例、Seedを使うプロジェクト、UIやアイコンのライブラリーを探せます。

## 公式リソース

- ~~ホームページ~~

- [GitHubリポジトリ](https://github.com/seed-rs/seed)

- [フォーラム](https://seed.discourse.group)

- [チャット](https://discord.gg/JHHcHp5)

## 書籍

- [Engineering Rust Web Applications](https://erwabook.com/) — Diesel、Rocket、Seed。

- [Porting a JS app to Rust](https://slowtec.de/posts/2019-12-20-porting-javascript-to-rust-part-1.html) — RustでJavaScriptアプリをWebAssemblyへ移植する方法を解説するブログシリーズ。

## クイックスタート

- [標準クイックスタート](https://github.com/seed-rs/seed-quickstart) — Rustライブラリーのみを含む。

- [Webpackを使うクイックスタート](https://github.com/seed-rs/seed-quickstart-webpack) — 自動再読み込み、事前レンダリング、コードの圧縮、[TailwindCSS](https://tailwindcss.com/)、TypeScript。

## バンドラー

- [Trunk](https://github.com/thedodd/trunk) — Rust向けのWASM Webアプリケーションバンドラー。

- [Web Bundler](https://github.com/panoptix-za/web-bundler) — 公開用にSeedのSPAをバンドル。

- [Seeder](https://github.com/MartinKavik/seeder) — 1つのコマンドでSeedアプリをセットアップし、開発サーバーを起動。

## 実装例<a id="例"></a>

- [RealWorldの実装例](https://github.com/seed-rs/seed-rs-realworld) — [Medium.com](https://medium.com/)のフルスタックのクローン実装。

- [Dark lang Realworld](https://github.com/MartinKavik/seed-realworld-darklang) — Webpackを使うクイックスタートを基に、[Dark lang](https://darklang.com/)のRealworldを統合したSeedのRealworld実装例。

- [公式の実装例](https://github.com/seed-rs/seed/tree/master/examples) — 公式リポジトリに含まれる小規模な実装例。

- [ERWA mytodo](https://github.com/seed-rs/erwa_mytodo) — Diesel、Rocket、Seedを使うRustのフルスタック実装例。

- [seed+gothamのGUIテンプレート](https://gitlab.com/liketechnik/local-gui-seed-gotham) — Gotham、rust-embed、web-view、Seedを使う、ローカル・デスクトップGUI向けのElectronのようなテンプレート。

- [Seeded Game of Life](https://github.com/arn-the-long-beard/seeded_game_of_life) — [チュートリアル](https://dev.to/arnthelongbeard/how-to-only-rust-for-web-frontend-1026)付きの、Rustのみで実装するライフゲーム。[WebAssemblyのチュートリアル](https://rustwasm.github.io/docs/book/)に着想を得ている。

- [Dota Underlord Perfect Build](https://github.com/warycat/dotawasm) — Dota Underlordで最適なデッキの構築を支援するアプリ。

- [Play Seed](https://ide.play-seed.dev) — 複数の既定の実装例を備えたプレイグラウンド。

## Seed を使用するプロジェクト

- [AdEx Explorer](https://github.com/adexnetwork/adex-explorer) — AdEx広告プロトコルのペイメントチャネルネットワークに関する情報を整理して表示。

- [Kavik.cz](https://github.com/MartinKavik/kavik.cz) — オープンソースの個人Webサイト。

- [benxu.dev/blog](https://github.com/AlterionX/benxu-dev) — 比較的シンプルなオープンソースの個人ブログ。`Seed`、[`maud`](https://maud.lambda.xyz)、[`Rocket`](https://rocket.rs)、[`Diesel`](https://diesel.rs)で構築。

- ~~seed-rs.org~~ — Seedの公式Webサイト。

- [WeightRS](https://gitlab.com/mkroehnert/weightrs) — 体重を記録する、最小限の構成でプライバシーに配慮したPWA。

- [Music composer](https://github.com/ethanboxx/planters-rdconf-hackathon-project) — 基本的な作曲アプリ。

- [Play Seed](https://play-seed.dev) — Seedアプリを試せるプレイグラウンド、Play SeedのWebサイト。

- [Typesync](https://typesync.rutrum.net) — 歌詞を使ってタイピング速度を測定。`Seed`、[`Rocket`](https://rocket.rs)、[`Diesel`](https://diesel.rs)を使用。

- [CalcuPi](https://dvjn.github.io/CalcuPi) — 円周率を近似するモンテカルロシミュレーション。

- [Love Letter Tracker](https://www.fosskers.ca/en/tools/love-letter) — カードゲームLove Letterの情報を追跡するツール。

- [Whatlang.org](https://whatlang.org/) — 言語認識ライブラリーwhatlangの対話型デモ。

- [Pslink](https://pslink.teilgedanken.de) — 出版物での利用を目的とするURL短縮ページ（[デモ](https://demo.pslink.teilgedanken.de/app/)のユーザー名・パスワード：demo）。`Seed`、[`actix-web`](https://actix.rs/)、[`sqlx`](https://github.com/launchbadge/sqlx)を使用。

## ライブラリー

- [Savory](https://gitlab.com/MAlrusayni/savory) — Seedを基にユーザーインターフェースを構築するライブラリー。

- [seed-icons](https://crates.io/crates/seed-icons) — Seedアプリに組み込めるアイコン集を備えたライブラリー。

- [Seed Bootstrap](https://github.com/panoptix-za/seed-bootstrap) — [Bootstrap](https://getbootstrap.com/)のCSSコンポーネント集。

- [seed_heroicons](https://github.com/mh84/seed_heroicons) — Seedアプリに組み込める[Heroicons](https://heroicons.com/)を提供するライブラリー。
