from pathlib import Path
import shutil,subprocess,hashlib,json
r=Path('/Users/dolphilia/github/libx');s=Path('/private/tmp/libx-gperf-import-20261004');w=Path('/private/tmp/libx-gperf-integration-20261004')
assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=w,text=True).strip()=='077b6923e2fbede0b6c1e43656ae7d7316ffcbb4'
assert not subprocess.check_output(['git','status','--porcelain'],cwd=w,text=True)
assert not (r/'apps/gperf').exists()
guards={str(p.relative_to(r)):hashlib.sha256(p.read_bytes()).hexdigest() for p in [r/'pnpm-lock.yaml',r/'.github/workflows/cloudflare-pages-deploy.yml',r/'sites/landing/src/config/projects.config.jsonc']}
for rel in ['apps/gperf','docs/notes/document-import/gperf','scripts/document-import/gperf']:
 shutil.copytree(s/rel,w/rel,ignore=shutil.ignore_patterns('node_modules','dist','.astro'))
shutil.copy2(s/'pnpm-lock.yaml',w/'pnpm-lock.yaml')
review='docs/notes/project-expansion/runs/evidence/2026-10-04-573/CONTENT_REVIEW.json';(w/review).parent.mkdir(parents=True,exist_ok=True);shutil.copy2(r/review,w/review)
subprocess.run(['git','remote','set-url','origin','https://github.com/dolphilia/libx.git'],cwd=w,check=True)
subprocess.run(['git','switch','-c','codex/integrate-gperf-production-20261004'],cwd=w,check=True)
assert all(hashlib.sha256((r/p).read_bytes()).hexdigest()==h for p,h in guards.items())
record={'at':'2026-10-04','workspace':str(w),'baseline':'077b6923e2fbede0b6c1e43656ae7d7316ffcbb4','rootProtectedFiles':guards,'rootGperfAbsent':True,'onlyNewGperfSourcesAnd33LineLockImporterCopied':True,'sharedCodeChanged':False,'githubRefsEvidence':'/private/tmp/gperf-github-refs-579.txt','productionLiveAPIStillPending':True}
Path('/private/tmp/gperf-integration-state-579.json').write_text(json.dumps(record,indent=2)+'\n');print(record)
