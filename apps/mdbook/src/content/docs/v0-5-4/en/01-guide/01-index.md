---
title: "Introduction"
documentId: "mdbook:guide/src/README.md"
order: 1
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/README.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/README.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/01-index.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/README.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
next: {"text": "Installation", "link": "/v0-5-4/en/01-guide/29-guide-installation"}
---


<div class="mdbook-guide">
<h1 id="introduction"><a class="header" href="#introduction">Introduction</a></h1>
<style>
    .mdbook-version {
        position: absolute;
        right: 20px;
        top: 60px;
        background-color: var(--theme-popup-bg);
        border-radius: 8px;
        padding: 2px 5px 2px 5px;
        border: 1px solid var(--theme-popup-border);
        font-size: 0.9em;
    }
</style>
<div class="mdbook-version">
Version: 0.5.4
</div>
<p><strong>mdBook</strong> is a command line tool to create books with Markdown.
It is ideal for creating product or API documentation, tutorials, course materials or anything that requires a clean,
easily navigable and customizable presentation.</p>
<ul>
<li>Lightweight <a href="/docs/mdbook/v0-5-4/en/01-guide/20-format-markdown/">Markdown</a> syntax helps you focus more on your content</li>
<li>Integrated <a href="/docs/mdbook/v0-5-4/en/01-guide/30-guide-reading/#search">search</a> support</li>
<li>Color <a href="/docs/mdbook/v0-5-4/en/01-guide/27-format-theme-syntax-highlighting/">syntax highlighting</a> for code blocks for many different languages</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/24-format-theme-index/">Theme</a> files allow customizing the formatting of the output</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/18-format-configuration-preprocessors/">Preprocessors</a> can provide extensions for custom syntax and modifying content</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/">Backends</a> can render the output to multiple formats</li>
<li>Written in <a href="https://www.rust-lang.org/">Rust</a> for speed, safety, and simplicity</li>
<li>Automated testing of <a href="/docs/mdbook/v0-5-4/en/01-guide/08-cli-test/">Rust code samples</a></li>
</ul>
<p>This guide is an example of what mdBook produces.
mdBook is used by the Rust programming language project, and <a href="https://doc.rust-lang.org/book/">The Rust Programming Language</a> book is another fine example of mdBook in action.</p>
<h2 id="contributing"><a class="header" href="#contributing">Contributing</a></h2>
<p>mdBook is free and open source. You can find the source code on
<a href="https://github.com/rust-lang/mdBook">GitHub</a> and issues and feature requests can be posted on
the <a href="https://github.com/rust-lang/mdBook/issues">GitHub issue tracker</a>. mdBook relies on the community to fix bugs and
add features: if you’d like to contribute, please read
the <a href="https://github.com/rust-lang/mdBook/blob/master/CONTRIBUTING.md">CONTRIBUTING</a> guide and consider opening
a <a href="https://github.com/rust-lang/mdBook/pulls">pull request</a>.</p>
<h2 id="license"><a class="header" href="#license">License</a></h2>
<p>The mdBook source and documentation are released under
the <a href="https://www.mozilla.org/MPL/2.0/">Mozilla Public License v2.0</a>.</p>
</div>

<nav aria-label="Original book contents"><h2>Original book contents (static)</h2>
<h3>Summary</h3>
<p><a href="/docs/mdbook/v0-5-4/en/01-guide/01-index">Introduction</a></p>
<h3>User guide</h3>
<ul>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/29-guide-installation">Installation</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/30-guide-reading">Reading books</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/28-guide-creating">Creating a book</a></li>
</ul>
<h3>Reference guide</h3>
<ul>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/02-cli-index">Command-line tool</a><ul>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/06-cli-init">init</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/03-cli-build">build</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/09-cli-watch">watch</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/07-cli-serve">serve</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/08-cli-test">test</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/04-cli-clean">clean</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/05-cli-completions">completions</a></li>
</ul>
</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/14-format-index">Format</a><ul>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/23-format-summary">SUMMARY.md</a><ul>
<li><span aria-disabled="true">Draft chapter (not written in the original)</span></li>
</ul>
</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/15-format-configuration-index">Configuration</a><ul>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/17-format-configuration-general">General</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/18-format-configuration-preprocessors">Preprocessors</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers">Renderers</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/16-format-configuration-environment-variables">Environment variables</a></li>
</ul>
</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/24-format-theme-index">Theme</a><ul>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/26-format-theme-index-hbs">index.hbs</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/27-format-theme-syntax-highlighting">Syntax highlighting</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/25-format-theme-editor">Editor</a></li>
</ul>
</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/21-format-mathjax">MathJax support</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/22-format-mdbook">mdBook-specific features</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/20-format-markdown">Markdown</a></li>
</ul>
</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/10-continuous-integration">Continuous integration</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/11-for_developers-index">For developers</a><ul>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/13-for_developers-preprocessors">Preprocessors</a></li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/12-for_developers-backends">Alternative backends</a></li>
</ul>
</li>
</ul>
<hr/>
<p><a href="/docs/mdbook/v0-5-4/en/01-guide/31-misc-contributors">Contributors</a></p>
</nav>

