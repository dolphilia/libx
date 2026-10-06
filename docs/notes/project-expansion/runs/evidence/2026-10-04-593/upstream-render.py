import sys, json, hashlib, re
from pathlib import Path
sys.path.insert(0,'/private/tmp/libx-jq-python-593')
import yaml, markdown
from markdown.extensions import Extension

class EscapeHtml(Extension):
    def extendMarkdown(self, md):
        md.preprocessors.deregister('html_block')
        md.inlinePatterns.deregister('html')

base=Path('/private/tmp/libx-candidate-sources-585/jq')
raw=(base/'docs/content/manual/v1.8/manual.yml').read_bytes()
m=yaml.safe_load(raw)
items=[]
def add(key,text,mode='web-body'):
    if mode=='section-title':
        import html
        out='<h2>'+html.escape(text)+'</h2>'
    elif mode=='entry-title':
        out='<h3>'+re.sub(r'</?p>','',markdown.markdown(text))+'</h3>'
    elif mode=='manpage-intro':
        out=markdown.markdown(text,extensions=[EscapeHtml(),'fenced_code'])
    else:
        out=markdown.markdown(text)
    items.append(dict(key=key,sourceSha256=hashlib.sha256(text.encode()).hexdigest(),mode=mode,html=out))
add('body',m['body'])
for i,s in enumerate(m['sections']):
    add(f'sections/{i}/title',s['title'],'section-title')
    if 'body' in s:add(f'sections/{i}/body',s['body'])
    for j,e in enumerate(s.get('entries',[])):
        add(f'sections/{i}/entries/{j}/title',e['title'],'entry-title')
        add(f'sections/{i}/entries/{j}/body',e['body'])
add('manpage_intro',m['manpage_intro'],'manpage-intro')
add('manpage_epilogue',m['manpage_epilogue'])
out=Path('/private/tmp/libx-jq-upstream-render-593');out.mkdir()
(out/'UPSTREAM_FIELDS.json').write_text(json.dumps(dict(status='independent-upstream-python-markdown-reference',inputSha256=hashlib.sha256(raw).hexdigest(),versions=dict(pyyaml=yaml.__version__,markdown=markdown.__version__),fields=items),ensure_ascii=False,indent=2)+'\n')
(out/'PARSED_MANUAL.json').write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
print(dict(fields=len(items),markdown=markdown.__version__,pyyaml=yaml.__version__))
