---
title: "Command-line tool"
documentId: "mdbook:guide/src/cli/README.md"
order: 5
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/README.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/cli/README.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/02-cli-index.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/README.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "Creating a book", "link": "/v0-5-4/en/01-guide/28-guide-creating"}
next: {"text": "init", "link": "/v0-5-4/en/01-guide/06-cli-init"}
---


<div class="mdbook-guide">
<h1 id="command-line-tool"><a class="header" href="#command-line-tool">Command-line tool</a></h1>
<p>The <code>mdbook</code> command-line tool is used to create and build books.
After you have <a href="/docs/mdbook/v0-5-4/en/01-guide/29-guide-installation/">installed</a> <code>mdbook</code>, you can run the <code>mdbook help</code> command in your terminal to view the available commands.</p>
<p>This following sections provide in-depth information on the different commands available.</p>
<ul>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/06-cli-init/"><code>mdbook init &#x3C;directory></code></a> — Creates a new book with minimal boilerplate to start with.</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/03-cli-build/"><code>mdbook build</code></a> — Renders the book.</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/09-cli-watch/"><code>mdbook watch</code></a> — Rebuilds the book any time a source file changes.</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/07-cli-serve/"><code>mdbook serve</code></a> — Runs a web server to view the book, and rebuilds on changes.</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/08-cli-test/"><code>mdbook test</code></a> — Tests Rust code samples.</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/04-cli-clean/"><code>mdbook clean</code></a> — Deletes the rendered output.</li>
<li><a href="/docs/mdbook/v0-5-4/en/01-guide/05-cli-completions/"><code>mdbook completions</code></a> — Support for shell auto-completion.</li>
</ul>
</div>
