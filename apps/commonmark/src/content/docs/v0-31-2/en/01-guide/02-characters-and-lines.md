---
title: "Characters and Lines"
description: "Rules and original examples from CommonMark 0.31.2."
documentId: "commonmark:0.31.2:02-characters-and-lines"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h2 class="definition" data-source-heading="chapter" id="preliminaries">
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
(puncuation) or <code>S</code> (symbol) general categories.</p>
</div>
