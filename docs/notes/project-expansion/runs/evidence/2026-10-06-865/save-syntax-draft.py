from pathlib import Path
import json,re
E=Path(__file__).parent;u=json.loads((E/'03-syntax-units.json').read_text())
translations={
1:'構文',
2:'Wrenの構文は、Cに似た言語を使ってきた人にとってなじみがあり、その一方で少し単純で無駄の少ないものになるよう設計されています。',
3:'スクリプトは、拡張子が⟦CODE0⟧のプレーンテキストファイルに保存します。Wrenは事前コンパイルを行いません。一般的なスクリプト言語と同様、ソースから直接、上から下へプログラムを実行します。（内部では<a href="/docs/wren/v0-4-0/en/01-guide/22-performance/">効率</a>のためにバイトコードへコンパイルしますが、これは実装上の詳細です。）',
4:'コメント',
5:'行コメントは⟦CODE0⟧で始まり、行末で終わります。',
6:'ブロックコメントは⟦CODE0⟧で始まり、⟦CODE1⟧で終わります。複数行にまたがることができます。',
7:'Cとは異なり、Wrenではブロックコメントを入れ子にできます。',
8:'これは、すでにブロックコメントを含むコードでも、ブロック全体を簡単にコメントアウトできるので便利です。',
9:'予約語',
10:'その言語らしさを手早くつかむには、どの語が予約されているかを見る方法があります。Wrenの予約語は次のとおりです。',
11:'識別子',
12:'名前の規則は、ほかのプログラミング言語と似ています。識別子は英字またはアンダースコアで始まり、英字・数字・アンダースコアを含められます。大文字と小文字は区別します。',
13:'アンダースコア（⟦CODE0⟧）で始まる識別子は、Wrenでは特別な意味を持ちます。クラスの<a href="/docs/wren/v0-4-0/en/01-guide/10-classes/#fields">フィールド</a>を表すために使います。',
14:'改行',
15:'改行（⟦CODE0⟧）はWrenでは意味を持ち、文を区切るために使われます。',
16:'ただし、一つの文が一行に収まらず、途中に改行を入れると問題になる場合もあります。そのためWrenには、とても単純な規則があります。文の終わりになれないトークンの直後にある改行を無視します。',
17:'実際には、各文を別々の行に書き、必要に応じて複数行に折り返しても、それほど困らないということです。',
18:'ブロック',
19:'Wrenでは波括弧で<em>ブロック</em>を定義します。<a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/">制御フロー</a>の文など、文を書ける場所ならどこでもブロックを使えます。<a href="/docs/wren/v0-4-0/en/01-guide/10-classes/#methods">メソッド</a>や<a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">関数</a>の本体もブロックです。例えば次のコードでは、then側にブロックを、else側に単独の文を使っています。',
20:'ブロックには、似てはいるものの同じではない二つの形式があります。通常、ブロックには次のように一連の文を入れます。',
21:'この形式をメソッドや関数の本体に使うと、ブロックの実行が終わった後、自動的に⟦CODE0⟧を返します。別の値を返したい場合は、明示的な⟦CODE1⟧文が必要です。',
22:'しかし、一つの式を評価してその結果を返すだけのメソッドや関数もよく使われます。ほかの言語には、その定義に⟦CODE0⟧を使うものがあります。Wrenでは次のように書きます。',
23:'⟦CODE0⟧の後（<a href="/docs/wren/v0-4-0/en/01-guide/11-functions/">関数</a>の場合は引数リストの後）に改行がなければ、ブロックには一つの式しか入れられず、その結果を自動的に返します。これは、次のように書くのとまったく同じです。',
24:'この形式では、値を生まない文は使えません。つまり、⟦CODE0⟧、⟦CODE1⟧、⟦CODE2⟧、⟦CODE3⟧、⟦CODE4⟧、⟦CODE5⟧、⟦CODE6⟧で始まるものは書けません。一つだけ文を含むブロックにしたい場合は、そこに改行を入れます。',
25:'⟦CODE0⟧の直後に改行を置くというのは、少し奇妙で魔法めいて感じられます。しかし、Wrenではもともと改行が意味を持つので、それほど不自然ではありません。⟦CODE1⟧のような構文と比べてよい点は、ブロックの<em>終わり</em>に明示的な区切りがあることです。これは、呼び出しを連鎖させるときに役立ちます。',
26:'優先順位と結合性',
27:'Wrenの各種の式とその意味は、次の数ページで説明します。ただし、構文上それらがどう組み合わさるかを知りたい場合のために、一覧表を示します。',
28:'この表は、どの式の<em>優先順位</em>が高いか、つまりどれがより強く結び付くかと、同種の式が連続するときにどの順番でまとまるかという<em>結合性</em>を示します。Wrenは、おおむねCに従いますが、<a href="http://www.lysator.liu.se/c/dmr-on-or.html">ビット演算子の誤り</a>を修正しています。強く結び付くものから弱いものへの、全優先順位表は次のとおりです。',
29:'優先順位',30:'演算子',31:'説明',32:'結合方向',
35:'グループ化、<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/">添字、メソッド呼び出し</a>',
39:'<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">符号反転、論理否定、補数</a>',
43:'<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">乗算、除算、剰余</a>',
47:'<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">加算、減算</a>',
51:'<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">終点を含む範囲、終点を含まない範囲</a>',
55:'<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">左シフト、右シフト</a>',
59:'<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">ビット単位のAND</a>',
63:'<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">ビット単位のXOR</a>',
67:'<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">ビット単位のOR</a>',
71:'<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">比較</a>',
75:'<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">型の検査</a>',
79:'<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#operators">等価、非等価</a>',
83:'<a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#logical-operators">論理AND</a>',
87:'<a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#logical-operators">論理OR</a>',
91:'<a href="/docs/wren/v0-4-0/en/01-guide/08-control-flow/#the-conditional-operator-">条件式</a>',
95:'<a href="/docs/wren/v0-4-0/en/01-guide/09-variables/#assignment">代入</a>、<a href="/docs/wren/v0-4-0/en/01-guide/07-method-calls/#setters">セッター</a>',
97:'<br/><hr/><a class="right" href="/docs/wren/v0-4-0/en/01-guide/04-values/">値 →</a><a href="/docs/wren/v0-4-0/en/01-guide/02-getting-started/">← はじめに</a>'
}
draft=[]
for unit in u['units']:
 i=int(unit['id']);source=unit['sourceHTML']
 if i in translations:
  ja=translations[i]
  if unit['tag'].startswith('h') and 'header-anchor' in source:
   anchor=re.search(r'<a class="header-anchor".*?</a>',source,re.S);assert anchor;ja+=' '+anchor.group(0)
 elif source in ['Left','Right']:ja={'Left':'左','Right':'右'}[source]
 else:
  assert unit['tag']=='td' and re.fullmatch(r'(?:\d+|⟦CODE\d+⟧(?:\s+⟦CODE\d+⟧)*)',source),unit
  ja=source
 draft.append(ja)
assert len(draft)==97
(E/'03-syntax-ja-draft.json').write_text(json.dumps(draft,ensure_ascii=False,indent=2)+'\n')
print('構文97ブロックの草稿を保存。全文意味レビューは未実施。')
