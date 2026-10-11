from pathlib import Path
import json,sys,shutil
N=Path(__file__).resolve().parent;W=Path(sys.argv[1])if len(sys.argv)>1 else N.parents[4];A=W/'apps/gnu-patch';P=A/'public/source/v2-8';P.mkdir(parents=True,exist_ok=True)
if(P/'edited').exists():shutil.rmtree(P/'edited')
shutil.copytree(N/'preferred',P/'edited');shutil.copyfile(N/'SOURCE_OFFER_README.md',P/'SOURCE_README.md')
p=A/'src/config/project.config.jsonc';c=json.loads(p.read_text());s=c['licensing']['sources'][0];url='/docs/gnu-patch/source/v2-8/source.zip';s['attributionLinks']=[x for x in s['attributionLinks']if x['url']!=url]+[{'url':url,'label':{'en':'Editable source and rebuild kit','ja':'編集用原稿・再生成キット'}}];p.write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n');(N/'project.config.jsonc').write_bytes(p.read_bytes());print('18 edited documents and sourcekit footer link prepared')
