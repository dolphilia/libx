from pathlib import Path
from bs4 import BeautifulSoup
import json,re,copy,hashlib,datetime
N=Path(__file__).resolve().parent;R=N.parents[4];E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-922';s=BeautifulSoup((N/'source/derived-manual.html').read_text(),'html.parser');h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();norm=lambda s:' '.join(s.split());names=[('Top','01-overview-notice'),('Overview','02-overview'),('Sample','03-sample-output'),('Invoking-gzip','04-invoking-gzip'),('Advanced-usage','05-advanced-usage'),('Environment','06-environment'),('Tapes','07-tapes'),('Problems','08-reporting-bugs')];nodes={};owners={}
for sourceID,slug in names:
 x=copy.copy(s.select_one('div#'+sourceID));assert x
 if sourceID=='Top':
  for z in x.select('.chapter-level-extent,.appendix-level-extent'):z.decompose()
 for z in x.select('.nav-panel,.toc'):z.decompose()
 for z in x.select('.copiable-link'):z.decompose()
 nodes[sourceID]=x
 for z in [x,*x.select('[id]')]:
  if z.get('id'):owners[z['id']]=slug
rows=[]
for sourceID,slug in names:
 x=nodes[sourceID];originalText=norm(x.get_text());pre=[z.get_text()for z in x.select('pre')]
 for a in x.select('a[href]'):
  href=a['href']
  if href.startswith('#'):
   anchor=href[1:];a['href']='/docs/gnu-gzip/v1-15/en/01-guide/'+owners[anchor]+'/#'+anchor if anchor in owners else '/docs/gnu-gzip/source/v1-15/manual.html#'+anchor
 body='<div class="gnu-gzip-original-content">\n'+str(x)+'\n</div>\n'
 for z in x.select('pre'):body=body.replace(str(z),str(z).replace('\n','&#10;').replace('\t','&#9;'),1)
 out=N/'drafts/en'/(slug+'.body.html');out.parent.mkdir(parents=True,exist_ok=True);out.write_text(body);c=BeautifulSoup(body,'html.parser');assert norm(c.get_text())==originalText;assert[z.get_text()for z in c.select('pre')]==pre;noPre=copy.copy(x);[z.decompose()for z in noPre.select('pre')]
 rows.append({'sourceID':sourceID,'slug':slug,'titleEN':x.find(re.compile('^h[1-6]$')).get_text(' ',strip=True),'bodyPath':'drafts/en/'+slug+'.body.html','bodySHA256':h(out),'approxWordsExceptPre':len(re.findall(r'\S+',noPre.get_text(' ',strip=True))),'pre':len(pre),'VAR':len(x.select('var')),'tables':len(x.select('table'))})
license=s.select_one('#GNU-Free-Documentation-License');p=N/'drafts/reference/gfdl.body.html';p.parent.mkdir(parents=True,exist_ok=True);p.write_text(str(license)+'\n')
acq=json.loads((E/'ACQUISITION_DRAFT.json').read_text());manifest=acq['originalFiles']+[{'path':'source/gzip-1.15.tar.xz','sha256':h(N/'source/gzip-1.15.tar.xz'),'bytes':(N/'source/gzip-1.15.tar.xz').stat().st_size},{'path':'source/derived-manual.html','sha256':h(N/'source/derived-manual.html'),'bytes':(N/'source/derived-manual.html').stat().st_size}]
(N/'SOURCE_MANIFEST_DRAFT.json').write_text(json.dumps({'status':'saved-unadopted-fixedsource','files':manifest,'originalInputs':11,'limits':'OriginalGFDL/noInvariant/noCoverTexts explicit;Texinfo7.1 derivedHTML;original11/archive unchanged;signatureunverified.'},indent=2)+'\n')
d={'schemaVersion':1,'status':'saved-unreviewed-candidate-English-draft','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sourceArchive':{'url':acq['url'],'path':'source/gzip-1.15.tar.xz','sha256':acq['archiveSHA256']},'version':'1.15','documentDate':'2026-01-03','releaseDate':'2026-09-20','author':'Jean-loup Gailly','publisher':'Free Software Foundation','documentLicense':'GFDL-1.3-or-later/noInvariantSections/noCoverTexts','proposedScope':{'TopAndAllSevenChapters':True,'guides':8,'approxWordsExceptPre':sum(r['approxWordsExceptPre']for r in rows),'pre':sum(r['pre']for r in rows),'VAR':sum(r['VAR']for r in rows),'rows':rows,'EnglishOnlyLicense':{'path':'drafts/reference/gfdl.body.html','sha256':h(p)},'Index':'fixed whole original HTML/Info/Texinfo archive reference'},'formalOperation':False,'reviewedPages':0,'JapaneseDrafts':0,'limits':'Candidate drafts only. No full technical source audit/program execution; online1.14 is not input. All7 complete adopted chapters; no term/option/example omission.'};(N/'CANDIDATE_DRAFT.json').write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n');(E/'SCOPE_DRAFT.json').write_text(json.dumps(d['proposedScope'],ensure_ascii=False,indent=2)+'\n');print({k:v for k,v in d['proposedScope'].items()if k!='rows'})
