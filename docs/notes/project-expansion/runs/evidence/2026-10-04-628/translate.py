from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');en=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][11];ja=copy.deepcopy(en);ja['title']='コメント'
ja['body']=r'''
`#` を使って、jqフィルターにコメントを書けます。

文字列の一部でない `#` 文字は、コメントの開始を示します。`#` から行末までのすべての文字は無視されます。

行末の直前に、奇数個のバックスラッシュ文字がある場合、次の行もコメントの一部とみなされ、無視されます。

たとえば、次のコードは `[1,3,4,7]` を出力します。

__BLOCK0__

コメントを次の行へ継続するバックスラッシュは、jqスクリプトの「shebang」を書くときに便利です。

__BLOCK1__

__BLOCK2__

`exec` の行は、jqではコメントとみなされるため、無視されます。しかし、`sh` では無視されません。`sh` では、行末のバックスラッシュがコメントを継続しないためです。この方法で、スクリプトを `total 1 2` として呼び出すと、`/bin/sh -- /path/to/total 1 2` が実行され、`sh` は、次に `exec jq --args -MRnf -- /path/to/total 1 2` を実行します。その際、自分自身を `jq` インタープリターに置き換えます。このインタープリターは、指定したオプション（`-M`、`-R`、`-n`、`--args`）で起動し、現在のファイル（`$0`）を、`$@` の引数を使って評価します。これらの引数は、`sh` に渡されたものです。
'''
blocks=re.findall(r'(?:^ {4}[^\n]*\n?)+',en['body'],re.M);assert len(blocks)==3
for k,x in enumerate(blocks):ja['body']=ja['body'].replace('__BLOCK'+str(k)+'__',x.rstrip('\n'))
for k in ('title','body'):
 assert re.findall(r'`([^`]+)`',en[k])==re.findall(r'`([^`]+)`',ja[k]),k
 assert [l for l in en[k].splitlines()if l.startswith('    ')]==[l for l in ja[k].splitlines()if l.startswith('    ')]
for suffix,v in [('source',en),('ja',ja)]:
 with (p/'translations'/('12-comments.'+suffix+'.json')).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print('EN',en['body']);print('JA',ja['body'])
