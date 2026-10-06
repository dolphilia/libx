from pathlib import Path
from html.parser import HTMLParser
import re,json,hashlib,shutil,datetime,subprocess
r=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-cjson-import-20261003');e=r/'docs/notes/project-expansion/runs/evidence/2026-10-03-301';n=Path('docs/notes/document-import/cjson/v1-7-19');shutil.copytree(w/n/'generated',r/n/'generated',dirs_exist_ok=True)
class P(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.items=[];self.cur=None;self.links=[];self.ul=0
 def handle_starttag(self,t,a):
  if t=='li':self.cur=[]
  if t=='a':self.links.append(dict(a).get('href'))
  if t=='ul':self.ul+=1
 def handle_data(self,d):
  if self.cur is not None:self.cur.append(d)
 def handle_endtag(self,t):
  if t=='li':self.items.append(''.join(self.cur).strip());self.cur=None
p=P();p.feed((w/n/'generated/canonical/02-license/02-contributors.md').read_text());src=(r/n/'source/CONTRIBUTORS.md').read_text();expected=[re.sub(r'\[([^\]]+)\]\([^)]+\)',r'\1',line.strip()[2:]).strip() for line in src.splitlines() if re.match(r'^[-*] ',line)];assert p.items==expected;assert p.ul==3
subprocess.run(['/private/tmp/libx-wren-markdown-trial-281/bin/python',str(w/'scripts/importers/import-cjson-1.7.19.py'),'--root',str(w),'--check'],check=True,stdout=subprocess.DEVNULL)
records=[]
for source,page,segments,conclusion in [('README.md','01-guide/01-usage.md',[[1,200],[201,400],[401,590]],'全guideの導入/設置4種/options/struct9type2flag/ownership/基本型/配列/オブジェクト/parseopts/printbuffer/全3monitor例/注意8節/著作者を照合。mustntdelete/非NUL解析/末尾既定許容/extra5byte/3thread条件/数値63と1000/CaseSensitiveとduplicatefirstを保持。原文3注記は本文と明示的に区別し根拠固定資料へリンク。'),('LICENSE','02-license/01-license.md',[[1,len((r/n/'source/LICENSE').read_text().splitlines())]],'MITの著作権・associateddocumentation・許諾の全列挙・通知同梱条件・無保証/責任免除の原文全体を保持。日本語は次工程。'),('CONTRIBUTORS.md','02-license/02-contributors.md',[[1,len(src.splitlines())]],'全著作者/maintainer/貢献者名とリンク、SourceForge追加帰属・bugreport/feature感謝を照合。一覧段落化を修復し3実リストを確認、氏名/順序/URLは保持。')]:
 b=w/n/'generated/canonical'/page;records.append({'source':str(n/'source'/source),'sourceSha256':hashlib.sha256((r/n/'source'/source).read_bytes()).hexdigest(),'canonical':str(n/'generated/canonical'/page),'canonicalSha256':hashlib.sha256(b.read_bytes()).hexdigest(),'sourceReadSegments':segments,'canonicalRead':'Entire document including editorial notes; truncated basictypes gap reread171–205, source401–590 reread without combinedoutput','sourceToCanonical':'passed','fullEnglishContentReview':'passed','semanticConclusion':conclusion,'findings':['contributors-list-rendering: fixed and reread'] if source=='CONTRIBUTORS.md' else []})
d={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'method':'CurrentCodex fullsource and canonical reading, separatefrom mechanical code/hash/render checks; samemodel allowed, no localLLM','model':{'configured':'gpt-6-astra','runtime':None},'records':records,'all3EnglishReviewed':True,'japaneseReview':'notstarted','correction':{'problem':'PythonMarkdown requiresblankline after list label; prior trial text/link retentiondidnotcheck semanticliststructure','change':'Onlyrendering input3blankline insertions; fixedsource unchanged;3ul andallnames/links/order checked','items':len(p.items),'urlCount':len(p.links),'status':'fixed'},'pending':['FormalAstro/native','FullJapanese translation andseparatecontentreview','Finalmechanical/integration/publication'],'canonicalReadyMeaning':'Source-to-canonical allscope review and importer check passed, not verified or published'};(e/'EN_CONTENT_REVIEW.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');shutil.copyfile(r/'scripts/importers/import-cjson-1.7.19.py',e/'importer.py');shutil.copytree(w/n/'generated/canonical',e/'canonical');print(json.dumps({'reviewedPages':len(records),'contributorItems':len(p.items)}))
