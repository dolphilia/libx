from pathlib import Path
import json,hashlib,zipfile,shutil
E=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-04-660');ROOT=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-mdbook-astro-trial-655'); S=Path('/private/tmp/libx-mdbook-source-offer-660'); S.mkdir();sha=lambda b:hashlib.sha256(b).hexdigest();skip={'node_modules','.astro','.git','dist','original-mdbook','downloads'}
base=json.loads((E.parent/'2026-10-04-659/TRIAL_OUTPUT_MANIFEST.json').read_text()); known={r['path']:r['sha256'] for r in base['files']}; records=[]
for p in sorted(W.rglob('*')):
 rel=p.relative_to(W)
 if any(x in skip for x in rel.parts):continue
 if p.is_symlink():raise ValueError('unclassified source symlink '+str(rel))
 if not p.is_file():continue
 b=p.read_bytes()
 if str(rel) in known:assert sha(b)==known[str(rel)]
 q=S/'workspace'/rel;q.parent.mkdir(parents=True,exist_ok=True);q.write_bytes(b);records.append({'path':str(q.relative_to(S)),'sha256':sha(b),'origin':'current-editable-trial-workspace'})
orig=ROOT/'docs/notes/project-expansion/runs/evidence/2026-10-04-585/mdbook-2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d.tar.gz';assert sha(orig.read_bytes())=='9800afa8e565117ca70f2f4fd690fcc67fbf230dfea4587b3f60a61e7c2bdda9';(S/'upstream').mkdir();shutil.copyfile(orig,S/'upstream'/orig.name)
# Keep the complete upstream input archive, including all31chapters,15references and seven symlinks.
N=S/'notices';N.mkdir()
for cycle,names in [('653',['RIGHTS_DECISION.json','FA_6_2_0_LICENSE.txt','FA_5_15_4_LICENSE.txt','RUST_ARTWORK_LOGO_LICENSE.md','RUST_TRADEMARK_POLICY.html']),('658',['OCTICONS_LICENSE.txt','OCTICONS_MIT_NOTICE.txt','OCTICONS_LICENSE_FETCH.json','LPPL-1.3c.txt'])]:
 for n in names:shutil.copyfile(E.parent/('2026-10-04-'+cycle)/n,N/n)
# Current MathJax component stays separately supplied, avoiding a duplicate25MB archive in source ZIP.
component={'name':'MathJax2.7.1 original full source','url':'/docs/mdbook-trial/downloads/mathjax-2.7.1-d71cc406.tar.gz','bytes':25139657,'sha256':'0234aab3536a3e35eee246a1a7794ba78edab9fe0fb3ee6dfd46d82bd0edb0db','version':'2.7.1','commit':'d71cc40666d213dceeb9353822a3b530656d9a4b'}
(S/'SOURCE_COMPONENTS.json').write_text(json.dumps({'status':'unpublished-trial-source-offer','mdBook':{'version':'0.5.4','commit':'2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d','archive':'upstream/'+orig.name,'sha256':sha(orig.read_bytes()),'files':644,'symlinks':7,'scope':'31chapter sources plus15references; complete original source archive retained'},'MathJax':component,'documentationTerms':'MPL2.0 for mdBook documentation and adapted editable documents; materials retain separate original terms; build-context/site code included under existing terms, no blanket relicensing','preferredEditableInputs':'workspace/apps/mdbook-trial/src/content/docs/ (31rawHTMLMarkdown sources); layouts/components/runtime CSS/JS and source assets preserved','scopeLimit':'No Japanese translation/full semantic review/candidate adoption claimed. Original preview mirror and dist caches excluded. Original generation trial scripts are diagnostic records; this package rebuilds the current editable Libx inputs.'},indent=2)+'\n')
readme='''# mdBook0.5.4 — unpublished Libx trial editable source

This archive contains the31editable Libx document inputs, their app components/runtime/assets, and the fixed shared-template build context. Documentation/adapted document inputs remain MPL2.0. The full original mdBook source archive is in upstream/; original notices and material terms remain separate. Do not interpret MPL2.0 as relicensing all unrelated Libx site code. See notices/RIGHTS_DECISION.json and SOURCE_COMPONENTS.json.

The MathJax2.7.1 complete original source is a separate fixed download with the SHA256 stated in SOURCE_COMPONENTS.json. Local runtime resources and complete six font-family subtrees are already in workspace/apps/mdbook-trial/public/mdbook-runtime/mathjax/. The original archive also contains omitted legacy PNG resources. Their exclusion from HTTP runtime is still under evaluation; this trial is not an accepted production project.

Edit the Markdown sources in workspace/apps/mdbook-trial/src/content/docs/, including raw HTML text and newline entities in pre blocks. This is the preferred editable form of the present Libx document adaptation; no dist output is substituted for it. The upstream tar.gz preserves the original unexpanded Markdown/helper inputs for an upstream regeneration with mdBook0.5.4. Future translations must include their editable inputs in a refreshed offer.

Build the current editable trial with the pinned workspace package manifest and pnpm lock:

    cd workspace
    pnpm install --frozen-lockfile
    cd apps/mdbook-trial
    pnpm exec astro build

A source-reconstruction check uses those same pinned dependency bytes, kept separate from this archive. Dependency packages are resolved from the lock, not claimed to be included. The command builds the editable app; archived historical generation scripts are not claimed to be a portable one-command upstream importer.

To reproduce the full-original MathJax download link, place the separately supplied file, after checking its SHA256, at workspace/apps/mdbook-trial/public/downloads/mathjax-2.7.1-d71cc406.tar.gz. Diagnostic original-mdbook mirrors are excluded; no rendered chapter links depend on that diagnostic mirror. The self-referential source ZIP download is packaged separately from the editable source tree and is not included recursively.

Libx adaptations: internal route/asset mapping, pre newline encoding, footer source/editorial notes, original SUMMARY navigation, scoped content/code styles, original code/editor functions with modern clipboard transport and stable button labels, shared-theme palette mapping, local fixed MathJax component packaging. Original notice texts/source assets are retained. Upstream Rust logos and Font Awesome demonstrations are documentation materials, not Libx branding or an endorsement.

All31chapters remain included; no translation/full semantic review/publication is claimed. This source offer is a trial implementation, not a completion certificate for the project.
''';(S/'README.md').write_text(readme)
rows=[]
for p in sorted(S.rglob('*')):
 if p.is_file():rows.append({'path':str(p.relative_to(S)),'bytes':p.stat().st_size,'sha256':sha(p.read_bytes())})
(S/'SOURCE_MANIFEST.json').write_text(json.dumps({'files':rows,'manifestSelfExcluded':True,'sourceComponents':'SOURCE_COMPONENTS.json'},indent=2)+'\n')
with zipfile.ZipFile(E/'source-trial.zip','x',compression=zipfile.ZIP_DEFLATED,compresslevel=9) as z:
 for p in sorted(S.rglob('*')):
  if not p.is_file():continue
  i=zipfile.ZipInfo(str(p.relative_to(S)),(2026,10,4,0,0,0));i.external_attr=0o100644<<16;i.compress_type=zipfile.ZIP_DEFLATED;z.writestr(i,p.read_bytes())
size=(E/'source-trial.zip').stat().st_size;assert size<26214400
(E/'SOURCE_OFFER_PREPARED.json').write_text(json.dumps({'status':'prepared-reconstruction-pending','stage':str(S),'files':len(rows)+1,'archiveBytes':size,'archiveSha256':sha((E/'source-trial.zip').read_bytes()),'sourceArchiveRoot':'README.md/SOURCE_MANIFEST.json/SOURCE_COMPONENTS.json/workspace/upstream/notices','fullPreferredSourceInputs':31,'originalArchiveFiles':644,'originalSymlinksInOriginalArchive':7,'MathJaxSeparateComponent':component,'rootUserAwesomeChangesUsed':False,'fullContentReviewPerformed':False,'conversionGatePassed':False},indent=2)+'\n');print('提供試験ZIP',len(rows)+1,'files',size,'bytes')
