---
title: "Awesome Gulp"
description: "Gulpを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-alferov-awesome-gulp-readme-md"
---

# Awesome Gulp

Gulpを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次

- [凡例](#legend)
- [資料](#resources)
  - [一般資料](#general-resources)
  - [公式ドキュメント](#official-documentation)
  - [コミュニティ](#community)
  - [チュートリアル](#tutorials)
    - [Gulp チュートリアル](#gulp-tutorials)
    - [Gulp 4 チュートリアル](#gulp-4-tutorials)
    - [Gulp と Browserify](#gulp-with-browserify)
    - [Gulp と Angular](#gulp-with-browserify)
    - [Gulp、Angular、Browserify](#gulp-with-angular-and-browserify)
    - [Gulp、Angular、Webpack](#gulp-with-angular-and-webpack)
    - [Gulp、React、Browserify](#gulp-with-react-and-browserify)
    - [Gulp と Ember](#gulp-with-ember)
  - [その他の資料](#miscellaneous-resources)
- [プラグイン](#plugins)
  - [コンパイル](#compilation)
  - [トランスパイル](#transpilation)
  - [結合](#concatenation)
  - [圧縮](#minification)
  - [最適化](#optimization)
  - [アセットの注入](#injecting-assets)
  - [テンプレート](#templating)
  - [Lint](#linting)
  - [ライブリロード](#live-reload)
  - [キャッシュ](#caching)
  - [フロー制御](#flow-control)
  - [ログ](#logging)
  - [テスト](#testing)
  - [その他のプラグイン](#miscellaneous-plugins)
- [スキャフォールディング](#scaffolding)
  - [ボイラープレート](#boilerplates)
  - [Yeoman ジェネレーター](#yeoman-generators)
- [その他](#miscellaneous)

<a id="legend"></a>
## 凡例

[:no_entry:] - 非推奨の注意書き

<a id="resources"></a>
## 資料

<a id="general-resources"></a>
### 一般資料

- [Official Website](http://gulpjs.com/)
- [Github Repository](https://github.com/gulpjs/gulp)
- [Plugin Registry](http://gulpjs.com/plugins/)
- [NPM Module](https://www.npmjs.com/package/gulp)
- [Blacklisted Plugins](https://github.com/gulpjs/plugins/blob/master/src/blackList.json)

<a id="official-documentation"></a>
### 公式ドキュメント

- [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- [API Documentation](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
- [CLI Documentation](https://github.com/gulpjs/gulp/tree/master/docs#articles)
- [Writing a Plugin](https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md)
- [Recipes](https://github.com/gulpjs/gulp/tree/master/docs/recipes)

<a id="community"></a>
### コミュニティ

- [StackOverflow](http://stackoverflow.com/questions/tagged/gulp)
- [Twitter](https://twitter.com/gulpjs)

<a id="tutorials"></a>
### チュートリアル

<a id="gulp-tutorials"></a>
#### Gulp チュートリアル

- [Building with Gulp](https://www.smashingmagazine.com/2014/06/building-with-gulp/)
- [Automate Your Tasks Easily with Gulp.js](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)
- [Gulp - The Vision, History, and Future of the Project](https://medium.com/@contrahacks/gulp-3828e8126466)
- [Introduction to Gulp.js](http://stefanimhoff.de/tag/gulp/)
- [Video: Learning Gulp](http://leveluptuts.com/tutorials/learning-gulp)
- [Using Gulp to Inject Scripts and Styles Tags Directly into Your HTML](http://blog.johnnyreilly.com/2015/02/using-gulp-in-asp-net-instead-of-web-optimization.html)
- [5 Lessons Learned Using Gulp.js](http://denbuzze.com/post/5-lessons-learned-using-gulpjs/)
- [Automating Linkage: How I Learned to Stop Worrying and Love the Build](http://conan.is/bower/gulp/wiredep/javascript/2014/08/18/automating_linkage-or-how-i-learned-to-stop-worrying-and-love-the-build.html)
- [Setting Up Gulp Tasks for the First Time](https://www.codementor.io/development-process/tutorial/how-to-set-up-gulp-beginner-guide#/)
- [Why You Shouldn’t Create a Gulp Plugin (or, How to Stop Worrying and Learn to Love Existing Node Packages)](http://blog.overzealous.com/post/74121048393/why-you-shouldnt-create-a-gulp-plugin-or-how-to)
- [6 Gulp Best Practices You Can Use Today to Radically Improve Your Development Experience](http://blog.rangle.io/angular-gulp-bestpractices/)
- [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)

<a id="gulp-4-tutorials"></a>
#### Gulp 4 チュートリアル

- [Migrating to Gulp 4 by Example](https://blog.wearewizards.io/migrating-to-gulp-4-by-example)
- [Gulp 4: The new task execution system - gulp.parallel and gulp.series](http://fettblog.eu/gulp-4-parallel-and-series/)

<a id="gulp-with-browserify"></a>
#### Gulp と Browserify

- [Gulp + Browserify, the Gulp-y Way](https://medium.com/@sogko/gulp-browserify-the-gulp-y-way-bb359b3f9623)
- [Gulp + Browserify](https://viget.com/extend/gulp-browserify-starter-faq)
- [Fast Browserify Builds with Watchify](https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md)

<a id="gulp-with-angular"></a>
#### Gulp と Angular

- [What Every Angular Project Likely Needs - and a Gulp Build to Provide It](http://blog.jhades.org/what-every-angular-project-likely-needs-and-a-gulp-build-to-provide-it/)

<a id="gulp-with-angular-and-browserify"></a>
#### Gulp、Angular、Browserify

- [Advanced AngularJS Structure with Gulp, Node and Browserify](http://omarfouad.com/blog/2015/03/21/advanced-angularjs-structure-with-gulp-node-and-browserify/)

<a id="gulp-with-angular-and-webpack"></a>
#### Gulp、Angular、Webpack

- [Angular, Webpack and Gulp for an SPA: Part I](https://luwenhuang.wordpress.com/2015/01/18/refactoring-an-angular-app-to-use-webpack-and-gulp/)
- [Angular, Webpack and Gulp for an SPA: Part II](https://luwenhuang.wordpress.com/2015/01/19/angular-webpack-and-gulp-for-an-spa-part-ii/)
- [Angular, Webpack and Gulp for an SPA: Part III](https://luwenhuang.wordpress.com/2015/01/28/angular-webpack-and-gulp-for-an-spa-part-iii/)

<a id="gulp-with-react-and-browserify"></a>
#### Gulp、React、Browserify

- [Browserify and Gulp with React](https://hacks.mozilla.org/2014/08/browserify-and-gulp-with-react/)
- [Taking React to the Next Level: Mixins, Gulp, and Browserify](http://pomax.github.io/1420592591221/taking-react-to-the-next-level-mixins-gulp-and-browserify)

<a id="gulp-with-ember"></a>
#### Gulp と Ember

- [Improving Your Ember.js Workflow Using Gulp.js](http://www.sitepoint.com/improving-ember-js-workflow-using-gulp-js/)

<a id="gulp-with-wordpress"></a>
#### Gulp と WordPress

- [Advanced WordPress Development Using Gulp](https://premium.wpmudev.org/blog/advanced-wordpress-development-using-gulp/)

<a id="miscellaneous-resources"></a>
### その他の資料

- [Gulp Cheatsheet](https://github.com/osscafe/gulp-cheatsheet)
- [Playground for Gulp Recipes](https://github.com/johnpapa/gulp-patterns)

<a id="plugins"></a>
## プラグイン

<a id="compilation"></a>
### コンパイル

- [gulp-sass](https://github.com/dlmanning/gulp-sass) - [libsass](https://github.com/sass/libsass) を使って Sass → CSS に変換します.
- [gulp-ruby-sass](https://github.com/sindresorhus/gulp-ruby-sass) - Ruby Sass を使って Sass → CSS に変換します.
- [gulp-compass](https://github.com/appleboy/gulp-compass) - Ruby Sass と Compass を使って Sass → CSS に変換します.
- [gulp-less](https://github.com/plus3network/gulp-less) - [Less](https://github.com/less/less.js) → CSS.
- [gulp-stylus](https://github.com/stevelacy/gulp-stylus) - [Stylus](https://github.com/stylus/stylus) → CSS.
- [gulp-postcss](https://github.com/postcss/gulp-postcss) - CSS を [PostCSS](https://github.com/postcss/postcss) プロセッサで 1 回のパースでパイプします.
- [gulp-coffee](https://github.com/contra/gulp-coffee) - [Coffeescript](https://github.com/jashkenas/coffeescript) → JavaScript.
- [gulp-typescript](https://github.com/ivogabe/gulp-typescript) - [TypeScript](https://github.com/Microsoft/TypeScript) → JavaScript.
- [gulp-react](https://github.com/sindresorhus/gulp-react) - Facebook の [React](https://github.com/facebook/react) JSX テンプレート → JavaScript.
- [webpack-stream](https://github.com/shama/webpack-stream) - gulp との統合を便利にするために [webpack](https://github.com/webpack/webpack) をストリームとして実行します.

<a id="transpilation"></a>
### トランスパイル

- [gulp-babel](https://github.com/babel/gulp-babel) - [babel](https://github.com/babel/babel) を使って ES6 → ES5 に変換します.
- [gulp-traceur](https://github.com/sindresorhus/gulp-traceur) - [Traceur](https://github.com/google/traceur-compiler) を使って ES6 → ES5 に変換します.
- [gulp-regenerator](https://github.com/sindresorhus/gulp-regenerator) - [Regenerator](https://github.com/facebook/regenerator) を使って ES6 → ES5 に変換します.
- [gulp-es6-transpiler](https://github.com/sindresorhus/gulp-es6-transpiler) - [:no_entry:] [es6-transpiler](https://github.com/termi/es6-transpiler) を使って ES6 → ES5 に変換します.
- [gulp-myth](https://github.com/sindresorhus/gulp-myth) - [Myth](https://github.com/segmentio/myth) - 今後の CSS スペックのためのポリフィルです.
- [gulp-cssnext](https://github.com/MoOx/gulp-cssnext) - [:no_entry:] 今すぐ [cssnext](https://github.com/MoOx/postcss-cssnext) を使って、明日の CSS 文法を今日使いましょう.

<a id="concatenation"></a>
### 結合

- [gulp-concat](https://github.com/contra/gulp-concat) - ファイルを連結します.

<a id="minification"></a>
### 圧縮

- [gulp-clean-css](https://github.com/scniro/gulp-clean-css) - CSS を [clean-css](https://github.com/jakubpawlowicz/clean-css) で最小化します.
- [gulp-csso](https://github.com/ben-eb/gulp-csso) - CSS を [CSSO](https://github.com/css/csso) で最小化します.
- [gulp-uglify](https://github.com/terinjokes/gulp-uglify) - JavaScript を [UglifyJS2](https://github.com/mishoo/UglifyJS2) で最小化します.
- [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) - HTMLを [html-minifier](https://github.com/kangax/html-minifier) で圧縮します。
- [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) - PNG、JPEG、GIFおよびSVG画像を [imagemin](https://github.com/imagemin/imagemin) で圧縮します。
- [gulp-svgmin](https://github.com/ben-eb/gulp-svgmin) - SVGファイルをgulpで圧縮します。

<a id="optimization"></a>
### 最適化

- [gulp-uncss](https://github.com/ben-eb/gulp-uncss) - 使用されていないCSSセレクタを [UnCSS](https://github.com/giakki/uncss) で削除します。
- [gulp-css-base64](https://github.com/zckrs/gulp-css-base64) - CSSファイル内のurl()宣言に含まれるすべてのリソースを、base64エンコードされたデータURI文字列に変換します。
- [gulp-svg2png](https://github.com/akoenig/gulp-svg2png) - SVGをPNGに変換します。
- [gulp-responsive](https://github.com/mahnunchik/gulp-responsive) - 複数サイズの画像を生成します。
- [gulp-svgstore](https://github.com/w0rm/gulp-svgstore) - SVGファイルを `<symbol>` 要素で1つに結合します。
- [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont) - 複数のSVGアイコンからアイコンフォントを作成します。

<a id="injecting-assets"></a>
### アセットの注入

- [gulp-useref](https://github.com/jonkemp/gulp-useref) - HTMLファイル内のビルドブロックをパースし、最適化されていないスクリプトやスタイルシートへの参照を置き換えます。
- [gulp-inject](https://github.com/klei/gulp-inject) - 各ファイルを文字列に変換し、ターゲットストリームファイル内のプレースホルダーにそれぞれの変換された文字列を挿入します。
- [wiredep](https://github.com/taptapship/wiredep) - Bowerの依存関係をソースコードに接続します。

<a id="templating"></a>
### テンプレート

- [gulp-angular-templatecache](https://github.com/miickel/gulp-angular-templatecache) - AngularJSテンプレートを連結し、$templateCacheに登録します。
- [gulp-jade](https://github.com/phated/gulp-jade) - [Jade](https://github.com/pugjs/jade) → HTML.
- [gulp-handlebars](https://github.com/lazd/gulp-handlebars) - [Handlebars](https://github.com/wycats/handlebars.js) テンプレート → JavaScript。
- [gulp-hb](https://github.com/shannonmoeller/gulp-hb) - [Handlebars](https://github.com/wycats/handlebars.js) テンプレート → HTML。
- [gulp-nunjucks](https://github.com/sindresorhus/gulp-nunjucks) - [Nunjucks](https://github.com/mozilla/nunjucks) テンプレート → JavaScript。
- [gulp-dustjs](https://github.com/sindresorhus/gulp-dust) - [Dust](https://github.com/linkedin/dustjs) テンプレート → JavaScript。
- [gulp-riot](https://github.com/e-jigsaw/gulp-riot) - [Riot](https://github.com/riot/riot) テンプレート → JavaScript。
- [gulp-markdown](https://github.com/sindresorhus/gulp-markdown) - Markdown → HTML。
- [gulp-template](https://github.com/sindresorhus/gulp-template) - [Lodash](https://github.com/lodash/lodash) テンプレート → JavaScript
- [gulp-swig](https://github.com/colynb/gulp-swig) - [Swig](https://github.com/paularmstrong/swig) テンプレート → HTML
- [gulp-remark](https://github.com/denysdovhan/gulp-remark) - Gulp プラグイン for [remark](https://github.com/wooorm/remark) - プラグインを活用した markdown プロセッサ

<a id="linting"></a>
### Lint

- [gulp-csslint](https://www.npmjs.com/package/gulp-csslint) - CSS の自動 lint が [CSSLint](https://github.com/CSSLint/csslint) で実行
- [gulp-htmlhint](https://github.com/bezoerb/gulp-htmlhint) - HTML の検証用 [HTMLHint](https://github.com/yaniswang/HTMLHint) ワッパー
- [gulp-jshint](https://github.com/spalger/gulp-jshint) - JavaScript におけるエラーおよび潜在問題を [JSHint](https://github.com/jshint/jshint) で検出
- [gulp-jscs](https://github.com/jscs-dev/gulp-jscs) - JavaScript コードスタイルを [jscs](https://github.com/jscs-dev/node-jscs) で確認
- [gulp-coffeelint](https://github.com/janraasch/gulp-coffeelint) - [CoffeeScript](https://github.com/jashkenas/coffeescript) コードを清潔に保つためのスタイルチェックツール
- [gulp-tslint](https://github.com/panuhorsmalahti/gulp-tslint) - Gulp 用 [TypeScript](https://github.com/Microsoft/TypeScript) リンタープラグイン
- [gulp-eslint](https://github.com/adametry/gulp-eslint) - ECMAScript/JavaScript コード内のパターンを特定・報告
- [gulp-w3cjs](https://github.com/callumacrae/gulp-w3cjs) - HTML を [w3cjs](https://github.com/thomasdavis/w3cjs) で検証
- [gulp-lesshint](https://github.com/lesshint/gulp-lesshint) - Less ファイルを [lesshint](https://github.com/lesshint/lesshint) で lint
- [gulp-check-unused-css](https://github.com/zalando/gulp-check-unused-css) - HTML テンプレートに使われていない CSS クラスを確認

<a id="live-reload"></a>
### ライブリロード

- [browser-sync](https://github.com/BrowserSync/browser-sync) - ウェブサイト開発時に複数のブラウザとデバイスを同期（[recipes](https://github.com/BrowserSync/gulp-browser-sync)）
- [gulp-livereload](https://github.com/vohof/gulp-livereload) - Gulp 用 livereload プラグイン

<a id="caching"></a>
### キャッシュ

- [gulp-changed](https://github.com/sindresorhus/gulp-changed) - 変更されたファイルのみを通過
- [gulp-cached](https://github.com/contra/gulp-cached) - シンプルなメモリ内ファイルキャッシュ
- [gulp-remember](https://github.com/ahaurw01/gulp-remember) - 通過したファイルを記憶し、再利用
- [gulp-newer](https://github.com/tschaub/gulp-newer) - 新しいソースファイルのみを通過

<a id="flow-control"></a>
### フロー制御

- [merge-stream](https://github.com/grncdr/merge-stream) - 複数のストリームを1つの交互配置ストリームに統合
- [streamqueue](https://github.com/nfroidure/StreamQueue) - パイプに並べられたストリームを順次実行する
- [run-sequence](https://github.com/OverZealous/run-sequence) - 順次、依存するGulpタスクを実行する
- [gulp-if](https://github.com/robrich/gulp-if) - 条件付きでタスクを実行する

<a id="logging"></a>
### ログ

- [gulp-notify](https://github.com/mikaelbr/gulp-notify) - Gulp用の通知プラグイン
- [gulp-size](https://github.com/sindresorhus/gulp-size) - プロジェクトのサイズを表示する
- [gulp-debug](https://github.com/sindresorhus/gulp-debug) - Gulpパイプラインに通されるファイルをデバッグする
- [gulp-beer](https://github.com/lordgiotto/gulp-beer) - インタラクティブな通知とカスタムサーバーによるより良いエラーレポート

<a id="testing"></a>
### テスト

- [gulp-mocha](https://github.com/sindresorhus/gulp-mocha) - [Mocha](https://github.com/mochajs/mocha) のテストを実行する
- [gulp-jasmine](https://github.com/sindresorhus/gulp-jasmine) - Node.jsで [Jasmine 2](https://github.com/jasmine/jasmine) のテストを実行する
- [gulp-protractor](https://github.com/mllrsohn/gulp-protractor) - [Protractor](https://github.com/angular/protractor) のテスト用のGulpラッパー
- [gulp-coverage](https://github.com/dylanb/gulp-coverage) - テストランナーに依存しないNode.js用のカバレッジレポート
- [gulp-karma](https://github.com/karma-runner/gulp-karma) - Gulp用のKarmaテストランナー
- [gulp-ava](https://github.com/sindresorhus/gulp-ava)- Gulpで [AVA](https://github.com/sindresorhus/ava) のテストを実行する

<a id="miscellaneous-plugins"></a>
### その他のプラグイン

- [gulp-util](https://github.com/gulpjs/gulp-util) - 便利なユーティリティのセット
- [gulp-plumber](https://github.com/floatdrop/gulp-plumber) - エラーによって引き起こされるパイプの破壊を防ぐ
- [gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins) - Gulpプラグインを自動的に読み込む
- [main-bower-files](https://github.com/ck86/main-bower-files) - ライブラリファイルを動的に取得してビルドプロセスの設定を簡略化する
- [autoprefixer](https://github.com/postcss/autoprefixer) - Can I Use のデータを使って CSS を解析し、規則へベンダープレフィックスを追加する
- [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) - ソースマップのサポートを提供する
- [gulp-replace](https://github.com/lazd/gulp-replace) - Gulp用の文字列置換プラグイン
- [gulp-rename](https://github.com/hparra/gulp-rename) - ファイルを簡単にリネームできます。
- [gulp-rev](https://github.com/sindresorhus/gulp-rev) - 静的資産のリビジョンを、ファイル名にコンテンツハッシュを付加して実行：unicorn.css → unicorn-d41d8cd98f.css。
- [del](https://github.com/sindresorhus/del) - グロブを使ってファイルやフォルダを削除します。
- [gulp-exec](https://github.com/robrich/gulp-exec) - シェルコマンドを実行します。
- [gulp-strip-debug](https://github.com/sindresorhus/gulp-strip-debug) - JavaScriptコードからコンソール、アラート、デバッガーステートメントを削除します。
- [gulp-cssimport](https://github.com/unlight/gulp-cssimport) - CSSファイルをパースし、インポートを検出し、リンクされたファイルの内容を取得して、インポートステートメントに置き換えます。
- [gulp-inline-css](https://github.com/jonkemp/gulp-inline-css) - HTMLファイルのstyle属性にCSSプロパティをインラインで埋め込みます。
- [gulp-gh-pages](https://github.com/shinnn/gulp-gh-pages) - コンテンツをGitHub Pagesに公開します。
- [gulp-ng-annotate](https://github.com/Kagami/gulp-ng-annotate) - [ng-annotate](https://github.com/olov/ng-annotate) を使って AngularJS の依存性注入アノテーションを追加します。
- [gulp-bump](https://github.com/stevelacy/gulp-bump) - 任意のsemver JSONバージョンをアップデートします。
- [gulp-file-include](https://github.com/coderhaoxin/gulp-file-include) - gulpでファイルをインクルードします。
- [gulp-zip](https://github.com/sindresorhus/gulp-zip) - ファイルをZIPで圧縮します。
- [gulp-git](https://github.com/stevelacy/gulp-git) - gulpでGitコマンドを実行します。
- [gulp-filter](https://github.com/sindresorhus/gulp-filter) - vinylストリーム内のファイルをグロブでフィルタリングします。
- [gulp-preprocess](https://github.com/jas/gulp-preprocess) - カスタムコンテキストまたは環境設定に基づいてファイルを事前処理します。
- [gulp-eval](https://github.com/gulp-bem/gulp-eval) - JS式を評価またはCommonJSモジュールおよびJSONファイルをrequireします。

<a id="scaffolding"></a>
## スキャフォールディング

<a id="boilerplates"></a>
### ボイラープレート

- [web-starter-kit](https://github.com/google/web-starter-kit) - Google Web Starter Kit。
- [gulp-plugin-boilerplate](https://github.com/sindresorhus/gulp-plugin-boilerplate) - gulpプラグインを作成するためのスタートアップテンプレート。
- [polymer-starter-kit](https://github.com/polymerelements/polymer-starter-kit) - ポリマーフレームワーク1.0アプリのスタート地点
- [este](https://github.com/este/este) - 同型ウェブアプリケーション向けの包括的な React／Flux 開発スタックとスターターキット。
- [mnml](https://github.com/mrmrs/mnml) - レスポンシブHTML5/Sassプロジェクトを開始するための最小限のテンプレート。
- [kraken](https://github.com/cferdinandi/kraken) - フロントエンド開発者向けの軽量かつモバイル中心のベースコード
- [angularjs-gulp-browserify-boilerplate](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate) - AngularJS、Sass、gulp、Browserifyを使用したベースコード
- [hapi-ninja](https://github.com/poeticninja/hapi-ninja) - Node.js、Hapi、Swigを用いたベースコード
- [laravel-5-boilerplate](https://github.com/rappasoft/laravel-5-boilerplate) - Laravel 5をベースとしたプロジェクト
- [react-starterkit](https://github.com/wbkd/react-starterkit) - Reactのスタートキット（react-router、Reflux、jest、webpack、gulp、Stylusを含む）
- [gulp-front](https://github.com/zoxon/gulp-front) - gulp、pug、stylus、postcss、webpack、babelをベースとしたフロントエンドベースコードとモジュール化されたBEM CSSフレームワーク
- [Front End Starter](https://github.com/Puritanic/Frontend-Starter-Kit) - Gulp、HTML5ベースコード、Sass、PostCss、Webpack（Babelのトランスパイル用）を活用したフロントエンドプロジェクト用ベースコード

<a id="yeoman-generators"></a>
### Yeoman ジェネレーター

- [generator-gulp-webapp](https://github.com/yeoman/generator-gulp-webapp) - モダンなウェブアプリ向けのgulpジェネレータ
- [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) - AngularJSとgulpを用いたYeomanジェネレータ
- [generator-react-gulp-browserify](https://github.com/randylien/generator-react-gulp-browserify) - Reactライブラリ向けのYeomanジェネレータ（gulp、Browserify、Browsersync、Bootstrapを含む）
- [generator-node-gulp](https://github.com/youngmountain/generator-node-gulp) - gulpとMochaを含むNode.jsモジュールジェネレータ
- [generator-gulp-bootstrap](https://github.com/niallobrien/generator-gulp-bootstrap) - Bootstrap、gulp＆libsassを用いたYeomanジェネドレータ
- [generator-angulpify](https://github.com/jgoux/generator-angulpify) - AngularJS、gulpおよびBrowserifyを用いたYeomanジェネレータ
- [generator-ionic-gulp](https://github.com/tmaximini/generator-ionic-gulp) - Ionicプロジェクト向けのYeomanジェネレータ（gulpを含む）
- [generator-gulp-plugin-boilerplate](https://github.com/sindresorhus/generator-gulp-plugin-boilerplate) - [gulp plugin boilerplate](https://github.com/sindresorhus/gulp-plugin-boilerplate)をスケルトン化する
- [generator-jekyllized](https://github.com/sondr3/generator-jekyllized) - Jekyllワークフロー（gulp、Sass、AutoPrefixer、アセット最適化、キャッシュブーストなど）

<a id="miscellaneous"></a>
## その他

- [elixir](https://github.com/laravel/elixir) - Laravelアプリケーション向けのシンプルで自然なAPI（基本的なgulpタスクの定義）
- [gulp-app](https://github.com/sindresorhus/gulp-app) - Gulpをアプリとして（OS X）
- [lmn-gulp-tasks](https://github.com/Lostmyname/lmn-gulp-tasks) - gulpタスクのユニットテスト例
- [gulp-chef](http://gulp-cookery.github.io/gulp-chef/) - gulpタスクの再利用をシンプルで直感的に実現する方法

<a id="license"></a>
## ライセンス

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲において、[Philipp Alferov](https://github.com/alferov) は本作品に関するすべての著作権および関連する権利を放棄しています。
