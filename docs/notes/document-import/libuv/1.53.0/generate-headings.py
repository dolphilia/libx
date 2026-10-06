"""Regenerate headings for all current canonical/translations into a versioned evidence file.
Do not replace previous evidence; an existing output must already match exactly.
"""
from pathlib import Path
from bs4 import BeautifulSoup
import argparse,json
arg=argparse.ArgumentParser();arg.add_argument('--workspace',required=True);arg.add_argument('--output',required=True);a=arg.parse_args();app=Path(a.workspace)/'apps/libuv';out=Path(a.output);mapping={}
for p in sorted((app/'src/content/docs/v1-53-0').rglob('*.md')):
 s=BeautifulSoup(p.read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser').select_one('article.libuv-document');assert s;heads=[]
 for h in s.select('h1,h2,h3,h4,h5,h6'):
  ancestor=h.find_parent('section',id=True);anchor=h.get('id') or (ancestor['id'] if ancestor else None);assert anchor
  heads.append({'depth':int(h.name[1:]),'slug':anchor,'text':h.get_text('',strip=True).removesuffix('¶')})
 mapping[str(p.relative_to(app/'src/content/docs')).removesuffix('.md')]=heads
text=json.dumps(mapping,ensure_ascii=False,indent=2)+'\n';out.parent.mkdir(parents=True,exist_ok=True)
if out.exists():assert out.read_text()==text,'Use a fresh revision path when inputs change.'
else:out.write_text(text)
p=app/'src/data/document-headings.json';p.parent.mkdir(parents=True,exist_ok=True);p.write_text(text);print(len(mapping),'heading page records saved')
