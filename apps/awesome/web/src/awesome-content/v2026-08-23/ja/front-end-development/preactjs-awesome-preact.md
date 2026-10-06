---
title: "Awesome Preact"
description: "Preactの開発ツール、スターター、ルーティング、コンポーネント、状態・フォーム管理、テスト、記事、アプリ例。"
licenseSource: "github-preactjs-awesome-preact-readme-md"
---

# Awesome Preact

[Preact](https://github.com/developit/preact)は、コンポーネントと仮想DOMを提供します。固定原文では、同じES6 APIを備えた3kbのReact代替実装と説明されています。このリストでは、開発ツール、スタータープロジェクト、ルーティング、コンポーネント、ライブラリ、テストユーティリティ、記事、アプリ例に加え、コミュニティ資料と関連ライブラリを紹介します。[Preactのウェブサイト](https://preactjs.com)ではプロジェクトの情報を確認できます。

## <a id="community"></a>コミュニティ

- [Slack](https://chat.preactjs.com/) (ディスカッションフォーラム)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/preact)
- [Github](https://github.com/developit/preact)
- [Twitter](https://twitter.com/preactjs)

## <a id="toolkits"></a>ツールキット

- [Preact CLI](https://github.com/developit/preact-cli) - Preactのプログレッシブウェブアプリを構築
- [Vite](https://github.com/vitejs/vite) - Preact、Vue、React向けのネイティブESMを利用したウェブ開発用ビルドツール
- [PreactPress](https://github.com/kamod-ch/preactpress) - ViteとPreactによる、ドキュメント・ブログ・マーケティングサイト向け静的サイトジェネレーター（[デモ](https://kamod-ch.github.io/preactpress/)）
- [EviKit](https://codeberg.org/nykula/evikit) - 小規模ウェブアプリ向けのVite/Preact SSRフレームワーク。SQLite ORM、OpenAPI検証、翻訳、SEOに対応
- [nwb](https://github.com/insin/nwb) - React、Inferno、Preact向けの開発ツール
- [React App Rewire Preact](https://github.com/timarney/react-app-rewired) - ejectせずにcreate-react-appでPreactを利用
- [Preact CLI PostCSS](https://github.com/SaraVieira/preact-cli-postcss) - Preact CLIの既定のPostCSS設定を除き、postcss.config.jsを利用可能にする
- [Create Preact App](https://github.com/just-boris/create-preact-app) - ビルド設定なしでPreactアプリを作成
- [Storybook Preact](https://github.com/storybooks/storybook/tree/next/app/preact) - Preactコンポーネント向けのUI開発環境

## <a id="boilerplates"></a>ボイラープレート

- [公式ボイラープレート](https://github.com/developit/preact-boilerplate) - WebpackによるPreactスタータープロジェクト
- [Preact Simple Starter](https://github.com/ooade/PreactSimpleStarter) - Preact、Preact-mdl、Webpack2を利用したPWAスターター
- [Preact Offline Starter](https://github.com/lukeed/preact-starter) - PreactによるSPA、PWA、オフラインのフロントエンドアプリを構築するWebpack2のひな形
- [TypeScript Preact Starter](https://github.com/nickytonline/ts-preact-starter) - TypeScriptを使うPreact向けの最小限のスタータープロジェクト
- [TypeScript PWA Preact Starter](https://github.com/bmitchinson/preact-typescript-pwa-starter) - TypeScriptとSASSを使うPWAスターター（固定原文では131kb）
- [Electron TypeScript Preact Boilerplate](https://github.com/yoctopuce-examples/electron-typescript-preact-boilerplate) - TypeScriptとPreactに対応し、esbuildを利用するElectronスタータープロジェクト
- [Preact Modern Startupper](https://github.com/kolodziejczakM/preact-modern-startupper) - TypeScript、Goober、Unistore、Plopに対応したPWAのひな形
- [Preact Redux SSR Example](https://github.com/csbun/preact-redux-ssr-example) - Reduxを使うサーバーサイドレンダリングの例
- [Preact PWA](https://github.com/ezekielchentnik/preact-pwa) - パフォーマンス、サーバーサイドレンダリング、プリレンダリング、Redux、Express、Rollupに重点を置いたPWA
- [Preact Chrome Extension](https://github.com/debdut/preact-chrome-extension) - PreactによるChrome拡張機能のスターターキット
- [Preact Web Extension](https://github.com/PiyushSuthar/preact-webext) - Preactを使うWebExtension向けのViteスターターテンプレート
- [Preact Neutralino TypeScript Starter](https://github.com/ernest-rudnicki/preact-neutralino-typescript-starter) - Preactとneutralino.jsで軽量なデスクトップアプリを構築するスタータープロジェクト
- [Simple Deno Starter](https://github.com/nesterow/minizavr) - PreactとDenoでシングルページアプリを構築する小規模なスターターテンプレート

## <a id="routing"></a>ルーティング

- [Preact Router](https://github.com/developit/preact-router) - Preact向けのURLルーター
- [Preact Route Async](https://github.com/mjanssen/preact-route-async) - ページコンポーネントを非同期に読み込むルートコンポーネント（固定原文では440b gzip）
- [Wouter](https://github.com/molefrog/wouter) - React Router風のAPIを備えたPreact/React向けルーター（固定原文では1KB gzip）
- [Ufbr](https://github.com/zakarialaoui10/ufbr) - `Preact`に対応した、クライアント側の汎用ファイルベースルーター

## <a id="components"></a>コンポーネント

- [Preact Material Components](https://github.com/prateekbh/preact-material-components) - 「Material Components for the web」のPreactラッパー
- [Preact Scroll Header](https://github.com/lukeed/preact-scroll-header) - スクロール中に表示・非表示を切り替えるPreact向けヘッダー（固定原文では800b gzip）
- [Preact Progress](https://github.com/lukeed/preact-progress) - Preact向けプログレスバーコンポーネント（固定原文では約590 bytes gzip）
- [Preact Compat](https://github.com/preactjs/preact-compat) - Preactで任意のReactライブラリを利用（[完全な例](https://github.com/developit/preact-compat-example)）
- [Preact Render To String](https://github.com/preactjs/preact-render-to-string) - ユニバーサルレンダリング
- [Preact Markup](https://github.com/developit/preact-markup) - HTMLとカスタム要素をJSXやコンポーネントとして描画
- [Preact Portal](https://github.com/developit/preact-portal) - PreactコンポーネントをDOM内の場所に描画
- [Preact Richtextarea](https://github.com/developit/preact-richtextarea) - シンプルなHTMLエディターコンポーネント
- [Preact Token Input](https://github.com/developit/preact-token-input) - タグなどの用途向けに、入力をトークン化するテキストフィールド
- [Preact Virtual List](https://github.com/developit/preact-virtual-list) - 数百万行のリストを描画（[デモ](https://jsfiddle.net/developit/qqan9pdo/)）
- [Preact Cycle](https://github.com/developit/preact-cycle) - Preact向けの関数型リアクティブパラダイム
- [Preact Layout](https://download.github.io/preact-layout/) - 小規模でシンプルなレイアウトライブラリ
- [Preact Socrates](https://github.com/matthewmueller/preact-socrates) - Preact向けの[Socrates](http://github.com/matthewmueller/socrates)プラグイン
- [Preact Flyd](https://github.com/xialvjun/preact-flyd) - PreactとJSXで[flyd](https://github.com/paldepind/flyd)のFRPストリームを利用
- [Preact I18nline](https://github.com/download/preact-i18nline) - [i18n-js](https://github.com/everydayhero/i18n-js)周辺のエコシステムを、[i18nline](https://github.com/download/i18nline)を介してPreactに統合
- [Preact MUI](https://github.com/luisvinicius167/preact-mui) - MUI CSSのPreactライブラリ
- [Preact MDL](https://github.com/developit/preact-mdl) - [MDL](https://getmdl.io)をPreactコンポーネントとして利用
- [Preact Photon](https://github.com/developit/preact-photon) - [photon](http://photonkit.com)でデスクトップUIを構築
- [Preact Classless Component](https://github.com/ld0rman/preact-classless-component) - classキーワードを使わずにPreactコンポーネントを作成
- [Preact Hyperscript](https://github.com/queckezz/preact-hyperscript) - 要素を作成するためのHyperscript風の構文
- [Shallow Compare](https://github.com/tkh44/shallow-compare) - 簡易な`shouldComponentUpdate`ヘルパー
- [Preact Codemod](https://github.com/vutran/preact-codemod) - ReactのコードをPreactに変換
- [Preact Helmet](https://github.com/download/preact-helmet) - Preact向けの文書head管理ツール
- [Preact Delegate](https://github.com/NekR/preact-delegate) - DOMイベントを委譲
- [Preact No SSR](https://github.com/gufsky/preact-no-ssr) - コンポーネントのサーバーサイドレンダリングを省く
- [Preact Head](https://github.com/matthewmueller/preact-head) - Preact向けの、独立した宣言的な\<Head /\>
- [Preact Side Effect](https://github.com/ooade/preact-side-effect) - 入れ子のpropの変更をグローバルな副作用に対応付けるコンポーネントを作成
- [Preact Tiny Atom](https://github.com/KwanMan/preact-tiny-atom) - Preactと[Tiny Atom](https://github.com/qubitproducts/tiny-atom)を統合
- [Preact Level List](https://github.com/juliangruber/preact-level-list) - 内容を随時更新する、Preact向けのLevelDBリストコンポーネント
- [Preact Country Picker](https://github.com/bboydflo/flagstrap-preact) - Bootstrap 3に基づく、Preact向けの国選択コンポーネント
- [Preact Fluid](https://github.com/ajainvivek/preact-fluid) - Preact向けの最小限のUIキット
- [Preact Feather Icons](https://github.com/ForsakenHarmony/preact-feather) - Preact向けのFeatherアイコン
- [Preact Animate On Change](https://github.com/Sobesednik/preact-animate-on-change) - プロパティ変更時にCSS3アニメーションを追加
- [Preact Async Route](https://github.com/prateekbh/preact-async-route) - preact-router向けの非同期ルートコンポーネント
- [MU Forms](https://github.com/mobiushorizons/mu-forms) - (P)React向けのフォームライブラリ
- [Pimg](https://github.com/ooade/pimg) - 画像の遅延読み込みに使うプログレッシブ画像コンポーネント
- [Preact Component Console](https://github.com/haensl/preact-component-console) - 動的な遅延を使って入力を模擬するコンソールエミュレーター
- [Preact Translate](https://github.com/DenysVuika/preact-translate) - Preact向けの最小限の翻訳（i18n）ライブラリ
- [Preact Dock](https://github.com/TimDaub/preact-touchable-dock) - Preactアプリ向けの、ドラッグ＆ドロップとタッチ操作に対応したドック
- [Preact Particles](https://github.com/matteobruni/tsparticles#preact) - ウェブサイトにパーティクルアニメーションを追加するコンポーネント
- [Pant](https://github.com/webyom/pant) - PreactによるモバイルUIコンポーネント（[ドキュメントとデモ](https://webyom.github.io/pant)）。[Vant](https://github.com/youzan/vant)のVueコンポーネントから移植
- [Preact Transitioning](https://github.com/fakundo/preact-transitioning) - 基本的なCSSアニメーションとトランジションを実装するためのPreactコンポーネントを提供
- [Preact Nominal Allocator](https://github.com/TimDaub/preact-nominal-allocator) - 2つのボタン（-/+）でも操作できる数値入力要素
- [Tailored Components](https://github.com/nesterow/tailored) - PreactとDeno向けの、スタイルを持たないコンポーネントとフック
- [Plotery](https://shelacek.bitbucket.io/plotery) - グラフ描画ライブラリ
- [Formica](https://shelacek.bitbucket.io/formica) - Preact向けのシンプルな宣言型フォーム
- [HelloCSV](https://hellocsv.github.io/HelloCSV/) - Preactで構築された、組み込みやすいCSVインポーター。Flatfileの代替
- [Vski Table](https://table.vski.ai) - Preactで構築されたデータグリッドコンポーネント
- [Kamod UI](https://github.com/kamod-ch/kamod-ui) - PreactとTailwindのUIコンポーネント（shadcn風の方式）（[デモ](https://kamod-ch.github.io/kamod-ui/)）
- [Preact Filter Builder](https://github.com/dimidd/preact-filter-builder) - AND/ORの論理結合に対応した、再利用可能なPreact製フィルタービルダーUIコンポーネント（[デモ](https://cute-empanada-425012.netlify.app/)）
- [I18n Micro](https://github.com/s00d/nuxt-i18n-micro/tree/main/packages/preact) - i18n-micro向けの軽量なPreactバインディング（フック、コンテキスト、UIコンポーネント）

## <a id="libraries"></a>ライブラリ

- [Redux Zero](https://github.com/concretesolutions/redux-zero) - 単一のストアを持ち、リデューサーを使わない、Reduxに基づく軽量な状態コンテナ
- [Unistore](https://github.com/developit/unistore) - PreactとReact向けのコンポーネントアクションを備えた状態コンテナ（固定原文では350b / 650b）
- [FPreact](https://github.com/UnwrittenFun/fpreact) - Elmに着想を得た、Preactコンポーネント作成用の代替API
- [ProppyJS - 関数によるprops合成ライブラリ](https://proppyjs.com)
- [ClearX](https://github.com/Autodesk/clearx) - React、Preact、Inferno向けの状態管理
- [Preact-urql](https://github.com/FormidableLabs/urql/tree/master/packages/preact-urql) - [urql](https://github.com/FormidableLabs/urql)をPreactのコアとフックで利用
- [hooked-head](https://github.com/JoviDeCroock/hooked-head) - DOMの`<head>`セクションを操作するフック。Preactのコアに対応したサブパッケージを含む（`preact/hooks`を使用）
- [Kamod Hooks](https://github.com/kamod-ch/kamod-hooks) - [ahooks](https://github.com/alibaba/hooks)から移植されたPreactフックライブラリ
- [Teaful](https://github.com/teafuljs/teaful) - (P)React向けの状態管理（固定原文では800B）
- [Nano Stores](https://github.com/nanostores/nanostores) - 複数のアトミックな、ツリーシェイキング可能なストアを持つ状態管理ツール（固定原文では199 bytes）
- [Modular Forms](https://github.com/fabian-hiller/modular-forms) - Preact向けの、モジュール式で型安全なシグナルベースのフォームライブラリ
- [exome](https://github.com/Marcisbee/exome) - 深く入れ子になった状態向けの、プロキシに基づく状態管理ツール
- [Fastro](https://fastro.deno.dev) - Deno、TypeScript、Preact、Tailwind向けのモジュール式SSRウェブフレームワーク
- [Jotai](https://github.com/pmndrs/jotai) - ReactとPreact向けの、プリミティブで柔軟な状態管理
- [Pretch](https://github.com/EGAMAGZ/pretch) - 素のJavaScript、React、Preactで動作する、軽量で柔軟なfetch拡張ライブラリ
- [Formisch](https://formisch.dev/preact/guides/introduction/) - パフォーマンス、型安全性、バンドルサイズに重点を置くPreact向けフォームライブラリ
- [zikofy](https://github.com/zakarialaoui10/zikofy) - PreactコンポーネントをZikojsの`UIElement`に変換
- [Preact In Motion](https://github.com/alloc/preact-in-motion) - Motion.devとWAAPIを利用するPreact向けアニメーションプラグイン

## <a id="testing-utils"></a>テストユーティリティ

- [Preact JSX Chai](https://github.com/developit/preact-jsx-chai) - DOMを使わず、Nodeで直接実行するJSXのアサーションテスト
- [Preact Render Spy](https://github.com/mzgoddard/preact-render-spy) - 生成された仮想DOMにアクセスしてテストできるよう、Preactコンポーネントを描画
- [Preact Test Utils](https://github.com/windyGex/preact-test-utils) - Enzymeが使うreact-test-utilsのメソッドをPreact向けにモック
- [Preact Testing Library](https://github.com/antoaravinth/preact-testing-library) - 適切なテストの実践を促す、シンプルで一通りの機能を備えたPreact DOMテストユーティリティ
- [Preact Island](https://github.com/mwood23/preact-island) - ウェブページにPreactコンポーネントをウィジェットとして描画

## <a id="articles"></a>記事

- [JSXとは何か](https://jasonformat.com/wtf-is-jsx/)
- [仮想DOMの内部動作](https://medium.com/@rajaraodv/the-inner-workings-of-virtual-dom-666ee7ad47cf)
- [Reactの代わりにPreactを使う](https://medium.com/@rajaraodv/using-preact-instead-of-react-70f40f53107c)
- [Preactの内部構造 第1回：簡単な部分](https://medium.com/@asolove/preact-internals-1-the-easy-parts-3a081fa36205#.twnc3doig)
- [Preactの内部構造 第2回：コンポーネントモデル](https://medium.com/@asolove/preact-internals-2-the-component-model-36a05e32957b#.8zyec2y9v)
- [PreactとFirebaseで小さなPWAを構築する](https://dandenney.com/posts/front-end-dev/building-a-small-pwa-with-preact-and-firebase)
- [Auth0による認証](https://auth0.com/blog/preact-authentication-tutorial)

## <a id="example-apps"></a>サンプルアプリ

Preactで構築されたアプリの例です。[実用アプリのディレクトリ](https://preactjs.com/about/we-are-using)も紹介されています。

- [Preact HN](https://github.com/kristoferbaxter/preact-hn) - Hacker NewsをPreactでPWAとして構築したデモ
- [TodoMVC](https://github.com/developit/preact-todomvc) - Preactで実装したTodoMVC（固定原文では6kb未満）
- [Colors App](https://github.com/lukeed/colors-app) - よく使われるカラーパレットから値をコピーするPWA。HEX、RGB、HSL形式に対応
- [Tracks](https://github.com/jordic/tracks_preact/) - さまざまなものを追跡するPWA。Google Driveと同期
- [Hueify](https://github.com/kvartborg/hueify) - Philips Hue照明用のシンプルなコントローラー
- [Golazon](https://github.com/sobstel/golazon) - 簡素なスタイルでサッカーデータを表示
- [Shopping List](https://github.com/ibm-watson-data-lab/shopping-list-preact-pouchdb) - PreactとPouchDBで構築されたプログレッシブウェブアプリ
- [Code and Comment](https://github.com/code-and-comment/code-and-comment) - GitHubのファイルにコメントを追加するアプリ（[デモ](https://code-and-comment.github.io/code-and-comment/)）
- [Play.cash](https://play.cash) - 音楽（[GitHubプロジェクト](https://github.com/feross/play.cash)）
- [Songsterr](https://www.songsterr.com) - 固定原文によれば、10.0 alphaからPreact Xを本番で利用
- [BitMidi](https://bitmidi.com/) - 無料MIDIファイルのアーカイブ（[GitHubプロジェクト](https://github.com/feross/bitmidi.com)）
- [Ultimate Guitar](https://www.ultimate-guitar.com) - 固定原文によれば、Preactでパフォーマンスを向上
- [ESBench](http://esbench.com) - Preactで構築
- [BigWebQuiz](https://bigwebquiz.com) ([GitHubプロジェクト](https://github.com/jakearchibald/big-web-quiz))
- [Nectarine.rocks](http://nectarine.rocks) ([GitHubプロジェクト](https://github.com/developit/nectarine))
- [OSS.Ninja](https://oss.ninja) ([GitHubプロジェクト](https://github.com/developit/oss.ninja))
- [GuriVR](https://gurivr.com) ([GitHubプロジェクト](https://github.com/opennewslabs/guri-vr))
- [Offline Gallery](https://use-the-platform.com/offline-gallery/) ([GitHubプロジェクト](https://github.com/vaneenige/offline-gallery/))
- [Periodic Weather](https://use-the-platform.com/periodic-weather/) ([GitHubプロジェクト](https://github.com/vaneenige/periodic-weather/))
- [Rugby News Board](http://nbrugby.com) ([GitHubプロジェクト](https://github.com/rugby-board/rugby-board-node))
- [Preact Gallery](https://preact.gallery/) - Preactで構築された写真ギャラリーPWA（固定原文では8KB）
- [Rainbow Explorer](https://use-the-platform.com/rainbow-explorer/) - 現実の色をデジタルの色に変換するPreactアプリ（[GitHubプロジェクト](https://github.com/vaneenige/rainbow-explorer)）
- [YASCC](https://carlosqsilva.github.io/YASCC/#/) - もう一つのSoundCloudクライアント（[GitHubプロジェクト](https://github.com/carlosqsilva/YASCC)）
- [Journalize](https://preact-journal.herokuapp.com/) - Preactで構築されたオフライン対応の日記PWA（固定原文では14k）（[GitHubプロジェクト](https://github.com/jpodwys/preact-journal)）
- [Proxx](https://proxx.app) - GoogleChromeLabsがPreactで構築した、近さをテーマにしたゲーム（[GitHubプロジェクト](https://github.com/GoogleChromeLabs/proxx)）
- [Web Maker](https://webmaker.app) - Preactで構築されたオフライン対応のフロントエンド実験環境（[GitHubプロジェクト](https://github.com/chinchang/web-maker)）
- [Intergram](https://www.intergram.xyz) - Preactで構築された、Telegramメッセンジャーと連携するライブチャットウィジェット（[GitHubプロジェクト](https://github.com/idoco/intergram)）
- [BabelやJSXを使わないES6のPreactアプリ](https://vanilla-preact.surge.sh) ([GitHubプロジェクト](https://github.com/safdarjamal/vanilla-preact/))
- [GHFresh](https://code2k.github.io/ghfresh/) - GitHubリポジトリのリリースを監視し、Preactでプリレンダリング。Preact Compat、TypeScript、Material-UI、Redux Toolkitで構築（[GitHubプロジェクト](https://github.com/code2k/ghfresh)）
- [Passwords Fountain](https://passwords-fountain.com/) - パスワード管理ツールのインターフェース（[GitHubプロジェクト](https://github.com/kolodziejczakM/passwords-fountain)）
- [macOS Web](https://macos-preact.now.sh) - PreactとViteで構築された、ウェブでのmacOS Big Surデスクトップ体験（[GitHubプロジェクト](https://github.com/PuruVJ/macos-preact)）
- [Cinemate](https://cinemate.me) - PreactとTypeScriptで構築された映画推薦システム。バックエンドはRust
- [Windows 11 Web](https://win11.vercel.app) - ウェブ版Windows 11クローン（[GitHubプロジェクト](https://github.com/PiyushSuthar/Windows-11-Web)）
- [Idea Keeper](https://miftikcz.github.io/idea-keeper-2) - 拡張可能な、最小限のアイデア管理アプリ（[GitHubプロジェクト](https://github.com/MiftikCZ/idea-keeper-2)）
- [Trellith](https://trellith.sakih.net/) - 小規模なTrelloクローンPWA（[GitHubプロジェクト](https://github.com/sakihet/trellith)）
- [Gladys Assistant](https://gladysassistant.com/) - プライバシーを重視する、オープンソースのホームアシスタント（[GitHubプロジェクト](https://github.com/GladysAssistant/Gladys)）
- [Lanquiz](https://codeberg.org/nykula/lanquiz) - ノートPCからLAN内でクイズを実施（Kahootからインポートし、停電時も自前でホスト）

## <a id="related-libraries"></a>関連ライブラリ

- [React](https://github.com/facebook/react) - ユーザーインターフェースを構築する、宣言的で効率的かつ柔軟なJavaScriptライブラリ
- [Inferno](https://github.com/infernojs/inferno) - 現代的なユーザーインターフェースを構築する、React風のJavaScriptライブラリ
- [Rax](https://github.com/alibaba/rax) - Reactと互換性のある汎用レンダリングエンジン
- [Zikojs](https://github.com/zakarialaoui10/zikojs) - 組み合わせて利用するHyperscriptベースのUIライブラリ。Preactコンポーネントとの双方向の相互運用性を備える
