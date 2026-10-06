from pathlib import Path
import subprocess,sys
N=Path(__file__).resolve().parent
for name in ['regenerate-en.py','regenerate-ja.py']:subprocess.run([sys.executable,str(N/name)],check=True)
