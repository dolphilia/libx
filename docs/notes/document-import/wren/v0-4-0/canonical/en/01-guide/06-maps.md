---
title: "Maps"
documentId: "wren:maps.html"
order: 6
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Maps</h1>
<p>A map is an <em>associative</em> collection. It holds a set of entries, each of which
maps a <em>key</em> to a <em>value</em>. The same data structure has a variety of names in
other languages: hash table, dictionary, association, table, etc.</p>
<p>You can create a map by placing a series of comma-separated entries inside
curly braces. Each entry is a key and a value separated by a colon:</p>
<pre class="snippet"><code>&#10;{&#10;  &quot;maple&quot;:  &quot;Sugar Maple (Acer Saccharum)&quot;,&#10;  &quot;larch&quot;:  &quot;Alpine Larch (Larix Lyallii)&quot;,&#10;  &quot;oak&quot;:    &quot;Red Oak (Quercus Rubra)&quot;,&#10;  &quot;fir&quot;:    &quot;Fraser Fir (Abies Fraseri)&quot;&#10;}&#10;</code></pre>

<p>This creates a map that associates a type of tree (key) to a specific 
tree within that family (value). Syntactically, in a map literal, keys 
can be any literal, a variable name, or a parenthesized expression. 
Values can be any expression. Here, we&rsquo;re using string literals for both keys 
and values.</p>
<p><em>Semantically</em>, values can be any object, and multiple keys may map to the same
value. </p>
<p>Keys have a few limitations. They must be one of the immutable built-in
<a href="/docs/wren/v0-4-0/en/01-guide/04-values/">value types</a> in Wren. That means a number, string, range, bool, or <code>null</code>.
You can also use a <a href="/docs/wren/v0-4-0/en/01-guide/10-classes/">class object</a> as a key (not an instance of that class, 
the actual class itself).</p>
<p>The reason for this limitation&mdash;and the reason maps are called &ldquo;<em>hash</em>
tables&rdquo; in other languages&mdash;is that each key is used to generate a numeric
<em>hash code</em>. This lets a map locate the value associated with a key in constant
time, even in very large maps. Since Wren only knows how to hash certain
built-in types, only those can be used as keys.</p>
<h2>Adding entries <a href="#adding-entries" name="adding-entries" class="header-anchor">#</a></h2>
<p>You add new key-value pairs to the map using the <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#subscripts">subscript operator</a>:</p>
<pre class="snippet"><code>&#10;var capitals = {}&#10;    capitals[&quot;Georgia&quot;] = &quot;Atlanta&quot;&#10;    capitals[&quot;Idaho&quot;] = &quot;Boise&quot;&#10;    capitals[&quot;Maine&quot;] = &quot;Augusta&quot;&#10;</code></pre>

<p>If the key isn&rsquo;t already present, this adds it and associates it with the given
value. If the key is already there, this just replaces its value.</p>
<h2>Looking up values <a href="#looking-up-values" name="looking-up-values" class="header-anchor">#</a></h2>
<p>To find the value associated with some key, again you use your friend the
subscript operator:</p>
<pre class="snippet"><code>&#10;System.print(capitals[&quot;Idaho&quot;]) //&gt; Boise&#10;</code></pre>

<p>If the key is present, this returns its value. Otherwise, it returns <code>null</code>. Of
course, <code>null</code> itself can also be used as a value, so seeing <code>null</code> here
doesn&rsquo;t necessarily mean the key wasn&rsquo;t found.</p>
<p>To tell definitively if a key exists, you can call <code>containsKey()</code>:</p>
<pre class="snippet"><code>&#10;var capitals = {&quot;Georgia&quot;: null}&#10;&#10;System.print(capitals[&quot;Georgia&quot;]) //&gt; null (though key exists)&#10;System.print(capitals[&quot;Idaho&quot;])   //&gt; null &#10;System.print(capitals.containsKey(&quot;Georgia&quot;)) //&gt; true&#10;System.print(capitals.containsKey(&quot;Idaho&quot;))   //&gt; false&#10;</code></pre>

<p>You can see how many entries a map contains using <code>count</code>:</p>
<pre class="snippet"><code>&#10;System.print(capitals.count) //&gt; 3&#10;</code></pre>

<h2>Removing entries <a href="#removing-entries" name="removing-entries" class="header-anchor">#</a></h2>
<p>To remove an entry from a map, call <code>remove()</code> and pass in the key for the
entry you want to delete:</p>
<pre class="snippet"><code>&#10;capitals.remove(&quot;Maine&quot;)&#10;System.print(capitals.containsKey(&quot;Maine&quot;)) //&gt; false&#10;</code></pre>

<p>If the key was found, this returns the value that was associated with it:</p>
<pre class="snippet"><code>&#10;System.print(capitals.remove(&quot;Georgia&quot;)) //&gt; Atlanta&#10;</code></pre>

<p>If the key wasn&rsquo;t in the map to begin with, <code>remove()</code> just returns <code>null</code>.</p>
<p>If you want to remove <em>everything</em> from the map, like with <a href="/docs/wren/v0-4-0/en/01-guide/05-lists/">lists</a>, you call
<code>clear()</code>:</p>
<pre class="snippet"><code>&#10;capitals.clear()&#10;System.print(capitals.count) //&gt; 0&#10;</code></pre>

<h2>Iterating over the contents <a href="#iterating-over-the-contents" name="iterating-over-the-contents" class="header-anchor">#</a></h2>
<p>The subscript operator works well for finding values when you know the key
you&rsquo;re looking for, but sometimes you want to see everything that&rsquo;s in the map.
You can use a regular for loop to iterate the contents, and map exposes two 
additional methods to access the contents: <code>keys</code> and <code>values</code>. </p>
<p>The <code>keys</code> method on a map returns a <a href="/docs/wren/v0-4-0/en/02-reference/11-modules-core-sequence/">Sequence</a> that <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#the-iterator-protocol">iterates</a> over all of
the keys in the map, and the <code>values</code> method returns one that iterates over the values.</p>
<p>Regardless of how you iterate, the <em>order</em> that things are iterated in 
isn&rsquo;t defined. Wren makes no promises about what order keys and values are 
iterated. All it promises is that every entry will appear exactly once.</p>
<p><strong>Iterating with for(entry in map)</strong> <br />
When you iterate a map with <code>for</code>, you&rsquo;ll be handed an <em>entry</em>, which contains
a <code>key</code> and a <code>value</code> field. That gives you the info for each element in the map.</p>
<pre class="snippet"><code>&#10;var birds = {&#10;  &quot;Arizona&quot;: &quot;Cactus wren&quot;,&#10;  &quot;Hawaii&quot;: &quot;Nēnē&quot;,&#10;  &quot;Ohio&quot;: &quot;Northern Cardinal&quot;&#10;}&#10;&#10;for (bird in birds) {&#10;  System.print(&quot;The state bird of %(bird.key) is %(bird.value)&quot;)&#10;}&#10;</code></pre>

<p><strong>Iterating using the keys</strong>   </p>
<p>You can also iterate over the keys and use each to look up its value:</p>
<pre class="snippet"><code>&#10;var birds = {&#10;  &quot;Arizona&quot;: &quot;Cactus wren&quot;,&#10;  &quot;Hawaii&quot;: &quot;Nēnē&quot;,&#10;  &quot;Ohio&quot;: &quot;Northern Cardinal&quot;&#10;}&#10;&#10;for (state in birds.keys) {&#10;  System.print(&quot;The state bird of %(state) is &quot; + birds[state])&#10;}&#10;</code></pre>

<p><br><hr>
<a class="right" href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/">Method Calls &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/05-lists/">&larr; Lists</a></p>
</div>
