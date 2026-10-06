# Extract prose metadata; substring matches are candidates, never review verdicts.
from pathlib import Path
import re,json,html,hashlib,difflib
p=Path(__file__).parent
ref=lambda x:{'path':str(x),'sha256':hashlib.sha256(Path(x).read_bytes()).hexdigest()}
c=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-787/canonical/04-api/01-block-api.md');s=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-781/lz4-fixed/doc/lz4_manual.html');text=c.read_text();bodyStart=text.index('\n---\n')+5;h=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-781/lz4-fixed/lib/lz4.h').read_bytes();bindings=json.loads(Path('docs/notes/project-expansion/runs/evidence/2026-10-05-806/COMMENT_BINDINGS.json').read_text())
def norm(x):return re.sub(r'\s+',' ',x).strip()
headers=[]
for b in bindings[1:]:
 raw=h[b['sourceStart']:b['sourceEnd']].decode();raw=re.sub(r'^/\*+!?','',raw);raw=re.sub(r'\*/\s*$','',raw);raw=re.sub(r'^\s*\* ?','',raw,flags=re.M);headers.append((b['index'],norm(raw)))
slots=[]
for m in re.finditer(r'<p>((?:(?!</p>).)*?)</p>|<pre>(?!<b>)((?:(?!</pre>).)*?)<BR></pre>',text[bodyStart:],re.S):
 raw=m[1] if m[1] is not None else m[2]
 if not raw.strip():continue
 n=norm(html.unescape(raw));exact=[i for i,v in headers if n in v];nearest=sorted([(difflib.SequenceMatcher(None,n,v).ratio(),i)for i,v in headers],reverse=True)[:2]
 start=bodyStart+(m.start(1) if m[1] is not None else m.start(2));end=bodyStart+(m.end(1) if m[1] is not None else m.end(2))
 slots.append({'index':len(slots),'kind':'api-description' if m[1] is not None else 'chapter-prose','canonicalStart':start,'canonicalEnd':end,'canonicalLines':[text[:start].count('\n')+1,text[:end].count('\n')+1],'text':html.unescape(raw),'rawSha256':hashlib.sha256(raw.encode()).hexdigest(),'exactNormalizedSubstringHeaderIndices':exact,'nearestHeaderCandidates':[{'index':i,'ratio':round(r,4)}for r,i in nearest],'reuseStatus':'not approved; compare labels/omissions/conditions before translation reuse'})
assert len(slots)==len([m for m in re.finditer(r'<p>(.*?)</p>',text[bodyStart:],re.S)if m[1].strip()])+4
assert all('<pre>' not in x['text'] and '</pre>' not in x['text']for x in slots)
o={'status':'prepared-not-translated-not-reviewed','source':ref(s),'canonical':ref(c),'headerSource':ref('docs/notes/project-expansion/runs/evidence/2026-10-05-781/lz4-fixed/lib/lz4.h'),'headerBindings':ref('docs/notes/project-expansion/runs/evidence/2026-10-05-806/COMMENT_BINDINGS.json'),'initialSourceReading':[[1,683]],'contentReview':[],'slotCount':len(slots),'slots':slots,'pending':['全文日本語翻訳（header同文訳は範囲/見出し/API名と条件照合後に再利用可能）','h1/h2/目次11リンクラベルと全API説明を翻訳、b宣言/inline comment/ASCII図を原文保護','原destSizeのdstCapacity/宣言targetDstSize、inplace本文と式の差を注記で保持','原文/定本/JA別工程全文review、全構造/数値/URL/識別子/DOM/隔離build']}
(p/'API_PREPARATION.json').write_text(json.dumps(o,ensure_ascii=False,indent=2)+'\n');print(len(slots),'prose slots;',sum(bool(x['exactNormalizedSubstringHeaderIndices'])for x in slots),'normalized substrings; no reuse verdict')
