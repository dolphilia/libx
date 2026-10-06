---
title: "Awesome Web Components"
description: "Web Componentsの標準、ガイド、再利用可能なコンポーネント、ライブラリ、開発ツール、過去の提案に関する資料集。"
toc:
  minLevel: 2
  maxLevel: 4
licenseSource: "github-web-padawan-awesome-web-components-readme-md"
---

# Awesome Web Components

[Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)は、機能を他のコードからカプセル化した、再利用可能なカスタム要素を作り、Webアプリケーションで使うための技術群です。このリストは標準、ガイド、再利用可能なコンポーネント、ライブラリ、開発ツールを扱い、ポリフィルと過去の資料をアーカイブにまとめています。旧称は「Web Components the Right Way」です。

## 概要 <a id="introduction"></a>

- [An Introduction to Web Components](https://css-tricks.com/an-introduction-to-web-components/) - Web Componentsの入門記事。
- [Intro to Web Components](https://developer.salesforce.com/blogs/2020/01/intro-to-web-components.html) - Web Componentsの概要を紹介する記事。
- [The Holy Grail Of Reusable Components: Custom Elements, Shadow DOM, And NPM](https://www.smashingmagazine.com/2018/07/reusable-components-custom-elements-shadow-dom-npm/) - Custom Elements、Shadow DOM、NPMを使った再利用可能なコンポーネントについての記事。
- [The Motivation For Using Web Components, an Introduction](https://www.thinktecture.com/web-components/introduction-and-motivation/) - Web Componentsを使う動機を解説する入門記事。
- [The Power of Web Components](https://hacks.mozilla.org/2018/11/the-power-of-web-components/) - Web Componentsの可能性を紹介する記事。
- [Web Components 101](https://nhswd.com/blog/web-components-101-what-are-web-components/) - Web Componentsの基礎を解説する記事。
- [Web Components: From the orbital height](https://javascript.info/webcomponents-intro) - Web Componentsの全体像を紹介する記事。
- [What are browser-native web components?](https://gomakethings.com/what-are-browser-native-web-components/) - ブラウザーに組み込まれたWeb Componentsとは何かを説明する記事。
- [Why Web Components?](https://www.fast.design/docs/resources/why-web-components/) - Web Componentsを選ぶ理由を説明する資料。

## 標準 <a id="standards"></a>

### Custom Elements

Custom Elementsは、十分な機能を備えた独自のDOM要素を作る手段を提供します。

- [A Guide to Custom Elements for React Developers](https://css-tricks.com/a-guide-to-custom-elements-for-react-developers/) - React開発者向けのCustom Elementsガイド。
- [All about HTML Custom Elements](https://github.com/shawnbot/custom-elements) - HTMLのCustom Elementsについてまとめた資料。
- [Custom elements](https://javascript.info/custom-elements) - カスタム要素の解説。
- [Custom Elements v1: Reusable Web Components](https://web.dev/custom-elements-v1/) - 再利用可能なWeb Componentsを作るCustom Elements v1の解説。
- [Handling properties in custom element upgrades](https://nolanlawson.com/2021/08/03/handling-properties-in-custom-element-upgrades/) - カスタム要素のアップグレード時のプロパティ処理についての記事。
- [Handy Custom Elements' Patterns](https://gist.github.com/WebReflection/ec9f6687842aa385477c4afca625bbf4) - Custom Elementsで使える実装パターン集。
- [HTML Living Standard: Custom elements](https://html.spec.whatwg.org/multipage/custom-elements.html) - HTML Living Standardのカスタム要素に関する仕様。
- [MDN - Using Custom Elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) - MDNのCustom Elements利用ガイド。
- [web-platform-tests](https://github.com/web-platform-tests/wpt/tree/master/custom-elements) - Custom Elementsに関するWebプラットフォームのテスト集。

### Shadow DOM

Shadow DOMは、複数のDOMツリーを一つの階層へ組み合わせ、文書内で相互作用させる方法を定め、DOMの構成を改善します。

- [A complete guide on shadow DOM and event propagation](https://pm.dartus.fr/blog/a-complete-guide-on-shadow-dom-and-event-propagation/) - Shadow DOMとイベント伝播を解説するガイド。
- [DOM Living Standard: Shadow tree](https://dom.spec.whatwg.org/#shadow-trees) - DOM Living Standardのシャドウツリーに関する仕様。
- [MDN - Using Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) - MDNのShadow DOM利用ガイド。
- [Mind the document.activeElement!](https://dev.to/open-wc/mind-the-document-activeelement-2o9a) - document.activeElementの扱いへの注意を説明する記事。
- [Open vs. Closed Shadow DOM](https://blog.revillweb.com/open-vs-closed-shadow-dom-9f3d7427d1af) - openとclosedのShadow DOMを比較する記事。
- [Shadow DOM](https://javascript.info/shadow-dom) - Shadow DOMの解説。
- [Shadow DOM and events](https://javascript.info/shadow-dom-events) - Shadow DOMとイベントの解説。
- [Shadow DOM in depth](https://github.com/praveenpuglia/shadow-dom-in-depth) - Shadow DOMを詳しく解説する資料。
- [Shadow DOM slots, composition](https://javascript.info/slots-composition) - Shadow DOMのスロットと合成の解説。
- [Shadow DOM styling](https://javascript.info/shadow-dom-style) - Shadow DOMのスタイル設定の解説。
- [Shadow DOM v1: Self-Contained Web Components](https://web.dev/shadowdom-v1/) - 自己完結したWeb Componentsを作るShadow DOM v1の解説。
- [The Rise of Shadow DOM](https://medium.com/front-end-hacking/the-rise-of-shadow-dom-84aa1f731e82) - Shadow DOMの広がりについての記事。
- [Understanding Slot Updates with Web Components](https://coryrylan.com/blog/understanding-slot-updates-with-web-components) - Web Componentsでのスロットの更新を解説する記事。
- [What is the Shadow DOM?](https://bitsofco.de/what-is-the-shadow-dom/) - Shadow DOMとは何かを説明する記事。
- [Who doesn't love some slots?](https://dev.to/westbrook/who-doesnt-love-some-s-3de0) - スロットについての記事。
- [Your Content in Shadow DOM Portals](https://dev.to/westbrook/your-content-in-shadow-dom-portals-3cdb) - Shadow DOMのポータルでコンテンツを扱う記事。
- [web-platform-tests](https://github.com/web-platform-tests/wpt/tree/master/shadow-dom) - Shadow DOMに関するWebプラットフォームのテスト集。

### HTML Templates

`<template>`要素は、スクリプトで複製して文書へ挿入できるHTML断片を宣言するために使います。

- [Crafting Reusable HTML Templates](https://css-tricks.com/crafting-reusable-html-templates/) - 再利用可能なHTMLテンプレートを作る方法を説明する記事。
- [HTML Living Standard: The `template` element](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element) - HTML Living Standardのtemplate要素に関する仕様。
- [HTML templates with vanilla JavaScript](https://gomakethings.com/html-templates-with-vanilla-javascript/) - ライブラリを使わないJavaScriptでHTMLテンプレートを扱う記事。
- [MDN - &lt;template&gt;: The Content Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) - MDNのコンテンツテンプレート要素のリファレンス。
- [MDN - Using templates and slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots) - MDNのテンプレートとスロットの利用ガイド。
- [Template element](https://javascript.info/template-element) - テンプレート要素の解説。
- [Templating in HTML](https://kittygiraudel.com/2022/09/30/templating-in-html/) - HTMLでのテンプレート処理についての記事。
- [The HTML5 template element](https://dev.to/ahferroin7/the-html5-template-element-26b6) - HTML5のテンプレート要素についての記事。
- [Understanding The Template Element In HTML](https://blog.openreplay.com/understanding-the-template-element-in-html/) - HTMLのテンプレート要素を解説する記事。
- [web-platform-tests](https://github.com/web-platform-tests/wpt/tree/master/html/semantics/scripting-1/the-template-element) - テンプレート要素に関するWebプラットフォームのテスト集。

### CSS Shadow Parts

CSS Shadow Partsは、スタイル設定のためにShadow DOM内部の特定要素を公開できるようにします。

- [W3C初回公開作業草案](https://www.w3.org/TR/css-shadow-parts-1/) - CSS Shadow Partsに関するW3Cの初回公開作業草案。
- [CSS Shadow Parts are coming!](https://dev.to/webpadawan/css-shadow-parts-are-coming-mi5) - CSS Shadow Partsの導入についての記事。
- [MDN - `::part()` CSS pseudo element](https://developer.mozilla.org/en-US/docs/Web/CSS/::part) - MDNのpart疑似要素のリファレンス。
- [MDN - `part` global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part) - MDNのpartグローバル属性のリファレンス。
- [::part and ::theme, an ::explainer](https://meowni.ca/posts/part-theme-explainer/) - partとthemeの提案を説明する記事。
- [web-platform-tests](https://github.com/web-platform-tests/wpt/tree/master/css/css-shadow-parts) - CSS Shadow Partsに関するWebプラットフォームのテスト集。

## ガイド <a id="guides"></a>

### アクセシビリティ <a id="accessibility"></a>

- [Accessibility for Web Components](https://developer.salesforce.com/blogs/2020/01/accessibility-for-web-components.html) - Web Componentsのアクセシビリティについての記事。
- [Accessibility with ID Referencing and Shadow DOM](https://coryrylan.com/blog/accessibility-with-id-referencing-and-shadow-dom) - ID参照とShadow DOMによるアクセシビリティについての記事。
- [Dialogs and shadow DOM: can we make it accessible?](https://nolanlawson.com/2022/06/14/dialogs-and-shadow-dom-can-we-make-it-accessible/) - ダイアログとShadow DOMのアクセシビリティを検討する記事。
- [How to Make Accessible Web Components — a Brief Guide](https://www.sitepoint.com/accessible-web-components/) - アクセシブルなWeb Componentsを作るための簡潔なガイド。
- [Managing focus in the shadow DOM](https://nolanlawson.com/2021/02/13/managing-focus-in-the-shadow-dom/) - Shadow DOM内のフォーカス管理についての記事。
- [The future of accessibility for custom elements](https://robdodson.me/the-future-of-accessibility-for-custom-elements/) - カスタム要素のアクセシビリティの将来についての記事。
- [The Guide to Accessible Web Components](https://www.erikkroes.nl/blog/accessibility/the-guide-to-accessible-web-components-draft/) - アクセシブルなWeb Componentsのガイド。
- [Web Components and the Accessibility Object model (AOM)](https://www.24a11y.com/2019/web-components-and-the-aom/) - Web ComponentsとAccessibility Object Model（AOM）についての記事。
- [Web Components punch list](https://www.tpgi.com/web-components-punch-list/) - Web Componentsの改善事項をまとめた記事。
- [Web components still need to be accessible](https://www.24a11y.com/2018/web-components-still-need-to-be-accessible/) - Web Componentsにもアクセシビリティが必要であることを説明する記事。

### ベストプラクティス <a id="best-practices"></a>

- [Custom Element Best Practices](https://web.dev/custom-elements-best-practices/) - カスタム要素のベストプラクティス。
- [Developing Components: Publishing](https://open-wc.org/guides/developing-components/publishing/) - コンポーネントの公開に関するガイド。
- [Gold Standard Checklist for Web Components](https://github.com/webcomponents/gold-standard/wiki) - Web Componentsの品質を確認するチェックリスト。
- [Guidelines for creating web platform compatible components](https://w3ctag.github.io/webcomponents-design-guidelines/) - Webプラットフォームと互換性のあるコンポーネントを作るための指針。
- [How to Publish Web Components to NPM](https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm/) - Web ComponentsをNPMに公開する方法を説明する記事。
- [Open Web Components Recommendations](https://open-wc.org) - Open Web Componentsの推奨事項。

### コードラボ <a id="codelabs"></a>

- [Build a Story Web Component with LitElement](https://dev.to/straversi/build-a-story-web-component-with-litelement-e59) - LitElementでストーリー用Web Componentを作る教材。
- [Building Custom Elements with Web Components for the 2020 Elections](https://medium.com/stories-from-upstatement/building-custom-elements-with-web-components-for-the-2020-elections-f767ff9e9c6a) - 2020年の選挙に向けてWeb Componentsでカスタム要素を作る記事。
- [Creating Custom Form Controls with ElementInternals](https://css-tricks.com/creating-custom-form-controls-with-elementinternals/) - ElementInternalsで独自のフォームコントロールを作る教材。
- [From Web Component to Lit Element](https://codelabs.developers.google.com/codelabs/the-lit-path) - Web ComponentからLit Elementへ進むコードラボ。
- [HowTo Components –`<howto-checkbox>`](https://web.dev/components-howto-checkbox/) - チェックボックスコンポーネントの実装教材。
- [HowTo Components –`<howto-tabs>`](https://web.dev/components-howto-tabs/) - タブコンポーネントの実装教材。
- [HowTo Components – `<howto-tooltip>`](https://web.dev/components-howto-tooltip/) - ツールチップコンポーネントの実装教材。
- [Lit: basics](https://open-wc.org/codelabs/basics/lit-html.html#0) - Litの基礎を学ぶコードラボ。
- [Lit: intermediate](https://open-wc.org/codelabs/intermediate/lit-html.html#0) - Litの中級コードラボ。
- [Lit for React Developers](https://codelabs.developers.google.com/codelabs/lit-2-for-react-devs#0) - React開発者向けのLitコードラボ。
- [Web Components: basics](https://open-wc.org/codelabs/basics/web-components.html#0) - Web Componentsの基礎を学ぶコードラボ。

### 例 <a id="examples"></a>

- [generic-components](https://github.com/thepassle/generic-components) - アクセシビリティと使いやすさを重視した、一般的なWeb Components集。
- [howto-components](https://github.com/GoogleChromeLabs/howto-components) - 一般的なWeb UIパターンを実装したWeb Components集。
- [Nude UI](https://github.com/LeaVerou/nudeui) - アクセシブルでカスタマイズ可能な、非常に軽量なWeb Components集。
- [open-wc code examples](https://open-wc.org/guides/developing-components/code-examples/) - Web Components開発のベストプラクティスと設計パターンをまとめた実装例。
- [vanilla-retro-js](https://github.com/martine-dowden/vanilla-retro-js) - HTMLの非推奨タグを対象とした、ライブラリを使わないJavaScriptのUIコンポーネントライブラリ。
- [web-components-examples](https://github.com/mdn/web-components-examples) - MDNのWeb Componentsドキュメントに対応する実装例集。

## 記事 <a id="articles"></a>

### アーキテクチャ <a id="architecture"></a>

- [A deep analysis into isomorphic, autonomous cross-framework usage #MicroFrontends](https://itnext.io/a-deep-analysis-into-isomorphic-autonomous-cross-framework-usage-microfrontends-364271dc5fa9) - アイソモーフィックな構成、独立性、フレームワークをまたぐ利用を詳しく検討する、マイクロフロントエンドの記事。
- [Frankenstein Migration: Framework-Agnostic Approach (Part 1)](https://www.smashingmagazine.com/2019/09/frankenstein-migration-framework-agnostic-approach-part-1/) - 特定のフレームワークに依存しない移行方法についての記事、第1部。
- [Frankenstein Migration: Framework-Agnostic Approach (Part 2)](https://www.smashingmagazine.com/2019/09/frankenstein-migration-framework-agnostic-approach-part-2/) - 特定のフレームワークに依存しない移行方法についての記事、第2部。
- [Generating Config driven Dynamic Forms using Web Components](https://codeburst.io/generating-config-driven-dynamic-forms-using-web-components-7c8d400f7f2e) - Web Componentsで設定に基づく動的フォームを生成する記事。
- [Hiding internal framework methods and properties from web component APIs](https://component.kitchen/blog/posts/hiding-internal-framework-methods-and-properties-from-web-component-apis) - Web ComponentのAPIから内部フレームワークのメソッドとプロパティを隠す方法を説明する記事。
- [How to deliver Custom Elements](https://medium.com/@WebReflection/how-to-deliver-custom-elements-702fae32d25c) - Custom Elementsを配布する方法についての記事。
- [Making Web Components for Different Contexts](https://css-tricks.com/making-web-components-for-different-contexts/) - 異なる利用状況に応じてWeb Componentsを作る記事。
- [Supporting both automatic and manual registration of custom elements](https://component.kitchen/blog/posts/supporting-both-automatic-and-manual-registration-of-custom-elements) - カスタム要素の自動登録と手動登録の両方をサポートする記事。
- [Web Components — the right way](https://equinusocio.dev/blog/web-components-the-right-way/) - Web Componentsの作り方についての記事。

### 相互運用性 <a id="interoperability"></a>

- [Advanced Tooling for Web Components](https://css-tricks.com/advanced-tooling-for-web-components/) - Web Components向けの高度なツールについての記事。
- [Custom Elements Everywhere](https://custom-elements-everywhere.com) - Custom Elementsの相互運用性に関する資料。
- [Custom Elements That Work Anywhere](https://robdodson.me/interoperable-custom-elements/) - さまざまな環境で動作するCustom Elementsについての記事。
- [JavaScript frameworks, meet Web Components](https://www.voorhoede.nl/nl/blog/javascript-frameworks-meet-web-components/) - JavaScriptフレームワークとWeb Componentsを組み合わせる記事。
- [Web Components aren't a framework replacement - they're better than that](https://lamplightdev.com/blog/2020/01/18/web-components-arent-a-framework-replacement-theyre-better-than-that/) - Web Componentsの役割をフレームワークの置き換えにとどまらないものとして論じる記事。
- [Web Components: Seamlessly interoperable](https://medium.com/@sergicontre/web-components-seamlessly-interoperable-82efd6989ca4) - Web Componentsの円滑な相互運用についての記事。

### 制約 <a id="limitations"></a>

- [Beyond the polyfills: how Web Components affect us today?](https://dev.to/webpadawan/beyond-the-polyfills-how-web-components-affect-us-today-3j0a) - ポリフィル以外のWeb Componentsの影響についての記事。
- [Custom elements, shadow DOM and implicit form submission](https://www.hjorthhansen.dev/shadow-dom-and-forms/) - カスタム要素、Shadow DOM、暗黙的なフォーム送信についての記事。
- [Form-associated custom elements](https://www.hjorthhansen.dev/shadow-dom-form-participation/) - フォームに関連付けられたカスタム要素についての記事。
- [You might not need shadow DOM](https://www.hjorthhansen.dev/you-might-not-need-shadow-dom/) - Shadow DOMを使わない選択肢を検討する記事。

### スタイル設定 <a id="styling"></a>

- [Does shadow DOM improve style performance?](https://nolanlawson.com/2021/08/15/does-shadow-dom-improve-style-performance/) - Shadow DOMがスタイル処理の性能を改善するか検討する記事。
- [Eschewing Shadow DOM](https://every-layout.dev/blog/eschewing-shadow-dom/) - Shadow DOMを使わない方法についての記事。
- [How Nordhealth uses Custom Properties in Web Components](https://web.dev/custom-properties-web-components/) - NordhealthでのWeb Componentsにおけるカスタムプロパティの利用例。
- [Options for styling web components](https://nolanlawson.com/2021/01/03/options-for-styling-web-components/) - Web Componentsのスタイル設定の選択肢についての記事。
- [Style scoping versus shadow DOM: which is fastest?](https://nolanlawson.com/2022/06/22/style-scoping-versus-shadow-dom-which-is-fastest/) - スタイルのスコープ制限とShadow DOMの速度を比較する記事。
- [Styling a Web Component](https://css-tricks.com/styling-a-web-component/) - Web Componentのスタイル設定についての記事。
- [Styling in the Shadow DOM With CSS Shadow Parts](https://css-tricks.com/styling-in-the-shadow-dom-with-css-shadow-parts/) - CSS Shadow Partsを使ったShadow DOM内のスタイル設定の記事。
- [Thinking Through Styling Options for Web Components](https://css-tricks.com/thinking-through-styling-options-for-web-components/) - Web Componentsのスタイル設定の選択肢を検討する記事。
- [Web Component Pseudo-Classes and Pseudo-Elements are Easier Than You Think](https://css-tricks.com/web-component-pseudo-classes-and-pseudo-elements/) - Web Componentの疑似クラスと疑似要素についての記事。
- [Web Standards Meet User-Land: Using CSS-in-JS to Style Custom Elements](https://css-tricks.com/web-standards-meet-user-land-using-css-in-js-to-style-custom-elements/) - CSS-in-JSを使ってCustom Elementsのスタイルを設定する記事。

## 実利用 <a id="real-world"></a>

### 事例 <a id="case-studies"></a>

- [Apple Just Shipped Web Components to Production and You Probably Missed It](https://dev.to/ionic/apple-just-shipped-web-components-to-production-and-you-probably-missed-it-57pf) - AppleによるWeb Componentsの本番導入を紹介する記事。
- [Bringing Order to Web Design Chaos (with Web Components)](https://dev.to/thatjoemoore/bringing-order-to-web-design-chaos--3fhb) - Web ComponentsでWebデザインの混乱を整理する記事。
- [Get moving with Microsoft’s FAST web components](https://www.infoworld.com/article/3618410/get-moving-with-microsofts-fast-web-components.html) - MicrosoftのFAST Web Componentsを紹介する記事。
- [How Web Components Are Used at GitHub and Salesforce](https://thenewstack.io/how-web-components-are-used-at-github-and-salesforce/) - GitHubとSalesforceでのWeb Componentsの利用事例。
- [How we use Web Components at GitHub](https://github.blog/2021-05-04-how-we-use-web-components-at-github/) - GitHubでのWeb Componentsの利用方法を紹介する記事。
- [Implementing a Design Language System with Stencil.js](https://medium.com/@Danetag/implementing-a-design-language-system-with-stencil-js-515432918eb5) - Stencil.jsでデザイン言語システムを実装する記事。
- [ING ❤ Web Components](https://dev.to/thepassle/ing--web-components-aef) - INGでのWeb Componentsについての記事。
- [ING Open-Sources Lion, Its White-Label Web Component Library – Q&A with Thomas Allmer](https://www.infoq.com/articles/ing-open-sources-lion-web-component/) - INGによるLionのオープンソース化について、Thomas Allmerに聞く質疑応答。
- [Lessons Learned, making our app with Web Components](https://medium.com/samsung-internet-dev/lessons-learned-making-our-app-with-web-components-bf55379cfcda) - Web Componentsでアプリを作って得られた教訓を紹介する記事。
- [Looking back on five years of web components](https://bitworking.org/news/2019/07/looking-back-on-five-years-of-web-components) - Web Componentsを使った5年間を振り返る記事。
- [Shipping Web Components in 2020](https://dev.to/joe8bit/shipping-web-components-in-2020-2h54) - 2020年のWeb Componentsの提供についての記事。
- [The Firefox UI is now built with Web Components](https://briangrinstead.com/blog/firefox-webcomponents/) - FirefoxのUIでのWeb Componentsの利用を紹介する記事。
- [Using web components to encapsulate CSS and resolve design system conflicts](https://about.gitlab.com/blog/2021/05/03/using-web-components-to-encapsulate-css-and-resolve-design-system-conflicts/) - Web ComponentsでCSSをカプセル化し、デザインシステムの競合を解消する事例。
- [Web Components at GitHub - Web Components SF Meetup](https://www.infoq.com/news/2020/08/web-components-sf-meetup-2020/) - Web Components SF Meetupで紹介されたGitHubの利用事例。
- [Web Components at Scale at Salesforce: Challenges Encountered, Lessons Learnt](https://www.infoq.com/news/2020/03/web-components-salesforce-lwc/) - Salesforceでの大規模なWeb Components利用における課題と教訓。
- [Web Development At Scale: Composable Applications With Web Components](https://medium.com/@jarrodek/composable-applications-with-web-components-ebe5158387be) - Web Componentsによる合成可能なアプリケーションと、大規模なWeb開発についての記事。
- [web.dev engineering blog #1: How we build the site and use Web Components](https://web.dev/how-we-build-webdev-and-use-web-components/) - web.devのサイト構築とWeb Componentsの利用を紹介するエンジニアリングブログ記事。

### コンポーネント <a id="components"></a>

- [`<active-table>`](https://github.com/OvidijusParsiunas/active-table) - 編集可能な表のWeb Component。
- [`<api-viewer>`](https://github.com/web-padawan/api-viewer-element) - Web ComponentsのAPIドキュメントとライブプレイグラウンド。
- [`<chess-board>`](https://github.com/justinfagnani/chessboard-element) - 単独で使えるチェス盤のWeb Component。
- [`<css-doodle>`](https://github.com/css-doodle/css-doodle) - CSSでパターンを描くWeb Component。
- [`<dark-mode-toggle>`](https://github.com/GoogleChromeLabs/dark-mode-toggle) - ダークモードの切り替えボタンやスイッチを作れるカスタム要素。
- [`<deep-chat>`](https://github.com/OvidijusParsiunas/deep-chat) - AI機能を備えたチャット用Web Component。
- [`<emoji-picker>`](https://github.com/nolanlawson/emoji-picker-element) - Web Componentとして配布される軽量な絵文字ピッカー。
- [`<fg-modal>`](https://github.com/filamentgroup/fg-modal) - アクセシブルなモーダルダイアログのWeb Component。
- [`<file-viewer>`](https://github.com/avipunes/file-viewer) - Svelteで構築された、ファイル表示用のWeb Component。
- [`<json-viewer>`](https://github.com/alenaksu/json-viewer) - JSONデータをツリー表示で可視化するWeb Component。
- [`<lite-youtube>`](https://github.com/paulirish/lite-youtube-embed) - 表示性能を重視した、軽量なYouTube埋め込み。
- [`<midi-player>`](https://github.com/cifkao/html-midi-player) - MIDIファイルの再生と可視化を行うWeb Components。
- [`<model-viewer>`](https://github.com/google/model-viewer) - インタラクティブな3Dモデルを描画するWeb Component。
- [`<notectl-editor>`](https://github.com/Samyssmile/notectl) - プラグイン構造と不変の状態を備え、設定なしで特定のフレームワークに依存せず配置できる、現代的なリッチテキストエディター。
- [`<pdfjs-viewer-element>`](https://github.com/alekswebnet/pdfjs-viewer-element) - PDF.jsの標準ビューアーを埋め込むカスタム要素。
- [`<phantom-ui>`](https://github.com/Aejkatappaja/phantom-ui) - 実際のDOMを計測し、それに合った光が流れるプレースホルダーを描画するスケルトンローダー。
- [`<player-x>`](https://github.com/playerxo/playerx) - メディアプレイヤーのWeb Component。
- [`<progressive-image>`](https://github.com/andreruffert/progressive-image-element) - 画像のプレースホルダーを段階的に改善するカスタム要素。
- [`<qr-code>`](https://github.com/bitjson/qr-code) - カスタマイズとアニメーションに対応した、SVG形式のQRコードを描画するWeb Component。
- [`<range-slider>`](https://github.com/andreruffert/range-slider-element) - キーボード操作に対応した、アクセシブルな範囲スライダーのカスタム要素。
- [`<rapi-doc>`](https://github.com/mrin9/RapiDoc) - OpenAPI形式の仕様記述からドキュメントを作るWeb Component。
- [`<shader-doodle>`](https://github.com/halvves/shader-doodle) - シェーダーの記述と描画を行うWeb Component。
- [`<theme-switch>`](https://github.com/mahozad/theme-switch) - ライト、ダーク、システムのテーマを切り替える、アニメーション付きトグルボタン。
- [`<trix-editor>`](https://github.com/basecamp/trix) - 日常的な文章作成に使えるリッチテキストエディターのカスタム要素。
- [`<vime-player>`](https://github.com/vime-js/vime) - カスタマイズと拡張が可能で、アクセシビリティに対応した、特定のフレームワークに依存しないメディアプレイヤー。
- [`<web-vitals>`](https://github.com/stefanjudis/web-vitals-element) - カスタム要素を使って、[web vitals](https://github.com/GoogleChrome/web-vitals)を素早くページに導入できます。

### コンポーネントライブラリ <a id="component-libraries"></a>

- [AgnosticUI](https://github.com/AgnosticUI/agnosticui) - LitのWeb Componentsをプロジェクトへ直接コピーする、CLIベースのUIコンポーネントライブラリ。ReactとVueのラッパーを備え、各フレームワークに自然な形で利用できます。
- [AMP](https://github.com/ampproject/amphtml) - 利用者を中心に据えたWebサイト、ストーリー、広告、メールなどを簡単に作るためのWeb Componentフレームワーク。
- [AnywhereUI](https://github.com/adaleks/anywhere-ui) - フレームワークとのバインディングを含む、多機能なWeb Components集。StencilJSで作られています。
- [Apollo Elements](https://github.com/apollo-elements/apollo-elements) - さまざまなWeb ComponentsライブラリでApollo GraphQLを使うためのカスタム要素。
- [AXA Pattern Library](https://github.com/axa-ch-webhub-cloud/pattern-library) - Web Componentsで構築された、AXA CHのUIコンポーネントライブラリ。
- [Blackstone UI](https://github.com/kjantzer/bui) - Blackstone Publishingによる、インターフェース作成用のWeb Components。
- [Blaze UI Atoms](https://github.com/BlazeSoftware/atoms) - Blaze CSSを使ったWeb Components集。
- [Brightspace UI core](https://github.com/BrightspaceUI/core) - Brightspaceアプリケーションを作るためのWeb Components集。
- [Burnish Components](https://github.com/danfking/burnish/tree/main/packages/components) - MCPツール呼び出しの出力をUIとして描画するWeb Components。
- [Clever components](https://github.com/CleverCloud/clever-components) - Clever CloudによるWeb Components集。
- [Curvenote](https://github.com/curvenote/article) - インタラクティブな科学記事を作るためのWeb Components。
- [DataFormsJS](https://github.com/dataformsjs/dataformsjs) - SPAのルーティング、Webサービスのデータ表示などに使う、単独で利用できるコンポーネント。
- [Dile Components](https://github.com/Polydile/dile-components) - Webサイトやアプリケーション向けの汎用Web Components。
- [elements-sk](https://github.com/google/elements-sk) - 必要なものを選んで組み合わせるWeb開発のためのカスタム要素集。
- [github-elements](https://github.com/github/github-elements) - GitHubのWeb Components集。
- [Elix](https://github.com/elix/elix) - 一般的なUIパターンに対応する、高品質でカスタマイズ可能なWeb Components。
- [Furo Webcomponents](https://github.com/eclipse/eclipsefuro-web) - Eclipse Furoとの組み合わせに適した、企業利用向けのWeb Components集。
- [Fusion Web Components](https://github.com/equinor/fusion-web-components) - Equinor Fusionで使われているWeb Components集。
- [Ignite UI Web Components](https://github.com/IgniteUI/igniteui-webcomponents) - Infragisticsによる包括的なUIコンポーネントライブラリ。
- [Immersive Custom Elements](https://github.com/MozillaReality/immersive-custom-elements) - 没入型のVR・ARコンテンツを埋め込むためのWeb Components集。
- [Joomla UI custom elements](https://github.com/joomla-projects/custom-elements) - Joomla 4のCustom Elements集。
- [Ketch.UP](https://github.com/smeup/ketchup) - Sme.UP向けのWeb Componentsライブラリ。
- [LDRS](https://github.com/GriffinJohnston/ldrs) - 軽量でカスタマイズ可能な、読み込み中のアニメーションとスピナー。
- [Lion Web Components](https://github.com/ing-bank/lion) - 高い性能とアクセシビリティ、柔軟性を備えたWeb Components集。
- [LRNWebComponents](https://github.com/elmsln/lrnwebcomponents/) - ELMS:LNが制作した、さまざまなプロジェクトに使えるWeb Components。
- [Lume](https://github.com/lume/lume) - 3Dグラフィックス用のカスタム要素。WebGL・WebGPUの描画にThree.jsを、リアクティビティとテンプレート処理にSolid.jsを使います。
- [Medblocks UI](https://github.com/medblocks/medblocks-ui) - openEHRとFHIRのシステムを素早く開発するためのWeb Components。
- [Microsoft Graph Toolkit](https://github.com/microsoftgraph/microsoft-graph-toolkit) - Microsoft Graph向けのWeb Components集。
- [Mutation testing elements](https://github.com/stryker-mutator/mutation-testing-elements) - ミューテーションテストの結果を表すスキーマと、その結果を可視化するWeb Components。
- [Nightingale](https://github.com/ebi-webcomponents/nightingale) - 生命科学向けのデータ可視化用Web Components。
- [Nuxeo Elements](https://github.com/nuxeo/nuxeo-elements) - Web Componentsを使ってNuxeoのWebアプリケーションを作るためのコンポーネント。
- [One Platform Components](https://github.com/1-Platform/op-components) - Red Hat One Platform向けのWeb Components集。
- [Open Business Application Platform Web Components](https://github.com/openbap/obap-elements) - 業務アプリケーション向けに設計されたWeb Components集。
- [Pixano Elements](https://github.com/pixano/pixano-elements) - データへのアノテーション作業に特化した、再利用可能なWeb Components。
- [PlayCanvas Web Components](https://github.com/playcanvas/web-components) - PlayCanvas Engineを使って、インタラクティブな3D Webアプリケーションを作るためのカスタム要素。
- [Playground Elements](https://github.com/PolymerLabs/playground-elements) - Web Componentsによる、サーバーレスでコードを扱う体験。
- [Shoelace](https://github.com/shoelace-style/shoelace) - 先を見据えて設計されたWeb Componentsライブラリ。
- [Smart Web Components](https://github.com/HTMLElements/smart-webcomponents) - 業務アプリケーション向けのWeb Components。
- [Stripe Elements](https://github.com/bennypowers/stripe-elements) - Stripe.js v3 Elementsを包むカスタム要素のラッパー。
- [TEI Publisher Components](https://github.com/eeditiones/tei-publisher-components) - TEI Publisherと、それが生成するアプリケーションで使われるWeb Components集。
- [Titanium Elements](https://github.com/LeavittSoftware/titanium-elements) - Leavitt Group Enterprisesで使われている軽量なWeb Components集。
- [Tradeshift Elements](https://github.com/Tradeshift/elements) - Web Componentsとして再利用できるTradeshiftのUIコンポーネント。
- [TrendChart Elements](https://github.com/WebLogin/trendchart-elements) - シンプルで軽量な、レスポンシブ対応のチャートを生成するコンポーネント。
- [Umbraco UI Components](https://github.com/umbraco/Umbraco.UI) - Umbraco CMS向けのUI用Web Components集。
- [Vaadin components](https://github.com/vaadin/web-components) - 業務用Webアプリケーションを作るための、高品質で進化を続けるWeb Components集。
- [VSCode Webview Elements](https://github.com/bendera/vscode-webview-elements) - Webview APIを使うVSCode拡張機能を作るためのコンポーネント。
- [Warp View](https://github.com/senx/warpview) - Warp 10向けのチャート用Web Components集。
- [Webmarkets web components](https://github.com/Webmarkets/wm-web-components) - Webmarketsが公開しているWeb Components集。
- [Wired Elements](https://github.com/wiredjs/wired-elements) - 手描きのスケッチ風の外観を持つ、一般的なUI要素集。
- [Wokwi Elements](https://github.com/wokwi/wokwi-elements) - Arduinoとさまざまな電子部品のWeb Components。
- [XWeather](https://github.com/kherrick/x-weather) - OpenWeatherMap APIの一部を実装したWeb Components集。

### デザインシステム <a id="design-systems"></a>

- [Astro Space UX Design System](https://github.com/RocketCommunicationsInc/astro) - 確立された操作パターンを使って、宇宙関連アプリの豊かな利用体験を作るためのコンポーネント集。
- [Auro Design System](https://auro.alaskaair.com) - アイデアを発展させ、将来に向けた協働を支えるAlaska Airlinesのデザインシステム。
- [Blueprint UI](https://blueprintui.dev) - 柔軟で軽量なコンポーネントを備えた、Web Componentベースのデザインシステム。
- [Bolt Design System](https://github.com/boltdesignsystem/bolt) - TwigとWeb Componentsを使ったUIコンポーネント、再利用可能な視覚スタイル、開発ツール。
- [Calcite Components](https://github.com/Esri/calcite-components) - EsriのCalciteデザインフレームワークで共用するWeb Components。
- [Carbon Web Components](https://github.com/carbon-design-system/carbon-web-components) - Web Componentsを基盤にしたCarbon Design Systemの実装。
- [Clarity Core Web Components](https://github.com/vmware-clarity/core/tree/main/projects/core) - Clarity Design SystemのWeb Components一式。
- [Crayons](https://github.com/freshdesk/crayons) - Freshworks Design Systemに準拠したWeb Components集。
- [FAST Components](https://github.com/microsoft/fast/tree/master/packages/web-components) - FASTデザイン言語に基づくWeb Componentsライブラリ。
- [Fluent UI Web Components](https://github.com/microsoft/fluentui/tree/master/packages/web-components) - MicrosoftのFluentデザイン言語に対応するWeb Componentsライブラリ。
- [Forge Components](https://github.com/tyler-technologies-oss/forge) - Forge Design Systemに準拠したWeb Componentsライブラリ。
- [GOV.UK Web Components](https://github.com/tgreyuk/govuk-webcomponents) - GOV.UK Design Systemを利用する、カプセル化されたWeb Components集。
- [Helix UI](https://github.com/HelixDesignSystem/helix-ui) - Helix Design System向けのWeb Componentsライブラリ。
- [Liquid](https://github.com/emdgroup-liquid/liquid) - Liquid Design Systemに基づくUIコンポーネントライブラリ。
- [Lyne Components](https://github.com/lyne-design-system/lyne-components) - Web Componentsを基盤とするLyne Design Systemの構成要素。
- [Material Web Components](https://github.com/material-components/material-web) - Material DesignをWeb Componentsとして実装したライブラリ。
- [Momentum UI Web Components](https://github.com/momentum-design/momentum-ui/tree/master/web-components) - Momentum Designに基づくUIコンポーネント集。
- [Nord](https://nordhealth.design) - 製品、デジタル体験、ブランドのためのNordhealthのデザインシステム。
- [NuML | NUDE Elements](https://github.com/tenphi/numl) - Web Componentsと実行時のCSS生成に基づく、HTMLフレームワークとデザインシステム。
- [NVIDIA Elements](https://github.com/nvidia/elements) - AI・MLファクトリー、ロボティクス、自動運転車向けのデザイン言語とUI Agent Harness。
- [OutlineJS](https://github.com/phase2/outline) - Web Componentsを基盤とするデザインシステムのスターターキット。
- [PatternFly Elements](https://github.com/patternfly/patternfly-elements) - Unified Design Kitに基づく、柔軟で軽量なWeb Components集。
- [Pharos Design System](https://github.com/ithaka/pharos) - 一貫性があり、利用者を支える美しい体験を作るためのJSTORのデザインシステム。
- [Red Hat Design System](https://github.com/RedHat-UX/red-hat-design-system) - Red Hatブランドで統一された体験を作るためのWeb Components。
- [Siemens iX Web Components](https://github.com/siemens/ix/tree/main/packages/core) - Siemens iXデザインシステムを実装するWeb Components。
- [Spectrum Web Components](https://github.com/adobe/spectrum-web-components) - Adobe Spectrumデザイン言語をWeb Componentsで実装したライブラリ。
- [UI5 Web Components](https://github.com/SAP/ui5-webcomponents) - SAP Fiori Design Guidelinesを実装する、再利用可能なUI要素集。
- [U-M Library Design System](https://design-system.lib.umich.edu) - ミシガン大学図書館のデザインシステム。
- [Zooplus web components](https://github.com/zooplus/zoo-web-components) - Z+ショップのスタイルガイドを実装するWeb Components集。

### ユースケース <a id="use-cases"></a>

- [How we chose to build our Design System using StencilJS Web Components](https://medium.com/8451/how-we-chose-to-build-our-design-system-using-stenciljs-web-components-4878c36743c5) - StencilJSのWeb Componentsを使ってデザインシステムを作ると決めた経緯を紹介する記事。
- [How searching for a bundle-free React led me to web components](https://www.bryanbraun.com/2020/08/31/how-searching-for-a-bundle-free-react-led-me-to-web-components/) - バンドル不要のReactを探したことが、Web Componentsにつながった経緯を紹介する記事。
- [Reasons Web Components are perfect for a big company](https://medium.com/@sergicontre/reasons-web-components-are-perfect-for-a-big-company-28790d712ad5) - Web Componentsが大企業に適している理由を論じる記事。
- [5 Reasons Web Components Are Perfect for Design Systems](https://ionicframework.com/blog/5-reasons-web-components-are-perfect-for-design-systems/) - Web Componentsがデザインシステムに適している5つの理由を紹介する記事。
- [Web components: the secret ingredient helping power the web](https://web.dev/web-components-io-2019/) - Webを支える技術としてWeb Componentsを紹介する記事。
- [Web Components for Enterprise. Part 1: Salesforce, Oracle, SAP](https://dev.to/webpadawan/web-components-for-enterprise-part-1-salesforce-oracle-sap-e70) - 企業でのWeb Componentsの利用例、第1部。Salesforce、Oracle、SAPを扱います。
- [Web Components for Enterprise. Part 2: Nuxeo, Ionic, Vaadin](https://dev.to/webpadawan/web-components-for-enterprise-part-2-nuxeo-ionic-vaadin-22l7) - 企業でのWeb Componentsの利用例、第2部。Nuxeo、Ionic、Vaadinを扱います。
- [Why I use Web Components - My use cases](https://dev.to/shihn/why-i-use-web-components-my-use-cases-1nip) - Web Componentsを使う理由と自身の利用例を紹介する記事。
- [Why we use Web Components](https://viljamis.com/2019/why-we-use-web-components/) - Web Componentsを使う理由についての記事。著者：[@viljamis](https://twitter.com/viljamis)。
- [Why we use Web Components](https://dev.to/ionic/why-we-use-web-components-2c1i) - Web Componentsを使う理由についての記事。著者：[@maxlynch](https://twitter.com/maxlynch)。

## ライブラリ <a id="libraries"></a>

### クラスベース <a id="class-based"></a>

- [DNA](https://github.com/chialab/dna) - プログレッシブなWeb Componentsライブラリ。
- [element-js](https://github.com/webtides/element-js) - わかりやすいAPIを備えた、シンプルで軽量なWeb Components用の基底クラス。
- [FAST Element](https://github.com/microsoft/fast/tree/master/packages/web-components/fast-element) - 高性能でメモリー効率がよく、標準に準拠したWeb Componentsを作るための軽量ライブラリ。
- [Forge Core](https://github.com/tyler-technologies-oss/forge-core) - Forge Web Componentsを作る際に使う構成要素とユーティリティ。
- [Joist](https://github.com/joist-framework/joist) - 生産性を高めるためにWeb Componentsへ必要最小限の機能を加える、小さなライブラリ群。
- [Lit](https://lit.dev) - 高速で軽量なWeb Componentsを作るためのシンプルなライブラリ。
- [Lightning Web Components](https://github.com/salesforce/lwc) - 高速で企業利用に適したWeb Componentsの基盤。
- [Lume Element](https://github.com/lume/element) - Solid.jsのシグナルとエフェクトを使い、リアクティビティとテンプレート処理を備えたカスタム要素を記述できます。
- [Omi](https://github.com/Tencent/omi) - 4kbのJavaScriptで提供される次世代Webフレームワーク。Web Components、JSX、Proxy、Store、Path Updatingを組み合わせます。
- [Panel](https://github.com/mixpanel/panel) - Web Componentsと仮想DOMを組み合わせ、Web標準で強力なUIを作るライブラリ。
- [ReadyMade](https://github.com/readymade-ui/readymade/tree/main/src/modules/core) - デコレーターでカスタム要素のクラスを記述できます。依存関係はありません。
- [slim.js](https://github.com/slimjs/slim.js) - 現代的な標準に基づく、高速で堅牢なフロントエンドの小規模フレームワーク。
- [Stencil](https://github.com/ionic-team/stencil) - Web Componentsを生成するコンパイラー。
- [Tonic](https://github.com/optoolco/tonic) - 機能を絞った、安定して監査しやすいコンポーネントフレームワーク。
- [WebCell](https://github.com/EasyWebApp/WebCell) - VDOM、JSX、MobX、TypeScriptに基づくWeb Componentsエンジン。

### 関数型 <a id="functional"></a>

- [atomico](https://github.com/atomicojs/atomico) - 関数とフックを使って、Web Componentsベースのインターフェースを作る小さなライブラリ。
- [Elemento](https://github.com/dsolimando/elemento) - シグナルとLitを使って、関数型のWeb Componentsを作るための軽量ライブラリ。
- [haunted](https://github.com/matthewp/haunted) - ReactのHooks APIをWeb Components向けに実装したライブラリ。
- [hybrids](https://github.com/hybridsjs/hybrids) - シンプルな関数型APIでWeb Componentsを作るUIライブラリ。
- [Solid Element](https://github.com/solidjs/solid/tree/main/packages/solid-element) - カスタムWeb Componentsと拡張機能を追加してSolidを拡張するライブラリ。

### 統合 <a id="integrations"></a>

- [ember-custom-elements](https://github.com/Ravenstine/ember-custom-elements) - カスタム要素を使ってEmberとGlimmerのコンポーネントを描画します。
- [preact-custom-element](https://github.com/preactjs/preact-custom-element) - Preactコンポーネントからカスタム要素を生成・登録します。
- [@adobe/react-webcomponent](https://github.com/adobe/react-webcomponent) - Reactコンポーネントをカスタム要素で包む処理を自動化します。
- [nuxt-custom-elements](https://github.com/GrabarzUndPartner/nuxt-custom-elements) - 外部ページに組み込むために、プロジェクトのコンポーネントをカスタム要素としてエクスポートします。
- [react-shadow](https://github.com/Wildhoney/ReactShadow) - スタイルのカプセル化の利点を活かし、ReactでShadow DOMを使うライブラリ。
- [reactify-wc](https://github.com/BBKolton/reactify-wc) - Reactのプロパティと関数でWeb Componentsを利用します。
- [remount](https://github.com/rstacruz/remount) - カスタム要素を使って、ReactコンポーネントをDOMへマウントします。
- [@riotjs/custom-elements](https://github.com/riot/custom-elements) - Riot.jsで標準的なカスタム要素を作るシンプルなAPI。

### ベンチマーク <a id="benchmarks"></a>

- [All the Ways to Make a Web Component](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/) - Web Componentを作るさまざまな方法を紹介する資料。
- [web-components-benchmark](https://vogloblinsky.github.io/web-components-benchmark/) - さまざまな実装例でWeb Components技術を比較するベンチマーク。
- [web-components-todo](https://wc-todo.firebaseapp.com/) - ベンチマーク用に、同じTODOアプリケーションを異なるWeb Componentsライブラリで実装した資料。

## フレームワーク <a id="frameworks"></a>

### Angular

- [Angular Elements Overview](https://angular.io/guide/elements) - Angular Elementsの概要。
- [Building and consuming Angular Elements as Web Components](https://indepth.dev/building-and-bundling-web-components/) - Angular ElementsをWeb Componentsとして作成・利用する記事。
- [How to use Angular ngModel and ngForms with WebComponents](https://itnext.io/how-to-use-angular-ngmodel-and-ngforms-with-webcomponents-802bd9e1d3d7) - Web ComponentsでAngularのngModelとngFormsを使う方法を説明する記事。
- [Using Web Components in Angular](https://coryrylan.com/blog/using-web-components-in-angular) - AngularでWeb Componentsを利用する記事。
- [Web Components With Angular Ivy In 6 Steps](https://www.softwarearchitekt.at/post/2019/05/18/web-components-custom-elements-with-angular-ivy-in-6-steps.aspx) - Angular IvyでWeb Componentsを作る6段階の手順。

### React

- [3 Approaches to Integrate React with Custom Elements](https://css-tricks.com/3-approaches-to-integrate-react-with-custom-elements/) - ReactとCustom Elementsを統合する3つの方法。
- [Building Interoperable Web Components That Even Work With React](https://css-tricks.com/building-interoperable-web-components-react/) - Reactでも動作する、相互運用可能なWeb Componentsを作る記事。
- [Rendering React Components With Custom Elements](https://guillaumebriday.fr/rendering-react-components-with-custom-elements) - Custom ElementsでReactコンポーネントを描画する記事。
- [How to use Web Components in React](https://www.robinwieruch.de/react-web-components) - ReactでWeb Componentsを使う方法を説明する記事。
- [Using Web Components With Next (or Any SSR Framework)](https://css-tricks.com/using-web-components-with-next-or-any-ssr-framework/) - Nextやその他のSSRフレームワークでWeb Componentsを利用する記事。

### Vue

- [Using Web Components in Vue](https://coryrylan.com/blog/using-web-components-in-vue) - VueでWeb Componentsを利用する記事。

### Svelte

- [Svelte Custom Element API](https://svelte.dev/docs#Custom_element_API) - SvelteのCustom Element APIのドキュメント。
- [How to Create a Web Component in Svelte](https://dev.to/silvio/how-to-create-a-web-components-in-svelte-2g4j) - SvelteでWeb Componentを作る方法を説明する記事。
- [Svelte Web Component — 5.4KB](https://itnext.io/svelte-web-component-5-4kb-4afe46590d99) - 5.4KBのSvelte製Web Componentについての記事。

## エコシステム <a id="ecosystem"></a>

### メタフレームワーク <a id="meta-frameworks"></a>

- [AMP](https://github.com/ampproject/amphtml) - Webで利用者を中心に据えた体験を簡単に作るためのWeb Componentフレームワーク。
- [Enhance](https://enhance.dev/docs/) - 軽量なWebアプリケーションを作るための、Web標準に基づくHTMLフレームワーク。
- [luna-js](https://github.com/webtides/luna-js) - Web Components標準を扱いやすくするSSRフレームワーク。
- [Rocket](https://rocket.modern-web.dev) - 少量のJavaScriptを使った静的サイト向けの、現代的なWeb開発環境。
- [Web Components Compiler](https://github.com/ProjectEvergreen/wcc) - 標準的なWeb Componentsのサーバー側描画を容易にするコンパイラー。
- [WebC](https://github.com/11ty/webc) - Web Componentsのマークアップを生成する、特定のフレームワークに依存しない単独利用可能なHTMLシリアライザー。

### スターターキット <a id="starter-kits"></a>

- [Create Open Web Components](https://open-wc.org/docs/development/generator/) - Web Componentプロジェクトのひな型を生成するツール。
- [custom-element-boilerplate](https://github.com/github/custom-element-boilerplate) - カスタム要素を作るためのひな型。
- [hello-web-components](https://github.com/fernandopasik/hello-web-components) - TypeScriptで書かれた、シンプルなHello WorldのWeb Componentスターター。
- [nutmeg](https://github.com/abraham/nutmeg) - ライブラリを使わないWeb Componentsのビルド、テスト、公開を行うツール。

### テストソリューション <a id="testing-solutions"></a>

- [capybara-shadowdom](https://github.com/yuki24/capybara-shadowdom) - CapybaraにShadow DOMの基本的なサポートを追加するRuby gem。
- [Cypress component tests for Lit](https://dev.to/simonireilly/cypress-component-tests-for-lit-elements-web-components-45oj) - CypressでLitのWeb Componentのコンポーネントテストを行う方法。
- [cypress-lit](https://github.com/simonireilly/cypress-lit) - Cypressを使い、モダンブラウザーでLit要素と標準的なWeb Componentsをテストするツール。
- [Developing Components: Testing](https://open-wc.org/guides/developing-components/testing/) - 実際のブラウザーでWeb Componentsをテストするための@web/test-runnerの利用ガイド。
- [How To Automate Shadow DOM In Selenium WebDriver](https://www.lambdatest.com/blog/shadow-dom-in-selenium/) - MavenプロジェクトでSelenium WebDriverを使い、Shadow DOMの要素を検索する方法。
- [Native Automation support for Shadow DOM](https://staleelement.medium.com/native-automation-support-for-shadow-dom-with-webdriverio-and-cypress-chapter-3-26249a589f5e) - Shadow DOMとオープンソースのテストフレームワークについての記事。
- [Open Web Components: Testing](https://open-wc.org/docs/testing/testing-package/) - 一定の設計方針に基づき、テストライブラリを組み合わせて設定するパッケージ。
- [query-selector-shadow-dom](https://github.com/webdriverio/query-selector-shadow-dom) - Shadow DOMのルートを越えて検索できるquerySelector。自動テストに役立ちます。
- [shadow-automation-selenium](https://github.com/sukgu/shadow-automation-selenium) - Seleniumを使ったShadow DOMの自動操作。
- [Testing Shadow DOM elements in Selenium](https://reflect.run/articles/testing-shadow-dom-elements-in-selenium/) - Selenium 4でShadow DOMのノードへアクセスする方法を説明する記事。
- [Test web components with Playwright](https://alexbilson.dev/plants/technology/test-web-components-with-playwright/) - 作成した標準的なWeb Componentsを、一般的なブラウザーでテストする方法を説明する記事。
- [W3C Webdriver conquering automation of Shadow DOM](https://staleelement.medium.com/w3c-webdriver-conquering-automation-of-shadow-dom-chapter-2-d92c7fe9e74c) - Shadow DOMのツリーとW3C Webdriverの相互作用についての記事。

### ツール <a id="tools"></a>

- [Backlight](https://backlight.dev/) - 開発者とデザイナーの協働を重視した、包括的なコーディングプラットフォーム。チームでデザインシステムを構築し、文書化、公開、規模の拡大、保守を行えます。
- [Custom Elements Locator](https://github.com/open-wc/locator) - ページ上のカスタム要素を探すChrome拡張機能。
- [@storybook/web-components](https://www.npmjs.com/package/@storybook/web-components) - 標準的なWeb Componentのコード断片向けのUI開発環境。
- [webcomponents.dev](https://webcomponents.dev) - Webプラットフォーム開発者向けのコンポーネントIDE。
- [web-component-analyzer](https://github.com/runem/web-component-analyzer) - Web Componentsを解析し、ドキュメントや診断情報を出力するCLI。
- [Web Components Codemods](https://github.com/kcmr/web-components-codemods) - Web Components用のコード変換ツール。

## 書籍 <a id="books"></a>

- [Web Components in Action](https://www.manning.com/books/web-components-in-action) - Ben Farrell著。Manningの早期リリースプログラムで提供される書籍。
- [Web Component Development with Modern Libraries and Tooling](https://www.manning.com/books/web-component-development-with-modern-libraries-and-tooling) - Mark Volkmann著。Manningの早期アクセスプログラムで提供される書籍。
- [Web Component Essentials](https://leanpub.com/web-component-essentials) - Cory Rylan著。Leanpubで早期プレビュー版が提供される書籍。

## チュートリアル <a id="tutorials"></a>

- [Building Web Components with Vanilla JavaScript](https://dev.to/aspittel/building-web-components-with-vanilla-javascript--jho) - ライブラリを使わないJavaScriptでWeb Componentsを作る教材。
- [Creating a Custom Element from Scratch](https://css-tricks.com/creating-a-custom-element-from-scratch/) - カスタム要素を一から作る教材。
- [Creating a Reusable Avatar Web Component](https://marcoslooten.com/blog/creating-a-reusable-avatar-web-component/) - 再利用可能なアバターのWeb Componentを作る教材。
- [Creating Web Components with Stencil](https://auth0.com/blog/creating-web-components-with-stencil/) - StencilでWeb Componentsを作る教材。
- [Encapsulating Style and Structure with Shadow DOM](https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/) - Shadow DOMでスタイルと構造をカプセル化する教材。
- [Getting started with LitElement and TypeScript](https://labs.thisdot.co/blog/getting-started-with-litelement-and-typescript) - LitElementとTypeScriptの入門教材。
- [Web Components: from zero to hero](https://dev.to/thepassle/web-components-from-zero-to-hero-4n4m) - Web Componentsを基礎から学ぶ教材。
- [Deep Dive: Web Components & Dependency Injection – The Experiment](https://www.thinktecture.com/web-components/dependency-injection/) - Web Componentsと依存性注入の実験を詳しく解説する記事。
- [Handling data with Web Components](https://itnext.io/handling-data-with-web-components-9e7e4a452e6e) - Web Componentsでデータを扱う教材。
- [How to use D3js with WebComponents](https://towardsdatascience.com/how-to-use-d3js-with-webcomponents-a75ae4f980de) - Web ComponentsでD3jsを使う方法を説明する記事。
- [Navigation Lifecycle using Vaadin Router, LitElement and TypeScript](https://labs.thisdot.co/blog/navigation-lifecycle-using-vaadin-router-litelement-and-typescript) - Vaadin Router、LitElement、TypeScriptによるナビゲーションのライフサイクルの解説。
- [Recreating The Arduino Pushbutton Using SVG And `<lit-element>`](https://www.smashingmagazine.com/2020/01/recreating-arduino-pushbutton-svg/) - SVGとLitElementでArduinoの押しボタンを再現する教材。
- [Routing Management with LitElement and TypeScript](https://labs.thisdot.co/blog/routing-management-with-litelement) - LitElementとTypeScriptによるルーティング管理の教材。
- [Snake-Eating Game Making with Web Components of Omi and MVP Architecture](https://dev.to/dntzhang/snake-eating-game-making-with-web-components-of-omi-and-mvp-architecture-206) - OmiのWeb ComponentsとMVPアーキテクチャでスネークゲームを作る教材。
- [Stencil – Web Components On Steroids](https://www.thinktecture.com/web-components/stenciljs-web-components-on-steroids/) - StencilによるWeb Components開発についての記事。
- [Using Modern Web Components](https://coryrylan.com/blog/using-modern-web-components) - 現代的なWeb Componentsの利用方法を説明する記事。
- [Using Web Components in WordPress is Easier Than You Think](https://css-tricks.com/using-web-components-in-wordpress-is-easier-than-you-think/) - WordPressでWeb Componentsを利用する方法を説明する記事。
- [Web Components 101: Framework Comparison](https://coderpad.io/blog/development/web-components-101-framework-comparison/) - Web Components向けのフレームワークを比較する入門記事。
- [Web Components 101: Lit Framework](https://coderpad.io/blog/development/web-components-101-lit-framework/) - LitフレームワークについてのWeb Components入門記事。
- [Web Components Tools: A Comparison](https://www.nexmo.com/blog/2020/05/20/web-components-tools-a-comparison) - Web Components向けのツールを比較する記事。
- [Where to begin building Web Components? - The Basics](https://dev.to/alangdm/where-to-begin-building-web-components-the-basics-3b78) - Web Components開発を始めるための基礎についての記事。
- [Where to begin building Web Components? - Class-based Libraries](https://dev.to/alangdm/where-to-begin-building-web-components-class-based-libraries-18m6) - Web Components開発を始めるための、クラスベースのライブラリについての記事。

## 知見 <a id="insights"></a>

### ポッドキャスト <a id="podcasts"></a>

- [Code[ish], episode 38: Building with Web Components](https://www.heroku.com/podcasts/codeish/38-building-with-web-components) - Web Componentsを使った構築を扱うポッドキャスト、第38回。
- [Frontend Happy Hour, episode 62: Web Components - shots of shadow DOM](https://frontendhappyhour.com/episodes/web-components-shots-of-shadow-dom/) - Web ComponentsとShadow DOMを扱うポッドキャスト、第62回。
- [Labs Talk - Web Components with Peter Muessig](https://labstalk.buzzsprout.com/993481/3932975-web-components-with-peter-muessig) - Peter MuessigとWeb Componentsについて話すポッドキャスト。
- [Real Talk JavaScript, episode 7: Custom Web Components with Rob Wormald](https://realtalkjavascript.simplecast.fm/eaf3db9e) - Rob Wormaldと独自のWeb Componentsについて話すポッドキャスト、第7回。
- [Real Talk JavaScript, episode 101: Back to Basics with Native HTML and LitElement](https://realtalkjavascript.simplecast.com/episodes/episode-101-back-to-basics-with-native-html-and-litelement) - 標準HTMLとLitElementで基礎を振り返るポッドキャスト、第101回。

### プレゼンテーション <a id="presentations"></a>

- [Are Web Components the Betamax of web development?](https://noti.st/lostinbrittany/EjUZyd/are-web-components-the-betamax-of-web-development) - Web ComponentsをWeb開発におけるベータマックスに例えて検討する発表。 登壇者：[@lostinbrittany](https://twitter.com/lostinbrittany)。
- [Designing Standard Systems](https://drive.google.com/file/d/1ALFiWOFU0UAGUpaZPMIVnoADs9_REtL5/view) - 標準に基づくシステムの設計についての発表。 登壇者：[@stefsull](https://twitter.com/stefsull)、[@bferrua](https://twitter.com/bferrua)。
- [Frontend Architecture for Scalable Design Systems](https://events.drupal.org/seattle2019/sessions/design-system-architecture-pattern-lab-twig-and-web-components) - 規模の拡大に対応するデザインシステムのフロントエンド構成についての発表。 登壇者：[@salem_cobalt](https://twitter.com/salem_cobalt)。
- [lit-apollo: Data-Driven Components that Use the Platform](https://apolloelements.dev/using-lit-apollo/) - Webプラットフォームを活用する、データ駆動のlit-apolloコンポーネントについての発表。 登壇者：[@PowersBenny](https://twitter.com/PowersBenny)。
- [Mastering Shadow DOM](https://martine-dowden.github.io/portfolio/presentation/mastering-shadow-dom) - Shadow DOMを使いこなすための発表。 登壇者：[@Martine_Dowden](https://twitter.com/Martine_Dowden)。
- [Modernizing Large Frontends with Web Components](https://speakerdeck.com/samjulien/modernizing-large-frontends-with-web-components) - Web Componentsで大規模なフロントエンドを現代化する発表。 登壇者：[@samjulien](https://twitter.com/samjulien)。
- [Shadow DOM: off the beaten track](https://docs.google.com/presentation/d/1wi74YiTLtLSfgjyccKm5LxYp9k8aeJda0AekWV5mqJI/edit?usp=sharing) - Shadow DOMのあまり知られていない使い方についての発表。 登壇者：[@serhiikulykov](https://twitter.com/serhiikulykov)。
- [Using Web Components to Build a Framework-agnostic UI Library](https://gotochgo.com/2019/sessions/866/using-web-components-to-build-a-framework-agnostic-ui-library) - Web Componentsで特定のフレームワークに依存しないUIライブラリを作る発表。 登壇者：[@brianbouril](https://twitter.com/brianbouril)、[@danciupuliga](https://twitter.com/danciupuliga)。
- [Web Components and the AOM](https://decks.tink.uk/2019/jsconf/index.html) - Web ComponentsとAccessibility Object Modelについての発表。 登壇者：[@LeonieWatson](https://twitter.com/LeonieWatson)。
- [Web Components and Styles Scoping](https://www.dropbox.com/s/wdh9uufjui5htll/Web-Components-and-Styles-Scoping-by-bashmish-FrontMania-2018.pdf) - Web Componentsとスタイルのスコープ制限についての発表。 登壇者：[@bashmish](https://twitter.com/bashmish)。
- [Web Components can do that?!](https://slides.com/vogloblinsky/web-components-can-do-that) - Web Componentsでできることを紹介する発表。 登壇者：[@vogloblinsky](https://twitter.com/vogloblinsky)。
- [Web Components: Introduction and State of the Art](https://webcomponents.dev/blog/web-components-slides/) - Web Componentsの入門と技術の現状についての発表。 登壇者：[@webcomp_dev](https://twitter.com/webcomp_dev)。

### 講演 <a id="talks"></a>

- [Better Apps: Delivering Universal UI Patterns as Web Components](https://youtu.be/mtHf7crZZIQ) - 一般的なUIパターンをWeb Componentsとして提供し、アプリを改善する講演。 登壇者：[@janmiksovsky](https://twitter.com/janmiksovsky)。
- [Custom Web Shadow Elements, or Whatever…](https://vimeo.com/364370506) - Custom ElementsとShadow DOMについての講演。 登壇者：[@aerotwist](https://twitter.com/aerotwist)。
- [Styling and Theming Web Components](https://youtu.be/FM7ROEVPA4k) - Web Componentsのスタイルとテーマの設定についての講演。 登壇者：[@justinfagnani](https://twitter.com/justinfagnani)。
- [Web Components at Enterprise Scale](https://youtu.be/iFp-P2UJT_Y) - 企業規模でのWeb Componentsの利用についての講演。 登壇者：[@diervo](https://twitter.com/diervo)。

## 利用統計 <a id="usage-metrics"></a>

- [Chrome Platform Status: `CustomElementRegistryDefine`](https://chromestatus.com/metrics/feature/timeline/popularity/1689) - Chrome Platform Statusのカスタム要素登録機能の利用指標。
- [Chrome Platform Status: `ElementAttachShadow`](https://chromestatus.com/metrics/feature/timeline/popularity/804) - Chrome Platform StatusのShadow DOM接続機能の利用指標。
- [Chrome Platform Status: `HTMLTemplateElement`](https://chromestatus.com/metrics/feature/timeline/popularity/2769) - Chrome Platform StatusのHTMLテンプレート要素の利用指標。

## 提案仕様 <a id="proposals"></a>

### フォームに関連付けられたカスタム要素 <a id="form-associated-custom-elements"></a> <a id="フォーム関連custom-elements"></a>

- [Form Participation API Explained](https://docs.google.com/document/d/1JO8puctCSpW-ZYGU8lF-h4FWRIDQNDVexzHoOQ2iQmY/edit?usp=sharing) - Google Chromeチームによる、Form Participation APIの説明文書。
- [Form-associated custom elements](https://www.chromestatus.com/features/4708990554472448) - Chrome Platform Statusのフォームに関連付けられたカスタム要素の機能情報。
- [web-platform-tests](https://github.com/web-platform-tests/wpt/tree/master/custom-elements/form-associated) - フォームに関連付けられたカスタム要素のWebプラットフォームのテスト集。

### 構築可能なスタイルシートオブジェクト <a id="constructable-stylesheet-objects"></a> <a id="構築可能なstylesheetオブジェクト"></a>

- [仕様草案](https://wicg.github.io/construct-stylesheets/) - 構築可能なスタイルシートの仕様草案。
- [web-platform-tests](https://github.com/web-platform-tests/wpt/blob/master/css/cssom/CSSStyleSheet-constructable.html) - 構築可能なスタイルシートのWebプラットフォームのテスト。
- [説明資料](https://github.com/WICG/construct-stylesheets/blob/gh-pages/explainer.md) - 構築可能なスタイルシートの説明資料。
- [Constructable Stylesheets](https://www.chromestatus.com/feature/5394843094220800) - Chrome Platform Statusの構築可能なスタイルシートの機能情報。

### カスタム状態疑似クラス <a id="custom-state-pseudo-class"></a>

- [Blinkの実装意向](https://groups.google.com/a/chromium.org/forum/#!topic/blink-dev/CApU9QIu3TM) - Blinkによる実装意向の表明。
- [`ElementInternals`'s `states` property and the `:state()` pseudo class](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/custom-states-and-state-pseudo-class.md) - ElementInternalsのstatesプロパティとstate疑似クラスに関する提案。

## その他 <a id="miscellaneous"></a>

- [bruck](https://github.com/Heydon/bruck) - Web ComponentsとHoudini Paint APIで構築されたプロトタイピングシステム。
- [Vaadin Directory](https://vaadin.com/directory) - Web Componentsを公開し、議論し、評価するディレクトリー。
- [webcomponents.org](http://webcomponents.org/) - Web Componentsについて議論し、共有するサイト。

## アーカイブ <a id="archive"></a>

### ポリフィル <a id="polyfills"></a> <a id="polyfill"></a>

現代のブラウザーは、以下のポリフィルなしでWeb Components標準をサポートします。
主な例外は、WebKit（Safari）がカスタマイズされた組み込み要素を受け入れないことです。

#### Custom Elementsのポリフィル <a id="custom-elements-polyfills"></a> <a id="custom-elements-polyfill"></a>

- [@webcomponents/custom-elements](https://github.com/webcomponents/polyfills/tree/master/packages/custom-elements) - PolymerチームによるCustom Elementsのポリフィル。
- [document-register-element](https://github.com/WebReflection/document-register-element) - Andrea GiammarchiによるCustom Elementsのポリフィル。

#### カスタマイズされた組み込み要素のポリフィル <a id="customized-built-in-elements-polyfills"></a> <a id="カスタマイズされた組み込み要素のpolyfill"></a>

- [@corpuscule/custom-builtin-elements](https://github.com/corpusculejs/custom-builtin-elements) - [CorpusculeJS](https://github.com/corpusculejs)による、カスタマイズされた組み込み要素のポリフィル。
- [@ungap/custom-elements-builtin](https://github.com/ungap/custom-elements-builtin) - [ungap project](https://ungap.github.io)による、カスタマイズされた組み込み要素のポリフィル。

#### Shadow DOMの互換実装 <a id="shadow-dom-shims"></a> <a id="shadow-dom-shim"></a>

- [@webcomponents/shadydom](https://github.com/webcomponents/polyfills/tree/master/packages/shadydom) - Shadow DOM v1の互換実装。
- [@webcomponents/shadycss](https://github.com/webcomponents/polyfills/tree/master/packages/shadycss) - Shadow DOMのスタイルのカプセル化を補う互換実装。
- [@lwc/synthetic-shadow](https://github.com/salesforce/lwc/blob/master/packages/@lwc/synthetic-shadow) - [LWC](https://lwc.dev)によるShadow DOMのポリフィル。

#### HTMLテンプレートのポリフィル <a id="html-templates-polyfills"></a> <a id="html-templates-polyfill"></a>

- [@webcomponents/template](https://github.com/webcomponents/polyfills/tree/master/packages/template) - `<template>`用の最小限のポリフィル。
- [@ungap/import-node](https://github.com/ungap/import-node) - [ungap project](https://ungap.github.io)による、IE11向けの`importNode`のポリフィル。

### 歴史 <a id="history"></a>

以下の記事は、Web Components仕様が標準化へ至る長い経緯を示します。
一部は初期の「v0」Shadow DOM／Custom Elements仕様や、廃止されたHTML Imports仕様を扱います。
これらは歴史的な経緯を示すための資料としてのみ保持し、年別に原文の掲載順で並べています。

#### 2019

- [A history of the HTML slot element](https://component.kitchen/blog/posts/a-history-of-the-html-slot-element) - HTMLのslot要素の歴史についての記事。
- [Web Components for Cross-Framework Component Libraries](https://codeburst.io/web-components-for-cross-framework-component-libraries-2647741f9470) - 異なるフレームワークで使えるコンポーネントライブラリとWeb Componentsについての記事。
- [Web Components in 2019: Part 1](https://codeburst.io/web-components-in-2019-part-1-6bd7251edce5) - 2019年のWeb Componentsについての記事、第1部。
- [Web Components in 2019: Part 2](https://codeburst.io/web-components-in-2019-part-2-a7de8c770c5a) - 2019年のWeb Componentsについての記事、第2部。
- [Web Components in 2019: Part 3](https://codeburst.io/web-components-in-2019-part-3-e725b781a414) - 2019年のWeb Componentsについての記事、第3部。
- [Web Components in 2019: Part 4](https://codeburst.io/web-components-in-2019-part-4-7fe8e63a4dee) - 2019年のWeb Componentsについての記事、第4部。
- [Developments in Web Components I’m excited about in 2019](https://medium.com/angular-in-depth/developments-in-web-components-im-excited-about-in-2019-3ae7751c2f64) - 2019年に注目するWeb Componentsの進展についての記事。

#### 2018

- [Styling Accessibility: A Web Components Approach](https://medium.com/@cfscorreia/styling-accessibility-a-web-components-approach-dc2aa8123eb2) - Web Componentsを使った、アクセシビリティとスタイル設定についての記事。
- [Web Components 101: An Introduction to Web Components](https://www.telerik.com/blogs/web-components-101-an-introduction-to-web-components) - Web Componentsの入門記事。
- [Get started with Vue web components](https://medium.com/@royprins/get-started-with-vue-web-components-593b3d5b3200) - VueのWeb Componentsを使い始めるための記事。
- [6 Reasons You Should Use Native Web Components](https://codeburst.io/6-reasons-you-should-use-native-web-components-b45e18e069c2) - 標準的なWeb Componentsを使う6つの理由を紹介する記事。
- [Web Components in 2018](https://www.sitepen.com/blog/web-components-in-2018) - 2018年のWeb Componentsについての記事。
- [Web Components Introduction: Creating Custom HTML Elements in 2018](https://www.grapecity.com/en/blogs/web-components-introduction-creating-custom-html-elements-2018) - 2018年の独自HTML要素の作成を扱うWeb Components入門記事。
- [Create & Publish Web Components With Vue CLI 3](https://vuejsdevelopers.com/2018/05/21/vue-js-web-component/) - Vue CLI 3でWeb Componentsを作成・公開する記事。
- [Extending Native DOM Elements with Web Components](https://medium.com/revillweb/extending-native-dom-elements-with-web-components-233350c8e86a) - Web Componentsで標準DOM要素を拡張する記事。

#### 2017

- [Styling is critical to web component reuse, but may prove difficult in practice](https://component.kitchen/blog/posts/styling-is-critical-to-web-component-reuse-but-may-prove-difficult-in-practice) - Web Componentの再利用におけるスタイル設定の重要性と実装上の難しさについての記事。
- [Web Components: The Long Game](https://infrequently.org/2017/10/web-components-the-long-game/) - Web Componentsを長期的な視点で論じる記事。
- [Web Components: Just in the Nick of Time (Polymer Summit 2017)](https://youtu.be/y-8Lmg5Gobw) - Web Componentsを扱うPolymer Summit 2017の講演。
- [Using Web Components in Ionic (Polymer Summit 2017)](https://youtu.be/UfD-k7aHkQE) - IonicでのWeb Components利用を扱うPolymer Summit 2017の講演。
- [Web Components for VR (Polymer Summit 2017)](https://youtu.be/8GmTu2JF4-0) - VR向けのWeb Componentsを扱うPolymer Summit 2017の講演。
- [Building UI at Enterprise Scale with Web Components (Polymer Summit 2017)](https://youtu.be/FJ2KEvzlyo4) - 企業規模でのWeb ComponentsによるUI構築を扱うPolymer Summit 2017の講演。
- [Custom Elements Everywhere (Polymer Summit 2017)](https://youtu.be/sK1ODp0nDbM) - Custom Elementsの幅広い利用を扱うPolymer Summit 2017の講演。
- [Evolving the Next Generation of Polymer Elements (Polymer Summit 2017)](https://youtu.be/rvpJ5O0W_6A) - 次世代のPolymer要素への発展を扱うPolymer Summit 2017の講演。
- [Polymer @ YouTube (Polymer Summit 2017)](https://youtu.be/tNulrEbTQf8) - YouTubeでのPolymer利用を扱うPolymer Summit 2017の講演。
- [Web Components for CMS (Polymer Summit 2017)](https://youtu.be/c-WDHG6rrdU) - CMS向けのWeb Componentsを扱うPolymer Summit 2017の講演。
- [An intro to web components with otters](https://meowni.ca/posts/web-components-with-otters/) - カワウソを題材にWeb Componentsを紹介する入門記事。
- [The broken promise of Web Components](https://dmitriid.com/blog/2017/03/the-broken-promise-of-web-components/) - Web Componentsへの期待が満たされていないと論じる記事。
- [Regarding the broken promise of Web Components](http://robdodson.me/regarding-the-broken-promise-of-web-components/) - Web Componentsへの期待をめぐる議論についての記事。
- [Web Components v1 - the next generation](https://web.dev/webcomponents-org/) - 次世代のWeb Components v1を紹介する記事。

#### 2016

- [Introducing Custom Elements](https://webkit.org/blog/7027/introducing-custom-elements/) - Custom Elementsの導入を紹介する記事。
- [The Case for Custom Elements: Part 1](https://medium.com/dev-channel/the-case-for-custom-elements-part-1-65d807b4b439) - Custom Elementsを支持する理由についての記事、第1部。
- [The Case for Custom Elements: Part 2](https://medium.com/dev-channel/the-case-for-custom-elements-part-2-2efe42ce9133) - Custom Elementsを支持する理由についての記事、第2部。
- [Demythstifying Web Components](http://www.backalleycoder.com/2016/08/26/demythstifying-web-components/) - Web Componentsをめぐる誤解を解きほぐす記事。
- [Extensible web components](https://adactio.com/journal/11052) - 拡張可能なWeb Componentsについての記事。
- [Web Component Challenges](https://blog.revillweb.com/web-component-challenges-a09ebc598d65) - Web Componentsの課題についての記事。
- [Web Components and progressive enhancement](https://onishi.ltd/articles/2016/08/web-components-and-progressive-enhancement/) - Web Componentsとプログレッシブエンハンスメントについての記事。
- [Update on standardizing Shadow DOM and Custom Elements](https://annevankesteren.nl/2015/07/shadow-dom-custom-elements-update) - Shadow DOMとCustom Elementsの標準化の進捗についての記事。
- [What's New in Shadow DOM v1 (by examples)](https://hayatoito.github.io/2016/shadowdomv1/) - 例を使ってShadow DOM v1の新しい点を紹介する資料。
- [Why web components are so important](https://blog.revillweb.com/why-web-components-are-so-important-66ad0bd4807a) - Web Componentsの重要性を論じる記事。
- [Understanding Web Components](https://medium.com/the-ui-files/understanding-web-components-d051baa66019) - Web Componentsを解説する記事。

#### 2015

- [Introducing Slot-Based Shadow DOM API](https://webkit.org/blog/4096/introducing-shadow-dom-api/) - スロットに基づくShadow DOM APIを紹介する記事。
- [There is an Element for that](https://medium.com/synsugar/there-is-an-element-for-that-a9fcdafe4a25) - 目的に合う要素の利用についての記事。
- [What happened to Web Components?](https://2ality.com/2015/08/web-component-status.html) - Web Componentsの状況を振り返る記事。
- [Web Components and their role in the future of web development](http://kaytcat.github.io/web-components/) - Web Componentsと、今後のWeb開発における役割についての資料。
- [Microsoft Edge and Web Components](https://blogs.windows.com/msedgedev/2015/07/15/microsoft-edge-and-web-components/) - Microsoft EdgeとWeb Componentsについての記事。
- [Bringing componentization to the web: An overview of Web Components](https://blogs.windows.com/msedgedev/2015/07/14/bringing-componentization-to-the-web-an-overview-of-web-components/) - Webのコンポーネント化とWeb Componentsの概要を紹介する記事。
- [Why Web Components will make the web a better place for our users](https://medium.com/@kaelig/why-web-components-will-make-the-web-a-better-place-for-our-users-38dc3154fc1d) - Web Componentsが利用者にとってWebを改善する理由を論じる記事。
- [Practical Questions around Web Components](https://www.ianfeather.co.uk/practical-questions-around-web-components/) - Web Componentsに関する実践上の疑問を扱う記事。
- [The state of Web Components](https://hacks.mozilla.org/2015/06/the-state-of-web-components/) - Web Componentsの状況についての記事。

#### 2014

- [A No-Nonsense Guide to Web Components, Part 1: The Specs](http://cbateman.com/blog/a-no-nonsense-guide-to-web-components-part-1-the-specs/) - Web Componentsの実用的なガイド、第1部。仕様を扱います。
- [A No-Nonsense Guide to Web Components, Part 2: Practical Use](http://cbateman.com/blog/a-no-nonsense-guide-to-web-components-part-2-practical-use/) - Web Componentsの実用的なガイド、第2部。実際の利用を扱います。
- [Web Components + Backbone: A Game-Changing Combination](https://youtu.be/dztuKgjk0Bg) - Web ComponentsとBackboneの組み合わせについての講演。
- [Mozilla and Web Components: Update](https://hacks.mozilla.org/2014/12/mozilla-and-web-components/) - MozillaとWeb Componentsに関する進捗報告。
- [Server-less applications powered by Web Components](https://youtu.be/MdcD1rNkNLE) - Web Componentsを使ったサーバーレスアプリケーションについての講演。
- [Web Components and the Future of CSS](https://youtu.be/QHxrr6Q82yI) - Web ComponentsとCSSの将来についての講演。
- [Easy composition and reuse with Web Components](https://youtu.be/6vcQlD-jadk) - Web Componentsによる簡単な合成と再利用についての講演。
- [Let’s build some apps with Polymer!](https://youtu.be/kV0hgdMpH28) - Polymerでアプリを作る講演。
- [Polymer: State of the Union](https://youtu.be/0LT6W5QVCJI) - Polymerの状況についての講演。
- [Web Components 101: An Introduction to Fundamental Changes in HTML](https://youtu.be/hEzmy93zr0Y?t=540) - HTMLの根本的な変化を紹介するWeb Componentsの入門講演。
- [Web Components 201: Designing Web Components for Reuse](https://youtu.be/dwxaG-eoxdU) - 再利用のためのWeb Components設計についての講演。
- [Why Web Components — Does the Web Really Need Another Component?](https://medium.com/@shaunwalla/why-web-components-does-the-web-really-need-another-component-4af010b6446) - Webに新しいコンポーネント技術が必要かを検討する記事。
- [“Don’t stop thinking about tomorrow” - AngularJS and Web Components](https://youtu.be/gSTNTXtQwaY) - AngularJSとWeb Componentsの将来についての講演。
- [Multi-device Apps with Web Components](https://youtu.be/kn0y7uugO0Y) - Web Componentsによる複数端末向けアプリについての講演。
- [As I Walk Through The Valley Of The Shadow Of DOM](https://youtu.be/nbsWP2cPhhU) - Shadow DOMについての講演。
- [Why Web Components Are Ready For Production](https://www.telerik.com/blogs/web-components-ready-production) - Web Componentsが本番利用に適していると論じる記事。
- [The State of the Componentised Web](https://www.leggetter.co.uk/2014/08/06/state-componentised-web.html) - コンポーネント化されたWebの状況についての記事。
- [An Addendum to Why Web Components Aren't Ready for Production Yet](https://www.tjvantoll.com/2014/07/18/an-addendum-to-why-web-components-arent-ready-for-production-yet/) - Web Componentsの本番利用への準備がまだ整っていないという議論への追記。
- [Why Web Components Aren't Ready for Production... Yet](https://www.telerik.com/blogs/web-components-arent-ready-production-yet) - Web Componentsの本番利用への準備がまだ整っていないと論じる記事。
- [Component Interop With React And Custom Elements](https://addyosmani.com/blog/component-interop-with-react-and-custom-elements/) - ReactとCustom Elementsによるコンポーネントの相互運用についての記事。
- [Accessibility of Web Components](https://youtu.be/BgvDZZ8Ms8c) - Web Componentsのアクセシビリティについての講演。
- [Componentize The Web: Back To The Browser!](https://youtu.be/GOPXVLxp9Nc) - Webのコンポーネント化とブラウザーについての講演。
- [Google I/O 2014 - Polymer and the Web Components revolution](https://youtu.be/yRbOSdAe_JU) - PolymerとWeb Componentsの変革を扱うGoogle I/O 2014の講演。
- [Google I/O 2014 - Polymer and Web Components change everything you know about Web development](https://youtu.be/8OJ7ih8EE7s) - PolymerとWeb ComponentsによるWeb開発の変化を扱うGoogle I/O 2014の講演。
- [Google I/O 2014 - Unlock the next era of UI development with Polymer](https://youtu.be/HKrYfrAzqFA) - Polymerによる次の時代のUI開発を扱うGoogle I/O 2014の講演。
- [Making Polymer Elements Accessible](https://youtu.be/_IBiXfxhF-A) - Polymer要素のアクセシビリティを改善する講演。
- [Building an Accessible Disclosure Button – using Web Components](https://developer.paciellogroup.com/blog/2014/06/accessible-disclosure-button-using-web-components/) - Web Componentsでアクセシブルな開閉ボタンを作る記事。
- [The Road to Web Components](https://youtu.be/yLyyXHhSl8w) - Web Componentsに至る道筋についての講演。
- [The Web Components Revolution is Here](https://youtu.be/3QLmAm9xtnU) - Web Componentsによる変革についての講演。
- [Web Components: A chance to create the future](https://youtu.be/JUzjr1bIRUg) - Web Componentsで将来を作る可能性についての講演。
- [Web Component Mashups at 3 a.m.](https://youtu.be/75EuHl6CSTo) - Web Componentsを組み合わせる講演。
- [Web Components Tools & Libraries](https://youtu.be/iPmN4CvLGJc) - Web Components向けのツールとライブラリについての講演。
- [Web Components Can Do That?!](https://addyosmani.com/fitc-wccdt/) - Web Componentsでできることを紹介する資料。
- [Web Components and you – dangers to avoid](https://christianheilmann.com/2014/04/18/web-components-and-you-dangers-to-avoid/) - Web Componentsを使う際に避けるべき危険についての記事。
- [HTML as Custom Elements](https://github.com/domenic/html-as-custom-elements) - HTMLをCustom Elementsとして表す資料。
- [The Web's Declarative, Composable Future](https://addyosmani.com/blog/the-webs-declarative-composable-future/) - 宣言的で合成可能なWebの将来についての記事。
- [Using Polymer to Create Web Components](https://code.tutsplus.com/tutorials/using-polymer-to-create-web-components--cms-20475) - PolymerでWeb Componentsを作る教材。
- [The Shadow DOM Diaries](https://gist.github.com/dglazkov/efd2deec54f65aa86f2e) - Shadow DOMに関する記録。
- [A Detailed Introduction To Custom Elements](https://www.smashingmagazine.com/2014/03/introduction-to-custom-elements/) - Custom Elementsを詳しく紹介する入門記事。

#### 2013

- [A future called Web Components](https://speakerdeck.com/zenorocha/a-future-called-web-components) - Web Componentsがもたらす将来についての発表。
- [Building Mobile Web Applications With Brick](https://youtu.be/dW2ib0bkxGQ) - BrickでモバイルWebアプリケーションを作る講演。
- [Polymer: declarative, encapsulated, and reusable components for the web](https://youtu.be/DH1vTVkqCDQ) - Polymerによる、宣言的でカプセル化された再利用可能なWeb用コンポーネントの講演。
- [Web Components: Why you're already an expert](https://youtu.be/s1PTPZwzQA4) - Web Componentsの知識がすでにあるという視点から紹介する講演。
- [Yo Polymer: a new way of building web apps](https://youtu.be/booRxAJblwM) - Webアプリケーションの新しい作り方としてYo Polymerを紹介する講演。
- [Performance and Custom Elements](https://www.stevesouders.com/blog/2013/11/26/performance-and-custom-elements/) - 性能とCustom Elementsについての記事。
- [Web Components Revolution](https://robdodson.github.io/webcomponents-revolution/) - Web Componentsによる変革についての資料。
- [A Guide to Web Components](https://css-tricks.com/modular-future-web-components/) - Web Componentsのガイド。
- [Return of Inspector Web: Web Components a Year Later](https://vimeo.com/78899868) - 1年後のWeb Componentsを扱うInspector Webの講演。
- [Working with Custom Elements](https://web.dev/customelements/) - Custom Elementsの使い方を説明する記事。
- [Creating Reusable Markup with The HTML Template Element](https://blog.teamtreehouse.com/creating-reusable-markup-with-the-html-template-element) - HTMLテンプレート要素で再利用可能なマークアップを作る記事。
- [Working with Shadow DOM](https://blog.teamtreehouse.com/working-with-shadow-dom) - Shadow DOMの使い方を説明する記事。
- [Breaking Development: Web Components](https://www.lukew.com/ff/entry.asp?1752) - Breaking DevelopmentでのWeb Componentsに関する資料。
- [Web Components: A Tectonic Shift for Web Development - Google I/O 2013](https://youtu.be/fqULJBBEVQE) - Web ComponentsによるWeb開発の大きな変化を扱うGoogle I/O 2013の講演。
- [Web Components: Getting Started](https://vimeo.com/68212204) - Web Componentsを使い始めるための講演。
- [Shadow DOM 101](https://web.dev/shadowdom/) - Shadow DOMの入門記事。
- [Shadow DOM 201](https://web.dev/shadowdom-201/) - Shadow DOMのより詳しい解説記事。
- [Shadow DOM 301](https://web.dev/shadowdom-301/) - Shadow DOMの発展的な解説記事。
- [Visualizing shadow DOM concepts](https://developer.chrome.com/blog/visualizing-shadow-dom-concepts/) - Shadow DOMの概念を視覚的に説明する記事。
- [Web components and the future of web development](https://youtu.be/pb6DsPNdoXk) - Web ComponentsとWeb開発の将来についての講演。
- [HTML's New Template Tag](https://web.dev/webcomponents-template/) - HTMLの新しいテンプレートタグを紹介する記事。

#### 2012

- [The Basics of the Shadow DOM](https://www.sitepoint.com/the-basics-of-the-shadow-dom/) - Shadow DOMの基礎についての記事。
- [Notes on Web Components + ARIA](https://developer.paciellogroup.com/blog/2012/07/notes-on-web-components-aria/) - Web ComponentsとARIAについてのノート。
- [Google I/O 2012 - The Web Platform's Cutting Edge](https://youtu.be/2txPYQOWBtg) - Webプラットフォームの先端技術を紹介するGoogle I/O 2012の講演。
- [Introduction to Web Components](https://www.w3.org/TR/2012/WD-components-intro-20120522/) - Web Componentsの概要を説明するW3Cの資料。

#### 2011

- [Web Components and Model Driven Views by Alex Russell](https://fronteers.nl/congres/2011/sessions/web-components-and-model-driven-views-alex-russell) - Alex Russellによる、Web Componentsとモデル駆動のビューについての講演。
- [What the Heck is Shadow DOM?](https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/) - Shadow DOMとは何かを説明する記事。

## フォロー推奨 <a id="who-to-follow"></a>

- [Polymer](https://twitter.com/polymer) - プロフィール。
- [Stencil](https://twitter.com/stenciljs) - プロフィール。
- [open-wc.org](https://twitter.com/openwc) - プロフィール。
- [webcomponents.dev](https://twitter.com/webcomp_dev) - プロフィール。
- [Justin Fagnani](https://twitter.com/justinfagnani) - プロフィール。
- [Viljami Salminen](https://twitter.com/viljamis) - プロフィール。
- [Jan Miksovsky](https://twitter.com/JanMiksovsky) - プロフィール。
- [Serhii Kulykov](https://twitter.com/serhiikulykov) - プロフィール。
