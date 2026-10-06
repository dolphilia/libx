from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,html,shutil,copy
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-commonmark-formal-887');N=R/'docs/notes/document-import/commonmark/v0-31-2';E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-889';A=W/'apps/commonmark';J=N/'translations/batch-889';cm=json.loads((N/'CONTENT_MAP.json').read_text());items=cm['items'][7:];at=datetime.datetime.now(datetime.timezone.utc).isoformat();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();write=lambda p,d:p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
notes=['全文17段落/18例対。開始1–6#・終了任意数・空白/タブ条件・≤3字下げ・inline解析/level/escape/empty/interruptionを保持。', '全文28段落/27例対。段落解釈可能条件/複数行/underline =又は-/level1,2/≤3字下げ/内部空白禁止/lazy禁止/非empty/compatibility4解釈の意味を保持。', '全文12段落/12例対。chunk/4space除去/末尾改行literal/info無/段落中断不可/list優先/内外blank・追加字下げ・後続段落を保持。', '全文25段落/29例対。≥3同じtick又はtilde/開始≤3・終了≥開始長/内容N字下げ除去/未閉鎖はcontaining末尾/infoの制約・特定処理非必須を保持。', '全文53段落と別の3LI/44例対。7種開始・終了条件/全tag名/対応不要/空行・コンテナ末尾/種類7段落中断不可/最終行末タグ後内容/Gruber規則・3差異/比較・例外preを保持。原文spacesをJA空白とし原典の説明を改変しない。', '全文22段落/27例対。ラベルcolon/≤3字下げ/前後それぞれ≤1改行/titleoptional/先着定義/大文字小文字不問/非表示/段落中断不可/container内定義の文書全体への作用を保持。', '全文10段落/9例対。段落はnonblank連結/前後空白除去/初行≤3・後続任意/最終2spaceはhardbreak無し/blank無視但しlist tight/loose例外を保持。']
reviews=[];headings=json.loads((A/'src/data/document-headings.json').read_text());titles=['ATX見出し','Setext見出し','字下げによるコードブロック','フェンス付きコードブロック','HTMLブロック','リンク参照定義','段落と空行'];available={x['slug'].split('/')[-1] for x in cm['items']};bindings=[];fallbacks=[]
for item,title,note in zip(items,titles,notes):
 slug=item['slug'];route=slug.split('/')[-1];en=R/item['canonical'];draft=J/(route+'.md');tree=BeautifulSoup(draft.read_text(),'html.parser').select_one('.commonmark-original-content');source=BeautifulSoup(en.read_text(),'html.parser').select_one('.commonmark-original-content')
 assert [c.get_text() for c in tree.select('pre code')]==[c.get_text() for c in source.select('pre code')];assert [n['id'] for n in tree.select('[id]')]==[n['id'] for n in source.select('[id]')]
 reviews.append({'slug':slug,'status':'passed','method':'Saved drafting complete, then one separate whole-content reading pass against fixed-original-bound current English and saved Japanese; semantic findings recorded by agent, not inferred from machine checks.','reviewedAt':at,'fixedOriginalHTMLSHA256':sha(N/'source/original/official.html'),'sourceToCurrentEnglishEvidence':'887/EN_PREPARATION_CHECK: all adopted original prose/17extra code exact; reviewed EN hash unchanged','currentENSHA256':sha(en),'savedDraftSHA256':sha(draft),'sourceParagraphs':len(source.select('p')),'reviewedParagraphs':len(tree.select('p')),'originalCodeBlocks':len(tree.select('pre code')),'finding':note,'unresolvedMeaningIssues':[]})
 for a in tree.select('a[href]'):
  href=a['href'];prefix='/docs/commonmark/v0-31-2/en/01-guide/'
  if href.startswith(prefix):
   target=href[len(prefix):].split('/')[0]
   if target in available:a['href']=href.replace('/v0-31-2/en/','/v0-31-2/ja/',1)
   else:fallbacks.append({'from':slug,'href':href,'reason':'JA nextbatch absent; existing EN target used until second batch mechanical link update'})
 hs=[{'depth':int(h.name[1]),'slug':h['id'],'text':h.get_text(' ',strip=True)} for h in tree.select('h2,h3')];headings['v0-31-2/ja/'+slug]=hs
 literals=[]
 for i,c in enumerate(tree.select('pre code')):
  key=f'LIBX_COMMONMARK_LITERAL_CODE_{i:05d}_END';literals.append((key,html.escape(c.get_text(),quote=False).replace('\n','&#10;').replace('\t','&#9;')));c.clear();c.append(key)
 body=str(tree)+'\n'
 for key,value in literals:assert body.count(key)==1;body=body.replace(key,value)
 md='---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\ndescription: '+json.dumps('CommonMark 0.31.2の規則と原典の対照例。',ensure_ascii=False)+'\ndocumentId: '+json.dumps('commonmark:0.31.2:'+route)+'\nlicenseSource: commonmark-spec\n---\n\n'+body
 for dest in [R/item['translation'],W/item['translation'],A/'src/content/docs/v0-31-2/ja'/(slug+'.md'),A/'public/source/v0-31-2/edited/ja'/(slug+'.md')]:dest.parent.mkdir(parents=True,exist_ok=True);dest.write_text(md)
 item['translationStatus']='saved-reviewed';item['contentReview']='passed-889-separate-whole-pass';item['JapaneseTitle']=title
 bindings.append({'slug':slug,'canonicalJASHA256':hashlib.sha256(md.encode()).hexdigest(),'savedDraftSHA256':sha(draft),'sourceENSHA256':sha(en),'headingCount':len(hs)})
write(E/'MEANING_REVIEW.json',{'status':'passed-last7-whole-meaningreview','at':at,'pages':reviews,'count':7,'scope':'All adopted text of last7 guides including original examples; no original technical-audit/conformance-engine execution. No second agent required by plan.'});write(E/'INTEGRATION_BINDINGS.json',{'status':'integrated-not-yet-built','at':at,'pages':bindings,'temporaryEnglishFallbacks':fallbacks,'draftTextChanged':False,'integrationChanges':'Frontmatter, hrefs for available JA routes, translated raw-heading metadata. Source code kept literal.'});write(A/'src/data/document-headings.json',headings)
write(E/'CONTENT_MAP_AFTER_BATCH.json',cm);write(N/'CONTENT_MAP.json',cm);shutil.copyfile(N/'CONTENT_MAP.json',W/N.relative_to(R)/'CONTENT_MAP.json');shutil.copyfile(J/'SAVED_DRAFTS.json',W/J.relative_to(R)/'SAVED_DRAFTS.json')
print('7 reviewed JA canonical integrated; 166examplepairs/333codes; pending build/render/native; English fallback count',len(fallbacks))
