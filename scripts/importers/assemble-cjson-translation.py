#!/usr/bin/env python3
"""Assemble saved human/Codex-authored translations; never call an LLM."""
from pathlib import Path
import json,re,argparse,hashlib,collections
p=argparse.ArgumentParser();p.add_argument('--root',type=Path,default=Path(__file__).resolve().parents[2]);p.add_argument('--check',action='store_true');a=p.parse_args();r=a.root.resolve();n=r/'docs/notes/document-import/cjson/v1-7-19';blocks=json.loads((n/'translation/SOURCE_BLOCKS.json').read_text());manual=dict(line.split('\t',1) for line in (n/'translation/JA_BLOCKS.tsv').read_text().splitlines());labels={'cJSON':'cJSON','Table of contents':'目次','License':'ライセンス','MIT License':'MIT ライセンス','Usage':'使い方','Welcome to cJSON':'cJSONへようこそ','Welcome to cJSON.':'cJSONへようこそ','Building':'ビルド','copying the source':'ソースのコピー','Copying the source':'ソースのコピー','CMake':'CMake','Makefile':'Makefile','Meson':'Meson','Vcpkg':'Vcpkg','Including cJSON':'cJSONのインクルード','Data Structure':'データ構造','Working with the data structure':'データ構造の操作','Basic types':'基本型','Arrays':'配列','Objects':'オブジェクト','Parsing JSON':'JSONの解析','Printing JSON':'JSONの出力','Example':'例','Printing':'出力','Parsing':'解析','Caveats':'注意事項','Zero Character':'ゼロ文字','Character Encoding':'文字エンコーディング','C Standard':'C規格','Floating Point Numbers':'浮動小数点数','Deep Nesting Of Arrays And Objects':'配列とオブジェクトの深い入れ子','Thread Safety':'スレッド安全性','Case Sensitivity':'大文字と小文字の区別','Duplicate Object Members':'オブジェクトの重複メンバー','Enjoy cJSON!':'cJSONをお楽しみください！','libx source notes':'libxによる原文注記','Contributors':'貢献者'}
pattern=re.compile(r'<(?P<tag>p|h[1-6]|li)\b[^>]*>(?P<body>(?:(?!<(?:p|h[1-6]|li|ul|ol|pre)\b)[\s\S])*?)</(?P=tag)>')
licenseJa='''<section class="cjson-license-reference-translation" aria-label="MITライセンスの日本語参考訳">
<h2 id="mit-reference-translation">MITライセンスの日本語参考訳</h2>
<p>以下は上に保持した英語の原通知の非公式参考訳です。ライセンス条件の原文は英語の通知を参照してください。</p>
<p>Copyright (c) 2009-2017 Dave Gamble and cJSON contributors</p>
<p>本ソフトウェアおよび関連する文書ファイル（以下「本ソフトウェア」）の複製を取得するすべての人に対し、本ソフトウェアを無制限に扱うことを、無償で許可します。これには、本ソフトウェアの使用、複製、変更、結合、公開、頒布、サブライセンス、および複製の販売の権利が含まれますが、これらに限定されません。また、本ソフトウェアを提供する相手に同じ権利を許可することも認めます。ただし、次の条件に従うものとします。</p>
<p>上記の著作権表示および本許諾表示を、本ソフトウェアのすべての複製、またはその重要な部分に含めるものとします。</p>
<p>本ソフトウェアは「現状のまま」で提供され、明示・黙示を問わず、いかなる保証もありません。これには、商品性、特定目的への適合性および権利非侵害の保証が含まれますが、これらに限定されません。著作者または著作権者は、契約、不法行為、その他の根拠のいずれによる場合も、本ソフトウェア、その使用、またはその他の取扱いに起因もしくは関連するいかなる請求、損害、その他の責任についても、一切責任を負いません。</p>
</section>'''
outputs={};records=[]
for page,title in [('01-guide/01-usage.md','cJSON 利用ガイド'),('02-license/01-license.md','MIT ライセンス'),('02-license/02-contributors.md','貢献者')]:
 source=(n/'generated/canonical'/page).read_text();bs=[b for b in blocks if b['page']==page];matches=list(pattern.finditer(source));assert len(matches)==len(bs);parts=[];last=0
 for m,b in zip(matches,bs):
  assert m['body']==b['source'] and hashlib.sha256(m['body'].encode()).hexdigest()==b['sourceSha256'];x=b['source']
  if b['unchangedReason']:ja=x
  elif b['id'] in manual:ja=manual[b['id']]
  elif x in labels:ja=labels[x]
  else:
   anchor=re.fullmatch(r'<a href="([^"]+)">([^<]+)</a>',x);assert anchor and anchor[2] in labels, (b['id'],x);ja=f'<a href="{anchor[1]}">{labels[anchor[2]]}</a>'
  def codes(v):return collections.Counter(re.findall(r'<code>([\s\S]*?)</code>',v))
  assert codes(ja)==codes(x),(b['id'],'inline identifiers changed')
  assert collections.Counter(re.findall(r'href="([^"]+)"',ja))==collections.Counter(re.findall(r'href="([^"]+)"',x)),b['id']
  parts.append(source[last:m.start('body')]);parts.append(ja);last=m.end('body')
 parts.append(source[last:]);result=''.join(parts)
 # Parent TOC list entries contain nested lists and therefore aren't leafblocks.
 result=re.sub(r'(<a href="#[^"]+">)([^<]+)(</a>)',lambda m:m[1]+labels.get(m[2],m[2])+m[3],result)
 result=result.replace('/docs/cjson/v1-7-19/en/','/docs/cjson/v1-7-19/ja/').replace('aria-label="libx source notes"','aria-label="libxによる原文注記"');result=re.sub(r'^title:.*$', 'title: '+json.dumps(title,ensure_ascii=False),result,count=1,flags=re.M)
 if page=='01-guide/01-usage.md':result=result.replace('<blockquote>','<p class="cjson-original-notice-label">原文MIT通知を以下に保持しています。<a href="/docs/cjson/v1-7-19/ja/02-license/01-license/#mit-reference-translation">日本語参考訳</a>はライセンスページを参照してください。</p>\n<blockquote>',1)
 if page=='02-license/01-license.md':result+='\n'+licenseJa+'\n'
 assert re.findall(r'<pre\b[^>]*>[\s\S]*?</pre>',source)==re.findall(r'<pre\b[^>]*>[\s\S]*?</pre>',result)
 assert re.findall(r' id="([^"]+)"',source)==[x for x in re.findall(r' id="([^"]+)"',result) if x!='mit-reference-translation']
 outputs[r/'apps/cjson/src/content/docs/v1-7-19/ja'/page]=result.encode();outputs[n/'translation/generated'/page]=result.encode();records.append({'page':page,'canonicalSha256':hashlib.sha256(source.encode()).hexdigest(),'translatedSha256':hashlib.sha256(result.encode()).hexdigest(),'sourceBlocks':len(bs),'unchangedBlocks':sum(bool(b['unchangedReason']) for b in bs),'codeExact':True,'originalIdsPreserved':True,'initialSourceComparison':'Wholepage translated with fixedsource inview; full independent review pending'})
outputs[n/'translation/generated/GENERATION.json']=(json.dumps({'assembler':'scripts/importers/assemble-cjson-translation.py','records':records,'parentTOCLabels':'All anchor labels mapped by sameheading table','originalNotice':'GuideEnglishMIT retained, Japanese fullreference translation onlicensepage','review':'Separate wholecontent review pending','noLLMOnRegeneration':True},ensure_ascii=False,indent=2)+'\n').encode()
for out,b in outputs.items():
 if a.check:assert out.exists() and out.read_bytes()==b,str(out)
 else:out.parent.mkdir(parents=True,exist_ok=True);out.write_bytes(b)
print(json.dumps({'mode':'check' if a.check else 'write','records':records},ensure_ascii=False))
