from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urljoin,urlsplit,unquote
import re,json,hashlib
root=Path('/private/tmp/libx-gperf-import-20261004/dist');base='/docs/gperf/'
class P(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.refs=[];self.ids=set()
 def handle_starttag(self,t,a):
  d=dict(a)
  for key in ['id','name']:
   if d.get(key):self.ids.add(d[key])
  for key in ['href','src','poster']:
   if d.get(key):self.refs.append((t,key,d[key]))
  if d.get('srcset'):
   for v in d['srcset'].split(','):self.refs.append((t,'srcset',v.strip().split()[0]))
files=sorted((root/'docs/gperf').rglob('*.html'));parsed={};errors=[];deferred=set();external=set();checked=[]
for f in files:
 p=P();p.feed(f.read_text());parsed[f]=p
for f,p in parsed.items():
 rel='/'+f.relative_to(root).as_posix();origin=rel[:-10] if rel.endswith('index.html') else rel
 for tag,key,v in p.refs:
  u=urlsplit(urljoin('https://local.test'+origin,v))
  if u.scheme not in ['http','https']:continue
  if u.netloc!='local.test':external.add(v);continue
  dest=unquote(u.path)
  if not (dest.startswith(base) or dest==base.rstrip('/')):deferred.add(dest);continue
  target=root/dest.lstrip('/')
  if target.is_dir():target=target/'index.html'
  elif not target.is_file() and (target/'index.html').is_file():target=target/'index.html'
  if not target.is_file():errors.append([str(f.relative_to(root)),key,v,'missing file']);continue
  if u.fragment and target.suffix=='.html':
   q=parsed.get(target)
   if q is None:q=P();q.feed(target.read_text());parsed[target]=q
   if unquote(u.fragment) not in q.ids:errors.append([str(f.relative_to(root)),key,v,'missing anchor']);continue
  checked.append([str(f.relative_to(root)),key,v])
# Local CSS urls and ES module imports are inspected independently of HTML navigation.
assetRefs=0
for f in (root/'docs/gperf').rglob('*'):
 if f.suffix not in ['.css','.js']:continue
 text=f.read_text()
 refs=re.findall(r'url\(\s*[\"\']?([^\)\"\']+)',text) if f.suffix=='.css' else re.findall(r'[\"\'](\.{1,2}/[^\"\']+\.js(?:[?#][^\"\']*)?)[\"\']',text)
 for ref in refs:
  v=ref if isinstance(ref,str) else ref[1]
  if v.startswith(('data:','http:','https:','/')):continue
  target=(f.parent/urlsplit(v).path).resolve();assetRefs+=1
  if not target.is_file():errors.append([str(f.relative_to(root)),'asset',v,'missing file'])
record={'htmlFiles':len(files),'htmlReferencesChecked':len(checked),'cssAndModuleReferencesChecked':assetRefs,'externalURLs':sorted(external),'outsideSelectedScopePendingIntegration':sorted(deferred),'errors':errors,'builtFilesSHA256':{str(f.relative_to(root)):hashlib.sha256(f.read_bytes()).hexdigest() for f in files},'qualification':'gperf selected output only; external URLs preserved, not network-validated; root landing routes deferred until latest integrated build'}
Path('/private/tmp/gperf-references-579.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:v for k,v in record.items() if k not in ['builtFilesSHA256','externalURLs']},ensure_ascii=False,indent=2));assert not errors
