from pathlib import Path
import json,re,hashlib,subprocess
w=Path('/private/tmp/libx-libuv-astro-trial-683');app=w/'apps/libuv-trial';root=Path('/private/tmp/libx-libuv-screening-676/source/docs/src');out=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-684');meta=json.load(open('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-05-683/TRIAL_PREPARED.json'));groups={}
for fname,group in [('guide.rst','guide'),('api.rst','reference')]:
 text=(root/fname).read_text();names=[];active=False
 for line in text.splitlines():
  if line.startswith('.. toctree::'):active=True;continue
  if active:
   if line and not line.startswith(' '):break
   s=line.strip()
   if s and not s.startswith(':'):names.append(s)
 groups[group]=[x.removeprefix('guide/') for x in names]
reference=['overview','design','api']+groups['reference']+['guide','upgrading','migration_010_100','genindex'];assert len(reference)==34 and len(set(reference))==34;groups['reference']=reference
changes=[]
for r in meta['rows']:
 p=Path(r['file']);original=p.read_text();group,name=r['slug'].split('/');order=groups[group].index(name)+1;updated=re.sub(r'^order: \d+$','order: '+str(order),original,flags=re.M);p.write_text(updated);changes.append({'page':r['page'],'slug':r['slug'],'order':order,'beforeSha256':hashlib.sha256(original.encode()).hexdigest(),'afterSha256':hashlib.sha256(updated.encode()).hexdigest()})
p=app/'src/pages/[version]/[lang]/[...slug].astro';s=p.read_text();start=s.index('  try {',s.index('if (groupCatalog)'));end=s.index('\n}\n\n// 手動設定',start);old=s[start:end];new='''  const section = entry.slug.split('/')[2];
  const ordered = (await getCollection('docs')).filter((item) =>
    item.slug.startsWith(`${version}/${lang}/${section}/`)
  ).sort((a, b) => (a.data.order ?? 999) - (b.data.order ?? 999));
  const currentIndex = ordered.findIndex((item) => item.slug === entry.slug);
  const makePageLink = (item: CollectionEntry<'docs'>) => ({
    title: item.data.title,
    url: `${projectConfig.paths.baseUrl.replace(/\\/$/, '')}/${item.slug}`,
  });
  autoPagination = {
    ...(currentIndex > 0 ? {prev: makePageLink(ordered[currentIndex - 1])} : {}),
    ...(currentIndex >= 0 && currentIndex + 1 < ordered.length
      ? {next: makePageLink(ordered[currentIndex + 1])} : {}),
  };''';p.write_text(s[:start]+new+s[end:]);(out/'ORIGINAL_ORDER_MAP.json').write_text(json.dumps({'groups':groups,'method':'Guide exact original toctree9. Reference original root introduction/design/API then exact API27 toctree, guide/upgrading/migration and generated index reference. App-only pagination uses frontmatter order; shared packages/root app not modified.','changes':changes,'pageRouteOldBlock':old,'pageRouteNewBlock':new},indent=2)+'\n')
r=subprocess.run(['node',str(w/'packages/project-config/src/prepare-app.js'),'--projects=libuv-trial'],cwd=app,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,timeout=60);(out/'PREBUILD.log').write_bytes(r.stdout);assert r.returncode==0
r=subprocess.run(['pnpm','exec','astro','build'],cwd=app,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,timeout=120);(out/'ASTRO_BUILD.log').write_bytes(r.stdout);(out/'BUILD_RESULT.json').write_text(json.dumps({'exitCode':r.returncode,'cwd':str(app),'paginationErrors':r.stdout.decode().count('Error generating pagination'),'sourceBodyChanged':False},indent=2)+'\n');print('orderbuild',r.returncode)
