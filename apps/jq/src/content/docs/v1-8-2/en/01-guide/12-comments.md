---
title: "Comments"
order: 12
categoryOrder: 1
documentContext: [{"kind":"source","html":"<h2 id=\"source-and-notices\">Source and notices</h2>\n<p>Source: jq 1.8 Manual by Stephen Dolan / jq project contributors. Original copyright notice: jq is copyright (C) 2012 Stephen Dolan. Fixed source: jq 1.8.2, commit 34f7186b86743a083a589741b6cea95293524108. Documentation is licensed under CC BY 3.0 Unported. This English edition is split and reformatted from the original; the Japanese edition is an unofficial translation from English. No upstream endorsement is implied.</p>\n<p><a href=\"https://jqlang.org/manual/v1.8/\">Original manual</a> · <a href=\"https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml\">Fixed source</a> · <a href=\"https://creativecommons.org/licenses/by/3.0/\">License</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/01-original-notices/\">Original notices</a> · <a href=\"/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/\">Full legal code</a></p>"}]
---

<div class="jq-upstream-field" data-source-key="sections/11/title">

<h2 id="comments">Comments</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/11/body">

<p>You can write comments in your jq filters using <code>#</code>.</p>




<p>A <code>#</code> character (not part of a string) starts a comment.
All characters from <code>#</code> to the end of the line are ignored.</p>




<p>If the end of the line is preceded by an odd number of backslash
characters, the following line is also considered part of the
comment and is ignored.</p>




<p>For example, the following code outputs <code>[1,3,4,7]</code></p>




<pre><code>[
  1,
  # foo \
  2,
  # bar \\
  3,
  4, # baz \\\
  5, \
  6,
  7
  # comment \
    comment \
    comment
]
</code></pre>




<p>Backslash continuing the comment on the next line can be useful
when writing the "shebang" for a jq script:</p>




<pre><code>#!/bin/sh --
# total - Output the sum of the given arguments (or stdin)
# usage: total [numbers...]
# \
exec jq --args -MRnf -- "$0" "$@"

$ARGS.positional |
reduce (
  if . == []
    then inputs
    else .[]
  end |
  . as $dot |
  try tonumber catch false |
  if not or isnan then
    @json "total: Invalid number \($dot).\n" | halt_error(1)
  end
) as $n (0; . + $n)
</code></pre>




<p>The <code>exec</code> line is considered a comment by jq, so it is ignored.
But it is not ignored by <code>sh</code>, since in <code>sh</code> a backslash at the
end of the line does not continue the comment.
With this trick, when the script is invoked as <code>total 1 2</code>,
<code>/bin/sh -- /path/to/total 1 2</code> will be run, and <code>sh</code> will then
run <code>exec jq --args -MRnf -- /path/to/total 1 2</code> replacing itself
with a <code>jq</code> interpreter invoked with the specified options (<code>-M</code>,
<code>-R</code>, <code>-n</code>, <code>--args</code>), that evaluates the current file (<code>$0</code>),
with the arguments (<code>$@</code>) that were passed to <code>sh</code>.</p>

</div>


