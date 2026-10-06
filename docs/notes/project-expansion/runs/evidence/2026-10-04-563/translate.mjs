import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import{createHash}from'node:crypto';
const r='/Users/dolphilia/github/libx',w='/private/tmp/libx-gperf-import-20261004',note='docs/notes/document-import/gperf/3.3',d='docs/notes/project-expansion',ev=d+'/runs/evidence/2026-10-04-563',at=new Date().toISOString(),html=fs.readFileSync(w+'/'+note+'/sources/gperf-3.3/doc/gperf.html','utf8'),sha=s=>createHash('sha256').update(s).digest('hex');
const translations={SEC2:`<H1><A NAME="SEC2" HREF="#TOC2">GNU <CODE>gperf</CODE>ユーティリティの貢献者</A></H1>

<UL>
<LI><A NAME="IDX1"></A>
GNU <CODE>gperf</CODE>完全ハッシュ関数生成ユーティリティは、Douglas C. SchmidtがGNU C++で作成しました。完全ハッシュ関数生成器の基本的な着想は、Keith BosticがCで書き、1984年頃にnet.sourcesで配布したアルゴリズムに由来します。現在のプログラムは、Keithの基本的な着想をカリフォルニア大学アーバイン校で大幅に改変・強化・拡張して実装したものです。バグ、パッチ、提案は<CODE>&#60;bug-gperf@gnu.org&#62;</CODE>へ報告してください。
<LI>
有用なコンパイラを提供し、私の制作物を発表する場を与えてくれたMichael TiemannとDoug Leaに、特に感謝します。
また、Adam de BoorとNels Olsonからは多くの助言や知見を得ました。それらは<CODE>gperf</CODE>の品質と機能を向上させるうえで大いに役立ちました。
<LI>
Bruno Haibleは検索アルゴリズムを改良し、最適化しました。また、信頼性を高めるために入力処理と出力処理を書き直し、テストスイートを追加しました。
</UL>

`,SEC3:`<H1><A NAME="SEC3" HREF="#TOC3">2 はじめに</A></H1>

<P>
<CODE>gperf</CODE>は、C++で書かれた完全ハッシュ関数生成器です。利用者が指定した<VAR>n</VAR>個の要素からなるキーワード集合<VAR>W</VAR>を、完全ハッシュ関数<VAR>F</VAR>に変換します。<VAR>F</VAR>は、<VAR>W</VAR>内のキーワードを0..<VAR>k</VAR>の範囲に一意に対応付けます。ここで<VAR>k</VAR> &#62;= <VAR>n-1</VAR>です。<VAR>k</VAR> = <VAR>n-1</VAR>なら、<VAR>F</VAR>は<EM>最小</EM>完全ハッシュ関数です。<CODE>gperf</CODE>は、0..<VAR>k</VAR>の要素からなる静的な検索テーブルと、2つのC関数を生成します。これらの関数は、検索テーブルを高々1回調べることで、指定した文字列<VAR>s</VAR>が<VAR>W</VAR>に含まれるかどうかを判定します。
</P>
<P>
<CODE>gperf</CODE>は現在、GNU C、GNU C++、GNU Java、GNU Pascal、GNU Modula 3、GNU indentを含む、実用および研究用の複数のコンパイラや言語処理ツールで、字句解析器の予約語認識器を生成するために使われています。<CODE>gperf</CODE>の完全なC++ソースコードは、<CODE>https://ftp.gnu.org/pub/gnu/gperf/</CODE>から入手できます。<CODE>gperf</CODE>の設計と実装をより詳しく説明した論文は、Second USENIX C++ Conferenceの論文集、または<CODE>http://www.cs.wustl.edu/~schmidt/resume.html</CODE>で入手できます。
</P>

`};
const dir=w+'/'+note+'/translations/guide-sections';fs.mkdirSync(dir,{recursive:true});fs.mkdirSync(r+'/'+ev,{recursive:true});const records=[];
for(const[id,translated]of Object.entries(translations)){const n=Number(id.slice(3)),start=html.indexOf('<H1><A NAME="'+id+'"'),end=html.indexOf('<H1><A NAME="SEC'+(n+1)+'"');assert(start>=0&&end>start);const original=html.slice(start,end);for(const[p,s]of [[dir+'/'+id+'.source.html',original],[dir+'/'+id+'.ja.html',translated],[r+'/'+ev+'/'+id+'.source.html',original],[r+'/'+ev+'/'+id+'.ja.html',translated]])fs.writeFileSync(p,s,{flag:'wx'});records.push({id,sourceSHA256:sha(original),translationSHA256:sha(translated),status:'draft-translated-not-reviewed',sourceLines:original.trimEnd().split('\n').length,paragraphScope:id==='SEC2'?'all3contributor list items':'both full introduction paragraphs',separateContentReview:false});}
fs.writeFileSync(dir+'/PROGRESS.json',JSON.stringify({at,guideWholeTranslated:false,CLIWholeTranslated:false,completedReviewPages:0,scopePages:2,guideFunctionalSections:27,draftSections:2,records,untouchedOriginal:'Guide GPL chapter and permission notice remain English original and will not be replaced by translated fragments.',next:'SEC4静的検索構造を全量翻訳。その後SEC5〜SEC28と全CLI、表題/目次/注記を翻訳し、全量日本語guide/CLIを組み立てて別全文review。'},null,2)+'\n',{flag:'wx'});fs.copyFileSync(dir+'/PROGRESS.json',r+'/'+ev+'/PROGRESS.json',fs.constants.COPYFILE_EXCL);console.log({draftSections:2,wholeTranslatedPages:0,reviewedPages:0});
