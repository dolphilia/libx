from pathlib import Path
from html.parser import HTMLParser
import json,hashlib,shutil
r=Path('/Users/dolphilia/github/libx');p=r/'docs/notes/document-import/jq/1.8.2';a=Path('/private/tmp/jq-ja-fields-607-a.json');b=Path('/private/tmp/jq-ja-fields-607-b.json');assert a.read_bytes()==b.read_bytes();ja=json.loads(a.read_text());en={x['key']:x for x in json.loads((p/'HTML_BLOCK_FIELDS.json').read_text())['fields']}
class Parts(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.code=[];self.links=[];self.active=False;self.buf=''
 def handle_starttag(self,tag,attrs):
  if tag=='code':self.active=True;self.buf=''
  if tag=='a':self.links += [v for k,v in attrs if k=='href']
 def handle_data(self,data):
  if self.active:self.buf+=data
 def handle_endtag(self,tag):
  if tag=='code' and self.active:self.code.append(self.buf);self.active=False
records=[]
for f in ja['fields']:
 orig=Parts();orig.feed(en[f['key']]['html']);trans=Parts();trans.feed(f['html']);assert orig.code==trans.code,(f['key'],orig.code,trans.code);assert orig.links==trans.links,f['key'];records.append({'key':f['key'],'codeDOMExact':True,'linksExact':True,'codeSpans':len(trans.code)})
assert len(records)==34;assert len(ja['translatedPages'])==4;assert len(ja['missingPages'])==12;assert ja['remainingFields']==267;assert ja['examplesInTranslatedPages']==35;assert not ja['releaseReady']
ev=r/'docs/notes/project-expansion/runs/evidence/2026-10-04-607';ev.mkdir();shutil.copyfile(a,p/'translations/JA_RENDER_FIELDS-607.json');shutil.copyfile('/private/tmp/jq-verify-render-fields-607.py',ev/'verify-fields.py');shutil.copyfile(r/'docs/notes/project-expansion/runs/evidence/2026-10-04-593/python-locked-requirements.txt',ev/'python-locked-requirements.txt')
(ev/'RENDER_FIELD_VERIFICATION.json').write_text(json.dumps({'twoRunsBytesExact':True,'markdownVersion':ja['markdownVersion'],'translatedPages':4,'missingPages':12,'fields':records,'protectedCodeDOMSpans':sum(x['codeSpans']for x in records),'remainingFields':267,'examplesInSavedDrafts':35,'releaseReady':False,'limitations':['34描画field準備のみ。JAページ全体の組込み・anchors/TOC/訳注/通知とbrowser/buildは未検証。','Manpage intro特有のEscapeHtmlは現描画器未対応で、そのページ到達時は明示的に停止する。','全301fieldの翻訳・全体別reviewは未完。']},ensure_ascii=False,indent=2)+'\n');print({'fields':len(records),'codeDOM':sum(x['codeSpans']for x in records),'remaining':267})
