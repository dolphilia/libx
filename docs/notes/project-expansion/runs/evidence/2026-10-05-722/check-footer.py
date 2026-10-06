from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-722';dist=Path('/private/tmp/libx-libuv-formal-689/apps/libuv/dist');ref=lambda f:{'path':str(f.relative_to(root)),'sha256':hashlib.sha256(f.read_bytes()).hexdigest()};rows=[]
for lang in ['en','ja']:
 s=BeautifulSoup((dist/f'v1-53-0/{lang}/guide/utilities/index.html').read_text(),'html.parser');body=s.select_one('article.libuv-document');footer=s.select_one('.document-provenance');assert footer
 for word in ['int64_t repeat','uint64_t repeat','UV_EINVAL','ftp_cleanup','int status','crunch_away','uv_idle_stop(handle)','on_type']:assert word in footer.get_text(),word
 assert 'Libx' in footer.get_text();assert not body.select('[data-context-kind]')
 urls=[a['href'] for a in footer.select('a[href]')];assert '/docs/libuv/v1-53-0/en/reference/timer/' in urls;assert '/docs/libuv/v1-53-0/en/reference/threadpool/' in urls;assert '/docs/libuv/source/v1-53-0/include/uv.h' in urls;assert '/docs/libuv/source/v1-53-0/docs/code/idle-compute/main.c' in urls
 p=packet/('canonical/en/guide/utilities.md' if lang=='en' else 'translation/ja/guide/utilities.md');assert p.read_text().split('---\n',2)[2]==(ev/('BASELINE_EN.md' if lang=='en' else 'BASELINE_JA.md')).read_text().split('---\n',2)[2];rows.append({'language':lang,'originalBodyByteExact':True,'renderedDiscrepancyFooterOnly':True,'sourceAndAPILinksPresent':True,'codeBlocks':len(body.select('pre'))})
(ev/'FOOTER_VERIFICATION.json').write_text(json.dumps({'inputs':[ref(packet/f) for f in ['sources/docs/src/guide/utilities.rst','sources/include/uv.h','sources/docs/src/timer.rst','sources/docs/src/threadpool.rst','sources/docs/code/idle-compute/main.c']],'rows':rows,'prebuildExitCode':0,'buildExitCode':0,'fullContentReview':'pending','nativeDisplay':'pending'},indent=2)+'\n');print('utilities EN/JA fixed API/source differences footer only; original body exact')
