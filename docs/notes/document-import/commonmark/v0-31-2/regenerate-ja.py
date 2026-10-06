from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib,html
N=Path(__file__).resolve().parent;R=N.parents[4];A=R/'apps/commonmark';cm=json.loads((N/'CONTENT_MAP.json').read_text());reviews=json.loads((N/'REVIEW_MANIFEST.json').read_text());assert reviews['completedPages']==14;headings=json.loads((A/'src/data/document-headings.json').read_text());titles=['はじめに','文字と行','タブと安全でない文字','バックスラッシュによるエスケープ','実体参照と数値文字参照','ブロックとインライン','主題区切り','ATX見出し','Setext見出し','字下げによるコードブロック','フェンス付きコードブロック','HTMLブロック','リンク参照定義','段落と空行'];sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
for item,title,review in zip(cm['items'],titles,reviews['pages']):
 slug=item['slug'];route=slug.split('/')[-1];assert review['id']==slug+'.md';assert sha(R/review['canonical']['path'])==review['canonical']['sha256'];draft=R/review['savedReviewedJABody']['path'];assert sha(draft)==review['savedReviewedJABody']['sha256'];tree=BeautifulSoup(draft.read_text(),'html.parser').select_one('.commonmark-original-content')
 for a in tree.select('a[href]'):
  if a['href'].startswith('/docs/commonmark/v0-31-2/en/01-guide/'):a['href']=a['href'].replace('/v0-31-2/en/','/v0-31-2/ja/',1)
 headings['v0-31-2/ja/'+slug]=[{'depth':int(h.name[1]),'slug':h['id'],'text':h.get_text(' ',strip=True)} for h in tree.select('h2,h3')];literals=[]
 for i,c in enumerate(tree.select('pre code')):
  key=f'LIBX_COMMONMARK_LITERAL_CODE_{i:05d}_END';literals.append((key,html.escape(c.get_text(),quote=False).replace('\n','&#10;').replace('\t','&#9;')));c.clear();c.append(key)
 body=str(tree)+'\n'
 for key,value in literals:assert body.count(key)==1;body=body.replace(key,value)
 md='---\ntitle: '+json.dumps(title,ensure_ascii=False)+'\ndescription: '+json.dumps('CommonMark 0.31.2の規則と原典の対照例。',ensure_ascii=False)+'\ndocumentId: '+json.dumps('commonmark:0.31.2:'+route)+'\nlicenseSource: commonmark-spec\n---\n\n'+body;assert hashlib.sha256(md.encode()).hexdigest()==review['translation']['sha256'],'Replay differs from reviewed current Japanese: '+slug
 for p in [R/item['translation'],A/'src/content/docs/v0-31-2/ja'/(slug+'.md'),A/'public/source/v0-31-2/edited/ja'/(slug+'.md')]:p.parent.mkdir(exist_ok=True,parents=True);p.write_text(md)
 item['translationStatus']='saved-reviewed';item['contentReview']='passed-'+('888' if item['batch']==1 else '889')+'-separate-whole-pass';item['JapaneseTitle']=title
cm['JapaneseMeaningReview']='completed14/separatewholepasses888+889';(N/'CONTENT_MAP.json').write_text(json.dumps(cm,ensure_ascii=False,indent=2)+'\n');(A/'src/data/document-headings.json').write_text(json.dumps(headings,ensure_ascii=False,indent=2)+'\n');print('14JA replay from reviewed saved drafts exact current canonical SHA; headings/locale references restored')
