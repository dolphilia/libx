---
title: "Method Calls"
documentId: "wren:method-calls.html"
order: 7
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Method Calls</h1>
<p>Wren is deeply object oriented, so most code consists of invoking methods on
objects, usually something like this:</p>
<pre class="snippet"><code>&#10;System.print(&quot;Heyoo!&quot;) //&gt; Heyoo!&#10;</code></pre>

<p>You have a <em>receiver</em> expression (here <code>System</code>) followed by a <code>.</code>, then a name
(<code>print</code>) and an argument list in parentheses (<code>("Heyoo!")</code>). Multiple arguments
are separated by commas:</p>
<pre class="snippet"><code>&#10;list.insert(3, &quot;item&quot;)&#10;</code></pre>

<p>The argument list can also be empty:</p>
<pre class="snippet"><code>&#10;list.clear()&#10;</code></pre>

<p>The VM executes a method call like so:</p>
<ol>
<li>Evaluate the receiver and arguments from left to right.</li>
<li>Look up the method on the receiver&rsquo;s <a href="/docs/wren/v0-4-0/en/01-guide/10-classes/">class</a>.</li>
<li>Invoke it, passing in the argument values.</li>
</ol>
<h2>Signature <a href="#signature" name="signature" class="header-anchor">#</a></h2>
<p>Unlike most other dynamically-typed languages, in Wren a class can have multiple
methods with the same <em>name</em>, as long as they have different <em>signatures</em>. The
signature includes the method&rsquo;s name along with the number of arguments it
takes. In technical terms, this means you can <em>overload by arity</em>.</p>
<p>For example, the <a href="/docs/wren/v0-4-0/en/02-reference/17-modules-random-random/">Random</a> class has two methods for getting a random integer.
One takes a minimum and maximum value and returns a value in that range. The
other only takes a maximum value and uses 0 as the minimum:</p>
<pre class="snippet"><code>&#10;var random = Random.new()&#10;random.int(3, 10)&#10;random.int(4)&#10;</code></pre>

<p>In a language like Python or JavaScript, these would both call a single <code>int()</code>
method, which has some kind of &ldquo;optional&rdquo; parameter. The body of the method
figures out how many arguments were passed and uses control flow to handle the
two different behaviors. That means first parameter represents &ldquo;max unless
another parameter was passed, in which case it&rsquo;s min&rdquo;. </p>
<p>This type of &lsquo;variadic&rsquo; code isn&rsquo;t ideal, so Wren doesn&rsquo;t encourage it.</p>
<p>In Wren, these are calls to two entirely separate methods, <code>int(_,_)</code> and
<code>int(_)</code>. This makes it easier to define &ldquo;overloads&rdquo; like this since you don&rsquo;t
need optional parameters or any kind of control flow to handle the different
cases.</p>
<p>It&rsquo;s also faster to execute. Since we know how many arguments are passed at
compile time, we can compile this to directly call the right method and avoid
any &ldquo;if I got two arguments do this&hellip;&rdquo; runtime work.</p>
<h2>Getters <a href="#getters" name="getters" class="header-anchor">#</a></h2>
<p>Some methods exist to expose a stored or computed property of an object. These
are <em>getters</em> and have no parentheses:</p>
<pre class="snippet"><code>&#10;&quot;string&quot;.count    //&gt; 6&#10;(1..10).min       //&gt; 1&#10;1.23.sin          //&gt; 0.9424888019317&#10;[1, 2, 3].isEmpty //&gt; false&#10;</code></pre>

<p>A getter is <em>not</em> the same as a method with an empty argument list. The <code>()</code> is
part of the signature, so <code>count</code> and <code>count()</code> have different signatures.
Unlike Ruby&rsquo;s optional parentheses, Wren wants to make sure you call a getter
like a getter and a <code>()</code> method like a <code>()</code> method. These don&rsquo;t work:</p>
<pre class="snippet"><code>&#10;&quot;string&quot;.count()&#10;[1, 2, 3].clear&#10;</code></pre>

<p>If you&rsquo;re defining some member that doesn&rsquo;t need any parameters, you need to
decide if it should be a getter or a method with an empty <code>()</code> parameter list.
The general guidelines are:</p>
<ul>
<li>If it modifies the object or has some other side effect, make it a method:</li>
</ul>
<pre class="snippet"><code>&#10;list.clear()&#10;</code></pre>

<ul>
<li>If the method supports multiple arities, make the zero-parameter case a <code>()</code>
    method to be consistent with the other versions:</li>
</ul>
<pre class="snippet"><code>&#10;Fiber.yield()&#10;Fiber.yield(&quot;value&quot;)&#10;</code></pre>

<ul>
<li>Otherwise, it can probably be a getter.</li>
</ul>
<h2>Setters <a href="#setters" name="setters" class="header-anchor">#</a></h2>
<p>A getter lets an object expose a public &ldquo;property&rdquo; that you can <em>read</em>.
Likewise, a <em>setter</em> lets you write to a property:</p>
<pre class="snippet"><code>&#10;person.height = 74 // Grew up!&#10;</code></pre>

<p>Despite the <code>=</code>, this is just another syntax for a method call. From the
language&rsquo;s perspective, the above line is just a call to the <code>height=(_)</code>
method on <code>person</code>, passing in <code>74</code>.</p>
<p>Since the <code>=(_)</code> is in the setter&rsquo;s signature, an object can have both a getter
and setter with the same name without a collision. Defining both lets you
provide a read/write property.</p>
<h2>Operators <a href="#operators" name="operators" class="header-anchor">#</a></h2>
<p>Wren has most of the same operators you know and love with the same precedence
and associativity. We have three prefix operators:</p>
<pre class="snippet"><code>&#10;! ~ -&#10;</code></pre>

<p>They are just method calls on their operand without any other arguments. An
expression like <code>!possible</code> means &ldquo;call the <code>!</code> method on <code>possible</code>&rdquo;.</p>
<p>We also have a slew of infix operators&mdash;they have operands on both sides.
They are:</p>
<pre class="snippet"><code>&#10;* / % + - .. ... &lt;&lt; &gt;&gt; &lt; &lt;= &gt; &gt;= == != &amp; ^ | is&#10;</code></pre>

<p>Like prefix operators, they are all funny ways of writing method calls. The left
operand is the receiver, and the right operand gets passed to it. So <code>a + b</code> is
semantically interpreted as &ldquo;invoke the <code>+(_)</code> method on <code>a</code>, passing it <code>b</code>&rdquo;.</p>
<p>Note that <code>-</code> is both a prefix and an infix operator. Since they have different
signatures (<code>-</code> and <code>-(_)</code>), there&rsquo;s no ambiguity between them.</p>
<p>Most of these are probably familiar already. The <code>..</code> and <code>...</code> operators are
&ldquo;range&rdquo; operators. The number type implements those to create <a href="/docs/wren/v0-4-0/en/01-guide/04-values/#ranges">range</a>
objects, but they are method calls like other operators.</p>
<p>The <code>is</code> keyword is a &ldquo;type test&rdquo; operator. The base <a href="/docs/wren/v0-4-0/en/02-reference/09-modules-core-object/">Object</a> class implements
it to tell if an object is an instance of a given class. You&rsquo;ll rarely need to,
but you can override <code>is</code> in your own classes. That can be useful for things
like mocks or proxies where you want an object to masquerade as a certain class.</p>
<h2>Subscripts <a href="#subscripts" name="subscripts" class="header-anchor">#</a></h2>
<p>Another familiar syntax from math is <em>subscripting</em> using square brackets
(<code>[]</code>). It&rsquo;s handy for working with collection-like objects. For example:</p>
<pre class="snippet"><code>&#10;list[0]    // Get the first item in a list.&#10;map[&quot;key&quot;] // Get the value associated with &quot;key&quot;.&#10;</code></pre>

<p>You know the refrain by now. In Wren, these are method calls. In the above
examples, the signature is <code>[_]</code>. Subscript operators may also take multiple
arguments, which is useful for things like multi-dimensional arrays:</p>
<pre class="snippet"><code>&#10;matrix[3, 5]&#10;</code></pre>

<p>These examples are subscript &ldquo;getters&rdquo;, and there are also
corresponding <em>subscript setters</em>:</p>
<pre class="snippet"><code>&#10;list[0] = &quot;item&quot;&#10;map[&quot;key&quot;] = &quot;value&quot;&#10;</code></pre>

<p>These are equivalent to method calls whose signature is <code>[_]=(_)</code> and whose
arguments are both the subscript (or subscripts) and the value on the right-hand
side.</p>
<p><br><hr>
<a class="right" href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/">Control Flow &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/06-maps/">&larr; Maps</a></p>
</div>
