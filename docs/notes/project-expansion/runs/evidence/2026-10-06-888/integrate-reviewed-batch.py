from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,datetime,html,shutil,copy
R=Path('/Users/dolphilia/github/libx');W=Path('/private/tmp/libx-commonmark-formal-887');N=R/'docs/notes/document-import/commonmark/v0-31-2';E=R/'docs/notes/project-expansion/runs/evidence/2026-10-06-888';A=W/'apps/commonmark';J=N/'translations/batch-888';cm=json.loads((N/'CONTENT_MAP.json').read_text());items=cm['items'][:7];at=datetime.datetime.now(datetime.timezone.utc).isoformat();sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest();write=lambda p,d:p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
notes=[
'Introduction全30段落・14の問い・16原典codeを別工程で比較。2004年公開/読みやすさ/曖昧な構文/各例の問い/文書生成/適合試験/URLpercentencodingは必須ではない区別を保持。タブの原典表示記号説明は本文保持し、Libx表示のliteralTABへの変更は共通footerで説明。',
'全文14段落。Unicode codepointとbyte/encoding、0文字行・LF/CR/CRLF・blankline、Zs/P/S、ASCII全32句読記号とinclusive範囲、制御文字上限の意味を保持。',
'全文5段落/11例対。構造文脈のみ4文字tabstop、内部literalTAB、引用delimiter1space/内部6space/結果2space、U0000→UFFFDのmustを保持。',
'全文7段落/16例対。ASCIIだけエスケープ、非ASCII等literal、escapedbackslash、hardbreak、code/autolink/rawHTML例外とURL/title/reference/info文字列を保持。最後の段落の2リンクはJA語順変更であり同じtarget。',
'全文13段落/23例対。文字参照と構造記号の区別、decimal1–7/hex1–6とXx、semicolon必須、invalid/U0000置換、code内literal・その他context、保存情報不要の意味を保持。',
'全文4段落/1例対。block優先と二段階解析、参照定義は第1段階末に取得、第1段階逐次/第2段階並列可能、container/leafの包含条件を保持。',
'全文16段落/10例対。indent≤3/samecharacter≥3/whitespace/tabs/禁止文字、空行不要と段落中断、Setextが優先/HRがlistより優先/項目内別bulletを保持。'
]
reviews=[];headings=json.loads((A/'src/data/document-headings.json').read_text());titles=['はじめに','文字と行','タブと安全でない文字','バックスラッシュによるエスケープ','実体参照と数値文字参照','ブロックとインライン','主題区切り'];available={x['slug'].split('/')[-1] for x in items};bindings=[];fallbacks=[]
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
 item['translationStatus']='saved-reviewed';item['contentReview']='passed-888-separate-whole-pass';item['JapaneseTitle']=title
 bindings.append({'slug':slug,'canonicalJASHA256':hashlib.sha256(md.encode()).hexdigest(),'savedDraftSHA256':sha(draft),'sourceENSHA256':sha(en),'headingCount':len(hs)})
write(E/'MEANING_REVIEW.json',{'status':'passed-first7-whole-meaningreview','at':at,'pages':reviews,'count':7,'scope':'All adopted text of first7 guides including original examples; no original technical-audit/conformance-engine execution. No second agent required by plan.'});write(E/'INTEGRATION_BINDINGS.json',{'status':'integrated-not-yet-built','at':at,'pages':bindings,'temporaryEnglishFallbacks':fallbacks,'draftTextChanged':False,'integrationChanges':'Frontmatter, hrefs for available JA routes, translated raw-heading metadata. Source code kept literal.'});write(A/'src/data/document-headings.json',headings)
write(E/'CONTENT_MAP_AFTER_BATCH.json',cm);write(N/'CONTENT_MAP.json',cm);shutil.copyfile(N/'CONTENT_MAP.json',W/N.relative_to(R)/'CONTENT_MAP.json');shutil.copyfile(J/'SAVED_SIX_DRAFTS.json',W/J.relative_to(R)/'SAVED_SIX_DRAFTS.json')
print('7 reviewed JA canonical integrated; 61examplepairs/138codes; pending build/render/native; English fallback count',len(fallbacks))
