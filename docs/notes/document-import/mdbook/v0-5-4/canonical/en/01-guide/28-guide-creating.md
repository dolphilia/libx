---
title: "Creating a book"
documentId: "mdbook:guide/src/guide/creating.md"
order: 4
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/guide/creating.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/guide/creating.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/28-guide-creating.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/guide/creating.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "Reading books", "link": "/v0-5-4/en/01-guide/30-guide-reading"}
next: {"text": "Command-line tool", "link": "/v0-5-4/en/01-guide/02-cli-index"}
---


<div class="mdbook-guide">
<h1 id="creating-a-book"><a class="header" href="#creating-a-book">Creating a book</a></h1>
<p>Once you have the <code>mdbook</code> CLI tool installed, you can use it to create and render a book.</p>
<h2 id="initializing-a-book"><a class="header" href="#initializing-a-book">Initializing a book</a></h2>
<p>The <code>mdbook init</code> command will create a new directory containing an empty book for you to get started.
Give it the name of the directory that you want to create:</p>
<pre><code class="language-sh">mdbook init my-first-book&#10;</code></pre>
<p>It will ask a few questions before generating the book.
After answering the questions, you can change the current directory into the new book:</p>
<pre><code class="language-sh">cd my-first-book&#10;</code></pre>
<p>There are several ways to render a book, but one of the easiest methods is to use the <code>serve</code> command, which will build your book and start a local webserver:</p>
<pre><code class="language-sh">mdbook serve --open&#10;</code></pre>
<p>The <code>--open</code> option will open your default web browser to view your new book.
You can leave the server running even while you edit the content of the book, and <code>mdbook</code> will automatically rebuild the output <em>and</em> automatically refresh your web browser.</p>
<p>Check out the <a href="/docs/mdbook/v0-5-4/en/01-guide/02-cli-index/">CLI Guide</a> for more information about other <code>mdbook</code> commands and CLI options.</p>
<h2 id="anatomy-of-a-book"><a class="header" href="#anatomy-of-a-book">Anatomy of a book</a></h2>
<p>A book is built from several files which define the settings and layout of the book.</p>
<h3 id="booktoml"><a class="header" href="#booktoml"><code>book.toml</code></a></h3>
<p>In the root of your book, there is a <code>book.toml</code> file which contains settings for describing how to build your book.
This is written in the <a href="https://toml.io/">TOML markup language</a>.
The default settings are usually good enough to get you started.
When you are interested in exploring more features and options that mdBook provides, check out the <a href="/docs/mdbook/v0-5-4/en/01-guide/15-format-configuration-index/">Configuration chapter</a> for more details.</p>
<p>A very basic <code>book.toml</code> can be as simple as this:</p>
<pre><code class="language-toml">&#91;book&#93;&#10;title = "My First Book"&#10;</code></pre>
<h3 id="summarymd"><a class="header" href="#summarymd"><code>SUMMARY.md</code></a></h3>
<p>The next major part of a book is the summary file located at <code>src/SUMMARY.md</code>.
This file contains a list of all the chapters in the book.
Before a chapter can be viewed, it must be added to this list.</p>
<p>Here’s a basic summary file with a few chapters:</p>
<pre><code class="language-md"># Summary&#10;&#10;&#91;Introduction&#93;(README.md)&#10;&#10;- &#91;My First Chapter&#93;(my-first-chapter.md)&#10;- &#91;Nested example&#93;(nested/README.md)&#10;    - &#91;Sub-chapter&#93;(nested/sub-chapter.md)&#10;</code></pre>
<p>Try opening up <code>src/SUMMARY.md</code> in your editor and adding a few chapters.
If any of the chapter files do not exist, <code>mdbook</code> will automatically create them for you.</p>
<p>For more details on other formatting options for the summary file, check out the <a href="/docs/mdbook/v0-5-4/en/01-guide/23-format-summary/">Summary chapter</a>.</p>
<h3 id="source-files"><a class="header" href="#source-files">Source files</a></h3>
<p>The content of your book is all contained in the <code>src</code> directory.
Each chapter is a separate Markdown file.
Typically, each chapter starts with a level 1 heading with the title of the chapter.</p>
<pre><code class="language-md"># My First Chapter&#10;&#10;Fill out your content here.&#10;</code></pre>
<p>The precise layout of the files is up to you.
The organization of the files will correspond to the HTML files generated, so keep in mind that the file layout is part of the URL of each chapter.</p>
<p>While the <code>mdbook serve</code> command is running, you can open any of the chapter files and start editing them.
Each time you save the file, <code>mdbook</code> will rebuild the book and refresh your web browser.</p>
<p>Check out the <a href="/docs/mdbook/v0-5-4/en/01-guide/20-format-markdown/">Markdown chapter</a> for more information on formatting the content of your chapters.</p>
<p>All other files in the <code>src</code> directory will be included in the output.
So if you have images or other static files, just include them somewhere in the <code>src</code> directory.</p>
<h2 id="publishing-a-book"><a class="header" href="#publishing-a-book">Publishing a book</a></h2>
<p>Once you’ve written your book, you may want to host it somewhere for others to view.
The first step is to build the output of the book.
This can be done with the <code>mdbook build</code> command in the same directory where the <code>book.toml</code> file is located:</p>
<pre><code class="language-sh">mdbook build&#10;</code></pre>
<p>This will generate a directory named <code>book</code> which contains the HTML content of your book.
You can then place this directory on any web server to host it.</p>
<p>For more information about publishing and deploying, check out the <a href="/docs/mdbook/v0-5-4/en/01-guide/10-continuous-integration/">Continuous Integration chapter</a> for more.</p>
</div>
