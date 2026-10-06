from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');en=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][4];ja=copy.deepcopy(en);ja['title']='条件式と比較'
bodies=[r'''
式'a == b'は、aとbを評価した結果が等しい場合（つまり、等価なJSON値を表す場合）に'true'を生成し、それ以外の場合に'false'を生成します。特に、文字列が数値と等しいとみなされることはありません。JSONオブジェクトの等価性を調べるとき、キーの順序は関係ありません。JavaScriptを使っていた方は、jqの `==` が、JavaScriptの「厳密等価」演算子 `===` と同様であることに注意してください。

!=は「等しくない」を意味し、'a != b'は'a == b'と逆の値を返します。
''',r'''
`if A then B else C end` が `B` と同じ動作をするのは、`A` がfalseでもnullでもない値を生成する場合です。それ以外の場合は `C` と同じ動作をします。

`if A then B end` は、`if A then B else .  end` と同じです。つまり、`else` 分岐は省略可能で、省略した場合は `.` と同じです。これは、`elif` で最後の `else` 分岐を省略した場合にも当てはまります。

falseかnullかを調べるという「真とみなすかどうか」の基準は、JavaScriptやPythonより単純です。ただし、求める条件を、より明示的に指定しなければならない場合があります。たとえば、`if .name then A else B end` では文字列が空かどうかは調べられません。代わりに、`if .name == "" then A else B end` のような式が必要です。

条件 `A` が複数の結果を生成する場合、`B` はfalseでもnullでもない各結果に対して1回ずつ評価され、`C` はfalseまたはnullの各結果に対して1回ずつ評価されます。

ifにさらに条件を追加するには、`elif A then B` 構文を使います。
''',r'''
比較演算子 `>`、`>=`、`<=`、`<` は、それぞれ、左の引数が右の引数より大きいか、以上か、以下か、より小さいかを返します。

順序は、前述の `sort` で説明した順序と同じです。
''',r'''
jqは、通常の真偽値演算子 `and`、`or`、`not` に対応しています。真とみなす基準はif式と同じです。`false` と `null` は「偽の値」とみなされ、それ以外はすべて「真の値」です。

これらの演算子のオペランドが複数の結果を生成する場合、演算子自体も各入力に対して結果を生成します。

実際には、`not` は演算子ではなく組込み関数です。そのため、専用の構文ではなく、値をパイプで渡すフィルターとして呼び出します。たとえば、`.foo and .bar |
not` のように使います。

この3つは、`true` と `false` の値だけを生成します。そのため、純粋な真偽値演算に使うもので、Perl/Python/Rubyでよく使われる"value_that_may_be_null or default"という書き方には使えません。このような「or」を使い、条件を評価する代わりに2つの値から選びたい場合は、後述の `//` 演算子を参照してください。
''',r'''
演算子 `//` は、左辺の値のうち、`false` でも `null` でもないものをすべて生成します。左辺が `false` または `null` 以外の値を1つも生成しない場合、`//` は右辺の値をすべて生成します。

`a // b` という形式のフィルターは、`a` の結果のうち、`false` でも `null` でもないものをすべて生成します。`a` が結果を1つも生成しない場合、または `false` か `null` 以外の結果を生成しない場合、`a
// b` は `b` の結果を生成します。

これは既定値を与える際に便利です。`.foo // 1` が `1` に評価されるのは、入力に `.foo` 要素がない場合です。これは、Pythonで `or` が使われることがある方法と似ています（jqの `or` 演算子は、厳密な真偽値演算専用です）。

注意：`some_generator // defaults_here` は、`some_generator | . // defaults_here` と同じではありません。後者は左辺の、`false` でない値、`null` でない値のすべてに対して既定値を生成しますが、前者はそうではありません。優先順位の規則が分かりにくくする場合があります。たとえば、`false, 1 // 2` で `//` の左辺となるのは `1` であって、`false, 1` ではありません。`false, 1 // 2` は、`false,
(1 // 2)` と同じように解析されます。`(false, null, 1) | . // 42` で `//` の左辺となるのは `.` で、常に1つの値だけを生成します。一方、`(false, null, 1) // 42` の左辺は3つの値のジェネレーターです。`false` と `null` 以外の値を生成するため、既定値 `42` は生成されません。
''',r'''
エラーは、`try EXP catch EXP` を使って捕捉できます。最初の式を実行し、失敗した場合は、エラーメッセージを入力として2番目の式を実行します。ハンドラーが何かを出力した場合、それは、試した式の出力であるかのように出力されます。

`try EXP` という形式は、例外ハンドラーとして `empty` を使います。
''',r'''
try/catchの便利な用途の1つは、`reduce`、`foreach`、`while` などの制御構造から抜け出すことです。

例：

__BLOCK0__

jqには、「抜け出す」または「戻る」先として使う、名前付きの字句的なラベルの構文があります。

__BLOCK1__

式 `break $label_name` は、最も近い左側の `label $label_name` が `empty` を生成したかのように、プログラムを動作させます。

`break` と対応する `label` の関係は字句的なものです。ラベルがbreakから「見える」位置にある必要があります。

たとえば、`reduce` から抜け出すには、次のようにします。

__BLOCK2__

次のjqプログラムは、構文エラーを生成します。

__BLOCK3__

ラベル `$out` が見える位置にないためです。
''',r'''
演算子 `?` を `EXP?` として使う書き方は、`try EXP` の省略形です。
''']
blocks=re.findall(r'(?:^ {4}[^\n]*\n?)+',en['entries'][6]['body'],re.M);assert len(blocks)==4
for i,b in enumerate(blocks):bodies[6]=bodies[6].replace('__BLOCK'+str(i)+'__',b.rstrip('\n'))
titles={1:'if-then-else-end',4:'代替演算子：`//`',5:'try-catch',6:'制御構造から抜け出す',7:'エラー抑制／オプショナル演算子：`?`'}
assert len(bodies)==len(ja['entries'])
for i,(e,b)in enumerate(zip(ja['entries'],bodies)):
 e['body']=b
 if i in titles:e['title']=titles[i]
for a,b in zip(en['entries'],ja['entries']):
 for k in ('title','body'):
  assert re.findall(r'`([^`]+)`',a[k])==re.findall(r'`([^`]+)`',b[k]),(a['title'],k,re.findall(r'`([^`]+)`',a[k]),re.findall(r'`([^`]+)`',b[k]))
  assert [l for l in a[k].splitlines()if l.startswith('    ')]==[l for l in b[k].splitlines()if l.startswith('    ')]
 assert a.get('examples',[])==b.get('examples',[])
for n,v in [('05-conditionals-and-comparisons.source.json',en),('05-conditionals-and-comparisons.ja.json',ja)]:
 with (p/'translations'/n).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print('examples',sum(len(e.get('examples',[]))for e in en['entries']))
for i,(a,b)in enumerate(zip(en['entries'],ja['entries'])):
 print('\nENTRY',i,a['title'],'JA TITLE',b['title']);print('EN',a['body']);print('JA',b['body'])
