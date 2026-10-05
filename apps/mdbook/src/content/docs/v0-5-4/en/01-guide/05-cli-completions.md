---
title: "The completions command"
documentId: "mdbook:guide/src/cli/completions.md"
order: 12
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4 fixed documentation, MPL-2.0. <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/completions.md\">Original chapter</a> · <a href=\"/docs/mdbook/source/v0-5-4/original/guide/src/cli/completions.md\">Original Markdown</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/en/05-cli-completions.md\">Editable Libx document</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">Complete fixed upstream source</a>. · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">Editable source and build context</a>.</p>"}, {"kind": "editorial", "html": "<p>Static Libx presentation: examples show their complete code, including lines hidden in the original demo. Editing, code execution and MathJax rendering are provided by the <a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/completions.md\">original project</a>; formula examples retain their original TeX notation here. The document text and expanded examples are retained. This is an unofficial Libx static edition. Original text and examples are preserved; translated pages are identified separately.</p>"}]
prev: {"text": "clean", "link": "/v0-5-4/en/01-guide/04-cli-clean"}
next: {"text": "Format", "link": "/v0-5-4/en/01-guide/14-format-index"}
---


<div class="mdbook-guide">
<h1 id="the-completions-command"><a class="header" href="#the-completions-command">The completions command</a></h1>
<p>The completions command is used to generate auto-completions for some common shells.
This means when you type <code>mdbook</code> in your shell, you can then press your shell’s auto-complete key (usually the Tab key) and it may display what the valid options are, or finish partial input.</p>
<p>The completions first need to be installed for your shell:</p>
<pre><code class="language-bash"># bash&#10;mdbook completions bash > ~/.local/share/bash-completion/completions/mdbook&#10;# oh-my-zsh&#10;mdbook completions zsh > ~/.oh-my-zsh/completions/_mdbook&#10;autoload -U compinit &#x26;&#x26; compinit&#10;</code></pre>
<p>The command prints a completion script for the given shell.
Run <code>mdbook completions --help</code> for a list of supported shells.</p>
<p>Where to place the completions depend on which shell you are using and your operating system.
Consult your shell’s documentation for more information one where to place the script.</p>
</div>
