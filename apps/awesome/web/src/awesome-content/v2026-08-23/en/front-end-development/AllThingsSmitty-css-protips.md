---
title: "Awesome CSS Protips"
description: "CSS techniques and examples for layout, selectors, typography, spacing, forms, and browser compatibility."
licenseSource: "github-AllThingsSmitty-css-protips-readme-md"
---

# Awesome CSS Protips

CSS techniques with code examples and demos for layout, selectors, typography, spacing, forms, and browser compatibility. Browser support statements and linked translations reflect the fixed source; individual techniques have their own conditions and limitations.

## Protips

### Use a CSS Reset

A CSS reset reduces differences in browser defaults. This example clears margins and padding and sets the box-sizing model:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Elements and pseudo-elements use `box-sizing: border-box` with zero margins and padding.

<a id="demo"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/kkrkLL)

> **TIP:**
> If you follow the [Inherit `box-sizing`](#inherit-box-sizing) tip below you might opt to not include the `box-sizing` property in your CSS reset.

### Inherit `box-sizing`

Let `box-sizing` be inherited from `html`:

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

A component can change its box-sizing value and pass that value to descendants that inherit it.

<a id="demo-1"></a>

[Demo](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

### Use `unset` Instead of Resetting All Properties

The source compares individual reset declarations with a shorthand reset. These examples change the button’s default appearance; retain a visible focus style when applying them:

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

The `all` shorthand resets properties together. With `unset`, inherited properties inherit and other properties take their initial values. `all` does not reset `direction`, `unicode-bidi`, or custom properties; see the [CSS Cascading and Inheritance specification](https://www.w3.org/TR/css-cascade-5/#valdef-all-unset).

```css
button {
  all: unset;
}
```

### Use `:not()` to Apply/Unapply Borders on Navigation

Instead of putting on the border...

```css
/* add border */
.nav li {
  border-right: 1px solid #666;
}
```

...and then taking it off the last element...

```css
/* remove border */
.nav li:last-child {
  border-right: none;
}
```

...use the `:not()` pseudo-class to only apply to the elements you want:

```css
.nav li:not(:last-child) {
  border-right: 1px solid #666;
}
```

The last child is excluded from the border rule.

<a id="demo-2"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/LkymvO)

### Check if Font Is Installed Locally

The font source list tries a locally installed font before the remote URL:

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

This technique and [demo](https://codepen.io/argyleink/pen/VwYJpgR) were shared by Adam Argyle.

### Add `line-height` to `body`

Set `line-height` on `body` so that paragraphs and headings can inherit it, unless another rule overrides it:

```css
body {
  line-height: 1.5;
}
```

The unitless value scales with each element’s own font size.

<a id="demo-3"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/VjbdYd)

### Set `:focus` for Form Elements

A visible focus indicator helps keyboard users locate the active element. This example gives links and form controls a consistent outline:

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

<a id="demo-4"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/ePzoOP/)

### Vertically-Center Anything

Use Flexbox to center the content in both directions:

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

CSS Grid provides another approach:

```css
body {
  display: grid;
  height: 100vh;
  place-items: center;
}
```

> **TIP:**
> CSS-Tricks covers more centering patterns in [this guide](https://css-tricks.com/centering-css-complete-guide/).

<a id="demo-5"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/GqmGqZ)

### Use `aspect-ratio` Instead of Height/Width

The `aspect-ratio` property supplies a preferred width-to-height ratio when at least one dimension is sized automatically. It can reserve space for an image in a responsive layout. The `object-fit` property controls how the image fits inside its box; this example crops it to fill the box.

```css
img {
  aspect-ratio: 16 / 9; /* width / height */
  object-fit: cover;
}
```

Learn more about the `aspect-ratio` property in this [web.dev post](https://web.dev/articles/aspect-ratio).

<a id="demo-6"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/MWxwoNx/)

### Comma-Separated Lists

Add commas between list items using generated content:

```css
ul > li:not(:last-child)::after {
  content: ",";
}
```

Use the `:not()` pseudo-class and no comma will be added to the last item.

> **NOTE:**
> CSS-generated text may not be available to screen readers or included when copying text from the browser. Do not rely on it for essential content.

### Select Items Using Negative `nth-child`

Use negative `nth-child` to select elements by their position among element siblings. Here, list items in the first three positions are displayed.

```css
li {
  display: none;
}

/* select items 1 through 3 and display them */
li:nth-child(-n + 3) {
  display: block;
}
```

Alternatively, keep the initial hiding rule and replace the first selection rule with [a `:not()` selector](#use-not-to-applyunapply-borders-on-navigation) to display items after the first three positions:

```css
/* select all items except the first 3 and display them */
li:not(:nth-child(-n + 3)) {
  display: block;
}
```

<a id="demo-7"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/WxjKZp)

### Use SVG for Icons

SVG can be used for icons that need to scale across resolutions:

```css
.logo {
  background: url("logo.svg");
}
```

The source presents SVG as an alternative to PNG, JPG, and GIF icons, with support [back to IE9](http://caniuse.com/#search=svg).

> **NOTE:**
> The source suggests displaying the `aria-label` text when an SVG icon fails to load in an icon-only button:

```css
.no-svg .icon-only::after {
  content: attr(aria-label);
}
```

### Use the "Lobotomized Owl" Selector

Combine the universal selector (`*`) with the adjacent sibling selector (`+`) to add spacing between sibling elements:

```css
* + * {
  margin-top: 1.5em;
}
```

In this example, an element with an immediately preceding element sibling receives `margin-top: 1.5em`.

> **TIP:**
> For more on the "lobotomized owl" selector, read [Heydon Pickering's post](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls) on _A List Apart_.

<a id="demo-8"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/grRvWq)

### Use `max-height` for Pure CSS Sliders

Change a content panel’s height limit on hover using `max-height` and overflow rules:

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

On hover, the height limit changes from 200px to 600px and vertical scrolling is enabled. The actual height still depends on the content and other sizing rules; the limit does not force a height of 600px. See the [CSS maximum-size properties](https://www.w3.org/TR/css-sizing-3/#max-size-properties).

### Equal-Width Table Cells

The source uses `table-layout: fixed` for equal-width table columns:

```css
.calendar {
  table-layout: fixed;
}
```

Fixed table layout also depends on the table width and any widths set on columns or cells in the first row. This declaration alone does not guarantee equal columns; see the [CSS table layout specification](https://www.w3.org/TR/css-tables-3/).

<a id="demo-9"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/jALALm)

### Get Rid of Margin Hacks With Flexbox

Use Flexbox with `justify-content: space-between` for gaps between columns instead of margin rules involving `nth-`, `first-`, and `last-child` selectors:

```css
.list {
  display: flex;
  justify-content: space-between;
}

.list .person {
  flex-basis: 23%;
}
```

Available space is distributed evenly between the flex items.

### Use Attribute Selectors with Empty Links

For an empty `<a>` element whose `href` begins with http, display the URL as generated text:

```css
a[href^="http"]:empty::before {
  content: attr(href);
}
```

The generated text displays the link destination.

<a id="demo-10"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/zBzXRx)

> **NOTE:**
> CSS-generated text may not be available to screen readers or included when copying text from the browser. Do not rely on it for essential content.

### Control Specificity Better with `:is()`

The `:is()` pseudo-class groups selector alternatives, allowing a long selector list to be written more compactly.

```css
:is(section, article, aside, nav) :is(h1, h2, h3, h4, h5, h6) {
  color: green;
}
```

For these type selectors, the ruleset selects the same elements as the expanded selector list below:

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

<a id="demo-11"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/rNRVxdx)

### Style "Default" Links

Add a style for "default" links:

```css
a[href]:not([class]) {
  color: #008000;
  text-decoration: underline;
}
```

This rule styles links with an href attribute and no class attribute, including CMS-inserted links that meet those conditions.

### Intrinsic Ratio Boxes

Use percentage padding with a zero-height container and an absolutely positioned child to construct a ratio box:

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

Percentage padding is based on the containing block’s width in this horizontal layout. When the container spans that width, `padding-bottom: 20%` creates the 5:1 ratio shown here (100% / 20% = 5:1); see the [CSS box model specification](https://www.w3.org/TR/CSS21/box.html#padding-properties).

<a id="demo-12"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/jALZvE)

### Style Broken Images

The source proposes CSS rules for styling an image that fails to load:

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

The pattern uses pseudo-elements to show a message and the image URL. Its rendering depends on browser behavior for broken images:

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

> **TIP:**
> Learn more about styling for this pattern in [Ire Aderinokun's post](http://bitsofco.de/styling-broken-images/).

### Use `rem` for Global Sizing; Use `em` for Local Sizing

After setting the base font size at the root (`html { font-size: 100%; }`), set the font size for textual elements to `em`:

```css
h2 {
  font-size: 2em;
}

p {
  font-size: 1em;
}
```

Then set the `font-size` for modules to `rem`:

```css
article {
  font-size: 1.25rem;
}

aside .module {
  font-size: 0.9rem;
}
```

Module sizes are based on the root font size; their text sizes are based on the inherited font size.

### Hide Autoplay Videos That Aren't Muted

For a custom user stylesheet, the source hides video elements that have `autoplay` but lack a `muted` attribute. This CSS rule controls visibility:

```css
video[autoplay]:not([muted]) {
  display: none;
}
```

The [`:not()`](#use-not-to-applyunapply-borders-on-navigation) pseudo-class excludes elements with the muted attribute.

### Use `:root` for Flexible Type

Use `:root` to calculate `font-size` from the viewport height and width:

```css
:root {
  font-size: calc(1vw + 1vh + 0.5vmin);
}
```

Now you can utilize the `rem` unit based on the value calculated by `:root`:

```css
body {
  font: 1rem/1.6 sans-serif;
}
```

<a id="demo-13"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/XKgOkR)

### Set `font-size` on Form Elements for a Better Mobile Experience

The source proposes a `font-size` of 16px for form controls as a way to avoid automatic zoom on focus in mobile browsers such as iOS Safari. The effect depends on the browser and its settings; this example includes `<select>` along with text inputs and textareas:

```css
input[type="text"],
input[type="number"],
select,
textarea {
  font-size: 16px;
}
```

### Use `pointer-events` to Control Mouse Events

The [pointer-events property](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) controls whether an element is a target of pointer hit-testing. In this example, the disabled button is excluded from that targeting:

```css
button:disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

This property controls pointer targeting rather than cancelling an event’s default action. See the [CSS user interaction specification](https://www.w3.org/TR/css-ui-4/#pointer-events-control).

### Set `display: none` on Line Breaks Used as Spacing

As [Harry Roberts pointed out](https://twitter.com/csswizardry/status/1170835532584235008), this can help prevent CMS users from using extra line breaks for spacing:

```css
br + br {
  display: none;
}
```

### Use `:empty` to Hide Empty HTML Elements

Use the `:empty` pseudo-class to hide an empty placeholder such as `<p class="error-message"></p>` before a CMS or script supplies its content. The source’s broad selector below matches empty elements throughout the page, so restrict it to the intended placeholders when applying this pattern.

```css
:empty {
  display: none;
}
```

> **NOTE:**
> In the [Selectors Level 3 definition](https://www.w3.org/TR/selectors-3/#empty-pseudo), whitespace text makes an element nonempty, as in `<p class="error-message"> </p>`. This is the behavior described by the source.

### Use `margin-inline` instead of `margin`

`margin-inline` sets the inline-start and inline-end margins. In horizontal writing modes, it can replace separate `margin-left` and `margin-right` declarations; their start/end mapping also depends on text direction.

```css
.div {
  margin-inline: auto;
}
```

The `margin-block` shorthand sets the block-start and block-end margins. In horizontal writing mode these correspond to `margin-top` and `margin-bottom`; the physical mapping depends on writing mode. See [CSS Logical Properties](https://www.w3.org/TR/css-logical-1/#margin-properties).

```css
.div {
  margin-block: auto;
}
```

<a id="demo-14"></a>

[Demo](https://codepen.io/AllThingsSmitty/pen/PwoOQGB)

## Support

The fixed source lists Chrome, Firefox, Safari, and Edge as supported browsers. This statement refers to the source’s versions and does not guarantee support for every example in current browsers.

## Translations

> **NOTE:**
> The source notes that maintaining more than a dozen translations takes additional time, so translated READMEs may omit tips from the main README.

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
