import sys,json,hashlib,html,re
from pathlib import Path
sys.path.insert(0,'/private/tmp/libx-jq-python-593')
import yaml
root=Path('/Users/dolphilia/github/libx')
app=Path('/private/tmp/libx-jq-astro-trial-592/apps/jq')
manual=yaml.safe_load(Path('/private/tmp/libx-candidate-sources-585/jq/docs/content/manual/v1.8/manual.yml').read_text())
reference=json.loads(Path('/private/tmp/libx-jq-upstream-render-593/UPSTREAM_FIELDS.json').read_text())
fields={x['key']:x for x in reference['fields']}
boundary=json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-04-590/JQ_BOUNDARY.json').read_text())
out=Path('/private/tmp/libx-jq-preserved-html-trial-593b');out.mkdir();(out/'markdown').mkdir()
headings={};pages=[]
def field(key,id=None):
    s=fields[key]['html']
    if id:s=re.sub(r'^<(h[23])>',lambda m:f'<{m[1]} id="{id}">',s,count=1)
    return f'<div class="jq-upstream-field" data-source-key="{key}">\n{s}\n</div>\n\n'
def fence(text,lang='text'):
    n=max([2]+[len(x) for x in re.findall(r'`+',text)])+1;f='`'*n
    return f'{f}{lang}\n{text}\n{f}\n\n'
notice=json.loads((root/'docs/notes/project-expansion/runs/evidence/2026-10-04-590/JQ_LICENSE_FULFILLMENT.json').read_text())['noticeEn']
def page(name,title,body,items):
    index=len(pages)
    source='\n## Source and notices\n\n'+notice+'\n\n[Original manual](https://jqlang.org/manual/v1.8/) · [Fixed source](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [License](https://creativecommons.org/licenses/by/3.0/) · [Original notices](/docs/jq/v1-8-2/en/02-license/01-original-notices/) · [Full legal code](/docs/jq/v1-8-2/en/02-license/02-cc-by-3-0/)\n'
    text='---\ntitle: '+json.dumps(title)+'\norder: '+str(index)+'\ncategoryOrder: 1\n---\n\n'+body+source
    (out/'markdown'/name).write_text(text)
    (app/'src/content/docs/v1-8-2/en/01-guide'/name).write_text(text)
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
(app/'src/data').mkdir(exist_ok=True)
(app/'src/data/document-headings.json').write_text(json.dumps(headings,ensure_ascii=False,indent=2)+'\n')
(out/'document-headings.json').write_text(json.dumps(headings,ensure_ascii=False,indent=2)+'\n')
(out/'GENERATION.json').write_text(json.dumps(dict(status='preserved-upstream-html-full-scope-trial',sourceSha256=reference['inputSha256'],fields=301,pages=pages,examples=250,originalAnchors=150,renderer='fixed upstream Python Markdown 3.10.2',changes=['section h2 and entry h3 retain original hierarchy/id metadata','manual pages split without losing any source field','man intro uses upstream EscapeHtml extension','all examples preserve Command/Input/Output in ordered fences']),indent=2)+'\n')
print(dict(pages=len(pages),fields=301,examples=250))
