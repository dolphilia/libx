"""Replay fixed SDS English inputs and saved reviewed Japanese editing sources.
Python3.10+ and Markdown3.7. No original software execution or retranslation.
"""
import argparse,hashlib,json,subprocess,sys
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--notes',type=Path,default=Path('docs/notes/document-import/sds/v2-0-0'));p.add_argument('--output',type=Path,required=True);a=p.parse_args();n=a.notes.resolve();o=a.output.resolve()
subprocess.run([sys.executable,str(n/'regeneration/regenerate.py'),'--output',str(o)],check=True)
for row in json.loads((n/'regeneration/JAPANESE.json').read_text()):
 raw=(n/'regeneration/japanese'/row['id']).read_bytes();assert hashlib.sha256(raw).hexdigest()==row['sha256'];q=o/'ja'/row['id'];q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(raw)
print('SDS replay12 English originals/8 saved reviewed Japanese guides;4 references English only')
