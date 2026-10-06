---
title: "Configuring Preprocessors"
documentId: "mdbook:guide/src/format/configuration/preprocessors.md"
order: 17
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/configuration/preprocessors.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/format/configuration/preprocessors.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/18-format-configuration-preprocessors.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/configuration/preprocessors.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "General", "link": "/v0-5-4/en/01-guide/17-format-configuration-general"}
next: {"text": "Renderers", "link": "/v0-5-4/en/01-guide/19-format-configuration-renderers"}
---


<div class="mdbook-guide">
<h1 id="configuring-preprocessors"><a class="header" href="#configuring-preprocessors">Configuring Preprocessors</a></h1>
<p>Preprocessors are extensions that can modify the raw Markdown source before it gets sent to the renderer.</p>
<p>The following preprocessors are built-in and included by default:</p>
<ul>
<li><code>links</code>: Expands the <code>{{ #playground }}</code>, <code>{{ #include }}</code>, and <code>{{ #rustdoc_include }}</code> handlebars
helpers in a chapter to include the contents of a file.
See <a href="/docs/mdbook/v0-5-4/en/01-guide/22-format-mdbook/#including-files">Including files</a> for more.</li>
<li><code>index</code>: Convert all chapter files named <code>README.md</code> into <code>index.md</code>. That is
to say, all <code>README.md</code> would be rendered to an index file <code>index.html</code> in the
rendered book.</li>
</ul>
<p>The built-in preprocessors can be disabled with the <a href="/docs/mdbook/v0-5-4/en/01-guide/17-format-configuration-general/#build-options"><code>build.use-default-preprocessors</code></a> config option.</p>
<p>The community has developed several preprocessors.
See the <a href="https://github.com/rust-lang/mdBook/wiki/Third-party-plugins">Third Party Plugins</a> wiki page for a list of available preprocessors.</p>
<p>For information on how to create a new preprocessor, see the <a href="/docs/mdbook/v0-5-4/en/01-guide/13-for_developers-preprocessors/">Preprocessors for Developers</a> chapter.</p>
<h2 id="custom-preprocessor-configuration"><a class="header" href="#custom-preprocessor-configuration">Custom preprocessor configuration</a></h2>
<p>Preprocessors can be added by including a <code>preprocessor</code> table in <code>book.toml</code> with the name of the preprocessor.
For example, if you have a preprocessor called <code>mdbook-example</code>, then you can include it with:</p>
<pre><code class="language-toml">&#91;preprocessor.example&#93;&#10;</code></pre>
<p>With this table, mdBook will execute the <code>mdbook-example</code> preprocessor.</p>
<p>This table can include additional key-value pairs that are specific to the preprocessor.
For example, if our example preprocessor needed some extra configuration options:</p>
<pre><code class="language-toml">&#91;preprocessor.example&#93;&#10;some-extra-feature = true&#10;</code></pre>
<h2 id="locking-a-preprocessor-dependency-to-a-renderer"><a class="header" href="#locking-a-preprocessor-dependency-to-a-renderer">Locking a preprocessor dependency to a renderer</a></h2>
<p>You can explicitly specify that a preprocessor should run for a renderer by
binding the two together.</p>
<pre><code class="language-toml">&#91;preprocessor.example&#93;&#10;renderers = &#91;"html"&#93;  # example preprocessor only runs with the HTML renderer&#10;</code></pre>
<h2 id="provide-your-own-command"><a class="header" href="#provide-your-own-command">Provide your own command</a></h2>
<p>By default when you add a <code>&#91;preprocessor.foo&#93;</code> table to your <code>book.toml</code> file,
<code>mdbook</code> will try to invoke the <code>mdbook-foo</code> executable. If you want to use a
different program name or pass in command-line arguments, this behaviour can
be overridden by adding a <code>command</code> field.</p>
<pre><code class="language-toml">&#91;preprocessor.random&#93;&#10;command = "python random.py"&#10;</code></pre>
<h3 id="optional-preprocessors"><a class="header" href="#optional-preprocessors">Optional preprocessors</a></h3>
<p>If you enable a preprocessor that isn’t installed, the default behavior is to throw an error.
This behavior can be changed by marking the preprocessor as optional:</p>
<pre><code class="language-toml">&#91;preprocessor.example&#93;&#10;optional = true&#10;</code></pre>
<p>This demotes the error to a warning.</p>
<h2 id="require-a-certain-order"><a class="header" href="#require-a-certain-order">Require a certain order</a></h2>
<p>The order in which preprocessors are run can be controlled with the <code>before</code> and <code>after</code> fields.
For example, suppose you want your <code>linenos</code> preprocessor to process lines that may have been <code>{{#include}}</code>d; then you want it to run after the built-in <code>links</code> preprocessor, which you can require using either the <code>before</code> or <code>after</code> field:</p>
<pre><code class="language-toml">&#91;preprocessor.linenos&#93;&#10;after = &#91; "links" &#93;&#10;</code></pre>
<p>or</p>
<pre><code class="language-toml">&#91;preprocessor.links&#93;&#10;before = &#91; "linenos" &#93;&#10;</code></pre>
<p>It would also be possible, though redundant, to specify both of the above in the same config file.</p>
<p>Preprocessors having the same priority specified through <code>before</code> and <code>after</code> are sorted by name.
Any infinite loops will be detected and produce an error.</p>
</div>
