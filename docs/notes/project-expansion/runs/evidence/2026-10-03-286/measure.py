import pathlib,json,re,datetime,hashlib
from html.parser import HTMLParser
root=pathlib.Path('/Users/dolphilia/github/libx');base=root/'docs/notes/project-expansion/runs/evidence';ev=base/'2026-10-03-286'
class Measure(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.pre=0;self.anchor=0;self.prose=[];self.code=[];self.pres=0;self.headings=0;self.links=0;self.images=0;self.tables=0;self.rows=0;self.cells=0;self.apiHeads=0
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='pre':self.pre+=1;self.pres+=1
  if t=='a':
   if 'header-anchor' in d.get('class',''):self.anchor+=1
   elif d.get('href'):self.links+=1
  if t in ['h1','h2','h3','h4','h5','h6']:self.headings+=1
  if t=='img':self.images+=1
  if t=='table':self.tables+=1
  if t=='tr':self.rows+=1
  if t in ['td','th']:self.cells+=1
 def handle_endtag(self,t):
  if t=='pre':self.pre-=1;self.code.append('\n')
  if t=='a' and self.anchor:self.anchor-=1
  if t in ['p','li','h1','h2','h3','h4','h5','h6','td','th','div']:self.prose.append(' ')
 def handle_data(self,d):
  if self.pre:self.code.append(d)
  elif not self.anchor:self.prose.append(d)
words=lambda s:len(re.findall(r"[A-Za-z0-9_]+(?:['’.-][A-Za-z0-9_]+)*",s))
rows=[]
for p in sorted((base/'2026-10-03-282/rendered').rglob('*.html')):
 rel=p.relative_to(base/'2026-10-03-282/rendered').as_posix();m=Measure();m.feed(p.read_text());prose=''.join(m.prose);code=''.join(m.code);source=base/'2026-10-03-279/fixed-source/doc/site'/rel.replace('.html','.markdown');raw=source.read_text();rows.append({'source':str(source.relative_to(root)),'sourceSha256':hashlib.sha256(source.read_bytes()).hexdigest(),'proseWords':words(prose),'codeWordTokens':words(code),'visibleWordTokens':words(prose)+words(code),'sourceWhitespaceTokens':len(raw.split()),'codeWhitespaceTokens':len(code.split()),'codeBlocks':m.pres,'headings':m.headings,'links':m.links,'images':m.images,'tables':m.tables,'tableRows':m.rows,'tableCells':m.cells,'apiMemberHeadings':len(re.findall(r'^### ',raw,re.M)) if rel.startswith('modules/') else 0})
keys=['proseWords','codeWordTokens','visibleWordTokens','sourceWhitespaceTokens','codeWhitespaceTokens','codeBlocks','headings','links','images','tables','tableRows','tableCells','apiMemberHeadings'];totals={k:sum(x[k] for x in rows) for k in keys}
result={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'measured-workload-decision-pending','bodyPages':len(rows),'scope':'All41body pages; no snippets/chapters dropped. Alias isnotbody andnotice measuredseparately.','method':{'prose':'Rendered282 source-equivalent article visible text outsidepre, includinginlinecode/list/table/headings; header-anchor # excluded asnavigationdecoration','tokenRegex':"[A-Za-z0-9_]+(?:['’.-][A-Za-z0-9_]+)*",'code':'All353pre kept andcountedseparately; codeword tokens excludeoperators butsourceWhitespaceTokens conservative includesmarkup/operators. Both indicators retained.','apiMemberHeadings':'Every ### heading inmoduleAPI files, structuralestimate notindividualoverloads','limits':'Rendered text token method ismeasurement, not semanticreview. Conservative source>30000 still requiresseparateworkload decision.'},'totals':totals,'files':rows,'sourceConservativeOver30000':totals['sourceWhitespaceTokens']>30000,'renderedIncludingCodeOver30000':totals['visibleWordTokens']>30000,'preliminary279Correction':'42sources includedcore/index redirect. It isnotbody; definitive41page scope now measured. Conservative methoddifference recorded ratherthan loweringthreshold.'}
(ev/'MEASUREMENT.json').write_text(json.dumps(result,indent=2)+'\n');print(json.dumps({'bodyPages':len(rows),'totals':totals}))
