"""Localize only same-version Libx document hrefs, preserving text/code and reviewed inputs."""
from pathlib import Path
from bs4 import BeautifulSoup
import argparse,json,hashlib,re
import html as html_entities
arg=argparse.ArgumentParser();arg.add_argument('--repository',required=True);arg.add_argument('--workspace',required=True);arg.add_argument('--evidence',required=True);arg.add_argument('--manifest',required=True);a=arg.parse_args();root=Path(a.repository);packet=root/'docs/notes/document-import/libuv/1.53.0';app=Path(a.workspace)/'apps/libuv';ev=root/a.evidence;manifest=json.loads((root/a.manifest).read_text());sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();assert manifest['completedPages']==43 and manifest['unreviewedPages']==0
for page in manifest['pages']:
 for role in ['source','canonical','translation']:assert sha(root/page[role]['path'])==page[role]['sha256']
pattern=re.compile(r'(\bhref=)([\"\'])(/docs/libuv/v1-53-0/en/[^\"\']*)(\2)');rows=[];changed=[];before=[];cache={}
def convert(html,page,section):
 def replace(m):
  old=m[3];new=old.replace('/v1-53-0/en/','/v1-53-0/ja/',1);path,*anchor=html_entities.unescape(old).split('#',1);slug=path.removeprefix('/docs/libuv/v1-53-0/en/').rstrip('/');target=next(x for x in manifest['pages'] if x['id']==slug+'.md');assert target['status']=='passed'
  for lang,folder in [('en','canonical'),('ja','translation')]:
   key=(lang,slug)
   if key not in cache:cache[key]=BeautifulSoup((packet/f'{folder}/{lang}/{slug}.md').read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser')
   if anchor and anchor[0]:assert cache[key].select_one('[id="'+anchor[0]+'"]'),(page,old,lang)
  rows.append({'page':page,'section':section,'before':old,'after':new,'targetPage':slug+'.md','sameAnchor':anchor[0] if anchor else None,'targetReviewEvidence':target['evidence']});return m[1]+m[2]+new+m[4]
 return pattern.sub(replace,html)
for page in manifest['pages']:
 src=root/page['translation']['path'];raw=src.read_text();head,body=raw.split('---\n',2)[1:];oldbody=body;line=next(l for l in head.splitlines() if l.startswith('documentContext: '));ctx=json.loads(line.split(': ',1)[1]);oldctx=json.loads(line.split(': ',1)[1]);start=len(rows);body=convert(body,page['id'],'body')
 for c in ctx:c['html']=convert(c['html'],page['id'],'footer:'+c['kind'])
 if len(rows)>start:
  newhead=head.replace(line,'documentContext: '+json.dumps(ctx,ensure_ascii=False));new='---\n'+newhead+'---\n'+body;dest=ev/'before'/page['id'];dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(raw);src.write_text(new);(app/('src/content/docs/v1-53-0/ja/'+page['id'])).write_bytes(src.read_bytes());changed.append(page['id'])
 else:new=raw
 old=BeautifulSoup(oldbody.replace('&#10;','\n'),'html.parser');now=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');assert [str(x) for x in old.select('pre')]==[str(x) for x in now.select('pre')];assert old.get_text()==now.get_text();assert [x['id'] for x in old.select('[id]')]==[x['id'] for x in now.select('[id]')]
 for olda,newa in zip(old.select('a[href]'),now.select('a[href]')):
  assert newa['href']==olda['href'] or newa['href']==olda['href'].replace('/v1-53-0/en/','/v1-53-0/ja/',1)
  newa['href']=olda['href']
 assert str(old)==str(now),page['id']
 for oldc,newc in zip(oldctx,ctx):assert oldc['kind']==newc['kind'] and newc['html']==pattern.sub(lambda m:m[1]+m[2]+m[3].replace('/v1-53-0/en/','/v1-53-0/ja/',1)+m[4],oldc['html'])
 before.append({'page':page['id'],'before':page['translation'],'after':{'path':str(src.relative_to(root)),'sha256':sha(src)},'changed':page['id'] in changed,'textCodeIdsAndNonHrefDOMExact':True})
assert len(before)==43;(ev/'JA_LINK_LOCALIZATION.json').write_text(json.dumps({'priorManifest':{'path':a.manifest,'sha256':sha(root/a.manifest)},'pages':before,'changedPages':changed,'changes':rows,'count':len(rows),'targetStatus':'all43 full fixed-text reviewed; same page/document ID and existing anchor in both languages','mechanicalPreservation':'all text/code/ids/DOM exact after reversing only documented href language segment','separateDeltaReview':'pending','nativeDisplay':'pending','fullProjectComplete':False},ensure_ascii=False,indent=2)+'\n');print(len(changed),'pages',len(rows),'hrefs localized; all text/code/IDs preserved')
