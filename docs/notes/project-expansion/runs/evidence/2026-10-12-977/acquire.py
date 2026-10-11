from pathlib import Path
import urllib.request,hashlib,json,datetime,concurrent.futures
E=Path(__file__).parent
urls=[('homepage.html','https://www.gnu.org/software/bc/'),('releases.html','https://ftp.gnu.org/gnu/bc/')]
def get(spec):
 name,url=spec
 try:
  with urllib.request.urlopen(url,timeout=45) as r:
   b=r.read();record={'path':'source/'+name,'url':url,'finalURL':r.url,'status':r.status,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest()}
  (E/'source'/name).write_bytes(b);return record
 except Exception as e:return {'url':url,'error':str(e)}
rows=list(concurrent.futures.ThreadPoolExecutor(2).map(get,urls));x={'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'acquired' if all('error' not in x for x in rows) else 'incomplete','purpose':'Existing GNU bc candidate preliminary fixed version/scope/rights only; no adoption or app registration while GNU M4 publication pending','rows':rows,'webOpenFailures':['GNU bc homepage and official release directory timed out in web.open; bounded official HTTPS CLI fallback used']};(E/'ACQUISITION.json').write_text(json.dumps(x,indent=2)+'\n');print(json.dumps(x))
