from pathlib import Path
from bs4 import BeautifulSoup
import sys,json,re,hashlib
N=Path(__file__).resolve().parent;P=N/'preferred';G=json.loads((N/'CANONICAL_GENERATION.json').read_text());W=Path(sys.argv[1] if len(sys.argv)>1 else '/private/tmp/libx-gnu-tar-formal-964');code=lambda s:'<code class="command">'+s+'</code>'
T=[
['GNU <code class="command">tar</code>は、多くのファイルをひとまとめにした<em class="dfn">アーカイブ</em>を作成し、操作します。大量のデータを整理し、体系的に管理するための手段を提供するプログラムです。「tar」という名前はもともと「Tape ARchive」に由来しますが、アーカイブをテープに保存する必要はありません。実際、現在では通常テープには保存しません。'],
['この章の前半では、本書に繰り返し登場するさまざまな用語を紹介します。また、GNU <code class="command">tar</code>とその文書の開発に携わった人々や、バグ報告・意見の送付先についても説明します。',
'第2章は、<code class="command">tar</code>を初めて使う人向けの、無理なく学べるチュートリアルです（<a href="/docs/gnu-tar/v1-35/en/01-guide/08-tutorial/#Tutorial">tarの入門チュートリアル</a>を参照）。後続の章を読まなくても理解できる、独立した内容を目指しています。すでに説明した内容を土台にして、論理的な順序で段階的に話題を進めます。',
'このチュートリアルは、初心者が<code class="command">tar</code>の使い方を学べる進め方と構成になっていますが、初心者だけを対象としているわけではありません。最もよく使う3つの操作（<samp class="samp">create</samp>、<samp class="samp">list</samp>、<samp class="samp">extract</samp>）と、よく使う2つのオプション（<samp class="samp">file</samp>と<samp class="samp">verbose</samp>）を説明します。他の章からチュートリアルを参照することは多くありませんが、基本概念を複雑に応用した内容を扱う節では、その基本概念への相互参照を示すことがあります。（チュートリアルを含む本書全体は、読者がUnix系オペレーティングシステムを使ううえでの基本概念を理解していることを前提としています。<a href="/docs/gnu-tar/v1-35/en/01-guide/08-tutorial/#Tutorial">tarの入門チュートリアル</a>を参照してください。）',
'第3章では、残る5つの操作と、<code class="command">tar</code>のオプションの使い方・構文について説明します。',
'その他の章は、参照資料として使うことを想定しています。各章は、特定の話題について説明すべき内容をまとめて扱います。',
'ある章（<a href="/docs/gnu-tar/source/v1-35/manual.html#Date-input-formats">日付の入力形式</a>を参照）は、他のGNUマニュアルにも全文が収録されており、大部分が独立した内容です。また、本書のある節（<a href="/docs/gnu-tar/source/v1-35/manual.html#Standard">基本tar形式</a>を参照）には、<code class="command">tar</code>のソースから直接引用した長い文章が含まれています。',
'一般に、あるオプションを扱う各節では、長いオプション名と短い（省略形の）オプション名を少なくとも一度は両方示し、初心者がどちらの書き方にも慣れられるようにしています。（短い形式のないオプションもいくつかあり、その場合は該当する節で説明します。）'],
['<code class="command">tar</code>は、<code class="command">tar</code>アーカイブの作成と操作に使うプログラムです。<em class="dfn">アーカイブ</em>とは、多くのファイルの内容を、ファイル名や所有者などの情報とともに収めた単一のファイルです。（さらに、アクセス許可、ユーザーとグループ、バイト単位のサイズ、データの更新時刻も記録します。アーカイブによっては、収録された各ディレクトリ内のファイル名や、その他のファイル・ディレクトリ情報も記録します。）<code class="command">tar</code>を使うと、指定したディレクトリに新しいアーカイブを<em class="dfn">作成</em>できます。',
'アーカイブ内のファイルを<em class="dfn">メンバー</em>と呼びます。本書では、<em class="dfn">ファイル</em>という語は、通常の方法（<code class="command">ls</code>や<code class="command">cat</code>など）でアクセスできるファイルだけを指し、<em class="dfn">メンバー</em>という語は、アーカイブのメンバーだけを指すために使います。同様に、<em class="dfn">ファイル名</em>はファイルシステム上のファイルの名前であり、<em class="dfn">メンバー名</em>はアーカイブ内のメンバーの名前です。',
'<em class="dfn">展開</em>（extraction）とは、アーカイブの1つまたは複数のメンバーをファイルシステム上のファイルへコピーする処理を指します。全メンバーを取り出すことは、しばしば<em class="dfn">アーカイブを展開する</em>と呼ばれます。多くの、またはすべてのメンバーを展開することには、<em class="dfn">unpack</em>という語も使われます。アーカイブを作成しても外部の元ファイルのコピーが失われないのと同様に、展開してもアーカイブの構造は壊れません。また、あるアーカイブのメンバーを<em class="dfn">一覧表示</em>することも（標準出力やコマンドラインへ「表示する」ことと捉えられます）、既存のアーカイブにメンバーを<em class="dfn">追加</em>することもできます。これらの操作はすべて<code class="command">tar</code>で行えます。'],
['<code class="command">tar</code>は、<code class="command">tar</code>アーカイブを作成する機能に加え、さまざまな操作を提供します。たとえば、以前に作成したアーカイブからファイルを展開する、ファイルを追加して格納する、すでに格納されているファイルを更新・一覧表示する、といった用途に使えます。',
'当初、<code class="command">tar</code>アーカイブは、磁気テープにファイルを手軽に保存するために使われていました。<code class="command">tar</code>という名前はこの用途に由来し、<code class="code">t</code>ape <code class="code">ar</code>chiverを意味します。この名前にかかわらず、<code class="command">tar</code>は、利用可能なデバイス、ファイル、あるいはパイプを使って他のプログラムへ出力できます。遠隔のデバイスやファイルにも、アーカイブとしてアクセスできます。',
'<code class="command">tar</code>アーカイブにはさまざまな使い道があります。ここでは、そのうち保存、バックアップ、転送を取り上げます。',
'保存',
'<code class="command">tar</code>アーカイブは、関連するファイルをまとめ、ネットワーク経由で手軽に転送するためによく使われます。たとえばGNUプロジェクトは、ソフトウェアを<code class="command">tar</code>アーカイブにまとめて配布しています。これにより、あるプログラム（または関連するプログラム群）に関係するファイルを、ひとまとまりとして転送できます。',
'磁気テープには複数のファイルを順番に保存できます。ただし、テープはそれらのファイルの名前を持たず、テープ上の相対的な位置だけを把握しています。1本のテープに複数のファイルを名前を保って保存する方法の1つが、<code class="command">tar</code>アーカイブを作ることです。FTPのように、転送の仕組み自体が名前を扱える場合でも、複数のファイル、ディレクトリ、リンクを扱う手間があるため、<code class="command">tar</code>アーカイブは役立ちます。',
'アーカイブファイルは長期保存にも使われます。これは、現在から未来への転送と考えることができます。（SFでは空間だけでなく時間も移動できるという表現があります。ここで言いたいのは、<code class="command">tar</code>は時間も含むあらゆる次元にアーカイブを移せる、ということです！）',
'バックアップ',
'<code class="command">tar</code>で作成したアーカイブは、ファイル情報とディレクトリ構造を保持できるため、ディスクの完全バックアップや増分バックアップによく使われます。バックアップでは、複数のユーザーやプロジェクトに属する場合もあるファイル群を、ディスクやテープにまとめます。これにより、それらのファイルの情報が誤って失われることに備えられます。GNU <code class="command">tar</code>には、ファイルシステム内の全ファイルについて、増分ダンプと完全ダンプを作成するための専用機能があります。',
'転送',
'あるシステムでアーカイブを作成し、別のシステムへ転送して、そこで内容を展開できます。これにより、一群のファイルをシステム間で移せます。'],
['慣例として、<code class="command">tar</code>アーカイブには<samp class="samp">.tar</samp>で終わる名前を付けます。これは<code class="command">tar</code>が正しく動作するための必須条件ではありませんが、本書では、読者がこの慣例に慣れ、例が分かりやすくなるように従っています。',
'<code class="command">tar</code>アーカイブを「<code class="command">tar</code>ファイル」、アーカイブのメンバーを「ファイル」や「エントリー」と呼ぶことはよくあります。<code class="command">tar</code>の操作に慣れた人にとっては問題ありません。しかし本書では、初心者が使い方を学びやすいように、一貫して「アーカイブ」と「アーカイブメンバー」という語を使います。'],
['GNU <code class="command">tar</code>を最初に作成したのはJohn Gilmoreで、その後多くの人々が改良しました。GNU向けの拡張はJay Fenlason、続いてJoy Kendallが作成しました。その後パッケージ全体は、多くの親切なユーザーの助けを借りながら、Thomas Bushnell, n/BSG、François Pinard、Paul Eggert、そしてSergey Poznyakoffによって保守されてきました。',
'<code class="command">tar</code>は共同作業の成果であり、問題を報告した人、解決策やさまざまな知見を寄せた人、考えや提案を共有した人すべてに多くを負っていることを強調したいと思います。そうした貢献者の、網羅的ではないものの多くの名前を挙げた一覧が、GNU <code class="command">tar</code>配布物の<samp class="file">THANKS</samp>ファイルにあります。',
'Jay Fenlasonは、John Gilmoreによる元のmanページの説明を借りて、GNU <code class="command">tar</code>マニュアルの草稿をまとめました。この草稿はバージョン1.11で撤回されました。Thomas Bushnell, n/BSGとAmy Gorinは、GNU <code class="command">tar</code>のチュートリアルとマニュアルを作成しました。François Pinardは、これらの資料から情報を取り出して統合し、バージョン1.11.8のマニュアルをまとめました。最後にMelissa Weisshausが編集と再設計を行い、バージョン1.12の本書を作成しました。バージョン1.14から1.35までの本書は、現在の保守担当者Sergey Poznyakoffが編集しました。',
'バージョン1.12では、Daniel Hagertyが技術的な助言に大きく貢献しました。特に、<a href="/docs/gnu-tar/source/v1-35/manual.html#Backups">バックアップの実施とファイルの復元</a>の主な著者です。',
'2003年7月にGNU <code class="command">tar</code>はsavannah.gnu.orgのCVSへ登録され（<a href="https://savannah.gnu.org/projects/tar">https://savannah.gnu.org/projects/tar</a>を参照）、活発な開発と保守が再び始まりました。現在はPaul Eggert、Sergey Poznyakoff、Jeff Baileyが保守しています。',
'POSIXアーカイブのサポートはSergey Poznyakoffが追加しました。'],
['このプログラムやマニュアルに問題を見つけたり、提案があったりする場合は、<samp class="file">bug-tar@gnu.org</samp>へ報告してください。',
'バグを報告するときは、再現できるように、できるだけ詳しい情報を含めてください。'],
['この章では、<code class="command">tar</code>の3つの操作、<samp class="option">--create</samp>、<samp class="option">--list</samp>、<samp class="option">--extract</samp>について、基本的な例に沿って説明します。すでに他の版の<code class="command">tar</code>の使い方を知っているなら、この章を読む必要はないかもしれません。ここでは、<code class="command">tar</code>の動作に関する複雑な詳細のほとんどを省略しています。'],
['この章は、初心者が<code class="command">tar</code>について少しずつ学べる速さで進めます。同時に、これら3つの操作の基本的な側面をすべて扱うことを目指します。この両方を実現するため、本書を読む前に読者が持っている知識と、使用するハードウェアについて、いくつかの前提を置いています。'],
['例では、<samp class="samp">$</samp>は一般的なシェルのプロンプトを表します。これは入力すべき行の前に置きます。区別しやすいよう、入力する行は<kbd class="kbd">この書体</kbd>で示します。一方、コンピューターの応答を表す行は<code class="code">この書体</code>、または場合によっては<samp class="samp">このような書体</samp>で示します。']]
L9=['このチュートリアルを始める前に、「アーカイブ」と「アーカイブメンバー」という語の意味を理解しておく必要があります（<a href="/docs/gnu-tar/v1-35/en/01-guide/03-definitions/#Definitions">用語の定義</a>を参照）。また、Unix系オペレーティングシステムの動作と基本的なユーティリティーの使い方について、ある程度の知識が必要です。たとえば、ファイルやディレクトリの作成、一覧表示、コピー、名前変更、編集、削除、ディレクトリ間の移動、ファイルシステム内で現在いる場所の確認ができることを想定しています。ディレクトリ構造と、所属するディレクトリに応じたファイル名の付け方についても、基本的な理解が必要です。標準出力・標準入力といった概念、「<samp class="samp">argument</samp>」（引数）という語のさまざまな意味、相対ファイル名と絶対ファイル名の違いも理解している必要があります。',
'本書では、特に断らないかぎり、自分のホームディレクトリから作業しているものとします。このチュートリアルでは、<code class="command">tar</code>コマンドを練習するためのディレクトリを作ります。ファイル名を示すときは、ホームディレクトリからの相対名を想定します。たとえば、私のホームディレクトリは<samp class="file">/home/fsf/melissa</samp>です。例はすべてこのディレクトリの下にある、<samp class="file">practice</samp>というサブディレクトリ内で行います。',
'一般に、ハードディスク上のディレクトリに存在する、またはそこへ書き込める、そこから操作できるアーカイブを例に示します。多くの場合、テープドライブなど他のデバイスに書き込んだり、その上で操作したりすることもできます。ただし、チュートリアル後半と次の章にある一部の例は、テープドライブでは動作しません。また、テープの操作はハードディスクの操作よりはるかに複雑です。そのため、このチュートリアルではテープドライブの操作を扱いません。テープドライブで<code class="command">tar</code>アーカイブを使う方法の詳細は、<a href="/docs/gnu-tar/source/v1-35/manual.html#Media">テープとその他のアーカイブ媒体</a>を参照してください。']
labels=['はじめに','本書の内容','用語の定義','tarでできること','tarアーカイブの名前','GNU tarの著作者','バグや提案の報告','tarの入門チュートリアル','このチュートリアルの前提','表記上の約束','tarの基本操作とオプション','最もよく使う3つの操作','よく使う2つのオプション','--fileオプション','--verboseオプション','ヘルプの表示：--helpオプション','アーカイブの作成','例を試す練習用ディレクトリの準備','アーカイブの作成手順','--createと--verboseの併用','createの短い形式','ディレクトリのアーカイブ','アーカイブの一覧表示','格納されたディレクトリの内容の一覧表示','アーカイブからのメンバーの展開','アーカイブ全体の展開','特定のファイルの展開','ディレクトリであるファイルの展開','信頼できない提供元からのアーカイブの展開','失敗するコマンド','本書のさらに先へ']
labelByPage={r['page'][:-3]:labels[i]for i,r in enumerate(G['rows'])}
rows=[]
for i,r in enumerate(G['rows'][:10]):
 en=P/'en'/r['page'];raw=en.read_text();fm,body=raw.split('---',2)[1:];s=BeautifulSoup(body,'html.parser');b=s.select_one('.gnu-tar-original-content');targets=b.select('p,dt');assert len(targets)==len(T[i]),(i,len(targets));
 for x,text in zip(targets,T[i]):x.clear();x.extend(BeautifulSoup(text,'html.parser').contents)
 if i==8:
  li=b.select('ul.itemize>li');assert len(li)==3
  for x,text in zip(li,L9):x.clear();x.extend(BeautifulSoup(text,'html.parser').contents)
 h=b.find(re.compile('^h[1-6]$'));num=re.match(r'^[\d.]+',h.get_text()).group();h.clear();h.string=num+' '+labels[i]
 for a in b.select('ul.mini-toc a[href]'):
  path=a['href'].split('#')[0].split('/en/',1)[-1].rstrip('/');assert path in labelByPage,(i,path);a.clear();a.string=labelByPage[path]
 for a in b.select('a[href]'):a['href']=a['href'].replace('/v1-35/en/','/v1-35/ja/')
 fm=re.sub(r'^title: .+$','title: '+json.dumps(num+' '+labels[i],ensure_ascii=False),fm,flags=re.M);ja=P/'ja'/r['page'];ja.parent.mkdir(parents=True,exist_ok=True);ja.write_text('---'+fm+'---'+str(s));target=W/'apps/gnu-tar/src/content/docs/v1-35/ja'/r['page'];target.parent.mkdir(parents=True,exist_ok=True);target.write_bytes(ja.read_bytes());rows.append({'page':r['page'],'enSHA256':hashlib.sha256(en.read_bytes()).hexdigest(),'jaSHA256':hashlib.sha256(ja.read_bytes()).hexdigest(),'translatedBlocks':len(targets)+(3 if i==8 else 0),'title':num+' '+labels[i]})
(N/'BATCH1_TRANSLATION.json').write_text(json.dumps({'status':'draft-needs-separate-whole-review','batch':1,'pages':rows,'units':sum(r['translatedBlocks']for r in rows),'limits':'Not full operation content-reviewed. Mini-TOC uses all31 planned Japanese labels; future21 target routes remain pending until their translation batches.'},ensure_ascii=False,indent=2)+'\n');print('Batch1 ten drafts generated; blocks',sum(r['translatedBlocks']for r in rows))
