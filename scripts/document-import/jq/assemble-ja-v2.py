#!/usr/bin/env python3
"""Assemble saved translated fields and exact original examples; no EN body fallback.
Only new output directories; partial output explicitly records missing pages.
"""
import argparse,json,re,hashlib,html
from pathlib import Path
parser=argparse.ArgumentParser();parser.add_argument('--packet',type=Path,required=True);parser.add_argument('--fields',type=Path,required=True);parser.add_argument('--output',type=Path,required=True);a=parser.parse_args()
if a.output.exists() or a.output.is_symlink():raise SystemExit('existing output refused')
load=lambda p:json.loads(p.read_text());sha=lambda s:hashlib.sha256(s.encode()).hexdigest();p=a.packet;render=load(a.fields);manual=load(p/'PARSED_MANUAL.json');boundary=load(p/'BOUNDARY.json');notice=load(p/'RIGHTS_FULFILLMENT.json')['noticeJa'];fields={x['key']:x for x in render['fields']};names=['00-introduction']+[f'{i+1:02d}-{x["id"]}'for i,x in enumerate(boundary['sections'])]+['15-manpage-appendix'];drafts={}
for name in render['translatedPages']:
 index=names.index(name);en=load(p/'translations'/(name+'.source.json'));ja=load(p/'translations'/(name+'.ja.json'));original={'headline':manual['headline'],'body':manual['body']}if index==0 else manual['sections'][index-1]if index<15 else {'manpage_intro':manual['manpage_intro'],'manpage_epilogue':manual['manpage_epilogue']}
 if en!=original:raise SystemExit('source draft mismatch: '+name)
 drafts[name]=ja
for x in fields.values():
 index=names.index(x['page']);key=x['key'];local=key if index in [0,15]else '/'.join(key.split('/')[2:]);v=drafts[x['page']]
 for k in local.split('/'):v=v[int(k)]if isinstance(v,list)else v[k]
 if sha(v)!=x['translatedSha256']:raise SystemExit('rendered translation stale: '+key)
def field(key,anchor=None):
 s=fields[key]['html']
 if anchor:s=re.sub(r'^<(h[23])>',lambda m:f'<{m[1]} id="{html.escape(anchor,quote=True)}">',s,count=1)
 return f'<div class="jq-upstream-field" data-source-key="{key}">\n\n{s}\n\n</div>\n\n'
def fence(value,lang='text'):
 f='`'*max(3,max([0]+[len(m)for m in re.findall(r'`+',value)])+1);return f'{f}{lang}\n{value}\n{f}\n\n'
texts={};metadata={};examples=0
for name in render['translatedPages']:
 index=names.index(name);ja=drafts[name];items=[]
 if index==0:title=ja['headline'];body='# '+title+'\n\n'+field('body')
 elif index<15:
  title=ja['title'];section=index-1;b=boundary['sections'][section];body=field(f'sections/{section}/title',b['id']);items=[dict(depth=2,slug=b['id'],text=title)]
  if 'body'in ja:body+=field(f'sections/{section}/body')
  for j,e in enumerate(ja.get('entries',[])):
   original=manual['sections'][section]['entries'][j]
   if e.get('examples',[])!=original.get('examples',[]):raise SystemExit('modified examples: '+name)
   key=f'sections/{section}/entries/{j}';anchor=b['entries'][j]['id'];body+=field(key+'/title',anchor)+field(key+'/body');items.append(dict(depth=3,slug=anchor,text=e['title'].replace('`','')))
   for k,x in enumerate(e.get('examples',[])):
    examplekey=key+f'/examples/{k}';body+=f'<!-- jq-example:{examplekey}:start -->\n\n#### 実行例 {k+1}\n\nコマンド\n\n'+fence("jq '"+x['program']+"'",'sh')+'入力\n\n'+fence(x['input']);examples+=1
    if not x['output']:body+='出力なし\n\n'
    else:
     for l,value in enumerate(x['output']):body+=f'出力 {l+1}\n\n'+fence(value)
    body+=f'<!-- jq-example:{examplekey}:end -->\n\n'
 else:
  title='manページの導入と後書き';body=field('manpage_intro')+field('manpage_epilogue')
  for label,anchor in [('書式','synopsis'),('フィルター','filters'),('バグ','bugs'),('著者','author')]:
   heading='<h2>'+label+'</h2>'
   if body.count(heading)!=1:raise SystemExit('appendix heading missing or duplicate: '+label)
   body=body.replace(heading,f'<h2 id="{anchor}">{label}</h2>')
   items.append(dict(depth=2,slug=anchor,text=label))
 note=p/'translations'/(name+'.translator-note.json')
 if note.exists():
  n=load(note);body+='## 訳注\n\n'+n['text']+'\n\n'
  for key in n['sourceKeys']:
   parts=key.split('/');si=int(parts[1]);sb=boundary['sections'][si];page=f'{si+1:02d}-{sb["id"]}';anchor=sb['entries'][int(parts[3])]['id']if 'entries'in parts else sb['id'];lang='ja'if page in render['translatedPages']else'en'
   body+=f'[原典の該当項目（{lang}）](/docs/jq/v1-8-2/{lang}/01-guide/{page}/#{anchor}) · '
  body=body.rstrip(' · ')+'\n\n'
 source='## 出典と通知\n\n'+notice+'\n\n[公式マニュアル](https://jqlang.org/manual/v1.8/) · [固定原典](https://github.com/jqlang/jq/blob/34f7186b86743a083a589741b6cea95293524108/docs/content/manual/v1.8/manual.yml) · [ライセンス](https://creativecommons.org/licenses/by/3.0/) · [原著作権・第三者通知](/docs/jq/v1-8-2/ja/02-license/01-original-notices/) · [ライセンス全文](/docs/jq/v1-8-2/ja/02-license/02-cc-by-3-0/)\n'
 texts['01-guide/'+name+'.md']='---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\norder: '+str(index)+'\ncategoryOrder: 1\n---\n\n'+body+source;metadata['v1-8-2/ja/01-guide/'+name]=items
for filename,title,source,explanation in [('01-original-notices.md','jqの原著作権・第三者通知','sources/COPYING','以下は固定版jqのCOPYING全文です。ソフトウェアと第三者素材の条件を含む原通知を原文のまま保持します。マニュアル本文の条件はCC BY 3.0 Unportedです。'),('02-cc-by-3-0.md','CC BY 3.0 Unported ライセンス全文','CC_BY_3_0.txt','以下はCC BY 3.0 Unportedの原文全文です。日本語による法的条件の翻訳ではありません。')]:
 texts['02-license/'+filename]='---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\ncategoryOrder: 2\n---\n\n'+explanation+'\n\n'+fence((p/source).read_text())
a.output.mkdir(parents=True)
for name,text in texts.items():f=a.output/name;f.parent.mkdir(exist_ok=True);f.write_text(text)
(a.output/'document-headings.json').write_text(json.dumps(metadata,ensure_ascii=False,indent=2)+'\n')
(a.output/'GENERATION.json').write_text(json.dumps(dict(status=('partial' if render['missingPages'] else 'full')+'-ja-pages-not-release-ready',pages=len(drafts),notices=2,examples=examples,fields=len(fields),missingPages=render['missingPages'],sourceFieldsSHA256=hashlib.sha256(a.fields.read_bytes()).hexdigest(),releaseReady=False),ensure_ascii=False,indent=2)+'\n')
print(json.dumps(dict(pages=len(drafts),notices=2,examples=examples,fields=len(fields),missingPages=len(render['missingPages']),releaseReady=False)))
