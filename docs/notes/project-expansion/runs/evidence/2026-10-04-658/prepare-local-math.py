from pathlib import Path,PurePosixPath
import json,tarfile,hashlib,shutil,re
E=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-04-658'); P=E.parent/'2026-10-04-657'; W=Path('/private/tmp/libx-mdbook-astro-trial-655'); A=W/'apps/mdbook-trial'
sha=lambda b:hashlib.sha256(b).hexdigest()
proposal=json.loads((P/'MATHJAX_RUNTIME_PROPOSAL.json').read_text()); expected={x['path']:x for x in proposal['files']}; arc=next(P.glob('mathjax-*.tar.gz')); assert sha(arc.read_bytes())=='0234aab3536a3e35eee246a1a7794ba78edab9fe0fb3ee6dfd46d82bd0edb0db'
D=A/'public/mdbook-runtime/mathjax'; D.mkdir(); output=[]
with tarfile.open(arc) as t:
 for m in t.getmembers():
  if not m.isfile():continue
  rel=m.name.split('/',1)[1]; row=expected[rel]; b=t.extractfile(m).read(); assert sha(b)==row['sha256']
  if row['runtimeProposal']!='include':continue
  assert not PurePosixPath(rel).is_absolute() and '..' not in PurePosixPath(rel).parts
  p=D/rel; p.parent.mkdir(parents=True,exist_ok=True); p.write_bytes(b); output.append({'path':'mdbook-runtime/mathjax/'+rel,'sha256':sha(b),'bytes':len(b)})
assert len(output)==2061
shutil.copyfile(E/'LPPL-1.3c.txt',D/'LPPL-1.3c.txt')
# All non-TeX font families are distributed in their complete original subtree, unchanged.
fontChecks=[]
for fam in ['Asana-Math','Gyre-Pagella','Gyre-Termes','Latin-Modern','Neo-Euler','STIX-Web']:
 rows=[r for r in proposal['files'] if r['path'].startswith('fonts/HTML-CSS/'+fam+'/')]; assert all(r['runtimeProposal']=='include' for r in rows);fontChecks.append({'family':fam,'completeUnmodifiedFiles':len(rows)})
licenseNote='''MathJax 2.7.1, upstream commit d71cc40666d213dceeb9353822a3b530656d9a4b.
Original code: Apache-2.0; see LICENSE and file headers.
Font families retain separate original notices in fonts/HTML-CSS:
Asana-Math, Neo-Euler, STIX-Web: SIL Open Font License notices.
Gyre-Pagella, Gyre-Termes, Latin-Modern: GUST Font License, LPPL1.3c; original GUST text and MANIFEST files retained; see LPPL-1.3c.txt.
All six separate-licence font subtrees are included complete and byte-identical to the fixed upstream archive. Font names and resources are not modified by Libx.
Libx runtime packaging changes: local loader URL instead of external CDN; omit unpacked source mirror, documentation, tests and TeX legacy PNG fallback assets from HTTP runtime. Original JavaScript/configuration/vector/webfonts are unchanged. Full source archive is provided separately, including omitted files. No upstream endorsement or additional support is implied.
Full original component: ../../downloads/mathjax-2.7.1-d71cc406.tar.gz
SHA-256: 0234aab3536a3e35eee246a1a7794ba78edab9fe0fb3ee6dfd46d82bd0edb0db
Legacy PNG fallback behavior and external resource closure require validation before production adoption.
'''
(D/'LIBX-NOTICES.txt').write_text(licenseNote)
DL=A/'public/downloads'; DL.mkdir(exist_ok=True); shutil.copyfile(arc,DL/'mathjax-2.7.1-d71cc406.tar.gz')
rt=A/'src/components/MdBookRuntime.astro'; before=rt.read_bytes(); old='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML'; new='/docs/mdbook-trial/mdbook-runtime/mathjax/MathJax.js?config=TeX-AMS-MML_HTMLorMML'; assert old in before.decode(); rt.write_text(before.decode().replace(old,new).replace('Original renderer uses this exact external MathJax version; not a locally fixed binary.','Libx serves the exact original MathJax version from fixed local inputs; see component notices.'))
prep=json.loads((E.parent/'2026-10-04-656/TRIAL_PREPARED_v3.json').read_text())
oldnote='Math equations use the original external MathJax 2.7.1 runtime (Apache-2.0; <a href=\\"/docs/mdbook-trial/mdbook-runtime/notices/MATHJAX_LICENSE.txt\\">notice</a>). This external runtime is versioned but not part of the fixed local source snapshot.'
newnote='Math equations use locally served MathJax 2.7.1, fixed at commit d71cc40666d213dceeb9353822a3b530656d9a4b. Code: Apache-2.0; bundled font families retain their separate OFL/GUST/LPPL notices. <a href=\\"/docs/mdbook-trial/mdbook-runtime/mathjax/LIBX-NOTICES.txt\\">Component notices and packaging changes</a> · <a href=\\"/docs/mdbook-trial/mdbook-runtime/mathjax/LPPL-1.3c.txt\\">LPPL 1.3c</a> · <a href=\\"/docs/mdbook-trial/downloads/mathjax-2.7.1-d71cc406.tar.gz\\">Full original MathJax source archive</a>. Runtime selection excludes legacy PNG fallback assets; compatibility verification remains pending in this unpublished trial.'
changes=[]
for p in prep['pages']:
 f=W/p['file']; b=f.read_bytes(); assert sha(b)==p['sha256']; s=b.decode(); assert oldnote in s; f.write_text(s.replace(oldnote,newnote)); p['sha256']=sha(f.read_bytes());changes.append({'file':p['file'],'before':sha(b),'after':p['sha256']})
(E/'TRIAL_PREPARED.json').write_text(json.dumps(prep,indent=2)+'\n')
(E/'LOCAL_MATH_PREPARED.json').write_text(json.dumps({'status':'prepared-unpublished-native-pending','archiveSha256':sha(arc.read_bytes()),'runtimeFiles':output,'fontSubtreesCompleteUnmodified':fontChecks,'runtimeComponent':{'beforeSha256':sha(before),'afterSha256':sha(rt.read_bytes())},'footerChanges':changes,'fullSourceArchiveBytes':arc.stat().st_size,'maxFileBytes':max([r['bytes'] for r in output]+[arc.stat().st_size]),'sourceOffer':'MathJax component only; mdBook MPL preferred source package still incomplete','conversionGatePassed':False},indent=2)+'\n'); print('MathJax固定runtime2061ファイル、6フォント群完全部・原archive・通知を隔離配置')
