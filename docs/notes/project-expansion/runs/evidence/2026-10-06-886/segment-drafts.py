from pathlib import Path
from bs4 import BeautifulSoup
import json,copy,hashlib,datetime
E=Path(__file__).parent;P=E/'drafts/en';P.mkdir(parents=True,exist_ok=True)
s=BeautifulSoup((E/'prototype/first-four-chapters.md').read_text(),'html.parser');c=s.select_one('.commonmark-original-content');plan=copy.deepcopy(json.loads((E/'SCOPE_WORKLOAD_DRAFT.json').read_text())['pagePlan']);plan[1]['sections'].remove('insecure-characters');plan[2]['sections'].append('insecure-characters')
sections={};current=None
for n in c.children:
 if n.name in ['h2','h3']:current=n.get('id');sections[current]=[]
 if current and n.name:sections[current].append(copy.copy(n))
assert set(sections)=={x for p in plan for x in p['sections']}
fragments={p['route']:BeautifulSoup(''.join(str(n) for k in p['sections'] for n in sections[k]),'html.parser') for p in plan};idmap={}
for route,f in fragments.items():
 for n in f.select('[id]'):assert n['id'] not in idmap;idmap[n['id']]=route
rows=[];codes=[]
for p in plan:
 route=p['route'];f=fragments[route]
 for a in f.select('a[href]'):
  h=a['href']
  if h.startswith('#'):
   assert h[1:] in idmap
   if idmap[h[1:]]!=route:a['href']='/docs/commonmark/v0-31-2/en/01-guide/'+idmap[h[1:]]+'/'+h
 for code in f.select('pre code'):
  codes.append(hashlib.sha256(code.get_text().encode()).hexdigest())
 # Serialization uses character references so Markdown never reparses embedded blanklines.
 import html
 literals=[]
 for i,code in enumerate(f.select('pre code')):
  key=f'LIBX_COMMONMARK_LITERAL_CODE_{i:05d}_END';literals.append((key,html.escape(code.get_text(),quote=False).replace('\n','&#10;').replace('\t','&#9;')));code.clear();code.append(key)
 content=str(f)
 for k,v in literals:assert content.count(k)==1;content=content.replace(k,v)
 md='<div class="commonmark-original-content">\n'+content+'\n</div>\n';(P/(route+'.md')).write_text(md);rows.append({'route':route,'batch':p['batch'],'sourceHeadings':p['sections'],'sha256':hashlib.sha256(md.encode()).hexdigest(),'examplePairs':len(f.select('.commonmark-example'))})
assert len(rows)==14 and sum(x['examplePairs'] for x in rows)==227
original=sorted(hashlib.sha256(x.get_text().encode()).hexdigest() for x in c.select('pre code'));assert sorted(codes)==original
(E/'EN_SEGMENT_DRAFTS.json').write_text(json.dumps({'status':'saved-English-segment-drafts','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':rows,'allCodeTextExactAcrossSplit':True,'examplePairs':227,'idMap':idmap,'scope':'Body drafts only;no canonical app/JA/meaningreview/build/publication pass','groupingDelta':'2.3 Insecurecharacters follows2.2Tabs onpage03 to preserveoriginalsectionorder;14pages/23headings/227pairs remainexactscope. Originalselectiondraft staysimmutable.'},indent=2)+'\n')
print('14 EN bodydrafts saved/227pairs/allcodeexact;no formal canonical claim')
