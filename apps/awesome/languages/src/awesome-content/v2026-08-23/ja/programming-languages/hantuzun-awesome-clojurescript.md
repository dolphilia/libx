---
title: "Awesome ClojureScript"
description: "ClojureScriptを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-hantuzun-awesome-clojurescript-readme-md"
---

# Awesome ClojureScript

ClojureScriptを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## リソース


### 書籍
- [ClojureScript Unraveled](https://leanpub.com/clojurescript-unraveled) – 言語機能全般、コンパイラーの使い方、アプリケーション・ライブラリ構築ツールを扱うClojureScriptのオープンソース書籍。
- [ClojureScript Unraveled (2nd edition)](https://funcool.github.io/clojurescript-unraveled/) – 言語機能全般、コンパイラーの使い方、アプリケーション・ライブラリ構築ツールを扱うClojureScriptのオープンソース書籍。
- [ClojureScript: Up and Running](https://shop.oreilly.com/product/0636920025139.do) – Clojureの第一人者であるStuart SierraとLuke VanderHartによるClojureScript入門。
- [Clojure, The Essential Reference](https://www.manning.com/books/clojure-the-essential-reference) – Clojure言語と標準ライブラリのリファレンス書。
- [Etudes for ClojureScript](https://shop.oreilly.com/product/0636920043584.do) – ClojureScriptを紹介する30の練習問題（エチュード）からなる実践書。
- [Learning ClojureScript](https://www.packtpub.com/web-development/learning-clojurescript) – ClojureScriptによるアジャイルなシングルページWebアプリケーション開発を習得する。
- [Transforming Data with ClojureScript](https://langintro.com/cljsbook) – 「プログラミングの主な仕事はデータ変換」という観点に焦点を当てた、対話例と演習付きClojureScript入門。



### コース
- [ClojureScript Koans](http://clojurescriptkoans.com/) – 対話的な課題を通じてWeb上でClojure・ClojureScriptを学び始める優れた方法。
- [Lambda Island](https://lambdaisland.com/) – ClojureScriptによるフロントエンド、Clojureによるバックエンド、言語基礎、セキュリティ、インターネット標準、システム管理を含むフルスタックWeb開発コース。
- [Learn Reagent](https://www.learnreagent.com/) – 開発者向けReagentを用いたClojureScript入門。1時間の無料コンテンツが利用可能で、続編は[learn re-frame](https://www.learnreframe.com/)。
- [Learning ClojureScript](https://purelyfunctional.tv/) – O'Really Online Learningによる2時間11分のClojureScript入門。[Udemy](https://www.udemy.com/course/learning-clojurescript/)でも利用可能。


### 動画
- [ClojureScript for Skeptics](https://www.youtube.com/watch?v=gsffg5xxFQI) – ClojureScriptがWeb開発で検討すべき非常に実用的な言語である多くの理由を論じる、Derek SlagerのClojure Conj 2015講演。
- [Interactive programming Flappy Bird in ClojureScript](https://www.youtube.com/watch?v=KZjFVdU8VLI) – ClojureScriptの開発者体験の力を示す、2014年の5分動画。


## Awesome ClojureScript


### Canvas
- [Monet](https://github.com/rm-hull/monet) – Canvasとビジュアルの扱いを容易にする小さなClojureScriptライブラリ。
- [Quamolit](https://github.com/Quamolit/quamolit) – Reactに着想を得た小規模な宣言型アニメーションライブラリ。


### クライアント／サーバー通信
- [cljs-ajax](https://github.com/JulianBirch/cljs-ajax) – ClojureScript・Clojure向けのシンプルなAjaxクライアント。
- [Fetch](https://github.com/LightTable/fetch) – クライアント／サーバー間の対話を容易にするClojureScriptライブラリ。


### コード解析
- [kibit](https://github.com/jonase/kibit) – よりイディオマティックな関数・マクロで書き換えられるコードパターンを見つける静的コード解析器。


### データシリアライゼーション
- [Cljson](https://github.com/tailrecursion/cljson) – 高速なブラウザデータ逆シリアル化のためのClojure/ClojureScriptライブラリ。
- [Transit](https://github.com/cognitect/transit-cljs) – 異なるプログラミング言語で書かれたアプリケーション間で値を伝達するデータ交換形式とライブラリ群。


### データ可視化
- [C2](https://keminglabs.com/c2) – データに基づくHTML・SVGマークアップを宣言的に作成できる。


### データベース
- [Datascript](https://github.com/tonsky/datascript) – ClojureScriptによる不変のインメモリデータベースおよびDatalogクエリーエンジン。
- [Jaki](https://github.com/pandeiro/jaki) – シンプルなClojureScript CouchDBクライアント。
- [Konserve](https://github.com/replikativ/konserve) – core.asyncを備えるClojure風のキー値／ドキュメントストアプロトコル。
- [specql](https://github.com/tatut/specql) – 名前空間付きキーで簡単なPostgreSQLクエリーを行うライブラリ。


### 開発
- [Ambly](https://github.com/omcljs/ambly) – iOS JavaScriptCore内のClojureScript REPL。
- [cljs-devtools](https://github.com/binaryage/cljs-devtools) – Chrome DevToolsでClojureScript値をより良く表示する。
- [Devcards](https://github.com/bhauman/devcards) – ClojureScript向けの視覚的REPL体験を提供する。
- [Instaparse](https://github.com/lbradstreet/instaparse-cljs) – ClojureScriptでパーサーを構築する最も簡単な方法を目指す。
- [lein-cljsbuild](https://github.com/emezeske/lein-cljsbuild) – ClojureScript開発を容易にするLeiningenプラグイン。
- [lein-figwheel](https://github.com/bhauman/lein-figwheel) – ClojureScriptコードの変更をクライアントへ送るLeiningenプラグイン。
- [Lumo](https://github.com/anmonteiro/lumo) – 高速、クロスプラットフォーム、スタンドアロンのClojureScript環境。
- [Planck](https://github.com/mfikes/planck) – JavaScriptCoreに基づくmacOS・Linux向けスタンドアロンClojureScript REPL。
- [Ribol](http://docs.caudate.me/ribol/) – Clojure/ClojureScript向けの条件付き再起動。
- [shadow-cljs](https://github.com/thheller/shadow-cljs) – ClojureScriptコンパイルを容易にする。
- [Truss](https://github.com/ptaoussanis/truss) – Clojure/ClojureScript向けの意見を持つアサーションAPI。


### ドキュメントオブジェクトモデル
- [cljs-binding](https://github.com/fluentsoftware/cljs-binding) – HTML要素をClojureScript関数へバインドする。
- [Crate](https://github.com/ibdknox/crate) – HiccupのClojureScript実装。
- [Dominator](https://github.com/dubiousdavid/dominator) – ClojureScriptによるVirtual DOM。
- [Dommy](https://github.com/plumatic/dommy) – 実直なClojureScriptテンプレーティング・DOM操作ライブラリ。
- [Enfocus](http://ckirkendall.github.io/enfocus-site/) – Enliveに着想を得たClojureScript向けDOM操作・テンプレーティングライブラリ。
- [Freactive](https://github.com/aaronc/freactive) – Reagent、Om、Reflex、Hiccupに着想を得た高性能・純粋ClojureScriptの宣言型DOMライブラリ。
- [Hiccups](https://github.com/teropa/hiccups) – HiccupのClojureScript移植版。
- [Hickory](https://github.com/davidsantiago/hickory) – HTMLをClojureデータ構造へ解析し、分析、変換、HTMLへの再出力を可能にする。
- [json-html](https://github.com/yogthos/json-html) – JSONを与えると、そのJSONを人が理解できる形で表すDOMノードを得る。
- [Kioo](https://github.com/ckirkendall/kioo) – ClojureScriptでFacebookのReact・Om向けに使うDOM操作・テンプレーティングライブラリ。
- [Respo](https://github.com/mvc-works/respo) – Reactに着想を得たレスポンシブDOMライブラリ。
- [Sablono](https://github.com/r0man/sablono) – ClojureScriptにおけるFacebook React向けLisp/Hiccupスタイルのテンプレーティング。


### ドキュメント
- [codox](https://github.com/weavejester/codox) – ClojureまたはClojureScriptのソースコードからAPIドキュメントを生成するツール。


### グラフィックス
- [geom](https://github.com/thi-ng/geom) – Clojure/ClojureScript向け2D/3Dジオメトリツールキット。
- [Quil](https://github.com/quil/quil) – Processingとグラフィックスプログラミングのライブラリ。


### HTTPハンドラー
- [Castra](https://github.com/hoplon/castra) – Clojure向けHTTPリモートプロシージャコールハンドラー。


### 国際化
- [Tempura](https://github.com/ptaoussanis/tempura) – Towerの後継となるClojure(Script) i18nライブラリ。
- [Tower](https://github.com/ptaoussanis/tower) – Clojure(Script)向けi18n・L10nライブラリ。


### JavaScript相互運用
- [CLJSJS](http://cljsjs.github.io/) – ClojureScript開発者がJavaScriptライブラリへ容易に依存できるようにする。
- [Jayq](https://github.com/ibdknox/jayq) – jQuery用ClojureScriptラッパー。
- [Purnam](https://github.com/zcaudate/purnam) – より良いClojureScript/JavaScript相互運用、テスト、ドキュメントツールを提供するClojureScriptライブラリ。
- [Pylon](https://github.com/bodil/pylon) – 100% ClojureScriptで書かれたJavaScriptクラスシステム。


### CSSツール
- [Garden](https://github.com/noprompt/garden) – Clojure・ClojureScriptでCSSをレンダリングするライブラリ。
- [stylefy](https://github.com/jarzka/stylefy) – CSSセレクターを書かずに、UIコンポーネントスタイルをClojureデータとして定義し、容易にコンポーネントへ付加できる。


### その他
- [Automat](https://github.com/ztellman/automat) – Ragelに着想を得た、有限状態オートマトンを定義・利用するClojure(Script)ライブラリ。
- [Bardo](https://github.com/pleasetrythisathome/bardo) – 関数型補間とトランジションのためのClojure(Script)ライブラリ。
- [core.async](https://github.com/clojure/core.async/) – 非同期プログラミングと通信の機能を提供するClojure(Script)ライブラリ。
- [Entanglement](https://github.com/Frozenlock/entanglement) – 他のatomからatomを作成し、データを結び付ける。
- [inflections-clj](https://github.com/r0man/inflections-clj) – Clojure・ClojureScript向けRails風活用ライブラリ。
- [Keybind](https://github.com/piranha/keybind) – ブラウザー内のキーバインド（ショートカット）を扱うライブラリ。
- [markdown-clj](https://github.com/yogthos/markdown-clj) – Clojure/ClojureScriptによるMarkdownパーサー。
- [namespacefy](https://github.com/Jarzka/namespacefy) – A simple Clojure(Script) library which aims to make it easy to keep map keys namespaced, no matter where your data comes from.
- [om-tools](https://github.com/plumatic/om-tools) – It aims to provide higher-order abstractions and utilities frequently useful when building components with Om's API.
- [reforms](https://github.com/bilus/reforms) – Beautiful Bootstrap 3 forms for Om and Reagent.
- [reagent-forms](https://github.com/reagent-project/reagent-forms/) – Bootstrap form components for Reagent.
- [Sepal.clj](https://github.com/Cirru/sepal.clj) – A library to generate Clojure code from a vector of strings and vectors with macro system.

### [React.js](https://facebook.github.io/react/) Interface
- [Brutha](https://github.com/weavejester/brutha) – シンプルで関数型のReact向けClojureScriptインターフェース。
- [cljsx](https://github.com/peterhudec/cljsx) – Clojure・ClojureScript向け[JSX](https://reactjs.org/docs/introducing-jsx.html)。[Inferno](https://infernojs.org)、[Nerv](https://nerv.aotu.io/)、[Preact](https://preactjs.com/)、[Snabbdome](https://github.com/snabbdom/snabbdom)などでも動作する。
- [Helix](https://github.com/lilactown/helix) – React上にほとんど意味論を追加せず、ClojureScriptでのReact開発を簡単にするライブラリ。 
- [hx](https://github.com/Lokeh/hx) – ClojureScriptでのReact開発向けの、もう一つのシンプルで使いやすいライブラリ。 
- [Om](https://github.com/omcljs/om) – オブジェクト指向構造を活用する強力なReactインターフェース。
- [Quiescent](https://github.com/levand/quiescent) – 完全にステートレスな関数型スタイルを重視する。
- [re-com](https://github.com/Day8/re-com) – Reagent向け再利用可能コンポーネントのClojureScriptライブラリ。
- [Reagent](http://reagent-project.github.io/) – ミニマルで機能が充実している。
- [Rum](https://github.com/tonsky/rum) – 複雑さを解いた、拡張可能でシンプルなライブラリ。


### リアクティブプログラミング
- [Javelin](https://github.com/hoplon/javelin) – ClojureScript向け関数型リアクティブプログラミングライブラリ。
- [Manifold-cljs](https://github.com/dm3/manifold-cljs) – [Manifold](https://github.com/ztellman/manifold)のClojureScript移植版。
- [Reagi](https://github.com/weavejester/reagi) – core.async上に構築されたClojure・ClojureScript向けFRPライブラリ。
- [rx-cljs](https://github.com/leonardoborges/rx-cljs) – JavaScript向けReactive Extensions（Rx）のClojureScriptラッパー。
- [Yolk](https://github.com/Cicayda/yolk) – bacon.jsを包む薄いClojureScriptラッパー。


### ルーティング
- [Bidi](https://github.com/juxt/bidi) – Clojure(script)のデータ駆動ルーティングライブラリ。
- [Router](https://github.com/darkleaf/router) – REST指向のClojure/Script向け双方向Ringルーター。
- [Secretary](https://github.com/gf3/secretary) – ClojureScript向けクライアントサイドルーター。
- [Silk](https://github.com/DomKM/silk) – Clojure・ClojureScript向けアイソモーフィックルーティングライブラリ。


### 状態管理
- [component](https://github.com/stuartsierra/component) – Clojure(Script)における状態を持つオブジェクトのライフサイクルを管理する。
- [hodgepodge](http://funcool.github.io/hodgepodge/) – HTML5 Storage向けのイディオマティックなClojureScriptインターフェース。
- [mount](https://github.com/tolitius/mount) – 美しくイディオマティックな状態管理ライブラリ。
- [plato](https://github.com/eneroth/plato) – ClojureScriptでatomの状態を段階的にLocal Storageへ永続化する。
- [storage-atom](https://github.com/alandipert/storage-atom) – HTML5 Web StorageをバックエンドとするClojureScript atom。
- [Tuck](https://github.com/tatut/tuck) – ビューコードとイベント処理コードを明確に分離したReagentアプリを構築するマイクロフレームワーク。 
- [Waltz](https://github.com/ibdknox/waltz) – 非決定性有限状態機械を使うクライアントサイドアプリケーションの状態管理を支援するClojureScriptライブラリ。


### Testing
- [cljs.test](https://github.com/clojure/clojurescript/wiki/Testing) – ClojureScript統合テストフレームワーク（[clojurescript.test](https://github.com/cemerick/clojurescript.test)から統合）。
- [Expectations](http://jayfields.com/expectations/) – ミニマリスト向けユニットテストフレームワーク。
- [Speclj](https://github.com/slagyr/speclj) – Clojure・ClojureScript向けTDD/BDDフレームワーク。
- [test.check](https://github.com/clojure/test.check) – QuickCheckに着想を得た生成的プロパティベーステストツール。


### Validation
- [Bouncer](https://github.com/leonardoborges/bouncer) – Clojure・ClojureScriptアプリケーション向け検証DSL。
- [form-validator-cljs](https://github.com/kwladyka/form-validator-cljs) – specとfnでフォームを検証する。
- [Validateur](http://clojurevalidations.info/) – RubyのActiveModelに着想を得たClojure検証ライブラリ。


### Web Framework & Template
- [atw-om](https://github.com/zaiste/atw-om) – Clojure/Compojure、ClojureScript/Om、core.asyncを備えるWebアプリケーションテンプレート。
- [Chestnut](https://github.com/plexus/chestnut) – ライブリロードを備えるClojureScript/Om向けアプリケーションテンプレート。
- [Clops](https://github.com/sveri/closp) – 意見を持つ、フルスタックで使いやすいWebフレームワーク。
- [descjop](https://github.com/karad/lein_template_descjop) – Electronを使うWebベースデスクトップアプリケーションのテンプレート。
- [electron-template](https://github.com/ducky427/electron-template) – Electron、ClojureScript、ReagentでWebベースデスクトップアプリケーションを作るテンプレート。
- [Fulcro](http://fulcrologic.github.io/fulcro) – clj/cljsによるシングルページ・フルスタックWebアプリ開発ライブラリ。
- [Hoplon](http://hoplon.io) – クライアント・サーバーのすべてをClojure・ClojureScriptで書く。
- [Keechma](http://keechma.com) – ClojureScript・Reagent向けマイクロフロントエンドフレームワーク。
- [Luminus](http://www.luminusweb.net/) – 堅牢でスケーラブル、使いやすいプラットフォームを目指す。
- [Macchiato](https://github.com/macchiato-framework/macchiato-core) – Node.js向けの使いやすいプラットフォームを目指す。
- [Mies](https://github.com/swannodette/mies) – ミニマルなClojureScriptプロジェクトテンプレート。
- [Mr-Clean](https://bitbucket.org/sonwh98/mr-clean) – react.js依存なしのReagent互換ライブラリ。
- [Precept](https://github.com/CoNarrative/precept) – 宣言型プログラミングフレームワーク。
- [re-frame](https://github.com/Day8/re-frame) – ClojureScriptでSPAを書くためのReagentフレームワーク。
- [Tenzing](http://martinklepsch.github.io/tenzing/) – Bootを使う、バックエンドなしのClojureScriptテンプレート。
- [WebFUI](https://github.com/drcode/webfui) – ClojureScript向けクライアントサイドWebフレームワーク。


### WebSockets
- [Chord](https://github.com/jarohen/chord) – CLJ/CLJS、WebSocket、core.asyncの三者間の隔たりを埋めるよう設計された。
- [Sente](https://github.com/ptaoussanis/sente) – Clojure(Script) + core.async + WebSocket/Ajax。


* * *


## コントリビュート
すべてのコントリビューションを歓迎します。プルリクエストを開く前に[Contributing](https://github.com/hantuzun/awesome-clojurescript/blob/7a0d49986a459d14065c7681903514fca58de221/CONTRIBUTING.md)を読んでください。要約すると、箇条書きには`-`、リンクと説明の区切りには`–`を使い、リストはアルファベット順に並べます。


## ライセンス
[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

[Han Tuzun](http://hantuzun.com) has dedicated the work to the public domain by waiving all of his rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.

You can copy, modify, distribute and perform the work, even for commercial purposes, all without asking permission.
