---
title: "parro-it/awesome-micro-npm-packages"
description: "parro-it/awesome-micro-npm-packages の正規スナップショット"
licenseSource: "github-parro-it-awesome-micro-npm-packages-readme-md"
---

# Awesome Micro npm Packages [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> 小さく焦点を絞ったNode.jsモジュールのキュレーションリスト。

*[awesome](https://github.com/sindresorhus/awesome)リストに着想を得たものです。*


## 記事

* [One-line node modules](https://github.com/sindresorhus/ama/issues/10)
* [Module best practices](https://github.com/mattdesl/module-best-practices)
* [Evaluating Packages Part 1 - Turn to community](http://bytearcher.com/articles/evaluating-packages-1-check-community/) 
* [Evaluating Packages Part 2 - Review repository](http://bytearcher.com/articles/evaluating-packages-2-review-repository/)
* [Small modules: it’s not quite that simple](https://medium.com/@Rich_Harris/small-modules-it-s-not-quite-that-simple-3ca532d65de4)
* [In Defense of Hyper Modular JavaScript](https://medium.freecodecamp.com/in-defense-of-hyper-modular-javascript-33934c79e113)
* [Tiny npm package: Guidelines to create a Node.js module following the small package philosophy](http://g14n.info/2015/12/tiny-npm-package/)
* [The cost of small modules](https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/)

## モジュール

### 配列

* [is-sorted](https://github.com/dcousens/is-sorted) - 配列がソート済みか確認する小さなモジュール。
* [array-first](https://github.com/jonschlinkert/array-first) - 配列の先頭要素、または先頭からn個の要素を取得する。
* [array-last](https://github.com/jonschlinkert/array-last) - 配列内の最後の要素を返す。
* [arr-flatten](https://github.com/jonschlinkert/arr-flatten) - 配列を再帰的にフラット化する。
* [dedupe](https://github.com/seriousManual/dedupe) - 配列から重複を削除する。
* [array-range](https://github.com/mattdesl/array-range) - 指定範囲の新しい配列を作成する。
* [arr-diff](https://github.com/jonschlinkert/arr-diff) - Returns an array with only the unique values from the first array, by excluding all values from additional arrays using strict equality for comparisons.
* [filled-array](https://github.com/sindresorhus/filled-array) - Returns an array filled with the specified input
* [map-array](https://github.com/parro-it/map-array) - オブジェクトのキーと値を配列にマップする。
* [in-array](https://github.com/jonschlinkert/in-array) - Return true if any of passed values exists in array - faster than using indexOf.
* [unordered-array-remove](https://github.com/mafintosh/unordered-array-remove) - Efficiently remove an element from an unordered array without doing a splice.
* [array-swap](https://github.com/michaelzoidl/swap-array) - Swap position of two items in an array.
* [mirrarray](https://github.com/johnwquarles/mirrarray) - Creates a keymirror object from an array of valid keys.
* [group-array](https://github.com/doowb/group-array) - オブジェクト配列をリストへグループ化する。
* [array.chunk](https://github.com/zhiyelee/array.chunk) - 配列／TypedArrayを指定サイズのチャンクに分割する。
* [fast-cartesian](https://github.com/ehmicky/fast-cartesian) - 高速な直積。

### 文字列

* [decamelize](https://github.com/sindresorhus/decamelize) - キャメルケース文字列をカスタム区切り文字付きの小文字へ変換する: unicornRainbow → unicorn_rainbow。
* [pad-left](https://github.com/jonschlinkert/pad-left) - Left pad a string with zeros or a specified string.
* [to-camel-case](https://github.com/ianstormtaylor/to-camel-case) - 文字列をキャメルケースへ変換する。
* [to-capital-case](https://github.com/ianstormtaylor/to-capital-case) - 文字列をキャピタルケースへ変換する。
* [to-constant-case](https://github.com/ianstormtaylor/to-constant-case) - 文字列をコンスタントケースへ変換する。
* [to-dot-case](https://github.com/ianstormtaylor/to-dot-case) - 文字列をドットケースへ変換する。
* [to-no-case](https://github.com/ianstormtaylor/to-no-case) - 文字列から既存のケースを除去する。
* [to-pascal-case](https://github.com/ianstormtaylor/to-pascal-case) - 文字列をパスカルケースへ変換する。
* [to-sentence-case](https://github.com/ianstormtaylor/to-sentence-case) - 文字列を文形式のケースへ変換する。
* [to-snake-case](https://github.com/ianstormtaylor/to-snake-case) - 文字列をスネークケースへ変換する。
* [to-space-case](https://github.com/ianstormtaylor/to-space-case) - 文字列をスペース区切りケースへ変換する。
* [to-title-case](https://github.com/ianstormtaylor/to-title-case) - 文字列をタイトルケースへ変換する。
* [node-slug](https://github.com/dodo/node-slug) - slugifies even utf-8 chars.
* [rtrim](https://github.com/sergejmueller/rtrim) - Strip whitespace - or other characters - from the end of a string.
* [slice.js](https://github.com/hustcc/slice.js) - Javascript library to enhance String.substring / Array.slice with python slice style.
* [strip-ansi](https://github.com/chalk/strip-ansi) - ANSIエスケープコードを除去する。
* [striptags](https://github.com/ericnorris/striptags) - An implementation of PHP's strip_tags in Node.js.
* [parse-next-json-value](https://github.com/ErikOnBike/parse-next-json-value) - Parse next JSON value from string allowing extraneous characters after value.
* [pluralize](https://github.com/DaniAkash/pluralizer) - A very tiny library to pluralize words


### 日付と時刻

* [pretty-ms](https://github.com/sindresorhus/pretty-ms) - ミリ秒を人間が読みやすい文字列へ変換する: 1337000000 → 15d 11h 23m 20s。
* [hirestime](https://github.com/seriousManual/hirestime) - A wrapper around the built-in high resolution timer which simplifies the calculation of timestamps.
* [periods](https://github.com/timruffles/periods) - Defined time-periods constants for Javascript, in milliseconds.
* [fecha](https://github.com/taylorhakes/fecha) - JavaScriptの日付の整形と解析。
* [akamai-time-reference](https://github.com/jucrouzet/akamai-time-reference) - Get reference time using Akamai's time reference service.
* [timeago.js](https://github.com/hustcc/timeago.js) - A tiny(~1.7kb) library used to format date with `*** time ago` statement.
* [count-days-in-month](https://github.com/shinnn/count-days-in-month) - 指定月の日数を取得する。
* [time-stamp](https://github.com/jonschlinkert/time-stamp) - 整形済みタイムスタンプを取得する。
* [twas](https://github.com/vutran/twas) - Generate a relative time string (Example: "3 seconds ago")

### オブジェクト

* [map-obj](https://github.com/sindresorhus/map-obj) - オブジェクトのキーと値を新しいオブジェクトへマップする。
* [filter-obj](https://github.com/sindresorhus/filter-obj) - オブジェクトのキーと値をフィルタリングする。
* [object-values](https://github.com/sindresorhus/object-values) - オブジェクトの値を取得する。
* [object-pairs](https://github.com/eush77/object-pairs) - Turn an object into list of [key, value] pairs for mapping, iterating or other purposes.
* [zipmap](https://github.com/landau/zipmap) - Returns a map with the keys mapped to the corresponding vals. zipmap also accepts a single value of objects or pairs.
* [just-pluck](https://github.com/jarofghosts/just-pluck) - Pluck without the madness.
* [deep-equal](https://github.com/substack/node-deep-equal) - Nodeのassert.deepEqual()アルゴリズムをスタンドアロンモジュールとして提供する。
* [deep-assign](https://github.com/sindresorhus/deep-assign) - 再帰的なObject.assign()。
* [set-value](https://github.com/jonschlinkert/set-value) - Create nested values and any intermediaries dot notation (`'a.b.c'`) paths.
* [get-value](https://github.com/jonschlinkert/get-value) - Use property paths (a.b.c) to get a nested value from an object.
* [has-value](https://github.com/jonschlinkert/has-value) - Returns true if a value exists, false if empty. Works with deeply nested values using dot notation (`'a.b.c'`) paths.
* [has-key-deep](https://github.com/ryanaghdam/has-key-deep) - Deep-search objects for keys. Keys can be searched by providing an array of keys, or using a dot-notiation.
* [flatkeys](https://github.com/ricardobeat/flatkeys) - Flatten object key hierarchies into a list of strings using a custom separator.
* [flatten-obj](https://github.com/watson/flatten-obj) - Converts an object literal with deeply nested nodes to a simple key/value object.
* [is-empty-object](https://github.com/gummesson/is-empty-object) - オブジェクトが空か確認する。
* [stringify-object](https://github.com/yeoman/stringify-object) - Stringify an object/array like JSON.stringify just without all the double-quotes.
* [sorted-object](https://github.com/domenic/sorted-object) - キーをソートしたオブジェクトのコピーを返す。
* [static-props](https://github.com/fibo/static-props) - Defines static object attributes using `Object.defineProperties`
* [missing-deep-keys](https://github.com/vladgolubev/missing-deep-keys) - Returns an array of keys from first object that are missing in second.
* [has-own-property](https://github.com/LinusU/has-own-property) - Check if an object has a local property. 
* [merge-objects](https://github.com/shevaroller/node-merge-objects) - Deep-merge two objects. Arrays that are values of the same object key get concatenated.
* [deep-object-diff](https://github.com/mattphillips/deep-object-diff) - Deep diff two JavaScript Objects while preserving the data structure. Including nested structures of Arrays and Objects.

### 関数

* [compose-function](https://github.com/stoeffel/compose-function) - 小さな関数から新しい関数を合成する`f(g(x))`。
* [curry](https://github.com/dominictarr/curry) - 複雑すぎないカリー化関数。
* [once](https://github.com/isaacs/once) - 関数を正確に一度だけ実行する。
* [deep-bind](https://github.com/jonschlinkert/deep-bind) - Bind a context to all functions in an object, including deeply nested functions.
* [identity-function](https://github.com/substack/identity-function) - 常に入力引数を返す。
* [mem](https://github.com/sindresorhus/mem) - An optimization technique used to speed up consecutive function calls by caching the result of calls with identical input.
* [throttle-debounce](https://github.com/niksy/throttle-debounce) - 関数をthrottle／debounceする。
* [compose-tiny](https://github.com/hipstersmoothie/compose-tiny) - A very tiny and fast compose function.

### 数学

* [is-even](https://github.com/jonschlinkert/is-even) - A good way to tell if a number is even or not (avoids type issues). Uses `is-odd` and `is-number` under the hood.
* [is-number](https://github.com/jonschlinkert/is-number) - 値が数値なら`true`を返す。
* [is-odd](https://github.com/jonschlinkert/is-odd) - A good way to tell if a number is odd or not (avoids type issues). Uses `is-number` under the hood.
* [easy-math.js](https://github.com/kingzez/easy-math.js) - A tiny easy math library including addition, multiplication, subtraction, and division.
* [my-prime](https://github.com/jinnatul/my-prime) - A good way to tell if a number is prime or not.
* [fun-gcd](https://github.com/zubayerhimel/fun-gcd) - A tiny math library to get gcd of two numbers using Euclidean algorithm

### ストリーム
* [through2](https://github.com/rvagg/through2) - Tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise.
* [through2-filter](https://github.com/brycebaril/through2-filter) - A through2 to create an Array.prototype.filter analog for streams.
* [through2-map](https://github.com/brycebaril/through2-map) - A through2 to create an Array.prototype.map analog for streams.
* [stream-spigot](https://github.com/brycebaril/node-stream-spigot) - テストや単純な関数のReadableストリーム化に役立つ、読み取り可能ストリームジェネレーター。
* [concat-stream](https://github.com/maxogden/concat-stream) - 文字列またはデータを連結し、結果をコールバックで返す書き込み可能ストリーム。
* [JSONStream](https://github.com/dominictarr/JSONStream) - ストリーミングJSON.parseおよびstringify。
* [through2-map-promise](https://github.com/RangerMauve/through2-map-promise) - A small promise-based wrapper for through2.
* [pump](https://github.com/mafintosh/pump) - ストリームをパイプし、いずれかが閉じたらすべて閉じる。
* [split](https://github.com/dominictarr/split) - ストリームを分割・再結合し、各行をチャンクにする。
* [is-stream](https://github.com/sindresorhus/is-stream) - 対象がNode.jsストリームか確認する。
* [syncthrough](https://github.com/mcollina/syncthrough) - Transform your data as it pass by, synchronously.


### Promise

* [pify](https://github.com/sindresorhus/pify) - コールバック形式の関数をPromise化する。
* [promise-all-props](https://github.com/Siilwyn/promise-all-props) - `Promise.all`に似ているが、オブジェクトプロパティ用。
* [sleep-promise](https://github.com/brummelte/sleep-promise) - 指定遅延後にPromiseをresolveする。
* [is-promise](https://github.com/then/is-promise) - オブジェクトがpromises-a+ Promiseのようかテストする。

### データ構造

* [quetie](https://github.com/TomerAberbach/quetie) - とてもかわいくて小さなqueue/deque実装。

### ファイルシステム

* [rimraf](https://github.com/isaacs/rimraf) - node用の深い削除モジュール（rm -rfのようなもの）。
* [mkdirp](https://github.com/substack/node-mkdirp) - mkdir -pのように再帰的にmkdirする。
* [du](https://github.com/rvagg/node-du) - du -sbのシンプルなJavaScript実装。
* [file-size](https://github.com/Nijikokun/file-size) - Lightweight filesize to human-readable / proportions w/o dependencies.
* [tmp](https://github.com/raszi/node-tmp) - node.js用の一時ファイル・ディレクトリ作成機能。
* [fs-promise](https://github.com/kevinbeaty/fs-promise) - Node fs methods as Promise/A+ (optional fs-extra, graceful-fs).
* [read-git-user](https://github.com/RocktimSaikia/read-git-user) - Reads the username and email from `.gitconfig` :wrench: and returns it as json object.

### ブラウザー

* [delegate](https://github.com/zenorocha/delegate) - 軽量なイベント委譲。
* [insert-css](https://github.com/substack/insert-css) - CSS文字列をheadへ挿入する。
* [dom-element-value](https://github.com/crysalead-js/dom-element-value) - DOM要素値のgetter/setter。
* [image-promise](https://github.com/bfred-it/image-promise) - Load one or more `<img>`s in a Promise.
* [get-media-size](https://github.com/bfred-it/get-media-size) - Get the original size of any `img`/`video`/`svg`/`canvas` tags or canvas context.
* [document-ready](https://github.com/bendrucker/document-ready) - モダンブラウザー用のdocument readyリスナー。
* [copee](https://github.com/styfle/copee) - ブラウザーからクリップボードへネイティブにテキストをコピーする。

### Semver

* [semver](https://github.com/npm/node-semver) - npmで使われるセマンティックバージョンパーサー。
* [semver-max](https://github.com/eush77/semver-max) - semverに従って最大（または最小）バージョンを見つける。
* [semver-first-satisfied](https://github.com/parro-it/semver-first-satisfied) - Find minimum in an array of version that satisfies a semver range.



### CLI

* [abbrev](https://github.com/isaacs/abbrev-js) - 指定された文字列集合に対する一意な略語の集合を計算する。
* [glob](https://github.com/isaacs/node-glob) - node.js向けのGlob機能。
* [username](https://github.com/sindresorhus/username) - 現在のユーザー名を取得する。
* [minimist](https://github.com/substack/minimist) - 引数オプションを解析する。
* [png-to-ico](https://github.com/steambap/png-to-ico) - Convert png to windows ico format.
* [help-version](https://github.com/eush77/help-version) - Easily handle --help and --version arguments in your CLI application

### モジュール管理

* [pkg-conf](https://github.com/sindresorhus/pkg-conf) - 最も近いpackage.jsonから名前空間付き設定を取得する。
* [normalize-pkg](https://github.com/jonschlinkert/normalize-pkg) - Normalize values in package.json to improve compatibility, programmatic readability and usefulness with third party libs.

### ジェネレーター

* [is-generator](https://github.com/blakeembrey/is-generator) - 指定値がジェネレーター関数か確認する。

### その他

* [uuid](https://github.com/kelektiv/node-uuid) - JavaScriptでRFC準拠UUIDを生成する。
* [node-mime](https://github.com/broofa/node-mime) - mime-dbモジュールに基づく包括的なMIME型マッピングAPI。
* [not-defined](https://github.com/fibo/not-defined) - Checks if foo is not defined, i.e. undefined, null, an empty string, array or object.
* [is-fqdn](https://github.com/parro-it/is-fqdn) - 文字列が完全修飾ドメイン名を表すか確認する。
* [shurley](https://github.com/BrunoBernardino/shurley) - Parses URLs from user input (with potential typos in protocols, bad copy+paste, etc.) and returns a proper URL.
* [mime-type-check](https://github.com/RocktimSaikia/mime-type-check) - 拡張子からファイルのMIME型を取得する。
* [nanoid](https://github.com/ai/nanoid) - A tiny (130 bytes), secure, URL-friendly, unique string ID generator for JavaScript

### ツール

* [npm-deprecated-check](https://github.com/KID-joker/npm-deprecated-check) - 非推奨パッケージを確認し、代替パッケージを推奨する。

## 関連リスト

このセクションには、小さなNPMモジュールを使用または作成する際に役立つawesomeリストを含めています。

* [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs) - 素晴らしいNode.jsパッケージとリソースのキュレーションリスト。
* [awesome-npm](https://github.com/sindresorhus/awesome-npm) - 優れたnpmリソースとヒント。

## フォローすべき小規模モジュールの達人

これらの人々は、単一責任の哲学に従う素晴らしいNPMモジュールを開発しています。
フォローして新たな優れたモジュールを見つけましょう:

[![Sindre Sorhus](https://avatars.githubusercontent.com/u/170270?s=130)](https://github.com/sindresorhus) | [![James Halliday](https://avatars1.githubusercontent.com/u/12631?s=130)](https://github.com/substack) | [![Eugene Sharygin](https://avatars3.githubusercontent.com/u/4472489?s=130)](https://github.com/eush77) | [![Isaac Z. Schlueter](https://avatars3.githubusercontent.com/u/9287?s=130)](https://github.com/isaacs) | [![Jon Schlinkert](https://avatars1.githubusercontent.com/u/383994?s=130)](https://github.com/jonschlinkert) | [![Dominic Tarr](https://avatars3.githubusercontent.com/u/259374?s=130)](https://github.com/dominictarr)
---|---|---|---|---|---
[Sindre Sorhus](https://github.com/sindresorhus) | [James Halliday](https://github.com/substack) | [Eugene Sharygin](https://github.com/eush77) | [Isaac Z. Schlueter](https://github.com/isaacs) | [Jon Schlinkert](https://github.com/jonschlinkert) | [Dominic Tarr](https://github.com/dominictarr)

[![Rod Vagg](https://avatars0.githubusercontent.com/u/495647?s=130)](https://github.com/rvagg) | [![Max Ogden](https://avatars3.githubusercontent.com/u/39759?s=130)](https://github.com/maxogden) | [![Brian Woodward](https://avatars1.githubusercontent.com/u/995160?s=130)](https://github.com/doowb)
---|---|---
[Rod Vagg](https://github.com/rvagg) | [Max Ogden](https://github.com/maxogden) | [Brian Woodward](https://github.com/doowb)


## コントリビュート

コントリビュートを歓迎します。まず[貢献ガイドライン](https://github.com/parro-it/awesome-micro-npm-packages/blob/525470df33d1d315a6d8f0441f51c6d414dbf80b/contributing.md)を読んでください。


## ライセンス

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法律で可能な限り、[Andrea Parodi](https://github.com/parro-it)はこの作品に関するすべての著作権および関連・近接権を放棄しています。
