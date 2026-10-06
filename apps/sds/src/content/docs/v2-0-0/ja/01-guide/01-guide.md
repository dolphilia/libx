---
title: "概要と設計"
documentId: "sds:01-guide/01-guide.md"
order: 1
licenseSource: "sds-fixed"
documentContext: [{"kind": "source", "html": "<p>SDS 2.0.0; fixed commit f74b9b785b63c6d8ea312d7e7864df5267149c85. Unofficial Libx static edition. The complete README guide is available as8 English and unofficial Japanese units; API comments and headers remain original English, untranslated and outside the full meaning review scope. <a href=\"/docs/sds/notices/LICENSE.txt\">Original README BSD2 licence</a>; code/header BSD3 notices retained separately.</p><p>版メニューの日付は固定コミットのUTC日（2015年7月25日）で、リリース告知日ではありません。原READMEの位置参照は分割前の単一ガイドを指します。<a href=\"/docs/sds/v2-0-0/en/02-reference/01-api-comments/\">英語APIコメント</a>と<a href=\"/docs/sds/v2-0-0/en/02-reference/02-public-header/\">公開ヘッダー原文</a>を参照できます。</p><p>本文は固定版の原文と非公式日本語訳です。原著の記述・例の不備は注記と原典で補い、現在の技術的正しさや例の実行結果を保証しません。コード内コメントは原文を保持しています。<a href=\"/docs/sds/notices/sds.c-notice.txt\">sds.c原通知</a>、<a href=\"/docs/sds/notices/sds.h.txt\">sds.h原通知</a>、<a href=\"/docs/sds/notices/sdsalloc.h.txt\">sdsalloc.h原通知</a>を参照してください。</p>"}, {"kind": "editorial", "html": "<h1 id=\"sds-200\">SDS 2.0.0 原文に関する編集注記</h1>\n<p>Libxの運用方針に基づく固定原資料の編集注記です。原文・コード例は保持しており、ソフトウェアのコード例は実行検証していません。</p>\n<ul>\n<li><strong>内部構造</strong>: READMEのInternalsにある<code>struct sdshdr { int len; int free; char buf[]; }</code>は、固定版のヘッダーで宣言された<code>sdshdr5/8/16/32/64</code>とは異なります。固定版の構造体、flags、len、allocについては<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L42-L75\">固定sds.hの42–75行</a>の原典付録を参照してください。READMEの構造図と説明は原文として保持します。</li>\n<li><strong>結合API</strong>: READMEの<code>sdsjoin</code>宣言と例は4引数です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L250-L251\">固定sds.hの250–251行</a>では<code>sdsjoin</code>は3引数、<code>sdsjoinsds</code>は4引数です。二つのAPIを区別してください。</li>\n<li><strong>トリミング</strong>: READMEは<code>sdstrim</code>を<code>void</code>として掲載していますが、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.h#L237\">固定宣言237行</a>は<code>sds</code>戻り値です。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L668-L695\">固定実装668–695行</a>は再確保せず受け取った<code>s</code>を返します。この関数の原コメントには参照置換の説明があり、入力例<code>HelloWorld</code>に対して出力<code>Hello World</code>と記されています。これらも原文のまま区別して掲載します。</li>\n<li><strong>分割APIコメント</strong>: <a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L778-L806\">固定sds.cの778–806行</a>の<code>sdssplitlen</code>コメントは空文字列の場合もNULLと説明しますが、実装はtokensの割り当てに成功した空入力なら<code>*count = 0</code>でtokensを返します。またコメントにある<code>sdssplit()</code>は固定公開ヘッダーに宣言されていません。<code>sdssplitlen()</code>と同じ公開APIが存在すると推測しないでください。</li>\n<li><strong>組み込みと割当設定</strong>: READMEは<code>sds.c</code>と<code>sds.h</code>のコピーを案内しています。<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sds.c#L38\">固定sds.cの38行</a>は<code>sdsalloc.h</code>をインクルードしており、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/sdsalloc.h\">そのヘッダー全体</a>を原典付録に含めます。</li>\n<li><strong>例の静的な不備</strong>: 固定READMEには<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L305\">305行の引用符不一致</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L416-L429\">416–429行のprintf引数欠落</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L542-L548\">542–548行のs1宣言とsの使用の混在</a>、<a href=\"https://github.com/antirez/sds/blob/f74b9b785b63c6d8ea312d7e7864df5267149c85/README.md#L812-L814\">812–814行のsize_t値に対する%d指定</a>があります。コード例は原文を保持し、そのまま実行できる検証済みプログラムとは扱いません。</li>\n<li><strong>条件の区別</strong>: READMEは原LICENSEのBSD 2-Clauseを明示参照します。一方、採録する<code>sds.c</code>コメント、<code>sds.h</code>、<code>sdsalloc.h</code>には個別のBSD 3-Clause通知があります。各原通知を全文保持し、Redisの名称や貢献者名による推薦・宣伝についての追加条項も省略しません。READMEの条件で個別条件を上書きしません。</li>\n</ul>\n<p>全注釈は固定コミット<code>f74b9b785b63c6d8ea312d7e7864df5267149c85</code>の原文との相違を示すものです。現在のmaster、未実行のソフトウェア挙動、存在未確認のAPIへ一般化しません。</p>"}, {"kind": "source", "html": "<p><a href=\"/docs/sds/source/v2-0-0/source.zip\">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定版9ファイル、英語12ページ・日本語8章の編集原稿、再生成入力、原通知と再構築手順を含みます。各ファイルの原条件を参照してください。</p>"}]
---
<div class="sds-document">
<h1 id="simple-dynamic-strings">Simple Dynamic Strings</h1>
<p><strong>バージョン2について</strong>：これは、Redis、Disque、Hiredis、単独配布版にあるSDSを最終的に統一するための更新版です。SDSバージョン1との<strong>バイナリー互換性はありません</strong>が、APIは99%互換なので、新しいライブラリーへの切り替えは容易なはずです。</p>
<p>この版のSDSは、処理内容によっては遅くなる場合があります。ただし、ヘッダーのサイズが可変で、確保する文字列に応じて決まるため、V1よりメモリー使用量が少なくなります。</p>
<p>さらに、API関数もいくつか追加されています。特に<code>sdscatfmt</code>は<code>sdscatprintf</code>の高速版で、単純なケースに使うことで、libcの<code>printf</code>系関数による性能上の負担を避けられます。</p>
<h1 id="how-sds-stirngs-work">SDS文字列の仕組み</h1>
<p>SDSは、libcの限られた文字列処理機能を補うためのC言語用文字列ライブラリーです。ヒープ上に確保した文字列に、次の性質を持たせます。</p>
<ul>
<li>使い方が簡単。</li>
<li>バイナリーセーフ。</li>
<li>計算効率が高い。</li>
<li>それでいて、通常のC文字列関数と互換性がある。</li>
</ul>
<p>これを実現するため、文字列をCの構造体で表す代わりに、SDSが利用者へ返す文字列ポインターの直前にバイナリーの接頭部を格納する、別の設計を採用しています。</p>
<pre><code>+--------+-------------------------------+-----------+&#10;| Header | Binary safe C alike string... | Null term |&#10;+--------+-------------------------------+-----------+&#10;         |&#10;         `-&gt; Pointer returned to the user.&#10;</code></pre>
<p>返すポインターの直前の接頭部にメタデータを格納し、実際の内容にかかわらず、すべてのSDS文字列の末尾に暗黙にNUL終端を追加します。そのため、SDS文字列はC文字列と組み合わせやすく、文字列を読み取るだけの関数では、両者を自由に置き換えて使えます。</p>
<p>SDSは、私が日々のCプログラミングのために以前開発したC文字列ライブラリーです。その後Redisへ移され、広く使われるようになり、高性能な処理に適するよう変更されました。今回Redisから切り出し、独立したプロジェクトとしてフォークしました。</p>
<p>Redis内で長年使われてきたため、SDSにはCで文字列を簡単に操作するための高水準の関数と、高水準の文字列ライブラリーを使う負担をかけずに高性能なコードを書くための低水準の関数群の両方があります。</p>
<h1 id="advantages-and-disadvantages-of-sds">SDSの長所と短所</h1>
<p>C言語用の動的文字列ライブラリーは、通常、文字列を定義する構造体で実装されます。この構造体には、文字列関数が管理するポインターフィールドがあり、次のようになります。</p>
<pre><code class="language-c">struct yourAverageStringLibrary {&#10;    char *buf;&#10;    size_t len;&#10;    ... possibly more fields here ...&#10;};&#10;</code></pre>
<p>前述のとおり、SDS文字列はこの方式を使いません。代わりに一度のメモリー確保で構成され、文字列として実際に返すアドレスの<em>前</em>に接頭部を置きます。</p>
<p>この方式には、従来の方式に比べて長所と短所があります。</p>
<p><strong>短所1</strong>：SDSでは、ときに容量を増やした新しい文字列を作る必要があるため、多くの関数が新しい文字列を戻り値として返します。そのため、大半のSDS API呼び出しは次の形になります。</p>
<pre><code class="language-c">s = sdscat(s,"Some more data");&#10;</code></pre>
<p>このように、<code>s</code>は<code>sdscat</code>への入力であると同時に、SDS API呼び出しの戻り値を代入する先でもあります。呼び出しが渡したSDS文字列を変更したのか、新しい文字列を確保したのかが分からないためです。<code>sdscat</code>などの戻り値を、SDS文字列を保持する変数へ代入し直すのを忘れると、バグになります。</p>
<p><strong>短所2</strong>：プログラム内の複数の場所でSDS文字列を共有している場合、文字列を変更するときには、すべての参照を更新する必要があります。ただし、SDS文字列の共有が必要な場合には、たいてい<code>reference count</code>を持つ構造体へ格納するほうが適切です。そうしないと、メモリーリークが起きやすくなります。</p>
<p><strong>長所1</strong>：構造体のメンバーにアクセスしたり、関数を呼んだりせずに、C文字列用の関数へSDS文字列を直接渡せます。次のように使います。</p>
<pre><code class="language-c">printf("%s\n", sds_string);&#10;</code></pre>
<p>ほかの大半のライブラリーでは、次のような形になります。</p>
<pre><code class="language-c">printf("%s\n", string-&gt;buf);&#10;</code></pre>
<p>または、次の形です。</p>
<pre><code class="language-c">printf("%s\n", getStringPointer(string));&#10;</code></pre>
<p><strong>長所2</strong>：個々の文字へのアクセスが簡単です。Cは低水準の言語なので、多くのプログラムでこれは重要な操作です。SDS文字列では、個々の文字にとても自然にアクセスできます。</p>
<pre><code class="language-c">printf("%c %c\n", s[0], s[1]);&#10;</code></pre>
<p>ほかのライブラリーでは、<code>string-&gt;buf</code>を<code>char</code>ポインターへ代入するか、文字列ポインターを取得する関数を呼び、そのポインターで処理するのが最善でしょう。ただし、そうしたライブラリーは、文字列を変更し得る関数を呼ぶたびに、暗黙にバッファーを再確保する可能性があります。そのため、バッファーへの参照を取り直す必要があります。</p>
<p><strong>長所3</strong>：一度のメモリー確保により、キャッシュ局所性が良くなります。構造体を使う文字列ライブラリーでは、通常、文字列を表す構造体と、実際の文字列を保持するバッファーを別々に確保します。時間がたつにつれてバッファーが再確保され、構造体とはまったく異なるメモリー領域へ移る可能性があります。現代のプログラムの性能はキャッシュミスに左右されることが多いため、SDSは多くの処理で、より良い性能を発揮する可能性があります。</p>
</div>

