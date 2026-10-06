---
title: "Manpage introduction and epilogue"
order: 15
categoryOrder: 1
---

<!-- jq-source-field:manpage_intro:start -->
jq(1) -- Command-line JSON processor
====================================

## SYNOPSIS

`jq` [&lt;options&gt;...] &lt;filter&gt; [&lt;files&gt;...]

`jq` can transform JSON in various ways, by selecting, iterating,
reducing and otherwise mangling JSON documents. For instance,
running the command `jq 'map(.price) | add'` will take an array of
JSON objects as input and return the sum of their "price" fields.

`jq` can accept text input as well, but by default, `jq` reads a
stream of JSON entities (including numbers and other literals) from
`stdin`. Whitespace is only needed to separate entities such as 1
and 2, and true and false.  One or more &lt;files&gt; may be specified, in
which case `jq` will read input from those instead.

The &lt;options&gt; are described in the [INVOKING JQ] section; they
mostly concern input and output formatting. The &lt;filter&gt; is written
in the jq language and specifies how to transform the input
file or document.

## FILTERS

<!-- jq-source-field:manpage_intro:end -->

<!-- jq-source-field:manpage_epilogue:start -->
## BUGS

Presumably. Report them or discuss them at:

    https://github.com/jqlang/jq/issues

## AUTHOR

Stephen Dolan `<mu@netsoc.tcd.ie>`

<!-- jq-source-field:manpage_epilogue:end -->


## Source and changes

Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.

[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)
