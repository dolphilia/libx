"""Verify built libuv articles and footer notes; does not perform semantic review."""
from pathlib import Path
from bs4 import BeautifulSoup
import argparse,json,hashlib,datetime
p=argparse.ArgumentParser();p.add_argument('--repository',default=str(Path(__file__).resolve().parents[5]));p.add_argument('--workspace');p.add_argument('--output');a=p.parse_args();r=Path(a.repository).resolve();w=Path(a.workspace).resolve() if a.workspace else Path.cwd().resolve()
while not (w/'pnpm-workspace.yaml').exists():
 assert w.parent!=w,'Workspace missing';w=w.parent
packet=r/'docs/notes/document-import/libuv/1.53.0';m=json.loads((packet/'reviews/revisions/771/REVIEW_MANIFEST.json').read_text());assert m['completedPages']==43 and m['unreviewedPages']==0
sha=lambda f:hashlib.sha256(f.read_bytes()).hexdigest();records=[]
for row in m['pages']:
 for lang,role in [('en','canonical'),('ja','translation')]:
  ref=row[role];source=r/ref['path'];assert sha(source)==ref['sha256'];head,body=source.read_text().split('---\n',2)[1:];context=json.loads(next(x.split(': ',1)[1] for x in head.splitlines() if x.startswith('documentContext: ')))
  expected=BeautifulSoup(body.replace('&#10;','\n'),'html.parser').select_one('article.libuv-document');file=w/'apps/libuv/dist/v1-53-0'/lang/row['id'].removesuffix('.md')/'index.html';html=BeautifulSoup(file.read_text(),'html.parser');actual=html.select_one('article.libuv-document');assert expected and actual and len(html.select('article.libuv-document'))==1
  assert expected.get_text().strip()==actual.get_text().strip(),(lang,row['id'],'article text')
  for tag in ['[id]','pre','dt.sig','table','img','iframe','a[href]']:
   x,y=expected.select(tag),actual.select(tag);assert len(x)==len(y),(lang,row['id'],tag)
   if tag=='[id]':assert [n['id']for n in x]==[n['id']for n in y]
   if tag in ['pre','dt.sig']:assert [n.get_text()for n in x]==[n.get_text()for n in y]
   if tag in ['img','iframe','a[href]']:
    attribute='href' if tag=='a[href]' else 'src';assert [n[attribute]for n in x]==[n[attribute]for n in y]
  assert not actual.select('[data-context-kind]');footer=html.select_one('.document-provenance');assert footer and html.select_one('#document-provenance-title') and not actual.find(id='document-provenance-title');details=footer.select('details');assert len(details)==len(context)
  for entry,note in zip(context,details):
   original=BeautifulSoup(entry['html'],'html.parser');summary=note.select_one('summary');assert summary and note['data-context-kind']==entry['kind'];copy=note.select_one('.sl-markdown-content');assert copy;assert original.get_text().strip()==copy.get_text().strip(),(lang,row['id'],'footer text');assert [x.get('href')for x in original.select('a[href]')]==[x.get('href')for x in copy.select('a[href]')]
  assert not any(s in footer.get_text()for s in ['ユーザーが承認','ユーザー承認済み','承認済みの運用方針']);records.append({'language':lang,'page':row['id'],'renderedSHA256':sha(file),'footerGroups':len(details)})
report={'status':'passed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'languageFiles':len(records),'fixedFullContentReview':'43 current reviews retained; this check is mechanical only','checks':['exact article text','IDs/code/API declarations','original href/src','footer text and links outside article','no conversation approval wording'],'files':records}
if a.output:Path(a.output).write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
print('Built libuv article/footer preservation passed:',len(records),'language files')
