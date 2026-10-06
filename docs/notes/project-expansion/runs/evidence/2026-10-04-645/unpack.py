import pathlib,zipfile,stat,json
base=pathlib.Path('/private/tmp/footer-ci-artifacts-645')
for src in sorted(base.glob('*.zip')):
 dst=base/src.stem;assert not dst.exists();dst.mkdir()
 with zipfile.ZipFile(src)as z:
  assert z.testzip() is None
  for i in z.infolist():
   p=pathlib.PurePosixPath(i.filename);assert not p.is_absolute() and '..'not in p.parts
   mode=i.external_attr>>16;assert not stat.S_ISLNK(mode)
   if i.is_dir():continue
   target=dst.joinpath(*p.parts);target.parent.mkdir(parents=True,exist_ok=True)
   with target.open('xb')as f:f.write(z.read(i))
 print({'artifact':src.stem,'members':len(z.infolist())})
