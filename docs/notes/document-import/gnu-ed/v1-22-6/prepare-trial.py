from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,shutil,re,hashlib,datetime
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/gnu-ed/v1-22-6';E=R/'docs/notes/project-expansion/runs/evidence/2026-10-07-932';T=Path('/private/tmp/libx-gnu-ed-trial-932');A=T/'apps/gnu-ed-trial';M=json.loads((N/'CANDIDATE_DRAFT.json').read_text());h=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
c=json.loads((R/'docs/notes/project-expansion/runs/evidence/2026-10-06-927/TRIAL_CONFIG.json').read_text());c['paths']['projectSlug']='gnu-ed-trial';c['versioning']['versions'][0].update(id='v1-22-6',name='1.22.6');c['language']['supported']=['en'];c['translations']['en'].update(displayName='GNU ed',displayDescription='Line editor manual');c['translations']['ja'].update(displayName='GNU ed',displayDescription='行エディターのマニュアル');q=c['licensing']['sources'][0];q.update(id='ed-manual-trial',name='GNU ed1.22.6 manual',author='Andrew L. Moore, François Pinard, Antonio Diaz Diaz / Free Software Foundation',sourceUrl='https://www.gnu.org/software/ed/manual/ed_manual.html',licenseUrl='/docs/gnu-ed-trial/source/v1-22-6/manual.html#GNU-Free-Documentation-License');c['licensing']['defaultSource']=q['id'];q['provenanceNotes']=[{'en':'Unpublished selection prototype of fixed GNU ed1.22.6 manual (20 August2026). Complete Top and11chapters; originalGFDL1.3-or-later/FSF1993,1994,2006–2026/authors preserved. Static original examples are not executed. No InvariantSections/noCoverTexts. Originalmanual/Info/Texinfo preserved. Japanese translation, formaladoption and sourceoffer are pending.','ja':'固定GNU ed1.22.6マニュアル（2026年8月20日）の未公開試作です。概要と全11章、原著者・FSF通知・GFDL1.3以降の条件を保持します。不変節・表紙文言はありません。原文例は静的表示とし実行していません。日本語訳・正式採用・配布資料は未完です。'}];q['attributionLinks']=[{'url':'/docs/gnu-ed-trial/source/v1-22-6/manual.html','label':{'en':'Fixed complete original manual','ja':'固定原文全文'}}];(A/'src/config/project.config.jsonc').write_text(json.dumps(c,ensure_ascii=False,indent=2)+'\n')
shutil.rmtree(A/'src/content/docs/v1',ignore_errors=True);anchors={}
for r in M['proposedScope']['rows']:
 v=BeautifulSoup((N/r['EnglishDraftPath']).read_text(),'html.parser')
 for x in v.select('[id]'):anchors[x['id']]=r['slug']
 anchors[r['sourceNode']]=r['slug']
anchors['GNU-Free-Documentation-License']='13-gfdl'
for x in BeautifulSoup((N/'drafts/reference/gfdl.body.html').read_text(),'html.parser').select('[id]'):anchors[x['id']]='13-gfdl'
rows=[];heads={}
for row in M['proposedScope']['rows']+[{'slug':'13-gfdl','sourceNode':'GNU-Free-Documentation-License','EnglishDraftPath':'drafts/reference/gfdl.body.html'}]:
 v=BeautifulSoup((N/row['EnglishDraftPath']).read_text(),'html.parser');title=v.find(re.compile('^h[1-6]$')).get_text(' ',strip=True)
 # Protect all literalpre linebreaks/Markdown metacharacters by numeric entities after serialization.
 v=BeautifulSoup((N/row['EnglishDraftPath']).read_text(),'html.parser')
 for a in v.select('a[href]'):
  if a['href'].startswith('#'):
   anchor=a['href'][1:];a['href']='/docs/gnu-ed-trial/v1-22-6/en/01-guide/'+anchors[anchor]+'#'+anchor
 literals={}
 for i,pre in enumerate(v.select('pre')):
  key=f'LIBX_ED_PRE_{i}_END';literals[key]=str(pre).replace('\n','&#10;').replace('\t','&#9;').replace('`','&#96;').replace('*','&#42;').replace('_','&#95;');pre.replace_with(NavigableString(key))
 body=str(v)
 for key,value in literals.items():body=body.replace(key,value)
 front={'title':title,'licenseSource':q['id'],'description':'GNU ed1.22.6 unpublished English conversion trial','toc':{'maxLevel':4}};p=A/'src/content/docs/v1-22-6/en/01-guide'/(row['slug']+'.md');p.parent.mkdir(parents=True,exist_ok=True);p.write_text('---\n'+''.join(k+': '+json.dumps(z,ensure_ascii=False)+'\n'for k,z in front.items())+'---\n\n<div class="gnu-ed-original-content">'+body+'</div>\n');heads['v1-22-6/en/01-guide/'+row['slug']]=[{'depth':2,'slug':row['sourceNode'],'text':title}];rows.append({'slug':row['slug'],'draftSHA256':h(N/row['EnglishDraftPath']),'prototypeSHA256':h(p)})
P=A/'public/source/v1-22-6';P.mkdir(parents=True,exist_ok=True);shutil.copy2(N/'source/derived-manual.html',P/'manual.html');(A/'src/data').mkdir(exist_ok=True);(A/'src/data/document-headings.json').write_text(json.dumps(heads,ensure_ascii=False,indent=2)+'\n');(A/'src/styles/global.css').write_text("@import '@docs/theme/css/starlight-overrides.css';\n.gnu-ed-original-content pre { max-width: 100%; min-width: 0; overflow-x: auto; white-space: pre; tab-size: 4; }\n.gnu-ed-original-content dd { min-width: 0; }\n.document-provenance .attribution-text { overflow-wrap: anywhere; }\n");(A/'node_modules').symlink_to('/private/tmp/libx-gnu-time-formal-928/apps/gnu-time/node_modules',target_is_directory=True);(N/'TRIAL_INPUTS.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'workspace':str(T),'rows':rows,'JapaneseRendered':False,'dependencyReuse':'existing fixed workspace symlinks, not independent rebuild','selected':False},indent=2)+'\n');print('ed conversion trial13EN prepared')
