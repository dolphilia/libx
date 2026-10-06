---
title: "リンク参照定義"
description: "CommonMark 0.31.2の規則と原典の対照例。"
documentId: "commonmark:0.31.2:13-link-reference-definitions"
licenseSource: commonmark-spec
---

<div class="commonmark-original-content">
<h3 class="definition" id="link-reference-definitions"><span class="number">4.7</span>リンク参照定義</h3><p><a class="definition" href="#link-reference-definition" id="link-reference-definition">リンク参照定義</a>は、任意で最大3個のスペースによる字下げを前に置いた<a href="https://spec.commonmark.org/0.31.2/#link-label">リンクラベル</a>、コロン（<code>:</code>）、任意のスペースやタブ（最大1つの<a href="/docs/commonmark/v0-31-2/ja/01-guide/02-characters-and-lines/#line-ending">行末</a>を含む）、<a href="https://spec.commonmark.org/0.31.2/#link-destination">リンク先</a>、任意のスペースやタブ（最大1つの<a href="/docs/commonmark/v0-31-2/ja/01-guide/02-characters-and-lines/#line-ending">行末</a>を含む）、任意の<a href="https://spec.commonmark.org/0.31.2/#link-title">リンクタイトル</a>からなります。タイトルがある場合は、<a href="https://spec.commonmark.org/0.31.2/#link-destination">リンク先</a>とスペースやタブで区切らなければなりません。それ以外の文字を続けることはできません。</p><p><a href="#link-reference-definition">リンク参照定義</a>は、文書の構造要素に対応するものではありません。文書の別の場所にある<a href="https://spec.commonmark.org/0.31.2/#reference-link">参照リンク</a>や、参照形式の<a href="https://spec.commonmark.org/0.31.2/#images">画像</a>で使えるラベルを定義します。<a href="#link-reference-definition">リンク参照定義</a>は、それを使うリンクの前にも後にも置けます。</p><div class="commonmark-example" id="example-192">
<div class="examplenum">
<a href="#example-192">例192</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url "title"&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url" title="title"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-193">
<div class="examplenum">
<a href="#example-193">例193</a>
</div>
<div class="column">
<pre><code class="language-text">   [foo]: &#10;      /url  &#10;           'the title'  &#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url" title="the title"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-194">
<div class="examplenum">
<a href="#example-194">例194</a>
</div>
<div class="column">
<pre><code class="language-text">[Foo*bar\]]:my_(url) 'title (with parens)'&#10;&#10;[Foo*bar\]]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="my_(url)" title="title (with parens)"&gt;Foo*bar]&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-195">
<div class="examplenum">
<a href="#example-195">例195</a>
</div>
<div class="column">
<pre><code class="language-text">[Foo bar]:&#10;&lt;my url&gt;&#10;'title'&#10;&#10;[Foo bar]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="my%20url" title="title"&gt;Foo bar&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>タイトルは、複数行にまたがっていてもかまいません。</p><div class="commonmark-example" id="example-196">
<div class="examplenum">
<a href="#example-196">例196</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url '&#10;title&#10;line1&#10;line2&#10;'&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url" title="&#10;title&#10;line1&#10;line2&#10;"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>ただし、<a href="/docs/commonmark/v0-31-2/ja/01-guide/02-characters-and-lines/#blank-line">空行</a>を含めることはできません。</p><div class="commonmark-example" id="example-197">
<div class="examplenum">
<a href="#example-197">例197</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url 'title&#10;&#10;with blank line'&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;[foo]: /url 'title&lt;/p&gt;&#10;&lt;p&gt;with blank line'&lt;/p&gt;&#10;&lt;p&gt;[foo]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>タイトルは省略できます。</p><div class="commonmark-example" id="example-198">
<div class="examplenum">
<a href="#example-198">例198</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]:&#10;/url&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>リンク先は省略できません。</p><div class="commonmark-example" id="example-199">
<div class="examplenum">
<a href="#example-199">例199</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]:&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;[foo]:&lt;/p&gt;&#10;&lt;p&gt;[foo]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>ただし、山括弧を使って空のリンク先を指定することはできます。</p><div class="commonmark-example" id="example-200">
<div class="examplenum">
<a href="#example-200">例200</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: &lt;&gt;&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href=""&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>タイトルは、リンク先とスペースやタブで区切らなければなりません。</p><div class="commonmark-example" id="example-201">
<div class="examplenum">
<a href="#example-201">例201</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: &lt;bar&gt;(baz)&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;[foo]: &lt;bar&gt;(baz)&lt;/p&gt;&#10;&lt;p&gt;[foo]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>タイトルとリンク先の両方に、バックスラッシュによるエスケープと、文字どおりのバックスラッシュを含められます。</p><div class="commonmark-example" id="example-202">
<div class="examplenum">
<a href="#example-202">例202</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url\bar\*baz "foo\"bar\baz"&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url%5Cbar*baz" title="foo&amp;quot;bar\baz"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>リンクは、対応する定義の前に置けます。</p><div class="commonmark-example" id="example-203">
<div class="examplenum">
<a href="#example-203">例203</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]&#10;&#10;[foo]: url&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="url"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>一致する定義が複数ある場合、最初の定義が優先されます。</p><div class="commonmark-example" id="example-204">
<div class="examplenum">
<a href="#example-204">例204</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]&#10;&#10;[foo]: first&#10;[foo]: second&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="first"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p><a href="https://spec.commonmark.org/0.31.2/#links">リンク</a>の節で述べたとおり、ラベルの照合では大文字と小文字を区別しません（<a href="https://spec.commonmark.org/0.31.2/#matches">照合</a>を参照してください）。</p><div class="commonmark-example" id="example-205">
<div class="examplenum">
<a href="#example-205">例205</a>
</div>
<div class="column">
<pre><code class="language-text">[FOO]: /url&#10;&#10;[Foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url"&gt;Foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-206">
<div class="examplenum">
<a href="#example-206">例206</a>
</div>
<div class="column">
<pre><code class="language-text">[ΑΓΩ]: /φου&#10;&#10;[αγω]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/%CF%86%CE%BF%CF%85"&gt;αγω&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>ある内容が<a href="#link-reference-definition">リンク参照定義</a>であるかどうかは、そこで定義したリンク参照が文書内で使われているかどうかとは無関係です。したがって、たとえば次の文書にはリンク参照定義だけが含まれ、表示される内容はありません。</p><div class="commonmark-example" id="example-207">
<div class="examplenum">
<a href="#example-207">例207</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text"></code></pre>
</div>
</div><p>もう1つの例です。</p><div class="commonmark-example" id="example-208">
<div class="examplenum">
<a href="#example-208">例208</a>
</div>
<div class="column">
<pre><code class="language-text">[&#10;foo&#10;]: /url&#10;bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;bar&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>タイトルの後にスペースとタブ以外の文字があるため、これはリンク参照定義ではありません。</p><div class="commonmark-example" id="example-209">
<div class="examplenum">
<a href="#example-209">例209</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url "title" ok&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;[foo]: /url &amp;quot;title&amp;quot; ok&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>これはリンク参照定義ですが、タイトルはありません。</p><div class="commonmark-example" id="example-210">
<div class="examplenum">
<a href="#example-210">例210</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url&#10;"title" ok&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&amp;quot;title&amp;quot; ok&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>4個のスペースで字下げされているため、これはリンク参照定義ではありません。</p><div class="commonmark-example" id="example-211">
<div class="examplenum">
<a href="#example-211">例211</a>
</div>
<div class="column">
<pre><code class="language-text">    [foo]: /url "title"&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;[foo]: /url &amp;quot;title&amp;quot;&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;[foo]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>コードブロックの内部にあるため、これはリンク参照定義ではありません。</p><div class="commonmark-example" id="example-212">
<div class="examplenum">
<a href="#example-212">例212</a>
</div>
<div class="column">
<pre><code class="language-text">```&#10;[foo]: /url&#10;```&#10;&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;pre&gt;&lt;code&gt;[foo]: /url&#10;&lt;/code&gt;&lt;/pre&gt;&#10;&lt;p&gt;[foo]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p><a href="#link-reference-definition">リンク参照定義</a>は、段落を中断できません。</p><div class="commonmark-example" id="example-213">
<div class="examplenum">
<a href="#example-213">例213</a>
</div>
<div class="column">
<pre><code class="language-text">Foo&#10;[bar]: /baz&#10;&#10;[bar]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;Foo&#10;[bar]: /baz&lt;/p&gt;&#10;&lt;p&gt;[bar]&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>ただし、見出しや主題区切りなど、ほかのブロック要素の直後には置けます。また、後ろに空行を置く必要はありません。</p><div class="commonmark-example" id="example-214">
<div class="examplenum">
<a href="#example-214">例214</a>
</div>
<div class="column">
<pre><code class="language-text"># [Foo]&#10;[foo]: /url&#10;&gt; bar&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;&lt;a href="/url"&gt;Foo&lt;/a&gt;&lt;/h1&gt;&#10;&lt;blockquote&gt;&#10;&lt;p&gt;bar&lt;/p&gt;&#10;&lt;/blockquote&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-215">
<div class="examplenum">
<a href="#example-215">例215</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url&#10;bar&#10;===&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;h1&gt;bar&lt;/h1&gt;&#10;&lt;p&gt;&lt;a href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><div class="commonmark-example" id="example-216">
<div class="examplenum">
<a href="#example-216">例216</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /url&#10;===&#10;[foo]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;===&#10;&lt;a href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p>複数の<a href="#link-reference-definition">リンク参照定義</a>を、間に空行を置かず、続けて置けます。</p><div class="commonmark-example" id="example-217">
<div class="examplenum">
<a href="#example-217">例217</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]: /foo-url "foo"&#10;[bar]: /bar-url&#10;  "bar"&#10;[baz]: /baz-url&#10;&#10;[foo],&#10;[bar],&#10;[baz]&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/foo-url" title="foo"&gt;foo&lt;/a&gt;,&#10;&lt;a href="/bar-url" title="bar"&gt;bar&lt;/a&gt;,&#10;&lt;a href="/baz-url"&gt;baz&lt;/a&gt;&lt;/p&gt;&#10;</code></pre>
</div>
</div><p><a href="#link-reference-definition">リンク参照定義</a>は、リストやブロック引用などのブロックコンテナの内部にも置けます。定義は、そのコンテナの内部だけでなく、文書全体に作用します。</p><div class="commonmark-example" id="example-218">
<div class="examplenum">
<a href="#example-218">例218</a>
</div>
<div class="column">
<pre><code class="language-text">[foo]&#10;&#10;&gt; [foo]: /url&#10;</code></pre>
</div>
<div class="column">
<pre><code class="language-text">&lt;p&gt;&lt;a href="/url"&gt;foo&lt;/a&gt;&lt;/p&gt;&#10;&lt;blockquote&gt;&#10;&lt;/blockquote&gt;&#10;</code></pre>
</div>
</div>
</div>
