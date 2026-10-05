from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,re,math
out=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-687');old=Path('docs/notes/project-expansion/runs/evidence/2026-10-05-684');m=json.loads((old/'TRIAL_SOURCE_MANIFEST.json').read_text());w=Path(m['workspace']);assert all(hashlib.sha256((w/x['path']).read_bytes()).hexdigest()==x['sha256'] for x in m['files']);meta=json.loads((old/'TRIAL_PREPARED.json').read_text());counts=json.loads(Path('docs/notes/project-expansion/runs/evidence/2026-10-05-685/NARRATIVE_WORD_COUNT.json').read_text());codeCounts=json.loads(Path('docs/notes/project-expansion/runs/evidence/2026-10-05-685/WORKLOAD_MEASUREMENT.json').read_text());cm={r['page']:r for r in codeCounts['rows']};rows=[]
for r in counts['rows']:
 n=r['wordsWithoutPreOrApiSignatures'];c=cm[r['page']];rows.append({'page':r['page'],'words':n,'plannedMaxPartWords':1600,'minimumParts':max(1,math.ceil(n/1600)),'codeBlocks':c['codeBlocks'],'codeLines':c['codeLines']})
(out/'WORKSET_PART_ESTIMATE.json').write_text(json.dumps({'basis':'page word counts excluding literal code and API declarations; semantic section boundaries must be assigned before formal translation. Ceiling is a lower bound and not a completed content map.','maxPartWords':1600,'readerPages':42,'estimatedMinimumParts':sum(r['minimumParts'] for r in rows),'rows':rows},ensure_ascii=False,indent=2)+'\n')
changes=[];base='/docs/libuv-trial/v1-53-0/en/reference/'
notes={
 'guide/threads':'<p>Libx editorial note on the fixed source: the original cancellation paragraph names <code>uv_fs_t.errorno</code>. In the fixed 1.53.0 public structure this member is absent; the <a href="'+base+'fs/#c.uv_fs_t.result">filesystem request result</a> carries a negative error code. See also <a href="'+base+'misc/#c.uv_cancel">uv_cancel</a>. The original guide text is preserved; this note identifies a version discrepancy rather than changing the original.</p>',
 'guide/processes':'<p>Libx editorial note on the fixed source: the original Signals note describes <code>UV_RUN_ONCE</code> and <code>UV_RUN_NOWAIT</code> as processing one event. The fixed <a href="'+base+'loop/#c.uv_run">uv_run API</a> instead describes polling I/O once. Treat the guide wording as one loop pass, not a guarantee of exactly one callback. The original wording is preserved.</p>'}
for r in meta['rows']:
 p=Path(r['file']);text=p.read_text();head,body=text.split('---\n',2)[1:];contextLine=next(x for x in head.splitlines() if x.startswith('documentContext: '));ctx=json.loads(contextLine[len('documentContext: '):]);changed=False
 if r['slug'] in notes:
  next(c for c in ctx if c['kind']=='editorial')['html']+=notes[r['slug']];changed=True
 if r['slug']=='guide/basics':
  e=next(c for c in ctx if c['kind']=='editorial');assert 'Playback not yet verified in this trial.' in e['html'];e['html']=e['html'].replace('Playback not yet verified in this trial.','Playback was verified in the local trial. The full video content has not been reviewed.');changed=True
 if changed:
  updated=text.replace(contextLine,'documentContext: '+json.dumps(ctx),1);assert updated.split('---\n',2)[2]==body;p.write_text(updated);changes.append({'page':r['page'],'oldSha256':hashlib.sha256(text.encode()).hexdigest(),'newSha256':hashlib.sha256(updated.encode()).hexdigest(),'bodyUnchanged':True,'context':ctx})
 r['fileSha256']=hashlib.sha256(p.read_bytes()).hexdigest();r['bodySha256']=hashlib.sha256(p.read_text().split('---\n',2)[2].encode()).hexdigest()
(out/'TRIAL_PREPARED.json').write_text(json.dumps(meta,indent=2)+'\n');(out/'FOOTER_NOTE_ADAPTATION.json').write_text(json.dumps({'inputHashesMatched':len(m['files']),'changes':changes,'published':False,'fullContentReview':False},ensure_ascii=False,indent=2)+'\n');print('parts',sum(r['minimumParts'] for r in rows),'footerChanges',len(changes))
