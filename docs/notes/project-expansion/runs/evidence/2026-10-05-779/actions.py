import subprocess,os,json,urllib.request,sys
E=os.environ.copy();E['GIT_TERMINAL_PROMPT']='0'
r=subprocess.run(['git','credential','fill'],input='protocol=https\nhost=github.com\npath=dolphilia/libx.git\n\n',capture_output=True,text=True,env=E,timeout=20)
assert r.returncode==0
c=dict(x.split('=',1)for x in r.stdout.splitlines()if '='in x)
h={'Authorization':'Bearer '+c['password'],'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'}
base='https://api.github.com/repos/dolphilia/libx/'
mode=sys.argv[1]
if mode=='dispatch':
 data={'ref':'codex/integrate-libuv-production-20261005','inputs':{'deploy_target':'production','preview_branch':'ci-preview','expected_production_commit':'6e0dbef265ff6ebadf58a7437564a7d07ffeb296'}}
 req=urllib.request.Request(base+'actions/workflows/cloudflare-pages-deploy.yml/dispatches',data=json.dumps(data).encode(),headers=h,method='POST')
 with urllib.request.urlopen(req,timeout=30)as q:print(json.dumps({'status':q.status,'request':data}))
else:
 path='actions/runs?branch=codex%2Fintegrate-libuv-production-20261005&per_page=3' if mode=='runs' else 'actions/runs/'+sys.argv[2]+'/jobs?per_page=100'
 with urllib.request.urlopen(urllib.request.Request(base+path,headers=h),timeout=30)as q:
  data=json.load(q)
  if mode=='runs':print(json.dumps([{'id':x['id'],'status':x['status'],'conclusion':x['conclusion'],'head_sha':x['head_sha'],'html_url':x['html_url']}for x in data['workflow_runs']]))
  else:print(json.dumps([{'id':x['id'],'name':x['name'],'status':x['status'],'conclusion':x['conclusion'],'steps':x['steps']}for x in data['jobs']]))
