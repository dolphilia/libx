from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');s=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][2];ja=copy.deepcopy(s);ja['title']='型と値';ja['body']=r'''
jqはJSONと同じデータ型を扱えます。数値、文字列、真偽値、配列、オブジェクト（JSONでは、キーが文字列だけであるハッシュを指します）、そして"null"です。

真偽値、null、文字列、数値は、JSONと同じ形式で記述します。jqの他のすべてと同様に、これらの単純な値も入力を受け取り、出力を生成します。`42` は有効なjqの式で、入力を受け取って無視し、代わりに42を返します。

jqの数値は、内部ではIEEE754の倍精度による近似値として表現されます。数値がリテラルであっても、先行するフィルターの結果であっても、数値に対する算術演算は倍精度の浮動小数点数の結果を生成します。

ただし、リテラルを解析する際、jqは元のリテラル文字列を保存します。この値に変更を加えなければ、倍精度への変換で精度が失われる場合でも、元の形式のまま出力されます。
'''
titles=['配列の構築：`[]`','オブジェクトの構築：`{}`','再帰的な走査：`..`']
bodies=[r'''
JSONと同様に、`[]` は `[1,2,3]` のように配列を構築するために使います。配列の要素には、パイプラインを含む任意のjqの式を使えます。すべての式が生成するすべての結果が、1つの大きな配列にまとめられます。`[.foo, .bar, .baz]` のように既知の個数の値から配列を構築するためにも、`[.items[].name]` のようにフィルターのすべての結果を配列へ「集める」ためにも使えます。

","演算子を理解すると、jqの配列構文を別の観点から見られます。式 `[1,2,3]` は、カンマ区切りの配列専用の組込み構文を使っているわけではありません。3つの別々の結果を生成する式1,2,3に、結果を集める `[]` 演算子を適用しています。

4つの結果を生成するフィルター `X` がある場合、式 `[X]` は、4要素の配列という1つの結果を生成します。
''',r'''
JSONと同様に、`{}` は `{"a": 42, "b": 17}` のようにオブジェクト（辞書やハッシュとも呼ばれます）を構築するために使います。

キーが「識別子のような」形式であれば、`{a:42, b:17}` のように引用符を省略できます。キーの式として変数参照を使うと、その変数の値がキーになります。定数リテラル、識別子、変数参照以外のキーの式は、`{("a"+"b"):59}` のように丸括弧で囲む必要があります。

値には任意の式を使えます。ただし、たとえばコロンを含む場合などには、丸括弧で囲む必要があることがあります。その式は、{}という式への入力に適用されます。すべてのフィルターには入力と出力があることを思い出してください。

    {foo: .bar}

は、JSONオブジェクト `{"foo": 42}` を生成します（入力としてJSONオブジェクト `{"bar":42, "baz":43}` を与えた場合）。これを使って、オブジェクトの特定のフィールドを選択できます。入力が"user"、"title"、"id"、"content"フィールドを持つオブジェクトで、"user"と"title"だけが必要なら、次のように書けます。

    {user: .user, title: .title}

これはよく使われるため、短縮構文 `{user, title}` があります。

式の1つが複数の結果を生成すると、複数の辞書が生成されます。入力が次のとき、

    {"user":"stedolan","titles":["JQ Primer", "More JQ"]}

次の式は、

    {user, title: .titles[]}

2つの出力を生成します。

    {"user":"stedolan", "title": "JQ Primer"}
    {"user":"stedolan", "title": "More JQ"}

キーを丸括弧で囲むと、式として評価されます。上と同じ入力に対して、

    {(.user): .titles}

は次を生成します。

    {"stedolan": ["JQ Primer", "More JQ"]}

キーとして変数参照を使うと、変数の値がキーになります。値を指定しない場合は、変数名がキーになり、その変数の値が値になります。

    "f o o" as $foo | "b a r" as $bar | {$foo, $bar:$foo}

は次を生成します。

    {"foo":"f o o","b a r":"f o o"}
''',r'''
`.` を再帰的に走査し、すべての値を生成します。これは、引数なしの組込み関数 `recurse`（後述）と同じです。XPathの `//` 演算子に似た動作を意図しています。`..a` は使えないため、代わりに `.. | .a` を使ってください。以下の実行例では、`.. | .a?` を使って、`.` の「下」にあるオブジェクト内で、キー"a"のすべての値を探します。

`path(EXP)`（これも後述）や `?` 演算子と組み合わせると、特に便利です。
''']
for i,e in enumerate(ja['entries']):e['title']=titles[i];e['body']=bodies[i]
# Use source code byte strings after validating all protected code, in semantic order.
for key in ['body']:
 assert re.findall(r'`([^`]+)`',s[key])==re.findall(r'`([^`]+)`',ja[key])
for i,(en,j)in enumerate(zip(s['entries'],ja['entries'])):
 for key in ['title','body']:
  a=re.findall(r'`([^`]+)`',en[key]);b=re.findall(r'`([^`]+)`',j[key]);assert a==b,(i,key,a,b)
 assert en['examples']==j['examples']
for name,value in [('03-types-and-values.source.json',s),('03-types-and-values.ja.json',ja)]:
 with (p/'translations'/name).open('x') as f:f.write(json.dumps(value,ensure_ascii=False,indent=2)+'\n')
print({'entries':3,'examples':sum(len(e['examples'])for e in ja['entries'])})
