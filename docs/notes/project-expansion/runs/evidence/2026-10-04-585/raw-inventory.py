import tarfile,pathlib,json,hashlib,re
root=pathlib.Path('/Users/dolphilia/github/libx'); ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-04-585'; dst=pathlib.Path('/private/tmp/libx-candidate-sources-585');dst.mkdir(exist_ok=True)
rows=[]
for a in json.loads((ev/'ARCHIVE_FETCH.json').read_text()):
 entries=[]
 with tarfile.open(ev/a['file'],'r:gz') as tf:
  for m in tf.getmembers():
   p=pathlib.PurePosixPath(m.name)
   assert not p.is_absolute() and '..' not in p.parts
   if not m.isfile():
    entries.append({'path':m.name,'kind':'directory' if m.isdir() else 'other','adoption':'not-extracted'});continue
   data=tf.extractfile(m).read();rel='/'.join(p.parts[1:]);save=dst/a['id']/rel
   assert len(data)<10000000;save.parent.mkdir(parents=True,exist_ok=True);save.write_bytes(data)
   row={'path':rel,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'kind':'regular'}
   if (a['id']=='mdbook' and rel.startswith(('guide/','guide-helper/'))) or (a['id']=='jq' and rel.startswith('docs/')):
    txt=data.decode('utf-8',errors='replace');row.update({'boundaryRole':'investigation-only','wordsApprox':len(re.findall(r'\b\w+\b',txt)),'includeDirectives':re.findall(r'\{\{#.*?\}\}',txt),'licenseMentions':[s for s in txt.splitlines() if re.search(r'license|copyright|SPDX',s,re.I)]})
   entries.append(row)
 rows.append({'id':a['id'],'commit':a['commit'],'archiveSHA256':a['sha256'],'entries':entries})
(ev/'ARCHIVE_INVENTORY.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n')
for x in rows:print({'id':x['id'],'members':len(x['entries']),'boundaryReferenceFiles':sum('boundaryRole'in r for r in x['entries'])})
