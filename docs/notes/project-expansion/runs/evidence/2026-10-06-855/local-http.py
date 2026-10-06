from pathlib import Path
import urllib.request,json,hashlib,datetime
E=Path(__file__).parent;A=Path('/private/tmp/libx-rapidjson-formal-853/apps/rapidjson');check=json.loads((E/'BATCH_CHECK.json').read_text());rows=[]
for r in check['freshRows']:
 route='v1-1-0/'+r['language']+'/'+r['id'][:-3]+'/';p=A/'dist'/route/'index.html';url='http://127.0.0.1:4335/docs/rapidjson/'+route
 with urllib.request.urlopen(url,timeout=30)as response:data=response.read();status=response.status
 assert status==200 and data==p.read_bytes();rows.append({'url':url,'status':status,'sha256':hashlib.sha256(data).hexdigest(),'localBuildExact':True})
(E/'LOCAL_HTTP.json').write_text(json.dumps({'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':'changed1EN+new4JA; unchanged23 materials/old9JA reused854','rows':rows},ensure_ascii=False,indent=2)+'\n');print('LocalHTTP5 exact bytes')
