from pathlib import Path
import re,json,hashlib,datetime
E=Path(__file__).parent;O=Path('/private/tmp/libx-yyjson-production-artifact-879/dist');N=Path('/private/tmp/libx-gnu-make-formal-881/dist');mapping={};urls={};rows=[];perStylesheet={}
for p in sorted(O.rglob('style.*.css')):
 rel=p.relative_to(O);old=p.read_text();matches=[]
 for q in (N/rel.parent).glob('style.*.css'):
  new=q.read_text();a=re.findall(r'data-astro-cid-[a-z0-9]+',old);b=re.findall(r'data-astro-cid-[a-z0-9]+',new)
  if len(a)!=len(b):continue
  local=dict(zip(a,b));reverse=dict(zip(b,a));
  if len(local)!=len(reverse)or any(local[x]!=y for x,y in zip(a,b)):continue
  norm=re.sub(r'data-astro-cid-[a-z0-9]+',lambda m:local[m[0]],old)
  if norm!=new:continue
  matches.append((q,local))
 
 if str(rel).startswith('assets/'):
  import html
  target=re.findall(r'<link rel="stylesheet" href="([^"]+)"',(N/'en/index.html').read_text())[0]
  matches=[(q,m) for q,m in matches if '/'+str(q.relative_to(N))==target]
 assert len(matches)==1,(str(rel),len(matches))
 q,local=matches[0]
 perStylesheet['/'+str(rel)]=local
 urls['/'+str(rel)]='/'+str(q.relative_to(N));rows.append({'old':str(rel),'new':str(q.relative_to(N)),'oldSha256':hashlib.sha256(p.read_bytes()).hexdigest(),'newSha256':hashlib.sha256(q.read_bytes()).hexdigest(),'byteExactAfterBijectiveScopeNameMapping':True})
assert all(len(set(m.values()))==len(m) for m in perStylesheet.values())
(E/'CSS_SCOPE_MAP.json').write_text(json.dumps({'status':'passed','reason':'Astro scopes depend on build workspace paths; local temp path differs from published GitHub CI path','scopeMap':mapping,'perStylesheet':perStylesheet,'urlMap':urls,'rows':rows,'rules':'Every CSS byte identical after bijective scope-name substitution; no rule/property/order omission'},ensure_ascii=False,indent=2)+'\n');print('Exact CSS comparison:',len(rows),'stylesheets;',len(mapping),'bijective scoped names')
