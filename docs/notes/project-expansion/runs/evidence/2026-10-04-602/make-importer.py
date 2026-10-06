from pathlib import Path
import json,hashlib
r=Path('/Users/dolphilia/github/libx');p=r/'docs/notes/document-import/jq/1.8.2';s=Path('/private/tmp/jq-preserved-html-593.py').read_text();dest=r/'scripts/document-import/jq';dest.mkdir(exist_ok=False)
lock={n:hashlib.sha256((p/n).read_bytes()).hexdigest() for n in ['SOURCE_MANIFEST.json','PARSED_MANUAL.json','HTML_BLOCK_FIELDS.json','BOUNDARY.json','RIGHTS_FULFILLMENT.json','CC_BY_3_0.txt','sources/COPYING','sources/docs/content/manual/v1.8/manual.yml']}
header='''#!/usr/bin/env python3
"""Generate the full fixed jq1.8 English canonical pages from preserved original inputs.
No network, LLM or global dependencies. Refuse changed inputs and existing output.
The HTML snapshot is fixed upstream Markdown rendering verified in cycle593;
this script never treats EN output as a Japanese translation.
"""
import sys,json,hashlib,html,re,argparse,os,tempfile,shutil
from pathlib import Path
parser=argparse.ArgumentParser()
parser.add_argument('--packet',type=Path,required=True)
parser.add_argument('--output',type=Path,required=True)
args=parser.parse_args();packet=args.packet.resolve();target=args.output.absolute()
LOCK='''+repr(lock)+'''
def digest(data):return hashlib.sha256(data).hexdigest()
if target.exists() or target.is_symlink():raise SystemExit('output already exists; refusing overwrite')
for name,expected in LOCK.items():
    path=packet/name
    if not path.is_file() or path.is_symlink() or digest(path.read_bytes())!=expected:
        raise SystemExit('fixed input mismatch: '+name)
manifest=json.loads((packet/'SOURCE_MANIFEST.json').read_text())
for item in manifest['inputs']:
    path=packet/'sources'/item['upstreamPath']
    if digest(path.read_bytes())!=item['sha256']:raise SystemExit('manifest input mismatch: '+item['upstreamPath'])
manual=json.loads((packet/'PARSED_MANUAL.json').read_text())
reference=json.loads((packet/'HTML_BLOCK_FIELDS.json').read_text())
fields={x['key']:x for x in reference['fields']}
assert len(fields)==301
for f in fields.values():
    value=manual
    for key in f['key'].split('/'):
        value=value[int(key)] if isinstance(value,list) else value[key]
    assert digest(value.encode())==f['sourceSha256'],f['key']
assert reference['inputSha256']==LOCK['sources/docs/content/manual/v1.8/manual.yml']
boundary=json.loads((packet/'BOUNDARY.json').read_text())
assert boundary['rawSha256']==reference['inputSha256']
target.parent.mkdir(parents=True,exist_ok=True)
out=Path(tempfile.mkdtemp(prefix='.'+target.name+'-',dir=target.parent))
(out/'markdown').mkdir()
'''
a=s.index('headings={};pages=[]');s=header+s[a:];s=s.replace("root/'docs/notes/project-expansion/runs/evidence/2026-10-04-590/JQ_LICENSE_FULFILLMENT.json'","packet/'RIGHTS_FULFILLMENT.json'")
s=s.replace("    (app/'src/content/docs/v1-8-2/en/01-guide'/name).write_text(text)\n",'')
s=s.replace("(app/'src/data').mkdir(exist_ok=True)\n(app/'src/data/document-headings.json').write_text(json.dumps(headings,ensure_ascii=False,indent=2)+'\\n')\n",'')
s=s.replace("status='preserved-upstream-html-full-scope-trial'","status='full-fixed-english-canonical-export-not-ja'" )
s=s[:s.index('print(dict')]+'''
(out/'licenses').mkdir()
for name,title,src in [('01-original-notices.md','Original jq COPYING','sources/COPYING'),('02-cc-by-3-0.md','CC BY 3.0 Unported — Full legal code','CC_BY_3_0.txt')]:
    body=(packet/src).read_text()
    text='---\\ntitle: '+json.dumps(title,ensure_ascii=False)+'\\ncategoryOrder: 2\\n---\\n\\n'+fence(body)
    (out/'licenses'/name).write_text(text)
rows=[]
def leaves(value,key=''):
    if isinstance(value,dict):
        for k,v in value.items():yield from leaves(v,key+'/'+k if key else k)
    elif isinstance(value,list):
        for k,v in enumerate(value):yield from leaves(v,key+'/'+str(k))
    elif isinstance(value,str):yield key,value
for key,value in leaves(manual):
    if key.startswith('sections/'):
        i=int(key.split('/')[1]);name=pages[i+1]['name']
    elif key.startswith('manpage_'):name='15-manpage-appendix.md'
    else:name='00-introduction.md'
    rows.append(dict(sourceKey=key,sourceTextSha256=digest(value.encode()),canonicalPage='markdown/'+name,renderedField=key if key in fields else None,kind='example' if '/examples/' in key else 'prose-or-title'))
assert len(rows)==1135
(out/'CONTENT_MAP.json').write_text(json.dumps(dict(sourceSha256=reference['inputSha256'],rows=rows,manualPages=16,noticePages=2,entries=136,examples=250),ensure_ascii=False,indent=2)+'\\n')
files=[dict(path=str(path.relative_to(out)),sha256=digest(path.read_bytes())) for path in sorted(out.rglob('*')) if path.is_file()]
(out/'OUTPUT_MANIFEST.json').write_text(json.dumps(files,indent=2)+'\\n')
# Rename only after the whole full-scope export has been generated.
if target.exists() or target.is_symlink():raise SystemExit('output appeared; refusing overwrite')
os.rename(out,target)
print(json.dumps(dict(pages=len(pages),noticePages=2,fields=len(fields),sourceLeaves=len(rows),examples=250)))
'''
(dest/'import.py').write_text(s)
print(dest/'import.py')
