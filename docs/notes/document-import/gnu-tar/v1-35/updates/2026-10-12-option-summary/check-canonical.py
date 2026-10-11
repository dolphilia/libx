from pathlib import Path
from bs4 import BeautifulSoup
import copy, json, hashlib, re, subprocess, sys, datetime

U = Path(__file__).resolve().parent
N = U.parents[1]
sha = lambda p: hashlib.sha256(p.read_bytes()).hexdigest()
source = BeautifulSoup((N / 'source/derived/manual.html').read_text(), 'html.parser')
plan = json.loads((U / 'PAGE_PLAN.json').read_text())
published = json.loads((U / 'PUBLISHED_ANCHORS.json').read_text())
nodes, rows, references = {}, [], 0
for r in plan['rows']:
    p = U / 'preferred/en' / r['page']
    assert sha(p) == r['enSHA256']
    en = BeautifulSoup(p.read_text().split('---', 2)[2], 'html.parser').select_one('.gnu-tar-original-content')
    original = copy.deepcopy(source.find(id=r['sourceId']))
    for x in original.select('.nav-panel,.copiable-link,div[class$="-level-extent"]'):
        x.decompose()
    for a in list(original.select('a.footnote[href]')):
        h = source.find(id=a['href'][1:]).parent
        original.append(copy.deepcopy(h))
        original.append(copy.deepcopy(h.find_next_sibling('p')))
    shape = lambda s: [(x.name, re.sub(r'\s+', ' ', x.get_text()).strip()) for x in s.find_all(re.compile('^(p|pre|dt|dd|li|th|td|h[1-6])$'))]
    assert shape(original) == shape(en), r['page']
    assert [x.get_text() for x in original.select('pre')] == [x.get_text() for x in en.select('pre')]
    ids = [original['id']] + [x['id'] for x in original.select('[id]')]
    assert ids == [x['id'] for x in en.select('[id]')] and len(ids) == len(set(ids))
    nodes['/docs/gnu-tar/v1-35/en/' + r['page'][:-3] + '/'] = en
    rows.append({'page': r['page'], 'enSHA256': sha(p), 'sourceFragmentSHA256': sha(U / 'source-fragments' / Path(r['page']).with_suffix('.html')), 'orderedBlocks': len(shape(original)), 'pre': r['pre'], 'dt': r['dt'], 'dd': r['dd'], 'tables': r['tables']})
for route, en in nodes.items():
    for a in en.select('a[href]'):
        v = a['href']
        if v.startswith('/docs/gnu-tar/v1-35/en/'):
            target, _, anchor = v.partition('#')
            if target in nodes:
                assert nodes[target].find(id=anchor), v
            else:
                assert anchor in published and target == '/docs/gnu-tar/v1-35/en/' + published[anchor][:-3] + '/', v
        elif v.startswith('/docs/gnu-tar/source/v1-35/manual.html#'):
            assert source.find(id=v.partition('#')[2]), v
        elif v.startswith('#'):
            assert en.find(id=v[1:]), v
        references += 1
before = {str(p.relative_to(U)): sha(p) for d in ['source-fragments', 'preferred/en'] for p in (U / d).rglob('*') if p.is_file()}
subprocess.run([sys.executable, str(U / 'generate.py')], check=True)
assert before == {str(p.relative_to(U)): sha(p) for d in ['source-fragments', 'preferred/en'] for p in (U / d).rglob('*') if p.is_file()}
out = {'status': 'passed', 'at': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'rows': rows, 'references': references, 'footnotes': ['FOOT5', 'FOOT6'], 'regeneration10FilesExact': True, 'limits': 'English canonical draft only: original ordered blocks/code/definition list/table/IDs and reference targets preserved. Translation, meaning review, rendered checks, source kit and publication pending.'}
(U / 'CANONICAL_VALIDATION.json').write_text(json.dumps(out, indent=2) + '\n')
print('English canonical5pages/10regeneratedfiles:', references, 'references passed; no translation/review claim')
