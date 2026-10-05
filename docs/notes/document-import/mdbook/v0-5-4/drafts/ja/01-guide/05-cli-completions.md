

<div class="mdbook-guide">
<h1 id="the-completions-command"><a class="header" href="#the-completions-command">completionsコマンド</a></h1>
<p>completionsコマンドは、よく使われるシェル向けの自動補完を生成します。シェルで<code>mdbook</code>を入力した後に、シェルの自動補完キー（通常はTabキー）を押すと、有効なオプションを表示したり、途中まで入力した内容を補完したりできます。</p>
<p>最初に、利用するシェルへ補完をインストールする必要があります。</p>
<pre><code class="language-bash"># bash&#10;mdbook completions bash > ~/.local/share/bash-completion/completions/mdbook&#10;# oh-my-zsh&#10;mdbook completions zsh > ~/.oh-my-zsh/completions/_mdbook&#10;autoload -U compinit &#x26;&#x26; compinit&#10;</code></pre>
<p>このコマンドは、指定したシェル用の補完スクリプトを出力します。対応するシェルの一覧は、<code>mdbook completions --help</code>で確認できます。</p>
<p>補完を配置する場所は、利用するシェルとOSによって異なります。スクリプトの配置先については、シェルの文書を参照してください。</p>
</div>
