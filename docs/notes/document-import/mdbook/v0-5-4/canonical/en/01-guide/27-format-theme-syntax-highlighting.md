---
title: "Syntax highlighting"
documentId: "mdbook:guide/src/format/theme/syntax-highlighting.md"
order: 22
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/theme/syntax-highlighting.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/format/theme/syntax-highlighting.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/27-format-theme-syntax-highlighting.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/theme/syntax-highlighting.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "index.hbs", "link": "/v0-5-4/en/01-guide/26-format-theme-index-hbs"}
next: {"text": "Editor", "link": "/v0-5-4/en/01-guide/25-format-theme-editor"}
---


<div class="mdbook-guide">
<h1 id="syntax-highlighting"><a class="header" href="#syntax-highlighting">Syntax highlighting</a></h1>
<p>mdBook uses <a href="https://highlightjs.org">Highlight.js</a> with a custom theme
for syntax highlighting.</p>
<p>Automatic language detection has been turned off, so you will probably want to
specify the programming language you use like this:</p>
<pre><code class="language-markdown">```rust&#10;fn main() {&#10;    // Some code&#10;}&#10;```&#10;</code></pre>
<h2 id="supported-languages"><a class="header" href="#supported-languages">Supported languages</a></h2>
<p>These languages are supported by default, but you can add more by supplying
your own <code>highlight.js</code> file:</p>
<ul>
<li>apache</li>
<li>armasm</li>
<li>bash</li>
<li>c</li>
<li>coffeescript</li>
<li>cpp</li>
<li>csharp</li>
<li>css</li>
<li>d</li>
<li>diff</li>
<li>go</li>
<li>handlebars</li>
<li>haskell</li>
<li>http</li>
<li>ini</li>
<li>java</li>
<li>javascript</li>
<li>json</li>
<li>julia</li>
<li>kotlin</li>
<li>less</li>
<li>lua</li>
<li>makefile</li>
<li>markdown</li>
<li>nginx</li>
<li>nim</li>
<li>nix</li>
<li>objectivec</li>
<li>perl</li>
<li>php</li>
<li>plaintext</li>
<li>properties</li>
<li>python</li>
<li>r</li>
<li>ruby</li>
<li>rust</li>
<li>scala</li>
<li>scss</li>
<li>shell</li>
<li>sql</li>
<li>swift</li>
<li>typescript</li>
<li>x86asm</li>
<li>xml</li>
<li>yaml</li>
</ul>
<h2 id="custom-theme"><a class="header" href="#custom-theme">Custom theme</a></h2>
<p>Like the rest of the theme, the files used for syntax highlighting can be
overridden with your own.</p>
<ul>
<li><em><strong>highlight.js</strong></em> normally you shouldn’t have to overwrite this file, unless
you want to use a more recent version.</li>
<li><em><strong>highlight.css</strong></em> theme used by highlight.js for syntax highlighting.</li>
</ul>
<p>If you want to use another theme for <code>highlight.js</code> download it from their
website, or make it yourself, rename it to <code>highlight.css</code> and put it in
the <code>theme</code> folder of your book.</p>
<p>Now your theme will be used instead of the default theme.</p>
<h2 id="improve-default-theme"><a class="header" href="#improve-default-theme">Improve default theme</a></h2>
<p>If you think the default theme doesn’t look quite right for a specific language,
or could be improved, feel free to <a href="https://github.com/rust-lang/mdBook/issues">submit a new
issue</a> explaining what you
have in mind and I will take a look at it.</p>
<p>You could also create a pull-request with the proposed improvements.</p>
<p>Overall the theme should be light and sober, without too many flashy colors.</p>
</div>
