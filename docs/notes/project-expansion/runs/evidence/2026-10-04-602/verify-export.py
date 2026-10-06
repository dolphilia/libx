from pathlib import Path
import json,hashlib,subprocess,shutil
r=Path('/Users/dolphilia/github/libx');p=r/'docs/notes/document-import/jq/1.8.2';a=Path('/private/tmp/libx-jq-formal-export-602-a');b=Path('/private/tmp/libx-jq-formal-export-602-b');trial=Path('/private/tmp/libx-jq-astro-trial-592/apps/jq/src/content/docs/v1-8-2/en')
def hashes(path):return {str(x.relative_to(path)):hashlib.sha256(x.read_bytes()).hexdigest() for x in path.rglob('*') if x.is_file()}
ha=hashes(a);assert ha==hashes(b)
comparisons=[]
for x in sorted((a/'markdown').glob('*.md')):
 old=trial/'01-guide'/x.name;assert x.read_bytes()==old.read_bytes(),x.name;comparisons.append({'page':x.name,'sha256':hashlib.sha256(x.read_bytes()).hexdigest(),'trialBytesExact':True})
for x in sorted((a/'licenses').glob('*.md')):
 old=trial/'02-license'/x.name
 # License text must be exact even if serialization of the nonlegal title differs.
 txt=x.read_text().split('```text\n',1)[1].rsplit('```',1)[0];prior=old.read_text().split('```text\n',1)[1].rsplit('```',1)[0];assert txt==prior,x.name
same=subprocess.run(['python3',str(r/'scripts/document-import/jq/import.py'),'--packet',str(p),'--output',str(a)],capture_output=True,text=True);assert same.returncode!=0;assert hashes(a)==ha
bad=Path('/private/tmp/libx-jq-invalid-packet-602');shutil.copytree(p,bad);(bad/'PARSED_MANUAL.json').write_text('{}\n');invalid=Path('/private/tmp/libx-jq-invalid-output-602');err=subprocess.run(['python3',str(r/'scripts/document-import/jq/import.py'),'--packet',str(bad),'--output',str(invalid)],capture_output=True,text=True);assert err.returncode!=0;assert not invalid.exists()
ev=r/'docs/notes/project-expansion/runs/evidence/2026-10-04-602';ev.mkdir();shutil.copyfile('/private/tmp/jq-make-importer-602.py',ev/'make-importer.py');shutil.copyfile('/private/tmp/jq-verify-export-602.py',ev/'verify-export.py')
proof={'twoRunsAllFilesExact':True,'generatedFiles':len(ha),'manualPages':comparisons,'fullNoticesTextExact':True,'sourceStringLeaves':1135,'renderedFields':301,'orderedExamples':250,'existingOutputRefused':{'exitCode':same.returncode,'message':same.stderr.strip(),'bytesUnchanged':True},'changedPacketRefused':{'exitCode':err.returncode,'message':err.stderr.strip(),'outputNotCreated':True},'limitations':['EN canonical export only. Japanese rendering not connected.','No new Astro build/UI verification; exact page bytes join to prior593/594 trial is evidence of EN preservation, not current formal verification.','HTML reference is durable fixed upstream-generated input with 301 original source hashes; exporter does not rerun upstream Markdown.','Full canonical-ready gate pending formal app integration and content checker.']}
(ev/'EXPORT_VERIFICATION.json').write_text(json.dumps(proof,ensure_ascii=False,indent=2)+'\n');shutil.copytree(a,p/'canonical');print({k:v for k,v in proof.items() if k not in ['manualPages','limitations']})
