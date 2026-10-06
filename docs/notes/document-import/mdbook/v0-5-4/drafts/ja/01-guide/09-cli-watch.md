

<div class="mdbook-guide">
<h1 id="the-watch-command"><a class="header" href="#the-watch-command">watchコマンド</a></h1>
<p><code>watch</code>コマンドは、ファイルが変わるたびに本を出力したいときに便利です。変更のたびに<code>mdbook build</code>を繰り返しても構いませんが、<code>mdbook watch</code>を一度実行すると、ファイルを監視し、変更時に自動でビルドします。<code>SUMMARY.md</code>にまだ記載されている削除済みファイルも、再作成されます。</p>
<h4 id="specify-a-directory"><a class="header" href="#specify-a-directory">ディレクトリを指定する</a></h4>
<p><code>watch</code>コマンドは、現在の作業ディレクトリの代わりに本のルートとして使うディレクトリを、引数で指定できます。</p>
<pre><code class="language-bash">mdbook watch path/to/book&#10;</code></pre>
<h4 id="--open"><a class="header" href="#--open"><code>--open</code></a></h4>
<p><code>--open</code>（<code>-o</code>）オプションを使うと、mdbookは出力した本を既定のウェブブラウザーで開きます。</p>
<h4 id="--dest-dir"><a class="header" href="#--dest-dir"><code>--dest-dir</code></a></h4>
<p>本の出力ディレクトリは、<code>--dest-dir</code>（<code>-d</code>）オプションで変更できます。相対パスは現在のディレクトリを基準に解釈されます。指定しない場合は、<code>book.toml</code>の<code>build.build-dir</code>キーの値、または<code>./book</code>を使います。</p>
<h4 id="--watcher"><a class="header" href="#--watcher"><code>--watcher</code></a></h4>
<p>ファイルの変更を検出するために、複数のバックエンドを利用できます。</p>
<ul>
<li><code>poll</code>（既定）— 毎秒ファイルシステムを走査して、ファイルの変更を確認します。</li>
<li><code>native</code> — OSに組み込まれた機能を使って、ファイル変更の通知を受け取ります。継続的な処理負荷が小さくなる場合がありますが、<code>poll</code>方式の監視ほど確実でない場合があります。詳しくは、次のIssueを参照してください： <a href="https://github.com/rust-lang/mdBook/issues/383">#383</a> <a href="https://github.com/rust-lang/mdBook/issues/1441">#1441</a> <a href="https://github.com/rust-lang/mdBook/issues/1707">#1707</a> <a href="https://github.com/rust-lang/mdBook/issues/2035">#2035</a> <a href="https://github.com/rust-lang/mdBook/issues/2102">#2102</a></li>
</ul>
<h4 id="specify-exclude-patterns"><a class="header" href="#specify-exclude-patterns">除外パターンを指定する</a></h4>
<p><code>watch</code>コマンドは、本のルートディレクトリにある<code>.gitignore</code>に記載されたファイルの変更では、ビルドを自動実行しません。<code>.gitignore</code>には、<a href="https://git-scm.com/docs/gitignore">gitignoreの文書</a>で説明されているファイルパターンを指定できます。エディターが作成する一時ファイルを無視する場合などに便利です。</p>
<p><em>注：本のルートディレクトリにある<code>.gitignore</code>だけを使います。グローバルな<code>$HOME/.gitignore</code>や、親ディレクトリの<code>.gitignore</code>は使いません。</em></p>
</div>
