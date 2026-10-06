---
title: "Manpage introduction and epilogue"
---

<!-- jq-source-field:manpage_intro:start -->
jq(1) -- Command-line JSON processor
====================================

## SYNOPSIS

`jq` [<options>...] <filter> [<files>...]

`jq` can transform JSON in various ways, by selecting, iterating,
reducing and otherwise mangling JSON documents. For instance,
running the command `jq 'map(.price) | add'` will take an array of
JSON objects as input and return the sum of their "price" fields.

`jq` can accept text input as well, but by default, `jq` reads a
stream of JSON entities (including numbers and other literals) from
`stdin`. Whitespace is only needed to separate entities such as 1
and 2, and true and false.  One or more <files> may be specified, in
which case `jq` will read input from those instead.

The <options> are described in the [INVOKING JQ] section; they
mostly concern input and output formatting. The <filter> is written
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
