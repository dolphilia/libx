---
title: "Awesome Browserify"
description: "Browserifyの資料、チュートリアル、記事、デモ、動画、開発・変換・CSS・Nodeモジュール・本番用のツールを案内します。"
licenseSource: "github-browserify-awesome-browserify-readme-md"
---

# Awesome Browserify

[Browserify](https://github.com/substack/node-browserify)は、依存関係をブラウザーで使えるようにバンドルするツールです。公式・コミュニティ資料、チュートリアル、記事、デモ、動画に加え、開発サーバー、プラグイン、ビルドの監視、CSSのバンドル、変換、ブラウザー向けNodeモジュール、本番用のツールを探せます。

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

- [Gulp + Browserify：総合解説](https://www.viget.com/articles/gulp-browserify-starter-faq)

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

- [budo](https://github.com/mattdesl/budo) - 迅速なプロトタイピング向けの開発サーバー。

- [beefy](https://github.com/chrisdickinson/beefy) - Browserifyをすばやく楽しく使うことを目指すローカル開発サーバー。

- [wzrd](https://github.com/maxogden/wzrd) - 最小限の構成のBrowserify開発サーバー。

### プラグイン

- [browserify-hmr](https://github.com/AgentME/browserify-hmr) - Browserify 向け Hot Module Replacement プラグイン。

### 監視ツール

- [watchify](https://github.com/substack/watchify) - Browserify ビルドの監視モード。

- [persistify](https://github.com/royriojas/persistify) - 増分ビルドを実現する `browserify` のラッパー。

### CSSバンドラー<a id="css-バンドラー"></a>

- [sheetify](https://github.com/stackcss/sheetify) - Browserify 向けのモジュール式 CSS バンドラー。

- [parcelify](https://github.com/rotundasoftware/parcelify) - Browserify で利用する npm モジュールへ CSS を追加。

- [css-modulesify](https://github.com/css-modules/css-modulesify) - CSS Modules を読み込む Browserify プラグイン。

### 変換

- [babelify](https://github.com/babel/babelify) - Babel 向け Browserify 変換。

- [aliasify](https://github.com/benbria/aliasify) - ビルド時に require 呼び出しを再マッピング。

- [brfs](https://github.com/substack/brfs) - `fs.readFileSync()` と `fs.readFile()` を使う静的アセット向けのBrowserify変換。

### ブラウザー上の Node

- [crypto-browserify](https://github.com/crypto-browserify/crypto-browserify) - Node の `crypto` モジュールをブラウザーへ移植。

- [stream-browserify](https://github.com/substack/stream-browserify) - Node コアの `stream` モジュールをブラウザーで利用。

- [buffer](https://github.com/feross/buffer) - Node.js の `buffer` モジュールをブラウザーで利用。

- [requirebin](http://requirebin.com/) - npmのモジュールを使ってブラウザー向け JavaScript プログラムを記述。

### 本番用ツール

- [wzrd.in](https://wzrd.in/) - Browserify CDN。サービスとしての Browserify。

- [bankai](https://github.com/yoshuawuyts/bankai) - 自分で構築できるアセットサーバー。HTML、CSS、JavaScript をストリームとして配信。
