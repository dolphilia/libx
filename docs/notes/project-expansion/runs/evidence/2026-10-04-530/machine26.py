from pathlib import Path
import json,re,hashlib
root=Path('/Users/dolphilia/github/libx');w=Path('/private/tmp/libx-xxhash-import-20261003');note=root/'docs/notes/document-import/xxhash/v0-8-4';mp=json.loads((note/'CONTENT_MAP.json').read_text());it=next(x for x in mp['items']if x['slug']=='02-api/26-struct_x_x_h32__state__s');en=(w/it['canonical']).read_text();draft=note/'drafts/ja/26-api-32-state.reviewed-content.md';ja=draft.read_text();m=json.load(open('/private/tmp/libx-struct32-26-labels-530.json'))
def norm(s):
 s=s.replace('/v0-8-4/ja/','/v0-8-4/en/')
 for a,b in m['titles'].items():s=s.replace('title="'+b+'"','title="'+a+'"')
 return s
def anchor(s):
 for a,b in m['labels'].items():s=s.replace(b,a)
 return s
def matches(s,p):return re.findall(p,s)
assert matches(norm(ja),r'<[^>]*>')==matches(en,r'<[^>]*>')
assert list(map(anchor,matches(ja,r'<a\b[^>]*>([\s\S]*?)</a>')))==matches(en,r'<a\b[^>]*>([\s\S]*?)</a>')
assert matches(norm(ja),r'href="([^"]*)"')==matches(en,r'href="([^"]*)"')
ids=matches(ja,r'\bid="([^"]+)"');assert ids==matches(en,r'\bid="([^"]+)"')
patterns={'codeLines':r'<div class="line">([\s\S]*?)</div>','codeInline':r'<code\b[^>]*>([\s\S]*?)</code>','functionSignatures':r'<div class="memproto">([\s\S]*?)</table>[^<]*</div>'}
checks={}
for k,p in patterns.items():
 x=matches(norm(ja),p);assert x==matches(en,p),k;checks[k+'Exact']=len(x)
links=matches(ja,r'href="#([^"]+)"');assert set(links)<=set(ids)
sha=lambda b:hashlib.sha256(b).hexdigest()
payload={'status':'passed','pages':[{'slug':it['slug'],'canonicalSHA256':sha(en.encode()),'translationSHA256':sha(ja.encode()),'checks':{**checks,'idsOrderedExact':len(ids),'tagsAndAttributesExactExceptDeclaredTitlesAndLocale':True,'APIAnchorsExactExceptDeclaredLabels':True,'hrefOrderedExactExceptLocale':True,'samePageTargetsPassed':len(links),'reviewStatus':'separate-content-review'}}],'wholeProjectLinksPassed':False,'nativeDisplay':'pending'}
Path('/private/tmp/xxhash-api-530-26-machine.json').write_text(json.dumps(payload,ensure_ascii=False,indent=2));assert not (w/it['translation']).exists();(w/it['translation']).write_bytes(draft.read_bytes());print(payload)
