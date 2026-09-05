---
title: "Awesome Web Components"
description: "Web Componentsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。"
licenseSource: "github-web-padawan-awesome-web-components-readme-md"
---

# Awesome Web Components

Web Componentsを扱う資料や関連プロジェクトをまとめたAwesomeリストです。

## 目次 <a id="contents"></a>

- [概要](#introduction)
- [標準](#standards)
  - [Custom Elements](#custom-elements)
  - [Shadow DOM](#shadow-dom)
  - [HTML Templates](#html-templates)
  - [CSS Shadow Parts](#css-shadow-parts)
- [ガイド](#guides)
  - [アクセシビリティ](#accessibility)
  - [ベストプラクティス](#best-practices)
  - [コードラボ](#codelabs)
  - [例](#examples)
- [記事](#articles)
  - [アーキテクチャ](#architecture)
  - [相互運用性](#interoperability)
  - [制約](#limitations)
  - [スタイル設定](#styling)
- [実利用](#real-world)
  - [事例](#case-studies)
  - [コンポーネント](#components)
  - [コンポーネントライブラリ](#component-libraries)
  - [デザインシステム](#design-systems)
  - [ユースケース](#use-cases)
- [ライブラリ](#libraries)
  - [クラスベース](#class-based)
  - [関数型](#functional)
  - [統合](#integrations)
  - [ベンチマーク](#benchmarks)
- [フレームワーク](#frameworks)
  - [Angular](#angular)
  - [React](#react)
  - [Vue](#vue)
  - [Svelte](#svelte)
- [エコシステム](#ecosystem)
  - [メタフレームワーク](#meta-frameworks)
  - [スターターキット](#starter-kits)
  - [テストソリューション](#testing-solutions)
  - [ツール](#tools)
- [書籍](#books)
- [チュートリアル](#tutorials)
- [知見](#insights)
  - [ポッドキャスト](#podcasts)
  - [プレゼンテーション](#presentations)
  - [講演](#talks)
- [利用統計](#usage-metrics)
- [提案仕様](#proposals)
  - [フォーム関連Custom Elements](#form-associated-custom-elements)
  - [構築可能なStylesheetオブジェクト](#constructable-stylesheet-objects)
  - [カスタム状態疑似クラス](#custom-state-pseudo-class)
- [その他](#miscellaneous)
- [アーカイブ](#archive)
  - [polyfill](#polyfills)
  - [歴史](#history)
- [フォロー推奨](#who-to-follow)
- [メンテナー](#maintainers)

## 概要 <a id="introduction"></a>

- [An Introduction to Web Components](https://css-tricks.com/an-introduction-to-web-components/)
- [Intro to Web Components](https://developer.salesforce.com/blogs/2020/01/intro-to-web-components.html)
- [The Holy Grail Of Reusable Components: Custom Elements, Shadow DOM, And NPM](https://www.smashingmagazine.com/2018/07/reusable-components-custom-elements-shadow-dom-npm/)
- [The Motivation For Using Web Components, an Introduction](https://www.thinktecture.com/web-components/introduction-and-motivation/)
- [The Power of Web Components](https://hacks.mozilla.org/2018/11/the-power-of-web-components/)
- [Web Components 101](https://nhswd.com/blog/web-components-101-what-are-web-components/)
- [Web Components: From the orbital height](https://javascript.info/webcomponents-intro)
- [What are browser-native web components?](https://gomakethings.com/what-are-browser-native-web-components/)
- [Why Web Components?](https://www.fast.design/docs/resources/why-web-components/)

## 標準 <a id="standards"></a>

### Custom Elements <a id="custom-elements"></a>

Custom Elementsは、独自の完全な機能を持つDOM要素を作成する手段を提供します。

- [A Guide to Custom Elements for React Developers](https://css-tricks.com/a-guide-to-custom-elements-for-react-developers/)
- [All about HTML Custom Elements](https://github.com/shawnbot/custom-elements)
- [Custom elements](https://javascript.info/custom-elements)
- [Custom Elements v1: Reusable Web Components](https://web.dev/custom-elements-v1/)
- [Handling properties in custom element upgrades](https://nolanlawson.com/2021/08/03/handling-properties-in-custom-element-upgrades/)
- [Handy Custom Elements' Patterns](https://gist.github.com/WebReflection/ec9f6687842aa385477c4afca625bbf4)
- [HTML Living Standard: Custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html)
- [MDN - Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
- [web-platform-tests](https://github.com/web-platform-tests/wpt/tree/master/custom-elements)

### Shadow DOM <a id="shadow-dom"></a>

Shadow DOMは、複数のDOMツリーを一つの階層へ組み合わせ、文書内で相互作用させる方法を定め、DOMの構成を改善します。

- [A complete guide on shadow DOM and event propagation](https://pm.dartus.fr/blog/a-complete-guide-on-shadow-dom-and-event-propagation/)
- [DOM Living Standard: Shadow tree](https://dom.spec.whatwg.org/#shadow-trees)
- [MDN - Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
- [Mind the document.activeElement!](https://dev.to/open-wc/mind-the-document-activeelement-2o9a)
- [Open vs. Closed Shadow DOM](https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af)
- [Shadow DOM](https://javascript.info/shadow-dom)
- [Shadow DOM and events](https://javascript.info/shadow-dom-events)
- [Shadow DOM in depth](https://github.com/praveenpuglia/shadow-dom-in-depth)
- [Shadow DOM slots, composition](https://javascript.info/slots-composition)
- [Shadow DOM styling](https://javascript.info/shadow-dom-style)
- [Shadow DOM v1: Self-Contained Web Components](https://web.dev/shadowdom-v1/)
- [The Rise of Shadow DOM](https://medium.com/front-end-hacking/the-rise-of-shadow-dom-84aa1f731e82)
- [Understanding Slot Updates with Web Components](https://coryrylan.com/blog/understanding-slot-updates-with-web-components)
- [What is the Shadow DOM?](https://bitsofco.de/what-is-the-shadow-dom/)
- [Who doesn't love some slots?](https://dev.to/westbrook/who-doesnt-love-some-s-3de0)
- [Your Content in Shadow DOM Portals](https://dev.to/westbrook/your-content-in-shadow-dom-portals-3cdb)
- [web-platform-tests](https://github.com/web-platform-tests/wpt/tree/master/shadow-dom)

### HTML Templates <a id="html-templates"></a>

`<template>`要素は、スクリプトで複製して文書へ挿入できるHTML断片を宣言するために使います。

- [Crafting Reusable HTML Templates](https://css-tricks.com/crafting-reusable-html-templates/)
- [HTML Living Standard: The `template` element](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element)
- [HTML templates with vanilla JavaScript](https://gomakethings.com/html-templates-with-vanilla-javascript/)
- [MDN - &lt;template&gt;: The Content Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- [MDN - Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
- [Template element](https://javascript.info/template-element)
- [Templating in HTML](https://kittygiraudel.com/2022/09/30/templating-in-html/)
- [The HTML5 template element](https://dev.to/ahferroin7/the-html5-template-element-26b6)
- [Understanding The Template Element In HTML](https://blog.openreplay.com/understanding-the-template-element-in-html/)
- [web-platform-tests](https://github.com/web-platform-tests/wpt/tree/master/html/semantics/scripting-1/the-template-element)

### CSS Shadow Parts <a id="css-shadow-parts"></a>

CSS Shadow Partsは、スタイル設定のためにShadow DOM内部の特定要素を公開できるようにします。

- [W3C First Public Working Draft](https://www.w3.org/TR/css-shadow-parts-1/)
- [CSS Shadow Parts are coming!](https://dev.to/webpadawan/css-shadow-parts-are-coming-mi5)
- [MDN - `::part()` CSS pseudo element](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)
- [MDN - `part` global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part)
- [::part and ::theme, an ::explainer](https://meowni.ca/posts/part-theme-explainer/)
- [web-platform-tests](https://github.com/web-platform-tests/wpt/tree/master/css/css-shadow-parts)

## ガイド <a id="guides"></a>

### アクセシビリティ <a id="accessibility"></a>

- [Accessibility for Web Components](https://developer.salesforce.com/blogs/2020/01/accessibility-for-web-components.html)
- [Accessibility with ID Referencing and Shadow DOM](https://coryrylan.com/blog/accessibility-with-id-referencing-and-shadow-dom)
- [Dialogs and shadow DOM: can we make it accessible?](https://nolanlawson.com/2022/06/14/dialogs-and-shadow-dom-can-we-make-it-accessible/)
- [How to Make Accessible Web Components — a Brief Guide](https://www.sitepoint.com/accessible-web-components/)
- [Managing focus in the shadow DOM](https://nolanlawson.com/2021/02/13/managing-focus-in-the-shadow-dom/)
- [The future of accessibility for custom elements](https://robdodson.me/the-future-of-accessibility-for-custom-elements/)
- [The Guide to Accessible Web Components](https://www.erikkroes.nl/blog/accessibility/the-guide-to-accessible-web-components-draft/)
- [Web Components and the Accessibility Object model (AOM)](https://www.24a11y.com/2019/web-components-and-the-aom/)
- [Web Components punch list](https://www.tpgi.com/web-components-punch-list/)
- [Web components still need to be accessible](https://www.24a11y.com/2018/web-components-still-need-to-be-accessible/)

### ベストプラクティス <a id="best-practices"></a>

- [Custom Element Best Practices](https://web.dev/custom-elements-best-practices/)
- [Developing Components: Publishing](https://open-wc.org/guides/developing-components/publishing/)
- [Gold Standard Checklist for Web Components](https://github.com/webcomponents/gold-standard/wiki)
- [Guidelines for creating web platform compatible components](https://w3ctag.github.io/webcomponents-design-guidelines/)
- [How to Publish Web Components to NPM](https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm/)
- [Open Web Components Recommendations](https://open-wc.org)

### コードラボ <a id="codelabs"></a>

- [Build a Story Web Component with LitElement](https://dev.to/straversi/build-a-story-web-component-with-litelement-e59)
- [Building Custom Elements with Web Components for the 2020 Elections](https://medium.com/stories-from-upstatement/building-custom-elements-with-web-components-for-the-2020-elections-f767ff9e9c6a)
- [Creating Custom Form Controls with ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/)
- [From Web Component to Lit Element](https://codelabs.developers.google.com/codelabs/the-lit-path)
- [HowTo Components –`<howto-checkbox>`](https://web.dev/components-howto-checkbox/)
- [HowTo Components –`<howto-tabs>`](https://web.dev/components-howto-tabs/)
- [HowTo Components – `<howto-tooltip>`](https://web.dev/components-howto-tooltip/)
- [Lit: basics](https://open-wc.org/codelabs/basics/lit-html.html#0)
- [Lit: intermediate](https://open-wc.org/codelabs/intermediate/lit-html.html#0)
- [Lit for React Developers](https://codelabs.developers.google.com/codelabs/lit-2-for-react-devs#0)
- [Web Components: basics](https://open-wc.org/codelabs/basics/web-components.html#0)

### 例 <a id="examples"></a>

- [generic-components](https://github.com/thepassle/generic-components) - アクセシビリティと使いやすさに焦点を当てた、一般的なウェブコンポーネントのコレクション。
- [howto-components](https://github.com/GoogleChromeLabs/howto-components) - 一般的なウェブUIパターンを実装したウェブコンポーネントのコレクション。
- [Nude UI](https://github.com/LeaVerou/nudeui) - アクセシブルでカスタマイズ可能かつ極めて軽量なウェブコンポーネントのコレク及。
- [open-wc code examples](https://open-wc.org/guides/developing-components/code-examples/) - ウェブコンポーネントを開発するためのベストプラクティスとデザインパターンのコレクション。
- [vanilla-retro-js](https://github.com/martine-dowden/vanilla-retro-js) - HTMLの非推奨タグを対象とした、純粋なJavaScriptによるUIコンポーネントライブラリ。
- [web-components-examples](https://github.com/mdn/web-components-examples) - MDNウェブコンポーネントドキュメンテーションに関連するウェブコンポーネントの例のシリーズ。

## 記事 <a id="articles"></a>

### アーキテクチャ <a id="architecture"></a>

- [A deep analysis into isomorphic, autonomous cross-framework usage #MicroFrontends](https://itnext.io/a-deep-analysis-into-isomorphic-autonomous-cross-framework-usage-microfrontends-364271dc5fa9)
- [Frankenstein Migration: Framework-Agnostic Approach (Part 1)](https://www.smashingmagazine.com/2019/09/frankenstein-migration-framework-agnostic-approach-part-1/)
- [Frankenstein Migration: Framework-Agnostic Approach (Part 2)](https://www.smashingmagazine.com/2019/09/frankenstein-migration-framework-agnostic-approach-part-2/)
- [Generating Config driven Dynamic Forms using Web Components](https://codeburst.io/generating-config-driven-dynamic-forms-using-web-components-7c8d400f7f2e)
- [Hiding internal framework methods and properties from web component APIs](https://component.kitchen/blog/posts/hiding-internal-framework-methods-and-properties-from-web-component-apis)
- [How to deliver Custom Elements](https://medium.com/@WebReflection/how-to-deliver-custom-elements-702fae32d25c)
- [Making Web Components for Different Contexts](https://css-tricks.com/making-web-components-for-different-contexts/)
- [Supporting both automatic and manual registration of custom elements](https://component.kitchen/blog/posts/supporting-both-automatic-and-manual-registration-of-custom-elements)
- [Web Components — the right way](https://equinusocio.dev/blog/web-components-the-right-way/)

### 相互運用性 <a id="interoperability"></a>

- [Advanced Tooling for Web Components](https://css-tricks.com/advanced-tooling-for-web-components/)
- [Custom Elements Everywhere](https://custom-elements-everywhere.com)
- [Custom Elements That Work Anywhere](https://robdodson.me/interoperable-custom-elements/)
- [JavaScript frameworks, meet Web Components](https://www.voorhoede.nl/nl/blog/javascript-frameworks-meet-web-components/)
- [Web Components aren't a framework replacement - they're better than that](https://lamplightdev.com/blog/2020/01/18/web-components-arent-a-framework-replacement-theyre-better-than-that/)
- [Web Components: Seamlessly interoperable](https://medium.com/@sergicontre/web-components-seamlessly-interoperable-82efd6989ca4)

### 制約 <a id="limitations"></a>

- [Beyond the polyfills: how Web Components affect us today?](https://dev.to/webpadawan/beyond-the-polyfills-how-web-components-affect-us-today-3j0a)
- [Custom elements, shadow DOM and implicit form submission](https://www.hjorthhansen.dev/shadow-dom-and-forms/)
- [Form-associated custom elements](https://www.hjorthhansen.dev/shadow-dom-form-participation/)
- [You might not need shadow DOM](https://www.hjorthhansen.dev/you-might-not-need-shadow-dom/)

### スタイル設定 <a id="styling"></a>

- [Does shadow DOM improve style performance?](https://nolanlawson.com/2021/08/15/does-shadow-dom-improve-style-performance/)
- [Eschewing Shadow DOM](https://every-layout.dev/blog/eschewing-shadow-dom/)
- [How Nordhealth uses Custom Properties in Web Components](https://web.dev/custom-properties-web-components/)
- [Options for styling web components](https://nolanlawson.com/2021/01/03/options-for-styling-web-components/)
- [Style scoping versus shadow DOM: which is fastest?](https://nolanlawson.com/2022/06/22/style-scoping-versus-shadow-dom-which-is-fastest/)
- [Styling a Web Component](https://css-tricks.com/styling-a-web-component/)
- [Styling in the Shadow DOM With CSS Shadow Parts](https://css-tricks.com/styling-in-the-shadow-dom-with-css-shadow-parts/)
- [Thinking Through Styling Options for Web Components](https://css-tricks.com/thinking-through-styling-options-for-web-components/)
- [Web Component Pseudo-Classes and Pseudo-Elements are Easier Than You Think](https://css-tricks.com/web-component-pseudo-classes-and-pseudo-elements/)
- [Web Standards Meet User-Land: Using CSS-in-JS to Style Custom Elements](https://css-tricks.com/web-standards-meet-user-land-using-css-in-js-to-style-custom-elements/)

## 実利用 <a id="real-world"></a>

### 事例 <a id="case-studies"></a>

- [Apple Just Shipped Web Components to Production and You Probably Missed It](https://dev.to/ionic/apple-just-shipped-web-components-to-production-and-you-probably-missed-it-57pf)
- [Bringing Order to Web Design Chaos (with Web Components)](https://dev.to/thatjoemoore/bringing-order-to-web-design-chaos--3fhb)
- [Get moving with Microsoft’s FAST web components](https://www.infoworld.com/article/3618410/get-moving-with-microsofts-fast-web-components.html)
- [How Web Components Are Used at GitHub and Salesforce](https://thenewstack.io/how-web-components-are-used-at-github-and-salesforce/)
- [How we use Web Components at GitHub](https://github.blog/2021-05-04-how-we-use-web-components-at-github/)
- [Implementing a Design Language System with Stencil.js](https://medium.com/@Danetag/implementing-a-design-language-system-with-stencil-js-515432918eb5)
- [ING ❤ Web Components](https://dev.to/thepassle/ing--web-components-aef)
- [ING Open-Sources Lion, Its White-Label Web Component Library – Q&A with Thomas Allmer](https://www.infoq.com/articles/ing-open-sources-lion-web-component/)
- [Lessons Learned, making our app with Web Components](https://medium.com/samsung-internet-dev/lessons-learned-making-our-app-with-web-components-bf55379cfcda)
- [Looking back on five years of web components](https://bitworking.org/news/2019/07/looking-back-on-five-years-of-web-components)
- [Shipping Web Components in 2020](https://dev.to/joe8bit/shipping-web-components-in-2020-2h54)
- [The Firefox UI is now built with Web Components](https://briangrinstead.com/blog/firefox-webcomponents/)
- [Using web components to encapsulate CSS and resolve design system conflicts](https://about.gitlab.com/blog/2021/05/03/using-web-components-to-encapsulate-css-and-resolve-design-system-conflicts/)
- [Web Components at GitHub - Web Components SF Meetup](https://www.infoq.com/news/2020/08/web-components-sf-meetup-2020/)
- [Web Components at Scale at Salesforce: Challenges Encountered, Lessons Learnt](https://www.infoq.com/news/2020/03/web-components-salesforce-lwc/)
- [Web Development At Scale: Composable Applications With Web Components](https://medium.com/@jarrodek/composable-applications-with-web-components-ebe5158387be)
- [web.dev engineering blog #1: How we build the site and use Web Components](https://web.dev/how-we-build-webdev-and-use-web-components/)

### コンポーネント <a id="components"></a>

- [`<active-table>`](https://github.com/OvidijusParsiunas/active-table) - 編集可能なテーブルウェブコンポーネント。
- [`<api-viewer>`](https://github.com/web-padawan/api-viewer-element) - Web ComponentsのAPIドキュメンテーションとライブプレイヤー。
- [`<chess-board>`](https://github.com/justinfagnani/chessboard-element) - 独立したチェスボードウェブコンポーネント。
- [`<css-doodle>`](https://github.com/css-doodle/css-doodle) - CSSでパターンを描画するためのウェブコンポーネント。
- [`<dark-mode-toggle>`](https://github.com/GoogleChromeLabs/dark-mode-toggle) - ダークモードのスイッチやトグルを作成できるカスタム要素。
- [`<deep-chat>`](https://github.com/OvidijusParsiunas/deep-chat) - AI機能を備えたチャットウェブコンポーネント。
- [`<emoji-picker>`](https://github.com/nolanlawson/emoji-picker-element) - 軽量なエモジピッカー（ウェブコンポーネントとして配布）。
- [`<fg-modal>`](https://github.com/filamentgroup/fg-modal) - アクセシブルなモーダルダイアログウェブコンポーネント。
- [`<file-viewer>`](https://github.com/avipunes/file-viewer) - Svelteで構築されたファイルを表示するウェブコンポーネント。
- [`<json-viewer>`](https://github.com/alenaksu/json-viewer) - JSONデータをツリー表示するためのウェブコンポーネント。
- [`<lite-youtube>`](https://github.com/paulirish/lite-youtube-embed) - 視覚的なパフォーマンスに注目した軽量YouTube埋め込み。
- [`<midi-player>`](https://github.com/cifkao/html-midi-player) - MIDIファイルプレイヤーおよびビジュアライザウェブコンポーネント。
- [`<model-viewer>`](https://github.com/google/model-viewer) - インタラクティブな3Dモデルをレンダリングするためのウェブコンポーネント。
- [`<notectl-editor>`](https://github.com/Samyssmile/notectl) - プラグインアーキテクチャ、不変状態、ゼロ設定フレームワーク対応の現代的な豊富なテキストエディタ。
- [`<pdfjs-viewer-element>`](https://github.com/alekswebnet/pdfjs-viewer-element) - PDF.js のデフォルトビューを埋め込むカスタム要素
- [`<phantom-ui>`](https://github.com/Aejkatappaja/phantom-ui) - 実際の DOM のサイズを測定して、それに合わせたシャイマープレースホルダーをレンダリングするスケルトンローダー
- [`<player-x>`](https://github.com/playerxo/playerx) - メディアプレイヤーのウェブコンポーネント
- [`<progressive-image>`](https://github.com/andreruffert/progressive-image-element) - 画像プレースホルダーを段階的に強化するカスタム要素
- [`<qr-code>`](https://github.com/bitjson/qr-code) - カスタマイズ可能でアニメーション可能な SVG 基盤の QR コードをレンダリングするウェブコンポーネント
- [`<range-slider>`](https://github.com/andreruffert/range-slider-element) - キーボード対応のアクセシブルな範囲スライダーのカスタム要素
- [`<rapi-doc>`](https://github.com/mrin9/RapiDoc) - OpenAPI スペックからドキュメンテーションを作成するウェブコンポーネント
- [`<shader-doodle>`](https://github.com/halvves/shader-doodle) - シェーダーを書く・レンダリングするウェブコンポーネート
- [`<theme-switch>`](https://github.com/mahozad/theme-switch) - ライト、ダーク、システムテーマの切り替えを可能にするアニメーション付きトグルボタン
- [`<trix-editor>`](https://github.com/basecamp/trix) - 日常的な文章作成に使える豊かなテキストエディタのカスタム要素
- [`<vime-player>`](https://github.com/vime-js/vime) - カスタマイズ可能で拡張可能でフレームワークに依存しないメディアプレイヤー
- [`<web-vitals>`](https://github.com/stefanjudis/web-vitals-element) - 自作要素で [web vitals](https://github.com/GoogleChrome/web-vitals) をページに迅速に導入してください。

### コンポーネントライブラリ <a id="component-libraries"></a>

- [AgnosticUI](https://github.com/AgnosticUI/agnosticui) - CLIベースのUIコンポーネントライブラリ。Litウェブコンポーネントをプロジェクトに直接コピー。ReactおよびVue用のネイティブフレームワーク体験を提供する完全なラッパー。
- [AMP](https://github.com/ampproject/amphtml) - ユーザー中心のウェブサイト、ストーリー、広告、メールなどを作成しやすいウェブコンポーネントフレームワーク
- [AnywhereUI](https://github.com/adaleks/anywhere-ui) - フレームワークバインディングを含む豊かなウェブコンポーネントのコレクション。StencilJSで作成。
- [Apollo Elements](https://github.com/apollo-elements/apollo-elements) - Apollo GraphQL とさまざまなウェブコンポーネントライブラリを組み合わせるカスタム要素
- [AXA Pattern Library](https://github.com/axa-ch-webhub-cloud/pattern-library) - AXA CH がWeb Componentsで構築したUIコンポーネントライブラリ
- [Blackstone UI](https://github.com/kjantzer/bui) - Blackstone Publishingが開発したインターフェースを作成するウェブコンポーネント
- [Blaze UI Atoms](https://github.com/BlazeSoftware/atoms) - Blaze CSS で駆動されたウェブコンポーネントのセット
- [Brightspace UI core](https://github.com/BrightspaceUI/core) - Brightspaceアプリケーションを作成するためのウェブコンポーネントのコレクション
- [Burnish Components](https://github.com/danfking/burnish/tree/main/packages/components) - MCPツール呼び出し出力のUIをレンダリングするウェブコンポーネント
- [Clever components](https://github.com/CleverCloud/clever-components) - Clever Cloud が開発したウェブコンポーネントのコレクション
- [Curvenote](https://github.com/curvenote/article) - インタラクティブな科学記事を作成するためのウェブコンポーネント
- [DataFormsJS](https://github.com/dataformsjs/dataformsjs) - SPAルーティング、ウェブサービスからのデータ表示など、独立したコンポーネント
- [Dile Components](https://github.com/Polydile/dile-components) - ウェブサイトおよびアプリケーション向けの一般用途ウェブコンポーネント
- [elements-sk](https://github.com/google/elements-sk) - 「a la carte」ウェブ開発に用いるカスタムエレメントのコレクション
- [github-elements](https://github.com/github/github-elements) - GitHubのウェブコンポーネントコレクション
- [Elix](https://github.com/elix/elix) - 一般的なユーザーインターフェースパターンに最適な、高品質かつカスタマイズ可能なウェブコンポーネント
- [Furo Webcomponents](https://github.com/eclipse/eclipsefuro-web) - Eclipse Furo と最適に連携する企業向けウェブコンポーネントセット
- [Fusion Web Components](https://github.com/equinor/fusion-web-components) - Equinor Fusion が使用するウェブコンポーネントシリーズ
- [Ignite UI Web Components](https://github.com/IgniteUI/igniteui-webcomponents) - Infragistics から提供されるUIコンポーネントの完全なライブラリ
- [Immersive Custom Elements](https://github.com/MozillaReality/immersive-custom-elements) - 浸透型（VR＆AR）コンテンツを埋め込むためのウェブコンポーネントセット
- [Joomla UI custom elements](https://github.com/joomla-projects/custom-elements) - Joomla 4 カスタムエレメントのコンパイル
- [Ketch.UP](https://github.com/smeup/ketchup) - Sme.UP 用のウェブコンポーネントライブラリ
- [LDRS](https://github.com/GriffinJohnston/ldrs) - 軽量かつカスタマイズ可能なロードアニメーション／スピナー
- [Lion Web Components](https://github.com/ing-bank/lion) - 非常にパフォーマンスが高く、アクセシブルで柔軟なウェブコンポーネントのセット
- [LRNWebComponents](https://github.com/elmsln/lrnwebcomponents/) - ELMS:LN が生成したプロジェクト用のウェブコンのセット
- [Lume](https://github.com/lume/lume) - 3Dグラフィックス向けカスタムエレメント。Three.js でWebGL/WebGPUレンダリング、Solid.js で反応性とテンプレートを実現
- [Medblocks UI](https://github.com/medblocks/medblocks-ui) - openEHRおよびFHIRシステムの迅速開発に用いるウェブコンポーネント
- [Microsoft Graph Toolkit](https://github.com/microsoftgraph/microsoft-graph-toolkit) - Microsoft Graph向けのウェブコンポーネのコレクション
- [Mutation testing elements](https://github.com/stryker-mutator/mutation-testing-elements) - ウェブコンポーネントで可視化するための変更テスト結果のスキーマ
- [Nightingale](https://github.com/ebi-webcomponents/nightingale) - 生命科学分野向けのデータ可視化ウェブコンポーネント
- [Nuxeo Elements](https://github.com/nuxeo/nuxeo-elements) - Nuxeoでウェブアプリケーションを構築する際に使用するウェブコンポーネント
- [One Platform Components](https://github.com/1-Platform/op-components) - Red Hat One Platform向けのウェブコンポーネントセット
- [Open Business Application Platform Web Components](https://github.com/openbap/obap-elements) - ビジネスアプリケーション向けのウェブコンポーネントコレクション
- [Pixano Elements](https://github.com/pixano/pixano-elements) - データアノテーションタスクに特化した再利用可能なウェブコンポーネント
- [PlayCanvas Web Components](https://github.com/playcanvas/web-components) - PlayCanvasエンジンで構築する3Dインタラクティブウェブアプリ向けのカスタムエレメント
- [Playground Elements](https://github.com/PolymerLabs/playground-elements) - サーバレスコード体験用のウェブコンポーネント
- [Shoelace](https://github.com/shoelace-style/shoelace) - 未来志向のウェブコンポーネントライブラリ
- [Smart Web Components](https://github.com/HTMLElements/smart-webcomponents) - ビジネスアプリケーション向けのウェブコンポーネント
- [Stripe Elements](https://github.com/bennypowers/stripe-elements) - Stripe.js v3 Elements向けのカスタムエレメントワッパー
- [TEI Publisher Components](https://github.com/eeditiones/tei-publisher-components) - TEI Publisherおよびその生成アプリケーションで使用されるウェブコンポーネントコレクション
- [Titanium Elements](https://github.com/LeavittSoftware/titanium-elements) - Leavitt Group Enterprisesが使用する軽量ウェブコンポーネのコレクション
- [Tradeshift Elements](https://github.com/Tradeshift/elements) - Tradeshift UIコンポーネントをウェブコンポーネントとして再利用
- [TrendChart Elements](https://github.com/WebLogin/trendchart-elements) - シンプルで軽量かつレスポンシブなチャートを生成するコンポーネント
- [Umbraco UI Components](https://github.com/umbraco/Umbraco.UI) - Umbraco CMS向けのユーザーインターフェースウェブコンポーネントコレクション
- [Vaadin components](https://github.com/vaadin/web-components) - ビジネスウェブアプリケーション構築向けの高品質ウェブコンポーネントの進化セット
- [VSCode Webview Elements](https://github.com/bendera/vscode-webview-elements) - Webview APIを使用するVSCode拡張機能を構築するためのコンポーネント
- [Warp View](https://github.com/senx/warpview) - Warp 10向けのチャートウェブコンポーネントコレクション
- [Webmarkets web components](https://github.com/Webmarkets/wm-web-components) - Webmarketsの公開ウェブコンポーネントセット
- [Wired Elements](https://github.com/wiredjs/wired-elements) - 手描き風のスケッチスタイルを持つ共通UI要素のセット
- [Wokwi Elements](https://github.com/wokwi/wokwi-elements) - アーロンドと各種電子部品向けのウェブコンポーネント
- [XWeather](https://github.com/kherrick/x-weather) - OpenWeatherMap APIの一部を実装したウェブコンポーネントのコレクション

### デザインシステム <a id="design-systems"></a>

- [Astro Space UX Design System](https://github.com/RocketCommunicationsInc/astro) - 確立されたインタラクションパターンを活用した、豊かな宇宙アプリ体験を構築するためのコンポーネントセット
- [Auro Design System](https://auro.alaskaair.com) - アルスカエアラインズのデザインシステムでアイデアを革新し、未来を共同で創出
- [Blueprint UI](https://blueprintui.dev) - 柔軟で軽量なウェブコンポーネントを備えたウェブコンポーネントベースのデザインシステム
- [Bolt Design System](https://github.com/boltdesignsystem/bolt) - Twigとウェブコンポーネドを活用したUIコンポーネント、再利用可能な視覚スタイルおよびツールセット
- [Calcite Components](https://github.com/Esri/calcite-components) - EsriのCalciteデザインフレームワークに共通するウェブコンポーネント
- [Carbon Web Components](https://github.com/carbon-design-system/carbon-web-components) - Web Componentsに基づくCarbonデザインシステムのバリエーション
- [Clarity Core Web Components](https://github.com/vmware-clarity/core/tree/main/projects/core) - Clarityデザインシステムからなるウェブコンポーネントのセット
- [Crayons](https://github.com/freshdesk/crayons) - Freshworksデザインシステムに準拠したウェブコンポーネントのコレクション
- [FAST Components](https://github.com/microsoft/fast/tree/master/packages/web-components) - FASTデザイン言語に基づくウェブコンポーネントのライブラリ
- [Fluent UI Web Components](https://github.com/microsoft/fluentui/tree/master/packages/web-components) - MicrosoftのFluentデザイン言語をサポートするウェブコンポーネントのライブラリ
- [Forge Components](https://github.com/tyler-technologies-oss/forge) - Forgeデザインシステムに準拠するウェブコンポーネントのライブラリ
- [GOV.UK Web Components](https://github.com/tgreyuk/govuk-webcomponents) - GOV.UKデザインシステムを消費する、エンカプセルされたウェブコンポーネントのセット
- [Helix UI](https://github.com/HelixDesignSystem/helix-ui) - Helixデザインシステム向けのウェブコンポーネントライブラリ
- [Liquid](https://github.com/emdgroup-liquid/liquid) - Liquidデザインシステムに基づくUIコンポーネントライブラリ
- [Lyne Components](https://github.com/lyne-design-system/lyne-components) - Lyneデザインシステムの構成要素はウェブコンポーネントに基づいている
- [Material Web Components](https://github.com/material-components/material-web) - Material Designをウェブコンポーネントとして実装
- [Momentum UI Web Components](https://github.com/momentum-design/momentum-ui/tree/master/web-components) - Momentumデザインに基づくUIコンポーネントのセット
- [Nord](https://nordhealth.design) - Nordhealthの製品・デジタル体験・ブランド向けデザインシステム
- [NuML | NUDE Elements](https://github.com/tenphi/numl) - Web Components と実行時 CSS 生成をベースとした HTML フレームワークおよびデザインシステム
- [NVIDIA Elements](https://github.com/nvidia/elements) - AI/ML ファクトリー、ロボティクス、自律自動車向けのデザイン言語および UI アグリーティング
- [OutlineJS](https://github.com/phase2/outline) - Web Components をベースとしたデザインシステムのスタートキット
- [PatternFly Elements](https://github.com/patternfly/patternfly-elements) - 統一デザインキットをベースにした柔軟かつ軽量な Web Components のコレクション
- [Pharos Design System](https://github.com/ithaka/pharos) - JSTOR のデザインシステムによる統一的でサポート的で美しい体験の実現
- [Red Hat Design System](https://github.com/RedHat-UX/red-hat-design-system) - Red Hat ブランドによる一貫した体験を構築するための Web Components
- [Siemens iX Web Components](https://github.com/siemens/ix/tree/main/packages/core) - Siemens iX デザインシステムを実装した Web Components
- [Spectrum Web Components](https://github.com/adobe/spectrum-web-components) - Adobe Spectrum デザイン言語を Web Components で実装
- [UI5 Web Components](https://github.com/SAP/ui5-webcomponents) - SAP Fiori デザインガイドラインを実装した再利用可能な UI 要素のセット
- [U-M Library Design System](https://design-system.lib.umich.edu) - ミシガン大学図書館デザインシステム
- [Zooplus web components](https://github.com/zooplus/zoo-web-components) - Z+ ショップスタイルガイドを実装したウェブコンポーネントのセット

### ユースケース <a id="use-cases"></a>

- [How we chose to build our Design System using StencilJS Web Components](https://medium.com/8451/how-we-chose-to-build-our-design-system-using-stenciljs-web-components-4878c36743c5)
- [How searching for a bundle-free React led me to web components](https://www.bryanbraun.com/2020/08/31/how-searching-for-a-bundle-free-react-led-me-to-web-components/)
- [Reasons Web Components are perfect for a big company](https://medium.com/@sergicontre/reasons-web-components-are-perfect-for-a-big-company-28790d712ad5)
- [5 Reasons Web Components Are Perfect for Design Systems](https://ionicframework.com/blog/5-reasons-web-components-are-perfect-for-design-systems/)
- [Web components: the secret ingredient helping power the web](https://web.dev/web-components-io-2019/)
- [Web Components for Enterprise. Part 1: Salesforce, Oracle, SAP](https://dev.to/webpadawan/web-components-for-enterprise-part-1-salesforce-oracle-sap-e70)
- [Web Components for Enterprise. Part 2: Nuxeo, Ionic, Vaadin](https://dev.to/webpadawan/web-components-for-enterprise-part-2-nuxeo-ionic-vaadin-22l7)
- [Why I use Web Components - My use cases](https://dev.to/shihn/why-i-use-web-components-my-use-cases-1nip)
- [Why we use Web Components](https://viljamis.com/2019/why-we-use-web-components/) by [@viljamis](https://twitter.com/viljamis)
- [Why we use Web Components](https://dev.to/ionic/why-we-use-web-components-2c1i) by [@maxlynch](https://twitter.com/maxlynch)

## ライブラリ <a id="libraries"></a>

### クラスベース <a id="class-based"></a>

- [DNA](https://github.com/chialab/dna) - プログレッシブウェブコンポーネントライブラリ
- [element-js](https://github.com/webtides/element-js) - シンプルで軽量なWebコンポーネントベースクラスと美しいAPI
- [FAST Element](https://github.com/microsoft/fast/tree/master/packages/web-components/fast-element) - パフォーマンスが高く、メモリ効率が良く、標準に適合したWebコンポーネのための軽量ライブラリ
- [Forge Core](https://github.com/tyler-technologies-oss/forge-core) - Forge Web Components を構築する際に使用される構成要素とユーティリティ
- [Joist](https://github.com/joist-framework/joist) - 最小限の機能を追加するための小さなライブラリのセットで、開発者の生産性を高める
- [Lit](https://lit.dev) - 高速かつ軽量なWebコンポーネントを構築するためのシンプルなライブラリ
- [Lightning Web Components](https://github.com/salesforce/lwc) - 極めて高速で企業レベルのWebコンポーネント基盤
- [Lume Element](https://github.com/lume/element) - Solid.js のシグナルとエフェクトによって反応性とテンプレートを備えたカスタムエレメントの作成
- [Omi](https://github.com/Tencent/omi) - 4kb JavaScriptによる次世代ウェブフレームワーク（Web Components + JSX + Proxy + Store + Path Updating）
- [Panel](https://github.com/mixpanel/panel) - ウェブコンポーネント＋バーチャルDOM：強力なUI用のウェブ標準
- [ReadyMade](https://github.com/readymade-ui/readymade/tree/main/src/modules/core) - デコレーターを使ってカスタムエレメントクラスを書く。依存関係なし
- [slim.js](https://github.com/slimjs/slim.js) - 現代の標準に基づく高速かつ堅牢なフロントエンドマイクロフレームワーク
- [Stencil](https://github.com/ionic-team/stencil) - ウェブコンポーネントを生成するコンパイラ
- [Tonic](https://github.com/optoolco/tonic) - 極めてシンプルで安定し、審査に適したコンポーネントフレームワーク
- [WebCell](https://github.com/EasyWebApp/WebCell) - VDOM、JSX、MobXおよびTypeScriptに基づくウェブコンポーネントエンジン

### 関数型 <a id="functional"></a>

- [atomico](https://github.com/atomicojs/atomico) - 関数とハックを使ってウェブコンポーネントベースのインターフェースを作成するための小さなライブラリ
- [Elemento](https://github.com/dsolimando/elemento) - シグナルとLitを使って機能的なウェブコンポーネントを作成するための軽量ライブラリ
- [haunted](https://github.com/matthewp/haunted) - ReactのHooks APIをウェブコンポーネントに実装
- [hybrids](https://github.com/hybridsjs/hybrids) - シンプルかつ機能的なAPIでウェブコンドメインを作成するためのUIライブラリ
- [Solid Element](https://github.com/solidjs/solid/tree/main/packages/solid-element) - Solidにカスタムウェブコンポーネントと拡張を追加するライブラリ

### 統合 <a id="integrations"></a>

- [ember-custom-elements](https://github.com/Ravenstine/ember-custom-elements) - カスタムエレメントを使ってEmberおよびGlimmerのコンポーネントをレンダリング
- [preact-custom-element](https://github.com/preactjs/preact-custom-element) - Preactコンポーネントからカスタムエレメントを生成／登録
- [@adobe/react-webcomponent](https://github.com/adobe/react-webcomponent) - Reactコンポーネントをカスタムエレメントに自動的にラップ
- [nuxt-custom-elements](https://github.com/GrabarzUndPartner/nuxt-custom-elements) - プロジェクトのコンポーネントをカスタムエレメントとして外部ページに統合できるようにエクスポート
- [react-shadow](https://github.com/Wildhoney/ReactShadow) - ReactでシャドウDOMを使用し、スタイルの封じ込めのすべてのメリットを享受
- [reactify-wc](https://github.com/BBKolton/reactify-wc) - Reactのプロパティと関数を使ってウェブコンポーネントを使用
- [remount](https://github.com/rstacruz/remount) - カスタムエレメントを使ってReactコンポーネントをDOMにマウント
- [@riotjs/custom-elements](https://github.com/riot/custom-elements) - Riot.jsを使ってシンプルなAPIでオリジナルのカスタムエレメントを作成

### ベンチマーク <a id="benchmarks"></a>

- [All the Ways to Make a Web Component](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/)
- [web-components-benchmark](https://vogloblinsky.github.io/web-components-benchmark/) - さまざまな例を使ってウェブコンポーネント技術をベンチマーク
- [web-components-todo](https://wc-todo.firebaseapp.com/) - ベンチマーク目的で、同じTODOアプリケーションを異なるWebコンポーネントライブラリで構築したもの。

## フレームワーク <a id="frameworks"></a>

### Angular <a id="angular"></a>

- [Angular Elements Overview](https://angular.io/guide/elements)
- [Building and consuming Angular Elements as Web Components](https://indepth.dev/building-and-bundling-web-components/)
- [How to use Angular ngModel and ngForms with WebComponents](https://itnext.io/how-to-use-angular-ngmodel-and-ngforms-with-webcomponents-802bd9e1d3d7)
- [Using Web Components in Angular](https://coryrylan.com/blog/using-web-components-in-angular)
- [Web Components With Angular Ivy In 6 Steps](https://www.softwarearchitekt.at/post/2019/05/18/web-components-custom-elements-with-angular-ivy-in-6-steps.aspx)

### React <a id="react"></a>

- [3 Approaches to Integrate React with Custom Elements](https://css-tricks.com/3-approaches-to-integrate-react-with-custom-elements/)
- [Building Interoperable Web Components That Even Work With React](https://css-tricks.com/building-interoperable-web-components-react/)
- [Rendering React Components With Custom Elements](https://guillaumebriday.fr/rendering-react-components-with-custom-elements)
- [How to use Web Components in React](https://www.robinwieruch.de/react-web-components)
- [Using Web Components With Next (or Any SSR Framework)](https://css-tricks.com/using-web-components-with-next-or-any-ssr-framework/)

### Vue <a id="vue"></a>

- [Using Web Components in Vue](https://coryrylan.com/blog/using-web-components-in-vue)

### Svelte <a id="svelte"></a>

- [Svelte Custom Element API](https://svelte.dev/docs#Custom_element_API)
- [How to Create a Web Component in Svelte](https://dev.to/silvio/how-to-create-a-web-components-in-svelte-2g4j)
- [Svelte Web Component — 5.4KB](https://itnext.io/svelte-web-component-5-4kb-4afe46590d99)

## エコシステム <a id="ecosystem"></a>

## メタフレームワーク <a id="meta-frameworks"></a>

- [AMP](https://github.com/ampproject/amphtml) - Webコンポーネントフレームワークで、ユーザー中心のウェブ体験を簡単に作成できる。
- [Enhance](https://enhance.dev/docs/) - Web標準に基づくHTMLフレームワークで、軽量なウェブアプリケーションを構築できる。
- [luna-js](https://github.com/webtides/luna-js) - WebComponents標準との対話がスムーズになるSSRフレームワーク。
- [Rocket](https://rocket.modern-web.dev) - 静的サイト向けの現代的なウェブセットアップにJavaScriptを少し加えたもの。
- [Web Components Compiler](https://github.com/ProjectEvergreen/wcc) - ネイティブWebコンポーネのサーバー側レンダリングを簡単にするコンパイラ。
- [WebC](https://github.com/11ty/webc) - フレームワークに依存しないスタンドアローンHTMLシリアライザで、Webコンポーネントのマーカップを生成できる。

### スターターキット <a id="starter-kits"></a>

- [Create Open Web Components](https://open-wc.org/docs/development/generator/) - Webコンポーネントプロジェクトのスケルトンを作成するツール。
- [custom-element-boilerplate](https://github.com/github/custom-element-boilerplate) - カスタムエレメントを作成するためのボイラープレート。
- [hello-web-components](https://github.com/fernandopasik/hello-web-components) - TypeScriptで書かれたシンプルなスタートアップ「hello world」Webコンポーネント。
- [nutmeg](https://github.com/abraham/nutmeg) - vanilla Webコンポーネントのビルド、テスト、公開を、少しのスパイスで行う。

### テストソリューション <a id="testing-solutions"></a>

- [capybara-shadowdom](https://github.com/yuki24/capybara-shadowdom) - CapybaraにShadow DOMの基本的なサポートを追加するRubyのgem。
- [Cypress component tests for Lit](https://dev.to/simonireilly/cypress-component-tests-for-lit-elements-web-components-45oj) - LitのWebコンポーネントのコンポーネントテストをCypressで実行する方法。
- [cypress-lit](https://github.com/simonireilly/cypress-lit) - Cypressで、LitエレメントやネイティブWebコンポーネントを、現代的なブラウザでテストする。
- [Developing Components: Testing](https://open-wc.org/guides/developing-components/testing/) - @web/test-runnerを使って、実際のブラウザでWebコンポーネントをテストする。
- [How To Automate Shadow DOM In Selenium WebDriver](https://www.lambdatest.com/blog/shadow-dom-in-selenium/) - Mavenプロジェクト内でSelenium WebDriverを使ってShadow DOM要素を検索する。
- [Native Automation support for Shadow DOM](https://staleelement.medium.com/native-automation-support-for-shadow-dom-with-webdriverio-and-cypress-chapter-3-26249a589f5e) - Shadow DOMとオープンソースのテストフレームワーク。
- [Open Web Components: Testing](https://open-wc.org/docs/testing/testing-package/) - テストライブラリを組み合わせて構成した、意見のあるパッケージ。
- [query-selector-shadow-dom](https://github.com/webdriverio/query-selector-shadow-dom) - Shadow DOMのルートを貫けるquerySelector、自動テストに有用。
- [shadow-automation-selenium](https://github.com/sukgu/shadow-automation-selenium) - Seleniumを使ってShadow DOMを自動化する。
- [Testing Shadow DOM elements in Selenium](https://reflect.run/articles/testing-shadow-dom-elements-in-selenium/) - セレニウム4では、シャドウDOMノードにアクセスする方法が存在します
- [Test web components with Playwright](https://alexbilson.dev/plants/technology/test-web-components-with-playwright/) - あなたがネイティブなウェブコンポーネントをいくつか作成しました。それらを人気ブラウザでテストするにはどうすればよいでしょうか
- [W3C Webdriver conquering automation of Shadow DOM](https://staleelement.medium.com/w3c-webdriver-conquering-automation-of-shadow-dom-chapter-2-d92c7fe9e74c) - シャドウDOMツリーとW3Cのウェブドライバーとの相互作用

### ツール <a id="tools"></a>

- [Backlight](https://backlight.dev/) - 開発者とデザイナーの協働を意識したBacklightは、チームがデザインシステムを構築・ドキュメント化・公開・拡張・維持できる非常に包括的なコーディングプラットフォームです
- [Custom Elements Locator](https://github.com/open-wc/locator) - ページ上のカスタム要素を検索するChrome拡張機能
- [@storybook/web-components](https://www.npmjs.com/package/@storybook/web-components) - シンプルなウェブコンポーネントスニペット向けのUI開発環境
- [webcomponents.dev](https://webcomponents.dev) - ウェブプラットフォーム開発者向けのコンポーネントIDE
- [web-component-analyzer](https://github.com/runem/web-component-analyzer) - ウェブコンポーネントを分析し、ドキュメントや診断情報を出力するCLI
- [Web Components Codemods](https://github.com/kcmr/web-components-codemods) - ウェブコンポーネのCodemods

## 書籍 <a id="books"></a>

- [Web Components in Action](https://www.manning.com/books/web-components-in-action) - ベン・ファーレルによる書籍、マニングの早期リリースプログラムで入手可能
- [Web Component Development with Modern Libraries and Tooling](https://www.manning.com/books/web-component-development-with-modern-libraries-and-tooling) - マーク・フォルマーンによる書籍、マニングの早期アクセスプログラムで入手可能
- [Web Component Essentials](https://leanpub.com/web-component-essentials) - コリー・リルンによる書籍、リーンプブで早期プレビュー版が入手可能

## チュートリアル <a id="tutorials"></a>

- [Building Web Components with Vanilla JavaScript](https://dev.to/aspittel/building-web-components-with-vanilla-javascript--jho)
- [Creating a Custom Element from Scratch](https://css-tricks.com/creating-a-custom-element-from-scratch/)
- [Creating a Reusable Avatar Web Component](https://marcoslooten.com/blog/creating-a-reusable-avatar-web-component/)
- [Creating Web Components with Stencil](https://auth0.com/blog/creating-web-components-with-stencil/)
- [Encapsulating Style and Structure with Shadow DOM](https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/)
- [Getting started with LitElement and TypeScript](https://labs.thisdot.co/blog/getting-started-with-litelement-and-typescript)
- [Web Components: from zero to hero](https://dev.to/thepassle/web-components-from-zero-to-hero-4n4m)
- [Deep Dive: Web Components & Dependency Injection – The Experiment](https://www.thinktecture.com/web-components/dependency-injection/)
- [Handling data with Web Components](https://itnext.io/handling-data-with-web-components-9e7e4a452e6e)
- [How to use D3js with WebComponents](https://towardsdatascience.com/how-to-use-d3js-with-webcomponents-a75ae4f980de)
- [Navigation Lifecycle using Vaadin Router, LitElement and TypeScript](https://labs.thisdot.co/blog/navigation-lifecycle-using-vaadin-router-litelement-and-typescript)
- [Recreating The Arduino Pushbutton Using SVG And `<lit-element>`](https://www.smashingmagazine.com/2020/01/recreating-arduino-pushbutton-svg/)
- [Routing Management with LitElement and TypeScript](https://labs.thisdot.co/blog/routing-management-with-litelement)
- [Snake-Eating Game Making with Web Components of Omi and MVP Architecture](https://dev.to/dntzhang/snake-eating-game-making-with-web-components-of-omi-and-mvp-architecture-206)
- [Stencil – Web Components On Steroids](https://www.thinktecture.com/web-components/stenciljs-web-components-on-steroids/)
- [Using Modern Web Components](https://coryrylan.com/blog/using-modern-web-components)
- [Using Web Components in WordPress is Easier Than You Think](https://css-tricks.com/using-web-components-in-wordpress-is-easier-than-you-think/)
- [Web Components 101: Framework Comparison](https://coderpad.io/blog/development/web-components-101-framework-comparison/)
- [Web Components 101: Lit Framework](https://coderpad.io/blog/development/web-components-101-lit-framework/)
- [Web Components Tools: A Comparison](https://www.nexmo.com/blog/2020/05/20/web-components-tools-a-comparison)
- [Where to begin building Web Components? - The Basics](https://dev.to/alangdm/where-to-begin-building-web-components-the-basics-3b78)
- [Where to begin building Web Components? - Class-based Libraries](https://dev.to/alangdm/where-to-begin-building-web-components-class-based-libraries-18m6)

## 知見 <a id="insights"></a>

### ポッドキャスト <a id="podcasts"></a>

- [Code[ish], episode 38: Building with Web Components](https://www.heroku.com/podcasts/codeish/38-building-with-web-components)
- [Frontend Happy Hour, episode 62: Web Components - shots of shadow DOM](https://frontendhappyhour.com/episodes/web-components-shots-of-shadow-dom/)
- [Labs Talk - Web Components with Peter Muessig](https://labstalk.buzzsprout.com/993481/3932975-web-components-with-peter-muessig)
- [Real Talk JavaScript, episode 7: Custom Web Components with Rob Wormald](https://realtalkjavascript.simplecast.fm/eaf3db9e)
- [Real Talk JavaScript, episode 101: Back to Basics with Native HTML and LitElement](https://realtalkjavascript.simplecast.com/episodes/episode-101-back-to-basics-with-native-html-and-litelement)

### プレゼンテーション <a id="presentations"></a>

- [Are Web Components the Betamax of web development?](https://noti.st/lostinbrittany/EjUZyd/are-web-components-the-betamax-of-web-development) by [@lostinbrittany](https://twitter.com/lostinbrittany)
- [Designing Standard Systems](https://drive.google.com/file/d/1ALFiWOFU0UAGUpaZPMIVnoADs9_REtL5/view) by [@stefsull](https://twitter.com/stefsull) and [@bferrua](https://twitter.com/bferrua)
- [Frontend Architecture for Scalable Design Systems](https://events.drupal.org/seattle2019/sessions/design-system-architecture-pattern-lab-twig-and-web-components) by [@salem_cobalt](https://twitter.com/salem_cobalt)
- [lit-apollo: Data-Driven Components that Use the Platform](https://apolloelements.dev/using-lit-apollo/) by [@PowersBenny](https://twitter.com/PowersBenny)
- [Mastering Shadow DOM](https://martine-dowden.github.io/portfolio/presentation/mastering-shadow-dom) by [@Martine_Dowden](https://twitter.com/Martine_Dowden)
- [Modernizing Large Frontends with Web Components](https://speakerdeck.com/samjulien/modernizing-large-frontends-with-web-components) by [@samjulien](https://twitter.com/samjulien)
- [Shadow DOM: off the beaten track](https://docs.google.com/presentation/d/1wi74YiTLtLSfgjyccKm5LxYp9k8aeJda0AekWV5mqJI/edit?usp=sharing) by [@serhiikulykov](https://twitter.com/serhiikulykov)
- [Using Web Components to Build a Framework-agnostic UI Library](https://gotochgo.com/2019/sessions/866/using-web-components-to-build-a-framework-agnostic-ui-library) by [@brianbouril](https://twitter.com/brianbouril) and [@danciupuliga](https://twitter.com/danciupuliga)
- [Web Components and the AOM](https://decks.tink.uk/2019/jsconf/index.html) by [@LeonieWatson](https://twitter.com/LeonieWatson)
- [Web Components and Styles Scoping](https://www.dropbox.com/s/wdh9uufjui5htll/Web-Components-and-Styles-Scoping-by-bashmish-FrontMania-2018.pdf) by [@bashmish](https://twitter.com/bashmish)
- [Web Components can do that?!](https://slides.com/vogloblinsky/web-components-can-do-that) by [@vogloblinsky](https://twitter.com/vogloblinsky)
- [Web Components: Introduction and State of the Art](https://webcomponents.dev/blog/web-components-slides/) by [@webcomp_dev](https://twitter.com/webcomp_dev)

### 講演 <a id="talks"></a>

- [Better Apps: Delivering Universal UI Patterns as Web Components](https://youtu.be/mtHf7crZZIQ) by [@janmiksovsky](https://twitter.com/janmiksovsky)
- [Custom Web Shadow Elements, or Whatever…](https://vimeo.com/364370506) by [@aerotwist](https://twitter.com/aerotwist)
- [Styling and Theming Web Components](https://youtu.be/FM7ROEVPA4k) by [@justinfagnani](https://twitter.com/justinfagnani)
- [Web Components at Enterprise Scale](https://youtu.be/iFp-P2UJT_Y) by [@diervo](https://twitter.com/diervo)

## 利用統計 <a id="usage-metrics"></a>

- [Chrome Platform Status: `CustomElementRegistryDefine`](https://chromestatus.com/metrics/feature/timeline/popularity/1689)
- [Chrome Platform Status: `ElementAttachShadow`](https://chromestatus.com/metrics/feature/timeline/popularity/804)
- [Chrome Platform Status: `HTMLTemplateElement`](https://chromestatus.com/metrics/feature/timeline/popularity/2769)

## 提案仕様 <a id="proposals"></a>

### フォーム関連Custom Elements <a id="form-associated-custom-elements"></a>

- [Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit?usp=sharing) - グーグル・クロームチームによるドキュメント
- [Form-associated custom elements](https://www.chromestatus.com/features/4708990554472448) - クロームプラットフォームステータスにおける機能
- [web-platform-tests](https://github.com/web-platform-tests/wpt/tree/master/custom-elements/form-associated)

### 構築可能なStylesheetオブジェクト <a id="constructable-stylesheet-objects"></a>

- [Specification Draft](https://wicg.github.io/construct-stylesheets/)
- [web-platform-tests](https://github.com/web-platform-tests/wpt/blob/master/css/cssom/CSSStyleSheet-constructable.html)
- [Explainer](https://github.com/WICG/construct-stylesheets/blob/gh-pages/explainer.md)
- [Constructable Stylesheets](https://www.chromestatus.com/feature/5394843094220800) - Chromeプラットフォームでの機能ステータス。

### カスタム状態疑似クラス <a id="custom-state-pseudo-class"></a>

- [Blink: Intent to implement](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/CApU9QIu3TM)
- [`ElementInternals`'s `states` property and the `:state()` pseudo class](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/custom-states-and-state-pseudo-class.md)

## その他 <a id="miscellaneous"></a>

- [bruck](https://github.com/Heydon/bruck) - ウェブコンポーネントとハウディニーパインAPIを用いて構築されたプロトタイピングシステム
- [Vaadin Directory](https://vaadin.com/directory) - ウェブコンポーネントを公開・議論・評価
- [webcomponents.org](http://webcomponents.org/) - ウェブコンポーネントを議論・共有

## アーカイブ <a id="archive"></a>

### polyfill <a id="polyfills"></a>

現代のブラウザーは、以下のpolyfillなしでWeb Components標準をサポートします。
主な例外は、WebKit（Safari）がカスタマイズされた組み込み要素を受け入れないことです。

#### Custom Elements polyfill <a id="custom-elements-polyfills"></a>

- [@webcomponents/custom-elements](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements) - ポリマーチームによるカスタムエレメントのポリフィル
- [document-register-element](https://github.com/WebReflection/document-register-element) - アンデラ・ギアマルチによるカスタムエレメントのポリフィル

#### カスタマイズされた組み込み要素のpolyfill <a id="customized-built-in-elements-polyfills"></a>

- [@corpuscule/custom-builtin-elements](https://github.com/corpusculejs/custom-builtin-elements) - [CorpusculeJS](https://github.com/corpusculejs) によるカスタマイズされた組み込み要素のポリフィル。
- [@ungap/custom-elements-builtin](https://github.com/ungap/custom-elements-builtin) - [ungap project](https://ungap.github.io) によるカスタマイズされた組み込み要素のポリフィル。

#### Shadow DOM shim <a id="shadow-dom-shims"></a>

- [@webcomponents/shadydom](https://github.com/webcomponents/polyfills/tree/master/packages/shadydom) - シャドウDOM v1のシム
- [@webcomponents/shadycss](https://github.com/webcomponents/polyfills/tree/master/packages/shadycss) - シャドウDOMスタイルのエンカプスレーションシーム。
- [@lwc/synthetic-shadow](https://github.com/salesforce/lwc/blob/master/packages/@lwc/synthetic-shadow) - [LWC](https://lwc.dev) によるシャドウDOMポリフィル。

#### HTML Templates polyfill <a id="html-templates-polyfills"></a>

- [@webcomponents/template](https://github.com/webcomponents/polyfills/tree/master/packages/template) - `<template>`向けの最小ポリフィルです。
- [@ungap/import-node](https://github.com/ungap/import-node) - [ungap project](https://ungap.github.io)によるIE11向け`importNode`ポリフィルです。

### 歴史 <a id="history"></a>

以下の記事は、Web Components仕様が標準化へ至る長い経緯を示します。
一部は初期の「v0」Shadow DOM／Custom Elements仕様や、廃止されたHTML Imports仕様を扱います。
これらは歴史的資料としてのみ残され、年別に時系列で掲載されています。

#### 2019 <a id="2019"></a>

- [A history of the HTML slot element](https://component.kitchen/blog/posts/a-history-of-the-html-slot-element)
- [Web Components for Cross-Framework Component Libraries](https://codeburst.io/web-components-for-cross-framework-component-libraries-2647741f9470)
- [Web Components in 2019: Part 1](https://codeburst.io/web-components-in-2019-part-1-6bd7251edce5)
- [Web Components in 2019: Part 2](https://codeburst.io/web-components-in-2019-part-2-a7de8c770c5a)
- [Web Components in 2019: Part 3](https://codeburst.io/web-components-in-2019-part-3-e725b781a414)
- [Web Components in 2019: Part 4](https://codeburst.io/web-components-in-2019-part-4-7fe8e63a4dee)
- [Developments in Web Components I’m excited about in 2019](https://medium.com/angular-in-depth/developments-in-web-components-im-excited-about-in-2019-3ae7751c2f64)

#### 2018 <a id="2018"></a>

- [Styling Accessibility: A Web Components Approach](https://medium.com/@cfscorreia/styling-accessibility-a-web-components-approach-dc2aa8123eb2)
- [Web Components 101: An Introduction to Web Components](https://www.telerik.com/blogs/web-components-101-an-introduction-to-web-components)
- [Get started with Vue web components](https://medium.com/@royprins/get-started-with-vue-web-components-593b3d5b3200)
- [6 Reasons You Should Use Native Web Components](https://codeburst.io/6-reasons-you-should-use-native-web-components-b45e18e069c2)
- [Web Components in 2018](https://www.sitepen.com/blog/web-components-in-2018)
- [Web Components Introduction: Creating Custom HTML Elements in 2018](https://www.grapecity.com/en/blogs/web-components-introduction-creating-custom-html-elements-2018)
- [Create & Publish Web Components With Vue CLI 3](https://vuejsdevelopers.com/2018/05/21/vue-js-web-component/)
- [Extending Native DOM Elements with Web Components](https://medium.com/revillweb/extending-native-dom-elements-with-web-components-233350c8e86a)

#### 2017 <a id="2017"></a>

- [Styling is critical to web component reuse, but may prove difficult in practice](https://component.kitchen/blog/posts/styling-is-critical-to-web-component-reuse-but-may-prove-difficult-in-practice)
- [Web Components: The Long Game](https://infrequently.org/2017/10/web-components-the-long-game/)
- [Web Components: Just in the Nick of Time (Polymer Summit 2017)](https://youtu.be/y-8Lmg5Gobw)
- [Using Web Components in Ionic (Polymer Summit 2017)](https://youtu.be/UfD-k7aHkQE)
- [Web Components for VR (Polymer Summit 2017)](https://youtu.be/8GmTu2JF4-0)
- [Building UI at Enterprise Scale with Web Components (Polymer Summit 2017)](https://youtu.be/FJ2KEvzlyo4)
- [Custom Elements Everywhere (Polymer Summit 2017)](https://youtu.be/sK1ODp0nDbM)
- [Evolving the Next Generation of Polymer Elements (Polymer Summit 2017)](https://youtu.be/rvpJ5O0W_6A)
- [Polymer @ YouTube (Polymer Summit 2017)](https://youtu.be/tNulrEbTQf8)
- [Web Components for CMS (Polymer Summit 2017)](https://youtu.be/c-WDHG6rrdU)
- [An intro to web components with otters](https://meowni.ca/posts/web-components-with-otters/)
- [The broken promise of Web Components](https://dmitriid.com/blog/2017/03/the-broken-promise-of-web-components/)
- [Regarding the broken promise of Web Components](http://robdodson.me/regarding-the-broken-promise-of-web-components/)
- [Web Components v1 - the next generation](https://web.dev/webcomponents-org/)

#### 2016 <a id="2016"></a>

- [Introducing Custom Elements](https://webkit.org/blog/7027/introducing-custom-elements/)
- [The Case for Custom Elements: Part 1](https://medium.com/dev-channel/the-case-for-custom-elements-part-1-65d807b4b439)
- [The Case for Custom Elements: Part 2](https://medium.com/dev-channel/the-case-for-custom-elements-part-2-2efe42ce9133)
- [Demythstifying Web Components](http://www.backalleycoder.com/2016/08/26/demythstifying-web-components/)
- [Extensible web components](https://adactio.com/journal/11052)
- [Web Component Challenges](https://blog.revillweb.com/web-component-challenges-a09ebc598d65)
- [Web Components and progressive enhancement](https://onishi.ltd/articles/2016/08/web-components-and-progressive-enhancement/)
- [Update on standardizing Shadow DOM and Custom Elements](https://annevankesteren.nl/2015/07/shadow-dom-custom-elements-update)
- [What's New in Shadow DOM v1 (by examples)](https://hayatoito.github.io/2016/shadowdomv1/)
- [Why web components are so important](https://blog.revillweb.com/why-web-components-are-so-important-66ad0bd4807a)
- [Understanding Web Components](https://medium.com/the-ui-files/understanding-web-components-d051baa66019)

#### 2015 <a id="2015"></a>

- [Introducing Slot-Based Shadow DOM API](https://webkit.org/blog/4096/introducing-shadow-dom-api/)
- [There is an Element for that](https://medium.com/synsugar/there-is-an-element-for-that-a9fcdafe4a25)
- [What happened to Web Components?](https://2ality.com/2015/08/web-component-status.html)
- [Web Components and their role in the future of web development](http://kaytcat.github.io/web-components/)
- [Microsoft Edge and Web Components](https://blogs.windows.com/msedgedev/2015/07/15/microsoft-edge-and-web-components/)
- [Bringing componentization to the web: An overview of Web Components](https://blogs.windows.com/msedgedev/2015/07/14/bringing-componentization-to-the-web-an-overview-of-web-components/)
- [Why Web Components will make the web a better place for our users](https://medium.com/@kaelig/why-web-components-will-make-the-web-a-better-place-for-our-users-38dc3154fc1d)
- [Practical Questions around Web Components](https://www.ianfeather.co.uk/practical-questions-around-web-components/)
- [The state of Web Components](https://hacks.mozilla.org/2015/06/the-state-of-web-components/)

#### 2014 <a id="2014"></a>

- [A No-Nonsense Guide to Web Components, Part 1: The Specs](http://cbateman.com/blog/a-no-nonsense-guide-to-web-components-part-1-the-specs/)
- [A No-Nonsense Guide to Web Components, Part 2: Practical Use](http://cbateman.com/blog/a-no-nonsense-guide-to-web-components-part-2-practical-use/)
- [Web Components + Backbone: A Game-Changing Combination](https://youtu.be/dztuKgjk0Bg)
- [Mozilla and Web Components: Update](https://hacks.mozilla.org/2014/12/mozilla-and-web-components/)
- [Server-less applications powered by Web Components](https://youtu.be/MdcD1rNkNLE)
- [Web Components and the Future of CSS](https://youtu.be/QHxrr6Q82yI)
- [Easy composition and reuse with Web Components](https://youtu.be/6vcQlD-jadk)
- [Let’s build some apps with Polymer!](https://youtu.be/kV0hgdMpH28)
- [Polymer: State of the Union](https://youtu.be/0LT6W5QVCJI)
- [Web Components 101: An Introduction to Fundamental Changes in HTML](https://youtu.be/hEzmy93zr0Y?t=540)
- [Web Components 201: Designing Web Components for Reuse](https://youtu.be/dwxaG-eoxdU)
- [Why Web Components — Does the Web Really Need Another Component?](https://medium.com/@shaunwalla/why-web-components-does-the-web-really-need-another-component-4af010b6446)
- [“Don’t stop thinking about tomorrow” - AngularJS and Web Components](https://youtu.be/gSTNTXtQwaY)
- [Multi-device Apps with Web Components](https://youtu.be/kn0y7uugO0Y)
- [As I Walk Through The Valley Of The Shadow Of DOM](https://youtu.be/nbsWP2cPhhU)
- [Why Web Components Are Ready For Production](https://www.telerik.com/blogs/web-components-ready-production)
- [The State of the Componentised Web](https://www.leggetter.co.uk/2014/08/06/state-componentised-web.html)
- [An Addendum to Why Web Components Aren't Ready for Production Yet](https://www.tjvantoll.com/2014/07/18/an-addendum-to-why-web-components-arent-ready-for-production-yet/)
- [Why Web Components Aren't Ready for Production... Yet](https://www.telerik.com/blogs/web-components-arent-ready-production-yet)
- [Component Interop With React And Custom Elements](https://addyosmani.com/blog/component-interop-with-react-and-custom-elements/)
- [Accessibility of Web Components](https://youtu.be/BgvDZZ8Ms8c)
- [Componentize The Web: Back To The Browser!](https://youtu.be/GOPXVLxp9Nc)
- [Google I/O 2014 - Polymer and the Web Components revolution](https://youtu.be/yRbOSdAe_JU)
- [Google I/O 2014 - Polymer and Web Components change everything you know about Web development](https://youtu.be/8OJ7ih8EE7s)
- [Google I/O 2014 - Unlock the next era of UI development with Polymer](https://youtu.be/HKrYfrAzqFA)
- [Making Polymer Elements Accessible](https://youtu.be/_IBiXfxhF-A)
- [Building an Accessible Disclosure Button – using Web Components](https://developer.paciellogroup.com/blog/2014/06/accessible-disclosure-button-using-web-components/)
- [The Road to Web Components](https://youtu.be/yLyyXHhSl8w)
- [The Web Components Revolution is Here](https://youtu.be/3QLmAm9xtnU)
- [Web Components: A chance to create the future](https://youtu.be/JUzjr1bIRUg)
- [Web Component Mashups at 3 a.m.](https://youtu.be/75EuHl6CSTo)
- [Web Components Tools & Libraries](https://youtu.be/iPmN4CvLGJc)
- [Web Components Can Do That?!](https://addyosmani.com/fitc-wccdt/)
- [Web Components and you – dangers to avoid](https://christianheilmann.com/2014/04/18/web-components-and-you-dangers-to-avoid/)
- [HTML as Custom Elements](https://github.com/domenic/html-as-custom-elements)
- [The Web's Declarative, Composable Future](https://addyosmani.com/blog/the-webs-declarative-composable-future/)
- [Using Polymer to Create Web Components](https://code.tutsplus.com/tutorials/using-polymer-to-create-web-components--cms-20475)
- [The Shadow DOM Diaries](https://gist.github.com/dglazkov/efd2deec54f65aa86f2e)
- [A Detailed Introduction To Custom Elements](https://www.smashingmagazine.com/2014/03/introduction-to-custom-elements/)

#### 2013 <a id="2013"></a>

- [A future called Web Components](https://speakerdeck.com/zenorocha/a-future-called-web-components)
- [Building Mobile Web Applications With Brick](https://youtu.be/dW2ib0bkxGQ)
- [Polymer: declarative, encapsulated, and reusable components for the web](https://youtu.be/DH1vTVkqCDQ)
- [Web Components: Why you're already an expert](https://youtu.be/s1PTPZwzQA4)
- [Yo Polymer: a new way of building web apps](https://youtu.be/booRxAJblwM)
- [Performance and Custom Elements](https://www.stevesouders.com/blog/2013/11/26/performance-and-custom-elements/)
- [Web Components Revolution](https://robdodson.github.io/webcomponents-revolution/)
- [A Guide to Web Components](https://css-tricks.com/modular-future-web-components/)
- [Return of Inspector Web: Web Components a Year Later](https://vimeo.com/78899868)
- [Working with Custom Elements](https://web.dev/customelements/)
- [Creating Reusable Markup with The HTML Template Element](https://blog.teamtreehouse.com/creating-reusable-markup-with-the-html-template-element)
- [Working with Shadow DOM](https://blog.teamtreehouse.com/working-with-shadow-dom)
- [Breaking Development: Web Components](https://www.lukew.com/ff/entry.asp?1752)
- [Web Components: A Tectonic Shift for Web Development - Google I/O 2013](https://youtu.be/fqULJBBEVQE)
- [Web Components: Getting Started](https://vimeo.com/68212204)
- [Shadow DOM 101](https://web.dev/shadowdom/)
- [Shadow DOM 201](https://web.dev/shadowdom-201/)
- [Shadow DOM 301](https://web.dev/shadowdom-301/)
- [Visualizing shadow DOM concepts](https://developer.chrome.com/blog/visualizing-shadow-dom-concepts/)
- [Web components and the future of web development](https://youtu.be/pb6DsPNdoXk)
- [HTML's New Template Tag](https://web.dev/webcomponents-template/)

#### 2012 <a id="2012"></a>

- [The Basics of the Shadow DOM](https://www.sitepoint.com/the-basics-of-the-shadow-dom/)
- [Notes on Web Components + ARIA](https://developer.paciellogroup.com/blog/2012/07/notes-on-web-components-aria/)
- [Google I/O 2012 - The Web Platform's Cutting Edge](https://youtu.be/2txPYQOWBtg)
- [Introduction to Web Components](https://www.w3.org/TR/2012/WD-components-intro-20120522/)

#### 2011 <a id="2011"></a>

- [Web Components and Model Driven Views by Alex Russell](https://fronteers.nl/congres/2011/sessions/web-components-and-model-driven-views-alex-russell)
- [What the Heck is Shadow DOM?](https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/)

## フォロー推奨 <a id="who-to-follow"></a>

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://twitter.com/polymer">
          <img width="80" height="80" src="https://pbs.twimg.com/profile_images/1063502058337136640/RmlG_bbW_80x80.jpg">
          <div>Polymer</div>
        </a>
      </td>
      <td align="center">
        <a href="https://twitter.com/stenciljs">
          <img width="80" height="80" src="https://pbs.twimg.com/profile_images/1135534552137510914/5ZzvOFFp_80x80.png">
          <div>Stencil</div>
        </a>
      </td>
      <td align="center">
        <a href="https://twitter.com/openwc">
          <img width="80" height="80" src="https://pbs.twimg.com/profile_images/1101188623930662912/YKlBD7n6_80x80.png">
          <div>open-wc.org</div>
        </a>
      </td>
      <td align="center">
        <a href="https://twitter.com/webcomp_dev">
          <img width="80" height="80" src="https://pbs.twimg.com/profile_images/1169270943371407360/U-90Bxn0_80x80.jpg">
          <div>webcomponents.dev</div>
        </a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://twitter.com/justinfagnani">
          <img width="80" height="80" src="https://pbs.twimg.com/profile_images/378800000808710206/2dbdaa1cb7b0db02f997aea5b40f29b8_80x80.jpeg">
          <div>Justin Fagnani</div>
        </a>
      </td>
      <td align="center">
        <a href="https://twitter.com/viljamis">
          <img width="80" height="80" src="https://pbs.twimg.com/profile_images/671595827740086273/wCUWq-1S_80x80.png">
          <div>Viljami Salminen</div>
        </a>
      </td>
      <td align="center">
        <a href="https://twitter.com/JanMiksovsky">
          <img width="80" height="80" src="https://pbs.twimg.com/profile_images/675000078055051264/u1ZEQfeE_80x80.jpg">
          <div>Jan Miksovsky</div>
        </a>
      </td>
      <td align="center">
        <a href="https://twitter.com/serhiikulykov">
          <img width="80" height="80" src="https://pbs.twimg.com/profile_images/1028197887329685504/cM6nOHlp_80x80.jpg">
          <div>Serhii Kulykov</div>
        </a>
      </td>
    </tr>
  <tbody>
</table>

## メンテナー <a id="maintainers"></a>

- 2014年に[@mateusortiz](https://github.com/mateusortiz)が作成しました。
- 2018年から[@web-padawan](https://github.com/web-padawan)が保守しています。
