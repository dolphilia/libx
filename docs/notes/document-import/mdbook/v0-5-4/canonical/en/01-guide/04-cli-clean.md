---
title: "The clean command"
documentId: "mdbook:guide/src/cli/clean.md"
order: 11
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/clean.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/cli/clean.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/04-cli-clean.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/clean.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "test", "link": "/v0-5-4/en/01-guide/08-cli-test"}
next: {"text": "completions", "link": "/v0-5-4/en/01-guide/05-cli-completions"}
---


<div class="mdbook-guide">
<h1 id="the-clean-command"><a class="header" href="#the-clean-command">The clean command</a></h1>
<p>The clean command is used to delete the generated book and any other build
artifacts.</p>
<pre><code class="language-bash">mdbook clean&#10;</code></pre>
<h4 id="specify-a-directory"><a class="header" href="#specify-a-directory">Specify a directory</a></h4>
<p>The <code>clean</code> command can take a directory as an argument to use as the book’s
root instead of the current working directory.</p>
<pre><code class="language-bash">mdbook clean path/to/book&#10;</code></pre>
<h4 id="--dest-dir"><a class="header" href="#--dest-dir"><code>--dest-dir</code></a></h4>
<p>The <code>--dest-dir</code> (<code>-d</code>) option allows you to override the book’s output
directory, which will be deleted by this command. Relative paths are interpreted
relative to the current directory. If not specified it will default to the
value of the <code>build.build-dir</code> key in <code>book.toml</code>, or to <code>./book</code>.</p>
<pre><code class="language-bash">mdbook clean --dest-dir=path/to/book&#10;</code></pre>
<p><code>path/to/book</code> could be absolute or relative.</p>
</div>
