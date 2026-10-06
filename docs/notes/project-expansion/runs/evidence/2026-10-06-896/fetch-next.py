from pathlib import Path
import urllib.request,hashlib,json,datetime,tarfile,io,subprocess
E=Path(__file__).parent/'next-candidate'
E.mkdir(exist_ok=True)
urls={
 'gnu-home.html':'https://www.gnu.org/software/sed/',
 'gnu-manual-index.html':'https://www.gnu.org/software/sed/manual/',
 'gnu-manual.html':'https://www.gnu.org/software/sed/manual/sed.html',
 'gnu-ftp-index.html':'https://ftp.gnu.org/gnu/sed/',
 'sed-4.10.tar.gz':'https://ftp.gnu.org/gnu/sed/sed-4.10.tar.gz',
 'jm-home.html':'https://linuxjm.sourceforge.io/',
 'jm-gnu-index.html':'https://linuxjm.sourceforge.io/INDEX/gnu.html',
}
rows=[]
for name,url in urls.items():
 p=E/name
 if p.exists():data=p.read_bytes();final=url;headers={};reused=True
 else:
  r=subprocess.run(['curl','-4','--fail','--silent','--show-error','--location','--connect-timeout','12','--max-time','35',url],stdout=subprocess.PIPE,stderr=subprocess.PIPE,timeout=40)
  if r.returncode:
   rows.append({'path':name,'url':url,'status':'failed','error':r.stderr.decode()});print(name+' failed',flush=True);continue
  data=r.stdout;final=url;headers={}
  p.write_bytes(data);reused=False
 rows.append({'path':name,'url':url,'finalURL':final,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'headers':headers,'reused':reused})
 print(name+' saved',flush=True)
archive=E/'sed-4.10.tar.gz'
if not archive.exists():
 (E/'OBSERVATIONS.json').write_text(json.dumps({'status':'draft-source-fetch-incomplete','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sources':rows},indent=2)+'\n')
 raise SystemExit('Fixed release archive not acquired; no selection claim')
with tarfile.open(archive) as t:
 members=t.getmembers();assert all(not m.name.startswith('/') and '..' not in Path(m.name).parts for m in members)
 wanted=['sed-4.10/doc/sed.texi','sed-4.10/doc/sed.info','sed-4.10/doc/sed.1','sed-4.10/COPYING','sed-4.10/NEWS','sed-4.10/doc/fdl.texi']
 saved=[]
 for name in wanted:
  matches=[m for m in members if m.name==name]
  if not matches:continue
  m=matches[0];assert m.isfile();data=t.extractfile(m).read();p=E/name;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(data)
  saved.append({'path':name,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
out={'status':'draft-primary-observations-not-selected','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sources':rows,'archiveRegularFiles':sum(m.isfile() for m in members),'savedMembers':saved,'scope':'Only official release documentation/license/version and Japanese primary documentation indexes. No original program execution or technical audit; no selection/full translation claim.'}
(E/'OBSERVATIONS.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'status':out['status'],'sources':len(rows),'savedMembers':saved},ensure_ascii=False))
