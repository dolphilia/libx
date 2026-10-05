---
title: "Random Class (English original)"
documentId: "wren:modules/random/random.html"
order: 17
licenseSource: "wren-fixed"
toc: { maxLevel: 6 }
documentContext: [{"kind": "source", "html": "<p>Wren 0.4.0; fixed commit 4a18fc489f9ea3d253b20dd40f4cdad0d6bb40eb. By Robert Nystrom and Wren contributors. Unofficial Libx edition: complete English originals (41 articles and MIT licence), Japanese translation of 24 language/VM/use guides, 17 API originals untranslated. <a href=\"/docs/wren/notices/LICENSE.txt\">Original MIT notice</a>.</p><p>Wren 0.4.0の固定原文を静的に提供します。言語・VM・利用ガイド24ページが日本語訳の対象で、API 17ページは未翻訳の英語参照です。Libxの運用方針に基づき、見出し・内部リンク・静的な図表を調整しています。CLI・ブログ・実行デモ等は原典へのリンクで案内します。版の日付は0.4.0の公開記録です。</p>"}, {"kind": "editorial", "html": "<p>原著に残る未執筆・説明不足も保持しています。ClassesのTODOと不完全な例、組み込み/モジュールの説明や設定例の不整合は、固定版の原典と<a href=\"/docs/wren/notices/wren.h.txt\">公開ヘッダー原文</a>を参照してください。Metaモジュールの原API 2ページはTODOで未執筆です。Libxは欠けた説明を補作せず、元の例の実行や原著全体の技術的正しさを保証していません。</p><p>Original TODOs/incomplete examples remain in Classes and Meta API. Embedding/module prose and configuration examples have known inconsistencies; consult the fixed original and public header. The unresolved performance script is omitted while its fixed tables and bars are retained. Example programs are not executed by this edition.</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/wren/source/v0-4-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>"}]
---
<div class="wren-document">
<h1 id="page-title">Random Class (English original)</h1>
<p>A simple, fast pseudo-random number generator. Internally, it uses the <a href="https://en.wikipedia.org/wiki/Well_equidistributed_long-period_linear">well
equidistributed long-period linear PRNG</a> (WELL512a).</p>
<p>Each instance of the class generates a sequence of randomly distributed numbers
based on the internal state of the object. The state is initialized from a
<em>seed</em>. Two instances with the same seed generate the exact same sequence of
numbers.</p>
<p>It must be imported from the <a href="/docs/wren/v0-4-0/en/01-guide/15-modules/">random</a> module:</p>
<pre class="snippet"><code>&#10;    import &quot;random&quot; for Random&#10;</code></pre>

<h2>Constructors <a href="#constructors" name="constructors" class="header-anchor">#</a></h2>
<h3>Random.<strong>new</strong>() <a href="#random.new()" name="random.new()" class="header-anchor">#</a></h3>
<p>Creates a new generator whose state is seeded based on the current time.</p>
<pre class="snippet"><code>&#10;var random = Random.new()&#10;</code></pre>

<h3>Random.<strong>new</strong>(seed) <a href="#random.new(seed)" name="random.new(seed)" class="header-anchor">#</a></h3>
<p>Creates a new generator initialized with [seed]. The seed can either be a
number, or a non-empty sequence of numbers. If the sequnce has more than 16
elements, only the first 16 are used. If it has fewer, the elements are cycled
to generate 16 seed values.</p>
<pre class="snippet"><code>&#10;Random.new(12345)&#10;Random.new(&quot;appleseed&quot;.codePoints)&#10;</code></pre>

<h2>Methods <a href="#methods" name="methods" class="header-anchor">#</a></h2>
<h3><strong>float</strong>() <a href="#float()" name="float()" class="header-anchor">#</a></h3>
<p>Returns a floating point value between 0.0 and 1.0, including 0.0, but excluding
1.0.</p>
<pre class="snippet"><code>&#10;var random = Random.new(12345)&#10;System.print(random.float()) //&gt; 0.53178795980617&#10;System.print(random.float()) //&gt; 0.20180515043262&#10;System.print(random.float()) //&gt; 0.43371948658705&#10;</code></pre>

<h3><strong>float</strong>(end) <a href="#float(end)" name="float(end)" class="header-anchor">#</a></h3>
<p>Returns a floating point value between 0.0 and <code>end</code>, including 0.0 but
excluding <code>end</code>.</p>
<pre class="snippet"><code>&#10;var random = Random.new(12345)&#10;System.print(random.float(0))     //&gt; 0&#10;System.print(random.float(100))   //&gt; 20.180515043262&#10;System.print(random.float(-100))  //&gt; -43.371948658705&#10;</code></pre>

<h3><strong>float</strong>(start, end) <a href="#float(start,-end)" name="float(start,-end)" class="header-anchor">#</a></h3>
<p>Returns a floating point value between <code>start</code> and <code>end</code>, including <code>start</code> but
excluding <code>end</code>.</p>
<pre class="snippet"><code>&#10;var random = Random.new(12345)&#10;System.print(random.float(3, 4))    //&gt; 3.5317879598062&#10;System.print(random.float(-10, 10)) //&gt; -5.9638969913476&#10;System.print(random.float(-4, 2))   //&gt; -1.3976830804777&#10;</code></pre>

<h3><strong>int</strong>(end) <a href="#int(end)" name="int(end)" class="header-anchor">#</a></h3>
<p>Returns an integer between 0 and <code>end</code>, including 0 but excluding <code>end</code>.</p>
<pre class="snippet"><code>&#10;var random = Random.new(12345)&#10;System.print(random.int(1))    //&gt; 0&#10;System.print(random.int(10))   //&gt; 2&#10;System.print(random.int(-50))  //&gt; -22&#10;</code></pre>

<h3><strong>int</strong>(start, end) <a href="#int(start,-end)" name="int(start,-end)" class="header-anchor">#</a></h3>
<p>Returns an integer between <code>start</code> and <code>end</code>, including <code>start</code> but excluding
<code>end</code>.</p>
<pre class="snippet"><code>&#10;var random = Random.new(12345)&#10;System.print(random.int(3, 4))    //&gt; 3&#10;System.print(random.int(-10, 10)) //&gt; -6&#10;System.print(random.int(-4, 2))   //&gt; -2&#10;</code></pre>

<h3><strong>sample</strong>(list) <a href="#sample(list)" name="sample(list)" class="header-anchor">#</a></h3>
<p>Selects a random element from <code>list</code>.</p>
<h3><strong>sample</strong>(list, count) <a href="#sample(list,-count)" name="sample(list,-count)" class="header-anchor">#</a></h3>
<p>Samples <code>count</code> randomly chosen unique elements from <code>list</code>.</p>
<p>This uses &ldquo;random without replacement&rdquo; sampling&mdash;no index in the list will
be selected more than once.</p>
<p>Returns a new list of the selected elements.</p>
<p>It is an error if <code>count</code> is greater than the number of elements in the list.</p>
<h3><strong>shuffle</strong>(list) <a href="#shuffle(list)" name="shuffle(list)" class="header-anchor">#</a></h3>
<p>Randomly shuffles the elements in <code>list</code>. The items are randomly re-ordered in
place.</p>
<pre class="snippet"><code>&#10;var random = Random.new(12345)&#10;var list = (1..5).toList&#10;random.shuffle(list)&#10;System.print(list) //&gt; [3, 2, 4, 1, 5]&#10;</code></pre>

<p>Uses the Fisher-Yates algorithm to ensure that all permutations are chosen
with equal probability.</p>
<p>Keep in mind that a list with even a modestly large number of elements has an
astronomically large number of permutations. For example, there are about 10^74
ways a deck of 56 cards can be shuffled. The random number generator&rsquo;s internal
state is not that large, which means there are many permutations it will never
generate.</p>
</div>
