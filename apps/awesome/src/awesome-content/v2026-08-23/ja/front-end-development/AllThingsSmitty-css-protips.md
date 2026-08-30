---
title: "AllThingsSmitty/css-protips"
description: "AllThingsSmitty/css-protips の正規スナップショット"
licenseSource: "github-AllThingsSmitty-css-protips-readme-md"
---

<div align="center">
  <img src="./assets/img/bulb.svg" width="200" alt="light bulb icon">
</div>

# CSS Protips [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

CSSスキルをプロレベルへ高めるためのヒント集。

> **ヒント:**
> 他の優れたリストについては、[@sindresorhus](https://github.com/sindresorhus/)がキュレーションした[awesome lists](https://github.com/sindresorhus/awesome/)を参照してください。

## 目次

- [プロ向けヒント](#protips)
- [サポート](#support)
- [翻訳](#translations)
- [貢献ガイドライン](https://github.com/AllThingsSmitty/css-protips/blob/e95123993037bbcd1bd97170cfa02087155c3690/CONTRIBUTING.md)

## プロ向けヒント

1. [Use a CSS Reset](#use-a-css-reset)
1. [Inherit `box-sizing`](#inherit-box-sizing)
1. [Use `unset` Instead of Resetting All Properties](#use-unset-instead-of-resetting-all-properties)
1. [Use `:not()` to Apply/Unapply Borders on Navigation](#use-not-to-applyunapply-borders-on-navigation)
1. [Check if Font Is Installed Locally](#check-if-font-is-installed-locally)
1. [Add `line-height` to `body`](#add-line-height-to-body)
1. [Set `:focus` for Form Elements](#set-focus-for-form-elements)
1. [Vertically-Center Anything](#vertically-center-anything)
1. [Use `aspect-ratio` Instead of Height/Width](#use-aspect-ratio-instead-of-heightwidth)
1. [Comma-Separated Lists](#comma-separated-lists)
1. [Select Items Using Negative `nth-child`](#select-items-using-negative-nth-child)
1. [Use SVG for Icons](#use-svg-for-icons)
1. [Use the "Lobotomized Owl" Selector](#use-the-lobotomized-owl-selector)
1. [Use `max-height` for Pure CSS Sliders](#use-max-height-for-pure-css-sliders)
1. [Equal-Width Table Cells](#equal-width-table-cells)
1. [Get Rid of Margin Hacks With Flexbox](#get-rid-of-margin-hacks-with-flexbox)
1. [Use Attribute Selectors with Empty Links](#use-attribute-selectors-with-empty-links)
1. [Control Specificity Better With `:is()`](#control-specificity-better-with-is)
1. [Style "Default" Links](#style-default-links)
1. [Intrinsic Ratio Boxes](#intrinsic-ratio-boxes)
1. [Style Broken Images](#style-broken-images)
1. [Use `rem` for Global Sizing; Use `em` for Local Sizing](#use-rem-for-global-sizing-use-em-for-local-sizing)
1. [Hide Autoplay Videos That Aren't Muted](#hide-autoplay-videos-that-arent-muted)
1. [Use `:root` for Flexible Type](#use-root-for-flexible-type)
1. [Set `font-size` on Form Elements for a Better Mobile Experience](#set-font-size-on-form-elements-for-a-better-mobile-experience)
1. [Use Pointer Events to Control Mouse Events](#use-pointer-events-to-control-mouse-events)
1. [Set `display: none` on Line Breaks Used as Spacing](#set-display-none-on-line-breaks-used-as-spacing)
1. [Use `:empty` to Hide Empty HTML Elements](#use-empty-to-hide-empty-html-elements)
1. [Use `margin-inline` instead of `margin`](#use-margin-inline-instead-of-margin)

### CSS Resetを使う

CSS resetは、要素スタイルを白紙から始め、異なるブラウザー間のスタイル一貫性を保つのに役立ちます。多くのresetパターンがありますが、より簡素なreset方法も使えます:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

これで要素からmarginとpaddingが除去され、`box-sizing`によりCSSボックスモデルでレイアウトを管理できます。

#### [デモ](https://codepen.io/AllThingsSmitty/pen/kkrkLL)

> **ヒント:**
> 下記の[`box-sizing`を継承する](#inherit-box-sizing)ヒントに従う場合、CSS resetに`box-sizing`プロパティを含めない選択もできます。

<sup>[先頭へ戻る](#contents)</sup>

### `box-sizing`を継承する

`box-sizing`を`html`から継承させます:

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

これにより、別の振る舞いを活用するプラグインや他のコンポーネントで`box-sizing`を変更しやすくなります。

#### [Demo](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

<sup>[Back to top](#contents)</sup>

### すべてのプロパティをResetせず`unset`を使う

要素のプロパティをresetする場合、個々のプロパティをすべてresetする必要はありません:

```css
button {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  outline: none;
  padding: 0;
}
```

`all`短縮形で要素のすべてのプロパティを指定できます。値を`unset`に設定すると、要素のプロパティは初期値に変わります:

```css
button {
  all: unset;
}
```

<sup>[Back to top](#contents)</sup>

### ナビゲーションのborder適用／解除に`:not()`を使う

borderを設定して…

```css
/* add border */
.nav li {
  border-right: 1px solid #666;
}
```

…最後の要素で解除する代わりに…

```css
/* remove border */
.nav li:last-child {
  border-right: none;
}
```

…`:not()`疑似クラスを使い、必要な要素だけに適用します:

```css
.nav li:not(:last-child) {
  border-right: 1px solid #666;
}
```

このCSSセレクターは、人が説明するように読めます。

#### [Demo](https://codepen.io/AllThingsSmitty/pen/LkymvO)

<sup>[Back to top](#contents)</sup>

### フォントがローカルにインストール済みか確認する

リモートから取得する前にフォントがローカルにインストールされているか確認できます。これはパフォーマンス上も良いヒントです。

```css
@font-face {
  font-family: "Dank Mono";
  src:
    /* Full name */ local("Dank Mono"), /* Postscript name */ local("Dank Mono"),
    /* Otherwise, download it! */ url("//...a.server/fonts/DankMono.woff");
}

code {
  font-family: "Dank Mono", system-ui-monospace;
}
```

このヒントと[デモ](https://codepen.io/argyleink/pen/VwYJpgR)を共有したAdam Argyleに感謝します。

<sup>[Back to top](#contents)</sup>

### `line-height`を`body`へ追加する

`line-height`を各`<p>`、`<h*>`、_et al_.へ個別に追加する必要はありません。代わりに`body`へ追加します:

```css
body {
  line-height: 1.5;
}
```

これによりテキスト要素は`body`から簡単に継承できます。

#### [Demo](https://codepen.io/AllThingsSmitty/pen/VjbdYd)

<sup>[Back to top](#contents)</sup>

### フォーム要素に`:focus`を設定する

視覚を使うキーボードユーザーは、ページ内のどこへキーボードイベントが届くかをfocusで判断します。フォーム要素のfocusを、ブラウザー既定実装より目立ち一貫したものにします:

```css
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
  box-shadow: none;
  outline: #000 dotted 2px;
  outline-offset: 0.05em;
}
```

#### [Demo](https://codepen.io/AllThingsSmitty/pen/ePzoOP/)

<sup>[Back to top](#contents)</sup>

### 何でも垂直中央揃えにする

いいえ、黒魔術ではありません。本当に要素を垂直中央揃えにできます。flexboxで実現できます…

```css
html,
body {
  height: 100%;
}

body {
  align-items: center;
  display: flex;
  justify-content: center;
}
```

…CSS Gridでも可能です:

```css
body {
  display: grid;
  height: 100vh;
  place-items: center;
}
```

> **ヒント:**
> 別のものを中央揃えにしたいですか。垂直、水平、何でも、いつでも、どこでも。CSS-Tricksには、そのすべてを扱う[優れた解説](https://css-tricks.com/centering-css-complete-guide/)があります。

#### [Demo](https://codepen.io/AllThingsSmitty/pen/GqmGqZ)

<sup>[Back to top](#contents)</sup>

### 高さ／幅の代わりに`aspect-ratio`を使う

`aspect-ratio`プロパティにより、要素のサイズ設定と一貫した幅対高さ比の維持を簡単に行えます。これはレイアウトシフトを防ぐレスポンシブウェブデザインで非常に役立ちます。画像の高さ／幅値が変わってもレイアウトが崩れないよう、`object-fit`とともに使います。

```css
img {
  aspect-ratio: 16 / 9; /* width / height */
  object-fit: cover;
}
```

`aspect-ratio`プロパティの詳細は、この[web.dev記事](https://web.dev/articles/aspect-ratio)を参照してください。

#### [Demo](https://codepen.io/AllThingsSmitty/pen/MWxwoNx/)

<sup>[Back to top](#contents)</sup>

### カンマ区切りリスト

リスト項目を本物のカンマ区切りリストのように見せます:

```css
ul > li:not(:last-child)::after {
  content: ",";
}
```

`:not()`疑似クラスを使うと、最後の項目にカンマは追加されません。

> **注記:**
> このヒントは、特にスクリーンリーダーに関するアクセシビリティには適さない可能性があります。また、ブラウザーでのコピー＆ペーストはCSS生成コンテンツでは機能しません。注意して進めてください。

<sup>[Back to top](#contents)</sup>

### 負の`nth-child`で項目を選択する

CSSで負の`nth-child`を使い、1からnまでの項目を選択します。

```css
li {
  display: none;
}

/* 1から3までの項目を選択して表示する */
li:nth-child(-n + 3) {
  display: block;
}
```

また、すでに[`:not()`の使用](#use-not-to-applyunapply-borders-on-navigation)を少し学んだので、次を試してみてください:

```css
/* 最初の3つを除くすべての項目を選択して表示する */
li:not(:nth-child(-n + 3)) {
  display: block;
}
```

#### [Demo](https://codepen.io/AllThingsSmitty/pen/WxjKZp)

<sup>[Back to top](#contents)</sup>

### アイコンにはSVGを使う

アイコンにSVGを使わない理由はありません:

```css
.logo {
  background: url("logo.svg");
}
```

SVGはあらゆる解像度で適切に拡大縮小され、[IE9まで](http://caniuse.com/#search=svg)のすべてのブラウザーでサポートされています。.png、.jpg、.gif-jif-whatevファイルをやめましょう。

> **NOTE:**
> If you have SVG icon-only buttons for sighted users and the SVG fails to load, this will help maintain accessibility:

```css
.no-svg .icon-only::after {
  content: attr(aria-label);
}
```

<sup>[Back to top](#contents)</sup>

### 「ロボトミーされたフクロウ」セレクターを使う

奇妙な名前かもしれませんが、ユニバーサルセレクター（`*`）を隣接兄弟セレクター（`+`）と使うと、強力なCSS機能を得られます:

```css
* + * {
  margin-top: 1.5em;
}
```

この例では、文書フロー内で他の要素に続くすべての要素が`margin-top: 1.5em`を受け取ります。

> **TIP:**
> For more on the "lobotomized owl" selector, read [Heydon Pickering's post](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls) on _A List Apart_.

#### [Demo](https://codepen.io/AllThingsSmitty/pen/grRvWq)

<sup>[Back to top](#contents)</sup>

### Pure CSSスライダーに`max-height`を使う

overflow hiddenと`max-height`を使ってCSSのみのスライダーを実装します:

```css
.slider {
  max-height: 200px;
  overflow-y: hidden;
  width: 300px;
}

.slider:hover {
  max-height: 600px;
  overflow-y: scroll;
}
```

要素はhover時に`max-height`値まで拡張され、overflowの結果としてスライダーが表示されます。

<sup>[Back to top](#contents)</sup>

### 等幅のテーブルセル

テーブルの扱いは面倒になりがちです。セルを等幅に保つため、`table-layout: fixed`を試してください:

```css
.calendar {
  table-layout: fixed;
}
```

苦痛のないテーブルレイアウトです。

#### [Demo](https://codepen.io/AllThingsSmitty/pen/jALALm)

<sup>[Back to top](#contents)</sup>

### Flexboxでmargin hackをなくす

列のgutterを扱う際、flexboxの`nth-`、`first-`、`last-child`のhackを`space-between`プロパティでなくせます:

```css
.list {
  display: flex;
  justify-content: space-between;
}

.list .person {
  flex-basis: 23%;
}
```

これで列のgutterは常に等間隔で表示されます。

<sup>[Back to top](#contents)</sup>

### Use Attribute Selectors with Empty Links

Display links when the `<a>` element has no text value but the `href` attribute has a link:

```css
a[href^="http"]:empty::before {
  content: attr(href);
}
```

That's really convenient.

#### [Demo](https://codepen.io/AllThingsSmitty/pen/zBzXRx)

> **NOTE:**
> This tip may not be ideal for accessibility, specifically screen readers. And copy/paste from the browser doesn't work with CSS-generated content. Proceed with caution.

<sup>[Back to top](#contents)</sup>

### `:is()`で詳細度をより良く制御する

`:is()`疑似クラスは、複数のセレクターを一度に対象にし、冗長性を減らしてコードの可読性を高めます。大きなセレクターをよりコンパクトな形式で書く際に非常に役立ちます。

```css
:is(section, article, aside, nav) :is(h1, h2, h3, h4, h5, h6) {
  color: green;
}
```

上記のルールセットは、次の数多くのセレクター規則と同等です…

```css
section h1,
section h2,
section h3,
section h4,
section h5,
section h6,
article h1,
article h2,
article h3,
article h4,
article h5,
article h6,
aside h1,
aside h2,
aside h3,
aside h4,
aside h5,
aside h6,
nav h1,
nav h2,
nav h3,
nav h4,
nav h5,
nav h6 {
  color: green;
}
```

#### [Demo](https://codepen.io/AllThingsSmitty/pen/rNRVxdx)

<sup>[Back to top](#contents)</sup>

### 「既定」リンクをスタイル設定する

「既定」リンク用のスタイルを追加します:

```css
a[href]:not([class]) {
  color: #008000;
  text-decoration: underline;
}
```

これで通常`class`属性を持たないCMS経由で挿入されたリンクに、カスケードへ全般的な影響を与えず区別を付けられます。

<sup>[Back to top](#contents)</sup>

### 内在比率ボックス

内在比率を持つボックスを作るには、divへ上または下のpaddingを適用するだけです:

```css
.container {
  height: 0;
  padding-bottom: 20%;
  position: relative;
}

.container div {
  border: 2px dashed #ddd;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
```

paddingに20%を使うと、ボックスの高さは幅の20%になります。ビューポートの幅にかかわらず、子divはアスペクト比を保ちます（100% / 20% = 5:1）。

#### [Demo](https://codepen.io/AllThingsSmitty/pen/jALZvE)

<sup>[Back to top](#contents)</sup>

### 壊れた画像をスタイル設定する

少しのCSSで壊れた画像をより見栄えよくします:

```css
img {
  display: block;
  font-family: sans-serif;
  font-weight: 300;
  height: auto;
  line-height: 2;
  position: relative;
  text-align: center;
  width: 100%;
}
```

次に、壊れた画像のユーザーメッセージとURL参照を表示するため、疑似要素規則を追加します:

```css
img::before {
  content: "We're sorry, the image below is broken :(";
  display: block;
  margin-bottom: 10px;
}

img::after {
  content: "(url: " attr(src) ")";
  display: block;
  font-size: 12px;
}
```

> **ヒント:**
> このパターンのスタイル設定については、[Ire Aderinokunの記事](http://bitsofco.de/styling-broken-images/)で詳しく学べます。

<sup>[Back to top](#contents)</sup>

### グローバルなサイズには`rem`、ローカルなサイズには`em`を使う

rootで基準font sizeを設定した後（`html { font-size: 100%; }`）、テキスト要素のfont sizeを`em`へ設定します:

```css
h2 {
  font-size: 2em;
}

p {
  font-size: 1em;
}
```

次にモジュールのfont-sizeを`rem`へ設定します:

```css
article {
  font-size: 1.25rem;
}

aside .module {
  font-size: 0.9rem;
}
```

これで各モジュールは区画化され、スタイル設定が容易になり、保守性と柔軟性が高まります。

<sup>[Back to top](#contents)</sup>

### ミュートされていない自動再生動画を隠す

これはカスタムユーザースタイルシートに最適なテクニックです。ページ読み込み時に自動再生される動画の音でユーザーを圧倒しないようにします。音声がミュートされていない場合は動画を表示しません:

```css
video[autoplay]:not([muted]) {
  display: none;
}
```

ここでも、[`:not()`](#use-not-to-applyunapply-borders-on-navigation)疑似クラスを活用しています。

<sup>[Back to top](#contents)</sup>

### 柔軟な文字サイズに`:root`を使う

レスポンシブレイアウトの文字サイズは、各ビューポートに合わせて調整できるべきです。`:root`を使い、ビューポートの高さと幅に基づいてfont-sizeを計算できます:

```css
:root {
  font-size: calc(1vw + 1vh + 0.5vmin);
}
```

これで`root em`単位を`:root`が計算した値に基づいて利用できます:

```css
body {
  font: 1rem/1.6 sans-serif;
}
```

#### [Demo](https://codepen.io/AllThingsSmitty/pen/XKgOkR)

<sup>[Back to top](#contents)</sup>

### モバイル体験を改善するためフォーム要素に`font-size`を設定する

モバイルブラウザー（iOS Safari、_et al_.）が`<select>`ドロップダウンをタップしたときHTMLフォーム要素をズームしないよう、セレクター規則へ`font-size`を追加します:

```css
input[type="text"],
input[type="number"],
select,
textarea {
  font-size: 16px;
}
```

<sup>[Back to top](#contents)</sup>

### Pointer Eventsでマウスイベントを制御する

[Pointer events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)では、マウスが触れている要素とどのように対話するかを指定できます。たとえばボタンの既定pointer eventを無効にするには:

```css
button:disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

とても簡単です。

<sup>[Back to top](#contents)</sup>

### 間隔に使う改行に`display: none`を設定する

[Harry Robertsが指摘した](https://twitter.com/csswizardry/status/1170835532584235008)ように、これはCMSユーザーが間隔のために余分な改行を使うことを防ぐのに役立ちます:

```css
br + br {
  display: none;
}
```

<sup>[Back to top](#contents)</sup>

### 空のHTML要素を隠すため`:empty`を使う

CMSまたは動的挿入で内容がまだ設定されていない空のHTML要素（例: `<p class="error-message"></p>`）があり、レイアウトに不要な空間を作っている場合、`:empty`疑似クラスを使ってレイアウト上から隠します。

```css
:empty {
  display: none;
}
```

> **注記:**
> 空白を含む要素は空とは見なされないことに注意してください。例: `<p class="error-message"> </p>`。

<sup>[Back to top](#contents)</sup>

## サポート

Chrome、Firefox、Safari、Edgeの現行バージョン。

<sup>[Back to top](#contents)</sup>

### `margin-inline`を`margin`の代わりに使う

要素のインライン開始・終了marginは`margin-inline`で定義します。`margin-left`と`margin-right`の代わりに、inlineプロパティで両方を定義できます。

```css
.div {
  margin-inline: auto;
}
```

同じことは、block開始・終了margin、すなわち`margin-block`を`margin-top`と`margin-bottom`で定義する場合にも行えます。

```css
.div {
  margin-block: auto;
}
```

#### [Demo](https://codepen.io/AllThingsSmitty/pen/PwoOQGB)

<sup>[Back to top](#contents)</sup>

## 翻訳

> **注記:**
> 増え続ける翻訳済みヒントのリストを保守する時間が少なくなっています。新たなヒントの追加には十数件以上の翻訳への追加が必要です。そのため、翻訳済みREADMEにはメインREADMEにあるすべてのヒントが含まれない可能性があります。

- [简体中文](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/zh-CN)
- [正體中文](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/zh-TW)
- [Deutsch](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/de-DE)
- [Español](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/es-ES)
- [Français](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/fr-FR)
- [λληνικά](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/gr-GR)
- [ગુજરાતી](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/gu-IND)
- [Italiano](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/it-IT)
- [日本語](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/ja-JP)
- [한국어](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/ko-KR)
- [Polskie](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/pl-PL)
- [Português do Brasil](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/pt-BR)
- [Português do Europe](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/pt-PT)
- [Русский](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/ru-RU)
- [Tiếng Việt](https://github.com/AllThingsSmitty/css-protips/tree/master/translations/vn-VN)

<sup>[Back to top](#contents)</sup>
