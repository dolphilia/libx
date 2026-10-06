---
title: "Awesome Sass"
description: "Sass・SCSSの教材、フレームワーク、ミックスイン集、スタイルガイド、記事、開発ツール、書籍、動画、コミュニティ。"
licenseSource: "github-Famolus-awesome-sass-readme-md"
---

# Awesome Sass

Sass・SCSSの学習資料や構文比較に加え、レイアウト、配色、タイポグラフィ、アニメーションに使えるフレームワークとミックスイン集を探せます。スタイルガイド、記事、開発ツール、書籍、動画、コミュニティへのリンクも収録しています。

## 概要
[Sass](http://sass-lang.com/)は、変数、入れ子のルール、ミックスイン、インラインインポートなどの機能をCSSに追加する拡張です。SCSS構文はCSSと互換性があります。大規模なスタイルシートの整理や、小規模なスタイルシートの素早い作成を助けます。

Sassには2つの構文があります。SCSS（Sassy CSS）はSass 3から主要構文となり、CSS構文を包含しています。つまり、有効なCSSスタイルシートはすべて有効なSCSSでもあります。SCSSファイルは拡張子`.scss`を使います。

旧来のインデント構文（Sassとも呼ばれます）はHamlに着想を得ており、CSSとの類似性より簡潔さを重視しています。波括弧とセミコロンの代わりに、インデントでブロックを指定します。原リストでは、主要構文ではなくなった後も対応が続くと説明しています。この構文のファイルは拡張子`.sass`を使います。

## 入門<a id="始める"></a>
- [公式Sass・SCSSガイド](http://sass-lang.com/guide) - 公式Sass・SCSSガイド。
- [Tutorialzine](http://tutorialzine.com/2016/01/learn-sass-in-15-minutes/) - 15分でSassを学ぶ入門チュートリアル。
- [Codecademy](https://www.codecademy.com/learn/learn-sass) - CodecademyでSassを学ぶ。
- [Lynda](https://www.lynda.com/SASS-training-tutorials/1435-0.html) - 業界専門家によるオンライン動画チュートリアルで、初心者の基礎から高度な技法までSassの使い方を学ぶ。
- [公式Sass・SCSSリファレンス](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) - 公式Sass・SCSSドキュメントリファレンス。
- [SitePoint Sass・SCSSリファレンス](https://www.sitepoint.com/sass-reference/) - SitePointのSass・SCSSリファレンス。

## SassとSCSS
- [SitePoint](https://www.sitepoint.com/whats-difference-sass-scss/) - SassとSCSSの違い。
- [The Sass Way](http://thesassway.com/editorial/sass-vs-scss-which-syntax-is-better) - どちらの構文が優れているか。
- [Stack Overflow](http://stackoverflow.com/questions/5654447/whats-the-difference-between-scss-and-sass) - SCSSとSassの違い。

## フレームワーク
- [avalanche](https://avalanche.oberlehner.net) - パッケージ単位でCSSを扱うワークフローの基盤となるフレームワーク。
- [Bootstrap 4](https://github.com/twbs/bootstrap) - Bootstrapのバージョン4。レスポンシブでモバイルファーストのWebプロジェクトを開発するHTML・CSS・JSフレームワーク。
- [Bootstrap-sass](https://github.com/twbs/bootstrap-sass) - Bootstrap 2・3の公式Sass移植版。
- [Bulma](https://github.com/jgthms/bulma) - Flexboxに基づくモダンなCSSフレームワーク。
- [Cirrus](https://github.com/Spiderpig86/Cirrus) - 素早いプロトタイピング向けに設計された、コンポーネントとユーティリティを中心とするSCSSフレームワーク。
- [Foundation for Sites](https://github.com/zurb/foundation-sites) - レスポンシブなフロントエンドフレームワーク。さまざまなデバイス向けサイトのプロトタイプや本番用コードを素早く作成。
- [Hocus-Pocus](https://bkzl.github.io/hocus-pocus/) - 基本的なHTML要素とタイポグラフィを中心とする、汎用的で軽量なスタイルシートスターターキット。
- [iotaCSS](https://www.iotacss.com) - 規模の拡大を想定した、SassベースのオープンソースOOCSSフレームワーク。
- [Kickoff](http://trykickoff.com) - スケーラブルで高性能、レスポンシブなサイトを作成する軽量フロントエンドフレームワーク。
- [Materialize](http://materializecss.com) - Material Designに基づくモダンなレスポンシブフロントエンドフレームワーク。
- [mini.css](http://minicss.org/) - 最小限の構成で、レスポンシブかつ特定の見た目に依存しないCSSフレームワーク。
- [Scooter](http://dropbox.github.io/scooter/) - Dropbox向けの基本スタイル、CSSコンポーネント、高速な静的プロトタイピングを提供するSCSSフレームワーク。
- [Sierra](http://sierra-library.github.io/) - 恣意的なセレクターに頼らずにWebサイトを構築するための小規模なSCSSライブラリ。

## ライブラリとミックスイン<a id="ライブラリとmixin"></a>

### グリッド
- [Avalanche](http://colourgarden.net/avalanche) - SassとBEM構文を使う、軽量でレスポンシブなグリッドシステム。
- [csswizardry-grids](http://csswizardry.com/csswizardry-grids/) - Sassベースのシンプルで柔軟なグリッドシステム。流動的な幅、入れ子、レスポンシブな配置に対応。
- [Griddle](http://necolas.github.io/griddle/) - 柔軟に構成できるCSSグリッド生成ツール。
- [Gridlex](http://gridlex.devlint.fr/) - Flexboxグリッドシステム。
- [Jeet](https://github.com/mojotech/jeet) - Sass・Stylus向けの、幅を分数で指定するシンプルなグリッドシステム。
- [Neat](http://neat.bourbon.io/) - Sassで構築された軽量セマンティックグリッドフレームワーク。
- [Sass Flexible Grid System](https://dnomak.com/flexiblegs/install/sass/) - Sassの柔軟なグリッドシステム。
- [SCSS Flexible Grid System](https://dnomak.com/flexiblegs/install/scss/) - SCSSの柔軟なグリッドシステム。
- [Susy](https://github.com/oddbird/susy) - Sass向けレスポンシブレイアウトツールキット。
- [Toast](http://daneden.github.io/Toast/) - [animate.css](https://daneden.github.io/animate.css/)作者による柔軟で軽量なグリッドフレームワーク。
- [Waffle Grid](https://lucasgruwez.github.io/waffle-grid/) - 使いやすいFlexboxグリッドシステム。

### メディアクエリ
- [Breakpoint](https://github.com/at-import/breakpoint) - Sassでのメディアクエリ記述を簡素化。
- [include-media](https://eduardoboucas.github.io/include-media/) - シンプルで保守しやすいメディアクエリ。
- [mq-scss](https://github.com/Dan503/mq-scss) - 使いやすいSassメディアクエリミックスイン。
- [Sass MediaQueries](http://rafalbromirski.github.io/sass-mediaqueries/) - Sass向けの有用なメディアクエリミックスイン集（iOSデバイス、TV等を含む）。
- [Sass MQ](https://github.com/sass-mq/sass-mq) - メディアクエリを組み立てるSassミックスイン。

### 色
- [brand-colors](http://brand-colors.com/) - Sass、Less、Stylus、CSSで利用可能な人気ブランドカラー1,100超のコレクション。
- [Open color](https://github.com/yeun/open-color) - UI設計向けの配色セット。CSS、SCSS、LESS、Stylus、Adobeライブラリ、Photoshop/Illustratorスウォッチ、Sketchパレットで利用可能。
- [sass-planifolia](https://github.com/xi/sass-planifolia) - 素のSassで高度な色操作・コントラスト計算を行う。
- [scss-blend-modes](https://github.com/heygrady/scss-blend-modes) - Sassで標準色ブレンド関数を使用。

### タイポグラフィ
- [Sassline](https://sassline.com/) - Sass、rem単位、レスポンシブなモジュラースケールを使い、Web上の文字をベースライングリッドに配置。
- [Sassy-Gridlover](https://github.com/hiulit/Sassy-Gridlover) - モジュラースケールと垂直リズムを備えたタイポグラフィを構成するSassミックスイン集。Gridloverアプリに基づく。
- [Shevy](http://kyleshevlin.github.io/shevy/) - タイポグラフィの垂直リズムを整えるライブラリ。
- [Typi](https://github.com/zellwk/typi) - レスポンシブなタイポグラフィ向けSassミックスイン。

### アニメーション
- [Animate.scss](https://github.com/geoffgraham/animate.scss) - Dan Edenの[Animate.css](https://daneden.github.io/animate.css/)をSassへ移植。
- [Hover](http://ianlunn.github.io/Hover/) - リンク、ボタン、ロゴ、SVG、アイキャッチ画像等に適用できるCSS3駆動ホバーアニメーション効果集。CSS、Sass、LESSで利用可能。
- [Kf](https://kf-sass.com) - マップからキーフレームベースのアニメーションを作るSassミックスインライブラリ。
- [Sass Burger](https://github.com/jorenvanhee/sass-burger) - アニメーションするハンバーガーアイコンを作るSassミックスイン。
- [SpinThatShit](https://matejkustec.github.io/SpinThatShit/) - 単一要素のローダー・スピナー向けSCSSミックスイン集。

### その他
- [Angled Edges](https://github.com/josephfusco/angled-edges) - SVGを動的にエンコードしてセクションに傾斜した縁を作るSassミックスイン。
- [Bourbon](http://bourbon.io/) - Sass向けのシンプルで軽量なミックスインライブラリ。
- [Buttono](https://github.com/hsnaydd/buttono) - BEMスタイルのボタンを作る柔軟なSassミックスイン。
- [Buttons](https://github.com/alexwolfe/Buttons) - Sass・Compassを使って構築されたCSSボタンライブラリ。
- [csstyle](https://csstyle.io) - セレクターを生成し、詳細度を自動処理するモジュラーCSS構築用SCSSライブラリ。
- [Family.scss](http://lukyvj.github.io/family.scss/) - :nth-childで選択した要素のスタイルを管理する26個のSassミックスイン集。
- [Gerillass](https://gerillass.com/) - モダンなWebサイトの作成を支援するSassミックスインライブラリ。
- [Juice](http://kylebrumm.com/juice/) - Sassミックスイン・関数のコレクション。
- [Modular Scale](https://github.com/modularscale/modularscale-sass) - Sassへ組み込まれたモジュラースケール計算機。
- [normalize-scss](https://github.com/JohnAlbin/normalize-scss) - Normalize.cssのSass/Compass版。全ブラウザー間でスタイルを正規化するHTML要素・属性のルールセット集。
- [Pretty checkbox](https://github.com/lokesh-coder/pretty-checkbox) - チェックボックス・ラジオボタンを美しくするSCSS/CSSライブラリ。
- [retina.js](https://github.com/imulus/retinajs) - 高解像度版の画像を表示するJavaScript、SCSS、Sass、Less、Stylusヘルパー。
- [Sass Accoutrement](http://oddbird.net/open-source/accoutrement/) - 連携してプロジェクトの中核設定を構成するSassツールキット。個別利用も、統合しての利用も可能。
- [Sass Deprecate](https://github.com/salesforce-ux/sass-deprecate) - コードを非推奨にする際の管理を助けるSassミックスイン。
- [Sass flexbox mixin](https://github.com/mastastealth/sass-flex-mixin) - ブラウザー標準の対応を使ってFlexboxを扱うミックスイン集。原リストでは当時のブラウザーを対象に説明。
- [Sassdash](https://github.com/davidkpiano/sassdash) - lodashのSass実装（[APIドキュメント](http://davidkpiano.github.io/sassdash)）。
- [Scut](https://github.com/davidtheclark/scut) - よく使うスタイル記述パターンの実装を簡素化・改善するSassユーティリティ集。

## スタイルガイド
- [Hugo GiraudelのSass Guidelines](https://sass-guidelin.es/) - 構造が整理され、保守しやすく拡張可能なSassを書くガイドライン。
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
- [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer) - セレクター単位のインポート、nodeインポート、モジュールインポート、glob、一度だけのファイルインポートに対応するカスタムnode-sassインポーター。
- [node-sass](https://github.com/sass/node-sass) - libsassのNode.jsバインディング。
- [OctoLinker](https://github.com/OctoLinker/browser-extension) - GitHub向けOctoLinkerブラウザー拡張で*.scss・*.sassファイルを効率よく移動。
- [sass-extract](https://github.com/jgranstrom/sass-extract) - SCSSファイルから変数や計算済みスタイルをJavaScriptオブジェクトへ抽出し、SCSSで定義したスタイルをJavaScriptで利用。インポートや高度な言語機能に対応。
- [sass-loader](https://github.com/jtangelder/sass-loader) - webpack向けSassローダー。
- [sass-rails](https://github.com/rails/sass-rails) - Sass向けRuby on Railsスタイルシートエンジン。
- [SassDoc](http://sassdoc.com/) - ドキュメントを素早く生成するシステム。JavaScript向けのJSDocに相当。
- [Scout-App](http://scout-app.io/) - コマンドラインの知識なしにSass・SCSSファイルをCSSへ変換。
- [scss-lint](https://github.com/brigade/scss-lint) - クリーンで一貫したSCSSを書くための設定可能ツール。[非推奨](https://github.com/brigade/scss-lint#notice-consider-other-tools-before-adopting-scss-lint)。
- [SharpScss](https://github.com/xoofx/SharpScss) - libsassをP/Invokeで呼び出し、SCSSをCSSへ変換する.NETラッパー。NET2.0/NET3.5/NET4.x+・CoreCLRをサポート。
- [stylelint](https://stylelint.io/) - 一貫した規約の適用とスタイルシートのエラー回避を助けるCSSリンター。SCSSを含むCSS風構文をサポート。

## 書籍
- [Sass in the Real World: Book I of IV](https://anotheruiguy.gitbooks.io/sassintherealworld_book-i/content/)
- [Sass in the Real World: Book II of IV](https://anotheruiguy.gitbooks.io/sass-in-the-real-world-book-2-of-4/content/)
- [Jump Start Sass: Get Up to Speed With Sass in a Weekend](https://www.amazon.com/Jump-Start-Sass-Speed-Weekend/dp/0994182678)
- [Sass and Compass for Designers](https://www.amazon.com/Sass-Compass-Designers-Ben-Frain/dp/1849694540)

## 動画
- [Sass Tutorial](https://www.youtube.com/watch?v=wz3kElLbEHE)
- [Sassのインストール、基礎、主要機能を学ぶチュートリアルシリーズ](https://www.youtube.com/playlist?list=PL2CB1F80266E986EA)
- [SassかLESSか？何を使うべきか？](https://www.youtube.com/watch?v=lJclQekSfSM)
- [Learn Sass in this Free Crash Course - Give your CSS Superpowers!](https://www.youtube.com/watch?v=roywYSEPSvc)
- [The Net Ninja Sass playlist](https://www.youtube.com/watch?v=St5B7hnMLjg&list=PL4cUxeGkcC9iEwigam3gTjU_7IA3W2WZA)

## コミュニティ
- [Reddit](https://www.reddit.com/r/Sass/)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/sass)
- [Twitterの@SassCSS](https://twitter.com/SassCSS)
