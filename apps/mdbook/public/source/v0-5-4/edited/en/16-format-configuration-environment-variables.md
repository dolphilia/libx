---
title: "Environment variables"
documentId: "mdbook:guide/src/format/configuration/environment-variables.md"
order: 19
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/configuration/environment-variables.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/format/configuration/environment-variables.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/16-format-configuration-environment-variables.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/configuration/environment-variables.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "Renderers", "link": "/v0-5-4/en/01-guide/19-format-configuration-renderers"}
next: {"text": "Theme", "link": "/v0-5-4/en/01-guide/24-format-theme-index"}
---


<div class="mdbook-guide">
<h1 id="environment-variables"><a class="header" href="#environment-variables">Environment variables</a></h1>
<p>All configuration values can be overridden from the command line by setting the
corresponding environment variable. Because many operating systems restrict
environment variables to be alphanumeric characters or <code>_</code>, the configuration
key needs to be formatted slightly differently to the normal <code>foo.bar.baz</code> form.</p>
<p>Variables starting with <code>MDBOOK_</code> are used for configuration. The key is created
by removing the <code>MDBOOK_</code> prefix and turning the resulting string into
<code>kebab-case</code>. Double underscores (<code>__</code>) separate nested keys, while a single
underscore (<code>_</code>) is replaced with a dash (<code>-</code>).</p>
<p>For example:</p>
<ul>
<li><code>MDBOOK_book</code> -> <code>book</code></li>
<li><code>MDBOOK_BOOK</code> -> <code>book</code></li>
<li><code>MDBOOK_BOOK__TITLE</code> -> <code>book.title</code></li>
<li><code>MDBOOK_BOOK__TEXT_DIRECTION</code> -> <code>book.text-direction</code></li>
</ul>
<p>So by setting the <code>MDBOOK_BOOK__TITLE</code> environment variable you can override the
book’s title without needing to touch your <code>book.toml</code>.</p>
<blockquote>
<p><strong>Note:</strong> To facilitate setting more complex config items, the value of an
environment variable is first parsed as JSON, falling back to a string if the
parse fails.</p>
<p>This means, if you so desired, you could override all book metadata when
building the book with something like</p>
<pre><code class="language-shell">$ export MDBOOK_BOOK='{"title": "My Awesome Book", "authors": &#91;"Michael-F-Bryan"&#93;}'&#10;$ mdbook build&#10;</code></pre>
</blockquote>
<p>The latter case may be useful in situations where <code>mdbook</code> is invoked from a
script or CI, where it sometimes isn’t possible to update the <code>book.toml</code> before
building.</p>
</div>
