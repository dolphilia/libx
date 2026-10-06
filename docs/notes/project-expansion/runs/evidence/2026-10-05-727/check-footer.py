from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib
r=Path('/Users/dolphilia/github/libx');p=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-727';b=r/'docs/notes/document-import/libuv/1.53.0';d=Path('/private/tmp/libx-libuv-formal-689/apps/libuv/dist');ref=lambda f:{'path':str(f.relative_to(r)),'sha256':hashlib.sha256(f.read_bytes()).hexdigest()};rows=[]
for lang in ['en','ja']:
 f=b/('canonical/en/reference/design.md' if lang=='en' else 'translation/ja/reference/design.md');s=BeautifulSoup((d/f'v1-53-0/{lang}/reference/design/index.html').read_text(),'html.parser');body=s.select_one('article.libuv-document');footer=s.select_one('.document-provenance');assert footer
 assert 'uv_cancel' in footer.get_text();assert '/docs/libuv/v1-53-0/en/reference/request/#c.uv_cancel' in [x['href'] for x in footer.select('a[href]')];assert not body.select('[data-context-kind]');assert f.read_text().split('---\n',2)[2]==(p/('BASELINE_EN.md' if lang=='en' else 'BASELINE_JA.md')).read_text().split('---\n',2)[2]
 if lang=='ja':assert 'インデント' in footer.get_text() and '解放してはならない' in footer.get_text()
 images=[]
 for img in body.select('img'):
  out=d/img['src'].removeprefix('/docs/libuv/');original=b/'sources/docs/src/static'/out.name;assert out.read_bytes()==original.read_bytes();images.append(ref(original))
 assert len(images)==2;rows.append({'language':lang,'originalBodyByteExact':True,'sourceLifetimeClarificationFooterOnly':True,'images':images})
(p/'FOOTER_VERIFICATION.json').write_text(json.dumps({'inputs':[ref(b/'sources/docs/src/request.rst')],'rows':rows,'prebuildExitCode':0,'buildExitCode':0,'nativeDisplay':'pending','fullContentReview':'pending'},indent=2)+'\n');print('design EN/JA footer and2PNG original verified')
