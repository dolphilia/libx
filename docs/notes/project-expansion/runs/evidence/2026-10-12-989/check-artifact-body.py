from pathlib import Path
from bs4 import BeautifulSoup
import json,re,hashlib,copy,datetime,sys
from functools import lru_cache
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/gnu-tar/v1-35';U=N/'updates/2026-10-12-invocation-styles';E=Path(__file__).resolve().parent;W=Path('/private/tmp/libx-gnu-tar-update-986');Q=Path('/private/tmp/libx-gnu-tar-source-rebuild-987-final/workspace');role=sys.argv[1];A=Path('/private/tmp/libx-gnu-tar-'+role+'-artifact-989/dist');D=A/'docs/gnu-tar'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:re.sub(r'\s+',' ',s).strip()
@lru_cache(None)
def parsed(p):return BeautifulSoup(p.read_text(),'html.parser')
rows=[];refs=0;pres=0;contexts={}
for parent in [N/'preferred',U/'preferred']:
 for p in sorted(parent.rglob('*.md')):
  rel=p.relative_to(parent);raw=p.read_text();src=BeautifulSoup(raw.split('---',2)[2],'html.parser');rendered=D/'v1-35'/rel.with_suffix('')/'index.html';s=parsed(rendered)
  a=src.select_one('.gnu-tar-original-content')
  if not a:a=next(x for x in src.contents if getattr(x,'name',None))
  b=s.select_one('.gnu-tar-original-content') if a.get('class')==['gnu-tar-original-content'] else s.find(id=a['id'])
  exact=str(a)==str(b)
  collapse=lambda x:re.sub(r'\n[ \t]*\n+', '\n',str(x))
  assert exact or collapse(a)==collapse(b),(str(rel),'entirebody beyond blank-line collapse')
  pre=[x.get_text() for x in a.select('pre')];assert pre==[x.get_text() for x in b.select('pre')];pres+=len(pre)
  ids=[x['id'] for x in s.select('[id]')];assert len(ids)==len(set(ids)),rel
  ctx=json.loads(next(x for x in raw.splitlines() if x.startswith('documentContext: ')).split(': ',1)[1])[0]['html'];contexts.setdefault(str(parent.relative_to(N)),set()).add(ctx)
  footer=s.select_one('.document-provenance');assert norm(BeautifulSoup(ctx,'html.parser').get_text()) in norm(footer.get_text()),rel
  assert '3〜3.3.4' in footer.get_text() if '/ja/' in str(p) else 'sections3–3.3.4' in footer.get_text()
  for a in s.select('a[href]'):
   h=a['href'];path,sep,anchor=h.partition('#')
   if path.startswith('/docs/gnu-tar/v1-35/'):t=D/path.removeprefix('/docs/gnu-tar/').rstrip('/')/'index.html'
   elif path.startswith('/docs/gnu-tar/source/'):t=D/path.removeprefix('/docs/gnu-tar/')
   elif h.startswith('#'):t=rendered
   else:continue
   assert t.exists(),(str(rel),h)
   if sep and t.suffix=='.html':assert parsed(t).find(id=anchor),(str(rel),h)
   refs+=1
  actual=W/'apps/gnu-tar/src/content/docs/v1-35'/rel;reconstructed=Q/'apps/gnu-tar/src/content/docs/v1-35'/rel
  assert sha(p)==sha(actual)==sha(reconstructed)==sha(W/'apps/gnu-tar/public/source/v1-35/edited'/rel),rel
  rows.append({'page':str(rel),'preferredSHA256':sha(p),'renderedSHA256':sha(rendered),'fullBodyExact':exact,'entireBodyExactAfterBlankLineCollapse':not exact,'independentPreferredExact':True})
assert len(rows)==80
old=next(iter(contexts['preferred']));new=next(iter(contexts['updates/2026-10-12-invocation-styles/preferred']));assert all(len(v)==1 for v in contexts.values())
expected=old.replace('Libx GNU tar 1.35 Introduction and Tutorial / Libx GNU tar 1.35 入門とチュートリアル','Libx GNU tar 1.35 Invocation and Option Styles / Libx GNU tar 1.35 呼び出しとオプション形式').replace('Complete chapters1–2 and footnote1 represented','Sections3–3.3.4 represented').replace('11October2026:','12October2026:');assert expected==new
source=parsed(N/'source/derived/manual.html');c=BeautifulSoup(new,'html.parser')
for x in source.find(id='Top').find_all(['p','blockquote'],recursive=False)[:3]:assert norm(x.get_text()) in norm(c.get_text())
for a,b in [('Authors','tar-context-Authors'),('GNU-Free-Documentation-License','tar-context-GNU-Free-Documentation-License')]:
 x=copy.deepcopy(source.find(id=a))
 for k in x.select('.nav-panel,.copiable-link'):k.decompose()
 assert norm(x.get_text())==norm(c.find(id=b).get_text())
assert c.find('h3',string='GNU General Public License').find_next('pre').get_text()==(N/'source/COPYING').read_text()
for t in ['A GNU Manual','You have the freedom to copy and modify this GNU manual.','No new invariant sections or cover texts','12October2026','Sections3–3.3.4','Modification author and publisher: Libx.']:assert t in c.get_text(),t
reviewed=0
for manifest in [N/'REVIEW_MANIFEST.json',U/'REVIEW_MANIFEST.json']:
 for r in json.loads(manifest.read_text())['pages']:
  for reviewRole in ['source','canonical','translation']:assert sha(R/r[reviewRole]['path'])==r[reviewRole]['sha256']
  reviewed+=1
assert reviewed==39
kit=U/'source-offer.zip';assert sha(kit)==sha(W/'apps/gnu-tar/public/source/v1-35/source.zip')==sha(Q/'apps/gnu-tar/public/source/v1-35/source.zip')
assert sha(W/'apps/gnu-tar/src/config/project.config.jsonc')==sha(Q/'apps/gnu-tar/src/config/project.config.jsonc')==sha(U/'project.config.jsonc')
for name in ['TARGET_BUILD.log','INDEPENDENT_BUILD.log']:assert '85 page(s) built' in (E.parent/'2026-10-12-987'/name).read_text() and '[build] Complete!' in (E.parent/'2026-10-12-987'/name).read_text()
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'preferredPages':80,'wholeReviewsBound':39,'rows':rows,'preCopiesExact':pres,'bodyBlankLineNormalization':'Only consecutive newline/blank-line runs collapsed in full serialized body comparison; all original pre text separately exact; other body characters, element order, attributes/IDs and links unchanged.','localReferences':refs,'old64PreferredUnchanged':True,'new16PreferredUnchanged':True,'sourceKitSHA256':sha(kit),'selfZIPIndependentExact':True,'readerConfigurationIndependentExact':True,'contextDeltaOnly':['modified title','modified History scope','modified History date'],'originalNoticesAuthorsGFDLGPLExact':True,'limits':'Integrated all80 bodies and rights; public registration/Preview/Production/postchecks pending.'}
(E/(role.upper()+'_BODY_VERIFICATION.json')).write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print('80 whole bodyDOMs;',refs,'local references;',pres,'pre copies;39 review bindings;source/config/ZIP independent exact')

from urllib.parse import urlsplit,unquote
links=0;files=[]
for p in D.rglob('*'):
 if not p.is_file():continue
 files.append({'path':str(p.relative_to(D)),'sha256':sha(p)})
 if p.suffix!='.html' or 'source' in p.relative_to(D).parts:continue
 for el in parsed(p).select('[href],[src]'):
  for attr in ['href','src']:
   u=el.get(attr,'');v=urlsplit(u)
   if not u or v.scheme or v.netloc:continue
   t=(A/v.path.lstrip('/')) if v.path.startswith('/') else p.parent/v.path
   if not v.path:t=p
   if t.is_dir() or not t.exists() and not t.suffix:t=t/'index.html'
   assert t.is_file(),(p,u)
   if v.fragment and t.suffix=='.html':assert parsed(t).find(id=unquote(v.fragment)),(p,u)
   links+=1
(E/(role.upper()+'_RENDERED_LINKS.json')).write_text(json.dumps({'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'artifactFiles':files,'localReferencesAndAssets':links,'sourceKitSHA256':sha(kit)},indent=2)+'\n');print('Artifact files recorded',len(files),'all body/source checks and local references/assets passed',links)
