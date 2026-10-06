---
title: "Embedding"
documentId: "wren:embedding/index.html"
order: 16
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Embedding</h1>
<p>Wren is designed to be a scripting language that lives inside a host
application, so the embedding API is as important as any of its language
features. Designing this API well requires satisfying several constraints:</p>
<ol>
<li>
<p><strong>Wren is dynamically typed, but C is not.</strong> A variable can hold a value of
   any type in Wren, but that&rsquo;s definitely not the case in C unless you define
   some sort of variant type, which ultimately just kicks the problem down the
   road. Eventually, we have to move data across the boundary between statically and dynamically typed code.</p>
</li>
<li>
<p><strong>Wren uses garbage collection, but C manages memory manually.</strong> GC adds a
   few constraints on the API. The VM must be able to find every Wren object
   that is still usable, even if that object is being referenced from native C
   code. Otherwise, Wren could free an object that&rsquo;s still in use.</p>
<p>Also, we ideally don&rsquo;t want to let native C code see a bare pointer to a
chunk of memory managed by Wren. Many garbage collection strategies involve
<a href="https://en.wikipedia.org/wiki/Tracing_garbage_collection#Copying_vs._mark-and-sweep_vs._mark-and-don.27t-sweep">moving objects</a> in memory. If we allow C code to point directly to an
object, that pointer will be left dangling when the object moves. Wren&rsquo;s GC
doesn&rsquo;t move objects today, but we would like to keep that option for the
future.</p>
</li>
<li>
<p><strong>The embedding API needs to be fast.</strong> Users may add layers of abstraction
   on top of the API to make it more pleasant to work with, but the base API
   defines the <em>maximum</em> performance you can get out of the system. It&rsquo;s the
   bottom of the stack, so there&rsquo;s no way for a user to optimize around it if
   it&rsquo;s too slow. There is no lower level alternative.</p>
</li>
<li>
<p><strong>We want the API to be pleasant to use.</strong> This is the last constraint
   because it&rsquo;s the softest. Of course, we want a beautiful, usable API. But we
   really <em>need</em> to handle the above, so we&rsquo;re willing to make things a bit more
   of a chore to reach the first three goals.</p>
</li>
</ol>
<p>Fortunately, we aren&rsquo;t the first people to tackle this. If you&rsquo;re familiar with
<a href="https://www.lua.org/pil/24.html">Lua&rsquo;s C API</a>, you&rsquo;ll find Wren&rsquo;s similar.</p>
<h3>Performance and safety <a href="#performance-and-safety" name="performance-and-safety" class="header-anchor">#</a></h3>
<p>When code is safely snuggled within the confines of the VM, it&rsquo;s pretty safe.
Method calls are dynamically checked and generate runtime errors which can be
caught and handled. The stack grows if it gets close to overflowing. In general,
when you&rsquo;re within Wren code, it tries very hard to avoid crashing and burning.</p>
<p>This is why you use a high level language after all&mdash;it&rsquo;s safer and more
productive than C. C, meanwhile, really assumes you know what you&rsquo;re doing. You
can cast pointers in invalid ways, misinterpret bits, use memory after freeing
it, etc. What you get in return is blazing performance. Many of the reasons C is
fast are because it takes all the governors and guardrails off.</p>
<p>Wren&rsquo;s embedding API defines the border between those worlds, and takes on some
of the characteristics of C. When you call any of the embedding API functions,
it assumes you are calling them correctly. If you invoke a Wren method from C
that expects three arguments, it trusts that you gave it three arguments.</p>
<p>In debug builds, Wren has assertions to check as many things as it can, but in
release builds, Wren expects you to do the right thing. This means you need to
take care when using the embedding API, just like you do in all C code you
write. In return, you get an API that is quite fast.</p>
<h2>Including Wren <a href="#including-wren" name="including-wren" class="header-anchor">#</a></h2>
<p>There are two (well, three) ways to get the Wren VM into your program:</p>
<ol>
<li>
<p><strong>Link to the static or dynamic library.</strong> When you <a href="/docs/wren/v0-4-0/en/01-guide/02-getting-started/">build Wren</a>, it
    generates both shared and static libraries in <code>lib</code> that you can link to.</p>
</li>
<li>
<p><strong>Include the source directly in your application.</strong> If you want to include
    the source directly in your program, you don&rsquo;t need to run any build steps.
    Just add the source files in <code>src/vm</code> to your project. They should compile
    cleanly as C99 or C++98 or anything later.</p>
</li>
</ol>
<p>In either case, you also want to add <code>src/include</code> to your include path so you
can find the <a href="https://github.com/wren-lang/wren/blob/main/src/include/wren.h">public header for Wren</a>:</p>
<pre class="snippet" data-lang="c"><code>&#10;#include &quot;wren.h&quot;&#10;</code></pre>

<p>Wren depends only on the C standard library, so you don&rsquo;t usually need to link
to anything else. On some platforms (at least BSD and Linux) some of the math
functions in <code>math.h</code> are implemented in a separate library, <a href="https://en.wikipedia.org/wiki/C_mathematical_functions#libm">libm</a>, that you
have to explicitly link to.</p>
<p>If your program is in C++ but you are linking to the Wren library compiled as C,
this header handles the differences in calling conventions between C and C++:</p>
<pre class="snippet" data-lang="c"><code>&#10;#include &quot;wren.hpp&quot;&#10;</code></pre>

<h2>Creating a Wren VM <a href="#creating-a-wren-vm" name="creating-a-wren-vm" class="header-anchor">#</a></h2>
<p>Once you&rsquo;ve integrated the code into your executable, you need to create a
virtual machine. To do that, you create a <code>WrenConfiguration</code> object and
initialize it.</p>
<pre class="snippet" data-lang="c"><code>&#10;    WrenConfiguration config;&#10;    wrenInitConfiguration(&amp;config);&#10;</code></pre>

<p>This gives you a basic configuration that has reasonable defaults for
everything. We&rsquo;ll <a href="/docs/wren/v0-4-0/en/01-guide/21-embedding-configuring-the-vm/">learn more</a> about what you can configure later,
but for now we&rsquo;ll just add the <code>writeFn</code>, so that we can print text.</p>
<p>First we need a function that will do something with the output
that Wren sends us from <code>System.print</code> (or <code>System.write</code>). <em>Note that it doesn&rsquo;t
include a newline in the output.</em></p>
<pre class="snippet" data-lang="c"><code>&#10;void writeFn(WrenVM* vm, const char* text) {&#10;  printf(&quot;%s&quot;, text);&#10;}&#10;</code></pre>

<p>And then, we update the configuration to point to it.</p>
<pre class="snippet" data-lang="c"><code>&#10;  WrenConfiguration config;&#10;  wrenInitConfiguration(&amp;config);&#10;    config.writeFn = &amp;writeFn;&#10;</code></pre>

<p>With this ready, you can create the VM:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenVM* vm = wrenNewVM(&amp;config);&#10;</code></pre>

<p>This allocates memory for a new VM and initializes it. The Wren C implementation
has no global state, so every single bit of data Wren uses is bundled up inside
a WrenVM. You can have multiple Wren VMs running independently of each other
without any problems, even concurrently on different threads.</p>
<p><code>wrenNewVM()</code> stores its own copy of the configuration, so after calling it, you
can discard the WrenConfiguration struct you filled in. Now you have a live
VM, waiting to run some code!</p>
<h2>Executing Wren code <a href="#executing-wren-code" name="executing-wren-code" class="header-anchor">#</a></h2>
<p>You execute a string of Wren source code like so:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenInterpretResult result = wrenInterpret(&#10;    vm,&#10;    &quot;my_module&quot;,&#10;    &quot;System.print(\&quot;I am running in a VM!\&quot;)&quot;);&#10;</code></pre>

<p>The string is a series of one or more statements separated by newlines. Wren
copies the string, so you can free it after calling this. When you call
<code>wrenInterpret()</code>, Wren first compiles your source to bytecode. If an error
occurs, it returns immediately with <code>WREN_RESULT_COMPILE_ERROR</code>.</p>
<p>Otherwise, Wren spins up a new <a href="/docs/wren/v0-4-0/en/01-guide/12-concurrency/">fiber</a> and executes the code in that. Your
code can in turn spawn whatever other fibers it wants. It keeps running fibers
until they all complete or one <a href="/docs/wren/v0-4-0/en/02-reference/03-modules-core-fiber/#fiber.suspend()">suspends</a>.</p>
<p>If a <a href="/docs/wren/v0-4-0/en/01-guide/13-error-handling/">runtime error</a> occurs (and another fiber doesn&rsquo;t handle it), Wren aborts
fibers all the way back to the main one and returns <code>WREN_RESULT_RUNTIME_ERROR</code>.
Otherwise, when the last fiber successfully returns, it returns
<code>WREN_RESULT_SUCCESS</code>.</p>
<p>All code passed to <code>wrenInterpret()</code> runs in a special &ldquo;main&rdquo; module. That way,
top-level names defined in one call can be accessed in later ones. It&rsquo;s similar
to a REPL session.</p>
<h2>Shutting down a VM <a href="#shutting-down-a-vm" name="shutting-down-a-vm" class="header-anchor">#</a></h2>
<p>Once the party is over and you&rsquo;re ready to end your relationship with a VM, you
need to free any memory it allocated. You do that like so:</p>
<pre class="snippet" data-lang="c"><code>&#10;wrenFreeVM(vm);&#10;</code></pre>

<p>After calling that, you obviously cannot use the <code>WrenVM*</code> you passed to it
again. It&rsquo;s dead.</p>
<p>Note that Wren will yell at you if you still have any live <a href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/#handles">WrenHandle</a>
objects when you call this. This makes sure you haven&rsquo;t lost track of any of
them (which leaks memory) and you don&rsquo;t try to use any of them after the VM has
been freed.</p>
<h2>A complete example <a href="#a-complete-example" name="a-complete-example" class="header-anchor">#</a></h2>
<p>Below is a complete example of the above.
You can find this file in the <a href="https://github.com/wren-lang/wren/blob/main/example/embedding/main.c">example</a> folder.</p>
<pre class="snippet" data-lang="c"><code>&#10;//For more details, visit https://wren.io/embedding/&#10;&#10;#include &lt;stdio.h&gt;&#10;#include &quot;wren.h&quot;&#10;&#10;static void writeFn(WrenVM* vm, const char* text)&#10;{&#10;  printf(&quot;%s&quot;, text);&#10;}&#10;&#10;void errorFn(WrenVM* vm, WrenErrorType errorType,&#10;             const char* module, const int line,&#10;             const char* msg)&#10;{&#10;  switch (errorType)&#10;  {&#10;    case WREN_ERROR_COMPILE:&#10;    {&#10;      printf(&quot;[%s line %d] [Error] %s\n&quot;, module, line, msg);&#10;    } break;&#10;    case WREN_ERROR_STACK_TRACE:&#10;    {&#10;      printf(&quot;[%s line %d] in %s\n&quot;, module, line, msg);&#10;    } break;&#10;    case WREN_ERROR_RUNTIME:&#10;    {&#10;      printf(&quot;[Runtime Error] %s\n&quot;, msg);&#10;    } break;&#10;  }&#10;}&#10;&#10;int main()&#10;{&#10;&#10;  WrenConfiguration config;&#10;  wrenInitConfiguration(&amp;config);&#10;    config.writeFn = &amp;writeFn;&#10;    config.errorFn = &amp;errorFn;&#10;  WrenVM* vm = wrenNewVM(&amp;config);&#10;&#10;  const char* module = &quot;main&quot;;&#10;  const char* script = &quot;System.print(\&quot;I am running in a VM!\&quot;)&quot;;&#10;&#10;  WrenInterpretResult result = wrenInterpret(vm, module, script);&#10;&#10;  switch (result) {&#10;    case WREN_RESULT_COMPILE_ERROR:&#10;      { printf(&quot;Compile Error!\n&quot;); } break;&#10;    case WREN_RESULT_RUNTIME_ERROR:&#10;      { printf(&quot;Runtime Error!\n&quot;); } break;&#10;    case WREN_RESULT_SUCCESS:&#10;      { printf(&quot;Success!\n&quot;); } break;&#10;  }&#10;&#10;  wrenFreeVM(vm);&#10;&#10;}&#10;</code></pre>

<p>Next, we&rsquo;ll learn to make that VM do useful stuff&hellip;</p>
<p><a class="right" href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/">Slots and Handles &rarr;</a></p>
</div>
