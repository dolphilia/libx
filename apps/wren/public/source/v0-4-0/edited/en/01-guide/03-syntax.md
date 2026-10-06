---
title: "Syntax"
documentId: "wren:syntax.html"
order: 3
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Syntax</h1>
<p>Wren&rsquo;s syntax is designed to be familiar to people coming from C-like languages
while being a bit simpler and more streamlined.</p>
<p>Scripts are stored in plain text files with a <code>.wren</code> file extension. Wren does
not compile ahead of time: programs are run directly from source, from top to
bottom like a typical scripting language. (Internally, programs are compiled to
bytecode for <a href="/docs/wren/v0-4-0/en/01-guide/22-performance/">efficiency</a>, but that&rsquo;s an implementation detail.)</p>
<h2>Comments <a href="#comments" name="comments" class="header-anchor">#</a></h2>
<p>Line comments start with <code>//</code> and end at the end of the line:</p>
<pre class="snippet"><code>&#10;// This is a comment.&#10;</code></pre>

<p>Block comments start with <code>/*</code> and end with <code>*/</code>. They can span multiple lines:</p>
<pre class="snippet"><code>&#10;/* This&#10;   is&#10;   a&#10;   multi-line&#10;   comment. */&#10;</code></pre>

<p>Unlike C, block comments can nest in Wren:</p>
<pre class="snippet"><code>&#10;/* This is /* a nested */ comment. */&#10;</code></pre>

<p>This is handy because it lets you easily comment out an entire block of code,
even if the code already contains block comments.</p>
<h2>Reserved words <a href="#reserved-words" name="reserved-words" class="header-anchor">#</a></h2>
<p>One way to get a quick feel for a language&rsquo;s style is to see what words it
reserves. Here&rsquo;s what Wren has:</p>
<pre class="snippet"><code>&#10;as break class construct continue else false for foreign if import&#10;in is null return static super this true var while&#10;</code></pre>

<h2>Identifiers <a href="#identifiers" name="identifiers" class="header-anchor">#</a></h2>
<p>Naming rules are similar to other programming languages. Identifiers start with
a letter or underscore and may contain letters, digits, and underscores. Case
is sensitive.</p>
<pre class="snippet"><code>&#10;hi&#10;camelCase&#10;PascalCase&#10;_under_score&#10;abc123&#10;ALL_CAPS&#10;</code></pre>

<p>Identifiers that start with underscore (<code>_</code>) are special in Wren. They are used
to indicate <a href="/docs/wren/v0-4-0/en/01-guide/10-classes/#fields">fields</a> in classes.</p>
<h2>Newlines <a href="#newlines" name="newlines" class="header-anchor">#</a></h2>
<p>Newlines (<code>\n</code>) are meaningful in Wren. They are used to separate statements:</p>
<pre class="snippet"><code>&#10;// Two statements:&#10;System.print(&quot;hi&quot;) // Newline.&#10;System.print(&quot;bye&quot;)&#10;</code></pre>

<p>Sometimes, though, a statement doesn&rsquo;t fit on a single line and jamming a
newline in the middle would trip it up. To handle that, Wren has a very simple
rule: It ignores a newline following any token that can&rsquo;t end a statement.</p>
<pre class="snippet"><code>&#10;System.print( // Newline here is ignored.&#10;    &quot;hi&quot;)&#10;</code></pre>

<p>In practice, this means you can put each statement on its own line and wrap
them across lines as needed without too much trouble.</p>
<h2>Blocks <a href="#blocks" name="blocks" class="header-anchor">#</a></h2>
<p>Wren uses curly braces to define <em>blocks</em>. You can use a block anywhere a
statement is allowed, like in <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/">control flow</a> statements.
<a href="/docs/wren/v0-4-0/en/01-guide/10-classes/#methods">Method</a> and <a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">function</a> bodies are also
blocks. For example, here we have a block for the then case, and a single
statement for the else:</p>
<pre class="snippet"><code>&#10;if (happy &amp;&amp; knowIt) {&#10;  hands.clap()&#10;} else System.print(&quot;sad&quot;)&#10;</code></pre>

<p>Blocks have two similar but not identical forms. Typically, blocks contain a
series of statements like:</p>
<pre class="snippet"><code>&#10;{&#10;  System.print(&quot;one&quot;)&#10;  System.print(&quot;two&quot;)&#10;  System.print(&quot;three&quot;)&#10;}&#10;</code></pre>

<p>Blocks of this form when used for method and function bodies automatically
return <code>null</code> after the block has completed. If you want to return a different
value, you need an explicit <code>return</code> statement.</p>
<p>However, it&rsquo;s pretty common to have a method or function that just evaluates and
returns the result of a single expression. Some other languages use <code>=&gt;</code> to
define these. Wren uses:</p>
<pre class="snippet"><code>&#10;{ &quot;single expression&quot; }&#10;</code></pre>

<p>If there is no newline after the <code>{</code> (or after the parameter list in a
<a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">function</a>), then the block may only contain a single
expression, and it automatically returns the result of it. It&rsquo;s exactly the same
as doing:</p>
<pre class="snippet"><code>&#10;{&#10;  return &quot;single expression&quot;&#10;}&#10;</code></pre>

<p>Statements are not allowed in this form (since they don&rsquo;t produce values), which
means nothing starting with <code>class</code>, <code>for</code>, <code>if</code>, <code>import</code>,  <code>return</code>,
<code>var</code>, or <code>while</code>. If you want a block that contains a single statement,
put a newline in there:</p>
<pre class="snippet"><code>&#10;{&#10;  if (happy) {&#10;    System.print(&quot;I&#x27;m feelin&#x27; it!&quot;)&#10;  }&#10;}&#10;</code></pre>

<p>Using an initial newline after the <code>{</code> does feel a little weird or magical, but
newlines are already significant in Wren, so it&rsquo;s not totally unreasonable. The nice
thing about this syntax as opposed to something like <code>=&gt;</code> is that the <em>end</em> of
the block has an explicit delimiter. That helps when chaining:</p>
<pre class="snippet"><code>&#10;numbers.map {|n| n * 2 }.where {|n| n &lt; 100 }&#10;</code></pre>

<h2>Precedence and Associativity <a href="#precedence-and-associativity" name="precedence-and-associativity" class="header-anchor">#</a></h2>
<p>We&rsquo;ll talk about Wren&rsquo;s different expression forms and what they mean in the
next few pages. But if you want to see how they interact with each other
grammatically, here&rsquo;s the whole table.</p>
<p>It shows which expressions have higher <em>precedence</em>&mdash;which ones bind more
tightly than others&mdash;and their <em>associativity</em>&mdash;how a series of the
same kind of expression is ordered. Wren mostly follows C, except that it fixes
<a href="http://www.lysator.liu.se/c/dmr-on-or.html">the bitwise operator mistake</a>. The full precedence table, from
tightest to loosest, is:</p>
<div class="wren-table-scroll"><table class="precedence">
  <tbody>
    <tr>
      <th>Prec</th>
      <th>Operator</th>
      <th>Description</th>
      <th>Associates</th>
    </tr>
    <tr>
      <td>1</td>
      <td><code>()</code> <code>[]</code> <code>.</code></td>
      <td>Grouping, <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/">Subscript, Method call</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>2</td>
      <td><code>-</code> <code>!</code> <code>~</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">Negate, Not, Complement</a></td>
      <td>Right</td>
    </tr>
    <tr>
      <td>3</td>
      <td><code>*</code> <code>/</code> <code>%</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">Multiply, Divide, Modulo</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>4</td>
      <td><code>+</code> <code>-</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">Add, Subtract</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>5</td>
      <td><code>..</code> <code>...</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">Inclusive range, Exclusive range</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>6</td>
      <td><code>&lt;&lt;</code> <code>&gt;&gt;</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">Left shift, Right shift</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>7</td>
      <td><code>&amp;</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">Bitwise and</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>8</td>
      <td><code>^</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">Bitwise xor</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>9</td>
      <td><code>|</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">Bitwise or</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>10</td>
      <td><code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">Comparison</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>11</td>
      <td><code>is</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">Type test</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>12</td>
      <td><code>==</code> <code>!=</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">Equals, Not equal</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>13</td>
      <td><code>&amp;&amp;</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#logical-operators">Logical and</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>14</td>
      <td><code>||</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#logical-operators">Logical or</a></td>
      <td>Left</td>
    </tr>
    <tr>
      <td>15</td>
      <td><code>?:</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#the-conditional-operator-">Conditional</a></td>
      <td>Right</td>
    </tr>
    <tr>
      <td>16</td>
      <td><code>=</code></td>
      <td><a href="/docs/wren/v0-4-0/en/01-guide/09-variables/#assignment">Assignment</a>, <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#setters">Setter</a></td>
      <td>Right</td>
    </tr>
  </tbody>
</table></div>

<p><br><hr>
<a class="right" href="/docs/wren/v0-4-0/en/01-guide/04-values/">Values &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/02-getting-started/">&larr; Getting Started</a></p>
</div>
