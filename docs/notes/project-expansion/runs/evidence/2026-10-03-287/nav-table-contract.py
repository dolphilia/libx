import pathlib,json,html,datetime
from html.parser import HTMLParser
app=pathlib.Path('/private/tmp/libx-wren-trial-20261003-283/apps/wren-trial');order=json.loads((app/'src/lib/wren-page-order.json').read_text());dist=app/'dist';ev=pathlib.Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-03-287');base=ev.parent
class P(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.links=[];self.cells=[];self.rows=[];self.cell=None;self.row=None
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='a' and d.get('rel') in ['prev','next']:self.links.append({'rel':d['rel'],'href':d['href']})
  if t=='tr':self.row=[]
  if t in ['td','th']:self.cell=[]
 def handle_data(self,d):
  if self.cell is not None:self.cell.append(d)
 def handle_endtag(self,t):
  if t in ['td','th']:
   val=' '.join(''.join(self.cell).split());self.row.append((t,val));self.cell=None
  if t=='tr':self.rows.append(self.row);self.row=None
rows=[];edges=0
for i,key in enumerate(order):
 path=dist/'v0-4-0/en'/key/'index.html';p=P();p.feed(path.read_text());expected=[]
 for rel,idx in [('prev',i-1),('next',i+1)]:
  if 0<=idx<len(order):expected.append({'rel':rel,'href':'/docs/wren-trial/v0-4-0/en/'+order[idx]+'/'})
 assert sorted(p.links,key=lambda x:x['rel'])==sorted(expected,key=lambda x:x['rel']),key
 edges+=len(p.links);rows.append({'page':key,'links':p.links})
tables=[]
for f in (base/'2026-10-03-282/rendered').rglob('*.html'):
 before=P();before.feed(f.read_text())
 if not before.rows:continue
 rel=f.relative_to(base/'2026-10-03-282/rendered').as_posix();key='overview' if rel=='index.html' else rel.removesuffix('.html').removesuffix('/index');after=P();after.feed((dist/'v0-4-0/en/docs'/key/'index.html').read_text());assert before.rows==after.rows,rel;tables.append({'source':rel,'rows':len(before.rows),'cells':sum(len(x) for x in before.rows),'allCellsAndHeaderKindsExact':True})
(ev/'NAV_TABLE_CONTRACT.json').write_text(json.dumps({'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'passed','pages':len(rows),'directedAdjacentEdges':edges,'rows':rows,'tables':tables,'scope':'Every42page exact prev/next manifest neighbors, preserving fullpath, onelocale/version. All source table rows/header-vs-data cell kinds and normalized cell text equal actual Astro output; no tables excluded.'},indent=2)+'\n');print(json.dumps({'pages':len(rows),'edges':edges,'tables':tables}))
