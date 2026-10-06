<div class="commonmark-original-content">
<h2 class="definition" data-source-heading="chapter" id="introduction">
<span class="number">1</span>Introduction
</h2><h3 class="definition" id="what-is-markdown-">
<span class="number">1.1</span>What is Markdown?
</h3><p>Markdown is a plain text format for writing structured documents,
based on conventions for indicating formatting in email
and usenet posts.  It was developed by John Gruber (with
help from Aaron Swartz) and released in 2004 in the form of a
<a href="https://daringfireball.net/projects/markdown/syntax">syntax description</a>
and a Perl script (<code>Markdown.pl</code>) for converting Markdown to
HTML.  In the next decade, dozens of implementations were
developed in many languages.  Some extended the original
Markdown syntax with conventions for footnotes, tables, and
other document elements.  Some allowed Markdown documents to be
rendered in formats other than HTML.  Websites like Reddit,
StackOverflow, and GitHub had millions of people using Markdown.
And Markdown started to be used beyond the web, to author books,
articles, slide shows, letters, and lecture notes.</p><p>What distinguishes Markdown from many other lightweight markup
syntaxes, which are often easier to write, is its readability.
As Gruber writes:</p><blockquote>
<p>The overriding design goal for Markdown’s formatting syntax is
to make it as readable as possible. The idea is that a
Markdown-formatted document should be publishable as-is, as
plain text, without looking like it’s been marked up with tags
or formatting instructions.
(<a href="https://daringfireball.net/projects/markdown/">https://daringfireball.net/projects/markdown/</a>)</p>
</blockquote><p>The point can be illustrated by comparing a sample of
<a href="https://asciidoc.org/">AsciiDoc</a> with
an equivalent sample of Markdown.  Here is a sample of
AsciiDoc from the AsciiDoc manual:</p><pre><code>1. List item one.&#10;+&#10;List item one continued with a second paragraph followed by an&#10;Indented block.&#10;+&#10;.................&#10;$ ls *.sh&#10;$ mv *.sh ~/tmp&#10;.................&#10;+&#10;List item continued with a third paragraph.&#10;&#10;2. List item two continued with an open block.&#10;+&#10;--&#10;This paragraph is part of the preceding list item.&#10;&#10;a. This list is nested and does not require explicit item&#10;continuation.&#10;+&#10;This paragraph is part of the preceding list item.&#10;&#10;b. List item b.&#10;&#10;This paragraph belongs to item two of the outer list.&#10;--&#10;</code></pre><p>And here is the equivalent in Markdown:</p><pre><code>1.  List item one.&#10;&#10;    List item one continued with a second paragraph followed by an&#10;    Indented block.&#10;&#10;        $ ls *.sh&#10;        $ mv *.sh ~/tmp&#10;&#10;    List item continued with a third paragraph.&#10;&#10;2.  List item two continued with an open block.&#10;&#10;    This paragraph is part of the preceding list item.&#10;&#10;    1. This list is nested and does not require explicit item continuation.&#10;&#10;       This paragraph is part of the preceding list item.&#10;&#10;    2. List item b.&#10;&#10;    This paragraph belongs to item two of the outer list.&#10;</code></pre><p>The AsciiDoc version is, arguably, easier to write. You don’t need
to worry about indentation.  But the Markdown version is much easier
to read.  The nesting of list items is apparent to the eye in the
source, not just in the processed document.</p><h3 class="definition" id="why-is-a-spec-needed-">
<span class="number">1.2</span>Why is a spec needed?
</h3><p>John Gruber’s <a href="https://daringfireball.net/projects/markdown/syntax">canonical description of Markdown’s
syntax</a>
does not specify the syntax unambiguously.  Here are some examples of
questions it does not answer:</p><ol>
<li>
<p>How much indentation is needed for a sublist?  The spec says that
continuation paragraphs need to be indented four spaces, but is
not fully explicit about sublists.  It is natural to think that
they, too, must be indented four spaces, but <code>Markdown.pl</code> does
not require that.  This is hardly a “corner case,” and divergences
between implementations on this issue often lead to surprises for
users in real documents. (See <a href="https://web.archive.org/web/20170611172104/http://article.gmane.org/gmane.text.markdown.general/1997">this comment by John
Gruber</a>.)</p>
</li>
<li>
<p>Is a blank line needed before a block quote or heading?
Most implementations do not require the blank line.  However,
this can lead to unexpected results in hard-wrapped text, and
also to ambiguities in parsing (note that some implementations
put the heading inside the blockquote, while others do not).
(John Gruber has also spoken <a href="https://web.archive.org/web/20170611172104/http://article.gmane.org/gmane.text.markdown.general/2146">in favor of requiring the blank
lines</a>.)</p>
</li>
<li>
<p>Is a blank line needed before an indented code block?
(<code>Markdown.pl</code> requires it, but this is not mentioned in the
documentation, and some implementations do not require it.)</p>
<pre><code class="language-markdown">paragraph&#10;    code?&#10;</code></pre>
</li>
<li>
<p>What is the exact rule for determining when list items get
wrapped in <code>&lt;p&gt;</code> tags?  Can a list be partially “loose” and partially
“tight”?  What should we do with a list like this?</p>
<pre><code class="language-markdown">1. one&#10;&#10;2. two&#10;3. three&#10;</code></pre>
<p>Or this?</p>
<pre><code class="language-markdown">1.  one&#10;    - a&#10;&#10;    - b&#10;2.  two&#10;</code></pre>
<p>(There are some relevant comments by John Gruber
<a href="https://web.archive.org/web/20170611172104/http://article.gmane.org/gmane.text.markdown.general/2554">here</a>.)</p>
</li>
<li>
<p>Can list markers be indented?  Can ordered list markers be right-aligned?</p>
<pre><code class="language-markdown"> 8. item 1&#10; 9. item 2&#10;10. item 2a&#10;</code></pre>
</li>
<li>
<p>Is this one list with a thematic break in its second item,
or two lists separated by a thematic break?</p>
<pre><code class="language-markdown">* a&#10;* * * * *&#10;* b&#10;</code></pre>
</li>
<li>
<p>When list markers change from numbers to bullets, do we have
two lists or one?  (The Markdown syntax description suggests two,
but the perl scripts and many other implementations produce one.)</p>
<pre><code class="language-markdown">1. fee&#10;2. fie&#10;-  foe&#10;-  fum&#10;</code></pre>
</li>
<li>
<p>What are the precedence rules for the markers of inline structure?
For example, is the following a valid link, or does the code span
take precedence ?</p>
<pre><code class="language-markdown">[a backtick (`)](/url) and [another backtick (`)](/url).&#10;</code></pre>
</li>
<li>
<p>What are the precedence rules for markers of emphasis and strong
emphasis?  For example, how should the following be parsed?</p>
<pre><code class="language-markdown">*foo *bar* baz*&#10;</code></pre>
</li>
<li>
<p>What are the precedence rules between block-level and inline-level
structure?  For example, how should the following be parsed?</p>
<pre><code class="language-markdown">- `a long code span can contain a hyphen like this&#10;  - and it can screw things up`&#10;</code></pre>
</li>
<li>
<p>Can list items include section headings?  (<code>Markdown.pl</code> does not
allow this, but does allow blockquotes to include headings.)</p>
<pre><code class="language-markdown">- # Heading&#10;</code></pre>
</li>
<li>
<p>Can list items be empty?</p>
<pre><code class="language-markdown">* a&#10;*&#10;* b&#10;</code></pre>
</li>
<li>
<p>Can link references be defined inside block quotes or list items?</p>
<pre><code class="language-markdown">&gt; Blockquote [foo].&#10;&gt;&#10;&gt; [foo]: /url&#10;</code></pre>
</li>
<li>
<p>If there are multiple definitions for the same reference, which takes
precedence?</p>
<pre><code class="language-markdown">[foo]: /url1&#10;[foo]: /url2&#10;&#10;[foo][]&#10;</code></pre>
</li>
</ol><p>In the absence of a spec, early implementers consulted <code>Markdown.pl</code>
to resolve these ambiguities.  But <code>Markdown.pl</code> was quite buggy, and
gave manifestly bad results in many cases, so it was not a
satisfactory replacement for a spec.</p><p>Because there is no unambiguous spec, implementations have diverged
considerably.  As a result, users are often surprised to find that
a document that renders one way on one system (say, a GitHub wiki)
renders differently on another (say, converting to docbook using
pandoc).  To make matters worse, because nothing in Markdown counts
as a “syntax error,” the divergence often isn’t discovered right away.</p><h3 class="definition" id="about-this-document">
<span class="number">1.3</span>About this document
</h3><p>This document attempts to specify Markdown syntax unambiguously.
It contains many examples with side-by-side Markdown and
HTML.  These are intended to double as conformance tests.  An
accompanying script <code>spec_tests.py</code> can be used to run the tests
against any Markdown program:</p><pre><code>python test/spec_tests.py --spec spec.txt --program PROGRAM&#10;</code></pre><p>Since this document describes how Markdown is to be parsed into
an abstract syntax tree, it would have made sense to use an abstract
representation of the syntax tree instead of HTML.  But HTML is capable
of representing the structural distinctions we need to make, and the
choice of HTML for the tests makes it possible to run the tests against
an implementation without writing an abstract syntax tree renderer.</p><p>Note that not every feature of the HTML samples is mandated by
the spec.  For example, the spec says what counts as a link
destination, but it doesn’t mandate that non-ASCII characters in
the URL be percent-encoded.  To use the automatic tests,
implementers will need to provide a renderer that conforms to
the expectations of the spec examples (percent-encoding
non-ASCII characters in URLs).  But a conforming implementation
can use a different renderer and may choose not to
percent-encode non-ASCII characters in URLs.</p><p>This document is generated from a text file, <code>spec.txt</code>, written
in Markdown with a small extension for the side-by-side tests.
The script <code>tools/makespec.py</code> can be used to convert <code>spec.txt</code> into
HTML or CommonMark (which can then be converted into other formats).</p><p>In the examples, the <code>→</code> character is used to represent tabs.</p><h2 class="definition" data-source-heading="chapter" id="preliminaries">
<span class="number">2</span>Preliminaries
</h2><h3 class="definition" id="characters-and-lines">
<span class="number">2.1</span>Characters and lines
</h3><p>Any sequence of <a href="#character">characters</a> is a valid CommonMark
document.</p><p>A <a class="definition" href="#character" id="character">character</a> is a Unicode code point.  Although some
code points (for example, combining accents) do not correspond to
characters in an intuitive sense, all code points count as characters
for purposes of this spec.</p><p>This spec does not specify an encoding; it thinks of lines as composed
of <a href="#character">characters</a> rather than bytes.  A conforming parser may be limited
to a certain encoding.</p><p>A <a class="definition" href="#line" id="line">line</a> is a sequence of zero or more <a href="#character">characters</a>
other than line feed (<code>U+000A</code>) or carriage return (<code>U+000D</code>),
followed by a <a href="#line-ending">line ending</a> or by the end of file.</p><p>A <a class="definition" href="#line-ending" id="line-ending">line ending</a> is a line feed (<code>U+000A</code>), a carriage return
(<code>U+000D</code>) not followed by a line feed, or a carriage return and a
following line feed.</p><p>A line containing no characters, or a line containing only spaces
(<code>U+0020</code>) or tabs (<code>U+0009</code>), is called a <a class="definition" href="#blank-line" id="blank-line">blank line</a>.</p><p>The following definitions of character classes will be used in this spec:</p><p>A <a class="definition" href="#unicode-whitespace-character" id="unicode-whitespace-character">Unicode whitespace character</a> is a character in the Unicode <code>Zs</code> general
category, or a tab (<code>U+0009</code>), line feed (<code>U+000A</code>), form feed (<code>U+000C</code>), or
carriage return (<code>U+000D</code>).</p><p><a class="definition" href="#unicode-whitespace" id="unicode-whitespace">Unicode whitespace</a> is a sequence of one or more
<a href="#unicode-whitespace-character">Unicode whitespace characters</a>.</p><p>A <a class="definition" href="#tab" id="tab">tab</a> is <code>U+0009</code>.</p><p>A <a class="definition" href="#space" id="space">space</a> is <code>U+0020</code>.</p><p>An <a class="definition" href="#ascii-control-character" id="ascii-control-character">ASCII control character</a> is a character between <code>U+0000–1F</code> (both
including) or <code>U+007F</code>.</p><p>An <a class="definition" href="#ascii-punctuation-character" id="ascii-punctuation-character">ASCII punctuation character</a>
is <code>!</code>, <code>"</code>, <code>#</code>, <code>$</code>, <code>%</code>, <code>&amp;</code>, <code>'</code>, <code>(</code>, <code>)</code>,
<code>*</code>, <code>+</code>, <code>,</code>, <code>-</code>, <code>.</code>, <code>/</code> (U+0021–2F),
<code>:</code>, <code>;</code>, <code>&lt;</code>, <code>=</code>, <code>&gt;</code>, <code>?</code>, <code>@</code> (U+003A–0040),
<code>[</code>, <code>\</code>, <code>]</code>, <code>^</code>, <code>_</code>, <code>`</code> (U+005B–0060),
<code>{</code>, <code>|</code>, <code>}</code>, or <code>~</code> (U+007B–007E).</p><p>A <a class="definition" href="#unicode-punctuation-character" id="unicode-punctuation-character">Unicode punctuation character</a> is a character in the Unicode <code>P</code>
(puncuation) or <code>S</code> (symbol) general categories.</p><h3 class="definition" id="tabs">
<span class="number">2.2</span>Tabs
</h3><p>Tabs in lines are not expanded to <a href="#space">spaces</a>.  However,
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
with the REPLACEMENT CHARACTER (<code>U+FFFD</code>).</p><h3 class="definition" id="backslash-escapes">
<span class="number">2.4</span>Backslash escapes
</h3><p>Any ASCII punctuation character may be backslash-escaped:</p><div class="commonmark-example" id="example-12">
<div class="examplenum">
<a href="#example-12">Example 12</a>
</div>
<div class="column">
<pre><code class="language-text">\!\"\#\$\%\&amp;\'\(\)\*\+\,\-\.\/\:\;\&lt;\=\&gt;\?\@\[\\\]\^\_\`\{\|\}\~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;!&amp;quot;#$%&amp;amp;'()*+,-./:;&amp;lt;=&amp;gt;?@[\]^_`{|}~&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Backslashes before other characters are treated as literal
backslashes:</p><div class="commonmark-example" id="example-13">
<div class="examplenum">
<a href="#example-13">Example 13</a>
</div>
<div class="column">
<pre><code class="language-text">\&#9;\A\a\ \3\φ\«&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;\&#9;\A\a\ \3\φ\«&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Escaped characters are treated as regular characters and do
not have their usual Markdown meanings:</p><div class="commonmark-example" id="example-14">
<div class="examplenum">
<a href="#example-14">Example 14</a>
</div>
<div class="column">
<pre><code class="language-text">\*not emphasized*&#10;\&lt;br/&gt; not a tag&#10;\[not a link](/foo)&#10;\`not code`&#10;1\. not a list&#10;\* not a list&#10;\# not a heading&#10;\[foo]: /url "not a reference"&#10;\&amp;ouml; not a character entity&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;*not emphasized*&#10;&amp;lt;br/&amp;gt; not a tag&#10;[not a link](/foo)&#10;`not code`&#10;1. not a list&#10;* not a list&#10;# not a heading&#10;[foo]: /url &amp;quot;not a reference&amp;quot;&#10;&amp;amp;ouml; not a character entity&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>If a backslash is itself escaped, the following character is not:</p><div class="commonmark-example" id="example-15">
<div class="examplenum">
<a href="#example-15">Example 15</a>
</div>
<div class="column">
<pre><code class="language-text">\\*emphasis*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;\&lt;em&gt;emphasis&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A backslash at the end of the line is a <a href="https://spec.commonmark.org/0.31.2/#hard-line-break">hard line break</a>:</p><div class="commonmark-example" id="example-16">
<div class="examplenum">
<a href="#example-16">Example 16</a>
</div>
<div class="column">
<pre><code class="language-text">foo\&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;foo&lt;br /&gt;&#10;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Backslash escapes do not work in code blocks, code spans, autolinks, or
raw HTML:</p><div class="commonmark-example" id="example-17">
<div class="examplenum">
<a href="#example-17">Example 17</a>
</div>
<div class="column">
<pre><code class="language-text">`` \[\` ``&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt;\[\`&lt;/code&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-18">
<div class="examplenum">
<a href="#example-18">Example 18</a>
</div>
<div class="column">
<pre><code class="language-text">    \[\]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;\[\]&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-19">
<div class="examplenum">
<a href="#example-19">Example 19</a>
</div>
<div class="column">
<pre><code class="language-text">~~~&#10;\[\]&#10;~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;\[\]&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-20">
<div class="examplenum">
<a href="#example-20">Example 20</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;https://example.com?find=\*&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="https://example.com?find=%5C*"&gt;https://example.com?find=\*&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-21">
<div class="examplenum">
<a href="#example-21">Example 21</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="/bar\/)"&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="/bar\/)"&gt;&#10;</code></pre>
</div>
</div><p>But they work in all other contexts, including URLs and link titles,
link references, and <a href="#info-string">info strings</a> in <a href="#fenced-code-blocks">fenced code blocks</a>:</p><div class="commonmark-example" id="example-22">
<div class="examplenum">
<a href="#example-22">Example 22</a>
</div>
<div class="column">
<pre><code class="language-text">[foo](/bar\* "ti\*tle")&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/bar*" title="ti*tle"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-23">
<div class="examplenum">
<a href="#example-23">Example 23</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]&#10;&#10;[foo]: /bar\* "ti\*tle"&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/bar*" title="ti*tle"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-24">
<div class="examplenum">
<a href="#example-24">Example 24</a>
</div>
<div class="column">
<pre><code class="language-text">``` foo\+bar&#10;foo&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-foo+bar"&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><h3 class="definition" id="entity-and-numeric-character-references">
<span class="number">2.5</span>Entity and numeric character references
</h3><p>Valid HTML entity references and numeric character references
can be used in place of the corresponding Unicode character,
with the following exceptions:</p><ul>
<li>
<p>Entity and character references are not recognized in code
blocks and code spans.</p>
</li>
<li>
<p>Entity and character references cannot stand in place of
special characters that define structural elements in
CommonMark.  For example, although <code>&amp;#42;</code> can be used
in place of a literal <code>*</code> character, <code>&amp;#42;</code> cannot replace
<code>*</code> in emphasis delimiters, bullet list markers, or thematic
breaks.</p>
</li>
</ul><p>Conforming CommonMark parsers need not store information about
whether a particular character was represented in the source
using a Unicode character or an entity reference.</p><p><a class="definition" href="#entity-references" id="entity-references">Entity references</a> consist of <code>&amp;</code> + any of the valid
HTML5 entity names + <code>;</code>. The
document <a href="https://html.spec.whatwg.org/entities.json">https://html.spec.whatwg.org/entities.json</a>
is used as an authoritative source for the valid entity
references and their corresponding code points.</p><div class="commonmark-example" id="example-25">
<div class="examplenum">
<a href="#example-25">Example 25</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;nbsp; &amp;amp; &amp;copy; &amp;AElig; &amp;Dcaron;&#10;&amp;frac34; &amp;HilbertSpace; &amp;DifferentialD;&#10;&amp;ClockwiseContourIntegral; &amp;ngE;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;  &amp;amp; © Æ Ď&#10;¾ ℋ ⅆ&#10;∲ ≧̸&lt;/p&gt;&#10;</code></pre>
</div>
</div><p><a class="definition" href="#decimal-numeric-character-references" id="decimal-numeric-character-references">Decimal numeric character
references</a>
consist of <code>&amp;#</code> + a string of 1–7 arabic digits + <code>;</code>. A
numeric character reference is parsed as the corresponding
Unicode character. Invalid Unicode code points will be replaced by
the REPLACEMENT CHARACTER (<code>U+FFFD</code>).  For security reasons,
the code point <code>U+0000</code> will also be replaced by <code>U+FFFD</code>.</p><div class="commonmark-example" id="example-26">
<div class="examplenum">
<a href="#example-26">Example 26</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;#35; &amp;#1234; &amp;#992; &amp;#0;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;# Ӓ Ϡ �&lt;/p&gt;&#10;</code></pre>
</div>
</div><p><a class="definition" href="#hexadecimal-numeric-character-references" id="hexadecimal-numeric-character-references">Hexadecimal numeric character
references</a> consist of <code>&amp;#</code> +
either <code>X</code> or <code>x</code> + a string of 1-6 hexadecimal digits + <code>;</code>.
They too are parsed as the corresponding Unicode character (this
time specified with a hexadecimal numeral instead of decimal).</p><div class="commonmark-example" id="example-27">
<div class="examplenum">
<a href="#example-27">Example 27</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;#X22; &amp;#XD06; &amp;#xcab;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&amp;quot; ആ ಫ&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Here are some nonentities:</p><div class="commonmark-example" id="example-28">
<div class="examplenum">
<a href="#example-28">Example 28</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;nbsp &amp;x; &amp;#; &amp;#x;&#10;&amp;#87654321;&#10;&amp;#abcdef0;&#10;&amp;ThisIsNotDefined; &amp;hi?;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&amp;amp;nbsp &amp;amp;x; &amp;amp;#; &amp;amp;#x;&#10;&amp;amp;#87654321;&#10;&amp;amp;#abcdef0;&#10;&amp;amp;ThisIsNotDefined; &amp;amp;hi?;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Although HTML5 does accept some entity references
without a trailing semicolon (such as <code>&amp;copy</code>), these are not
recognized here, because it makes the grammar too ambiguous:</p><div class="commonmark-example" id="example-29">
<div class="examplenum">
<a href="#example-29">Example 29</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;copy&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&amp;amp;copy&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Strings that are not on the list of HTML5 named entities are not
recognized as entity references either:</p><div class="commonmark-example" id="example-30">
<div class="examplenum">
<a href="#example-30">Example 30</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;MadeUpEntity;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&amp;amp;MadeUpEntity;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Entity and numeric character references are recognized in any
context besides code spans or code blocks, including
URLs, <a href="https://spec.commonmark.org/0.31.2/#link-title">link titles</a>, and <a href="#fenced-code-block">fenced code block</a> <a href="#info-string">info strings</a>:</p><div class="commonmark-example" id="example-31">
<div class="examplenum">
<a href="#example-31">Example 31</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="&amp;ouml;&amp;ouml;.html"&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="&amp;ouml;&amp;ouml;.html"&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-32">
<div class="examplenum">
<a href="#example-32">Example 32</a>
</div>
<div class="column">
<pre><code class="language-text">[foo](/f&amp;ouml;&amp;ouml; "f&amp;ouml;&amp;ouml;")&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/f%C3%B6%C3%B6" title="föö"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-33">
<div class="examplenum">
<a href="#example-33">Example 33</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]&#10;&#10;[foo]: /f&amp;ouml;&amp;ouml; "f&amp;ouml;&amp;ouml;"&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/f%C3%B6%C3%B6" title="föö"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-34">
<div class="examplenum">
<a href="#example-34">Example 34</a>
</div>
<div class="column">
<pre><code class="language-text">``` f&amp;ouml;&amp;ouml;&#10;foo&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-föö"&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Entity and numeric character references are treated as literal
text in code spans and code blocks:</p><div class="commonmark-example" id="example-35">
<div class="examplenum">
<a href="#example-35">Example 35</a>
</div>
<div class="column">
<pre><code class="language-text">`f&amp;ouml;&amp;ouml;`&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt;f&amp;amp;ouml;&amp;amp;ouml;&lt;/code&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-36">
<div class="examplenum">
<a href="#example-36">Example 36</a>
</div>
<div class="column">
<pre><code class="language-text">    f&amp;ouml;f&amp;ouml;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;f&amp;amp;ouml;f&amp;amp;ouml;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Entity and numeric character references cannot be used
in place of symbols indicating structure in CommonMark
documents.</p><div class="commonmark-example" id="example-37">
<div class="examplenum">
<a href="#example-37">Example 37</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;#42;foo&amp;#42;&#10;*foo*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;*foo*&#10;&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-38">
<div class="examplenum">
<a href="#example-38">Example 38</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;#42; foo&#10;&#10;* foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;* foo&lt;/p&gt;&#10;&lt;ul&gt;&#10;&lt;li&gt;foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-39">
<div class="examplenum">
<a href="#example-39">Example 39</a>
</div>
<div class="column">
<pre><code class="language-text">foo&amp;#10;&amp;#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;foo&#10;&#10;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-40">
<div class="examplenum">
<a href="#example-40">Example 40</a>
</div>
<div class="column">
<pre><code class="language-text">&amp;#9;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&#9;foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-41">
<div class="examplenum">
<a href="#example-41">Example 41</a>
</div>
<div class="column">
<pre><code class="language-text">[a](url &amp;quot;tit&amp;quot;)&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;[a](url &amp;quot;tit&amp;quot;)&lt;/p&gt;&#10;</code></pre>
</div>
</div><h2 class="definition" data-source-heading="chapter" id="blocks-and-inlines">
<span class="number">3</span>Blocks and inlines
</h2><p>We can think of a document as a sequence of
<a class="definition" href="#blocks" id="blocks">blocks</a>—structural elements like paragraphs, block
quotations, lists, headings, rules, and code blocks.  Some blocks (like
block quotes and list items) contain other blocks; others (like
headings and paragraphs) contain <a class="definition" href="#inline" id="inline">inline</a> content—text,
links, emphasized text, images, code spans, and so on.</p><h3 class="definition" id="precedence">
<span class="number">3.1</span>Precedence
</h3><p>Indicators of block structure always take precedence over indicators
of inline structure.  So, for example, the following is a list with
two items, not a list with one item containing a code span:</p><div class="commonmark-example" id="example-42">
<div class="examplenum">
<a href="#example-42">Example 42</a>
</div>
<div class="column">
<pre><code class="language-text">- `one&#10;- two`&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;`one&lt;/li&gt;&#10;&lt;li&gt;two`&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><p>This means that parsing can proceed in two steps:  first, the block
structure of the document can be discerned; second, text lines inside
paragraphs, headings, and other block constructs can be parsed for inline
structure.  The second step requires information about link reference
definitions that will be available only at the end of the first
step.  Note that the first step requires processing lines in sequence,
but the second can be parallelized, since the inline parsing of
one block element does not affect the inline parsing of any other.</p><h3 class="definition" id="container-blocks-and-leaf-blocks">
<span class="number">3.2</span>Container blocks and leaf blocks
</h3><p>We can divide blocks into two types:
<a href="https://spec.commonmark.org/0.31.2/#container-blocks">container blocks</a>,
which can contain other blocks, and <a href="#leaf-blocks">leaf blocks</a>,
which cannot.</p><h2 class="definition" data-source-heading="chapter" id="leaf-blocks">
<span class="number">4</span>Leaf blocks
</h2><p>This section describes the different kinds of leaf block that make up a
Markdown document.</p><h3 class="definition" id="thematic-breaks">
<span class="number">4.1</span>Thematic breaks
</h3><p>A line consisting of optionally up to three spaces of indentation, followed by a
sequence of three or more matching <code>-</code>, <code>_</code>, or <code>*</code> characters, each followed
optionally by any number of spaces or tabs, forms a
<a class="definition" href="#thematic-break" id="thematic-break">thematic break</a>.</p><div class="commonmark-example" id="example-43">
<div class="examplenum">
<a href="#example-43">Example 43</a>
</div>
<div class="column">
<pre><code class="language-text">***&#10;---&#10;___&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;&lt;hr /&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>Wrong characters:</p><div class="commonmark-example" id="example-44">
<div class="examplenum">
<a href="#example-44">Example 44</a>
</div>
<div class="column">
<pre><code class="language-text">+++&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;+++&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-45">
<div class="examplenum">
<a href="#example-45">Example 45</a>
</div>
<div class="column">
<pre><code class="language-text">===&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;===&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Not enough characters:</p><div class="commonmark-example" id="example-46">
<div class="examplenum">
<a href="#example-46">Example 46</a>
</div>
<div class="column">
<pre><code class="language-text">--&#10;**&#10;__&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;--&#10;**&#10;__&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Up to three spaces of indentation are allowed:</p><div class="commonmark-example" id="example-47">
<div class="examplenum">
<a href="#example-47">Example 47</a>
</div>
<div class="column">
<pre><code class="language-text"> ***&#10;  ***&#10;   ***&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;&lt;hr /&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>Four spaces of indentation is too many:</p><div class="commonmark-example" id="example-48">
<div class="examplenum">
<a href="#example-48">Example 48</a>
</div>
<div class="column">
<pre><code class="language-text">    ***&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;***&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-49">
<div class="examplenum">
<a href="#example-49">Example 49</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;    ***&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;***&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>More than three characters may be used:</p><div class="commonmark-example" id="example-50">
<div class="examplenum">
<a href="#example-50">Example 50</a>
</div>
<div class="column">
<pre><code class="language-text">_____________________________________&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>Spaces and tabs are allowed between the characters:</p><div class="commonmark-example" id="example-51">
<div class="examplenum">
<a href="#example-51">Example 51</a>
</div>
<div class="column">
<pre><code class="language-text"> - - -&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-52">
<div class="examplenum">
<a href="#example-52">Example 52</a>
</div>
<div class="column">
<pre><code class="language-text"> **  * ** * ** * **&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-53">
<div class="examplenum">
<a href="#example-53">Example 53</a>
</div>
<div class="column">
<pre><code class="language-text">-     -      -      -&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>Spaces and tabs are allowed at the end:</p><div class="commonmark-example" id="example-54">
<div class="examplenum">
<a href="#example-54">Example 54</a>
</div>
<div class="column">
<pre><code class="language-text">- - - -    &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;</code></pre>
</div>
</div><p>However, no other characters may occur in the line:</p><div class="commonmark-example" id="example-55">
<div class="examplenum">
<a href="#example-55">Example 55</a>
</div>
<div class="column">
<pre><code class="language-text">_ _ _ _ a&#10;&#10;a------&#10;&#10;---a---&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;_ _ _ _ a&lt;/p&gt;&#10;&lt;p&gt;a------&lt;/p&gt;&#10;&lt;p&gt;---a---&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>It is required that all of the characters other than spaces or tabs be the same.
So, this is not a thematic break:</p><div class="commonmark-example" id="example-56">
<div class="examplenum">
<a href="#example-56">Example 56</a>
</div>
<div class="column">
<pre><code class="language-text"> *-*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;em&gt;-&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Thematic breaks do not need blank lines before or after:</p><div class="commonmark-example" id="example-57">
<div class="examplenum">
<a href="#example-57">Example 57</a>
</div>
<div class="column">
<pre><code class="language-text">- foo&#10;***&#10;- bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;hr /&gt;&#10;&lt;ul&gt;&#10;&lt;li&gt;bar&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><p>Thematic breaks can interrupt a paragraph:</p><div class="commonmark-example" id="example-58">
<div class="examplenum">
<a href="#example-58">Example 58</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;***&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&lt;/p&gt;&#10;&lt;hr /&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>If a line of dashes that meets the above conditions for being a
thematic break could also be interpreted as the underline of a <a href="#setext-heading">setext
heading</a>, the interpretation as a
<a href="#setext-heading">setext heading</a> takes precedence. Thus, for example,
this is a setext heading, not a paragraph followed by a thematic break:</p><div class="commonmark-example" id="example-59">
<div class="examplenum">
<a href="#example-59">Example 59</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;---&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;Foo&lt;/h2&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>When both a thematic break and a list item are possible
interpretations of a line, the thematic break takes precedence:</p><div class="commonmark-example" id="example-60">
<div class="examplenum">
<a href="#example-60">Example 60</a>
</div>
<div class="column">
<pre><code class="language-text">* Foo&#10;* * *&#10;* Bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;Foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;&lt;hr /&gt;&#10;&lt;ul&gt;&#10;&lt;li&gt;Bar&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><p>If you want a thematic break in a list item, use a different bullet:</p><div class="commonmark-example" id="example-61">
<div class="examplenum">
<a href="#example-61">Example 61</a>
</div>
<div class="column">
<pre><code class="language-text">- Foo&#10;- * * *&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;Foo&lt;/li&gt;&#10;&lt;li&gt;&#10;&lt;hr /&gt;&#10;&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><h3 class="definition" id="atx-headings">
<span class="number">4.2</span>ATX headings
</h3><p>An <a class="definition" href="#atx-heading" id="atx-heading">ATX heading</a>
consists of a string of characters, parsed as inline content, between an
opening sequence of 1–6 unescaped <code>#</code> characters and an optional
closing sequence of any number of unescaped <code>#</code> characters.
The opening sequence of <code>#</code> characters must be followed by spaces or tabs, or
by the end of line. The optional closing sequence of <code>#</code>s must be preceded by
spaces or tabs and may be followed by spaces or tabs only.  The opening
<code>#</code> character may be preceded by up to three spaces of indentation.  The raw
contents of the heading are stripped of leading and trailing space or tabs
before being parsed as inline content.  The heading level is equal to the number
of <code>#</code> characters in the opening sequence.</p><p>Simple headings:</p><div class="commonmark-example" id="example-62">
<div class="examplenum">
<a href="#example-62">Example 62</a>
</div>
<div class="column">
<pre><code class="language-text"># foo&#10;## foo&#10;### foo&#10;#### foo&#10;##### foo&#10;###### foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo&lt;/h1&gt;&#10;&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;h3&gt;foo&lt;/h3&gt;&#10;&lt;h4&gt;foo&lt;/h4&gt;&#10;&lt;h5&gt;foo&lt;/h5&gt;&#10;&lt;h6&gt;foo&lt;/h6&gt;&#10;</code></pre>
</div>
</div><p>More than six <code>#</code> characters is not a heading:</p><div class="commonmark-example" id="example-63">
<div class="examplenum">
<a href="#example-63">Example 63</a>
</div>
<div class="column">
<pre><code class="language-text">####### foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;####### foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>At least one space or tab is required between the <code>#</code> characters and the
heading’s contents, unless the heading is empty.  Note that many
implementations currently do not require the space.  However, the
space was required by the
<a href="http://www.aaronsw.com/2002/atx/atx.py">original ATX implementation</a>,
and it helps prevent things like the following from being parsed as
headings:</p><div class="commonmark-example" id="example-64">
<div class="examplenum">
<a href="#example-64">Example 64</a>
</div>
<div class="column">
<pre><code class="language-text">#5 bolt&#10;&#10;#hashtag&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;#5 bolt&lt;/p&gt;&#10;&lt;p&gt;#hashtag&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>This is not a heading, because the first <code>#</code> is escaped:</p><div class="commonmark-example" id="example-65">
<div class="examplenum">
<a href="#example-65">Example 65</a>
</div>
<div class="column">
<pre><code class="language-text">\## foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;## foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Contents are parsed as inlines:</p><div class="commonmark-example" id="example-66">
<div class="examplenum">
<a href="#example-66">Example 66</a>
</div>
<div class="column">
<pre><code class="language-text"># foo *bar* \*baz\*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo &lt;em&gt;bar&lt;/em&gt; *baz*&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>Leading and trailing spaces or tabs are ignored in parsing inline content:</p><div class="commonmark-example" id="example-67">
<div class="examplenum">
<a href="#example-67">Example 67</a>
</div>
<div class="column">
<pre><code class="language-text">#                  foo                     &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>Up to three spaces of indentation are allowed:</p><div class="commonmark-example" id="example-68">
<div class="examplenum">
<a href="#example-68">Example 68</a>
</div>
<div class="column">
<pre><code class="language-text"> ### foo&#10;  ## foo&#10;   # foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo&lt;/h3&gt;&#10;&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;h1&gt;foo&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>Four spaces of indentation is too many:</p><div class="commonmark-example" id="example-69">
<div class="examplenum">
<a href="#example-69">Example 69</a>
</div>
<div class="column">
<pre><code class="language-text">    # foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;# foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-70">
<div class="examplenum">
<a href="#example-70">Example 70</a>
</div>
<div class="column">
<pre><code class="language-text">foo&#10;    # bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;foo&#10;# bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A closing sequence of <code>#</code> characters is optional:</p><div class="commonmark-example" id="example-71">
<div class="examplenum">
<a href="#example-71">Example 71</a>
</div>
<div class="column">
<pre><code class="language-text">## foo ##&#10;  ###   bar    ###&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;h3&gt;bar&lt;/h3&gt;&#10;</code></pre>
</div>
</div><p>It need not be the same length as the opening sequence:</p><div class="commonmark-example" id="example-72">
<div class="examplenum">
<a href="#example-72">Example 72</a>
</div>
<div class="column">
<pre><code class="language-text"># foo ##################################&#10;##### foo ##&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo&lt;/h1&gt;&#10;&lt;h5&gt;foo&lt;/h5&gt;&#10;</code></pre>
</div>
</div><p>Spaces or tabs are allowed after the closing sequence:</p><div class="commonmark-example" id="example-73">
<div class="examplenum">
<a href="#example-73">Example 73</a>
</div>
<div class="column">
<pre><code class="language-text">### foo ###     &#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo&lt;/h3&gt;&#10;</code></pre>
</div>
</div><p>A sequence of <code>#</code> characters with anything but spaces or tabs following it
is not a closing sequence, but counts as part of the contents of the
heading:</p><div class="commonmark-example" id="example-74">
<div class="examplenum">
<a href="#example-74">Example 74</a>
</div>
<div class="column">
<pre><code class="language-text">### foo ### b&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo ### b&lt;/h3&gt;&#10;</code></pre>
</div>
</div><p>The closing sequence must be preceded by a space or tab:</p><div class="commonmark-example" id="example-75">
<div class="examplenum">
<a href="#example-75">Example 75</a>
</div>
<div class="column">
<pre><code class="language-text"># foo#&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;foo#&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>Backslash-escaped <code>#</code> characters do not count as part
of the closing sequence:</p><div class="commonmark-example" id="example-76">
<div class="examplenum">
<a href="#example-76">Example 76</a>
</div>
<div class="column">
<pre><code class="language-text">### foo \###&#10;## foo #\##&#10;# foo \#&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h3&gt;foo ###&lt;/h3&gt;&#10;&lt;h2&gt;foo ###&lt;/h2&gt;&#10;&lt;h1&gt;foo #&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>ATX headings need not be separated from surrounding content by blank
lines, and they can interrupt paragraphs:</p><div class="commonmark-example" id="example-77">
<div class="examplenum">
<a href="#example-77">Example 77</a>
</div>
<div class="column">
<pre><code class="language-text">****&#10;## foo&#10;****&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;hr /&gt;&#10;&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;hr /&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-78">
<div class="examplenum">
<a href="#example-78">Example 78</a>
</div>
<div class="column">
<pre><code class="language-text">Foo bar&#10;# baz&#10;Bar foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo bar&lt;/p&gt;&#10;&lt;h1&gt;baz&lt;/h1&gt;&#10;&lt;p&gt;Bar foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>ATX headings can be empty:</p><div class="commonmark-example" id="example-79">
<div class="examplenum">
<a href="#example-79">Example 79</a>
</div>
<div class="column">
<pre><code class="language-text">## &#10;#&#10;### ###&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;&lt;/h2&gt;&#10;&lt;h1&gt;&lt;/h1&gt;&#10;&lt;h3&gt;&lt;/h3&gt;&#10;</code></pre>
</div>
</div><h3 class="definition" id="setext-headings">
<span class="number">4.3</span>Setext headings
</h3><p>A <a class="definition" href="#setext-heading" id="setext-heading">setext heading</a> consists of one or more
lines of text, not interrupted by a blank line, of which the first line does not
have more than 3 spaces of indentation, followed by
a <a href="#setext-heading-underline">setext heading underline</a>.  The lines of text must be such
that, were they not followed by the setext heading underline,
they would be interpreted as a paragraph:  they cannot be
interpretable as a <a href="#code-fence">code fence</a>, <a href="#atx-headings">ATX heading</a>,
<a href="https://spec.commonmark.org/0.31.2/#block-quotes">block quote</a>, <a href="#thematic-breaks">thematic break</a>,
<a href="https://spec.commonmark.org/0.31.2/#list-items">list item</a>, or <a href="#html-blocks">HTML block</a>.</p><p>A <a class="definition" href="#setext-heading-underline" id="setext-heading-underline">setext heading underline</a> is a sequence of
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
</div><h3 class="definition" id="indented-code-blocks">
<span class="number">4.4</span>Indented code blocks
</h3><p>An <a class="definition" href="#indented-code-block" id="indented-code-block">indented code block</a> is composed of one or more
<a href="#indented-chunk">indented chunks</a> separated by blank lines.
An <a class="definition" href="#indented-chunk" id="indented-chunk">indented chunk</a> is a sequence of non-blank lines,
each preceded by four or more spaces of indentation. The contents of the code
block are the literal contents of the lines, including trailing
<a href="#line-ending">line endings</a>, minus four spaces of indentation.
An indented code block has no <a href="#info-string">info string</a>.</p><p>An indented code block cannot interrupt a paragraph, so there must be
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
</div><h3 class="definition" id="fenced-code-blocks">
<span class="number">4.5</span>Fenced code blocks
</h3><p>A <a class="definition" href="#code-fence" id="code-fence">code fence</a> is a sequence
of at least three consecutive backtick characters (<code>`</code>) or
tildes (<code>~</code>).  (Tildes and backticks cannot be mixed.)
A <a class="definition" href="#fenced-code-block" id="fenced-code-block">fenced code block</a>
begins with a code fence, preceded by up to three spaces of indentation.</p><p>The line with the opening code fence may optionally contain some text
following the code fence; this is trimmed of leading and trailing
spaces or tabs and called the <a class="definition" href="#info-string" id="info-string">info string</a>. If the <a href="#info-string">info string</a> comes
after a backtick fence, it may not contain any backtick
characters.  (The reason for this restriction is that otherwise
some inline code would be incorrectly interpreted as the
beginning of a fenced code block.)</p><p>The content of the code block consists of all subsequent lines, until
a closing <a href="#code-fence">code fence</a> of the same type as the code block
began with (backticks or tildes), and with at least as many backticks
or tildes as the opening code fence.  If the leading code fence is
preceded by N spaces of indentation, then up to N spaces of indentation are
removed from each line of the content (if present).  (If a content line is not
indented, it is preserved unchanged.  If it is indented N spaces or less, all
of the indentation is removed.)</p><p>The closing code fence may be preceded by up to three spaces of indentation, and
may be followed only by spaces or tabs, which are ignored.  If the end of the
containing block (or document) is reached and no closing code fence
has been found, the code block contains all of the lines after the
opening code fence until the end of the containing block (or
document).  (An alternative spec would require backtracking in the
event that a closing code fence is not found.  But this makes parsing
much less efficient, and there seems to be no real downside to the
behavior described here.)</p><p>A fenced code block may interrupt a paragraph, and does not require
a blank line either before or after.</p><p>The content of a code fence is treated as literal text, not parsed
as inlines.  The first word of the <a href="#info-string">info string</a> is typically used to
specify the language of the code sample, and rendered in the <code>class</code>
attribute of the <code>code</code> tag.  However, this spec does not mandate any
particular treatment of the <a href="#info-string">info string</a>.</p><p>Here is a simple example with backticks:</p><div class="commonmark-example" id="example-119">
<div class="examplenum">
<a href="#example-119">Example 119</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;&lt;&#10; &gt;&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&amp;lt;&#10; &amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>With tildes:</p><div class="commonmark-example" id="example-120">
<div class="examplenum">
<a href="#example-120">Example 120</a>
</div>
<div class="column">
<pre><code class="language-text">~~~&#10;&lt;&#10; &gt;&#10;~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&amp;lt;&#10; &amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Fewer than three backticks is not enough:</p><div class="commonmark-example" id="example-121">
<div class="examplenum">
<a href="#example-121">Example 121</a>
</div>
<div class="column">
<pre><code class="language-text">``&#10;foo&#10;``&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt;foo&lt;/code&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>The closing code fence must use the same character as the opening
fence:</p><div class="commonmark-example" id="example-122">
<div class="examplenum">
<a href="#example-122">Example 122</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;aaa&#10;~~~&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;~~~&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-123">
<div class="examplenum">
<a href="#example-123">Example 123</a>
</div>
<div class="column">
<pre><code class="language-text">~~~&#10;aaa&#10;```&#10;~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>The closing code fence must be at least as long as the opening fence:</p><div class="commonmark-example" id="example-124">
<div class="examplenum">
<a href="#example-124">Example 124</a>
</div>
<div class="column">
<pre><code class="language-text">````&#10;aaa&#10;```&#10;``````&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-125">
<div class="examplenum">
<a href="#example-125">Example 125</a>
</div>
<div class="column">
<pre><code class="language-text">~~~~&#10;aaa&#10;~~~&#10;~~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;~~~&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Unclosed code blocks are closed by the end of the document
(or the enclosing <a href="https://spec.commonmark.org/0.31.2/#block-quotes">block quote</a> or <a href="https://spec.commonmark.org/0.31.2/#list-items">list item</a>):</p><div class="commonmark-example" id="example-126">
<div class="examplenum">
<a href="#example-126">Example 126</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-127">
<div class="examplenum">
<a href="#example-127">Example 127</a>
</div>
<div class="column">
<pre><code class="language-text">`````&#10;&#10;```&#10;aaa&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&#10;```&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-128">
<div class="examplenum">
<a href="#example-128">Example 128</a>
</div>
<div class="column">
<pre><code class="language-text">&gt; ```&#10;&gt; aaa&#10;&#10;bbb&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;pre&gt;&lt;code&gt;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;/blockquote&gt;&#10;&lt;p&gt;bbb&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A code block can have all empty lines as its content:</p><div class="commonmark-example" id="example-129">
<div class="examplenum">
<a href="#example-129">Example 129</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;&#10;  &#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&#10;  &#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>A code block can be empty:</p><div class="commonmark-example" id="example-130">
<div class="examplenum">
<a href="#example-130">Example 130</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Fences can be indented.  If the opening fence is indented,
content lines will have equivalent opening indentation removed,
if present:</p><div class="commonmark-example" id="example-131">
<div class="examplenum">
<a href="#example-131">Example 131</a>
</div>
<div class="column">
<pre><code class="language-text"> ```&#10; aaa&#10;aaa&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-132">
<div class="examplenum">
<a href="#example-132">Example 132</a>
</div>
<div class="column">
<pre><code class="language-text">  ```&#10;aaa&#10;  aaa&#10;aaa&#10;  ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;aaa&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-133">
<div class="examplenum">
<a href="#example-133">Example 133</a>
</div>
<div class="column">
<pre><code class="language-text">   ```&#10;   aaa&#10;    aaa&#10;  aaa&#10;   ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10; aaa&#10;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Four spaces of indentation is too many:</p><div class="commonmark-example" id="example-134">
<div class="examplenum">
<a href="#example-134">Example 134</a>
</div>
<div class="column">
<pre><code class="language-text">    ```&#10;    aaa&#10;    ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;```&#10;aaa&#10;```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Closing fences may be preceded by up to three spaces of indentation, and their
indentation need not match that of the opening fence:</p><div class="commonmark-example" id="example-135">
<div class="examplenum">
<a href="#example-135">Example 135</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;aaa&#10;  ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-136">
<div class="examplenum">
<a href="#example-136">Example 136</a>
</div>
<div class="column">
<pre><code class="language-text">   ```&#10;aaa&#10;  ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>This is not a closing fence, because it is indented 4 spaces:</p><div class="commonmark-example" id="example-137">
<div class="examplenum">
<a href="#example-137">Example 137</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;aaa&#10;    ```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;    ```&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Code fences (opening and closing) cannot contain internal spaces or tabs:</p><div class="commonmark-example" id="example-138">
<div class="examplenum">
<a href="#example-138">Example 138</a>
</div>
<div class="column">
<pre><code class="language-text">``` ```&#10;aaa&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt; &lt;/code&gt;&#10;aaa&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-139">
<div class="examplenum">
<a href="#example-139">Example 139</a>
</div>
<div class="column">
<pre><code class="language-text">~~~~~~&#10;aaa&#10;~~~ ~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;aaa&#10;~~~ ~~&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Fenced code blocks can interrupt paragraphs, and can be followed
directly by paragraphs, without a blank line between:</p><div class="commonmark-example" id="example-140">
<div class="examplenum">
<a href="#example-140">Example 140</a>
</div>
<div class="column">
<pre><code class="language-text">foo&#10;```&#10;bar&#10;```&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;foo&lt;/p&gt;&#10;&lt;pre&gt;&lt;code&gt;bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Other blocks can also occur before and after fenced code blocks
without an intervening blank line:</p><div class="commonmark-example" id="example-141">
<div class="examplenum">
<a href="#example-141">Example 141</a>
</div>
<div class="column">
<pre><code class="language-text">foo&#10;---&#10;~~~&#10;bar&#10;~~~&#10;# baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h2&gt;foo&lt;/h2&gt;&#10;&lt;pre&gt;&lt;code&gt;bar&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;h1&gt;baz&lt;/h1&gt;&#10;</code></pre>
</div>
</div><p>An <a href="#info-string">info string</a> can be provided after the opening code fence.
Although this spec doesn’t mandate any particular treatment of
the info string, the first word is typically used to specify
the language of the code block. In HTML output, the language is
normally indicated by adding a class to the <code>code</code> element consisting
of <code>language-</code> followed by the language name.</p><div class="commonmark-example" id="example-142">
<div class="examplenum">
<a href="#example-142">Example 142</a>
</div>
<div class="column">
<pre><code class="language-text">```ruby&#10;def foo(x)&#10;  return 3&#10;end&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-ruby"&gt;def foo(x)&#10;  return 3&#10;end&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-143">
<div class="examplenum">
<a href="#example-143">Example 143</a>
</div>
<div class="column">
<pre><code class="language-text">~~~~    ruby startline=3 $%@#$&#10;def foo(x)&#10;  return 3&#10;end&#10;~~~~~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-ruby"&gt;def foo(x)&#10;  return 3&#10;end&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-144">
<div class="examplenum">
<a href="#example-144">Example 144</a>
</div>
<div class="column">
<pre><code class="language-text">````;&#10;````&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-;"&gt;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p><a href="#info-string">Info strings</a> for backtick code blocks cannot contain backticks:</p><div class="commonmark-example" id="example-145">
<div class="examplenum">
<a href="#example-145">Example 145</a>
</div>
<div class="column">
<pre><code class="language-text">``` aa ```&#10;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;code&gt;aa&lt;/code&gt;&#10;foo&lt;/p&gt;&#10;</code></pre>
</div>
</div><p><a href="#info-string">Info strings</a> for tilde code blocks can contain backticks and tildes:</p><div class="commonmark-example" id="example-146">
<div class="examplenum">
<a href="#example-146">Example 146</a>
</div>
<div class="column">
<pre><code class="language-text">~~~ aa ``` ~~~&#10;foo&#10;~~~&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code class="language-aa"&gt;foo&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>Closing code fences cannot have <a href="#info-string">info strings</a>:</p><div class="commonmark-example" id="example-147">
<div class="examplenum">
<a href="#example-147">Example 147</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;``` aaa&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;``` aaa&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><h3 class="definition" id="html-blocks">
<span class="number">4.6</span>HTML blocks
</h3><p>An <a class="definition" href="#html-block" id="html-block">HTML block</a> is a group of lines that is treated
as raw HTML (and will not be escaped in HTML output).</p><p>There are seven kinds of <a href="#html-block">HTML block</a>, which can be defined by their
start and end conditions.  The block begins with a line that meets a
<a class="definition" href="#start-condition" id="start-condition">start condition</a> (after up to three optional spaces of indentation).
It ends with the first subsequent line that meets a matching
<a class="definition" href="#end-condition" id="end-condition">end condition</a>, or the last line of the document, or the last line of
the <a href="https://spec.commonmark.org/0.31.2/#container-blocks">container block</a> containing the current HTML
block, if no line is encountered that meets the <a href="#end-condition">end condition</a>.  If
the first line meets both the <a href="#start-condition">start condition</a> and the <a href="#end-condition">end
condition</a>, the block will contain just that line.</p><ol>
<li>
<p><strong>Start condition:</strong>  line begins with the string <code>&lt;pre</code>,
<code>&lt;script</code>, <code>&lt;style</code>, or <code>&lt;textarea</code> (case-insensitive), followed by a space,
a tab, the string <code>&gt;</code>, or the end of the line.<br/>
<strong>End condition:</strong>  line contains an end tag
<code>&lt;/pre&gt;</code>, <code>&lt;/script&gt;</code>, <code>&lt;/style&gt;</code>, or <code>&lt;/textarea&gt;</code> (case-insensitive; it
need not match the start tag).</p>
</li>
<li>
<p><strong>Start condition:</strong> line begins with the string <code>&lt;!--</code>.<br/>
<strong>End condition:</strong>  line contains the string <code>--&gt;</code>.</p>
</li>
<li>
<p><strong>Start condition:</strong> line begins with the string <code>&lt;?</code>.<br/>
<strong>End condition:</strong> line contains the string <code>?&gt;</code>.</p>
</li>
<li>
<p><strong>Start condition:</strong> line begins with the string <code>&lt;!</code>
followed by an ASCII letter.<br/>
<strong>End condition:</strong> line contains the character <code>&gt;</code>.</p>
</li>
<li>
<p><strong>Start condition:</strong>  line begins with the string
<code>&lt;![CDATA[</code>.<br/>
<strong>End condition:</strong> line contains the string <code>]]&gt;</code>.</p>
</li>
<li>
<p><strong>Start condition:</strong> line begins with the string <code>&lt;</code> or <code>&lt;/</code>
followed by one of the strings (case-insensitive) <code>address</code>,
<code>article</code>, <code>aside</code>, <code>base</code>, <code>basefont</code>, <code>blockquote</code>, <code>body</code>,
<code>caption</code>, <code>center</code>, <code>col</code>, <code>colgroup</code>, <code>dd</code>, <code>details</code>, <code>dialog</code>,
<code>dir</code>, <code>div</code>, <code>dl</code>, <code>dt</code>, <code>fieldset</code>, <code>figcaption</code>, <code>figure</code>,
<code>footer</code>, <code>form</code>, <code>frame</code>, <code>frameset</code>,
<code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code>, <code>h6</code>, <code>head</code>, <code>header</code>, <code>hr</code>,
<code>html</code>, <code>iframe</code>, <code>legend</code>, <code>li</code>, <code>link</code>, <code>main</code>, <code>menu</code>, <code>menuitem</code>,
<code>nav</code>, <code>noframes</code>, <code>ol</code>, <code>optgroup</code>, <code>option</code>, <code>p</code>, <code>param</code>,
<code>search</code>, <code>section</code>, <code>summary</code>, <code>table</code>, <code>tbody</code>, <code>td</code>,
<code>tfoot</code>, <code>th</code>, <code>thead</code>, <code>title</code>, <code>tr</code>, <code>track</code>, <code>ul</code>, followed
by a space, a tab, the end of the line, the string <code>&gt;</code>, or
the string <code>/&gt;</code>.<br/>
<strong>End condition:</strong> line is followed by a <a href="#blank-line">blank line</a>.</p>
</li>
<li>
<p><strong>Start condition:</strong>  line begins with a complete <a href="https://spec.commonmark.org/0.31.2/#open-tag">open tag</a>
(with any <a href="https://spec.commonmark.org/0.31.2/#tag-name">tag name</a> other than <code>pre</code>, <code>script</code>,
<code>style</code>, or <code>textarea</code>) or a complete <a href="https://spec.commonmark.org/0.31.2/#closing-tag">closing tag</a>,
followed by zero or more spaces and tabs, followed by the end of the line.<br/>
<strong>End condition:</strong> line is followed by a <a href="#blank-line">blank line</a>.</p>
</li>
</ol><p>HTML blocks continue until they are closed by their appropriate
<a href="#end-condition">end condition</a>, or the last line of the document or other <a href="https://spec.commonmark.org/0.31.2/#container-blocks">container
block</a>.  This means any HTML <strong>within an HTML
block</strong> that might otherwise be recognised as a start condition will
be ignored by the parser and passed through as-is, without changing
the parser’s state.</p><p>For instance, <code>&lt;pre&gt;</code> within an HTML block started by <code>&lt;table&gt;</code> will not affect
the parser state; as the HTML block was started in by start condition 6, it
will end at any blank line. This can be surprising:</p><div class="commonmark-example" id="example-148">
<div class="examplenum">
<a href="#example-148">Example 148</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&lt;tr&gt;&lt;td&gt;&#10;&lt;pre&gt;&#10;**Hello**,&#10;&#10;_world_.&#10;&lt;/pre&gt;&#10;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&lt;tr&gt;&lt;td&gt;&#10;&lt;pre&gt;&#10;**Hello**,&#10;&lt;p&gt;&lt;em&gt;world&lt;/em&gt;.&#10;&lt;/pre&gt;&lt;/p&gt;&#10;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&#10;</code></pre>
</div>
</div><p>In this case, the HTML block is terminated by the blank line — the <code>**Hello**</code>
text remains verbatim — and regular parsing resumes, with a paragraph,
emphasised <code>world</code> and inline and block HTML following.</p><p>All types of <a href="#html-blocks">HTML blocks</a> except type 7 may interrupt
a paragraph.  Blocks of type 7 may not interrupt a paragraph.
(This restriction is intended to prevent unwanted interpretation
of long tags inside a wrapped paragraph as starting HTML blocks.)</p><p>Some simple examples follow.  Here are some basic HTML blocks
of type 6:</p><div class="commonmark-example" id="example-149">
<div class="examplenum">
<a href="#example-149">Example 149</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;  &lt;tr&gt;&#10;    &lt;td&gt;&#10;           hi&#10;    &lt;/td&gt;&#10;  &lt;/tr&gt;&#10;&lt;/table&gt;&#10;&#10;okay.&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;  &lt;tr&gt;&#10;    &lt;td&gt;&#10;           hi&#10;    &lt;/td&gt;&#10;  &lt;/tr&gt;&#10;&lt;/table&gt;&#10;&lt;p&gt;okay.&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-150">
<div class="examplenum">
<a href="#example-150">Example 150</a>
</div>
<div class="column">
<pre><code class="language-text"> &lt;div&gt;&#10;  *hello*&#10;         &lt;foo&gt;&lt;a&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text"> &lt;div&gt;&#10;  *hello*&#10;         &lt;foo&gt;&lt;a&gt;&#10;</code></pre>
</div>
</div><p>A block can also start with a closing tag:</p><div class="commonmark-example" id="example-151">
<div class="examplenum">
<a href="#example-151">Example 151</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;/div&gt;&#10;*foo*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;/div&gt;&#10;*foo*&#10;</code></pre>
</div>
</div><p>Here we have two HTML blocks with a Markdown paragraph between them:</p><div class="commonmark-example" id="example-152">
<div class="examplenum">
<a href="#example-152">Example 152</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;DIV CLASS="foo"&gt;&#10;&#10;*Markdown*&#10;&#10;&lt;/DIV&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;DIV CLASS="foo"&gt;&#10;&lt;p&gt;&lt;em&gt;Markdown&lt;/em&gt;&lt;/p&gt;&#10;&lt;/DIV&gt;&#10;</code></pre>
</div>
</div><p>The tag on the first line can be partial, as long
as it is split where there would be whitespace:</p><div class="commonmark-example" id="example-153">
<div class="examplenum">
<a href="#example-153">Example 153</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo"&#10;  class="bar"&gt;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo"&#10;  class="bar"&gt;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-154">
<div class="examplenum">
<a href="#example-154">Example 154</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo" class="bar&#10;  baz"&gt;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo" class="bar&#10;  baz"&gt;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
</div><p>An open tag need not be closed:</p><div class="commonmark-example" id="example-155">
<div class="examplenum">
<a href="#example-155">Example 155</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;*foo*&#10;&#10;*bar*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;*foo*&#10;&lt;p&gt;&lt;em&gt;bar&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A partial tag need not even be completed (garbage
in, garbage out):</p><div class="commonmark-example" id="example-156">
<div class="examplenum">
<a href="#example-156">Example 156</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo"&#10;*hi*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div id="foo"&#10;*hi*&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-157">
<div class="examplenum">
<a href="#example-157">Example 157</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div class&#10;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div class&#10;foo&#10;</code></pre>
</div>
</div><p>The initial tag doesn’t even need to be a valid
tag, as long as it starts like one:</p><div class="commonmark-example" id="example-158">
<div class="examplenum">
<a href="#example-158">Example 158</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div *???-&amp;&amp;&amp;-&lt;---&#10;*foo*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div *???-&amp;&amp;&amp;-&lt;---&#10;*foo*&#10;</code></pre>
</div>
</div><p>In type 6 blocks, the initial tag need not be on a line by
itself:</p><div class="commonmark-example" id="example-159">
<div class="examplenum">
<a href="#example-159">Example 159</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&lt;a href="bar"&gt;*foo*&lt;/a&gt;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&lt;a href="bar"&gt;*foo*&lt;/a&gt;&lt;/div&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-160">
<div class="examplenum">
<a href="#example-160">Example 160</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&lt;tr&gt;&lt;td&gt;&#10;foo&#10;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&lt;tr&gt;&lt;td&gt;&#10;foo&#10;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&#10;</code></pre>
</div>
</div><p>Everything until the next blank line or end of document
gets included in the HTML block.  So, in the following
example, what looks like a Markdown code block
is actually part of the HTML block, which continues until a blank
line or the end of the document is reached:</p><div class="commonmark-example" id="example-161">
<div class="examplenum">
<a href="#example-161">Example 161</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&lt;/div&gt;&#10;``` c&#10;int x = 33;&#10;```&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&lt;/div&gt;&#10;``` c&#10;int x = 33;&#10;```&#10;</code></pre>
</div>
</div><p>To start an <a href="#html-block">HTML block</a> with a tag that is <em>not</em> in the
list of block-level tags in (6), you must put the tag by
itself on the first line (and it must be complete):</p><div class="commonmark-example" id="example-162">
<div class="examplenum">
<a href="#example-162">Example 162</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="foo"&gt;&#10;*bar*&#10;&lt;/a&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;a href="foo"&gt;&#10;*bar*&#10;&lt;/a&gt;&#10;</code></pre>
</div>
</div><p>In type 7 blocks, the <a href="https://spec.commonmark.org/0.31.2/#tag-name">tag name</a> can be anything:</p><div class="commonmark-example" id="example-163">
<div class="examplenum">
<a href="#example-163">Example 163</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;Warning&gt;&#10;*bar*&#10;&lt;/Warning&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;Warning&gt;&#10;*bar*&#10;&lt;/Warning&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-164">
<div class="examplenum">
<a href="#example-164">Example 164</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;i class="foo"&gt;&#10;*bar*&#10;&lt;/i&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;i class="foo"&gt;&#10;*bar*&#10;&lt;/i&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-165">
<div class="examplenum">
<a href="#example-165">Example 165</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;/ins&gt;&#10;*bar*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;/ins&gt;&#10;*bar*&#10;</code></pre>
</div>
</div><p>These rules are designed to allow us to work with tags that
can function as either block-level or inline-level tags.
The <code>&lt;del&gt;</code> tag is a nice example.  We can surround content with
<code>&lt;del&gt;</code> tags in three different ways.  In this case, we get a raw
HTML block, because the <code>&lt;del&gt;</code> tag is on a line by itself:</p><div class="commonmark-example" id="example-166">
<div class="examplenum">
<a href="#example-166">Example 166</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;del&gt;&#10;*foo*&#10;&lt;/del&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;del&gt;&#10;*foo*&#10;&lt;/del&gt;&#10;</code></pre>
</div>
</div><p>In this case, we get a raw HTML block that just includes
the <code>&lt;del&gt;</code> tag (because it ends with the following blank
line).  So the contents get interpreted as CommonMark:</p><div class="commonmark-example" id="example-167">
<div class="examplenum">
<a href="#example-167">Example 167</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;del&gt;&#10;&#10;*foo*&#10;&#10;&lt;/del&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;del&gt;&#10;&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;&#10;&lt;/del&gt;&#10;</code></pre>
</div>
</div><p>Finally, in this case, the <code>&lt;del&gt;</code> tags are interpreted
as <a href="https://spec.commonmark.org/0.31.2/#raw-html">raw HTML</a> <em>inside</em> the CommonMark paragraph.  (Because
the tag is not on a line by itself, we get inline HTML
rather than an <a href="#html-block">HTML block</a>.)</p><div class="commonmark-example" id="example-168">
<div class="examplenum">
<a href="#example-168">Example 168</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;del&gt;*foo*&lt;/del&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;del&gt;&lt;em&gt;foo&lt;/em&gt;&lt;/del&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>HTML tags designed to contain literal content
(<code>pre</code>, <code>script</code>, <code>style</code>, <code>textarea</code>), comments, processing instructions,
and declarations are treated somewhat differently.
Instead of ending at the first blank line, these blocks
end at the first line containing a corresponding end tag.
As a result, these blocks can contain blank lines:</p><p>A pre tag (type 1):</p><div class="commonmark-example" id="example-169">
<div class="examplenum">
<a href="#example-169">Example 169</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre language="haskell"&gt;&lt;code&gt;&#10;import Text.HTML.TagSoup&#10;&#10;main :: IO ()&#10;main = print $ parseTags tags&#10;&lt;/code&gt;&lt;/pre&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre language="haskell"&gt;&lt;code&gt;&#10;import Text.HTML.TagSoup&#10;&#10;main :: IO ()&#10;main = print $ parseTags tags&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A script tag (type 1):</p><div class="commonmark-example" id="example-170">
<div class="examplenum">
<a href="#example-170">Example 170</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;script type="text/javascript"&gt;&#10;// JavaScript example&#10;&#10;document.getElementById("demo").innerHTML = "Hello JavaScript!";&#10;&lt;/script&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;script type="text/javascript"&gt;&#10;// JavaScript example&#10;&#10;document.getElementById("demo").innerHTML = "Hello JavaScript!";&#10;&lt;/script&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A textarea tag (type 1):</p><div class="commonmark-example" id="example-171">
<div class="examplenum">
<a href="#example-171">Example 171</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;textarea&gt;&#10;&#10;*foo*&#10;&#10;_bar_&#10;&#10;&lt;/textarea&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;textarea&gt;&#10;&#10;*foo*&#10;&#10;_bar_&#10;&#10;&lt;/textarea&gt;&#10;</code></pre>
</div>
</div><p>A style tag (type 1):</p><div class="commonmark-example" id="example-172">
<div class="examplenum">
<a href="#example-172">Example 172</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&#10;  type="text/css"&gt;&#10;h1 {color:red;}&#10;&#10;p {color:blue;}&#10;&lt;/style&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&#10;  type="text/css"&gt;&#10;h1 {color:red;}&#10;&#10;p {color:blue;}&#10;&lt;/style&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>If there is no matching end tag, the block will end at the
end of the document (or the enclosing <a href="https://spec.commonmark.org/0.31.2/#block-quotes">block quote</a>
or <a href="https://spec.commonmark.org/0.31.2/#list-items">list item</a>):</p><div class="commonmark-example" id="example-173">
<div class="examplenum">
<a href="#example-173">Example 173</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&#10;  type="text/css"&gt;&#10;&#10;foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&#10;  type="text/css"&gt;&#10;&#10;foo&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-174">
<div class="examplenum">
<a href="#example-174">Example 174</a>
</div>
<div class="column">
<pre><code class="language-text">&gt; &lt;div&gt;&#10;&gt; foo&#10;&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;blockquote&gt;&#10;&lt;div&gt;&#10;foo&#10;&lt;/blockquote&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-175">
<div class="examplenum">
<a href="#example-175">Example 175</a>
</div>
<div class="column">
<pre><code class="language-text">- &lt;div&gt;&#10;- foo&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;ul&gt;&#10;&lt;li&gt;&#10;&lt;div&gt;&#10;&lt;/li&gt;&#10;&lt;li&gt;foo&lt;/li&gt;&#10;&lt;/ul&gt;&#10;</code></pre>
</div>
</div><p>The end tag can occur on the same line as the start tag:</p><div class="commonmark-example" id="example-176">
<div class="examplenum">
<a href="#example-176">Example 176</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&gt;p{color:red;}&lt;/style&gt;&#10;*foo*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;style&gt;p{color:red;}&lt;/style&gt;&#10;&lt;p&gt;&lt;em&gt;foo&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-177">
<div class="examplenum">
<a href="#example-177">Example 177</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;!-- foo --&gt;*bar*&#10;*baz*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;!-- foo --&gt;*bar*&#10;&lt;p&gt;&lt;em&gt;baz&lt;/em&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Note that anything on the last line after the
end tag will be included in the <a href="#html-block">HTML block</a>:</p><div class="commonmark-example" id="example-178">
<div class="examplenum">
<a href="#example-178">Example 178</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;script&gt;&#10;foo&#10;&lt;/script&gt;1. *bar*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;script&gt;&#10;foo&#10;&lt;/script&gt;1. *bar*&#10;</code></pre>
</div>
</div><p>A comment (type 2):</p><div class="commonmark-example" id="example-179">
<div class="examplenum">
<a href="#example-179">Example 179</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;!-- Foo&#10;&#10;bar&#10;   baz --&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;!-- Foo&#10;&#10;bar&#10;   baz --&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A processing instruction (type 3):</p><div class="commonmark-example" id="example-180">
<div class="examplenum">
<a href="#example-180">Example 180</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;?php&#10;&#10;  echo '&gt;';&#10;&#10;?&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;?php&#10;&#10;  echo '&gt;';&#10;&#10;?&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A declaration (type 4):</p><div class="commonmark-example" id="example-181">
<div class="examplenum">
<a href="#example-181">Example 181</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;!DOCTYPE html&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;!DOCTYPE html&gt;&#10;</code></pre>
</div>
</div><p>CDATA (type 5):</p><div class="commonmark-example" id="example-182">
<div class="examplenum">
<a href="#example-182">Example 182</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;![CDATA[&#10;function matchwo(a,b)&#10;{&#10;  if (a &lt; b &amp;&amp; a &lt; 0) then {&#10;    return 1;&#10;&#10;  } else {&#10;&#10;    return 0;&#10;  }&#10;}&#10;]]&gt;&#10;okay&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;![CDATA[&#10;function matchwo(a,b)&#10;{&#10;  if (a &lt; b &amp;&amp; a &lt; 0) then {&#10;    return 1;&#10;&#10;  } else {&#10;&#10;    return 0;&#10;  }&#10;}&#10;]]&gt;&#10;&lt;p&gt;okay&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>The opening tag can be preceded by up to three spaces of indentation, but not
four:</p><div class="commonmark-example" id="example-183">
<div class="examplenum">
<a href="#example-183">Example 183</a>
</div>
<div class="column">
<pre><code class="language-text">  &lt;!-- foo --&gt;&#10;&#10;    &lt;!-- foo --&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">  &lt;!-- foo --&gt;&#10;&lt;pre&gt;&lt;code&gt;&amp;lt;!-- foo --&amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-184">
<div class="examplenum">
<a href="#example-184">Example 184</a>
</div>
<div class="column">
<pre><code class="language-text">  &lt;div&gt;&#10;&#10;    &lt;div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">  &lt;div&gt;&#10;&lt;pre&gt;&lt;code&gt;&amp;lt;div&amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;</code></pre>
</div>
</div><p>An HTML block of types 1–6 can interrupt a paragraph, and need not be
preceded by a blank line.</p><div class="commonmark-example" id="example-185">
<div class="examplenum">
<a href="#example-185">Example 185</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;&lt;div&gt;&#10;bar&#10;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&lt;/p&gt;&#10;&lt;div&gt;&#10;bar&#10;&lt;/div&gt;&#10;</code></pre>
</div>
</div><p>However, a following blank line is needed, except at the end of
a document, and except for blocks of types 1–5, <a href="#html-block">above</a>:</p><div class="commonmark-example" id="example-186">
<div class="examplenum">
<a href="#example-186">Example 186</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;bar&#10;&lt;/div&gt;&#10;*foo*&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;bar&#10;&lt;/div&gt;&#10;*foo*&#10;</code></pre>
</div>
</div><p>HTML blocks of type 7 cannot interrupt a paragraph:</p><div class="commonmark-example" id="example-187">
<div class="examplenum">
<a href="#example-187">Example 187</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;&lt;a href="bar"&gt;&#10;baz&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;&lt;a href="bar"&gt;&#10;baz&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>This rule differs from John Gruber’s original Markdown syntax
specification, which says:</p><blockquote>
<p>The only restrictions are that block-level HTML elements —
e.g. <code>&lt;div&gt;</code>, <code>&lt;table&gt;</code>, <code>&lt;pre&gt;</code>, <code>&lt;p&gt;</code>, etc. — must be separated from
surrounding content by blank lines, and the start and end tags of the
block should not be indented with spaces or tabs.</p>
</blockquote><p>In some ways Gruber’s rule is more restrictive than the one given
here:</p><ul>
<li>It requires that an HTML block be preceded by a blank line.</li>
<li>It does not allow the start tag to be indented.</li>
<li>It requires a matching end tag, which it also does not allow to
be indented.</li>
</ul><p>Most Markdown implementations (including some of Gruber’s own) do not
respect all of these restrictions.</p><p>There is one respect, however, in which Gruber’s rule is more liberal
than the one given here, since it allows blank lines to occur inside
an HTML block.  There are two reasons for disallowing them here.
First, it removes the need to parse balanced tags, which is
expensive and can require backtracking from the end of the document
if no matching end tag is found. Second, it provides a very simple
and flexible way of including Markdown content inside HTML tags:
simply separate the Markdown from the HTML using blank lines:</p><p>Compare:</p><div class="commonmark-example" id="example-188">
<div class="examplenum">
<a href="#example-188">Example 188</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;&#10;*Emphasized* text.&#10;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;&lt;p&gt;&lt;em&gt;Emphasized&lt;/em&gt; text.&lt;/p&gt;&#10;&lt;/div&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-189">
<div class="examplenum">
<a href="#example-189">Example 189</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;*Emphasized* text.&#10;&lt;/div&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;div&gt;&#10;*Emphasized* text.&#10;&lt;/div&gt;&#10;</code></pre>
</div>
</div><p>Some Markdown implementations have adopted a convention of
interpreting content inside tags as text if the open tag has
the attribute <code>markdown=1</code>.  The rule given above seems a simpler and
more elegant way of achieving the same expressive power, which is also
much simpler to parse.</p><p>The main potential drawback is that one can no longer paste HTML
blocks into Markdown documents with 100% reliability.  However,
<em>in most cases</em> this will work fine, because the blank lines in
HTML are usually followed by HTML block tags.  For example:</p><div class="commonmark-example" id="example-190">
<div class="examplenum">
<a href="#example-190">Example 190</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;&#10;&lt;tr&gt;&#10;&#10;&lt;td&gt;&#10;Hi&#10;&lt;/td&gt;&#10;&#10;&lt;/tr&gt;&#10;&#10;&lt;/table&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;&lt;tr&gt;&#10;&lt;td&gt;&#10;Hi&#10;&lt;/td&gt;&#10;&lt;/tr&gt;&#10;&lt;/table&gt;&#10;</code></pre>
</div>
</div><p>There are problems, however, if the inner tags are indented
<em>and</em> separated by spaces, as then they will be interpreted as
an indented code block:</p><div class="commonmark-example" id="example-191">
<div class="examplenum">
<a href="#example-191">Example 191</a>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;&#10;  &lt;tr&gt;&#10;&#10;    &lt;td&gt;&#10;      Hi&#10;    &lt;/td&gt;&#10;&#10;  &lt;/tr&gt;&#10;&#10;&lt;/table&gt;&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;table&gt;&#10;  &lt;tr&gt;&#10;&lt;pre&gt;&lt;code&gt;&amp;lt;td&amp;gt;&#10;  Hi&#10;&amp;lt;/td&amp;gt;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;  &lt;/tr&gt;&#10;&lt;/table&gt;&#10;</code></pre>
</div>
</div><p>Fortunately, blank lines are usually not necessary and can be
deleted.  The exception is inside <code>&lt;pre&gt;</code> tags, but as described
<a href="#html-blocks">above</a>, raw HTML blocks starting with <code>&lt;pre&gt;</code>
<em>can</em> contain blank lines.</p><h3 class="definition" id="link-reference-definitions">
<span class="number">4.7</span>Link reference definitions
</h3><p>A <a class="definition" href="#link-reference-definition" id="link-reference-definition">link reference definition</a>
consists of a <a href="https://spec.commonmark.org/0.31.2/#link-label">link label</a>, optionally preceded by up to three spaces of
indentation, followed
by a colon (<code>:</code>), optional spaces or tabs (including up to one
<a href="#line-ending">line ending</a>), a <a href="https://spec.commonmark.org/0.31.2/#link-destination">link destination</a>,
optional spaces or tabs (including up to one
<a href="#line-ending">line ending</a>), and an optional <a href="https://spec.commonmark.org/0.31.2/#link-title">link
title</a>, which if it is present must be separated
from the <a href="https://spec.commonmark.org/0.31.2/#link-destination">link destination</a> by spaces or tabs.
No further character may occur.</p><p>A <a href="#link-reference-definition">link reference definition</a>
does not correspond to a structural element of a document.  Instead, it
defines a label which can be used in <a href="https://spec.commonmark.org/0.31.2/#reference-link">reference links</a>
and reference-style <a href="https://spec.commonmark.org/0.31.2/#images">images</a> elsewhere in the document.  <a href="#link-reference-definition">Link
reference definitions</a> can come either before or after the links that use
them.</p><div class="commonmark-example" id="example-192">
<div class="examplenum">
<a href="#example-192">Example 192</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url "title"&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url" title="title"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-193">
<div class="examplenum">
<a href="#example-193">Example 193</a>
</div>
<div class="column">
<pre><code class="language-text">   [foo]: &#10;      /url  &#10;           'the title'  &#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url" title="the title"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-194">
<div class="examplenum">
<a href="#example-194">Example 194</a>
</div>
<div class="column">
<pre><code class="language-text">[Foo*bar\]]:my_(url) 'title (with parens)'&#10;&#10;[Foo*bar\]]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="my_(url)" title="title (with parens)"&gt;Foo*bar]&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-195">
<div class="examplenum">
<a href="#example-195">Example 195</a>
</div>
<div class="column">
<pre><code class="language-text">[Foo bar]:&#10;&lt;my url&gt;&#10;'title'&#10;&#10;[Foo bar]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="my%20url" title="title"&gt;Foo bar&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>The title may extend over multiple lines:</p><div class="commonmark-example" id="example-196">
<div class="examplenum">
<a href="#example-196">Example 196</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url '&#10;title&#10;line1&#10;line2&#10;'&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url" title="&#10;title&#10;line1&#10;line2&#10;"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>However, it may not contain a <a href="#blank-line">blank line</a>:</p><div class="commonmark-example" id="example-197">
<div class="examplenum">
<a href="#example-197">Example 197</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url 'title&#10;&#10;with blank line'&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;[foo]: /url 'title&lt;/p&gt;&#10;&lt;p&gt;with blank line'&lt;/p&gt;&#10;&lt;p&gt;[foo]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>The title may be omitted:</p><div class="commonmark-example" id="example-198">
<div class="examplenum">
<a href="#example-198">Example 198</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]:&#10;/url&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>The link destination may not be omitted:</p><div class="commonmark-example" id="example-199">
<div class="examplenum">
<a href="#example-199">Example 199</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]:&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;[foo]:&lt;/p&gt;&#10;&lt;p&gt;[foo]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>However, an empty link destination may be specified using
angle brackets:</p><div class="commonmark-example" id="example-200">
<div class="examplenum">
<a href="#example-200">Example 200</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: &lt;&gt;&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href=""&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>The title must be separated from the link destination by
spaces or tabs:</p><div class="commonmark-example" id="example-201">
<div class="examplenum">
<a href="#example-201">Example 201</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: &lt;bar&gt;(baz)&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;[foo]: &lt;bar&gt;(baz)&lt;/p&gt;&#10;&lt;p&gt;[foo]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Both title and destination can contain backslash escapes
and literal backslashes:</p><div class="commonmark-example" id="example-202">
<div class="examplenum">
<a href="#example-202">Example 202</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url\bar\*baz "foo\"bar\baz"&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url%5Cbar*baz" title="foo&amp;quot;bar\baz"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A link can come before its corresponding definition:</p><div class="commonmark-example" id="example-203">
<div class="examplenum">
<a href="#example-203">Example 203</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]&#10;&#10;[foo]: url&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="url"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>If there are several matching definitions, the first one takes
precedence:</p><div class="commonmark-example" id="example-204">
<div class="examplenum">
<a href="#example-204">Example 204</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]&#10;&#10;[foo]: first&#10;[foo]: second&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="first"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>As noted in the section on <a href="https://spec.commonmark.org/0.31.2/#links">Links</a>, matching of labels is
case-insensitive (see <a href="https://spec.commonmark.org/0.31.2/#matches">matches</a>).</p><div class="commonmark-example" id="example-205">
<div class="examplenum">
<a href="#example-205">Example 205</a>
</div>
<div class="column">
<pre><code class="language-text">[FOO]: /url&#10;&#10;[Foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url"&gt;Foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-206">
<div class="examplenum">
<a href="#example-206">Example 206</a>
</div>
<div class="column">
<pre><code class="language-text">[ΑΓΩ]: /φου&#10;&#10;[αγω]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/%CF%86%CE%BF%CF%85"&gt;αγω&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Whether something is a <a href="#link-reference-definition">link reference definition</a> is
independent of whether the link reference it defines is
used in the document.  Thus, for example, the following
document contains just a link reference definition, and
no visible content:</p><div class="commonmark-example" id="example-207">
<div class="examplenum">
<a href="#example-207">Example 207</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text"></code></pre>
</div>
</div><p>Here is another one:</p><div class="commonmark-example" id="example-208">
<div class="examplenum">
<a href="#example-208">Example 208</a>
</div>
<div class="column">
<pre><code class="language-text">[&#10;foo&#10;]: /url&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>This is not a link reference definition, because there are
characters other than spaces or tabs after the title:</p><div class="commonmark-example" id="example-209">
<div class="examplenum">
<a href="#example-209">Example 209</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url "title" ok&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;[foo]: /url &amp;quot;title&amp;quot; ok&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>This is a link reference definition, but it has no title:</p><div class="commonmark-example" id="example-210">
<div class="examplenum">
<a href="#example-210">Example 210</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url&#10;"title" ok&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&amp;quot;title&amp;quot; ok&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>This is not a link reference definition, because it is indented
four spaces:</p><div class="commonmark-example" id="example-211">
<div class="examplenum">
<a href="#example-211">Example 211</a>
</div>
<div class="column">
<pre><code class="language-text">    [foo]: /url "title"&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;[foo]: /url &amp;quot;title&amp;quot;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;[foo]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>This is not a link reference definition, because it occurs inside
a code block:</p><div class="commonmark-example" id="example-212">
<div class="examplenum">
<a href="#example-212">Example 212</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;[foo]: /url&#10;```&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;[foo]: /url&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;[foo]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>A <a href="#link-reference-definition">link reference definition</a> cannot interrupt a paragraph.</p><div class="commonmark-example" id="example-213">
<div class="examplenum">
<a href="#example-213">Example 213</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;[bar]: /baz&#10;&#10;[bar]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;[bar]: /baz&lt;/p&gt;&#10;&lt;p&gt;[bar]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>However, it can directly follow other block elements, such as headings
and thematic breaks, and it need not be followed by a blank line.</p><div class="commonmark-example" id="example-214">
<div class="examplenum">
<a href="#example-214">Example 214</a>
</div>
<div class="column">
<pre><code class="language-text"># [Foo]&#10;[foo]: /url&#10;&gt; bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;&lt;a href="/url"&gt;Foo&lt;/a&gt;&lt;/h1&gt;&#10;&lt;blockquote&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;&lt;/blockquote&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-215">
<div class="examplenum">
<a href="#example-215">Example 215</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url&#10;bar&#10;===&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;bar&lt;/h1&gt;&#10;&lt;p&gt;&lt;a href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-216">
<div class="examplenum">
<a href="#example-216">Example 216</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url&#10;===&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;===&#10;&lt;a href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>Several <a href="#link-reference-definition">link reference definitions</a>
can occur one after another, without intervening blank lines.</p><div class="commonmark-example" id="example-217">
<div class="examplenum">
<a href="#example-217">Example 217</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /foo-url "foo"&#10;[bar]: /bar-url&#10;  "bar"&#10;[baz]: /baz-url&#10;&#10;[foo],&#10;[bar],&#10;[baz]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/foo-url" title="foo"&gt;foo&lt;/a&gt;,&#10;&lt;a href="/bar-url" title="bar"&gt;bar&lt;/a&gt;,&#10;&lt;a href="/baz-url"&gt;baz&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p><a href="#link-reference-definition">Link reference definitions</a> can occur
inside block containers, like lists and block quotations.  They
affect the entire document, not just the container in which they
are defined:</p><div class="commonmark-example" id="example-218">
<div class="examplenum">
<a href="#example-218">Example 218</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]&#10;&#10;&gt; [foo]: /url&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;&lt;blockquote&gt;&#10;&lt;/blockquote&gt;&#10;</code></pre>
</div>
</div><h3 class="definition" id="paragraphs">
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
