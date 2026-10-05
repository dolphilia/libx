---
title: "Fiber Class (English original)"
documentId: "wren:modules/core/fiber.html"
order: 3
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Fiber Class (English original)</h1>
<p>A lightweight coroutine. <a href="/docs/wren/v0-4-0/en/01-guide/12-concurrency/">Here</a> is a gentle introduction.</p>
<h2>Static Methods <a href="#static-methods" name="static-methods" class="header-anchor">#</a></h2>
<h3>Fiber.<strong>abort</strong>(message) <a href="#fiber.abort(message)" name="fiber.abort(message)" class="header-anchor">#</a></h3>
<p>Raises a runtime error with the provided message:</p>
<pre class="snippet"><code>&#10;Fiber.abort(&quot;Something bad happened.&quot;)&#10;</code></pre>

<p>If the message is <code>null</code>, does nothing.</p>
<h3>Fiber.<strong>current</strong> <a href="#fiber.current" name="fiber.current" class="header-anchor">#</a></h3>
<p>The currently executing fiber.</p>
<h3>Fiber.<strong>new</strong>(function) <a href="#fiber.new(function)" name="fiber.new(function)" class="header-anchor">#</a></h3>
<p>Creates a new fiber that executes <code>function</code> in a separate coroutine when the
fiber is run. Does not immediately start running the fiber.</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  System.print(&quot;I won&#x27;t get printed&quot;)&#10;}&#10;</code></pre>

<p><code>function</code> must be a function (an actual <a href="/docs/wren/v0-4-0/en/02-reference/04-modules-core-fn/">Fn</a> instance, not just an object
with a <code>call()</code> method) and it may only take zero or one parameters.</p>
<h3>Fiber.<strong>suspend</strong>() <a href="#fiber.suspend()" name="fiber.suspend()" class="header-anchor">#</a></h3>
<p>Pauses the current fiber, and stops the interpreter. Control returns to the
host application.</p>
<p>Typically, you store a reference to the fiber using <code>Fiber.current</code> before
calling this. The fiber can be resumed later by calling or transferring to that
reference. If there are no references to it, it is eventually garbage collected.</p>
<p>Much like <code>yield()</code>, returns the value passed to <code>call()</code> or <code>transfer()</code> when
the fiber is resumed.</p>
<h3>Fiber.<strong>yield</strong>() <a href="#fiber.yield()" name="fiber.yield()" class="header-anchor">#</a></h3>
<p>Pauses the current fiber and transfers control to the parent fiber. &ldquo;Parent&rdquo;
here means the last fiber that was started using <code>call</code> and not <code>transfer</code>.</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  System.print(&quot;Before yield&quot;)&#10;  Fiber.yield()&#10;  System.print(&quot;After yield&quot;)&#10;}&#10;&#10;fiber.call()                //&gt; Before yield&#10;System.print(&quot;After call&quot;)  //&gt; After call&#10;fiber.call()                //&gt; After yield&#10;</code></pre>

<p>When resumed, the parent fiber&rsquo;s <code>call()</code> method returns <code>null</code>.</p>
<p>If a yielded fiber is resumed by calling <code>call()</code> or <code>transfer()</code> with an
argument, <code>yield()</code> returns that value.</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  System.print(Fiber.yield()) //&gt; value&#10;}&#10;&#10;fiber.call()        // Run until the first yield.&#10;fiber.call(&quot;value&quot;) // Resume the fiber.&#10;</code></pre>

<p>If it was resumed by calling <code>call()</code> or <code>transfer()</code> with no argument, it
returns <code>null</code>.</p>
<p>If there is no parent fiber to return to, this exits the interpreter. This can
be useful to pause execution until the host application wants to resume it
later.</p>
<pre class="snippet"><code>&#10;Fiber.yield()&#10;System.print(&quot;this does not get reached&quot;)&#10;</code></pre>

<h3>Fiber.<strong>yield</strong>(value) <a href="#fiber.yield(value)" name="fiber.yield(value)" class="header-anchor">#</a></h3>
<p>Similar to <code>Fiber.yield</code> but provides a value to return to the parent fiber&rsquo;s
<code>call</code>.</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  Fiber.yield(&quot;value&quot;)&#10;}&#10;&#10;System.print(fiber.call()) //&gt; value&#10;</code></pre>

<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<h3><strong>call</strong>() <a href="#call()" name="call()" class="header-anchor">#</a></h3>
<p>Starts or resumes the fiber if it is in a paused state. Equivalent to:</p>
<pre class="snippet"><code>&#10;fiber.call(null)&#10;</code></pre>

<h3><strong>call</strong>(value) <a href="#call(value)" name="call(value)" class="header-anchor">#</a></h3>
<p>Start or resumes the fiber if it is in a paused state. If the fiber is being
started for the first time, and its function takes a parameter, <code>value</code> is
passed to it.</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {|param|&#10;  System.print(param) //&gt; begin&#10;}&#10;&#10;fiber.call(&quot;begin&quot;)&#10;</code></pre>

<p>If the fiber is being resumed, <code>value</code> becomes the returned value of the fiber&rsquo;s
call to <code>yield</code>.</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  System.print(Fiber.yield()) //&gt; resume&#10;}&#10;&#10;fiber.call()&#10;fiber.call(&quot;resume&quot;)&#10;</code></pre>

<h3><strong>error</strong> <a href="#error" name="error" class="header-anchor">#</a></h3>
<p>The error message that was passed when aborting the fiber, or <code>null</code> if the
fiber has not been aborted.</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  123.badMethod&#10;}&#10;&#10;fiber.try()&#10;System.print(fiber.error) //&gt; Num does not implement method &#x27;badMethod&#x27;.&#10;</code></pre>

<h3><strong>isDone</strong> <a href="#isdone" name="isdone" class="header-anchor">#</a></h3>
<p>Whether the fiber&rsquo;s main function has completed and the fiber can no longer be
run. This returns <code>false</code> if the fiber is currently running or has yielded.</p>
<h3><strong>try</strong>() <a href="#try()" name="try()" class="header-anchor">#</a></h3>
<p>Tries to run the fiber. If a runtime error occurs
in the called fiber, the error is captured and is returned as a string.</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  123.badMethod&#10;}&#10;&#10;var error = fiber.try()&#10;System.print(&quot;Caught error: &quot; + error)&#10;</code></pre>

<p>If the called fiber raises an error, it can no longer be used.</p>
<h3><strong>try</strong>(value) <a href="#try(value)" name="try(value)" class="header-anchor">#</a></h3>
<p>Tries to run the fiber. If a runtime error occurs
in the called fiber, the error is captured and is returned as a string.
If the fiber is being
started for the first time, and its function takes a parameter, <code>value</code> is
passed to it.</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {|value|&#10;  value.badMethod&#10;}&#10;&#10;var error = fiber.try(&quot;just a string&quot;)&#10;System.print(&quot;Caught error: &quot; + error)&#10;</code></pre>

<p>If the called fiber raises an error, it can no longer be used.</p>
<h3><strong>transfer</strong>() <a href="#transfer()" name="transfer()" class="header-anchor">#</a></h3>
<p>Pauses execution of the current running fiber, and transfers control to this fiber.</p>
<p><a href="/docs/wren/v0-4-0/en/01-guide/12-concurrency/#transferring-control">Read more</a> about the difference between <code>call</code> and <code>transfer</code>. 
Unlike <code>call</code>, <code>transfer</code> doesn&rsquo;t track the origin of the transfer.</p>
<pre class="snippet"><code>&#10;// keep hold of the fiber we start in&#10;var main = Fiber.current&#10;&#10;// create a new fiber, note it doesn&#x27;t execute yet!&#10;var fiber = Fiber.new {&#10;  System.print(&quot;inside &#x27;fiber&#x27;&quot;) //&gt; #2: from #1&#10;  main.transfer()                //&gt; #3: go back to &#x27;main&#x27;&#10;}&#10;&#10;fiber.transfer()      //&gt; #1: print &quot;inside &#x27;fiber&#x27;&quot; via #2&#10;                      //&gt; this fiber is now paused by #1&#10;&#10;System.print(&quot;main&quot;)  //&gt; #4: prints &quot;main&quot;, unpaused by #3&#10;</code></pre>

<h3><strong>transfer</strong>(value) <a href="#transfer(value)" name="transfer(value)" class="header-anchor">#</a></h3>
<p>Pauses execution of the current running fiber, and transfers control to this fiber.</p>
<p>Similar to <code>transfer</code>, but a value can be passed between the fibers.</p>
<pre class="snippet"><code>&#10;// keep hold of the fiber we start in&#10;var main = Fiber.current&#10;&#10;// create a new fiber, note it doesn&#x27;t execute yet&#10;// also note that we&#x27;re accepting a &#x27;value&#x27; parameter&#10;var fiber = Fiber.new {|value|&#10;  System.print(&quot;in &#x27;fiber&#x27; = %(value)&quot;)   //&gt; #2: in &#x27;fiber&#x27; = 5&#10;  var result = main.transfer(&quot;hello?&quot;)    //&gt; #3: send to &#x27;message&#x27;&#10;  System.print(&quot;end &#x27;fiber&#x27; = %(result)&quot;) //&gt; #6: end &#x27;fiber&#x27; = 32&#10;}&#10;&#10;var message = fiber.transfer(5)   //&gt; #1: send to &#x27;value&#x27;&#10;System.print(&quot;... %(message)&quot;)    //&gt; #4: ... hello?&#10;fiber.transfer(32)                //&gt; #5: send to &#x27;result&#x27;&#10;</code></pre>

<h3><strong>transferError</strong>(error) <a href="#transfererror(error)" name="transfererror(error)" class="header-anchor">#</a></h3>
<p>Transfer to this fiber, but set this fiber into an error state. 
The <code>fiber.error</code> value will be populated with the value in <code>error</code>.</p>
<pre class="snippet"><code>&#10;var A = Fiber.new {&#10;  System.print(&quot;transferred to A&quot;)     //&gt; #4&#10;  B.transferError(&quot;error!&quot;)            //&gt; #5&#10;}&#10;&#10;var B = Fiber.new {&#10;  System.print(&quot;started B&quot;)            //&gt; #2 &#10;  A.transfer()                         //&gt; #3&#10;  System.print(&quot;should not get here&quot;)&#10;}&#10;&#10;B.try()                   //&gt; #1&#10;System.print(B.error)     //&gt; #6: prints &quot;error!&quot; from #5&#10;&#10;// B fiber can no longer be used&#10;&#10;B.call()                  //&gt; #7: Cannot call an aborted fiber.&#10;</code></pre>
</div>
