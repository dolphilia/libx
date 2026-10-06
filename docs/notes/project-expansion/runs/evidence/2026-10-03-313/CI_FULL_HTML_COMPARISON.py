from pathlib import Path
import re,json,hashlib,datetime
local=Path('/private/tmp/libx-cjson-import-20261003/apps/cjson/dist');ci=Path('/private/tmp/libx-cjson-ci-artifact-312/dist/docs/cjson');ev=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-03-313');style=lambda d:re.search(r'/docs/cjson/assets/(style\.[^"/]+\.css)',(d/'404.html').read_text()).group(1);oldcss=style(local);newcss=style(ci);a=(local/'assets'/oldcss).read_text();b=(ci/'assets'/newcss).read_text();pattern=r'data-astro-cid-[a-z0-9]+';left=re.findall(pattern,a);right=re.findall(pattern,b);assert len(left)==len(right);mapping={}
for l,r in zip(left,right):assert l not in mapping or mapping[l]==r;mapping[l]=r
assert len(set(mapping.values()))==len(mapping)
normalize=lambda t:re.sub(pattern,lambda m:mapping.get(m.group(),m.group()),t).replace('/docs/cjson/assets/'+oldcss,'/docs/cjson/assets/'+newcss)
assert normalize(a)==b,'CSS differences beyond consistent component IDs'
records=[]
for p in sorted(local.rglob('*.html')):
 q=ci/p.relative_to(local);assert q.is_file();a=p.read_text();b=q.read_text();same=normalize(a)==b
 if str(p.relative_to(local)) not in ['v1-7-19/en/index.html','v1-7-19/ja/index.html']:assert same,str(p)
 else:
  lang=p.relative_to(local).parts[1]; urls=re.findall(r'<a href="([^"]+)"[^>]*class="card[^>]+',a);expected=[f'/docs/cjson/v1-7-19/{lang}/'+part for part in ['01-guide/01-usage','02-license/01-license','02-license/02-contributors']];assert urls==expected;assert set(urls)==set(re.findall(r'<a href="([^"]+)"[^>]*class="card[^>]+',b))
 records.append({'path':str(q.relative_to(ci)),'bytes':q.stat().st_size,'sha256':hashlib.sha256(q.read_bytes()).hexdigest(),'rawBytesEqual':p.read_bytes()==q.read_bytes(),'fullHTMLexactAfterExplicitCSSAndScopedComponentIDMapping':same})
assert len(records)==11
assert (ci/'assets/cJSON-LICENSE.txt').read_bytes()==Path('/private/tmp/libx-cjson-import-20261003/docs/notes/document-import/cjson/v1-7-19/source/LICENSE').read_bytes()
m=json.loads(Path('/private/tmp/libx-cjson-ci-artifact-312/manifest.json').read_text());assert m['commit']=='3cf5d9a9498eac80a3d239686f15333f52391394'
for lang in ['en','ja']:assert f'/docs/cjson/v1-7-19/{lang}/01-guide/01-usage' in (ci.parent.parent/lang/'index.html').read_text()
record={'status':'partial-initial-artifact','checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'commit':m['commit'],'manifestFileCount':len(m['files']),'localBuild':'after deterministic index correction','newCommitRemoteCI':'still-required','all11HTMLFullComparison':records,'rawExactHTMLCount':sum(t['rawBytesEqual'] for t in records),'CSSComparison':{'local':oldcss,'CI':newcss,'componentIDMapping':mapping,'mappingBijective':True,'allOtherCSSBytesExact':True},'originalMITAssetExact':True,'ENJALandingCardRoutesPresent':True,'explanation':'初回生HTML比較はscopedCSS識別子と一覧順序差で失敗。cJSON一覧順序を実装修正し再build後、初回CIと現localの9HTML全bytesをCSSファイル名/同一CSSselector一対一対応のみ変換して完全照合。一覧2ページは初回CIにカテゴリ順/card順差があり、local修正後の全3card順を独立検証。新CI全11の再比較が必要。カード/本文/リンク等を比較対象から除かない。修正後commitの新CIは別途必要。'}
(ev/'CI_NEW_PROJECT_PRESERVATION.json').write_text(json.dumps(record,ensure_ascii=False,indent=2)+'\n');print(record['status'],len(m['files']),'files',sum(t['fullHTMLexactAfterExplicitCSSAndScopedComponentIDMapping'] for t in records),'fullHTML exact after scopedCSS mapping; newCI pending')
