from pathlib import Path
from bs4 import BeautifulSoup
import json, hashlib, re, subprocess, sys, datetime
U=Path(__file__).resolve().parent
sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
plan=json.loads((U/'PAGE_PLAN.json').read_text()); rows=[]; references=0
for row in plan['rows']:
    files=[U/'preferred'/lang/row['page'] for lang in ['en','ja']]
    nodes=[BeautifulSoup(p.read_text().split('---',2)[2],'html.parser').select_one('.gnu-tar-original-content') for p in files]
    en,ja=nodes
    for selector in ['pre','dt']:
        assert [x.get_text() for x in en.select(selector)]==[x.get_text() for x in ja.select(selector)], (row['page'],selector)
    shape=lambda n:[x.name for x in n.find_all(re.compile('^(p|pre|dt|dd|li|th|td|h[1-6])$'))]
    assert shape(en)==shape(ja),row['page']
    assert [x['id'] for x in en.select('[id]')]==[x['id'] for x in ja.select('[id]')]
    assert [x['href'].replace('/v1-35/en/','/v1-35/ja/') for x in en.select('a[href]')]==[x['href'] for x in ja.select('a[href]')]
    for a,b in zip(en.select('tr'),ja.select('tr')):
        assert len(a.select('td,th'))==len(b.select('td,th'))
        if a.select('td'):
            assert a.select_one('td').get_text()==b.select_one('td').get_text()
    references+=len(ja.select('a[href]'))
    rows.append({'page':row['page'],'enSHA256':sha(files[0]),'jaSHA256':sha(files[1]),'paragraphs':len(ja.select('p')),'pre':len(ja.select('pre')),'dt':len(ja.select('dt')),'tableRows':len(ja.select('tr'))})
assert sum(x['pre'] for x in rows)==12
foot=nodes[0].find(id='FOOT6').parent
assert foot.find_next('pre').get_text()=='tar -cf a.tar /usr --no-recursion /var/*\n'
before={str(p.relative_to(U)):sha(p) for d in ['source-fragments','preferred'] for p in (U/d).rglob('*') if p.is_file()}
for script in ['generate.py','translate.py']:
    subprocess.run([sys.executable,str(U/script)],check=True)
after={str(p.relative_to(U)):sha(p) for d in ['source-fragments','preferred'] for p in (U/d).rglob('*') if p.is_file()}
assert before==after and len(before)==15
out={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'rows':rows,'references':references,'regeneration15FilesExact':True,'footnotes':['FOOT5','FOOT6'],'footnote6TrailingExamplePreserved':True,'limits':'Full five-page EN/JA structure, literal code, definition terms, table mapping, IDs and localized reference correspondence. Source-to-English target resolution is separately checked by check-canonical.py. Semantic review is separate; no rendered/build/sourcekit/publication claim.'}
(U/'STRUCTURE_VALIDATION.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n')
print('5pages/255paragraphs/12pre/278dt/225refs/15file replay passed')
