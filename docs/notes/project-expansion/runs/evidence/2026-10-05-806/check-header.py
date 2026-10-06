# Mechanical audit only; semantic review is saved separately by Codex.
from pathlib import Path
import re,json,html,hashlib
E=Path(__file__).parent;R=E.resolve().parents[5]
r=json.loads((E/'CONTENT_REVIEW_HEADER.json').read_text());sha=lambda b:hashlib.sha256(b).hexdigest()
src=(R/r['source']['path']).read_bytes();c=(R/r['canonical']['path']).read_text();t=(R/r['translation']['path']).read_text()
segments=lambda s:[('comment' if cl else 'code',html.unescape(v if cl else re.fullmatch(r'<code>(.*)</code>',v,re.S)[1])) for cl,v in re.findall(r'<pre( class="lz4-source-comment")?>(.*?)</pre>',s,re.S)]
cs,ts=segments(c),segments(t);assert len(cs)==len(ts)==101
assert ''.join(v for k,v in cs).encode()==src
assert [k for k,v in cs]==[k for k,v in ts]
assert [v for k,v in cs if k=='code']==[v for k,v in ts if k=='code']
cc=[v for k,v in cs if k=='comment'];tc=[v for k,v in ts if k=='comment'];assert len(cc)==len(tc)==52;assert cc[0]==tc[0]
bind=json.loads((E/'COMMENT_BINDINGS.json').read_text());checks=[]
for i,(a,b,x) in enumerate(zip(cc,tc,bind)):
 assert sha(a.encode())==x['sourceSha256'] and sha(b.encode())==x['translatedSha256']
 assert src[x['sourceStart']:x['sourceEnd']].decode()==a
 # Preserve API/macro spellings, numeric values and ASCII URL destinations per slot.
 token=lambda v:set(re.findall(r'LZ4[A-Za-z0-9_*]*|LZ4LIB_[A-Za-z0-9_]+|https?://[\x21-\x7e]+|\d+(?:\.\d+)*(?:KB|MB|GB)?',v))
 assert token(a)<=token(b),(i,token(a)-token(b))
 checks.append({'index':i,'sourceLines':x['sourceLines'],'protectedUniqueTokens':sorted(token(a)),'translationSha256':sha(b.encode())})
diagram=lambda v:[l for l in v.splitlines() if l.startswith(' * ') and '|<' in l]
assert diagram(cc[38])==diagram(tc[38]) and len(diagram(tc[38]))==4
assert '{{INPLACE_DIAGRAM}}' not in t
for role in ['source','canonical','translation']:assert sha((R/r[role]['path']).read_bytes())==r[role]['sha256']
lock=json.loads((R/'docs/notes/document-import/lz4/v1-10-0/CANONICAL_LOCK.json').read_text());p=next(x for x in lock['pages'] if x['path']=='lib/lz4.h')
for span,(kind,v) in zip(p['segments'],cs):assert sha(v.encode())==span['sha256'] and src[span['start']:span['end']]==v.encode()
assert len(p['segments'])==101
(E/'STATIC_HEADER.json').write_text(json.dumps({'status':'passed','errors':[],'translationSha256':r['translation']['sha256'],'sourceReconstruction':'884 lines, 101 ordered segments byte-exact','preservedCodeSegments':49,'commentSegments':52,'legalNotice':'slot0 byte-exact','diagramLines':4,'perCommentChecks':checks},ensure_ascii=False,indent=2)+'\n')
print('101 source spans, 49 code segments, notice, diagram and per-comment protected tokens passed')
