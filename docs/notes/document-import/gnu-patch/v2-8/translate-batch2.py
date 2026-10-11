from pathlib import Path
from bs4 import BeautifulSoup
import json,re,hashlib,shutil,sys
N=Path(__file__).resolve().parent;W=Path(sys.argv[1]if len(sys.argv)>1 else '/private/tmp/libx-gnu-patch-formal-979')
T={
'06-compatibility':('互換性の問題',[
'POSIX規格は、GNU <code>patch</code>とは異なる動作を規定しています。',
'POSIXの<code>patch</code>では、<code>-b</code>を指定しなければ、不一致があってもバックアップを作成しません。GNU <code>patch</code>では、<code>--no-backup-if-mismatch</code>を指定するか、<code>--posix</code>または環境変数<code>POSIXLY_CORRECT</code>の設定によってPOSIXに準拠させると、この動作になります。',
'パッチのヘッダーから適用対象のファイル名を推測するとき、<code>patch</code>は複雑な方法を使用し、必要に応じてPOSIXに準拠させられます。コンテキスト差分のヘッダーと<code>Index:</code>行にあるファイル名が、先頭部分を取り除いた後にすべて同じになる場合、この方法はPOSIXと同等です。各ヘッダーのファイル名がすべて同じ数のスラッシュを含んでいれば、通常、そのパッチには互換性があります。',
'GNU <code>patch</code>またはPOSIXに準拠する<code>patch</code>を使うすべての人が実行できる手順を送る場合、使用するオプションは次のものに限定してください。次の一覧の空白は省略できます。'
]),
'07-bugs':('既知の問題',[
'バグは電子メールで<code>&lt;bug-patch@gnu.org&gt;</code>へ報告してください。',
'コードが重複している場合（たとえば<code>#ifdef OLDCODE</code> ... <code>#else ... #endif</code>）、<code>patch</code>は両方の版へパッチを適用できません。適用できたとしても、誤った方へ適用する可能性が高く、そのうえ成功したと報告します。',
'適用済みのパッチをもう一度適用すると、<code>patch</code>は反転したパッチだと考え、適用を取り消すか尋ねます。これは機能と考えることもできます。',
'ハンクをマージする方法の計算は、通常の曖昧照合アルゴリズムを使うよりも、はるかに困難です。ハンクが大きい、コンテキストが多い、元の位置からのオフセットが大きい、一致の度合いが低いといった条件はいずれも、アルゴリズムを遅くします。'
]),
'08-copying':('このマニュアルの複製許諾',[
'Copyright © 1989–2025 Free Software Foundation, Inc.<br/>Copyright © 1984–1986, 1988 Larry Wall.',
'著作権表示およびこの許諾表示をすべての複製物に保持することを条件として、このマニュアルをそのまま複製し、配布することを許可します。',
'そのまま複製する場合の条件に従い、かつ、結果として生じる派生物の全体を、この許諾表示と同一の許諾表示の条件に従って配布することを条件として、このマニュアルの改変版を複製し、配布することを許可します。',
'上記の改変版に関する条件に従い、このマニュアルを他の言語へ翻訳したものを複製し、配布することを許可します。ただし、この許諾表示については、原文の英語の代わりに、著作権者が承認した翻訳を含めることができます。'
]),
'09-authors':('著者',[
'Larry Wallが<code>patch</code>の最初の版を作成しました。Paul Eggertは、<code>patch</code>の恣意的な制限を取り除き、バイナリファイル、ファイルの時刻設定、ファイルの削除への対応を追加し、POSIXへの準拠を改善しました。ほかの貢献者には、unidiffへの対応を追加したWayne Davison、設定とバックアップへの対応を追加したDavid MacKenzieがいます。Andreas Gruenbacherはマージへの対応を追加しました。'
])}
rows=[]
for name,(title,values)in T.items():
 en=N/'preferred/en/01-guide'/(name+'.md');raw=en.read_text();front,body=raw.split('---',2)[1:];s=BeautifulSoup(body,'html.parser');nodes=s.select('p,li');assert len(nodes)==len(values)
 for node,value in zip(nodes,values):
  pre=node.find('pre');saved=pre.extract()if pre else None
  node.clear()
  for child in list(BeautifulSoup(value,'html.parser').contents):node.append(child)
  if saved:node.append(saved)
 for h in s.select('h2.Sh'):h.string=title
 if name=='08-copying':
  note=BeautifulSoup('<p>上記はLibxによる非公式の日本語訳です。原著の英語の許諾表示を各ページの出典欄に保持しています。</p>','html.parser').p;s.select_one('section.Sh').append(note)
 front=re.sub(r'^title: .+$','title: '+json.dumps(title,ensure_ascii=False),front,flags=re.M)
 html=re.sub(r'(<pre[^>]*>)([\s\S]*?)(</pre>)',lambda m:m[1]+m[2].replace('\n','&#10;')+m[3],str(s));out=N/'preferred/ja/01-guide'/en.name;out.write_text('---'+front+'---\n\n'+html.strip()+'\n');shutil.copyfile(out,W/'apps/gnu-patch/src/content/docs/v2-8/ja/01-guide'/out.name);rows.append({'page':'01-guide/'+en.name,'canonicalSHA256':hashlib.sha256(en.read_bytes()).hexdigest(),'translationSHA256':hashlib.sha256(out.read_bytes()).hexdigest(),'units':len(values)})
(N/'BATCH2_DRAFTS.json').write_text(json.dumps({'status':'drafts-not-reviewed','pages':4,'sourceWords':461,'rows':rows},ensure_ascii=False,indent=2)+'\n')
