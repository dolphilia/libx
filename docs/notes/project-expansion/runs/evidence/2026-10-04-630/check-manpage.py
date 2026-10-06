import json,sys,hashlib
from pathlib import Path
from html.parser import HTMLParser
sys.path.insert(0,'/private/tmp/libx-jq-python-593')
import markdown
from markdown.extensions import Extension
class EscapeHtml(Extension):
    def extendMarkdown(self,md):
        md.preprocessors.deregister('html_block')
        md.inlinePatterns.deregister('html')
class Read(HTMLParser):
    def __init__(self,s):
        super().__init__();self.tags=[];self.text=[];self.feed(s)
    def handle_starttag(self,t,a):self.tags.append(t)
    def handle_data(self,s):self.text.append(s)
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/jq/1.8.2'
manual=json.loads((packet/'PARSED_MANUAL.json').read_text());orig=json.loads((packet/'HTML_BLOCK_FIELDS.json').read_text());ja=json.loads((packet/'translations/JA_RENDER_FIELDS-630.json').read_text())
ref=next(f for f in orig['fields'] if f['key']=='manpage_intro')
a=Read(markdown.markdown(manual['manpage_intro'],extensions=[EscapeHtml()]));b=Read(ref['html'])
assert markdown.__version__=='3.10.2'
assert a.tags==b.tags
assert ''.join(a.text).split()==''.join(b.text).split()
f=next(f for f in ja['fields'] if f['key']=='manpage_intro');c=Read(f['html'])
for word in ['<options>','<filter>','<files>']:assert word in ''.join(c.text)
assert not set(['options','filter','files'])&set(c.tags)
result={'status':'passed','fixedUpstreamRenderParity':True,'placeholderTextExact':['<options>','<filter>','<files>'],'unexpectedPlaceholderDOMNodes':0,'markdownVersion':markdown.__version__,'finalContentReview':'pending','releaseReady':False}
with (root/'docs/notes/project-expansion/runs/evidence/2026-10-04-630/MANPAGE_CHECK.json').open('x')as out:json.dump(result,out,indent=2);out.write('\n')
print(result)
