---
title: "Awesome Sass"
description: "Sassを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-Famolus-awesome-sass-readme-md"
---

# Awesome Sass

Sassを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次
- [概要](#about)
- [始める](#getting-started)
- [SassとSCSS](#sass-vs-scss)
- [フレームワーク](#frameworks)
- [ライブラリとMixin](#libraries-and-mixins)
  - [グリッド](#grid)
  - [メディアクエリ](#media-queries)
  - [色](#color)
  - [タイポグラフィ](#typography)
  - [アニメーション](#animation)
  - [その他](#miscellaneous)
- [スタイルガイド](#style-guides)
- [記事](#articles)
- [ツール](#tools)
- [書籍](#books)
- [動画](#videos)
- [コミュニティ](#community)

## 概要
[Sass](http://sass-lang.com/)は、基本言語であるCSSに力と優雅さを加える拡張です。完全にCSS互換の構文で、変数、ネスト規則、Mixin、インラインimportなどを使えます。Sassは大きなスタイルシートを整理し、小さなスタイルシートをすばやく立ち上げる助けになります。

Sassには2つの構文があります。Sass 3以降の新しい主要構文は「SCSS」（Sassy CSS）として知られ、CSS構文のスーパーセットです。つまり有効なCSSスタイルシートはすべて有効なSCSSでもあります。SCSSファイルは`.scss`拡張子を使います。

2番目の古い構文はインデント構文（または単にSass）として知られます。Hamlの簡潔さに着想を得ており、CSSとの類似より簡潔さを好む人向けです。括弧とセミコロンの代わりに、行のインデントでブロックを指定します。主要構文ではなくなりましたが、インデント構文は今後もサポートされます。インデント構文のファイルは`.sass`拡張子を使います。

## 始める
- [公式Sass・SCSSガイド](http://sass-lang.com/guide) - 公式Sass・SCSSガイド。
- [Tutorialzine](http://tutorialzine.com/2016/01/learn-sass-in-15-minutes/) - 15分でSASSを学ぶチュートリアル。
- [Codecademy](https://www.codecademy.com/learn/learn-sass) - CodecademyでSassを学ぶ。
- [Lynda](https://www.lynda.com/SASS-training-tutorials/1435-0.html) - 業界専門家によるオンライン動画チュートリアルで、初心者の基礎から高度な技法までSassの使い方を学ぶ。
- [公式Sass・SCSSリファレンス](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) - 公式Sass・SCSSドキュメントリファレンス。
- [SitePoint Sass・SCSSリファレンス](https://www.sitepoint.com/sass-reference/) - SitePointのSass・SCSSリファレンス。

## SassとSCSS
- [SitePoint](https://www.sitepoint.com/whats-difference-sass-scss/) - SassとSCSSの違い。
- [The Sass Way](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better) - どちらの構文が優れているか。
- [Stack Overflow](http://stackoverflow.com/questions/5654447/whats-the-difference-between-scss-and-sass) - SCSSとSassの違い。

## フレームワーク
- [avalanche](https://avalanche.oberlehner.net) - パッケージベースCSSワークフローの基盤を構築するフレームワーク。
- [Bootstrap 4](https://github.com/twbs/bootstrap) - Web上でレスポンシブ・モバイルファーストなプロジェクトを開発する、最も人気のHTML・CSS・JSフレームワーク、Bootstrapのバージョン4。
- [Bootstrap-sass](https://github.com/twbs/bootstrap-sass) - Bootstrap 2・3の公式Sassポート。
- [Bulma](https://github.com/jgthms/bulma) - Flexboxに基づくモダンCSSフレームワーク。
- [Cirrus](https://github.com/Spiderpig86/Cirrus) - 高速プロトタイピング向けに設計されたコンポーネント・ユーティリティ中心のSCSSフレームワーク。
- [Foundation for Sites](https://github.com/zurb/foundation-sites) - 世界で最も先進的なレスポンシブフロントエンドフレームワーク。あらゆる種類のデバイスで動作するサイト向けに、プロトタイプ・本番コードを迅速に作成。
- [Hocus-Pocus](https://bkzl.github.io/hocus-pocus/) - 基本HTML要素とタイポグラフィに焦点を当てたユニバーサルかつ軽量なスタイルシートスターターキット。
- [iotaCSS](https://www.iotacss.com) - スケールに向け構築されたオープンソースSassベースOOCSSフレームワーク。
- [Kickoff](http://trykickoff.com) - スケーラブルで高性能、レスポンシブなサイトを作成する軽量フロントエンドフレームワーク。
- [Materialize](http://materializecss.com) - Material Designに基づくモダンなレスポンシブフロントエンドフレームワーク。
- [mini.css](http://minicss.org/) - ミニマル、レスポンシブ、スタイル非依存のCSSフレームワーク。
- [Scooter](http://dropbox.github.io/scooter/) - Dropbox向けの基本スタイル、CSSコンポーネント、高速な静的プロトタイピングを提供するSCSSフレームワーク。
- [Sierra](http://sierra-library.github.io/) - 任意のセレクターなしでWebサイト構築を支援する小さなSCSSライブラリ。

## ライブラリとMixin

### グリッド
- [Avalanche](http://colourgarden.net/avalanche) - 軽量、レスポンシブ、Sassベース、BEM構文のグリッドシステム。
- [csswizardry-grids](http://csswizardry.com/csswizardry-grids/) - シンプル、流動的、ネスト可能、柔軟、Sassベース、レスポンシブなグリッドシステム。
- [Griddle](http://necolas.github.io/griddle/) - 非常に柔軟なCSSグリッドコンストラクター。
- [Gridlex](http://gridlex.devlint.fr/) - Flexboxグリッドシステム。
- [Jeet](https://github.com/mojotech/jeet) - Sass・Stylus向けのシンプルな分数グリッドシステム。
- [Neat](http://neat.bourbon.io/) - Sassで構築された軽量セマンティックグリッドフレームワーク。
- [Sass Flexible Grid System](https://dnomak.com/flexiblegs/install/sass/) - Sassの柔軟なグリッドシステム。
- [SCSS Flexible Grid System](https://dnomak.com/flexiblegs/install/scss/) - SCSSの柔軟なグリッドシステム。
- [Susy](https://github.com/oddbird/susy) - Sass向けレスポンシブレイアウトツールキット。
- [Toast](http://daneden.github.io/Toast/) - [animate.css](https://daneden.github.io/animate.css/)作者による柔軟で軽量なグリッドフレームワーク。
- [Waffle Grid](https://lucasgruwez.github.io/waffle-grid/) - 使いやすいFlexboxグリッドシステム。

### メディアクエリ
- [Breakpoint](https://github.com/at-import/breakpoint) - Sassでのメディアクエリ記述を非常に簡単にします。
- [include-media](https://eduardoboucas.github.io/include-media/) - シンプル、洗練され、保守しやすいメディアクエリ。
- [mq-scss](https://github.com/Dan503/mq-scss) - 非常に強力かつ使いやすいSassメディアクエリMixin。
- [Sass MediaQueries](http://rafalbromirski.github.io/sass-mediaqueries/) - Sass向けの有用なメディアクエリMixin集（iOSデバイス、TV等を含む）。
- [Sass MQ](https://github.com/sass-mq/sass-mq) - エレガントな方法でメディアクエリを構成できるSass Mixin。

### 色
- [brand-colors](http://brand-colors.com/) - Sass、Less、Stylus、CSSで利用可能な人気ブランドカラー1,100超のコレクション。
- [Open color](https://github.com/yeun/open-color) - UI設計向けオープンカラー配色。CSS、SCSS、LESS、Stylus、Adobeライブラリ、Photoshop/Illustratorスウォッチ、Sketchパレットで利用可能。
- [sass-planifolia](https://github.com/xi/sass-planifolia) - 素のSassで高度な色操作・コントラスト計算を行う。
- [scss-blend-modes](https://github.com/heygrady/scss-blend-modes) - Sassで標準色ブレンド関数を使用。

### タイポグラフィ
- [Sassline](https://sassline.com/) - Sass・remsによるレスポンシブなモジュラースケールを使い、Web上のテキストをベースライングリッドへ配置。
- [Sassy-Gridlover](https://github.com/hiulit/Sassy-Gridlover) - モジュラースケール・垂直リズムを備えたタイポグラフィシステムを確立する、とても使いやすいSass Mixins。Gridloverアプリに基づきます。
- [Shevy](http://kyleshevlin.github.io/shevy/) - タイポグラフィを簡単にする垂直リズムライブラリ。
- [Typi](https://github.com/zellwk/typi) - レスポンシブタイポグラフィを簡単にするSass Mixin。

### アニメーション
- [Animate.scss](https://github.com/geoffgraham/animate.scss) - Dan Edenの[Animate.css](https://daneden.github.io/animate.css/)をSASSへ移植。
- [Hover](http://ianlunn.github.io/Hover/) - リンク、ボタン、ロゴ、SVG、アイキャッチ画像等に適用できるCSS3駆動ホバーアニメーション効果集。CSS、Sass、LESSで利用可能。
- [Kf](https://kf-sass.com) - マップからキーフレームベースのアニメーションを作るSass Mixinライブラリ。
- [Sass Burger](https://github.com/jorenvanhee/sass-burger) - アニメーションするハンバーガーアイコンを作るSass Mixin。
- [SpinThatShit](https://matejkustec.github.io/SpinThatShit/) - 単一要素のローダー・スピナー向けSCSS Mixin集。

### その他
- [Angled Edges](https://github.com/josephfusco/angled-edges) - SVGを動的に符号化してセクションへ角度付きエッジを作るSass Mixin。
- [Bourbon](http://bourbon.io/) - Sass向けシンプルで軽量なMixinライブラリ。
- [Buttono](https://github.com/hsnaydd/buttono) - BEMスタイルのボタンを作る柔軟なSass Mixin。
- [Buttons](https://github.com/alexwolfe/Buttons) - Sass・Compassを使って構築されたCSSボタンライブラリ。
- [csstyle](https://csstyle.io) - セレクターを生成し、詳細度を自動処理するモジュラーCSS構築用SCSSライブラリ。
- [Family.scss](http://lukyvj.github.io/family.scss/) - :nth-child化された要素のスタイル管理を簡単かつ上品にする26個のスマートSass Mixin集。
- [Gerillass](https://gerillass.com/) - モダンWebサイトの作成を支援するSass Mixinライブラリ。
- [Juice](http://kylebrumm.com/juice/) - Sass Mixin・関数のコレクション。
- [Modular Scale](https://github.com/modularscale/modularscale-sass) - Sassへ組み込まれたモジュラースケール計算機。
- [normalize-scss](https://github.com/JohnAlbin/normalize-scss) - Normalize.cssのSass/Compass版。全ブラウザー間でスタイルを正規化するHTML要素・属性のルールセット集。
- [Pretty checkbox](https://github.com/lokesh-coder/pretty-checkbox) - チェックボックス・ラジオボタンを美しくするSCSS/CSSライブラリ。
- [retina.js](https://github.com/imulus/retinajs) - 高解像度画像バリアントをレンダリングするJavaScript、SCSS、Sass、Less、Stylusヘルパー。
- [Sass Accoutrement](http://oddbird.net/open-source/accoutrement/) - プロジェクトの中核設定を形成するため連携して動くSassツールキット。個別にも利用でき、統合するとさらに強力になります。
- [Sass Deprecate](https://github.com/salesforce-ux/sass-deprecate) - コード非推奨化の管理を助けるSass Mixin。
- [Sass flexbox mixin](https://github.com/mastastealth/sass-flex-mixin) - 現行ブラウザーのネイティブサポートを使いFlexboxを扱いたい人向けMixin集。
- [Sassdash](https://github.com/davidkpiano/sassdash) - lodashのSass実装（[APIドキュメント](http://davidkpiano.github.io/sassdash)）。
- [Scut](https://github.com/davidtheclark/scut) - 一般的なスタイルコードパターンの実装を容易・改善するSassユーティリティ集。

## スタイルガイド
- [Hugo GiraudelのSass Guidelines](https://sass-guidelin.es/) - 正気で保守・拡張可能なSassを書くガイドライン。
- [BigCommerce Sass Coding Guidelines](https://github.com/bigcommerce/sass-style-guide) - BigCommerceで使用されるガイドライン。
- [Airbnb Sass and CSS Style Guide](https://github.com/airbnb/css) - AirbnbによるSass・CSSスタイルガイド。
- [Dropbox (S)CSS Style Guide](https://github.com/dropbox/css-style-guide) - Dropboxの(S)CSS記述スタイルガイド。

## 記事
- [Hugo Giraudel Personal Awesome Sass List](https://github.com/HugoGiraudel/awesome-sass) - Hugo GiraudelによるSass作品の記録。
- [Cubic Bézier Representation in Sass](http://thesassway.com/advanced/cubic-bezier-representation-in-sass)
- [Faster Sass builds with Webpack](http://eng.localytics.com/faster-sass-builds-with-webpack/)
- [Transitioning to SCSS at Scale](https://codeascraft.com/2015/02/02/transitioning-to-scss-at-scale/)
- [Sass Maps to UI Components](https://blog.prototypr.io/sass-maps-to-ui-components-f14e1f34412e#.9zt0s0rxt)
- [Inverse trigonometric functions with Sass](http://thesassway.com/advanced/inverse-trigonometric-functions-with-sass)
- [Stop Arguing So Much with Your Mixins](http://sassbreak.com/stop-arguing-with-your-mixins)
- [Styling React Components in Sass](http://hugogiraudel.com/2015/06/18/styling-react-components-in-sass/)
- [A Sass !default use case](https://robots.thoughtbot.com/sass-default)
- [Aesthetic Sass 3: Typography and Vertical Rhythm](https://scotch.io/tutorials/aesthetic-sass-3-typography-and-vertical-rhythm)
- [A Tale of CSS and Sass Precision](https://www.sitepoint.com/a-tale-of-css-and-sass-precision/)
- [Build a Style Guide Straight from Sass](https://css-tricks.com/build-style-guide-straight-sass/)
- [Advanced SCSS, or, 16 cool things you may not have known your stylesheets could do](https://gist.github.com/jareware/4738651)
- [The 80-20 Approach to Sustainable SCSS](https://zendev.com/2018/05/30/the-80-20-approach-to-sustainable-scss.html)
- [Advanced Use of Sass Maps](https://itnext.io/advanced-use-of-sass-maps-bd5a47ca0d1a)

## ツール
- [dart-sass](https://github.com/sass/dart-sass) - SassのDart実装。
- [diamond](https://diamond.js.org) - Sass、Less、CSS向けに構築された依存関係管理。
- [libsass-python](https://github.com/dahlia/libsass-python) - Python向けlibsassバインディング。
- [libsass](https://github.com/sass/libsass) - SassコンパイラーのC/C++実装。
- [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) - セレクター固有import、node import、モジュールimport、glob対応、ファイル一回のみimport向けのカスタムnode-sass importer。
- [node-sass](https://github.com/sass/node-sass) - libsassのNode.jsバインディング。
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - GitHub向けOctoLinkerブラウザー拡張で*.scss・*.sassファイルを効率よく移動。
- [sass-extract](https://github.com/jgranstrom/sass-extract) - scssファイルから変数を抽出。計算済みスタイルをJSオブジェクトへ抽出し、JavaScriptで使うスタイルをscssで記述します。import・高度な言語機能に対応。
- [sass-loader](https://github.com/jtangelder/sass-loader) - webpack向けSass loader。
- [sass-rails](https://github.com/rails/sass-rails) - Sass向けRuby on Railsスタイルシートエンジン。
- [SassDoc](http://sassdoc.com/) - 瞬時にきれいで強力なドキュメントを作る、JavaScript向けJSDocのようなドキュメントシステム。
- [Scout-App](http://scout-app.io/) - コマンドライン知識なしにSass・SCSSファイルをCSSへ処理。
- [scss-lint](https://github.com/brigade/scss-lint) - クリーンで一貫したSCSSを書くための設定可能ツール。[(非推奨)](https://github.com/brigade/scss-lint#notice-consider-other-tools-before-adopting-scss-lint)。
- [SharpScss](https://github.com/xoofx/SharpScss) - SCSSをCSSへ変換するlibsass周りのP/Invoke .NETラッパー。NET2.0/NET3.5/NET4.x+・CoreCLRをサポート。
- [stylelint](https://stylelint.io/) - 一貫した規約の強制とスタイルシートのエラー回避を助ける強力でモダンなCSS linter。SCSSを含むCSS風構文をサポート。

## 書籍
- [Sass in the Real World: Book I of IV](https://anotheruiguy.gitbooks.io/sassintherealworld_book-i/content/)
- [Sass in the Real World: Book II of IV](https://anotheruiguy.gitbooks.io/sass-in-the-real-world-book-2-of-4/content/)
- [Jump Start Sass: Get Up to Speed With Sass in a Weekend](https://www.amazon.com/Jump-Start-Sass-Speed-Weekend/dp/0994182678)
- [Sass and Compass for Designers](https://www.amazon.com/Sass-Compass-Designers-Ben-Frain/dp/1849694540)

## 動画
- [Sass Tutorial](https://www.youtube.com/watch?v=wz3kElLbEHE)
- [インストール、基礎、主要機能の利用を示すSassチュートリアルシリーズ](https://www.youtube.com/playlist?list=PL2CB1F80266E986EA)
- [SassかLESSか？何を使うべきか？](https://www.youtube.com/watch?v=lJclQekSfSM)
- [この無料クラッシュコースでSassを学ぶ - CSSにスーパーパワーを！](https://www.youtube.com/watch?v=roywYSEPSvc)
- [The Net Ninja Sass playlist](https://www.youtube.com/watch?v=St5B7hnMLjg&list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA)

## コミュニティ
- [Reddit](https://www.reddit.com/r/Sass/)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/sass)
- [Twitterの@SassCSS](https://twitter.com/SassCSS)

## ライセンス
[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
