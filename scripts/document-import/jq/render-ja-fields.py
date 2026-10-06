#!/usr/bin/env python3
"""Prepare fixed Japanese rendering fields from saved full-page drafts; no translation.
Needs the same fixed Markdown3.10.2 as the upstream reference. No EN fallback.
Writes only a new output path, after source/code/example checks.
"""
import argparse, json, sys, re, html, hashlib
from pathlib import Path
parser=argparse.ArgumentParser();parser.add_argument('--packet',type=Path,required=True);parser.add_argument('--python-deps',type=Path,required=True);parser.add_argument('--output',type=Path,required=True);args=parser.parse_args()
if args.output.exists() or args.output.is_symlink():raise SystemExit('existing output refused')
sys.path.insert(0,str(args.python_deps.resolve()));import markdown
if markdown.__version__!='3.10.2':raise SystemExit('Markdown version mismatch')
sha=lambda s:hashlib.sha256(s.encode()).hexdigest();load=lambda p:json.loads(p.read_text());p=args.packet;manual=load(p/'PARSED_MANUAL.json');boundary=load(p/'BOUNDARY.json');reference=load(p/'HTML_BLOCK_FIELDS.json');modes={x['key']:x['mode']for x in reference['fields']}
names=['00-introduction']+[f'{i+1:02d}-{x["id"]}'for i,x in enumerate(boundary['sections'])]+['15-manpage-appendix'];results=[];translated=[];missing=[];examples=0

def leaves(value,key=''):
    if isinstance(value,str):yield key,value
    elif isinstance(value,dict):
        for k,v in value.items():yield from leaves(v,key+'/'+k if key else k)
    elif isinstance(value,list):
        for k,v in enumerate(value):yield from leaves(v,key+'/'+str(k))

for index,name in enumerate(names):
    source=p/'translations'/(name+'.source.json');target=p/'translations'/(name+'.ja.json')
    if not source.exists() or not target.exists():missing.append(name);continue
    en=load(source);ja=load(target);original={'headline':manual['headline'],'body':manual['body']}if index==0 else manual['sections'][index-1]if index<15 else {'manpage_intro':manual['manpage_intro'],'manpage_epilogue':manual['manpage_epilogue']}
    if en!=original:raise SystemExit('translation source changed: '+name)
    a=dict(leaves(en));b=dict(leaves(ja))
    if set(a)!=set(b):raise SystemExit('translation field set mismatch: '+name)
    for key,value in a.items():
        if re.findall(r'`([^`]+)`',value)!=re.findall(r'`([^`]+)`',b[key]):raise SystemExit('code span changed: '+name+'/'+key)
        if '/examples/' in '/'+key and value!=b[key]:raise SystemExit('example changed: '+name+'/'+key)
    for key,value in b.items():
        global_key=key if index in [0,15]else f'sections/{index-1}/{key}'
        if global_key not in modes:continue
        mode=modes[global_key]
        if mode=='section-title':rendered='<h2>'+html.escape(value)+'</h2>'
        elif mode=='entry-title':rendered='<h3>'+re.sub(r'</?p>','',markdown.markdown(value))+'</h3>'
        elif mode=='manpage-intro':raise SystemExit('manpage intro renderer must be implemented before this page')
        else:rendered=markdown.markdown(value)
        # Avoid Astro reparsing blank lines inside raw HTML pre; DOM newlines retained.
        rendered=re.sub(r'<pre>.*?</pre>',lambda m:m[0].replace('\n','&#10;'),rendered,flags=re.S)
        results.append(dict(key=global_key,page=name,mode=mode,sourceSha256=sha(a[key]),translatedSha256=sha(value),html=rendered))
    examples+=sum(len(e.get('examples',[]))for e in ja.get('entries',[]));translated.append(name)
output={'status':'partial-japanese-render-fields-not-app-validation','markdownVersion':markdown.__version__,'inputSha256':reference['inputSha256'],'translatedPages':translated,'missingPages':missing,'fields':results,'examplesInTranslatedPages':examples,'remainingFields':len(modes)-len(results),'releaseReady':False}
with args.output.open('x') as f:f.write(json.dumps(output,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'translatedPages':len(translated),'missingPages':len(missing),'fields':len(results),'examples':examples,'releaseReady':False}))
