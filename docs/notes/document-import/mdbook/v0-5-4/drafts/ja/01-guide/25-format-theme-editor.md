

<div class="mdbook-guide">
<h1 id="editor"><a class="header" href="#editor">エディター</a></h1>
<p>mdBookは、コードを実行できるplaygroundに加え、編集可能にする機能も任意で提供します。編集可能なコードブロックを有効にするには、<em><strong>book.toml</strong></em>へ次の設定を追加します。</p>
<pre><code class="language-toml">&#91;output.html.playground&#93;&#10;editable = true&#10;</code></pre>
<p>編集可能なコードブロックを有効にした後、編集するコードブロックへ<code>editable</code>属性を追加する必要があります。</p>
<pre><code class="language-markdown">```rust,editable&#10;fn main() {&#10;    let number = 5;&#10;    print!("{}", number);&#10;}&#10;```&#10;</code></pre>
<p>上の設定と例から、次の編集可能なplaygroundが生成されます。</p>
<pre class="playground"><code class="language-rust editable edition2018">fn main() {&#10;    let number = 5;&#10;    print!("{}", number);&#10;}</code></pre>
<p>編集可能なplaygroundに追加された<code>Undo Changes</code>ボタンに注目してください。</p>
<h2 id="customizing-the-editor"><a class="header" href="#customizing-the-editor">エディターをカスタマイズする</a></h2>
<p>既定では<a href="https://ace.c9.io/">Ace</a>エディターを使いますが、必要に応じて別のフォルダーを指定し、機能を置き換えることもできます。</p>
<pre><code class="language-toml">&#91;output.html.playground&#93;&#10;editable = true&#10;editor = "/path/to/editor"&#10;</code></pre>
<p>エディターの変更を正しく機能させるには、<code>theme</code>フォルダー内の<code>book.js</code>も上書きする必要があります。既定のAceエディターとの連携処理が含まれているためです。</p>
</div>
