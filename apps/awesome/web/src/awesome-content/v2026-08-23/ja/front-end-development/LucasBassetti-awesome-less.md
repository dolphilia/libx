---
title: "Awesome Less"
description: "Lessのフレームワークとミックスイン、コンパイラーの移植版、エディター連携、オンラインツール、学習資料。"
licenseSource: "github-LucasBassetti-awesome-less-readme-md"
---

# Awesome Less

Lessは、変数、ネスト、ミックスイン、演算子、関数でCSSを拡張するスタイルシート言語です。UIフレームワーク、再利用できるスタイル、コンパイラーの移植版、エディター連携、オンラインの実行環境、各言語の文書や学習資料を探せます。

## <a id="about"></a>概要

LessはCSS（Cascading Style Sheets）にコンパイルでき、クライアント側またはサーバー側で実行できるオープンソースの動的スタイルシート言語です。固定原文の概要では、Alexis Sellierが設計したLessはSassの影響を受け、SassのCSSに似たSCSSのブロック構文にも影響を与えたと説明されています。Lessは変数、ネスト、ミックスイン、演算子、関数を提供します。原文は、ほかのCSSプリコンパイラーとの主な違いをブラウザー内でのリアルタイムコンパイルとしています。出典：[Wikipedia](https://en.wikipedia.org/wiki/Less_(stylesheet_language))

## <a id="getting-started"></a>開始方法

- [初心者向けガイド](http://www.hongkiat.com/blog/less-basic/)
- [Less 入門](https://scotch.io/tutorials/getting-started-with-less)
- [10 分で学ぶ](http://tutorialzine.com/2015/07/learn-less-in-10-minutes-or-less/)
- [公式ガイド](http://lesscss.org/)
- [公式リポジトリ](https://github.com/less/less.js)

## <a id="uitheme-frameworks-and-components"></a>UI・テーマフレームワークとコンポーネント

- [1pxdeep](http://rriepe.github.io/1pxdeep/) - 相対的な視覚的重みやカラースキームに基づくデザインをBootstrapに導入。
- [Ant Design](https://github.com/ant-design/ant-design/) - 企業向けUIデザイン言語とReactベースの実装。
- [Bootstrap a11y theme](https://github.com/bassjobsen/bootstrap-a11y-theme) - Bootstrap開発者のウェブアクセシビリティ対応を支援。
- [Bootstrap 3](http://getbootstrap.com/) - レスポンシブでモバイルファーストなウェブプロジェクト向けのHTML、CSS、JSフレームワーク。
- [Bootswatch](http://bootswatch.com/) - Bootstrap向けの無料テーマ集。
- [Cardinal](http://cardinalcss.com/) - レスポンシブウェブアプリケーションを作るフロントエンド開発者向けの小型CSSフレームワーク。モバイルファースト。
- [CSSHórus](https://github.com/firminoweb/csshorus) - レスポンシブなモバイルウェブサイト向けの開発ライブラリ。
- [Flat UI Free](http://designmodo.github.io/Flat-UI/) - Bootstrap向けのテーマとフレームワーク。
- [JBST](http://jbst.eu/) - 単独のウェブサイトビルダーとしても、WordPressテーマの作成にも使えるテーマフレームワーク。
- [Less Rails](https://github.com/metaskills/less-rails) - Rails向けLess。
- [Material Design for Bootstrap](https://github.com/FezVrasta/bootstrap-material-design) - GoogleのMaterial DesignガイドラインをBootstrap 3アプリケーションで使うための、Bootstrap V3互換テーマ。
- [Metro UI CSS](http://metroui.org.ua/) - Windows 8に似たインターフェースのサイトを作るスタイル集。
- [Schema](http://danmalarkey.github.io/schema/) - 軽量でレスポンシブなフロントエンドUIフレームワーク。
- [Semantic UI](http://semantic-ui.com/) - 自然言語の原則に基づくUIコンポーネントフレームワーク。
- [UIkit](https://getuikit.com/) - ウェブインターフェース開発向けの軽量でモジュール化されたフロントエンドフレームワーク。
- [Wee](https://www.weepower.com/) - 複雑でレスポンシブなウェブプロジェクトを論理的に構築する軽量フロントエンドフレームワーク。

## <a id="libraries-and-mixins"></a><a id="ライブラリと-mixins"></a>ライブラリとミックスイン

### <a id="grid"></a>グリッド

- [Bootstrap Grid Only](https://github.com/zirafa/bootstrap-grid-only) - 追加機能を含まないBootstrapのレスポンシブグリッドとユーティリティクラス。軽量でカスタマイズ可能。
- [Framework](https://github.com/jonikorpi/Less-Framework) - 適応型ウェブサイト向けのCSSグリッドシステム。単一のグリッドに基づく4種類のレイアウトと3組のタイポグラフィプリセット。
- [Flexible Grid System](http://flexible.gs/) - 柔軟なグリッドでウェブアプリケーションを構築するフレームワーク。
- [Fluidable](http://fluidable.com/) - 単独で使える軽量なレスポンシブグリッドシステム。Lessで構築され、モバイルファースト。
- [Grid System](https://github.com/goodpixels/less-grid-system) - マークアップに依存しないグリッドシステム。
- [Less Zen Grid](https://github.com/bassjobsen/LESS-Zen-Grid) - Lessによる[Zen Grids](https://github.com/JohnAlbin/zen-grids)の実装。
- [Order.Less](https://github.com/chromice/order.less) - ベースラインの整列、列グリッド、モジュラースケール。

### <a id="media-queries"></a>メディアクエリ

- [CSS and Media Query Strategies](https://github.com/buymeasoda/less-media-queries) - Less CSSで、モダンブラウザーと旧式ブラウザーの両方に対応するメディアクエリ駆動の仕組みを開発。
- [Media Queries Library](https://github.com/mrmlnc/less-mq) - Lessによるシンプルなメディアクエリ。
- [Media Query to Type](https://github.com/himedlooff/media-query-to-type) - メディアクエリの内容をInternet Explorer 8以下でも利用できるようにする、IE専用スタイルシートの作成方法。

### <a id="color"></a>色

- [Brand Colors](http://brand-colors.com/) - Sass、Less、Stylus、CSSで使えるブランドカラー集。原文では1,100種類以上と記載。
- [More-Colors](http://jasonrobb.github.io/More-Colors.less/) - ブラウザー上でデザインする際の色操作を容易にする変数。
- [Open Color](https://github.com/yeun/open-color) - UIデザイン向けカラースキーム。CSS、SCSS、Less、Stylus、Adobeライブラリ、Photoshop/Illustratorスウォッチ、Sketchパレットで利用可能。

### <a id="animation"></a>アニメーション

- [Animate](https://github.com/joshuapekera/animate) - Lessで作成されたCSS3キーフレームアニメーションライブラリ。
- [Animate Less](https://github.com/machito/animate.less) - Dan Edenの[Animate.css](https://daneden.github.io/animate.css/)をLessへ移植。
- [Cube Less](https://github.com/sparanoid/cube.less) - CSS（Less）のみを使う3Dアニメーションキューブ。元はLeanCloud（別名AVOS Cloud）で使用。
- [Hover](http://ianlunn.github.io/Hover/) - リンク、ボタン、ロゴ、SVG、注目画像などに適用するCSS3ホバーアニメーション効果集。
- [Less Burguer](https://github.com/MarkRabey/less-burger) - [Sass Burger](http://joren.co/sass-burger/)をLessへ移植。

### <a id="miscellaneous"></a>その他

- [3L](http://mateuszkocz.github.io/3l/) - ミックスインライブラリ。
- [Bidi](https://github.com/danielkatz/less-bidi) - 双方向のスタイルを作るミックスイン集。
- [Clearless](http://clearleft.github.io/clearless/) - ミックスイン集。
- [Css3LessPlease](http://chrsr.com/css3lessplease/) - css3please.comをLessのミックスインへ変換。
- [CssEffects](http://adodson.com/css-effects/) - CSSスタイル効果集。
- [Cssowl](http://cssowl.owl-stars.com/) - ミックスインライブラリ。
- [Dynamic Stylesheet](https://github.com/mrkrupski/LESS-Dynamic-Stylesheet) - 便利なミックスイン集。
- [Est](https://github.com/ecomfe/est/) - ミックスインライブラリ。
- [Hexagon](http://db0company.github.io/css-hexagon/) - サイズと色を指定したCSSの六角形を生成。
- [Homeless](https://github.com/pixelass/homeless) - 便利な関数集。
- [Less Elements](http://lesselements.com/) - 基本的なミックスイン集。
- [Lesshat](https://github.com/madebysource/lesshat) - ミックスインライブラリ。
- [Lessley](https://github.com/pixelass/lessley) - Lessのみで書かれたJasmine風のテストスイート。
- [Lessmore](https://github.com/belyan/lessmore) - CSS3機能などのクロスブラウザー対応を提供するミックスインライブラリ。
- [Normalize](https://github.com/segundofdez/normalize.less) - [normalize.css](https://github.com/necolas/normalize.css/)をLessでモジュール化。
- [Oban](http://oban.io/) - ミックスイン集。
- [Preboot](https://github.com/mdo/preboot) - CSSをよりよく記述するためのミックスインと変数のコレクション。
- [Retina.js](https://github.com/imulus/retinajs) - 高解像度の画像バリエーションを描画するためのJavaScript、SCSS、Sass、Less、Stylusのヘルパー。
- [Shape](https://github.com/fahad19/shape.less) - さまざまな形状を作るミックスイン集。
- [TRRtoolbelt](https://github.com/therebelrobot/tRRtoolbelt.less) - よく使う処理のためのミックスインと関数。

## <a id="style-guides"></a>スタイルガイド

- [Handshake Style Guide](https://github.com/handshake/less-style-guide) - ベストプラクティスとコーディング規約をまとめたガイド。
- [WebMD Health Services Style Guide](https://github.com/bitmap/less-styleguide) - WebMD Health ServicesのCSS/Lessのベストプラクティスを説明する文書。

## <a id="ports-of-less"></a>Less の移植版

### Java

- [JLessC](https://github.com/i-net-software/jlessc) - Javaのみで書かれたLessコンパイラー。
- [Less Engine](https://github.com/Asual/lesscss-engine) - JVM上のJavaScriptインタープリターRhinoでLessを実行。
- [Less CSS Compiler for Java](https://github.com/marceloverdijk/lesscss-java) - JVM上のJavaScriptインタープリターRhinoでLessを実行。
- [Less4j](https://github.com/SomMeri/less4j) - Javaによるネイティブ実装。
- [Lesscss](https://github.com/houbie/lesscss) - Rhino、Nashorn、Node.jsのエンジンでLessを実行。1.7.0準拠。
- [Lesscss Gradle Plugin](https://github.com/houbie/lesscss-gradle-plugin) - LessベースのGradleプラグイン。

### .Net

- [BundleTransformer.Less](http://www.nuget.org/packages/BundleTransformer.Less/) - .NETで書かれたコンパイラー。
- [Less CSS for .Net](http://www.dotlesscss.org/) - .NETで書かれたコンパイラー。

### PHP

- [ILess](https://github.com/mishal/iless) - 原文では「JavaScriptで書かれたPHP移植版」と記載。オンラインコンパイラーの節ではPHPコンパイラーとして紹介。
- [Lessphp](http://leafo.net/lessphp/) - PHPで書かれたコンパイラー。
- [Less.php](http://lessphp.gpeasy.com/) - PHP移植版。

### Python

- [Python Compiler](https://github.com/lesscpy/lesscpy) - Pythonで書かれたコンパイラー。

### Ruby

- [Ruby Compiler](https://github.com/cowboyd/less.rb) - RubyのV8エンジンで動作するLess。

### Go

- [Go Compiler](https://github.com/kib357/less-go) - 組み込みJavaScriptエンジン内でLessを実行。

## <a id="guis-editors-and-plugins"></a>GUI、エディター、プラグイン

- [Atom Linter](https://github.com/josa42/atom-linter-less) - Atomテキストエディター向けのリンタープラグイン。
- [CSS 2 Convert](http://css2less.co/) - コピーと貼り付けでCSSをLessに自動変換。
- [CSS Less(ish)](https://github.com/kizza/CSS-Less-ish) - LessなどのCSSプリプロセッサーの機能を簡略化して実装するSublime Text 2・3プラグイン。
- [Crunch 2!](http://getcrunch.co/) - コンパイル機能を備えたWindows、Mac、Linux対応のエディター。原文では、Lessファイルには無料版で十分と記載。
- [Diamond](https://diamond.js.org) - Sass、Less、CSS向けの依存関係管理。
- [Eclipse Less Plugin](http://www.normalesup.org/~simonet/soft/ow/eclipse-less.html) - Lessスタイルシートの編集・コンパイル機能をEclipse IDEに追加。
- [Eclipse Transpiler Plugin](https://github.com/gossi/eclipse-transpiler-plugin) - Less、SASS、CoffeeScriptなどのファイルを自動変換するEclipseプラグイン。
- [Emacs](https://github.com/purcell/less-css-mode) - 保存時のコンパイルに対応するEmacsモード。
- [Grunt Contrib](https://github.com/gruntjs/grunt-contrib-less) - GruntでLessファイルをCSSへコンパイル。
- [Grunt Lint](https://github.com/jgable/grunt-lesslint) - GruntからCSS Lintを使ってLessファイルを検査。
- [Gulp Less](https://github.com/plus3network/gulp-less) - Gulp向けプラグイン。
- [Hayaky](https://github.com/hayaku/hayaku) - フロントエンドのウェブ開発を迅速に進めるためのスクリプト集。
- [Hyra Helper](https://github.com/Hyra/less) - PHPのみでLessファイルをCSSへ変換するCakePHPプラグイン。
- [Koala](http://koala-app.com/) - Less、Sass、CoffeeScriptをコンパイルするクロスプラットフォームのGUIアプリケーション。
- [Less for Notepad++](https://github.com/azrafe7/LESS-for-Notepad-plusplus) - Notepad++向け構文ハイライト。
- [Less Sublime](https://github.com/danro/Less-sublime) - Sublime Text向け構文ハイライト。
- [Lesshint](https://github.com/lesshint/lesshint) - Lessの記述を読みやすく、一貫したものにする支援ツール。
- [LiveReload](http://livereload.com/) - CSSの編集や画像の変更を即時反映。CoffeeScript、SASS、Lessなどにも対応。
- [SimpleLess](https://wearekiss.com/simpless) - ファイルをドラッグしてコンパイルできる、機能を絞ったLessコンパイラー。
- [Sublime Less2CSS](https://github.com/timdouglas/sublime-less2css) - 保存時にLessファイルをCSSへコンパイルするSublime Text 2プラグイン。
- [SublimeOnSaveBuild](https://github.com/alexnj/SublimeOnSaveBuild) - Sublime Text 2でファイルを保存するとビルドを実行。Less、Compass、ほかのプリプロセッサー、makefileを使うウェブプロジェクト向け。
- [Vim Less](https://github.com/groenewege/vim-less) - 構文ハイライト、インデント、自動補完を追加するVimバンドル。
- [Visual Studio Web Essentials](http://vswebessentials.com/) - CSS、HTML、JavaScript、TypeScript、CoffeeScript、Less向けの開発支援機能。
- [Winless](http://lesscss.org/usage/#editors-and-plugins) - 元はLess.appのクローン。より充実した機能と複数の設定を備え、コマンドライン引数による起動にも対応。

## <a id="online-less-compilers"></a>オンライン Less コンパイラー

- [BeautifyTools Less Compiler](http://beautifytools.com/less-compiler.php) - [BeautifyTools](http://beautifytools.com/)のオンラインLessコンパイラー。任意で整形・圧縮が可能。
- [EstFiddle](http://ecomfe.github.io/est/fiddle/) - Lessとestのライブデモを提供するオンラインLessコンパイラー。原文では、1.4.0より後のすべてのLessバージョンを切り替えられ、任意でest/Autoprefixerの機能を利用可能と記載。
- [ILess](http://demo-iless.rhcloud.com/) - [ILess](https://github.com/mishal/iless) PHPコンパイラーのライブデモ。
- [Leafo](http://leafo.net/lessphp/editor.html) - [Lessphp](http://leafo.net/lessphp/)のライブデモ。
- [Less2CSS](http://less2css.org/) - ブラウザー上でLessをリアルタイムに編集し、CSSへコンパイルするオンライン統合開発環境（IDE）。
- [LessPHP](http://lessphp.gpeasy.com/demo) - [Less.php](http://lessphp.gpeasy.com/)のライブデモ。
- [Lesstester](http://lesstester.com/) - Less CSS向けオンラインコンパイラー。
- [Precess](http://precess.co/) - リアルタイムのプリプロセッサーコンパイラー。
- [Winless](http://winless.org/online-less-compiler) - 例を学び、自分のLessコードを試すオンラインLessコンパイラー。

## <a id="online-web-idesplaygrounds-with-less-support"></a>Less をサポートするオンライン Web IDE・プレイグラウンド

- [CodePen](http://codepen.io/) - ウェブのフロントエンド向けプレイグラウンド。
- [CSSDeck Labs](http://cssdeck.com/labs) - HTML、CSS、JSを使う実験やテストケースをすばやく作成。
- [Fiddle Salad](http://fiddlesalad.com/less/) - すぐにコードを書き始められるオンラインプレイグラウンド。
- [JS Bin](http://jsbin.com/) - JavaScriptとCSSのコードスニペットを試すウェブアプリケーション。
- [JsFiddle](http://jsfiddle.net/hb2rsm2x/) - オンラインウェブエディター。

## <a id="translations"></a>翻訳

- [中国語 (中文)](http://lesscss.cn/)
- [デンマーク語](http://lesscss.dk/)
- [ドイツ語](http://www.lesscss.de)
- [インドネシア語](http://bertzzie.com/post/7/dokumentasi-less-bahasa-indonesia)
- [イラン向け](http://less-css.ir)
- [日本語](http://less-ja.studiomohawk.com/)
- [ポーランド語](http://ciembor.github.com/lesscss.org/)
- [スペイン語](http://amatellanes.github.io/lesscss.org/)
- [ベトナム語](http://less.eten.vn/)

## <a id="articles"></a>記事

- [An Introduction To Less, And Comparison To Sass](https://www.smashingmagazine.com/2011/09/an-introduction-to-less-and-comparison-to-sass/)
- [Best Less Tutorials : A Comprehensive Guide to Less](http://www.cssauthor.com/less-tutorials/)
- [Doing MORE with Less](https://medium.com/social-tables-tech/doing-more-with-less-256054d19f7d#.a41deg3dx)
- [How to Make a Loops in Less CSS](https://medium.com/@omererkan/how-to-make-a-loops-in-less-css-d74062debef1#.snv6jqw5x)
- [Lets use Less to Create Less CSS not just CSS](https://medium.com/@zamamohammed/lets-use-lessjs-to-create-less-css-not-just-css-2d45d92a62e8#.jsocohrne)
- [Revisiting Less](https://medium.com/@ddprrt/revisiting-less-50b741bd884#.oyion811m)

## <a id="books"></a>書籍

- [Instant Less CSS Preprocessor How-to](https://www.packtpub.com/web-development/instant-less-css-preprocessor-how-instant)
- [Less Web Development Essentials](http://pdf.th7.cn/down/files/1508/Less%20Web%20Development%20Essentials,%202nd%20Edition.pdf)
- [Learning Less](https://www.packtpub.com/web-development/learning-lessjs)

## <a id="videos"></a>動画

- [Learning Less](https://www.packtpub.com/web-development/learning-less-video)
- [Less（CSS プリプロセッサー）チュートリアル](https://www.youtube.com/watch?v=oh7_iZWvIyU&list=PLE42615v2IxlxVyGZd0rKnOzbqUtUiekE)
- [初心者向け Less CSS チュートリアル](https://www.youtube.com/watch?v=YQYJUeokqOY&list=PL6gx4Cwl9DGCshbAx1JpBtNoKh8iKAAiy)
- [Less CSS — 初心者向けチュートリアル](https://www.youtube.com/watch?v=-D5mWO9_vLI&list=PLLa1ZAmCB2zjEZ4QNLDi4173_xIGeV6nC)

## <a id="experiments"></a>実験

- [3D ボタン](https://codepen.io/MamayAlexander/pen/aAsiq)
- [角丸のミックスイン](https://codepen.io/eky/pen/dCmnp)
- [CSS3 カラーホイール](https://codepen.io/bitmap/pen/eBbHt)
- [デモ: 変数](https://codepen.io/ericrasch/pen/uGlvA)
- [簡単なボタン](https://codepen.io/octavioamu/pen/zJexw)
- [線形グラデーションのミックスイン](https://codepen.io/eky/pen/eAnCI)
- [ナビゲーションバー](https://codepen.io/lukasdietrich/pen/mkeAJ)
- [レスポンシブグリッド](https://codepen.io/mecarter/pen/idKqg)
- [サイズ変更可能な CSS のみのアイコン](https://codepen.io/ericrasch/pen/rndaF)
- [三角形・矢印のミックスイン](https://codepen.io/eky/pen/AaCwF)
- [その他のLess作例](https://codepen.io/tag/less/)

## <a id="community"></a>コミュニティ

- [Less への貢献](https://github.com/less/less.js/blob/master/CONTRIBUTING.md)
- [Freenode](http://webchat.freenode.net/?randomnick=1&channels=%23%23lesscss)
- [Medium](https://medium.com/search?q=less%20css)
- [Quora](https://www.quora.com/topic/LESS-stylesheet-language)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/less)
- [Twitter](https://twitter.com/hashtag/lesscss)
