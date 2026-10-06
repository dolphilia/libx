from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,subprocess,re,datetime,copy
E=Path(__file__).parent;P=Path('/private/tmp/libx-gnu-make-reevaluation-880');raw=(P/'manual.html').read_bytes();s=BeautifulSoup(raw,'html.parser');results=[]
for id in ['Overview','Introduction','Makefiles']:
 node=copy.deepcopy(s.select_one('#'+id));assert node and 'chapter-level-extent' in node.get('class',[])
 # Remove only redundant Texinfo heading pilcrow selflinks; preserve ordinary source links/code.
 for a in node.select('a.copiable-link'):assert a.get_text()==' ¶';a.decompose()
 for a in node.select('a[href]'):
  if a['href'].startswith('#'):a['href']='/docs/gnu-make/source/v4-4-1/manual.html'+a['href']
 html=P/(id+'.html');html.write_text(str(node));md=P/(id+'.md')
 conversion=copy.deepcopy(node)
 for pre in conversion.select('pre'):pre.attrs={}
 for code in conversion.select('code,samp'):
  if code.find():code.string=code.get_text()
 staged=P/(id+'-pandoc.html');staged.write_text(str(conversion))
 subprocess.run(['/opt/homebrew/bin/pandoc','-f','html','-t','gfm','--wrap=none',str(staged),'-o',str(md)],check=True)
 results.append({'id':id,'sourceHTML':str(html),'markdown':str(md),'htmlSHA256':hashlib.sha256(html.read_bytes()).hexdigest(),'markdownSHA256':hashlib.sha256(md.read_bytes()).hexdigest(),'words':len(re.findall(r'\b[A-Za-z][A-Za-z0-9_-]*\b',node.get_text())),'codeBlocks':len(node.select('pre')),'headingCount':len(node.select('h2,h3,h4'))})
x={'status':'draft-chapter-conversion','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'fixedGeneratedSHA256':hashlib.sha256(raw).hexdigest(),'converter':'GNU Texinfo7.1 followed by installed Pandoc GFM;no software examples executed','selectedChapters':['1 Overview','2 Introduction','3 Writing Makefiles'],'words':sum(x['words'] for x in results),'scope':'First3 complete chapters;chapters4..16/appendices remain fixed-source static manual andofficial links,not translated/Libx fulltext claim. Generated source fullmanual retained. Each chapter may split into meaning-coherent guide pages for3..6kword batches.','results':results};(E/'CHAPTER_CONVERSION_DRAFT.json').write_text(json.dumps(x,indent=2)+'\n');print(json.dumps(x))
