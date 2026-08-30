---
title: "web-padawan/awesome-lit"
description: "web-padawan/awesome-lit の定本スナップショット"
licenseSource: "github-web-padawan-awesome-lit-readme-md"
---

# Awesome Lit [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> 優れたLitリソースを厳選したリスト。

[Lit](https://github.com/lit/lit) — 高速で軽量なWeb Componentsを構築するための簡潔なライブラリ。

Litの中核は、リアクティブな状態、スコープ付きスタイル、小さく高速で表現力のある宣言的テンプレートシステムを提供し、定型コードを取り除くコンポーネント基底クラスです。

## 目次

- [一般リソース](#general-resources)
- [コミュニティ](#community)
- [概要](#overview)
- [スターターテンプレート](#starter-templates)
- [コードラボ](#codelabs)
- [チュートリアル](#tutorials)
- [例](#examples)
- [Lit Labs](#lit-labs)
- [拡張機能](#extensions)
- [デザインシステム](#design-systems)
- [コンポーネントライブラリ](#component-libraries)
- [単独コンポーネント](#standalone-components)
- [メタフレームワーク](#meta-frameworks)
- [ツール](#tools)
  - [ビルド](#building)
  - [Lint](#linting)
  - [IDEプラグイン](#ide-plugins)
  - [TypeScriptプラグイン](#typescript-plugins)
  - [その他のツール](#other-tools)
- [CDN](#cdn)
- [統合](#integrations)
- [動画](#videos)
- [ポッドキャスト](#podcasts)
- [アーカイブ](#archive)
- [類似ライブラリ](#similar-libraries)
- [その他のAwesomeリソース](#other-awesome-resources)

## 一般リソース

- [ドキュメント](https://lit.dev/docs/)
- [チュートリアル](https://lit.dev/tutorials/)
- [Playground](https://lit.dev/playground/)
- [ブログ](https://lit.dev/blog/)

## コミュニティ

- [Discord](https://discord.com/invite/buildWithLit)
- [GitHub](https://github.com/lit/lit)
- [GitHub Discussions](https://github.com/lit/lit/discussions)
- [Twitter](https://twitter.com/buildWithLit)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/lit+or+lit-html+or+lit-element)
- [YouTube](https://www.youtube.com/channel/UCok4ZKSzM3jY7JQRMlF-DPg/)

## 概要

- [超高速テンプレートとWeb Components: lit-html & LitElement](https://developers.google.com/web/updates/2019/02/lit-element-and-lit-html)
- [Lit 2.0: Litとの再会！](https://lit.dev/blog/2021-04-21-lit-2.0-meet-lit-all-over-again/)
- [Lit 2安定版リリースのお知らせ](https://lit.dev/blog/2021-09-21-announcing-lit-2/)

## スターターテンプレート

- [Gracile Starters](https://github.com/gracile-web/starter-projects) - Gracileのフルスタックスタータープロジェクト（SSR／SSG）。
- [LitElement JavaScript starter](https://github.com/lit/lit-element-starter-js) - JavaScriptでLitElementを使うサンプルコンポーネント。
- [LitElement TypeScript starter](https://github.com/lit/lit-element-starter-ts) - TypeScriptでLitElementを使うサンプルコンポーネント。
- [hello-web-components](https://github.com/fernandopasik/hello-web-components) - Litを使いTypeScriptで書かれた簡潔なスターターWeb Component。
- [Lit Sass JavaScript Starter](https://github.com/e111077/lit-sass-js-starter) - Rollupを使い、SASS、JS、Litを簡潔に設定したプロジェクト。
- [Lit Sass TypeScript Starter](https://github.com/e111077/lit-sass-ts-starter) - Rollupを使い、SASS、TS、Litを簡潔に設定したプロジェクト。
- [Lit Webpack Starter](https://github.com/andrewlevada/webpack-lit-template) - Webpackを使うLit・TypeScript製マルチページアプリのスターター。
- [Open Web Components Generator](https://open-wc.org/docs/development/generator/) - Open Web Componentsの推奨事項に基づくスターターアプリ。
- [pwa-starter](https://github.com/pwa-builder/pwa-starter) - PWABuilder pwa-starterのLitElement版。
- [pwa-lit-template](https://github.com/IBM/pwa-lit-template) - 現代的なWeb標準に従ってProgressive Web Applicationを構築します。
- [Vite Lit Element TS SASS](https://github.com/e111077/vite-lit-element-ts-sass) - Lit 2、TypeScript、SASSを使うViteプロジェクトの例。
- [Vite Lit Starter](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-lit) - Vite向けLitベースのテンプレートプリセット。
- [Vite Lit TS Starter](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-lit-ts) - Vite向けLit・TypeScriptベースのテンプレートプリセット。
- [Vite Lit + Intlayer](https://github.com/aymericzip/intlayer-vite-lit-template) - アプリとデザインシステム向けのコンポーネント単位i18nソリューション。
- [Vite Lit + Tailwind](https://github.com/lloydrichards/base_lit-with-tailwind) - Tailwind v4を使えるよう変更したVite・Litスターター。

## コードラボ

- [lit-elementでBrick Viewerを構築する](https://codelabs.developers.google.com/codelabs/lit-brick-viewer#0)
- [lit-elementでStory Componentを構築する](https://codelabs.developers.google.com/codelabs/lit-story-viewer#0)
- [Web ComponentからLit Elementへ](https://codelabs.developers.google.com/codelabs/the-lit-path#0)
- [lit-html & lit-element: 基礎](https://open-wc.org/codelabs/basics/lit-html.html#0)
- [lit-html & lit-element: 中級](https://open-wc.org/codelabs/intermediate/lit-html.html#0)
- [React開発者のためのLit](https://codelabs.developers.google.com/codelabs/lit-2-for-react-devs#0)

## チュートリアル

- [Litを使ってレトロなドラッグ可能Web Componentを構築する](https://www.smashingmagazine.com/2022/09/building-retro-draggable-web-component-using-lit/)
- [Litでリッチテキストエディターを構築する](https://rodydavis.com/posts/lit-rich-text-editor)
- [Litによるドラッグ可能DOM](https://rodydavis.com/posts/lit-draggable-dom)
- [LitElementとTypeScriptを始める](https://labs.thisdot.co/blog/getting-started-with-litelement-and-typescript)
- [最小限で簡潔なRedux Toolkit・LitElementの例](https://dev.to/jdvivar/here-s-a-minimalist-no-frills-redux-toolkit-litelement-example-1j91)
- [LitでJSONをHTMLテーブルへ変換](https://rodydavis.com/posts/lit-html-table)
- [lit-html 第1部 - Web ComponentsのDOM管理ソリューション](https://terodox.tech/handling-web-component-markup-with-lit-html/)
- [lit-html 第2部 - 属性とプロパティを扱う](https://terodox.tech/lit-html-part-2/)
- [LitとFigma](https://rodydavis.com/posts/figma-and-lit)
- [LitとFlutter](https://rodydavis.com/posts/flutter-and-lit)
- [LitとMonaco Editor](https://rodydavis.com/posts/lit-monaco-editor)
- [LitとVSCode Extensions](https://rodydavis.com/posts/lit-vscode-extension)
- [Lit Sheet Music](https://rodydavis.com/posts/lit-sheet-music)
- [Vaadin Router、LitElement、TypeScriptによるナビゲーションライフサイクル](https://labs.thisdot.co/blog/navigation-lifecycle-using-vaadin-router-litelement-and-typescript)
- [SVGと&lt;lit-element&gt;でArduino Pushbuttonを再現する](https://www.smashingmagazine.com/2020/01/recreating-arduino-pushbutton-svg/)
- [LitElementとTypeScriptによるルーティング管理](https://labs.thisdot.co/blog/routing-management-with-litelement)
- [Litについて知っておくべきこと](https://dev.to/open-wc/some-things-to-know-about-litelement-282c)

## 例

- [Lit Native](https://github.com/rodydavis/lit-native) - Lit Web Componentsをネイティブプラットフォームで再利用します。
- [Lit Node Editor](https://github.com/rodydavis/lit-node-editor) - Canvas APIと簡潔なグラフデータ構造で構築されたノードエディター。
- [Lit 3D Piano](https://github.com/rodydavis/lit-3d-piano) - Lit、Three.js、Tone.jsで構築された3Dピアノ。
- [Open Web Components Examples](https://open-wc.org/guides/developing-components/code-examples/#lit-html-and-lit-element) - Litを使う一般的なパターンのコード例。
- [Polymer → Lit Migration Guide](https://kevinpschaaf.github.io/lit-migration-guide) - PolymerからLitへの移行方法を示すコード例。
- [Vite + RxDB + Lit](https://github.com/rodydavis/vite-rxdb-lit) - ViteでRxDBを動かす最小限の例。

## Lit Labs

- [`@lit/localize`](https://www.npmjs.com/package/@lit/localize) - Litで構築されたWebアプリケーションをローカライズするライブラリとCLIツール。
- [`@lit-labs/ssr`](https://www.npmjs.com/package/@lit-labs/ssr) - Litのテンプレートとコンポーネントをサーバー側レンダリングするパッケージ。
- [`@lit-labs/motion`](https://www.npmjs.com/package/@lit-labs/motion) - 動きを付けるためのLitディレクティブ。
- [`@lit-labs/react`](https://www.npmjs.com/package/@lit-labs/react) - Web ComponentsとリアクティブLitコントローラーのReact統合。
- [`@lit-labs/scoped-registry-mixin`](https://www.npmjs.com/package/@lit-labs/scoped-registry-mixin) - 提案を評価してフィードバックを促すため、試験的なScoped CustomElementRegistry polyfillと統合するLitElement用mixin。
- [`@lit-labs/task`](https://www.npmjs.com/package/@lit-labs/task) - 非同期タスクを描画するLit用コントローラー。
- [`@lit-labs/virtualizer`](https://www.npmjs.com/package/@lit-labs/virtualizer) - Litへ仮想スクロールを提供するパッケージ。

## 拡張機能

- [`@adobe/lit-mobx`](https://www.npmjs.com/package/@adobe/lit-mobx) - Litでmobxを使うためのmixinと基底クラス。
- [`@apollo-elements/lit-apollo`](https://www.npmjs.com/package/@apollo-elements/lit-apollo) - LitElementとApollo GraphQLの統合。
- [`@lit-app/state`](https://www.npmjs.com/package/@lit-app/state) - Lit 2向けの軽量で簡潔なグローバル状態管理。
- [`@shoelace-style/localize`](https://github.com/shoelace-style/localize) - Lit向けディレクティブを提供する、Custom Elementsローカライズ用マイクロライブラリ。
- [`@stefanholzapfel/lit-state`](https://www.npmjs.com/package/@stefanholzapfel/lit-state) - Lit 2向け軽量リアクティブ状態管理。
- [`@tanstack/lit-table`](https://tanstack.com/table/latest/docs/framework/lit/lit-table) - Litで高機能なテーブルとデータグリッドを構築するヘッドレスUI。
- [`@vaadin/form`](https://www.npmjs.com/package/@vaadin/form) - TypeScriptとLitでフォームを構築するユーティリティ集。
- [`dark-theme-utils`](https://www.npmjs.com/package/dark-theme-utils) - Web Componentsで構築されたダークモード用ユーティリティ。
- [`exome`](https://www.npmjs.com/package/exome) - Litに対応する、深くネストした状態向け状態マネージャー。
- [`pure-lit`](https://github.com/MatthiasKainer/pure-lit) - Lit要素を純粋関数として登録します。
- [`lit-composition`](https://www.npmjs.com/package/lit-composition) - LitでWeb Componentsを作成するComposition API。
- [`lit-element-effect`](https://www.npmjs.com/package/lit-element-effect) - LitElement向けEffect hook。
- [`lit-element-state-decoupler`](https://www.npmjs.com/package/lit-element-state-decoupler) - LitElementでコンポーネント外部の状態を扱うユーティリティ。
- [`lit-intlayer`](https://intlayer.org/doc/environment/vite-and-lit) - Intlayerを使ってLitアプリケーションを多言語化します。
- [`lit-redux-router`](https://www.npmjs.com/package/lit-redux-router) - pwa-helpersとReduxを活用したLit向け宣言的ルーティング。
- [`lit-svelte-stores`](https://www.npmjs.com/package/lit-svelte-stores) - Svelte storeを状態管理として使うLitコントローラー。
- [`ullr`](https://github.com/aggre/ullr) - Litと関数型プログラミングでWeb Componentsを構築します。

## デザインシステム

- [AXA Pattern Library](https://github.com/axa-ch-webhub-cloud/pattern-library) - LitElementで構築されたAXA CH UIコンポーネントライブラリ。
- [Brightspace UI core](https://github.com/BrightspaceUI/core) - Brightspaceアプリケーションを構築するWeb Componentsコレクション。
- [Calcite Design System](https://developers.arcgis.com/calcite-design-system/) - ArcGISによるUIキット、アイコン、配色、Web Componentライブラリ。
- [Carbon Web Components](https://github.com/carbon-design-system/carbon-web-components) - Web Components上に構築されたCarbon Design Systemの派生版。
- [Clarity Core Web Components](https://github.com/vmware-clarity/core/tree/main/projects/core) - Clarity Design System向けWeb Componentsスイート。
- [Kor](https://github.com/eduferfer/kor) - オープンソースのDesign Systemと軽量UI Component Library。
- [Lion](https://github.com/ing-bank/lion) - 高性能でアクセシブルかつ柔軟なWeb Components。
- [Material Web Components](https://github.com/material-components/material-web) - Web Componentsとして実装されたMaterial Design。
- [Momentum UI Web Components](https://github.com/momentum-design/momentum-ui/tree/master/web-components) - Momentum Designに基づくUIコンポーネント集。
- [Outline Design System](https://github.com/phase2/outline) - Web Componentベースのデザインシステムスターターキット。
- [Pharos Design System](https://github.com/ithaka/pharos) - 一貫性があり、支援的で美しい体験を作るJSTORのデザインシステム。
- [Red Hat Design System](https://github.com/RedHat-UX/red-hat-design-system) - Red Hatブランドで統一された体験を構築するWeb Components。
- [Spectrum Web Components](https://github.com/adobe/spectrum-web-components) - LitElementで構築されたAdobe Spectrumデザイン言語の実装。
- [UI5 Web Components](https://github.com/SAP/ui5-webcomponents) - ネイティブAPI上にエンタープライズ向け機能を追加します！
- [Vaadin web components](https://github.com/vaadin/web-components) - ビジネスWebアプリケーション向けの高品質Web Components集。
- [Web Awesome](https://github.com/shoelace-style/webawesome) - Font AwesomeによるオープンソースWeb Componentsライブラリ。

## コンポーネントライブラリ

- [AgnosticUI](https://github.com/AgnosticUI/agnosticui) - Lit Web Componentsをプロジェクトへ直接コピーするCLIベースUIコンポーネントライブラリ。ネイティブフレームワーク体験向けにReact・Vueの完全なラッパーを備えます。
- [Apollo Elements](https://github.com/apollo-elements/apollo-elements) - Custom ElementsとApollo GraphQLの融合。
- [Blackstone UI](https://github.com/kjantzer/bui) - lit-htmlとLitElementでインターフェースを作成するWeb Components。
- [Burnish Components](https://github.com/danfking/burnish/tree/main/packages/components) - MCPツール呼び出しの出力をUIとして描画するWeb Components。
- [Chartjs Web Components](https://github.com/fsx950223/chartjs-web-components) - Chart.js向けWeb Components。
- [Clever components](https://github.com/CleverCloud/clever-components) - Clever Cloud製Web Componentsのコレクション。
- [Curvenote](https://github.com/curvenote/article) - 対話型の科学記事を作成するWeb Components。
- [Dile Components](https://github.com/Polydile/dile-components) - Webサイト・アプリケーション向け汎用Web Components。
- [ESP Web Tools](https://github.com/esphome/esp-web-tools) - ESPHomeなどESPベースのファームウェアをブラウザーから書き込めます。
- [Furo Webcomponents](https://github.com/eclipse/eclipsefuro-web) - Eclipse Furoと組み合わせるのに最適な、本番利用可能なWeb Components集。
- [Fusion Web Components](https://github.com/equinor/fusion-web-components) - Equinor Fusionで使われるWeb Components集。
- [Ignite UI Web Components](https://github.com/IgniteUI/igniteui-webcomponents) - Infragisticsによる完全なUIコンポーネントライブラリ。
- [LRNWebComponents](https://github.com/elmsln/lrnwebcomponents) - ELMS:LNが作成した、あらゆるプロジェクト向けWeb Components。
- [M3E](https://github.com/matraic/m3e) - Material 3 Expressiveを実装するWeb Components。
- [Medblocks UI](https://github.com/medblocks/medblocks-ui) - openEHR・FHIRシステムを迅速に開発するWeb Components。
- [Microsoft Graph Toolkit](https://github.com/microsoftgraph/microsoft-graph-toolkit) - Microsoft Graph向けWeb Componentsコレクション。
- [Mutation testing elements](https://github.com/stryker-mutator/mutation-testing-elements) - Mutation testing結果のスキーマと、その可視化用Web Components。
- [One Platform Components](https://github.com/1-Platform/op-components) - Red Hat One Platform向けWeb Components集。
- [PatternFly Elements](https://github.com/patternfly/patternfly-elements) - PatternFlyデザインシステムに基づく軽量Web Components。
- [Playground Elements](https://github.com/PolymerLabs/playground-elements) - Web Componentsによるサーバーレスなコード体験。
- [Stripe Elements](https://github.com/bennypowers/stripe-elements) - Stripe.js v3 ElementsのCustom Elementラッパー。
- [Titanium Elements](https://github.com/LeavittSoftware/titanium-elements) - Leavitt Group Enterprisesが使用する軽量Web Componentsコレクション。
- [TrendChart Elements](https://github.com/WebLogin/trendchart-elements) - 傾向を表す簡潔なグラフを生成するコンポーネント。
- [Umbraco UI Components](https://github.com/umbraco/Umbraco.UI) - Umbraco CMS向けユーザーインターフェースWeb Componentsコレクション。
- [Vidstack Elements](https://github.com/vidstack/vds-elements) - 仕様準拠でカスタマイズ・拡張可能、アクセシブルかつ汎用的なメディア要素。
- [VSCode Webview Elements](https://github.com/bendera/vscode-webview-elements) - Webview APIを使うVSCode拡張機能を作成するコンポーネント。
- [Web Components for TEI Publisher](https://github.com/eeditiones/tei-publisher-components) - TEI Publisherと、それが生成するアプリで使われるWeb Components。
- [Webmarkets web components](https://github.com/Webmarkets/wm-web-components) - Webmarketsの公開Web Components集。
- [Wired Elements](https://github.com/rough-stuff/wired-elements) - 手描き風の要素コレクション。
- [Wokwi Elements](https://github.com/wokwi/wokwi-elements) - Arduinoと各種電子部品向けWeb Components。

## 単独コンポーネント

- [`<api-viewer>`](https://github.com/web-padawan/api-viewer-element) - Web Components向けAPIドキュメントとライブPlayground。
- [`<app-datepicker>`](https://github.com/motss/app-datepicker) - LitElementとMaterial Design 2で構築されたDatepicker要素。
- [`<burgton-button>`](https://github.com/boguz/burgton-button) - 使いやすく、カスタマイズ可能でアクセシブルなハンバーガーボタン要素。
- [`<code-block>`](https://github.com/justinribeiro/code-block) - Prism.jsとLitElementにより色付きで整形したコードを表示するWeb Component。
- [`<codesandbox-button>`](https://github.com/bennypowers/codesandbox-button) - クリック時にCodeSandboxデモを表示するCustom Element。
- [`<editor-container>`](https://github.com/toeverything/blocksuite) - 汎用的な共同作業アプリケーション向けに設計されたブロックベースエディター。
- [`<granite-qrcode-generator>`](https://github.com/LostInBrittany/granite-qrcode-generator) - qr.jsライブラリを使ってQRコードを生成・描画するCustom Element。
- [`<helium-animated-pages>`](https://github.com/alangdm/helium-animated-pages) - Litで構築されたCSSアニメーション作成用Web Component。
- [`<json-viewer>`](https://github.com/alenaksu/json-viewer) - JSONデータをツリー表示で可視化するWeb Component。
- [`<light-gallery>`](https://github.com/sachinchoolur/lightGallery/tree/master/lightgallery-lit) - Lit向けの高機能JavaScript画像・動画ギャラリー。
- [`<lit-datatable>`](https://github.com/DoubleTrade/lit-datatable) - LitElementを活用したデータテーブルのMaterial Design実装。
- [`<lit-image-cropper>`](https://github.com/andy-austin/lit-image-cropper) - 高速で軽量な画像切り抜きコンポーネント。
- [`<lottie-player>`](https://github.com/LottieFiles/lottie-player) - Lottieアニメーションを簡単に埋め込み・再生するWeb Component。
- [`<model-viewer>`](https://github.com/GoogleWebComponents/model-viewer) - 対話型3Dモデルを描画するWeb Component。
- [`<phantom-ui>`](https://github.com/Aejkatappaja/phantom-ui) - 実際のDOMを計測してオーバーレイブロックを自動生成する、構造認識型のシマーSkeleton Loader。
- [`<rapi-doc>`](https://github.com/mrin9/RapiDoc) - OpenAPI 3.0・Swagger 2.0仕様を表示するWeb Component。
- [`<responsive-image>`](https://github.com/simonihmig/responsive-image) - レスポンシブ画像を描画するWeb Component。
- [`<round-slider>`](https://github.com/thomasloven/round-slider) - Litで構築された簡潔な円形スライダーWeb Component。
- [`<stl-part-viewer>`](https://github.com/justinribeiro/stl-part-viewer) - Three.jsを使ってSTLモデルファイルを表示するLitElement Web Component。

## メタフレームワーク

- [Gracile](https://gracile.js.org/) - 薄いフルスタックメタフレームワーク。ViteとLit SSRを利用します。

## ツール

### ビルド

- [babel-plugin-lit-property-types-from-ts](https://www.npmjs.com/package/babel-plugin-lit-property-types-from-ts) - TypeScript型注釈に基づき、Litコンポーネントで宣言したリアクティブプロパティへ`type`を設定するBabelプラグイン。
- [babel-plugin-template-html-minifier](https://www.npmjs.com/package/babel-plugin-template-html-minifier) - Tagged Template String内のHTMLを縮小するBabelプラグイン。
- [esbuild-plugin-lit](https://www.npmjs.com/package/esbuild-plugin-lit) - CSS、SVG、HTML、XLIFFファイルをJavaScriptのTagged Template LiteralオブジェクトとしてインポートするESBuildプラグイン。
- [esbuild-plugin-lit-css](https://www.npmjs.com/package/esbuild-plugin-lit-css) - CSSファイルをJavaScriptのTagged Template LiteralオブジェクトとしてインポートするESBuildプラグイン。
- [lit-css-loader](https://www.npmjs.com/package/lit-css-loader) - CSSファイルをJavaScriptのTagged Template LiteralオブジェクトとしてインポートするWebpack loader。
- [lit-scss-loader](https://www.npmjs.com/package/lit-scss-loader) - CSS／SCSSをLitコンポーネントへインポートするWebpack loader。
- [Mappa](https://github.com/bennypowers/mappa) - package.jsonの依存関係からBare Specifierを解決する、高速なES modules向けImport Mapジェネレーター。
- [rollup-plugin-lit-css](https://www.npmjs.com/package/rollup-plugin-lit-css) - CSSファイルをJavaScriptのTagged Template LiteralオブジェクトとしてインポートするRollupプラグイン。
- [rollup-plugin-minify-html-literals](https://www.npmjs.com/package/rollup-plugin-minify-html-literals) - Tagged Template String内のHTMLを縮小するRollupプラグイン。
- [rollup-plugin-postcss-lit](https://www.npmjs.com/package/rollup-plugin-postcss-lit) - PostCSSで処理したスタイルシートをLitコンポーネントへ読み込むRollupプラグイン。

### Lint

- [eslint-plugin-lit](https://www.npmjs.com/package/eslint-plugin-lit) - Lit Template String向けESLintプラグイン。
- [eslint-plugin-lit-a11y](https://www.npmjs.com/package/eslint-plugin-lit-a11y) - Litテンプレート向けアクセシビリティLintプラグイン。
- [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) - Litテンプレート内のバインディングを型検査するCLI。

### IDEプラグイン

- [vscode-lit-html](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html) - lit-html Template String向け構文強調とIntelliSense。
- [vscode-lit-plugin](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin) - lit-html向け構文強調、型検査、コード補完。
- [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html) - ES6複数行文字列内のHTMLへ構文強調を提供するVSCode拡張機能。
- [vim-html-template-literals](https://github.com/jonsmithers/vim-html-template-literals) - Tagged Template Literal内のHTML向け構文強調とインデント。
- [@web-types/lit](https://www.npmjs.com/package/@web-types/lit) - Tagged Template Literal内のHTML向け属性補完。

### TypeScriptプラグイン

- [ts-lit-plugin](https://www.npmjs.com/package/ts-lit-plugin) - Litテンプレートへ型検査とコード補完を追加するプラグイン。
- [typescript-lit-html-plugin](https://www.npmjs.com/package/typescript-lit-html-plugin) - LitテンプレートへIntelliSenseを追加するTypeScript serverプラグイン。

### その他のツール

- [@custom-elements-manifest/analyzer](https://www.npmjs.com/package/@custom-elements-manifest/analyzer) - Web Components向けAPIドキュメントを生成するCLIツール。
- [Asimonim](https://github.com/bennypowers/asimonim) - W3C DTCG仕様向けDesign Tokenパーサー、バリデーター、言語サーバー。
- [cem](https://github.com/bennypowers/cem) - LSP・MCPサーバーを内蔵し、Custom Elements Manifestを生成、検証、照会するCLIマルチツール。
- [Storybook for web-components](https://www.npmjs.com/package/@storybook/web-components) - プレーンなWeb Componentスニペット向けUI開発環境。
- [web-components-codemods](https://www.npmjs.com/package/web-components-codemods) - lit-html Template Literalと互換性があるWeb Components向けCodemod。
- [Web Component DevTools](https://github.com/Matsuuu/web-component-devtools) - Web Componentsを扱う開発者向けブラウザー拡張機能。
- [Web Component Factory](https://www.npmjs.com/package/@wcfactory/cli) - Web Componentsを生成、ビルド、テスト、公開するCLIツール。

## CDN

次のContent Delivery NetworkはLitのES module版を提供します。

- [cdn.esm.sh](https://cdn.esm.sh/lit)
- [jsDelivr CDN](https://cdn.jsdelivr.net/npm/lit/+esm)
- [JSPM CDN](https://jspm.dev/lit)
- [Skypack CDN](https://cdn.skypack.dev/lit)
- [unpkg.com](https://unpkg.com/lit?module)

Bundleの利用方法は[lit.devドキュメント](https://lit.dev/docs/getting-started/#use-bundles)を参照してください。

## 統合

- [Bridgetown Lit Renderer](https://github.com/bridgetownrb/bridgetown-lit-renderer) - Bridgetown向けLitコンポーネントのSSRとHydration。
- [Fable.Lit](https://github.com/fable-compiler/Fable.Lit) - Litの力でHTMLコードをF#コードへ埋め込むツール集。
- [Ruby2JS](https://github.com/ruby2js/ruby2js) - 最小限ながら拡張可能なRubyからJavaScriptへの変換。

## 動画

- [Lit 3.0 Launch Event](https://www.youtube.com/watch?v=ri9FEl_hRTc)
- [効率的、表現力豊か、拡張可能なHTMLテンプレート（Polymer Summit 2017）](https://www.youtube.com/watch?v=ruql541T7gc)
- [lit-HTML（Chrome Dev Summit 2017）](https://www.youtube.com/watch?v=Io6JjgckHbg)
- [Lit Beta Launch Event（2021）](https://www.youtube.com/watch?v=f1j7b696L-E)
- [Lit 2.0 Release Livestream](https://www.youtube.com/watch?v=nfb779XIhsU)
- [VDOM vs lit-html - HTTP203](https://www.youtube.com/watch?v=uCHZJy2n8Qs)
- [Justin Fagnaniと学ぶ宣言的リアクティブWeb Components](https://www.youtube.com/watch?v=9FB0GSOAESo)
- [Web ComponentsとLitElementで複雑なアプリケーションを構築する](https://www.youtube.com/watch?v=x9YDQUJx2uw)

## ポッドキャスト

- [The Web Platform Podcast 159: lit-html - JavaScript Template LiteralによるHTMLテンプレート](https://thewebplatformpodcast.com/159-lithtml-html-templates-via-javascript-template-literals) -
  lit-html作者Justin Fagnaniを迎えたエピソード。
- [ShopTalk Show 348: Justin Fagnaniとlit-htmlを始める](https://shoptalkshow.com/episodes/348/) - Justin Fagnaniをゲストに迎えた別のエピソード。

## アーカイブ

次の記事はlit-htmlとLitElementの古いバージョンを扱っています。

- [Vanilla JavaScriptとlit-htmlでHTMLを描画する](https://dev.to/azure/too-hard-too-soft-just-right-rendering-html-with-lit-html-1km8)
- [lit-htmlへのやさしい入門](https://dev.to/julcasans/a-gentle-introduction-to-lit-html-3d74)
- [ゼロから達人までのlit-htmlテンプレート](https://dev.to/julcasans/lit-html-templates-from-zero-to-hero-2afm)
- [blog-pwaをPolymerからLitElement、Workbox、Rollupへ更新する](https://justinribeiro.com/chronicle/2019/04/11/updating-blog-pwa-from-polymer-to-litelement-workbox-and-rollup/)
- [Web Componentsを構築しよう！ 第5部: LitElement](https://dev.to/bennypowers/lets-build-web-components-part-5-litelement-906)
- [LitElement To Do App](https://medium.com/@westbrook/litelement-to-do-app-1e08a31707a4)
- [Rollup、Babel、KarmaでLitElementを使う](https://43081j.com/2018/09/polymer-lit-with-rollup)
- [Webアプリ作成の新しく軽量な方法](https://medium.com/@kennethrohde/a-new-lean-way-of-creating-web-apps-88a49c5b87ec)
- [Polymerとlit-htmlの未来](https://43081j.com/2018/08/future-of-polymer)
- [Lit-HTMLを試した一夜](https://lucamezzalira.com/2018/08/14/a-night-experimenting-with-lit-html/)
- [LitHTML、Redux、Express、WebpackでフルスタックCRUDアプリを作る](https://medium.com/@pascalschilp/making-a-fullstack-crud-app-with-lithtml-redux-express-and-webpack-fe7e5cf8b3ef)
- [Twilio、lit-html、Parcel、TypeScriptでチャットを構築する](https://dev.to/dkundel/building-a-chat-with-twilio-lit-html-parcel-and-typescript-1jo1)

## 類似ライブラリ

これらのライブラリはLitとは関係ありませんが、類似の概念を使って構築されています。`html` Tagged Template Literalを使い、構文強調には同じ[IDEプラグイン](#ide-plugins)の利点を活用します。

- [haunted](https://www.npmjs.com/package/haunted) - 標準Web ComponentsとhyperHTMLまたはlit-html向けのReact Hooks API。
- [htm](https://github.com/developit/htm) - Hyperscript Tagged Markup。コンパイラー対応を備え、標準Tagged Templateを使うJSX代替。
- [hybrids](https://github.com/hybridsjs/hybrids) - 簡潔で関数型のAPIによりWeb Componentsを作成するUIライブラリ。
- [lit-ntml](https://github.com/motss/lit-ntml) - lit-htmlに着想を得た、Node.jsのSSR向け軽量で現代的なテンプレート機能。

## その他のAwesomeリソース

**さらに多くの優れたリソースが必要なら、[awesome](https://github.com/sindresorhus/awesome)リストをご覧ください！**

---

## ライセンス

[![CC0](https://upload.wikimedia.org/wikipedia/commons/6/69/CC0_button.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
