---
title: "主題区切り"
description: "CommonMark 0.31.2の規則と原典の対照例。"
documentId: "commonmark:0.31.2:07-thematic-breaks"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h2 class="definition" data-source-heading="chapter" id="leaf-blocks"><span class="number">4</span>葉ブロック</h2><p>この節では、Markdown文書を構成するさまざまな種類の葉ブロックについて説明します。</p><h3 class="definition" id="thematic-breaks"><span class="number">4.1</span>主題区切り</h3><p>任意で最大3個のスペースによる字下げを置いた後に、同じ<code>-</code>、<code>_</code>、または<code>*</code>という文字を3個以上並べた行は、<a class="definition" href="#thematic-break" id="thematic-break">主題区切り</a>になります。それぞれの文字の後には、任意の数のスペースまたはタブを置いてかまいません。</p><div class="commonmark-example" id="example-43">
<div class="examplenum">
<a href="#example-43">例43</a>
</div>
<div class="column">
<pre><code class="language-text">***&#10;---&#10;___&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;&lt;hr /&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>使用できない文字の例です。</p><div class="commonmark-example" id="example-44">
<div class="examplenum">
<a href="#example-44">例44</a>
</div>
<div class="column">
<pre><code class="language-text">+++&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;+++&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-45">
<div class="examplenum">
<a href="#example-45">例45</a>
</div>
<div class="column">
<pre><code class="language-text">===&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;===&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>文字の数が足りない例です。</p><div class="commonmark-example" id="example-46">
<div class="examplenum">
<a href="#example-46">例46</a>
</div>
<div class="column">
<pre><code class="language-text">--&#10;**&#10;__&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;--&#10;**&#10;__&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>最大3個のスペースによる字下げが許されます。</p><div class="commonmark-example" id="example-47">
<div class="examplenum">
<a href="#example-47">例47</a>
</div>
<div class="column">
<pre><code class="language-text"> ***&#10;  ***&#10;   ***&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;&lt;hr /&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>4個のスペースによる字下げは多すぎます。</p><div class="commonmark-example" id="example-48">
<div class="examplenum">
<a href="#example-48">例48</a>
</div>
<div class="column">
<pre><code class="language-text">    ***&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;***&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-49">
<div class="examplenum">
<a href="#example-49">例49</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;    ***&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;***&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>文字は3個より多くてもかまいません。</p><div class="commonmark-example" id="example-50">
<div class="examplenum">
<a href="#example-50">例50</a>
</div>
<div class="column">
<pre><code class="language-text">_____________________________________&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>文字の間にスペースやタブを置けます。</p><div class="commonmark-example" id="example-51">
<div class="examplenum">
<a href="#example-51">例51</a>
</div>
<div class="column">
<pre><code class="language-text"> - - -&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-52">
<div class="examplenum">
<a href="#example-52">例52</a>
</div>
<div class="column">
<pre><code class="language-text"> **  * ** * ** * **&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-53">
<div class="examplenum">
<a href="#example-53">例53</a>
</div>
<div class="column">
<pre><code class="language-text">-     -      -      -&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>末尾にスペースやタブを置けます。</p><div class="commonmark-example" id="example-54">
<div class="examplenum">
<a href="#example-54">例54</a>
</div>
<div class="column">
<pre><code class="language-text">- - - -    &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>ただし、それ以外の文字を行に含めることはできません。</p><div class="commonmark-example" id="example-55">
<div class="examplenum">
<a href="#example-55">例55</a>
</div>
<div class="column">
<pre><code class="language-text">_ _ _ _ a&#10;&#10;a------&#10;&#10;---a---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;_ _ _ _ a&lt;/p&gt;&#10;&lt;p&gt;a------&lt;/p&gt;&#10;&lt;p&gt;---a---&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>スペースとタブ以外の文字は、すべて同じでなければなりません。したがって、次の例は主題区切りにはなりません。</p><div class="commonmark-example" id="example-56">
<div class="examplenum">
<a href="#example-56">例56</a>
</div>
<div class="column">
<pre><code class="language-text"> *-*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;em&gt;-&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>主題区切りの前後に空行を置く必要はありません。</p><div class="commonmark-example" id="example-57">
<div class="examplenum">
<a href="#example-57">例57</a>
</div>
<div class="column">
<pre><code class="language-text">- foo&#10;***&#10;- bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;hr /&gt;&#10;&lt;ul&gt;&#10;&lt;li&gt;bar&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><p>主題区切りは、段落を中断できます。</p><div class="commonmark-example" id="example-58">
<div class="examplenum">
<a href="#example-58">例58</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;***&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&lt;/p&gt;&#10;&lt;hr /&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>主題区切りとなるための上の条件を満たすハイフンの行が、<a href="/docs/commonmark/v0-31-2/ja/01-guide/09-setext-headings/#setext-heading">Setext見出し</a>の下線としても解釈できる場合は、<a href="/docs/commonmark/v0-31-2/ja/01-guide/09-setext-headings/#setext-heading">Setext見出し</a>としての解釈が優先されます。したがって、たとえば次の例は、段落の後に主題区切りが続いているのではなく、Setext見出しです。</p><div class="commonmark-example" id="example-59">
<div class="examplenum">
<a href="#example-59">例59</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;---&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&lt;/h2&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>ある行が主題区切りともリスト項目とも解釈できる場合は、主題区切りが優先されます。</p><div class="commonmark-example" id="example-60">
<div class="examplenum">
<a href="#example-60">例60</a>
</div>
<div class="column">
<pre><code class="language-text">* Foo&#10;* * *&#10;* Bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;Foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;hr /&gt;&#10;&lt;ul&gt;&#10;&lt;li&gt;Bar&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><p>リスト項目の中に主題区切りを入れたい場合は、別の箇条書き記号を使ってください。</p><div class="commonmark-example" id="example-61">
<div class="examplenum">
<a href="#example-61">例61</a>
</div>
<div class="column">
<pre><code class="language-text">- Foo&#10;- * * *&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;Foo&lt;/li&gt;&#10;&lt;li&gt;&#10;&lt;hr /&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div>
</div>
