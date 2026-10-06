import pathlib,json,hashlib,shutil,tarfile,gzip,io
root=pathlib.Path('/Users/dolphilia/github/libx');kit=pathlib.Path('/private/tmp/libx-lz4-sourcekit-831')
ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-832';sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
old=json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-05-831/SOURCEKIT_INVENTORY.json').read_text())
for p,v in old['files'].items():assert sha(kit/p)==v['sha256'],p
inventory=dict(old['files']);packages=[];notice_count=0
for store in sorted((kit/'node_modules/.pnpm').iterdir()):
    nm=store/'node_modules'
    if not nm.is_dir():continue
    candidates=list(nm.glob('*/package.json'))+list(nm.glob('@*/*/package.json'))
    for meta in candidates:
        if meta.parent.is_symlink():continue
        data=json.loads(meta.read_text());identity=data.get('name','?')+'@'+data.get('version','?')
        notices=[]
        for p in sorted(meta.parent.iterdir()):
            if not p.is_file() or not (p.name.lower().startswith(('license','licence','copying','notice'))):continue
            rel='THIRD_PARTY_NOTICES/'+identity.replace('/','__')+'/'+p.name
            out=kit/rel;out.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(p,out)
            inventory[rel]={'sha256':sha(out),'bytes':out.stat().st_size,'source':str(p)};notices.append(rel);notice_count+=1
        packages.append({'package':identity,'declaredLicense':data.get('license'),'metadataSHA':sha(meta),'noticeFiles':notices,'scope':'installed build dependency; package source/node_modules not included in archive'})
katex=kit/'node_modules/.pnpm/katex@0.16.25/node_modules/katex';font_sources={sha(p):p for p in (katex/'dist/fonts').glob('*.woff2')};fonts=[]
for p in sorted((kit/'apps/lz4/dist/assets').glob('*.woff2')):
    s=font_sources.get(sha(p));assert s,'unknown emitted font: '+p.name
    fonts.append({'asset':p.name,'sha256':sha(p),'fixedPackageFont':s.name,'package':'katex@0.16.25','notice':'THIRD_PARTY_NOTICES/katex@0.16.25/LICENSE'})
assert (kit/'THIRD_PARTY_NOTICES/katex@0.16.25/LICENSE').exists()
# This LZ4 build contains no mathematical pages and emits no font files.
# Empty output is recorded, never replaced with hypothetical KaTeX assets.
shared=[]
for p in sorted((kit/'packages').glob('*/package.json')):
    j=json.loads(p.read_text());shared.append({'package':j['name'],'path':p.relative_to(kit).as_posix(),'sha256':sha(p),'declaredLicense':j.get('license'),'licenseFiles':[q.name for q in p.parent.iterdir() if q.is_file() and q.name.lower().startswith(('license','copying','notice'))]})
audit={'status':'facts-recorded-conditions-pending','buildPackages':packages,'noticeFiles':notice_count,'emittedFonts':fonts,'sharedPackages':shared,'rootLicenseFiles':[p.name for p in kit.iterdir() if p.is_file() and p.name.lower().startswith(('license','copying'))],'limits':['Notice files are unmodified local installed distribution copies, not a new license grant.','No root/shared package license found; all-files redistribution permission is not inferred.','Installed dependency license metadata is not a claim that every dependency is shipped in the site.','Sourcekit remains internal; no external publishing or public download placement.']}
for p in [ev/'DEPENDENCY_AND_SHARED_LICENSE_AUDIT.json',kit/'THIRD_PARTY_NOTICES/INVENTORY.json']:p.write_text(json.dumps(audit,ensure_ascii=False,indent=2)+'\n')
invp='THIRD_PARTY_NOTICES/INVENTORY.json';inventory[invp]={'sha256':sha(kit/invp),'bytes':(kit/invp).stat().st_size,'source':'832 local package/asset inspection'}
p=kit/'SOURCEKIT_README.md';before=sha(p);p.write_text(p.read_text()+'''\n## 2026-10-05の検証追記\n\nクリーンな依存導入、59ページのstandalone build、既定の同梱証拠を使用するcheck:contentは合格しました。英日54HTMLとCSSは生成Astro scope token/stylesheet hashのみを正規化すると元の隔離出力と全文一致します。公開条件・全体検証の完了を意味しません。\n\nTHIRD_PARTY_NOTICESには固定導入物の元通知を改変せず収録し、このLZ4ビルドでは生成woff2ファイルは0件でした。KaTeXは導入された依存であり、フォントが配信されていると記録しません。将来フォントを生成する場合は固定配布物とのSHA対応を再検査します。共有実装のroot/package licenseは未確認です。アーカイブは内部草稿であり、完全対応ソースの公開済みdownloadと記録しません。\n''')
inventory['SOURCEKIT_README.md']={'sha256':sha(p),'bytes':p.stat().st_size,'source':'initial831 draft plus832 verification facts; original version saved in831 evidence'}
manifest={**old,'status':'portable-tested-internal-draft','files':inventory,'counts':{**old['counts'],'files':len(inventory),'thirdPartyNoticeFiles':notice_count,'emittedFontsMatched':len(fonts)},'documentationUpdate':{'path':'SOURCEKIT_README.md','beforeSHA':before,'afterSHA':sha(p)},'pending':['shared implementation redistribution conditions','complete sourcekit public download/footer binding','shared integration/global integrity','external image/HTTP final status']}
(kit/'SOURCEKIT_MANIFEST.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
(ev/'SOURCEKIT_INVENTORY.json').write_bytes((kit/'SOURCEKIT_MANIFEST.json').read_bytes());(ev/'SOURCEKIT_README.md').write_bytes(p.read_bytes())
members=sorted([*inventory,'SOURCEKIT_MANIFEST.json']);archive=ev/'LIBX_LZ4_SOURCEKIT_DRAFT.tar.gz'
with archive.open('wb') as target,gzip.GzipFile(filename='',mode='wb',fileobj=target,mtime=0) as gz,tarfile.open(fileobj=gz,mode='w') as tar:
    for name in members:
        source=kit/name;info=tarfile.TarInfo('libx-lz4-sourcekit/'+name);info.size=source.stat().st_size;info.mode=0o755 if source.stat().st_mode&0o111 else 0o644;info.mtime=0
        with source.open('rb') as f:tar.addfile(info,f)
with tarfile.open(archive,'r:gz') as tar:
    assert len(tar.getmembers())==len(members)
    for m in tar.getmembers():
        rel=m.name.removeprefix('libx-lz4-sourcekit/');assert rel in members and m.isfile();data=tar.extractfile(m).read();assert hashlib.sha256(data).hexdigest()==sha(kit/rel)
result={'status':'passed-internal-archive','archiveSHA':sha(archive),'bytes':archive.stat().st_size,'members':len(members),'sourceFiles':len(inventory),'noticeFiles':notice_count,'installedPackages':len(packages),'emittedFonts':len(fonts),'allMembersExact':True,'unsafeMembers':0,'publication':'not performed','pending':manifest['pending']}
(ev/'ARCHIVE_RESULT.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(json.dumps(result,ensure_ascii=False))
