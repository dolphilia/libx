---
title: "字下げによるコードブロック"
description: "CommonMark 0.31.2の規則と原典の対照例。"
documentId: "commonmark:0.31.2:10-indented-code-blocks"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="indented-code-blocks"><span class="number">4.4</span>字下げによるコードブロック</h3><p><a class="definition" href="#indented-code-block" id="indented-code-block">字下げによるコードブロック</a>は、空行で区切られた1個以上の<a href="#indented-chunk">字下げされたまとまり</a>からなります。<a class="definition" href="#indented-chunk" id="indented-chunk">字下げされたまとまり</a>とは、各行が4個以上のスペースで字下げされた、空行ではない行の並びです。コードブロックの内容は、末尾の<a href="/docs/commonmark/v0-31-2/ja/01-guide/02-characters-and-lines/#line-ending">行末</a>も含む各行の文字どおりの内容から、字下げの4個のスペースを取り除いたものです。字下げによるコードブロックには<a href="/docs/commonmark/v0-31-2/ja/01-guide/11-fenced-code-blocks/#info-string">情報文字列</a>はありません。</p><p>字下げによるコードブロックは段落を中断できないため、段落と、その後に続く字下げコードブロックの間には、空行が必要です。ただし、コードブロックと、その後に続く段落の間に空行は必要ありません。</p><div class="commonmark-example" id="example-107">
<div class="examplenum">
<a href="#example-107">例107</a>
</div>
<div class="column">
<pre><code class="language-text">    a simple&#10;      indented code block&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;a simple&#10;  indented code block&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>字下げをコードブロックとして解釈することと、内容が<a href="https://spec.commonmark.org/0.31.2/#list-items">リスト項目</a>に属すると解釈することの両方が可能な場合は、リスト項目としての解釈が優先されます。</p><div class="commonmark-example" id="example-108">
<div class="examplenum">
<a href="#example-108">例108</a>
</div>
<div class="column">
<pre><code class="language-text">  - foo&#10;&#10;    bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;&#10;&lt;p&gt;foo&lt;/p&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-109">
<div class="examplenum">
<a href="#example-109">例109</a>
</div>
<div class="column">
<pre><code class="language-text">1.  foo&#10;&#10;    - bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ol&gt;&#10;&lt;li&gt;&#10;&lt;p&gt;foo&lt;/p&gt;&#10;&lt;ul&gt;&#10;&lt;li&gt;bar&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;/li&gt;&#10;&lt;/ol&gt;&#10;</code></pre>
</div>
</div><p>コードブロックの内容は文字どおりのテキストで、Markdownとして解析されません。</p><div class="commonmark-example" id="example-110">
<div class="examplenum">
<a href="#example-110">例110</a>
</div>
<div class="column">
<pre><code class="language-text">    &lt;a/&gt;&#10;    *hi*&#10;&#10;    - one&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&amp;lt;a/&amp;gt;&#10;*hi*&#10;&#10;- one&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>次の例には、空行で区切られた3つのまとまりがあります。</p><div class="commonmark-example" id="example-111">
<div class="examplenum">
<a href="#example-111">例111</a>
</div>
<div class="column">
<pre><code class="language-text">    chunk1&#10;&#10;    chunk2&#10;  &#10; &#10; &#10;    chunk3&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;chunk1&#10;&#10;chunk2&#10;&#10;&#10;&#10;chunk3&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>4個のスペースによる字下げを超えて先頭にあるスペースやタブは、内容に含まれます。ブロック内部の空行でも同様です。</p><div class="commonmark-example" id="example-112">
<div class="examplenum">
<a href="#example-112">例112</a>
</div>
<div class="column">
<pre><code class="language-text">    chunk1&#10;      &#10;      chunk2&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;chunk1&#10;  &#10;  chunk2&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>字下げによるコードブロックは、段落を中断できません。このため、ぶら下げ字下げなどを使えます。</p><div class="commonmark-example" id="example-113">
<div class="examplenum">
<a href="#example-113">例113</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;    bar&#10;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>ただし、空行ではない行の字下げが4個のスペースより少なければ、その時点でコードブロックは終わります。したがって、字下げコードの直後に段落を置けます。</p><div class="commonmark-example" id="example-114">
<div class="examplenum">
<a href="#example-114">例114</a>
</div>
<div class="column">
<pre><code class="language-text">    foo&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>また、字下げコードは、ほかの種類のブロックの直前や直後にも置けます。</p><div class="commonmark-example" id="example-115">
<div class="examplenum">
<a href="#example-115">例115</a>
</div>
<div class="column">
<pre><code class="language-text"># Heading&#10;    foo&#10;Heading&#10;------&#10;    foo&#10;----&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;Heading&lt;/h1&gt;&#10;&lt;pre&gt;&lt;code&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;h2&gt;Heading&lt;/h2&gt;&#10;&lt;pre&gt;&lt;code&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>最初の行の前には、4個を超えるスペースによる字下げを置けます。</p><div class="commonmark-example" id="example-116">
<div class="examplenum">
<a href="#example-116">例116</a>
</div>
<div class="column">
<pre><code class="language-text">        foo&#10;    bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;    foo&#10;bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>字下げコードブロックの前後の空行は、ブロックには含まれません。</p><div class="commonmark-example" id="example-117">
<div class="examplenum">
<a href="#example-117">例117</a>
</div>
<div class="column">
<pre><code class="language-text">&#10;    &#10;    foo&#10;    &#10;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>末尾のスペースやタブは、コードブロックの内容に含まれます。</p><div class="commonmark-example" id="example-118">
<div class="examplenum">
<a href="#example-118">例118</a>
</div>
<div class="column">
<pre><code class="language-text">    foo  &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo  &#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div>
</div>
