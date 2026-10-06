from pathlib import Path
import urllib.request,json,hashlib,datetime
E=Path(__file__).parent;fixed=json.loads((E/'FIXED_INPUTS.json').read_text());sha=fixed['commit'];tree=json.loads((E/'source/yyjson/TREE.json').read_text())['tree'];records=[]
for name in ['API','DataStructure','CHANGELOG']:
 url='https://raia.app/resource/yyjson/'+name+'.html';p=E/('RAIA_'+name+'.html')
 try:
  with urllib.request.urlopen(url,timeout=30)as r:data=r.read();status=r.status
  p.write_bytes(data);records.append({'url':url,'status':status,'path':p.name,'sha256':hashlib.sha256(data).hexdigest(),'bytes':len(data)})
 except Exception as x:records.append({'url':url,'status':'unavailable','error':str(x)})
images=['doc/images/perf_reader_ec2.svg','doc/images/perf_reader_a14.svg','doc/images/struct_ival.svg','doc/images/struct_idoc1.svg','doc/images/struct_idoc2.svg','doc/images/struct_mval.svg','doc/images/struct_mdoc.svg']
rows=[]
for rel in images:
 f=next(f for f in tree if f['path']==rel);url='https://raw.githubusercontent.com/ibireme/yyjson/'+sha+'/'+rel
 with urllib.request.urlopen(url,timeout=30)as r:data=r.read()
 assert hashlib.sha1(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest()==f['sha'];p=E/'source/yyjson/original'/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(data);rows.append({'path':str(p.relative_to(E)),'upstreamPath':rel,'url':url,'sha256':hashlib.sha256(data).hexdigest(),'gitBlob':f['sha'],'bytes':len(data)})
(E/'JAPANESE_FETCH.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'Existing Japanese material reading only;no redistribution/adoption of translation','records':records},ensure_ascii=False,indent=2)+'\n');(E/'IMAGE_INPUTS.json').write_text(json.dumps({'status':'passed-fixed-fetch','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'commit':sha,'files':rows},ensure_ascii=False,indent=2)+'\n');print(json.dumps({'Japanese':[{k:r[k]for k in ['url','status']}for r in records],'images':len(rows)}))
