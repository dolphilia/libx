import pathlib,tarfile,json,hashlib,re,datetime
r=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-02-103')
for project,archive in [('gnu-make','make-4.4.1.tar.gz'),('zstd','zstd-v1.5.7.tar.gz')]:
  rows=[]; selected=[]
  with tarfile.open(r/'source'/project/archive) as t:
    for m in t.getmembers():
      if not m.isfile(): continue
      rel=m.name.split('/',1)[1]; b=t.extractfile(m).read()
      isdoc=rel.startswith('doc/') or (project=='zstd' and rel in ['LICENSE','COPYING','README.md','lib/zstd.h','programs/zstd.1','programs/zstd.1.md','programs/README.md','Makefile','programs/Makefile'])
      cls='excluded'; reason='実装・ビルド・テスト等。提案文書範囲外。'
      if project=='gnu-make' and rel in ['doc/make.texi','doc/version.texi','doc/make-stds.texi','doc/fdl.texi']:
        cls='proposed-source'; reason='マニュアル本体またはinclude入力。未採用。'
      elif project=='gnu-make' and rel.startswith('doc/'):
        cls='reference'; reason='生成設定・info比較用出力・CLI man（独立資料）。'
      elif project=='zstd' and rel in ['doc/zstd_compression_format.md','doc/decompressor_errata.md','doc/decompressor_permissive.md','programs/zstd.1.md','lib/zstd.h']:
        cls='proposed-source'; reason='形式仕様・関連正誤表・CLI原稿・API文書生成元。未採用、境界確認中。'
      elif isdoc: cls='reference';reason='版・権利・生成設定・README・画像等の境界確認用。'
      row={'archiveMember':m.name,'path':rel,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'classification':cls,'reason':reason}
      if isdoc:
        if rel.endswith(('.md','.texi','.info','.1','.html','.h')) or '/make.info-' in rel or rel in ['LICENSE','COPYING','Makefile','programs/Makefile']:
          s=b.decode(errors='replace');row.update({'whitespaceTokens':len(s.split()),'asciiWordTokens':len(re.findall(r"\b[A-Za-z][A-Za-z'-]*\b",s)),'lines':len(s.splitlines())})
          selected.append(row)
          p=r/'source'/project/'members'/rel;p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(b)
      rows.append(row)
  (r/f'{project}-input-inventory.json').write_text(json.dumps({'generatedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'archive':archive,'fileCount':len(rows),'allFiles':rows,'inspectedDocumentMetrics':selected,'metricsLimit':'原稿のASCII語・空白token実測。本文語数の確定値ではなくmarkup・索引・ライセンスを含む。暫定規模判定にのみ使用。'},ensure_ascii=False,indent=2)+'\n')
  print(project,[(x['path'],x.get('asciiWordTokens'),x.get('lines')) for x in selected if x['classification']=='proposed-source'])
spec=(r/'source/msgpack/spec.md').read_text()
(r/'msgpack-input-inventory.json').write_text(json.dumps({'commit':json.loads((r/'source/msgpack/commit.json').read_text())['sha'],'completeTree':json.loads((r/'source/msgpack/tree.json').read_text())['tree'],'classification':{'README.md':'reference:公式仕様リポジトリの役割・実装へのリンク','spec.md':'proposed-source:現行仕様全文（未採用）','spec-old.md':'reference:旧仕様、今回提案範囲には含めない'},'specMetrics':{'bytes':len(spec.encode()),'whitespaceTokens':len(spec.split()),'asciiWordTokens':len(re.findall(r"\b[A-Za-z][A-Za-z\'-]*\b",spec)),'lines':len(spec.splitlines()),'codeFences':spec.count('```'),'headings':len(re.findall(r'^#+ ',spec,re.M)),'markdownLinks':len(re.findall(r'\[[^\]]+\]\(',spec)),'licenseNoticeMatches':re.findall(r'^.*(?:[Ll]icen[cs]e|[Cc]opyright|[Pp]ermission).*$ ',spec,re.M)},'limit':'権利適用通知未確認。試験変換は実施しない。'},ensure_ascii=False,indent=2)+'\n')
print('msgpack',len(spec.split()),len(spec.splitlines()))
