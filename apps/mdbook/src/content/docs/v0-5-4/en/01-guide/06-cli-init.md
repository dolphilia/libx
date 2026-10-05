---
title: "The init command"
documentId: "mdbook:guide/src/cli/init.md"
order: 6
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/init.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/cli/init.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/06-cli-init.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/init.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "Command-line tool", "link": "/v0-5-4/en/01-guide/02-cli-index"}
next: {"text": "build", "link": "/v0-5-4/en/01-guide/03-cli-build"}
---


<div class="mdbook-guide">
<h1 id="the-init-command"><a class="header" href="#the-init-command">The init command</a></h1>
<p>There is some minimal boilerplate that is the same for every new book. It’s for
this purpose that mdBook includes an <code>init</code> command.</p>
<p>The <code>init</code> command is used like this:</p>
<pre><code class="language-bash">mdbook init&#10;</code></pre>
<p>When using the <code>init</code> command for the first time, a couple of files will be set
up for you:</p>
<pre><code class="language-bash">book-test/&#10;├── book&#10;└── src&#10;    ├── chapter_1.md&#10;    └── SUMMARY.md&#10;</code></pre>
<ul>
<li>
<p>The <code>src</code> directory is where you write your book in markdown. It contains all
the source files, configuration files, etc.</p>
</li>
<li>
<p>The <code>book</code> directory is where your book is rendered. All the output is ready
to be uploaded to a server to be seen by your audience.</p>
</li>
<li>
<p>The <code>SUMMARY.md</code> is the skeleton of your
book, and is discussed in more detail <a href="/docs/mdbook/v0-5-4/en/01-guide/23-format-summary/">in another
chapter</a>.</p>
</li>
</ul>
<h4 id="tip-generate-chapters-from-summarymd"><a class="header" href="#tip-generate-chapters-from-summarymd">Tip: Generate chapters from SUMMARY.md</a></h4>
<p>When a <code>SUMMARY.md</code> file already exists, the <code>init</code> command will first parse it
and generate the missing files according to the paths used in the <code>SUMMARY.md</code>.
This allows you to think and create the whole structure of your book and then
let mdBook generate it for you.</p>
<h4 id="specify-a-directory"><a class="header" href="#specify-a-directory">Specify a directory</a></h4>
<p>The <code>init</code> command can take a directory as an argument to use as the book’s root
instead of the current working directory.</p>
<pre><code class="language-bash">mdbook init path/to/book&#10;</code></pre>
<h4 id="--theme"><a class="header" href="#--theme"><code>--theme</code></a></h4>
<p>When you use the <code>--theme</code> flag, the default theme will be copied into a
directory called <code>theme</code> in your source directory so that you can modify it.</p>
<p>The theme is selectively overwritten, this means that if you don’t want to
overwrite a specific file, just delete it and the default file will be used.</p>
<h4 id="--title"><a class="header" href="#--title"><code>--title</code></a></h4>
<p>Specify a title for the book. If not supplied, an interactive prompt will ask for
a title.</p>
<pre><code class="language-bash">mdbook init --title="my amazing book"&#10;</code></pre>
<h4 id="--ignore"><a class="header" href="#--ignore"><code>--ignore</code></a></h4>
<p>Create a <code>.gitignore</code> file configured to ignore the <code>book</code> directory created when <a href="/docs/mdbook/v0-5-4/en/01-guide/03-cli-build/">building</a> a book.
If not supplied, an interactive prompt will ask whether it should be created.</p>
<pre><code class="language-bash">mdbook init --ignore=none&#10;</code></pre>
<pre><code class="language-bash">mdbook init --ignore=git&#10;</code></pre>
<h4 id="--force"><a class="header" href="#--force"><code>--force</code></a></h4>
<p>Skip the prompts to create a <code>.gitignore</code> and for the title for the book.</p>
</div>
