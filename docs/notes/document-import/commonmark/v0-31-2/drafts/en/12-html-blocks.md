<div class="commonmark-original-content">
<h3 class="definition" id="html-blocks">
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
<strong>End condition:</strong> line is followed by a <a href="/docs/commonmark/v0-31-2/en/01-guide/02-characters-and-lines/#blank-line">blank line</a>.</p>
</li>
<li>
<p><strong>Start condition:</strong>  line begins with a complete <a href="https://spec.commonmark.org/0.31.2/#open-tag">open tag</a>
(with any <a href="https://spec.commonmark.org/0.31.2/#tag-name">tag name</a> other than <code>pre</code>, <code>script</code>,
<code>style</code>, or <code>textarea</code>) or a complete <a href="https://spec.commonmark.org/0.31.2/#closing-tag">closing tag</a>,
followed by zero or more spaces and tabs, followed by the end of the line.<br/>
<strong>End condition:</strong> line is followed by a <a href="/docs/commonmark/v0-31-2/en/01-guide/02-characters-and-lines/#blank-line">blank line</a>.</p>
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
<em>can</em> contain blank lines.</p>
</div>
