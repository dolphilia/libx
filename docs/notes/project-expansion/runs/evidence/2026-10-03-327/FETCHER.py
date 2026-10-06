from pathlib import Path,PurePosixPath
from urllib.request import Request,urlopen,build_opener,HTTPRedirectHandler
import hashlib,json,tarfile,io,datetime,re
root=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-03-327');root.mkdir(exist_ok=False)
class LimitedRedirect(HTTPRedirectHandler):
 def redirect_request(self,req,fp,code,msg,headers,newurl):
  from urllib.parse import urlparse
  u=urlparse(newurl)
  if u.scheme!='https' or u.hostname!='zlib.net':raise ValueError('Unexpected redirect host')
  return super().redirect_request(req,fp,code,msg,headers,newurl)
opener=build_opener(LimitedRedirect());records=[]
for name,url in [('HOME.html','https://zlib.net/'),('WEB_MANUAL_1_3_1.html','https://zlib.net/manual.html'),('SITE_LICENSE.html','https://zlib.net/zlib_license.html'),('zlib-1.3.2.tar.gz','https://zlib.net/zlib-1.3.2.tar.gz')]:
 with opener.open(Request(url,headers={'User-Agent':'libx-document-source-verification'}),timeout=45) as r:
  b=r.read(8_000_001);assert len(b)<=8_000_000;actual=r.url
 (root/name).write_bytes(b);records.append({'file':name,'url':url,'actualUrl':actual,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()})
expected='bb329a0a2cd0274d05519d61c667c062e06990d72e125ee2dfa8de64f0119d16';assert expected.encode() in (root/'HOME.html').read_bytes();b=(root/'zlib-1.3.2.tar.gz').read_bytes();assert hashlib.sha256(b).hexdigest()==expected
out=root/'source';out.mkdir();entries=[];names=set();total=0
with tarfile.open(fileobj=io.BytesIO(b),mode='r:gz') as t:
 for member in t.getmembers():
  p=PurePosixPath(member.name);assert not p.is_absolute() and '..' not in p.parts and p.parts[0]=='zlib-1.3.2';assert member.name not in names;names.add(member.name);assert member.isdir() or member.isfile();total+=member.size;assert total<100_000_000
  dest=out.joinpath(*p.parts)
  if member.isdir():dest.mkdir(parents=True,exist_ok=True);continue
  dest.parent.mkdir(parents=True,exist_ok=True);data=t.extractfile(member).read();assert len(data)==member.size;dest.write_bytes(data)
  entries.append({'path':str(p),'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
header=(out/'zlib-1.3.2/zlib.h').read_text();assert '#define ZLIB_VERSION "1.3.2"' in header
proof={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed','officialRelease':'1.3.2','expectedOfficialSHA256':expected,'archiveSHA256Matched':True,'downloads':records,'wholeFileCount':len(entries),'uncompressedBytes':total,'safeExtraction':'all paths inside zlib-1.3.2; only regularfiles/directories; no links/specials/duplicates; no upstream software execution','embeddedHeaderVersion':'1.3.2','webManualVersion':'1.3.1; separate input not relabelled','entries':entries}
(root/'FETCH.json').write_text(json.dumps(proof,indent=2)+'\n');print(json.dumps({k:v for k,v in proof.items() if k not in ['entries','downloads']},indent=2))
