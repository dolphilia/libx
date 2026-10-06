from pathlib import Path
import json,copy,re
p=Path('/Users/dolphilia/github/libx/docs/notes/document-import/jq/1.8.2');s=json.loads((p/'PARSED_MANUAL.json').read_text())['sections'][3]
en={'entryStart':63,'entries':copy.deepcopy(s['entries'][63:75])};ja=copy.deepcopy(en)
bodies=[r'''
jqのビルド設定が入力の数値リテラルを保持する機能を含んでいる場合、この組込み関数はtrueを返します。
''',r'''
jqが"decnum"を使ってビルドされた場合、この組込み関数はtrueを返します。これは、現在のjqで数値リテラルを保持する数値バックエンドの実装です。
''',r'''
この組込みの束縛は、jq実行ファイルのビルド設定を示します。値に決まった形式はありませんが、少なくとも `./configure` のコマンドライン引数が含まれると期待できます。将来は、使用したビルドツールのバージョン文字列などが追加される可能性があります。

これは、コマンドラインの `--arg` や関連するオプションで上書きできることに注意してください。
''',r'''
`$ENV` は、jqプログラムの開始時点で設定されていた環境変数を表すオブジェクトです。

`env` は、jqの現在の環境を表すオブジェクトを出力します。

現時点では、環境変数を設定する組込み関数はありません。
''',r'''
行ごとの長さが異なる場合もある行列（配列の配列）を転置します。行はnullで埋められるため、結果は常に長方形になります。
''',r'''
`bsearch(x)` は、入力配列からxを二分探索します。入力がソート済みでxを含んでいる場合、`bsearch(x)` は配列内でのその索引を返します。そうでなくても配列がソート済みであれば、(-1 - ix)を返します。ここでixは、その位置にxを挿入しても配列のソート順が保たれる挿入位置です。配列がソートされていない場合、`bsearch(x)` は、おそらく意味のない整数を返します。
''',r'''
文字列内では、バックスラッシュに続く丸括弧の中に式を置けます。その式が返すものが、文字列に埋め込まれます。
''',r'''
組込み関数 `tojson` と `fromjson` は、それぞれ、値をJSONテキストとして出力するか、JSONテキストを値へ解析します。組込み関数 `tojson` と `tostring` の違いは、`tostring` が文字列を変更せず返すのに対し、`tojson` は文字列をJSON文字列としてエンコードする点です。
''',r'''
`@foo` 構文は、文字列の書式設定やエスケープに使います。URLや、HTML・XMLのような言語の文書などを作る際に便利です。`@foo` は、それ自体をフィルターとして使えます。利用できるエスケープは次のとおりです。

* `@text`:

  `tostring` を呼び出します。詳細はその関数を参照してください。

* `@json`:

  入力をJSONとしてシリアライズします。

* `@html`:

  文字 `<>&'"` を、対応する実体参照 `&lt;`、`&gt;`、`&amp;`、`&apos;`、`&quot;` に置き換えて、HTML/XMLエスケープを適用します。

* `@uri`:

  URIのすべての予約文字を `%XX` という並びに置き換えて、パーセントエンコードを適用します。

* `@urid`:

  `@uri` の逆の操作です。すべての `%XX` という並びを対応するURIの文字に置き換えて、パーセントデコードを適用します。

* `@csv`:

  入力は配列でなければなりません。CSVとして出力し、文字列は二重引用符で囲み、引用符は繰り返すことでエスケープします。

* `@tsv`:

  入力は配列でなければなりません。TSV（タブ区切りの値）として出力します。各入力配列を1行として出力します。フィールドは1つのタブ（ASCII `0x09`）で区切ります。入力の改行（ASCII `0x0a`）、復帰（ASCII `0x0d`）、タブ（ASCII `0x09`）、バックスラッシュ（ASCII `0x5c`）は、それぞれエスケープシーケンス `\n`、`\r`、`\t`、`\\` として出力します。

* `@sh`:

  POSIXシェルのコマンドラインで使えるように入力をエスケープします。入力が配列の場合、出力はスペースで区切った文字列の並びになります。

* `@base64`:

  RFC 4648で規定されているbase64へ入力を変換します。

* `@base64d`:

  `@base64` の逆の操作です。RFC 4648に従って入力をデコードします。注意：デコードした文字列がUTF-8でない場合、結果は未定義です。

この構文は、文字列への式の埋込みと便利に組み合わせられます。`@foo` トークンの後に文字列リテラルを置けます。文字列リテラルの内容自体は、エスケープ*されません*。ただし、その文字列リテラル内に埋め込まれる式の結果は、すべてエスケープされます。たとえば、

__BLOCK0__

は、入力 `{"search":"what is jq?"}` に対して、次の出力を生成します。

__BLOCK1__

URLのスラッシュや疑問符などは、文字列リテラルの一部だったため、エスケープされないことに注意してください。
''',r'''
jqは、高水準と低水準の組込み関数による、基本的な日付処理機能を提供します。これらの組込み関数は、すべての場合においてUTCの時刻だけを扱います。

組込み関数 `fromdateiso8601` は、ISO 8601形式の日時を、Unixエポック（1970-01-01T00:00:00Z）からの秒数へ解析します。組込み関数 `todateiso8601` は、その逆の操作を行います。

組込み関数 `fromdate` は日時文字列を解析します。現在、`fromdate` はISO 8601形式の日時文字列にだけ対応していますが、将来はさらに多くの形式の日時文字列の解析を試みるようになります。

組込み関数 `todate` は、`todateiso8601` の別名です。

組込み関数 `now` は、現在の時刻を、Unixエポックからの秒数で出力します。

Cライブラリの時刻関数に対する低水準のjqインターフェースも提供されています。`strptime`、`strftime`、`strflocaltime`、`mktime`、`gmtime`、`localtime` です。`strptime` と `strftime` で使う書式文字列については、ホストOSの文書を参照してください。注意：これらはjqで必ずしも安定したインターフェースではなく、特に地域化機能については注意が必要です。

組込み関数 `gmtime` は、Unixエポックからの秒数を受け取り、グリニッジ標準時の「分解された時刻」表現を出力します。これは数値の配列で、次の順序で表します。年、月（0始まり）、月内の日（1始まり）、時、分、秒、曜日、年内の日です。別途記載がない限り、すべて1始まりです。一部のシステムでは、1900年3月1日より前、または2099年12月31日より後の日付で、曜日の数値が誤っていることがあります。

組込み関数 `localtime` は、組込み関数 `gmtime` と同様に動作しますが、ローカルのタイムゾーン設定を使います。

組込み関数 `mktime` は、`gmtime` と `strptime` が出力する「分解された時刻」表現を受け取ります。

組込み関数 `strptime(fmt)` は、引数 `fmt` に一致する入力文字列を解析します。出力は「分解された時刻」表現で、`mktime` が受け取り、`gmtime` が出力する表現です。

組込み関数 `strftime(fmt)` は、指定した書式で時刻（GMT）を整形します。`strflocaltime` は同じ操作を行いますが、ローカルのタイムゾーン設定を使います。

`strptime` と `strftime` の書式文字列は、一般的なCライブラリの文書で説明されています。ISO 8601日時の書式文字列は `"%Y-%m-%dT%H:%M:%SZ"` です。

一部のシステムでは、jqがこれらの日付機能の一部またはすべてに対応していない場合があります。特に、macOSでは、`%u` と `%j` の指定子を `strptime(fmt)` で使えません。
''',r'''
jqはいくつかのSQL形式の演算子を提供します。

* `INDEX(stream; index_expression)`:

  この組込み関数は、指定したストリームの各値に、指定した索引式を適用してキーを計算したオブジェクトを生成します。

* `JOIN($idx; stream; idx_expr; join_expr)`:

  この組込み関数は、指定したストリームの値を、指定した索引へ結合します。索引のキーは、指定したストリームの各値に、指定した索引式を適用して計算します。ストリーム内の値と、索引内の対応する値からなる配列を、指定した結合式に渡して、それぞれの結果を生成します。

* `JOIN($idx; stream; idx_expr)`:

  `JOIN($idx; stream; idx_expr; .)` と同じです。

* `JOIN($idx; idx_expr)`:

  この組込み関数は、入力 `.` を指定した索引へ結合します。指定した索引式を `.` に適用して、索引のキーを計算します。結合操作は、前述のとおりです。

* `IN(s)`:

  この組込み関数が `true` を出力するのは、`.` が指定したストリームに現れる場合です。それ以外の場合は `false` を出力します。

* `IN(source; s)`:

  この組込み関数が `true` を出力するのは、元のストリームのいずれかの値が2番目のストリームに現れる場合です。それ以外の場合は `false` を出力します。
''',r'''
すべての組込み関数のリストを、`name/arity` という形式で返します。同じ名前でも引数の数が異なる関数は別の関数とみなされるため、`all/0`、`all/1`、`all/2` はすべてリストに含まれます。
''']
blocks=re.findall(r'(?:^ {4}[^\n]*\n?)+',en['entries'][8]['body'],re.M);assert len(blocks)==2
for i,b in enumerate(blocks):bodies[8]=bodies[8].replace('__BLOCK'+str(i)+'__',b.rstrip('\n'))
titles={6:r'文字列への式の埋込み：`\(exp)`',7:'JSONへの変換とJSONからの変換',8:'文字列の書式設定とエスケープ',9:'日付',10:'SQL形式の演算子'}
assert len(bodies)==len(ja['entries'])
for i,(e,b)in enumerate(zip(ja['entries'],bodies)):
 e['body']=b
 if i in titles:e['title']=titles[i]
for a,b in zip(en['entries'],ja['entries']):
 for k in ('title','body'):
  assert re.findall(r'`([^`]+)`',a[k])==re.findall(r'`([^`]+)`',b[k]),(a['title'],k)
  assert [l for l in a[k].splitlines()if l.startswith('    ')]==[l for l in b[k].splitlines()if l.startswith('    ')]
 assert a.get('examples',[])==b.get('examples',[])
for n,v in [('063-074.source.json',en),('063-074.ja.json',ja)]:
 with (p/'translations/chunks/04-builtin'/n).open('x')as f:f.write(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
print('examples',sum(len(e.get('examples',[]))for e in en['entries']))
for i,(a,b)in enumerate(zip(en['entries'],ja['entries']),63):
 print('\nENTRY',i,a['title'],'JA TITLE',b['title']);print('EN',a['body']);print('JA',b['body'])
