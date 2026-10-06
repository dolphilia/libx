import subprocess,os,json,urllib.request,sys
E=os.environ.copy();E['GIT_TERMINAL_PROMPT']='0'
r=subprocess.run(['git','credential','fill'],input='protocol=https\nhost=github.com\npath=dolphilia/libx.git\n\n',capture_output=True,text=True,env=E,timeout=20)
assert r.returncode==0
c=dict(x.split('=',1)for x in r.stdout.splitlines()if '='in x)
h={'Authorization':'Bearer '+c['password'],'Accept':'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'}
base='https://api.github.com/repos/dolphilia/libx/'
class NoRedirect(urllib.request.HTTPRedirectHandler):
 def redirect_request(self,*args,**kwargs):return None
try:
 urllib.request.build_opener(NoRedirect).open(urllib.request.Request(base+'actions/jobs/111586819274/logs',headers=h),timeout=30)
 raise RuntimeError('Expected redirect')
except urllib.error.HTTPError as e:
 assert e.code==302;url=e.headers['Location']
import urllib.parse
q=urllib.parse.urlsplit(url);assert q.scheme=='https' and(q.hostname.endswith('.blob.core.windows.net')or q.hostname.endswith('.actions.githubusercontent.com'))
with urllib.request.urlopen(url,timeout=30)as r:raw=r.read()
from pathlib import Path
Path(__file__).with_name('FAILED_CI_JOB.log').write_bytes(raw)
print({'saved':True,'bytes':len(raw)})
