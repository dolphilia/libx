---
title: "sorrycc/awesome-javascript"
description: "JavaScriptのパッケージ、フレームワーク、UI部品、ツール、学習資料集"
licenseSource: "github-sorrycc-awesome-javascript-readme-md"
---

# Awesome JavaScript [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sorrycc/awesome-javascript/)

awesome ブラウザ側 [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) ライブラリ、リソースおよび素晴らしいものたちのコレクション

* [Awesome JavaScript](#awesome-javascript)
  * [Package Managers](#package-managers)
  * [Component management](#component-management)
  * [Loaders](#loaders)
  * [Transpilers](#transpilers)
  * [Bundlers](#bundlers)
  * [Minimizers](#minimizers)
  * [Type Checkers](#type-checkers)
  * [Testing Frameworks](#testing-frameworks)
  * [QA Tools](#qa-tools)
  * [MVC Frameworks and Libraries](#mvc-frameworks-and-libraries)
  * [Node-Powered CMS Frameworks](#node-powered-cms-frameworks)
  * [Templating Engines](#templating-engines)
  * [Game Engines](#game-engines)
  * [Articles/Posts](#articles-and-posts)
  * [Data Visualization](#data-visualization)
    * [Timeline](#timeline)
    * [Spreadsheet](#spreadsheet)
  * [Editors](#editors)
  * [Documentation](#documentation)
  * Utilities
    * [Files](#files)
    * [Functional Programming](#functional-programming)
    * [Reactive Programming](#reactive-programming)
    * [Data Structure](#data-structure)
    * [Date](#date)
    * [String](#string)
    * [Number](#number)
    * [Storage](#storage)
    * [Color](#color)
    * [I18n And L10n](#i18n-and-l10n)
    * [Control Flow](#control-flow)
    * [Routing](#routing)
    * [Security](#security)
    * [Log](#log)
    * [RegExp](#regexp)
    * [Media](#videoaudio)
    * [Voice Command](#voice-command)
    * [API](#api)
    * [Streaming](#streaming)
    * [Vision Detection](#vision-detection)
    * [Browser Detection](#browser-detection)
    * [Operating System](#operating-system)
    * [Benchmark](#benchmark)
    * [Machine Learning](#machine-learning)
    * [Web Worker](#web-worker)
  * UI
    * [Code Highlighting](#code-highlighting)
    * [Loading Status](#loading-status)
    * [Validation](#validation)
    * [Keyboard Wrappers](#keyboard-wrappers)
    * [Tours And Guides](#tours-and-guides)
    * [Notifications](#notifications)
    * [Sliders](#sliders)
    * [Range Sliders](#range-sliders)
    * [Form Widgets](#form-widgets)
    * [Tips](#tips)
    * [Modals and Popups](#modals-and-popups)
    * [Scroll](#scroll)
    * [Menu](#menu)
    * [Table/Grid](#tablegrid)
    * [Frameworks](#frameworks-1)
    * [Boilerplates](#boilerplates)
    * [Image](#image)
  * [Gesture](#gesture)
  * [Maps](#maps)
  * [Typography](#typography)
  * [Animations](#animations)
  * [Image processing](#image-processing)
  * [ES6](#es6)
  * [Generators](#generators)
  * [Full Text Search](#full-text-search)
  * [SDK](#sdk)
  * [ORM](#orm)
  * [WebSockets](#websockets)
  * [Generative AI](#generative-ai)
  * [Misc](#misc)
* [Worth Reading](#worth-reading)
* [Other Awesome Lists](#other-awesome-lists)
* [Contributing](#contributing)

----

## Package Managers
*Host the JavaScript libraries and provide tools for fetching and packaging them.*

* [npm](https://www.npmjs.com/) - npmはJavaScript用のパッケージマネージャーです
* [Bower](https://github.com/bower/bower) - ウェブ向けのパッケージマネージャーです
* [component](https://github.com/componentjs/component) - より良いウェブアプリケーションを構築するためのクライアント側パッケージマネージャーです
* [spm](https://github.com/spmjs/spm) - まったく新しい静的パッケージマネージャーです
* [jam](https://github.com/caolan/jam) - ブラウザに焦点を当て、RequireJSと互換性のあるリポジトリを使用するパッケージマネージャーです
* [jspm](https://github.com/jspm/jspm-cli) - 摩擦のないブラウザパッケージマネージャーです
* [Ender](https://github.com/ender-js/Ender) - ライブラリなしのライブラリです
* [volo](https://github.com/volojs/volo) - テンプレートからフロントエンドプロジェクトを作成し、依存関係を追加し、生成されたプロジェクトを自動化します
* [Duo](https://github.com/duojs/duo) - Component、Browserify、Goの優れたアイデアを融合した次世代パッケージマネージャーで、フロントエンドコードの整理と作成を迅速かつ簡単に行えます
* [yarn](https://yarnpkg.com/) - 高速で信頼性があり、安全な依存関係管理です
* [pnpm](https://pnpm.io/) - 高速かつディスク空間効率の高いパッ連マネージャーです
* [bun](https://bun.sh/) - Bunは高速なJavaScript一括ツールキットです

## Component Management

* [Bit](https://github.com/teambit/bit) - アプリケーション間でReact、Angular、Nodeなど、コンポーネントを作成・検索・再利用できます

## Loaders
*Module or loading system for JavaScript.*

* [RequireJS](https://github.com/requirejs/requirejs) - JavaScript用のファイルとモジュールローダーです
* [browserify](https://github.com/substack/node-browserify) - Node.js方式のブラウザ側のrequire()です
* [SeaJS](https://github.com/seajs/seajs) - ウェブ向けのモジュールローダーです
* [HeadJS](https://github.com/headjs/headjs) - HEADに含まれる唯一のスクリプトです
* [lazyload](https://github.com/rgrove/lazyload/) - 極めて小さく、依存関係のない非同期JavaScriptおよびCSSローダーです
* [script.js](https://github.com/ded/script.js) - 非同期JavaScriptローダーおよび依存関係マネージャーです
* [systemjs](https://github.com/systemjs/systemjs) - AMD、CJSおよびES6仕様に準拠したモジュールローダーです
* [LodJS](https://github.com/yanhaijing/lodjs) - AMDに基づくモジュールローダー
* [ESL](https://github.com/ecomfe/esl) - ブラウザ向けモジュールローダーで、遅延定義とAMDをサポート
* [modulejs](https://github.com/lrsjng/modulejs) - 軽量なJavaScriptモジュールシステム

## Transpilers
*Software that converts the modern JavaScript syntax into the older JavaScript syntax.*

* [SWC](https://swc.rs/) - 拡張可能なRustベースのコンパイルプラットフォーム

## Bundlers

* [webpack](https://github.com/webpack/webpack) - ブラウザ向けのCommonJS/AMDモジュールをパッケージ化
* [Rollup](https://github.com/rollup/rollup) - 次世代ES6モジュールバンドラー
* [Brunch](https://github.com/brunch/brunch) - シンプルな宣言型設定で高速なフロントエンドWebアプリケーションビルドツール
* [Parcel](https://github.com/parcel-bundler/parcel) - 驚異的な速度で、設定不要のウェブアプリケーションバンドラー
* [Microbundle](https://github.com/developit/microbundle) - 設定不要の小さなモジュール向けバンドラー
* [FuseBox](https://github.com/fuse-box/fuse-box) - 正しい方法で作られたバンドラー
* [Snowpack](https://www.snowpack.dev/) - 現代ウェブ向けに設計された、驚異的に高速なフロントエンドビルドツール
* [bundle](https://bundle.js.org) - オンラインnpmパッケージサイズを迅速にチェックするツール
* [Vite](https://vite.dev/) - 次世代フロントエンドツール

# Minimizers

* [Terser](https://github.com/terser/terser) - ES6+向けのパーサー、マングラー、コンプレッサーツールキット
* [Uglify](https://github.com/mishoo/UglifyJS) - パーサー／マングラー／コンプレッサー／ビューティファイアツールキット

## Type Checkers

* [TypeScript](https://www.typescriptlang.org/) - JavaScriptのタイプを含む、プレーンJavaScriptにコンパイルされるスーパーセット
* [Flow.js](https://flow.org/) - Facebookから提供されるJavaScriptの静的型チェックツール
* [Hegel](https://hegel.js.org/) -  JavaScriptの静的型チェックツールで、型推論と強力な型システムに偏りをもつ
* [TypL](https://github.com/getify/TypL) - JavaScript関数の実行時型チェックを行う、Haskellに似たHindley-Milner型署名を使用
* [Hindley Milner Definitions](https://github.com/xodio/hm-def) - JavaScriptのタイプリントツールで、型推論に偏りをもつ
* [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema validation と組み込みの静的型推論
* [Yup](https://github.com/jquense/yup) - JavaScript のスキーマビルダーとバリデーター

## Testing Frameworks

### Frameworks

* [mocha](https://github.com/mochajs/mocha) - Node.js およびブラウザ用のシンプルで柔軟で楽しい JavaScript テストフレームワーク
* [jasmine](https://github.com/jasmine/jasmine) - DOMなしのシンプルな JavaScript テストフレームワーク
* [qunit](https://github.com/jquery/qunit) - 使いやすい JavaScript ユニットテストフレームワーク
* [jest](https://github.com/facebook/jest) - 手軽な JavaScript ユニットテスト
* [prova](https://github.com/azer/prova) - Tape と Browserify をベースとした Node.js およびブラウザ向けのテストランナー
* [DalekJS](https://github.com/dalekjs/dalek) - JavaScript を使って自動化されたクロスブラウザ機能テスト
* [Protractor](https://github.com/angular/protractor) - Protractor は AngularJS アプリケーション向けのエンドツーエンドテストフレームワークです
* [tape](https://github.com/substack/tape) - Node.js およびブラウザ向けのタップを生成するテストハーネス
* [TestCafe](https://github.com/DevExpress/testcafe) - 現代的なウェブ開発スタック向けの自動ブラウザテストです。
* [ava](https://github.com/avajs/ava) - 🚀 未来志向の JavaScript テストランナー
* [Cypress](https://www.cypress.io/) - ブラウザで実行されるものすべてを含むエンドツーエンドテストフレーム及びそれ以上の完全なテストフレームワーク
* [WebdriverI/O](https://webdriver.io/) - Node.js 用の次世代ブラウザおよびモバイル自動化テストフレームワーク
* [Suites](https://suites.dev) - 逆制御と依存性注入を扱うバックエンド向けのユニットテストフレームワーク

### Assertion

* [chai](https://github.com/chaijs/chai) - Node.js およびブラウザ向けの BDD/TDD アサーションフレームワーク（任意のテストフレームワークと組み合わせ可能）
* [Enzyme](https://airbnb.io/enzyme/index.html) - Enzyme は React 用の JavaScript テストユーティリティで、React コンポーネントの出力の確認・操作・走査を簡単に行えます
* [react testing library](https://github.com/kentcdodds/react-testing-library) - React DOM テストユーティリティのシンプルかつ完全なもので、良いテスト習慣を促進します
* [Sinon.JS](https://github.com/sinonjs/sinon) - JavaScript 用のテストスパイ、スタブ、モック
* [expect.js](https://github.com/Automattic/expect.js) - Node.JS およびブラウザ向けのミニマリズムな BDD 風アサーション
* [proxyquire](https://github.com/thlorenz/proxyquire) - Node.js の require をスタブ
* [Supertest](https://github.com/visionmedia/supertest) - REST APIのテストに使われる人気のHTTPアサيرテーションライブラリ。MochaやJestなどの他のテストフレームワークとよく組み合わせられる
* [Pocket Mocker](https://github.com/tianchangNorth/pocket-mocker) - ブラウザ内での可視ネットワークモックツール。fetch/XHRのインターセプションをサポート

### Coverage

* [istanbul](https://github.com/gotwarlost/istanbul) - もう一つのJSコードカバレッジツール
* [blanket](https://github.com/alex-seville/blanket) - JavaScript向けのシンプルなコードカバレッジライブラリ。ブラウザおよびnodejsでのインストールと使用が簡単なように設計されている
* [JSCover](https://github.com/tntim96/JSCover) - JSCoverはJavaScriptプログラムのコードカバレッジを測定するツール

### Runner

* [phantomjs](https://github.com/ariya/phantomjs) - スクリプタブルなヘッドレスWebkit
* [slimerjs](https://github.com/laurentj/slimerjs) - PhantomJSに似たGeckoを実行するツール
* [casperjs](https://github.com/casperjs/casperjs) - PhantomJSおよびSlimerJS向けのナビゲーションスクリプトとテストユーティリティ
* [zombie](https://github.com/assaf/zombie) - node.jsを用いた、驚異的に速いフルスタックヘッドレスブラウザテスト
* [totoro](https://github.com/totorojs/totoro) - シンプルかつ安定したクロスブラウザテストツール
* [karma](https://github.com/karma-runner/karma) - JavaScript向けの素晴らしいテストランナー
* [nightwatch](https://github.com/nightwatchjs/nightwatch) - node.jsおよびselenium webdriverに基づくUI自動テストフレームワーク
* [intern](https://github.com/theintern/intern) - JavaScript向けの次世代コードテストスタック
* [puppeteer](https://github.com/GoogleChrome/puppeteer) - 公式Google Chromeチームが開発したヘッドレスChromeのNode.js API
* [webdriverio](https://github.com/webdriverio/webdriverio) - Node.js向けの次世代WebDriverテスト自動化フレームワーク
* [taiko](https://github.com/getgauge/taiko) - Chromiumベースのブラウザを自動化するためのシンプルなAPIを持つNode.jsライブラリ
* [Playwright](https://github.com/microsoft/playwright) - Chromium、Firefox、WebKitを1つのAPIで自動化できるNode.jsライブラリ

## QA Tools

* [prettier](https://github.com/prettier/prettier) - Prettierは意見をもつコードフォーマッタ
* [JSHint](https://github.com/jshint/jshint/) - JSHintはJavaScriptコード内のエラーおよび潜在的な問題を検出するツール
* [jscs](https://github.com/jscs-dev/node-jscs) - JavaScriptコードスタイルチェックツール
* [jsfmt](https://github.com/rdio/jsfmt) - JavaScriptのフォーマット、検索、再構成に使用
* [jsinspect](https://github.com/danielstjules/jsinspect) - コピー＆ペーストされたコードや構造的に類似したコードの検出
* [buddy.js](https://github.com/danielstjules/buddy.js) - JavaScriptにおけるマジックナンバーの検出
* [ESLint](https://github.com/eslint/eslint) - JavaScriptにおけるパターンの特定と報告を完全にプラグイン可能なツール
* [JSLint](https://github.com/douglascrockford/JSLint) - 高基準、厳格かつ意見をもつコード品質ツール。JavaScriptの良い部分だけを残すことを目指している
* [JavaScript Standard Style](https://github.com/feross/standard) - 意見をもつ、設定不要のスタイルガイド、スタイルチェック、フォーマットツール
* [Pre-evaluate code at buildtime](https://github.com/kentcdodds/preval.macro) - ビルド時にフロントエンドJavaScriptコードを事前に評価
* [JS-Beautifier](https://github.com/beautify-web/js-beautify) - NPM CLIおよびライブラリによるJSコードのフォーマット
* [husky](https://github.com/typicode/husky) - 悪質なgitコミット、gitプッシュなどを防止
* [Rev-dep](https://github.com/jayu/rev-dep) - インポートのトレース、循環依存関係の特定、未使用コードの検出、nodeモジュールの整理 — すべて、高速なCLIから実行
* [fallow](https://github.com/fallow-rs/fallow) - JavaScriptおよびTypeScriptプロジェクトにおける無駄コード、重複、循環依存、複雑性の熱点を検出

## MVC Frameworks and Libraries

* [angular.js](https://github.com/angular/angular.js) - ウェブアプリ向けHTMLの拡張（非推奨）
* [angular](https://github.com/angular/angular) - Angularは、TypeScript/JavaScriptおよびその他の言語を使用してモバイルおよびデスクトップウェブアプリケーションを構築するための開発プラットフォーム
* [aurelia](http://aurelia.io) - モバイル、デスクトップ、ウェブ向けのJavaScriptクライアントフレームワーク
* [backbone](https://github.com/jashkenas/backbone) - モデル、ビュー、コレクション、イベントを用いてJSアプリケーションに骨格を提供
* [ember.js](https://github.com/emberjs/ember.js) - 野心的なウェブアプリケーションの開発に向けたJavaScriptフレームワーク
* [meteor](https://github.com/meteor/meteor) - 極めてシンプルで、データベースあり、データを線路上に、純粋なJavaScriptによるウェブフレームワーク
* [ractive](https://github.com/ractivejs/ractive) - 次世代DOM操作
* [vue](https://github.com/vuejs/vue) - インタラクティブなインターフェースを構築するための直感的、高速かつ合成可能なMVVM
* [svelte](https://github.com/sveltejs/svelte) - Svelteは、ウェブアプリケーションを構築する新しい方法。宣言的なコンポーネントを受取り、効率的なJavaScriptに変換し、DOMを精密に更新するコンパイラ
* [knockout](https://github.com/knockout/knockout) - Knockoutで、JavaScriptを使って豊かな、反応性の高いUIを作成することが容易になります。
* [spine](https://github.com/spine/spine) - JavaScriptアプリケーションの構築に用いる軽量なMVCライブラリ。
* [espresso.js](https://github.com/techlayer/espresso.js) - ユーザーインターフェースを作成するための最小限のJavaScriptライブラリ。
* [canjs](https://github.com/canjs/canjs) - JavaScriptで、より良く、速く、簡単に行えます。
* [react](https://reactjs.org/) - ユーザーインターフェースを作成するためのライブラリ。宣言的で、効率的で、非常に柔軟です。Virtual DOMと連携します。
* [hyperapp](https://github.com/hyperapp/hyperapp) - 1kbのJavaScriptライブラリで、フロントエンドアプリケーションを構築できます。
* [preact](https://github.com/developit/preact) - ES6 APIを同じくした、3kbのReactの高速な代替ライブラリ。コンポーネントとVirtual DOMをサポート。
* [nativescript](https://github.com/NativeScript/NativeScript) - JavaScriptで、本格的なクロスプラットフォームiOSおよびAndroidアプリを構築できます。
* [react-native](https://github.com/facebook/react-native) - Reactを用いたネイティブアプリの構築に使うフレームワーク。
* [riot](https://github.com/riot/riot) - Reactに似たライブラリですが、非常に小さいサイズです。
* [thorax](https://github.com/walmartlabs/thorax) - Backboneを活用したJavaScriptアプリケーションの強化。
* [chaplin](https://github.com/chaplinjs/chaplin) - Backbone.jsを用いた大規模JavaScriptアプリケーションの構築を簡易にするためのコンポジットアプリケーションライブラリ。
* [marionette](https://github.com/marionettejs/backbone.marionette) - 反応性ビューの構築に使う、極めて小さな基礎です。
* [ripple](https://github.com/ripplejs/ripple) - 軽量かつ強力なデータバインディングとテンプレート解決策。
* [rivets](https://github.com/mikeric/rivets) - リアルタイムで、協働できるアプリケーションを簡単に書けるMVCフレームワーク。Node.jsおよびブラウザで動作します。
* [derby](https://github.com/derbyjs/derby) - 素晴らしいderbyコンポーネントのコレクション
    * [derby-awesome](https://github.com/russll/awesome-derby) - シンプルで軽量な、永続的な両方向データバインディング。
* [way.js](https://github.com/gwendall/way.js) - MithrilはクライアントサイドMVCフレームワーク（軽量、堅牢、高速）。
* [mithril.js](https://github.com/lhorie/mithril.js) - jsblocksはより良いMV-ishフレームワーク。
* [jsblocks](https://github.com/astoilkov/jsblocks) - jsblocksはより良いMV-ishフレームワークです。
* [feathers](https://github.com/feathersjs/feathers) - 明日のアプリ向け、ミニマリズムを採用したリアルタイムJavaScriptフレームワーク
* [Keo](https://github.com/Wildhoney/Keo) - Shadow DOMをサポートする機能的な状態なしReactコンポーネント
* [atvjs](https://github.com/emadalam/atvjs) - 純粋JavaScriptを使用したApple TVアプリ開発に最適な高速化
* [Alpine.js](https://github.com/alpinejs/alpine) - VueやReactのような大きなフレームワークの反応性と宣言的性質を、非常に低いコストで提供
* [inferno](https://github.com/infernojs/inferno) - 🔥 モダンなUIを構築するための、非常に高速なReact風JavaScriptライブラリ
* [FoalTS](https://foalts.org) - ウェブアプリ開発に最適な、洗練されたかつ包括的なNode.JSフレームワーク（TypeScript）
* [Lucia](https://github.com/aidenybai/lucia) - 小さなウェブアプリ向け1kbのライブラリ
* [Adonis](https://github.com/adonisjs/core) - 開発者の使いやすさ、安定性、信頼性を極限まで重視したNode.jsフレームドーム
* [GrapesJS](https://github.com/artf/grapesjs) - 無料かつオープンソースのウェブビルダーフレームワーク。コードを書かずにテンプレートを作成する次世代ツール
* [Rete.js](https://github.com/retejs/rete) - 視覚プログラミングを可能にするモジュラーフレームワーク。ブラウザ上でノードベースのエディタを作成可能
* [litegraph.js](https://github.com/jagenjo/litegraph.js) - PDやUDK Blueprintsに類似したグラフノードエンジンとエディタ。HTML5 Canvas2Dに内蔵されたエディタを備えている
* [Drawflow](https://github.com/jerosoler/Drawflow) - データフローを簡単に、迅速に作成できるようになります
* [Blockly](https://github.com/google/blockly) - Googleが提供するウェブおよびモバイルアプリに視覚コードエディタを追加するライブラリ
* [Million](https://github.com/aidenybai/million) - <1kbのコンパイラ向け仮想DOM。非常に速い！
* [Whatsup](https://github.com/whatsup/whatsup) - chillout-mode開発向けのフロントエンドフレームワーク 🥤。JSXコンポーネントをジェネレータで使用し、高速なmobx風の状態管理と独自のcssxスタイルシステム
* [Remult](https://github.com/remult/remult) - フルスタックTypeScript向けのCRUDフレームワーク

## Node-Powered CMS Frameworks

* [KeystoneJS](https://github.com/keystonejs/keystone) - 強力なCMSおよびウェブアプリフレームワーク
* [Reaction Commerce](https://github.com/reactioncommerce/reaction) - 反応性CMS、リアルタイムアーキテクチャとデザイン
* [Ghost](https://github.com/tryghost/Ghost) - シンプルで強力な公開プラットフォーム
* [Apostrophe](https://github.com/punkave/apostrophe) - コンテンツ編集と基本サービスを備えたCMS
* [We.js](https://github.com/wejs/we/) - リアルタイムアプリ、サイト、ブログ向けのフレームワーク。
* [Hatch.js](https://github.com/inventures/hatchjs) - ソーシャル機能を備えたCMSプラットフォーム。
* [TaracotJS](https://github.com/xtremespb/taracotjs-generator/) - Node.jsをベースとした高速かつミニマリズムのCMS。
* [Nodizecms](https://github.com/nodize/nodizecms) - CoffeeScriptを愛するユーザー向けのCMS。
* [Cody](https://github.com/jcoppieters/cody) - WSYWYGエディタを備えたCMS。
* [PencilBlue](https://github.com/pencilblue/pencilblue/) - CMSおよびブログプラットフォーム。
* [Strapi](https://github.com/strapi/strapi) - オープンソースのNode.jsヘッドレスCMS。カスタマイズ可能なAPIを簡単に構築できる。
* [Factor](https://github.com/fiction-com/factor) - JavaScriptによるCMS。

## Templating Engines
*Templating engines allow you to perform string interpolation.*

* [mustache.js](https://github.com/janl/mustache.js) - JavaScriptで{{mustaches}}によるミニマムテンプレート。
* [handlebars.js](https://github.com/handlebars-lang/handlebars.js) - Mustacheテンプレート言語への拡張。
* [nunjucks](https://mozilla.github.io/nunjucks/) - Mozillaから提供されるJavaScript用の豊かなテンプレート言語。
* [hogan.js](https://github.com/twitter/hogan.js) - Mustacheテンプレート言語用のコンパイラ。
* [doT](https://github.com/olado/doT) - Node.jsおよびブラウザ向け、最も速く簡潔なJavaScriptテンプレートエンジン。
* [dustjs](https://github.com/linkedin/dustjs/) - ブラウザおよびNode.js向けの非同期テンプレート。
* [eco](https://github.com/sstephenson/eco/) - CoffeeScriptテンプレートの埋め込み。
* [JavaScript-Templates](https://github.com/blueimp/JavaScript-Templates) - 1KB未満の軽量で高速かつ強力なJavaScriptテンプレドエンジン（依存関係なし）。
* [t.js](https://github.com/jasonmoo/t.js) - ~400バイト（圧縮後）の極小JavaScriptテンプレートフレームワーク。
* [Pug](https://github.com/pugjs/pug) - Node.js向けの強固で洗練された、機能豊かなテンプレートエンジン（以前はJadeと呼ばれていた）。
* [EJS](https://github.com/mde/ejs) - 効果的なJavaScriptテンプレート。
* [xtemplate](https://github.com/xtemplate/xtemplate) - Node.jsおよびブラウザ向けの拡張可能なテンプレートエンジンライブラリ。
* [marko](https://github.com/marko-js/marko) - Node.jsおよびブラウザ向けの高速かつ軽量のHTMLベースのテンプレートエンジン。async、ストリーミング、カスタムタグおよびCommonJSモジュールをコンパイル出力として提供。
* [swig](https://github.com/paularmstrong/swig) - (アーカイブ済) 簡単で強力であり、拡張可能なNode.jsおよびブラウザベースのJavaScriptテンプレートエンジン。
* [hmpl](https://hmpl-lang.dev) - JavaScript向けサーバーオリエンテッドのカスタマイズ可能なテンプレート

## Game Engines
* [A-Frame](https://aframe.io) - Make WebVR.
* [Cocos](https://www.cocos.com) - Open Source Cross-Platform Game Development Framework.
* [Impact](https://impactjs.com) - Impact - HTML5 Canvas & JavaScript Game Engine.
* [GDevelop](https://gdevelop.io) - 無料で簡単なゲーム作成アプリ。
* [Kaboom.js](https://kaboomjs.com) - ゲーム開発用のライブラリで、ゲームを作成するのを速く楽しいものにします。
* [Matter.js](https://brm.io/matter-js) - 2D剛体のJavaScript物理エンジン
* [melonJS](https://melonjs.org) - オープンソースのHTML5ゲームエンジンで、開発者とデザイナーはコンテンツに集中できる。
* [Phaser](https://phaser.io) - フェイザー - 高速で楽しいかつ無料のオープンソースHTML5ゲームフレームワーク。
* [PixiJS](https://pixijs.com) - The HTML5 Creation Engine.
* [PlayCanvas](https://playcanvas.com) - PlayCanvas WebGL Game Engine.

## Articles and Posts

* [The JavaScript that you should know](https://medium.com/@pedropolisenso/o-javasscript-que-voc%C3%AA-deveria-conhecer-b70e94d1d706) - JavaScriptの関数型概念についての記事。
* [Multi-threading using web-workers](https://www.loginradius.com/blog/async/adding-multi-threading-to-javascript-using-web-workers/) - ウェブワーカー：JavaScriptにマルチスレッドを追加する
* [this keyword in JavaScript](https://www.loginradius.com/blog/async/breaking-down-this-keyword-in-javascript/) - JavaScriptにおける'this'キーワードを分解する

## Data Visualization
*Data visualization tools for the web.*

* [d3](https://github.com/d3/d3) - HTMLおよびSVG用のJavaScriptによる可視化ライブラリ。
* [metrics-graphics](https://github.com/mozilla/metrics-graphics) - 簡潔で原則に基づいたデータグラフとレイアウトに最適化されたライブラリ。
* [three.js](https://github.com/mrdoob/three.js) - JavaScriptによる3Dライブラリ
* [Chart.js](https://github.com/chartjs/Chart.js) - HTML5のチャートを&lt;canvas&gt;タグを使用してシンプルに実装。
* [paper.js](https://github.com/paperjs/paper.js) - ベクターグラフィックススクリプティングのスイス軍刀のようなツール – ScriptographerがJavaScriptとブラウザに移植され、HTML5 Canvasを使用しています。
* [fabric.js](https://github.com/kangax/fabric.js) - JavaScript キャンバスライブラリ、SVGからキャンバスへの変換（およびキャンバスからSVGへの変換）パーサー
* [peity](https://github.com/benpickles/peity) - プログレッシブな <svg> バー、ライン、ピエチャート
* [raphael](https://github.com/DmitryBaranovskiy/raphael) - JavaScript ベクターライブラリ
* [echarts](https://github.com/apache/echarts) - 企業向けチャート
* [visjs](https://github.com/visjs) - 動的かつブラウザベースのデータ可視化に用いる複数のライブラリ
* [two.js](https://github.com/jonobr1/two.js) - ウェブ向けのレンダラーに依存しない2次元描画API
* [g.raphael](https://github.com/DmitryBaranovskiy/g.raphael) - Raphaël向けのチャート
* [sigma.js](https://github.com/jacomyal/sigma.js) - グラフ描画に特化したJavaScriptライブラリ
* [arbor](https://github.com/samizdatco/arbor) - ウェブワーカーとjQueryを用いたグラフ可視化ライブラリ
* [cubism](https://github.com/square/cubism) - D3向けの時系列データ可視化プラグイン
* [dc.js](https://github.com/dc-js/dc.js) - crossfilterとd3.jsでレンダリングされたネイティブ対応の多次元チャート
* [vega](https://github.com/trifacta/vega) - 可視化の文法
* [envisionjs](https://github.com/HumbleSoftware/envisionjs) - 動的なHTML5可視化
* [rickshaw](https://github.com/shutterstock/rickshaw) - インタラクティブなリアルタイムグラフを作成するJavaScriptツールキット
* [flot](https://github.com/flot/flot) - jQuery向けに魅力的なJavaScriptチャート
* [morris.js](https://github.com/morrisjs/morris.js) - 美しく簡潔な時系列ラインチャート
* [nvd3](https://github.com/novus/nvd3) - d3.jsで再利用可能なチャートとチャートコンポーネントを作成
* [svg.js](https://github.com/wout/svg.js) - SVGの操作とアニメーションに特化した軽量ライブラリ
* [heatmap.js](https://github.com/pa7/heatmap.js) - HTML5キャンバスベースのヒートマップ用JavaScriptライブラリ
* [jquery.sparkline](https://github.com/gwatts/jquery.sparkline) - jQuery JavaScriptライブラリ向けにブラウザ内に直接生成する小さなスピーキングチャートのプラグイン
* [trianglify](https://github.com/qrohlf/trianglify) - d3.jsで構成された低多様体スタイルの背景生成器
* [d3-cloud](https://github.com/jasondavies/d3-cloud) - JavaScriptでワードクラウドを作成
* [d4](https://github.com/heavysixer/d4) - D3向けに親切で再利用可能なチャートDSL
* [dimple.js](http://dimplejs.org) - d3を活用したビジネス分析用の簡単なチャート
* [chartist-js](https://github.com/gionkunz/chartist-js) - シンプルでレスポンシブなチャート
* [epoch](https://github.com/epochjs/epoch) - 汎用的なリアルタイムチャートライブラリ
* [c3](https://github.com/c3js/c3) - D3をベースにした再利用可能なチャートライブラリ
* [BabylonJS](https://github.com/BabylonJS/Babylon.js) - HTML5とWebGLを用いた3Dゲーム開発フレームワーク
* [recharts](https://github.com/recharts/recharts) - ReactとD3を用いた再定義されたチャートライブラリ
* [GraphicsJS](https://github.com/AnyChart/GraphicsJS) - SVG/VML技術に基づく、直感的なAPIを持つ軽量JavaScriptグラフィックスライブラリ
* [mxGraph](https://github.com/jgraph/mxgraph) - ベンダーがサポートしている主要ブラウザでネイティブに動作するインタラクティブなグラフとチャートアプリケーションを迅速に作成できるダイアグラムライブラリ
* [Frappe Charts](https://github.com/frappe/charts) - GitHubをインスピレーションとして、ゼロ依存のシンプルで現代的なウェブSVGチャート
* [Frappe Gantt](https://github.com/frappe/gantt) - ウェブ向けのシンプルでインタラクティブな現代的なガントチャートライブラリ
* [G2](https://github.com/antvis/G2) - 統計チャート向けの高度にインタラクティブなデータ駆動型可視化文法
* [G2Plot](https://github.com/antvis/G2Plot) - グラフィックの文法に基づいたインタラクティブかつレスポンシブなチャートライブラリ
* [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - 完全機能のグラフ理論ライブラリ
* [cola.js](https://ialab.it.monash.edu/webcola/) - HTML5ドキュメントおよびダイアグラムの配置に制約に基づいた最適化技術を用いたライブラリ
* [jointjs](https://github.com/clientIO/joint) - 静的ダイアグラムまたは完全にインタラクティブなダイアグラムツールを作成できるダイアグラムライブラリ
* [vizzu](https://github.com/vizzuhq/vizzu-lib) - アニメーションされたデータ可視化およびデータストーリーを実現するライブラリ。
* [G6](https://github.com/antvis/g6) - グラフ可視化エンジン
* [Infographic](https://github.com/antvis/Infographic) - 次世代の宣言型インフォグラフィック可視化エンジン

また、いくつかの優れた商用ライブラリもあります。たとえば、[amchart](https://www.amcharts.com/)、[anychart](https://www.anychart.com/)、[plotly](https://plotly.com/)、および[lightning chart](https://www.arction.com/lightningchart-js/)です

## Timeline

* [TimelineJS v3](https://github.com/NUKnightLab/TimelineJS3) - JavaScriptで構成されたストーリーテリングタイムライン
* [timesheet.js](https://github.com/sbstjn/timesheet.js) - JavaScriptでシンプルなHTML5およびCSS3時間記録用のライブラリ

## Spreadsheet

* [HANDSONTABLE](https://github.com/handsontable/handsontable) - Handsontableは開発者向けのJavaScript/HTML5スプレッドシートライブラリ
* [Frappe Datatable](https://github.com/frappe/datatable) - Frappe DataTableは、テーブルデータを表示するためのシンプルで現代的かつインタラクティブなデータテーブルライブラリ
* [Luckysheet](https://github.com/mengshukeji/Luckysheet) - Luckysheetは、強力で設定が簡単で完全にオープンソースのオンラインスプレッドシート（Excelに似たもの）
 * [Jspreadsheet CE](https://github.com/jspreadsheet/ce) - Jspreadsheetは、軽量なvanilla JavaScriptプラグインで、他のスプレッドシートソフトウェアと互換性のあるウェブベースのインタラクティブなテーブルおよびスプレッドシートを作成できる
 * [RevoGrid](https://github.com/revolist/revogrid) - RevoGridは、現代的なウェブアプリケーション向けの高速かつレスポンシブなExcelのようなデータグリッドライブラリ

## Editors

* [ace](https://github.com/ajaxorg/ace) - Ace (Ajax.org Cloud9 Editor)
* [CodeMirror](https://github.com/codemirror/CodeMirror) - ブラウザ内コードエディタ
* [esprima](https://github.com/ariya/esprima) - マルチ用途分析用のECMAScriptパーサーインフラストラクチャ
* [quill](https://github.com/quilljs/quill) - クロスブラウザ対応の豊かなテキストエディタAPI
* [medium-editor](https://github.com/yabwe/medium-editor) - Medium.comのWYSIWYGエディタのクローン
* [pen](https://github.com/sofish/pen) - リアルタイム編集（＋マークダウン）を楽しむ
* [jquery-notebook](https://github.com/raphaelcruzeiro/jquery-notebook) - シンプルでクリーンでエレガントなテキストエディタ。Mediumの素晴らしさをインスピレーションとして作られた
* [bootstrap-wysiwyg](https://github.com/mindmup/bootstrap-wysiwyg) - Tiny bootstrap対応のWYSIWYG豊かなテキストエ連
* [ckeditor-releases](https://github.com/ckeditor/ckeditor-releases) - 誰にとっても最適なウェブテキストエディタ
* [editor](https://github.com/lepture/editor) - マークダウンエディタ。開発中です
* [EpicEditor](https://github.com/OscarGodson/EpicEditor) - スプリットフルスクリーン編集、リアルタイムプレビュー、自動ドラフト保存、オフライン対応などを備えた埋め込み型JavaScriptマークダウンエディタ
* [jsoneditor](https://github.com/josdejong/jsoneditor) - JSONを表示・編集・フォーマットするウェブベースツール
* [vim.js](https://github.com/coolwanglu/vim.js) - VimのJavaScript版で、persistent `~/.vimrc`を備えた
* [Squire](https://github.com/neilj/Squire) - HTML5豊かなテキストエディタ
* [TinyMCE](https://github.com/tinymce/tinymce) - JavaScriptの豊富なテキストエディタ。
* [trix](https://github.com/basecamp/trix) - 日常的な執筆向けの豊かなテキストエディタ。Basecampによって開発。
* [Trumbowyg](https://github.com/Alex-D/Trumbowyg) - 軽量で素晴らしいWYSIWYG JavaScriptエディタ。
* [Draft.js](https://github.com/facebook/draft-js) - テキストエディタを構築するためのReactフレームワーク。
* [bootstrap-wysihtml5](https://github.com/jhollingworth/bootstrap-wysihtml5) - シンプルで美しいWYSIWYGエディタ
* [wysihtml5](https://github.com/xing/wysihtml5) - HTML5とプログレッシブ強化アプローチをベースにしたオープンソースの豊富なテキストエディタ。高度なセキュリティ概念を採用し、維持不能なタグの混合やインラインスタイルを防止することで、完全に有効なHTML5マークアップを生成することを目的としている。
* [raptor-editor](https://github.com/PANmedia/raptor-editor) - ラプター、HTML5のWYSIWYGコンテンツエディタ！
* [popline](https://github.com/kenshin54/popline) - ポプリーンはHTML5の富テキストエディタのツールバーです。
* [Summernote](https://github.com/summernote/summernote) - 超シンプルなWYSIWYGエディタ。
* [Everright-formEditor](https://github.com/Liberty-liu/Everright-formEditor) - 視覚的なドラッグ＆ドロップによる低コードフォームエディタ

## Documentation

* [DevDocs](https://devdocs.io/) すべてのAPIドキュメントを1つにまとめた読み取りツールで、速く、整理され、一貫したインターフェースを提供します。
* [docco](http://ashkenas.com/docco/) は、簡易かつ粗末な、百行程度の、リテラートプログラミングスタイルのドキュメント生成ツールです。
* [styledocco](http://jacobrask.github.io/styledocco/) スタイルシートからドキュメントとスタイルガイドを生成します。
* [Ronn](https://github.com/rtomayko/ronn) マニュアルを生成します。シンプルで人間が読みやすいテキストファイルをターミナル表示用のroffに、およびウェブ表示用のHTMLに変換します。
* [dox](https://github.com/tj/dox) Node.jsで書かれたJavaScriptドキュメント生成ツールです。Doxはこれまでの見解をもとにした構造やスタイルを生成しなくなり、単にJSON形式の表現を提供するようになります。これにより、MarkdownやJSDocスタイルのタグを使用できます。
* [jsdox](https://github.com/sutoiku/jsdox) JSDoc3からマークダウンへのドキュメント生成ツールです。
* [ESDoc](https://github.com/esdoc/esdoc) JavaScript向けの優れたドキュメンテーション生成ツールです。
* [YUIDoc](http://yui.github.io/yuidoc/) ソースコード内のコメントからAPIドキュメントを生成するNode.jsアプリケーションで、JavadocやDoxygenのようなツールに類似する構文を使用しています。
* [coddoc](http://doug-martin.github.io/coddoc/) JSドキュメントを解析するライブラリです。Coddocは、ユーザーがcoddoc.addTagHandlerとcoddoc.addCodeHandlerを使用してタグやコードのパーサーを追加できるため、簡単に拡張可能です。また、CoddocはAPIに使用できるようにソースコードを解析します。
* [sphinx](http://www.sphinx-doc.org/) スマートで美しいドキュメンテーションを作成しやすいツール
* [Beautiful docs](https://github.com/beautiful-docs/beautiful-docs) マークダウンファイルに基づいたドキュメント閲覧ツールです。
* [documentation.js](http://documentation.js.org) - ES2015+およびflow注釈をサポートするAPIドキュメント生成ツール
* [jsduck](https://github.com/senchalabs/jsduck) - Sencha JavaScriptフレームワーク向けに開発されたAPIドキュメント生成ツールだが、他のフレームワークにも適用可能
* [codecrumbs](https://github.com/Bogdan-Lyashenko/codecrumbs) ソースコードにbreadcrumbを配置することで、コードベースを学習・記録するための視覚ツール

## Files
*Libraries for working with files.*

* [Papa Parse](https://github.com/mholt/PapaParse) - CSVファイルや文字列のパースおよびCSVへのエクスポートをサポートする強力なCSVライブラリ
* [jBinary](https://github.com/jDataView/jBinary) - バイナリファイルに対する高レベルI/O（読み込み、パース、操作、シリアライズ、保存）を、ファイルタイプおよびデータ構造を宣言的に記述するsyntaxで提供
* [diff2html](https://github.com/rtfpessoa/diff2html) - Git diff出力のパーサーおよび美しく整形されたHTML生成器
* [jsPDF](https://github.com/MrRio/jsPDF) - JavaScriptによるPDF生成
* [PDF.js](https://github.com/mozilla/pdf.js) - JavaScriptで実装されたPDFリーダー
* [File Viewer](https://github.com/flyfish-dev/file-viewer) - サーバー側変換なしでファイルをプレビューできるブラウザ本体のコンポーネント

## Functional Programming
*Functional programming libraries to extend JavaScript’s capabilities.*

* [underscore](https://github.com/jashkenas/underscore) - JavaScriptのユーティリティ_ベルト
* [lodash](https://github.com/lodash/lodash) - 一貫性、カスタマイズ、パフォーマンス、および追加機能を提供するユーティリティライブラリ
* [Sugar](https://github.com/andrewplummer/Sugar) - ネイティブオブジェクトを扱うためのJavaScriptライブラリ
* [lazy.js](https://github.com/dtao/lazy.js) - アンダースコアと同様だが、ラッジな実装
* [ramda](https://github.com/ramda/ramda) - JavaScript開発者向けの実用的な関数型ライブラリ
* [mout](https://github.com/mout/mout) - モジュラリティを持つJavaScriptユーティリティ
* [preludejs](https://github.com/alanrsoares/prelude-js) - JavaScript向けのハードコア関数型プログラミング
* [rambda](https://github.com/selfrefactor/rambda) - *Ramda*の高速かつ小型な代替品
* [fxts](https://github.com/marpple/FxTS) - 遅延評価と並列処理
* [wild-wild-path](https://github.com/ehmicky/wild-wild-path) - オブジェクトプロパティパスにワイルドカードと正規表現をサポート
* [sweet-monads](https://github.com/JSMonk/sweet-monads) - 人気のモナドと遅延イテレータを含むユーティリティライブラリ

## Reactive Programming
*Reactive programming libraries to extend JavaScript’s capabilities.*

* [RxJS](https://github.com/ReactiveX/rxjs) - JavaScript用の反応型プログラミングライブラリ。
* [Bacon](https://github.com/baconjs/bacon.js) - JavaScript用のFRP（関数型反応型プログラミング）ライブラリ。
* [Kefir](https://github.com/pozadi/kefir) - Bacon.jsおよびRxJSをインスピレーションとして、高性能かつ低メモリ消費を重視したJavaScript用FRPライブラリ。
* [Highland](https://caolan.github.io/highland/) - JavaScriptのユーティリティセットを再考。Highlandは、標準JavaScriptおよびノード風ストリームを用いて、同期および非同期コードを簡単に管理できる。
* [Most.js](https://github.com/cujojs/most) - 高性能なFRPライブラリ。
* [MobX](https://github.com/mobxjs/mobx) - シンプルでスケーラブルな状態管理用のTFRPライブラリ。
* [Cycle.js](https://cycle.js.org) - よりクリーンなコードを実現する、機能的かつ反応型のJavaScriptライブラリ。
* [concent](https://github.com/concentjs/concent) - React用の❤️シンプルで⚡️強力な状態管理。予測可能、進行的かつ効率的。
* [stunk](https://github.com/I-am-abdulazeez/stunk) フレームワークに依存しない状態管理ライブラリ。アプリの状態をシンプルかつクリーンに保ちます。細分化された状態モデルを採用し、状態を独立かつ管理しやすいブロックに分割します。

## Data Structure
*Data structure libraries to build a more sophisticated application.*

* [immutable-js](https://github.com/facebook/immutable-js) - 不変データコレクション（Sequence、Range、Repeat、Map、OrderedMap、Set、稀疏なVector）を提供。
* [mori](https://github.com/swannodette/mori) - ClojureScriptの持続的データ構造とサポートAPIを、シンプルなJavaScriptで利用できるライブラリ。
* [buckets](https://github.com/mauriciosantos/Buckets-JS) - 完全にテスト済みでドキュメント化されたJavaScriptによるデータ構造ライブラリ。
* [hashmap](https://github.com/flesler/hashmap) - 任意のキーをサポートするシンプルなハッシュマップ実装。
* [ngraph.graph](https://github.com/anvaka/ngraph.graph) - JavaScriptにおけるグラフデータ構造。
* [js-sdsl](https://github.com/zly201/js-sdsl) - C++ STLで実装されたJavaScript標準データ構造ライブランを参照。C++の両方向イテレータモードをサポート。

## Date
*Date Libraries.*

* [moment](https://github.com/moment/moment) - JavaScriptで日付をパース、検証、操作、表示する。
* [moment-timezone](https://github.com/moment/moment-timezone) - moment.jsにおけるタイムゾーンサポート。
* [jquery-timeago](https://github.com/rmm5t/jquery-timeago) - jQueryプラグインで、自動的にフェーズタイムスタンプ（例："4分前"）を更新しやすくする。
* [timezone-js](https://github.com/mde/timezone-js) - タイムゾーンをサポートしたJavaScriptのDateオブジェクト。オールソンゾーンインフォファイルを使用。
* [date](https://github.com/MatthewMueller/date) - 人間向けのDate()
* [ms.js](https://github.com/rauchg/ms.js) - ミリ秒単位の変換ツール
* [countdown.js](https://github.com/gumroad/countdown.js) - シンプルなカウントダウン
* [timeago.js](https://github.com/hustcc/timeago.js) - 日付を `*** time ago` 文字列でフォーマットするためのシンプルなライブラリ（2KB未満）
* [fecha](https://github.com/taylorhakes/fecha) - 軽量な日付フォーマットとパース（約2KB）。moment.jsのパースとフォーマット機能を置き換えるために設計されたもの。
* [date-fns](https://github.com/date-fns/date-fns) - 現代的なJavaScript日付ユーティリティライブラリ
* [map-countdown](https://github.com/dawidjaniga/map-countdown) - Google Mapsをベースにしたブラウザ用カウントダウン
* [dayjs](https://github.com/iamkun/dayjs) - Moment.jsと同等の現代的なAPIを持つ、2KBのインミュータブル日付ライブラリ（Day.js）
* [luxon](https://github.com/moment/luxon) - JavaScriptで日付と時刻を扱うためのライブラリ
* [tempo](https://github.com/formkit/tempo) - パース、フォーマット、タイムゾーン — TempoはネイティブDateオブジェクトに適用される小さなTree-shakableライブラリ

## String
*String Libraries.*

* [voca](https://github.com/panzerdp/voca) - JavaScriptの最終的な文字列ライブラリ
* [selecting](https://github.com/EvandroLG/selecting) - ユーザーが選択したテキストにアクセスできるライブラリ
* [underscore.string](https://github.com/epeli/underscore.string) - Underscore.js JavaScriptライブラリに追加された文字列操作拡張機能
* [string.js](https://github.com/jprichardson/string.js) - 追加のJavaScript文字列メソッド
* [he](https://github.com/mathiasbynens/he) - JavaScriptで書かれた強固なHTMLエンティティエンコーダー／デコーダー
* [multiline](https://github.com/sindresorhus/multiline) - JavaScriptにおけるマルチライン文字列
* [query-string](https://github.com/sindresorhus/query-string) - URLクエリ文字列のパースとストリング化
* [URI.js](https://github.com/medialize/URI.js/) - JavaScriptのURL変更ライブラリ
* [jsurl](https://github.com/Mikhus/domurl) - JavaScriptによる軽量なURL操作
* [sprintf.js](https://github.com/alexei/sprintf.js) - sprintfの実装
* [url-pattern](https://github.com/snd/url-pattern) - URLや他の文字列に対する正規表現より簡単な文字列マッチングパターン。文字列をデータに変換するか、データを文字列に変換するか。
* [plexis](https://github.com/plexis-js/plexis) - ローアイフ、強力で、コミュニティが中心の文字列操作ライブラリ。
* [url-state-machine](https://github.com/anonrig/url-js) - Node.js用の高速かつ仕様に準拠したURLパーサーの状態機械。

## Number

* [Numeral-js](https://github.com/adamwdraper/Numeral-js) - 数値のフォーマットと操作を行うJavaScriptライブラリ。
* [chance.js](https://github.com/chancejs/chancejs) - JavaScriptにおける乱数生成ヘルパー。数値、文字列などを作成可能。
* [odometer](https://github.com/HubSpot/odometer) - 数値のスムーズな変化を容易に実現。
* [accounting.js](https://github.com/josscrowcroft/accounting.js) - 数値、お金、通貨フォーマット用の軽量JavaScriptライブラリ。完全にローカライズ可能で、依存関係ゼロ。
* [money.js](https://github.com/josscrowcroft/money.js) - 1kbの小さなJavaScript通貨変換ライブラリ。ウェブおよびNode.js用。
* [Fraction.js](https://github.com/infusion/Fraction.js) - JavaScript用の有理数ライブラリ。
* [Complex.js](https://github.com/infusion/Complex.js) - JavaScript用の複素数ライブラリ。
* [Polynomial.js](https://github.com/infusion/Polynomial.js) - JavaScript用の多項式ライブラリ。
* [Quaternion.js](https://github.com/infusion/Quaternion.js) - JavaScript用の四元数ライブラリ。

## Storage

* [store.js](https://github.com/marcuswestin/store.js) - すべてのブラウザで動作するLocalStorageのラッパー。クッキーまたはフラッシュを使わず、内部でlocalStorage、globalStorage、userDataを活用。
* [localForage](https://github.com/mozilla/localForage) - オフラインストレージ、改善版。IndexedDB、WebSQL、またはlocalStorageをシンプルかつ強力なAPIでラップ。
* [jStorage](https://github.com/andris9/jStorage) - jStorageは、ブラウザ側にデータを保存するシンプルなキー/バリューデータベース。
* [cross-storage](https://github.com/zendesk/cross-storage) - クロスドメインローカルストレージ、権限付き。
* [basket.js](https://github.com/addyosmani/basket.js) - localStorageを使用したスクリプトとリソースローダー。キャッシュとロードを可能にする。
* [bag.js](https://github.com/nodeca/bag.js) - basket.jsに類似したキャッシュスクリプトとリソースローダー。追加のk/vインターフェースとlocalStorage / websql / indexedDBサポートを備える。
* [basil.js](https://github.com/Wisembly/basil.js) - JavaScriptのスマートかつ持続的な層の欠落。
* [jquery-cookie](https://github.com/carhartl/jquery-cookie) - シンプルで軽量なjQueryプラグイン。クッキーの読み取り、書き込み、削除を行う。
* [js-cookie](https://github.com/js-cookie/js-cookie) - シンプルで軽量なJavaScriptAPI。ブラウザのクッキーを扱うためのもの。
* [Cookies](https://github.com/ScottHamper/Cookies) - JavaScript クライアントサイドのクッキー操作ライブラリ
* [DB.js](https://github.com/aaronpowell/db.js/) - PromiseベースのIndexDBラッパーライブラリ
* [lawnchair.js](https://github.com/brianleroux/lawnchair/) - シンプルなクライアントサイドJSONストレージ
* [sql.js](https://github.com/kripken/sql.js) - Emscriptenを用いてJavaScriptにコンパイルされたSQLite
* [pouchdb](https://github.com/pouchdb/pouchdb) - Apache CouchDBをインスピレーションに受けてブラウザ内で効率的に動作するJavaScript DB
* [crumbsjs](https://github.com/nirtz89/crumbsjs) - 軽量なvanilla ES6クッキーとローカルストレージJavaScriptライブラリ
* [awesome-web-storage](https://github.com/softvar/awesome-web-storage) - クライアントサイドストレージに関するすべての知識
* [datavore](https://github.com/StanfordHCI/datavore) - JavaScriptで書かれた小さな高速なブラウザ内データベースエンジン
* [Hoodie](https://github.com/hoodiehq/hoodie) - インターネット接続なしでブラウザ内で動作するオフラインファーストバックエンド
* [NeDB](https://github.com/louischatriot/nedb) - ブラウザ、nw.js、electron向けの埋め込み型永続データベース
* [Lovefield](https://google.github.io/lovefield) - Googleが開発したウェブアプリ向けのリレーショナルデータベース「Lovefield」
* [Dexie.js](https://github.com/dexie/Dexie.js) - IndexedDB用のラッパーライブラリ「Dexie.js」
* [proxy-web-storage](https://github.com/KID-joker/proxy-web-storage) - ストレージの値の種類を変更せず、配列やオブジェクトを直接変更可能。変更を監視し、有効期限を設定可能
* [PostgreSQL Browser](https://github.com/datawan-labs/pg) - ブラウザ用PostgreSQLプレイグランド、サーバーなし、クライアントとpglite（PostgreSQL WASM）のみ

## Color

* [randomColor](https://github.com/davidmerfield/randomColor) - JavaScript用の色生成ツール
* [chroma.js](https://github.com/gka/chroma.js) - さまざまな色操作に使えるJavaScriptライブラリ
* [color](https://github.com/Qix-/color) - JavaScriptによる色変換と操作ライブラリ
* [colors](https://github.com/mrmrs/colors) - ウェブ上の色のデフォルト設定をスマートに最適化
* [PleaseJS](https://github.com/Fooidge/PleaseJS) - JavaScriptによるランダムで魅力的な色と色のテーマの生成ライブラリ
* [TinyColor](https://github.com/bgrins/TinyColor) - JavaScriptによる高速かつ小型の色操作と変換ライブラリ
* [Vibrant.js](https://github.com/jariz/vibrant.js/) - 画像から顕著な色を抽出する
* [color-space](https://github.com/colorjs/color-space) - 162の色空間間の変換（OKLCH、CAM16、Munsell、カメラログ）に引用文献を含む

## I18n And L10n
*Localization (l10n) and internationalization (i18n) JavaScript libraries.*

* [i18next](https://github.com/i18next/i18next) - JavaScriptで国際化（i18n）する簡単な方法
* [polyglot](https://github.com/airbnb/polyglot.js) - 小さなi18n補助ライブラリ
* [babelfish](https://github.com/nodeca/babelfish/) - 人間が使いやすいAPIと組み込みの複数形対応を備えたi1及
* [ttag](https://github.com/ttag-org/ttag) - ES6タグテンプレートと古くからのGNU gettextをベースにした現代的なJavaScript国際化ライブラリ
* [attranslate](https://github.com/fkirc/attranslate) - JavaScriptによる翻訳ファイルの同期ツール（JSON/YAML/XMLなど、他のフォーマットも含む）

## Control Flow

* [async](https://github.com/caolan/async) - Node.jsおよびブラウザ向けの非同期ユーティリティ
* [q](https://github.com/kriskowal/q) - JavaScriptで非同期のプロミスを作成・組み合わせるツール
* [step](https://github.com/creationix/step/) - 非同期の制御フローを簡単に扱えるライブラリ
* [contra](https://github.com/bevacqua/contra/) - 非同期フロー制御に機能的な要素を加えたライブラリ
* [Bluebird](https://github.com/petkaantonov/bluebird/) - 完全なプロミスライブラリで、革新的な機能とパフォーマンスに焦点を当てる
* [when](https://github.com/cujojs/when) - 堅牢で高速なPromises/A+およびwhen()の実装、その他非同期の便利な機能を備えたライブラリ
* [ObjectEventTarget](https://github.com/gartz/ObjectEventTarget) - イベントリスナーにサポートを追加するプロトタイプを提供（ブラウザ上のDOM要素に存在するEventTargetの動作を再現）
* [sporadic](https://github.com/marcoonroad/sporadic) - プロミスに基づくコンカレンシー抽象化（ストリーム、コルーチン、Go風チャンネルなど）をNodeおよびブラウザエンジンに適用

## Routing

* [director](https://github.com/flatiron/director) - JavaScript用の小さな同士対応URLルーター
* [page.js](https://github.com/visionmedia/page.js) - Expressルーターにインスパイアされたマイクロクライアントサイドルーター（約1200バイト）
* [pathjs](https://github.com/mtrpcic/pathjs) - ウェブブラウザ向けのシンプルで軽量なルーティング
* [crossroads](https://github.com/millermedeiros/crossroads.js) - JavaScript Routes
* [davis.js](https://github.com/olivernn/davis.js) - pushStateを使用したRESTフルかつ降格可能なJavaScriptルーティング
* [navaid](https://github.com/lukeed/navaid) - ブラウザ用のナビゲーション補助ツール（別名、ルーター）で850バイト！
* [speedy-router](https://github.com/anonrig/router) - TanStack Router APIが、より速いナビゲーションとSSRのために再構築されました

## Security

* [DOMPurify](https://github.com/cure53/DOMPurify) - HTML、MathML、SVGに対応するDOMのみの、非常に高速かつ非常に耐性のあるXSSセイフティ処理ツール
* [js-xss](https://github.com/leizongmin/js-xss) - 白リストで指定された設定により、信頼できないHTMLをセイフティ処理（XSS防止）します
* [xss-filters](https://github.com/yahoo/xss-filters) - Yahooが提供するセーフなXSSフィルタ
* [sanitize-html](https://github.com/apostrophecms/sanitize-html) - sanitize-htmlは、シンプルなHTMLセイフティ処理ツールを提供し、明確なAPIを持ちます
* [pompelmi](https://github.com/pompelmi/pompelmi) - Node.js用の高速ファイルアップロード時のマルウェアスキャン

## Log

* [log](https://github.com/adamschwartz/log) - スタイル付きのConsole.log
* [Conzole](https://github.com/Oaxoa/Conzole) - JavaScriptで構築されたデバッグパネル。ページ内に表示されるパネルで、JavaScriptのネイティブconsoleオブジェクトのメソッドと機能をラップしています
* [console.log-wrapper](https://github.com/patik/console.log-wrapper) - どのブラウザでも明確にログを出力できます
* [loglevel](https://github.com/pimterry/loglevel) - JavaScript用の最小限の軽量ログ、既存のconsole.logメソッドに信頼性のあるログレベルメソッドを追加
* [minilog](http://mixu.net/minilog/) – 軽量なクライアントおよびサーバー側ログ、Stream-APIバックエンドを採用
* [storyboard](http://guigrpa.github.io/storyboard/) - ユニバーサルなログライブラリ＋Chrome拡張機能。ユーザーの操作によってトリガーされたすべてのクライアントおよびサーバーのタスクを1か所で確認できます
* [LogTape](https://logtape.org/) - Deno、Node.js、Bun、ブラウザ、エッジ関数に適合するゼロ依存のシンプルなログライブラリ

## RegExp
* [RegEx101](https://regex101.com/#javascript) - JavaScript用のオンライン正規表現テストツールおよびデバッガ。Python、PHP、PCREもサポート
* [RegExr](https://regexr.com/) - HTML/JSベースのツールで、正規表現の作成、テスト、学習ができます
* [Regulex](https://jex.im/regulex/) - JavaScriptの正規表現パーサーおよび可視化ツール
* [Regex-Vis](https://regex-vis.com/) - 正規表現の可視化ツールおよびエディタ

## Voice Command

* [annyang](https://github.com/TalAter/annyang) - あなたのサイトに声命令を追加するためのJavaScriptライブラリ。話す認識を用います
* [voix.js](https://github.com/pazguille/voix) - あなたのサイト、アプリ、ゲームに声命令を追加するためのJavaScriptライブラリ

## API

* [axios](https://github.com/axios/axios) - ブラウザおよびnode.js向けのPromiseベースのHTTPクライアント
* [bottleneck](https://github.com/SGrondin/bottleneck) - 強力なレート制御機能で、制限を簡単に実装可能
* [oauth-signature-js](https://github.com/bettiolo/oauth-signature-js) - node.jsおよびブラウザ向けのJavaScript OAuth 1.0a署名生成器
* [amygdala](https://github.com/lincolnloop/amygdala) - JavaScriptを用いたウェブアプリケーション向けのRESTフルHTTPクライアント
* [jquery.rest](https://github.com/jpillora/jquery.rest) - jQuery向けのRESTフルAPIを簡単に利用できるプラグイン
* [Rails Ranger](https://github.com/victor-am/rails-ranger) - Ruby on Rails API向けの意見を反映したRESTクライアント
* [wretch](https://github.com/elbywan/wretch) - fetchを囲んだ極めて小さなラッパーで、直感的な構文を提供
* [FarFetch](https://github.com/WebsiteBeaver/far-fetch) - シンプルさを重視したModern Fetch APIラッパー、簡潔なファイルアップロードをサポート
* [Optic](https://github.com/opticdev/optic) - Optic は、API を自動的にドキュメント化し、テストするツール。
* [SWR](https://github.com/vercel/swr) - React向けのリモートデータ取得用のHooksライブラリ
* [React Query](https://github.com/tannerlinsley/react-query) - Reactで非同期データの取得・キャッシュ・更新に使えるHooks
* [SWRV](https://github.com/Kong/swrv) - Vue向けのStale-while-revalidateデータ取得
* [Vue Query](https://github.com/DamianOsipiuk/vue-query) - Vueで非同期データの取得・キャッシュ・更新に使えるHooks

## Streaming

* [Tailor](https://github.com/zalando/tailor) - FacebookのBigPipeをインスピレーションに受けて開発されたフロントエンドマイクロサービス向けのストリーミングレイアウトサービス
* [Markstream](https://github.com/Simon-He95/markstream-vue) - Vue、React、Svelte、Angularを対象としたAIチャットインターフェース向けのストリーミングMarkdownレンダラー

## Vision Detection

* [tracking.js](https://github.com/eduardolundgren/tracking.js) - ウェブ上でコンピュータビジョンを実現するための現代的なアプローチ
* [ocrad.js](https://github.com/antimatter15/ocrad.js) - Emscriptenを用いたJavaScriptによるOCR

## Machine Learning

* [ConvNetJS](https://github.com/karpathy/convnetjs) - JavaScriptによるディープラーニング。ブラウザ内でコネクショナルニューラルネットワーク（または普通のネットワーク）を訓練可能
* [DN2A](https://github.com/dn2a/dn2a-javascript) - デジタルニューラルネットワークアーキテクチャ
* [Brain.js](https://github.com/harthur/brain) - JavaScriptによるニューラルネットワーク
* [Mind.js](https://github.com/stevenmiller888/mind) - 柔軟なニューラルネットワークライブラリ
* [Synaptic.js](https://github.com/cazala/synaptic) - node.jsおよびブラウザ向けのアーキテクチャフリーのニューラルネットワークライブラリ
* [TensorFlow.js](https://www.tensorflow.org/js/) - ブラウザおよびNode.js上で機械学習モデルを訓練・デプロイするためのJavaScriptライブラリ
* [ml5.js](https://ml5js.org) - ウェブ向けの親しみやすい機械学習
* [Synapses](https://github.com/mrdimosthenis/Synapses) - 軽量かつプラットフォームを越えたニューラルネットワークライブラリ
* [m2cgen](https://github.com/BayesWitnesses/m2cgen) - 訓練済み古典機械学習モデルをゼロ依存のネイティブJavaScriptコードに変換するCLIツール
* [JS-PyTorch](https://github.com/eduardoleao052/js-pytorch) - JavaScriptでGPU加速されたPyTorch

## Browser Detection

* [bowser](https://github.com/ded/bowser) - ブラウザの検出ツール

## Operating System
* [os.js](https://github.com/os-js/OS.js) - ウィンドウマネージャー、アプリケーションAPI、GUIツールキット、ファイルシステム抽象化など、多くの機能を備えたオープンソースウェブデスクトッププラットフォーム

## Benchmark

* [benchmark.js](https://github.com/bestiejs/benchmark.js) - jsPerf.comで使用されているベンチマークライブラリ
* [matcha](https://github.com/logicalparadox/matcha) - カフェインを基にしたシンプルなベンチマークアプローチ
* [bencher](https://github.com/bencherdev/bencher) - CI でパフォーマンスの劣化を検出するための継続的なベンチマークツールセット。

## Web Worker

* [partytown](https://github.com/BuilderIO/partytown) - リソース消費の多い第三者スクリプトをメインスレッドからWeb Workerに移動
* [comlink](https://github.com/GoogleChromeLabs/comlink) - Comlinkは小さなライブラリ（1.1kB）で、postMessageの思考を心理的に障壁として取り除き、ワーカーとの作業を隠蔽する
* [greenlet](https://github.com/developit/greenlet) - 非同期関数を独自のスレッドに移動
* [workerize](https://github.com/developit/workerize) - モジュールをWebワーカーに移動し、エクスポートされた関数を自動的に非同期プロキシとして反映
* [worker-dom](https://github.com/ampproject/worker-dom) - Webワーカー内で実行されるDOM APIの進行中の実装
* [threads.js](https://github.com/andywer/threads.js) - node.js、ウェブブラウザ、electronでCPU負荷の高いタスクをワーカースレッドにオフロードするための統一API
* [workly](https://github.com/pshihn/workly) - 関数やクラスをWebワーカーに移動する非常にシンプルな方法
* [stockroom](https://github.com/developit/stockroom) - ストア管理をワーカーに簡単にオフロード
* [workerpool](https://github.com/josdejong/workerpool) - node.jsおよびブラウザ上でワーカーのプールにタスクをオフロード
* [clooney](https://github.com/GoogleChromeLabs/clooney) - Clooneyはウェブ向けのアクターライブラリ。ワーカーを使う際、ワーカーについて考えずに使える

## Code highlighting

* [Highlight.js](https://github.com/isagalaev/highlight.js) - JavaScriptのシンタックスハイライト
* [PrismJS](https://github.com/PrismJS/prism) - 軽量かつ堅牢で美しく、シンタックスハイライト
* [shiki](https://github.com/shikijs/shiki) - VS Code TextMate文法で駆動されたコードハイライト。正確でテーマ可変。Nodeまたはブラウザで動作。JavaScriptやTypeScriptに最適。

## Loading Status
*Libraries for indicate load status.*

* [Mprogress.js](https://github.com/lightningtgc/MProgress.js) - Google Material Designの進行状況線形バーを作成。
* [NProgress](https://ricostacruz.com/nprogress/) - Ajaxアプリケーション向けにスリムな進行状況バー。
* [Spin.js](https://github.com/fgnass/spin.js) - 回転するアクティビティインジケータ。
* [progress.js](https://github.com/usablica/progress.js) - ページ上のすべてのオブジェクトに対して進行状況バーを作成・管理。
* [progressbar.js](https://github.com/kimmobrunfeldt/progressbar.js) - アニメーション付きSVGパスによる美しいかつレスポンシブな進行状況バー。
* [pace](https://github.com/HubSpot/pace) - サイトに進行状況バーを自動的に追加。
* [topbar](https://github.com/buunguyen/topbar) - 極めて軽量で美しいサイト全体の進行状況インジケータ。
* [nanobar](https://github.com/jacoborus/nanobar) - 非常に軽量な進行状況バー。jQueryなし。
* [PageLoadingEffects](https://github.com/codrops/PageLoadingEffects) - SVGアニメーションを使って新しいコンテンツを表示する現代的な方法。
* [SpinKit](https://github.com/tobiasahlin/SpinKit) - CSSでアニメーションされたロードインジケータのコレクション。
* [Ladda](https://github.com/hakimel/Ladda) - ロードインジケータを内蔵したボタン。
* [css-loaders](https://github.com/lukehaas/css-loaders) - CSSでアニメーションされたロードスピナーのコレクション。

## Validation

* [Parsley.js](https://github.com/guillaumepotier/Parsley.js) - JavaScriptを1行も書かずにフォーム、フロントエンドをバリデーション。
* [jquery-validation](https://github.com/jzaefferer/jquery-validation) - jQueryバリデーションプラグイン。
* [validator.js](https://github.com/chriso/validator.js) - 文字列のバリデーションとセイフティ処理。
* [validate.js](https://github.com/rickharrison/validate.js) - CodeIgniterをインスピレーションとして作った軽量JavaScriptフォームバリデーションライブラリ。
* [validatr](https://github.com/jaymorrow/validatr/) - クロスブラウザHTML5フォームバリデーション。
* [FormValidation](https://formvalidation.io/) - フォームフィールドをバリデーションするための最高のjQueryプラグイン。以前はBootstrapValidatorと呼ばれていた。
* [is.js](https://github.com/arasatasaygin/is.js) - 型、正規表現、存在、時間など、さまざまな項目をチェック。
* [FieldVal](https://github.com/FieldVal/fieldval-js) - マルチ用途のバリデーションライブラリ。同期および非同期バリデーションをサポート。
* [Funval](https://github.com/neuledge/funval) - 関数インターフェースを用いたデータバリデーション（TypeScript対応）。
* [vest](https://github.com/ealush/vest) - 🦺 ユニットテストにインスパイアされた、宣言型フォームバリデーションフレームワーク。

## Keyboard Wrappers

* [mousetrap](https://github.com/ccampbell/mousetrap) - JavaScriptでキーボードショートカットを扱うためのシンプルなライブラリ。
* [keymaster](https://github.com/madrobby/keymaster) - キーボードショートカットの定義と発行を行うためのシンプルなマイクロライブラリ。
* [Keypress](https://github.com/dmauro/Keypress) - 任意のキーをマウス操作キーとして扱うキーボード入力キャプチャユーティリティ。
* [KeyboardJS](https://github.com/RobertWHurst/KeyboardJS) - キーボードコマボのバインディングを行うJavaScriptライブラリ。キーコードやコマボ衝突の煩雑さを回避。
* [jquery.hotkeys](https://github.com/jeresig/jquery.hotkeys) - jQuery Hotkeysは、コードのどこにでもキーボードイベントを監視できるようにし、ほぼすべてのキーコンビネーションをサポート。
* [jwerty](https://github.com/keithamus/jwerty) - キーボードイベントの処理を素晴らしい仕方で行う。

## Tours And Guides

* [intro.js](https://github.com/usablica/intro.js) - 新しい機能の導入方法と、ユーザー向けのステップバイステップガイドのためのより良いアプローチ。
* [shepherd](https://github.com/HubSpot/shepherd) - ユーザーにアプリケーションのツアーを導く。
* [bootstrap-tour](https://github.com/sorich87/bootstrap-tour) - Twitter Bootstrap Popoversを用いた、簡単で迅速な製品ツアー。
* [tourist](https://github.com/easelinc/tourist) - アプリケーション向けのシンプルで柔軟なツアー。
* [hopscotch](https://github.com/linkedin/hopscotch) - 開発者がページに製品ツアーを追加しやすいフレームワーク。
* [joyride](https://github.com/zurb/joyride) - jQuery フィーチャー・ツアー プラグイン。
* [focusable](https://github.com/zzarcon/focusable) - DOM要素にスポットフォーカスを設定し、ページの他の部分にオーバーレイ層を追加。
* [driver.js](https://github.com/kamranahmedse/driver.js) - 強力でありながら軽量な、純粋なJavaScriptエンジン。ユーザーのフォーカスをページ全体にわたって制御。

## Notifications

* [iziToast](https://github.com/dolce/iziToast) - シンプルでレスポンシブ、柔軟かつ軽量な通知プラグイン（依存関係なし）。
* [messenger](https://github.com/HubSpot/messenger) - アプリケーション向けのGrowlスタイルのアラートとメッセージ。
* [noty](https://github.com/needim/noty) - jQuery通知プラグイン。
* [pnotify](https://github.com/sciactive/pnotify) - Bootstrap、jQuery UI、およびWeb Notifications Draft向けのJavaScript通知。
* [toastr](https://github.com/CodeSeven/toastr) - シンプルなJavaScriptによるトースト通知
* [humane-js](https://github.com/wavded/humane-js) - シンプルで現代的なブラウザ通知システム
* [smoke.js](https://github.com/hxgf/smoke.js) - フレームワークに依存しないJavaScriptによるスタイル付きアラートシステム
* [notie](https://github.com/jaredreich/notie) - 依存関係のないシンプルな通知と入力機能
* [notifire](https://github.com/notifirehq/notifire) - 製品向けオープンソース通知インフラ
* [toastify-js](https://github.com/apvarun/toastify-js) - より良い通知メッセージを実現する純粋JavaScriptライブラリ

## Sliders

* [Swiper](https://github.com/nolimits4web/Swiper) - モバイルタッチスライダーと、ハードウェア加速されたトランジションを備えたフレームワーク
* [slick](https://github.com/kenwheeler/slick) - 最後のカーソルが必要になること
* [slidesJs](http://www.slidesjs.com) - JQuery(1.7.1+)で動作するレスポンシブスライドプラグイン。タッチやCSS3トランジションなどの機能を備えている
* [FlexSlider](https://github.com/woothemes/FlexSlider) - 素晴らしい、完全にレスポンシブなjQueryスライダープラグイン
* [sly](https://github.com/darsain/sly) - アイテムベースのナビゲーションをサポートする、一方向スクロール用JavaScriptライブラリ
* [vegas](https://github.com/jaysalvat/vegas) - ウェブページに美しいフルスクリーン背景を追加するjQueryプラグイン。スライドショーも可能。
* [Sequence](https://github.com/IanLunn/Sequence) - レスポンシブスライダー、プレゼンテーション、バナー、その他ステップベースアプリケーションを作成するためのCSSアニメーションフレームワーク
* [reveal.js](https://github.com/hakimel/reveal.js) - HTMLを使って美しいプレゼンテーションを簡単に作成できるフレームワーク
* [impress.js](https://github.com/impress/impress.js) - CSS3トランスフォームとトランジションを活用し、prezi.comのコンセプトをインスピレーションとして、現代ブラウザで使えるプレゼンテーションフレームワーク
* [bespoke.js](https://github.com/bespokejs/bespoke) - DIYプレゼンテーションマイクロフレームワーク
* [Strut](https://github.com/tantaman/Strut) - Strut - Impress.jsおよびBespoke.jsのプレゼンテーションエディタ
* [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) - モバイルおよびデスクトップ向けのJavaScript画像ギャラリー。モジュラリティとフレームワーク独立性を備えている
* [jcSlider](https://github.com/JoanClaret/jcSlider) - CSSアニメーションを備えたレスポンシブスライダーjQueryプラグイン
* [basic-jquery-slider](https://github.com/jcobb/basic-jquery-slider) - 使いやすく、テーマ設定も簡単で、カスタマイズも簡単。
* [jQuery.adaptive-slider](https://github.com/creative-punch/jQuery.adaptive-slider/) - タッチに対応したカラーフィギュートとナビゲーションをサポートするスライダー用jQueryプラグド
* [slidr](https://github.com/bchanx/slidr) - スライド効果を追加する。
* [Flickity](https://github.com/metafizzy/flickity) - タッチに対応し、反応性のあるギャラリー。
* [Glide.js](https://github.com/jedrzejchalubek/glidejs) - レスポンシブかつタッチ対応のjQueryスライダー。シンプルで軽量で高速。
* [Embla Carousel](https://github.com/davidcetinkaya/embla-carousel) - TypeScriptで書かれた拡張性の高い低レベルカーソル。

## Range Sliders

* [Ion.RangeSlider](https://github.com/IonDen/ion.rangeSlider) - 多くのオプションとスキン対応を備えた強力でカスタマイズしやすいレンジスライダー。
* [jQRangeSlider](https://github.com/ghusse/jQRangeSlider) - 日付をサポートするJavaScriptスライダー選択器。
* [noUiSlider](https://github.com/leongersen/noUiSlider) - 膨らみのない、軽量かつ高度にカスタマイズ可能なレンジスライダー。
* [rangeslider.js](https://github.com/andreruffert/rangeslider.js) - HTML5 input range スライダー要素のポリフィル。


## Form Widgets

### Input

* [typeahead.js](https://github.com/twitter/typeahead.js) - 高速かつ機能豊富な自動補完ライブラリ。
* [tag-it](https://github.com/aehlke/tag-it) - jQuery UIプラグインで、マルチタグフィールドおよびタグの補完/自動補完を処理。
* [At.js](https://github.com/ichord/At.js) - アプリケーションにGitHub風のメンション自動補完を追加。
* [Placeholders.js](https://github.com/jamesallardice/Placeholders.js) - HTML5 placeholder属性のJavaScriptポリフィル。
* [fancyInput](https://github.com/yairEO/fancyInput) - 入力フィールドの入力操作にCSS3効果を加えて、楽しさを提供。
* [jQuery-Tags-Input](https://github.com/xoxco/jQuery-Tags-Input) - このjQueryプラグインで、シンプルなテキスト入力フィールドをカッコイイタグリストに変換。
* [vanilla-masker](https://github.com/BankFacil/vanilla-masker) - 純粋なJavaScriptによるマスク入力。
* [Ion.CheckRadio](https://github.com/IonDen/ion.checkRadio) - チェックボックスおよびラジオボタンのスタイルを設定するjQueryプラグイン。スキン対応あり。
* [awesomplete](https://github.com/LeaVerou/awesomplete) - 極めて軽量で、使用しやすく、美しい自動補完。依存関係なし。 - https://projects.verou.me/awesomplete/

### Calendar

* [pickadate.js](https://github.com/amsul/pickadate.js) - モバイル対応、レスポンシブ、軽量のjQuery日時入力選択器。
* [bootstrap-datepicker](https://github.com/eternicode/bootstrap-datepicker) - @twitter bootstrapの日付選択器。Stefan Petre（eyecon.ro）のforkから派生し、@eternicodeによる改善。
* [Pikaday](https://github.com/dbushell/Pikaday) - リフレッシュされたJavaScript日付選択器 — 軽量、依存関係なし、モジュラリーファイルCSS。
* [fullcalendar](https://github.com/fullcalendar/fullcalendar) - フルサイズのドラッグ＆ドロップイベントカレンダー（jQueryプラグイン）
* [rome](https://github.com/bevacqua/rome) - カスタマイズ可能な日付（および時刻）選択ボックス。依存関係なし、オプトインUI
* [Date Range Picker](https://github.com/dangrossman/daterangepicker) - ユーザーが日付範囲を選択できるドロップダウンメニューを作成
* [Duet Date Picker](https://github.com/duetds/date-picker) - Duet Design Systemのアクセシブル日付選択ボックスのオープンソース版、WCAG 2.1アクセシビリティ適合
* [tui.calendar](https://github.com/nhn/tui.calendar) - 高度な機能を備えたJavaScriptスケジュールカレンダー。今、あなたのサービスにカスタマイズ可能なカレンダーが追加されました
* [Schedule-X](https://github.com/schedule-x/schedule-x) - マテリアルデザインイベントカレンダー。ドラッグ＆ドロップ、ダークモード、複数のビューなど、さまざまな機能を備えています

### Select

* [selectize.js](https://github.com/selectize/selectize.js) - Selectizeはテキストボックスとボックスのハイブリッドです。jQueryベースであり、自動補完とナチュラルなキーボードナビゲーションを備え、タグ付けや連絡先リストなどに便利です `<select>`
* [select2](https://github.com/select2/select2) - jQueryベースのセレクトボックスの代替品。検索、リモートデータセット、結果の無限スクロールをサポートしています
* [chosen](https://github.com/harvesthq/chosen) - 長くて使いにくいセレクトボックスをより使いやすいものに変えるためのライブラリ

### File Uploader

* [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload) - jQueryで使用できるファイルアップロードウィジェット。複数ファイル選択、ドラッグ＆ドロップ、進行状況バー、バリデーション、画像・音声・動画のプレビューを提供
* [dropzone](https://github.com/enyo/dropzone) - Dropzoneは使いやすいドラッグ＆ドロップライブラリです。画像プレビューをサポートし、良好な進行状況バーを表示します
* [flow.js](https://github.com/flowjs/flow.js) - HTML5 File APIを用いて、複数同時、安定性、障害耐性、中断・再開可能なファイルアップロードを提供するJavaScriptライブラリ
* [fine-uploader](https://github.com/FineUploader/fine-uploader) - 複数ファイルアップロードプラグイン。進行バー、ドラッグ＆ドロップ、S3への直接アップロードをサポート
* [FileAPI](https://github.com/mailru/FileAPI) - ファイル操作に必要なJavaScriptツールのセット。マルチアップロード、ドラッグ＆ドロップ、チャンクアップロード。画像：切り取り、サイズ調整、EXIFによる自動方向設定
* [plupload](https://github.com/moxiecode/plupload) - ファイルアップロードに必要なJavaScript API。複数ファイル選択、ファイルタイプフィルタ、リクエストチャンク化、クライアントサイド画像スケーリングをサポートし、HTML5、Silverlight、Flashなどの異なる実行環境を活用しています
* [filepond](https://github.com/pqina/filepond) - 何でもアップロードできるJavaScriptライブラリ。画像を最適化してアップロードを速くし、非常に使いやすく、アクセシブルなスムーズなユーザー体験を提供します

### Other

* [form](https://github.com/jquery-form/form) - jQueryフォームプラグイン
* [Garlic.js](https://github.com/guillaumepotier/Garlic.js) - フォームのテキストおよびセレクトフィールドの値を、提出されるまでローカルに自動保存します
* [Countable](https://github.com/RadLikeWhoa/Countable) - HTML要素にリアルタイムの段落、単語、文字数カウントを追加するJavaScript関数
* [card](https://github.com/jessepollak/card) - 1行のコードでクレジットカードフォームをより良くします
* [stretchy](https://github.com/LeaVerou/stretchy) - フォーム要素の自動サイズ調整、これが正しい方法です。
* [analytics](https://github.com/davidwells/analytics) - 軽量で拡張可能な分析ライブラリ。任意の第三者分析サービスと連携し、ページビュー、カスタムイベント、ユーザー識別を追跡できます。
* [dat.GUI](https://github.com/dataarts/dat.gui) - JavaScriptで変数を変更するための軽量GUIコントローラー。
## Tips

* [tipsy](https://github.com/jaz303/tipsy) - jQuery用のフェイスブック風のツールチッププラグイン。
* [opentip](https://github.com/enyo/opentip) - プロトタイプフレームワークに基づくオープンソースJavaScriptツールチップ。
* [qTip2](https://github.com/qTip2/qTip2) - 非常に強力なツールチップ。
* [tooltipster](https://github.com/iamceege/tooltipster) - jQuery用のツールチッププラグイン。
* [simptip](https://github.com/arashmanteghi/simptip) - Sassで作成されたシンプルなCSSツールチップ。
* [toolbar](https://github.com/paulkinzett/toolbar) - ツールチップスタイルのツールバーjQueryプラグイン。
* [hint.css](https://github.com/chinchang/hint.css) - あなたの素晴らしいウェブサイト向けのCSSベースのツールチップライブラリ。

## Modals and Popups

* [Magnific-Popup](https://github.com/dimsemenov/Magnific-Popup) - パフォーマンスに重点を置いた軽量でレスポンシブなlightboxスクリプト。
* [jquery-popbox](https://github.com/gristmill/jquery-popbox) - jQuery PopBox UI要素。
* [jquery.avgrund.js](https://github.com/voronianski/jquery.avgrund.js) - 新しいモーダルコンセプトを備えたjQuery用のモーダルプラグイン。
* [vex](https://github.com/HubSpot/vex) - 高度にカスタマイズ可能でスタイルを簡単に設定できる現代的なダイアログライブラリ
* [bootstrap-modal](https://github.com/jschr/bootstrap-modal) - デフォルトのBootstrapモーダルクラスを拡張。レスポンシブ、スタック可能、Ajax対応など。
* [css-modal](https://github.com/drublic/css-modal) - 純粋なCSSで構成されたモーダ及。
* [jquery-popup-overlay](https://github.com/vast-engineering/jquery-popup-overlay) - レスポンシブかつアクセシブルなモーダルウィンドウとツールチップ用のjQueryプラグイン。
* [SweetAlert](https://github.com/t4t5/sweetalert) - JavaScriptのalertを置き換える素晴らしい代替案。
* [SweetAlert2](https://github.com/sweetalert2/sweetalert2) - JavaScriptのalertを置き換える素晴らしい代替案。
* [baguetteBox.js](https://github.com/feimosi/baguetteBox.js) - 純粋なJavaScriptで書かれたシンプルで使いやすいlightboxスクリプト。
* [colorbox](https://github.com/jackmoore/colorbox) - jQuery用の軽量かつカスタマイズ可能なlightboxプラグイン。
* [fancyBox](https://github.com/fancyapps/fancyBox) - 画像、HTMLコンテンツおよびマルチメディアにズーム機能を追加するための、美しく洗練されたツール
* [swipebox](https://github.com/brutaldesign/swipebox) - タッチ可能なjQueryのlightbox
* [jBox](https://github.com/StephanWagner/jBox) - jBoxは、ポップアップウィンドウ、ツールチップ、通知などすべての機能を扱う強力で柔軟なjQueryプラグインです
* [lightGallery](https://github.com/sachinchoolur/lightGallery) - jQuery用のカスタマイズ可能でモジュール化されたレスポンシブなlightboxギャラリープラグイン
* [keukenhof](https://github.com/Alexandrshy/keukenhof) - モーダルウィンドウを作成するための軽量で依存関係なし、アクセシビリティを有するTypeScriptライブラリ
* [screenfull.js](https://github.com/sindresorhus/screenfull.js) - JavaScriptのフルスクリーンAPIで、ページまたは任意の要素をフルスクリーンに表示できます。ブラウザの実装差をスムーズに補完し、手動で対応しなくてもよいです

## Scroll

* [scrollMonitor](https://github.com/stutrek/scrollMonitor) - スクロール中に要素を監視するためのシンプルで高速なAPI
* [headroom](https://github.com/WickyNilliams/headroom.js) - ページに余白を確保し、必要ないときはヘッダーを非表示にします
* [onepage-scroll](https://github.com/peachananr/onepage-scroll) - One Page Scrollプラグインを使って、iPhone 5SサイトのようなApple風の1ページスクロールウェブサイトを作成します
* [iscroll](https://github.com/cubiq/iscroll) - iScrollは、高性能でサイズが小さく、依存関係がなく、マルチプラットフォーム対応のJavaScriptスクロールライブラリです
* [skrollr](https://github.com/Prinzhorn/skrollr) - モバイル（Android + iOS）およびデスクトップ用のスタンドアローンパラレルスクロールライブラリ。jQueryは不要です
* [parallax](https://github.com/wagerfield/parallax) - スマートデバイスの向きに反応するパラレルエンジン
* [stellar.js](https://github.com/markdalgleish/stellar.js) - パラレルスクロールを簡単に行う
* [plax](https://github.com/cameronmcefee/plax) - jQueryによるパラレル効果
* [jparallax](https://github.com/stephband/jparallax) - インタラクティブなパラレリック効果を生成するjQueryプラグイン
* [fullPage](https://github.com/alvarotrigo/fullPage.js) - シンプルで使いやすいプラグインで、フルスクリーンスクロールウェブサイト（もしくは1ページウェブサイト）を作成します
* [ScrollMenu](https://github.com/s-yadav/ScrollMenu) - 古いつまらないスクロールバーを置き換えるための新しいインターフェース
* [Clusterize.js](https://github.com/NeXTs/Clusterize.js) - 大きなデータセットを簡単に表示できる、ミニマムなvanilla JSプラグイン
* [simpleParallax](https://github.com/geosigno/simpleParallax) - 任意の画像にパラレルアニメーションを追加するためのシンプルで小さなJavaScriptライブラリ
* [rellax](https://github.com/dixonandmoe/rellax) - 柔らかくスムーズで、超軽量なvanilla JavaScriptパラレルライブラリ
* [asscroll](https://github.com/ashthornton/asscroll) - ハイブリッドなスムーズスクロールセットアップで、バーチャルスクロールのパフォーマンスとネイティブスクロールの信頼性を組み合わせたもの
* [stroll](https://github.com/hakimel/stroll.js) - JavaScriptを介してDOMにバインドされたCSSリストスクロール効果のコレクション
* [locomotive-scroll](https://github.com/locomotivemtl/locomotive-scroll) - ビュー領域内の要素を検出し、パラレル効果付きでスムーズスクロンする
* [elevator.js](https://github.com/tholman/elevator.js) - ついに「トップに戻る」ボタンが現れた。これは実際のエレベーターのように動作する。

## Menu

* [jQuery-menu-aim](https://github.com/kamens/jQuery-menu-aim) - ユーザーのカーソルが特定のドロップダウンメニュー項目に向けられたときにイベントを発火するjQueryプラグイン。アマゾンのようないくつものドロップダウンをレスポンシブに実現するため。
* [jQuery contextMenu](https://github.com/swisnl/jQuery-contextMenu) - コンテキストメニュー管理器
* [Slideout](https://github.com/mango/slideout) - モバイルウェブアプリ向けのレスポンシブなタッチスライドアウトナビゲーションメニュー
* [Slide and swipe](https://github.com/JoanClaret/slide-and-swipe-menu) - タッチスワイプライブラリと連携するスライドスワイプメニュー
* [mmenu](https://github.com/FrDH/jQuery.mmenu) - あなたのウェブサイトやウェブアプリに、スライドサブメニューを備えたアプリ風のオン・オフキャンバスメニューのための最も優れたjQueryプラグイン

## Table/Grid

* [jTable](https://github.com/hikalkan/jtable) - AJAXベースのCRUDテーブルを作成するjQueryプラグイン
* [DataTables](https://www.datatables.net/) - (jQueryプラグイン) プログレッシブエニアンスの基礎に立ち、任意のHTMLテーブルに高度なインタラクションコントロールを追加する非常に柔軟なツール
* [Tabulator](http://olifolkerd.github.io/tabulator/) - (jQueryプラグイン) 任意のJSONデータソースまたは既存のHTMLテーブルから、さまざまなインタラクティブ機能を持つテーブルを作成する極めて柔軟なライブラリ
* [Bootstrap Table](https://bootstrap-table.com/) - 人気のあるBootstrapフレームワークへの拡張で、追加のマークアップなしで、サイトのスタイルに合うテーブルを作成可能
* [floatThead](https://github.com/mkoryak/floatThead) - (jQueryプラグイン) 任意のテーブルのヘッダーをスクロール中にロックする。すべてのテーブルに適用可能で、カスタムHTMLやCSSは不要
* [Masonry](https://masonry.desandro.com/) - カスケード型グリッドレイアウトライブラリ
* [Packery](https://packery.metafizzy.co/) - ビンパッキングアルゴリズムを使用するグリッドレイアウトライブラリ。ドラッグ可能なレイアウトに使える
* [Isotope](https://isotope.metafizzy.co/) - フィルタ可能かつソート可能なグリッドレイアウトライブラリ。マソンリ、パッケリ、その他レイアウトを実装可能
* [flexboxgrid](https://github.com/kristoferjoseph/flexboxgrid/) - CSS3 flexboxに基づくグリッド

## Frameworks

* [Semantic UI](https://semantic-ui.com/) - テーマや要素が豊富なUIキット
* [w2ui](http://w2ui.com/) - データ駆動型ウェブアプリケーションのフロントエンド開発に必要なjQueryプラグインのセット
* [fluidity](https://github.com/mrmrs/fluidity) - 世界で最も小さな完全に反応するCSSフレームワーク
* [Ink](https://github.com/sapo/Ink) - SAPOで使用されているHTML5/CSS3フレームワーク。高速かつ効率的なウェブサイト設計とプロトタイピングに使用
* [DataFormsJS](https://github.com/dataformsjs/dataformsjs) - 最小限のJavaScriptフレームワークとスタンドアローンコンポーネント。サイトやSPAの迅速開発に適したものです
* [EHTML](https://github.com/Guseyn/EHTML) - JavaScriptコードを書かずに使えるHTMLフレームワーク

## Boilerplates

 * [html5-boilerplate](https://github.com/h5bp/html5-boilerplate) - 高速で堅牢かつ柔軟なウェブアプリやサイトを構築するためのプロフェッショナルなフロントエンドテンプレート
 * [mobile-boilerplate](https://github.com/h5bp/mobile-boilerplate) - 高速で現代的なモバイルウェブアプリを構築するためのフロントエンドテンプレート
 * [webplate](https://github.com/chrishumboldt/webplate) - サイトやアプリの開発に集中できる、使いやすい素晴らしいフロントエンドフレームワーク
 * [Cerberus](https://github.com/TedGoas/Cerberus) - レスポンシブなHTMLメールに使えるシンプルでしっかりとしたパターン。Outlookでも動作します
 * [full-page-intro-and-navigation](https://github.com/CodyHouse/full-page-intro-and-navigation) - フル幅の背景画像、強調されたアニメーションメニュー、ナビゲーションの後ろにiOS風のブレeding効果を備えた紹介ページ
 * [Fluid-Squares](https://github.com/crozynski/Fluid-Squares) - 正方形単位からなる流動的なグリッド
 * [Mobile-First-RWD](https://github.com/bradfrost/Mobile-First-RWD) - モバイルファーストのレスポンシブウェブデザインの例
 * [this-is-responsive](https://github.com/bradfrost/this-is-responsive) - これはレスポンシブです
 * [npm run-scripts](https://gist.github.com/addyosmani/9f10c555e32a8d06ddb0) NPMのrun-scriptsでタスク自動化
 * [Wasp](https://github.com/wasp-lang/wasp) Waspは、現代的なJavaScriptフルスタックウェブアプリの開発・ビルド・デプロイにおいて、コードを少なくして行うための宣言型ドメイン特定言語

## Images

 * [Drift](https://github.com/imgix/drift) - サイトの画像に「マウスオーバー時のズーム」機能を簡単に追加できます。軽量で、依存関係なしのJavaScript
 * [Magnificent.js](https://github.com/AndersDJohnson/magnificent.js) - jQueryを使用した、レスポンシブなズーム、画像など
 * [Panolens.js](https://github.com/pchen66/panolens.js) - Panolens.jsはイベント駆動型およびWebGLベースのパノラマ閲覧ツール。軽量で柔軟
## Gesture

* [hammer.js](https://github.com/hammerjs/hammer.js) - マルチタッチジェスチャーに使えるJavaScriptライブラリ
* [touchemulator](https://github.com/hammerjs/touchemulator) - デスクトップ上でタッチ入力をエミュレート
* [Dragula](https://github.com/bevacqua/dragula/) - ドラッグ＆ドロップは、簡単すぎて痛い

## Maps

* [Leaflet](https://github.com/Leaflet/Leaflet) - モバイル対応のインタラクティブマップを実現するJavaScriptライブラリ。
* [Cesium](https://github.com/AnalyticalGraphicsInc/cesium) - オープンソースのWebGL仮想地球と地図エンジン
* [gmaps](https://github.com/HPNeo/gmaps) - Googleマップを使う最も簡単な方法
* [polymaps](https://github.com/simplegeo/polymaps) - 現代のウェブブラウザで動的な、インタラクティブな地図を作成するための無料JavaScriptライブラリ
* [kartograph.js](https://github.com/kartograph/kartograph.js) - Kartograph SVG地図用のオープンソースJavaScriptレンダラー
* [mapbox.js](https://github.com/mapbox/mapbox.js) - Mapbox JavaScript API、Leafletプラグイン
* [jqvmap](https://github.com/manifestinteractive/jqvmap) - jQuery ベクターマップライブラリ
* [OpenLayers3](https://openlayers.org/) - すべての地図ニーズに最適な、高性能かつ機能豊富なライブラリ
* [H3js](https://github.com/uber/h3) - Uberが開発した、空間視覚化用の六角形階層空間インデックスシステム（JavaScript版）

## Video/Audio

 * [prettyembed.js](https://github.com/mike-zarandona/prettyembed.js) - YouTube向けのPrettier埋め込み機能 - 高解像度プレビュー画像、埋め込みオプションの高度なカスタマイズ、およびオプションのFitVidsサポートを提供
 * [Play-em JS](https://github.com/adrienjoly/playemjs) - Play'emは、音楽・動画トラックのキューを管理し、YouTube、SoundCloud、Vimeoを含む複数のプレイヤーをHTML DIVに埋め込みで、音楽のシーケンスを再生するJavaScriptコンポーネント
 * [polyplayer](https://github.com/Acconut/polyplayer) - YouTube、SoundCloud、Vimeoプレイヤーを1つのAPIで制御
 * [flowplayer](https://github.com/flowplayer/flowplayer) - Web向けHTML5動画プレイヤー
 <https://flowplayer.com/>
 * [mediaelement](https://github.com/johndyer/mediaelement) - HTML5 <audio>または<video>プレイヤーで、FlashおよびSilverlightのシムを提供し、HTML5 MediaElement APIを模倣することで、すべてのブラウザで一貫したUIを実現。 <http://www.mediaelementjs.com/>
 * [SoundJS](https://github.com/CreateJS/SoundJS) - ウェブ上の音声操作を簡単に行えるライブラリ。異なるブラウザで音声を再生するための一貫したAPIを提供。
 * [video.js](https://github.com/videojs/video.js) - Video.js - 開発者向けのHTML5およびFlash動画プレイヤー
 * [FitVids.js](https://github.com/davatron5000/FitVids.js) - 軽量で使いやすいjQueryプラグイン。動的幅の動画埋め込みを可能にする。
 * [Ion.Sound](https://github.com/IonDen/ion.sound) - ウェブページに簡単な音を追加。
 * [photobooth-js](https://github.com/WolframHempel/photobooth-js) - ユーザーがサイト上で自分のアバター画像を撮影できるウィジェット。
 * [clappr](https://github.com/clappr/clappr) - ウェブ向けの拡張可能なメディアプレイヤー http://clappr.io
 * [ts-audio](https://github.com/EvandroLG/ts-audio) - `AudioContext` APIを扱う、中立的かつ使いやすいライブラリ。
 * [AmplitudeJS](https://521dimensions.com/open-source/amplitudejs) - オープンソースHTML5ウェブオーディオライブラリ。あなたの希望の通りにウェブオーディオプレイヤーを設計できます。依存関係は不要です。
 * [ractive-player](https://github.com/ysulyma/ractive-player) - React.jsで作成するインタラクティブな動画用のライブラリ。
 * [ffmpeg.js](https://github.com/Kagami/ffmpeg.js) - FFmpegをブラウザ内で使用に最適化：サイズを最小限に抑え、高速読み込み、asm.js、パフォーマンスチューニングなど。
 * [flv.js](https://github.com/bilibili/flv.js) - 純粋なJavaScriptで書かれたHTML5 Flash Video（FLV）プレイヤー。Flashなしで動作します。
 * [hls.js](https://github.com/video-dev/hls.js) -  HTTPライブストリーミングクライアントを実装するJavaScriptライブラリ。再生にはHTML5動画とMediaSource Extensionsを用います。

## Typography

 * [FlowType.JS](https://github.com/simplefocus/FlowType.JS) - ウェブタイプグラフィックスの最高峰：要素の幅に基づくfont-sizeとline-height。
 * [BigText](https://github.com/zachleat/BigText) - jQueryプラグイン。テキストの行を特定の幅に合わせるためのfont-sizeとword-spacingを計算します。
 * [circletype](https://github.com/peterhry/circletype) - ウェブ上でタイプを曲げられるjQueryプラグイン。
 * [slabText](https://github.com/freqDec/slabText/) - 大きな、強調された、レスポンシブなヘッダーを生成するjQueryプラグイン。
 * [simple-text-rotator](https://github.com/peachananr/simple-text-rotator) - サイトにシンプルな回転テキストを追加できます。マークアップはほとんど必要ありません。
 * [novacancy.js](https://github.com/chuckyglitch/novacancy.js) - テキストネオンゴールデン効果jQueryプラグイン。
 * [jquery-responsive-text](https://github.com/ghepting/jquery-responsive-text) - テキストサイズをレスポンシブにできるようにします。
 * [FitText.js](https://github.com/davatron5000/FitText.js) - ウェブタイプを膨らませるjQueryプラグーン。
 * [Lettering.js](https://github.com/davatron5000/Lettering.js) - 軽量で使いやすいJavaScript `<span>`インジェクタ。極端なウェブタイプグラフィックスを実現。

## Animations

* [velocity](https://github.com/julianshapiro/velocity) - JavaScriptによる高速アニメーション
* [jquery.transit](https://github.com/rstacruz/jquery.transit) - jQuery での超スムーズな CSS3 トランスフォームとトランジション
* [bounce.js](https://github.com/tictail/bounce.js) - 短時間でCSS3を活用した魅力的なアニメーションを作成できます。
* [GreenSock-JS](https://github.com/greensock/GreenSock-JS) - すべての主要ブラウザで動作する高性能HTML5アニメーション。
* [TransitionEnd](https://github.com/EvandroLG/transitionEnd) - TransitionEndは、トランジションイベントに対応する、クロスブラウザかつ中立的なライブラリ。
* [Dynamic.js](https://github.com/michaelvillar/dynamics.js) - 物理ベースのCSSアニメーションを実現するJavaScriptライブラリ。
* [the-cube](https://github.com/pstadler/the-cube) - The CubeはCSS3トランジションを使った実験。
* [Effeckt.css](https://github.com/h5bp/Effeckt.css) - パフォーマンスの高いトランジションとアニメーションライブラリ。
* [animate.css](https://github.com/daneden/animate.css) - CSSアニメーションのクロスブラウザライブラリ。使いやすさの極致。
* [textillate](https://github.com/jschr/textillate) - CSS3テキストアニメーションに必要なシンプルなプラグイン。
* [move.js](https://github.com/visionmedia/move.js) - CSS3をバックアップしたJavaScriptアニメーションフレームワーク。
* [animatable](https://github.com/LeaVerou/animatable) - 1つのプロパティ、2つの値、無限の可能性。
* [shuffle-images](https://github.com/peachananr/shuffle-images) - 画像を創造的にシャッフルするための最もシンプルな方法。
* [smoothState.js](https://github.com/miguel-perez/smoothState.js) - jQueryで非侵襲的にページ間の遷移を実現。
* [Anime.js](https://animejs.com/) - JavaScriptアニメーションエンジン。
* [Mo.js](https://mojs.github.io/) - ウェブ向けのモーショングラフィックスツールセット
* [particles.js](https://github.com/VincentGarreau/particles.js) - パティクルを生成するための軽量JavaScriptライブラリ。
* [tsParticles](https://github.com/matteobruni/tsparticles) - particles.jsのバージョンアップ（バグ修正と多くの新機能を含む）。
* [particles-bg](https://github.com/lindelof/particles-bg) - React用の軽量パティクルアニメーション背景コンポーネント。
* [barbajs](https://github.com/barbajs/barba) - ウェブサイトのページ間の遷移を滑らかで自然に実現するためのツール。
* [typicaljs](https://github.com/camwiegert/typical) - ~40及てのJavaScriptで実現するアニメーションタイピング。
* [AutoAnimate](https://auto-animate.formkit.com) - アプリケーションに動きを加えるための1行のコード。

## Image Processing

* [lena.js](https://github.com/davidsonfellipe/lena.js) - フィルタとユーティリティ関数を備えた画像処理ライブラリ。
* [pica](https://github.com/nodeca/pica) - 高品質な画像リサイズ（高速Lanczosフィルタ、純粋JavaScriptで実装）。
* [cropper](https://github.com/fengyuanchen/cropper) - シンプルなjQueryによる画像切り取りプラグイン。

## ES6

* [es6features](https://github.com/lukehoban/es6features) - ECMAScript 6の機能概要。
* [es6-features](https://github.com/rse/es6-features) - ECMAScript 6：機能概要と比較。
* [es6-cheatsheet](https://github.com/DrkSephy/es6-cheatsheet) - ES2015 [ES6] cheatsheet（ヒント、トリック、ベストプラクティス、コードサンプルを含む）。
* [ECMAScript 6 compatibility table](https://compat-table.github.io/compat-table/es6/) - ECMAScript 6の機能がさまざまな環境でサポートされているかの比較表。
* [Babel (Formerly 6to5)](https://github.com/babel/babel) - ES6+のコードを実行環境なしのvanilla ES5に変換
* [Traceur compiler](https://github.com/google/traceur-compiler) - ES6機能 > ES5。クラス、ジェネレーター、プロミス、解構パターン、デフォルトパラメータなどすべてを含む


## Generators

* [Gatsby.js](https://github.com/gatsbyjs/gatsby) - Reactベースの静的サイトジェネレーター
* [Gridsome](https://github.com/gridsome/gridsome) - Vueを駆使した静的サイトジェネレーター
* [Docusaurus](https://github.com/facebook/docusaurus) - Facebookが開発したReactベースの静的サイトジェネレーター。コンテンツ中心のウェブサイトに最適。
* [Next.js](https://github.com/vercel/next.js) - Reactを採用した静的サイトジェネレーター。彼らは「Webをより速くするためのすべてのツールを提供します」と述べています。
* [Lume](https://github.com/lumeland/lume) - Deno用の静的サイトジェネレーター
* [Astro](https://github.com/withastro/astro) - コンテンツ中心のウェブサイト向けのウェブフレームワーク
* [Nuxt](https://github.com/nuxt/nuxt) - 直感的なVueフレームワーク

## SDK

* [javascript-sdk-design](https://github.com/huei90/javascript-sdk-design) - 実際の業務経験と個人経験から抽出されたJavaScript SDK設計ガイド
* [Spotify SDK](https://github.com/loverajoel/spotify-sdk) - Spotify Web APIとの対話に用いるためのエンティティ中心のSDK
* [Square Node.js SDK](https://github.com/square/connect-nodejs-sdk/) - 支払いおよびその他のSquare API向けのJavaScriptクライアントライブラリ
* [OpenAI SDK](https://github.com/openai/openai-node) - OpenAI API向けの公式JavaScript／TypeScriptライブラリ
* [Stripe Node.js SDK](https://github.com/stripe/stripe-node) - StripeのNode.js SDKは、JavaScript／TypeScriptアプリに支払い、サブスクリプション、請求機能を統合します

## Full Text Search

* [lunr](https://github.com/olivernn/lunr.js) - ブラウザで使用できるライブラリ。JSONドキュメントをインデックス化し、テキストクエリに最も適合するドキュメントを検索するためのシンプルなインターフェースを提供
* [flexsearch](https://github.com/nextapps-de/flexsearch) - ブラウザおよびNode.js向けの次世代フルテキスト検索ライブラリ
* [Elasticlunr](https://github.com/weixsong/elasticlunr.js) - lunr.jsに基づいているが、より柔軟でカスタマイズ可能。

## ORM

* [Prisma](https://github.com/prisma/prisma) Node.jsおよびTypeScript向けの次世代ORM | PostgreSQL、MySQL、MariaDB、SQL Server、SQLite、MongoDBおよびCockroachDB
* [Sequelize](https://github.com/sequelize/sequelize) 現代のNode.jsおよびTypeScript向けの機能豊かなORM | PostgreSQL、MySQL、MariaDB、SQLite、MS SQL Server、Snowflake、Oracle DB...
* [Mongoose](https://github.com/Automattic/mongoose) 非同期環境で動作するMongoDBオブジェクトモデリング
* [TypeORM](https://github.com/typeorm/typeorm) TypeScript および JavaScript 用の ORM。Node.js、ブラウザ、Ionic、Cordova および Electron プラットフォームで動作。
* [Drizzle ORM](https://github.com/drizzle-team/drizzle-orm) ヘッドレス TypeScript ORM。ヘッドを備えた実行環境。Node.js、Bun および Deno で動作。
* [Kysely](https://github.com/kysely-org/kysely) 型安全な TypeScript SQL クエリビルダー。
* [Knex](https://github.com/knex/knex) PostgreSQL、MySQL、CockroachDB、SQL Server、SQLite3 および Oracle 用のクエリビルダー。柔軟性・移植性・使いやすさを重視した設計。
* [MikroORM](https://github.com/mikro-orm/mikro-orm) Data Mapper、Unit of Work、Identity Map パターンに基づく Node.js 用 TypeScript ORM。
* [Objection.js](https://github.com/Vincit/objection.js) Knex.js をベースに構築された Node.js 用 SQL フレンドリー ORM。強力な関係データサポートを備える。


## WebSockets

* [Socket.io](https://github.com/socketio/socket.io) リアルタイムアプリケーション向け最も広く使われている WebSocket ライブラリ。自動再接続、ルーム、フォールバック（例：ポーリング）をサポート。
* [ws](https://github.com/websockets/ws) Node.js 用のシンプルで高速かつ徹底的にテストされた WebSocket クライアントおよびサーバー。

## Generative AI

* [KaibanJS](https://github.com/kaiban-ai/KaibanJS) - KaibanJS は、Kanban パターンを採用したマルチエージェントAIシステムのブラウザ互換性を実現するオープンソースフレームワーク。

## Misc

* [echo](https://github.com/toddmotto/echo) - data-* 属性を使って遅延読み込みを行う画像処理。
* [picturefill](https://github.com/scottjehl/picturefill) - <picture>、srcset、sizes 用のレスポンシブ画像のポリフィル。
* [platform.js](https://github.com/bestiejs/platform.js) - ほぼすべての JavaScript プラットフォームで動作するプラットフォーム検出ライブラリ。
* [json3](https://github.com/bestiejs/json3) - ほぼすべての JavaScript プラットオーラで動作する現代的な JSON 実装。
* [Logical Or Not](https://gabinaureche.com/logicalornot/) - JavaScript の特徴をテーマにしたゲーム。
* [BitSet.js](https://github.com/infusion/BitSet.js) - JavaScript 用のビットベクトル実装。
* [spoiler-alert](https://github.com/joshbuddy/spoiler-alert) - SPOILER ALERT! サイト上でスポイラーを隠すための、小さな jQuery プラグイン。
* [jquery.vibrate.js](https://github.com/illyism/jquery.vibrate.js) - Vibration API のラッパー
* [list.js](https://github.com/javve/list.js) - テーブル、リスト、各種HTML要素へ検索、並べ替え、絞り込みを追加。既存HTMLを変えずに動作するよう設計されている。
https://listjs.com
* [mixitup](https://github.com/patrickkunka/mixitup) - MixItUp - フィルタとソートプラグイン。
* [grid](https://github.com/hootsuite/grid) - 2次元、サイズ変更可能、レスポンシブなリストにドラッグ＆ドロップを実現するライブラリ。
* [jquery-match-height](https://github.com/liabru/jquery-match-height) - jQuery用のレスポンス性のある等高高さプラグイン
* [SurveyJS](https://github.com/surveyjs/survey-library) - SurveyJSはJavaScriptの調査およびフォームライブラリです。 https://surveyjs.io/
* [Array Explorer](https://github.com/sdras/array-explorer) そして [Object Explorer](https://objectexplorer.netlify.app/) - いつでもどのネイティブJavaScriptメソッドが最も適しているかを判断するためのリソース
* [Clipboard.js](https://clipboardjs.com/) - フラッシュなし、フレームワークなしで「クリップボードにコピー」
* [ky](https://github.com/sindresorhus/ky) - ブラウザのFetch APIに基づく、小さく洗練されたHTTPクライアント
* [Fcal](https://github.com/5anthosh/fcal) -  数学式評価器
* [emoji-button](https://github.com/joeattardi/emoji-button) - Vanilla JavaScriptによるエモジーピッカーコンポーネント
* [iooxa](https://github.com/iooxa/article) - インタラクティブな科学的執筆、反応型ドキュメントおよび探索可能な説明に必要なコンポーネント
* [Idyll](https://github.com/idyll-lang/idyll) - 探索可能な説明やインタラクティブなストーリーテリングエッセイを作成可能。 [embedded in HTML](https://github.com/idyll-lang/idyll-embed) です
* [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) - JavaScriptで実装されたアルゴリズムとデータ構造、それぞれの説明とさらに読むためのリンクを含む
* [FingerprintJS](https://github.com/fingerprintjs/fingerprintjs) - ブラウザのフィンガープリントから訪問者識別子を作成し、インコグノモードやブラウザデータの削除時にも同じままになる
* [Peg.js](https://github.com/pegjs/pegjs) - JavaScriptで使用可能なシンプルなパーサー生成器。高速なパーサーを生成し、エラーレポートも優れた品質。ブラウザ、コマンドライン、またはJavaScript APIから使用可能
* [lune](https://github.com/ryanseys/lune) - 月の相位を正確に計算するためのライブラリ
* [jsemu](https://github.com/fcambus/jsemu) - JavaScriptで書かれたエミュレーターの一覧
* [rrweb](https://github.com/rrweb-io/rrweb) - DOMおよびユーザーインタラクションをタイプ付きJSONイベントストリームとして記録し、1ピクセルずつ再現する
* [enum-plus](https://github.com/shijistar/enum-plus) - ネイティブTypeScriptのenumに即座に追加できる拡張機能。表示テキスト、国際化、完全な型セーフティを提供

# Worth Reading

* [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) - 現代JavaScriptに関する最も優れた書籍。完全に無料でオンラインで読むことができる、または著者を支援するために購入可能
* [braziljs/js-the-right-way](https://github.com/braziljs/js-the-right-way/) - JSのベストプラクティス、受け入れられたコーディング規則、そしてウェブ上のリンクを含む、読みやすい一覧
* [JSbooks](https://github.com/revolunet/JSbooks) - 無料JavaScript電子書籍のディレクトリ
* [Superhero.js](http://superherojs.com) - 大規模JavaScriptコードベースの作成、テスト、維持に関するリソースのコレクション
* [SJSJ](https://github.com/KittyGiraudel/SJSJ) - JavaScriptの専門用語をシンプルに解説する、コミュニティが中心に推進する試み。現在のJavaScriptエコシステムにおける多くの buzzwords を、簡単な言葉で説明しようとするもの。
* [How to Write an Open Source JavaScript Library](https://github.com/sarbbottam/write-an-open-source-js-lib) - JavaScriptのオープンソースライブラリを公開するための、ステップごとの包括的なガイド。
* [JavaScript Tutorials](https://hackr.io/tutorials/learn-javascript) - 多様なユーザーが評価したオンラインチュートリアルからJavaScriptをオンラインで学べる。
* [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS) - JavaScriptにおける実用的でバランスの取れた関数型プログラミング。
* [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript) - Clean Codeの概念をJavaScriptに適用した内容。
* [Roadmap.sh JavaScript Roadmap](https://roadmap.sh/javascript) - コミュニティが提供する学習ルートからJavaScriptを学べる。
* [JavaScript Info](https://javascript.info) - シンプルな説明を用いた現代的なJavaScriptチュートリアル。


# Other Awesome Lists

* [sotayamashita/awesome-css](https://github.com/sotayamashita/awesome-css)
* [emijrp/awesome-awesome](https://github.com/emijrp/awesome-awesome)
* [bayandin/awesome-awesomeness](https://github.com/bayandin/awesome-awesomeness)
* [sindresorhus/awesome](https://github.com/sindresorhus/awesome)
* [jnv/list](https://github.com/jnv/lists)
* [gianarb/angularjs](https://github.com/gianarb/awesome-angularjs)
* [peterkokot/awesome-dojo](https://github.com/peterkokot/awesome-dojo)
* [addyosmani/es6-tools](https://github.com/addyosmani/es6-tools)
* [ericdouglas/ES6-Learning](https://github.com/ericdouglas/ES6-Learning)
* [obetomuniz/awesome-webcomponents](https://github.com/obetomuniz/awesome-webcomponents)
* [willianjusten/awesome-svg](https://github.com/willianjusten/awesome-svg)
* [davidsonfellipe/awesome-wpo](https://github.com/davidsonfellipe/awesome-wpo)
* [instanceofpro/awesome-backbone](https://github.com/sadcitizen/awesome-backbone)
* [enaqx/awesome-react](https://github.com/enaqx/awesome-react)
* [bolshchikov/js-must-watch](https://github.com/bolshchikov/js-must-watch)
* [peterkokot/awesome-jquery](https://github.com/peterkokot/awesome-jquery)
* [davidyezsetz/you-might-not-need-jquery-plugins](https://github.com/davidyezsetz/you-might-not-need-jquery-plugins)
* [MaximAbramchuck/awesome-interviews](https://github.com/MaximAbramchuck/awesome-interview-questions)
* [denolib/awesome-deno](https://github.com/denolib/awesome-deno)
* [apvarun/awesome-bun](https://github.com/apvarun/awesome-bun)

# Contributing

ご貢献を心よりお待ちしています！まず [contribution guidelines](https://github.com/sorrycc/awesome-javascript/blob/c8e9543530b12423f68ad4379735f96ba0d6de61/CONTRIBUTING.md) をお読みください

# License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

法的に可能である範囲内で、[chencheng](https://github.com/sorrycc)はこの作品に関するすべての著作権および関連又は隣接する権利を放棄しました。
