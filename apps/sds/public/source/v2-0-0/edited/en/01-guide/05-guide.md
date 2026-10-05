---
title: "Splitting, joining and errors"
documentId: "sds:01-guide/05-guide.md"
order: 5
licenseSource: "sds-fixed"
documentContext: [{"kind": "source", "html": "<p>SDS 2.0.0; fixed commit f74b9b785b63c6d8ea312d7e7864df5267149c85. Unofficial Libx static edition. The complete README guide is available as8 English and unofficial Japanese units; API comments and headers remain original English, untranslated and outside the full meaning review scope. <a href=\"/docs/sds/notices/LICENSE.txt\">Original README BSD2 licence</a>; code/header BSD3 notices retained separately.</p><p>版メニューの日付は固定コミットのUTC日（2015年7月25日）で、リリース告知日ではありません。原READMEの位置参照は分割前の単一ガイドを指します。<a href=\"/docs/sds/v2-0-0/en/02-reference/01-api-comments/\">英語APIコメント</a>と<a href=\"/docs/sds/v2-0-0/en/02-reference/02-public-header/\">公開ヘッダー原文</a>を参照できます。</p><p>本文は固定版の原文と非公式日本語訳です。原著の記述・例の不備は注記と原典で補い、現在の技術的正しさや例の実行結果を保証しません。コード内コメントは原文を保持しています。<a href=\"/docs/sds/notices/sds.c-notice.txt\">sds.c原通知</a>、<a href=\"/docs/sds/notices/sds.h.txt\">sds.h原通知</a>、<a href=\"/docs/sds/notices/sdsalloc.h.txt\">sdsalloc.h原通知</a>を参照してください。</p>"}, {"kind": "editorial", "html": "<h1 id=\"sds-200\">SDS 2.0.0 原文に関する編集注記</h1>\n<p>Libxの運用方針に基づく固定原資料の編集注記です。原文・コード例は保持しており、ソフトウェアのコード例は実行検証していません。</p>\n<ul>\n<li><strong>内部構造</strong>: READMEのInternalsにある<code>struct sdshdr { int len; int free; char buf[]; }</code>は、固定版のヘッダーで宣言された<code>sdshdr5/8/16/32/64</code>とは異なります。固定版の構造体、flags、len、allocについては<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L42-L75\">固定sds.hの42–75行</a>の原典付録を参照してください。READMEの構造図と説明は原文として保持します。</li>\n<li><strong>結合API</strong>: READMEの<code>sdsjoin</code>宣言と例は4引数です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L250-L251\">固定sds.hの250–251行</a>では<code>sdsjoin</code>は3引数、<code>sdsjoinsds</code>は4引数です。二つのAPIを区別してください。</li>\n<li><strong>トリミング</strong>: READMEは<code>sdstrim</code>を<code>void</code>として掲載していますが、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L237\">固定宣言237行</a>は<code>sds</code>戻り値です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L668-L695\">固定実装668–695行</a>は再確保せず受け取った<code>s</code>を返します。この関数の原コメントには参照置換の説明があり、入力例<code>HelloWorld</code>に対して出力<code>Hello World</code>と記されています。これらも原文のまま区別して掲載します。</li>\n<li><strong>分割APIコメント</strong>: <a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L778-L806\">固定sds.cの778–806行</a>の<code>sdssplitlen</code>コメントは空文字列の場合もNULLと説明しますが、実装はtokensの割り当てに成功した空入力なら<code>*count = 0</code>でtokensを返します。またコメントにある<code>sdssplit()</code>は固定公開ヘッダーに宣言されていません。<code>sdssplitlen()</code>と同じ公開APIが存在すると推測しないでください。</li>\n<li><strong>組み込みと割当設定</strong>: READMEは<code>sds.c</code>と<code>sds.h</code>のコピーを案内しています。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L38\">固定sds.cの38行</a>は<code>sdsalloc.h</code>をインクルードしており、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sdsalloc.h\">そのヘッダー全体</a>を原典付録に含めます。</li>\n<li><strong>例の静的な不備</strong>: 固定READMEには<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L305\">305行の引用符不一致</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L416-L429\">416–429行のprintf引数欠落</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L542-L548\">542–548行のs1宣言とsの使用の混在</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L812-L814\">812–814行のsize_t値に対する%d指定</a>があります。コード例は原文を保持し、そのまま実行できる検証済みプログラムとは扱いません。</li>\n<li><strong>条件の区別</strong>: READMEは原LICENSEのBSD 2-Clauseを明示参照します。一方、採録する<code>sds.c</code>コメント、<code>sds.h</code>、<code>sdsalloc.h</code>には個別のBSD 3-Clause通知があります。各原通知を全文保持し、Redisの名称や貢献者名による推薦・宣伝についての追加条項も省略しません。READMEの条件で個別条件を上書きしません。</li>\n</ul>\n<p>全注釈は固定コミット<code>f74b9b785b63c6d8ea312d7e7864df5267149c85</code>の原文との相違を示すものです。現在のmaster、未実行のソフトウェア挙動、存在未確認のAPIへ一般化しません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/sds/source/v2-0-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定版9ファイル、英語12ページ・日本語8章の編集原稿、再生成入力、原通知と再構築手順を含みます。各ファイルの原条件を参照してください。</p>"}]
---
<div class="sds-document">
<h2 id="tokenization">Tokenization</h2>
<p>Tokenization is the process of splitting a larger string into smaller strings.
In this specific case, the split is performed specifying another string that
acts as separator. For example in the following string there are two substrings
that are separated by the <code>|-|</code> separator:</p>
<pre><code>foo|-|bar|-|zap&#10;</code></pre>
<p>A more common separator that consists of a single character is the comma:</p>
<pre><code>foo,bar,zap&#10;</code></pre>
<p>In many progrems it is useful to process a line in order to obtain the sub
strings it is composed of, so SDS provides a function that returns an
array of SDS strings given a string and a separator.</p>
<pre><code class="language-c">sds *sdssplitlen(const char *s, int len, const char *sep, int seplen, int *count);&#10;void sdsfreesplitres(sds *tokens, int count);&#10;</code></pre>
<p>As usually the function can work with both SDS strings or normal C strings.
The first two arguments <code>s</code> and <code>len</code> specify the string to tokenize, and the
other two arguments <code>sep</code> and <code>seplen</code> the separator to use during the
tokenization. The final argument <code>count</code> is a pointer to an integer that will
be set to the number of tokens (sub strings) returned.</p>
<p>The return value is a heap allocated array of SDS strings.</p>
<pre><code class="language-c">sds *tokens;&#10;int count, j;&#10;&#10;sds line = sdsnew(&quot;Hello World!&quot;);&#10;tokens = sdssplitlen(line,sdslen(line),&quot; &quot;,1,&amp;count);&#10;&#10;for (j = 0; j &lt; count; j++)&#10;    printf(&quot;%s\n&quot;, tokens[j]);&#10;sdsfreesplitres(tokens,count);&#10;&#10;output&gt; Hello&#10;output&gt; World!&#10;</code></pre>
<p>The returned array is heap allocated, and the single elements of the array
are normal SDS strings. You can free everything calling <code>sdsfreesplitres</code>
as in the example. Alternativey you are free to release the array yourself
using the <code>free</code> function and use and/or free the individual SDS strings
as usually.</p>
<p>A valid approach is to set the array elements you reused in some way to
<code>NULL</code>, and use <code>sdsfreesplitres</code> to free all the rest.</p>
<h2 id="command-line-oriented-tokenization">Command line oriented tokenization</h2>
<p>Splitting by a separator is a useful operation, but usually it is not enough
to perform one of the most common tasks involving some non trivial string
manipulation, that is, implementing a <strong>Command Line Interface</strong> for a program.</p>
<p>This is why SDS also provides an additional function that allows you to split
arguments provided by the user via the keyboard in an interactive manner, or
via a file, network, or any other mean, into tokens.</p>
<pre><code class="language-c">sds *sdssplitargs(const char *line, int *argc);&#10;</code></pre>
<p>The <code>sdssplitargs</code> function returns an array of SDS strings exactly like
<code>sdssplitlen</code>. The function to free the result is also identical, and is
<code>sdsfreesplitres</code>. The difference is in the way the tokenization is performed.</p>
<p>For example if the input is the following line:</p>
<pre><code>call &quot;Sabrina&quot;    and &quot;Mark Smith\n&quot;&#10;</code></pre>
<p>The function will return the following tokens:</p>
<ul>
<li>"call"</li>
<li>"Sabrina"</li>
<li>"and"</li>
<li>"Mark Smith\n"</li>
</ul>
<p>Basically different tokens need to be separated by one or more spaces, and
every single token can also be a quoted string in the same format that
<code>sdscatrepr</code> is able to emit.</p>
<h2 id="string-joining">String joining</h2>
<p>There are two functions doing the reverse of tokenization by joining strings
into a single one.</p>
<pre><code class="language-c">sds sdsjoin(char **argv, int argc, char *sep, size_t seplen);&#10;sds sdsjoinsds(sds *argv, int argc, const char *sep, size_t seplen);&#10;</code></pre>
<p>The two functions take as input an array of strings of length <code>argc</code> and
a separator and its length, and produce as output an SDS string consisting
of all the specified strings separated by the specified separator.</p>
<p>The difference between <code>sdsjoin</code> and <code>sdsjoinsds</code> is that the former accept
C null terminated strings as input while the latter requires all the strings
in the array to be SDS strings. However because of this only <code>sdsjoinsds</code> is
able to deal with binary data.</p>
<pre><code class="language-c">char *tokens[3] = {&quot;foo&quot;,&quot;bar&quot;,&quot;zap&quot;};&#10;sds s = sdsjoin(tokens,3,&quot;|&quot;,1);&#10;printf(&quot;%s\n&quot;, s);&#10;&#10;output&gt; foo|bar|zap&#10;</code></pre>
<h2 id="error-handling">Error handling</h2>
<p>All the SDS functions that return an SDS pointer may also return <code>NULL</code> on
out of memory, this is basically the only check you need to perform.</p>
<p>However many modern C programs handle out of memory simply aborting the program
so you may want to do this as well by wrapping <code>malloc</code> and other related
memory allocation calls directly.</p>
</div>
