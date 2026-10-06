from pathlib import Path
import json,hashlib,tarfile,re
from bs4 import BeautifulSoup
root=Path('/Users/dolphilia/github/libx');out=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-688';source=Path('/private/tmp/libx-libuv-screening-676/source');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();d=json.loads((root/'docs/notes/project-expansion/CANDIDATES.json').read_text());assert d['revision']==166;c=next(x for x in d['candidates'] if x['id']=='libuv');refs={v['path']:v['sha256'] for part in [*c['conditions'].values(),*c['scores'].values(),c['japaneseResearch']] for v in part['evidence']};assert all(sha(root/p)==h for p,h in refs.items());archive=root/'docs/notes/project-expansion/research/2026-10-01/libuv-source.tar.gz';assert sha(archive)=='768e567dcabb9a55cb88b552b3e93c723aeca1ea6d8bb9fd8ff573c2623feac3'
archiveRows=[]
with tarfile.open(archive) as t:
 for member in t.getmembers():
  if not member.isfile():continue
  rel='/'.join(member.name.split('/')[1:]);b=t.extractfile(member).read();assert (source/rel).read_bytes()==b,rel;archiveRows.append({'path':rel,'sha256':hashlib.sha256(b).hexdigest()})
assert len(archiveRows)==483;assert 'The documentation is licensed under the CC BY 4.0' in (source/'README.md').read_text();assert 'Attribution 4.0 International' in (source/'LICENSE-docs').read_text()
manifest=json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-05-687/TRIAL_SOURCE_MANIFEST.json').read_text());w=Path(manifest['workspace']);assert all(sha(w/r['path'])==r['sha256'] for r in manifest['files']);meta=json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-05-687/TRIAL_PREPARED.json').read_text());rst={p.relative_to(source/'docs/src').with_suffix('.html').as_posix() for p in (source/'docs/src').rglob('*.rst')};assert len(rst)==42;assert rst=={r['page'] for r in meta['rows'] if not r['referenceOnly']};app=Path(meta['app']);assert len(list((app/'dist').rglob('*.html')))==47
for n in ['LICENSE','LICENSE-docs','LICENSE-extra']:assert (app/'public/notices'/(n+'.txt')).read_bytes()==(source/n).read_bytes()
for n in ['architecture.png','loop_iteration.png']:assert (app/'public/assets/v1-53-0'/n).read_bytes()==(source/'docs/src/static'/n).read_bytes()
# Read original primary paragraphs and preserve probes independently of prior recommendation.
probes={
 'guide-introduction':(source/'docs/src/guide/introduction.rst').read_text(),
 'guide-warning':(source/'docs/src/guide.rst').read_text(),
 'design-lifecycle':(source/'docs/src/design.rst').read_text(),
 'request-cancel':(source/'docs/src/request.rst').read_text(),
 'loop-mode':(source/'docs/src/loop.rst').read_text(),
 'header-group-api':'\n'.join((source/'include/uv.h').read_text().splitlines()[1326:1338]),
 'misc-group-api':'\n'.join((source/'docs/src/misc.rst').read_text().splitlines()[614:637])}
(out/'PRIMARY_PROBES.json').write_text(json.dumps(probes,ensure_ascii=False,indent=2)+'\n')
assert 'req->result field set to `UV_ECANCELED`' in probes['request-cancel'];assert 'UV_RUN_ONCE: Poll for i/o once' in probes['loop-mode'];assert 'void uv_os_free_group(uv_group_t* grp)' in probes['header-group-api'];assert 'void uv_os_free_group(uv_passwd_t* pwd)' in probes['misc-group-api']
rows=[]
for r in meta['rows']:
 p=app/'dist/v1-53-0/en'/r['slug']/'index.html';s=BeautifulSoup(p.read_text(),'html.parser');b=s.select_one('article.libuv-document');footer=s.select_one('.document-provenance');assert b and footer and not b.select('[data-context-kind]');rows.append({'page':r['page'],'codeBlocks':len(b.select('div.highlight pre')),'sourceFooter':len(footer.select('[data-context-kind=source]'))})
assert sum(r['codeBlocks'] for r in rows)==151;assert all(r['sourceFooter']==1 for r in rows)
(out/'PRIMARY_AUDIT.json').write_text(json.dumps({'candidateRevision':166,'evidenceArtifactsHashMatched':len(refs),'archiveSha256':sha(archive),'allOriginalRegularFilesMatched':len(archiveRows),'original42ReaderScopeExact':True,'currentTrialSourceFilesMatched':len(manifest['files']),'originalNoticesExact':3,'originalPNGExact':2,'all43SourceFooters':True,'codeBlocks':151,'notes':'Hash/structural probes plus separate primary-reading assessment; not full semantic review.','newFinding':{'id':'uv-os-free-group-type','source':'docs/src/misc.rst:626 vs include/uv.h:1335','docType':'uv_passwd_t* pwd','headerType':'uv_group_t* grp','action':'原文を改訂せず、固定headerと差のLibx footer注記を正式canonical工程で追加し全文レビューで照合。'},'rows':rows},ensure_ascii=False,indent=2)+'\n');print('artifacts',len(refs),'archive483 source537 docs42/footer43/code151; additional primary discrepancy confirmed')
