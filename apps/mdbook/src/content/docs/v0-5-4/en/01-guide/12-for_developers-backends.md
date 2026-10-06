---
title: "Alternative backends"
documentId: "mdbook:guide/src/for_developers/backends.md"
order: 30
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/for_developers/backends.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/for_developers/backends.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/12-for_developers-backends.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/for_developers/backends.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "Preprocessors", "link": "/v0-5-4/en/01-guide/13-for_developers-preprocessors"}
next: {"text": "Contributors", "link": "/v0-5-4/en/01-guide/31-misc-contributors"}
---


<div class="mdbook-guide">
<h1 id="alternative-backends"><a class="header" href="#alternative-backends">Alternative backends</a></h1>
<p>A “backend” is simply a program which <code>mdbook</code> will invoke during the book
rendering process. This program is passed a JSON representation of the book and
configuration information via <code>stdin</code>. Once the backend receives this
information it is free to do whatever it wants.</p>
<p>See <a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/">Configuring Renderers</a> for more information about using backends.</p>
<p>The community has developed several backends.
See the <a href="https://github.com/rust-lang/mdBook/wiki/Third-party-plugins">Third Party Plugins</a> wiki page for a list of available backends.</p>
<h2 id="setting-up"><a class="header" href="#setting-up">Setting up</a></h2>
<p>This page will step you through creating your own alternative backend in the form
of a simple word counting program. Although it will be written in Rust, there’s
no reason why it couldn’t be accomplished using something like Python or Ruby.</p>
<p>First you’ll want to create a new binary program and add <code>mdbook-renderer</code> as a
dependency.</p>
<pre><code class="language-shell">$ cargo new --bin mdbook-wordcount&#10;$ cd mdbook-wordcount&#10;$ cargo add mdbook-renderer&#10;</code></pre>
<p>When our <code>mdbook-wordcount</code> plugin is invoked, <code>mdbook</code> will send it a JSON
version of <a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/struct.RenderContext.html"><code>RenderContext</code></a> via our plugin’s <code>stdin</code>. For convenience, there’s
a <a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/struct.RenderContext.html#method.from_json"><code>RenderContext::from_json()</code></a> constructor which will load a <code>RenderContext</code>.</p>
<p>This is all the boilerplate necessary for our backend to load the book.</p>
<pre class="playground"><code class="language-rust edition2018">// src/main.rs&#10;use std::io;&#10;use mdbook_renderer::RenderContext;&#10;&#10;fn main() {&#10;    let mut stdin = io::stdin();&#10;    let ctx = RenderContext::from_json(&#x26;mut stdin).unwrap();&#10;}</code></pre>
<blockquote>
<p><strong>Note:</strong> The <code>RenderContext</code> contains a <code>version</code> field. This lets backends
figure out whether they are compatible with the version of <code>mdbook</code> it’s being
called by. This <code>version</code> comes directly from the corresponding field in
<code>mdbook</code>’s <code>Cargo.toml</code>.</p>
<p>It is recommended that backends use the <a href="https://crates.io/crates/semver"><code>semver</code></a> crate to inspect this field
and emit a warning if there may be a compatibility issue.</p>
</blockquote>
<h2 id="inspecting-the-book"><a class="header" href="#inspecting-the-book">Inspecting the book</a></h2>
<p>Now our backend has a copy of the book, lets count how many words are in each
chapter!</p>
<p>Because the <code>RenderContext</code> contains a <a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/book/struct.Book.html"><code>Book</code></a> field (<code>book</code>), and a <code>Book</code> has
the <a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/book/struct.Book.html#method.iter"><code>Book::iter()</code></a> method for iterating over all items in a <code>Book</code>, this step
turns out to be just as easy as the first.</p>
<pre class="playground"><code class="language-rust edition2018">&#10;fn main() {&#10;    let mut stdin = io::stdin();&#10;    let ctx = RenderContext::from_json(&#x26;mut stdin).unwrap();&#10;&#10;    for item in ctx.book.iter() {&#10;        if let BookItem::Chapter(ref ch) = *item {&#10;            let num_words = count_words(ch);&#10;            println!("{}: {}", ch.name, num_words);&#10;        }&#10;    }&#10;}&#10;&#10;fn count_words(ch: &#x26;Chapter) -> usize {&#10;    ch.content.split_whitespace().count()&#10;}</code></pre>
<h2 id="enabling-the-backend"><a class="header" href="#enabling-the-backend">Enabling the backend</a></h2>
<p>Now we’ve got the basics running, we want to actually use it. First, install the
program.</p>
<pre><code class="language-shell">$ cargo install --path .&#10;</code></pre>
<p>Then <code>cd</code> to the particular book you’d like to count the words of and update its
<code>book.toml</code> file.</p>
<pre><code class="language-diff">  &#91;book&#93;&#10;  title = "mdBook Documentation"&#10;  description = "Create book from markdown files. Like Gitbook but implemented in Rust"&#10;  authors = &#91;"Mathieu David", "Michael-F-Bryan"&#93;&#10;&#10;+ &#91;output.html&#93;&#10;&#10;+ &#91;output.wordcount&#93;&#10;</code></pre>
<p>When it loads a book into memory, <code>mdbook</code> will inspect your <code>book.toml</code> file to
try and figure out which backends to use by looking for all <code>output.*</code> tables.
If none are provided it’ll fall back to using the default HTML renderer.</p>
<p>Notably, this means if you want to add your own custom backend you’ll also need
to make sure to add the HTML backend, even if its table just stays empty.</p>
<p>Now you just need to build your book like normal, and everything should <em>Just
Work</em>.</p>
<pre><code class="language-shell">$ mdbook build&#10;...&#10;2018-01-16 07:31:15 &#91;INFO&#93; (mdbook::renderer): Invoking the "mdbook-wordcount" renderer&#10;mdBook: 126&#10;Command Line Tool: 224&#10;init: 283&#10;build: 145&#10;watch: 146&#10;serve: 292&#10;test: 139&#10;Format: 30&#10;SUMMARY.md: 259&#10;Configuration: 784&#10;Theme: 304&#10;index.hbs: 447&#10;Syntax highlighting: 314&#10;MathJax Support: 153&#10;Rust code specific features: 148&#10;For Developers: 788&#10;Alternative Backends: 710&#10;Contributors: 85&#10;</code></pre>
<p>The reason we didn’t need to specify the full name/path of our <code>wordcount</code>
backend is because <code>mdbook</code> will try to <em>infer</em> the program’s name via
convention. The executable for the <code>foo</code> backend is typically called
<code>mdbook-foo</code>, with an associated <code>&#91;output.foo&#93;</code> entry in the <code>book.toml</code>. To
explicitly tell <code>mdbook</code> what command to invoke (it may require command-line
arguments or be an interpreted script), you can use the <code>command</code> field.</p>
<pre><code class="language-diff">  &#91;book&#93;&#10;  title = "mdBook Documentation"&#10;  description = "Create book from markdown files. Like Gitbook but implemented in Rust"&#10;  authors = &#91;"Mathieu David", "Michael-F-Bryan"&#93;&#10;&#10;  &#91;output.html&#93;&#10;&#10;  &#91;output.wordcount&#93;&#10;+ command = "python /path/to/wordcount.py"&#10;</code></pre>
<h2 id="configuration"><a class="header" href="#configuration">Configuration</a></h2>
<p>Now imagine you don’t want to count the number of words on a particular chapter
(it might be generated text/code, etc). The canonical way to do this is via the
usual <code>book.toml</code> configuration file by adding items to your <code>&#91;output.foo&#93;</code>
table.</p>
<p>The <code>Config</code> can be treated roughly as a nested hashmap which lets you call
methods like <code>get()</code> to access the config’s contents, with a
<code>get_deserialized()</code> convenience method for retrieving a value and automatically
deserializing to some arbitrary type <code>T</code>.</p>
<p>To implement this, we’ll create our own serializable <code>WordcountConfig</code> struct
which will encapsulate all configuration for this backend.</p>
<p>First add <code>serde</code> and <code>serde_derive</code> to your <code>Cargo.toml</code>,</p>
<pre><code>$ cargo add serde serde_derive&#10;</code></pre>
<p>And then you can create the config struct,</p>
<pre class="playground"><code class="language-rust edition2018"><span data-mdbook-hidden-line="true">#!&#91;allow(unused)&#93;&#10;</span><span data-mdbook-hidden-line="true">fn main() {&#10;</span>use serde_derive::{Serialize, Deserialize};&#10;&#10;...&#10;&#10;#&#91;derive(Debug, Default, Serialize, Deserialize)&#93;&#10;#&#91;serde(default, rename_all = "kebab-case")&#93;&#10;pub struct WordcountConfig {&#10;  pub ignores: Vec&#x3C;String>,&#10;}&#10;<span data-mdbook-hidden-line="true">}</span></code></pre>
<p>Now we just need to deserialize the <code>WordcountConfig</code> from our <code>RenderContext</code>
and then add a check to make sure we skip ignored chapters.</p>
<pre><code class="language-diff">  fn main() {&#10;      let mut stdin = io::stdin();&#10;      let ctx = RenderContext::from_json(&#x26;mut stdin).unwrap();&#10;+     let cfg: WordcountConfig = ctx.config&#10;+         .get_deserialized("output.wordcount")&#10;+         .unwrap_or_default();&#10;&#10;      for item in ctx.book.iter() {&#10;          if let BookItem::Chapter(ref ch) = *item {&#10;+             if cfg.ignores.contains(&#x26;ch.name) {&#10;+                 continue;&#10;+             }&#10;+&#10;              let num_words = count_words(ch);&#10;              println!("{}: {}", ch.name, num_words);&#10;          }&#10;      }&#10;  }&#10;</code></pre>
<h2 id="output-and-signalling-failure"><a class="header" href="#output-and-signalling-failure">Output and signalling failure</a></h2>
<p>While it’s nice to print word counts to the terminal when a book is built, it
might also be a good idea to output them to a file somewhere. <code>mdbook</code> tells a
backend where it should place any generated output via the <code>destination</code> field
in <a href="https://docs.rs/mdbook-renderer/latest/mdbook_renderer/struct.RenderContext.html"><code>RenderContext</code></a>.</p>
<pre><code class="language-diff">+ use std::fs::{self, File};&#10;+ use std::io::{self, Write};&#10;- use std::io;&#10;  use mdbook::renderer::RenderContext;&#10;  use mdbook::book::{BookItem, Chapter};&#10;&#10;  fn main() {&#10;    ...&#10;&#10;+     let _ = fs::create_dir_all(&#x26;ctx.destination);&#10;+     let mut f = File::create(ctx.destination.join("wordcounts.txt")).unwrap();&#10;+&#10;      for item in ctx.book.iter() {&#10;          if let BookItem::Chapter(ref ch) = *item {&#10;              ...&#10;&#10;              let num_words = count_words(ch);&#10;              println!("{}: {}", ch.name, num_words);&#10;+             writeln!(f, "{}: {}", ch.name, num_words).unwrap();&#10;          }&#10;      }&#10;  }&#10;</code></pre>
<blockquote>
<p><strong>Note:</strong> There is no guarantee that the destination directory exists or is
empty (<code>mdbook</code> may leave the previous contents to let backends do caching),
so it’s always a good idea to create it with <code>fs::create_dir_all()</code>.</p>
<p>If the destination directory already exists, don’t assume it will be empty.
To allow backends to cache the results from previous runs, <code>mdbook</code> may leave
old content in the directory.</p>
</blockquote>
<p>There’s always the possibility that an error will occur while processing a book
(just look at all the <code>unwrap()</code>’s we’ve written already), so <code>mdbook</code> will
interpret a non-zero exit code as a rendering failure.</p>
<p>For example, if we wanted to make sure all chapters have an <em>even</em> number of
words, erroring out if an odd number is encountered, then you may do something
like this:</p>
<pre><code class="language-diff">+ use std::process;&#10;  ...&#10;&#10;  fn main() {&#10;      ...&#10;&#10;      for item in ctx.book.iter() {&#10;          if let BookItem::Chapter(ref ch) = *item {&#10;              ...&#10;&#10;              let num_words = count_words(ch);&#10;              println!("{}: {}", ch.name, num_words);&#10;              writeln!(f, "{}: {}", ch.name, num_words).unwrap();&#10;&#10;+             if cfg.deny_odds &#x26;&#x26; num_words % 2 == 1 {&#10;+               eprintln!("{} has an odd number of words!", ch.name);&#10;+               process::exit(1);&#10;+             }&#10;          }&#10;      }&#10;  }&#10;&#10;  #&#91;derive(Debug, Default, Serialize, Deserialize)&#93;&#10;  #&#91;serde(default, rename_all = "kebab-case")&#93;&#10;  pub struct WordcountConfig {&#10;      pub ignores: Vec&#x3C;String>,&#10;+     pub deny_odds: bool,&#10;  }&#10;</code></pre>
<p>Now, if we reinstall the backend and build a book,</p>
<pre><code class="language-shell">$ cargo install --path . --force&#10;$ mdbook build /path/to/book&#10;...&#10;2018-01-16 21:21:39 &#91;INFO&#93; (mdbook::renderer): Invoking the "wordcount" renderer&#10;mdBook: 126&#10;Command Line Tool: 224&#10;init: 283&#10;init has an odd number of words!&#10;2018-01-16 21:21:39 &#91;ERROR&#93; (mdbook::renderer): Renderer exited with non-zero return code.&#10;2018-01-16 21:21:39 &#91;ERROR&#93; (mdbook::utils): Error: Rendering failed&#10;2018-01-16 21:21:39 &#91;ERROR&#93; (mdbook::utils):    Caused By: The "mdbook-wordcount" renderer failed&#10;</code></pre>
<p>As you’ve probably already noticed, output from the plugin’s subprocess is
immediately passed through to the user. It is encouraged for plugins to follow
the “rule of silence” and only generate output when necessary (e.g. an error in
generation or a warning).</p>
<p>All environment variables are passed through to the backend, allowing you to use
the usual <code>MDBOOK_LOG</code> to control logging verbosity.</p>
<h2 id="wrapping-up"><a class="header" href="#wrapping-up">Wrapping up</a></h2>
<p>Although contrived, hopefully this example was enough to show how you’d create
an alternative backend for <code>mdbook</code>. If you feel it’s missing something, don’t
hesitate to create an issue in the <a href="https://github.com/rust-lang/mdBook/issues">issue tracker</a> so we can improve the user
guide.</p>
<p>The existing backends mentioned towards the start of this chapter should serve
as a good example of how it’s done in real life, so feel free to skim through
the source code or ask questions.</p>
</div>
