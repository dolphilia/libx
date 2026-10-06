from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');s=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][3]
en={'entryStart':30,'entries':copy.deepcopy(s['entries'][30:43])};ja=copy.deepcopy(en)
bodies=[r'''
関数 `floor` は、数値入力の床、つまりその値以下の最大の整数を返します。
''',r'''
関数 `sqrt` は、数値入力の平方根を返します。
''',r'''
関数 `tonumber` は、入力を数値として解析します。正しい形式の文字列を対応する数値に変換し、数値はそのままにします。それ以外の入力はすべてエラーになります。
''',r'''
関数 `toboolean` は、入力を真偽値として解析します。正しい形式の文字列を対応する真偽値に変換し、真偽値はそのままにします。それ以外の入力はすべてエラーになります。
''',r'''
関数 `tostring` は、入力を文字列として出力します。文字列は変更せず、それ以外のすべての値はJSONエンコードします。
''',r'''
関数 `type` は、引数の型を文字列で返します。その文字列は、null、boolean、number、string、array、objectのいずれかです。
''',r'''
一部の算術演算は、無限大や「非数」（NaN）の値を生成することがあります。組込み関数 `isinfinite` は、入力が無限大の場合に `true` を返します。組込み関数 `isnan` は、入力がNaNの場合に `true` を返します。組込み関数 `infinite` は、正の無限大の値を返します。組込み関数 `nan` はNaNを返します。組込み関数 `isnormal` は、入力が正規数の場合にtrueを返します。

ゼロによる除算はエラーを発生させることに注意してください。

現在、無限大、NaN、非正規数を扱う算術演算のほとんどは、エラーを発生させません。
''',r'''
関数 `sort` は、入力をソートします。入力は配列でなければなりません。値は次の順序でソートされます。

* `null`
* `false`
* `true`
* 数値
* 文字列。Unicodeコードポイントの値によるアルファベット順
* 配列。辞書式順序
* オブジェクト

オブジェクトの順序は少し複雑です。まず、キーの集合を、ソート済みの配列として比較します。キーが同じであれば、キーごとに値を比較します。

`sort_by` は、オブジェクトの特定のフィールドによるソートや、任意のjqフィルターを適用したソートに使えます。`sort_by(f)` は、それぞれの要素に対する `f` の結果を比較することで、2つの要素を比較します。`f` が複数の値を生成する場合、まず最初の値を比較し、それらが等しければ2番目の値を比較する、というように続けます。
''',r'''
`group_by(.foo)` は配列を入力として受け取り、同じ `.foo` フィールドを持つ要素を個別の配列にまとめます。そして、それらの配列すべてを、`.foo` フィールドの値でソートした大きな配列の要素として出力します。

`.foo` の代わりに使えるのはフィールドへのアクセスだけでなく、任意のjq式です。ソート順は、前述の `sort` 関数で説明した順序と同じです。
''',r'''
入力配列の最小または最大の要素を見つけます。

関数 `min_by(path_exp)` と `max_by(path_exp)` では、調べる特定のフィールドやプロパティを指定できます。たとえば、`min_by(.foo)` は、`foo` フィールドが最小のオブジェクトを見つけます。
''',r'''
関数 `unique` は配列を入力として受け取り、同じ要素をソート順に並べ、重複を取り除いた配列を生成します。

関数 `unique_by(path_exp)` は、引数を適用して得られる値ごとに、1つの要素だけを残します。`group` が生成する各グループから1つずつ要素を取り出して、配列を作ると考えてください。
''',r'''
この関数は、配列の要素の順序を逆にします。
''',r'''
フィルター `contains(b)` は、bが入力に完全に含まれている場合にtrueを生成します。文字列Bが文字列Aに含まれているとは、BがAの部分文字列であることを意味します。配列Bが配列Aに含まれているとは、Bのすべての要素が、それぞれAのいずれかの要素に含まれていることを意味します。オブジェクトBがオブジェクトAに含まれているとは、Bのすべての値が、Aの同じキーに対応する値に含まれていることを意味します。それ以外の型はすべて、互いに等しい場合に、互いに含まれているとみなします。
''']
assert len(bodies)==len(ja['entries'])
for e,b in zip(ja['entries'],bodies):e['body']=b
for a,b in zip(en['entries'],ja['entries']):
 for k in ('title','body'):assert re.findall(r'`([^`]+)`',a[k])==re.findall(r'`([^`]+)`',b[k]),(a['title'],k)
 assert a.get('examples',[])==b.get('examples',[])
for n,v in [('030-042.source.json',en),('030-042.ja.json',ja)]:
 with (p/'translations/chunks/04-builtin'/n).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print('examples',sum(len(e.get('examples',[]))for e in en['entries']))
for i,(a,b)in enumerate(zip(en['entries'],ja['entries']),30):
 print('\nENTRY',i,a['title']);print('EN',a['body']);print('JA',b['body'])
