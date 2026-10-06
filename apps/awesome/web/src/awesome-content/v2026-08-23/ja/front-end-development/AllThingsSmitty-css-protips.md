---
title: "Awesome CSS Protips"
description: "レイアウト、セレクター、文字組み、余白、フォーム、ブラウザー互換性に関するCSSの技法とコード例を案内します。"
licenseSource: "github-AllThingsSmitty-css-protips-readme-md"
---

# Awesome CSS Protips

レイアウト、セレクター、文字組み、余白、フォーム、ブラウザー互換性に関するCSSの技法を、コード例やデモとともに探せます。ブラウザー対応と上流の翻訳情報は固定原文に沿っています。各技法にはそれぞれ適用条件や制約があります。

## プロ向けヒント<a id="protips"></a>

### CSSリセットを使う<a id="use-a-css-reset"></a><a id="css-resetを使う"></a>

CSSリセットは、ブラウザーの既定スタイルの差を減らします。この例ではマージンとパディングを取り除き、ボックスサイズの計算方法を設定します。

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

要素と疑似要素に`box-sizing: border-box`を適用し、マージンとパディングをゼロにします。

<a id="デモ"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/kkrkLL)

> **ヒント:**
> 下記の[`box-sizing`を継承する](#inherit-box-sizing)ヒントに従う場合、CSSリセットに`box-sizing`プロパティを含めない選択もできます。

### `box-sizing`を継承する<a id="inherit-box-sizing"></a>

`box-sizing`を`html`から継承させます。

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

コンポーネントでボックスサイズの計算方法を変えると、継承する子孫要素にもその値を渡せます。

<a id="demo"></a>

[デモ](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

### すべてのプロパティをResetせず`unset`を使う<a id="use-unset-instead-of-resetting-all-properties"></a>

原文では、個別のリセット指定とショートハンドによるリセットを比較しています。どちらもボタンの既定の外観を変更するため、適用時にはフォーカスを示すスタイルを確保してください。

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

`all`ショートハンドで複数のプロパティをまとめてリセットできます。`unset`は、継承されるプロパティでは継承値、それ以外では初期値を使います。`all`は`direction`、`unicode-bidi`、カスタムプロパティをリセットしません。[CSSのカスケードと継承の仕様](https://www.w3.org/TR/css-cascade-5/#valdef-all-unset)を参照してください。

```css
button {
  all: unset;
}
```

### ナビゲーションのborder適用／解除に`:not()`を使う<a id="use-not-to-applyunapply-borders-on-navigation"></a>

ボーダーを設定し、

```css
/* add border */
.nav li {
  border-right: 1px solid #666;
}
```

最後の要素で解除する代わりに、

```css
/* remove border */
.nav li:last-child {
  border-right: none;
}
```

`:not()`疑似クラスを使って必要な要素だけに適用します。

```css
.nav li:not(:last-child) {
  border-right: 1px solid #666;
}
```

ボーダーの適用対象から最後の子要素を除外しています。

<a id="demo-1"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/LkymvO)

### フォントがローカルにインストール済みか確認する<a id="check-if-font-is-installed-locally"></a>

フォントの取得元を順に試し、リモートURLから取得する前にローカルにインストールされたフォントを探します。

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

この技法と[デモ](https://codepen.io/argyleink/pen/VwYJpgR)はAdam Argyleが紹介したものです。

### `line-height`を`body`へ追加する<a id="add-line-height-to-body"></a>

`line-height`を`body`に設定すると、別の指定がなければ段落や見出しへ継承できます。

```css
body {
  line-height: 1.5;
}
```

単位のない値は、各要素のフォントサイズに合わせて行の高さを決めます。

<a id="demo-2"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/VjbdYd)

### フォーム要素に`:focus`を設定する<a id="set-focus-for-form-elements"></a>

見えるフォーカス表示は、キーボード操作中の要素を把握する助けになります。この例では、リンクとフォーム部品に共通の輪郭線を付けます。

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

<a id="demo-3"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/ePzoOP/)

### 何でも垂直中央揃えにする<a id="vertically-center-anything"></a>

Flexboxを使って内容を縦横ともに中央へ配置します。

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

CSS Gridでも実現できます。

```css
body {
  display: grid;
  height: 100vh;
  place-items: center;
}
```

> **ヒント:**
> ほかの中央配置パターンは、CSS-Tricksの[ガイド](https://css-tricks.com/centering-css-complete-guide/)を参照してください。

<a id="demo-4"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/GqmGqZ)

### 高さ／幅の代わりに`aspect-ratio`を使う<a id="use-aspect-ratio-instead-of-heightwidth"></a>

`aspect-ratio`プロパティは、少なくとも一方の寸法が自動計算される場合に、幅と高さの望ましい比率を指定します。レスポンシブなレイアウトで画像用の領域を確保できます。`object-fit`プロパティは枠内への画像の収め方を指定し、この例では枠を埋めるよう画像を切り抜きます。

```css
img {
  aspect-ratio: 16 / 9; /* width / height */
  object-fit: cover;
}
```

`aspect-ratio`プロパティの詳細は、この[web.dev記事](https://web.dev/articles/aspect-ratio)を参照してください。

<a id="demo-5"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/MWxwoNx/)

### カンマ区切りリスト<a id="comma-separated-lists"></a>

生成コンテンツを使ってリスト項目間にカンマを付けます。

```css
ul > li:not(:last-child)::after {
  content: ",";
}
```

`:not()`疑似クラスを使うと、最後の項目にカンマは追加されません。

> **注記:**
> CSSで生成したテキストは、スクリーンリーダーで取得できない場合や、ブラウザーからのコピーに含まれない場合があります。必須の情報を生成コンテンツだけで伝えないでください。

### 負の`nth-child`で項目を選択する<a id="select-items-using-negative-nth-child"></a>

負の`nth-child`を使い、兄弟要素内の位置を基準に選択します。この例では、最初の3つの位置にあるリスト項目を表示します。

```css
li {
  display: none;
}

/* select items 1 through 3 and display them */
li:nth-child(-n + 3) {
  display: block;
}
```

別の例として、最初の非表示ルールを残し、選択ルールを[`:not()`セレクター](#use-not-to-applyunapply-borders-on-navigation)に置き換えると、最初の3つの位置より後にある項目を表示できます。

```css
/* select all items except the first 3 and display them */
li:not(:nth-child(-n + 3)) {
  display: block;
}
```

<a id="demo-6"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/WxjKZp)

### アイコンにはSVGを使う<a id="use-svg-for-icons"></a>

異なる解像度に合わせて拡大縮小するアイコンには、SVGを使えます。

```css
.logo {
  background: url("logo.svg");
}
```

原文では、SVGをPNG、JPG、GIFアイコンの代替として紹介し、[IE9以降の対応](http://caniuse.com/#search=svg)に言及しています。

> **注記:**
> 原文では、アイコンのみのボタンでSVGを読み込めない場合に、`aria-label`の内容を代わりに表示する例を紹介しています。

```css
.no-svg .icon-only::after {
  content: attr(aria-label);
}
```

### 「ロボトミーされたフクロウ」セレクターを使う<a id="use-the-lobotomized-owl-selector"></a>

全称セレクター（`*`）と隣接兄弟セレクター（`+`）を組み合わせ、兄弟要素間に余白を設けます。

```css
* + * {
  margin-top: 1.5em;
}
```

この例では、直前に兄弟要素がある要素に`margin-top: 1.5em`が適用されます。

> **ヒント:**
> このセレクターについては、_A List Apart_の[Heydon Pickeringの記事](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls)を参照してください。

<a id="demo-7"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/grRvWq)

### Pure CSSスライダーに`max-height`を使う<a id="use-max-height-for-pure-css-sliders"></a>

`max-height`とオーバーフローの指定を使って、ホバー時に内容パネルの高さの上限を変更します。

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

ホバー時に高さの上限が200pxから600pxへ変わり、縦方向のスクロールが有効になります。実際の高さは内容量やほかのサイズ指定にも依存し、必ず600pxになるわけではありません。[CSSの最大サイズの指定](https://www.w3.org/TR/css-sizing-3/#max-size-properties)を参照してください。

### 等幅のテーブルセル<a id="equal-width-table-cells"></a>

原文では、テーブルの列を等幅にする例として`table-layout: fixed`を使っています。

```css
.calendar {
  table-layout: fixed;
}
```

固定テーブルレイアウトは、テーブルの幅と、列や先頭行のセルに指定した幅にも依存します。この宣言だけで等幅になるとは限りません。[CSSのテーブルレイアウト仕様](https://www.w3.org/TR/css-tables-3/)を参照してください。

<a id="demo-8"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/jALALm)

### Flexboxでmargin hackをなくす<a id="get-rid-of-margin-hacks-with-flexbox"></a>

Flexboxの`justify-content: space-between`を使って列間の余白を設けます。`nth-`、`first-`、`last-child`セレクターを使うマージン指定の代替です。

```css
.list {
  display: flex;
  justify-content: space-between;
}

.list .person {
  flex-basis: 23%;
}
```

利用できる空間がフレックス項目の間に均等に配分されます。

### 空のリンクに属性セレクターを使う<a id="use-attribute-selectors-with-empty-links"></a>

空の`<a>`要素で`href`がhttpから始まる場合、URLを生成テキストとして表示します。

```css
a[href^="http"]:empty::before {
  content: attr(href);
}
```

生成されたテキストでリンク先を表示できます。

<a id="demo-9"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/zBzXRx)

> **注記:**
> CSSで生成したテキストは、スクリーンリーダーで取得できない場合や、ブラウザーからのコピーに含まれない場合があります。必須の情報を生成コンテンツだけで伝えないでください。

### `:is()`で詳細度をより良く制御する<a id="control-specificity-better-with-is"></a>

`:is()`疑似クラスはセレクターの選択肢をまとめ、長いセレクター一覧を短く記述できます。

```css
:is(section, article, aside, nav) :is(h1, h2, h3, h4, h5, h6) {
  color: green;
}
```

これらの型セレクターでは、上記のルールセットと次の展開したセレクター一覧は同じ要素を選択します。

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

<a id="demo-10"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/rNRVxdx)

### 「既定」リンクをスタイル設定する<a id="style-default-links"></a>

「既定」リンク用のスタイルを追加します:

```css
a[href]:not([class]) {
  color: #008000;
  text-decoration: underline;
}
```

href属性がありclass属性がないリンクに適用されます。CMSで挿入したリンクも、この条件を満たせば対象になります。

### 内在比率ボックス<a id="intrinsic-ratio-boxes"></a>

高さをゼロにしたコンテナーへパーセント指定のパディングを加え、子要素を絶対配置して比率を持つボックスを作ります。

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

この横書きレイアウトでは、パーセント指定のパディングは包含ブロックの幅を基準にします。コンテナーがその幅いっぱいに広がる場合、`padding-bottom: 20%`により5:1の比率になります（100% / 20% = 5:1）。[CSSボックスモデル仕様](https://www.w3.org/TR/CSS21/box.html#padding-properties)を参照してください。

<a id="demo-11"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/jALZvE)

### 壊れた画像をスタイル設定する<a id="style-broken-images"></a>

原文では、読み込めない画像をCSSで装飾する例を紹介しています。

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

疑似要素を使ってメッセージと画像URLを表示します。読み込めない画像での表示はブラウザーの挙動に依存します。

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

### グローバルなサイズには`rem`、ローカルなサイズには`em`を使う<a id="use-rem-for-global-sizing-use-em-for-local-sizing"></a>

ルート要素で基準フォントサイズを設定した後（`html { font-size: 100%; }`）、テキスト要素のフォントサイズを`em`へ設定します:

```css
h2 {
  font-size: 2em;
}

p {
  font-size: 1em;
}
```

次にモジュールの`font-size`を`rem`へ設定します:

```css
article {
  font-size: 1.25rem;
}

aside .module {
  font-size: 0.9rem;
}
```

モジュールのサイズはルートのフォントサイズを基準にし、その中のテキストは継承したフォントサイズを基準にします。

### ミュートされていない自動再生動画を隠す<a id="hide-autoplay-videos-that-arent-muted"></a>

カスタムユーザースタイルシート向けに、原文では`autoplay`属性があり`muted`属性がない動画を隠しています。このCSSは表示を制御します。

```css
video[autoplay]:not([muted]) {
  display: none;
}
```

[`:not()`](#use-not-to-applyunapply-borders-on-navigation)疑似クラスで、muted属性がある要素を除外しています。

### 柔軟な文字サイズに`:root`を使う<a id="use-root-for-flexible-type"></a>

`:root`を使って、ビューポートの高さと幅から`font-size`を計算します。

```css
:root {
  font-size: calc(1vw + 1vh + 0.5vmin);
}
```

これで`rem`単位を`:root`が計算した値に基づいて利用できます:

```css
body {
  font: 1rem/1.6 sans-serif;
}
```

<a id="demo-12"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/XKgOkR)

### モバイル体験を改善するためフォーム要素に`font-size`を設定する<a id="set-font-size-on-form-elements-for-a-better-mobile-experience"></a>

原文では、iOS Safariなどのモバイルブラウザーでフォーカス時の自動ズームを避ける方法として、フォーム部品の`font-size`を16pxにする例を紹介しています。効果はブラウザーや設定に依存します。この例は、テキスト入力欄やテキストエリアとともに`<select>`を対象にしています。

```css
input[type="text"],
input[type="number"],
select,
textarea {
  font-size: 16px;
}
```

### `pointer-events`でマウス操作を制御する<a id="use-pointer-events-to-control-mouse-events"></a><a id="pointer-eventsでマウスイベントを制御する"></a>

[pointer-eventsプロパティ](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)は、ポインター位置から操作対象を判定するとき、その要素を対象にするかを指定します。この例では、無効なボタンを判定対象から除外します。

```css
button:disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

このプロパティはポインターの対象判定を制御するもので、イベントの既定動作を取り消すものではありません。[CSSのユーザー操作に関する仕様](https://www.w3.org/TR/css-ui-4/#pointer-events-control)を参照してください。

### 間隔に使う改行に`display: none`を設定する<a id="set-display-none-on-line-breaks-used-as-spacing"></a>

[Harry Robertsが指摘した](https://twitter.com/csswizardry/status/1170835532584235008)ように、これはCMSユーザーが間隔のために余分な改行を使うことを防ぐのに役立ちます:

```css
br + br {
  display: none;
}
```

### 空のHTML要素を隠すため`:empty`を使う<a id="use-empty-to-hide-empty-html-elements"></a>

`:empty`疑似クラスを使うと、CMSやスクリプトが内容を入れる前の空の要素（例: `<p class="error-message"></p>`）を隠せます。原文の次のセレクターはページ内の空の要素すべてに適用されるため、実際には意図した要素へ対象を絞ってください。

```css
:empty {
  display: none;
}
```

> **注記:**
> [Selectors Level 3の定義](https://www.w3.org/TR/selectors-3/#empty-pseudo)では、`<p class="error-message"> </p>`のように空白テキストを含む要素は空とみなされません。原文はこの挙動を説明しています。

### `margin-inline`を`margin`の代わりに使う<a id="use-margin-inline-instead-of-margin"></a>

`margin-inline`はインライン方向の開始・終了マージンを設定します。横書きでは、`margin-left`と`margin-right`の個別指定の代わりに使えます。開始・終了と左右の対応は、テキストの方向にも依存します。

```css
.div {
  margin-inline: auto;
}
```

`margin-block`ショートハンドはブロック方向の開始・終了マージンを設定します。横書きでは`margin-top`と`margin-bottom`に対応しますが、物理方向との対応は書字方向に依存します。[CSS論理プロパティ仕様](https://www.w3.org/TR/css-logical-1/#margin-properties)を参照してください。

```css
.div {
  margin-block: auto;
}
```

<a id="demo-13"></a>

[デモ](https://codepen.io/AllThingsSmitty/pen/PwoOQGB)

## サポート<a id="support"></a>

固定原文では、対応ブラウザーにChrome、Firefox、Safari、Edgeを挙げています。原文時点のバージョンに関する記述であり、現在のブラウザーで全例が動作することを保証するものではありません。

## 翻訳<a id="translations"></a>

> **注記:**
> 原文では、十数件以上の翻訳の保守に時間がかかるため、翻訳済みREADMEにはメインREADMEのヒントが一部含まれていない場合があると説明しています。

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
