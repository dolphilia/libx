from pathlib import Path
import json,hashlib,re
from html.parser import HTMLParser
root=Path('/Users/dolphilia/github/libx');base=root/'docs/notes/project-expansion/runs/evidence';out=base/'2026-10-03-325';raw=base/'2026-10-03-312/sds-2.0.0'
sha=lambda x:hashlib.sha256(x).hexdigest()
fetch=json.loads((raw/'FETCH.json').read_text())
for f in fetch['files']:
 b=(raw/f['path']).read_bytes();assert sha(b)==f['sha256'];assert hashlib.sha1(b'blob '+str(len(b)).encode()+b'\0'+b).hexdigest()==f['gitBlob']
guide=json.loads((out/'guide-DOM.json').read_text());prior=json.loads((base/'2026-10-03-322/SDS_NESTED_CODE_CONVERSION_FIX.json').read_text());assert len(guide['code'])==56
for a,b in zip(prior['allSourceCodeBlocks'],guide['code']):assert a['sha256']==sha(b.encode())
# Independently verify conversion changed only delimiters/indentation of the three nested fences.
source=(raw/'README.md').read_text().splitlines(keepends=True);expected=[];start=0
for a,b in prior['changedFormattingOnly']:
 expected+=source[start:a-1];block=source[a:b-1];expected += ['\n']+['    '+line if line.strip() else line for line in block]+['\n'];start=b
expected+=source[start:];trial=(base/'2026-10-03-322/SDS_GUIDE_TRIAL.md').read_text()
assert ''.join(expected)==trial,'Unexpected guide changes beyond the 3 declared nested fence formatting fixes'
headers=json.loads((out/'headers-DOM.json').read_text())['code'];assert headers==[(raw/'sds.h').read_text(),(raw/'sdsalloc.h').read_text()]
api=json.loads((out/'api-comments-DOM.json').read_text());manifest=json.loads((base/'2026-10-03-319/SDS_SCOPE_TRIAL_MANIFEST.json').read_text());assert len(api['code'])==35
c=(raw/'sds.c').read_text().splitlines(keepends=True);assert api['code'][0]==''.join(c[:30])
for item,rendered in zip(manifest['publicFunctionComments'],api['code'][1:]):
 a,b=item['range'];comment=''.join(c[a-1:b]);assert sha(comment.encode())==item['sha256'];assert rendered.endswith(comment);assert item['symbol']+'(' in rendered
class Codes(HTMLParser):
 def __init__(self):super().__init__();self.inside=False;self.code=[]
 def handle_starttag(self,t,a):
  if t=='code':self.inside=True;self.code.append('')
 def handle_endtag(self,t):
  if t=='code':self.inside=False
 def handle_data(self,d):
  if self.inside:self.code[-1]+=d
p=Codes();p.feed((out/'license.html').read_text());assert p.code==[(raw/'LICENSE').read_text()]
notes=json.loads((out/'notes-DOM.json').read_text());assert len(notes['links'])==11;assert all('/f74b9b785b63c6d8ea312d7e7864df5267149c85/' in x['href'] for x in notes['links'])
proof={'status':'passed','sourceFixedCommit':fetch['sha'],'fixedInputAll9Sha256AndGitBlob':True,'guideFormattingOnlyThreeNestedFences':True,'guideWholeCodeExact':56,'guideNativeHeadings':len(guide['headings']),'guideNativeLists':guide['lists'],'apiWholeOriginalCommentsExact':34,'apiWholeOriginalNoticeExact':True,'publicAndAllocatorWholeHeadersExact':True,'licenseWholeExact':True,'notesFixedSourceLinks':len(notes['links']),'nativeViews':['guide top','guide nested examples','guide originalASCII diagram','api originalnotice','api sdssplitlen','headers wholeAX/DOM','allocator notice','license whole','notes distinct annotations'],'scope':'Pre-adoption normal/largest/difficult conversion feasibility; plain temporary renderer. No software example execution; no final translated content review; no formal Astro production validation.','remaining':['selfContained judgment with originalsource annotations','boundedJapanese material comparison','scores and separate selection review'],'cleanup':{'temporaryTab51':'closed','loopbackServer19652':'terminal exit0'}}
(out/'SDS_CONVERSION_TRIAL_CHECK.json').write_text(json.dumps(proof,indent=2)+'\n');print(json.dumps(proof,indent=2))
