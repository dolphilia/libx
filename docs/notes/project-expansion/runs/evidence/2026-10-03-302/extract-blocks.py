from pathlib import Path
import re,json,hashlib
w=Path('/private/tmp/libx-cjson-import-20261003');n=w/'docs/notes/document-import/cjson/v1-7-19';out=n/'translation';out.mkdir(exist_ok=True);blocks=[]
pattern=re.compile(r'<(?P<tag>p|h[1-6]|li)\b[^>]*>(?P<body>(?:(?!<(?:p|h[1-6]|li|ul|ol|pre)\b)[\s\S])*?)</(?P=tag)>')
for page in ['01-guide/01-usage.md','02-license/01-license.md','02-license/02-contributors.md']:
 s=(n/'generated/canonical'/page).read_text();pageblocks=[]
 for i,m in enumerate(pattern.finditer(s)):
  skip=page.startswith('02-license/02') and m['tag']=='li'
  notice=page.startswith('01-') and s.rfind('<blockquote>',0,m.start())>s.rfind('</blockquote>',0,m.start())
  rec={'id':f'{len(blocks):03d}','page':page,'tag':m['tag'],'source':m['body'],'sourceSha256':hashlib.sha256(m['body'].encode()).hexdigest(),'unchangedReason':'Original contributor propernames and links' if skip else ('Original English MIT notice retained in original guideposition' if notice else None)};blocks.append(rec)
(out/'SOURCE_BLOCKS.json').write_text(json.dumps(blocks,ensure_ascii=False,indent=2)+'\n')
for b in blocks:
 if not b['unchangedReason']:print(b['id']+'\t'+b['source'].replace('\n',' '))
print('TOTAL',len(blocks),'TRANSLATE',sum(not b['unchangedReason'] for b in blocks))
