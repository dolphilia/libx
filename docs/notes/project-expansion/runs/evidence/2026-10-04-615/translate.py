from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');s=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][3]
en={'entryStart':22,'entries':copy.deepcopy(s['entries'][22:30])};ja=copy.deepcopy(en)
bodies=[r'''
それ以上何も出力せずに、jqプログラムを停止します。入力は `stderr` に、そのままの出力として表示されます（つまり、文字列に二重引用符は付きません）。装飾は一切付かず、改行さえ付きません。

指定した `exit_code`（既定値は `5`）が、jqの終了ステータスになります。

例：`"Error: something went wrong\n"|halt_error(1)`。
''',r'''
"file"キーと"line"キーを持つオブジェクトを生成します。それぞれの値は、`$__loc__` が現れる位置のファイル名と行番号です。
''',r'''
`paths` は、入力のすべての要素に至るパスを出力します。ただし、.自体を表す空のリストは出力しません。

`paths(f)` は、`f` が `true` になる値に至るパスを出力します。つまり、`paths(type == "number")` は、すべての数値に至るパスを出力します。
''',r'''
フィルター `add` は配列を入力として受け取り、その配列の要素を足し合わせた結果を出力します。入力配列の要素の型に応じて、これは合計、連結、またはマージになります。規則は、前述の `+` 演算子と同じです。

入力が空の配列の場合、`add` は `null` を返します。

`add(generator)` は、入力ではなく、指定したジェネレーターに対して動作します。
''',r'''
フィルター `any` は真偽値の配列を入力として受け取り、配列の要素のいずれかがtrueなら、出力として `true` を生成します。このとき、該当する要素の値は `true` です。

入力が空の配列の場合、`any` は `false` を返します。

`any(condition)` という形式は、指定した条件を入力配列の要素に適用します。

`any(generator; condition)` という形式は、指定した条件を、指定したジェネレーターのすべての出力に適用します。
''',r'''
フィルター `all` は真偽値の配列を入力として受け取り、配列のすべての要素がtrueなら、出力として `true` を生成します。このとき、各要素の値は `true` です。

`all(condition)` という形式は、指定した条件を入力配列の要素に適用します。

`all(generator; condition)` という形式は、指定した条件を、指定したジェネレーターのすべての出力に適用します。

入力が空の配列の場合、`all` は `true` を返します。
''',r'''
フィルター `flatten` は、入れ子になった配列を含む配列を入力として受け取り、元の配列の内側にあるすべての配列を、それぞれの値で再帰的に置き換えた、平坦な配列を生成します。引数を渡すことで、入れ子を何階層まで平坦化するか指定できます。

`flatten(2)` は `flatten` と同様ですが、深さ2階層までしか処理しません。
''',r'''
関数 `range` は、ある範囲の数値を生成します。`range(4; 10)` は、4を含み10を含まない範囲の6個の数値を生成します。これらの数値は、個別の出力として生成されます。範囲を配列として取得するには、`[range(4; 10)]` を使います。

引数が1つの形式は、0から指定した数値まで、1ずつ増加する数値を生成します。

引数が2つの形式は、`from` から `upto` まで、1ずつ増加する数値を生成します。

引数が3つの形式は、`from` から `upto` まで、`by` ずつ増加する数値を生成します。
''']
# Preserve source inline-code ordering naturally in the two boolean descriptions.
bodies[4]=bodies[4].replace('配列の要素のいずれかがtrueなら、出力として `true` を生成します。このとき、該当する要素の値は `true` です。','出力として `true` を生成するのは、配列の要素のいずれかが `true` の場合です。')
bodies[5]=bodies[5].replace('配列のすべての要素がtrueなら、出力として `true` を生成します。このとき、各要素の値は `true` です。','出力として `true` を生成するのは、配列のすべての要素が `true` の場合です。')
for e,b in zip(ja['entries'],bodies):e['body']=b
for a,b in zip(en['entries'],ja['entries']):
 for k in ('title','body'):assert re.findall(r'`([^`]+)`',a[k])==re.findall(r'`([^`]+)`',b[k]),(a['title'],k)
 assert a.get('examples',[])==b.get('examples',[])
for n,v in [('022-029.source.json',en),('022-029.ja.json',ja)]:
 with (p/'translations/chunks/04-builtin'/n).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print('examples',sum(len(e.get('examples',[]))for e in en['entries']))
for i,(a,b)in enumerate(zip(en['entries'],ja['entries']),22):
 print('\nENTRY',i,a['title']);print('EN',a['body']);print('JA',b['body'])
