"""Isolated-only attributes, temporary index, and non-exempt controls."""
import hashlib, json, os, pathlib, subprocess, tempfile
root = pathlib.Path('/Users/dolphilia/github/libx')
work = pathlib.Path('/private/tmp/libx-lz4-formal-786')
ev = root / 'docs/notes/project-expansion/runs/evidence/2026-10-05-829'
old = json.loads((ev.parent / '2026-10-05-828/NEW_FILE_DIFF_CHECK.json').read_text())
paths = [r['path'] for r in old['results']]
exceptions = [r['path'] for r in old['findings']]
assert len(paths) == 109 and len(exceptions) == 10
sha = lambda p: hashlib.sha256(p.read_bytes()).hexdigest() if p.exists() else None
before = {p: sha(work / p) for p in paths}
protected = [root/'.gitattributes', root/'.git/index', work/'.git/index']
protected_before = {str(p): sha(p) for p in protected}
attrs = work / '.gitattributes'
baseline = attrs.read_bytes()
(ev/'ISOLATED_ATTRIBUTES_BEFORE.txt').write_bytes(baseline)
addition = '\n# LZ4: these exact locked upstream/reviewed files retain their original bytes.\n# check:content independently rejects changes to their source/review SHA.\n# Code/config and all other document paths retain normal whitespace checks.\n'
addition += ''.join(p + ' -text -whitespace\n' for p in exceptions)
assert b'# LZ4:' not in baseline
attrs.write_bytes(baseline + addition.encode())
(ev/'ISOLATED_ATTRIBUTES_AFTER.txt').write_bytes(attrs.read_bytes())
(ev/'LZ4_ATTRIBUTES_APPEND.txt').write_text(addition)
controls = ['apps/lz4/whitespace-control.mjs', 'apps/lz4/src/content/docs/v1-10-0/ja/__whitespace_control.md']
assert all(not (work/p).exists() for p in controls)
results = []
with tempfile.TemporaryDirectory(prefix='libx-lz4-whitespace-index-') as tmp:
    env = dict(os.environ, GIT_INDEX_FILE=tmp+'/index')
    def git(*args, name=None):
        r = subprocess.run(['git', '-c', 'color.ui=false', *args], cwd=work, env=env, text=True, capture_output=True)
        if name:
            (ev/(name+'.log')).write_text(r.stdout+r.stderr)
            results.append(dict(name=name, command=['git', *args], exit=r.returncode))
        return r
    assert git('read-tree', 'HEAD').returncode == 0
    assert git('add', '-N', '--', *paths).returncode == 0
    raw = git('diff', '--check', '--', '.gitattributes', 'apps/lz4', name='SCOPED_DIFF_CHECK')
    assert raw.returncode == 0, raw.stdout+raw.stderr
    attrcheck = git('check-attr', 'text', 'whitespace', '--', *exceptions, 'apps/lz4/check-content.mjs', 'apps/lz4/package.json', name='ATTRIBUTES')
    assert attrcheck.returncode == 0
    for p in exceptions:
        assert p+': whitespace: unset' in attrcheck.stdout
        assert p+': text: unset' in attrcheck.stdout
    for p in ['apps/lz4/check-content.mjs', 'apps/lz4/package.json']:
        assert p+': whitespace: unspecified' in attrcheck.stdout
    listing = git('diff', '--name-only', '--', 'apps/lz4', name='INCLUDED_FILES')
    assert listing.returncode == 0 and set(listing.stdout.splitlines()) == set(paths)
    try:
        for i,p in enumerate(controls):
            (work/p).write_text('const control = 1;  \n' if i == 0 else 'whitespace control  \n')
            assert git('add', '-N', '--', p).returncode == 0
            failure = git('diff', '--check', '--', p, name='NEGATIVE_'+str(i))
            assert failure.returncode != 0 and 'trailing whitespace' in failure.stdout
            (work/p).unlink()
        assert git('diff', '--check', '--', '.gitattributes', 'apps/lz4', name='FINAL_SCOPED_DIFF_CHECK').returncode == 0
    finally:
        for p in controls:
            if (work/p).exists(): (work/p).unlink()
assert before == {p: sha(work/p) for p in paths}
assert protected_before == {str(p): sha(p) for p in protected}
report = dict(status='passed', scope='isolated LZ4 app and attributes only; temporary intent-to-add index',
              includedTextFiles=len(paths), exactExceptions=[dict(path=p, sha256=before[p]) for p in exceptions],
              appBytesUnchanged=True, protectedHashes=protected_before, protectedUnchanged=True,
              results=results, negativeControls=controls,
              limitations=['Shared attributes not changed; integration must append only the reviewed block.',
                           'Whitespace exclusion alone is not content correctness; 827 content gate protects exact bytes.',
                           'Global layout integrity, browser display, and sourcekit remain separate pending work.'])
(ev/'WHITESPACE_RESULT.json').write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n')
print('Scoped diff passed: 109 new text files, 10 exact exceptions, 2 rejecting controls; real indexes unchanged.')
