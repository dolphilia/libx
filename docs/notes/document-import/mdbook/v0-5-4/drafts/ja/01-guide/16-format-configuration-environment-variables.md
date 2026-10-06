

<div class="mdbook-guide">
<h1 id="environment-variables"><a class="header" href="#environment-variables">環境変数</a></h1>
<p>対応する環境変数を設定すると、コマンドラインからすべての設定値を上書きできます。多くのOSでは、環境変数名に使える文字が英数字または<code>_</code>に制限されるため、設定キーには通常の<code>foo.bar.baz</code>と少し異なる書式が必要です。</p>
<p>設定には<code>MDBOOK_</code>で始まる変数を使います。<code>MDBOOK_</code>接頭辞を除き、残りの文字列を<code>kebab-case</code>へ変換してキーを作ります。二重のアンダースコア（<code>__</code>）は入れ子のキーを区切り、単独のアンダースコア（<code>_</code>）はハイフン（<code>-</code>）に置き換えます。</p>
<p>例：</p>
<ul>
<li><code>MDBOOK_book</code> -> <code>book</code></li>
<li><code>MDBOOK_BOOK</code> -> <code>book</code></li>
<li><code>MDBOOK_BOOK__TITLE</code> -> <code>book.title</code></li>
<li><code>MDBOOK_BOOK__TEXT_DIRECTION</code> -> <code>book.text-direction</code></li>
</ul>
<p>このため、環境変数<code>MDBOOK_BOOK__TITLE</code>を設定すると、<code>book.toml</code>を変更せずに本のタイトルを上書きできます。</p>
<blockquote>
<p><strong>注：</strong>複雑な設定項目を指定しやすくするため、環境変数の値はまずJSONとして解析し、解析に失敗した場合は文字列として扱います。</p>
<p>つまり、必要なら次のようにして、本をビルドするときに本のすべてのメタデータを上書きできます。</p>
<pre><code class="language-shell">$ export MDBOOK_BOOK='{"title": "My Awesome Book", "authors": &#91;"Michael-F-Bryan"&#93;}'&#10;$ mdbook build&#10;</code></pre>
</blockquote>
<p>後者の方法は、スクリプトやCIから<code>mdbook</code>を呼び出す場合に便利です。そのような状況では、ビルド前に<code>book.toml</code>を更新できないこともあります。</p>
</div>
