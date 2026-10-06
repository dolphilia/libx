import subprocess,urllib.request,urllib.error,urllib.parse,re,json,pathlib,datetime
c=subprocess.run(['git','credential','fill'],input='protocol=https\nhost=github.com\n\n',text=True,stdout=subprocess.PIPE,stderr=subprocess.DEVNULL,check=True)
t=dict(x.split('=',1) for x in c.stdout.splitlines() if '=' in x)['password']
class N(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*args,**kwargs):return None
req=urllib.request.Request('https://api.github.com/repos/dolphilia/libx/actions/jobs/111077692312/logs',headers={'Authorization':'Bearer '+t})
try:
 r=urllib.request.build_opener(N).open(req,timeout=45);s=r.read().decode()
except urllib.error.HTTPError as e:
 assert e.code==302
 u=e.headers['Location'];p=urllib.parse.urlsplit(u);assert p.scheme=='https' and (p.hostname.endswith('.blob.core.windows.net') or p.hostname.endswith('.actions.githubusercontent.com'))
 with urllib.request.urlopen(u,timeout=45) as r:s=r.read().decode()
urls=list(dict.fromkeys(re.findall(r'https://[a-z0-9-]+\.libx\.pages\.dev',s)))
assert urls
out={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'job':111077692312,'run':37079360273,'headSha':'adbe8b8d8698a406734a5e7466ae1e589a5190d4','source':'Exact successful deploy-preview job log; only public Pages URLs retained','urls':urls}
p=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-03-319/PREVIEW_URL.json')
with p.open('x') as f:json.dump(out,f,indent=2);f.write('\n')
print(json.dumps(out))
