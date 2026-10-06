from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2')
s=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][3]
en={'entryStart':12,'entries':copy.deepcopy(s['entries'][12:22])};ja=copy.deepcopy(en)
bodies=[r'''
組込み関数 `del` は、オブジェクトからキーと、それに対応する値を削除します。
''',r'''
組込み関数 `getpath` は、`.` 内の、`PATHS` の各パスで見つかった値を出力します。
''',r'''
組込み関数 `setpath` は、`PATHS` で指定した `.` 内のパスを `VALUE` に設定します。
''',r'''
組込み関数 `delpaths` は、`PATHS` で指定した `.` 内のパスを削除します。
`PATHS` はパスの配列でなければなりません。各パスは、文字列と数値からなる配列です。
''',r'''
これらの関数は、オブジェクトと、キーと値の組の配列との間で変換します。`to_entries` にオブジェクトを渡すと、入力の各 `k: v` エントリーに対して、出力配列に `{"key": k, "value": v}` が含まれます。

`from_entries` は逆方向の変換を行います。`with_entries(f)` は `to_entries | map(f) | from_entries` の省略形で、オブジェクトのすべてのキーと値に何らかの操作を行う際に便利です。
`from_entries` は、キーとして `"key"`、`"Key"`、`"name"`、`"Name"`、`"value"`、`"Value"` を受け付けます。
''',r'''
関数 `select(f)` は、その入力に対して `f` がtrueを返す場合、入力をそのまま出力します。それ以外の場合は何も出力しません。

リストを絞り込む際に便利です。`[1,2,3] | map(select(. >= 2))` は `[2,3]` を返します。
''',r'''
これらの組込み関数は、それぞれ、配列、オブジェクト、反復可能な値（配列またはオブジェクト）、真偽値、数値、正規数、有限数、文字列、null、null以外の値、反復可能でない値である入力だけを選択します。
''',r'''
`empty` は結果を1つも返しません。まったく何も返さず、`null` さえ返しません。

ときどき便利です。必要になれば、使いどころが分かるでしょう :)
''',r'''
入力値、または引数として与えたメッセージを使って、エラーを生成します。エラーはtry/catchで捕捉できます。後述の説明を参照してください。
''',r'''
それ以上何も出力せずに、jqプログラムを停止します。jqは終了ステータス `0` で終了します。
''']
assert len(bodies)==len(ja['entries'])
for e,b in zip(ja['entries'],bodies): e['body']=b
for a,b in zip(en['entries'],ja['entries']):
 for k in ('title','body'):assert re.findall(r'`([^`]+)`',a[k])==re.findall(r'`([^`]+)`',b[k]),(a['title'],k)
 assert a.get('examples',[])==b.get('examples',[])
for n,v in [('012-021.source.json',en),('012-021.ja.json',ja)]:
 with (p/'translations/chunks/04-builtin'/n).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print('examples',sum(len(e.get('examples',[]))for e in en['entries']))
for i,(a,b)in enumerate(zip(en['entries'],ja['entries']),12):
 print('\nENTRY',i,a['title']);print('EN',a['body']);print('JA',b['body'])
