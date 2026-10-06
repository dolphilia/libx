from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,copy,re,datetime
N=Path(__file__).resolve().parent;R=N.parents[4];A=R/'apps/commonmark';S=N/'source/original';cm=json.loads((N/'CONTENT_MAP.json').read_text());tests={x['example']:x for x in json.loads((S/'tests.json').read_text())};source=BeautifulSoup((S/'official.html').read_bytes(),'html.parser');selected=[]
for h in source.select('h1.definition')[:4]:
 selected.append(copy.copy(h))
 for n in h.next_siblings:
  if n.name=='h1':break
  if n.name:selected.append(copy.copy(n))
original=BeautifulSoup(''.join(str(n) for n in selected),'html.parser');expectedIDs=[x['id'] for x in original.select('[id]')];outsideExampleCode=[x.get_text() for x in original.select('pre code') if not x.find_parent(class_='example')]
def prose(tree):
 x=copy.deepcopy(tree)
 for n in x.select('.example,.commonmark-example,pre'):n.decompose()
 return re.sub(r'\s+',' ',x.get_text(' ',strip=True)).strip()
expectedProse=prose(original);combined=[];actualIDs=[];actualNonExampleCode=[];count=0;links=0;bodyHashes=[];headingMap=json.loads((A/'src/data/document-headings.json').read_text());allPages={}
for item in cm['items']:
 slug=item['slug'];p=R/item['canonical'];md=p.read_text();assert p.read_bytes()==(A/'src/content/docs/v0-31-2/en'/ (slug+'.md')).read_bytes()==(A/'public/source/v0-31-2/edited/en'/(slug+'.md')).read_bytes();canonical=BeautifulSoup(md,'html.parser').select_one('.commonmark-original-content');rendered=BeautifulSoup((A/'dist/v0-31-2/en'/slug/'index.html').read_bytes(),'html.parser');body=rendered.select_one('.commonmark-original-content');assert body and canonical
 assert prose(body)==prose(canonical),slug
 assert [x.get_text() for x in body.select('pre code')]==[x.get_text() for x in canonical.select('pre code')],slug
 assert [x['id'] for x in body.select('[id]')]==[x['id'] for x in canonical.select('[id]')],slug
 for ex in body.select('.commonmark-example'):
  number=int(ex['id'].split('-')[1]);cs=ex.select('pre code');assert len(cs)==2;assert cs[0].get_text()==tests[number]['markdown'] and cs[1].get_text()==tests[number]['html'];count+=1
 actualNonExampleCode.extend(x.get_text() for x in body.select('pre code') if not x.find_parent(class_='commonmark-example'))
 hs=[{'depth':int(h.name[1]),'slug':h['id'],'text':h.get_text(' ',strip=True)} for h in body.select('h2,h3')];assert headingMap['v0-31-2/en/'+slug]==hs
 toc={x.get('href') for x in rendered.select('[aria-labelledby="starlight-toc-heading"] a[href]')};assert {'#'+x['slug'] for x in hs}<=toc
 footer=rendered.select_one('footer');assert 'Copyright (C) 2014-16 John MacFarlane' in footer.get_text();assert footer.find('a',href='https://creativecommons.org/licenses/by-sa/4.0/') and footer.find('a',href='https://spec.commonmark.org/0.31.2/')
 actualIDs.extend(x['id'] for x in body.select('[id]'));combined.append(prose(body));bodyHashes.append({'slug':slug,'canonicalSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'renderedSHA256':hashlib.sha256((A/'dist/v0-31-2/en'/slug/'index.html').read_bytes()).hexdigest()});allPages[slug]=rendered
assert ' '.join(combined)==expectedProse,'Whole adopted English prose differs from source'
assert sorted(actualIDs)==sorted(expectedIDs) and len(actualIDs)==len(set(actualIDs));assert count==227;assert actualNonExampleCode==outsideExampleCode;assert len(outsideExampleCode)==17
for slug,page in allPages.items():
 for a in page.select('.commonmark-original-content a[href],footer a[href]'):
  href=a['href'];base,_,fragment=href.partition('#')
  if href.startswith('#'):target=page
  elif base.startswith('/docs/commonmark/'):
   targetPath=A/'dist'/base[len('/docs/commonmark/'):];targetPath=targetPath if targetPath.suffix else targetPath/'index.html';assert targetPath.exists(),href
   target=BeautifulSoup(targetPath.read_bytes(),'html.parser') if fragment else None
  else:continue
  if fragment:assert target.find(id=fragment),href
  links+=1
full=BeautifulSoup((A/'public/source/v0-31-2/spec.html').read_bytes(),'html.parser');assert not full.select('script,.dingus');assert [n['id'] for n in full.select('[id]')]==[n['id'] for n in source.select('[id]')]
for ex in full.select('.example'):
 t=tests[int(ex['id'].split('-')[1])];cs=ex.select('pre code');assert [c.get_text() for c in cs]==[t['markdown'],t['html']]
out={'status':'passed-English-preparation','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'EnglishDocuments':14,'JapaneseCanonicalDocuments':0,'JapaneseMeaningReviews':0,'allAdoptedEnglishProseExact':True,'sourceIDsPreserved':len(actualIDs),'rawHeadingsInRenderedTOC':23,'examplePairsExact':227,'extraOriginalCodeBlocksExact':17,'totalCodeBlocksExact':471,'bodyAndFooterInternalLinks':links,'wholeStaticEnglishExamplePairsExact':652,'staticWholeEnglishHasNoScripts':True,'copyrightAndCCLicenseFooters':14,'bodyBindings':bodyHashes,'scope':'TargetEN19pagebuild/actual14body/source471code/TOC/footer/staticwholecopy;notJA/fullformalrelease/sourceZIP/reconstruction/native/publicationpass.'};(N/'EN_PREPARATION_CHECK.json').write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({k:v for k,v in out.items() if k not in ['bodyBindings']}))
