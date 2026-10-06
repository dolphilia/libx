from pathlib import Path
from bs4 import BeautifulSoup
import copy,html,json,hashlib,datetime,shutil
from collections import Counter
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/commonmark/v0-31-2';W=Path('/private/tmp/libx-commonmark-formal-887');J=N/'translations/batch-888';record=J/'SAVED_SIX_DRAFTS.json';rows=json.loads(record.read_text()) if record.exists() else []
def save(route,make,labels):
 p=N/'canonical/en/01-guide'/(route+'.md')
 out=J/(route+'.md')
 if out.exists():
  r=next(x for x in rows if x['route']==route);assert r['sourceENSHA256']==hashlib.sha256(p.read_bytes()).hexdigest();assert r['savedJASHA256']==hashlib.sha256(out.read_bytes()).hexdigest();assert out.read_bytes()==(W/out.relative_to(R)).read_bytes();print(route+' saved draft reused/unreviewed');return
 s=BeautifulSoup(p.read_text(),'html.parser').select_one('.commonmark-original-content');original=copy.deepcopy(s);ps=s.select('p')
 def a(pi,ai,label=None):
  n=copy.deepcopy(ps[pi].select('a')[ai])
  if label is not None:n.clear();n.append(label)
  return str(n)
 def c(pi,ci=0):return str(ps[pi].select('code')[ci])
 text=make(a,c,ps);assert len(text)==len(ps),(route,len(text),len(ps))
 for node,value in zip(ps,text):
  node.clear();f=BeautifulSoup(value,'html.parser')
  for child in list(f.contents):node.append(child)
 assert len(labels)==len(s.select('h2,h3'))
 for h,label in zip(s.select('h2,h3'),labels):
  number=copy.deepcopy(h.select_one('.number'));h.clear();h.append(number);h.append(label)
 for ex in s.select('.commonmark-example'):
  link=ex.select_one('.examplenum a');link.clear();link.append('例'+ex['id'].split('-')[1])
 assert [x.get_text() for x in s.select('code')]==[x.get_text() for x in original.select('code')],route+'code'
 assert [x['id'] for x in s.select('[id]')]==[x['id'] for x in original.select('[id]')],route+'IDs'
 assert Counter(x['href'] for x in s.select('a[href]'))==Counter(x['href'] for x in original.select('a[href]')),route+'links'
 for translated,source in zip(s.select('p'),original.select('p')):
  assert Counter(x['href'] for x in translated.select('a[href]'))==Counter(x['href'] for x in source.select('a[href]')),route+'paragraph-links'
 literals=[]
 for i,x in enumerate(s.select('pre code')):
  key=f'LIBX_COMMONMARK_LITERAL_CODE_{i:05d}_END';literals.append((key,html.escape(x.get_text(),quote=False).replace('\n','&#10;').replace('\t','&#9;')));x.clear();x.append(key)
 md=str(s)+'\n'
 for k,v in literals:assert md.count(k)==1;md=md.replace(k,v)
 out=J/(route+'.md');assert not out.exists();out.write_text(md);dest=W/out.relative_to(R);dest.parent.mkdir(exist_ok=True,parents=True);shutil.copyfile(out,dest);rows.append({'route':route,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sourceENPath':str(p.relative_to(R)),'sourceENSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'savedJAPath':str(out.relative_to(R)),'savedJASHA256':hashlib.sha256(md.encode()).hexdigest(),'paragraphs':len(ps),'originalCodeBlocks':len(original.select('pre code')),'codeAndIDsAndHrefValuesExact':True,'meaningReview':'pending-one-separatewholepass','canonicalIntegrated':False});(J/'SAVED_SIX_DRAFTS.json').write_text(json.dumps(rows,indent=2)+'\n');print(route+' draft saved/unreviewed')
save('02-characters-and-lines',lambda a,c,ps:[
f'どのような{a(0,0,"文字")}の並びも、有効なCommonMark文書です。',
f'{a(1,0,"文字")}とはUnicodeのコードポイントです。直感的な意味での文字に対応しないコードポイントもあります。たとえば結合アクセント記号がその例です。しかし、この仕様ではすべてのコードポイントを文字として数えます。',
f'この仕様は文字エンコーディングを定めません。行を構成するものは、バイトではなく{a(2,0,"文字")}だと考えます。仕様に適合するパーサーであっても、特定のエンコーディングだけを扱うように制限されていてかまいません。',
f'{a(3,0,"行")}とは、ラインフィード（{c(3,0)}）とキャリッジリターン（{c(3,1)}）以外の、0個以上の{a(3,1,"文字")}の並びで、その後に{a(3,2,"行末")}またはファイルの終端が続くものです。',
f'{a(4,0,"行末")}とは、ラインフィード（{c(4,0)}）、後ろにラインフィードが続かないキャリッジリターン（{c(4,1)}）、またはキャリッジリターンとそれに続くラインフィードの組です。',
f'文字を1つも含まない行、またはスペース（{c(5,0)}）とタブ（{c(5,1)}）だけを含む行を、{a(5,0,"空行")}と呼びます。',
'この仕様では、次の文字クラスの定義を使います。',
f'{a(7,0,"Unicode空白文字")}とは、Unicodeの一般カテゴリ{c(7,0)}に属する文字、またはタブ（{c(7,1)}）、ラインフィード（{c(7,2)}）、フォームフィード（{c(7,3)}）、キャリッジリターン（{c(7,4)}）です。',
f'{a(8,0,"Unicode空白類")}とは、1個以上の{a(8,1,"Unicode空白文字")}の並びです。',
f'{a(9,0,"タブ")}は{c(9)}です。',
f'{a(10,0,"スペース")}は{c(10)}です。',
f'{a(11,0,"ASCII制御文字")}とは、{c(11,0)}の範囲内の文字（両端を含む）、または{c(11,1)}です。',
f'{a(12,0,"ASCII句読記号文字")}とは、'+ '、'.join(c(12,i) for i in range(15))+'（U+0021–2F）、'+ '、'.join(c(12,i) for i in range(15,22))+'（U+003A–0040）、'+ '、'.join(c(12,i) for i in range(22,28))+'（U+005B–0060）、'+ '、'.join(c(12,i) for i in range(28,32))+'（U+007B–007E）のいずれかです。',
f'{a(13,0,"Unicode句読記号文字")}とは、Unicodeの一般カテゴリ{c(13,0)}（句読記号）または{c(13,1)}（記号）に属する文字です。'
],['前提事項','文字と行'])
save('03-tabs',lambda a,c,ps:[
f'行の中のタブは、{a(0,0,"スペース")}には展開されません。ただし、スペースがブロック構造の定義に使われる文脈では、タブは4文字間隔のタブストップでスペースに置き換えられたかのように扱われます。',
'したがって、たとえば字下げによるコードブロックでは、4個のスペースの代わりにタブを使えます。ただし、内部のタブはスペースに展開されず、実際のタブのまま引き渡されることに注意してください。',
'次の例では、リスト項目の続きの段落がタブで字下げされています。その効果は、4個のスペースによる字下げとまったく同じです。',
f'通常、ブロック引用を始める{c(3,0)}の後には、任意でスペースを1つ置けます。このスペースは内容の一部とはみなされません。次の例では{c(3,1)}の後にタブがあり、そのタブを3個のスペースに展開したものとして扱います。このうち1個のスペースは区切り記号の一部とみなされるため、{c(3,2)}はブロック引用の内部で6個のスペースによって字下げされているとみなされます。したがって、先頭に2個のスペースを持つ字下げコードブロックになります。',
f'安全上の理由から、Unicode文字{c(4,0)}は置換文字（REPLACEMENT CHARACTER、{c(4,1)}）に置き換えなければなりません。'
],['タブ','安全でない文字'])
save('04-backslash-escapes',lambda a,c,ps:[
'どのASCII句読記号文字も、バックスラッシュでエスケープできます。',
'それ以外の文字の前にあるバックスラッシュは、文字そのものとして扱われます。',
'エスケープされた文字は普通の文字として扱われ、通常のMarkdownでの意味を持ちません。',
'バックスラッシュ自体がエスケープされている場合、その次の文字はエスケープされません。',
f'行末のバックスラッシュは{a(4,0,"ハード改行")}になります。',
'バックスラッシュによるエスケープは、コードブロック、コードスパン、自動リンク、生のHTMLの中では働きません。',
f'それ以外のすべての文脈では働きます。これには、URL、リンクのタイトル、リンク参照、{a(6,1,"フェンス付きコードブロック")}の{a(6,0,"情報文字列")}も含まれます。'
],['バックスラッシュによるエスケープ'])
save('05-character-references',lambda a,c,ps:[
'次の例外を除き、有効なHTML実体参照と数値文字参照は、対応するUnicode文字の代わりに使えます。',
'実体参照と文字参照は、コードブロックやコードスパンの中では認識されません。',
f'実体参照と文字参照は、CommonMarkの構造要素を定義する特殊文字の代わりにはなりません。たとえば{c(2,0)}は文字としての{c(2,1)}の代わりに使えますが、{c(2,2)}を、強調の区切り、箇条書きのリストマーカー、主題区切りの{c(2,3)}の代わりに使うことはできません。',
'仕様に適合するCommonMarkパーサーは、ある文字がソース中でUnicode文字として書かれていたか、実体参照として書かれていたかという情報を保存する必要はありません。',
f'{a(4,0,"実体参照")}は、{c(4,0)}、有効なHTML5実体名のいずれか、{c(4,1)}を順に並べたものです。有効な実体参照と対応するコードポイントの正式な情報源として、文書{a(4,1)}を使います。',
f'{a(5,0,"10進数値文字参照")}は、{c(5,0)}、1〜7桁のアラビア数字の並び、{c(5,1)}からなります。数値文字参照は、対応するUnicode文字として解析されます。無効なUnicodeコードポイントは、置換文字（REPLACEMENT CHARACTER、{c(5,2)}）に置き換えられます。安全上の理由から、コードポイント{c(5,3)}も{c(5,4)}に置き換えられます。',
f'{a(6,0,"16進数値文字参照")}は、{c(6,0)}、{c(6,1)}または{c(6,2)}、1〜6桁の16進数字の並び、{c(6,3)}からなります。これらも、対応するUnicode文字として解析されます。ただし、今回は10進数ではなく16進数で指定されます。',
'次は、実体参照にはならない例です。',
f'HTML5では末尾のセミコロンを省いた実体参照も一部受け付けます。たとえば{c(8)}がその例です。しかし、この仕様では文法が曖昧になりすぎるため、それらは認識されません。',
'HTML5の名前付き実体の一覧にない文字列も、実体参照としては認識されません。',
f'実体参照と数値文字参照は、コードスパンとコードブロックを除くあらゆる文脈で認識されます。URL、{a(10,0,"リンクのタイトル")}、{a(10,1,"フェンス付きコードブロック")}の{a(10,2,"情報文字列")}もその対象です。',
'実体参照と数値文字参照は、コードスパンとコードブロックの中では、文字列そのものとして扱われます。',
'実体参照と数値文字参照は、CommonMark文書の構造を示す記号の代わりには使えません。'
],['実体参照と数値文字参照'])
save('06-blocks-and-inlines',lambda a,c,ps:[
f'文書は、{a(0,0,"ブロック")}の並びとして考えられます。ブロックとは、段落、ブロック引用、リスト、見出し、区切り線、コードブロックなどの構造要素です。ブロック引用やリスト項目のように、別のブロックを含むブロックもあります。一方、見出しや段落のようなブロックは、テキスト、リンク、強調されたテキスト、画像、コードスパンなどの{a(0,1,"インライン")}内容を含みます。',
'ブロック構造を示す記号は、インライン構造を示す記号よりも常に優先されます。したがって、たとえば次の例は、コードスパンを含む1つの項目からなるリストではなく、2つの項目からなるリストです。',
'このことから、解析は2段階で進められます。まず、文書のブロック構造を判別します。次に、段落、見出し、その他のブロック構造の内部にあるテキスト行を、インライン構造として解析します。第2段階では、リンク参照定義についての情報が必要になりますが、その情報がそろうのは第1段階の終わりです。第1段階では行を順番に処理する必要があります。一方、第2段階は並列に処理できます。あるブロック要素のインライン解析は、ほかのブロック要素のインライン解析に影響しないためです。',
f'ブロックは、ほかのブロックを含められる{a(3,0,"コンテナブロック")}と、含められない{a(3,1,"葉ブロック")}の2種類に分けられます。'
],['ブロックとインライン','優先順位','コンテナブロックと葉ブロック'])
save('07-thematic-breaks',lambda a,c,ps:[
'この節では、Markdown文書を構成するさまざまな種類の葉ブロックについて説明します。',
f'任意で最大3個のスペースによる字下げを置いた後に、同じ{c(1,0)}、{c(1,1)}、または{c(1,2)}という文字を3個以上並べた行は、{a(1,0,"主題区切り")}になります。それぞれの文字の後には、任意の数のスペースまたはタブを置いてかまいません。',
'使用できない文字の例です。',
'文字の数が足りない例です。',
'最大3個のスペースによる字下げが許されます。',
'4個のスペースによる字下げは多すぎます。',
'文字は3個より多くてもかまいません。',
'文字の間にスペースやタブを置けます。',
'末尾にスペースやタブを置けます。',
'ただし、それ以外の文字を行に含めることはできません。',
'スペースとタブ以外の文字は、すべて同じでなければなりません。したがって、次の例は主題区切りにはなりません。',
'主題区切りの前後に空行を置く必要はありません。',
'主題区切りは、段落を中断できます。',
f'主題区切りとなるための上の条件を満たすハイフンの行が、{a(13,0,"Setext見出し")}の下線としても解釈できる場合は、{a(13,1,"Setext見出し")}としての解釈が優先されます。したがって、たとえば次の例は、段落の後に主題区切りが続いているのではなく、Setext見出しです。',
'ある行が主題区切りともリスト項目とも解釈できる場合は、主題区切りが優先されます。',
'リスト項目の中に主題区切りを入れたい場合は、別の箇条書き記号を使ってください。'
],['葉ブロック','主題区切り'])
