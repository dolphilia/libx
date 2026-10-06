"""Read-only full libuv mechanical content gate; Python + beautifulsoup4 required."""
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urljoin,urlparse,unquote
import argparse,json,hashlib,tempfile,subprocess,sys,datetime
p=argparse.ArgumentParser();p.add_argument('--repository',default=str(Path(__file__).resolve().parents[5]));p.add_argument('--workspace');p.add_argument('--output');a=p.parse_args();root=Path(a.repository).resolve();w=Path(a.workspace).resolve() if a.workspace else Path.cwd().resolve()
while not (w/'pnpm-workspace.yaml').exists():
 assert w.parent!=w,'Workspace missing';w=w.parent
packet=root/'docs/notes/document-import/libuv/1.53.0';app=w/'apps/libuv';manifestrel='docs/notes/document-import/libuv/1.53.0/reviews/revisions/771/REVIEW_MANIFEST.json';m=json.loads((root/manifestrel).read_text());source=json.loads((packet/'SOURCE_MANIFEST.json').read_text());sha=lambda f:hashlib.sha256(f.read_bytes()).hexdigest();assert m['completedPages']==43 and m['unreviewedPages']==0;scope=set(m['scope']);assert len(scope)==43 and len(m['pages'])==43
cache={};records=[];links=0
for row in m['pages']:
 assert row['status']=='passed' and row['method']=='ai-content-review'
 for role in ['source','canonical','translation']:assert sha(root/row[role]['path'])==row[role]['sha256'],(row['id'],role)
 for lang,role in [('en','canonical'),('ja','translation')]:
  f=app/'src/content/docs/v1-53-0'/lang/row['id'];assert sha(f)==row[role]['sha256'];head,body=f.read_text().split('---\n',2)[1:];ctx=json.loads(next(l.split(': ',1)[1] for l in head.splitlines() if l.startswith('documentContext: ')));s=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');article=s.select_one('article.libuv-document');assert article and len(s.select('article.libuv-document'))==1
  assert not article.select('[data-context-kind]');assert 'source' in [c['kind'] for c in ctx];assert all(c['kind'] in ['source','editorial'] for c in ctx)
  assert not any(x in ''.join(c['html'] for c in ctx) for x in ['ユーザーが承認','ユーザー承認済み','承認済みの運用方針']);cache[(lang,row['id'])]=(s,ctx)
for lang in ['en','ja']:assert {str(f.relative_to(app/'src/content/docs/v1-53-0'/lang)) for f in (app/'src/content/docs/v1-53-0'/lang).rglob('*.md')}==scope
for row in m['pages']:
 en,ja=[cache[(lang,row['id'])][0] for lang in ['en','ja']]
 assert [x['id'] for x in en.select('[id]')]==[x['id'] for x in ja.select('[id]')];assert [x.get_text() for x in en.select('pre')]==[x.get_text() for x in ja.select('pre')]
 for s in [en,ja]:
  for x in s.select('.headerlink'):x.attrs.pop('title',None)
 for x in ja.select('dt.sig a[href]'):x['href']=x['href'].replace('/v1-53-0/ja/','/v1-53-0/en/',1)
 assert [str(x) for x in en.select('dt.sig')]==[str(x) for x in ja.select('dt.sig')]
 for tag in ['section','table','tr','td','th','pre','img','iframe','li','dt','dd']:assert len(en.select(tag))==len(ja.select(tag)),(row['id'],tag)
 records.append({'page':row['id'],'declarations':len(en.select('dt.sig')),'codeBlocks':len(en.select('pre')),'scopeHashesStructureIDsCodeAPI':'passed'})
for (lang,file),(s,ctx) in cache.items():
 base='https://libx.dev/docs/libuv/v1-53-0/'+lang+'/'+file.removesuffix('.md')+'/'
 for tree in [s,*[BeautifulSoup(x['html'],'html.parser') for x in ctx]]:
  for n in tree.select('[href],[src]'):
   value=n.get('href') or n.get('src');u=urlparse(urljoin(base,value))
   if u.scheme not in ['http','https'] or u.netloc!='libx.dev':continue
   assert u.path.startswith('/docs/libuv/'),(file,value);rel=unquote(u.path.removeprefix('/docs/libuv/'))
   if rel.startswith('v1-53-0/'):
    parts=rel.split('/');targetlang=parts[1];target='/'.join(parts[2:]).rstrip('/')+'.md';assert (targetlang,target) in cache,(file,value)
    if u.fragment:assert cache[(targetlang,target)][0].find(id=unquote(u.fragment)),(file,value)
   else:assert (app/'public'/rel).is_file(),(file,value)
   links+=1
for ref in source['durableSources']:
 assert sha(root/ref['path'])==ref['sha256']
 original=ref['originalPath'];notices={'LICENSE':'LICENSE.txt','LICENSE-docs':'LICENSE-docs.txt','LICENSE-extra':'LICENSE-extra.txt'}
 if original in ['README.md','include/uv/version.h']:continue # Fixed acquisition/version inputs retained in repository, not linked download sources.
 f=app/'public/notices'/notices[original] if original in notices else app/'public/source/v1-53-0'/original
 assert f.is_file() and sha(f)==ref['sha256'],original
for notice,original in {'LICENSE.txt':'LICENSE','LICENSE-docs.txt':'LICENSE-docs','LICENSE-extra.txt':'LICENSE-extra'}.items():
 ref=next(x for x in source['durableSources'] if x['originalPath']==original);assert sha(app/'public/notices'/notice)==ref['sha256']
c=json.loads((app/'src/config/project.config.jsonc').read_text());assert c['licensing']['showAttribution'] and 'CC BY 4.0' in c['licensing']['sources'][0]['license']
with tempfile.TemporaryDirectory(prefix='libuv-content-gate-') as temp:
 regen=Path(temp)/'regeneration.json';r=subprocess.run([sys.executable,str(packet/'verify-regeneration.py'),'--repository',str(root),'--workspace',str(w),'--manifest',manifestrel,'--output',str(regen)],capture_output=True,text=True);assert r.returncode==0,r.stdout+r.stderr;reproduction=json.loads(regen.read_text());assert reproduction['status']=='passed'
report={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'pages':43,'languageFiles':86,'originalSources':len(source['durableSources']),'internalReferences':links,'declarations':sum(x['declarations'] for x in records),'codeBlocks':sum(x['codeBlocks'] for x in records),'rows':records,'regeneration':reproduction,'scope':'mechanical only; fixed full-content reviews reused; native/UI and publication not performed'}
if a.output:Path(a.output).write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:v for k,v in report.items() if k not in ['rows','regeneration']},ensure_ascii=False))
