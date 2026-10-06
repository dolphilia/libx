---
title: "Error Handling"
documentId: "wren:error-handling.html"
order: 13
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Error Handling</h1>
<p>Errors come in a few fun flavors.</p>
<h2>Syntax errors <a href="#syntax-errors" name="syntax-errors" class="header-anchor">#</a></h2>
<p>The first errors you&rsquo;re likely to run into are syntax errors. These include
simple bugs where your code doesn&rsquo;t follow the language&rsquo;s grammar, like:</p>
<pre class="snippet"><code>&#10;1 + * 2&#10;</code></pre>

<p>Wren detects these errors as soon as it tries to read your code. When it hits
one, you get a friendly error message, like:</p>
<pre><code>[main line 1] Error on &#x27;*&#x27;: Unexpected token for expression.&#10;</code></pre>
<p>Some slightly more &ldquo;semantic&rdquo; errors fall into this bucket too. Things like
using a variable that hasn&rsquo;t been defined, or declaring two variables with the
same name in the same scope. So if you do:</p>
<pre class="snippet"><code>&#10;var a = &quot;once&quot;&#10;var a = &quot;twice&quot;&#10;</code></pre>

<p>Wren tells you:</p>
<pre><code>[main line 2] Error on &#x27;a&#x27;: Top-level variable is already defined.&#10;</code></pre>
<p>Note that it does this before it executes <em>any</em> code. Unlike some other
scripting languages, Wren tries to help you find your errors as soon as
possible when it can.</p>
<p>If it starts running your code, you can be sure you don&rsquo;t have any errors
related to syntax or variable scope.</p>
<h2>Runtime errors <a href="#runtime-errors" name="runtime-errors" class="header-anchor">#</a></h2>
<p>Alas, just fixing all of the &ldquo;compile-time&rdquo; errors doesn&rsquo;t mean your code does
what you want. Your program may still have errors that can&rsquo;t be detected
statically. Since they can&rsquo;t be found until your code is run, they&rsquo;re called
&ldquo;runtime&rdquo; errors.</p>
<p>Most runtime errors come from the VM itself. They arise from code trying to
perform an operation that the VM can&rsquo;t do. The most common error is a &ldquo;method
not found&rdquo; one. If you call a method on an object and its class (and all of its
superclasses) don&rsquo;t define that method, there&rsquo;s nothing Wren can do:</p>
<pre class="snippet"><code>&#10;class Foo {&#10;  construct new() {}&#10;}&#10;&#10;var foo = Foo.new()&#10;foo.someRandomMethod&#10;</code></pre>

<p>If you run this, Wren will print:</p>
<pre><code>Foo does not implement method &#x27;someRandomMethod&#x27;.&#10;</code></pre>
<p>Then it stops executing code. Unlike some other languages, Wren doesn&rsquo;t keep
plugging away after a runtime error has occurred. A runtime error implies
there&rsquo;s a bug in your code and it wants to draw your attention to it. To help
you out, it prints a stack trace showing where in the code the error occurred,
and all of the method calls that led to it.</p>
<p>Another common runtime error is passing an argument of the wrong type to a
method. For example, lists are indexed using a number. If you try to pass some
other type, it&rsquo;s an error:</p>
<pre class="snippet"><code>&#10;var list = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]&#10;list[&quot;1&quot;]&#10;</code></pre>

<p>This exits with:</p>
<pre><code>Subscript must be a number or a range.&#10;[main line 2] in (script)&#10;</code></pre>
<p>These are the two most common kinds of runtime errors, but there are others.
Stuff like out of bounds errors on lists, calling a function with the wrong
number of arguments, etc.</p>
<h2>Handling runtime errors <a href="#handling-runtime-errors" name="handling-runtime-errors" class="header-anchor">#</a></h2>
<p>Most of the time, runtime errors indicate a bug in your code and the best
solution is to fix the bug. However, sometimes it&rsquo;s useful to be able to handle
them at, uh, runtime.</p>
<p>To keep the language simpler, Wren does not have exception handling. Instead, it
takes advantage of <a href="/docs/wren/v0-4-0/en/01-guide/12-concurrency/">fibers</a> for handling errors. When a runtime error occurs,
the current fiber is aborted. Normally, Wren will also abort any fibers that
invoked that one, all the way to the main fiber, and then exit the VM.</p>
<p>However, you can run a fiber using the <code>try</code> method. If a runtime error occurs
in the called fiber, the error is captured and the <code>try</code> method returns the
error message as a string.</p>
<p>For example, if you run this program:</p>
<pre class="snippet"><code>&#10;var fiber = Fiber.new {&#10;  123.badMethod&#10;}&#10;&#10;var error = fiber.try()&#10;System.print(&quot;Caught error: &quot; + error)&#10;</code></pre>

<p>It prints:</p>
<pre><code>Caught error: Num does not implement method &#x27;badMethod&#x27;.&#10;</code></pre>
<p>The called fiber can no longer be used, but any other fibers can proceed as
usual. When a fiber has been aborted because of a runtime error, you can also
get the error from the fiber object. Continuing the above example:</p>
<pre class="snippet"><code>&#10;System.print(fiber.error)&#10;</code></pre>

<p>This also prints:</p>
<pre><code>Num does not implement method &#x27;badMethod&#x27;.&#10;</code></pre>
<p>If you have a chain of fiber calls and a runtime error occurs, it will walk the
chain looking for a <code>try</code> call, so this can also be used to capture runtime
errors generated in fibers that are invoked by the one you called <code>try</code> on.</p>
<h2>Creating runtime errors <a href="#creating-runtime-errors" name="creating-runtime-errors" class="header-anchor">#</a></h2>
<p>Most runtime errors come from within the Wren VM, but you may want to be able
to cause your own runtime errors to occur. This can be done by calling the
<code>abort()</code> static method on <code>Fiber</code>:</p>
<pre class="snippet"><code>&#10;Fiber.abort(&quot;Something bad happened&quot;)&#10;</code></pre>

<p>You must pass in an error message, and it must be a string.</p>
<p>If the provided message is <code>null</code>, no runtime error is raised.</p>
<h2>Failures <a href="#failures" name="failures" class="header-anchor">#</a></h2>
<p>The last flavor of errors is the highest-level one. All of the above errors
indicate <em>bugs</em>&mdash;places where the code itself is incorrect. But some
errors indicate that the code simply couldn&rsquo;t accomplish its task for
unforeseeable reasons. We&rsquo;ll call these &ldquo;failures&rdquo;.</p>
<p>Consider a program that reads in a string of input from the user and parses it
to a number. Many strings are not valid numbers, so this parsing can fail. The
only way the program could prevent that failure is by validating the string
before its parsed, but validating that a string is a number is pretty much the
same thing as parsing it.</p>
<p>For cases like this where failure can occur and the program <em>will</em> want to
handle it, fibers and <code>try()</code> are too coarse-grained to work with. Instead,
these operations will indicate failure by <em>returning</em> some sort of error
indication.</p>
<p>For example, a method for parsing a number could return a number on success and
<code>null</code> to indicate parsing failed. Since Wren is dynamically typed, it&rsquo;s easy
and natural for a method to return different types of values.</p>
<p><br><hr>
<a class="right" href="/docs/wren/v0-4-0/en/01-guide/14-modularity/">Modularity &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/12-concurrency/">&larr; Concurrency</a></p>
</div>
