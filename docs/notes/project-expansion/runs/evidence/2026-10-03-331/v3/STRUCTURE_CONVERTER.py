import pathlib,re,json,html,hashlib,shutil
ROOT=pathlib.Path('/Users/dolphilia/github/libx');D=ROOT/'docs/notes/project-expansion/runs/evidence';OUT=D/'2026-10-03-331/v3';OUT.mkdir(exist_ok=False);MD=OUT/'markdown';MD.mkdir()
SHA=lambda x:hashlib.sha256(x.encode()).hexdigest()
expected=json.loads((D/'2026-10-03-330/EXPECTED_BLOCKS.json').read_text())
blocks=json.loads((D/'2026-10-03-328/v3/zlib.h.blocks.json').read_text())
inventory=json.loads((D/'2026-10-03-330/API_DECLARATION_INVENTORY_V3.json').read_text())['inventories'][0]
symbols=set(inventory['uniqueSymbols']);symbols.update(['deflateInit','inflateInit','deflateInit2','inflateInit2','inflateBackInit'])
anchors={};names_by_block={};seen=set()
proto=re.compile(r'\bZEXTERN\b[^;]*?\bZEXPORT(?:VA)?\s+(\w+)\s*\([^;]*?;',re.S)
for b in blocks:
 names=[]
 for m in proto.finditer(b['display']):
  n=m.group(1)
  if n not in symbols:continue
  if n not in names:names.append(n)
  if n not in anchors:anchors[n]=b['index']
 names_by_block[b['index']]=names
for n in ['z_stream','gz_header','alloc_func','free_func','in_func','out_func','gzFile']:
 for b in blocks:
  if b['kind']=='code' and re.search(r'\btypedef\b[\s\S]*?\b'+n+r'\b',b['display']):anchors[n]=b['index'];break
links=[]
def linked(s,origin):
 # Text labels remain exact; link destinations only refer to known anchors.
 token=re.compile(r'https?://[^\s<>]+|\bzlib\.h\b|\bzconf\.h\b|\b(?:'+ '|'.join(sorted(anchors,key=len,reverse=True))+r')\b')
 out=[];pos=0
 for m in token.finditer(s):
  n=m.group();out.append(html.escape(s[pos:m.start()]));tail=s[m.end():];before=s[max(0,m.start()-2):m.start()];
  common={'deflate','inflate','compress','compress2','uncompress','uncompress2','adler32','crc32'}
  if n in anchors and (tail.startswith(('.c','.h')) or before=='->' or (n in common and not tail.startswith('(') and not re.match(r'\s+(?:returns|return|function|routine)\b',tail))):
   out.append(html.escape(n));pos=m.end();continue
  target=n if n.startswith(('http://','https://')) else 'api/#'+n if n in anchors else 'api/' if n=='zlib.h' else 'zconf/'
  # Relative links are sibling trial routes, not nested under current page.
  if not n.startswith(('http://','https://')):target='../'+target
  out.append('<a href="'+html.escape(target,quote=True)+'">'+html.escape(n)+'</a>');links.append({'origin':origin,'label':n,'href':target});pos=m.end()
 out.append(html.escape(s[pos:]));return ''.join(out)
def prose(s,origin):return '<div style="white-space:pre-wrap;overflow-wrap:anywhere">'+linked(s,origin)+'</div>'
def code(s):return '<pre><code>'+html.escape(s)+'</code></pre>'
sections={'constants','basic functions','Advanced functions','utility functions','gzip file access functions','checksum functions',"various hacks, don't look :)",'undocumented functions'}
records=[];body=[];table_rows=0
for b in blocks:
 i=b['index'];s=b['display'];names=names_by_block[i];editorial=[]
 if s.strip() in sections:editorial.append('<h2 id="section-'+str(i)+'" data-editorial="navigation">'+html.escape(s.strip())+'</h2>')
 if names:editorial.append('<h3 id="nav-'+str(i)+'" data-editorial="navigation">'+html.escape(names[0])+'</h3>')
 for n,index in anchors.items():
  if index==i:editorial.append('<a id="'+n+'" data-editorial="anchor"></a>')
 pieces=[]
 if b['kind']=='code':pieces=[('code',s)]
 else:
  cursor=0
  for m in proto.finditer(s):
   if m.group(1) not in symbols:continue
   if m.start()>cursor:pieces.append(('prose',s[cursor:m.start()]))
   pieces.append(('code',s[m.start():m.end()]));cursor=m.end()
  if cursor<len(s):pieces.append(('prose',s[cursor:]))
 assert ''.join(p for _,p in pieces)==s
 out=[]
 for kind,p in pieces:
  if kind=='code':out.append(code(p));continue
  # The two source checksum examples end their comment block.
  sample=p.find('   Usage example:\n')
  if sample>=0:
   split=p.index('\n',sample)+1;out.append(prose(p[:split],'api'));out.append(code(p[split:]));continue
  if 'Type sizes, two bits each' in p:
   # Preserve each original line exactly inside table cells. No new labels
   # or inferred fields; continuation lines stay on their original row.
   lines=p.splitlines(keepends=True);j=0
   while j<len(lines):
    if re.match(r'^\s*\d+(?:[.,-]\d+)*:',lines[j]):
     rows=[]
     while j<len(lines) and re.match(r'^\s*\d+(?:[.,-]\d+)*:',lines[j]):
      row=lines[j];j+=1
      while j<len(lines) and lines[j].strip() and not re.match(r'^\s*\d+(?:[.,-]\d+)*:',lines[j]):row+=lines[j];j+=1
      left,right=row.split(':',1);rows.append('<tr><td style="white-space:pre-wrap">'+html.escape(left+':')+'</td><td style="white-space:pre-wrap;overflow-wrap:anywhere">'+linked(right,'api')+'</td></tr>');table_rows+=1
     out.append('<table><tbody>'+''.join(rows)+'</tbody></table>')
    else:out.append(prose(lines[j],'api'));j+=1
   continue
  out.append(prose(p,'api'))
 body.extend(editorial);body.append('<div data-zlib-block="'+str(i)+'">'+''.join(out)+'</div>');records.append({'index':i,'kind':b['kind'],'originalDisplaySha256':SHA(s),'pieces':[{'kind':k,'text':p} for k,p in pieces],'names':names})
prefix='---\ntitle: "zlib 1.3.2 API structure trial"\nlicenseSource: zlib-trial-api\ntoc:\n  maxLevel: 6\n---\n\n<p>Local unpublished conversion trial. Navigation headings are editorial; all source text is retained in source order.</p>\n\n'
(MD/'api.md').write_text(prefix+'<div class="zlib-trial-document" style="overflow-wrap:anywhere">'+''.join(body)+'</div>\n')
for name in ['zconf','license','manual']:shutil.copyfile(D/'2026-10-03-330/markdown'/f'{name}.md',MD/f'{name}.md')
for name in ['readme','faq']:
 parts=expected[name];body=[]
 for i,s in enumerate(parts):
  if name=='faq' and i:
   # A FAQ question may span several source lines. The editorial duplicate
   # heading is outside the unchanged source block.
   question=s.split('\n\n',1)[0].strip();body.append('<h2 data-editorial="navigation" id="faq-'+str(i)+'">'+html.escape(question)+'</h2>')
  body.append('<section data-zlib-block="'+str(i)+'">'+prose(s,name)+'</section>')
 prefix=(D/'2026-10-03-330/markdown'/f'{name}.md').read_text().split('---',2)[1]
 (MD/f'{name}.md').write_text('---'+prefix+'---\n\n<p>Local unpublished conversion trial. Navigation headings are editorial.</p>\n\n<div class="zlib-trial-document" style="overflow-wrap:anywhere">'+''.join(body)+'</div>\n')
(OUT/'EXPECTED_BLOCKS.json').write_text(json.dumps(expected,indent=2)+'\n');(OUT/'PIECE_MAP.json').write_text(json.dumps(records,indent=2)+'\n');(OUT/'ANCHOR_MAP.json').write_text(json.dumps({'anchors':anchors,'links':links,'tableRows':table_rows,'headerSignatureBlocks':sum(bool(r['names']) for r in records),'signaturePieces':sum(p['kind']=='code' for r in records if r['kind']=='comment' for p in r['pieces']),'declaredOnlyInComment':[n for n in anchors if n not in symbols and n not in ['z_stream','gz_header','alloc_func','free_func','in_func','out_func','gzFile']]},indent=2)+'\n')
print(json.dumps({'anchors':len(anchors),'links':len(links),'tableRows':table_rows,'blocks':sum(map(len,expected.values()))}))
