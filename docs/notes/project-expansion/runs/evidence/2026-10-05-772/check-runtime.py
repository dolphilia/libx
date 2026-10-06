from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib
root=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-libuv-formal-689');app=w/'apps/libuv';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-772';heads=json.loads((ev/'PAGE_HEADINGS.json').read_text());rows=[]
c=json.loads((app/'src/config/project.config.jsonc').read_text());assert c['language']['supported']==['en','ja']
for lang in ['en','ja']:
 f=app/f'public/search/v1-53-0/{lang}.json';index=json.loads(f.read_text());assert len(index['entries'])==43
 count=0
 for entry in index['entries']:
  slug=entry['url'].split('/'+lang+'/')[1].rstrip('/');s=BeautifulSoup((app/f'dist/v1-53-0/{lang}/{slug}/index.html').read_text(),'html.parser');body=s.select_one('article.libuv-document');actual=set(x['id'] for x in body.select('[id]'));actual.update([body['id']] if body.get('id') else [])
  assert set(entry['anchors'])==actual
  expected=heads[f'v1-53-0/{lang}/{slug}'];assert [(x['text'],x['slug']) for x in entry['headings']]==[(x['text'],x['slug']) for x in expected],slug
  for sym in entry['symbols']:assert sym['anchor'] in actual and sym['anchor']=='c.'+sym['name'];count+=1
  assert '&#10;' not in entry['text'] and '& 10;' not in entry['text'];assert 'documentContext:' not in entry['text']
  assert s.select_one('a[href="/docs/libuv/v1-53-0/'+('ja' if lang=='en' else 'en')+'/'+slug+'"]') or s.select_one('a[href="/docs/libuv/v1-53-0/'+('ja' if lang=='en' else 'en')+'/'+slug+'/"]'),('language switch missing',slug,lang)
 sidebar=json.loads((app/f'public/sidebar/sidebar-{lang}-v1-53-0.json').read_text());items=[x for group in sidebar for x in group['items']];assert len(items)==43 and {x['href'].rstrip('/') for x in items}=={x['url'].rstrip('/') for x in index['entries']}
 assert len(f.read_bytes())<2*1024*1024
 rows.append({'language':lang,'pages':43,'headings':sum(len(x['headings']) for x in index['entries']),'symbols':count,'sidebarEntries':len(items),'sha256':hashlib.sha256(f.read_bytes()).hexdigest(),'bytes':len(f.read_bytes())})
(ev/'RUNTIME_VERIFICATION.json').write_text(json.dumps({'status':'passed','rows':rows,'nativeUIReview':'pending'},ensure_ascii=False,indent=2)+'\n');print(rows)
