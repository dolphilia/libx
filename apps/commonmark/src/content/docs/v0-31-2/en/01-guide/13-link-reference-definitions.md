---
title: "Link Reference Definitions"
description: "Rules and original examples from CommonMark 0.31.2."
documentId: "commonmark:0.31.2:13-link-reference-definitions"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="link-reference-definitions">
<span class="number">4.7</span>Link reference definitions
</h3><p>A <a class="definition" href="#link-reference-definition" id="link-reference-definition">link reference definition</a>
consists of a <a href="https://spec.commonmark.org/0.31.2/#link-label">link label</a>, optionally preceded by up to three spaces of
indentation, followed
by a colon (<code>:</code>), optional spaces or tabs (including up to one
<a href="/docs/commonmark/v0-31-2/en/01-guide/02-characters-and-lines/#line-ending">line ending</a>), a <a href="https://spec.commonmark.org/0.31.2/#link-destination">link destination</a>,
optional spaces or tabs (including up to one
<a href="/docs/commonmark/v0-31-2/en/01-guide/02-characters-and-lines/#line-ending">line ending</a>), and an optional <a href="https://spec.commonmark.org/0.31.2/#link-title">link
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
</div><p>However, it may not contain a <a href="/docs/commonmark/v0-31-2/en/01-guide/02-characters-and-lines/#blank-line">blank line</a>:</p><div class="commonmark-example" id="example-197">
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
</div>
</div>
