from pathlib import Path
import markdown,json,hashlib
root=Path('/Users/dolphilia/github/libx'); base=root/'docs/notes/project-expansion/runs/evidence'; out=base/'2026-10-03-325';out.mkdir(exist_ok=False)
trial=Path('/private/tmp/libx-sds-native-325');trial.mkdir(exist_ok=False)
inputs={'guide':base/'2026-10-03-322/SDS_GUIDE_TRIAL.md','api-comments':base/'2026-10-03-319/sds-scope-trial/api-comments.md','headers':base/'2026-10-03-324/SDS_PUBLIC_AND_ALLOCATOR_HEADER_TRIAL.md','license':base/'2026-10-03-319/sds-scope-trial/license.md','notes':base/'2026-10-03-324/SDS_SOURCE_NOTES_DRAFT.md'}
nav='<nav>'+''.join(f'<a href="{n}.html">{n}</a> ' for n in inputs)+'</nav>'
css='body{font:18px/1.6 system-ui;margin:0 auto;padding:24px;max-width:960px;overflow-wrap:anywhere;color:#18222b;background:#fff}nav{position:sticky;top:0;background:#eef3f8;padding:8px;z-index:2}nav a{margin-right:12px}pre{background:#eef2f5;padding:16px;overflow-x:auto;white-space:pre;line-height:1.4;font-size:14px}code{font-family:monospace}h1,h2,h3{scroll-margin-top:90px}a{color:#125da6}'
manifest={}
for name,p in inputs.items():
 src=p.read_text();html=markdown.markdown(src,extensions=['fenced_code','tables','attr_list','toc']);page=f'<!doctype html><html lang="'+('ja' if name=='notes' else 'en')+f'"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>SDS qualification — {name}</title><style>{css}</style>{nav}<main>{html}</main></html>'
 (trial/f'{name}.html').write_text(page);(out/f'{name}.html').write_text(page)
 manifest[name]={'input':str(p.relative_to(root)),'inputSha256':hashlib.sha256(p.read_bytes()).hexdigest(),'outputSha256':hashlib.sha256(page.encode()).hexdigest()}
(out/'TRIAL_INPUTS.json').write_text(json.dumps({'status':'trial','renderer':markdown.__version__,'scope':'Pre-adoption conversion only; no software code execution, translation review or production validation','pages':manifest},indent=2)+'\n')
print(json.dumps(manifest,indent=2))
