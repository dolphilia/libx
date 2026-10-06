---
title: "切り詰め・範囲・コピー・引用"
documentId: "sds:01-guide/04-guide.md"
order: 4
licenseSource: "sds-fixed"
documentContext: [{"kind": "source", "html": "<p>SDS 2.0.0; fixed commit f74b9b785b63c6d8ea312d7e7864df5267149c85. Unofficial Libx static edition. The complete README guide is available as8 English and unofficial Japanese units; API comments and headers remain original English, untranslated and outside the full meaning review scope. <a href=\"/docs/sds/notices/LICENSE.txt\">Original README BSD2 licence</a>; code/header BSD3 notices retained separately.</p><p>版メニューの日付は固定コミットのUTC日（2015年7月25日）で、リリース告知日ではありません。原READMEの位置参照は分割前の単一ガイドを指します。<a href=\"/docs/sds/v2-0-0/en/02-reference/01-api-comments/\">英語APIコメント</a>と<a href=\"/docs/sds/v2-0-0/en/02-reference/02-public-header/\">公開ヘッダー原文</a>を参照できます。</p><p>本文は固定版の原文と非公式日本語訳です。原著の記述・例の不備は注記と原典で補い、現在の技術的正しさや例の実行結果を保証しません。コード内コメントは原文を保持しています。<a href=\"/docs/sds/notices/sds.c-notice.txt\">sds.c原通知</a>、<a href=\"/docs/sds/notices/sds.h.txt\">sds.h原通知</a>、<a href=\"/docs/sds/notices/sdsalloc.h.txt\">sdsalloc.h原通知</a>を参照してください。</p>"}, {"kind": "editorial", "html": "<h1 id=\"sds-200\">SDS 2.0.0 原文に関する編集注記</h1>\n<p>Libxの運用方針に基づく固定原資料の編集注記です。原文・コード例は保持しており、ソフトウェアのコード例は実行検証していません。</p>\n<ul>\n<li><strong>内部構造</strong>: READMEのInternalsにある<code>struct sdshdr { int len; int free; char buf[]; }</code>は、固定版のヘッダーで宣言された<code>sdshdr5/8/16/32/64</code>とは異なります。固定版の構造体、flags、len、allocについては<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L42-L75\">固定sds.hの42–75行</a>の原典付録を参照してください。READMEの構造図と説明は原文として保持します。</li>\n<li><strong>結合API</strong>: READMEの<code>sdsjoin</code>宣言と例は4引数です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L250-L251\">固定sds.hの250–251行</a>では<code>sdsjoin</code>は3引数、<code>sdsjoinsds</code>は4引数です。二つのAPIを区別してください。</li>\n<li><strong>トリミング</strong>: READMEは<code>sdstrim</code>を<code>void</code>として掲載していますが、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L237\">固定宣言237行</a>は<code>sds</code>戻り値です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L668-L695\">固定実装668–695行</a>は再確保せず受け取った<code>s</code>を返します。この関数の原コメントには参照置換の説明があり、入力例<code>HelloWorld</code>に対して出力<code>Hello World</code>と記されています。これらも原文のまま区別して掲載します。</li>\n<li><strong>分割APIコメント</strong>: <a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L778-L806\">固定sds.cの778–806行</a>の<code>sdssplitlen</code>コメントは空文字列の場合もNULLと説明しますが、実装はtokensの割り当てに成功した空入力なら<code>*count = 0</code>でtokensを返します。またコメントにある<code>sdssplit()</code>は固定公開ヘッダーに宣言されていません。<code>sdssplitlen()</code>と同じ公開APIが存在すると推測しないでください。</li>\n<li><strong>組み込みと割当設定</strong>: READMEは<code>sds.c</code>と<code>sds.h</code>のコピーを案内しています。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L38\">固定sds.cの38行</a>は<code>sdsalloc.h</code>をインクルードしており、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sdsalloc.h\">そのヘッダー全体</a>を原典付録に含めます。</li>\n<li><strong>例の静的な不備</strong>: 固定READMEには<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L305\">305行の引用符不一致</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L416-L429\">416–429行のprintf引数欠落</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L542-L548\">542–548行のs1宣言とsの使用の混在</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L812-L814\">812–814行のsize_t値に対する%d指定</a>があります。コード例は原文を保持し、そのまま実行できる検証済みプログラムとは扱いません。</li>\n<li><strong>条件の区別</strong>: READMEは原LICENSEのBSD 2-Clauseを明示参照します。一方、採録する<code>sds.c</code>コメント、<code>sds.h</code>、<code>sdsalloc.h</code>には個別のBSD 3-Clause通知があります。各原通知を全文保持し、Redisの名称や貢献者名による推薦・宣伝についての追加条項も省略しません。READMEの条件で個別条件を上書きしません。</li>\n</ul>\n<p>全注釈は固定コミット<code>f74b9b785b63c6d8ea312d7e7864df5267149c85</code>の原文との相違を示すものです。現在のmaster、未実行のソフトウェア挙動、存在未確認のAPIへ一般化しません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/sds/source/v2-0-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定版9ファイル、英語12ページ・日本語8章の編集原稿、再生成入力、原通知と再構築手順を含みます。各ファイルの原条件を参照してください。</p>"}]
---
<div class="sds-document">
<h2 id="trimming-strings-and-getting-ranges">文字列のトリミングと範囲の取得</h2>
<p>文字列のトリミングは、指定した文字の集合を文字列の左端と右端から取り除く、よく使う操作です。長い文字列から一部分だけを取り出すことも、便利な文字列操作です。</p>
<pre><code class="language-c">void sdstrim(sds s, const char *cset);&#10;void sdsrange(sds s, int start, int end);&#10;</code></pre>
<p>SDSは、<code>sdstrim</code>と<code>sdsrange</code>関数で、この両方の操作を提供します。ただし、両関数は、SDS文字列を変更する大半の関数とは異なり、戻り値はnullです。基本的には、渡されたSDS文字列を常に破壊的に変更し、新しい文字列を確保することはありません。トリミングと範囲の取得はいずれも元の文字列から文字を取り除くだけなので、追加の容量を必要としないためです。</p>
<p>このため、両関数は高速で、再確保を伴いません。</p>
<p>次は、SDS文字列から改行と空白を取り除くトリミングの例です。</p>
<pre><code class="language-c">sds s = sdsnew("         my string\n\n  ");&#10;sdstrim(s," \n");&#10;printf("-%s-\n",s);&#10;&#10;output&gt; -my string-&#10;</code></pre>
<p><code>sdstrim</code>は、第1引数にトリミングするSDS文字列を受け取り、次に、文字列の左端と右端から取り除く文字の集合をNUL終端文字列として受け取ります。指定した集合にない文字が現れるまで、文字を取り除きます。そのため、前の例では<code>"my"</code>と<code>"string"</code>の間の空白が残ります。</p>
<p>範囲の取得も同様ですが、文字の集合ではなく、文字列内の0始まりのインデックスで開始位置と終了位置を指定し、残す範囲を決めます。</p>
<pre><code class="language-c">sds s = sdsnew("Hello World!");&#10;sdsrange(s,1,4);&#10;printf("-%s-\n");&#10;&#10;output&gt; -ello-&#10;</code></pre>
<p>インデックスを負数にすると、文字列の末尾から数えた位置を指定できます。<code>-1</code>は最後の文字、<code>-2</code>は最後から2番目の文字を表します。</p>
<pre><code class="language-c">sds s = sdsnew("Hello World!");&#10;sdsrange(s,6,-1);&#10;printf("-%s-\n");&#10;sdsrange(s,0,-2);&#10;printf("-%s-\n");&#10;&#10;output&gt; -World!-&#10;output&gt; -World-&#10;</code></pre>
<p><code>sdsrange</code>は、プロトコルを処理したり、メッセージを送ったりするネットワークサーバーの実装にとても便利です。たとえば、次のコードは、Redis Clusterのノード間メッセージバスの書き込みハンドラーで使われています。</p>
<pre><code class="language-c">void clusterWriteHandler(..., int fd, void *privdata, ...) {&#10;    clusterLink *link = (clusterLink*) privdata;&#10;    ssize_t nwritten = write(fd, link-&gt;sndbuf, sdslen(link-&gt;sndbuf));&#10;    if (nwritten &lt;= 0) {&#10;        /* Error handling... */&#10;    }&#10;    sdsrange(link-&gt;sndbuf,nwritten,-1);&#10;    ... more code here ...&#10;}&#10;</code></pre>
<p>送信先ノードのソケットが書き込み可能になるたびに、できるだけ多くのバイトを書き込もうとします。そして、<code>sdsrange</code>を使い、送信済みの部分をバッファーから取り除きます。</p>
<p>クラスター内のノードへ送る新しいメッセージをキューへ入れる関数は、<code>sdscatlen</code>を使って、送信バッファーへデータを追加するだけです。</p>
<p>Redis Clusterのバスはバイナリープロトコルを実装していますが、SDSはバイナリーセーフなので問題ありません。このように、SDSの目的は、Cプログラマーへ高水準の文字列APIを提供することだけではなく、管理しやすい動的確保バッファーを提供することでもあります。</p>
<h2 id="string-copying">文字列のコピー</h2>
<p>C標準ライブラリーで最も危険で悪名高い関数は、おそらく<code>strcpy</code>でしょう。より良く設計された動的文字列ライブラリーでは、文字列のコピーという概念がほぼ不要になるのは、面白いことかもしれません。通常は、必要な内容を持つ文字列を作成したり、必要に応じて内容を追加したりします。</p>
<p>それでも、SDSには性能が重要なコード部分で役立つ文字列コピー関数があります。ただ、5万行からなるRedisのコードベースでは一度も呼ばれなかったため、実用上の用途は限られているのではないかと思います。</p>
<pre><code class="language-c">sds sdscpylen(sds s, const char *t, size_t len);&#10;sds sdscpy(sds s, const char *t);&#10;</code></pre>
<p>SDSの文字列コピー関数は<code>sdscpylen</code>と呼ばれ、次のように動作します。</p>
<pre><code class="language-c">s = sdsnew("Hello World!");&#10;s = sdscpylen(s,"Hello Superman!",15);&#10;</code></pre>
<p>このように、関数は入力としてSDS文字列<code>s</code>を受け取りますが、SDS文字列を戻り値としても返します。これは文字列を変更する多くのSDS関数に共通しています。戻り値は、変更した元のSDS文字列の場合も、新しく確保した文字列の場合もあります。たとえば、元のSDS文字列に十分な容量がなければ、新しい文字列を確保します。</p>
<p><code>sdscpylen</code>は、元のSDS文字列の内容を、ポインターと長さの引数で渡した新しいデータへ置き換えるだけです。<code>sdscpy</code>という同様の関数もあり、こちらは長さを必要とせず、代わりにNUL終端文字列を想定します。</p>
<p>既存のSDS文字列へ値をコピーしなくても、新しい値からSDS文字列を作り直せるのに、コピー関数を用意する理由があるのかと思うかもしれません。理由は効率です。<code>sdsnewlen</code>は常に新しい文字列を確保します。一方、<code>sdscpylen</code>は、利用者が指定した新しい内容を保持するだけの容量があれば、既存の文字列の再利用を試み、必要な場合にだけ新しい文字列を確保します。</p>
<h2 id="quoting-strings">文字列の引用表現</h2>
<p>利用者へ一貫した出力を提供するためや、デバッグのために、バイナリーデータや特殊文字を含む可能性がある文字列を、引用表現へ変換することがよくあります。ここでいう引用表現は、プログラムのソースコードで文字列リテラルに使われる一般的な形式です。現在ではJSONやCSVなどのよく知られたシリアライズ形式にも含まれているため、プログラム内の文字列リテラルを表すという用途を超えています。</p>
<p>引用表現の文字列リテラルの例です。</p>
<pre><code class="language-c">"\x00Hello World\n"&#10;</code></pre>
<p>最初のバイトはゼロバイト、最後のバイトは改行なので、この文字列には英数字以外の文字が2つあります。</p>
<p>SDSはこの目的に連結関数を使い、入力文字列の引用表現を既存の文字列へ連結します。</p>
<pre><code class="language-c">sds sdscatrepr(sds s, const char *p, size_t len);&#10;</code></pre>
<p><code>scscatrepr</code>の<code>repr</code>は<em>representation（表現）</em>の意味です。この関数は、通常のSDS文字列関数の規則に従い、文字ポインターと長さを受け取ります。したがって、SDS文字列、<code>len</code>引数にstrlen()を使った通常のC文字列、バイナリーデータのいずれにも使えます。次は使用例です。</p>
<pre><code class="language-c">sds s1 = sdsnew("abcd");&#10;sds s2 = sdsempty();&#10;s[1] = 1;&#10;s[2] = 2;&#10;s[3] = '\n';&#10;s2 = sdscatrepr(s2,s1,sdslen(s1));&#10;printf("%s\n", s2);&#10;&#10;output&gt; "a\x01\x02\n"&#10;</code></pre>
<p><code>sdscatrepr</code>は、次の規則で変換します。</p>
<ul>
<li><code>\</code>と<code>"</code>は、バックスラッシュでエスケープします。</li>
<li>特殊文字<code>'\n'</code>、<code>'\r'</code>、<code>'\t'</code>、<code>'\a'</code>、<code>'\b'</code>をエスケープします。</li>
<li><code>isprint</code>の検査に通らない、ほかのすべての非表示文字は、<code>\x..</code>形式でエスケープします。これは、バックスラッシュ、<code>x</code>、文字のバイト値を表す2桁の16進数の順に並べた形式です。</li>
<li>関数は常に、先頭と末尾に二重引用符を追加します。</li>
</ul>
<p>SDSには逆変換を行う関数もあり、後の<em>トークン化</em>の節で説明します。</p>
</div>

