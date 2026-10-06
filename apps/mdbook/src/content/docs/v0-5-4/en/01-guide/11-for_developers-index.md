---
title: "For developers"
documentId: "mdbook:guide/src/for_developers/README.md"
order: 28
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/for_developers/README.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/for_developers/README.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/11-for_developers-index.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/for_developers/README.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "Continuous integration", "link": "/v0-5-4/en/01-guide/10-continuous-integration"}
next: {"text": "Preprocessors", "link": "/v0-5-4/en/01-guide/13-for_developers-preprocessors"}
---


<div class="mdbook-guide">
<h1 id="for-developers"><a class="header" href="#for-developers">For developers</a></h1>
<p>While <code>mdbook</code> is mainly used as a command line tool, you can also import the
underlying libraries directly and use those to manage a book. It also has a fairly
flexible plugin mechanism, allowing you to create your own custom tooling and
consumers (often referred to as <em>backends</em>) if you need to do some analysis of
the book or render it in a different format.</p>
<p>The <em>For Developers</em> chapters are here to show you the more advanced usage of
<code>mdbook</code>.</p>
<p>The two main ways a developer can hook into the book’s build process is via,</p>
<ul>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/13-for_developers-preprocessors/">Preprocessors</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/12-for_developers-backends/">Alternative Backends</a></li>
</ul>
<h2 id="the-build-process"><a class="header" href="#the-build-process">The build process</a></h2>
<p>The process of rendering a book project goes through several steps.</p>
<ol>
<li>Load the book
<ul>
<li>Parse the <code>book.toml</code>, falling back to the default <code>Config</code> if it doesn’t
exist</li>
<li>Load the book chapters into memory</li>
<li>Discover which preprocessors/backends should be used</li>
</ul>
</li>
<li>For each backend:
<ol>
<li>Run all the preprocessors.</li>
<li>Call the backend to render the processed result.</li>
</ol>
</li>
</ol>
<h2 id="using-mdbook-as-a-library"><a class="header" href="#using-mdbook-as-a-library">Using <code>mdbook</code> as a library</a></h2>
<p>The <code>mdbook</code> binary is just a wrapper around the underlying mdBook crates,
exposing their functionality as a command-line program. If you want to
programmatically drive mdBook, you can use the [<code>mdbook-driver</code>] crate.
This can be used to add your own functionality or tweak the build process.</p>
<p>The easiest way to find out how to use the <code>mdbook-driver</code> crate is by looking at the
<a href="https://docs.rs/mdbook-driver/latest/mdbook_driver/">API Docs</a>. The top level documentation explains how one would use the
<a href="https://docs.rs/mdbook-driver/latest/mdbook_driver/struct.MDBook.html"><code>MDBook</code></a> type to load and build a book, while the <a href="https://docs.rs/mdbook-driver/latest/mdbook_driver/config/index.html">config</a> module gives a good
explanation on the configuration system.</p>
</div>
