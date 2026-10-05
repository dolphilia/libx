---
title: "Functions"
documentId: "wren:functions.html"
order: 11
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Functions</h1>
<p>Like many languages today, functions in Wren are little bundles of code 
you can store in a variable, or pass as an argument to a method. </p>
<p>Notice there&rsquo;s a difference between <em>function</em> and <em>method</em>.</p>
<p>Since Wren is object-oriented, most of your code will live in methods on
classes, but free-floating functions are still eminently handy. </p>
<p>Functions are objects like everything else in Wren, instances of the <code>Fn</code>
class.</p>
<h2>Creating a function <a href="#creating-a-function" name="creating-a-function" class="header-anchor">#</a></h2>
<p>To create a function, we call <code>Fn.new</code>, which takes a block to execute.
To call the function, we use <code>.call()</code> on the function instance.</p>
<pre class="snippet"><code>&#10;var sayHello = Fn.new { System.print(&quot;hello&quot;) }&#10;&#10;sayHello.call() //&gt; hello&#10;</code></pre>

<p>Note that we&rsquo;ll see a shorthand syntax for creating a function below.</p>
<h2>Function parameters <a href="#function-parameters" name="function-parameters" class="header-anchor">#</a></h2>
<p>Of course, functions aren&rsquo;t very useful if you can&rsquo;t pass values to them. The
function above takes no arguments. To change that, you can provide a parameter
list surrounded by <code>|</code> immediately after the opening brace of the body.</p>
<p>To pass arguments to the function, pass them to the <code>call</code> method:</p>
<pre class="snippet"><code>&#10;var sayMessage = Fn.new {|recipient, message|&#10;  System.print(&quot;message for %(recipient): %(message)&quot;)&#10;}&#10;&#10;sayMessage.call(&quot;Bob&quot;, &quot;Good day!&quot;)&#10;</code></pre>

<p>It&rsquo;s an error to call a function with fewer arguments than its parameter list
expects. If you pass too <em>many</em> arguments, the extras are ignored.</p>
<h2>Returning values <a href="#returning-values" name="returning-values" class="header-anchor">#</a></h2>
<p>The body of a function is a <a href="/docs/wren/v0-4-0/en/01-guide/03-syntax/#blocks">block</a>. If it is a single
expression&mdash;more precisely if there is no newline after the <code>{</code> or
parameter list&mdash;then the function implicitly returns the value of the
expression.</p>
<p>Otherwise, the body returns <code>null</code> by default. You can explicitly return a
value using a <code>return</code> statement. In other words, these two functions do the
same thing:</p>
<pre class="snippet"><code>&#10;Fn.new { &quot;return value&quot; }&#10;&#10;Fn.new {&#10;  return &quot;return value&quot;&#10;}&#10;</code></pre>

<p>The return value is handed back to you when using <code>call</code>:</p>
<pre class="snippet"><code>&#10;var fn = Fn.new { &quot;some value&quot; }&#10;var result = fn.call()&#10;System.print(result) //&gt; some value&#10;</code></pre>

<h2>Closures <a href="#closures" name="closures" class="header-anchor">#</a></h2>
<p>As you expect, functions are closures&mdash;they can access variables defined
outside of their scope. They will hold onto closed-over variables even after
leaving the scope where the function is defined:</p>
<pre class="snippet"><code>&#10;class Counter {&#10;  static create() {&#10;    var i = 0&#10;    return Fn.new { i = i + 1 }&#10;  }&#10;}&#10;</code></pre>

<p>Here, the <code>create</code> method returns the function created on its second line. That
function references a variable <code>i</code> declared outside of the function. Even after
the function is returned from <code>create</code>, it is still able to read and assign
to<code>i</code>:</p>
<pre class="snippet"><code>&#10;var counter = Counter.create()&#10;System.print(counter.call()) //&gt; 1&#10;System.print(counter.call()) //&gt; 2&#10;System.print(counter.call()) //&gt; 3&#10;</code></pre>

<h2>Callable classes <a href="#callable-classes" name="callable-classes" class="header-anchor">#</a></h2>
<p>Because <code>Fn</code> is a class, and responds to <code>call()</code>, any class can respond to 
<code>call()</code> and be used in place of a function. This is particularly handy when 
the function is passed to a method to be called, like a callback or event.</p>
<pre class="snippet"><code>&#10;class Callable {&#10;  construct new() {}&#10;  call(name, version) {&#10;    System.print(&quot;called %(name) with version %(version)&quot;)&#10;  }&#10;}&#10;&#10;var fn = Callable.new()&#10;fn.call(&quot;wren&quot;, &quot;0.4.0&quot;)&#10;</code></pre>

<h2>Block arguments <a href="#block-arguments" name="block-arguments" class="header-anchor">#</a></h2>
<p>Very frequently, functions are passed to methods to be called. There are 
countless examples of this in Wren, like <a href="/docs/wren/v0-4-0/en/01-guide/05-lists/">list</a> can be filtered
using a method <code>where</code> which accepts a function:</p>
<pre class="snippet"><code>&#10;var list = [1, 2, 3, 4, 5]&#10;var filtered = list.where(Fn.new {|value| value &gt; 3 }) &#10;System.print(filtered.toList) //&gt; [4, 5]&#10;</code></pre>

<p>This syntax is a bit less fun to read and write, so Wren implements the 
<em>block argument</em> concept. When a function is being passed to a method, 
and is the last argument to the method, it can use a shorter syntax: 
<em>just the block part</em>.</p>
<p>Let&rsquo;s use a block argument for <code>list.where</code>, it&rsquo;s the last (only) argument:</p>
<pre class="snippet"><code>&#10;var list = [1, 2, 3, 4, 5]&#10;var filtered = list.where {|value| value &gt; 3 } &#10;System.print(filtered.toList) //&gt; [4, 5]&#10;</code></pre>

<p>We&rsquo;ve seen this before in a previous page using <code>map</code> and <code>where</code>:</p>
<pre class="snippet"><code>&#10;numbers.map {|n| n * 2 }.where {|n| n &lt; 100 }&#10;</code></pre>

<h2>Block argument example <a href="#block-argument-example" name="block-argument-example" class="header-anchor">#</a></h2>
<p>Let&rsquo;s look at a complete example, so we can see both ends.</p>
<p>Here&rsquo;s a fictional class for something that will call a function
when a click event is sent to it. It allows us to pass just a 
function and assume the left mouse button, or to pass a button and a function.</p>
<pre class="snippet"><code>&#10;class Clickable {&#10;  construct new() {&#10;    _fn = null&#10;    _button = 0&#10;  }&#10;  &#10;  onClick(fn) {&#10;    _fn = fn&#10;  }&#10;&#10;  onClick(button, fn) {&#10;    _button = button&#10;    _fn = fn&#10;  }&#10;&#10;  fireEvent(button) {&#10;    if(_fn &amp;&amp; button == _button) {&#10;      _fn.call(button)&#10;    }&#10;  }&#10;}&#10;</code></pre>

<p>Now that we&rsquo;ve got the clickable class, let&rsquo;s use it.
We&rsquo;ll start by using the method that accepts just a function
because we&rsquo;re fine with it just being the default left mouse button.</p>
<pre class="snippet"><code>&#10;var link = Clickable.new()&#10;&#10;link.onClick {|button|&#10;  System.print(&quot;I was clicked by button %(button)&quot;)&#10;}&#10;&#10;// send a left mouse click&#10;// normally this would happen from elsewhere&#10;&#10;link.fireEvent(0)  //&gt; I was clicked by button 0&#10;</code></pre>

<p>Now let&rsquo;s try with the extra button argument:</p>
<pre class="snippet"><code>&#10;var contextMenu = Clickable.new()&#10;&#10;contextMenu.onClick(1) {|button|&#10;  System.print(&quot;I was right-clicked&quot;)&#10;}&#10;&#10;link.fireEvent(0)  //&gt; (nothing happened)&#10;link.fireEvent(1)  //&gt; I was right-clicked&#10;</code></pre>

<p>Notice that we still pass the other arguments normally, 
it&rsquo;s only the last argument that is special.</p>
<p><strong>Just a regular function</strong>   </p>
<p>Block arguments are purely syntax sugar for creating a function and passing it
in one little blob of syntax. These two are equivalent:</p>
<pre class="snippet"><code>&#10;onClick(Fn.new { System.print(&quot;clicked&quot;) })&#10;onClick { System.print(&quot;clicked&quot;) }&#10;</code></pre>

<p>And this is just as valid:</p>
<pre class="snippet"><code>&#10;var onEvent = Fn.new {|button|&#10;  System.print(&quot;clicked by button %(button)&quot;)&#10;}&#10;&#10;onClick(onEvent)&#10;onClick(1, onEvent)&#10;</code></pre>

<p><strong>Fn.new</strong> <br />
As you may have noticed by now, <code>Fn</code> accepts a block argument for the <code>Fn.new</code>.
All the constructor does is return that argument right back to you!</p>
<p><br><hr>
<a class="right" href="/docs/wren/v0-4-0/en/01-guide/10-classes/">Classes &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/09-variables/">&larr; Variables</a></p>
</div>
