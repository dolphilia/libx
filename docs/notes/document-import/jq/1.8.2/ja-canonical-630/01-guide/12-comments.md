---
title: "コメント"
order: 12
categoryOrder: 1
---

<div class="jq-upstream-field" data-source-key="sections/11/title">

<h2 id="comments">コメント</h2>

</div>

<div class="jq-upstream-field" data-source-key="sections/11/body">

<p><code>#</code> を使って、jqフィルターにコメントを書けます。</p>
<p>文字列の一部でない <code>#</code> 文字は、コメントの開始を示します。<code>#</code> から行末までのすべての文字は無視されます。</p>
<p>行末の直前に、奇数個のバックスラッシュ文字がある場合、次の行もコメントの一部とみなされ、無視されます。</p>
<p>たとえば、次のコードは <code>[1,3,4,7]</code> を出力します。</p>
<pre><code>[&#10;  1,&#10;  # foo \&#10;  2,&#10;  # bar \\&#10;  3,&#10;  4, # baz \\\&#10;  5, \&#10;  6,&#10;  7&#10;  # comment \&#10;    comment \&#10;    comment&#10;]&#10;</code></pre>
<p>コメントを次の行へ継続するバックスラッシュは、jqスクリプトの「shebang」を書くときに便利です。</p>
<pre><code>#!/bin/sh --&#10;# total - Output the sum of the given arguments (or stdin)&#10;# usage: total [numbers...]&#10;# \&#10;exec jq --args -MRnf -- "$0" "$@"&#10;&#10;$ARGS.positional |&#10;reduce (&#10;  if . == []&#10;    then inputs&#10;    else .[]&#10;  end |&#10;  . as $dot |&#10;  try tonumber catch false |&#10;  if not or isnan then&#10;    @json "total: Invalid number \($dot).\n" | halt_error(1)&#10;  end&#10;) as $n (0; . + $n)&#10;</code></pre>
<p><code>exec</code> の行は、jqではコメントとみなされるため、無視されます。しかし、<code>sh</code> では無視されません。<code>sh</code> では、行末のバックスラッシュがコメントを継続しないためです。この方法で、スクリプトを <code>total 1 2</code> として呼び出すと、<code>/bin/sh -- /path/to/total 1 2</code> が実行され、<code>sh</code> は、次に <code>exec jq --args -MRnf -- /path/to/total 1 2</code> を実行します。その際、自分自身を <code>jq</code> インタープリターに置き換えます。このインタープリターは、指定したオプション（<code>-M</code>、<code>-R</code>、<code>-n</code>、<code>--args</code>）で起動し、現在のファイル（<code>$0</code>）を、<code>$@</code> の引数を使って評価します。これらの引数は、<code>sh</code> に渡されたものです。</p>

</div>

## 出典と通知

出典: jq 1.8 Manual — Stephen Dolan / jq project contributors。原文の著作権表示: jq is copyright (C) 2012 Stephen Dolan。固定原典はjq 1.8.2のコミット34f7186b86743a083a589741b6cea95293524108です。文書はCC BY 3.0 Unportedで公開されています。本サイトの英語定本は原文を節ごとに分割・表示変換したもので、日本語版は英語原文からの非公式翻訳です。上流による承認を表しません。

[公式マニュアル](https://jqlang.org/manual/v1.8/) · [固定原典](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [ライセンス](https://creativecommons.org/licenses/by/3.0/) · [原著作権・第三者通知](/docs/jq/v1-8-2/ja/02-license/01-original-notices/) · [ライセンス全文](/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/)
