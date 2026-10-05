

<div class="mdbook-guide">
<h1 id="general-configuration"><a class="header" href="#general-configuration">全般の設定</a></h1>
<p><em><strong>book.toml</strong></em>ファイルで、本のパラメーターを設定できます。</p>
<p><em><strong>book.toml</strong></em>ファイルの例を示します。</p>
<pre><code class="language-toml">&#91;book&#93;&#10;title = "Example book"&#10;authors = &#91;"John Doe"&#93;&#10;description = "The example book covers examples."&#10;&#10;&#91;rust&#93;&#10;edition = "2018"&#10;&#10;&#91;build&#93;&#10;build-dir = "my-example-book"&#10;create-missing = false&#10;&#10;&#91;preprocessor.index&#93;&#10;&#10;&#91;preprocessor.links&#93;&#10;&#10;&#91;output.html&#93;&#10;additional-css = &#91;"custom.css"&#93;&#10;&#10;&#91;output.html.search&#93;&#10;limit-results = 15&#10;</code></pre>
<h2 id="supported-configuration-options"><a class="header" href="#supported-configuration-options">対応する設定項目</a></h2>
<p>設定で指定した<strong>すべての</strong>相対パスは、常に設定ファイルが置かれている本のルートを基準に解釈されることに注意してください。</p>
<h3 id="general-metadata"><a class="header" href="#general-metadata">一般的なメタデータ</a></h3>
<p>本についての一般的な情報です。</p>
<ul>
<li><strong>title:</strong> 本のタイトル</li>
<li><strong>authors:</strong> 本の著者</li>
<li><strong>description:</strong> 本の説明。各ページのHTMLの<code>&#x3C;head></code>へ、メタ情報として追加されます。</li>
<li><strong>src:</strong> 既定では、ソースディレクトリはルートフォルダー直下の<code>src</code>というディレクトリです。設定ファイルの<code>src</code>キーで変更できます。</li>
<li><strong>language:</strong> 本の主要な言語。たとえば<code>&#x3C;html lang="en"></code>のように、言語属性として使われます。本の文字の向き（RTL、LTR）の決定にも使われます。</li>
<li><strong>text-direction</strong>：本の文字の向き。左から右（LTR）または右から左（RTL）です。指定できる値は<code>ltr</code>、<code>rtl</code>です。省略すると、本の<code>language</code>属性から決定します。</li>
</ul>
<p><strong>book.toml</strong></p>
<pre><code class="language-toml">&#91;book&#93;&#10;title = "Example book"&#10;authors = &#91;"John Doe", "Jane Doe"&#93;&#10;description = "The example book covers examples."&#10;src = "my-src"  # the source files will be found in `root/my-src` instead of `root/src`&#10;language = "en"&#10;text-direction = "ltr"&#10;</code></pre>
<h3 id="rust-options"><a class="header" href="#rust-options">Rustの設定</a></h3>
<p>Rust言語の設定です。テストの実行やplaygroundとの連携に関係します。</p>
<pre><code class="language-toml">&#91;rust&#93;&#10;edition = "2015"   # the default edition for code blocks&#10;</code></pre>
<ul>
<li>
<p><strong>edition</strong>：コードで既定として使うRustのエディションです。既定は<code>"2015"</code>です。個々のコードブロックには、次のように<code>edition2015</code>、<code>edition2018</code>、<code>edition2021</code>、<code>edition2024</code>の注釈を付けて指定できます。</p>
<pre><code class="language-text">```rust,edition2015&#10;// This only works in 2015.&#10;let try = true;&#10;```&#10;</code></pre>
</li>
</ul>
<h3 id="build-options"><a class="header" href="#build-options">ビルドの設定</a></h3>
<p>本のビルド処理を制御します。</p>
<pre><code class="language-toml">&#91;build&#93;&#10;build-dir = "book"                # the directory where the output is placed&#10;create-missing = true             # whether or not to create missing pages&#10;use-default-preprocessors = true  # use the default preprocessors&#10;extra-watch-dirs = &#91;&#93;             # directories to watch for triggering builds&#10;</code></pre>
<ul>
<li>
<p><strong>build-dir:</strong> 生成した本を出力するディレクトリです。既定は、本のルートにある<code>book/</code>です。CLIオプション<code>--dest-dir</code>で上書きできます。</p>
</li>
<li>
<p><strong>create-missing:</strong> 既定では、<code>SUMMARY.md</code>で指定したファイルがない場合、本のビルド時に作成します（<code>create-missing = true</code>）。<code>false</code>なら、ファイルが存在しない場合はビルド処理がエラーで終了します。</p>
</li>
<li>
<p><strong>use-default-preprocessors:</strong> <code>false</code>にすると、既定のプリプロセッサー（<code>links</code>と<code>index</code>）を無効にします。</p>
<p>同じプリプロセッサーや、ほかのプリプロセッサーを設定テーブルで宣言している場合は、そちらが実行されます。</p>
<ul>
<li>明確にすると、プリプロセッサーの設定がない場合は、既定の<code>links</code>と<code>index</code>を実行します。</li>
<li><code>use-default-preprocessors = false</code>にすると、これらの既定のプリプロセッサーを実行しません。</li>
<li>たとえば<code>[preprocessor.links]</code>を追加すると、<code>use-default-preprocessors</code>の値にかかわらず、<code>links</code>を実行します。</li>
</ul>
</li>
<li>
<p><strong>extra-watch-dirs</strong>：<code>watch</code>と<code>serve</code>コマンドで監視するディレクトリのパスのリストです。これらのディレクトリ内でファイルを変更すると、再ビルドが起動します。本が<code>src</code>ディレクトリ外のファイルに依存している場合に便利です。</p>
</li>
</ul>
</div>
