from pathlib import Path
import subprocess,hashlib,json,datetime
N=Path(__file__).resolve().parent;D=N/'source/derived';D.mkdir(exist_ok=True);r=subprocess.run(['texi2any','--html','--no-split','--output',str(D/'manual.html'),'tar.texi'],cwd=N/'source/doc',capture_output=True,text=True);assert r.returncode==0,r.stderr
print(json.dumps({'exitCode':r.returncode,'generator':subprocess.check_output(['texi2any','--version'],text=True).splitlines()[0],'output':'source/derived/manual.html','sha256':hashlib.sha256((D/'manual.html').read_bytes()).hexdigest(),'warnings':r.stderr}))
