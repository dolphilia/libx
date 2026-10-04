#!/usr/bin/env python3
"""Generate the full fixed jq1.8 English canonical pages from preserved original inputs.
No network, LLM or global dependencies. Refuse changed inputs and existing output.
The HTML snapshot is fixed upstream Markdown rendering verified in cycle593;
this script never treats EN output as a Japanese translation.
"""
import sys,json,hashlib,html,re,argparse,os,tempfile,shutil
from pathlib import Path
parser=argparse.ArgumentParser()
parser.add_argument('--packet',type=Path,required=True)
parser.add_argument('--output',type=Path,required=True)
args=parser.parse_args();packet=args.packet.resolve();target=args.output.absolute()
LOCK={'SOURCE_MANIFEST.json': '916ede1c514f5f6d97de4e6d4027976f1d9e0c1f35def03e631df2d6bf3c8bb8', 'PARSED_MANUAL.json': 'b25e032a5f49bd444c34c00ff2622fac46421306345ad8f2053c294ab56195b4', 'HTML_BLOCK_FIELDS.json': '450333179a29c02d16d26c7edf98115c11846df1692068bd77e288c8189b359b', 'BOUNDARY.json': 'ae36f54a0162431cc03514a0b7cfb8ef855a3661055301b6bb9ba1c3ab474a4a', 'RIGHTS_FULFILLMENT.json': '78a0f6275fd84e98a8647da8475748e04d615f98f24c759e7ceb2d74a1955799', 'CC_BY_3_0.txt': 'e6bc9e9c474700b708f568bac9e5a8a9bcb2b1dad53442f5ba449fcb848b8e76', 'sources/COPYING': 'ad2b4a266b2268939c1446979759706077421cf906a203aa188c6f396e8cfd74', 'sources/docs/content/manual/v1.8/manual.yml': '2309907188195edee4659ffcdd52d4a30c51d4ef3824a05bcdb9d5e259802a73'}
def digest(data):return hashlib.sha256(data).hexdigest()
if target.exists() or target.is_symlink():raise SystemExit('output already exists; refusing overwrite')
for name,expected in LOCK.items():
    path=packet/name
    if not path.is_file() or path.is_symlink() or digest(path.read_bytes())!=expected:
        raise SystemExit('fixed input mismatch: '+name)
manifest=json.loads((packet/'SOURCE_MANIFEST.json').read_text())
for item in manifest['inputs']:
    path=packet/'sources'/item['upstreamPath']
    if digest(path.read_bytes())!=item['sha256']:raise SystemExit('manifest input mismatch: '+item['upstreamPath'])
manual=json.loads((packet/'PARSED_MANUAL.json').read_text())
reference=json.loads((packet/'HTML_BLOCK_FIELDS.json').read_text())
fields={x['key']:x for x in reference['fields']}
assert len(fields)==301
for f in fields.values():
    value=manual
    for key in f['key'].split('/'):
        value=value[int(key)] if isinstance(value,list) else value[key]
    assert digest(value.encode())==f['sourceSha256'],f['key']
assert reference['inputSha256']==LOCK['sources/docs/content/manual/v1.8/manual.yml']
boundary=json.loads((packet/'BOUNDARY.json').read_text())
assert boundary['rawSha256']==reference['inputSha256']
target.parent.mkdir(parents=True,exist_ok=True)
out=Path(tempfile.mkdtemp(prefix='.'+target.name+'-',dir=target.parent))
(out/'markdown').mkdir()
headings={};pages=[]
def field(key,id=None):
    s=fields[key]['html']
    if id:s=re.sub(r'^<(h[23])>',lambda m:f'<{m[1]} id="{id}">',s,count=1)
    return f'<div class="jq-upstream-field" data-source-key="{key}">\n\n{s}\n\n</div>\n\n'
def fence(text,lang='text'):
    n=max([2]+[len(x) for x in re.findall(r'`+',text)])+1;f='`'*n
    return f'{f}{lang}\n{text}\n{f}\n\n'
notice=json.loads((packet/'RIGHTS_FULFILLMENT.json').read_text())['noticeEn']
def page(name,title,body,items):
    index=len(pages)
    source='\n## Source and notices\n\n'+notice+'\n\n[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)\n'
    text='---\ntitle: '+json.dumps(title)+'\norder: '+str(index)+'\ncategoryOrder: 1\n---\n\n'+body+source
    (out/'markdown'/name).write_text(text)
    slug='v1-8-2/en/01-guide/'+name[:-3]
    headings[slug]=items;pages.append(dict(name=name,sha256=hashlib.sha256(text.encode()).hexdigest()))
page('00-introduction.md',manual['headline'],'# '+manual['headline']+'\n\n'+field('body'),[])
for i,s in enumerate(manual['sections']):
    b=boundary['sections'][i];body=field(f'sections/{i}/title',b['id']);items=[dict(depth=2,slug=b['id'],text=s['title'])]
    if 'body' in s:body+=field(f'sections/{i}/body')
    for j,e in enumerate(s.get('entries',[])):
        body+=field(f'sections/{i}/entries/{j}/title',b['entries'][j]['id'])
        items.append(dict(depth=3,slug=b['entries'][j]['id'],text=re.sub(r'`','',e['title'])))
        body+=field(f'sections/{i}/entries/{j}/body')
        for k,x in enumerate(e.get('examples',[])):
            key=f'sections/{i}/entries/{j}/examples/{k}'
            body+=f'<!-- jq-example:{key}:start -->\n\n#### Example {k+1}\n\nCommand\n\n'+fence("jq '"+x['program']+"'",'sh')+'Input\n\n'+fence(x['input'])
            if not x['output']:body+='Output: none\n\n'
            else:
                for l,v in enumerate(x['output']):body+=f'Output {l+1}\n\n'+fence(v)
            body+=f'<!-- jq-example:{key}:end -->\n\n'
    page(f'{i+1:02d}-{b["id"]}.md',s['title'],body,items)
body=field('manpage_intro')+field('manpage_epilogue')
body=re.sub(r'<h2>(SYNOPSIS|FILTERS|BUGS|AUTHOR)</h2>',lambda m:f'<h2 id="{m[1].lower()}">{m[1]}</h2>',body)
page('15-manpage-appendix.md','Manpage introduction and epilogue',body,[dict(depth=2,slug=x.lower(),text=x)for x in ['SYNOPSIS','FILTERS','BUGS','AUTHOR']])
(out/'document-headings.json').write_text(json.dumps(headings,ensure_ascii=False,indent=2)+'\n')
(out/'GENERATION.json').write_text(json.dumps(dict(status='full-fixed-english-canonical-export-not-ja',sourceSha256=reference['inputSha256'],fields=301,pages=pages,examples=250,originalAnchors=150,renderer='fixed upstream Python Markdown 3.10.2',changes=['section h2 and entry h3 retain original hierarchy/id metadata','manual pages split without losing any source field','man intro uses upstream EscapeHtml extension','all examples preserve Command/Input/Output in ordered fences']),indent=2)+'\n')

(out/'licenses').mkdir()
for name,title,src in [('01-original-notices.md','Original jq COPYING','sources/COPYING'),('02-cc-by-3-0.md','CC BY 3.0 Unported — Full legal code','CC_BY_3_0.txt')]:
    body=(packet/src).read_text()
    text='---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\ncategoryOrder: 2\n---\n\n'+fence(body)
    (out/'licenses'/name).write_text(text)
rows=[]
def leaves(value,key=''):
    if isinstance(value,dict):
        for k,v in value.items():yield from leaves(v,key+'/'+k if key else k)
    elif isinstance(value,list):
        for k,v in enumerate(value):yield from leaves(v,key+'/'+str(k))
    elif isinstance(value,str):yield key,value
for key,value in leaves(manual):
    if key.startswith('sections/'):
        i=int(key.split('/')[1]);name=pages[i+1]['name']
    elif key.startswith('manpage_'):name='15-manpage-appendix.md'
    else:name='00-introduction.md'
    rows.append(dict(sourceKey=key,sourceTextSha256=digest(value.encode()),canonicalPage='markdown/'+name,renderedField=key if key in fields else None,kind='example' if '/examples/' in key else 'prose-or-title'))
assert len(rows)==1135
(out/'CONTENT_MAP.json').write_text(json.dumps(dict(sourceSha256=reference['inputSha256'],rows=rows,manualPages=16,noticePages=2,entries=136,examples=250),ensure_ascii=False,indent=2)+'\n')
files=[dict(path=str(path.relative_to(out)),sha256=digest(path.read_bytes())) for path in sorted(out.rglob('*')) if path.is_file()]
(out/'OUTPUT_MANIFEST.json').write_text(json.dumps(files,indent=2)+'\n')
# Rename only after the whole full-scope export has been generated.
if target.exists() or target.is_symlink():raise SystemExit('output appeared; refusing overwrite')
os.rename(out,target)
print(json.dumps(dict(pages=len(pages),noticePages=2,fields=len(fields),sourceLeaves=len(rows),examples=250)))
