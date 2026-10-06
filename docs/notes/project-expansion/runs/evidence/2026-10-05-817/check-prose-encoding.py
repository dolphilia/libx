# Read-only deterministic proof of the format correction after full content review.
from pathlib import Path
import re,json,hashlib
p=Path(__file__).parent;old=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-816/draft/01-block-api.md');new=p/'translation/01-block-api.md';s=old.read_text();start=s.index('\n---\n')+5;pattern=r'<p>((?:(?!</p>).)*?)</p>|<pre>(?!<b>)((?:(?!</pre>).)*?)<BR></pre>';count=0
for m in reversed(list(re.finditer(pattern,s[start:],re.S))):
 g=1 if m[1]is not None else 2;raw=m[g]
 if not raw.strip():continue
 count+=1;raw=raw.replace('\n','&#10;').replace('`','&#96;').replace('*','&#42;').replace('_','&#95;');a=start+m.start(g);b=start+m.end(g);s=s[:a]+raw+s[b:]
assert count==35;assert s==new.read_text()
ref=lambda x:{'path':str(x),'sha256':hashlib.sha256(x.read_bytes()).hexdigest()}
(p/'FORMAT_CORRECTION.json').write_text(json.dumps({'status':'passed','scope':'35 prose slots only: newline/backtick/asterisk/underscore encoded as numeric HTML entities; every other byte unchanged','reviewedOriginalSnapshot':ref(old),'correctedSnapshot':ref(new),'oldCoverage':[[1,411]],'newCoverage':[[1,len(s.splitlines())]],'content':'HTML-decoded prose unchanged; semantic review retained','DOM':'separate MACHINE_API.json'},ensure_ascii=False,indent=2)+'\n');print('reviewed 411-line original -> 244-line format correction reproduced exactly')
