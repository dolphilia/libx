from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,posixpath
out=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-683');d=json.loads((out/'TRIAL_PREPARED.json').read_text());app=Path(d['app']);dist=app/'dist';rows=[];links=0;errors=[];iframes=[];targetCache={};tbodyNormalizations=[]
for r in d['rows']:
 p=dist/'v1-53-0/en'/r['slug']/'index.html';soup=BeautifulSoup(p.read_text(),'html.parser');body=soup.select_one('article.libuv-document');assert body,r['page'];original=BeautifulSoup(Path(r['file']).read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser').select_one('article.libuv-document');
 if r['page']=='genindex.html':
  for table in original.select('table'):
   direct=table.find_all('tr',recursive=False)
   if direct:
    tb=original.new_tag('tbody') if hasattr(original,'new_tag') and original.new_tag else BeautifulSoup('','html.parser').new_tag('tbody')
    direct[0].insert_before(tb)
    for tr in direct:tb.append(tr.extract())
    tbodyNormalizations.append({'page':r['page'],'reason':'HTML5 parser inserts implicit tbody around original direct tr. No row or text removed.'})
 same=str(body)==str(original);assert same,r['page'];footer=soup.select_one('.document-provenance');assert footer and 'CC BY 4.0' in footer.get_text();assert len(footer.select('[data-context-kind=source]'))==1;assert not body.select('[data-context-kind]');row={'originalPage':r['page'],'slug':r['slug'],'file':str(p),'bodyExact':same,'bodySha256':hashlib.sha256(str(body).encode()).hexdigest(),'codes':len(body.select('div.highlight pre')),'footerSource':1,'footerEditorial':len(footer.select('[data-context-kind=editorial]'))};rows.append(row)
 for a in body.select('a[href]')+footer.select('a[href]'):
  href=a['href']
  if href.startswith(('https:','http:','mailto:','//')):continue
  links+=1;parts=href.split('#',1);path=parts[0].removeprefix('/docs/libuv-trial/');target=dist/path if parts[0] else p
  if target.is_dir():target=target/'index.html'
  if not target.is_file():errors.append({'page':r['page'],'href':href,'reason':'missing local output'})
  elif len(parts)>1 and parts[1] and target.suffix=='.html':
   if str(target) not in targetCache:targetCache[str(target)]={x['id'] for x in BeautifulSoup(target.read_text(),'html.parser').select('[id]')}
   if parts[1] not in targetCache[str(target)]:errors.append({'page':r['page'],'href':href,'reason':'missing anchor'})
 for frame in body.select('iframe'):iframes.append({'page':r['page'],'src':frame.get('src'),'width':frame.get('width'),'height':frame.get('height')})
assert len(iframes)==1 and iframes[0]['src']=='https://www.youtube-nocookie.com/embed/nGn60vDSxQ4'
(out/'OUTPUT_PRESERVATION.json').write_text(json.dumps({'pages':43,'bodyExactAfterExplicitHtml5TbodyNormalization':43,'tbodyNormalizations':tbodyNormalizations,'readerPages':42,'indexReferencePages':1,'codeBlocks':sum(x['codes'] for x in rows),'localBodyAndFooterLinks':links,'errors':errors,'footers':43,'sourceNotesInBody':0,'externalIframes':iframes,'rows':rows,'limitations':['Native responsive/code/iframe playback not yet inspected.','Navigation sidebar/version links require separate verification.','Mechanical body preservation is not full semantic or translation review.']},indent=2)+'\n');print('43DOM exact; code',sum(x['codes'] for x in rows),'links',links,'errors',len(errors));print(errors[:5])
