---
title: "Calling Wren from C"
documentId: "wren:embedding/calling-wren-from-c.html"
order: 19
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Calling Wren from C</h1>
<p>From C, we can tell Wren to do stuff by calling <code>wrenInterpret()</code>, but that&rsquo;s
not always the ideal way to drive the VM. First of all, it&rsquo;s slow. It has to
parse and compile the string of source code you give it. Wren has a pretty fast
compiler, but that&rsquo;s still a good bit of work.</p>
<p>It&rsquo;s also not an effective way to communicate. You can&rsquo;t pass arguments to
Wren&mdash;at least, not without doing something nasty like converting them to
literals in a string of source code&mdash;and you can&rsquo;t get a result value back.</p>
<p><code>wrenInterpret()</code> is great for loading code into the VM, but it&rsquo;s not the best
way to execute code that&rsquo;s already been loaded. What we want to do is invoke
some already compiled chunk of code. Since Wren is an object-oriented language,
&ldquo;chunk of code&rdquo; means a <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/">method</a>, not a <a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">function</a>.</p>
<p>The C API for doing this is <code>wrenCall()</code>. In order to invoke a Wren method from
C, we need a few things:</p>
<ul>
<li>
<p><strong>The method to call.</strong> Wren is dynamically typed, so this means we&rsquo;ll look it
  up by name. Further, since Wren supports overloading by arity, we actually
  need its entire <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#signature">signature</a>.</p>
</li>
<li>
<p><strong>The receiver object to invoke the method on.</strong> The receiver&rsquo;s class
  determines which method is actually called.</p>
</li>
<li>
<p><strong>The arguments to pass to the method.</strong></p>
</li>
</ul>
<p>We&rsquo;ll tackle these one at a time.</p>
<h3>Getting a Method Handle <a href="#getting-a-method-handle" name="getting-a-method-handle" class="header-anchor">#</a></h3>
<p>When you run a chunk of Wren code like this:</p>
<pre class="snippet"><code>&#10;object.someMethod(1, 2, 3)&#10;</code></pre>

<p>At runtime, the VM has to look up the class of <code>object</code> and find a method there
whose signature is <code>someMethod(_,_,_)</code>. This sounds like it&rsquo;s doing some string
manipulation&mdash;at the very least hashing the signature&mdash;every time a
method is called. That&rsquo;s how many dynamic languages work.</p>
<p>But, as you can imagine, that&rsquo;s pretty slow. So, instead, Wren does as much of
that work at compile time as it can. When it&rsquo;s compiling the above code to
bytecode, it takes that method signature a converts it to a <em>method symbol</em>, a
number that uniquely identifes that method. That&rsquo;s the only part of the process
that requires treating a signature as a string.</p>
<p>At runtime, the VM just looks for the method <em>symbol</em> in the receiver&rsquo;s class&rsquo;s
method table. In fact, the way it&rsquo;s implemented today, the symbol is simply the
array index into the table. That&rsquo;s <a href="/docs/wren/v0-4-0/en/01-guide/22-performance/">why method calls are so fast</a> in Wren.</p>
<p>It would be a shame if calling a method from C didn&rsquo;t have that same speed
benefit. To achieve that, we split the process of calling a method into two
steps. First, we create a handle that represents a &ldquo;compiled&rdquo; method signature:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenHandle* wrenMakeCallHandle(WrenVM* vm, const char* signature);&#10;</code></pre>

<p>That takes a method signature as a string and gives you back an opaque handle
that represents the compiled method symbol. Now you have a <em>reusable</em> handle
that can be used to very quickly call a certain method given a receiver and some
arguments.</p>
<p>This is just a regular WrenHandle, which means you can hold onto it as long as
you like. Typically, you&rsquo;d call this once outside of your application&rsquo;s
performance critical loops and reuse it as long as you need. It is us up to you
to release it when you no longer need it by calling <code>wrenReleaseHandle()</code>.</p>
<h2>Setting Up a Receiver <a href="#setting-up-a-receiver" name="setting-up-a-receiver" class="header-anchor">#</a></h2>
<p>OK, we have a method, but who are we calling it on? We need a receiver, and as
you can probably guess after reading the <a href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/">last section</a>, we give that to Wren
by storing it in a slot. In particular, <strong>the receiver for a method call goes in
slot zero.</strong></p>
<p>Any object you store in that slot can be used as a receiver. You could even call
<code>+</code> on a number by storing a number in there if you felt like it.</p>
<p>Needing a receiver to call some Wren code from C might feel strange. C is
procedural, so it&rsquo;s natural to want to just invoke a bare <em>function</em> from Wren,
but Wren isn&rsquo;t procedural. Instead, if you want to define some executable
operation that isn&rsquo;t logically tied to a specific object, the natural way is to
define a static method on an appropriate class.</p>
<p>For example, say we&rsquo;re making a game engine. From C, we want to tell the game
engine to update all of the entities each frame. We&rsquo;ll keep track of the list of
entities within Wren, so from C, there&rsquo;s no obvious object to call <code>update(_)</code>
on. Instead, we&rsquo;ll just make it a static method:</p>
<pre class="snippet"><code>&#10;class GameEngine {&#10;  static update(elapsedTime) {&#10;    // ...&#10;  }&#10;}&#10;</code></pre>

<p>Often, when you call a Wren method from C, you&rsquo;ll be calling a static method.
But, even then, you need a receiver. Now, though, the receiver is the <em>class
itself</em>. Classes are first class objects in Wren, and when you define a named
class, you&rsquo;re really declaring a variable with the class&rsquo;s name and storing a
reference to the class object in it.</p>
<p>Assuming you declared that class at the top level, the C API <a href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/#looking-up-variables">gives you a way to
look it up</a>. We can get a handle to the above class like so:</p>
<pre class="snippet" data-lang="c"><code>&#10;// Load the class into slot 0.&#10;wrenEnsureSlots(vm, 1);&#10;wrenGetVariable(vm, &quot;main&quot;, &quot;GameEngine&quot;, 0);&#10;</code></pre>

<p>We could do this every time we call <code>update()</code>, but, again, that&rsquo;s kind of slow
because we&rsquo;re looking up &ldquo;GameEngine&rdquo; by name each time. A faster solution is to
create a handle to the class once and use it each time:</p>
<pre class="snippet" data-lang="c"><code>&#10;// Load the class into slot 0.&#10;wrenEnsureSlots(vm, 1);&#10;wrenGetVariable(vm, &quot;main&quot;, &quot;GameEngine&quot;, 0);&#10;WrenHandle* gameEngineClass = wrenGetSlotHandle(vm, 0);&#10;</code></pre>

<p>Now, each time we want to call a method on GameEngine, we store that value back
in slot zero:</p>
<pre class="snippet" data-lang="c"><code>&#10;wrenSetSlotHandle(vm, 0, gameEngineClass);&#10;</code></pre>

<p>Just like we hoisted <code>wrenMakeCallHandle()</code> out of our performance critical
loop, we can hoist the call to <code>wrenGetVariable()</code> out. Of course, if your code
isn&rsquo;t performance critical, you don&rsquo;t have to do this.</p>
<h2>Passing Arguments <a href="#passing-arguments" name="passing-arguments" class="header-anchor">#</a></h2>
<p>We&rsquo;ve got a receiver in slot zero now, next we need to pass in any other
arguments. In our GameEngine example, that&rsquo;s just the elapsed time. Method
arguments go in consecutive slots after the receiver. So the elapsed time goes
into slot one. You can use any of the slot functions to set this up. For the
example, it&rsquo;s just:</p>
<pre class="snippet" data-lang="c"><code>&#10;wrenSetSlotDouble(vm, 1, elapsedTime);&#10;</code></pre>

<h2>Calling the Method <a href="#calling-the-method" name="calling-the-method" class="header-anchor">#</a></h2>
<p>We have all of the data in place, so all that&rsquo;s left is to pull the trigger and
tell the VM to start running some code:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenInterpretResult wrenCall(WrenVM* vm, WrenHandle* method);&#10;</code></pre>

<p>It takes the method handle we created using <code>wrenMakeCallHandle()</code>. Now Wren
starts running code. It looks up the method on the receiver, executes it and
keeps running until either the method returns or a fiber <a href="/docs/wren/v0-4-0/en/02-reference/03-modules-core-fiber/#fiber.suspend()">suspends</a>.</p>
<p><code>wrenCall()</code> returns the same WrenInterpretResult enum as <code>wrenInterpret()</code> to
tell you if the method completed successfully or a runtime error occurred.
(<code>wrenCall()</code> never returns <code>WREN_ERROR_COMPILE</code> since it doesn&rsquo;t compile
anything.)</p>
<h2>Getting the Return Value <a href="#getting-the-return-value" name="getting-the-return-value" class="header-anchor">#</a></h2>
<p>When <code>wrenCall()</code> returns, it leaves the slot array in place. In slot zero, you
can find the method&rsquo;s return value, which you can access using any of the slot
reading functions. If you don&rsquo;t need the return value, you can ignore it.</p>
<p>This is how you drive Wren from C, but how do you put control in Wren&rsquo;s hands?
For that, you&rsquo;ll need the next section&hellip;</p>
<p><a class="right" href="/docs/wren/v0-4-0/en/01-guide/18-embedding-calling-c-from-wren/">Calling C From Wren &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/">&larr; Slots and Handles</a></p>
</div>
