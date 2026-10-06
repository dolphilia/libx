from pathlib import Path
import re,json,hashlib,datetime
local=Path('/private/tmp/libx-cjson-import-20261003/apps/cjson/dist');ci=Path('/private/tmp/libx-cjson-production-artifact-323/dist/docs/cjson');ev=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-03-323');style=lambda d:re.search(r'/docs/cjson/assets/(style\.[^"/]+\.css)',(d/'404.html').read_text()).group(1);oldcss=style(local);newcss=style(ci);a=(local/'assets'/oldcss).read_text();b=(ci/'assets'/newcss).read_text();pattern=r'data-astro-cid-[a-z0-9]+';left=re.findall(pattern,a);right=re.findall(pattern,b);assert len(left)==len(right);mapping={}
for l,r in zip(left,right):assert l not in mapping or mapping[l]==r;mapping[l]=r
assert len(set(mapping.values()))==len(mapping)
normalize=lambda t:re.sub(pattern,lambda m:mapping.get(m.group(),m.group()),t).replace('/docs/cjson/assets/'+oldcss,'/docs/cjson/assets/'+newcss)
assert normalize(a)==b,'CSS differences beyond consistent component IDs'
records=[]
for p in sorted(local.rglob('*.html')):
 q=ci/p.relative_to(local);assert q.is_file();a=p.read_text();b=q.read_text();same=normalize(a)==b
 assert same,str(p)
 if str(p.relative_to(local)) in ['v1-7-19/en/index.html','v1-7-19/ja/index.html']:
  lang=p.relative_to(local).parts[1];urls=re.findall(r'<a href="([^"]+)"[^>]*class="card[^>]+',b);expected=[f'/docs/cjson/v1-7-19/{lang}/'+part for part in ['01-guide/01-usage','02-license/01-license','02-license/02-contributors']];assert urls==expected
 records.append({'path':str(q.relative_to(ci)),'bytes':q.stat().st_size,'sha256':hashlib.sha256(q.read_bytes()).hexdigest(),'rawBytesEqual':p.read_bytes()==q.read_bytes(),'fullHTMLexactAfterExplicitCSSAndScopedComponentIDMapping':same})
assert len(records)==11
assert (ci/'assets/cJSON-LICENSE.txt').read_bytes()==Path('/private/tmp/libx-cjson-import-20261003/docs/notes/document-import/cjson/v1-7-19/source/LICENSE').read_bytes()
m=json.loads(Path('/private/tmp/libx-cjson-production-artifact-323/manifest.json').read_text());assert m['commit']=='adbe8b8d8698a406734a5e7466ae1e589a5190d4'
for lang in ['en','ja']:assert f'/docs/cjson/v1-7-19/{lang}/01-guide/01-usage' in (ci.parent.parent/lang/'index.html').read_text()
record={'status':'passed','checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'commit':m['commit'],'manifestFileCount':len(m['files']),'localBuild':'after deterministic index correction','newCommitRemoteCI':'same-commit artifact checked','all11HTMLFullComparison':records,'rawExactHTMLCount':sum(t['rawBytesEqual'] for t in records),'CSSComparison':{'local':oldcss,'CI':newcss,'componentIDMapping':mapping,'mappingBijective':True,'allOtherCSSBytesExact':True},'originalMITAssetExact':True,'ENJALandingCardRoutesPresent':True,'explanation':'修正後localと同commit CIの11HTML全bytesを、対応stylesheet名と全CSS/HTMLで一対一整合するscopedcomponent識別子だけ置換して完全照合。カード/カテゴリ順、本文/出典/リンク/コード等は除外・順序正規化しない。英日indexは全3カードをGuide→License→Contributors順で検査。'}
(ev/'CI_NEW_PROJECT_PRESERVATION.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n');print(record['status'],len(m['files']),'files',sum(t['fullHTMLexactAfterExplicitCSSAndScopedComponentIDMapping'] for t in records),'fullHTML exact after scopedCSS mapping; same-commit CI verified')
