---
title: "LucasBassetti/awesome-less"
description: "LucasBassetti/awesome-lessの正規スナップショット"
licenseSource: "github-LucasBassetti-awesome-less-readme-md"
---

# Awesome Less [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://cdn.rawgit.com/LucasBassetti/awesome-less/14437854/less-logo.svg" align="right" height="80">](http://lesscss.org/)

> 優れた Less フレームワーク、ライブラリ、スタイルガイド、記事、リソースをキュレーションしたリスト。誰でもここへ貢献でき、Less に関するすべての情報を集約して最新の状態に保つことを主な考え方としています。

## 目次
- [概要](#about)
- [開始方法](#getting-started)
- [UI・テーマフレームワークとコンポーネント](#uitheme-frameworks-and-components)
- [ライブラリと Mixins](#libraries-and-mixins)
  - [Grid](#grid)
  - [メディアクエリ](#media-queries)
  - [色](#color)
  - [アニメーション](#animation)
  - [その他](#miscellaneous)
- [スタイルガイド](#style-guides)
- [Less の移植版](#ports-of-less)
  - [Java](#java)
  - [.Net](#net)
  - [PHP](#php)
  - [Python](#python)
  - [Ruby](#ruby)
  - [Go](#go)
- [GUI、エディター、プラグイン](#guis-editors-and-plugins)
- [オンライン Less コンパイラー](#online-less-compilers)
- [Less をサポートするオンライン Web IDE・プレイグラウンド](#online-web-idesplaygrounds-with-less-support)
- [翻訳](#translations)
- [記事](#articles)
- [書籍](#books)
- [動画](#videos)
- [実験](#experiments)
- [コミュニティ](#community)
- [貢献方法](#contributing)
- [ライセンス](#license)

## 概要

Less は Cascading Style Sheets (CSS) にコンパイルでき、クライアント側またはサーバー側で実行できるオープンソースの動的スタイルシート言語です。Alexis Sellier により設計された Less は Sass の影響を受け、CSS 風のブロック書式構文を採用した Sass の新しい「SCSS」構文にも影響を与えました。Less は変数、ネスト、mixins、演算子、関数を提供します。ほかの CSS プリコンパイラーとの主な違いは、ブラウザーが Less を介してリアルタイムにコンパイルできることです。出典: [Wikipedia](https://en.wikipedia.org/wiki/Less_(stylesheet_language))

**[先頭へ戻る](#contents)**

## 開始方法

- [初心者向けガイド](http://www.hongkiat.com/blog/less-basic/)
- [Less 入門](https://scotch.io/tutorials/getting-started-with-less)
- [10 分で学ぶ](http://tutorialzine.com/2015/07/learn-less-in-10-minutes-or-less/)
- [公式ガイド](http://lesscss.org/)
- [公式リポジトリ](https://github.com/less/less.js)

**[Back to top](#contents)**

## UI・テーマフレームワークとコンポーネント

- [1pxdeep](http://rriepe.github.io/1pxdeep/) - 相対的な視覚的重み、またはカラースキームに基づくデザインを Bootstrap にもたらします。
- [Ant Design](https://github.com/ant-design/ant-design/) - エンタープライズ級 UI デザイン言語および React ベースの実装。
- [Bootstrap a11y theme](https://github.com/bassjobsen/bootstrap-a11y-theme) - Bootstrap 開発者のウェブアクセシビリティ対応を容易にします。
- [Bootstrap 3](http://getbootstrap.com/) - レスポンシブでモバイルファーストなウェブプロジェクト開発向け、最も人気のある HTML、CSS、JS フレームワーク。
- [Bootswatch](http://bootswatch.com/) - Bootstrap 向け無料テーマのコレクション。
- [Cardinal](http://cardinalcss.com/) - レスポンシブウェブアプリケーションを構築するフロントエンド開発者向けの小さな「モバイルファースト」CSS フレームワーク。
- [CSSHórus](https://github.com/firminoweb/csshorus) - レスポンシブ・モバイルウェブサイト開発用ライブラリ。
- [Flat UI Free](http://designmodo.github.io/Flat-UI/) - Bootstrap 向けテーマ・フレームワーク。
- [JBST](http://jbst.eu/) - スタンドアロンのウェブサイトビルダー、または WordPress テーマ作成に使えるテーマフレームワーク。
- [Less Rails](https://github.com/metaskills/less-rails) - Rails 向け Less。
- [Material Design for Bootstrap](https://github.com/FezVrasta/bootstrap-material-design) - Bootstrap V3 互換テーマ。Bootstrap 3 ベースのアプリケーションで Google の新しい Material Design ガイドラインを使う簡単な方法です。
- [Metro UI CSS](http://metroui.org.ua/) - Windows 8 に似たインターフェースのサイトを作るスタイルセット。
- [Schema](http://danmalarkey.github.io/schema/) - 軽量でレスポンシブ、無駄のないフロントエンド UI フレームワーク。
- [Semantic UI](http://semantic-ui.com/) - 自然言語から得られる有用な原則に基づく UI コンポーネントフレームワーク。
- [UIkit](https://getuikit.com/) - ウェブインターフェース開発向け軽量・モジュラーなフロントエンドフレームワーク。
- [Wee](https://www.weepower.com/) - 複雑でレスポンシブなウェブプロジェクトを論理的に構築する軽量フロントエンドフレームワーク。

**[Back to top](#contents)**

## ライブラリと Mixins

### グリッド

- [Bootstrap Grid Only](https://github.com/zirafa/bootstrap-grid-only) - 余分なものを含まない Bootstrap のレスポンシブグリッド・レスポンシブユーティリティクラスのみ。軽量ながら強力で、好みに合わせてスタイルを適用できます。
- [Framework](https://github.com/jonikorpi/Less-Framework) - Less Framework は、適応型ウェブサイトを設計する CSS グリッドシステム。単一グリッドに基づく 4 種のレイアウトと 3 組のタイポグラフィプリセットを含みます。
- [Flexible Grid System](http://flexible.gs/) - これまでにない柔軟な方法でウェブアプリケーションを作成できるフレームワーク。
- [Fluidable](http://fluidable.com/) - モバイルファーストのレスポンシブグリッドシステム。スタンドアロンで軽量、Less で構築されています。
- [Grid System](https://github.com/goodpixels/less-grid-system) - とても使いやすく、マークアップ非依存のグリッドシステム。
- [Less Zen Grid](https://github.com/bassjobsen/LESS-Zen-Grid) - Less による [Zen Grids](https://github.com/JohnAlbin/zen-grids) の実装。
- [Order.Less](https://github.com/chromice/order.less) - ベースライン配置、列グリッド、モジュラースケール。

**[Back to top](#contents)**

### メディアクエリ

- [CSS とメディアクエリ戦略](https://github.com/buymeasoda/less-media-queries) - Less CSS を使い、モダン・レガシーブラウザー向けのメディアクエリ駆動ソリューションを開発。
- [メディアクエリライブラリ](https://github.com/mrmlnc/less-mq) - Less による本当にシンプルなメディアクエリ。
- [Media Query to Type](https://github.com/himedlooff/media-query-to-type) - メディアクエリの内容を Internet Explorer 8 以下でアクセス可能にする IE 固有スタイルシート作成方法。

**[Back to top](#contents)**

### 色

- [Brand Colors](http://brand-colors.com/) - Sass、Less、Stylus、CSS で利用できる人気ブランドカラー 1,100 以上のコレクション。
- [More-Colors](http://jasonrobb.github.io/More-Colors.less/) - ブラウザー上でデザインする際の色操作を容易にする変数。
- [Open Color](https://github.com/yeun/open-color) - UI デザイン向けカラースキーム。CSS、SCSS、Less、Stylus、Adobe ライブラリ、Photoshop/Illustrator スウォッチ、Sketch パレットで利用できます。

**[Back to top](#contents)**

### アニメーション

- [Animate](https://github.com/joshuapekera/animate) - Less を用いて作成された CSS3 キーフレームアニメーションライブラリ。
- [Animate Less](https://github.com/machito/animate.less) - Dan Eden の [Animate.css](https://daneden.github.io/animate.css/) を Less へ移植。
- [Cube Less](https://github.com/sparanoid/cube.less) - CSS（Less）のみを使う 3D（アニメーション）キューブ。元は LeanCloud（別名 AVOS Cloud）で使われました。
- [Hover](http://ianlunn.github.io/Hover/) - リンク、ボタン、ロゴ、SVG、注目画像などへ適用できる CSS3 駆動ホバーアニメーション効果のコレクション。
- [Less Burguer](https://github.com/MarkRabey/less-burger) - [Sass Burger](http://joren.co/sass-burger/) を Less へ移植。

**[Back to top](#contents)**

### その他

- [3L](http://mateuszkocz.github.io/3l/) - Mixins ライブラリ。
- [Bidi](https://github.com/danielkatz/less-bidi) - 双方向スタイルを作る Mixins セット。
- [Clearless](http://clearleft.github.io/clearless/) - Mixins のコレクション。
- [Css3LessPlease](http://chrsr.com/css3lessplease/) - css3please.com を Less Mixins へ変換。
- [CssEffects](http://adodson.com/css-effects/) - CSS スタイル効果のコレクション。
- [Cssowl](http://cssowl.owl-stars.com/) - Mixin ライブラリ。
- [Dynamic Stylesheet](https://github.com/mrkrupski/LESS-Dynamic-Stylesheet) - 便利な Mixins セット。
- [Est](https://github.com/ecomfe/est/) - Mixin ライブラリ。
- [Hexagon](http://db0company.github.io/css-hexagon/) - カスタムサイズ・色の CSS 六角形を生成。
- [Homeless](https://github.com/pixelass/homeless) - 役立つ関数群。
- [Less Elements](http://lesselements.com/) - 基本 Mixins セット。
- [Lesshat](https://github.com/madebysource/lesshat) - スマートな Mixins ライブラリ。
- [Lessley](https://github.com/pixelass/lessley) - 純粋な Less で書かれた Jasmine 風テストスイート。
- [Lessmore](https://github.com/belyan/lessmore) - Mixins ライブラリ。CSS3 機能などのクロスブラウザーサポート。
- [Normalize](https://github.com/segundofdez/normalize.less) - 有名な [normalize.css](https://github.com/necolas/normalize.css/) を Less でモジュール化。
- [Oban](http://oban.io/) - Mixins のコレクション。
- [Preboot](https://github.com/mdo/preboot) - より良い CSS を書くための Mixins・変数コレクション。
- [Retina.js](https://github.com/imulus/retinajs) - 高解像度画像バリアントをレンダリングする JavaScript、SCSS、Sass、Less、Stylus ヘルパー。
- [Shape](https://github.com/fahad19/shape.less) - さまざまな形状向け Mixins のコレクション。
- [TRRtoolbelt](https://github.com/therebelrobot/tRRtoolbelt.less) - 一般的な操作のための Mixins・関数。

**[Back to top](#contents)**

## スタイルガイド

- [Handshake Style Guide](https://github.com/handshake/less-style-guide) - ベストプラクティスとコーディング規約のコレクションを紹介するガイド。
- [WebMD Health Services Style Guide](https://github.com/bitmap/less-styleguide) - WebMD Health Services における CSS/Less のベストプラクティスを概説する文書。

**[Back to top](#contents)**

## Less の移植版

### Java

- [JLessC](https://github.com/i-net-software/jlessc) - 完全に Java で書かれた Less コンパイラー。
- [Less Engine](https://github.com/Asual/lesscss-engine) - Rhino JVM ベース JavaScript インタープリターで Less を実行。
- [Less CSS Compiler for Java](https://github.com/marceloverdijk/lesscss-java) - Rhino JVM ベース JavaScript インタープリターで Less を実行。
- [Less4j](https://github.com/SomMeri/less4j) - ネイティブ Java 実装。
- [Lesscss](https://github.com/houbie/lesscss) - Rhino、Nasshorn、node.js エンジンを使って Less を実行。1.7.0 準拠。
- [Lesscss Gradle Plugin](https://github.com/houbie/lesscss-gradle-plugin) - Less ベース Gradle プラグイン。

**[Back to top](#contents)**

### .Net

- [BundleTransformer.Less](http://www.nuget.org/packages/BundleTransformer.Less/) - .NET で書かれたコンパイラー。
- [Less CSS for .Net](http://www.dotlesscss.org/) - .NET で書かれたコンパイラー。

**[Back to top](#contents)**

### PHP

- [ILess](https://github.com/mishal/iless) - JavaScript で書かれた PHP 移植版。
- [Lessphp](http://leafo.net/lessphp/) - PHP で書かれたコンパイラー。
- [Less.php](http://lessphp.gpeasy.com/) - PHP 移植版。

**[Back to top](#contents)**

### Python

- [Pyhton Compiler](https://github.com/lesscpy/lesscpy) - Python で書かれたコンパイラー。

**[Back to top](#contents)**

### Ruby

- [Ruby Compiler](https://github.com/cowboyd/less.rb) - Ruby の V8 Engine 上で動作する Less。

**[Back to top](#contents)**

### Go

- [Go Compiler](https://github.com/kib357/less-go) - 組み込み JavaScript エンジン内で Less を実行。

**[Back to top](#contents)**

## GUI、エディター、プラグイン

- [Atom Linter](https://github.com/josa42/atom-linter-less) - Atom テキストエディター用 Linter プラグイン。
- [CSS 2 Convert](http://css2less.co/) - コピー・ペーストだけで CSS を Less へ自動変換する手軽な方法。
- [CSS Less(ish)](https://github.com/kizza/CSS-Less-ish) - CSS プリプロセッサー（Less など）の機能を簡略化して実装する Sublime Text 2・3 プラグイン。
- [Crunch 2!](http://getcrunch.co/) - 統合コンパイル機能を備えるクロスプラットフォーム（Windows、Mac、Linux）エディター。大規模な Less プロジェクトで作業する場合は、Less ファイルには無料版だけで十分なのでぜひ試してください。
- [Diamond](https://diamond.js.org) - Sass、Less、CSS 向けに構築された依存関係管理。
- [Eclipse Less Plugin](http://www.normalesup.org/~simonet/soft/ow/eclipse-less.html) - Less スタイルシートを編集・コンパイルする便利な機能を提供して Eclipse IDE を拡張するプラグイン。
- [Eclipse Transpiler Plugin](https://github.com/gossi/eclipse-transpiler-plugin) - ファイル（Less、SASS、CoffeeScript など）を自動トランスパイルする Eclipse プラグイン。
- [Emacs](https://github.com/purcell/less-css-mode) - 保存時コンパイルをサポートする Emacs モード。
- [Grunt Contrib](https://github.com/gruntjs/grunt-contrib-less) - Grunt を使って Less ファイルを CSS へコンパイル。
- [Grunt Lint](https://github.com/jgable/grunt-lesslint) - Grunt から CSS Lint を使い Less ファイルを Lint。
- [Gulp Less](https://github.com/plus3network/gulp-less) - Gulp 向けプラグイン。
- [Hayaky](https://github.com/hayaku/hayaku) - 迅速なフロントエンドウェブ開発を目指す便利なスクリプト集。
- [Hyra Helper](https://github.com/Hyra/less) - PHP のみを使って Less ファイルを CSS へ変換する CakePHP プラグイン。
- [Koala](http://koala-app.com/) - Less、Sass、CoffeeScript をコンパイルするクロスプラットフォーム GUI アプリケーション。
- [Less for Notepad++](https://github.com/azrafe7/LESS-for-Notepad-plusplus) - Notepad++ 向け構文ハイライト。
- [Less Sublime](https://github.com/danro/Less-sublime) - Sublime Text 向け構文ハイライト。
- [Lesshint](https://github.com/lesshint/lesshint) - クリーンで一貫した Less を書くのを支援するツール。
- [LiveReload](http://livereload.com/) - CSS 編集・画像変更をライブ反映。CoffeeScript、SASS、Less などがそのまま動作します。
- [SimpleLess](https://wearekiss.com/simpless) - 最小限の Less コンパイラー。ドラッグ、ドロップ、コンパイルするだけです。
- [Sublime Less2CSS](https://github.com/timdouglas/sublime-less2css) - 保存時に Less ファイルを CSS へコンパイルする Sublime Text 2 プラグイン。
- [SublimeOnSaveBuild](https://github.com/alexnj/SublimeOnSaveBuild) - Sublime Text 2 でファイルを保存した瞬間にビルドを実行。Less、Compass、その他のプリプロセッサー・makefile を使うウェブプロジェクトに最適です。
- [Vim Less](https://github.com/groenewege/vim-less) - 構文ハイライト、インデント、自動補完を追加する Vim バンドル。
- [Visual Studio Web Essentials](http://vswebessentials.com/) - CSS、HTML、JavaScript、TypeScript、CoffeeScript、Less を書くなら、開発者としての作業を容易にする多くの便利機能を見つけられます。
- [Winless](http://lesscss.org/usage/#editors-and-plugins) - WinLess は Less.app のクローンとして始まり、より機能が充実したアプローチと複数の設定を備えます。コマンドライン引数による開始もサポートします。

**[Back to top](#contents)**

## オンライン Less コンパイラー

- [BeautifyTools Less Compiler](http://beautifytools.com/less-compiler.php) - [BeautifyTools](http://beautifytools.com/) にある、任意の整形・圧縮機能付きオンライン Less コンパイラー。
- [EstFiddle](http://ecomfe.github.io/est/fiddle/) - Less・est のライブデモを提供するオンライン Less コンパイラー。任意の est/Autoprefixer 機能を使い、1.4.0 以降のすべての Less バージョンを切り替えられます。
- [ILess](http://demo-iless.rhcloud.com/) - [ILess](https://github.com/mishal/iless) PHP コンパイラーのライブデモ。
- [Leafo](http://leafo.net/lessphp/editor.html) - [Lessphp](http://leafo.net/lessphp/) ライブデモ。
- [Less2CSS](http://less2css.org/) - ブラウザーでホストされ、Less をリアルタイムに編集・CSS へコンパイルできるオンライン統合開発環境 (IDE)。
- [LessPHP](http://lessphp.gpeasy.com/demo) - [Less.php](http://lessphp.gpeasy.com/) ライブデモ。
- [Lesstester](http://lesstester.com/) - Less CSS 向けオンラインコンパイラー。
- [Precess](http://precess.co/) - リアルタイムプリプロセッサーコンパイラー。
- [Winless](http://winless.org/online-less-compiler) - Less の学習を助けるオンライン Less コンパイラー。下記の例を確認するか、自分の Less コードを試せます。

**[Back to top](#contents)**

## Less をサポートするオンライン Web IDE・プレイグラウンド

- [CodePen](http://codepen.io/) - ウェブのフロントエンド向けプレイグラウンド。
- [CSSDeck Labs](http://cssdeck.com/labs) - HTML、CSS、JS コードを含む実験（テストケース）をすばやく作れる場所。
- [Fiddle Salad](http://fiddlesalad.com/less/) - すぐに使えるコーディング環境を備えたオンラインプレイグラウンド。
- [JS Bin](http://jsbin.com/) - JavaScript・CSS の人々がコードスニペットをテストするのを助けるために特別に設計されたウェブアプリ。
- [JsFiddle](http://jsfiddle.net/hb2rsm2x/) - オンラインウェブエディター。

**[Back to top](#contents)**

## 翻訳

- [中国語 (中文)](http://lesscss.cn/)
- [デンマーク語](http://lesscss.dk/)
- [ドイツ語](http://www.lesscss.de)
- [インドネシア語](http://bertzzie.com/post/7/dokumentasi-less-bahasa-indonesia)
- [イラン語](http://less-css.ir)
- [日本語](http://less-ja.studiomohawk.com/)
- [ポーランド語](http://ciembor.github.com/lesscss.org/)
- [スペイン語](http://amatellanes.github.io/lesscss.org/)
- [ベトナム語](http://less.eten.vn/)

**[Back to top](#contents)**

## 記事

- [Less 入門と Sass との比較](https://www.smashingmagazine.com/2011/09/an-introduction-to-less-and-comparison-to-sass/)
- [最高の Less チュートリアル: Less の包括的ガイド](http://www.cssauthor.com/less-tutorials/)
- [Less でより多くを実現する](https://medium.com/social-tables-tech/doing-more-with-less-256054d19f7d#.a41deg3dx)
- [Less CSS でループを作る方法](https://medium.com/@omererkan/how-to-make-a-loops-in-less-css-d74062debef1#.snv6jqw5x)
- [単なる CSS ではなく、Less を使って Less CSS を作ろう](https://medium.com/@zamamohammed/lets-use-lessjs-to-create-less-css-not-just-css-2d45d92a62e8#.jsocohrne)
- [Less を再訪する](https://medium.com/@ddprrt/revisiting-less-50b741bd884#.oyion811m)

**[Back to top](#contents)**

### 書籍

- [Instant Less CSS Preprocessor How-to](https://www.packtpub.com/web-development/instant-less-css-preprocessor-how-instant)
- [Less Web Development Essentials](http://pdf.th7.cn/down/files/1508/Less%20Web%20Development%20Essentials,%202nd%20Edition.pdf)
- [Learning Less](https://www.packtpub.com/web-development/learning-lessjs)

**[Back to top](#contents)**

## 動画

- [Learning Less](https://www.packtpub.com/web-development/learning-less-video)
- [Less（CSS プリプロセッサー）チュートリアル](https://www.youtube.com/watch?v=oh7_iZWvIyU&list=PLE42615v2IxlxVyGZd0rKnOzbqUtUiekE)
- [初心者向け Less CSS チュートリアル](https://www.youtube.com/watch?v=YQYJUeokqOY&list=PL6gx4Cwl9DGCshbAx1JpBtNoKh8iKAAiy)
- [Less CSS — 初心者向けチュートリアル](https://www.youtube.com/watch?v=-D5mWO9_vLI&list=PLLa1ZAmCB2zjEZ4QNLDi4173_xIGeV6nC)

**[Back to top](#contents)**

## 実験

- [3D ボタン](https://codepen.io/MamayAlexander/pen/aAsiq)
- [角丸 Mixin](https://codepen.io/eky/pen/dCmnp)
- [CSS3 カラーホイール](https://codepen.io/bitmap/pen/eBbHt)
- [デモ: 変数](https://codepen.io/ericrasch/pen/uGlvA)
- [簡単なボタン](https://codepen.io/octavioamu/pen/zJexw)
- [線形グラデーション Mixin](https://codepen.io/eky/pen/eAnCI)
- [ナビゲーションバー](https://codepen.io/lukasdietrich/pen/mkeAJ)
- [レスポンシブグリッド](https://codepen.io/mecarter/pen/idKqg)
- [サイズ変更可能な CSS のみのアイコン](https://codepen.io/ericrasch/pen/rndaF)
- [三角形・矢印 Mixin](https://codepen.io/eky/pen/AaCwF)
- [さらに見る...](https://codepen.io/tag/less/)

**[Back to top](#contents)**

## コミュニティ

- [Less への貢献](https://github.com/less/less.js/blob/master/CONTRIBUTING.md)
- [Freenode](http://webchat.freenode.net/?randomnick=1&channels=%23%23lesscss)
- [Medium](https://medium.com/search?q=less%20css)
- [Quora](https://www.quora.com/topic/LESS-stylesheet-language)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/less)
- [Twitter](https://twitter.com/hashtag/lesscss)

**[Back to top](#contents)**

## 貢献方法

貢献はいつでも歓迎します！ [ここをクリックしてガイドラインを読む](https://github.com/LucasBassetti/awesome-less/blob/master/CONTRIBUTING.md)。

**[Back to top](#contents)**

## ライセンス

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

法律で可能な限り、[Lucas Bassetti](http://lucasbassetti.com.br) はこの作品のすべての著作権および関連・隣接権を放棄しています。

**[Back to top](#contents)**
