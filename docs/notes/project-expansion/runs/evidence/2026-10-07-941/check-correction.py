from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime
R=Path('/Users/dolphilia/github/libx');E=Path(__file__).parent;W=Path('/private/tmp/libx-gnu-grep-update-formal-940');Q=Path('/private/tmp/libx-gnu-grep-source-rebuild-941/workspace');A=Path('apps/gnu-grep');U=Path('docs/notes/document-import/gnu-grep/v3-12/updates/2026-10-07-chapters-5-6');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();old=json.loads((E.parent/'2026-10-07-940/RECONSTRUCTION_PREFERRED.json').read_text());rows=[]
for p in(W/A/'src/content/docs/v3-12').rglob('*.md'):
 rel=p.relative_to(W);assert h(p)==h(Q/rel);oldrow=next(x for x in old['rows']if x['path']==str(rel));new=p.name[:2]in['25','26','27']
 if new:
  canon=U/'canonical'/p.relative_to(W/A/'src/content/docs/v3-12');before=(E/'before'/canon).read_text();assert p.read_text()==before.replace('description: "GNU diffutils3.12','description: "GNU grep3.12');assert h(R/canon)==h(p)
 else:assert h(p)==oldrow['sha256']
 relhtml=p.relative_to(W/A/'src/content/docs').with_suffix('')/'index.html';a=BeautifulSoup((W/A/'dist'/relhtml).read_bytes(),'html.parser');b=BeautifulSoup((Q/A/'dist'/relhtml).read_bytes(),'html.parser');sel='.gnu-grep-original-content, .section-level-extent#GNU-Free-Documentation-License';x=a.select_one(sel);y=b.select_one(sel);assert x and y;assert x.get_text()==y.get_text();assert [x.get_text()for x in x.select('pre')]==[x.get_text()for x in y.select('pre')]
 if new:assert 'GNU grep3.12'in a.select_one('meta[name="description"]')['content'];assert 'diffutils'not in a.select_one('meta[name="description"]')['content']
 rows.append({'path':str(rel),'sha256':h(p),'descriptionCorrectedOnly':new,'bodyPreExactIndependent':True})
assert len(rows)==55
for lang in['en','ja']:
 entries=json.loads((W/A/f'public/search/v3-12/{lang}.json').read_text())['entries'];newentries=[x for x in entries if x['url'].split('/')[-2][:2]in['25','26','27']];assert len(newentries)==3;assert all('GNU grep3.12'in x['description']and'diffutils'not in x['description']for x in newentries)
assert '60 page(s) built'in(E/'TARGET_BUILD.log').read_text();assert 'All matched files use Prettier code style!'in(E/'FORMAT.log').read_text();assert h(W/A/'dist/source/v3-12/source.zip')==json.loads((E/'SOURCE_OFFER.json').read_text())['archiveSHA256']
refs=[{'path':str((E.parent/'2026-10-07-940'/n).relative_to(R)),'sha256':h(E.parent/'2026-10-07-940'/n)}for n in['LINT.log','INTEGRITY.log','FINAL_NATIVE.json']];v={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'preferredDocuments':55,'old49MDExact':True,'changedDescriptions':6,'bodyChanges':0,'allBodyPreExactIndependent':True,'searchDescriptions':6,'targetRoutes':60,'freshChecks':['Metadata description','Changedhelper apply/context','Independent andformal target build','Searchgeneration','Format','Sourcekit assetbudget'],'reusedUnchangedChecks':refs,'limits':'940 proofs for old exact inputs retained; no repeat of21unit meaning review or original sourceaudit; actualDiffutilsproductionbaseline pending','rows':rows};(E/'FINAL_CORRECTION_GATES.json').write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in v.items()if k!='rows'}))
