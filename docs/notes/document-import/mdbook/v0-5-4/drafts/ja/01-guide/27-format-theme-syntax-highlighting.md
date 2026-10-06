

<div class="mdbook-guide">
<h1 id="syntax-highlighting"><a class="header" href="#syntax-highlighting">構文ハイライト</a></h1>
<p>mdBookは、独自テーマを使った<a href="https://highlightjs.org">Highlight.js</a>で構文をハイライトします。</p>
<p>言語の自動検出は無効になっているため、次のように使用するプログラミング言語を指定するとよいでしょう。</p>
<pre><code class="language-markdown">```rust&#10;fn main() {&#10;    // Some code&#10;}&#10;```&#10;</code></pre>
<h2 id="supported-languages"><a class="header" href="#supported-languages">対応言語</a></h2>
<p>以下の言語に既定で対応しています。独自の<code>highlight.js</code>を用意して、さらに追加できます。</p>
<ul>
<li>apache</li>
<li>armasm</li>
<li>bash</li>
<li>c</li>
<li>coffeescript</li>
<li>cpp</li>
<li>csharp</li>
<li>css</li>
<li>d</li>
<li>diff</li>
<li>go</li>
<li>handlebars</li>
<li>haskell</li>
<li>http</li>
<li>ini</li>
<li>java</li>
<li>javascript</li>
<li>json</li>
<li>julia</li>
<li>kotlin</li>
<li>less</li>
<li>lua</li>
<li>makefile</li>
<li>markdown</li>
<li>nginx</li>
<li>nim</li>
<li>nix</li>
<li>objectivec</li>
<li>perl</li>
<li>php</li>
<li>plaintext</li>
<li>properties</li>
<li>python</li>
<li>r</li>
<li>ruby</li>
<li>rust</li>
<li>scala</li>
<li>scss</li>
<li>shell</li>
<li>sql</li>
<li>swift</li>
<li>typescript</li>
<li>x86asm</li>
<li>xml</li>
<li>yaml</li>
</ul>
<h2 id="custom-theme"><a class="header" href="#custom-theme">独自テーマ</a></h2>
<p>テーマのほかの部分と同じように、構文ハイライトに使うファイルも独自のものへ置き換えられます。</p>
<ul>
<li><em><strong>highlight.js</strong></em> 新しい版を使いたい場合を除き、通常はこのファイルを上書きする必要はありません。</li>
<li><em><strong>highlight.css</strong></em> highlight.jsが構文ハイライトに使うテーマです。</li>
</ul>
<p><code>highlight.js</code>で別のテーマを使いたい場合は、そのウェブサイトからダウンロードするか、自分で作成します。名前を<code>highlight.css</code>にして、本の<code>theme</code>フォルダーへ置いてください。</p>
<p>これで、既定のテーマの代わりに独自のテーマが使われます。</p>
<h2 id="improve-default-theme"><a class="header" href="#improve-default-theme">既定のテーマを改善する</a></h2>
<p>既定のテーマが特定の言語で適切に見えない、または改善できると思った場合は、考えていることを説明して<a href="https://github.com/rust-lang/mdBook/issues">新しいIssueを投稿</a>してください。著者が確認します。</p>
<p>改善案を含むプルリクエストを作成することもできます。</p>
<p>全体としては、派手な色を使いすぎず、明るく落ち着いたテーマにしてください。</p>
</div>
