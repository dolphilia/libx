"""Mechanically place Codex-written comment translations beside unmodified code.

No model, translation API, review, or pass verdict is invoked here.
"""
from pathlib import Path
import re,json,html,hashlib
ev=Path(__file__).parent
root=ev.resolve().parents[5]
canonical=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-787/canonical/06-library/06-static-wrapper.md'
source=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-781/lz4-fixed/lib/lz4frame_static.h'
src=source.read_bytes()
lock=json.loads((root/'docs/notes/document-import/lz4/v1-10-0/CANONICAL_LOCK.json').read_text())
p=next(p for p in lock['pages'] if p['path']=='lib/lz4frame_static.h')
assert hashlib.sha256(src).hexdigest()==p['sourceSha256']
assert hashlib.sha256(canonical.read_bytes()).hexdigest()==p['canonicalSha256']
comments={**json.loads((ev/'COMMENTS_A.json').read_text()),**json.loads((ev/'COMMENTS_B.json').read_text())}
assert set(comments)=={str(i) for i in range(1,2)}
c=canonical.read_text();body=c[c.index('\n---\n')+5:];segments=[x for x in p['segments'] if x['kind']=='translatable-original-comment']
assert len(segments)==2
matches=list(re.finditer(r'<pre class="lz4-source-comment">(.*?)</pre>',body,re.S));assert len(matches)==2
records=[]
for i,(m,span) in enumerate(zip(matches,segments)):
 raw=src[span['start']:span['end']].decode()
 assert html.unescape(m[1])==raw
 value=raw if i==0 else '/*!\n'+comments[str(i)]+'\n*/\n'
 assert '{{' not in value
 records.append({'index':i,'sourceStart':span['start'],'sourceEnd':span['end'],'sourceSha256':span['sha256'],'translatedSha256':hashlib.sha256(value.encode()).hexdigest(),'treatment':'original legal notice retained' if i==0 else 'Codex Japanese prose','sourceLines':[src[:span['start']].count(b'\n')+1,src[:span['end']].count(b'\n')]})
 comments[str(i)]=value
i=iter(range(2))
body=re.sub(r'<pre class="lz4-source-comment">(.*?)</pre>',lambda m:'<pre class="lz4-source-comment">'+html.escape(comments[str(next(i))])+'</pre>',body,flags=re.S)
(ev/'draft/HEADER-body.md').write_text(body)
(ev/'COMMENT_BINDINGS.json').write_text(json.dumps(records,ensure_ascii=False,indent=2)+'\n')
print('2 comment slots assembled, notice0 retained, all code untouched; semantic review pending')
