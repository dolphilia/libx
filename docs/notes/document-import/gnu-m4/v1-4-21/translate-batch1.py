import sys
from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,shutil,copy
N=Path(__file__).resolve().parent;W=Path(sys.argv[1]if len(sys.argv)>1 else '/private/tmp/libx-gnu-m4-formal-971');A=W/'apps/gnu-m4';C=lambda t:f'<code class="code">{t}</code>';V=lambda t:f'<var class="var">{t}</var>';K=lambda t:f'<kbd class="kbd">{t}</kbd>';Q=lambda t:f'<samp class="samp">{t}</samp>';EM=lambda t:f'<em class="emph">{t}</em>';U=lambda u:f'<a class="url" href="{u}">{u}</a>'
translations={
'01-preliminaries':[
'1 入門と予備知識',
f'この最初の章では、GNU {C("m4")}とは何か、{C("m4")}がどこから来たのか、この文書をどう読み、利用すればよいか、{C("m4")}プログラムをどう起動するか、バグをどう報告するかを説明します。最後に、マニュアルの残りを読むための助言を示します。',
f'続く章では、{C("m4")}言語のすべての機能を詳しく説明します。'],
'02-intro':[
f'1.1 {C("m4")}の紹介',
f'{C("m4")}は、入力を出力へコピーしながらマクロを展開するという意味でのマクロプロセッサです。マクロには組み込みのものとユーザー定義のものがあり、任意の個数の引数を取れます。単にマクロを展開するだけでなく、{C("m4")}には、名前を指定したファイルの取り込み、シェルコマンドの実行、整数演算、さまざまなテキスト操作、再帰などの組み込み機能があります。{C("m4")}は、コンパイラのフロントエンドとしても、独立したマクロプロセッサとしても使えます。',
f'{C("m4")}マクロプロセッサはあらゆるUNIXで広く利用でき、POSIXで標準化されています。通常、その存在を知っているユーザーはごく一部です。しかし、見つけた人は熱心なユーザーになることがよくあります。GNU Autoconfは<samp class="file">configure</samp>スクリプトの{EM("生成")}にGNU {C("m4")}を必要とするため、その人気が、多くの人にインストールを促しています。ただし、こうした人たちは自分で{C("m4")}のプログラムを書くわけではありません。GNU {C("m4")}は、いくつかの小さな違いを除き、System V Release 4版とほぼ互換です。詳しくは、<a class="xref" href="/docs/gnu-m4/source/v1-4-21/manual.html#Compatibility">他の版の{C("m4")}との互換性</a>を参照してください。',
f'{C("m4")}にかなり夢中になる人もいます。最初は{C("m4")}を簡単な問題に使い、次第に大きな課題に挑戦しながら、複雑な{C("m4")}マクロ群の書き方を学んでいきます。すっかり夢中になると、簡単な問題を解くためにも高度な{C("m4")}アプリケーションを書こうとし、本来の作業よりも{C("m4")}スクリプトのデバッグに多くの時間を費やします。プログラミングにのめり込む人にとって、{C("m4")}は健康を損なうおそれがあることに注意してください。'],
'03-history':[
'1.2 歴史的な参考文献',
f'マクロ言語はコンピューティングの歴史の初期に考案されました。1950年代、Alan Perlisはマクロ言語を処理対象の言語から独立させることを提案しました。条件付きマクロ、再帰マクロ、マクロを使って他のマクロを定義する技法は、Bell LabsのDoug McIlroyが「Macro Instruction Extensions of Compiler Languages」、{EM("Communications of the ACM")} 3, 4（1960年）、214–20、{U("https://dl.acm.org/doi/10.1145/367177.367223")}で説明しています。',
f'{C("m4")}の重要な先駆けはGPMです。C. Stracheyの「A general purpose macrogenerator」、{EM("Computer Journal")} 8, 3（1965年）、225–41、{U("https://academic.oup.com/comjnl/article/8/3/225/336044")}を参照してください。GPMはDavid Griesの著書{EM("Compiler Construction for Digital Computers")}、Wiley（1971年）にも簡潔に説明されています。Stracheyは優れたプログラマで、GPMは250個の機械命令に収まりました。',
f'1968年にStracheyの研究室を訪れた際、GPMに着想を得たMcIlroyは、Snobol 3のコード1ページに収まるモデルとなるプリプロセッサを書きました。その後、McIlroyとRobert MorrisはBell Labsで一連の後続モデルを開発しました。Andrew D. Hallはそれに続いて、数式処理システムAltranのFortranソースコードを移植するための汎用マクロプロセッサM6を開発しました。Hallの「The M6 Macro Processor」、Computing Science Technical Report #2、Bell Labs（1972年）、{U("http://cm.bell-labs.com/cm/cs/cstr/2.pdf")}を参照してください。M6のソースコードは約600個のFortran文で構成されていました。その名前が、{C("m4")}系統の最初のものになりました。',
f'Brian KernighanとP.J. Plaugerの著書{EM("Software Tools")}、Addison-Wesley（1976年）は、Unixのマクロプロセッサ言語を説明し、実装しています。これに着想を得たDennis Ritchieは、AP-3ミニコンピュータ向けのマクロプロセッサ{C("m3")}を書きました。',
f'その後KernighanとRitchieは協力し、オリジナルの{C("m4")}を開発しました。これは「The M4 Macro Processor」、Bell Laboratories（1977年）、{U("https://wolfram.schneider.org/bsd/7thEdManVol2/m4/m4.pdf")}で説明されています。組み込みマクロはわずか21個でした。',
f'{C("GPM")}はより{EM("純粋")}でしたが、{C("m4")}は実際の利用で生じる複雑さに対応するように作られています。たとえば、あらかじめ宣言しなくてもマクロを認識でき、空白や行末を読み飛ばしやすく、他の構成から導出する代わりに組み込みで用意された構成が多い、といった点です。',
f'当初、KernighanとPlaugerのマクロプロセッサ、続いて{C("m3")}は、Rational FORTRANプリプロセッサ、すなわち{C("Ratfor")}にとっての{C("cpp")}に相当する処理系の中核となりました。その後、{C("m4")}は{C("Ratfor")}、{C("C")}、{C("Cobol")}のフロントエンドに使われました。',
f'René Seindalは1990年、多くの従来の{C("m4")}実装にあった最大行長、マクロサイズ、マクロ数などの人為的な制限を取り除くことを目指し、自身による{C("m4")}実装であるGNU {C("m4")}を公開しました。',
f'故A. Dain Samples教授は、さらに発展させた{C("M5")}を説明・実装しました。「User’s Guide to the M5 Macro Language: 2nd edition」、comp.compilersニュースグループでの電子的な告知（1992年）を参照してください。',
f'François Pinardは1992年にGNU {C("m4")}の保守を引き継ぎ、1994年にGNU {C("m4")} 1.4をリリースするまで担当しました。1.4は10年間にわたって安定版でした。この時期にGNU Autoconfは、他のすべての{C("m4")}実装には制限が多すぎるとして、基盤の処理系にGNU {C("m4")}を必須とすることを決めました。',
f'より最近では、2004年にPaul Eggertが1.4.1と1.4.2をリリースし、長年使われてきた1.4に残っていたバグを修正しました。続いて2005年、Gary V. Vaughanはネット上に散在していたGNU {C("m4")} 1.4用の多数のパッチをまとめ、1.4.3と1.4.4をリリースしました。2006年にはEric Blakeがチームに加わり、1.4.5のリリースに向けたパッチを用意しました。その後もリリースは続き、近年では2025年に1.4.20がリリースされています。',
f'一方、{C("m4")}の動的モジュール読み込みや追加の組み込み機能など、新機能の開発も続いています。完成すると、GNU {C("m4")} 2.0から新しいリリース系列が始まります。'],
'04-bugs':[
'1.3 問題とバグ',
'GNU M4で問題が起きた場合や、バグを見つけたと思った場合は報告してください。報告する前に、本当にバグを見つけたか確認してください。文書を注意深く読み直し、しようとしていることが可能だと本当に書かれているか確かめてください。可能なはずなのか明確でない場合も報告してください。それは文書のバグです。',
f'バグを報告したり自分で修正を試みたりする前に、問題を再現する入力ファイルをできるだけ小さくしてください。その入力ファイルと、{C("m4")}が実際に返した正確な結果を送ってください。何が起きると期待していたのかも知らせてください。問題が本当に文書にあったかどうかの判断に役立ちます。',
f'問題を明確にできたら、<a class="email" href="mailto:bug-m4@gnu.org">bug-m4@gnu.org</a>へメールを送ってください。使用中の{C("m4")}のバージョン番号を必ず記載してください。この情報は{K("m4 --version")}コマンドで取得できます。実行環境の詳細も記載してください。',
'バグ以外の提案もいつでも歓迎します。文書の分かりにくい点や、単にあまり知られていない機能について質問がある場合も、ぜひ報告してください。'],
'05-manual':[
'1.4 このマニュアルの使い方',
f'このマニュアルには{C("m4")}の入力と出力の例が多数あり、入力、出力、{C("m4")}のエラーメッセージを区別するための簡単な表記法を使います。例は通常の文章と分け、次のように等幅フォントで示します。',
f'入力と出力を区別するため、{C("m4")}のすべての出力には{Q("⇒")}、すべてのエラーメッセージには{Q("error→")}を先頭に付けます。コマンドラインオプションの影響を示す場合、コマンドラインは「<samp class="samp">$ <kbd class="kbd">like this</kbd></samp>」というプロンプト付きで示します。それ以外の場合は、単に{K("m4")}を起動すればよいと考えてください。次のようになります。',
f'例の中の{Q("^D")}は入力ファイルの終わりを示します。「<samp class="samp"><kbd class="key">NL</kbd></samp>」は改行文字を指します。これらの例の大半は単独で実行でき、{K("m4 -d")}を起動すれば同様の結果が得られます。実際、GNU M4パッケージに同梱されたテストスイートは、この文書の例から構成されています。一部の例は、カレントディレクトリがインストール用配布物を展開した場所であることを前提とします。例を追試する予定なら、今その場所へ移動しておくと便利です。',
f'{C("m4")}の各定義済みマクロを説明するときは、引数に説明的な名前を付け、マクロ呼び出しの原型を次のように示します。',
f'これは原型の例です。実際に{C("example")}という名前のマクロがあるわけではありませんが、仮にあれば、組み込みマクロ（Builtin）ではなく合成マクロ（Composite）であることを示しています。少なくとも1つの引数{V("string")}が必要です。{C("m4")}では、引数なしでマクロを呼び出す意図がない限り、マクロ名と開き括弧の間に空白を入れてはいけないことを思い出してください。{V("count")}と{V("argument")}を囲む角括弧は、これらが省略可能な引数であることを示します。{V("count")}を省略すると、countが{Q("1")}であるかのように振る舞います。一方、{V("argument")}を省略すると、空文字列であるかのように振る舞います。空の引数と、省略した引数は同じではありません。たとえば、{Q("example(`a\')")}、{Q("example(`a\',`1\')")}、{Q("example(`a\',`1\',)")}は、いずれも{V("count")}を{Q("1")}に設定した同じ振る舞いになります。それに対し、{Q("example(`a\',)")}と{Q("example(`a\',`\')")}では、{V("count")}に空文字列を明示的に渡します。省略記号（{Q("…")}）は、{V("argument")}より後にある追加の引数を無視せず、処理することを示します。',
f'{C("m4")}のマクロ引数はすべて文字列ですが、一部は数値、ファイル名、正規表現などとして特別に解釈されます。各マクロの説明では、引数の解釈と、目的の解釈に従って引数を解析できない場合に何が起きるかを示します。特に指定がない限り、数値として指定された引数は、先頭にゼロがあっても10進数として解析されます。また、空文字列を数値として解析するとエラーではなく0になりますが、警告は出されます。',
f'この文書では、英単語であるかのように、ハイフンを入れずに<em class="dfn">builtin</em>と一貫して表記・使用します。これは{C("m4")}内部での{C("builtin")}プリミティブのつづりです。']}
rows=[]
for stem,blocks in translations.items():
 src=N/'preferred/en/01-guide'/(stem+'.md');front,body=src.read_text().split('---',2)[1:];s=BeautifulSoup(body,'html.parser');nodes=s.select('h2,h3,p');assert len(nodes)==len(blocks),(stem,len(nodes),len(blocks))
 for node,text in zip(nodes,blocks):
  node.clear();parsed=BeautifulSoup(text,'html.parser')
  for child in list(parsed.contents):node.append(child)
 if stem=='01-preliminaries':
  for a,text in zip(s.select('.mini-toc a'),[C('m4')+'の紹介','歴史的な参考文献','問題とバグ','このマニュアルの使い方']):
   a.clear()
   for child in list(BeautifulSoup(text,'html.parser').contents):a.append(child)
 if stem=='05-manual':s.select_one('.category-def').string='合成マクロ（Composite）: '
 for a in s.select('a[href]'):
  a['href']=a['href'].replace('/v1-4-21/en/','/v1-4-21/ja/')
 title=BeautifulSoup(blocks[0],'html.parser').get_text(' ',strip=True);lines=front.splitlines();front='\n'.join('title: '+json.dumps(title,ensure_ascii=False)if x.startswith('title: ')else x for x in lines)
 out='---'+front+'\n---\n\n'+str(s).strip()+'\n';p=N/'preferred/ja/01-guide'/(stem+'.md');p.parent.mkdir(parents=True,exist_ok=True);p.write_text(out);target=A/'src/content/docs/v1-4-21/ja/01-guide'/p.name;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,target);rows.append({'page':'01-guide/'+p.name,'sourceSHA256':hashlib.sha256(src.read_bytes()).hexdigest(),'draftSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'translatedBlocks':len(blocks)})
(N/'REGENERATED_BATCH1_TRANSLATION.json').write_text(json.dumps({'status':'drafted-not-whole-meaning-reviewed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'rows':rows,'limits':'Independent translation; no third-party Japanese text reused; full separate review/structure/build pending.'},ensure_ascii=False,indent=2)+'\n');print('Drafted5JApages; separate full review pending')
