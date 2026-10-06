from pathlib import Path
import json,hashlib,tarfile,subprocess
root=Path('/Users/dolphilia/github/libx');ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-690';packet=root/'docs/notes/document-import/libuv/1.53.0';app=Path('/private/tmp/libx-libuv-formal-689/apps/libuv');m=json.loads((packet/'CONTENT_MAP.json').read_text());sha=lambda b:hashlib.sha256(b).hexdigest()
with tarfile.open(root/m['frozenConversionPacket']) as t: frozen={p.name:t.extractfile(p).read() for p in t.getmembers() if p.isfile()}
rows=[]
for r in m['rows']:
 assert (packet/'sources'/r['originalRst']).is_file(),r
 b=(root/r['canonicalFile']).read_bytes();assert b==(app/r['appRelativeFile']).read_bytes();assert sha(b)==r['canonicalSha256'];body=b.decode().split('---\n',2)[2];old=frozen['apps/libuv-trial/'+r['appRelativeFile']].decode().split('---\n',2)[2];assert body==old.replace('/docs/libuv-trial','/docs/libuv');assert 'Unpublished Libx' not in b.decode();assert 'Playback was verified' not in b.decode();rows.append({'page':r['originalPage'],'exactBodyAfterRouteRename':True,'originalRstExists':True})
def snapshot():
 paths=[packet/'CONTENT_MAP.json',*sorted((packet/'canonical').rglob('*.md')),*[app/p for p in ['astro.config.mjs','src/config/project.config.jsonc','src/lib/navigation.ts','src/styles/global.css','src/pages/[version]/[lang]/[...slug].astro']]]
 return {str(p):sha(p.read_bytes()) for p in paths}
a=snapshot();run=subprocess.run(['/private/tmp/libx-libuv-screening-676/venv/bin/python',str(packet/'generate-canonical.py'),'--repository',str(root),'--workspace',str(app.parent.parent)],capture_output=True,text=True);assert run.returncode==0,run.stderr;b=snapshot();assert a==b
config=json.loads((app/'src/config/project.config.jsonc').read_text());assert config['language']['supported']==['en'];assert len(rows)==43
result={'pages':43,'rows':rows,'repeatedGenerationIdentical':True,'comparedFiles':len(a),'codes':sum(r['codes'] for r in m['rows']),'declarationBlocks':sum(r['apiDeclarationBlocks'] for r in m['rows']),'generationExitCode':run.returncode,'supportedLanguages':['en'],'translationComplete':False,'fullSemanticReviewComplete':False,'limitations':['Frozen verified Sphinx conversion is a required pinned formatter input. RST/source kit is separately locked.','Semantic-section translation/review boundaries and full coverage remain pending.'],'outputHashes':a}
(ev/'CANONICAL_VERIFICATION.json').write_text(json.dumps(result,indent=2)+'\n');print('43 original mappings/body exact; deterministic regeneration',len(a),'files; code',result['codes'])
