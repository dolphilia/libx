---
title: "The build command"
documentId: "mdbook:guide/src/cli/build.md"
order: 7
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/build.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/cli/build.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/03-cli-build.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/build.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "init", "link": "/v0-5-4/en/01-guide/06-cli-init"}
next: {"text": "watch", "link": "/v0-5-4/en/01-guide/09-cli-watch"}
---


<div class="mdbook-guide">
<h1 id="the-build-command"><a class="header" href="#the-build-command">The build command</a></h1>
<p>The build command is used to render your book:</p>
<pre><code class="language-bash">mdbook build&#10;</code></pre>
<p>It will try to parse your <code>SUMMARY.md</code> file to understand the structure of your
book and fetch the corresponding files. Note that this will also create files
mentioned in <code>SUMMARY.md</code> which are not yet present.</p>
<p>The rendered output will maintain the same directory structure as the source for
convenience. Large books will therefore remain structured when rendered.</p>
<h4 id="specify-a-directory"><a class="header" href="#specify-a-directory">Specify a directory</a></h4>
<p>The <code>build</code> command can take a directory as an argument to use as the book’s
root instead of the current working directory.</p>
<pre><code class="language-bash">mdbook build path/to/book&#10;</code></pre>
<h4 id="--open"><a class="header" href="#--open"><code>--open</code></a></h4>
<p>When you use the <code>--open</code> (<code>-o</code>) flag, mdbook will open the rendered book in
your default web browser after building it.</p>
<h4 id="--dest-dir"><a class="header" href="#--dest-dir"><code>--dest-dir</code></a></h4>
<p>The <code>--dest-dir</code> (<code>-d</code>) option allows you to change the output directory for the
book. Relative paths are interpreted relative to the current directory. If
not specified it will default to the value of the <code>build.build-dir</code> key in
<code>book.toml</code>, or to <code>./book</code>.</p>
<hr>
<p><em><strong>Note:</strong></em> <em>The build command copies all files (excluding files with <code>.md</code> extension) from the source directory
into the build directory.</em></p>
</div>
