from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');s=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][3];en={'title':s['title'],'body':s['body'],'entries':copy.deepcopy(s['entries'][:4])};ja=copy.deepcopy(en);ja['title']='組込み演算子と関数';ja['body']=r'''
jqの演算子の一部（たとえば `+`）は、引数の型（配列、数値など）によって異なる処理を行います。ただし、jqは暗黙の型変換を行いません。文字列をオブジェクトに加えようとすると、エラーメッセージが表示され、結果は得られません。

すべての数値はIEEE754の倍精度浮動小数点表現へ変換されることに注意してください。算術演算子と論理演算子は、この変換済みの倍精度数値を使って動作します。これらの演算の結果も、倍精度に制限されます。

この数値の扱いに対する唯一の例外は、元の数値リテラルを保存したものです。最初にリテラルとして与えられた数値が、プログラムの最後まで一度も変更されなかった場合、元のリテラル形式のまま出力されます。元のリテラルをIEEE754の倍精度浮動小数点数へ変換すると切り詰められる場合も、これに含まれます。
'''
titles=['加算：`+`','減算：`-`','乗算・除算・剰余：`*`、`/`、`%`','`abs`']
bodies=[r'''
演算子 `+` は2つのフィルターを受け取り、両方を同じ入力に適用して、その結果を加えます。「加える」が何を意味するかは、対象の型によって異なります。

- **数値**は、通常の算術演算で加算されます。

- **配列**は、連結されて、より大きな配列になります。

- **文字列**は、結合されて、より長い文字列になります。

- **オブジェクト**は、両方のオブジェクトのすべてのキーと値の組を1つのオブジェクトへ挿入する、マージ処理で加算されます。両方のオブジェクトに同じキーの値がある場合、`+` の右側のオブジェクトが優先されます（再帰的にマージするには、`*` 演算子を使ってください）。

`null` は任意の値に加えることができ、もう一方の値を変更せずに返します。
''',r'''
数値に対する通常の算術的な減算に加えて、`-` 演算子は配列にも使えます。2つ目の配列の要素について、1つ目の配列からすべての出現箇所を取り除きます。
''',r'''
これらの中置演算子は、2つの数値を与えると期待どおりに動作します。0による除算はエラーになります。`x % y` は、xのyによる剰余を計算します。

文字列に数値を掛けると、その数だけ文字列を連結したものを生成します。`"x" * 0` は `""` を生成します。

文字列を別の文字列で割ると、2つ目の文字列を区切りとして1つ目の文字列を分割します。

2つのオブジェクトを掛けると、再帰的にマージします。加算と同様に動作しますが、両方のオブジェクトに同じキーの値があり、その値がオブジェクトである場合、その2つの値も同じ方法でマージされます。
''',r'''
組込み関数 `abs` は、単純に `if . < 0 then - . else . end` と定義されています。

数値を入力した場合、これは絶対値になります。この定義が数値入力に与える影響については、恒等フィルターの節を参照してください。

数値の絶対値を浮動小数点数として計算する場合は、`fabs` の使用を検討してください。
''']
for i,e in enumerate(ja['entries']):e['title']=titles[i];e['body']=bodies[i]
for k in ['body']:assert re.findall(r'`([^`]+)`',en[k])==re.findall(r'`([^`]+)`',ja[k])
for x,y in zip(en['entries'],ja['entries']):
 for k in ['title','body']:assert re.findall(r'`([^`]+)`',x[k])==re.findall(r'`([^`]+)`',y[k])
 assert x['examples']==y['examples']
d=p/'translations/chunks/04-builtin';d.mkdir(parents=True,exist_ok=False)
for n,v in [('000-003.source.json',en),('000-003.ja.json',ja)]:
 with (d/n).open('x') as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print({'coveredEntries':4,'remainingEntries':71,'examples':sum(len(e['examples'])for e in en['entries'])})
