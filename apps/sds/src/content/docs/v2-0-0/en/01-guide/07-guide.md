---
title: "Sharing, heap checks and zero copy"
documentId: "sds:01-guide/07-guide.md"
order: 7
licenseSource: "sds-fixed"
documentContext: [{"kind": "source", "html": "<p>SDS 2.0.0; fixed commit f74b9b785b63c6d8ea312d7e7864df5267149c85. Unofficial Libx static edition. The complete README guide is available as8 English and unofficial Japanese units; API comments and headers remain original English, untranslated and outside the full meaning review scope. <a href=\"/docs/sds/notices/LICENSE.txt\">Original README BSD2 licence</a>; code/header BSD3 notices retained separately.</p><p>版メニューの日付は固定コミットのUTC日（2015年7月25日）で、リリース告知日ではありません。原READMEの位置参照は分割前の単一ガイドを指します。<a href=\"/docs/sds/v2-0-0/en/02-reference/01-api-comments/\">英語APIコメント</a>と<a href=\"/docs/sds/v2-0-0/en/02-reference/02-public-header/\">公開ヘッダー原文</a>を参照できます。</p><p>本文は固定版の原文と非公式日本語訳です。原著の記述・例の不備は注記と原典で補い、現在の技術的正しさや例の実行結果を保証しません。コード内コメントは原文を保持しています。<a href=\"/docs/sds/notices/sds.c-notice.txt\">sds.c原通知</a>、<a href=\"/docs/sds/notices/sds.h.txt\">sds.h原通知</a>、<a href=\"/docs/sds/notices/sdsalloc.h.txt\">sdsalloc.h原通知</a>を参照してください。</p>"}, {"kind": "editorial", "html": "<h1 id=\"sds-200\">SDS 2.0.0 原文に関する編集注記</h1>\n<p>Libxの運用方針に基づく固定原資料の編集注記です。原文・コード例は保持しており、ソフトウェアのコード例は実行検証していません。</p>\n<ul>\n<li><strong>内部構造</strong>: READMEのInternalsにある<code>struct sdshdr { int len; int free; char buf[]; }</code>は、固定版のヘッダーで宣言された<code>sdshdr5/8/16/32/64</code>とは異なります。固定版の構造体、flags、len、allocについては<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L42-L75\">固定sds.hの42–75行</a>の原典付録を参照してください。READMEの構造図と説明は原文として保持します。</li>\n<li><strong>結合API</strong>: READMEの<code>sdsjoin</code>宣言と例は4引数です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L250-L251\">固定sds.hの250–251行</a>では<code>sdsjoin</code>は3引数、<code>sdsjoinsds</code>は4引数です。二つのAPIを区別してください。</li>\n<li><strong>トリミング</strong>: READMEは<code>sdstrim</code>を<code>void</code>として掲載していますが、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L237\">固定宣言237行</a>は<code>sds</code>戻り値です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L668-L695\">固定実装668–695行</a>は再確保せず受け取った<code>s</code>を返します。この関数の原コメントには参照置換の説明があり、入力例<code>HelloWorld</code>に対して出力<code>Hello World</code>と記されています。これらも原文のまま区別して掲載します。</li>\n<li><strong>分割APIコメント</strong>: <a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L778-L806\">固定sds.cの778–806行</a>の<code>sdssplitlen</code>コメントは空文字列の場合もNULLと説明しますが、実装はtokensの割り当てに成功した空入力なら<code>*count = 0</code>でtokensを返します。またコメントにある<code>sdssplit()</code>は固定公開ヘッダーに宣言されていません。<code>sdssplitlen()</code>と同じ公開APIが存在すると推測しないでください。</li>\n<li><strong>組み込みと割当設定</strong>: READMEは<code>sds.c</code>と<code>sds.h</code>のコピーを案内しています。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L38\">固定sds.cの38行</a>は<code>sdsalloc.h</code>をインクルードしており、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sdsalloc.h\">そのヘッダー全体</a>を原典付録に含めます。</li>\n<li><strong>例の静的な不備</strong>: 固定READMEには<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L305\">305行の引用符不一致</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L416-L429\">416–429行のprintf引数欠落</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L542-L548\">542–548行のs1宣言とsの使用の混在</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L812-L814\">812–814行のsize_t値に対する%d指定</a>があります。コード例は原文を保持し、そのまま実行できる検証済みプログラムとは扱いません。</li>\n<li><strong>条件の区別</strong>: READMEは原LICENSEのBSD 2-Clauseを明示参照します。一方、採録する<code>sds.c</code>コメント、<code>sds.h</code>、<code>sdsalloc.h</code>には個別のBSD 3-Clause通知があります。各原通知を全文保持し、Redisの名称や貢献者名による推薦・宣伝についての追加条項も省略しません。READMEの条件で個別条件を上書きしません。</li>\n</ul>\n<p>全注釈は固定コミット<code>f74b9b785b63c6d8ea312d7e7864df5267149c85</code>の原文との相違を示すものです。現在のmaster、未実行のソフトウェア挙動、存在未確認のAPIへ一般化しません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/sds/source/v2-0-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定版9ファイル、英語12ページ・日本語8章の編集原稿、再生成入力、原通知と再構築手順を含みます。各ファイルの原条件を参照してください。</p>"}]
---
<div class="sds-document">
<h2 id="sharing-sds-strings">Sharing SDS strings</h2>
<p>If you are writing a program in which it is advantageous to share the same
SDS string across different data structures, it is absolutely advised to
encapsulate SDS strings into structures that remember the number of references
of the string, with functions to increment and decrement the number of references.</p>
<p>This approach is a memory management technique called <em>reference counting</em> and
in the context of SDS has two advantages:</p>
<ul>
<li>It is less likely that you'll create memory leaks or bugs due to non freeing SDS strings or freeing already freed strings.</li>
<li>You'll not need to update every reference to an SDS string when you modify it (since the new SDS string may point to a different memory location).</li>
</ul>
<p>While this is definitely a very common programming technique I'll outline
the basic ideas here. You create a structure like that:</p>
<pre><code class="language-c">struct mySharedStrings {&#10;    int refcount;&#10;    sds string;&#10;}&#10;</code></pre>
<p>When new strings are created, the structure is allocated and returned with
<code>refcount</code> set to 1. The you have two functions to change the reference count
of the shared string:</p>
<ul>
<li><code>incrementStringRefCount</code> will simply increment <code>refcount</code> of 1 in the structure. It will be called every time you add a reference to the string on some new data structure, variable, or whatever.</li>
<li><code>decrementStringRefCount</code> is used when you remove a reference. This function is however special since when the <code>refcount</code> drops to zero, it automatically frees the SDS string, and the <code>mySharedString</code> structure as well.</li>
</ul>
<h2 id="interactions-with-heap-checkers">Interactions with heap checkers</h2>
<p>Because SDS returns pointers into the middle of memory chunks allocated with
<code>malloc</code>, heap checkers may have issues, however:</p>
<ul>
<li>The popular Valgrind program will detect SDS strings are <em>possibly lost</em> memory and never as <em>definitely lost</em>, so it is easy to tell if there is a leak or not. I used Valgrind with Redis for years and every real leak was consistently detected as "definitely lost".</li>
<li>OSX instrumentation tools don't detect SDS strings as leaks but are able to correctly handle pointers pointing to the middle of memory chunks.</li>
</ul>
<h2 id="zero-copy-append-from-syscalls">Zero copy append from syscalls</h2>
<p>At this point you should have all the tools to dig more inside the SDS
library by reading the source code, however there is an interesting pattern
you can mount using the low level API exported, that is used inside Redis
in order to improve performances of the networking code.</p>
<p>Using <code>sdsIncrLen()</code> and <code>sdsMakeRoomFor()</code> it is possible to mount the
following schema, to cat bytes coming from the kernel to the end of an
sds string without copying into an intermediate buffer:</p>
<pre><code class="language-c">oldlen = sdslen(s);&#10;s = sdsMakeRoomFor(s, BUFFER_SIZE);&#10;nread = read(fd, s+oldlen, BUFFER_SIZE);&#10;... check for nread &lt;= 0 and handle it ...&#10;sdsIncrLen(s, nread);&#10;</code></pre>
<p><code>sdsIncrLen</code> is documented inside the source code of <code>sds.c</code>.</p>
</div>
