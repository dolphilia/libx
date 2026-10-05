---
title: "分割・結合・エラー処理"
documentId: "sds:01-guide/05-guide.md"
order: 5
licenseSource: "sds-fixed"
documentContext: [{"kind": "source", "html": "<p>SDS 2.0.0; fixed commit f74b9b785b63c6d8ea312d7e7864df5267149c85. Unofficial Libx static edition. The complete README guide is available as8 English and unofficial Japanese units; API comments and headers remain original English, untranslated and outside the full meaning review scope. <a href=\"/docs/sds/notices/LICENSE.txt\">Original README BSD2 licence</a>; code/header BSD3 notices retained separately.</p><p>版メニューの日付は固定コミットのUTC日（2015年7月25日）で、リリース告知日ではありません。原READMEの位置参照は分割前の単一ガイドを指します。<a href=\"/docs/sds/v2-0-0/en/02-reference/01-api-comments/\">英語APIコメント</a>と<a href=\"/docs/sds/v2-0-0/en/02-reference/02-public-header/\">公開ヘッダー原文</a>を参照できます。</p><p>本文は固定版の原文と非公式日本語訳です。原著の記述・例の不備は注記と原典で補い、現在の技術的正しさや例の実行結果を保証しません。コード内コメントは原文を保持しています。<a href=\"/docs/sds/notices/sds.c-notice.txt\">sds.c原通知</a>、<a href=\"/docs/sds/notices/sds.h.txt\">sds.h原通知</a>、<a href=\"/docs/sds/notices/sdsalloc.h.txt\">sdsalloc.h原通知</a>を参照してください。</p>"}, {"kind": "editorial", "html": "<h1 id=\"sds-200\">SDS 2.0.0 原文に関する編集注記</h1>\n<p>Libxの運用方針に基づく固定原資料の編集注記です。原文・コード例は保持しており、ソフトウェアのコード例は実行検証していません。</p>\n<ul>\n<li><strong>内部構造</strong>: READMEのInternalsにある<code>struct sdshdr { int len; int free; char buf[]; }</code>は、固定版のヘッダーで宣言された<code>sdshdr5/8/16/32/64</code>とは異なります。固定版の構造体、flags、len、allocについては<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L42-L75\">固定sds.hの42–75行</a>の原典付録を参照してください。READMEの構造図と説明は原文として保持します。</li>\n<li><strong>結合API</strong>: READMEの<code>sdsjoin</code>宣言と例は4引数です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L250-L251\">固定sds.hの250–251行</a>では<code>sdsjoin</code>は3引数、<code>sdsjoinsds</code>は4引数です。二つのAPIを区別してください。</li>\n<li><strong>トリミング</strong>: READMEは<code>sdstrim</code>を<code>void</code>として掲載していますが、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L237\">固定宣言237行</a>は<code>sds</code>戻り値です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L668-L695\">固定実装668–695行</a>は再確保せず受け取った<code>s</code>を返します。この関数の原コメントには参照置換の説明があり、入力例<code>HelloWorld</code>に対して出力<code>Hello World</code>と記されています。これらも原文のまま区別して掲載します。</li>\n<li><strong>分割APIコメント</strong>: <a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L778-L806\">固定sds.cの778–806行</a>の<code>sdssplitlen</code>コメントは空文字列の場合もNULLと説明しますが、実装はtokensの割り当てに成功した空入力なら<code>*count = 0</code>でtokensを返します。またコメントにある<code>sdssplit()</code>は固定公開ヘッダーに宣言されていません。<code>sdssplitlen()</code>と同じ公開APIが存在すると推測しないでください。</li>\n<li><strong>組み込みと割当設定</strong>: READMEは<code>sds.c</code>と<code>sds.h</code>のコピーを案内しています。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L38\">固定sds.cの38行</a>は<code>sdsalloc.h</code>をインクルードしており、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sdsalloc.h\">そのヘッダー全体</a>を原典付録に含めます。</li>\n<li><strong>例の静的な不備</strong>: 固定READMEには<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L305\">305行の引用符不一致</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L416-L429\">416–429行のprintf引数欠落</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L542-L548\">542–548行のs1宣言とsの使用の混在</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L812-L814\">812–814行のsize_t値に対する%d指定</a>があります。コード例は原文を保持し、そのまま実行できる検証済みプログラムとは扱いません。</li>\n<li><strong>条件の区別</strong>: READMEは原LICENSEのBSD 2-Clauseを明示参照します。一方、採録する<code>sds.c</code>コメント、<code>sds.h</code>、<code>sdsalloc.h</code>には個別のBSD 3-Clause通知があります。各原通知を全文保持し、Redisの名称や貢献者名による推薦・宣伝についての追加条項も省略しません。READMEの条件で個別条件を上書きしません。</li>\n</ul>\n<p>全注釈は固定コミット<code>f74b9b785b63c6d8ea312d7e7864df5267149c85</code>の原文との相違を示すものです。現在のmaster、未実行のソフトウェア挙動、存在未確認のAPIへ一般化しません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/sds/source/v2-0-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定版9ファイル、英語12ページ・日本語8章の編集原稿、再生成入力、原通知と再構築手順を含みます。各ファイルの原条件を参照してください。</p>"}]
---
<div class="sds-document">
<h2 id="tokenization">トークン化</h2>
<p>トークン化とは、長い文字列を短い文字列へ分割する処理です。ここでは、区切りとして働く別の文字列を指定して分割します。たとえば、次の文字列には、<code>|-|</code>という区切りで分けられた2つの部分文字列があります。</p>
<pre><code>foo|-|bar|-|zap&#10;</code></pre>
<p>1文字からなる、より一般的な区切りはコンマです。</p>
<pre><code>foo,bar,zap&#10;</code></pre>
<p>多くのプログラムでは、1行を処理して、その構成要素である部分文字列を取り出すと便利です。そのため、SDSには、文字列と区切りを渡すとSDS文字列の配列を返す関数があります。</p>
<pre><code class="language-c">sds *sdssplitlen(const char *s, int len, const char *sep, int seplen, int *count);&#10;void sdsfreesplitres(sds *tokens, int count);&#10;</code></pre>
<p>通常どおり、この関数はSDS文字列と通常のC文字列の両方を扱えます。最初の2引数<code>s</code>と<code>len</code>はトークン化する文字列を指定し、次の2引数<code>sep</code>と<code>seplen</code>はトークン化に使う区切りを指定します。最後の引数<code>count</code>は整数へのポインターで、返されたトークン（部分文字列）の数が設定されます。</p>
<p>戻り値は、ヒープ上に確保されたSDS文字列の配列です。</p>
<pre><code class="language-c">sds *tokens;&#10;int count, j;&#10;&#10;sds line = sdsnew("Hello World!");&#10;tokens = sdssplitlen(line,sdslen(line)," ",1,&amp;count);&#10;&#10;for (j = 0; j &lt; count; j++)&#10;    printf("%s\n", tokens[j]);&#10;sdsfreesplitres(tokens,count);&#10;&#10;output&gt; Hello&#10;output&gt; World!&#10;</code></pre>
<p>返される配列はヒープ上に確保され、各要素は通常のSDS文字列です。例のように<code>sdsfreesplitres</code>を呼ぶと、すべてを解放できます。また、<code>free</code>関数で配列だけを自分で解放し、個々のSDS文字列は通常どおり使ったり、解放したりしてもかまいません。</p>
<p>何らかの形で再利用した配列要素を<code>NULL</code>に設定し、<code>sdsfreesplitres</code>で残りをすべて解放する方法も有効です。</p>
<h2 id="command-line-oriented-tokenization">コマンドライン向けのトークン化</h2>
<p>区切りによる分割は便利ですが、多少複雑な文字列操作を要する典型的な作業である、プログラムの<strong>コマンドラインインターフェース</strong>の実装には、通常それだけでは足りません。</p>
<p>そのため、SDSには、利用者がキーボードで対話的に入力した引数や、ファイル、ネットワークなどから渡した引数を、トークンへ分割する追加の関数もあります。</p>
<pre><code class="language-c">sds *sdssplitargs(const char *line, int *argc);&#10;</code></pre>
<p><code>sdssplitargs</code>関数は、<code>sdssplitlen</code>と同じくSDS文字列の配列を返します。結果を解放する関数も同じ<code>sdsfreesplitres</code>です。違いは、トークン化の方法にあります。</p>
<p>たとえば、入力が次の行だった場合：</p>
<pre><code>call "Sabrina"    and "Mark Smith\n"&#10;</code></pre>
<p>関数は次のトークンを返します。</p>
<ul>
<li>"call"</li>
<li>"Sabrina"</li>
<li>"and"</li>
<li>"Mark Smith\n"</li>
</ul>
<p>基本的に、トークン同士は1つ以上の空白で区切る必要があります。また、各トークンには、<code>sdscatrepr</code>が出力できるものと同じ形式の引用表現の文字列も使えます。</p>
<h2 id="string-joining">文字列の結合</h2>
<p>トークン化の逆に、複数の文字列を1つへ結合する関数が2つあります。</p>
<pre><code class="language-c">sds sdsjoin(char **argv, int argc, char *sep, size_t seplen);&#10;sds sdsjoinsds(sds *argv, int argc, const char *sep, size_t seplen);&#10;</code></pre>
<p>両関数は、要素数<code>argc</code>の文字列配列と、区切りおよびその長さを入力として受け取ります。そして、指定したすべての文字列を、指定した区切りでつないだSDS文字列を出力します。</p>
<p><code>sdsjoin</code>と<code>sdsjoinsds</code>の違いは、前者がNUL終端されたC文字列を入力として受け取るのに対し、後者は配列内のすべての文字列がSDS文字列であることを要求する点です。このため、バイナリーデータを扱えるのは<code>sdsjoinsds</code>だけです。</p>
<pre><code class="language-c">char *tokens[3] = {"foo","bar","zap"};&#10;sds s = sdsjoin(tokens,3,"|",1);&#10;printf("%s\n", s);&#10;&#10;output&gt; foo|bar|zap&#10;</code></pre>
<h2 id="error-handling">エラー処理</h2>
<p>SDSポインターを返す関数はすべて、メモリー不足の場合に<code>NULL</code>を返す可能性もあります。基本的には、これだけを確認すれば十分です。</p>
<p>ただし、現代のCプログラムの多くは、メモリー不足になると単にプログラムを中止します。同じ方法を取りたい場合は、<code>malloc</code>など、関連するメモリー確保の呼び出しを直接ラップするとよいでしょう。</p>
</div>

