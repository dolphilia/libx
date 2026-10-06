from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');m=json.loads((p/'PARSED_MANUAL.json').read_text());en=m['sections'][7];ja=copy.deepcopy(en);ja['title']='数学'
ja['body']=r'''
現在のjqは、IEEE754の倍精度（64ビット）浮動小数点数だけに対応しています。

`+` のような単純な算術演算子に加え、jqにはC数学ライブラリの標準的な数学関数のほとんどがあります。入力引数が1つのC数学関数（たとえば `sin()`）は、引数なしのjq関数として使えます。入力引数が2つのC数学関数（たとえば `pow()`）は、`.` を無視する2引数のjq関数として使えます。入力引数が3つのC数学関数は、`.` を無視する3引数のjq関数として使えます。

標準的な数学関数を使えるかどうかは、OSとC数学ライブラリで、対応する数学関数が使えるかどうかに依存します。使えない数学関数も定義はされますが、エラーを発生させます。

__LIST0__

__LIST1__

__LIST2__

各関数の詳細は、システムのマニュアルを参照してください。
'''
paras=en['body'].split('\n\n')
for i,para in enumerate([x for x in paras if re.match(r'(One|Two|Three)-input C math functions:',x)]):
 prefix=['入力引数が1つのC数学関数：','入力引数が2つのC数学関数：','入力引数が3つのC数学関数：'][i];ja['body']=ja['body'].replace('__LIST'+str(i)+'__',prefix+para.split(':',1)[1])
en2=m['sections'][8];ja2=copy.deepcopy(en2);ja2['title']='入出力'
ja2['body']=r'''
現在のjqの入出力機能は最小限で、主に、いつ入力を読むかを制御する形で提供されています。このために、組込み関数 `input` と `inputs` があります。これらは、jq自体と同じ入力元（たとえば `stdin` や、コマンドラインで指定したファイル）から読み込みます。この2つの組込み関数と、jq自体の読込みは、互いに交互に実行できます。一般に、入力を1つ暗黙に読み込むのを防ぐため、null入力オプション `-n` と組み合わせて使います。

最小限の出力機能を提供する組込み関数は、`debug` と `stderr` です。jqプログラムの出力値は、常にJSONテキストとして `stdout` に出力されることを思い出してください。組込み関数 `debug` は、アプリケーション固有の動作を持つ場合があります。たとえば、libjqのC APIを使う、jq実行ファイル自体とは異なる実行ファイルの場合です。組込み関数 `stderr` は、入力をそのままの形式でstderrへ出力し、装飾は一切付けず、改行さえ付けません。

jqの組込み関数の多くは参照透過です。一定の入力に適用すると、一定で再現可能な値のストリームを生成します。入出力の組込み関数は、これに当てはまりません。
'''
bodies=[r'''
新しい入力を1つ出力します。

`input` を使う場合、通常はコマンドラインオプション `-n` を指定してjqを起動する必要があります。そうしないと、最初の入力が失われることに注意してください。

__BLOCK0__
''',r'''
残っている入力を、1つずつすべて出力します。

これは、主にプログラムの入力全体に対して集約処理を行う際に便利です。`inputs` を使う場合、通常はコマンドラインオプション `-n` を指定してjqを起動する必要があります。そうしないと、最初の入力が失われることに注意してください。

__BLOCK0__
''',r'''
この2つのフィルターは `.` と同様ですが、副作用としてstderrに1つ以上のメッセージを生成します。

フィルター `debug` が生成するメッセージは、次の形式です。

__BLOCK0__

ここで、`<input-value>` は、入力値をコンパクトに表したものです。この形式は、将来変わる可能性があります。

フィルター `debug(msgs)` は、`(msgs | debug | empty), .` と定義されています。そのため、メッセージの内容を柔軟に指定でき、複数行のデバッグ文も作れます。

たとえば、次の式は、

__BLOCK1__

値3を生成しますが、次の2行をstderrへ書き出します。

__BLOCK2__
''',r'''
入力をそのままのコンパクトな形式でstderrへ出力します。装飾は一切付けず、改行さえ付けません。
''',r'''
現在フィルターで処理している入力のファイル名を返します。jqをUTF-8ロケールで実行していない場合、うまく動作しないことに注意してください。
''',r'''
現在フィルターで処理している入力の行番号を返します。
''']
for i,(e,b)in enumerate(zip(ja2['entries'],bodies)):
 blocks=re.findall(r'(?:^ {4}[^\n]*\n?)+',en2['entries'][i]['body'],re.M);assert len(blocks)==[1,1,3,0,0,0][i]
 for k,x in enumerate(blocks):b=b.replace('__BLOCK'+str(k)+'__',x.rstrip('\n'))
 e['body']=b
for name,a,b in [('08-math',en,ja),('09-io',en2,ja2)]:
 for x,y in [(a,b),*zip(a.get('entries',[]),b.get('entries',[]))]:
  for k in ('title','body'):
   assert re.findall(r'`([^`]+)`',x[k])==re.findall(r'`([^`]+)`',y[k]),(name,x['title'],k)
   assert [l for l in x[k].splitlines()if l.startswith('    ')]==[l for l in y[k].splitlines()if l.startswith('    ')]
  assert x.get('examples',[])==y.get('examples',[])
 for suffix,v in [('source',a),('ja',b)]:
  with (p/'translations'/(name+'.'+suffix+'.json')).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
 print('PAGE',name,'EN',a['title'],'JA',b['title']);print('EN INTRO',a['body']);print('JA INTRO',b['body'])
 for i,(x,y)in enumerate(zip(a.get('entries',[]),b.get('entries',[]))):
  print('ENTRY',i,x['title']);print('EN',x['body']);print('JA',y['body'])
