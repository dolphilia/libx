

<div class="mdbook-guide">
<h1 id="the-clean-command"><a class="header" href="#the-clean-command">cleanコマンド</a></h1>
<p>cleanコマンドは、生成された本と、ほかのビルド成果物を削除するために使います。</p>
<pre><code class="language-bash">mdbook clean&#10;</code></pre>
<h4 id="specify-a-directory"><a class="header" href="#specify-a-directory">ディレクトリを指定する</a></h4>
<p><code>clean</code>コマンドは、現在の作業ディレクトリの代わりに本のルートとして使うディレクトリを、引数で指定できます。</p>
<pre><code class="language-bash">mdbook clean path/to/book&#10;</code></pre>
<h4 id="--dest-dir"><a class="header" href="#--dest-dir"><code>--dest-dir</code></a></h4>
<p><code>--dest-dir</code>（<code>-d</code>）オプションは、本の出力ディレクトリを変更できます。このコマンドは、そのディレクトリを削除します。相対パスは現在のディレクトリを基準に解釈されます。指定しない場合は、<code>book.toml</code>の<code>build.build-dir</code>キーの値、または<code>./book</code>を使います。</p>
<pre><code class="language-bash">mdbook clean --dest-dir=path/to/book&#10;</code></pre>
<p><code>path/to/book</code>は、絶対パスでも相対パスでも構いません。</p>
</div>
