import fs from 'node:fs';import assert from 'node:assert/strict';import{createHash}from'node:crypto';import{createRequire}from'node:module';
const r='/Users/dolphilia/github/libx',w='/private/tmp/libx-gperf-import-20261004',note='docs/notes/document-import/gperf/3.3/translations/guide-sections',ev='docs/notes/project-expansion/runs/evidence/2026-10-04-566',original=fs.readFileSync(w+'/docs/notes/document-import/gperf/3.3/sources/gperf-3.3/doc/gperf.html','utf8'),sha=s=>createHash('sha256').update(s).digest('hex'),section=n=>{const a=original.search(new RegExp('<H[1-6]><A NAME="SEC'+n+'"')),b=original.search(new RegExp('<H[1-6]><A NAME="SEC'+(n+1)+'"'));assert(a>=0&&b>a);return original.slice(a,b);},pre=(n,i=0)=>section(n).match(/<PRE>[\s\S]*?<\/PRE>/g)[i];
const translations={SEC10:`<H4><A NAME="SEC10" HREF="#TOC10">4.1.1.3 Cコードの取り込み</A></H4>
<P><A NAME="IDX33"></A><A NAME="IDX34"></A>GNUユーティリティの<CODE>flex</CODE>や<CODE>bison</CODE>と似た構文を使い、Cのソースコードとコメントをそのまま生成する出力ファイルに直接取り込めます。取り込みたい範囲を、左詰めの<SAMP>&lsquo;%{&rsquo;</SAMP>と<SAMP>&lsquo;%}&rsquo;</SAMP>の組で囲みます。この機能を示すため、前の例を基にした入力の一部を次に示します。</P>
${pre(10)}
`,SEC11:String.raw`<H3><A NAME="SEC11" HREF="#TOC11">4.1.2 キーワード項目の形式</A></H3>
<P>入力ファイルの2番目のセクションには、キーワードと、必要に応じて指定する関連属性の行を記述します。最初の列が<SAMP>&lsquo;#&rsquo;</SAMP>で始まる行はコメントとみなされます。<SAMP>&lsquo;#&rsquo;</SAMP>の後から、その次の改行までを含めてすべて無視されます。最初の列が<SAMP>&lsquo;%&rsquo;</SAMP>で始まる行はオプション宣言なので、キーワードのセクション内に置いてはいけません。</P>
<P>コメントでない各行の最初のフィールドは、必ずキーワードそのものです。指定方法は2つあります。文字列を囲む引用符を付けない単純な名前として指定するか、二重引用符で囲むC構文の文字列として指定します。後者では、<CODE>\"</CODE>、<CODE>\234</CODE>、<CODE>\xa8</CODE>などのバックスラッシュによるエスケープも使用できます。どちらの場合も、先頭に空白を置かず、行の最初から始めなければなりません。ここで「フィールド」は、最初の空白、カンマ、改行の直前までの範囲を指し、それらの区切り自体は含みません。Cの予約語の一部を使った簡単な例を次に示します。</P>
`+pre(11)+`
<P><CODE>flex</CODE>や<CODE>bison</CODE>とは異なり、宣言セクションが空なら、最初の<SAMP>&lsquo;%%&rsquo;</SAMP>の印を省略できることに注意してください。</P>
<P>先頭のキーワードの後には、必要に応じて追加のフィールドを置けます。フィールドはカンマで区切り、行末で終わるようにします。その意味はすべて利用者が決めます。宣言セクションで指定する、利用者定義の<CODE>struct</CODE>の各要素を初期化するために使われます。<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言が有効で<EM>ない</EM>場合、これらのフィールドは単に無視されます。最後の例を除き、それまでのすべての例にはキーワードの属性が含まれています。</P>
`,SEC12:`<H3><A NAME="SEC12" HREF="#TOC12">4.1.3 追加のC関数の取り込み</A></H3>
<P>省略可能な3番目のセクションも、<CODE>flex</CODE>や<CODE>bison</CODE>の慣例とよく対応しています。最後の<SAMP>&lsquo;%%&rsquo;</SAMP>から入力ファイルの末尾まで、このセクションのすべてのテキストが、そのまま生成する出力ファイルに取り込まれます。当然ながら、このセクションのコードが有効なCであることを確認する責任は利用者にあります。</P>
`,SEC13:`<H3><A NAME="SEC13" HREF="#TOC13">4.1.4 GNU <CODE>indent</CODE>向けの指示を置く場所</A></H3>
<P><CODE>gperf</CODE>の入力ファイルにGNU <CODE>indent</CODE>を実行しようとすると、入力ファイルの解釈を制御する<SAMP>&lsquo;%%&rsquo;</SAMP>、<SAMP>&lsquo;%{&rsquo;</SAMP>、<SAMP>&lsquo;%}&rsquo;</SAMP>という<CODE>gperf</CODE>の指示を、GNU <CODE>indent</CODE>が理解しないことがわかります。そのため、GNU <CODE>indent</CODE>向けの指示を挿入する必要があります。具体的には、最も一般的な入力ファイルの構造を次のように仮定します。</P>
${pre(13,0)}
<P><SAMP>&lsquo;*INDENT-OFF*&rsquo;</SAMP>と<SAMP>&lsquo;*INDENT-ON*&rsquo;</SAMP>のコメントは、次のように挿入します。</P>
${pre(13,1)}
`,SEC14:`<H2><A NAME="SEC14" HREF="#TOC14">4.2 <CODE>gperf</CODE>が生成するCコードの出力形式</A></H2>
<P><A NAME="IDX35"></A></P>
<P>標準出力に生成するCコードの形式を制御するオプションがいくつかあります。2つのC関数が生成されます。名前は<CODE>hash</CODE>と<CODE>in_word_set</CODE>ですが、コマンドラインオプションで変更できます。どちらの関数にも、文字列<CODE>char *</CODE> <VAR>str</VAR>と、長さのパラメーター<CODE>int</CODE> <VAR>len</VAR>の2つの引数が必要です。デフォルトの関数プロトタイプは次のとおりです。</P>
<P><DL>
<DT><U>関数:</U> unsigned int <B>hash</B> <I>(const char * <VAR>str</VAR>, size_t <VAR>len</VAR>)</I>
<DD><A NAME="IDX36"></A>デフォルトでは、生成する<CODE>hash</CODE>関数は、利用者が指定する<VAR>str</VAR>内の複数のバイト位置を使って<EM>関連値</EM>テーブルを参照し、その値と<VAR>len</VAR>を加算して得られる整数値を返します。関連値テーブルはローカルな静的配列に格納されます。このテーブルは<CODE>gperf</CODE>内部で構築され、後で<SAMP>&lsquo;hash_table&rsquo;</SAMP>という名前の静的なローカルC配列として出力されます。使用する位置、つまり<VAR>str</VAR>へのインデックスは、<CODE>gperf</CODE>の実行時に<SAMP>&lsquo;-k&rsquo;</SAMP>オプションで指定します。詳細は後述の<EM>オプション</EM>の節（<A HREF="#SEC18">5 <CODE>gperf</CODE>の実行</A>）を参照してください。
</DL></P>
<P><DL>
<DT><U>関数:</U> <B>in_word_set</B> <I>(const char * <VAR>str</VAR>, size_t <VAR>len</VAR>)</I>
<DD><A NAME="IDX37"></A><VAR>str</VAR>がキーワード集合に含まれていれば、そのキーワードへのポインターを返します。より正確には、<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言を指定した場合は、一致するキーワードの構造体へのポインターを返します。それ以外の場合は<CODE>NULL</CODE>を返します。
</DL></P>
<P><SAMP>&lsquo;-c&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%compare-strncmp&rsquo;</SAMP>宣言を使わない場合、<VAR>str</VAR>は長さがちょうど<VAR>len</VAR>のNUL終端文字列でなければなりません。<SAMP>&lsquo;-c&rsquo;</SAMP>、または同じ働きをする<SAMP>&lsquo;%compare-strncmp&rsquo;</SAMP>を使う場合は、<VAR>str</VAR>は単に<VAR>len</VAR>バイトの配列であればよく、NUL終端は不要です。</P>
<P>この2つの関数の生成コードには、次のオプションが影響します。</P>
<DL COMPACT>
<DT><SAMP>&lsquo;-t&rsquo;</SAMP><DD>
<DT><SAMP>&lsquo;--struct-type&rsquo;</SAMP><DD>利用者が定義する<CODE>struct</CODE>を使います。
<DT><SAMP>&lsquo;-S <VAR>total-switch-statements</VAR>&rsquo;</SAMP><DD>
<DT><SAMP>&lsquo;--switch=<VAR>total-switch-statements</VAR>&rsquo;</SAMP><DD><A NAME="IDX38"></A>大きな静的配列（疎な配列になる可能性もあります）を使う代わりに、1つ以上のCの<CODE>switch</CODE>文を生成します。実行時間と記憶領域の節約量はCコンパイラの最適化の程度によって異なりますが、この方法ではコードが小さくなり、速くなることがよくあります。
</DL>
<P><SAMP>&lsquo;-t&rsquo;</SAMP>と<SAMP>&lsquo;-S&rsquo;</SAMP>のオプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>と<SAMP>&lsquo;%switch&rsquo;</SAMP>の宣言を省略すると、デフォルトでは、キーワードを格納する<CODE>char *</CODE>配列と、その配列の空きを埋める追加の空文字列が生成されます。さまざまな入力・出力オプションを試し、生成されたCコードの実行時間を測定することで、キーワード集合の特性に応じた最適なオプションの選び方を判断できます。</P>
`,SEC15:String.raw`<H2><A NAME="SEC15" HREF="#TOC15">4.3 NULバイトの使用</A></H2>
<P><A NAME="IDX39"></A></P>
<P>デフォルトでは、<CODE>gperf</CODE>の生成コードは、Cで通常使われるゼロ終端文字列を扱います。そのため、入力ファイルのキーワードにはNULバイトを含められません。また、<CODE>hash</CODE>または<CODE>in_word_set</CODE>に渡す<VAR>str</VAR>引数は、NUL終端され、長さがちょうど<VAR>len</VAR>でなければなりません。</P>
<P><SAMP>&lsquo;-c&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%compare-strncmp&rsquo;</SAMP>宣言を使う場合、<VAR>str</VAR>引数にNUL終端は不要です。<CODE>gperf</CODE>の生成コードは、<VAR>str</VAR>から始まる最初の<VAR>len</VAR>バイトだけにアクセスし、<VAR>len+1</VAR>バイトにはアクセスしません。ただし、入力ファイルのキーワードには、引き続きNULバイトを含められません。</P>
<P><SAMP>&lsquo;-l&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%compare-lengths&rsquo;</SAMP>宣言を使う場合、ハッシュテーブルはバイナリ比較を行います。入力ファイルのキーワードにNULバイトを含めることができ、文字列構文では<CODE>\000</CODE>または<CODE>\x00</CODE>と記述します。<CODE>gperf</CODE>の生成コードは、NULをほかのバイトと同様に扱います。また、この場合、<SAMP>&lsquo;-c&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%compare-strncmp&rsquo;</SAMP>宣言は無視されます。</P>
`,SEC16:`<H2><A NAME="SEC16" HREF="#TOC16">4.4 識別子の制御</A></H2>
<P><CODE>gperf</CODE>の生成コードで定義する関数、テーブル、定数の識別子は、<CODE>gperf</CODE>の宣言、または対応するコマンドラインオプションで制御できます。これは次の3つの目的に役立ちます。</P>
<UL>
<LI>生成コードの見た目を整えること。この目的では、利用できる宣言やオプションを自由に使ってください。
<LI>ライブラリが外部に公開する識別子を制御すること。<CODE>gperf</CODE>の生成コードをライブラリに含め、ほかのライブラリとの衝突を避けるため、そのライブラリが外部に公開するすべての識別子を特定の接頭辞で始めたいとします。デフォルトで外部に公開される識別子は検索関数だけです。そのため、<SAMP>&lsquo;-N&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define lookup-function-name&rsquo;</SAMP>宣言を使えます。<SAMP>&lsquo;-L C++&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%language=C++&rsquo;</SAMP>宣言を使う場合、外部に公開される要素はクラスだけです。その名前は、<SAMP>&lsquo;-Z&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define class-name&rsquo;</SAMP>宣言で制御します。
<LI>単一のコンパイル単位に、複数の<CODE>gperf</CODE>生成コードを含めること。異なる入力ファイルを使って<CODE>gperf</CODE>を複数回実行し、生成コードを同じソースファイルから取り込みたいとします。この場合、外部に公開する識別子だけでなく、<SAMP>&lsquo;static&rsquo;</SAMP>スコープを持つ関数の名前、型、定数も変更する必要があります。デフォルトでは、検索関数、ハッシュ関数、定数を考慮する必要があります。そのため、<SAMP>&lsquo;-N&rsquo;</SAMP>オプション（同じ働きをする<SAMP>&lsquo;%define lookup-function-name&rsquo;</SAMP>宣言）、<SAMP>&lsquo;-H&rsquo;</SAMP>オプション（同じ働きをする<SAMP>&lsquo;%define hash-function-name&rsquo;</SAMP>宣言）、<SAMP>&lsquo;--constants-prefix&rsquo;</SAMP>オプション（同じ働きをする<SAMP>&lsquo;%define constants-prefix&rsquo;</SAMP>宣言）を使うとよいでしょう。<SAMP>&lsquo;-G&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%global-table&rsquo;</SAMP>宣言を使う場合は、キーワード配列と、存在する場合は長さのテーブルと文字列プールも考慮する必要があります。つまり、<SAMP>&lsquo;-W&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define word-array-name&rsquo;</SAMP>宣言を使うとよいでしょう。<SAMP>&lsquo;-l&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%compare-lengths&rsquo;</SAMP>宣言を使う場合は、<SAMP>&lsquo;--length-table-name&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define length-table-name&rsquo;</SAMP>宣言を使うとよいでしょう。<SAMP>&lsquo;-P&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%pic&rsquo;</SAMP>宣言を使う場合は、<SAMP>&lsquo;-Q&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define string-pool-name&rsquo;</SAMP>宣言を使うとよいでしょう。
</UL>
`,SEC17:`<H2><A NAME="SEC17" HREF="#TOC17">4.5 出力の著作権</A></H2>
<P><A NAME="IDX40"></A></P>
<P><CODE>gperf</CODE>にはGPLが適用されますが、それによって<CODE>gperf</CODE>の生成する出力にもGPLが適用されるわけではありません。出力に<CODE>gperf</CODE>のソースコードから直接含まれるテキストは、ごく小さな断片、長さにして約7行だけであり、意味を持つには小さすぎるためです。そのため、出力はGPLバージョン3でいう「<CODE>gperf</CODE>を基にした著作物」には当たりません。</P>
<P>一方、<CODE>gperf</CODE>の生成する出力は、入力ファイルのほぼすべてを含みます。そのため、出力は米国著作権法でいう入力の「二次的著作物」であり、その著作権上の扱いは入力の著作権に依存します。多くのソフトウェアライセンスでは、出力には、<CODE>gperf</CODE>に渡した入力と同じライセンスが適用され、著作権者も同じになります。</P>
`};
const req=createRequire(w+'/package.json'),parse=req('parse5'),walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],text=n=>n.value??(n.childNodes||[]).map(text).join(''),attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,records=[];
// Validate every drafted section before any persistent write.
for(const[id,t]of Object.entries(translations)){const s=section(+id.slice(3)),sn=walk(parse.parseFragment(s)),tn=walk(parse.parseFragment(t));for(const tag of ['pre','code','samp','var'])assert.deepEqual(tn.filter(x=>x.tagName===tag).map(text)[tag==='pre'?'slice':'sort'](),sn.filter(x=>x.tagName===tag).map(text)[tag==='pre'?'slice':'sort'](),id+'/'+tag);for(const tag of ['p','li','ul','ol','dl','dt','dd'])assert.equal(tn.filter(x=>x.tagName===tag).length,sn.filter(x=>x.tagName===tag).length,id+'/'+tag);assert.deepEqual(tn.filter(x=>x.tagName==='a').map(x=>attr(x,'name')),sn.filter(x=>x.tagName==='a').map(x=>attr(x,'name')),id+'/anchors');assert.deepEqual(tn.filter(x=>x.tagName==='a').map(x=>attr(x,'href')).filter(Boolean),sn.filter(x=>x.tagName==='a').map(x=>attr(x,'href')?.replace(/^gperf.html#/,'#')).filter(Boolean),id+'/links');records.push({id,sourceSHA256:sha(s),translationSHA256:sha(t),status:'draft-translated-not-reviewed',sourceLines:s.trimEnd().split('\n').length,separateContentReview:false,mechanical:{preExact:true,inlineCodeSampVarMultisetExact:true,anchorsAndLocalTargetsPreserved:true,paragraphListDefinitionCountsPreserved:true}});}
const before=JSON.parse(fs.readFileSync(w+'/'+note+'/PROGRESS.json'));assert.equal(before.draftSections,8);fs.mkdirSync(r+'/'+ev,{recursive:true});for(const[id,t]of Object.entries(translations))for(const base of[w+'/'+note,r+'/'+note,r+'/'+ev])for(const[suffix,value]of[['source.html',section(+id.slice(3))],['ja.html',t]])fs.writeFileSync(base+'/'+id+'.'+suffix,value,{flag:'wx'});
const progress={...before,at:new Date().toISOString(),draftSections:16,records:[...before.records,...records],next:'SEC18〜SEC28全固定原文と全CLI/表題目次注記を翻訳し、2公開本文を組立。原文SEC14のNULL曖昧さは直さず別編集注記で説明。別全文review・機械/native/統合検査は未実施。'};fs.writeFileSync(w+'/'+note+'/PROGRESS.json',JSON.stringify(progress,null,2)+'\n');for(const p of[r+'/'+note+'/PROGRESS-566.json',r+'/'+ev+'/PROGRESS.json'])fs.writeFileSync(p,JSON.stringify(progress,null,2)+'\n',{flag:'wx'});console.log({draftSections:16,added:records.map(x=>x.id),wholeTranslatedPages:0,reviewedPages:0});
