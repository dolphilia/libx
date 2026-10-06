---
title: "jq 1.8 Manual"
order: 0
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"source-and-notices\">Source and notices</h2>\n<p>Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">Original manual</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">Fixed source</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">License</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/01-original-notices/\">Original notices</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/\">Full legal code</a></p>"}]
---

# jq 1.8 Manual

<div class="jq-upstream-field" data-source-key="body">

<p>A jq program is a "filter": it takes an input, and produces an
output. There are a lot of builtin filters for extracting a
particular field of an object, or converting a number to a string,
or various other standard tasks.</p>




<p>Filters can be combined in various ways - you can pipe the output of
one filter into another filter, or collect the output of a filter
into an array.</p>




<p>Some filters produce multiple results, for instance there's one that
produces all the elements of its input array. Piping that filter
into a second runs the second filter for each element of the
array. Generally, things that would be done with loops and iteration
in other languages are just done by gluing filters together in jq.</p>




<p>It's important to remember that every filter has an input and an
output. Even literals like "hello" or 42 are filters - they take an
input but always produce the same literal as output. Operations that
combine two filters, like addition, generally feed the same input to
both and combine the results. So, you can implement an averaging
filter as <code>add / length</code> - feeding the input array both to the <code>add</code>
filter and the <code>length</code> filter and then performing the division.</p>




<p>But that's getting ahead of ourselves. :) Let's start with something
simpler:</p>

</div>


