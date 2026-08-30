---
title: "ember-community-russia/awesome-ember"
description: "Ember.jsのアドオン、ツール、教材、動画、コミュニティ、事例集"
licenseSource: "github-ember-community-russia-awesome-ember-readme-md"
---

# Awesome Ember.js [![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)

<div align="center">
  <a href="https://emberjs.com"><img width="300" src="https://raw.githubusercontent.com/ember-community-russia/awesome-ember/6f7743a5868b3cb619caea7566d93b83f6f0e2bc/media/ember-logo.svg" alt="Ember.js"></a>
  <br>
</div>

<p align="center">A curated list of delightful Ember.js <a href="#packages">packages</a> and <a href="#resources">resources</a>.</p>

<br>

<p align="center">
  <a href="https://github.com/ember-community-russia/awesome-ember/blob/6f7743a5868b3cb619caea7566d93b83f6f0e2bc/ember-myths.md">Ember.js Myths</a>&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/ember-community-russia/awesome-ember/blob/6f7743a5868b3cb619caea7566d93b83f6f0e2bc/ember-questions.md">Readers Questions</a>&nbsp;&nbsp;&nbsp;
  <a href="https://help-wanted.emberjs.com/core">Contribute to Ember.js</a>
</p>

<br>

<p align="center">
  <sub>Just type <a href="https://ember.cool"><code>ember.cool</code></a> OR <a href="https://ember-community-russia.github.io/awesome-ember/"><code>https://ember-community-russia.github.io/awesome-ember/</code></a> to go here.</sub>
</p>

---

[Ember.js](https://emberjs.com)は、ウェブアプリケーションの開発に必要な時間、労力およびリソースを大きく削減するJavaScriptフレームワークです。開発者としてあなたが可能な限り生産的になるように、ほとんどのウェブ開発プロジェクトで行われる、よくある、繰り返し行われるが重要なタスクをすべて行うことで、焦点を当てています。

[Ember.js](https://emberjs.com)は、JavaScript、HTMLおよびブラウザの最も先進的な機能にアクセスできるようにし、次に開発する最高のウェブアプリケーションを作成するために必要なすべての機能を提供します。

---

*あなたはまた、[awesome-javascript](https://github.com/sorrycc/awesome-javascript)も気になさるかもしれません。*
*貢献する前に、[contribution guidelines](https://github.com/ember-community-russia/awesome-ember/blob/6f7743a5868b3cb619caea7566d93b83f6f0e2bc/contributing.md)を読んでください。*

---

## Contents
- Awesome Ember.js [![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome)
  - [Contents](#contents)
  - [Packages](#packages)
    - [AST](#ast)
    - [a11y](#a11y)
    - [Adapters](#adapters)
    - [Animations](#animations)
    - [Authentication](#authentication)
    - [Automation](#automation)
    - [Benchmarking](#benchmarking)
    - [Blogging](#blogging)
    - [Babel](#babel)
    - [Boilerplating](#boilerplating)
    - [Broccoli](#broccoli)
    - [Broccoli read](#broccoli-read)
    - [Build tools](#build-tools)
    - [Charts](#charts)
    - [CI/CD](#cicd)
    - [Code Splitting](#code-splitting)
    - [Codestyle](#codestyle)
    - [Command-line apps](#command-line-apps)
    - [Command-line utilities](#command-line-utilities)
    - [Component addons](#component-addons)
    - [Compression](#compression)
    - [Content management systems](#content-management-systems)
    - [Control flow](#control-flow)
    - [CSS & etc](#css--etc)
    - [Fonts](#fonts)
    - [State management](#state-management)
    - [Styling kits](#styling-kits)
    - [Data Management](#data-management)
    - [Data manipulation & Computed](#data-manipulation--computed)
    - [Data validation](#data-validation)
    - [Database](#database)
    - [Date](#date)
    - [Debugging / Profiling](#debugging--profiling)
    - [Decorators](#decorators)
    - [Documentation](#documentation)
    - [Ember-inspector roadmaps & overview](#ember-inspector-roadmaps--overview)
    - [End-user customization](#end-user-customization)
    - [ES6](#es6)
    - [External Components Integration](#external-components-integration)
    - [Forms](#forms)
    - [Functional programming](#functional-programming)
    - [HTTP](#http)
    - [Helpers](#helpers)
    - [Image](#image)
    - [Include external JS code](#include-external-js-code)
    - [Infinite Scroll](#infinite-scroll)
    - [Internalization & Localization](#internalization--localization)
    - [Inputs](#inputs)
    - [Job queues](#job-queues)
    - [Logging](#logging)
    - [Mad science](#mad-science)
    - [Math](#math)
    - [Metrics](#metrics)
    - [Minifiers](#minifiers)
    - [Miscellaneous](#miscellaneous)
    - [Mobile](#mobile)
    - [Modifiers](#modifiers)
    - [Parcel](#parcel)
    - [Payments](#payments)
    - [Polyfills](#polyfills)
    - [PWA](#pwa)
    - [Query Params](#query-params)
    - [Real-time](#real-time)
    - [Routing addons](#routing-addons)
    - [Resolver customization](#resolver-customization)
    - [Security](#security)
    - [Service Workers](#service-workers)
    - [SSR / Server Side Rendering](#ssr--server-side-rendering)
    - [Static site generators & SEO](#static-site-generators--seo)
    - [Styling](#styling)
    - [Templating](#templating)
    - [Testing](#testing)
    - [Text](#text)
    - [Tree Shaking](#tree-shaking)
    - [TypeScript](#typescript)
    - [UI libs](#ui-libs)
    - [UI components](#ui-components)
    - [UX](#ux)
    - [VR](#vr)
    - [VS Code addons](#vs-code-addons)
    - [Atom addons](#atom-addons)
    - [VIM](#vim)
    - [Web Components](#web-components)
    - [Webpack](#webpack)
    - [Weird](#weird)
    - [Resources](#resources)
    - [Articles](#articles)
    - [Ember-Cli Articles](#ember-cli-articles)
    - [Why Articles](#why-articles)
    - [Jump-Start Articles](#jump-start-articles)
    - [Articles Glimmer](#articles-glimmer)
    - [Articles Engines](#articles-engines)
    - [Articles Ember-Concurrency](#articles-ember-concurrency)
    - [Articles ES6](#articles-es6)
    - [Articles TypeScript](#articles-typescript)
    - [Articles Modern Testing](#articles-modern-testing)
    - [Articles FastBoot](#articles-fastboot)
    - [Articles about Data](#articles-about-data)
    - [Articles about Routing](#articles-about-routing)
    - [Yarn in Ember Articles](#yarn-in-ember-articles)
    - [Best-practices](#best-practices)
    - [Nice to know](#nice-to-know)
    - [Blogs](#blogs)
    - [Books](#books)
    - [Cheatsheets](#cheatsheets)
    - [Codemods](#codemods)
    - [Community](#community)
    - [Contribution Guides](#contribution-guides)
    - [Courses](#courses)
    - [Discovery](#discovery)
    - [Ember Releases](#ember-releases)
    - [Examples](#examples)
    - [Examples Glimmer](#examples-glimmer)
    - [Gists](#gists)
    - [Gists Ember Data](#gists-ember-data)
    - [Miscellaneous](#miscellaneous-1)
    - [Newsletters](#newsletters)
    - [Podcasts](#podcasts)
    - [Sandboxes](#sandboxes)
    - [Screencasts](#screencasts)
    - [Slides](#slides)
    - [Styleguides](#styleguides)
    - [Tools](#tools)
    - [Tutorials](#tutorials)
    - [Twitter](#twitter)
    - [Videos](#videos)
    - [YouTube channels](#youtube-channels)
    - [YouTube playlists](#youtube-playlists)
  - [License](#license)


## Packages
### AST

- [ember-ast-helpers](https://github.com/cibernox/ember-ast-helpers) - このライブラリは、AST変換を実行するためのユーティリティボックスであり、ASTの細部についてユーザーにできるだけ影響を与えないようにするためのプライベートAPIを隠蔽します
- [ember-template-recast](https://github.com/ember-template-lint/ember-template-recast) - 非破壊的なテンプレート変換器
- [jscodeshift](https://github.com/facebook/jscodeshift) - JavaScriptのコードモッドツールキット
- [dyfactor](https://github.com/dyfactor/dyfactor) - 実行時情報に基づいてコードモッドを実行するプラットフォーム

### a11y

- [ember-accessibility](https://github.com/coyote-labs/ember-accessibility) - 開発中にアクセシビリティ違反を特定するためのアドオン
- [e-a11y-modal](https://github.com/MelSumner/e-a11y-modal) - アクセシブルなEmber.jsアプリケーション向けのシンプルなモーダル
- [ember-a11y-landmarks](https://github.com/ember-a11y/ember-a11y-landmarks) - Ember.jsアドオンで、より良いアクセシビリティを実現するためのランドマークロールをサポート
- [ember-a11y](https://github.com/ember-a11y/ember-a11y) - アクセシブルなEmber.jsアプリケーションを構築するためのツールのコレクション
- [ember-component-focus](https://github.com/ember-a11y/ember-component-focus) - Ember.jsコンポーネントにメソッドを追加するミックスインで、現在フォーカスされている要素を管理する機能を提供
- [ember-gestures](https://github.com/html-next/ember-gestures) - Ember.jsジェスチャは、アプリ全体でHammerJSマネージャーと認識者を定義・使用しやすくすることで、ジェスチャの使用を簡単に行う方法を提供
- [ember-steps](https://github.com/rwjblue/ember-steps) - 宣言的に作成されるウィザード、タブ付きUIなど
- [ember-page-title](https://github.com/tim-evans/ember-page-title) - Ember.jsアプリケーションにおけるページタイトルの管理
- [ember-self-focused](https://github.com/linkedin/self-focused/tree/master/packages/ember-self-focused) - ルートへのフォーカスの遷移時処理
- [ember-keyboard](https://github.com/patience-tema-baron/ember-keyboard) - キーボードイベントのサポートを簡単に行うためのEmber.jsアドオン
- [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing) - Ember.jsテストフレームワーク内で実行可能なアクセシビリティテストのセット
- [a11y-announcer](https://github.com/ember-a11y/a11y-announcer) - アクセシブルなEmber.jsルート変更アナウンサー
- [ember-a11y-refocus](https://github.com/MelSumner/ember-a11y-refocus) - Emberアプリケーションに非侵襲的にナビゲーションのナレーション要素を提供

### Adapters

- [ember-cli-markdown-resolver](https://github.com/willviles/ember-cli-markdown-resolver) - カスタムフォルダ内のマークダウンファイルを解決し、サービス経由でコンテンツを取得するためのEmber CLIアドオン
- [ember-cloud-firestore-adapter](https://github.com/rmmmp/ember-cloud-firestore-adapter) - 非公式なEmber Dataアダプタとシリアライザ（Cloud Firestore用）
- [ember-data-hal-9000](https://github.com/201-created/ember-data-hal-9000) - Ember-dataと互換性のあるEmber-cliアドオンで、HALアダプタ（HATEOAS）を提供
- [ember-django-adapter](https://github.com/dustinfarris/ember-django-adapter) - Django REST Framework 用 Ember CLI アドオン アダプタ
- [ember-graphql-adapter](https://github.com/alphasights/ember-graphql-adapter) - Ember Data 用 GraphQL アダプタ
- [ember-indexeddb](https://github.com/mydea/ember-indexeddb) - EmberおよびEmber DataでIndexedDBと連携するためのユーティリティとアダプタ
- [ember-localforage-adapter](https://github.com/genkgo/ember-localforage-adapter) - Ember Data でのオフライン使用
- [ember-local-storage](https://github.com/funkensturm/ember-local-storage) - 計算プロパティがプロキシを返すストレージを提供し、変更を localStorage または sessionStorage に永続化するアドオン
- [ember-pouch](https://github.com/pouchdb-community/ember-pouch) - Ember Data 用 PouchDB/CouchDB アダプタ
- [ember-wordpress](https://github.com/oskarrough/ember-wordpress) - Ember.js と WordPress の橋渡し
- [emberfire](https://github.com/firebase/emberfire) - Firebase 用の公式 Ember Data アダプタ
- [ninjafire](https://github.com/lineupninja/ninjafire) - TypeScript で書かれた Firebase 用の ORM

### Animations

- [ember-animated](https://github.com/ember-animation/ember-animated) - [Web Animations with Ember js](https://www.youtube.com/watch?v=TSvnutA9PUE)
- [liquid-fire](https://github.com/ember-animation/liquid-fire) - 野心的な Ember.js アプリケーション向けのアニメーションとトランジション

### Authentication

- [ember-cli-simple-auth-extensions](https://emberobserver.com/categories/ember-cli-simple-auth-extensions)
- [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) - Ember.js アプリケーションにおける認証/認可を実装するためのライブラリ
- [tori](https://github.com/Vestorly/torii) - Ember.js における認証を簡潔に抽象化したセット

### Automation

- [ember-cli-deploy](https://github.com/ember-cli-deploy/ember-cli-deploy) - Ember CLI アプリケーション向けのデプロイパイプライン
- [ember-cli-deploy-webhooks](https://github.com/simplabs/ember-cli-deploy-webhooks) - Ember CLI デプロイプラグイン（デプロイ時にウェブホークを呼び出す）
- [ember-cli-release](https://github.com/shipshapecode/ember-cli-release) - Ember CLI 用のバージョン管理によるリリース管理アドオン
- [ember-cli-sri](https://github.com/jonathanKingston/ember-cli-sri) - このプラグインは ember アプリケーションのサブリソースインテグリティ（SRI）ハッシュを生成する
- [ember-cli-dependency-lint](https://github.com/salsify/ember-cli-dependency-lint) - アプリケーションのアドオン依存関係をチェックし、各依存関係について1バージョンだけを確保する

### Benchmarking

- [ember-macro-benchmark](https://github.com/krisselden/ember-macro-benchmark) - Ember.js の2バージョンを実行しているemberアプリのベンチマーク記録
- [ember-performance](https://github.com/eviltrout/ember-performance) - Ember.js 用のパフォーマンス向上を支援するテストセット
- [emberperf](http://emberperf.eviltrout.com) - エマーブのパフォーマンス（バージョン間の比較）

### Blogging

- [empress-blog](https://github.com/empress/empress-blog) - エマーブで構築されたブログシステムの、完全に機能し、SEO対応の静的サイトの実装
- [ember-cli-blog](https://github.com/broerse/ember-cli-blog) - トム・デールのブログ例をエマーブCLIにアップデートしたもの
- [ember-tumblr](https://github.com/elwayman02/ember-tumblr) - エマーブでTumblrブログを統合するアドオン

### Babel

- [ember-cli-babel-plugin-helpers](https://github.com/dfreeman/ember-cli-babel-plugin-helpers) - エマーブCLIアプリケーションおよびアドオンでBabelプラグインを管理するためのユーティリティ

### Boilerplating

- [ember-boilerplate](https://github.com/mirego/ember-boilerplate) -  マイレゴでエマーブプロジェクトを構築するための安定したベース


### Broccoli

- [broccoli-concat-analyser](https://github.com/stefanpenner/broccoli-concat-analyser) - アセットプロファイリング
- [broccoli-debug](https://github.com/broccolijs/broccoli-debug) - ブロッコリーパイプラインの作成者向けに、ブロッコリーパイプラインのデバッグを簡単に行えるユーティリティ
- [broccoli-stew](https://github.com/stefanpenner/broccoli-stew) - ブロッコリーベースのビルドパイプライン開発に必要な便利関数を提供
- [broccolijs-tutorial](https://github.com/oligriffiths/broccolijs-tutorial) - ブロッコリーツールのチュートリアルリポジトリ
- [broccoli-rollup](https://github.com/chadhietala/broccoli-rollup) - ブロッコリープラグイン「Rollup」
- [broccoli-manifest](https://github.com/racido/broccoli-manifest) - HTML5キャッシュマニフェストのブロッコリーパイプラインでのコンパイル
- [broccoli-glow](https://github.com/locks/broccoli-glow) - 1ファイルから動的コンポーネントを作成など

### Broccoli read

- [Debugging a Broccoli Tree](https://dockyard.com/blog/2015/02/02/debugging-a-broccoli-tree)
- [Debugging Broccoli and Ember-CLI](https://mfeckie.github.io/Debugging-Broccoli-And-Ember/)
- [Debugging Ember-cli Build Times](https://medium.com/@Dhaulagiri/debugging-ember-cli-build-times-38bd1b0f55f9)
- [Eat Your Greens - A Broccoli.js tutorial](http://www.oligriffiths.com/broccolijs/)
- [Ember.js Lazy Assets: Fingerprinting & loading static/dynamic assets on demand](https://codeburst.io/ember-js-lazy-assets-fingerprinting-loading-static-dynamic-assets-on-demand-f09cd7568155)
- [Thoughts on how to write faster broccoli plugins](https://gist.github.com/Gaurav0/c1eb3a00670eed28e57c2cf92d3f7668)

### Build tools

- [Broccoli](https://github.com/broccolijs/broccoli) - 高速かつ信頼性の高いアセットパイプライン。再構築時間は定数、ビルド定義はコンパクトにサポート

### Charts

- [ember-charts](https://github.com/Addepar/ember-charts) - エマーブとd3.jsフレームワークで構築されたチャートライブラリ
- [ember-sparkles](https://github.com/LocusEnergy/ember-sparkles) - ember-d3-helpersで構築された、組み立て可能なD3コンポーネントのコレクション
- [ember-highcharts](https://github.com/ahmadsoe/ember-highcharts) - Highcharts、HighStock、HighMapsのエマーブCLI用コンポーネント
- [ember-c3](https://github.com/Glavin001/ember-c3) - C3（D3ベースの再利用可能なチャートライブラリなど）のアドオンライブラリ

### CI/CD

- [ember-cli-server-variables](https://github.com/blimmer/ember-cli-server-variables) - エマーブCLIアドオンで、生成されたindex.htmlファイルのheadタグに変数を追加するサポート
- [ember-ci](https://github.com/mike-north/ember-ci) - エマーブアプリケーション向けの継続的統合ツール
- [CI with GitHub Actions for Ember Apps](https://crunchingnumbers.live/2020/03/17/ci-with-github-actions-for-ember-apps/) - GitHub ActionsでCI実行時間を短縮
- [CI with GitHub Actions for Ember Apps: Part 2](https://crunchingnumbers.live/2020/08/31/ci-with-github-actions-for-ember-apps-part-2/) - v2アクションへの移行により実行時間とコストを削減し、継続的デプロイを実現

### Code Splitting

- [ember-engines](https://github.com/ember-engines/ember-engines) - このEmber.jsアドオンは、Ember.jsエンジンRFCに記述された機能を実装しています。エンジンは、ユーザーの視点から複数の論理アプリケーションを1つのアプリケーションに組み合わせることを可能にします。
- [ember-lazy-mount](https://github.com/buschtoens/ember-lazy-mount) - {{mount}}によるエンジンの遅延読み込みルートなしエンジンを許可
- [ember-cli-bundle-loader](https://github.com/MiguelMadero/ember-cli-bundle-loader) - 複数のバンドルと遅延読み込みを可能にするアドオン
- [ember-cli-lazy-load](https://github.com/duizendnegen/ember-cli-lazy-load) - Ember.jsアプリケーションをバンドルに分割して、遅延読み込みをサポート

### Codestyle

- [ember-cli-template-lint](https://github.com/ember-template-lint/ember-cli-template-lint) - Ember CLIとの統合 `ember-template-lint`
- [ember-cli-alex](https://github.com/yohanmishkin/ember-cli-alex) - Ember.jsアプリ向けのアレクス
- [ember-prop-types](https://github.com/ciena-blueplanet/ember-prop-types) - Ember.jsアプリおよびアドオン向けのプロパティ管理の改善

### Command-line apps

- [ember-cli-create](https://github.com/gossi/ember-cli-create) - 新しいEmberプロジェクトを作成するCLIウィザード
- [@ember/optional-features](https://github.com/emberjs/ember-optional-features) - このアドオンは、ember-sourceのオプション機能を簡単に有効・無効にできるようにします。ここで言う「オプション」とは、将来の見通しにおいて選択的に有効・無効になる機能を指し、デフォルトで有効になる機能とは異なります。これはアプリケーション用にのみ使用される予定です。
- [ember-cli-rename](https://github.com/trabus/ember-cli-rename) - ember-cli向けアドオンで `ember rename` コマンドを提供

### Command-line utilities

- [ember-cli-update](https://github.com/ember-cli/ember-cli-update) - Ember CLIのEmber.jsアプリ、アドオン、Glimmer.jsアプリの更新
- [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) - Ember.jsのアップグレードをしやすくするアドオンで、大規模なコンソールノイズを避けながらデプレケーションを処理できます。

### Component addons

- [ember-diff-attrs](https://github.com/workmanw/ember-diff-attrs)
- [ember-compatibility-helpers](https://github.com/pzuraq/ember-compatibility-helpers) - バックワード互換性を持つEmber.jsアドオンを書くためのヘルパー

### Compression

- [ember-cli-deploy-brotli](https://github.com/mfeckie/ember-cli-deploy-brotli) - Ember.jsデプロイプラグインでbrotli圧縮をサポート


### Content management systems

- [ember-admin](https://github.com/DockYard/ember-admin) - モデルを自動的に発見し、すべてのモデルデータをシンプルなCRUDインターフェースで操作
- [https://authmaker.com/](https://authmaker.com/) -  3日間でゼロから完全に機能するライブMVPへ。

### Control flow

- Promises
	- [ember-computed-promise-monitor](https://github.com/NullVoxPopuli/ember-computed-promise-monitor) - 計算プロパティにasync認識を可能にする
- Observables
	- [ember-rx](https://github.com/alexlafroscia/ember-rx) - Ember.jsにおけるRxJS 6の統合
- Generators
	- [ember-concurrency](https://github.com/machty/ember-concurrency) - Ember.js に追加されたアドオンで、簡潔で安心できる、キャンセル可能かつ再起動可能な非同期タスクを書くことができます。
  - [ember-master-tab](https://github.com/rhyek/ember-master-tab) - Emberアプリケーションの一つのタブにのみ関数を実行するためのサービスを提供するライブラリ。

### CSS & etc

- [ember-cli-stylelint](https://github.com/billybonks/ember-cli-stylelint) - あなたのEmberアプリにstyleintを追加し、すべてのCSSをチェックできます。
- [ember-cli-autoprefixer](https://github.com/kimroen/ember-cli-autoprefixer) - 自動的にあなたのスタイルをautoprefixerで処理します。
- [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) - node-sassを使って、ember-cliアプリのファイルを事前処理し、sourceMapsおよびinclude pathsをサポート
- [ember-cli-sass-pods](https://github.com/justtal/ember-cli-sass-pods) - podディレクトリにあるsassスタイルファイルを使って、podのスタイルを設定できます。
- [ember-component-css](https://github.com/ebryn/ember-component-css) - Ember CLI向けのPostCSS統合。
- [ember-cli-postcss](https://github.com/jeffjewiss/ember-cli-postcss) - 野心的なアプリケーション向けのCSSモジュール。
- [ember-css-modules](https://github.com/salsify/ember-css-modules) - Tailwindは、カスタムユーザインターフェースを迅速に構築するための、ユーティリティ中心のCSSフレームワークです。
- [ember-cli-tailwind](https://github.com/embermap/ember-cli-tailwind) - Ember.jsでemotionスタイルを使用できます。
- [ember-emotion](https://github.com/alexlafroscia/ember-emotion) - 高パフォーマンスかつ維持性の高いスタイルシート。
- [css-blocks](https://github.com/linkedin/css-blocks) - このEmber CLIアドオンにより、node-sassでeyeglassサポートを有効にしたSassファイルのコンパイルが非常に簡単になります。
- [ember-cli-eyeglass](https://github.com/linkedin/eyeglass/tree/master/packages/ember-cli-eyeglass) - Ember CLIのビルドプロセスの一部として、SVGファイルからウェブフォントを簡単に生成できます。

### Fonts
- [ember-cli-webfont](https://github.com/vitch/ember-cli-webfont) - Cerebralを使用した複雑なEmber.jsアプリケーション向けの強化されたステート管理。

### State management

- [ember-buffered-proxy](https://github.com/yapplabs/ember-buffered-proxy)
- [ember-changeset](https://github.com/poteto/ember-changeset)
- [ember-cerebraljs](https://github.com/lifeart/ember-cerebraljs) - Emberアプリ向けの予測可能なステート管理。
- [ember-redux](http://www.ember-redux.com/) - アプリまたはアドオンにTailwind CSSを追加します。
- [ember-state-services](https://github.com/stefanpenner/ember-state-services)
- [ember-time-machine](https://github.com/offirgolan/ember-time-machine)


### Styling kits

- [ember-cli-tailwind](https://github.com/embermap/ember-cli-tailwind) - Ember.js向けのCouchDBの保存ライブラリ。

### Data Management

- [ember-apollo-client](https://github.com/bgentry/ember-apollo-client) - Apollo ClientおよびGraphQL向けのEmber CLI拡張機能
- [ember-cli-sofa](https://github.com/ampatspell/ember-cli-sofa) - Orbit.jsで構築されたEmber.jsのデータレイヤー。
- [ember-orbit](https://github.com/orbitjs/ember-orbit) - よくあるデータロード問題を解決するためのAPIのコレクション。
- [ember-data-storefront](https://github.com/embermap/ember-data-storefront) - よくあるデータ読み込み問題を解決するAPIのコレクション。
- [ember-m3](https://github.com/hjdivad/ember-m3) - この拡張機能はDS.Modelに対する代替実装を提供します
- [ember-cli-zuglet](https://www.ember-cli-zuglet.com/) - Ember.js用のFirebaseとの簡単な統合を実現する拡張機能

### Data manipulation & Computed

- [ember-awesome-macros](https://github.com/kellyselden/ember-awesome-macros) - Ember.jsの計算マクロのコレクション
- [ember-cpm](https://github.com/cibernox/ember-cpm) - Ember.js用の計算プロパティマクロ
- [ember-macaroni](https://github.com/poteto/ember-macaroni) - 計算プロパティマクロ（マクロ）を使ってアプリケーションコードをDRYかつコピーペーストフリーに保持してください

### Data validation

- [ember-cp-validations](https://github.com/offirgolan/ember-cp-validations) - Ember.jsの計算プロパティベースのバリデーション
- [ember-changeset-validations](https://github.com/poteto/ember-changeset-validations/) - ember-changeset用のバリデーション
- [ember-model-validator](https://github.com/esbanarango/ember-model-validator) - 明確で簡単な方法でEmber Dataモデルにバリデーションを追加できます。複数のバリデーションファイルや複雑な構造を必要とせず、シンプルに実現できます
- [ember-validated-form](https://github.com/adfinis-sygroup/ember-validated-form) - クライアントサイドバリデーションを簡単にフォームを作成できます
- [ember-line-graph](https://astronomersiva.github.io/ember-line-graph/) - ゼロ依存のEmber拡張機能でラインチャートを描画します

### Database

- [ember-indexeddb](https://github.com/mydea/ember-indexeddb) - EmberおよびEmber DataでIndexedDBと連携するためのユーティリティとアダプタ

### Date

- [ember-moment](https://github.com/stefanpenner/ember-moment) - moment.jsおよびEmber.js用のテンプレートヘルパーと計算プロパティマクロ


### Debugging / Profiling

- [ember-debug-logger](https://github.com/salsify/ember-debug-logger) - Ember.jsアプリケーション内でvisionmedia/debugライブラリを公開します
- [ember-devtools](https://github.com/aexmachina/ember-devtools) - 便利なEmber.jsデバッグ関数を収録したコレクの集まり
- [ember-chrome-devtools](https://github.com/dwickern/ember-chrome-devtools) - Ember.js用のChrome DevTools拡張機能
- [ember-cli-bundle-analyzer](https://github.com/kaliber5/ember-cli-bundle-analyzer) - Ember CLI拡張機能で、アプリのバンドル出力のサイズと内容をインタラクティブなズーム可能なトレーマップを使って分析します
- [ember-perf-timeline](https://github.com/ember-best-practices/ember-perf-timeline) - Ember.jsアプリケーションのChromeのTimelineにパフォーマンス情報を追加します
- [ember-cli-route-map](https://github.com/BBVAEngineering/ember-cli-route-map) - Ember.jsアプリケーションのルートマップを生成するコマンド
- [heimdalljs-visualizer](https://github.com/rwjblue/heimdalljs-visualizer) - heimdalljsデータの可視化ツール
- [source-map-explorer](https://github.com/danvk/source-map-explorer) - ソースマップを用いてスペース使用量を分析およびデバッグします
- [ember-dead-code](https://github.com/buschtoens/ember-dead-code) - リアルユーザー監視により、死コードを確実に検出

### Decorators

- [Macro Decorators](https://pzuraq.github.io/macro-decorators/) - getter/setterの機能を再利用するデコレーターを作成してコードをDRY化

### Documentation

- [ember-cli-addon-docs](https://github.com/ember-learn/ember-cli-addon-docs) - Ember.jsアドオン用の簡単で美しいドキュメンテーション
- [ember-cli-jsdoc](https://github.com/softlayer/ember-cli-jsdoc) - Ember.js CLIアドオンでソースコード内のJSDocコメントからHTMLドキュメンテーションを生成
- [ember-freestyle](https://github.com/chrislopresto/ember-freestyle) - Ember-freestyleはEmber.jsアプリケーションに迅速にコンポーネントエクスプローラを作成できるEmber.jsアドオン

### Ember-inspector roadmaps & overview

- [Ember Inspector Pairing](https://www.youtube.com/watch?v=rFNR_Fj1G84)
- [Ember Inspector Sync](https://www.youtube.com/watch?v=PvsfQrKxl_8)

### End-user customization
- [ember-asset-loader](https://github.com/ember-engines/ember-asset-loader) - Ember.jsアプリケーションにおけるアセットロードサポート
- [ember-experiments](https://github.com/outdoorsy/ember-experiments) - Ember.js向けの実験、A/B分割テストアドオン
- [ember-cli-hot-loader](https://github.com/toranb/ember-cli-hot-loader) - emberエコシステムにおけるホットロードがどうなるかを、早期に確認
- [ember-ast-hot-load](https://github.com/lifeart/ember-ast-hot-load) - ユニバーサルホットロードアドオン
- [ember-cli-build-notifications](https://github.com/pdud/ember-cli-build-notifications) - ember-cliがビルドエラーを発生した際に通知
- [ember-feature-flags](https://github.com/kategengler/ember-feature-flags) - 機能フラグを提供するember-cliアドオン
- [ember-named-yields](https://github.com/knownasilya/ember-named-yields) - Ember.jsコンポーネントにおけるNamed Yields
- [ember-islands](https://github.com/mitchlloyd/ember-islands) - サーバーでレンダリングされたページのどこかにEmber.jsコンポーネ及をレンダリングして「豊かさの島」を作成
- [ember-wormhole](https://github.com/yapplabs/ember-wormhole) - DOMのどこかに子ビューをレンダリング
- [ember-stargate](https://github.com/kaliber5/ember-stargate) - 論理的にアプリ内で定義された場所とは異なるDOMツリーの場所に何かをレンダリングするための、所謂「ポート」と呼ばれるアプローチの現代的なアプローチ

### ES6

- [ember-concurrency-decorators](https://github.com/machty/ember-concurrency-decorators) -  ember-concurrencyタスクの宣言・設定に用いるデコレーター構文
- [ember-decorators](https://github.com/ember-decorators/ember-decorators) - Ember.jsアプリケーションに役立つデコレーター
- [@ember-decorators/argument](https://github.com/ember-decorators/argument) - Ember.jsにおけるコンポーネントおよびオブジェクト引数用のデコレーター
- [sparkles-decorators](https://github.com/gossi/sparkles-decorators) - Sparkles/Glimmer.jsコンポーネント用のデコレーター

### External Components Integration

- [ember-glimmer-component](https://github.com/smfoote/ember-glimmer-component) - Ember.jsにおけるGlimmer.jsのようなコンポーネント
- [sparkles-component](https://github.com/rwjblue/sparkles-component) - @glimmer.js/component のスタイル API を試すために Ember.js アプリで既存の公開 API を使って開発するための Addon
- [hooked-components](https://github.com/lifeart/hooked-components) - React Hooks のアプローチを受けて作られた Ember.js のカスタムコンポーネント
- [ember-functional-component](https://github.com/rwjblue/ember-functional-component) - 「純粋関数」をコンポーネントとして使う試み
- [ember-lifecycle-component](https://github.com/NullVoxPopuli/ember-lifecycle-component) - テンプレートを必要とする場合に追加のライフサイクルを持つコンポーネント
- [ember-vue-components](https://github.com/lifeart/ember-vue-components) - Ember 用の Vue.JS コンポーネの API
- [@alexlafroscia/ember-cli-react](https://github.com/alexlafroscia/ember-cli-react) - Ember.js で React コンポーネントをレンダリング
- [@AltSchool/ember-cli-react](https://github.com/AltSchool/ember-cli-react) - Ember.js アプリ内で React コンポーネントの階層を使う

### Forms

- [ember-cli-crudities](https://ember-cli-crudities.readthedocs.io) - JSON コンフィギュレーションから構築されるフォームと編集可能なリストビルダー。コンフィギュレーションは静的または動的に読み込める。
- [ember-form-for](https://github.com/martndemus/ember-form-for) - この Ember.js の Addon が、良いフォームを簡単に作る手段を提供する。

### Functional programming

- [Bacon.js](http://baconjs.github.io) - 関数型反応プログラミング
- [Folktale](http://folktale.origamitower.com) - JavaScript における一般関数型プログラミングのライブラリセット。エレガントでモジュラリティの高いアプリケーションを書くことができ、バグが少なく、再利用性が高まる。
- [immutable](https://github.com/facebook/immutable-js) - 変更不可能なデータコレクション
- [Kefir.js](https://github.com/rpominov/kefir) - 高性能かつ低メモリ使用量に焦点を当てた反応ライブラリ
- [Lazy.js](https://github.com/dtao/lazy.js) - lodash/Underscore に類似したユーティリティライブラリだが、遅延評価を採用しており、多くの場合に優れたパフォーマンスをもたらす。
- [lodash](https://lodash.com) - 一貫性、カスタマイズ、パフォーマンス、および追加機能を提供するユーティリティライブラリ。より良い、より速い Underscore.js。
- [mori](http://swannodette.github.io/mori/) - ClojureScript の持続データ構造とサポート API を、シンプルな JavaScript で使うためのライブラリ。
- [Mout](http://moutjs.com) - 他の既存ソリューションと比べて最大の違いは、必要なモジュール／関数だけをロードできる点。追加の負荷が無い。
- [Ramda](http://ramdajs.com) - 他の既存ソリューションと比べて、自動カーリングと引数順の逆転によって柔軟な関数型合成を可能にするユーティリティライブラリ。データの変更を避ける。
- [RxJS](http://reactivex.io) - さまざまな種類のデータを変換・合成・クエリするための関数型反応ライブラリ。
- [underscore-contrib](http://documentcloud.github.io/underscore-contrib/) - Underscore のユーティリティベルトのブラスボルト

### HTTP

- [ember-ajax](https://github.com/ember-cli/ember-ajax) - Ember.js 1.13以降のアプリケーション向けのAJAXリクエスト用サービス
- [ember-socket-guru](https://github.com/netguru/ember-socket-guru) - Pusher.js、Action Cable、Socket.ioおよびPhoenix Channelsとの簡単な統合を可能にするアドオン

### Helpers

- [ember-event-helpers](https://github.com/buschtoens/ember-event-helpers) - `{{on}}`モジュールに付随するイベントテンプレートヘルパー
- [ember-render-helpers](https://github.com/buschtoens/ember-render-helpers) - `@ember/render-modifiers`をテンプレートヘルパーとして提供
- [ember-element-helper](https://github.com/tildeio/ember-element-helper) - Glimmerテンプレート向けの動的要素ヘルパー
- [ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers) - Ember.jsにおける宣言型テンプレートに用いる可合成ヘルパー
- [ember-helpers](https://github.com/abcum/ember-helpers) - Ember.js向けのHandlebarsヘルパーのコレクション
- [ember-d3-helpers](https://github.com/LocusEnergy/ember-d3-helpers) - Ember.jsで構築可能なD3チャートを構築するためのEmber.jsヘルパーのコレクション
- [ember-math-helpers](https://github.com/shipshapecode/ember-math-helpers) - Ember.js HTMLBarsヘルパーで基本的な算術演算を実行します。
- [ember-promise-helpers](https://github.com/fivetanley/ember-promise-helpers) - Ember.jsテンプレート向けのPromise型の糖衣
- [ember-route-action-helper](https://github.com/DockYard/ember-route-action-helper) - ルートのアクションで閉じるアクション
- [ember-root-url](https://github.com/ef4/ember-root-url) - アプリケーションのrootURLに相対的なURLを維持するためのテンプレートヘルパー
- [ember-store-helpers](https://github.com/ember-sapporo/ember-store-helpers) - このアドオンはember-dataに関連するヘルパーを提供
- [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers) - Ember.js HTMLBarsヘルパー：`{{if}}`および`{{unless}}`用のnot、and、or、eqおよびis-array
- [ember-awesome-macros](https://github.com/kellyselden/ember-awesome-macros) - Ember.jsの計算マクロのコレクション
- [ember-macro-helpers](https://github.com/kellyselden/ember-macro-helpers) - Ember.jsマクロヘルパーで独自のカスタムマクロを作成
- [ember-cli-string-helpers](https://github.com/romulomachado/ember-cli-string-helpers) - DockYardのember-composable-helpersから抽出されたStringヘルパーのセット

### Image

- [ember-svg-jar](https://github.com/ivanvotti/ember-svg-jar) - Ember.jsアプリケーションにSVG画像を埋め込む最適な方法

### Include external JS code

- [ember-auto-import](https://github.com/ef4/ember-auto-import) - npmパッケージからのゼロ設定インポート
- [ember-cli-cjs-transform](https://github.com/rwjblue/ember-cli-cjs-transform) - CommonJSインポート
- [ember-cli-es6-transform](https://github.com/sandydoo/ember-cli-es6-transform) - npm、bower、あるいはアプリ内のどこでもからES6モジュールをインポートします。
- [ember-browserify](https://github.com/ef4/ember-browserify) - browserifyを介してnpmからCommonJSパッケージを簡単に読み込むためのアドオン。

### Infinite Scroll

- [ember-infinity](https://github.com/ember-infinity/ember-infinity) - Ember CLIアプリ向けのシンプルで柔軟な無限スクロール。
- [vertical-collection](https://github.com/html-next/vertical-collection) - 60FPS以上での無限スクロールと遮蔽処理。
- [smoke-and-mirrors](https://github.com/html-next/smoke-and-mirrors) - 野心的なアプリケーション向けの野心的な無限スクロールとsvelteレンダリング。

### Internalization & Localization

- [ember-intl](https://github.com/ember-intl/ember-intl) - 複雑なメッセージ文字列を翻訳。日時、数値、相対時間のローカルフォーマット。
- [ember-intl-analyzer](https://github.com/simplabs/ember-intl-analyzer) - Ember.jsプロジェクト内の使われていない翻訳を検出します。

### Inputs

- [ember-autoresize](https://github.com/tim-evans/ember-autoresize) - Ember.jsコンポーネント向けの自動サイズ調整。


### Job queues

- [ember-data-tasks](https://github.com/knownasilya/ember-data-tasks)
- [ember-concurrency](http://ember-concurrency.com)
- [ember-custom-actions](https://github.com/Exelord/ember-custom-actions) - Ember.jsアプリケーション向けのカスタムAPIアクション。
- [ember-pipeline](https://github.com/poteto/ember-pipeline)
- [ember-lifeline](https://github.com/ember-lifeline/ember-lifeline) - オブジェクト内の非同期行動のライフサイクルを管理するEmberアドオン。

### Logging

- [console.re](https://console.re/)
- [ember-debug-logger](https://emberobserver.com/addons/ember-debug-logger) - VisionmediaのデバッグログをEmber.jsアプリケーションに公開するEmber.jsアドオン。
- [ember-logging-service](https://github.com/acquia/ember-logging-service/) - アプリケーション全体で利用可能な汎用かつ拡張可能なログサービスを提供します。
- [raygun](https://raygun.com/)

### Mad science

- [ember-elm](https://github.com/nucleartide/ember-elm) - Ember.jsアプリケーション内でElmを書くことができます。
- [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) - JavaScriptで実装されたアルゴリズムとデータ構造、それぞれの説明とさらに読むためのリンクを含む

### Math

- [ember-katex](https://github.com/firecracker/ember-katex) - KaTeXを使ってLaTeXフォーマルをレンダリングします。
- [ember-math-helpers](https://github.com/shipshapecode/ember-math-helpers) - Ember.js HTMLBarsヘルパーで基本的な算術演算を実行します。

### Metrics

- [ember-user-activity](https://github.com/elwayman02/ember-user-activity) - ユーザーの活動および無活動を追跡するEmber.jsアドーン。
- [ember-metrics](https://github.com/poteto/ember-metrics) - 複数の分析サービスにデータを送信するため、新たなAPIを再実装せずに済みます。

### Minifiers
- [ember-hbs-minifier](https://github.com/simplabs/ember-hbs-minifier) - Handlebarsテンプレートから空白文字を削除します。
- [ember-cli-template-trimmer](https://github.com/lifeart/ember-cli-template-trimmer) - このアドオンはコンパイル段階で改行を削除します。

### Miscellaneous

- [diagonal routes](https://alexspeller.com/ember-diagonal/) - 特定のEmberルート定義に対してルート構造、テンプレート、ルートハックがどうなっているかを確認します。
- [ember data model maker](https://github.com/andycrum/ember-data-model-maker/) - エマーカー モデル マッカーエン（EDMM）

### Mobile

- [corber](https://github.com/isleofcode/corber) - Ember.js を使って構築された Cordova および Crosswalk ハイブリッドアプリケーション向けツール
- [glimmer-native](https://github.com/bakerac4/glimmer-native) - Ember.js/Glimmer.js を使ってネイティブなモバイルアプリを作成したいことはありますか？それなら今、できます！
- [ember-mobile-bar](https://github.com/nickschot/ember-mobile-bar) - モバイルアプリのような振る舞いを持つ管理された固定（ツール）バー
- [ember-mobile-core](https://github.com/nickschot/ember-mobile-core) - ember-mobile-* アドオン向けのパン認識子といくつかのユーティリティを提供
- [ember-mobile-menu](https://github.com/nickschot/ember-mobile-menu) - モバイルデバイスに特化したドラッグ可能なサイドバー
- [ember-mobile-pane](https://github.com/nickschot/ember-mobile-pane) - モバイルレイアウト ember-mobile-pane
- [ember-responsive](https://github.com/freshbooks/ember-responsive) - Ember.js で簡単なレスポンシブレイアウトを実現

### Modifiers
- [ember-css-vars](https://github.com/luxferresum/ember-css-vars) - JavaScriptからCSSにデータを露出するためのEmber.jsのmodifier。これにより、データをCSSに簡単に露出できるようになります。
- [ember-on-modifier](https://github.com/buschtoens/ember-on-modifier) - Modifer RFC #353 に示された `{{on}}` 要素の実装
- [ember-ref-modifier](https://github.com/lifeart/ember-ref-modifier) - `{{ref}}` 要素の実装
- [ember-render-modifiers](https://github.com/emberjs/ember-render-modifiers) - RFC #415 に示された did-insert / did-update / will-destroy 要素の実装を実現
- [ember-functional-modifiers](https://github.com/spencer516/ember-functional-modifiers) - Ember.js 用の機能的なModifier
- [ember-style-modifier](https://github.com/jelhan/ember-style-modifier) - このアドオンは、要素のスタイルを設定する {{style}} 要素Modifierを提供しています。
- [ember-simple-animate](https://github.com/abhilashlr/ember-simple-animate) - CSSベースのアニメーションに必要なシンプルなEmber.js アニメートアドオン

### Parcel

- [ember-parcel-example](https://github.com/rtablada/ember-parcel-example) - Ember.js + Parcel.js の例
- [todomvc-demo](https://github.com/devongovett/todomvc-demo) - Glimmer.js + Parcel.js の例

### Payments

- [ember-credit-card](https://github.com/esbanarango/ember-credit-card) - "1行のコードでクレジットカードフォームを夢のようなものにする"

### Polyfills

- [ember-modifier-manager-polyfill](https://github.com/rwjblue/ember-modifier-manager-polyfill) - Ember.js 2.12 から 3.7 までの要素Modifierのポリフィル
- [ember-angle-bracket-invocation-polyfill](https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill) - このアドオンはRFC 311に記述されたアンガルブラケット呼び出し構文のポリフィルを提供しています。
- [ember-named-arguments-polyfill](https://github.com/rwjblue/ember-named-arguments-polyfill) - Ember.js 2.10 から 3.0 までに対応した、named arguments のポリフィルサポート
- [ember-native-class-polyfill](https://github.com/pzuraq/ember-native-class-polyfill) - このアドオンは、Ember.js RFC #240 および #337 で提案されたネイティブクラスの動作をポリフィルするものである
- [ember-router-service-polyfill](https://github.com/rwjblue/ember-router-service-polyfill) - このアドオンは、Ember.js 2.15 で追加されたember-routing-router-service機能に対して、可能な限りのポリフィルを提供する
- [ember-fn-helper-polyfill](https://github.com/rwjblue/ember-fn-helper-polyfill) - このアドオンは、RFC #470 で記述された{{fn}}ヘルパーに対してポリフィルを提供する
- [ember-named-blocks-polyfill](https://github.com/ember-polyfills/ember-named-blocks-polyfill) - このアドオンは、Yieldable Named Blocks機能に対してポリフィルを提供する

### PWA

- [ember-service-worker-asset-cache](https://github.com/DockYard/ember-service-worker-asset-cache)
- [ember-service-worker-cache-fallback](https://github.com/DockYard/ember-service-worker-cache-fallback)
- [ember-service-worker-cache-first](https://github.com/DockYard/ember-service-worker-cache-first)
- [ember-service-worker-index](https://github.com/DockYard/ember-service-worker-index)
- [ember-service-worker-prember](https://github.com/shipshapecode/ember-service-worker-prember)
- [ember-service-worker](https://github.com/DockYard/ember-service-worker) - Ember.js 用のService Workersのプラグインアプローチ
- [ember-web-app](https://github.com/san650/ember-web-app) - このEmber.jsアドオンは、プログレッシブウェブアプリケーションを作成するために必要なmanifest.jsonおよびmetaタグの設定と管理をサポートする

### Query Params

- [ember-query-params-service](https://github.com/NullVoxPopuli/ember-query-params-service) - コントローラーにクエリパラメータを*のみ*パースしているものはありますか？
- [ember-parachute](https://github.com/offirgolan/ember-parachute) - Ember.js 用のクエリパラメータの改善
- [ember-href-to](https://github.com/intercom/ember-href-to) - {{link-to}}の軽量な代替案

### Real-time

- [ember-cli-flash](https://github.com/poteto/ember-cli-flash) - ember-cli用のシンプルかつ高度にカスタマイズ可能なフラッシュメッセージ

### Routing addons
- [ember-component-routes](https://github.com/wongpeiyi/ember-component-routes) - Ember.jsのルートからコンポーネントを直接レンダリング
- [ember-redirect](https://github.com/thoov/ember-redirect) - このアドオンは、ルートベースのリダイレクトを最小限の努力で実行するためのシンプルで使いやすい方法を目指している
- [ember-router-scroll](https://github.com/dollarshaveclub/ember-router-scroll) - ブラウザの履歴スクロール位置を保持しながらトップにスクロール

### Resolver customization
- [ember-cli-extended-resolver](https://www.npmjs.com/package/ember-cli-extended-resolver) - このアドーンは、デフォルトのファイル構成をより機能ごとにグループ化されたものに変更できるようにする

### Security

- [ember-can](https://github.com/minutebase/ember-can) - Ember.jsアプリ向けのシンプル [authorisation addon](http://ember-can.com)
- [ember-permissions](https://github.com/Bagaar/ember-permissions) - Emberアプリケーション向けの権限管理

### Service Workers

- [ember-cli-workbox](https://github.com/BBVAEngineering/ember-cli-workbox/) - サービスワーカーを用いたオフラインキャッシュとしてプログレッシブ強化
- [ember-service-worker](https://github.com/DockYard/ember-service-worker) - Ember.js 用のService Workersのプラグインアプローチ
- [ember-service-worker-index](https://github.com/DockYard/ember-service-worker-index) - Ember.jsのサービスワーカープラグインでindex.htmlファイルをキャッシュする
- [ember-service-worker-asset-cache](https://github.com/DockYard/ember-service-worker-asset-cache) - エマーサービスワーカープラグインで、エマーアプリのアセットファイルをキャッシュする
- [ember-service-worker-cache-first](https://github.com/DockYard/ember-service-worker-cache-first) - キャッシュ優先のエマーサービスワーカープラグイン
- [ember-service-worker-cache-fallback](https://github.com/DockYard/ember-service-worker-cache-fallback) - ネットワークリクエストが失敗した場合、キャッシュされたフォールバックバージョンに切り替えるエマーサービスワーカープラグイン
- [ember-service-worker-emberfire-messaging](https://github.com/Matt-Jensen/ember-service-worker-emberfire-messaging) - Emberfireアプリ用のFirebase Cloud Messagingサービスワーカー対応
- [ember-service-worker-unregistration](https://github.com/GreatWizard/ember-service-worker-unregistration) - ember-service-workerが無効になった場合、サービスワーカーをアンレジスターするエマーアプリプラグイン
- [ember-service-worker-request-chaos](https://github.com/maxfierke/ember-service-worker-request-chaos) - NetflixのChaos Monkeyに似たもので、あなたのエマーサービスアプリのAPIリクエストに適用
- [ember-service-worker-project-entagled-registration](https://github.com/rwjblue/ember-service-worker-project-entagled-registration) - このアドオンは、ember-service-workerと併用して、プロジェクトに適切にペアされたサービスワーカーが使用されていることを確認するためのもの
- [ember-service-worker-cache-rendered](https://github.com/PrinceCornNM/ember-service-worker-cache-rendered) - エマーサービスワーカープラグインで、レンダリングされたHTMLをキャッシュし、Fastbootに非常に有用
- [ember-service-worker-update-notify](https://github.com/topaxi/ember-service-worker-update-notify) - サービスワーカーのアップデート通知
- [ember-service-worker-enqueue](https://github.com/The-Don-Himself/ember-service-worker-enqueue) - 失敗した変更リクエスト（例：POST、PUT、DELETE）をキャッチし、バックグラウンド処理にキューするエマーサービスワーカープラドン
- [ember-service-worker-prember](https://github.com/shipshapecode/ember-service-worker-prember) - 各premberルートのindex.htmlファイルをキャッシュするエマーサービスワーカープラグイン

### SSR / Server Side Rendering

- [ember-fastboot](https://github.com/ember-fastboot/ember-cli-fastboot) - エマーアプリのサーバー側レンダリング
- [glimmer-ssr-test](https://github.com/josemarluedke/glimmer-ssr-test) - Glimmer.jsアプリをサーバー上でレンダリングする

### Static site generators & SEO

- [ember-meta](https://github.com/shipshapecode/ember-meta) - Prember/エマーアプリブログのメタ情報を設定して、OpenGraph、microdata、Facebook、Twitter、Slackなどに対応
- [prember-rss-feed](https://github.com/shipshapecode/prember-rss-feed) - PremberサイトのRSSフィードを配信
- [prember](https://github.com/ef4/prember) - Fastbootでビルド時にエマーアプリをプリレンダリングする

### Styling

- [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) - node-sassを使って、ember-cliアプリのファイルを事前処理し、sourceMapsおよびinclude pathsをサポート

### Templating

- [ember-template-component-import](https://github.com/crashco/ember-template-component-import) - このアドオンにより、テンプレートファイル内でコンポーネントへのローカルバインディングを作成するためのimportスタイルの構文を使用できる
- [ember-cli-jsx-templates](https://github.com/lifeart/ember-cli-jsx-templates) - EmberテンプレートでのTSX/JSXサポート
- [Emblem.js](https://github.com/machty/emblem.js/) - Handlebars.jsに代替するエマーアプリフレンドリーなインデント構文

### Testing

- [ember-qunit-decorators](https://github.com/mike-north/ember-qunit-decorators) - ES6 または TypeScript のデコレーターを、Ember.js アプリの QUnit テストに使用してください。
- [ember-cli-addon-tests](https://github.com/tomdale/ember-cli-addon-tests) - Ember CLI アドオンのテストを、実際の Ember.js アプリのコンテキストで行うためのテストヘルパー。
- [ember-cli-code-coverage](https://github.com/kategengler/ember-cli-code-coverage) - Istanbul を使って Ember アプリのコードカバレッジを取得します。
- [ember-cli-mirage](http://www.ember-cli-mirage.com/) - に準拠したクライアントサイドサーバーを使って、アプリのビルド、テスト、デモを行います。 [JSON API](http://jsonapi.org/)
- [ember-cli-mocha](https://github.com/ember-cli/ember-cli-mocha) - Ember CLI アプリ用の Mocha および Chai テスト。
- [ember-cli-page-object](https://github.com/san650/ember-cli-page-object) - この Ember CLI アドオンは、受け入れテストおよび統合テストにおいてページオブジェクトの構築を容易にします。
- [ember-cli-yadda](https://github.com/albertjan/ember-cli-yadda) - Ember CLI アプリ用の Cucumber スペックを書きます。
- [ember-concurrency-test-waiter](https://github.com/bendemboski/ember-concurrency-test-waiter) - Ember-Concurrency タスクにテストウェイトを簡単に有効にします。
- [ember-exam](https://github.com/trentmwillis/ember-exam) - ランダム化、分割、並列化を用いてテストを実行し、美しいテストを実現します。
- [ember-percy](https://github.com/percy/ember-percy) - Percy を使って Ember.js で視覚的リグレッションテストを行うアドオン。
- [ember-qunit](https://github.com/emberjs/ember-qunit) - Ember.js 用の QUnit テストヘルパー。
- [ember-test-friendly-error-handler](https://github.com/rwjblue/ember-test-friendly-error-handler) - 生産環境では例外を投げない、テスト可能でないエラーハンドラーを構築します。
- [ember-test-selectors](https://github.com/simplabs/ember-test-selectors) - Ember.js テストにおけるより良い要素セレクタの有効化。
- [ember-test-setup](https://github.com/kellyselden/ember-test-setup) - 重複を減らすためのテストショートハンドを提供します。
- [ember-window-mock](https://github.com/kaliber5/ember-window-mock) - window グローバルを、Ember.js サービスとして扱い、テスト中にモックできます。
- [mirage-glue](https://github.com/izelnakri/mirage-glue) - このプログラムはAPIエンドポイントを読み取り、関連する Mirage フィクスチャファイルにレスポンスを生成または追加します。
- [ember-sinon](https://github.com/csantero/ember-sinon) - Ember CLI アドオンで sinon.js のサポートを追加します。

### Text

- [ember-text-measurer](https://github.com/cibernox/ember-text-measurer) - Ember.js 用のシンプルなサービスで、効率的に文字列の幅を測定します。


### Tree Shaking
- [ember-cli-tree-shaker](https://github.com/kellyselden/ember-cli-tree-shaker) - Kelly Selden と Alex Navasardyan による新しい tree-shaking およびコード分割の仕事のテスト環境です。

### TypeScript

- [ember-cli-typescript](https://github.com/typed-ember/ember-cli-typescript) - Ember.js アプリに TypeScript を使用してください！
- [ember-typings](https://github.com/typed-ember/ember-typings) - エマーサイのTypescript型定義
- [ember-typescript-utils](https://github.com/happycollision/ember-typescript-utils) - Typescriptとエマーサイをベースにしたユーティリティ関数


### UI libs

- [ember-bootstrap](http://www.ember-bootstrap.com/) - オリジナルのブートストラッププラグインとコンポーネントをエマーサイに適応させた、ネイティブなエマーサイコンポーネントのコレクションを提供
- [Frontile](https://github.com/josemarluedke/frontile) - フロントイルは、一貫性と強力なエマーサイアプリケーションを構築するために必要なレゴ（コンポーネント、ヘルパー、モディファイア、スタイル）を提供することを目的としています
- [ember-cli-uniq](https://github.com/uniplaces/ember-cli-uniq/) - エマーサイに実装されたユニプラースデザインシステムのデフォルトコンポーネのコレクション
- [ember-element-ui](https://github.com/aalasolutions/ember-element-ui) - エマーサイ向けにエレメントUIを提供
- [ember-elements](https://github.com/dunkinbase/ember-elements) - [a UI toolkit in Ember](https://dunkinbase.github.io/ember-elements/)
- [ember-ghost-casper-template](https://github.com/stonecircle/ember-ghost-casper-template) - GHOSTのデフォルト個人ブロガーテーマの静的サイトバージョン
- [ember-paper](https://github.com/miguelcobain/ember-paper) - エマーサイにおけるマテリアルデザインアプローチ
- [ember-radical](https://github.com/healthsparq/ember-radical) - 軽量で完全にアクセシブルなDDAUコンポーネントライブラリ（エマーサイアプリ向け）
- [Nomad UI](https://github.com/hashicorp/nomad/tree/master/ui)
- [Semantic-UI-Ember](https://github.com/Semantic-Org/Semantic-UI-Ember) - このはセマンティックUIモジュールの公式エマーサイライブラリです
- [Flexi](https://github.com/html-next/flexi)

### UI components

- [ember-attacher](https://kybishop.github.io/ember-attacher/) - ツールチップとポップオーバーを簡単に実現
- [ember-burger-menu](https://github.com/offirgolan/ember-burger-menu) - CSSトランジションを使用したアニメーションとスタイルを備えたオフキャンバスサイドバーコンポーネント
- [ember-flatpickr](https://github.com/shipshapecode/ember-flatpickr) - フラットピッカーの日付選択器をラップしたエマーサイのアドオン
- [ember-power-select](https://github.com/cibernox/ember-power-select) - エマーサイ向けに構築された拡張可能なセレクトコンポーネント
- [ember-basic-dropdown](https://github.com/cibernox/ember-basic-dropdown) - エマーサイアプリで必要となる基本的なドロップダウンコンポーネント
- [ember-drag-sort](https://github.com/kaliber5/ember-drag-sort) - 複数リストおよびネストリストをサポートするソート可能なリストコンポーネント
- [ember-perfect-scroll](https://github.com/imanhodjaev/ember-perfect-scroll) - 完全なスクロールコンポーネント（エマーサイCLIアドオンとして）

### UX

- [ember-onbeforeunload](https://github.com/jasonmit/ember-onbeforeunload) - ルート間の遷移またはウィンドウの閉じ時に論理を実行

### VR

- [ember-vr](https://github.com/ember-vr)

### VS Code addons

- [Ember Syntax](https://marketplace.visualstudio.com/items?itemName=dhedgecock.ember-syntax) - エマーサイテンプレートファイルのシンタックスハイライトおよびタグテンプレートによるインラインテンプレート定義のシンタックスハイライト！
- [Glimmer Templates Syntax for VS Code](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-glimmer-syntax) - エマーサイドのシンタックスハイライト
- [ember-language-server](https://github.com/emberwatch/ember-language-server) - エマーサイドプロジェクト向けの言語サーバープロトコル実装
- [unstable-ember-language-server](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable) - エマーサイドプロジェクト向けの言語サーバープロトコル実装（不安定、実験的機能を含む）
- [vscode-ember-colorizer](https://github.com/ciena-blueplanet/vscode-ember-colorizer) - VSCode拡張機能でエマーサイドの.hbs、コントローラー、ルートファイルを色分け・トークン化
- [ember-module-snippets](https://github.com/candidmetrics/ember-module-snippets) - VSCodeでエマーサイドモジュールのインポートを簡単に行うためのショートカット

### Atom addons

- [Atom Ember Snippets](https://github.com/mattmcmanus/atom-ember-snippets)

### VIM

- [Unstable language server for neovim](https://gist.github.com/meirish/639e6def0f352f63fef662dce3ca2f98)

### Web Components

- [ember-cli-web-components](https://github.com/BBVAEngineering/ember-cli-web-components) - 他のフレームワークでエマーサイドコンポーネントを使用できるようにWeb Componentsに！
- [shadow-dom](https://github.com/knownasilya/ember-shadow-dom) - コンポーネント内のテンプレートをシャドウDOMのルート内で作成

### Webpack

- [glimmer-compiler-webpack-plugin](https://github.com/tomdale/glimmer-compiler-webpack-plugin)

### Weird

- [ember-dynamic-render-template](https://github.com/miguelcobain/ember-dynamic-render-template) - テンプレート文字列からDOMをレンダリング

### Resources

- [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist)
- [Ember.js approval requirements](https://gist.github.com/PoslinskiNet/2d7a05944ca3c468440a0faea153062b)

### Articles

- [An Elementary Guide to Ember.js Build Performance](http://hangaroundtheweb.com/2018/02/an-elementary-guide-to-ember-build-performance/)
- [Ember.js 2019 Roadmap Posts](https://github.com/abhilashlr/emberjs2019-posts)
- [How to Actually Build Superior Web Apps for Free](https://medium.com/@devotox/zero-cost-web-apps-part-1-b2d6b46916f1)
- [Getting Started With Glimmer-Native](https://codingitwrong.com/2019/06/26/glimmer-native-tutorial.html)
- [The case for Embeddable Ember.js](https://dev.to/dustinsoftware/the-case-for-embeddable-ember-4120)
- [The State of the Ember.js Addon Ecosystem in 2019](https://0xadada.pub/2019/06/17/essential-ember-addons/)
- [Static Types in Ember.js?](https://dev.to/jamesbyrne/static-types-in-emberjs-26b7)
- [How does Ember Boot?](https://hackernoon.com/how-does-ember-boot-5e1f9e7a1117)
- [The Ember.js testing guide, I made for myself](https://medium.com/@sarbbottam/the-ember-js-testing-guide-i-made-for-myself-c9a073a0c718)
- [Using Lerna to manage multiple Ember.js apps](https://cenchat.com/blog/2019/05/25/using-lerna-to-manage-multiple-ember-apps.html)
- [How to translate your Ember.js application with ember-intl](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-ember-app-with-ember-intl)
- [Using ember-animated to re-sort a list](https://devjournal.balinterdi.com/using-ember-animated-to-resort-a-list/)
- [Throttling Ember-Data with Ember-Concurrency](https://medium.com/@mudflye/throttling-ember-data-with-ember-concurrency-ff30d804a1b)
- [Animation and Predictable Data Loading in Ember.js](https://crunchingnumbers.live/2019/04/02/animation-and-predictable-data-loading-in-ember/)
- [Make your deprecated CSS stand out](https://ondrejsevcik.com/deprecate-css/)
- [Ember.js ❤Angle Brackets. A Migration Guide & Cheat Sheet](https://medium.com/@AveryBloom/ff309d6effdf)
- [Coming Soon in Ember Octane - Part 1: Native Classes](https://www.pzuraq.com/coming-soon-in-ember-octane-part-1-native-classes/)
- [Coming Soon in Ember Octane - Part 2: Angle Brackets Syntax & Named Arguments](https://www.pzuraq.com/coming-soon-in-ember-octane-part-2-angle-brackets-and-named-arguments/)
- [Coming Soon in Ember Octane - Part 3: Tracked Properties](https://www.pzuraq.com/coming-soon-in-ember-octane-part-3-tracked-properties/)
- [Coming Soon in Ember Octane - Part 4: Modifiers](https://www.pzuraq.com/coming-soon-in-ember-octane-part-4-modifiers/)
- [Coming Soon in Ember Octane - Part 5: Glimmer Components](https://www.pzuraq.com/coming-soon-in-ember-octane-part-5-glimmer-components/)
- [Ember Octane Update: What's up with `@action`?](https://www.pzuraq.com/ember-octane-update-action/)
- [Ember Octane Update: Landing Decorators](https://www.pzuraq.com/ember-octane-update-landing-decorators/)
- [Ember Octane Update: Async Observers](https://www.pzuraq.com/ember-octane-update-async-observers/)
- [Confirming Actions in Ember.js](https://medium.com/@chrsmllr/confirming-actions-in-ember-362b19a0c01f)
- [Async Computed Properties in Ember.js](https://www.barelyknown.com/posts/async-computed-properties-in-ember)
- [Ember.js Native Class Update: 2019 Edition](https://www.pzuraq.com/emberjs-native-class-update-2019-edition/)
- [Ember.js Route Hooks — A Complete Look](https://alexdiliberto.com/posts/ember-route-hooks-a-complete-look/)
- [Understanding unknownProperty in Ember.js](https://wyeworks.com/blog/2015/11/24/understanding-unknownproperty-in-ember)
- [An Introduction to Ember.js for Angular Developers](https://davidtang.io/2016/02/10/introduction-to-ember-for-angular-developers.html)
- [Debugging Ember.js with VScode](https://dev.to/michalbryxi/debugging-emberjs-with-vscode-2p5g)
- [Staging environments with ember-cli-deploy](http://blog.firstiwaslike.com/staging-environments-with-ember-cli-deploy/)
- [Higher-Order Components in Ember.js](https://www.chriskrycho.com/2018/higher-order-components-in-emberjs.html)
- [How to handle async properties in Ember.js](https://medium.com/macsour/how-to-handle-async-abilities-with-ember-can-22d90df056ed)
- [8 Top Ember.js Interview Questions in 2018](http://blog.honeypot.io/emberjs-interview-questions-2018/)
- [Ember.js community, meet CodeSandbox!](https://medium.com/@mikenorth/ember-community-meet-codesandbox-10a43076b3fa)
- [Fuel up your Ember.js with Octane](https://clark.engineering/fuel-up-your-ember-with-octane-171c8dd13fd6)
- [Ember Octane – everything one can expect in the next Ember.js edition](http://hangaroundtheweb.com/2018/08/ember-octane-everything-one-can-expect-in-the-next-ember-edition/)
- [Lazy-loading modules in Ember.js](https://medium.com/zonky-developers/lazy-loading-modules-in-emberjs-e4f880b15aa0)
- [Components patterns in Ember.js](https://medium.com/macsour/components-patterns-in-ember-js-5e6fc6eea28f)
- [Optimizing Ember.js Templates](https://medium.com/square-corner-blog/optimizing-ember-templates-c479d26fe58e)
- [How to keep your ember.js project clean and well-structured](https://geeks.uniplaces.com/how-to-keep-your-ember-js-project-clean-and-well-structured-fbff040274de)
- [PWA Your Ember.js App](https://blog.201-created.com/pwa-your-ember-app-7ee8242f306e)
- [Adding a new build notification to an Ember.js application](https://medium.com/@jonpitch/adding-a-new-build-notification-to-an-ember-application-c657211289f6)
- [Making Ember.js Applications' UI Transitions Screen Reader Friendly](https://engineering.linkedin.com/blog/2018/10/making-ember-applications--ui-transitions-screen-reader-friendly)
- [Share Ember.js common code between apps](https://dev.to/michalbryxi/share-emberjs-common-code-between-apps-1a7k)
- [The Ember.js of the future... today!](https://dev.to/nullvoxpopuli/the-emberjs-of-the-future-today-12c)
- [Building a Progressive Web App with Ember.js](https://madhatted.com/2017/6/16/building-a-progressive-web-app-with-ember)
- [Dynamic component layout in Ember.js](https://medium.com/freshworks-engineering-blog/dynamic-component-layout-in-ember-c9375c49126a)
- [Using PurgeCSS with Ember.js](http://www.jurecuhalev.com/blog/2018/09/07/using-purgecss-with-ember-js/)
- [Modern Ember.js (2018)](https://codingitwrong.com/2018/08/16/modern-ember.html)
- [Automating Ember.js App Deployment on AWS](https://medium.com/@piotr.steininger/automating-ember-js-app-deployment-on-aws-feccc6d94828)
- [Django & Ember.js Full Stack Basics: Connecting Frontend and Backend — Part 1](https://medium.com/@sunskyearthwind/django-emberjs-full-stack-basics-connecting-frontend-and-backend-part-1-beed8c386b08)
- [Everything one can expect in Ember Octane](http://hangaroundtheweb.com/2018/08/ember-octane-everything-one-can-expect-in-the-next-ember-edition)
- [Shipping Ember.js bundles based on the user's browser](https://sivasubramanyam.me/emberjs-shipping-different-bundles/)
- [To `attrs` or not to `attrs`](https://locks.svbtle.com/to-attrs-or-not-to-attrs)
- [Nested components and angle brackets, a sneaky solution](https://locks.svbtle.com/nested-components-and-angle-brackets)
- [How I added whitelabel theming to my Ember.js app](https://medium.com/@simeonberns/how-i-added-whitelabel-theming-to-my-ember-app-97bfca9e263a)
- [Decorating Guide: Commonly-Used Ember.js Decorators](https://codingitwrong.com/2018/08/21/decorating-guide.html)
- [Understanding Ember's resolver](https://dockyard.com/blog/2016/09/14/understanding-ember-s-resolver)
- [Creating Connection-aware Ember.js Media Components](http://hangaroundtheweb.com/2018/08/creating-connection-aware-ember-media-components/)
- [A framework for ambitious Chrome Extensions](https://envoy.engineering/a-framework-for-ambitious-chrome-extensions-b08d1f4b944d)
- [Autodiscovery for the Ember.js component playground](https://simplabs.com/blog/2018/06/05/ember-component-playground.html)

- [Configuring Ember.js Analytics for GDPR](https://fullstackstanley.com/read/configuring-ember-js-analytics-for-gdpr)
- [Drag and Drop on iOS with Ember.js](https://dockyard.com/blog/2018/07/20/drag-and-drop-on-ios-with-ember)
- [Tips for improving build time of large apps](https://discuss.emberjs.com/t/tips-for-improving-build-time-of-large-apps/15008)
- [Error Handling](https://github.com/pixelhandler/ember-jsonapi-resources/wiki/Error-Handling)
- [Build and Authenticate an Ember.js 3 Application](https://auth0.com/blog/build-and-authenticate-an-emberjs-3-application)
- [Everything you need to know to upgrade your Ember.js app](https://medium.com/front-end-hacking/everything-you-need-to-know-to-upgrade-your-ember-js-app-including-ember-3-9de5e808dde0)
- [16 Opensource Ember.js Projects to Learn From](https://www.icicletech.com/blog/16-opensource-emberjs-projects-to-learn-from)
- [5 Essential Ember.js Concepts You Must Understand](https://emberigniter.com/5-essential-ember-concepts/)
- [Adding AWS Amplify to an Ember.js Application](https://itnext.io/adding-aws-amplify-to-an-ember-js-application-72683167c476)

- [An Interview with Tom Dale of Ember.js](https://javascriptreport.com/interview-with-tom-dale/)
- [Animations in Ember.js with liquid-fire](https://www.airpair.com/ember.js/posts/animations-in-emberjs-with-liquidfire)

- [Awesome Ember.js Addons](https://www.codementor.io/gowiem/awesome-ember-addons-bwhiofit9)
- [Building a performant real-time web app with Ember Fastboot and Phoenix](https://medium.com/peep-stack/building-a-performant-web-app-with-ember-fastboot-and-phoenix-part-1-fa1241654308)
- [Debug Ember.js app with VSCode](https://medium.com/@minhdn/debug-ember-app-with-vscode-5f4fde511f9f)
- [Debugging Ember.js applications in Visual Studio Code](http://blog.firstiwaslike.com/debugging-ember-js-application-in-visual-studio-code/)
- [DEPLOYING WITH EMBER.JS: A STORY](https://blogs.library.ucsf.edu/ckm/2017/09/06/deploying-with-ember-js-a-story/)
- [Do not confuse environment for deploy target](https://lolma.us/en/blog/class-and-attribute-bindings)
- [Ember.js Best Practices: Computed Properties with Dynamic Dependent Keys](https://dockyard.com/blog/2015/10/23/ember-best-practices-dynamic-dependent-keys-for-computed-properties)
- [Ember.js Best Practices: Avoid leaking state into factories](https://dockyard.com/blog/2015/09/18/ember-best-practices-avoid-leaking-state-into-factories)
- [Ember CLI Addon Docs: Shared Documentation for the Ember.js Ecosystem](https://medium.com/build-addepar/ember-cli-addon-docs-shared-documentation-for-the-ember-ecosystem-6f29aa0cee87)
- [Ember Inspector - The Journey so Far](https://shipshape.io/blog/ember-inspector-the-journey-so-far/)
- [Ember.js on Medium](https://medium.com/front-end-hacking/tagged/ember)
- [EmberCamp Module Unification Update](https://madhatted.com/2017/7/12/embercamp-module-unification-update)
- [Skeleton Screen Loading in Ember.js](https://emberway.io/skeleton-screen-loading-in-ember-js-2f7ac2384d63)
- [Static Blogs with Prember and Markdown](https://shipshape.io/blog/static-blogs-with-prember-and-markdown/)
- [Tom Dale on Ember.js and JavaScript Frameworks](https://www.infoq.com/interviews/tom-dale-ember) - 2013年
- [Using ember-freestyle as a component playground](https://simplabs.com/blog/2018/01/24/ember-freestyle.html)
- [Using npm libraries in Ember CLI](https://simplabs.com/blog/2017/02/13/npm-libs-in-ember-cli.html)
- [We have a new Ember.js front-end!](https://medium.com/@appaloosastore/we-have-a-new-emberjs-front-end-c7246e76cdbd)
- [What you didn't know about passing dynamic classname and attribute bidings from parent template](https://lolma.us/en/blog/class-and-attribute-bindings)
- [You can only change what you can measure](https://blog.201-created.com/you-can-only-change-what-you-can-measure-6be8826503a7)

- [How I added whitelabel theming to my Ember.js app](https://medium.com/@simeonberns/how-i-added-whitelabel-theming-to-my-ember-app-97bfca9e263a)
- [Customising Ember Power Select](https://medium.com/life-at-kayako/customising-ember-power-select-3d570c7c4c0c)
- [Deep Dive on Ember.js Events](https://medium.com/square-corner-blog/deep-dive-on-ember-events-cf684fd3b808)

- [A collection of notes that summarize EmberConf 2021](https://alexdiliberto.com/posts/emberconf-2021-notes/)
- [A collection of notes that summarize EmberConf 2020](https://alexdiliberto.com/posts/emberconf-2020-notes/)
- [A collection of notes that summarize EmberConf 2019](https://alexdiliberto.com/posts/emberconf-2019-notes/)
- [EmberConf 2019 Links and Notes](https://github.com/dknutsen/emberconf-2019)
- [A collection of links that summarize EmberConf 2018](https://github.com/nucleartide/emberconf-2018)
- [A collection of links that summarize EmberConf 2017](https://github.com/poteto/emberconf-2017)
- [A collection of links that summarize EmberConf 2016](https://github.com/poteto/emberconf-2016)
- [A collection of links that summarize EmberConf 2015](https://github.com/poteto/emberconf-2015)
- [A list of EmberJS2018 blog posts and ideas](https://github.com/zinyando/emberjs2018-posts)
- [Blog Post for an Ambitious Framework](https://blog.201-created.com/blog-post-for-an-ambitious-framework-d7e9248893fa)
- [Essential Ember Addons: The State of the Ember Addon Ecosystem in 2019](https://0xadada.pub/2019/06/17/essential-ember-addons/)
- [Deploying an Ember.js App to Netlify](https://derricksdocs.com/deploying-an-emberjs-app-to-netlify/)
- [Ember performance tweaks: Optimising build timelines & bundle size](https://abhilashlr.in/ember-performance-tweaks-part-1)
- [Ember performance tweaks: Optimising Assets](https://abhilashlr.in/ember-performance-tweaks-part-2)
- [Ember performance tweaks: Search engine optimization](https://abhilashlr.in/ember-performance-tweaks-part-3)

### Ember-Cli Articles
- [Ember-cli fingerprinting and dynamic assets](https://medium.com/@ruslanzavacky/ember-cli-fingerprinting-and-dynamic-assets-797a298d8dc6)
- [Secrets of the Ember-CLI server: Express middleware with Ember-CLI](https://blog.201-created.com/secrets-of-the-ember-cli-server-bde80bb546dd)


### Why Articles
- [NYC Planning Labs: Why Choose Ember.js?](https://medium.com/nycplanninglabs/nyc-planning-labs-why-choose-ember-js-fe9ff75f4373)
- [Why DockYard Builds with Ember.js](https://dockyard.com/blog/2017/10/04/why-dockyard-uses-ember)
- [Ember.js. Your best bet.](https://medium.com/@alvincrespo/ember-your-best-bet-b5cd7275dc84)
- [Why Ember.js?](http://www.melsumner.com/blog/ember/why-ember/)
- [6 Reasons Why To Use Ember.js In 2019](https://selleo.com/blog/6-reasons-why-to-use-ember-in-2019)
- [Ember.js: Our Secret Weapon](https://www.prototypal.io/blog/)
- [How Ember.js Enables Us to Focus on Shipping Features](http://blog.nightwatch.io/ember-js-shipping-features)
- [When you should not pick Ember.js as your next front-end tool](https://medium.com/selleo/when-you-should-not-pick-emberjs-as-your-next-front-end-tool-203697c2e0f0)
- [Moving from React to Ember 2020](http://medium.com/@nowims/moving-from-react-to-ember-2020-86e082477d45)
- [Essential Ember Addons: The State of the Ember Addon Ecosystem in 2019](https://0xadada.pub/2019/06/17/essential-ember-addons/)

### Jump-Start Articles
- [The simplest possible Ember Data CRUD Tutorial](https://medium.com/ember-ish/the-simplest-possible-ember-data-crud-16eacee33ae6)
- [Challenges I face(d) with Ember.js](https://medium.com/@sarbbottam/challenges-i-face-with-ember-js-59bfba30416e)
- [It’s easier in Ember.js. Probably.](http://www.melsumner.com/blog/development/its-easier-in-ember-probably/)

### Articles Glimmer
- [Alternative View Layers for an Elm App](https://robots.thoughtbot.com/elm-glimmer)
- [Creating Web Components with Glimmer](https://simplabs.com/blog/2017/08/28/creating-web-components-with-glimmer.html)
- [Building a PWA with Glimmer.js](https://simplabs.com/blog/2018/07/03/building-a-pwa-with-glimmer-js.html)
- [The Glimmer VM: Boots Fast and Stays Fast](https://yehudakatz.com/2017/04/05/the-glimmer-vm-boots-fast-and-stays-fast/)
- [The Glimmer Binary Experience](https://engineering.linkedin.com/blog/2017/12/the-glimmer-binary-experience)
- [Glimmer.js: What’s the Deal with TypeScript?](https://medium.com/@tomdale/glimmer-js-whats-the-deal-with-typescript-f666d1a3aad0)
- [Glimmer.js Application proposal](https://gist.github.com/tomdale/10fe9feeb84f2e4325f042839799bd9d) - コンパイル、レンダリング、SSR、リハイドレーション
- [Git Guides](https://github.com/glimmerjs/glimmer-vm/blob/master/guides/01-introduction.md)
- [Designing and Implementing Glimmer Like a Programming Language](https://thefeedbackloop.xyz/designing-and-implementing-glimmer-like-a-programming-language/)
- [Glimmer: Blazing Fast Rendering for Ember.js, Part 1](https://engineering.linkedin.com/blog/2017/03/glimmer--blazing-fast-rendering-for-ember-js--part-1)
- [Glimmer: Blazing Fast Rendering for Ember.js, Part 2](https://engineering.linkedin.com/blog/2017/06/glimmer--blazing-fast-rendering-for-ember-js--part-2)
- [Why I’m excited about Glimmer.js](https://hackernoon.com/why-im-excited-about-glimmerjs-3631bd0c95c4)
- [Getting Started With Glimmer-Native](https://codingitwrong.com/2019/06/26/glimmer-native-tutorial.html)
- [What is the current state of more advanced Glimmer VM features?](https://discuss.emberjs.com/t/what-is-the-current-state-of-more-advanced-glimmer-vm-features/18114/4)
- [UNIT-TESTING GLIMMER COMPONENTS](https://timgthomas.com/2019/11/unit-testing-glimmer-components/)

### Articles Engines
- [CSS in Ember Engines](https://medium.com/@ynotdraw/css-in-ember-engines-230ef8d4cef8)
- [Enginification](https://simplabs.com/blog/2017/12/04/enginification.html)

### Articles Ember-Concurrency
- [Adopting ember-concurrency or: How I Learned to Stop Worrying and Love the Task](https://engineering.linkedin.com/blog/2016/12/ember-concurrency--or--how-i-learned-to-stop-worrying-and-love-t)
- [Async or Swim: Replacing your Route models with Ember Concurrency Tasks](https://medium.com/@AveryBloom/async-or-swim-replacing-your-route-models-with-ember-concurrency-tasks-5a230252893a)
- [ember-concurrency: the solution to so many problems you never knew you had](https://emberway.io/ember-concurrency-the-solution-to-so-many-problems-you-never-knew-you-had-cce6d7731ba9)
- [PromiseProxyMixin: pure Ember alternative to ember-concurrency](https://lolma.us/en/blog/promise-proxy-mixin/)
- [Two-Tasks Routes in Ember.js](https://tritarget.org/#Two-Tasks%20Routes%20in%20Ember)

### Articles ES6
- [ES Classes in Ember.js](https://medium.com/build-addepar/es-classes-in-ember-js-63e948e9d78e)

### Articles TypeScript
- [ember-cli-typescript v2 beta](https://www.chriskrycho.com/2018/ember-cli-typescript-v2-beta.html)
- [Ember Typescript Code Coverage - how to gist](https://gist.github.com/lifeart/5f75981d5f6262d1bfc4525aebfcf7d5)
- [Type-Informed Design](https://www.chriskrycho.com/2018/type-informed-design.html)
- [Typing Your Ember.js](https://www.chriskrycho.com/typing-your-ember.html) - エマーサイドとTypeScriptの組み合わせ
- [Ember.js, TypeScript, and Class Properties](https://www.chriskrycho.com/2018/ember-ts-class-properties.html)
- [Set your Ember.js project up to use TypeScript](http://www.chriskrycho.com/2017/typing-your-ember-part-1.html)
- [Class properties — some notes on how things differ from the Ember.Object world](https://www.chriskrycho.com/2018/typing-your-ember-update-part-2.html)
- [Computed properties, actions, mixins, and class methods](https://www.chriskrycho.com/2018/typing-your-ember-update-part-3.html)
- [Using Ember Data, and service and controller injections improvements](https://www.chriskrycho.com/2018/typing-your-ember-update-part-4.html)

### Articles Modern Testing
- [Using Fakes from Ember-Sinon-QUnit](https://medium.com/@mudflye/using-fakes-from-ember-sinon-qunit-c9fb7d4d9b1d)
- [Headless Ember.js Tests in GitLab with Docker](https://medium.com/devopslinks/headless-ember-tests-in-gitlab-with-docker-fd5f05eef436)
- [Making my Ember.js test suite 3x faster. A story about Mirage](https://mlange.io/blog/making-tests-faster-mirage/making-tests-faster-mirage/)
- [Learn TDD in Ember.js](https://learntdd.in/ember/)
- [STORY-BASED BDD - AN ALTERNATIVE APPROACH TO TESTING WITH EMBER](https://www.kaliber5.de/en/blog/story-based-bdd-an-alternative-approach-to-testing-with-ember/)
- [Ember.js Timer Leaks: The Bad Apples in Your Test Infrastructure](https://engineering.linkedin.com/blog/2018/01/ember-timer-leaks)
- [Test helpers: The next generation](https://dockyard.com/blog/2018/01/18/test-helpers-the-next-generation)
- [How we test 200k lines Ember.js application in <10 minutes. Again!](https://hackernoon.com/how-we-got-tests-for-200k-lines-ember-application-running-10-minutes-again-1fa7a4c5af2f)
- [Bending Time in Ember.js Tests](https://dockyard.com/blog/2018/04/18/bending-time-in-ember-tests)
- [Ember.js QUnit Simplification](https://www.rwjblue.com/2017/10/23/ember-qunit-simplication/)
- [Testing your Ember.js application in 2018](https://dockyard.com/blog/2018/03/29/testing-your-ember-application-in-2018)
- [Modern Ember.js Testing](https://dockyard.com/blog/2018/01/11/modern-ember-testing)
- [Testing Ember.js Applications in 2018](https://blog.201-created.com/testing-ember-applications-in-2018-4635ac241f00)
- [Testing Ember.js Mixins (and Helpers) With a Container](https://www.chriskrycho.com/2016/testing-emberjs-mixins-with-a-container.html)
- [Write Tests Like a Mathematician: Part 1](https://crunchingnumbers.live/2019/08/04/write-tests-like-a-mathematician-part-1/)
- [Write Tests Like a Mathematician: Part 2](https://crunchingnumbers.live/2019/08/06/write-tests-like-a-mathematician-part-2/)
- [Write Tests Like a Mathematician: Part 3](https://crunchingnumbers.live/2019/10/11/write-tests-like-a-mathematician-part-3/)
- [Setting up Coveralls for your Ember Addons](http://hangaroundtheweb.com/2020/05/setting-up-coveralls-for-your-ember-addons/)

### Articles FastBoot
- [How to integrate Ember FastBoot in Cloud Functions for Firebase](https://cenchat.com/blog/2019/06/06/how-to-setup-ember-fastboot-in-cloud-functions-for-firebase.html)
- [Ember FastBoot + Google App Engine](https://pulletsforever.com/ember-fastboot-google-app-engine-1d38e1e3ffc2)
- [Deploying FastBoot apps with ember-cli-deploy](https://www.effective-ember.com/blog/deploying-fastboot-apps-with-ember-cli-deploy)

### Articles about Data
- [Managing Relations in Ember Data with JSON API](https://www.mediasuite.co.nz/blog/managing-relations-ember-data-json-api/)
- [Creating a Default Record When a belongsTo Request Errors](https://shipshape.io/blog/ember-data-belongs-to-find-or-create/)
- [The case against async relationships in Ember Data](https://embermap.com/notes/83-the-case-against-async-relationships)
- [No Graph Theory Required: Ember.js and GraphQL in Practice](https://medium.com/kloeckner-i/ember-and-graphql-8aa15f7a2554)
- [Offline Data and Sync with Ember-Orbit](https://codingitwrong.com/2018/05/10/ember-orbit.html)
- [Inlining store data in Ember.js](https://balinterdi.com/blog/inlining-store-data-in-ember-js/)
- [Extracting Metadata from a Custom API with Ember Data](https://thejsguy.com/2018/04/06/extracting-metadata-from-a-custom-api-with-ember-data.html)
- [Ad Hoc Relationships with Ember Data](https://shipshape.io/blog/ad-hoc-relationships-with-ember-data/)
- [Ember Data RecordArray AntiPatterns](https://gist.github.com/runspired/d86a76158050c4f573f5f26df1dab143)
- [Useful Ember Data helpers](https://gist.github.com/runspired/96618af26fb1c687a74eb30bf15e58b6)
- [Cascade Deleting Relationships in Ember Data](https://davidtang.io/2017/02/10/cascade-deleting-relationships-in-ember-data.html)
- [Fit Any Backend Into Ember with Custom Adapters & Serializers](https://emberigniter.com/fit-any-backend-into-ember-custom-adapters-serializers/)

### Articles about Routing
- [How to reset the Ember.js router namespace with this.route()](http://toddsmithsalter.com/how-to-reset-the-route-namespace-with-this-route/)
- [Ember.js-Router Wildcard/Globbing Routes](https://www.tutorialspoint.com/emberjs/route_glbng_rut.htm)
- [Ember.js.Route redirecting ‘/’ to ‘/my-own’](https://medium.com/ember-titbits/quest-4-ember-route-defaulting-to-my-own-f22b0dcb336f)

### Yarn in Ember Articles
- [Ember.js and Yarn Workspaces](https://medium.com/square-corner-blog/ember-and-yarn-workspaces-fca69dc5d44a)

### Best-practices

- [ember-best-practices](https://github.com/ember-best-practices)
- [An Ember.js Debugging Flowchart](https://www.mutuallyhuman.com/blog/2016/08/12/an-ember-debugging-flowchart)
- [Built-in input helpers in Ember.js: when should they be used?](https://balinterdi.com/blog/built-in-input-helpers-in-ember-js-when-and-whether-they-should-be-used/)

### Nice to know

- [Codemods](https://caseywatts.com/2018/08/23/codemods.html)
- [Creating runtime assisted Codemods using Telemetry helpers](http://hangaroundtheweb.com/2019/10/creating-runtime-assisted-codemods-using-telemetry-helpers/)

### Blogs

- [lost-in-technology.com](https://www.lost-in-technology.com/blog/)
- [TODAY I LEARNED / Ember.js](https://til.hashrocket.com/emberjs)
- [Ember.js Daily Tips](http://www.emberdaily.com)
- [emberway.io](https://emberway.io/)
- [yehudakatz](https://yehudakatz.com/)
- [201-created.com](https://blog.201-created.com/)
- [airpair.com](https://www.airpair.com/ember.js)
- [alexdiliberto.com](https://alexdiliberto.com/)
- [balinterdi.com](https://balinterdi.com/blog/) - バルインタ・エルディのブログ
- [codeburst.io](https://codeburst.io/tagged/emberjs)
- [codementor.io](https://www.codementor.io/community/topic/emberjs)
- [dockyard.com](https://dockyard.com/blog/categories/ember)
- [emberigniter.com](https://emberigniter.com/articles/)
- [blog.embermap.com](https://blog.embermap.com)
- [engineering.linkedin.com](https://engineering.linkedin.com/blog/topic/ember)
- [hackernoon.com](https://hackernoon.com/tagged/ember)
- [lolma.us](https://lolma.us/en/blog)
- [madhatted.com](https://madhatted.com/)
- [medium.com/ember-ish](https://medium.com/ember-ish) - 初心者および中級開発者向けエマーサイドの基本知識
- [netguru.co](https://www.netguru.co/blog/topic/ember-js)
- [programwitherik.com](https://www.programwitherik.com) - エマーサイドチュートリアル
- [rwjblue.com](http://rwjblue.com/)
- [shipshape.io](https://shipshape.io/blog/)
- [simplabs.com](https://simplabs.com/blog/)
- [thejsguy.com](https://thejsguy.com/)

### Books

- [The Shortest Ember.js Book](https://github.com/ember-learn/the-shortest-ember-book)
- [A deep dive into the Ember.js runloop](https://github.com/eoinkelly/ember-runloop-handbook)
- [Developing an Ember.js Edge](https://gumroad.com/l/xlsx)
- [Ember Data in the Wild](https://leanpub.com/emberdatainthewild)
- [ember-cli 101](https://leanpub.com/ember-cli-101) - アドロフ・ブイレスによる
- [Ember.js for Artisans](https://leanpub.com/emberforartisans) - ラーバーで支えられたシングルページアプリケーションの作成
- [Ember.js in Action](http://manning.com/skeie/) - ジョアキム・ハーゲン・スケイによる
- [Professor Frisby's Mostly adequate guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide-old/)
- [Rock and Roll with Ember.js](http://rockandrollwithemberjs.com/)
- [Ember.js Book (RU)](https://leanpub.com/ember-book)
- [Pragmatic, balanced FP in JavaScript](https://github.com/getify/Functional-Light-JS)

### Cheatsheets

- [API](https://emberjs.com/api/)
- [Glimmer.js](https://glimmerjs.com/)
- [guides](https://guides.emberjs.com/)
- [Ember Component Cheat Sheet](https://codingitwrong.com/2019/07/23/ember-component-cheat-sheet.html) - オクターン以前

### Codemods
- [ember-es6-class-codemod](https://github.com/scalvert/ember-es6-class-codemod) - エマーサイドオブジェクトをES6ネイティブクラスに変換するためのcodemod-cliプロジェクト
- [ember-native-class-codemod](https://github.com/ember-codemods/ember-native-class-codemod) - エマーサイドアプリコードをネイティブJavaScriptクラス構文とデコレーターに変換するためのcodemod!
- [ember-cli-mirage-faker-codemod](https://github.com/caseywatts/ember-cli-mirage-faker-codemod) - このcodemodは、ember-cli-mirageを介してfakerをインポートしている状態から、直接fakerからインポートするように移行を支援します。
- [ember-mocha-codemods](https://github.com/Turbo87/ember-mocha-codemods) - ember-mocha向けのcodemodスクリプト。
- [ember-module-migrator](https://github.com/rwjblue/ember-module-migrator) - 新しいEmber.jsアプリケーションレイアウト向けの自動移行。
- [ember-qunit-codemod](https://github.com/rwjblue/ember-qunit-codemod) - このcodemodは、ember-qunit@2の古いmoduleFor*構文から新しい構文に自動的に変換することを目的としています。
- [ember-test-helpers-codemod](https://github.com/simonihmig/ember-test-helpers-codemod) - Ember.jsのテストを@ember/test-helpersを使用するように変換するためのcodemod。
- [es5-getter-ember-codemod](https://github.com/rondale-sc/es5-getter-ember-codemod) - このcodemodは、getおよびgetPropertiesの使用を、従来のオブジェクトドット記法に自動的に変換することを目的としています。
- [qunit-dom-codemod](https://github.com/simplabs/qunit-dom-codemod) - 基本的なcodemodで、あなたのアサーションをqunit-domアサーションに自動的に変換します。
- [test-selectors-codemod](https://github.com/lorcan/test-selectors-codemod) - ember-test-selectorsのtestSelectorヘルパーの非推奨化を修正するためのcodemod。
- [ember-on-codemod](https://github.com/craigbilner/ember-on-codemod) - Ember.onの使用を置き換える。
- [ember-memory-leaks-codemod](https://github.com/rajasegar/ember-memory-leaks-codemod) - Ember.jsアプリケーションにおけるメモリリークを修正するためのcodemodのコレクション。
- [ember-3x-codemods](https://github.com/rajasegar/ember-3x-codemods) - Ember.js 3.xの非推奨化を解決するための変換を含むcodemod。
- [ember-computed-getter-codemod](https://github.com/Alonski/ember-computed-getter-codemod) - Ember.jsのComputed Getter codemod。

### Community

- [Forum](http://discuss.emberjs.com/)
- [GitHub issues](https://github.com/emberjs/ember.js/issues)
- [Reddit](https://www.reddit.com/r/emberjs/)
- [Slack](https://embercommunity.slack.com)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/ember.js)
- [Telegram](https://t.me/ember_js)

### Contribution Guides

- [How to contribute to the ember times - part1](https://www.kennethlarsen.org/how-to-contribute-to-the-ember-times)
- [How to contribute ember release post - part2](https://www.kennethlarsen.org/how-to-contribute-ember-release-post)

### Courses

- [embermap.com](https://embermap.com)
- [Emberschool.com](https://www.emberschool.com)
- [embercasts.com](https://www.embercasts.com)
- [Frontend Masters: Advanced Ember.js 2.x - Mike North](https://frontendmasters.com/courses/advanced-ember-2/)
- [Frontend Masters: Ember.js 2.x - Mike North](https://frontendmasters.com/courses/ember-2/)

### Discovery

- [emberobserver](https://emberobserver.com/) - Ember Observer。
- [emberjs.GitHub.io/rfcs/](https://emberjs.github.io/rfcs/) - Ember.js RFCs。

### Ember Releases

- [Ember 3.10 Released](https://blog.emberjs.com/2019/05/21/ember-3-10-released.html) - 2019年5月21日
- [Ember 3.11](https://blog.emberjs.com/2019/07/15/ember-3-11-released.html) - 2019年7月15日
- [Ember 3.12](https://blog.emberjs.com/2019/08/16/ember-3-12-released.html) - 2019年8月16日
- [Ember 3.13 (Octane Preview)](https://blog.emberjs.com/2019/09/25/ember-3-13-released.html) - 2019年9月25日
- [Ember 3.14 (Octane Preview Cont.)](https://blog.emberjs.com/2019/11/18/ember-3-14-released.html) - 2019年11月18日
- [Ember 3.15 "Octane" Released](https://blog.emberjs.com/2019/12/20/ember-3-15-released.html) - 2019年12月20日
- [Ember 3.16](https://blog.emberjs.com/2020/02/12/ember-3-16-released.html) - 2020年2月12日
- [Ember 3.17](https://blog.emberjs.com/2020/03/16/ember-3-17-released.html) - 2020年3月16日
- [Ember 3.18](https://blog.emberjs.com/2020/05/05/ember-3-18-released.html) - 2020年5月5日
- [Ember 3.19](https://blog.emberjs.com/2020/06/26/ember-3-19-released.html) - 2020年6月26日
- [Ember 3.20](https://blog.emberjs.com/2020/07/29/ember-3-20-released.html) - 2020年7月29日
- [Ember 3.21](https://blog.emberjs.com/2020/09/02/ember-3-21-released.html) - 2020年9月2日
- [Ember 3.22](https://blog.emberjs.com/2020/10/20/ember-3-22-released.html) - 2020年10月20日

### Examples
- [A list of open source Ember.js apps](https://github.com/EmberSherpa/open-source-ember-apps)
- [Simple contact manager demo app for ember-orbit](https://github.com/cerebris/peeps-ember-orbit)
- [API Docs](https://github.com/ember-learn/ember-api-docs) - このアプリケーションは、バージョン管理されたAPIドキュメントを表示するためのものである。
- [guides-app](https://github.com/ember-learn/guides-app) - emberjs/guides および Ember.js ドキュメントの代替アプリケーション。
- [Builds](https://github.com/ember-learn/builds) - Ember.js チームがさまざまなリリースチャンネルを表示するためのアプリケーション。
- [HospitalRun](https://github.com/HospitalRun/hospitalrun-frontend) - HospitalRun [hospitalrun.io](http://hospitalrun.io/) の Ember.js フロントエンド。
- [Rancher](https://github.com/rancher/ui) - [Rancher](http://rancher.com) は Kubernetes のエンタープライズ管理ツール。
- [Super Rentals](https://github.com/ember-learn/super-rentals) - Super Rentals は、Ember.js の使い方を理解するための良いスタートプロジェクト。
- [Travis CI](https://github.com/travis-ci/travis-web) - [Travis CI](https://travis-ci.org/) の Ember.js ワンダークライアント。
- [Vault](https://github.com/hashicorp/vault/tree/master/ui/app) - シークレットを管理するツール（Hashicorp）。
- [ember-osf-web](https://github.com/CenterForOpenScience/ember-osf-web) - Open Science Framework の Ember.js フロントエンド。
- [ember-graphql-examples](https://github.com/chadian/ember-graphql-examples) - Ember.js で GraphQL を使う例。
- [ember-rolodex](https://github.com/rtablada/ember-rolodex) - Quick Start から Super Rents までの Ember.js チュートリアルの例。
- [ember-styleguide](https://github.com/ember-learn/ember-styleguide)
- [Ghost Admin Client](https://github.com/TryGhost/Ghost-Admin)
- [emberclear](https://github.com/NullVoxPopuli/emberclear) - 暗号化チャット。履歴なし。ログなし。＋MU & TS。
- [Ember.js nested engines example app + Fastboot.](https://github.com/catz/eng-test)
- [Percy's frontend web application, built with Ember.js.](https://github.com/percy/percy-web)
- [Fire Tracker](https://github.com/SCPR/fire-tracker) - KPCCがカリフォルニアの火災を追跡・調査するためのツール。
- [skylines-project](https://github.com/skylines-project/skylines/tree/master/ember) - ライブトラッキング、飛行データベースおよび競技フレームワーク
- [PIX](https://github.com/1024pix/pix-editor) - PIX
- [ember-monorepo-demo](https://github.com/lennyburdette/ember-monorepo-demo)
- [documize.com](https://github.com/documize/community)
- [New York City Census Reporting Tool](https://github.com/NYCPlanning/labs-factfinder)
- [Medicine Inventory](https://github.com/aalasolutions/ember-medical-inventory) - Ember CLI、Corber.io、ember-element-uiを使用したサンプルアプリケーション
- [octane-ecommerce](https://github.com/betocantu93/octane-ecommerce) - エマーブ Octane + FastBoot + Algolia + PayPal + Formspree ([s](https://docs.google.com/presentation/d/1YaG26Fj-tVjyFV8LvQJkfIH89-HYdkfHfhdRz3bC2-k/edit#slide=id.g56ccd9a7f0_0_33), [v](https://www.youtube.com/watch?v=KnkWs18V9dA&feature=youtu.be), [d](https://octane-ecommerce.herokuapp.com/))。
- [Rust Package Registry](https://github.com/rust-lang/crates.io) - [crates.io](https://crates.io)
- [Ember.js RealWorld Implementation](https://github.com/gothinkster/ember-realworld) - Ember.jsコードベースで実世界の例（CRUD、認証、高度なパターンなど）を含み、RealWorld仕様およびAPIに準拠したアプリケーション
- [A wild tomster appears](https://github.com/scudco/tomsweeper)
- [An ember integration for building visual programming editors with blockly.](https://github.com/Program-AR/ember-blockly)
- [https://www.submarinecablemap.com/](https://www.submarinecablemap.com/)
- [https://music.apple.com/](https://music.apple.com/)
- [https://creator.emojible.store/](https://creator.emojible.store/)


### Examples Glimmer
- [breethe-client](https://github.com/simplabs/breethe-client) - 世界中の場所の空気質データ
- [Glimmeroids](https://github.com/t-sauer/Glimmeroids) - Glimmer.jsを使用したアステロイドの実装
- [glimmer-hn-pwa](https://github.com/mhadaily/glimmer-hn-pwa) - Glimmer.jsで構築されたHacker Newsのプログレッシブウェブアプリのデモンストレーション
- [the-chosen](https://github.com/FLarra/the-chosen) - スクラムディアリーの会議中に、誰が次のステータスを共有するかを判断しやすくするために作成されたGlimmer.jsプロジェクト
- [glimmer_eats](https://github.com/James-Byrne/glimmer_eats) - Glimmer.jsで構築されたデモPWA
- [built-with-spaghetti](https://github.com/gordonbisnor/built-with-spaghetti) - Spaghettiで構築されたアプリは、ウェブアートへのゲートウェイとして機能するように設計されている
- [glimmer-live-chat](https://github.com/rajasegar/glimmer-live-chat) - Glimmer.jsを使用したライブチャットアプリケーション
- [glimmer-synth](https://github.com/jimenglish81/glimmer-synth) - WebAudioとGlimmer.jsを使用したシンセサイザー
- [glimmer-js-online-offline-demo](https://github.com/thomasbrus/glimmer-js-online-offline-demo) - Glimmer.jsサンプルアプリ：オンライン／オフラインブラウザイベント
- [glimmer-qrious](https://github.com/c0urg3tt3/glimmer-qrious) - QRiousライブラリを使用してウェブページにQRコードを生成するGlimmer.jsコンポーネント
- [glimmerjs-address-book-demo](https://github.com/ttdonovan/glimmerjs-address-book-demo) - Glimmer.jsアプリケーションの例：アドレスブックデモ
- [glimmer-dashboard](https://github.com/JustInToCoding/glimmer-dashboard) - Glimmer.jsダッシュボードの例
- [glimmer-redux-todo](https://github.com/bashmach/glimmer-redux-todo) - Glimmer.jsとReduxを使用したタスクアプリ
- [glimmer-pong](https://github.com/knownasilya/glimmer-pong) - Glimmer.jsとSVGを使用したパングゲーム
- [glimmer-material](https://github.com/cyk/glimmer-material) - Material Components for the Web 用の Glimmer.js ワッパー
- [glimmer-of-life](https://github.com/trentmwillis/glimmer-of-life) - Glimmer.js を使って実装した コーネルの「生命のゲーム」
- [vorfreude](https://github.com/chadian/vorfreude) - 待てないときの言葉
- [endless-hoops](https://github.com/mtmckenna/endless-hoops) - JavaScript/Canvas/Glimmer.js で書かれたバスケットボールゲーム
- [glimmer-hangman](https://github.com/BenSchoenmakers94/glimmer-hangman) - Glimmer.js で実装された有名なゲーム「ハンズマン」


### Gists
- [Forwarding Named Blocks in Glimmer](https://gist.github.com/tomdale/bedb77662b19529f59154ec55e2f4a21)
- [Multi Named Blocks](https://gist.github.com/pzuraq/0c16d7baef7237b62dfd7529d1969344)
- [Accessing the Global App Object in an Ember CLI App](https://gist.github.com/lifeart/fcdc59e2aa6a3c78457fecd57e578aa9)
- [A principled model for forms](https://gist.github.com/chriskrycho/48fa641eeb55217d4063592b411b1192)
- [ember-cli-advanced-proxy](https://github.com/bryanaka/ember-cli-advanced-proxy/blob/594e13cf2de386d8ea65dac88f643241f7a28363/index.js)
- [A list of Ember.js VSCode Extensions](https://github.com/Alonski/ember-vscode-extensions)
- [Ember.js Bundle Size](https://gist.github.com/CodingItWrong/074d20c5468a9c340e15aa46e19a8221)
- [Converting libraries to Ember CLI addons](https://gist.github.com/kristianmandrup/ae3174217f68a6a51ed5)
- [Developing Addons and Blueprints](https://gist.github.com/kristianmandrup/ae3174217f68a6a51ed5)
- [Ember.js + ESLint + Prettier + Ember Suave](https://gist.github.com/sarupbanskota/2394fc439e538239a073c39514a5aa55)
- [@listochkin/Ember.js Video Collection (Ru/En)](https://gist.github.com/listochkin/87e47cdbf986fb2e9905)
- [@rwjblue/ember_examples](https://gist.github.com/rwjblue/8816372)
- [@wycats/A small sampling of external projects initially built for Ember.js use but designed to be used standalone](https://gist.github.com/wycats/b58d56e5a47db4128a0a)
- [Ember.js publishing tools](https://gist.github.com/anulman/1e1da1d38178e7242d4701638bb29391)
- [Ember CLI es6 imports](https://gist.github.com/lifeart/949d867ba5f5455f8d955d9c9dc3610d)
- [Ember CLI Windows speedup](https://gist.github.com/lifeart/f436306a92f62610d65caaa699c17065)
- [How to debug an ember application with VS Code](https://gist.github.com/nightire/38ad30167df55175853b20f025f46596)
- [What are components all about.](https://gist.github.com/begedin/98045c9b4df900bb4695)
- ["Why Ember.js" Thoughts](https://gist.github.com/MelSumner/971ba6b7a3c0b01a4cb3a43d3b962dac)
- [Ember.js approval requirements](https://gist.github.com/PoslinskiNet/2d7a05944ca3c468440a0faea153062b)

### Gists Ember Data
- [Mirage GraphQL example](https://gist.github.com/samselikoff/0e176a76e5be53cbb94e85020fc2b115)
- [Ember Data | Useful helpers: push-deletion, push-payload](https://gist.github.com/runspired/96618af26fb1c687a74eb30bf15e58b6)
- [Ember Data | Complex Attrs](https://gist.github.com/runspired/a4b56f7eefe9f8e04f7f0c83e4dfeaf0)
- [Ember Data | Advanced Query Cache](https://gist.github.com/runspired/dba8d8b4b0cde8d272ec368739460eba)
- [Ember Data | Can we unload a record that has been deleted?](https://gist.github.com/runspired/c92c8d066511083f8c171a33ae27dedf)
- [Ember Data | Persist Local Relationship Changes](https://gist.github.com/runspired/15387de0130478aae377d22b16021982)
- [Ember Data | Push Polymorphic](https://gist.github.com/runspired/c5e86b006841fdab62bcddbc200f14e2)
- [Ember Data | has-many Batch Create](https://gist.github.com/runspired/ad9a9bab3ee2dac11c2af8ee9e31b81d)
- [Ember Data | Local Deletion](https://gist.github.com/runspired/68ad36b99367946a32c470fe1504d0ee)
- [Ember Data | Save Transaction](https://gist.github.com/runspired/a607f4debabde043efd284a04b244974)
- [Ember Data | Coalesce findHasMany within adapter Twiddle](https://gist.github.com/runspired/597ff8ccc4e9a06ff26c1754ba108fb3)
- [Ember Data | Nested save](https://gist.github.com/runspired/bc93f1c525837420f7b14d8cdcb2d36a)
- [Ember Data | Cascade Delete](https://gist.github.com/runspired/e9ee98ccc89fad2a07d9c86f2541a763)

### Miscellaneous

- [builtwithember](http://builtwithember.io/) - Ember.js で動くアプリケーション
- [emberwatch](https://github.com/emberwatch) - Ember.js コンテンツのコミュニティハブ

### Newsletters

- [Ember Weekly](http://www.emberweekly.com/) - Ember.js の最新ニュース、ヒント、コードがあなたのインボックスに直接届けられます
- [Official Ember Blog](https://emberjs.com/blog/) - 大きな発表、新しい Ember.js バージョンのリリースノートや、連邦議会の情報
- [statusboard](https://emberjs.com/statusboard/) - STATUS BOARD
- [The Ember Times](https://the-emberjs-times.ongoodbits.com/) - Ember.js 学習チームからのアップデート

### Podcasts

- [embermap](https://embermap.com/topics/the-embermap-podcast)
- [emberweekend](https://emberweekend.com/episodes)

### Sandboxes
- [Ember Twiddle](https://ember-twiddle.com/) - 複数ファイルを扱える Ember.js Twiddle で、GitHub に作業を保存できます
- [Ember @ Glitch](https://ember.glitch.me/) - Glitch.me と Ember.js
- [Ember @ CodeSandbox](https://codesandbox.io/s/github/mike-north/ember-new-output) - CodeSandbox と Ember.js
- [Ember Octane @ CodeSandbox](https://codesandbox.io/s/octane-starter-li841) - Ember Octane CodeSuki テンプレート

### Screencasts

- [BuildLab: Ember.js Screencasts for the determined.](https://www.youtube.com/channel/UC1ssGKlQh87Ubyuv1lEiY0g)
- [Ember Screencasts](https://www.emberscreencasts.com/) - 忙しい開発者のための週間スクリーンキャスト
- [EmberCasts](http://www.embercasts.com/) - 次のバージョンの Handlebars を作成中であるため、一時中断中
- [EmberWatch - Screencasts](http://emberwatch.com/screencasts.html) - Ember.js のスクリーンキャスト一覧
- [Community Groups App - Creating Records in Ember CLI Mirage (part 2a)](https://www.youtube.com/watch?v=4iqNcTUXurY)
- [Community Groups App - Creating Records in Ember CLI Mirage (part 2b)](https://www.youtube.com/watch?v=eAI1LxgSOqw)
- [Community Groups App - Debugging relationships in Ember CLI Mirage (part 3)](https://www.youtube.com/watch?time_continue=1&v=DRzPJ4RMT0w)

### Slides

- [30 Days Of Ember](https://slides.com/poslinski_net/30-days-of-ember) - ダヴィド・ポスリンスキー。
- [NaNoWriMo: How can Ember help you write a novel](https://slides.com/emma_be/nanowrimo-ember#/) - @EmmaDelecolle
- [Slides from Ember JS Berlin talk, Design Patterns in Ember](https://github.com/chadian/ember-js-berlin-design-patterns) - @chadian による投稿
- [Rainy Day Ember Data](https://speakerdeck.com/tonywok/rainy-day-ember-data) - Tony Schneider (@tonywok) による投稿
- [Building Realtime Apps with Ember.js and WebSockets](https://www.slideshare.net/BenLimmer/building-realtime-apps-with-emberjs-and-websockets) - Ben Limmer による投稿
- [Deploying a Location-Aware Ember Application](https://www.slideshare.net/BenLimmer/deploying-a-locationaware-ember-application) -  Ben Limmer による投稿
- [Developing Desktop Apps with Electron & Ember.js - FITC WebU2017](https://www.slideshare.net/anulman/developing-desktop-apps-with-electron-emberjs-fitc-webu2017) - Aidan Nulman による投稿
- [Developing Desktop Apps with Electron & Ember.js](https://www.slideshare.net/fitc_slideshare/developing-desktop-apps-with-electron-emberjs)
- [Ember addons, served three ways](https://www.slideshare.net/mikelnorth/ember-addons-served-three-ways) - Mike North による投稿
- [Ember At Scale](https://www.slideshare.net/chadhietala/ember-at-scale) - Chad Hietala, LinkedIn による投稿
- [EmberConf 2015 – Ambitious UX for Ambitious Apps](https://www.slideshare.net/sugarpirate/emberconf-2015-ambitious-ux-for-ambitious-apps) - Lauren Elizabeth Tan による投稿
- [EmberConf 2016 – Idiomatic Ember: Finding the Sweet Spot of Performance & Productivity](https://www.slideshare.net/sugarpirate/emberconf-2016-idiomatic-ember-finding-the-sweet-spot-of-performance-productivity) - Lauren Elizabeth Tan による投稿
- [Fun with Ember 2.x Features](https://www.slideshare.net/BenLimmer/fun-with-ember-2x-features) - Ben Limmer による投稿
- [How do I Even Web App](https://www.slideshare.net/lydiaguarino/how-do-i-even-web-app) - Lydia Guarino による『Ember CLI を使ってウェブプログラミングを学ぶ』
- [Rapid prototyping and easy testing with ember cli mirage](https://www.slideshare.net/KrzysztofBiaek1/rapid-prototyping-and-easy-testing-with-ember-cli-mirage) -  Krzysztof Bialek による投稿
- [Start Me Up - Building an MVP with EmberJS, Firebase and Material Design](https://www.slideshare.net/PickNBook/start-me-up-building-an-mvp-with-emberjs-firebase-and-material-design) - Brendan O'Hara による投稿
- [Upgrading Ember.js Apps](https://www.slideshare.net/BenLimmer/upgrading-emberjs-apps) - Ben Limmer による投稿

### Styleguides

- [ember-styleguide](https://github.com/ember-learn/ember-styleguide)
- [Softlayer Ember.js](https://github.com/softlayer/ember-style-guide)
- [Netguru Ember.js](https://github.com/netguru/ember-styleguide)
- [DockYard Ember.js](https://github.com/DockYard/styleguides/blob/master/engineering/ember.md)
- [JavaScript Style Guide](https://github.com/DockYard/styleguides/blob/master/engineering/javascript.md)

### Tools

- [Ember Data Sails Adapter](https://github.com/bmac/ember-data-sails-adapter) - Sails.js ソケット向けの Ember Data アダプタ
- [Ember Data WordPress Adapter](https://github.com/HeyHumanAgency/Ember-Data-WordPress) - WordPress JSON API 向けの Ember Data アダプタ
- [Ember Gist](http://ember-gist.joostdvrs.com/) - GitHub Gist を使って Ember CLI に似たアプリのデモ
- [Ember Inspector](https://github.com/emberjs/ember-inspector) - Chrome または Firefox デベロッパーツールに Ember.js タブを追加し、アプリ内の Ember.js オブジェクトを確認できる。-公式で維持中
- [Ember Perf](https://github.com/mike-north/ember-perf) - Ember.js アプリ内でユーザーが感じたパフォーマンスデータを測定
- [ember-cli-diff](http://www.ember-cli-diff.org/) - 新しい Ember アプリの違いを確認できるシンプルなツール
- [ember-cli](https://ember-cli.com/) - 野心的なウェブアプリケーション向けのコマンドラインインターフェース
- [ember-data-model-maker](https://andycrum.github.io/ember-data-model-maker/) - Ember-Dataのモデルとパラメータの例を示すUI
- [Glimmer Playground](https://try.glimmerjs.com/) - Glimmer.jsのプレイグランド
- [mber](https://github.com/izelnakri/mber) - Ember CLIの代替品。現在はアルファ版。
- [remote-inspector](https://github.com/joostdevries/ember-cli-remote-inspector) - ネットワーク上で異なるデバイス／ブラウザに実行中のアプリをウェブソケットで確認できる機能
- [Ember Unused Components](https://github.com/vastec/ember-unused-components) - このスクリプトはあなたのEmberプロジェクト内の使われていないコンポーネントを検索します

### Tutorials

- [How to learn EmberJS in a hurry](https://medium.com/ember-ish/how-to-learn-emberjs-in-a-hurry-c6fdeae256a0)
- [Discover Ember 2](https://www.ludu.co/course/ember) - ゼロからTwitterクローンを構築する方法を学ぶ
- [Ember Components: A Deep Dive](http://code.tutsplus.com/tutorials/ember-components-a-deep-dive--net-35551) - Ember.jsコンポーネントの使い方を詳しく見ていきます
- [Ember runloop handbook](https://github.com/eoinkelly/ember-runloop-handbook) - Ember.jsのループ（runloop）についての詳細な解説
- [Ember with Phoenix (AKA The PEEP Stack)](https://medium.com/peep-stack) - Ember.jsのフロントエンドを、[JSON API](http://jsonapi.org/)に準拠した[Phoenix](http://www.phoenixframework.org/)バックエンドと並行して開発する方法
- [Getting into Ember.js](http://code.tutsplus.com/tutorials/getting-into-emberjs--net-30709) - Emberの入門コース（5回分）
- [Getting Started with Ember.js using Ember CLI](https://thetechcofounder.com/getting-started-with-ember/) - Ember CLIを使ってTodoアプリを構築する
- [yoember.com/](http://yoember.com/) - Ember.jsチュートリアル：初心者から上級者へ
- [build-pacman](http://www.jeffreybiles.com/build-pacman)

### Twitter

- [EmberJS](https://twitter.com/emberjs)
- [The Ember Times](https://twitter.com/embertimes)
- [Ember Watch](https://twitter.com/EmberWatch)
- [Ember Weekly](https://twitter.com/EmberWeekly)

- [Tom Dale](https://twitter.com/tomdale)
- [Yehuda Katz](https://twitter.com/wycats)
- [Melanie Sumner](https://twitter.com/melaniersumner)
- [Jen Weber](https://twitter.com/jwwweber)
- [Robert Jackson](https://twitter.com/rwjblue)
- [Stefan Penner](https://twitter.com/stefanpenner)
- [Matthew Beale](https://twitter.com/mixonic)
- [Chris Thoburn](https://twitter.com/Runspired)
- [Chris Garrett](https://twitter.com/pzuraq)
- [Alex Navasardyan](https://twitter.com/twokul)
- [Igor Terzic](https://twitter.com/terzicigor)
- [Dan Gebhardt](https://twitter.com/dgeb)

- [Alex Speller](https://twitter.com/alexspeller)
- [Sam Selikoff](https://twitter.com/samselikoff)
- [Erik Bryn](https://twitter.com/ebryn)
- [Gavin Joyce](https://twitter.com/gavinjoyce)
- [Ryan Toronto](https://twitter.com/ryantotweets)
- [Balint Erdi](https://twitter.com/baaz)
- [Luke Melia](https://twitter.com/lukemelia)

### Videos

- [Working with Ember Animated & Addon Internals: Ember Concurrency – Ember NYC, May 2019](https://www.youtube.com/watch?v=JbxaVHQFou0)
- [Ember.js Tutorial: Build a painting game in 20 mins](https://www.youtube.com/watch?v=N4KrBuO0RRE)
- [Ember-cli In-Repo Addons with Jacob Bixby](https://www.youtube.com/watch?v=VYrMs1Zzpqs)
- [Maintaining an Ember App at Scale, with Chris Ng](https://www.youtube.com/watch?v=gyGZHydh0Hw&feature=em-uploademail)
- [Jackie Luo: From React to Ember: A Modern Comparison](https://www.youtube.com/watch?v=7yxr4iBrZsw)
- [Ember San Francisco Meetup at Square, October 2018](https://www.youtube.com/watch?v=ulWhjL0Aj5s)
- [The Future of Ember js](https://www.youtube.com/watch?v=4b9VbB2bnfw) - EmberConf 2018での発表から得られた情報に基づく、今後のEmber.jsの変更点の要約
- [Ember: The Next 10 Years | Tom Dale | EmberCamp Chicago 2018](https://www.youtube.com/watch?v=9cseB2xoT-0)
- [Stop Coding: You Have a Product Gap | Sam Selikoff | EmberCamp Chicago 2018](https://www.youtube.com/watch?v=fYHgyIlGttk)
- [Caveats of the Default Store - Ember London - September 2018](https://www.youtube.com/watch?v=EcKaDu0xo_A)
- [EmberFest 2019](https://www.youtube.com/playlist?list=PLN4SpDLOSVkT0e094BZhGkUnf2WBF09xx)
- [EmberFest 2018](https://www.youtube.com/watch?v=oRzmDobMZ_Q&list=PLN4SpDLOSVkSB9034lDNdP1JoNBGssax9)
- [EmberFest 2014](https://www.youtube.com/watch?v=z4oxa-UR7oA&list=PLN4SpDLOSVkSbGTLohVaYGDB8hxWxGPBA)
- [Global Ember Meetup](https://vimeo.com/globalembermeetup)
- [Ember @ Netflix](https://pusher.com/sessions/meetup/emberfest/ember-netflix)
- [Ember Engines at Scale](https://pusher.com/sessions/meetup/ember-london/ember-engines-at-scale)
- [Ember Test Recorder](https://pusher.com/sessions/meetup/ember-london/ember-test-recorder)
- [Ember-cli In-Repo Addons with Jacob Bixby](https://www.youtube.com/watch?v=VYrMs1Zzpqs)
- [ember-content-placeholders](https://pusher.com/sessions/meetup/emberfest/ember-content-placeholders)
- [Ember.JS in the Year 2020](https://pusher.com/sessions/meetup/emberfest/emberjs-in-the-year-2020)
- [EmberConf 2014](https://www.youtube.com/playlist?list=PLE7tQUdRKcyaOyfBnAndJxQ9PNVmKva0d) - EmberConf 2014のセッション動画
- [EmberConf 2015](https://www.youtube.com/playlist?list=PLE7tQUdRKcyacwiUPs0CjPYt6tJub4xXU) - EmberConf 2015のセッション動画
- [EmberConf 2016](https://www.youtube.com/playlist?list=PL4eq2DPpyBblc8aQAd516-jGMdAhEeUiW) - EmberConf 2016のセッション動画
- [EmberConf 2017](https://www.youtube.com/playlist?list=PL4eq2DPpyBbna_5fLPqOqensqSZpGf-hT) - EmberConf 2017のセッション動画
- [EmberConf 2018](https://www.youtube.com/watch?v=NhtpXs0ZtUc&list=PL4eq2DPpyBbnjD5iLp55as9OvIdEDI_Kt) - EmberConf 2018のセッション動画
- [EmberConf 2019](https://www.youtube.com/playlist?list=PLE7tQUdRKcyYWLWrHgmWsvzsQBSWCLHYL) - EmberConf 2019のセッション動画
- [EmberConf 2020](https://www.youtube.com/playlist?list=PL4eq2DPpyBbkC03mdzlyej6tcbEqrZK8N) - EmberConf 2020のセッション動画
- [ReactiveConf 2017 - Tom Dale: Secrets of the Glimmer VM](https://www.youtube.com/watch?v=nXCSloXZ-wc)
- [ReactiveConf 2017](https://youtu.be/62xd25kEZ3o?t=27618)
- [Tim Thomas - Using Ember.js to build Electron Apps](https://www.youtube.com/watch?v=ER1V_u0N7u4)
- [Tom Dale on Static Analysis, Upstreaming Glimmer, and Ember in 2018](https://embermap.com/topics/the-embermap-podcast/tom-dale-on-static-analysis-upstreaming-glimmer-and-ember-in-2018)
- [Tom Dale Talks EmberJS](https://www.slideshare.net/LinkedInPulse/tom-dale-ember-javascript-emberjs-linkedin)
- [Using TypeScript in Ember](https://pusher.com/sessions/meetup/ember-london/using-typescript-in-ember)
- [Web App Performance & Ember.js](https://www.youtube.com/watch?v=BelKk7dvA1A) - WebアプリのパフォーマンスとEmber.js
- [Why Ember CLI uses Broccoli](https://embermap.com/topics/intro-to-broccoli/why-ember-uses-broccoli)
- [Developing ember apps on glitch.com](https://www.youtube.com/watch?v=uhXA6ECaknw)
- [Chris Krycho: TypeScript and Ember js - Why and How?](https://www.youtube.com/watch?v=fFzxbBrvytU)
- [Isaac Lee: Use D3 with Ember](https://www.youtube.com/watch?v=vD7H9O--tu4)
- [Open Source Live - Robert Jackson and Chris Manson pair on ember-cli](https://www.youtube.com/watch?v=rsftBMGOfyo)
- [Must have add-ons in EmberJS - Dawid Pośliński](https://www.youtube.com/watch?v=IprfNT0xbrI)
- [Building Modern Apps Using API Services - Ember Meetup August 21, 2018](https://www.youtube.com/watch?v=VMnzGJ4PN0s)
- [How to improve your tests? - Paweł Kuwik](https://www.youtube.com/watch?v=rs71sx5IZ-U&t=0s&list=PLxt6MasYELQ5W3y8rwGa98GsyMBdhr_cp)
- [Optional & upcoming features - Michał Staśkiewicz](https://www.youtube.com/watch?v=4XokzPT4rgg&t=0s&list=PLxt6MasYELQ5W3y8rwGa98GsyMBdhr_cp)
- [Hybrid Apps with Ember/Glimmer](https://pusher.com/sessions/meetup/emberfest/hybrid-apps-with-emberglimmer)
- [Productive Frontend Test Driven Development That Actually Works](https://www.youtube.com/watch?v=63Ya91f8W-8)
- [EmberCamp 2018](https://www.youtube.com/watch?v=0ziETDm1QTI&list=PL4eq2DPpyBbm-vTgHMdBjUi1Qd5GiRIfW) - EmberCamp 2018のセッション動画
- [EmberCamp 2019](https://www.youtube.com/watch?v=a1HALof3r5M&list=PL4eq2DPpyBbmSKZLCqzMqdtpedlGrDQuc) - EmberCamp 2019のセッション動画
- [Ember.js: The Documentary](https://www.youtube.com/watch?v=Cvz-9ccflKQ&vl=en)
- [Ember.js: The Documentary (Русская версия)](https://www.youtube.com/watch?v=7Ym2ADCn77Q) - ロシア語版
- [GraphQL: The Documentary](https://www.youtube.com/watch?v=783ccP__No8&vl=en)
- [GraphQL: The Documentary (Русская версия)](https://www.youtube.com/watch?v=i_rsfHMF3x4) - ロシア語版
- [Ember and GraphQL: A Quick Example](https://www.youtube.com/watch?v=YxRvXgDIHW8)
- [Ember Octane Livestream: Build a drum machine](https://www.youtube.com/watch?v=5znpEiwHpL4)
- [Tracking in the Glimmer VM](https://www.youtube.com/watch?v=BjKERSRpPeI) - クリス・ゲートがEmberにおけるトラッキングの仕組みについて語る
- [Commit Porto '19: Thriving through the hype cycle: an Ember.js story (Ricardo Mendes)](https://www.youtube.com/watch?v=ECkbVa0iC4k)
- [Animating Across Routes with Ember Animated](https://www.youtube.com/watch?v=O4Mt-dDqkk0) - EmberMap動画：跨ルート遷移時のアニメーションを追加
- [Creating an Ember Application](https://www.youtube.com/watch?v=R2JdP4lb5Xw) - これから始まるシリーズの第1回：Emberについて
- [Ember and GraphQL: A Quick Example](https://www.youtube.com/watch?v=YxRvXgDIHW8)
- [Stef & Rob: do we still need the built-in Input component?](https://www.youtube.com/watch?v=c0Rl6o9wLX0) ステファン・ペンナーとロバート・ジャクソンが組み込みInputコンポーネントについて議論
- [Ember Octane - Great For Beginners](https://www.youtube.com/watch?v=iTPFsXcTAaY&feature=youtu.be) - Ember OctaneでHTMLとCSSだけでもかなり進める
- [Yet Another Test Runner by Kelly Sheldon @ Ember London](https://www.youtube.com/watch?v=HYwXL3f854Y&list=PL4eq2DPpyBbmvEzhyW9fhMzlctxwrn8JM&index=1)


### YouTube channels

- [Amsterdam Ember.js](https://www.youtube.com/channel/UCx9sVlEZLOKxw8OGCtoqULw)
- [Boston Ember](https://www.youtube.com/channel/UCp_L_YjmXTKR4Q2fg1XahsA)
- [Denver Ember](https://www.youtube.com/channel/UCsy4OVL_kNXsxr0a5LNKWpw)
- [Ember Videos](https://www.youtube.com/channel/UCMmzJ82sCmooDdtzVY8FxEA)
- [EmberJS Chennai](https://www.youtube.com/channel/UC-PzS1OA64zFD2kt3hwfGTA)
- [Ember.js Dublin](https://www.youtube.com/channel/UCQeD0i9ltSV1aOfX6FGeiOA)
- [EmberATX](https://www.youtube.com/channel/UCl7qY85b7KLJV3xnn1Xh_Cw)
- [EmberJSSeattleMeetup](https://www.youtube.com/channel/UC_EzRy1fCQPRPOD-uqk-E5w)
- [EmberSchool](https://www.youtube.com/channel/UCntNIA2acwPDIY77bX2uLmw)
- [EmberSherpa](https://www.youtube.com/user/EmberSherpa/videos)
- [Meetup: London](https://www.youtube.com/playlist?list=PL4eq2DPpyBbmvEzhyW9fhMzlctxwrn8JM)
- [Silicon Valley Ember.js meetup](https://www.youtube.com/channel/UCi12gVD9jIDwJLVTNnKvhlw)
- [So Ember 2017](https://www.youtube.com/watch?v=UpUtVGW43hY&list=PLXOJZupxSq204IxtG80UfIW-gU0IxAScY)
- [Wicked Good Ember 2016](https://www.youtube.com/playlist?list=PLXOJZupxSq22zfW2KVnXFgLbu--DA7q0G)
- [May I ask a Question](https://www.youtube.com/channel/UCyErLHzPqLAkL1F-SivFDcA)

### YouTube playlists
- [Ember London 2018](https://www.youtube.com/watch?v=EcKaDu0xo_A&list=PL8xuokhAnn4rUlol6aspg-VYetu9BLsWV)
- [Intercom Screencasts](https://www.youtube.com/playlist?list=PLpAr6J-75N27wctNT70O0lubaGTPjwi1L)
- [Ember.js tutorial for beginners in 2020](https://www.youtube.com/watch?v=eQUvN9Ujs1s&list=PLk51HrKSBQ88wDXgPF-QLMfPFlLwcjTlo) - シャウン・チェンによる10回シリーズ

## License

[CC0](https://github.com/ember-community-russia/awesome-ember/blob/6f7743a5868b3cb619caea7566d93b83f6f0e2bc/LICENSE)
