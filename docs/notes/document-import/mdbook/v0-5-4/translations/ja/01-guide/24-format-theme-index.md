---
title: "mdBook：テーマ"
documentId: "mdbook:guide/src/format/theme/README.md"
order: 20
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/theme/README.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/24-format-theme-index.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
prev: {"text": "環境変数", "link": "/v0-5-4/ja/01-guide/16-format-configuration-environment-variables"}
next: {"text": "index.hbs", "link": "/v0-5-4/ja/01-guide/26-format-theme-index-hbs"}
---


<div class="mdbook-guide">
<h1 id="theme"><a class="header" href="#theme">テーマ</a></h1>
<p>既定のレンダラーは、<a href="https://handlebarsjs.com">handlebars</a>テンプレートでMarkdownファイルを表示します。mdBookのバイナリーには、既定のテーマが含まれています。</p>
<p>テーマはすべてカスタマイズできます。プロジェクトのルートで、<code>src</code>の隣に<code>theme</code>ディレクトリを追加すると、テーマの各ファイルを独自のものへ選択的に置き換えられます。上書きしたいファイルと同じ名前のファイルを作ると、既定のファイルの代わりに使われます。</p>
<p>上書きできるファイルは、次のとおりです。</p>
<ul>
<li><strong><em>index.hbs</em></strong>はhandlebarsテンプレートです。</li>
<li><strong><em>head.hbs</em></strong>はHTMLの<code>&#x3C;head></code>節に追加されます。</li>
<li><strong><em>header.hbs</em></strong>の内容は、本の各ページの先頭に追加されます。</li>
<li><strong><em>css/</em></strong>は本のスタイルを指定するCSSファイルを含みます。
<ul>
<li><strong><em>css/chrome.css</em></strong>はUI要素向けです。</li>
<li><strong><em>css/general.css</em></strong>は基本のスタイルです。</li>
<li><strong><em>css/print.css</em></strong>は印刷出力のスタイルです。</li>
<li><strong><em>css/variables.css</em></strong>は、ほかのCSSファイルで使う変数を含みます。</li>
</ul>
</li>
<li><strong><em>book.js</em></strong>は、サイドバーの表示・非表示やテーマ変更など、クライアント側の機能を追加するために主に使います。</li>
<li><strong><em>highlight.js</em></strong>は、コードをハイライトするためのJavaScriptです。通常、変更する必要はありません。</li>
<li><strong><em>highlight.css</em></strong>はコードのハイライトに使うテーマです。</li>
<li><strong><em>favicon.svg</em></strong>と<strong><em>favicon.png</em></strong>は、使うfaviconです。SVG版は<a href="https://caniuse.com/#feat=link-icon-svg">新しいブラウザー</a>で使われます。</li>
<li><strong>fonts/fonts.css</strong>は、読み込むフォントの定義を含みます。独自フォントは<code>fonts</code>ディレクトリへ入れられます。</li>
</ul>
<p>通常、テーマを調整するときに、すべてのファイルを上書きする必要はありません。スタイルシートだけを変えたい場合は、ほかのファイルまで上書きする意味はありません。独自のファイルは組み込みのファイルより優先されるため、新しい修正や機能が追加されても更新されません。</p>
<p><strong>注：</strong> ファイルを上書きすると、機能が壊れる可能性があります。そのため、既定のテーマのファイルをひな形に使い、必要な部分だけを追加・変更することを推奨します。<code>mdbook init --theme</code>で、既定のテーマをソースディレクトリへ自動コピーし、上書きしたくないファイルを削除できます。</p>
<p><code>mdbook init --theme</code>は、上記のすべてのファイルを作成するわけではありません。<code>head.hbs</code>など、組み込みの対応ファイルがないものもあります。必要なら、そのファイルを作成してください。</p>
<p>組み込みのテーマをすべて置き換える場合は、設定の<a href="/docs/mdbook/v0-5-4/ja/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.preferred-dark-theme</code></a>も必ず指定してください。既定値は、組み込みの<code>navy</code>テーマです。</p>
</div>
