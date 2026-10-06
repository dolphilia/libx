import pathlib,json,subprocess,urllib.request,datetime
root=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-03-323')
c=subprocess.run(['git','credential','fill'],input='protocol=https\nhost=github.com\n\n',text=True,stdout=subprocess.PIPE,stderr=subprocess.DEVNULL,check=True);token=dict(x.split('=',1) for x in c.stdout.splitlines() if '=' in x)['password']
def api(p):
 req=urllib.request.Request('https://api.github.com/repos/dolphilia/libx'+p,headers={'Authorization':'Bearer '+token,'Accept':'application/vnd.github+json'})
 with urllib.request.urlopen(req,timeout=30) as r:return json.load(r)
x=api('/actions/runs/37080542356');assert x['head_sha']=='adbe8b8d8698a406734a5e7466ae1e589a5190d4';j=api('/actions/runs/37080542356/jobs');a=api('/actions/runs/37080542356/artifacts');out={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'run':{k:x[k] for k in ['id','head_sha','head_branch','status','conclusion','html_url']},'jobs':j['jobs'],'artifacts':a['artifacts']};(root/('CI_'+str(int(datetime.datetime.now().timestamp()))+'.json')).write_text(json.dumps(out,indent=2)+'\n');print(json.dumps({'run':out['run'],'jobs':[{'name':p['name'],'status':p['status'],'conclusion':p['conclusion']} for p in j['jobs']],'artifacts':a['total_count']}))
