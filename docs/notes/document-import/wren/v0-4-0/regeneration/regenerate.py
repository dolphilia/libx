from pathlib import Path
import json, re, html, posixpath, hashlib, sys
from html.parser import HTMLParser
B=Path(__file__).resolve().parent.parent
O=Path(sys.argv[sys.argv.index('--output')+1]).resolve() if '--output' in sys.argv else None
routes=json.loads((B/'regeneration/ROUTES.json').read_text()); rows=routes['guides']+routes['references']; contexts=json.loads((B/'regeneration/CONTEXT.json').read_text())
lookup={x['key']:x for x in rows}; prefix='/docs/wren/v0-4-0/en/'
class Headings(HTMLParser):
 def __init__(self):super().__init__();self.rows=[];self.current=None
 def handle_starttag(self,t,attrs):
  a=dict(attrs)
  if re.fullmatch('h[1-6]',t):self.current={'depth':int(t[1]),'slug':a.get('id'),'text':''}
  if self.current is not None and t=='a' and a.get('name'):self.current['slug']=a['name']
 def handle_data(self,s):
  if self.current is not None:self.current['text']+=s
 def handle_endtag(self,t):
  if re.fullmatch('h[1-6]',t) and self.current is not None:
   if self.current['slug']:self.current['text']=self.current['text'].removesuffix('#').strip();self.rows.append(self.current)
   self.current=None
headings={}
for row in rows:
 p=B/row['input']; assert hashlib.sha256(p.read_bytes()).hexdigest()==row['inputSha256']
 if row.get('wholeCode'):body='<pre><code>'+html.escape(p.read_text())+'</code></pre>'
 else:
  body=p.read_text()
  if row['key']=='modules/index.html':
   assert body.count('[embedding in applications][embedding]')==1
   body=body.replace('[embedding in applications][embedding]','<a href="../embedding/">embedding in applications</a>')
  def rewrite(m):
   url=html.unescape(m.group(1))
   if re.match(r'^[a-zA-Z][\w+.-]*:',url) or url.startswith(('//','#')):return m.group(0)
   target,_,frag=url.partition('#'); target=posixpath.normpath(posixpath.join(posixpath.dirname(row['key']),target)).lstrip('/')
   if not target.endswith('.html'):target=target.rstrip('/')+'/index.html'
   target=target.lstrip('/');target=routes['aliases'].get(target,target);assert target in lookup,(row['key'],url,target)
   dest=prefix+lookup[target]['id'].removesuffix('.md')+'/'+('#'+frag if frag else '')
   return 'href="'+html.escape(dest,quote=True)+'"'
  body=re.sub(r'href="([^"]*)"',rewrite,body)
 body=re.sub(r'<table\b[^>]*>.*?</table>',lambda m:'<div class="wren-table-scroll">'+m.group(0)+'</div>',body,flags=re.S)
 # Preserve every rawpre whitespace/ASCII quote across Astro smart typography.
 def encode_pre(m):
  opening,inside,closing=m.groups()
  wrapped=re.fullmatch(r'<code>(.*)</code>',inside,flags=re.S)
  if wrapped:inside=wrapped.group(1)
  # Saved353 pre blocks have plaintext, except12 outer code containers.
  # Escape literal C header angles and unknown ampersand identifiers, not just LF.
  assert '<span' not in inside
  inside='<code>'+html.escape(html.unescape(inside))+'</code>'
  return (opening+inside+closing).replace('\n','&#10;')
 body=re.sub(r'(<pre\b[^>]*>)(.*?)(</pre>)',encode_pre,body,flags=re.S)
 h=Headings();h.feed(body);headings['v0-4-0/en/'+row['id'].removesuffix('.md')]=h.rows
 fm='---\ntitle: '+json.dumps(row['titleEN'],ensure_ascii=False)+'\ndocumentId: '+json.dumps('wren:'+row['key'])+'\norder: '+str(row['order'])+'\nlicenseSource: "wren-fixed"\ntoc: { maxLevel: 6 }\ndocumentContext: '+json.dumps(contexts,ensure_ascii=False)+'\n---\n'
 text=fm+'<div class="wren-document">\n<h1 id="page-title">'+html.escape(row['titleEN'])+'</h1>\n'+body+'\n</div>\n'
 out=(O/'en'/row['id']) if O else (B/'canonical/en'/row['id']);out.parent.mkdir(parents=True,exist_ok=True)
 if '--check' in sys.argv:assert out.read_text()==text,('replay mismatch',row['id'])
 else:out.write_text(text)
dest=(O/'document-headings.json') if O else (B/'regeneration/document-headings.json');text=json.dumps(headings,ensure_ascii=False,indent=2)+'\n'
if '--check' in sys.argv:assert dest.read_text()==text
else:dest.write_text(text)
print('42 English originals replay '+('verified' if '--check' in sys.argv else 'generated')+'; Japanese translation not claimed')
