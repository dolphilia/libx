import pathlib, urllib.request, urllib.parse, hashlib, json
root=pathlib.Path('/Users/dolphilia/github/libx')
app=pathlib.Path('/private/tmp/libx-lz4-release-837/apps/lz4')
ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-837'
sha=lambda b:hashlib.sha256(b).hexdigest()
results=[]
files=list((app/'public/source/v1-10-0').rglob('*'))
for p in sorted(x for x in files if x.is_file()):
    relative=p.relative_to(app/'public').as_posix()
    url='http://127.0.0.1:4333/docs/lz4/'+urllib.parse.quote(relative)
    with urllib.request.urlopen(url,timeout=10) as r:
        data=r.read(); mime=r.headers.get('Content-Type','')
        assert r.status==200 and r.url==url
        assert sha(data)==sha(p.read_bytes()), relative
        if p.name.endswith('.tar.gz'):
            assert mime == 'application/gzip', mime
            assert r.headers.get('Content-Encoding') is None
            assert r.headers.get('Content-Disposition') == f'attachment; filename="{p.name}"'
        if p.suffix=='.txt': assert mime.startswith('text/plain'), (relative,mime)
        results.append(dict(kind='fixed-original-notice-archive',path=relative,url=url,status=r.status,mime=mime,bytes=len(data),sha256=sha(data),exact=True))
for p in sorted((app/'dist/v1-10-0').glob('*/*/*/index.html')):
    relative=p.parent.relative_to(app/'dist').as_posix()+'/'
    url='http://127.0.0.1:4333/docs/lz4/'+relative
    with urllib.request.urlopen(url,timeout=10) as r:
        data=r.read();mime=r.headers.get('Content-Type','')
        assert r.status==200 and r.url==url and mime.startswith('text/html')
        assert sha(data)==sha(p.read_bytes()), relative
        results.append(dict(kind='document',path=relative,status=r.status,mime=mime,bytes=len(data),sha256=sha(data),exact=True))
assert sum(r['kind']=='document' for r in results)==54
report=dict(status='passed',scope='local-only Astro preview GET for all fixed public/source downloads and all54 document HTML; actual browser download separately recorded in BROWSER_DOWNLOAD.json; no external URL claim',results=results,pending=['public Preview and Production HTTP verification'])
(ev/'LOCAL_HTTP.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print('Local HTTP passed',len(results),'GET responses,',sum(r['kind']!='document' for r in results),'fixed original/notice/archive files, 54 HTML; bytes and MIME exact.')
