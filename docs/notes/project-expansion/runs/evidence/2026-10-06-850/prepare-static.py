from pathlib import Path
import json,re,hashlib,shutil,datetime,subprocess
R=Path('/Users/dolphilia/github/libx');E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-850';W=Path('/private/tmp/libx-rapidjson-static-850');A=W/'apps/rapidjson-static-trial';O=Path('/private/tmp/libx-rapidjson-astro-trial-671/apps/rapidjson-trial');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert len(list((O/'src/content/docs/v1-1-0/en/01-docs').glob('*.md')))==217
shutil.rmtree(A/'src/content/docs');(A/'src/content/docs/v1-1-0/en/01-docs').mkdir(parents=True)
for sub in ['assets','notices','upstream']:shutil.copytree(O/'public'/sub,A/'public'/sub)
rows=[]
for p in sorted((O/'src/content/docs/v1-1-0/en/01-docs').glob('*.md')):
 text=p.read_text();front,body=text.split('---\n',2)[1:];context=json.loads(re.search(r'^documentContext: (.*)$',front,re.M)[1]);before=sha(p)
 for c in context:
  c['html']=c['html'].replace('/docs/rapidjson-trial/','/docs/rapidjson-static-trial/')
  if c['kind']=='editorial':
   c['html']=re.sub(r'<p>Libxの運用方針に基づき、生成された原文のツールチップ情報[\s\S]*?</p>','<p>Static Libx trial: original source definitions, signatures and descriptions are shown as ordinary reference blocks after the source listing. Code and reference links retain their targets. Dynamic tooltips are not required; use the linked original/API documentation for further details. This trial has no Japanese translation or full semantic review.</p>',c['html'],count=1)
 front=re.sub(r'^documentContext: .*$',lambda m:'documentContext: '+json.dumps(context,ensure_ascii=False),front,flags=re.M).replace('/docs/rapidjson-trial/','/docs/rapidjson-static-trial/')
 converted=body.replace('/docs/rapidjson-trial/','/docs/rapidjson-static-trial/');assert converted.replace('/docs/rapidjson-static-trial/','/docs/rapidjson-trial/')==body
 q=A/'src/content/docs/v1-1-0/en/01-docs'/p.name;q.write_text('---\n'+front+'---\n'+converted);rows.append({'id':'01-docs/'+p.name,'sourceSHA256':before,'staticSHA256':sha(q),'bodyOnlyRoutePrefixChanged':True,'sourceListing':p.name.endswith('_source.md')})
config=json.loads((O/'src/config/project.config.jsonc').read_text());config['paths']['projectSlug']='rapidjson-static-trial';config['translations']['en']['displayName']='RapidJSON static trial';config['translations']['en']['displayDescription']='Unpublished fixed RapidJSON 1.1.0 static trial; no translation or full semantic review';(A/'src/config/project.config.jsonc').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n')
# Original tooltip data remains present; expose it statically instead of hiding it.
css="""@import '@docs/theme/css/starlight-overrides.css';
.rapidjson-document .fragment{overflow-x:auto;font-family:monospace;}
.rapidjson-document .fragment .line{white-space:pre;}
.rapidjson-document table{display:block;max-width:100%;overflow-x:auto;}
.rapidjson-document td table{display:table;}
.rapidjson-document .memproto{max-width:100%;overflow-x:auto;}
.rapidjson-document .ttc{display:block;padding:.5rem 0;border-top:1px solid var(--sl-color-hairline);overflow-wrap:anywhere;}
.rapidjson-document .ttname{font-weight:600;}
.rapidjson-document .ttdeci,.rapidjson-document .ttdef{font-family:monospace;}
""";(A/'src/styles/global.css').write_text(css)
out={'status':'prepared-unpublished','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(W),'baseCommit':subprocess.check_output(['git','rev-parse','HEAD'],cwd=W,text=True).strip(),'sourceWorkspace':str(O),'pages':rows,'totalPages':217,'readerPages':184,'sourceReferences':33,'copiedPublicMaterials':[{'path':str(p.relative_to(A/'public')),'sha256':sha(p)}for sub in ['assets','notices','upstream']for p in sorted((A/'public'/sub).rglob('*'))if p.is_file()],'staticMethod':'Fixed217 body unchanged except route prefix. Existing tooltip definition records displayed as static source reference blocks. Original code, diagrams, notices and external badge URLs retained. No app-owned tooltip runtime or upstream JS/font copied; canonical template layout used.','candidateSelection':False,'translation':False,'fullContentReview':False,'externalPublication':False};(E/'STATIC_PREPARATION.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print('217 static bodies prepared; no selection/translation/full review claimed')
