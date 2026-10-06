---
title: "Markdown"
documentId: "mdbook:guide/src/format/markdown.md"
order: 26
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/markdown.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/format/markdown.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/20-format-markdown.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Original example assets retained. Rust logo: CC BY 4.0, unchanged, no affiliation or endorsement. Font Awesome SVG: CC BY 4.0; non-icon code: MIT. The original MIT wording and literal SVG example remain unchanged. Original example materials retain their separate terms; Libx provides an unofficial static edition.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/markdown.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}, {"kind": "editorial", "html": "<p>Images are displayed once as static figures. The image zoom instructions describe the original mdBook output; use the original project for those controls.</p>"}]
prev: {"text": "mdBook-specific features", "link": "/v0-5-4/en/01-guide/22-format-mdbook"}
next: {"text": "Continuous integration", "link": "/v0-5-4/en/01-guide/10-continuous-integration"}
---


<div class="mdbook-guide">
<h1 id="markdown"><a class="header" href="#markdown">Markdown</a></h1>
<p>mdBook’s <a href="https://github.com/raphlinus/pulldown-cmark">parser</a> adheres to the <a href="https://commonmark.org/">CommonMark</a> specification with some extensions described below.
You can take a quick <a href="https://commonmark.org/help/tutorial/">tutorial</a>,
or <a href="https://spec.commonmark.org/dingus/">try out</a> CommonMark in real time. A complete Markdown overview is out of scope for
this documentation, but below is a high level overview of some of the basics. For a more in-depth experience, check out the
<a href="https://www.markdownguide.org">Markdown Guide</a>.</p>
<h2 id="text-and-paragraphs"><a class="header" href="#text-and-paragraphs">Text and paragraphs</a></h2>
<p>Text is rendered relatively predictably:</p>
<pre><code class="language-markdown">Here is a line of text.&#10;&#10;This is a new line.&#10;</code></pre>
<p>Will look like you might expect:</p>
<p>Here is a line of text.</p>
<p>This is a new line.</p>
<h2 id="headings"><a class="header" href="#headings">Headings</a></h2>
<p>Headings use the <code>#</code> marker and should be on a line by themselves. More <code>#</code> mean smaller headings:</p>
<pre><code class="language-markdown">### A heading &#10;&#10;Some text.&#10;&#10;#### A smaller heading &#10;&#10;More text.&#10;</code></pre>
<h3 id="a-heading"><a class="header" href="#a-heading">A heading</a></h3>
<p>Some text.</p>
<h4 id="a-smaller-heading"><a class="header" href="#a-smaller-heading">A smaller heading</a></h4>
<p>More text.</p>
<h2 id="lists"><a class="header" href="#lists">Lists</a></h2>
<p>Lists can be unordered or ordered. Ordered lists will order automatically:</p>
<pre><code class="language-markdown">* milk&#10;* eggs&#10;* butter&#10;&#10;1. carrots&#10;1. celery&#10;1. radishes&#10;</code></pre>
<ul>
<li>milk</li>
<li>eggs</li>
<li>butter</li>
</ul>
<ol>
<li>carrots</li>
<li>celery</li>
<li>radishes</li>
</ol>
<h2 id="links"><a class="header" href="#links">Links</a></h2>
<p>Linking to a URL or local file is easy:</p>
<pre><code class="language-markdown">Use &#91;mdBook&#93;(https://github.com/rust-lang/mdBook). &#10;&#10;Read about &#91;mdBook&#93;(mdbook.md).&#10;&#10;And now &#91;an mdBook link&#93; that is not inline, unlike the above.&#10;&#10;A bare url: &#x3C;https://www.rust-lang.org>.&#10;&#10;&#91;an mdBook link&#93;: https://github.com/rust-lang/mdBook&#10;</code></pre>
<p>Use <a href="https://github.com/rust-lang/mdBook">mdBook</a>.</p>
<p>Read about <a href="/docs/mdbook/v0-5-4/en/01-guide/22-format-mdbook/">mdBook</a>.</p>
<p>And now <a href="https://github.com/rust-lang/mdBook">an mdBook link</a> that is not inline, unlike the above.</p>
<p>A bare url: <a href="https://www.rust-lang.org">https://www.rust-lang.org</a>.</p>
<hr>
<p>Relative links that end with <code>.md</code> will be converted to the <code>.html</code> extension.
It is recommended to use <code>.md</code> links when possible.
This is useful when viewing the Markdown file outside of mdBook, for example on GitHub or GitLab which render Markdown automatically.</p>
<p>Links to <code>README.md</code> will be converted to <code>index.html</code>.
This is done since some services like GitHub render README files automatically, but web servers typically expect the root file to be called <code>index.html</code>.</p>
<p>You can link to individual headings with <code>#</code> fragments.
For example, <code>mdbook.md#text-and-paragraphs</code> would link to the <a href="#text-and-paragraphs">Text and Paragraphs</a> section above.
The ID is created by transforming the heading such as converting to lowercase and replacing spaces with dashes.
You can click on any heading and look at the URL in your browser to see what the fragment looks like.</p>
<h2 id="images"><a class="header" href="#images">Images</a></h2>
<p>Including images is simply a matter of including a link to them, much like in the <em>Links</em> section above. The following markdown
includes the Rust logo SVG image found in the <code>images</code> directory at the same level as this file:</p>
<pre><code class="language-markdown">!&#91;The Rust Logo&#93;(images/rust-logo-blk.svg)&#10;</code></pre>
<p>Produces the following HTML when built with mdBook:</p>
<pre><code class="language-html">&#x3C;p>&#x3C;img src="images/rust-logo-blk.svg" alt="The Rust Logo" />&#x3C;/p>&#10;</code></pre>
<p>Which, of course displays the image like so:</p>
<p><label class="checkbox-label"><input class="checkbox-img" type="checkbox"><img src="/docs/mdbook/source-assets/format/images/rust-logo-blk.svg" alt="The Rust Logo"><span class="img-wrapper"><img src="/docs/mdbook/source-assets/format/images/rust-logo-blk.svg" alt="The Rust Logo"></span></label></p>
<h2 id="extensions"><a class="header" href="#extensions">Extensions</a></h2>
<p>mdBook has several extensions beyond the standard CommonMark specification.</p>
<h3 id="strikethrough"><a class="header" href="#strikethrough">Strikethrough</a></h3>
<p>Text may be rendered with a horizontal line through the center by wrapping the
text with one or two tilde characters on each side:</p>
<pre><code class="language-text">An example of ~~strikethrough text~~.&#10;</code></pre>
<p>This example will render as:</p>
<blockquote>
<p>An example of <del>strikethrough text</del>.</p>
</blockquote>
<p>This follows the <a href="https://github.github.com/gfm/#strikethrough-extension-">GitHub Strikethrough extension</a>.</p>
<h3 id="footnotes"><a class="header" href="#footnotes">Footnotes</a></h3>
<p>A footnote generates a small numbered link in the text which when clicked
takes the reader to the footnote text at the bottom of the item. The footnote
label is written similarly to a link reference with a caret at the front. The
footnote text is written like a link reference definition, with the text
following the label. Example:</p>
<pre><code class="language-text">This is an example of a footnote&#91;^note&#93;.&#10;&#10;&#91;^note&#93;: This text is the contents of the footnote, which will be rendered&#10;    towards the bottom.&#10;</code></pre>
<p>This example will render as:</p>
<blockquote>
<p>This is an example of a footnote<sup class="footnote-reference" id="fr-note-1"><a href="#footnote-note">1</a></sup>.</p>
</blockquote>
<p>The footnotes are automatically numbered based on the order the footnotes are
written.</p>
<h3 id="tables"><a class="header" href="#tables">Tables</a></h3>
<p>Tables can be written using pipes and dashes to draw the rows and columns of
the table. These will be translated to HTML table matching the shape. Example:</p>
<pre><code class="language-text">| Header1 | Header2 |&#10;|---------|---------|&#10;| abc     | def     |&#10;</code></pre>
<p>This example will render similarly to this:</p>
<div class="table-wrapper">
<table>
<thead>
<tr><th>Header1</th><th>Header2</th></tr>
</thead>
<tbody>
<tr><td>abc</td><td>def</td></tr>
</tbody>
</table>
</div>
<p>See the specification for the <a href="https://github.github.com/gfm/#tables-extension-">GitHub Tables extension</a> for more
details on the exact syntax supported.</p>
<h3 id="task-lists"><a class="header" href="#task-lists">Task lists</a></h3>
<p>Task lists can be used as a checklist of items that have been completed.
Example:</p>
<pre><code class="language-md">- &#91;x&#93; Complete task&#10;- &#91; &#93; Incomplete task&#10;</code></pre>
<p>This will render as:</p>
<blockquote>
<ul>
<li><input disabled type="checkbox" checked> Complete task</li>
<li><input disabled type="checkbox"> Incomplete task</li>
</ul>
</blockquote>
<p>See the specification for the <a href="https://github.github.com/gfm/#task-list-items-extension-">task list extension</a> for more details.</p>
<h3 id="smart-punctuation"><a class="header" href="#smart-punctuation">Smart punctuation</a></h3>
<p>Some ASCII punctuation sequences will be automatically turned into fancy Unicode
characters:</p>
<div class="table-wrapper">
<table>
<thead>
<tr><th>ASCII sequence</th><th>Unicode</th></tr>
</thead>
<tbody>
<tr><td><code>--</code></td><td>–</td></tr>
<tr><td><code>---</code></td><td>—</td></tr>
<tr><td><code>...</code></td><td>…</td></tr>
<tr><td><code>"</code></td><td>“ or ”, depending on context</td></tr>
<tr><td><code>'</code></td><td>‘ or ’, depending on context</td></tr>
</tbody>
</table>
</div>
<p>So, no need to manually enter those Unicode characters!</p>
<p>This feature is enabled by default.
To disable it, see the <a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.smart-punctuation</code></a> config option.</p>
<h3 id="heading-attributes"><a class="header" href="#heading-attributes">Heading attributes</a></h3>
<p>Headings can have a custom HTML ID and classes. This lets you maintain the same ID even if you change the heading’s text, it also lets you add multiple classes in the heading.</p>
<p>Example:</p>
<pre><code class="language-md"># Example heading { #first .class1 .class2 }&#10;</code></pre>
<p>This makes the level 1 heading with the content <code>Example heading</code>, ID <code>first</code>, and classes <code>class1</code> and <code>class2</code>. Note that the attributes should be space-separated.</p>
<p>More information can be found in the <a href="https://github.com/raphlinus/pulldown-cmark/blob/master/pulldown-cmark/specs/heading_attrs.txt">heading attrs spec page</a>.</p>
<h3 id="definition-lists"><a class="header" href="#definition-lists">Definition lists</a></h3>
<p>Definition lists can be used for things like glossary entries. The term is listed on a line by itself, followed by one or more definitions. Each definition must begin with a <code>:</code> (after 0-2 spaces).</p>
<p>Example:</p>
<pre><code class="language-md">term A&#10;  : This is a definition of term A. Text&#10;    can span multiple lines.&#10;&#10;term B&#10;  : This is a definition of term B.&#10;  : This has more than one definition.&#10;</code></pre>
<p>This will render as:</p>
<dl>
<dt id="term-a"><a class="header" href="#term-a">term A</a></dt>
<dd>This is a definition of term A. Text
can span multiple lines.</dd>
<dt id="term-b"><a class="header" href="#term-b">term B</a></dt>
<dd>This is a definition of term B.</dd>
<dd>This has more than one definition.</dd>
</dl>
<p>Terms are clickable just like headers, which will set the browser’s URL to point directly to that term.</p>
<p>See the <a href="https://github.com/pulldown-cmark/pulldown-cmark/blob/HEAD/pulldown-cmark/specs/definition_lists.txt">definition lists spec</a> for more information on the specifics of the syntax. See the <a href="https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Glossaries#General_guidelines_for_writing_glossaries">Wikipedia guidelines for glossaries</a> for some guidelines on how to write a glossary.</p>
<p>This feature is enabled by default.
To disable it, see the <a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.definition-lists</code></a> config option.</p>
<h3 id="admonitions"><a class="header" href="#admonitions">Admonitions</a></h3>
<p>An admonition is a special type of callout or notice block used to highlight important information. It is written as a blockquote with a special tag on the first line.</p>
<pre><code class="language-md">> &#91;!NOTE&#93;&#10;> General information or additional context.&#10;&#10;> &#91;!TIP&#93;&#10;> A helpful suggestion or best practice.&#10;&#10;> &#91;!IMPORTANT&#93;&#10;> Key information that shouldn't be missed.&#10;&#10;> &#91;!WARNING&#93;&#10;> Critical information that highlights a potential risk.&#10;&#10;> &#91;!CAUTION&#93;&#10;> Information about potential issues that require caution.&#10;</code></pre>
<p>These will render as:</p>
<blockquote class="blockquote-tag blockquote-tag-note">
<p class="blockquote-tag-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
<p>General information or additional context.</p>
</blockquote>
<blockquote class="blockquote-tag blockquote-tag-tip">
<p class="blockquote-tag-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>Tip</p>
<p>A helpful suggestion or best practice.</p>
</blockquote>
<blockquote class="blockquote-tag blockquote-tag-important">
<p class="blockquote-tag-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Important</p>
<p>Key information that shouldn’t be missed.</p>
</blockquote>
<blockquote class="blockquote-tag blockquote-tag-warning">
<p class="blockquote-tag-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
<p>Critical information that highlights a potential risk.</p>
</blockquote>
<blockquote class="blockquote-tag blockquote-tag-caution">
<p class="blockquote-tag-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Caution</p>
<p>Information about potential issues that require caution.</p>
</blockquote>
<p>This feature is enabled by default.
To disable it, see the <a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.admonitions</code></a> config option.</p>
<h2 id="zoom-in"><a class="header" href="#zoom-in">Zoom-in</a></h2>
<p>All images in the chapters content have a “zoom-in” feature: you can click on it to make it bigger, and click it again to zoom out. You can focus the image with the keyboard as well, and press the spacebar to zoom in and out as well.</p>
<hr>
<ol class="footnote-definition">
<li id="footnote-note">
<p>This text is the contents of the footnote, which will be rendered
towards the bottom. <a href="#fr-note-1">↩</a></p>
</li>
</ol>
</div>
