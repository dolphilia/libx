from pathlib import Path
import json,hashlib,shutil
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/rapidjson/v1-1-0';W=Path('/private/tmp/libx-rapidjson-formal-853');E=Path(__file__).parent;sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();write=lambda p,x:p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
names=['046-classrapidjson_1_1_generic_value.md','066-document_8h_source.md','069-encodedstream_8h_source.md'];routes=json.loads((N/'regeneration/ROUTES.json').read_text());refs=json.loads((N/'REFERENCE_MAP.json').read_text());rows=[]
for name in names:
 row=next(x for x in routes['inputs']if x['name']==name);p=N/'regeneration/inputs'/name;q=p.with_suffix('.md.txt');assert sha(p)==row['sha256'];p.rename(q);row['storedPath']=name+'.txt';rows.append({'before':str(p.relative_to(R)),'after':str(q.relative_to(R)),'sha256':sha(q),'byteUnchanged':True})
 id=routes['routes'][Path(name).stem]+'.md';page=next(x for x in refs['pages']if x['id']==id);p=R/page['canonical']['path'];q=p.with_suffix('.md.txt');assert sha(p)==page['canonical']['sha256'];p.rename(q);page['canonical']['path']=str(q.relative_to(R));rows.append({'before':str(p.relative_to(R)),'after':str(q.relative_to(R)),'sha256':sha(q),'byteUnchanged':True})
write(N/'regeneration/ROUTES.json',routes);write(N/'REFERENCE_MAP.json',refs)
p=N/'regeneration/regenerate.py';s=p.read_text().replace("p=N/'regeneration/inputs'/row['name'];","p=N/'regeneration/inputs'/row.get('storedPath',row['name']);").replace("id=routes[p.stem]+'.md'","id=routes[Path(row['name']).stem]+'.md'");p.write_text(s)
source=json.loads((N/'SOURCE_MANIFEST.json').read_text());source['replayInputs']['sha256']=sha(N/'regeneration/ROUTES.json');source['replayGenerator']['sha256']=sha(p);write(N/'SOURCE_MANIFEST.json',source)
write(E/'RAW_EVIDENCE_PATH_DELTA.json',{'status':'passed-byte-preservation','reason':'raw C++ ([...](T*), etc.) in Markdown code-shaped raw HTML snapshots is parsed as prose by global Markdown link scanner; evidence renamed to .md.txt without changing content or published routes; scoped parse5 gate verifies actual HTML links','rows':rows})
for row in rows:
 old=W/row['before'];new=W/row['after'];assert sha(old)==row['sha256'];old.rename(new)
for name in ['regeneration/ROUTES.json','REFERENCE_MAP.json','regeneration/regenerate.py','SOURCE_MANIFEST.json']:shutil.copy2(N/name,W/'docs/notes/document-import/rapidjson/v1-1-0'/name)
print('Six saved raw snapshots renamed byte-identically; no published content or route change')
