from pathlib import Path
import json,re,hashlib
base=Path('/private/tmp/libx-zlib-production-artifact-386/dist');new=Path('/private/tmp/libx-spdlog-integration-20261003/dist');ev=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-03-418')
x=json.loads((ev/'BASELINE_OUTPUT_COMPARISON.json').read_text());mapping={};reverse={};csspairs=[]
for old in x['missing']:
 assert old.endswith('.css'),old
 p=Path(old); cand=list((new/p.parent).glob('style.*.css'));assert len(cand)==1,old
 s=(base/old).read_text();t=cand[0].read_text();a=re.findall(r'data-astro-cid-([a-z0-9]+)',s);b=re.findall(r'data-astro-cid-([a-z0-9]+)',t);assert len(a)==len(b),old
 for i,j in zip(a,b):
  assert mapping.get(i,j)==j,(old,i,j); assert reverse.get(j,i)==i,(old,i,j)
  mapping[i]=j;reverse[j]=i
 def normalize(v):return re.sub(r'data-astro-cid-[a-z0-9]+','data-astro-cid-IDENTIFIER',v)
 assert normalize(s)==normalize(t),'CSS has non-scope-ID change: '+old
 csspairs.append({'old':old,'new':str(cand[0].relative_to(new)),'scopeIdentifiersOnly':True,'oldSHA256':hashlib.sha256(s.encode()).hexdigest(),'newSHA256':hashlib.sha256(t.encode()).hexdigest()})
matched=[];residual=[]
for name in x['changed']:
 assert name.endswith('.html'),name
 s=(base/name).read_text();t=(new/name).read_text()
 def replace(m):
  i=m[1];assert i in mapping,(name,i);return 'data-astro-cid-'+mapping[i]
 s=re.sub(r'data-astro-cid-([a-z0-9]+)',replace,s)
 for p in csspairs:s=s.replace(Path(p['old']).name,Path(p['new']).name)
 if s==t:matched.append(name)
 else:
  residual.append(name)
  out=Path('/private/tmp/libx-spdlog-output-residual-418')/name;out.parent.mkdir(parents=True,exist_ok=True)
  out.with_suffix('.old.html').write_text(s);out.with_suffix('.new.html').write_text(t)
r={'status':'pending-landing-classification','scope':'All19 old CSS actual bytes differ only by bijective Astro scope identifiers; all changed HTML compared after ONLY those exact identifier/name substitutions. No body/link/text normalization. Local root-dependent Astro scope hashes, not source edits.','css':csspairs,'scopeIdentifierMap':mapping,'oldHTMLWithOnlyVerifiedBuildIdentifierChanges':len(matched),'residualHTML':residual,'newSpdlogFiles':len([p for p in x['added'] if p.startswith('docs/spdlog/')]),'unexplainedAdded': [p for p in x['added'] if not p.startswith('docs/spdlog/') and p not in [c['new'] for c in csspairs]]}
with(ev/'BASELINE_DIFF_CLASSIFICATION.json').open('x') as f:json.dump(r,f,ensure_ascii=False,indent=2);f.write('\n')
print(json.dumps({k:v for k,v in r.items() if k not in ['css','scopeIdentifierMap']},ensure_ascii=False))
