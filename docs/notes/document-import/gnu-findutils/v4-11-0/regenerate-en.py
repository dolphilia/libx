"""Replay saved source HTML from fixed original Texinfo before canonical adoption."""
from pathlib import Path
import json,hashlib,subprocess,tempfile,sys
N=Path(__file__).resolve().parent;M=json.loads((N/'SOURCE_MANIFEST.json').read_text());h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
for f in M['files']:assert h(N/f['path'])==f['sha256']
assert subprocess.check_output(['makeinfo','--version'],text=True).splitlines()[0].endswith('7.1')
with tempfile.TemporaryDirectory(prefix='libx-findutils-manual-')as tmp:
 p=Path(tmp)/'manual.html';subprocess.run(['makeinfo','--html','--no-split','--no-headers','-I',str(N/'source/derived-config'),'-o',str(p),str(N/'source/original/doc/find.texi')],check=True);assert h(p)==h(N/'source/derived-manual.html'),'Full manual replay differs from fixed input'
subprocess.run([sys.executable,str(N/'prepare-canonical-draft.py')],check=True)
print('Fixed original Texinfo→complete manual→26source fragments/ENbodies replayed; no meaning approvals added')
