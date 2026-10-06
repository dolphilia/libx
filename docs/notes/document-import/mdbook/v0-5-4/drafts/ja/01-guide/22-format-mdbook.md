

<div class="mdbook-guide">
<h1 id="mdbook-specific-features"><a class="header" href="#mdbook-specific-features">mdBook固有の機能</a></h1>
<h2 id="hiding-code-lines"><a class="header" href="#hiding-code-lines">コード行を非表示にする</a></h2>
<p>mdBookには、行の先頭へ特定の接頭辞を付けて、コード行を非表示にする機能があります。</p>
<p>Rustでは、<a href="https://doc.rust-lang.org/stable/rustdoc/write-documentation/documentation-tests.html#hiding-portions-of-the-example">Rustdocと同様に</a>、行の先頭へ<code># </code>（<code>#</code>の後に空白）を付けると非表示にできます。この接頭辞は<code>##</code>でエスケープできます。文字列<code># </code>で始まる行を、そのまま表示したい場合に使います（詳しくは<a href="https://doc.rust-lang.org/stable/rustdoc/write-documentation/documentation-tests.html#hiding-portions-of-the-example">Rustdocの文書</a>を参照してください）。</p>
<pre><code class="language-bash"># fn main() {&#10;    let x = 5;&#10;    let y = 6;&#10;&#10;    println!("{}", x + y);&#10;# }&#10;</code></pre>
<p>次のように表示されます。</p>
<pre class="playground"><code class="language-rust edition2018"><span data-mdbook-hidden-line="true">fn main() {&#10;</span>    let x = 5;&#10;    let y = 6;&#10;&#10;    println!("{}", x + y);&#10;<span data-mdbook-hidden-line="true">}</span></code></pre>
<p>コードブロックをタップしたり、マウスを重ねたりすると、非表示の行の表示を切り替える、目のアイコン（<span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 336C332.2 336 368 300.2 368 256C368 211.8 332.2 176 288 176C287.3 176 286.7 176 285.1 176C287.3 181.1 288 186.5 288 192C288 227.3 259.3 256 224 256C218.5 256 213.1 255.3 208 253.1C208 254.7 208 255.3 208 255.1C208 300.2 243.8 336 288 336L288 336zM95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6V112.6zM288 80C222.8 80 169.2 109.6 128.1 147.7C89.6 183.5 63.02 225.1 49.44 256C63.02 286 89.6 328.5 128.1 364.3C169.2 402.4 222.8 432 288 432C353.2 432 406.8 402.4 447.9 364.3C486.4 328.5 512.1 286 526.6 256C512.1 225.1 486.4 183.5 447.9 147.7C406.8 109.6 353.2 80 288 80V80z"></path></svg></span>）が現れます。</p>
<p>既定では、<code>rust</code>と注釈を付けたコード例だけで使えます。ほかの言語では、<code>book.toml</code>へ言語名と接頭辞の文字を指定し、コード行を非表示にする独自の接頭辞を定義できます。</p>
<pre><code class="language-toml">&#91;output.html.code.hidelines&#93;&#10;python = "~"&#10;</code></pre>
<p>指定した接頭辞で始まる行が非表示になります。上のPythonの接頭辞を使うと、次のコードは、</p>
<pre><code class="language-bash">~hidden()&#10;nothidden():&#10;~    hidden()&#10;    ~hidden()&#10;    nothidden()&#10;</code></pre>
<p>次のように表示されます。</p>
<pre><code class="language-python"><span data-mdbook-hidden-line="true">hidden()&#10;</span>nothidden():&#10;<span data-mdbook-hidden-line="true">    hidden()&#10;</span><span data-mdbook-hidden-line="true">    hidden()&#10;</span>    nothidden()&#10;</code></pre>
<p>個々のコードで別の接頭辞を指定して、上書きできます。次の例は、上と同じ結果になります。</p>
<pre><code class="language-markdown">```python,hidelines=!!!&#10;!!!hidden()&#10;nothidden():&#10;!!!    hidden()&#10;    !!!hidden()&#10;    nothidden()&#10;```&#10;</code></pre>
<h2 id="rust-playground"><a class="header" href="#rust-playground">Rust Playground</a></h2>
<p>Rustのコードブロックには、コードを実行して結果を直下へ表示する、再生ボタン（<span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path></svg></span>）が自動で付きます。コードを<a href="https://play.rust-lang.org/">Rust Playground</a>へ送る仕組みです。</p>
<pre class="playground"><code class="language-rust edition2018"><span data-mdbook-hidden-line="true">#!&#91;allow(unused)&#93;&#10;</span><span data-mdbook-hidden-line="true">fn main() {&#10;</span>println!("Hello, World!");&#10;<span data-mdbook-hidden-line="true">}</span></code></pre>
<p><code>main</code>関数がない場合、コードは自動でその中へ包まれます。</p>
<p>コードブロックの再生ボタンを無効にしたい場合は、次のように<code>noplayground</code>を指定できます。</p>
<pre><code class="language-markdown">```rust,noplayground&#10;let mut name = String::new();&#10;std::io::stdin().read_line(&#x26;mut name).expect("failed to read line");&#10;println!("Hello {}!", name);&#10;```&#10;</code></pre>
<p>本のすべてのコードブロックで再生ボタンを無効にするには、次の設定を<code>book.toml</code>へ書けます。</p>
<pre><code class="language-toml">&#91;output.html.playground&#93;&#10;runnable = false&#10;</code></pre>
<h2 id="rust-code-block-attributes"><a class="header" href="#rust-code-block-attributes">Rustのコードブロック属性</a></h2>
<p>Rustのコードブロックでは、言語名の直後に、カンマ、空白、タブで区切って属性を追加できます。例を示します。</p>
<pre><code class="language-markdown">```rust,ignore&#10;# This example won't be tested.&#10;panic!("oops!");&#10;```&#10;</code></pre>
<p>これらの属性は、<a href="/docs/mdbook/v0-5-4/ja/01-guide/08-cli-test/"><code>mdbook test</code></a>でRustの例をテストする際に特に重要です。<a href="https://doc.rust-lang.org/rustdoc/documentation-tests.html#attributes">rustdocの属性</a>と同じ属性を使い、いくつか追加されています。</p>
<ul>
<li><code>editable</code> — <a href="/docs/mdbook/v0-5-4/ja/01-guide/25-format-theme-editor/">エディター</a>を有効にします。</li>
<li><code>noplayground</code> — 再生ボタンを取り除きますが、テストは行います。</li>
<li><code>mdbook-runnable</code> — 再生ボタンを必ず表示します。テストはせずに、読者が実行できるようにしたい例で、<code>ignore</code>属性と組み合わせるためのものです。</li>
<li><code>ignore</code> — テストを行わず、再生ボタンも表示しません。ただし、Rustの構文としてハイライトします。</li>
<li><code>should_panic</code> — 実行するとpanicを起こすべきコードです。</li>
<li><code>no_run</code> — テスト時にコンパイルしますが、実行しません。再生ボタンも表示しません。</li>
<li><code>compile_fail</code> — コンパイルが失敗するべきコードです。</li>
<li><code>edition2015</code>、<code>edition2018</code>、<code>edition2021</code>、<code>edition2024</code> — 特定のRustエディションを指定します。本全体へ設定するには、<a href="/docs/mdbook/v0-5-4/ja/01-guide/17-format-configuration-general/#rust-options"><code>rust.edition</code></a>を参照してください。</li>
</ul>
<h2 id="including-files"><a class="header" href="#including-files">ファイルを取り込む</a></h2>
<p>次の構文で、ファイルを本へ取り込めます。</p>
<pre><code class="language-hbs">{{#include file.rs}}&#10;</code></pre>
<p>ファイルのパスは、現在のソースファイルからの相対パスで指定します。</p>
<p>mdBookは、取り込んだファイルをMarkdownとして解釈します。includeコマンドは、コードや例を挿入するためによく使われるため、解釈せずにファイルの内容を表示するには、通常、コマンドを<code>```</code>で囲みます。</p>
<pre><code class="language-hbs">```&#10;{{#include file.rs}}&#10;```&#10;</code></pre>
<h2 id="including-portions-of-a-file"><a class="header" href="#including-portions-of-a-file">ファイルの一部を取り込む</a></h2>
<p>例に必要な行など、ファイルの一部だけが必要な場合があります。部分的な取り込みには、4つの方法があります。</p>
<pre><code class="language-hbs">{{#include file.rs:2}}&#10;{{#include file.rs::10}}&#10;{{#include file.rs:2:}}&#10;{{#include file.rs:2:10}}&#10;</code></pre>
<p>最初のコマンドは、<code>file.rs</code>の2行目だけを取り込みます。2番目は10行目までを取り込み、11行目から末尾までは除きます。3番目は2行目以降を取り込み、1行目を除きます。最後は<code>file.rs</code>の2〜10行目を取り込みます。</p>
<p>取り込むファイルを変更したときに本が壊れないように、行番号の代わりにアンカーを使って、特定の節を取り込むこともできます。アンカーは、対応する2行の組です。開始行は正規表現<code>ANCHOR:\s*&#91;\w_-&#93;+</code>、終了行は<code>ANCHOR_END:\s*&#91;\w_-&#93;+</code>に一致する必要があります。どのような形式のコメント行にも、アンカーを置けます。</p>
<p>取り込むファイルとして、次の例を考えます。</p>
<pre><code class="language-rs">/* ANCHOR: all */&#10;&#10;// ANCHOR: component&#10;struct Paddle {&#10;    hello: f32,&#10;}&#10;// ANCHOR_END: component&#10;&#10;////////// ANCHOR: system&#10;impl System for MySystem { ... }&#10;////////// ANCHOR_END: system&#10;&#10;/* ANCHOR_END: all */&#10;</code></pre>
<p>本の中では、次のように書くだけです。</p>
<pre><code class="language-hbs">Here is a component:&#10;```rust,no_run,noplayground&#10;{{#include file.rs:component}}&#10;```&#10;&#10;Here is a system:&#10;```rust,no_run,noplayground&#10;{{#include file.rs:system}}&#10;```&#10;&#10;This is the full file.&#10;```rust,no_run,noplayground&#10;{{#include file.rs:all}}&#10;```&#10;</code></pre>
<p>取り込むアンカー内で、アンカーのパターンを含む行は無視されます。</p>
<h2 id="including-a-file-but-initially-hiding-all-except-specified-lines"><a class="header" href="#including-a-file-but-initially-hiding-all-except-specified-lines">ファイルを取り込み、最初は指定した行だけを表示する</a></h2>
<p><code>rustdoc_include</code>ヘルパーは、完全な例を含む外部のRustファイルからコードを取り込みます。ただし、<code>include</code>と同じように行番号やアンカーを指定し、最初はその部分の行だけを表示します。</p>
<p>行番号の範囲やアンカーの間にない行も取り込まれますが、先頭に<code>#</code>を付けます。読者はコードを展開して完全な例を見ることができ、Rustdocは<code>mdbook test</code>の実行時に完全な例を使います。</p>
<p>たとえば、次のRustプログラムを含む<code>file.rs</code>というファイルを考えます。</p>
<pre class="playground"><code class="language-rust edition2018">fn main() {&#10;    let x = add_one(2);&#10;    assert_eq!(x, 3);&#10;}&#10;&#10;fn add_one(num: i32) -> i32 {&#10;    num + 1&#10;}</code></pre>
<p>次の構文で、最初は2行目だけを表示するコードを取り込めます。</p>
<pre><code class="language-hbs">To call the `add_one` function, we pass it an `i32` and bind the returned value to `x`:&#10;&#10;```rust&#10;{{#rustdoc_include file.rs:2}}&#10;```&#10;</code></pre>
<p>手作業でコードを挿入し、<code>#</code>を使って2行目以外を非表示にした場合と、同じ結果になります。</p>
<pre><code class="language-hbs">To call the `add_one` function, we pass it an `i32` and bind the returned value to `x`:&#10;&#10;```rust&#10;# fn main() {&#10;    let x = add_one(2);&#10;#     assert_eq!(x, 3);&#10;# }&#10;#&#10;# fn add_one(num: i32) -> i32 {&#10;#     num + 1&#10;# }&#10;```&#10;</code></pre>
<p>つまり、次のように表示されます（残りのファイルを見るには「展開」アイコンをクリックします）。</p>
<pre class="playground"><code class="language-rust edition2018"><span data-mdbook-hidden-line="true">fn main() {&#10;</span>    let x = add_one(2);&#10;<span data-mdbook-hidden-line="true">    assert_eq!(x, 3);&#10;</span><span data-mdbook-hidden-line="true">}&#10;</span><span data-mdbook-hidden-line="true">&#10;</span><span data-mdbook-hidden-line="true">fn add_one(num: i32) -> i32 {&#10;</span><span data-mdbook-hidden-line="true">    num + 1&#10;</span><span data-mdbook-hidden-line="true">}</span></code></pre>
<h2 id="inserting-runnable-rust-files"><a class="header" href="#inserting-runnable-rust-files">実行可能なRustファイルを挿入する</a></h2>
<p>次の構文で、実行可能なRustファイルを本へ挿入できます。</p>
<pre><code class="language-hbs">{{#playground file.rs}}&#10;</code></pre>
<p>Rustファイルのパスは、現在のソースファイルからの相対パスで指定します。</p>
<p>再生ボタンをクリックすると、コードが<a href="https://play.rust-lang.org/">Rust Playground</a>へ送られ、コンパイル・実行されます。結果は返送され、コードの直下へ表示されます。</p>
<p>生成したコードの表示例です。</p>
<pre class="playground"><code class="language-rust edition2018">fn main() {&#10;    println!("Hello World!");&#10;<span data-mdbook-hidden-line="true">&#10;</span><span data-mdbook-hidden-line="true">    // You can even hide lines! :D&#10;</span><span data-mdbook-hidden-line="true">    println!("I am hidden! Expand the code snippet to see me");&#10;</span>}</code></pre>
<p>ファイル名の後に渡した値は、コードブロックの属性として追加されます。たとえば、<code>{{#playground example.rs editable}}</code>は、次のようなコードブロックを生成します。</p>
<pre><code class="language-markdown">```rust,editable&#10;# Contents of example.rs here.&#10;```&#10;</code></pre>
<p><code>editable</code>属性は、<a href="#rust-code-block-attributes">Rustのコードブロック属性</a>で説明したとおり、<a href="/docs/mdbook/v0-5-4/ja/01-guide/25-format-theme-editor/">エディター</a>を有効にします。</p>
<h2 id="controlling-page-title"><a class="header" href="#controlling-page-title">ページの&#x3C;title>を指定する</a></h2>
<p>章の先頭近くに<code>{{#title ...}}</code>を置くと、目次（サイドバー）の項目とは異なる&lt;title&gt;を指定できます。</p>
<pre><code class="language-hbs">{{#title My Title}}&#10;</code></pre>
<h2 id="html-classes-provided-by-mdbook"><a class="header" href="#html-classes-provided-by-mdbook">mdBookが提供するHTMLクラス</a></h2>
<img class="right" src="/docs/mdbook/source-assets/format/images/rust-logo-blk.svg" alt="Rustロゴ">
<h3 id="classleft-and-right"><a class="header" href="#classleft-and-right"><code>class="left"</code>と<code>"right"</code></a></h3>
<p>これらのクラスは、インラインHTMLで画像を左右に寄せるために、既定で用意されています。</p>
<pre><code class="language-html">&#x3C;img class="right" src="images/rust-logo-blk.svg" alt="The Rust logo">&#10;</code></pre>
<h3 id="classhidden"><a class="header" href="#classhidden"><code>class="hidden"</code></a></h3>
<p><code>hidden</code>クラスを付けたHTMLタグは表示されません。</p>
<pre><code class="language-html">&#x3C;div class="hidden">This will not be seen.&#x3C;/div>&#10;</code></pre>
<div class="hidden">This will not be seen.</div>
<h2 id="font-awesome-icons"><a class="header" href="#font-awesome-icons">Font Awesomeのアイコン</a></h2>
<p>mdBookには、<a href="https://fontawesome.com">Font Awesome Free</a>バージョン6の、MITライセンスのSVGファイルのコピーが含まれます。<code>&lt;i&gt;</code>構文を模倣し、結果をインラインSVGへ変換します。regular、solid、brandsのアイコンだけを含み、lightなどの有料機能は含みません。</p>
<p>たとえば、次のHTML構文に対して、</p>
<pre><code class="language-hbs">The result looks like this: &#x3C;i class="fa-solid fa-print">&#x3C;/i>&#10;</code></pre>
<p>次のように表示されます：<span class="fa-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zm-16-88c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"></path></svg></span></p>
<p>利用できるアイコンは、<a href="https://fontawesome.com/v6/search">無料のアイコン集合</a>を参照してください。</p>
</div>
