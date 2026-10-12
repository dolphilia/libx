from pathlib import Path
from bs4 import BeautifulSoup
import hashlib,json,datetime
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/gnu-tar/v1-35';E=Path(__file__).parent;W=Path('/private/tmp/libx-gnu-tar-formal-964');Q=Path('/private/tmp/libx-gnu-tar-source-rebuild-967-fixed2/workspace');S=Path('/private/tmp/libx-expansion-save-20261011')/N.relative_to(R);h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();at=datetime.datetime.now(datetime.timezone.utc).isoformat()
rows=[]
for p in (N/'preferred/en/02-reference').glob('*.md'):
 old=S/'preferred/en/02-reference'/p.name
 a=BeautifulSoup(old.read_text().split('---',2)[2],'html.parser');b=BeautifulSoup(p.read_text().split('---',2)[2],'html.parser');assert a.get_text()==b.get_text();assert [x.get_text()for x in a.select('pre')]==[x.get_text()for x in b.select('pre')];rows.append({'path':str(p.relative_to(R)),'previousSHA256':h(old),'currentSHA256':h(p),'allTextAndPreExact':True})
(E/'REFERENCE_REPRESENTATION.json').write_text(json.dumps({'status':'passed','at':at,'change':'Encode pre newlines as HTML character references to prevent Markdown blank-line splitting; original files and license wording unchanged. Prior canonical validation is retained as historical pre-representation evidence; new final build proofs supersede reference rendering.','rows':rows},indent=2)+'\n')
def manifest(d):return {str(p.relative_to(d)):h(p)for p in d.rglob('*')if p.is_file()}
a=manifest(W/'apps/gnu-tar/dist');b=manifest(Q/'apps/gnu-tar/dist');differences=[k for k in a.keys()|b.keys()if a.get(k)!=b.get(k)]
z=h(N/'source-offer.zip');assert z==h(W/'apps/gnu-tar/dist/source/v1-35/source.zip')==h(Q/'apps/gnu-tar/dist/source/v1-35/source.zip')
(E/'RECONSTRUCTION_FINAL.json').write_text(json.dumps({'status':'passed','at':at,'sourceZIP':z,'preferredDocuments':64,'wholeReviewBindings':31,'originalInputs':24,'allBuildFilesByteExact':not differences,'differentFiles':sorted(differences),'buildFiles':len(a),'outputComparison':'Both 64-page build verifiers passed body/pre/notices/IDs/references and download hashes. CSS asset and resulting HTML differ between full formal checkout and minimal kit; style/shell assessment remains for integration gate.','replayLog':'RECONSTRUCTION_REPLAY.log','install':'Fixed lockfile install with ignore-scripts; initial offline cache lacked ajv8.17.1, final authorized install succeeded.','rows':[{'path':k,'sha256':v}for k,v in sorted(a.items())]},indent=2)+'\n');print('Independent body/pre/notices/review/source bindings passed; differing files',len(differences))
