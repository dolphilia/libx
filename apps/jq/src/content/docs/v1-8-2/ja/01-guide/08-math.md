---
title: "数学"
order: 8
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"出典と通知\">出典と通知</h2>\n<p>出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">公式マニュアル</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">固定原典</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">ライセンス</a> · <a href=\"/docs/jq/v1-8-2/ja/02-license/01-original-notices/\">原著作権・第三者通知</a> · <a href=\"/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/\">ライセンス全文</a></p>"}]
---

<div class="jq-upstream-field" data-source-key="sections/7/title">

<h2 id="math">数学</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/7/body">

<p>現在のjqは、IEEE754の倍精度（64ビット）浮動小数点数だけに対応しています。</p>
<p><code>+</code> のような単純な算術演算子に加え、jqにはC数学ライブラリの標準的な数学関数のほとんどがあります。入力引数が1つのC数学関数（たとえば <code>sin()</code>）は、引数なしのjq関数として使えます。入力引数が2つのC数学関数（たとえば <code>pow()</code>）は、<code>.</code> を無視する2引数のjq関数として使えます。入力引数が3つのC数学関数は、<code>.</code> を無視する3引数のjq関数として使えます。</p>
<p>標準的な数学関数を使えるかどうかは、OSとC数学ライブラリで、対応する数学関数が使えるかどうかに依存します。使えない数学関数も定義はされますが、エラーを発生させます。</p>
<p>入力引数が1つのC数学関数： <code>acos</code> <code>acosh</code> <code>asin</code> <code>asinh</code> <code>atan</code>
<code>atanh</code> <code>cbrt</code> <code>ceil</code> <code>cos</code> <code>cosh</code> <code>erf</code> <code>erfc</code> <code>exp</code> <code>exp10</code>
<code>exp2</code> <code>expm1</code> <code>fabs</code> <code>floor</code> <code>gamma</code> <code>j0</code> <code>j1</code> <code>lgamma</code> <code>log</code>
<code>log10</code> <code>log1p</code> <code>log2</code> <code>logb</code> <code>nearbyint</code> <code>rint</code> <code>round</code>
<code>significand</code> <code>sin</code> <code>sinh</code> <code>sqrt</code> <code>tan</code> <code>tanh</code> <code>tgamma</code> <code>trunc</code>
<code>y0</code> <code>y1</code>.</p>
<p>入力引数が2つのC数学関数： <code>atan2</code> <code>copysign</code> <code>drem</code> <code>fdim</code>
<code>fmax</code> <code>fmin</code> <code>fmod</code> <code>frexp</code> <code>hypot</code> <code>jn</code> <code>ldexp</code> <code>modf</code>
<code>nextafter</code> <code>nexttoward</code> <code>pow</code> <code>remainder</code> <code>scalb</code> <code>scalbln</code> <code>yn</code>.</p>
<p>入力引数が3つのC数学関数： <code>fma</code>.</p>
<p>各関数の詳細は、システムのマニュアルを参照してください。</p>

</div>

## 訳注

訳注：数学の原文冒頭にある浮動小数点数の一般的な説明は保持しています。数値リテラルの精度保持や比較には、Basic filtersのIdentityに記載された実装・ビルド条件も関係します。have_literal_numbersとhave_decnumの説明も参照し、すべてのビルドで同じ数値リテラルの保持が保証されると推測しないでください。

[原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/08-math/#math) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/02-basic-filters/#identity) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/04-builtin-operators-and-functions/#have_literal_numbers) · [原典の該当項目（ja）](/docs/jq/v1-8-2/ja/01-guide/04-builtin-operators-and-functions/#have_decnum)

