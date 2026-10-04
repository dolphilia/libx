---
title: "Streaming"
order: 10
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"source-and-notices\">Source and notices</h2>\n<p>Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">Original manual</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">Fixed source</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">License</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/01-original-notices/\">Original notices</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/\">Full legal code</a></p>"}]
---

<div class="jq-upstream-field" data-source-key="sections/9/title">

<h2 id="streaming">Streaming</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/9/body">

<p>With the <code>--stream</code> option jq can parse input texts in a streaming
fashion, allowing jq programs to start processing large JSON texts
immediately rather than after the parse completes.  If you have a
single JSON text that is 1GB in size, streaming it will allow you
to process it much more quickly.</p>




<p>However, streaming isn't easy to deal with as the jq program will
have <code>[&lt;path&gt;, &lt;leaf-value&gt;]</code> (and a few other forms) as inputs.</p>




<p>Several builtins are provided to make handling streams easier.</p>




<p>The examples below use the streamed form of <code>["a",["b"]]</code>, which is
<code>[[0],"a"],[[1,0],"b"],[[1,0]],[[1]]</code>.</p>




<p>Streaming forms include <code>[&lt;path&gt;, &lt;leaf-value&gt;]</code> (to indicate any
scalar value, empty array, or empty object), and <code>[&lt;path&gt;]</code> (to
indicate the end of an array or object).  Future versions of jq
run with <code>--stream</code> and <code>--seq</code> may output additional forms such
as <code>["error message"]</code> when an input text fails to parse.</p>

</div>

<div class="jq-upstream-field" data-source-key="sections/9/entries/0/title">

<h3 id="truncate_stream"><code>truncate_stream(stream_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/9/entries/0/body">

<p>Consumes a number as input and truncates the corresponding
number of path elements from the left of the outputs of the
given streaming expression.</p>

</div>

<!-- jq-example:sections/9/entries/0/examples/0:start -->

#### Example 1

Command

```sh
jq 'truncate_stream([[0],"a"],[[1,0],"b"],[[1,0]],[[1]])'
```

Input

```text
1
```

Output 1

```text
[[0],"b"]
```

Output 2

```text
[[0]]
```

<!-- jq-example:sections/9/entries/0/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/9/entries/1/title">

<h3 id="fromstream"><code>fromstream(stream_expression)</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/9/entries/1/body">

<p>Outputs values corresponding to the stream expression's
outputs.</p>

</div>

<!-- jq-example:sections/9/entries/1/examples/0:start -->

#### Example 1

Command

```sh
jq 'fromstream(1|truncate_stream([[0],"a"],[[1,0],"b"],[[1,0]],[[1]]))'
```

Input

```text
null
```

Output 1

```text
["b"]
```

<!-- jq-example:sections/9/entries/1/examples/0:end -->

<div class="jq-upstream-field" data-source-key="sections/9/entries/2/title">

<h3 id="tostream"><code>tostream</code></h3>

</div>

<div class="jq-upstream-field" data-source-key="sections/9/entries/2/body">

<p>The <code>tostream</code> builtin outputs the streamed form of its input.</p>

</div>

<!-- jq-example:sections/9/entries/2/examples/0:start -->

#### Example 1

Command

```sh
jq '. as $dot|fromstream($dot|tostream)|.==$dot'
```

Input

```text
[0,[1,{"a":1},{"b":2}]]
```

Output 1

```text
true
```

<!-- jq-example:sections/9/entries/2/examples/0:end -->


