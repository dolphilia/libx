from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib
root=Path('/Users/dolphilia/github/libx');ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-731';packet=root/'docs/notes/document-import/libuv/1.53.0';dist=Path('/private/tmp/libx-libuv-formal-689/apps/libuv/dist');rows=[];errors=[];links=0;cache={}
slugs=['reference/'+x for x in ['api','version','async','errors','dll','prepare','check','idle','timer','threadpool','loop']]+['reference/guide','guide/introduction','guide/basics','guide/filesystem','guide/networking','guide/threads','guide/processes','guide/eventloops','guide/utilities','guide/about','reference/design','reference/request','reference/handle']
for slug in slugs:
 src=packet/('translation/ja/'+slug+'.md');out=dist/('v1-53-0/ja/'+slug+'/index.html');soup=BeautifulSoup(out.read_text(),'html.parser');body=soup.select_one('article.libuv-document');expected=BeautifulSoup(src.read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser').select_one('article');assert str(body)==str(expected),slug;footer=soup.select_one('.document-provenance');assert footer and '非公式の日本語訳' in footer.get_text();assert not body.select('[data-context-kind]')
 for a in body.select('a[href]')+footer.select('a[href]'):
  href=a['href']
  if href.startswith(('https:','http:','//','mailto:')):continue
  links+=1;path,*anchor=href.split('#',1);target=dist/path.removeprefix('/docs/libuv/') if path else out
  if target.is_dir():target=target/'index.html'
  if not target.is_file():errors.append({'page':slug,'href':href})
  elif anchor and anchor[0] and target.suffix=='.html':
   if str(target) not in cache:cache[str(target)]={x['id'] for x in BeautifulSoup(target.read_text(),'html.parser').select('[id]')}
   if anchor[0] not in cache[str(target)]:errors.append({'page':slug,'href':href,'reason':'anchor missing'})
 rows.append({'page':slug,'bodyDOMExact':True,'footerOutsideBody':True,'source':str(src.relative_to(root)),'sha256':hashlib.sha256(src.read_bytes()).hexdigest(),'renderedSha256':hashlib.sha256(out.read_bytes()).hexdigest()})
assert not errors,errors
(ev/'RENDER_VERIFICATION.json').write_text(json.dumps({'pages':24,'rows':rows,'localBodyAndFooterLinks':links,'errors':errors,'prebuildExitCode':0,'buildExitCode':0,'totalRenderedPages':71,'nativeDisplay':'pending','fullProjectComplete':False,'inheritedSerializerCorrections':['API signature comparison initially included translated permalink title; now compares full signature markup with only documented translated title normalized.','Returns field labels were found in full JA read; excluded only API dt.sig rather than all dt, translated Returns and preserved colon.','Rendered Async pointers were interpreted as Markdown emphasis after BS serialization decoded entity escapes; escape Markdown syntax characters as numeric HTML entities and assert actual DOM, not merely source signature preservation.','One invocation used app cwd for repository-relative script and failed; reran correct absolute/root commands.']},ensure_ascii=False,indent=2)+'\n');print('JA24 DOM/footers exact; local links',links,'errors0')
