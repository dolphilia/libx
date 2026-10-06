---
title: "mdBook：コマンドラインツール"
documentId: "mdbook:guide/src/cli/README.md"
order: 5
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/cli/README.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/02-cli-index.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
prev: {"text": "本を作成する", "link": "/v0-5-4/ja/01-guide/28-guide-creating"}
next: {"text": "init", "link": "/v0-5-4/ja/01-guide/06-cli-init"}
---


<div class="mdbook-guide">
<h1 id="command-line-tool"><a class="header" href="#command-line-tool">コマンドラインツール</a></h1>
<p><code>mdbook</code>コマンドラインツールは、本の作成とビルドに使います。<code>mdbook</code>を<a href="/docs/mdbook/v0-5-4/ja/01-guide/29-guide-installation/">インストール</a>したら、ターミナルで<code>mdbook help</code>コマンドを実行して、利用できるコマンドを確認できます。</p>
<p>以降の節では、利用できる各コマンドを詳しく説明します。</p>
<ul>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/06-cli-init/"><code>mdbook init &#x3C;directory></code></a> — 最小限のひな形を含む、新しい本を作成します。</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/03-cli-build/"><code>mdbook build</code></a> — 本を出力します。</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/09-cli-watch/"><code>mdbook watch</code></a> — ソースファイルが変更されるたびに、本を再ビルドします。</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/07-cli-serve/"><code>mdbook serve</code></a> — 本を表示するためのウェブサーバーを起動し、変更時に再ビルドします。</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/08-cli-test/"><code>mdbook test</code></a> — Rustのコード例をテストします。</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/04-cli-clean/"><code>mdbook clean</code></a> — 生成された出力を削除します。</li>
<li><a href="/docs/mdbook/v0-5-4/ja/01-guide/05-cli-completions/"><code>mdbook completions</code></a> — シェルの自動補完に対応します。</li>
</ul>
</div>
