---
title: "Paragraphs and Blank Lines"
description: "Rules and original examples from CommonMark 0.31.2."
documentId: "commonmark:0.31.2:14-paragraphs-and-blank-lines"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="paragraphs">
<span class="number">4.8</span>Paragraphs
</h3><p>A sequence of non-blank lines that cannot be interpreted as other
kinds of blocks forms a <a class="definition" href="#paragraph" id="paragraph">paragraph</a>.
The contents of the paragraph are the result of parsing the
paragraph’s raw content as inlines.  The paragraph’s raw content
is formed by concatenating the lines and removing initial and final
spaces or tabs.</p><p>A simple example with two paragraphs:</p><div class="commonmark-example" id="example-219">
<div class="examplenum">
<a href="#example-219">Example 219</a>
</div>
<div class="column">
<pre><code class="language-text">aaa&#10;&#10;bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&lt;/p&gt;&#10;&lt;p&gt;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Paragraphs can contain multiple lines, but no blank lines:</p><div class="commonmark-example" id="example-220">
<div class="examplenum">
<a href="#example-220">Example 220</a>
</div>
<div class="column">
<pre><code class="language-text">aaa&#10;bbb&#10;&#10;ccc&#10;ddd&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&#10;bbb&lt;/p&gt;&#10;&lt;p&gt;ccc&#10;ddd&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Multiple blank lines between paragraphs have no effect:</p><div class="commonmark-example" id="example-221">
<div class="examplenum">
<a href="#example-221">Example 221</a>
</div>
<div class="column">
<pre><code class="language-text">aaa&#10;&#10;&#10;bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&lt;/p&gt;&#10;&lt;p&gt;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Leading spaces or tabs are skipped:</p><div class="commonmark-example" id="example-222">
<div class="examplenum">
<a href="#example-222">Example 222</a>
</div>
<div class="column">
<pre><code class="language-text">  aaa&#10; bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&#10;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Lines after the first may be indented any amount, since indented
code blocks cannot interrupt paragraphs.</p><div class="commonmark-example" id="example-223">
<div class="examplenum">
<a href="#example-223">Example 223</a>
</div>
<div class="column">
<pre><code class="language-text">aaa&#10;             bbb&#10;                                       ccc&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&#10;bbb&#10;ccc&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>However, the first line may be preceded by up to three spaces of indentation.
Four spaces of indentation is too many:</p><div class="commonmark-example" id="example-224">
<div class="examplenum">
<a href="#example-224">Example 224</a>
</div>
<div class="column">
<pre><code class="language-text">   aaa&#10;bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&#10;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-225">
<div class="examplenum">
<a href="#example-225">Example 225</a>
</div>
<div class="column">
<pre><code class="language-text">    aaa&#10;bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Final spaces or tabs are stripped before inline parsing, so a paragraph
that ends with two or more spaces will not end with a <a href="https://spec.commonmark.org/0.31.2/#hard-line-break">hard line
break</a>:</p><div class="commonmark-example" id="example-226">
<div class="examplenum">
<a href="#example-226">Example 226</a>
</div>
<div class="column">
<pre><code class="language-text">aaa     &#10;bbb     &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&lt;br /&gt;&#10;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><h3 class="definition" id="blank-lines">
<span class="number">4.9</span>Blank lines
</h3><p><a href="#blank-lines">Blank lines</a> between block-level elements are ignored,
except for the role they play in determining whether a <a href="https://spec.commonmark.org/0.31.2/#list">list</a>
is <a href="https://spec.commonmark.org/0.31.2/#tight">tight</a> or <a href="https://spec.commonmark.org/0.31.2/#loose">loose</a>.</p><p>Blank lines at the beginning and end of the document are also ignored.</p><div class="commonmark-example" id="example-227">
<div class="examplenum">
<a href="#example-227">Example 227</a>
</div>
<div class="column">
<pre><code class="language-text">  &#10;&#10;aaa&#10;  &#10;&#10;# aaa&#10;&#10;  &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;aaa&lt;/p&gt;&#10;&lt;h1&gt;aaa&lt;/h1&gt;&#10;</code></pre>
</div>
</div>
</div>
