---
title: "Colors"
order: 14
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"source-and-notices\">Source and notices</h2>\n<p>Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">Original manual</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">Fixed source</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">License</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/01-original-notices/\">Original notices</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/\">Full legal code</a></p>"}]
---

<div class="jq-upstream-field" data-source-key="sections/13/title">

<h2 id="colors">Colors</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/13/body">

<p>To configure alternative colors just set the <code>JQ_COLORS</code>
environment variable to colon-delimited list of partial terminal
escape sequences like <code>"1;31"</code>, in this order:</p>




<ul>
<li>color for <code>null</code></li>
<li>color for <code>false</code></li>
<li>color for <code>true</code></li>
<li>color for numbers</li>
<li>color for strings</li>
<li>color for arrays</li>
<li>color for objects</li>
<li>color for object keys</li>
</ul>




<p>The default color scheme is the same as setting
<code>JQ_COLORS="0;90:0;39:0;39:0;39:0;32:1;39:1;39:1;34"</code>.</p>




<p>This is not a manual for VT100/ANSI escapes.  However, each of
these color specifications should consist of two numbers separated
by a semi-colon, where the first number is one of these:</p>




<ul>
<li>1 (bright)</li>
<li>2 (dim)</li>
<li>4 (underscore)</li>
<li>5 (blink)</li>
<li>7 (reverse)</li>
<li>8 (hidden)</li>
</ul>




<p>and the second is one of these:</p>




<ul>
<li>30 (black)</li>
<li>31 (red)</li>
<li>32 (green)</li>
<li>33 (yellow)</li>
<li>34 (blue)</li>
<li>35 (magenta)</li>
<li>36 (cyan)</li>
<li>37 (white)</li>
</ul>

</div>


