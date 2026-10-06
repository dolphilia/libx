---
title: "Backslash Escapes"
description: "Rules and original examples from CommonMark 0.31.2."
documentId: "commonmark:0.31.2:04-backslash-escapes"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="backslash-escapes">
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
link references, and <a href="/docs/commonmark/v0-31-2/en/01-guide/11-fenced-code-blocks/#info-string">info strings</a> in <a href="/docs/commonmark/v0-31-2/en/01-guide/11-fenced-code-blocks/#fenced-code-blocks">fenced code blocks</a>:</p><div class="commonmark-example" id="example-22">
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
</div>
</div>
