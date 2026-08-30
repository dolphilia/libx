---
title: "awesome-css-group/awesome-css"
description: "CSSの仕様、パーサー、フレームワーク、設計手法、ツール、学習資料集"
licenseSource: "github-awesome-css-group-awesome-css-readme-md"
---

[awesome-link]:  https://github.com/sindresorhus/awesome
[awesome-badge]: https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
[travis-link]:   https://travis-ci.org/awesome-css-group/awesome-css
[travis-badge]:  https://travis-ci.org/awesome-css-group/awesome-css.svg?branch=master

# Awesome CSS [![Awesome][awesome-badge]][awesome-link] [![Travis Build Status][travis-badge]][travis-link]

> /* A curated list of awesome frameworks, style guides, and other cool nuggets for writing amazing CSS. */

<a id="introduction"></a>
## はじめに

<a id="motivation"></a>
### 目的

このドキュメントは、素晴らしいCSSを書くために選ばれたフレームワーク、スタイルガイド、そして興味深い情報のコレクションです。これはCSSを学ぶためのリソースを含んでいません。

<a id="complementary-resources"></a>
### 補完リソース

CSSに関する何かがうまくいかない場合は、以下のリソースを確認してください。

- [CSS - MDN - Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Reddit (CSS)](https://www.reddit.com/r/css/)
- [StackOverflow (CSS)](https://stackoverflow.com/questions/tagged/css)


<div id="contents"></div>

<a id="table-of-contents"></a>
## 目次





- [CSS Working Group](#css-working-group)
  - [Editor's Draft :black_nib:](#editors-draft-black_nib)
- [Parsers :mag:](#parsers-mag)
- [Preprocessors :pill:](#preprocessors-pill)
- [Frameworks :art:](#frameworks-art)
- [Toolkits :wrench:](#toolkits-wrench)
- [Reset and Normalize](#reset-and-normalize)
- [CSS Development at Large-Scale Websites](#css-development-at-large-scale-websites)
- [Code Style Guidelines :book:](#code-style-guidelines-book)
- [Style Guide](#style-guide)
- [Style Guide Generators :slot_machine:](#style-guide-generators-slot_machine)
- [Naming conventions & Methodologies :bulb:](#naming-conventions--methodologies-bulb)
- [CSS in JS](#css-in-js)
- [CSS Polyfills](#css-polyfills)
- [Miscellaneous](#miscellaneous)
- [Podcasts :radio:](#podcasts-radio)
- [Twitter :satellite:](#twitter-satellite)
- [Videos :tv:](#videos-tv)
  - [2019](#2019)
  - [2016](#2016)
  - [2015](#2015)
- [Books :books:](#books-books)
- [Tutorials :clapper:](#tutorials-clapper)
- [Maintainers](#maintainers)
- [Contribute](#contribute)



<a id="css-working-group"></a>
## CSSワーキンググループ

CSSワーキンググループはCSS仕様の作成と定義を行います。これらの仕様は、設計プロセスを通じて進むにつれて [maturity levels](https://www.w3.org/2005/10/Process-20051014/tr#maturity-levels) に割り当てられます。より詳しく知りたい場合は、 [CSS Working Group Page](https://www.w3.org/Style/CSS/) を訪れてください。

<a id="editors-draft-black_nib"></a>
### 編集者草案 :black_nib:

*CSS仕様の編集ドラフト*

- [W3c/csswg-drafts](https://github.com/w3c/csswg-drafts) - CSS WG Editor Draft リポジトリの鏡。
- [W3c/css-houdini-drafts](https://github.com/w3c/css-houdini-drafts) - ホウディンイのミラーWGエディタリポジトリ。

<a id="parsers-mag"></a>
## パーサー :mag:

* [CSSOM](https://github.com/NV/CSSOM) - 純粋なJavaScriptで実装されたCSSオブジェクトモデル。
* [CSSTree](https://github.com/csstree/csstree) - 詳細なCSSパーサーで、文法検証機能付き。
* [Gonzales PE](https://github.com/tonyganch/gonzales-pe) - CSSパーサーで事前処理言語に対応
* [Mensch](https://github.com/brettstimmerman/mensch) - 良いCSSパーサー。
* [ParserLib](https://github.com/CSSLint/parser-lib) - CSSLintのパーサーライブラリ
* [PostCSS](https://github.com/postcss/postcss) - JSプラグインでスタイルを変更する。
* [Rework](https://github.com/reworkcss/rework) - Node.jsにおけるCSS事前処理用のプラグインフレームワーク。
* [Stylecow](https://github.com/stylecow/stylecow) - 現代的なCSSがすべてのブラウザで利用可能

<sub>[⇧ back to top](#contents)</sub>

<a id="preprocessors-pill"></a>
## プリプロセッサー :pill:

CSSをより速く書ける

* [LESS](https://github.com/less/less.js) - CSSとの後方互換性を保ち、追加された機能は既存のCSS構文を使用する。
* [PostCSS](https://github.com/postcss/postcss) - CSSをJSプラグインで変換する。
* [Sass](https://github.com/sass/sass) - 熟成された、安定した、そして強力なプロフェッショナル向けCSS拡張言語。
* [STYLIS](https://github.com/thysultan/stylis.js) - 軽量のCSS事前処理言語。
* [Stylus](http://learnboost.github.io/stylus/) - Node.js向けに設計された、表現力豊かで強力で機能が豊富なCSS言語。
* [Vanilla Extract](https://vanilla-extract.style/) - TypeScriptで静的CSSを生成します。型安全で、局所スコープのクラス、変数、テーマを書きます。

<sub>[⇧ back to top](#contents)</sub>

<a id="frameworks-art"></a>
## フレームワーク :art:

* [AgnosticUI](https://www.agnosticui.com/) - React、Vue 3、Svelte、Angularにも対応するアクセシブルCSSコンポーネントの基本要素
* [Bonsai](https://www.bonsaicss.com/) - 50kb未満で完全なユーティリティファーストCSSフレームワーク。
* [Bootstrap](https://getbootstrap.com/) - 最も人気のあるHTML、CSS、JavaScriptフレームワーク。
* [Bulma](http://bulma.io/) - Flexboxに基づく現代的なCSSフレームワーク。また、Sassのインポートを提供しており、カスタマイズが可能。
* [Butter Cake](http://getbuttercake.com/) - 現代的な軽量フロントエンドCSSフレームワーク。ウェブ開発をより速く、簡単にする。
* [Charts.css](https://chartscss.org/) - CSSデータ可視化フレームワーク。
* [Chota](https://jenil.github.io/chota/) - 反応性でカスタマイズ可能なマイクロフレームワーク（3kb）に加え、便利なユーティリティとグリッドシステムを提供。
* [Cirrus](https://spiderpig86.github.io/Cirrus/) - 完全にレスポンシブかつ包括的なCSSフレームワークで、美しいコントロールとシンプルな構造を備えています。
* [Foundation](http://foundation.zurb.com/) - 高度なレスポンシブフロントエンドフレームワーク。
* [Gralig](http://gralig.com/) - シンプルで、灰っぽい CSS ライブラリ。
* [Halfmoon](https://www.gethalfmoon.com/) - 反応性のフロントエンドフレームワークで、内蔵されたダークモードを備えたもの
* [Hasser CSS](https://github.com/HeavenMercy/HasserCSS) - 軽量（12k、圧縮なし）だが便利なCSSフレームワーク。柔軟なグリッド、ヒーローなどがある。
* [Inuit.css](http://inuitcss.com/) - 強力で、スケーラブルで、Sassベース、BEM、OOCSSフレームワーク。
* [Material-components-web](https://github.com/material-components/material-components-web) - ウェブ向けのモジュラーかつカスタマイズ可能なマテリアルデザインUIコンポーネント
* [Materialize](http://materializecss.com/) - マテリアルデザインをベースとした現代的なレスポンシブフロントエンドフレームワーク。
* [Milligram](http://milligram.io) - ミニマリズムを採用したCSSフレームワーク。
* [Numl](https://numl.design) - HTMLベースの言語と設計システムで、どんな見た目にも対応し、レスポンシブかつアクセシブルな高品質なウェブインターフェースを作成できます。
* [Pure.css](http://purecss.io/) - 小さな、反応性のあるCSSモジュールのセットで、すべてのウェブプロジェクトに使える
* [Semantic UI](http://semantic-ui.com/) - 人間が使いやすいHTMLを用いた強力なフレームワーク。
* [Shorthand Framework](https://github.com/shorthandcss/shorthand) - 新しい十年向けに豊富な機能を備えたCSSフレームワーク。
* [Spectre.css](https://picturepan2.github.io/spectre/index.html) - 軽量で反応性があり、現代的なCSSフレームワーク。
* [Strawberry](https://github.com/jfet97/strawberry) - ネストされたフィックスボックスを扱うためにあなたの生活をより簡単で速くするための、共通のフィックスボックスユーティリティのセット
* [Tachyons](http://tachyons.io/) - 人間向けの機能的なCSS
* [Tacit](https://yegor256.github.io/tacit/) - グラフィックデザインのスキルがゼロでも使えるCSSフレームワーク。
* [Tailwindcss](https://github.com/tailwindcss/tailwindcss) - 用途に応じたCSSフレームワーク。UI開発を高速化する。
* [Tronic247 Material](https://material.pages.dev/) - CSSと一部のJSを用いた、Material Designガイドラインに従ったレスポンシブフレームワーク。
* [UIkit](http://getuikit.com/) - 軽量かつモジュラリティの高いフロントエンドフレームワーク。
* [Unsemantic](http://unsemantic.com/) - モバイル、タブレット、デスクトップ用のフリードグリッド
* [Wing](https://kbrsh.github.io/wing/) - 極めてシンプルで、軽量かつ反応性のあるフレームワーク。

_[You can find more frameworks at "awesome-css-frameworks"](https://github.com/troxler/awesome-css-frameworks)_

<sub>[⇧ back to top](#contents)</sub>

<a id="toolkits-wrench"></a>
## ツールキット :wrench:

* [Bourbon](http://bourbon.io/) - Sass用のシンプルで軽量のミックスインライブラリ。

<sub>[⇧ back to top](#contents)</sub>

<a id="reset-and-normalize"></a>
## リセットと正規化

- [CSS Checker](https://github.com/ruilisi/css-checker) - 似たものや重複したCSSスクリプトを検出・削減
- [MiniReset.css](https://github.com/jgthms/minireset.css) - ミニマムな現代的なCSSリセット
- [Normalize-OpenType](https://github.com/kennethormandy/normalize-opentype.css) - オペンタイプ機能—連字、間隔調整、その他—to Normalize.css に追加
- [Normalize](https://github.com/necolas/normalize.css) - HTML要素のデフォルトスタイルにおいて、よりブラウザ間で一貫性の高い表示を提供するCSSルールのセット
- [Reset.css](https://meyerweb.com/eric/tools/css/reset/) - CSSツール：リセットCSS。
- [Reseter.css](https://github.com/krishdevdb/reseter.css) - 未来のCSSリセット/ノーマライザ。代替するのではなく、保持するのではなく再定義する。
- [Sanitize.css](https://github.com/jonathantneal/sanitize.css/) - 今日のベストプラクティスで即時適用可能なCSSルールのセット。
- [Unstyle.css](https://github.com/Martin-Pitt/css-unstyle) - ユーザーエージェントのスタイルを除去するための専用のスタイルシート、あなたのベースラインでウェブをスタイルアップ。

<sub>[⇧ back to top](#contents)</sub>

<a id="css-development-at-large-scale-websites"></a>
## 大規模ウェブサイトのCSS開発

* [Bugsnag's CSS Architecture](http://blog.bugsnag.com/bugsnags-css-architecture) [Max Luster](https://twitter.com/maxluster)によって
* [CSS at BBC Sport](https://medium.com/@shaunbent/css-at-bbc-sport-part-1-bab546184e66) シャン・ベンツによって
* [CSS AT HOOTSUITE](http://code.hootsuite.com/css-at-hootsuite/) スティーブ・ミネットによって
* [GitHub's CSS](http://markdotto.com/2014/07/23/githubs-css/) [Mark Otto](https://twitter.com/mdo)によって
* [How we do CSS at Ghost](https://dev.ghost.org/css-at-ghost/) パウル・デイビスによって
* [Lonely Planet](http://ianfeather.co.uk/css-at-lonely-planet/) [Ian Feather](https://twitter.com/ianfeather)によって
* [Medium’s CSS is actually pretty good.](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06) [Jacob Thornton](https://twitter.com/fat)によって
* [Refining The Way We Structure Our CSS At Trello](http://blog.trello.com/refining-the-way-we-structure-our-css-at-trello/) [Bobby Grace](https://twitter.com/bobbygrace)によって
* [Scalable-css-reading-list](https://github.com/davidtheclark/scalable-css-reading-list)

<sub>[⇧ back to top](#contents)</sub>

<a id="code-style-guidelines-book"></a>
## コードスタイルガイドライン :book:

* [Code Guide](http://codeguide.co/) [Mark Otto](https://twitter.com/mdo)によって
* [CSS Guidelines](http://cssguidelin.es/) [Harry Roberts](https://twitter.com/csswizardry)によって
* [CSS Styleguide](https://github.com/grvcoelho/css) [Guilherme Rv Coelho](https://github.com/grvcoelho)によって
* [Dropbox (S)CSS Style Guide](https://github.com/dropbox/css-style-guide) ドロップボックスによって
* [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html) Googleによる
* [Idiomatic CSS](https://github.com/necolas/idiomatic-css) [Nicolas Gallagher](https://twitter.com/necolas)によって
* [Official Trello CSS Guide](https://gist.github.com/bobbygrace/9e961e8982f42eb91b80) バービー・グレイスによって
* [Sass Guidelines](https://sass-guidelin.es/) [Kitty Giraudel](https://twitter.com/KittyGiraudel)によって
* [SASS Style Guide](http://sass-lang.com/styleguide) サスチームによる
* [ThinkUp CSS Style Guide](https://github.com/ThinkUpLLC/ThinkUp/wiki/Code-Style-Guide:-CSS) ThinkUpによる
* [WordPress CSS Coding Standards](https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/) ワールドプレスによって

<sub>[⇧ back to top](#contents)</sub>

<a id="style-guide"></a>
## スタイルガイド

* [AUI](http://docs.atlassian.com/aui/latest/docs) アタラシアンデザインによって
* [Design Elements](http://rizzo.lonelyplanet.com/styleguide/design-elements/colours) ロニル・プレートンによって
* [Fluent UI](https://github.com/microsoft/fluentui) マイクロソフトによって
* [GitHub CSS Style Guide](https://primer.github.io/) GitHubによる
* [Lighting Design System](https://www.lightningdesignsystem.com/) サファリースで
* [Patterns](https://ux.mailchimp.com/patterns) メールチップで
* [Solid](http://solid.buzzfeed.com/) バズfeedによって
* [Style Guide](https://www.starbucks.com/static/reference/styleguide/) スターバックスによる
* [Website Style Guide Resources](http://styleguides.io/examples.html) アワーオスな人々によって

[Website Style Guide Resources](http://styleguides.io/)にスタイルガイドをもっと見られる

<sub>[⇧ back to top](#contents)</sub>


<a id="style-guide-generators-slot_machine"></a>
## スタイルガイド生成ツール :slot_machine:

- [Hologram](https://github.com/trulia/hologram)
- [mdcss](https://github.com/jonathantneal/mdcss)
- [Source](https://github.com/sourcejs/Source)
- [Styledoc](https://github.com/Joony/styledoc/)
- [Styledocco](https://github.com/jacobrask/styledocco)
- [Styledown](https://github.com/styledown/styledown)
- [Sc5-styleguide](https://github.com/SC5/sc5-styleguide)

<sub>[⇧ back to top](#contents)</sub>


<a id="naming-conventions--methodologies-bulb"></a>
## 命名規則と方法論 :bulb:

* [Atomic Design](http://patternlab.io/resources.html)
* [Atomic OOBEMITSCSS](https://www.sitepoint.com/atomic-oobemitscss/)
* [BEM](https://en.bem.info/)
* [ITCSS](http://itcss.io/)
* [Kickoff CSS](http://trykickoff.com/learn/css.html#namingscheme)
* [MaintainableCSS](http://maintainablecss.com)
* [NCSS](https://ncss.io)
* [OOCSS](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
* [Point North](http://pointnorth.io/#base-browser-styling)
* [RSCSS](https://rscss.io/)
* [SUIT CSS](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md#u-utilityname)
* [Title CSS](https://www.sitepoint.com/title-css-simple-approach-css-class-naming/)

<sub>[⇧ back to top](#contents)</sub>


<a id="css-in-js"></a>
## CSS in JS

* [Aphrodite](https://github.com/Khan/aphrodite)
* [Babel-plugin-css-in-js](https://github.com/martinandert/babel-plugin-css-in-js)
* [Classy](https://github.com/inturn/classy)
* [Csjs](https://github.com/rtsao/csjs)
* [Css-loader](https://github.com/webpack/css-loader)
* [JSS](https://github.com/cssinjs/jss)
* [React-styled](https://github.com/bloodyowl/react-styled)
* [React-with-styles](https://github.com/airbnb/react-with-styles)
* [Styled-jsx](https://github.com/zeit/styled-jsx)
* [Styled-components](https://github.com/styled-components/styled-components)
* [Stylin](https://github.com/sultan99/stylin)


ここに[CSS in JS techniques comparison](https://github.com/MicheleBertoli/css-in-js)があります

<sub>[⇧ back to top](#contents)</sub>


<a id="css-polyfills"></a>
## CSSポリフィル

* [Polyfill.js](https://github.com/philipwalton/polyfill/) - CSSポリフィルの作成をはるかに簡単にするためのライブラリ
* [Prefixfree](https://github.com/LeaVerou/prefixfree) - CSSのプレフィックスの地獄から解放されましょう。
* [Fixed-sticky](https://github.com/filamentgroup/fixed-sticky) - CSSのposition:stickyのポリフィル。
* [Selectivizr](https://github.com/keithclark/selectivizr) - IE6-8でCSS3の擬似クラスおよび属性セレクタをエミュレートするJavaScriptユーティリティ
* [PIE](https://github.com/lojjic/PIE) - インターネット・エクスプローラーにCSS3ボックスデコレーションプロパティを認識・レンダリングできるようにする。


<sub>[⇧ back to top](#contents)</sub>


<a id="miscellaneous"></a>
## その他

* [Beautiful CSS box-shadow examples](https://getcssscan.com/css-box-shadow-examples) - キュレーションされた93の美しいCSSボックスシャドウコレクション。クリックでコピー。
* [Can I use](https://caniuse.com/) - ブラウザでのCSS、HTML5およびその他のフロントエンドウェブ技術のサポート。
* [Flexbox Patterns](https://flexboxpatterns.com/) cjcenizalによって
* [Glassmorphism CSS Generator](https://ui.glass/generator/) - グラスモーフィズム用のCSSを生成する。
* [GradientArt](https://gra.dient.art/) - 高度なCSSグラデーションエディタで、レイヤー機能、デザインツール、無料クラウドストレージを備えた
* [Live editor for CSS and LESS](https://github.com/webextensions/live-css-editor) - Chrome、FirefoxおよびEdge向けのマジックCSS拡張機能。
* [RevengeCSS](https://github.com/Heydon/REVENGE.CSS) - CSSのブックマークレットで、セレクタを使って不正なマークアップを検出し、不正なHTMLを書く場所にコミック・サン-serifで表示される醜いピンクのエラーメッセージを表示
* [Single Div Project](https://github.com/ManrajGrover/SingleDivProject) - 一つ `<div>`。多くの可能性。
* [You Might Not Need JS](http://youmightnotneedjs.com/) - CSSで一般的なJSUIコンポーネントに代替する方法。
* [Xpath-to-selector](https://github.com/steambap/xpath-to-selector) - XPathをCSSセレクタに変換する。

<sub>[⇧ back to top](#contents)</sub>

<a id="podcasts-radio"></a>
## ポッドキャスト :radio:

プログラミングしているときには聞いておくべきもの。

* [CSS Podcast](https://thecsspodcast.libsyn.com/) - アン・クラベツとアダム・アーバイ、および開発。
* [Non Breaking Space Show](http://goodstuff.fm/nbsp) - デジタルアートとそのブログ、UXにおいて、最も優れたそして知的なクリエイティブな人々を発見する。
* [Shop Talk Show](http://shoptalkshow.com/) - アナ・デベナムとブラッド・フロストがホストする、クリス・コイアとデイブ・ルーパートによるフロントエンドウェブデザインに関するライブポッドキャスト。
* [Style Guide Podcast](http://styleguides.io/podcast/index.html) - Googleのスタイルガイド、アートディレクション、コンテンツ戦略、デザイン、開発者アドボケートたちによる、CSSの複雑な側面をアクセシビリティからz-indexまで、誰でも理解できるエピソードに分解したインタビューの小さなシリーズ。
* [Syntax](https://syntax.fm/) - ウェブ開発者向けの美味しいおやつPodcast、タイプグラフィック、ウェブ技術
* [The Big Web Show](http://5by5.tv/bigwebshow/) - ウェブ出版といったテーマは、すべてオープンソース技術の最新情報をあなたに常に提供することについてです。
* [The Changelog](https://changelog.com/) - 変更ログのキャッチコピーはこう言っています：「オープンソースは速く進みます。それに追いついてください。」このポッドキャスト、そしてそれ以上のすべて。ウェブ上で重要なすべての内容。
* [The Web Ahead](http://5by5.tv/webahead/) - 世界の専門家たちと、変化する技術とウェブの未来についての対話。

<sub>[⇧ back to top](#contents)</sub>


<a id="twitter-satellite"></a>
## Twitter :satellite:

フォローすべきアクティブなアカウント。

* [Adam Morse](https://twitter.com/mrmrs_) - ユーザーとオープンソースを擁護する。
* [Andrey Sitnik](https://twitter.com/andreysitnik) - @Autoprefixer の著者、http://easings.net および @PostCSS の著者
* [Ben Briggs](https://twitter.com/ben_eb) - 最終年次ウェブテクノロジー学科の学生。node.js、javascript、オープンソースモジュール、クライアントサイド最適化、ウェブパフォーマンス。
* [Brad Frost](https://twitter.com/brad_frost) - ウェブデザイナー、スピーカー、ライター、コンサルタント、ミュージシャン。
* [Chris Coyier](https://twitter.com/chriscoyier) - デザイナー @CodePen。執筆者 @Real_CSS_Tricks。
* [Connor Sears](https://twitter.com/connors) - GitHubのデザイナー。
* [CSS Animation](https://twitter.com/cssanimation)
* [CSS Commits](https://twitter.com/CSScommits) - @CSSWGの公開Mercurialリポジトリへの最新コミット。
* [Daniel Glazman](https://twitter.com/glazou) - W3C CSS ワーキンググループ共同議長、起業家、ソフトウェアエンジニア、ゲイク、2人の息子の父、多言語話者、ダック好き。いや。ツイートはすべて私のものだ。
* [Dave McFarland](https://twitter.com/davemcfarland) - ウェブ開発者、CSS: The Missing Manual、JavaScript & jQueryの著者
* [Donovan Hutchinson](https://twitter.com/donovanh) - デザイナー、開発者、ライター。時折 http://Hop.ie, でブログを書いている。現在は @cssanimation を開発中。
* [Dudley Storey](https://twitter.com/dudleystorey) - ウェブ開発のライター、教師、スピーカー。
* [Eric Bidelman](https://twitter.com/ebidel) - グーグルでクローム、ウェブコンポーネント、ポリマーアンダーキャッチを担当しているエンジニア。
* [Evangelina Ferreira](https://twitter.com/evaferreira92) - ウェブデザイナー。@multimedial_utn の教授。HTML5＆CSSの狂気をもつ者。時折、翻訳者。
* [Guy Routledge](https://twitter.com/guyroutledge) - フロントエンド開発者、GA_Londonの講師、http://www.atozcss.com, でのスクリーンキャスト制作者、CSS愛好家。
* [Harry Roberts](https://twitter.com/csswizardry)- コンサルタントフロントエンドアーキテクト：@google, @Etsy, @kickstarter, @BBC, @Deloitte, @FT, その他。
* [Heydon Pickering](https://twitter.com/heydonworks) - 米を中程度に消費する。また、UXデザイナー、著者、@smashingmag編集者、プログラマーである。
* [Jonathan Snook](https://twitter.com/snookca) - デザイナー、開発者、ライター、スピーカー。私はウェブ上のものを作っています。私はSMACSSを書きました。
* [Kitty Giraudel](https://twitter.com/KittyGiraudel) - 非二元性のアクセシビリティ・多様性を推進する活動家、フロントエンド開発者、著者。
* [L. David Baron](https://twitter.com/davidbaron) - モzilla開発者、CSSおよびW3C標準の外交家。
* [Lea Verou](https://twitter.com/LeaVerou) - MIT_CSAILでの研究助手、CSSWG IE、OReillyMedia著者、元W3C職員。
* [Manoela Ilic](https://twitter.com/crnacura) - ...あだ名 Mary Lou @codrops ༶ CSS & HTML は私のクレヨンです ༶ 認知科学、AI、HCI、UIデザインおよび天体物理学に興味があります ༶ デジタルノマド
* [Mark Otto](https://twitter.com/mdo) - GitHubとBootstrap。かつてはTwitterで働いていた。大きなネルド。
* [Maxime Thirouin](https://twitter.com/MoOx) - フリーランスのフロントエンド・vigilante、UI/UX開発者。
* [Natalie Weizenbaum](https://twitter.com/nex3) - コーダーの女性。@SassCSSのリードデザイナー／開発者。@googleで@dart_langを担当
* [Nicolas Gallagher](https://twitter.com/necolas) - @twitter でのソフトウェアエンジニア
* [Nicole Sullivan](https://twitter.com/stubbornella) - GEEK.
* [Patrick Hamann](https://twitter.com/patrickhamann) - 山に恋する、手作りビールを愛し、新しい食べ物を発見する人
* [Paul Lewis](https://twitter.com/aerotwist) - グーグルでコードとデザインを楽しむ人物。
* [Phil Walton](https://twitter.com/philwalton) - グーグルでのエンジニア • オープンソース推進者 • 開発者 • デザイナー • 書き手。
* [Rachel Andrew](https://twitter.com/rachelandrew) - ウェブ開発者、@grabaperch CMSの半分、CSSワーキンググループの招待専門家。
* [Remy Sharp](https://twitter.com/rem) - CSSのサイズ単位について
* [Sara Soueidan](https://twitter.com/SaraSoueidan) - @Codrops CSS リファレンスの著者およびSmashing Book #5の共著者
* [Scott Jehl](https://twitter.com/scottjehl) - @responsiblerwdの著者。現在、@abookapartから販売中。
* [Simon](https://twitter.com/simurai) - UIデザイナー、CSSの遊び人。
* [The Chris Eppstein](https://twitter.com/chriseppstein) - 愛するものは愛し、嫌いなものは嫌い。素晴らしい家族を持つ。コードを書く。LinkedInでスタイルシート技術をリード。
* [Una Kravets](https://twitter.com/Una) - フロントエンド @IBMDesign。Sassvocate、コミュニティ構築者、そしてハンドクラフト。STEMinist :) オープンソース、すべてのもの。
* [Zoe M. Gillenwater](https://twitter.com/zomigi) - ウェブデザイナー／開発者。CSS、レスポンシブデザイン（RWD）、UX、およびアクセシビリティに特化。
* [Zoltán Szőgyényi](https://twitter.com/zoltanszogyenyi) - ウェブ開発者、Themesbergの共同創業者。Glass UIを構築中。
* [Tab Atkins](https://twitter.com/tabatkins) - CSSワーキンググループのメンバーで、ウェブ標準に携わる開発者。

<sub>[⇧ back to top](#contents)</sub>


<a id="videos-tv"></a>
## 動画 :tv:

CSS Must Watch Videosの良いスタディ動画。一部は[AllThingsSmitty/must-watch-css](https://github.com/AllThingsSmitty/must-watch-css)から引用されている。

[I told him on Twitter](https://twitter.com/sota0805/status/527635856031375360)。彼の貴重な努力に感謝しています。

### 2019

1. [Next-Generation Web Styling](https://www.youtube.com/watch?v=-oyeaIirVC0) - Una Kravets と Adam Argyle が Chrome Dev Summit 2019 で

### 2016

1. [Component-Based Style Reuse](https://www.youtube.com/watch?v=_70Yp8KPXH8) :page_facing_up: [transcript](https://2016.cssconf.com/) :watch: `37:24` - ペイト・ハント @ CSS conf 2016.
1. [CSS4 Grid: True Layout Finally Arrives](https://www.youtube.com/watch?v=jl164y-Vb5E) :page_facing_up: [transcript](https://2016.cssconf.com/) :watch: `29:27` - ジェン・クラマー @ CSS conf 2016.
1. [Houdini: Demystifying the Future of CSS](https://www.youtube.com/watch?v=sE3ttkP15f8) :watch: `36:58` @ Google I/O 2016.

### 2015

1. [Mdo-ular CSS](http://jqueryuk.com/2015/videos.php?s=mdo-ular-css) :watch: `30:06` - 株式会社jQuery UKのマーク・オットー
1. [CSS Architecture with SMACSS](https://www.youtube.com/watch?v=6co781JgoqQ) :watch: `30:15` - Caleb Meredith @ DevTipsチャンネル。
1. [CSS Workflow from the Ground Up](https://www.youtube.com/watch?v=ZVk3GQHfkbU) :watch: `46:06` - ジョンathan スノック @ Generate conf 2015.

<sub>[⇧ back to top](#contents)</sub>

<a id="books-books"></a>
## 書籍 :books:

* [CSS: The Definitive Guide, 4th Edition](http://shop.oreilly.com/product/0636920012726.do)  - ウェブ向けの視覚表示
* [CSS: The Missing Manual](http://shop.oreilly.com/product/0636920036357.do) – デザインスキルをまったく新しいレベルに引き上げるのに非常に役立ちます
* [CSS Secrets](http://shop.oreilly.com/product/0636920031123.do) – 日々のウェブデザイン問題に対するより良い解決策
* [Every Layout: Relearn CSS Layout](https://every-layout.dev/) – アルゴリズム設計を用いたレスポンシブレイアウトの問題解決
* [Tiny CSS Projects](https://www.manning.com/books/tiny-css-projects) – 12つの小さなプロジェクトを構築しながら、CSSを書く方法を向上させましょう。

<sub>[⇧ back to top](#contents)</sub>

<a id="tutorials-clapper"></a>
## チュートリアル :clapper:

* [30 Seconds of CSS](https://www.30secondsofcode.org/css/p/1) -  便利なCSSのサンプルを厳選したコレクション。30秒以内で理解できる。
* [All selectors in CSS](https://medium.com/@ymzEmre/css-cascade-specificity-basic-selectors-c5adc01dd861) - CSSにおけるすべてのセレクタ。
* [Community Curated CSS Resources](https://hackr.io/tutorials/learn-css) - トップ推奨リソース。
* [CSS Diner](https://flukeout.github.io/) – CSSの選択子学習に用いるインタラクティブなゲーム化チュートリアル
* [CSS Grid PlayGround](https://mozilladevelopers.github.io/playground/) - MozillaでCSS Gridを学ぶための簡単なチュートリアル。
* [CSS Grids videos tutorial](https://cssgrid.io/) - ウェス・ボスによる無料動画講座でCSSグリッドを学ぶ。
* [CSS Hands-on Tutorial](https://labex.io/tutorials/quick-start-with-css-free-tutorials-413795) - LabExによる無料CSS実践チュートリアル。
* [CSS Math Functions](https://stackdiary.com/css-math-functions/) - CSS Mathを用いたレスポンシブデザイン
* [Flexbox video tutorial](https://flexbox.io/) - ウェス・ボスによる無料動画講座でフィクスボックスを学ぶ。
* [Organize CSS with a Modular Architecture: OOCSS, BEM, SMACSS](https://snipcart.com/blog/organize-css-modular-architecture) - OOCSS、BEM、SMACSSについての詳細な紹介と例
* [Work With Animations](https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Work_with_animations) - アニメーションの確認

<sub>[⇧ back to top](#contents)</sub>

<a id="maintainers"></a>
## メンテナー

[sotayamashita]: https://github.com/sotayamashita
[Rishabh04-02]:  https://github.com/Rishabh04-02

[@sotayamashita][sotayamashita], [@Rishabh04-02][Rishabh04-02] そしてあなた！


<a id="contribute"></a>
## コントリビューション

[contributor-covenant]: https://www.contributor-covenant.org/version/1/3/0/code-of-conduct/

気軽に参加してください！イシューを開設またはPRを提出してください。

素晴らしいCSSは [Contributor Covenant][contributor-covenant] の行動規範を遵守しています。
