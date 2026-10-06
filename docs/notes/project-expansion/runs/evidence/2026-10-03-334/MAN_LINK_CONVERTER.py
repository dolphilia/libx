import pathlib,re,json,html
root=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-03-334')
p=root/'markdown/manual.md';s=p.read_text();parts=re.split(r'(<[^>]+>)',s);links=[];in_a=0
for i,part in enumerate(parts):
 if part.startswith('<'):
  if re.match(r'<a\b',part):in_a+=1
  if re.match(r'</a\s*>',part):in_a-=1
  continue
 if in_a:continue
 def link(m):
  label=m[0];href='../api/' if label=='zlib.h' else label
  links.append({'label':label,'href':href});return '<a href="'+html.escape(href,quote=True)+'">'+label+'</a>'
 parts[i]=re.sub(r'https?://[^\s<>]+|\bzlib\.h\b',link,part)
assert in_a==0
p.write_text(''.join(parts))
(root/'MAN_LINK_MAP.json').write_text(json.dumps(links,indent=2)+'\n')
print(json.dumps({'manLinks':len(links)}))
