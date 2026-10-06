import pathlib,json,re,hashlib,os,tomllib,collections,tarfile
root=pathlib.Path('/private/tmp/libx-candidate-sources-585/mdbook');ev=pathlib.Path('docs/notes/project-expansion/runs/evidence/2026-10-04-651')
sha=lambda b:hashlib.sha256(b).hexdigest()
audit=json.loads(pathlib.Path('docs/notes/project-expansion/runs/evidence/2026-10-04-585/MDBOOK_TREE_AUDIT.json').read_text());assert len(audit['records'])==644
archive=pathlib.Path('docs/notes/project-expansion/runs/evidence/2026-10-04-585/mdbook-2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d.tar.gz');assert sha(archive.read_bytes())=='9800afa8e565117ca70f2f4fd690fcc67fbf230dfea4587b3f60a61e7c2bdda9'
tar=tarfile.open(archive);members={m.name.split('/',1)[1]:m for m in tar.getmembers() if '/' in m.name}
def fixed_bytes(row):
 p=root/row['path'];member=members[row['path']]
 if row['kind']=='symlink':
  assert member.issym() and member.linkname==row['linkTarget'];return member.linkname.encode()
 assert member.isfile();data=p.read_bytes();assert data==tar.extractfile(member).read();return data
for row in audit['records']:
 b=fixed_bytes(row);assert hashlib.sha1(b'blob '+str(len(b)).encode()+b'\0'+b).hexdigest()==row['expectedBlobSHA'],row['path']
summary=(root/'guide/src/SUMMARY.md').read_text();chapters=['guide/src/'+p for p in re.findall(r'^\s*(?:-\s*)?\[[^\]]+\]\(([^)]*)\)',summary,re.M) if p];assert len(chapters)==31 and len(set(chapters))==31
includes=[];escaped=[];markers=[]
for source in chapters:
 text=(root/source).read_text()
 for m in re.finditer(r'\\?\{\{#(include|rustdoc_include|playground)\s+([^\s}]+)([^}]*)\}\}',text):
  record={'source':source,'line':text[:m.start()].count('\n')+1,'directive':m.group(0),'kind':m.group(1)}
  if m.group(0).startswith('\\'):escaped.append(record);continue
  filename,*selection=m.group(2).split(':');target=(root/source).parent.joinpath(filename).resolve();assert target.is_relative_to(root.resolve()) and target.is_file(),record
  record.update(target=target.relative_to(root).as_posix(),selector=':'.join(selection) or None,options=m.group(3).strip() or None,targetSHA256=sha(target.read_bytes()));includes.append(record)
 for m in re.finditer(r'\{\{\s*mdbook-(?:version|semver|semver-break)\s*\}\}',text):markers.append({'source':source,'line':text[:m.start()].count('\n')+1,'marker':m.group(0)})
includeTargets={i['target'] for i in includes};guide={r['path'] for r in audit['records'] if r['path'].startswith('guide/')};assert len(guide)==43
fixedInputs={'LICENSE','Cargo.toml','Cargo.lock'}
records=[]
for item in audit['records']:
 p=item['path'];b=fixed_bytes(item)
 if p in chapters:role='adopt';reason='公式SUMMARYに存在する全31章。開発者向け3章も省略しない。'
 elif p in includeTargets:role='reference';reason='実際の非エスケープinclude/rustdoc_include/playgroundが参照する固定入力。'
 elif p=='guide/src/format/images/rust-logo-blk.svg':role='reference';reason='Markdown/固有機能章の説明対象画像。画像保持と第三者条件確認が必要。'
 elif p in fixedInputs:role='reference';reason='固定版ライセンス原文・バージョン生成値・依存版の証拠。'
 elif p.startswith('guide/guide-helper/') or p=='guide/book.toml':role='reference';reason='guide生成設定と3種類の版置換を行う公式preprocessor。'
 elif p.startswith('guide/src/for_developers/mdbook-wordcount/'):role='reference';reason='代替backend章の補助コード例。関連性を保持し収録方法を変換試験で確定。'
 elif p=='guide/src/guide/README.md':role='exclude';reason='SUMMARYで直接参照されない旧User guide索引。3つの参照先は全て採用章。本文3行と索引重複を区別。'
 elif p=='guide/src/404.md':role='exclude';reason='公式配信サイトの404 UI。guide章ではなくLibxの既存404 UIを使う。'
 else:role='exclude';reason='固定したguide目次全文・その補助入力の範囲外の実装/テスト/配信/別資料。再帰API文書生成は対象外。'
 records.append({'path':p,'gitBlobSHA':item['expectedBlobSHA'],'sha256':sha(b),'bytes':len(b),'kind':item['kind'],'role':role,'reason':reason})
assert len(records)==644 and len({r['path'] for r in records})==644
for target in includeTargets:assert next(r for r in records if r['path']==target)['role'] in ['adopt','reference']
readme=(root/'guide/src/README.md').read_text();statement='The mdBook source and documentation are released under\nthe [Mozilla Public License v2.0](https://www.mozilla.org/MPL/2.0/).';assert statement in readme
cargo=tomllib.loads((root/'Cargo.toml').read_text());version=cargo['package']['version'];assert version=='0.5.4';assert cargo['workspace']['package']['license']=='MPL-2.0'
result={'status':'passed-fixed-boundary-inventory-not-eligibility','version':version,'commit':audit['commit'],'all644GitBlobsRechecked':True,'allFilesClassified':644,'roles':dict(collections.Counter(r['role'] for r in records)),'summaryChapters':31,'draftEntries':1,'guideInputs':43,'activeDirectives':includes,'escapedIllustrationDirectives':escaped,'versionMarkers':markers,'versionReplacements':{'{{ mdbook-version }}':'0.5.4','{{ mdbook-semver }}':'0.5','{{ mdbook-semver-break }}':'0.6.0'},'records':records,'documentationLicenseEvidence':{'path':'guide/src/README.md','lines':[55,58],'statement':statement,'sha256':sha((root/'guide/src/README.md').read_bytes()),'license':'MPL-2.0','softwareLicenseFallbackRequired':False,'priorRecordCorrection':'589 was provisional; frozen README explicitly includes documentation. Prior evidence is preserved, not rewritten.'},'remaining':['Rust logo素材の条件と保持方法','MPL通知・原文/source提供・非公式翻訳/変更表示の履行設計','リンク/アンカーと全コード/hidden linesを含む変換試験','日本語訳調査・工数実測・採点・別選定確認'],'semanticReviewPerformed':False,'candidateSelected':False}
(ev/'MDBOOK_BOUNDARY.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({k:result[k] for k in ['status','roles','summaryChapters','allFilesClassified']},ensure_ascii=False));print('active directives',len(includes),'escaped examples',len(escaped),'version markers',len(markers))
