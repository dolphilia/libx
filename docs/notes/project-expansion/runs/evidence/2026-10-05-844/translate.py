from pathlib import Path
from bs4 import BeautifulSoup
import json,re
N=Path('/Users/dolphilia/github/libx/docs/notes/document-import/mdbook/v0-5-4');W=Path('/private/tmp/libx-mdbook-formal-843/apps/mdbook')
directory=lambda cmd:f'<code>{cmd}</code>コマンドは、現在の作業ディレクトリの代わりに本のルートとして使うディレクトリを、引数で指定できます。'
dest='本の出力ディレクトリは、<code>--dest-dir</code>（<code>-d</code>）オプションで変更できます。相対パスは現在のディレクトリを基準に解釈されます。指定しない場合は、<code>book.toml</code>の<code>build.build-dir</code>キーの値、または<code>./book</code>を使います。'
exclude=lambda cmd:f'<code>{cmd}</code>コマンドは、本のルートディレクトリにある<code>.gitignore</code>に記載されたファイルの変更では、ビルドを自動実行しません。<code>.gitignore</code>には、<a href="https://git-scm.com/docs/gitignore">gitignoreの文書</a>で説明されているファイルパターンを指定できます。エディターが作成する一時ファイルを無視する場合などに便利です。'
ignore='本のルートディレクトリにある<code>.gitignore</code>だけを使います。グローバルな<code>$HOME/.gitignore</code>や、親ディレクトリの<code>.gitignore</code>は使いません。'
paragraphs={
'06-cli-init.md':[
'新しい本には、毎回共通する最小限のひな形があります。そのため、mdBookには<code>init</code>コマンドが用意されています。',
'<code>init</code>コマンドは次のように使います。',
'初めて<code>init</code>コマンドを使うと、次のファイルなどが用意されます。',
'<code>src</code>ディレクトリは、Markdownで本を書く場所です。ソースファイルや設定ファイルなどがすべて含まれます。',
'<code>book</code>ディレクトリは、本の出力先です。すべての出力は、読者が閲覧できるようにサーバーへアップロードできる状態になっています。',
'<code>SUMMARY.md</code>は本の骨組みです。詳しくは<a href="/docs/mdbook/v0-5-4/en/01-guide/23-format-summary/">別の章</a>で説明します。',
'<code>SUMMARY.md</code>がすでにある場合、<code>init</code>コマンドはまずそれを解析し、<code>SUMMARY.md</code>に記載されたパスに従って、不足しているファイルを生成します。本全体の構成を先に考えて作り、ファイルの生成をmdBookに任せられます。',
directory('init'),
'<code>--theme</code>フラグを使うと、ソースディレクトリ内の<code>theme</code>というディレクトリへ既定のテーマがコピーされ、変更できるようになります。',
'テーマは選択的に上書きされます。特定のファイルを上書きしたくない場合は、そのファイルを削除すると、既定のファイルが使われます。',
'本のタイトルを指定します。指定しない場合は、対話的なプロンプトでタイトルを尋ねられます。',
'本を<a href="/docs/mdbook/v0-5-4/en/01-guide/03-cli-build/">ビルド</a>したときに生成される<code>book</code>ディレクトリを無視するよう設定した、<code>.gitignore</code>ファイルを作成します。指定しない場合は、作成するかどうかを対話的なプロンプトで尋ねられます。',
'<code>.gitignore</code>の作成と本のタイトルについてのプロンプトを省略します。'],
'03-cli-build.md':[
'buildコマンドは、本を出力するために使います。',
'<code>SUMMARY.md</code>を解析して本の構成を把握し、対応するファイルを取得しようとします。<code>SUMMARY.md</code>に記載されていて、まだ存在しないファイルも作成することに注意してください。',
'出力は、扱いやすいようにソースと同じディレクトリ構成を保ちます。そのため、大きな本でも出力後の構成が整理された状態になります。',
directory('build'),
'<code>--open</code>（<code>-o</code>）フラグを使うと、mdbookはビルド後に、出力した本を既定のウェブブラウザーで開きます。',
dest,
'<em><strong>注：</strong></em> <em>buildコマンドは、ソースディレクトリのすべてのファイル（拡張子が<code>.md</code>のファイルを除く）を、ビルドディレクトリへコピーします。</em>'],
'09-cli-watch.md':[
'<code>watch</code>コマンドは、ファイルが変わるたびに本を出力したいときに便利です。変更のたびに<code>mdbook build</code>を繰り返しても構いませんが、<code>mdbook watch</code>を一度実行すると、ファイルを監視し、変更時に自動でビルドします。<code>SUMMARY.md</code>にまだ記載されている削除済みファイルも、再作成されます。',
directory('watch'),
'<code>--open</code>（<code>-o</code>）オプションを使うと、mdbookは出力した本を既定のウェブブラウザーで開きます。',
dest,'ファイルの変更を検出するために、複数のバックエンドを利用できます。',exclude('watch'),'<em>注：'+ignore+'</em>'],
'07-cli-serve.md':[
'serveコマンドは、HTTPで本を配信してプレビューするために使います。既定の配信先は<code>localhost:3000</code>です。',
'<code>serve</code>コマンドは、本の<code>src</code>ディレクトリの変更を監視し、変更のたびに本を再ビルドして、クライアントの表示を更新します。<code>SUMMARY.md</code>にまだ記載されている削除済みファイルも再作成します。クライアント側の表示更新には、WebSocket接続を使います。',
'<em><strong>注：</strong></em> <em><code>serve</code>コマンドは、本のHTML出力をテストするためのものであり、ウェブサイト向けの本格的なHTTPサーバーとしては想定されていません。</em>',
directory('serve'),
'<code>serve</code>のホスト名は既定で<code>localhost</code>、ポートは既定で<code>3000</code>です。どちらもコマンドラインで指定できます。',
'<code>--open</code>（<code>-o</code>）フラグを使うと、mdbookはサーバーの起動後に本を既定のウェブブラウザーで開きます。',
dest,'ファイルの変更を検出するために、複数のバックエンドを利用できます。',exclude('serve'),'<em><strong>注：</strong></em> <em>'+ignore+'</em>'],
'08-cli-test.md':[
'本を書くときに、テストを自動化したい場合があります。たとえば、<a href="https://doc.rust-lang.org/stable/book/">The Rust Programming Book</a>には、古くなる可能性のあるコード例が数多く使われています。そのため、コード例を自動でテストできることがとても重要です。',
'mdBookの<code>test</code>コマンドは、本の中にある、利用可能なテストをすべて実行します。現時点では、Rustのテストだけに対応しています。',
'rustdocは、<code>ignore</code>属性が付いたコードブロックをテストしません。',
'rustdocは、Rust以外の言語が指定されたコードブロックもテストしません。',
'rustdocは、言語が指定されていないコードブロックを<em>テストします</em>。',
directory('test'),
'<code>--library-path</code>（<code>-L</code>）オプションは、<code>rustdoc</code>が例のビルドとテストに使うライブラリー検索パスへ、ディレクトリを追加できます。複数のオプション（<code>-L foo -L bar</code>）や、カンマ区切りの一覧（<code>-L foo,bar</code>）で複数のディレクトリを指定できます。パスには、プロジェクトのビルド出力を含むCargoの<a href="https://doc.rust-lang.org/cargo/guide/build-cache.html">ビルドキャッシュ</a>の<code>deps</code>ディレクトリを指定してください。たとえば、Rustプロジェクトの本が<code>my-book</code>というディレクトリにある場合、次のコマンドは、<code>test</code>の実行時にcrateの依存関係を含めます。',
'詳しくは、<code>rustdoc</code>のコマンドライン<a href="https://doc.rust-lang.org/rustdoc/command-line-arguments.html#-l--library-path-where-to-look-for-dependencies">文書</a>を参照してください。',
'<code>--chapter</code>（<code>-c</code>）オプションは、章の名前または章への相対パスを使って、本の特定の章をテストできます。'],
'04-cli-clean.md':[
'cleanコマンドは、生成された本と、ほかのビルド成果物を削除するために使います。',directory('clean'),
'<code>--dest-dir</code>（<code>-d</code>）オプションは、本の出力ディレクトリを変更できます。このコマンドは、そのディレクトリを削除します。相対パスは現在のディレクトリを基準に解釈されます。指定しない場合は、<code>book.toml</code>の<code>build.build-dir</code>キーの値、または<code>./book</code>を使います。',
'<code>path/to/book</code>は、絶対パスでも相対パスでも構いません。'],
'05-cli-completions.md':[
'completionsコマンドは、よく使われるシェル向けの自動補完を生成します。シェルで<code>mdbook</code>を入力した後に、シェルの自動補完キー（通常はTabキー）を押すと、有効なオプションを表示したり、途中まで入力した内容を補完したりできます。',
'最初に、利用するシェルへ補完をインストールする必要があります。',
'このコマンドは、指定したシェル用の補完スクリプトを出力します。対応するシェルの一覧は、<code>mdbook completions --help</code>で確認できます。',
'補完を配置する場所は、利用するシェルとOSによって異なります。スクリプトの配置先については、シェルの文書を参照してください。']}
headings={'Specify a directory':'ディレクトリを指定する','Tip: Generate chapters from SUMMARY.md':'ヒント：SUMMARY.mdから章を生成する','Specify exclude patterns':'除外パターンを指定する','Server options':'サーバーのオプション','Disable tests on a code block':'コードブロックのテストを無効にする'}
M=json.loads((N/'CONTENT_MAP.json').read_text())
for name,ja in paragraphs.items():
 s=(N/'canonical/en/01-guide'/name).read_text();front,body=s.split('---\n',2)[1:];d=BeautifulSoup(body,'html.parser');ps=d.select('.mdbook-guide p');assert len(ps)==len(ja),(name,len(ps),len(ja))
 for old,new in zip(ps,ja):assert str(old)in body;body=body.replace(str(old),'<p>'+new+'</p>',1)
 cmd=name.split('-')[-1][:-3];title=cmd+'コマンド';body=body.replace('>The '+cmd+' command<','>'+title+'<')
 for en,jp in headings.items():body=body.replace('>'+en+'<','>'+jp+'<')
 if cmd in ['watch','serve']:
  lis=d.select('li');assert len(lis)==2
  translated=['<code>poll</code>（既定）— 毎秒ファイルシステムを走査して、ファイルの変更を確認します。','<code>native</code> — OSに組み込まれた機能を使って、ファイル変更の通知を受け取ります。継続的な処理負荷が小さくなる場合がありますが、<code>poll</code>方式の監視ほど確実でない場合があります。詳しくは、次のIssueを参照してください：'+''.join(' '+str(a)for a in lis[1].select('a'))]
  for old,new in zip(lis,translated):body=body.replace(str(old),'<li>'+new+'</li>')
 body=body.replace('/v0-5-4/en/','/v0-5-4/ja/')
 src=next(p['sourcePath']for p in M['pages']if p['id']=='01-guide/'+name)
 context=[{'kind':'source','html':f'<p>mdBook 0.5.4公式文書の非公式日本語訳。文書とその翻訳はMPL-2.0。<a href="https://github.com/rust-lang/mdBook/blob/2ea30c00f00647d2b3f4c0f79b3e0e1eabc0b66d/{src}">固定した原典</a> · <a href="/docs/mdbook/source/v0-5-4/edited/ja/{name}">編集可能な日本語文書</a> · <a href="/docs/mdbook/source/v0-5-4/mdbook-original.tar.gz">固定原資料一式</a>。</p>'},{'kind':'editorial','html':'<p>Libxでは全文・コード・図・原目次を静的に提供します。原著の編集・実行機能は原典を参照してください。コードの非表示行は全表示し、数式は原TeX表記を保持します。章の操作説明はmdBookが生成した元の本を対象とします。</p>'}]
 front=re.sub(r'^title: .*$', 'title: '+json.dumps('mdBook：'+title,ensure_ascii=False),front,flags=re.M);front=re.sub(r'^documentContext: .*$', 'documentContext: '+json.dumps(context,ensure_ascii=False),front,flags=re.M);front=front.replace('/v0-5-4/en/','/v0-5-4/ja/').replace('"text": "Command-line tool"','"text": "コマンドラインツール"').replace('"text": "Format"','"text": "形式"')
 result='---\n'+front+'---\n'+body
 for p in [N/'translations/ja/01-guide'/name,W/'src/content/docs/v0-5-4/ja/01-guide'/name,W/'public/source/v0-5-4/edited/ja'/name]:p.parent.mkdir(parents=True,exist_ok=True);p.write_text(result)
 (N/'drafts/ja/01-guide'/name).write_text(body)
 print('Saved draft',name)
