# Attach metadata and encode raw text deterministically; no model/review verdict.
from pathlib import Path
import json,hashlib,re,html,shutil,subprocess,sys,datetime
p=Path(__file__).resolve().parent.relative_to(Path.cwd());base=Path('docs/notes/project-expansion');notes=Path('docs/notes/document-import/lz4/v1-10-0');sha=lambda x:hashlib.sha256(Path(x).read_bytes()).hexdigest()
for src,name in [(base/'OPERATIONS.json','OPERATIONS'),(notes/'PROGRESS.json','PROGRESS'),(notes/'REVIEW_MANIFEST.json','REVIEW_MANIFEST')]:
 dst=p/f'BASELINE_{name}.json'
 if not dst.exists():shutil.copyfile(src,dst)
source=base/'runs/evidence/2026-10-05-781/lz4-fixed/NEWS';canonical=base/'runs/evidence/2026-10-05-787/canonical/01-overview/03-history.md';prior=base/'runs/evidence/2026-10-05-821/draft/NEWS_PART_01.txt';part=p/'draft/NEWS_PART_02.txt';s=source.read_text();a=prior.read_text();b=part.read_text();assert len(a.splitlines())==101;assert len(b.splitlines())==265;t=a+b;assert len(t.splitlines())==366;(p/'draft/NEWS_JA.txt').write_text(t)
sl=s.splitlines();tl=t.splitlines();patterns={'numbers':r'\d+','inlineCode':r'`[^`]+`','contributors':r'@[A-Za-z0-9_-]+','API':r'(?<![A-Za-z0-9])LZ4(?:F|HC)?[A-Za-z0-9_]*(?:\([^)]*\))?','cliOptions':r'(?<![A-Za-z0-9])-{1,2}[A-Za-z][A-Za-z0-9-]*'}
for i,(x,y)in enumerate(zip(sl,tl)):
 assert bool(x)==bool(y),(i+1,'empty')
 if re.match(r'^(?:v\d|r\d)',x):assert x==y
 elif ':'in x:assert x.split(':',1)[0]==y.split(':',1)[0],(i+1,'category')
 for label,pat in patterns.items():assert sorted(re.findall(pat,x))==sorted(re.findall(pat,y)),(i+1,label,re.findall(pat,x),re.findall(pat,y))
encoded=html.escape(t).replace('\n','&#10;').replace('`','&#96;').replace('*','&#42;').replace('_','&#95;');assert html.unescape(encoded)==t;(p/'draft/HISTORY-body.md').write_text('<pre>'+encoded+'</pre>\n')
editorial='<p>NEWSの41版（v1.10.0からr105まで）の変更記録を全量翻訳し、版・カテゴリ・API名・数値・報告者名・原記録の並びを保持しました。本文中の性能・対応状況・安全性修正は、それぞれの版の上流記録です。今回ソフトウェアの実行や性能測定は行っていません。</p><p>原記録のLZ4F_frameBound、LZ4_decompressSafe_partial、Przemyslaw Skibinki、POSX、&lt;stduni.h&gt;などの表記を無断で修正していません。v1.9.0のLZ4_resetStream(HC)に関する二つの記述も、原記録のまま翻訳しています。平文の改行・バッククォート・記号をHTML文字参照で保護しています。</p>';(p/'HISTORY-editorial.html').write_text(editorial+'\n')
subprocess.run([sys.executable,str(notes/'assemble-translation.py'),'--root',str(Path.cwd()),'--source','NEWS','--body',str(p/'draft/HISTORY-body.md'),'--title','LZ4: 変更履歴','--editorial',str(p/'HISTORY-editorial.html'),'--output',str(p/'draft/03-history.md')],check=True)
final=(p/'draft/03-history.md').read_text();body=final[final.index('\n---\n')+5:];m=re.fullmatch(r'\n<pre>(.*)</pre>\n',body,re.S);assert m and html.unescape(m[1])==t
prep=json.loads((base/'runs/evidence/2026-10-05-821/HISTORY_PREPARATION.json').read_text());o={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'draft-structure-passed-content-review-pending','source':{'path':str(source),'sha256':sha(source)},'canonical':{'path':str(canonical),'sha256':sha(canonical)},'parts':[{'path':str(prior),'sha256':sha(prior),'range':[1,101]},{'path':str(part),'sha256':sha(part),'range':[102,366]}],'rawTranslation':{'path':str(p/'draft/NEWS_JA.txt'),'sha256':sha(p/'draft/NEWS_JA.txt'),'lines':366},'draft':{'path':str(p/'draft/03-history.md'),'sha256':sha(p/'draft/03-history.md')},'versions':len(prep['versions']),'checks':list(patterns)+['all-lines/empty-lines','all-version-labels','original-colon-category-prefixes','decoded-pre-full-draft-equality'],'fullContentReview':'not performed','imported':False,'build':'not performed','display':'not performed','finalProjectGates':'pending'};(p/'DRAFT_STRUCTURE.json').write_text(json.dumps(o,ensure_ascii=False,indent=2)+'\n');print('366 lines/41 versions full draft structure passed; review/import/build pending')
