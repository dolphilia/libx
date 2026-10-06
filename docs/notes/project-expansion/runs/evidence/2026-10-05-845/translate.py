from pathlib import Path
from bs4 import BeautifulSoup
import json,re
N=Path('/Users/dolphilia/github/libx/docs/notes/document-import/mdbook/v0-5-4');W=Path('/private/tmp/libx-mdbook-formal-843/apps/mdbook');M=json.loads((N/'CONTENT_MAP.json').read_text())
P={
'14-format-index.md':['この節では、次の方法を説明します。'],
'23-format-summary.md':[
'目次ファイルは、収録する章、その順序と階層、ソースファイルの場所をmdBookへ伝えるために使います。このファイルがなければ、本は作れません。',
'このMarkdownファイルの名前は、<code>SUMMARY.md</code>でなければなりません。解析しやすくするため、厳格な書式が定められており、以下の構成に従う必要があります。以下に指定されていない要素は、書式でも文字列でも、よくても無視され、場合によっては本のビルド時にエラーになる可能性があります。',
'<em><strong>タイトル</strong></em> — 省略できますが、通常は<code class="language-markdown"># Summary</code>などのタイトルで始めます。ただし、解析時には無視されるので、なくても構いません。',
'<em><strong>前付けの章</strong></em> — 主な番号付きの章の前に、番号なしの章を追加できます。序文や導入などに便利です。ただし、前付けの章は入れ子にできず、すべてルート階層に置く必要があります。また、番号付きの章を追加した後には、前付けの章を追加できません。',
'<em><strong>部のタイトル</strong></em> — レベル1の見出しは、以降の番号付きの章をまとめるタイトルとして使えます。本の各部分を論理的に分けるためのものです。クリックできない文字列として表示されます。タイトルは省略でき、番号付きの章は任意の数の部に分けられます。部のタイトルにはh1見出し（<code>#</code>ひとつ）を使う必要があり、ほかのレベルの見出しは無視されます。',
'<em><strong>番号付きの章</strong></em> — 本の主要な内容を構成します。入れ子にして、章や下位の章などの階層を作れます。',
'番号付きの章は、<code>-</code>または<code>*</code>で表せます（区切り記号を混在させないでください）。',
'<em><strong>後付けの章</strong></em> — 前付けの章と同様に番号は付きませんが、番号付きの章の後に置きます。',
'<em><strong>草稿の章</strong></em> — ファイルがなく、内容もない章です。これから書く章を示す目的で使います。また、本の構成を頻繁に変更している設計段階で、ファイルの作成を避けるためにも使えます。HTMLレンダラーでは、草稿の章は目次の無効なリンクとして表示されます。左側の目次にある次の章がその例です。通常の章と同じように記述し、ファイルへのパスだけを書きません。',
'<em><strong>区切り線</strong></em> — ほかの要素の前、間、後に追加できます。ビルドした目次にHTMLの横線として表示されます。区切り線は、3つ以上のハイフンだけを含む行（<code>---</code>）です。',
'以下は、このガイドの<code>SUMMARY.md</code>のMarkdownソースです。生成される目次は左側に表示されています。'],
'20-format-markdown.md':{
0:'mdBookの<a href="https://github.com/raphlinus/pulldown-cmark">パーサー</a>は、<a href="https://commonmark.org/">CommonMark</a>仕様に、以下で説明する拡張を加えたものに従います。簡単な<a href="https://commonmark.org/help/tutorial/">チュートリアル</a>を読んだり、CommonMarkをリアルタイムで<a href="https://spec.commonmark.org/dingus/">試したり</a>できます。Markdown全体の解説はこの文書の対象外ですが、基本事項の概要を以下に示します。詳しく知りたい場合は、<a href="https://www.markdownguide.org">Markdown Guide</a>を参照してください。',
1:'テキストは、ほぼ予想どおりに表示されます。',2:'次のように表示されます。',5:'見出しには<code>#</code>記号を使い、独立した行に記述します。<code>#</code>が多いほど、小さい見出しになります。',8:'リストは、番号なしでも番号付きでも作れます。番号付きリストでは、番号が自動で順番に付けられます。',9:'URLやローカルファイルへのリンクは簡単に作れます。',
14:'<code>.md</code>で終わる相対リンクは、拡張子<code>.html</code>に変換されます。できるだけ<code>.md</code>へのリンクを使うことを推奨します。GitHubやGitLabなど、Markdownを自動表示するサービスで、mdBook以外からMarkdownファイルを読むときにも便利です。',
15:'<code>README.md</code>へのリンクは、<code>index.html</code>に変換されます。GitHubなどのサービスはREADMEを自動表示しますが、ウェブサーバーは通常、ルートのファイル名として<code>index.html</code>を期待するためです。',
16:'<code>#</code>フラグメントで、個々の見出しにリンクできます。たとえば、<code>mdbook.md#text-and-paragraphs</code>は、上にある<a href="#text-and-paragraphs">テキストと段落</a>の節を指します。IDは、見出しを小文字にしたり、空白をハイフンに置き換えたりして生成されます。見出しをクリックしてブラウザーのURLを見ると、フラグメントを確認できます。',
17:'画像は、上の<em>リンク</em>の節と同じように、画像へのリンクで挿入します。次のMarkdownは、このファイルと同じ階層の<code>images</code>ディレクトリにある、RustロゴのSVG画像を挿入します。',18:'mdBookでビルドすると、次のHTMLを生成します。',19:'次のように画像が表示されます。',21:'mdBookには、標準のCommonMark仕様を超える拡張がいくつかあります。',22:'テキストの両側を、1つまたは2つのチルダで囲むと、中央を通る横線を付けて表示できます。',23:'この例は、次のように表示されます。',25:'<a href="https://github.github.com/gfm/#strikethrough-extension-">GitHubの取り消し線拡張</a>に従います。',
26:'脚注は、本文中に小さな番号付きのリンクを生成します。クリックすると、項目の末尾にある脚注本文へ移動します。脚注ラベルはリンク参照に似ていますが、先頭にキャレットを付けます。脚注本文はリンク参照の定義のように、ラベルの後へ書きます。例を示します。',27:'この例は、次のように表示されます。',29:'脚注は、記述された順序に従って自動で番号が付きます。',
30:'パイプとハイフンで表の行と列を描くと、表を記述できます。対応する形のHTML表に変換されます。例を示します。',31:'この例は、次のような表になります。',32:'対応する正確な構文については、<a href="https://github.github.com/gfm/#tables-extension-">GitHubの表拡張</a>の仕様を参照してください。',33:'タスクリストは、完了した項目を示すチェックリストとして使えます。例を示します。',34:'次のように表示されます。',35:'詳しくは、<a href="https://github.github.com/gfm/#task-list-items-extension-">タスクリスト拡張</a>の仕様を参照してください。',36:'一部のASCII句読点の並びは、自動で装飾的なUnicode文字へ変換されます。',37:'これらのUnicode文字を手で入力する必要はありません。',
38:'この機能は既定で有効です。無効にするには、<a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.smart-punctuation</code></a>設定を参照してください。',
39:'見出しには、独自のHTML IDとクラスを指定できます。見出しの文字列を変更しても同じIDを維持でき、複数のクラスを付けることもできます。',40:'例：',41:'内容が<code>Example heading</code>、IDが<code>first</code>、クラスが<code>class1</code>と<code>class2</code>である、レベル1の見出しになります。属性は空白で区切る必要があります。',42:'詳しくは、<a href="https://github.com/raphlinus/pulldown-cmark/blob/master/pulldown-cmark/specs/heading_attrs.txt">見出し属性の仕様</a>を参照してください。',
43:'定義リストは、用語集の項目などに使えます。用語を独立した行に書き、その後へ1つ以上の定義を続けます。各定義は、0〜2個の空白の後に<code>:</code>を置いて始める必要があります。',44:'例：',45:'次のように表示されます。',46:'用語は見出しと同様にクリックでき、ブラウザーのURLがその用語を直接指すようになります。',
47:'構文の詳細は、<a href="https://github.com/pulldown-cmark/pulldown-cmark/blob/HEAD/pulldown-cmark/specs/definition_lists.txt">定義リストの仕様</a>を参照してください。用語集の書き方については、<a href="https://en.wikipedia.org/wiki/Wikipedia:Manual_of_Style/Glossaries#General_guidelines_for_writing_glossaries">Wikipediaの用語集ガイドライン</a>も参考になります。',
48:'この機能は既定で有効です。無効にするには、<a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.definition-lists</code></a>設定を参照してください。',49:'注意書きは、重要な情報を強調するための、特別な呼び出し枠や通知ブロックです。引用ブロックとして書き、最初の行に専用のタグを置きます。',50:'次のように表示されます。',
61:'この機能は既定で有効です。無効にするには、<a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.admonitions</code></a>設定を参照してください。',62:'章の内容にあるすべての画像には、拡大機能があります。クリックすると大きくなり、再度クリックすると元に戻ります。キーボードで画像にフォーカスを移し、Spaceキーで拡大・縮小することもできます。'},
'21-format-mathjax.md':[
'mdBookは、<a href="https://www.mathjax.org/">MathJax</a>による数式表示に任意で対応します。',
'MathJaxを有効にするには、<code>book.toml</code>の<code>output.html</code>節に、<code>mathjax-support</code>キーを追加する必要があります。',
r'<strong>注：</strong> MathJaxで通常使われる区切りは、まだ対応していません。現時点では、<code>$$ ... $$</code>を区切りとして使えず、<code>\[ ... \]</code>を機能させるには、バックスラッシュを追加する必要があります。この制約は、近いうちに解消されることが期待されています。',
r'<strong>注：</strong> MathJaxのブロックで2つのバックスラッシュを使う場合（たとえば、<code>\begin{cases} \frac 1 2 \\ \frac 3 4 \end{cases}</code>などのコマンド）、バックスラッシュを<em>さらに2つ</em>追加する必要があります（例：<code>\begin{cases} \frac 1 2 \\\\ \frac 3 4 \end{cases}</code>）。',
r'行内数式は、<code>\\(</code>と<code>\\)</code>で囲みます。たとえば、次の行内数式 \( \int x dx = \frac{x^2}{2} + C \)を表示するには、次のように書きます。',
r'独立した数式は、<code>\\[</code>と<code>\\]</code>で囲みます。次の数式を表示するには、',None,'次のように書きます。'],
'24-format-theme-index.md':[
'既定のレンダラーは、<a href="https://handlebarsjs.com">handlebars</a>テンプレートでMarkdownファイルを表示します。mdBookのバイナリーには、既定のテーマが含まれています。',
'テーマはすべてカスタマイズできます。プロジェクトのルートで、<code>src</code>の隣に<code>theme</code>ディレクトリを追加すると、テーマの各ファイルを独自のものへ選択的に置き換えられます。上書きしたいファイルと同じ名前のファイルを作ると、既定のファイルの代わりに使われます。',
'上書きできるファイルは、次のとおりです。',
'通常、テーマを調整するときに、すべてのファイルを上書きする必要はありません。スタイルシートだけを変えたい場合は、ほかのファイルまで上書きする意味はありません。独自のファイルは組み込みのファイルより優先されるため、新しい修正や機能が追加されても更新されません。',
'<strong>注：</strong> ファイルを上書きすると、機能が壊れる可能性があります。そのため、既定のテーマのファイルをひな形に使い、必要な部分だけを追加・変更することを推奨します。<code>mdbook init --theme</code>で、既定のテーマをソースディレクトリへ自動コピーし、上書きしたくないファイルを削除できます。',
'<code>mdbook init --theme</code>は、上記のすべてのファイルを作成するわけではありません。<code>head.hbs</code>など、組み込みの対応ファイルがないものもあります。必要なら、そのファイルを作成してください。',
'組み込みのテーマをすべて置き換える場合は、設定の<a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/#html-renderer-options"><code>output.html.preferred-dark-theme</code></a>も必ず指定してください。既定値は、組み込みの<code>navy</code>テーマです。'],
'25-format-theme-editor.md':[
'mdBookは、コードを実行できるplaygroundに加え、編集可能にする機能も任意で提供します。編集可能なコードブロックを有効にするには、<em><strong>book.toml</strong></em>へ次の設定を追加します。',
'編集可能なコードブロックを有効にした後、編集するコードブロックへ<code>editable</code>属性を追加する必要があります。',
'上の設定と例から、次の編集可能なplaygroundが生成されます。',
'編集可能なplaygroundに追加された<code>Undo Changes</code>ボタンに注目してください。',
'既定では<a href="https://ace.c9.io/">Ace</a>エディターを使いますが、必要に応じて別のフォルダーを指定し、機能を置き換えることもできます。',
'エディターの変更を正しく機能させるには、<code>theme</code>フォルダー内の<code>book.js</code>も上書きする必要があります。既定のAceエディターとの連携処理が含まれているためです。'],
'26-format-theme-index-hbs.md':[
'<code>index.hbs</code>は、本を出力するためのhandlebarsテンプレートです。MarkdownファイルをHTMLへ変換して、このテンプレートへ挿入します。',
'本のレイアウトやスタイルを変える場合は、このテンプレートを少し変更する必要があるでしょう。必要な事項を以下に示します。',
'多くのデータが、コンテキストを通じてhandlebarsテンプレートへ公開されます。テンプレート内では、次のようにアクセスできます。',
'公開されるプロパティは、次のとおりです。',
'<em><strong>language</strong></em> <code>book.toml</code>で指定する本の言語です。<code>en</code>などの形式で表します（未指定の場合は<code>en</code>）。たとえば、<code class="language-html">&lt;html lang="{{ language }}"&gt;</code>で使います。',
'<em><strong>title</strong></em> 現在のページで使うタイトルです。<code>book_title</code>が設定されている場合は<code>{{ chapter_title }} - {{ book_title }}</code>と同じになり、未設定の場合は<code>chapter_title</code>をそのまま使います。',
'<em><strong>book_title</strong></em> <code>book.toml</code>で指定する本のタイトルです。',
'<em><strong>chapter_title</strong></em> <code>SUMMARY.md</code>に記載された、現在の章のタイトルです。',
'<em><strong>path</strong></em> ソースディレクトリから、元のMarkdownファイルへの相対パスです。',
'<em><strong>content</strong></em> 出力されたMarkdownです。',
'<em><strong>path_to_root</strong></em> 現在のファイルから本のルートを指す、<code>../</code>だけからなるパスです。元のディレクトリ構成を保持するため、相対リンクの前にこの<code>path_to_root</code>を付けると便利です。',
'<em><strong>previous</strong></em>と<em><strong>next</strong></em> 前の章と次の章へのリンクに使うオブジェクトです。対応する章の<code>title</code>と<code>link</code>プロパティを含みます。',
'<em><strong>chapters</strong></em> 次の形式の辞書の配列で、',
'本のすべての章を含みます。たとえば、目次（サイドバー）を構築するために使います。',
'アクセスできるプロパティに加え、利用できるhandlebarsヘルパーもあります。',
'tocヘルパーは、次のように使います。',
'本の構成に応じて、次のような出力を生成します。',
'別の構成の目次を作りたい場合は、すべてのデータを含むchaptersプロパティを利用できます。ただし、現時点ではhandlebarsヘルパーで作ることはできず、JavaScriptを使う必要があります。',
'静的ファイルへのパスです。<code>path_to_root</code>を暗黙に含み、ファイル名にハッシュを付けて名前が変わったファイルにも対応します。',
'mdBookは、<a href="https://fontawesome.com">Font Awesome Free</a>のMITライセンスのSVGファイルを同梱しています。位置引数を3つ受け取ります。',
'たとえば、次のhandlebars構文は、このHTMLになります。'],
'27-format-theme-syntax-highlighting.md':[
'mdBookは、独自テーマを使った<a href="https://highlightjs.org">Highlight.js</a>で構文をハイライトします。',
'言語の自動検出は無効になっているため、次のように使用するプログラミング言語を指定するとよいでしょう。',
'以下の言語に既定で対応しています。独自の<code>highlight.js</code>を用意して、さらに追加できます。',
'テーマのほかの部分と同じように、構文ハイライトに使うファイルも独自のものへ置き換えられます。',
'<code>highlight.js</code>で別のテーマを使いたい場合は、そのウェブサイトからダウンロードするか、自分で作成します。名前を<code>highlight.css</code>にして、本の<code>theme</code>フォルダーへ置いてください。',
'これで、既定のテーマの代わりに独自のテーマが使われます。',
'既定のテーマが特定の言語で適切に見えない、または改善できると思った場合は、考えていることを説明して<a href="https://github.com/rust-lang/mdBook/issues">新しいIssueを投稿</a>してください。著者が確認します。',
'改善案を含むプルリクエストを作成することもできます。',
'全体としては、派手な色を使いすぎず、明るく落ち着いたテーマにしてください。']}
H={'Format':'形式','Structure':'構成','Example':'例','Text and paragraphs':'テキストと段落','Headings':'見出し','Lists':'リスト','Links':'リンク','Images':'画像','Extensions':'拡張','Strikethrough':'取り消し線','Footnotes':'脚注','Tables':'表','Task lists':'タスクリスト','Smart punctuation':'句読点の自動変換','Heading attributes':'見出し属性','Definition lists':'定義リスト','Admonitions':'注意書き','Zoom-in':'画像の拡大','MathJax support':'MathJax対応','Inline equations':'行内数式','Block equations':'独立した数式','Theme':'テーマ','Editor':'エディター','Customizing the editor':'エディターをカスタマイズする','Data':'データ','Handlebars helpers':'Handlebarsヘルパー','Syntax highlighting':'構文ハイライト','Supported languages':'対応言語','Custom theme':'独自テーマ','Improve default theme':'既定のテーマを改善する','Configuration':'設定','General':'全般','Preprocessors':'プリプロセッサー','Renderers':'レンダラー','Environment variables':'環境変数','mdBook-specific features':'mdBook固有の機能','Continuous integration':'継続的インテグレーション','For developers':'開発者向け','Alternative backends':'代替バックエンド','Contributors':'貢献者'}
for name,ja in P.items():
 s=(N/'canonical/en/01-guide'/name).read_text();front,body=s.split('---\n',2)[1:];d=BeautifulSoup(body,'html.parser');ps=d.select('.mdbook-guide p');rawps=re.findall(r'<p(?: [^>]*)?>[\s\S]*?</p>',body);assert len(rawps)==len(ps)
 if isinstance(ja,list):assert len(ps)==len(ja),(name,len(ps),len(ja));ja=dict(enumerate(ja))
 for ix,new in ja.items():
  if new is None:continue
  old=rawps[ix];assert old in body,(name,ix);body=body.replace(old,'<p>'+new+'</p>',1)
 for en,jp in H.items():body=body.replace('>'+en+'<','>'+jp+'<');front=front.replace('"text": "'+en+'"','"text": "'+jp+'"')
 if name=='14-format-index.md':
  for en,jp in [('Structure your book correctly','本を正しく構成する'),('Format your <code>SUMMARY.md</code> file','<code>SUMMARY.md</code>ファイルの書式を指定する'),('Configure your book using <code>book.toml</code>','<code>book.toml</code>で本を設定する'),('Customize your theme','テーマをカスタマイズする')]:assert en in body;body=body.replace(en,jp)
 if name=='24-format-theme-index.md':
  replacements={' is the handlebars template.':'はhandlebarsテンプレートです。',' is appended to the HTML <code>&#x3C;head></code> section.':'はHTMLの<code>&#x3C;head></code>節に追加されます。',' content is appended on top of every book page.':'の内容は、本の各ページの先頭に追加されます。',' contains the CSS files for styling the book.':'は本のスタイルを指定するCSSファイルを含みます。',' is for UI elements.':'はUI要素向けです。',' is the base styles.':'は基本のスタイルです。',' is the style for printer output.':'は印刷出力のスタイルです。',' contains variables used in other CSS files.':'は、ほかのCSSファイルで使う変数を含みます。',' is mostly used to add client side functionality, like hiding /\nun-hiding the sidebar, changing the theme, …':'は、サイドバーの表示・非表示やテーマ変更など、クライアント側の機能を追加するために主に使います。',' is the JavaScript that is used to highlight code snippets,\nyou should not need to modify this.':'は、コードをハイライトするためのJavaScriptです。通常、変更する必要はありません。',' is the theme used for the code highlighting.':'はコードのハイライトに使うテーマです。',' the favicon that will be used. The SVG\nversion is used by <a href="https://caniuse.com/#feat=link-icon-svg">newer browsers</a>.':'は、使うfaviconです。SVG版は<a href="https://caniuse.com/#feat=link-icon-svg">新しいブラウザー</a>で使われます。',' contains the definition of which fonts to load.\nCustom fonts can be included in the <code>fonts</code> directory.':'は、読み込むフォントの定義を含みます。独自フォントは<code>fonts</code>ディレクトリへ入れられます。'}
  for en,jp in replacements.items():assert en in body,(name,en);body=body.replace(en,jp)
 if name=='26-format-theme-index-hbs.md':
  for en,jp in [('Type: one of “solid”, “regular”, and “brands” (light and duotone are not\ncurrently supported)','種類：“solid”、“regular”、“brands”のいずれか（lightとduotoneは現時点では未対応）'),('Icon: anything chosen from the\n<a href="https://fontawesome.com/v6/search">free icon set</a>','アイコン：<a href="https://fontawesome.com/v6/search">無料のアイコン集合</a>から選択'),('ID (optional): if included, an HTML ID attribute will be added to the\nicon’s wrapping <code>&#x3C;span></code> tag','ID（省略可能）：指定すると、アイコンを囲む<code>&#x3C;span></code>タグへHTMLのID属性を追加')]:assert en in body,(name,en);body=body.replace(en,jp)
 if name=='27-format-theme-syntax-highlighting.md':
  body=body.replace('normally you shouldn’t have to overwrite this file, unless\nyou want to use a more recent version.','新しい版を使いたい場合を除き、通常はこのファイルを上書きする必要はありません。').replace('theme used by highlight.js for syntax highlighting.','highlight.jsが構文ハイライトに使うテーマです。')
 if name=='20-format-markdown.md':body=body.replace('<th>ASCII sequence</th>','<th>ASCIIの並び</th>').replace('<th>Unicode</th>','<th>Unicode</th>').replace('depending on context','文脈に応じて').replace('“ or ”','“ または ”').replace('‘ or ’','‘ または ’')
 body=body.replace('/v0-5-4/en/','/v0-5-4/ja/');src=next(p['sourcePath']for p in M['pages']if p['id']=='01-guide/'+name)
 context=[{'kind':'source','html':f'<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href="https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/{src}">固定した原典</a> · <a href="/docs/mdbook/source/v0-5-4/edited/ja/{name}">編集可能な日本語文書</a> · <a href="/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz">固定原資料一式</a>。</p>'},{'kind':'editorial','html':'<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>'}]
 if name=='20-format-markdown.md':context.append({'kind':'editorial','html':'<p>構文を示すコードと、その出力例の文字列（英語・識別子）は原文を保持しています。Rustロゴは変更せずCC BY 4.0の通知を保持し、Rustとの提携・推奨を示しません。<a href="/docs/mdbook/source/v0-5-4/notices/RUST-ARTWORK-NOTICE.txt">原素材の通知</a>。</p>'})
 if name=='26-format-theme-index-hbs.md':context.append({'kind':'editorial','html':'<p>本文のSVGをMITとする説明は、原文の表現を保持しています。配布するFont Awesomeのアイコンには、同梱のCC BY 4.0等の素材別通知を適用します。非アイコンコードのMIT条件を、アイコンの条件へ置き換えません。<a href="/docs/mdbook/source/v0-5-4/notices/FA_5_15_4_LICENSE.txt">原通知</a> · <a href="/docs/mdbook/source/v0-5-4/notices/FA_6_2_0_LICENSE.txt">原通知</a>。</p>'})
 title=H.get(d.select_one('h1').get_text(),d.select_one('h1').get_text());front=re.sub(r'^title: .*$', 'title: '+json.dumps('mdBook：'+title,ensure_ascii=False),front,flags=re.M);front=re.sub(r'^documentContext: .*$', 'documentContext: '+json.dumps(context,ensure_ascii=False),front,flags=re.M);front=front.replace('/v0-5-4/en/','/v0-5-4/ja/');result='---\n'+front+'---\n'+body
 for p in [N/'translations/ja/01-guide'/name,W/'src/content/docs/v0-5-4/ja/01-guide'/name,W/'public/source/v0-5-4/edited/ja'/name]:p.parent.mkdir(parents=True,exist_ok=True);p.write_text(result)
 (N/'drafts/ja/01-guide'/name).write_text(body);print('Saved draft',name)
