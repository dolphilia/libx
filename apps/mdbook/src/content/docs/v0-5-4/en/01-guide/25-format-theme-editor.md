---
title: "Editor"
documentId: "mdbook:guide/src/format/theme/editor.md"
order: 23
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/theme/editor.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/format/theme/editor.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/25-format-theme-editor.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/theme/editor.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "Syntax highlighting", "link": "/v0-5-4/en/01-guide/27-format-theme-syntax-highlighting"}
next: {"text": "MathJax support", "link": "/v0-5-4/en/01-guide/21-format-mathjax"}
---


<div class="mdbook-guide">
<h1 id="editor"><a class="header" href="#editor">Editor</a></h1>
<p>In addition to providing runnable code playgrounds, mdBook optionally allows them
to be editable. In order to enable editable code blocks, the following needs to
be added to the <em><strong>book.toml</strong></em>:</p>
<pre><code class="language-toml">&#91;output.html.playground&#93;&#10;editable = true&#10;</code></pre>
<p>After enabling editable code blocks, the <code>editable</code> attribute must be added to a
code block to make it editable:</p>
<pre><code class="language-markdown">```rust,editable&#10;fn main() {&#10;    let number = 5;&#10;    print!("{}", number);&#10;}&#10;```&#10;</code></pre>
<p>The above will result in this editable playground:</p>
<pre class="playground"><code class="language-rust editable edition2018">fn main() {&#10;    let number = 5;&#10;    print!("{}", number);&#10;}</code></pre>
<p>Note the new <code>Undo Changes</code> button in the editable playgrounds.</p>
<h2 id="customizing-the-editor"><a class="header" href="#customizing-the-editor">Customizing the editor</a></h2>
<p>By default, the editor is the <a href="https://ace.c9.io/">Ace</a> editor, but, if desired,
the functionality may be overridden by providing a different folder:</p>
<pre><code class="language-toml">&#91;output.html.playground&#93;&#10;editable = true&#10;editor = "/path/to/editor"&#10;</code></pre>
<p>Note that for the editor changes to function correctly, the <code>book.js</code> inside of
the <code>theme</code> folder will need to be overridden as it has some couplings with the
default Ace editor.</p>
</div>
