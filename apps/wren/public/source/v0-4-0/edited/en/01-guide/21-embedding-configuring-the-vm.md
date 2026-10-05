---
title: "Configuring the VM"
documentId: "wren:embedding/configuring-the-vm.html"
order: 21
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Configuring the VM</h1>
<p>When you create a Wren VM, you tweak it by passing in a pointer to a
WrenConfiguration structure. Since Wren has no global state, you can configure
each VM differently if your application happens to run multiple.</p>
<p>The struct looks like:</p>
<pre class="snippet" data-lang="c"><code>&#10;typedef struct&#10;{&#10;  WrenReallocateFn reallocateFn;&#10;  WrenLoadModuleFn loadModuleFn;&#10;  WrenBindForeignMethodFn bindForeignMethodFn;&#10;  WrenBindForeignClassFn bindForeignClassFn;&#10;  WrenWriteFn writeFn;&#10;  WrenErrorFn errorFn;&#10;  size_t initialHeapSize;&#10;  size_t minHeapSize;&#10;  int heapGrowthPercent;&#10;} WrenConfiguration;&#10;</code></pre>

<p>Most fields have useful defaults, which you can (and should) initialize by
calling:</p>
<pre class="snippet" data-lang="c"><code>&#10;wrenInitConfiguration(&amp;configuration);&#10;</code></pre>

<p>Calling this ensures that your VM doesn&rsquo;t get uninitialized configuration when
new fields are added to WrenConfiguration. Here is what each field does, roughly
categorized:</p>
<h2>Binding <a href="#binding" name="binding" class="header-anchor">#</a></h2>
<p>The VM is isolated from the outside world. These callbacks let the VM request
access to imported code and foreign functionality.</p>
<h3><strong><code>loadModuleFn</code></strong> <a href="#loadmodulefn" name="loadmodulefn" class="header-anchor">#</a></h3>
<p>This is the callback Wren uses to load an imported module. The VM itself does
not know how to talk to the file system, so when an <code>import</code> statement is
executed, it relies on the host application to locate and read the source code
for a module.</p>
<p>The signature of this function is:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenLoadModuleResult loadModule(WrenVM* vm, const char* name)&#10;</code></pre>

<p>When a module is imported, Wren calls this and passes in the module&rsquo;s name. The
host should return the source code for that module in a <code>WrenLoadModuleResult</code> struct.</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenLoadModuleResult myLoadModule(WrenVM* vm, const char* name) {&#10;  WrenLoadModuleResult result = {0};&#10;    result.source = getSourceForModule(name);&#10;  return result;&#10;}&#10;</code></pre>

<p>The module loader is only be called once for any given module name. Wren caches
the result internally so subsequent imports of the same module use the
previously loaded code.</p>
<p>If your host application isn&rsquo;t able to load a module with some name, it should
make sure the <code>source</code> value is <code>NULL</code> when returned. Wren will then report that as a runtime error.</p>
<p>If you don&rsquo;t use any <code>import</code> statements, you can leave the <code>loadModuleFn</code> field in
the configuration set to <code>NULL</code> (the default).</p>
<p>Additionally, the <code>WrenLoadModuleResult</code> allows us to add a callback for when Wren is 
done with the <code>source</code>, so we can free the memory if needed.</p>
<pre class="snippet" data-lang="c"><code>&#10;&#10;static void loadModuleComplete(WrenVM* vm, &#10;                               const char* module,&#10;                               WrenLoadModuleResult result) &#10;{&#10;  if(result.source) {&#10;    //for example, if we used malloc to allocate&#10;    //our source string, we use free to release it.&#10;    free((void*)result.source);&#10;  }&#10;}&#10;&#10;WrenLoadModuleResult myLoadModule(WrenVM* vm, const char* name) {&#10;  WrenLoadModuleResult result = {0};&#10;    result.onComplete = loadModuleComplete;&#10;    result.source = getSourceForModule(name);&#10;  return result;&#10;}&#10;</code></pre>

<h3><strong><code>bindForeignMethodFn</code></strong> <a href="#bindforeignmethodfn" name="bindforeignmethodfn" class="header-anchor">#</a></h3>
<p>The callback Wren uses to find a foreign method and bind it to a class. See
<a href="/docs/wren/v0-4-0/en/01-guide/18-embedding-calling-c-from-wren/">this page</a> for details. If your application defines no foreign
methods, you can leave this <code>NULL</code>.</p>
<h3><strong><code>bindForeignClassFn</code></strong> <a href="#bindforeignclassfn" name="bindforeignclassfn" class="header-anchor">#</a></h3>
<p>The callback Wren uses to find a foreign class and get its foreign methods. See
<a href="/docs/wren/v0-4-0/en/01-guide/20-embedding-storing-c-data/">this page</a> for details. If your application defines no foreign
classes, you can leave this <code>NULL</code>.</p>
<h2>Diagnostics <a href="#diagnostics" name="diagnostics" class="header-anchor">#</a></h2>
<p>These let you wire up some minimal output so you can tell if your code is doing
what you expect.</p>
<h3><strong><code>writeFn</code></strong> <a href="#writefn" name="writefn" class="header-anchor">#</a></h3>
<p>This is the callback Wren uses to output text when <code>System.print()</code> or the other
related functions are called. This is the minimal connection the VM has with the
outside world and lets you do rudimentary &ldquo;printf debugging&rdquo;. Its signature is:</p>
<pre class="snippet" data-lang="c"><code>&#10;void write(WrenVM* vm, const char* text)&#10;</code></pre>

<p>Wren does <em>not</em> have a default implementation for this. It&rsquo;s up to you to wire
it up to <code>printf()</code> or some other way to show the text. If you leave it <code>NULL</code>,
calls to <code>System.print()</code> and others silently do nothing.</p>
<h3><strong><code>errorFn</code></strong> <a href="#errorfn" name="errorfn" class="header-anchor">#</a></h3>
<p>Wren uses this callback to report compile time and runtime errors. Its signature
is:</p>
<pre class="snippet" data-lang="c"><code>&#10;void error(&#10;      WrenVM* vm, &#10;      WrenErrorType type,&#10;      const char* module,&#10;      int line,&#10;      const char* message)&#10;</code></pre>

<p>The <code>type</code> parameter is one of:</p>
<pre class="snippet" data-lang="c"><code>&#10;typedef enum&#10;{&#10;  // A syntax or resolution error detected at compile time.&#10;  WREN_ERROR_COMPILE,&#10;&#10;  // The error message for a runtime error.&#10;  WREN_ERROR_RUNTIME,&#10;&#10;  // One entry of a runtime error&#x27;s stack trace.&#10;  WREN_ERROR_STACK_TRACE&#10;} WrenErrorType;&#10;</code></pre>

<p>When a compile error occurs, <code>errorFn</code> is called once with type
<code>WREN_ERROR_COMPILE</code>, the name of the module and line where the error occurs,
and the error message.</p>
<p>Runtime errors include stack traces. To handle this, Wren first calls <code>errorFn</code>
with <code>WREN_ERROR_RUNTIME</code>, no module or line, and the runtime error&rsquo;s message.
After that, it calls <code>errorFn</code> again using type <code>WREN_ERROR_STACK_TRACE</code>, once
for each line in the stack trace. Each of those calls has the module and line
where the method or function is defined and <code>message</code> is the name of the method
or function.</p>
<p>If you leave this <code>NULL</code>, Wren does not report any errors.</p>
<h2>Memory Management <a href="#memory-management" name="memory-management" class="header-anchor">#</a></h2>
<p>These fields control how the VM allocates and manages memory.</p>
<h3><strong><code>reallocateFn</code></strong> <a href="#reallocatefn" name="reallocatefn" class="header-anchor">#</a></h3>
<p>This lets you provide a custom memory allocation function. Its signature is:</p>
<pre class="snippet" data-lang="c"><code>&#10;void* reallocate(void* memory, size_t newSize, void* userData)&#10;</code></pre>

<p>Wren uses this one function to allocate, grow, shrink, and deallocate memory.
When called, <code>memory</code> is the existing pointer to the block of memory if an
allocation is being changed or freed. If Wren is requesting new memory, then
<code>memory</code> is <code>NULL</code>.</p>
<p><code>newSize</code> is the number of bytes of memory being requested. If memory is being
freed, this is zero. Your callback should allocate the proper amount of memory
and return it.</p>
<p>If you don&rsquo;t provide a custom allocator, the VM uses a default one that relies
on <code>realloc</code> and <code>free</code>.</p>
<h3><strong><code>initialHeapSize</code></strong> <a href="#initialheapsize" name="initialheapsize" class="header-anchor">#</a></h3>
<p>This defines the total number of bytes of memory the VM will allocate before
triggering the first garbage collection. Setting this to a smaller number
reduces the amount of memory Wren will have allocated at one time, but causes it
to collect garbage more frequently.</p>
<p>If you set this to zero, Wren uses a default size of 10MB.</p>
<h3><strong><code>minHeapSize</code></strong> <a href="#minheapsize" name="minheapsize" class="header-anchor">#</a></h3>
<p>After a garbage collection occurs, the threshold for the <em>next</em> collection is
determined based on the number of bytes remaining in use. This allows Wren to
grow or shrink its memory usage automatically based on how much memory is
actually needed.</p>
<p>This can be used to ensure that the heap does not get <em>too</em> small, which can
in turn lead to a large number of collections afterwards as the heap grows
back to a usable size.</p>
<p>If zero, this defaults to 1MB.</p>
<h3><strong><code>heapGrowthPercent</code></strong> <a href="#heapgrowthpercent" name="heapgrowthpercent" class="header-anchor">#</a></h3>
<p>Wren tunes the rate of garbage collection based on how much memory is still in
use after a collection. This number controls that. It determines the amount of
additional memory Wren will use after a collection, as a percentage of the
current heap size.</p>
<p>For example, say that this is 50. After a garbage collection, there are 400
bytes of memory still in use. That means the next collection will be triggered
after a total of 600 bytes are allocated (including the 400 already in use.)</p>
<p>Setting this to a smaller number wastes less memory, but triggers more
frequent garbage collections.</p>
<p>If set to zero, the VM uses a default of 50.</p>
<p><a href="/docs/wren/v0-4-0/en/01-guide/20-embedding-storing-c-data/">&larr; Storing C Data</a></p>
</div>
