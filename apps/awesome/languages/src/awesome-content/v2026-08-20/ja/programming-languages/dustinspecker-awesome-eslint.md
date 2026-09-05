---
title: "Awesome ESLint"
description: "ESLintを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-dustinspecker-awesome-eslint-readme-md"
---

# Awesome ESLint

ESLintを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

- [設定](#configs)
  - [著名な企業・組織の設定](#configs-by-well-known-companiesorganizations)
  - [その他の主要な設定（およそ100スター以上）](#other-prominent-configs-100-stars-or-so)
  - [その他の設定](#other-configs)
- [ESLint設定済み構成](#preconfigured-configs-with-eslint-set-up)
- [プラグイン](#plugins)
  - [コード品質](#code-quality)
  - [互換性](#compatibility)
  - [CSS-in-JS](#css-in-js)
  - [非推奨API](#deprecation)
  - [埋め込みコード](#embedded)
  - [フレームワーク](#frameworks)
  - [言語・環境](#languages-and-environments)
  - [ライブラリ](#libraries)
  - [その他](#misc)
  - [プラクティス・特定のECMAScript機能](#practices-and-specific-es-features)
  - [性能](#performance)
  - [セキュリティ](#security)
  - [スタイル](#style)
  - [テストツール](#testing-tools)
- [パーサー](#parsers)
- [フォーマッター](#formatters)
- [グローバル変数](#globals)
- [ツール](#tools)
- [ESLint向け開発](#developing-for-eslint)
- [チュートリアル](#tutorials)
- [インストール・セットアップ](#installation-and-setup)

## 設定 <a id="configs"></a>

### 著名な企業・組織の設定 <a id="configs-by-well-known-companiesorganizations"></a>

- [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - [Airbnb's style guide](https://github.com/airbnb/javascript) 用の共有設定。
- [Airbnb-babel](https://github.com/davidjbradshaw/eslint-config-airbnb-babel) - AirbnbのESLint設定にBabelサポートを備えたもの
- [Alloy](https://github.com/AlloyTeam/eslint-config-alloy) - React/Vue/TypeScriptプロジェクト向けのプログレッシブESLint設定
- [ESLint](https://github.com/eslint/eslint/tree/master/packages/eslint-config-eslint) - ESLintチームが維持するプロジェクトに使われるESLint設定
- [Facebook](https://www.npmjs.com/package/eslint-config-fbjs) - Facebookのスタイルガイド向けの共有設定
- [Feedzai](https://github.com/feedzai/eslint-config-feedzai) - FeedzaiのJavaScript/Reactプロジェクト向けの共有設定
- [Shopify](https://github.com/Shopify/web-foundation/blob/main/packages/eslint-plugin/README.md) - [Shopify's style guide](https://github.com/Shopify/javascript) 用の共有設定。
- [Wikimedia](https://github.com/wikimedia/eslint-config-wikimedia) - [Wikimedia's style guide](https://www.mediawiki.org/wiki/Manual:Coding_conventions/JavaScript) 用の共有設定。 [MediaWiki](https://www.mediawiki.org/) によって使用される。

### その他の主要な設定（およそ100スター以上） <a id="other-prominent-configs-100-stars-or-so"></a>

- [Auto](https://github.com/davidjbradshaw/eslint-config-auto) - プロジェクトの依存関係に基づいてESLintを自動設定
- [Canonical](https://github.com/gajus/eslint-config-canonical) - [Canonical style guide](https://github.com/gajus/canonical) 用の共有設定。

- [Standard](https://github.com/feross/eslint-config-standard) - JavaScript [Standard Style](https://github.com/feross/standard) 用の共有設定。
- [XO](https://github.com/xojs/eslint-config-xo) - [XO](https://github.com/xojs/xo) 用の共有設定。
- [Antfu Eslint Config](https://github.com/antfu/eslint-config) - AnthonyのESLint設定テンプレート

### その他の設定 <a id="other-configs"></a>

- [Adjunct](https://github.com/davidjbradshaw/eslint-config-adjunct) - メインのESLint設定と併用するのに適したプラグインの集合
- [Ash-Nazg](https://github.com/brettz9/eslint-config-ash-nazg) - すべてを統制する1つの設定
- [Cecilia](https://github.com/SandroMiguel/eslint-config-cecilia) - 素晴らしいプロジェクト向けのESLint設定
- [clean-typescript](https://github.com/cunarist/eslint-config-clean-typescript) - TypeScriptコードベースにおいて、過剰なキーワードを禁止することで古典的なJavaScript機能を強制
- [Hardcore](https://github.com/EvgenyOrekhov/eslint-config-hardcore) - 現存する中で最も厳格（かつ実用的）なESLint設定
- [Problems](https://github.com/RyanZim/eslint-config-problems) - 実際の問題のみを検出する共有設定であり、スタイルの好みを強制しない
- [Supermind](https://github.com/supermind/eslint-config-supermind) - Supermindスタイル向けの共有設定
- [Sheriff](https://github.com/AndreaPontrandolfo/sheriff) - 包括的かつ強い意見を持つESLint設定。TypeScriptを主眼にしたもの

## ESLint設定済み構成 <a id="preconfigured-configs-with-eslint-set-up"></a>

- [Node.js Standard Style](https://github.com/geek/node-style) - Node.jsのコア設定
- [eslint-config-airbnb-extended](https://github.com/eslint-config/airbnb-extended) - 人気のAirbnbスタイルガイドを拡張した強力なESLint設定。TypeScriptへのサポートも備えている
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Prettierチームが維持するESLint向けのPrettier設定
- [Standard](https://github.com/feross/standard) - JavaScript Standard Style
- [Superlint](https://github.com/supermind/superlint) - JavaScript Supermind Style
- [XO](https://github.com/sindresorhus/xo) - JavaScriptの幸せなスタイルリント器 ❤️

## プラグイン <a id="plugins"></a>

### コード品質 <a id="code-quality"></a>

- [depend](https://github.com/es-tooling/eslint-plugin-depend) - 依存関係ツリーの肥大化や不要なポリフィルを検出する
- [GitHub](https://github.com/github/eslint-plugin-github) - GitHubから来た雑多なルール
- [SonarJS](https://github.com/SonarSource/SonarJS/blob/master/packages/jsts/src/rules/README.md) - バグや怪しいパターンを検出するルール
- [Unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) - さまざまな素晴らしいESLintルール
- [@mysticatea/eslint-plugin](https://github.com/mysticatea/eslint-plugin) - 雑多なルール
- [@brettz9/eslint-plugin](https://github.com/brettz9/eslint-plugin) - 不具合、複雑性、保守性等のコード品質を検査するルールを提供します。 `@mysticatea`
- [De Morgan](https://github.com/azat-io/eslint-plugin-de-morgan) - コード内の論理式を変換して読みやすくなるようにする
- [Deslint](https://github.com/jaydrao215/deslint) - AI生成されたフロントエンドコードの設計品質ゲート。React、Vue、Svelte、Angular、およびシンプルHTMLにおいて、任意の色・間隔・タイプグラフィック、設計システムのズレ、レスポンシブカバレッジ、WCAG 2.2 / 2-1 AAアクセシビリティをカバーする20のルール
- [eslint-plugin-code-complete](https://github.com/aryelu/eslint-plugin-code-complete) - クリーンで維持性の高いソフトウェア設計の原則を強制するカスタムESLintプラグイン — Code Completeをインスピレーションに受けて作成
- [eslint-plugin-ai-guard](https://github.com/YashJadhav21/eslint-plugin-ai-guard) - AI生成コードによってよく導入されるバグやセキュリティ問題（非同期の誤用、空のキャッチ、認証の欠如、SQL結合、セレクト）を検出

### 互換性 <a id="compatibility"></a>

- [Compat](https://github.com/amilajack/eslint-plugin-compat) - 使用する API のブラウザ互換性をチェック（ESLint プラグインとして [caniuse](http://caniuse.com/#search=fetch)）。
- [ecmascript-compat](https://github.com/robatwilliams/es-compat) - ブラウザリストのターゲットがサポートしていないECMAScript機能を無効にする
- [es-x](https://github.com/eslint-community/eslint-plugin-es-x) - 特定の ECMAScript バージョンまたは個別の機能を無効にする。長期間メンテナンスされていない `eslint-plugin-es` の適切に維持されたフォーク。
- [es5](https://github.com/nkt/eslint-plugin-es5) - ES5ユーザー向けのESLintプラグイン（ES2015以降の使用を禁止）
- [ie11](https://github.com/Volox/eslint-plugin-ie11) - IE11でサポートされていないES6機能を検出

### CSS-in-JS <a id="css-in-js"></a>

- [CSS-modules](https://github.com/atfzl/eslint-plugin-css-modules) - CSSモジュールの未定義または未使用ルールを検出
- [Emotion](https://github.com/emotion-js/emotion/tree/master/packages/eslint-plugin) - emotion向けのESLintルール
- Styled Components
  - [Better Styled Components](https://github.com/tinloof/eslint-plugin-better-styled-components) - styled-components向けの自動修正可能なESLintルール
  - [styled-components-a11y](https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y) - Styled Componentsのアクセシビリティ対応
- [vanilla-extract](https://github.com/antebudimir/eslint-plugin-vanilla-extract) - CSS-in-JSやStyled Componentsのコードを検査します。 [vanilla-extract CSS](https://github.com/vanilla-extract-css/vanilla-extract)

### 非推奨API <a id="deprecation"></a>

- [deprecate](https://github.com/AlexMost/eslint-plugin-deprecate) - 関数やモジュールを非推奨とマークし、使用時にlintメッセージを表示
- [disable](https://github.com/mradionov/eslint-plugin-disable) - ファイルパスパターンやインラインコメントを使って指定されたプラグインを無効にする

### 埋め込みコード <a id="embedded"></a>

- [HTML](https://github.com/BenoitZugmeyer/eslint-plugin-html) - HTML `<script>` タグ内の JavaScript のチェック。
- [Markdown](https://github.com/eslint/eslint-plugin-markdown) - Markdown 内の JavaScript のチェック。

### フレームワーク <a id="frameworks"></a>

- [Angular](https://github.com/angular-eslint/angular-eslint) - Angular（v2以降）向けのlintルール
- [AngularJS](https://github.com/Gillespie59/eslint-plugin-angular) - [John Papa's AngularJS Styleguide](https://github.com/johnpapa/angular-styleguide) に従ったルールを適用するチェックルール。
- [Astro](https://github.com/ota-meshi/eslint-plugin-astro) - [Astro components](https://docs.astro.build/en/core-concepts/astro-components/) のプラグイン。
- [Backbone](https://github.com/ilyavolodin/eslint-plugin-backbone) - Backboneに対するリント規則
- [Ember](https://github.com/ember-cli/eslint-plugin-ember) - Emberに対するリント規則
- [Hapi](https://github.com/continuationlabs/eslint-plugin-hapi) - hapiに対するリント規則
- [Meteor](https://github.com/meteor/meteor/tree/devel/npm-packages/eslint-plugin-meteor) - Meteor用のESLintリント規則
- React
  - [JSX a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) - JSX要素に対するアクセシビリティ規則
  - [React](https://github.com/yannickcr/eslint-plugin-react) - ReactおよびJSXに対するリント規則
  - [React Hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - React Hooksに対するリント規則
  - [React Native](https://github.com/Intellicode/eslint-plugin-react-native) - React Native用のリント規則
  - [React-Redux](https://github.com/DianaSuvorova/eslint-plugin-react-redux) - React-Redux用のリント規則
  - [React Refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh) - Viteを使用する際のHMR体験を改善
- [Solid](https://github.com/joshwilsonvu/eslint-plugin-solid) - SolidおよびJSXに対するリント規則
- [Svelte](https://github.com/sveltejs/eslint-plugin-svelte) - Svelte v3コンポーネントに対するリ連規則
- Vue
  - [VueJS](https://github.com/vuejs/eslint-plugin-vue) - VueJS用のプラグイン
  - [VueJS Scoped CSS](https://github.com/future-architect/eslint-plugin-vue-scoped-css) - VueJSにおけるScoped CSS用のプラグイン

### 言語・環境 <a id="languages-and-environments"></a>

- [Babel](https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin) - ビルトイン規則への置き換えを追加し、Babel機能を含む
- [eslint-plugin-eslint-plugin](https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin) - ESLintプラグインによるESLintプラグインのリント
- Flow
  - [Flow](https://github.com/gajus/eslint-plugin-flowtype) - Flow型リント規則
  - [Flow Errors](https://github.com/amilajack/eslint-plugin-flowtype-errors) - FlowをESLintプラグインとして実行
- [HTML](https://github.com/yeonjuan/html-eslint) - HTMLに対するESLintプラグイン
- JSON
  - [JSON](https://github.com/azeemba/eslint-plugin-json) - JSONファイルのリント
  - [JSON, package.json](https://github.com/Bkucera/eslint-plugin-json-format) - JSON ファイルのチェック、フォーマット、自動修正。 `package.json` を並べ替え。
  - [JSON with Comments](https://github.com/ota-meshi/eslint-plugin-jsonc) - JSON、JSONC および JSON5 用の ESLint プラグイン
  - [JSON Schema](https://github.com/ota-meshi/eslint-plugin-json-schema-validator) - JavaScript、JSON、YAML および TOML に定義されたデータを JSON Schema Validator で検証
  - [eslint-plugin-package-json](https://github.com/JoshuaKGoldberg/eslint-plugin-package-json) - 一貫性があり、読みやすく、有効な package.json ファイルに対するルール
- [MDX](https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx) - MDX 用の ESLint パーサー／プラグイン
- [N](https://github.com/eslint-community/eslint-plugin-n) - Node.js 用の追加 ESLint ルール。長期間メンテナンスされていない `eslint-plugin-node` の適切に維持されたフォーク。
- [SQL](https://github.com/gajus/eslint-plugin-sql) - ESLint 用の SQL リントルール
- [TOML](https://github.com/ota-meshi/eslint-plugin-toml) - TOML 用の ESLint プラグのルール
- [TypeScript](https://typescript-eslint.io) - TypeScript 用のリントルール
  - [eslint-plugin-erasable-syntax-only](https://github.com/JoshuaKGoldberg/eslint-plugin-erasable-syntax-only) - TypeScript の erasableSyntaxOnly フラグを細かく強制
  - [eslint-plugin-expect-type](https://github.com/JoshuaKGoldberg/eslint-plugin-expect-type) - Twoslash、$ExpectError、$ExpectType の型断言を提供
- [YAML](https://github.com/ota-meshi/eslint-plugin-yml) - YAML 用の ESLint プラグイン

### ライブラリ <a id="libraries"></a>

- GraphQL
  - [dotansimha/graphql-eslint](https://github.com/dotansimha/graphql-eslint) - GraphQL の操作およびスキーマをベストプラクティスで検証、整形、チェック
  - [apollostack/eslint-plugin-graphql](https://github.com/apollostack/eslint-plugin-graphql) - スキーマに照らして GraphQL クエリ文字列を検証
- [TypeGraphQL](https://github.com/borremosch/eslint-plugin-type-graphql) - TypeGraphQL 用のリントルール（よくある誤りを検出）
- [jQuery](https://github.com/wikimedia/eslint-plugin-no-jquery) - jQuery 用のリントルール（非推奨機能に向けたバージョンごとの設定を含む）
- [JSDoc](https://github.com/gajus/eslint-plugin-jsdoc) - 特定のライブラリやAPIの利用方法を検査します。 `@example`
- Lodash
  - [Lodash](https://github.com/wix/eslint-plugin-lodash) - Lodash 用のリントルール
  - [Lodash/fp](https://github.com/jfmengels/eslint-plugin-lodash-fp) - Lodash/fp 用のリントルール
  - [Lodash template](https://github.com/ota-meshi/eslint-plugin-lodash-template) - Lodash テンプレート／Underscore テンプレート用のプラグイン
  - [Microtemplates](https://github.com/platinumazure/eslint-plugin-microtemplates) (Used in Lodash and Underscore.js)
- [Mongodb](https://github.com/nfroidure/eslint-plugin-mongodb) - MongoDB ナイブ Node.js ドライバー用のリントルール
- [Ramda](https://github.com/ramda/eslint-plugin-ramda) - Ramda 用のリントルール
- [RequireJS](https://github.com/cvisco/eslint-plugin-requirejs) - RequireJS 用のリントルール
- [Tailwind CSS](https://github.com/francoismassart/eslint-plugin-tailwindcss) - Tailwind CSS クラス名に対する lint ルール
- [Tailwind CSS v4](https://github.com/schoero/eslint-plugin-better-tailwindcss) - 読みやすさを向上させるフォーマットルールと、ベストプラクティスを強制する lint ルールを用いて、より良い Tailwind CSS を書くための ESLint プラグイン

### その他 <a id="misc"></a>

- [Diff](https://github.com/paleite/eslint-plugin-diff) - 変更された行だけに ESLint を実行。また CI にも対応！
- [Misc](https://github.com/ilyub/eslint-plugin-misc) - カスタムチェックや第三者ルールのラップ（変更）に関するルールを含むその他ルール
- [Notice](https://github.com/nickdeis/eslint-plugin-notice) - ファイルのトップ部分をチェックし、修正する ESLint ルール
- [Only-Error](https://github.com/davidjbradshaw/eslint-plugin-only-error) - すべてのルールをエラーに変換
- [Only-Warn](https://github.com/bfanger/eslint-plugin-only-warn) - すべてのルールを警告に変換
- [PutOut](https://github.com/coderaiser/putout/tree/master/packages/eslint-plugin-putout) - ESLint プラグインとして [putout](https://github.com/coderaiser/putout) チェッカーを統合。
- [TypeLint](https://github.com/yarax/eslint-plugin-typelint) - 既存のスキーマ（Swagger、Redux）に基づき型を導入し、オブジェクトプロパティへのアクセスをチェックすることで `undefined` エラーを防止。
- [Woke](https://github.com/amwmedia/eslint-plugin-woke) - 不適切な言葉を検出することで、包摂的なコードベースを促進

### プラクティス・特定のECMAScript機能 <a id="practices-and-specific-es-features"></a>

- [array-func](https://github.com/freaktechnik/eslint-plugin-array-func) - es2015 の配列メソッドや関数の使用時に冗長性を避ける
- [arrow functions](https://github.com/getify/eslint-plugin-proper-arrows) - 適切な矢印関数定義を確保する ESLint ルール
- [boundaries](https://github.com/javierbrea/eslint-plugin-boundaries) - プロジェクト内の要素がファイル構成と依存関係を尊重しているかを確認するアーキテクチャ境界の尊重を保証
- [@eslint-community/eslint-plugin-eslint-comments](https://github.com/eslint-community/eslint-plugin-eslint-comments) - ESLint ディレクティブコメントに関するベストプラクティス（`/*eslint-disable*/` など）。長期間メンテナンスされていない `eslint-plugin-eslint-comments` の適切に維持されたフォーク。
- [eslint-plugin-error-cause](https://github.com/Amnish04/eslint-plugin-error-cause) - 例外を再スローする際に元のエラー文脈を保持するプラグイン
- [eslint-plugin-hexagonal-architecture](https://github.com/CodelyTV/eslint-plugin-hexagonal-architecture) - ヘキサゴナルアーキテクチャのベストプラクティスを強制するプラグ術
- [eslint-plugin-hex-under](https://github.com/2nd-Labs/eslint-plugin-hex-under) - 指定された値より小さい16進数が存在するかを確認するプラグイン
- [eslint-plugin-signature-design](https://github.com/Vladyslav-Soldatenko/eslint-plugin-signature-design) - 同じ型のパラメータが非常に多い関数を禁止し、オブジェクトベースの署名を推奨し、プリミティブの過剰使用を防ぐ
- [eslint-plugin-write-good-comments](https://github.com/kantord/eslint-plugin-write-good-comments) - コメントにおける良い書き方を強制する ESLint ルール
- [eslint-plugin-exception-handling](https://github.com/Akronae/eslint-plugin-exception-handling) - エラーを投げうる未処理関数を検出する lint ルール
- [fp](https://github.com/jfmengels/eslint-plugin-fp) - 関数型プログラミングに特化した ESLint ルール
- [functional](https://github.com/jonaskello/eslint-plugin-functional) - JavaScript および TypeScript において、変更の禁止と関数型プログラミングの推進を促進する ESLint ルール
- [mutate](https://github.com/gchumillas/eslint-plugin-mutate) - パラメータの誤操作を防ぐために、明示的な `mut` 前綴（JavaScript）または `Mut<T>` 型アノテーション（TypeScript）を強制。
- [ime-safe-form](https://github.com/hiroya-uga/eslint-plugin-ime-safe-form) - IME フォーム入力中の誤操作を防ぐために、 `e.isComposing` ガードまたはフォーム `submit` イベントを必要とする。
- [Immutable](https://github.com/jhusain/eslint-plugin-immutable) - JavaScript においてすべての変更を無効にする
- [import](https://github.com/benmosher/eslint-plugin-import) - ES2015+のimport/export構文のリントチェックを行い、ファイルパスやimport名のスペルミスによる問題を防止する。
- [import-x](https://github.com/un-ts/eslint-plugin-import-x) - ES2015+ のインポート/エクスポート構文のチェックを行い、ファイルパスやインポート名の誤字を防ぐ。長期間メンテナンスされていない `eslint-plugin-import` の軽量フォークだが、バックワード互換性を破る。
- [logical-imports](https://gitlab.com/philbooth/eslint-plugin-logical-imports) - ローカル名でインポートを論理的に並べる。
- [Math](https://github.com/ota-meshi/eslint-plugin-math) - MathオブジェクトおよびNumberに関連するESLintプラグイン。
- [new-with-error](https://github.com/Trott/eslint-plugin-new-with-error) - エラーが `new` を使って投げられるようにする

- [no-argument-spread](https://github.com/causalhq/eslint-plugin-no-argument-spread) - 大きな配列に対してスタックオーバーフローを引き起こす可能性のある `Math.max(...args)` といった表現に対してlintをかける
- [no-comments](https://github.com/wisniewski94/eslint-plugin-no-comments) - バンドラーが使われていない場合にコメントがプロダクションに漏れるのを防ぎ、開発者が古いコード行をコメントアウトするのを阻止する。
- [no-constructor-bind](https://github.com/markalfred/eslint-plugin-no-constructor-bind) - クラスプロパティの使用を促進し、 `this` と `bind` の組み合わせやコンストラクタ内で状態を設定する場合を報告する
- [no-inferred-method-name](https://github.com/johnstonbl01/eslint-no-inferred-method-name) - オブジェクトリテラル内の推定されたメソッド名をチェックするためのカスタムESLintルール。
- [no-loops](https://github.com/buildo/eslint-plugin-no-loops) - 2019年なのにまだループを使っているの？
- [no-restricted-syntax](https://github.com/brettz9/eslint-plugin-query) - クエリされた構文の内容をメッセージに表示する。
- [no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) - 拡張されたネイティブオブジェクトの使用を防ぐ。
- [Promise](https://github.com/xjamundx/eslint-plugin-promise) - プロミスを使った開発におけるベストプラクティス。
- [pure](https://github.com/purely-functional/eslint-plugin-pure) - 副作用のない純粋関数を強制する。
- [ReDoS](https://makenowjust-labs.github.io/recheck/docs/usage/as-eslint-plugin/) - 再実行拒否（ReDo等）の可能性のある脆弱性を検出するためのESLintプラグイン。
- [ReDoSDetector](https://github.com/tjenkinson/eslint-plugin-redos-detector) - 再実行拒否（ReDo等）の可能性のある脆弱性を検出するためのESLintプラグイン。
- [RegExp](https://github.com/ota-meshi/eslint-plugin-regexp) - 正規表現の誤りやスタイルガイド違反を検出するためのESLintプラグイン。
- [sort-keys-fix](https://github.com/leo-buneev/eslint-plugin-sort-keys-fix) - ESLintの `sort-keys` ルールに対してフィクスを追加する
- [this](https://github.com/matijs/eslint-plugin-this) - 純関数を書くこと、 `this` を許可しない
- [toplevel](https://github.com/HKalbasi/eslint-plugin-toplevel) - モジュールトップレベルでの副作用を禁止するためのESLintプラグイン。

### 性能 <a id="performance"></a>

- [DOM](https://github.com/amilajack/eslint-plugin-dom)
- [Optimize Regex](https://github.com/BrainMaestro/eslint-plugin-optimize-regex) - 性能問題につながるコードパターンを検査します。
- Perf-Standard [plugin](https://github.com/Raynos/eslint-plugin-perf-standard) and [Config](https://github.com/Raynos/eslint-config-perf-standard)

### セキュリティ <a id="security"></a>

- [no-secrets](https://github.com/nickdeis/eslint-plugin-no-secrets) - 潜在的なシークレットや認証情報の検出を行うESLintプラグイン。
- [no-unsanitized](https://github.com/mozilla/eslint-plugin-no-unsanitized) - セキュリティ上危険なコードパターンを検査します。 `innerHTML` `outerHTML`
- [pii](https://github.com/shiva-hack/eslint-plugin-pii) - コード内のPII（個人情報）の適合性をチェック・強制する。つまり、コメントや文字列リテラルにメールアドレス、誕生日、IPアドレス、電話番号は一切含まれてはならない。
- [pg](https://github.com/interlace-collie/eslint/tree/main/packages/eslint-plugin-pg) - PostgreSQL/node-postgresセキュリティ：SQLインジェクション防止（CWE-89）、接続プールの漏洩検出（CWE-772）、トランザクションの安全性。CWEマッピング付きの13のルール。
- [Security](https://github.com/nodesecurity/eslint-plugin-security) - Nodeセキュリティ向けのESLintルール。
- [xss](https://github.com/Rantanen/eslint-plugin-xss) - コードベース内のXSS問題を生産環境に到達する前に検出する。

### スタイル <a id="style"></a>

- [ESLint Stylistic](https://eslint.style/) - [Formatting and stylistic ESLint core rules moved to this project and are maintained by the community.](https://eslint.org/blog/2023/10/deprecating-formatting-rules/)
- [const case](https://www.npmjs.com/package/eslint-plugin-const-case) - 定数プリミティブリテラルのキャピタル化を強制する。
- [editorconfig](https://github.com/platinumazure/eslint-plugin-editorconfig) - [`.editorconfig`](https://editorconfig.org/) からルールを派生させる
- [filenames](https://github.com/selaux/eslint-plugin-filenames) - JavaScriptファイルのファイル名を一貫性を持たせるための設定。ESLint 9と互換性がなく、もう維持されていません。
- [Simple import sort](https://github.com/lydell/eslint-plugin-simple-import-sort) - インポートの並び順を自動で修正可能な機能。
- [perfectionist sorting](https://github.com/azat-io/eslint-plugin-perfectionist) - オブジェクト、インポート、TypeScriptの型、エnum、JSXプロパティなど、すべてを並び順に整列。
- [split-and-sort-imports](https://github.com/sngn/eslint-plugin-split-and-sort-imports) - インポートを並び順に整列し、複数のインポートを1行に分割。
- [Switch case](https://github.com/lukeapage/eslint-plugin-switch-case) - ESLint向けのswitch-caseに特化したルール。
- [padding](https://github.com/mu-io/eslint-plugin-padding) - 文の間のインデントを許容／禁止できる。
- [paths](https://github.com/vitonsky/eslint-plugin-paths) - tsconfig/jsconfigのパスを使用し、相対パスをエイリアスに自動修正。
- [@gitbutler/no-relative-imports](https://www.npmjs.com/package/@gitbutler/no-relative-imports) - tsconfigのパスを使用し、相対パスをエイリアスに自動修正。tsconfigの継承を考慮。

### テストツール <a id="testing-tools"></a>

- [AVA](https://github.com/avajs/eslint-plugin-ava) - AVA向けのチェックルール。
- Chai
  - [expect practices](https://github.com/turbo87/eslint-plugin-chai-expect)
  - [with unused expressions](https://github.com/ihordiachenko/eslint-plugin-chai-friendly)
  - [permitted keywords](https://github.com/gavinaiken/eslint-plugin-chai-expect-keywords)
  - [with chai-as-promised plugin](https://github.com/fintechstudios/eslint-plugin-chai-as-promised)
  
  - [globals](https://github.com/t-huth/eslint-plugin-chai-assert-bdd)
- [Cucumber](https://github.com/darrinholst/eslint-plugin-cucumber) - Cucumber向けのチェックルール。
- [Cypress](https://github.com/cypress-io/eslint-plugin-cypress) - Cypress向けのチェックルール。
- [Jasmine](https://github.com/tlvince/eslint-plugin-jasmine) - Jasmine向けのチェックルール。
- Jest
  - [Enforcing practices](https://github.com/jest-community/eslint-plugin-jest) - Jest向けのチェックル及。
  - [Enforcing consistent formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting) - Jest向けのフォーマットルール。
  - [Jest-async](https://www.npmjs.com/package/eslint-plugin-jest-async) - Jest向けの非同期チェックルール。
  - [Jest-DOM](https://github.com/testing-library/eslint-plugin-jest-dom) - Jest-DOM向けのチェックルール。
- Vitest
  - [ESLint Plugin Vitest](https://github.com/vitest-dev/eslint-plugin-vitest) - Vitest向けのESLintプラグイン。
- Mocha
  - [Enforcing practices](https://github.com/lo1tuma/eslint-plugin-mocha) - Mocha向けのチェックルール。
  - [Enforcing manageability](https://github.com/onechiporenko/eslint-plugin-mocha-cleanup/)
- [Playwright](https://github.com/playwright-community/eslint-plugin-playwright) - Playwright向けのチェックルール。
- [QUnit](https://github.com/platinumazure/eslint-plugin-qunit) - QUnit向けのチェックルール。
- [TestCafe-Community](https://github.com/testcafe-community/eslint-plugin-testcafe-community) - テストフレームワーク固有のコードとプラクティスを検査します。 [TestCafe globals](https://github.com/miherlosev/eslint-plugin-testcafe)
- [Testing Library](https://github.com/testing-library/eslint-plugin-testing-library) - テストライブラリ用のリントルール

## パーサー <a id="parsers"></a>

- [babel-eslint-parser](https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser) - 素晴らしいESLintで、すべての有効なBabelコードをリントできる
- [TypeScript](https://typescript-eslint.io/packages/parser) - ESLintと互換性のある出力を作成するTypeScriptパーサー
- [BrightScript](https://github.com/RokuRoad/eslint-plugin-roku) - Roku開発用のBrightScriptプラグイン。パーサーとルールを含む
- [GraphQL](https://github.com/dotansimha/graphql-eslint) - GraphQL AST用のパーサー。パーサー、プラグイン、プロセッサ（非GraphQLファイル用）、ルールを含む

## フォーマッター <a id="formatters"></a>




- [html](https://github.com/shuoshubao/eslint-formatter-html) - 拡張されたESLintフォーマッター
- [badger](https://github.com/brettz9/eslint-formatter-badger) - ESLintの結果をSVGベースのバッジで要約（例：READMEに使用）
- [git-log](https://github.com/JamieMason/eslint-formatter-git-log) - Git Author、Date、Hashを含むESLintフォーマッター
- [github](https://github.com/hipstersmoothie/eslint-formatter-github) - プルリクエスト内にESLintのエラーと警告を直接表示
- [gitlab](https://gitlab.com/remcohaszing/eslint-formatter-gitlab) - GitLabコード品質結果にESLint結果を出力
- [mo](https://github.com/fengzilong/eslint-formatter-mo) - 見た目が良く、読みやすいESLintフォーマッター
- [SARIF](https://www.npmjs.com/package/@microsoft/eslint-formatter-sarif) - GitHub Advanced SecurityなどにインポートできるSARIF形式の結果を生成
- [summary-chart](https://github.com/davidjbradshaw/eslint-formatter-summary-chart) - ESLint出力をバーチャートにフォーマット

## グローバル変数 <a id="globals"></a>

- [confusing-browser-globals](https://github.com/facebook/create-react-app/tree/main/packages/confusing-browser-globals) - ブラウザのグローバル変数の中でもよく誤解を招き、window.の明示的な修飾なしで使用するのは推奨されないものとして選ばれた一覧
- [ES and browser globals](https://github.com/sindresorhus/globals) (originally from ESLint)
- [chai globals](https://github.com/t-huth/eslint-plugin-chai-assert-bdd)
- [TestCafe globals](https://github.com/miherlosev/eslint-plugin-testcafe) - TestCafe用の `fixture` および `test` グローバル変数

## ツール <a id="tools"></a>

- [es-file-traverse](https://github.com/brettz9/es-file-traverse) - 入力ファイルまたはファイル群からインポートやrequireに基づいて使用されているファイルのみをリストアップし、ESLintに渡せるリストを生成。特に3rdパーティ依存関係のリントに適している
- [eslint-find-rules](https://github.com/sarbbottam/eslint-find-rules) - カスタム設定に含まれていないESLintの標準ルールを発見
- [eslint-index](https://github.com/wagerfield/eslint-index) - ESLint設定ファイル内のルールを検索および管理するCLIツール
- [eslint-interactive](https://github.com/mizdra/eslint-interactive) - 大量のESLintエラーを修正するためのCLIツール
- [eslint-multiplexer](https://github.com/pimlie/eslint-multiplexer) - 複数のESLint結果をマルチプレックスし、共通ファイルの結果をマージ
- [eslint-nibble](https://github.com/IanVS/eslint-nibble) - 1つのルールずつ修正することでESLintに慣れやすくする
- [eslint-plugin-rule-adoption](https://github.com/Jugbot/eslint-plugin-rule-adoption) - インクリメンタルルール導入に向けたESLintプラグイン。 `--fix` およびコードモッドが不十分な場合に。
- [eslint-rule-documentation](https://github.com/jfmengels/eslint-rule-documentation) - ESLintルールのドキュメントURLを検索する
- [ESlint Rules Index](https://eslint-rules-index.vercel.app/) - ESLintのルールを一覧にした大きなテーブルで、開発者が簡単に見つけられるようにする。
- [eslint-watch](https://github.com/rizowski/eslint-watch) - watchモードでESLintを実行。
- [codacy-eslint](https://github.com/codacy/codacy-eslint) - [Codacy](https://www.codacy.com) で Docker を使用して ESLint を実行。
- [esprint](https://github.com/pinterest/esprint) - 複数のスレッドでESLintを実行。
- [generator-eslint](https://github.com/eslint/generator-eslint) - ESLint
  プラグインとルールを[Yeoman](http://yeoman.io/)で生成します。
- [editor-info](https://github.com/fisker/editor-info) - 編集器やIDE内かどうかを検出し、その種類を特定し、ESLintの設定をそれに応じて調整できるようにする。
- [eslint-dashboard](https://github.com/fengzilong/eslint-dashboard) - ターミナル内に存在するインタラクティブなESLintワークフロー。
- [eslint-remote-tester](https://github.com/AriPerkkio/eslint-remote-tester) - 複数のリポジトリに対して与えられたESLintルールを一括でテストするためのCLIツール。
- [eslint-disable-autofix](https://github.com/MorevM/eslint-disable-autofix/) - 特定のESLintルールに対してautofixを無効にするためのユーティリティ。

## ESLint向け開発 <a id="developing-for-eslint"></a>

- [eslint-doc-generator](https://github.com/bmish/eslint-doc-generator) - あなたのESLintプラグインのドキュメントを生成し、readmeにルールテーブル、ルールドキュメントにヘッダーを提供。
- [eslint-docgen](https://github.com/wikimedia/eslint-docgen) - ルールメタデータとテストケースからESLintプラグインのドキュメントを自動生成。

## チュートリアル <a id="tutorials"></a>

- [Creating an ESLint Plugin](https://medium.com/tumblbug-engineering/creating-an-eslint-plugin-87f1cb42767f) - ESLintルールとプラグインの作成方法を解説する記事。
- [Lint Like It's 2015](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48#.5p3yk0b03) - ESLintを使用するメリットを解説する記事。
- [Writing a rule to spot undeclared props hiding in plain sight](http://blog.cowchimp.com/writing-a-custom-eslint-rule-to-spot-undeclared-props/) - スコープ分析を必要とするルールを作成する方法についての記事。
- [Dear Old ESLint](https://adropincalm.com/blog/dear-old-eslint/) - ESLintの概要を紹介する短い記事。

## インストール・セットアップ <a id="installation-and-setup"></a>

- [Lintier](https://github.com/josh-stillman/lintier) - ESLintと関連ツールの初期設定を支援します。
