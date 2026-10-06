---
title: "Setext Headings"
description: "Rules and original examples from CommonMark 0.31.2."
documentId: "commonmark:0.31.2:09-setext-headings"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="setext-headings">
<span class="number">4.3</span>Setext headings
</h3><p>A <a class="definition" href="#setext-heading" id="setext-heading">setext heading</a> consists of one or more
lines of text, not interrupted by a blank line, of which the first line does not
have more than 3 spaces of indentation, followed by
a <a href="#setext-heading-underline">setext heading underline</a>.  The lines of text must be such
that, were they not followed by the setext heading underline,
they would be interpreted as a paragraph:  they cannot be
interpretable as a <a href="/docs/commonmark/v0-31-2/en/01-guide/11-fenced-code-blocks/#code-fence">code fence</a>, <a href="/docs/commonmark/v0-31-2/en/01-guide/08-atx-headings/#atx-headings">ATX heading</a>,
<a href="https://spec.commonmark.org/0.31.2/#block-quotes">block quote</a>, <a href="/docs/commonmark/v0-31-2/en/01-guide/07-thematic-breaks/#thematic-breaks">thematic break</a>,
<a href="https://spec.commonmark.org/0.31.2/#list-items">list item</a>, or <a href="/docs/commonmark/v0-31-2/en/01-guide/12-html-blocks/#html-blocks">HTML block</a>.</p><p>A <a class="definition" href="#setext-heading-underline" id="setext-heading-underline">setext heading underline</a> is a sequence of
<code>=</code> characters or a sequence of <code>-</code> characters, with no more than 3
spaces of indentation and any number of trailing spaces or tabs.</p><p>The heading is a level 1 heading if <code>=</code> characters are used in
the <a href="#setext-heading-underline">setext heading underline</a>, and a level 2 heading if <code>-</code>
characters are used.  The contents of the heading are the result
of parsing the preceding lines of text as CommonMark inline
content.</p><p>In general, a setext heading need not be preceded or followed by a
blank line.  However, it cannot interrupt a paragraph, so when a
setext heading comes after a paragraph, a blank line is needed between
them.</p><p>Simple examples:</p><div class="commonmark-example" id="example-80">
<div class="examplenum">
<a href="#example-80">Example 80</a>
</div>
<div class="column">
<pre><code class="language-text">Foo *bar*&#10;=========&#10;&#10;Foo *bar*&#10;---------&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;Foo &lt;em&gt;bar&lt;/em&gt;&lt;/h1&gt;&#10;&lt;h2&gt;Foo &lt;em&gt;bar&lt;/em&gt;&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p>The content of the header may span more than one line:</p><div class="commonmark-example" id="example-81">
<div class="examplenum">
<a href="#example-81">Example 81</a>
</div>
<div class="column">
<pre><code class="language-text">Foo *bar&#10;baz*&#10;====&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;Foo &lt;em&gt;bar&#10;baz&lt;/em&gt;&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>The contents are the result of parsing the headings’s raw
content as inlines.  The heading’s raw content is formed by
concatenating the lines and removing initial and final
spaces or tabs.</p><div class="commonmark-example" id="example-82">
<div class="examplenum">
<a href="#example-82">Example 82</a>
</div>
<div class="column">
<pre><code class="language-text">  Foo *bar&#10;baz*&#9;&#10;====&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;Foo &lt;em&gt;bar&#10;baz&lt;/em&gt;&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>The underlining can be any length:</p><div class="commonmark-example" id="example-83">
<div class="examplenum">
<a href="#example-83">Example 83</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;-------------------------&#10;&#10;Foo&#10;=&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&lt;/h2&gt;&#10;&lt;h1&gt;Foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>The heading content can be preceded by up to three spaces of indentation, and
need not line up with the underlining:</p><div class="commonmark-example" id="example-84">
<div class="examplenum">
<a href="#example-84">Example 84</a>
</div>
<div class="column">
<pre><code class="language-text">   Foo&#10;---&#10;&#10;  Foo&#10;-----&#10;&#10;  Foo&#10;  ===&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&lt;/h2&gt;&#10;&lt;h2&gt;Foo&lt;/h2&gt;&#10;&lt;h1&gt;Foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>Four spaces of indentation is too many:</p><div class="commonmark-example" id="example-85">
<div class="examplenum">
<a href="#example-85">Example 85</a>
</div>
<div class="column">
<pre><code class="language-text">    Foo&#10;    ---&#10;&#10;    Foo&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;Foo&#10;---&#10;&#10;Foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>The setext heading underline can be preceded by up to three spaces of
indentation, and may have trailing spaces or tabs:</p><div class="commonmark-example" id="example-86">
<div class="examplenum">
<a href="#example-86">Example 86</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;   ----      &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p>Four spaces of indentation is too many:</p><div class="commonmark-example" id="example-87">
<div class="examplenum">
<a href="#example-87">Example 87</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;    ---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;---&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>The setext heading underline cannot contain internal spaces or tabs:</p><div class="commonmark-example" id="example-88">
<div class="examplenum">
<a href="#example-88">Example 88</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;= =&#10;&#10;Foo&#10;--- -&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;= =&lt;/p&gt;&#10;&lt;p&gt;Foo&lt;/p&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>Trailing spaces or tabs in the content line do not cause a hard line break:</p><div class="commonmark-example" id="example-89">
<div class="examplenum">
<a href="#example-89">Example 89</a>
</div>
<div class="column">
<pre><code class="language-text">Foo  &#10;-----&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p>Nor does a backslash at the end:</p><div class="commonmark-example" id="example-90">
<div class="examplenum">
<a href="#example-90">Example 90</a>
</div>
<div class="column">
<pre><code class="language-text">Foo\&#10;----&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo\&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p>Since indicators of block structure take precedence over
indicators of inline structure, the following are setext headings:</p><div class="commonmark-example" id="example-91">
<div class="examplenum">
<a href="#example-91">Example 91</a>
</div>
<div class="column">
<pre><code class="language-text">`Foo&#10;----&#10;`&#10;&#10;&lt;a title="a lot&#10;---&#10;of dashes"/&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;`Foo&lt;/h2&gt;&#10;&lt;p&gt;`&lt;/p&gt;&#10;&lt;h2&gt;&amp;lt;a title=&amp;quot;a lot&lt;/h2&gt;&#10;&lt;p&gt;of dashes&amp;quot;/&amp;gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>The setext heading underline cannot be a <a href="https://spec.commonmark.org/0.31.2/#lazy-continuation-line">lazy continuation
line</a> in a list item or block quote:</p><div class="commonmark-example" id="example-92">
<div class="examplenum">
<a href="#example-92">Example 92</a>
</div>
<div class="column">
<pre><code class="language-text">&gt; Foo&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;p&gt;Foo&lt;/p&gt;&#10;&lt;/blockquote&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-93">
<div class="examplenum">
<a href="#example-93">Example 93</a>
</div>
<div class="column">
<pre><code class="language-text">&gt; foo&#10;bar&#10;===&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;p&gt;foo&#10;bar&#10;===&lt;/p&gt;&#10;&lt;/blockquote&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-94">
<div class="examplenum">
<a href="#example-94">Example 94</a>
</div>
<div class="column">
<pre><code class="language-text">- Foo&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;Foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>A blank line is needed between a paragraph and a following
setext heading, since otherwise the paragraph becomes part
of the heading’s content:</p><div class="commonmark-example" id="example-95">
<div class="examplenum">
<a href="#example-95">Example 95</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;Bar&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&#10;Bar&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p>But in general a blank line is not required before or after
setext headings:</p><div class="commonmark-example" id="example-96">
<div class="examplenum">
<a href="#example-96">Example 96</a>
</div>
<div class="column">
<pre><code class="language-text">---&#10;Foo&#10;---&#10;Bar&#10;---&#10;Baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;&lt;h2&gt;Foo&lt;/h2&gt;&#10;&lt;h2&gt;Bar&lt;/h2&gt;&#10;&lt;p&gt;Baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Setext headings cannot be empty:</p><div class="commonmark-example" id="example-97">
<div class="examplenum">
<a href="#example-97">Example 97</a>
</div>
<div class="column">
<pre><code class="language-text">&#10;====&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;====&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Setext heading text lines must not be interpretable as block
constructs other than paragraphs.  So, the line of dashes
in these examples gets interpreted as a thematic break:</p><div class="commonmark-example" id="example-98">
<div class="examplenum">
<a href="#example-98">Example 98</a>
</div>
<div class="column">
<pre><code class="language-text">---&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-99">
<div class="examplenum">
<a href="#example-99">Example 99</a>
</div>
<div class="column">
<pre><code class="language-text">- foo&#10;-----&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-100">
<div class="examplenum">
<a href="#example-100">Example 100</a>
</div>
<div class="column">
<pre><code class="language-text">    foo&#10;---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-101">
<div class="examplenum">
<a href="#example-101">Example 101</a>
</div>
<div class="column">
<pre><code class="language-text">&gt; foo&#10;-----&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;p&gt;foo&lt;/p&gt;&#10;&lt;/blockquote&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>If you want a heading with <code>&gt; foo</code> as its literal text, you can
use backslash escapes:</p><div class="commonmark-example" id="example-102">
<div class="examplenum">
<a href="#example-102">Example 102</a>
</div>
<div class="column">
<pre><code class="language-text">\&gt; foo&#10;------&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;&amp;gt; foo&lt;/h2&gt;&#10;</code></pre>
</div>
</div><p><strong>Compatibility note:</strong>  Most existing Markdown implementations
do not allow the text of setext headings to span multiple lines.
But there is no consensus about how to interpret</p><pre><code class="language-markdown">Foo&#10;bar&#10;---&#10;baz&#10;</code></pre><p>One can find four different interpretations:</p><ol>
<li>paragraph “Foo”, heading “bar”, paragraph “baz”</li>
<li>paragraph “Foo bar”, thematic break, paragraph “baz”</li>
<li>paragraph “Foo bar — baz”</li>
<li>heading “Foo bar”, paragraph “baz”</li>
</ol><p>We find interpretation 4 most natural, and interpretation 4
increases the expressive power of CommonMark, by allowing
multiline headings.  Authors who want interpretation 1 can
put a blank line after the first paragraph:</p><div class="commonmark-example" id="example-103">
<div class="examplenum">
<a href="#example-103">Example 103</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;&#10;bar&#10;---&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&lt;/p&gt;&#10;&lt;h2&gt;bar&lt;/h2&gt;&#10;&lt;p&gt;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Authors who want interpretation 2 can put blank lines around
the thematic break,</p><div class="commonmark-example" id="example-104">
<div class="examplenum">
<a href="#example-104">Example 104</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;bar&#10;&#10;---&#10;&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;bar&lt;/p&gt;&#10;&lt;hr /&gt;&#10;&lt;p&gt;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>or use a thematic break that cannot count as a <a href="#setext-heading-underline">setext heading
underline</a>, such as</p><div class="commonmark-example" id="example-105">
<div class="examplenum">
<a href="#example-105">Example 105</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;bar&#10;* * *&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;bar&lt;/p&gt;&#10;&lt;hr /&gt;&#10;&lt;p&gt;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Authors who want interpretation 3 can use backslash escapes:</p><div class="commonmark-example" id="example-106">
<div class="examplenum">
<a href="#example-106">Example 106</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;bar&#10;\---&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;bar&#10;---&#10;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div>
</div>
