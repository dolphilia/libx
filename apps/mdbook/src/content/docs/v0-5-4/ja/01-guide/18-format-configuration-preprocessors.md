---
title: "mdBook：プリプロセッサーの設定"
documentId: "mdbook:guide/src/format/configuration/preprocessors.md"
order: 17
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/configuration/preprocessors.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/18-format-configuration-preprocessors.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
prev: {"text": "全般", "link": "/v0-5-4/ja/01-guide/17-format-configuration-general"}
next: {"text": "レンダラー", "link": "/v0-5-4/ja/01-guide/19-format-configuration-renderers"}
---


<div class="mdbook-guide">
<h1 id="configuring-preprocessors"><a class="header" href="#configuring-preprocessors">プリプロセッサーの設定</a></h1>
<p>プリプロセッサーは、レンダラーへ渡す前のMarkdownソースを変更できる拡張です。</p>
<p>次のプリプロセッサーは組み込まれており、既定で使われます。</p>
<ul>
<li><code>links</code>：章にあるhandlebarsヘルパー<code>{{ #playground }}</code>、<code>{{ #include }}</code>、<code>{{ #rustdoc_include }}</code>を展開し、ファイルの内容を取り込みます。詳しくは<a href="/docs/mdbook/v0-5-4/ja/01-guide/22-format-mdbook/#including-files">ファイルを取り込む</a>を参照してください。</li>
<li><code>index</code>：<code>README.md</code>という名前の章ファイルをすべて<code>index.md</code>へ変換します。つまり、すべての<code>README.md</code>は、生成した本ではインデックスファイル<code>index.html</code>として出力されます。</li>
</ul>
<p>組み込みのプリプロセッサーは、<a href="/docs/mdbook/v0-5-4/ja/01-guide/17-format-configuration-general/#build-options"><code>build.use-default-preprocessors</code></a>設定で無効にできます。</p>
<p>コミュニティは、いくつかのプリプロセッサーを開発しています。利用できるプリプロセッサーの一覧は、Wikiの<a href="https://github.com/rust-lang/mdBook/wiki/Third-party-plugins">Third Party Plugins</a>ページを参照してください。</p>
<p>新しいプリプロセッサーの作り方は、<a href="/docs/mdbook/v0-5-4/ja/01-guide/13-for_developers-preprocessors/">開発者向けのプリプロセッサー</a>の章を参照してください。</p>
<h2 id="custom-preprocessor-configuration"><a class="header" href="#custom-preprocessor-configuration">独自プリプロセッサーの設定</a></h2>
<p><code>book.toml</code>に、プリプロセッサー名を付けた<code>preprocessor</code>テーブルを追加すると、プリプロセッサーを使えます。たとえば、<code>mdbook-example</code>というプリプロセッサーなら、次のように指定します。</p>
<pre><code class="language-toml">&#91;preprocessor.example&#93;&#10;</code></pre>
<p>このテーブルによって、mdBookは<code>mdbook-example</code>プリプロセッサーを実行します。</p>
<p>このテーブルには、プリプロセッサー固有のキーと値の組も追加できます。たとえば、例のプリプロセッサーに追加の設定が必要なら、次のように指定します。</p>
<pre><code class="language-toml">&#91;preprocessor.example&#93;&#10;some-extra-feature = true&#10;</code></pre>
<h2 id="locking-a-preprocessor-dependency-to-a-renderer"><a class="header" href="#locking-a-preprocessor-dependency-to-a-renderer">プリプロセッサーをレンダラーに結び付ける</a></h2>
<p>プリプロセッサーとレンダラーを結び付けると、そのレンダラーに対してプリプロセッサーを実行することを明示的に指定できます。</p>
<pre><code class="language-toml">&#91;preprocessor.example&#93;&#10;renderers = &#91;"html"&#93;  # example preprocessor only runs with the HTML renderer&#10;</code></pre>
<h2 id="provide-your-own-command"><a class="header" href="#provide-your-own-command">独自のコマンドを指定する</a></h2>
<p>既定では、<code>book.toml</code>へ<code>[preprocessor.foo]</code>テーブルを追加すると、<code>mdbook</code>は<code>mdbook-foo</code>実行ファイルの呼び出しを試みます。別のプログラム名を使ったり、コマンドライン引数を渡したりする場合は、<code>command</code>フィールドを追加して、この動作を上書きできます。</p>
<pre><code class="language-toml">&#91;preprocessor.random&#93;&#10;command = "python random.py"&#10;</code></pre>
<h3 id="optional-preprocessors"><a class="header" href="#optional-preprocessors">任意のプリプロセッサー</a></h3>
<p>有効にしたプリプロセッサーがインストールされていない場合、既定ではエラーになります。プリプロセッサーを任意と指定すると、この動作を変えられます。</p>
<pre><code class="language-toml">&#91;preprocessor.example&#93;&#10;optional = true&#10;</code></pre>
<p>これによって、エラーが警告になります。</p>
<h2 id="require-a-certain-order"><a class="header" href="#require-a-certain-order">順序を指定する</a></h2>
<p>プリプロセッサーの実行順序は、<code>before</code>と<code>after</code>フィールドで指定できます。たとえば、<code>linenos</code>プリプロセッサーで、<code>{{#include}}</code>によって取り込まれた行を処理したい場合は、組み込みの<code>links</code>プリプロセッサーの後に実行する必要があります。<code>before</code>か<code>after</code>フィールドで、この順序を指定できます。</p>
<pre><code class="language-toml">&#91;preprocessor.linenos&#93;&#10;after = &#91; "links" &#93;&#10;</code></pre>
<p>または、次のように指定します。</p>
<pre><code class="language-toml">&#91;preprocessor.links&#93;&#10;before = &#91; "linenos" &#93;&#10;</code></pre>
<p>冗長にはなりますが、上の両方を同じ設定ファイルに指定することもできます。</p>
<p><code>before</code>と<code>after</code>による優先度が同じプリプロセッサーは、名前で並べ替えます。無限ループは検出され、エラーになります。</p>
</div>
