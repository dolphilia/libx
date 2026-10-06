#!/usr/bin/env python3
"""Deterministically import the complete fixed cJSON usage guide and notices.
Use Markdown==3.7 from requirements-cjson.txt; no network, LLM or source execution.
"""
from pathlib import Path
from html.parser import HTMLParser
import argparse,hashlib,html,json,re
import markdown
p=argparse.ArgumentParser();p.add_argument('--root',type=Path,default=Path(__file__).resolve().parents[2]);p.add_argument('--check',action='store_true');a=p.parse_args();root=a.root.resolve();notes=root/'docs/notes/document-import/cjson/v1-7-19';app=root/'apps/cjson';lock=json.loads((notes/'SOURCE_LOCK.json').read_text());assert markdown.__version__=='3.7',markdown.__version__
for rec in lock['inputs']:assert hashlib.sha256((notes/'source'/rec['path']).read_bytes()).hexdigest()==rec['sha256'],rec['path']
commit=lock['commit'];base=f'https://github.com/DaveGamble/cJSON/blob/{commit}/';mapping=json.loads((notes/'CONTENT_MAP.json').read_text());outputs={};summary=[]
annotation='''<aside class="libx-source-notes" aria-label="libx source notes">
<h2 id="libx-source-notes">libx source notes</h2>
<p>The complete upstream guide above is retained. The following editorial notes distinguish fixed-version discrepancies from the original text.</p>
<ul>
<li>The README states CMake 2.8.5 or newer. The same release's <a href="'''+base+'''CMakeLists.txt#L2">CMakeLists.txt, line 2</a> requires CMake 3.0. Check the fixed build configuration when building version 1.7.19.</li>
<li>The Objects paragraph names <code>cJSON_AddItemReferenceToArray</code>. The fixed <a href="'''+base+'''cJSON.h#L235-L236">header, lines 235–236</a> separately declares <code>cJSON_AddItemReferenceToObject(cJSON *object, const char *string, cJSON *item)</code>, including the object member key. The original paragraph is preserved.</li>
<li>The examples are reproduced as published, not executed or validated here as complete error-handling recipes. Static review of <code>create_monitor_with_helpers</code> shows that a newly created resolution is attached to the parent array only after both number additions. If an addition fails first, deleting the monitor does not free that unattached object. The examples also omit checks for some item-addition return values. Review allocation failures and ownership before using them in production.</li>
</ul>
</aside>'''
class P(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.ids=[];self.links=[];self.pres=[];self.cur=None
 def handle_starttag(self,t,a):
  d=dict(a)
  if 'id' in d:self.ids.append(d['id'])
  if t=='a':self.links.append(d.get('href',''))
  if t=='pre':self.cur=[]
 def handle_data(self,d):
  if self.cur is not None:self.cur.append(d)
 def handle_endtag(self,t):
  if t=='pre':self.pres.append(''.join(self.cur));self.cur=None
for rec in mapping['pages']:
 name=rec['source'];source=(notes/'source'/name).read_text();renderSource=source
 if name=='CONTRIBUTORS.md':
  for label in ['Original Author:', 'Current Maintainer:', 'Contributors:']:
   renderSource,count=re.subn(r'(?m)^'+re.escape(label)+r'[ \t]*\n',label+'\n\n',renderSource);assert count==1,label
 body=markdown.markdown(renderSource,extensions=['fenced_code','toc']) if name!='LICENSE' else '<h1 id="license">License</h1><pre>'+html.escape(source)+'</pre>'
 if name=='README.md':
  assert body.count('href="#Vcpkg"')==1;body=body.replace('href="#Vcpkg"','href="#vcpkg"');assert body.count('href="CONTRIBUTORS.md"')==1;body=body.replace('href="CONTRIBUTORS.md"','href="/docs/cjson/v1-7-19/en/02-license/02-contributors/"')
 parsed=P();parsed.feed(body);expect=[b+'\n' for _,b in re.findall(r'^```([^\n]*)\n([\s\S]*?)\n```\s*$',source,re.M)] if name!='LICENSE' else [source];assert parsed.pres==expect
 for link in parsed.links:
  if link.startswith('#'):assert link[1:] in parsed.ids,link
 sourceId={'README.md':'cjson-readme','LICENSE':'cjson-license','CONTRIBUTORS.md':'cjson-contributors'}[name];front='---\ntitle: '+json.dumps(rec['title']['en'])+'\nlicenseSource: '+sourceId+'\ntoc:\n  maxLevel: 6\n---\n\n';article=front+'<div class="cjson-upstream-document">\n'+body+'\n</div>\n'+(annotation+'\n' if name=='README.md' else '')
 outputs[app/'src/content/docs/v1-7-19/en'/rec['page']]=article.encode();outputs[notes/'generated/canonical'/rec['page']]=article.encode();outputs[notes/'generated/source-fragments'/(name+'.html')]=(body+'\n').encode();summary.append({'source':name,'page':rec['page'],'sha256':hashlib.sha256(article.encode()).hexdigest(),'originalHeadingCount':len(parsed.ids),'preBlocks':len(expect),'originalCodeOrNoticeExact':True,'annotationSeparate':name=='README.md'})
outputs[app/'public/assets/cJSON-LICENSE.txt']=(notes/'source/LICENSE').read_bytes();outputs[notes/'generated/assets/cJSON-LICENSE.txt']=(notes/'source/LICENSE').read_bytes();outputs[notes/'generated/GENERATION.json']=(json.dumps({'generator':'scripts/importers/import-cjson-1.7.19.py','markdownVersion':markdown.__version__,'fixedCommit':commit,'pages':summary,'repairs':mapping['transformations'],'sourceExecution':False,'translationGenerated':False,'scope':'Full fixed README/NOTICE/contributor list with editorial notes separated from upstream body.'},ensure_ascii=False,indent=2)+'\n').encode()
for out,b in outputs.items():
 if a.check:assert out.exists() and out.read_bytes()==b,str(out)
 else:out.parent.mkdir(parents=True,exist_ok=True);out.write_bytes(b)
print(json.dumps({'mode':'check' if a.check else 'write','outputs':len(outputs),'pages':summary},ensure_ascii=False))
