---
title: "Colors"
order: 14
categoryOrder: 1
---

<span id="colors"></span>

<!-- jq-source-field:sections/13/title:start -->
Colors
<!-- jq-source-field:sections/13/title:end -->
<!-- jq-source-field:sections/13/body:start -->

To configure alternative colors just set the `JQ_COLORS`
environment variable to colon-delimited list of partial terminal
escape sequences like `"1;31"`, in this order:

  - color for `null`
  - color for `false`
  - color for `true`
  - color for numbers
  - color for strings
  - color for arrays
  - color for objects
  - color for object keys

The default color scheme is the same as setting
`JQ_COLORS="0;90:0;39:0;39:0;39:0;32:1;39:1;39:1;34"`.

This is not a manual for VT100/ANSI escapes.  However, each of
these color specifications should consist of two numbers separated
by a semi-colon, where the first number is one of these:

  - 1 (bright)
  - 2 (dim)
  - 4 (underscore)
  - 5 (blink)
  - 7 (reverse)
  - 8 (hidden)

and the second is one of these:

  - 30 (black)
  - 31 (red)
  - 32 (green)
  - 33 (yellow)
  - 34 (blue)
  - 35 (magenta)
  - 36 (cyan)
  - 37 (white)

<!-- jq-source-field:sections/13/body:end -->


## Source and changes

Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.

[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)
