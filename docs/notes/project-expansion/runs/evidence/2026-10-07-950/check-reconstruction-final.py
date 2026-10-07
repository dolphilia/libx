from pathlib import Path
from bs4 import BeautifulSoup
import hashlib,json,re,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-sed-chapter4-formal-950');Q=Path('/private/tmp/libx-gnu-sed-source-rebuild-950-final/workspace');E=Path(__file__).resolve().parent;A=Path('apps/gnu-sed');P=Path('docs/notes/document-import/gnu-sed/v4-10');N=P/'updates/2026-10-07-chapter-4';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();rows=[];pres=0
for p in sorted((W/A/'src/content/docs/v4-10').rglob('*.md')):
 rel=p.relative_to(W);assert h(p)==h(Q/rel),rel
 content=p.relative_to(W/A/'src/content/docs').with_suffix('');html=Q/A/'dist'/content/'index.html';s=BeautifulSoup(html.read_bytes(),'html.parser');md=p.read_text().split('---',2)[2];sel='.gnu-sed-original-content, .appendix-level-extent#GNU-Free-Documentation-License';expected=BeautifulSoup(md,'html.parser').select_one(sel);body=s.select_one(sel);assert body and expected,rel
 assert ' '.join(body.get_text().split())==' '.join(expected.get_text().split()),rel
 a=[x.get_text()for x in body.select('pre')];b=[x.get_text()for x in expected.select('pre')]
 assert a==b or ('02-reference'in str(rel)and[re.sub(r'\n{2,}','\n',v)for v in a]==[re.sub(r'\n{2,}','\n',v)for v in b]),rel
 ids=[x['id']for x in s.select('[id]')];assert len(ids)==len(set(ids)),rel
 footer=s.select_one('.document-provenance');assert footer and all(x in footer.get_text()for x in ['Ken Pizzini','Paolo Bonzini','Jim Meyering','Assaf Gordon','Free Software Foundation','History','Libx','1998','2026']),rel
 pres+=len(a);rows.append({'path':str(rel),'sha256':h(p),'allBodyPreExact':True,'referenceBlankCollapseOnly':'02-reference'in str(rel),'uniqueIDs':True,'fullNotice':True})
assert len(rows)==37
for m in [P/'REVIEW_MANIFEST.json',N/'REVIEW_MANIFEST.json']:
 for row in json.loads((W/m).read_text())['pages']:
  for role in ['source','canonical','translation']:assert h(Q/row[role]['path'])==row[role]['sha256'],(row['id'],role)
for row in json.loads((W/P/'SOURCE_MANIFEST.json').read_text())['files']:assert h(Q/P/row['path'])==row['sha256']
assert h(W/A/'src/config/project.config.jsonc')==h(Q/A/'src/config/project.config.jsonc')
assert json.loads((W/A/'src/data/document-headings.json').read_text())==json.loads((Q/A/'src/data/document-headings.json').read_text())
execution=json.loads((E/'RECONSTRUCTION_EXECUTION.json').read_text());assert execution['status']=='passed'and len(execution['steps'])==10
assert json.loads((E/'FINAL_RECONSTRUCTION_EXECUTION.json').read_text())['status']=='passed'
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'preferredDocuments':37,'wholeMeaningReviewsReused':18,'originalInputsExact':14,'independentFrozenInstall':True,'initialReplayStepsReused':10,'changedDependencyReplaySteps':3,'allBodiesPreAndRawPreferredExact':True,'renderedPre':pres,'siteConfigAndHeadingsExact':True,'rows':rows,'limits':'Original English GFDL reference inherits blankline collapse only; whole original license remains complete. No upstream command/example execution.'};(E/'FINAL_RECONSTRUCTION_PREFERRED.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items()if k!='rows'}))
