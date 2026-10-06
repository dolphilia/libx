"""Generate unreviewed drafts, preserving protected syntax and noncomment examples."""
from pathlib import Path
from bs4 import BeautifulSoup
from translation_nodes import selected_nodes
import json,re,hashlib,collections
N=Path(__file__).resolve().parent;out=N/'drafts/ja';out.mkdir(exist_ok=True);records=[]
for f in sorted((N/'translations').glob('*-units.json')):
 d=json.loads(f.read_text());slug=d['slug'];p=N/'translations'/(slug+'-ja.json')
 if not p.exists():continue
 original=N/'drafts/en'/(slug+'.body.html');assert hashlib.sha256(original.read_bytes()).hexdigest()==d['bodySHA256'];s=BeautifulSoup(original.read_text(),'html.parser');nodes=selected_nodes(s);values=json.loads(p.read_text());assert len(values)==len(nodes)==len(d['units'])
 for node,u,value in zip(nodes,d['units'],values):
  assert str(node)==u['sourceHTML'];assert collections.Counter(re.findall(r'⟦\d+⟧',value))==collections.Counter(u['tokens'].keys()), (slug,u['index'])
  for key,token in u['tokens'].items():value=value.replace(key,token)
  node.clear();node.extend(BeautifulSoup(value,'html.parser').contents)
 comments=0
 if slug=='03-introduction-to-line-editing':
  values=json.loads((N/'translations/03-comments-ja.json').read_text());i=0
  for pre in s.select('pre'):
   html=pre.decode_contents();lines=html.splitlines(keepends=True);changed=[]
   for line in lines:
    if line.startswith('#'):
     value=values[i];i+=1
     assert collections.Counter(str(x)for x in BeautifulSoup(line,'html.parser').select('code,samp,var'))==collections.Counter(str(x)for x in BeautifulSoup(value,'html.parser').select('code,samp,var'))
     changed.append(value+('\n'if line.endswith('\n')else''))
    else:changed.append(line)
   pre.clear();pre.extend(BeautifulSoup(''.join(changed),'html.parser').contents)
  assert i==len(values);comments=i
 en=BeautifulSoup(original.read_text(),'html.parser')
 assert [a.get('href')for a in en.select('a')]==[a.get('href')for a in s.select('a')]
 assert [a.get('id')for a in en.select('[id]')]==[a.get('id')for a in s.select('[id]')]
 def literals(v):return [[line for line in pre.get_text().splitlines()if not line.startswith('#')]for pre in v.select('pre')]
 assert literals(en)==literals(s)
 target=out/(slug+'.body.html');target.write_text(str(s),encoding='utf-8');records.append({'slug':slug,'proseUnits':len(values)if not comments else len(d['units']),'commentLines':comments,'draftSHA256':hashlib.sha256(target.read_bytes()).hexdigest(),'sourceBodySHA256':d['bodySHA256'],'meaningReview':'pending'})
(N/'TRANSLATION_DRAFT_BINDING.json').write_text(json.dumps({'status':'drafts-only','pages':len(records),'records':records,'protectedTokensLinksIDsAndNoncommentExampleLines':'exact','meaningReview':'pending'},ensure_ascii=False,indent=2)+'\n')
print('Saved',len(records),'draft pages; meaning review pending')
