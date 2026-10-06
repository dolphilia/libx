"""Use Git's existing GitHub credential only for this repository's Actions API.
Never print, persist, or place the credential on a command line.
"""
import subprocess,os,json,urllib.request,urllib.error
env=os.environ.copy();env['GIT_TERMINAL_PROMPT']='0'
result=subprocess.run(['git','credential','fill'],input='protocol=https\nhost=github.com\npath=dolphilia/libx.git\n\n',capture_output=True,text=True,env=env,timeout=20)
if result.returncode:
 print(json.dumps({'existingGitCredentialAvailable':False,'workflowWriteTested':False}));raise SystemExit(1)
credential=dict(line.split('=',1)for line in result.stdout.splitlines()if '='in line);token=credential.get('password');assert token,'Existing Git credential missing password/token'
request=urllib.request.Request('https://api.github.com/repos/dolphilia/libx/actions/workflows/cloudflare-pages-deploy.yml',headers={'Authorization':'Bearer '+token,'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'})
try:
 with urllib.request.urlopen(request,timeout=20)as response:
  data=json.load(response);print(json.dumps({'existingGitCredentialAvailable':True,'status':response.status,'workflowId':data['id'],'workflowPath':data['path'],'workflowWriteTested':False}))
except urllib.error.HTTPError as e:
 print(json.dumps({'existingGitCredentialAvailable':True,'status':e.code,'workflowWriteTested':False}));raise SystemExit(1)
