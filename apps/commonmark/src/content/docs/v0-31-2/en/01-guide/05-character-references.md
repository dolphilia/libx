---
title: "Entity and Numeric Character References"
description: "Rules and original examples from CommonMark 0.31.2."
documentId: "commonmark:0.31.2:05-character-references"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="entity-and-numeric-character-references">
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
URLs, <a href="https://spec.commonmark.org/0.31.2/#link-title">link titles</a>, and <a href="/docs/commonmark/v0-31-2/en/01-guide/11-fenced-code-blocks/#fenced-code-block">fenced code block</a> <a href="/docs/commonmark/v0-31-2/en/01-guide/11-fenced-code-blocks/#info-string">info strings</a>:</p><div class="commonmark-example" id="example-31">
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
</div>
</div>
