---
title: "Math"
order: 8
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"source-and-notices\">Source and notices</h2>\n<p>Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">Original manual</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">Fixed source</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">License</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/01-original-notices/\">Original notices</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/\">Full legal code</a></p>"}]
---

<div class="jq-upstream-field" data-source-key="sections/7/title">

<h2 id="math">Math</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/7/body">

<p>jq currently only has IEEE754 double-precision (64-bit) floating
point number support.</p>




<p>Besides simple arithmetic operators such as <code>+</code>, jq also has most
standard math functions from the C math library.  C math functions
that take a single input argument (e.g., <code>sin()</code>) are available as
zero-argument jq functions.  C math functions that take two input
arguments (e.g., <code>pow()</code>) are available as two-argument jq
functions that ignore <code>.</code>.  C math functions that take three input
arguments are available as three-argument jq functions that ignore
<code>.</code>.</p>




<p>Availability of standard math functions depends on the
availability of the corresponding math functions in your operating
system and C math library.  Unavailable math functions will be
defined but will raise an error.</p>




<p>One-input C math functions: <code>acos</code> <code>acosh</code> <code>asin</code> <code>asinh</code> <code>atan</code>
<code>atanh</code> <code>cbrt</code> <code>ceil</code> <code>cos</code> <code>cosh</code> <code>erf</code> <code>erfc</code> <code>exp</code> <code>exp10</code>
<code>exp2</code> <code>expm1</code> <code>fabs</code> <code>floor</code> <code>gamma</code> <code>j0</code> <code>j1</code> <code>lgamma</code> <code>log</code>
<code>log10</code> <code>log1p</code> <code>log2</code> <code>logb</code> <code>nearbyint</code> <code>rint</code> <code>round</code>
<code>significand</code> <code>sin</code> <code>sinh</code> <code>sqrt</code> <code>tan</code> <code>tanh</code> <code>tgamma</code> <code>trunc</code>
<code>y0</code> <code>y1</code>.</p>




<p>Two-input C math functions: <code>atan2</code> <code>copysign</code> <code>drem</code> <code>fdim</code>
<code>fmax</code> <code>fmin</code> <code>fmod</code> <code>frexp</code> <code>hypot</code> <code>jn</code> <code>ldexp</code> <code>modf</code>
<code>nextafter</code> <code>nexttoward</code> <code>pow</code> <code>remainder</code> <code>scalb</code> <code>scalbln</code> <code>yn</code>.</p>




<p>Three-input C math functions: <code>fma</code>.</p>




<p>See your system's manual for more information on each of these.</p>

</div>


