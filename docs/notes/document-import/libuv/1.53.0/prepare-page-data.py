"""Prepare raw-HTML heading data and exhaustive semantic-context work units.
This does not translate or mark review complete. Oversized contexts require
manual semantic subdivision before assigning them as a translation/review part.
"""
from pathlib import Path
from bs4 import BeautifulSoup,NavigableString,Comment
import json,hashlib,re,argparse
arg=argparse.ArgumentParser();arg.add_argument('--repository',required=True);arg.add_argument('--workspace',required=True);a=arg.parse_args();root=Path(a.repository);w=Path(a.workspace);packet=root/'docs/notes/document-import/libuv/1.53.0';app=w/'apps/libuv';sha=lambda b:hashlib.sha256(b).hexdigest();headingMap={};pages=[]
for p in sorted((app/'src/content/docs/v1-53-0').rglob('*.md')):
 entry=str(p.relative_to(app/'src/content/docs')).removesuffix('.md');body=p.read_text().split('---\n',2)[2];soup=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');article=soup.select_one('article.libuv-document');assert article;heads=[]
 for h in article.select('h1,h2,h3,h4,h5,h6'):
  assert h.has_attr('id') or h.find_parent('section',id=True),entry
  anchor=h.get('id') or h.find_parent('section',id=True)['id'];text=h.get_text('',strip=True).removesuffix('¶');heads.append({'depth':int(h.name[1:]),'slug':anchor,'text':text})
 headingMap[entry]=heads
 if '/en/' not in entry:continue
 contexts={};cBlocks=list(article.select('dl.c'));sectionNodes=list(article.select('section'))
 leaves=[n for n in article.descendants if isinstance(n,NavigableString) and not isinstance(n,Comment) and str(n).strip()]
 for i,n in enumerate(leaves):
  api=n.find_parent('dl',class_='c');sec=n.find_parent('section');indexLi=n.find_parent('li') if entry.endswith('/genindex') else None;owner=api or indexLi or sec or article
  if indexLi:
   ident='index-entry-'+str(list(article.select('li')).index(indexLi));kind='generated-index-entry'
  elif api:
   ident=(api.select_one('dt.sig[id]') or {}).get('id') or 'api-block-'+str(cBlocks.index(api));kind='api-declaration-and-description'
  elif sec:ident=sec.get('id') or 'section-'+str(sectionNodes.index(sec));kind='section-own-content'
  else:ident='article-root';kind='article-own-content'
  key=kind+':'+ident;unit=contexts.setdefault(key,{'id':key,'kind':kind,'anchor':ident if not ident.startswith(('api-block-','section-')) else None,'textNodeIndices':[],'textFragments':[],'narrativeWords':0,'codeOrSignatureNodes':0});unit['textNodeIndices'].append(i);unit['textFragments'].append(str(n))
  if n.find_parent('pre') or n.find_parent('dt',class_='sig'):unit['codeOrSignatureNodes']+=1
  else:unit['narrativeWords']+=len(re.findall(r"\b[\w’'-]+\b",str(n)))
 units=[]
 for q in contexts.values():
  fragments=q.pop('textFragments');q['textSha256']=sha('\n'.join(fragments).encode());q['boundaryStatus']='requires-subdivision' if q['narrativeWords']>1600 else 'semantic-context-mapped';q['translation']='pending';q['separateReview']='pending';units.append(q)
 covered=[i for q in units for i in q['textNodeIndices']];assert sorted(covered)==list(range(len(leaves))) and len(set(covered))==len(leaves)
 pages.append({'entry':entry,'sourceRelativeFile':str(p.relative_to(app)),'canonicalSha256':sha(p.read_bytes()),'bodyTextNodes':len(leaves),'allNodesCoveredExactlyOnce':True,'units':units})
for path in [app/'src/data/document-headings.json',packet/'PAGE_HEADINGS.json']:
 path.parent.mkdir(parents=True,exist_ok=True);path.write_text(json.dumps(headingMap,ensure_ascii=False,indent=2)+'\n')
result={'pages':pages,'bodyCoverage':'Every nonempty text leaf including code/signatures belongs to exactly one nearest C API block or section-own-content context. Footer metadata is reviewed separately. This is scope mapping, not evidence of reading or semantic review.','readerPlusIndexPages':len(pages),'units':sum(len(p['units']) for p in pages),'oversizedContexts':[{'entry':p['entry'],'id':u['id'],'words':u['narrativeWords']} for p in pages for u in p['units'] if u['boundaryStatus']=='requires-subdivision'],'translationOrReviewComplete':False}
(packet/'SEMANTIC_WORK_UNITS.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(len(headingMap),'heading pages;',len(pages),'EN pages;',result['units'],'contexts; oversized',len(result['oversizedContexts']))
