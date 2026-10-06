from pathlib import Path
import shutil,json,hashlib
r=Path('/Users/dolphilia/github/libx');ev=r/'docs/notes/project-expansion/runs/evidence/2026-10-05-836';w=Path('/private/tmp/libx-ui-regression-836');old=Path('/private/tmp/libx-lz4-integration-833/libx-lz4-sourcekit');assert not w.exists();h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();fix=json.loads((r/'docs/notes/project-expansion/runs/evidence/2026-10-05-834/DROPDOWN_FIX_RESULT.json').read_text());assert h(r/fix['path'])==fix['sharedBeforeSHA'];assert h(old/fix['path'])==fix['scratchAfterSHA'];replay=json.loads((r/'docs/notes/project-expansion/runs/evidence/2026-10-05-833/INTEGRATION_RESULT.json').read_text());assert all(h(old/x['path'])==x['sha256'] for x in replay['reviewFiles']);assert not(r/'apps/lz4').exists()
ignore=shutil.ignore_patterns('node_modules','dist','.astro','*.tsbuildinfo');shutil.copytree(old,w,ignore=ignore);inputs=[]
for app in ['glfw','lua']:
    source=r/'apps'/app;shutil.copytree(source,w/'apps'/app,ignore=ignore)
    for p in (w/'apps'/app).rglob('*'):
        if p.is_file():
            rel=p.relative_to(w).as_posix();assert h(r/rel)==h(p);inputs.append({'path':rel,'sha256':h(p)})
(ev/'REGRESSION_PREPARATION.json').write_text(json.dumps({'status':'prepared','workspace':str(w),'apps':['glfw','lua'],'inputFiles':inputs,'rootDropdownBeforeSHA':fix['sharedBeforeSHA'],'scratchDropdownAfterSHA':fix['scratchAfterSHA'],'rootAppAbsent':True,'noUserOrAwesomeEdits':True},indent=2)+'\n');print('Prepared isolated GLFW/Lua regression:',len(inputs),'source files')
