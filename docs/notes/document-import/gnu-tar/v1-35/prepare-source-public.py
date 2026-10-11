from pathlib import Path
import sys,json,shutil
N=Path(__file__).resolve().parent;W=Path(sys.argv[1]if len(sys.argv)>1 else '/private/tmp/libx-gnu-tar-formal-964');A=W/'apps/gnu-tar';D=A/'public/source/v1-35';D.mkdir(parents=True,exist_ok=True)
if(D/'edited').exists():shutil.rmtree(D/'edited')
shutil.copytree(N/'preferred',D/'edited');shutil.copyfile(N/'SOURCE_OFFER_README.md',D/'SOURCE_README.md')
p=A/'src/config/project.config.jsonc';c=json.loads(p.read_text());s=c['licensing']['sources'][0];url='/docs/gnu-tar/source/v1-35/source.zip';s['attributionLinks']=[x for x in s['attributionLinks']if x['url']!=url]+[{'url':url,'label':{'en':'Editable source and rebuild kit','ja':'編集用原稿・再生成キット'}}];p.write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n');(N/'project.config.jsonc').write_bytes(p.read_bytes());print('64 edited sources, source README and source kit link prepared')
