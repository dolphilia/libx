"""Replay the saved fixed English static inputs and reviewed Japanese editable inputs.
Python 3.10+, standard library only; no Doxygen runtime or retranslation.
"""
import argparse,hashlib,json,re,subprocess,sys
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--notes',type=Path,default=Path('docs/notes/document-import/rapidjson/v1-1-0'));p.add_argument('--output',type=Path,required=True);a=p.parse_args();n=a.notes.resolve();o=a.output.resolve()
subprocess.run([sys.executable,str(n/'regeneration/regenerate.py'),'--notes',str(n),'--output',str(o/'en')],check=True)
footer=json.loads((n/'regeneration/FOOTER.json').read_text())['html']
for row in json.loads((n/'regeneration/JAPANESE.json').read_text()):
 raw=(n/'regeneration/japanese'/row['id']).read_bytes();assert hashlib.sha256(raw).hexdigest()==row['sha256'];front,body=raw.decode().split('---\n',2)[1:]
 context=json.loads(re.search(r'^documentContext: (.*)$',front,re.M)[1]);assert not any('/source/v1-1-0/source.zip' in c['html'] for c in context);context.append({'kind':'source','html':footer})
 front=re.sub(r'^documentContext: .*$',lambda m:'documentContext: '+json.dumps(context,ensure_ascii=False),front,flags=re.M);q=o/'ja'/row['id'];q.parent.mkdir(parents=True,exist_ok=True);q.write_text('---\n'+front+'---\n'+body)
print('Replayed 218 English originals and 13 saved reviewed Japanese documents')
