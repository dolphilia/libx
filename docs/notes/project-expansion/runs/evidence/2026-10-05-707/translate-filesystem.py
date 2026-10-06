from pathlib import Path
from bs4 import BeautifulSoup,NavigableString
import json,hashlib,datetime,sys
root=Path('/Users/dolphilia/github/libx');packet=root/'docs/notes/document-import/libuv/1.53.0';ev=root/'docs/notes/project-expansion/runs/evidence/2026-10-05-707';app=Path('/private/tmp/libx-libuv-formal-689/apps/libuv');sha=lambda p:hashlib.sha256(p.read_bytes()).hexdigest()
sys.path.insert(0,str(packet));from html_preservation import serialize_article
ja='''ファイルシステム
ファイルシステムの単純な読み書きには、
関数と
構造体を使います。
注記
libuvのファイルシステム操作は、
ソケット操作
とは異なります。ソケット操作では、オペレーティングシステムが提供するノンブロッキング操作を使います。ファイルシステム操作では内部でブロッキング関数を使いますが、これらの関数を
スレッドプール
で呼び出し、アプリケーションとのやり取りが必要になると、イベントループに登録された監視対象に通知します。
すべてのファイルシステム関数には、
同期
と
非同期
の2つの形式があります。
コールバックがnullなら、
同期
形式が自動的に呼び出され、処理は
ブロック
します。関数の戻り値は、
libuvエラーコード
です。通常、これは同期呼び出しでのみ有用です。
非同期
形式はコールバックを渡したときに呼び出され、戻り値は0です。
ファイルの読み書き
ファイル記述子は、次の関数で取得します。
と
は、標準の
Unixフラグ
です。libuvが適切なWindowsのフラグへの変換を処理します。
ファイル記述子は、次の関数で閉じます。
ファイルシステム操作のコールバックは、次のシグネチャを持ちます。
単純な
の実装を見てみましょう。まず、ファイルを開いたときのコールバックを登録します。
uvcat/main.c - ファイルを開く

フィールドは、
では、
コールバック時にファイル記述子です。ファイルを正常に開けたら、読み取りを開始します。
uvcat/main.c - 読み取りコールバック
読み取り呼び出しでは、
初期化済み
のバッファを渡してください。読み取りコールバックが呼び出される前に、このバッファにデータが格納されます。
操作は特定のPOSIX関数にほぼ直接対応するため、この場合のEOFは、
が0であることで示されます。ストリームやパイプの場合は、代わりに
定数がステータスとして渡されます。
ここには、非同期プログラムでよく使われるパターンがあります。
の呼び出しは同期的に実行します。
通常、一度限りのタスクや起動・終了段階の一部として行うタスクは、同期的に実行します。高速なI/Oが必要なのは、プログラムが主要な仕事を行い、複数のI/Oソースを扱っているときだからです
。単独のタスクでは、通常、性能差は無視できるほど小さく、同期処理の方がコードを単純にできることがあります。
ファイルシステムへの書き込みも、
を使えば同様に簡単です。
コールバックは、書き込みが完了した後に呼び出されます
。この例では、コールバックは単に次の読み取りを開始します。このように、読み取りと書き込みはコールバックを通じて交互に進みます。
uvcat/main.c - 書き込みコールバック
警告
ファイルシステムやディスクドライブは性能を重視して構成されているため、「成功」した書き込みでも、まだディスクに確定していない場合があります。
処理の連鎖を開始するのは、
です。
uvcat/main.c
警告

関数は、libuv内部で割り当てられたメモリを解放するため、ファイルシステム要求に対して必ず呼び出す必要があります。
ファイルシステム操作

、
、
など、標準的なファイルシステム操作はすべて非同期でサポートされており、引数の順序も直感的です。読み取り・書き込み・オープン呼び出しと同じパターンに従い、結果を
フィールドに返します。全一覧は次のとおりです。
ファイルシステム操作
バッファとストリーム
libuvの基本的なI/Oハンドルはストリーム（
）です。TCPソケット、TTY、ファイルI/OやIPCのためのパイプは、すべてストリームのサブクラスとして扱われます。
ストリームは、サブクラスごとの専用関数で初期化し、その後、次の関数で操作します。
ストリーム用の関数は、ファイルシステム用の関数よりも簡単に使えます。
を一度呼び出すと、libuvは、
を呼び出すまで自動的にストリームから読み取り続けます。
データの個々の単位はバッファ、すなわち
です。これは単に、バイト列へのポインタ（
）と長さ（
）をまとめたものです。
は軽量で、値渡しされます。管理が必要なのは実際のバイト列であり、アプリケーションが割り当てと解放を行わなければなりません。
エラー
このプログラムは常に動作するわけではありません。より良いものが必要です
ストリームの実演には、
を使う必要があります。これにより、ローカルファイルをストリームとして扱えます
[
2
]
。ここではlibuvを使った単純なteeユーティリティを示します。すべての操作を非同期で行うことで、イベント駆動I/Oの力がわかります。2つの書き込みは互いをブロックしませんが、書き込みが完了するまでバッファを解放しないよう、バッファのデータを慎重にコピーする必要があります。
プログラムは、次のように実行します。
まず、必要なファイルに対してパイプを開きます。libuvでは、ファイルへのパイプはデフォルトで双方向として開かれます。
uvtee/main.c - パイプからの読み取り

の第3引数は、名前付きパイプによるIPCでは1に設定する必要があります。これについては、
プロセス
で説明します。
の呼び出しは、パイプをファイル記述子、この例では
（標準入力）に関連付けます。

の監視を開始します。
コールバックは、入力データを保持する新しいバッファが必要になると呼び出されます。
は、これらのバッファを渡して呼び出されます。
uvtee/main.c - バッファの読み取り
ここでは標準の
で十分ですが、任意のメモリ割り当て方式を使えます。たとえば、node.jsは、バッファをV8オブジェクトに関連付ける独自のスラブアロケータを使っています。
読み取りコールバックの
パラメータは、エラー時には0未満になります。このエラーはEOFの場合もあり、その場合は汎用のクローズ関数、
を使ってすべてのストリームを閉じます。この関数は、ハンドルの内部型に応じて処理します。それ以外の場合、
は非負の数であり、そのバイト数を出力ストリームに書き込むことができます。最後に、バッファの割り当てと解放はアプリケーションの責任なので、データを解放します。
割り当てコールバックは、メモリの割り当てに失敗すると、長さ0のバッファを返すことがあります。この場合、読み取りコールバックはUV_ENOBUFSエラーで呼び出されます。ただし、libuvは引き続きストリームからの読み取りを試みるため、割り当て失敗時に停止したいなら、明示的に
を呼び出す必要があります。
読み取りコールバックは、
で呼び出されることもあります。これは、その時点で読み取るものがないことを示します。ほとんどのアプリケーションでは、単に無視します。
uvtee/main.c - パイプへの書き込み
は、読み取りで得られたバッファをコピーします。このバッファは、書き込み完了時に呼び出される書き込みコールバックには引き渡されません。これを解決するため、書き込み要求とバッファを
でまとめ、コールバックで取り出します。コピーを作成することで、2回の
の呼び出しによる2つのバッファを、互いに独立して解放できます。このような実演プログラムでは許容できますが、大きなアプリケーションでは、参照カウント付きバッファやバッファプールなど、より賢いメモリ管理を使いたいでしょう。
警告
他のプログラムと組み合わせて使うことを想定したプログラムは、意図的に、あるいは知らずに、パイプに書き込んでいる場合があります。このため、
SIGPIPEを受信して異常終了する
可能性があります。次の処理を、
アプリケーションの初期化段階に入れるとよいでしょう。
ファイル変更イベント
現代のオペレーティングシステムはすべて、個々のファイルやディレクトリを監視し、ファイルが変更されたときに通知を受けるためのAPIを提供しています。libuvは一般的なファイル変更通知ライブラリをラップしています
[
1
]
。これはlibuvの中でも一貫性に欠ける部分の1つです。ファイル変更通知の仕組み自体がプラットフォームごとに大きく異なるため、すべての環境で動作させるのは困難です。実演として、監視対象のいずれかのファイルが変更されるたびにコマンドを実行する、単純なユーティリティを作ります。
注記
現在、この例はOSXとWindowsでのみ動作します。
uv_fs_event_startの注記
を参照してください。
ファイル変更通知は、
で開始します。
onchange/main.c - セットアップ
第3引数は、実際に監視するファイルまたはディレクトリです。最後の引数、
は、次のいずれかです。
と
は、（まだ）何もしません。
は、対応するプラットフォームでサブディレクトリの監視も開始します。
コールバックは、次の引数を受け取ります。
 - ハンドルです。ハンドルの
フィールドは、監視を設定したファイルです。
 - ディレクトリを監視している場合は、変更されたファイルです。LinuxとWindowsでのみ非
になります。ただし、これらのプラットフォームでも
になる場合があります。
 - 
または
のいずれか、あるいは両者のビット単位ORです。
 - 
なら、
libuvエラー
があります。
この例では、単に引数を表示し、
を使ってコマンドを実行します。
onchange/main.c - ファイル変更通知コールバック
[
1
]
Linuxではinotify、DarwinではFSEvents、BSD系ではkqueue、WindowsではReadDirectoryChangesW、Solarisではイベントポートを使います。Cygwinは非対応です。
[
2
]
参照: 
親子間IPC'''.splitlines()
slug='guide/filesystem';src=packet/('canonical/en/'+slug+'.md');head,body=src.read_text().split('---\n',2)[1:];s=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');original=BeautifulSoup(body.replace('&#10;','\n'),'html.parser');nodes=[n for n in s.select_one('article').descendants if isinstance(n,NavigableString) and str(n).strip() and not n.find_parent(['code','pre']) and str(n)!='¶'];en=json.loads((ev/'source-nodes.json').read_text());assert len(nodes)==len(ja)==len(en),(len(nodes),len(ja),len(en));pairs=[]
for i,(n,t) in enumerate(zip(nodes,ja)):
 assert str(n)==en[i];pairs.append({'index':i,'en':str(n),'ja':t});n.replace_with(t)
for a in s.select('.headerlink'):a['title']='この見出しへの固定リンク'
apihead=(packet/'translation/ja/reference/api.md').read_text().split('---\n',2)[1];ctx=json.loads(next(l for l in apihead.splitlines() if l.startswith('documentContext: ')).split(': ',1)[1].replace('/api.rst','/guide/filesystem.rst'));ctx.append({'kind':'editorial','html':'<p>固定リリースに含まれるガイドは、本書と例がv1.42.0を基にしており、執筆途中で、十分なレビューを受けていないと説明しています。これらの原文の記述は保持しています。すべてのガイドの例が1.53.0向けに更新されたとするものではありません。</p><p>原文のinclude範囲62〜80行は、実ファイルの79行を超えています。実際の末尾までを選択した原文の生成結果を保持し、新しい行は追加していません。</p>'});head=head.replace(next(l for l in head.splitlines() if l.startswith('documentContext: ')),'documentContext: '+json.dumps(ctx,ensure_ascii=False));head=head.replace('title: "Filesystem"','title: "ファイルシステム"');dest=packet/('translation/ja/'+slug+'.md');dest.write_text('---\n'+head+'---\n\n'+serialize_article(s.select_one('article'),body)+'\n');target=app/('src/content/docs/v1-53-0/ja/'+slug+'.md');target.write_bytes(dest.read_bytes())
assert [str(x) for x in original.select('pre')]==[str(x) for x in s.select('pre')];assert [x.get('href') for x in original.select('a')]==[x.get('href') for x in s.select('a')];assert [x['id'] for x in original.select('[id]')]==[x['id'] for x in s.select('[id]')]
refs=[{'path':str(p.relative_to(root)),'sha256':sha(p)} for p in [packet/'sources/docs/src/guide/filesystem.rst',src,dest]]
(ev/'TRANSLATION_FILESYSTEM.json').write_text(json.dumps({'page':slug,'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'inputs':refs,'fullPageDraft':True,'scope':'entire narrative, headings, 18 code blocks, warnings, footnotes, footer','nodePairs':pairs,'alignment':{'allNarrativeNodesMapped':True,'preBlocksExact':18,'idsAndLinksExact':True},'separateContentReview':'pending','projectTranslationComplete':False,'model':{'configured':'gpt-6.1-sol','runtime':None,'localLLMUsed':False}},ensure_ascii=False,indent=2)+'\n');print('filesystem166nodes18code translated; separate review pending')
