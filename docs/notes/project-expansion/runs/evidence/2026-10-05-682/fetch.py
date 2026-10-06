import urllib.request,json,hashlib,datetime
from pathlib import Path
out=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-682');rows=[]
urls={'APACHE_LICENSE.txt':'https://www.apache.org/licenses/LICENSE-2.0.txt','YOUTUBE_EMBED_GUIDE.html':'https://developers.google.com/youtube/player_parameters','YOUTUBE_OEMBED.json':'https://www.youtube.com/oembed?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnGn60vDSxQ4&format=json','YOUTUBE_EMBED.html':'https://www.youtube-nocookie.com/embed/nGn60vDSxQ4'}
for name,url in urls.items():
 row={'url':url,'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat()}
 try:
  req=urllib.request.Request(url,headers={'User-Agent':'Libx documentation source verification'})
  with urllib.request.urlopen(req,timeout=35) as r:
   b=r.read(4_000_001);assert len(b)<4_000_001;row.update(status=r.status,finalUrl=r.url,bytes=len(b),sha256=hashlib.sha256(b).hexdigest(),saved=name);(out/name).write_bytes(b)
 except Exception as e:row.update(error=str(e))
 rows.append(row)
(out/'REFERENCE_FETCH.json').write_text(json.dumps({'scope':'read-only public official references, no login/agreements/publication/downloaded video','rows':rows},indent=2)+'\n');print(json.dumps(rows))
