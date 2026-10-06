from pathlib import Path
from bs4 import BeautifulSoup
import re,json,hashlib
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-711';m=json.loads((packet/'CONTENT_MAP.json').read_text());results=[];errors=[]
for row in m['rows']:
 if not row.get('originalRst'):continue
 p=packet/'sources'/row['originalRst'];lines=p.read_text().splitlines();body=BeautifulSoup((root/row['canonicalFile']).read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser');
 for n in body.select('.linenos'):n.decompose()
 texts=[' '.join(n.get_text().split()) for n in body.select('pre')]
 for i,l in enumerate(lines):
  if not re.match(r'^\s*\.\. (?:code-block|code)(?:::block)?::',l):continue
  base=len(l)-len(l.lstrip());j=i+1;code=[];incontent=False
  while j<len(lines):
   t=lines[j];indent=len(t)-len(t.lstrip())
   if t.strip() and indent<=base:break
   if t.strip() and (incontent or not t.lstrip().startswith(':')):incontent=True;code.append(t)
   elif incontent:code.append(t)
   j+=1
  normalized=' '.join('\n'.join(code).split());present=not normalized or any(normalized in t for t in texts);r={'source':str(p.relative_to(root)),'line':i+1,'directive':l.strip(),'sourceSha256':hashlib.sha256(p.read_bytes()).hexdigest(),'sourceBodyNonempty':bool(normalized),'completeCodeBodyPreserved':present};results.append(r)
  if not present:errors.append({**r,'expectedCode':normalized})
(ev/'RST_CODE_DIRECTIVE_SCAN.json').write_text(json.dumps({'scope':'All explicit code/code-block directives in42 fixed RST pages mapped to canonical; excludes literalinclude, implicit :: blocks and prose/API directives which require separate checks.','rows':results,'errors':errors,'fullSemanticReview':False,'fullOriginalRSTPreservationProven':False},ensure_ascii=False,indent=2)+'\n');print('explicit code directives',len(results),'errors',len(errors));print(json.dumps(errors,ensure_ascii=False))
