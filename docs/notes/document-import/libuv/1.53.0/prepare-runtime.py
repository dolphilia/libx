"""Enable reviewed bilingual runtime without changing document text or claiming release readiness."""
from pathlib import Path
import argparse,json,hashlib,shutil
p=argparse.ArgumentParser();p.add_argument('--repository',required=True);p.add_argument('--workspace',required=True);p.add_argument('--manifest',required=True);a=p.parse_args();root=Path(a.repository);w=Path(a.workspace);app=w/'apps/libuv';m=json.loads(Path(a.manifest).read_text());assert m['completedPages']==43 and m['unreviewedPages']==0
for row in m['pages']:
 for role in ['canonical','translation']:
  ref=row[role];assert hashlib.sha256((root/ref['path']).read_bytes()).hexdigest()==ref['sha256']
  lang='en' if role=='canonical' else 'ja';dest=app/'src/content/docs/v1-53-0'/lang/row['id'];assert dest.read_bytes()==(root/ref['path']).read_bytes()
f=app/'src/config/project.config.jsonc';c=json.loads(f.read_text());c['language']['supported']=['en','ja'];c['language']['default']='en';c['translations']['en']['categories']['reference']='Reference';c['translations']['ja']['categories']['reference']='リファレンス';f.write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
f=app/'package.json';pkg=json.loads(f.read_text());pkg['scripts']['prebuild']='libx-docs-prepare --projects=libuv && node ../../scripts/importers/build-libuv-search-index.mjs';f.write_text(json.dumps(pkg,ensure_ascii=False,indent=2)+'\n')
f=w/'scripts/importers/build-libuv-search-index.mjs';f.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(root/'scripts/importers/build-libuv-search-index.mjs',f)
print('86 current manifest files aligned; bilingual config/search runtime enabled; publication gates pending')
