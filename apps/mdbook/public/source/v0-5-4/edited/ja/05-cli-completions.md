---
title: "mdBook：completionsコマンド"
documentId: "mdbook:guide/src/cli/completions.md"
order: 12
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/completions.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/05-cli-completions.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
prev: {"text": "clean", "link": "/v0-5-4/ja/01-guide/04-cli-clean"}
next: {"text": "形式", "link": "/v0-5-4/ja/01-guide/14-format-index"}
---


<div class="mdbook-guide">
<h1 id="the-completions-command"><a class="header" href="#the-completions-command">completionsコマンド</a></h1>
<p>completionsコマンドは、よく使われるシェル向けの自動補完を生成します。シェルで<code>mdbook</code>を入力した後に、シェルの自動補完キー（通常はTabキー）を押すと、有効なオプションを表示したり、途中まで入力した内容を補完したりできます。</p>
<p>最初に、利用するシェルへ補完をインストールする必要があります。</p>
<pre><code class="language-bash"># bash&#10;mdbook completions bash > ~/.local/share/bash-completion/completions/mdbook&#10;# oh-my-zsh&#10;mdbook completions zsh > ~/.oh-my-zsh/completions/_mdbook&#10;autoload -U compinit &#x26;&#x26; compinit&#10;</code></pre>
<p>このコマンドは、指定したシェル用の補完スクリプトを出力します。対応するシェルの一覧は、<code>mdbook completions --help</code>で確認できます。</p>
<p>補完を配置する場所は、利用するシェルとOSによって異なります。スクリプトの配置先については、シェルの文書を参照してください。</p>
</div>
