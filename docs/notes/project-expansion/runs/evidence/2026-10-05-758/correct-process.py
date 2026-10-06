from pathlib import Path
import json,hashlib,sys
from bs4 import BeautifulSoup,NavigableString
r=Path('/Users/dolphilia/github/libx');p=r/'docs/notes/document-import/libuv/1.53.0';e=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-758';e.mkdir();f=p/'translation/ja/reference/process.md';old=f.read_bytes();h,b=old.decode().split('---\n',2)[1:];s=BeautifulSoup(b.replace('&#10;','\n'),'html.parser');changes={'プロセスを起動するためのオプションです（次の関数へ渡します: ':'プロセスを起動するためのオプションです。次の関数へ渡します: ','Unixでは、プロセスがまだ終了していない時点で次の関数を呼び出すと、':'Unixでは、プロセスがまだ終了していない時点で次の関数、','、libuvが回収できないゾンビプロセスを作ってしまいます。ユーザーが後で次の関数を呼び出す責任を負います: ':'を呼び出すと、libuvが回収できないゾンビプロセスを作ってしまいます。ユーザーが後で次の関数を呼び出す責任を負います: '}
for a,z in changes.items():
 ns=[n for n in s.descendants if isinstance(n,NavigableString) and str(n)==a];assert len(ns)==1,(a,len(ns));ns[0].replace_with(z)
sys.path.insert(0,str(p));from html_preservation import serialize_article
f.write_text('---\n'+h+'---\n\n'+serialize_article(s.select_one('article'),b)+'\n');Path('/private/tmp/libx-libuv-formal-689/apps/libuv/src/content/docs/v1-53-0/ja/reference/process.md').write_bytes(f.read_bytes())
sha=lambda v:hashlib.sha256(v).hexdigest();(e/'CORRECTIONS.json').write_text(json.dumps({'page':'reference/process','beforeSha256':sha(old),'afterSha256':sha(f.read_bytes()),'changes':changes,'reason':'Full content review found Japanese punctuation/argument order unclear. Source/code/API/footer unchanged; two narrative paragraphs clarified.'},ensure_ascii=False,indent=2)+'\n')
(e/'correct-process.py').write_bytes(Path(__file__).read_bytes())
bse=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-757'
for n in ['check-api.py','check-rendered.py','check-headings.py']:(e/n).write_text((bse/n).read_text().replace('2026-10-05-757','2026-10-05-758'))
