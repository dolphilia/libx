from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');en=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][5];ja=copy.deepcopy(en);ja['title']='正規表現'
ja['body']=r'''
jqは、PHP、TextMate、Sublime Textなどと同様に、[Oniguruma正規表現ライブラリ](https://github.com/kkos/oniguruma/blob/master/doc/RE)を使っています。そのため、ここではjq固有の点を中心に説明します。

Onigurumaは複数の正規表現の構文に対応しています。jqが使うのは["Perl NG"（名前付きグループを持つPerl）](https://github.com/kkos/oniguruma/blob/master/doc/SYNTAX.md)の構文であることを知っておく必要があります。

jqの正規表現フィルターは、次のいずれかの形式で使えるように定義されています。

__BLOCK0__

ここで、各要素は次のようになります。

* STRING、REGEX、FLAGSはjqの文字列で、jqの文字列への式の埋込みが適用されます。
* REGEXは、式の埋込み後に、有効な正規表現である必要があります。
* FILTERは、後述する `test`、`match`、`capture` のいずれかです。

REGEXはJSON文字列に評価される必要があるため、正規表現を構成するための一部の文字をエスケープしなければなりません。たとえば、空白文字を表す正規表現 `\s` は、`"\\s"` と書きます。

FLAGSは、対応するフラグを1つ以上含む文字列です。

* `g` - 全体検索（最初だけでなく、すべての一致を見つける）
* `i` - 大文字と小文字を区別しない検索
* `m` - 複数行モード（`.` が改行にも一致する）
* `n` - 空の一致を無視する
* `p` - sとmの両方のモードを有効にする
* `s` - 単一行モード（`^` -> `\A`、`$` -> `\Z`）
* `l` - 可能な限り長い一致を見つける
* `x` - 拡張正規表現形式（空白とコメントを無視する）

`x` フラグで空白に一致させるには、`\s` を使います。例：

__BLOCK1__

一部のフラグは、REGEX内でも指定できることに注意してください。例：

__BLOCK2__

これは、`true`、`true`、`false`、`false` に評価されます。
'''
bodies=[r'''
`match` と同様ですが、一致オブジェクトは返しません。正規表現が入力に一致するかどうかに応じて、`true` または `false` だけを返します。
''',r'''
**match**は、見つかった一致ごとにオブジェクトを出力します。一致には、次のフィールドがあります。

* `offset` - 入力の先頭からのオフセット。UTF-8コードポイント単位
* `length` - 一致の長さ。UTF-8コードポイント単位
* `string` - 一致した文字列
* `captures` - キャプチャグループを表すオブジェクトの配列

キャプチャグループのオブジェクトには、次のフィールドがあります。

* `offset` - 入力の先頭からのオフセット。UTF-8コードポイント単位
* `length` - このキャプチャグループの長さ。UTF-8コードポイント単位
* `string` - キャプチャされた文字列
* `name` - キャプチャグループの名前（名前なしの場合は `null`）

何にも一致しなかったキャプチャグループは、オフセット-1を返します。
''',r'''
名前付きキャプチャをJSONオブジェクトにまとめます。各キャプチャの名前をキーとし、一致した文字列を対応する値とします。
''',r'''
入力のうち、正規表現に一致する重なりのない部分文字列を、ストリームとして出力します。フラグが指定されていれば、それに従います。一致がなければ、ストリームは空です。各入力文字列のすべての一致をまとめて取得するには、`[ expr ]` という書き方を使います。たとえば、`[ scan(regex) ]` です。正規表現にキャプチャグループが含まれている場合、フィルターは配列のストリームを出力し、各配列にはキャプチャされた文字列が入ります。
''',r'''
入力文字列を、正規表現の各一致箇所で分割します。

後方互換性のため、引数を1つ指定して呼び出した `split` は、正規表現ではなく文字列で分割します。
''',r'''
対応する `split` と同じ結果を、配列ではなくストリームとして提供します。
''',r'''
入力文字列内の正規表現の最初の一致を、式の埋込み後の `tostring` で置き換えて得られる文字列を出力します。`tostring` はjqの文字列、またはそのような文字列のストリームである必要があります。各文字列は、名前付きキャプチャへの参照を含められます。名前付きキャプチャは、実質的に、`capture` が構築するようなJSONオブジェクトとして `tostring` に渡されます。そのため、"x"という名前でキャプチャされた変数への参照は、`"\(.x)"` という形式になります。
''',r'''
`gsub` は `sub` と同様ですが、正規表現の重なりのないすべての一致を、式の埋込み後の `tostring` で置き換えます。2番目の引数がjq文字列のストリームであれば、`gsub` は対応するJSON文字列のストリームを生成します。
''']
blocks=re.findall(r'(?:^ {4}[^\n]*\n?)+',en['body'],re.M);assert len(blocks)==3
for i,b in enumerate(blocks):ja['body']=ja['body'].replace('__BLOCK'+str(i)+'__',b.rstrip('\n'))
assert len(bodies)==len(ja['entries'])
for e,b in zip(ja['entries'],bodies):e['body']=b
for a,b in [(en,ja),*zip(en['entries'],ja['entries'])]:
 for k in ('title','body'):
  assert re.findall(r'`([^`]+)`',a[k])==re.findall(r'`([^`]+)`',b[k]),(a['title'],k)
  assert [l for l in a[k].splitlines()if l.startswith('    ')]==[l for l in b[k].splitlines()if l.startswith('    ')]
 assert a.get('examples',[])==b.get('examples',[])
assert re.findall(r'\]\(([^)]+)\)',en['body'])==re.findall(r'\]\(([^)]+)\)',ja['body'])
for n,v in [('06-regular-expressions.source.json',en),('06-regular-expressions.ja.json',ja)]:
 with (p/'translations'/n).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print('examples',sum(len(e.get('examples',[]))for e in en['entries']))
print('EN INTRO',en['body']);print('JA INTRO',ja['body'])
for i,(a,b)in enumerate(zip(en['entries'],ja['entries'])):
 print('\nENTRY',i,a['title']);print('EN',a['body']);print('JA',b['body'])
