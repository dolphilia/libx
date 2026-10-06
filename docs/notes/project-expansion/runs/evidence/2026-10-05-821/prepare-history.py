# Metadata and protected-token checks only: no language model or review verdict.
from pathlib import Path
import json,re,html,hashlib,datetime,shutil
p=Path(__file__).resolve().parent.relative_to(Path.cwd());base=Path('docs/notes/project-expansion');notes=Path('docs/notes/document-import/lz4/v1-10-0');sha=lambda x:hashlib.sha256(Path(x).read_bytes()).hexdigest()
for path,name in [(base/'OPERATIONS.json','OPERATIONS'),(notes/'PROGRESS.json','PROGRESS'),(notes/'REVIEW_MANIFEST.json','REVIEW_MANIFEST')]:
 dest=p/f'BASELINE_{name}.json'
 if not dest.exists():shutil.copyfile(path,dest)
source=base/'runs/evidence/2026-10-05-781/lz4-fixed/NEWS';canonical=base/'runs/evidence/2026-10-05-787/canonical/01-overview/03-history.md';s=source.read_text();c=canonical.read_text();body=c[c.index('\n---\n')+5:];m=re.fullmatch(r'\n<pre>(.*)</pre>',body,re.S);assert m and html.unescape(m[1])==s
sl=s.splitlines();starts=[i for i,line in enumerate(sl)if re.match(r'^(?:v\d|r\d)',line)];blocks=[]
for j,i in enumerate(starts):
 end=starts[j+1]if j+1<len(starts)else len(sl);blocks.append({'version':sl[i],'sourceRange':[i+1,end],'nonemptyEntries':sum(bool(x)for x in sl[i+1:end]),'translation':'drafted-not-reviewed'if end<=101 else'pending'})
target=p/'draft/NEWS_PART_01.txt';t=target.read_text().splitlines();assert len(t)==101,(len(t),101)
checks={}
patterns={'numbers':r'\d+','inlineCode':r'`[^`]+`','contributors':r'@[A-Za-z0-9_-]+','API':r'(?<![A-Za-z0-9])LZ4(?:F|HC)?[A-Za-z0-9_]*(?:\([^)]*\))?','cliOptions':r'(?<![A-Za-z0-9])-{1,2}[A-Za-z][A-Za-z0-9-]*'}
for i,(a,b)in enumerate(zip(sl[:101],t)):
 assert bool(a)==bool(b),(i+1,'empty')
 if i in starts:assert a==b
 elif a:
  assert a.split(':',1)[0]==b.split(':',1)[0],(i+1,'category')
 for label,pat in patterns.items():assert sorted(re.findall(pat,a))==sorted(re.findall(pat,b)),(i+1,label,re.findall(pat,a),re.findall(pat,b))
checks={'status':'partial-draft-token-passed-content-review-pending','translationPath':str(target),'translationSha256':sha(target),'range':[1,101],'checks':list(patterns)+['line-count','empty-lines','version-labels','category-prefixes'],'meaningReview':'not performed','imported':False,'build':'not performed'};(p/'PARTIAL_DRAFT_STRUCTURE.json').write_text(json.dumps(checks,ensure_ascii=False,indent=2)+'\n')
o={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'source-mapped-partial-translation-pending-full-review','source':{'path':str(source),'sha256':sha(source),'lines':len(sl),'readingCoverage':[[1,140],[141,260],[261,366]]},'canonical':{'path':str(canonical),'sha256':sha(canonical),'machineDecodedFullEquality':True,'fullContentReview':'not performed'},'versions':blocks,'draft':checks,'pending':['原文102–366の翻訳','全source/EN/JA別工程全文review','全protected token/原通知/過去時点の性能と安全修正の意味確認','pre文字参照保護と隔離取込/build/全DOM','全案件表示/統合/finalgates/GPL対応Libx sourcekit']};(p/'HISTORY_PREPARATION.json').write_text(json.dumps(o,ensure_ascii=False,indent=2)+'\n');print(f'{len(blocks)} versions; source {len(sl)} read; first101 draft tokens pass; no full review/import')
