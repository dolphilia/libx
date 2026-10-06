

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
