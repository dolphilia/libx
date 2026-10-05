---
title: "mdBook：cleanコマンド"
documentId: "mdbook:guide/src/cli/clean.md"
order: 11
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/clean.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/04-cli-clean.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
prev: {"text": "test", "link": "/v0-5-4/ja/01-guide/08-cli-test"}
next: {"text": "completions", "link": "/v0-5-4/ja/01-guide/05-cli-completions"}
---


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
