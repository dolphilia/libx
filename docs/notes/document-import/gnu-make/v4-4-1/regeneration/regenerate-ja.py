"""Assemble reviewed Japanese bodies literally; retain English legal notices."""
from pathlib import Path
import json,re,hashlib
N=Path(__file__).resolve().parents[1];ROOT=N.parents[4];A=ROOT/'apps/gnu-make'
assert (A/'src/config/project.config.jsonc').is_file()
routes=json.loads((N/'regeneration/ROUTES.json').read_text())
for i,p in enumerate(routes['guides']):
 stem=Path(p['id']).stem;batch='batch-882' if i<6 else 'batch-883'
 draft=(N/'translations'/batch/(stem+'.ja-draft.md')).read_text()
 body=draft.replace('/docs/gnu-make/v4-4-1/en/01-guide/','/docs/gnu-make/v4-4-1/ja/01-guide/').replace('Makefile入門（英語原文）','Makefile入門').replace('長い行の分割（英語原文）','長い行の分割')
 en=(N/p['canonical']).read_text();original=(N/'regeneration'/(stem+'.body.md')).read_text().strip()
 assert en.count(original)==1,stem
 page=en.replace('title: '+json.dumps(p['titleEN'],ensure_ascii=False),'title: '+json.dumps(p['titleJA'],ensure_ascii=False),1).replace('# '+p['titleEN']+'\n','# '+p['titleJA']+'\n',1).replace(original,body.strip(),1)
 # Python literal substitution keeps dollars/backticks/backslashes unchanged.
 for base in [N/'canonical/ja',A/'src/content/docs/v4-4-1/ja',A/'public/source/v4-4-1/edited/ja']:
  dest=base/p['id'];dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(page)
print('Assembled15reviewedJapanese guides;guidehrefsJapanese;Englishlegalnotice retained')
