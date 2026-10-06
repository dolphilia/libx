---
title: "Overview and design"
documentId: "sds:01-guide/01-guide.md"
order: 1
licenseSource: "sds-fixed"
documentContext: [{"kind": "source", "html": "<p>SDS 2.0.0; fixed commit f74b9b785b63c6d8ea312d7e7864df5267149c85. Unofficial Libx static edition. The complete README guide is available as8 English and unofficial Japanese units; API comments and headers remain original English, untranslated and outside the full meaning review scope. <a href=\"/docs/sds/notices/LICENSE.txt\">Original README BSD2 licence</a>; code/header BSD3 notices retained separately.</p><p>版メニューの日付は固定コミットのUTC日（2015年7月25日）で、リリース告知日ではありません。原READMEの位置参照は分割前の単一ガイドを指します。<a href=\"/docs/sds/v2-0-0/en/02-reference/01-api-comments/\">英語APIコメント</a>と<a href=\"/docs/sds/v2-0-0/en/02-reference/02-public-header/\">公開ヘッダー原文</a>を参照できます。</p><p>本文は固定版の原文と非公式日本語訳です。原著の記述・例の不備は注記と原典で補い、現在の技術的正しさや例の実行結果を保証しません。コード内コメントは原文を保持しています。<a href=\"/docs/sds/notices/sds.c-notice.txt\">sds.c原通知</a>、<a href=\"/docs/sds/notices/sds.h.txt\">sds.h原通知</a>、<a href=\"/docs/sds/notices/sdsalloc.h.txt\">sdsalloc.h原通知</a>を参照してください。</p>"}, {"kind": "editorial", "html": "<h1 id=\"sds-200\">SDS 2.0.0 原文に関する編集注記</h1>\n<p>Libxの運用方針に基づく固定原資料の編集注記です。原文・コード例は保持しており、ソフトウェアのコード例は実行検証していません。</p>\n<ul>\n<li><strong>内部構造</strong>: READMEのInternalsにある<code>struct sdshdr { int len; int free; char buf[]; }</code>は、固定版のヘッダーで宣言された<code>sdshdr5/8/16/32/64</code>とは異なります。固定版の構造体、flags、len、allocについては<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L42-L75\">固定sds.hの42–75行</a>の原典付録を参照してください。READMEの構造図と説明は原文として保持します。</li>\n<li><strong>結合API</strong>: READMEの<code>sdsjoin</code>宣言と例は4引数です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L250-L251\">固定sds.hの250–251行</a>では<code>sdsjoin</code>は3引数、<code>sdsjoinsds</code>は4引数です。二つのAPIを区別してください。</li>\n<li><strong>トリミング</strong>: READMEは<code>sdstrim</code>を<code>void</code>として掲載していますが、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L237\">固定宣言237行</a>は<code>sds</code>戻り値です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L668-L695\">固定実装668–695行</a>は再確保せず受け取った<code>s</code>を返します。この関数の原コメントには参照置換の説明があり、入力例<code>HelloWorld</code>に対して出力<code>Hello World</code>と記されています。これらも原文のまま区別して掲載します。</li>\n<li><strong>分割APIコメント</strong>: <a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L778-L806\">固定sds.cの778–806行</a>の<code>sdssplitlen</code>コメントは空文字列の場合もNULLと説明しますが、実装はtokensの割り当てに成功した空入力なら<code>*count = 0</code>でtokensを返します。またコメントにある<code>sdssplit()</code>は固定公開ヘッダーに宣言されていません。<code>sdssplitlen()</code>と同じ公開APIが存在すると推測しないでください。</li>\n<li><strong>組み込みと割当設定</strong>: READMEは<code>sds.c</code>と<code>sds.h</code>のコピーを案内しています。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L38\">固定sds.cの38行</a>は<code>sdsalloc.h</code>をインクルードしており、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sdsalloc.h\">そのヘッダー全体</a>を原典付録に含めます。</li>\n<li><strong>例の静的な不備</strong>: 固定READMEには<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L305\">305行の引用符不一致</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L416-L429\">416–429行のprintf引数欠落</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L542-L548\">542–548行のs1宣言とsの使用の混在</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L812-L814\">812–814行のsize_t値に対する%d指定</a>があります。コード例は原文を保持し、そのまま実行できる検証済みプログラムとは扱いません。</li>\n<li><strong>条件の区別</strong>: READMEは原LICENSEのBSD 2-Clauseを明示参照します。一方、採録する<code>sds.c</code>コメント、<code>sds.h</code>、<code>sdsalloc.h</code>には個別のBSD 3-Clause通知があります。各原通知を全文保持し、Redisの名称や貢献者名による推薦・宣伝についての追加条項も省略しません。READMEの条件で個別条件を上書きしません。</li>\n</ul>\n<p>全注釈は固定コミット<code>f74b9b785b63c6d8ea312d7e7864df5267149c85</code>の原文との相違を示すものです。現在のmaster、未実行のソフトウェア挙動、存在未確認のAPIへ一般化しません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/sds/source/v2-0-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定版9ファイル、英語12ページ・日本語8章の編集原稿、再生成入力、原通知と再構築手順を含みます。各ファイルの原条件を参照してください。</p>"}]
---
<div class="sds-document">
<h1 id="simple-dynamic-strings">Simple Dynamic Strings</h1>
<p><strong>Notes about verison 2</strong>: this is an updated version of SDS in an attempt
to finally unify Redis, Disque, Hiredis, and the stand alone SDS versions.
This version is <strong>NOT* binary compatible</strong> with SDS verison 1, but the API
is 99% compatible so switching to the new lib should be trivial.</p>
<p>Note that this version of SDS may be a slower with certain workloads, but
uses less memory compared to V1 since header size is dynamic and depends to
the string to alloc.</p>
<p>Moreover it includes a few more API functions, notably <code>sdscatfmt</code> which
is a faster version of <code>sdscatprintf</code> that can be used for the simpler
cases in order to avoid the libc <code>printf</code> family functions performance
penalty.</p>
<h1 id="how-sds-stirngs-work">How SDS stirngs work</h1>
<p>SDS is a string library for C designed to augment the limited libc string
handling functionalities by adding heap allocated strings that are:</p>
<ul>
<li>Simpler to use.</li>
<li>Binary safe.</li>
<li>Computationally more efficient.</li>
<li>But yet... Compatible with normal C string functions.</li>
</ul>
<p>This is achieved using an alternative design in which instead of using a C
structure to represent a string, we use a binary prefix that is stored
before the actual pointer to the string that is returned by SDS to the user.</p>
<pre><code>+--------+-------------------------------+-----------+&#10;| Header | Binary safe C alike string... | Null term |&#10;+--------+-------------------------------+-----------+&#10;         |&#10;         `-&gt; Pointer returned to the user.&#10;</code></pre>
<p>Because of meta data stored before the actual returned pointer as a prefix,
and because of every SDS string implicitly adding a null term at the end of
the string regardless of the actual content of the string, SDS strings work
well together with C strings and the user is free to use them interchangeably
with real-only functions that access the string in read-only.</p>
<p>SDS was a C string I developed in the past for my everyday C programming needs,
later it was moved into Redis where it is used extensively and where it was
modified in order to be suitable for high performance operations. Now it was
extracted from Redis and forked as a stand alone project.</p>
<p>Because of its many years life inside Redis, SDS provides both higher level
functions for easy strings manipulation in C, but also a set of low level
functions that make it possible to write high performance code without paying
a penalty for using an higher level string library.</p>
<h1 id="advantages-and-disadvantages-of-sds">Advantages and disadvantages of SDS</h1>
<p>Normally dynamic string libraries for C are implemented using a structure
that defines the string. The structure has a pointer field that is managed
by the string function, so it looks like this:</p>
<pre><code class="language-c">struct yourAverageStringLibrary {&#10;    char *buf;&#10;    size_t len;&#10;    ... possibly more fields here ...&#10;};&#10;</code></pre>
<p>SDS strings are already mentioned don't follow this schema, and are instead
a single allocation with a prefix that lives <em>before</em> the address actually
returned for the string.</p>
<p>There are advantages and disadvantages with this approach over the traditional
approach:</p>
<p><strong>Disadvantage #1</strong>: many functions return the new string as value, since sometimes SDS requires to create a new string with more space, so the most SDS API calls look like this:</p>
<pre><code class="language-c">s = sdscat(s,&quot;Some more data&quot;);&#10;</code></pre>
<p>As you can see <code>s</code> is used as input for <code>sdscat</code> but is also set to the value
returned by the SDS API call, since we are not sure if the call modified the
SDS string we passed or allocated a new one. Not remembering to assign back
the return value of <code>sdscat</code> or similar functions to the variable holding
the SDS string will result in a bug.</p>
<p><strong>Disadvantage #2</strong>: if an SDS string is shared in different places in your program you have to modify all the references when you modify the string. However most of the times when you need to share SDS strings it is much better to encapsulate them into structures with a <code>reference count</code> otherwise it is too easy to incur into memory leaks.</p>
<p><strong>Advantage #1</strong>: you can pass SDS strings to functions designed for C functions without accessing a struct member or calling a function, like this:</p>
<pre><code class="language-c">printf(&quot;%s\n&quot;, sds_string);&#10;</code></pre>
<p>In most other libraries this will be something like:</p>
<pre><code class="language-c">printf(&quot;%s\n&quot;, string-&gt;buf);&#10;</code></pre>
<p>Or:</p>
<pre><code class="language-c">printf(&quot;%s\n&quot;, getStringPointer(string));&#10;</code></pre>
<p><strong>Advantage #2</strong>: accessing individual chars is straightforward. C is a low level language so this is an important operation in many programs. With SDS strings accessing individual chars is very natural:</p>
<pre><code class="language-c">printf(&quot;%c %c\n&quot;, s[0], s[1]);&#10;</code></pre>
<p>With other libraries your best chance is to assign <code>string-&gt;buf</code> (or call the function to get the string pointer) to a <code>char</code> pointer and work with this. However since the other libraries may reallocate the buffer implicitly every time you call a function that may modify the string you have to get a reference to the buffer again.</p>
<p><strong>Advantage #3</strong>: single allocation has better cache locality. Usually when you access a string created by a string library using a structure, you have two different allocations for the structure representing the string, and the actual buffer holding the string. Over the time the buffer is reallocated, and it is likely that it ends in a totally different part of memory compared to the structure itself. Since modern programs performances are often dominated by cache misses, SDS may perform better in many workloads.</p>
</div>
