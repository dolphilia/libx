from pathlib import Path
import hashlib,json,re,shutil,datetime,subprocess
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/rapidjson/v1-1-0';E=Path(__file__).parent;W=Path('/private/tmp/libx-rapidjson-formal-853');A=W/'apps/rapidjson'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def write(p,x):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
assert not (E/'START.json').exists(),'prepare is once-only'
write(E/'START.json',{'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(W),'baseline':'5a3372c9b0fcb3734f8ddf3fac6368e5dc6617cc','phase':'formal verification/source-offer; no new full review'})
for name in ['CONTENT_MAP','REFERENCE_MAP','REVIEW_MANIFEST','SOURCE_MANIFEST','PROGRESS']:shutil.copy2(N/(name+'.json'),E/(name+'_BEFORE.json'))
review=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert review['completedPages']==13
# Save the reviewed JA inputs; replay copies these, never pretends to retranslate.
ja=[]
for p in sorted((N/'translations/ja').rglob('*.md')):
 id=p.relative_to(N/'translations/ja');q=N/'regeneration/japanese'/id;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q);ja.append({'id':str(id),'sha256':sha(q)})
write(N/'regeneration/JAPANESE.json',ja)
footer='<p><a href="/docs/rapidjson/source/v1-1-0/source.zip">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：原文アーカイブ、英日原稿、固定入力、通知と再構築手順を含みます。原文・第三者素材の条件は各通知を参照してください。</p>'
write(N/'regeneration/FOOTER.json',{'html':footer})
p=N/'regeneration/regenerate.py';s=p.read_text();s=s.replace("out=O/id;", "footer=json.loads((N/'regeneration/FOOTER.json').read_text()) if (N/'regeneration/FOOTER.json').exists() else None\n if footer:\n  result=source_footer(result,footer['html'])\n out=O/id;")
helper='''\ndef source_footer(raw, html):
 front,body=raw.split('---\\n',2)[1:]
 context=json.loads(re.search(r'^documentContext: (.*)$',front,re.M)[1])
 assert not any('/source/v1-1-0/source.zip' in c['html'] for c in context)
 context.append({'kind':'source','html':html})
 front=re.sub(r'^documentContext: .*$',lambda m:'documentContext: '+json.dumps(context,ensure_ascii=False),front,flags=re.M)
 return '---\\n'+front+'---\\n'+body
'''
s=s.replace('for row in data[\'inputs\']:',helper+'\nfor row in data[\'inputs\']:');p.write_text(s)
wrapper=W/'scripts/importers/import-rapidjson-1.1.0.py'
wrapper.write_text('''"""Replay the saved fixed English static inputs and reviewed Japanese editable inputs.
Python 3.10+, standard library only; no Doxygen runtime or retranslation.
"""
import argparse,hashlib,json,re,subprocess,sys
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('--notes',type=Path,default=Path('docs/notes/document-import/rapidjson/v1-1-0'));p.add_argument('--output',type=Path,required=True);a=p.parse_args();n=a.notes.resolve();o=a.output.resolve()
subprocess.run([sys.executable,str(n/'regeneration/regenerate.py'),'--notes',str(n),'--output',str(o/'en')],check=True)
footer=json.loads((n/'regeneration/FOOTER.json').read_text())['html']
for row in json.loads((n/'regeneration/JAPANESE.json').read_text()):
 raw=(n/'regeneration/japanese'/row['id']).read_bytes();assert hashlib.sha256(raw).hexdigest()==row['sha256'];front,body=raw.decode().split('---\\n',2)[1:]
 context=json.loads(re.search(r'^documentContext: (.*)$',front,re.M)[1]);assert not any('/source/v1-1-0/source.zip' in c['html'] for c in context);context.append({'kind':'source','html':footer})
 front=re.sub(r'^documentContext: .*$',lambda m:'documentContext: '+json.dumps(context,ensure_ascii=False),front,flags=re.M);q=o/'ja'/row['id'];q.parent.mkdir(parents=True,exist_ok=True);q.write_text('---\\n'+front+'---\\n'+body)
print('Replayed 218 English originals and 13 saved reviewed Japanese documents')
''')
T=Path('/private/tmp/libx-rapidjson-replay-856');assert not T.exists();subprocess.run(['python3',str(wrapper),'--notes',str(N),'--output',str(T)],check=True)
rows=[]
for lang,folder in [('en','canonical'),('ja','translations')]:
 for p in sorted((N/folder/lang).rglob('*.md')):
  id=p.relative_to(N/folder/lang);q=T/lang/id;old=p.read_bytes();new=q.read_bytes();beforebody=old.decode().split('---\n',2)[2];afterbody=new.decode().split('---\n',2)[2];assert beforebody==afterbody
  rows.append({'id':str(id),'language':lang,'beforeSha256':sha(p),'afterSha256':sha(q),'bodySha256':hashlib.sha256(beforebody.encode()).hexdigest(),'bodyUnchanged':True,'change':'existing footer source-offer link only'})
  shutil.copy2(q,p);shutil.copy2(q,A/'src/content/docs/v1-1-0'/lang/id)
  preferred=A/'public/source/v1-1-0/edited'/lang/id;preferred.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(q,preferred)
write(N/'FOOTER_DELTA.json',{'status':'checked-metadata-only','URL':'/docs/rapidjson/source/v1-1-0/source.zip','rows':rows});shutil.copy2(N/'FOOTER_DELTA.json',E/'FOOTER_DELTA.json')
ref=lambda p:{'path':str(p.relative_to(R)),'sha256':sha(p)}
map=json.loads((N/'CONTENT_MAP.json').read_text());refs=json.loads((N/'REFERENCE_MAP.json').read_text())
for page in map['pages']:
 for key in ['canonical','translation']:
  page[key]=ref(R/page[key]['path']);record=next(x for x in review['pages']if x['id']==page['id']);record[key]['sha256']=page[key]['sha256']
 record['metadataDelta']=ref(N/'FOOTER_DELTA.json')
for page in refs['pages']:page['canonical']=ref(R/page['canonical']['path'])
write(N/'CONTENT_MAP.json',map);write(N/'REFERENCE_MAP.json',refs);write(N/'REVIEW_MANIFEST.json',review)
source=json.loads((N/'SOURCE_MANIFEST.json').read_text());source['replayGenerator']=ref(N/'regeneration/regenerate.py');source['preferredJapaneseReplay']=ref(N/'regeneration/JAPANESE.json');source['footerDelta']=ref(N/'FOOTER_DELTA.json');source['portableImporter']={'path':'scripts/importers/import-rapidjson-1.1.0.py','sha256':sha(wrapper)};write(N/'SOURCE_MANIFEST.json',source)
shutil.copytree(N,W/'docs/notes/document-import/rapidjson/v1-1-0',dirs_exist_ok=True)
package=json.loads((A/'package.json').read_text());package['scripts'].update({'check:content':'node check-content.mjs','check:rendered':'node check-content.mjs --rendered','import:canonical':'python3 ../../scripts/importers/import-rapidjson-1.1.0.py --output=../../.tmp/rapidjson-regenerated'});write(A/'package.json',package)
# Preserve original landing bytes; insert exactly the creator's single project entry.
landing=W/'sites/landing/src/config/projects.config.jsonc';base=subprocess.check_output(['git','show','HEAD:sites/landing/src/config/projects.config.jsonc'],cwd=W).decode();entry=json.loads(landing.read_text())['projects'] if False else None
# Actual config can include comments: splice the creator's entry, leave every baseline byte intact.
created=landing.read_text();start=created.index('    {\n      "id": "rapidjson"');end=created.index('\n    }',start)+6;snippet=created[start:end];assert 'rapidjson' not in base
pos=base.rfind('\n  ]');assert pos>=0;last=base[:pos].rstrip();landing.write_text(last+',\n'+snippet+base[pos:])
for name,lines in [('.gitattributes','\n# RapidJSON fixed original inputs and reviewed documents preserve their bytes.\ndocs/notes/document-import/rapidjson/** -text -whitespace\napps/rapidjson/src/content/docs/** -text -whitespace\napps/rapidjson/public/source/** -text -whitespace\napps/rapidjson/public/notices/** -text -whitespace\n'),('.prettierignore','\n# RapidJSON fixed and reviewed raw HTML/source inputs.\ndocs/notes/document-import/rapidjson/**\napps/rapidjson/src/content/docs/**\napps/rapidjson/public/source/**\napps/rapidjson/public/notices/**\n')]:
 p=W/name;p.write_text(p.read_text()+lines)
print('Prepared 231 footer-only changes; 13 full reviews retained, portable replay and public preferred inputs saved')
