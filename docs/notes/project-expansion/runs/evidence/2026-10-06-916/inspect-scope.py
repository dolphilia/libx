from pathlib import Path
from bs4 import BeautifulSoup
import copy, re, json, hashlib, datetime
R=Path('/Users/dolphilia/github/libx')
N=R/'docs/notes/document-import/gnu-findutils/v4-11-0'
E=Path(__file__).parent
p=N/'source/derived-manual.html'
s=BeautifulSoup(p.read_text(),'html.parser')
top=s.select_one('#Top')
direct=[x for x in top.find_all(recursive=False) if any('extent' in c for c in x.get('class',[]))]
print('topsections', [(x.get('id'),x.get('class')) for x in direct][:18])
rows=[]
for d in direct:
    if d.get('id') not in ['Introduction','Finding-Files','Actions','File-Name-Databases']:
        continue
    descendants=[y for y in d.find_all('div') if any('extent' in c for c in y.get('class',[]))]
    for x in [d]+descendants:
        z=copy.deepcopy(x)
        for child in z.find_all('div'):
            if child.attrs and any('extent' in c for c in child.get('class',[])):
                child.decompose()
        for nav in z.select('.header,.nav-panel'):
            nav.decompose()
        head=z.find(re.compile('^h[1-6]$'))
        non=copy.deepcopy(z)
        for pre in non.select('pre'):
            pre.decompose()
        rows.append({'sourceID':x.get('id'),'heading':head.get_text(' ',strip=True) if head else '', 'words':len(re.findall(r'\S+',non.get_text(' ',strip=True))), 'pre':len(z.select('pre')), 'VAR':len(z.select('var')), 'tables':len(z.select('table')), 'footnoteLinks':[a.get('href') for a in z.select('a[href]') if 'FOOT' in a.get('href','') or 'DOCF' in a.get('href','')], 'sourceScope':d.get('id')})
out={'status':'scope-draft-not-adopted','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'wholeHTMLSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'rows':rows}
(E/'SCOPE_DRAFT.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print('totals',len(rows),sum(x['words'] for x in rows),sum(x['pre'] for x in rows))
print([(c,len([r for r in rows if r['sourceScope']==c]),sum(r['words'] for r in rows if r['sourceScope']==c)) for c in ['Introduction','Finding-Files','Actions','File-Name-Databases']])
print('footnotes',s.select_one('.footnotes-segment').get_text(' ',strip=True))
print('firstrows',rows[:6])
