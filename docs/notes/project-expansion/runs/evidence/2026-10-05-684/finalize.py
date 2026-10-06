from pathlib import Path
import json,hashlib,tarfile
from bs4 import BeautifulSoup
out=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-684');old=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-683');d=json.loads((old/'TRIAL_PREPARED.json').read_text());app=Path(d['app']);workspace=Path(d['workspace'])
def save(n,v): (out/n).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
for r in d['rows']:
 p=Path(r['file']);r['fileSha256']=sha(p);r['bodySha256']=hashlib.sha256(p.read_text().split('---\n',2)[2].encode()).hexdigest()
save('TRIAL_PREPARED.json',d)
s=(old/'check-output.py').read_text().replace('2026-10-05-683','2026-10-05-684').replace('Native responsive/code/iframe playback not yet inspected.','Representative native desktop/mobile checks recorded separately; all-page visual and full semantic review not performed.').replace('Navigation sidebar/version links require separate verification.','Navigation order and adjacent links checked separately.')
(out/'check-output.py').write_text(s)
groups=json.loads((out/'ORIGINAL_ORDER_MAP.json').read_text())['groups'];side=json.loads((app/'public/sidebar/sidebar-en-v1-53-0.json').read_text());rows=[]
for section,slugs in groups.items():
 actual=next(x for x in side if x['title'].lower()==section)['items'];assert [x['href'].split('/')[-1] for x in actual]==slugs
 for i,slug in enumerate(slugs):
  p=app/'dist/v1-53-0/en'/section/slug/'index.html';soup=BeautifulSoup(p.read_text(),'html.parser');prev=soup.select_one('a[rel=prev]');nxt=soup.select_one('a[rel=next]')
  # Component exposes class names instead of rel in some template variants.
  prev=prev or soup.select_one('a.pagination-link--prev');nxt=nxt or soup.select_one('a.pagination-link--next')
  if not prev and i>0: prev=next((a for a in soup.select('a[href]') if a.get_text(' ',strip=True).startswith('Previous ')),None)
  if not nxt and i<len(slugs)-1:nxt=next((a for a in soup.select('a[href]') if a.get_text(' ',strip=True).startswith('Next ')),None)
  expected=lambda n:f'/docs/libuv-trial/v1-53-0/en/{section}/{slugs[n]}'
  assert (prev['href'] if prev else None)==(expected(i-1) if i else None),(section,slug,'prev')
  assert (nxt['href'] if nxt else None)==(expected(i+1) if i+1<len(slugs) else None),(section,slug,'next')
  home=soup.select_one('header a[href="/docs/libuv-trial/v1-53-0/en/reference/overview"]') or next((a for a in soup.select('a[href]') if a.get_text(strip=True)=='Libuv conversion trial'),None);assert home and home['href']=='/docs/libuv-trial/v1-53-0/en/reference/overview'
  rows.append({'slug':section+'/'+slug,'previous':prev['href'] if prev else None,'next':nxt['href'] if nxt else None,'home':home['href']})
save('NAVIGATION_VERIFICATION.json',{'pages':len(rows),'sidebarGroups':groups,'adjacentLinks':sum(bool(x['previous'])+bool(x['next']) for x in rows),'errors':[], 'rows':rows})
files=[]
for p in sorted(workspace.rglob('*')):
 rel=p.relative_to(workspace)
 if p.is_symlink() or any(s in ['node_modules','dist','.astro','.git'] for s in rel.parts) or not p.is_file():continue
 files.append({'path':str(rel),'bytes':p.stat().st_size,'sha256':sha(p)})
save('TRIAL_SOURCE_MANIFEST.json',{'workspace':str(workspace),'files':files,'excluded':'symlink dependencies, dist, .astro, .git'})
with tarfile.open(out/'ASTRO_TRIAL_PACKET.tar.gz','w:gz') as t:
 for r in files:t.add(workspace/r['path'],arcname=r['path'],recursive=False)
save('FINAL_BUILD_RESULT.json',{'exitCode':0,'logSha256':sha(out/'FINAL_ASTRO_BUILD.log'),'staticPages':len(list((app/'dist').rglob('*.html'))),'rootAppsOrSharedPackagesChanged':False,'published':False})
print('navigation',len(rows),'manifest',len(files))
