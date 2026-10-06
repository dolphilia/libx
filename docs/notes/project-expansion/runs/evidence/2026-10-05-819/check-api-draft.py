# Draft-only structure proof; never serves as content review or final machine gate.
from pathlib import Path
import re,json,html,hashlib,datetime
p=Path(__file__).parent;prep=json.loads(Path('docs/notes/project-expansion/runs/evidence/2026-10-05-818/API_PREPARATION.json').read_text());c=Path(prep['canonical']['path']).read_text();t=(p/'draft/02-frame-api.md').read_text();body=lambda s:s[s.index('\n---\n')+5:];c=body(c);t=body(t)
pattern=r'<p>((?:(?!</p>).)*?)</p>|<pre>(?!<b>)((?:(?!</pre>).)*?)<BR></pre>'
def slots(s):return[m for m in re.finditer(pattern,s,re.S)if(m[1]if m[1]is not None else m[2]).strip()]
cs=slots(c);ts=slots(t);assert len(cs)==len(ts)==25
vals=json.loads((p/'PROSE_JA.json').read_text());labels=json.loads((p/'LABELS_JA.json').read_text())
for i,(a,b)in enumerate(zip(cs,ts)):
 ar=html.unescape(a[1]if a[1]is not None else a[2]);br=html.unescape(b[1]if b[1]is not None else b[2]);assert br==vals[str(i)]
 apis=lambda x:set(re.findall(r'(?<![A-Za-z0-9])LZ4(?:F|HC)?[_a-zA-Z0-9]*(?![A-Za-z0-9_])',x));assert apis(ar)<=apis(br),(i,apis(ar)-apis(br))
 nums=lambda x:sorted(re.findall(r'\d+',x));assert nums(ar)==nums(br),(i,nums(ar),nums(br))
 urls=lambda x:re.findall(r'https?://[a-zA-Z0-9./_-]+',x);assert urls(ar)==urls(br)
def mask(s):
 for m in reversed(slots(s)):
  group=1 if m[1]is not None else 2;s=s[:m.start(group)]+'__PROSE__'+s[m.end(group):]
 return s
masked=mask(t)
for en,ja in labels.items():
 masked=re.sub(r'(<h[12]>)'+re.escape(ja)+r'(</h[12]>)',lambda m:m[1]+en+m[2],masked)
 masked=re.sub(r'(<a href="#Chapter\d+">)'+re.escape(ja)+r'(</a>)',lambda m:m[1]+en+m[2],masked)
assert masked=='\n'+mask(c),'outside 35 slots + heading/TOC labels + one leading body newline changed'
o={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'draft-structure-passed-content-review-pending','draftSha256':hashlib.sha256((p/'draft/02-frame-api.md').read_bytes()).hexdigest(),'scope':'25 prose exact placement/API identifiers/numeric tokens/URLs/no diagrams in this fixed manual and all untouched outside prose and declared labels','contentReview':'not performed','imported':False,'build':'not performed','display':'not performed','finalProjectGates':'pending'};(p/'DRAFT_STRUCTURE.json').write_text(json.dumps(o,ensure_ascii=False,indent=2)+'\n');print('draft structure passed; all content review/final checks pending')
