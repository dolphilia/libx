

<div class="mdbook-guide">
<h1 id="markdown"><a class="header" href="#markdown">Markdown</a></h1>
<p>mdBookの<a href="https://github.com/raphlinus/pulldown-cmark">パーサー</a>は、<a href="https://commonmark.org/">CommonMark</a>仕様に、以下で説明する拡張を加えたものに従います。簡単な<a href="https://commonmark.org/help/tutorial/">チュートリアル</a>を読んだり、CommonMarkをリアルタイムで<a href="https://spec.commonmark.org/dingus/">試したり</a>できます。Markdown全体の解説はこの文書の対象外ですが、基本事項の概要を以下に示します。詳しく知りたい場合は、<a href="https://www.markdownguide.org">Markdown Guide</a>を参照してください。</p>
<h2 id="text-and-paragraphs"><a class="header" href="#text-and-paragraphs">テキストと段落</a></h2>
<p>テキストは、ほぼ予想どおりに表示されます。</p>
<pre><code class="language-markdown">Here is a line of text.&#10;&#10;This is a new line.&#10;</code></pre>
<p>次のように表示されます。</p>
<p>Here is a line of text.</p>
<p>This is a new line.</p>
<h2 id="headings"><a class="header" href="#headings">見出し</a></h2>
<p>見出しには<code>#</code>記号を使い、独立した行に記述します。<code>#</code>が多いほど、小さい見出しになります。</p>
<pre><code class="language-markdown">### A heading &#10;&#10;Some text.&#10;&#10;#### A smaller heading &#10;&#10;More text.&#10;</code></pre>
<h3 id="a-heading"><a class="header" href="#a-heading">A heading</a></h3>
<p>Some text.</p>
<h4 id="a-smaller-heading"><a class="header" href="#a-smaller-heading">A smaller heading</a></h4>
<p>More text.</p>
<h2 id="lists"><a class="header" href="#lists">リスト</a></h2>
<p>リストは、番号なしでも番号付きでも作れます。番号付きリストでは、番号が自動で順番に付けられます。</p>
<pre><code class="language-markdown">* milk&#10;* eggs&#10;* butter&#10;&#10;1. carrots&#10;1. celery&#10;1. radishes&#10;</code></pre>
<ul>
<li>milk</li>
<li>eggs</li>
<li>butter</li>
</ul>
<ol>
<li>carrots</li>
<li>celery</li>
<li>radishes</li>
</ol>
<h2 id="links"><a class="header" href="#links">リンク</a></h2>
<p>URLやローカルファイルへのリンクは簡単に作れます。</p>
<pre><code class="language-markdown">Use &#91;mdBook&#93;(https://github.com/rust-lang/mdBook). &#10;&#10;Read about &#91;mdBook&#93;(mdbook.md).&#10;&#10;And now &#91;an mdBook link&#93; that is not inline, unlike the above.&#10;&#10;A bare url: &#x3C;https://www.rust-lang.org>.&#10;&#10;&#91;an mdBook link&#93;: https://github.com/rust-lang/mdBook&#10;</code></pre>
<p>Use <a href="https://github.com/rust-lang/mdBook">mdBook</a>.</p>
<p>Read about <a href="/docs/mdbook/v0-5-4/ja/01-guide/22-format-mdbook/">mdBook</a>.</p>
<p>And now <a href="https://github.com/rust-lang/mdBook">an mdBook link</a> that is not inline, unlike the above.</p>
<p>A bare url: <a href="https://www.rust-lang.org">https://www.rust-lang.org</a>.</p>
<hr>
<p><code>.md</code>で終わる相対リンクは、拡張子<code>.html</code>に変換されます。できるだけ<code>.md</code>へのリンクを使うことを推奨します。GitHubやGitLabなど、Markdownを自動表示するサービスで、mdBook以外からMarkdownファイルを読むときにも便利です。</p>
<p><code>README.md</code>へのリンクは、<code>index.html</code>に変換されます。GitHubなどのサービスはREADMEを自動表示しますが、ウェブサーバーは通常、ルートのファイル名として<code>index.html</code>を期待するためです。</p>
<p><code>#</code>フラグメントで、個々の見出しにリンクできます。たとえば、<code>mdbook.md#text-and-paragraphs</code>は、上にある<a href="#text-and-paragraphs">テキストと段落</a>の節を指します。IDは、見出しを小文字にしたり、空白をハイフンに置き換えたりして生成されます。見出しをクリックしてブラウザーのURLを見ると、フラグメントを確認できます。</p>
<h2 id="images"><a class="header" href="#images">画像</a></h2>
<p>画像は、上の<em>リンク</em>の節と同じように、画像へのリンクで挿入します。次のMarkdownは、このファイルと同じ階層の<code>images</code>ディレクトリにある、RustロゴのSVG画像を挿入します。</p>
<pre><code class="language-markdown">!&#91;The Rust Logo&#93;(images/rust-logo-blk.svg)&#10;</code></pre>
<p>mdBookでビルドすると、次のHTMLを生成します。</p>
<pre><code class="language-html">&#x3C;p>&#x3C;img src="images/rust-logo-blk.svg" alt="The Rust Logo" />&#x3C;/p>&#10;</code></pre>
<p>次のように画像が表示されます。</p>
<p><label class="checkbox-label"><input class="checkbox-img" type="checkbox"><img src="/docs/mdbook/source-assets/format/images/rust-logo-blk.svg" alt="The Rust Logo"><span class="img-wrapper"><img src="/docs/mdbook/source-assets/format/images/rust-logo-blk.svg" alt="The Rust Logo"></span></label></p>
<h2 id="extensions"><a class="header" href="#extensions">拡張</a></h2>
<p>mdBookには、標準のCommonMark仕様を超える拡張がいくつかあります。</p>
<h3 id="strikethrough"><a class="header" href="#strikethrough">取り消し線</a></h3>
<p>テキストの両側を、1つまたは2つのチルダで囲むと、中央を通る横線を付けて表示できます。</p>
<pre><code class="language-text">An example of ~~strikethrough text~~.&#10;</code></pre>
<p>この例は、次のように表示されます。</p>
<blockquote>
<p>An example of <del>strikethrough text</del>.</p>
</blockquote>
<p><a href="https://github.github.com/gfm/#strikethrough-extension-">GitHubの取り消し線拡張</a>に従います。</p>
<h3 id="footnotes"><a class="header" href="#footnotes">脚注</a></h3>
<p>脚注は、本文中に小さな番号付きのリンクを生成します。クリックすると、項目の末尾にある脚注本文へ移動します。脚注ラベルはリンク参照に似ていますが、先頭にキャレットを付けます。脚注本文はリンク参照の定義のように、ラベルの後へ書きます。例を示します。</p>
<pre><code class="language-text">This is an example of a footnote&#91;^note&#93;.&#10;&#10;&#91;^note&#93;: This text is the contents of the footnote, which will be rendered&#10;    towards the bottom.&#10;</code></pre>
<p>この例は、次のように表示されます。</p>
<blockquote>
<p>This is an example of a footnote<sup class="footnote-reference" id="fr-note-1"><a href="#footnote-note">1</a></sup>.</p>
</blockquote>
<p>脚注は、記述された順序に従って自動で番号が付きます。</p>
<h3 id="tables"><a class="header" href="#tables">表</a></h3>
<p>パイプとハイフンで表の行と列を描くと、表を記述できます。対応する形のHTML表に変換されます。例を示します。</p>
<pre><code class="language-text">| Header1 | Header2 |&#10;|---------|---------|&#10;| abc     | def     |&#10;</code></pre>
<p>この例は、次のような表になります。</p>
<div class="table-wrapper">
<table>
<thead>
<tr><th>Header1</th><th>Header2</th></tr>
</thead>
<tbody>
<tr><td>abc</td><td>def</td></tr>
</tbody>
</table>
</div>
<p>対応する正確な構文については、<a href="https://github.github.com/gfm/#tables-extension-">GitHubの表拡張</a>の仕様を参照してください。</p>
<h3 id="task-lists"><a class="header" href="#task-lists">タスクリスト</a></h3>
<p>タスクリストは、完了した項目を示すチェックリストとして使えます。例を示します。</p>
<pre><code class="language-md">- &#91;x&#93; Complete task&#10;- &#91; &#93; Incomplete task&#10;</code></pre>
<p>次のように表示されます。</p>
<blockquote>
<ul>
<li><input disabled type="checkbox" checked> Complete task</li>
<li><input disabled type="checkbox"> Incomplete task</li>
</ul>
</blockquote>
<p>詳しくは、<a href="https://github.github.com/gfm/#task-list-items-extension-">タスクリスト拡張</a>の仕様を参照してください。</p>
<h3 id="smart-punctuation"><a class="header" href="#smart-punctuation">句読点の自動変換</a></h3>
<p>一部のASCII句読点の並びは、自動で装飾的なUnicode文字へ変換されます。</p>
<div class="table-wrapper">
<table>
<thead>
<tr><th>ASCIIの並び</th><th>Unicode</th></tr>
</thead>
<tbody>
<tr><td><code>--</code></td><td>–</td></tr>
<tr><td><code>---</code></td><td>—</td></tr>
<tr><td><code>...</code></td><td>…</td></tr>
<tr><td><code>"</code></td><td>“ または ”, 文脈に応じて</td></tr>
<tr><td><code>'</code></td><td>‘ または ’, 文脈に応じて</td></tr>
</tbody>
</table>
</div>
<p>これらのUnicode文字を手で入力する必要はありません。</p>
<p>この機能は既定で有効です。無効にするには、<a href="/docs/mdbook/v0-5-4/ja/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.smart-punctuation</code></a>設定を参照してください。</p>
<h3 id="heading-attributes"><a class="header" href="#heading-attributes">見出し属性</a></h3>
<p>見出しには、独自のHTML IDとクラスを指定できます。見出しの文字列を変更しても同じIDを維持でき、複数のクラスを付けることもできます。</p>
<p>例：</p>
<pre><code class="language-md"># Example heading { #first .class1 .class2 }&#10;</code></pre>
<p>内容が<code>Example heading</code>、IDが<code>first</code>、クラスが<code>class1</code>と<code>class2</code>である、レベル1の見出しになります。属性は空白で区切る必要があります。</p>
<p>詳しくは、<a href="https://github.com/raphlinus/pulldown-cmark/blob/master/pulldown-cmark/specs/heading_attrs.txt">見出し属性の仕様</a>を参照してください。</p>
<h3 id="definition-lists"><a class="header" href="#definition-lists">定義リスト</a></h3>
<p>定義リストは、用語集の項目などに使えます。用語を独立した行に書き、その後へ1つ以上の定義を続けます。各定義は、0〜2個の空白の後に<code>:</code>を置いて始める必要があります。</p>
<p>例：</p>
<pre><code class="language-md">term A&#10;  : This is a definition of term A. Text&#10;    can span multiple lines.&#10;&#10;term B&#10;  : This is a definition of term B.&#10;  : This has more than one definition.&#10;</code></pre>
<p>次のように表示されます。</p>
<dl>
<dt id="term-a"><a class="header" href="#term-a">term A</a></dt>
<dd>This is a definition of term A. Text
can span multiple lines.</dd>
<dt id="term-b"><a class="header" href="#term-b">term B</a></dt>
<dd>This is a definition of term B.</dd>
<dd>This has more than one definition.</dd>
</dl>
<p>用語は見出しと同様にクリックでき、ブラウザーのURLがその用語を直接指すようになります。</p>
<p>構文の詳細は、<a href="https://github.com/pulldown-cmark/pulldown-cmark/blob/HEAD/pulldown-cmark/specs/definition_lists.txt">定義リストの仕様</a>を参照してください。用語集の書き方については、<a href="https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Glossaries#General_guidelines_for_writing_glossaries">Wikipediaの用語集ガイドライン</a>も参考になります。</p>
<p>この機能は既定で有効です。無効にするには、<a href="/docs/mdbook/v0-5-4/ja/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.definition-lists</code></a>設定を参照してください。</p>
<h3 id="admonitions"><a class="header" href="#admonitions">注意書き</a></h3>
<p>注意書きは、重要な情報を強調するための、特別な説明枠や通知ブロックです。引用ブロックとして書き、最初の行に専用のタグを置きます。</p>
<pre><code class="language-md">> &#91;!NOTE&#93;&#10;> General information or additional context.&#10;&#10;> &#91;!TIP&#93;&#10;> A helpful suggestion or best practice.&#10;&#10;> &#91;!IMPORTANT&#93;&#10;> Key information that shouldn't be missed.&#10;&#10;> &#91;!WARNING&#93;&#10;> Critical information that highlights a potential risk.&#10;&#10;> &#91;!CAUTION&#93;&#10;> Information about potential issues that require caution.&#10;</code></pre>
<p>次のように表示されます。</p>
<blockquote class="blockquote-tag blockquote-tag-note">
<p class="blockquote-tag-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.5 7.75A.75.75 0 0 1 7.25 7h1a.75.75 0 0 1 .75.75v2.75h.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5h.25v-2h-.25a.75.75 0 0 1-.75-.75ZM8 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Note</p>
<p>General information or additional context.</p>
</blockquote>
<blockquote class="blockquote-tag blockquote-tag-tip">
<p class="blockquote-tag-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg>Tip</p>
<p>A helpful suggestion or best practice.</p>
</blockquote>
<blockquote class="blockquote-tag blockquote-tag-important">
<p class="blockquote-tag-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v9.5A1.75 1.75 0 0 1 14.25 13H8.06l-2.573 2.573A1.458 1.458 0 0 1 3 14.543V13H1.75A1.75 1.75 0 0 1 0 11.25Zm1.75-.25a.25.25 0 0 0-.25.25v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25Zm7 2.25v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Important</p>
<p>Key information that shouldn’t be missed.</p>
</blockquote>
<blockquote class="blockquote-tag blockquote-tag-warning">
<p class="blockquote-tag-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>Warning</p>
<p>Critical information that highlights a potential risk.</p>
</blockquote>
<blockquote class="blockquote-tag blockquote-tag-caution">
<p class="blockquote-tag-title"><svg viewBox="0 0 16 16" width="18" height="18"><path d="M4.47.22A.749.749 0 0 1 5 0h6c.199 0 .389.079.53.22l4.25 4.25c.141.14.22.331.22.53v6a.749.749 0 0 1-.22.53l-4.25 4.25A.749.749 0 0 1 11 16H5a.749.749 0 0 1-.53-.22L.22 11.53A.749.749 0 0 1 0 11V5c0-.199.079-.389.22-.53Zm.84 1.28L1.5 5.31v5.38l3.81 3.81h5.38l3.81-3.81V5.31L10.69 1.5ZM8 4a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"></path></svg>Caution</p>
<p>Information about potential issues that require caution.</p>
</blockquote>
<p>この機能は既定で有効です。無効にするには、<a href="/docs/mdbook/v0-5-4/ja/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.admonitions</code></a>設定を参照してください。</p>
<h2 id="zoom-in"><a class="header" href="#zoom-in">画像の拡大</a></h2>
<p>章の内容にあるすべての画像には、拡大機能があります。クリックすると大きくなり、再度クリックすると元に戻ります。キーボードで画像にフォーカスを移し、Spaceキーで拡大・縮小することもできます。</p>
<hr>
<ol class="footnote-definition">
<li id="footnote-note">
<p>This text is the contents of the footnote, which will be rendered
towards the bottom. <a href="#fr-note-1">↩</a></p>
</li>
</ol>
</div>
