"""Generate official English canonical pages from the frozen source-derived conversion packet.
Original RST/code/assets remain locked separately in SOURCE_MANIFEST. This formatter does
not translate, silently repair upstream API text, or mark any content review complete.
"""
from pathlib import Path
import argparse,json,tarfile,hashlib,shutil,re
from bs4 import BeautifulSoup
arg=argparse.ArgumentParser();arg.add_argument('--repository',required=True);arg.add_argument('--workspace',required=True);a=arg.parse_args();root=Path(a.repository).resolve();w=Path(a.workspace).resolve();app=w/'apps/libuv';assert app.is_dir() and json.loads((app/'package.json').read_text())['name']=='apps-libuv'
packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence';archive=ev/'2026-10-05-687/ASTRO_TRIAL_PACKET.tar.gz';manifest=json.loads((ev/'2026-10-05-687/TRIAL_SOURCE_MANIFEST.json').read_text());sha=lambda b:hashlib.sha256(b).hexdigest();assert sha(archive.read_bytes())=='ff273f94cd2809e5180eb443ae02c3d8f59d0c6b69f9f67545423db401802713'
with tarfile.open(archive) as t:
 data={m.name:t.extractfile(m).read() for m in t.getmembers() if m.isfile()}
for r in manifest['files']:assert sha(data[r['path']])==r['sha256'],r['path']
trialPrefix='apps/libuv-trial/';meta=json.loads((ev/'2026-10-05-687/TRIAL_PREPARED.json').read_text());sourceManifest=json.loads((packet/'SOURCE_MANIFEST.json').read_text())
for r in sourceManifest['durableSources']:assert sha((root/r['path']).read_bytes())==r['sha256']
def adapt(s):return s.replace('/docs/libuv-trial','/docs/libuv')
# Only adopt tested app adapters, not the trial app as a new project template.
for rel in ['src/pages/[version]/[lang]/[...slug].astro','src/lib/navigation.ts','src/styles/global.css']:
 p=app/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(adapt(data[trialPrefix+rel].decode()))
(app/'astro.config.mjs').write_text(adapt(data[trialPrefix+'astro.config.mjs'].decode()))
config=json.loads(data[trialPrefix+'src/config/project.config.jsonc']);config['paths']['projectSlug']='libuv';config['versioning']['versions'][0]['name']='1.53.0';config['translations']['en'].update(displayName='libuv Documentation',displayDescription='libuv 1.53.0 official documentation');config['translations']['ja'].update(displayName='libuv ドキュメント',displayDescription='libuv 1.53.0公式文書の日本語訳')
config['licensing']['sources'][0]['licenseUrl']=adapt(config['licensing']['sources'][0]['licenseUrl']);(app/'src/config/project.config.jsonc').write_text(json.dumps(config,ensure_ascii=False,indent=2)+'\n')
# Prepared English only until actual translations exist; never fabricate JA coverage.
for name,b in data.items():
 if name.startswith(trialPrefix+'public/') and not any(x in name for x in ['/sidebar/','/search/']):
  rel=name[len(trialPrefix):];p=app/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(b)
# Include immutable public header for original-declaration discrepancy references.
p=app/'public/source/v1-53-0/include/uv.h';p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes((packet/'sources/include/uv.h').read_bytes())
legacy=app/'src/content/docs/v1'
if legacy.exists():shutil.rmtree(legacy)
rows=[]
for r in meta['rows']:
 rel='src/content/docs/v1-53-0/en/'+r['slug']+'.md';text=data[trialPrefix+rel].decode();head,body=text.split('---\n',2)[1:];body=adapt(body);lines=head.splitlines();ctxline=next(x for x in lines if x.startswith('documentContext: '));ctx=json.loads(ctxline[len('documentContext: '):])
 for note in ctx:
  note['html']=adapt(note['html']).replace('Unpublished Libx conversion trial, translation and full semantic review incomplete.','Formatted for Libx from the fixed source; original wording is preserved.').replace('Playback was verified in the local trial. The full video content has not been reviewed.','The embedded video remains external supplementary material.')
 if r['page']=='misc.html':
  next(n for n in ctx if n['kind']=='editorial')['html']+='<p>Libx editorial note on the fixed source: the original <a href="#c.uv_os_free_group">uv_os_free_group</a> declaration names <code>uv_passwd_t* pwd</code>. The fixed public header instead declares <code>uv_os_free_group(uv_group_t* grp)</code>. See the <a href="/docs/libuv/source/v1-53-0/include/uv.h">fixed original public header</a> (line 1335). The original documentation declaration is preserved; this note identifies the type discrepancy.</p>'
 head=head.replace(ctxline,'documentContext: '+json.dumps(ctx,ensure_ascii=False));text='---\n'+head+'---\n'+body;p=app/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(text);dest=packet/'canonical/en'/(r['slug']+'.md');dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(text)
 soup=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');article=soup.select_one('article.libuv-document');assert article;rows.append({'originalPage':r['page'],'originalRst':('docs/src/'+r['originalSlug']+'.rst' if not r['referenceOnly'] else 'docs/src/index.rst'),'slug':r['slug'],'canonicalFile':str(dest.relative_to(root)),'canonicalSha256':sha(dest.read_bytes()),'appRelativeFile':rel,'bodySha256':sha(body.encode()),'reader':not r['referenceOnly'],'sourceDocumentId':'libuv:'+r['page'],'codes':len(article.select('pre')),'apiDeclarationBlocks':len(article.select('dt.sig')),'tables':len(article.select('table')),'images':len(article.select('img')),'anchors':[e['id'] for e in article.select('[id]')],'translation':'pending','semanticReview':'pending'})
canonical={'fixedSourceCommit':sourceManifest['commit'],'frozenConversionPacket':str(archive.relative_to(root)),'frozenConversionPacketSha256':sha(archive.read_bytes()),'readerPages':42,'indexReferencePages':1,'rows':rows,'canonicalFormat':'frozen verified Sphinx article -> raw HTML in Markdown, normalized local route only; original declarations/code preserved','translationComplete':False,'fullSemanticReviewComplete':False}
(packet/'CONTENT_MAP.json').write_text(json.dumps(canonical,ensure_ascii=False,indent=2)+'\n');print('canonical43 mapped from frozen source-derived packet; Japanese/semantic review pending')
