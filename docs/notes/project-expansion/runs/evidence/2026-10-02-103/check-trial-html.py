from pathlib import Path
import json,re,hashlib,datetime
from html.parser import HTMLParser
r=Path('/Users/dolphilia/github/libx/docs/notes/project-expansion/runs/evidence/2026-10-02-103/zstd-trial')
class DOM(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.root={'tag':'root','attrs':{},'children':[]};self.stack=[self.root]
 def handle_starttag(self,t,a):
  n={'tag':t,'attrs':dict(a),'children':[]};self.stack[-1]['children'].append(n)
  if t not in ['meta','link','hr','br','img','input']:self.stack.append(n)
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i]['tag']==t:self.stack=self.stack[:i];return
 def handle_data(self,d):self.stack[-1]['children'].append(d)
def walk(n):
 if isinstance(n,str):return
 yield n
 for c in n['children']:yield from walk(c)
def text(n):return n if isinstance(n,str) else ''.join(text(c) for c in n['children'])
def norm(s):return ' '.join(s.split())
p=DOM();p.feed((r/'specification.html').read_text());ns=list(walk(p.root));a=json.loads((r/'source-ast-metrics.json').read_text())
hs=[{'depth':int(n['tag'][1]),'text':text(n)} for n in ns if re.fullmatch('h[1-6]',n['tag']) and n['attrs'].get('class')!='title']
tables=[[[norm(text(c)) for c in row['children'] if isinstance(c,dict) and c['tag'] in ['td','th']] for row in walk(t) if row['tag']=='tr'] for t in ns if t['tag']=='table']
blocks=[text(n).rstrip('\n') for n in ns if n['tag']=='pre']
links=[{'url':n['attrs']['href'],'label':norm(text(n))} for n in ns if n['tag']=='a' and 'href' in n['attrs']]
ids=[n['attrs']['id'] for n in ns if 'id' in n['attrs']]
unresolved=[l for l in links if l['url'].startswith('#') and l['url'][1:] not in ids]
mapping={x['from']:x['to'] for x in a.get('linkRepairs',[])}
checks={'headings':hs==[{k:h[k] for k in ['depth','text']} for h in a['headings']],'tablesAllCellsOrder':tables==[[[norm(c) for c in row] for row in t['rows']] for t in a['tables']],'codeAllBytesOrder':blocks==[b['value'].rstrip('\n') for b in a['codeBlocks']],'linksLabelsDestinations':links==[{'url':mapping.get(l['url'],l['url']),'label':norm(l['label'])} for l in a['links']],'sourceEquivalenceExceptDeclaredLink':a.get('sourceEquivalence')==True,'localAnchors':not unresolved,'noDuplicateIds':len(ids)==len(set(ids))}
out={'checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'checks':checks,'passed':all(checks.values()),'unresolvedInternalLinks':unresolved,'htmlSha256':hashlib.sha256((r/'specification.html').read_bytes()).hexdigest(),'counts':{'headings':len(hs),'tables':len(tables),'codeBlocks':len(blocks),'links':len(links),'internalLinks':sum(l['url'].startswith('#') for l in links),'ids':len(ids)},'limits':['機械変換試験と英語原稿の代表範囲確認のみ。全文意味レビュー/翻訳/Astro表示/外部リンク到達性は未実施。']}
(r/'html-equivalence.json').write_text(json.dumps(out,ensure_ascii=False,indent=2)+'\n');print(json.dumps(out,ensure_ascii=False));
if not out['passed']:raise SystemExit(1)
