---
title: "The test command"
documentId: "mdbook:guide/src/cli/test.md"
order: 10
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/test.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/cli/test.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/08-cli-test.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/test.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "serve", "link": "/v0-5-4/en/01-guide/07-cli-serve"}
next: {"text": "clean", "link": "/v0-5-4/en/01-guide/04-cli-clean"}
---


<div class="mdbook-guide">
<h1 id="the-test-command"><a class="header" href="#the-test-command">The test command</a></h1>
<p>When writing a book, you sometimes need to automate some tests. For example,
<a href="https://doc.rust-lang.org/stable/book/">The Rust Programming Book</a> uses a lot
of code examples that could get outdated. Therefore it is very important for
them to be able to automatically test these code examples.</p>
<p>mdBook supports a <code>test</code> command that will run all available tests in a book. At
the moment, only Rust tests are supported.</p>
<h4 id="disable-tests-on-a-code-block"><a class="header" href="#disable-tests-on-a-code-block">Disable tests on a code block</a></h4>
<p>rustdoc doesn’t test code blocks which contain the <code>ignore</code> attribute:</p>
<pre><code>```rust,ignore&#10;fn main() {}&#10;```&#10;</code></pre>
<p>rustdoc also doesn’t test code blocks which specify a language other than Rust:</p>
<pre><code>```markdown&#10;**Foo**: _bar_&#10;```&#10;</code></pre>
<p>rustdoc <em>does</em> test code blocks which have no language specified:</p>
<pre><code>```&#10;This is going to cause an error!&#10;```&#10;</code></pre>
<h4 id="specify-a-directory"><a class="header" href="#specify-a-directory">Specify a directory</a></h4>
<p>The <code>test</code> command can take a directory as an argument to use as the book’s root
instead of the current working directory.</p>
<pre><code class="language-bash">mdbook test path/to/book&#10;</code></pre>
<h4 id="--library-path"><a class="header" href="#--library-path"><code>--library-path</code></a></h4>
<p>The <code>--library-path</code> (<code>-L</code>) option allows you to add directories to the library
search path used by <code>rustdoc</code> when it builds and tests the examples. Multiple
directories can be specified with multiple options (<code>-L foo -L bar</code>) or with a
comma-delimited list (<code>-L foo,bar</code>). The path should point to the Cargo
<a href="https://doc.rust-lang.org/cargo/guide/build-cache.html">build cache</a> <code>deps</code> directory that
contains the build output of your project. For example, if your Rust project’s book is in a directory
named <code>my-book</code>, the following command would include the crate’s dependencies when running <code>test</code>:</p>
<pre><code class="language-shell">mdbook test my-book -L target/debug/deps/&#10;</code></pre>
<p>See the <code>rustdoc</code> command-line <a href="https://doc.rust-lang.org/rustdoc/command-line-arguments.html#-l--library-path-where-to-look-for-dependencies">documentation</a>
for more information.</p>
<h4 id="--chapter"><a class="header" href="#--chapter"><code>--chapter</code></a></h4>
<p>The <code>--chapter</code> (<code>-c</code>) option allows you to test a specific chapter of the
book using the chapter name or the relative path to the chapter.</p>
</div>
