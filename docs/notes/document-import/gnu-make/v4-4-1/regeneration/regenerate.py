from pathlib import Path
from bs4 import BeautifulSoup
import json,copy,subprocess,hashlib,re,html,shutil
N=Path(__file__).resolve().parents[1];ROOT=N.parents[4];APP=ROOT/'apps/gnu-make';S=N/'source/original';R=N/'regeneration';OUT=N/'canonical/en';F=N/'source/fragments';PUBLIC=APP/'public/source/v4-4-1';h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
assert (APP/'src/config/project.config.jsonc').is_file(),'Create the canonical app in an isolated checkout first; root registration is a later stage'
for item in json.loads((N/'SOURCE_MANIFEST.json').read_text())['files']:
 p=S/item['upstreamPath'];assert h(p)==item['sha256'],str(p)
assert subprocess.check_output(['makeinfo','--version'],text=True).splitlines()[0].endswith('7.1')
assert subprocess.check_output(['pandoc','--version'],text=True).splitlines()[0]=='pandoc 3.8.3'
R.mkdir(exist_ok=True);F.mkdir(exist_ok=True);PUBLIC.mkdir(parents=True,exist_ok=True)
manual=R/'manual.html';subprocess.run(['makeinfo','--html','--no-split','--no-headers','-I',str(S/'doc'),'-o',str(manual),str(S/'doc/make.texi')],check=True);s=BeautifulSoup(manual.read_text(),'html.parser')
shutil.copy2(manual,PUBLIC/'manual.html')
chapters=['Overview','Introduction','Makefiles'];originals={key:copy.deepcopy(s.find(id=key)) for key in chapters}
# Meaning-coherent grouping preserves full sourcechapter sequence. Chapter preamble belongs to its first guide.
def intro(key):
 n=s.new_tag('div',id=key);original=originals[key]
 for c in original.children:
  if getattr(c,'name',None)=='div' and 'section-level-extent' in c.get('class',[]):break
  n.append(copy.deepcopy(c))
 return n
specs=[
 ('01-overview','Overview of make','makeの概要',['Overview']),
 ('02-rules-and-recipes','Rules and recipes','規則とレシピ',['Introduction:preamble','Rule-Introduction']),
 ('03-simple-makefile','A simple makefile','単純なmakefile',['Simple-Makefile']),
 ('04-how-make-works','How make processes a makefile','makeによるmakefileの処理',['How-Make-Works']),
 ('05-simplifying-makefiles','Simplifying makefiles','makefileを簡単にする',['Variables-Simplify','make-Deduces']),
 ('06-combining-and-cleanup','Combining prerequisites and cleanup','依存関係のまとめ方とクリーンアップ',['Combine-By-Prerequisite','Cleanup']),
 ('07-makefile-contents','Makefile contents and line splitting','makefileの内容と行の分割',['Makefiles:preamble','Makefile-Contents']),
 ('08-makefile-names','Makefile names','makefileの名前',['Makefile-Names']),
 ('09-including-makefiles','Including other makefiles','ほかのmakefileの読み込み',['Include']),
 ('10-makefiles-variable','The MAKEFILES variable','MAKEFILES変数',['MAKEFILES-Variable']),
 ('11-remaking-makefiles','Remaking makefiles','makefileの再生成',['Remaking-Makefiles']),
 ('12-overriding-makefiles','Overriding part of another makefile','ほかのmakefileの一部を上書きする',['Overriding-Makefiles']),
 ('13-reading-makefiles','How make reads a makefile','makeによるmakefileの読み込み',['Reading-Makefiles']),
 ('14-parsing-makefiles','How makefiles are parsed','makefileの解析',['Parsing-Makefiles']),
 ('15-secondary-expansion','Secondary expansion','二次展開',['Secondary-Expansion'])]
prepared=[]
for slug,en,ja,ids in specs:
 node=s.new_tag('div');node['class']='gnu-original-content'
 for id in ids:node.append(intro(id.split(':')[0]) if id.endswith(':preamble') else copy.deepcopy(s.find(id=id)))
 beforeText=node.get_text();beforeCode=[p.get_text() for p in node.select('pre')]
 for a in node.select('a.copiable-link'):assert a.get_text()==' ¶';a.decompose()
 # Retain original heading IDs explicitly;PandocGFM otherwise creates newheading IDs.
 for heading in node.select('h1[id],h2[id],h3[id],h4[id],h5[id],h6[id]'):
  anchor=s.new_tag('span',id=heading['id']);heading.insert_before(anchor);del heading['id']
 # Carry complete definitions offootnotes referencedfromthischapter intoitsguide.
 footnotes=[]
 for a in list(node.select('a[href]')):
  if re.fullmatch(r'#FOOT\d+',a['href']):
   id=a['href'][1:];f=s.find(id=id);assert f and f.parent.name=='h5';note=f.parent.find_next_sibling();assert note and note.name=='p';box=s.new_tag('div');box['class']='gnu-source-footnote';box.append(copy.deepcopy(f.parent));box.append(copy.deepcopy(note));node.append(box);footnotes.append({'id':id,'text':note.get_text(),'sourceRef':a.get('id')})
 assert [p.get_text() for p in node.select('pre')]==beforeCode
 prepared.append({'id':'01-guide/'+slug+'.md','titleEN':en,'titleJA':ja,'sourceNodes':ids,'node':node,'footnotes':footnotes})
owners={}
for p in prepared:
 for x in p['node'].select('[id]'):
  assert x['id'] not in owners,x['id'];owners[x['id']]=p['id']
# Verify first3chapter text/code coverage in sourceorder beforeanyMarkdown conversion;footnotes outsidechapters separately tracked.
def norm(t):return re.sub(r'\s+',' ',t).strip()
rawjoined=' '.join(originals[id].get_text() for id in chapters);rejoined=' '.join(p['node'].get_text() for p in prepared)
for p in prepared:
 for f in p['node'].select('.gnu-source-footnote'):f.extract()
coverage=' '.join(p['node'].get_text() for p in prepared)
assert norm(rawjoined.replace(' ¶',''))==norm(coverage)
for p in prepared:
 for foot in p['footnotes']:
  f=s.find(id=foot['id']);box=s.new_tag('div');box['class']='gnu-source-footnote';box.append(copy.deepcopy(f.parent));box.append(copy.deepcopy(f.parent.find_next_sibling()));p['node'].append(box)
origcopyright=next(p for p in s.find(id='Top').find_all('p',recursive=False) if p.get_text().startswith('Copyright'));permission=s.find(id='Top').find('blockquote',recursive=False);fdl=s.find(id='GNU-Free-Documentation-License');assert fdl
header='<section class="gnu-notices" aria-label="Original copyright and modified-guide notices"><h2>Libx GNU Make 4.4.1 Getting Started Guide — Chapters 1–3</h2><p>Original authors: Richard M. Stallman, Roland McGrath, Paul D. Smith. Modification author and publisher: Libx.</p>'+str(origcopyright)+'<p>Copyright © 2026 Libx, for the editing and translation modifications.</p>'+str(permission)+'<p>This modified guide is released under the GNU Free Documentation License, version 1.3 or later, with no Invariant Sections and with the original Front-Cover Text and Back-Cover Text reproduced above. No new Cover Texts or Invariant Sections have been added. The original English license is included below.</p></section>'
history='<section class="gnu-history"><h2>History</h2><p>Original: GNU Make / The GNU Make Manual; Edition 0.77; GNU make 4.4.1; 2023; authors Richard M. Stallman, Roland McGrath, Paul D. Smith; publisher Free Software Foundation. Fixed source: <a href="https://ftp.gnu.org/gnu/make/make-4.4.1.tar.gz">make-4.4.1.tar.gz</a>, SHA-256 <code>dd16fb1d67bfab79a72f5e8390735c49e3e8e70b4945a15ab1f81ddb78658fb3</code>.</p><p>2026: Libx GNU Make 4.4.1 Getting Started Guide — Chapters 1–3 / Libx GNU Make 4.4.1 入門ガイド — 第1〜3章. Modification author and publisher: Libx. Static Markdown conversion, chapter-scoped editing and unofficial Japanese translation. Original notices, Cover Texts and English license retained. Modification date: 2026-10-06. Original source acknowledgements in the selected chapters are preserved.</p><p><a href="/docs/gnu-make/source/v4-4-1/manual.html">Fixed complete original manual / 固定原文マニュアル全体</a> · <a href="/docs/gnu-make/source/v4-4-1/make-4.4.1.tar.gz">Original source archive / 原配布原稿</a> · <a href="https://www.gnu.org/software/make/manual/">Official documentation / 公式文書</a></p></section>'
# Whole originalEnglish license present unchanged on every guide,folded forreadability.
licenseHTML='<details class="gnu-license"><summary>Original English GNU Free Documentation License / 原英語GFDL全文</summary>'+str(fdl)+'</details>'
(R/'NOTICES.html').write_text(header);(R/'HISTORY.html').write_text(history);(R/'GFDL.html').write_text(str(fdl))
results=[]
for p in prepared:
 node=p['node']
 for a in node.select('a[href]'):
  if a['href'].startswith('#'):
   fragment=a['href'][1:];owner=owners.get(fragment);a['href']=('/docs/gnu-make/v4-4-1/en/'+owner.removesuffix('.md')+'/#'+fragment) if owner else ('/docs/gnu-make/source/v4-4-1/manual.html#'+fragment)
 fragment=F/(Path(p['id']).stem+'.html');fragment.write_text(str(node));conversion=copy.deepcopy(node)
 for pre in conversion.select('pre'):pre.attrs={}
 for code in conversion.select('code,samp'):
  if code.find():code.string=code.get_text()
 staged=R/(Path(p['id']).stem+'.pandoc.html');staged.write_text(str(conversion));md=R/(Path(p['id']).stem+'.body.md');subprocess.run(['pandoc','-f','html','-t','gfm','--wrap=none',str(staged),'-o',str(md)],check=True)
 front={'title':p['titleEN'],'licenseSource':'gnu-make-manual'};page='---\n'+''.join(k+': '+json.dumps(v,ensure_ascii=False)+'\n' for k,v in front.items())+'---\n\n# '+p['titleEN']+'\n\n'+header+'\n\n'+md.read_text().strip()+'\n\n'+history+'\n\n'+licenseHTML+'\n'
 for base in [OUT,APP/'src/content/docs/v4-4-1/en',PUBLIC/'edited/en']:
  dest=base/p['id'];dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(page)
 results.append({k:p[k] for k in ['id','titleEN','titleJA','sourceNodes','footnotes']}|{'sourceFragment':'source/fragments/'+fragment.name,'sourceFragmentSHA256':h(fragment),'canonical':'canonical/en/'+p['id'],'canonicalSHA256':h(OUT/p['id']),'words':len(re.findall(r'\b[A-Za-z][A-Za-z0-9_-]*\b',node.get_text())),'codeBlocks':len(node.select('pre'))})
refid='02-reference/01-gfdl.md';refpage='---\ntitle: "Original English GFDL 1.3"\nlicenseSource: "gnu-make-manual"\n---\n\n# Original English GFDL 1.3\n\n'+header+'\n\n'+str(fdl)+'\n\n'+history+'\n'
for base in [OUT,APP/'src/content/docs/v4-4-1/en',PUBLIC/'edited/en']:
 dest=base/refid;dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(refpage)
shutil.copy2(S/'make-4.4.1.tar.gz',PUBLIC/'make-4.4.1.tar.gz');shutil.copy2(S/'COPYING',PUBLIC/'COPYING.txt')
routes={'schemaVersion':1,'version':'v4-4-1','upstreamVersion':'4.4.1','manualEdition':'0.77','fixedArchiveSHA256':h(S/'make-4.4.1.tar.gz'),'manualGeneratedSHA256':h(manual),'converterVersions':{'Texinfo':'7.1','Pandoc':'3.8.3'},'guideWords':sum(p['words'] for p in results),'originalCodeBlocks':sum(p['codeBlocks'] for p in results),'chapterCoverageExact':True,'footnoteClosure':sum(len(p['footnotes']) for p in results),'guides':results,'references':[{'id':refid,'role':'Whole original English GFDL,not translated/fullJAmeaningreview','canonical':'canonical/en/'+refid,'canonicalSHA256':h(OUT/refid)}],'scope':'Chapters1..3 complete;1referencedfootnotecarried. Chapter1Preparing andRunningMake section ispreserved bytheofficialHTML formatter;fullrawTexinfo/Info retained.NoInfo/printUIparityclaim. Remainingchapters/staticfulloriginal links;unofficialJA planned.','sourceOffer':'Finaleditablekit/reconstructionpending;public originalarchive/staticfullmanual available inisolatedapp.'};(R/'ROUTES.json').write_text(json.dumps(routes,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:routes[k] for k in ['guideWords','originalCodeBlocks','chapterCoverageExact','footnoteClosure','manualGeneratedSHA256']}))
