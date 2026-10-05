---
title: "基本操作"
documentId: "sds:01-guide/02-guide.md"
order: 2
licenseSource: "sds-fixed"
documentContext: [{"kind": "source", "html": "<p>SDS 2.0.0; fixed commit f74b9b785b63c6d8ea312d7e7864df5267149c85. Unofficial Libx static edition. The complete README guide is available as8 English and unofficial Japanese units; API comments and headers remain original English, untranslated and outside the full meaning review scope. <a href=\"/docs/sds/notices/LICENSE.txt\">Original README BSD2 licence</a>; code/header BSD3 notices retained separately.</p><p>版メニューの日付は固定コミットのUTC日（2015年7月25日）で、リリース告知日ではありません。原READMEの位置参照は分割前の単一ガイドを指します。<a href=\"/docs/sds/v2-0-0/en/02-reference/01-api-comments/\">英語APIコメント</a>と<a href=\"/docs/sds/v2-0-0/en/02-reference/02-public-header/\">公開ヘッダー原文</a>を参照できます。</p><p>本文は固定版の原文と非公式日本語訳です。原著の記述・例の不備は注記と原典で補い、現在の技術的正しさや例の実行結果を保証しません。コード内コメントは原文を保持しています。<a href=\"/docs/sds/notices/sds.c-notice.txt\">sds.c原通知</a>、<a href=\"/docs/sds/notices/sds.h.txt\">sds.h原通知</a>、<a href=\"/docs/sds/notices/sdsalloc.h.txt\">sdsalloc.h原通知</a>を参照してください。</p>"}, {"kind": "editorial", "html": "<h1 id=\"sds-200\">SDS 2.0.0 原文に関する編集注記</h1>\n<p>Libxの運用方針に基づく固定原資料の編集注記です。原文・コード例は保持しており、ソフトウェアのコード例は実行検証していません。</p>\n<ul>\n<li><strong>内部構造</strong>: READMEのInternalsにある<code>struct sdshdr { int len; int free; char buf[]; }</code>は、固定版のヘッダーで宣言された<code>sdshdr5/8/16/32/64</code>とは異なります。固定版の構造体、flags、len、allocについては<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L42-L75\">固定sds.hの42–75行</a>の原典付録を参照してください。READMEの構造図と説明は原文として保持します。</li>\n<li><strong>結合API</strong>: READMEの<code>sdsjoin</code>宣言と例は4引数です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L250-L251\">固定sds.hの250–251行</a>では<code>sdsjoin</code>は3引数、<code>sdsjoinsds</code>は4引数です。二つのAPIを区別してください。</li>\n<li><strong>トリミング</strong>: READMEは<code>sdstrim</code>を<code>void</code>として掲載していますが、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L237\">固定宣言237行</a>は<code>sds</code>戻り値です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L668-L695\">固定実装668–695行</a>は再確保せず受け取った<code>s</code>を返します。この関数の原コメントには参照置換の説明があり、入力例<code>HelloWorld</code>に対して出力<code>Hello World</code>と記されています。これらも原文のまま区別して掲載します。</li>\n<li><strong>分割APIコメント</strong>: <a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L778-L806\">固定sds.cの778–806行</a>の<code>sdssplitlen</code>コメントは空文字列の場合もNULLと説明しますが、実装はtokensの割り当てに成功した空入力なら<code>*count = 0</code>でtokensを返します。またコメントにある<code>sdssplit()</code>は固定公開ヘッダーに宣言されていません。<code>sdssplitlen()</code>と同じ公開APIが存在すると推測しないでください。</li>\n<li><strong>組み込みと割当設定</strong>: READMEは<code>sds.c</code>と<code>sds.h</code>のコピーを案内しています。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L38\">固定sds.cの38行</a>は<code>sdsalloc.h</code>をインクルードしており、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sdsalloc.h\">そのヘッダー全体</a>を原典付録に含めます。</li>\n<li><strong>例の静的な不備</strong>: 固定READMEには<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L305\">305行の引用符不一致</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L416-L429\">416–429行のprintf引数欠落</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L542-L548\">542–548行のs1宣言とsの使用の混在</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L812-L814\">812–814行のsize_t値に対する%d指定</a>があります。コード例は原文を保持し、そのまま実行できる検証済みプログラムとは扱いません。</li>\n<li><strong>条件の区別</strong>: READMEは原LICENSEのBSD 2-Clauseを明示参照します。一方、採録する<code>sds.c</code>コメント、<code>sds.h</code>、<code>sdsalloc.h</code>には個別のBSD 3-Clause通知があります。各原通知を全文保持し、Redisの名称や貢献者名による推薦・宣伝についての追加条項も省略しません。READMEの条件で個別条件を上書きしません。</li>\n</ul>\n<p>全注釈は固定コミット<code>f74b9b785b63c6d8ea312d7e7864df5267149c85</code>の原文との相違を示すものです。現在のmaster、未実行のソフトウェア挙動、存在未確認のAPIへ一般化しません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/sds/source/v2-0-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定版9ファイル、英語12ページ・日本語8章の編集原稿、再生成入力、原通知と再構築手順を含みます。各ファイルの原条件を参照してください。</p>"}]
---
<div class="sds-document">
<h1 id="sds-basics">SDSの基本</h1>
<p>SDS文字列の型は、単なる文字ポインター<code>char *</code>です。ただし、SDSはヘッダーファイルで<code>char *</code>の別名として<code>sds</code>型を定義しています。変数がC文字列ではなくSDS文字列を保持していることを忘れないよう、<code>sds</code>型を使うとよいでしょう。ただし、必須ではありません。</p>
<p>何らかの処理を行うSDSプログラムの、最も簡単な例です。</p>
<pre><code class="language-c">sds mystring = sdsnew("Hello World!");&#10;printf("%s\n", mystring);&#10;sdsfree(mystring);&#10;&#10;output&gt; Hello World!&#10;</code></pre>
<p>この短いプログラムだけでも、SDSの重要な点がいくつか分かります。</p>
<ul>
<li>SDS文字列は、<code>sdsnew()</code>関数や、この後に説明する同様の関数で作成し、ヒープ上に確保します。</li>
<li>SDS文字列は、ほかのC文字列と同じように<code>printf()</code>へ渡せます。</li>
<li>SDS文字列はヒープ上に確保されるため、<code>sdsfree()</code>で解放する必要があります。</li>
</ul>
<h2 id="creating-sds-strings">SDS文字列の作成</h2>
<pre><code class="language-c">sds sdsnewlen(const void *init, size_t initlen);&#10;sds sdsnew(const char *init);&#10;sds sdsempty(void);&#10;sds sdsdup(const sds s);&#10;</code></pre>
<p>SDS文字列には、さまざまな作成方法があります。</p>
<ul>
<li><code>sdsnew</code>関数は、NUL終端されたC文字列からSDS文字列を作成します。前の例で、その使い方を示しました。</li>
<li><code>sdsnewlen</code>関数は<code>sdsnew</code>に似ていますが、入力文字列がNUL終端されていると仮定せず、長さを表す追加の引数を受け取ります。そのため、バイナリーデータからも文字列を作れます。<pre><code>char buf[3];&#10;sds mystring;&#10;&#10;buf[0] = 'A';&#10;buf[1] = 'B';&#10;buf[2] = 'C';&#10;mystring = sdsnewlen(buf,3);&#10;printf("%s of len %d\n", mystring, (int) sdslen(mystring));&#10;&#10;output&gt; ABC of len 3&#10;</code></pre></li>
</ul>
<p>注：<code>sdslen</code>は<code>size_t</code>型を返すため、戻り値を<code>int</code>へキャストしています。キャストする代わりに、適切な<code>printf</code>書式指定子を使うこともできます。</p>
<ul>
<li><p><code>sdsempty()</code>関数は、長さが0の空文字列を作成します。</p><pre><code>sds mystring = sdsempty();&#10;printf("%d\n", (int) sdslen(mystring));&#10;&#10;output&gt; 0&#10;</code></pre></li>
<li><p><code>sdsdup()</code>関数は、既存のSDS文字列を複製します。</p><pre><code>sds s1, s2;&#10;&#10;s1 = sdsnew("Hello");&#10;s2 = sdsdup(s1);&#10;printf("%s %s\n", s1, s2);&#10;&#10;output&gt; Hello Hello&#10;</code></pre></li>
</ul>
<h2 id="obtaining-the-string-length">文字列の長さの取得</h2>
<pre><code class="language-c">size_t sdslen(const sds s);&#10;</code></pre>
<p>ここまでの例では、文字列の長さを得るために<code>sdslen</code>関数を使いました。この関数はlibcの<code>strlen</code>と同様に働きますが、次の違いがあります。</p>
<ul>
<li>長さがSDS文字列の接頭部に格納されているため、一定時間で処理できます。したがって、非常に長い文字列でも、<code>sdslen</code>呼び出しの負担は大きくありません。</li>
<li>ほかのSDS文字列関数と同じくバイナリーセーフなので、内容にかかわらず実際の文字列長を返します。途中にNUL終端文字が含まれていても問題ありません。</li>
</ul>
<p>SDS文字列のバイナリーセーフな性質を示すために、次のコードを実行できます。</p>
<pre><code class="language-c">sds s = sdsnewlen("A\0\0B",4);&#10;printf("%d\n", (int) sdslen(s));&#10;&#10;output&gt; 4&#10;</code></pre>
<p>SDS文字列の末尾は常にNUL終端されています。そのため、この場合も<code>s[4]</code>はNUL終端文字です。ただし、<code>printf</code>で文字列を出力すると、libcはSDS文字列を通常のC文字列として扱うため、<code>"A"</code>だけが出力されます。</p>
<h2 id="destroying-strings">文字列の破棄</h2>
<pre><code class="language-c">void sdsfree(sds s);&#10;</code></pre>
<p>SDS文字列を破棄するには、文字列ポインターを渡して<code>sdsfree</code>を呼ぶだけです。ただし、<code>sdsempty</code>で作成した空文字列も破棄する必要があります。そうしないと、メモリーリークになります。</p>
<p><code>sdsfree</code>関数は、SDS文字列のポインターの代わりに<code>NULL</code>を渡した場合、何もしません。したがって、呼び出す前に<code>NULL</code>かどうかを明示的に確認する必要はありません。</p>
<pre><code class="language-c">if (string) sdsfree(string); /* Not needed. */&#10;sdsfree(string); /* Same effect but simpler. */&#10;</code></pre>
<h2 id="concatenating-strings">文字列の連結</h2>
<p>動的なC文字列ライブラリーを使うとき、最もよく行う操作は、文字列へ別の文字列を連結することになるでしょう。SDSには、既存の文字列へ文字列を連結するための複数の関数があります。</p>
<pre><code class="language-c">sds sdscatlen(sds s, const void *t, size_t len);&#10;sds sdscat(sds s, const char *t);&#10;</code></pre>
<p>主な文字列連結関数は<code>sdscatlen</code>と<code>sdscat</code>で、動作は同じです。唯一の違いは、<code>sdscat</code>がNUL終端文字列を想定するため、明示的な長さの引数を持たないことです。</p>
<pre><code class="language-c">sds s = sdsempty();&#10;s = sdscat(s, "Hello ");&#10;s = sdscat(s, "World!");&#10;printf("%s\n", s);&#10;&#10;output&gt; Hello World!&#10;</code></pre>
<p>あるSDS文字列を別のSDS文字列へ連結したい場合があります。この場合、長さを指定する必要はありませんが、連結する文字列にはNUL終端を要求せず、任意のバイナリーデータを含められるようにしたいものです。そのための専用関数があります。</p>
<pre><code class="language-c">sds sdscatsds(sds s, const sds t);&#10;</code></pre>
<p>使い方は簡単です。</p>
<pre><code class="language-c">sds s1 = sdsnew("aaa");&#10;sds s2 = sdsnew("bbb");&#10;s1 = sdscatsds(s1,s2);&#10;sdsfree(s2);&#10;printf("%s\n", s1);&#10;&#10;output&gt; aaabbb&#10;</code></pre>
<p>特定のデータを追加するのではなく、文字列全体が少なくとも指定したバイト数になるようにしたい場合もあります。</p>
<pre><code class="language-c">sds sdsgrowzero(sds s, size_t len);&#10;</code></pre>
<p><code>sdsgrowzero</code>関数は、現在の文字列長がすでに<code>len</code>バイトなら何もせず、それ以外の場合はゼロバイトで埋めて長さを<code>len</code>まで増やします。</p>
<pre><code class="language-c">sds s = sdsnew("Hello");&#10;s = sdsgrowzero(s,6);&#10;s[5] = '!'; /* We are sure this is safe because of sdsgrowzero() */&#10;printf("%s\n', s);&#10;&#10;output&gt; Hello!&#10;</code></pre>
</div>

