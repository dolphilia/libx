import json, hashlib, datetime, re
from pathlib import Path
r=Path('/Users/dolphilia/github/libx'); ev=r/'docs/notes/project-expansion/runs/evidence/2026-10-04-641'; read=lambda p:json.loads((r/p).read_text()); sha=lambda p:hashlib.sha256((r/p).read_bytes()).hexdigest(); ref=lambda p:dict(path=p,sha256=sha(p)); record=lambda p:dict(**ref(p),coverage=[[1,len((r/p).read_text().rstrip('\n').split('\n'))]])
agg=read('docs/notes/project-expansion/runs/evidence/2026-10-04-637/FINAL_BODY_REVIEW_MANIFEST.json');items={};evidence={}
for rr in agg['reviewInputs']:
 assert sha(rr['path'])==rr['sha256'];x=read(rr['path'])
 for p in x.get('pages',[]):items[p['name']]=p;evidence[p['name']]=rr
 if x.get('page'):
  assert x['status']=='passed-final-whole-joined-page-content-review' and len(x['coverage'])==x['reviewedLeaves']==619
  a=x['artifacts'];name=x['page'];items[name]=dict(name=name,source=next(z for z in a if z['path'].endswith('.source.json')),translation=next(z for z in a if z['path'].endswith('.ja.json')),enCanonical=next(z for z in a if '/canonical/markdown/' in z['path']),jaCanonical=next(z for z in a if '/ja-canonical-' in z['path']),coverage=x['coverage'],model=agg['model'],reviewedAt=x['at'],meaningVerdict='passed-full-page');evidence[name]=rr
assert len(items)==16;pages=[];keys=[]
for name in agg['pages']:
 p=items[name]
 for role in ['source','translation','enCanonical','jaCanonical']:assert sha(p[role]['path'])==p[role]['sha256']
 assert p['meaningVerdict']=='passed-full-page';keys.extend(p['coverage'])
 pages.append(dict(id='01-guide/'+name+'.md',status='passed',method='ai-content-review',model=p['model'],reviewedAt=p['reviewedAt'],separateReviewPass=True,source=record(p['source']['path']),canonical=record(p['enCanonical']['path']),translation=record(p['jaCanonical']['path']),findings=[{'status':'passed','detail':'既存の別工程で全fieldの原文照合・日本語単独読みを完了。全意味単位の確認範囲を生成物へ対応付け、HTML・コード・共通通知の保存一致は別機械証拠で照合。行coverageは対応範囲であり、今回の再読や独立agentレビューを意味しない。','evidence':[evidence[name],ref('docs/notes/project-expansion/runs/evidence/2026-10-04-640/JA_RENDERED_CHECK.json'),ref('docs/notes/project-expansion/runs/evidence/2026-10-04-641/REGENERATION.json')]}],fieldCoverage=p['coverage'],rawTranslation=p['translation']))
assert len(keys)==1135 and len({x['sourceKey'] for x in keys})==1135
assert {x['sourceKey']:(x['sourceSha256'],x['translatedSha256'],x['read']) for x in keys}=={x['sourceKey']:(x['sourceSha256'],x['translatedSha256'],x['read']) for x in agg['coverage']}
assert sha(agg['legalReview']['path'])==agg['legalReview']['sha256'];legal=read(agg['legalReview']['path'])
for p in legal['pages']:
 for role in ['source','enCanonical','jaCanonical']:assert sha(p[role]['path'])==p[role]['sha256']
 pages.append(dict(id='02-license/'+p['page']+'.md',status='passed',method='ai-content-review',model=agg['model'],reviewedAt=legal['at'],separateReviewPass=True,source=record(p['source']['path']),canonical=record(p['enCanonical']['path']),translation=record(p['jaCanonical']['path']),findings=[{'status':'passed-original-English','detail':p['method'],'evidence':[agg['legalReview']]}]))
q=next(x for x in read('docs/notes/project-expansion/OPERATIONS.json')['operations'] if x['candidateId']=='jq' and x['kind']=='new');assert {p['id'] for p in pages}==set(q['scope']['pages'])
for p in pages:
 for role,lang in [('canonical','en'),('translation','ja')]:
  path=Path('/private/tmp/libx-jq-astro-trial-592/apps/jq/src/content/docs/v1-8-2')/lang/p['id'];assert hashlib.sha256(path.read_bytes()).hexdigest()==p[role]['sha256']
with (ev/'CONTENT_REVIEW.json').open('x') as f:f.write(json.dumps(dict(schemaVersion=1,scope=q['scope']['pages'],completedPages=18,unreviewedPages=0,pages=pages,assembledAt=datetime.datetime.now(datetime.timezone.utc).isoformat(),reviewStages=agg['reviewInputs'],runtimeModelNotExposed=True,releaseReady=False,pending=['clean latest integration/publication']),ensure_ascii=False,indent=2)+'\n')
fields=read('docs/notes/document-import/jq/1.8.2/HTML_BLOCK_FIELDS.json');count=sum(len(re.findall(r'<(?:img|figure|table)\b',x['html'])) for x in fields['fields'])
with (ev/'CONTENT_BINDING.json').open('x') as f:f.write(json.dumps(dict(status='passed',bodyPages=16,originalNoticePages=2,sourceLeaves=1135,allReviewHashesValid=True,fullAppEnJaBytesMatchReview=True,visualImageFigureTableTags=count,reviewIsPriorStageNotNewReview=True),indent=2)+'\n')
print({'formalReviewPages':18,'sourceLeaves':1135,'visualImageFigureTableTags':count})
