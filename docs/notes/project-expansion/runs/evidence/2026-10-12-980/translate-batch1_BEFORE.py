from pathlib import Path
from bs4 import BeautifulSoup,Tag
import json,copy,re,hashlib,datetime,sys,shutil
N=Path(__file__).resolve().parent;W=Path(sys.argv[1]if len(sys.argv)>1 else '/private/tmp/libx-gnu-patch-formal-979');A=W/'apps/gnu-patch'
T={
'01-introduction':{
0:'patch — オリジナルファイルに差分ファイルを適用する',
1:None,
2:'通常は、次の簡単な形式で使用します。',
3:None,
4:'<code>patch</code>は、<code>diff</code>プログラムが生成した差分リストを含むパッチファイル<var>patchfile</var>を受け取り、その差分を1個または複数の元のファイルに適用して、変更後のファイルを生成します。通常、変更後のファイルは元のファイルと置き換わります。バックアップも作成できます。<code>-b</code>または<code>--backup</code>オプションを参照してください。変更するファイルの名前は通常パッチファイルから取得しますが、変更するファイルが1個だけなら、コマンドラインで<var>originalfile</var>として指定できます。',
5:'起動すると、<code>patch</code>は差分リストの形式を判別しようとします。ただし、<code>-c</code>（<code>--context</code>）、<code>-e</code>（<code>--ed</code>）、<code>-n</code>（<code>--normal</code>）、<code>-u</code>（<code>--unified</code>）のいずれかで形式を指定した場合は、その指定を優先します。コンテキスト差分（旧形式、新形式、unified形式）と通常形式の差分は<code>patch</code>自身が適用します。ed形式の差分は、パイプで<code>ed(1)</code>エディターに渡すだけです。',
6:'<code>patch</code>は、差分の前にある不要なテキストを読み飛ばしてから差分を適用し、その後にある不要なテキストも読み飛ばそうとします。そのため、差分リストを含むメールのメッセージをそのまま<code>patch</code>に渡しても動作するはずです。差分全体が一定量インデントされている場合、行がCRLFで終わる場合、またはInternet RFC 934の規定に従い、<code>-</code>で始まる行に<code>- </code>を1回以上付けて差分がカプセル化されている場合は、それらを考慮します。インデントやカプセル化を取り除いた後、<code>#</code>で始まる行はコメントとみなして無視します。',
7:'コンテキスト差分では、また適用できる範囲はそれより狭いものの通常形式の差分でも、<code>patch</code>はパッチに記された行番号の誤りを検出し、各ハンク（変更のまとまり）を適用する正しい位置を探そうとします。最初の候補位置は、ハンクに記された行番号に、直前のハンクを適用したときのオフセットを加減した位置です。その位置が正しくなければ、ハンクのコンテキストに一致する一連の行を前後に探します。まず、コンテキストのすべての行が一致する位置を探します。見つからず、かつコンテキスト差分で最大曖昧度（fuzz factor）が1以上なら、コンテキストの最初と最後の行を無視して再び探します。それでも見つからず、最大曖昧度が2以上なら、コンテキストの最初と最後の2行ずつを無視して再び探します。最大曖昧度の既定値は2です。',
8:'曖昧度を適用した後、前側のコンテキストが後側より少ないハンクは、先頭の行番号が1ならファイルの先頭に適用しなければなりません。前側のコンテキストが後側より多いハンクは、ファイルの末尾に適用しなければなりません。',
9:'ハンクを適用できる位置が見つからなければ、<code>patch</code>はそのハンクをrejectファイルに出力します。通常、その名前は出力ファイル名に<code>.rej</code>を付けたものです。<code>.rej</code>を付けると名前が長すぎる場合は、代わりに<code>#</code>を付けます。1文字の<code>#</code>を付けても長すぎる場合は、ファイル名の最後の文字を<code>#</code>に置き換えます。',
10:'拒否されたハンクは、unified形式またはコンテキスト形式の差分として出力します。入力が通常形式の差分だった場合、多くのコンテキストは空になります。rejectファイル内のハンクの行番号は、パッチファイル内の行番号と異なることがあります。これは、適用に失敗したハンクが元のファイルではなく変更後のファイルのどのあたりに入ると<code>patch</code>が考えたかを示します。',
11:'ハンクごとの処理が終わるたびに、失敗したかどうかを通知します。失敗した場合は、<code>patch</code>がそのハンクを挿入すべきだと考えた変更後のファイルの行番号も通知します。差分に指定された行番号とは別の行に適用した場合は、オフセットを通知します。1回でも大きなオフセットがあれば、ハンクを誤った場所に適用した可能性があります。一致させるために曖昧度を使用した場合も通知します。その場合も、少し疑ってみるべきです。<code>--verbose</code>オプションを指定すると、完全に一致したハンクについても通知します。',
12:'コマンドラインで元のファイル<var>origfile</var>を指定しなかった場合、<code>patch</code>は差分の前にあるテキストから、編集するファイル名を次の規則で推測します。',
13:'まず、ファイル名の候補を次のように順序付きで収集します。',
14:'コンテキスト差分のヘッダーであれば、ヘッダー内の変更前と変更後のファイル名を取得します。<code>-p num</code>または<code>--strip=num</code>オプションで必要とされる数のスラッシュがない名前は無視します。<code>/dev/null</code>という名前も無視します。',
15:'差分の前に<code>Index:</code>行があり、変更前と変更後の名前がどちらも存在しない場合、または<code>patch</code>がPOSIXに準拠している場合は、<code>Index:</code>行にある名前を取得します。',
16:'以下の規則では、ヘッダー内の出現順序にかかわらず、候補のファイル名を（変更前、変更後、index）の順序で扱います。',
17:'次に、候補のリストからファイル名を次のように選びます。',
18:'候補のうち存在するファイルがあれば、POSIXに準拠している場合は最初の名前を、それ以外の場合は最適な名前を選びます。',
19:'RCS、ClearCase、Perforce、SCCSを無視しておらず（<code>-g num</code>または<code>--get=num</code>を参照）、候補のファイルはどれも存在しないものの、RCS、ClearCase、Perforce、SCCSのマスターが見つかった場合は、そのようなマスターがある最初の候補名を選びます。',
20:'候補のファイルがどれも存在せず、RCS、ClearCase、Perforce、SCCSのマスターも見つからず、名前の候補はあり、<code>patch</code>がPOSIXに準拠しておらず、かつパッチがファイルを作成するものと考えられる場合は、必要なディレクトリの新規作成数が最も少ない最適な名前を選びます。',
21:'以上の経験則でファイル名が決まらなければ、パッチを適用するファイル名をユーザーに尋ね、入力された名前を選びます。',
22:'空でない候補リストから最適な名前を決めるには、まずパス名の構成要素が最も少ない名前をすべて選びます。その中からベース名が最も短いものをすべて選び、さらにその中から名前全体が最も短いものをすべて選びます。最後に、残った名前のうち最初のものを選びます。',
23:'また、差分の前に<code>Prereq:</code>行があれば、<code>patch</code>はその前提条件の行の最初の単語（通常はバージョン番号）を取得し、元のファイルにその単語が含まれているか調べます。見つからなければ、処理を続ける前に確認を求めます。',
24:'このため、次のようなシェルコマンドを実行すれば、',
25:'標準入力から読み込んだパッチを使い、<code>blurfl</code>ディレクトリ内のファイルへ直接パッチを適用できるはずです。',
26:'パッチファイルに複数のパッチが含まれている場合、<code>patch</code>はそれぞれが別々のパッチファイルから来たかのように適用しようとします。したがって、特に、差分リストごとに対象のファイル名を判定する必要があると想定します。また、先に述べたように、各差分リストの前にあるテキストには、ファイル名やリビジョンレベルなどの有用な情報が含まれていると想定します。'
},
'02-options':{
0:'バックアップファイルを作成します。つまり、ファイルにパッチを適用するときに、元のファイルを削除する代わりに名前を変更するかコピーします。バックアップファイル名の決め方については、<code>-V</code>または<code>--version-control</code>オプションを参照してください。',
1:'パッチがファイルに完全には一致せず、ほかの指定によってバックアップを作成することにもなっていない場合、そのファイルをバックアップします。<code>patch</code>がPOSIXに準拠していない場合の既定動作です。',
2:'パッチがファイルに完全には一致せず、ほかの指定によってバックアップを作成することにもなっていない場合、そのファイルをバックアップしません。<code>patch</code>がPOSIXに準拠している場合の既定動作です。',
3:'バックアップファイル名を<code>simple</code>方式で決定し（<code>-V method</code>または<code>--version-control method</code>を参照）、名前を生成するときにファイル名へ<var>pref</var>を付けます。たとえば、<code>-B /junk/</code>を指定すると、<code>src/patch/util.c</code>の簡易バックアップ名は<code>/junk/src/patch/util.c</code>になります。',
4:'標準出力と<code>/dev/tty</code>を除くすべてのファイルをバイナリーモードで書き込みます。読み込み時には、CRLFの行末をLFに変換する経験則を無効にします。POSIX以外のシステムで生成したパッチを、POSIXシステム上でPOSIX以外の形式のファイルに適用する際に、このオプションが必要です。POSIXシステムでは、ファイルの読み書きで行末を変換することはありません。Windowsでは、既定で読み書き時に行末を変換するため、行末の違いが重要な場合は<code>diff --binary</code>でパッチを生成するべきです。',
5:'パッチファイルを通常のコンテキスト差分として解釈します。',
6:'ほかの処理を行う前に、直ちにディレクトリ<var>dir</var>へ移動します。',
7:'<code>#ifdef ... #endif</code>構文を使って変更箇所を示します。条件を区別するシンボルには<var>define</var>を使用します。',
8:'実際にはどのファイルも変更せず、パッチを適用した場合の結果を表示します。',
9:'パッチファイルを<code>ed</code>のスクリプトとして解釈します。',
10:'パッチ適用後に空になった出力ファイルを削除します。通常、<code>patch</code>はヘッダーのタイムスタンプを調べて適用後にファイルが存在すべきか判定できるため、このオプションは不要です。ただし、入力がコンテキスト差分でない場合や、<code>patch</code>がPOSIXに準拠している場合は、このオプションを指定しない限り、パッチ適用後の空ファイルを削除しません。ファイルを削除するときには、空の祖先ディレクトリも削除しようとします。',
11:'ユーザーが自分のしていることを完全に理解しているものとみなし、質問を一切しません。対象ファイル名がヘッダーにないパッチは読み飛ばします。ファイルのバージョンがパッチの<code>Prereq:</code>行と異なっていても適用します。パッチが反転しているように見えても、反転していないとみなします。このオプションは処理状況の説明表示を抑えません。説明表示を抑えるには<code>-s</code>を使用してください。',
12:'最大曖昧度を設定します。このオプションはコンテキストを持つ差分にだけ適用され、ハンクを適用する位置を探す際に、指定した数までのコンテキスト行を無視させます。曖昧度を大きくすると、誤ったパッチ適用が起きる可能性が高くなることに注意してください。既定の曖昧度は2です。コンテキスト差分のコンテキスト行数（通常は3）以上の曖昧度を指定すると、すべてのコンテキストを無視します。',
13:'ファイルがRCSまたはSCCSの管理下にあり、存在しない場合、または読み取り専用で既定のバージョンに一致する場合の動作を制御します。また、ClearCaseまたはPerforceの管理下でファイルが存在しない場合の動作も制御します。<var>num</var>が正なら、バージョン管理システムからファイルを取得（チェックアウト）します。0なら、RCS、ClearCase、Perforce、SCCSを無視し、ファイルを取得しません。負なら、ファイルを取得するかユーザーに尋ねます。環境変数<code>PATCH_GET</code>が設定されていれば、その値がこのオプションの既定値になります。設定されていなければ、既定値は0です。',
14:'オプションの概要を表示して終了します。',
15:'<var>patchfile</var>からパッチを読み込みます。<var>patchfile</var>が<code>-</code>なら、既定の場合と同じく標準入力から読み込みます。',
16:'ファイル内のタブや空白が変わってしまった場合に備え、パターンを緩やかに照合します。パッチファイル内の1文字以上の空白の並びは、元のファイル内の任意の空白の並びに一致します。行末の空白の並びは無視します。通常の文字は、引き続き完全に一致する必要があります。コンテキストの各行も、元のファイルのいずれかの行に一致する必要があります。',
17:'<code>diff3(1)</code>や<code>merge(1)</code>と同様に、パッチファイルを元のファイルへマージします。競合が見つかると、<code>patch</code>は警告を出し、競合部分を<code>&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>行と<code>&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>行で囲みます。典型的な競合は次の形です。',
18:'<code>--merge</code>の省略可能な引数は、競合の出力形式を決めます。diff3形式では、パッチ内の変更前の行を含む<code>|||||||</code>の部分を表示します。merge形式では、この部分を表示しません。既定はmerge形式です。',
19:'このオプションを指定すると<code>--forward</code>も有効になり、<code>--fuzz=num</code>オプションは考慮されません。',
20:'パッチファイルを通常形式の差分として解釈します。',
21:'パッチを適用できない場合、通常の<code>patch</code>は最初のハンクを逆に適用してみて、すでに適用済みのパッチに見えるか調べます。<code>--forward</code>はこの確認を行わないようにします。<code>-R</code>も参照してください。',
22:'ファイルをその場で変更する代わりに、<var>outfile</var>へ出力します。<var>outfile</var>がパッチ適用対象のファイルのいずれかである場合、このオプションを使用してはいけません。<var>outfile</var>が<code>-</code>なら、出力を標準出力へ送り、通常は標準出力へ送るメッセージを標準エラー出力へ送ります。',
23:'パッチファイル内で見つかった各ファイル名から、先頭側にある<var>num</var>個のスラッシュを含む最短の接頭部分を取り除きます。隣接する1個以上のスラッシュの並びは、1個のスラッシュとして数えます。パッチの送り手とは異なるディレクトリにファイルを置いている場合などに、パッチファイル内の名前をどのように扱うか制御できます。たとえば、パッチ内のファイル名が次のようになっているとします。',
24:'<code>-p0</code>を指定すると、ファイル名全体を変更せずに使用します。<code>-p1</code>なら、',
25:'のように先頭のスラッシュを取り除きます。<code>-p4</code>なら、',
26:'となります。<code>-p</code>を指定しなければ、単に<code>blurfl.c</code>を使用します。いずれの場合も、現在のディレクトリか、<code>-d</code>で指定したディレクトリから、その名前を探します。',
27:'次のように、POSIX規格へより厳密に準拠します。',
28:'差分ヘッダーからファイル名を推測する際、（変更前、変更後、index）のリストの中で最初に存在するファイルを選びます。',
29:'パッチ適用後に空になったファイルを削除しません。',
30:'RCS、ClearCase、Perforce、SCCSからファイルを取得するかどうかを尋ねません。',
31:'コマンドラインでは、すべてのオプションをファイルより前に置く必要があります。',
32:'不一致があってもバックアップファイルを作成しません。',
33:'出力する名前を<var>word</var>で指定するスタイルで引用します。<var>word</var>には、次のいずれかを指定します。',
34:'名前をそのまま出力します。',
35:'名前にシェルのメタ文字が含まれている場合や、出力が曖昧になる場合に、シェル用に引用します。',
36:'通常は引用が不要な名前でも、シェル用に引用します。',
37:'C言語の文字列と同じように名前を引用します。',
38:'<code>c</code>と同様に引用しますが、前後の二重引用符は付けません。',
39:'<code>--quoting-style</code>の既定値は、環境変数<code>QUOTING_STYLE</code>で指定できます。この環境変数が設定されていなければ、既定値は<code>shell</code>です。',
40:'拒否されたハンクを、既定の<code>.rej</code>ファイルではなく<var>rejectfile</var>へ出力します。<var>rejectfile</var>が<code>-</code>なら、拒否されたハンクを捨てます。',
41:'変更前と変更後のファイルが入れ替わった状態でパッチが作成されたものとみなします。残念ながら、人間のすることなので、こうしたことは実際に時々起こります。<code>patch</code>は適用前に各ハンクを逆にしようとします。拒否されたハンクも逆にした形式で出力します。ed形式の差分スクリプトでは逆の操作を再構成する情報が少なすぎるため、<code>-R</code>は動作しません。',
42:'最初のハンクの適用に失敗すると、<code>patch</code>はハンクを逆にして適用できるか試します。逆にすれば適用できる場合は、<code>-R</code>を有効にするか尋ねます。逆にしても適用できなければ、パッチを通常どおり適用し続けます。ただし、この方法では、通常形式の差分で最初のコマンドが追加（本来は削除であるべきもの）の場合、反転したパッチを検出できません。空のコンテキストはどこにでも一致するので、追加は常に成功するためです。幸い、ほとんどのパッチは行を削除するよりも追加・変更するため、反転した通常形式の差分の多くは削除から始まります。その削除が失敗すると、この経験則による判定が働きます。',
43:'読み取り専用のファイルを変更しようとした場合の動作を指定します。問題になり得ることを無視する<code>ignore</code>、警告する<code>warn</code>（既定値）、失敗させる<code>fail</code>のいずれかです。',
44:'rejectファイルを指定した<var>format</var>（<code>context</code>または<code>unified</code>）で生成します。このオプションを指定しない場合、入力がunified形式のパッチなら拒否されたハンクもunified形式で出力し、それ以外は通常のコンテキスト差分形式で出力します。',
45:'エラーが発生しない限り、表示を抑えて動作します。',
46:'入力ファイルを探すときにシンボリックリンクをたどります。リンク先のファイルを変更するのではなく、シンボリックリンク自体を置き換えます。シンボリックリンクに対するGit形式のパッチは適用できなくなります。このオプションは以前のpatchとの後方互換性のために存在し、使用は推奨されません。',
47:'<code>-f</code>と同様に質問を抑えますが、前提がいくつか異なります。ヘッダーにファイル名がないパッチは読み飛ばします（<code>-f</code>と同じです）。ファイルのバージョンがパッチの<code>Prereq:</code>行と異なる場合、そのパッチを読み飛ばします。パッチが反転しているように見える場合は、反転しているとみなします。',
48:'コンテキスト差分のヘッダーにあるタイムスタンプから、パッチ適用後のファイルの変更時刻とアクセス時刻を設定します。タイムスタンプに明記されていなければ、コンテキスト差分のヘッダーはローカル時刻を使用しているものとみなします。',
49:'タイムゾーンを含まないタイムスタンプでこのオプションを使用することは推奨されません。ローカル時刻を使うパッチは、別のタイムゾーンにいる人が簡単に使用できず、夏時間の調整で時計を戻す際にはローカルのタイムスタンプが曖昧になるためです。タイムスタンプにタイムゾーンを含めるか、UTCを使用してパッチを生成し、代わりに<code>-Z</code>または<code>--set-utc</code>を使用してください。',
50:'パッチファイルをunified形式のコンテキスト差分として解釈します。',
51:'<code>patch</code>のリビジョンヘッダーとパッチレベルを表示して終了します。',
52:'<var>method</var>を使ってバックアップファイル名を決定します。この方式は環境変数<code>PATCH_VERSION_CONTROL</code>でも指定でき、それが設定されていなければ<code>VERSION_CONTROL</code>でも指定できます。このオプションの指定は環境変数より優先します。方式の指定は、バックアップを作成するかどうかには影響せず、作成するバックアップファイルの名前だけに影響します。',
53:'<var>method</var>の値は、GNU Emacsの<code>version-control</code>変数に似ています。<code>patch</code>は、より説明的な同義語も受け付けます。使用できる値は次のとおりです。一意に判別できる省略形も使用できます。',
54:'すでに番号付きバックアップがあるファイルには番号付きバックアップを作成し、それ以外には簡易バックアップを作成します。これが既定値です。',
55:'番号付きバックアップを作成します。ファイル<var>F</var>の番号付きバックアップ名は<code>F.~N~</code>となり、<var>N</var>はバージョン番号です。',
56:'簡易バックアップを作成します。<code>-B</code>または<code>--prefix</code>、<code>-Y</code>または<code>--basename-prefix</code>、<code>-z</code>または<code>--suffix</code>で、簡易バックアップの名前を指定できます。これらを指定しない場合は、簡易バックアップ用の接尾辞を使用します。環境変数<code>SIMPLE_BACKUP_SUFFIX</code>が設定されていればその値を、設定されていなければ<code>.orig</code>を使用します。',
57:'番号付きバックアップや簡易バックアップのファイル名が長すぎる場合は、代わりに接尾辞<code>~</code>を使用します。<code>~</code>を付けても長すぎる場合は、ファイル名の最後の文字を<code>~</code>に置き換えます。',
58:'処理について通常より詳しい情報を表示します。',
59:'<code>patch</code>自体の開発者向けの、内部デバッグフラグを設定します。',
60:'バックアップファイル名を<code>simple</code>方式で決定し（<code>-V method</code>または<code>--version-control method</code>を参照）、バックアップ名を生成するときにファイルのベース名の前へ<var>pref</var>を付けます。たとえば、<code>-Y .del/</code>を指定すると、<code>src/patch/util.c</code>の簡易バックアップ名は<code>src/patch/.del/util.c</code>になります。',
61:'バックアップファイル名を<code>simple</code>方式で決定し（<code>-V method</code>または<code>--version-control method</code>を参照）、接尾辞に<var>suffix</var>を使用します。たとえば、<code>-z -</code>を指定すると、<code>src/patch/util.c</code>のバックアップ名は<code>src/patch/util.c-</code>になります。',
62:'コンテキスト差分のヘッダーにあるタイムスタンプから、パッチ適用後のファイルの変更時刻とアクセス時刻を設定します。タイムスタンプに明記されていなければ、コンテキスト差分のヘッダーは協定世界時（UTC、しばしばGMTとも呼ばれます）を使用しているものとみなします。<code>-T</code>または<code>--set-time</code>も参照してください。',
63:'<code>-Z</code>または<code>--set-utc</code>、および<code>-T</code>または<code>--set-time</code>は通常、元のファイルの時刻がパッチのヘッダーに記された時刻と一致しない場合や、ファイルの内容がパッチに完全には一致しない場合、ファイルの時刻を設定しません。ただし、<code>-f</code>または<code>--force</code>を指定すれば、一致するかどうかにかかわらず設定します。',
64:'<code>diff</code>の出力形式の制限により、これらのオプションでは、内容が変わっていないファイルの時刻を更新できません。また、これらを使用した場合は、パッチを適用したファイルに依存するファイルをすべて（たとえば<code>make clean</code>で）削除するべきです。そうすれば、後で<code>make</code>を実行したときに、変更されたファイルの時刻によって混乱することを避けられます。'
},
'03-environment-and-references':{
0:'RCS、ClearCase、Perforce、SCCSから、存在しないファイルや読み取り専用のファイルを既定で取得するかどうかを指定します。<code>-g</code>または<code>--get</code>を参照してください。',
1:'設定されている場合、<code>patch</code>は既定でPOSIX規格へより厳密に準拠します。<code>--posix</code>を参照してください。',
2:'<code>--quoting-style</code>の既定値です。',
3:'簡易バックアップの名前で、<code>.orig</code>の代わりに使用する接尾辞です。',
4:'一時ファイルを置くディレクトリです。このリストの中で最初に設定されている環境変数を使用します。どれも設定されていなければ、既定値はシステムに依存します。Unixでは通常<code>/tmp</code>です。',
5:'バックアップ名のバージョン管理方式を選びます。<code>-v</code>または<code>--version-control</code>を参照してください。',
6:'一時ファイル。',
7:'制御端末。ユーザーへの質問に対する回答を受け取るために使用します。',
8:None,
9:None
},
'04-notes-for-patch-senders':{
0:'パッチを送る場合は、いくつか心に留めておくべきことがあります。',
1:'パッチは一貫した手順で作成してください。バージョン管理システムを使用していれば、これは簡単なはずです。たとえばGitでは<code>git diff</code>を使用できます。それ以外の場合は、<code>diff -Naur old new</code>がよい方法です。<var>old</var>と<var>new</var>は、それぞれ変更前と変更後のディレクトリを表します。これらの名前にスラッシュを含めてはいけません。',
2:'ファイルの内容だけでなくタイムスタンプも伝える場合は、<code>diff</code>の出力ヘッダーに、従来のUnix形式を使った世界時の日付と時刻を含めるべきです。そうすれば、受け手は<code>-Z</code>または<code>--set-utc</code>を使用できます。次は、そのようなヘッダーを生成するコマンドの例です。Bourneシェルの構文を使用しています。',
3:'受け手がどのディレクトリへ<code>cd</code>し、<code>patch</code>にどのオプションを指定すればよいかを伝えて、パッチの適用方法を説明してください。オプションは<code>-Np1</code>を推奨します。自分を受け手とみなし、元のファイルのコピーへパッチを適用して、手順を試してください。',
4:'<code>patchlevel.h</code>ファイルを用意し、送るパッチファイルの最初の差分でパッチレベルを増やすようにすれば、多くの人の苦労を減らせます。パッチに<code>Prereq:</code>行を入れておけば、順序を間違えて適用しようとしたときに、何の警告もなく適用されることを防げます。',
5:'<code>/dev/null</code>、またはエポック（1970-01-01 00:00:00 UTC）の時刻を持つ空ファイルと、作成したいファイルを比較する差分を送れば、ファイルを新規作成できます。これは、対象ディレクトリにそのファイルがまだ存在しない場合にだけ機能します。逆に、削除したいファイルとエポックの時刻を持つ空ファイルを比較するコンテキスト差分を送れば、そのファイルを削除できます。ただし、<code>patch</code>がPOSIXに準拠していて、<code>-E</code>または<code>--remove-empty-files</code>を指定しない場合は削除しません。ファイルを作成・削除するパッチを簡単に生成するには、GNU <code>diff</code>の<code>-N</code>または<code>--new-file</code>を使用します。',
6:'受け手が<code>-pN</code>を使用する場合、次のような出力を送ってはいけません。',
7:'2つのファイル名でスラッシュの数が異なり、<code>patch</code>のバージョンによってファイル名の解釈が異なるためです。混乱を避けるには、代わりに次のような出力を送ってください。',
8:'<code>README.orig</code>のようなバックアップファイル名を比較するパッチは避けてください。<code>patch</code>が本来のファイルではなくバックアップへパッチを適用してしまうおそれがあるためです。代わりに、<code>old/README</code>と<code>new/README</code>のように、別々のディレクトリにある同じベース名のファイルを比較するパッチを送ってください。',
9:'反転したパッチを送らないように注意してください。受け手が、すでにそのパッチを適用したのではないかと迷ってしまうためです。',
10:'パッチでは派生ファイルを変更しないようにしてください。たとえば、makefileに<code>configure: configure.ac</code>という行がある場合の<code>configure</code>が該当します。受け手自身が派生ファイルを再生成できるはずだからです。派生ファイルの差分を送る必要がある場合は、UTCを使って差分を生成し、受け手には<code>-Z</code>または<code>--set-utc</code>を指定して適用してもらってください。また、パッチを適用したファイルに依存する未変更のファイルを、すべて（たとえば<code>make clean</code>で）削除してもらってください。',
11:'582個の差分リストを1つのファイルにまとめても済むかもしれませんが、問題が起きた場合に備え、関連するパッチごとにファイルを分ける方が賢明でしょう。'
},
'05-diagnostics-and-caveats':{
0:'診断メッセージは一般に、<code>patch</code>がパッチファイルを解析できなかったことを示します。',
1:'<code>--verbose</code>を指定した場合、<code>Hmm...</code>というメッセージは、パッチファイル内に未処理のテキストがあり、そこにパッチが含まれているか、含まれているならどの形式かを<code>patch</code>が推測しようとしていることを示します。',
2:'<code>patch</code>の終了ステータスは、すべてのハンクを適用できた場合は0、一部のハンクを適用できなかった場合やマージの競合があった場合は1、より重大な問題があった場合は2です。一連のパッチをループで適用する際は、この終了ステータスを調べるべきです。そうすれば、適用が途中で終わったファイルに次のパッチを適用することを防げます。',
3:'コンテキスト差分では、空ファイル、空ディレクトリ、シンボリックリンクなどの特殊ファイルの作成や削除を確実には表現できません。また、所有者、アクセス許可、あるファイルが別のファイルへのハードリンクかどうかなど、ファイルのメタデータの変更も表現できません。このような変更も必要な場合は、それを行うための別の指示（シェルスクリプトなど）をパッチに添えるべきです。',
4:'<code>patch</code>は、edスクリプトの行番号がずれていても判定できません。通常形式の差分でも、変更または削除が見つかったときにしか不正な行番号を検出できません。曖昧度3のコンテキスト差分でも、同じ問題が起こり得ます。このような場合は、おそらくコンテキスト差分を取り、変更が妥当かを確認するべきでしょう。もちろん、エラーなくコンパイルできることは、パッチが正しく適用された有力な目安ですが、必ずそうとは限りません。',
5:'<code>patch</code>は、多くの推測が必要な場合でも通常は正しい結果を出します。ただし、正しい結果が保証されるのは、パッチの生成に使ったものとまったく同じバージョンのファイルへ適用する場合だけです。'
}}
headings={'NAME':'名前','SYNOPSIS':'書式','DESCRIPTION':'説明','OPTIONS':'オプション','ENVIRONMENT':'環境変数','FILES':'ファイル','SEE_ALSO':'関連項目','NOTES_FOR_PATCH_SENDERS':'パッチを送る人への注意','DIAGNOSTICS':'診断と終了ステータス','CAVEATS':'注意事項'}
titles={'01-introduction':'導入と使い方','02-options':'オプション','03-environment-and-references':'環境変数・ファイル・関連項目','04-notes-for-patch-senders':'パッチを送る人への注意','05-diagnostics-and-caveats':'診断と注意事項'}
rows=[]
for name,translations in T.items():
 en=N/'preferred/en/01-guide'/(name+'.md');raw=en.read_text();front,body=raw.split('---',2)[1:];s=BeautifulSoup(body,'html.parser');nodes=s.select('p,dd,li');assert set(translations)==set(range(len(nodes))),(name,len(nodes),set(range(len(nodes)))-set(translations));unitrows=[]
 for i,node in enumerate(nodes):
  before=''.join(str(x)for x in node.contents);value=translations[i];prefix=[]
  if node.find(['p','dd','li']):
   for x in node.contents:
    if isinstance(x,Tag)and x.name in ['p','dd','li','dl','ul','ol']:break
    prefix.append(x)
   assert value is not None
   old=''.join(str(x)for x in prefix)
   for x in prefix:x.extract()
   for x in reversed(list(BeautifulSoup(value,'html.parser').contents)):node.insert(0,x)
  else:
   old=before
   if value is not None:
    node.clear()
    for x in list(BeautifulSoup(value,'html.parser').contents):node.append(x)
  unitrows.append({'index':i,'tag':node.name,'mode':'prefix'if prefix else 'whole','originalHTML':old,'translatedHTML':value,'status':'draft-not-reviewed'})
 for h in s.select('h2.Sh'):h.string=headings[h['id']]
 # Mark literal conflict-example explanatory placeholders while preserving the original seven lines.
 if name=='02-options':
  pre=s.select_one('pre');p=BeautifulSoup('<p>例の<code>lines from the original file</code>は元のファイルの行、<code>original lines from the patch</code>はパッチ内の変更前の行、<code>new lines from the patch</code>はパッチ内の変更後の行を表します。</p>','html.parser').p;pre.insert_after(p)
 front=re.sub(r'^title: .+$','title: '+json.dumps(titles[name],ensure_ascii=False),front,flags=re.M)
 htmlbody=re.sub(r'(<pre[^>]*>)([\s\S]*?)(</pre>)',lambda m:m[1]+m[2].replace('\n','&#10;')+m[3],str(s));out=N/'preferred/ja/01-guide'/(name+'.md');out.parent.mkdir(parents=True,exist_ok=True);out.write_text('---'+front+'---\n\n'+htmlbody.strip()+'\n');target=A/'src/content/docs/v2-8/ja/01-guide'/out.name;target.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(out,target)
 u=N/'translation-units'/out.name.replace('.md','.json');u.parent.mkdir(parents=True,exist_ok=True);u.write_text(json.dumps({'page':'01-guide/'+out.name,'sourceSHA256':hashlib.sha256(en.read_bytes()).hexdigest(),'translationSHA256':hashlib.sha256(out.read_bytes()).hexdigest(),'status':'draft-not-reviewed','units':unitrows,'extra':'Conflict-example placeholder explanations only'if name=='02-options'else None},ensure_ascii=False,indent=2)+'\n');rows.append({'page':'01-guide/'+out.name,'EnglishSHA256':hashlib.sha256(en.read_bytes()).hexdigest(),'JapaneseSHA256':hashlib.sha256(out.read_bytes()).hexdigest(),'translationUnits':len(unitrows)})
(N/'BATCH1_DRAFTS.json').write_text(json.dumps({'at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'drafts-not-meaning-reviewed','pages':5,'rows':rows,'sourceWords':4495,'method':'Independent translation of fixed official patch.man canonical text; JM not adopted','limits':['Whole meaning review is pending','Identifiers, literal commands and bibliography preserved in original language','Original -v in environment reference retained; assess source discrepancy in review']},ensure_ascii=False,indent=2)+'\n');print('Independent5Japanese drafts; full meaning review pending')
