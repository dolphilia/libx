---
title: "preactjs/awesome-preact"
description: "preactjs/awesome-preact の正規スナップショット"
licenseSource: "github-preactjs-awesome-preact-readme-md"
---

<a id="awesome-preact"></a>
# Awesome Preact [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

[<img src="https://rawgit.com/ooade/awesome-preact/master/preact-logo.svg" align="right" width="100">](https://preactjs.com)

> [Preact](https://github.com/developit/preact) エコシステムの素晴らしいリソースを集めた厳選リストです :star2:

[Preact](https://github.com/developit/preact) は、React と同じ ES6 API を備えた高速な 3kb の代替実装です。コンポーネントと Virtual DOM を提供します。

<a id="contents"></a>
## 目次
- [コミュニティ](#community)
- [ツールキット](#toolkits)
- [ボイラープレート](#boilerplates)
- [ルーティング](#routing)
- [コンポーネント](#components)
- [ライブラリ](#libraries)
- [テストユーティリティ](#testing-utils)
- [記事](#articles)
- [サンプルアプリ](#example-apps)
- [実用アプリ](https://preactjs.com/about/we-are-using)
- [関連ライブラリ](#related-libraries)
- [ヒント](#tips)

<a id="community"></a>
### コミュニティ
- [Slack](https://chat.preactjs.com/) (ディスカッションフォーラム)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/preact)
- [Github](https://github.com/developit/preact)
- [Twitter](https://twitter.com/preactjs)

<a id="toolkits"></a>
### ツールキット
- [Preact CLI](https://github.com/developit/preact-cli) - Preactのプログレッシブウェブアプリを数秒で構築します
- [Vite](https://github.com/vitejs/vite) - Preact、VueまたはReact用の高速なネイティブESMベースのウェブ開発ツール
- [PreactPress](https://github.com/kamod-ch/preactpress) - ViteとPreactを活用した静的サイトジェネレーター（ドキュメント、ブログ、マーケティングサイト用）*([demo](https://kamod-ch.github.io/preactpress/))*
- [EviKit](https://codeberg.org/nykula/evikit) - 小さなウェブアプリ向けのVite/Preact SSRフレームワーク。SQLite ORM、OpenAPIバリデーション、翻訳、SEO対応
- [nwb](https://github.com/insin/nwb) - React、InfernoまたはPreactで高速開発
- [React App Rewire Preact](https://github.com/timarney/react-app-rewired) - create-react-appとPreactを組み合わせる場合、ejectなしで使用可能
- [Preact CLI PostCSS](https://github.com/SaraVieira/preact-cli-postcss) - Preact CLIではデフォルトのPostCSS設定を削除しているため、postcss.config.jsを使用できます
- [Create Preact App](https://github.com/just-boris/create-preact-app) - Preactアプリの構築にbuild設定を一切不要にできます
- [Storybook Preact](https://github.com/storybooks/storybook/tree/next/app/preact) - Preact用のStorybookは、あなたのPreactコンポーネント向けのUI開発環境です

<a id="boilerplates"></a>
### ボイラープレート
- [Official Boilerplate](https://github.com/developit/preact-boilerplate) - Webpackで駆動された、すぐに使えるPreactスタートプロジェクト
- [Preact Simple Starter](https://github.com/ooade/PreactSimpleStarter) - Preact、Preact-mdl、Webpack2を活用したPWAシンプルスタートプロジェクト
- [Preact Offline Starter](https://github.com/lukeed/preact-starter) - PreactでSPA／PWA／オフラインフロントエンドアプリを構築するためのWebpack2のテンプレート
- [TypeScript Preact Starter](https://github.com/nickytonline/ts-preact-starter) - TypeScriptを活用したPreactのシンプルスタートプロジェクト
- [TypeScript PWA Preact Starter](https://github.com/bmitchinson/preact-typescript-pwa-starter) - TypeScriptとSASSを用いたPWAスタートプロジェクト（131kb）
- [Electron TypeScript Preact Boilerplate](https://github.com/yoctopuce-examples/electron-typescript-preact-boilerplate) - TypeScript と Preact をサポートする Electron スタータープロジェクト、esbuild で駆動。
- [Preact Modern Startupper](https://github.com/kolodziejczakM/preact-modern-startupper) - TypeScript、Goober、Unistore および Plop をサポートする PWA ボイラプレート。
- [Preact Redux SSR Example](https://github.com/csbun/preact-redux-ssr-example) - Redux を使用したサーバーサイドレンダリングの例。
- [Preact PWA](https://github.com/ezekielchentnik/preact-pwa) - パフォーマンスに重点を置いた PWA。サーバーサイドレンダリング、プリレンダリング、Redux、Express、Rollup をサポート。
- [Preact Chrome Extension](https://github.com/debdut/preact-chrome-extension) - フル機能の Preact Chrome 拡張機能用スターターキット。
- [Preact Web Extension](https://github.com/PiyushSuthar/preact-webext) - ⚡️ WebExtension Vite スターターテンプレート（Preact をサポート）。
- [Preact Neutralino TypeScript Starter](https://github.com/ernest-rudnicki/preact-neutralino-typescript-starter) - Preact と neutralino.js を使用して軽量なデスクトップアプリケーションを構築するためのスタータープロジェクト。
- [Simple Deno Starter](https://github.com/nesterow/minizavr) - Preact と Deno を使用した、シングルページアプリケーションを構築するためのミニマムテンプレート。

<a id="routing"></a>
### ルーティング
- [Preact Router](https://github.com/developit/preact-router) - Preact 用の URL ルーター。
- [Preact Route Async](https://github.com/mjanssen/preact-route-async) - 440b gzip のルートコンポーネントでページコンポーネントの非同期読み込みを可能にする。
- [Wouter](https://github.com/molefrog/wouter) - 1KB gzip のミニマム（800b gzip）ルーター。Preact/React に React Router に類似した API を提供。
- [Ufbr](https://github.com/zakarialaoui10/ufbr) - Preact/React 用のミニマム（1KB gzip）クライアントサイドのユニバーサルファイルベースルーター。`Preact` をサポート。

<a id="components"></a>
### コンポーネント
- [Preact Material Components](https://github.com/prateekbh/preact-material-components) - 「Material Components for the web」の Preact ラッパー。
- [Preact Scroll Header](https://github.com/lukeed/preact-scroll-header) - 800b gzip のヘッダー。スクロール時に表示／非表示を切り替える。
- [Preact Progress](https://github.com/lukeed/preact-progress) - Preact 用のシンプルかつ軽量（約590バイト gzip）プログレスバーコンポーネント。
- [Preact Compat](https://github.com/preactjs/preact-compat) - Preact *([full example](https://github.com/developit/preact-compat-example))* と任意の React ライブラリを組み合わせ使用可能
- [Preact Render To String](https://github.com/preactjs/preact-render-to-string) - ユニバーサルレンダリング
- [Preact Markup](https://github.com/developit/preact-markup) - HTML およびカスタムエレメントを JSX とコンポーネントとしてレンダリング
- [Preact Portal](https://github.com/developit/preact-portal) - Preact コンポーネントを任意の DOM 空間にレンダリング
- [Preact Richtextarea](https://github.com/developit/preact-richtextarea) - シンプルな HTML エディタ コンポーネント
- [Preact Token Input](https://github.com/developit/preact-token-input) - タグのような入力にトークンを分割するテキストフィールド
- [Preact Virtual List](https://github.com/developit/preact-virtual-list) - 数百万行のリストを簡単にレンダリング ([demo](https://jsfiddle.net/developit/qqan9pdo/))
- [Preact Cycle](https://github.com/developit/preact-cycle) - Preact 用の機能反応型パラダイム
- [Preact Layout](https://download.github.io/preact-layout/) - 小型かつシンプルなレイアウトライブラリ
- [Preact Socrates](https://github.com/matthewmueller/preact-socrates) - Preact 用の [Socrates](http://github.com/matthewmueller/socrates) プラグイン
- [Preact Flyd](https://github.com/xialvjun/preact-flyd) - Preact + JSX で [flyd](https://github.com/paldepind/flyd) FRP ストリームを使用
- [Preact I18nline](https://github.com/download/preact-i18nline) - を介して の周辺エコシステムを Preact に統合 [i18n-js](https://github.com/everydayhero/i18n-js) [i18nline](https://github.com/download/i18nline)
- [Preact MUI](https://github.com/luisvinicius167/preact-mui) - MUI CSS Preact ライブラリ
- [Preact MDL](https://github.com/developit/preact-mdl) - [MDL](https://getmdl.io) を Preact コンポーネントとして使用
- [Preact Photon](https://github.com/developit/preact-photon) - [photon](http://photonkit.com) を使って美しいデスクトップ UI を構築
- [Preact Classless Component](https://github.com/ld0rman/preact-classless-component) - class キーワードなしで Preact コンポーネントを作成
- [Preact Hyperscript](https://github.com/queckezz/preact-hyperscript) - 要素を作成するハイパーサクリプトのような構文
- [Shallow Compare](https://github.com/tkh44/shallow-compare) - 簡易な `shouldComponentUpdate` ヘルパー
- [Preact Codemod](https://github.com/vutran/preact-codemod) - React のコードを Preact に変換
- [Preact Helmet](https://github.com/download/preact-helmet) - Preact 用のドキュメントヘッドマネージャー
- [Preact Delegate](https://github.com/NekR/preact-delegate) - DOMイベントのデリゲート
- [Preact No SSR](https://github.com/gufsky/preact-no-ssr) - コンポーネントのサーバーサイドレンダリングをスキップ
- [Preact Head](https://github.com/matthewmueller/preact-head) - Preact 用の独立した宣言的な \<Head /\>
- [Preact Side Effect](https://github.com/ooade/preact-side-effect) - ネストされたプロパティの変更がグローバルな副作用にマッピングされるコンポーネントの作成
- [Preact Tiny Atom](https://github.com/KwanMan/preact-tiny-atom) - Preact と [Tiny Atom](https://github.com/qubitproducts/tiny-atom) の統合
- [Preact Level List](https://github.com/juliangruber/preact-level-list) - Preact 用のライブ更新対応 LevelDB リストコンポーネント
- [Preact Country Picker](https://github.com/bboydflo/flagstrap-preact) - Bootstrap 3 を基盤とする Preact 用の国選択パネル
- [Preact Fluid](https://github.com/ajainvivek/preact-fluid) - Preact 用の最小限の UI キット
- [Preact Feather Icons](https://github.com/ForsakenHarmony/preact-feather) - Preact 用の Feather アイコン
- [Preact Animate On Change](https://github.com/Sobesednik/preact-animate-on-change) - プロパティが変更されたときにCSS3アニメーションを追加
- [Preact Async Route](https://github.com/prateekbh/preact-async-route) - Preact-router 用の非同期ルートコンポーネント
- [MU Forms](https://github.com/mobiushorizons/mu-forms) - (P)React 用のシンプルなフォームライブラリ
- [Pimg](https://github.com/ooade/pimg) - プログレッシブな画像コンポーネント；画像の遅延読み込みに使用
- [Preact Component Console](https://github.com/haensl/preact-component-console) - コンソールエミュレーター。動的遅延を用いて入力をシミュレート
- [Preact Translate](https://github.com/DenysVuika/preact-translate) - Preact 用の最小限の国際化（i18n）ライブラリ
- [Preact Dock](https://github.com/TimDaub/preact-touchable-dock) - Preact アプリ用のシンプルなドラッグ＆ドロップおよびタッチ対応のドック
- [Preact Particles](https://github.com/matteobruni/tsparticles#preact) - ウェブサイトにカッコイイパーティクルアニメーションを簡単に追加できる軽量コンポーネント
- [Pant](https://github.com/webyom/pant) - Preact で構築されたモバイル UI コンポーネント *([docs and demos](https://webyom.github.io/pant))*。 [Vant](https://github.com/youzan/vant) の素晴らしい Vue コンポーネントから移植されたもの
- [Preact Transitioning](https://github.com/fakundo/preact-transitioning) - Preact コンポーネントを公開し、基本的な CSS アニメーションとトランジションを簡単に実装可能に
- [Preact Nominal Allocator](https://github.com/TimDaub/preact-nominal-allocator) - ボタン（- / +）で操作可能な数値入力要素
- [Tailored Components](https://github.com/nesterow/tailored) - Preact および Deno 用のスタイルなしコンポーネントとホルダー
- [Plotery](https://shelacek.bitbucket.io/plotery) - 高速かつ軽量のチャートライブラリ
- [Formica](https://shelacek.bitbucket.io/formica) - Preact 用のシンプルな宣言型フォーム
- [HelloCSV](https://hellocsv.github.io/HelloCSV/) - Preact で構築された現代的で洗練されたCSVインポートコンポーネント。Flatfileの代替品
- [Vski Table](https://table.vski.ai) - Preact で構築されたデータグリッドコンポーネント
- [Kamod UI](https://github.com/kamod-ch/kamod-ui) - 軽量な Preact と Tailwind UI コンポーネント（shadcn 風アプローチ） *([demo](https://kamod-ch.github.io/kamod-ui/))*.
- [Preact Filter Builder](https://github.com/dimidd/preact-filter-builder) - AND/OR ブール演算子に対応した、再利用可能な Preact ベースのフィルタービルダー UI コンポーネント *([demo](https://cute-empanada-425012.netlify.app/))*.
- [I18n Micro](https://github.com/s00d/nuxt-i18n-micro/tree/main/packages/preact) - 軽量な Preact バインディング（i18n-micro 用：hooks、context、UI コンポーネント）.

<a id="libraries"></a>
### ライブラリ
- [Redux Zero](https://github.com/concretesolutions/redux-zero) - Redux に基づく軽量なステートコンテナ（1つのストア、リダクタなし）.
- [Unistore](https://github.com/developit/unistore) - 350b / 650b ステートコンテナで Preact および React 用のコンポーネントアクション.
- [FPreact](https://github.com/UnwrittenFun/fpreact) - Preact コンポーネントを作成するための代替 API を提供し、Elm に強くインスピレーションを受けています.
- [ProppyJS - A tiny library for functional props composition](https://proppyjs.com)
- [ClearX](https://github.com/Autodesk/clearx) - React、Preact および Inferno 用の高速かつ手軽なステート管理（学習曲線ゼロ）.
- [Preact-urql](https://github.com/FormidableLabs/urql/tree/master/packages/preact-urql) - Preact コア + hooks と [urql](https://github.com/FormidableLabs/urql) を使用します.
- [hooked-head](https://github.com/JoviDeCroock/hooked-head) - DOM の `<head>` セクションを操作するための Hooks。これは、core Preact サポートを持つサブパッケージ（`preact/hooks` を使用）を含んでいます.
- [Kamod Hooks](https://github.com/kamod-ch/kamod-hooks) - [ahooks](https://github.com/alibaba/hooks) から移植された Preact Hooks ライブラリ.
- [Teaful](https://github.com/teafuljs/teaful) - 極めて小さい（800B）、簡単で強力（P）React ステート管理.
- [Nano Stores](https://github.com/nanostores/nanostores) - 非常に小さい（199バイト）ステートマネージャーで、多数の原子的なツリーシャッキングストアを提供.
- [Modular Forms](https://github.com/fabian-hiller/modular-forms) - Preact 用のモジュール式で型安全な、シグナルベースのフォームライブラリ.
- [exome](https://github.com/Marcisbee/exome) - 深層ネストされたステート用のシンプルなプロキシベースステートマネージャー.
- [Fastro](https://fastro.deno.dev) - Deno、TypeScript、Preact、Tailwind 用の高速でモジュール式の SSR フレームワーク。
- [Jotai](https://github.com/pmndrs/jotai) - React および Preact 用のアトミックで柔軟な状態管理
- [Pretch](https://github.com/EGAMAGZ/pretch) - vanilla JavaScript および React、Preact と互換性のある軽量かつ柔軟な fetch 増強ライブラリ
- [Formisch](https://formisch.dev/preact/guides/introduction/) - パフォーマンス、型安全、バンドルサイズに注目した Preact 用フォームライブラリ
- [zikofy](https://github.com/zakarialaoui10/zikofy) - Preact コンポーネントを Zikojs `UIElement` に変換
- [Preact In Motion](https://github.com/alloc/preact-in-motion) - Preact 用の軽量で洗練されたアニメーションプラグイン（Motion.dev および WAAPI で駆動）

<a id="testing-utils"></a>
### テストユーティリティ
- [Preact JSX Chai](https://github.com/developit/preact-jsx-chai) - JSX のアサーションテスト（DOM なし、Node 内で実行）
- [Preact Render Spy](https://github.com/mzgoddard/preact-render-spy) - テスト時に生成された仮想 DOM にアクセスできる Preact コンポーネントのレンダリング
- [Preact Test Utils](https://github.com/windyGex/preact-test-utils) - Preact における react-test-utils Enzyme のモック
- [Preact Testing Library](https://github.com/antoaravinth/preact-testing-library) - シンプルかつ完全な Preact DOM テストユーティリティで、良いテスト習慣を促進
- [Preact Island](https://github.com/mwood23/preact-island) - ウェブページ上で簡単に Preact コンポーネントをウィジェットとしてレンダリング

<a id="articles"></a>
### 記事
- [WTF is JSX](https://jasonformat.com/wtf-is-jsx/)
- [The Inner Workings of Virtual DOM](https://medium.com/@rajaraodv/the-inner-workings-of-virtual-dom-666ee7ad47cf)
- [Using Preact Instead of React](https://medium.com/@rajaraodv/using-preact-instead-of-react-70f40f53107c)
- [Preact Internals #1: The Easy Parts](https://medium.com/@asolove/preact-internals-1-the-easy-parts-3a081fa36205#.twnc3doig)
- [Preact Internals #2: The Component Model](https://medium.com/@asolove/preact-internals-2-the-component-model-36a05e32957b#.8zyec2y9v)
- [Building a Small PWA with Preact and Firebase](https://dandenney.com/posts/front-end-dev/building-a-small-pwa-with-preact-and-firebase)
- [Authentication with Auth0](https://auth0.com/blog/preact-authentication-tutorial)

<a id="example-apps"></a>
### サンプルアプリ
- [Preact HN](https://github.com/kristoferbaxter/preact-hn) - Hacker News を PWA として Preact で構築したデモ
- [TodoMVC](https://github.com/developit/preact-todomvc) - Preact で実現した TodoMVC。6kb を下回り、高速
- [Colors App](https://github.com/lukeed/colors-app) - 人気色パレットから値をコピーする PWA。HEX、RGB、HSL フォーマットをサポート
- [Tracks](https://github.com/jordic/tracks_preact/) - 汎用のアイテム追跡 PWA。Google Drive と同期可能
- [Hueify](https://github.com/kvartborg/hueify) - Philips Hue ライトのシンプルなコントロール
- [Golazon](https://github.com/sobstel/golazon) - サッカーデータを表示する最小限のリストビュー
- [Shopping List](https://github.com/ibm-watson-data-lab/shopping-list-preact-pouchdb) - PreactとPouchDBを使用したプログレッシブウェブアプリ
- [Code and Comment](https://github.com/code-and-comment/code-and-comment) - GitHubにコメントを追加するアプリ（[demo](https://code-and-comment.github.io/code-and-comment/)）
- [Play.cash](https://play.cash) :notes: _([GitHub プロジェクト](https://github.com/feross/play.cash))_
- [Songsterr](https://www.songsterr.com) 🎼 10.0 alpha以降でPreact Xを本番環境で使用
- [BitMidi](https://bitmidi.com/) 🎹 無料 MIDI ファイルのウェブアーカイブ（[GitHub プロジェクト](https://github.com/feross/bitmidi.com)）
- [Ultimate Guitar](https://www.ultimate-guitar.com) 🎸 Preactによりパフォーマンスが向上
- [ESBench](http://esbench.com) はPreactを使用して構築されている
- [BigWebQuiz](https://bigwebquiz.com) _([GitHub Project](https://github.com/jakearchibald/big-web-quiz))_
- [Nectarine.rocks](http://nectarine.rocks) _([GitHub Project](https://github.com/developit/nectarine))_ :peach:
- [OSS.Ninja](https://oss.ninja) _([GitHub Project](https://github.com/developit/oss.ninja))_
- [GuriVR](https://gurivr.com) _([GitHub Project](https://github.com/opennewslabs/guri-vr))_
- [Offline Gallery](https://use-the-platform.com/offline-gallery/) _([GitHub Project](https://github.com/vaneenige/offline-gallery/))_ :balloon:
- [Periodic Weather](https://use-the-platform.com/periodic-weather/) _([GitHub Project](https://github.com/vaneenige/periodic-weather/))_ :sunny:
- [Rugby News Board](http://nbrugby.com) _[(GitHub Project)](https://github.com/rugby-board/rugby-board-node)_
- [Preact Gallery](https://preact.gallery/) 8KBの写真ギャラリーPWAをPreactを使用して構築した.
- [Rainbow Explorer](https://use-the-platform.com/rainbow-explorer/) 現実の色をデジタル色に変換するPreactアプリ _([Github project](https://github.com/vaneenige/rainbow-explorer))_.
- [YASCC](https://carlosqsilva.github.io/YASCC/#/) Yet Another SoundCloudクライアント _([Github project](https://github.com/carlosqsilva/YASCC))_.
- [Journalize](https://preact-journal.herokuapp.com/) 14kのオフライン対応日記PWAをPreactを使用して構築した. _([Github project](https://github.com/jpodwys/preact-journal))_.
- [Proxx](https://proxx.app) GoogleChromeLabsが開発したプロキシゲームをPreactを使用して構築した. _([Github project](https://github.com/GoogleChromeLabs/proxx))_.
- [Web Maker](https://webmaker.app) オフライン対応かつ高速なフロントエンドプレイグランドをPreactを使用して構築した. _([Github project](https://github.com/chinchang/web-maker))_.
- [Intergram](https://www.intergram.xyz) TelegramメッセンジャーにリンクされたライブチャットウィジェットをPreactを使用して構築した. _([Github project](https://github.com/idoco/intergram))_.
- [Preact App in ES6 without Babel or JSX](https://vanilla-preact.surge.sh) _([GitHub Project](https://github.com/safdarjamal/vanilla-preact/))_.
- [GHFresh](https://code2k.github.io/ghfresh/) GitHub リリースを監視する、Preact でプリレンダリングされたアプリ。Preact Compat、TypeScript、Material-UI、Redux Toolkit で構築。 _([GitHub プロジェクト](https://github.com/code2k/ghfresh))_.
- [Passwords Fountain](https://passwords-fountain.com/) - 現代的でパフォーマンスの高いパスワードマネージャーインターフェース（どこでも動作） _([Github project](https://github.com/kolodziejczakM/passwords-fountain))_.
- [macOS Web](https://macos-preact.now.sh) - macOS Big Surのデスクトップ体験をWebで実現、PreactとViteを使用して構築した。 _([Github project](https://github.com/PuruVJ/macos-preact))_.
- [Cinemate](https://cinemate.me) - PreactとTypeScriptを使用して構築された映画推薦システム。バックエンドはRustで書かれている.
- [Windows 11 Web](https://win11.vercel.app) - ウェブ上で驚異的なWindows 11のクローン！ ⚡ _([Github project](https://github.com/PiyushSuthar/Windows-11-Web))_.
- [Idea Keeper](https://miftikcz.github.io/idea-keeper-2) :brain: 高度に拡張できる、最小限のアイデア管理アプリ _([GitHub プロジェクト](https://github.com/MiftikCZ/idea-keeper-2))_.
- [Trellith](https://trellith.sakih.net/) - 小規模な Trello クローン PWA（[GitHub プロジェクト](https://github.com/sakihet/trellith)）。
- [Gladys Assistant](https://gladysassistant.com/) - プライバシーを最優先にした、オープンソースのホームアシスタント _([GitHub Project](https://github.com/GladysAssistant/Gladys))_.
- [Lanquiz](https://codeberg.org/nykula/lanquiz) - ノートPCから LAN 上でクイズを実施（Kahoot からインポートでき、停電時も自前の環境で運用可能）。

<a id="related-libraries"></a>
### 関連ライブラリ
- [React](https://github.com/facebook/react) - ユーザーインターフェースを構築するための、宣言的で効率的かつ柔軟なJavaScriptライブラリ。
- [Inferno](https://github.com/infernojs/inferno) - 非常に高速でReactに似たJavaScriptライブラリ。現代的なユーザーインターフェースを構築するためのライブラリ。
- [Rax](https://github.com/alibaba/rax) - Reactと互換性のある、汎用的なレンダリングエンジン。
- [Zikojs](https://github.com/zakarialaoui10/zikojs) - ハイパーサクリプトに基づく、組み立て可能なUIライブラリ。Preactコンポーネントとの両方向の相互運用性を備える。

<a id="tips"></a>
### ヒント
ぜひ情報を追加してください ;)

---
<a id="contribution"></a>
### 貢献
貢献や提案はいつでも歓迎します。Preact で素晴らしいものを作り、ぜひ共有してください ;) <br/>
[ガイドライン](https://github.com/preactjs/awesome-preact/blob/cea45b398cb88f0a8f00dd0e6f755387060a591f/contributing.md)に従ってください。ありがとうございます！

---
<a id="license"></a>
### ライセンス
[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
