from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,shutil,subprocess
out=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-683');old=json.loads((out/'TRIAL_PREPARED.json').read_text());(out/'INITIAL_TRIAL_PREPARED.json').write_text((out/'TRIAL_PREPARED.json').read_text());app=Path(old['app']);mapping={r['slug']:(r['slug'] if '/' in r['slug'] else 'reference/'+('overview' if r['slug']=='index' else r['slug'])) for r in old['rows']};base='/docs/libuv-trial/v1-53-0/en/';rows=[]
for r in old['rows']:
 p=Path(r['file']);s=p.read_text()
 for original,adapted in sorted(mapping.items(),key=lambda x:len(x[0]),reverse=True):s=s.replace(base+original+'/',base+adapted+'/')
 target=app/'src/content/docs/v1-53-0/en'/(mapping[r['slug']]+'.md');target.parent.mkdir(parents=True,exist_ok=True);target.write_text(s)
 if target!=p:p.unlink()
 body=BeautifulSoup(s.split('---\n',2)[2].replace('&#10;','\n'),'html.parser').find('article',role='main');rows.append({**r,'originalSlug':r['slug'],'slug':mapping[r['slug']],'file':str(target),'bodySha256':hashlib.sha256(str(body).encode()).hexdigest(),'fileSha256':hashlib.sha256(target.read_bytes()).hexdigest()})
old['rows']=rows;old['routeAdaptation']='All original root files grouped under reference/; original index becomes reference/overview to avoid reserved language index. Original source filenames/IDs/hierarchy of guide paragraphs unchanged. All internal links updated.';(out/'TRIAL_PREPARED.json').write_text(json.dumps(old,indent=2)+'\n');(out/'ROUTE_ADAPTATION.json').write_text(json.dumps({'mapping':mapping,'reason':'Template requires section/file slugs for file pagination and reserves version/language index; original pages kept and link map explicit.'},indent=2)+'\n')
r=subprocess.run(['pnpm','exec','astro','build'],cwd=app,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,timeout=120);(out/'ASTRO_BUILD.log').write_bytes(r.stdout);(out/'BUILD_RESULT.json').write_text(json.dumps({'exitCode':r.returncode,'cwd':str(app),'paginationErrors':r.stdout.decode().count('Error generating pagination'),'invalidEntrySlugs':r.stdout.decode().count('Invalid entry slug'),'staticHtmlFiles':len(list((app/'dist').rglob('*.html'))),'sourceDocuments':43},indent=2)+'\n');print(r.returncode,r.stdout.decode()[-300:])
