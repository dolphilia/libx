from pathlib import Path
from bs4 import BeautifulSoup
import re,json,hashlib,html,datetime
N=Path('docs/notes/document-import/rapidjson/v1-1-0');E=Path(__file__).parent;A=Path('/private/tmp/libx-rapidjson-formal-853/apps/rapidjson');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();changes=[]
for name in ['08-pointer','09-schema']:
 p=N/f'canonical/en/01-guide/{name}.md';before=p.read_text();front,body=before.split('---\n',2)[1:];sourcePath='doc/'+name.split('-',1)[1]+'.md';source=N/'source/original'/(sourcePath+'.txt');raw=source.read_text();soup=BeautifulSoup(body,'html.parser');extra=''
 (E/f'{name}-CANONICAL_BEFORE.md.txt').write_text(before)
 if name=='08-pointer':
  assert '`"#/%E2%82%AC"`'in raw
  bad='"#/E2%82AC"';good='"#/%E2%82%AC"';assert body.count(bad)==1;body=body.replace(bad,good,1)
  extra='<p>固定原文doc/pointer.mdのURI表にある<code>"#/%E2%82%AC"</code>を保持しています。保存したDoxygen生成本文では%記号の一部が落ちていたため、原文ソースに合わせて表記を復元しました。原文のコードやAPI自体を変更・技術監査するものではありません。</p>'
  delta={'kind':'restore source URI percent markers','before':bad,'after':good,'sourceExactLiteral':True}
 else:
  section=raw.split('|Syntax|Description|\n',1)[1].split('\n\n',1)[0];cells=[]
  for line in section.splitlines():
   if line.startswith('|------'):continue
   m=re.fullmatch(r'\|(.+)\|\s*([^|]+?)\s*\|',line);assert m,line;syntax,description=m[1].strip(),m[2].strip();escaped=html.escape(syntax);syntaxHtml=re.sub(r'`([^`]*)`',lambda m:'<span class="tt">'+m[1]+'</span>',escaped);cells.append((syntax,description,syntaxHtml))
  assert len(cells)==24
  table='<table class="markdownTable"><tbody><tr class="markdownTableHead"><th class="markdownTableHeadNone">Syntax</th><th class="markdownTableHeadNone">Description</th></tr>'+''.join('<tr class="markdownTableRowOdd"><td class="markdownTableBodyNone">'+s+'</td><td class="markdownTableBodyNone">'+html.escape(d)+'</td></tr>'for s0,d,s in cells)+'</tbody></table>'
  first=re.search(r'<table\b[^>]*>[\s\S]*?</table>',body);assert first and 'Concatenation'in first[0] and 'Syntax'in first[0];body=body[:first.start()]+table+body[first.end():]
  paragraphs=list(re.finditer(r'<p>[\s\S]*?</p>',body));broken=[m for m in paragraphs if '| Alternation |'in BeautifulSoup(m[0],'html.parser').get_text()];assert len(broken)==1;m=broken[0];body=body[:m.start()]+body[m.end():]
  extra='<p>正規表現の構文表は、固定原文doc/schema.mdの24項目を2列の静的な表として表示しています。原文のパイプ記号を含むMarkdownが保存済み生成本文で段落になっていたため、構文と説明を原文どおり対応付けました。記号・数値・コード・ベンチマーク値は変更していません。</p>'
  delta={'kind':'24 source regex syntax rows in static2-column table','sourceRows':[{'syntax':s,'description':d}for s,d,x in cells],'sourceOrderPreserved':True}
 context=json.loads(re.search(r'^documentContext: (.*)$',front,re.M)[1]);context[-1]['html']+=extra;front=re.sub(r'^documentContext: .*$',lambda m:'documentContext: '+json.dumps(context,ensure_ascii=False),front,flags=re.M);after='---\n'+front+'---\n'+body
 old=BeautifulSoup(before.split('---\n',2)[2],'html.parser');new=BeautifulSoup(body,'html.parser');assert [x.get_text()for x in old.select('.line,pre,.ttname,.ttdeci,.ttdef')]==[x.get_text()for x in new.select('.line,pre,.ttname,.ttdeci,.ttdef')];p.write_text(after);(A/f'src/content/docs/v1-1-0/en/01-guide/{name}.md').write_text(after)
 changes.append({'id':f'01-guide/{name}.md','beforeSHA256':hashlib.sha256(before.encode()).hexdigest(),'afterSHA256':sha(p),'sourcePath':str(source),'sourceSHA256':sha(source),'delta':delta,'programCodeUnchanged':True})
(E/'CANONICAL_REPAIR.json').write_text(json.dumps({'status':'source-preserving-correction-draft','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'changes':changes,'pending':'separate meaning review/newJapanese/build/delta checks; integrate deterministic replay override at batch end'},ensure_ascii=False,indent=2)+'\n');print('Pointer URI restored/Schema24 regex rows reconstructed from fixed source; program unchanged')
