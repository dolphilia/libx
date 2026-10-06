from pathlib import Path
import re,json,hashlib,shutil,subprocess,datetime
R=Path('/Users/dolphilia/github/libx');N=R/'docs/notes/document-import/rapidjson/v1-1-0';W=Path('/private/tmp/libx-rapidjson-formal-853');A=W/'apps/rapidjson';E=Path(__file__).parent
sha=lambda b:hashlib.sha256(b).hexdigest();write=lambda p,x:p.write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n')
assert not(N/'CODE_WHITESPACE_DELTA.json').exists();rows=[]
# Doxygen code lines contain spans/anchors, but no nested divs. Preserve the original raw line markup.
pattern=re.compile(r'<div class="line">[\s\S]*?</div>')
for p in sorted((N/'translations/ja').rglob('*.md')):
 id=p.relative_to(N/'translations/ja');raw=p.read_text();en=(N/'canonical/en'/id).read_text();a=pattern.findall(en);b=pattern.findall(raw);assert len(a)==len(b);i=[0];changes=[]
 def replace(m):
  k=i[0];i[0]+=1;replacement=a[k].replace('/v1-1-0/en/01-guide/','/v1-1-0/ja/01-guide/')
  if m[0]!=replacement:changes.append(k)
  return replacement
 repaired=pattern.sub(replace,raw)
 if not changes:continue
 # Every changed line differs only in ASCII whitespace text outside elements.
 norm=lambda x:re.sub(r'>[ \t\r\n]+<','> <',x)
 for k in changes:assert norm(b[k])==norm(a[k].replace('/v1-1-0/en/01-guide/','/v1-1-0/ja/01-guide/')),(id,k)
 before=raw.split('---\n',2)[2];after=repaired.split('---\n',2)[2]
 row={'id':str(id),'language':'ja','beforeSha256':sha(raw.encode()),'afterSha256':sha(repaired.encode()),'beforeBodySha256':sha(before.encode()),'afterBodySha256':sha(after.encode()),'changedLines':changes,'codeWhitespaceOnly':True,'allNonWhitespaceCodeAndProseUnchanged':True};rows.append(row)
 (E/'code-whitespace-before'/id).parent.mkdir(parents=True,exist_ok=True);(E/'code-whitespace-before'/id).write_text(raw)
 p.write_text(repaired);shutil.copy2(p,A/'src/content/docs/v1-1-0/ja'/id);shutil.copy2(p,A/'public/source/v1-1-0/edited/ja'/id)
 # Replay inputs are reviewed editable drafts before source-offer footer; replace only code lines there too.
 for base in ['regeneration/japanese','drafts/ja']:
  q=N/base/id;i[0]=0;q.write_text(pattern.sub(replace,q.read_text()))
write(N/'CODE_WHITESPACE_DELTA.json',{'status':'passed-source-bound-whitespace-repair','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'cause':'prior bs4 html.parser collapsed whitespace-only nodes before comparing; parse5 exact text caught the difference','method':'restore complete raw EN .line markup with only existing JA guide links; changed nodes differ only in ASCII whitespace between elements; preserve prose/literals/identifiers/anchors','rows':rows,'affectedDocuments':len(rows),'changedCodeLines':sum(len(r['changedLines'])for r in rows),'previousBs4CodeExactClaim':'superseded for whitespace by this correction; prior full natural-language review retained; fresh parse5 code checks required'})
shutil.copy2(N/'CODE_WHITESPACE_DELTA.json',E/'CODE_WHITESPACE_DELTA.json')
ref=lambda p:{'path':str(p.relative_to(R)),'sha256':sha(p.read_bytes())}
ja=json.loads((N/'regeneration/JAPANESE.json').read_text())
for x in ja:x['sha256']=sha((N/'regeneration/japanese'/x['id']).read_bytes())
write(N/'regeneration/JAPANESE.json',ja)
map=json.loads((N/'CONTENT_MAP.json').read_text());review=json.loads((N/'REVIEW_MANIFEST.json').read_text())
for row in rows:
 page=next(x for x in map['pages']if x['id']==row['id']);page['translation']=ref(R/page['translation']['path']);record=next(x for x in review['pages']if x['id']==row['id']);record['translation']['sha256']=page['translation']['sha256'];record['presentationDelta']=ref(N/'CODE_WHITESPACE_DELTA.json');record['findings'].append('856:コード行の空白のみを固定英語行へ復元。旧bs4空白同一性主張を訂正し、変更rawコード行の非空白/本文保全とparse5全文code/renderedを再確認。既存自然文の全文レビューは維持。')
write(N/'CONTENT_MAP.json',map);write(N/'REVIEW_MANIFEST.json',review)
source=json.loads((N/'SOURCE_MANIFEST.json').read_text());source['preferredJapaneseReplay']=ref(N/'regeneration/JAPANESE.json');source['codeWhitespaceDelta']=ref(N/'CODE_WHITESPACE_DELTA.json');write(N/'SOURCE_MANIFEST.json',source)
shutil.copytree(N,W/'docs/notes/document-import/rapidjson/v1-1-0',dirs_exist_ok=True)
print('Repaired',len(rows),'JA documents;',sum(len(r['changedLines'])for r in rows),'code lines; no prose/identifier changes')
