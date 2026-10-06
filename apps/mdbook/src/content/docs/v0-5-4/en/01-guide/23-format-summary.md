---
title: "SUMMARY.md"
documentId: "mdbook:guide/src/format/summary.md"
order: 14
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/summary.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/format/summary.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/23-format-summary.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/summary.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "Format", "link": "/v0-5-4/en/01-guide/14-format-index"}
next: {"text": "Configuration", "link": "/v0-5-4/en/01-guide/15-format-configuration-index"}
---


<div class="mdbook-guide">
<h1 id="summarymd"><a class="header" href="#summarymd">SUMMARY.md</a></h1>
<p>The summary file is used by mdBook to know what chapters to include, in what
order they should appear, what their hierarchy is and where the source files
are. Without this file, there is no book.</p>
<p>This markdown file must be named <code>SUMMARY.md</code>. Its formatting
is very strict and must follow the structure outlined below to allow for easy
parsing. Any element not specified below, be it formatting or textual, is likely
to be ignored at best, or may cause an error when attempting to build the book.</p>
<h3 id="structure"><a class="header" href="#structure">Structure</a></h3>
<ol>
<li>
<p><em><strong>Title</strong></em> - While optional, it’s common practice to begin with a title, generally <code class="language-markdown"># Summary</code>. This is ignored by the parser however, and
can be omitted.</p>
<pre><code class="language-markdown"># Summary&#10;</code></pre>
</li>
<li>
<p><em><strong>Prefix Chapter</strong></em> - Before the main numbered chapters, prefix chapters can be added
that will not be numbered. This is useful for forewords,
introductions, etc. There are, however, some constraints. Prefix chapters cannot be
nested; they should all be on the root level. And you cannot add
prefix chapters once you have added numbered chapters.</p>
<pre><code class="language-markdown">&#91;A Prefix Chapter&#93;(relative/path/to/markdown.md)&#10;&#10;- &#91;First Chapter&#93;(relative/path/to/markdown2.md)&#10;</code></pre>
</li>
<li>
<p><em><strong>Part Title</strong></em> -
Level 1 headers can be used as a title for the following numbered chapters.
This can be used to logically separate different sections of the book.
The title is rendered as unclickable text.
Titles are optional, and the numbered chapters can be broken into as many parts as desired.
Part titles must be h1 headers (one <code>#</code>), other heading levels are ignored.</p>
<pre><code class="language-markdown"># My Part Title&#10;&#10;- &#91;First Chapter&#93;(relative/path/to/markdown.md)&#10;</code></pre>
</li>
<li>
<p><em><strong>Numbered Chapter</strong></em> - Numbered chapters outline the main content of the book
and can be nested, resulting in a nice hierarchy
(chapters, sub-chapters, etc.).</p>
<pre><code class="language-markdown"># Title of Part&#10;&#10;- &#91;First Chapter&#93;(relative/path/to/markdown.md)&#10;- &#91;Second Chapter&#93;(relative/path/to/markdown2.md)&#10;   - &#91;Sub Chapter&#93;(relative/path/to/markdown3.md)&#10;&#10;# Title of Another Part&#10;&#10;- &#91;Another Chapter&#93;(relative/path/to/markdown4.md)&#10;</code></pre>
<p>Numbered chapters can be denoted with either <code>-</code> or <code>*</code> (do not mix delimiters).</p>
</li>
<li>
<p><em><strong>Suffix Chapter</strong></em> - Like prefix chapters, suffix chapters are unnumbered, but they come after
numbered chapters.</p>
<pre><code class="language-markdown">- &#91;Last Chapter&#93;(relative/path/to/markdown.md)&#10;&#10;&#91;Title of Suffix Chapter&#93;(relative/path/to/markdown2.md)&#10;</code></pre>
</li>
<li>
<p><em><strong>Draft chapters</strong></em> - Draft chapters are chapters without a file and thus content.
The purpose of a draft chapter is to signal future chapters still to be written.
Or when still laying out the structure of the book to avoid creating the files
while you are still changing the structure of the book a lot.
Draft chapters will be rendered in the HTML renderer as disabled links in the table
of contents, as you can see for the next chapter in the table of contents on the left.
Draft chapters are written like normal chapters but without writing the path to the file.</p>
<pre><code class="language-markdown">- &#91;Draft Chapter&#93;()&#10;</code></pre>
</li>
<li>
<p><em><strong>Separators</strong></em> - Separators can be added before, in between, and after any other element. They result
in an HTML rendered line in the built table of contents.  A separator is
a line containing exclusively dashes and at least three of them: <code>---</code>.</p>
<pre><code class="language-markdown"># My Part Title&#10;&#10;&#91;A Prefix Chapter&#93;(relative/path/to/markdown.md)&#10;&#10;---&#10;&#10;- &#91;First Chapter&#93;(relative/path/to/markdown2.md)&#10;</code></pre>
</li>
</ol>
<h3 id="example"><a class="header" href="#example">Example</a></h3>
<p>Below is the markdown source for the <code>SUMMARY.md</code> for this guide, with the resulting table
of contents as rendered to the left.</p>
<pre><code class="language-markdown"># Summary&#10;&#10;&#91;Introduction&#93;(README.md)&#10;&#10;# User guide&#10;&#10;- &#91;Installation&#93;(guide/installation.md)&#10;- &#91;Reading books&#93;(guide/reading.md)&#10;- &#91;Creating a book&#93;(guide/creating.md)&#10;&#10;# Reference guide&#10;&#10;- &#91;Command-line tool&#93;(cli/README.md)&#10;    - &#91;init&#93;(cli/init.md)&#10;    - &#91;build&#93;(cli/build.md)&#10;    - &#91;watch&#93;(cli/watch.md)&#10;    - &#91;serve&#93;(cli/serve.md)&#10;    - &#91;test&#93;(cli/test.md)&#10;    - &#91;clean&#93;(cli/clean.md)&#10;    - &#91;completions&#93;(cli/completions.md)&#10;- &#91;Format&#93;(format/README.md)&#10;    - &#91;SUMMARY.md&#93;(format/summary.md)&#10;        - &#91;Draft chapter&#93;()&#10;    - &#91;Configuration&#93;(format/configuration/README.md)&#10;        - &#91;General&#93;(format/configuration/general.md)&#10;        - &#91;Preprocessors&#93;(format/configuration/preprocessors.md)&#10;        - &#91;Renderers&#93;(format/configuration/renderers.md)&#10;        - &#91;Environment variables&#93;(format/configuration/environment-variables.md)&#10;    - &#91;Theme&#93;(format/theme/README.md)&#10;        - &#91;index.hbs&#93;(format/theme/index-hbs.md)&#10;        - &#91;Syntax highlighting&#93;(format/theme/syntax-highlighting.md)&#10;        - &#91;Editor&#93;(format/theme/editor.md)&#10;    - &#91;MathJax support&#93;(format/mathjax.md)&#10;    - &#91;mdBook-specific features&#93;(format/mdbook.md)&#10;    - &#91;Markdown&#93;(format/markdown.md)&#10;- &#91;Continuous integration&#93;(continuous-integration.md)&#10;- &#91;For developers&#93;(for_developers/README.md)&#10;    - &#91;Preprocessors&#93;(for_developers/preprocessors.md)&#10;    - &#91;Alternative backends&#93;(for_developers/backends.md)&#10;&#10;-----------&#10;&#10;&#91;Contributors&#93;(misc/contributors.md)&#10;</code></pre>
</div>
