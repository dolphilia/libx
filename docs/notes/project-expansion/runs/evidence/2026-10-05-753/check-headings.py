from pathlib import Path
from bs4 import BeautifulSoup
import json
root=Path('/Users/dolphilia/github/libx');ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-753';packet=root/'docs/notes/document-import/libuv/1.53.0';dist=Path('/private/tmp/libx-libuv-formal-689/apps/libuv/dist');heads=json.loads((ev/'PAGE_HEADINGS.json').read_text());rows=[]
for entry,hs in heads.items():
 s=BeautifulSoup((dist/entry/'index.html').read_text(),'html.parser');nav=s.select_one('nav[aria-labelledby="starlight-toc-heading"]');actual=[(a.get_text(strip=True),a['href']) for a in (nav.select('a[href]') if nav else [])];expected=[(h['text'],'#'+h['slug']) for h in hs if 2<=h['depth']<=3];assert actual==expected,(entry,actual,expected);rows.append({'entry':entry,'items':len(actual),'orderedTOCLabelsAndTargetsExact':True})
en=BeautifulSoup((packet/'canonical/en/reference/metrics.md').read_text().split('---\n',2)[2].replace('&#10;','\n'),'html.parser');ja=BeautifulSoup((dist/'v1-53-0/ja/reference/metrics/index.html').read_text(),'html.parser');actual=ja.select_one('article.libuv-document');assert [p.get_text() for p in en.select('pre')]==[p.get_text() for p in actual.select('pre')];assert len(actual.select('pre'))==1;assert not actual.select('[data-context-kind]')
(ev/'HEADING_CODE_CONTEXT_VERIFICATION.json').write_text(json.dumps({'headingPages':78,'rows':rows,'metricsCodeBlocksWhitespaceExact':1,'footerOutsideBody':True,'nativeDisplay':'pending','fullProjectComplete':False},ensure_ascii=False,indent=2)+'\n');print('78TOC exact; metrics1code whitespace exact')
