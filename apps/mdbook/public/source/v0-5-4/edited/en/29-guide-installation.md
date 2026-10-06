---
title: "Installation"
documentId: "mdbook:guide/src/guide/installation.md"
order: 2
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/guide/installation.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/guide/installation.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/29-guide-installation.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/guide/installation.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "Introduction", "link": "/v0-5-4/en/01-guide/01-index"}
next: {"text": "Reading books", "link": "/v0-5-4/en/01-guide/30-guide-reading"}
---


<div class="mdbook-guide">
<h1 id="installation"><a class="header" href="#installation">Installation</a></h1>
<p>There are multiple ways to install the mdBook CLI tool.
Choose any one of the methods below that best suit your needs.
If you are installing mdBook for automatic deployment, check out the <a href="/docs/mdbook/v0-5-4/en/01-guide/10-continuous-integration/">continuous integration</a> chapter for more examples on how to install.</p>
<h2 id="pre-compiled-binaries"><a class="header" href="#pre-compiled-binaries">Pre-compiled binaries</a></h2>
<p>Executable binaries are available for download on the <a href="https://github.com/rust-lang/mdBook/releases">GitHub Releases page</a>.
Download the binary for your platform (Windows, macOS, or Linux) and extract the archive.
The archive contains an <code>mdbook</code> executable which you can run to build your books.</p>
<p>To make it easier to run, put the path to the binary into your <code>PATH</code>.</p>
<h2 id="build-from-source-using-rust"><a class="header" href="#build-from-source-using-rust">Build from source using Rust</a></h2>
<p>To build the <code>mdbook</code> executable from source, you will first need to install Rust and Cargo.
Follow the instructions on the <a href="https://www.rust-lang.org/tools/install">Rust installation page</a>.
mdBook currently requires at least Rust version 1.88.</p>
<p>Once you have installed Rust, the following command can be used to build and install mdBook:</p>
<pre><code class="language-sh">cargo install mdbook&#10;</code></pre>
<p>This will automatically download mdBook from <a href="https://crates.io/">crates.io</a>, build it, and install it in Cargo’s global binary directory (<code>~/.cargo/bin/</code> by default).</p>
<p>You can run <code>cargo install mdbook</code> again whenever you want to update to a new version.
That command will check if there is a newer version, and re-install mdBook if a newer version is found.</p>
<p>To uninstall, run the command <code>cargo uninstall mdbook</code>.</p>
<h3 id="installing-the-latest-master-version"><a class="header" href="#installing-the-latest-master-version">Installing the latest master version</a></h3>
<p>The version published to crates.io will ever so slightly be behind the version hosted on GitHub.
If you need the latest version you can build the git version of mdBook yourself.
Cargo makes this <em><strong>super easy</strong></em>!</p>
<pre><code class="language-sh">cargo install --git https://github.com/rust-lang/mdBook.git mdbook&#10;</code></pre>
<p>Again, make sure to add the Cargo bin directory to your <code>PATH</code>.</p>
<h2 id="modifying-and-contributing"><a class="header" href="#modifying-and-contributing">Modifying and contributing</a></h2>
<p>If you are interested in making modifications to mdBook itself, check out the <a href="https://github.com/rust-lang/mdBook/blob/master/CONTRIBUTING.md">Contributing Guide</a> for more information.</p>
</div>
