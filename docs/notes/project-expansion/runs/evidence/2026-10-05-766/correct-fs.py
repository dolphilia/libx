from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,sys
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-766';src=packet/'translation/ja/reference/fs.md';raw=src.read_text();head,body=raw.split('---\n',2)[1:];s=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');corrections=[]
for p in s.select('p'):
 text=p.get_text()
 if text.startswith('次の関数と同等です: ') and ('と同等です。' in text or 'と同等ですが' in text or 'と、それぞれ同等です。' in text or 'とUnix上で同等です。' in text):
  first=next(n for n in p.descendants if isinstance(n,NavigableString));assert str(first)=='次の関数と同等です: ';first.replace_with('')
  if 'Windowsでは GetFileAttributesW().' in p.get_text(' ',strip=True):
   last=list(p.strings)[-1];assert last=='.';last.replace_with('を使います。')
  corrections.append({'before':text,'after':p.get_text(),'reason':'Remove duplicated equivalence wording; complete Windows access-function predicate.'})
assert len(corrections)==13,len(corrections)
sys.path.insert(0,str(packet));from html_preservation import serialize_article
src.write_text('---\n'+head+'---\n\n'+serialize_article(s.select_one('article'),body)+'\n');Path('/private/tmp/libx-libuv-formal-689/apps/libuv/src/content/docs/v1-53-0/ja/reference/fs.md').write_bytes(src.read_bytes());(ev/'CORRECTIONS.json').write_text(json.dumps(corrections,ensure_ascii=False,indent=2)+'\n');print(len(corrections),'paragraphs corrected')
