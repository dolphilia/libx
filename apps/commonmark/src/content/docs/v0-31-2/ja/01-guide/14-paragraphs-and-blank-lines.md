---
title: "段落と空行"
description: "CommonMark 0.31.2の規則と原典の対照例。"
documentId: "commonmark:0.31.2:14-paragraphs-and-blank-lines"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="paragraphs"><span class="number">4.8</span>段落</h3><p>空行ではない行の並びで、ほかの種類のブロックとして解釈できないものは、<a class="definition" href="#paragraph" id="paragraph">段落</a>になります。段落の内容は、段落の生の内容をインラインとして解析した結果です。段落の生の内容は、各行をつなぎ、先頭と末尾のスペースやタブを取り除いて作ります。</p><p>2つの段落からなる単純な例です。</p><div class="commonmark-example" id="example-219">
<div class="examplenum">
<a href="#example-219">例219</a>
</div>
<div class="column">
<pre><code class="language-text">aaa&#10;&#10;bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&lt;/p&gt;&#10;&lt;p&gt;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>段落は複数行を含められますが、空行は含められません。</p><div class="commonmark-example" id="example-220">
<div class="examplenum">
<a href="#example-220">例220</a>
</div>
<div class="column">
<pre><code class="language-text">aaa&#10;bbb&#10;&#10;ccc&#10;ddd&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&#10;bbb&lt;/p&gt;&#10;&lt;p&gt;ccc&#10;ddd&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>段落の間に複数の空行があっても、効果は変わりません。</p><div class="commonmark-example" id="example-221">
<div class="examplenum">
<a href="#example-221">例221</a>
</div>
<div class="column">
<pre><code class="language-text">aaa&#10;&#10;&#10;bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&lt;/p&gt;&#10;&lt;p&gt;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>先頭のスペースやタブは読み飛ばされます。</p><div class="commonmark-example" id="example-222">
<div class="examplenum">
<a href="#example-222">例222</a>
</div>
<div class="column">
<pre><code class="language-text">  aaa&#10; bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&#10;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>字下げによるコードブロックは段落を中断できないため、2行目以降の字下げの量は任意です。</p><div class="commonmark-example" id="example-223">
<div class="examplenum">
<a href="#example-223">例223</a>
</div>
<div class="column">
<pre><code class="language-text">aaa&#10;             bbb&#10;                                       ccc&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&#10;bbb&#10;ccc&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>ただし、最初の行の前に置ける字下げは最大3個のスペースです。4個のスペースによる字下げは多すぎます。</p><div class="commonmark-example" id="example-224">
<div class="examplenum">
<a href="#example-224">例224</a>
</div>
<div class="column">
<pre><code class="language-text">   aaa&#10;bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&#10;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-225">
<div class="examplenum">
<a href="#example-225">例225</a>
</div>
<div class="column">
<pre><code class="language-text">    aaa&#10;bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>末尾のスペースやタブは、インライン解析の前に取り除かれます。そのため、2個以上のスペースで終わる段落でも、<a href="https://spec.commonmark.org/0.31.2/#hard-line-break">ハード改行</a>で終わることはありません。</p><div class="commonmark-example" id="example-226">
<div class="examplenum">
<a href="#example-226">例226</a>
</div>
<div class="column">
<pre><code class="language-text">aaa     &#10;bbb     &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&lt;br /&gt;&#10;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><h3 class="definition" id="blank-lines"><span class="number">4.9</span>空行</h3><p>ブロックレベルの要素の間の<a href="#blank-lines">空行</a>は、<a href="https://spec.commonmark.org/0.31.2/#list">リスト</a>が<a href="https://spec.commonmark.org/0.31.2/#tight">tight</a>か<a href="https://spec.commonmark.org/0.31.2/#loose">loose</a>かを決める役割を除いて、無視されます。</p><p>文書の先頭と末尾にある空行も、無視されます。</p><div class="commonmark-example" id="example-227">
<div class="examplenum">
<a href="#example-227">例227</a>
</div>
<div class="column">
<pre><code class="language-text">  &#10;&#10;aaa&#10;  &#10;&#10;# aaa&#10;&#10;  &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&lt;/p&gt;&#10;&lt;h1&gt;aaa&lt;/h1&gt;&#10;</code></pre>
</div>
</div>
</div>
