from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,re,copy,hashlib,shutil,os
N=Path(__file__).resolve().parent;A=Path(os.environ.get('LIBX_WORKSPACE','/private/tmp/libx-gnu-libtool-998'))/'apps/gnu-libtool';data=json.loads((N/'TRANSLATION_DATA.json').read_text());units=json.loads((N/'TRANSLATION_UNITS.json').read_text());gen=json.loads((N/'CANONICAL_GENERATION.json').read_text());h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
titles=['2 Libtoolの考え方','3 libtoolを使う','3.1 オブジェクトファイルの作成','3.2 ライブラリのリンク','3.3 実行可能ファイルのリンク','3.3.1 未インストールのプログラムのラッパー実行形式','3.4 実行可能ファイルのデバッグ','3.5 ライブラリのインストール','3.6 実行可能ファイルのインストール','3.7 静的ライブラリのリンク']
notes={
'Using-libtool':['この例は、デモのテストを生成物を残す指定で実行し、保存されたディレクトリを demo/ へコピーします。'],
'Creating-object-files':['main.c を通常のオブジェクト main.o にコンパイルします。','foo.c と hello.c を通常のオブジェクトにコンパイルします。','静的ライブラリだけの環境では、libtool が通常のオブジェクト foo.o と hello.o を生成します。','コメントは「foo.lo は ltmain.sh（GNU libtool）2.6.2 が生成した libtool オブジェクトファイルであり、リンクに必要なので削除しないこと」を示します。PIC オブジェクトの名前は none、非 PIC オブジェクトの名前は foo.o です。','共有ライブラリのある環境では .libs を作成し、PIC 版と非 PIC 版の2回コンパイルします。2回目の標準出力と標準エラーは破棄されます。','コメントは「foo.lo は ltmain.sh（GNU libtool）2.6.2 が生成した libtool オブジェクトファイルであり、リンクに必要なので削除しないこと」を示します。PIC オブジェクトは .libs/foo.o、非 PIC オブジェクトは foo.o です。','-no-suppress を指定すると、PIC 版と非 PIC 版の両方のコンパイル出力を確認できます。'],
'Linking-libraries':['ar で通常のオブジェクトを静的ライブラリへまとめます。','ranlib でライブラリのシンボルテーブルを作成します。','警告は「共有ライブラリ libhello.la を、libtool で生成していない foo.o と hello.o にリンクする方法には移植性がない」という意味です。続いてアーカイブ、シンボルテーブル、制御ファイル、シンボリックリンクを作成する出力が続きます。','foo.lo と hello.lo を使い、インストール先と数学ライブラリを指定してリンクします。アーカイブ、シンボルテーブル、制御ファイルとリンクの生成が表示されます。','共有ライブラリ環境では古い生成物を取り除き、PIC オブジェクトから共有ライブラリ、通常のオブジェクトから静的ライブラリを作成し、制御ファイルとリンクを生成します。'],
'Linking-executables':['従来の方法で、main.o と静的ライブラリ、数学ライブラリをリンクして hell.old を作成します。','libtool が .la を静的アーカイブへ置き換え、保存済みの数学ライブラリ依存 -lm も gcc に渡しています。','本体を .libs/hell に作成し、現在のディレクトリにラッパー hell を生成します。','インストール済みのライブラリの場所と名前を、コンパイラに直接指定する例です。','libtool が実行時の検索パスと -lm を補ってリンクし、ラッパー test を作成します。','出力は「GNU Hell へようこそ。これは GNU Hello ではなく、組み込みメールリーダーはない」という挨拶です。続く real・user・sys は各実行の実時間・ユーザーCPU時間・システムCPU時間で、ここではラッパー経由の方が長くなっています。','ls の出力で、実行可能ファイルと静的・共有ライブラリのサイズ、アクセス権、日時を比較しています。'],
'Debugging-executables':['GDB の案内は、自由ソフトウェアで条件に従い再配布できること、条件は show copying、無保証の詳細は show warranty で確認できることを示します。その後「hell は実行可能形式でない。ファイル形式を認識できない」と報告され、quit で終了します。','GDB は GPL による自由ソフトウェアで、条件に従って変更・再配布でき、show copying と show warranty で条件・無保証の詳細を確認できます。main.c の29行目にブレークポイントを設定して実行しますが、「libhello.so.0 をロードできない」となり、終了コード020で終了します。','GDB の自由ソフトウェア・GPL・無保証の案内は前例と同じです。libtool 経由なら正しく起動し、main.c の29行目で停止します。表示された printf の挨拶は「GNU Hell へようこそ」です。quit 後の問いは「プログラムは実行中です。それでも終了し、終了時にプログラムも強制終了しますか」です。y と答えて終了します。'],
'Installing-libraries':['su で利用者を切り替え、パスワード入力を経て、静的ライブラリを /usr/local/lib にコピーします。例の Password は「パスワード」の入力要求です。','コピー先のライブラリに ranlib を実行します。','静的ライブラリの環境で .la 制御ファイルと .a アーカイブをインストールし、ranlib を実行します。','共有ライブラリ、.la 制御ファイル、静的アーカイブをそれぞれインストールし、ranlib を実行します。','出力は、ライブラリを /usr/local/lib にインストールしたことを示します。ディレクトリ LIBDIR のインストール済みライブラリにリンクするには -LLIBDIR が必要です。さらに、実行時の LD_LIBRARY_PATH に LIBDIR を加える、リンク時の LD_RUN_PATH に加える、またはリンカーフラグ -RLIBDIR を使う、のいずれかが必要です。詳細は共有ライブラリについてのOS文書、たとえば ld や ld.so のマニュアルを参照するよう案内しています。先頭には ldconfig のコマンド案も表示されます。'],
'Installing-executables':['Ultrix の例では、実行可能ファイル hell をそのまま /usr/local/bin/hell へインストールします。','共有ライブラリの環境では、ラッパーではなく .libs/hell にある本体をインストールします。'],
'Static-libraries':['install-sh で静的アーカイブを /local/lib にインストールし、ranlib を実行します。']}
records=[]
for i,row in enumerate(gen['rows'][:10]):
 en=(N/row['canonical']).read_text();front,body=en.split('---',2)[1:];s=BeautifulSoup(body,'html.parser');n=s.select_one('.gnu-libtool-original-content');node=n.find(id=row['nodeId']);node.find(['h2','h3','h4']).string=titles[i];elements=node.select('p,dt,dd');us=[x for x in units if x['nodeId']==row['nodeId']];j=0
 for idx,x in enumerate(elements):
  if x.name=='dd'and x.find('p'):continue
  u=us[j];j+=1;assert u['id']==row['nodeId']+':'+str(idx)
  text=data[u['id']];original=BeautifulSoup(u['html'],'html.parser');x.clear();x.append(text)
  # Keep original link objects/footnoteIDs; translate surrounding prose independently.
  for a in original.select('a'):
   target=copy.deepcopy(a)
   if target.get('href','').startswith('/docs/gnu-libtool/v2-6-2/en/'):target['href']=target['href'].replace('/en/','/ja/',1)
   label='{'+a['href'][1:]+'}'if a.get('class')and'footnote'in a['class']else a.get_text(' ',strip=True)
   assert label in x.get_text(),(u['id'],label)
   for t in list(x.find_all(string=True)):
    if label in str(t):
     before,after=str(t).split(label,1);t.replace_with(NavigableString(before),target,NavigableString(after));break
  # Preserve inline literal identifiers and emphasis where an exact original spelling occurs.
  tags={a.get_text(' ',strip=True):a.name for a in original.select('samp,code,var')if not a.find_parent(['samp','code','var'])}
  for t in list(x.find_all(string=True)):
   if t.find_parent(['a','samp','code','var']):continue
   pattern='|'.join(re.escape(k)for k in sorted(tags,key=len,reverse=True)if k)
   if not pattern:continue
   pieces=[];pos=0
   for m in re.finditer(pattern,str(t)):
    pieces.append(NavigableString(str(t)[pos:m.start()]));tag=s.new_tag(tags[m.group()]);tag.string=m.group();pieces.append(tag);pos=m.end()
   if pieces:pieces.append(NavigableString(str(t)[pos:]));t.replace_with(*pieces)
 assert j==len(us)
 # Preserve and translate the original mini-TOC links as well as prose links.
 for a in node.select('a[href]'):
  if a['href'].startswith('/docs/gnu-libtool/v2-6-2/en/'):
   a['href']=a['href'].replace('/en/','/ja/',1)
  for idx,targetRow in enumerate(gen['rows'][:10]):
   if a['href'].startswith('/docs/gnu-libtool/v2-6-2/ja/'+targetRow['page'].removesuffix('.md')+'/'):
    a.clear();a.append(re.sub(r'^[0-9.]+ ', '',titles[idx]));break
 pres=node.select('pre');ns=notes.get(row['nodeId'],[]);assert len(pres)==len(ns),(row['nodeId'],len(pres),len(ns))
 for pre,note in zip(pres,ns):
  p=s.new_tag('p',attrs={'class':'gnu-libtool-code-note'});p.string=note;pre.parent.insert_after(p)if pre.parent.name=='div'else pre.insert_after(p)
 serialized=str(n)
 for pre in n.select('pre'):serialized=serialized.replace(str(pre),str(pre).replace('\n','&#10;'))
 front=re.sub(r'^title:.*$', 'title: '+json.dumps(titles[i],ensure_ascii=False),front,flags=re.M)
 p=N/'preferred/ja'/row['page'];p.parent.mkdir(parents=True,exist_ok=True);p.write_text('---'+front+'---\n\n'+serialized+'\n');dest=A/'src/content/docs/v2-6-2/ja'/row['page'];dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,dest);records.append({'page':row['page'],'sha256':h(p),'units':len(us),'pre':len(pres),'codeNotes':len(ns)})
(N/'TRANSLATION_GENERATION.json').write_text(json.dumps({'status':'draft-not-reviewed','rows':records,'translatedGuides':10,'units':91,'literalCodeBlocks':31,'adjacentJapaneseCodeNotes':31},ensure_ascii=False,indent=2)+'\n');print('10Japanese drafts;91units;31literalcode+notes;review pending')
