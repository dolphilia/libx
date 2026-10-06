from pathlib import Path
from bs4 import BeautifulSoup
import json,re
N=Path('/Users/dolphilia/github/libx/docs/notes/document-import/mdbook/v0-5-4');W=Path('/private/tmp/libx-mdbook-formal-843/apps/mdbook');M=json.loads((N/'CONTENT_MAP.json').read_text())
P={
'15-format-configuration-index.md':['この節では、<em><strong>book.toml</strong></em>で使える設定を詳しく説明します。'],
'16-format-configuration-environment-variables.md':[
'対応する環境変数を設定すると、コマンドラインからすべての設定値を上書きできます。多くのOSでは、環境変数名に使える文字が英数字または<code>_</code>に制限されるため、設定キーには通常の<code>foo.bar.baz</code>と少し異なる書式が必要です。',
'設定には<code>MDBOOK_</code>で始まる変数を使います。<code>MDBOOK_</code>接頭辞を除き、残りの文字列を<code>kebab-case</code>へ変換してキーを作ります。二重のアンダースコア（<code>__</code>）は入れ子のキーを区切り、単独のアンダースコア（<code>_</code>）はハイフン（<code>-</code>）に置き換えます。',
'例：','このため、環境変数<code>MDBOOK_BOOK__TITLE</code>を設定すると、<code>book.toml</code>を変更せずに本のタイトルを上書きできます。',
'<strong>注：</strong>複雑な設定項目を指定しやすくするため、環境変数の値はまずJSONとして解析し、解析に失敗した場合は文字列として扱います。',
'つまり、必要なら次のようにして、本をビルドするときに本のすべてのメタデータを上書きできます。',
'後者の方法は、スクリプトやCIから<code>mdbook</code>を呼び出す場合に便利です。そのような状況では、ビルド前に<code>book.toml</code>を更新できないこともあります。'],
'17-format-configuration-general.md':[
'<em><strong>book.toml</strong></em>ファイルで、本のパラメーターを設定できます。',
'<em><strong>book.toml</strong></em>ファイルの例を示します。',
'設定で指定した<strong>すべての</strong>相対パスは、常に設定ファイルが置かれている本のルートを基準に解釈されることに注意してください。',
'本についての一般的な情報です。','<strong>book.toml</strong>',
'Rust言語の設定です。テストの実行やplaygroundとの連携に関係します。',
'<strong>edition</strong>：コードで既定として使うRustのエディションです。既定は<code>"2015"</code>です。個々のコードブロックには、次のように<code>edition2015</code>、<code>edition2018</code>、<code>edition2021</code>、<code>edition2024</code>の注釈を付けて指定できます。',
'本のビルド処理を制御します。',
'<strong>build-dir:</strong> 生成した本を出力するディレクトリです。既定は、本のルートにある<code>book/</code>です。CLIオプション<code>--dest-dir</code>で上書きできます。',
'<strong>create-missing:</strong> 既定では、<code>SUMMARY.md</code>で指定したファイルがない場合、本のビルド時に作成します（<code>create-missing = true</code>）。<code>false</code>なら、ファイルが存在しない場合はビルド処理がエラーで終了します。',
'<strong>use-default-preprocessors:</strong> <code>false</code>にすると、既定のプリプロセッサー（<code>links</code>と<code>index</code>）を無効にします。',
'同じプリプロセッサーや、ほかのプリプロセッサーを設定テーブルで宣言している場合は、そちらが実行されます。',
'<strong>extra-watch-dirs</strong>：<code>watch</code>と<code>serve</code>コマンドで監視するディレクトリのパスのリストです。これらのディレクトリ内でファイルを変更すると、再ビルドが起動します。本が<code>src</code>ディレクトリ外のファイルに依存している場合に便利です。'],
'18-format-configuration-preprocessors.md':[
'プリプロセッサーは、レンダラーへ渡す前のMarkdownソースを変更できる拡張です。',
'次のプリプロセッサーは組み込まれており、既定で使われます。',
'組み込みのプリプロセッサーは、<a href="/docs/mdbook/v0-5-4/en/01-guide/17-format-configuration-general/#build-options"><code>build.use-default-preprocessors</code></a>設定で無効にできます。',
'コミュニティは、いくつかのプリプロセッサーを開発しています。利用できるプリプロセッサーの一覧は、Wikiの<a href="https://github.com/rust-lang/mdBook/wiki/Third-party-plugins">Third Party Plugins</a>ページを参照してください。',
'新しいプリプロセッサーの作り方は、<a href="/docs/mdbook/v0-5-4/en/01-guide/13-for_developers-preprocessors/">開発者向けのプリプロセッサー</a>の章を参照してください。',
'<code>book.toml</code>に、プリプロセッサー名を付けた<code>preprocessor</code>テーブルを追加すると、プリプロセッサーを使えます。たとえば、<code>mdbook-example</code>というプリプロセッサーなら、次のように指定します。',
'このテーブルによって、mdBookは<code>mdbook-example</code>プリプロセッサーを実行します。',
'このテーブルには、プリプロセッサー固有のキーと値の組も追加できます。たとえば、例のプリプロセッサーに追加の設定が必要なら、次のように指定します。',
'プリプロセッサーとレンダラーを結び付けると、そのレンダラーに対してプリプロセッサーを実行することを明示的に指定できます。',
'既定では、<code>book.toml</code>へ<code>[preprocessor.foo]</code>テーブルを追加すると、<code>mdbook</code>は<code>mdbook-foo</code>実行ファイルの呼び出しを試みます。別のプログラム名を使ったり、コマンドライン引数を渡したりする場合は、<code>command</code>フィールドを追加して、この動作を上書きできます。',
'有効にしたプリプロセッサーがインストールされていない場合、既定ではエラーになります。プリプロセッサーを任意と指定すると、この動作を変えられます。',
'これによって、エラーが警告になります。',
'プリプロセッサーの実行順序は、<code>before</code>と<code>after</code>フィールドで指定できます。たとえば、<code>linenos</code>プリプロセッサーで、<code>{{#include}}</code>によって取り込まれた行を処理したい場合は、組み込みの<code>links</code>プリプロセッサーの後に実行する必要があります。<code>before</code>か<code>after</code>フィールドで、この順序を指定できます。',
'または、次のように指定します。',
'冗長にはなりますが、上の両方を同じ設定ファイルに指定することもできます。',
'<code>before</code>と<code>after</code>による優先度が同じプリプロセッサーは、名前で並べ替えます。無限ループは検出され、エラーになります。'],
'19-format-configuration-renderers.md':[
'レンダラー（「バックエンド」とも呼びます）は、本の出力を生成します。','次のバックエンドが組み込まれています。',
'コミュニティは、いくつかのバックエンドを開発しています。利用できるバックエンドの一覧は、Wikiの<a href="https://github.com/rust-lang/mdBook/wiki/Third-party-plugins">Third Party Plugins</a>ページを参照してください。',
'新しいバックエンドの作り方は、<a href="/docs/mdbook/v0-5-4/en/01-guide/12-for_developers-backends/">開発者向けのバックエンド</a>の章を参照してください。',
'<code>book.toml</code>に、バックエンド名を付けた<code>output</code>テーブルを追加すると、バックエンドを使えます。たとえば、<code>mdbook-wordcount</code>というバックエンドなら、次のように指定します。',
'このテーブルによって、mdBookは<code>mdbook-wordcount</code>バックエンドを実行します。',
'このテーブルには、バックエンド固有のキーと値の組も追加できます。たとえば、例のバックエンドに追加の設定が必要なら、次のように指定します。',
'<code>[output]</code>テーブルを1つでも定義すると、<code>html</code>バックエンドは既定では有効になりません。引き続き<code>html</code>バックエンドを使うには、<code>book.toml</code>ファイルに追加してください。例を示します。',
'<code>output</code>テーブルを複数追加すると、出力ディレクトリの構成が変わります。バックエンドが1つなら、出力は<code>book</code>ディレクトリへ直接置かれます（場所を変更するには<a href="/docs/mdbook/v0-5-4/en/01-guide/17-format-configuration-general/#build-options"><code>build.build-dir</code></a>を参照してください）。バックエンドが複数なら、それぞれの出力を<code>book</code>内の別々のディレクトリへ置きます。たとえば、上の例では<code>book/html</code>と<code>book/wordcount</code>になります。',
'既定では、<code>book.toml</code>へ<code>[output.foo]</code>テーブルを追加すると、<code>mdbook</code>は<code>mdbook-foo</code>実行ファイルの呼び出しを試みます。別のプログラム名を使ったり、コマンドライン引数を渡したりする場合は、<code>command</code>フィールドを追加して、この動作を上書きできます。',
'有効にしたバックエンドがインストールされていない場合、既定ではエラーになります。バックエンドを任意と指定すると、この動作を変えられます。','これによって、エラーが警告になります。',
'HTMLレンダラーには、以下に詳しく説明するさまざまな設定があります。<code>book.toml</code>ファイルの<code>[output.html]</code>テーブルに指定してください。',
'次の設定が使えます。',
'<code>[output.html.print]</code>テーブルでは、印刷出力を制御します。既定では、mdBookは本の右上にアイコン（[SVG0]）を置き、本全体を1ページとして印刷できるようにします。',
'<code>[output.html.fold]</code>テーブルでは、ナビゲーションサイドバーの章の一覧を折りたたむ動作を制御します。',
'<code>[output.html.playground]</code>テーブルでは、Rustのコード例と、<a href="https://play.rust-lang.org/">Rust Playground</a>との連携を制御します。',
'<code>[output.html.code]</code>テーブルでは、コードブロックを制御します。',
'<code>[output.html.search]</code>テーブルでは、組み込みの全文<a href="/docs/mdbook/v0-5-4/en/01-guide/30-guide-reading/#search">検索</a>を制御します。mdBookは<code>search</code>機能を有効にしてコンパイルする必要があります（既定で有効です）。',
'[<code>output.html.search.chapter</code>]テーブルでは、章やディレクトリごとに検索設定を変えられます。各キーは章のソースファイルまたはディレクトリのパスで、値はそのパスへ適用する設定テーブルです。これらは再帰的にマージされ、より具体的なパスが優先されます。',
'<code>[output.html.redirect]</code>テーブルでは、リダイレクトを追加できます。ページを移動、改名、削除した際に、旧URLへのリンクを新しい場所へ誘導するために便利です。',
'このテーブルにはキーと値の組を指定します。キーは、リダイレクト用のファイルを作成する場所を、ビルドディレクトリからの絶対パスで表します（例：<code>/appendices/bibliography.html</code>）。値には、ブラウザーの移動先となる任意の有効なURIを指定できます（例：<code>https://rust-lang.org/</code>、<code>/overview.html</code>、<code>../bibliography.html</code>）。',
'指定した場所へ自動でリダイレクトするHTMLページが生成されます。',
'フラグメントのリダイレクトを指定した場合、そのページはJavaScriptを使って正しい場所へ移動させる必要があります。節の見出しを改名、移動したときに便利です。フラグメントのリダイレクトは、既存のページと削除したページで使えます。',
'Markdownレンダラーは、プリプロセッサーを実行した後、その結果のMarkdownを出力します。主にプリプロセッサーのデバッグに便利で、特に<code>mdbook test</code>と組み合わせると、<code>mdbook</code>が<code>rustdoc</code>へ渡すMarkdownを確認できます。',
'Markdownレンダラーは<code>mdbook</code>に含まれますが、既定では無効です。次の空のテーブルを<code>book.toml</code>へ追加すると、有効になります。',
'現時点でMarkdownレンダラーに設定項目はありません。有効か無効かだけを指定できます。',
'Markdownレンダラーの前に実行するプリプロセッサーの指定方法は、<a href="/docs/mdbook/v0-5-4/en/01-guide/18-format-configuration-preprocessors/">プリプロセッサーの文書</a>を参照してください。']}
L={
'15-format-configuration-index.md':[
'<a href="/docs/mdbook/v0-5-4/en/01-guide/17-format-configuration-general/">全般</a>：<code>book</code>、<code>rust</code>、<code>build</code>の各節を含む設定',
'<a href="/docs/mdbook/v0-5-4/en/01-guide/18-format-configuration-preprocessors/">プリプロセッサー</a>：既定および独自の本のプリプロセッサーの設定',
'<a href="/docs/mdbook/v0-5-4/en/01-guide/19-format-configuration-renderers/">レンダラー</a>：HTML、Markdown、独自レンダラーの設定',
'<a href="/docs/mdbook/v0-5-4/en/01-guide/16-format-configuration-environment-variables/">環境変数</a>：環境から設定項目を上書きするための設定'],
'17-format-configuration-general.md':[
'<strong>title:</strong> 本のタイトル', '<strong>authors:</strong> 本の著者',
'<strong>description:</strong> 本の説明。各ページのHTMLの<code>&#x3C;head></code>へ、メタ情報として追加されます。',
'<strong>src:</strong> 既定では、ソースディレクトリはルートフォルダー直下の<code>src</code>というディレクトリです。設定ファイルの<code>src</code>キーで変更できます。',
'<strong>language:</strong> 本の主要な言語。たとえば<code>&#x3C;html lang="en"></code>のように、言語属性として使われます。本の文字の向き（RTL、LTR）の決定にも使われます。',
'<strong>text-direction</strong>：本の文字の向き。左から右（LTR）または右から左（RTL）です。指定できる値は<code>ltr</code>、<code>rtl</code>です。省略すると、本の<code>language</code>属性から決定します。',
'明確にすると、プリプロセッサーの設定がない場合は、既定の<code>links</code>と<code>index</code>を実行します。',
'<code>use-default-preprocessors = false</code>にすると、これらの既定のプリプロセッサーを実行しません。',
'たとえば<code>[preprocessor.links]</code>を追加すると、<code>use-default-preprocessors</code>の値にかかわらず、<code>links</code>を実行します。'],
'18-format-configuration-preprocessors.md':[
'<code>links</code>：章にあるhandlebarsヘルパー<code>{{ #playground }}</code>、<code>{{ #include }}</code>、<code>{{ #rustdoc_include }}</code>を展開し、ファイルの内容を取り込みます。詳しくは<a href="/docs/mdbook/v0-5-4/en/01-guide/22-format-mdbook/#including-files">ファイルを取り込む</a>を参照してください。',
'<code>index</code>：<code>README.md</code>という名前の章ファイルをすべて<code>index.md</code>へ変換します。つまり、すべての<code>README.md</code>は、生成した本ではインデックスファイル<code>index.html</code>として出力されます。'],
'19-format-configuration-renderers.md':[
'<a href="#html-renderer-options"><code>html</code></a> — 本をHTMLへ変換します。<code>book.toml</code>でほかの<code>[output]</code>テーブルを定義していなければ、既定で有効です。',
'<a href="#markdown-renderer"><code>markdown</code></a> — プリプロセッサーを実行した後、本をMarkdownとして出力します。プリプロセッサーのデバッグに便利です。',
'<strong>theme:</strong> mdBookには、既定のテーマと必要なリソースファイルが含まれます。この設定を指定すると、指定したフォルダーにあるファイルで、対応するテーマファイルを上書きします。',
'<strong>default-theme:</strong> 「Change Theme」ドロップダウンで、既定として選択する配色です。既定は<code>light</code>です。',
'<strong>preferred-dark-theme:</strong> 既定のダークテーマです。ブラウザーがCSSメディアクエリー<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"><code>prefers-color-scheme</code></a>でサイトのダーク版を要求すると、このテーマを使います。既定は<code>navy</code>です。',
'<strong>smart-punctuation:</strong> 引用符を曲線の引用符へ、<code>...</code>を<code>…</code>へ、<code>--</code>をenダッシュへ、<code>---</code>をemダッシュへ変換します。<a href="/docs/mdbook/v0-5-4/en/01-guide/20-format-markdown/#smart-punctuation">句読点の自動変換</a>を参照してください。既定は<code>true</code>です。',
'<strong>definition-lists:</strong> <a href="/docs/mdbook/v0-5-4/en/01-guide/20-format-markdown/#definition-lists">定義リスト</a>を有効にします。既定は<code>true</code>です。',
'<strong>admonitions:</strong> <a href="/docs/mdbook/v0-5-4/en/01-guide/20-format-markdown/#admonitions">注意書き</a>を有効にします。既定は<code>true</code>です。',
'<strong>mathjax-support:</strong> <a href="/docs/mdbook/v0-5-4/en/01-guide/21-format-mathjax/">MathJax</a>対応を追加します。既定は<code>false</code>です。',
'<strong>additional-css:</strong> スタイル全体を置き換えずに本の見た目を少し変えたい場合は、スタイルシートの集合を指定できます。既定のスタイルシートの後に読み込まれ、部分的にスタイルを変更できます。',
'<strong>additional-js:</strong> 本の現在の動作を削らず、新しい動作を追加したい場合は、JavaScriptファイルの集合を指定できます。既定のファイルとともに読み込まれます。',
'<strong>no-section-label:</strong> mdBookは既定では、目次欄に「1.」「2.1」などの節番号を追加します。trueにすると、番号を表示しません。既定は<code>false</code>です。',
'<strong>git-repository-url:</strong> 本のGitリポジトリのURLです。指定すると、本のメニューバーにアイコン付きのリンクを表示します。',
'<strong>git-repository-icon:</strong> Gitリポジトリへのリンクに使うFont Awesomeのアイコンクラスです。既定は<code>fab-github</code>で、[SVG0]のように表示されます。GitHubを使わない場合は、[SVG1]のように表示される<code>fas-code-fork</code>も候補になります。文字列の先頭は、regularアイコンなら<code>fa-</code>、solidアイコンなら<code>fas-</code>、brandアイコンなら<code>fab-</code>です。利用できるアイコンは<a href="https://fontawesome.com/v6/search">無料のアイコン集合</a>を参照してください。',
'<strong>edit-url-template:</strong> 編集URLのテンプレートです。指定すると「Suggest an edit」ボタン（[SVG0]）を表示し、閲覧中のページの編集へ直接移動できます。たとえばGitHubのプロジェクトでは<code>https://github.com/&lt;owner&gt;/&lt;repo&gt;/edit/&lt;branch&gt;/{path}</code>、Bitbucketでは<code>https://bitbucket.org/&lt;owner&gt;/&lt;repo&gt;/src/&lt;branch&gt;/{path}?mode=edit</code>を指定します。{path}は、リポジトリ内のファイルの完全なパスに置き換えられます。',
'<strong>input-404:</strong> ファイルが見つからない場合に使うMarkdownファイルの名前です。出力ファイルは同じ名前で、拡張子が<code>html</code>に置き換わります。既定は<code>404.md</code>です。',
'<strong>site-url:</strong> 本を公開するURLです。サブディレクトリのURLへアクセスしても、404ファイルのナビゲーションリンクやscript/cssの読み込みが正しく動くようにするために必要です。既定は<code>/</code>です。<code>site-url</code>を設定する場合、アセットには文書を基準とした相対リンクを使ってください。つまり、<code>/</code>で始めないようにします。',
'<strong>cname:</strong> 本を公開するDNSのサブドメインまたはapexドメインです。GitHub Pagesの要件に従い、サイトのルートにCNAMEというファイルを作り、この文字列を書き込みます（<a href="https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site"><em>GitHub Pagesサイトのカスタムドメインを管理する</em></a>を参照）。',
'<strong>hash-files:</strong> 静的アセットのファイル名に、内容から作った暗号学的な「指紋」を含めます。内容を変更するとファイル名も変わります。たとえば、<code>css/chrome.css</code>は<code>css/chrome-9b8f428e.css</code>になる場合があります。章のHTMLファイルの名前は変わりません。静的CSSとJSは、<code>{{ resource "filename" }}</code>ディレクティブで相互に参照できます。既定は<code>true</code>です。',
'<strong>sidebar-header-nav:</strong> <code>true</code>なら、現在のページの見出しへのナビゲーションをサイドバーに含めます。既定は<code>true</code>です。',
'<strong>enable:</strong> 印刷機能を有効にします。<code>false</code>なら、印刷に関する機能を一切出力しません。既定は<code>true</code>です。',
'<strong>page-break:</strong> 章の間に改ページを挿入します。既定は<code>true</code>です。',
'<strong>enable:</strong> 節の折りたたみを有効にします。無効の場合、すべての折りたたみを開きます。既定は<code>false</code>です。',
'<strong>level:</strong> 値が大きいほど、開いた状態の領域が多くなります。0の場合は、すべて閉じます。既定は<code>0</code>です。',
'<strong>editable:</strong> ソースコードの編集を許可します。既定は<code>false</code>です。',
'<strong>copyable:</strong> コードにコピーボタンを表示します。既定は<code>true</code>です。',
'<strong>copy-js:</strong> エディターのJavaScriptファイルを出力ディレクトリへコピーします。既定は<code>true</code>です。',
'<strong>line-numbers:</strong> 編集可能なコードに行番号を表示します。<code>editable</code>と<code>copy-js</code>の両方を<code>true</code>にする必要があります。既定は<code>false</code>です。',
'<strong>runnable:</strong> Rustのコードに実行ボタンを表示します。<code>false</code>にすると、playgroundで実行する機能を全体で無効にします。既定は<code>true</code>です。',
'<strong>hidelines:</strong> 言語ごとに<a href="/docs/mdbook/v0-5-4/en/01-guide/22-format-mdbook/#hiding-code-lines">コード行を非表示にする</a>方法を定義するテーブルです。キーは言語、値は文字列で、この接頭辞で始まるコード行が非表示になります。',
'<strong>enable:</strong> 検索機能を有効にします。既定は<code>true</code>です。',
'<strong>limit-results:</strong> 検索結果の最大件数です。既定は<code>30</code>です。',
'<strong>teaser-word-count:</strong> 検索結果の短い抜粋に使う単語数です。既定は<code>30</code>です。',
'<strong>use-boolean-and:</strong> 複数の検索語を論理的にどう結び付けるかを定めます。trueなら、すべての検索語が各結果に含まれている必要があります。既定は<code>false</code>です。',
'<strong>boost-title:</strong> 検索語が見出しに含まれる場合、検索結果のスコアへ掛ける増加係数です。既定は<code>2</code>です。',
'<strong>boost-hierarchy:</strong> 検索語が階層に含まれる場合、検索結果のスコアへ掛ける増加係数です。階層には、親文書のすべてのタイトルと、すべての親見出しが含まれます。既定は<code>1</code>です。',
'<strong>boost-paragraph:</strong> 検索語が本文に含まれる場合、検索結果のスコアへ掛ける増加係数です。既定は<code>1</code>です。',
'<strong>expand:</strong> 長い単語にも一致させる場合はtrueにします。たとえば、<code>micro</code>の検索で<code>microwave</code>にも一致します。既定は<code>true</code>です。',
'<strong>heading-split-level:</strong> 検索結果は、結果を含む文書の節へリンクします。文書は、指定したレベル以下の見出しで節に分割されます。既定は<code>3</code>です（<code>### This is a level 3 heading</code>）。',
'<strong>copy-js:</strong> 検索実装のJavaScriptファイルを出力ディレクトリへコピーします。既定は<code>true</code>です。',
'<strong>enable:</strong> 指定した章の検索インデックスへの登録を有効または無効にします。既定は<code>true</code>です。全体の<code>output.html.search.enable</code>設定は上書きしません。どの検索機能を使う場合も、全体の設定を<code>true</code>にする必要があります。章の登録を無効にすると、読者が語句を検索して、見つかるはずの結果が見つからずに混乱する可能性があります。章をインデックスに残すと検索結果の品質に問題が生じる、例外的な場合にだけ使ってください。']}
H={'Configuration':'設定','Environment variables':'環境変数','General configuration':'全般の設定','Supported configuration options':'対応する設定項目','General metadata':'一般的なメタデータ','Rust options':'Rustの設定','Build options':'ビルドの設定','Configuring Preprocessors':'プリプロセッサーの設定','Custom preprocessor configuration':'独自プリプロセッサーの設定','Locking a preprocessor dependency to a renderer':'プリプロセッサーをレンダラーに結び付ける','Provide your own command':'独自のコマンドを指定する','Optional preprocessors':'任意のプリプロセッサー','Require a certain order':'順序を指定する','Configuring Renderers':'レンダラーの設定','Output tables':'出力テーブル','Custom backend commands':'独自バックエンドのコマンド','Optional backends':'任意のバックエンド','HTML renderer options':'HTMLレンダラーの設定','Markdown renderer':'Markdownレンダラー','General':'全般','Preprocessors':'プリプロセッサー','Renderers':'レンダラー','mdBook-specific features':'mdBook固有の機能'}
def keep_svg(original,new):
 svgs=re.findall(r'<span class="fa-svg">[\s\S]*?</span>',original)
 for i,x in enumerate(svgs):assert '[SVG'+str(i)+']'in new;new=new.replace('[SVG'+str(i)+']',x)
 assert '[SVG' not in new
 return new
for name,ja in P.items():
 s=(N/'canonical/en/01-guide'/name).read_text();front,body=s.split('---\n',2)[1:];d=BeautifulSoup(body,'html.parser');ps=re.findall(r'<p(?: [^>]*)?>[\s\S]*?</p>',body);assert len(ps)==len(ja),(name,len(ps),len(ja))
 for old,new in zip(ps,ja):assert old in body;body=body.replace(old,'<p>'+keep_svg(old,new)+'</p>',1)
 if name in L:
  leaflis=[x for x in re.findall(r'<li>(?:(?!<li>|</li>)[\s\S])*?</li>',body)if '<p>'not in x and '<pre'not in x];assert len(leaflis)==len(L[name]),(name,len(leaflis),len(L[name]))
  for old,new in zip(leaflis,L[name]):assert old in body;body=body.replace(old,'<li>'+keep_svg(old,new)+'</li>',1)
 for en,jp in H.items():body=body.replace('>'+en+'<','>'+jp+'<');front=front.replace('"text": "'+en+'"','"text": "'+jp+'"')
 body=body.replace('/v0-5-4/en/','/v0-5-4/ja/');src=next(p['sourcePath']for p in M['pages']if p['id']=='01-guide/'+name)
 context=[{'kind':'source','html':f'<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href="https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/{src}">固定した原典</a> · <a href="/docs/mdbook/source/v0-5-4/edited/ja/{name}">編集可能な日本語文書</a> · <a href="/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz">固定原資料一式</a>。</p>'},{'kind':'editorial','html':'<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>'}]
 title=H.get(d.select_one('h1').get_text(),d.select_one('h1').get_text());front=re.sub(r'^title: .*$', 'title: '+json.dumps('mdBook：'+title,ensure_ascii=False),front,flags=re.M);front=re.sub(r'^documentContext: .*$', 'documentContext: '+json.dumps(context,ensure_ascii=False),front,flags=re.M);front=front.replace('/v0-5-4/en/','/v0-5-4/ja/');result='---\n'+front+'---\n'+body
 for p in [N/'translations/ja/01-guide'/name,W/'src/content/docs/v0-5-4/ja/01-guide'/name,W/'public/source/v0-5-4/edited/ja'/name]:p.parent.mkdir(parents=True,exist_ok=True);p.write_text(result)
 (N/'drafts/ja/01-guide'/name).write_text(body);print('Saved draft',name)
