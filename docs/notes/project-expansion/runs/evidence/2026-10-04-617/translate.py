from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');s=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][3]
en={'entryStart':43,'entries':copy.deepcopy(s['entries'][43:53])};ja=copy.deepcopy(en)
bodies=[r'''
`.` 内で `s` が現れる位置の索引を含む配列を出力します。入力は配列でも構いません。その場合、`s` も配列であれば、`.` 内の一連の要素が `s` のすべての要素と一致する位置の索引を出力します。
''',r'''
最初の出現位置（`index`）または最後の出現位置（`rindex`）の索引を出力します。探す対象は、入力内の `s` です。
''',r'''
フィルター `inside(b)` は、入力がbに完全に含まれている場合にtrueを生成します。基本的には、`contains` の向きを逆にしたものです。
''',r'''
.が指定した文字列引数で始まる場合、`true` を出力します。
''',r'''
.が指定した文字列引数で終わる場合、`true` を出力します。
''',r'''
入力配列の中にある各配列の要素の、すべての組合せを出力します。引数 `n` を与えた場合、入力配列を `n` 回繰り返した、すべての組合せを出力します。
''',r'''
入力が指定した接頭文字列で始まる場合、その接頭文字列を取り除いた入力を出力します。
''',r'''
入力が指定した接尾文字列で終わる場合、その接尾文字列を取り除いた入力を出力します。
''',r'''
入力が指定した文字列で始まるか終わる場合、両端からその文字列を取り除いた入力を出力します。
''',r'''
`trim` は、先頭と末尾の両方の空白文字を取り除きます。

`ltrim` は、先頭（左側）の空白文字だけを取り除きます。

`rtrim` は、末尾（右側）の空白文字だけを取り除きます。

空白文字には、通常の `" "`、`"\n"`、`"\t"`、`"\r"` に加え、Unicode文字データベースで空白プロパティを持つすべての文字が含まれます。何を空白とみなすかは、将来変わる可能性があることに注意してください。
''']
assert len(bodies)==len(ja['entries'])
for e,b in zip(ja['entries'],bodies):e['body']=b
for a,b in zip(en['entries'],ja['entries']):
 for k in ('title','body'):assert re.findall(r'`([^`]+)`',a[k])==re.findall(r'`([^`]+)`',b[k]),(a['title'],k)
 assert a.get('examples',[])==b.get('examples',[])
for n,v in [('043-052.source.json',en),('043-052.ja.json',ja)]:
 with (p/'translations/chunks/04-builtin'/n).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print('examples',sum(len(e.get('examples',[]))for e in en['entries']))
for i,(a,b)in enumerate(zip(en['entries'],ja['entries']),43):
 print('\nENTRY',i,a['title']);print('EN',a['body']);print('JA',b['body'])
