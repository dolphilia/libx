---
title: "Calling C from Wren"
documentId: "wren:embedding/calling-c-from-wren.html"
order: 18
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Calling C from Wren</h1>
<p>When we are ensconced within the world of Wren, the external C world is
&ldquo;foreign&rdquo; to us. There are two reasons we might want to bring some foreign
flavor into our VM:</p>
<ul>
<li>We want to execute code written in C.</li>
<li>We want to store raw C data.</li>
</ul>
<p>Since Wren is object-oriented, behavior lives in methods, so for the former we
have <strong>foreign methods</strong>. Likewise, data lives in objects, so for the latter, we
define <strong>foreign classes</strong>. This page is about the first, foreign methods. The
<a href="/docs/wren/v0-4-0/en/01-guide/20-embedding-storing-c-data/">next page</a> covers foreign classes.</p>
<p>A foreign method looks to Wren like a regular method. It is defined on a Wren
class, it has a name and signature, and calls to it are dynamically dispatched.
The only difference is that the <em>body</em> of the method is written in C.</p>
<p>A foreign method is declared in Wren like so:</p>
<pre class="snippet"><code>&#10;class Math {&#10;  foreign static add(a, b)&#10;}&#10;</code></pre>

<p>The <code>foreign</code> keyword tells Wren that the method <code>add()</code> is declared on <code>Math</code>,
but implemented in C. Both static and instance methods can be foreign.</p>
<h2>Binding Foreign Methods <a href="#binding-foreign-methods" name="binding-foreign-methods" class="header-anchor">#</a></h2>
<p>When you call a foreign method, Wren needs to figure out which C function to
execute. This process is called <em>binding</em>. Binding is performed on-demand by the
VM. When a class that declares a foreign method is executed &ndash; when the <code>class</code>
statement itself is evaluated &ndash; the VM asks the host application for the C
function that should be used for the foreign method.</p>
<p>It does this through the <code>bindForeignMethodFn</code> callback you give it when you
first <a href="/docs/wren/v0-4-0/en/01-guide/21-embedding-configuring-the-vm/">configure the VM</a>. This callback isn&rsquo;t the foreign method itself.
It&rsquo;s the binding function your app uses to <em>look up</em> foreign methods.</p>
<p>Its signature is:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenForeignMethodFn bindForeignMethodFn(&#10;    WrenVM* vm,&#10;    const char* module,&#10;    const char* className,&#10;    bool isStatic,&#10;    const char* signature);&#10;</code></pre>

<p>Every time a foreign method is first declared, the VM invokes this callback. It
passes in the module containing the class declaration, the name of the class
containing the method, the method&rsquo;s signature, and whether or not it&rsquo;s a static
method. In the above example, it would pass something like:</p>
<pre class="snippet" data-lang="c"><code>&#10;bindForeignMethodFn(vm, &quot;main&quot;, &quot;Math&quot;, true, &quot;add(_,_)&quot;);&#10;</code></pre>

<p>When you configure the VM, you give it a C callback that looks up the
appropriate function for the given foreign method and returns a pointer to it.
Something like:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenForeignMethodFn bindForeignMethod(&#10;    WrenVM* vm,&#10;    const char* module,&#10;    const char* className,&#10;    bool isStatic,&#10;    const char* signature)&#10;{&#10;  if (strcmp(module, &quot;main&quot;) == 0)&#10;  {&#10;    if (strcmp(className, &quot;Math&quot;) == 0)&#10;    {&#10;      if (isStatic &amp;&amp; strcmp(signature, &quot;add(_,_)&quot;) == 0)&#10;      {&#10;        return mathAdd; // C function for Math.add(_,_).&#10;      }&#10;      // Other foreign methods on Math...&#10;    }&#10;    // Other classes in main...&#10;  }&#10;  // Other modules...&#10;}&#10;</code></pre>

<p>This implementation is pretty tedious, but you get the idea. Feel free to do
something more clever here in your host application.</p>
<p>The important part is that it returns a pointer to a C function to use for that
foreign method. Wren does this binding step <em>once</em> when the class definition is
first executed. It then keeps the function pointer you return and associates it
with that method. This way, <em>calls</em> to the foreign method are fast.</p>
<h2>Implementing a Foreign Method <a href="#implementing-a-foreign-method" name="implementing-a-foreign-method" class="header-anchor">#</a></h2>
<p>All C functions for foreign methods have the same signature:</p>
<pre class="snippet" data-lang="c"><code>&#10;void foreignMethod(WrenVM* vm);&#10;</code></pre>

<p>Arguments passed from Wren are not passed as C arguments, and the method&rsquo;s
return value is not a C return value. Instead &ndash; you guessed it &ndash; we go through
the <a href="/docs/wren/v0-4-0/en/01-guide/17-embedding-slots-and-handles/">slot array</a>.</p>
<p>When a foreign method is called from Wren, the VM sets up the slot array with
the receiver and arguments to the call. As in calling Wren from C, the receiver
object is in slot zero, and arguments are in consecutive slots after that.</p>
<p>You use the slot API to read those arguments, and then perform whatever work you
want to in C. If you want the foreign method to return a value, place it in slot
zero. Like so:</p>
<pre class="snippet" data-lang="c"><code>&#10;void mathAdd(WrenVM* vm)&#10;{&#10;  double a = wrenGetSlotDouble(vm, 1);&#10;  double b = wrenGetSlotDouble(vm, 2);&#10;  wrenSetSlotDouble(vm, 0, a + b);&#10;}&#10;</code></pre>

<p>While your foreign method is executing, the VM is completely suspended. No other
fibers run until your foreign method returns. You should <em>not</em> try to resume the
VM from within a foreign method by calling <code>wrenCall()</code> or <code>wrenInterpret()</code>.
The VM is not re-entrant.</p>
<p>This covers foreign behavior, but what about foreign <em>state</em>? For that, we need
a foreign <em>class</em>&hellip;</p>
<p><a class="right" href="/docs/wren/v0-4-0/en/01-guide/20-embedding-storing-c-data/">Storing C Data &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/19-embedding-calling-wren-from-c/">&larr; Calling Wren from C</a></p>
</div>
