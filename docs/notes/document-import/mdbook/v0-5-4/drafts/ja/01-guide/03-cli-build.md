

<div class="mdbook-guide">
<h1 id="the-build-command"><a class="header" href="#the-build-command">buildコマンド</a></h1>
<p>buildコマンドは、本を出力するために使います。</p>
<pre><code class="language-bash">mdbook build&#10;</code></pre>
<p><code>SUMMARY.md</code>を解析して本の構成を把握し、対応するファイルを取得しようとします。<code>SUMMARY.md</code>に記載されていて、まだ存在しないファイルも作成することに注意してください。</p>
<p>出力は、扱いやすいようにソースと同じディレクトリ構成を保ちます。そのため、大きな本でも出力後の構成が整理された状態になります。</p>
<h4 id="specify-a-directory"><a class="header" href="#specify-a-directory">ディレクトリを指定する</a></h4>
<p><code>build</code>コマンドは、現在の作業ディレクトリの代わりに本のルートとして使うディレクトリを、引数で指定できます。</p>
<pre><code class="language-bash">mdbook build path/to/book&#10;</code></pre>
<h4 id="--open"><a class="header" href="#--open"><code>--open</code></a></h4>
<p><code>--open</code>（<code>-o</code>）フラグを使うと、mdbookはビルド後に、出力した本を既定のウェブブラウザーで開きます。</p>
<h4 id="--dest-dir"><a class="header" href="#--dest-dir"><code>--dest-dir</code></a></h4>
<p>本の出力ディレクトリは、<code>--dest-dir</code>（<code>-d</code>）オプションで変更できます。相対パスは現在のディレクトリを基準に解釈されます。指定しない場合は、<code>book.toml</code>の<code>build.build-dir</code>キーの値、または<code>./book</code>を使います。</p>
<hr>
<p><em><strong>注：</strong></em> <em>buildコマンドは、ソースディレクトリのすべてのファイル（拡張子が<code>.md</code>のファイルを除く）を、ビルドディレクトリへコピーします。</em></p>
</div>
