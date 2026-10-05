---
title: "Concurrency"
documentId: "wren:concurrency.html"
order: 12
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Concurrency</h1>
<p>Lightweight concurrency is a key feature of Wren and it is expressed using
<em>fibers</em>. They control how all code is executed, and take the place of
exceptions in <a href="/docs/wren/v0-4-0/en/01-guide/13-error-handling/">error handling</a>.</p>
<p>Fibers are a bit like threads except they are <em>cooperatively</em> scheduled. That
means Wren doesn&rsquo;t pause one fiber and switch to another until you tell it to.
You don&rsquo;t have to worry about context switches at random times and all of the
headaches those cause.</p>
<p>Wren takes care of all of the fibers in the VM, so they don&rsquo;t use OS thread
resources, or require heavyweight context switches. Each just needs a bit of
memory for its stack. A fiber will get garbage collected like any other object
when not referenced any more, so you can create them freely.</p>
<p>They are lightweight enough that you can, for example, have a separate fiber for
each entity in a game. Wren can handle thousands of them without breaking a
sweat. For example, when you run Wren in interactive mode, it creates a new
fiber for every line of code you type in.</p>
<h2>Creating fibers <a href="#creating-fibers" name="creating-fibers" class="header-anchor">#</a></h2>
<p>All Wren code runs within the context of a fiber. When you first start a Wren
script, a main fiber is created for you automatically. You can spawn new fibers
using the Fiber class&rsquo;s constructor:</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  System.print(&quot;This runs in a separate fiber.&quot;)&#10;}&#10;</code></pre>

<p>It takes a <a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">function</a> containing the code the fiber should execute. The
function can take zero or one parameter, but no more than that. Creating the
fiber does not immediately run it. It just wraps the function and sits there,
waiting to be activated.</p>
<h2>Invoking fibers <a href="#invoking-fibers" name="invoking-fibers" class="header-anchor">#</a></h2>
<p>Once you&rsquo;ve created a fiber, you run it by calling its <code>call()</code> method:</p>
<pre class="snippet"><code>&#10;fiber.call()&#10;</code></pre>

<p>This suspends the current fiber and executes the called one until it reaches the
end of its body or until it passes control to yet another fiber. If it reaches
the end of its body, it is considered <em>done</em>:</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  System.print(&quot;It&#x27;s alive!&quot;)&#10;}&#10;&#10;System.print(fiber.isDone) //&gt; false&#10;fiber.call() //&gt; It&#x27;s alive!&#10;System.print(fiber.isDone) //&gt; true&#10;</code></pre>

<p>When a called fiber finishes, it automatically passes control <em>back</em> to the
fiber that called it. It&rsquo;s a runtime error to try to call a fiber that is
already done.</p>
<h2>Yielding <a href="#yielding" name="yielding" class="header-anchor">#</a></h2>
<p>The main difference between fibers and functions is that a fiber can be
suspended in the middle of its operation and then resumed later. Calling
another fiber is one way to suspend a fiber, but that&rsquo;s more or less the same
as one function calling another.</p>
<p>Things get interesting when a fiber <em>yields</em>. A yielded fiber passes control
<em>back</em> to the fiber that ran it, but <em>remembers where it is</em>. The next time the
fiber is called, it picks up right where it left off and keeps going.</p>
<p>You make a fiber yield by calling the static <code>yield()</code> method on Fiber:</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  System.print(&quot;Before yield&quot;)&#10;  Fiber.yield()&#10;  System.print(&quot;Resumed&quot;)&#10;}&#10;&#10;System.print(&quot;Before call&quot;) //&gt; Before call&#10;fiber.call() //&gt; Before yield&#10;System.print(&quot;Calling again&quot;) //&gt; Calling again&#10;fiber.call() //&gt; Resumed&#10;System.print(&quot;All done&quot;) //&gt; All done&#10;</code></pre>

<p>Note that even though this program uses <em>concurrency</em>, it is still
<em>deterministic</em>. You can reason precisely about what it&rsquo;s doing and aren&rsquo;t at
the mercy of a thread scheduler playing Russian roulette with your code.</p>
<h2>Passing values <a href="#passing-values" name="passing-values" class="header-anchor">#</a></h2>
<p>Calling and yielding fibers is used for passing control, but it can also pass
<em>data</em>. When you call a fiber, you can optionally pass a value to it.</p>
<p>If you create a fiber using a function that takes a parameter, you can pass a
value to it through <code>call()</code>:</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {|param|&#10;  System.print(param)&#10;}&#10;&#10;fiber.call(&quot;Here you go&quot;) //&gt; Here you go&#10;</code></pre>

<p>If the fiber has yielded and is waiting to resume, the value you pass to call
becomes the return value of the <code>yield()</code> call when it resumes:</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {|param|&#10;  System.print(param)&#10;  var result = Fiber.yield()&#10;  System.print(result)&#10;}&#10;&#10;fiber.call(&quot;First&quot;) //&gt; First&#10;fiber.call(&quot;Second&quot;) //&gt; Second&#10;</code></pre>

<p>Fibers can also pass values <em>back</em> when they yield. If you pass an argument to
<code>yield()</code>, that will become the return value of the <code>call()</code> that was used to
invoke the fiber:</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  Fiber.yield(&quot;Reply&quot;)&#10;}&#10;&#10;System.print(fiber.call()) //&gt; Reply&#10;</code></pre>

<p>This is sort of like how a function call may return a value, except that a fiber
may return a whole sequence of values, one every time it yields.</p>
<h2>Full coroutines <a href="#full-coroutines" name="full-coroutines" class="header-anchor">#</a></h2>
<p>What we&rsquo;ve seen so far is very similar to what you can do with languages like
Python and C# that have <em>generators</em>. Those let you define a function call that
you can suspend and resume. When using the function, it appears like a sequence
you can iterate over.</p>
<p>Wren&rsquo;s fibers can do that, but they can do much more. Like Lua, they are full
<em>coroutines</em>&mdash;they can suspend from anywhere in the callstack. The function
you use to create a fiber can call a method that calls another method that calls
some third method which finally calls yield. When that happens, <em>all</em> of those
method calls &mdash; the entire callstack &mdash; gets suspended. For example:</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  (1..10).each {|i|&#10;    Fiber.yield(i)&#10;  }&#10;}&#10;</code></pre>

<p>Here, we&rsquo;re calling <code>yield()</code> from within a <a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">function</a> being
passed to the <code>each()</code> method. This works fine in Wren because that inner
<code>yield()</code> call will suspend the call to <code>each()</code> and the function passed to it
as a callback.</p>
<h2>Transferring control <a href="#transferring-control" name="transferring-control" class="header-anchor">#</a></h2>
<p>Fibers have one more trick up their sleeves. When you execute a fiber using
<code>call()</code>, the fiber tracks which fiber it will return to when it yields. This
lets you build up a chain of fiber calls that will eventually unwind back to
the main fiber when all of the called ones yield or finish.</p>
<p>This is usually what you want. But if you&rsquo;re doing something low level, like
writing your own scheduler to manage a pool of fibers, you may not want to treat
them explicitly like a stack.</p>
<p>For rare cases like that, fibers also have a <code>transfer()</code> method. This switches
execution to the transferred fiber and &ldquo;forgets&rdquo; the fiber that was transferred
<em>from</em>. The previous one is suspended, leaving it in whatever state it was in.
You can resume the previous fiber by explicitly transferring back to it, or even
calling it. If you don&rsquo;t, execution stops when the last transferred fiber
returns.</p>
<p>Where <code>call()</code> and <code>yield()</code> are analogous to calling and returning from
functions, <code>transfer()</code> works more like an unstructured goto. It lets you freely
switch control between a number of fibers, all of which act as peers to one
another.</p>
<p><br><hr>
<a class="right" href="/docs/wren/v0-4-0/en/01-guide/13-error-handling/">Error Handling &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/10-classes/">&larr; Classes</a></p>
</div>
