from pathlib import Path
import json,hashlib,datetime
r=Path('/Users/dolphilia/github/libx'); p=r/'docs/notes/document-import/jq/1.8.2';d=p/'translations';d.mkdir(exist_ok=False)
source=json.loads((p/'PARSED_MANUAL.json').read_text());en={'headline':source['headline'],'body':source['body']}
ja={'headline':'jq 1.8 マニュアル','body':'''jqのプログラムは「フィルター」です。入力を受け取り、出力を生成します。オブジェクトから特定のフィールドを取り出す、数値を文字列に変換するなど、さまざまな一般的な処理に使える組込みフィルターが数多くあります。

フィルターはさまざまな方法で組み合わせられます。あるフィルターの出力を別のフィルターへパイプで渡したり、フィルターの出力を配列にまとめたりできます。

複数の結果を生成するフィルターもあります。たとえば、入力配列のすべての要素を生成するフィルターがあります。このフィルターの出力を2つ目のフィルターへパイプで渡すと、配列の各要素に対して2つ目のフィルターが実行されます。一般に、他の言語ならループや反復処理で行うことを、jqではフィルターをつなぎ合わせるだけで行えます。

どのフィルターにも入力と出力があることを覚えておくのが大切です。「hello」や42のようなリテラルもフィルターです。入力は受け取りますが、出力として常に同じリテラルを生成します。加算のように2つのフィルターを組み合わせる演算では、通常、両方に同じ入力を渡し、その結果を組み合わせます。したがって、平均を求めるフィルターは `add / length` と書けます。入力配列を `add` フィルターと `length` フィルターの両方へ渡してから、割り算を行うわけです。

とはいえ、少し先走ってしまいました。:) もっと簡単なところから始めましょう。
'''}
# Preserve literal syntax exactly rather than replace source quotes with Japanese punctuation.
ja['body']=ja['body'].replace('「hello」や42','"hello"や42')
for name,data in [('00-introduction.source.json',en),('00-introduction.ja.json',ja)]:
 (d/name).write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
print({'fields':2,'examples':0,'bodyParagraphs':len(ja['body'].strip().split('\n\n'))})
