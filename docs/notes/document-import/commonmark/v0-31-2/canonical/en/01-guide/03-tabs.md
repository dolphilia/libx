---
title: "Tabs and Insecure Characters"
description: "Rules and original examples from CommonMark 0.31.2."
documentId: "commonmark:0.31.2:03-tabs"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="tabs">
<span class="number">2.2</span>Tabs
</h3><p>Tabs in lines are not expanded to <a href="/docs/commonmark/v0-31-2/en/01-guide/02-characters-and-lines/#space">spaces</a>.  However,
in contexts where spaces help to define block structure,
tabs behave as if they were replaced by spaces with a tab stop
of 4 characters.</p><p>Thus, for example, a tab can be used instead of four spaces
in an indented code block.  (Note, however, that internal
tabs are passed through as literal tabs, not expanded to
spaces.)</p><div class="commonmark-example" id="example-1">
<div class="examplenum">
<a href="#example-1">Example 1</a>
</div>
<div class="column">
<pre><code class="language-text">&#9;foo&#9;baz&#9;&#9;bim&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#9;baz&#9;&#9;bim&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-2">
<div class="examplenum">
<a href="#example-2">Example 2</a>
</div>
<div class="column">
<pre><code class="language-text">  &#9;foo&#9;baz&#9;&#9;bim&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#9;baz&#9;&#9;bim&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-3">
<div class="examplenum">
<a href="#example-3">Example 3</a>
</div>
<div class="column">
<pre><code class="language-text">    a&#9;a&#10;    ὐ&#9;a&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;a&#9;a&#10;ὐ&#9;a&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>In the following example, a continuation paragraph of a list
item is indented with a tab; this has exactly the same effect
as indentation with four spaces would:</p><div class="commonmark-example" id="example-4">
<div class="examplenum">
<a href="#example-4">Example 4</a>
</div>
<div class="column">
<pre><code class="language-text">  - foo&#10;&#10;&#9;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;&#10;&lt;p&gt;foo&lt;/p&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-5">
<div class="examplenum">
<a href="#example-5">Example 5</a>
</div>
<div class="column">
<pre><code class="language-text">- foo&#10;&#10;&#9;&#9;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;&#10;&lt;p&gt;foo&lt;/p&gt;&#10;&lt;pre&gt;&lt;code&gt;  bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><p>Normally the <code>&gt;</code> that begins a block quote may be followed
optionally by a space, which is not considered part of the
content.  In the following case <code>&gt;</code> is followed by a tab,
which is treated as if it were expanded into three spaces.
Since one of these spaces is considered part of the
delimiter, <code>foo</code> is considered to be indented six spaces
inside the block quote context, so we get an indented
code block starting with two spaces.</p><div class="commonmark-example" id="example-6">
<div class="examplenum">
<a href="#example-6">Example 6</a>
</div>
<div class="column">
<pre><code class="language-text">&gt;&#9;&#9;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;pre&gt;&lt;code&gt;  foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;/blockquote&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-7">
<div class="examplenum">
<a href="#example-7">Example 7</a>
</div>
<div class="column">
<pre><code class="language-text">-&#9;&#9;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;&#10;&lt;pre&gt;&lt;code&gt;  foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-8">
<div class="examplenum">
<a href="#example-8">Example 8</a>
</div>
<div class="column">
<pre><code class="language-text">    foo&#10;&#9;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#10;bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-9">
<div class="examplenum">
<a href="#example-9">Example 9</a>
</div>
<div class="column">
<pre><code class="language-text"> - foo&#10;   - bar&#10;&#9; - baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;foo&#10;&lt;ul&gt;&#10;&lt;li&gt;bar&#10;&lt;ul&gt;&#10;&lt;li&gt;baz&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-10">
<div class="examplenum">
<a href="#example-10">Example 10</a>
</div>
<div class="column">
<pre><code class="language-text">#&#9;Foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;Foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-11">
<div class="examplenum">
<a href="#example-11">Example 11</a>
</div>
<div class="column">
<pre><code class="language-text">*&#9;*&#9;*&#9;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><h3 class="definition" id="insecure-characters">
<span class="number">2.3</span>Insecure characters
</h3><p>For security reasons, the Unicode character <code>U+0000</code> must be replaced
with the REPLACEMENT CHARACTER (<code>U+FFFD</code>).</p>
</div>
