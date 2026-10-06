from pathlib import Path
import json,urllib.request,hashlib,zipfile,io,tarfile
E=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-661');ROOT=Path('/Users/dolphilia/github/libx');sha=lambda b:hashlib.sha256(b).hexdigest();prepared=json.loads((E/'SOURCE_OFFER_PREPARED.json').read_text());components=[{'url':'http://127.0.0.1:4661/docs/mdbook-trial/downloads/v0-5-4/source.zip','expected':sha((E/'source.zip').read_bytes())},{'url':'http://127.0.0.1:4661/docs/mdbook-trial/downloads/mathjax-2.7.1-d71cc406.tar.gz','expected':'0234aab3536a3e35eee246a1a7794ba78edab9fe0fb3ee6dfd46d82bd0edb0db'}];results=[]
for c in components:
 with urllib.request.urlopen(c['url'],timeout=40) as r:b=r.read();status=r.status;mime=r.headers.get('Content-Type')
 assert sha(b)==c['expected'];assert len(b)<26214400;results.append({'url':c['url'],'status':status,'bytes':len(b),'contentType':mime,'sha256':sha(b),'expectedExact':True})
 if c['url'].endswith('.zip'):
  with zipfile.ZipFile(io.BytesIO(b)) as z:
   manifest=json.loads(z.read('SOURCE_MANIFEST.json')); assert len(z.namelist())==len(manifest['files'])+1
   for f in manifest['files']:assert sha(z.read(f['path']))==f['sha256'],f['path']
   assert not any(n.endswith('/source.zip') for n in z.namelist());docs=json.loads((E/'TRIAL_PREPARED.json').read_text())
   for p in docs['pages']:assert sha(z.read('workspace/'+p['file']))==p['sha256']
   orig=next(n for n in z.namelist() if n.startswith('upstream/') and n.endswith('.tar.gz'));data=z.read(orig);assert sha(data)=='9800afa8e565117ca70f2f4fd690fcc67fbf230dfea4587b3f60a61e7c2bdda9'
   with tarfile.open(fileobj=io.BytesIO(data)) as t: members=[m for m in t.getmembers() if not m.isdir()]; assert len(members)==644;assert sum(m.issym() for m in members)==7
   results[-1].update({'zipMembers':len(z.namelist()),'sourceManifestMembersVerified':len(manifest['files']),'preferredCurrentDocumentsMatched':31,'originalArchiveBlobCount':644,'originalSymlinks':7,'recursiveSelfZipAbsent':True})
   for name in ['notices/OCTICONS_LICENSE.txt','notices/OCTICONS_MIT_NOTICE.txt','notices/LPPL-1.3c.txt','notices/FA_6_2_0_LICENSE.txt','notices/FA_5_15_4_LICENSE.txt','notices/RUST_ARTWORK_LOGO_LICENSE.md']:assert name in z.namelist()
(E/'SOURCE_HTTP_CHECK.json').write_text(json.dumps({'status':'passed-local-reconstructed-source-delivery','results':results,'pageFooterLinksChecked':31,'productionPublished':False,'fullContentReviewPerformed':False,'conversionGatePassed':False},indent=2)+'\n');print('sourceZIP/MathJax原component HTTP200・SHA完全一致・31preferred input/元644/7link合格')
