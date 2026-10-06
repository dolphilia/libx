from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');m=json.loads((p/'PARSED_MANUAL.json').read_text());en=m['sections'][12];ja=copy.deepcopy(en);ja['title']='モジュール'
ja['body']=r'''
jqにはライブラリ／モジュールの仕組みがあります。モジュールは、ファイル名が `.jq` で終わるファイルです。

プログラムがインポートするモジュールは、既定の検索パスで探します。以下を参照してください。`import` と `include` の指示では、インポートする側がこのパスを変更できます。

検索パス内のパスには、さまざまな置換を適用します。

`~/` で始まるパスでは、`~` をユーザーのホームディレクトリで置き換えます。

`$ORIGIN/` で始まるパスでは、`$ORIGIN` をjq実行ファイルがあるディレクトリで置き換えます。

`./` で始まるパス、または `.` というパスでは、`.` を、そのファイルを取り込む側のファイルのパスで置き換えます。コマンドラインで指定した最上位のプログラムの場合は、現在のディレクトリを使います。

インポートの指示では、検索パスを任意で指定できます。その後ろに既定の検索パスを追加します。

既定の検索パスは、コマンドラインオプション `-L` に指定した検索パスです。それがなければ、`["~/.jq", "$ORIGIN/../lib/jq",
"$ORIGIN/../lib"]` です。

nullまたは空文字列のパス要素は、検索パスの処理を終了させます。

相対パス `foo/bar` の依存モジュールは、指定した検索パス内の `foo/bar.jq` と `foo/bar/bar.jq` で探します。これは、モジュールをバージョン管理ファイルやREADMEファイルなどと一緒にディレクトリへ置けるようにしつつ、単一ファイルのモジュールも使えるようにするためです。

曖昧さを避けるため、同じ名前のパス要素を連続させることは認められていません。たとえば、`foo/foo` です。

例として、`-L$HOME/.jq` を指定すると、モジュール `foo` は、`$HOME/.jq/foo.jq` と `$HOME/.jq/foo/foo.jq` に見つかります。

ユーザーのホームディレクトリに `.jq` があり、ディレクトリではなくファイルである場合、メインプログラムへ自動的に読み込まれます。
'''
meta=r'''
任意のメタデータは、定数のjq式でなければなりません。`homepage` などのキーを持つオブジェクトにするべきです。現時点で、jqが使うのは、メタデータの `search` のキーと値だけです。メタデータは、組込み関数 `modulemeta` によって利用者にも提供されます。
'''
search=r'''
メタデータに `search` キーがある場合、その値は文字列か、文字列の配列であるべきです。これは、最上位の検索パスの先頭に追加する検索パスです。
'''
bodies=[r'''
検索パス内のディレクトリからの相対パスとして、指定したパスで見つかったモジュールをインポートします。相対パス文字列には `.jq` 接尾辞を追加します。モジュールの記号には、`NAME::` という接頭辞が付きます。
'''+meta+search,r'''
検索パス内のディレクトリからの相対パスとして、指定したパスで見つかったモジュールを、その場所へ取り込むかのようにインポートします。相対パス文字列には `.jq` 接尾辞を追加します。モジュールの記号は、モジュールの内容を直接取り込んだかのように、呼出し側の名前空間へインポートされます。
'''+meta,r'''
検索パス内のディレクトリからの相対パスとして、指定したパスで見つかったJSONファイルをインポートします。相対パス文字列には `.json` 接尾辞を追加します。ファイルのデータは、`$NAME::NAME` として使えます。
'''+meta+search,r'''
この指示は完全に任意です。正しく動作するためには必要ありません。組込み関数 `modulemeta` で読み取れるメタデータを提供することだけが目的です。

メタデータは、定数のjq式でなければなりません。`homepage` のようなキーを持つオブジェクトにするべきです。現時点で、jqはこのメタデータを使いませんが、組込み関数 `modulemeta` によって利用者に提供されます。
''',r'''
モジュール名を入力として受け取り、モジュールのメタデータをオブジェクトとして出力します。モジュールがインポートするものは、メタデータも含めて `deps` キーの配列の値になり、モジュールが定義する関数は `defs` キーの配列の値になります。

プログラムは、この関数でモジュールのメタデータを問い合わせ、たとえば、不足している依存モジュールの検索、ダウンロード、インストールに使えます。
''']
for e,b in zip(ja['entries'],bodies):e['body']=b
enc=m['sections'][13];jac=copy.deepcopy(enc);jac['title']='色'
jac['body']=r'''
別の色を設定するには、環境変数 `JQ_COLORS` を、`"1;31"` のような端末のエスケープシーケンスの一部をコロンで区切ったリストに設定します。順序は次のとおりです。

  - `null` の色
  - `false` の色
  - `true` の色
  - 数値の色
  - 文字列の色
  - 配列の色
  - オブジェクトの色
  - オブジェクトのキーの色

既定の配色は、`JQ_COLORS="0;90:0;39:0;39:0;39:0;32:1;39:1;39:1;34"` と設定した場合と同じです。

ここでは、VT100/ANSIエスケープのマニュアルは提供しません。ただし、各色の指定は、セミコロンで区切った2つの数値で構成するべきです。最初の数値は、次のいずれかです。

  - 1（明るい）
  - 2（暗い）
  - 4（下線）
  - 5（点滅）
  - 7（反転）
  - 8（非表示）

2番目の数値は、次のいずれかです。

  - 30（黒）
  - 31（赤）
  - 32（緑）
  - 33（黄）
  - 34（青）
  - 35（マゼンタ）
  - 36（シアン）
  - 37（白）
'''
ena={k:m[k]for k in ('manpage_intro','manpage_epilogue')};jaa={
'manpage_intro':r'''jq(1) -- コマンドラインJSONプロセッサー
====================================

## 書式

`jq` [<options>...] <filter> [<files>...]

`jq` は、JSON文書の選択、反復、集約など、さまざまな方法でJSONを変換できます。たとえば、コマンド `jq 'map(.price) | add'` を実行すると、JSONオブジェクトの配列を入力として受け取り、その"price"フィールドの合計を返します。

`jq` はテキスト入力も受け取れますが、既定では、`jq` は `stdin` からJSONの値（数値やその他のリテラルも含みます）のストリームを読み込みます。空白が必要なのは、1と2やtrueとfalseのような値を区切る場合だけです。1つ以上の<files>を指定できます。その場合、`jq` は代わりに、それらのファイルから入力を読み込みます。

<options>は、[INVOKING JQ]の節で説明されています。主に入力と出力の書式に関するものです。<filter>はjq言語で書き、入力ファイルまたは文書をどう変換するかを指定します。

## フィルター
''',
'manpage_epilogue':r'''## バグ

おそらく存在します。次の場所で報告または議論してください。

    https://github.com/jqlang/jq/issues

## 著者

Stephen Dolan `<mu@netsoc.tcd.ie>`
'''}
for name,a,b in [('13-modules',en,ja),('14-colors',enc,jac),('15-manpage-appendix',ena,jaa)]:
 def leaves(v):
  if isinstance(v,str):yield v
  elif isinstance(v,dict):
   for x in v.values():yield from leaves(x)
  elif isinstance(v,list):
   for x in v:yield from leaves(x)
 x=list(leaves(a));y=list(leaves(b));assert len(x)==len(y)
 for av,bv in zip(x,y):
  assert re.findall(r'`([^`]+)`',av)==re.findall(r'`([^`]+)`',bv),(name,av[:80])
  assert [l for l in av.splitlines()if l.startswith('    ')]==[l for l in bv.splitlines()if l.startswith('    ')]
 for suffix,v in [('source',a),('ja',b)]:
  with (p/'translations'/(name+'.'+suffix+'.json')).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
 print('PAGE',name);print('EN',json.dumps(a,ensure_ascii=False,indent=2));print('JA',json.dumps(b,ensure_ascii=False,indent=2))
