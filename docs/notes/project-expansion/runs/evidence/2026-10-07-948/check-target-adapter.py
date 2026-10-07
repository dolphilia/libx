from pathlib import Path
import json,hashlib,datetime
from bs4 import BeautifulSoup
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-diffutils-chapters16-18-formal-948');Q=Path('/private/tmp/libx-gnu-diffutils-source-rebuild-948-adapter/workspace');E=Path(__file__).resolve().parent;A=Path('apps/gnu-diffutils');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();rows=[]
for p in sorted((W/A/'src/content/docs/v3-12').rglob('*.md')):
 rel=p.relative_to(W/A/'src/content/docs');assert h(p)==h(Q/A/'src/content/docs'/rel)
 html=rel.with_suffix('')/'index.html';x=BeautifulSoup((W/A/'dist'/html).read_bytes(),'html.parser');y=BeautifulSoup((Q/A/'dist'/html).read_bytes(),'html.parser');sel='.gnu-diffutils-original-content, .appendix-level-extent#Copying-This-Manual';a=x.select_one(sel);b=y.select_one(sel);assert a and b,rel;assert a.get_text()==b.get_text(),rel;assert [v.get_text()for v in a.select('pre')]==[v.get_text()for v in b.select('pre')],rel
 rows.append({'preferredPath':str(A/'src/content/docs'/rel),'sha256':h(p),'renderedBodyAndPre':'exact independent accepted build','path':str(html)})
assert len(rows)==219;offer=json.loads((E/'SOURCE_OFFER_REPAIRED.json').read_text());assert h(W/A/'dist/source/v3-12/source.zip')==offer['archiveSHA256'];assert h(W/A/'dist/source/v3-12/SOURCE_README.md')==h(Q/A/'dist/source/v3-12/SOURCE_README.md')

assert '224 page(s) built' in (E/'ADAPTER_TARGET_BUILD.log').read_text()
v={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'preferredDocuments':219,'targetRoutes':224,'all219BodiesPreExactIndependent':True,'kitSHA256':offer['archiveSHA256'],'sourceKitMembers':1649,'rows':rows,'reused':'Original translation/fullbody review/oldgenerators/format/lint exact source inputs; repaired layout checker/runtime tests/build separately checked'}
(E/'ADAPTER_TARGET_GATES.json').write_text(json.dumps(v,indent=2)+'\n');print('Repairtarget219body/224routes/1649kit passed')
