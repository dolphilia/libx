---
title: "Thematic Breaks"
description: "Rules and original examples from CommonMark 0.31.2."
documentId: "commonmark:0.31.2:07-thematic-breaks"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h2 class="definition" data-source-heading="chapter" id="leaf-blocks">
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
thematic break could also be interpreted as the underline of a <a href="/docs/commonmark/v0-31-2/en/01-guide/09-setext-headings/#setext-heading">setext
heading</a>, the interpretation as a
<a href="/docs/commonmark/v0-31-2/en/01-guide/09-setext-headings/#setext-heading">setext heading</a> takes precedence. Thus, for example,
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
</div>
</div>
