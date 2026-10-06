<div class="commonmark-original-content">
<h2 class="definition" data-source-heading="chapter" id="introduction"><span class="number">1</span>はじめに</h2><h3 class="definition" id="what-is-markdown-"><span class="number">1.1</span>Markdownとは</h3><p>Markdownは構造化された文書を書くためのプレーンテキスト形式で、電子メールやUsenetへの投稿で書式を示す慣習に基づいています。John GruberがAaron Swartzの協力を得て開発し、2004年に<a href="https://daringfireball.net/projects/markdown/syntax">構文の説明</a>と、MarkdownをHTMLに変換するPerlスクリプト（<code>Markdown.pl</code>）として公開しました。その後の10年間で、さまざまな言語による数十もの実装が開発されました。元のMarkdown構文に、脚注、表、その他の文書要素の記法を追加したものもあります。Markdown文書をHTML以外の形式で表示できるようにしたものもあります。Reddit、StackOverflow、GitHubのようなウェブサイトでは、何百万人もの人がMarkdownを使っていました。そしてMarkdownは、ウェブ以外でも、書籍、記事、スライド、手紙、講義ノートの執筆に使われるようになりました。</p><p>Markdownを、より書きやすい場合も多いほかの軽量マークアップ構文と区別するのは、読みやすさです。Gruberは次のように述べています。</p><blockquote>
<p>Markdownの書式構文における最優先の設計目標は、できるだけ読みやすくすることです。Markdownで書式を付けた文書を、タグや書式指示でマークアップされているように見せず、そのままプレーンテキストとして公開できるようにする、という考え方です。（<a href="https://daringfireball.net/projects/markdown/">https://daringfireball.net/projects/markdown/</a>）</p>
</blockquote><p>この点は、<a href="https://asciidoc.org/">AsciiDoc</a>の例と、それに相当するMarkdownの例を比較するとわかります。次はAsciiDocマニュアルにあるAsciiDocの例です。</p><pre><code>1. List item one.&#10;+&#10;List item one continued with a second paragraph followed by an&#10;Indented block.&#10;+&#10;.................&#10;$ ls *.sh&#10;$ mv *.sh ~/tmp&#10;.................&#10;+&#10;List item continued with a third paragraph.&#10;&#10;2. List item two continued with an open block.&#10;+&#10;--&#10;This paragraph is part of the preceding list item.&#10;&#10;a. This list is nested and does not require explicit item&#10;continuation.&#10;+&#10;This paragraph is part of the preceding list item.&#10;&#10;b. List item b.&#10;&#10;This paragraph belongs to item two of the outer list.&#10;--&#10;</code></pre><p>これと同じ内容をMarkdownで表すと、次のようになります。</p><pre><code>1.  List item one.&#10;&#10;    List item one continued with a second paragraph followed by an&#10;    Indented block.&#10;&#10;        $ ls *.sh&#10;        $ mv *.sh ~/tmp&#10;&#10;    List item continued with a third paragraph.&#10;&#10;2.  List item two continued with an open block.&#10;&#10;    This paragraph is part of the preceding list item.&#10;&#10;    1. This list is nested and does not require explicit item continuation.&#10;&#10;       This paragraph is part of the preceding list item.&#10;&#10;    2. List item b.&#10;&#10;    This paragraph belongs to item two of the outer list.&#10;</code></pre><p>書くことだけを考えれば、AsciiDoc版のほうが簡単だともいえます。字下げを気にする必要がないからです。しかし、Markdown版のほうがはるかに読みやすくなっています。リスト項目の入れ子が、処理後の文書だけでなく、ソースを見てもわかります。</p><h3 class="definition" id="why-is-a-spec-needed-"><span class="number">1.2</span>仕様が必要な理由</h3><p>John Gruberによる<a href="https://daringfireball.net/projects/markdown/syntax">Markdown構文の原著の説明</a>では、構文が曖昧さなく定義されていません。そこでは答えが示されていない問いの例を挙げます。</p><ol>
<li>
<p>子リストにはどれだけの字下げが必要でしょうか。説明では、続きの段落に4個のスペースで字下げする必要があるとされていますが、子リストについては十分に明示されていません。子リストにも4個のスペースが必要だと考えるのは自然ですが、<code>Markdown.pl</code>はそれを要求しません。これは「特殊な端のケース」とはいいがたく、この点で実装が異なるため、実際の文書で利用者が意外な結果に遭遇することはよくあります。（<a href="https://web.archive.org/web/20170611172104/http://article.gmane.org/gmane.text.markdown.general/1997">John Gruberのこのコメント</a>を参照してください。）</p>
</li>
<li>
<p>ブロック引用や見出しの前に空行は必要でしょうか。ほとんどの実装では必要ありません。しかし、テキストに明示的な改行を入れて行を折り返していると、予期しない結果を生んだり、解析に曖昧さが生じたりします。見出しをブロック引用の内側に入れる実装もあれば、入れない実装もある点に注意してください。（John Gruberも<a href="https://web.archive.org/web/20170611172104/http://article.gmane.org/gmane.text.markdown.general/2146">空行を必須にすることを支持する発言</a>をしています。）</p>
</li>
<li>
<p>字下げによるコードブロックの前に空行は必要でしょうか。（<code>Markdown.pl</code>は空行を要求しますが、文書にはそのことが書かれておらず、要求しない実装もあります。）</p>
<pre><code class="language-markdown">paragraph&#10;    code?&#10;</code></pre>
</li>
<li>
<p>リスト項目を<code>&lt;p&gt;</code>タグで囲むかどうかを決める正確な規則は何でしょうか。1つのリストが、一部は「loose」、一部は「tight」になれるのでしょうか。次のようなリストはどう扱うべきでしょうか。</p>
<pre><code class="language-markdown">1. one&#10;&#10;2. two&#10;3. three&#10;</code></pre>
<p>また、こちらの場合はどうでしょうか。</p>
<pre><code class="language-markdown">1.  one&#10;    - a&#10;&#10;    - b&#10;2.  two&#10;</code></pre>
<p>（関連するJohn Gruberのコメントが<a href="https://web.archive.org/web/20170611172104/http://article.gmane.org/gmane.text.markdown.general/2554">こちら</a>にあります。）</p>
</li>
<li>
<p>リストのマーカーを字下げしてもよいでしょうか。番号付きリストのマーカーを右揃えにしてもよいでしょうか。</p>
<pre><code class="language-markdown"> 8. item 1&#10; 9. item 2&#10;10. item 2a&#10;</code></pre>
</li>
<li>
<p>これは、2番目の項目に主題区切りが入った1つのリストでしょうか。それとも、主題区切りで分けられた2つのリストでしょうか。</p>
<pre><code class="language-markdown">* a&#10;* * * * *&#10;* b&#10;</code></pre>
</li>
<li>
<p>リストのマーカーが数字から箇条書き記号に変わったとき、リストは2つになるのでしょうか、それとも1つでしょうか。（Markdown構文の説明では2つになるように示されていますが、Perlスクリプトや多くのほかの実装では1つになります。）</p>
<pre><code class="language-markdown">1. fee&#10;2. fie&#10;-  foe&#10;-  fum&#10;</code></pre>
</li>
<li>
<p>インライン構造のマーカーには、どのような優先順位の規則があるでしょうか。たとえば、次の例は有効なリンクでしょうか。それともコードスパンが優先されるのでしょうか。</p>
<pre><code class="language-markdown">[a backtick (`)](/url) and [another backtick (`)](/url).&#10;</code></pre>
</li>
<li>
<p>強調と強い強調のマーカーには、どのような優先順位の規則があるでしょうか。たとえば、次の例はどのように解析すべきでしょうか。</p>
<pre><code class="language-markdown">*foo *bar* baz*&#10;</code></pre>
</li>
<li>
<p>ブロック構造とインライン構造の間には、どのような優先順位の規則があるでしょうか。たとえば、次の例はどのように解析すべきでしょうか。</p>
<pre><code class="language-markdown">- `a long code span can contain a hyphen like this&#10;  - and it can screw things up`&#10;</code></pre>
</li>
<li>
<p>リスト項目に節見出しを含めてもよいでしょうか。（<code>Markdown.pl</code>はこれを許可しませんが、ブロック引用の中に見出しを含めることは許可します。）</p>
<pre><code class="language-markdown">- # Heading&#10;</code></pre>
</li>
<li>
<p>リスト項目は空でもよいでしょうか。</p>
<pre><code class="language-markdown">* a&#10;*&#10;* b&#10;</code></pre>
</li>
<li>
<p>ブロック引用やリスト項目の中でリンク参照を定義してもよいでしょうか。</p>
<pre><code class="language-markdown">&gt; Blockquote [foo].&#10;&gt;&#10;&gt; [foo]: /url&#10;</code></pre>
</li>
<li>
<p>同じ参照に複数の定義がある場合、どの定義が優先されるでしょうか。</p>
<pre><code class="language-markdown">[foo]: /url1&#10;[foo]: /url2&#10;&#10;[foo][]&#10;</code></pre>
</li>
</ol><p>仕様がなかったため、初期の実装者は<code>Markdown.pl</code>を参照して、これらの曖昧さを解消しました。しかし、<code>Markdown.pl</code>にはかなり多くのバグがあり、多くのケースで明らかに不適切な結果を返していたため、仕様の十分な代わりにはなりませんでした。</p><p>曖昧さのない仕様が存在しないため、実装同士は大きく異なるものになりました。その結果、あるシステム、たとえばGitHubのwikiではある形で表示された文書が、別のシステム、たとえばpandocでDocBookに変換したときには違う形になることに、利用者が驚く場合がよくあります。さらに、Markdownでは何も「構文エラー」とみなされないため、そうした違いはすぐに発見されないこともよくあります。</p><h3 class="definition" id="about-this-document"><span class="number">1.3</span>この文書について</h3><p>この文書はMarkdown構文を曖昧さなく定義することを目指しています。MarkdownとHTMLを並べた多数の例があり、これらは適合性試験も兼ねることを意図しています。付属のスクリプト<code>spec_tests.py</code>を使えば、任意のMarkdownプログラムを対象に試験を実行できます。</p><pre><code>python test/spec_tests.py --spec spec.txt --program PROGRAM&#10;</code></pre><p>この文書は、Markdownをどのように抽象構文木へ解析するかを記述するものなので、HTMLの代わりに構文木の抽象表現を使うことにも意味があったでしょう。しかし、HTMLでも、ここで区別する必要のある構造を表せます。また、試験にHTMLを使えば、抽象構文木を出力するレンダラーを新たに書かずに、実装に対して試験を実行できます。</p><p>HTMLの例に現れるすべての特徴を、仕様が要求しているわけではない点に注意してください。たとえば、仕様は何がリンク先にあたるかを定めていますが、URL中の非ASCII文字をパーセント符号化することまでは要求していません。自動試験を利用する場合、実装者は仕様の例の期待結果に合うレンダラー、つまりURL中の非ASCII文字をパーセント符号化するレンダラーを用意する必要があります。しかし、仕様に適合する実装は別のレンダラーを使ってもよく、URL中の非ASCII文字をパーセント符号化しないことを選んでもかまいません。</p><p>この文書は、Markdownに対照試験用の小さな拡張を加えて書かれたテキストファイル<code>spec.txt</code>から生成されます。スクリプト<code>tools/makespec.py</code>を使うと、<code>spec.txt</code>をHTMLまたはCommonMarkに変換できます。後者はさらにほかの形式へ変換できます。</p><p>例では、<code>→</code>という文字でタブを表します。</p>
</div>

