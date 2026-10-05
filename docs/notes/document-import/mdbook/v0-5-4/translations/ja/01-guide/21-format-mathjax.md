---
title: "mdBook：MathJax対応"
documentId: "mdbook:guide/src/format/mathjax.md"
order: 24
licenseSource: "mdbook-guide"
documentContext: [{"kind": "source", "html": "<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href=\"https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/guide/src/format/mathjax.md\">固定した原典</a> · <a href=\"/docs/mdbook/source/v0-5-4/edited/ja/21-format-mathjax.md\">編集可能な日本語文書</a> · <a href=\"/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz\">固定原資料一式</a>。 · <a href=\"/docs/mdbook/source/v0-5-4/source.zip\">編集可能な英日原稿とビルド資料</a>.</p>"}, {"kind": "editorial", "html": "<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>"}]
prev: {"text": "エディター", "link": "/v0-5-4/ja/01-guide/25-format-theme-editor"}
next: {"text": "mdBook固有の機能", "link": "/v0-5-4/ja/01-guide/22-format-mdbook"}
---


<div class="mdbook-guide">
<h1 id="mathjax-support"><a class="header" href="#mathjax-support">MathJax対応</a></h1>
<p>mdBookは、<a href="https://www.mathjax.org/">MathJax</a>による数式表示に任意で対応します。</p>
<p>MathJaxを有効にするには、<code>book.toml</code>の<code>output.html</code>節に、<code>mathjax-support</code>キーを追加する必要があります。</p>
<pre><code class="language-toml">&#91;output.html&#93;&#10;mathjax-support = true&#10;</code></pre>
<blockquote>
<p><strong>注：</strong> MathJaxで通常使われる区切りは、まだ対応していません。現時点では、<code>$$ ... $$</code>を区切りとして使えず、<code>\[ ... \]</code>を機能させるには、バックスラッシュを追加する必要があります。この制約は、近いうちに解消されることが期待されています。</p>
</blockquote>
<blockquote>
<p><strong>注：</strong> MathJaxのブロックで2つのバックスラッシュを使う場合（たとえば、<code>\begin{cases} \frac 1 2 \\ \frac 3 4 \end{cases}</code>などのコマンド）、バックスラッシュを<em>さらに2つ</em>追加する必要があります（例：<code>\begin{cases} \frac 1 2 \\\\ \frac 3 4 \end{cases}</code>）。</p>
</blockquote>
<h3 id="inline-equations"><a class="header" href="#inline-equations">行内数式</a></h3>
<p>行内数式は、<code>\\(</code>と<code>\\)</code>で囲みます。たとえば、次の行内数式 \( \int x dx = \frac{x^2}{2} + C \)を表示するには、次のように書きます。</p>
<pre><code>\\( \int x dx = \frac{x^2}{2} + C \\)&#10;</code></pre>
<h3 id="block-equations"><a class="header" href="#block-equations">独立した数式</a></h3>
<p>独立した数式は、<code>\\[</code>と<code>\\]</code>で囲みます。次の数式を表示するには、</p>
<p>\[ \mu = \frac{1}{N} \sum_{i=0} x_i \]</p>
<p>次のように書きます。</p>
<pre><code class="language-bash">\\&#91; \mu = \frac{1}{N} \sum_{i=0} x_i \\&#93;&#10;</code></pre>
</div>
