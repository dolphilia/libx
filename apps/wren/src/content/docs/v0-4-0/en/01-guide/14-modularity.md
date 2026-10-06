---
title: "Modularity"
documentId: "wren:modularity.html"
order: 14
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Modularity</h1>
<p>Once you start writing programs that are more than little toys, you quickly run
into two problems:</p>
<ol>
<li>
<p>You want to break them down into multiple smaller files to make it easier to
   find your way around them.</p>
</li>
<li>
<p>You want to reuse pieces of them across different programs.</p>
</li>
</ol>
<p>To address those, Wren has a simple module system. A file containing Wren code
defines a <em>module</em>. A module can use the code defined in another module by
<em>importing</em> it. You can break big programs into smaller modules that you
import, and you can reuse code by having multiple programs share the use of a
single module.</p>
<p>Wren does not have a single global scope. Instead, each module has its own
top-level scope independent of all other modules. This means, for example, that
two modules can define a top-level variable with the same name without causing
a name collision. Each module is, well, modular.</p>
<h2>Importing, briefly <a href="#importing,-briefly" name="importing,-briefly" class="header-anchor">#</a></h2>
<p>When you run Wren and give it a file name to execute, the contents of that file
define the &ldquo;main&rdquo; module that execution starts at. To load and execute other
modules, you use an import statement:</p>
<pre class="snippet"><code>&#10;import &quot;beverages&quot; for Coffee, Tea&#10;</code></pre>

<p>This finds a module named &ldquo;beverages&rdquo; and executes its source code. Then, it
looks up two top-level variables, <code>Coffee</code> and <code>Tea</code> in <em>that</em> module and
creates new variables in <em>this</em> module with their values.</p>
<p>This statement can appear anywhere a variable declaration is allowed, even
inside blocks:</p>
<pre class="snippet"><code>&#10;if (thirsty) {&#10;  import &quot;beverages&quot; for Coffee, Tea&#10;}&#10;</code></pre>

<p>If you need to import a variable under a different name, you can use 
<code>import "..." for Name as OtherName</code>. This looks up the top-level variable
<code>Name</code> in <em>that</em> module, but declares a variable called <code>OtherName</code> in <em>this</em> module
with its value.</p>
<pre class="snippet"><code>&#10;import &quot;liquids&quot; for Water //Water is now taken&#10;import &quot;beverages&quot; for Coffee, Water as H2O, Tea&#10;// var water = H2O.new()&#10;</code></pre>

<p>If you want to load a module, but not bind any variables from it, you can omit
the <code>for</code> clause:</p>
<pre class="snippet"><code>&#10;import &quot;some_imperative_code&quot;&#10;</code></pre>

<p>That&rsquo;s the basic idea. Now let&rsquo;s break it down into each of the steps it
performs:</p>
<ol>
<li>Locate the source code for the module.</li>
<li>Execute the imported module&rsquo;s code.</li>
<li>Bind new variables in the importing module to values defined in the imported
   module.</li>
</ol>
<p>We&rsquo;ll go through each step:</p>
<h2>Locating a module <a href="#locating-a-module" name="locating-a-module" class="header-anchor">#</a></h2>
<p>The first thing you need to do to import a module is actually <em>find</em> the code
for it. The import specifies a <em>name</em>&mdash;some arbitrary string that is used
to uniquely identify the module. The embedding application controls how that
string is used to locate a blob of source code.</p>
<p>When the host application creates a new Wren VM, it provides a module loader
function:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenConfiguration config;&#10;config.loadModuleFn = loadModule;&#10;&#10;// Other configuration...&#10;&#10;WrenVM* vm = wrenNewVM(&amp;config);&#10;</code></pre>

<p>That function has this signature:</p>
<pre class="snippet" data-lang="c"><code>&#10;WrenLoadModuleResult WrenLoadModuleFn(WrenVM* vm, const char* name);&#10;</code></pre>

<p>Whenever a module is imported, the VM calls this and passes it the name of the
module. The embedder is expected to return the source code contents of the
module in a <code>WrenLoadModuleResult</code>. When you embed Wren in your app, you can handle
this however you want: reach out to the file system, look inside resources bundled
into your app, whatever.</p>
<p>You can return the source field as <code>NULL</code> from this function to indicate that a module
couldn&rsquo;t be found. When you do this, Wren will report it as a runtime error.</p>
<h3>The command-line loader <a href="#the-command-line-loader" name="the-command-line-loader" class="header-anchor">#</a></h3>
<p>The <a href="https://wren.io/cli/">Wren CLI command-line tool</a> has a very simple
lookup process. It appends the module name and &ldquo;.wren&rdquo; to the directory where
the main module was loaded and looks for that file. So, let&rsquo;s say you run:</p>
<pre><code>$ wren code/my_program.wren&#10;</code></pre>
<p>And that main module has:</p>
<pre class="snippet"><code>&#10;import &quot;some/module&quot;&#10;</code></pre>

<p>Then the command-line VM will try to find <code>/code/some/module.wren</code>. By
convention, forward slashes should be used as path separators, even on Windows,
to help ensure your scripts are platform-independent. (Forward slashes are a
valid separator on Windows, but backslashes are not valid on other OSes.)</p>
<h2>Executing the module <a href="#executing-the-module" name="executing-the-module" class="header-anchor">#</a></h2>
<p>Once we have the source code for a module, we need to run it. First, the VM
takes the <a href="/docs/wren/v0-4-0/en/01-guide/12-concurrency/">fiber</a> that is executing the <code>import</code> statement in the importing
module and pauses it.</p>
<p>Then it creates a new module object&mdash;a new fresh top-level scope,
basically&mdash;and a new fiber. It executes the new module&rsquo;s code in that
fiber and scope. The module can run whatever imperative code it wants and
define whatever top-level variables it wants.</p>
<p>When the module&rsquo;s code is done being executed and its fiber completes, the
suspended fiber for the importing module is resumed. This suspending and
resuming is recursive. So, if &ldquo;a&rdquo; imports &ldquo;b&rdquo; which imports &ldquo;c&rdquo;, both &ldquo;a&rdquo; and
&ldquo;b&rdquo; will be suspended while &ldquo;c&rdquo; is running. When &ldquo;c&rdquo; is done, &ldquo;b&rdquo; is resumed.
Then, when &ldquo;b&rdquo; completes, &ldquo;a&rdquo; is resumed.</p>
<p>Think of it like traversing the tree of imports, one node at a time. At any
given point in time, only one module&rsquo;s code is running.</p>
<h2>Binding variables <a href="#binding-variables" name="binding-variables" class="header-anchor">#</a></h2>
<p>Once the module is done executing, the last step is to actually <em>import</em> some
data from it. Any module can define &ldquo;top-level&rdquo; <a href="/docs/wren/v0-4-0/en/01-guide/09-variables/">variables</a>.
These are simply variables declared outside of any
<a href="/docs/wren/v0-4-0/en/01-guide/10-classes/#methods">method</a> or <a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">function</a>.</p>
<p>These are visible to anything inside the module, but they can also be
<em>exported</em> and used by other modules. When Wren executes an import like:</p>
<pre class="snippet"><code>&#10;import &quot;beverages&quot; for Coffee, Tea&#10;</code></pre>

<p>First it runs the &ldquo;beverages&rdquo; module. Then it goes through each of the variable
names in the <code>for</code> clause. For each one, it looks for a top-level variable with
that name in the imported module. If a variable with that name can&rsquo;t be found
in the imported module, it&rsquo;s a runtime error.</p>
<p>Otherwise, it gets the current value of the variable and defines a new variable
in the importing module with the same name and value. It&rsquo;s worth noting that
the importing module gets its <em>own</em> variable whose value is a snapshot of the
value of the imported variable at the time it was imported. If either module
later assigns to that variable, the other won&rsquo;t see it. It&rsquo;s not a &ldquo;live&rdquo;
connection.</p>
<p>In practice, most top-level variables are only assigned once anyway, so this
rarely makes a difference.</p>
<h2>Shared imports <a href="#shared-imports" name="shared-imports" class="header-anchor">#</a></h2>
<p>Earlier, I described a program&rsquo;s set of modules as a tree. Of course, it&rsquo;s only
a <em>tree</em> of modules if there are no <em>shared imports</em>. But consider a program
like:</p>
<pre class="snippet"><code>&#10;// main.wren&#10;import &quot;a&quot;&#10;import &quot;b&quot;&#10;&#10;// a.wren&#10;import &quot;shared&quot;&#10;&#10;// b.wren&#10;import &quot;shared&quot;&#10;&#10;// shared.wren&#10;System.print(&quot;Shared!&quot;)&#10;</code></pre>

<p>Here, &ldquo;a&rdquo; and &ldquo;b&rdquo; both want to use &ldquo;shared&rdquo;. If &ldquo;shared&rdquo; defines some top-level
state, we only want a single copy of that in memory. To handle this, a module&rsquo;s
code is only executed the <em>first</em> time it is loaded. After that, importing the
module again just looks up the previously loaded module.</p>
<p>Internally, Wren maintains a map of every module it has previously loaded. When
a module is imported, Wren looks for it in that map first before it calls out
to the embedder for its source.</p>
<p>In other words, in that list of steps above, there&rsquo;s an implicit zeroth step:
&ldquo;See if we already loaded the module and reuse it if we did&rdquo;. That means the
above program only prints &ldquo;Shared!&rdquo; once.</p>
<h2>Cyclic imports <a href="#cyclic-imports" name="cyclic-imports" class="header-anchor">#</a></h2>
<p>You can even have cycles in your imports, provided you&rsquo;re a bit careful with
them. The loading process, in detail, is:</p>
<ol>
<li>See if we have already created a module with the given name.</li>
<li>If so, use it.</li>
<li>Otherwise, create a new module with the name and store it in the module
   registry.</li>
<li>Create a fiber for it and execute its code.</li>
</ol>
<p>Note the order of the last two steps. When a module is loaded, it is added to
the registry <em>before</em> it is executed. This means if an import for that same
module is reached while the module itself or one of its imports is executing,
it will be found in the registry and the cycle is short-circuited.</p>
<p>For example:</p>
<pre class="snippet"><code>&#10;// main.wren&#10;import &quot;a&quot;&#10;&#10;// a.wren&#10;System.print(&quot;start a&quot;)&#10;import &quot;b&quot;&#10;System.print(&quot;end a&quot;)&#10;&#10;// b.wren&#10;System.print(&quot;start b&quot;)&#10;import &quot;a&quot;&#10;System.print(&quot;end b&quot;)&#10;</code></pre>

<p>This program runs successfully and prints:</p>
<pre><code>start a&#10;start b&#10;end b&#10;end a&#10;</code></pre>
<p>Where you have to be careful is binding variables. Consider:</p>
<pre class="snippet"><code>&#10;// main.wren&#10;import &quot;a&quot;&#10;&#10;// a.wren&#10;import &quot;b&quot; for B&#10;var A = &quot;a variable&quot;&#10;&#10;// b.wren&#10;import &quot;a&quot; for A&#10;var B = &quot;b variable&quot;&#10;</code></pre>

<p>The import of &ldquo;a&rdquo; in b.wren will fail here. If you trace the execution, you
get:</p>
<ol>
<li>Execute <code>import "a"</code> in &ldquo;main.wren&rdquo;. That suspends &ldquo;main.wren&rdquo;.</li>
<li>Execute <code>import "b"</code> in &ldquo;a.wren&rdquo;. That suspends &ldquo;a.wren&rdquo;.</li>
<li>Execute <code>import "a"</code> in &ldquo;b.wren&rdquo;. Since &ldquo;a&rdquo; is already in the module map,
   this does <em>not</em> suspend it.</li>
</ol>
<p>Instead, we look for a variable named <code>A</code> in that module. But it hasn&rsquo;t been
defined yet since &ldquo;a.wren&rdquo; is still sitting on the <code>import "b" for B</code> line
before the declaration. To get this to work, you would need to move the
variable declaration above the import:</p>
<pre class="snippet"><code>&#10;// main.wren&#10;import &quot;a&quot;&#10;&#10;// a.wren&#10;var A = &quot;a variable&quot;&#10;import &quot;b&quot; for B&#10;&#10;// b.wren&#10;import &quot;a&quot; for A&#10;var B = &quot;b variable&quot;&#10;</code></pre>

<p>Now when we run it, we get:</p>
<ol>
<li>Execute <code>import "a"</code> in &ldquo;main.wren&rdquo;. That suspends &ldquo;main.wren&rdquo;.</li>
<li>Define <code>A</code> in &ldquo;a.wren&rdquo;.</li>
<li>Execute <code>import "b"</code> in &ldquo;a.wren&rdquo;. That suspends &ldquo;a.wren&rdquo;.</li>
<li>Execute <code>import "a"</code> in &ldquo;b.wren&rdquo;. Since &ldquo;a&rdquo; is already in the module map,
   this does <em>not</em> suspend it. It looks up <code>A</code>, which has already been defined,
   and binds it.</li>
<li>Define <code>B</code> in &ldquo;b.wren&rdquo;.</li>
<li>Complete &ldquo;b.wren&rdquo;.</li>
<li>Look up <code>B</code> in &ldquo;b.wren&rdquo; and bind it in &ldquo;a.wren&rdquo;.</li>
<li>Resume &ldquo;a.wren&rdquo;.</li>
</ol>
<p>This sounds super hairy, but that&rsquo;s because cyclic dependencies are hairy in
general. The key point here is that Wren <em>can</em> handle them in the rare cases
where you need them.</p>
<p><br><hr>
<a href="/docs/wren/v0-4-0/en/01-guide/13-error-handling/">&larr; Error Handling</a></p>
</div>
