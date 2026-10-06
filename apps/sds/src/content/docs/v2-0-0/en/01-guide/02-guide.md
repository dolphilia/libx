---
title: "Basic string operations"
documentId: "sds:01-guide/02-guide.md"
order: 2
licenseSource: "sds-fixed"
documentContext: [{"kind": "source", "html": "<p>SDS 2.0.0; fixed commit f74b9b785b63c6d8ea312d7e7864df5267149c85. Unofficial Libx static edition. The complete README guide is available as8 English and unofficial Japanese units; API comments and headers remain original English, untranslated and outside the full meaning review scope. <a href=\"/docs/sds/notices/LICENSE.txt\">Original README BSD2 licence</a>; code/header BSD3 notices retained separately.</p><p>版メニューの日付は固定コミットのUTC日（2015年7月25日）で、リリース告知日ではありません。原READMEの位置参照は分割前の単一ガイドを指します。<a href=\"/docs/sds/v2-0-0/en/02-reference/01-api-comments/\">英語APIコメント</a>と<a href=\"/docs/sds/v2-0-0/en/02-reference/02-public-header/\">公開ヘッダー原文</a>を参照できます。</p><p>本文は固定版の原文と非公式日本語訳です。原著の記述・例の不備は注記と原典で補い、現在の技術的正しさや例の実行結果を保証しません。コード内コメントは原文を保持しています。<a href=\"/docs/sds/notices/sds.c-notice.txt\">sds.c原通知</a>、<a href=\"/docs/sds/notices/sds.h.txt\">sds.h原通知</a>、<a href=\"/docs/sds/notices/sdsalloc.h.txt\">sdsalloc.h原通知</a>を参照してください。</p>"}, {"kind": "editorial", "html": "<h1 id=\"sds-200\">SDS 2.0.0 原文に関する編集注記</h1>\n<p>Libxの運用方針に基づく固定原資料の編集注記です。原文・コード例は保持しており、ソフトウェアのコード例は実行検証していません。</p>\n<ul>\n<li><strong>内部構造</strong>: READMEのInternalsにある<code>struct sdshdr { int len; int free; char buf[]; }</code>は、固定版のヘッダーで宣言された<code>sdshdr5/8/16/32/64</code>とは異なります。固定版の構造体、flags、len、allocについては<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L42-L75\">固定sds.hの42–75行</a>の原典付録を参照してください。READMEの構造図と説明は原文として保持します。</li>\n<li><strong>結合API</strong>: READMEの<code>sdsjoin</code>宣言と例は4引数です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L250-L251\">固定sds.hの250–251行</a>では<code>sdsjoin</code>は3引数、<code>sdsjoinsds</code>は4引数です。二つのAPIを区別してください。</li>\n<li><strong>トリミング</strong>: READMEは<code>sdstrim</code>を<code>void</code>として掲載していますが、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L237\">固定宣言237行</a>は<code>sds</code>戻り値です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L668-L695\">固定実装668–695行</a>は再確保せず受け取った<code>s</code>を返します。この関数の原コメントには参照置換の説明があり、入力例<code>HelloWorld</code>に対して出力<code>Hello World</code>と記されています。これらも原文のまま区別して掲載します。</li>\n<li><strong>分割APIコメント</strong>: <a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L778-L806\">固定sds.cの778–806行</a>の<code>sdssplitlen</code>コメントは空文字列の場合もNULLと説明しますが、実装はtokensの割り当てに成功した空入力なら<code>*count = 0</code>でtokensを返します。またコメントにある<code>sdssplit()</code>は固定公開ヘッダーに宣言されていません。<code>sdssplitlen()</code>と同じ公開APIが存在すると推測しないでください。</li>\n<li><strong>組み込みと割当設定</strong>: READMEは<code>sds.c</code>と<code>sds.h</code>のコピーを案内しています。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L38\">固定sds.cの38行</a>は<code>sdsalloc.h</code>をインクルードしており、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sdsalloc.h\">そのヘッダー全体</a>を原典付録に含めます。</li>\n<li><strong>例の静的な不備</strong>: 固定READMEには<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L305\">305行の引用符不一致</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L416-L429\">416–429行のprintf引数欠落</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L542-L548\">542–548行のs1宣言とsの使用の混在</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L812-L814\">812–814行のsize_t値に対する%d指定</a>があります。コード例は原文を保持し、そのまま実行できる検証済みプログラムとは扱いません。</li>\n<li><strong>条件の区別</strong>: READMEは原LICENSEのBSD 2-Clauseを明示参照します。一方、採録する<code>sds.c</code>コメント、<code>sds.h</code>、<code>sdsalloc.h</code>には個別のBSD 3-Clause通知があります。各原通知を全文保持し、Redisの名称や貢献者名による推薦・宣伝についての追加条項も省略しません。READMEの条件で個別条件を上書きしません。</li>\n</ul>\n<p>全注釈は固定コミット<code>f74b9b785b63c6d8ea312d7e7864df5267149c85</code>の原文との相違を示すものです。現在のmaster、未実行のソフトウェア挙動、存在未確認のAPIへ一般化しません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/sds/source/v2-0-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定版9ファイル、英語12ページ・日本語8章の編集原稿、再生成入力、原通知と再構築手順を含みます。各ファイルの原条件を参照してください。</p>"}]
---
<div class="sds-document">
<h1 id="sds-basics">SDS basics</h1>
<p>The type of SDS strings is just the char pointer <code>char *</code>. However SDS defines
an <code>sds</code> type as alias of <code>char *</code> in its header file: you should use the
<code>sds</code> type in order to make sure you remember that a given variable in your
program holds an SDS string and not a C string, however this is not mandatory.</p>
<p>This is the simplest SDS program you can write that does something:</p>
<pre><code class="language-c">sds mystring = sdsnew(&quot;Hello World!&quot;);&#10;printf(&quot;%s\n&quot;, mystring);&#10;sdsfree(mystring);&#10;&#10;output&gt; Hello World!&#10;</code></pre>
<p>The above small program already shows a few important things about SDS:</p>
<ul>
<li>SDS strings are created, and heap allocated, via the <code>sdsnew()</code> function, or other similar functions that we'll see in a moment.</li>
<li>SDS strings can be passed to <code>printf()</code> like any other C string.</li>
<li>SDS strings require to be freed with <code>sdsfree()</code>, since they are heap allocated.</li>
</ul>
<h2 id="creating-sds-strings">Creating SDS strings</h2>
<pre><code class="language-c">sds sdsnewlen(const void *init, size_t initlen);&#10;sds sdsnew(const char *init);&#10;sds sdsempty(void);&#10;sds sdsdup(const sds s);&#10;</code></pre>
<p>There are many ways to create SDS strings:</p>
<ul>
<li>The <code>sdsnew</code> function creates an SDS string starting from a C null terminated string. We already saw how it works in the above example.</li>
<li>The <code>sdsnewlen</code> function is similar to <code>sdsnew</code> but instead of creating the string assuming that the input string is null terminated, it gets an additional length parameter. This way you can create a string using binary data:<pre><code>char buf[3];&#10;sds mystring;&#10;&#10;buf[0] = 'A';&#10;buf[1] = 'B';&#10;buf[2] = 'C';&#10;mystring = sdsnewlen(buf,3);&#10;printf("%s of len %d\n", mystring, (int) sdslen(mystring));&#10;&#10;output&gt; ABC of len 3&#10;</code></pre>
</li>
</ul>
<p>Note: <code>sdslen</code> return value is casted to <code>int</code> because it returns a <code>size_t</code>
type. You can use the right <code>printf</code> specifier instead of casting.</p>
<ul>
<li>
<p>The <code>sdsempty()</code> function creates an empty zero-length string:</p>
<pre><code>sds mystring = sdsempty();&#10;printf("%d\n", (int) sdslen(mystring));&#10;&#10;output&gt; 0&#10;</code></pre>
</li>
<li>
<p>The <code>sdsdup()</code> function duplicates an already existing SDS string:</p>
<pre><code>sds s1, s2;&#10;&#10;s1 = sdsnew("Hello");&#10;s2 = sdsdup(s1);&#10;printf("%s %s\n", s1, s2);&#10;&#10;output&gt; Hello Hello&#10;</code></pre>
</li>
</ul>
<h2 id="obtaining-the-string-length">Obtaining the string length</h2>
<pre><code class="language-c">size_t sdslen(const sds s);&#10;</code></pre>
<p>In the examples above we already used the <code>sdslen</code> function in order to get
the length of the string. This function works like <code>strlen</code> of the libc
except that:</p>
<ul>
<li>It runs in constant time since the length is stored in the prefix of SDS strings, so calling <code>sdslen</code> is not expensive even when called with very large strings.</li>
<li>The function is binary safe like any other SDS string function, so the length is the true length of the string regardless of the content, there is no problem if the string includes null term characters in the middle.</li>
</ul>
<p>As an example of the binary safeness of SDS strings, we can run the following
code:</p>
<pre><code class="language-c">sds s = sdsnewlen(&quot;A\0\0B&quot;,4);&#10;printf(&quot;%d\n&quot;, (int) sdslen(s));&#10;&#10;output&gt; 4&#10;</code></pre>
<p>Note that SDS strings are always null terminated at the end, so even in that
case <code>s[4]</code> will be a null term, however printing the string with <code>printf</code>
would result in just <code>"A"</code> to be printed since libc will treat the SDS string
like a normal C string.</p>
<h2 id="destroying-strings">Destroying strings</h2>
<pre><code class="language-c">void sdsfree(sds s);&#10;</code></pre>
<p>The destroy an SDS string there is just to call <code>sdsfree</code> with the string
pointer. However note that empty strings created with <code>sdsempty</code> need to be
destroyed as well otherwise they'll result into a memory leak.</p>
<p>The function <code>sdsfree</code> does not perform any operation if instead of an SDS
string pointer, <code>NULL</code> is passed, so you don't need to check for <code>NULL</code> explicitly before calling it:</p>
<pre><code class="language-c">if (string) sdsfree(string); /* Not needed. */&#10;sdsfree(string); /* Same effect but simpler. */&#10;</code></pre>
<h2 id="concatenating-strings">Concatenating strings</h2>
<p>Concatenating strings to other strings is likely the operation you will end
using the most with a dynamic C string library. SDS provides different
functions to concatenate strings to existing strings.</p>
<pre><code class="language-c">sds sdscatlen(sds s, const void *t, size_t len);&#10;sds sdscat(sds s, const char *t);&#10;</code></pre>
<p>The main string concatenation functions are <code>sdscatlen</code> and <code>sdscat</code> that are
identical, the only difference being that <code>sdscat</code> does not have an explicit
length argument since it expects a null terminated string.</p>
<pre><code class="language-c">sds s = sdsempty();&#10;s = sdscat(s, &quot;Hello &quot;);&#10;s = sdscat(s, &quot;World!&quot;);&#10;printf(&quot;%s\n&quot;, s);&#10;&#10;output&gt; Hello World!&#10;</code></pre>
<p>Sometimes you want to cat an SDS string to another SDS string, so you don't
need to specify the length, but at the same time the string does not need to
be null terminated but can contain any binary data. For this there is a
special function:</p>
<pre><code class="language-c">sds sdscatsds(sds s, const sds t);&#10;</code></pre>
<p>Usage is straightforward:</p>
<pre><code class="language-c">sds s1 = sdsnew(&quot;aaa&quot;);&#10;sds s2 = sdsnew(&quot;bbb&quot;);&#10;s1 = sdscatsds(s1,s2);&#10;sdsfree(s2);&#10;printf(&quot;%s\n&quot;, s1);&#10;&#10;output&gt; aaabbb&#10;</code></pre>
<p>Sometimes you don't want to append any special data to the string, but you want
to make sure that there are at least a given number of bytes composing the
whole string.</p>
<pre><code class="language-c">sds sdsgrowzero(sds s, size_t len);&#10;</code></pre>
<p>The <code>sdsgrowzero</code> function will do nothing if the current string length is
already <code>len</code> bytes, otherwise it will enlarge the string to <code>len</code> just padding
it with zero bytes.</p>
<pre><code class="language-c">sds s = sdsnew(&quot;Hello&quot;);&#10;s = sdsgrowzero(s,6);&#10;s[5] = '!'; /* We are sure this is safe because of sdsgrowzero() */&#10;printf(&quot;%s\n', s);&#10;&#10;output&gt; Hello!&#10;</code></pre>
</div>
