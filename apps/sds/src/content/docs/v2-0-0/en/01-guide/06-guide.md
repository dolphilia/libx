---
title: "Internals and direct editing"
documentId: "sds:01-guide/06-guide.md"
order: 6
licenseSource: "sds-fixed"
documentContext: [{"kind": "source", "html": "<p>SDS 2.0.0; fixed commit f74b9b785b63c6d8ea312d7e7864df5267149c85. Unofficial Libx static edition. The complete README guide is available as8 English and unofficial Japanese units; API comments and headers remain original English, untranslated and outside the full meaning review scope. <a href=\"/docs/sds/notices/LICENSE.txt\">Original README BSD2 licence</a>; code/header BSD3 notices retained separately.</p><p>版メニューの日付は固定コミットのUTC日（2015年7月25日）で、リリース告知日ではありません。原READMEの位置参照は分割前の単一ガイドを指します。<a href=\"/docs/sds/v2-0-0/en/02-reference/01-api-comments/\">英語APIコメント</a>と<a href=\"/docs/sds/v2-0-0/en/02-reference/02-public-header/\">公開ヘッダー原文</a>を参照できます。</p><p>本文は固定版の原文と非公式日本語訳です。原著の記述・例の不備は注記と原典で補い、現在の技術的正しさや例の実行結果を保証しません。コード内コメントは原文を保持しています。<a href=\"/docs/sds/notices/sds.c-notice.txt\">sds.c原通知</a>、<a href=\"/docs/sds/notices/sds.h.txt\">sds.h原通知</a>、<a href=\"/docs/sds/notices/sdsalloc.h.txt\">sdsalloc.h原通知</a>を参照してください。</p>"}, {"kind": "editorial", "html": "<h1 id=\"sds-200\">SDS 2.0.0 原文に関する編集注記</h1>\n<p>Libxの運用方針に基づく固定原資料の編集注記です。原文・コード例は保持しており、ソフトウェアのコード例は実行検証していません。</p>\n<ul>\n<li><strong>内部構造</strong>: READMEのInternalsにある<code>struct sdshdr { int len; int free; char buf[]; }</code>は、固定版のヘッダーで宣言された<code>sdshdr5/8/16/32/64</code>とは異なります。固定版の構造体、flags、len、allocについては<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L42-L75\">固定sds.hの42–75行</a>の原典付録を参照してください。READMEの構造図と説明は原文として保持します。</li>\n<li><strong>結合API</strong>: READMEの<code>sdsjoin</code>宣言と例は4引数です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L250-L251\">固定sds.hの250–251行</a>では<code>sdsjoin</code>は3引数、<code>sdsjoinsds</code>は4引数です。二つのAPIを区別してください。</li>\n<li><strong>トリミング</strong>: READMEは<code>sdstrim</code>を<code>void</code>として掲載していますが、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L237\">固定宣言237行</a>は<code>sds</code>戻り値です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L668-L695\">固定実装668–695行</a>は再確保せず受け取った<code>s</code>を返します。この関数の原コメントには参照置換の説明があり、入力例<code>HelloWorld</code>に対して出力<code>Hello World</code>と記されています。これらも原文のまま区別して掲載します。</li>\n<li><strong>分割APIコメント</strong>: <a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L778-L806\">固定sds.cの778–806行</a>の<code>sdssplitlen</code>コメントは空文字列の場合もNULLと説明しますが、実装はtokensの割り当てに成功した空入力なら<code>*count = 0</code>でtokensを返します。またコメントにある<code>sdssplit()</code>は固定公開ヘッダーに宣言されていません。<code>sdssplitlen()</code>と同じ公開APIが存在すると推測しないでください。</li>\n<li><strong>組み込みと割当設定</strong>: READMEは<code>sds.c</code>と<code>sds.h</code>のコピーを案内しています。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L38\">固定sds.cの38行</a>は<code>sdsalloc.h</code>をインクルードしており、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sdsalloc.h\">そのヘッダー全体</a>を原典付録に含めます。</li>\n<li><strong>例の静的な不備</strong>: 固定READMEには<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L305\">305行の引用符不一致</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L416-L429\">416–429行のprintf引数欠落</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L542-L548\">542–548行のs1宣言とsの使用の混在</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L812-L814\">812–814行のsize_t値に対する%d指定</a>があります。コード例は原文を保持し、そのまま実行できる検証済みプログラムとは扱いません。</li>\n<li><strong>条件の区別</strong>: READMEは原LICENSEのBSD 2-Clauseを明示参照します。一方、採録する<code>sds.c</code>コメント、<code>sds.h</code>、<code>sdsalloc.h</code>には個別のBSD 3-Clause通知があります。各原通知を全文保持し、Redisの名称や貢献者名による推薦・宣伝についての追加条項も省略しません。READMEの条件で個別条件を上書きしません。</li>\n</ul>\n<p>全注釈は固定コミット<code>f74b9b785b63c6d8ea312d7e7864df5267149c85</code>の原文との相違を示すものです。現在のmaster、未実行のソフトウェア挙動、存在未確認のAPIへ一般化しません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/sds/source/v2-0-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定版9ファイル、英語12ページ・日本語8章の編集原稿、再生成入力、原通知と再構築手順を含みます。各ファイルの原条件を参照してください。</p>"}]
---
<div class="sds-document">
<h1 id="sds-internals-and-advanced-usage">SDS internals and advanced usage</h1>
<p>At the very beginning of this documentation it was explained how SDS strings
are allocated, however the prefix stored before the pointer returned to the
user was classified as an <em>header</em> without further details. For an advanced
usage it is better to dig more into the internals of SDS and show the
structure implementing it:</p>
<pre><code class="language-c">struct sdshdr {&#10;    int len;&#10;    int free;&#10;    char buf[];&#10;};&#10;</code></pre>
<p>As you can see, the structure may resemble the one of a conventional string
library, however the <code>buf</code> field of the structure is different since it is
not a pointer but an array without any length declared, so <code>buf</code> actually
points at the first byte just after the <code>free</code> integer. So in order to create
an SDS string we just allocate a piece of memory that is as large as the
<code>sdshdr</code> structure plus the length of our string, plus an additional byte
for the mandatory null term that every SDS string has.</p>
<p>The <code>len</code> field of the structure is quite obvious, and is the current length
of the SDS string, always computed every time the string is modified via
SDS function calls. The <code>free</code> field instead represents the amount of free
memory in the current allocation that can be used to store more characters.</p>
<p>So the actual SDS layout is this one:</p>
<pre><code>+------------+------------------------+-----------+---------------\&#10;| Len | Free | H E L L O W O R L D \n | Null term |  Free space   \&#10;+------------+------------------------+-----------+---------------\&#10;             |&#10;             `-&gt; Pointer returned to the user.&#10;</code></pre>
<p>You may wonder why there is some free space at the end of the string, it
looks like a waste. Actually after a new SDS string is created, there is no
free space at the end at all: the allocation will be as small as possible to
just hold the header, string, and null term. However other access patterns
will create extra free space at the end, like in the following program:</p>
<pre><code class="language-c">s = sdsempty();&#10;s = sdscat(s,&quot;foo&quot;);&#10;s = sdscat(s,&quot;bar&quot;);&#10;s = sdscat(s,&quot;123&quot;);&#10;</code></pre>
<p>Since SDS tries to be efficient it can't afford to reallocate the string every
time new data is appended, since this would be very inefficient, so it uses
the <strong>preallocation of some free space</strong> every time you enlarge the string.</p>
<p>The preallocation algorithm used is the following: every time the string
is reallocated in order to hold more bytes, the actual allocation size performed
is two times the minimum required. So for instance if the string currently
is holding 30 bytes, and we concatenate 2 more bytes, instead of allocating 32
bytes in total SDS will allocate 64 bytes.</p>
<p>However there is an hard limit to the allocation it can perform ahead, and is
defined by <code>SDS_MAX_PREALLOC</code>. SDS will never allocate more than 1MB of
additional space (by default, you can change this default).</p>
<h2 id="shrinking-strings">Shrinking strings</h2>
<pre><code class="language-c">sds sdsRemoveFreeSpace(sds s);&#10;size_t sdsAllocSize(sds s);&#10;</code></pre>
<p>Sometimes there are class of programs that require to use very little memory.
After strings concatenations, trimming, ranges, the string may end having
a non trivial amount of additional space at the end.</p>
<p>It is possible to resize a string back to its minimal size in order to hold
the current content by using the function <code>sdsRemoveFreeSpace</code>.</p>
<pre><code class="language-c">s = sdsRemoveFreeSpace(s);&#10;</code></pre>
<p>There is also a function that can be used in order to get the size of the
total allocation for a given string, and is called <code>sdsAllocSize</code>.</p>
<pre><code class="language-c">sds s = sdsnew(&quot;Ladies and gentlemen&quot;);&#10;s = sdscat(s,&quot;... welcome to the C language.&quot;);&#10;printf(&quot;%d\n&quot;, (int) sdsAllocSize(s));&#10;s = sdsRemoveFreeSpace(s);&#10;printf(&quot;%d\n&quot;, (int) sdsAllocSize(s));&#10;&#10;output&gt; 109&#10;output&gt; 59&#10;</code></pre>
<p>NOTE: SDS Low level API use cammelCase in order to warn you that you are playing with the fire.</p>
<h2 id="manual-modifications-of-sds-strings">Manual modifications of SDS strings</h2>
<pre><code>void sdsupdatelen(sds s);&#10;</code></pre>
<p>Sometimes you may want to hack with an SDS string manually, without using
SDS functions. In the following example we implicitly change the length
of the string, however we want the logical length to reflect the null terminated
C string.</p>
<p>The function <code>sdsupdatelen</code> does just that, updating the internal length
information for the specified string to the length obtained via <code>strlen</code>.</p>
<pre><code class="language-c">sds s = sdsnew(&quot;foobar&quot;);&#10;s[2] = '\0';&#10;printf(&quot;%d\n&quot;, sdslen(s));&#10;sdsupdatelen(s);&#10;printf(&quot;%d\n&quot;, sdslen(s));&#10;&#10;output&gt; 6&#10;output&gt; 2&#10;</code></pre>
</div>
