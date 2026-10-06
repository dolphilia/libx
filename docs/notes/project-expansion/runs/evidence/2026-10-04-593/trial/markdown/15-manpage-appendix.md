---
title: "Manpage introduction and epilogue"
order: 15
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="manpage_intro">

<h1>jq(1) -- Command-line JSON processor</h1>




<h2 id="synopsis">SYNOPSIS</h2>




<p><code>jq</code> [&lt;options&gt;...] &lt;filter&gt; [&lt;files&gt;...]</p>




<p><code>jq</code> can transform JSON in various ways, by selecting, iterating,
reducing and otherwise mangling JSON documents. For instance,
running the command <code>jq 'map(.price) | add'</code> will take an array of
JSON objects as input and return the sum of their "price" fields.</p>




<p><code>jq</code> can accept text input as well, but by default, <code>jq</code> reads a
stream of JSON entities (including numbers and other literals) from
<code>stdin</code>. Whitespace is only needed to separate entities such as 1
and 2, and true and false.  One or more &lt;files&gt; may be specified, in
which case <code>jq</code> will read input from those instead.</p>




<p>The &lt;options&gt; are described in the [INVOKING JQ] section; they
mostly concern input and output formatting. The &lt;filter&gt; is written
in the jq language and specifies how to transform the input
file or document.</p>




<h2 id="filters">FILTERS</h2>

</div>

<div class="jq-upstream-field" data-source-key="manpage_epilogue">

<h2 id="bugs">BUGS</h2>




<p>Presumably. Report them or discuss them at:</p>




<pre><code>https://github.com/jqlang/jq/issues
</code></pre>




<h2 id="author">AUTHOR</h2>




<p>Stephen Dolan <code>&lt;mu@netsoc.tcd.ie&gt;</code></p>

</div>


## Source and notices

Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.

[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)
