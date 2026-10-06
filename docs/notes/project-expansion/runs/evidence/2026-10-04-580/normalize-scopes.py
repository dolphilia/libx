from pathlib import Path
import re,json,hashlib
old=Path('/private/tmp/xxhash-ci-artifacts-554/verified-deployment-077b6923e2fbede0b6c1e43656ae7d7316ffcbb4-1/dist');new=Path('/private/tmp/libx-gperf-integration-20261004/dist')
diff=json.loads(Path('/private/tmp/gperf-dist-diff-580.json').read_text());m={};reverse={};errors=[];htmlpaths=[p for p in diff['changed'] if p.endswith('.html')]
for p in htmlpaths:
 a=(old/p).read_text();b=(new/p).read_text();left=list(dict.fromkeys(re.findall(r'data-astro-cid-([a-z0-9]+)',a)));right=list(dict.fromkeys(re.findall(r'data-astro-cid-([a-z0-9]+)',b)))
 if len(left)!=len(right):errors.append([p,'scope ID set size',len(left),len(right)]);continue
 for x,y in zip(left,right):
  if x in m and m[x]!=y:errors.append([p,'inconsistent scope mapping',x,y,m[x]])
  if y in reverse and reverse[y]!=x:errors.append([p,'nonbijective scope mapping',x,y,reverse[y]])
  m[x]=y;reverse[y]=x
cssmap={};cssresults=[]
for p in diff['removed']:
 candidates=[q for q in diff['added'] if q.endswith('.css') and q.rsplit('/',1)[0]==p.rsplit('/',1)[0] and q.rsplit('/',1)[1].startswith('style.')]
 if len(candidates)!=1:errors.append([p,'ambiguous CSS replacement',candidates]);continue
 q=candidates[0];cssmap[p]=q;a=(old/p).read_text();b=(new/q).read_text()
 left=list(dict.fromkeys(re.findall(r'data-astro-cid-([a-z0-9]+)',a)));right=list(dict.fromkeys(re.findall(r'data-astro-cid-([a-z0-9]+)',b)))
 if len(left)!=len(right):errors.append([p,'CSS scope size differs'])
 else:
  for x,y in zip(left,right):
   if x in m and m[x]!=y:errors.append([p,'CSS scope conflict',x,y,m[x]])
   if y in reverse and reverse[y]!=x:errors.append([p,'CSS nonbijective scope conflict',x,y,reverse[y]])
   m[x]=y;reverse[y]=x
 normalized=re.sub(r'data-astro-cid-([a-z0-9]+)',lambda t:'data-astro-cid-'+m.get(t[1],t[1]),a)
 cssresults.append({'before':p,'after':q,'scopeMappedByteExact':normalized==b})
 if normalized!=b:errors.append([p,'CSS has additional difference beyond mapped scope IDs'])
exact=[];residual=[]
for p in htmlpaths:
 a=(old/p).read_text();b=(new/p).read_text();a=re.sub(r'data-astro-cid-([a-z0-9]+)',lambda t:'data-astro-cid-'+m.get(t[1],t[1]),a)
 for x,y in cssmap.items():a=a.replace('/'+x,'/'+y)
 (exact if a==b else residual).append(p)
record={'method':'explicit bijective Astro scope attribute/selector mapping plus uniquely paired per-folder stylesheet URL replacement; no arbitrary HTML/content exclusions','scopeMap':m,'mappingErrors':errors,'css':cssresults,'htmlByteExactAfterMapping':exact,'residualHTML':residual,'outsideHTMLChanges':[p for p in diff['changed'] if not p.endswith('.html')],'addedWithoutCSS':[p for p in diff['added'] if p not in cssmap.values()]}
Path('/private/tmp/gperf-normalized-baseline-diff-580.json').write_text(json.dumps(record,indent=2)+'\n');print({'scopeMappings':len(m),'mappingErrors':errors[:8],'cssExact':sum(x['scopeMappedByteExact'] for x in cssresults),'cssTotal':len(cssresults),'htmlExact':len(exact),'residualHTML':residual[:25],'outsideHTMLChanges':record['outsideHTMLChanges']})
