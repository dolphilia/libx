---
title: "Awesome purescript"
description: "purescriptを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-passy-awesome-purescript-readme-md"
---

# Awesome purescript

purescriptを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## ビルドツール

- [pulp](https://github.com/bodil/pulp)
- [psvm-js](https://github.com/ThomasCrvsr/psvm-js) - PureScript バージョンマネージャーです。
- [purescript-psa](https://github.com/natefaubion/purescript-psa) - `psc` 向けの美しく柔軟なエラー・警告レポート用フロントエンドです。
- [grunt-purescript](https://github.com/purescript-contrib/grunt-purescript)
- [gulp-purescript](https://github.com/purescript-contrib/gulp-purescript)
- [purs-loader](https://github.com/ethul/purs-loader) Webpack 用です。
- [psc-package](https://github.com/purescript/psc-package) - Package Set に基づく PureScript 用パッケージマネージャーです。
- [spago](https://github.com/spacchetti/spago) - Dhall と Package Set を利用する PureScript パッケージマネージャー兼ビルドツールです。

## Prelude

- [purescript-prelude](https://github.com/purescript/purescript-prelude) - 標準 Prelude です。
- [purescript-batteries](https://github.com/tfausak/purescript-batteries) - より多くの機能を備えた PureScript Prelude です。

## UI ライブラリ

CSS：

- [purescript-css](https://github.com/slamdata/purescript-css) - CSS を記述、操作、レンダリングするための簡潔で型安全なライブラリです。

React ベース：

- [purescript-thermite](https://github.com/paf31/purescript-thermite) - `react-blaze` に着想を得た ReactJS 用のシンプルなラッパーです。
- [purescript-react](https://github.com/purescript-contrib/purescript-react) - PureScript 用 React バインディングです。
- [purescript-react-basic](https://github.com/lumihq/purescript-react-basic) - 最も基本的なユースケースに最適化した、方針の明確な React ライブラリ用バインディングです。
- [purescript-react-basic-hooks](https://github.com/spicydonuts/purescript-react-basic-hooks) - React の「Hooks」API を使って React Component を定義する別の方法です。`purescript-react-basic` と互換性があります。
- [purescript-pux](https://github.com/alexmingoia/purescript-pux) - PureScript で型安全な Web アプリを構築します。
- [purescript-spork](https://github.com/natefaubion/purescript-spork) - PureScript 向けの Elm 風ライブラリです。
- [purescript-concur](https://github.com/ajnsit/purescript-concur) - Concur UI フレームワークです。React バックエンドのほか、別のバックエンドも使用できます。
- [purescript-presto](https://github.com/juspay/purescript-presto) - 数式のようにアプリを書けます！
- [purescript-optic-ui](https://github.com/zrho/purescript-optic-ui) - Lens と Traversal を利用し、シングルページ Web UI を宣言的かつ簡潔に記述します。
- [purescript-react-explor](https://github.com/paf31/purescript-react-explore) - React UI をモデル化するための Comonad の実験です。

Virtual DOM ベース：

- [purescript-halogen](https://github.com/slamdata/purescript-halogen) - 宣言的で型安全な UI ライブラリです。
- [purescript-hedwig](https://github.com/utkarshkukreti/purescript-hedwig) - Web アプリケーションを構築するための高速で型安全、宣言的な PureScript ライブラリです。
- [purescript-flame](https://github.com/easafe/purescript-flame) - purescript-hedwig と Elm に着想を得た、PureScript で Web アプリケーションを構築する高速でシンプルなフレームワークです。

Signal／Behavior／FRP：

- [purescript-flare](https://github.com/sharkdp/purescript-flare) - purescript-signal 上に構築された Applicative スタイルのリアクティブ UI です。
- [purescript-turbine](https://github.com/funkia/purescript-turbine) - FRP を利用する純粋関数型フロントエンドフレームワークです。
- [purescript-outwatch](https://github.com/OutWatch/purescript-outwatch) - Rx と VirtualDom に基づく関数型リアクティブ UI フレームワークです。
- [purescript-panda](https://github.com/i-am-tom/purescript-panda) - VDOM がなければ TEA はどのようになるでしょうか？
- [purescript-specular](https://github.com/restaumatic/purescript-specular) - Reflex-Dom に着想を得た PureScript 用 UI ライブラリです。
- [purescript-sdom](https://github.com/paf31/purescript-sdom) - Virtual DOM を置き換え、差分計算を避ける実験です。
- [purescript-purview](https://github.com/paf31/purescript-purview) - Incremental Lambda Calculus に基づく UI ライブラリです。

## URL ルーター

- [purescript-routing](https://github.com/slamdata/purescript-routing) - PureScript 用の簡潔で型安全なルーティングライブラリです。
- [purescript-cofree-react-router](https://github.com/coot/purescript-cofree-react-router) - Array Functor の Cofree Comonad として PureScript で実装した React Router です。
- [purescript-trout](https://github.com/owickstrom/purescript-trout) - PureScript の型レベルルーティングです。
- [purescript-boomboom](https://github.com/paluh/purescript-boomboom) - URL を二度とハードコードしません。すべて Boomboom に任せましょう！
- [purescript-routing-duplex](https://github.com/natefaubion/purescript-routing-duplex) - ルーティング用データ型のシンプルな双方向 Parser／Printer です。

## コンポーネント

- [purescript-halogen-formless](https://github.com/thomashoneyman/purescript-halogen-formless) - Halogen で扱いやすいフォームを構築する Renderless Component です。
- [purescript-halogen-select](https://github.com/citizennet/purescript-halogen-select) - ドロップダウン、Typeahead、画像選択、カレンダーなど、一般的な選択 UI の構成要素です。
- [purescript-halogen-echarts](https://github.com/slamdata/purescript-halogen-echarts) - 人気チャートライブラリ ECharts の Halogen 統合です。
- [purescript-halogen-day-picker](https://github.com/rnons/purescript-halogen-day-picker) - Halogen 用の日付選択です。
- [purescript-halogen-menu](https://github.com/slamdata/purescript-halogen-menu) - Halogen のインタラクティブメニューです。

## 非同期処理と並列処理

- [purescript-aff](https://github.com/slamdata/purescript-aff) - PureScript 用の非同期 Effect Monad です。
- [purescript-affjax](https://github.com/slamdata/purescript-aff) - Aff で構築された非同期 AJAX ライブラリです。
- [purescript-queue](https://github.com/athanclark/purescript-queue) - PureScript 用の非同期キューライブラリです。
- [purescript-signal](https://github.com/bodil/purescript-signal) - Elm に似た PureScript 用非同期 Signal ライブラリです。
- [purescript-zeta](https://github.com/athanclark/purescript-zeta) - PureScript の別の Signal 実装です。

## Effect 管理

- [purescript-eff](https://github.com/purescript/purescript-eff) - ネイティブ副作用を扱う Eff Monad です。
- [purescript-effect](https://github.com/purescript/purescript-effect) - PureScript v0.12.x でネイティブ副作用を扱う Effect Monad です。

## JSON シリアライズ

- [purescript-argonaut](https://github.com/purescript-contrib/purescript-argonaut) - JSON のエンコード・デコード用 Typeclass です。
- [purescript-simple-json](https://github.com/justinwoo/purescript-simple-json) - Generics による JSON のエンコードとデコードです。

## バイナリシリアライズ

- [purescript-arraybuffer](https://github.com/jacereda/purescript-arraybuffer) - JavaScript の ArrayBuffer 型へのバインディングです。
- [purescript-arraybuffer-class](https://github.com/athanclark/purescript-arraybuffer-class) - ArrayBuffer のエンコード・デコード用 Typeclass です。
- [purescript-arraybuffer-builder](https://github.com/jamesdbrock/purescript-arraybuffer-builder) - ArrayBuffer をシリアライズする Builder です。
- [purescript-parsing-dataview](https://github.com/jamesdbrock/purescript-parsing-dataview) - ArrayBuffer をデシリアライズする Parser です。
- [purescript-protobuf](https://github.com/xc-jp/purescript-protobuf) - Google Protocol Buffers です。

## テスト

- [purescript-test-unit](https://github.com/bodil/purescript-test-unit) - PureScript 用の非同期単体テストランナーです。
- [purescript-quickcheck](https://github.com/purescript/purescript-quickcheck) - PureScript による QuickCheck 実装です。
- [purescript-quickcheck-laws](https://github.com/garyb/purescript-quickcheck-laws) - コアクラスの法則テストです。
- [purescript-benchotron](https://github.com/hdgarrood/purescript-benchotron) - PureScript／JavaScript の簡潔なベンチマークです。

## 学習リソース

- [動画 - Bodil Stokke「PureScript（今度こそ JavaScript を正しくできるかも）」](https://www.youtube.com/watch?v=yIlDBPiMb0o)
- [書籍 - Phil Freeman「PureScript by Example」](https://leanpub.com/purescript/read)
- [書籍（のようなもの）- Jordan の PureScript リファレンス](https://github.com/JordanMartinez/purescript-jordans-reference)
- [Dennis Gosnell による Haskell ユーザー向け PureScript](http://www.arow.info/blog/posts/2015-12-17-purescript-intro.html)
- [Podcast - Functional Geekery 第22回](https://www.functionalgeekery.com/episode-22-lambdaconf-2015-part-1/)
- [Podcast - JSJ 189](https://devchat.tv/js-jabber/189-jsj-purescript-with-john-a-de-goes-and-phil-freeman)
- [講座（egghead.io）- PureScript の関数型プログラミング概念](https://egghead.io/courses/functional-programming-concepts-in-purescript)
- [ガイド - 実践 Halogen](https://thomashoneyman.com/guides/real-world-halogen)

## 探索

- [Module Linker](https://fiatjaf.alhur.es/module-linker/#/purescript) - GitHub 上の `import` 宣言をクリックするだけでドキュメントを閲覧できる拡張機能です。
- [Pursuit](https://pursuit.purescript.org/)

## エディター・IDE プラグイン

[エディターとツールのサポート](https://github.com/purescript/purescript/wiki/Editor-and-tool-support)を参照してください。

## コミュニティ

- [`/r/purescript` subreddit](http://www.reddit.com/r/purescript)
- [Freenode の `#purescript`](http://webchat.freenode.net/?channels=purescript)
- [Stack Overflow の `purescript` タグ](http://stackoverflow.com/questions/tagged/purescript)
- [Google Group](https://groups.google.com/forum/#!forum/purescript)

## その他のリソース

- [PureScript エコシステム](https://github.com/xgrommx/purescript-ecosystem) - 人気ライブラリのランキングです。

## コントリビュート

コントリビューションを歓迎します。まず[コントリビューションガイドライン](https://github.com/passy/awesome-purescript/blob/cc4d1d75861b5b0e6d2ec7dd7cce7701218bd5a2/contributing.md)をお読みください。


## ライセンス

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

法律で認められる範囲で、[Pascal Hartig](https://passy.me/) はこの作品に関するすべての著作権および関連する権利または隣接する権利を放棄しています。
