import fs from 'node:fs';import assert from 'node:assert/strict';import {createHash}from'node:crypto';import {createRequire}from'node:module';
const r='/Users/dolphilia/github/libx',w='/private/tmp/libx-gperf-import-20261004',note='docs/notes/document-import/gperf/3.3/translations/guide-sections',ev='docs/notes/project-expansion/runs/evidence/2026-10-04-564',at=new Date().toISOString(),original=fs.readFileSync(w+'/docs/notes/document-import/gperf/3.3/sources/gperf-3.3/doc/gperf.html','utf8'),sha=s=>createHash('sha256').update(s).digest('hex');
const translations={SEC4:`<H1><A NAME="SEC4" HREF="#TOC4">3 静的検索構造とGNU <CODE>gperf</CODE></A></H1>
<P><A NAME="IDX2"></A></P>
<P>
<EM>静的検索構造</EM>は、<EM>初期化</EM>、<EM>挿入</EM>、<EM>取得</EM>などの基本操作を持つ抽象データ型です。概念的には、すべての挿入が、どの取得よりも先に行われます。実際には、<CODE>gperf</CODE>は、検索集合のキーワードと、利用者が指定した関連属性を含む<EM>静的</EM>配列を生成します。そのため、挿入には実質的に実行時のコストがかかりません。これは<EM>静的検索集合</EM>を表すのに役立つデータ構造です。静的検索集合は、ソフトウェアシステムの応用で頻繁に現れます。典型的な例には、コンパイラの予約語、アセンブラ命令のオペコード、シェルインタプリタの組み込みコマンドがあります。<EM>キーワード</EM>と呼ぶ検索集合の要素は、通常はプログラムの初期化時に一度だけ構造に挿入され、一般に実行時には変更されません。
</P>
<P>
静的検索構造には、配列、連結リスト、二分探索木、デジタル探索トライ、ハッシュテーブルなど、多数の実装があります。各方式には、空間の利用効率と検索時間の効率とのトレードオフがあります。たとえば、<VAR>n</VAR>個の要素からなる整列済み配列は空間効率がよいものの、二分探索による取得操作の平均時間計算量はlog <VAR>n</VAR>に比例します。一方、ハッシュテーブルの実装は、しばしば定数時間でテーブル項目を見つけられますが、通常は追加のメモリを必要とし、最悪の場合の性能がよくありません。
</P>
<P><A NAME="IDX3"></A>
<EM>最小完全ハッシュ関数</EM>は、ある種類の静的検索集合に対して最適な解を提供します。最小完全ハッシュ関数は、次の2つの性質で定義されます。
</P>
<UL>
<LI>静的検索集合内のキーワードを、ハッシュテーブルを高々<EM>1回</EM>調べることで認識できます。これが「完全」という性質です。
<LI>キーワードを格納するために実際に確保するメモリは、キーワード集合を収めるのにちょうど十分な大きさであり、<EM>それより大きくありません</EM>。これが「最小」という性質です。
</UL>
<P>
ほとんどの用途では、<EM>完全</EM>ハッシュ関数を生成する方が、<EM>最小完全</EM>ハッシュ関数を生成するよりはるかに容易です。さらに、実際には、最小ではない完全ハッシュ関数の方が最小完全ハッシュ関数より速く実行されることがよくあります。疎なキーワードテーブルを検索すると「null」の項目が見つかる確率が高まり、文字列比較が減るためです。<CODE>gperf</CODE>は、デフォルトではキーワード集合に対して<EM>ほぼ最小</EM>の完全ハッシュ関数を生成します。ただし、<CODE>gperf</CODE>には、最小性や完全性の程度を利用者が制御できる多数のオプションがあります。
</P>
<P>
静的検索集合は、時間が経過しても比較的安定していることがよくあります。たとえば、Adaの63個の予約語は、ほぼ10年間変わっていませんでした。そのため、後で何度も頻繁に使うのであれば、最適な検索構造を<EM>一度</EM>構築するために集中的に労力をかける価値があることがよくあります。<CODE>gperf</CODE>は、時間と空間の効率がよい検索構造を手作業で作る煩雑さを取り除きます。本格的なプログラミングプロジェクトで、有用かつ実用的なツールであることが実証されています。<CODE>gperf</CODE>の出力は現在、GNU C、GNU C++、GNU Java、GNU Pascal、GNU Modula 3を含む、実用および研究用の複数のコンパイラで使われています。最後の2つのコンパイラは、まだ公式のGNU配布物には含まれていません。各コンパイラは<CODE>gperf</CODE>を使い、それぞれの予約語を効率よく識別する静的検索構造を自動生成します。
</P>

`,SEC5:`<H1><A NAME="SEC5" HREF="#TOC5">4 GNU <CODE>gperf</CODE>の概要</A></H1>
<P>
完全ハッシュ関数生成器<CODE>gperf</CODE>は、入力ファイルから「キーワード」の集合を読み込みます。デフォルトでは標準入力から読み込みます。検索テーブルを高々1回調べることで、<EM>静的キーワード集合</EM>の要素を認識する完全ハッシュ関数を求めようとします。このような関数を生成できた場合、<CODE>gperf</CODE>はハッシュ計算とテーブル検索による認識を行う2つのCソースコードのルーチンを出力します。生成するCコードはすべて標準出力に送られます。以下で説明するコマンドラインオプションを使うと、<CODE>gperf</CODE>の入力形式や出力形式を変更できます。
</P>
<P>
デフォルトでは、<CODE>gperf</CODE>は時間効率のよいコードを作ろうとし、空間の利用効率はそれほど重視しません。ただし、実行時間と記憶領域とのトレードオフを調整できるオプションがあります。特に、生成するテーブルのサイズを大きくすると疎な検索構造となり、一般に検索が速くなります。逆に、データの記憶領域を最小限にするCの<CODE>switch</CODE>文方式を使うよう、<CODE>gperf</CODE>に指定することもできます。さらに、Cの<CODE>switch</CODE>を使うことで、実際にキーワードの取得時間が多少短くなる場合もあります。当然ながら、実際の結果は使用するCコンパイラによって異なります。
</P>
<P>
一般に、<CODE>gperf</CODE>は、各キーワードに一意の値が与えられる組み合わせが見つかるまで、ハッシュ計算に使うバイトに値を割り当てます。ハッシュ値の範囲が大きいほど、<CODE>gperf</CODE>が完全ハッシュ関数を見つけて生成しやすくなる、という経験則が役立ちます。<CODE>gperf</CODE>を最大限に活用する鍵は、実際に試してみることです。
</P>

`,SEC6:`<H2><A NAME="SEC6" HREF="#TOC6">4.1 <CODE>gperf</CODE>への入力形式</A></H2>
<P><A NAME="IDX4"></A><A NAME="IDX5"></A><A NAME="IDX6"></A><A NAME="IDX7"></A>
コマンドライン引数の一部、特に<SAMP>&lsquo;-t&rsquo;</SAMP>オプションを変えることで、入力ファイルの形式を制御できます。入力の見た目は、GNUユーティリティの<CODE>flex</CODE>や<CODE>bison</CODE>、またはUNIXユーティリティの<CODE>lex</CODE>や<CODE>yacc</CODE>に似ています。一般的な形式の概要は次のとおりです。
</P>
<PRE>
declarations
%%
keywords
%%
functions
</PRE>
<P>
<CODE>flex</CODE>や<CODE>bison</CODE>とは<EM>異なり</EM>、宣言セクションと関数セクションは省略できます。以下では、各セクションの入力形式を説明します。
</P>
<P>
<SAMP>&lsquo;-t&rsquo;</SAMP>オプションを指定しない場合、宣言セクション全体を省略できます。その場合、入力ファイルは最初のキーワードの行から直接始まります。たとえば、次のようになります。
</P>
<PRE>
january
february
march
april
...
</PRE>

`,SEC7:`<H3><A NAME="SEC7" HREF="#TOC7">4.1.1 宣言</A></H3>
<P>
キーワード入力ファイルには、任意のCの宣言や定義、コマンドラインオプションと同様に働く<CODE>gperf</CODE>の宣言、利用者が指定する<CODE>struct</CODE>を含めるためのセクションを、必要に応じて設けることができます。
</P>

`,SEC8:`<H4><A NAME="SEC8" HREF="#TOC8">4.1.1.1 利用者が指定する<CODE>struct</CODE></A></H4>
<P>
<SAMP>&lsquo;-t&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%struct-type&rsquo;</SAMP>宣言が<EM>有効</EM>な場合、入力ファイルの宣言セクションの最後の要素として、Cの<CODE>struct</CODE>を指定する<EM>必要があります</EM>。このstructの最初のフィールドの型は、<SAMP>&lsquo;-P&rsquo;</SAMP>オプションを指定しない場合は<CODE>char *</CODE>または<CODE>const char *</CODE>、<SAMP>&lsquo;-P&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%pic&rsquo;</SAMP>宣言が有効な場合は<CODE>int</CODE>でなければなりません。最初のフィールドは<SAMP>&lsquo;name&rsquo;</SAMP>という名前にする必要がありますが、後述の<SAMP>&lsquo;-K&rsquo;</SAMP>オプション、または同じ働きをする<SAMP>&lsquo;%define slot-name&rsquo;</SAMP>宣言を使うと名前を変更できます。
</P>
<P>一年の各月とその属性を入力とする簡単な例を示します。</P>
<PRE>
struct month { char *name; int number; int days; int leap_days; };
%%
january,   1, 31, 31
february,  2, 28, 29
march,     3, 31, 31
april,     4, 30, 30
may,       5, 31, 31
june,      6, 30, 30
july,      7, 31, 31
august,    8, 31, 31
september, 9, 30, 30
october,  10, 31, 31
november, 11, 30, 30
december, 12, 31, 31
</PRE>
<P><A NAME="IDX8"></A>
<CODE>struct</CODE>の宣言と、キーワードおよびその他のフィールドの一覧を区切るのは、連続する2つのパーセント記号<SAMP>&lsquo;%%&rsquo;</SAMP>です。UNIXユーティリティの<CODE>lex</CODE>と同様に、行の最初の列から左詰めで記述します。
</P>
<P>
<CODE>struct</CODE>がすでにインクルードファイル内で宣言されている場合は、次のような省略形で示すことができます。
</P>
<PRE>
struct month;
%%
january,   1, 31, 31
...
</PRE>

`};
const req=createRequire(w+'/package.json'),parse=req('parse5'),walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],text=n=>n.value??(n.childNodes||[]).map(text).join(''),attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,records=[];
fs.mkdirSync(r+'/'+ev,{recursive:true});for(const[id,translation]of Object.entries(translations)){const n=+id.slice(3),start=original.search(new RegExp('<H[1-6]><A NAME="'+id+'"')),end=original.search(new RegExp('<H[1-6]><A NAME="SEC'+(n+1)+'"'));assert(start>=0&&end>start);const source=original.slice(start,end),sNodes=walk(parse.parseFragment(source)),tNodes=walk(parse.parseFragment(translation));
for(const tag of ['pre','code','samp','var'])assert.deepEqual(tNodes.filter(x=>x.tagName===tag).map(text)[tag==='pre'?'slice':'sort'](),sNodes.filter(x=>x.tagName===tag).map(text)[tag==='pre'?'slice':'sort'](),id+'/'+tag);
assert.deepEqual(tNodes.filter(x=>x.tagName==='a').map(x=>attr(x,'name')),sNodes.filter(x=>x.tagName==='a').map(x=>attr(x,'name')),id+' anchors');assert.equal(tNodes.filter(x=>x.tagName==='p').length,sNodes.filter(x=>x.tagName==='p').length,id+' paragraphs');assert.equal(tNodes.filter(x=>x.tagName==='li').length,sNodes.filter(x=>x.tagName==='li').length,id+' list');
for(const base of [w+'/'+note,r+'/'+note,r+'/'+ev])for(const[suffix,value]of [['source.html',source],['ja.html',translation]]){const target=base+'/'+id+'.'+suffix;if(fs.existsSync(target))assert.equal(fs.readFileSync(target,'utf8'),value);else fs.writeFileSync(target,value,{flag:'wx'});}records.push({id,sourceSHA256:sha(source),translationSHA256:sha(translation),status:'draft-translated-not-reviewed',sourceLines:source.trimEnd().split('\n').length,separateContentReview:false,mechanical:{preExact:true,inlineCodeSampVarMultisetExact:true,anchorsAndParagraphsAndListsPreserved:true}});}
const before=JSON.parse(fs.readFileSync(w+'/'+note+'/PROGRESS.json')),progress={...before,at,draftSections:7,records:[...before.records,...records],next:'SEC9全24宣言項目を固定原文から全量翻訳し、その後SEC10〜SEC28と全CLI/表題目次注記。全2本文の組立後に別全文内容review。'};fs.writeFileSync(w+'/'+note+'/PROGRESS.json',JSON.stringify(progress,null,2)+'\n');for(const p of [r+'/'+note+'/PROGRESS-564.json',r+'/'+ev+'/PROGRESS.json'])fs.writeFileSync(p,JSON.stringify(progress,null,2)+'\n',{flag:'wx'});console.log({draftSections:7,added:Object.keys(translations),wholeTranslatedPages:0,reviewedPages:0});
