---
title: "General configuration"
documentId: "mdbook:guide/src/format/configuration/general.md"
order: 16
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/configuration/general.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/format/configuration/general.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/17-format-configuration-general.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/configuration/general.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "Configuration", "link": "/v0-5-4/en/01-guide/15-format-configuration-index"}
next: {"text": "Preprocessors", "link": "/v0-5-4/en/01-guide/18-format-configuration-preprocessors"}
---


<div class="mdbook-guide">
<h1 id="general-configuration"><a class="header" href="#general-configuration">General configuration</a></h1>
<p>You can configure the parameters for your book in the <em><strong>book.toml</strong></em> file.</p>
<p>Here is an example of what a <em><strong>book.toml</strong></em> file might look like:</p>
<pre><code class="language-toml">&#91;book&#93;&#10;title = "Example book"&#10;authors = &#91;"John Doe"&#93;&#10;description = "The example book covers examples."&#10;&#10;&#91;rust&#93;&#10;edition = "2018"&#10;&#10;&#91;build&#93;&#10;build-dir = "my-example-book"&#10;create-missing = false&#10;&#10;&#91;preprocessor.index&#93;&#10;&#10;&#91;preprocessor.links&#93;&#10;&#10;&#91;output.html&#93;&#10;additional-css = &#91;"custom.css"&#93;&#10;&#10;&#91;output.html.search&#93;&#10;limit-results = 15&#10;</code></pre>
<h2 id="supported-configuration-options"><a class="header" href="#supported-configuration-options">Supported configuration options</a></h2>
<p>It is important to note that <strong>any</strong> relative path specified in the
configuration will always be taken relative from the root of the book where the
configuration file is located.</p>
<h3 id="general-metadata"><a class="header" href="#general-metadata">General metadata</a></h3>
<p>This is general information about your book.</p>
<ul>
<li><strong>title:</strong> The title of the book</li>
<li><strong>authors:</strong> The author(s) of the book</li>
<li><strong>description:</strong> A description for the book, which is added as meta
information in the html <code>&#x3C;head></code> of each page</li>
<li><strong>src:</strong> By default, the source directory is found in the directory named
<code>src</code> directly under the root folder. But this is configurable with the <code>src</code>
key in the configuration file.</li>
<li><strong>language:</strong> The main language of the book, which is used as a language attribute <code>&#x3C;html lang="en"></code> for example.
This is also used to derive the direction of text (RTL, LTR) within the book.</li>
<li><strong>text-direction</strong>: The direction of text in the book: Left-to-right (LTR) or Right-to-left (RTL). Possible values: <code>ltr</code>, <code>rtl</code>.
When not specified, the text direction is derived from the book’s <code>language</code> attribute.</li>
</ul>
<p><strong>book.toml</strong></p>
<pre><code class="language-toml">&#91;book&#93;&#10;title = "Example book"&#10;authors = &#91;"John Doe", "Jane Doe"&#93;&#10;description = "The example book covers examples."&#10;src = "my-src"  # the source files will be found in `root/my-src` instead of `root/src`&#10;language = "en"&#10;text-direction = "ltr"&#10;</code></pre>
<h3 id="rust-options"><a class="header" href="#rust-options">Rust options</a></h3>
<p>Options for the Rust language, relevant to running tests and playground
integration.</p>
<pre><code class="language-toml">&#91;rust&#93;&#10;edition = "2015"   # the default edition for code blocks&#10;</code></pre>
<ul>
<li>
<p><strong>edition</strong>: Rust edition to use by default for the code snippets. Default
is <code>"2015"</code>. Individual code blocks can be controlled with the <code>edition2015</code>,
<code>edition2018</code>, <code>edition2021</code> or <code>edition2024</code> annotations, such as:</p>
<pre><code class="language-text">```rust,edition2015&#10;// This only works in 2015.&#10;let try = true;&#10;```&#10;</code></pre>
</li>
</ul>
<h3 id="build-options"><a class="header" href="#build-options">Build options</a></h3>
<p>This controls the build process of your book.</p>
<pre><code class="language-toml">&#91;build&#93;&#10;build-dir = "book"                # the directory where the output is placed&#10;create-missing = true             # whether or not to create missing pages&#10;use-default-preprocessors = true  # use the default preprocessors&#10;extra-watch-dirs = &#91;&#93;             # directories to watch for triggering builds&#10;</code></pre>
<ul>
<li>
<p><strong>build-dir:</strong> The directory to put the rendered book in. By default this is
<code>book/</code> in the book’s root directory.
This can overridden with the <code>--dest-dir</code> CLI option.</p>
</li>
<li>
<p><strong>create-missing:</strong> By default, any missing files specified in <code>SUMMARY.md</code>
will be created when the book is built (i.e. <code>create-missing = true</code>). If this
is <code>false</code> then the build process will instead exit with an error if any files
do not exist.</p>
</li>
<li>
<p><strong>use-default-preprocessors:</strong> Disable the default preprocessors (of <code>links</code> &#x26;
<code>index</code>) by setting this option to <code>false</code>.</p>
<p>If you have the same, and/or other preprocessors declared via their table
of configuration, they will run instead.</p>
<ul>
<li>For clarity, with no preprocessor configuration, the default <code>links</code> and
<code>index</code> will run.</li>
<li>Setting <code>use-default-preprocessors = false</code> will disable these
default preprocessors from running.</li>
<li>Adding <code>&#91;preprocessor.links&#93;</code>, for example, will ensure, regardless of
<code>use-default-preprocessors</code> that <code>links</code> it will run.</li>
</ul>
</li>
<li>
<p><strong>extra-watch-dirs</strong>: A list of paths to directories that will be watched in
the <code>watch</code> and <code>serve</code> commands. Changes to files under these directories will
trigger rebuilds. Useful if your book depends on files outside its <code>src</code> directory.</p>
</li>
</ul>
</div>
