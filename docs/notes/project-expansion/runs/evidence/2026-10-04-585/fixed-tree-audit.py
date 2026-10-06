import tarfile,pathlib,json,hashlib,posixpath
r=pathlib.Path('/Users/dolphilia/github/libx');old=r/'docs/notes/project-expansion/runs/evidence/2026-10-04-583';ev=r/'docs/notes/project-expansion/runs/evidence/2026-10-04-585';out=[]
for a in json.loads((ev/'ARCHIVE_FETCH.json').read_text()):
 tree=json.loads((old/(a['id'].upper()+'_TREE.json')).read_text());blobs={x['path']:x for x in tree['tree'] if x['type']=='blob'};records=[];errors=[]
 with tarfile.open(ev/a['file'],'r:gz') as tf:
  members={ '/'.join(pathlib.PurePosixPath(m.name).parts[1:]):m for m in tf.getmembers() if m.isfile() or m.issym() or m.islnk()}
  for p,m in members.items():
   if m.issym():
    data=m.linkname.encode();resolved=posixpath.normpath(posixpath.join(posixpath.dirname(p),m.linkname));assert not resolved.startswith('../') and not resolved.startswith('/');mode='120000';kind='symlink'
   elif m.isfile():data=tf.extractfile(m).read();resolved=None;mode='100755'if m.mode&0o111 else'100644';kind='regular'
   else:errors.append({'path':p,'error':'unsupported-hardlink'});continue
   h=hashlib.sha1(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest();expected=blobs.get(p)
   row={'path':p,'kind':kind,'mode':mode,'gitBlobSHA':h,'expectedBlobSHA':expected['sha']if expected else None,'match':expected is not None and expected['sha']==h and expected['mode']==mode}
   if resolved is not None:row.update({'linkTarget':m.linkname,'resolvedWithinArchive':resolved,'targetPresent':resolved in members})
   if not row['match']:errors.append(row)
   records.append(row)
  missing=sorted(set(blobs)-set(members));errors.extend({'path':p,'error':'tree-blob-not-in-archive'}for p in missing)
 out.append({'id':a['id'],'commit':a['commit'],'treeBlobs':len(blobs),'archiveFilesAndSymlinks':len(members),'matches':sum(x['match']for x in records),'errors':errors,'records':records})
 with open(ev/(a['id'].upper()+'_TREE_AUDIT.json'),'x')as f:json.dump(out[-1],f,ensure_ascii=False,indent=2);f.write('\n')
 print({k:out[-1][k]for k in ['id','treeBlobs','archiveFilesAndSymlinks','matches','errors']})
 print([x for x in records if x['kind']=='symlink'and('LICENSE'in x['path']or'manual.yml'in x['path'])])
