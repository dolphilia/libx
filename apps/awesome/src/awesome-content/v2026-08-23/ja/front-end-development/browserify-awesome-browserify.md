---
title: "browserify/awesome-browserify"
description: "browserify/awesome-browserify の正規スナップショット"
licenseSource: "github-browserify-awesome-browserify-readme-md"
---

<div align="center"><img src="https://raw.githubusercontent.com/browserify/awesome-browserify/185b31da0995d9fe9a20f56add08c22406ed5be9/browserify.png" alt="Browserify!"></div>

# Awesome Browserify [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> :crystal_ball: 優れた [Browserify](https://github.com/substack/node-browserify) のリソース、ライブラリ、ツールを厳選したリストです。

[貢献](https://github.com/browserify/awesome-browserify/blob/185b31da0995d9fe9a20f56add08c22406ed5be9/contributing.md)して、このリストの改善にご協力ください！

## 目次

- [概要](#about)
- [公式リソース](#official-resources)
- [コミュニティリソース](#community-resources)
- [チュートリアル](#tutorials)
- [記事](#articles)
- [デモ](#demos)
- [動画](#videos)
- [ツール](#tools)
  - [開発サーバー](#development-servers)
  - [プラグイン](#plugins)
  - [監視ツール](#watchers)
  - [CSS バンドラー](#css-bundlers)
  - [変換](#transforms)
  - [ブラウザー上の Node](#node-in-the-browser)
  - [本番用ツール](#production-tools)

## 概要

Browserify は、すべての依存関係をまとめてバンドルすることで、ブラウザー内で `require('modules')` を使えるようにします。

Node 形式の `require()` を使ってブラウザーコードを整理し、npm でインストールしたモジュールを読み込めます。Browserify はアプリ内のすべての `require()` 呼び出しを再帰的に解析し、単一の `<script>` タグでブラウザーへ配信できるバンドルを構築します。

## 公式リソース

- [ドキュメント](https://github.com/substack/node-browserify#usage)
- [ハンドブック](https://github.com/substack/browserify-handbook)
- [リポジトリ](https://github.com/substack/node-browserify)
- [ウェブサイト](http://browserify.org/)

## コミュニティリソース

- [IRC](http://webchat.freenode.net/?channels=browserify)
- [Twitter](http://twitter.com/browserify)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/browserify)

## チュートリアル

- [Browserify で Hello World](http://browserify.org/#middle-section)
- [Browserify Adventure](https://github.com/workshopper/browserify-adventure)
- [やさしい Browserify ウォークスルー](https://ponyfoo.com/articles/a-gentle-browserify-walkthrough)
- [Browserify ガイド](http://zhaoda.net/2015/10/16/browserify-guide/)（中国語）

## 記事

- [Browserify 入門](https://writingjavascript.org/posts/introduction-to-browserify)
- [クライアント側で npm を使う](http://dontkry.com/posts/code/using-npm-on-the-client-side.html)
- [Browserify の仕組み](http://benclinkinbeard.com/posts/how-browserify-works/)
- [Gulp + Browserify：すべてを扱う記事](https://www.viget.com/articles/gulp-browserify-starter-faq)
- [Browserify 対 Component](http://www.forbeslindesay.co.uk/post/44144487088/browserify-vs-component)
- [Webpack ユーザー向け Browserify](https://gist.github.com/substack/68f8d502be42d5cd4942)
- [Browserify 対 Webpack](https://mattdesl.svbtle.com/browserify-vs-webpack)

## デモ

- [Canvas Splitter](http://requirebin.com/?gist=maxogden/9576799)、作者：[hughsk](http://github.com/hughsk)
- [Infinite 2D Cave Generator](http://requirebin.com/?gist=maxogden/9557700)、作者：[hughsk](http://github.com/hughsk)
- [2D Velocity Control](http://requirebin.com/?gist=maxogden/9557776)、作者：[sethvincent](http://github.com/sethvincent)

## 動画

- [James Halliday（substack）- LXJS 2013 - Modularidade para todos](https://www.youtube.com/watch?v=DCQNm6yiZh0)
- [Browserify を始める](https://www.youtube.com/watch?v=CTAa8IcQh1U)、作者：[shama](https://github.com/shama/)
- [Browserify でバンドルを変換](https://www.youtube.com/watch?v=Uk2bgp8OLT8)、作者：[shama](https://github.com/shama/)

## ツール

### 開発サーバー

- [budo](https://github.com/mattdesl/budo) - 高速なプロトタイピング用の開発サーバー。
- [beefy](https://github.com/chrisdickinson/beefy) - Browserify を高速かつ楽しく使えるようにするローカル開発サーバー。
- [wzrd](https://github.com/maxogden/wzrd) - 非常に小さな Browserify 開発サーバー。

### プラグイン

- [browserify-hmr](https://github.com/AgentME/browserify-hmr) - Browserify 向け Hot Module Replacement プラグイン。

### 監視ツール

- [watchify](https://github.com/substack/watchify) - Browserify ビルドの監視モード。
- [persistify](https://github.com/royriojas/persistify) - 差分ビルドを実現する `browserify` のラッパー。

### CSS バンドラー

- [sheetify](https://github.com/stackcss/sheetify) - Browserify 向けのモジュール式 CSS バンドラー。
- [parcelify](https://github.com/rotundasoftware/parcelify) - Browserify で利用する npm モジュールへ CSS を追加。
- [css-modulesify](https://github.com/css-modules/css-modulesify) - CSS Modules を読み込む Browserify プラグイン。

### 変換

- [babelify](https://github.com/babel/babelify) - Babel 向け Browserify 変換。
- [aliasify](https://github.com/benbria/aliasify) - ビルド時に require 呼び出しを再マッピング。
- [brfs](https://github.com/substack/brfs) - `fs.readFileSync()` と `fs.readFile()` で静的アセットを扱う Browserify 変換。

### ブラウザー上の Node

- [crypto-browserify](https://github.com/crypto-browserify/crypto-browserify) - Node の `crypto` モジュールをブラウザーへ移植。
- [stream-browserify](https://github.com/substack/stream-browserify) - Node コアの `stream` モジュールをブラウザーで利用。
- [buffer](https://github.com/feross/buffer) - Node.js の `buffer` モジュールをブラウザーで利用。
- [requirebin](http://requirebin.com/) - NPM のモジュールを使ってブラウザー向け JavaScript プログラムを記述。

### 本番用ツール

- [wzrd.in](https://wzrd.in/) - Browserify CDN。サービスとしての Browserify。
- [bankai](https://github.com/yoshuawuyts/bankai) - 自作可能なアセットサーバー。HTML、CSS、JavaScript をストリームとして配信。

## 貢献

貢献を歓迎します。始める前に[貢献ガイドライン](https://github.com/browserify/awesome-browserify/blob/185b31da0995d9fe9a20f56add08c22406ed5be9/contributing.md)をお読みください。

## ライセンス

[Browserify のロゴ](https://github.com/browserify/awesome-browserify/blob/185b31da0995d9fe9a20f56add08c22406ed5be9/browserify.png)は [substack](https://github.com/substack) によるものです。

その他のすべてのコンテンツは、[CC0-1.0](https://spdx.org/licenses/CC0-1.0.html) に基づきパブリックドメインへ提供されます。

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
