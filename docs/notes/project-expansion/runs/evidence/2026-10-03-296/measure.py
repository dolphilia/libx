from pathlib import Path
from html.parser import HTMLParser
import re,json,hashlib,datetime
root=Path('/Users/dolphilia/github/libx');ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-03-296';base=ev.parent
class Measure(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.prose=[];self.code=[];self.pre=0;self.links=[];self.headings=0;self.images=0;self.tables=0
 def handle_starttag(self,t,a):
  if t=='pre':self.pre+=1
  if t=='a':self.links.append(dict(a).get('href',''))
  if re.fullmatch('h[1-6]',t):self.headings+=1
  if t=='img':self.images+=1
  if t=='table':self.tables+=1
 def handle_endtag(self,t):
  if t=='pre':self.pre-=1
 def handle_data(self,d):(self.code if self.pre else self.prose).append(d)
regex=r"[A-Za-z0-9_]+(?:['’.-][A-Za-z0-9_]+)*";records=[]
for n in ['guide','license','contributors']:
 p=base/'2026-10-03-294/rendered'/f'{n}.html';m=Measure();m.feed(p.read_text());prose=''.join(m.prose);code=''.join(m.code)
 records.append({'page':n,'inputSha256':hashlib.sha256(p.read_bytes()).hexdigest(),'outsidePreTokens':len(re.findall(regex,prose)),'preTokens':len(re.findall(regex,code)),'proseCharacters':len(prose),'preCharacters':len(code),'headings':m.headings,'links':len(m.links),'externalLinks':sum(u.startswith(('http:','https:')) for u in m.links),'images':m.images,'tables':m.tables,'identifiersFollowedByParen':sorted(set(re.findall(r'\bcJSON_[A-Za-z0-9_]+(?=\s*\()',prose+code)))})
header=(base/'2026-10-03-292/cJSON.h').read_text();declared=set(re.findall(r'^CJSON_PUBLIC\([^\n]*?\)\s+(cJSON_[A-Za-z0-9_]+)\s*\(',header,re.M));guide=(base/'2026-10-03-294/rendered/guide.html').read_text();mentions=set(re.findall(r'\bcJSON_[A-Za-z0-9_]+',guide));guideApis=sorted(declared & mentions)
d={'headerDeclaredFunctions':len(declared),'guideMentionedDeclaredFunctions':guideApis,'guideMentionedDeclaredFunctionCount':len(guideApis),'apiMeasurementScope':'Intersection of fixed header CJSON_PUBLIC function declarations with identifiers anywhere in full guide HTML; not all API coverage or occurrence semantics. ArrayForEach is macro and excluded from declared-function count.', 'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'records':records,'totalRenderedTokens':sum(x['outsidePreTokens']+x['preTokens'] for x in records),'method':'Decoded HTML text; includes headings/TOC and inline identifiers; pre separate. LICENSE is preformatted prose, not executable code. Not model tokenizer, not API reference coverage. No invented split of API handbook.','scope':'Entire README usage guide, entire LICENSE, entire CONTRIBUTORS; no chapter removal','workload':{'judgment':'pass','basis':'3 whole documents; guide32headings/15exact code blocks; tables/images absent; full conversion trial already built; license/contributor preserve; below30000words including literal code. Source discrepancies require explicit annotation.','owner':'Current Codex, localLLM notused; contentreview and mechanicalchecks separate','initialEstimateHours':{'sourceLockImporterAndMetadata':[1,2],'fullJapaneseTranslationAndGlossary':[2,4],'separateWholeContentReviewAndCorrections':[2,4],'mechanicalBuildNativeIntegrationAndPublication':[2,4],'total':[7,14]},'estimateStatus':'Planning estimate, not observed duration or promised SLA','updateEstimateHours':[1,4],'updateAssumption':'Small README update within same scope; all changed paragraphs/examples retranslate and review; fixed inputs and all affected tests. Larger release/scope change reestimate; no automatic completion.','risks':['README minimum CMake version differs from fixed buildconfig','Objects API identifier differs from fixedheader','Helper allocation-failure ownership example risk; annotate source and static-review limit','Dependency cache can require officialregistry scopeddownload']}}
(ev/'MEASUREMENT_WORKLOAD.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:d[k] for k in ['records','totalRenderedTokens']},ensure_ascii=False))
