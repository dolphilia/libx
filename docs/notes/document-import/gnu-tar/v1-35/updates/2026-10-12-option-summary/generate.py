from pathlib import Path
from bs4 import BeautifulSoup
import copy, json, re, hashlib

U = Path(__file__).resolve().parent
N = U.parents[1]
sha = lambda p: hashlib.sha256(p.read_bytes()).hexdigest()
for f in json.loads((N / 'SOURCE_MANIFEST.json').read_text())['files']:
    assert sha(N / f['path']) == f['sha256']
source = BeautifulSoup((N / 'source/derived/manual.html').read_text(), 'html.parser')
keys = ['All-Options', 'Operation-Summary', 'Option-Summary', 'Short-Option-Summary', 'Position_002dSensitive-Options']
slugs = ['40-all-options', '41-operation-summary', '42-option-summary', '43-short-option-summary', '44-position-sensitive-options']
routes = {k: f'01-guide/{v}.md' for k, v in zip(keys, slugs)}
ids = json.loads((U / 'PUBLISHED_ANCHORS.json').read_text())
context = json.loads((U / 'DOCUMENT_CONTEXT.json').read_text())
parts = {}
for key in keys:
    node = copy.deepcopy(source.find(id=key))
    assert node is not None
    for x in node.select('.nav-panel,.copiable-link,div[class$="-level-extent"]'):
        x.decompose()
    parts[key] = node
    for x in [node, *node.select('[id]')]:
        if x.get('id'):
            assert x['id'] not in ids
            ids[x['id']] = routes[key]
for foot in ['FOOT5', 'FOOT6']:
    key = next(k for k, c in parts.items() if c.select_one(f'a[href="#{foot}"]'))
    h = source.find(id=foot).parent
    parts[key].append(copy.deepcopy(h))
    parts[key].append(copy.deepcopy(h.find_next_sibling('p')))
    ids[foot] = routes[key]
rows = []
for key, node in parts.items():
    fragment = U / 'source-fragments' / Path(routes[key]).with_suffix('.html')
    fragment.parent.mkdir(parents=True, exist_ok=True)
    fragment.write_text(str(node) + '\n')
    for a in node.select('a[href]'):
        v = a['href']
        if v.startswith('#'):
            a['href'] = '/docs/gnu-tar/v1-35/en/' + ids[v[1:]][:-3] + '/#' + v[1:] if v[1:] in ids else '/docs/gnu-tar/source/v1-35/manual.html' + v
    title = node.find(re.compile('^h[1-6]$')).get_text(' ', strip=True)
    p = U / 'preferred/en' / routes[key]
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text('---\ntitle: ' + json.dumps(title, ensure_ascii=False) + '\nlicenseSource: gnu-tar-manual\ndocumentContext: ' + json.dumps(context, ensure_ascii=False) + '\n---\n\n<div class="gnu-tar-original-content">' + str(node) + '</div>\n')
    rows.append({'sourceId': key, 'page': routes[key], 'title': title, 'words': len(node.get_text().split()), 'pre': len(node.select('pre')), 'dt': len(node.select('dt')), 'dd': len(node.select('dd')), 'tables': len(node.select('table')), 'sourceFragmentSHA256': sha(fragment), 'enSHA256': sha(p)})
out = {'status': 'canonical-draft-not-content-reviewed', 'scope': 'GNU tar1.35 complete3.4–3.4.4, footnotes5–6. Existing39guides/2Englishreferences retained;3.5onward remains fixed-original reference.', 'sourceHTMLSHA256': sha(N / 'source/derived/manual.html'), 'sourceManifestSHA256': sha(N / 'SOURCE_MANIFEST.json'), 'rows': rows, 'words': sum(r['words'] for r in rows), 'pre': sum(r['pre'] for r in rows), 'publicationBase': '9913e11f258e974870420c1f2993e6f839eebc4e', 'bodyTransform': 'Only upstream nav/selflinks removed, hierarchy split; original prose/code/definition lists/table/IDs/footnotes retained, all outside-scope references point to fixed full original.'}
(U / 'PAGE_PLAN.json').write_text(json.dumps(out, ensure_ascii=False, indent=2) + '\n')
print('Canonical draft:', len(rows), 'pages;', out['words'], 'words;', out['pre'], 'pre; no translation/review claim')
