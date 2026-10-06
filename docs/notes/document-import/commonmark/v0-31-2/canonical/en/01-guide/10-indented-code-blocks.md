---
title: "Indented Code Blocks"
description: "Rules and original examples from CommonMark 0.31.2."
documentId: "commonmark:0.31.2:10-indented-code-blocks"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="indented-code-blocks">
<span class="number">4.4</span>Indented code blocks
</h3><p>An <a class="definition" href="#indented-code-block" id="indented-code-block">indented code block</a> is composed of one or more
<a href="#indented-chunk">indented chunks</a> separated by blank lines.
An <a class="definition" href="#indented-chunk" id="indented-chunk">indented chunk</a> is a sequence of non-blank lines,
each preceded by four or more spaces of indentation. The contents of the code
block are the literal contents of the lines, including trailing
<a href="/docs/commonmark/v0-31-2/en/01-guide/02-characters-and-lines/#line-ending">line endings</a>, minus four spaces of indentation.
An indented code block has no <a href="/docs/commonmark/v0-31-2/en/01-guide/11-fenced-code-blocks/#info-string">info string</a>.</p><p>An indented code block cannot interrupt a paragraph, so there must be
a blank line between a paragraph and a following indented code block.
(A blank line is not needed, however, between a code block and a following
paragraph.)</p><div class="commonmark-example" id="example-107">
<div class="examplenum">
<a href="#example-107">Example 107</a>
</div>
<div class="column">
<pre><code class="language-text">    a simple&#10;      indented code block&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;a simple&#10;  indented code block&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>If there is any ambiguity between an interpretation of indentation
as a code block and as indicating that material belongs to a <a href="https://spec.commonmark.org/0.31.2/#list-items">list
item</a>, the list item interpretation takes precedence:</p><div class="commonmark-example" id="example-108">
<div class="examplenum">
<a href="#example-108">Example 108</a>
</div>
<div class="column">
<pre><code class="language-text">  - foo&#10;&#10;    bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;&#10;&lt;p&gt;foo&lt;/p&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-109">
<div class="examplenum">
<a href="#example-109">Example 109</a>
</div>
<div class="column">
<pre><code class="language-text">1.  foo&#10;&#10;    - bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ol&gt;&#10;&lt;li&gt;&#10;&lt;p&gt;foo&lt;/p&gt;&#10;&lt;ul&gt;&#10;&lt;li&gt;bar&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;/li&gt;&#10;&lt;/ol&gt;&#10;</code></pre>
</div>
</div><p>The contents of a code block are literal text, and do not get parsed
as Markdown:</p><div class="commonmark-example" id="example-110">
<div class="examplenum">
<a href="#example-110">Example 110</a>
</div>
<div class="column">
<pre><code class="language-text">    &lt;a/&gt;&#10;    *hi*&#10;&#10;    - one&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&amp;lt;a/&amp;gt;&#10;*hi*&#10;&#10;- one&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Here we have three chunks separated by blank lines:</p><div class="commonmark-example" id="example-111">
<div class="examplenum">
<a href="#example-111">Example 111</a>
</div>
<div class="column">
<pre><code class="language-text">    chunk1&#10;&#10;    chunk2&#10;  &#10; &#10; &#10;    chunk3&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;chunk1&#10;&#10;chunk2&#10;&#10;&#10;&#10;chunk3&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Any initial spaces or tabs beyond four spaces of indentation will be included in
the content, even in interior blank lines:</p><div class="commonmark-example" id="example-112">
<div class="examplenum">
<a href="#example-112">Example 112</a>
</div>
<div class="column">
<pre><code class="language-text">    chunk1&#10;      &#10;      chunk2&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;chunk1&#10;  &#10;  chunk2&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>An indented code block cannot interrupt a paragraph.  (This
allows hanging indents and the like.)</p><div class="commonmark-example" id="example-113">
<div class="examplenum">
<a href="#example-113">Example 113</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;    bar&#10;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>However, any non-blank line with fewer than four spaces of indentation ends
the code block immediately.  So a paragraph may occur immediately
after indented code:</p><div class="commonmark-example" id="example-114">
<div class="examplenum">
<a href="#example-114">Example 114</a>
</div>
<div class="column">
<pre><code class="language-text">    foo&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>And indented code can occur immediately before and after other kinds of
blocks:</p><div class="commonmark-example" id="example-115">
<div class="examplenum">
<a href="#example-115">Example 115</a>
</div>
<div class="column">
<pre><code class="language-text"># Heading&#10;    foo&#10;Heading&#10;------&#10;    foo&#10;----&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;Heading&lt;/h1&gt;&#10;&lt;pre&gt;&lt;code&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;h2&gt;Heading&lt;/h2&gt;&#10;&lt;pre&gt;&lt;code&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>The first line can be preceded by more than four spaces of indentation:</p><div class="commonmark-example" id="example-116">
<div class="examplenum">
<a href="#example-116">Example 116</a>
</div>
<div class="column">
<pre><code class="language-text">        foo&#10;    bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;    foo&#10;bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Blank lines preceding or following an indented code block
are not included in it:</p><div class="commonmark-example" id="example-117">
<div class="examplenum">
<a href="#example-117">Example 117</a>
</div>
<div class="column">
<pre><code class="language-text">&#10;    &#10;    foo&#10;    &#10;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Trailing spaces or tabs are included in the code block’s content:</p><div class="commonmark-example" id="example-118">
<div class="examplenum">
<a href="#example-118">Example 118</a>
</div>
<div class="column">
<pre><code class="language-text">    foo  &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo  &#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div>
</div>
