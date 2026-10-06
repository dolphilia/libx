

<div class="mdbook-guide">
<h1 id="the-test-command"><a class="header" href="#the-test-command">testコマンド</a></h1>
<p>本を書くときに、テストを自動化したい場合があります。たとえば、<a href="https://doc.rust-lang.org/stable/book/">The Rust Programming Book</a>には、古くなる可能性のあるコード例が数多く使われています。そのため、コード例を自動でテストできることがとても重要です。</p>
<p>mdBookの<code>test</code>コマンドは、本の中にある、利用可能なテストをすべて実行します。現時点では、Rustのテストだけに対応しています。</p>
<h4 id="disable-tests-on-a-code-block"><a class="header" href="#disable-tests-on-a-code-block">コードブロックのテストを無効にする</a></h4>
<p>rustdocは、<code>ignore</code>属性が付いたコードブロックをテストしません。</p>
<pre><code>```rust,ignore&#10;fn main() {}&#10;```&#10;</code></pre>
<p>rustdocは、Rust以外の言語が指定されたコードブロックもテストしません。</p>
<pre><code>```markdown&#10;**Foo**: _bar_&#10;```&#10;</code></pre>
<p>rustdocは、言語が指定されていないコードブロックを<em>テストします</em>。</p>
<pre><code>```&#10;This is going to cause an error!&#10;```&#10;</code></pre>
<h4 id="specify-a-directory"><a class="header" href="#specify-a-directory">ディレクトリを指定する</a></h4>
<p><code>test</code>コマンドは、現在の作業ディレクトリの代わりに本のルートとして使うディレクトリを、引数で指定できます。</p>
<pre><code class="language-bash">mdbook test path/to/book&#10;</code></pre>
<h4 id="--library-path"><a class="header" href="#--library-path"><code>--library-path</code></a></h4>
<p><code>--library-path</code>（<code>-L</code>）オプションは、<code>rustdoc</code>が例のビルドとテストに使うライブラリー検索パスへ、ディレクトリを追加できます。複数のオプション（<code>-L foo -L bar</code>）や、カンマ区切りの一覧（<code>-L foo,bar</code>）で複数のディレクトリを指定できます。パスには、プロジェクトのビルド出力を含むCargoの<a href="https://doc.rust-lang.org/cargo/guide/build-cache.html">ビルドキャッシュ</a>の<code>deps</code>ディレクトリを指定してください。たとえば、Rustプロジェクトの本が<code>my-book</code>というディレクトリにある場合、次のコマンドは、<code>test</code>の実行時にcrateの依存関係を含めます。</p>
<pre><code class="language-shell">mdbook test my-book -L target/debug/deps/&#10;</code></pre>
<p>詳しくは、<code>rustdoc</code>のコマンドライン<a href="https://doc.rust-lang.org/rustdoc/command-line-arguments.html#-l--library-path-where-to-look-for-dependencies">文書</a>を参照してください。</p>
<h4 id="--chapter"><a class="header" href="#--chapter"><code>--chapter</code></a></h4>
<p><code>--chapter</code>（<code>-c</code>）オプションは、章の名前または章への相対パスを使って、本の特定の章をテストできます。</p>
</div>
