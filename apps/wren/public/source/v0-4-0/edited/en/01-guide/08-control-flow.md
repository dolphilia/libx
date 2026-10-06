---
title: "Control Flow"
documentId: "wren:control-flow.html"
order: 8
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Control Flow</h1>
<p>Control flow is used to determine which chunks of code are executed and how many
times. <em>Branching</em> statements and expressions decide whether or not to execute
some code and <em>looping</em> ones execute something more than once.</p>
<h2>Truth <a href="#truth" name="truth" class="header-anchor">#</a></h2>
<p>All control flow is based on <em>deciding</em> whether or not to do something. This
decision depends on some expression&rsquo;s value. We take the entire universe of
possible objects and divide them into two buckets: some we consider &ldquo;true&rdquo; and
the rest are &ldquo;false&rdquo;. If the expression results in a value in the true bucket,
we do one thing. Otherwise, we do something else.</p>
<p>Obviously, the boolean <code>true</code> is in the &ldquo;true&rdquo; bucket and <code>false</code> is in
&ldquo;false&rdquo;, but what about values of other types? The choice is ultimately
arbitrary, and different languages have different rules. Wren&rsquo;s rules follow
Ruby:</p>
<ul>
<li>The boolean value <code>false</code> is false.</li>
<li>The null value <code>null</code> is false.</li>
<li>Everything else is true.</li>
</ul>
<p>This means <code>0</code>, empty strings, and empty collections are all considered &ldquo;true&rdquo;
values.</p>
<h2>If statements <a href="#if-statements" name="if-statements" class="header-anchor">#</a></h2>
<p>The simplest branching statement, <code>if</code> lets you conditionally skip a chunk of
code. It looks like this:</p>
<pre class="snippet"><code>&#10;if (ready) System.print(&quot;go!&quot;)&#10;</code></pre>

<p>That evaluates the parenthesized expression after <code>if</code>. If it&rsquo;s true, then the
statement after the condition is evaluated. Otherwise it is skipped. Instead of
a statement, you can have a <a href="/docs/wren/v0-4-0/en/01-guide/03-syntax/#blocks">block</a>:</p>
<pre class="snippet"><code>&#10;if (ready) {&#10;  System.print(&quot;getSet&quot;)&#10;  System.print(&quot;go!&quot;)&#10;}&#10;</code></pre>

<p>You may also provide an <code>else</code> branch. It will be executed if the condition is
false:</p>
<pre class="snippet"><code>&#10;if (ready) System.print(&quot;go!&quot;) else System.print(&quot;not ready!&quot;)&#10;</code></pre>

<p>And, of course, it can take a block too:</p>
<pre class="snippet"><code>&#10;if (ready) {&#10;  System.print(&quot;go!&quot;)&#10;} else {&#10;  System.print(&quot;not ready!&quot;)&#10;}&#10;</code></pre>

<h2>Logical operators <a href="#logical-operators" name="logical-operators" class="header-anchor">#</a></h2>
<p>Unlike most other <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">operators</a> in Wren which are just a special syntax for
<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/">method calls</a>, the <code>&amp;&amp;</code> and <code>||</code> operators are special. This is because they
only conditionally evaluate the right operand&mdash;they short-circuit.</p>
<p>A <code>&amp;&amp;</code> (&ldquo;logical and&rdquo;) expression evaluates the left-hand argument. If it&rsquo;s
false, it returns that value. Otherwise it evaluates and returns the right-hand
argument.</p>
<pre class="snippet"><code>&#10;System.print(false &amp;&amp; 1)  //&gt; false&#10;System.print(1 &amp;&amp; 2)      //&gt; 2&#10;</code></pre>

<p>A <code>||</code> (&ldquo;logical or&rdquo;) expression is reversed. If the left-hand argument is
<em>true</em>, it&rsquo;s returned, otherwise the right-hand argument is evaluated and
returned:</p>
<pre class="snippet"><code>&#10;System.print(false || 1)  //&gt; 1&#10;System.print(1 || 2)      //&gt; 1&#10;</code></pre>

<h2>The conditional operator <code>?:</code> <a href="#the-conditional-operator-" name="the-conditional-operator-" class="header-anchor">#</a></h2>
<p>Also known as the &ldquo;ternary&rdquo; operator since it takes three arguments, Wren has
the little &ldquo;if statement in the form of an expression&rdquo; you know and love from C
and similar languages.</p>
<pre class="snippet"><code>&#10;System.print(1 != 2 ? &quot;math is sane&quot; : &quot;math is not sane!&quot;)&#10;</code></pre>

<p>It takes a condition expression, followed by <code>?</code>, followed by a then
expression, a <code>:</code>, then an else expression. Just like <code>if</code>, it evaluates the
condition. If true, it evaluates and returns the then expression. Otherwise
it does the else expression.</p>
<h2>While statements <a href="#while-statements" name="while-statements" class="header-anchor">#</a></h2>
<p>It&rsquo;s hard to write a useful program without executing some chunk of code
repeatedly. To do that, you use looping statements. There are two in Wren, and
they should be familiar if you&rsquo;ve used other imperative languages.</p>
<p>The simplest, a <code>while</code> statement executes a chunk of code as long as a
condition continues to hold. For example:</p>
<pre class="snippet"><code>&#10;// Hailstone sequence.&#10;var n = 27&#10;while (n != 1) {&#10;  if (n % 2 == 0) {&#10;    n = n / 2&#10;  } else {&#10;    n = 3 * n + 1&#10;  }&#10;}&#10;</code></pre>

<p>This evaluates the expression <code>n != 1</code>. If it is true, then it executes the
following body. After that, it loops back to the top, and evaluates the
condition again. It keeps doing this as long as the condition evaluates to
something true.</p>
<p>The condition for a while loop can be any expression, and must be surrounded by
parentheses. The body of the loop is usually a curly block but can also be a
single statement:</p>
<pre class="snippet"><code>&#10;var n = 27&#10;while (n != 1) if (n % 2 == 0) n = n / 2 else n = 3 * n + 1&#10;</code></pre>

<h2>For statements <a href="#for-statements" name="for-statements" class="header-anchor">#</a></h2>
<p>While statements are useful when you want to loop indefinitely or according to
some complex condition. But in most cases, you&rsquo;re looping through
a <a href="/docs/wren/v0-4-0/en/01-guide/05-lists/">list</a>, a series of numbers, or some other &ldquo;sequence&rdquo; object.
That&rsquo;s what <code>for</code> is, uh, for. It looks like this:</p>
<pre class="snippet"><code>&#10;for (beatle in [&quot;george&quot;, &quot;john&quot;, &quot;paul&quot;, &quot;ringo&quot;]) {&#10;  System.print(beatle)&#10;}&#10;</code></pre>

<p>A <code>for</code> loop has three components:</p>
<ol>
<li>
<p>A <em>variable name</em> to bind. In the example, that&rsquo;s <code>beatle</code>. Wren will create
   a new variable with that name whose scope is the body of the loop.</p>
</li>
<li>
<p>A <em>sequence expression</em>. This determines what you&rsquo;re looping over. It gets
   evaluated <em>once</em> before the body of the loop. In this case, it&rsquo;s a list
   literal, but it can be any expression.</p>
</li>
<li>
<p>A <em>body</em>. This is a curly block or a single statement. It gets executed once
   for each iteration of the loop.</p>
</li>
</ol>
<h2>Break statements <a href="#break-statements" name="break-statements" class="header-anchor">#</a></h2>
<p>Sometimes, right in the middle of a loop body, you decide you want to bail out
and stop. To do that, you can use a <code>break</code> statement. It&rsquo;s just the <code>break</code>
keyword all by itself. That immediately exits out of the nearest enclosing
<code>while</code> or <code>for</code> loop.</p>
<pre class="snippet"><code>&#10;for (i in [1, 2, 3, 4]) {&#10;  System.print(i)           //&gt; 1&#10;  if (i == 3) break         //&gt; 2&#10;}                           //&gt; 3&#10;</code></pre>

<h2>Continue statements <a href="#continue-statements" name="continue-statements" class="header-anchor">#</a></h2>
<p>During the execution of a loop body, you might decide that you want to skip the 
rest of this iteration and move on to the next one. You can use a <code>continue</code> 
statement to do that. It&rsquo;s just the <code>continue</code> keyword all by itself. Execution
will immediately jump to the beginning of the next loop iteration (and check the
loop conditions).</p>
<pre class="snippet"><code>&#10;for (i in [1, 2, 3, 4]) {&#10;  System.print(i)           //&gt; 1&#10;  if (i == 2) continue      //&gt; 3&#10;}                           //&gt; 4&#10;</code></pre>

<h2>Numeric ranges <a href="#numeric-ranges" name="numeric-ranges" class="header-anchor">#</a></h2>
<p>Lists are one common use for <code>for</code> loops, but sometimes you want to walk over a
sequence of numbers, or loop a number of times. For that, you can create a
<a href="/docs/wren/v0-4-0/en/01-guide/04-values/#ranges">range</a>, like so:</p>
<pre class="snippet"><code>&#10;for (i in 1..100) {&#10;  System.print(i)&#10;}&#10;</code></pre>

<p>This loops over the numbers from 1 to 100, including 100 itself. If you want to
leave off the last value, use three dots instead of two:</p>
<pre class="snippet"><code>&#10;for (i in 1...100) {&#10;  System.print(i)&#10;}&#10;</code></pre>

<p>This looks like some special &ldquo;range&rdquo; syntax in the <code>for</code> loop, but it&rsquo;s actually
just a pair of operators. The <code>..</code> and <code>...</code> syntax are infix &ldquo;range&rdquo; operators.
Like <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">other operators</a>, they are special syntax for a regular method
call. The number type implements them and returns a <a href="/docs/wren/v0-4-0/en/01-guide/04-values/#ranges">range object</a> that knows
how to iterate over a series of numbers.</p>
<h2>The iterator protocol <a href="#the-iterator-protocol" name="the-iterator-protocol" class="header-anchor">#</a></h2>
<p>Lists and ranges cover the two most common kinds of loops, but you should also
be able to define your own sequences. To enable that, the semantics of <code>for</code>
are defined in terms of an &ldquo;iterator protocol&rdquo;. The loop itself doesn&rsquo;t know
anything about lists or ranges, it just knows how to call two particular
methods on the object that resulted from evaluating the sequence expression.</p>
<p>When you write a loop like this:</p>
<pre class="snippet"><code>&#10;for (i in 1..100) {&#10;  System.print(i)&#10;}&#10;</code></pre>

<p>Wren sees it something like this:</p>
<pre class="snippet"><code>&#10;var iter_ = null&#10;var seq_ = 1..100&#10;while (iter_ = seq_.iterate(iter_)) {&#10;  var i = seq_.iteratorValue(iter_)&#10;  System.print(i)&#10;}&#10;</code></pre>

<p>First, Wren evaluates the sequence expression and stores it in a hidden
variable (written <code>seq_</code> in the example but in reality it doesn&rsquo;t have a name
you can use). It also creates a hidden &ldquo;iterator&rdquo; variable and initializes it
to <code>null</code>.</p>
<p>Each iteration, it calls <code>iterate()</code> on the sequence, passing in the current
iterator value. (In the first iteration, it passes in <code>null</code>.) The sequence&rsquo;s
job is to take that iterator and advance it to the next element in the
sequence. (Or, in the case where the iterator is <code>null</code>, to advance it to the
<em>first</em> element). It then returns either the new iterator, or <code>false</code> to
indicate that there are no more elements.</p>
<p>If <code>false</code> is returned, Wren exits out of the loop and we&rsquo;re done. If anything
else is returned, that means that we have advanced to a new valid element. To
get that, Wren then calls <code>iteratorValue()</code> on the sequence and passes in the
iterator value that it just got from calling <code>iterate()</code>. The sequence uses
that to look up and return the appropriate element.</p>
<p>The built-in <a href="/docs/wren/v0-4-0/en/01-guide/05-lists/">List</a> and <a href="/docs/wren/v0-4-0/en/01-guide/04-values/#ranges">Range</a> types implement
<code>iterate()</code> and <code>iteratorValue()</code> to walk over their respective sequences. You
can implement the same methods in your classes to make your own types iterable.</p>
<p><br><hr>
<a class="right" href="/docs/wren/v0-4-0/en/01-guide/09-variables/">Variables &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/">&larr; Method Calls</a></p>
</div>
