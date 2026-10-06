from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');s=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][3]
en={'entryStart':53,'entries':copy.deepcopy(s['entries'][53:63])};ja=copy.deepcopy(en)
bodies=[r'''
入力文字列を、その文字列のコードポイントの数値からなる配列に変換します。
''',r'''
explodeの逆の操作です。
''',r'''
区切り文字の引数を使って、入力文字列を分割します。

`split` は、引数を2つ指定して呼び出すと、正規表現の一致箇所でも分割できます。後述の正規表現の節を参照してください。
''',r'''
入力として与えられた要素の配列を、引数を区切り文字として使って結合します。これは `split` の逆の操作です。つまり、任意の入力文字列に対して `split("foo") | join("foo")` を実行すると、その入力文字列が返ります。

入力内の数値と真偽値は文字列に変換されます。nullの値は空文字列として扱われます。入力内の配列とオブジェクトには対応していません。
''',r'''
入力文字列のコピーを出力し、英字（a-zとA-Z）を指定した大文字または小文字に変換します。
''',r'''
関数 `while(cond; update)` は、`.` に更新を繰り返し適用し、`cond` がfalseになるまで続けます。

`while(cond; update)` は、内部では再帰的なjq関数として定義されています。`while` 内の再帰呼び出しは、`update` が各入力に対して最大1つの出力を生成する場合、追加のメモリーを消費しません。後述の高度な話題を参照してください。
''',r'''
関数 `repeat(exp)` は、式 `exp` を `.` に繰り返し適用し、エラーが発生するまで続けます。

`repeat(exp)` は、内部では再帰的なjq関数として定義されています。`repeat` 内の再帰呼び出しは、`exp` が各入力に対して最大1つの出力を生成する場合、追加のメモリーを消費しません。後述の高度な話題を参照してください。
''',r'''
関数 `until(cond; next)` は、式 `next` を繰り返し適用します。最初は `.` に、その後は式自身の出力に適用し、`cond` がtrueになるまで続けます。たとえば、階乗関数の実装に使えます。以下を参照してください。

`until(cond; next)` は、内部では再帰的なjq関数として定義されています。`until()` 内の再帰呼び出しは、`next` が各入力に対して最大1つの出力を生成する場合、追加のメモリーを消費しません。後述の高度な話題を参照してください。
''',r'''
関数 `recurse(f)` は、再帰的な構造を探索し、すべての階層から必要なデータを抽出できます。入力が次のようなファイルシステムを表すとします。

__BLOCK0__

存在するすべてのファイル名を抽出したいとします。`.name`、`.children[].name`、`.children[].children[].name`、というように取得する必要があります。これは次の式で行えます。

__BLOCK1__

引数なしで呼び出した `recurse` は、`recurse(.[]?)` と同じです。

`recurse(f)` は `recurse(f; true)` と同じで、再帰の深さを気にせずに使えます。

`recurse(f; condition)` は、まず.を出力し、その後は計算した値が条件を満たす限り、.|f、.|f|f、.|f|f|f、…と順に出力するジェネレーターです。たとえば、少なくとも原理的には、`recurse(.+1; true)` と書けば、すべての整数を生成できます。

`recurse` 内の再帰呼び出しは、`f` が各入力に対して最大1つの出力を生成する場合、追加のメモリーを消費しません。
''',r'''
関数 `walk(f)` は、入力の各構成要素にfを再帰的に適用します。配列に出会うと、まずその要素にfを適用し、その後に配列自体に適用します。オブジェクトに出会うと、まずすべての値にfを適用し、その後にオブジェクトに適用します。実際には、以下の例のように、fは通常、入力の型を調べます。最初の例は、配列の配列について、配列自体を処理する前に要素を処理することの便利さを示します。2番目の例は、入力内のすべてのオブジェクトのすべてのキーを、変更の対象にできることを示します。
''']
blocks=re.findall(r'(?:^ {4}[^\n]*\n?)+',en['entries'][8]['body'],re.M)
assert len(blocks)==2
for i,b in enumerate(blocks):bodies[8]=bodies[8].replace('__BLOCK'+str(i)+'__',b.rstrip('\n'))
assert len(bodies)==len(ja['entries'])
for e,b in zip(ja['entries'],bodies):e['body']=b
for a,b in zip(en['entries'],ja['entries']):
 for k in ('title','body'):
  assert re.findall(r'`([^`]+)`',a[k])==re.findall(r'`([^`]+)`',b[k]),(a['title'],k)
  assert [l for l in a[k].splitlines()if l.startswith('    ')]==[l for l in b[k].splitlines()if l.startswith('    ')]
 assert a.get('examples',[])==b.get('examples',[])
for n,v in [('053-062.source.json',en),('053-062.ja.json',ja)]:
 with (p/'translations/chunks/04-builtin'/n).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print('examples',sum(len(e.get('examples',[]))for e in en['entries']))
for i,(a,b)in enumerate(zip(en['entries'],ja['entries']),53):
 print('\nENTRY',i,a['title']);print('EN',a['body']);print('JA',b['body'])
