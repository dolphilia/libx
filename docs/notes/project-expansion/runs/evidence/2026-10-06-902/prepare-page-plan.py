from pathlib import Path
from bs4 import BeautifulSoup
import copy,json,re,datetime
D=Path('docs/notes/project-expansion/runs/evidence/2026-10-06-901/next-candidate');E=D.parent.parent/'2026-10-06-902';s=BeautifulSoup((D/'grep-3.12-derived.html').read_text(),'html.parser');ch=s.select('.chapter-level-extent')[:4]
slugs=['01-introduction','02-invoking','03-command-line-options','04-generic-program-information','05-matching-control','06-general-output-control','07-output-line-prefix-control','08-context-line-control','09-file-directory-selection','10-other-options','11-environment-variables','12-exit-status','13-grep-programs','14-regular-expressions','15-fundamental-structure','16-character-classes-bracket-expressions','17-special-backslash-expressions','18-anchoring','19-back-references-subexpressions','20-basic-extended-regular-expressions','21-problematic-regular-expressions','22-character-encoding','23-non-ascii-non-printable','24-usage'];nodes=[];rows=[]
for c in ch:
 for n in [c]+c.select('.section-level-extent,.subsection-level-extent'):
  x=copy.deepcopy(n)
  for child in list(x.children):
   if getattr(child,'name',None)=='div' and any(k in child.get('class',[]) for k in ['section-level-extent','subsection-level-extent']):child.decompose()
  for a in x.select('a.copiable-link'):a.decompose()
  h=x.find(re.compile('^h[234]$'));assert h
  i=len(rows);rows.append({'slug':slugs[i],'sourceNode':n['id'],'titleEN':h.get_text(' ',strip=True),'pre':len(x.select('pre')),'batch':1 if i<10 else 2 if i<17 else 3});nodes.append(x)
assert len(rows)==24;norm=lambda x:re.sub(r'\s+',' ',x).strip();assert norm(' '.join(c.get_text().replace(' ¶','') for c in ch))==norm(' '.join(n.get_text() for n in nodes));assert sum(r['pre'] for r in rows)==29
v={'status':'passed-complete-page-boundaries','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'wholeFourChaptersTextAndOrderExact':True,'pageCount':24,'originalPre':29,'pages':rows,'batchPages':[10,7,7],'formalTranslationReview':'pending'}
with (E/'PAGE_PLAN.json').open('x') as f:json.dump(v,f,ensure_ascii=False,indent=2);f.write('\n')
print('902 whole four chapters ->24parent-preamble/sections,order/text/pre exact;formaltranslation pending')
