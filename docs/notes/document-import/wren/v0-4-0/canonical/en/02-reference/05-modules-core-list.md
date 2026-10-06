---
title: "List Class (English original)"
documentId: "wren:modules/core/list.html"
order: 5
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">List Class (English original)</h1>
<p>Extends <a href="/docs/wren/v0-4-0/en/02-reference/11-modules-core-sequence/">Sequence</a>.</p>
<p>An indexable contiguous collection of elements. More details <a href="/docs/wren/v0-4-0/en/01-guide/05-lists/">here</a>.</p>
<h2>Static Methods <a href="#static-methods" name="static-methods" class="header-anchor">#</a></h2>
<h3>List.<strong>filled</strong>(size, element) <a href="#list.filled(size,-element)" name="list.filled(size,-element)" class="header-anchor">#</a></h3>
<p>Creates a new list with <code>size</code> elements, all set to <code>element</code>.</p>
<p>It is a runtime error if <code>size</code> is not a non-negative integer.</p>
<h3>List.<strong>new</strong>() <a href="#list.new()" name="list.new()" class="header-anchor">#</a></h3>
<p>Creates a new empty list. Equivalent to <code>[]</code>.</p>
<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<h3><strong>add</strong>(item) <a href="#add(item)" name="add(item)" class="header-anchor">#</a></h3>
<p>Appends <code>item</code> to the end of the list. Returns the added item.</p>
<h3><strong>addAll</strong>(other) <a href="#addall(other)" name="addall(other)" class="header-anchor">#</a></h3>
<p>Appends each element of <code>other</code> in the same order to the end of the list. <code>other</code> must be <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#the-iterator-protocol">an iterable</a>.</p>
<pre class="snippet"><code>&#10;var list = [0, 1, 2, 3, 4]&#10;list.addAll([5, 6])&#10;System.print(list) //&gt; [0, 1, 2, 3, 4, 5, 6]&#10;</code></pre>

<p>Returns the added items.</p>
<h3><strong>clear</strong>() <a href="#clear()" name="clear()" class="header-anchor">#</a></h3>
<p>Removes all elements from the list.</p>
<h3><strong>count</strong> <a href="#count" name="count" class="header-anchor">#</a></h3>
<p>The number of elements in the list.</p>
<h3><strong>indexOf</strong>(value) <a href="#indexof(value)" name="indexof(value)" class="header-anchor">#</a></h3>
<p>Returns the index of <code>value</code> in the list, if found. If not found, returns -1.</p>
<pre class="snippet"><code>&#10;var list = [0, 1, 2, 3, 4]&#10;System.print(list.indexOf(3)) //&gt; 3&#10;System.print(list.indexOf(20)) //&gt; -1&#10;</code></pre>

<h3><strong>insert</strong>(index, item) <a href="#insert(index,-item)" name="insert(index,-item)" class="header-anchor">#</a></h3>
<p>Inserts the <code>item</code> at <code>index</code> in the list.</p>
<pre class="snippet"><code>&#10;var list = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]&#10;list.insert(1, &quot;e&quot;)&#10;System.print(list) //&gt; [a, e, b, c, d]&#10;</code></pre>

<p>The <code>index</code> may be one past the last index in the list to append an element.</p>
<pre class="snippet"><code>&#10;var list = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]&#10;list.insert(3, &quot;d&quot;)&#10;System.print(list) //&gt; [a, b, c, d]&#10;</code></pre>

<p>If <code>index</code> is negative, it counts backwards from the end of the list. It bases this on the length of the list <em>after</em> inserted the element, so that <code>-1</code> will append the element, not insert it before the last element.</p>
<pre class="snippet"><code>&#10;var list = [&quot;a&quot;, &quot;b&quot;]&#10;list.insert(-1, &quot;d&quot;)&#10;list.insert(-2, &quot;c&quot;)&#10;System.print(list) //&gt; [a, b, c, d]&#10;</code></pre>

<p>Returns the inserted item.</p>
<pre class="snippet"><code>&#10;System.print([&quot;a&quot;, &quot;c&quot;].insert(1, &quot;b&quot;)) //&gt; b&#10;</code></pre>

<p>It is a runtime error if the index is not an integer or is out of bounds.</p>
<h3><strong>iterate</strong>(iterator), <strong>iteratorValue</strong>(iterator) <a href="#iterate(iterator),-iteratorvalue(iterator)" name="iterate(iterator),-iteratorvalue(iterator)" class="header-anchor">#</a></h3>
<p>Implements the <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#the-iterator-protocol">iterator protocol</a> for iterating over the elements in the
list.</p>
<h3><strong>remove</strong>(value) <a href="#remove(value)" name="remove(value)" class="header-anchor">#</a></h3>
<p>Removes the first value found in the list that matches the given <code>value</code>, 
using regular equality to compare them. All trailing elements
are shifted up to fill in where the removed element was.</p>
<pre class="snippet"><code>&#10;var list = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]&#10;list.remove(&quot;b&quot;)&#10;System.print(list) //&gt; [a, c, d]&#10;</code></pre>

<p>Returns the removed value, if found.
If the value is not found in the list, returns null.</p>
<pre class="snippet"><code>&#10;System.print([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;].remove(&quot;b&quot;)) //&gt; b&#10;System.print([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;].remove(&quot;not found&quot;)) //&gt; null&#10;</code></pre>

<h3><strong>removeAt</strong>(index) <a href="#removeat(index)" name="removeat(index)" class="header-anchor">#</a></h3>
<p>Removes the element at <code>index</code>. If <code>index</code> is negative, it counts backwards
from the end of the list where <code>-1</code> is the last element. All trailing elements
are shifted up to fill in where the removed element was.</p>
<pre class="snippet"><code>&#10;var list = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;]&#10;list.removeAt(1)&#10;System.print(list) //&gt; [a, c, d]&#10;</code></pre>

<p>Returns the removed item.</p>
<pre class="snippet"><code>&#10;System.print([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;].removeAt(1)) //&gt; b&#10;</code></pre>

<p>It is a runtime error if the index is not an integer or is out of bounds.</p>
<h3><strong>sort</strong>(), <strong>sort</strong>(comparer) <a href="#sort(),-sort(comparer)" name="sort(),-sort(comparer)" class="header-anchor">#</a></h3>
<p>Sorts the elements of a list in-place; altering the list. The default sort is implemented using the quicksort algorithm.</p>
<pre class="snippet"><code>&#10;var list = [4, 1, 3, 2].sort()&#10;System.print(list) //&gt; [1, 2, 3, 4]&#10;</code></pre>

<p>A comparison function <code>comparer</code> can be provided to customise the element sorting. The comparison function must return a boolean value specifying the order in which elements should appear in the list.</p>
<p>The comparison function accepts two arguments <code>a</code> and <code>b</code>, two values to compare, and must return a boolean indicating the inequality between the arguments. If the function returns true, the first argument <code>a</code> will appear before the second <code>b</code> in the sorted results.</p>
<p>A compare function like <code>{|a, b| true }</code> will always put <code>a</code> before <code>b</code>. The default compare function is <code>{|a, b| a &lt; b }</code>.</p>
<pre class="snippet"><code>&#10;var list = [9, 6, 8, 7]&#10;list.sort {|a, b| a &lt; b}&#10;System.print(list) //&gt; [6, 7, 8, 9]&#10;</code></pre>

<p>It is a runtime error if <code>comparer</code> is not a function.</p>
<h3><strong>swap</strong>(index0, index1) <a href="#swap(index0,-index1)" name="swap(index0,-index1)" class="header-anchor">#</a></h3>
<p>Swaps values inside the list around. Puts the value from <code>index0</code> in <code>index1</code>,
and the value from <code>index1</code> at <code>index0</code> in the list.</p>
<pre class="snippet"><code>&#10;var list = [0, 1, 2, 3, 4]&#10;list.swap(0, 3)&#10;System.print(list) //&gt; [3, 1, 2, 0, 4]&#10;</code></pre>

<h3><strong>[</strong>index<strong>]</strong> operator <a href="#[index]-operator" name="[index]-operator" class="header-anchor">#</a></h3>
<p>Gets the element at <code>index</code>. If <code>index</code> is negative, it counts backwards from
the end of the list where <code>-1</code> is the last element.</p>
<pre class="snippet"><code>&#10;var list = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]&#10;System.print(list[1]) //&gt; b&#10;</code></pre>

<p>If <code>index</code> is a <a href="/docs/wren/v0-4-0/en/02-reference/10-modules-core-range/">Range</a>, a new list is populated from the elements
in the range.</p>
<pre class="snippet"><code>&#10;var list = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]&#10;System.print(list[0..1]) //&gt; [a, b]&#10;</code></pre>

<p>You can use <code>list[0..-1]</code> to shallow-copy a list.</p>
<p>It is a runtime error if the index is not an integer or range, or is out of bounds.</p>
<h3><strong>[</strong>index<strong>]=</strong>(item) operator <a href="#[index]=(item)-operator" name="[index]=(item)-operator" class="header-anchor">#</a></h3>
<p>Replaces the element at <code>index</code> with <code>item</code>. If <code>index</code> is negative, it counts
backwards from the end of the list where <code>-1</code> is the last element.</p>
<pre class="snippet"><code>&#10;var list = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]&#10;list[1] = &quot;new&quot;&#10;System.print(list) //&gt; [a, new, c]&#10;</code></pre>

<p>It is a runtime error if the index is not an integer or is out of bounds.</p>
<h3><strong>+</strong>(other) operator <a href="#+(other)-operator" name="+(other)-operator" class="header-anchor">#</a></h3>
<p>Appends a list to the end of the list (concatenation). <code>other</code> must be <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#the-iterator-protocol">an iterable</a>.</p>
<pre class="snippet"><code>&#10;var letters = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]&#10;var other = [&quot;d&quot;, &quot;e&quot;, &quot;f&quot;]&#10;var combined = letters + other&#10;System.print(combined)  //&gt; [a, b, c, d, e, f]&#10;</code></pre>

<h3><strong>*</strong>(count) operator <a href="#\(count)-operator" name="\(count)-operator" class="header-anchor">#</a></h3>
<p>Creates a new list by repeating this one <code>count</code> times. It is a runtime error if <code>count</code> is not a non-negative integer.</p>
<pre class="snippet"><code>&#10;var digits = [1, 2]&#10;var tripleDigits = digits * 3&#10;System.print(tripleDigits) //&gt; [1, 2, 1, 2, 1, 2] &#10;</code></pre>
</div>
