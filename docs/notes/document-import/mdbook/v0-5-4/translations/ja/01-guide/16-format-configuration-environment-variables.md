---
title: "mdBook：環境変数"
documentId: "mdbook:guide/src/format/configuration/environment-variables.md"
order: 19
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/configuration/environment-variables.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/16-format-configuration-environment-variables.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
prev: {"text": "レンダラー", "link": "/v0-5-4/ja/01-guide/19-format-configuration-renderers"}
next: {"text": "テーマ", "link": "/v0-5-4/ja/01-guide/24-format-theme-index"}
---


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
