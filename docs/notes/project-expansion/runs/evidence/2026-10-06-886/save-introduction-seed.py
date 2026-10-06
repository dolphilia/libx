from pathlib import Path
from bs4 import BeautifulSoup
import json,html,hashlib,datetime,copy
E=Path(__file__).parent;p=E/'drafts/en/01-introduction.md';s=BeautifulSoup(p.read_text(),'html.parser');ps=s.select('p');original=copy.deepcopy(s)
def a(pi,ai,label=None):
 n=copy.deepcopy(ps[pi].select('a')[ai])
 if label is not None:n.clear();n.append(label)
 return str(n)
def c(pi,ci=0):return str(ps[pi].select('code')[ci])
text=[
f'Markdownは構造化された文書を書くためのプレーンテキスト形式で、電子メールやUsenetへの投稿で書式を示す慣習に基づいています。John GruberがAaron Swartzの協力を得て開発し、2004年に{a(0,0,"構文の説明")}と、MarkdownをHTMLに変換するPerlスクリプト（{c(0)}）として公開しました。その後の10年間で、さまざまな言語による数十もの実装が開発されました。元のMarkdown構文に、脚注、表、その他の文書要素の記法を追加したものもあります。Markdown文書をHTML以外の形式で表示できるようにしたものもあります。Reddit、StackOverflow、GitHubのようなウェブサイトでは、何百万人もの人がMarkdownを使っていました。そしてMarkdownは、ウェブ以外でも、書籍、記事、スライド、手紙、講義ノートの執筆に使われるようになりました。',
'Markdownを、より書きやすい場合も多いほかの軽量マークアップ構文と区別するのは、読みやすさです。Gruberは次のように述べています。',
f'Markdownの書式構文における最優先の設計目標は、できるだけ読みやすくすることです。Markdownで書式を付けた文書を、タグや書式指示でマークアップされているように見せず、そのままプレーンテキストとして公開できるようにする、という考え方です。（{a(2,0)}）',
f'この点は、{a(3,0,"AsciiDoc")}の例と、それに相当するMarkdownの例を比較するとわかります。次はAsciiDocマニュアルにあるAsciiDocの例です。',
'これと同じ内容をMarkdownで表すと、次のようになります。',
'書くことだけを考えれば、AsciiDoc版のほうが簡単だともいえます。字下げを気にする必要がないからです。しかし、Markdown版のほうがはるかに読みやすくなっています。リスト項目の入れ子が、処理後の文書だけでなく、ソースを見てもわかります。',
f'John Gruberによる{a(6,0,"Markdown構文の原著の説明")}では、構文が曖昧さなく定義されていません。そこでは答えが示されていない問いの例を挙げます。',
f'子リストにはどれだけの字下げが必要でしょうか。説明では、続きの段落に4個のスペースで字下げする必要があるとされていますが、子リストについては十分に明示されていません。子リストにも4個のスペースが必要だと考えるのは自然ですが、{c(7)}はそれを要求しません。これは「特殊な端のケース」とはいいがたく、この点で実装が異なるため、実際の文書で利用者が意外な結果に遭遇することはよくあります。（{a(7,0,"John Gruberのこのコメント")}を参照してください。）',
f'ブロック引用や見出しの前に空行は必要でしょうか。ほとんどの実装では必要ありません。しかし、テキストに明示的な改行を入れて行を折り返していると、予期しない結果を生んだり、解析に曖昧さが生じたりします。見出しをブロック引用の内側に入れる実装もあれば、入れない実装もある点に注意してください。（John Gruberも{a(8,0,"空行を必須にすることを支持する発言")}をしています。）',
f'字下げによるコードブロックの前に空行は必要でしょうか。（{c(9)}は空行を要求しますが、文書にはそのことが書かれておらず、要求しない実装もあります。）',
f'リスト項目を{c(10)}タグで囲むかどうかを決める正確な規則は何でしょうか。1つのリストが、一部は「loose」、一部は「tight」になれるのでしょうか。次のようなリストはどう扱うべきでしょうか。',
'また、こちらの場合はどうでしょうか。',
f'（関連するJohn Gruberのコメントが{a(12,0,"こちら")}にあります。）',
'リストのマーカーを字下げしてもよいでしょうか。番号付きリストのマーカーを右揃えにしてもよいでしょうか。',
'これは、2番目の項目に主題区切りが入った1つのリストでしょうか。それとも、主題区切りで分けられた2つのリストでしょうか。',
'リストのマーカーが数字から箇条書き記号に変わったとき、リストは2つになるのでしょうか、それとも1つでしょうか。（Markdown構文の説明では2つになるように示されていますが、Perlスクリプトや多くのほかの実装では1つになります。）',
'インライン構造のマーカーには、どのような優先順位の規則があるでしょうか。たとえば、次の例は有効なリンクでしょうか。それともコードスパンが優先されるのでしょうか。',
'強調と強い強調のマーカーには、どのような優先順位の規則があるでしょうか。たとえば、次の例はどのように解析すべきでしょうか。',
'ブロック構造とインライン構造の間には、どのような優先順位の規則があるでしょうか。たとえば、次の例はどのように解析すべきでしょうか。',
f'リスト項目に節見出しを含めてもよいでしょうか。（{c(19)}はこれを許可しませんが、ブロック引用の中に見出しを含めることは許可します。）',
'リスト項目は空でもよいでしょうか。',
'ブロック引用やリスト項目の中でリンク参照を定義してもよいでしょうか。',
'同じ参照に複数の定義がある場合、どの定義が優先されるでしょうか。',
f'仕様がなかったため、初期の実装者は{c(23,0)}を参照して、これらの曖昧さを解消しました。しかし、{c(23,1)}にはかなり多くのバグがあり、多くのケースで明らかに不適切な結果を返していたため、仕様の十分な代わりにはなりませんでした。',
'曖昧さのない仕様が存在しないため、実装同士は大きく異なるものになりました。その結果、あるシステム、たとえばGitHubのwikiではある形で表示された文書が、別のシステム、たとえばpandocでDocBookに変換したときには違う形になることに、利用者が驚く場合がよくあります。さらに、Markdownでは何も「構文エラー」とみなされないため、そうした違いはすぐに発見されないこともよくあります。',
f'この文書はMarkdown構文を曖昧さなく定義することを目指しています。MarkdownとHTMLを並べた多数の例があり、これらは適合性試験も兼ねることを意図しています。付属のスクリプト{c(25)}を使えば、任意のMarkdownプログラムを対象に試験を実行できます。',
'この文書は、Markdownをどのように抽象構文木へ解析するかを記述するものなので、HTMLの代わりに構文木の抽象表現を使うことにも意味があったでしょう。しかし、HTMLでも、ここで区別する必要のある構造を表せます。また、試験にHTMLを使えば、抽象構文木を出力するレンダラーを新たに書かずに、実装に対して試験を実行できます。',
'HTMLの例に現れるすべての特徴を、仕様が要求しているわけではない点に注意してください。たとえば、仕様は何がリンク先にあたるかを定めていますが、URL中の非ASCII文字をパーセント符号化することまでは要求していません。自動試験を利用する場合、実装者は仕様の例の期待結果に合うレンダラー、つまりURL中の非ASCII文字をパーセント符号化するレンダラーを用意する必要があります。しかし、仕様に適合する実装は別のレンダラーを使ってもよく、URL中の非ASCII文字をパーセント符号化しないことを選んでもかまいません。',
f'この文書は、Markdownに対照試験用の小さな拡張を加えて書かれたテキストファイル{c(28,0)}から生成されます。スクリプト{c(28,1)}を使うと、{c(28,2)}をHTMLまたはCommonMarkに変換できます。後者はさらにほかの形式へ変換できます。',
f'例では、{c(29)}という文字でタブを表します。'
];assert len(text)==len(ps)==30
for node,value in zip(ps,text):
 node.clear()
 frag=BeautifulSoup(value,'html.parser')
 for child in list(frag.contents):node.append(child)
labels=['はじめに','Markdownとは','仕様が必要な理由','この文書について']
for h,label in zip(s.select('h2,h3'),labels):
 number=copy.deepcopy(h.select_one('.number'));h.clear();h.append(number);h.append(label)
# Preserve every raw code and link target before saving; prose remains unreviewed.
assert [x.get_text() for x in s.select('pre code')]==[x.get_text() for x in original.select('pre code')]
assert sorted(x['href'] for x in s.select('a[href]'))==sorted(x['href'] for x in original.select('a[href]'))
assert [x.get_text() for x in s.select('code')]==[x.get_text() for x in original.select('code')]
literals=[]
for i,x in enumerate(s.select('pre code')):
 key=f'LIBX_COMMONMARK_LITERAL_CODE_{i:05d}_END';literals.append((key,html.escape(x.get_text(),quote=False).replace('\n','&#10;').replace('\t','&#9;')));x.clear();x.append(key)
md=str(s)+'\n'
for k,v in literals:assert md.count(k)==1;md=md.replace(k,v)
J=E/'drafts/ja-seeds';J.mkdir(exist_ok=True);(J/'01-introduction.md').write_text(md);(E/'JA_INTRODUCTION_SEED.json').write_text(json.dumps({'status':'saved-unreviewed-Japanese-seed','at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'sourceENPath':str(p),'sourceENSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'draftPath':str(J/'01-introduction.md'),'draftSHA256':hashlib.sha256(md.encode()).hexdigest(),'paragraphs':30,'sourceCodeBlocks':16,'rawAndInlineCodeExact':True,'allOriginalLinksPreserved':True,'meaningReview':'pending-separate-fullpass-withbatch','existingJapaneseReused':False,'publication':'notcanonical/notverified/notpublished'},indent=2)+'\n');print('Introduction JA seed saved/30paragraphs/16sourcecode exact;meaning review pending')
