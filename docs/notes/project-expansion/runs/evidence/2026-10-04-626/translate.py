from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');en=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][9];ja=copy.deepcopy(en);ja['title']='ストリーミング'
ja['body']=r'''
`--stream` オプションを使うと、jqは入力テキストをストリーミング形式で解析できます。そのため、大きなJSONテキストを、解析が完了してからではなく、すぐに処理し始められます。1GBの単一のJSONテキストがある場合、ストリーミングによって、より早く処理できます。

ただし、ストリーミングを扱うのは簡単ではありません。jqプログラムの入力が、`[<path>, <leaf-value>]` や、いくつかの別の形式になるためです。

ストリームを扱いやすくするため、いくつかの組込み関数があります。

以下の例では、`["a",["b"]]` のストリーミング形式を使います。これは `[[0],"a"],[[1,0],"b"],[[1,0]],[[1]]` です。

ストリーミング形式には、`[<path>, <leaf-value>]`（スカラー値、空の配列、空のオブジェクトを示すもの）と、`[<path>]`（配列またはオブジェクトの終わりを示すもの）が含まれます。将来のjqを `--stream` と `--seq` で実行した場合、入力テキストの解析に失敗したときに、`["error message"]` のような追加の形式を出力する可能性があります。
'''
bodies=[r'''
数値を入力として受け取り、指定したストリーミング式の出力から、その数に対応する個数のパス要素を左側から切り落とします。
''',r'''
ストリーム式の出力に対応する値を出力します。
''',r'''
組込み関数 `tostream` は、入力のストリーミング形式を出力します。
''']
for e,b in zip(ja['entries'],bodies):e['body']=b
for a,b in [(en,ja),*zip(en['entries'],ja['entries'])]:
 for k in ('title','body'):assert re.findall(r'`([^`]+)`',a[k])==re.findall(r'`([^`]+)`',b[k]),(a['title'],k)
 assert a.get('examples',[])==b.get('examples',[])
for suffix,v in [('source',en),('ja',ja)]:
 with (p/'translations'/('10-streaming.'+suffix+'.json')).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print('EN INTRO',en['body']);print('JA INTRO',ja['body'])
for a,b in zip(en['entries'],ja['entries']):print('TITLE',a['title']);print('EN',a['body']);print('JA',b['body'])
