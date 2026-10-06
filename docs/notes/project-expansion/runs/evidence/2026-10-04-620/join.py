import json,hashlib,re,copy
from pathlib import Path
r=Path('/Users/dolphilia/github/libx');p=r/'docs/notes/document-import/jq/1.8.2';c=p/'translations/chunks/04-builtin';ev=r/'docs/notes/project-expansion/runs/evidence/2026-10-04-620'
sha=lambda b:hashlib.sha256(b).hexdigest();load=lambda f:json.loads(f.read_text())
names=['000-003','004-011','012-021','022-029','030-042','043-052','053-062','063-074'];cycles=list(range(612,620));original=load(p/'PARSED_MANUAL.json')['sections'][3];en=copy.deepcopy(original);ja={k:v for k,v in load(c/'000-003.ja.json').items()if k!='entries'};ja['entries']=[];proof={};inputs=[];start=0
for n,cy in zip(names,cycles):
 source=c/(n+'.source.json');target=c/(n+'.ja.json');a=load(source);b=load(target)
 if start:assert a['entryStart']==b['entryStart']==start
 assert a['entries']==original['entries'][start:start+len(a['entries'])]
 ja['entries']+=b['entries'];start+=len(a['entries'])
 review=r/f'docs/notes/project-expansion/runs/evidence/2026-10-04-{cy}'/('CHUNK_REVIEW.json'if cy==612 else'CONTENT_REVIEW.json')
 for x in load(review)['coverage']:
  assert x['sourceKey']not in proof;proof[x['sourceKey']]=x
 for f in [source,target,review]:inputs.append({'path':str(f.relative_to(r)),'sha256':sha(f.read_bytes())})
def leaves(v,k=''):
 if isinstance(v,str):yield k,v
 elif isinstance(v,dict):
  for n,x in v.items():yield from leaves(x,k+'/'+n if k else n)
 elif isinstance(v,list):
  for n,x in enumerate(v):yield from leaves(x,k+'/'+str(n))
a=dict(leaves(en));b=dict(leaves(ja));assert set(a)==set(b);assert start==75
for k,v in a.items():
 x=proof['sections/3/'+k];assert x['read'];assert x['sourceSha256']==sha(v.encode());assert x['translatedSha256']==sha(b[k].encode())
 assert re.findall(r'`([^`]+)`',v)==re.findall(r'`([^`]+)`',b[k])
 assert [l for l in v.splitlines()if l.startswith('    ')]==[l for l in b[k].splitlines()if l.startswith('    ')]
 if '/examples/'in k:assert v==b[k]
assert set(proof)=={'sections/3/'+k for k in a}
assert sum(len(e.get('examples',[]))for e in ja['entries'])==145
notes=[load(c/n)for n in ['INTRO_TRANSLATOR_NOTE-612.json','LENGTH_TRANSLATOR_NOTE-613.json','UNIQUE_BY_TRANSLATOR_NOTE-616.json','DATES_TRANSLATOR_NOTE-619.json']]
note={'kind':'separate-translator-notes-not-original-text','text':'\n\n'.join(n['text']for n in notes),'sourceKeys':list(dict.fromkeys(k for n in notes for k in n['sourceKeys']))}
for k in note['sourceKeys']:
 v=load(p/'PARSED_MANUAL.json')
 for n in k.split('/'):v=v[int(n)]if isinstance(v,list)else v[n]
 assert isinstance(v,str)
ev.mkdir()
def save(f,v):
 with f.open('x')as out:out.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
for suffix,v in [('source',en),('ja',ja),('translator-note',note)]:save(p/'translations'/('04-builtin-operators-and-functions.'+suffix+'.json'),v)
# Canonical page name comes from the fixed boundary, not the heading.
expected='04-'+load(p/'BOUNDARY.json')['sections'][3]['id'];assert expected=='04-builtin-operators-and-functions'
save(ev/'JOIN_MACHINE_CHECK.json',{'sourceReviewInputs':inputs,'wholeFieldSetExact':True,'reviewedHashesExact':True,'reviewCoverageLeaves':len(a),'entryCount':75,'exampleCount':145,'noDuplicatesNoGaps':True,'inlineAndIndentedCodeExact':True,'allExampleFieldsExact':True,'translatorNotes':4,'mergedPageNotRendered':True,'releaseReady':False})
save(ev/'CONTENT_REVIEW_COVERAGE.json',{'method':'612〜619で全文対照した全leafの固定hashと結合後の原文・訳文を照合。今回introと4訳注を読了。全75項目の結合後再読ではない。','coverage':list(proof.values()),'sourceComparisonCoverageComplete':True,'postAssemblyWholePageReview':'pending','renderedContentReview':'pending','releaseReady':False})
print({'name':expected,'entries':75,'examples':145,'reviewLeaves':len(a),'notes':4})
