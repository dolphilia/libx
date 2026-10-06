---
title: "Introduction"
description: "Rules and original examples from CommonMark 0.31.2."
documentId: "commonmark:0.31.2:01-introduction"
licenseSource: commonmark-spec
---

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
HTML or CommonMark (which can then be converted into other formats).</p><p>In the examples, the <code>→</code> character is used to represent tabs.</p>
</div>
