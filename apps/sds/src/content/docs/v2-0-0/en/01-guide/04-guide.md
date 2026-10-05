---
title: "Trimming, ranges, copying and quoting"
documentId: "sds:01-guide/04-guide.md"
order: 4
licenseSource: "sds-fixed"
documentContext: [{"kind": "source", "html": "<p>SDS 2.0.0; fixed commit f74b9b785b63c6d8ea312d7e7864df5267149c85. Unofficial Libx static edition. The complete README guide is available as8 English and unofficial Japanese units; API comments and headers remain original English, untranslated and outside the full meaning review scope. <a href=\"/docs/sds/notices/LICENSE.txt\">Original README BSD2 licence</a>; code/header BSD3 notices retained separately.</p><p>版メニューの日付は固定コミットのUTC日（2015年7月25日）で、リリース告知日ではありません。原READMEの位置参照は分割前の単一ガイドを指します。<a href=\"/docs/sds/v2-0-0/en/02-reference/01-api-comments/\">英語APIコメント</a>と<a href=\"/docs/sds/v2-0-0/en/02-reference/02-public-header/\">公開ヘッダー原文</a>を参照できます。</p><p>本文は固定版の原文と非公式日本語訳です。原著の記述・例の不備は注記と原典で補い、現在の技術的正しさや例の実行結果を保証しません。コード内コメントは原文を保持しています。<a href=\"/docs/sds/notices/sds.c-notice.txt\">sds.c原通知</a>、<a href=\"/docs/sds/notices/sds.h.txt\">sds.h原通知</a>、<a href=\"/docs/sds/notices/sdsalloc.h.txt\">sdsalloc.h原通知</a>を参照してください。</p>"}, {"kind": "editorial", "html": "<h1 id=\"sds-200\">SDS 2.0.0 原文に関する編集注記</h1>\n<p>Libxの運用方針に基づく固定原資料の編集注記です。原文・コード例は保持しており、ソフトウェアのコード例は実行検証していません。</p>\n<ul>\n<li><strong>内部構造</strong>: READMEのInternalsにある<code>struct sdshdr { int len; int free; char buf[]; }</code>は、固定版のヘッダーで宣言された<code>sdshdr5/8/16/32/64</code>とは異なります。固定版の構造体、flags、len、allocについては<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L42-L75\">固定sds.hの42–75行</a>の原典付録を参照してください。READMEの構造図と説明は原文として保持します。</li>\n<li><strong>結合API</strong>: READMEの<code>sdsjoin</code>宣言と例は4引数です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L250-L251\">固定sds.hの250–251行</a>では<code>sdsjoin</code>は3引数、<code>sdsjoinsds</code>は4引数です。二つのAPIを区別してください。</li>\n<li><strong>トリミング</strong>: READMEは<code>sdstrim</code>を<code>void</code>として掲載していますが、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L237\">固定宣言237行</a>は<code>sds</code>戻り値です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L668-L695\">固定実装668–695行</a>は再確保せず受け取った<code>s</code>を返します。この関数の原コメントには参照置換の説明があり、入力例<code>HelloWorld</code>に対して出力<code>Hello World</code>と記されています。これらも原文のまま区別して掲載します。</li>\n<li><strong>分割APIコメント</strong>: <a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L778-L806\">固定sds.cの778–806行</a>の<code>sdssplitlen</code>コメントは空文字列の場合もNULLと説明しますが、実装はtokensの割り当てに成功した空入力なら<code>*count = 0</code>でtokensを返します。またコメントにある<code>sdssplit()</code>は固定公開ヘッダーに宣言されていません。<code>sdssplitlen()</code>と同じ公開APIが存在すると推測しないでください。</li>\n<li><strong>組み込みと割当設定</strong>: READMEは<code>sds.c</code>と<code>sds.h</code>のコピーを案内しています。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L38\">固定sds.cの38行</a>は<code>sdsalloc.h</code>をインクルードしており、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sdsalloc.h\">そのヘッダー全体</a>を原典付録に含めます。</li>\n<li><strong>例の静的な不備</strong>: 固定READMEには<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L305\">305行の引用符不一致</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L416-L429\">416–429行のprintf引数欠落</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L542-L548\">542–548行のs1宣言とsの使用の混在</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L812-L814\">812–814行のsize_t値に対する%d指定</a>があります。コード例は原文を保持し、そのまま実行できる検証済みプログラムとは扱いません。</li>\n<li><strong>条件の区別</strong>: READMEは原LICENSEのBSD 2-Clauseを明示参照します。一方、採録する<code>sds.c</code>コメント、<code>sds.h</code>、<code>sdsalloc.h</code>には個別のBSD 3-Clause通知があります。各原通知を全文保持し、Redisの名称や貢献者名による推薦・宣伝についての追加条項も省略しません。READMEの条件で個別条件を上書きしません。</li>\n</ul>\n<p>全注釈は固定コミット<code>f74b9b785b63c6d8ea312d7e7864df5267149c85</code>の原文との相違を示すものです。現在のmaster、未実行のソフトウェア挙動、存在未確認のAPIへ一般化しません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/sds/source/v2-0-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定版9ファイル、英語12ページ・日本語8章の編集原稿、再生成入力、原通知と再構築手順を含みます。各ファイルの原条件を参照してください。</p>"}]
---
<div class="sds-document">
<h2 id="trimming-strings-and-getting-ranges">Trimming strings and getting ranges</h2>
<p>String trimming is a common operation where a set of characters are
removed from the left and the right of the string. Another useful operation
regarding strings is the ability to just take a range out of a larger
string.</p>
<pre><code class="language-c">void sdstrim(sds s, const char *cset);&#10;void sdsrange(sds s, int start, int end);&#10;</code></pre>
<p>SDS provides both the operations with the <code>sdstrim</code> and <code>sdsrange</code> functions.
However note that both functions work differently than most functions modifying
SDS strings since the return value is null: basically those functions always
destructively modify the passed SDS string, never allocating a new one, because
both trimming and ranges will never need more room: the operations can only
remove characters from the original strings.</p>
<p>Because of this behavior, both functions are fast and don't involve reallocation.</p>
<p>This is an example of string trimming where newlines and spaces are removed
from an SDS strings:</p>
<pre><code class="language-c">sds s = sdsnew(&quot;         my string\n\n  &quot;);&#10;sdstrim(s,&quot; \n&quot;);&#10;printf(&quot;-%s-\n&quot;,s);&#10;&#10;output&gt; -my string-&#10;</code></pre>
<p>Basically <code>sdstrim</code> takes the SDS string to trim as first argument, and a
null terminated set of characters to remove from left and right of the string.
The characters are removed as long as they are not interrupted by a character
that is not in the list of characters to trim: this is why the space between
<code>"my"</code> and <code>"string"</code> was preserved in the above example.</p>
<p>Taking ranges is similar, but instead to take a set of characters, it takes
to indexes, representing the start and the end as specified by zero-based
indexes inside the string, to obtain the range that will be retained.</p>
<pre><code class="language-c">sds s = sdsnew(&quot;Hello World!&quot;);&#10;sdsrange(s,1,4);&#10;printf(&quot;-%s-\n&quot;);&#10;&#10;output&gt; -ello-&#10;</code></pre>
<p>Indexes can be negative to specify a position starting from the end of the
string, so that <code>-1</code> means the last character, <code>-2</code> the penultimate, and so forth:</p>
<pre><code class="language-c">sds s = sdsnew(&quot;Hello World!&quot;);&#10;sdsrange(s,6,-1);&#10;printf(&quot;-%s-\n&quot;);&#10;sdsrange(s,0,-2);&#10;printf(&quot;-%s-\n&quot;);&#10;&#10;output&gt; -World!-&#10;output&gt; -World-&#10;</code></pre>
<p><code>sdsrange</code> is very useful when implementing networking servers processing
a protocol or sending messages. For example the following code is used
implementing the write handler of the Redis Cluster message bus between
nodes:</p>
<pre><code class="language-c">void clusterWriteHandler(..., int fd, void *privdata, ...) {&#10;    clusterLink *link = (clusterLink*) privdata;&#10;    ssize_t nwritten = write(fd, link-&gt;sndbuf, sdslen(link-&gt;sndbuf));&#10;    if (nwritten &lt;= 0) {&#10;        /* Error handling... */&#10;    }&#10;    sdsrange(link-&gt;sndbuf,nwritten,-1);&#10;    ... more code here ...&#10;}&#10;</code></pre>
<p>Every time the socket of the node we want to send the message to is writable
we attempt to write as much bytes as possible, and we use <code>sdsrange</code> in order
to remove from the buffer what was already sent.</p>
<p>The function to queue new messages to send to some node in the cluster will
simply use <code>sdscatlen</code> in order to put more data in the send buffer.</p>
<p>Note that the Redis Cluster bus implements a binary protocol, but since SDS
is binary safe this is not a problem, so the goal of SDS is not just to provide
an high level string API for the C programmer but also dynamically allocated
buffers that are easy to manage.</p>
<h2 id="string-copying">String copying</h2>
<p>The most dangerous and infamus function of the standard C library is probably
<code>strcpy</code>, so perhaps it is funny how in the context of better designed dynamic
string libraries the concept of copying strings is almost irrelevant. Usually
what you do is to create strings with the content you want, or concatenating
more content as needed.</p>
<p>However SDS features a string copy function that is useful in performance
critical code sections, however I guess its practical usefulness is limited
as the function never managed to get called in the context of the 50k
lines of code composing the Redis code base.</p>
<pre><code class="language-c">sds sdscpylen(sds s, const char *t, size_t len);&#10;sds sdscpy(sds s, const char *t);&#10;</code></pre>
<p>The string copy function of SDS is called <code>sdscpylen</code> and works like that:</p>
<pre><code class="language-c">s = sdsnew(&quot;Hello World!&quot;);&#10;s = sdscpylen(s,&quot;Hello Superman!&quot;,15);&#10;</code></pre>
<p>As you can see the function receives as input the SDS string <code>s</code>, but also
returns an SDS string. This is common to many SDS functions that modify the
string: this way the returned SDS string may be the original one modified
or a newly allocated one (for example if there was not enough room in the
old SDS string).</p>
<p>The <code>sdscpylen</code> will simply replace what was in the old SDS string with the
new data you pass using the pointer and length argument. There is a similar
function called <code>sdscpy</code> that does not need a length but expects a null
terminated string instead.</p>
<p>You may wonder why it makes sense to have a string copy function in the
SDS library, since you can simply create a new SDS string from scratch
with the new value instead of copying the value in an existing SDS string.
The reason is efficiency: <code>sdsnewlen</code> will always allocate a new string
while <code>sdscpylen</code> will try to reuse the existing string if there is enough
room to old the new content specified by the user, and will allocate a new
one only if needed.</p>
<h2 id="quoting-strings">Quoting strings</h2>
<p>In order to provide consistent output to the program user, or for debugging
purposes, it is often important to turn a string that may contain binary
data or special characters into a quoted string. Here for quoted string
we mean the common format for String literals in programming source code.
However today this format is also part of the well known serialization formats
like JSON and CSV, so it definitely escaped the simple gaol of representing
literals strings in the source code of programs.</p>
<p>An example of quoted string literal is the following:</p>
<pre><code class="language-c">&quot;\x00Hello World\n&quot;&#10;</code></pre>
<p>The first byte is a zero byte while the last byte is a newline, so there are
two non alphanumerical characters inside the string.</p>
<p>SDS uses a concatenation function for this goal, that concatenates to an
existing string the quoted string representation of the input string.</p>
<pre><code class="language-c">sds sdscatrepr(sds s, const char *p, size_t len);&#10;</code></pre>
<p>The <code>scscatrepr</code> (where <code>repr</code> means <em>representation</em>) follows the usualy
SDS string function rules accepting a char pointer and a length, so you can
use it with SDS strings, normal C strings by using strlen() as <code>len</code> argument,
or binary data. The following is an example usage:</p>
<pre><code class="language-c">sds s1 = sdsnew(&quot;abcd&quot;);&#10;sds s2 = sdsempty();&#10;s[1] = 1;&#10;s[2] = 2;&#10;s[3] = '\n';&#10;s2 = sdscatrepr(s2,s1,sdslen(s1));&#10;printf(&quot;%s\n&quot;, s2);&#10;&#10;output&gt; &quot;a\x01\x02\n&quot;&#10;</code></pre>
<p>This is the rules <code>sdscatrepr</code> uses for conversion:</p>
<ul>
<li><code>\</code> and <code>"</code> are quoted with a backslash.</li>
<li>It quotes special characters <code>'\n'</code>, <code>'\r'</code>, <code>'\t'</code>, <code>'\a'</code> and <code>'\b'</code>.</li>
<li>All the other non printable characters not passing the <code>isprint</code> test are quoted in <code>\x..</code> form, that is: backslash followed by <code>x</code> followed by two digit hex number representing the character byte value.</li>
<li>The function always adds initial and final double quotes characters.</li>
</ul>
<p>There is an SDS function that is able to perform the reverse conversion and is
documented in the <em>Tokenization</em> paragraph below.</p>
</div>
