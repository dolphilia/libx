from pathlib import Path
import json,re,hashlib,shutil,datetime
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/wren/v0-4-0';E=Path(__file__).parent;W=Path('/private/tmp/libx-wren-formal-864');A=W/'apps/wren';S=A/'public/source/v0-4-0'
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
def ref(p):return {'path':str(p.relative_to(R)),'sha256':sha(p)}
def write(p,x):p.parent.mkdir(parents=True,exist_ok=True);p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
assert not (E/'FOOTER_DELTA.json').exists()
c=json.loads((N/'regeneration/CONTEXT.json').read_text());old=json.loads(json.dumps(c));c.append({'kind':'source','html':'<p><a href="/docs/wren/source/v0-4-0/source.zip">Libx編集用ソース一式（ZIP） / Editable Libx source</a>：固定原文45ファイル、英語42ページ・非公式日本語訳24ガイドの編集原稿、再生成入力、原通知、共有ビルドコードと再構築手順を含みます。API 17ページは未翻訳の英語原文です。各ファイルの原条件を参照してください。</p>'})
write(N/'regeneration/CONTEXT.json',c);rows=[]
for lang in ['en','ja']:
 for p in sorted((N/'canonical'/lang).rglob('*.md')):
  raw=p.read_text();front,body=raw.split('---\n',2)[1:];before=sha(p);front=re.sub(r'^documentContext: .*$',lambda m:'documentContext: '+json.dumps(c,ensure_ascii=False),front,flags=re.M);out='---\n'+front+'---\n'+body;assert out.split('---\n',2)[2]==body;p.write_text(out)
  id=str(p.relative_to(N/'canonical'/lang))
  for dest in [A/'src/content/docs/v0-4-0'/lang/id,S/'edited'/lang/id]:dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(out)
  rows.append({'lang':lang,'id':id,'before':before,'after':sha(p),'bodySHA256':hashlib.sha256(body.encode()).hexdigest(),'bodyUnchanged':True})
assert len(rows)==66;write(E/'FOOTER_DELTA.json',{'status':'passed-body-unchanged','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'contextBefore':old,'contextAfter':c,'pages':66,'rows':rows})
for file in ['CONTENT_MAP.json','REFERENCE_MAP.json']:
 m=json.loads((N/file).read_text())
 for p in m['pages']:
  p['canonical']=ref(N/'canonical/en'/p['id'])
  if file=='CONTENT_MAP.json':p['translation']=ref(N/'canonical/ja'/p['id'])
 write(N/file,m)
m=json.loads((N/'REVIEW_MANIFEST.json').read_text())
for p in m['pages']:
 for role,lang in [('canonical','en'),('translation','ja')]:
  q=N/'canonical'/lang/p['id'];p[role]=dict(p[role],sha256=sha(q))
 p['metadataDelta']=ref(E/'FOOTER_DELTA.json')
write(N/'REVIEW_MANIFEST.json',m)
# Provide output selection while keeping the same deterministic English converter.
g=N/'regeneration/regenerate.py';s=g.read_text();assert "out=B/'canonical/en'/row['id']" in s
s=s.replace("routes=json.loads", "O=Path(sys.argv[sys.argv.index('--output')+1]).resolve() if '--output' in sys.argv else None\nroutes=json.loads",1).replace("out=B/'canonical/en'/row['id']","out=(O/'en'/row['id']) if O else (B/'canonical/en'/row['id'])").replace("dest=B/'regeneration/document-headings.json'","dest=(O/'document-headings.json') if O else (B/'regeneration/document-headings.json')")
g.write_text(s);m=json.loads((N/'SOURCE_MANIFEST.json').read_text());m['regenerator']=ref(g);m['finalContext']=ref(N/'regeneration/CONTEXT.json');write(N/'SOURCE_MANIFEST.json',m)
ja=[]
for p in sorted((N/'canonical/ja').rglob('*.md')):
 id=str(p.relative_to(N/'canonical/ja'));q=N/'regeneration/japanese'/id;q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q);ja.append({'id':id,'sha256':sha(q)})
write(N/'regeneration/JAPANESE.json',ja)
shutil.copytree(N,W/N.relative_to(R),dirs_exist_ok=True)
wrapper=W/'scripts/importers/import-wren-0.4.0.py';wrapper.parent.mkdir(parents=True,exist_ok=True)
wrapper.write_text('''from pathlib import Path
import argparse,subprocess,sys,json,hashlib,shutil
R=Path(__file__).resolve().parents[2];N=R/'docs/notes/document-import/wren/v0-4-0'
a=argparse.ArgumentParser();a.add_argument('--output',required=True);O=Path(a.parse_args().output).resolve();O.mkdir(parents=True,exist_ok=True)
subprocess.run([sys.executable,str(N/'regeneration/regenerate.py'),'--output',str(O)],check=True)
rows=json.loads((N/'regeneration/JAPANESE.json').read_text());assert len(rows)==24
for row in rows:
 p=N/'regeneration/japanese'/row['id'];assert hashlib.sha256(p.read_bytes()).hexdigest()==row['sha256'];q=O/'ja'/row['id'];q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q)
print('Wren canonical replay:42 English originals +24 saved Japanese guides;no retranslating or original example execution.')
''')
print('Wren66 footer delta body unchanged;66 preferred sources;stdlib converter output support;source ZIP pending')
