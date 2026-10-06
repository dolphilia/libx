#!/usr/bin/env python3
"""Read-only jq source/canonical/app checks. Default requires all Japanese drafts.
Only isolated temporary regenerated output is written; checked input files are never edited.
--stage canonical explicitly reports incomplete Japanese translation and is not a release gate.
"""
import argparse, hashlib, json, re, subprocess, sys, tempfile
from pathlib import Path

def sha(data): return hashlib.sha256(data).hexdigest()
def load(p): return json.loads(p.read_text())
def strings(v, key=''):
    if isinstance(v, dict):
        for k, x in v.items(): yield from strings(x, f'{key}/{k}' if key else k)
    elif isinstance(v, list):
        for k, x in enumerate(v): yield from strings(x, f'{key}/{k}')
    elif isinstance(v, str): yield key, v

def check(packet, app, stage):
    errors=[]; expected=packet/'canonical'; manual=load(packet/'PARSED_MANUAL.json')
    def require(ok, message):
        if not ok: errors.append(message)
    with tempfile.TemporaryDirectory(prefix='jq-readonly-check-') as temp:
        output=Path(temp)/'regenerated'
        result=subprocess.run([sys.executable,str(Path(__file__).with_name('import.py')),'--packet',str(packet),'--output',str(output)],capture_output=True,text=True)
        if result.returncode: raise ValueError('固定入力/再生成失敗: '+result.stderr.strip())
        names=lambda p: {str(x.relative_to(p)) for x in p.rglob('*') if x.is_file()}
        actual=names(expected); generated=names(output)
        require(actual==generated,'保存定本のファイル集合が再生成と異なる')
        for rel in sorted(actual & generated): require((expected/rel).read_bytes()==(output/rel).read_bytes(),'再生成差分: '+rel)
    sections=manual['sections']; entries=sum(len(s.get('entries',[])) for s in sections); examples=sum(len(e.get('examples',[])) for s in sections for e in s.get('entries',[]))
    leaves=dict(strings(manual)); content_map=load(expected/'CONTENT_MAP.json'); rows=content_map['rows']
    require(len(rows)==len(leaves)==1135,'内容対応表の全1135文字列coverage不一致')
    require(len({x['sourceKey'] for x in rows})==len(rows),'内容対応表のkey重複')
    require({x['sourceKey'] for x in rows}==set(leaves),'内容対応表の原文key欠落/追加')
    for row in rows:
        key=row['sourceKey'];require(key in leaves and sha(leaves[key].encode())==row['sourceTextSha256'],'内容対応表hash不一致: '+key)
        require((expected/row['canonicalPage']).is_file(),'内容対応表の出力先不存在: '+key)
    require(entries==content_map['entries']==136,'全entry件数不一致')
    require(examples==content_map['examples']==250,'全実行例件数不一致')
    boundary=load(packet/'BOUNDARY.json'); page_names=['00-introduction.md']+[f'{i+1:02d}-{b["id"]}.md' for i,b in enumerate(boundary['sections'])]+['15-manpage-appendix.md']
    for i,section in enumerate(sections):
        text=(expected/'markdown'/page_names[i+1]).read_text()
        for j,e in enumerate(section.get('entries',[])):
            for k,example in enumerate(e.get('examples',[])):
                key=f'sections/{i}/entries/{j}/examples/{k}'
                start=f'<!-- jq-example:{key}:start -->';end=f'<!-- jq-example:{key}:end -->'
                require(text.count(start)==text.count(end)==1,'実行例marker欠落/重複: '+key)
                if start not in text or end not in text: continue
                block=text.split(start,1)[1].split(end,1)[0]
                fenced=[m.group(2) for m in re.finditer(r'^(`{3,})[^\n]*\n(.*?)\n\1\s*$',block,re.M|re.S)]
                require(fenced==["jq '"+example['program']+"'",example['input'],*example['output']],'Command/Input/Output全文不一致: '+key)
    en=app/'src/content/docs/v1-8-2/en'
    expected_app={**{'01-guide/'+n:expected/'markdown'/n for n in page_names},**{'02-license/'+x.name:x for x in (expected/'licenses').glob('*.md')}}
    actual_app={str(x.relative_to(en)) for x in en.rglob('*.md')}
    require(actual_app==set(expected_app),'ENアプリ本文集合不一致')
    for rel,source in expected_app.items(): require((en/rel).is_file() and (en/rel).read_bytes()==source.read_bytes(),'ENアプリ定本差分: '+rel)
    require((app/'src/data/document-headings.json').read_bytes()==(expected/'document-headings.json').read_bytes(),'EN heading metadata差分')
    translation_dir=packet/'translations'; translated=[];missing=[]
    for n in page_names:
        stem=n[:-3];a=translation_dir/(stem+'.source.json');b=translation_dir/(stem+'.ja.json')
        if not a.is_file() or not b.is_file():missing.append(n);continue
        source=load(a);ja=load(b)
        original=({'headline':manual['headline'],'body':manual['body']} if n==page_names[0] else sections[page_names.index(n)-1] if n!=page_names[-1] else {'manpage_intro':manual['manpage_intro'],'manpage_epilogue':manual['manpage_epilogue']})
        require(source==original,'翻訳対照原文失効: '+n)
        source_fields=dict(strings(source));ja_fields=dict(strings(ja));require(set(source_fields)==set(ja_fields),'翻訳field欠落/追加: '+n)
        for key,value in source_fields.items():
            if key not in ja_fields:continue
            code=lambda s: re.findall(r'`([^`]+)`',s)
            require(code(value)==code(ja_fields[key]),'翻訳inline code変更: '+n+' / '+key)
            if '/examples/' in '/'+key: require(value==ja_fields[key],'翻訳実行例変更: '+n+' / '+key)
        translated.append(n)
    if stage=='full':require(not missing,'日本語未翻訳: '+', '.join(missing))
    return {'stage':stage,'status':'failed' if errors else 'passed-canonical-only' if stage=='canonical' else 'passed-content-structure-only','errors':errors,'entries':entries,'examples':examples,'sourceStringLeaves':len(leaves),'manualPages':len(page_names),'noticePages':2,'translatedDraftPages':translated,'missingJapanesePages':missing,'fullJapaneseContentReview':'pending','buildDisplayIntegration':'pending','releaseReady':False}

parser=argparse.ArgumentParser();parser.add_argument('--packet',type=Path,required=True);parser.add_argument('--app',type=Path,required=True);parser.add_argument('--stage',choices=['full','canonical'],default='full');args=parser.parse_args()
try:
    result=check(args.packet.resolve(),args.app.resolve(),args.stage);print(json.dumps(result,ensure_ascii=False,indent=2));sys.exit(1 if result['errors'] else 0)
except (OSError,ValueError,KeyError,AssertionError) as error:
    print(json.dumps({'status':'failed','errors':[str(error)],'releaseReady':False},ensure_ascii=False));sys.exit(1)
