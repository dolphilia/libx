<div class="commonmark-original-content">
<h2 class="definition" data-source-heading="chapter" id="blocks-and-inlines">
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
which can contain other blocks, and <a href="/docs/commonmark/v0-31-2/en/01-guide/07-thematic-breaks/#leaf-blocks">leaf blocks</a>,
which cannot.</p>
</div>
