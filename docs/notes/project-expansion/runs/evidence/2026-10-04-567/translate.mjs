import fs from 'node:fs';import assert from 'node:assert/strict';import{createHash}from'node:crypto';import{createRequire}from'node:module';
const r='/Users/dolphilia/github/libx',w='/private/tmp/libx-gperf-import-20261004',note='docs/notes/document-import/gperf/3.3/translations/guide-sections',ev='docs/notes/project-expansion/runs/evidence/2026-10-04-567',original=fs.readFileSync(w+'/docs/notes/document-import/gperf/3.3/sources/gperf-3.3/doc/gperf.html','utf8'),sha=s=>createHash('sha256').update(s).digest('hex'),section=n=>{const a=original.search(new RegExp('<H[1-6]><A NAME="SEC'+n+'"')),b=n===28?original.indexOf('</BODY>'):original.search(new RegExp('<H[1-6]><A NAME="SEC'+(n+1)+'"'));assert(a>=0&&b>a);return original.slice(a,b);},fix=s=>s.replace(/HREF="gperf\.html#/g,'HREF="#'),declPrefix=n=>fix(section(n).slice(0,section(n).indexOf('<DL COMPACT>'))).replace(/(<A NAME="SEC\d+" HREF="[^"]+">)[\s\S]*?(<\/A><\/H2>)/,(_,a,b)=>a+({22:'5.4 出力コードの詳細を調整するオプション',23:'5.5 <CODE>gperf</CODE>が使うアルゴリズムを変更するオプション',24:'5.6 情報の出力'}[n])+b).replace(/Most of these options[\s\S]*?(?=<\/P>)/,'これらのオプションの多くは、入力ファイルの宣言としても指定できます（<A HREF="#SEC9">4.1.1.2 Gperfの宣言</A>を参照）。\n');
function options(n,translations){let i=0,s=section(n),dl=s.slice(s.indexOf('<DL COMPACT>'));dl=dl.replace(/<DD>([\s\S]*?)(?=<DT>|<\/DL>)/g,(m,body)=>{if(!body.trim())return m;assert(i<translations.length,n+' too few translations');const anchors=(body.match(/<A NAME="[^"]+"><\/A>/g)||[]).join('');return '<DD>\n'+anchors+translations[i++]+'\n\n';});assert.equal(i,translations.length,n+' extra translations');return declPrefix(n)+fix(dl);}
const translations={SEC18:`<H1><A NAME="SEC18" HREF="#TOC18">5 <CODE>gperf</CODE>の実行</A></H1>
<P><CODE>gperf</CODE>には<EM>多数の</EM>オプションがあります。実際のアプリケーションでプログラムを便利に使えるようにするために追加されました。<SAMP>&lsquo;--help&rsquo;</SAMP>オプションで、いつでも実行時のヘルプを参照できます。以下にオプションの一覧を示します。</P>
`,SEC19:`<H2><A NAME="SEC19" HREF="#TOC19">5.1 出力ファイルの場所の指定</A></H2>
<DL COMPACT><DT><SAMP>&lsquo;--output-file=<VAR>file</VAR>&rsquo;</SAMP><DD>出力を書き込むファイルの名前を指定できます。</DL>
<P>出力ファイルを指定しない場合、または<SAMP>&lsquo;-&rsquo;</SAMP>を指定した場合、結果は標準出力に書き込まれます。</P>
`,SEC20:`<H2><A NAME="SEC20" HREF="#TOC20">5.2 入力ファイルの解釈に影響するオプション</A></H2>
<P>これらのオプションは、入力ファイルの宣言としても指定できます（<A HREF="#SEC9">4.1.1.2 Gperfの宣言</A>を参照）。</P>
<DL COMPACT>
<DT><SAMP>&lsquo;-e <VAR>keyword-delimiter-list</VAR>&rsquo;</SAMP><DD>
<DT><SAMP>&lsquo;--delimiters=<VAR>keyword-delimiter-list</VAR>&rsquo;</SAMP><DD><A NAME="IDX41"></A>キーワードとその属性を区切るための区切り文字を含む文字列を指定できます。デフォルトは「,」です。カンマや改行を含むキーワードを使うには、このオプションが必要です。便利な方法として、-e'TAB'を使うことができます。ここでTABは、実際のタブ文字を表します。
<DT><SAMP>&lsquo;-t&rsquo;</SAMP><DD>
<DT><SAMP>&lsquo;--struct-type&rsquo;</SAMP><DD>生成コードに<CODE>struct</CODE>型の宣言を含められます。連続する2つの<SAMP>&lsquo;%%&rsquo;</SAMP>より前のテキストはすべて、型宣言の一部とみなされます。その後にキーワードと追加のフィールドを記述でき、1行につきフィールドの組を1つ置きます。このリリースには、Ada、C、C++、Pascal、Modula 2、Modula 3、JavaScriptの予約語に対して完全ハッシュテーブルと関数を生成する例が含まれています。
<DT><SAMP>&lsquo;--ignore-case&rsquo;</SAMP><DD>ASCII文字の大文字と小文字を同等とみなします。文字列の比較では、大文字と小文字を区別せずに文字を比較します。ロケールに依存する大文字・小文字の対応は無視されることに注意してください。そのため、適切に国際化された、またはロケールを考慮した大文字・小文字の対応を使う必要がある場合、このオプションは適していません。たとえば、トルコ語ロケールでは、ASCIIの小文字<SAMP>&lsquo;i&rsquo;</SAMP>に対応する大文字は、非ASCII文字の<SAMP>&lsquo;capital i with dot above&rsquo;</SAMP>、つまり上に点が付いた大文字Iです。この場合、<CODE>gperf</CODE>の生成関数に文字列を渡す前に、大文字または小文字への変換を行う方が適切です。
</DL>
`,SEC21:`<H2><A NAME="SEC21" HREF="#TOC21">5.3 出力コードの言語を指定するオプション</A></H2>
<P>これらのオプションは、入力ファイルの宣言としても指定できます（<A HREF="#SEC9">4.1.1.2 Gperfの宣言</A>を参照）。</P>
<DL COMPACT>
<DT><SAMP>&lsquo;-L <VAR>generated-language-name</VAR>&rsquo;</SAMP><DD>
<DT><SAMP>&lsquo;--language=<VAR>generated-language-name</VAR>&rsquo;</SAMP><DD>オプションの引数で指定した言語のコードを生成するよう、<CODE>gperf</CODE>に指示します。現在対応している言語は次のとおりです。
<DL COMPACT>
<DT><SAMP>&lsquo;KR-C&rsquo;</SAMP><DD>旧式のK&#38;R Cです。旧式のCコンパイラとANSI Cコンパイラで処理できますが、ANSI Cコンパイラでは<SAMP>&lsquo;const&rsquo;</SAMP>がないため、警告やエラーが出ることがあります。
<DT><SAMP>&lsquo;C&rsquo;</SAMP><DD>共通のCです。ANSI Cコンパイラで処理できます。また、このキーワードを認識しないコンパイラ向けに<CODE>#define const</CODE>で空の定義を与えれば、旧式のCコンパイラでも処理できます。
<DT><SAMP>&lsquo;ANSI-C&rsquo;</SAMP><DD>ANSI Cです。ANSI CコンパイラとC++コンパイラで処理できます。
<DT><SAMP>&lsquo;C++&rsquo;</SAMP><DD>C++です。C++コンパイラで処理できます。
</DL>
デフォルトはANSI-Cです。
<DT><SAMP>&lsquo;-a&rsquo;</SAMP><DD>このオプションは、以前の<CODE>gperf</CODE>リリースとの互換性のためにサポートされています。何も行いません。
<DT><SAMP>&lsquo;-g&rsquo;</SAMP><DD>このオプションは、以前の<CODE>gperf</CODE>リリースとの互換性のためにサポートされています。何も行いません。
</DL>
`,SEC22:options(22,[
`このオプションが役立つのは、<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言を指定した場合だけです。デフォルトでは、キーワードを格納する構造体メンバーの識別子を<SAMP>&lsquo;name&rsquo;</SAMP>とみなします。このオプションで、そのメンバーの識別子を任意に選べます。ただし、指定した<CODE>struct</CODE>の最初のフィールドでなければならない点は変わりません。`,
`このオプションが役立つのは、<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言を指定した場合だけです。空のハッシュテーブル項目で、<VAR>slot-name</VAR>より後にある構造体メンバーの初期化子を指定できます。初期化子の一覧はカンマで始める必要があります。デフォルトでは、出力コードは<VAR>slot-name</VAR>より後の構造体メンバーをゼロで初期化します。`,
`生成するハッシュ関数の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;hash&rsquo;</SAMP>です。このオプションにより、同じファイル内で2つのハッシュテーブルを使えます。`,
`生成する検索関数の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;in_word_set&rsquo;</SAMP>です。このオプションにより、生成した複数のハッシュ関数を同じアプリケーションで使えます。`,
`このオプションが役立つのは、<SAMP>&lsquo;-L C++&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%language=C++&rsquo;</SAMP>宣言を指定した場合だけです。生成するC++クラスの名前を指定できます。デフォルトの名前は<CODE>Perfect_Hash</CODE>です。`,
`生成するハッシュ関数と検索関数に引数として渡す文字列がすべて、7ビットASCII文字（0..127の範囲のバイト）だけで構成されることを指定します。ANSI Cの<CODE>isalnum</CODE>関数や<CODE>isgraph</CODE>関数は、バイトがこの範囲内にあることを保証<EM>しません</EM>。これを保証するのは、<SAMP>&lsquo;c &#62;= 'A' &#38;&#38; c &#60;= 'Z'&rsquo;</SAMP>のような明示的な検査だけです。これは2.7より前の<CODE>gperf</CODE>のデフォルトでしたが、現在は8ビット文字とマルチバイト文字のサポートがデフォルトです。`,
`文字列の比較を試みる前に、キーワードの長さを比較します。このオプションはバイナリ比較には必須です（<A HREF="#SEC15">4.3 NULバイトの使用</A>を参照）。長さの異なるキーワードを<CODE>strcmp</CODE>で比較しなくなるため、検索時の文字列比較の回数を減らせる場合もあります。ただし、検索テーブルの範囲が大きい場合、つまりswitchオプションの<SAMP>&lsquo;-S&rsquo;</SAMP>または<SAMP>&lsquo;%switch&rsquo;</SAMP>が有効でない場合は、<SAMP>&lsquo;-l&rsquo;</SAMP>を使うと生成するCコードのサイズが大幅に増える可能性があります。長さのテーブルが、検索テーブルの項目数と同じ数の要素を持つためです。`,
`文字列比較に<CODE>strncmp</CODE>関数を使うCコードを生成します。デフォルトでは<CODE>strcmp</CODE>を使います。`,
`生成するすべての検索テーブルの内容を定数、つまり「読み取り専用」にします。多くのコンパイラでは、テーブルを読み取り専用メモリに置くことで、より効率のよいコードを生成できます。`,
`#defineの代わりに、検索関数内のローカルなenumを使って定数値を定義します。これにより、異なる検索関数を同じファイル内に置くこともできます。James Clark <CODE>&#60;jjc@ai.mit.edu&#62;</CODE>に感謝します。`,
`コードの先頭に、必要なシステムのインクルードファイル<CODE>&#60;string.h&#62;</CODE>を含めます。デフォルトでは含めないため、コードをコンパイルできるように、利用者自身がこのヘッダーファイルをインクルードする必要があります。`,
`キーワードの静的テーブルを、検索関数の中に隠すデフォルトの動作ではなく、静的なグローバル変数として生成します。`,
`生成するテーブルを、共有ライブラリに組み込むために最適化します。生成コードを含む共有ライブラリを使うプログラムの起動時間を短縮します。<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言も指定した場合、利用者が定義するstructの最初のフィールドの型は、<SAMP>&lsquo;char *&rsquo;</SAMP>ではなく<SAMP>&lsquo;int&rsquo;</SAMP>でなければなりません。実際の文字列ではなく、文字列プール内のオフセットを格納するためです。そのオフセットを文字列に変換するには、<SAMP>&lsquo;stringpool + <VAR>o</VAR>&rsquo;</SAMP>という式を使えます。<VAR>o</VAR>はオフセットです。文字列プールの名前は、<SAMP>&lsquo;--string-pool-name&rsquo;</SAMP>オプションで変更できます。`,
`<SAMP>&lsquo;-P&rsquo;</SAMP>オプションによって作る文字列プールの名前を指定できます。デフォルトの名前は<SAMP>&lsquo;stringpool&rsquo;</SAMP>です。このオプションにより、<SAMP>&lsquo;-P&rsquo;</SAMP>を使う場合に同じファイル内で2つのハッシュテーブルを使えます。<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を指定した場合でも使えます。`,
`空のキーワードテーブル項目に、空文字列の代わりにNULL文字列を使います。実行時に検査と分岐の命令が1つ増えますが、生成コードを含む共有ライブラリを使うプログラムの起動時間を短縮します。ただし、<SAMP>&lsquo;-P&rsquo;</SAMP>オプションほどの効果はありません。`,
`<CODE>TOTAL_KEYWORDS</CODE>、<CODE>MIN_WORD_LENGTH</CODE>、<CODE>MAX_WORD_LENGTH</CODE>などの定数に付ける接頭辞を指定できます。このオプションにより、<SAMP>&lsquo;-E&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%enum&rsquo;</SAMP>宣言を指定しない場合や、<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を指定した場合でも、同じファイル内で2つのハッシュテーブルを使えます。`,
`ハッシュテーブルを格納する生成配列の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;wordlist&rsquo;</SAMP>です。このオプションにより、<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を指定した場合でも、同じファイル内で2つのハッシュテーブルを使えます。`,
`長さのテーブルを格納する生成配列の名前を指定できます。デフォルトの名前は<SAMP>&lsquo;lengthtable&rsquo;</SAMP>です。このオプションにより、<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を指定した場合でも、同じファイル内で2つの長さのテーブルを使えます。`,
`生成するCコードで、配列の検索テーブルの代わりに<CODE>switch</CODE>文方式を使います。入力ファイルによっては、必要な実行時間と記憶領域の両方を減らせます。このオプションの引数は、生成する<CODE>switch</CODE>文の数を指定します。値が1なら全要素を含む1つの<CODE>switch</CODE>を生成し、値が2なら各<CODE>switch</CODE>に要素の半分ずつを含む2つのテーブルを生成します。ほかの値でも同様です。多くのCコンパイラは、大きな<CODE>switch</CODE>文のコードを正しく生成できないため、この指定が役立ちます。このオプションは、Keith Bosticによる元のCプログラムからも着想を得ました。`,
`型の宣言を出力ファイルへ転送しないようにします。型がすでにほかの場所で定義されている場合に使ってください。`,
`このオプションは、以前の<CODE>gperf</CODE>リリースとの互換性のためにサポートされています。何も行いません。`
]),SEC23:options(23,[
`キーワードのハッシュ関数で使うバイト位置を選択できます。指定できる位置は1から255までです。位置は<SAMP>&lsquo;-k 9,4,13,14&rsquo;</SAMP>のようにカンマで区切り、<SAMP>&lsquo;-k 2-7&rsquo;</SAMP>のように範囲でも指定できます。順序は任意です。また、ワイルドカード「*」を指定すると、生成するハッシュ関数は各キーワードの<STRONG>すべての</STRONG>バイト位置を使用します。「$」は、キーワードの「最後のバイト」を使うよう指示します。なお、これは255より大きいバイト位置を使う唯一の方法です。たとえば、<SAMP>&lsquo;-k 1,2,4,6-10,'$'&rsquo;</SAMP>では、位置1、2、4、6、7、8、9、10と、各キーワードの最後のバイトを使うハッシュ関数を生成します。最後のバイトの位置は当然、キーワードごとに異なる場合があります。指定位置より短いキーワードでも正常に動作します。キーワードの長さを超える指定位置は、ハッシュ関数で単に参照されないためです。<CODE>gperf</CODE>のバージョン2.8以降、通常このオプションは不要です。デフォルトのバイト位置は、キーワード集合に応じて、使用する位置の数を最小化する探索によって計算されます。`,
`選択したバイト集合のハッシュ値が重複するキーワードを処理します。同じ名前で属性が異なるキーワードがある場合や、選択したバイト位置が適切でない場合に、ハッシュ値が重複することがあります。-Dオプションを使うと、<CODE>gperf</CODE>はこれらのキーワードをすべて同じ同値類に含め、重複するキーワードに対して複数回の比較を行う完全ハッシュ関数を生成します。キーワードを完全に区別するために生成したCコードを変更する作業は、利用者が行う必要があります。ただし、<CODE>gperf</CODE>は出力を整理することで、その作業を助けます。このオプションを使うと、通常、生成するハッシュ関数は完全ではなくなります。一方で、<CODE>gperf</CODE>がほかの方法では扱えないキーワード集合を処理できるようになります。`,
`<SAMP>&lsquo;-i&rsquo;</SAMP>と<SAMP>&lsquo;-j&rsquo;</SAMP>の値を複数通り試し、最良の結果を選びます。実行時間は<VAR>iterations</VAR>倍になりますが、生成するテーブルのサイズを小さくするのに効果があります。`,
`関連値配列の初期<VAR>value</VAR>を指定します。デフォルトは0です。初期値を大きくすると最終的なテーブルサイズが増え、キーワード検索の時間効率がよくなる可能性があります。ただし、<SAMP>&lsquo;-S&rsquo;</SAMP>、または同じ働きをする<SAMP>&lsquo;%switch&rsquo;</SAMP>を使う場合、このオプションは特に有用ではありません。また、<SAMP>&lsquo;-r&rsquo;</SAMP>オプションを使うと、<SAMP>&lsquo;-i&rsquo;</SAMP>の指定より優先されます。`,
`「ジャンプ値」、つまり衝突時に関連バイト値をどれだけ進めるかに影響します。<VAR>Jump-value</VAR>は奇数に切り上げられ、デフォルトは5です。<VAR>jump-value</VAR>が0の場合、<CODE>gperf</CODE>はランダムな幅でジャンプします。`,
`ハッシュ値の計算にキーワードの長さを含めないよう、生成器に指示します。生成する検索テーブルで、アセンブリ命令を数個節約できる場合があります。`,
`関連値テーブルの初期化に乱数を使います。すべての関連値を0から始める決定的な初期化よりも、速く解が得られることがよくあります。また、ランダム化オプションを使うと、一般にテーブルのサイズが大きくなります。`,
`生成するハッシュテーブルのサイズに影響します。このオプションの数値引数は、関連値の最大範囲をキーワードの数に対して「何倍大きく、または小さく」するかを示します。整数、浮動小数点数、分数で記述できます。たとえば、値が3なら「関連値の最大値を入力キーワード数の約3倍まで許す」という意味です。逆に、1/3なら「関連値の最大値を入力キーワード数の約3分の1まで許す」という意味です。1より小さい値は、生成するハッシュテーブルの全体のサイズを制限するのに役立ちますが、この目的には<SAMP>&lsquo;-m&rsquo;</SAMP>オプションの方が適しています。「switchの生成」オプション<SAMP>&lsquo;-S&rsquo;</SAMP>、または同じ働きをする<SAMP>&lsquo;%switch&rsquo;</SAMP>が有効で<EM>ない</EM>場合、関連値の最大値は静的配列のテーブルサイズに影響します。テーブルを大きくすると、追加の領域を必要とする代わりに、検索が不成功に終わるまでの時間が短くなると考えられます。デフォルトは1なので、デフォルトの関連値の最大値は、キーワード数とほぼ同じ大きさになります。効率のため、関連値の最大値は必ず2のべき乗に切り上げられます。この手法は本質的にヒューリスティックなので、実際のテーブルサイズは多少変わる場合があります。`
]),SEC24:options(24,[
`プログラムの各オプションの意味を短くまとめて表示します。その後のプログラムの実行を打ち切ります。`,
`現在のバージョン番号を表示します。`,
`デバッグオプションを有効にします。<CODE>gperf</CODE>の実行中、詳細な診断を「標準エラー出力」に出力します。プログラムの保守にも、指定したオプションの組が実際に解の探索を速くしているかを判断するためにも役立ちます。<SAMP>&lsquo;-d&rsquo;</SAMP>オプションを有効にすると、プログラムの終了時に有用な情報が出力されます。`
]),SEC25:`<H1><A NAME="SEC25" HREF="#TOC25">6 <CODE>gperf</CODE>の既知の不具合と制限</A></H1>
<P>現在の<CODE>gperf</CODE>リリースには、次のような制限があります。</P>
<UL>
<LI><CODE>gperf</CODE>は速く実行されるように調整されており、小規模から中規模のデータ集合（約1000キーワード）を高速に処理します。コンパイラのキーワード集合の完全ハッシュ関数を保守するのに、非常に役立ちます。バージョン3.0以降、<CODE>gperf</CODE>は、はるかに大きなキーワード集合（15000キーワードを超えるもの）も効率よく処理します。
<LI>入力キーワードファイルが大きい場合や、キーワード同士がよく似ている場合、生成する静的キーワード配列のサイズが<EM>極端に</EM>大きくなることがあります。その結果、生成したCコードのコンパイルが遅くなり、オブジェクトコードのサイズも<EM>大幅に</EM>増える傾向があります。この場合、データサイズを減らすために<SAMP>&lsquo;-S&rsquo;</SAMP>オプションを使うことを検討してください。キーワードの認識時間は増える可能性がありますが、その増加はごく小さい場合があります。多くのCコンパイラは大きなswitch文のコードを正しく生成できないため、生成するswitch文の数を制御する適切な数値引数を<VAR>-S</VAR>オプションに付けることが重要です。
<LI>選択するバイト位置の最大数には、255という任意の制限があります。この制限は取り除くべきです。これを問題だと考える方は、制限を取り除けるよう、筆者に知らせてください。
</UL>
`,SEC26:`<H1><A NAME="SEC26" HREF="#TOC26">7 今後の課題</A></H1>
<P>現在の完全ハッシュ関数のアルゴリズムを、より網羅的に探索する方法に置き換えることは、「比較的」容易なはずです。完全ハッシュのモジュールは、基本的にほかのプログラムモジュールから独立しています。ほかに取り組む価値のある改善として、次のものがあります。</P>
<UL>
<LI>有用な拡張の1つは、「最小」完全ハッシュ関数を生成するようにプログラムを変更することです。現在のバージョンは、条件によっては生成テーブルのサイズがかなり大きくなる場合があります。これは主に理論的な関心に基づくものです。疎なテーブルの方が検索が速いことが多く、<SAMP>&lsquo;-S&rsquo;</SAMP>の<CODE>switch</CODE>オプションを使えば、検索が少し遅くなる代わりに、データサイズを最小化できるためです。なお、gccコンパイラは一般に<CODE>switch</CODE>文に対してよいコードを生成するので、より複雑な方式の必要性は小さくなります。
<LI>アルゴリズムの改善に加えて、現在のCとC++のルーチンだけでなく、出力コードとしてAdaのパッケージを生成できるようにすることも有用です。
</UL>
`,SEC27:fix(section(27)).replace('8  Bibliography','8 参考文献'),SEC28:fix(section(28)).replace('Concept Index','概念索引').replace('Jump to:','移動先:').replace(/>Array name</g,'>配列名<').replace(/>Bugs</g,'>不具合<').replace(/>Class name</g,'>クラス名<').replace(/>Constants definition</g,'>定数の定義<').replace(/>Constants prefix</g,'>定数の接頭辞<').replace(/>Copyright</g,'>著作権<').replace(/>Declaration section</g,'>宣言セクション<').replace(/>Delimiters</g,'>区切り文字<').replace(/>Duplicates</g,'>重複<').replace(/>Format</g,'>形式<').replace(/>Functions section</g,'>関数セクション<').replace(/>hash table</g,'>ハッシュテーブル<').replace(/>Initializers</g,'>初期化子<').replace(/>Jump value</g,'>ジャンプ値<').replace(/>Keywords section</g,'>キーワードセクション<').replace(/>Minimal perfect hash functions</g,'>最小完全ハッシュ関数<').replace(/>Slot name</g,'>スロット名<').replace(/>Static search structure</g,'>静的検索構造<').replace(/This document was generated on 16 April 2025 using the\s*<A HREF="http:\/\/wwwinfo.cern.ch\/dis\/texi2html\/">texi2html<\/A>\s*translator version 1.52b\./,'この文書は、2025年4月16日に<A HREF="http://wwwinfo.cern.ch/dis/texi2html/">texi2html</A>変換器バージョン1.52bを使って生成されました。')};
const req=createRequire(w+'/package.json'),parse=req('parse5'),walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],text=n=>n.value??(n.childNodes||[]).map(text).join(''),attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,records=[];
for(const[id,t]of Object.entries(translations)){const s=section(+id.slice(3)),sn=walk(parse.parseFragment(s)),tn=walk(parse.parseFragment(t));for(const tag of ['pre','code','samp','var'])assert.deepEqual(tn.filter(x=>x.tagName===tag).map(text)[tag==='pre'?'slice':'sort'](),sn.filter(x=>x.tagName===tag).map(text)[tag==='pre'?'slice':'sort'](),id+'/'+tag);for(const tag of ['p','li','ul','ol','dir','dl','dt','dd'])assert.equal(tn.filter(x=>x.tagName===tag).length,sn.filter(x=>x.tagName===tag).length,id+'/'+tag);assert.deepEqual(tn.filter(x=>x.tagName==='a').map(x=>attr(x,'name')),sn.filter(x=>x.tagName==='a').map(x=>attr(x,'name')),id+'/anchors');assert.deepEqual(tn.filter(x=>x.tagName==='a').map(x=>attr(x,'href')).filter(Boolean),sn.filter(x=>x.tagName==='a').map(x=>attr(x,'href')?.replace(/^gperf.html#/,'#')).filter(Boolean),id+'/links');records.push({id,sourceSHA256:sha(s),translationSHA256:sha(t),status:'draft-translated-not-reviewed',sourceLines:s.trimEnd().split('\n').length,separateContentReview:false,mechanical:{preExact:true,inlineCodeSampVarMultisetExact:true,anchorsAndLocalTargetsPreserved:true,paragraphListDefinitionCountsPreserved:true},...(id==='SEC27'?{bibliography:'all15 entries retained in original citation language, translated heading'}:{}),...(id==='SEC28'?{index:'all original groups/entries and targets preserved; labels translated without changing original alphabetical grouping'}:{})});}
const before=JSON.parse(fs.readFileSync(w+'/'+note+'/PROGRESS.json'));assert.equal(before.draftSections,16);fs.mkdirSync(r+'/'+ev,{recursive:true});for(const[id,t]of Object.entries(translations))for(const base of[w+'/'+note,r+'/'+note,r+'/'+ev])for(const[suffix,value]of[['source.html',section(+id.slice(3))],['ja.html',t]])fs.writeFileSync(base+'/'+id+'.'+suffix,value,{flag:'wx'});
const progress={...before,at:new Date().toISOString(),draftSections:27,records:[...before.records,...records],next:'全27機能節のdraft保存済み。表題/目次/注記と全CLIを翻訳し2公開本文を組立。原通知・GPLは原英語保持し対応source配信。別全文reviewと正式機械/native/統合検査は未完。'};fs.writeFileSync(w+'/'+note+'/PROGRESS.json',JSON.stringify(progress,null,2)+'\n');for(const p of[r+'/'+note+'/PROGRESS-567.json',r+'/'+ev+'/PROGRESS.json'])fs.writeFileSync(p,JSON.stringify(progress,null,2)+'\n',{flag:'wx'});console.log({draftSections:27,added:records.map(x=>x.id),wholeTranslatedPages:0,reviewedPages:0});
