from pathlib import Path
import argparse,subprocess,sys,json,hashlib,shutil
R=Path(__file__).resolve().parents[2];N=R/'docs/notes/document-import/wren/v0-4-0'
a=argparse.ArgumentParser();a.add_argument('--output',required=True);O=Path(a.parse_args().output).resolve();O.mkdir(parents=True,exist_ok=True)
subprocess.run([sys.executable,str(N/'regeneration/regenerate.py'),'--output',str(O)],check=True)
rows=json.loads((N/'regeneration/JAPANESE.json').read_text());assert len(rows)==24
for row in rows:
 p=N/'regeneration/japanese'/row['id'];assert hashlib.sha256(p.read_bytes()).hexdigest()==row['sha256'];q=O/'ja'/row['id'];q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
print('Wren canonical replay:42 English originals +24 saved Japanese guides;no retranslating or original example execution.')
