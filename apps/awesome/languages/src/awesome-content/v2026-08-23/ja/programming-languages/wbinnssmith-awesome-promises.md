---
title: "Awesome Promises"
description: "Promisesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-wbinnssmith-awesome-promises-readme-md"
---

# Awesome Promises

Promisesを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## リソース、ブログ、書籍
### 初心者向け
* [Promise Cookbook](https://github.com/mattdesl/promise-cookbook) - なぜ、何を、どのように。「主にフロントエンド開発者へ向けた短い導入」。
* [Promises for Asynchronous Programming](http://exploringjs.com/es6/ch_promises.html) - [Exploring ES6](http://exploringjs.com/)の章。
* [You Don't Know JS: Promises](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/ch3.md) - [You Don't Know JS: Async & Performance](https://github.com/getify/You-Dont-Know-JS/tree/master/async%20%26%20performance)の章。
* [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/getting-started/primers/promises) - JavaScriptネイティブPromise実装の基礎。
* [JavaScript with Promises](http://shop.oreilly.com/product/0636920032151.do) - O'Reilly刊。短く要点を押さえ、ネイティブとbluebirdを使います。
* [Promise it won't hurt](https://github.com/stevekane/promise-it-wont-hurt) - 対話的な[nodeschool](https://nodeschool.io/)ワークショップ。
* [ES6 Kata Promises](http://es6katas.org/) - Promise Kata: [Basics](http://tddbin.com/#?kata=es6/language/promise/basics)。
* [ES6 Promises in Depth](https://ponyfoo.com/articles/es6-promises-in-depth)
* [An Incremental Tutorial on Promises](http://www.sohamkamani.com/blog/2016/08/28/incremenal-tutorial-to-promises/) - 初心者向けFAQ形式チュートリアル。
### 詳細解説
* [Promise Fun](https://github.com/sindresorhus/promise-fun) - @sindresorhusによるメモ、パターン、一般的なPromise問題の解決策。
* [You're Missing the Point of Promises](https://blog.domenic.me/youre-missing-the-point-of-promises/) - Promiseはコールバック集約以上のもので、jQueryの実装（3.0以前）だけでは不十分です。
* [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) - 「多くの人はPromiseを本当に理解せずに使っている」。
* [Promise anti-patterns](https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns) - よくある誤用と避け方。
* [Promise anti-patterns (2)](http://taoofcode.net/promise-anti-patterns/) - もう一組のPromiseアンチパターン。
* [Promise Ponderings, (Anti-)Patterns, and Apologies](https://sdgluck.github.io/2015/08/24/promise-ponderings-patterns-apologies/) - よくある質問と回答で示し説明するPromiseの振る舞い。
* [Javascript Promises...In Wicked Detail](http://www.mattgreer.org/articles/promises-in-wicked-detail/) - Promise実装を再現。
* [Writing Promise-Using Specifications](https://www.w3.org/2001/tag/doc/promises-guide) - 「Promiseを作成、受理、操作する仕様の書き方を案内する文書」。
* [Async functions - making promises friendly](https://developers.google.com/web/fundamentals/getting-started/primers/async-functions)
### リファレンス
* [Promises/A+ specification](https://promisesaplus.com/)
* [caniuse promises](http://caniuse.com/#feat=promises)
* [Fates and States](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) - 可能な状態の簡潔な定義。
* [Promisees](https://bevacqua.github.io/promisees/) - 冒険好きのためのPromise可視化プレイグラウンド。

## Promises/A+実装（ES6/ES2015互換）
### 厳密な実装
これらはes6仕様を過不足なく実装します。優れたpolyfillであり、ネイティブPromiseと非常に高い互換性があります。
* [pinkie](https://github.com/floatdrop/pinkie) - Ponyfill。Node指向ですが[browserify可能](https://github.com/substack/node-browserify)。*非常に*小さな実装。
* [native-promise-only](https://github.com/getify/native-promise-only) - Polyfill。ブラウザー・node互換。
* [es6-promise](https://github.com/stefanpenner/es6-promise) - オプトインpolyfill。rsvp.jsの厳密仕様サブセット。
* [lie](https://github.com/calvinmetcalf/lie) - 小型でbrowserify可能、オプトインpolyfillを備えます。

### 追加機能を持つ実装
これらは言語仕様より多くの機能を提供しながら互換性を保ちます。すべてNodeとブラウザーに対応します。
* [bluebird](https://github.com/petkaantonov/bluebird) - 完全機能で非常に高性能。長いスタックトレースとジェネレーター／コルーチンサポート。
* [creed](https://github.com/briancavalier/creed) - Bluebirdのように高性能・フル機能ですがFP指向。コルーチン、ジェネレーター、Promise、ES2015 iterable、fantasy-land仕様を備えます。
* [rsvp.js](https://github.com/tildeio/rsvp.js/) - 少数の追加機能を持つ軽量実装。IE6まで互換。
* [Q](https://github.com/kriskowal/q) - 最初期の実装の一つ。長いスタックトレースなどを提供。
* [then/promise](https://github.com/then/promise) - `nodeify`、`denodify`、`done()`を追加した小さな実装。
* [when.js](https://github.com/cujojs/when) - 制御フロー、関数型、ユーティリティメソッドを豊富に備えます。

### フォールバック
* [native-or-bluebird](https://www.npmjs.com/package/native-or-bluebird) - 完全ネイティブ実装への移行を助けます。
* [pinkie-promise](https://github.com/floatdrop/pinkie-promise) - ネイティブを使うか、`pinkie`へフォールバック。nodeライブラリ作者に最適。
* [any-promise](https://github.com/kevinbeaty/any-promise) - 最初に利用可能な実装を読み込みます。browserifyで安全。

## 便利なユーティリティ
ネイティブで厳密な仕様準拠のPromiseは、互換性、将来性、ライブラリ作者、ブラウザーのために優れています。しかしbluebirdのようなライブラリは、`Promise`コンストラクターとプロトタイプに便利な機能を追加します。解決策は小さなモジュールです。

### sindresorhusの多数のPromiseユーティリティ（[メモを見る](https://github.com/sindresorhus/promise-fun)）
* [delay](https://github.com/sindresorhus/delay) - 指定時間だけPromiseを遅延。
* [pify](https://github.com/sindresorhus/pify) - コールバック形式の関数をPromise化（「denodify」）。
* [loud-rejection](https://github.com/sindresorhus/loud-rejection) - 未処理Promise拒否を既定の静かな失敗でなく大きく失敗させる。
* [hard-rejection](https://github.com/sindresorhus/hard-rejection) - 未処理Promise拒否を既定の静かな失敗でなく直ちに厳しく失敗させる。
* [p-queue](https://github.com/sindresorhus/p-queue) - 並行制御を持つPromiseキュー。
* [p-break](https://github.com/sindresorhus/p-break) - Promiseチェーンから抜ける。
* [p-lazy](https://github.com/sindresorhus/p-lazy) - `.then()`または`.catch()`が呼ばれるまで実行を遅延するlazy Promiseを作成。
* [p-defer](https://github.com/sindresorhus/p-defer) - deferred Promiseを作成。
* [p-if](https://github.com/sindresorhus/p-if) - 条件付きPromiseチェーン。
* [p-tap](https://github.com/sindresorhus/p-tap) - 値・状態へ影響せずPromiseチェーンへ介入。
* [p-map](https://github.com/sindresorhus/p-map) - Promiseを並行してmap。
* [p-all](https://github.com/sindresorhus/p-all) - Promiseを返す関数とasync関数を、任意の制限付き並行度で並行実行。
* [p-limit](https://github.com/sindresorhus/p-limit) - Promiseを返す関数とasync関数を制限付き並行度で複数実行。
* [p-times](https://github.com/sindresorhus/p-times) - Promiseを返す関数とasync関数を指定回数、並行実行。
* [p-catch-if](https://github.com/sindresorhus/p-catch-if) - 条件付きPromise catchハンドラー。
* [p-time](https://github.com/sindresorhus/p-time) - Promiseが解決に要する時間を測定。
* [p-log](https://github.com/sindresorhus/p-log) - Promiseの値・エラーをログ出力。
* [p-filter](https://github.com/sindresorhus/p-filter) - Promiseを並行フィルター。
* [p-settle](https://github.com/sindresorhus/p-settle) - Promiseを並行してsettleし、完了値または拒否理由を得る。
* [p-memoize](https://github.com/sindresorhus/p-memoize) - Promiseを返す関数とasync関数をメモ化。
* [p-whilst](https://github.com/sindresorhus/p-whilst) - 条件がtrueを返す間、関数を反復呼出ししてからPromiseを解決。
* [p-throttle](https://github.com/sindresorhus/p-throttle) - Promiseを返す関数とasync関数をスロットル。
* [p-debounce](https://github.com/sindresorhus/p-debounce) - Promiseを返す関数とasync関数をデバウンス。
* [p-retry](https://github.com/sindresorhus/p-retry) - Promiseを返す関数またはasync関数を再試行。
* [p-wait-for](https://github.com/sindresorhus/p-wait-for) - 条件がtrueになるまで待機。
* [p-timeout](https://github.com/sindresorhus/p-timeout) - 指定時間後にPromiseをタイムアウト。
* [p-race](https://github.com/sindresorhus/p-race) - より良い`Promise.race()`。
* [p-try](https://github.com/sindresorhus/p-try) - `Promise#try()` ponyfill。Promiseチェーンを開始。
* [p-finally](https://github.com/sindresorhus/p-finally) - `Promise#finally()` ponyfill。結果にかかわらずPromiseのsettle時に呼出し。
* [p-any](https://github.com/sindresorhus/p-any) - いずれかのPromiseがfulfilledになるまで待機。
* [p-some](https://github.com/sindresorhus/p-some) - 指定数のPromiseがfulfilledになるまで待機。
* [p-pipe](https://github.com/sindresorhus/p-pipe) - Promiseを返す関数とasync関数を再利用可能なパイプラインへ合成。
* [p-each-series](https://github.com/sindresorhus/p-each-series) - Promiseを直列に反復。
* [p-map-series](https://github.com/sindresorhus/p-map-series) - Promiseを直列にmap。
* [p-reduce](https://github.com/sindresorhus/p-reduce) - Promiseを使って値のリストを一つの値のPromiseへreduce。
* [p-props](https://github.com/sindresorhus/p-props) - `Promise.all()`に似ていますが`Map`と`Object`向け。

### その他
* [promise-method](https://github.com/wbinnssmith/promise-method) - 単独の`bluebird.method`。同期戻り値メソッドをPromiseを返すメソッドへ変換。
* [is-promise](https://github.com/then/is-promise) - 何かがPromiseらしいかを判定。
* [sprom](https://github.com/then/sprom) - ストリーム終了時に解決。任意のバッファリング（注意してください）。
* [task.js](https://github.com/mozilla/task.js) - Promiseとジェネレーターを使い、ブロッキング風のスタイルでasync関数を記述。`bluebird.coroutine`に似ています。
* [co](https://github.com/tj/co) - `task.js`と`bluebird.coroutine`に似ていますが、thunkもサポート。
* [lie-fs](https://www.npmjs.com/package/lie-fs) - NodeのFS API向けPromiseラッパー。
* [promise-do-until](https://github.com/busterc/promise-do-until) - 条件がtrueを返すまで関数を反復呼出ししてからPromiseを解決。
* [promise-do-whilst](https://github.com/busterc/promise-do-whilst) - 条件がtrueを返す間、関数を反復呼出ししてからPromiseを解決。
* [promise-semaphore](https://github.com/samccone/promise-semaphore) - 実行する作業セットを構成可能な直列方式でpush。
* [promise-nodeify](https://github.com/kevinoid/promise-nodeify) - 解決または拒否時にNodeスタイルのコールバックを呼ぶ単独の`nodeify`メソッド。

## ライセンス
[Creative Commons CC0 License](https://creativecommons.org/publicdomain/zero/1.0/)の下でライセンスされています。
