import pathlib,json,re,posixpath,collections,hashlib
root=pathlib.Path('/private/tmp/libx-libuv-screening-676/source');out=pathlib.Path('docs/notes/project-expansion/runs/evidence/2026-10-05-676');rst=sorted((root/'docs/src').rglob('*.rst'));edges=[];incs=[];images=[];errors=[]
for path in rst:
 rel=path.relative_to(root).as_posix();lines=path.read_text().splitlines()
 for i,line in enumerate(lines):
  m=re.match(r'(\s*)\.\.\s+(literalinclude|image|toctree)::\s*(.*)',line)
  if not m:continue
  indent=len(m[1]);kind=m[2];arg=m[3]
  if kind=='toctree':
   for j in range(i+1,len(lines)):
    q=lines[j]
    if not q.strip():continue
    if len(q)-len(q.lstrip())<=indent:break
    q=q.strip()
    if q.startswith(':'):continue
    if '<' in q:q=q[q.index('<')+1:q.rindex('>')]
    target=posixpath.normpath(posixpath.join(posixpath.dirname(rel),q+'.rst'))
    row={'from':rel,'line':j+1,'target':target,'exists':(root/target).is_file()};edges.append(row)
    if not row['exists']:errors.append(row)
  else:
   target=posixpath.normpath(posixpath.join(posixpath.dirname(rel),arg));options=[]
   for j in range(i+1,len(lines)):
    q=lines[j]
    if q.strip() and len(q)-len(q.lstrip())<=indent:break
    if q.strip():options.append(q.strip())
   row={'from':rel,'line':i+1,'target':target,'exists':(root/target).is_file(),'options':options}
   if row['exists']:row['sha256']=hashlib.sha256((root/target).read_bytes()).hexdigest()
   (incs if kind=='literalinclude' else images).append(row)
   if not row['exists']:errors.append(row)
seen={'docs/src/index.rst'}
while True:
 new={e['target'] for e in edges if e['from'] in seen}-seen
 if not new:break
 seen|=new
allrst={p.relative_to(root).as_posix() for p in rst}
data={'status':'static-source-reference-resolved','rstFiles':len(rst),'toctreeReachable':len(seen),'orphans':sorted(allrst-seen),'toctreeEdges':edges,'literalIncludes':incs,'images':images,'missingReferences':errors,'limitations':['Generated Sphinx-page correspondence/rendering not yet tested.','Literalinclude lines/emphasize ranges and original raw/manpage/custom directive semantics need generated comparison.','Logo/favicon/Keynote binary components require asset-role/rights review.']}
(out/'REFERENCE_MAP.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n');print(json.dumps({'rst':len(rst),'reachable':len(seen),'orphans':sorted(allrst-seen),'literalIncludes':len(incs),'uniqueIncludes':len({x['target'] for x in incs}),'images':len(images),'missing':len(errors)}))
