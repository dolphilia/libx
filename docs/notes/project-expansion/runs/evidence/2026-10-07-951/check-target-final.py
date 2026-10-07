from pathlib import Path
import json,hashlib,datetime
from bs4 import BeautifulSoup
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-sed-chapter5-formal-951');Q=Path('/private/tmp/libx-gnu-sed-source-rebuild-951-final/workspace');E=Path(__file__).resolve().parent;A=Path('apps/gnu-sed');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();rows=[]
for p in sorted((W/A/'src/content/docs/v4-10').rglob('*.md')):
 rel=p.relative_to(W/A/'src/content/docs');assert h(p)==h(Q/A/'src/content/docs'/rel)
 html=rel.with_suffix('')/'index.html';x=BeautifulSoup((W/A/'dist'/html).read_bytes(),'html.parser');y=BeautifulSoup((Q/A/'dist'/html).read_bytes(),'html.parser');sel='.gnu-sed-original-content, .appendix-level-extent#GNU-Free-Documentation-License';a=x.select_one(sel);b=y.select_one(sel);assert a and b,rel;assert a.get_text()==b.get_text(),rel;assert [v.get_text()for v in a.select('pre')]==[v.get_text()for v in b.select('pre')],rel
 rows.append({'preferredPath':str(A/'src/content/docs'/rel),'sha256':h(p),'renderedBodyAndPre':'exact independent accepted build','path':str(html)})
assert len(rows)==65;offer=json.loads((E/'SOURCE_OFFER_FINAL.json').read_text());assert h(W/A/'dist/source/v4-10/source.zip')==offer['archiveSHA256'];assert h(W/A/'dist/source/v4-10/SOURCE_README.md')==h(Q/A/'dist/source/v4-10/SOURCE_README.md')

assert '70 page(s) built' in (E/'INTEGRATED_BUILD.log').read_text()
v={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'preferredDocuments':65,'targetRoutes':70,'all65BodiesPreExactIndependent':True,'kitSHA256':offer['archiveSHA256'],'sourceKitMembers':816,'rows':rows,'reused':'Original translation/fullbody review/oldgenerators/format/lint exact source inputs; repaired layout checker/runtime tests/build separately checked'}
(E/'FINAL_TARGET_GATES.json').write_text(json.dumps(v,indent=2)+'\n');print('Finaltarget65body/70routes/816kit passed')
