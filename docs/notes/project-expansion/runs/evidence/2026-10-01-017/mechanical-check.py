from pathlib import Path
from html.parser import HTMLParser
import html,hashlib,json,re,datetime
root=Path('/Users/dolphilia/github/libx');base=Path('docs/notes/document-import/glfw/v3-5-1/full-review-2026-10-01');ev=Path('docs/notes/project-expansion/runs/evidence/2026-10-01-017');progress=json.loads((root/base/'WINDOW_REFERENCE_REVIEW_PROGRESS.json').read_text());meta=json.loads((root/ev/'annotations-and-replacements.json').read_text());sha=lambda p:hashlib.sha256((root/p).read_bytes()).hexdigest();artifact=lambda p:{'path':str(p),'sha256':sha(p)}
for art in progress['artifacts'].values():assert sha(Path(art['path']))==art['sha256']
class TextNodes(HTMLParser):
 def __init__(self):super().__init__(convert_charrefs=True);self.nodes=[]
 def handle_data(self,s):self.nodes.append(s)
def text(s):
 p=TextNodes();p.feed(s);return ' '.join(p.nodes)
def normalize(s):return re.sub(r'\s+','',html.unescape(s))
src=(root/progress['artifacts']['source']['path']).read_text();body=re.search(r'<div class="contents">([\s\S]*?)</div><!-- contents -->',src).group(1)
texts={locale:(root/progress['artifacts'][role]['path']).read_text() for locale,role in [('en','canonical'),('ja','translation')]}
for locale in ['en','ja']:
 s=texts[locale];assert len(re.findall(r'^> \*\*Libx(?: reference note|参照注記)[^\n]+',s,re.M))==7
 plain=re.sub(r'^> \*\*Libx(?: reference note|参照注記)[^\n]+\n\n','',s,flags=re.M);plain=re.sub(r'^# [^\n]+\n\n','',plain,count=1,flags=re.M)
 expected=(root/ev/f'initial-{locale}.md').read_text()
 if locale=='ja':
  for old,replacement in meta['replacements']:assert expected.count(old)==1;expected=expected.replace(old,replacement)
 assert plain==expected,locale+' preservation'
def protos(s,markdown=False):
 result=[]
 for fragment in re.findall(r'<div class="memproto">([\s\S]*?)</div>',s):
  if markdown:
   lines=[x for x in fragment.splitlines() if not re.fullmatch(r'\s*\|[-|\s]*\|\s*',x)]
   fragment='\n'.join(lines).replace('\\#','#');fragment=re.sub(r'(?<!\\)\*([A-Za-z_]\w*)\*',r'\1',fragment);fragment=fragment.replace('\\*','*').replace('|','')
  result.append(normalize(text(fragment)))
 return result
source_protos=protos(body);assert source_protos
for locale in texts:assert protos(texts[locale],True)==source_protos,locale+' memproto'
def fragments(s,markdown=False):
 result=[]
 # Each Doxygen code line contains spans/links, but no nested div. Tooltip
 # prose is outside class=line and has translated labels, so it is not code.
 for fragment in re.findall(r'<div class="line">([\s\S]*?)</div>',s):
  if markdown:fragment=fragment.replace('\\*','*')
  result.append(normalize(text(fragment)))
 return result
source_fragments=fragments(body);assert len(source_fragments)==18
for locale in texts:assert fragments(texts[locale],True)==source_fragments,locale+' fragments'
def urls(s):return [x[0]or x[1]for x in re.findall(r'href="([^"]+)"|\]\(([^)]+)\)',s)]
en_urls=urls(texts['en']);ja_urls=[x.replace('/ja/','/en/')for x in urls(texts['ja'])];assert en_urls==ja_urls,'URL order/target'
def ids(s):return re.findall(r'\bid="([^"]+)"',s)
assert ids(texts['en'])==ids(texts['ja']),'id order'
source_ids=ids(body);extra_ids=set(ids(texts['en']))-set(source_ids);missing_ids=set(source_ids)-set(ids(texts['en']));assert not missing_ids,missing_ids
# Pandoc supplies visible summary headings with explicit IDs in addition to upstream anchors.
assert extra_ids=={'macros','typedefs','functions'},extra_ids
macro_pattern=r'\\#define (GLFW_\w+)\s+(0x[\da-fA-F]+|GLFW_\w+)'
source_macros=[(x[0],x[1])for x in re.findall(r'<td class="memname">#define (GLFW_\w+)(?:&#160;|\s)+(0x[\da-fA-F]+|GLFW_\w+)</td>',body)]
for locale in texts:assert re.findall(macro_pattern,texts[locale])==source_macros,locale+' macros'
# Ensure the note is outside all rows of the glfwSetWindowPos parameter table.
for locale in texts:
 item=next(x for x in meta['annotations']if x['name']=='glfwSetWindowPos()');prefix='> **Libx reference note (GLFW 3.5.1):** 'if locale=='en'else'> **Libx参照注記（GLFW 3.5.1）:** '
 assert item[locale+'Passage']+'\n\n'+prefix+item[locale]in texts[locale]
report={'method':'mechanical-check','status':'passed','checkedAt':datetime.datetime.now(datetime.timezone.utc).isoformat(),'scope':progress['id'],'prototypeTables':len(source_protos),'macroDefinitions':len(source_macros),'codeFragments':len(source_fragments),'links':len(en_urls),'explicitIds':len(ids(texts['en'])),'upstreamIds':len(source_ids),'additionalPandocIds':sorted(extra_ids),'notesPerLocale':7,'results':['固定原文と英日すべてのmemproto署名表をHTMLテキスト・Markdown表/italic/escape正規化後に順序一致。全マクロ値/aliasと全fragmentも一致。','英日URLと明示id全件がlocale置換後に順序一致。原文のcontents内id全件保全、追加id3個はPandoc要約表見出し。原文各URLの内部化対応は独立再生成/check:contentで別途検証。','h1/7注記を除くEN全文は初回入力byte一致。JAは保存した原文訳復元4箇所とmay2文以外byte一致。引数表3行が注記前に連続し表を分断しない。','AI全文内容レビュー、実機API挙動、ブラウザー表示をこの検査だけでは合格にしない。'],'artifacts':[artifact(Path(x['path']))for x in progress['artifacts'].values()]+[artifact(ev/'annotations-and-replacements.json'),artifact(ev/'initial-en.md'),artifact(ev/'initial-ja.md')]}
(root/base/'WINDOW_REFERENCE_CODE_CHECK.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print(json.dumps({k:report[k]for k in ['status','prototypeTables','macroDefinitions','codeFragments','links','explicitIds']},ensure_ascii=False))
# Derived final views contain every nonempty text row, without a language model.
tags=r'</?(?:table|colgroup|col|tbody|thead|tr|td|th|div|span|a|h2|br|p|code)\b[^>]*>'
views=[]
for locale,s in texts.items():
 rows=[]
 for line,n in zip(s.splitlines(),range(1,len(s.splitlines())+1)):
  stripped=html.unescape(re.sub(tags,'',line,flags=re.I))
  if stripped.strip() in ['<!-- -->','<!-- contents -->','<!-- fragment -->']:continue
  if not stripped.strip()or re.fullmatch(r'\s*\|[-|\s]*\|\s*',stripped):continue
  rows.append(f'{n}: {stripped}')
 path=ev/f'window-{locale}-final-review-view.txt';(root/path).write_text('\n'.join(rows)+'\n');views.append({'locale':locale,'input':progress['artifacts']['canonical'if locale=='en'else'translation'],'view':artifact(path),'rows':len(rows),'coverage':[]})
(root/ev/'final-review-view-method.json').write_text(json.dumps({'method':'derived-full-text-review-view','preserved':'全非空本文・コード・署名・見出し・表セル・Markdownリンクと原行番号。AI要約・翻訳なし。','removed':'既知のHTML構造タグ/属性、空行、空の表ヘッダー/区切り、構造コメントのみ。URL/id/署名は別コード検査。','limitations':'表示生成だけで読了/合格にしない。実読した範囲のみ進捗へ追記する。','views':views},ensure_ascii=False,indent=2)+'\n')
