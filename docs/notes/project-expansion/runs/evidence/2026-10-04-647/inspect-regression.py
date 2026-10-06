import pathlib,re,json,hashlib
old=pathlib.Path('/private/tmp/footer-ci-artifacts-645/verified-deployment-84f9815bcdcc2f6ab62836de624ce6b1c33b51e3-1/dist');new=pathlib.Path('/private/tmp/libx-jq-footer-integration-20261004/dist')
data=json.load(open('docs/notes/project-expansion/runs/evidence/2026-10-04-646/INTEGRATED_DIFF.json'))
scopes={};conflicts=[]
for name in data['changed']:
 if not name.startswith('docs/'):continue
 a=(old/name).read_text();b=(new/name).read_text();aa=re.findall(r'data-astro-cid-[a-z0-9]+',a);bb=re.findall(r'data-astro-cid-[a-z0-9]+',b)
 if len(aa)!=len(bb):conflicts.append({'path':name,'counts':[len(aa),len(bb)]});continue
 for x,y in zip(aa,bb):
  if x in scopes and scopes[x]!=y:conflicts.append({'scope':x,'values':[scopes[x],y]})
  scopes[x]=y
css={}
for name in data['missing']:
 assert name.endswith('.css');candidates=[x for x in data['added'] if pathlib.PurePosixPath(x).parent==pathlib.PurePosixPath(name).parent and pathlib.PurePosixPath(x).name.startswith('style.') and x.endswith('.css')];assert len(candidates)==1,(name,candidates);css[name]=candidates[0]
unresolved=[];exact=0
for name in data['changed']:
 if not name.startswith('docs/'):continue
 a=(old/name).read_text();b=(new/name).read_text()
 for x,y in scopes.items():a=a.replace(x,y)
 for x,y in css.items():a=a.replace('/'+x,'/'+y)
 if a!=b:
  pos=next((i for i,(x,y) in enumerate(zip(a,b)) if x!=y),min(len(a),len(b)));unresolved.append({'path':name,'position':pos,'old':a[max(0,pos-70):pos+140],'new':b[max(0,pos-70):pos+140]})
 else:exact+=1
cssResults=[]
for x,y in css.items():
 a=(old/x).read_text();b=(new/y).read_text()
 for k,v in scopes.items():a=a.replace(k,v)
 cssResults.append({'old':x,'new':y,'sameAfterScopeReplacement':a==b,'oldBytes':len(a),'newBytes':len(b)})
result={'scopes':scopes,'conflicts':conflicts[:10],'conflictCount':len(conflicts),'css':cssResults,'existingDocsExactAfterOnlyScopeAndStylesheetRename':exact,'unresolved':unresolved}
pathlib.Path('docs/notes/project-expansion/runs/evidence/2026-10-04-647/REGRESSION_INSPECTION.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print({'conflicts':len(conflicts),'scopes':len(scopes),'matched':exact,'unresolved':len(unresolved),'cssUnresolved':sum(not x['sameAfterScopeReplacement'] for x in cssResults)});print(unresolved[:2])
