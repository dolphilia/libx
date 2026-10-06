---
title: "Awesome Ember.js"
description: "Ember.jsのアドオンと開発ツール、記事、書籍、講座、実装例、コミュニティの参考資料。"
licenseSource: "github-ember-community-russia-awesome-ember-readme-md"
---

# Awesome Ember.js

[Ember.js](https://emberjs.com)はウェブアプリケーション用のJavaScriptフレームワークです。開発に使うアドオンやツールとして、データ処理、認証、テンプレート、UIコンポーネント、テスト、ビルドに関するものを探せます。記事、書籍、講座、実装例、コミュニティの参考資料も紹介します。

## パッケージ<a id="packages"></a>
### AST

- [ember-ast-helpers](https://github.com/cibernox/ember-ast-helpers) - ASTの細部の影響をできるだけ抑えて変換を行うユーティリティ。原リストでは、ASTは依然として非公開APIと記載
- [ember-template-recast](https://github.com/ember-template-lint/ember-template-recast) - 非破壊的なテンプレート変換器
- [jscodeshift](https://github.com/facebook/jscodeshift) - JavaScriptのcodemodツールキット
- [dyfactor](https://github.com/dyfactor/dyfactor) - 実行時情報に基づいてcodemodを実行するプラットフォーム

### アクセシビリティ<a id="a11y"></a>

- [ember-accessibility](https://github.com/coyote-labs/ember-accessibility) - 開発中のアクセシビリティ違反の検出を支援するアドオン
- [e-a11y-modal](https://github.com/MelSumner/e-a11y-modal) - アクセシブルなEmber.jsアプリケーション向けのモーダル
- [ember-a11y-landmarks](https://github.com/ember-a11y/ember-a11y-landmarks) - アクセシビリティを改善するランドマークロールの利用を支援するEmber.jsアドオン
- [ember-a11y](https://github.com/ember-a11y/ember-a11y) - アクセシブルなEmber.jsアプリケーションを構築するツール集
- [ember-component-focus](https://github.com/ember-a11y/ember-component-focus) - 現在フォーカスされている要素を管理するメソッドをEmber.jsコンポーネントへ追加するミックスイン
- [ember-gestures](https://github.com/html-next/ember-gestures) - アプリ全体で定義・利用するHammerJSのマネージャーとレコグナイザーによるジェスチャー対応
- [ember-steps](https://github.com/rwjblue/ember-steps) - ウィザードやタブ付きUIなどを宣言的に作成
- [ember-page-title](https://github.com/tim-evans/ember-page-title) - Ember.jsアプリケーションのページタイトル管理
- [ember-self-focused](https://github.com/linkedin/self-focused/tree/master/packages/ember-self-focused) - ルート遷移時に遷移先へフォーカスを移動
- [ember-keyboard](https://github.com/patience-tema-baron/ember-keyboard) - キーボードイベントを扱うEmber.jsアドオン
- [ember-a11y-testing](https://github.com/ember-a11y/ember-a11y-testing) - Ember.jsのテストフレームワーク内で実行できるアクセシビリティテスト集
- [a11y-announcer](https://github.com/ember-a11y/a11y-announcer) - Emberのルート変更をアクセシブルに通知
- [ember-a11y-refocus](https://github.com/MelSumner/ember-a11y-refocus) - Emberアプリケーションに、操作を妨げないナビゲーション読み上げ要素を提供

### アダプター<a id="adapters"></a>

- [ember-cli-markdown-resolver](https://github.com/willviles/ember-cli-markdown-resolver) - カスタムフォルダー内のMarkdownファイルを解決し、サービス経由で内容を取得するEmber CLIアドオン
- [ember-cloud-firestore-adapter](https://github.com/rmmmp/ember-cloud-firestore-adapter) - Cloud Firestore用の非公式Ember Dataアダプターとシリアライザー
- [ember-data-hal-9000](https://github.com/201-created/ember-data-hal-9000) - HALアダプター（HATEOAS）を提供する、ember-dataと互換性のあるEmber CLIアドオン
- [ember-django-adapter](https://github.com/dustinfarris/ember-django-adapter) - Django REST Framework用のEmber CLIアダプターアドオン
- [ember-graphql-adapter](https://github.com/alphasights/ember-graphql-adapter) - Ember Data用のGraphQLアダプター
- [ember-indexeddb](https://github.com/mydea/ember-indexeddb) - Emberとember-dataでIndexedDBを扱うユーティリティとアダプター
- [ember-localforage-adapter](https://github.com/genkgo/ember-localforage-adapter) - Ember Dataのオフライン利用
- [ember-local-storage](https://github.com/funkensturm/ember-local-storage) - プロキシーを返す計算プロパティ向けのストレージ。変更をlocalStorageまたはsessionStorageに永続化
- [ember-pouch](https://github.com/pouchdb-community/ember-pouch) - Ember Data用のPouchDB/CouchDBアダプター
- [ember-wordpress](https://github.com/oskarrough/ember-wordpress) - Ember.jsとWordPressの連携
- [emberfire](https://github.com/firebase/emberfire) - Firebase用の公式Ember Dataアダプター
- [ninjafire](https://github.com/lineupninja/ninjafire) - TypeScriptで書かれたFirebase用のORM

### アニメーション<a id="animations"></a>

- [ember-animated](https://github.com/ember-animation/ember-animated) - [Web Animations with Ember js](https://www.youtube.com/watch?v=TSvnutA9PUE)
- [liquid-fire](https://github.com/ember-animation/liquid-fire) - Ember.jsアプリケーション向けのアニメーションとトランジション

### 認証<a id="authentication"></a>

- [ember-cli-simple-auth-extensions](https://emberobserver.com/categories/ember-cli-simple-auth-extensions)
- [ember-simple-auth](https://github.com/simplabs/ember-simple-auth) - Ember.jsアプリケーションに認証・認可を実装するライブラリ
- [torii](https://github.com/Vestorly/torii) - Ember.jsでの認証を簡潔に抽象化する機能集

### 自動化<a id="automation"></a>

- [ember-cli-deploy](https://github.com/ember-cli-deploy/ember-cli-deploy) - Ember CLIアプリケーション向けのデプロイパイプライン
- [ember-cli-deploy-webhooks](https://github.com/simplabs/ember-cli-deploy-webhooks) - デプロイ時にWebhookを呼び出すEmber CLI Deployプラグイン
- [ember-cli-release](https://github.com/shipshapecode/ember-cli-release) - バージョン付きリリースを管理するEmber CLIアドオン
- [ember-cli-sri](https://github.com/jonathanKingston/ember-cli-sri) - EmberアプリケーションのSubresource Integrity（SRI）ハッシュを生成するプラグイン
- [ember-cli-dependency-lint](https://github.com/salsify/ember-cli-dependency-lint) - アプリケーションのアドオン依存関係を検査し、各依存関係のバージョンが1つだけであることを確認

### ベンチマーク<a id="benchmarking"></a>

- [ember-macro-benchmark](https://github.com/krisselden/ember-macro-benchmark) - 2つのEmber.jsバージョンで動くEmberアプリケーションのベンチマークを記録
- [ember-performance](https://github.com/eviltrout/ember-performance) - Ember.jsの性能改善を支援するテスト集
- [emberperf](http://emberperf.eviltrout.com) - Ember.jsのバージョン間の性能比較

### ブログ<a id="blogging"></a>

- [empress-blog](https://github.com/empress/empress-blog) - Ember.jsで構築した静的ブログシステム。原リストでは機能が揃いSEOに対応すると説明
- [ember-cli-blog](https://github.com/broerse/ember-cli-blog) - Tom Daleのブログ実装例をEmber CLI向けに更新
- [ember-tumblr](https://github.com/elwayman02/ember-tumblr) - Tumblrブログを統合するEmber.jsアドオン

### Babel

- [ember-cli-babel-plugin-helpers](https://github.com/dfreeman/ember-cli-babel-plugin-helpers) - Ember CLIアプリケーションやアドオンでBabelプラグインを管理するユーティリティ

### プロジェクトの雛形<a id="boilerplating"></a>

- [ember-boilerplate](https://github.com/mirego/ember-boilerplate) - MiregoがEmber.jsプロジェクトの構築に使う基盤。原リストでは安定した基盤と説明

### Broccoli

- [broccoli-concat-analyser](https://github.com/stefanpenner/broccoli-concat-analyser) - アセットのプロファイリング
- [broccoli-debug](https://github.com/broccolijs/broccoli-debug) - Broccoliビルドパイプラインの作者向けのデバッグユーティリティ
- [broccoli-stew](https://github.com/stefanpenner/broccoli-stew) - Broccoliベースのビルドパイプライン開発でよく使う便利な関数を提供
- [broccolijs-tutorial](https://github.com/oligriffiths/broccolijs-tutorial) - Broccoli.jsのチュートリアルリポジトリ
- [broccoli-rollup](https://github.com/chadhietala/broccoli-rollup) - Rollup用のBroccoliプラグイン
- [broccoli-manifest](https://github.com/racido/broccoli-manifest) - BroccoliによるHTML5キャッシュマニフェストのコンパイル
- [broccoli-glow](https://github.com/locks/broccoli-glow) - 単一ファイルからの動的なコンポーネント作成など

### Broccoliの参考資料<a id="broccoli-read"></a>

- [Debugging a Broccoli Tree](https://dockyard.com/blog/2015/02/02/debugging-a-broccoli-tree)
- [Debugging Broccoli and Ember-CLI](https://mfeckie.github.io/Debugging-Broccoli-And-Ember/)
- [Debugging Ember-cli Build Times](https://medium.com/@Dhaulagiri/debugging-ember-cli-build-times-38bd1b0f55f9)
- [Eat Your Greens - A Broccoli.js tutorial](http://www.oligriffiths.com/broccolijs/)
- [Ember.js Lazy Assets: Fingerprinting & loading static/dynamic assets on demand](https://codeburst.io/ember-js-lazy-assets-fingerprinting-loading-static-dynamic-assets-on-demand-f09cd7568155)
- [Thoughts on how to write faster broccoli plugins](https://gist.github.com/Gaurav0/c1eb3a00670eed28e57c2cf92d3f7668)

### ビルドツール<a id="build-tools"></a>

- [Broccoli](https://github.com/broccolijs/broccoli) - 定数時間での再ビルドと簡潔なビルド定義に対応するアセットパイプライン。原リストでは高速かつ信頼性が高いと説明

### チャート<a id="charts"></a>

- [ember-charts](https://github.com/Addepar/ember-charts) - Ember.jsとd3.jsで構築されたチャートライブラリ
- [ember-sparkles](https://github.com/LocusEnergy/ember-sparkles) - ember-d3-helpersで構築された、組み合わせ可能なD3コンポーネント集
- [ember-highcharts](https://github.com/ahmadsoe/ember-highcharts) - Ember CLI用のHighcharts・HighStock・HighMapsコンポーネント
- [ember-c3](https://github.com/Glavin001/ember-c3) - D3ベースの再利用可能なチャートライブラリC3のアドオン。原リストでは互換性がより高いと記載するが、比較対象は明記されていない

### CI/CD

- [ember-cli-server-variables](https://github.com/blimmer/ember-cli-server-variables) - 生成されるindex.htmlのheadタグへ変数を追加するEmber CLIアドオン
- [ember-ci](https://github.com/mike-north/ember-ci) - Ember.jsアプリケーション向けの継続的インテグレーション用ツール
- [CI with GitHub Actions for Ember Apps](https://crunchingnumbers.live/2020/03/17/ci-with-github-actions-for-ember-apps/) - GitHub ActionsによるCI実行時間の短縮
- [CI with GitHub Actions for Ember Apps: Part 2](https://crunchingnumbers.live/2020/08/31/ci-with-github-actions-for-ember-apps-part-2/) - v2アクションへの移行、実行時のコスト削減、継続的デプロイ

### コード分割<a id="code-splitting"></a>

- [ember-engines](https://github.com/ember-engines/ember-engines) - Ember.js Engines RFCの機能を実装するアドオン。複数の論理アプリケーションを、利用者からは1つのアプリケーションとして見えるように構成
- [ember-lazy-mount](https://github.com/buschtoens/ember-lazy-mount) - {{mount}}を使った、ルートを持たないエンジンの遅延読み込み
- [ember-cli-bundle-loader](https://github.com/MiguelMadero/ember-cli-bundle-loader) - 複数のバンドルと遅延読み込みに対応するアドオン
- [ember-cli-lazy-load](https://github.com/duizendnegen/ember-cli-lazy-load) - Ember.jsアプリケーションを複数のバンドルに分けて遅延読み込み

### コードスタイル<a id="codestyle"></a>

- [ember-cli-template-lint](https://github.com/ember-template-lint/ember-cli-template-lint) - `ember-template-lint`とEmber CLIの統合
- [ember-cli-alex](https://github.com/yohanmishkin/ember-cli-alex) - Ember.jsアプリケーション用のAlex
- [ember-prop-types](https://github.com/ciena-blueplanet/ember-prop-types) - Ember.jsアプリケーションやアドオンのプロパティ管理を改善

### コマンドラインアプリケーション<a id="command-line-apps"></a>

- [ember-cli-create](https://github.com/gossi/ember-cli-create) - 新しいEmberプロジェクトを作成するCLIウィザード
- [@ember/optional-features](https://github.com/emberjs/ember-optional-features) - ember-sourceのオプション機能を有効・無効に切り替え。原文でいうオプションは、当面は利用者が有効・無効を選べる状態を保つ機能で、既定で有効になる機能ではない。アプリケーション専用で、アドオンは対象外
- [ember-cli-rename](https://github.com/trabus/ember-cli-rename) - `ember rename`コマンドを提供するEmber CLIアドオン

### コマンドラインユーティリティ<a id="command-line-utilities"></a>

- [ember-cli-update](https://github.com/ember-cli/ember-cli-update) - Ember CLIのEmber.jsアプリケーション・アドオンとGlimmer.jsアプリケーションを更新
- [ember-cli-deprecation-workflow](https://github.com/mixonic/ember-cli-deprecation-workflow) - 大量のコンソール出力に埋もれずに非推奨機能への対処を進め、Ember.jsのアップグレードを支援するアドオン

### コンポーネント用アドオン<a id="component-addons"></a>

- [ember-diff-attrs](https://github.com/workmanw/ember-diff-attrs)
- [ember-compatibility-helpers](https://github.com/pzuraq/ember-compatibility-helpers) - 後方互換性を持つEmber.jsアドオンを書くためのヘルパー

### 圧縮<a id="compression"></a>

- [ember-cli-deploy-brotli](https://github.com/mfeckie/ember-cli-deploy-brotli) - Brotli圧縮に対応するEmber.jsのデプロイプラグイン

### コンテンツ管理システム<a id="content-management-systems"></a>

- [ember-admin](https://github.com/DockYard/ember-admin) - モデルを自動検出し、シンプルなCRUDインターフェースですべてのモデルデータを操作
- [https://authmaker.com/](https://authmaker.com/) - 原リストでは、ゼロから完全に動作するMVPを3日間で公開できると説明

### 制御フロー<a id="control-flow"></a>

- Promise
	- [ember-computed-promise-monitor](https://github.com/NullVoxPopuli/ember-computed-promise-monitor) - 計算プロパティで非同期処理を扱えるようにする
- Observable
	- [ember-rx](https://github.com/alexlafroscia/ember-rx) - Ember.jsとRxJS 6の統合
- ジェネレーター
	- [ember-concurrency](https://github.com/machty/ember-concurrency) - 簡潔で、キャンセル・再開始が可能な非同期タスクを扱うEmber.jsアドオン
  - [ember-master-tab](https://github.com/rhyek/ember-master-tab) - Emberアプリケーションの1つのタブだけで関数を実行するためのサービスを提供するライブラリ

### CSSなど<a id="css--etc"></a>

- [ember-cli-stylelint](https://github.com/billybonks/ember-cli-stylelint) - Emberアプリケーションにstylelintを追加してCSSを検査
- [ember-cli-autoprefixer](https://github.com/kimroen/ember-cli-autoprefixer) - スタイルをAutoprefixerで自動処理
- [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) - node-sassでEmber CLIアプリケーションのファイルを前処理。ソースマップとインクルードパスに対応
- [ember-cli-sass-pods](https://github.com/justtal/ember-cli-sass-pods) - podディレクトリ内のSassスタイルファイルを使ってpodのスタイルを指定
- [ember-component-css](https://github.com/ebryn/ember-component-css) - コンポーネントごとのスタイルを指定できるEmber CLIアドオン
- [ember-cli-postcss](https://github.com/jeffjewiss/ember-cli-postcss) - Ember CLIとPostCSSの統合
- [ember-css-modules](https://github.com/salsify/ember-css-modules) - アプリケーション向けのCSS Modules
- [ember-cli-tailwind](https://github.com/embermap/ember-cli-tailwind) - カスタムUIの迅速な構築に向けた、ユーティリティを中心とするCSSフレームワークTailwind
- [ember-emotion](https://github.com/alexlafroscia/ember-emotion) - Ember.jsでemotionによるスタイル指定を利用
- [css-blocks](https://github.com/linkedin/css-blocks) - 原リストで高性能かつ保守しやすいと説明されるスタイルシート
- [ember-cli-eyeglass](https://github.com/linkedin/eyeglass/tree/master/packages/ember-cli-eyeglass) - node-sassを通じてeyeglass対応のSassファイルをコンパイルするEmber CLIアドオン

### フォント<a id="fonts"></a>
- [ember-cli-webfont](https://github.com/vitch/ember-cli-webfont) - Ember CLIのビルド工程でSVGファイルからウェブフォントを生成

### 状態管理<a id="state-management"></a>

- [ember-buffered-proxy](https://github.com/yapplabs/ember-buffered-proxy)
- [ember-changeset](https://github.com/poteto/ember-changeset)
- [ember-cerebraljs](https://github.com/lifeart/ember-cerebraljs) - Cerebralを使って複雑なEmber.jsアプリケーションの状態管理を強化
- [ember-redux](http://www.ember-redux.com/) - Emberアプリケーション向けの予測可能な状態管理
- [ember-state-services](https://github.com/stefanpenner/ember-state-services)
- [ember-time-machine](https://github.com/offirgolan/ember-time-machine)

### スタイル用ツール<a id="styling-kits"></a>

- [ember-cli-tailwind](https://github.com/embermap/ember-cli-tailwind) - アプリケーションやアドオンにTailwind CSSを追加

### データ管理<a id="data-management"></a>

- [ember-apollo-client](https://github.com/bgentry/ember-apollo-client) - Apollo ClientとGraphQL用のEmber CLIアドオン
- [ember-cli-sofa](https://github.com/ampatspell/ember-cli-sofa) - Ember.js用のCouchDB永続化ライブラリ
- [ember-orbit](https://github.com/orbitjs/ember-orbit) - Orbit.jsで構築されたEmber.jsのデータ層
- [ember-data-storefront](https://github.com/embermap/ember-data-storefront) - よくあるデータ読み込みの問題に対処するAPI集
- [ember-m3](https://github.com/hjdivad/ember-m3) - DS.Modelに代わるモデル実装を提供するアドオン
- [ember-cli-zuglet](https://www.ember-cli-zuglet.com/) - Firebaseと統合するEmber.jsアドオン

### データ操作と計算プロパティ<a id="data-manipulation--computed"></a>

- [ember-awesome-macros](https://github.com/kellyselden/ember-awesome-macros) - Ember.jsの計算プロパティ用マクロ集
- [ember-cpm](https://github.com/cibernox/ember-cpm) - Ember.jsの計算プロパティ用マクロ
- [ember-macaroni](https://github.com/poteto/ember-macaroni) - 計算プロパティ用マクロで、コードの重複やコピー＆ペーストを避けてDRYに保つ

### データ検証<a id="data-validation"></a>

- [ember-cp-validations](https://github.com/offirgolan/ember-cp-validations) - Ember.jsの計算プロパティに基づく検証
- [ember-changeset-validations](https://github.com/poteto/ember-changeset-validations/) - ember-changeset用の検証
- [ember-model-validator](https://github.com/esbanarango/ember-model-validator) - 多数の検証ファイルや複雑な構造を必要とせず、Ember Dataのモデルに明示的な検証を追加
- [ember-validated-form](https://github.com/adfinis-sygroup/ember-validated-form) - クライアント側の検証を備えたフォームを作成
- [ember-line-graph](https://astronomersiva.github.io/ember-line-graph/) - 折れ線グラフを描く、依存関係のないEmberアドオン

### データベース<a id="database"></a>

- [ember-indexeddb](https://github.com/mydea/ember-indexeddb) - Emberとember-dataでIndexedDBを扱うユーティリティとアダプター

### 日時<a id="date"></a>

- [ember-moment](https://github.com/stefanpenner/ember-moment) - moment.jsとEmber.js用のテンプレートヘルパーと計算プロパティ用マクロ

### デバッグとプロファイリング<a id="debugging--profiling"></a>

- [ember-debug-logger](https://github.com/salsify/ember-debug-logger) - Ember.jsアプリケーションでvisionmedia/debugライブラリを利用できるようにする
- [ember-devtools](https://github.com/aexmachina/ember-devtools) - Ember.jsのデバッグに役立つ関数集
- [ember-chrome-devtools](https://github.com/dwickern/ember-chrome-devtools) - Ember.js用のChrome DevToolsアドオン
- [ember-cli-bundle-analyzer](https://github.com/kaliber5/ember-cli-bundle-analyzer) - 拡大可能な対話型ツリーマップで、アプリケーションのバンドル出力のサイズと内容を分析するEmber CLIアドオン
- [ember-perf-timeline](https://github.com/ember-best-practices/ember-perf-timeline) - Ember.jsアプリケーションの性能情報をChromeのTimelineに追加
- [ember-cli-route-map](https://github.com/BBVAEngineering/ember-cli-route-map) - Ember.jsアプリケーションのルートマップを生成するコマンド
- [heimdalljs-visualizer](https://github.com/rwjblue/heimdalljs-visualizer) - heimdalljsデータの可視化ツール
- [source-map-explorer](https://github.com/danvk/source-map-explorer) - ソースマップを使って使用領域を分析・デバッグ
- [ember-dead-code](https://github.com/buschtoens/ember-dead-code) - 実際の利用者の動作を監視して、使われていないコードを検出

### デコレーター<a id="decorators"></a>

- [Macro Decorators](https://pzuraq.github.io/macro-decorators/) - getter/setterの機能を再現するデコレーターを作成し、コードをDRYに保つ

### ドキュメント<a id="documentation"></a>

- [ember-cli-addon-docs](https://github.com/ember-learn/ember-cli-addon-docs) - Ember.jsアドオン向けのドキュメント
- [ember-cli-jsdoc](https://github.com/softlayer/ember-cli-jsdoc) - ソースコードのJSDocコメントからHTMLドキュメントを生成するEmber CLIアドオン
- [ember-freestyle](https://github.com/chrislopresto/ember-freestyle) - Ember.jsアプリケーションのコンポーネントエクスプローラーを作成するアドオン

### Ember Inspectorのロードマップと概要<a id="ember-inspector-roadmaps--overview"></a>

- [Ember Inspector Pairing](https://www.youtube.com/watch?v=rFNR_Fj1G84)
- [Ember Inspector Sync](https://www.youtube.com/watch?v=PvsfQrKxl_8)

### 利用者向けのカスタマイズ<a id="end-user-customization"></a>
- [ember-asset-loader](https://github.com/ember-engines/ember-asset-loader) - Ember.jsアプリケーションのアセット読み込みに対応
- [ember-experiments](https://github.com/outdoorsy/ember-experiments) - 実験やA/Bテストを行うEmber.jsアドオン
- [ember-cli-hot-loader](https://github.com/toranb/ember-cli-hot-loader) - Emberのエコシステムでのホットリロードのあり方を試す初期の取り組み
- [ember-ast-hot-load](https://github.com/lifeart/ember-ast-hot-load) - 汎用ホットリロードアドオン
- [ember-cli-build-notifications](https://github.com/pdud/ember-cli-build-notifications) - Ember CLIでビルドエラーが起きたときに通知
- [ember-feature-flags](https://github.com/kategengler/ember-feature-flags) - 機能フラグを提供するEmber CLIアドオン
- [ember-named-yields](https://github.com/knownasilya/ember-named-yields) - Ember.jsコンポーネントの名前付きyield
- [ember-islands](https://github.com/mitchlloyd/ember-islands) - サーバーでレンダリングされたページの任意の位置にEmber.jsコンポーネントを配置し、「Islands of Richness」を作成
- [ember-wormhole](https://github.com/yapplabs/ember-wormhole) - DOMの別の場所に子ビューをレンダリング
- [ember-stargate](https://github.com/kaliber5/ember-stargate) - アプリケーション内での論理的な定義位置と異なるDOMの場所にレンダリングする、いわゆるポータルの手法

### ES6

- [ember-concurrency-decorators](https://github.com/machty/ember-concurrency-decorators) - ember-concurrencyのタスクを宣言・設定するデコレーター構文
- [ember-decorators](https://github.com/ember-decorators/ember-decorators) - Ember.jsアプリケーションに役立つデコレーター
- [@ember-decorators/argument](https://github.com/ember-decorators/argument) - Ember.jsのコンポーネントやオブジェクトの引数用デコレーター
- [sparkles-decorators](https://github.com/gossi/sparkles-decorators) - Sparkles/Glimmer.jsコンポーネント用のデコレーター

### 外部コンポーネントの統合<a id="external-components-integration"></a>

- [ember-glimmer-component](https://github.com/smfoote/ember-glimmer-component) - Ember.jsでGlimmer.jsのようなコンポーネントを利用
- [sparkles-component](https://github.com/rwjblue/sparkles-component) - 既存の公開APIを通じて、Ember.jsアプリケーションで@glimmer.js/componentのようなAPIを試すアドオン
- [hooked-components](https://github.com/lifeart/hooked-components) - React Hooksの手法に着想を得たEmber.jsのカスタムコンポーネント
- [ember-functional-component](https://github.com/rwjblue/ember-functional-component) - 純粋関数をコンポーネントとして使う試み
- [ember-lifecycle-component](https://github.com/NullVoxPopuli/ember-lifecycle-component) - テンプレートが必要な場合に向けた、追加のライフサイクルを持つコンポーネント
- [ember-vue-components](https://github.com/lifeart/ember-vue-components) - Ember用のVue.JSコンポーネントAPI
- [@alexlafroscia/ember-cli-react](https://github.com/alexlafroscia/ember-cli-react) - Ember.jsでReactコンポーネントをレンダリング
- [@AltSchool/ember-cli-react](https://github.com/AltSchool/ember-cli-react) - Ember.jsアプリケーションでReactのコンポーネント階層を利用

### フォーム<a id="forms"></a>

- [ember-cli-crudities](https://ember-cli-crudities.readthedocs.io) - 静的・動的に読み込めるJSON設定から、フォームと編集可能なリストを構築
- [ember-form-for](https://github.com/martndemus/ember-form-for) - フォームを構築するEmber.jsアドオン

### 関数型プログラミング<a id="functional-programming"></a>

- [Bacon.js](http://baconjs.github.io) - 関数型リアクティブプログラミング
- [Folktale](http://folktale.origamitower.com) - JavaScriptの汎用的な関数型プログラミング用ライブラリ集。原リストでは、バグを減らし再利用性を高めたモジュール構成のアプリケーションを支援すると説明
- [immutable](https://github.com/facebook/immutable-js) - イミュータブルなデータコレクション
- [Kefir.js](https://github.com/rpominov/kefir) - 高性能と低メモリ使用量を重視するリアクティブライブラリ
- [Lazy.js](https://github.com/dtao/lazy.js) - lodash/Underscoreに似た、遅延評価を採用するユーティリティライブラリ。原リストでは、多くの場合に性能を改善すると説明
- [lodash](https://lodash.com) - 一貫性、カスタマイズ、性能、追加機能を重視するユーティリティライブラリ。原リストではUnderscore.jsより優れ、高速であると説明
- [mori](http://swannodette.github.io/mori/) - 通常のJavaScriptからClojureScriptの永続データ構造と関連APIを利用するライブラリ
- [Mout](http://moutjs.com) - 必要なモジュール・関数だけを読み込めるユーティリティライブラリ。原文では余分なオーバーヘッドがないと説明
- [Ramda](http://ramdajs.com) - 自動カリー化と引数順の逆転による柔軟な関数合成を重視するユーティリティライブラリ。データの変更を避ける
- [RxJS](http://reactivex.io) - さまざまな種類のデータを変換・合成・検索する関数型リアクティブライブラリ
- [underscore-contrib](http://documentcloud.github.io/underscore-contrib/) - Underscore用の追加ユーティリティ

### HTTP

- [ember-ajax](https://github.com/ember-cli/ember-ajax) - Ember.js 1.13以降のアプリケーションでAJAXリクエストを行うサービス
- [ember-socket-guru](https://github.com/netguru/ember-socket-guru) - Pusher.js、Action Cable、Socket.io、Phoenix Channelsとの統合を支援するアドオン

### ヘルパー<a id="helpers"></a>

- [ember-event-helpers](https://github.com/buschtoens/ember-event-helpers) - `{{on}}`モディファイアを補完するイベント用テンプレートヘルパー
- [ember-render-helpers](https://github.com/buschtoens/ember-render-helpers) - `@ember/render-modifiers`をテンプレートヘルパーとして提供
- [ember-element-helper](https://github.com/tildeio/ember-element-helper) - Glimmerテンプレート用の動的要素ヘルパー
- [ember-composable-helpers](https://github.com/DockYard/ember-composable-helpers) - Ember.jsで宣言的なテンプレートを記述する、組み合わせ可能なヘルパー
- [ember-helpers](https://github.com/abcum/ember-helpers) - Ember.js用のHandlebarsヘルパー集
- [ember-d3-helpers](https://github.com/LocusEnergy/ember-d3-helpers) - 組み合わせ可能なD3チャートを構築するEmber.jsヘルパー集
- [ember-math-helpers](https://github.com/shipshapecode/ember-math-helpers) - 基本的な算術演算を行うEmber.jsのHTMLBarsヘルパー
- [ember-promise-helpers](https://github.com/fivetanley/ember-promise-helpers) - Ember.jsテンプレートでPromiseを扱うための糖衣構文
- [ember-route-action-helper](https://github.com/DockYard/ember-route-action-helper) - ルート内でクロージャーアクションを上位へ伝播
- [ember-root-url](https://github.com/ef4/ember-root-url) - URLをアプリケーションのrootURLに対する相対URLとして保つテンプレートヘルパー
- [ember-store-helpers](https://github.com/ember-sapporo/ember-store-helpers) - ember-data関連のヘルパーを提供するアドオン
- [ember-truth-helpers](https://github.com/jmurphyau/ember-truth-helpers) - `{{if}}`と`{{unless}}`用のEmber.js HTMLBarsヘルパー：not、and、or、eq、is-array
- [ember-awesome-macros](https://github.com/kellyselden/ember-awesome-macros) - Ember.jsの計算プロパティ用マクロ集
- [ember-macro-helpers](https://github.com/kellyselden/ember-macro-helpers) - 独自のマクロを作成するEmber.jsマクロヘルパー
- [ember-cli-string-helpers](https://github.com/romulomachado/ember-cli-string-helpers) - DockYardのember-composable-helpersから抽出した文字列用ヘルパー集

### 画像<a id="image"></a>

- [ember-svg-jar](https://github.com/ivanvotti/ember-svg-jar) - Ember.jsアプリケーションにSVG画像を埋め込む

### 外部JavaScriptコードの取り込み<a id="include-external-js-code"></a>

- [ember-auto-import](https://github.com/ef4/ember-auto-import) - 設定不要でnpmパッケージからインポート
- [ember-cli-cjs-transform](https://github.com/rwjblue/ember-cli-cjs-transform) - CommonJSのインポート
- [ember-cli-es6-transform](https://github.com/sandydoo/ember-cli-es6-transform) - npm、bower、アプリケーション内の任意の場所からES6モジュールをインポート
- [ember-browserify](https://github.com/ef4/ember-browserify) - Browserifyを使ってnpmのCommonJSパッケージを読み込むアドオン

### 無限スクロール<a id="infinite-scroll"></a>

- [ember-infinity](https://github.com/ember-infinity/ember-infinity) - Ember CLIアプリケーション向けの、シンプルで柔軟な無限スクロール
- [vertical-collection](https://github.com/html-next/vertical-collection) - 無限スクロールと表示領域外の要素の描画省略。原リストでは60 FPSを超える速度で動作すると説明
- [smoke-and-mirrors](https://github.com/html-next/smoke-and-mirrors) - アプリケーション向けの無限スクロールと軽量なレンダリング

### 国際化と地域化<a id="internalization--localization"></a>

- [ember-intl](https://github.com/ember-intl/ember-intl) - 複雑なメッセージ文字列の翻訳と、日時・数値・相対時間の地域に応じた書式設定
- [ember-intl-analyzer](https://github.com/simplabs/ember-intl-analyzer) - Ember.jsプロジェクト内の未使用の翻訳を検出

### 入力<a id="inputs"></a>

- [ember-autoresize](https://github.com/tim-evans/ember-autoresize) - Ember.jsコンポーネントの自動サイズ調整

### ジョブキュー<a id="job-queues"></a>

- [ember-data-tasks](https://github.com/knownasilya/ember-data-tasks)
- [ember-concurrency](http://ember-concurrency.com)
- [ember-custom-actions](https://github.com/Exelord/ember-custom-actions) - Ember.jsアプリケーション用のカスタムAPIアクション
- [ember-pipeline](https://github.com/poteto/ember-pipeline)
- [ember-lifeline](https://github.com/ember-lifeline/ember-lifeline) - オブジェクト内の非同期動作のライフサイクルを管理するEmberアドオン

### ログ<a id="logging"></a>

- [console.re](https://console.re/)
- [ember-debug-logger](https://emberobserver.com/addons/ember-debug-logger) - Visionmediaのデバッグロガーを利用可能にするEmber.jsアドオン
- [ember-logging-service](https://github.com/acquia/ember-logging-service/) - アプリケーション全体で利用できる、汎用で拡張可能なログサービスを提供
- [raygun](https://raygun.com/)

### 実験的な取り組み<a id="mad-science"></a>

- [ember-elm](https://github.com/nucleartide/ember-elm) - Ember.jsアプリケーションでElmを記述
- [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) - JavaScriptで実装したアルゴリズムとデータ構造。説明と追加資料へのリンク付き

### 数式と計算<a id="math"></a>

- [ember-katex](https://github.com/firecracker/ember-katex) - KaTeXを使ってLaTeX数式をレンダリング
- [ember-math-helpers](https://github.com/shipshapecode/ember-math-helpers) - 基本的な算術演算を行うEmber.jsのHTMLBarsヘルパー

### 計測<a id="metrics"></a>

- [ember-user-activity](https://github.com/elwayman02/ember-user-activity) - 利用者の操作と待機状態を追跡するEmber.jsアドオン
- [ember-metrics](https://github.com/poteto/ember-metrics) - 新しいAPIを再実装せずに、複数の分析サービスへデータを送信

### 圧縮ツール<a id="minifiers"></a>
- [ember-hbs-minifier](https://github.com/simplabs/ember-hbs-minifier) - Handlebarsテンプレートから空白文字を除去
- [ember-cli-template-trimmer](https://github.com/lifeart/ember-cli-template-trimmer) - コンパイル時に改行を除去するアドオン

### その他<a id="miscellaneous"></a>

- [diagonal routes](https://alexspeller.com/ember-diagonal/) - 指定したEmberのルート定義に対応するルート構造、テンプレート、ルートフックを確認
- [ember data model maker](https://github.com/andycrum/ember-data-model-maker/) - Ember Data Model Maker（EDMM）

### モバイル<a id="mobile"></a>

- [corber](https://github.com/isleofcode/corber) - Ember.jsで構築したCordova/Crosswalkのハイブリッドアプリケーション用ツール
- [glimmer-native](https://github.com/bakerac4/glimmer-native) - Ember.js/Glimmer.jsでネイティブのモバイルアプリケーションを作成
- [ember-mobile-bar](https://github.com/nickschot/ember-mobile-bar) - モバイルアプリケーションのように振る舞う、管理された固定ツールバー
- [ember-mobile-core](https://github.com/nickschot/ember-mobile-core) - ember-mobile-*アドオン向けのパン認識機能とユーティリティを提供
- [ember-mobile-menu](https://github.com/nickschot/ember-mobile-menu) - モバイル端末向けに設計したドラッグ可能なサイドバー
- [ember-mobile-pane](https://github.com/nickschot/ember-mobile-pane) - ember-mobile-paneによるモバイルレイアウト
- [ember-responsive](https://github.com/freshbooks/ember-responsive) - Ember.jsによるレスポンシブレイアウト

### モディファイア<a id="modifiers"></a>
- [ember-css-vars](https://github.com/luxferresum/ember-css-vars) - CSS変数を適用するEmberモディファイア。原リストではJavaScriptのデータをCSSへ安全に渡す方法と説明
- [ember-on-modifier](https://github.com/buschtoens/ember-on-modifier) - Modifiers RFC #353に示された`{{on}}`要素モディファイアの実装
- [ember-ref-modifier](https://github.com/lifeart/ember-ref-modifier) - `{{ref}}`要素モディファイアの実装
- [ember-render-modifiers](https://github.com/emberjs/ember-render-modifiers) - RFC #415のdid-insert / did-update / will-destroyモディファイアを実装
- [ember-functional-modifiers](https://github.com/spencer516/ember-functional-modifiers) - Ember.js用の関数型モディファイア
- [ember-style-modifier](https://github.com/jelhan/ember-style-modifier) - 要素のスタイルを設定する{{style}}要素モディファイアを提供
- [ember-simple-animate](https://github.com/abhilashlr/ember-simple-animate) - CSSベースのアニメーション用のシンプルなEmberアドオン

### Parcel

- [ember-parcel-example](https://github.com/rtablada/ember-parcel-example) - Ember.js + Parcel.jsの実装例
- [todomvc-demo](https://github.com/devongovett/todomvc-demo) - Glimmer.js + Parcel.jsの実装例

### 決済<a id="payments"></a>

- [ember-credit-card](https://github.com/esbanarango/ember-credit-card) - クレジットカード用フォーム。原リストでは1行のコードで作成できると説明

### ポリフィル<a id="polyfills"></a>

- [ember-modifier-manager-polyfill](https://github.com/rwjblue/ember-modifier-manager-polyfill) - Ember.js 2.12から3.7までの要素モディファイアのポリフィル
- [ember-angle-bracket-invocation-polyfill](https://github.com/rwjblue/ember-angle-bracket-invocation-polyfill) - RFC 311の山括弧による呼び出し構文のポリフィル
- [ember-named-arguments-polyfill](https://github.com/rwjblue/ember-named-arguments-polyfill) - Ember.js 2.10から3.0までの名前付き引数のポリフィル
- [ember-native-class-polyfill](https://github.com/pzuraq/ember-native-class-polyfill) - Ember.js RFC #240と#337で提案されたネイティブクラスの動作のポリフィル
- [ember-router-service-polyfill](https://github.com/rwjblue/ember-router-service-polyfill) - Ember.js 2.15で追加されたember-routing-router-service機能の、可能な範囲でのポリフィル
- [ember-fn-helper-polyfill](https://github.com/rwjblue/ember-fn-helper-polyfill) - RFC #470の{{fn}}ヘルパーのポリフィル
- [ember-named-blocks-polyfill](https://github.com/ember-polyfills/ember-named-blocks-polyfill) - Yieldable Named Blocks機能のポリフィル

### PWA

- [ember-service-worker-asset-cache](https://github.com/DockYard/ember-service-worker-asset-cache)
- [ember-service-worker-cache-fallback](https://github.com/DockYard/ember-service-worker-cache-fallback)
- [ember-service-worker-cache-first](https://github.com/DockYard/ember-service-worker-cache-first)
- [ember-service-worker-index](https://github.com/DockYard/ember-service-worker-index)
- [ember-service-worker-prember](https://github.com/shipshapecode/ember-service-worker-prember)
- [ember-service-worker](https://github.com/DockYard/ember-service-worker) - Ember.js用の、プラグインで機能を追加できるService Workerの仕組み
- [ember-web-app](https://github.com/san650/ember-web-app) - PWAの作成に必要なmanifest.jsonとmetaタグの設定・管理を支援するEmber.jsアドオン

### クエリパラメーター<a id="query-params"></a>

- [ember-query-params-service](https://github.com/NullVoxPopuli/ember-query-params-service) - クエリパラメーターの解析*だけ*を行うコントローラーはあるか
- [ember-parachute](https://github.com/offirgolan/ember-parachute) - Ember.jsのクエリパラメーター機能を改善
- [ember-href-to](https://github.com/intercom/ember-href-to) - {{link-to}}の軽量な代替

### リアルタイム<a id="real-time"></a>

- [ember-cli-flash](https://github.com/poteto/ember-cli-flash) - Ember CLI用の、シンプルで細かく設定できるフラッシュメッセージ

### ルーティング用アドオン<a id="routing-addons"></a>
- [ember-component-routes](https://github.com/wongpeiyi/ember-component-routes) - Ember.jsでルートからコンポーネントを直接レンダリング
- [ember-redirect](https://github.com/thoov/ember-redirect) - 少ない手間でルートに基づくリダイレクトを行うアドオン
- [ember-router-scroll](https://github.com/dollarshaveclub/ember-router-scroll) - ブラウザー履歴のスクロール位置を保持しながらページ先頭へスクロール

### リゾルバーのカスタマイズ<a id="resolver-customization"></a>
- [ember-cli-extended-resolver](https://www.npmjs.com/package/ember-cli-extended-resolver) - 既定のファイル構造を変更し、機能ごとにグループ化

### セキュリティ<a id="security"></a>

- [ember-can](https://github.com/minutebase/ember-can) - Ember.jsアプリケーション用のシンプルな[認可アドオン](http://ember-can.com)
- [ember-permissions](https://github.com/Bagaar/ember-permissions) - Emberアプリケーションの権限管理

### Service Worker<a id="service-workers"></a>

- [ember-cli-workbox](https://github.com/BBVAEngineering/ember-cli-workbox/) - Service Workerを使った、段階的な機能強化としてのオフラインキャッシュ
- [ember-service-worker](https://github.com/DockYard/ember-service-worker) - Ember.js用の、プラグインで機能を追加できるService Workerの仕組み
- [ember-service-worker-index](https://github.com/DockYard/ember-service-worker-index) - index.htmlをキャッシュするEmber.jsのService Workerプラグイン
- [ember-service-worker-asset-cache](https://github.com/DockYard/ember-service-worker-asset-cache) - Ember.jsアプリケーションのアセットファイルをキャッシュするService Workerプラグイン
- [ember-service-worker-cache-first](https://github.com/DockYard/ember-service-worker-cache-first) - キャッシュを優先するEmber.jsのService Workerプラグイン
- [ember-service-worker-cache-fallback](https://github.com/DockYard/ember-service-worker-cache-fallback) - ネットワークリクエストが失敗すると、キャッシュ済みの代替版を使うEmber.jsのService Workerプラグイン
- [ember-service-worker-emberfire-messaging](https://github.com/Matt-Jensen/ember-service-worker-emberfire-messaging) - EmberfireアプリケーションでのFirebase Cloud MessagingのService Worker対応
- [ember-service-worker-unregistration](https://github.com/GreatWizard/ember-service-worker-unregistration) - ember-service-workerが無効なときにService Workerの登録を解除するEmber.jsプラグイン
- [ember-service-worker-request-chaos](https://github.com/maxfierke/ember-service-worker-request-chaos) - NetflixのChaos Monkeyのように、Ember.jsのSPAのAPIリクエストに障害を発生させる
- [ember-service-worker-project-entagled-registration](https://github.com/rwjblue/ember-service-worker-project-entagled-registration) - ember-service-workerと併用し、使用するService Workerがプロジェクトと正しく対応していることを確認するアドオン
- [ember-service-worker-cache-rendered](https://github.com/PrinceCornNM/ember-service-worker-cache-rendered) - レンダリング済みのHTMLをキャッシュするEmber.jsのService Workerプラグイン。FastBootで役立つ
- [ember-service-worker-update-notify](https://github.com/topaxi/ember-service-worker-update-notify) - Service Workerの更新通知
- [ember-service-worker-enqueue](https://github.com/The-Don-Himself/ember-service-worker-enqueue) - POST・PUT・DELETEなどの失敗した変更リクエストを捕捉し、バックグラウンド処理のキューへ入れるEmber.jsのService Workerプラグイン
- [ember-service-worker-prember](https://github.com/shipshapecode/ember-service-worker-prember) - premberの各ルートのindex.htmlをキャッシュするEmber.jsのService Workerプラグイン

### SSR（サーバー側レンダリング）<a id="ssr--server-side-rendering"></a>

- [ember-fastboot](https://github.com/ember-fastboot/ember-cli-fastboot) - Ember.jsアプリケーションのサーバー側レンダリング
- [glimmer-ssr-test](https://github.com/josemarluedke/glimmer-ssr-test) - Glimmer.jsアプリケーションをサーバー上でレンダリング

### 静的サイト生成とSEO<a id="static-site-generators--seo"></a>

- [ember-meta](https://github.com/shipshapecode/ember-meta) - Prember/Ember.jsブログのメタ情報を設定し、OpenGraph、microdata、Facebook、Twitter、Slackなどに対応
- [prember-rss-feed](https://github.com/shipshapecode/prember-rss-feed) - PremberサイトのRSSフィードを配信
- [prember](https://github.com/ef4/prember) - ビルド時にFastBootでEmber.jsアプリケーションをプリレンダリング

### スタイル指定<a id="styling"></a>

- [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass) - node-sassでEmber CLIアプリケーションのファイルを前処理。ソースマップとインクルードパスに対応

### テンプレート<a id="templating"></a>

- [ember-template-component-import](https://github.com/crashco/ember-template-component-import) - テンプレートファイル内で、インポートのような構文を使ってコンポーネントへのローカルバインディングを作成
- [ember-cli-jsx-templates](https://github.com/lifeart/ember-cli-jsx-templates) - EmberテンプレートのTSX/JSX対応
- [Emblem.js](https://github.com/machty/emblem.js/) - Ember.jsと組み合わせやすい、インデントを使ったHandlebars.jsの代替構文

### テスト<a id="testing"></a>

- [ember-qunit-decorators](https://github.com/mike-north/ember-qunit-decorators) - Ember.jsアプリケーションのQUnitテストでES6やTypeScriptのデコレーターを利用
- [ember-cli-addon-tests](https://github.com/tomdale/ember-cli-addon-tests) - 実際のEmber.jsアプリケーションの中でEmber CLIアドオンをテストするヘルパー
- [ember-cli-code-coverage](https://github.com/kategengler/ember-cli-code-coverage) - Istanbulを使ったEmberアプリケーションのコードカバレッジ測定
- [ember-cli-mirage](http://www.ember-cli-mirage.com/) - [JSON API](http://jsonapi.org/)に準拠したクライアント側サーバーで、アプリケーションの構築・テスト・デモを実施
- [ember-cli-mocha](https://github.com/ember-cli/ember-cli-mocha) - Ember CLIアプリケーション向けのMocha/Chaiテスト
- [ember-cli-page-object](https://github.com/san650/ember-cli-page-object) - 受け入れテストと統合テストでのページオブジェクトの作成を支援するEmber CLIアドオン
- [ember-cli-yadda](https://github.com/albertjan/ember-cli-yadda) - Ember CLIアプリケーションのCucumber仕様を記述
- [ember-concurrency-test-waiter](https://github.com/bendemboski/ember-concurrency-test-waiter) - ember-concurrencyのタスクでテストウェイターを有効化
- [ember-exam](https://github.com/trentmwillis/ember-exam) - ランダム化・分割・並列化を使ってテストを実行
- [ember-percy](https://github.com/percy/ember-percy) - Percyで視覚的な回帰テストを行うEmber.jsアドオン
- [ember-qunit](https://github.com/emberjs/ember-qunit) - Ember.js用のQUnitテストヘルパー
- [ember-test-friendly-error-handler](https://github.com/rwjblue/ember-test-friendly-error-handler) - 本番環境では例外を投げない、テスト可能なエラーハンドラーを構築
- [ember-test-selectors](https://github.com/simplabs/ember-test-selectors) - Ember.jsのテストで、より良い要素セレクターを利用
- [ember-test-setup](https://github.com/kellyselden/ember-test-setup) - 重複を減らすためのテスト用省略記法
- [ember-window-mock](https://github.com/kaliber5/ember-window-mock) - グローバルのwindowを、テストでモック可能なEmber.jsサービスとして利用
- [mirage-glue](https://github.com/izelnakri/mirage-glue) - APIエンドポイントを読み、対応するMirageのフィクスチャーファイルにレスポンスを作成・追記するプログラム
- [ember-sinon](https://github.com/csantero/ember-sinon) - sinon.jsに対応するEmber CLIアドオン

### テキスト<a id="text"></a>

- [ember-text-measurer](https://github.com/cibernox/ember-text-measurer) - 文字列の幅を効率よく測定するEmber.jsサービス

### ツリーシェイキング<a id="tree-shaking"></a>
- [ember-cli-tree-shaker](https://github.com/kellyselden/ember-cli-tree-shaker) - Kelly SeldenとAlex Navasardyanによる新しいツリーシェイキングとコード分割の取り組みの実験環境

### TypeScript

- [ember-cli-typescript](https://github.com/typed-ember/ember-cli-typescript) - Ember.jsアプリケーションでTypeScriptを利用
- [ember-typings](https://github.com/typed-ember/ember-typings) - Ember.jsのTypeScript型定義
- [ember-typescript-utils](https://github.com/happycollision/ember-typescript-utils) - TypeScriptとEmber.js向けのユーティリティ関数

### UIライブラリ<a id="ui-libs"></a>

- [ember-bootstrap](http://www.ember-bootstrap.com/) - 元のBootstrapプラグインやコンポーネントを再現する、ネイティブなEmber.jsコンポーネント集
- [Frontile](https://github.com/josemarluedke/frontile) - Ember.jsアプリケーションの構築に向け、コンポーネント・ヘルパー・モディファイア・スタイルを提供することを目指す
- [ember-cli-uniq](https://github.com/uniplaces/ember-cli-uniq/) - Uniplaces Design Systemを実装するEmber.jsの既定コンポーネント
- [ember-element-ui](https://github.com/aalasolutions/ember-element-ui) - Ember用のelement-ui
- [ember-elements](https://github.com/dunkinbase/ember-elements) - [EmberのUIツールキット](https://dunkinbase.github.io/ember-elements/)
- [ember-ghost-casper-template](https://github.com/stonecircle/ember-ghost-casper-template) - Ghostの既定の個人ブログ用テーマの静的サイト版
- [ember-paper](https://github.com/miguelcobain/ember-paper) - Ember.js向けのMaterial Design
- [ember-radical](https://github.com/healthsparq/ember-radical) - Ember.jsアプリケーション用のDDAUコンポーネントライブラリ。原リストでは軽量でアクセシビリティに全面対応と説明
- [Nomad UI](https://github.com/hashicorp/nomad/tree/master/ui)
- [Semantic-UI-Ember](https://github.com/Semantic-Org/Semantic-UI-Ember) - Semantic-UIモジュール用の公式Ember.jsライブラリ
- [Flexi](https://github.com/html-next/flexi)

### UIコンポーネント<a id="ui-components"></a>

- [ember-attacher](https://kybishop.github.io/ember-attacher/) - ツールチップとポップオーバー
- [ember-burger-menu](https://github.com/offirgolan/ember-burger-menu) - CSSトランジションによるアニメーションとスタイルを備えた、画面外から出し入れするサイドバーコンポーネント
- [ember-flatpickr](https://github.com/shipshapecode/ember-flatpickr) - Flatpickrの日付選択機能をラップするEmber.jsアドオン
- [ember-power-select](https://github.com/cibernox/ember-power-select) - Ember用の拡張可能な選択コンポーネント
- [ember-basic-dropdown](https://github.com/cibernox/ember-basic-dropdown) - Emberアプリケーション用の基本的なドロップダウン
- [ember-drag-sort](https://github.com/kaliber5/ember-drag-sort) - 複数のリストと入れ子のリストに対応する、並べ替え可能なリストコンポーネント
- [ember-perfect-scroll](https://github.com/imanhodjaev/ember-perfect-scroll) - Ember CLIアドオンとして提供するスクロールコンポーネント

### UX

- [ember-onbeforeunload](https://github.com/jasonmit/ember-onbeforeunload) - ルート間の遷移時やウィンドウを閉じるときに処理を実行

### VR

- [ember-vr](https://github.com/ember-vr)

### VS Code用アドオン<a id="vs-code-addons"></a>

- [Ember Syntax](https://marketplace.visualstudio.com/items?itemName=dhedgecock.ember-syntax) - Ember.jsのテンプレートファイルと、タグ付きテンプレートによるインラインのテンプレート定義の構文を強調表示
- [Glimmer Templates Syntax for VS Code](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-glimmer-syntax) - Ember.jsで使うGlimmer構文の強調表示
- [ember-language-server](https://github.com/emberwatch/ember-language-server) - Ember.jsプロジェクト向けのLanguage Server Protocol実装
- [unstable-ember-language-server](https://marketplace.visualstudio.com/items?itemName=lifeart.vscode-ember-unstable) - Ember.jsプロジェクト向けのLanguage Server Protocol実装。原リストでは不安定で実験的機能を含むと記載
- [vscode-ember-colorizer](https://github.com/ciena-blueplanet/vscode-ember-colorizer) - Ember.jsの.hbs、コントローラー、ルートのファイルを色分け・トークン化するVS Code拡張
- [ember-module-snippets](https://github.com/candidmetrics/ember-module-snippets) - VS CodeでEmber.jsモジュールのインポートを支援するスニペット

### Atom用アドオン<a id="atom-addons"></a>

- [Atom Ember Snippets](https://github.com/mattmcmanus/atom-ember-snippets)

### VIM

- [Neovim用の不安定な言語サーバー](https://gist.github.com/meirish/639e6def0f352f63fef662dce3ca2f98)

### Web Components

- [ember-cli-web-components](https://github.com/BBVAEngineering/ember-cli-web-components) - 他のフレームワークでEmber.jsコンポーネントをWeb Componentsとして利用
- [shadow-dom](https://github.com/knownasilya/ember-shadow-dom) - Shadow DOMのルート内にコンポーネントのテンプレートを記述

### Webpack

- [glimmer-compiler-webpack-plugin](https://github.com/tomdale/glimmer-compiler-webpack-plugin)

### 変わった取り組み<a id="weird"></a>

- [ember-dynamic-render-template](https://github.com/miguelcobain/ember-dynamic-render-template) - テンプレート文字列からDOMをレンダリング

## 参考資料<a id="resources"></a>

- [Ember.js Myths](https://github.com/ember-community-russia/awesome-ember/blob/6f7743a5868b3cb619caea7566d93b83f6f0e2bc/ember-myths.md)
- [読者の質問](https://github.com/ember-community-russia/awesome-ember/blob/6f7743a5868b3cb619caea7566d93b83f6f0e2bc/ember-questions.md)
- [Ember.js開発への参加](https://help-wanted.emberjs.com/core)
- [Awesome JavaScript](https://github.com/sorrycc/awesome-javascript)

- [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist)
- [Ember.js approval requirements](https://gist.github.com/PoslinskiNet/2d7a05944ca3c468440a0faea153062b)

### 記事<a id="articles"></a>

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
- [Ember.js and Angle Brackets. A Migration Guide & Cheat Sheet](https://medium.com/@AveryBloom/ff309d6effdf)
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

### Ember CLIの記事<a id="ember-cli-articles"></a>
- [Ember-cli fingerprinting and dynamic assets](https://medium.com/@ruslanzavacky/ember-cli-fingerprinting-and-dynamic-assets-797a298d8dc6)
- [Secrets of the Ember-CLI server: Express middleware with Ember-CLI](https://blog.201-created.com/secrets-of-the-ember-cli-server-bde80bb546dd)

### Emberを選ぶ理由の記事<a id="why-articles"></a>
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

### 入門記事<a id="jump-start-articles"></a>
- [The simplest possible Ember Data CRUD Tutorial](https://medium.com/ember-ish/the-simplest-possible-ember-data-crud-16eacee33ae6)
- [Challenges I face(d) with Ember.js](https://medium.com/@sarbbottam/challenges-i-face-with-ember-js-59bfba30416e)
- [It’s easier in Ember.js. Probably.](http://www.melsumner.com/blog/development/its-easier-in-ember-probably/)

### Glimmerの記事<a id="articles-glimmer"></a>
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

### Ember Enginesの記事<a id="articles-engines"></a>
- [CSS in Ember Engines](https://medium.com/@ynotdraw/css-in-ember-engines-230ef8d4cef8)
- [Enginification](https://simplabs.com/blog/2017/12/04/enginification.html)

### ember-concurrencyの記事<a id="articles-ember-concurrency"></a>
- [Adopting ember-concurrency or: How I Learned to Stop Worrying and Love the Task](https://engineering.linkedin.com/blog/2016/12/ember-concurrency--or--how-i-learned-to-stop-worrying-and-love-t)
- [Async or Swim: Replacing your Route models with Ember Concurrency Tasks](https://medium.com/@AveryBloom/async-or-swim-replacing-your-route-models-with-ember-concurrency-tasks-5a230252893a)
- [ember-concurrency: the solution to so many problems you never knew you had](https://emberway.io/ember-concurrency-the-solution-to-so-many-problems-you-never-knew-you-had-cce6d7731ba9)
- [PromiseProxyMixin: pure Ember alternative to ember-concurrency](https://lolma.us/en/blog/promise-proxy-mixin/)
- [Two-Tasks Routes in Ember.js](https://tritarget.org/#Two-Tasks%20Routes%20in%20Ember)

### ES6の記事<a id="articles-es6"></a>
- [ES Classes in Ember.js](https://medium.com/build-addepar/es-classes-in-ember-js-63e948e9d78e)

### TypeScriptの記事<a id="articles-typescript"></a>
- [ember-cli-typescript v2 beta](https://www.chriskrycho.com/2018/ember-cli-typescript-v2-beta.html)
- [Ember Typescript Code Coverage - how to gist](https://gist.github.com/lifeart/5f75981d5f6262d1bfc4525aebfcf7d5)
- [Type-Informed Design](https://www.chriskrycho.com/2018/type-informed-design.html)
- [Typing Your Ember.js](https://www.chriskrycho.com/typing-your-ember.html) - Ember.jsでTypeScriptを利用
- [Ember.js, TypeScript, and Class Properties](https://www.chriskrycho.com/2018/ember-ts-class-properties.html)
- [Set your Ember.js project up to use TypeScript](http://www.chriskrycho.com/2017/typing-your-ember-part-1.html)
- [Class properties — some notes on how things differ from the Ember.Object world](https://www.chriskrycho.com/2018/typing-your-ember-update-part-2.html)
- [Computed properties, actions, mixins, and class methods](https://www.chriskrycho.com/2018/typing-your-ember-update-part-3.html)
- [Using Ember Data, and service and controller injections improvements](https://www.chriskrycho.com/2018/typing-your-ember-update-part-4.html)

### 現代的なテストの記事<a id="articles-modern-testing"></a>
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

### FastBootの記事<a id="articles-fastboot"></a>
- [How to integrate Ember FastBoot in Cloud Functions for Firebase](https://cenchat.com/blog/2019/06/06/how-to-setup-ember-fastboot-in-cloud-functions-for-firebase.html)
- [Ember FastBoot + Google App Engine](https://pulletsforever.com/ember-fastboot-google-app-engine-1d38e1e3ffc2)
- [Deploying FastBoot apps with ember-cli-deploy](https://www.effective-ember.com/blog/deploying-fastboot-apps-with-ember-cli-deploy)

### データ関連の記事<a id="articles-about-data"></a>
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

### ルーティングの記事<a id="articles-about-routing"></a>
- [How to reset the Ember.js router namespace with this.route()](http://toddsmithsalter.com/how-to-reset-the-route-namespace-with-this-route/)
- [Ember.js-Router Wildcard/Globbing Routes](https://www.tutorialspoint.com/emberjs/route_glbng_rut.htm)
- [Ember.js.Route redirecting ‘/’ to ‘/my-own’](https://medium.com/ember-titbits/quest-4-ember-route-defaulting-to-my-own-f22b0dcb336f)

### EmberでのYarn利用の記事<a id="yarn-in-ember-articles"></a>
- [Ember.js and Yarn Workspaces](https://medium.com/square-corner-blog/ember-and-yarn-workspaces-fca69dc5d44a)

### ベストプラクティス<a id="best-practices"></a>

- [ember-best-practices](https://github.com/ember-best-practices)
- [An Ember.js Debugging Flowchart](https://www.mutuallyhuman.com/blog/2016/08/12/an-ember-debugging-flowchart)
- [Built-in input helpers in Ember.js: when should they be used?](https://balinterdi.com/blog/built-in-input-helpers-in-ember-js-when-and-whether-they-should-be-used/)

### 知っておくと役立つこと<a id="nice-to-know"></a>

- [Codemods](https://caseywatts.com/2018/08/23/codemods.html)
- [Creating runtime assisted Codemods using Telemetry helpers](http://hangaroundtheweb.com/2019/10/creating-runtime-assisted-codemods-using-telemetry-helpers/)

### ブログ<a id="blogs"></a>

- [lost-in-technology.com](https://www.lost-in-technology.com/blog/)
- [TODAY I LEARNED / Ember.js](https://til.hashrocket.com/emberjs)
- [Ember.js Daily Tips](http://www.emberdaily.com)
- [emberway.io](https://emberway.io/)
- [yehudakatz](https://yehudakatz.com/)
- [201-created.com](https://blog.201-created.com/)
- [airpair.com](https://www.airpair.com/ember.js)
- [alexdiliberto.com](https://alexdiliberto.com/)
- [balinterdi.com](https://balinterdi.com/blog/) - Balint Erdiのブログ
- [codeburst.io](https://codeburst.io/tagged/emberjs)
- [codementor.io](https://www.codementor.io/community/topic/emberjs)
- [dockyard.com](https://dockyard.com/blog/categories/ember)
- [emberigniter.com](https://emberigniter.com/articles/)
- [blog.embermap.com](https://blog.embermap.com)
- [engineering.linkedin.com](https://engineering.linkedin.com/blog/topic/ember)
- [hackernoon.com](https://hackernoon.com/tagged/ember)
- [lolma.us](https://lolma.us/en/blog)
- [madhatted.com](https://madhatted.com/)
- [medium.com/ember-ish](https://medium.com/ember-ish) - 初心者と中級開発者向けのEmber.jsの基礎
- [netguru.co](https://www.netguru.co/blog/topic/ember-js)
- [programwitherik.com](https://www.programwitherik.com) - Ember.jsのチュートリアル
- [rwjblue.com](http://rwjblue.com/)
- [shipshape.io](https://shipshape.io/blog/)
- [simplabs.com](https://simplabs.com/blog/)
- [thejsguy.com](https://thejsguy.com/)

### 書籍<a id="books"></a>

- [The Shortest Ember.js Book](https://github.com/ember-learn/the-shortest-ember-book)
- [A deep dive into the Ember.js runloop](https://github.com/eoinkelly/ember-runloop-handbook)
- [Developing an Ember.js Edge](https://gumroad.com/l/xlsx)
- [Ember Data in the Wild](https://leanpub.com/emberdatainthewild)
- [ember-cli 101](https://leanpub.com/ember-cli-101) - 著者：Adolfo Builes
- [Ember.js for Artisans](https://leanpub.com/emberforartisans) - Laravelをバックエンドとするシングルページアプリケーションの作成
- [Ember.js in Action](http://manning.com/skeie/) - 著者：Joachim Haagen Skeie
- [Professor Frisby's Mostly adequate guide to Functional Programming](https://drboolean.gitbooks.io/mostly-adequate-guide-old/)
- [Rock and Roll with Ember.js](http://rockandrollwithemberjs.com/)
- [Ember.js Book (RU)](https://leanpub.com/ember-book)
- [Pragmatic, balanced FP in JavaScript](https://github.com/getify/Functional-Light-JS)

### チートシート<a id="cheatsheets"></a>

- [API](https://emberjs.com/api/)
- [Glimmer.js](https://glimmerjs.com/)
- [ガイド](https://guides.emberjs.com/)
- [Ember Component Cheat Sheet](https://codingitwrong.com/2019/07/23/ember-component-cheat-sheet.html) - Octane以前

### codemod<a id="codemods"></a>
- [ember-es6-class-codemod](https://github.com/scalvert/ember-es6-class-codemod) - Ember.jsのオブジェクトをES6ネイティブクラスへ変換するcodemod-cliプロジェクト
- [ember-native-class-codemod](https://github.com/ember-codemods/ember-native-class-codemod) - Emberアプリケーションのコードを、デコレーター付きのネイティブJavaScriptクラス構文へ変換するcodemod
- [ember-cli-mirage-faker-codemod](https://github.com/caseywatts/ember-cli-mirage-faker-codemod) - ember-cli-mirage経由でfakerをインポートする方式から、fakerから直接インポートする方式への移行を支援
- [ember-mocha-codemods](https://github.com/Turbo87/ember-mocha-codemods) - ember-mocha用のcodemodスクリプト
- [ember-module-migrator](https://github.com/rwjblue/ember-module-migrator) - 新しいEmber.jsアプリケーションの配置への自動移行
- [ember-qunit-codemod](https://github.com/rwjblue/ember-qunit-codemod) - ember-qunit@2の古いmoduleFor*構文から新しい構文へプロジェクトを自動変換
- [ember-test-helpers-codemod](https://github.com/simonihmig/ember-test-helpers-codemod) - Ember.jsのテストを@ember/test-helpersを使う形へ変換するcodemod
- [es5-getter-ember-codemod](https://github.com/rondale-sc/es5-getter-ember-codemod) - getとgetPropertiesの使用を、通常のオブジェクトのドット記法へ自動変換
- [qunit-dom-codemod](https://github.com/simplabs/qunit-dom-codemod) - アサーションをqunit-domのアサーションへ自動変換するcodemod
- [test-selectors-codemod](https://github.com/lorcan/test-selectors-codemod) - ember-test-selectorsのtestSelectorヘルパーの非推奨化に対応するcodemod
- [ember-on-codemod](https://github.com/craigbilner/ember-on-codemod) - Ember.onの使用を置き換える
- [ember-memory-leaks-codemod](https://github.com/rajasegar/ember-memory-leaks-codemod) - Ember.jsアプリケーションのメモリリークを修正するcodemod集
- [ember-3x-codemods](https://github.com/rajasegar/ember-3x-codemods) - Ember.js 3.xの非推奨機能へ対処する変換をまとめたcodemod
- [ember-computed-getter-codemod](https://github.com/Alonski/ember-computed-getter-codemod) - Ember.jsのComputed Getter用codemod

### コミュニティ<a id="community"></a>

- [フォーラム](http://discuss.emberjs.com/)
- [GitHubのIssue](https://github.com/emberjs/ember.js/issues)
- [Reddit](https://www.reddit.com/r/emberjs/)
- [Slack](https://embercommunity.slack.com)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/ember.js)
- [Telegram](https://t.me/ember_js)

### Emberコミュニティへの参加ガイド<a id="contribution-guides"></a>

- [How to contribute to the ember times - part1](https://www.kennethlarsen.org/how-to-contribute-to-the-ember-times)
- [How to contribute ember release post - part2](https://www.kennethlarsen.org/how-to-contribute-ember-release-post)

### 講座<a id="courses"></a>

- [embermap.com](https://embermap.com)
- [Emberschool.com](https://www.emberschool.com)
- [embercasts.com](https://www.embercasts.com)
- [Frontend Masters: Advanced Ember.js 2.x - Mike North](https://frontendmasters.com/courses/advanced-ember-2/)
- [Frontend Masters: Ember.js 2.x - Mike North](https://frontendmasters.com/courses/ember-2/)

### 関連資料の探索<a id="discovery"></a>

- [emberobserver](https://emberobserver.com/) - Ember Observer
- [emberjs.GitHub.io/rfcs/](https://emberjs.github.io/rfcs/) - Ember.jsのRFC

### Emberのリリース<a id="ember-releases"></a>

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

### 実装例<a id="examples"></a>
- [オープンソースのEmber.jsアプリケーション一覧](https://github.com/EmberSherpa/open-source-ember-apps)
- [ember-orbit用の連絡先管理デモアプリケーション](https://github.com/cerebris/peeps-ember-orbit)
- [API Docs](https://github.com/ember-learn/ember-api-docs) - バージョン別のAPIドキュメントを表示するために構築されたアプリケーション
- [guides-app](https://github.com/ember-learn/guides-app) - emberjs/guidesとEmber.js Guidesの代替アプリケーション
- [Builds](https://github.com/ember-learn/builds) - 各種リリースチャンネルを表示するためにEmber.jsチームが構築したアプリケーション
- [HospitalRun](https://github.com/HospitalRun/hospitalrun-frontend) - HospitalRunのEmber.jsフロントエンド：[hospitalrun.io](http://hospitalrun.io/)
- [Rancher](https://github.com/rancher/ui) - Kubernetesの企業向け管理を行う[Rancher](http://rancher.com)
- [Super Rentals](https://github.com/ember-learn/super-rentals) - Ember.jsでの開発方法に慣れるための入門プロジェクト
- [Travis CI](https://github.com/travis-ci/travis-web) - [Travis CI](https://travis-ci.org/)のEmber.jsウェブクライアント
- [Vault](https://github.com/hashicorp/vault/tree/master/ui/app) - シークレットを管理するツール（Hashicorp）
- [ember-osf-web](https://github.com/CenterForOpenScience/ember-osf-web) - Open Science FrameworkのEmber.jsフロントエンド
- [ember-graphql-examples](https://github.com/chadian/ember-graphql-examples) - Ember.jsでGraphQLを使う実装例
- [ember-rolodex](https://github.com/rtablada/ember-rolodex) - Quick StartとSuper Rentsの間を埋めるEmber.jsチュートリアルの実装例
- [ember-styleguide](https://github.com/ember-learn/ember-styleguide)
- [Ghost Admin Client](https://github.com/TryGhost/Ghost-Admin)
- [emberclear](https://github.com/NullVoxPopuli/emberclear) - 暗号化チャット。履歴なし。ログなし。MU & TS。
- [入れ子のEmber.jsエンジンとFastBootの実装例](https://github.com/catz/eng-test)
- [Ember.jsで構築されたPercyのウェブフロントエンド](https://github.com/percy/percy-web)
- [Fire Tracker](https://github.com/SCPR/fire-tracker) - カリフォルニアの山火事を追跡・調査するKPCCのツール
- [skylines-project](https://github.com/skylines-project/skylines/tree/master/ember) - リアルタイム追跡、飛行データベース、競技用フレームワーク
- [PIX](https://github.com/1024pix/pix-editor) - PIX
- [ember-monorepo-demo](https://github.com/lennyburdette/ember-monorepo-demo)
- [documize.com](https://github.com/documize/community)
- [New York City Census Reporting Tool](https://github.com/NYCPlanning/labs-factfinder)
- [Medicine Inventory](https://github.com/aalasolutions/ember-medical-inventory) - Ember CLI、Corber.io、ember-element-uiを使って開発したサンプルアプリケーション
- [octane-ecommerce](https://github.com/betocantu93/octane-ecommerce) - Ember Octane + FastBoot + Algolia + PayPal + Formspree（[スライド](https://docs.google.com/presentation/d/1YaG26Fj-tVjyFV8LvQJkfIH89-HYdkfHfhdRz3bC2-k/edit#slide=id.g56ccd9a7f0_0_33)、[動画](https://www.youtube.com/watch?v=KnkWs18V9dA&feature=youtu.be)、[デモ](https://octane-ecommerce.herokuapp.com/)）
- [Rustパッケージレジストリ](https://github.com/rust-lang/crates.io) - [crates.io](https://crates.io)
- [Ember.js RealWorld Implementation](https://github.com/gothinkster/ember-realworld) - RealWorldの仕様とAPIに準拠したEmber.jsコードベース。CRUD、認証、高度なパターンなど、実践的な実装例を収録
- [A wild tomster appears](https://github.com/scudco/tomsweeper)
- [Blocklyでビジュアルプログラミングエディターを構築するためのEmber統合](https://github.com/Program-AR/ember-blockly)
- [https://www.submarinecablemap.com/](https://www.submarinecablemap.com/)
- [https://music.apple.com/](https://music.apple.com/)
- [https://creator.emojible.store/](https://creator.emojible.store/)

### Glimmerの実装例<a id="examples-glimmer"></a>
- [breethe-client](https://github.com/simplabs/breethe-client) - 世界各地の空気質データ
- [Glimmeroids](https://github.com/t-sauer/Glimmeroids) - Glimmer.jsによるAsteroidsの実装
- [glimmer-hn-pwa](https://github.com/mhadaily/glimmer-hn-pwa) - Glimmer.jsによるHacker NewsのPWAデモ
- [the-chosen](https://github.com/FLarra/the-chosen) - 学習と、スクラムのデイリーミーティングで次に状況を報告する人の選択に向けて作成したGlimmer.jsプロジェクト
- [glimmer_eats](https://github.com/James-Byrne/glimmer_eats) - Glimmer.jsで構築したPWAデモ
- [built-with-spaghetti](https://github.com/gordonbisnor/built-with-spaghetti) - ウェブアートへの入口として機能することを目指すBuilt with Spaghetti
- [glimmer-live-chat](https://github.com/rajasegar/glimmer-live-chat) - Glimmer.jsで構築したライブチャットアプリケーション
- [glimmer-synth](https://github.com/jimenglish81/glimmer-synth) - WebAudioとGlimmer.jsで構築したシンセサイザー
- [glimmer-js-online-offline-demo](https://github.com/thomasbrus/glimmer-js-online-offline-demo) - オンライン・オフラインのブラウザーイベントを扱うGlimmer.jsのサンプルアプリケーション
- [glimmer-qrious](https://github.com/c0urg3tt3/glimmer-qrious) - QRiousライブラリを使ってウェブページにQRコードを生成するGlimmer.jsコンポーネント
- [glimmerjs-address-book-demo](https://github.com/ttdonovan/glimmerjs-address-book-demo) - Glimmer.jsアプリケーションの実装例：アドレス帳デモ
- [glimmer-dashboard](https://github.com/JustInToCoding/glimmer-dashboard) - Glimmer.jsのダッシュボード実装例
- [glimmer-redux-todo](https://github.com/bashmach/glimmer-redux-todo) - Glimmer.jsとReduxで書かれたTodoアプリケーション
- [glimmer-pong](https://github.com/knownasilya/glimmer-pong) - Glimmer.jsとSVGで書かれたPongゲーム
- [glimmer-material](https://github.com/cyk/glimmer-material) - Material Components for the WebのGlimmer.jsラッパー
- [glimmer-of-life](https://github.com/trentmwillis/glimmer-of-life) - Glimmer.jsによるConwayのライフゲームの実装
- [vorfreude](https://github.com/chadian/vorfreude) - 待ちきれないが待たなければならないときに
- [endless-hoops](https://github.com/mtmckenna/endless-hoops) - JavaScript・Canvas・Glimmer.jsで書かれたバスケットボールゲーム
- [glimmer-hangman](https://github.com/BenSchoenmakers94/glimmer-hangman) - Glimmer.jsによるHangmanゲームの実装

### Gist<a id="gists"></a>
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

### Ember DataのGist<a id="gists-ember-data"></a>
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

### その他<a id="miscellaneous-1"></a>

- [builtwithember](http://builtwithember.io/) - Ember.jsで動作するアプリケーション
- [emberwatch](https://github.com/emberwatch) - Ember.js関連コンテンツのコミュニティ拠点

### ニュースレター<a id="newsletters"></a>

- [Ember Weekly](http://www.emberweekly.com/) - Ember.jsのニュース、ヒント、コードをメールで配信
- [Ember公式ブログ](https://emberjs.com/blog/) - Ember.jsの新バージョンのリリースノートやプロジェクト全体の状況などの主な発表
- [statusboard](https://emberjs.com/statusboard/) - 状況一覧
- [The Ember Times](https://the-emberjs-times.ongoodbits.com/) - Ember.js Learning Teamからの更新情報

### ポッドキャスト<a id="podcasts"></a>

- [embermap](https://embermap.com/topics/the-embermap-podcast)
- [emberweekend](https://emberweekend.com/episodes)

### 試せる環境<a id="sandboxes"></a>
- [Ember Twiddle](https://ember-twiddle.com/) - 複数のファイルを扱え、GitHubに作業を保存できるEmber.jsの実行環境
- [Ember @ Glitch](https://ember.glitch.me/) - Glitch.meでEmber.jsを利用
- [Ember @ CodeSandbox](https://codesandbox.io/s/github/mike-north/ember-new-output) - CodeSandboxでEmber.jsを利用
- [Ember Octane @ CodeSandbox](https://codesandbox.io/s/octane-starter-li841) - Ember Octane用のCodeSandboxテンプレート

### スクリーンキャスト<a id="screencasts"></a>

- [BuildLab: Ember.js Screencasts for the determined.](https://www.youtube.com/channel/UC1ssGKlQh87Ubyuv1lEiY0g)
- [Ember Screencasts](https://www.emberscreencasts.com/) - 忙しい開発者向けの毎週のスクリーンキャスト
- [EmberCasts](http://www.embercasts.com/) - 原リストでは、作者がHandlebarsの次の版に取り組む間は休止中と記載
- [EmberWatch - Screencasts](http://emberwatch.com/screencasts.html) - Ember.jsのスクリーンキャスト集
- [Community Groups App - Creating Records in Ember CLI Mirage (part 2a)](https://www.youtube.com/watch?v=4iqNcTUXurY)
- [Community Groups App - Creating Records in Ember CLI Mirage (part 2b)](https://www.youtube.com/watch?v=eAI1LxgSOqw)
- [Community Groups App - Debugging relationships in Ember CLI Mirage (part 3)](https://www.youtube.com/watch?time_continue=1&v=DRzPJ4RMT0w)

### スライド<a id="slides"></a>

- [30 Days Of Ember](https://slides.com/poslinski_net/30-days-of-ember) - 発表者：Dawid Pośliński
- [NaNoWriMo: How can Ember help you write a novel](https://slides.com/emma_be/nanowrimo-ember#/) - 発表者：@EmmaDelecolle
- [Slides from Ember JS Berlin talk, Design Patterns in Ember](https://github.com/chadian/ember-js-berlin-design-patterns) - 発表者：@chadian
- [Rainy Day Ember Data](https://speakerdeck.com/tonywok/rainy-day-ember-data) - 発表者：Tony Schneider（@tonywok）
- [Building Realtime Apps with Ember.js and WebSockets](https://www.slideshare.net/BenLimmer/building-realtime-apps-with-emberjs-and-websockets) - 発表者：Ben Limmer
- [Deploying a Location-Aware Ember Application](https://www.slideshare.net/BenLimmer/deploying-a-locationaware-ember-application) - 発表者：Ben Limmer
- [Developing Desktop Apps with Electron & Ember.js - FITC WebU2017](https://www.slideshare.net/anulman/developing-desktop-apps-with-electron-emberjs-fitc-webu2017) - 発表者：Aidan Nulman
- [Developing Desktop Apps with Electron & Ember.js](https://www.slideshare.net/fitc_slideshare/developing-desktop-apps-with-electron-emberjs)
- [Ember addons, served three ways](https://www.slideshare.net/mikelnorth/ember-addons-served-three-ways) - 発表者：Mike North
- [Ember At Scale](https://www.slideshare.net/chadhietala/ember-at-scale) - 発表者：Chad Hietala（LinkedIn）
- [EmberConf 2015 – Ambitious UX for Ambitious Apps](https://www.slideshare.net/sugarpirate/emberconf-2015-ambitious-ux-for-ambitious-apps) - 発表者：Lauren Elizabeth Tan
- [EmberConf 2016 – Idiomatic Ember: Finding the Sweet Spot of Performance & Productivity](https://www.slideshare.net/sugarpirate/emberconf-2016-idiomatic-ember-finding-the-sweet-spot-of-performance-productivity) - 発表者：Lauren Elizabeth Tan
- [Fun with Ember 2.x Features](https://www.slideshare.net/BenLimmer/fun-with-ember-2x-features) - 発表者：Ben Limmer
- [How do I Even Web App](https://www.slideshare.net/lydiaguarino/how-do-i-even-web-app) - Lydia Guarinoによる、Ember CLIを使ったウェブプログラミング入門
- [Rapid prototyping and easy testing with ember cli mirage](https://www.slideshare.net/KrzysztofBiaek1/rapid-prototyping-and-easy-testing-with-ember-cli-mirage) - 発表者：Krzysztof Bialek
- [Start Me Up - Building an MVP with EmberJS, Firebase and Material Design](https://www.slideshare.net/PickNBook/start-me-up-building-an-mvp-with-emberjs-firebase-and-material-design) - 発表者：Brendan O'Hara
- [Upgrading Ember.js Apps](https://www.slideshare.net/BenLimmer/upgrading-emberjs-apps) - 発表者：Ben Limmer

### スタイルガイド<a id="styleguides"></a>

- [ember-styleguide](https://github.com/ember-learn/ember-styleguide)
- [Softlayer Ember.js](https://github.com/softlayer/ember-style-guide)
- [Netguru Ember.js](https://github.com/netguru/ember-styleguide)
- [DockYard Ember.js](https://github.com/DockYard/styleguides/blob/master/engineering/ember.md)
- [JavaScript Style Guide](https://github.com/DockYard/styleguides/blob/master/engineering/javascript.md)

### ツール<a id="tools"></a>

- [Ember Data Sails Adapter](https://github.com/bmac/ember-data-sails-adapter) - Sails.jsのソケット用Ember Dataアダプター
- [Ember Data WordPress Adapter](https://github.com/HeyHumanAgency/Ember-Data-WordPress) - WordPress JSON API用のEmber Dataアダプター
- [Ember Gist](http://ember-gist.joostdvrs.com/) - GitHub Gistを使ってEmber CLIに似たアプリケーションをデモ
- [Ember Inspector](https://github.com/emberjs/ember-inspector) - Chrome/Firefoxの開発者ツールにEmber.jsタブを追加し、アプリケーションのEmber.jsオブジェクトを調査。原リストでは公式に保守されていると記載
- [Ember Perf](https://github.com/mike-north/ember-perf) - Ember.jsアプリケーションで、利用者が体感する性能のデータを測定
- [ember-cli-diff](http://www.ember-cli-diff.org/) - 新しいEmberアプリケーション間の違いを確認するツール
- [ember-cli](https://ember-cli.com/) - ウェブアプリケーション向けのコマンドラインインターフェース
- [ember-data-model-maker](https://andycrum.github.io/ember-data-model-maker/) - ember-dataのモデルとペイロードの例を作成するUI
- [Glimmer Playground](https://try.glimmerjs.com/) - Glimmer.jsを試す環境
- [mber](https://github.com/izelnakri/mber) - Ember CLIの代替。原リストではアルファ版と記載
- [remote-inspector](https://github.com/joostdevries/ember-cli-remote-inspector) - 異なる端末やブラウザーで動くアプリケーションを、WebSocketを使ってネットワーク越しに調査
- [Ember Unused Components](https://github.com/vastec/ember-unused-components) - Emberプロジェクトの未使用コンポーネントを検索するスクリプト

### チュートリアル<a id="tutorials"></a>

- [How to learn EmberJS in a hurry](https://medium.com/ember-ish/how-to-learn-emberjs-in-a-hurry-c6fdeae256a0)
- [Discover Ember 2](https://www.ludu.co/course/ember) - Twitterクローンをゼロから構築する方法を学習
- [Ember Components: A Deep Dive](http://code.tutsplus.com/tutorials/ember-components-a-deep-dive--net-35551) - Ember.jsコンポーネントの使い方の詳しい解説
- [Ember runloop handbook](https://github.com/eoinkelly/ember-runloop-handbook) - Ember.jsのrunloopの詳しい解説
- [Ember with Phoenix (AKA The PEEP Stack)](https://medium.com/peep-stack) - [JSON API](http://jsonapi.org/)に準拠する[Phoenix](http://www.phoenixframework.org/)バックエンドと組み合わせて、Ember.jsフロントエンドを開発
- [Getting into Ember.js](http://code.tutsplus.com/tutorials/getting-into-emberjs--net-30709) - 全5回のEmber入門講座
- [Getting Started with Ember.js using Ember CLI](https://thetechcofounder.com/getting-started-with-ember/) - Ember CLIでTodoアプリケーションを構築
- [yoember.com/](http://yoember.com/) - 初心者から上級者向けのEmber.jsチュートリアル
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

### 動画<a id="videos"></a>

- [Working with Ember Animated & Addon Internals: Ember Concurrency – Ember NYC, May 2019](https://www.youtube.com/watch?v=JbxaVHQFou0)
- [Ember.js Tutorial: Build a painting game in 20 mins](https://www.youtube.com/watch?v=N4KrBuO0RRE)
- [Ember-cli In-Repo Addons with Jacob Bixby](https://www.youtube.com/watch?v=VYrMs1Zzpqs)
- [Maintaining an Ember App at Scale, with Chris Ng](https://www.youtube.com/watch?v=gyGZHydh0Hw&feature=em-uploademail)
- [Jackie Luo: From React to Ember: A Modern Comparison](https://www.youtube.com/watch?v=7yxr4iBrZsw)
- [Ember San Francisco Meetup at Square, October 2018](https://www.youtube.com/watch?v=ulWhjL0Aj5s)
- [The Future of Ember js](https://www.youtube.com/watch?v=4b9VbB2bnfw) - EmberConf 2018の発表を基に、その時点で予定されていたEmber.jsの変更を要約
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
- [Web App Performance & Ember.js](https://www.youtube.com/watch?v=BelKk7dvA1A) - ウェブアプリケーションの性能とEmber.js
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
- [Tracking in the Glimmer VM](https://www.youtube.com/watch?v=BjKERSRpPeI) - Chris Garrettによる、Emberでのトラッキングの仕組みの解説
- [Commit Porto '19: Thriving through the hype cycle: an Ember.js story (Ricardo Mendes)](https://www.youtube.com/watch?v=ECkbVa0iC4k)
- [Animating Across Routes with Ember Animated](https://www.youtube.com/watch?v=O4Mt-dDqkk0) - ルートをまたぐ遷移のアニメーションを追加するEmberMap動画
- [Creating an Ember Application](https://www.youtube.com/watch?v=R2JdP4lb5Xw) - 原リストで公開予定とされていたEmber動画シリーズの第1回
- [Ember and GraphQL: A Quick Example](https://www.youtube.com/watch?v=YxRvXgDIHW8)
- [Stef & Rob: do we still need the built-in Input component?](https://www.youtube.com/watch?v=c0Rl6o9wLX0) Stefan PennerとRobert Jacksonが組み込みInputコンポーネントについて議論
- [Ember Octane - Great For Beginners](https://www.youtube.com/watch?v=iTPFsXcTAaY&feature=youtu.be) - Ember OctaneではHTMLとCSSだけでも開発をある程度進められるという説明
- [Yet Another Test Runner by Kelly Sheldon @ Ember London](https://www.youtube.com/watch?v=HYwXL3f854Y&list=PL4eq2DPpyBbmvEzhyW9fhMzlctxwrn8JM&index=1)

### YouTubeチャンネル<a id="youtube-channels"></a>

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

### YouTubeプレイリスト<a id="youtube-playlists"></a>
- [Ember London 2018](https://www.youtube.com/watch?v=EcKaDu0xo_A&list=PL8xuokhAnn4rUlol6aspg-VYetu9BLsWV)
- [Intercom Screencasts](https://www.youtube.com/playlist?list=PLpAr6J-75N27wctNT70O0lubaGTPjwi1L)
- [Ember.js tutorial for beginners in 2020](https://www.youtube.com/watch?v=eQUvN9Ujs1s&list=PLk51HrKSBQ88wDXgPF-QLMfPFlLwcjTlo) - Shawn Chenによる全10回のシリーズ
