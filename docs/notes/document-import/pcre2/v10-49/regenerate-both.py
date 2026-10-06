from pathlib import Path
import subprocess,sys
N=Path(__file__).resolve().parent
for command in [['node',str(N/'make-html5-input.mjs')],[sys.executable,str(N/'regenerate-en.py')],[sys.executable,str(N/'regenerate-ja.py')]]:subprocess.run(command,check=True)
