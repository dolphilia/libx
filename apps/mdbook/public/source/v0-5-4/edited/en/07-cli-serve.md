---
title: "The serve command"
documentId: "mdbook:guide/src/cli/serve.md"
order: 9
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/serve.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/cli/serve.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/07-cli-serve.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/serve.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "watch", "link": "/v0-5-4/en/01-guide/09-cli-watch"}
next: {"text": "test", "link": "/v0-5-4/en/01-guide/08-cli-test"}
---


<div class="mdbook-guide">
<h1 id="the-serve-command"><a class="header" href="#the-serve-command">The serve command</a></h1>
<p>The serve command is used to preview a book by serving it via HTTP at
<code>localhost:3000</code> by default:</p>
<pre><code class="language-bash">mdbook serve&#10;</code></pre>
<p>The <code>serve</code> command  watches the book’s <code>src</code> directory for
changes, rebuilding the book and refreshing clients for each change; this includes
re-creating deleted files still mentioned in <code>SUMMARY.md</code>! A websocket
connection is used to trigger the client-side refresh.</p>
<p><em><strong>Note:</strong></em> <em>The <code>serve</code> command is for testing a book’s HTML output, and is not
intended to be a complete HTTP server for a website.</em></p>
<h4 id="specify-a-directory"><a class="header" href="#specify-a-directory">Specify a directory</a></h4>
<p>The <code>serve</code> command can take a directory as an argument to use as the book’s
root instead of the current working directory.</p>
<pre><code class="language-bash">mdbook serve path/to/book&#10;</code></pre>
<h3 id="server-options"><a class="header" href="#server-options">Server options</a></h3>
<p>The <code>serve</code> hostname defaults to <code>localhost</code>, and the port defaults to <code>3000</code>. Either option can be specified on the command line:</p>
<pre><code class="language-bash">mdbook serve path/to/book -p 8000 -n 127.0.0.1 &#10;</code></pre>
<h4 id="--open"><a class="header" href="#--open"><code>--open</code></a></h4>
<p>When you use the <code>--open</code> (<code>-o</code>) flag, mdbook will open the book in your
default web browser after starting the server.</p>
<h4 id="--dest-dir"><a class="header" href="#--dest-dir"><code>--dest-dir</code></a></h4>
<p>The <code>--dest-dir</code> (<code>-d</code>) option allows you to change the output directory for the
book. Relative paths are interpreted relative to the current directory. If
not specified it will default to the value of the <code>build.build-dir</code> key in
<code>book.toml</code>, or to <code>./book</code>.</p>
<h4 id="--watcher"><a class="header" href="#--watcher"><code>--watcher</code></a></h4>
<p>There are different backends used to determine when a file has changed.</p>
<ul>
<li><code>poll</code> (default) — Checks for file modifications by scanning the filesystem every second.</li>
<li><code>native</code> — Uses the native operating system facilities to receive notifications when files change.
This can have less constant overhead, but may not be as reliable as the <code>poll</code> based watcher. See these issues for more information: <a href="https://github.com/rust-lang/mdBook/issues/383">#383</a> <a href="https://github.com/rust-lang/mdBook/issues/1441">#1441</a> <a href="https://github.com/rust-lang/mdBook/issues/1707">#1707</a> <a href="https://github.com/rust-lang/mdBook/issues/2035">#2035</a> <a href="https://github.com/rust-lang/mdBook/issues/2102">#2102</a></li>
</ul>
<h4 id="specify-exclude-patterns"><a class="header" href="#specify-exclude-patterns">Specify exclude patterns</a></h4>
<p>The <code>serve</code> command will not automatically trigger a build for files listed in
the <code>.gitignore</code> file in the book root directory. The <code>.gitignore</code> file may
contain file patterns described in the <a href="https://git-scm.com/docs/gitignore">gitignore
documentation</a>. This can be useful for
ignoring temporary files created by some editors.</p>
<p><em><strong>Note:</strong></em> <em>Only the <code>.gitignore</code> from the book root directory is used. Global
<code>$HOME/.gitignore</code> or <code>.gitignore</code> files in parent directories are not used.</em></p>
</div>
