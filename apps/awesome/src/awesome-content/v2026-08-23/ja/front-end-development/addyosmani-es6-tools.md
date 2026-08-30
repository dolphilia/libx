---
title: "addyosmani/es6-tools"
description: "addyosmani/es6-tools の正規スナップショット"
licenseSource: "github-addyosmani-es6-tools-readme-md"
---

# <img src="http://i.imgur.com/yy1sACZ.png" width="100px"/> ECMAScript 6ツール [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

## トランスパイラー <a id="transpilers"></a>

* [Babel](https://github.com/babel/babel) - ランタイムなしでES6+コードを通常のES5へ変換。
* [Traceur compiler](https://github.com/google/traceur-compiler) - ES6機能をES5へ変換。クラス、ジェネレーター、Promise、分割代入パターン、デフォルト引数などを含む。
* [es6ify](https://github.com/thlorenz/es6ify) - [Browserify](http://browserify.org/) v2 TransformとしてラップされたTraceur Compiler。
* [babelify](https://github.com/babel/babelify) - [Browserify](http://browserify.org/) TransformとしてラップされたBabelトランスパイラー。
* [es6-transpiler](https://github.com/termi/es6-transpiler) - ES6からES5へ変換。クラス、分割代入、デフォルト引数、Spreadを含む。
* Squareの[es6-module-transpiler](https://github.com/esnext/es6-module-transpiler) - ES6モジュールをAMDまたはCJSへ変換。
* Facebookの[regenerator](https://github.com/facebook/regenerator) - ES6のYield／Generator FunctionをES5へ変換。
* Facebookの[jstransform](https://github.com/facebookarchive/jstransform) - 差し替え可能なJS構文変換用のシンプルなユーティリティ。少数のES6からES5への変換を同梱。
* [defs](https://github.com/olov/defs) - ES6のブロックスコープconst／let変数をES3のvarへ変換。
* [es6_module_transpiler-rails](https://github.com/DavyJonesLocker/es6_module_transpiler-rails) - Rails Asset PipelineでES6モジュールを利用。
* ES6からES5へコンパイルする[Sweet.jsマクロ集](https://github.com/jlongster/es6-macros)ES6をES5にコンパイルするもの
* Bitoviの[transpile](https://github.com/stealjs/transpile) - ES6をAMD、CJS、StealJSへ変換。
* [regexpu](https://github.com/mathiasbynens/regexpu) — Unicode対応ES6正規表現をES5へ変換。
* [Lebab](https://github.com/mohebifar/lebab) - ES5コードからES6への近似的な変換。

## ビルド時トランスパイル <a id="build-time-transpilation"></a>

### Gulpプラグイン <a id="gulp-plugins"></a>
* Babel: [gulp-babel](https://github.com/babel/gulp-babel)
* Traceur: [gulp-traceur](https://github.com/sindresorhus/gulp-traceur)
* Regenerator: [gulp-regenerator](https://github.com/sindresorhus/gulp-regenerator)
* ES6 Module Transpiler: [gulp-es6-module-transpiler](https://github.com/ryanseddon/gulp-es6-module-transpiler)
* es6-transpiler: [gulp-es6-transpiler](https://github.com/sindresorhus/gulp-es6-transpiler) - ES6 → ES5
* es6-jstransform: [gulp-jstransform](https://github.com/hemanth/gulp-jstransform) - Facebookの[jstransform](https://github.com/facebook/jstransform)でES6 → ES5。
* regexpu: [gulp-regexpu](https://github.com/mathiasbynens/gulp-regexpu)
* TypeScript: [gulp-typescript](https://github.com/ivogabe/gulp-typescript)

### Gruntタスク <a id="grunt-tasks"></a>
* Babel: [grunt-babel](https://github.com/babel/grunt-babel) - ランタイムなしでES6+コードを通常のES5へ変換。
* Traceur: [grunt-traceur](https://github.com/aaronfrost/grunt-traceur) ES6からES5へのトランスパイル、[grunt-traceur-build](https://github.com/tarruda/grunt-traceur-build)
* ES6 Module Transpiler: [grunt-es6-module-transpiler](https://github.com/joefiorini/grunt-es6-module-transpiler)
* Regenerator: [grunt-regenerator](https://github.com/sindresorhus/grunt-regenerator) - ES6 Generator FunctionをES5へ変換。
* [grunt-microlib](https://github.com/thomasboyt/grunt-microlib) - ES6 Module Transpilerを使うライブラリ向けツール（[Gruntfileの例](https://github.com/jakearchibald/es6-promise/blob/c3336087fffc52e66cf5398e5b56b23a291080fc/Gruntfile.js)）。
* [grunt-defs](https://github.com/EE/grunt-defs) - ES6のブロックスコープconst／let変数をES3へ変換。
* es6-transpiler: [grunt-es6-transpiler](https://github.com/sindresorhus/grunt-es6-transpiler) - ES6 → ES5
* TypeScript: [grunt-ts](https://github.com/TypeStrong/grunt-ts) - ES6+からES5／ES3へのトランスパイル。

### Broccoliプラグイン <a id="broccoli-plugins"></a>
* Babel: [broccoli-babel-transpiler](https://github.com/babel/broccoli-babel-transpiler)
* Traceur: [broccoli-traceur](https://github.com/sindresorhus/broccoli-traceur)
* Regenerator: [broccoli-regenerator](https://github.com/sindresorhus/broccoli-regenerator)
* ES6 Transpiler: [broccoli-transpiler](https://github.com/sindresorhus/broccoli-es6-transpiler)
* ES6 Module Transpiler: [broccoli-es6-module-transpiler](https://github.com/mmun/broccoli-es6-module-transpiler)
* ES6 Fat Arrow Transpiler: [broccoli-es6-arrow](https://github.com/hemanth/broccoli-es6-arrow.git)
* TypeScript: [broccoli-tsc](https://github.com/ngParty/broccoli-tsc)

### Brunchプラグイン <a id="brunch-plugins"></a>
* Babel: [babel-brunch](https://github.com/babel/babel-brunch)
* ES6 Module Transpiler: [es6-module-transpiler-brunch](https://github.com/gcollazo/es6-module-transpiler-brunch)
* TypeScript: [typescript-brunch](https://github.com/joshheyse/typescript-brunch)

## Webpackプラグイン <a id="webpack-plugins"></a>
* Babel: [babel-loader](https://github.com/babel/babel-loader)
* Traceur: [traceur-compiler-loader](https://github.com/gdi2290/traceur-compiler-loader)
* TypeScript: [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader)

## Duoプラグイン <a id="duo-plugins"></a>
* Babel: [duo-babel](https://github.com/babel/duo-babel)
* TypeScript: [duo-typescript](https://github.com/frankwallis/duo-typescript)

## Connectプラグイン <a id="connect-plugins"></a>
* Babel: [babel-connect](https://github.com/babel/babel-connect)
* TypeScript: [typescript-middleware](https://github.com/brn/typescript-middleware)

## Gobbleプラグイン <a id="gobble-plugins"></a>
* Babel: [gobble-babel](https://github.com/babel/gobble-babel)
* Traceur: [gobble-es6-transpiler](https://github.com/gobblejs/gobble-es6-transpiler)

## Jadeプラグイン <a id="jade-plugins"></a>
* Babel: [jade-babel](https://github.com/babel/jade-babel)
* Traceur: [jade-traceur](https://www.npmjs.com/package/jade-traceur)

## Jestプラグイン <a id="jest-plugins"></a>
* Babel: [babel-jest](https://github.com/babel/babel-jest)

## Karmaプラグイン <a id="karma-plugins"></a>
* Babel: [karma-babel-preprocessor](https://github.com/babel/karma-babel-preprocessor)
* Traceur: [karma-traceur-preprocessor](https://github.com/karma-runner/karma-traceur-preprocessor)
* TypeScript: [karma-typescript-preprocessor](https://github.com/sergeyt/karma-typescript-preprocessor)

## Sprocketsプラグイン <a id="sprockets-plugins"></a>
* Babel: [sprockets-es6](https://github.com/josh/sprockets-es6)
* Traceur: [sprockets-traceur](https://github.com/gunpowderlabs/sprockets-traceur)
* TypeScript: [typescript-rails](https://github.com/typescript-ruby/typescript-rails)

## ブラウザープラグイン <a id="browser-plugins"></a>
* [Scratch JS](https://github.com/richgilbank/Scratch-JS) - BabelまたはTraceurを使い、ページ上でES6を実行するChrome／Opera DevTools拡張。
* [generator-typescript](https://github.com/mrkev/generator-typescript) - TypeScriptアプリ向けYeomanジェネレーター。

## Mochaプラグイン <a id="mocha-plugins"></a>
* [Mocha Traceur](https://github.com/domenic/mocha-traceur) - JSファイルをTraceur Compilerへ通すシンプルなMochaプラグイン。

## モジュールローダー <a id="module-loaders"></a>

* ES6 [Module Loader Polyfill](https://github.com/ModuleLoader/es6-module-loader)（最新仕様およびTraceur互換）。
* [js-loaders](https://github.com/jorendorff/js-loaders) - Mozillaの仕様準拠ローダープロトタイプ。
* [JSPM](http://jspm.io/) - ES6、AMD、CJSモジュールの読み込み／パッケージ管理。
* [Babel Module Loader](https://github.com/babel/babel-loader)
* [beck.js](https://github.com/unscriptable/beck) - ES6 Module Loaderパイプライン向けツールキット、旧環境向けShim。

## ボイラープレート <a id="boilerplates"></a>
* [es6-boilerplate](https://github.com/davidjnelson/es6-boilerplate) - AMDおよびブラウザーグローバルモジュールとTraceurを組み合わせ、Source Map、連結、最小化、圧縮、実ブラウザー上のユニットテストを使って今すぐES6を利用できるようにするツール群。
* [es6-jspm-gulp-boilerplate](https://github.com/alexweber/es6-jspm-gulp-boilerplate) - JSPMとBabelを組み合わせ、Source Map、連結、最小化、圧縮、ES6を使う実ブラウザー上のユニットテストにより今すぐES6を利用可能にするツール群。

## コード生成 <a id="code-generation"></a>

* [generator-node-esnext](https://github.com/briandipalma/generator-node-esnext) - Traceurアプリ向けYeomanジェネレーター。
* [generator-es6-babel](https://github.com/HenriqueLimas/generator-es6-babel) - Babelアプリ向けYeomanジェネレーター。
* [generator-gulp-babelify](https://github.com/HenriqueLimas/generator-gulp-babelify) - [Babel](https://babeljs.io/)、[Browserify](http://browserify.org/)、[Gulp](http://gulpjs.com/)向けYeomanジェネレーター。
* [grunt-init-es6](https://www.npmjs.com/package/grunt-init-es6) - ES6で記述し、ユニットテスト付きのNodeモジュールをひな形生成。
* [Loom generators with ES6 ember modules](https://github.com/ryanflorence/loom-generators-ember)
* ES6モジュールをトランスパイルするBrunch[プラグイン](https://www.npmjs.com/package/es6-module-transpiler-brunch)ES6モジュールのトランスパイル用

## Polyfill <a id="polyfills"></a>

* [core-js](https://github.com/zloirock/core-js) - Symbol、Map、Set、Iterator、Promise、setImmediate、Array Genericなどを含む、ES6向けモジュール式でコンパクトなPolyfill。[Babel](https://github.com/babel/babel)が使う標準ライブラリ。
* [es6-shim](https://github.com/paulmillr/es6-shim) - Map、Set、String、Array、Object、Object.isなど、ほぼすべての新しいES6メソッド。
* [WeakMap, Map, Set, HashMap - ES6 Collections](https://github.com/Benvie/harmony-collections)
* Polymerの[WeakMap Shim](https://github.com/Polymer/WeakMap)
* [`String.prototype.startsWith`](https://github.com/mathiasbynens/String.prototype.startsWith)
* [`String.prototype.endsWith`](https://github.com/mathiasbynens/String.prototype.endsWith)
* [`String.prototype.at`](https://github.com/mathiasbynens/String.prototype.at)
* [`String.prototype.repeat`](https://github.com/mathiasbynens/String.prototype.repeat)
* [`String.prototype.includes`](https://github.com/mathiasbynens/String.prototype.includes)
* [`String.prototype.codePointAt`](https://github.com/mathiasbynens/String.prototype.codePointAt)
* [`String.fromCodePoint`](https://github.com/mathiasbynens/String.fromCodePoint)
* [`Array.prototype.find`](https://github.com/paulmillr/Array.prototype.find)
* [`Array.prototype.findIndex`](https://github.com/paulmillr/Array.prototype.findIndex)
* [`Array.from`](https://github.com/mathiasbynens/Array.from)
* [`Array.of`](https://github.com/mathiasbynens/Array.of)
* [`Object.assign`](https://github.com/sindresorhus/object-assign)
* [`Number.isFinite`](https://github.com/sindresorhus/is-finite)
* [`Math.sign`](https://github.com/sindresorhus/math-sign)
* [`RegExp.prototype.match`](https://github.com/mathiasbynens/RegExp.prototype.match)
* [`RegExp.prototype.search`](https://github.com/mathiasbynens/RegExp.prototype.search)
* [es6-promise](https://github.com/jakearchibald/es6-promise) - ES6 APIに一致するPromise用Polyfill。
* [ES6 Map Shim](https://github.com/eriwen/es6-map-shim) - 最新仕様へ可能な限り忠実に従う破壊的Shim。
* [`Function.create`](https://github.com/walling/Function.create.js)
* [ES6 shim](https://github.com/inexorabletash/polyfill/blob/master/es6.md)
* [ES6 Symbol polyfill](https://github.com/medikoo/es6-symbol)
* [ES6 Map, Set, WeakMap](https://github.com/EliSnow/Blitz-Collections)
* [harmony-reflect](https://github.com/tvcutsem/harmony-reflect) - ES6の[Reflection Module](http://wiki.ecmascript.org/doku.php?id=harmony:reflect_api)（[Proxy API](http://soft.vub.ac.be/~tvcutsem/proxies/)を含む）。
* [純粋なCJS形式によるES5ベースShim](https://gist.github.com/medikoo/102b7d0e697627133788#list-of-ecmascript-6-shims) - Array、Object、Number、Math、Stringの関数／メソッドと、Map、Set、Symbol、WeakMapオブジェクト。

## エディター <a id="editors"></a>

* [Sublime TextとTextMate](https://github.com/Benvie/JavaScriptNext.tmLanguage)
* [WebStorm](https://www.jetbrains.com/webstorm/)と[PhpStorm](https://www.jetbrains.com/phpstorm/)のES6構文対応、および[File WatcherまたはTask Runner](http://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/)によるES5へのコンパイル。
* Traceur向けDocPad[プラグイン](https://github.com/pflannery/docpad-plugin-traceur)Traceur用
* 文法・トランスパイル[パッケージ](https://github.com/gandm/language-babel)。[Atom](https://atom.io/)向け。
* WebStormのES6トランスパイル選択肢を学ぶ[ブログ記事](http://blog.jetbrains.com/webstorm/2015/05/ecmascript-6-in-webstorm-transpiling/)。

## パーサー <a id="parsers"></a>

* [Esprima](http://esprima.org) - ES6対応JavaScriptパーサー。[ESTree AST形式](https://github.com/estree/estree)へ解析。
* [Acorn](https://github.com/ternjs/acorn) - ES6対応の小型・高速なJavaScript製JavaScriptパーサー。[SpiderMonkey AST](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API)形式へ解析。
* [esparse](https://github.com/zenparsing/esparse) - ES6で記述されたES6パーサー。
* [Traceur compiler](https://github.com/google/traceur-compiler)には、`traceur.syntax.Parser`で利用できる組み込みパーサーもある。

## その他 <a id="other"></a>

* [ES.next showcase](https://github.com/sindresorhus/esnext-showcase) - ES6機能の実世界での使用例。
* [looper](https://github.com/wycats/looper) - ES6向け静的解析ツール。
* [es6-module-packager](https://www.npmjs.com/package/es6-module-packager)
* [es-dependency-graph](https://github.com/yahoo/es-dependency-graph)と[grunt-es-dependency-graph](https://github.com/yahoo/grunt-es-dependency-graph) - ES6モジュールファイルからImport／Export一覧を生成し、事前読み込み、バンドルなどに利用。
* [es6-import-validate](https://github.com/sproutsocial/es6-import-validate)と[grunt-es6-import-validate](https://github.com/sproutsocial/grunt-es6-import-validate) - ES6モジュール内で名前付き／デフォルトImport文が対応するか検証。
* [let-er](https://github.com/getify/let-er) - ES6では採用されなかった[Let Blockのブロックスコープ](http://wiki.ecmascript.org/doku.php?id=proposals:block_expressions#let_statement)をES3またはES6へトランスパイル。
* [Recast](https://github.com/benjamn/recast) - EsprimaベースのJavaScript構文木変換器、保守的Pretty Printer、自動Source Map生成器。[regenerator](https://github.com/facebook/regenerator)や[es6-arrow-function](https://github.com/esnext/es6-arrow-function)など、上記の複数トランスパイラーが使用。
* [Paws on ES6](https://github.com/hemanth/paws-on-es6) - ES6機能の最小限の例。
* [ES6 on node](http://h3manth.com/new/blog/2013/es6-on-nodejs/) - Node.jsでES6機能を使う方法。
* [es6-translate](https://github.com/calvinmetcalf/es6-translate) - ES6 Loader Hookを使い、Node風CommonJSパッケージをES6で読み込む。
* [Isparta](https://github.com/douglasduteil/isparta)
* [babel-node](https://babeljs.io/docs/usage/cli/#babel-node) - BabelでES6をトランスパイルしながらNode CLIを実行。
* [ES6 Lab setup](https://github.com/hemanth/es6-lab-setup) - `Babel`または`traceur`でES6をES5へトランスパイルし、`gulp`と`jasmine`へ対応するシンプルな構成。
* [TypeScript](http://www.typescriptlang.org/) - ES6との整合を目指す、強い型付きECMAScriptスーパーセット。
* [Rollup](http://rollupjs.org/) - 次世代JavaScriptモジュールバンドラー。ES2015モジュールでアプリやライブラリを記述し、ブラウザーとNode.jsで使える単一ファイルへ効率的にバンドル。
