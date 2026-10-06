---
title: "MathJax support"
documentId: "mdbook:guide/src/format/mathjax.md"
order: 24
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/mathjax.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/format/mathjax.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/21-format-mathjax.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/mathjax.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "Editor", "link": "/v0-5-4/en/01-guide/25-format-theme-editor"}
next: {"text": "mdBook-specific features", "link": "/v0-5-4/en/01-guide/22-format-mdbook"}
---


<div class="mdbook-guide">
<h1 id="mathjax-support"><a class="header" href="#mathjax-support">MathJax support</a></h1>
<p>mdBook has optional support for math equations through
<a href="https://www.mathjax.org/">MathJax</a>.</p>
<p>To enable MathJax, you need to add the <code>mathjax-support</code> key to your <code>book.toml</code>
under the <code>output.html</code> section.</p>
<pre><code class="language-toml">&#91;output.html&#93;&#10;mathjax-support = true&#10;</code></pre>
<blockquote>
<p><strong>Note:</strong> The usual delimiters MathJax uses are not yet supported. You can’t
currently use <code>$$ ... $$</code> as delimiters and the <code>\&#91; ... \&#93;</code> delimiters need an
extra backslash to work. Hopefully this limitation will be lifted soon.</p>
</blockquote>
<blockquote>
<p><strong>Note:</strong> When you use double backslashes in MathJax blocks (for example in
commands such as <code>\begin{cases} \frac 1 2 \\ \frac 3 4 \end{cases}</code>) you need
to add <em>two extra</em> backslashes (e.g., <code>\begin{cases} \frac 1 2 \\\\ \frac 3 4 \end{cases}</code>).</p>
</blockquote>
<h3 id="inline-equations"><a class="header" href="#inline-equations">Inline equations</a></h3>
<p>Inline equations are delimited by <code>\\(</code> and <code>\\)</code>. So for example, to render the
following inline equation \( \int x dx = \frac{x^2}{2} + C \) you would write
the following:</p>
<pre><code>\\( \int x dx = \frac{x^2}{2} + C \\)&#10;</code></pre>
<h3 id="block-equations"><a class="header" href="#block-equations">Block equations</a></h3>
<p>Block equations are delimited by <code>\\&#91;</code> and <code>\\&#93;</code>. To render the following
equation</p>
<p>\[ \mu = \frac{1}{N} \sum_{i=0} x_i \]</p>
<p>you would write:</p>
<pre><code class="language-bash">\\&#91; \mu = \frac{1}{N} \sum_{i=0} x_i \\&#93;&#10;</code></pre>
</div>
