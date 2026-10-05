---
title: "Lists"
documentId: "wren:lists.html"
order: 5
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Lists</h1>
<p>A list is a compound object that holds a collection of elements identified by
integer index. You can create a list by placing a sequence of comma-separated
expressions inside square brackets:</p>
<pre class="snippet"><code>&#10;[1, &quot;banana&quot;, true]&#10;</code></pre>

<p>Here, we&rsquo;ve created a list of three elements. Notice that the elements don&rsquo;t
have to be the same type.</p>
<h2>Accessing elements <a href="#accessing-elements" name="accessing-elements" class="header-anchor">#</a></h2>
<p>You can access an element from a list by calling the <a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#subscripts">subscript
operator</a> on it with the index of the
element you want. Like most languages, indexes start at zero:</p>
<pre class="snippet"><code>&#10;var trees = [&quot;cedar&quot;, &quot;birch&quot;, &quot;oak&quot;, &quot;willow&quot;]&#10;System.print(trees[0]) //&gt; cedar&#10;System.print(trees[1]) //&gt; birch&#10;</code></pre>

<p>Negative indices counts backwards from the end:</p>
<pre class="snippet"><code>&#10;System.print(trees[-1]) //&gt; willow&#10;System.print(trees[-2]) //&gt; oak&#10;</code></pre>

<p>It&rsquo;s a runtime error to pass an index outside of the bounds of the list. If you
don&rsquo;t know what those bounds are, you can find out using count:</p>
<pre class="snippet"><code>&#10;System.print(trees.count) //&gt; 4&#10;</code></pre>

<h2>Slices and ranges <a href="#slices-and-ranges" name="slices-and-ranges" class="header-anchor">#</a></h2>
<p>Sometimes you want to copy a chunk of elements from a list. You can do that by
passing a <a href="/docs/wren/v0-4-0/en/01-guide/04-values/#ranges">range</a> to the subscript operator, like so:</p>
<pre class="snippet"><code>&#10;System.print(trees[1..2]) //&gt; [birch, oak]&#10;</code></pre>

<p>This returns a new list containing the elements of the original list whose
indices are within the given range. Both inclusive and exclusive ranges work
and do what you expect.</p>
<p>Negative bounds also work like they do when passing a single number, so to copy
a list, you can just do:</p>
<pre class="snippet"><code>&#10;trees[0..-1]&#10;</code></pre>

<h2>Adding elements <a href="#adding-elements" name="adding-elements" class="header-anchor">#</a></h2>
<p>Lists are <em>mutable</em>, meaning their contents can be changed. You can swap out an
existing element in the list using the subscript setter:</p>
<pre class="snippet"><code>&#10;trees[1] = &quot;spruce&quot;&#10;System.print(trees[1]) //&gt; spruce&#10;</code></pre>

<p>It&rsquo;s an error to set an element that&rsquo;s out of bounds. To grow a list, you can
use <code>add</code> to append a single item to the end:</p>
<pre class="snippet"><code>&#10;trees.add(&quot;maple&quot;)&#10;System.print(trees.count) //&gt; 5&#10;</code></pre>

<p>You can insert a new element at a specific position using <code>insert</code>:</p>
<pre class="snippet"><code>&#10;trees.insert(2, &quot;hickory&quot;)&#10;</code></pre>

<p>The first argument is the index to insert at, and the second is the value to
insert. All elements following the inserted one will be pushed down to
make room for it.</p>
<p>It&rsquo;s valid to &ldquo;insert&rdquo; after the last element in the list, but only <em>right</em>
after it. Like other methods, you can use a negative index to count from the
back. Doing so counts back from the size of the list <em>after</em> it&rsquo;s grown by one:</p>
<pre class="snippet"><code>&#10;var letters = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]&#10;letters.insert(3, &quot;d&quot;)   // OK: inserts at end.&#10;System.print(letters)    //&gt; [a, b, c, d]&#10;letters.insert(-2, &quot;e&quot;)  // Counts back from size after insert.&#10;System.print(letters)    //&gt; [a, b, c, e, d]&#10;</code></pre>

<h2>Adding lists together <a href="#adding-lists-together" name="adding-lists-together" class="header-anchor">#</a></h2>
<p>Lists have the ability to be added together via the <code>+</code> operator. This is often known as concatenation.</p>
<pre class="snippet"><code>&#10;var letters = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]&#10;var other = [&quot;d&quot;, &quot;e&quot;, &quot;f&quot;]&#10;var combined = letters + other&#10;System.print(combined)  //&gt; [a, b, c, d, e, f]&#10;</code></pre>

<h2>Removing elements <a href="#removing-elements" name="removing-elements" class="header-anchor">#</a></h2>
<p>The opposite of <code>insert</code> is <code>removeAt</code>. It removes a single element from a
given position in the list. </p>
<p>To remove a specific <em>value</em> instead, use <code>remove</code>. The first value that 
matches using regular equality will be removed.</p>
<p>In both cases, all following items are shifted up to fill in the gap.</p>
<pre class="snippet"><code>&#10;var letters = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]&#10;letters.removeAt(1)&#10;System.print(letters) //&gt; [a, c, d]&#10;letters.remove(&quot;a&quot;)&#10;System.print(letters) //&gt; [c, d]&#10;</code></pre>

<p>Both the <code>remove</code> and <code>removeAt</code> method return the removed item:</p>
<pre class="snippet"><code>&#10;System.print(letters.removeAt(1)) //&gt; c&#10;</code></pre>

<p>If <code>remove</code> couldn&rsquo;t find the value in the list, it returns null:</p>
<pre class="snippet"><code>&#10;System.print(letters.remove(&quot;not found&quot;)) //&gt; null&#10;</code></pre>

<p>If you want to remove everything from the list, you can clear it:</p>
<pre class="snippet"><code>&#10;trees.clear()&#10;System.print(trees) //&gt; []&#10;</code></pre>

<p><br><hr>
<a class="right" href="/docs/wren/v0-4-0/en/01-guide/06-maps/">Maps &rarr;</a>
<a href="/docs/wren/v0-4-0/en/01-guide/04-values/">&larr; Values</a></p>
</div>
