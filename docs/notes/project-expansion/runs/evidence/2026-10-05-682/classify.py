from pathlib import Path
import json,hashlib,collections
from bs4 import BeautifulSoup
root=Path('/private/tmp/libx-libuv-normalized-679/generated/html');out=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-682');rows=[]
for p in sorted(root.rglob('*')):
 if not p.is_file():continue
 rel=p.relative_to(root).as_posix()
 if rel in ['_images/architecture.png','_images/loop_iteration.png']:cl='body-asset';why='固定design本文図、元PNG byte保持、専用CC BY4.0/著者/原文/変更注記をfooterへ。'
 elif rel.endswith('.html') and rel not in ['genindex.html','search.html']:cl='reader-body';why='全42RST対応本文を抽出。'
 elif rel.startswith('_sources/'):cl='generated-source-reference';why='stage正規化sourceとoriginalの差を保持し原版と混同しない。'
 elif rel in ['genindex.html','objects.inv']:cl='generated-navigation-reference';why='索引/機械inventoryは参照として保持、API項目を捨てない。'
 else:cl='excluded-generator-ui';why='Sphinx/Furo検索・sidebar・theme・runtime・図原編集素材。本文asset/codeとして参照されず共有UIへ置換。原入力/生成一覧を保存。'
 rows.append({'path':rel,'sha256':hashlib.sha256(p.read_bytes()).hexdigest(),'classification':cl,'reason':why})
images=[];external=[];scripts=[]
for p in sorted(Path('/private/tmp/libx-libuv-body-prepared-680').rglob('*.html')):
 b=BeautifulSoup(p.read_text(),'html.parser');scripts.extend([{'page':str(p),'script':str(x)} for x in b.select('script')]);images.extend([{'page':str(p),'src':x['src']} for x in b.select('img[src]')]);external.extend([{'page':str(p),'src':x['src']} for x in b.select('[src]') if x['src'].startswith(('http:','https:','//'))])
assert len(images)==2 and not scripts and len(external)==1 and external[0]['src']=='https://www.youtube-nocookie.com/embed/nGn60vDSxQ4'
source=Path('/private/tmp/libx-libuv-screening-676/source/docs/src/static')
for r in rows:
 if r['classification']=='body-asset':assert r['sha256']==hashlib.sha256((source/Path(r['path']).name).read_bytes()).hexdigest()
(out/'GENERATED_BOUNDARY.json').write_text(json.dumps({'generatedFiles':len(rows),'counts':dict(collections.Counter(x['classification'] for x in rows)),'bodyPages':42,'bodyImages':images,'bodyScripts':scripts,'externalBodyResources':external,'rows':rows,'note':'genindex remains reference for completeness; all42 source documents in trial scope; no guide/API chapter cut.'},ensure_ascii=False,indent=2)+'\n');print('classified',len(rows),collections.Counter(x['classification'] for x in rows))
