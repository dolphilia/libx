from pathlib import Path
import shutil,json,subprocess,hashlib,datetime
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-gnu-findutils-formal-917');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-921';B=Path('docs/notes/project-expansion/runs/evidence');base='4e47452c3a52607144926346f6b94628304e298f';assert subprocess.check_output(['git','rev-parse','HEAD'],cwd=W,text=True).strip()==base;keep={}
for cycle in [916,917,918,919,920]:
 names=[]
 for p in sorted((R/B/('2026-10-06-'+str(cycle))).iterdir()):
  if not p.is_file()or p.suffix not in ['.json','.txt','.log']or p.name=='ROOT_OTHER_INPUTS_BEFORE.json':continue
  q=W/p.relative_to(R);q.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,q);names.append(p.name)
 keep[cycle]=names
paths=['.prettierignore','pnpm-lock.yaml','sites/landing/src/config/projects.config.jsonc','apps/gnu-findutils','docs/notes/document-import/gnu-findutils/v4-11-0']+[str(B/('2026-10-06-'+str(c)))for c in keep]
subprocess.run(['git','add','--',*paths],cwd=W,check=True);staged=[x for x in subprocess.check_output(['git','diff','--cached','--name-only','-z'],cwd=W).decode().split(chr(0))if x]
assert not any(x.startswith(('packages/','.github/'))or x.endswith(('OPERATIONS.json','REPORT.md','ROOT_OTHER_INPUTS_BEFORE.json'))or '/root-before/'in x for x in staged);assert not subprocess.check_output(['git','diff','--name-only'],cwd=W,text=True).strip();assert subprocess.check_output(['git','show',base+':.github/workflows/cloudflare-pages-deploy.yml'],cwd=W)==(W/'.github/workflows/cloudflare-pages-deploy.yml').read_bytes();assert hashlib.sha256((W/'packages/theme/src/css/starlight-overrides.css').read_bytes()).hexdigest()=='c2707722da49f2700ce3ced8f6bd7f301fb81495bd2a1e4d134e811557909fae'
(E/'ISOLATED_SCOPE.json').write_text(json.dumps({'status':'passed-scope-selection','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(W),'baseCommit':base,'selectedEvidence':keep,'count':len(staged),'files':staged,'rootUnrelatedUserChangesAndCSSNotCopied':True,'workflowUnchangedWithCAS':True,'rootStageCommitPush':False},indent=2)+'\n');print('GNU findutils scoped stagedfiles',len(staged),'shared/workflow/user changes excluded')
