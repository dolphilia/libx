from pathlib import Path
import sys,json,shutil,hashlib
U=Path(__file__).resolve().parent;N=U.parents[1];W=Path(sys.argv[1]) if len(sys.argv)>1 else U.parents[6];A=W/'apps/gnu-tar';D=A/'public/source/v1-35'
assert A.exists()
for p in (U/'preferred').rglob('*.md'):
 t=A/'src/content/docs/v1-35'/p.relative_to(U/'preferred');t.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(p,t)
if (D/'edited').exists():shutil.rmtree(D/'edited')
shutil.copytree(N/'preferred',D/'edited')
for parent in [N/'updates/2026-10-12-invocation-styles/preferred',U/'preferred']:
 shutil.copytree(parent,D/'edited',dirs_exist_ok=True)
assert len(list((D/'edited').rglob('*.md')))==90
shutil.copyfile(U/'SOURCE_OFFER_README.md',D/'SOURCE_README.md')
p=A/'src/config/project.config.jsonc';c=json.loads(p.read_text());c['translations']['en'].update(displayName='GNU tar Introduction, Invocation and Options',displayDescription='GNU tar1.35 complete chapters1–2 and sections3–3.4.4, with fixed original sources.');c['translations']['ja'].update(displayName='GNU tar 入門・呼び出し・オプション',displayDescription='GNU tar1.35第1〜2章と第3章前半（3.4.4まで）の原文と独自日本語訳。')
s=c['licensing']['sources'][0];s['name']='GNU tar1.35 Introduction, Tutorial, Invocation and Options';s['provenanceNotes'][0]={'en':'Libx provides complete chapters1–2, sections3–3.4.4 and footnotes1–6 with independent Japanese translation. Section3.5onward and remaining chapters/appendices/indexes are available in the fixed full original. Commands and examples are static literal text.','ja':'Libxは第1〜2章全文、第3章前半（3〜3.4.4）と脚注1〜6の原文と独自日本語訳を提供します。3.5以降・他の章・付録・索引は固定原文を参照できます。コマンドと例は実行せず、原文の静的な文字列として示します。'}
url='/docs/gnu-tar/source/v1-35/source.zip';s['attributionLinks']=[x for x in s['attributionLinks'] if x['url']!=url]+[{'url':url,'label':{'en':'Editable source and rebuild kit','ja':'編集用原稿・再生成キット'}}]
p.write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n');(U/'project.config.jsonc').write_bytes(p.read_bytes())
print('90 edited sources, scoped reader configuration and combined source README prepared')
