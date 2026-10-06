from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');s=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][6];en={'entryStart':3,'entries':copy.deepcopy(s['entries'][3:13])};ja=copy.deepcopy(en)
bodies=[r'''
jqの記号には、値の束縛（「変数」とも呼ばれます）と関数の2種類があります。どちらも字句的なスコープを持ち、式が参照できるのは、自分より「左側」で定義された記号だけです。この規則の唯一の例外は、再帰関数を作れるように、関数が自分自身を参照できることです。

たとえば、次の式には、定義位置の「右側」では見えますが、「左側」では見えない束縛があります。`... | .*3 as
$times_three | [. + $times_three] | ...` です。次の式を考えてみてください。`... | (.*3 as
$times_three | [. + $times_three]) | ...` です。ここでは、束縛 `$times_three` は、閉じ括弧より後では_見えません_。
''',r'''
`exp` が何も出力しない場合にtrueを返し、それ以外の場合にfalseを返します。
''',r'''
関数 `limit` は、最大 `n` 個の出力を `expr` から取り出します。
''',r'''
関数 `skip` は、最初の `n` 個の出力を `expr` から飛ばします。
''',r'''
関数 `first(expr)` と `last(expr)` は、それぞれ、`expr` の最初と最後の値を取り出します。

関数 `nth(n; expr)` は、`expr` が出力するn番目の値を取り出します。`nth(n; expr)` は、`n` の負の値に対応していないことに注意してください。
''',r'''
関数 `first` と `last` は、`.` にある配列の最初と最後の値を、それぞれ取り出します。

関数 `nth(n)` は、`.` にある配列のn番目の値を取り出します。
''',r'''
`reduce` 構文は、式のすべての結果を1つの答えへ累積することで、まとめられるようにします。形式は `reduce EXP as $var (INIT; UPDATE)` です。例として、`[1,2,3]` を次の式に渡します。

__BLOCK0__

`.[]` が生成する各結果に対して、`. + $item` を実行し、入力値0から始めて合計を累積します。この例では、`.[]` は `1`、`2`、`3` を生成するため、次のような式を実行するのと似た効果があります。

__BLOCK1__
''',r'''
`foreach` 構文は `reduce` と似ていますが、`limit` や中間結果を生成する集約処理を構築できるようにすることを目的としています。

形式は `foreach EXP as $var (INIT; UPDATE; EXTRACT)` です。例として、`[1,2,3]` を次の式に渡します。

__BLOCK0__

`reduce` 構文と同様に、`. + $item` を、`.[]` が生成する各結果に対して実行します。ただし、`[$item, . * 2]` は各中間値に対して実行します。この例では、中間値が `1`、`3`、`6` であるため、`foreach` 式は `[1,2]`、`[2,6]`、`[3,12]` を生成します。そのため、次のような式を実行するのと似た効果があります。

__BLOCK1__

`EXTRACT` を省略した場合、恒等フィルターを使います。つまり、中間値をそのまま出力します。
''',r'''
前述のとおり、`recurse` は再帰を使い、どのjq関数も再帰関数になれます。組込み関数 `while` も再帰によって実装されています。

再帰呼出しの左側にある式が最後の値を出力するとき、末尾呼出しが最適化されます。実際には、再帰呼出しの左側にある式が、各入力に対して2つ以上の出力を生成しないようにするという意味です。

例：

__BLOCK0__

__BLOCK1__

__BLOCK2__
''',r'''
jqの演算子や関数の中には、各入力に対して0個、1個、または複数の値を生成できるという意味で、実際にジェネレーターであるものがあります。ジェネレーターを持つ他のプログラミング言語と同様です。たとえば、`.[]` は入力のすべての値を生成します。入力は配列かオブジェクトでなければなりません。`range(0; 10)` は0から10の間の整数を生成する、というようになります。

カンマ演算子もジェネレーターです。まずカンマの左側の式が生成する値を生成し、その後にカンマの右側の式が生成する値を生成します。

組込み関数 `empty` は、出力を0個生成するジェネレーターです。組込み関数 `empty` は、直前のジェネレーター式へバックトラックします。

すべてのjq関数は、組込みジェネレーターを使うだけでジェネレーターになれます。再帰とカンマ演算子だけを使って、新しいジェネレーターを構築することもできます。再帰呼出しが「末尾位置」にあれば、ジェネレーターは効率的になります。以下の例では、`_range` が自分自身を呼び出す再帰呼出しが末尾位置にあります。この例は、末尾再帰、ジェネレーターの構築、下位関数という3つの高度な話題を示します。
''']
assert len(bodies)==len(ja['entries'])
for i,(e,b)in enumerate(zip(ja['entries'],bodies)):
 blocks=re.findall(r'(?:^ {4}[^\n]*\n?)+',en['entries'][i]['body'],re.M)
 assert len(blocks)==[0,0,0,0,0,0,2,2,3,0][i]
 for k,x in enumerate(blocks):b=b.replace('__BLOCK'+str(k)+'__',x.rstrip('\n'))
 e['body']=b
for i,title in {0:'スコープ',8:'再帰',9:'ジェネレーターとイテレーター'}.items():ja['entries'][i]['title']=title
for a,b in zip(en['entries'],ja['entries']):
 for k in ('title','body'):
  assert re.findall(r'`([^`]+)`',a[k])==re.findall(r'`([^`]+)`',b[k]),(a['title'],k)
  assert [l for l in a[k].splitlines()if l.startswith('    ')]==[l for l in b[k].splitlines()if l.startswith('    ')]
 assert a.get('examples',[])==b.get('examples',[])
t=p/'translations/chunks/07-advanced-features'
for n,v in [('003-012.source.json',en),('003-012.ja.json',ja)]:
 with (t/n).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print('examples',sum(len(e.get('examples',[]))for e in en['entries']))
for i,(a,b)in enumerate(zip(en['entries'],ja['entries']),3):
 print('\nENTRY',i,a['title'],'JA TITLE',b['title']);print('EN',a['body']);print('JA',b['body'])
