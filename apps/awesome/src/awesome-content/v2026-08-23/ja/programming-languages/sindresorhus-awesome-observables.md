---
title: "sindresorhus/awesome-observables"
description: "sindresorhus/awesome-observables の定本スナップショット"
licenseSource: "github-sindresorhus-awesome-observables-readme-md"
---

# Awesome Observables [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> [Observable](https://github.com/zenparsing/es-observable) は時間とともに到着するコレクションです。Observableは、イベント、タイマー間隔、非同期リクエスト、アニメーションなどのプッシュ型データソースをモデル化するために使えます。Observableは配列のようなメソッドで変換、結合、消費できます。

*貢献する前に、[contribution guidelines](https://github.com/sindresorhus/awesome-observables/blob/5c069a64d68ce5206b404fb0f53fb58b439c772c/contributing.md) をお読みください。*

## 目次

- [ドキュメント](#documentation)
- [実装](#implementations)
- [パッケージ](#packages)
- [ライブラリ](#libraries)
- [記事](#articles)
- [動画](#videos)
- [関連](#related)

## ドキュメント

- [概要](https://github.com/tc39/proposal-observable)
- [仕様](https://tc39.github.io/proposal-observable/)

## 実装

- [zen-observable](https://github.com/zenparsing/zen-observable)
- [RxJS](https://github.com/ReactiveX/RxJS)

## パッケージ

- [ObservableLike](https://github.com/sindresorhus/type-fest/blob/main/source/observable-like.d.ts) - TypeScript型。
- [any-observable](https://github.com/sindresorhus/any-observable) - 任意のObservableライブラリとpolyfillをサポートします。
- [is-observable](https://github.com/sindresorhus/is-observable) - 値がObservableかを確認します。
- [observable-to-promise](https://github.com/sindresorhus/observable-to-promise) - ObservableをPromiseへ変換します。
- [stream-to-observable](https://github.com/jamestalmage/stream-to-observable) - Node.jsストリームをObservableへ変換します。
- [symbol-observable](https://github.com/blesh/symbol-observable) - `Symbol.observable` ponyfill。
- [obsify](https://github.com/samverschueren/obsify) - コールバック形式の関数をObservable化します。
- [localForage-observable](https://github.com/thgreasi/localForage-observable) - localForage用のObservableです。

## ライブラリ

*これらはObservableの力を活用するライブラリであり、必ずしも仕様互換のObservable実装ではありません。*

- [Cycle.js](http://cycle.js.org) - よりクリーンなコードのための、関数型かつリアクティブなJavaScriptフレームワーク。

## 記事

- [The introduction to Reactive programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) - Observableを使ったリアクティブプログラミング。
- [Everywhereness as a foundation](http://staltz.com/everywhereness-as-a-foundation.html) - あらゆる場所でObservableを使う利点。
- [Learning Observable By Building Observable](https://benlesh.com/posts/learning-observable-by-building-observable/) *(更新日 2021-07-08)*

## 動画

- [Introducing the Observable](https://egghead.io/lessons/javascript-introducing-the-observable) - Egghead.ioのレッスン。

## 関連

- [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs)
