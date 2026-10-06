import fs from 'node:fs';import assert from 'node:assert/strict';import{createHash}from'node:crypto';import{createRequire}from'node:module';import renderer from '/private/tmp/libx-gperf-import-20261004/scripts/document-import/gperf/render-man.cjs';
const r='/Users/dolphilia/github/libx',w='/private/tmp/libx-gperf-import-20261004',note='docs/notes/document-import/gperf/3.3/translations',ev='docs/notes/project-expansion/runs/evidence/2026-10-04-568',src=fs.readFileSync(w+'/docs/notes/document-import/gperf/3.3/sources/gperf-3.3/doc/gperf.1','utf8'),en=renderer.renderMan(src).html,sha=s=>createHash('sha256').update(s).digest('hex');
const descriptions=[
'キーワードとその属性を区切るための区切り文字を含む文字列を、利用者が指定できます。デフォルトは「,」です。',
'生成コードに構造化された型の宣言を含められます。%%より前のテキストはすべて、型宣言の一部とみなされます。その後にキーワードと追加のフィールドを記述でき、1行につきフィールドの組を1つ置きます。',
'ASCII文字の大文字と小文字を同等とみなします。ロケールに依存する大文字・小文字の対応は無視されることに注意してください。',
'指定した言語のコードを生成します。現在対応している言語はC++、ANSI-C、C、KR-Cです。デフォルトはANSI-Cです。',
'キーワード構造体内でキーワードを格納するメンバーの名前を選択します。',
'キーワード構造体の追加メンバーの初期化子を指定します。',
"生成するハッシュ関数の名前を指定します。デフォルトは'hash'です。",
"生成する検索関数の名前を指定します。デフォルトの名前は'in_word_set'です。",
"生成するC++クラスの名前を指定します。デフォルトの名前は'Perfect_Hash'です。",
'7ビット文字を仮定します。',
'文字列の比較を試みる前に、キーの長さを比較します。キーワードにNULバイトが含まれる場合に必要です。また、検索時の文字列比較の回数を減らすのにも役立ちます。',
'strcmpの代わりにstrncmpを使う比較コードを生成します。',
'生成する検索テーブルの内容を定数、つまり読み取り専用にします。',
'defineの代わりに、検索関数内のローカルなenumを使って定数値を定義します。',
'コードの先頭に、必要なシステムのインクルードファイル&lt;string.h&gt;を含めます。',
'キーワードの静的テーブルを、検索関数の中に隠すデフォルトの動作ではなく、静的なグローバル変数として生成します。',
'生成するテーブルを共有ライブラリに組み込むために最適化します。生成コードを含む共有ライブラリを使うプログラムの起動時間を短縮します。',
"--picオプションで生成する文字列プールの名前を指定します。デフォルトの名前は'stringpool'です。",
'空のキーワードテーブル項目に、空文字列の代わりにNULL文字列を使います。',
'TOTAL_KEYWORDSなどの定数に付ける接頭辞を指定します。',
"キーワード一覧の配列名を指定します。デフォルトの名前は'wordlist'です。",
"長さのテーブルの配列名を指定します。デフォルトの名前は'lengthtable'です。",
'生成するCコードで、配列の検索テーブルの代わりにswitch文方式を使います。キーファイルによっては、必要な実行時間と記憶領域の両方を減らせます。COUNT引数は、生成するswitch文の数を指定します。値が1なら全要素を含む1つのswitchを生成し、値が2なら各テーブルに要素の半分ずつを含む2つのテーブルを生成します。ほかの値でも同様です。COUNTが1000000のように非常に大きい場合、生成するCコードは二分探索を行います。',
'型の宣言を出力ファイルへ転送しないようにします。型がすでにほかの場所で定義されている場合に使ってください。',
'ハッシュ関数で使うキー位置を選択します。指定できる位置は1から255までです。位置はカンマで区切り、範囲でも指定できます。キー位置の順序は任意です。また、メタ文字「*」を指定すると、生成するハッシュ関数はすべてのキー位置を使用し、$はキーの「最後の文字」を表します。例は$,1,2,4,6-10です。',
'ハッシュ値が重複するキーワードを処理します。冗長性が非常に高い一部のキーワード集合で役立ちます。',
'-iと-jの値を複数通り試し、最良の結果を選びます。実行時間はITERATIONS倍になりますが、生成するテーブルのサイズを小さくするのに効果があります。',
'関連値配列の初期値を指定します。デフォルトは0です。この値を大きくすると、最終的なテーブルのサイズを大きくするのに役立ちます。',
'「ジャンプ値」、つまり衝突時に関連する文字の値をどれだけ進めるかに影響します。奇数でなければならず、デフォルトは5です。',
'ハッシュ関数の計算に、キーワードの長さを含めません。',
'関連値テーブルの初期化に乱数を使います。',
'生成するハッシュテーブルのサイズに影響します。数値引数Nは、関連値の範囲をキーの数に対して「何倍大きく、または小さく」するかを示します。たとえば、値が3なら「関連値の最大値を入力キー数の約3倍まで許す」という意味です。逆に、1/3なら「関連値の最大値を入力キー数の約3分の1にする」という意味です。テーブルを大きくすると、追加の領域を必要とする代わりに、検索が不成功に終わるまでの時間が短くなると考えられます。デフォルトは1です。',
'このメッセージを表示します。',
'gperfのバージョン番号を表示します。',
'デバッグオプションを有効にします。標準エラー出力に詳細な出力を行います。'];
assert.equal(descriptions.length,35);let i=0,ja=en.replace(/<dd>[\s\S]*?<\/dd>/g,()=>'<dd>'+descriptions[i++]+'</dd>');assert.equal(i,35);
const paragraphs=new Map([
['gperf - generate a perfect hash function from a key set','gperf - キー集合から完全ハッシュ関数を生成する'],
["GNU 'gperf' generates perfect hash functions.","GNU 'gperf'は完全ハッシュ関数を生成します。"],
['If a long option shows an argument as mandatory, then it is mandatory for the equivalent short option also.','長いオプションで引数が必須とされている場合、対応する短いオプションでも引数は必須です。'],
['--output-file=FILE Write output to specified file.','--output-file=FILE 出力を指定したファイルに書き込みます。'],
['The results are written to standard output if no output file is specified or if it is -.','出力ファイルを指定しない場合、または-を指定した場合、結果は標準出力に書き込まれます。'],
['Written by Douglas C. Schmidt and Bruno Haible.','Douglas C. SchmidtとBruno Haibleが作成しました。'],
['Report bugs to &lt;bug-gperf@gnu.org&gt;.','不具合は&lt;bug-gperf@gnu.org&gt;に報告してください。'],
['The full documentation for <strong>gperf</strong> is maintained as a Texinfo manual.  If the <strong>info</strong> and <strong>gperf</strong> programs are properly installed at your site, the command','<strong>gperf</strong>の完全な文書はTexinfoマニュアルとして保守されています。<strong>info</strong>と<strong>gperf</strong>のプログラムが正しくインストールされていれば、次のコマンドで'],
['should give you access to the complete manual.','完全なマニュアルを参照できるはずです。']
]);for(const[a,b]of paragraphs){assert(ja.includes('<p>'+a+'</p>'),a);ja=ja.replace('<p>'+a+'</p>','<p>'+b+'</p>');}
const labels={'NAME':'名称','SYNOPSIS':'書式','DESCRIPTION':'説明','Output file location:':'出力ファイルの場所:','Input file interpretation:':'入力ファイルの解釈:','Language for the output code:':'出力コードの言語:','Details in the output code:':'出力コードの詳細:','Algorithm employed by gperf:':'gperfが使うアルゴリズム:','Informative output:':'情報の出力:','AUTHOR':'著者','REPORTING BUGS':'不具合の報告','COPYRIGHT':'著作権（原文通知）','SEE ALSO':'関連項目'};ja=ja.replace(/<(h[23])>([^<]+)<\/\1>/g,(_,h,label)=>{assert(labels[label]);return '<'+h+' id="cli-'+label.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'">'+labels[label]+'</'+h+'>';}).replace('GNU gperf 3.3 — CLI (April 2025)','GNU gperf 3.3 — CLI（2025年4月）');
const raw=fs.readFileSync(w+'/docs/notes/document-import/gperf/3.3/sources/gperf-3.3/doc/gperf.html','utf8'),headerStart=raw.indexOf('<BODY>')+6,headerEnd=raw.indexOf('<H1><A NAME="SEC1"'),headerSource=raw.slice(headerStart,headerEnd);let header=headerSource.replace('User\'s Guide to <CODE>gperf</CODE> 3.2','<CODE>gperf</CODE> 3.2 利用ガイド').replace('The GNU Perfect Hash Function Generator','GNUの完全ハッシュ関数生成器').replace('Edition 3.2, 28 October 2024','第3.2版、2024年10月28日').replace('Table of Contents','目次').replace(/HREF="gperf\.html#/g,'HREF="#');
for(let n=2;n<=28;n++){const t=fs.readFileSync(w+'/'+note+'/guide-sections/SEC'+n+'.ja.html','utf8'),heading=t.match(new RegExp('<H[1-6]><A NAME="SEC'+n+'" HREF="[^"]+">([\\s\\S]*?)</A></H[1-6]>'));assert(heading,n);const rx=new RegExp('(<A NAME="TOC'+n+'" HREF="[^"]+">)[\\s\\S]*?(</A>)');assert(rx.test(header));header=header.replace(rx,(_,a,b)=>a+heading[1]+b);}
const req=createRequire(w+'/package.json'),parse=req('parse5'),walk=n=>[n,...(n.childNodes||[]).flatMap(walk)],text=n=>n.value??(n.childNodes||[]).map(text).join(''),attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value,compare=(s,t)=>{const sn=walk(parse.parseFragment(s)),tn=walk(parse.parseFragment(t));for(const tag of ['pre','code','samp','var','strong'])assert.deepEqual(tn.filter(x=>x.tagName===tag).map(text).sort(),sn.filter(x=>x.tagName===tag).map(text).sort(),tag);for(const tag of ['p','li','ul','dl','dt','dd','h1','h2','h3'])assert.equal(tn.filter(x=>x.tagName===tag).length,sn.filter(x=>x.tagName===tag).length,tag);};compare(en,ja);compare(headerSource,header);assert.deepEqual(walk(parse.parseFragment(en)).filter(x=>x.tagName==='dt').map(text),walk(parse.parseFragment(ja)).filter(x=>x.tagName==='dt').map(text));assert(header.includes(fs.readFileSync(r+'/docs/notes/project-expansion/runs/evidence/2026-10-04-556/MANUAL_NOTICE_ORIGINAL.html','utf8')));
fs.mkdirSync(r+'/'+ev,{recursive:true});const files={'CLI.source.html':en,'CLI.ja.html':ja,'GUIDE_HEADER.source.html':headerSource,'GUIDE_HEADER.ja.html':header};for(const[n,s]of Object.entries(files))for(const base of[w+'/'+note,r+'/'+note,r+'/'+ev])fs.writeFileSync(base+'/'+n,s,{flag:'wx'});
const progress={at:new Date().toISOString(),status:'draft-translated-not-reviewed',guideFunctionalSections:27,guideHeaderDraftTranslated:true,CLIDraftTranslated:true,wholeOutputAssembled:false,wholeReviewedPages:0,scopePages:2,mechanical:{CLITerms:35,CLIAdditionalOutputFileOption:1,optionLabelsPreserved:true,originalCLICopyrightAndWarrantyEnglishRetained:true,manualOriginalPermissionUnchanged:true},files:Object.entries(files).map(([path,s])=>({path,sha256:sha(s)})),next:'固定原文/27訳節/表題目次/CLIのSHAを照合して正式importerで2日本語本文を組立。全文別内容review、canonical/codecopy/sourcearchive/native/integration検査を続ける。'};fs.writeFileSync(r+'/'+ev+'/PROGRESS.json',JSON.stringify(progress,null,2)+'\n',{flag:'wx'});fs.writeFileSync(r+'/'+note+'/PROGRESS-568.json',JSON.stringify(progress,null,2)+'\n',{flag:'wx'});fs.writeFileSync(w+'/'+note+'/PROGRESS-568.json',JSON.stringify(progress,null,2)+'\n',{flag:'wx'});console.log(progress.mechanical);
