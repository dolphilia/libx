---
title: "Storing C Data"
documentId: "wren:embedding/storing-c-data.html"
order: 20
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Storing C Data</h1>
<p>An embedded language often needs to work with native data. You may want a
pointer to some memory managed in the C heap, or maybe you want to store a chunk
of data more efficiently than Wren&rsquo;s dynamism allows. You may want a Wren object
that represents a native resource like a file handle or database connection.</p>
<p>For those cases, you can define a <strong>foreign class</strong>, a chimera whose state is
half Wren and half C. It is a real Wren class with a name, constructor, and
methods. You can define methods on it written in Wren, or <a href="/docs/wren/v0-4-0/en/01-guide/18-embedding-calling-c-from-wren/">foreign methods</a>
written in C. It produces real Wren objects that you can pass around, do <code>is</code>
checks on, etc. But it also wraps a blob of raw memory that is opaque to Wren
but accessible from C.</p>
<h2>Defining a Foreign Class <a href="#defining-a-foreign-class" name="defining-a-foreign-class" class="header-anchor">#</a></h2>
<p>You define one like so:</p>
<pre class="snippet"><code>&#10;foreign class Point {&#10;  // ...&#10;}&#10;</code></pre>

<p>The <code>foreign</code> keyword tells Wren to loop in the host application when it
constructs instances of the class. The host tells Wren how many bytes of extra
memory the foreign instance should contain and in return, Wren gives the host
the opportunity to initialize that data.</p>
<p>To talk to the host app, Wren needs a C function it can call when it constructs
an instance of the foreign class. This function is found through a binding
process similar to <a href="/docs/wren/v0-4-0/en/01-guide/18-embedding-calling-c-from-wren/#binding-foreign-methods">how foreign methods are bound</a>. When you <a href="/docs/wren/v0-4-0/en/01-guide/21-embedding-configuring-the-vm/">configure
the VM</a>, you set the <code>bindForeignClassFn</code> field in WrenConfiguration to point
to a C callback you define. Its signature must be:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenForeignClassMethods bindForeignClass(&#10;    WrenVM* vm, const char* module, const char* className);&#10;</code></pre>

<p>Wren invokes this callback once when a foreign class declaration is executed.
Wren passes in the name of the module containing the foreign class, and the name
of the class being declared. The host&rsquo;s responsibility is to return one of these
structs:</p>
<pre class="snippet" data-lang="c"><code>&#10;typedef struct&#10;{&#10;  WrenForeignMethodFn allocate;&#10;  WrenFinalizerFn finalize;&#10;} WrenForeignClassMethods;&#10;</code></pre>

<p>It&rsquo;s a pair of function pointers. The first, <code>allocate</code>, is called by Wren
whenever an instance of the foreign class is created. (We&rsquo;ll get to the optional
<code>finalize</code> callback later.) The allocation callback has the same signature as a
foreign method:</p>
<pre class="snippet" data-lang="c"><code>&#10;void allocate(WrenVM* vm);&#10;</code></pre>

<h2>Initializing an Instance <a href="#initializing-an-instance" name="initializing-an-instance" class="header-anchor">#</a></h2>
<p>When you create an instance of a foreign class by calling one its
<a href="/docs/wren/v0-4-0/en/01-guide/10-classes/#constructors">constructors</a>, Wren invokes the <code>allocate</code> callback you gave it when binding
the foreign class. Your primary responsibility in that callback is to tell Wren
how many bytes of raw memory you need. You do that by calling:</p>
<pre class="snippet" data-lang="c"><code>&#10;void* wrenSetSlotNewForeign(WrenVM* vm,&#10;    int slot, int classSlot, size_t size);&#10;</code></pre>

<p>Like other <a href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/">slot manipulation functions</a>, it both reads from and writes to
the slot array. It has a few parameters to make it more general purpose since it
can also be used in other foreign methods:</p>
<ul>
<li>
<p>The <code>slot</code> parameter is the destination slot where the new foreign object
  should be placed. When you&rsquo;re calling this in a foreign class&rsquo;s allocate
  callback, this should be 0.</p>
</li>
<li>
<p>The <code>classSlot</code> parameter is the slot where the foreign class being
  constructed can be found. When the VM calls an allocate callback for a
  foreign class, the class itself is already in slot 0, so you&rsquo;ll pass 0 for
  this too.</p>
</li>
<li>
<p>Finally, the <code>size</code> parameter is the interesting one. Here, you pass in the
  number of extra raw bytes of data you want the foreign instance to store.
  This is the memory you get to play with from C.</p>
</li>
</ul>
<p>So, for example, if you wanted to create a foreign instance that contains eight
bytes of C data, you&rsquo;d call:</p>
<pre class="snippet" data-lang="c"><code>&#10;void* data = wrenSetSlotNewForeign(vm, 0, 0, 8);&#10;</code></pre>

<p>The value returned by <code>wrenSetSlotNewForeign()</code> is the raw pointer to the
requested bytes. You can cast that to whatever C type makes sense (as long as it
fits within the requested number of bytes) and initialize it as you see fit.</p>
<p>Any parameters passed to the constructor are also available in subsequent slots
in the slot array. That way you can initialize the foreign data based on values
passed to the constructor from Wren.</p>
<p>After the allocate callback returns, the class&rsquo;s constructor in Wren is run and
execution proceeds like normal. From here on out, within Wren, it appears you
have a normal instance of a class. It just happens to have some extra bytes
hiding inside it that can be accessed from foreign methods.</p>
<h2>Accessing Foreign Data <a href="#accessing-foreign-data" name="accessing-foreign-data" class="header-anchor">#</a></h2>
<p>Typically, the way you make use of the data stored in an instance of a foreign
class is through other foreign methods. Those are usually defined on the same
foreign class, but can be defined on other classes as well. Wren doesn&rsquo;t care.</p>
<p>Once you have a foreign instance in a slot, you can access the raw bytes it
stores by calling:</p>
<pre class="snippet" data-lang="c"><code>&#10;void* wrenGetSlotForeign(WrenVM* vm, int slot);&#10;</code></pre>

<p>You pass in the slot index containing the foreign object and it gives you back a
pointer to the raw memory the object wraps. As usual, the C API doesn&rsquo;t do any
type or bounds checking, so it&rsquo;s on you to make sure the object in that slot
actually <em>is</em> an instance of a foreign class and contains as much memory as you
access.</p>
<p>Given that void pointer, you can now freely read and modify the data it points
to. They&rsquo;re your bits, Wren just holds them for you.</p>
<h2>Freeing Resources <a href="#freeing-resources" name="freeing-resources" class="header-anchor">#</a></h2>
<p>If your foreign instances are just holding memory and you&rsquo;re OK with Wren&rsquo;s
garbage collector managing the lifetime of that memory, then you&rsquo;re done. Wren
will keep the bytes around as long as there is still a reference to them. When
the instance is no longer reachable, eventually the garbage collector will do
its thing and free the memory.</p>
<p>But, often, your foreign data refers to some resource whose lifetime needs to
be explicitly managed. For example, if you have a foreign object that wraps an
open file handle, you need to ensure that handle doesn&rsquo;t get left open when the
GC frees the foreign instance.</p>
<p>Of course, you can (and usually should) add a method on your foreign class, like
<code>close()</code> so the user can explicitly release the resource managed by the object.
But if they forget to do that and the object is no longer reachable, you want to
make sure the resource isn&rsquo;t leaked.</p>
<p>To that end, you can also provide a <em>finalizer</em> function when binding the
foreign class. That&rsquo;s the other callback in the WrenForeignClassMethods struct.
If you provide that callback, then Wren will invoke it when an instance of your
foreign class is about to be freed by the garbage collector. This gives you one
last chance to clean up the object&rsquo;s resources.</p>
<p>Because this is called during the middle of a garbage collection, you do not
have unfettered access to the VM. It&rsquo;s not like a normal foreign method where
you can monkey around with slots and other stuff. Doing that while the GC is
running could leave Wren in a weird state.</p>
<p>Instead, the finalize callback&rsquo;s signature is only:</p>
<pre class="snippet" data-lang="c"><code>&#10;void finalize(void* data);&#10;</code></pre>

<p>Wren gives you the pointer to your foreign function&rsquo;s memory, and that&rsquo;s it. The
<em>only</em> thing you should do inside a finalizer is release any external resources
referenced by that memory.</p>
<h2>A Full Example <a href="#a-full-example" name="a-full-example" class="header-anchor">#</a></h2>
<p>That&rsquo;s a lot to take in, so let&rsquo;s walk through a full example of a foreign class
with a finalizer and a couple of methods. We&rsquo;ll do a File class that wraps the
C standard file API.</p>
<p>In Wren, the class we want looks like this:</p>
<pre class="snippet"><code>&#10;foreign class File {&#10;  construct create(path) {}&#10;&#10;  foreign write(text)&#10;  foreign close()&#10;}&#10;</code></pre>

<p>So you can create a new file given a path. Once you have one, you can write to
it and then explicitly close it if you want. We also need to make sure the file
gets closed if the user forgets to and the GC cleans up the object.</p>
<h3>Setting up the VM <a href="#setting-up-the-vm" name="setting-up-the-vm" class="header-anchor">#</a></h3>
<p>Over in the host, first we&rsquo;ll set up the VM:</p>
<pre class="snippet" data-lang="c"><code>&#10;#include &quot;wren.h&quot;&#10;&#10;int main(int argc, const char* argv[])&#10;{&#10;  WrenConfiguration config;&#10;  wrenInitConfiguration(&amp;config);&#10;&#10;  config.bindForeignClassFn = bindForeignClass;&#10;  config.bindForeignMethodFn = bindForeignMethod;&#10;&#10;  WrenVM* vm = wrenNewVM(&amp;config);&#10;  wrenInterpret(vm, &quot;my_module&quot;, &quot;some code...&quot;);&#10;&#10;  return 0;&#10;}&#10;</code></pre>

<h3>Binding the foreign class <a href="#binding-the-foreign-class" name="binding-the-foreign-class" class="header-anchor">#</a></h3>
<p>We give the VM two callbacks. The first is for wiring up the foreign class
itself:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenForeignClassMethods bindForeignClass(&#10;    WrenVM* vm, const char* module, const char* className)&#10;{&#10;  WrenForeignClassMethods methods;&#10;&#10;  if (strcmp(className, &quot;File&quot;) == 0)&#10;  {&#10;    methods.allocate = fileAllocate;&#10;    methods.finalize = fileFinalize;&#10;  }&#10;  else&#10;  {&#10;    // Unknown class.&#10;    methods.allocate = NULL;&#10;    methods.finalize = NULL;&#10;  }&#10;&#10;  return methods;&#10;}&#10;</code></pre>

<p>When our binding callback is invoked for the File class, we return the allocate
and finalize functions the VM should call. Allocation looks like:</p>
<pre class="snippet" data-lang="c"><code>&#10;#include &lt;stdio.h&gt;&#10;#include &quot;wren.h&quot;&#10;&#10;void fileAllocate(WrenVM* vm)&#10;{&#10;  FILE** file = (FILE**)wrenSetSlotNewForeign(vm,&#10;      0, 0, sizeof(FILE*));&#10;  const char* path = wrenGetSlotString(vm, 1);&#10;  *file = fopen(path, &quot;w&quot;);&#10;}&#10;</code></pre>

<p>First we create the instance by calling <code>wrenSetSlotNewForeign()</code>. We tell it to
add enough extra bytes to store a <code>FILE*</code> in it, which is C&rsquo;s representation of
a file handle. We&rsquo;re given back a pointer to the bytes. Since the file handle is
itself a pointer, we end up with a double indirection, hence the <code>FILE**</code>. In
most cases, you&rsquo;ll just have a single <code>*</code>.</p>
<p>We also pull the file path from the slot array. Then we tell C to create a new
file at that path. That gives us back a new file handle &ndash; a <code>FILE*</code> &ndash; and we
store that back into the foreign instance using <code>*file</code>. Now we have a foreign
object that wraps an open file handle.</p>
<p>The finalizer simply casts the foreign instance&rsquo;s data back to the proper type
and closes the file:</p>
<pre class="snippet" data-lang="c"><code>&#10;void fileFinalize(void* data)&#10;{&#10;  closeFile((FILE**) data);&#10;}&#10;</code></pre>

<p>It uses this little utility function:</p>
<pre class="snippet" data-lang="c"><code>&#10;static void closeFile(FILE** file)&#10;{&#10;  // Already closed.&#10;  if (*file == NULL) return;&#10;&#10;  fclose(*file);&#10;  *file = NULL;&#10;}&#10;</code></pre>

<p>This closes the file (if it&rsquo;s not already closed) and also nulls out the file
handle so that we don&rsquo;t try to use the file after it&rsquo;s been closed.</p>
<h3>Binding the foreign methods <a href="#binding-the-foreign-methods" name="binding-the-foreign-methods" class="header-anchor">#</a></h3>
<p>That&rsquo;s the foreign <em>class</em> part. Now we have a couple of foreign <em>methods</em> to
handle. The host tells the VM how to find them by giving Wren a pointer to this
function:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenForeignMethodFn bindForeignMethod(WrenVM* vm, const char* module,&#10;    const char* className, bool isStatic, const char* signature)&#10;{&#10;  if (strcmp(className, &quot;File&quot;) == 0)&#10;  {&#10;    if (!isStatic &amp;&amp; strcmp(signature, &quot;write(_)&quot;) == 0)&#10;    {&#10;      return fileWrite;&#10;    }&#10;&#10;    if (!isStatic &amp;&amp; strcmp(signature, &quot;close()&quot;) == 0)&#10;    {&#10;      return fileClose;&#10;    }&#10;  }&#10;&#10;  // Unknown method.&#10;  return NULL;&#10;}&#10;</code></pre>

<p>When Wren calls this, we look at the class and method name to figure out which
method it&rsquo;s binding, and then return a pointer to the appropriate function. The
foreign method for writing to the file is:</p>
<pre class="snippet" data-lang="c"><code>&#10;void fileWrite(WrenVM* vm)&#10;{&#10;  FILE** file = (FILE**)wrenGetSlotForeign(vm, 0);&#10;&#10;  // Make sure the file is still open.&#10;  if (*file == NULL)&#10;  {&#10;    wrenSetSlotString(vm, 0, &quot;Cannot write to a closed file.&quot;);&#10;    wrenAbortFiber(vm, 0);&#10;    return;&#10;  }&#10;&#10;  const char* text = wrenGetSlotString(vm, 1);&#10;  fwrite(text, sizeof(char), strlen(text), *file);&#10;}&#10;</code></pre>

<p>We use <code>wrenGetSlotForeign()</code> to pull the foreign data out of the slot array.
Since this method is called on the file itself, the foreign object is in slot
zero. We take the resulting pointer and cast it to a pointer of the proper type.
Again, because our foreign data is <em>itself</em> a pointer, we get a pointer to a
pointer.</p>
<p>We do a little sanity checking to make sure the user isn&rsquo;t writing to a file
they already closed. If not, we call <code>fwrite()</code> to write to the file.</p>
<p>The other method is <code>close()</code> to let them explicitly close the file:</p>
<pre class="snippet" data-lang="c"><code>&#10;void fileClose(WrenVM* vm)&#10;{&#10;  FILE** file = (FILE**)wrenGetSlotForeign(vm, 0);&#10;  closeFile(file);&#10;}&#10;</code></pre>

<p>It uses the same helper we defined above. And that&rsquo;s it, a complete foreign
class with a finalizer and a couple of foreign methods. In Wren, you can use it
like so:</p>
<pre class="snippet"><code>&#10;var file = File.create(&quot;some/path.txt&quot;)&#10;file.write(&quot;some text&quot;)&#10;file.close()&#10;</code></pre>

<p>Pretty neat, right? The resulting class looks and feels like a normal Wren
class, but it has the functionality and much of the performance of native C
code.</p>
<p><a class="right" href="/docs/wren/v0-4-0/en/01-guide/21-embedding-configuring-the-vm/">Configuring the VM &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/18-embedding-calling-c-from-wren/">&larr; Calling C from Wren</a></p>
</div>
