---
title: "Sequence Class (English original)"
documentId: "wren:modules/core/sequence.html"
order: 11
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Sequence Class (English original)</h1>
<p>An abstract base class for any iterable object. Any class that implements the
core <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#the-iterator-protocol">iterator protocol</a> can extend this to get a number of helpful methods.</p>
<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<h3><strong>all</strong>(predicate) <a href="#all(predicate)" name="all(predicate)" class="header-anchor">#</a></h3>
<p>Tests whether all the elements in the sequence pass the <code>predicate</code>.</p>
<p>Iterates over the sequence, passing each element to the function <code>predicate</code>.
If it returns something <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#truth">false</a>, stops iterating
and returns the value. Otherwise, returns <code>true</code>.</p>
<pre class="snippet"><code>&#10;System.print([1, 2, 3].all {|n| n &gt; 2}) //&gt; false&#10;System.print([1, 2, 3].all {|n| n &lt; 4}) //&gt; true&#10;</code></pre>

<h3><strong>any</strong>(predicate) <a href="#any(predicate)" name="any(predicate)" class="header-anchor">#</a></h3>
<p>Tests whether any element in the sequence passes the <code>predicate</code>.</p>
<p>Iterates over the sequence, passing each element to the function <code>predicate</code>.
If it returns something <a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#truth">true</a>, stops iterating and
returns that value. Otherwise, returns <code>false</code>.</p>
<pre class="snippet"><code>&#10;System.print([1, 2, 3].any {|n| n &lt; 1}) //&gt; false&#10;System.print([1, 2, 3].any {|n| n &gt; 2}) //&gt; true&#10;</code></pre>

<h3><strong>contains</strong>(element) <a href="#contains(element)" name="contains(element)" class="header-anchor">#</a></h3>
<p>Returns whether the sequence contains any element equal to the given element.</p>
<h3><strong>count</strong> <a href="#count" name="count" class="header-anchor">#</a></h3>
<p>The number of elements in the sequence.</p>
<p>Unless a more efficient override is available, this will iterate over the
sequence in order to determine how many elements it contains.</p>
<h3><strong>count</strong>(predicate) <a href="#count(predicate)" name="count(predicate)" class="header-anchor">#</a></h3>
<p>Returns the number of elements in the sequence that pass the <code>predicate</code>.</p>
<p>Iterates over the sequence, passing each element to the function <code>predicate</code>
and counting the number of times the returned value evaluates to <code>true</code>.</p>
<pre class="snippet"><code>&#10;System.print([1, 2, 3].count {|n| n &gt; 2}) //&gt; 1&#10;System.print([1, 2, 3].count {|n| n &lt; 4}) //&gt; 3&#10;</code></pre>

<h3><strong>each</strong>(function) <a href="#each(function)" name="each(function)" class="header-anchor">#</a></h3>
<p>Iterates over the sequence, passing each element to the given <code>function</code>.</p>
<pre class="snippet"><code>&#10;[&quot;one&quot;, &quot;two&quot;, &quot;three&quot;].each {|word| System.print(word) }&#10;</code></pre>

<h3><strong>isEmpty</strong> <a href="#isempty" name="isempty" class="header-anchor">#</a></h3>
<p>Returns whether the sequence contains any elements.</p>
<p>This can be more efficient that <code>count == 0</code> because this does not iterate over
the entire sequence.</p>
<h3><strong>join</strong>(separator) <a href="#join(separator)" name="join(separator)" class="header-anchor">#</a></h3>
<p>Converts every element in the sequence to a string and then joins the results
together into a single string, each separated by <code>separator</code>.</p>
<p>It is a runtime error if <code>separator</code> is not a string.</p>
<h3><strong>join</strong>() <a href="#join()" name="join()" class="header-anchor">#</a></h3>
<p>Converts every element in the sequence to a string and then joins the results
together into a single string.</p>
<h3><strong>map</strong>(transformation) <a href="#map(transformation)" name="map(transformation)" class="header-anchor">#</a></h3>
<p>Creates a new sequence that applies the <code>transformation</code> to each element in the
original sequence while it is iterated.</p>
<pre class="snippet"><code>&#10;var doubles = [1, 2, 3].map {|n| n * 2 }&#10;for (n in doubles) {&#10;  System.print(n) //&gt; 2&#10;                  //&gt; 4&#10;                  //&gt; 6&#10;}&#10;</code></pre>

<p>The returned sequence is <em>lazy</em>. It only applies the mapping when you iterate
over the sequence, and it does so by holding a reference to the original
sequence.</p>
<p>This means you can use <code>map(_)</code> for things like infinite sequences or sequences
that have side effects when you iterate over them. But it also means that
changes to the original sequence will be reflected in the mapped sequence.</p>
<p>To force eager evaluation, just call <code>.toList</code> on the result.</p>
<pre class="snippet"><code>&#10;var numbers = [1, 2, 3]&#10;var doubles = numbers.map {|n| n * 2 }.toList&#10;numbers.add(4)&#10;System.print(doubles) //&gt; [2, 4, 6]&#10;</code></pre>

<h3><strong>reduce</strong>(function) <a href="#reduce(function)" name="reduce(function)" class="header-anchor">#</a></h3>
<p>Reduces the sequence down to a single value. <code>function</code> is a function that
takes two arguments, the accumulator and sequence item and returns the new
accumulator value. The accumulator is initialized from the first item in the
sequence. Then, the function is invoked on each remaining item in the sequence,
iteratively updating the accumulator.</p>
<p>It is a runtime error to call this on an empty sequence.</p>
<h3><strong>reduce</strong>(seed, function) <a href="#reduce(seed,-function)" name="reduce(seed,-function)" class="header-anchor">#</a></h3>
<p>Similar to above, but uses <code>seed</code> for the initial value of the accumulator. If
the sequence is empty, returns <code>seed</code>.</p>
<h3><strong>skip</strong>(count) <a href="#skip(count)" name="skip(count)" class="header-anchor">#</a></h3>
<p>Creates a new sequence that skips the first <code>count</code> elements of the original
sequence.</p>
<p>The returned sequence is <em>lazy</em>. The first <code>count</code> elements are only skipped
once you start to iterate the returned sequence. Changes to the original
sequence will be reflected in the filtered sequence.</p>
<h3><strong>take</strong>(count) <a href="#take(count)" name="take(count)" class="header-anchor">#</a></h3>
<p>Creates a new sequence that iterates only the first <code>count</code> elements of the
original sequence.</p>
<p>The returned sequence is <em>lazy</em>. Changes to the original sequence will be
reflected in the filtered sequence.</p>
<h3><strong>toList</strong> <a href="#tolist" name="tolist" class="header-anchor">#</a></h3>
<p>Creates a <a href="/docs/wren/v0-4-0/en/02-reference/05-modules-core-list/">list</a> containing all the elements in the sequence.</p>
<pre class="snippet"><code>&#10;System.print((1..3).toList)  //&gt; [1, 2, 3]&#10;</code></pre>

<p>If the sequence is already a list, this creates a copy of it.</p>
<h3><strong>where</strong>(predicate) <a href="#where(predicate)" name="where(predicate)" class="header-anchor">#</a></h3>
<p>Creates a new sequence containing only the elements from the original sequence
that pass the <code>predicate</code>.</p>
<p>During iteration, each element in the original sequence is passed to the
function <code>predicate</code>. If it returns <code>false</code>, the element is skipped.</p>
<pre class="snippet"><code>&#10;var odds = (1..6).where {|n| n % 2 == 1 }&#10;for (n in odds) {&#10;    System.print(n) //&gt; 1&#10;                    //&gt; 3&#10;                    //&gt; 5&#10;}&#10;</code></pre>

<p>The returned sequence is <em>lazy</em>. It only applies the filtering when you iterate
over the sequence, and it does so by holding a reference to the original
sequence.</p>
<p>This means you can use <code>where(_)</code> for things like infinite sequences or
sequences that have side effects when you iterate over them. But it also means
that changes to the original sequence will be reflected in the filtered
sequence.</p>
<p>To force eager evaluation, just call <code>.toList</code> on the result.</p>
<pre class="snippet"><code>&#10;var numbers = [1, 2, 3, 4, 5, 6]&#10;var odds = numbers.where {|n| n % 2 == 1 }.toList&#10;numbers.add(7)&#10;System.print(odds) //&gt; [1, 3, 5]&#10;</code></pre>
</div>
